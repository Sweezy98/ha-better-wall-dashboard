import { useEffect, useRef } from 'react';
import { useT } from '../../hooks/useHa';
import HaButton from './ha/HaButton';
import { StyledModal } from './editor.styled';

export interface ConfirmRequest {
  title: string;
  text?: string;
  /** The label of the button that goes ahead. */
  confirm: string;
  /** Coloured as destructive: deleting, discarding. */
  danger?: boolean;
}

/**
 * Asks before something is lost. Escape or the backdrop back out, as Home
 * Assistant's own dialogs do; the answer that goes ahead is furthest right
 * and, when it destroys something, coloured as such.
 */
const ConfirmDialog: React.FC<{ request: ConfirmRequest | null; onAnswer: (ok: boolean) => void }> = ({ request, onAnswer }) => {
  const t = useT();
  const ref = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    const dialog = ref.current;
    if (!dialog) return;
    if (request && !dialog.open) dialog.showModal();
    if (!request && dialog.open) dialog.close();
  });

  return (
    <StyledModal
      ref={ref}
      role='alertdialog'
      tabIndex={-1}
      onCancel={event => {
        event.preventDefault();
        onAnswer(false);
      }}
      onClick={event => event.target === event.currentTarget && onAnswer(false)}
    >
      {request && (
        <>
          <h2>{request.title}</h2>
          {request.text && <p className='muted'>{request.text}</p>}
          <div className='actions'>
            <HaButton appearance='plain' onClick={() => onAnswer(false)}>
              {t('cancel')}
            </HaButton>
            <HaButton appearance='accent' danger={request.danger} onClick={() => onAnswer(true)}>
              {request.confirm}
            </HaButton>
          </div>
        </>
      )}
    </StyledModal>
  );
};

export default ConfirmDialog;
