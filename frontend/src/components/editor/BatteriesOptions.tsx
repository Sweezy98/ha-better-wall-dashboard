import { useHass } from '@hakit/core';
import { useShallow } from 'zustand/react/shallow';
import type { BatteriesConfig } from '../../config/types';
import { useT } from '../../hooks/useHa';
import { findBatteries } from '../../lib/batteries';
import { CheckField, EntityListField, NumberField } from './fields';

/** The battery row: whether it shows, when, what counts as running out, and which batteries are left out. */
const BatteriesOptions: React.FC<{ value: BatteriesConfig; onChange: (value: BatteriesConfig) => void }> = ({ value, onChange }) => {
  const t = useT();
  // The picker offers the batteries there are, as the row finds them.
  const batteries = useHass(useShallow(state => findBatteries(state.entities, [])));
  const set = (patch: Partial<BatteriesConfig>) => onChange({ ...value, ...patch });
  return (
    <>
      <CheckField
        label={t('batteries_enabled')}
        hint={t('batteries_enabled_hint')}
        value={value.enabled}
        onChange={enabled => set({ enabled })}
      />
      <CheckField
        label={t('batteries_hide_when_ok')}
        hint={t('batteries_hide_when_ok_hint')}
        value={value.hide_when_ok}
        onChange={hide_when_ok => set({ hide_when_ok })}
      />
      <CheckField
        label={t('batteries_only_critical')}
        hint={t('batteries_only_critical_hint')}
        value={value.only_critical}
        onChange={only_critical => set({ only_critical })}
      />
      <NumberField
        label={t('batteries_threshold')}
        hint={t('batteries_threshold_hint')}
        value={value.threshold}
        min={5}
        max={90}
        unit='%'
        onChange={threshold => set({ threshold: Math.max(5, Math.min(90, threshold)) })}
      />
      <EntityListField
        label={t('batteries_hidden')}
        hint={t('batteries_hidden_hint')}
        value={value.hidden}
        domains={['sensor', 'binary_sensor']}
        include={batteries}
        onChange={hidden => set({ hidden })}
      />
    </>
  );
};

export default BatteriesOptions;
