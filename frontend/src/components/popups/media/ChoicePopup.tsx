import { memo } from 'react';
import styled, { useTheme } from 'styled-components';
import { u } from '../../../themes/default.theme';
import Popup from '../../base/popup/Popup';
import Bubble from '../../base/bubble/Bubble';
import Icon from '../../base/icon/Icon';

/** The choices, as the Better Lighting tile lists its scenes. */
const StyledChoices = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(${u(14)}, 1fr));
  gap: ${u(0.6)};
`;

interface ChoicePopupProps {
  open: boolean;
  onClose: () => void;
  title: string;
  icon: string;
  options: string[];
  current: string | undefined;
  onChoose: (option: string) => void;
}

/** The dashboard's own dropdown: the choices as bubbles, the current one ticked. */
const ChoicePopup: React.FC<ChoicePopupProps> = ({ open, onClose, title, icon, options, current, onChoose }) => {
  const theme = useTheme();
  return (
    <Popup open={open} onClose={onClose} title={title} icon={icon} width={40}>
      <StyledChoices>
        {options.map(option => (
          <Bubble
            key={option}
            name={option}
            icon={icon}
            active={option === current}
            iconColor={option === current ? theme.colors.accent : undefined}
            trailing={option === current ? <Icon icon='mdi:check' color={theme.colors.accent} /> : undefined}
            onClick={() => {
              if (option !== current) onChoose(option);
              onClose();
            }}
          />
        ))}
      </StyledChoices>
    </Popup>
  );
};

export default memo(ChoicePopup);
