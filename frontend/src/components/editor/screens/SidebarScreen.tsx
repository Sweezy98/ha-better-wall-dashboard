import type { SidebarConfig } from '../../../config/types';
import { LIMITS } from '../../../config/types';
import { useT } from '../../../hooks/useHa';
import { SIDEBAR_PARTS, type SidebarPart } from '../../../lib/editorNav';
import { CheckField, EntityField, EntityListField, NumberField, SelectField, TextField } from '../fields';
import { StyledRow } from '../fields.styled';
import { StyledFieldset } from '../editor.styled';
import NamedEntityList from './NamedEntityList';
import { ScreenTitle, type ScreenProps } from './common';

/** What can switch a mode on: a helper, a switch, or a template's binary sensor. */
const MODE_DOMAINS = ['input_boolean', 'switch', 'binary_sensor'];

/** One part of the sidebar, as the menu lists them, top to bottom as the tablet draws them. */
const SidebarScreen: React.FC<ScreenProps & { part: SidebarPart }> = ({ draft, update, part }) => {
  const t = useT();
  const value = draft.sidebar;
  const change = (sidebar: SidebarConfig) => update({ ...draft, sidebar });
  const set = <K extends keyof SidebarConfig>(key: K, patch: Partial<SidebarConfig[K]>) =>
    change({ ...value, [key]: { ...(value[key] as object), ...patch } });
  const label = SIDEBAR_PARTS.find(item => item.part === part)?.label ?? 'tab_sidebar';
  const title = <ScreenTitle title={t(label)} lead={t(`lead_${part}`)} />;

  switch (part) {
    case 'status':
      return (
        <>
          {title}
          <StyledFieldset>
            <h3>{t('status_icons')}</h3>
            <p>{t('status_icons_hint')}</p>
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
          </StyledFieldset>
          <StyledFieldset>
            <h3>{t('guest_wifi')}</h3>
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
            </StyledRow>
            <StyledRow>
              <SelectField
                label={t('security')}
                value={value.guest_wifi.security}
                options={[
                  { value: 'WPA', label: 'WPA/WPA2/WPA3' },
                  { value: 'WEP', label: 'WEP' },
                  { value: 'nopass', label: t('open_network') },
                ]}
                onChange={security => set('guest_wifi', { security: security as SidebarConfig['guest_wifi']['security'] })}
              />
              <CheckField label={t('hidden_network')} value={value.guest_wifi.hidden} onChange={hidden => set('guest_wifi', { hidden })} />
            </StyledRow>
          </StyledFieldset>
        </>
      );
    case 'climate':
      return (
        <>
          {title}
          <StyledFieldset>
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
            <NumberField
              label={t('hours')}
              value={value.climate.hours}
              min={1}
              max={168}
              unit='h'
              onChange={hours => set('climate', { hours })}
            />
          </StyledFieldset>
        </>
      );
    case 'persons':
      return (
        <>
          {title}
          <EntityListField
            label={t('persons')}
            value={value.persons}
            domains={['person']}
            onChange={persons => change({ ...value, persons })}
          />
        </>
      );
    case 'openings':
      return (
        <>
          {title}
          <EntityListField
            label={t('openings')}
            hint={t('openings_hint')}
            value={value.openings}
            domains={['binary_sensor', 'cover', 'lock', 'sensor']}
            onChange={openings => change({ ...value, openings })}
          />
        </>
      );
    case 'travel':
      return (
        <>
          {title}
          <StyledFieldset>
            <EntityField
              label={t('travel_sensor')}
              value={value.travel.entity}
              domains={['sensor']}
              onChange={entity => set('travel', { entity })}
            />
            <TextField
              label={t('name')}
              hint={t('travel_name_hint')}
              value={value.travel.name}
              onChange={name => set('travel', { name })}
            />
          </StyledFieldset>
          <StyledFieldset>
            <h3>{t('map')}</h3>
            <TextField
              label={t('maps_api_key')}
              hint={t('maps_api_key_hint')}
              type='password'
              value={value.travel.maps_api_key}
              onChange={maps_api_key => set('travel', { maps_api_key })}
            />
            <TextField
              label={t('map_url')}
              hint={t('map_url_hint')}
              type='url'
              value={value.travel.map_url}
              onChange={map_url => set('travel', { map_url })}
            />
          </StyledFieldset>
        </>
      );
    case 'quick':
      return (
        <>
          {title}
          <NamedEntityList
            items={value.quick_actions}
            max={LIMITS.quickActions}
            addLabel={t('add_quick_action')}
            onChange={quick_actions => change({ ...value, quick_actions })}
          />
        </>
      );
    case 'calendar':
      return (
        <>
          {title}
          <StyledFieldset>
            <EntityListField
              label={t('calendars')}
              value={value.calendar.entities}
              domains={['calendar']}
              onChange={entities => set('calendar', { entities })}
            />
            <NumberField
              label={t('days')}
              hint={t('calendar_days_hint')}
              value={value.calendar.days}
              min={1}
              max={LIMITS.calendarDays}
              onChange={days => set('calendar', { days })}
            />
          </StyledFieldset>
        </>
      );
    case 'weather':
      return (
        <>
          {title}
          <StyledFieldset>
            <EntityField
              label={t('weather_entity')}
              value={value.weather.entity}
              domains={['weather']}
              onChange={entity => set('weather', { entity })}
            />
            <EntityField
              label={t('outdoor_temperature')}
              hint={t('outdoor_temperature_hint')}
              value={value.weather.temperature}
              domains={['sensor']}
              onChange={temperature => set('weather', { temperature })}
            />
          </StyledFieldset>
        </>
      );
    case 'notifications':
      return (
        <>
          {title}
          <StyledFieldset>
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
          </StyledFieldset>
        </>
      );
    case 'system':
      return (
        <>
          {title}
          <NamedEntityList
            items={value.system}
            max={LIMITS.system}
            domains={['sensor']}
            addLabel={t('add_statistic')}
            onChange={system => change({ ...value, system })}
          />
        </>
      );
  }
};

export default SidebarScreen;
