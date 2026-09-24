import { useState } from 'react';
import type { Tile } from '../../config/types';
import { LIMITS } from '../../config/types';
import { useEntity, useT } from '../../hooks/useHa';
import { LIBRARY, LIBRARY_BY_TYPE } from '../library/registry';
import Icon from '../base/icon/Icon';
import HaButton from './ha/HaButton';
import { EntityField, IconField, ListControls, NumberField, SelectField, TextField } from './fields';
import { StyledField, StyledRow } from './fields.styled';
import { StyledDetails, StyledEmpty } from './editor.styled';
import { move, newId, replaceAt } from '../../lib/editing';

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

/** What a folded tile says: what it shows, what kind it is, how big. */
const TileSummary: React.FC<{ tile: Tile }> = ({ tile }) => {
  const t = useT();
  const entity = useEntity(tile.entity || undefined);
  const entry = LIBRARY_BY_TYPE[tile.type];
  const name = tile.name || (entity?.attributes.friendly_name as string | undefined) || tile.entity || (entry ? t(entry.label) : tile.type);
  return (
    <>
      <Icon className='icon' icon={tile.icon || entry?.icon || 'mdi:square-rounded-outline'} />
      <span className='text'>
        <span>{name}</span>
        <span className='secondary'>
          {entry ? t(entry.label) : tile.type} · {tile.w} × {tile.h}
        </span>
      </span>
    </>
  );
};

interface TileListEditorProps {
  tiles: Tile[];
  columns: number;
  rows: number;
  onChange: (tiles: Tile[]) => void;
}

/** The tiles of a section or of a button's popup, chosen from the library: one folded panel each. */
const TileListEditor: React.FC<TileListEditorProps> = ({ tiles, columns, rows, onChange }) => {
  const t = useT();
  const set = (index: number, patch: Partial<Tile>) => onChange(replaceAt(tiles, index, { ...tiles[index], ...patch }));
  return (
    <>
      {tiles.length === 0 && (
        <StyledEmpty>
          <Icon icon='mdi:view-grid-plus-outline' />
          <span>{t('empty_tiles')}</span>
        </StyledEmpty>
      )}
      {tiles.map((tile, index) => {
        const entry = LIBRARY_BY_TYPE[tile.type];
        return (
          <StyledDetails key={tile.id} open={(!tile.entity && entry?.needsEntity !== false) || undefined}>
            <summary>
              <TileSummary tile={tile} />
              <span onClick={event => event.preventDefault()}>
                <ListControls
                  index={index}
                  length={tiles.length}
                  onMove={to => onChange(move(tiles, index, to))}
                  onRemove={() => onChange(tiles.filter((_, i) => i !== index))}
                  onDuplicate={() => onChange([...tiles.slice(0, index + 1), { ...tile, id: newId() }, ...tiles.slice(index + 1)])}
                />
              </span>
            </summary>
            <div className='fold-body'>
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
              {entry?.needsEntity !== false && (
                <EntityField label={t('entity')} value={tile.entity} domains={entry?.domains} onChange={entity => set(index, { entity })} />
              )}
              <StyledRow>
                <TextField label={t('name')} hint={t('name_hint')} value={tile.name} onChange={name => set(index, { name })} />
                <IconField label={t('icon')} value={tile.icon} onChange={icon => set(index, { icon })} />
              </StyledRow>
              <StyledRow>
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
              </StyledRow>
              {tile.type === 'sensor' && <OptionsField value={tile.options} onChange={options => set(index, { options })} />}
            </div>
          </StyledDetails>
        );
      })}
      <div>
        <HaButton
          icon='mdi:plus'
          appearance='filled'
          disabled={tiles.length >= LIMITS.tiles}
          onClick={() => onChange([...tiles, { id: newId(), type: 'entity', entity: '', name: '', icon: '', w: 1, h: 1, options: {} }])}
        >
          {t('add_tile')}
        </HaButton>
      </div>
    </>
  );
};

export default TileListEditor;
