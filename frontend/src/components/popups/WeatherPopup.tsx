import styled from 'styled-components';
import { u } from '../../themes/default.theme';
import Popup from '../base/popup/Popup';
import WeatherIcon from '../base/weatherIcon/WeatherIcon';
import { useEntity, useIsNight, useLanguage, useT } from '../../hooks/useHa';
import { useForecast, type ForecastEntry } from '../../hooks/useForecast';
import { useTick } from '../../hooks/useNow';
import { formatNumber, formatTime, formatWeekday } from '../../lib/format';
import { conditionLabel } from '../../lib/weather';

const StyledNow = styled.div`
  display: flex;
  align-items: center;
  gap: ${u(1.2)};

  .temperature {
    font-size: ${u(3.6)};
    font-weight: 300;
  }

  .condition {
    font-size: ${u(1.26)};
  }

  .details {
    font-size: ${u(1.02)};
    color: ${({ theme }) => theme.text.secondary};
    margin-top: ${u(0.2)};
  }
`;

const StyledHeading = styled.h3`
  margin: ${u(0.6)} 0 0;
  font-size: ${u(1.14)};
  font-weight: 600;
`;

const StyledHours = styled.div`
  display: grid;
  grid-auto-flow: column;
  grid-auto-columns: minmax(${u(4.2)}, 1fr);
  gap: ${u(0.4)};
  overflow-x: auto;
  padding-bottom: ${u(0.3)};

  > div {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: ${u(0.15)};
    padding: ${u(0.5)} 0;
    border-radius: ${u(1)};
    background: ${({ theme }) => theme.bubble.background};
    font-size: ${u(0.96)};
  }

  .temp {
    font-size: ${u(1.14)};
    font-weight: 600;
  }

  .rain {
    color: ${({ theme }) => theme.colors.temperature};
    font-size: ${u(0.84)};
    min-height: 1em;
  }
`;

const StyledDays = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${u(0.3)};

  > div {
    display: grid;
    grid-template-columns: ${u(3)} ${u(2.4)} minmax(0, 1fr) auto auto;
    align-items: center;
    gap: ${u(0.8)};
    padding: ${u(0.2)} ${u(0.6)};
    border-radius: ${u(1)};
    background: ${({ theme }) => theme.bubble.background};
    font-size: ${u(1.08)};
  }

  .condition {
    color: ${({ theme }) => theme.text.secondary};
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  .low {
    color: ${({ theme }) => theme.text.secondary};
  }

  .high {
    font-weight: 600;
    min-width: ${u(2.6)};
    text-align: right;
  }
`;

const StyledHint = styled.p`
  color: ${({ theme }) => theme.text.secondary};
  font-size: ${u(1.08)};
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
      width={60}
    >
      <WeatherContent entityId={entityId} temperature={temperature} />
    </Popup>
  );
};

const degrees = (value: number | undefined, language: string) => (value === undefined ? '–' : `${formatNumber(value, language, 0)}°`);

const WeatherContent: React.FC<{ entityId: string; temperature: string }> = ({ entityId, temperature }) => {
  const t = useT();
  const language = useLanguage();
  const night = useIsNight();
  const weather = useEntity(entityId);
  const hourly = useForecast(entityId, 'hourly');
  const daily = useForecast(entityId, 'daily');
  const now = useTick(600_000);
  const attributes = weather?.attributes ?? {};
  const details = [
    attributes.humidity !== undefined ? `${t('humidity')} ${formatNumber(Number(attributes.humidity), language, 0)} %` : null,
    attributes.wind_speed !== undefined
      ? `${formatNumber(Number(attributes.wind_speed), language, 0)} ${attributes.wind_speed_unit ?? ''}`
      : null,
  ].filter(Boolean);

  const hours = (hourly.forecast ?? []).filter(entry => new Date(entry.datetime).getTime() > now - 3_600_000).slice(0, 12);
  const days = (daily.forecast ?? []).slice(0, 7);
  const isNightAt = (entry: ForecastEntry) => entry.is_daytime === false;

  return (
    <>
      <StyledNow>
        <WeatherIcon condition={weather?.state} night={night} size={u(6)} />
        <div>
          <div className='temperature'>{temperature}</div>
          <div className='condition'>{conditionLabel(weather?.state, language)}</div>
          {details.length > 0 && <div className='details'>{details.join(' · ')}</div>}
        </div>
      </StyledNow>

      {hours.length > 0 && (
        <>
          <StyledHeading>{t('forecast_hourly')}</StyledHeading>
          <StyledHours>
            {hours.map(entry => (
              <div key={entry.datetime}>
                <span>{formatTime(new Date(entry.datetime), language)}</span>
                <WeatherIcon condition={entry.condition} night={isNightAt(entry)} size={u(2.4)} />
                <span className='temp'>{degrees(entry.temperature, language)}</span>
                <span className='rain'>{entry.precipitation_probability ? `${entry.precipitation_probability} %` : ''}</span>
              </div>
            ))}
          </StyledHours>
        </>
      )}

      {days.length > 0 && (
        <>
          <StyledHeading>{t('forecast_daily')}</StyledHeading>
          <StyledDays>
            {days.map(entry => (
              <div key={entry.datetime}>
                <span>{formatWeekday(new Date(entry.datetime), language)}</span>
                <WeatherIcon condition={entry.condition} size={u(2.4)} />
                <span className='condition'>{conditionLabel(entry.condition, language)}</span>
                <span className='low'>{degrees(entry.templow, language)}</span>
                <span className='high'>{degrees(entry.temperature, language)}</span>
              </div>
            ))}
          </StyledDays>
        </>
      )}

      {hourly.unsupported && daily.unsupported && <StyledHint>{t('no_forecast')}</StyledHint>}
    </>
  );
};

export default WeatherPopup;
