import{C as e,E as t,S as n,T as r,_ as i,a,b as o,c as s,d as c,f as l,g as u,h as d,i as f,l as p,m as ee,n as m,o as te,p as ne,r as re,s as h,t as g,u as _,v as ie,w as v,x as y,y as b}from"./boot-buAcZ-eZ.js";var x=t(r(),1),S=t(v(),1),C=n.button`
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
  ${({$appearance:e,$danger:t})=>{let n=t?`var(--error-color, #db4437)`:`var(--primary-color, #03a9f4)`;return e===`accent`?y`
        background: ${n};
        color: var(--text-primary-color, #fff);
      `:e===`filled`?y`
        background: color-mix(in srgb, ${n} 16%, transparent);
        color: ${n};
      `:y`
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
`,ae=()=>()=>{},w=({children:e,onClick:t,icon:n,appearance:r=`plain`,danger:i=!1,disabled:a,title:o})=>{let s=(0,x.useSyncExternalStore)(ae,()=>!!customElements.get(`ha-button`)),l=(0,S.jsxs)(S.Fragment,{children:[n&&(0,S.jsx)(`span`,{slot:`start`,style:{display:`inline-flex`},children:(0,S.jsx)(c,{icon:n,size:`18px`})}),e]});return s?(0,x.createElement)(`ha-button`,{appearance:r,variant:i?`danger`:`brand`,disabled:a||void 0,title:o,onClick:t},l):(0,S.jsx)(C,{type:`button`,$appearance:r,$danger:i,disabled:a,title:o,onClick:t,children:l})},T=[{part:`clock`,icon:`mdi:clock-outline`,label:`clock`},{part:`status`,icon:`mdi:wifi-star`,label:`nav_status`},{part:`climate`,icon:`mdi:home-thermometer-outline`,label:`room_climate`},{part:`persons`,icon:`mdi:account-multiple-outline`,label:`persons`},{part:`openings`,icon:`mdi:window-open-variant`,label:`openings`},{part:`travel`,icon:`mdi:car-clock`,label:`travel_time`},{part:`quick`,icon:`mdi:gesture-tap-button`,label:`quick_actions`},{part:`calendar`,icon:`mdi:calendar-month-outline`,label:`calendar`},{part:`weather`,icon:`mdi:weather-partly-cloudy`,label:`weather`},{part:`notifications`,icon:`mdi:bell-outline`,label:`notifications`},{part:`system`,icon:`mdi:chart-box-outline`,label:`system_stats`}];function oe(e,t){switch(e.kind){case`page`:return e.page<t.pages.length?e:{kind:`pages`};case`section`:{let n=t.pages[e.page];return n?e.section<n.sections.length?e:{kind:`page`,page:e.page}:{kind:`pages`}}case`button`:return e.button<t.buttons.length?e:{kind:`buttons`};default:return e}}function se(e){switch(e.kind){case`sidebar`:return[`sidebar`];case`page`:return[`pages`];case`section`:return[`pages`,`page-${e.page}`];case`button`:return[`buttons`];default:return[]}}function ce(e,t){return JSON.stringify(e)===JSON.stringify(t)}function le(e,t){switch(e.kind){case`general`:return[{label:t.label(`tab_general`)}];case`sidebar`:{let n=T.find(t=>t.part===e.part);return[{label:t.label(`tab_sidebar`)},{label:t.label(n?.label??e.part)}]}case`pages`:return[{label:t.label(`tab_pages`)}];case`page`:return[{label:t.label(`tab_pages`),view:{kind:`pages`}},{label:t.page(e.page)}];case`section`:return[{label:t.label(`tab_pages`),view:{kind:`pages`}},{label:t.page(e.page),view:{kind:`page`,page:e.page}},{label:t.section(e.page,e.section)}];case`buttons`:return[{label:t.label(`tab_buttons`)}];case`button`:return[{label:t.label(`tab_buttons`),view:{kind:`buttons`}},{label:t.button(e.button)}];case`users`:return[{label:t.label(`tab_users`)}];case`json`:return[{label:t.label(`tab_json`)}]}}var ue=n.div`
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
`,de=n.header`
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
`,E=n.button`
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
`,fe=n.div`
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
`,pe=n.div`
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
`,D=n.div`
  background: var(--card-background-color, #1c1c1c);
  border-radius: var(--ha-card-border-radius, 12px);
  box-shadow: var(--ha-card-box-shadow, none);
  border: 1px solid var(--ha-card-border-color, var(--divider-color, rgba(225, 225, 225, 0.12)));
  box-sizing: border-box;
  min-width: 0;
  min-height: 0;
`,me=n(D)`
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
`,he=n.div`
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
`,ge=n(D)`
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
`,O=n.section`
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
`,k=n.ul`
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
`,A=n.details`
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
`,j=n.div`
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
`,_e=n(D)`
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
`,M=n.dialog`
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
`,ve=({dashboards:e,draft:t,view:n,expanded:r,open:i,onToggle:a,onOpen:s,onSwitch:l,onNewDashboard:u})=>{let d=o(),f=(e,t,r)=>(0,S.jsx)(`li`,{children:(0,S.jsxs)(`button`,{type:`button`,"aria-current":ce(n,e)?`page`:void 0,onClick:()=>s(e),children:[(0,S.jsx)(c,{className:`icon`,icon:r}),(0,S.jsx)(`span`,{className:`grow`,children:t})]})},JSON.stringify(e)),p=(e,t,i,o,l)=>{let u=r.has(e);return(0,S.jsxs)(`li`,{children:[(0,S.jsxs)(`button`,{type:`button`,"aria-expanded":u,"aria-current":ce(n,t)?`page`:void 0,onClick:()=>s(t,e),children:[(0,S.jsx)(c,{className:`icon`,icon:o}),(0,S.jsx)(`span`,{className:`grow`,children:i}),(0,S.jsx)(`span`,{className:`twist`,"data-open":u,role:`button`,"aria-label":i,onClick:t=>{t.stopPropagation(),a(e)},children:(0,S.jsx)(c,{icon:`mdi:chevron-right`})})]}),u&&(0,S.jsx)(`ul`,{className:`sub`,children:l})]},e)},ee=(0,S.jsxs)(S.Fragment,{children:[f({kind:`general`},d(`tab_general`),`mdi:cog-outline`),p(`sidebar`,{kind:`sidebar`,part:T[0].part},d(`tab_sidebar`),`mdi:dock-left`,T.map(e=>f({kind:`sidebar`,part:e.part},d(e.label),e.icon))),p(`pages`,{kind:`pages`},d(`tab_pages`),`mdi:book-open-page-variant-outline`,t.pages.map((e,t)=>e.sections.length?p(`page-${t}`,{kind:`page`,page:t},d(`page_n`,{n:t+1}),`mdi:file-outline`,e.sections.map((e,n)=>f({kind:`section`,page:t,section:n},e.name||d(`section_n`,{n:n+1}),e.icon||`mdi:view-grid-outline`))):f({kind:`page`,page:t},d(`page_n`,{n:t+1}),`mdi:file-outline`))),p(`buttons`,{kind:`buttons`},d(`tab_buttons`),`mdi:gesture-tap-button`,t.buttons.map((e,t)=>f({kind:`button`,button:t},e.name||d(`button_n`,{n:t+1}),e.icon||`mdi:gesture-tap`)))]});return(0,S.jsxs)(me,{$open:i,as:`nav`,"aria-label":d(`editor_title`),children:[(0,S.jsx)(`div`,{className:`heading`,children:d(`nav_dashboards`)}),(0,S.jsxs)(`ul`,{children:[e.map(e=>e.id===t.id?(0,S.jsxs)(`li`,{children:[(0,S.jsxs)(`button`,{type:`button`,"aria-expanded":!0,onClick:()=>s({kind:`general`}),children:[(0,S.jsx)(c,{className:`icon`,icon:`mdi:tablet-dashboard`}),(0,S.jsx)(`span`,{className:`grow`,children:(0,S.jsx)(`strong`,{children:t.name})})]}),(0,S.jsx)(`ul`,{className:`sub`,children:ee})]},e.id):(0,S.jsx)(`li`,{children:(0,S.jsxs)(`button`,{type:`button`,onClick:()=>l(e.id),children:[(0,S.jsx)(c,{className:`icon`,icon:`mdi:tablet-dashboard`}),(0,S.jsx)(`span`,{className:`grow`,children:e.name})]})},e.id)),(0,S.jsx)(`li`,{className:`add`,children:(0,S.jsxs)(`button`,{type:`button`,onClick:u,children:[(0,S.jsx)(c,{className:`icon`,icon:`mdi:plus`}),(0,S.jsx)(`span`,{className:`grow`,children:d(`new_dashboard`)})]})})]}),(0,S.jsx)(`div`,{className:`heading`,children:d(`nav_house`)}),(0,S.jsx)(`ul`,{children:f({kind:`users`},d(`tab_users`),`mdi:account-multiple-outline`)})]})},ye=n.div`
  position: relative;
  width: 100%;
  height: 100%;
  min-height: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
`,be=n.div`
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
`,xe=(0,x.memo)(({dashboard:e,device:t,portrait:n,page:r})=>{let i=o(),a=(0,x.useRef)(null),[s,c]=(0,x.useState)(.5),u=n?t.height:t.width,d=n?t.width:t.height;(0,x.useLayoutEffect)(()=>{let e=a.current;if(!e)return;let t=()=>{let t=Math.min((e.clientWidth-40)/u,(e.clientHeight-40)/d);c(Math.max(.1,Math.min(1,Math.floor(t*1e3)/1e3)))};t();let n=new ResizeObserver(t);return n.observe(e),()=>n.disconnect()},[u,d]);let p=(0,x.useMemo)(()=>({dashboard:e,dashboards:[],kiosk:!1,is_admin:!0,pin_required:!1}),[e]);return(0,S.jsx)(ye,{ref:a,"aria-label":i(`preview`),children:(0,S.jsx)(be,{style:{width:u,height:d,transform:`translate(-50%, -50%) scale(${s})`},children:(0,S.jsx)(l,{view:p,focusPage:r,children:(0,S.jsx)(f,{})})})})}),N=n.label`
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
`,Se=n.label`
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
`,P=n.div`
  display: grid;
  grid-template-columns: ${({$columns:e})=>e??`repeat(auto-fit, minmax(220px, 1fr))`};
  gap: 16px;
  align-items: start;
`,F=n.button`
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
`;function I(e,t,n){if(n<0||n>=e.length)return e;let r=[...e],[i]=r.splice(t,1);return r.splice(n,0,i),r}function L(){let e=new Uint8Array(6);return crypto.getRandomValues(e),Array.from(e,e=>e.toString(16).padStart(2,`0`)).join(``)}var R=e=>JSON.parse(JSON.stringify(e)),z=(e,t,n)=>e.map((e,r)=>r===t?n:e),B=({selector:e,value:t,onChange:n,label:r,helper:i,required:a=!1})=>{let o=(0,x.useRef)(null),s=(0,x.useRef)(null),c=(0,x.useRef)(n);(0,x.useEffect)(()=>{c.current=n}),(0,x.useEffect)(()=>{let e=document.createElement(`ha-selector`);e.hass=g();let t=t=>{t.stopPropagation();let n=t.detail.value;e.value=n,c.current(n)};e.addEventListener(`value-changed`,t),o.current?.append(e),s.current=e;let n=m(t=>{e.hass=t});return()=>{n(),e.removeEventListener(`value-changed`,t),e.remove(),s.current=null}},[]);let l=JSON.stringify(e);return(0,x.useEffect)(()=>{let e=s.current;e&&(e.selector=JSON.parse(l),e.label=r,e.helper=i,e.required=a)},[l,r,i,a]),(0,x.useEffect)(()=>{let e=s.current;e&&e.value!==t&&(e.value=t)},[t]),(0,S.jsx)(`div`,{ref:o,className:`ha-field`})},Ce=[`ha-selector`,`ha-entity-picker`,`ha-switch`,`ha-icon-picker`],V=null;function H(){return Ce.every(e=>customElements.get(e))}function we(){return H()?Promise.resolve(!0):(V??=(async()=>{let e=window.loadCardHelpers;if(!e)return!1;try{let t=await e();for(let e of[{type:`entities`,entities:[]},{type:`button`}])try{await(await t.createCardElement(e)).constructor.getConfigElement?.()}catch{}}catch{return!1}return!!customElements.get(`ha-selector`)})(),V)}function U(){let[e,t]=(0,x.useState)(H),n=(0,x.useSyncExternalStore)(m,()=>g()!==null);return(0,x.useEffect)(()=>{if(e||!n)return;let r=!0;return we().then(e=>r&&e&&t(!0)),()=>{r=!1}},[e,n]),e&&n}var W=({label:e,hint:t,value:n,onChange:r,placeholder:i,type:a=`text`})=>U()?(0,S.jsx)(B,{selector:{text:a===`text`?{}:{type:a}},value:n,label:e,helper:t,onChange:e=>r(typeof e==`string`?e:``)}):(0,S.jsxs)(N,{children:[(0,S.jsx)(`span`,{className:`label`,children:e}),(0,S.jsx)(`input`,{type:a,value:n,placeholder:i,onChange:e=>r(e.target.value)}),t&&(0,S.jsx)(`small`,{children:t})]}),Te=({label:e,hint:t,value:n,onChange:r,suggestions:i=[]})=>{let a=U(),o=e=>[...new Set(e.filter(e=>typeof e==`string`).map(e=>e.trim()).filter(Boolean))];if(a){let a=[...new Set([...n,...i])];return(0,S.jsxs)(N,{as:`div`,children:[(0,S.jsx)(`span`,{className:`label`,children:e}),t&&(0,S.jsx)(`small`,{children:t}),(0,S.jsx)(B,{selector:{select:{multiple:!0,custom_value:!0,mode:`dropdown`,sort:!1,options:a}},value:n,label:e,onChange:e=>r(Array.isArray(e)?o(e):[])})]})}return(0,S.jsxs)(N,{children:[(0,S.jsx)(`span`,{className:`label`,children:e}),(0,S.jsx)(`input`,{type:`text`,value:n.join(`, `),onChange:e=>r(o(e.target.value.split(`,`)))}),t&&(0,S.jsx)(`small`,{children:t})]})},G=({label:e,hint:t,value:n,onChange:r,min:i,max:a,step:o=1,unit:s})=>{let c=U(),l=e=>{let t=Number(e);e!==``&&e!==null&&Number.isFinite(t)&&r(t)};return c?(0,S.jsx)(B,{selector:{number:{min:i,max:a,step:o,mode:`box`,unit_of_measurement:s}},value:n,label:e,helper:t,onChange:l}):(0,S.jsxs)(N,{children:[(0,S.jsx)(`span`,{className:`label`,children:e}),(0,S.jsx)(`input`,{type:`number`,value:n,min:i,max:a,step:o,onChange:e=>l(e.target.value)}),t&&(0,S.jsx)(`small`,{children:t})]})},Ee=({label:e,hint:t,value:n,onChange:r,min:i,max:a,step:o,unit:s,scale:c=1})=>{let l=U(),u=Math.round(n*c*1e3)/1e3,d=e=>{let t=Number(e);Number.isFinite(t)&&r(t/c)};return l?(0,S.jsx)(B,{selector:{number:{min:i,max:a,step:o,mode:`slider`,unit_of_measurement:s}},value:u,label:e,helper:t,onChange:d}):(0,S.jsxs)(N,{children:[(0,S.jsxs)(`span`,{className:`label`,children:[e,`: `,u,s?` ${s}`:``]}),(0,S.jsx)(`input`,{type:`range`,value:u,min:i,max:a,step:o,onChange:e=>d(e.target.value)}),t&&(0,S.jsx)(`small`,{children:t})]})},K=({label:e,hint:t,value:n,onChange:r})=>U()?(0,S.jsx)(B,{selector:{boolean:{}},value:n,label:e,helper:t,onChange:e=>r(!!e)}):(0,S.jsxs)(Se,{children:[(0,S.jsx)(`input`,{type:`checkbox`,checked:n,onChange:e=>r(e.target.checked)}),(0,S.jsxs)(`span`,{children:[e,t&&(0,S.jsx)(`small`,{children:t})]})]}),q=({label:e,hint:t,value:n,onChange:r,options:i})=>U()?(0,S.jsx)(B,{selector:{select:{options:i,mode:`dropdown`}},value:n,label:e,helper:t,required:!0,onChange:e=>typeof e==`string`&&r(e)}):(0,S.jsxs)(N,{children:[(0,S.jsx)(`span`,{className:`label`,children:e}),(0,S.jsx)(`select`,{value:n,onChange:e=>r(e.target.value),children:i.map(e=>(0,S.jsx)(`option`,{value:e.value,children:e.label},e.value))}),t&&(0,S.jsx)(`small`,{children:t})]}),J=({label:e,hint:t,value:n,onChange:r})=>U()?(0,S.jsx)(B,{selector:{icon:{}},value:n,label:e,helper:t,onChange:e=>r(typeof e==`string`?e:``)}):(0,S.jsxs)(N,{children:[(0,S.jsx)(`span`,{className:`label`,children:e}),(0,S.jsxs)(`span`,{className:`with-icon`,children:[(0,S.jsx)(`input`,{type:`text`,value:n,placeholder:`mdi:…`,onChange:e=>r(e.target.value)}),n&&(0,S.jsx)(c,{icon:n,size:`24px`})]}),t&&(0,S.jsx)(`small`,{children:t})]}),De=({label:e,hint:t,value:n,onChange:r,accept:i})=>{let a=U(),o=(0,x.useMemo)(()=>n.startsWith(`media-source://`)?{media_content_id:n,media_content_type:i[0]}:void 0,[n,i]);return a?(0,S.jsx)(B,{selector:{media:{accept:i}},value:o,label:e,helper:t,onChange:e=>r(e?.media_content_id??``)}):(0,S.jsx)(W,{label:e,hint:t,value:n,onChange:r})},Oe=(0,x.createContext)([]),ke=({children:t})=>{let n=e(s(e=>{let t={};for(let[n,r]of Object.entries(e.entities))t[n]=r.attributes.friendly_name||n;return t})),r=(0,x.useMemo)(()=>Object.entries(n).map(([e,t])=>({id:e,name:t})).sort((e,t)=>e.id.localeCompare(t.id)),[n]);return(0,S.jsx)(Oe.Provider,{value:r,children:t})},Ae=(e,t={})=>({entity:{...e?.length?{filter:{domain:e}}:{},...t}}),je=({value:e,domains:t,onChange:n})=>{let r=(0,x.useContext)(Oe),i=(0,x.useId)(),a=(0,x.useMemo)(()=>t?.length?r.filter(e=>t.includes(e.id.split(`.`)[0])):r,[r,t]);return(0,S.jsxs)(S.Fragment,{children:[(0,S.jsx)(`input`,{type:`text`,list:i,value:e,placeholder:t?.length?`${t[0]}.…`:`domain.object_id`,onChange:e=>n(e.target.value.trim())}),(0,S.jsx)(`datalist`,{id:i,children:a.map(e=>(0,S.jsx)(`option`,{value:e.id,children:e.name},e.id))})]})},Y=({label:e,hint:t,value:n,onChange:r,domains:i})=>{let a=U(),s=(0,x.useContext)(Oe),c=o();if(a)return(0,S.jsx)(B,{selector:Ae(i),value:n||void 0,label:e,helper:t,onChange:e=>r(typeof e==`string`?e:``)});let l=s.find(e=>e.id===n);return(0,S.jsxs)(N,{children:[(0,S.jsx)(`span`,{className:`label`,children:e}),(0,S.jsx)(je,{value:n,domains:i,onChange:r}),n&&(0,S.jsx)(`small`,{children:l?l.name:c(`not_found`)}),t&&(0,S.jsx)(`small`,{children:t})]})},X=({label:e,hint:t,value:n,onChange:r,domains:i,max:a})=>{let s=U(),l=o(),u=e=>r(a===void 0?e:e.slice(0,a));return s?(0,S.jsx)(B,{selector:Ae(i,{multiple:!0,reorder:!0}),value:n,label:e,helper:t,onChange:e=>u(Array.isArray(e)?e.filter(e=>typeof e==`string`):[])}):(0,S.jsxs)(N,{as:`div`,children:[(0,S.jsx)(`span`,{className:`label`,children:e}),n.map((e,t)=>(0,S.jsxs)(P,{$columns:`minmax(0, 1fr) auto`,children:[(0,S.jsx)(je,{value:e,domains:i,onChange:e=>u(n.map((n,r)=>r===t?e:n))}),(0,S.jsx)(Z,{index:t,length:n.length,onMove:e=>u(I(n,t,e)),onRemove:()=>u(n.filter((e,n)=>n!==t))})]},t)),(a===void 0||n.length<a)&&(0,S.jsx)(F,{type:`button`,className:`add`,onClick:()=>u([...n,``]),title:l(`add`),"aria-label":l(`add`),children:(0,S.jsx)(c,{icon:`mdi:plus`})}),t&&(0,S.jsx)(`small`,{children:t})]})},Z=({index:e,length:t,onMove:n,onRemove:r,onDuplicate:i})=>{let a=o();return(0,S.jsxs)(`span`,{className:`list-controls`,children:[(0,S.jsx)(F,{type:`button`,disabled:e===0,onClick:()=>n(e-1),title:a(`move_up`),"aria-label":a(`move_up`),children:(0,S.jsx)(c,{icon:`mdi:arrow-up`})}),(0,S.jsx)(F,{type:`button`,disabled:e===t-1,onClick:()=>n(e+1),title:a(`move_down`),"aria-label":a(`move_down`),children:(0,S.jsx)(c,{icon:`mdi:arrow-down`})}),i&&(0,S.jsx)(F,{type:`button`,onClick:i,title:a(`duplicate`),"aria-label":a(`duplicate`),children:(0,S.jsx)(c,{icon:`mdi:content-copy`})}),(0,S.jsx)(F,{type:`button`,$danger:!0,onClick:r,title:a(`remove`),"aria-label":a(`remove`),children:(0,S.jsx)(c,{icon:`mdi:delete-outline`})})]})},Q=({title:e,lead:t})=>(0,S.jsxs)(S.Fragment,{children:[(0,S.jsx)(`h2`,{children:e}),t&&(0,S.jsx)(`p`,{className:`lead`,children:t})]}),Me=n.span`
  margin-left: 8px;
  padding: 1px 8px;
  border-radius: 999px;
  font-size: 12px;
  font-weight: 400;
  background: var(--secondary-background-color, #282828);
  color: var(--secondary-text-color, #9b9b9b);
`,Ne=({dashboards:e})=>{let t=o(),n=ie(),[r,i]=(0,x.useState)(null);(0,x.useEffect)(()=>{n?.sendMessagePromise({type:`better_wall_dashboard/users`}).then(e=>i(e.users)).catch(()=>i([]))},[n]);let a=(0,x.useCallback)(async(e,t)=>{if(!n)return;i(n=>n?.map(n=>n.id===e.id?{...n,...t}:n)??null);let r=await n.sendMessagePromise({type:`better_wall_dashboard/save_user`,user_id:e.id,...t});i(t=>t?.map(t=>t.id===e.id?{...t,...r}:t)??null)},[n]);return(0,S.jsxs)(S.Fragment,{children:[(0,S.jsx)(Q,{title:t(`tab_users`),lead:t(`lead_users`)}),r?.map(n=>(0,S.jsxs)(A,{open:!n.is_admin||void 0,children:[(0,S.jsxs)(`summary`,{children:[(0,S.jsx)(c,{className:`icon`,icon:n.is_admin?`mdi:shield-account-outline`:`mdi:tablet`}),(0,S.jsxs)(`span`,{className:`text`,children:[(0,S.jsxs)(`span`,{children:[n.name,n.is_admin&&(0,S.jsx)(Me,{children:t(`admin`)}),!n.is_active&&(0,S.jsx)(Me,{children:t(`inactive`)})]}),(0,S.jsx)(`span`,{className:`secondary`,children:e.find(e=>e.id===n.dashboard)?.name??n.dashboard})]})]}),(0,S.jsxs)(`div`,{className:`fold-body`,children:[(0,S.jsx)(q,{label:t(`assigned_dashboard`),value:n.dashboard,options:e.map(e=>({value:e.id,label:e.name})),onChange:e=>a(n,{dashboard:e})}),(0,S.jsxs)(P,{children:[(0,S.jsx)(K,{label:t(`kiosk`),hint:t(`kiosk_user_hint`),value:n.kiosk,onChange:e=>a(n,{kiosk:e})}),(0,S.jsx)(K,{label:t(`start_page`),hint:t(`start_page_hint`),value:!!n.default_panel,onChange:e=>a(n,{default_panel:e})})]}),(0,S.jsx)(K,{label:t(`sidebar_only`),hint:t(`sidebar_only_hint`),value:n.sidebar_only,onChange:e=>a(n,{sidebar_only:e})})]})]},n.id))]})},Pe=`/better_wall_dashboard/static/icon.png`,Fe=n(M)`
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
`,Ie=({open:e,onClose:t})=>{let n=o(),r=ie(),i=(0,x.useRef)(null),[a,s]=(0,x.useState)(null),l=ne();(0,x.useEffect)(()=>{let t=i.current;t&&(e&&!t.open&&t.showModal(),!e&&t.open&&t.close())}),(0,x.useEffect)(()=>{e&&r?.sendMessagePromise({type:`better_wall_dashboard/version`}).then(s).catch(()=>void 0)},[e,r]);let u=!!(l&&a&&a.app!==l);return(0,S.jsxs)(Fe,{ref:i,tabIndex:-1,onClose:()=>e&&t(),onClick:e=>e.target===e.currentTarget&&t(),children:[(0,S.jsxs)(`div`,{className:`head`,children:[(0,S.jsx)(`img`,{src:Pe,alt:``}),(0,S.jsx)(`h2`,{children:`Better Wall Dashboard`})]}),(0,S.jsx)(`p`,{className:`muted`,children:n(`about_blurb`)}),(0,S.jsx)(`table`,{children:(0,S.jsxs)(`tbody`,{children:[(0,S.jsxs)(`tr`,{children:[(0,S.jsx)(`th`,{children:n(`about_version`)}),(0,S.jsx)(`td`,{children:a?.version??`–`})]}),(0,S.jsxs)(`tr`,{children:[(0,S.jsx)(`th`,{children:n(`about_page`)}),(0,S.jsx)(`td`,{children:l?l.slice(0,12):`–`})]})]})}),u&&(0,S.jsxs)(S.Fragment,{children:[(0,S.jsx)(`p`,{children:n(`update_available`)}),(0,S.jsx)(w,{appearance:`filled`,icon:`mdi:reload`,onClick:()=>{let e=d(),t=null;if(e&&a){let n=new URL(e);n.searchParams.set(`v`,a.app),t=n.toString()}ee(t)},children:n(`reload`)})]}),(a?.documentation||a?.issues)&&(0,S.jsxs)(`p`,{children:[a.documentation&&(0,S.jsx)(`a`,{href:a.documentation,target:`_blank`,rel:`noopener noreferrer`,children:n(`about_repo`)}),a.documentation&&a.issues&&` · `,a.issues&&(0,S.jsx)(`a`,{href:a.issues,target:`_blank`,rel:`noopener noreferrer`,children:n(`about_issues`)})]}),(0,S.jsx)(F,{type:`button`,className:`shut`,"aria-label":n(`close`),title:n(`close`),onClick:t,children:(0,S.jsx)(c,{icon:`mdi:close`})})]})},Le=({request:e,onAnswer:t})=>{let n=o(),r=(0,x.useRef)(null);return(0,x.useEffect)(()=>{let t=r.current;t&&(e&&!t.open&&t.showModal(),!e&&t.open&&t.close())}),(0,S.jsx)(M,{ref:r,role:`alertdialog`,tabIndex:-1,onCancel:e=>{e.preventDefault(),t(!1)},onClick:e=>e.target===e.currentTarget&&t(!1),children:e&&(0,S.jsxs)(S.Fragment,{children:[(0,S.jsx)(`h2`,{children:e.title}),e.text&&(0,S.jsx)(`p`,{className:`muted`,children:e.text}),(0,S.jsxs)(`div`,{className:`actions`,children:[(0,S.jsx)(w,{appearance:`plain`,onClick:()=>t(!1),children:n(`cancel`)}),(0,S.jsx)(w,{appearance:`accent`,danger:e.danger,onClick:()=>t(!0),children:e.confirm})]})]})})};function Re(){let[e,t]=(0,x.useState)(null);return{confirm:(0,x.useCallback)(e=>new Promise(n=>t({...e,resolve:n})),[]),dialog:(0,S.jsx)(Le,{request:e,onAnswer:n=>{e?.resolve(n),t(null)}})}}var ze=(0,x.createContext)([]);function Be(){return(0,x.useContext)(ze)}function Ve(e){let t=document.querySelector(`home-assistant`);return t?(t.dispatchEvent(new CustomEvent(`hass-notification`,{bubbles:!0,composed:!0,detail:{message:e,dismissable:!0}})),!0):!1}var He=({draft:e,update:t})=>{let n=o(),r=n=>t({...e,background:{...e.background,...n}});return(0,S.jsxs)(S.Fragment,{children:[(0,S.jsx)(Q,{title:n(`tab_general`),lead:n(`lead_general`)}),(0,S.jsx)(O,{children:(0,S.jsx)(W,{label:n(`name`),value:e.name,onChange:n=>t({...e,name:n})})}),(0,S.jsxs)(O,{children:[(0,S.jsx)(`h3`,{children:n(`background`)}),(0,S.jsx)(De,{label:n(`background_media`),hint:n(`background_media_hint`),accept:[`image/*`],value:e.background.image,onChange:e=>r({image:e})}),(0,S.jsx)(W,{label:n(`background_image`),hint:n(`background_image_hint`),type:`url`,value:e.background.image.startsWith(`media-source://`)?``:e.background.image,onChange:e=>r({image:e})}),(0,S.jsxs)(P,{children:[(0,S.jsx)(Ee,{label:n(`background_dim`),value:e.background.dim,min:0,max:95,step:5,unit:`%`,scale:100,onChange:e=>r({dim:e})}),(0,S.jsx)(Ee,{label:n(`background_blur`),value:e.background.blur,min:0,max:40,step:1,unit:`px`,onChange:e=>r({blur:e})})]})]}),(0,S.jsxs)(O,{children:[(0,S.jsx)(`h3`,{children:n(`security_heading`)}),(0,S.jsx)(W,{label:n(`pin`),hint:n(`pin_hint`),type:`password`,value:e.pin??``,onChange:n=>t({...e,pin:n.replace(/\D/g,``).slice(0,8)})})]})]})},Ue=({item:e})=>{let t=b(e.entity||void 0),n=o(),r=e.name||t?.attributes.friendly_name||e.entity||n(`not_set`);return(0,S.jsxs)(S.Fragment,{children:[(0,S.jsx)(c,{className:`icon`,icon:e.icon||t?.attributes.icon||i(e.entity)}),(0,S.jsxs)(`span`,{className:`text`,children:[(0,S.jsx)(`span`,{children:r}),e.entity&&(0,S.jsx)(`span`,{className:`secondary`,children:e.entity})]})]})},We=({items:e,max:t,domains:n,addLabel:r,onChange:i})=>{let a=o(),s=(t,n)=>i(z(e,t,{...e[t],...n}));return(0,S.jsxs)(S.Fragment,{children:[e.length===0&&(0,S.jsxs)(j,{children:[(0,S.jsx)(c,{icon:`mdi:playlist-plus`}),(0,S.jsx)(`span`,{children:a(`empty_list`)})]}),e.map((t,r)=>(0,S.jsxs)(A,{open:!t.entity||void 0,children:[(0,S.jsxs)(`summary`,{children:[(0,S.jsx)(Ue,{item:t}),(0,S.jsx)(`span`,{onClick:e=>e.preventDefault(),children:(0,S.jsx)(Z,{index:r,length:e.length,onMove:t=>i(I(e,r,t)),onRemove:()=>i(e.filter((e,t)=>t!==r))})})]}),(0,S.jsxs)(`div`,{className:`fold-body`,children:[(0,S.jsx)(Y,{label:a(`entity`),value:t.entity,domains:n,onChange:e=>s(r,{entity:e})}),(0,S.jsxs)(P,{children:[(0,S.jsx)(W,{label:a(`name`),hint:a(`name_hint`),value:t.name,onChange:e=>s(r,{name:e})}),(0,S.jsx)(J,{label:a(`icon`),value:t.icon,onChange:e=>s(r,{icon:e})})]})]})]},t.id)),(0,S.jsx)(`div`,{children:(0,S.jsxs)(w,{icon:`mdi:plus`,appearance:`filled`,disabled:e.length>=t,onClick:()=>i([...e,{id:L(),entity:``,name:``,icon:``}]),children:[r,` (`,e.length,`/`,t,`)`]})})]})},Ge=[`input_boolean`,`switch`,`binary_sensor`],Ke=({draft:e,update:t,part:n})=>{let r=o(),i=Be(),s=e.sidebar,c=n=>t({...e,sidebar:n}),l=(e,t)=>c({...s,[e]:{...s[e],...t}}),u=T.find(e=>e.part===n)?.label??`tab_sidebar`,d=(0,S.jsx)(Q,{title:r(u),lead:r(`lead_${n}`)});switch(n){case`clock`:return(0,S.jsxs)(S.Fragment,{children:[d,(0,S.jsxs)(O,{children:[(0,S.jsx)(q,{label:r(`clock_style`),value:s.clock?.style??`digital`,options:[{value:`digital`,label:r(`clock_digital`)},{value:`analog`,label:r(`clock_analog`)}],onChange:e=>l(`clock`,{style:e})}),(0,S.jsx)(K,{label:r(`clock_seconds`),value:!!s.clock?.seconds,onChange:e=>l(`clock`,{seconds:e})})]})]});case`status`:return(0,S.jsxs)(S.Fragment,{children:[d,(0,S.jsxs)(O,{children:[(0,S.jsx)(`h3`,{children:r(`status_icons`)}),(0,S.jsx)(`p`,{children:r(`status_icons_hint`)}),(0,S.jsx)(We,{items:s.status.icons??[],max:h.statusIcons,domains:Ge,addLabel:r(`add_status_icon`),onChange:e=>l(`status`,{icons:e})})]}),(0,S.jsxs)(O,{children:[(0,S.jsx)(`h3`,{children:r(`wifi_heading`)}),(0,S.jsx)(Y,{label:r(`wifi_signal`),hint:r(`wifi_signal_hint`),value:s.status.wifi_signal,domains:[`sensor`],onChange:e=>l(`status`,{wifi_signal:e})})]}),(0,S.jsxs)(O,{children:[(0,S.jsx)(`h3`,{children:r(`guest_wifi`)}),(0,S.jsx)(Y,{label:r(`guest_qr_image`),hint:r(`guest_qr_image_hint`),value:s.guest_wifi.qr_image,domains:[`image`],onChange:e=>l(`guest_wifi`,{qr_image:e})}),(0,S.jsxs)(P,{children:[(0,S.jsx)(W,{label:r(`network`),value:s.guest_wifi.ssid,onChange:e=>l(`guest_wifi`,{ssid:e})}),(0,S.jsx)(W,{label:r(`password`),type:`password`,value:s.guest_wifi.password,onChange:e=>l(`guest_wifi`,{password:e})})]}),(0,S.jsxs)(P,{children:[(0,S.jsx)(q,{label:r(`security`),value:s.guest_wifi.security,options:[{value:`WPA`,label:`WPA/WPA2/WPA3`},{value:`WEP`,label:`WEP`},{value:`nopass`,label:r(`open_network`)}],onChange:e=>l(`guest_wifi`,{security:e})}),(0,S.jsx)(K,{label:r(`hidden_network`),value:s.guest_wifi.hidden,onChange:e=>l(`guest_wifi`,{hidden:e})})]})]})]});case`climate`:return(0,S.jsxs)(S.Fragment,{children:[d,(0,S.jsxs)(O,{children:[(0,S.jsx)(Y,{label:r(`temperature`),value:s.climate.temperature,domains:[`sensor`],onChange:e=>l(`climate`,{temperature:e})}),(0,S.jsx)(Y,{label:r(`humidity`),value:s.climate.humidity,domains:[`sensor`],onChange:e=>l(`climate`,{humidity:e})}),(0,S.jsx)(G,{label:r(`hours`),value:s.climate.hours,min:1,max:168,unit:`h`,onChange:e=>l(`climate`,{hours:e})})]})]});case`persons`:return(0,S.jsxs)(S.Fragment,{children:[d,(0,S.jsx)(X,{label:r(`persons`),value:s.persons,domains:[`person`],onChange:e=>c({...s,persons:e})})]});case`openings`:return(0,S.jsxs)(S.Fragment,{children:[d,(0,S.jsx)(X,{label:r(`openings`),hint:r(`openings_hint`),value:s.openings,domains:[`binary_sensor`,`cover`,`lock`,`sensor`],onChange:e=>c({...s,openings:e})})]});case`travel`:return(0,S.jsxs)(S.Fragment,{children:[d,(0,S.jsxs)(O,{children:[(0,S.jsx)(Y,{label:r(`travel_sensor`),value:s.travel.entity,domains:[`sensor`],onChange:e=>l(`travel`,{entity:e})}),(0,S.jsx)(W,{label:r(`name`),hint:r(`travel_name_hint`),value:s.travel.name,onChange:e=>l(`travel`,{name:e})})]}),(0,S.jsxs)(O,{children:[(0,S.jsx)(`h3`,{children:r(`map`)}),(0,S.jsx)(W,{label:r(`maps_api_key`),hint:r(`maps_api_key_hint`),type:`password`,value:s.travel.maps_api_key,onChange:e=>l(`travel`,{maps_api_key:e})}),(0,S.jsx)(W,{label:r(`map_url`),hint:r(`map_url_hint`),type:`url`,value:s.travel.map_url,onChange:e=>l(`travel`,{map_url:e})})]})]});case`quick`:return(0,S.jsxs)(S.Fragment,{children:[d,(0,S.jsx)(We,{items:s.quick_actions,max:h.quickActions,addLabel:r(`add_quick_action`),onChange:e=>c({...s,quick_actions:e})})]});case`calendar`:return(0,S.jsxs)(S.Fragment,{children:[d,(0,S.jsxs)(O,{children:[(0,S.jsx)(X,{label:r(`calendars`),value:s.calendar.entities,domains:[`calendar`],onChange:e=>l(`calendar`,{entities:e})}),(0,S.jsx)(G,{label:r(`days`),hint:r(`calendar_days_hint`),value:s.calendar.days,min:1,max:h.calendarDays,onChange:e=>l(`calendar`,{days:e})})]})]});case`weather`:return(0,S.jsxs)(S.Fragment,{children:[d,(0,S.jsxs)(O,{children:[(0,S.jsx)(Y,{label:r(`weather_entity`),value:s.weather.entity,domains:[`weather`],onChange:e=>l(`weather`,{entity:e})}),(0,S.jsx)(Y,{label:r(`outdoor_temperature`),hint:r(`outdoor_temperature_hint`),value:s.weather.temperature,domains:[`sensor`],onChange:e=>l(`weather`,{temperature:e})})]})]});case`notifications`:return(0,S.jsxs)(S.Fragment,{children:[d,(0,S.jsxs)(O,{children:[(0,S.jsx)(K,{label:r(`notifications_enabled`),value:s.notifications.enabled,onChange:e=>l(`notifications`,{enabled:e})}),(0,S.jsx)(Te,{label:r(`notifications_prefix`),hint:r(`notifications_prefix_hint`),suggestions:te([...i,e]),value:a(s.notifications),onChange:e=>l(`notifications`,{prefixes:e})})]}),(0,S.jsxs)(O,{children:[(0,S.jsx)(`h3`,{children:r(`settings`)}),(0,S.jsx)(K,{label:r(`settings_enabled`),hint:r(`settings_enabled_hint`),value:s.settings?.enabled!==!1,onChange:e=>l(`settings`,{enabled:e})})]})]});case`system`:return(0,S.jsxs)(S.Fragment,{children:[d,(0,S.jsx)(We,{items:s.system,max:h.system,domains:[`sensor`],addLabel:r(`add_statistic`),onChange:e=>c({...s,system:e})})]})}},qe=n.textarea`
  min-height: 55vh;
  padding: 12px;
  border-radius: 8px;
  border: 1px solid var(--divider-color, rgba(225, 225, 225, 0.12));
  background: var(--code-editor-background-color, var(--secondary-background-color, #282828));
  color: inherit;
  font-family: var(--ha-font-family-code, ui-monospace, monospace);
  font-size: 13px;
  resize: vertical;
`,Je=n.p`
  margin: 0;
  color: var(--error-color, #db4437);
`,Ye=({draft:e,update:t})=>{let n=o(),[r,i]=(0,x.useState)(()=>JSON.stringify(e,null,2)),[a,s]=(0,x.useState)(!1);return(0,S.jsxs)(S.Fragment,{children:[(0,S.jsx)(Q,{title:n(`tab_json`),lead:n(`json_hint`)}),(0,S.jsx)(qe,{value:r,spellCheck:!1,onChange:e=>{i(e.target.value),s(!1)}}),a&&(0,S.jsx)(Je,{children:n(`json_invalid`)}),(0,S.jsx)(`div`,{children:(0,S.jsx)(w,{icon:`mdi:check`,appearance:`filled`,onClick:()=>{try{t({...JSON.parse(r),id:e.id})}catch{s(!0)}},children:n(`apply`)})})]})},Xe=({value:e,onChange:t})=>{let[n,r]=(0,x.useState)(()=>Object.keys(e).length?JSON.stringify(e):``),[i,a]=(0,x.useState)(!1),s=o();return(0,S.jsxs)(N,{children:[(0,S.jsx)(`span`,{className:`label`,children:s(`options_json`)}),(0,S.jsx)(`input`,{type:`text`,value:n,placeholder:`{"hours": 24, "color": "#03a9f4"}`,onChange:e=>{r(e.target.value);try{let n=e.target.value.trim()?JSON.parse(e.target.value):{};if(n&&typeof n==`object`&&!Array.isArray(n)){a(!1),t(n);return}}catch{}a(!0)}}),i&&(0,S.jsx)(`small`,{children:s(`json_invalid`)})]})},Ze=({tile:e})=>{let t=o(),n=b(e.entity||void 0),r=_[e.type],i=e.name||n?.attributes.friendly_name||e.entity||(r?t(r.label):e.type);return(0,S.jsxs)(S.Fragment,{children:[(0,S.jsx)(c,{className:`icon`,icon:e.icon||r?.icon||`mdi:square-rounded-outline`}),(0,S.jsxs)(`span`,{className:`text`,children:[(0,S.jsx)(`span`,{children:i}),(0,S.jsxs)(`span`,{className:`secondary`,children:[r?t(r.label):e.type,` · `,e.w,` × `,e.h]})]})]})},Qe=({tiles:e,columns:t,rows:n,onChange:r})=>{let i=o(),a=(t,n)=>r(z(e,t,{...e[t],...n}));return(0,S.jsxs)(S.Fragment,{children:[e.length===0&&(0,S.jsxs)(j,{children:[(0,S.jsx)(c,{icon:`mdi:view-grid-plus-outline`}),(0,S.jsx)(`span`,{children:i(`empty_tiles`)})]}),e.map((o,s)=>{let c=_[o.type];return(0,S.jsxs)(A,{open:!o.entity&&c?.needsEntity!==!1||void 0,children:[(0,S.jsxs)(`summary`,{children:[(0,S.jsx)(Ze,{tile:o}),(0,S.jsx)(`span`,{onClick:e=>e.preventDefault(),children:(0,S.jsx)(Z,{index:s,length:e.length,onMove:t=>r(I(e,s,t)),onRemove:()=>r(e.filter((e,t)=>t!==s)),onDuplicate:()=>r([...e.slice(0,s+1),{...o,id:L()},...e.slice(s+1)])})})]}),(0,S.jsxs)(`div`,{className:`fold-body`,children:[(0,S.jsx)(q,{label:i(`type`),value:o.type,options:[...p.map(e=>({value:e.type,label:i(e.label)})),...c?[]:[{value:o.type,label:o.type}]],onChange:e=>{let r=_[e]?.size??[1,1];a(s,{type:e,w:Math.min(r[0],t),h:Math.min(r[1],n)})}}),c?.needsEntity!==!1&&(0,S.jsx)(Y,{label:i(`entity`),value:o.entity,domains:c?.domains,onChange:e=>a(s,{entity:e})}),(0,S.jsxs)(P,{children:[(0,S.jsx)(W,{label:i(`name`),hint:i(`name_hint`),value:o.name,onChange:e=>a(s,{name:e})}),(0,S.jsx)(J,{label:i(`icon`),value:o.icon,onChange:e=>a(s,{icon:e})})]}),(0,S.jsxs)(P,{children:[(0,S.jsx)(G,{label:i(`width`),value:o.w,min:1,max:t,onChange:e=>a(s,{w:Math.max(1,Math.min(t,e))})}),(0,S.jsx)(G,{label:i(`height`),value:o.h,min:1,max:n,onChange:e=>a(s,{h:Math.max(1,Math.min(n,e))})})]}),o.type===`sensor`&&(0,S.jsx)(Xe,{value:o.options,onChange:e=>a(s,{options:e})})]})]},o.id)}),(0,S.jsx)(`div`,{children:(0,S.jsx)(w,{icon:`mdi:plus`,appearance:`filled`,disabled:e.length>=h.tiles,onClick:()=>r([...e,{id:L(),type:`entity`,entity:``,name:``,icon:``,w:1,h:1,options:{}}]),children:i(`add_tile`)})})]})},$e=()=>({id:L(),name:``,icon:``,status:[],columns:2,rows:2,square:!0,tiles:[]}),et=()=>({id:L(),columns:[75,25],rows:[50,50],sections:[]}),tt=e=>({...R(e),id:L(),sections:e.sections.map(e=>({...R(e),id:L(),tiles:e.tiles.map(e=>({...e,id:L()}))}))}),nt=e=>{let t=e.split(/[,/ ]+/).filter(Boolean).map(Number);return t.length&&t.length<=3&&t.every(e=>Number.isFinite(e)&&e>0)?t:null},rt=({label:e,hint:t,value:n,onChange:r})=>(0,S.jsx)(W,{label:e,hint:t,value:n.join(`, `),onChange:e=>{let t=nt(e);t&&r(t)}}),it=({draft:e,update:t,open:n})=>{let r=o(),i=e.pages,a=n=>t({...e,pages:n});return(0,S.jsxs)(S.Fragment,{children:[(0,S.jsx)(Q,{title:r(`tab_pages`),lead:r(`lead_pages`)}),(0,S.jsx)(k,{children:i.map((e,t)=>(0,S.jsxs)(`li`,{children:[(0,S.jsxs)(`button`,{type:`button`,className:`open`,onClick:()=>n({kind:`page`,page:t}),children:[(0,S.jsx)(c,{className:`icon`,icon:`mdi:book-open-page-variant-outline`}),(0,S.jsxs)(`span`,{className:`text`,children:[(0,S.jsx)(`span`,{children:r(`page_n`,{n:t+1})}),(0,S.jsx)(`span`,{className:`secondary`,children:e.sections.map(e=>e.name).filter(Boolean).join(` · `)||r(`no_sections`)})]})]}),(0,S.jsx)(Z,{index:t,length:i.length,onMove:e=>a(I(i,t,e)),onDuplicate:i.length<h.pages?()=>a([...i.slice(0,t+1),tt(e),...i.slice(t+1)]):void 0,onRemove:()=>i.length>1&&a(i.filter((e,n)=>n!==t))})]},e.id))}),(0,S.jsx)(`div`,{children:(0,S.jsx)(w,{icon:`mdi:plus`,appearance:`filled`,disabled:i.length>=h.pages,onClick:()=>{a([...i,et()]),n({kind:`page`,page:i.length})},children:r(`add_page`)})})]})},at=({draft:e,update:t,open:n,page:r})=>{let i=o(),a=e.pages[r],s=n=>t({...e,pages:z(e.pages,r,{...a,...n})}),l=a.columns.length*a.rows.length;return(0,S.jsxs)(S.Fragment,{children:[(0,S.jsx)(Q,{title:i(`page_n`,{n:r+1}),lead:i(`lead_page`)}),(0,S.jsxs)(O,{children:[(0,S.jsx)(`h3`,{children:i(`layout`)}),(0,S.jsxs)(P,{children:[(0,S.jsx)(rt,{label:i(`column_split`),hint:i(`split_hint`),value:a.columns,onChange:e=>s({columns:e})}),(0,S.jsx)(rt,{label:i(`row_split`),hint:i(`split_hint`),value:a.rows,onChange:e=>s({rows:e})})]})]}),(0,S.jsxs)(O,{children:[(0,S.jsx)(`h3`,{children:i(`sections`)}),(0,S.jsx)(`p`,{children:i(`sections_hint`,{cells:l})}),(0,S.jsx)(k,{children:Array.from({length:l},(e,t)=>{let o=a.sections[t];return o?(0,S.jsxs)(`li`,{children:[(0,S.jsxs)(`button`,{type:`button`,className:`open`,onClick:()=>n({kind:`section`,page:r,section:t}),children:[(0,S.jsx)(c,{className:`icon`,icon:o.icon||`mdi:view-grid-outline`}),(0,S.jsxs)(`span`,{className:`text`,children:[(0,S.jsx)(`span`,{children:o.name||i(`section_n`,{n:t+1})}),(0,S.jsxs)(`span`,{className:`secondary`,children:[i(`tiles_count`,{count:o.tiles.length}),` · `,o.columns,` × `,o.rows]})]})]}),(0,S.jsx)(Z,{index:t,length:a.sections.length,onMove:e=>s({sections:I(a.sections,t,e)}),onRemove:()=>s({sections:a.sections.filter((e,n)=>n!==t)})})]},o.id):(0,S.jsx)(`li`,{children:(0,S.jsxs)(`button`,{type:`button`,className:`open`,onClick:()=>{let e=[...a.sections];for(;e.length<=t;)e.push($e());s({sections:e}),n({kind:`section`,page:r,section:t})},children:[(0,S.jsx)(c,{className:`icon`,icon:`mdi:plus-box-outline`}),(0,S.jsxs)(`span`,{className:`text`,children:[(0,S.jsx)(`span`,{children:i(`add_section`)}),(0,S.jsx)(`span`,{className:`secondary`,children:i(`cell_n`,{n:t+1})})]})]})},`empty-${t}`)})})]})]})},ot=({draft:e,update:t,page:n,section:r})=>{let i=o(),a=e.pages[n],s=a.sections[r],c=i=>t({...e,pages:z(e.pages,n,{...a,sections:z(a.sections,r,{...s,...i})})});return(0,S.jsxs)(S.Fragment,{children:[(0,S.jsx)(Q,{title:s.name||i(`section_n`,{n:r+1}),lead:i(`lead_section`)}),(0,S.jsxs)(O,{children:[(0,S.jsx)(`h3`,{children:i(`section_header`)}),(0,S.jsxs)(P,{children:[(0,S.jsx)(W,{label:i(`name`),value:s.name,onChange:e=>c({name:e})}),(0,S.jsx)(J,{label:i(`icon`),value:s.icon,onChange:e=>c({icon:e})})]}),(0,S.jsx)(X,{label:i(`status_entities`),value:s.status,max:2,domains:[`sensor`,`binary_sensor`],onChange:e=>c({status:e})})]}),(0,S.jsxs)(O,{children:[(0,S.jsx)(`h3`,{children:i(`grid`)}),(0,S.jsxs)(P,{children:[(0,S.jsx)(G,{label:i(`columns`),value:s.columns,min:1,max:h.sectionCells,onChange:e=>c({columns:e})}),(0,S.jsx)(G,{label:i(`rows`),value:s.rows,min:1,max:h.sectionCells,onChange:e=>c({rows:e})})]}),(0,S.jsx)(K,{label:i(`square_cells`),hint:i(`square_cells_hint`),value:s.square,onChange:e=>c({square:e})})]}),(0,S.jsxs)(O,{children:[(0,S.jsx)(`h3`,{children:i(`tiles`)}),(0,S.jsx)(Qe,{tiles:s.tiles,columns:s.columns,rows:s.rows,onChange:e=>c({tiles:e})})]})]})},st=({draft:e,update:t,open:n})=>{let r=o(),i=e.buttons,a=n=>t({...e,buttons:n});return(0,S.jsxs)(S.Fragment,{children:[(0,S.jsx)(Q,{title:r(`tab_buttons`),lead:r(`lead_buttons`)}),i.length>0&&(0,S.jsx)(k,{children:i.map((e,t)=>(0,S.jsxs)(`li`,{children:[(0,S.jsxs)(`button`,{type:`button`,className:`open`,onClick:()=>n({kind:`button`,button:t}),children:[(0,S.jsx)(c,{className:`icon`,icon:e.icon||`mdi:gesture-tap`}),(0,S.jsxs)(`span`,{className:`text`,children:[(0,S.jsx)(`span`,{children:e.name||r(`button_n`,{n:t+1})}),(0,S.jsx)(`span`,{className:`secondary`,children:r(`tiles_count`,{count:e.tiles.length})})]})]}),(0,S.jsx)(Z,{index:t,length:i.length,onMove:e=>a(I(i,t,e)),onRemove:()=>a(i.filter((e,n)=>n!==t))})]},e.id))}),(0,S.jsx)(`div`,{children:(0,S.jsxs)(w,{icon:`mdi:plus`,appearance:`filled`,disabled:i.length>=h.buttons,onClick:()=>{a([...i,{id:L(),name:``,icon:`mdi:gesture-tap`,columns:4,tiles:[]}]),n({kind:`button`,button:i.length})},children:[r(`add_button`),` (`,i.length,`/`,h.buttons,`)`]})})]})},ct=({draft:e,update:t,button:n})=>{let r=o(),i=e.buttons[n],a=r=>t({...e,buttons:z(e.buttons,n,{...i,...r})});return(0,S.jsxs)(S.Fragment,{children:[(0,S.jsx)(Q,{title:i.name||r(`button_n`,{n:n+1}),lead:r(`lead_button`)}),(0,S.jsxs)(O,{children:[(0,S.jsxs)(P,{children:[(0,S.jsx)(W,{label:r(`name`),value:i.name,onChange:e=>a({name:e})}),(0,S.jsx)(J,{label:r(`icon`),value:i.icon,onChange:e=>a({icon:e})})]}),(0,S.jsx)(G,{label:r(`columns`),hint:r(`button_columns_hint`),value:i.columns,min:1,max:h.sectionCells,onChange:e=>a({columns:e})})]}),(0,S.jsxs)(O,{children:[(0,S.jsx)(`h3`,{children:r(`tiles`)}),(0,S.jsx)(Qe,{tiles:i.tiles,columns:i.columns,rows:h.sectionCells,onChange:e=>a({tiles:e})})]})]})},$=[{id:`tab-10`,label:`10″ tablet · 1280×800`,width:1280,height:800},{id:`tab-11`,label:`11″ tablet · 1194×834`,width:1194,height:834},{id:`tab-12`,label:`12″ tablet · 1366×1024`,width:1366,height:1024},{id:`fhd`,label:`Full HD · 1920×1080`,width:1920,height:1080},{id:`small`,label:`7″ panel · 1024×600`,width:1024,height:600}],lt=({view:e,dashboards:t,...n})=>{switch(e.kind){case`general`:return(0,S.jsx)(He,{...n});case`sidebar`:return(0,S.jsx)(Ke,{...n,part:e.part});case`pages`:return(0,S.jsx)(it,{...n});case`page`:return(0,S.jsx)(at,{...n,page:e.page});case`section`:return(0,S.jsx)(ot,{...n,page:e.page,section:e.section});case`buttons`:return(0,S.jsx)(st,{...n});case`button`:return(0,S.jsx)(ct,{...n,button:e.button});case`users`:return(0,S.jsx)(Ne,{dashboards:t});case`json`:return(0,S.jsx)(Ye,{...n},n.draft.id)}},ut=()=>{let e=o(),t=ie(),{narrow:n}=re(),[r,i]=(0,x.useState)(null),[a,s]=(0,x.useState)(null),[l,d]=(0,x.useState)(!1),[f,p]=(0,x.useState)(``),[ee,m]=(0,x.useState)({kind:`general`}),[te,ne]=(0,x.useState)(()=>new Set),[h,g]=(0,x.useState)(!1),[_,v]=(0,x.useState)(!1),[y,b]=(0,x.useState)(!1),[C,ae]=(0,x.useState)(!1),[T,ce]=(0,x.useState)($[0].id),[D,me]=(0,x.useState)(!1),O=$.find(e=>e.id===T)??$[0],k=(0,x.useCallback)((e,t)=>{s(R(e.dashboards[t]??e.dashboards.default)),d(!1)},[]);(0,x.useEffect)(()=>{t?.sendMessagePromise({type:`better_wall_dashboard/document`}).then(e=>{i(e),k(e,`default`)}).catch(e=>p(String(e?.message??e)))},[t,k]),(0,x.useEffect)(()=>{if(!l)return;let e=e=>e.preventDefault();return window.addEventListener(`beforeunload`,e),()=>window.removeEventListener(`beforeunload`,e)},[l]);let A=(0,x.useCallback)(e=>{s(e),d(!0),p(``)},[]),j=(0,x.useCallback)((e,t)=>{m(e),ne(n=>new Set([...n,...se(e),...t?[t]:[]])),g(!1),v(!1),ae(!1)},[]),M=(0,x.useCallback)(e=>{ne(t=>{let n=new Set(t);return n.delete(e)||n.add(e),n})},[]),{confirm:ye,dialog:be}=Re(),N=async()=>!l||ye({title:e(`discard_title`),text:e(`discard_text`),confirm:e(`discard`),danger:!0}),Se=async()=>{if(t&&a){p(e(`saving`));try{let n=await t.sendMessagePromise({type:`better_wall_dashboard/save_dashboard`,dashboard:a});i(e=>e&&{...e,dashboards:{...e.dashboards,[n.dashboard.id]:n.dashboard}}),s(R(n.dashboard)),d(!1),p(e(`saved`))}catch(e){p(String(e?.message??e))}}},P=async()=>{r&&a&&await N()&&(r.dashboards[a.id]?k(r,a.id):k(r,`default`),p(``))},F=async e=>{r&&await N()&&(k(r,e),j({kind:`general`}))},I=async t=>{if(v(!1),!r||!await N())return;let n=R(t??r.dashboards.default);s({...n,id:L(),name:t?`${t.name} (2)`:e(`new_dashboard`)}),d(!0),j({kind:`general`})},z=async()=>{if(v(!1),!t||!a)return;let n=e=>Ve(e)||p(e);try{let r=await t.sendMessagePromise({type:`better_wall_dashboard/reload_tablets`,dashboard_id:a.id});n(e(`tablets_reloaded`,{count:r.reached}))}catch(e){n(String(e?.message??e))}},B=async()=>{if(v(!1),!t||!a||!r||a.id==="default"||!await ye({title:e(`delete_title`,{name:a.name}),text:e(`confirm_delete`,{name:a.name}),confirm:e(`delete`),danger:!0}))return;r.dashboards[a.id]&&await t.sendMessagePromise({type:`better_wall_dashboard/delete_dashboard`,dashboard_id:a.id});let n={...r.dashboards};delete n[a.id];let o={...r,dashboards:n};i(o),k(o,`default`),j({kind:`general`})},Ce=(0,x.useMemo)(()=>Object.values(r?.dashboards??{}),[r]),V=(0,x.useMemo)(()=>{let e=Object.values(r?.dashboards??{}).map(e=>({id:e.id,name:e.name}));return a&&!e.some(e=>e.id===a.id)&&e.push({id:a.id,name:a.name}),e.map(e=>e.id===a?.id?{...e,name:a.name}:e)},[r,a]);if(!a)return(0,S.jsxs)(ue,{children:[(0,S.jsx)(de,{"data-narrow":n,children:(0,S.jsx)(`span`,{className:`app-title`,children:e(`editor_title`)})}),(0,S.jsx)(`p`,{style:{padding:24},children:f||e(`loading`)})]});let H=oe(ee,a),we=le(H,{label:t=>e(t),page:t=>e(`page_n`,{n:t+1}),section:(t,n)=>a.pages[t]?.sections[n]?.name||e(`section_n`,{n:n+1}),button:t=>a.buttons[t]?.name||e(`button_n`,{n:t+1})}),U=H.kind===`page`||H.kind===`section`?H.page:void 0,W=H.kind!==`users`;return(0,S.jsx)(ke,{children:(0,S.jsxs)(ue,{children:[(0,S.jsxs)(de,{"data-narrow":n,children:[(0,S.jsx)(E,{type:`button`,className:`only-narrow`,"aria-label":e(`menu`),onClick:e=>u(e.currentTarget),children:(0,S.jsx)(c,{icon:`mdi:menu`})}),(0,S.jsx)(E,{type:`button`,className:`only-drawer`,"aria-label":e(`editor_menu`),onClick:()=>g(!0),children:(0,S.jsx)(c,{icon:`mdi:format-list-bulleted`})}),(0,S.jsxs)(`div`,{className:`titles`,children:[(0,S.jsx)(`span`,{className:`app-title`,children:e(`editor_title`)}),(0,S.jsxs)(`nav`,{"aria-label":e(`editor_menu`),children:[(0,S.jsx)(`button`,{type:`button`,onClick:()=>j({kind:`general`}),children:a.name}),we.map((e,t)=>(0,S.jsxs)(`span`,{children:[`› `,e.view?(0,S.jsx)(`button`,{type:`button`,onClick:()=>j(e.view),children:e.label}):e.label]},t))]})]}),(0,S.jsx)(`span`,{className:`spacer`}),(0,S.jsx)(E,{type:`button`,className:`only-no-preview`,"aria-pressed":C,"aria-label":e(`preview`),title:e(`preview`),onClick:()=>ae(e=>!e),children:(0,S.jsx)(c,{icon:C?`mdi:form-select`:`mdi:tablet-dashboard`})}),(0,S.jsxs)(fe,{children:[(0,S.jsx)(E,{type:`button`,"aria-label":e(`more`),"aria-expanded":_,onClick:()=>v(e=>!e),children:(0,S.jsx)(c,{icon:`mdi:dots-vertical`})}),_&&(0,S.jsxs)(`div`,{className:`menu`,role:`menu`,children:[(0,S.jsxs)(`button`,{type:`button`,role:`menuitem`,onClick:()=>void I(),children:[(0,S.jsx)(c,{icon:`mdi:plus`}),` `,e(`new_dashboard`)]}),(0,S.jsxs)(`button`,{type:`button`,role:`menuitem`,onClick:()=>void I(a),children:[(0,S.jsx)(c,{icon:`mdi:content-copy`}),` `,e(`duplicate`)]}),(0,S.jsxs)(`button`,{type:`button`,role:`menuitem`,onClick:()=>void z(),children:[(0,S.jsx)(c,{icon:`mdi:tablet-cellphone`}),` `,e(`reload_tablets`)]}),(0,S.jsxs)(`button`,{type:`button`,role:`menuitem`,onClick:()=>j({kind:`json`}),children:[(0,S.jsx)(c,{icon:`mdi:code-json`}),` `,e(`edit_json`)]}),(0,S.jsxs)(`button`,{type:`button`,role:`menuitem`,className:`danger`,disabled:a.id==="default",onClick:()=>void B(),children:[(0,S.jsx)(c,{icon:`mdi:delete-outline`}),` `,e(`delete_dashboard`)]}),(0,S.jsx)(`hr`,{}),(0,S.jsxs)(`button`,{type:`button`,role:`menuitem`,onClick:()=>{v(!1),b(!0)},children:[(0,S.jsx)(c,{icon:`mdi:information-outline`}),` `,e(`about`)]})]})]})]}),(0,S.jsxs)(pe,{children:[(0,S.jsx)(he,{$open:h,onClick:()=>g(!1)}),(0,S.jsx)(ve,{dashboards:V,draft:a,view:H,expanded:te,open:h,onToggle:M,onOpen:j,onSwitch:e=>void F(e),onNewDashboard:()=>void I()}),(0,S.jsxs)(ge,{$hidden:C,children:[(0,S.jsx)(`div`,{className:`screen-body`,children:(0,S.jsx)(ze.Provider,{value:Ce,children:(0,S.jsx)(lt,{view:H,dashboards:V,draft:a,update:A,open:j})})}),W&&(0,S.jsxs)(`div`,{className:`screen-foot`,children:[(0,S.jsx)(`span`,{className:`status`,children:l?e(`unsaved`):f}),(0,S.jsxs)(`span`,{className:`end`,children:[(0,S.jsx)(w,{appearance:`plain`,disabled:!l,onClick:()=>void P(),children:e(`discard`)}),(0,S.jsx)(w,{appearance:`accent`,icon:`mdi:content-save-outline`,disabled:!l,onClick:Se,children:e(`save`)})]})]})]}),(0,S.jsxs)(_e,{$shown:C,children:[(0,S.jsxs)(`div`,{className:`preview-bar`,children:[(0,S.jsx)(`h2`,{children:e(`preview`)}),(0,S.jsx)(q,{label:e(`device`),value:T,options:$.map(e=>({value:e.id,label:e.label})),onChange:ce}),(0,S.jsx)(E,{type:`button`,style:{color:`var(--secondary-text-color)`},"aria-label":e(D?`landscape`:`portrait`),title:e(D?`landscape`:`portrait`),onClick:()=>me(e=>!e),children:(0,S.jsx)(c,{icon:D?`mdi:phone-rotate-landscape`:`mdi:phone-rotate-portrait`})})]}),(0,S.jsx)(`div`,{className:`stage`,children:(0,S.jsx)(xe,{dashboard:a,device:O,portrait:D,page:U})})]})]}),(0,S.jsx)(Ie,{open:y,onClose:()=>b(!1)}),be]})})};export{ut as default};