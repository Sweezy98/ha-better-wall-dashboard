import { useCallback, useState } from 'react';
import ConfirmDialog, { type ConfirmRequest } from './ConfirmDialog';

/**
 * `confirm()` in the editor's own dialog: `await confirm({...})` answers true
 * to go ahead. Render `dialog` once, anywhere in the page.
 */
export function useConfirm() {
  const [pending, setPending] = useState<(ConfirmRequest & { resolve: (ok: boolean) => void }) | null>(null);
  const confirm = useCallback((request: ConfirmRequest) => new Promise<boolean>(resolve => setPending({ ...request, resolve })), []);
  const dialog = (
    <ConfirmDialog
      request={pending}
      onAnswer={ok => {
        pending?.resolve(ok);
        setPending(null);
      }}
    />
  );
  return { confirm, dialog };
}
