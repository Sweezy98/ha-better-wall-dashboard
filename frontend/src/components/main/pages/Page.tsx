import { memo } from 'react';
import styled from 'styled-components';
import { u } from '../../../themes/default.theme';
import type { Page as PageConfig } from '../../../config/types';
import Section from '../sections/Section';

/**
 * A page is a grid of sections: by default 75/25 across and 50/50 down.
 *
 * The splits are `fr`, not percentages, so the gap between sections comes out
 * of the tracks instead of pushing the last one off the edge.
 */
const StyledPage = styled.div<{ $columns: string; $rows: string }>`
  display: grid;
  grid-template-columns: ${({ $columns }) => $columns};
  grid-template-rows: ${({ $rows }) => $rows};
  gap: ${u(0.9)};
  min-width: 0;
  min-height: 0;
  overflow: hidden;
  padding: 0 ${u(0.1)};
`;

const tracks = (split: number[]) => split.map(value => `minmax(0, ${value}fr)`).join(' ');

const Page: React.FC<{ page: PageConfig }> = ({ page }) => (
  <StyledPage $columns={tracks(page.columns)} $rows={tracks(page.rows)}>
    {page.sections.map(section => (
      <Section key={section.id} section={section} />
    ))}
  </StyledPage>
);

export default memo(Page);
