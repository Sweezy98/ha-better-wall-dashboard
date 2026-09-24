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
const EditorPreview: React.FC<{ dashboard: Dashboard; device: (typeof DEVICES)[number]; portrait: boolean }> = ({
  dashboard,
  device,
  portrait,
}) => {
  const t = useT();
  const ref = useRef<HTMLDivElement>(null);
  const [scale, setScale] = useState(0.5);
  const width = portrait ? device.height : device.width;
  const height = portrait ? device.width : device.height;

  useLayoutEffect(() => {
    const element = ref.current;
    if (!element) return;
    const apply = () => {
      const fit = Math.min((element.clientWidth - 40) / width, (element.clientHeight - 40) / height);
      setScale(Math.max(0.1, Math.min(1, Math.floor(fit * 1000) / 1000)));
    };
    apply();
    const observer = new ResizeObserver(apply);
    observer.observe(element);
    return () => observer.disconnect();
  }, [width, height]);

  const view = useMemo(() => ({ dashboard, dashboards: [], kiosk: false, is_admin: true }), [dashboard]);

  return (
    <StyledPreview ref={ref} aria-label={t('preview')}>
      <StyledFrame style={{ width, height, transform: `translate(-50%, -50%) scale(${scale})` }}>
        <DashboardViewProvider view={view}>
          <DashboardLayout />
        </DashboardViewProvider>
      </StyledFrame>
    </StyledPreview>
  );
};

export default memo(EditorPreview);
