import { useLayoutEffect, useRef } from 'react';
import styled from 'styled-components';
import { u } from '../../../themes/default.theme';

const StyledSegmented = styled.div`
  position: relative;
  display: flex;
  gap: ${u(0.3)};

  button {
    position: relative;
    z-index: 1;
    padding: ${u(0.3)} ${u(0.7)};
    border-radius: ${u(1)};
    font-size: ${u(0.96)};
    color: ${({ theme }) => theme.text.secondary};
    transition: color 0.25s ease;
  }

  button[aria-pressed='true'] {
    color: ${({ theme }) => theme.text.primary};
  }

  /* The chosen one's background, one element behind them all: it slides
     from the old choice to the new rather than jumping. */
  .thumb {
    position: absolute;
    top: 0;
    left: 0;
    border-radius: ${u(1)};
    background: ${({ theme }) => theme.bubble.header};
    transition:
      transform 0.3s cubic-bezier(0.3, 0, 0.2, 1),
      width 0.3s cubic-bezier(0.3, 0, 0.2, 1);
    pointer-events: none;
  }
`;

interface SegmentedProps<T extends string | number> {
  options: { value: T; label: string }[];
  value: T;
  onChange: (value: T) => void;
  label: string;
}

/**
 * A few choices side by side, one of them chosen -- a graph's time range.
 * Placed by measuring the chosen button, and moved by a transform, so the
 * thumb follows it wherever the labels put it.
 */
function Segmented<T extends string | number>({ options, value, onChange, label }: SegmentedProps<T>) {
  const group = useRef<HTMLDivElement>(null);
  const thumb = useRef<HTMLSpanElement>(null);
  const placed = useRef(false);

  useLayoutEffect(() => {
    const box = group.current;
    const slider = thumb.current;
    if (!box || !slider) return;
    const place = () => {
      const chosen = box.querySelector<HTMLElement>('button[aria-pressed="true"]');
      if (!chosen) return;
      // The first time where it belongs at once; after that, slid there.
      if (!placed.current) slider.style.transition = 'none';
      slider.style.width = `${chosen.offsetWidth}px`;
      slider.style.height = `${chosen.offsetHeight}px`;
      slider.style.transform = `translate(${chosen.offsetLeft}px, ${chosen.offsetTop}px)`;
      if (!placed.current) {
        void slider.offsetWidth;
        slider.style.transition = '';
        placed.current = true;
      }
    };
    place();
    // Labels change width with the language and the font loading in.
    const observer = new ResizeObserver(place);
    observer.observe(box);
    return () => observer.disconnect();
  }, [value]);

  return (
    <StyledSegmented ref={group} role='group' aria-label={label}>
      <span ref={thumb} className='thumb' aria-hidden='true' />
      {options.map(option => (
        <button key={option.value} type='button' aria-pressed={option.value === value} onClick={() => onChange(option.value)}>
          {option.label}
        </button>
      ))}
    </StyledSegmented>
  );
}

export default Segmented;
