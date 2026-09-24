import { memo } from 'react';
import styled from 'styled-components';
import { weatherIconUrl } from '../../../lib/weather';

const StyledWeatherIcon = styled.img<{ $size: string }>`
  width: ${({ $size }) => $size};
  height: ${({ $size }) => $size};
  flex-shrink: 0;
  display: block;
`;

/** An animated Meteocon for a Home Assistant weather condition. */
const WeatherIcon: React.FC<{ condition?: string; night?: boolean; size: string }> = ({ condition, night = false, size }) => {
  const src = weatherIconUrl(condition, night);
  return src ? <StyledWeatherIcon src={src} alt='' $size={size} draggable={false} /> : null;
};

export default memo(WeatherIcon);
