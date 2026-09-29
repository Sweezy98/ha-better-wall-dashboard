import { memo } from 'react';
import styled from 'styled-components';
import { u } from '../../../themes/default.theme';
import { pressable } from '../../../themes/interaction';
import { useCallService, useEntity, useT } from '../../../hooks/useHa';
import { coverFeatures } from '../../../lib/cover';

const StyledPresets = styled.div<{ $count: number; $large: boolean }>`
  display: grid;
  grid-template-columns: repeat(${({ $count }) => $count}, minmax(0, 1fr));
  gap: ${({ $large }) => u($large ? 0.6 : 0.5)};

  button {
    height: ${({ $large }) => u($large ? 3.4 : 2.2)};
    border-radius: ${({ $large }) => u($large ? 1.7 : 1.1)};
    font-size: ${({ $large }) => u($large ? 1 : 0.85)};
    font-weight: 600;
    font-variant-numeric: tabular-nums;
    color: ${({ theme }) => theme.text.secondary};
    background-color: ${({ theme, $large }) => ($large ? theme.bubble.background : theme.bubble.icon)};
    ${({ theme }) => pressable(theme.bubble.hover, theme.bubble.pressed)}
  }

  /* Where it stands already: that one lit, as a chosen range is. */
  button[aria-pressed='true'] {
    color: ${({ theme }) => theme.text.primary};
    background-color: ${({ theme }) => theme.bubble.header};
  }

  button:disabled {
    opacity: 0.35;
  }
`;

interface CoverPresetsProps {
  entityId: string;
  /** From the tile's `positions` option (see coverPresets). */
  presets: number[];
  /** The details' size, beside its other buttons; the tile's is smaller. */
  large?: boolean;
  className?: string;
}

/** A cover's favourite positions, one tap each. */
const CoverPresets: React.FC<CoverPresetsProps> = ({ entityId, presets, large = false, className }) => {
  const t = useT();
  const entity = useEntity(entityId);
  const callService = useCallService();
  if (!presets.length) return null;
  const features = coverFeatures(entity?.attributes.supported_features as number | undefined);
  const position = Number(entity?.attributes.current_position);
  return (
    <StyledPresets $count={presets.length} $large={large} className={className} role='group' aria-label={t('cover_presets')}>
      {presets.map(preset => (
        <button
          key={preset}
          type='button'
          aria-pressed={position === preset}
          disabled={!entity || !features.position}
          onClick={() => void callService('cover', 'set_cover_position', { position: preset }, { entity_id: entityId })}
        >
          {preset} %
        </button>
      ))}
    </StyledPresets>
  );
};

export default memo(CoverPresets);
