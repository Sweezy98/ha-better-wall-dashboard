import { useState } from 'react';
import styled from 'styled-components';
import { u } from '../../../themes/default.theme';
import { pressable } from '../../../themes/interaction';
import Icon from '../icon/Icon';

const StyledAccordion = styled.section`
  display: flex;
  flex-direction: column;

  > button {
    display: flex;
    align-items: center;
    gap: ${u(0.6)};
    width: 100%;
    padding: ${u(0.6)} ${u(0.8)};
    border-radius: ${u(1)};
    text-align: left;
    font-size: ${u(1.05)};
    font-weight: 600;
    color: ${({ theme }) => theme.text.secondary};
    ${({ theme }) => pressable(theme.bubble.hover, theme.bubble.pressed)}
  }

  > button .chevron {
    font-size: ${u(1.3)};
    transition: transform 0.25s ease;
  }

  &[data-open='true'] > button .chevron {
    transform: rotate(90deg);
  }

  > button .extra {
    margin-left: auto;
    font-size: ${u(0.85)};
    font-weight: 400;
  }

  /* Opened and closed by its height, animated: a grid row from nothing to its content. */
  .fold {
    display: grid;
    grid-template-rows: 0fr;
    transition: grid-template-rows 0.3s ease;
  }

  &[data-open='true'] .fold {
    grid-template-rows: 1fr;
  }

  .fold > div {
    min-height: 0;
    overflow: hidden;
  }

  .inner {
    padding-top: ${u(0.6)};
  }
`;

interface AccordionProps {
  title: string;
  /** Beside the title, at the right: a count. */
  extra?: React.ReactNode;
  /** Its content is only there once opened: what it loads, it loads when wanted. */
  children: () => React.ReactNode;
}

/** A section that folds away, closed until wanted. */
const Accordion: React.FC<AccordionProps> = ({ title, extra, children }) => {
  const [open, setOpen] = useState(false);
  const [opened, setOpened] = useState(false);
  return (
    <StyledAccordion data-open={open}>
      <button
        type='button'
        aria-expanded={open}
        onClick={() => {
          setOpen(!open);
          setOpened(true);
        }}
      >
        <Icon className='chevron' icon='mdi:chevron-right' />
        {title}
        {extra && <span className='extra'>{extra}</span>}
      </button>
      <div className='fold'>
        <div>
          <div className='inner'>{opened && children()}</div>
        </div>
      </div>
    </StyledAccordion>
  );
};

export default Accordion;
