import { useT } from '../../../hooks/useHa';
import { RangeField, TextField } from '../fields';
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
      </StyledFieldset>
      <StyledFieldset>
        <h3>{t('background')}</h3>
        <TextField
          label={t('background_image')}
          hint={t('background_image_hint')}
          value={draft.background.image}
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
