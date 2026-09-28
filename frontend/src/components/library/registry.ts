import type { Tile } from '../../config/types';
import type { TranslationKey } from '../../lib/i18n';
import EntityTile from './tiles/EntityTile';
import SensorTile from './tiles/SensorTile';
import BetterLightingTile from './tiles/BetterLightingTile';
import CoverTile from './tiles/CoverTile';
import AdaptiveCoverTile from './tiles/AdaptiveCoverTile';

export interface TileProps {
  tile: Tile;
}

export interface LibraryEntry {
  type: string;
  label: TranslationKey;
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
    icon: 'mdi:gesture-tap-button',
    component: EntityTile,
    needsEntity: true,
    domains: [],
    size: [1, 1],
  },
  {
    type: 'sensor',
    label: 'tile_sensor',
    icon: 'mdi:chart-bell-curve-cumulative',
    component: SensorTile,
    needsEntity: true,
    domains: ['sensor', 'input_number', 'number', 'counter'],
    size: [2, 1],
  },
  {
    type: 'cover',
    label: 'tile_cover',
    icon: 'mdi:window-shutter',
    component: CoverTile,
    needsEntity: true,
    domains: ['cover'],
    size: [2, 1],
  },
  {
    type: 'better_lighting',
    label: 'tile_better_lighting',
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
    icon: 'mdi:window-shutter-auto',
    component: AdaptiveCoverTile,
    needsEntity: true,
    domains: ['cover'],
    size: [2, 2],
    integration: 'adaptive_cover_pro',
  },
];

export const LIBRARY_BY_TYPE: Record<string, LibraryEntry> = Object.fromEntries(LIBRARY.map(entry => [entry.type, entry]));
