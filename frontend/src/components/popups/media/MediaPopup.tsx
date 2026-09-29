import { memo, useState } from 'react';
import styled, { useTheme } from 'styled-components';
import { useHass } from '@hakit/core';
import { u } from '../../../themes/default.theme';
import Popup from '../../base/popup/Popup';
import Bubble from '../../base/bubble/Bubble';
import Icon from '../../base/icon/Icon';
import { StyledFacts } from '../WeatherFacts.styled';
import MediaSources from './MediaSources';
import MediaControls from './MediaControls';
import MediaTimeline from './MediaTimeline';
import VolumeCard from './VolumeCard';
import SpeakerRoom from './SpeakerRoom';
import { domainIcon, toggleService, useCallService, useEntity, useT } from '../../../hooks/useHa';
import { useAudio, usePlayerArt, type Audio } from '../../../hooks/useMedia';
import { playerApp, playerOn, type MediaConfig, type MediaDevice, type MediaSwitch } from '../../../lib/media';
import { layoutChannels, speakerStates } from '../../../lib/speakers';

const StyledBody = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${u(1.4)};

  h3 {
    margin: 0 0 ${u(0.5)};
    font-size: ${u(1.05)};
    font-weight: 600;
    color: ${({ theme }) => theme.text.secondary};
  }

  /* Two columns where there is room, as Adaptive Cover Pro's details have them. */
  .columns {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(${u(26)}, 1fr));
    gap: ${u(1.4)};
    align-items: start;
  }

  .column {
    display: flex;
    flex-direction: column;
    gap: ${u(1.4)};
    min-width: 0;
  }

  .bubbles {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(${u(13)}, 1fr));
    gap: ${u(0.6)};
  }

  .playing {
    display: flex;
    flex-direction: column;
    gap: ${u(0.9)};
    padding: ${u(0.9)};
    border-radius: ${u(1)};
    background: ${({ theme }) => theme.bubble.background};
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
    width: ${u(4.8)};
    height: ${u(4.8)};
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
    font-size: ${u(1.25)};
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
  return (
    <Bubble
      name={item.name || (entity.attributes.friendly_name as string | undefined) || item.entity}
      state={[on ? t('on') : t('off'), on ? info : undefined].filter(Boolean).join(' · ')}
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
  return (
    <Bubble
      name={t('media_night')}
      state={text || (on ? t('on') : t('off'))}
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

const SoundFacts: React.FC<{ activeId: string | undefined; audio: Audio }> = ({ activeId, audio }) => {
  const t = useT();
  const player = useEntity(activeId);
  const facts: { icon: string; label: string; value: string | undefined }[] = [
    {
      icon: (player?.attributes.icon as string | undefined) || 'mdi:play-network',
      label: t('media_current_source'),
      value: playerApp(player) ?? (player?.attributes.friendly_name as string | undefined),
    },
    { icon: soundIcon(audio.mode), label: t('media_sound_mode'), value: audio.mode },
    { icon: 'mdi:chip', label: t('media_decoder'), value: audio.decoder },
    { icon: 'mdi:video-input-hdmi', label: t('media_input_signal'), value: audio.signal },
    { icon: 'mdi:speaker-multiple', label: t('media_source_channels'), value: audio.format },
    { icon: 'mdi:waveform', label: t('media_sample_rate'), value: audio.sampleRate },
  ];
  return (
    <StyledFacts>
      {facts
        .filter(fact => fact.value)
        .map(fact => (
          <div key={fact.label}>
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
  const title = on ? ((attributes.media_title as string | undefined) ?? playerApp(player) ?? t('media_nothing')) : t('off');
  const artist = [attributes.media_artist ?? attributes.media_series_title, attributes.media_album_name].filter(Boolean).join(' · ');
  return (
    <section>
      <h3>{t('media_now_playing')}</h3>
      <div className='playing'>
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
        <MediaTimeline entityId={on ? activeId : undefined} seekable inline />
        <MediaControls entityId={activeId} full large />
      </div>
    </section>
  );
};

const Body: React.FC<{ config: MediaConfig; activeId: string | undefined }> = ({ config, activeId }) => {
  const t = useT();
  const audio = useAudio(config.volume, config.volumeUnit, config.modeEntity, config.formatEntity);
  // The subwoofers whose outlets are off, as one text so the popup re-renders when that changes.
  const unpowered = useHass(state =>
    config.switches
      .filter(item => state.entities[item.entity]?.state === 'off')
      .flatMap(item => item.subs)
      .join(' ')
  );
  const states = config.layout ? speakerStates(config.layout, audio, unpowered.split(' ').filter(Boolean)) : {};
  const values = Object.values(states);
  const playing = values.filter(state => state === 'active').length;
  const caption = !audio.on ? (
    <span>{t('media_speakers_off')}</span>
  ) : values.length && values.every(state => state === 'unknown' || state === 'unpowered') ? (
    <span>{t('media_speakers_unknown', { mode: audio.mode ?? '–' })}</span>
  ) : (
    <>
      <strong>{audio.mode}</strong>
      <span>
        {[audio.format, t('media_speakers_summary', { active: playing, count: config.layout ? layoutChannels(config.layout).length : 0 })]
          .filter(Boolean)
          .join(' · ')}
      </span>
    </>
  );

  return (
    <StyledBody>
      <MediaSources activeId={activeId} presets={config.presets} />
      <NowPlaying activeId={activeId} />
      <div className='columns'>
        <div className='column'>
          {config.volume && <VolumeCard entityId={config.volume} volume={audio.volume} />}
          {config.night && <NightMode entityId={config.night} text={config.nightText} />}
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
        <div className='column'>
          <section>
            <h3>{t('media_system')}</h3>
            <SoundFacts activeId={activeId} audio={audio} />
          </section>
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
        </div>
      </div>
      {config.layout && (
        <section>
          <h3>{t('media_speakers')}</h3>
          <SpeakerRoom layout={config.layout} sofa={config.sofa} states={states} on={audio.on} caption={caption} />
        </section>
      )}
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
const MediaPopup: React.FC<MediaPopupProps> = ({ open, onClose, config, activeId, name }) => {
  const theme = useTheme();
  const player = useEntity(activeId);
  const subtitle = playerOn(player)
    ? [playerApp(player), player?.attributes.media_title as string | undefined].filter(Boolean).join(' · ')
    : undefined;
  return (
    <Popup open={open} onClose={onClose} title={name} subtitle={subtitle} icon='mdi:multimedia' iconColor={theme.colors.accent} width={72}>
      <Body config={config} activeId={activeId} />
    </Popup>
  );
};

export default memo(MediaPopup);
