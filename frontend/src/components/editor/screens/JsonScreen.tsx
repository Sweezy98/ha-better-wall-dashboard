import { useState } from 'react';
import styled from 'styled-components';
import type { Dashboard } from '../../../config/types';
import { useT } from '../../../hooks/useHa';
import HaButton from '../ha/HaButton';
import { ScreenTitle, type ScreenProps } from './common';

const StyledJson = styled.textarea`
  min-height: 55vh;
  padding: 12px;
  border-radius: 8px;
  border: 1px solid var(--divider-color, rgba(225, 225, 225, 0.12));
  background: var(--code-editor-background-color, var(--secondary-background-color, #282828));
  color: inherit;
  font-family: var(--ha-font-family-code, ui-monospace, monospace);
  font-size: 13px;
  resize: vertical;
`;

const StyledError = styled.p`
  margin: 0;
  color: var(--error-color, #db4437);
`;

/**
 * The whole dashboard as stored, for what the screens do not reach and for
 * copying a dashboard between houses. A snapshot taken when it is opened, so
 * typing into it is not overwritten by the draft it is about to replace.
 */
const JsonScreen: React.FC<ScreenProps> = ({ draft, update }) => {
  const t = useT();
  const [text, setText] = useState(() => JSON.stringify(draft, null, 2));
  const [invalid, setInvalid] = useState(false);
  return (
    <>
      <ScreenTitle title={t('tab_json')} lead={t('json_hint')} />
      <StyledJson
        value={text}
        spellCheck={false}
        onChange={event => {
          setText(event.target.value);
          setInvalid(false);
        }}
      />
      {invalid && <StyledError>{t('json_invalid')}</StyledError>}
      <div>
        <HaButton
          icon='mdi:check'
          appearance='filled'
          onClick={() => {
            try {
              const parsed = JSON.parse(text) as Dashboard;
              update({ ...parsed, id: draft.id });
            } catch {
              setInvalid(true);
            }
          }}
        >
          {t('apply')}
        </HaButton>
      </div>
    </>
  );
};

export default JsonScreen;
