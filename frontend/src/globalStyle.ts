import { createGlobalStyle } from 'styled-components';

/**
 * Global for the dashboard, not for the page.
 *
 * These rules live inside our shadow root, so `p`, `img` and `button` here
 * reach only our own elements. Written against `body` in a Lovelace resource
 * or an extra module, the same rules would restyle Home Assistant itself.
 */
// Every reset below is wrapped in :where(), which has no specificity. Written
// as `.bwd-root button` it outranked each component's own single-class rules,
// and every styled button lost its padding to "padding: 0".
const GlobalStyle = createGlobalStyle`
  .bwd-connect {
    width: 100%;
    height: 100%;
  }

  .bwd-root {
    font-family: ${({ theme }) => theme.font};
    color: ${({ theme }) => theme.text.primary};
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    -webkit-tap-highlight-color: transparent;
    user-select: none;
    -webkit-user-select: none;
  }

  :where(.bwd-root) *,
  :where(.bwd-root) *::before,
  :where(.bwd-root) *::after {
    box-sizing: border-box;
  }

  :where(.bwd-root p) {
    margin: 0;
  }

  :where(.bwd-root img) {
    user-select: none;
    pointer-events: none;
  }

  :where(.bwd-root button) {
    font: inherit;
    color: inherit;
    background: none;
    border: none;
    padding: 0;
    margin: 0;
    cursor: pointer;
    text-align: inherit;
  }

  :where(.bwd-root input, .bwd-root select, .bwd-root textarea) {
    font: inherit;
    color: inherit;
    user-select: text;
    -webkit-user-select: text;
  }

  .bwd-root ::-webkit-scrollbar {
    width: 6px;
    height: 6px;
  }

  .bwd-root ::-webkit-scrollbar-thumb {
    background: rgba(255, 255, 255, 0.15);
    border-radius: 3px;
  }
`;

export default GlobalStyle;
