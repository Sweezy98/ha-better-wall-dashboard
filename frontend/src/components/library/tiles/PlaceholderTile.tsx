import type { TileProps } from '../registry';

/**
 * A spacer: takes its cells and draws nothing.
 *
 * For holding a tile's place -- keeping the right-hand column free, say --
 * without showing an empty glass tile there. Stored as `placeholder`, the
 * key it had when it still drew one; stored keys are forever.
 */
const PlaceholderTile: React.FC<TileProps> = () => <div aria-hidden='true' />;

export default PlaceholderTile;
