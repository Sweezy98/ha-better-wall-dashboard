import styled from 'styled-components';
import { u } from '../../themes/default.theme';
import type { Page, Section as SectionConfig } from '../../config/types';
import { LIMITS } from '../../config/types';
import { useT } from '../../hooks/useHa';
import Icon from '../base/icon/Icon';
import SectionView from '../main/sections/Section';
import TileListEditor from './TileListEditor';
import { CheckField, EntityListField, IconField, ListControls, NumberField, TextField } from './fields';
import { StyledGroup, StyledRow, StyledSmallButton } from './fields.styled';
import { move, newId } from '../../lib/editing';

/** The section as the tablet will draw it, at the size it will have there. */
const StyledPreview = styled.div`
  height: ${u(16)};
  padding: ${u(0.6)};
  border-radius: ${u(1)};
  background: rgba(0, 0, 0, 0.3);
`;

const parseSplit = (text: string): number[] | null => {
  const values = text
    .split(/[,/ ]+/)
    .filter(Boolean)
    .map(Number);
  return values.length && values.length <= 3 && values.every(value => Number.isFinite(value) && value > 0) ? values : null;
};

const emptySection = (): SectionConfig => ({ id: newId(), name: '', icon: '', status: [], columns: 2, rows: 2, square: true, tiles: [] });

const SplitField: React.FC<{ label: string; value: number[]; onChange: (value: number[]) => void }> = ({ label, value, onChange }) => (
  <TextField
    label={label}
    value={value.join(', ')}
    onChange={text => {
      const parsed = parseSplit(text);
      if (parsed) onChange(parsed);
    }}
  />
);

const SectionForm: React.FC<{ section: SectionConfig; onChange: (section: SectionConfig) => void }> = ({ section, onChange }) => {
  const t = useT();
  const set = (patch: Partial<SectionConfig>) => onChange({ ...section, ...patch });
  return (
    <>
      <StyledRow>
        <TextField label={t('name')} value={section.name} onChange={name => set({ name })} />
        <IconField label={t('icon')} value={section.icon} onChange={icon => set({ icon })} />
        <NumberField
          label={t('columns')}
          value={section.columns}
          min={1}
          max={LIMITS.sectionCells}
          onChange={columns => set({ columns })}
        />
        <NumberField label={t('rows')} value={section.rows} min={1} max={LIMITS.sectionCells} onChange={rows => set({ rows })} />
        <CheckField label={t('square_cells')} value={section.square} onChange={square => set({ square })} />
      </StyledRow>
      <EntityListField
        label={t('status_entities')}
        value={section.status}
        max={LIMITS.sectionStatus}
        domains={['sensor', 'binary_sensor']}
        onChange={status => set({ status })}
      />
      <TileListEditor tiles={section.tiles} columns={section.columns} rows={section.rows} onChange={tiles => set({ tiles })} />
      <StyledPreview>
        <SectionView section={section} />
      </StyledPreview>
    </>
  );
};

const PagesForm: React.FC<{ pages: Page[]; onChange: (pages: Page[]) => void }> = ({ pages, onChange }) => {
  const t = useT();
  const setPage = (index: number, patch: Partial<Page>) => onChange(pages.map((page, i) => (i === index ? { ...page, ...patch } : page)));
  return (
    <>
      {pages.map((page, index) => {
        const cells = page.columns.length * page.rows.length;
        const sections = Array.from({ length: cells }, (_, cell) => page.sections[cell]);
        return (
          <StyledGroup key={page.id}>
            <legend>
              {t('page')} {index + 1}
            </legend>
            <StyledRow $columns='minmax(0, 1fr) minmax(0, 1fr) auto'>
              <SplitField label={t('column_split')} value={page.columns} onChange={columns => setPage(index, { columns })} />
              <SplitField label={t('row_split')} value={page.rows} onChange={rows => setPage(index, { rows })} />
              <ListControls
                index={index}
                length={pages.length}
                onMove={to => onChange(move(pages, index, to))}
                onRemove={() => pages.length > 1 && onChange(pages.filter((_, i) => i !== index))}
              />
            </StyledRow>
            {sections.map((section, cell) => (
              <StyledGroup key={section?.id ?? `empty-${cell}`}>
                <legend>
                  {t('section')} {cell + 1}
                </legend>
                {section ? (
                  <SectionForm
                    section={section}
                    onChange={next => {
                      const list = [...page.sections];
                      list[cell] = next;
                      setPage(index, { sections: list });
                    }}
                  />
                ) : (
                  <div>
                    <StyledSmallButton
                      type='button'
                      onClick={() => {
                        // Sections fill cells in order, so an empty cell
                        // before this one gets an empty section too.
                        const list = [...page.sections];
                        while (list.length <= cell) list.push(emptySection());
                        setPage(index, { sections: list });
                      }}
                    >
                      <Icon icon='mdi:plus' /> {t('add')}
                    </StyledSmallButton>
                  </div>
                )}
              </StyledGroup>
            ))}
          </StyledGroup>
        );
      })}
      <div>
        <StyledSmallButton
          type='button'
          disabled={pages.length >= LIMITS.pages}
          onClick={() => onChange([...pages, { id: newId(), columns: [75, 25], rows: [50, 50], sections: [] }])}
        >
          <Icon icon='mdi:plus' /> {t('add_page')}
        </StyledSmallButton>
      </div>
    </>
  );
};

export default PagesForm;
