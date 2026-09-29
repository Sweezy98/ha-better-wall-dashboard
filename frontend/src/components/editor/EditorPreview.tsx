import { memo, useLayoutEffect, useMemo, useRef, useState } from 'react';
import styled from 'styled-components';
import type { Dashboard } from '../../config/types';
import { DashboardViewProvider } from '../../config/DashboardProvider';
import { DashboardLayout } from '../dashboard/Dashboard';
import { useT } from '../../hooks/useHa';
import type { DEVICES } from '../../lib/devices';

const StyledPreview = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  min-height: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
`;

const StyledFrame = styled.div`
  position: absolute;
  left: 50%;
  top: 50%;
  border-radius: 22px;
  overflow: hidden;
  box-shadow:
    0 0 0 10px #05080b,
    0 0 0 12px rgba(120, 200, 255, 0.25),
    0 30px 80px rgba(0, 0, 0, 0.6);
  transform-origin: center center;
`;

/**
 * The draft, as the chosen tablet would draw it.
 *
 * Rendered at the device's real size in CSS pixels and scaled down to fit, so
 * the unit, the cell size and every breakpoint are computed for the tablet --
 * not for the editor's window. (Those measure layout sizes, which a transform
 * leaves alone.) Popups opened here fill the editor's window: they live in the
 * browser's top layer, which no transform reaches.
 */
const EditorPreview: React.FC<{ dashboard: Dashboard; device: (typeof DEVICES)[number]; portrait: boolean; page?: number }> = ({
  dashboard,
  device,
  portrait,
  page,
}) => {
  const t = useT();
  const ref = useRef<HTMLDivElement>(null);
  const frame = useRef<HTMLDivElement>(null);
  const [room, setRoom] = useState<{ width: number; height: number } | null>(null);
  const width = portrait ? device.height : device.width;
  const height = portrait ? device.width : device.height;
  // Worked out in the same render as the size, so a change of device or
  // orientation knows where it starts and where it ends.
  const fit = room ? Math.min((room.width - 40) / width, (room.height - 40) / height) : 0.5;
  const scale = Math.max(0.1, Math.min(1, Math.floor(fit * 1000) / 1000));

  useLayoutEffect(() => {
    const element = ref.current;
    if (!element) return;
    const apply = () => setRoom({ width: element.clientWidth, height: element.clientHeight });
    apply();
    const observer = new ResizeObserver(apply);
    observer.observe(element);
    return () => observer.disconnect();
  }, []);

  // From what was shown to what is now: another tablet grows or shrinks into
  // place, the dashboard laying itself out as it goes; turned, the frame
  // swings a quarter round, as the tablet would in a hand. Resizing the
  // editor itself just follows.
  const shown = useRef<{ width: number; height: number; scale: number; portrait: boolean } | null>(null);
  useLayoutEffect(() => {
    const element = frame.current;
    const before = shown.current;
    shown.current = { width, height, scale, portrait };
    if (!element || !before || !room) return;
    const to = `translate(-50%, -50%) scale(${scale})`;
    const easing = 'cubic-bezier(0.3, 0, 0.2, 1)';
    if (before.portrait !== portrait) {
      // The new shape, turned back a quarter, has the old one's outline.
      element.animate(
        [{ transform: `translate(-50%, -50%) scale(${before.scale}) rotate(${portrait ? 90 : -90}deg)` }, { transform: to }],
        { duration: 550, easing }
      );
    } else if (before.width !== width || before.height !== height) {
      element.animate(
        [
          { width: `${before.width}px`, height: `${before.height}px`, transform: `translate(-50%, -50%) scale(${before.scale})` },
          { width: `${width}px`, height: `${height}px`, transform: to },
        ],
        { duration: 450, easing }
      );
    }
  }, [width, height, scale, portrait, room]);

  const view = useMemo(() => ({ dashboard, dashboards: [], kiosk: false, is_admin: true, pin_required: false }), [dashboard]);

  return (
    <StyledPreview ref={ref} aria-label={t('preview')}>
      <StyledFrame ref={frame} style={{ width, height, transform: `translate(-50%, -50%) scale(${scale})` }}>
        <DashboardViewProvider view={view} focusPage={page}>
          <DashboardLayout />
        </DashboardViewProvider>
      </StyledFrame>
    </StyledPreview>
  );
};

export default memo(EditorPreview);
