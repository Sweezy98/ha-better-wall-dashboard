import { Fragment, memo } from 'react';
import styled from 'styled-components';
import { u } from '../../../themes/default.theme';
import type { Section as SectionConfig } from '../../../config/types';
import Icon from '../../base/icon/Icon';
import TileGrid from '../../library/TileGrid';
import { useEntity, useLanguage, usePrecision } from '../../../hooks/useHa';
import { formatMeasurement, formatRelative } from '../../../lib/format';
import { useTick } from '../../../hooks/useNow';

const StyledSection = styled.section<{ $headed: boolean }>`
  display: grid;
  grid-template-rows: ${({ $headed }) => ($headed ? `${u(2.6)} minmax(0, 1fr)` : 'minmax(0, 1fr)')};
  row-gap: ${u(0.4)};
  min-width: 0;
  min-height: 0;
`;

/** Bubble Card's separator: icon, name, a rounded rule, then the readings. */
const StyledHeader = styled.header`
  display: flex;
  align-items: center;
  min-width: 0;
  padding: 0 ${u(0.3)};

  /* One gap throughout: icon, name, rule and readings as evenly apart as
     the readings are from their dots. */
  .icon {
    font-size: ${u(1.35)};
    margin-right: ${u(0.9)};
  }

  h2 {
    margin: 0 ${u(0.9)} 0 0;
    font-size: ${u(1.2)};
    font-weight: 600;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  /* The tiles' glass, as far as a thin line can carry it: a tint a little
     stronger than theirs, their hairline edge and top highlight. */
  .line,
  .dot {
    height: ${u(0.5)};
    border-radius: ${u(0.5)};
    box-sizing: border-box;
    background: linear-gradient(to bottom, rgba(255, 255, 255, 0.09), rgba(255, 255, 255, 0.05));
    border: 1px solid rgba(255, 255, 255, 0.06);
    box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.07);
  }

  /* Kept clear of the first reading by that reading's own margin, the same
     gap as either side of a dot; without readings it runs to the end. */
  .line {
    flex: 1;
    min-width: ${u(1)};
  }

  /* Between two readings: the rule again, as a dot. */
  .dot {
    flex: none;
    width: ${u(0.5)};
    margin-left: ${u(0.9)};
  }
`;

const StyledReading = styled.span`
  display: inline-flex;
  align-items: center;
  gap: ${u(0.3)};
  font-size: ${u(0.95)};
  white-space: nowrap;
  margin-left: ${u(0.9)};
  color: ${({ theme }) => theme.text.primary};

  .reading-icon {
    font-size: ${u(0.95)};
  }
`;

/**
 * A moment -- the next alarm on a phone -- said as Home Assistant's own
 * badge says it, "In 18 hours", moved on each minute; the date itself on
 * hover. The raw state is an ISO timestamp nobody reads at a glance.
 */
const Moment: React.FC<{ iso: string }> = ({ iso }) => {
  const language = useLanguage();
  const now = useTick(60_000);
  const date = new Date(iso);
  const text = formatRelative(date, language, now);
  return (
    <span
      data-tip={date.toLocaleString(language, { weekday: 'short', day: 'numeric', month: 'short', hour: '2-digit', minute: '2-digit' })}
    >
      {text.charAt(0).toLocaleUpperCase(language) + text.slice(1)}
    </span>
  );
};

const Reading: React.FC<{ entityId: string }> = ({ entityId }) => {
  const entity = useEntity(entityId);
  const precision = usePrecision(entityId);
  const language = useLanguage();
  const deviceClass = entity?.attributes.device_class as string | undefined;
  const icon =
    (entity?.attributes.icon as string | undefined) ??
    (deviceClass === 'temperature'
      ? 'mdi:thermometer'
      : deviceClass === 'humidity'
        ? 'mdi:water'
        : deviceClass === 'timestamp'
          ? 'mdi:clock-outline'
          : 'mdi:information-outline');
  const moment = deviceClass === 'timestamp' && entity && Number.isFinite(Date.parse(entity.state));
  return (
    <StyledReading>
      <Icon className='reading-icon' icon={icon} />
      {moment ? (
        <Moment iso={entity.state} />
      ) : (
        formatMeasurement(entity?.state, entity?.attributes.unit_of_measurement as string | undefined, language, precision)
      )}
    </StyledReading>
  );
};

const Section: React.FC<{ section: SectionConfig }> = ({ section }) => {
  const headed = Boolean(section.name || section.icon || section.status.length);
  return (
    <StyledSection $headed={headed}>
      {headed && (
        <StyledHeader>
          {section.icon && <Icon className='icon' icon={section.icon} />}
          {section.name && <h2>{section.name}</h2>}
          <span className='line' />
          {section.status.map((id, index) => (
            <Fragment key={id}>
              {index > 0 && <span className='dot' />}
              <Reading entityId={id} />
            </Fragment>
          ))}
        </StyledHeader>
      )}
      <TileGrid tiles={section.tiles} columns={section.columns} rows={section.rows} square={section.square} />
    </StyledSection>
  );
};

export default memo(Section);
