import { useContext, useEffect, useRef, useState } from 'react';
import { PopupTimeout } from './popupTimeout';
import { PopupInline, PopupLayer } from './popupPlacement';
import { createPortal } from 'react-dom';
import Icon from '../icon/Icon';
import { useT } from '../../../hooks/useHa';
import {
  CLOSE_MS,
  StyledDialog,
  StyledInlineBackdrop,
  StyledPopupBody,
  StyledPopupClose,
  StyledPopupHeader,
  StyledPopupIcon,
  StyledPopupTitle,
} from './Popup.styled';
import { clearPopup, pushPopup, removePopup } from './popupStack';

interface PopupProps {
  open: boolean;
  onClose: () => void;
  title: string;
  subtitle?: React.ReactNode;
  icon?: string;
  iconColor?: string;
  /** What it shows is on, lit in this colour: its glass shines as the tile's does. */
  glow?: string;
  /** In units. Wide by default: a wall tablet is read at arm's length. */
  width?: number;
  /**
   * Close after this long without a touch; 0 never closes. Without it, the
   * dashboard's own setting (see popupTimeout) -- a popup left open on a
   * wall tablet otherwise stays open until somebody walks over.
   */
  idleMs?: number;
  /** Fill the screen, for the editor. */
  full?: boolean;
  /**
   * The body does not scroll as a whole: its content keeps what matters in
   * view and scrolls a part of its own (a `PopupScroll`) when it must.
   */
  fixedBody?: boolean;
  /** Extra controls in the header, before the close button. */
  actions?: React.ReactNode;
  children: React.ReactNode;
}

/**
 * One popup, for everything that opens from the dashboard.
 *
 * A native <dialog> opened with showModal(), which puts it in the top layer:
 * above everything, positioned against the viewport whatever transforms sit
 * above it in the tree, with focus trapping and Escape for free. Its children
 * are only rendered while it is open, so a closed popup's history streams and
 * forecast subscriptions do not exist.
 */
const Popup: React.FC<PopupProps> = ({
  open,
  onClose,
  title,
  subtitle,
  icon,
  iconColor,
  glow,
  width = 50,
  idleMs: ownIdleMs,
  full = false,
  fixedBody = false,
  actions,
  children,
}) => {
  const ref = useRef<HTMLDialogElement>(null);
  const t = useT();
  // Its own, where it has one (the PIN's); else the dashboard's.
  const dashboardIdleMs = useContext(PopupTimeout);
  const inline = useContext(PopupInline);
  const layer = useContext(PopupLayer);
  const idleMs = ownIdleMs ?? dashboardIdleMs;
  // Its content stays while it animates out, and goes once it is closed.
  const [rendered, setRendered] = useState(open);
  if (open && !rendered) setRendered(true);

  // After every render, not only when `open` changes: the <dialog> element
  // itself can be replaced while the popup stays open -- a hot reload in
  // development does exactly that -- and a new one not shown as a modal
  // would draw inline, inside whatever card opened it.
  useEffect(() => {
    const dialog = ref.current;
    if (!dialog) return;
    // Not while the panel is out of the page (a hidden tab): showModal()
    // throws there. Put back, the mount opens what should be open.
    if (open && !dialog.open && dialog.isConnected) {
      // The dialog takes the first focus itself, so its close button is not
      // drawn with a focus ring the moment it opens.
      dialog.setAttribute('autofocus', '');
      if (inline) dialog.show();
      else dialog.showModal();
      pushPopup(dialog);
    }
    if (!open && dialog.open && !('closing' in dialog.dataset)) {
      // Animated out first (data-closing, see Popup.styled), then closed.
      dialog.dataset.closing = '';
      // Off the stack as it starts to go: the popup beneath brightens as this one fades.
      removePopup(dialog);
      let done = false;
      const finish = () => {
        if (done) return;
        done = true;
        dialog.removeEventListener('animationend', onEnd);
        delete dialog.dataset.closing;
        dialog.close();
        clearPopup(dialog);
        // Closing hands focus back to the button that opened the popup, and
        // the browser rings it -- a white outline on a wall tablet nobody
        // uses a keyboard on.
        ((dialog.getRootNode() as Document | ShadowRoot).activeElement as HTMLElement | null)?.blur();
        setRendered(false);
      };
      // Its own animation ending, not one of something inside it.
      const onEnd = (event: AnimationEvent) => event.target === dialog && finish();
      dialog.addEventListener('animationend', onEnd);
      // Without animations (reduced motion, a hidden tab), close anyway.
      window.setTimeout(finish, CLOSE_MS + 100);
    }
  });

  // Gone from the page while open -- its tile removed, the dashboard
  // switched: off the stack, or the popups left would stay dimmed.
  useEffect(() => {
    const dialog = ref.current;
    return () => {
      if (dialog) clearPopup(dialog);
    };
  }, []);

  useEffect(() => {
    const dialog = ref.current;
    if (!open || !dialog || !idleMs) return;
    let timer = window.setTimeout(onClose, idleMs);
    const reset = () => {
      window.clearTimeout(timer);
      timer = window.setTimeout(onClose, idleMs);
    };
    dialog.addEventListener('pointerdown', reset);
    dialog.addEventListener('keydown', reset);
    dialog.addEventListener('scroll', reset, true);
    return () => {
      window.clearTimeout(timer);
      dialog.removeEventListener('pointerdown', reset);
      dialog.removeEventListener('keydown', reset);
      dialog.removeEventListener('scroll', reset, true);
    };
  }, [open, idleMs, onClose]);

  const content = (
    <>
      {/* In the preview, a backdrop of its own: a plain dialog has none. */}
      {inline && rendered && <StyledInlineBackdrop data-closing={open ? undefined : ''} onClick={onClose} />}
      <StyledDialog
        ref={ref}
        data-inline={inline || undefined}
        tabIndex={-1}
        $width={width}
        $full={full}
        data-on={Boolean(glow)}
        style={glow ? ({ '--on-color': glow } as React.CSSProperties) : undefined}
        // Escape closes a dialog by itself; route it through onClose so React
        // state and the element agree about whether it is open.
        // However the dialog was closed -- by us, by the browser, by a script --
        // React hears of it, or the next render would open it again.
        // Its own events only: React carries a popup's close and cancel up to
        // the popup it was opened from, which then closed with it.
        onClose={event => event.target === event.currentTarget && open && onClose()}
        onCancel={event => {
          if (event.target !== event.currentTarget) return;
          event.preventDefault();
          onClose();
        }}
        // A click on the dialog element itself -- not on anything inside it --
        // is a click on the backdrop.
        onClick={event => {
          if (event.target === event.currentTarget) onClose();
        }}
      >
        {rendered && (
          <>
            <StyledPopupHeader>
              {icon && (
                <StyledPopupIcon $color={iconColor}>
                  <Icon icon={icon} />
                </StyledPopupIcon>
              )}
              <StyledPopupTitle>
                <h2>{title}</h2>
                {subtitle && <p>{subtitle}</p>}
              </StyledPopupTitle>
              {actions}
              <StyledPopupClose type='button' onClick={onClose} aria-label={t('close')}>
                <Icon icon='mdi:close' />
              </StyledPopupClose>
            </StyledPopupHeader>
            <StyledPopupBody $fixed={fixedBody}>{children}</StyledPopupBody>
          </>
        )}
      </StyledDialog>
    </>
  );
  return inline && layer ? createPortal(content, layer) : content;
};

export default Popup;
