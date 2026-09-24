import { useEffect, useRef } from 'react';
import Icon from '../icon/Icon';
import { useT } from '../../../hooks/useHa';
import { StyledDialog, StyledPopupBody, StyledPopupClose, StyledPopupHeader, StyledPopupIcon, StyledPopupTitle } from './Popup.styled';

interface PopupProps {
  open: boolean;
  onClose: () => void;
  title: string;
  subtitle?: React.ReactNode;
  icon?: string;
  iconColor?: string;
  /** In units. Wide by default: a wall tablet is read at arm's length. */
  width?: number;
  /**
   * Close after this long without a touch. A popup left open on a wall
   * tablet stays open until somebody walks over; two minutes is long enough
   * to read a forecast and short enough that the house does not find it
   * still open in the evening. 0 never closes -- the editor, where somebody
   * reading a form is not idle.
   */
  idleMs?: number;
  /** Fill the screen, for the editor. */
  full?: boolean;
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
  width = 50,
  idleMs = 120_000,
  full = false,
  actions,
  children,
}) => {
  const ref = useRef<HTMLDialogElement>(null);
  const t = useT();

  useEffect(() => {
    const dialog = ref.current;
    if (!dialog) return;
    if (open && !dialog.open) dialog.showModal();
    if (!open && dialog.open) dialog.close();
  }, [open]);

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

  return (
    <StyledDialog
      ref={ref}
      $width={width}
      $full={full}
      // Escape closes a dialog by itself; route it through onClose so React
      // state and the element agree about whether it is open.
      onCancel={event => {
        event.preventDefault();
        onClose();
      }}
      // A click on the dialog element itself -- not on anything inside it --
      // is a click on the backdrop.
      onClick={event => {
        if (event.target === event.currentTarget) onClose();
      }}
    >
      {open && (
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
          <StyledPopupBody>{children}</StyledPopupBody>
        </>
      )}
    </StyledDialog>
  );
};

export default Popup;
