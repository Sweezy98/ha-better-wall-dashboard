import type { Page, Section } from '../../../config/types';
import { LIMITS } from '../../../config/types';
import { useT } from '../../../hooks/useHa';
import { copyOf, move, newId, replaceAt } from '../../../lib/editing';
import Icon from '../../base/icon/Icon';
import HaButton from '../ha/HaButton';
import TileListEditor from '../TileListEditor';
import { CheckField, EntityListField, IconField, ListControls, NumberField, TextField } from '../fields';
import { StyledRow } from '../fields.styled';
import { StyledFieldset, StyledList } from '../editor.styled';
import { ScreenTitle, type ScreenProps } from './common';

const emptySection = (): Section => ({ id: newId(), name: '', icon: '', status: [], columns: 2, rows: 2, square: true, tiles: [] });

const emptyPage = (): Page => ({ id: newId(), columns: [75, 25], rows: [50, 50], sections: [] });

/** A page and its sections given fresh ids, so a duplicate shares nothing with its original. */
const duplicatePage = (page: Page): Page => ({
  ...copyOf(page),
  id: newId(),
  sections: page.sections.map(section => ({
    ...copyOf(section),
    id: newId(),
    tiles: section.tiles.map(tile => ({ ...tile, id: newId() })),
  })),
});

const parseSplit = (text: string): number[] | null => {
  const values = text
    .split(/[,/ ]+/)
    .filter(Boolean)
    .map(Number);
  return values.length && values.length <= 3 && values.every(value => Number.isFinite(value) && value > 0) ? values : null;
};

const SplitField: React.FC<{ label: string; hint: string; value: number[]; onChange: (value: number[]) => void }> = ({
  label,
  hint,
  value,
  onChange,
}) => (
  <TextField
    label={label}
    hint={hint}
    value={value.join(', ')}
    onChange={text => {
      const parsed = parseSplit(text);
      if (parsed) onChange(parsed);
    }}
  />
);

/** Every page, in the order they swipe. */
export const PagesScreen: React.FC<ScreenProps> = ({ draft, update, open }) => {
  const t = useT();
  const pages = draft.pages;
  const set = (next: Page[]) => update({ ...draft, pages: next });
  return (
    <>
      <ScreenTitle title={t('tab_pages')} lead={t('lead_pages')} />
      <StyledList>
        {pages.map((page, index) => (
          <li key={page.id}>
            <button type='button' className='open' onClick={() => open({ kind: 'page', page: index })}>
              <Icon className='icon' icon='mdi:book-open-page-variant-outline' />
              <span className='text'>
                <span>{t('page_n', { n: index + 1 })}</span>
                <span className='secondary'>
                  {page.sections
                    .map(section => section.name)
                    .filter(Boolean)
                    .join(' · ') || t('no_sections')}
                </span>
              </span>
            </button>
            <ListControls
              index={index}
              length={pages.length}
              onMove={to => set(move(pages, index, to))}
              onDuplicate={
                pages.length < LIMITS.pages
                  ? () => set([...pages.slice(0, index + 1), duplicatePage(page), ...pages.slice(index + 1)])
                  : undefined
              }
              onRemove={() => pages.length > 1 && set(pages.filter((_, i) => i !== index))}
            />
          </li>
        ))}
      </StyledList>
      <div>
        <HaButton
          icon='mdi:plus'
          appearance='filled'
          disabled={pages.length >= LIMITS.pages}
          onClick={() => {
            set([...pages, emptyPage()]);
            open({ kind: 'page', page: pages.length });
          }}
        >
          {t('add_page')}
        </HaButton>
      </div>
    </>
  );
};

/** One page: how it is divided, and the section in each of its cells. */
export const PageScreen: React.FC<ScreenProps & { page: number }> = ({ draft, update, open, page: index }) => {
  const t = useT();
  const page = draft.pages[index];
  const setPage = (patch: Partial<Page>) => update({ ...draft, pages: replaceAt(draft.pages, index, { ...page, ...patch }) });
  const cells = page.columns.length * page.rows.length;
  return (
    <>
      <ScreenTitle title={t('page_n', { n: index + 1 })} lead={t('lead_page')} />
      <StyledFieldset>
        <h3>{t('layout')}</h3>
        <StyledRow>
          <SplitField label={t('column_split')} hint={t('split_hint')} value={page.columns} onChange={columns => setPage({ columns })} />
          <SplitField label={t('row_split')} hint={t('split_hint')} value={page.rows} onChange={rows => setPage({ rows })} />
        </StyledRow>
      </StyledFieldset>
      <StyledFieldset>
        <h3>{t('sections')}</h3>
        <p>{t('sections_hint', { cells })}</p>
        <StyledList>
          {Array.from({ length: cells }, (_, cell) => {
            const section = page.sections[cell];
            if (!section) {
              return (
                <li key={`empty-${cell}`}>
                  <button
                    type='button'
                    className='open'
                    onClick={() => {
                      // Sections fill cells in order, so an empty cell before
                      // this one gets an empty section too.
                      const sections = [...page.sections];
                      while (sections.length <= cell) sections.push(emptySection());
                      setPage({ sections });
                      open({ kind: 'section', page: index, section: cell });
                    }}
                  >
                    <Icon className='icon' icon='mdi:plus-box-outline' />
                    <span className='text'>
                      <span>{t('add_section')}</span>
                      <span className='secondary'>{t('cell_n', { n: cell + 1 })}</span>
                    </span>
                  </button>
                </li>
              );
            }
            return (
              <li key={section.id}>
                <button type='button' className='open' onClick={() => open({ kind: 'section', page: index, section: cell })}>
                  <Icon className='icon' icon={section.icon || 'mdi:view-grid-outline'} />
                  <span className='text'>
                    <span>{section.name || t('section_n', { n: cell + 1 })}</span>
                    <span className='secondary'>
                      {t('tiles_count', { count: section.tiles.length })} · {section.columns} × {section.rows}
                    </span>
                  </span>
                </button>
                <ListControls
                  index={cell}
                  length={page.sections.length}
                  onMove={to => setPage({ sections: move(page.sections, cell, to) })}
                  onRemove={() => setPage({ sections: page.sections.filter((_, i) => i !== cell) })}
                />
              </li>
            );
          })}
        </StyledList>
      </StyledFieldset>
    </>
  );
};

/** One section: its header, its grid, and the tiles in it. */
export const SectionScreen: React.FC<ScreenProps & { page: number; section: number }> = ({
  draft,
  update,
  page: pageIndex,
  section: index,
}) => {
  const t = useT();
  const page = draft.pages[pageIndex];
  const section = page.sections[index];
  const set = (patch: Partial<Section>) =>
    update({
      ...draft,
      pages: replaceAt(draft.pages, pageIndex, { ...page, sections: replaceAt(page.sections, index, { ...section, ...patch }) }),
    });
  return (
    <>
      <ScreenTitle title={section.name || t('section_n', { n: index + 1 })} lead={t('lead_section')} />
      <StyledFieldset>
        <h3>{t('section_header')}</h3>
        <StyledRow>
          <TextField label={t('name')} value={section.name} onChange={name => set({ name })} />
          <IconField label={t('icon')} value={section.icon} onChange={icon => set({ icon })} />
        </StyledRow>
        <EntityListField
          label={t('status_entities')}
          value={section.status}
          max={2}
          domains={['sensor', 'binary_sensor']}
          onChange={status => set({ status })}
        />
      </StyledFieldset>
      <StyledFieldset>
        <h3>{t('grid')}</h3>
        <StyledRow>
          <NumberField
            label={t('columns')}
            value={section.columns}
            min={1}
            max={LIMITS.sectionCells}
            onChange={columns => set({ columns })}
          />
          <NumberField label={t('rows')} value={section.rows} min={1} max={LIMITS.sectionCells} onChange={rows => set({ rows })} />
        </StyledRow>
        <CheckField label={t('square_cells')} hint={t('square_cells_hint')} value={section.square} onChange={square => set({ square })} />
      </StyledFieldset>
      <StyledFieldset>
        <h3>{t('tiles')}</h3>
        <TileListEditor tiles={section.tiles} columns={section.columns} rows={section.rows} onChange={tiles => set({ tiles })} />
      </StyledFieldset>
    </>
  );
};
