import { useRef } from 'react';
import styled from 'styled-components';
import { u } from '../../themes/default.theme';
import Popup from '../base/popup/Popup';
import PopupScroll from '../base/popup/PopupScroll';
import Icon from '../base/icon/Icon';
import WeatherIcon from '../base/weatherIcon/WeatherIcon';
import Barometer from './Barometer';
import { StyledFacts } from './WeatherFacts.styled';
import { LightningFacts, QuietLightningFact } from './Lightning';
import { useLightning } from '../../hooks/useLightning';
import { useEntity, useIsNight, useLanguage, useT } from '../../hooks/useHa';
import { useForecast, type ForecastEntry } from '../../hooks/useForecast';
import { useTick } from '../../hooks/useNow';
import { formatNumber, formatTime, formatWeekday, startOfDay } from '../../lib/format';
import { useDragScroll } from '../../hooks/useDragScroll';
import { compassPoint, conditionLabel } from '../../lib/weather';

/** Now: the sky, the reading with today's range beside it, and today's hours to the right. */
const StyledNow = styled.div`
  display: grid;
  grid-template-columns: auto auto minmax(0, 1fr);
  align-items: center;
  gap: ${u(1.4)};

  .reading {
    display: flex;
    align-items: center;
    gap: ${u(1)};
  }

  .temperature {
    font-size: ${u(4)};
    font-weight: 300;
    line-height: 1;
    white-space: nowrap;
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

  /* Today's high and low, marked as in the sidebar's weather button. */
  .today {
    display: flex;
    flex-direction: column;
    gap: ${u(0.2)};
    font-size: ${u(1.2)};
  }

  .today div {
    display: flex;
    align-items: center;
    gap: ${u(0.15)};
  }

  .today .icon {
    font-size: ${u(1.4)};
    color: ${({ theme }) => theme.text.secondary};
  }
`;

const StyledHeading = styled.h3`
  margin: ${u(0.6)} 0 0;
  font-size: ${u(1.15)};
  font-weight: 600;
`;

/**
 * Today's hours in a strip to the right of now: time, sky, temperature, and
 * the chance of rain where there is one. Scrolls sideways by finger or mouse.
 */
const StyledHours = styled.div`
  min-width: 0;
  overflow-x: auto;
  overscroll-behavior-x: contain;
  scrollbar-width: none;
  /* Fades out at the right, so a strip longer than the room reads as more. */
  mask-image: linear-gradient(to right, black calc(100% - ${u(2)}), transparent);
  -webkit-mask-image: linear-gradient(to right, black calc(100% - ${u(2)}), transparent);

  &::-webkit-scrollbar {
    display: none;
  }

  .strip {
    display: grid;
    grid-auto-flow: column;
    grid-auto-columns: ${u(4.6)};
    width: max-content;
    padding-right: ${u(2)};
  }

  .hour {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: ${u(0.15)};
    font-size: ${u(0.95)};
  }

  .time {
    color: ${({ theme }) => theme.text.secondary};
  }

  .temp {
    font-size: ${u(1.15)};
    font-weight: 600;
  }

  .rain {
    min-height: 1.2em;
    font-size: ${u(0.8)};
    color: ${({ theme }) => theme.colors.temperature};
  }
`;

/** The week in columns: day, sky, high over low -- one glance, no scrolling. */
const StyledDays = styled.div`
  display: grid;
  grid-auto-flow: column;
  grid-auto-columns: minmax(0, 1fr);
  padding: ${u(0.8)} ${u(0.4)};
  border-radius: ${u(1.2)};
  background: ${({ theme }) => theme.bubble.inset};

  > div {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: ${u(0.3)};
    min-width: 0;
  }

  .day {
    font-size: ${u(1)};
    color: ${({ theme }) => theme.text.secondary};
  }

  .high {
    font-size: ${u(1.25)};
    font-weight: 600;
    margin-top: ${u(0.2)};
  }

  .low {
    font-size: ${u(1.1)};
    color: ${({ theme }) => theme.text.secondary};
  }

  .rain {
    display: flex;
    align-items: center;
    gap: ${u(0.1)};
    min-height: 1.3em;
    font-size: ${u(0.85)};
    color: ${({ theme }) => theme.colors.temperature};
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

/** Today's hours, beside now. */
const Hours: React.FC<{ hours: ForecastEntry[] }> = ({ hours }) => {
  const language = useLanguage();
  const strip = useRef<HTMLDivElement>(null);
  useDragScroll(strip, true, 'x');
  return (
    <StyledHours ref={strip}>
      <div className='strip'>
        {hours.map(entry => (
          <div className='hour' key={entry.datetime}>
            <span className='time'>{formatTime(new Date(entry.datetime), language)}</span>
            <WeatherIcon condition={entry.condition} night={entry.is_daytime === false} size={u(2.6)} />
            <span className='temp'>{degrees(entry.temperature, language)}</span>
            <span className='rain'>{entry.precipitation_probability ? `${entry.precipitation_probability} %` : ''}</span>
          </div>
        ))}
      </div>
    </StyledHours>
  );
};

/** The week: a column a day. */
const Days: React.FC<{ days: ForecastEntry[] }> = ({ days }) => {
  const language = useLanguage();
  const t = useT();
  return (
    <StyledDays>
      {days.map((entry, index) => (
        <div key={entry.datetime}>
          <span className='day'>{index === 0 ? t('today') : formatWeekday(new Date(entry.datetime), language)}</span>
          <WeatherIcon condition={entry.condition} size={u(3)} />
          <span className='high'>{degrees(entry.temperature, language)}</span>
          <span className='low'>{degrees(entry.templow, language)}</span>
          {/* Only when there is a chance of it, so a dry week reads as dry. */}
          <span className='rain'>
            {entry.precipitation_probability ? (
              <>
                <Icon icon='mdi:water' />
                {entry.precipitation_probability} %
              </>
            ) : null}
          </span>
        </div>
      ))}
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

  // The rest of today; late in the evening, the next few hours instead.
  const upcoming = (hourly.forecast ?? []).filter(entry => new Date(entry.datetime).getTime() > now - 3_600_000);
  const endOfToday = startOfDay(new Date(now)).getTime() + 86_400_000;
  const todays = upcoming.filter(entry => new Date(entry.datetime).getTime() < endOfToday);
  const hours = todays.length >= 6 ? todays : upcoming.slice(0, 8);
  const days = (daily.forecast ?? []).slice(0, 7);
  const today = days[0];
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
  // Blitzortung, when it is installed: a quiet tile while it hears nothing,
  // a section of its own while a storm is about.
  const lightning = useLightning();
  const storm = lightning && lightning.strikes.length > 0 ? lightning : null;
  const pressure = typeof a.pressure === 'number' ? { value: a.pressure, unit: a.pressure_unit as string | undefined } : null;

  return (
    <>
      <StyledNow>
        <WeatherIcon condition={weather?.state} night={night} size={u(7.5)} />
        <div>
          <div className='reading'>
            <span className='temperature'>{temperature}</span>
            {today && (
              <div className='today'>
                <div title={t('high_short')}>
                  <Icon className='icon' icon='mdi:arrow-up-thin' />
                  {degrees(today.temperature, language)}
                </div>
                <div title={t('low_short')}>
                  <Icon className='icon' icon='mdi:arrow-down-thin' />
                  {degrees(today.templow, language)}
                </div>
              </div>
            )}
          </div>
          <div className='condition'>{conditionLabel(weather?.state, language)}</div>
          {typeof a.apparent_temperature === 'number' && (
            <div className='feels'>
              {t('feels_like')} {degrees(a.apparent_temperature, language)}
            </div>
          )}
        </div>
        {hours.length > 1 ? <Hours hours={hours} /> : <span />}
      </StyledNow>

      {(facts.length > 0 || pressure) && (
        <StyledFacts>
          {pressure && <Barometer entityId={entityId} value={pressure.value} unit={pressure.unit} />}
          {lightning && !storm && <QuietLightningFact />}
          {facts.map(fact => (
            <div key={fact.label}>
              <Icon className='icon' icon={fact.icon} />
              <span className='label'>{fact.label}</span>
              <span className='value'>{fact.value}</span>
            </div>
          ))}
        </StyledFacts>
      )}

      {storm && (
        <>
          <StyledHeading>{t('thunderstorm')}</StyledHeading>
          <LightningFacts lightning={storm} />
        </>
      )}

      {days.length > 0 && (
        <>
          <StyledHeading>{t('forecast_daily')}</StyledHeading>
          <PopupScroll>
            <Days days={days} />
          </PopupScroll>
        </>
      )}

      {hourly.unsupported && daily.unsupported && <StyledHint>{t('no_forecast')}</StyledHint>}
    </>
  );
};

export default WeatherPopup;
