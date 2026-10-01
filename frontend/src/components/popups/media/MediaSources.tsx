import { memo } from 'react';
import styled, { useTheme } from 'styled-components';
import { u } from '../../../themes/default.theme';
import Bubble from '../../base/bubble/Bubble';
import { domainIcon, useCallService, useEntity, useT } from '../../../hooks/useHa';
import { hasIconSet } from '../../../lib/iconSets';
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
        (preset.kind !== 'run' ? appIcon(preset.value, hasIconSet('si')) : undefined) ||
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
const MediaSources: React.FC<{ activeId: string | undefined; presets: MediaPreset[] }> = ({ activeId, presets }) => {
  const t = useT();
  const theme = useTheme();
  const player = useEntity(activeId);
  const current = presets.find(preset => preset.entity === activeId && presetActive(preset, player));
  const name = playerApp(player) ?? (player?.attributes.friendly_name as string | undefined) ?? activeId ?? '';
  return (
    <StyledSources>
      <Bubble
        name={current?.name || name}
        state={t('media_current_source')}
        icon={
          current?.icon || playerAppIcon(player, hasIconSet('si')) || (player?.attributes.icon as string | undefined) || 'mdi:play-network'
        }
        iconColor={theme.colors.accent}
        lit
      />
      {presets
        .filter(preset => preset !== current)
        .map(preset => (
          <Preset key={preset.id} preset={preset} />
        ))}
    </StyledSources>
  );
};

export default memo(MediaSources);
