import { createContext, useContext, useId, useMemo } from 'react';
import { useHass } from '@hakit/core';
import { useShallow } from 'zustand/react/shallow';
import { StyledCheck, StyledField, StyledIconButton, StyledRow } from './fields.styled';
import { move } from '../../lib/editing';
import Icon from '../base/icon/Icon';
import HaSelector from './ha/HaSelector';
import { useHaControls } from './ha/useHaControls';
import { useT } from '../../hooks/useHa';

/*
 * The editor's form fields. Each is Home Assistant's own control where the
 * page has it -- `ha-selector`, so an entity field is the entity picker every
 * other settings page uses -- and a plain control where it does not: the
 * controls are registered lazily with Lovelace's editors and may never come
 * (CLAUDE.md, section 6), and the dev server has none at all.
 */

interface Base<T> {
  label: string;
  hint?: string;
  value: T;
  onChange: (value: T) => void;
}

export const TextField: React.FC<Base<string> & { placeholder?: string; type?: 'text' | 'password' | 'url' }> = ({
  label,
  hint,
  value,
  onChange,
  placeholder,
  type = 'text',
}) => {
  const ha = useHaControls();
  if (ha) {
    return (
      <HaSelector
        selector={{ text: type === 'text' ? {} : { type } }}
        value={value}
        label={label}
        helper={hint}
        onChange={next => onChange(typeof next === 'string' ? next : '')}
      />
    );
  }
  return (
    <StyledField>
      <span className='label'>{label}</span>
      <input type={type} value={value} placeholder={placeholder} onChange={event => onChange(event.target.value)} />
      {hint && <small>{hint}</small>}
    </StyledField>
  );
};

/**
 * Several short texts: Home Assistant's text field with a row per value and
 * a button to add one; typed separated by commas without it.
 */
export const TextListField: React.FC<Base<string[]>> = ({ label, hint, value, onChange }) => {
  const ha = useHaControls();
  const clean = (items: unknown[]) => items.filter((item): item is string => typeof item === 'string').map(item => item.trim());
  if (ha) {
    return (
      <HaSelector
        selector={{ text: { multiple: true } }}
        value={value}
        label={label}
        helper={hint}
        onChange={next => onChange(Array.isArray(next) ? clean(next) : [])}
      />
    );
  }
  return (
    <StyledField>
      <span className='label'>{label}</span>
      <input type='text' value={value.join(', ')} onChange={event => onChange(clean(event.target.value.split(',')).filter(Boolean))} />
      {hint && <small>{hint}</small>}
    </StyledField>
  );
};

export const NumberField: React.FC<Base<number> & { min?: number; max?: number; step?: number; unit?: string }> = ({
  label,
  hint,
  value,
  onChange,
  min,
  max,
  step = 1,
  unit,
}) => {
  const ha = useHaControls();
  const accept = (next: unknown) => {
    const number = Number(next);
    if (next !== '' && next !== null && Number.isFinite(number)) onChange(number);
  };
  if (ha) {
    return (
      <HaSelector
        selector={{ number: { min, max, step, mode: 'box', unit_of_measurement: unit } }}
        value={value}
        label={label}
        helper={hint}
        onChange={accept}
      />
    );
  }
  return (
    <StyledField>
      <span className='label'>{label}</span>
      <input type='number' value={value} min={min} max={max} step={step} onChange={event => accept(event.target.value)} />
      {hint && <small>{hint}</small>}
    </StyledField>
  );
};

/**
 * A slider. `scale` shows a stored fraction as a friendlier number -- a dim
 * of 0.8 as 80 % -- and stores it back as the fraction.
 */
export const RangeField: React.FC<Base<number> & { min: number; max: number; step: number; unit?: string; scale?: number }> = ({
  label,
  hint,
  value,
  onChange,
  min,
  max,
  step,
  unit,
  scale = 1,
}) => {
  const ha = useHaControls();
  const shown = Math.round(value * scale * 1000) / 1000;
  const accept = (next: unknown) => {
    const number = Number(next);
    if (Number.isFinite(number)) onChange(number / scale);
  };
  if (ha) {
    return (
      <HaSelector
        selector={{ number: { min, max, step, mode: 'slider', unit_of_measurement: unit } }}
        value={shown}
        label={label}
        helper={hint}
        onChange={accept}
      />
    );
  }
  return (
    <StyledField>
      <span className='label'>
        {label}: {shown}
        {unit ? ` ${unit}` : ''}
      </span>
      <input type='range' value={shown} min={min} max={max} step={step} onChange={event => accept(event.target.value)} />
      {hint && <small>{hint}</small>}
    </StyledField>
  );
};

export const CheckField: React.FC<Base<boolean>> = ({ label, hint, value, onChange }) => {
  const ha = useHaControls();
  if (ha) {
    return <HaSelector selector={{ boolean: {} }} value={value} label={label} helper={hint} onChange={next => onChange(Boolean(next))} />;
  }
  return (
    <StyledCheck>
      <input type='checkbox' checked={value} onChange={event => onChange(event.target.checked)} />
      <span>
        {label}
        {hint && <small>{hint}</small>}
      </span>
    </StyledCheck>
  );
};

export const SelectField: React.FC<Base<string> & { options: { value: string; label: string }[] }> = ({
  label,
  hint,
  value,
  onChange,
  options,
}) => {
  const ha = useHaControls();
  if (ha) {
    return (
      <HaSelector
        // A dropdown, always: Home Assistant draws a short list as radio
        // buttons unless told otherwise.
        selector={{ select: { options, mode: 'dropdown' } }}
        value={value}
        label={label}
        helper={hint}
        required
        onChange={next => typeof next === 'string' && onChange(next)}
      />
    );
  }
  return (
    <StyledField>
      <span className='label'>{label}</span>
      <select value={value} onChange={event => onChange(event.target.value)}>
        {options.map(option => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
      {hint && <small>{hint}</small>}
    </StyledField>
  );
};

export const IconField: React.FC<Base<string>> = ({ label, hint, value, onChange }) => {
  const ha = useHaControls();
  if (ha) {
    return (
      <HaSelector
        selector={{ icon: {} }}
        value={value}
        label={label}
        helper={hint}
        onChange={next => onChange(typeof next === 'string' ? next : '')}
      />
    );
  }
  return (
    <StyledField>
      <span className='label'>{label}</span>
      <span className='with-icon'>
        <input type='text' value={value} placeholder='mdi:…' onChange={event => onChange(event.target.value)} />
        {value && <Icon icon={value} size='24px' />}
      </span>
      {hint && <small>{hint}</small>}
    </StyledField>
  );
};

/**
 * A picture from Home Assistant's media library, stored as its
 * `media-source://` id -- which is all a dashboard keeps of it; the tablet
 * asks Home Assistant for an address to draw it from. Without Home
 * Assistant's picker, the id or an address can be typed.
 */
export const MediaField: React.FC<Base<string> & { accept: string[] }> = ({ label, hint, value, onChange, accept }) => {
  const ha = useHaControls();
  const picked = useMemo(
    () => (value.startsWith('media-source://') ? { media_content_id: value, media_content_type: accept[0] } : undefined),
    [value, accept]
  );
  if (ha) {
    return (
      <HaSelector
        selector={{ media: { accept } }}
        value={picked}
        label={label}
        helper={hint}
        onChange={next => onChange((next as { media_content_id?: string } | null)?.media_content_id ?? '')}
      />
    );
  }
  return <TextField label={label} hint={hint} value={value} onChange={onChange} />;
};

// --- entities -------------------------------------------------------------

interface CatalogEntry {
  id: string;
  name: string;
}

const CatalogContext = createContext<CatalogEntry[]>([]);

/**
 * Every entity, by id and name, for the plain pickers.
 *
 * Selected shallowly -- ids and names only -- so the editor re-renders when
 * an entity is added or renamed, and not on every state change in the house
 * while somebody is typing.
 */
export const EntityCatalog: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const names = useHass(
    useShallow(state => {
      const out: Record<string, string> = {};
      for (const [id, entity] of Object.entries(state.entities)) out[id] = (entity.attributes.friendly_name as string) || id;
      return out;
    })
  );
  const catalog = useMemo(
    () =>
      Object.entries(names)
        .map(([id, name]) => ({ id, name }))
        .sort((a, b) => a.id.localeCompare(b.id)),
    [names]
  );
  return <CatalogContext.Provider value={catalog}>{children}</CatalogContext.Provider>;
};

const entitySelector = (domains: string[] | undefined, extra: Record<string, unknown> = {}) => ({
  entity: { ...(domains?.length ? { filter: { domain: domains } } : {}), ...extra },
});

const PlainEntityInput: React.FC<{ value: string; domains?: string[]; onChange: (value: string) => void }> = ({
  value,
  domains,
  onChange,
}) => {
  const catalog = useContext(CatalogContext);
  const listId = useId();
  const options = useMemo(
    () => (domains?.length ? catalog.filter(entry => domains.includes(entry.id.split('.')[0])) : catalog),
    [catalog, domains]
  );
  return (
    <>
      <input
        type='text'
        list={listId}
        value={value}
        placeholder={domains?.length ? `${domains[0]}.…` : 'domain.object_id'}
        onChange={event => onChange(event.target.value.trim())}
      />
      <datalist id={listId}>
        {options.map(entry => (
          <option key={entry.id} value={entry.id}>
            {entry.name}
          </option>
        ))}
      </datalist>
    </>
  );
};

export const EntityField: React.FC<Base<string> & { domains?: string[] }> = ({ label, hint, value, onChange, domains }) => {
  const ha = useHaControls();
  const catalog = useContext(CatalogContext);
  const t = useT();
  if (ha) {
    return (
      <HaSelector
        selector={entitySelector(domains)}
        value={value || undefined}
        label={label}
        helper={hint}
        onChange={next => onChange(typeof next === 'string' ? next : '')}
      />
    );
  }
  const known = catalog.find(entry => entry.id === value);
  return (
    <StyledField>
      <span className='label'>{label}</span>
      <PlainEntityInput value={value} domains={domains} onChange={onChange} />
      {value && <small>{known ? known.name : t('not_found')}</small>}
      {hint && <small>{hint}</small>}
    </StyledField>
  );
};

/** Several entities, in order: Home Assistant's multi-entity picker, which reorders by dragging. */
export const EntityListField: React.FC<Base<string[]> & { domains?: string[]; max?: number }> = ({
  label,
  hint,
  value,
  onChange,
  domains,
  max,
}) => {
  const ha = useHaControls();
  const t = useT();
  // Its picker knows no limit, so one past it is simply not kept.
  const accept = (next: string[]) => onChange(max === undefined ? next : next.slice(0, max));
  if (ha) {
    return (
      <HaSelector
        selector={entitySelector(domains, { multiple: true, reorder: true })}
        value={value}
        label={label}
        helper={hint}
        onChange={next => accept(Array.isArray(next) ? next.filter((item): item is string => typeof item === 'string') : [])}
      />
    );
  }
  return (
    <StyledField as='div'>
      <span className='label'>{label}</span>
      {value.map((entity, index) => (
        <StyledRow key={index} $columns='minmax(0, 1fr) auto'>
          <PlainEntityInput
            value={entity}
            domains={domains}
            onChange={next => accept(value.map((item, i) => (i === index ? next : item)))}
          />
          <ListControls
            index={index}
            length={value.length}
            onMove={to => accept(move(value, index, to))}
            onRemove={() => accept(value.filter((_, i) => i !== index))}
          />
        </StyledRow>
      ))}
      {(max === undefined || value.length < max) && (
        <StyledIconButton type='button' className='add' onClick={() => accept([...value, ''])} title={t('add')} aria-label={t('add')}>
          <Icon icon='mdi:plus' />
        </StyledIconButton>
      )}
      {hint && <small>{hint}</small>}
    </StyledField>
  );
};

/** Move, duplicate and remove, as the quiet round buttons at the end of a row. */
export const ListControls: React.FC<{
  index: number;
  length: number;
  onMove: (to: number) => void;
  onRemove: () => void;
  onDuplicate?: () => void;
}> = ({ index, length, onMove, onRemove, onDuplicate }) => {
  const t = useT();
  return (
    <span className='list-controls'>
      <StyledIconButton
        type='button'
        disabled={index === 0}
        onClick={() => onMove(index - 1)}
        title={t('move_up')}
        aria-label={t('move_up')}
      >
        <Icon icon='mdi:arrow-up' />
      </StyledIconButton>
      <StyledIconButton
        type='button'
        disabled={index === length - 1}
        onClick={() => onMove(index + 1)}
        title={t('move_down')}
        aria-label={t('move_down')}
      >
        <Icon icon='mdi:arrow-down' />
      </StyledIconButton>
      {onDuplicate && (
        <StyledIconButton type='button' onClick={onDuplicate} title={t('duplicate')} aria-label={t('duplicate')}>
          <Icon icon='mdi:content-copy' />
        </StyledIconButton>
      )}
      <StyledIconButton type='button' $danger onClick={onRemove} title={t('remove')} aria-label={t('remove')}>
        <Icon icon='mdi:delete-outline' />
      </StyledIconButton>
    </span>
  );
};
