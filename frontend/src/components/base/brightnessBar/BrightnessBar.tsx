import { memo } from 'react';
import styled from 'styled-components';
import { u } from '../../../themes/default.theme';
import { fractionAlong, useDragValue } from '../../../hooks/useDragValue';

const StyledBar = styled.div<{ $color: string; $height: number }>`
  position: relative;
  flex: 1 1 auto;
  min-width: 0;
  height: ${({ $height }) => u($height)};
  border-radius: ${({ $height }) => u($height / 2)};
  background: ${({ theme }) => theme.bubble.icon};
  overflow: hidden;
  cursor: pointer;
  /* The bar takes the finger, or the page would swipe instead. */
  touch-action: none;

  &:focus-visible {
    outline: 2px solid ${({ theme }) => theme.colors.accent};
  }

  .fill {
    position: absolute;
    inset: 0 auto 0 0;
    background: color-mix(in srgb, ${({ $color }) => $color} 45%, transparent);
    transition: width 0.3s ease;
  }

  &[data-dragging='true'] .fill {
    transition: none;
  }

  /* A grip at the end of the fill, so the level reads as something to drag. */
  .fill::after {
    content: '';
    position: absolute;
    top: 30%;
    bottom: 30%;
    right: ${u(0.6)};
    width: ${u(0.25)};
    border-radius: ${u(0.2)};
    background: ${({ $color }) => $color};
  }

  .fill[data-empty='true']::after {
    display: none;
  }

  /* The number only while dragging, as Better Lighting's card has it. */
  .value {
    position: absolute;
    right: ${u(1.2)};
    top: 50%;
    transform: translateY(-50%);
    font-size: ${u(0.95)};
    font-weight: 600;
    font-variant-numeric: tabular-nums;
    pointer-events: none;
  }
`;

interface BrightnessBarProps {
  /** 0 to 100; 0 for a light that is off. */
  percent: number;
  /** The colour the light is lit in. */
  color: string;
  label: string;
  /** Changes whenever the light reports, e.g. its `last_updated`. */
  reported: unknown;
  onChange: (percent: number) => void;
  /** In units. */
  height?: number;
}

/** A light's brightness as a pill filled in its colour, dragged or tapped to set. */
const BrightnessBar: React.FC<BrightnessBarProps> = ({ percent, color, label, reported, onChange, height = 2.8 }) => {
  const { ref, value, dragging } = useDragValue<HTMLDivElement, number>(
    (event, box) => Math.max(1, Math.round(fractionAlong(event, box, 'x') * 100)),
    onChange,
    reported
  );
  const shown = value ?? percent;
  return (
    <StyledBar
      ref={ref}
      $color={color}
      $height={height}
      role='slider'
      tabIndex={0}
      aria-label={label}
      aria-valuemin={1}
      aria-valuemax={100}
      aria-valuenow={shown}
      data-dragging={dragging}
      onKeyDown={event => {
        if (event.key === 'ArrowRight' || event.key === 'ArrowUp') onChange(Math.min(100, shown + 5));
        if (event.key === 'ArrowLeft' || event.key === 'ArrowDown') onChange(Math.max(1, shown - 5));
      }}
    >
      <span className='fill' data-empty={shown === 0} style={{ width: `${shown}%` }} />
      {dragging && <span className='value'>{shown} %</span>}
    </StyledBar>
  );
};

export default memo(BrightnessBar);
