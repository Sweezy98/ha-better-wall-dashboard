import { memo, useEffect, useLayoutEffect, useRef, useState } from 'react';
import { uniformCell } from '../../../lib/cell';
import styled from 'styled-components';
import { u } from '../../../themes/default.theme';
import type { Page as PageConfig } from '../../../config/types';
import Page from './Page';

const StyledSwiper = styled.div`
  display: grid;
  grid-template-rows: minmax(0, 1fr) auto;
  min-height: 0;
  min-width: 0;
`;

/**
 * Native scroll snapping rather than a carousel library.
 *
 * The browser does the swipe -- momentum, rubber-banding, the snap -- on the
 * compositor, so dragging a page renders nothing in React and cannot stutter
 * behind a busy main thread. The old swipe-card measured its slides with
 * JavaScript and sometimes measured them before they had a size.
 */
const StyledTrack = styled.div`
  display: flex;
  overflow-x: auto;
  overflow-y: hidden;
  scroll-snap-type: x mandatory;
  overscroll-behavior-x: contain;
  scrollbar-width: none;
  min-height: 0;

  &::-webkit-scrollbar {
    display: none;
  }

  > * {
    flex: 0 0 100%;
    width: 100%;
    height: 100%;
    scroll-snap-align: start;
    scroll-snap-stop: always;
  }
`;

const StyledDots = styled.div`
  display: flex;
  justify-content: center;
  gap: ${u(0.2)};
  height: ${u(1.6)};
  align-items: center;

  button {
    width: ${u(1.4)};
    height: ${u(1.4)};
    display: flex;
    align-items: center;
    justify-content: center;
  }

  button::after {
    content: '';
    width: ${u(0.45)};
    height: ${u(0.45)};
    border-radius: 50%;
    background: ${({ theme }) => theme.text.muted};
    transition:
      background-color 0.2s ease,
      transform 0.2s ease;
  }

  button[aria-current='true']::after {
    background: ${({ theme }) => theme.colors.accent};
    transform: scale(1.25);
  }
`;

const PageSwiper: React.FC<{ pages: PageConfig[] }> = ({ pages }) => {
  const track = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(0);

  useEffect(() => {
    const element = track.current;
    if (!element) return;
    let frame = 0;
    // The index only, and only when it changes: scrolling fires dozens of
    // events a second, and only the dots care.
    const onScroll = () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        const index = Math.round(element.scrollLeft / Math.max(1, element.clientWidth));
        setActive(previous => (previous === index ? previous : index));
      });
    };
    element.addEventListener('scroll', onScroll, { passive: true });
    return () => {
      element.removeEventListener('scroll', onScroll);
      cancelAnimationFrame(frame);
    };
  }, []);

  // One cell size for the whole dashboard, written straight into a CSS
  // variable: a resize or rotation restyles every tile without rendering one.
  useLayoutEffect(() => {
    const element = track.current;
    if (!element) return;
    const apply = () => {
      const boxes = [...element.querySelectorAll<HTMLElement>('[data-cell-grid]')].map(body => {
        const { width, height } = body.getBoundingClientRect();
        const grid = body.firstElementChild as HTMLElement | null;
        const gap = grid ? parseFloat(getComputedStyle(grid).columnGap) || 0 : 0;
        return { width, height, gap, columns: Number(body.dataset.columns), rows: Number(body.dataset.rows) };
      });
      const cell = uniformCell(boxes);
      if (cell) element.style.setProperty('--cell', `${cell}px`);
      else element.style.removeProperty('--cell');
    };
    apply();
    const observer = new ResizeObserver(apply);
    observer.observe(element);
    return () => observer.disconnect();
    // Re-measured when the pages change: a section with more columns
    // shrinks every cell on the dashboard.
  }, [pages]);

  const go = (index: number) => {
    const element = track.current;
    element?.scrollTo({ left: index * element.clientWidth, behavior: 'smooth' });
  };

  return (
    <StyledSwiper>
      <StyledTrack ref={track}>
        {pages.map(page => (
          <Page key={page.id} page={page} />
        ))}
      </StyledTrack>
      <StyledDots>
        {pages.length > 1 &&
          pages.map((page, index) => (
            <button key={page.id} type='button' aria-label={`${index + 1}`} aria-current={index === active} onClick={() => go(index)} />
          ))}
      </StyledDots>
    </StyledSwiper>
  );
};

export default memo(PageSwiper);
