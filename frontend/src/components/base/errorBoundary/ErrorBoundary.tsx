import { Component, type ErrorInfo, type ReactNode } from 'react';
import Splash from '../splash/Splash';
import { translate } from '../../../lib/i18n';

/** How long a wall tablet shows the error before it reloads by itself. */
const RELOAD_MS = 15_000;

interface ErrorBoundaryProps {
  /** Reload by itself: on a wall tablet nobody will press anything. */
  autoReload: boolean;
  children: ReactNode;
}

/**
 * What is left when something throws while drawing: a word and a way back,
 * not an empty page. React unmounts the whole tree on an error nothing
 * catches -- a blank screen a tablet on the wall never recovers from.
 */
export default class ErrorBoundary extends Component<ErrorBoundaryProps, { failed: boolean }> {
  state = { failed: false };
  private timer = 0;

  static getDerivedStateFromError() {
    return { failed: true };
  }

  componentDidCatch(error: Error, info: ErrorInfo): void {
    console.error('Better Wall Dashboard failed to draw', error, info.componentStack);
    if (this.props.autoReload) this.timer = window.setTimeout(() => window.location.reload(), RELOAD_MS);
  }

  componentWillUnmount(): void {
    window.clearTimeout(this.timer);
  }

  render(): ReactNode {
    if (!this.state.failed) return this.props.children;
    // Not the kit's language: the store it lives in may be what failed.
    const language = navigator.language;
    return (
      <Splash message={translate(language, this.props.autoReload ? 'app_error_reloading' : 'app_error')}>
        <button type='button' className='action' onClick={() => window.location.reload()}>
          {translate(language, 'reload')}
        </button>
      </Splash>
    );
  }
}
