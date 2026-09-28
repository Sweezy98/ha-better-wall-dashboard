import{C as e,D as t,E as n,O as r,S as i,T as a,_ as o,a as s,b as c,c as l,d as u,f as d,g as f,h as ee,i as te,l as ne,m as re,n as p,o as m,p as h,r as ie,s as g,t as _,u as v,v as ae,w as y,x as b,y as oe}from"./boot-CrOOvrKc.js";var x=r(t(),1),S=r(n(),1),se=y.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 6px;
  min-height: 40px;
  padding: 0 18px;
  border-radius: 999px;
  font: inherit;
  font-weight: 500;
  cursor: pointer;
  ${({$appearance:t,$danger:n})=>{let r=n?`var(--error-color, #db4437)`:`var(--primary-color, #03a9f4)`;return t===`accent`?e`
        background: ${r};
        color: var(--text-primary-color, #fff);
      `:t===`filled`?e`
        background: color-mix(in srgb, ${r} 16%, transparent);
        color: ${r};
      `:e`
      background: transparent;
      color: ${r};
    `}}

  &:hover:enabled {
    filter: brightness(1.1);
  }

  &:disabled {
    opacity: 0.4;
    cursor: default;
  }

  ha-icon,
  span[class] {
    --mdc-icon-size: 18px;
  }
`,ce=()=>()=>{},C=({children:e,onClick:t,icon:n,appearance:r=`plain`,danger:i=!1,disabled:a,title:o})=>{let s=(0,x.useSyncExternalStore)(ce,()=>!!customElements.get(`ha-button`)),c=(0,S.jsxs)(S.Fragment,{children:[n&&(0,S.jsx)(`span`,{slot:`start`,style:{display:`inline-flex`},children:(0,S.jsx)(h,{icon:n,size:`18px`})}),e]});return s?(0,x.createElement)(`ha-button`,{appearance:r,variant:i?`danger`:`brand`,disabled:a||void 0,title:o,onClick:t},c):(0,S.jsx)(se,{type:`button`,$appearance:r,$danger:i,disabled:a,title:o,onClick:t,children:c})},w=[{part:`clock`,icon:`mdi:clock-outline`,label:`clock`},{part:`status`,icon:`mdi:wifi-star`,label:`nav_status`},{part:`climate`,icon:`mdi:home-thermometer-outline`,label:`room_climate`},{part:`persons`,icon:`mdi:account-multiple-outline`,label:`persons`},{part:`openings`,icon:`mdi:window-open-variant`,label:`openings`},{part:`travel`,icon:`mdi:car-clock`,label:`travel_time`},{part:`quick`,icon:`mdi:gesture-tap-button`,label:`quick_actions`},{part:`calendar`,icon:`mdi:calendar-month-outline`,label:`calendar`},{part:`weather`,icon:`mdi:weather-partly-cloudy`,label:`weather`},{part:`notifications`,icon:`mdi:bell-outline`,label:`notifications`},{part:`system`,icon:`mdi:chart-box-outline`,label:`system_stats`}];function le(e,t){switch(e.kind){case`page`:return e.page<t.pages.length?e:{kind:`pages`};case`section`:{let n=t.pages[e.page];return n?e.section<n.sections.length?e:{kind:`page`,page:e.page}:{kind:`pages`}}case`button`:return e.button<t.buttons.length?e:{kind:`buttons`};default:return e}}function ue(e){switch(e.kind){case`sidebar`:return[`sidebar`];case`page`:return[`pages`];case`section`:return[`pages`,`page-${e.page}`];case`button`:return[`buttons`];default:return[]}}function T(e,t){return JSON.stringify(e)===JSON.stringify(t)}function de(e,t){switch(e.kind){case`general`:return[{label:t.label(`tab_general`)}];case`sidebar`:{let n=w.find(t=>t.part===e.part);return[{label:t.label(`tab_sidebar`)},{label:t.label(n?.label??e.part)}]}case`pages`:return[{label:t.label(`tab_pages`)}];case`page`:return[{label:t.label(`tab_pages`),view:{kind:`pages`}},{label:t.page(e.page)}];case`section`:return[{label:t.label(`tab_pages`),view:{kind:`pages`}},{label:t.page(e.page),view:{kind:`page`,page:e.page}},{label:t.section(e.page,e.section)}];case`buttons`:return[{label:t.label(`tab_buttons`)}];case`button`:return[{label:t.label(`tab_buttons`),view:{kind:`buttons`}},{label:t.button(e.button)}];case`users`:return[{label:t.label(`tab_users`)}];case`json`:return[{label:t.label(`tab_json`)}]}}var fe=y.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  overflow: hidden;
  background: var(--primary-background-color, #111111);
  color: var(--primary-text-color, #e1e1e1);
  font-family: var(--ha-font-family-body, Roboto, Noto, sans-serif);
  font-size: 14px;
  line-height: 1.4;
`,pe=y.header`
  flex: 0 0 auto;
  z-index: 5;
  display: flex;
  align-items: center;
  gap: 8px;
  min-height: 56px;
  padding: 6px 12px;
  box-sizing: border-box;
  background: var(--app-header-background-color, var(--primary-color, #101e24));
  color: var(--app-header-text-color, #fff);
  border-bottom: 1px solid var(--divider-color, rgba(225, 225, 225, 0.12));

  .titles {
    display: flex;
    align-items: baseline;
    gap: 6px 14px;
    flex-wrap: wrap;
    min-width: 0;
  }

  .app-title {
    font-size: 20px;
    white-space: nowrap;
  }

  nav {
    display: flex;
    align-items: baseline;
    gap: 6px;
    flex-wrap: wrap;
    font-size: 14px;
    opacity: 0.85;
    min-width: 0;
  }

  nav button {
    padding: 0;
    border: none;
    background: none;
    color: inherit;
    font: inherit;
    cursor: pointer;
    white-space: nowrap;
  }

  nav button:hover {
    text-decoration: underline;
  }

  nav span {
    white-space: nowrap;
  }

  .spacer {
    flex: 1;
  }

  /* The way to Home Assistant's own sidebar, which it hides when narrow;
     and our menu's drawer, which slides in when there is no room for it. */
  .only-narrow,
  .only-drawer {
    display: none;
  }

  &[data-narrow='true'] .only-narrow {
    display: inline-flex;
  }

  @media (max-width: 800px) {
    .only-drawer {
      display: inline-flex;
    }

    nav {
      display: none;
    }
  }

  @media (min-width: 1280px) {
    .only-no-preview {
      display: none;
    }
  }
`,E=y.button`
  width: 40px;
  height: 40px;
  flex: 0 0 auto;
  border: none;
  border-radius: 50%;
  background: transparent;
  color: inherit;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  --mdc-icon-size: 24px;
  font-size: 24px;

  &:hover:enabled,
  &[aria-pressed='true'] {
    background: rgba(255, 255, 255, 0.12);
  }

  &:disabled {
    opacity: 0.35;
    cursor: default;
  }
`,me=y.div`
  position: relative;
  flex: 0 0 auto;

  .menu {
    position: absolute;
    right: 0;
    top: 44px;
    z-index: 6;
    min-width: 240px;
    padding: 6px 0;
    border-radius: 10px;
    background: var(--card-background-color, #1c1c1c);
    color: var(--primary-text-color, #e1e1e1);
    box-shadow: 0 4px 16px rgba(0, 0, 0, 0.3);
  }

  .menu button {
    display: flex;
    width: 100%;
    gap: 12px;
    align-items: center;
    padding: 12px 16px;
    border: none;
    background: transparent;
    color: inherit;
    font: inherit;
    text-align: left;
    cursor: pointer;
    --mdc-icon-size: 20px;
  }

  .menu button:hover:enabled {
    background: var(--secondary-background-color, #282828);
  }

  .menu button:disabled {
    opacity: 0.4;
    cursor: default;
  }

  .menu button.danger {
    color: var(--error-color, #db4437);
  }

  .menu hr {
    margin: 6px 0;
    border: none;
    border-top: 1px solid var(--divider-color, rgba(225, 225, 225, 0.12));
  }
`,he=y.div`
  --gutter: 16px;
  flex: 1 1 auto;
  min-height: 0;
  position: relative;
  display: grid;
  grid-template-columns: 260px minmax(0, 1fr) minmax(360px, 42%);
  gap: 16px;
  padding: var(--gutter);
  overflow: hidden;

  /* No room for three: the preview is a button in the header instead, which
     swaps it for the screen. */
  @media (max-width: 1279px) {
    grid-template-columns: 260px minmax(0, 1fr);
  }

  @media (max-width: 800px) {
    --gutter: 12px;
    grid-template-columns: minmax(0, 1fr);
  }
`,D=y.div`
  background: var(--card-background-color, #1c1c1c);
  border-radius: var(--ha-card-border-radius, 12px);
  box-shadow: var(--ha-card-box-shadow, none);
  border: 1px solid var(--ha-card-border-color, var(--divider-color, rgba(225, 225, 225, 0.12)));
  box-sizing: border-box;
  min-width: 0;
  min-height: 0;
`,O=y(D)`
  overflow: auto;
  padding: 12px 10px;

  ul {
    list-style: none;
    margin: 0;
    padding: 0;
  }

  ul.sub {
    margin: 2px 0 6px 16px;
    padding-left: 8px;
    border-left: 2px solid var(--divider-color, rgba(225, 225, 225, 0.12));
  }

  .heading {
    margin: 14px 12px 6px;
    font-size: 12px;
    font-weight: 500;
    letter-spacing: 0.06em;
    text-transform: uppercase;
    color: var(--secondary-text-color, #9b9b9b);
  }

  .heading:first-child {
    margin-top: 4px;
  }

  li > button {
    position: relative;
    display: flex;
    align-items: center;
    gap: 10px;
    width: 100%;
    min-height: 40px;
    padding: 8px 10px;
    border: none;
    border-radius: 8px;
    background: transparent;
    color: var(--sidebar-text-color, var(--primary-text-color, #e1e1e1));
    font: inherit;
    text-align: left;
    cursor: pointer;
    --mdc-icon-size: 20px;
  }

  ul.sub li > button {
    min-height: 34px;
    padding: 6px 10px;
  }

  li > button:hover {
    background: var(--secondary-background-color, #282828);
  }

  li > button .icon {
    color: var(--sidebar-icon-color, var(--secondary-text-color, #9b9b9b));
    font-size: 20px;
  }

  li > button[aria-current='page'] {
    color: var(--sidebar-selected-text-color, var(--primary-color, #03a9f4));
    font-weight: 500;
  }

  li > button[aria-current='page']::before {
    content: '';
    position: absolute;
    inset: 0;
    border-radius: 8px;
    pointer-events: none;
    background-color: var(--sidebar-selected-icon-color, var(--primary-color, #03a9f4));
    opacity: var(--dark-divider-opacity, 0.12);
  }

  li > button[aria-current='page'] .icon {
    color: var(--sidebar-selected-icon-color, var(--primary-color, #03a9f4));
  }

  .grow {
    flex: 1;
    min-width: 0;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  /* The chevron that folds a branch, turning as it opens. */
  .twist {
    display: inline-flex;
    opacity: 0.6;
    transition:
      transform 0.2s ease,
      opacity 0.15s ease;
  }

  .twist:hover {
    opacity: 1;
  }

  .twist[data-open='true'] {
    transform: rotate(90deg);
  }

  li.add > button {
    color: var(--primary-color, #03a9f4);
  }

  li.add > button .icon {
    color: inherit;
  }

  @media (max-width: 800px) {
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    z-index: 7;
    width: min(320px, 85vw);
    border-radius: 0;
    transform: translateX(${({$open:e})=>e?`0`:`-101%`});
    transition: transform 0.2s ease;
    box-shadow: 2px 0 12px rgba(0, 0, 0, 0.35);
  }
`,ge=y.div`
  display: none;

  @media (max-width: 800px) {
    display: block;
    position: fixed;
    inset: 0;
    z-index: 6;
    background: rgba(0, 0, 0, 0.45);
    opacity: ${({$open:e})=>+!!e};
    pointer-events: ${({$open:e})=>e?`auto`:`none`};
    transition: opacity 0.2s ease;
  }
`,_e=y(D)`
  display: flex;
  flex-direction: column;
  overflow: hidden;

  /* Swapped for the preview where there is no room for both. */
  @media (max-width: 1279px) {
    display: ${({$hidden:e})=>e?`none`:`flex`};
  }

  .screen-body {
    flex: 1 1 auto;
    min-height: 0;
    overflow: auto;
    overflow-wrap: anywhere;
    padding: 20px 24px;
    display: flex;
    flex-direction: column;
    gap: 20px;
  }

  .screen-body > * {
    flex: 0 0 auto;
  }

  .screen-body h2 {
    margin: 0;
    font-size: 20px;
    font-weight: 400;
  }

  .screen-body .lead {
    margin: -12px 0 0;
    color: var(--secondary-text-color, #9b9b9b);
  }

  .screen-foot {
    flex: 0 0 auto;
    display: flex;
    gap: 8px;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-between;
    padding: 12px 24px;
    border-top: 1px solid var(--divider-color, rgba(225, 225, 225, 0.12));
  }

  .screen-foot .status {
    color: var(--secondary-text-color, #9b9b9b);
  }

  .screen-foot .end {
    display: flex;
    gap: 8px;
    margin-left: auto;
  }

  ha-selector,
  .ha-field {
    display: block;
    width: 100%;
  }

  @media (max-width: 500px) {
    .screen-body {
      padding: 14px 16px;
    }

    .screen-foot {
      padding: 10px 16px;
    }
  }
`,k=y.section`
  display: flex;
  flex-direction: column;
  gap: 16px;

  > h3 {
    margin: 4px 0 -4px;
    font-size: 16px;
    font-weight: 500;
  }

  > p {
    margin: -8px 0 0;
    color: var(--secondary-text-color, #9b9b9b);
  }
`,A=y.ul`
  list-style: none;
  margin: 0;
  padding: 0;
  border: 1px solid var(--divider-color, rgba(225, 225, 225, 0.12));
  border-radius: 12px;
  overflow: hidden;

  > li {
    display: flex;
    align-items: center;
    gap: 12px;
    min-height: 52px;
    padding: 6px 8px 6px 16px;
    box-sizing: border-box;
  }

  > li + li {
    border-top: 1px solid var(--divider-color, rgba(225, 225, 225, 0.12));
  }

  > li > .open {
    display: flex;
    align-items: center;
    gap: 12px;
    flex: 1;
    min-width: 0;
    padding: 6px 0;
    border: none;
    background: none;
    color: inherit;
    font: inherit;
    text-align: left;
    cursor: pointer;
    --mdc-icon-size: 22px;
  }

  > li > .open .icon {
    color: var(--secondary-text-color, #9b9b9b);
    font-size: 22px;
  }

  > li > .open .text {
    display: flex;
    flex-direction: column;
    min-width: 0;
  }

  > li > .open .secondary {
    color: var(--secondary-text-color, #9b9b9b);
    font-size: 13px;
  }

  > li > .open::after {
    content: '';
    flex: 0 0 auto;
    width: 8px;
    height: 8px;
    margin: 0 8px 0 auto;
    border-right: 2px solid currentColor;
    border-bottom: 2px solid currentColor;
    transform: rotate(-45deg);
    opacity: 0.4;
  }

  > li:hover {
    background: var(--secondary-background-color, #282828);
  }

  .list-controls {
    display: flex;
    gap: 2px;
    flex: 0 0 auto;
  }
`,j=y.details`
  border: 1px solid var(--divider-color, rgba(225, 225, 225, 0.12));
  border-radius: 12px;
  overflow: hidden;

  > summary {
    display: flex;
    align-items: center;
    gap: 12px;
    padding: 12px 16px;
    cursor: pointer;
    list-style: none;
    font-weight: 500;
    --mdc-icon-size: 22px;
  }

  > summary::-webkit-details-marker {
    display: none;
  }

  > summary .icon {
    color: var(--secondary-text-color, #9b9b9b);
    font-size: 22px;
  }

  > summary .text {
    display: flex;
    flex-direction: column;
    flex: 1;
    min-width: 0;
  }

  > summary .secondary {
    color: var(--secondary-text-color, #9b9b9b);
    font-size: 13px;
    font-weight: 400;
  }

  > summary::after {
    content: '';
    flex: 0 0 auto;
    width: 9px;
    height: 9px;
    margin-right: 4px;
    border-right: 2px solid currentColor;
    border-bottom: 2px solid currentColor;
    transform: rotate(45deg) translate(-2px, -2px);
    transition: transform 0.15s;
  }

  &[open] > summary::after {
    transform: rotate(225deg) translate(-3px, -3px);
  }

  &[open] > summary {
    border-bottom: 1px solid var(--divider-color, rgba(225, 225, 225, 0.12));
  }

  > .fold-body {
    display: flex;
    flex-direction: column;
    gap: 16px;
    padding: 16px 20px 20px;
  }
`,M=y.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  padding: 32px 16px;
  text-align: center;
  color: var(--secondary-text-color, #9b9b9b);
  --mdc-icon-size: 48px;
  font-size: 48px;

  span {
    font-size: 14px;
    max-width: 36ch;
  }
`,ve=y(D)`
  display: grid;
  grid-template-rows: auto minmax(0, 1fr);
  overflow: hidden;

  .preview-bar {
    display: flex;
    align-items: center;
    gap: 8px;
    padding: 8px 12px 8px 20px;
    border-bottom: 1px solid var(--divider-color, rgba(225, 225, 225, 0.12));
  }

  .preview-bar h2 {
    flex: 1;
    margin: 0;
    font-size: 16px;
    font-weight: 500;
  }

  .preview-bar .ha-field {
    width: 220px;
  }

  .stage {
    min-height: 0;
    background: radial-gradient(80% 80% at 50% 40%, #1a2129, #0c0f12);
  }

  @media (max-width: 1279px) {
    display: ${({$shown:e})=>e?`grid`:`none`};
  }
`,ye=y.dialog`
  width: min(440px, calc(100vw - 32px));
  padding: 24px;
  border: none;
  border-radius: var(--ha-dialog-border-radius, 24px);
  background: var(--card-background-color, #1c1c1c);
  color: var(--primary-text-color, #e1e1e1);
  font-family: var(--ha-font-family-body, Roboto, Noto, sans-serif);
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.4);

  &::backdrop {
    background: rgba(0, 0, 0, 0.45);
  }

  &:focus {
    outline: none;
  }

  > * {
    margin: 0 0 14px;
  }

  > :last-child {
    margin-bottom: 0;
  }

  h2 {
    margin: 0;
    font-size: 22px;
    font-weight: 400;
  }

  .muted {
    color: var(--secondary-text-color, #9b9b9b);
  }

  .actions {
    display: flex;
    justify-content: flex-end;
    gap: 8px;
    margin-top: 24px;
  }
`,be=({dashboards:e,draft:t,view:n,expanded:r,open:a,onToggle:o,onOpen:s,onSwitch:c,onNewDashboard:l})=>{let u=i(),d=(e,t,r)=>(0,S.jsx)(`li`,{children:(0,S.jsxs)(`button`,{type:`button`,"aria-current":T(n,e)?`page`:void 0,onClick:()=>s(e),children:[(0,S.jsx)(h,{className:`icon`,icon:r}),(0,S.jsx)(`span`,{className:`grow`,children:t})]})},JSON.stringify(e)),f=(e,t,i,a,c)=>{let l=r.has(e);return(0,S.jsxs)(`li`,{children:[(0,S.jsxs)(`button`,{type:`button`,"aria-expanded":l,"aria-current":T(n,t)?`page`:void 0,onClick:()=>s(t,e),children:[(0,S.jsx)(h,{className:`icon`,icon:a}),(0,S.jsx)(`span`,{className:`grow`,children:i}),(0,S.jsx)(`span`,{className:`twist`,"data-open":l,role:`button`,"aria-label":i,onClick:t=>{t.stopPropagation(),o(e)},children:(0,S.jsx)(h,{icon:`mdi:chevron-right`})})]}),l&&(0,S.jsx)(`ul`,{className:`sub`,children:c})]},e)},ee=(0,S.jsxs)(S.Fragment,{children:[d({kind:`general`},u(`tab_general`),`mdi:cog-outline`),f(`sidebar`,{kind:`sidebar`,part:w[0].part},u(`tab_sidebar`),`mdi:dock-left`,w.map(e=>d({kind:`sidebar`,part:e.part},u(e.label),e.icon))),f(`pages`,{kind:`pages`},u(`tab_pages`),`mdi:book-open-page-variant-outline`,t.pages.map((e,t)=>e.sections.length?f(`page-${t}`,{kind:`page`,page:t},u(`page_n`,{n:t+1}),`mdi:file-outline`,e.sections.map((e,n)=>d({kind:`section`,page:t,section:n},e.name||u(`section_n`,{n:n+1}),e.icon||`mdi:view-grid-outline`))):d({kind:`page`,page:t},u(`page_n`,{n:t+1}),`mdi:file-outline`))),f(`buttons`,{kind:`buttons`},u(`tab_buttons`),`mdi:gesture-tap-button`,t.buttons.map((e,t)=>d({kind:`button`,button:t},e.name||u(`button_n`,{n:t+1}),e.icon||`mdi:gesture-tap`)))]});return(0,S.jsxs)(O,{$open:a,as:`nav`,"aria-label":u(`editor_title`),children:[(0,S.jsx)(`div`,{className:`heading`,children:u(`nav_dashboards`)}),(0,S.jsxs)(`ul`,{children:[e.map(e=>e.id===t.id?(0,S.jsxs)(`li`,{children:[(0,S.jsxs)(`button`,{type:`button`,"aria-expanded":!0,onClick:()=>s({kind:`general`}),children:[(0,S.jsx)(h,{className:`icon`,icon:`mdi:tablet-dashboard`}),(0,S.jsx)(`span`,{className:`grow`,children:(0,S.jsx)(`strong`,{children:t.name})})]}),(0,S.jsx)(`ul`,{className:`sub`,children:ee})]},e.id):(0,S.jsx)(`li`,{children:(0,S.jsxs)(`button`,{type:`button`,onClick:()=>c(e.id),children:[(0,S.jsx)(h,{className:`icon`,icon:`mdi:tablet-dashboard`}),(0,S.jsx)(`span`,{className:`grow`,children:e.name})]})},e.id)),(0,S.jsx)(`li`,{className:`add`,children:(0,S.jsxs)(`button`,{type:`button`,onClick:l,children:[(0,S.jsx)(h,{className:`icon`,icon:`mdi:plus`}),(0,S.jsx)(`span`,{className:`grow`,children:u(`new_dashboard`)})]})})]}),(0,S.jsx)(`div`,{className:`heading`,children:u(`nav_house`)}),(0,S.jsx)(`ul`,{children:d({kind:`users`},u(`tab_users`),`mdi:account-multiple-outline`)})]})},N=y.div`
  position: relative;
  width: 100%;
  height: 100%;
  min-height: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
`,xe=y.div`
  position: absolute;
  left: 50%;
  top: 50%;
  border-radius: 22px;
  overflow: hidden;
  box-shadow:
    0 0 0 10px #05080b,
    0 0 0 12px rgba(120, 200, 255, 0.25),
    0 30px 80px rgba(0, 0, 0, 0.6);
  transform-origin: center center;
`,Se=(0,x.memo)(({dashboard:e,device:t,portrait:n,page:r})=>{let a=i(),o=(0,x.useRef)(null),[s,c]=(0,x.useState)(.5),l=n?t.height:t.width,u=n?t.width:t.height;(0,x.useLayoutEffect)(()=>{let e=o.current;if(!e)return;let t=()=>{let t=Math.min((e.clientWidth-40)/l,(e.clientHeight-40)/u);c(Math.max(.1,Math.min(1,Math.floor(t*1e3)/1e3)))};t();let n=new ResizeObserver(t);return n.observe(e),()=>n.disconnect()},[l,u]);let d=(0,x.useMemo)(()=>({dashboard:e,dashboards:[],kiosk:!1,is_admin:!0,pin_required:!1}),[e]);return(0,S.jsx)(N,{ref:o,"aria-label":a(`preview`),children:(0,S.jsx)(xe,{style:{width:l,height:u,transform:`translate(-50%, -50%) scale(${s})`},children:(0,S.jsx)(re,{view:d,focusPage:r,children:(0,S.jsx)(te,{})})})})}),P=y.label`
  display: flex;
  flex-direction: column;
  gap: 6px;
  min-width: 0;

  > span.label {
    font-weight: 500;
  }

  small {
    display: block;
    color: var(--secondary-text-color);
    font-size: 13px;
  }

  input:not([type='checkbox']):not([type='range']),
  select,
  textarea {
    width: 100%;
    min-width: 0;
    box-sizing: border-box;
    padding: 9px 10px;
    border-radius: 8px;
    border: 1px solid var(--divider-color, #3d3d3d);
    background: var(--card-background-color, #1c1c1c);
    color: inherit;
    font: inherit;
  }

  input:focus,
  select:focus,
  textarea:focus {
    outline: 2px solid var(--primary-color, #03a9f4);
    outline-offset: -1px;
  }

  input[type='range'] {
    accent-color: var(--primary-color, #03a9f4);
  }

  .with-icon {
    display: flex;
    gap: 8px;
    align-items: center;
  }
`,Ce=y.label`
  display: flex;
  align-items: flex-start;
  gap: 12px;
  cursor: pointer;

  input {
    width: 18px;
    height: 18px;
    margin-top: 2px;
    accent-color: var(--primary-color, #03a9f4);
  }

  small {
    display: block;
    color: var(--secondary-text-color);
    font-size: 13px;
  }
`,F=y.div`
  display: grid;
  grid-template-columns: ${({$columns:e})=>e??`repeat(auto-fit, minmax(220px, 1fr))`};
  gap: 16px;
  align-items: start;
`,I=y.button`
  width: 36px;
  height: 36px;
  flex: 0 0 auto;
  border: none;
  border-radius: 50%;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  background: transparent;
  color: var(--secondary-text-color);
  cursor: pointer;
  --mdc-icon-size: 20px;
  font-size: 20px;

  &:hover:enabled {
    background: ${({$danger:e})=>e?`var(--error-color, #db4437)`:`var(--secondary-background-color)`};
    color: ${({$danger:e})=>e?`#fff`:`var(--primary-text-color)`};
  }

  &:disabled {
    opacity: 0.3;
    cursor: default;
  }

  &.add {
    color: var(--primary-color, #03a9f4);
  }
`;function L(e,t,n){if(n<0||n>=e.length)return e;let r=[...e],[i]=r.splice(t,1);return r.splice(n,0,i),r}function R(){let e=new Uint8Array(6);return crypto.getRandomValues(e),Array.from(e,e=>e.toString(16).padStart(2,`0`)).join(``)}var z=e=>JSON.parse(JSON.stringify(e)),B=(e,t,n)=>e.map((e,r)=>r===t?n:e),V=({selector:e,value:t,onChange:n,label:r,helper:i,required:a=!1})=>{let o=(0,x.useRef)(null),s=(0,x.useRef)(null),c=(0,x.useRef)(n);(0,x.useEffect)(()=>{c.current=n}),(0,x.useEffect)(()=>{let e=document.createElement(`ha-selector`);e.hass=_();let t=t=>{t.stopPropagation();let n=t.detail.value;e.value=n,c.current(n)};e.addEventListener(`value-changed`,t),o.current?.append(e),s.current=e;let n=p(t=>{e.hass=t});return()=>{n(),e.removeEventListener(`value-changed`,t),e.remove(),s.current=null}},[]);let l=JSON.stringify(e);return(0,x.useEffect)(()=>{let e=s.current;e&&(e.selector=JSON.parse(l),e.label=r,e.helper=i,e.required=a)},[l,r,i,a]),(0,x.useEffect)(()=>{let e=s.current;e&&e.value!==t&&(e.value=t)},[t]),(0,S.jsx)(`div`,{ref:o,className:`ha-field`})},H=[`ha-selector`,`ha-entity-picker`,`ha-switch`,`ha-icon-picker`],we=null;function Te(){return H.every(e=>customElements.get(e))}function Ee(){return Te()?Promise.resolve(!0):(we??=(async()=>{let e=window.loadCardHelpers;if(!e)return!1;try{let t=await e();for(let e of[{type:`entities`,entities:[]},{type:`button`}])try{await(await t.createCardElement(e)).constructor.getConfigElement?.()}catch{}}catch{return!1}return!!customElements.get(`ha-selector`)})(),we)}function U(){let[e,t]=(0,x.useState)(Te),n=(0,x.useSyncExternalStore)(p,()=>_()!==null);return(0,x.useEffect)(()=>{if(e||!n)return;let r=!0;return Ee().then(e=>r&&e&&t(!0)),()=>{r=!1}},[e,n]),e&&n}var W=({label:e,hint:t,value:n,onChange:r,placeholder:i,type:a=`text`})=>U()?(0,S.jsx)(V,{selector:{text:a===`text`?{}:{type:a}},value:n,label:e,helper:t,onChange:e=>r(typeof e==`string`?e:``)}):(0,S.jsxs)(P,{children:[(0,S.jsx)(`span`,{className:`label`,children:e}),(0,S.jsx)(`input`,{type:a,value:n,placeholder:i,onChange:e=>r(e.target.value)}),t&&(0,S.jsx)(`small`,{children:t})]}),De=({label:e,hint:t,value:n,onChange:r,suggestions:i=[]})=>{let a=U(),o=e=>[...new Set(e.filter(e=>typeof e==`string`).map(e=>e.trim()).filter(Boolean))];if(a){let a=[...new Set([...n,...i])];return(0,S.jsxs)(P,{as:`div`,children:[(0,S.jsx)(`span`,{className:`label`,children:e}),t&&(0,S.jsx)(`small`,{children:t}),(0,S.jsx)(V,{selector:{select:{multiple:!0,custom_value:!0,mode:`dropdown`,sort:!1,options:a}},value:n,label:e,onChange:e=>r(Array.isArray(e)?o(e):[])})]})}return(0,S.jsxs)(P,{children:[(0,S.jsx)(`span`,{className:`label`,children:e}),(0,S.jsx)(`input`,{type:`text`,value:n.join(`, `),onChange:e=>r(o(e.target.value.split(`,`)))}),t&&(0,S.jsx)(`small`,{children:t})]})},G=({label:e,hint:t,value:n,onChange:r,min:i,max:a,step:o=1,unit:s})=>{let c=U(),l=e=>{let t=Number(e);e!==``&&e!==null&&Number.isFinite(t)&&r(t)};return c?(0,S.jsx)(V,{selector:{number:{min:i,max:a,step:o,mode:`box`,unit_of_measurement:s}},value:n,label:e,helper:t,onChange:l}):(0,S.jsxs)(P,{children:[(0,S.jsx)(`span`,{className:`label`,children:e}),(0,S.jsx)(`input`,{type:`number`,value:n,min:i,max:a,step:o,onChange:e=>l(e.target.value)}),t&&(0,S.jsx)(`small`,{children:t})]})},Oe=({label:e,hint:t,value:n,onChange:r,min:i,max:a,step:o,unit:s,scale:c=1})=>{let l=U(),u=Math.round(n*c*1e3)/1e3,d=e=>{let t=Number(e);Number.isFinite(t)&&r(t/c)};return l?(0,S.jsx)(V,{selector:{number:{min:i,max:a,step:o,mode:`slider`,unit_of_measurement:s}},value:u,label:e,helper:t,onChange:d}):(0,S.jsxs)(P,{children:[(0,S.jsxs)(`span`,{className:`label`,children:[e,`: `,u,s?` ${s}`:``]}),(0,S.jsx)(`input`,{type:`range`,value:u,min:i,max:a,step:o,onChange:e=>d(e.target.value)}),t&&(0,S.jsx)(`small`,{children:t})]})},K=({label:e,hint:t,value:n,onChange:r})=>U()?(0,S.jsx)(V,{selector:{boolean:{}},value:n,label:e,helper:t,onChange:e=>r(!!e)}):(0,S.jsxs)(Ce,{children:[(0,S.jsx)(`input`,{type:`checkbox`,checked:n,onChange:e=>r(e.target.checked)}),(0,S.jsxs)(`span`,{children:[e,t&&(0,S.jsx)(`small`,{children:t})]})]}),ke=e=>Array.isArray(e)&&e.length===3&&e.every(e=>typeof e==`number`)?`#${e.map(e=>Math.round(Math.min(255,Math.max(0,e))).toString(16).padStart(2,`0`)).join(``)}`:null,Ae=e=>[1,3,5].map(t=>parseInt(e.slice(t,t+2),16)||0),je=({label:e,hint:t,value:n,onChange:r})=>U()?(0,S.jsx)(V,{selector:{color_rgb:{}},value:Ae(n),label:e,helper:t,onChange:e=>{let t=ke(e);t&&r(t)}}):(0,S.jsxs)(P,{children:[(0,S.jsx)(`span`,{className:`label`,children:e}),(0,S.jsx)(`input`,{type:`color`,value:n,onChange:e=>r(e.target.value)}),t&&(0,S.jsx)(`small`,{children:t})]}),q=({label:e,hint:t,value:n,onChange:r,options:i})=>U()?(0,S.jsx)(V,{selector:{select:{options:i,mode:`dropdown`}},value:n,label:e,helper:t,required:!0,onChange:e=>typeof e==`string`&&r(e)}):(0,S.jsxs)(P,{children:[(0,S.jsx)(`span`,{className:`label`,children:e}),(0,S.jsx)(`select`,{value:n,onChange:e=>r(e.target.value),children:i.map(e=>(0,S.jsx)(`option`,{value:e.value,children:e.label},e.value))}),t&&(0,S.jsx)(`small`,{children:t})]}),J=({label:e,hint:t,value:n,onChange:r})=>U()?(0,S.jsx)(V,{selector:{icon:{}},value:n,label:e,helper:t,onChange:e=>r(typeof e==`string`?e:``)}):(0,S.jsxs)(P,{children:[(0,S.jsx)(`span`,{className:`label`,children:e}),(0,S.jsxs)(`span`,{className:`with-icon`,children:[(0,S.jsx)(`input`,{type:`text`,value:n,placeholder:`mdi:…`,onChange:e=>r(e.target.value)}),n&&(0,S.jsx)(h,{icon:n,size:`24px`})]}),t&&(0,S.jsx)(`small`,{children:t})]}),Me=({label:e,hint:t,value:n,onChange:r,accept:i})=>{let a=U(),o=(0,x.useMemo)(()=>n.startsWith(`media-source://`)?{media_content_id:n,media_content_type:i[0]}:void 0,[n,i]);return a?(0,S.jsx)(V,{selector:{media:{accept:i}},value:o,label:e,helper:t,onChange:e=>r(e?.media_content_id??``)}):(0,S.jsx)(W,{label:e,hint:t,value:n,onChange:r})},Ne=(0,x.createContext)([]),Pe=({children:e})=>{let t=a(l(e=>{let t={};for(let[n,r]of Object.entries(e.entities))t[n]=r.attributes.friendly_name||n;return t})),n=(0,x.useMemo)(()=>Object.entries(t).map(([e,t])=>({id:e,name:t})).sort((e,t)=>e.id.localeCompare(t.id)),[t]);return(0,S.jsx)(Ne.Provider,{value:n,children:e})},Fe=(e,t={},n)=>({entity:{...e?.length||n?{filter:{...e?.length?{domain:e}:{},...n?{integration:n}:{}}}:{},...t}}),Ie=({value:e,domains:t,onChange:n})=>{let r=(0,x.useContext)(Ne),i=(0,x.useId)(),a=(0,x.useMemo)(()=>t?.length?r.filter(e=>t.includes(e.id.split(`.`)[0])):r,[r,t]);return(0,S.jsxs)(S.Fragment,{children:[(0,S.jsx)(`input`,{type:`text`,list:i,value:e,placeholder:t?.length?`${t[0]}.…`:`domain.object_id`,onChange:e=>n(e.target.value.trim())}),(0,S.jsx)(`datalist`,{id:i,children:a.map(e=>(0,S.jsx)(`option`,{value:e.id,children:e.name},e.id))})]})},Y=({label:e,hint:t,value:n,onChange:r,domains:a,integration:o})=>{let s=U(),c=(0,x.useContext)(Ne),l=i();if(s)return(0,S.jsx)(V,{selector:Fe(a,{},o),value:n||void 0,label:e,helper:t,onChange:e=>r(typeof e==`string`?e:``)});let u=c.find(e=>e.id===n);return(0,S.jsxs)(P,{children:[(0,S.jsx)(`span`,{className:`label`,children:e}),(0,S.jsx)(Ie,{value:n,domains:a,onChange:r}),n&&(0,S.jsx)(`small`,{children:u?u.name:l(`not_found`)}),t&&(0,S.jsx)(`small`,{children:t})]})},X=({label:e,hint:t,value:n,onChange:r,domains:a,max:o})=>{let s=U(),c=i(),l=e=>r(o===void 0?e:e.slice(0,o));return s?(0,S.jsx)(V,{selector:Fe(a,{multiple:!0,reorder:!0}),value:n,label:e,helper:t,onChange:e=>l(Array.isArray(e)?e.filter(e=>typeof e==`string`):[])}):(0,S.jsxs)(P,{as:`div`,children:[(0,S.jsx)(`span`,{className:`label`,children:e}),n.map((e,t)=>(0,S.jsxs)(F,{$columns:`minmax(0, 1fr) auto`,children:[(0,S.jsx)(Ie,{value:e,domains:a,onChange:e=>l(n.map((n,r)=>r===t?e:n))}),(0,S.jsx)(Z,{index:t,length:n.length,onMove:e=>l(L(n,t,e)),onRemove:()=>l(n.filter((e,n)=>n!==t))})]},t)),(o===void 0||n.length<o)&&(0,S.jsx)(I,{type:`button`,className:`add`,onClick:()=>l([...n,``]),title:c(`add`),"aria-label":c(`add`),children:(0,S.jsx)(h,{icon:`mdi:plus`})}),t&&(0,S.jsx)(`small`,{children:t})]})},Z=({index:e,length:t,onMove:n,onRemove:r,onDuplicate:a})=>{let o=i();return(0,S.jsxs)(`span`,{className:`list-controls`,children:[(0,S.jsx)(I,{type:`button`,disabled:e===0,onClick:()=>n(e-1),title:o(`move_up`),"aria-label":o(`move_up`),children:(0,S.jsx)(h,{icon:`mdi:arrow-up`})}),(0,S.jsx)(I,{type:`button`,disabled:e===t-1,onClick:()=>n(e+1),title:o(`move_down`),"aria-label":o(`move_down`),children:(0,S.jsx)(h,{icon:`mdi:arrow-down`})}),a&&(0,S.jsx)(I,{type:`button`,onClick:a,title:o(`duplicate`),"aria-label":o(`duplicate`),children:(0,S.jsx)(h,{icon:`mdi:content-copy`})}),(0,S.jsx)(I,{type:`button`,$danger:!0,onClick:r,title:o(`remove`),"aria-label":o(`remove`),children:(0,S.jsx)(h,{icon:`mdi:delete-outline`})})]})},Q=({title:e,lead:t})=>(0,S.jsxs)(S.Fragment,{children:[(0,S.jsx)(`h2`,{children:e}),t&&(0,S.jsx)(`p`,{className:`lead`,children:t})]}),Le=y.span`
  margin-left: 8px;
  padding: 1px 8px;
  border-radius: 999px;
  font-size: 12px;
  font-weight: 400;
  background: var(--secondary-background-color, #282828);
  color: var(--secondary-text-color, #9b9b9b);
`,Re=({dashboards:e})=>{let t=i(),n=c(),[r,a]=(0,x.useState)(null);(0,x.useEffect)(()=>{n?.sendMessagePromise({type:`better_wall_dashboard/users`}).then(e=>a(e.users)).catch(()=>a([]))},[n]);let o=(0,x.useCallback)(async(e,t)=>{if(!n)return;a(n=>n?.map(n=>n.id===e.id?{...n,...t}:n)??null);let r=await n.sendMessagePromise({type:`better_wall_dashboard/save_user`,user_id:e.id,...t});a(t=>t?.map(t=>t.id===e.id?{...t,...r}:t)??null)},[n]);return(0,S.jsxs)(S.Fragment,{children:[(0,S.jsx)(Q,{title:t(`tab_users`),lead:t(`lead_users`)}),r?.map(n=>(0,S.jsxs)(j,{open:!n.is_admin||void 0,children:[(0,S.jsxs)(`summary`,{children:[(0,S.jsx)(h,{className:`icon`,icon:n.is_admin?`mdi:shield-account-outline`:`mdi:tablet`}),(0,S.jsxs)(`span`,{className:`text`,children:[(0,S.jsxs)(`span`,{children:[n.name,n.is_admin&&(0,S.jsx)(Le,{children:t(`admin`)}),!n.is_active&&(0,S.jsx)(Le,{children:t(`inactive`)})]}),(0,S.jsx)(`span`,{className:`secondary`,children:e.find(e=>e.id===n.dashboard)?.name??n.dashboard})]})]}),(0,S.jsxs)(`div`,{className:`fold-body`,children:[(0,S.jsx)(q,{label:t(`assigned_dashboard`),value:n.dashboard,options:e.map(e=>({value:e.id,label:e.name})),onChange:e=>o(n,{dashboard:e})}),(0,S.jsxs)(F,{children:[(0,S.jsx)(K,{label:t(`kiosk`),hint:t(`kiosk_user_hint`),value:n.kiosk,onChange:e=>o(n,{kiosk:e})}),(0,S.jsx)(K,{label:t(`start_page`),hint:t(`start_page_hint`),value:!!n.default_panel,onChange:e=>o(n,{default_panel:e})})]}),(0,S.jsx)(K,{label:t(`sidebar_only`),hint:t(`sidebar_only_hint`),value:n.sidebar_only,onChange:e=>o(n,{sidebar_only:e})})]})]},n.id))]})},ze=`/better_wall_dashboard/static/icon.png`,Be=y(ye)`
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
`,Ve=({open:e,onClose:t})=>{let n=i(),r=c(),a=(0,x.useRef)(null),[s,l]=(0,x.useState)(null),u=ee();(0,x.useEffect)(()=>{let t=a.current;t&&(e&&!t.open&&t.showModal(),!e&&t.open&&t.close())}),(0,x.useEffect)(()=>{e&&r?.sendMessagePromise({type:`better_wall_dashboard/version`}).then(l).catch(()=>void 0)},[e,r]);let d=!!(u&&s&&s.app!==u);return(0,S.jsxs)(Be,{ref:a,tabIndex:-1,onClose:()=>e&&t(),onClick:e=>e.target===e.currentTarget&&t(),children:[(0,S.jsxs)(`div`,{className:`head`,children:[(0,S.jsx)(`img`,{src:ze,alt:``}),(0,S.jsx)(`h2`,{children:`Better Wall Dashboard`})]}),(0,S.jsx)(`p`,{className:`muted`,children:n(`about_blurb`)}),(0,S.jsx)(`table`,{children:(0,S.jsxs)(`tbody`,{children:[(0,S.jsxs)(`tr`,{children:[(0,S.jsx)(`th`,{children:n(`about_version`)}),(0,S.jsx)(`td`,{children:s?.version??`–`})]}),(0,S.jsxs)(`tr`,{children:[(0,S.jsx)(`th`,{children:n(`about_page`)}),(0,S.jsx)(`td`,{children:u?u.slice(0,12):`–`})]})]})}),d&&(0,S.jsxs)(S.Fragment,{children:[(0,S.jsx)(`p`,{children:n(`update_available`)}),(0,S.jsx)(C,{appearance:`filled`,icon:`mdi:reload`,onClick:()=>{let e=o(),t=null;if(e&&s){let n=new URL(e);n.searchParams.set(`v`,s.app),t=n.toString()}f(t)},children:n(`reload`)})]}),(s?.documentation||s?.issues)&&(0,S.jsxs)(`p`,{children:[s.documentation&&(0,S.jsx)(`a`,{href:s.documentation,target:`_blank`,rel:`noopener noreferrer`,children:n(`about_repo`)}),s.documentation&&s.issues&&` · `,s.issues&&(0,S.jsx)(`a`,{href:s.issues,target:`_blank`,rel:`noopener noreferrer`,children:n(`about_issues`)})]}),(0,S.jsx)(I,{type:`button`,className:`shut`,"aria-label":n(`close`),title:n(`close`),onClick:t,children:(0,S.jsx)(h,{icon:`mdi:close`})})]})},He=({request:e,onAnswer:t})=>{let n=i(),r=(0,x.useRef)(null);return(0,x.useEffect)(()=>{let t=r.current;t&&(e&&!t.open&&t.showModal(),!e&&t.open&&t.close())}),(0,S.jsx)(ye,{ref:r,role:`alertdialog`,tabIndex:-1,onCancel:e=>{e.preventDefault(),t(!1)},onClick:e=>e.target===e.currentTarget&&t(!1),children:e&&(0,S.jsxs)(S.Fragment,{children:[(0,S.jsx)(`h2`,{children:e.title}),e.text&&(0,S.jsx)(`p`,{className:`muted`,children:e.text}),(0,S.jsxs)(`div`,{className:`actions`,children:[(0,S.jsx)(C,{appearance:`plain`,onClick:()=>t(!1),children:n(`cancel`)}),(0,S.jsx)(C,{appearance:`accent`,danger:e.danger,onClick:()=>t(!0),children:e.confirm})]})]})})};function Ue(){let[e,t]=(0,x.useState)(null);return{confirm:(0,x.useCallback)(e=>new Promise(n=>t({...e,resolve:n})),[]),dialog:(0,S.jsx)(He,{request:e,onAnswer:n=>{e?.resolve(n),t(null)}})}}var We=(0,x.createContext)([]);function Ge(){return(0,x.useContext)(We)}function Ke(e){let t=document.querySelector(`home-assistant`);return t?(t.dispatchEvent(new CustomEvent(`hass-notification`,{bubbles:!0,composed:!0,detail:{message:e,dismissable:!0}})),!0):!1}var qe=({draft:e,update:t})=>{let n=i(),r=n=>t({...e,background:{...e.background,...n}});return(0,S.jsxs)(S.Fragment,{children:[(0,S.jsx)(Q,{title:n(`tab_general`),lead:n(`lead_general`)}),(0,S.jsx)(k,{children:(0,S.jsx)(W,{label:n(`name`),value:e.name,onChange:n=>t({...e,name:n})})}),(0,S.jsxs)(k,{children:[(0,S.jsx)(`h3`,{children:n(`background`)}),(0,S.jsx)(q,{label:n(`background_mode`),value:e.background.mode??`image`,options:[{value:`image`,label:n(`background_mode_image`)},{value:`color`,label:n(`background_mode_color`)}],onChange:e=>r({mode:e===`color`?`color`:`image`})}),e.background.mode===`color`?(0,S.jsx)(je,{label:n(`background_color`),value:e.background.color??`#131313`,onChange:e=>r({color:e})}):(0,S.jsxs)(S.Fragment,{children:[(0,S.jsx)(Me,{label:n(`background_media`),hint:n(`background_media_hint`),accept:[`image/*`],value:e.background.image,onChange:e=>r({image:e})}),(0,S.jsx)(W,{label:n(`background_image`),hint:n(`background_image_hint`),type:`url`,value:e.background.image.startsWith(`media-source://`)?``:e.background.image,onChange:e=>r({image:e})}),(0,S.jsxs)(F,{children:[(0,S.jsx)(Oe,{label:n(`background_dim`),value:e.background.dim,min:0,max:95,step:5,unit:`%`,scale:100,onChange:e=>r({dim:e})}),(0,S.jsx)(Oe,{label:n(`background_blur`),value:e.background.blur,min:0,max:40,step:1,unit:`px`,onChange:e=>r({blur:e})})]})]})]}),(0,S.jsxs)(k,{children:[(0,S.jsx)(`h3`,{children:n(`security_heading`)}),(0,S.jsx)(W,{label:n(`pin`),hint:n(`pin_hint`),type:`password`,value:e.pin??``,onChange:n=>t({...e,pin:n.replace(/\D/g,``).slice(0,8)})})]})]})},Je=({item:e})=>{let t=b(e.entity||void 0),n=i(),r=e.name||t?.attributes.friendly_name||e.entity||n(`not_set`);return(0,S.jsxs)(S.Fragment,{children:[(0,S.jsx)(h,{className:`icon`,icon:e.icon||t?.attributes.icon||oe(e.entity)}),(0,S.jsxs)(`span`,{className:`text`,children:[(0,S.jsx)(`span`,{children:r}),e.entity&&(0,S.jsx)(`span`,{className:`secondary`,children:e.entity})]})]})},Ye=({items:e,max:t,domains:n,addLabel:r,onChange:a})=>{let o=i(),s=(t,n)=>a(B(e,t,{...e[t],...n}));return(0,S.jsxs)(S.Fragment,{children:[e.length===0&&(0,S.jsxs)(M,{children:[(0,S.jsx)(h,{icon:`mdi:playlist-plus`}),(0,S.jsx)(`span`,{children:o(`empty_list`)})]}),e.map((t,r)=>(0,S.jsxs)(j,{open:!t.entity||void 0,children:[(0,S.jsxs)(`summary`,{children:[(0,S.jsx)(Je,{item:t}),(0,S.jsx)(`span`,{onClick:e=>e.preventDefault(),children:(0,S.jsx)(Z,{index:r,length:e.length,onMove:t=>a(L(e,r,t)),onRemove:()=>a(e.filter((e,t)=>t!==r))})})]}),(0,S.jsxs)(`div`,{className:`fold-body`,children:[(0,S.jsx)(Y,{label:o(`entity`),value:t.entity,domains:n,onChange:e=>s(r,{entity:e})}),(0,S.jsxs)(F,{children:[(0,S.jsx)(W,{label:o(`name`),hint:o(`name_hint`),value:t.name,onChange:e=>s(r,{name:e})}),(0,S.jsx)(J,{label:o(`icon`),value:t.icon,onChange:e=>s(r,{icon:e})})]})]})]},t.id)),(0,S.jsx)(`div`,{children:(0,S.jsxs)(C,{icon:`mdi:plus`,appearance:`filled`,disabled:e.length>=t,onClick:()=>a([...e,{id:R(),entity:``,name:``,icon:``}]),children:[r,` (`,e.length,`/`,t,`)`]})})]})},Xe=[`input_boolean`,`switch`,`binary_sensor`],Ze=({draft:e,update:t,part:n})=>{let r=i(),a=Ge(),o=e.sidebar,c=n=>t({...e,sidebar:n}),l=(e,t)=>c({...o,[e]:{...o[e],...t}}),u=w.find(e=>e.part===n)?.label??`tab_sidebar`,d=(0,S.jsx)(Q,{title:r(u),lead:r(`lead_${n}`)});switch(n){case`clock`:return(0,S.jsxs)(S.Fragment,{children:[d,(0,S.jsxs)(k,{children:[(0,S.jsx)(q,{label:r(`clock_style`),value:o.clock?.style??`digital`,options:[{value:`digital`,label:r(`clock_digital`)},{value:`analog`,label:r(`clock_analog`)}],onChange:e=>l(`clock`,{style:e})}),(0,S.jsx)(K,{label:r(`clock_seconds`),value:!!o.clock?.seconds,onChange:e=>l(`clock`,{seconds:e})})]})]});case`status`:return(0,S.jsxs)(S.Fragment,{children:[d,(0,S.jsxs)(k,{children:[(0,S.jsx)(`h3`,{children:r(`status_icons`)}),(0,S.jsx)(`p`,{children:r(`status_icons_hint`)}),(0,S.jsx)(Ye,{items:o.status.icons??[],max:g.statusIcons,domains:Xe,addLabel:r(`add_status_icon`),onChange:e=>l(`status`,{icons:e})})]}),(0,S.jsxs)(k,{children:[(0,S.jsx)(`h3`,{children:r(`wifi_heading`)}),(0,S.jsx)(Y,{label:r(`wifi_signal`),hint:r(`wifi_signal_hint`),value:o.status.wifi_signal,domains:[`sensor`],onChange:e=>l(`status`,{wifi_signal:e})})]}),(0,S.jsxs)(k,{children:[(0,S.jsx)(`h3`,{children:r(`guest_wifi`)}),(0,S.jsx)(Y,{label:r(`guest_qr_image`),hint:r(`guest_qr_image_hint`),value:o.guest_wifi.qr_image,domains:[`image`],onChange:e=>l(`guest_wifi`,{qr_image:e})}),(0,S.jsxs)(F,{children:[(0,S.jsx)(W,{label:r(`network`),value:o.guest_wifi.ssid,onChange:e=>l(`guest_wifi`,{ssid:e})}),(0,S.jsx)(W,{label:r(`password`),type:`password`,value:o.guest_wifi.password,onChange:e=>l(`guest_wifi`,{password:e})})]}),(0,S.jsxs)(F,{children:[(0,S.jsx)(q,{label:r(`security`),value:o.guest_wifi.security,options:[{value:`WPA`,label:`WPA/WPA2/WPA3`},{value:`WEP`,label:`WEP`},{value:`nopass`,label:r(`open_network`)}],onChange:e=>l(`guest_wifi`,{security:e})}),(0,S.jsx)(K,{label:r(`hidden_network`),value:o.guest_wifi.hidden,onChange:e=>l(`guest_wifi`,{hidden:e})})]})]})]});case`climate`:return(0,S.jsxs)(S.Fragment,{children:[d,(0,S.jsxs)(k,{children:[(0,S.jsx)(Y,{label:r(`temperature`),value:o.climate.temperature,domains:[`sensor`],onChange:e=>l(`climate`,{temperature:e})}),(0,S.jsx)(Y,{label:r(`humidity`),value:o.climate.humidity,domains:[`sensor`],onChange:e=>l(`climate`,{humidity:e})}),(0,S.jsx)(G,{label:r(`hours`),value:o.climate.hours,min:1,max:168,unit:`h`,onChange:e=>l(`climate`,{hours:e})})]})]});case`persons`:return(0,S.jsxs)(S.Fragment,{children:[d,(0,S.jsx)(X,{label:r(`persons`),value:o.persons,domains:[`person`],onChange:e=>c({...o,persons:e})})]});case`openings`:return(0,S.jsxs)(S.Fragment,{children:[d,(0,S.jsx)(X,{label:r(`openings`),hint:r(`openings_hint`),value:o.openings,domains:[`binary_sensor`,`cover`,`lock`,`sensor`],onChange:e=>c({...o,openings:e})})]});case`travel`:return(0,S.jsxs)(S.Fragment,{children:[d,(0,S.jsxs)(k,{children:[(0,S.jsx)(Y,{label:r(`travel_sensor`),value:o.travel.entity,domains:[`sensor`],onChange:e=>l(`travel`,{entity:e})}),(0,S.jsx)(W,{label:r(`name`),hint:r(`travel_name_hint`),value:o.travel.name,onChange:e=>l(`travel`,{name:e})})]}),(0,S.jsxs)(k,{children:[(0,S.jsx)(`h3`,{children:r(`map`)}),(0,S.jsx)(W,{label:r(`maps_api_key`),hint:r(`maps_api_key_hint`),type:`password`,value:o.travel.maps_api_key,onChange:e=>l(`travel`,{maps_api_key:e})}),(0,S.jsx)(W,{label:r(`map_url`),hint:r(`map_url_hint`),type:`url`,value:o.travel.map_url,onChange:e=>l(`travel`,{map_url:e})})]})]});case`quick`:return(0,S.jsxs)(S.Fragment,{children:[d,(0,S.jsx)(Ye,{items:o.quick_actions,max:g.quickActions,addLabel:r(`add_quick_action`),onChange:e=>c({...o,quick_actions:e})})]});case`calendar`:return(0,S.jsxs)(S.Fragment,{children:[d,(0,S.jsxs)(k,{children:[(0,S.jsx)(X,{label:r(`calendars`),value:o.calendar.entities,domains:[`calendar`],onChange:e=>l(`calendar`,{entities:e})}),(0,S.jsx)(G,{label:r(`days`),hint:r(`calendar_days_hint`),value:o.calendar.days,min:1,max:g.calendarDays,onChange:e=>l(`calendar`,{days:e})})]})]});case`weather`:return(0,S.jsxs)(S.Fragment,{children:[d,(0,S.jsxs)(k,{children:[(0,S.jsx)(Y,{label:r(`weather_entity`),value:o.weather.entity,domains:[`weather`],onChange:e=>l(`weather`,{entity:e})}),(0,S.jsx)(Y,{label:r(`outdoor_temperature`),hint:r(`outdoor_temperature_hint`),value:o.weather.temperature,domains:[`sensor`],onChange:e=>l(`weather`,{temperature:e})})]})]});case`notifications`:return(0,S.jsxs)(S.Fragment,{children:[d,(0,S.jsxs)(k,{children:[(0,S.jsx)(K,{label:r(`notifications_enabled`),value:o.notifications.enabled,onChange:e=>l(`notifications`,{enabled:e})}),(0,S.jsx)(De,{label:r(`notifications_prefix`),hint:r(`notifications_prefix_hint`),suggestions:m([...a,e]),value:s(o.notifications),onChange:e=>l(`notifications`,{prefixes:e})})]}),(0,S.jsxs)(k,{children:[(0,S.jsx)(`h3`,{children:r(`settings`)}),(0,S.jsx)(K,{label:r(`settings_enabled`),hint:r(`settings_enabled_hint`),value:o.settings?.enabled!==!1,onChange:e=>l(`settings`,{enabled:e})})]})]});case`system`:return(0,S.jsxs)(S.Fragment,{children:[d,(0,S.jsx)(Ye,{items:o.system,max:g.system,domains:[`sensor`],addLabel:r(`add_statistic`),onChange:e=>c({...o,system:e})})]})}},Qe=y.textarea`
  min-height: 55vh;
  padding: 12px;
  border-radius: 8px;
  border: 1px solid var(--divider-color, rgba(225, 225, 225, 0.12));
  background: var(--code-editor-background-color, var(--secondary-background-color, #282828));
  color: inherit;
  font-family: var(--ha-font-family-code, ui-monospace, monospace);
  font-size: 13px;
  resize: vertical;
`,$e=y.p`
  margin: 0;
  color: var(--error-color, #db4437);
`,et=({draft:e,update:t})=>{let n=i(),[r,a]=(0,x.useState)(()=>JSON.stringify(e,null,2)),[o,s]=(0,x.useState)(!1);return(0,S.jsxs)(S.Fragment,{children:[(0,S.jsx)(Q,{title:n(`tab_json`),lead:n(`json_hint`)}),(0,S.jsx)(Qe,{value:r,spellCheck:!1,onChange:e=>{a(e.target.value),s(!1)}}),o&&(0,S.jsx)($e,{children:n(`json_invalid`)}),(0,S.jsx)(`div`,{children:(0,S.jsx)(C,{icon:`mdi:check`,appearance:`filled`,onClick:()=>{try{t({...JSON.parse(r),id:e.id})}catch{s(!0)}},children:n(`apply`)})})]})};function tt(){let e=a(e=>{let t=new Set(Object.values(e.entitiesRegistryDisplay).map(e=>e.platform));return ne.filter(e=>!e.integration||t.has(e.integration)).map(e=>e.type).join(` `)});return ne.filter(t=>e.split(` `).includes(t.type))}var nt=({tile:e,onChange:t})=>{let n=i(),r=b(d(e.entity||void 0))?.attributes.options??[],a=Array.isArray(e.options.hidden_scenes)?e.options.hidden_scenes:[],o=n=>t({...e.options,...n});return(0,S.jsxs)(S.Fragment,{children:[r.length>0&&(0,S.jsxs)(P,{as:`div`,children:[(0,S.jsx)(`span`,{className:`label`,children:n(`bl_shown_scenes`)}),(0,S.jsx)(`small`,{children:n(`bl_shown_scenes_hint`)}),r.map(e=>(0,S.jsx)(K,{label:e,value:!a.includes(e),onChange:t=>o({hidden_scenes:t?a.filter(t=>t!==e):[...a.filter(e=>r.includes(e)),e]})},e))]}),(0,S.jsx)(K,{label:n(`light_hide_presets`),hint:n(`light_hide_presets_hint`),value:e.options.hide_presets===!0,onChange:e=>o({hide_presets:e})}),(0,S.jsxs)(F,{children:[(0,S.jsx)(Y,{label:n(`bl_button_entity`),hint:n(`bl_button_entity_hint`),value:typeof e.options.button_entity==`string`?e.options.button_entity:``,onChange:e=>o({button_entity:e})}),(0,S.jsx)(J,{label:n(`bl_button_icon`),value:typeof e.options.button_icon==`string`?e.options.button_icon:``,onChange:e=>o({button_icon:e})})]})]})},rt=({value:e,onChange:t})=>{let[n,r]=(0,x.useState)(()=>Object.keys(e).length?JSON.stringify(e):``),[a,o]=(0,x.useState)(!1),s=i();return(0,S.jsxs)(P,{children:[(0,S.jsx)(`span`,{className:`label`,children:s(`options_json`)}),(0,S.jsx)(`input`,{type:`text`,value:n,placeholder:`{"hours": 24, "color": "#03a9f4"}`,onChange:e=>{r(e.target.value);try{let n=e.target.value.trim()?JSON.parse(e.target.value):{};if(n&&typeof n==`object`&&!Array.isArray(n)){o(!1),t(n);return}}catch{}o(!0)}}),a&&(0,S.jsx)(`small`,{children:s(`json_invalid`)})]})},it=({tile:e})=>{let t=i(),n=b(e.entity||void 0),r=v[e.type],a=e.name||n?.attributes.friendly_name||e.entity||(r?t(r.label):e.type);return(0,S.jsxs)(S.Fragment,{children:[(0,S.jsx)(h,{className:`icon`,icon:e.icon||r?.icon||`mdi:square-rounded-outline`}),(0,S.jsxs)(`span`,{className:`text`,children:[(0,S.jsx)(`span`,{children:a}),(0,S.jsxs)(`span`,{className:`secondary`,children:[r?t(r.label):e.type,` · `,e.w,` × `,e.h]})]})]})},at=({tiles:e,columns:t,rows:n,onChange:r})=>{let a=i(),o=tt(),s=(t,n)=>r(B(e,t,{...e[t],...n}));return(0,S.jsxs)(S.Fragment,{children:[e.length===0&&(0,S.jsxs)(M,{children:[(0,S.jsx)(h,{icon:`mdi:view-grid-plus-outline`}),(0,S.jsx)(`span`,{children:a(`empty_tiles`)})]}),e.map((i,c)=>{let l=v[i.type];return(0,S.jsxs)(j,{open:!i.entity&&l?.needsEntity!==!1||void 0,children:[(0,S.jsxs)(`summary`,{children:[(0,S.jsx)(it,{tile:i}),(0,S.jsx)(`span`,{onClick:e=>e.preventDefault(),children:(0,S.jsx)(Z,{index:c,length:e.length,onMove:t=>r(L(e,c,t)),onRemove:()=>r(e.filter((e,t)=>t!==c)),onDuplicate:()=>r([...e.slice(0,c+1),{...i,id:R()},...e.slice(c+1)])})})]}),(0,S.jsxs)(`div`,{className:`fold-body`,children:[(0,S.jsx)(q,{label:a(`type`),value:i.type,options:[...o.map(e=>({value:e.type,label:a(e.label)})),...o.some(e=>e.type===i.type)?[]:[{value:i.type,label:l?a(l.label):i.type}]],onChange:e=>{let r=v[e]?.size??[1,1];s(c,{type:e,w:Math.min(r[0],t),h:Math.min(r[1],n)})}}),l?.needsEntity!==!1&&(0,S.jsx)(Y,{label:a(`entity`),value:i.entity,domains:l?.domains,integration:l?.pickerIntegration,onChange:e=>s(c,{entity:e})}),(0,S.jsxs)(F,{children:[(0,S.jsx)(W,{label:a(`name`),hint:a(`name_hint`),value:i.name,onChange:e=>s(c,{name:e})}),(0,S.jsx)(J,{label:a(`icon`),value:i.icon,onChange:e=>s(c,{icon:e})})]}),(0,S.jsxs)(F,{children:[(0,S.jsx)(G,{label:a(`width`),value:i.w,min:1,max:t,onChange:e=>s(c,{w:Math.max(1,Math.min(t,e))})}),(0,S.jsx)(G,{label:a(`height`),value:i.h,min:1,max:n,onChange:e=>s(c,{h:Math.max(1,Math.min(n,e))})})]}),i.type===`sensor`&&(0,S.jsx)(rt,{value:i.options,onChange:e=>s(c,{options:e})}),i.type===`entity`&&i.entity.startsWith(`light.`)&&(0,S.jsx)(K,{label:a(`light_hide_presets`),hint:a(`light_hide_presets_hint`),value:i.options.hide_presets===!0,onChange:e=>s(c,{options:{...i.options,hide_presets:e}})}),(i.type===`cover`||i.type===`adaptive_cover`)&&(0,S.jsx)(q,{label:a(`cover_active_when`),hint:a(`cover_active_when_hint`),value:u.includes(i.options.active_when)?String(i.options.active_when):`open`,options:u.map(e=>({value:e,label:a(`cover_active_${e}`)})),onChange:e=>s(c,{options:{...i.options,active_when:e}})}),i.type===`better_lighting`&&(0,S.jsx)(nt,{tile:i,onChange:e=>s(c,{options:e})})]})]},i.id)}),(0,S.jsx)(`div`,{children:(0,S.jsx)(C,{icon:`mdi:plus`,appearance:`filled`,disabled:e.length>=g.tiles,onClick:()=>r([...e,{id:R(),type:`entity`,entity:``,name:``,icon:``,w:1,h:1,options:{}}]),children:a(`add_tile`)})})]})},ot=()=>({id:R(),name:``,icon:``,status:[],columns:2,rows:2,square:!0,tiles:[]}),st=()=>({id:R(),columns:[75,25],rows:[50,50],sections:[]}),ct=e=>({...z(e),id:R(),sections:e.sections.map(e=>({...z(e),id:R(),tiles:e.tiles.map(e=>({...e,id:R()}))}))}),lt=e=>{let t=e.split(/[,/ ]+/).filter(Boolean).map(Number);return t.length&&t.length<=3&&t.every(e=>Number.isFinite(e)&&e>0)?t:null},ut=({label:e,hint:t,value:n,onChange:r})=>(0,S.jsx)(W,{label:e,hint:t,value:n.join(`, `),onChange:e=>{let t=lt(e);t&&r(t)}}),dt=({draft:e,update:t,open:n})=>{let r=i(),a=e.pages,o=n=>t({...e,pages:n});return(0,S.jsxs)(S.Fragment,{children:[(0,S.jsx)(Q,{title:r(`tab_pages`),lead:r(`lead_pages`)}),(0,S.jsx)(A,{children:a.map((e,t)=>(0,S.jsxs)(`li`,{children:[(0,S.jsxs)(`button`,{type:`button`,className:`open`,onClick:()=>n({kind:`page`,page:t}),children:[(0,S.jsx)(h,{className:`icon`,icon:`mdi:book-open-page-variant-outline`}),(0,S.jsxs)(`span`,{className:`text`,children:[(0,S.jsx)(`span`,{children:r(`page_n`,{n:t+1})}),(0,S.jsx)(`span`,{className:`secondary`,children:e.sections.map(e=>e.name).filter(Boolean).join(` · `)||r(`no_sections`)})]})]}),(0,S.jsx)(Z,{index:t,length:a.length,onMove:e=>o(L(a,t,e)),onDuplicate:a.length<g.pages?()=>o([...a.slice(0,t+1),ct(e),...a.slice(t+1)]):void 0,onRemove:()=>a.length>1&&o(a.filter((e,n)=>n!==t))})]},e.id))}),(0,S.jsx)(`div`,{children:(0,S.jsx)(C,{icon:`mdi:plus`,appearance:`filled`,disabled:a.length>=g.pages,onClick:()=>{o([...a,st()]),n({kind:`page`,page:a.length})},children:r(`add_page`)})})]})},ft=({draft:e,update:t,open:n,page:r})=>{let a=i(),o=e.pages[r],s=n=>t({...e,pages:B(e.pages,r,{...o,...n})}),c=o.columns.length*o.rows.length;return(0,S.jsxs)(S.Fragment,{children:[(0,S.jsx)(Q,{title:a(`page_n`,{n:r+1}),lead:a(`lead_page`)}),(0,S.jsxs)(k,{children:[(0,S.jsx)(`h3`,{children:a(`layout`)}),(0,S.jsxs)(F,{children:[(0,S.jsx)(ut,{label:a(`column_split`),hint:a(`split_hint`),value:o.columns,onChange:e=>s({columns:e})}),(0,S.jsx)(ut,{label:a(`row_split`),hint:a(`split_hint`),value:o.rows,onChange:e=>s({rows:e})})]})]}),(0,S.jsxs)(k,{children:[(0,S.jsx)(`h3`,{children:a(`sections`)}),(0,S.jsx)(`p`,{children:a(`sections_hint`,{cells:c})}),(0,S.jsx)(A,{children:Array.from({length:c},(e,t)=>{let i=o.sections[t];return i?(0,S.jsxs)(`li`,{children:[(0,S.jsxs)(`button`,{type:`button`,className:`open`,onClick:()=>n({kind:`section`,page:r,section:t}),children:[(0,S.jsx)(h,{className:`icon`,icon:i.icon||`mdi:view-grid-outline`}),(0,S.jsxs)(`span`,{className:`text`,children:[(0,S.jsx)(`span`,{children:i.name||a(`section_n`,{n:t+1})}),(0,S.jsxs)(`span`,{className:`secondary`,children:[a(`tiles_count`,{count:i.tiles.length}),` · `,i.columns,` × `,i.rows]})]})]}),(0,S.jsx)(Z,{index:t,length:o.sections.length,onMove:e=>s({sections:L(o.sections,t,e)}),onRemove:()=>s({sections:o.sections.filter((e,n)=>n!==t)})})]},i.id):(0,S.jsx)(`li`,{children:(0,S.jsxs)(`button`,{type:`button`,className:`open`,onClick:()=>{let e=[...o.sections];for(;e.length<=t;)e.push(ot());s({sections:e}),n({kind:`section`,page:r,section:t})},children:[(0,S.jsx)(h,{className:`icon`,icon:`mdi:plus-box-outline`}),(0,S.jsxs)(`span`,{className:`text`,children:[(0,S.jsx)(`span`,{children:a(`add_section`)}),(0,S.jsx)(`span`,{className:`secondary`,children:a(`cell_n`,{n:t+1})})]})]})},`empty-${t}`)})})]})]})},pt=({draft:e,update:t,page:n,section:r})=>{let a=i(),o=e.pages[n],s=o.sections[r],c=i=>t({...e,pages:B(e.pages,n,{...o,sections:B(o.sections,r,{...s,...i})})});return(0,S.jsxs)(S.Fragment,{children:[(0,S.jsx)(Q,{title:s.name||a(`section_n`,{n:r+1}),lead:a(`lead_section`)}),(0,S.jsxs)(k,{children:[(0,S.jsx)(`h3`,{children:a(`section_header`)}),(0,S.jsxs)(F,{children:[(0,S.jsx)(W,{label:a(`name`),value:s.name,onChange:e=>c({name:e})}),(0,S.jsx)(J,{label:a(`icon`),value:s.icon,onChange:e=>c({icon:e})})]}),(0,S.jsx)(X,{label:a(`status_entities`),value:s.status,max:2,domains:[`sensor`,`binary_sensor`],onChange:e=>c({status:e})})]}),(0,S.jsxs)(k,{children:[(0,S.jsx)(`h3`,{children:a(`grid`)}),(0,S.jsxs)(F,{children:[(0,S.jsx)(G,{label:a(`columns`),value:s.columns,min:1,max:g.sectionCells,onChange:e=>c({columns:e})}),(0,S.jsx)(G,{label:a(`rows`),value:s.rows,min:1,max:g.sectionCells,onChange:e=>c({rows:e})})]}),(0,S.jsx)(K,{label:a(`square_cells`),hint:a(`square_cells_hint`),value:s.square,onChange:e=>c({square:e})})]}),(0,S.jsxs)(k,{children:[(0,S.jsx)(`h3`,{children:a(`tiles`)}),(0,S.jsx)(at,{tiles:s.tiles,columns:s.columns,rows:s.rows,onChange:e=>c({tiles:e})})]})]})},mt=({draft:e,update:t,open:n})=>{let r=i(),a=e.buttons,o=n=>t({...e,buttons:n});return(0,S.jsxs)(S.Fragment,{children:[(0,S.jsx)(Q,{title:r(`tab_buttons`),lead:r(`lead_buttons`)}),a.length>0&&(0,S.jsx)(A,{children:a.map((e,t)=>(0,S.jsxs)(`li`,{children:[(0,S.jsxs)(`button`,{type:`button`,className:`open`,onClick:()=>n({kind:`button`,button:t}),children:[(0,S.jsx)(h,{className:`icon`,icon:e.icon||`mdi:gesture-tap`}),(0,S.jsxs)(`span`,{className:`text`,children:[(0,S.jsx)(`span`,{children:e.name||r(`button_n`,{n:t+1})}),(0,S.jsx)(`span`,{className:`secondary`,children:r(`tiles_count`,{count:e.tiles.length})})]})]}),(0,S.jsx)(Z,{index:t,length:a.length,onMove:e=>o(L(a,t,e)),onRemove:()=>o(a.filter((e,n)=>n!==t))})]},e.id))}),(0,S.jsx)(`div`,{children:(0,S.jsxs)(C,{icon:`mdi:plus`,appearance:`filled`,disabled:a.length>=g.buttons,onClick:()=>{o([...a,{id:R(),name:``,icon:`mdi:gesture-tap`,columns:4,tiles:[]}]),n({kind:`button`,button:a.length})},children:[r(`add_button`),` (`,a.length,`/`,g.buttons,`)`]})})]})},ht=({draft:e,update:t,button:n})=>{let r=i(),a=e.buttons[n],o=r=>t({...e,buttons:B(e.buttons,n,{...a,...r})});return(0,S.jsxs)(S.Fragment,{children:[(0,S.jsx)(Q,{title:a.name||r(`button_n`,{n:n+1}),lead:r(`lead_button`)}),(0,S.jsxs)(k,{children:[(0,S.jsxs)(F,{children:[(0,S.jsx)(W,{label:r(`name`),value:a.name,onChange:e=>o({name:e})}),(0,S.jsx)(J,{label:r(`icon`),value:a.icon,onChange:e=>o({icon:e})})]}),(0,S.jsx)(G,{label:r(`columns`),hint:r(`button_columns_hint`),value:a.columns,min:1,max:g.sectionCells,onChange:e=>o({columns:e})})]}),(0,S.jsxs)(k,{children:[(0,S.jsx)(`h3`,{children:r(`tiles`)}),(0,S.jsx)(at,{tiles:a.tiles,columns:a.columns,rows:g.sectionCells,onChange:e=>o({tiles:e})})]})]})},$=[{id:`tab-10`,label:`10″ tablet · 1280×800`,width:1280,height:800},{id:`tab-11`,label:`11″ tablet · 1194×834`,width:1194,height:834},{id:`tab-12`,label:`12″ tablet · 1366×1024`,width:1366,height:1024},{id:`fhd`,label:`Full HD · 1920×1080`,width:1920,height:1080},{id:`small`,label:`7″ panel · 1024×600`,width:1024,height:600}],gt=({view:e,dashboards:t,...n})=>{switch(e.kind){case`general`:return(0,S.jsx)(qe,{...n});case`sidebar`:return(0,S.jsx)(Ze,{...n,part:e.part});case`pages`:return(0,S.jsx)(dt,{...n});case`page`:return(0,S.jsx)(ft,{...n,page:e.page});case`section`:return(0,S.jsx)(pt,{...n,page:e.page,section:e.section});case`buttons`:return(0,S.jsx)(mt,{...n});case`button`:return(0,S.jsx)(ht,{...n,button:e.button});case`users`:return(0,S.jsx)(Re,{dashboards:t});case`json`:return(0,S.jsx)(et,{...n},n.draft.id)}},_t=()=>{let e=i(),t=c(),{narrow:n}=ie(),[r,a]=(0,x.useState)(null),[o,s]=(0,x.useState)(null),[l,u]=(0,x.useState)(!1),[d,f]=(0,x.useState)(``),[ee,te]=(0,x.useState)({kind:`general`}),[ne,re]=(0,x.useState)(()=>new Set),[p,m]=(0,x.useState)(!1),[g,_]=(0,x.useState)(!1),[v,y]=(0,x.useState)(!1),[b,oe]=(0,x.useState)(!1),[se,ce]=(0,x.useState)($[0].id),[w,T]=(0,x.useState)(!1),D=$.find(e=>e.id===se)??$[0],O=(0,x.useCallback)((e,t)=>{s(z(e.dashboards[t]??e.dashboards.default)),u(!1)},[]);(0,x.useEffect)(()=>{t?.sendMessagePromise({type:`better_wall_dashboard/document`}).then(e=>{a(e),O(e,`default`)}).catch(e=>f(String(e?.message??e)))},[t,O]),(0,x.useEffect)(()=>{if(!l)return;let e=e=>e.preventDefault();return window.addEventListener(`beforeunload`,e),()=>window.removeEventListener(`beforeunload`,e)},[l]);let k=(0,x.useCallback)(e=>{s(e),u(!0),f(``)},[]),A=(0,x.useCallback)((e,t)=>{te(e),re(n=>new Set([...n,...ue(e),...t?[t]:[]])),m(!1),_(!1),oe(!1)},[]),j=(0,x.useCallback)(e=>{re(t=>{let n=new Set(t);return n.delete(e)||n.add(e),n})},[]),{confirm:M,dialog:ye}=Ue(),N=async()=>!l||M({title:e(`discard_title`),text:e(`discard_text`),confirm:e(`discard`),danger:!0}),xe=async()=>{if(t&&o){f(e(`saving`));try{let n=await t.sendMessagePromise({type:`better_wall_dashboard/save_dashboard`,dashboard:o});a(e=>e&&{...e,dashboards:{...e.dashboards,[n.dashboard.id]:n.dashboard}}),s(z(n.dashboard)),u(!1),f(e(`saved`))}catch(e){f(String(e?.message??e))}}},P=async()=>{r&&o&&await N()&&(r.dashboards[o.id]?O(r,o.id):O(r,`default`),f(``))},Ce=async e=>{r&&await N()&&(O(r,e),A({kind:`general`}))},F=async t=>{if(_(!1),!r||!await N())return;let n=z(t??r.dashboards.default);s({...n,id:R(),name:t?`${t.name} (2)`:e(`new_dashboard`)}),u(!0),A({kind:`general`})},I=async()=>{if(_(!1),!t||!o)return;let n=e=>Ke(e)||f(e);try{let r=await t.sendMessagePromise({type:`better_wall_dashboard/reload_tablets`,dashboard_id:o.id});n(e(`tablets_reloaded`,{count:r.reached}))}catch(e){n(String(e?.message??e))}},L=async()=>{if(_(!1),!t||!o||!r||o.id==="default"||!await M({title:e(`delete_title`,{name:o.name}),text:e(`confirm_delete`,{name:o.name}),confirm:e(`delete`),danger:!0}))return;r.dashboards[o.id]&&await t.sendMessagePromise({type:`better_wall_dashboard/delete_dashboard`,dashboard_id:o.id});let n={...r.dashboards};delete n[o.id];let i={...r,dashboards:n};a(i),O(i,`default`),A({kind:`general`})},B=(0,x.useMemo)(()=>Object.values(r?.dashboards??{}),[r]),V=(0,x.useMemo)(()=>{let e=Object.values(r?.dashboards??{}).map(e=>({id:e.id,name:e.name}));return o&&!e.some(e=>e.id===o.id)&&e.push({id:o.id,name:o.name}),e.map(e=>e.id===o?.id?{...e,name:o.name}:e)},[r,o]);if(!o)return(0,S.jsxs)(fe,{children:[(0,S.jsx)(pe,{"data-narrow":n,children:(0,S.jsx)(`span`,{className:`app-title`,children:e(`editor_title`)})}),(0,S.jsx)(`p`,{style:{padding:24},children:d||e(`loading`)})]});let H=le(ee,o),we=de(H,{label:t=>e(t),page:t=>e(`page_n`,{n:t+1}),section:(t,n)=>o.pages[t]?.sections[n]?.name||e(`section_n`,{n:n+1}),button:t=>o.buttons[t]?.name||e(`button_n`,{n:t+1})}),Te=H.kind===`page`||H.kind===`section`?H.page:void 0,Ee=H.kind!==`users`;return(0,S.jsx)(Pe,{children:(0,S.jsxs)(fe,{children:[(0,S.jsxs)(pe,{"data-narrow":n,children:[(0,S.jsx)(E,{type:`button`,className:`only-narrow`,"aria-label":e(`menu`),onClick:e=>ae(e.currentTarget),children:(0,S.jsx)(h,{icon:`mdi:menu`})}),(0,S.jsx)(E,{type:`button`,className:`only-drawer`,"aria-label":e(`editor_menu`),onClick:()=>m(!0),children:(0,S.jsx)(h,{icon:`mdi:format-list-bulleted`})}),(0,S.jsxs)(`div`,{className:`titles`,children:[(0,S.jsx)(`span`,{className:`app-title`,children:e(`editor_title`)}),(0,S.jsxs)(`nav`,{"aria-label":e(`editor_menu`),children:[(0,S.jsx)(`button`,{type:`button`,onClick:()=>A({kind:`general`}),children:o.name}),we.map((e,t)=>(0,S.jsxs)(`span`,{children:[`› `,e.view?(0,S.jsx)(`button`,{type:`button`,onClick:()=>A(e.view),children:e.label}):e.label]},t))]})]}),(0,S.jsx)(`span`,{className:`spacer`}),(0,S.jsx)(E,{type:`button`,className:`only-no-preview`,"aria-pressed":b,"aria-label":e(`preview`),title:e(`preview`),onClick:()=>oe(e=>!e),children:(0,S.jsx)(h,{icon:b?`mdi:form-select`:`mdi:tablet-dashboard`})}),(0,S.jsxs)(me,{children:[(0,S.jsx)(E,{type:`button`,"aria-label":e(`more`),"aria-expanded":g,onClick:()=>_(e=>!e),children:(0,S.jsx)(h,{icon:`mdi:dots-vertical`})}),g&&(0,S.jsxs)(`div`,{className:`menu`,role:`menu`,children:[(0,S.jsxs)(`button`,{type:`button`,role:`menuitem`,onClick:()=>void F(),children:[(0,S.jsx)(h,{icon:`mdi:plus`}),` `,e(`new_dashboard`)]}),(0,S.jsxs)(`button`,{type:`button`,role:`menuitem`,onClick:()=>void F(o),children:[(0,S.jsx)(h,{icon:`mdi:content-copy`}),` `,e(`duplicate`)]}),(0,S.jsxs)(`button`,{type:`button`,role:`menuitem`,onClick:()=>void I(),children:[(0,S.jsx)(h,{icon:`mdi:tablet-cellphone`}),` `,e(`reload_tablets`)]}),(0,S.jsxs)(`button`,{type:`button`,role:`menuitem`,onClick:()=>A({kind:`json`}),children:[(0,S.jsx)(h,{icon:`mdi:code-json`}),` `,e(`edit_json`)]}),(0,S.jsxs)(`button`,{type:`button`,role:`menuitem`,className:`danger`,disabled:o.id==="default",onClick:()=>void L(),children:[(0,S.jsx)(h,{icon:`mdi:delete-outline`}),` `,e(`delete_dashboard`)]}),(0,S.jsx)(`hr`,{}),(0,S.jsxs)(`button`,{type:`button`,role:`menuitem`,onClick:()=>{_(!1),y(!0)},children:[(0,S.jsx)(h,{icon:`mdi:information-outline`}),` `,e(`about`)]})]})]})]}),(0,S.jsxs)(he,{children:[(0,S.jsx)(ge,{$open:p,onClick:()=>m(!1)}),(0,S.jsx)(be,{dashboards:V,draft:o,view:H,expanded:ne,open:p,onToggle:j,onOpen:A,onSwitch:e=>void Ce(e),onNewDashboard:()=>void F()}),(0,S.jsxs)(_e,{$hidden:b,children:[(0,S.jsx)(`div`,{className:`screen-body`,children:(0,S.jsx)(We.Provider,{value:B,children:(0,S.jsx)(gt,{view:H,dashboards:V,draft:o,update:k,open:A})})}),Ee&&(0,S.jsxs)(`div`,{className:`screen-foot`,children:[(0,S.jsx)(`span`,{className:`status`,children:l?e(`unsaved`):d}),(0,S.jsxs)(`span`,{className:`end`,children:[(0,S.jsx)(C,{appearance:`plain`,disabled:!l,onClick:()=>void P(),children:e(`discard`)}),(0,S.jsx)(C,{appearance:`accent`,icon:`mdi:content-save-outline`,disabled:!l,onClick:xe,children:e(`save`)})]})]})]}),(0,S.jsxs)(ve,{$shown:b,children:[(0,S.jsxs)(`div`,{className:`preview-bar`,children:[(0,S.jsx)(`h2`,{children:e(`preview`)}),(0,S.jsx)(q,{label:e(`device`),value:se,options:$.map(e=>({value:e.id,label:e.label})),onChange:ce}),(0,S.jsx)(E,{type:`button`,style:{color:`var(--secondary-text-color)`},"aria-label":e(w?`landscape`:`portrait`),title:e(w?`landscape`:`portrait`),onClick:()=>T(e=>!e),children:(0,S.jsx)(h,{icon:w?`mdi:phone-rotate-landscape`:`mdi:phone-rotate-portrait`})})]}),(0,S.jsx)(`div`,{className:`stage`,children:(0,S.jsx)(Se,{dashboard:o,device:D,portrait:w,page:Te})})]})]}),(0,S.jsx)(Ve,{open:v,onClose:()=>y(!1)}),ye]})})};export{_t as default};