import { useMemo } from 'react';
import styled from 'styled-components';
import { u } from '../../themes/default.theme';
import Popup from '../base/popup/Popup';
import PopupScroll from '../base/popup/PopupScroll';
import Icon from '../base/icon/Icon';
import WeatherIcon from '../base/weatherIcon/WeatherIcon';
import Barometer from './Barometer';
import { useEntity, useIsNight, useLanguage, useT } from '../../hooks/useHa';
import { useForecast, type ForecastEntry } from '../../hooks/useForecast';
import { useTick } from '../../hooks/useNow';
import { formatNumber, formatTime, formatWeekday } from '../../lib/format';
import { compassPoint, conditionLabel, rangeBar } from '../../lib/weather';
import { smoothPath } from '../../lib/graph';

const StyledNow = styled.div`
  display: grid;
  grid-template-columns: auto minmax(0, 1fr) auto;
  align-items: center;
  gap: ${u(1.4)};

  .temperature {
    font-size: ${u(4)};
    font-weight: 300;
    line-height: 1;
  }

  .condition {
    font-size: ${u(1.3)};
    margin-top: ${u(0.3)};
  }

  .feels {
    font-size: ${u(1)};
    color: ${({ theme }) => theme.text.secondary};
    margin-top: ${u(0.2)};
  }

  .today {
    text-align: right;
    font-size: ${u(1.2)};
    line-height: 1.5;
  }

  .today span {
    color: ${({ theme }) => theme.text.secondary};
  }
`;

const StyledFacts = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(${u(10.5)}, 1fr));
  gap: ${u(0.6)};

  grid-auto-flow: dense;

  > div {
    display: grid;
    grid-template-columns: auto minmax(0, 1fr);
    grid-template-rows: auto auto;
    column-gap: ${u(0.6)};
    align-items: center;
    padding: ${u(0.6)} ${u(0.8)};
    border-radius: ${u(1)};
    background: ${({ theme }) => theme.bubble.background};
  }

  /* Two rows high: the reading on top as in every fact, the dial under it. */
  > .barometer {
    grid-row: span 2;
    grid-template-rows: auto auto minmax(0, 1fr);
    align-items: start;
  }

  .icon {
    grid-row: 1 / 3;
    font-size: ${u(1.6)};
    color: ${({ theme }) => theme.text.secondary};
  }

  .label {
    font-size: ${u(0.85)};
    color: ${({ theme }) => theme.text.secondary};
  }

  .value {
    font-size: ${u(1.15)};
    font-weight: 600;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
`;

const StyledHeading = styled.h3`
  margin: ${u(0.6)} 0 0;
  font-size: ${u(1.15)};
  font-weight: 600;
`;

/** Width of one hour's column, in units. The curve is drawn in these. */
const HOUR_WIDTH = 5.2;

const StyledHours = styled.div`
  overflow-x: auto;
  overscroll-behavior-x: contain;
  scrollbar-width: none;
  border-radius: ${u(1.2)};
  background: ${({ theme }) => theme.bubble.inset};

  &::-webkit-scrollbar {
    display: none;
  }

  .strip {
    position: relative;
    display: grid;
    grid-auto-flow: column;
    grid-auto-columns: ${u(HOUR_WIDTH)};
    width: max-content;
    padding: ${u(0.6)} 0;
  }

  .hour {
    display: flex;
    flex-direction: column;
    align-items: center;
    font-size: ${u(0.95)};
  }

  .time {
    color: ${({ theme }) => theme.text.secondary};
  }

  .temp {
    font-size: ${u(1.15)};
    font-weight: 600;
    margin-top: ${u(0.2)};
  }

  /* The band the temperature curve is drawn across. */
  .curve-space {
    height: ${u(4)};
  }

  .rain {
    width: ${u(1.1)};
    height: ${u(2.4)};
    border-radius: ${u(0.3)};
    background: rgba(3, 169, 244, 0.12);
    display: flex;
    align-items: flex-end;
    overflow: hidden;
  }

  .rain > span {
    display: block;
    width: 100%;
    background: ${({ theme }) => theme.colors.temperature};
  }

  .rain-label {
    font-size: ${u(0.8)};
    color: ${({ theme }) => theme.colors.temperature};
    min-height: 1.2em;
    margin-top: ${u(0.15)};
  }

  svg {
    position: absolute;
    left: 0;
    pointer-events: none;
    overflow: visible;
  }
`;

const StyledDays = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${u(0.35)};

  > div {
    display: grid;
    grid-template-columns: ${u(4.4)} ${u(2.8)} ${u(3.8)} ${u(2.8)} minmax(${u(6)}, 1fr) ${u(2.8)};
    align-items: center;
    gap: ${u(0.9)};
    padding: ${u(0.35)} ${u(0.9)};
    border-radius: ${u(1)};
    background: ${({ theme }) => theme.bubble.background};
    font-size: ${u(1.1)};
  }

  .day {
    font-weight: 600;
  }

  .rain {
    font-size: ${u(0.9)};
    color: ${({ theme }) => theme.colors.temperature};
    display: flex;
    align-items: center;
    gap: ${u(0.2)};
  }

  .low {
    color: ${({ theme }) => theme.text.secondary};
    text-align: right;
  }

  .high {
    font-weight: 600;
  }

  .track {
    position: relative;
    height: ${u(0.5)};
    border-radius: ${u(0.25)};
    background: rgba(255, 255, 255, 0.08);
  }

  /* Coloured by the temperatures it covers, not by its own length: the
     gradient spans the week's whole scale and each bar shows its slice. */
  .bar {
    position: absolute;
    top: 0;
    bottom: 0;
    border-radius: inherit;
    background-image: linear-gradient(90deg, #4aa8e0, #7fd2c4 35%, #ffd27a 65%, #ff8a3c);
    background-repeat: no-repeat;
  }

  .now {
    position: absolute;
    top: 50%;
    width: ${u(0.9)};
    height: ${u(0.9)};
    border-radius: 50%;
    background: #fff;
    border: ${u(0.2)} solid #1c1c20;
    transform: translate(-50%, -50%);
  }
`;

const StyledHint = styled.p`
  color: ${({ theme }) => theme.text.secondary};
  font-size: ${u(1)};
`;

interface WeatherPopupProps {
  open: boolean;
  onClose: () => void;
  entityId: string;
  /** Already formatted, from the house's own sensor where there is one. */
  temperature: string;
}

const WeatherPopup: React.FC<WeatherPopupProps> = ({ open, onClose, entityId, temperature }) => {
  const t = useT();
  const weather = useEntity(entityId);
  return (
    <Popup
      open={open}
      onClose={onClose}
      title={t('weather')}
      subtitle={weather?.attributes.friendly_name as string}
      icon='mdi:weather-partly-cloudy'
      width={66}
      // Now, the facts and the hours stay in view; on a short screen only
      // the week scrolls.
      fixedBody
    >
      <WeatherContent entityId={entityId} temperature={temperature} />
    </Popup>
  );
};

const degrees = (value: number | undefined, language: string) => (value === undefined ? '–' : `${formatNumber(value, language, 0)}°`);

/** The next hours: a column each, one temperature curve drawn across all of them. */
const Hours: React.FC<{ hours: ForecastEntry[] }> = ({ hours }) => {
  const language = useLanguage();
  const key = hours.map(entry => entry.temperature ?? 0).join(',');
  const path = useMemo(() => {
    const temps = key.split(',').map(Number);
    const min = Math.min(...temps);
    const max = Math.max(...temps);
    // x in hour columns and y in 0..1 of the band, so the curve lines up
    // with the columns whatever the unit is on this screen.
    return smoothPath(temps.map((value, index) => ({ x: index + 0.5, y: max === min ? 0.5 : 1 - (value - min) / (max - min) })));
  }, [key]);
  return (
    <StyledHours>
      <div className='strip'>
        <svg
          style={{ top: `calc(var(--u) * 6.3)`, width: `calc(var(--u) * ${HOUR_WIDTH * hours.length})`, height: `calc(var(--u) * 2.8)` }}
          viewBox={`0 0 ${hours.length} 1`}
          preserveAspectRatio='none'
          aria-hidden='true'
        >
          <path d={path} fill='none' stroke='#ffc768' strokeWidth={3} vectorEffect='non-scaling-stroke' strokeLinecap='round' />
        </svg>
        {hours.map(entry => (
          <div className='hour' key={entry.datetime}>
            <span className='time'>{formatTime(new Date(entry.datetime), language)}</span>
            <WeatherIcon condition={entry.condition} night={entry.is_daytime === false} size={u(2.6)} />
            <span className='temp'>{degrees(entry.temperature, language)}</span>
            <span className='curve-space' />
            <span className='rain' aria-hidden='true'>
              <span style={{ height: `${entry.precipitation_probability ?? 0}%` }} />
            </span>
            <span className='rain-label'>{entry.precipitation_probability ? `${entry.precipitation_probability} %` : ''}</span>
          </div>
        ))}
      </div>
    </StyledHours>
  );
};

/** The week: every day's low-to-high bar on one shared scale. */
const Days: React.FC<{ days: ForecastEntry[]; current: number | null }> = ({ days, current }) => {
  const language = useLanguage();
  const t = useT();
  const lows = days.map(entry => entry.templow ?? entry.temperature ?? 0);
  const highs = days.map(entry => entry.temperature ?? 0);
  const extra = current !== null ? [current] : [];
  const min = Math.min(...lows, ...extra);
  const max = Math.max(...highs, ...extra);
  const span = max - min || 1;
  return (
    <StyledDays>
      {days.map((entry, index) => {
        const bar = rangeBar(lows[index], highs[index], min, max);
        return (
          <div key={entry.datetime}>
            <span className='day'>{index === 0 ? t('today') : formatWeekday(new Date(entry.datetime), language)}</span>
            <WeatherIcon condition={entry.condition} size={u(2.6)} />
            <span className='rain'>
              {entry.precipitation_probability ? (
                <>
                  <Icon icon='mdi:water' /> {entry.precipitation_probability} %
                </>
              ) : null}
            </span>
            <span className='low'>{degrees(lows[index], language)}</span>
            <span className='track'>
              <span
                className='bar'
                style={{
                  left: `${bar.left}%`,
                  width: `${bar.width}%`,
                  backgroundSize: `${(100 / bar.width) * 100}% 100%`,
                  backgroundPosition: `${bar.width >= 100 ? 0 : (bar.left / (100 - bar.width)) * 100}% 0`,
                }}
              />
              {index === 0 && current !== null && <span className='now' style={{ left: `${((current - min) / span) * 100}%` }} />}
            </span>
            <span className='high'>{degrees(highs[index], language)}</span>
          </div>
        );
      })}
    </StyledDays>
  );
};

/** The weather at a glance: now, the next hours as a curve, the week as bars. */
const WeatherContent: React.FC<{ entityId: string; temperature: string }> = ({ entityId, temperature }) => {
  const t = useT();
  const language = useLanguage();
  const night = useIsNight();
  const weather = useEntity(entityId);
  const sun = useEntity('sun.sun');
  const hourly = useForecast(entityId, 'hourly');
  const daily = useForecast(entityId, 'daily');
  const now = useTick(600_000);
  const a = weather?.attributes ?? {};

  const hours = (hourly.forecast ?? []).filter(entry => new Date(entry.datetime).getTime() > now - 3_600_000).slice(0, 24);
  const days = (daily.forecast ?? []).slice(0, 7);
  const today = days[0];
  const current = typeof a.temperature === 'number' ? a.temperature : null;
  const rainChance = today?.precipitation_probability ?? hours[0]?.precipitation_probability;
  const rainAmount = today?.precipitation;
  const time = (value: unknown) => (typeof value === 'string' ? formatTime(new Date(value), language) : undefined);
  const number = (value: unknown, digits = 0) =>
    value === undefined || value === null ? undefined : formatNumber(Number(value), language, digits);

  const facts = [
    { icon: 'mdi:water-percent', label: t('humidity'), value: number(a.humidity) && `${number(a.humidity)} %` },
    {
      icon: 'mdi:weather-windy',
      label: t('wind'),
      value:
        number(a.wind_speed) &&
        `${number(a.wind_speed)} ${a.wind_speed_unit ?? ''}${a.wind_bearing !== undefined ? ` ${compassPoint(Number(a.wind_bearing), language)}` : ''}`,
    },
    {
      icon: 'mdi:weather-rainy',
      label: t('rain'),
      value:
        [
          rainChance !== undefined ? `${rainChance} %` : null,
          rainAmount ? `${number(rainAmount, 1)} ${a.precipitation_unit ?? 'mm'}` : null,
        ]
          .filter(Boolean)
          .join(' · ') || undefined,
    },
    { icon: 'mdi:sun-wireless', label: t('uv_index'), value: number(a.uv_index) },
    { icon: 'mdi:weather-sunset-up', label: t('sunrise'), value: time(sun?.attributes.next_rising) },
    { icon: 'mdi:weather-sunset-down', label: t('sunset'), value: time(sun?.attributes.next_setting) },
  ].filter(fact => fact.value);
  const pressure = typeof a.pressure === 'number' ? { value: a.pressure, unit: a.pressure_unit as string | undefined } : null;

  return (
    <>
      <StyledNow>
        <WeatherIcon condition={weather?.state} night={night} size={u(7.5)} />
        <div>
          <div className='temperature'>{temperature}</div>
          <div className='condition'>{conditionLabel(weather?.state, language)}</div>
          {typeof a.apparent_temperature === 'number' && (
            <div className='feels'>
              {t('feels_like')} {degrees(a.apparent_temperature, language)}
            </div>
          )}
        </div>
        {today && (
          <div className='today'>
            <div>
              <span>{t('high_short')}</span> {degrees(today.temperature, language)}
            </div>
            <div>
              <span>{t('low_short')}</span> {degrees(today.templow, language)}
            </div>
          </div>
        )}
      </StyledNow>

      {(facts.length > 0 || pressure) && (
        <StyledFacts>
          {pressure && <Barometer entityId={entityId} value={pressure.value} unit={pressure.unit} />}
          {facts.map(fact => (
            <div key={fact.label}>
              <Icon className='icon' icon={fact.icon} />
              <span className='label'>{fact.label}</span>
              <span className='value'>{fact.value}</span>
            </div>
          ))}
        </StyledFacts>
      )}

      {hours.length > 1 && (
        <>
          <StyledHeading>{t('forecast_hourly')}</StyledHeading>
          <Hours hours={hours} />
        </>
      )}

      {days.length > 0 && (
        <>
          <StyledHeading>{t('forecast_daily')}</StyledHeading>
          <PopupScroll>
            <Days days={days} current={current} />
          </PopupScroll>
        </>
      )}

      {hourly.unsupported && daily.unsupported && <StyledHint>{t('no_forecast')}</StyledHint>}
    </>
  );
};

export default WeatherPopup;
