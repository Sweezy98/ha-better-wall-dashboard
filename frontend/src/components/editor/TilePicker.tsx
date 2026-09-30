import { useEffect, useRef } from 'react';
import styled from 'styled-components';
import { useT } from '../../hooks/useHa';
import type { LibraryEntry } from '../library/registry';
import Icon from '../base/icon/Icon';
import HaButton from './ha/HaButton';
import { StyledModal } from './editor.styled';

const StyledPicker = styled(StyledModal)`
  width: min(760px, calc(100vw - 32px));

  .types {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
    gap: 12px;
  }

  /* A card per type, as Home Assistant's card picker has them. */
  .type {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 8px;
    padding: 16px;
    border-radius: 16px;
    border: 1px solid var(--divider-color, rgba(255, 255, 255, 0.12));
    background: var(--secondary-background-color, rgba(255, 255, 255, 0.03));
    color: inherit;
    font: inherit;
    text-align: left;
    cursor: pointer;
    transition:
      border-color 0.2s ease,
      background 0.2s ease;
  }

  .type:hover,
  .type:focus-visible {
    border-color: var(--primary-color, #03a9f4);
    outline: none;
  }

  .type .icon {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    font-size: 22px;
    background: color-mix(in srgb, var(--primary-color, #03a9f4) 18%, transparent);
    color: var(--primary-color, #03a9f4);
  }

  .type .name {
    font-weight: 500;
  }

  .type .description {
    font-size: 13px;
    line-height: 1.4;
    color: var(--secondary-text-color, #9b9b9b);
  }
`;

interface TilePickerProps {
  open: boolean;
  types: LibraryEntry[];
  onPick: (type: string) => void;
  onClose: () => void;
}

/** The tiles there are to add, as cards to pick from -- what Lovelace's "add card" is to its cards. */
const TilePicker: React.FC<TilePickerProps> = ({ open, types, onPick, onClose }) => {
  const t = useT();
  const ref = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    const dialog = ref.current;
    if (!dialog) return;
    if (open && !dialog.open && dialog.isConnected) dialog.showModal();
    if (!open && dialog.open) dialog.close();
  });

  return (
    <StyledPicker
      ref={ref}
      tabIndex={-1}
      onCancel={event => {
        event.preventDefault();
        onClose();
      }}
      onClick={event => event.target === event.currentTarget && onClose()}
    >
      {open && (
        <>
          <h2>{t('pick_tile')}</h2>
          <p className='muted'>{t('pick_tile_hint')}</p>
          <div className='types'>
            {types.map(entry => (
              <button key={entry.type} type='button' className='type' onClick={() => onPick(entry.type)}>
                <span className='icon'>
                  <Icon icon={entry.icon} />
                </span>
                <span className='name'>{t(entry.label)}</span>
                <span className='description'>{t(entry.description)}</span>
              </button>
            ))}
          </div>
          <div className='actions'>
            <HaButton appearance='plain' onClick={onClose}>
              {t('cancel')}
            </HaButton>
          </div>
        </>
      )}
    </StyledPicker>
  );
};

export default TilePicker;
