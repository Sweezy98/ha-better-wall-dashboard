import { useState } from 'react';
import type { Tile } from '../../config/types';
import { LIMITS } from '../../config/types';
import { useT } from '../../hooks/useHa';
import { LIBRARY, LIBRARY_BY_TYPE } from '../library/registry';
import Icon from '../base/icon/Icon';
import { EntityField, IconField, ListControls, NumberField, SelectField, TextField } from './fields';
import { StyledField, StyledGroup, StyledRow, StyledSmallButton } from './fields.styled';
import { move, newId } from '../../lib/editing';

/** A tile's component options, edited as JSON: each component defines its own. */
const OptionsField: React.FC<{ value: Record<string, unknown>; onChange: (value: Record<string, unknown>) => void }> = ({
  value,
  onChange,
}) => {
  const [text, setText] = useState(() => (Object.keys(value).length ? JSON.stringify(value) : ''));
  const [invalid, setInvalid] = useState(false);
  const t = useT();
  return (
    <StyledField>
      <span className='label'>{t('options_json')}</span>
      <input
        type='text'
        value={text}
        placeholder='{"hours": 24, "color": "#03a9f4"}'
        onChange={event => {
          setText(event.target.value);
          try {
            const parsed = event.target.value.trim() ? JSON.parse(event.target.value) : {};
            if (parsed && typeof parsed === 'object' && !Array.isArray(parsed)) {
              setInvalid(false);
              onChange(parsed);
              return;
            }
          } catch {
            // fall through
          }
          setInvalid(true);
        }}
      />
      {invalid && <small>{t('json_invalid')}</small>}
    </StyledField>
  );
};

interface TileListEditorProps {
  tiles: Tile[];
  columns: number;
  rows: number;
  onChange: (tiles: Tile[]) => void;
}

/** The tiles of a section or of a button's popup, chosen from the library. */
const TileListEditor: React.FC<TileListEditorProps> = ({ tiles, columns, rows, onChange }) => {
  const t = useT();
  const set = (index: number, patch: Partial<Tile>) => onChange(tiles.map((tile, i) => (i === index ? { ...tile, ...patch } : tile)));
  return (
    <StyledGroup>
      <legend>
        {t('tiles')} ({tiles.length})
      </legend>
      {tiles.map((tile, index) => {
        const entry = LIBRARY_BY_TYPE[tile.type];
        return (
          <StyledRow key={tile.id} $columns='minmax(0, 1.2fr) minmax(0, 2fr) minmax(0, 1.2fr) minmax(0, 1fr) 4em 4em auto'>
            <SelectField
              label={t('type')}
              value={tile.type}
              options={[
                ...LIBRARY.map(item => ({ value: item.type, label: t(item.label) })),
                ...(entry ? [] : [{ value: tile.type, label: tile.type }]),
              ]}
              onChange={type => {
                const size = LIBRARY_BY_TYPE[type]?.size ?? [1, 1];
                set(index, { type, w: Math.min(size[0], columns), h: Math.min(size[1], rows) });
              }}
            />
            {entry?.needsEntity !== false ? (
              <EntityField label={t('entity')} value={tile.entity} domains={entry?.domains} onChange={entity => set(index, { entity })} />
            ) : (
              <span />
            )}
            <TextField label={t('name')} value={tile.name} onChange={name => set(index, { name })} />
            <IconField label={t('icon')} value={tile.icon} onChange={icon => set(index, { icon })} />
            <NumberField
              label={t('width')}
              value={tile.w}
              min={1}
              max={columns}
              onChange={w => set(index, { w: Math.max(1, Math.min(columns, w)) })}
            />
            <NumberField
              label={t('height')}
              value={tile.h}
              min={1}
              max={rows}
              onChange={h => set(index, { h: Math.max(1, Math.min(rows, h)) })}
            />
            <ListControls
              index={index}
              length={tiles.length}
              onMove={to => onChange(move(tiles, index, to))}
              onRemove={() => onChange(tiles.filter((_, i) => i !== index))}
              onDuplicate={() => onChange([...tiles.slice(0, index + 1), { ...tile, id: newId() }, ...tiles.slice(index + 1)])}
            />
            {tile.type === 'sensor' && (
              <div style={{ gridColumn: '1 / -1' }}>
                <OptionsField value={tile.options} onChange={options => set(index, { options })} />
              </div>
            )}
          </StyledRow>
        );
      })}
      <div>
        <StyledSmallButton
          type='button'
          disabled={tiles.length >= LIMITS.tiles}
          onClick={() => onChange([...tiles, { id: newId(), type: 'entity', entity: '', name: '', icon: '', w: 1, h: 1, options: {} }])}
        >
          <Icon icon='mdi:plus' /> {t('add_tile')}
        </StyledSmallButton>
      </div>
    </StyledGroup>
  );
};

export default TileListEditor;
