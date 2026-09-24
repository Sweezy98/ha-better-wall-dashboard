import type { BarButton } from '../../../config/types';
import { LIMITS } from '../../../config/types';
import { useT } from '../../../hooks/useHa';
import { move, newId, replaceAt } from '../../../lib/editing';
import Icon from '../../base/icon/Icon';
import HaButton from '../ha/HaButton';
import TileListEditor from '../TileListEditor';
import { IconField, ListControls, NumberField, TextField } from '../fields';
import { StyledRow } from '../fields.styled';
import { StyledFieldset, StyledList } from '../editor.styled';
import { ScreenTitle, type ScreenProps } from './common';

/** The bottom bar: up to five buttons, each opening a popup of tiles. */
export const ButtonsScreen: React.FC<ScreenProps> = ({ draft, update, open }) => {
  const t = useT();
  const buttons = draft.buttons;
  const set = (next: BarButton[]) => update({ ...draft, buttons: next });
  return (
    <>
      <ScreenTitle title={t('tab_buttons')} lead={t('lead_buttons')} />
      {buttons.length > 0 && (
        <StyledList>
          {buttons.map((button, index) => (
            <li key={button.id}>
              <button type='button' className='open' onClick={() => open({ kind: 'button', button: index })}>
                <Icon className='icon' icon={button.icon || 'mdi:gesture-tap'} />
                <span className='text'>
                  <span>{button.name || t('button_n', { n: index + 1 })}</span>
                  <span className='secondary'>{t('tiles_count', { count: button.tiles.length })}</span>
                </span>
              </button>
              <ListControls
                index={index}
                length={buttons.length}
                onMove={to => set(move(buttons, index, to))}
                onRemove={() => set(buttons.filter((_, i) => i !== index))}
              />
            </li>
          ))}
        </StyledList>
      )}
      <div>
        <HaButton
          icon='mdi:plus'
          appearance='filled'
          disabled={buttons.length >= LIMITS.buttons}
          onClick={() => {
            set([...buttons, { id: newId(), name: '', icon: 'mdi:gesture-tap', columns: 4, tiles: [] }]);
            open({ kind: 'button', button: buttons.length });
          }}
        >
          {t('add_button')} ({buttons.length}/{LIMITS.buttons})
        </HaButton>
      </div>
    </>
  );
};

/** One button: how it looks in the bar, and the tiles in its popup. */
export const ButtonScreen: React.FC<ScreenProps & { button: number }> = ({ draft, update, button: index }) => {
  const t = useT();
  const button = draft.buttons[index];
  const set = (patch: Partial<BarButton>) => update({ ...draft, buttons: replaceAt(draft.buttons, index, { ...button, ...patch }) });
  return (
    <>
      <ScreenTitle title={button.name || t('button_n', { n: index + 1 })} lead={t('lead_button')} />
      <StyledFieldset>
        <StyledRow>
          <TextField label={t('name')} value={button.name} onChange={name => set({ name })} />
          <IconField label={t('icon')} value={button.icon} onChange={icon => set({ icon })} />
        </StyledRow>
        <NumberField
          label={t('columns')}
          hint={t('button_columns_hint')}
          value={button.columns}
          min={1}
          max={LIMITS.sectionCells}
          onChange={columns => set({ columns })}
        />
      </StyledFieldset>
      <StyledFieldset>
        <h3>{t('tiles')}</h3>
        <TileListEditor tiles={button.tiles} columns={button.columns} rows={LIMITS.sectionCells} onChange={tiles => set({ tiles })} />
      </StyledFieldset>
    </>
  );
};
