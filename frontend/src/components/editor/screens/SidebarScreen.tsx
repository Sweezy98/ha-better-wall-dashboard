import type { SidebarConfig, SystemButton } from '../../../config/types';
import { LIMITS } from '../../../config/types';
import { useT } from '../../../hooks/useHa';
import { SIDEBAR_PARTS, type SidebarPart } from '../../../lib/editorNav';
import { notificationPrefixes, prefixesInUse } from '../../../lib/notifications';
import { useStoredDashboards } from '../storedDashboards';
import { CheckField, EntityField, EntityListField, NumberField, SelectField, TextField, ChipListField } from '../fields';
import { StyledRow } from '../fields.styled';
import { StyledFieldset } from '../editor.styled';
import NamedEntityList from './NamedEntityList';
import BatteriesOptions from '../BatteriesOptions';
import { BATTERY_DEFAULTS } from '../../../lib/batteries';
import { newId } from '../../../lib/editing';
import { ScreenTitle, type ScreenProps } from './common';

/** What can switch a mode on: a helper, a switch, or a template's binary sensor. */
const MODE_DOMAINS = ['input_boolean', 'switch', 'binary_sensor'];

/** One part of the sidebar, as the menu lists them, top to bottom as the tablet draws them. */
const SidebarScreen: React.FC<ScreenProps & { part: SidebarPart }> = ({ draft, update, part }) => {
  const t = useT();
  const stored = useStoredDashboards();
  const value = draft.sidebar;
  const change = (sidebar: SidebarConfig) => update({ ...draft, sidebar });
  const set = <K extends keyof SidebarConfig>(key: K, patch: Partial<SidebarConfig[K]>) =>
    change({ ...value, [key]: { ...(value[key] as object), ...patch } });
  const label = SIDEBAR_PARTS.find(item => item.part === part)?.label ?? 'tab_sidebar';
  const title = <ScreenTitle title={t(label)} lead={t(`lead_${part}`)} />;

  switch (part) {
    case 'clock':
      return (
        <>
          {title}
          <StyledFieldset>
            <SelectField
              label={t('clock_style')}
              value={value.clock?.style ?? 'digital'}
              options={[
                { value: 'digital', label: t('clock_digital') },
                { value: 'analog', label: t('clock_analog') },
              ]}
              onChange={style => set('clock', { style: style as 'digital' | 'analog' })}
            />
            <CheckField label={t('clock_seconds')} value={Boolean(value.clock?.seconds)} onChange={seconds => set('clock', { seconds })} />
          </StyledFieldset>
        </>
      );
    case 'status':
      return (
        <>
          {title}
          <StyledFieldset>
            <h3>{t('status_icons')}</h3>
            <p>{t('status_icons_hint')}</p>
            <NamedEntityList
              items={value.status.icons ?? []}
              max={LIMITS.statusIcons}
              domains={MODE_DOMAINS}
              addLabel={t('add_status_icon')}
              onChange={icons => set('status', { icons })}
            />
          </StyledFieldset>
          <StyledFieldset>
            <h3>{t('wifi_heading')}</h3>
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
          <CheckField
            label={t('openings_hide_when_closed')}
            hint={t('openings_hide_when_closed_hint')}
            value={value.openings_view?.hide_when_closed ?? false}
            onChange={hide_when_closed =>
              change({ ...value, openings_view: { only_open: false, ...value.openings_view, hide_when_closed } })
            }
          />
          <CheckField
            label={t('openings_only_open')}
            hint={t('openings_only_open_hint')}
            value={value.openings_view?.only_open ?? false}
            onChange={only_open => change({ ...value, openings_view: { hide_when_closed: false, ...value.openings_view, only_open } })}
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
            <EntityField
              label={t('travel_work_zone')}
              hint={t('travel_work_zone_hint')}
              value={value.travel.work_zone ?? ''}
              domains={['zone']}
              onChange={work_zone => set('travel', { work_zone })}
            />
            <TextField
              label={t('travel_work_address')}
              hint={t('travel_work_address_hint')}
              value={value.travel.work_address ?? ''}
              onChange={work_address => set('travel', { work_address })}
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
            withRules
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
            <ChipListField
              label={t('notifications_prefix')}
              hint={t('notifications_prefix_hint')}
              // What any dashboard uses already, to pick rather than retype.
              suggestions={prefixesInUse([...stored, draft])}
              value={notificationPrefixes(value.notifications)}
              onChange={prefixes => set('notifications', { prefixes })}
            />
          </StyledFieldset>
          <StyledFieldset>
            <h3>{t('settings')}</h3>
            <CheckField
              label={t('settings_enabled')}
              hint={t('settings_enabled_hint')}
              value={value.settings?.enabled !== false}
              onChange={enabled => set('settings', { enabled })}
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
          <StyledFieldset>
            <h3>{t('system_buttons')}</h3>
            <p>{t('system_buttons_hint')}</p>
            <NamedEntityList<SystemButton>
              items={value.system_buttons ?? []}
              max={LIMITS.systemButtons}
              domains={['button', 'input_button', 'script', 'scene', 'automation', 'switch', 'input_boolean']}
              addLabel={t('add_system_button')}
              create={() => ({ id: newId(), entity: '', name: '', icon: '', confirm: false, on_name: '', off_name: '' })}
              extra={(button, patch) => (
                <>
                  {/^(switch|input_boolean|light|fan)\./.test(button.entity) && (
                    <>
                      <StyledRow>
                        <TextField
                          label={t('system_button_on_name')}
                          value={button.on_name ?? ''}
                          onChange={on_name => patch({ on_name })}
                        />
                        <TextField
                          label={t('system_button_off_name')}
                          value={button.off_name ?? ''}
                          onChange={off_name => patch({ off_name })}
                        />
                      </StyledRow>
                      <p>{t('system_button_names_hint')}</p>
                    </>
                  )}
                  <CheckField
                    label={t('system_button_confirm_option')}
                    hint={t('system_button_confirm_option_hint')}
                    value={button.confirm}
                    onChange={confirm => patch({ confirm })}
                  />
                </>
              )}
              onChange={system_buttons => change({ ...value, system_buttons })}
            />
          </StyledFieldset>
        </>
      );
    case 'batteries':
      return (
        <>
          {title}
          <BatteriesOptions value={value.batteries ?? BATTERY_DEFAULTS} onChange={batteries => change({ ...value, batteries })} />
        </>
      );
  }
};

export default SidebarScreen;
