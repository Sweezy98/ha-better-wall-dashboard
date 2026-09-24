import type { NamedEntity, SidebarConfig } from '../../config/types';
import { LIMITS } from '../../config/types';
import { useT } from '../../hooks/useHa';
import Icon from '../base/icon/Icon';
import { CheckField, EntityField, EntityListField, IconField, ListControls, NumberField, SelectField, TextField } from './fields';
import { StyledGroup, StyledRow, StyledSmallButton } from './fields.styled';
import { move, newId } from '../../lib/editing';

type Update = (next: SidebarConfig) => void;

/** A short list of entities that each have a name and an icon of their own. */
const NamedEntityList: React.FC<{
  label: string;
  items: NamedEntity[];
  max: number;
  domains?: string[];
  onChange: (items: NamedEntity[]) => void;
}> = ({ label, items, max, domains, onChange }) => {
  const t = useT();
  const set = (index: number, patch: Partial<NamedEntity>) =>
    onChange(items.map((item, i) => (i === index ? { ...item, ...patch } : item)));
  return (
    <StyledGroup>
      <legend>
        {label} ({items.length}/{max})
      </legend>
      {items.map((item, index) => (
        <StyledRow key={item.id} $columns='minmax(0, 2fr) minmax(0, 1.2fr) minmax(0, 1fr) auto'>
          <EntityField label={t('entity')} value={item.entity} domains={domains} onChange={entity => set(index, { entity })} />
          <TextField label={t('name')} value={item.name} onChange={name => set(index, { name })} />
          <IconField label={t('icon')} value={item.icon} onChange={icon => set(index, { icon })} />
          <ListControls
            index={index}
            length={items.length}
            onMove={to => onChange(move(items, index, to))}
            onRemove={() => onChange(items.filter((_, i) => i !== index))}
          />
        </StyledRow>
      ))}
      <div>
        <StyledSmallButton
          type='button'
          disabled={items.length >= max}
          onClick={() => onChange([...items, { id: newId(), entity: '', name: '', icon: '' }])}
        >
          <Icon icon='mdi:plus' /> {t('add')}
        </StyledSmallButton>
      </div>
    </StyledGroup>
  );
};

const MODE_DOMAINS = ['input_boolean', 'switch', 'binary_sensor'];

const SidebarForm: React.FC<{ value: SidebarConfig; onChange: Update }> = ({ value, onChange }) => {
  const t = useT();
  const set = <K extends keyof SidebarConfig>(key: K, patch: Partial<SidebarConfig[K]>) =>
    onChange({ ...value, [key]: { ...(value[key] as object), ...patch } });

  return (
    <>
      <StyledGroup>
        <legend>{t('status_icons')}</legend>
        <StyledRow>
          <EntityField
            label={t('absence_mode')}
            value={value.status.absence}
            domains={MODE_DOMAINS}
            onChange={absence => set('status', { absence })}
          />
          <EntityField
            label={t('guest_mode')}
            value={value.status.guest}
            domains={MODE_DOMAINS}
            onChange={guest => set('status', { guest })}
          />
          <EntityField
            label={t('night_mode')}
            value={value.status.night}
            domains={MODE_DOMAINS}
            onChange={night => set('status', { night })}
          />
          <EntityField
            label={t('wifi_signal')}
            hint={t('wifi_signal_hint')}
            value={value.status.wifi_signal}
            domains={['sensor']}
            onChange={wifi_signal => set('status', { wifi_signal })}
          />
        </StyledRow>
      </StyledGroup>

      <StyledGroup>
        <legend>{t('guest_wifi')}</legend>
        <EntityField
          label={t('guest_qr_image')}
          hint={t('guest_qr_image_hint')}
          value={value.guest_wifi.qr_image}
          domains={['image']}
          onChange={qr_image => set('guest_wifi', { qr_image })}
        />
        <StyledRow>
          <TextField label={t('network')} value={value.guest_wifi.ssid} onChange={ssid => set('guest_wifi', { ssid })} />
          <TextField
            label={t('password')}
            type='password'
            value={value.guest_wifi.password}
            onChange={password => set('guest_wifi', { password })}
          />
          <SelectField
            label={t('security')}
            value={value.guest_wifi.security}
            options={[
              { value: 'WPA', label: 'WPA/WPA2/WPA3' },
              { value: 'WEP', label: 'WEP' },
              { value: 'nopass', label: '—' },
            ]}
            onChange={security => set('guest_wifi', { security: security as SidebarConfig['guest_wifi']['security'] })}
          />
          <CheckField label={t('hidden_network')} value={value.guest_wifi.hidden} onChange={hidden => set('guest_wifi', { hidden })} />
        </StyledRow>
      </StyledGroup>

      <StyledGroup>
        <legend>{t('room_climate')}</legend>
        <StyledRow>
          <EntityField
            label={t('temperature')}
            value={value.climate.temperature}
            domains={['sensor']}
            onChange={temperature => set('climate', { temperature })}
          />
          <EntityField
            label={t('humidity')}
            value={value.climate.humidity}
            domains={['sensor']}
            onChange={humidity => set('climate', { humidity })}
          />
          <NumberField label={t('hours')} value={value.climate.hours} min={1} max={168} onChange={hours => set('climate', { hours })} />
        </StyledRow>
      </StyledGroup>

      <EntityListField
        label={t('persons')}
        value={value.persons}
        domains={['person']}
        onChange={persons => onChange({ ...value, persons })}
      />
      <EntityListField
        label={t('openings')}
        value={value.openings}
        domains={['binary_sensor', 'cover', 'lock', 'sensor']}
        onChange={openings => onChange({ ...value, openings })}
      />

      <StyledGroup>
        <legend>{t('travel_time')}</legend>
        <StyledRow>
          <EntityField
            label={t('travel_sensor')}
            value={value.travel.entity}
            domains={['sensor']}
            onChange={entity => set('travel', { entity })}
          />
          <TextField
            label={t('name')}
            value={value.travel.name}
            placeholder={t('travel_time')}
            onChange={name => set('travel', { name })}
          />
        </StyledRow>
        <TextField
          label={t('map_url')}
          hint={t('map_url_hint')}
          value={value.travel.map_url}
          onChange={map_url => set('travel', { map_url })}
        />
        <TextField
          label={t('maps_api_key')}
          hint={t('maps_api_key_hint')}
          type='password'
          value={value.travel.maps_api_key}
          onChange={maps_api_key => set('travel', { maps_api_key })}
        />
      </StyledGroup>

      <NamedEntityList
        label={t('quick_actions')}
        items={value.quick_actions}
        max={LIMITS.quickActions}
        onChange={quick_actions => onChange({ ...value, quick_actions })}
      />

      <StyledGroup>
        <legend>{t('calendar')}</legend>
        <EntityListField
          label={t('calendars')}
          value={value.calendar.entities}
          domains={['calendar']}
          onChange={entities => set('calendar', { entities })}
        />
        <NumberField
          label={t('days')}
          value={value.calendar.days}
          min={1}
          max={LIMITS.calendarDays}
          onChange={days => set('calendar', { days })}
        />
      </StyledGroup>

      <StyledGroup>
        <legend>{t('weather')}</legend>
        <StyledRow>
          <EntityField
            label={t('weather_entity')}
            value={value.weather.entity}
            domains={['weather']}
            onChange={entity => set('weather', { entity })}
          />
          <EntityField
            label={t('outdoor_temperature')}
            value={value.weather.temperature}
            domains={['sensor']}
            onChange={temperature => set('weather', { temperature })}
          />
        </StyledRow>
      </StyledGroup>

      <StyledGroup>
        <legend>{t('notifications')}</legend>
        <CheckField
          label={t('notifications_enabled')}
          value={value.notifications.enabled}
          onChange={enabled => set('notifications', { enabled })}
        />
        <TextField
          label={t('notifications_prefix')}
          hint={t('notifications_prefix_hint')}
          value={value.notifications.prefix}
          onChange={prefix => set('notifications', { prefix })}
        />
      </StyledGroup>

      <NamedEntityList
        label={t('system_stats')}
        items={value.system}
        max={LIMITS.system}
        domains={['sensor']}
        onChange={system => onChange({ ...value, system })}
      />
    </>
  );
};

export default SidebarForm;
