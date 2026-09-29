import { memo } from 'react';
import styled from 'styled-components';
import { useHass } from '@hakit/core';
import { u } from '../../themes/default.theme';
import { useEntity, useLanguage, useT } from '../../hooks/useHa';
import { useTick } from '../../hooks/useNow';
import { moonIllumination, moonPath, moonWaxing, nextFullMoon } from '../../lib/moon';
import type { TranslationKey } from '../../lib/i18n';

/** Home Assistant's Moon integration's phases, as it names them in its state. */
const PHASES: Record<string, TranslationKey> = {
  new_moon: 'moon_new_moon',
  waxing_crescent: 'moon_waxing_crescent',
  first_quarter: 'moon_first_quarter',
  waxing_gibbous: 'moon_waxing_gibbous',
  full_moon: 'moon_full_moon',
  waning_gibbous: 'moon_waning_gibbous',
  last_quarter: 'moon_last_quarter',
  waning_crescent: 'moon_waning_crescent',
};

/** No icon of its own beside the name: the moon drawn under it is the picture. */
const StyledTile = styled.div`
  .label,
  .value {
    grid-column: 1 / -1;
  }
`;

const StyledMoon = styled.div`
  grid-column: 1 / -1;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${u(0.35)};
  margin-top: ${u(0.5)};

  svg {
    width: ${u(4.6)};
    height: ${u(4.6)};
    overflow: visible;
  }

  .details {
    font-size: ${u(0.82)};
    color: ${({ theme }) => theme.text.secondary};
    text-align: center;
  }
`;

/**
 * The moon as one of the weather facts, two rows high like the barometer
 * beside it: the phase by name, and the moon itself -- its dark disc, and
 * the part the sun lights, as much of it and on the side it is tonight --
 * with how much is lit and when it is next full.
 */
const Moon: React.FC<{ entityId: string }> = ({ entityId }) => {
  const t = useT();
  const language = useLanguage();
  const sensor = useEntity(entityId);
  const latitude = useHass(state => state.config?.latitude);
  // The shape changes by the hour, not the second.
  const now = useTick(3_600_000);
  if (!sensor) return null;
  const phase = PHASES[sensor.state];
  const lit = moonIllumination(now);
  const full = new Date(nextFullMoon(now)).toLocaleDateString(language, { day: 'numeric', month: 'short' });
  return (
    <StyledTile className='tall'>
      <span className='label'>{t('moon')}</span>
      <span className='value'>{phase ? t(phase) : sensor.state}</span>
      <StyledMoon>
        <svg viewBox='-12 -12 24 24' aria-hidden='true'>
          <defs>
            <radialGradient id='bwd-moon-lit' cx='40%' cy='35%' r='75%'>
              <stop offset='0' stopColor='#f6f3ea' />
              <stop offset='1' stopColor='#c3bfb2' />
            </radialGradient>
          </defs>
          {/* A faint halo, brighter the fuller it is. */}
          <circle r={11.5} fill='rgba(255, 246, 220, 1)' opacity={0.04 + lit * 0.08} />
          {/* The whole disc, dark: earthshine on the part the sun misses. */}
          <circle r={10} fill='rgba(255, 255, 255, 0.07)' stroke='rgba(255, 255, 255, 0.12)' strokeWidth={0.4} />
          <path d={moonPath(lit, moonWaxing(now), 10, (latitude ?? 0) < 0)} fill='url(#bwd-moon-lit)' />
        </svg>
        <span className='details'>
          {t('moon_lit', { percent: Math.round(lit * 100) })} · {t('moon_next_full', { date: full })}
        </span>
      </StyledMoon>
    </StyledTile>
  );
};

export default memo(Moon);
