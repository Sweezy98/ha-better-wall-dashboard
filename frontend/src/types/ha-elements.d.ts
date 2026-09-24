import 'react';

// Home Assistant's own elements, used when the page has them and never
// assumed: see `components/base/icon/Icon.tsx`.
declare module 'react' {
  namespace JSX {
    interface IntrinsicElements {
      'ha-icon': React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement> & { icon?: string };
    }
  }
}
