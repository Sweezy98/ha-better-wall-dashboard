import type { QuickAction } from '../../../config/types';
import { domainIcon, useEntity, useT } from '../../../hooks/useHa';
import { move, newId, replaceAt } from '../../../lib/editing';
import Icon from '../../base/icon/Icon';
import HaButton from '../ha/HaButton';
import { EntityField, IconField, ListControls, TextField } from '../fields';
import { StyledRow } from '../fields.styled';
import { StyledDetails, StyledEmpty } from '../editor.styled';
import RulesEditor from '../RulesEditor';

/** What a folded row says: the name it will show, and the entity behind it. */
const Summary: React.FC<{ item: QuickAction }> = ({ item }) => {
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

interface NamedEntityListProps {
  items: QuickAction[];
  max: number;
  domains?: string[];
  addLabel: string;
  /** Each entry with rules for when it shows: the quick actions. */
  withRules?: boolean;
  onChange: (items: QuickAction[]) => void;
}

/**
 * A short list of entities that each carry a name and an icon of their own:
 * one folded panel per entry, opened to edit it, in the order they show.
 */
const NamedEntityList: React.FC<NamedEntityListProps> = ({ items, max, domains, addLabel, withRules = false, onChange }) => {
  const t = useT();
  const set = (index: number, patch: Partial<QuickAction>) => onChange(replaceAt(items, index, { ...items[index], ...patch }));
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
            <EntityField label={t('entity')} value={item.entity} domains={domains} onChange={entity => set(index, { entity })} />
            <StyledRow>
              <TextField label={t('name')} hint={t('name_hint')} value={item.name} onChange={name => set(index, { name })} />
              <IconField label={t('icon')} value={item.icon} onChange={icon => set(index, { icon })} />
            </StyledRow>
            {withRules && <RulesEditor rules={item.rules ?? []} onChange={rules => set(index, { rules })} />}
          </div>
        </StyledDetails>
      ))}
      <div>
        <HaButton
          icon='mdi:plus'
          appearance='filled'
          disabled={items.length >= max}
          onClick={() => onChange([...items, { id: newId(), entity: '', name: '', icon: '', ...(withRules ? { rules: [] } : {}) }])}
        >
          {addLabel} ({items.length}/{max})
        </HaButton>
      </div>
    </>
  );
};

export default NamedEntityList;
