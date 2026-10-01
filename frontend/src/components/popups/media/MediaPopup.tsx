import { memo, useState } from 'react';
import styled, { useTheme } from 'styled-components';
import { useHass } from '@hakit/core';
import { u } from '../../../themes/default.theme';
import { pressable } from '../../../themes/interaction';
import Popup from '../../base/popup/Popup';
import Bubble from '../../base/bubble/Bubble';
import Icon from '../../base/icon/Icon';
import { StyledFacts } from '../WeatherFacts.styled';
import MediaSources from './MediaSources';
import MediaControls from './MediaControls';
import MediaTimeline from './MediaTimeline';
import VolumeCard from './VolumeCard';
import SpeakerRoom from './SpeakerRoom';
import { domainIcon, toggleService, useCallService, useEntity, useLanguage, useT } from '../../../hooks/useHa';
import { useAudio, usePlayerArt, type Audio } from '../../../hooks/useMedia';
import { useImageUrl } from '../../../hooks/useBackgroundImage';
import { missingState } from '../../../lib/format';
import { formatSampleRate, playerApp, playerOn, type MediaConfig, type MediaDevice, type MediaSwitch } from '../../../lib/media';
import { SUBS, formatLayout, speakerStates } from '../../../lib/speakers';

/**
 * One screen, nothing to scroll: the inputs along the top, the audio, the
 * room and the system in three columns, and the player along the foot. The
 * room takes whatever height the rest leaves.
 */
const StyledBody = styled.div`
  flex: 1 1 auto;
  display: grid;
  grid-template-rows: auto minmax(0, 1fr) auto;
  gap: ${u(1)};
  min-height: 0;

  h3 {
    margin: 0 0 ${u(0.5)};
    font-size: ${u(1.05)};
    font-weight: 600;
    color: ${({ theme }) => theme.text.secondary};
  }

  .middle {
    display: grid;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: ${u(1.2)};
    min-height: 0;
  }

  &[data-room='true'] .middle {
    grid-template-columns: minmax(${u(20)}, 1fr) minmax(0, 2fr) minmax(${u(20)}, 1fr);
  }

  /* A column that still runs long on a short screen gives way by itself, unseen. */
  .column {
    display: flex;
    flex-direction: column;
    gap: ${u(0.9)};
    min-width: 0;
    min-height: 0;
    overflow-y: auto;
    scrollbar-width: none;
  }

  .column::-webkit-scrollbar {
    display: none;
  }

  .column > * {
    flex-shrink: 0;
  }

  /* The heading sits on its picture as the others' do on their first item:
     the column's gap is between sections, not under a heading. */
  .room {
    gap: 0;
    overflow: hidden;
  }

  .room > figure {
    flex: 1 1 auto;
  }

  .bubbles {
    display: grid;
    gap: ${u(0.6)};
  }

  .playing {
    display: grid;
    grid-template-columns: minmax(${u(18)}, 1fr) minmax(0, 3fr);
    gap: ${u(1.4)};
    align-items: center;
    padding: ${u(0.9)} ${u(1.1)};
    border-radius: ${u(1)};
    background: ${({ theme }) => theme.bubble.background};
  }

  .transport {
    display: flex;
    flex-direction: column;
    gap: ${u(0.7)};
    min-width: 0;
  }

  .now {
    display: flex;
    align-items: center;
    gap: ${u(0.9)};
    min-width: 0;
  }

  .now img,
  .now .placeholder {
    flex: none;
    width: ${u(5.6)};
    height: ${u(5.6)};
    border-radius: ${u(0.8)};
    object-fit: cover;
    background: ${({ theme }) => theme.bubble.icon};
  }

  .now .placeholder {
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: ${u(2)};
    color: ${({ theme }) => theme.text.secondary};
  }

  .now .text {
    display: flex;
    flex-direction: column;
    gap: ${u(0.15)};
    min-width: 0;
  }

  .now .text > span {
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  .now .app {
    font-size: ${u(0.85)};
    color: ${({ theme }) => theme.text.secondary};
  }

  .now .title {
    font-size: ${u(1.2)};
    font-weight: 700;
  }

  .times {
    font-size: ${u(0.9)};
  }

  .now .artist {
    font-size: ${u(0.95)};
    color: ${({ theme }) => theme.text.secondary};
  }
`;

const toggle = (callService: ReturnType<typeof useCallService>, entityId: string) => {
  const [domain, service] = toggleService(entityId);
  void callService(domain, service, undefined, { entity_id: entityId });
};

/** An outlet or a device: lit while on, a tap switching it. */
const PowerBubble: React.FC<{ item: MediaSwitch | MediaDevice; info?: string }> = ({ item, info }) => {
  const t = useT();
  const theme = useTheme();
  const entity = useEntity(item.entity || undefined);
  const callService = useCallService();
  if (!entity) return null;
  // A switch's on, or a player's any state but off.
  const on = playerOn(entity);
  const missing = missingState(entity.state);
  return (
    <Bubble
      name={item.name || (entity.attributes.friendly_name as string | undefined) || item.entity}
      state={missing ? t(missing) : [on ? t('on') : t('off'), on ? info : undefined].filter(Boolean).join(' · ')}
      icon={item.icon || (entity.attributes.icon as string | undefined) || domainIcon(item.entity)}
      iconColor={on ? theme.colors.success : undefined}
      active={on}
      lit={on}
      onClick={() => toggle(callService, item.entity)}
    />
  );
};

/** A device with what it shows: its sensor's reading, or else its own input. */
const Device: React.FC<{ device: MediaDevice }> = ({ device }) => {
  const entity = useEntity(device.entity || undefined);
  const info = useEntity(device.info || undefined);
  const shown = info && !['unknown', 'unavailable'].includes(info.state) ? info.state : playerApp(entity);
  return <PowerBubble item={device} info={shown} />;
};

const NightMode: React.FC<{ entityId: string; text: string }> = ({ entityId, text }) => {
  const t = useT();
  const theme = useTheme();
  const entity = useEntity(entityId);
  const callService = useCallService();
  if (!entity) return null;
  const on = entity.state === 'on';
  const missing = missingState(entity.state);
  return (
    <Bubble
      name={t('media_night')}
      state={missing ? t(missing) : text || (on ? t('on') : t('off'))}
      icon={(entity.attributes.icon as string | undefined) || 'mdi:weather-night'}
      iconColor={on ? theme.colors.accent : undefined}
      active={on}
      lit={on}
      onClick={() => toggle(callService, entityId)}
    />
  );
};

/** Dolby's own mark for Dolby, a surround sign for the rest. */
const soundIcon = (mode: string | undefined) =>
  /dolby/i.test(mode ?? '') ? 'mdi:dolby' : /stereo|direct/i.test(mode ?? '') ? 'mdi:surround-sound-2-0' : 'mdi:surround-sound';

const SoundFacts: React.FC<{ audio: Audio }> = ({ audio }) => {
  const t = useT();
  const language = useLanguage();
  const facts: { icon: string; label: string; value: string | undefined }[] = [
    { icon: soundIcon(audio.mode), label: t('media_sound_mode'), value: audio.mode },
    { icon: 'mdi:speaker-multiple', label: t('media_source_channels'), value: formatLayout(audio.format) },
    { icon: 'mdi:chip', label: t('media_decoder'), value: audio.decoder },
    { icon: 'mdi:video-input-hdmi', label: t('media_input_signal'), value: audio.signal },
    { icon: 'mdi:waveform', label: t('media_sample_rate'), value: formatSampleRate(audio.sampleRate, language) },
  ];
  return (
    <StyledFacts>
      {facts
        .filter(fact => fact.value)
        .map((fact, index) => (
          // The sound mode, first, the width of the column: it runs longest and matters most.
          <div key={fact.label} style={index === 0 ? { gridColumn: '1 / -1' } : undefined}>
            <Icon className='icon' icon={fact.icon} />
            <span className='label'>{fact.label}</span>
            <span className='value'>{fact.value}</span>
          </div>
        ))}
    </StyledFacts>
  );
};

const NowPlaying: React.FC<{ activeId: string | undefined }> = ({ activeId }) => {
  const t = useT();
  const player = useEntity(activeId);
  const on = playerOn(player);
  const art = usePlayerArt(on ? activeId : undefined);
  // A picture that does not load gives way to the placeholder, not a broken image.
  const [failed, setFailed] = useState<string | null>(null);
  const attributes = (player?.attributes ?? {}) as Record<string, unknown>;
  const missing = missingState(player?.state);
  const title = on
    ? ((attributes.media_title as string | undefined) ?? playerApp(player) ?? t('media_nothing'))
    : missing
      ? t(missing)
      : t('off');
  const artist = [attributes.media_artist ?? attributes.media_series_title, attributes.media_album_name].filter(Boolean).join(' · ');
  return (
    <section className='playing' aria-label={t('media_now_playing')}>
      <div className='now'>
        {art && art !== failed ? (
          <img src={art} alt='' onError={() => setFailed(art)} />
        ) : (
          <span className='placeholder'>
            <Icon icon='mdi:music' />
          </span>
        )}
        <div className='text'>
          <span className='app'>{playerApp(player) ?? (attributes.friendly_name as string | undefined)}</span>
          <span className='title'>{title}</span>
          {on && artist && <span className='artist'>{artist}</span>}
        </div>
      </div>
      <div className='transport'>
        <MediaTimeline entityId={on ? activeId : undefined} seekable inline />
        <MediaControls entityId={activeId} full large />
      </div>
    </section>
  );
};

const Body: React.FC<{ config: MediaConfig; activeId: string | undefined }> = ({ config, activeId }) => {
  const t = useT();
  const audio = useAudio(config.volume, config.volumeUnit, config.modeEntity, config.formatEntity, config.subOutput);
  // The subwoofers whose outlets are off, as one text so the popup re-renders when that changes.
  const unpowered = useHass(state =>
    config.switches
      .filter(item => state.entities[item.entity]?.state === 'off')
      .flatMap(item => item.subs)
      .join(' ')
  );
  // The receiver's own sub output switched off silences every sub, whatever powers them.
  const off = [...unpowered.split(' ').filter(Boolean), ...(audio.subOutput === false ? SUBS : [])];
  const states = config.layout ? speakerStates(config.layout, audio, off) : {};
  const tv = useEntity(config.tvEntity || undefined);
  const tvOn = config.tvEntity ? playerOn(tv) : audio.on;
  const art = usePlayerArt(config.screen === 'art' && tvOn ? activeId : undefined);
  const picture = useImageUrl(config.screen === 'image' ? config.screenImage : '', '');
  const screen = !tvOn ? undefined : config.screen === 'art' ? art : config.screen === 'image' ? picture : undefined;

  return (
    <StyledBody data-room={config.layout !== null}>
      <MediaSources activeId={activeId} presets={config.presets} />
      <div className='middle'>
        <div className='column'>
          <section>
            <h3>{t('media_audio_info')}</h3>
            <SoundFacts audio={audio} />
          </section>
          {config.volume && <VolumeCard entityId={config.volume} volume={audio.volume} />}
          {config.night && <NightMode entityId={config.night} text={config.nightText} />}
        </div>
        {config.layout && (
          <div className='column room'>
            <h3>{t('media_speakers')}</h3>
            <SpeakerRoom
              layout={config.layout}
              mounts={config.mounts}
              sofa={config.sofa}
              states={states}
              on={tvOn}
              listener={config.listener ? (config.sleeps && !audio.on && !tvOn ? 'asleep' : 'awake') : null}
              screenScale={config.screenScale}
              screenFit={config.screenFit}
              movable={config.roomMovable}
              walls={config.walls}
              screen={screen || undefined}
            />
          </div>
        )}
        <div className='column'>
          {config.devices.length > 0 && (
            <section>
              <h3>{t('media_devices')}</h3>
              <div className='bubbles'>
                {config.devices.map(device => (
                  <Device key={device.id} device={device} />
                ))}
              </div>
            </section>
          )}
          {config.switches.length > 0 && (
            <section>
              <h3>{config.switchesTitle || t('media_switches')}</h3>
              <div className='bubbles'>
                {config.switches.map(item => (
                  <PowerBubble key={item.id} item={item} />
                ))}
              </div>
            </section>
          )}
        </div>
      </div>
      <NowPlaying activeId={activeId} />
    </StyledBody>
  );
};

interface MediaPopupProps {
  open: boolean;
  onClose: () => void;
  config: MediaConfig;
  activeId: string | undefined;
  name: string;
}

/**
 * The media tile up close: what plays and where from, the presets to
 * switch to, every control the player has, the volume, the outlets and
 * devices of the system, what the receiver decodes -- and the room, each
 * speaker lit as it plays.
 */
/** The popup's own power button, beside its close: the tile's, lit while on. */
const StyledPower = styled.button`
  width: ${u(3.4)};
  height: ${u(3.4)};
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: ${u(1.6)};
  ${({ theme }) => pressable(theme.bubble.background, theme.bubble.pressed)}

  &[aria-pressed='true'] {
    color: ${({ theme }) => theme.colors.accent};
  }
`;

const PowerButton: React.FC<{ entityId: string }> = ({ entityId }) => {
  const t = useT();
  const entity = useEntity(entityId || undefined);
  const callService = useCallService();
  if (!entity) return null;
  return (
    <StyledPower
      type='button'
      aria-label={t('media_power')}
      data-tip={t('media_power')}
      aria-pressed={playerOn(entity)}
      onClick={() => toggle(callService, entityId)}
    >
      <Icon icon='mdi:power' />
    </StyledPower>
  );
};

const MediaPopup: React.FC<MediaPopupProps> = ({ open, onClose, config, activeId, name }) => {
  const theme = useTheme();
  const player = useEntity(activeId);
  const subtitle = playerOn(player)
    ? [playerApp(player), player?.attributes.media_title as string | undefined].filter(Boolean).join(' · ')
    : undefined;
  return (
    // The whole screen, and nothing scrolls: the room takes what the rest leaves.
    <Popup
      open={open}
      onClose={onClose}
      title={name}
      subtitle={subtitle}
      icon='mdi:multimedia'
      iconColor={theme.colors.accent}
      full
      fixedBody
      actions={<PowerButton entityId={config.power} />}
    >
      <Body config={config} activeId={activeId} />
    </Popup>
  );
};

export default memo(MediaPopup);
