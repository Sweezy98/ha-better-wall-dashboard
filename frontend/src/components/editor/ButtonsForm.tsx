import type { BarButton } from '../../config/types';
import { LIMITS } from '../../config/types';
import { useT } from '../../hooks/useHa';
import Icon from '../base/icon/Icon';
import TileListEditor from './TileListEditor';
import { IconField, ListControls, NumberField, TextField } from './fields';
import { StyledGroup, StyledRow, StyledSmallButton } from './fields.styled';
import { move, newId } from '../../lib/editing';

/** The bottom bar: up to five buttons, each opening a popup of tiles. */
const ButtonsForm: React.FC<{ buttons: BarButton[]; onChange: (buttons: BarButton[]) => void }> = ({ buttons, onChange }) => {
  const t = useT();
  const set = (index: number, patch: Partial<BarButton>) =>
    onChange(buttons.map((button, i) => (i === index ? { ...button, ...patch } : button)));
  return (
    <>
      {buttons.map((button, index) => (
        <StyledGroup key={button.id}>
          <legend>
            {t('button')} {index + 1}
          </legend>
          <StyledRow $columns='minmax(0, 1.5fr) minmax(0, 1fr) 6em auto'>
            <TextField label={t('name')} value={button.name} onChange={name => set(index, { name })} />
            <IconField label={t('icon')} value={button.icon} onChange={icon => set(index, { icon })} />
            <NumberField
              label={t('columns')}
              value={button.columns}
              min={1}
              max={LIMITS.sectionCells}
              onChange={columns => set(index, { columns })}
            />
            <ListControls
              index={index}
              length={buttons.length}
              onMove={to => onChange(move(buttons, index, to))}
              onRemove={() => onChange(buttons.filter((_, i) => i !== index))}
            />
          </StyledRow>
          <TileListEditor
            tiles={button.tiles}
            columns={button.columns}
            rows={LIMITS.sectionCells}
            onChange={tiles => set(index, { tiles })}
          />
        </StyledGroup>
      ))}
      <div>
        <StyledSmallButton
          type='button'
          disabled={buttons.length >= LIMITS.buttons}
          onClick={() => onChange([...buttons, { id: newId(), name: '', icon: 'mdi:gesture-tap', columns: 4, tiles: [] }])}
        >
          <Icon icon='mdi:plus' /> {t('add_button')}
        </StyledSmallButton>
      </div>
    </>
  );
};

export default ButtonsForm;
