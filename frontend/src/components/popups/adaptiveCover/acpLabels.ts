import type { AcpBadge } from '../../../lib/adaptiveCover';
import type { TranslationKey } from '../../../lib/i18n';

/** What each of Adaptive Cover Pro's states is called here; a state not listed is shown as it comes. */
export const BADGE_LABELS: Record<AcpBadge, TranslationKey> = {
  auto: 'acp_badge_auto',
  manual: 'acp_badge_manual',
  weather: 'acp_badge_weather',
  glare_zone: 'acp_badge_glare_zone',
  climate: 'acp_badge_climate',
  cloud: 'acp_badge_cloud',
  custom_position: 'acp_badge_custom_position',
  solar: 'acp_badge_solar',
  motion: 'acp_badge_motion',
  off: 'acp_badge_off',
  off_schedule: 'acp_badge_off_schedule',
};

export const CONTROL_STATUS: Record<string, TranslationKey> = {
  active: 'acp_status_active',
  calibrating: 'acp_status_calibrating',
  outside_time_window: 'acp_status_outside_time_window',
  position_delta_too_small: 'acp_status_position_delta_too_small',
  time_delta_too_small: 'acp_status_time_delta_too_small',
  manual_override: 'acp_status_manual_override',
  automatic_control_off: 'acp_status_automatic_control_off',
  sun_not_visible: 'acp_status_sun_not_visible',
  weather_override_active: 'acp_status_weather_override_active',
  motion_timeout: 'acp_status_motion_timeout',
};

export const MOTION_STATUS: Record<string, TranslationKey> = {
  not_configured: 'acp_motion_not_configured',
  motion_detected: 'acp_motion_motion_detected',
  timeout_pending: 'acp_motion_timeout_pending',
  no_motion: 'acp_motion_no_motion',
  holding: 'acp_motion_holding',
  waiting_for_data: 'acp_motion_waiting_for_data',
};

export const CLIMATE_STATUS: Record<string, TranslationKey> = {
  summer_mode: 'acp_climate_summer_mode',
  winter_mode: 'acp_climate_winter_mode',
  intermediate: 'acp_climate_intermediate',
};

export const HANDLERS: Record<string, TranslationKey> = {
  weather: 'acp_handler_weather',
  manual_override: 'acp_handler_manual_override',
  custom_position: 'acp_handler_custom_position',
  motion_timeout: 'acp_handler_motion_timeout',
  cloud_suppression: 'acp_handler_cloud_suppression',
  climate: 'acp_handler_climate',
  glare_zone: 'acp_handler_glare_zone',
  solar: 'acp_handler_solar',
  default: 'acp_handler_default',
};

/** A handler of the decision trace by name: custom_position_2 is a custom position. */
export const handlerKey = (handler: string): TranslationKey | undefined =>
  HANDLERS[handler.startsWith('custom_position') ? 'custom_position' : handler];
