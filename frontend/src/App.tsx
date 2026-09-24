import { useMemo } from 'react';
import { HassConnect } from '@hakit/core';
import { CacheProvider } from '@emotion/react';
import createCache from '@emotion/cache';
import { StyleSheetManager, ThemeProvider } from 'styled-components';

import theme from './themes/default.theme';
import GlobalStyle from './globalStyle';
import { DashboardProvider } from './config/DashboardProvider';
import Dashboard from './components/dashboard/Dashboard';
import Splash from './components/base/splash/Splash';

export interface AppProps {
  hassUrl: string;
  /** Dev only. Inside Home Assistant the page's own connection is used. */
  hassToken?: string;
  /** Running as Home Assistant's panel, sharing its connection. */
  embedded: boolean;
  /** Where styles are written: inside our shadow root, beside the app. */
  styleTarget: HTMLElement;
}

const App: React.FC<AppProps> = ({ hassUrl, hassToken, embedded, styleTarget }) => {
  // ha-component-kit draws its own error and login screens with emotion,
  // which writes to document.head by default -- outside our shadow root,
  // where none of it applies. Pointed here, and non-speedy for the same
  // reason as styled-components below.
  const emotionCache = useMemo(() => createCache({ key: 'bwd', container: styleTarget, speedy: false }), [styleTarget]);

  return (
    // disableCSSOMInjection: rules go in as text, so they survive the
    // container being moved to the next panel element (see panel/mount).
    <StyleSheetManager target={styleTarget} disableCSSOMInjection>
      <CacheProvider value={emotionCache}>
        <ThemeProvider theme={theme}>
          <GlobalStyle />
          <HassConnect
            hassUrl={hassUrl}
            hassToken={hassToken}
            loading={<Splash />}
            wrapperProps={{ className: 'bwd-connect' }}
            options={{
              // Embedded, the connection is Home Assistant's own, and Home
              // Assistant already suspends it when the page is hidden. Doing
              // it a second time from here would suspend the whole frontend
              // on our schedule instead of its own.
              handleResumeOptions: { suspendWhenHidden: !embedded },
            }}
          >
            <DashboardProvider>
              <Dashboard />
            </DashboardProvider>
          </HassConnect>
        </ThemeProvider>
      </CacheProvider>
    </StyleSheetManager>
  );
};

export default App;
