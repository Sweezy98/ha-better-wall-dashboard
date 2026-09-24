import { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import { useConnection, useT } from '../../hooks/useHa';
import { loadedFingerprint, reloadDashboard } from '../../lib/reload';
import { getEntryUrl } from '../../panel/entry';
import Icon from '../base/icon/Icon';
import HaButton from './ha/HaButton';
import { StyledIconButton } from './fields.styled';
import { StyledModal } from './editor.styled';

/** The brand icon, as the integration serves it for cores that do not read its brand folder. */
const BRAND_ICON = '/better_wall_dashboard/static/icon.png';

const StyledAbout = styled(StyledModal)`
  .head {
    display: flex;
    align-items: center;
    gap: 14px;
    padding-right: 36px;
  }

  .head img {
    width: 48px;
    height: 48px;
    border-radius: 10px;
    object-fit: contain;
  }

  table th {
    text-align: left;
    font-weight: 400;
    padding: 2px 16px 2px 0;
    color: var(--secondary-text-color, #9b9b9b);
    white-space: nowrap;
  }

  table td {
    font-variant-numeric: tabular-nums;
  }

  a {
    color: var(--primary-color, #03a9f4);
  }

  .shut {
    position: absolute;
    top: 14px;
    right: 14px;
  }
`;

interface Version {
  app: string;
  version: string;
  documentation?: string;
  issues?: string;
}

/**
 * What this is, and which version of it is running -- two versions, because
 * they can differ: the integration Home Assistant loaded, and the build this
 * page was served, which stays what it was until the page is reloaded.
 */
const AboutDialog: React.FC<{ open: boolean; onClose: () => void }> = ({ open, onClose }) => {
  const t = useT();
  const connection = useConnection();
  const ref = useRef<HTMLDialogElement>(null);
  const [version, setVersion] = useState<Version | null>(null);
  const loaded = loadedFingerprint();

  useEffect(() => {
    const dialog = ref.current;
    if (!dialog) return;
    if (open && !dialog.open) dialog.showModal();
    if (!open && dialog.open) dialog.close();
  });

  useEffect(() => {
    if (!open) return;
    connection
      ?.sendMessagePromise<Version>({ type: 'better_wall_dashboard/version' })
      .then(setVersion)
      .catch(() => undefined);
  }, [open, connection]);

  const stale = Boolean(loaded && version && version.app !== loaded);

  const reload = () => {
    const entry = getEntryUrl();
    let target: string | null = null;
    if (entry && version) {
      const url = new URL(entry);
      url.searchParams.set('v', version.app);
      target = url.toString();
    }
    void reloadDashboard(target);
  };

  return (
    <StyledAbout
      ref={ref}
      tabIndex={-1}
      onClose={() => open && onClose()}
      onClick={event => event.target === event.currentTarget && onClose()}
    >
      <div className='head'>
        <img src={BRAND_ICON} alt='' />
        <h2>Better Wall Dashboard</h2>
      </div>
      <p className='muted'>{t('about_blurb')}</p>
      <table>
        <tbody>
          <tr>
            <th>{t('about_version')}</th>
            <td>{version?.version ?? '–'}</td>
          </tr>
          <tr>
            <th>{t('about_page')}</th>
            <td>{loaded ? loaded.slice(0, 12) : '–'}</td>
          </tr>
        </tbody>
      </table>
      {stale && (
        <>
          <p>{t('update_available')}</p>
          <HaButton appearance='filled' icon='mdi:reload' onClick={reload}>
            {t('reload')}
          </HaButton>
        </>
      )}
      {(version?.documentation || version?.issues) && (
        <p>
          {version.documentation && (
            <a href={version.documentation} target='_blank' rel='noopener noreferrer'>
              {t('about_repo')}
            </a>
          )}
          {version.documentation && version.issues && ' · '}
          {version.issues && (
            <a href={version.issues} target='_blank' rel='noopener noreferrer'>
              {t('about_issues')}
            </a>
          )}
        </p>
      )}
      <StyledIconButton type='button' className='shut' aria-label={t('close')} title={t('close')} onClick={onClose}>
        <Icon icon='mdi:close' />
      </StyledIconButton>
    </StyledAbout>
  );
};

export default AboutDialog;
