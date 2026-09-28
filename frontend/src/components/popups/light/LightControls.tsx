import { memo } from 'react';
import styled from 'styled-components';
import { u } from '../../../themes/default.theme';
import { fractionAlong, useDragValue } from '../../../hooks/useDragValue';
import { heightOfKelvin, hsAt, hsToRgb, kelvinAt, kelvinToRgb, pointOf } from '../../../lib/light';

/** The big controls share one size, so switching between them moves nothing else. */
const HEIGHT = 21;

/** The tall rounded column the brightness and the white are set on, as Home Assistant's. */
const StyledColumn = styled.div<{ $color: string }>`
  position: relative;
  width: ${u(8.6)};
  height: ${u(HEIGHT)};
  border-radius: ${u(2.6)};
  background: ${({ theme }) => theme.bubble.icon};
  overflow: hidden;
  cursor: pointer;
  /* The column takes the finger, or the popup would scroll instead. */
  touch-action: none;
  box-shadow: inset 0 0 0 1px rgba(255, 255, 255, 0.06);

  &:focus-visible {
    outline: 2px solid ${({ theme }) => theme.colors.accent};
  }

  .fill {
    position: absolute;
    inset: auto 0 0 0;
    background: color-mix(in srgb, ${({ $color }) => $color} 55%, transparent);
    transition: height 0.3s ease;
  }

  &[data-dragging='true'] .fill,
  &[data-dragging='true'] .marker {
    transition: none;
  }

  /* A grip at the top of the fill, so the level reads as something to drag. */
  .fill::after {
    content: '';
    position: absolute;
    top: ${u(0.9)};
    left: 36%;
    right: 36%;
    height: ${u(0.3)};
    border-radius: ${u(0.2)};
    background: ${({ $color }) => $color};
  }

  .fill[data-empty='true']::after {
    display: none;
  }

  /* On the white: a bar across it where it is set. */
  .marker {
    position: absolute;
    left: ${u(1.2)};
    right: ${u(1.2)};
    height: ${u(0.5)};
    border-radius: ${u(0.3)};
    background: #fff;
    box-shadow: 0 1px 4px rgba(0, 0, 0, 0.45);
    transform: translateY(50%);
    transition: bottom 0.3s ease;
  }
`;

const StyledWheel = styled.div`
  position: relative;
  width: ${u(HEIGHT)};
  height: ${u(HEIGHT)};
  border-radius: 50%;
  /* White in the middle over the hues, red to the right and on clockwise. */
  background:
    radial-gradient(circle closest-side, #fff, rgba(255, 255, 255, 0)), conic-gradient(from 90deg, #f00, #ff0, #0f0, #0ff, #00f, #f0f, #f00);
  cursor: pointer;
  touch-action: none;

  .marker {
    position: absolute;
    width: ${u(2.2)};
    height: ${u(2.2)};
    border-radius: 50%;
    border: 3px solid #fff;
    box-shadow: 0 1px 6px rgba(0, 0, 0, 0.5);
    box-sizing: border-box;
    transform: translate(-50%, -50%);
    pointer-events: none;
  }
`;

interface SliderProps {
  label: string;
  reported: unknown;
}

/**
 * A level, 0 to 100, from the foot of the column up: a light's brightness
 * (at least 1 -- 0 would be off), a cover's position or tilt (from 0).
 */
export const LevelColumn: React.FC<SliderProps & { percent: number; color: string; min?: number; onChange: (percent: number) => void }> =
  memo(({ label, reported, percent, color, min = 1, onChange }) => {
    const { ref, value, dragging } = useDragValue<HTMLDivElement, number>(
      (event, box) => Math.max(min, Math.round(fractionAlong(event, box, 'y') * 100)),
      onChange,
      reported
    );
    const shown = value ?? percent;
    return (
      <StyledColumn
        ref={ref}
        $color={color}
        role='slider'
        tabIndex={0}
        aria-label={label}
        aria-orientation='vertical'
        aria-valuemin={min}
        aria-valuemax={100}
        aria-valuenow={shown}
        data-dragging={dragging}
        onKeyDown={event => {
          if (event.key === 'ArrowUp' || event.key === 'ArrowRight') onChange(Math.min(100, shown + 5));
          if (event.key === 'ArrowDown' || event.key === 'ArrowLeft') onChange(Math.max(min, shown - 5));
        }}
      >
        <span className='fill' data-empty={shown === 0} style={{ height: `${shown}%` }} />
      </StyledColumn>
    );
  });

/** The white, warm at the top and cold at the foot, over its own colours. */
export const TemperatureColumn: React.FC<
  SliderProps & { kelvin: number | undefined; min: number; max: number; onChange: (kelvin: number) => void }
> = memo(({ label, reported, kelvin, min, max, onChange }) => {
  const { ref, value, dragging } = useDragValue<HTMLDivElement, number>(
    (event, box) => kelvinAt(fractionAlong(event, box, 'y'), min, max),
    onChange,
    reported
  );
  const shown = value ?? kelvin;
  const stops = [0, 0.25, 0.5, 0.75, 1].map(at => `rgb(${kelvinToRgb(min + at * (max - min)).join(', ')})`);
  return (
    <StyledColumn
      ref={ref}
      $color='#fff'
      style={{ background: `linear-gradient(to bottom, ${stops.join(', ')})` }}
      role='slider'
      tabIndex={0}
      aria-label={label}
      aria-orientation='vertical'
      aria-valuemin={min}
      aria-valuemax={max}
      aria-valuenow={shown}
      data-dragging={dragging}
      onKeyDown={event => {
        const step = Math.max(50, Math.round((max - min) / 20 / 50) * 50);
        const current = shown ?? min;
        if (event.key === 'ArrowUp') onChange(Math.max(min, current - step));
        if (event.key === 'ArrowDown') onChange(Math.min(max, current + step));
      }}
    >
      {shown !== undefined && (
        <span className='marker' style={{ bottom: `calc(${u(0.6)} + ${heightOfKelvin(shown, min, max)} * (100% - ${u(1.2)}))` }} />
      )}
    </StyledColumn>
  );
});

/** Hue round the wheel and saturation out from its white middle. */
export const ColorWheel: React.FC<SliderProps & { hs: [number, number] | undefined; onChange: (hs: [number, number]) => void }> = memo(
  ({ label, reported, hs, onChange }) => {
    const { ref, value } = useDragValue<HTMLDivElement, [number, number]>(
      (event, box) => hsAt(event.clientX - (box.left + box.width / 2), event.clientY - (box.top + box.height / 2), box.width / 2),
      onChange,
      reported
    );
    const shown = value ?? hs;
    const point = shown ? pointOf(shown, 50) : null;
    return (
      <StyledWheel
        ref={ref}
        role='slider'
        tabIndex={0}
        aria-label={label}
        aria-valuetext={shown ? `${shown[0]}°, ${shown[1]} %` : undefined}
      >
        {point && shown && (
          <span
            className='marker'
            style={{ left: `${50 + point.x}%`, top: `${50 + point.y}%`, background: `rgb(${hsToRgb(shown).join(', ')})` }}
          />
        )}
      </StyledWheel>
    );
  }
);
