import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    font: string;
    card: { border: string; on: string };
    bubble: { background: string; on: string; inset: string; header: string; icon: string; pressed: string; hover: string };
    text: { primary: string; secondary: string; muted: string };
    colors: {
      temperature: string;
      humidity: string;
      alert: string;
      accent: string;
      warm: string;
      calendar: string;
      cover: string;
      success: string;
    };
    popup: { backdrop: string };
  }
}
