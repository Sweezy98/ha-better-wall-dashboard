import type { Dashboard } from '../../../config/types';
import type { EditorView } from '../../../lib/editorNav';

/** What every screen of the editor is given: the draft, a way to change it, and a way to open another screen. */
export interface ScreenProps {
  draft: Dashboard;
  update: (next: Dashboard) => void;
  open: (view: EditorView) => void;
}

/** A screen's title and the sentence under it saying what it is for. */
export const ScreenTitle: React.FC<{ title: string; lead?: string }> = ({ title, lead }) => (
  <>
    <h2>{title}</h2>
    {lead && <p className='lead'>{lead}</p>}
  </>
);
