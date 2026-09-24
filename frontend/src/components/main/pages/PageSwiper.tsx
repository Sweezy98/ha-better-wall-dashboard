import { memo, useEffect, useLayoutEffect, useRef, useState } from 'react';
import { useDashboardContext } from '../../../config/DashboardProvider';
import { uniformCell } from '../../../lib/cell';
import { useMouseSwipe } from '../../../hooks/useMouseSwipe';
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
/*
 * The track reaches out into the gutter on either side and fades to nothing
 * across exactly that gutter; each page pads itself back in by the same
 * amount (see Page). So the haze lies between the pages and the sidebar's
 * edge, never over the content: at rest it covers only empty gutter, and a
 * page swiped away washes out as it reaches the sidebar (or the screen's
 * edge) instead of being sliced off there.
 */
const EDGE = u(1.1);

const StyledTrack = styled.div`
  margin: 0 calc(-1 * ${EDGE});
  mask-image: linear-gradient(to right, transparent, black ${EDGE}, black calc(100% - ${EDGE}), transparent);
  -webkit-mask-image: linear-gradient(to right, transparent, black ${EDGE}, black calc(100% - ${EDGE}), transparent);

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
  useMouseSwipe(track, pages.length);

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
        // Layout size, untouched by the editor preview's scale transform.
        const width = body.clientWidth;
        const height = body.clientHeight;
        const grid = body.firstElementChild as HTMLElement | null;
        const gap = grid ? parseFloat(getComputedStyle(grid).columnGap) || 0 : 0;
        return { width, height, gap, columns: Number(body.dataset.columns), rows: Number(body.dataset.rows) };
      });
      const cell = uniformCell(boxes);
      if (cell) {
        element.style.setProperty('--cell-w', `${cell.width}px`);
        element.style.setProperty('--cell-h', `${cell.height}px`);
      } else {
        element.style.removeProperty('--cell-w');
        element.style.removeProperty('--cell-h');
      }
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

  // In the editor's preview: turn to the page being edited.
  const { focusPage } = useDashboardContext();
  useEffect(() => {
    const element = track.current;
    if (focusPage === undefined || !element) return;
    element.scrollTo({ left: focusPage * element.clientWidth, behavior: 'smooth' });
  }, [focusPage]);

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
