import { memo } from 'react';
import styled from 'styled-components';
import { u } from '../../../themes/default.theme';
import Bubble from '../../base/bubble/Bubble';
import { useEntity, useHassUrl, useT } from '../../../hooks/useHa';

/**
 * Two to a row; an odd one out takes the whole row. One person is full width,
 * a second halves the first, a third starts a new full-width line.
 */
const StyledPersons = styled.div`
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: ${u(0.6)};

  > :last-child:nth-child(odd) {
    grid-column: 1 / -1;
  }
`;

const Person: React.FC<{ entityId: string }> = ({ entityId }) => {
  const entity = useEntity(entityId);
  const joinHassUrl = useHassUrl();
  const t = useT();
  if (!entity) return <Bubble name={entityId} state={t('not_found')} icon='mdi:account-question' active={false} />;
  const picture = entity.attributes.entity_picture as string | undefined;
  // A person's state is "home", "not_home", or the name of the zone they are
  // in ("Work"), which is already the zone's own friendly name.
  const state =
    entity.state === 'home'
      ? t('home')
      : entity.state === 'not_home'
        ? t('away')
        : entity.state === 'unknown' || entity.state === 'unavailable'
          ? t('unavailable')
          : entity.state;
  return (
    <Bubble
      name={(entity.attributes.friendly_name as string) || entityId}
      state={state}
      picture={picture ? joinHassUrl(picture) : undefined}
      icon='mdi:account'
      active={entity.state === 'home'}
    />
  );
};

const Persons: React.FC<{ entities: string[] }> = ({ entities }) => {
  if (!entities.length) return null;
  return (
    <StyledPersons>
      {entities.map(id => (
        <Person key={id} entityId={id} />
      ))}
    </StyledPersons>
  );
};

export default memo(Persons);
