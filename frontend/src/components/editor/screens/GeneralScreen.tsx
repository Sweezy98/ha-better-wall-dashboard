import { useT } from '../../../hooks/useHa';
import { ColorField, MediaField, RangeField, SelectField, TextField } from '../fields';
import { StyledRow } from '../fields.styled';
import { StyledFieldset } from '../editor.styled';
import { ScreenTitle, type ScreenProps } from './common';

/** The dashboard as a whole: its name, its background and the PIN guarding the tablet. */
const GeneralScreen: React.FC<ScreenProps> = ({ draft, update }) => {
  const t = useT();
  const background = (patch: Partial<typeof draft.background>) => update({ ...draft, background: { ...draft.background, ...patch } });
  return (
    <>
      <ScreenTitle title={t('tab_general')} lead={t('lead_general')} />
      <StyledFieldset>
        <TextField label={t('name')} value={draft.name} onChange={name => update({ ...draft, name })} />
        <SelectField
          label={t('popup_close')}
          hint={t('popup_close_hint')}
          value={String(draft.popup_close_minutes ?? 2)}
          options={[0, 1, 2, 5, 10, 30].map(minutes => ({
            value: String(minutes),
            label: minutes ? t('popup_close_after', { minutes }) : t('popup_close_never'),
          }))}
          onChange={minutes => update({ ...draft, popup_close_minutes: Number(minutes) })}
        />
      </StyledFieldset>
      <StyledFieldset>
        <h3>{t('background')}</h3>
        <SelectField
          label={t('background_mode')}
          value={draft.background.mode ?? 'image'}
          options={[
            { value: 'image', label: t('background_mode_image') },
            { value: 'color', label: t('background_mode_color') },
          ]}
          onChange={mode => background({ mode: mode === 'color' ? 'color' : 'image' })}
        />
        {draft.background.mode === 'color' ? (
          <ColorField label={t('background_color')} value={draft.background.color ?? '#131313'} onChange={color => background({ color })} />
        ) : (
          <>
            <MediaField
              label={t('background_media')}
              hint={t('background_media_hint')}
              accept={['image/*']}
              value={draft.background.image}
              onChange={image => background({ image })}
            />
            {/* Or an address of its own; a picture from the library is not one. */}
            <TextField
              label={t('background_image')}
              hint={t('background_image_hint')}
              type='url'
              value={draft.background.image.startsWith('media-source://') ? '' : draft.background.image}
              onChange={image => background({ image })}
            />
            <StyledRow>
              <RangeField
                label={t('background_dim')}
                value={draft.background.dim}
                min={0}
                max={95}
                step={5}
                unit='%'
                scale={100}
                onChange={dim => background({ dim })}
              />
              <RangeField
                label={t('background_blur')}
                value={draft.background.blur}
                min={0}
                max={40}
                step={1}
                unit='px'
                onChange={blur => background({ blur })}
              />
            </StyledRow>
          </>
        )}
      </StyledFieldset>
      <StyledFieldset>
        <h3>{t('security_heading')}</h3>
        <TextField
          label={t('pin')}
          hint={t('pin_hint')}
          type='password'
          value={draft.pin ?? ''}
          onChange={pin => update({ ...draft, pin: pin.replace(/\D/g, '').slice(0, 8) })}
        />
      </StyledFieldset>
    </>
  );
};

export default GeneralScreen;
