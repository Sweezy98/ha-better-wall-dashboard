import { createContext, useContext, useId, useMemo } from 'react';
import { useHass } from '@hakit/core';
import { useShallow } from 'zustand/react/shallow';
import { StyledCheck, StyledField, StyledGroup, StyledRow, StyledSmallButton } from './fields.styled';
import { move } from '../../lib/editing';
import Icon from '../base/icon/Icon';
import { useT } from '../../hooks/useHa';

/*
 * The editor's form controls. Plain elements rather than Home Assistant's
 * `ha-selector`: those are registered lazily with Lovelace's editors and a
 * custom panel opened on its own may never have them (CLAUDE.md, section 6).
 */

interface Base<T> {
  label: string;
  hint?: string;
  value: T;
  onChange: (value: T) => void;
}

export const TextField: React.FC<Base<string> & { placeholder?: string; type?: string }> = ({
  label,
  hint,
  value,
  onChange,
  placeholder,
  type,
}) => (
  <StyledField>
    <span className='label'>{label}</span>
    <input type={type ?? 'text'} value={value} placeholder={placeholder} onChange={event => onChange(event.target.value)} />
    {hint && <small>{hint}</small>}
  </StyledField>
);

export const NumberField: React.FC<Base<number> & { min?: number; max?: number; step?: number }> = ({
  label,
  hint,
  value,
  onChange,
  min,
  max,
  step,
}) => (
  <StyledField>
    <span className='label'>{label}</span>
    <input
      type='number'
      value={value}
      min={min}
      max={max}
      step={step ?? 1}
      onChange={event => {
        const next = Number(event.target.value);
        if (Number.isFinite(next)) onChange(next);
      }}
    />
    {hint && <small>{hint}</small>}
  </StyledField>
);

export const RangeField: React.FC<Base<number> & { min: number; max: number; step: number; format?: (v: number) => string }> = ({
  label,
  value,
  onChange,
  min,
  max,
  step,
  format,
}) => (
  <StyledField>
    <span className='label'>
      {label}: {format ? format(value) : value}
    </span>
    <input type='range' value={value} min={min} max={max} step={step} onChange={event => onChange(Number(event.target.value))} />
  </StyledField>
);

export const CheckField: React.FC<Base<boolean>> = ({ label, value, onChange }) => (
  <StyledCheck>
    <input type='checkbox' checked={value} onChange={event => onChange(event.target.checked)} />
    {label}
  </StyledCheck>
);

export const SelectField: React.FC<Base<string> & { options: { value: string; label: string }[] }> = ({
  label,
  hint,
  value,
  onChange,
  options,
}) => (
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

export const IconField: React.FC<Base<string>> = ({ label, value, onChange }) => (
  <StyledField>
    <span className='label'>{label}</span>
    <span style={{ display: 'flex', gap: '0.5em', alignItems: 'center' }}>
      <input type='text' value={value} placeholder='mdi:…' onChange={event => onChange(event.target.value)} />
      {value && <Icon icon={value} size='1.6em' />}
    </span>
  </StyledField>
);

// --- entities -------------------------------------------------------------

interface CatalogEntry {
  id: string;
  name: string;
}

const CatalogContext = createContext<CatalogEntry[]>([]);

/**
 * Every entity, by id and name, for the pickers.
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

export const EntityField: React.FC<Base<string> & { domains?: string[] }> = ({ label, hint, value, onChange, domains }) => {
  const catalog = useContext(CatalogContext);
  const listId = useId();
  const t = useT();
  const options = useMemo(
    () => (domains?.length ? catalog.filter(entry => domains.includes(entry.id.split('.')[0])) : catalog),
    [catalog, domains]
  );
  const known = catalog.find(entry => entry.id === value);
  return (
    <StyledField>
      <span className='label'>{label}</span>
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
      {value && <small>{known ? known.name : t('not_found')}</small>}
      {hint && <small>{hint}</small>}
    </StyledField>
  );
};

/** A list of entities, each with its own picker. */
export const EntityListField: React.FC<Base<string[]> & { domains?: string[]; max?: number }> = ({
  label,
  hint,
  value,
  onChange,
  domains,
  max,
}) => {
  const t = useT();
  return (
    <StyledGroup>
      <legend>{label}</legend>
      {hint && <small>{hint}</small>}
      {value.map((entity, index) => (
        <StyledRow key={index} $columns='minmax(0, 1fr) auto'>
          <EntityField
            label={`${index + 1}`}
            value={entity}
            domains={domains}
            onChange={next => onChange(value.map((item, i) => (i === index ? next : item)))}
          />
          <ListControls
            index={index}
            length={value.length}
            onMove={to => onChange(move(value, index, to))}
            onRemove={() => onChange(value.filter((_, i) => i !== index))}
          />
        </StyledRow>
      ))}
      <div>
        <StyledSmallButton type='button' disabled={max !== undefined && value.length >= max} onClick={() => onChange([...value, ''])}>
          <Icon icon='mdi:plus' /> {t('add')}
        </StyledSmallButton>
      </div>
    </StyledGroup>
  );
};

export const ListControls: React.FC<{
  index: number;
  length: number;
  onMove: (to: number) => void;
  onRemove: () => void;
  onDuplicate?: () => void;
}> = ({ index, length, onMove, onRemove, onDuplicate }) => {
  const t = useT();
  return (
    <span style={{ display: 'flex', gap: '0.3em' }}>
      <StyledSmallButton
        type='button'
        disabled={index === 0}
        onClick={() => onMove(index - 1)}
        title={t('move_up')}
        aria-label={t('move_up')}
      >
        <Icon icon='mdi:arrow-up' />
      </StyledSmallButton>
      <StyledSmallButton
        type='button'
        disabled={index === length - 1}
        onClick={() => onMove(index + 1)}
        title={t('move_down')}
        aria-label={t('move_down')}
      >
        <Icon icon='mdi:arrow-down' />
      </StyledSmallButton>
      {onDuplicate && (
        <StyledSmallButton type='button' onClick={onDuplicate} title={t('duplicate')} aria-label={t('duplicate')}>
          <Icon icon='mdi:content-copy' />
        </StyledSmallButton>
      )}
      <StyledSmallButton type='button' $danger onClick={onRemove} title={t('remove')} aria-label={t('remove')}>
        <Icon icon='mdi:delete-outline' />
      </StyledSmallButton>
    </span>
  );
};
