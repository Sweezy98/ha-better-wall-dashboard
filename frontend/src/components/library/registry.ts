import type { Tile } from '../../config/types';
import type { TranslationKey } from '../../lib/i18n';
import EntityTile from './tiles/EntityTile';
import SensorTile from './tiles/SensorTile';

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
}

/**
 * Every component a tile can be.
 *
 * This is the library the editor offers. A component added here appears in
 * the editor's type menu and can be placed on any page or in any button's
 * popup; the stored `type` is its key, so a key is forever once released --
 * rename the label, never the key. The device controls to come (the Better
 * Lighting room card and the rest) are added the same way.
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
];

export const LIBRARY_BY_TYPE: Record<string, LibraryEntry> = Object.fromEntries(LIBRARY.map(entry => [entry.type, entry]));
