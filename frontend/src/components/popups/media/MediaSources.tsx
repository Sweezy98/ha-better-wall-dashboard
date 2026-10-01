import { memo, useCallback, useState } from 'react';
import Icon from '../../base/icon/Icon';
import ChoicePopup from './ChoicePopup';
import styled, { useTheme } from 'styled-components';
import { u } from '../../../themes/default.theme';
import Bubble from '../../base/bubble/Bubble';
import { domainIcon, useCallService, useEntity, useT } from '../../../hooks/useHa';
import { brandIconSets } from '../../../lib/iconSets';
import { appIcon, playerApp, playerAppIcon, presetActive, presetCalls, type MediaPreset } from '../../../lib/media';

/** One row along the top; more presets than fit run on sideways. */
const StyledSources = styled.div`
  display: flex;
  gap: ${u(0.6)};
  overflow-x: auto;
  scrollbar-width: none;

  &::-webkit-scrollbar {
    display: none;
  }

  > * {
    flex: 1 0 ${u(12)};
    max-width: ${u(20)};
  }
`;

const Preset: React.FC<{ preset: MediaPreset }> = ({ preset }) => {
  const theme = useTheme();
  const player = useEntity(preset.entity || undefined);
  const callService = useCallService();
  const active = presetActive(preset, player);
  const name = preset.name || preset.value || (player?.attributes.friendly_name as string | undefined) || preset.entity;
  return (
    <Bubble
      name={name}
      state={(player?.attributes.friendly_name as string | undefined) ?? undefined}
      icon={
        preset.icon ||
        (preset.kind !== 'run' ? appIcon(preset.value, brandIconSets()) : undefined) ||
        (player?.attributes.icon as string | undefined) ||
        domainIcon(preset.entity || 'media_player.x')
      }
      iconColor={active ? theme.colors.accent : undefined}
      active={active}
      lit={active}
      onClick={async () => {
        if (!preset.entity) return;
        // In order: a player switched on takes a moment before it takes a source.
        for (const call of presetCalls(preset, player)) {
          await callService(call.domain, call.service, call.data, { entity_id: preset.entity });
        }
      }}
    />
  );
};

/** What plays now, then the presets that switch to something else. */
const MediaSources: React.FC<{ activeId: string | undefined; presets: MediaPreset[]; inputsOf: string }> = ({
  activeId,
  presets,
  inputsOf,
}) => {
  const t = useT();
  const theme = useTheme();
  const player = useEntity(activeId);
  const current = presets.find(preset => preset.entity === activeId && presetActive(preset, player));
  const name = playerApp(player) ?? (player?.attributes.friendly_name as string | undefined) ?? activeId ?? '';
  // Tapped, the main player's inputs -- the receiver's -- to switch to.
  const main = useEntity(inputsOf || undefined);
  const callService = useCallService();
  const [choosing, setChoosing] = useState(false);
  const close = useCallback(() => setChoosing(false), []);
  const inputs = Array.isArray(main?.attributes.source_list) ? (main.attributes.source_list as string[]) : [];
  const mainName = (main?.attributes.friendly_name as string | undefined) ?? inputsOf;
  return (
    <StyledSources>
      <Bubble
        name={current?.name || name}
        state={t('media_current_source')}
        icon={
          current?.icon || playerAppIcon(player, brandIconSets()) || (player?.attributes.icon as string | undefined) || 'mdi:play-network'
        }
        iconColor={theme.colors.accent}
        lit
        trailing={inputs.length > 0 ? <Icon icon='mdi:chevron-down' /> : undefined}
        onClick={inputs.length > 0 ? () => setChoosing(true) : undefined}
      />
      {inputs.length > 0 && (
        <ChoicePopup
          open={choosing}
          onClose={close}
          title={mainName}
          icon='mdi:import'
          options={inputs}
          current={main?.attributes.source as string | undefined}
          onChoose={source => void callService('media_player', 'select_source', { source }, { entity_id: inputsOf })}
        />
      )}
      {presets
        .filter(preset => preset !== current)
        .map(preset => (
          <Preset key={preset.id} preset={preset} />
        ))}
    </StyledSources>
  );
};

export default memo(MediaSources);
