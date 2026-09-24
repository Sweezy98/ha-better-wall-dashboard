/**
 * Narrow views onto ha-component-kit's store.
 *
 * Every hook here selects exactly one thing, so a component re-renders when
 * *its* entity changes and at no other time. ha-component-kit keeps the
 * object of an unchanged entity identical across updates, which is what makes
 * that work; `useHass()` without a selector would instead re-render on every
 * state change in the house -- the constant re-rendering the Lovelace version
 * suffered from.
 */
import { useCallback } from 'react';
import { useHass } from '@hakit/core';
import type { HassEntity, MessageBase } from 'home-assistant-js-websocket';
import { translate, type TranslationKey } from '../lib/i18n';

export type { HassEntity };

export function useEntity(entityId: string | undefined | null): HassEntity | undefined {
  return useHass(state => (entityId ? state.entities[entityId] : undefined));
}

export function useConnection() {
  return useHass(state => state.connection);
}

/** The entity's display precision, as set in its settings dialog. */
export function usePrecision(entityId: string | undefined | null): number | undefined {
  return useHass(state => (entityId ? state.entitiesRegistryDisplay[entityId]?.display_precision : undefined));
}

export function useUser() {
  return useHass(state => state.user);
}

/**
 * The language to speak: the user's profile language, then Home Assistant's
 * own, then the browser's.
 */
export function useLanguage(): string {
  const profile = useHass(state => state.locale?.language);
  const system = useHass(state => state.config?.language);
  return profile || system || navigator.language || 'en';
}

export function useT() {
  const language = useLanguage();
  return useCallback((key: TranslationKey, values?: Record<string, string | number>) => translate(language, key, values), [language]);
}

export function useIsNight(): boolean {
  return useHass(state => state.entities['sun.sun']?.state === 'below_horizon');
}

/** A URL on the Home Assistant instance, e.g. an image proxy path. */
export function useHassUrl() {
  const join = useHass(state => state.helpers.joinHassUrl);
  return join;
}

/**
 * Call a service. Through the connection directly rather than through the
 * kit's typed helper: the dashboard calls services by name from its config,
 * so the names are strings at compile time anyway.
 */
export function useCallService() {
  const connection = useConnection();
  return useCallback(
    async (
      domain: string,
      service: string,
      data?: Record<string, unknown>,
      target?: { entity_id: string | string[] },
      returnResponse = false
    ) => {
      if (!connection) return undefined;
      return connection.sendMessagePromise<{ response?: unknown }>({
        type: 'call_service',
        domain,
        service,
        service_data: data,
        target,
        // A service that only answers (calendar.get_events) refuses a call
        // that does not ask for the answer; one that never answers refuses a
        // call that does. So it is asked for exactly when it is wanted.
        ...(returnResponse ? { return_response: true } : {}),
      } as MessageBase);
    },
    [connection]
  );
}

/** A sensible icon for an entity that has none of its own. */
export function domainIcon(entityId: string): string {
  const icons: Record<string, string> = {
    light: 'mdi:lightbulb',
    switch: 'mdi:toggle-switch-variant',
    fan: 'mdi:fan',
    cover: 'mdi:window-shutter',
    climate: 'mdi:thermostat',
    media_player: 'mdi:speaker',
    lock: 'mdi:lock',
    vacuum: 'mdi:robot-vacuum',
    scene: 'mdi:palette',
    script: 'mdi:script-text',
    input_boolean: 'mdi:toggle-switch-variant',
    automation: 'mdi:robot',
    button: 'mdi:gesture-tap-button',
    sensor: 'mdi:eye',
    binary_sensor: 'mdi:checkbox-blank-circle-outline',
  };
  return icons[entityId.split('.')[0]] ?? 'mdi:gesture-tap';
}

/** The service that toggles an entity of a given domain. */
export function toggleService(entityId: string): [string, string] {
  const domain = entityId.split('.')[0];
  switch (domain) {
    case 'scene':
    case 'script':
      return [domain, 'turn_on'];
    case 'button':
    case 'input_button':
      return [domain, 'press'];
    case 'lock':
      return [domain, 'toggle'];
    case 'cover':
      return [domain, 'toggle'];
    case 'automation':
    case 'fan':
    case 'input_boolean':
    case 'light':
    case 'switch':
    case 'media_player':
    case 'climate':
    case 'humidifier':
    case 'siren':
    case 'vacuum':
      return [domain, 'toggle'];
    default:
      return ['homeassistant', 'toggle'];
  }
}
