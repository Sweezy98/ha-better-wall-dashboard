import styled from 'styled-components';
import type { Rule } from '../../config/types';
import { useT } from '../../hooks/useHa';
import type { TranslationKey } from '../../lib/i18n';
import { move, replaceAt } from '../../lib/editing';
import HaButton from './ha/HaButton';
import { CheckField, EntityField, ListControls, SelectField, TextField, TimeField } from './fields';
import { StyledField, StyledRow } from './fields.styled';

/** At most this many rules on one quick action: the backend keeps no more. */
const MAX_RULES = 6;

const TYPES: { type: Rule['type']; label: TranslationKey }[] = [
  { type: 'state', label: 'rule_state' },
  { type: 'numeric', label: 'rule_numeric' },
  { type: 'time', label: 'rule_time' },
  { type: 'sun', label: 'rule_sun' },
  { type: 'home', label: 'rule_home' },
];

/** A fresh rule of a kind, ready to be filled in. */
const blank = (type: Rule['type']): Rule => {
  switch (type) {
    case 'state':
      return { type, entity: '', state: '', not: false };
    case 'numeric':
      return { type, entity: '', above: null, below: null };
    case 'time':
      return { type, after: '', before: '' };
    case 'sun':
      return { type, when: 'night' };
    case 'home':
      return { type, who: 'anyone' };
  }
};

const StyledRule = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  padding: 12px;
  border: 1px solid var(--divider-color, rgba(255, 255, 255, 0.12));
  border-radius: 12px;

  .head {
    display: grid;
    grid-template-columns: minmax(0, 1fr) auto;
    gap: 8px;
    align-items: center;
  }
`;

/** A number typed in, or none for an empty box. */
const parse = (text: string): number | null => {
  const number = Number(text.replace(',', '.'));
  return text.trim() === '' || !Number.isFinite(number) ? null : number;
};

/** One rule's own fields, by its kind. */
const RuleFields: React.FC<{ rule: Rule; onChange: (rule: Rule) => void }> = ({ rule, onChange }) => {
  const t = useT();
  switch (rule.type) {
    case 'state':
      return (
        <>
          <EntityField label={t('entity')} value={rule.entity} onChange={entity => onChange({ ...rule, entity })} />
          <TextField
            label={t('rule_state_value')}
            hint={t('rule_state_value_hint')}
            value={rule.state}
            onChange={state => onChange({ ...rule, state })}
          />
          <CheckField label={t('rule_not')} value={rule.not} onChange={not => onChange({ ...rule, not })} />
        </>
      );
    case 'numeric':
      return (
        <>
          <EntityField label={t('entity')} value={rule.entity} onChange={entity => onChange({ ...rule, entity })} />
          <StyledRow>
            <TextField
              label={t('rule_above')}
              value={rule.above === null ? '' : String(rule.above)}
              onChange={above => onChange({ ...rule, above: parse(above) })}
            />
            <TextField
              label={t('rule_below')}
              value={rule.below === null ? '' : String(rule.below)}
              onChange={below => onChange({ ...rule, below: parse(below) })}
            />
          </StyledRow>
        </>
      );
    case 'time':
      return (
        <StyledRow>
          <TimeField label={t('rule_after')} value={rule.after} onChange={after => onChange({ ...rule, after })} />
          <TimeField
            label={t('rule_before')}
            hint={t('rule_before_hint')}
            value={rule.before}
            onChange={before => onChange({ ...rule, before })}
          />
        </StyledRow>
      );
    case 'sun':
      return (
        <SelectField
          label={t('rule_sun')}
          value={rule.when}
          options={[
            { value: 'day', label: t('rule_day') },
            { value: 'night', label: t('rule_night') },
          ]}
          onChange={when => onChange({ ...rule, when: when === 'day' ? 'day' : 'night' })}
        />
      );
    case 'home':
      return (
        <SelectField
          label={t('rule_home')}
          value={rule.who}
          options={[
            { value: 'anyone', label: t('rule_anyone') },
            { value: 'nobody', label: t('rule_nobody') },
          ]}
          onChange={who => onChange({ ...rule, who: who === 'nobody' ? 'nobody' : 'anyone' })}
        />
      );
  }
};

/**
 * When a quick action shows: a short list of rules, all of which must hold.
 * Without any, it always shows.
 */
const RulesEditor: React.FC<{ rules: Rule[]; onChange: (rules: Rule[]) => void }> = ({ rules, onChange }) => {
  const t = useT();
  return (
    <StyledField as='div'>
      <span className='label'>{t('rules')}</span>
      <small>{t('rules_hint')}</small>
      {rules.map((rule, index) => (
        <StyledRule key={index}>
          <div className='head'>
            <SelectField
              label={t('rule_type')}
              value={rule.type}
              options={TYPES.map(item => ({ value: item.type, label: t(item.label) }))}
              onChange={type => onChange(replaceAt(rules, index, blank(type as Rule['type'])))}
            />
            <ListControls
              index={index}
              length={rules.length}
              onMove={to => onChange(move(rules, index, to))}
              onRemove={() => onChange(rules.filter((_, i) => i !== index))}
            />
          </div>
          <RuleFields rule={rule} onChange={next => onChange(replaceAt(rules, index, next))} />
        </StyledRule>
      ))}
      <div>
        <HaButton icon='mdi:plus' disabled={rules.length >= MAX_RULES} onClick={() => onChange([...rules, blank('state')])}>
          {t('add_rule')}
        </HaButton>
      </div>
    </StyledField>
  );
};

export default RulesEditor;
