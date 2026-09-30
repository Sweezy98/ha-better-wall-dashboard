import type { NamedEntity, QuickAction } from '../../../config/types';
import { domainIcon, useEntity, useT } from '../../../hooks/useHa';
import { move, newId, replaceAt } from '../../../lib/editing';
import Icon from '../../base/icon/Icon';
import HaButton from '../ha/HaButton';
import { EntityField, IconField, ListControls, TextField } from '../fields';
import { StyledRow } from '../fields.styled';
import { StyledDetails, StyledEmpty } from '../editor.styled';
import RulesEditor from '../RulesEditor';

/** What a folded row says: the name it will show, and the entity behind it. */
const Summary: React.FC<{ item: NamedEntity & Pick<QuickAction, 'rules'> }> = ({ item }) => {
  const entity = useEntity(item.entity || undefined);
  const t = useT();
  const name = item.name || (entity?.attributes.friendly_name as string | undefined) || item.entity || t('not_set');
  return (
    <>
      <Icon className='icon' icon={item.icon || (entity?.attributes.icon as string | undefined) || domainIcon(item.entity)} />
      <span className='text'>
        <span>{name}</span>
        {item.entity && (
          <span className='secondary'>
            {item.entity}
            {item.rules?.length ? ` · ${item.rules.length === 1 ? t('rules_one') : t('rules_count', { count: item.rules.length })}` : ''}
          </span>
        )}
      </span>
    </>
  );
};

interface NamedEntityListProps<T extends NamedEntity> {
  items: T[];
  max: number;
  domains?: string[];
  addLabel: string;
  /** Each entry with rules for when it shows: the quick actions. */
  withRules?: boolean;
  /** A new entry, for entries that carry more than a name and an icon. */
  create?: () => T;
  /** Each entry with a name of its own; without, an icon alone -- a header reading. */
  named?: boolean;
  /** An entry's own further fields, under its name and icon. */
  extra?: (item: T, set: (patch: Partial<T>) => void) => React.ReactNode;
  onChange: (items: T[]) => void;
}

/**
 * A short list of entities that each carry a name and an icon of their own:
 * one folded panel per entry, opened to edit it, in the order they show.
 */
function NamedEntityList<T extends NamedEntity & Pick<QuickAction, 'rules'>>({
  items,
  max,
  domains,
  addLabel,
  withRules = false,
  create,
  named = true,
  extra,
  onChange,
}: NamedEntityListProps<T>) {
  const t = useT();
  const set = (index: number, patch: Partial<T>) => onChange(replaceAt(items, index, { ...items[index], ...patch }));
  const blank = (): T => create?.() ?? ({ id: newId(), entity: '', name: '', icon: '', ...(withRules ? { rules: [] } : {}) } as T);
  return (
    <>
      {items.length === 0 && (
        <StyledEmpty>
          <Icon icon='mdi:playlist-plus' />
          <span>{t('empty_list')}</span>
        </StyledEmpty>
      )}
      {items.map((item, index) => (
        // A new entry opens by itself: there is nothing to see folded.
        <StyledDetails key={item.id} open={!item.entity || undefined}>
          <summary>
            <Summary item={item} />
            {/* Pressing these edits the list, it does not fold the panel. */}
            <span onClick={event => event.preventDefault()}>
              <ListControls
                index={index}
                length={items.length}
                onMove={to => onChange(move(items, index, to))}
                onRemove={() => onChange(items.filter((_, i) => i !== index))}
              />
            </span>
          </summary>
          <div className='fold-body'>
            <EntityField
              label={t('entity')}
              value={item.entity}
              domains={domains}
              onChange={entity => set(index, { entity } as Partial<T>)}
            />
            {named ? (
              <StyledRow>
                <TextField
                  label={t('name')}
                  hint={t('name_hint')}
                  value={item.name}
                  onChange={name => set(index, { name } as Partial<T>)}
                />
                <IconField label={t('icon')} value={item.icon} onChange={icon => set(index, { icon } as Partial<T>)} />
              </StyledRow>
            ) : (
              <IconField
                label={t('icon')}
                hint={t('status_icon_hint')}
                value={item.icon}
                onChange={icon => set(index, { icon } as Partial<T>)}
              />
            )}
            {extra?.(item, patch => set(index, patch))}
            {withRules && <RulesEditor rules={item.rules ?? []} onChange={rules => set(index, { rules } as Partial<T>)} />}
          </div>
        </StyledDetails>
      ))}
      <div>
        <HaButton icon='mdi:plus' appearance='filled' disabled={items.length >= max} onClick={() => onChange([...items, blank()])}>
          {addLabel} ({items.length}/{max})
        </HaButton>
      </div>
    </>
  );
}

export default NamedEntityList;
