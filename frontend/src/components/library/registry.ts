import type { Tile } from '../../config/types';
import type { TranslationKey } from '../../lib/i18n';
import { TAP_DOMAINS } from '../../hooks/useHa';
import { coversSteered, hasNumericHistory } from '../../lib/entityFilters';
import EntityTile from './tiles/EntityTile';
import SensorTile from './tiles/SensorTile';
import BetterLightingTile from './tiles/BetterLightingTile';
import CoverTile from './tiles/CoverTile';
import AdaptiveCoverTile from './tiles/AdaptiveCoverTile';
import MediaTile from './tiles/MediaTile';

export interface TileProps {
  tile: Tile;
}

interface PickerEntity {
  state: string;
  attributes: Record<string, unknown>;
}

export interface LibraryEntry {
  type: string;
  label: TranslationKey;
  /** What it is for, a line in the editor's picker. */
  description: TranslationKey;
  icon: string;
  component: React.FC<TileProps>;
  /** Whether the tile is pointless without an entity. */
  needsEntity: boolean;
  /** Domains offered in the editor's entity picker; empty offers all. */
  domains: string[];
  /** Cells it takes when first added. */
  size: [number, number];
  /** Offered only where this integration is installed. */
  integration?: string;
  /** The entity picker offers only this integration's entities. */
  pickerIntegration?: string;
  /** Narrower still: the entities, of those, it can do anything with. */
  pickerEntities?: (entities: Record<string, PickerEntity>, platformOf: (entityId: string) => string | undefined) => string[];
}

/**
 * Every component a tile can be.
 *
 * This is the library the editor offers. A component added here appears in
 * the editor's type menu and can be placed on any page or in any button's
 * popup; the stored `type` is its key, so a key is forever once released --
 * rename the label, never the key. The device controls to come are added
 * the same way.
 */
export const LIBRARY: LibraryEntry[] = [
  {
    type: 'entity',
    label: 'tile_entity',
    description: 'tile_entity_hint',
    icon: 'mdi:gesture-tap-button',
    component: EntityTile,
    needsEntity: true,
    // What one tap can switch, toggle, run or press.
    domains: TAP_DOMAINS,
    size: [1, 1],
  },
  {
    type: 'sensor',
    label: 'tile_sensor',
    description: 'tile_sensor_hint',
    icon: 'mdi:chart-bell-curve-cumulative',
    component: SensorTile,
    needsEntity: true,
    domains: ['sensor', 'input_number', 'number', 'counter'],
    // A graph needs numbers: not a sensor whose state is a word.
    pickerEntities: entities => Object.keys(entities).filter(id => hasNumericHistory(id, entities[id])),
    size: [2, 1],
  },
  {
    type: 'cover',
    label: 'tile_cover',
    description: 'tile_cover_hint',
    icon: 'mdi:window-shutter',
    component: CoverTile,
    needsEntity: true,
    domains: ['cover'],
    size: [2, 1],
  },
  {
    type: 'better_lighting',
    label: 'tile_better_lighting',
    description: 'tile_better_lighting_hint',
    icon: 'mdi:lightbulb-group',
    component: BetterLightingTile,
    needsEntity: true,
    domains: ['light'],
    size: [2, 2],
    integration: 'better_lighting',
    pickerIntegration: 'better_lighting',
  },
  {
    // Given the cover it steers, which people know, not the instance.
    type: 'adaptive_cover',
    label: 'tile_adaptive_cover',
    description: 'tile_adaptive_cover_hint',
    icon: 'mdi:window-shutter-auto',
    component: AdaptiveCoverTile,
    needsEntity: true,
    domains: ['cover'],
    size: [2, 2],
    integration: 'adaptive_cover_pro',
    // Only the covers an instance steers.
    pickerEntities: coversSteered,
  },
  {
    // Given the main player -- the receiver, where there is one -- and, in
    // its options, the players that play through it.
    type: 'media',
    label: 'tile_media',
    description: 'tile_media_hint',
    icon: 'mdi:multimedia',
    component: MediaTile,
    needsEntity: true,
    domains: ['media_player'],
    size: [2, 2],
  },
];

export const LIBRARY_BY_TYPE: Record<string, LibraryEntry> = Object.fromEntries(LIBRARY.map(entry => [entry.type, entry]));
