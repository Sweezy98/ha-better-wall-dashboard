import type { Tile } from '../../config/types';
import { TAP_DOMAINS, useEntity, useT } from '../../hooks/useHa';
import { newId } from '../../lib/editing';
import {
  MAX_DEVICES,
  MAX_PRESETS,
  MAX_SWITCHES,
  PRESET_KINDS,
  SCREEN_SHOWS,
  SCREEN_FITS,
  VOLUME_UNITS,
  mediaConfig,
  type MediaDevice,
  type MediaPreset,
  type MediaSwitch,
  type PresetKind,
} from '../../lib/media';
import { BEDS, HEIGHTS, SUB_COUNTS, SUBS, layoutText, type SpeakerLayout } from '../../lib/speakers';
import { MOUNTS, SOFAS } from '../../lib/room';
import type { TranslationKey } from '../../lib/i18n';
import NamedEntityList from './screens/NamedEntityList';
import { CheckField, EntityField, EntityListField, IconField, MediaField, NumberField, SelectField, TextField } from './fields';
import { StyledField, StyledRow } from './fields.styled';

/** What a preset does with its value: the player's inputs to choose from, or an app's id to type. */
const PresetValue: React.FC<{ preset: MediaPreset; onChange: (value: string) => void }> = ({ preset, onChange }) => {
  const t = useT();
  const player = useEntity(preset.entity || undefined);
  const sources = Array.isArray(player?.attributes.source_list) ? (player.attributes.source_list as string[]) : [];
  if (preset.kind === 'run') return null;
  if (preset.kind === 'source' && sources.length) {
    return (
      <SelectField
        label={t('media_preset_value')}
        value={preset.value}
        options={[...new Set([...(preset.value ? [preset.value] : []), ...sources])].map(source => ({ value: source, label: source }))}
        onChange={onChange}
      />
    );
  }
  return (
    <TextField
      label={preset.kind === 'app' ? t('media_preset_app_id') : t('media_preset_value')}
      hint={preset.kind === 'app' ? t('media_preset_app_hint') : undefined}
      value={preset.value}
      onChange={onChange}
    />
  );
};

const NO_LAYOUT: SpeakerLayout = { bed: 7, subs: 2, heights: 4 };

/**
 * A media tile's options (see mediaConfig): the players behind it, what its
 * buttons switch, the details' presets, outlets and devices, and the room.
 */
const MediaOptions: React.FC<{ tile: Tile; onChange: (options: Record<string, unknown>) => void }> = ({ tile, onChange }) => {
  const t = useT();
  const config = mediaConfig(tile.entity, tile.options);
  const set = (patch: Record<string, unknown>) => onChange({ ...tile.options, ...patch });
  const layout = config.layout ?? NO_LAYOUT;
  const setLayout = (patch: Partial<SpeakerLayout>) => set({ speakers: layoutText({ ...layout, ...patch }) });
  const numbers = (values: number[]) => values.map(value => ({ value: String(value), label: String(value) }));

  return (
    <>
      <EntityListField
        label={t('media_players')}
        hint={t('media_players_hint')}
        domains={['media_player']}
        max={6}
        value={config.players.filter(id => id !== tile.entity)}
        onChange={players => set({ players })}
      />
      <StyledRow>
        <EntityField
          label={t('media_power_entity')}
          hint={t('media_power_entity_hint')}
          domains={TAP_DOMAINS}
          value={typeof tile.options.power === 'string' ? tile.options.power : ''}
          onChange={power => set({ power })}
        />
        <EntityField
          label={t('media_volume_entity')}
          hint={t('media_volume_entity_hint')}
          domains={['media_player']}
          value={typeof tile.options.volume === 'string' ? tile.options.volume : ''}
          onChange={volume => set({ volume })}
        />
      </StyledRow>
      <SelectField
        label={t('media_volume_unit')}
        value={config.volumeUnit}
        options={VOLUME_UNITS.map(unit => ({ value: unit, label: t(`media_volume_${unit}`) }))}
        onChange={volume_unit => set({ volume_unit })}
      />

      <StyledField as='div'>
        <span className='label'>{t('media_presets')}</span>
        <small>{t('media_presets_hint')}</small>
      </StyledField>
      <NamedEntityList<MediaPreset>
        items={config.presets}
        max={MAX_PRESETS}
        domains={['media_player', 'script', 'scene', 'button', 'input_button']}
        addLabel={t('add_media_preset')}
        create={() => ({ id: newId(), entity: '', name: '', icon: '', kind: 'source', value: '' })}
        extra={(preset, patch) => (
          <>
            <SelectField
              label={t('media_preset_kind')}
              value={preset.kind}
              options={PRESET_KINDS.map(kind => ({ value: kind, label: t(`media_preset_${kind}`) }))}
              onChange={kind => patch({ kind: kind as PresetKind, value: '' })}
            />
            <PresetValue preset={preset} onChange={value => patch({ value })} />
          </>
        )}
        onChange={presets => set({ presets })}
      />

      <StyledField as='div'>
        <span className='label'>{t('media_switches')}</span>
        <small>{t('media_switches_hint')}</small>
      </StyledField>
      <TextField label={t('media_switches_title')} value={config.switchesTitle} onChange={switches_title => set({ switches_title })} />
      <NamedEntityList<MediaSwitch>
        items={config.switches}
        max={MAX_SWITCHES}
        domains={['switch', 'input_boolean', 'light']}
        addLabel={t('add_media_switch')}
        create={() => ({ id: newId(), entity: '', name: '', icon: '', subs: [] })}
        extra={(item, patch) =>
          config.layout && config.layout.subs > 0 ? (
            <StyledField as='div'>
              <span className='label'>{t('media_switch_subs')}</span>
              <small>{t('media_switch_subs_hint')}</small>
              {SUBS.slice(0, config.layout.subs).map(sub => (
                <CheckField
                  key={sub}
                  label={t(`speaker_${sub}` as TranslationKey)}
                  value={item.subs.includes(sub)}
                  onChange={on => patch({ subs: on ? [...item.subs, sub] : item.subs.filter(other => other !== sub) })}
                />
              ))}
            </StyledField>
          ) : null
        }
        onChange={switches => set({ switches })}
      />

      <StyledField as='div'>
        <span className='label'>{t('media_devices')}</span>
        <small>{t('media_devices_hint')}</small>
      </StyledField>
      <NamedEntityList<MediaDevice>
        items={config.devices}
        max={MAX_DEVICES}
        domains={['media_player', 'remote', 'switch']}
        addLabel={t('add_media_device')}
        create={() => ({ id: newId(), entity: '', name: '', icon: '', info: '' })}
        extra={(device, patch) => (
          <EntityField
            label={t('media_device_info')}
            hint={t('media_device_info_hint')}
            domains={['sensor', 'input_text', 'select']}
            value={device.info}
            onChange={info => patch({ info })}
          />
        )}
        onChange={devices => set({ devices })}
      />

      <StyledField as='div'>
        <span className='label'>{t('media_extra')}</span>
        <small>{t('media_extra_hint')}</small>
      </StyledField>
      <EntityField
        label={t('entity')}
        domains={['switch', 'input_boolean', 'light', 'fan', 'script', 'scene', 'button', 'input_button', 'automation']}
        value={config.extra.entity}
        onChange={extra_entity => set({ extra_entity })}
      />
      {config.extra.entity && (
        <StyledRow>
          <TextField label={t('name')} hint={t('name_hint')} value={config.extra.name} onChange={extra_name => set({ extra_name })} />
          <IconField label={t('icon')} value={config.extra.icon} onChange={extra_icon => set({ extra_icon })} />
        </StyledRow>
      )}

      <EntityField
        label={t('media_night_entity')}
        hint={t('media_night_entity_hint')}
        domains={['switch', 'input_boolean', 'script']}
        value={config.night}
        onChange={night => set({ night })}
      />
      <TextField label={t('media_night_text')} value={config.nightText} onChange={night_text => set({ night_text })} />

      <StyledField as='div'>
        <span className='label'>{t('media_sound_heading')}</span>
      </StyledField>
      <StyledRow>
        <EntityField
          label={t('media_mode_entity')}
          hint={t('media_mode_entity_hint')}
          domains={['sensor', 'select', 'input_text']}
          value={config.modeEntity}
          onChange={mode_entity => set({ mode_entity })}
        />
        <EntityField
          label={t('media_format_entity')}
          hint={t('media_format_entity_hint')}
          domains={['sensor', 'input_text']}
          value={config.formatEntity}
          onChange={format_entity => set({ format_entity })}
        />
      </StyledRow>

      <CheckField
        label={t('media_layout')}
        hint={t('media_layout_hint')}
        value={config.layout !== null}
        onChange={shown => set({ speakers: shown ? layoutText(layout) : '' })}
      />
      {config.layout && (
        <>
          <StyledRow>
            <SelectField
              label={t('media_layout_bed')}
              value={String(layout.bed)}
              options={numbers(BEDS)}
              onChange={bed => setLayout({ bed: Number(bed) })}
            />
            <SelectField
              label={t('media_layout_subs')}
              value={String(layout.subs)}
              options={numbers(SUB_COUNTS)}
              onChange={subs => setLayout({ subs: Number(subs) })}
            />
            <SelectField
              label={t('media_layout_heights')}
              value={String(layout.heights)}
              options={numbers(HEIGHTS)}
              onChange={heights => setLayout({ heights: Number(heights) })}
            />
          </StyledRow>
          {layout.heights > 0 && (
            <StyledRow>
              <SelectField
                label={t('media_heights_front')}
                value={config.mounts.front}
                options={MOUNTS.map(mount => ({ value: mount, label: t(`media_mount_${mount}`) }))}
                onChange={heights_front => set({ heights_front })}
              />
              {layout.heights >= 4 && (
                <SelectField
                  label={t('media_heights_rear')}
                  value={config.mounts.rear}
                  options={MOUNTS.map(mount => ({ value: mount, label: t(`media_mount_${mount}`) }))}
                  onChange={heights_rear => set({ heights_rear })}
                />
              )}
            </StyledRow>
          )}
          {layout.subs > 0 && (
            <EntityField
              label={t('media_sub_output')}
              hint={t('media_sub_output_hint')}
              domains={['switch', 'binary_sensor', 'input_boolean']}
              value={config.subOutput}
              onChange={sub_output => set({ sub_output })}
            />
          )}
          <SelectField
            label={t('media_sofa')}
            value={config.sofa}
            options={SOFAS.map(sofa => ({ value: sofa, label: t(`media_sofa_${sofa}`) }))}
            onChange={sofa => set({ sofa })}
          />
          <CheckField
            label={t('media_listener')}
            hint={t('media_listener_hint')}
            value={config.listener}
            onChange={listener => set({ listener })}
          />
          {config.listener && config.sofa !== 'none' && (
            <CheckField
              label={t('media_listener_sleeps')}
              hint={t('media_listener_sleeps_hint')}
              value={config.sleeps}
              onChange={listener_sleeps => set({ listener_sleeps })}
            />
          )}
          <EntityField
            label={t('media_tv_entity')}
            hint={t('media_tv_entity_hint')}
            domains={['media_player', 'switch', 'binary_sensor', 'remote']}
            value={config.tvEntity}
            onChange={tv_entity => set({ tv_entity })}
          />
          <SelectField
            label={t('media_screen')}
            value={config.screen}
            options={SCREEN_SHOWS.map(shows => ({ value: shows, label: t(`media_screen_${shows}`) }))}
            onChange={screen => set({ screen })}
          />
          {config.screen === 'image' && (
            <MediaField
              label={t('media_screen_picture')}
              hint={t('media_screen_picture_hint')}
              accept={['image/*']}
              value={config.screenImage}
              onChange={screen_image => set({ screen_image })}
            />
          )}
          {config.screen !== 'off' && (
            <StyledRow>
              <NumberField
                label={t('media_screen_scale')}
                hint={t('media_screen_scale_hint')}
                value={config.screenScale}
                min={30}
                max={100}
                unit='%'
                onChange={screen_scale => set({ screen_scale: Math.max(30, Math.min(100, screen_scale)) })}
              />
              <SelectField
                label={t('media_screen_fit')}
                value={config.screenFit}
                options={SCREEN_FITS.map(fit => ({ value: fit, label: t(`media_screen_fit_${fit}`) }))}
                onChange={screen_fit => set({ screen_fit })}
              />
            </StyledRow>
          )}
          <CheckField label={t('media_walls')} value={config.walls} onChange={walls => set({ hide_walls: !walls })} />
          <CheckField
            label={t('media_room_movable')}
            hint={t('media_room_movable_hint')}
            value={config.roomMovable}
            onChange={room_movable => set({ room_movable })}
          />
        </>
      )}
    </>
  );
};

export default MediaOptions;
