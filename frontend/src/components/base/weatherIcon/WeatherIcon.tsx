import { memo } from 'react';
import styled from 'styled-components';
import { weatherIconUrl } from '../../../lib/weather';

const StyledWeatherIcon = styled.img<{ $size: string }>`
  width: ${({ $size }) => $size};
  height: ${({ $size }) => $size};
  flex-shrink: 0;
  display: block;
`;

/**
 * The same image under an address of its own. The build inlines the small
 * icons as data URIs, where a query would break the image: those get a
 * comment added to the SVG instead, which draws nothing.
 */
function apart(url: string, timeline: string): string {
  const comment = `<!-- ${timeline} -->`;
  if (url.startsWith('data:image/svg+xml;base64,')) {
    return `data:image/svg+xml;base64,${btoa(atob(url.slice('data:image/svg+xml;base64,'.length)) + comment)}`;
  }
  if (url.startsWith('data:image/svg+xml,')) return `${url}${encodeURIComponent(comment)}`;
  return `${url}${url.includes('?') ? '&' : '?'}timeline=${encodeURIComponent(timeline)}`;
}

/**
 * An animated Meteocon for a Home Assistant weather condition.
 *
 * Chrome runs one animation per image file for every <img> showing it, and
 * a new one restarts it for all: opening the weather popup made the
 * sidebar's icon jump back to its first frame. `timeline` gives a group of
 * icons an address of their own -- the same file, a query apart -- and so a
 * clock of their own.
 */
const WeatherIcon: React.FC<{ condition?: string; night?: boolean; size: string; timeline?: string }> = ({
  condition,
  night = false,
  size,
  timeline,
}) => {
  const url = weatherIconUrl(condition, night);
  const src = url && timeline ? apart(url, timeline) : url;
  return src ? <StyledWeatherIcon src={src} alt='' $size={size} draggable={false} /> : null;
};

export default memo(WeatherIcon);
