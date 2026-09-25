import type { Tile } from '../../config/types';
import { useEntity, useT } from '../../hooks/useHa';
import { useRoomSelect } from '../../hooks/useBetterLighting';
import { CheckField, EntityField, IconField } from './fields';
import { StyledField, StyledRow } from './fields.styled';

/** A Better Lighting room tile's options: which scenes it lists, and one more button. */
const BetterLightingOptions: React.FC<{ tile: Tile; onChange: (options: Record<string, unknown>) => void }> = ({ tile, onChange }) => {
  const t = useT();
  const select = useEntity(useRoomSelect(tile.entity || undefined));
  const scenes = (select?.attributes.options as string[] | undefined) ?? [];
  const hidden = Array.isArray(tile.options.hidden_scenes) ? (tile.options.hidden_scenes as string[]) : [];
  const set = (patch: Record<string, unknown>) => onChange({ ...tile.options, ...patch });
  return (
    <>
      {scenes.length > 0 && (
        <StyledField as='div'>
          <span className='label'>{t('bl_shown_scenes')}</span>
          <small>{t('bl_shown_scenes_hint')}</small>
          {scenes.map(scene => (
            <CheckField
              key={scene}
              label={scene}
              value={!hidden.includes(scene)}
              onChange={shown =>
                set({
                  hidden_scenes: shown ? hidden.filter(name => name !== scene) : [...hidden.filter(name => scenes.includes(name)), scene],
                })
              }
            />
          ))}
        </StyledField>
      )}
      <StyledRow>
        <EntityField
          label={t('bl_button_entity')}
          hint={t('bl_button_entity_hint')}
          value={typeof tile.options.button_entity === 'string' ? tile.options.button_entity : ''}
          onChange={button_entity => set({ button_entity })}
        />
        <IconField
          label={t('bl_button_icon')}
          value={typeof tile.options.button_icon === 'string' ? tile.options.button_icon : ''}
          onChange={button_icon => set({ button_icon })}
        />
      </StyledRow>
    </>
  );
};

export default BetterLightingOptions;
