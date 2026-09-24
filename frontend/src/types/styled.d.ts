import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    font: string;
    card: { background: string; shadow: string; border: string };
    bubble: { background: string; inset: string; header: string; icon: string; pressed: string };
    text: { primary: string; secondary: string; muted: string };
    colors: { temperature: string; humidity: string; alert: string; accent: string; warm: string; calendar: string };
    popup: { background: string; backdrop: string };
    common: { blur: string };
  }
}
