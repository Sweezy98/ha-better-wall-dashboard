import{C as e,D as t,E as n,S as r,T as i,_ as a,a as o,b as s,c,d as l,f as u,g as d,h as f,i as ee,l as te,m as ne,n as p,o as re,p as m,r as ie,s as h,t as g,u as _,v as ae,w as v,x as y,y as b}from"./boot-DjYaCV9X.js";var x=t(n(),1),S=t(i(),1),C=e.button`
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
  ${({$appearance:e,$danger:t})=>{let n=t?`var(--error-color, #db4437)`:`var(--primary-color, #03a9f4)`;return e===`accent`?r`
        background: ${n};
        color: var(--text-primary-color, #fff);
      `:e===`filled`?r`
        background: color-mix(in srgb, ${n} 16%, transparent);
        color: ${n};
      `:r`
      background: transparent;
      color: ${n};
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
`,oe=()=>()=>{},w=({children:e,onClick:t,icon:n,appearance:r=`plain`,danger:i=!1,disabled:a,title:o})=>{let s=(0,x.useSyncExternalStore)(oe,()=>!!customElements.get(`ha-button`)),c=(0,S.jsxs)(S.Fragment,{children:[n&&(0,S.jsx)(`span`,{slot:`start`,style:{display:`inline-flex`},children:(0,S.jsx)(u,{icon:n,size:`18px`})}),e]});return s?(0,x.createElement)(`ha-button`,{appearance:r,variant:i?`danger`:`brand`,disabled:a||void 0,title:o,onClick:t},c):(0,S.jsx)(C,{type:`button`,$appearance:r,$danger:i,disabled:a,title:o,onClick:t,children:c})},T=[{part:`clock`,icon:`mdi:clock-outline`,label:`clock`},{part:`status`,icon:`mdi:wifi-star`,label:`nav_status`},{part:`climate`,icon:`mdi:home-thermometer-outline`,label:`room_climate`},{part:`persons`,icon:`mdi:account-multiple-outline`,label:`persons`},{part:`openings`,icon:`mdi:window-open-variant`,label:`openings`},{part:`travel`,icon:`mdi:car-clock`,label:`travel_time`},{part:`quick`,icon:`mdi:gesture-tap-button`,label:`quick_actions`},{part:`calendar`,icon:`mdi:calendar-month-outline`,label:`calendar`},{part:`weather`,icon:`mdi:weather-partly-cloudy`,label:`weather`},{part:`notifications`,icon:`mdi:bell-outline`,label:`notifications`},{part:`system`,icon:`mdi:chart-box-outline`,label:`system_stats`}];function se(e,t){switch(e.kind){case`page`:return e.page<t.pages.length?e:{kind:`pages`};case`section`:{let n=t.pages[e.page];return n?e.section<n.sections.length?e:{kind:`page`,page:e.page}:{kind:`pages`}}case`button`:return e.button<t.buttons.length?e:{kind:`buttons`};default:return e}}function ce(e){switch(e.kind){case`sidebar`:return[`sidebar`];case`page`:return[`pages`];case`section`:return[`pages`,`page-${e.page}`];case`button`:return[`buttons`];default:return[]}}function E(e,t){return JSON.stringify(e)===JSON.stringify(t)}function le(e,t){switch(e.kind){case`general`:return[{label:t.label(`tab_general`)}];case`sidebar`:{let n=T.find(t=>t.part===e.part);return[{label:t.label(`tab_sidebar`)},{label:t.label(n?.label??e.part)}]}case`pages`:return[{label:t.label(`tab_pages`)}];case`page`:return[{label:t.label(`tab_pages`),view:{kind:`pages`}},{label:t.page(e.page)}];case`section`:return[{label:t.label(`tab_pages`),view:{kind:`pages`}},{label:t.page(e.page),view:{kind:`page`,page:e.page}},{label:t.section(e.page,e.section)}];case`buttons`:return[{label:t.label(`tab_buttons`)}];case`button`:return[{label:t.label(`tab_buttons`),view:{kind:`buttons`}},{label:t.button(e.button)}];case`users`:return[{label:t.label(`tab_users`)}];case`json`:return[{label:t.label(`tab_json`)}]}}var ue=e.div`
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
`,de=e.header`
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
`,D=e.button`
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
`,fe=e.div`
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
`,pe=e.div`
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
`,O=e.div`
  background: var(--card-background-color, #1c1c1c);
  border-radius: var(--ha-card-border-radius, 12px);
  box-shadow: var(--ha-card-box-shadow, none);
  border: 1px solid var(--ha-card-border-color, var(--divider-color, rgba(225, 225, 225, 0.12)));
  box-sizing: border-box;
  min-width: 0;
  min-height: 0;
`,me=e(O)`
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
`,he=e.div`
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
`,ge=e(O)`
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
`,k=e.section`
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
`,A=e.ul`
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
`,j=e.details`
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
`,_e=e.div`
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
`,ve=e(O)`
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
`,M=e.dialog`
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
`,ye=({dashboards:e,draft:t,view:n,expanded:r,open:i,onToggle:a,onOpen:o,onSwitch:s,onNewDashboard:c})=>{let l=y(),d=(e,t,r)=>(0,S.jsx)(`li`,{children:(0,S.jsxs)(`button`,{type:`button`,"aria-current":E(n,e)?`page`:void 0,onClick:()=>o(e),children:[(0,S.jsx)(u,{className:`icon`,icon:r}),(0,S.jsx)(`span`,{className:`grow`,children:t})]})},JSON.stringify(e)),f=(e,t,i,s,c)=>{let l=r.has(e);return(0,S.jsxs)(`li`,{children:[(0,S.jsxs)(`button`,{type:`button`,"aria-expanded":l,"aria-current":E(n,t)?`page`:void 0,onClick:()=>o(t,e),children:[(0,S.jsx)(u,{className:`icon`,icon:s}),(0,S.jsx)(`span`,{className:`grow`,children:i}),(0,S.jsx)(`span`,{className:`twist`,"data-open":l,role:`button`,"aria-label":i,onClick:t=>{t.stopPropagation(),a(e)},children:(0,S.jsx)(u,{icon:`mdi:chevron-right`})})]}),l&&(0,S.jsx)(`ul`,{className:`sub`,children:c})]},e)},ee=(0,S.jsxs)(S.Fragment,{children:[d({kind:`general`},l(`tab_general`),`mdi:cog-outline`),f(`sidebar`,{kind:`sidebar`,part:T[0].part},l(`tab_sidebar`),`mdi:dock-left`,T.map(e=>d({kind:`sidebar`,part:e.part},l(e.label),e.icon))),f(`pages`,{kind:`pages`},l(`tab_pages`),`mdi:book-open-page-variant-outline`,t.pages.map((e,t)=>e.sections.length?f(`page-${t}`,{kind:`page`,page:t},l(`page_n`,{n:t+1}),`mdi:file-outline`,e.sections.map((e,n)=>d({kind:`section`,page:t,section:n},e.name||l(`section_n`,{n:n+1}),e.icon||`mdi:view-grid-outline`))):d({kind:`page`,page:t},l(`page_n`,{n:t+1}),`mdi:file-outline`))),f(`buttons`,{kind:`buttons`},l(`tab_buttons`),`mdi:gesture-tap-button`,t.buttons.map((e,t)=>d({kind:`button`,button:t},e.name||l(`button_n`,{n:t+1}),e.icon||`mdi:gesture-tap`)))]});return(0,S.jsxs)(me,{$open:i,as:`nav`,"aria-label":l(`editor_title`),children:[(0,S.jsx)(`div`,{className:`heading`,children:l(`nav_dashboards`)}),(0,S.jsxs)(`ul`,{children:[e.map(e=>e.id===t.id?(0,S.jsxs)(`li`,{children:[(0,S.jsxs)(`button`,{type:`button`,"aria-expanded":!0,onClick:()=>o({kind:`general`}),children:[(0,S.jsx)(u,{className:`icon`,icon:`mdi:tablet-dashboard`}),(0,S.jsx)(`span`,{className:`grow`,children:(0,S.jsx)(`strong`,{children:t.name})})]}),(0,S.jsx)(`ul`,{className:`sub`,children:ee})]},e.id):(0,S.jsx)(`li`,{children:(0,S.jsxs)(`button`,{type:`button`,onClick:()=>s(e.id),children:[(0,S.jsx)(u,{className:`icon`,icon:`mdi:tablet-dashboard`}),(0,S.jsx)(`span`,{className:`grow`,children:e.name})]})},e.id)),(0,S.jsx)(`li`,{className:`add`,children:(0,S.jsxs)(`button`,{type:`button`,onClick:c,children:[(0,S.jsx)(u,{className:`icon`,icon:`mdi:plus`}),(0,S.jsx)(`span`,{className:`grow`,children:l(`new_dashboard`)})]})})]}),(0,S.jsx)(`div`,{className:`heading`,children:l(`nav_house`)}),(0,S.jsx)(`ul`,{children:d({kind:`users`},l(`tab_users`),`mdi:account-multiple-outline`)})]})},be=e.div`
  position: relative;
  width: 100%;
  height: 100%;
  min-height: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
`,N=e.div`
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
`,xe=(0,x.memo)(({dashboard:e,device:t,portrait:n,page:r})=>{let i=y(),a=(0,x.useRef)(null),[o,s]=(0,x.useState)(.5),c=n?t.height:t.width,l=n?t.width:t.height;(0,x.useLayoutEffect)(()=>{let e=a.current;if(!e)return;let t=()=>{let t=Math.min((e.clientWidth-40)/c,(e.clientHeight-40)/l);s(Math.max(.1,Math.min(1,Math.floor(t*1e3)/1e3)))};t();let n=new ResizeObserver(t);return n.observe(e),()=>n.disconnect()},[c,l]);let u=(0,x.useMemo)(()=>({dashboard:e,dashboards:[],kiosk:!1,is_admin:!0,pin_required:!1}),[e]);return(0,S.jsx)(be,{ref:a,"aria-label":i(`preview`),children:(0,S.jsx)(N,{style:{width:c,height:l,transform:`translate(-50%, -50%) scale(${o})`},children:(0,S.jsx)(m,{view:u,focusPage:r,children:(0,S.jsx)(ee,{})})})})}),P=e.label`
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
`,Se=e.label`
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
`,F=e.div`
  display: grid;
  grid-template-columns: ${({$columns:e})=>e??`repeat(auto-fit, minmax(220px, 1fr))`};
  gap: 16px;
  align-items: start;
`,I=e.button`
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
`;function L(e,t,n){if(n<0||n>=e.length)return e;let r=[...e],[i]=r.splice(t,1);return r.splice(n,0,i),r}function R(){let e=new Uint8Array(6);return crypto.getRandomValues(e),Array.from(e,e=>e.toString(16).padStart(2,`0`)).join(``)}var z=e=>JSON.parse(JSON.stringify(e)),B=(e,t,n)=>e.map((e,r)=>r===t?n:e),V=({selector:e,value:t,onChange:n,label:r,helper:i,required:a=!1})=>{let o=(0,x.useRef)(null),s=(0,x.useRef)(null),c=(0,x.useRef)(n);(0,x.useEffect)(()=>{c.current=n}),(0,x.useEffect)(()=>{let e=document.createElement(`ha-selector`);e.hass=g();let t=t=>{t.stopPropagation();let n=t.detail.value;e.value=n,c.current(n)};e.addEventListener(`value-changed`,t),o.current?.append(e),s.current=e;let n=p(t=>{e.hass=t});return()=>{n(),e.removeEventListener(`value-changed`,t),e.remove(),s.current=null}},[]);let l=JSON.stringify(e);return(0,x.useEffect)(()=>{let e=s.current;e&&(e.selector=JSON.parse(l),e.label=r,e.helper=i,e.required=a)},[l,r,i,a]),(0,x.useEffect)(()=>{let e=s.current;e&&e.value!==t&&(e.value=t)},[t]),(0,S.jsx)(`div`,{ref:o,className:`ha-field`})},Ce=[`ha-selector`,`ha-entity-picker`,`ha-switch`,`ha-icon-picker`],H=null;function we(){return Ce.every(e=>customElements.get(e))}function Te(){return we()?Promise.resolve(!0):(H??=(async()=>{let e=window.loadCardHelpers;if(!e)return!1;try{let t=await e();for(let e of[{type:`entities`,entities:[]},{type:`button`}])try{await(await t.createCardElement(e)).constructor.getConfigElement?.()}catch{}}catch{return!1}return!!customElements.get(`ha-selector`)})(),H)}function U(){let[e,t]=(0,x.useState)(we),n=(0,x.useSyncExternalStore)(p,()=>g()!==null);return(0,x.useEffect)(()=>{if(e||!n)return;let r=!0;return Te().then(e=>r&&e&&t(!0)),()=>{r=!1}},[e,n]),e&&n}var W=({label:e,hint:t,value:n,onChange:r,placeholder:i,type:a=`text`})=>U()?(0,S.jsx)(V,{selector:{text:a===`text`?{}:{type:a}},value:n,label:e,helper:t,onChange:e=>r(typeof e==`string`?e:``)}):(0,S.jsxs)(P,{children:[(0,S.jsx)(`span`,{className:`label`,children:e}),(0,S.jsx)(`input`,{type:a,value:n,placeholder:i,onChange:e=>r(e.target.value)}),t&&(0,S.jsx)(`small`,{children:t})]}),Ee=({label:e,hint:t,value:n,onChange:r,suggestions:i=[]})=>{let a=U(),o=e=>[...new Set(e.filter(e=>typeof e==`string`).map(e=>e.trim()).filter(Boolean))];if(a){let a=[...new Set([...n,...i])];return(0,S.jsxs)(P,{as:`div`,children:[(0,S.jsx)(`span`,{className:`label`,children:e}),t&&(0,S.jsx)(`small`,{children:t}),(0,S.jsx)(V,{selector:{select:{multiple:!0,custom_value:!0,mode:`dropdown`,sort:!1,options:a}},value:n,label:e,onChange:e=>r(Array.isArray(e)?o(e):[])})]})}return(0,S.jsxs)(P,{children:[(0,S.jsx)(`span`,{className:`label`,children:e}),(0,S.jsx)(`input`,{type:`text`,value:n.join(`, `),onChange:e=>r(o(e.target.value.split(`,`)))}),t&&(0,S.jsx)(`small`,{children:t})]})},G=({label:e,hint:t,value:n,onChange:r,min:i,max:a,step:o=1,unit:s})=>{let c=U(),l=e=>{let t=Number(e);e!==``&&e!==null&&Number.isFinite(t)&&r(t)};return c?(0,S.jsx)(V,{selector:{number:{min:i,max:a,step:o,mode:`box`,unit_of_measurement:s}},value:n,label:e,helper:t,onChange:l}):(0,S.jsxs)(P,{children:[(0,S.jsx)(`span`,{className:`label`,children:e}),(0,S.jsx)(`input`,{type:`number`,value:n,min:i,max:a,step:o,onChange:e=>l(e.target.value)}),t&&(0,S.jsx)(`small`,{children:t})]})},De=({label:e,hint:t,value:n,onChange:r,min:i,max:a,step:o,unit:s,scale:c=1})=>{let l=U(),u=Math.round(n*c*1e3)/1e3,d=e=>{let t=Number(e);Number.isFinite(t)&&r(t/c)};return l?(0,S.jsx)(V,{selector:{number:{min:i,max:a,step:o,mode:`slider`,unit_of_measurement:s}},value:u,label:e,helper:t,onChange:d}):(0,S.jsxs)(P,{children:[(0,S.jsxs)(`span`,{className:`label`,children:[e,`: `,u,s?` ${s}`:``]}),(0,S.jsx)(`input`,{type:`range`,value:u,min:i,max:a,step:o,onChange:e=>d(e.target.value)}),t&&(0,S.jsx)(`small`,{children:t})]})},K=({label:e,hint:t,value:n,onChange:r})=>U()?(0,S.jsx)(V,{selector:{boolean:{}},value:n,label:e,helper:t,onChange:e=>r(!!e)}):(0,S.jsxs)(Se,{children:[(0,S.jsx)(`input`,{type:`checkbox`,checked:n,onChange:e=>r(e.target.checked)}),(0,S.jsxs)(`span`,{children:[e,t&&(0,S.jsx)(`small`,{children:t})]})]}),q=({label:e,hint:t,value:n,onChange:r,options:i})=>U()?(0,S.jsx)(V,{selector:{select:{options:i,mode:`dropdown`}},value:n,label:e,helper:t,required:!0,onChange:e=>typeof e==`string`&&r(e)}):(0,S.jsxs)(P,{children:[(0,S.jsx)(`span`,{className:`label`,children:e}),(0,S.jsx)(`select`,{value:n,onChange:e=>r(e.target.value),children:i.map(e=>(0,S.jsx)(`option`,{value:e.value,children:e.label},e.value))}),t&&(0,S.jsx)(`small`,{children:t})]}),J=({label:e,hint:t,value:n,onChange:r})=>U()?(0,S.jsx)(V,{selector:{icon:{}},value:n,label:e,helper:t,onChange:e=>r(typeof e==`string`?e:``)}):(0,S.jsxs)(P,{children:[(0,S.jsx)(`span`,{className:`label`,children:e}),(0,S.jsxs)(`span`,{className:`with-icon`,children:[(0,S.jsx)(`input`,{type:`text`,value:n,placeholder:`mdi:…`,onChange:e=>r(e.target.value)}),n&&(0,S.jsx)(u,{icon:n,size:`24px`})]}),t&&(0,S.jsx)(`small`,{children:t})]}),Oe=({label:e,hint:t,value:n,onChange:r,accept:i})=>{let a=U(),o=(0,x.useMemo)(()=>n.startsWith(`media-source://`)?{media_content_id:n,media_content_type:i[0]}:void 0,[n,i]);return a?(0,S.jsx)(V,{selector:{media:{accept:i}},value:o,label:e,helper:t,onChange:e=>r(e?.media_content_id??``)}):(0,S.jsx)(W,{label:e,hint:t,value:n,onChange:r})},ke=(0,x.createContext)([]),Ae=({children:e})=>{let t=v(c(e=>{let t={};for(let[n,r]of Object.entries(e.entities))t[n]=r.attributes.friendly_name||n;return t})),n=(0,x.useMemo)(()=>Object.entries(t).map(([e,t])=>({id:e,name:t})).sort((e,t)=>e.id.localeCompare(t.id)),[t]);return(0,S.jsx)(ke.Provider,{value:n,children:e})},je=(e,t={},n)=>({entity:{...e?.length||n?{filter:{...e?.length?{domain:e}:{},...n?{integration:n}:{}}}:{},...t}}),Me=({value:e,domains:t,onChange:n})=>{let r=(0,x.useContext)(ke),i=(0,x.useId)(),a=(0,x.useMemo)(()=>t?.length?r.filter(e=>t.includes(e.id.split(`.`)[0])):r,[r,t]);return(0,S.jsxs)(S.Fragment,{children:[(0,S.jsx)(`input`,{type:`text`,list:i,value:e,placeholder:t?.length?`${t[0]}.…`:`domain.object_id`,onChange:e=>n(e.target.value.trim())}),(0,S.jsx)(`datalist`,{id:i,children:a.map(e=>(0,S.jsx)(`option`,{value:e.id,children:e.name},e.id))})]})},Y=({label:e,hint:t,value:n,onChange:r,domains:i,integration:a})=>{let o=U(),s=(0,x.useContext)(ke),c=y();if(o)return(0,S.jsx)(V,{selector:je(i,{},a),value:n||void 0,label:e,helper:t,onChange:e=>r(typeof e==`string`?e:``)});let l=s.find(e=>e.id===n);return(0,S.jsxs)(P,{children:[(0,S.jsx)(`span`,{className:`label`,children:e}),(0,S.jsx)(Me,{value:n,domains:i,onChange:r}),n&&(0,S.jsx)(`small`,{children:l?l.name:c(`not_found`)}),t&&(0,S.jsx)(`small`,{children:t})]})},X=({label:e,hint:t,value:n,onChange:r,domains:i,max:a})=>{let o=U(),s=y(),c=e=>r(a===void 0?e:e.slice(0,a));return o?(0,S.jsx)(V,{selector:je(i,{multiple:!0,reorder:!0}),value:n,label:e,helper:t,onChange:e=>c(Array.isArray(e)?e.filter(e=>typeof e==`string`):[])}):(0,S.jsxs)(P,{as:`div`,children:[(0,S.jsx)(`span`,{className:`label`,children:e}),n.map((e,t)=>(0,S.jsxs)(F,{$columns:`minmax(0, 1fr) auto`,children:[(0,S.jsx)(Me,{value:e,domains:i,onChange:e=>c(n.map((n,r)=>r===t?e:n))}),(0,S.jsx)(Z,{index:t,length:n.length,onMove:e=>c(L(n,t,e)),onRemove:()=>c(n.filter((e,n)=>n!==t))})]},t)),(a===void 0||n.length<a)&&(0,S.jsx)(I,{type:`button`,className:`add`,onClick:()=>c([...n,``]),title:s(`add`),"aria-label":s(`add`),children:(0,S.jsx)(u,{icon:`mdi:plus`})}),t&&(0,S.jsx)(`small`,{children:t})]})},Z=({index:e,length:t,onMove:n,onRemove:r,onDuplicate:i})=>{let a=y();return(0,S.jsxs)(`span`,{className:`list-controls`,children:[(0,S.jsx)(I,{type:`button`,disabled:e===0,onClick:()=>n(e-1),title:a(`move_up`),"aria-label":a(`move_up`),children:(0,S.jsx)(u,{icon:`mdi:arrow-up`})}),(0,S.jsx)(I,{type:`button`,disabled:e===t-1,onClick:()=>n(e+1),title:a(`move_down`),"aria-label":a(`move_down`),children:(0,S.jsx)(u,{icon:`mdi:arrow-down`})}),i&&(0,S.jsx)(I,{type:`button`,onClick:i,title:a(`duplicate`),"aria-label":a(`duplicate`),children:(0,S.jsx)(u,{icon:`mdi:content-copy`})}),(0,S.jsx)(I,{type:`button`,$danger:!0,onClick:r,title:a(`remove`),"aria-label":a(`remove`),children:(0,S.jsx)(u,{icon:`mdi:delete-outline`})})]})},Q=({title:e,lead:t})=>(0,S.jsxs)(S.Fragment,{children:[(0,S.jsx)(`h2`,{children:e}),t&&(0,S.jsx)(`p`,{className:`lead`,children:t})]}),Ne=e.span`
  margin-left: 8px;
  padding: 1px 8px;
  border-radius: 999px;
  font-size: 12px;
  font-weight: 400;
  background: var(--secondary-background-color, #282828);
  color: var(--secondary-text-color, #9b9b9b);
`,Pe=({dashboards:e})=>{let t=y(),n=b(),[r,i]=(0,x.useState)(null);(0,x.useEffect)(()=>{n?.sendMessagePromise({type:`better_wall_dashboard/users`}).then(e=>i(e.users)).catch(()=>i([]))},[n]);let a=(0,x.useCallback)(async(e,t)=>{if(!n)return;i(n=>n?.map(n=>n.id===e.id?{...n,...t}:n)??null);let r=await n.sendMessagePromise({type:`better_wall_dashboard/save_user`,user_id:e.id,...t});i(t=>t?.map(t=>t.id===e.id?{...t,...r}:t)??null)},[n]);return(0,S.jsxs)(S.Fragment,{children:[(0,S.jsx)(Q,{title:t(`tab_users`),lead:t(`lead_users`)}),r?.map(n=>(0,S.jsxs)(j,{open:!n.is_admin||void 0,children:[(0,S.jsxs)(`summary`,{children:[(0,S.jsx)(u,{className:`icon`,icon:n.is_admin?`mdi:shield-account-outline`:`mdi:tablet`}),(0,S.jsxs)(`span`,{className:`text`,children:[(0,S.jsxs)(`span`,{children:[n.name,n.is_admin&&(0,S.jsx)(Ne,{children:t(`admin`)}),!n.is_active&&(0,S.jsx)(Ne,{children:t(`inactive`)})]}),(0,S.jsx)(`span`,{className:`secondary`,children:e.find(e=>e.id===n.dashboard)?.name??n.dashboard})]})]}),(0,S.jsxs)(`div`,{className:`fold-body`,children:[(0,S.jsx)(q,{label:t(`assigned_dashboard`),value:n.dashboard,options:e.map(e=>({value:e.id,label:e.name})),onChange:e=>a(n,{dashboard:e})}),(0,S.jsxs)(F,{children:[(0,S.jsx)(K,{label:t(`kiosk`),hint:t(`kiosk_user_hint`),value:n.kiosk,onChange:e=>a(n,{kiosk:e})}),(0,S.jsx)(K,{label:t(`start_page`),hint:t(`start_page_hint`),value:!!n.default_panel,onChange:e=>a(n,{default_panel:e})})]}),(0,S.jsx)(K,{label:t(`sidebar_only`),hint:t(`sidebar_only_hint`),value:n.sidebar_only,onChange:e=>a(n,{sidebar_only:e})})]})]},n.id))]})},Fe=`/better_wall_dashboard/static/icon.png`,Ie=e(M)`
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
`,Le=({open:e,onClose:t})=>{let n=y(),r=b(),i=(0,x.useRef)(null),[a,o]=(0,x.useState)(null),s=ne();(0,x.useEffect)(()=>{let t=i.current;t&&(e&&!t.open&&t.showModal(),!e&&t.open&&t.close())}),(0,x.useEffect)(()=>{e&&r?.sendMessagePromise({type:`better_wall_dashboard/version`}).then(o).catch(()=>void 0)},[e,r]);let c=!!(s&&a&&a.app!==s);return(0,S.jsxs)(Ie,{ref:i,tabIndex:-1,onClose:()=>e&&t(),onClick:e=>e.target===e.currentTarget&&t(),children:[(0,S.jsxs)(`div`,{className:`head`,children:[(0,S.jsx)(`img`,{src:Fe,alt:``}),(0,S.jsx)(`h2`,{children:`Better Wall Dashboard`})]}),(0,S.jsx)(`p`,{className:`muted`,children:n(`about_blurb`)}),(0,S.jsx)(`table`,{children:(0,S.jsxs)(`tbody`,{children:[(0,S.jsxs)(`tr`,{children:[(0,S.jsx)(`th`,{children:n(`about_version`)}),(0,S.jsx)(`td`,{children:a?.version??`–`})]}),(0,S.jsxs)(`tr`,{children:[(0,S.jsx)(`th`,{children:n(`about_page`)}),(0,S.jsx)(`td`,{children:s?s.slice(0,12):`–`})]})]})}),c&&(0,S.jsxs)(S.Fragment,{children:[(0,S.jsx)(`p`,{children:n(`update_available`)}),(0,S.jsx)(w,{appearance:`filled`,icon:`mdi:reload`,onClick:()=>{let e=d(),t=null;if(e&&a){let n=new URL(e);n.searchParams.set(`v`,a.app),t=n.toString()}f(t)},children:n(`reload`)})]}),(a?.documentation||a?.issues)&&(0,S.jsxs)(`p`,{children:[a.documentation&&(0,S.jsx)(`a`,{href:a.documentation,target:`_blank`,rel:`noopener noreferrer`,children:n(`about_repo`)}),a.documentation&&a.issues&&` · `,a.issues&&(0,S.jsx)(`a`,{href:a.issues,target:`_blank`,rel:`noopener noreferrer`,children:n(`about_issues`)})]}),(0,S.jsx)(I,{type:`button`,className:`shut`,"aria-label":n(`close`),title:n(`close`),onClick:t,children:(0,S.jsx)(u,{icon:`mdi:close`})})]})},Re=({request:e,onAnswer:t})=>{let n=y(),r=(0,x.useRef)(null);return(0,x.useEffect)(()=>{let t=r.current;t&&(e&&!t.open&&t.showModal(),!e&&t.open&&t.close())}),(0,S.jsx)(M,{ref:r,role:`alertdialog`,tabIndex:-1,onCancel:e=>{e.preventDefault(),t(!1)},onClick:e=>e.target===e.currentTarget&&t(!1),children:e&&(0,S.jsxs)(S.Fragment,{children:[(0,S.jsx)(`h2`,{children:e.title}),e.text&&(0,S.jsx)(`p`,{className:`muted`,children:e.text}),(0,S.jsxs)(`div`,{className:`actions`,children:[(0,S.jsx)(w,{appearance:`plain`,onClick:()=>t(!1),children:n(`cancel`)}),(0,S.jsx)(w,{appearance:`accent`,danger:e.danger,onClick:()=>t(!0),children:e.confirm})]})]})})};function ze(){let[e,t]=(0,x.useState)(null);return{confirm:(0,x.useCallback)(e=>new Promise(n=>t({...e,resolve:n})),[]),dialog:(0,S.jsx)(Re,{request:e,onAnswer:n=>{e?.resolve(n),t(null)}})}}var Be=(0,x.createContext)([]);function Ve(){return(0,x.useContext)(Be)}function He(e){let t=document.querySelector(`home-assistant`);return t?(t.dispatchEvent(new CustomEvent(`hass-notification`,{bubbles:!0,composed:!0,detail:{message:e,dismissable:!0}})),!0):!1}var Ue=({draft:e,update:t})=>{let n=y(),r=n=>t({...e,background:{...e.background,...n}});return(0,S.jsxs)(S.Fragment,{children:[(0,S.jsx)(Q,{title:n(`tab_general`),lead:n(`lead_general`)}),(0,S.jsx)(k,{children:(0,S.jsx)(W,{label:n(`name`),value:e.name,onChange:n=>t({...e,name:n})})}),(0,S.jsxs)(k,{children:[(0,S.jsx)(`h3`,{children:n(`background`)}),(0,S.jsx)(Oe,{label:n(`background_media`),hint:n(`background_media_hint`),accept:[`image/*`],value:e.background.image,onChange:e=>r({image:e})}),(0,S.jsx)(W,{label:n(`background_image`),hint:n(`background_image_hint`),type:`url`,value:e.background.image.startsWith(`media-source://`)?``:e.background.image,onChange:e=>r({image:e})}),(0,S.jsxs)(F,{children:[(0,S.jsx)(De,{label:n(`background_dim`),value:e.background.dim,min:0,max:95,step:5,unit:`%`,scale:100,onChange:e=>r({dim:e})}),(0,S.jsx)(De,{label:n(`background_blur`),value:e.background.blur,min:0,max:40,step:1,unit:`px`,onChange:e=>r({blur:e})})]})]}),(0,S.jsxs)(k,{children:[(0,S.jsx)(`h3`,{children:n(`security_heading`)}),(0,S.jsx)(W,{label:n(`pin`),hint:n(`pin_hint`),type:`password`,value:e.pin??``,onChange:n=>t({...e,pin:n.replace(/\D/g,``).slice(0,8)})})]})]})},We=({item:e})=>{let t=s(e.entity||void 0),n=y(),r=e.name||t?.attributes.friendly_name||e.entity||n(`not_set`);return(0,S.jsxs)(S.Fragment,{children:[(0,S.jsx)(u,{className:`icon`,icon:e.icon||t?.attributes.icon||ae(e.entity)}),(0,S.jsxs)(`span`,{className:`text`,children:[(0,S.jsx)(`span`,{children:r}),e.entity&&(0,S.jsx)(`span`,{className:`secondary`,children:e.entity})]})]})},Ge=({items:e,max:t,domains:n,addLabel:r,onChange:i})=>{let a=y(),o=(t,n)=>i(B(e,t,{...e[t],...n}));return(0,S.jsxs)(S.Fragment,{children:[e.length===0&&(0,S.jsxs)(_e,{children:[(0,S.jsx)(u,{icon:`mdi:playlist-plus`}),(0,S.jsx)(`span`,{children:a(`empty_list`)})]}),e.map((t,r)=>(0,S.jsxs)(j,{open:!t.entity||void 0,children:[(0,S.jsxs)(`summary`,{children:[(0,S.jsx)(We,{item:t}),(0,S.jsx)(`span`,{onClick:e=>e.preventDefault(),children:(0,S.jsx)(Z,{index:r,length:e.length,onMove:t=>i(L(e,r,t)),onRemove:()=>i(e.filter((e,t)=>t!==r))})})]}),(0,S.jsxs)(`div`,{className:`fold-body`,children:[(0,S.jsx)(Y,{label:a(`entity`),value:t.entity,domains:n,onChange:e=>o(r,{entity:e})}),(0,S.jsxs)(F,{children:[(0,S.jsx)(W,{label:a(`name`),hint:a(`name_hint`),value:t.name,onChange:e=>o(r,{name:e})}),(0,S.jsx)(J,{label:a(`icon`),value:t.icon,onChange:e=>o(r,{icon:e})})]})]})]},t.id)),(0,S.jsx)(`div`,{children:(0,S.jsxs)(w,{icon:`mdi:plus`,appearance:`filled`,disabled:e.length>=t,onClick:()=>i([...e,{id:R(),entity:``,name:``,icon:``}]),children:[r,` (`,e.length,`/`,t,`)`]})})]})},Ke=[`input_boolean`,`switch`,`binary_sensor`],qe=({draft:e,update:t,part:n})=>{let r=y(),i=Ve(),a=e.sidebar,s=n=>t({...e,sidebar:n}),c=(e,t)=>s({...a,[e]:{...a[e],...t}}),l=T.find(e=>e.part===n)?.label??`tab_sidebar`,u=(0,S.jsx)(Q,{title:r(l),lead:r(`lead_${n}`)});switch(n){case`clock`:return(0,S.jsxs)(S.Fragment,{children:[u,(0,S.jsxs)(k,{children:[(0,S.jsx)(q,{label:r(`clock_style`),value:a.clock?.style??`digital`,options:[{value:`digital`,label:r(`clock_digital`)},{value:`analog`,label:r(`clock_analog`)}],onChange:e=>c(`clock`,{style:e})}),(0,S.jsx)(K,{label:r(`clock_seconds`),value:!!a.clock?.seconds,onChange:e=>c(`clock`,{seconds:e})})]})]});case`status`:return(0,S.jsxs)(S.Fragment,{children:[u,(0,S.jsxs)(k,{children:[(0,S.jsx)(`h3`,{children:r(`status_icons`)}),(0,S.jsx)(`p`,{children:r(`status_icons_hint`)}),(0,S.jsx)(Ge,{items:a.status.icons??[],max:h.statusIcons,domains:Ke,addLabel:r(`add_status_icon`),onChange:e=>c(`status`,{icons:e})})]}),(0,S.jsxs)(k,{children:[(0,S.jsx)(`h3`,{children:r(`wifi_heading`)}),(0,S.jsx)(Y,{label:r(`wifi_signal`),hint:r(`wifi_signal_hint`),value:a.status.wifi_signal,domains:[`sensor`],onChange:e=>c(`status`,{wifi_signal:e})})]}),(0,S.jsxs)(k,{children:[(0,S.jsx)(`h3`,{children:r(`guest_wifi`)}),(0,S.jsx)(Y,{label:r(`guest_qr_image`),hint:r(`guest_qr_image_hint`),value:a.guest_wifi.qr_image,domains:[`image`],onChange:e=>c(`guest_wifi`,{qr_image:e})}),(0,S.jsxs)(F,{children:[(0,S.jsx)(W,{label:r(`network`),value:a.guest_wifi.ssid,onChange:e=>c(`guest_wifi`,{ssid:e})}),(0,S.jsx)(W,{label:r(`password`),type:`password`,value:a.guest_wifi.password,onChange:e=>c(`guest_wifi`,{password:e})})]}),(0,S.jsxs)(F,{children:[(0,S.jsx)(q,{label:r(`security`),value:a.guest_wifi.security,options:[{value:`WPA`,label:`WPA/WPA2/WPA3`},{value:`WEP`,label:`WEP`},{value:`nopass`,label:r(`open_network`)}],onChange:e=>c(`guest_wifi`,{security:e})}),(0,S.jsx)(K,{label:r(`hidden_network`),value:a.guest_wifi.hidden,onChange:e=>c(`guest_wifi`,{hidden:e})})]})]})]});case`climate`:return(0,S.jsxs)(S.Fragment,{children:[u,(0,S.jsxs)(k,{children:[(0,S.jsx)(Y,{label:r(`temperature`),value:a.climate.temperature,domains:[`sensor`],onChange:e=>c(`climate`,{temperature:e})}),(0,S.jsx)(Y,{label:r(`humidity`),value:a.climate.humidity,domains:[`sensor`],onChange:e=>c(`climate`,{humidity:e})}),(0,S.jsx)(G,{label:r(`hours`),value:a.climate.hours,min:1,max:168,unit:`h`,onChange:e=>c(`climate`,{hours:e})})]})]});case`persons`:return(0,S.jsxs)(S.Fragment,{children:[u,(0,S.jsx)(X,{label:r(`persons`),value:a.persons,domains:[`person`],onChange:e=>s({...a,persons:e})})]});case`openings`:return(0,S.jsxs)(S.Fragment,{children:[u,(0,S.jsx)(X,{label:r(`openings`),hint:r(`openings_hint`),value:a.openings,domains:[`binary_sensor`,`cover`,`lock`,`sensor`],onChange:e=>s({...a,openings:e})})]});case`travel`:return(0,S.jsxs)(S.Fragment,{children:[u,(0,S.jsxs)(k,{children:[(0,S.jsx)(Y,{label:r(`travel_sensor`),value:a.travel.entity,domains:[`sensor`],onChange:e=>c(`travel`,{entity:e})}),(0,S.jsx)(W,{label:r(`name`),hint:r(`travel_name_hint`),value:a.travel.name,onChange:e=>c(`travel`,{name:e})})]}),(0,S.jsxs)(k,{children:[(0,S.jsx)(`h3`,{children:r(`map`)}),(0,S.jsx)(W,{label:r(`maps_api_key`),hint:r(`maps_api_key_hint`),type:`password`,value:a.travel.maps_api_key,onChange:e=>c(`travel`,{maps_api_key:e})}),(0,S.jsx)(W,{label:r(`map_url`),hint:r(`map_url_hint`),type:`url`,value:a.travel.map_url,onChange:e=>c(`travel`,{map_url:e})})]})]});case`quick`:return(0,S.jsxs)(S.Fragment,{children:[u,(0,S.jsx)(Ge,{items:a.quick_actions,max:h.quickActions,addLabel:r(`add_quick_action`),onChange:e=>s({...a,quick_actions:e})})]});case`calendar`:return(0,S.jsxs)(S.Fragment,{children:[u,(0,S.jsxs)(k,{children:[(0,S.jsx)(X,{label:r(`calendars`),value:a.calendar.entities,domains:[`calendar`],onChange:e=>c(`calendar`,{entities:e})}),(0,S.jsx)(G,{label:r(`days`),hint:r(`calendar_days_hint`),value:a.calendar.days,min:1,max:h.calendarDays,onChange:e=>c(`calendar`,{days:e})})]})]});case`weather`:return(0,S.jsxs)(S.Fragment,{children:[u,(0,S.jsxs)(k,{children:[(0,S.jsx)(Y,{label:r(`weather_entity`),value:a.weather.entity,domains:[`weather`],onChange:e=>c(`weather`,{entity:e})}),(0,S.jsx)(Y,{label:r(`outdoor_temperature`),hint:r(`outdoor_temperature_hint`),value:a.weather.temperature,domains:[`sensor`],onChange:e=>c(`weather`,{temperature:e})})]})]});case`notifications`:return(0,S.jsxs)(S.Fragment,{children:[u,(0,S.jsxs)(k,{children:[(0,S.jsx)(K,{label:r(`notifications_enabled`),value:a.notifications.enabled,onChange:e=>c(`notifications`,{enabled:e})}),(0,S.jsx)(Ee,{label:r(`notifications_prefix`),hint:r(`notifications_prefix_hint`),suggestions:re([...i,e]),value:o(a.notifications),onChange:e=>c(`notifications`,{prefixes:e})})]}),(0,S.jsxs)(k,{children:[(0,S.jsx)(`h3`,{children:r(`settings`)}),(0,S.jsx)(K,{label:r(`settings_enabled`),hint:r(`settings_enabled_hint`),value:a.settings?.enabled!==!1,onChange:e=>c(`settings`,{enabled:e})})]})]});case`system`:return(0,S.jsxs)(S.Fragment,{children:[u,(0,S.jsx)(Ge,{items:a.system,max:h.system,domains:[`sensor`],addLabel:r(`add_statistic`),onChange:e=>s({...a,system:e})})]})}},Je=e.textarea`
  min-height: 55vh;
  padding: 12px;
  border-radius: 8px;
  border: 1px solid var(--divider-color, rgba(225, 225, 225, 0.12));
  background: var(--code-editor-background-color, var(--secondary-background-color, #282828));
  color: inherit;
  font-family: var(--ha-font-family-code, ui-monospace, monospace);
  font-size: 13px;
  resize: vertical;
`,Ye=e.p`
  margin: 0;
  color: var(--error-color, #db4437);
`,Xe=({draft:e,update:t})=>{let n=y(),[r,i]=(0,x.useState)(()=>JSON.stringify(e,null,2)),[a,o]=(0,x.useState)(!1);return(0,S.jsxs)(S.Fragment,{children:[(0,S.jsx)(Q,{title:n(`tab_json`),lead:n(`json_hint`)}),(0,S.jsx)(Je,{value:r,spellCheck:!1,onChange:e=>{i(e.target.value),o(!1)}}),a&&(0,S.jsx)(Ye,{children:n(`json_invalid`)}),(0,S.jsx)(`div`,{children:(0,S.jsx)(w,{icon:`mdi:check`,appearance:`filled`,onClick:()=>{try{t({...JSON.parse(r),id:e.id})}catch{o(!0)}},children:n(`apply`)})})]})};function Ze(){let e=v(e=>{let t=new Set(Object.values(e.entitiesRegistryDisplay).map(e=>e.platform));return te.filter(e=>!e.integration||t.has(e.integration)).map(e=>e.type).join(` `)});return te.filter(t=>e.split(` `).includes(t.type))}var Qe=({tile:e,onChange:t})=>{let n=y(),r=s(l(e.entity||void 0))?.attributes.options??[],i=Array.isArray(e.options.hidden_scenes)?e.options.hidden_scenes:[],a=n=>t({...e.options,...n});return(0,S.jsxs)(S.Fragment,{children:[r.length>0&&(0,S.jsxs)(P,{as:`div`,children:[(0,S.jsx)(`span`,{className:`label`,children:n(`bl_shown_scenes`)}),(0,S.jsx)(`small`,{children:n(`bl_shown_scenes_hint`)}),r.map(e=>(0,S.jsx)(K,{label:e,value:!i.includes(e),onChange:t=>a({hidden_scenes:t?i.filter(t=>t!==e):[...i.filter(e=>r.includes(e)),e]})},e))]}),(0,S.jsxs)(F,{children:[(0,S.jsx)(Y,{label:n(`bl_button_entity`),hint:n(`bl_button_entity_hint`),value:typeof e.options.button_entity==`string`?e.options.button_entity:``,onChange:e=>a({button_entity:e})}),(0,S.jsx)(J,{label:n(`bl_button_icon`),value:typeof e.options.button_icon==`string`?e.options.button_icon:``,onChange:e=>a({button_icon:e})})]})]})},$e=({value:e,onChange:t})=>{let[n,r]=(0,x.useState)(()=>Object.keys(e).length?JSON.stringify(e):``),[i,a]=(0,x.useState)(!1),o=y();return(0,S.jsxs)(P,{children:[(0,S.jsx)(`span`,{className:`label`,children:o(`options_json`)}),(0,S.jsx)(`input`,{type:`text`,value:n,placeholder:`{"hours": 24, "color": "#03a9f4"}`,onChange:e=>{r(e.target.value);try{let n=e.target.value.trim()?JSON.parse(e.target.value):{};if(n&&typeof n==`object`&&!Array.isArray(n)){a(!1),t(n);return}}catch{}a(!0)}}),i&&(0,S.jsx)(`small`,{children:o(`json_invalid`)})]})},et=({tile:e})=>{let t=y(),n=s(e.entity||void 0),r=_[e.type],i=e.name||n?.attributes.friendly_name||e.entity||(r?t(r.label):e.type);return(0,S.jsxs)(S.Fragment,{children:[(0,S.jsx)(u,{className:`icon`,icon:e.icon||r?.icon||`mdi:square-rounded-outline`}),(0,S.jsxs)(`span`,{className:`text`,children:[(0,S.jsx)(`span`,{children:i}),(0,S.jsxs)(`span`,{className:`secondary`,children:[r?t(r.label):e.type,` · `,e.w,` × `,e.h]})]})]})},tt=({tiles:e,columns:t,rows:n,onChange:r})=>{let i=y(),a=Ze(),o=(t,n)=>r(B(e,t,{...e[t],...n}));return(0,S.jsxs)(S.Fragment,{children:[e.length===0&&(0,S.jsxs)(_e,{children:[(0,S.jsx)(u,{icon:`mdi:view-grid-plus-outline`}),(0,S.jsx)(`span`,{children:i(`empty_tiles`)})]}),e.map((s,c)=>{let l=_[s.type];return(0,S.jsxs)(j,{open:!s.entity&&l?.needsEntity!==!1||void 0,children:[(0,S.jsxs)(`summary`,{children:[(0,S.jsx)(et,{tile:s}),(0,S.jsx)(`span`,{onClick:e=>e.preventDefault(),children:(0,S.jsx)(Z,{index:c,length:e.length,onMove:t=>r(L(e,c,t)),onRemove:()=>r(e.filter((e,t)=>t!==c)),onDuplicate:()=>r([...e.slice(0,c+1),{...s,id:R()},...e.slice(c+1)])})})]}),(0,S.jsxs)(`div`,{className:`fold-body`,children:[(0,S.jsx)(q,{label:i(`type`),value:s.type,options:[...a.map(e=>({value:e.type,label:i(e.label)})),...a.some(e=>e.type===s.type)?[]:[{value:s.type,label:l?i(l.label):s.type}]],onChange:e=>{let r=_[e]?.size??[1,1];o(c,{type:e,w:Math.min(r[0],t),h:Math.min(r[1],n)})}}),l?.needsEntity!==!1&&(0,S.jsx)(Y,{label:i(`entity`),value:s.entity,domains:l?.domains,integration:l?.integration,onChange:e=>o(c,{entity:e})}),(0,S.jsxs)(F,{children:[(0,S.jsx)(W,{label:i(`name`),hint:i(`name_hint`),value:s.name,onChange:e=>o(c,{name:e})}),(0,S.jsx)(J,{label:i(`icon`),value:s.icon,onChange:e=>o(c,{icon:e})})]}),(0,S.jsxs)(F,{children:[(0,S.jsx)(G,{label:i(`width`),value:s.w,min:1,max:t,onChange:e=>o(c,{w:Math.max(1,Math.min(t,e))})}),(0,S.jsx)(G,{label:i(`height`),value:s.h,min:1,max:n,onChange:e=>o(c,{h:Math.max(1,Math.min(n,e))})})]}),s.type===`sensor`&&(0,S.jsx)($e,{value:s.options,onChange:e=>o(c,{options:e})}),s.type===`better_lighting`&&(0,S.jsx)(Qe,{tile:s,onChange:e=>o(c,{options:e})})]})]},s.id)}),(0,S.jsx)(`div`,{children:(0,S.jsx)(w,{icon:`mdi:plus`,appearance:`filled`,disabled:e.length>=h.tiles,onClick:()=>r([...e,{id:R(),type:`entity`,entity:``,name:``,icon:``,w:1,h:1,options:{}}]),children:i(`add_tile`)})})]})},nt=()=>({id:R(),name:``,icon:``,status:[],columns:2,rows:2,square:!0,tiles:[]}),rt=()=>({id:R(),columns:[75,25],rows:[50,50],sections:[]}),it=e=>({...z(e),id:R(),sections:e.sections.map(e=>({...z(e),id:R(),tiles:e.tiles.map(e=>({...e,id:R()}))}))}),at=e=>{let t=e.split(/[,/ ]+/).filter(Boolean).map(Number);return t.length&&t.length<=3&&t.every(e=>Number.isFinite(e)&&e>0)?t:null},ot=({label:e,hint:t,value:n,onChange:r})=>(0,S.jsx)(W,{label:e,hint:t,value:n.join(`, `),onChange:e=>{let t=at(e);t&&r(t)}}),st=({draft:e,update:t,open:n})=>{let r=y(),i=e.pages,a=n=>t({...e,pages:n});return(0,S.jsxs)(S.Fragment,{children:[(0,S.jsx)(Q,{title:r(`tab_pages`),lead:r(`lead_pages`)}),(0,S.jsx)(A,{children:i.map((e,t)=>(0,S.jsxs)(`li`,{children:[(0,S.jsxs)(`button`,{type:`button`,className:`open`,onClick:()=>n({kind:`page`,page:t}),children:[(0,S.jsx)(u,{className:`icon`,icon:`mdi:book-open-page-variant-outline`}),(0,S.jsxs)(`span`,{className:`text`,children:[(0,S.jsx)(`span`,{children:r(`page_n`,{n:t+1})}),(0,S.jsx)(`span`,{className:`secondary`,children:e.sections.map(e=>e.name).filter(Boolean).join(` · `)||r(`no_sections`)})]})]}),(0,S.jsx)(Z,{index:t,length:i.length,onMove:e=>a(L(i,t,e)),onDuplicate:i.length<h.pages?()=>a([...i.slice(0,t+1),it(e),...i.slice(t+1)]):void 0,onRemove:()=>i.length>1&&a(i.filter((e,n)=>n!==t))})]},e.id))}),(0,S.jsx)(`div`,{children:(0,S.jsx)(w,{icon:`mdi:plus`,appearance:`filled`,disabled:i.length>=h.pages,onClick:()=>{a([...i,rt()]),n({kind:`page`,page:i.length})},children:r(`add_page`)})})]})},ct=({draft:e,update:t,open:n,page:r})=>{let i=y(),a=e.pages[r],o=n=>t({...e,pages:B(e.pages,r,{...a,...n})}),s=a.columns.length*a.rows.length;return(0,S.jsxs)(S.Fragment,{children:[(0,S.jsx)(Q,{title:i(`page_n`,{n:r+1}),lead:i(`lead_page`)}),(0,S.jsxs)(k,{children:[(0,S.jsx)(`h3`,{children:i(`layout`)}),(0,S.jsxs)(F,{children:[(0,S.jsx)(ot,{label:i(`column_split`),hint:i(`split_hint`),value:a.columns,onChange:e=>o({columns:e})}),(0,S.jsx)(ot,{label:i(`row_split`),hint:i(`split_hint`),value:a.rows,onChange:e=>o({rows:e})})]})]}),(0,S.jsxs)(k,{children:[(0,S.jsx)(`h3`,{children:i(`sections`)}),(0,S.jsx)(`p`,{children:i(`sections_hint`,{cells:s})}),(0,S.jsx)(A,{children:Array.from({length:s},(e,t)=>{let s=a.sections[t];return s?(0,S.jsxs)(`li`,{children:[(0,S.jsxs)(`button`,{type:`button`,className:`open`,onClick:()=>n({kind:`section`,page:r,section:t}),children:[(0,S.jsx)(u,{className:`icon`,icon:s.icon||`mdi:view-grid-outline`}),(0,S.jsxs)(`span`,{className:`text`,children:[(0,S.jsx)(`span`,{children:s.name||i(`section_n`,{n:t+1})}),(0,S.jsxs)(`span`,{className:`secondary`,children:[i(`tiles_count`,{count:s.tiles.length}),` · `,s.columns,` × `,s.rows]})]})]}),(0,S.jsx)(Z,{index:t,length:a.sections.length,onMove:e=>o({sections:L(a.sections,t,e)}),onRemove:()=>o({sections:a.sections.filter((e,n)=>n!==t)})})]},s.id):(0,S.jsx)(`li`,{children:(0,S.jsxs)(`button`,{type:`button`,className:`open`,onClick:()=>{let e=[...a.sections];for(;e.length<=t;)e.push(nt());o({sections:e}),n({kind:`section`,page:r,section:t})},children:[(0,S.jsx)(u,{className:`icon`,icon:`mdi:plus-box-outline`}),(0,S.jsxs)(`span`,{className:`text`,children:[(0,S.jsx)(`span`,{children:i(`add_section`)}),(0,S.jsx)(`span`,{className:`secondary`,children:i(`cell_n`,{n:t+1})})]})]})},`empty-${t}`)})})]})]})},lt=({draft:e,update:t,page:n,section:r})=>{let i=y(),a=e.pages[n],o=a.sections[r],s=i=>t({...e,pages:B(e.pages,n,{...a,sections:B(a.sections,r,{...o,...i})})});return(0,S.jsxs)(S.Fragment,{children:[(0,S.jsx)(Q,{title:o.name||i(`section_n`,{n:r+1}),lead:i(`lead_section`)}),(0,S.jsxs)(k,{children:[(0,S.jsx)(`h3`,{children:i(`section_header`)}),(0,S.jsxs)(F,{children:[(0,S.jsx)(W,{label:i(`name`),value:o.name,onChange:e=>s({name:e})}),(0,S.jsx)(J,{label:i(`icon`),value:o.icon,onChange:e=>s({icon:e})})]}),(0,S.jsx)(X,{label:i(`status_entities`),value:o.status,max:2,domains:[`sensor`,`binary_sensor`],onChange:e=>s({status:e})})]}),(0,S.jsxs)(k,{children:[(0,S.jsx)(`h3`,{children:i(`grid`)}),(0,S.jsxs)(F,{children:[(0,S.jsx)(G,{label:i(`columns`),value:o.columns,min:1,max:h.sectionCells,onChange:e=>s({columns:e})}),(0,S.jsx)(G,{label:i(`rows`),value:o.rows,min:1,max:h.sectionCells,onChange:e=>s({rows:e})})]}),(0,S.jsx)(K,{label:i(`square_cells`),hint:i(`square_cells_hint`),value:o.square,onChange:e=>s({square:e})})]}),(0,S.jsxs)(k,{children:[(0,S.jsx)(`h3`,{children:i(`tiles`)}),(0,S.jsx)(tt,{tiles:o.tiles,columns:o.columns,rows:o.rows,onChange:e=>s({tiles:e})})]})]})},ut=({draft:e,update:t,open:n})=>{let r=y(),i=e.buttons,a=n=>t({...e,buttons:n});return(0,S.jsxs)(S.Fragment,{children:[(0,S.jsx)(Q,{title:r(`tab_buttons`),lead:r(`lead_buttons`)}),i.length>0&&(0,S.jsx)(A,{children:i.map((e,t)=>(0,S.jsxs)(`li`,{children:[(0,S.jsxs)(`button`,{type:`button`,className:`open`,onClick:()=>n({kind:`button`,button:t}),children:[(0,S.jsx)(u,{className:`icon`,icon:e.icon||`mdi:gesture-tap`}),(0,S.jsxs)(`span`,{className:`text`,children:[(0,S.jsx)(`span`,{children:e.name||r(`button_n`,{n:t+1})}),(0,S.jsx)(`span`,{className:`secondary`,children:r(`tiles_count`,{count:e.tiles.length})})]})]}),(0,S.jsx)(Z,{index:t,length:i.length,onMove:e=>a(L(i,t,e)),onRemove:()=>a(i.filter((e,n)=>n!==t))})]},e.id))}),(0,S.jsx)(`div`,{children:(0,S.jsxs)(w,{icon:`mdi:plus`,appearance:`filled`,disabled:i.length>=h.buttons,onClick:()=>{a([...i,{id:R(),name:``,icon:`mdi:gesture-tap`,columns:4,tiles:[]}]),n({kind:`button`,button:i.length})},children:[r(`add_button`),` (`,i.length,`/`,h.buttons,`)`]})})]})},dt=({draft:e,update:t,button:n})=>{let r=y(),i=e.buttons[n],a=r=>t({...e,buttons:B(e.buttons,n,{...i,...r})});return(0,S.jsxs)(S.Fragment,{children:[(0,S.jsx)(Q,{title:i.name||r(`button_n`,{n:n+1}),lead:r(`lead_button`)}),(0,S.jsxs)(k,{children:[(0,S.jsxs)(F,{children:[(0,S.jsx)(W,{label:r(`name`),value:i.name,onChange:e=>a({name:e})}),(0,S.jsx)(J,{label:r(`icon`),value:i.icon,onChange:e=>a({icon:e})})]}),(0,S.jsx)(G,{label:r(`columns`),hint:r(`button_columns_hint`),value:i.columns,min:1,max:h.sectionCells,onChange:e=>a({columns:e})})]}),(0,S.jsxs)(k,{children:[(0,S.jsx)(`h3`,{children:r(`tiles`)}),(0,S.jsx)(tt,{tiles:i.tiles,columns:i.columns,rows:h.sectionCells,onChange:e=>a({tiles:e})})]})]})},$=[{id:`tab-10`,label:`10″ tablet · 1280×800`,width:1280,height:800},{id:`tab-11`,label:`11″ tablet · 1194×834`,width:1194,height:834},{id:`tab-12`,label:`12″ tablet · 1366×1024`,width:1366,height:1024},{id:`fhd`,label:`Full HD · 1920×1080`,width:1920,height:1080},{id:`small`,label:`7″ panel · 1024×600`,width:1024,height:600}],ft=({view:e,dashboards:t,...n})=>{switch(e.kind){case`general`:return(0,S.jsx)(Ue,{...n});case`sidebar`:return(0,S.jsx)(qe,{...n,part:e.part});case`pages`:return(0,S.jsx)(st,{...n});case`page`:return(0,S.jsx)(ct,{...n,page:e.page});case`section`:return(0,S.jsx)(lt,{...n,page:e.page,section:e.section});case`buttons`:return(0,S.jsx)(ut,{...n});case`button`:return(0,S.jsx)(dt,{...n,button:e.button});case`users`:return(0,S.jsx)(Pe,{dashboards:t});case`json`:return(0,S.jsx)(Xe,{...n},n.draft.id)}},pt=()=>{let e=y(),t=b(),{narrow:n}=ie(),[r,i]=(0,x.useState)(null),[o,s]=(0,x.useState)(null),[c,l]=(0,x.useState)(!1),[d,f]=(0,x.useState)(``),[ee,te]=(0,x.useState)({kind:`general`}),[ne,p]=(0,x.useState)(()=>new Set),[re,m]=(0,x.useState)(!1),[h,g]=(0,x.useState)(!1),[_,ae]=(0,x.useState)(!1),[v,C]=(0,x.useState)(!1),[oe,T]=(0,x.useState)($[0].id),[E,O]=(0,x.useState)(!1),me=$.find(e=>e.id===oe)??$[0],k=(0,x.useCallback)((e,t)=>{s(z(e.dashboards[t]??e.dashboards.default)),l(!1)},[]);(0,x.useEffect)(()=>{t?.sendMessagePromise({type:`better_wall_dashboard/document`}).then(e=>{i(e),k(e,`default`)}).catch(e=>f(String(e?.message??e)))},[t,k]),(0,x.useEffect)(()=>{if(!c)return;let e=e=>e.preventDefault();return window.addEventListener(`beforeunload`,e),()=>window.removeEventListener(`beforeunload`,e)},[c]);let A=(0,x.useCallback)(e=>{s(e),l(!0),f(``)},[]),j=(0,x.useCallback)((e,t)=>{te(e),p(n=>new Set([...n,...ce(e),...t?[t]:[]])),m(!1),g(!1),C(!1)},[]),_e=(0,x.useCallback)(e=>{p(t=>{let n=new Set(t);return n.delete(e)||n.add(e),n})},[]),{confirm:M,dialog:be}=ze(),N=async()=>!c||M({title:e(`discard_title`),text:e(`discard_text`),confirm:e(`discard`),danger:!0}),P=async()=>{if(t&&o){f(e(`saving`));try{let n=await t.sendMessagePromise({type:`better_wall_dashboard/save_dashboard`,dashboard:o});i(e=>e&&{...e,dashboards:{...e.dashboards,[n.dashboard.id]:n.dashboard}}),s(z(n.dashboard)),l(!1),f(e(`saved`))}catch(e){f(String(e?.message??e))}}},Se=async()=>{r&&o&&await N()&&(r.dashboards[o.id]?k(r,o.id):k(r,`default`),f(``))},F=async e=>{r&&await N()&&(k(r,e),j({kind:`general`}))},I=async t=>{if(g(!1),!r||!await N())return;let n=z(t??r.dashboards.default);s({...n,id:R(),name:t?`${t.name} (2)`:e(`new_dashboard`)}),l(!0),j({kind:`general`})},L=async()=>{if(g(!1),!t||!o)return;let n=e=>He(e)||f(e);try{let r=await t.sendMessagePromise({type:`better_wall_dashboard/reload_tablets`,dashboard_id:o.id});n(e(`tablets_reloaded`,{count:r.reached}))}catch(e){n(String(e?.message??e))}},B=async()=>{if(g(!1),!t||!o||!r||o.id==="default"||!await M({title:e(`delete_title`,{name:o.name}),text:e(`confirm_delete`,{name:o.name}),confirm:e(`delete`),danger:!0}))return;r.dashboards[o.id]&&await t.sendMessagePromise({type:`better_wall_dashboard/delete_dashboard`,dashboard_id:o.id});let n={...r.dashboards};delete n[o.id];let a={...r,dashboards:n};i(a),k(a,`default`),j({kind:`general`})},V=(0,x.useMemo)(()=>Object.values(r?.dashboards??{}),[r]),Ce=(0,x.useMemo)(()=>{let e=Object.values(r?.dashboards??{}).map(e=>({id:e.id,name:e.name}));return o&&!e.some(e=>e.id===o.id)&&e.push({id:o.id,name:o.name}),e.map(e=>e.id===o?.id?{...e,name:o.name}:e)},[r,o]);if(!o)return(0,S.jsxs)(ue,{children:[(0,S.jsx)(de,{"data-narrow":n,children:(0,S.jsx)(`span`,{className:`app-title`,children:e(`editor_title`)})}),(0,S.jsx)(`p`,{style:{padding:24},children:d||e(`loading`)})]});let H=se(ee,o),we=le(H,{label:t=>e(t),page:t=>e(`page_n`,{n:t+1}),section:(t,n)=>o.pages[t]?.sections[n]?.name||e(`section_n`,{n:n+1}),button:t=>o.buttons[t]?.name||e(`button_n`,{n:t+1})}),Te=H.kind===`page`||H.kind===`section`?H.page:void 0,U=H.kind!==`users`;return(0,S.jsx)(Ae,{children:(0,S.jsxs)(ue,{children:[(0,S.jsxs)(de,{"data-narrow":n,children:[(0,S.jsx)(D,{type:`button`,className:`only-narrow`,"aria-label":e(`menu`),onClick:e=>a(e.currentTarget),children:(0,S.jsx)(u,{icon:`mdi:menu`})}),(0,S.jsx)(D,{type:`button`,className:`only-drawer`,"aria-label":e(`editor_menu`),onClick:()=>m(!0),children:(0,S.jsx)(u,{icon:`mdi:format-list-bulleted`})}),(0,S.jsxs)(`div`,{className:`titles`,children:[(0,S.jsx)(`span`,{className:`app-title`,children:e(`editor_title`)}),(0,S.jsxs)(`nav`,{"aria-label":e(`editor_menu`),children:[(0,S.jsx)(`button`,{type:`button`,onClick:()=>j({kind:`general`}),children:o.name}),we.map((e,t)=>(0,S.jsxs)(`span`,{children:[`› `,e.view?(0,S.jsx)(`button`,{type:`button`,onClick:()=>j(e.view),children:e.label}):e.label]},t))]})]}),(0,S.jsx)(`span`,{className:`spacer`}),(0,S.jsx)(D,{type:`button`,className:`only-no-preview`,"aria-pressed":v,"aria-label":e(`preview`),title:e(`preview`),onClick:()=>C(e=>!e),children:(0,S.jsx)(u,{icon:v?`mdi:form-select`:`mdi:tablet-dashboard`})}),(0,S.jsxs)(fe,{children:[(0,S.jsx)(D,{type:`button`,"aria-label":e(`more`),"aria-expanded":h,onClick:()=>g(e=>!e),children:(0,S.jsx)(u,{icon:`mdi:dots-vertical`})}),h&&(0,S.jsxs)(`div`,{className:`menu`,role:`menu`,children:[(0,S.jsxs)(`button`,{type:`button`,role:`menuitem`,onClick:()=>void I(),children:[(0,S.jsx)(u,{icon:`mdi:plus`}),` `,e(`new_dashboard`)]}),(0,S.jsxs)(`button`,{type:`button`,role:`menuitem`,onClick:()=>void I(o),children:[(0,S.jsx)(u,{icon:`mdi:content-copy`}),` `,e(`duplicate`)]}),(0,S.jsxs)(`button`,{type:`button`,role:`menuitem`,onClick:()=>void L(),children:[(0,S.jsx)(u,{icon:`mdi:tablet-cellphone`}),` `,e(`reload_tablets`)]}),(0,S.jsxs)(`button`,{type:`button`,role:`menuitem`,onClick:()=>j({kind:`json`}),children:[(0,S.jsx)(u,{icon:`mdi:code-json`}),` `,e(`edit_json`)]}),(0,S.jsxs)(`button`,{type:`button`,role:`menuitem`,className:`danger`,disabled:o.id==="default",onClick:()=>void B(),children:[(0,S.jsx)(u,{icon:`mdi:delete-outline`}),` `,e(`delete_dashboard`)]}),(0,S.jsx)(`hr`,{}),(0,S.jsxs)(`button`,{type:`button`,role:`menuitem`,onClick:()=>{g(!1),ae(!0)},children:[(0,S.jsx)(u,{icon:`mdi:information-outline`}),` `,e(`about`)]})]})]})]}),(0,S.jsxs)(pe,{children:[(0,S.jsx)(he,{$open:re,onClick:()=>m(!1)}),(0,S.jsx)(ye,{dashboards:Ce,draft:o,view:H,expanded:ne,open:re,onToggle:_e,onOpen:j,onSwitch:e=>void F(e),onNewDashboard:()=>void I()}),(0,S.jsxs)(ge,{$hidden:v,children:[(0,S.jsx)(`div`,{className:`screen-body`,children:(0,S.jsx)(Be.Provider,{value:V,children:(0,S.jsx)(ft,{view:H,dashboards:Ce,draft:o,update:A,open:j})})}),U&&(0,S.jsxs)(`div`,{className:`screen-foot`,children:[(0,S.jsx)(`span`,{className:`status`,children:c?e(`unsaved`):d}),(0,S.jsxs)(`span`,{className:`end`,children:[(0,S.jsx)(w,{appearance:`plain`,disabled:!c,onClick:()=>void Se(),children:e(`discard`)}),(0,S.jsx)(w,{appearance:`accent`,icon:`mdi:content-save-outline`,disabled:!c,onClick:P,children:e(`save`)})]})]})]}),(0,S.jsxs)(ve,{$shown:v,children:[(0,S.jsxs)(`div`,{className:`preview-bar`,children:[(0,S.jsx)(`h2`,{children:e(`preview`)}),(0,S.jsx)(q,{label:e(`device`),value:oe,options:$.map(e=>({value:e.id,label:e.label})),onChange:T}),(0,S.jsx)(D,{type:`button`,style:{color:`var(--secondary-text-color)`},"aria-label":e(E?`landscape`:`portrait`),title:e(E?`landscape`:`portrait`),onClick:()=>O(e=>!e),children:(0,S.jsx)(u,{icon:E?`mdi:phone-rotate-landscape`:`mdi:phone-rotate-portrait`})})]}),(0,S.jsx)(`div`,{className:`stage`,children:(0,S.jsx)(xe,{dashboard:o,device:me,portrait:E,page:Te})})]})]}),(0,S.jsx)(Le,{open:_,onClose:()=>ae(!1)}),be]})})};export{pt as default};