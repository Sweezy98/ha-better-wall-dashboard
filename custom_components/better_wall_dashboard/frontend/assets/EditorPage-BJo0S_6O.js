import{C as e,D as t,E as n,O as r,S as i,T as a,_ as o,a as s,b as c,c as l,d as u,f as d,g as f,h as ee,i as te,k as p,l as m,m as h,n as g,o as ne,p as _,r as re,s as v,t as y,u as b,v as ie,w as x,x as ae,y as oe}from"./boot-BjtX7nAo.js";var S=p(r(),1),C=p(t(),1),se=a.button`
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
  ${({$appearance:e,$danger:t})=>{let n=t?`var(--error-color, #db4437)`:`var(--primary-color, #03a9f4)`;return e===`accent`?x`
        background: ${n};
        color: var(--text-primary-color, #fff);
      `:e===`filled`?x`
        background: color-mix(in srgb, ${n} 16%, transparent);
        color: ${n};
      `:x`
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
`,w=()=>()=>{},T=({children:e,onClick:t,icon:n,appearance:r=`plain`,danger:i=!1,disabled:a,title:o})=>{let s=(0,S.useSyncExternalStore)(w,()=>!!customElements.get(`ha-button`)),c=(0,C.jsxs)(C.Fragment,{children:[n&&(0,C.jsx)(`span`,{slot:`start`,style:{display:`inline-flex`},children:(0,C.jsx)(h,{icon:n,size:`18px`})}),e]});return s?(0,S.createElement)(`ha-button`,{appearance:r,variant:i?`danger`:`brand`,disabled:a||void 0,"data-tip":o,onClick:t},c):(0,C.jsx)(se,{type:`button`,$appearance:r,$danger:i,disabled:a,"data-tip":o,onClick:t,children:c})},E=[{part:`clock`,icon:`mdi:clock-outline`,label:`clock`},{part:`status`,icon:`mdi:wifi-star`,label:`nav_status`},{part:`climate`,icon:`mdi:home-thermometer-outline`,label:`room_climate`},{part:`persons`,icon:`mdi:account-multiple-outline`,label:`persons`},{part:`openings`,icon:`mdi:window-open-variant`,label:`openings`},{part:`travel`,icon:`mdi:car-clock`,label:`travel_time`},{part:`quick`,icon:`mdi:gesture-tap-button`,label:`quick_actions`},{part:`calendar`,icon:`mdi:calendar-month-outline`,label:`calendar`},{part:`weather`,icon:`mdi:weather-partly-cloudy`,label:`weather`},{part:`notifications`,icon:`mdi:bell-outline`,label:`notifications`},{part:`system`,icon:`mdi:chart-box-outline`,label:`system_stats`}];function ce(e,t){switch(e.kind){case`page`:return e.page<t.pages.length?e:{kind:`pages`};case`section`:{let n=t.pages[e.page];return n?e.section<n.sections.length?e:{kind:`page`,page:e.page}:{kind:`pages`}}case`button`:return e.button<t.buttons.length?e:{kind:`buttons`};default:return e}}function le(e){switch(e.kind){case`sidebar`:return[`sidebar`];case`page`:return[`pages`];case`section`:return[`pages`,`page-${e.page}`];case`button`:return[`buttons`];default:return[]}}function ue(e,t){return JSON.stringify(e)===JSON.stringify(t)}function de(e,t){switch(e.kind){case`general`:return[{label:t.label(`tab_general`)}];case`sidebar`:{let n=E.find(t=>t.part===e.part);return[{label:t.label(`tab_sidebar`)},{label:t.label(n?.label??e.part)}]}case`pages`:return[{label:t.label(`tab_pages`)}];case`page`:return[{label:t.label(`tab_pages`),view:{kind:`pages`}},{label:t.page(e.page)}];case`section`:return[{label:t.label(`tab_pages`),view:{kind:`pages`}},{label:t.page(e.page),view:{kind:`page`,page:e.page}},{label:t.section(e.page,e.section)}];case`buttons`:return[{label:t.label(`tab_buttons`)}];case`button`:return[{label:t.label(`tab_buttons`),view:{kind:`buttons`}},{label:t.button(e.button)}];case`users`:return[{label:t.label(`tab_users`)}];case`json`:return[{label:t.label(`tab_json`)}]}}var fe=a.div`
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
`,pe=a.header`
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
`,D=a.button`
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
`,me=a.div`
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
`,he=a.div`
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
`,O=a.div`
  background: var(--card-background-color, #1c1c1c);
  border-radius: var(--ha-card-border-radius, 12px);
  box-shadow: var(--ha-card-box-shadow, none);
  border: 1px solid var(--ha-card-border-color, var(--divider-color, rgba(225, 225, 225, 0.12)));
  box-sizing: border-box;
  min-width: 0;
  min-height: 0;
`,ge=a(O)`
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
`,_e=a.div`
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
`,ve=a(O)`
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
`,k=a.section`
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
`,A=a.ul`
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
`,j=a.details`
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
`,ye=a.div`
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
`,be=a(O)`
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
`,M=a.dialog`
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
`,xe=({dashboards:t,draft:n,view:r,expanded:i,open:a,onToggle:o,onOpen:s,onSwitch:c,onNewDashboard:l})=>{let u=e(),d=(e,t,n)=>(0,C.jsx)(`li`,{children:(0,C.jsxs)(`button`,{type:`button`,"aria-current":ue(r,e)?`page`:void 0,onClick:()=>s(e),children:[(0,C.jsx)(h,{className:`icon`,icon:n}),(0,C.jsx)(`span`,{className:`grow`,children:t})]})},JSON.stringify(e)),f=(e,t,n,a,c)=>{let l=i.has(e);return(0,C.jsxs)(`li`,{children:[(0,C.jsxs)(`button`,{type:`button`,"aria-expanded":l,"aria-current":ue(r,t)?`page`:void 0,onClick:()=>s(t,e),children:[(0,C.jsx)(h,{className:`icon`,icon:a}),(0,C.jsx)(`span`,{className:`grow`,children:n}),(0,C.jsx)(`span`,{className:`twist`,"data-open":l,role:`button`,"aria-label":n,onClick:t=>{t.stopPropagation(),o(e)},children:(0,C.jsx)(h,{icon:`mdi:chevron-right`})})]}),l&&(0,C.jsx)(`ul`,{className:`sub`,children:c})]},e)},ee=(0,C.jsxs)(C.Fragment,{children:[d({kind:`general`},u(`tab_general`),`mdi:cog-outline`),f(`sidebar`,{kind:`sidebar`,part:E[0].part},u(`tab_sidebar`),`mdi:dock-left`,E.map(e=>d({kind:`sidebar`,part:e.part},u(e.label),e.icon))),f(`pages`,{kind:`pages`},u(`tab_pages`),`mdi:book-open-page-variant-outline`,n.pages.map((e,t)=>e.sections.length?f(`page-${t}`,{kind:`page`,page:t},u(`page_n`,{n:t+1}),`mdi:file-outline`,e.sections.map((e,n)=>d({kind:`section`,page:t,section:n},e.name||u(`section_n`,{n:n+1}),e.icon||`mdi:view-grid-outline`))):d({kind:`page`,page:t},u(`page_n`,{n:t+1}),`mdi:file-outline`))),f(`buttons`,{kind:`buttons`},u(`tab_buttons`),`mdi:gesture-tap-button`,n.buttons.map((e,t)=>d({kind:`button`,button:t},e.name||u(`button_n`,{n:t+1}),e.icon||`mdi:gesture-tap`)))]});return(0,C.jsxs)(ge,{$open:a,as:`nav`,"aria-label":u(`editor_title`),children:[(0,C.jsx)(`div`,{className:`heading`,children:u(`nav_dashboards`)}),(0,C.jsxs)(`ul`,{children:[t.map(e=>e.id===n.id?(0,C.jsxs)(`li`,{children:[(0,C.jsxs)(`button`,{type:`button`,"aria-expanded":!0,onClick:()=>s({kind:`general`}),children:[(0,C.jsx)(h,{className:`icon`,icon:`mdi:tablet-dashboard`}),(0,C.jsx)(`span`,{className:`grow`,children:(0,C.jsx)(`strong`,{children:n.name})})]}),(0,C.jsx)(`ul`,{className:`sub`,children:ee})]},e.id):(0,C.jsx)(`li`,{children:(0,C.jsxs)(`button`,{type:`button`,onClick:()=>c(e.id),children:[(0,C.jsx)(h,{className:`icon`,icon:`mdi:tablet-dashboard`}),(0,C.jsx)(`span`,{className:`grow`,children:e.name})]})},e.id)),(0,C.jsx)(`li`,{className:`add`,children:(0,C.jsxs)(`button`,{type:`button`,onClick:l,children:[(0,C.jsx)(h,{className:`icon`,icon:`mdi:plus`}),(0,C.jsx)(`span`,{className:`grow`,children:u(`new_dashboard`)})]})})]}),(0,C.jsx)(`div`,{className:`heading`,children:u(`nav_house`)}),(0,C.jsx)(`ul`,{children:d({kind:`users`},u(`tab_users`),`mdi:account-multiple-outline`)})]})},Se=a.div`
  position: relative;
  width: 100%;
  height: 100%;
  min-height: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
`,Ce=a.div`
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
`,we=(0,S.memo)(({dashboard:t,device:n,portrait:r,page:i})=>{let a=e(),o=(0,S.useRef)(null),[s,c]=(0,S.useState)(.5),l=r?n.height:n.width,u=r?n.width:n.height;(0,S.useLayoutEffect)(()=>{let e=o.current;if(!e)return;let t=()=>{let t=Math.min((e.clientWidth-40)/l,(e.clientHeight-40)/u);c(Math.max(.1,Math.min(1,Math.floor(t*1e3)/1e3)))};t();let n=new ResizeObserver(t);return n.observe(e),()=>n.disconnect()},[l,u]);let d=(0,S.useMemo)(()=>({dashboard:t,dashboards:[],kiosk:!1,is_admin:!0,pin_required:!1}),[t]);return(0,C.jsx)(Se,{ref:o,"aria-label":a(`preview`),children:(0,C.jsx)(Ce,{style:{width:l,height:u,transform:`translate(-50%, -50%) scale(${s})`},children:(0,C.jsx)(ee,{view:d,focusPage:i,children:(0,C.jsx)(te,{})})})})}),N=a.label`
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
`,P=a.label`
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
`,F=a.div`
  display: grid;
  grid-template-columns: ${({$columns:e})=>e??`repeat(auto-fit, minmax(220px, 1fr))`};
  gap: 16px;
  align-items: start;
`,I=a.button`
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
`;function L(e,t,n){if(n<0||n>=e.length)return e;let r=[...e],[i]=r.splice(t,1);return r.splice(n,0,i),r}function R(){let e=new Uint8Array(6);return crypto.getRandomValues(e),Array.from(e,e=>e.toString(16).padStart(2,`0`)).join(``)}var z=e=>JSON.parse(JSON.stringify(e)),B=(e,t,n)=>e.map((e,r)=>r===t?n:e),V=({selector:e,value:t,onChange:n,label:r,helper:i,required:a=!1})=>{let o=(0,S.useRef)(null),s=(0,S.useRef)(null),c=(0,S.useRef)(n);(0,S.useEffect)(()=>{c.current=n}),(0,S.useEffect)(()=>{let e=document.createElement(`ha-selector`);e.hass=y();let t=t=>{t.stopPropagation();let n=t.detail.value;e.value=n,c.current(n)};e.addEventListener(`value-changed`,t),o.current?.append(e),s.current=e;let n=g(t=>{e.hass=t});return()=>{n(),e.removeEventListener(`value-changed`,t),e.remove(),s.current=null}},[]);let l=JSON.stringify(e);return(0,S.useEffect)(()=>{let e=s.current;e&&(e.selector=JSON.parse(l),e.label=r,e.helper=i,e.required=a)},[l,r,i,a]),(0,S.useEffect)(()=>{let e=s.current;e&&e.value!==t&&(e.value=t)},[t]),(0,C.jsx)(`div`,{ref:o,className:`ha-field`})},Te=[`ha-selector`,`ha-entity-picker`,`ha-switch`,`ha-icon-picker`],H=null;function Ee(){return Te.every(e=>customElements.get(e))}function De(){return Ee()?Promise.resolve(!0):(H??=(async()=>{let e=window.loadCardHelpers;if(!e)return!1;try{let t=await e();for(let e of[{type:`entities`,entities:[]},{type:`button`}])try{await(await t.createCardElement(e)).constructor.getConfigElement?.()}catch{}}catch{return!1}return!!customElements.get(`ha-selector`)})(),H)}function U(){let[e,t]=(0,S.useState)(Ee),n=(0,S.useSyncExternalStore)(g,()=>y()!==null);return(0,S.useEffect)(()=>{if(e||!n)return;let r=!0;return De().then(e=>r&&e&&t(!0)),()=>{r=!1}},[e,n]),e&&n}var W=({label:e,hint:t,value:n,onChange:r,placeholder:i,type:a=`text`})=>U()?(0,C.jsx)(V,{selector:{text:a===`text`?{}:{type:a}},value:n,label:e,helper:t,onChange:e=>r(typeof e==`string`?e:``)}):(0,C.jsxs)(N,{children:[(0,C.jsx)(`span`,{className:`label`,children:e}),(0,C.jsx)(`input`,{type:a,value:n,placeholder:i,onChange:e=>r(e.target.value)}),t&&(0,C.jsx)(`small`,{children:t})]}),Oe=({label:e,hint:t,value:n,onChange:r,suggestions:i=[]})=>{let a=U(),o=e=>[...new Set(e.filter(e=>typeof e==`string`).map(e=>e.trim()).filter(Boolean))];if(a){let a=[...new Set([...n,...i])];return(0,C.jsxs)(N,{as:`div`,children:[(0,C.jsx)(`span`,{className:`label`,children:e}),t&&(0,C.jsx)(`small`,{children:t}),(0,C.jsx)(V,{selector:{select:{multiple:!0,custom_value:!0,mode:`dropdown`,sort:!1,options:a}},value:n,label:e,onChange:e=>r(Array.isArray(e)?o(e):[])})]})}return(0,C.jsxs)(N,{children:[(0,C.jsx)(`span`,{className:`label`,children:e}),(0,C.jsx)(`input`,{type:`text`,value:n.join(`, `),onChange:e=>r(o(e.target.value.split(`,`)))}),t&&(0,C.jsx)(`small`,{children:t})]})},G=({label:e,hint:t,value:n,onChange:r,min:i,max:a,step:o=1,unit:s})=>{let c=U(),l=e=>{let t=Number(e);e!==``&&e!==null&&Number.isFinite(t)&&r(t)};return c?(0,C.jsx)(V,{selector:{number:{min:i,max:a,step:o,mode:`box`,unit_of_measurement:s}},value:n,label:e,helper:t,onChange:l}):(0,C.jsxs)(N,{children:[(0,C.jsx)(`span`,{className:`label`,children:e}),(0,C.jsx)(`input`,{type:`number`,value:n,min:i,max:a,step:o,onChange:e=>l(e.target.value)}),t&&(0,C.jsx)(`small`,{children:t})]})},ke=({label:e,hint:t,value:n,onChange:r,min:i,max:a,step:o,unit:s,scale:c=1})=>{let l=U(),u=Math.round(n*c*1e3)/1e3,d=e=>{let t=Number(e);Number.isFinite(t)&&r(t/c)};return l?(0,C.jsx)(V,{selector:{number:{min:i,max:a,step:o,mode:`slider`,unit_of_measurement:s}},value:u,label:e,helper:t,onChange:d}):(0,C.jsxs)(N,{children:[(0,C.jsxs)(`span`,{className:`label`,children:[e,`: `,u,s?` ${s}`:``]}),(0,C.jsx)(`input`,{type:`range`,value:u,min:i,max:a,step:o,onChange:e=>d(e.target.value)}),t&&(0,C.jsx)(`small`,{children:t})]})},K=({label:e,hint:t,value:n,onChange:r})=>U()?(0,C.jsx)(V,{selector:{boolean:{}},value:n,label:e,helper:t,onChange:e=>r(!!e)}):(0,C.jsxs)(P,{children:[(0,C.jsx)(`input`,{type:`checkbox`,checked:n,onChange:e=>r(e.target.checked)}),(0,C.jsxs)(`span`,{children:[e,t&&(0,C.jsx)(`small`,{children:t})]})]}),Ae=e=>Array.isArray(e)&&e.length===3&&e.every(e=>typeof e==`number`)?`#${e.map(e=>Math.round(Math.min(255,Math.max(0,e))).toString(16).padStart(2,`0`)).join(``)}`:null,je=e=>[1,3,5].map(t=>parseInt(e.slice(t,t+2),16)||0),Me=({label:e,hint:t,value:n,onChange:r})=>U()?(0,C.jsx)(V,{selector:{color_rgb:{}},value:je(n),label:e,helper:t,onChange:e=>{let t=Ae(e);t&&r(t)}}):(0,C.jsxs)(N,{children:[(0,C.jsx)(`span`,{className:`label`,children:e}),(0,C.jsx)(`input`,{type:`color`,value:n,onChange:e=>r(e.target.value)}),t&&(0,C.jsx)(`small`,{children:t})]}),Ne=({label:e,hint:t,value:n,onChange:r})=>U()?(0,C.jsx)(V,{selector:{time:{}},value:n||void 0,label:e,helper:t,onChange:e=>r(typeof e==`string`?e.slice(0,5):``)}):(0,C.jsxs)(N,{children:[(0,C.jsx)(`span`,{className:`label`,children:e}),(0,C.jsx)(`input`,{type:`time`,value:n,onChange:e=>r(e.target.value)}),t&&(0,C.jsx)(`small`,{children:t})]}),q=({label:e,hint:t,value:n,onChange:r,options:i})=>U()?(0,C.jsx)(V,{selector:{select:{options:i,mode:`dropdown`}},value:n,label:e,helper:t,required:!0,onChange:e=>typeof e==`string`&&r(e)}):(0,C.jsxs)(N,{children:[(0,C.jsx)(`span`,{className:`label`,children:e}),(0,C.jsx)(`select`,{value:n,onChange:e=>r(e.target.value),children:i.map(e=>(0,C.jsx)(`option`,{value:e.value,children:e.label},e.value))}),t&&(0,C.jsx)(`small`,{children:t})]}),J=({label:e,hint:t,value:n,onChange:r})=>U()?(0,C.jsx)(V,{selector:{icon:{}},value:n,label:e,helper:t,onChange:e=>r(typeof e==`string`?e:``)}):(0,C.jsxs)(N,{children:[(0,C.jsx)(`span`,{className:`label`,children:e}),(0,C.jsxs)(`span`,{className:`with-icon`,children:[(0,C.jsx)(`input`,{type:`text`,value:n,placeholder:`mdi:…`,onChange:e=>r(e.target.value)}),n&&(0,C.jsx)(h,{icon:n,size:`24px`})]}),t&&(0,C.jsx)(`small`,{children:t})]}),Pe=({label:e,hint:t,value:n,onChange:r,accept:i})=>{let a=U(),o=(0,S.useMemo)(()=>n.startsWith(`media-source://`)?{media_content_id:n,media_content_type:i[0]}:void 0,[n,i]);return a?(0,C.jsx)(V,{selector:{media:{accept:i}},value:o,label:e,helper:t,onChange:e=>r(e?.media_content_id??``)}):(0,C.jsx)(W,{label:e,hint:t,value:n,onChange:r})},Fe=(0,S.createContext)([]),Ie=({children:e})=>{let t=n(l(e=>{let t={};for(let[n,r]of Object.entries(e.entities))t[n]=r.attributes.friendly_name||n;return t})),r=(0,S.useMemo)(()=>Object.entries(t).map(([e,t])=>({id:e,name:t})).sort((e,t)=>e.id.localeCompare(t.id)),[t]);return(0,C.jsx)(Fe.Provider,{value:r,children:e})},Le=(e,t={},n,r)=>({entity:{...r?{include_entities:r}:{},...e?.length||n?{filter:{...e?.length?{domain:e}:{},...n?{integration:n}:{}}}:{},...t}}),Re=({value:e,domains:t,onChange:n})=>{let r=(0,S.useContext)(Fe),i=(0,S.useId)(),a=(0,S.useMemo)(()=>t?.length?r.filter(e=>t.includes(e.id.split(`.`)[0])):r,[r,t]);return(0,C.jsxs)(C.Fragment,{children:[(0,C.jsx)(`input`,{type:`text`,list:i,value:e,placeholder:t?.length?`${t[0]}.…`:`domain.object_id`,onChange:e=>n(e.target.value.trim())}),(0,C.jsx)(`datalist`,{id:i,children:a.map(e=>(0,C.jsx)(`option`,{value:e.id,children:e.name},e.id))})]})},Y=({label:t,hint:n,value:r,onChange:i,domains:a,integration:o,include:s})=>{let c=U(),l=(0,S.useContext)(Fe),u=e();if(c)return(0,C.jsx)(V,{selector:Le(a,{},o,s),value:r||void 0,label:t,helper:n,onChange:e=>i(typeof e==`string`?e:``)});let d=l.find(e=>e.id===r);return(0,C.jsxs)(N,{children:[(0,C.jsx)(`span`,{className:`label`,children:t}),(0,C.jsx)(Re,{value:r,domains:a,onChange:i}),r&&(0,C.jsx)(`small`,{children:d?d.name:u(`not_found`)}),n&&(0,C.jsx)(`small`,{children:n})]})},X=({label:t,hint:n,value:r,onChange:i,domains:a,max:o})=>{let s=U(),c=e(),l=e=>i(o===void 0?e:e.slice(0,o));return s?(0,C.jsx)(V,{selector:Le(a,{multiple:!0,reorder:!0}),value:r,label:t,helper:n,onChange:e=>l(Array.isArray(e)?e.filter(e=>typeof e==`string`):[])}):(0,C.jsxs)(N,{as:`div`,children:[(0,C.jsx)(`span`,{className:`label`,children:t}),r.map((e,t)=>(0,C.jsxs)(F,{$columns:`minmax(0, 1fr) auto`,children:[(0,C.jsx)(Re,{value:e,domains:a,onChange:e=>l(r.map((n,r)=>r===t?e:n))}),(0,C.jsx)(Z,{index:t,length:r.length,onMove:e=>l(L(r,t,e)),onRemove:()=>l(r.filter((e,n)=>n!==t))})]},t)),(o===void 0||r.length<o)&&(0,C.jsx)(I,{type:`button`,className:`add`,onClick:()=>l([...r,``]),"data-tip":c(`add`),"aria-label":c(`add`),children:(0,C.jsx)(h,{icon:`mdi:plus`})}),n&&(0,C.jsx)(`small`,{children:n})]})},Z=({index:t,length:n,onMove:r,onRemove:i,onDuplicate:a})=>{let o=e();return(0,C.jsxs)(`span`,{className:`list-controls`,children:[(0,C.jsx)(I,{type:`button`,disabled:t===0,onClick:()=>r(t-1),"data-tip":o(`move_up`),"aria-label":o(`move_up`),children:(0,C.jsx)(h,{icon:`mdi:arrow-up`})}),(0,C.jsx)(I,{type:`button`,disabled:t===n-1,onClick:()=>r(t+1),"data-tip":o(`move_down`),"aria-label":o(`move_down`),children:(0,C.jsx)(h,{icon:`mdi:arrow-down`})}),a&&(0,C.jsx)(I,{type:`button`,onClick:a,"data-tip":o(`duplicate`),"aria-label":o(`duplicate`),children:(0,C.jsx)(h,{icon:`mdi:content-copy`})}),(0,C.jsx)(I,{type:`button`,$danger:!0,onClick:i,"data-tip":o(`remove`),"aria-label":o(`remove`),children:(0,C.jsx)(h,{icon:`mdi:delete-outline`})})]})},Q=({title:e,lead:t})=>(0,C.jsxs)(C.Fragment,{children:[(0,C.jsx)(`h2`,{children:e}),t&&(0,C.jsx)(`p`,{className:`lead`,children:t})]}),ze=a.span`
  margin-left: 8px;
  padding: 1px 8px;
  border-radius: 999px;
  font-size: 12px;
  font-weight: 400;
  background: var(--secondary-background-color, #282828);
  color: var(--secondary-text-color, #9b9b9b);
`,Be=({dashboards:t})=>{let n=e(),r=ae(),[i,a]=(0,S.useState)(null);(0,S.useEffect)(()=>{r?.sendMessagePromise({type:`better_wall_dashboard/users`}).then(e=>a(e.users)).catch(()=>a([]))},[r]);let o=(0,S.useCallback)(async(e,t)=>{if(!r)return;a(n=>n?.map(n=>n.id===e.id?{...n,...t}:n)??null);let n=await r.sendMessagePromise({type:`better_wall_dashboard/save_user`,user_id:e.id,...t});a(t=>t?.map(t=>t.id===e.id?{...t,...n}:t)??null)},[r]);return(0,C.jsxs)(C.Fragment,{children:[(0,C.jsx)(Q,{title:n(`tab_users`),lead:n(`lead_users`)}),i?.map(e=>(0,C.jsxs)(j,{open:!e.is_admin||void 0,children:[(0,C.jsxs)(`summary`,{children:[(0,C.jsx)(h,{className:`icon`,icon:e.is_admin?`mdi:shield-account-outline`:`mdi:tablet`}),(0,C.jsxs)(`span`,{className:`text`,children:[(0,C.jsxs)(`span`,{children:[e.name,e.is_admin&&(0,C.jsx)(ze,{children:n(`admin`)}),!e.is_active&&(0,C.jsx)(ze,{children:n(`inactive`)})]}),(0,C.jsx)(`span`,{className:`secondary`,children:t.find(t=>t.id===e.dashboard)?.name??e.dashboard})]})]}),(0,C.jsxs)(`div`,{className:`fold-body`,children:[(0,C.jsx)(q,{label:n(`assigned_dashboard`),value:e.dashboard,options:t.map(e=>({value:e.id,label:e.name})),onChange:t=>o(e,{dashboard:t})}),(0,C.jsxs)(F,{children:[(0,C.jsx)(K,{label:n(`kiosk`),hint:n(`kiosk_user_hint`),value:e.kiosk,onChange:t=>o(e,{kiosk:t})}),(0,C.jsx)(K,{label:n(`start_page`),hint:n(`start_page_hint`),value:!!e.default_panel,onChange:t=>o(e,{default_panel:t})})]}),(0,C.jsx)(K,{label:n(`sidebar_only`),hint:n(`sidebar_only_hint`),value:e.sidebar_only,onChange:t=>o(e,{sidebar_only:t})})]})]},e.id))]})},Ve=`/better_wall_dashboard/static/icon.png`,He=a(M)`
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
`,Ue=({open:t,onClose:n})=>{let r=e(),i=ae(),a=(0,S.useRef)(null),[s,c]=(0,S.useState)(null),l=f();(0,S.useEffect)(()=>{let e=a.current;e&&(t&&!e.open&&e.showModal(),!t&&e.open&&e.close())}),(0,S.useEffect)(()=>{t&&i?.sendMessagePromise({type:`better_wall_dashboard/version`}).then(c).catch(()=>void 0)},[t,i]);let u=!!(l&&s&&s.app!==l);return(0,C.jsxs)(He,{ref:a,tabIndex:-1,onClose:()=>t&&n(),onClick:e=>e.target===e.currentTarget&&n(),children:[(0,C.jsxs)(`div`,{className:`head`,children:[(0,C.jsx)(`img`,{src:Ve,alt:``}),(0,C.jsx)(`h2`,{children:`Better Wall Dashboard`})]}),(0,C.jsx)(`p`,{className:`muted`,children:r(`about_blurb`)}),(0,C.jsx)(`table`,{children:(0,C.jsxs)(`tbody`,{children:[(0,C.jsxs)(`tr`,{children:[(0,C.jsx)(`th`,{children:r(`about_version`)}),(0,C.jsx)(`td`,{children:s?.version??`–`})]}),(0,C.jsxs)(`tr`,{children:[(0,C.jsx)(`th`,{children:r(`about_page`)}),(0,C.jsx)(`td`,{children:l?l.slice(0,12):`–`})]})]})}),u&&(0,C.jsxs)(C.Fragment,{children:[(0,C.jsx)(`p`,{children:r(`update_available`)}),(0,C.jsx)(T,{appearance:`filled`,icon:`mdi:reload`,onClick:()=>{let e=ie(),t=null;if(e&&s){let n=new URL(e);n.searchParams.set(`v`,s.app),t=n.toString()}o(t)},children:r(`reload`)})]}),(s?.documentation||s?.issues)&&(0,C.jsxs)(`p`,{children:[s.documentation&&(0,C.jsx)(`a`,{href:s.documentation,target:`_blank`,rel:`noopener noreferrer`,children:r(`about_repo`)}),s.documentation&&s.issues&&` · `,s.issues&&(0,C.jsx)(`a`,{href:s.issues,target:`_blank`,rel:`noopener noreferrer`,children:r(`about_issues`)})]}),(0,C.jsx)(I,{type:`button`,className:`shut`,"aria-label":r(`close`),"data-tip":r(`close`),onClick:n,children:(0,C.jsx)(h,{icon:`mdi:close`})})]})},We=({request:t,onAnswer:n})=>{let r=e(),i=(0,S.useRef)(null);return(0,S.useEffect)(()=>{let e=i.current;e&&(t&&!e.open&&e.showModal(),!t&&e.open&&e.close())}),(0,C.jsx)(M,{ref:i,role:`alertdialog`,tabIndex:-1,onCancel:e=>{e.preventDefault(),n(!1)},onClick:e=>e.target===e.currentTarget&&n(!1),children:t&&(0,C.jsxs)(C.Fragment,{children:[(0,C.jsx)(`h2`,{children:t.title}),t.text&&(0,C.jsx)(`p`,{className:`muted`,children:t.text}),(0,C.jsxs)(`div`,{className:`actions`,children:[(0,C.jsx)(T,{appearance:`plain`,onClick:()=>n(!1),children:r(`cancel`)}),(0,C.jsx)(T,{appearance:`accent`,danger:t.danger,onClick:()=>n(!0),children:t.confirm})]})]})})};function Ge(){let[e,t]=(0,S.useState)(null);return{confirm:(0,S.useCallback)(e=>new Promise(n=>t({...e,resolve:n})),[]),dialog:(0,C.jsx)(We,{request:e,onAnswer:n=>{e?.resolve(n),t(null)}})}}var Ke=(0,S.createContext)([]);function qe(){return(0,S.useContext)(Ke)}function Je(e){let t=document.querySelector(`home-assistant`);return t?(t.dispatchEvent(new CustomEvent(`hass-notification`,{bubbles:!0,composed:!0,detail:{message:e,dismissable:!0}})),!0):!1}var Ye=({draft:t,update:n})=>{let r=e(),i=e=>n({...t,background:{...t.background,...e}});return(0,C.jsxs)(C.Fragment,{children:[(0,C.jsx)(Q,{title:r(`tab_general`),lead:r(`lead_general`)}),(0,C.jsx)(k,{children:(0,C.jsx)(W,{label:r(`name`),value:t.name,onChange:e=>n({...t,name:e})})}),(0,C.jsxs)(k,{children:[(0,C.jsx)(`h3`,{children:r(`background`)}),(0,C.jsx)(q,{label:r(`background_mode`),value:t.background.mode??`image`,options:[{value:`image`,label:r(`background_mode_image`)},{value:`color`,label:r(`background_mode_color`)}],onChange:e=>i({mode:e===`color`?`color`:`image`})}),t.background.mode===`color`?(0,C.jsx)(Me,{label:r(`background_color`),value:t.background.color??`#131313`,onChange:e=>i({color:e})}):(0,C.jsxs)(C.Fragment,{children:[(0,C.jsx)(Pe,{label:r(`background_media`),hint:r(`background_media_hint`),accept:[`image/*`],value:t.background.image,onChange:e=>i({image:e})}),(0,C.jsx)(W,{label:r(`background_image`),hint:r(`background_image_hint`),type:`url`,value:t.background.image.startsWith(`media-source://`)?``:t.background.image,onChange:e=>i({image:e})}),(0,C.jsxs)(F,{children:[(0,C.jsx)(ke,{label:r(`background_dim`),value:t.background.dim,min:0,max:95,step:5,unit:`%`,scale:100,onChange:e=>i({dim:e})}),(0,C.jsx)(ke,{label:r(`background_blur`),value:t.background.blur,min:0,max:40,step:1,unit:`px`,onChange:e=>i({blur:e})})]})]})]}),(0,C.jsxs)(k,{children:[(0,C.jsx)(`h3`,{children:r(`security_heading`)}),(0,C.jsx)(W,{label:r(`pin`),hint:r(`pin_hint`),type:`password`,value:t.pin??``,onChange:e=>n({...t,pin:e.replace(/\D/g,``).slice(0,8)})})]})]})},Xe=6,Ze=[{type:`state`,label:`rule_state`},{type:`numeric`,label:`rule_numeric`},{type:`time`,label:`rule_time`},{type:`sun`,label:`rule_sun`},{type:`home`,label:`rule_home`}],Qe=e=>{switch(e){case`state`:return{type:e,entity:``,state:``,not:!1};case`numeric`:return{type:e,entity:``,above:null,below:null};case`time`:return{type:e,after:``,before:``};case`sun`:return{type:e,when:`night`};case`home`:return{type:e,who:`anyone`}}},$e=a.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  padding: 12px;
  border: 1px solid var(--divider-color, rgba(255, 255, 255, 0.12));
  border-radius: 12px;

  .head {
    display: grid;
    grid-template-columns: minmax(0, 1fr) auto;
    gap: 8px;
    align-items: center;
  }
`,et=e=>{let t=Number(e.replace(`,`,`.`));return e.trim()===``||!Number.isFinite(t)?null:t},tt=({rule:t,onChange:n})=>{let r=e();switch(t.type){case`state`:return(0,C.jsxs)(C.Fragment,{children:[(0,C.jsx)(Y,{label:r(`entity`),value:t.entity,onChange:e=>n({...t,entity:e})}),(0,C.jsx)(W,{label:r(`rule_state_value`),hint:r(`rule_state_value_hint`),value:t.state,onChange:e=>n({...t,state:e})}),(0,C.jsx)(K,{label:r(`rule_not`),value:t.not,onChange:e=>n({...t,not:e})})]});case`numeric`:return(0,C.jsxs)(C.Fragment,{children:[(0,C.jsx)(Y,{label:r(`entity`),value:t.entity,onChange:e=>n({...t,entity:e})}),(0,C.jsxs)(F,{children:[(0,C.jsx)(W,{label:r(`rule_above`),value:t.above===null?``:String(t.above),onChange:e=>n({...t,above:et(e)})}),(0,C.jsx)(W,{label:r(`rule_below`),value:t.below===null?``:String(t.below),onChange:e=>n({...t,below:et(e)})})]})]});case`time`:return(0,C.jsxs)(F,{children:[(0,C.jsx)(Ne,{label:r(`rule_after`),value:t.after,onChange:e=>n({...t,after:e})}),(0,C.jsx)(Ne,{label:r(`rule_before`),hint:r(`rule_before_hint`),value:t.before,onChange:e=>n({...t,before:e})})]});case`sun`:return(0,C.jsx)(q,{label:r(`rule_sun`),value:t.when,options:[{value:`day`,label:r(`rule_day`)},{value:`night`,label:r(`rule_night`)}],onChange:e=>n({...t,when:e===`day`?`day`:`night`})});case`home`:return(0,C.jsx)(q,{label:r(`rule_home`),value:t.who,options:[{value:`anyone`,label:r(`rule_anyone`)},{value:`nobody`,label:r(`rule_nobody`)}],onChange:e=>n({...t,who:e===`nobody`?`nobody`:`anyone`})})}},nt=({rules:t,onChange:n})=>{let r=e();return(0,C.jsxs)(N,{as:`div`,children:[(0,C.jsx)(`span`,{className:`label`,children:r(`rules`)}),(0,C.jsx)(`small`,{children:r(`rules_hint`)}),t.map((e,i)=>(0,C.jsxs)($e,{children:[(0,C.jsxs)(`div`,{className:`head`,children:[(0,C.jsx)(q,{label:r(`rule_type`),value:e.type,options:Ze.map(e=>({value:e.type,label:r(e.label)})),onChange:e=>n(B(t,i,Qe(e)))}),(0,C.jsx)(Z,{index:i,length:t.length,onMove:e=>n(L(t,i,e)),onRemove:()=>n(t.filter((e,t)=>t!==i))})]}),(0,C.jsx)(tt,{rule:e,onChange:e=>n(B(t,i,e))})]},i)),(0,C.jsx)(`div`,{children:(0,C.jsx)(T,{icon:`mdi:plus`,disabled:t.length>=Xe,onClick:()=>n([...t,Qe(`state`)]),children:r(`add_rule`)})})]})},rt=({item:t})=>{let n=i(t.entity||void 0),r=e(),a=t.name||n?.attributes.friendly_name||t.entity||r(`not_set`);return(0,C.jsxs)(C.Fragment,{children:[(0,C.jsx)(h,{className:`icon`,icon:t.icon||n?.attributes.icon||c(t.entity)}),(0,C.jsxs)(`span`,{className:`text`,children:[(0,C.jsx)(`span`,{children:a}),t.entity&&(0,C.jsxs)(`span`,{className:`secondary`,children:[t.entity,t.rules?.length?` · ${t.rules.length===1?r(`rules_one`):r(`rules_count`,{count:t.rules.length})}`:``]})]})]})},it=({items:t,max:n,domains:r,addLabel:i,withRules:a=!1,onChange:o})=>{let s=e(),c=(e,n)=>o(B(t,e,{...t[e],...n}));return(0,C.jsxs)(C.Fragment,{children:[t.length===0&&(0,C.jsxs)(ye,{children:[(0,C.jsx)(h,{icon:`mdi:playlist-plus`}),(0,C.jsx)(`span`,{children:s(`empty_list`)})]}),t.map((e,n)=>(0,C.jsxs)(j,{open:!e.entity||void 0,children:[(0,C.jsxs)(`summary`,{children:[(0,C.jsx)(rt,{item:e}),(0,C.jsx)(`span`,{onClick:e=>e.preventDefault(),children:(0,C.jsx)(Z,{index:n,length:t.length,onMove:e=>o(L(t,n,e)),onRemove:()=>o(t.filter((e,t)=>t!==n))})})]}),(0,C.jsxs)(`div`,{className:`fold-body`,children:[(0,C.jsx)(Y,{label:s(`entity`),value:e.entity,domains:r,onChange:e=>c(n,{entity:e})}),(0,C.jsxs)(F,{children:[(0,C.jsx)(W,{label:s(`name`),hint:s(`name_hint`),value:e.name,onChange:e=>c(n,{name:e})}),(0,C.jsx)(J,{label:s(`icon`),value:e.icon,onChange:e=>c(n,{icon:e})})]}),a&&(0,C.jsx)(nt,{rules:e.rules??[],onChange:e=>c(n,{rules:e})})]})]},e.id)),(0,C.jsx)(`div`,{children:(0,C.jsxs)(T,{icon:`mdi:plus`,appearance:`filled`,disabled:t.length>=n,onClick:()=>o([...t,{id:R(),entity:``,name:``,icon:``,...a?{rules:[]}:{}}]),children:[i,` (`,t.length,`/`,n,`)`]})})]})},at=[`input_boolean`,`switch`,`binary_sensor`],ot=({draft:t,update:n,part:r})=>{let i=e(),a=qe(),o=t.sidebar,c=e=>n({...t,sidebar:e}),l=(e,t)=>c({...o,[e]:{...o[e],...t}}),u=E.find(e=>e.part===r)?.label??`tab_sidebar`,d=(0,C.jsx)(Q,{title:i(u),lead:i(`lead_${r}`)});switch(r){case`clock`:return(0,C.jsxs)(C.Fragment,{children:[d,(0,C.jsxs)(k,{children:[(0,C.jsx)(q,{label:i(`clock_style`),value:o.clock?.style??`digital`,options:[{value:`digital`,label:i(`clock_digital`)},{value:`analog`,label:i(`clock_analog`)}],onChange:e=>l(`clock`,{style:e})}),(0,C.jsx)(K,{label:i(`clock_seconds`),value:!!o.clock?.seconds,onChange:e=>l(`clock`,{seconds:e})})]})]});case`status`:return(0,C.jsxs)(C.Fragment,{children:[d,(0,C.jsxs)(k,{children:[(0,C.jsx)(`h3`,{children:i(`status_icons`)}),(0,C.jsx)(`p`,{children:i(`status_icons_hint`)}),(0,C.jsx)(it,{items:o.status.icons??[],max:v.statusIcons,domains:at,addLabel:i(`add_status_icon`),onChange:e=>l(`status`,{icons:e})})]}),(0,C.jsxs)(k,{children:[(0,C.jsx)(`h3`,{children:i(`wifi_heading`)}),(0,C.jsx)(Y,{label:i(`wifi_signal`),hint:i(`wifi_signal_hint`),value:o.status.wifi_signal,domains:[`sensor`],onChange:e=>l(`status`,{wifi_signal:e})})]}),(0,C.jsxs)(k,{children:[(0,C.jsx)(`h3`,{children:i(`guest_wifi`)}),(0,C.jsx)(Y,{label:i(`guest_qr_image`),hint:i(`guest_qr_image_hint`),value:o.guest_wifi.qr_image,domains:[`image`],onChange:e=>l(`guest_wifi`,{qr_image:e})}),(0,C.jsxs)(F,{children:[(0,C.jsx)(W,{label:i(`network`),value:o.guest_wifi.ssid,onChange:e=>l(`guest_wifi`,{ssid:e})}),(0,C.jsx)(W,{label:i(`password`),type:`password`,value:o.guest_wifi.password,onChange:e=>l(`guest_wifi`,{password:e})})]}),(0,C.jsxs)(F,{children:[(0,C.jsx)(q,{label:i(`security`),value:o.guest_wifi.security,options:[{value:`WPA`,label:`WPA/WPA2/WPA3`},{value:`WEP`,label:`WEP`},{value:`nopass`,label:i(`open_network`)}],onChange:e=>l(`guest_wifi`,{security:e})}),(0,C.jsx)(K,{label:i(`hidden_network`),value:o.guest_wifi.hidden,onChange:e=>l(`guest_wifi`,{hidden:e})})]})]})]});case`climate`:return(0,C.jsxs)(C.Fragment,{children:[d,(0,C.jsxs)(k,{children:[(0,C.jsx)(Y,{label:i(`temperature`),value:o.climate.temperature,domains:[`sensor`],onChange:e=>l(`climate`,{temperature:e})}),(0,C.jsx)(Y,{label:i(`humidity`),value:o.climate.humidity,domains:[`sensor`],onChange:e=>l(`climate`,{humidity:e})}),(0,C.jsx)(G,{label:i(`hours`),value:o.climate.hours,min:1,max:168,unit:`h`,onChange:e=>l(`climate`,{hours:e})})]})]});case`persons`:return(0,C.jsxs)(C.Fragment,{children:[d,(0,C.jsx)(X,{label:i(`persons`),value:o.persons,domains:[`person`],onChange:e=>c({...o,persons:e})})]});case`openings`:return(0,C.jsxs)(C.Fragment,{children:[d,(0,C.jsx)(X,{label:i(`openings`),hint:i(`openings_hint`),value:o.openings,domains:[`binary_sensor`,`cover`,`lock`,`sensor`],onChange:e=>c({...o,openings:e})}),(0,C.jsx)(K,{label:i(`openings_hide_when_closed`),hint:i(`openings_hide_when_closed_hint`),value:o.openings_view?.hide_when_closed??!1,onChange:e=>c({...o,openings_view:{only_open:!1,...o.openings_view,hide_when_closed:e}})}),(0,C.jsx)(K,{label:i(`openings_only_open`),hint:i(`openings_only_open_hint`),value:o.openings_view?.only_open??!1,onChange:e=>c({...o,openings_view:{hide_when_closed:!1,...o.openings_view,only_open:e}})})]});case`travel`:return(0,C.jsxs)(C.Fragment,{children:[d,(0,C.jsxs)(k,{children:[(0,C.jsx)(Y,{label:i(`travel_sensor`),value:o.travel.entity,domains:[`sensor`],onChange:e=>l(`travel`,{entity:e})}),(0,C.jsx)(W,{label:i(`name`),hint:i(`travel_name_hint`),value:o.travel.name,onChange:e=>l(`travel`,{name:e})})]}),(0,C.jsxs)(k,{children:[(0,C.jsx)(`h3`,{children:i(`map`)}),(0,C.jsx)(W,{label:i(`maps_api_key`),hint:i(`maps_api_key_hint`),type:`password`,value:o.travel.maps_api_key,onChange:e=>l(`travel`,{maps_api_key:e})}),(0,C.jsx)(W,{label:i(`map_url`),hint:i(`map_url_hint`),type:`url`,value:o.travel.map_url,onChange:e=>l(`travel`,{map_url:e})})]})]});case`quick`:return(0,C.jsxs)(C.Fragment,{children:[d,(0,C.jsx)(it,{items:o.quick_actions,max:v.quickActions,addLabel:i(`add_quick_action`),withRules:!0,onChange:e=>c({...o,quick_actions:e})})]});case`calendar`:return(0,C.jsxs)(C.Fragment,{children:[d,(0,C.jsxs)(k,{children:[(0,C.jsx)(X,{label:i(`calendars`),value:o.calendar.entities,domains:[`calendar`],onChange:e=>l(`calendar`,{entities:e})}),(0,C.jsx)(G,{label:i(`days`),hint:i(`calendar_days_hint`),value:o.calendar.days,min:1,max:v.calendarDays,onChange:e=>l(`calendar`,{days:e})})]})]});case`weather`:return(0,C.jsxs)(C.Fragment,{children:[d,(0,C.jsxs)(k,{children:[(0,C.jsx)(Y,{label:i(`weather_entity`),value:o.weather.entity,domains:[`weather`],onChange:e=>l(`weather`,{entity:e})}),(0,C.jsx)(Y,{label:i(`outdoor_temperature`),hint:i(`outdoor_temperature_hint`),value:o.weather.temperature,domains:[`sensor`],onChange:e=>l(`weather`,{temperature:e})})]})]});case`notifications`:return(0,C.jsxs)(C.Fragment,{children:[d,(0,C.jsxs)(k,{children:[(0,C.jsx)(K,{label:i(`notifications_enabled`),value:o.notifications.enabled,onChange:e=>l(`notifications`,{enabled:e})}),(0,C.jsx)(Oe,{label:i(`notifications_prefix`),hint:i(`notifications_prefix_hint`),suggestions:ne([...a,t]),value:s(o.notifications),onChange:e=>l(`notifications`,{prefixes:e})})]}),(0,C.jsxs)(k,{children:[(0,C.jsx)(`h3`,{children:i(`settings`)}),(0,C.jsx)(K,{label:i(`settings_enabled`),hint:i(`settings_enabled_hint`),value:o.settings?.enabled!==!1,onChange:e=>l(`settings`,{enabled:e})})]})]});case`system`:return(0,C.jsxs)(C.Fragment,{children:[d,(0,C.jsx)(it,{items:o.system,max:v.system,domains:[`sensor`],addLabel:i(`add_statistic`),onChange:e=>c({...o,system:e})})]})}},st=a.textarea`
  min-height: 55vh;
  padding: 12px;
  border-radius: 8px;
  border: 1px solid var(--divider-color, rgba(225, 225, 225, 0.12));
  background: var(--code-editor-background-color, var(--secondary-background-color, #282828));
  color: inherit;
  font-family: var(--ha-font-family-code, ui-monospace, monospace);
  font-size: 13px;
  resize: vertical;
`,ct=a.p`
  margin: 0;
  color: var(--error-color, #db4437);
`,lt=({draft:t,update:n})=>{let r=e(),[i,a]=(0,S.useState)(()=>JSON.stringify(t,null,2)),[o,s]=(0,S.useState)(!1);return(0,C.jsxs)(C.Fragment,{children:[(0,C.jsx)(Q,{title:r(`tab_json`),lead:r(`json_hint`)}),(0,C.jsx)(st,{value:i,spellCheck:!1,onChange:e=>{a(e.target.value),s(!1)}}),o&&(0,C.jsx)(ct,{children:r(`json_invalid`)}),(0,C.jsx)(`div`,{children:(0,C.jsx)(T,{icon:`mdi:check`,appearance:`filled`,onClick:()=>{try{n({...JSON.parse(i),id:t.id})}catch{s(!0)}},children:r(`apply`)})})]})};function ut(){let e=n(e=>{let t=new Set(Object.values(e.entitiesRegistryDisplay).map(e=>e.platform));return m.filter(e=>!e.integration||t.has(e.integration)).map(e=>e.type).join(` `)});return m.filter(t=>e.split(` `).includes(t.type))}function dt(e){let t=n(t=>e?.pickerEntities?e.pickerEntities(t.entities,e=>t.entitiesRegistryDisplay[e]?.platform).join(` `):null);return(0,S.useMemo)(()=>t===null?void 0:t.split(` `).filter(Boolean),[t])}var ft=({tile:t,onChange:n})=>{let r=e(),a=i(_(t.entity||void 0))?.attributes.options??[],o=Array.isArray(t.options.hidden_scenes)?t.options.hidden_scenes:[],s=e=>n({...t.options,...e});return(0,C.jsxs)(C.Fragment,{children:[a.length>0&&(0,C.jsxs)(N,{as:`div`,children:[(0,C.jsx)(`span`,{className:`label`,children:r(`bl_shown_scenes`)}),(0,C.jsx)(`small`,{children:r(`bl_shown_scenes_hint`)}),a.map(e=>(0,C.jsx)(K,{label:e,value:!o.includes(e),onChange:t=>s({hidden_scenes:t?o.filter(t=>t!==e):[...o.filter(e=>a.includes(e)),e]})},e))]}),(0,C.jsx)(K,{label:r(`light_hide_presets`),hint:r(`light_hide_presets_hint`),value:t.options.hide_presets===!0,onChange:e=>s({hide_presets:e})}),(0,C.jsxs)(F,{children:[(0,C.jsx)(Y,{label:r(`bl_button_entity`),hint:r(`bl_button_entity_hint`),value:typeof t.options.button_entity==`string`?t.options.button_entity:``,onChange:e=>s({button_entity:e})}),(0,C.jsx)(J,{label:r(`bl_button_icon`),value:typeof t.options.button_icon==`string`?t.options.button_icon:``,onChange:e=>s({button_icon:e})})]})]})},pt=({value:t,onChange:n})=>{let[r,i]=(0,S.useState)(()=>Object.keys(t).length?JSON.stringify(t):``),[a,o]=(0,S.useState)(!1),s=e();return(0,C.jsxs)(N,{children:[(0,C.jsx)(`span`,{className:`label`,children:s(`options_json`)}),(0,C.jsx)(`input`,{type:`text`,value:r,placeholder:`{"hours": 24, "color": "#03a9f4"}`,onChange:e=>{i(e.target.value);try{let t=e.target.value.trim()?JSON.parse(e.target.value):{};if(t&&typeof t==`object`&&!Array.isArray(t)){o(!1),n(t);return}}catch{}o(!0)}}),a&&(0,C.jsx)(`small`,{children:s(`json_invalid`)})]})},mt=({value:t,entry:n,onChange:r})=>{let i=e(),a=dt(n);return(0,C.jsx)(Y,{label:i(`entity`),value:t,domains:n?.domains,integration:n?.pickerIntegration,include:a,onChange:r})},ht=({tile:t})=>{let n=e(),r=i(t.entity||void 0),a=b[t.type],o=t.name||r?.attributes.friendly_name||t.entity||(a?n(a.label):t.type);return(0,C.jsxs)(C.Fragment,{children:[(0,C.jsx)(h,{className:`icon`,icon:t.icon||a?.icon||`mdi:square-rounded-outline`}),(0,C.jsxs)(`span`,{className:`text`,children:[(0,C.jsx)(`span`,{children:o}),(0,C.jsxs)(`span`,{className:`secondary`,children:[a?n(a.label):t.type,` · `,t.w,` × `,t.h]})]})]})},gt=({tiles:t,columns:n,rows:r,onChange:i})=>{let a=e(),o=ut(),s=(e,n)=>i(B(t,e,{...t[e],...n}));return(0,C.jsxs)(C.Fragment,{children:[t.length===0&&(0,C.jsxs)(ye,{children:[(0,C.jsx)(h,{icon:`mdi:view-grid-plus-outline`}),(0,C.jsx)(`span`,{children:a(`empty_tiles`)})]}),t.map((e,c)=>{let l=b[e.type];return(0,C.jsxs)(j,{open:!e.entity&&l?.needsEntity!==!1||void 0,children:[(0,C.jsxs)(`summary`,{children:[(0,C.jsx)(ht,{tile:e}),(0,C.jsx)(`span`,{onClick:e=>e.preventDefault(),children:(0,C.jsx)(Z,{index:c,length:t.length,onMove:e=>i(L(t,c,e)),onRemove:()=>i(t.filter((e,t)=>t!==c)),onDuplicate:()=>i([...t.slice(0,c+1),{...e,id:R()},...t.slice(c+1)])})})]}),(0,C.jsxs)(`div`,{className:`fold-body`,children:[(0,C.jsx)(q,{label:a(`type`),value:e.type,options:[...o.map(e=>({value:e.type,label:a(e.label)})),...o.some(t=>t.type===e.type)?[]:[{value:e.type,label:l?a(l.label):e.type}]],onChange:e=>{let t=b[e]?.size??[1,1];s(c,{type:e,w:Math.min(t[0],n),h:Math.min(t[1],r)})}}),l?.needsEntity!==!1&&(0,C.jsx)(mt,{value:e.entity,entry:l,onChange:e=>s(c,{entity:e})}),(0,C.jsxs)(F,{children:[(0,C.jsx)(W,{label:a(`name`),hint:a(`name_hint`),value:e.name,onChange:e=>s(c,{name:e})}),(0,C.jsx)(J,{label:a(`icon`),value:e.icon,onChange:e=>s(c,{icon:e})})]}),(0,C.jsxs)(F,{children:[(0,C.jsx)(G,{label:a(`width`),value:e.w,min:1,max:n,onChange:e=>s(c,{w:Math.max(1,Math.min(n,e))})}),(0,C.jsx)(G,{label:a(`height`),value:e.h,min:1,max:r,onChange:e=>s(c,{h:Math.max(1,Math.min(r,e))})})]}),e.type===`sensor`&&(0,C.jsx)(pt,{value:e.options,onChange:e=>s(c,{options:e})}),e.type===`entity`&&e.entity.startsWith(`light.`)&&(0,C.jsx)(K,{label:a(`light_hide_presets`),hint:a(`light_hide_presets_hint`),value:e.options.hide_presets===!0,onChange:t=>s(c,{options:{...e.options,hide_presets:t}})}),(e.type===`cover`||e.type===`adaptive_cover`)&&(0,C.jsx)(q,{label:a(`cover_active_when`),hint:a(`cover_active_when_hint`),value:u.includes(e.options.active_when)?String(e.options.active_when):`open`,options:u.map(e=>({value:e,label:a(`cover_active_${e}`)})),onChange:t=>s(c,{options:{...e.options,active_when:t}})}),(e.type===`cover`||e.type===`adaptive_cover`)&&(0,C.jsx)(K,{label:a(`cover_stop_only_moving`),hint:a(`cover_stop_only_moving_hint`),value:e.options.stop_only_moving===!0,onChange:t=>s(c,{options:{...e.options,stop_only_moving:t}})}),(e.type===`cover`||e.type===`adaptive_cover`)&&(0,C.jsx)(Oe,{label:a(`cover_presets`),hint:a(`cover_presets_hint`),suggestions:[`0`,`25`,`50`,`75`,`100`],value:d(e.options.positions).map(String),onChange:t=>s(c,{options:{...e.options,positions:d(t)}})}),e.type===`better_lighting`&&(0,C.jsx)(ft,{tile:e,onChange:e=>s(c,{options:e})})]})]},e.id)}),(0,C.jsx)(`div`,{children:(0,C.jsx)(T,{icon:`mdi:plus`,appearance:`filled`,disabled:t.length>=v.tiles,onClick:()=>i([...t,{id:R(),type:`entity`,entity:``,name:``,icon:``,w:1,h:1,options:{}}]),children:a(`add_tile`)})})]})},_t=()=>({id:R(),name:``,icon:``,status:[],columns:2,rows:2,square:!0,tiles:[]}),vt=()=>({id:R(),columns:[75,25],rows:[50,50],sections:[]}),yt=e=>({...z(e),id:R(),sections:e.sections.map(e=>({...z(e),id:R(),tiles:e.tiles.map(e=>({...e,id:R()}))}))}),bt=e=>{let t=e.split(/[,/ ]+/).filter(Boolean).map(Number);return t.length&&t.length<=3&&t.every(e=>Number.isFinite(e)&&e>0)?t:null},xt=({label:e,hint:t,value:n,onChange:r})=>(0,C.jsx)(W,{label:e,hint:t,value:n.join(`, `),onChange:e=>{let t=bt(e);t&&r(t)}}),St=({draft:t,update:n,open:r})=>{let i=e(),a=t.pages,o=e=>n({...t,pages:e});return(0,C.jsxs)(C.Fragment,{children:[(0,C.jsx)(Q,{title:i(`tab_pages`),lead:i(`lead_pages`)}),(0,C.jsx)(A,{children:a.map((e,t)=>(0,C.jsxs)(`li`,{children:[(0,C.jsxs)(`button`,{type:`button`,className:`open`,onClick:()=>r({kind:`page`,page:t}),children:[(0,C.jsx)(h,{className:`icon`,icon:`mdi:book-open-page-variant-outline`}),(0,C.jsxs)(`span`,{className:`text`,children:[(0,C.jsx)(`span`,{children:i(`page_n`,{n:t+1})}),(0,C.jsx)(`span`,{className:`secondary`,children:e.sections.map(e=>e.name).filter(Boolean).join(` · `)||i(`no_sections`)})]})]}),(0,C.jsx)(Z,{index:t,length:a.length,onMove:e=>o(L(a,t,e)),onDuplicate:a.length<v.pages?()=>o([...a.slice(0,t+1),yt(e),...a.slice(t+1)]):void 0,onRemove:()=>a.length>1&&o(a.filter((e,n)=>n!==t))})]},e.id))}),(0,C.jsx)(`div`,{children:(0,C.jsx)(T,{icon:`mdi:plus`,appearance:`filled`,disabled:a.length>=v.pages,onClick:()=>{o([...a,vt()]),r({kind:`page`,page:a.length})},children:i(`add_page`)})})]})},Ct=({draft:t,update:n,open:r,page:i})=>{let a=e(),o=t.pages[i],s=e=>n({...t,pages:B(t.pages,i,{...o,...e})}),c=o.columns.length*o.rows.length;return(0,C.jsxs)(C.Fragment,{children:[(0,C.jsx)(Q,{title:a(`page_n`,{n:i+1}),lead:a(`lead_page`)}),(0,C.jsxs)(k,{children:[(0,C.jsx)(`h3`,{children:a(`layout`)}),(0,C.jsxs)(F,{children:[(0,C.jsx)(xt,{label:a(`column_split`),hint:a(`split_hint`),value:o.columns,onChange:e=>s({columns:e})}),(0,C.jsx)(xt,{label:a(`row_split`),hint:a(`split_hint`),value:o.rows,onChange:e=>s({rows:e})})]})]}),(0,C.jsxs)(k,{children:[(0,C.jsx)(`h3`,{children:a(`sections`)}),(0,C.jsx)(`p`,{children:a(`sections_hint`,{cells:c})}),(0,C.jsx)(A,{children:Array.from({length:c},(e,t)=>{let n=o.sections[t];return n?(0,C.jsxs)(`li`,{children:[(0,C.jsxs)(`button`,{type:`button`,className:`open`,onClick:()=>r({kind:`section`,page:i,section:t}),children:[(0,C.jsx)(h,{className:`icon`,icon:n.icon||`mdi:view-grid-outline`}),(0,C.jsxs)(`span`,{className:`text`,children:[(0,C.jsx)(`span`,{children:n.name||a(`section_n`,{n:t+1})}),(0,C.jsxs)(`span`,{className:`secondary`,children:[a(`tiles_count`,{count:n.tiles.length}),` · `,n.columns,` × `,n.rows]})]})]}),(0,C.jsx)(Z,{index:t,length:o.sections.length,onMove:e=>s({sections:L(o.sections,t,e)}),onRemove:()=>s({sections:o.sections.filter((e,n)=>n!==t)})})]},n.id):(0,C.jsx)(`li`,{children:(0,C.jsxs)(`button`,{type:`button`,className:`open`,onClick:()=>{let e=[...o.sections];for(;e.length<=t;)e.push(_t());s({sections:e}),r({kind:`section`,page:i,section:t})},children:[(0,C.jsx)(h,{className:`icon`,icon:`mdi:plus-box-outline`}),(0,C.jsxs)(`span`,{className:`text`,children:[(0,C.jsx)(`span`,{children:a(`add_section`)}),(0,C.jsx)(`span`,{className:`secondary`,children:a(`cell_n`,{n:t+1})})]})]})},`empty-${t}`)})})]})]})},wt=({draft:t,update:n,page:r,section:i})=>{let a=e(),o=t.pages[r],s=o.sections[i],c=e=>n({...t,pages:B(t.pages,r,{...o,sections:B(o.sections,i,{...s,...e})})});return(0,C.jsxs)(C.Fragment,{children:[(0,C.jsx)(Q,{title:s.name||a(`section_n`,{n:i+1}),lead:a(`lead_section`)}),(0,C.jsxs)(k,{children:[(0,C.jsx)(`h3`,{children:a(`section_header`)}),(0,C.jsxs)(F,{children:[(0,C.jsx)(W,{label:a(`name`),value:s.name,onChange:e=>c({name:e})}),(0,C.jsx)(J,{label:a(`icon`),value:s.icon,onChange:e=>c({icon:e})})]}),(0,C.jsx)(X,{label:a(`status_entities`),value:s.status,max:2,domains:[`sensor`,`binary_sensor`],onChange:e=>c({status:e})})]}),(0,C.jsxs)(k,{children:[(0,C.jsx)(`h3`,{children:a(`grid`)}),(0,C.jsxs)(F,{children:[(0,C.jsx)(G,{label:a(`columns`),value:s.columns,min:1,max:v.sectionCells,onChange:e=>c({columns:e})}),(0,C.jsx)(G,{label:a(`rows`),value:s.rows,min:1,max:v.sectionCells,onChange:e=>c({rows:e})})]}),(0,C.jsx)(K,{label:a(`square_cells`),hint:a(`square_cells_hint`),value:s.square,onChange:e=>c({square:e})})]}),(0,C.jsxs)(k,{children:[(0,C.jsx)(`h3`,{children:a(`tiles`)}),(0,C.jsx)(gt,{tiles:s.tiles,columns:s.columns,rows:s.rows,onChange:e=>c({tiles:e})})]})]})},Tt=({draft:t,update:n,open:r})=>{let i=e(),a=t.buttons,o=e=>n({...t,buttons:e});return(0,C.jsxs)(C.Fragment,{children:[(0,C.jsx)(Q,{title:i(`tab_buttons`),lead:i(`lead_buttons`)}),a.length>0&&(0,C.jsx)(A,{children:a.map((e,t)=>(0,C.jsxs)(`li`,{children:[(0,C.jsxs)(`button`,{type:`button`,className:`open`,onClick:()=>r({kind:`button`,button:t}),children:[(0,C.jsx)(h,{className:`icon`,icon:e.icon||`mdi:gesture-tap`}),(0,C.jsxs)(`span`,{className:`text`,children:[(0,C.jsx)(`span`,{children:e.name||i(`button_n`,{n:t+1})}),(0,C.jsx)(`span`,{className:`secondary`,children:i(`tiles_count`,{count:e.tiles.length})})]})]}),(0,C.jsx)(Z,{index:t,length:a.length,onMove:e=>o(L(a,t,e)),onRemove:()=>o(a.filter((e,n)=>n!==t))})]},e.id))}),(0,C.jsx)(`div`,{children:(0,C.jsxs)(T,{icon:`mdi:plus`,appearance:`filled`,disabled:a.length>=v.buttons,onClick:()=>{o([...a,{id:R(),name:``,icon:`mdi:gesture-tap`,columns:4,tiles:[]}]),r({kind:`button`,button:a.length})},children:[i(`add_button`),` (`,a.length,`/`,v.buttons,`)`]})})]})},Et=({draft:t,update:n,button:r})=>{let i=e(),a=t.buttons[r],o=e=>n({...t,buttons:B(t.buttons,r,{...a,...e})});return(0,C.jsxs)(C.Fragment,{children:[(0,C.jsx)(Q,{title:a.name||i(`button_n`,{n:r+1}),lead:i(`lead_button`)}),(0,C.jsxs)(k,{children:[(0,C.jsxs)(F,{children:[(0,C.jsx)(W,{label:i(`name`),value:a.name,onChange:e=>o({name:e})}),(0,C.jsx)(J,{label:i(`icon`),value:a.icon,onChange:e=>o({icon:e})})]}),(0,C.jsx)(G,{label:i(`columns`),hint:i(`button_columns_hint`),value:a.columns,min:1,max:v.sectionCells,onChange:e=>o({columns:e})})]}),(0,C.jsxs)(k,{children:[(0,C.jsx)(`h3`,{children:i(`tiles`)}),(0,C.jsx)(gt,{tiles:a.tiles,columns:a.columns,rows:v.sectionCells,onChange:e=>o({tiles:e})})]})]})},$=[{id:`tab-10`,label:`10″ tablet · 1280×800`,width:1280,height:800},{id:`tab-11`,label:`11″ tablet · 1194×834`,width:1194,height:834},{id:`tab-12`,label:`12″ tablet · 1366×1024`,width:1366,height:1024},{id:`fhd`,label:`Full HD · 1920×1080`,width:1920,height:1080},{id:`small`,label:`7″ panel · 1024×600`,width:1024,height:600}],Dt=({view:e,dashboards:t,...n})=>{switch(e.kind){case`general`:return(0,C.jsx)(Ye,{...n});case`sidebar`:return(0,C.jsx)(ot,{...n,part:e.part});case`pages`:return(0,C.jsx)(St,{...n});case`page`:return(0,C.jsx)(Ct,{...n,page:e.page});case`section`:return(0,C.jsx)(wt,{...n,page:e.page,section:e.section});case`buttons`:return(0,C.jsx)(Tt,{...n});case`button`:return(0,C.jsx)(Et,{...n,button:e.button});case`users`:return(0,C.jsx)(Be,{dashboards:t});case`json`:return(0,C.jsx)(lt,{...n},n.draft.id)}},Ot=()=>{let t=e(),n=ae(),{narrow:r}=re(),[i,a]=(0,S.useState)(null),[o,s]=(0,S.useState)(null),[c,l]=(0,S.useState)(!1),[u,d]=(0,S.useState)(``),[f,ee]=(0,S.useState)({kind:`general`}),[te,p]=(0,S.useState)(()=>new Set),[m,g]=(0,S.useState)(!1),[ne,_]=(0,S.useState)(!1),[v,y]=(0,S.useState)(!1),[b,ie]=(0,S.useState)(!1),[x,se]=(0,S.useState)($[0].id),[w,E]=(0,S.useState)(!1),ue=$.find(e=>e.id===x)??$[0],O=(0,S.useCallback)((e,t)=>{s(z(e.dashboards[t]??e.dashboards.default)),l(!1)},[]);(0,S.useEffect)(()=>{n?.sendMessagePromise({type:`better_wall_dashboard/document`}).then(e=>{a(e),O(e,`default`)}).catch(e=>d(String(e?.message??e)))},[n,O]),(0,S.useEffect)(()=>{if(!c)return;let e=e=>e.preventDefault();return window.addEventListener(`beforeunload`,e),()=>window.removeEventListener(`beforeunload`,e)},[c]);let ge=(0,S.useCallback)(e=>{s(e),l(!0),d(``)},[]),k=(0,S.useCallback)((e,t)=>{ee(e),p(n=>new Set([...n,...le(e),...t?[t]:[]])),g(!1),_(!1),ie(!1)},[]),A=(0,S.useCallback)(e=>{p(t=>{let n=new Set(t);return n.delete(e)||n.add(e),n})},[]),{confirm:j,dialog:ye}=Ge(),M=async()=>!c||j({title:t(`discard_title`),text:t(`discard_text`),confirm:t(`discard`),danger:!0}),Se=async()=>{if(n&&o){d(t(`saving`));try{let e=await n.sendMessagePromise({type:`better_wall_dashboard/save_dashboard`,dashboard:o});a(t=>t&&{...t,dashboards:{...t.dashboards,[e.dashboard.id]:e.dashboard}}),s(z(e.dashboard)),l(!1),d(t(`saved`))}catch(e){d(String(e?.message??e))}}},Ce=async()=>{i&&o&&await M()&&(i.dashboards[o.id]?O(i,o.id):O(i,`default`),d(``))},N=async e=>{i&&await M()&&(O(i,e),k({kind:`general`}))},P=async e=>{if(_(!1),!i||!await M())return;let n=z(e??i.dashboards.default);s({...n,id:R(),name:e?`${e.name} (2)`:t(`new_dashboard`)}),l(!0),k({kind:`general`})},F=async()=>{if(_(!1),!n||!o)return;let e=e=>Je(e)||d(e);try{let r=await n.sendMessagePromise({type:`better_wall_dashboard/reload_tablets`,dashboard_id:o.id});e(t(`tablets_reloaded`,{count:r.reached}))}catch(t){e(String(t?.message??t))}},I=async()=>{if(_(!1),!n||!o||!i||o.id==="default"||!await j({title:t(`delete_title`,{name:o.name}),text:t(`confirm_delete`,{name:o.name}),confirm:t(`delete`),danger:!0}))return;i.dashboards[o.id]&&await n.sendMessagePromise({type:`better_wall_dashboard/delete_dashboard`,dashboard_id:o.id});let e={...i.dashboards};delete e[o.id];let r={...i,dashboards:e};a(r),O(r,`default`),k({kind:`general`})},L=(0,S.useMemo)(()=>Object.values(i?.dashboards??{}),[i]),B=(0,S.useMemo)(()=>{let e=Object.values(i?.dashboards??{}).map(e=>({id:e.id,name:e.name}));return o&&!e.some(e=>e.id===o.id)&&e.push({id:o.id,name:o.name}),e.map(e=>e.id===o?.id?{...e,name:o.name}:e)},[i,o]);if(!o)return(0,C.jsxs)(fe,{children:[(0,C.jsx)(pe,{"data-narrow":r,children:(0,C.jsx)(`span`,{className:`app-title`,children:t(`editor_title`)})}),(0,C.jsx)(`p`,{style:{padding:24},children:u||t(`loading`)})]});let V=ce(f,o),Te=de(V,{label:e=>t(e),page:e=>t(`page_n`,{n:e+1}),section:(e,n)=>o.pages[e]?.sections[n]?.name||t(`section_n`,{n:n+1}),button:e=>o.buttons[e]?.name||t(`button_n`,{n:e+1})}),H=V.kind===`page`||V.kind===`section`?V.page:void 0,Ee=V.kind!==`users`;return(0,C.jsx)(Ie,{children:(0,C.jsxs)(fe,{children:[(0,C.jsxs)(pe,{"data-narrow":r,children:[(0,C.jsx)(D,{type:`button`,className:`only-narrow`,"aria-label":t(`menu`),onClick:e=>oe(e.currentTarget),children:(0,C.jsx)(h,{icon:`mdi:menu`})}),(0,C.jsx)(D,{type:`button`,className:`only-drawer`,"aria-label":t(`editor_menu`),onClick:()=>g(!0),children:(0,C.jsx)(h,{icon:`mdi:format-list-bulleted`})}),(0,C.jsxs)(`div`,{className:`titles`,children:[(0,C.jsx)(`span`,{className:`app-title`,children:t(`editor_title`)}),(0,C.jsxs)(`nav`,{"aria-label":t(`editor_menu`),children:[(0,C.jsx)(`button`,{type:`button`,onClick:()=>k({kind:`general`}),children:o.name}),Te.map((e,t)=>(0,C.jsxs)(`span`,{children:[`› `,e.view?(0,C.jsx)(`button`,{type:`button`,onClick:()=>k(e.view),children:e.label}):e.label]},t))]})]}),(0,C.jsx)(`span`,{className:`spacer`}),(0,C.jsx)(D,{type:`button`,className:`only-no-preview`,"aria-pressed":b,"aria-label":t(`preview`),"data-tip":t(`preview`),onClick:()=>ie(e=>!e),children:(0,C.jsx)(h,{icon:b?`mdi:form-select`:`mdi:tablet-dashboard`})}),(0,C.jsxs)(me,{children:[(0,C.jsx)(D,{type:`button`,"aria-label":t(`more`),"aria-expanded":ne,onClick:()=>_(e=>!e),children:(0,C.jsx)(h,{icon:`mdi:dots-vertical`})}),ne&&(0,C.jsxs)(`div`,{className:`menu`,role:`menu`,children:[(0,C.jsxs)(`button`,{type:`button`,role:`menuitem`,onClick:()=>void P(),children:[(0,C.jsx)(h,{icon:`mdi:plus`}),` `,t(`new_dashboard`)]}),(0,C.jsxs)(`button`,{type:`button`,role:`menuitem`,onClick:()=>void P(o),children:[(0,C.jsx)(h,{icon:`mdi:content-copy`}),` `,t(`duplicate`)]}),(0,C.jsxs)(`button`,{type:`button`,role:`menuitem`,onClick:()=>void F(),children:[(0,C.jsx)(h,{icon:`mdi:tablet-cellphone`}),` `,t(`reload_tablets`)]}),(0,C.jsxs)(`button`,{type:`button`,role:`menuitem`,onClick:()=>k({kind:`json`}),children:[(0,C.jsx)(h,{icon:`mdi:code-json`}),` `,t(`edit_json`)]}),(0,C.jsxs)(`button`,{type:`button`,role:`menuitem`,className:`danger`,disabled:o.id==="default",onClick:()=>void I(),children:[(0,C.jsx)(h,{icon:`mdi:delete-outline`}),` `,t(`delete_dashboard`)]}),(0,C.jsx)(`hr`,{}),(0,C.jsxs)(`button`,{type:`button`,role:`menuitem`,onClick:()=>{_(!1),y(!0)},children:[(0,C.jsx)(h,{icon:`mdi:information-outline`}),` `,t(`about`)]})]})]})]}),(0,C.jsxs)(he,{children:[(0,C.jsx)(_e,{$open:m,onClick:()=>g(!1)}),(0,C.jsx)(xe,{dashboards:B,draft:o,view:V,expanded:te,open:m,onToggle:A,onOpen:k,onSwitch:e=>void N(e),onNewDashboard:()=>void P()}),(0,C.jsxs)(ve,{$hidden:b,children:[(0,C.jsx)(`div`,{className:`screen-body`,children:(0,C.jsx)(Ke.Provider,{value:L,children:(0,C.jsx)(Dt,{view:V,dashboards:B,draft:o,update:ge,open:k})})}),Ee&&(0,C.jsxs)(`div`,{className:`screen-foot`,children:[(0,C.jsx)(`span`,{className:`status`,children:c?t(`unsaved`):u}),(0,C.jsxs)(`span`,{className:`end`,children:[(0,C.jsx)(T,{appearance:`plain`,disabled:!c,onClick:()=>void Ce(),children:t(`discard`)}),(0,C.jsx)(T,{appearance:`accent`,icon:`mdi:content-save-outline`,disabled:!c,onClick:Se,children:t(`save`)})]})]})]}),(0,C.jsxs)(be,{$shown:b,children:[(0,C.jsxs)(`div`,{className:`preview-bar`,children:[(0,C.jsx)(`h2`,{children:t(`preview`)}),(0,C.jsx)(q,{label:t(`device`),value:x,options:$.map(e=>({value:e.id,label:e.label})),onChange:se}),(0,C.jsx)(D,{type:`button`,style:{color:`var(--secondary-text-color)`},"aria-label":t(w?`landscape`:`portrait`),"data-tip":t(w?`landscape`:`portrait`),onClick:()=>E(e=>!e),children:(0,C.jsx)(h,{icon:w?`mdi:phone-rotate-landscape`:`mdi:phone-rotate-portrait`})})]}),(0,C.jsx)(`div`,{className:`stage`,children:(0,C.jsx)(we,{dashboard:o,device:ue,portrait:w,page:H})})]})]}),(0,C.jsx)(Ue,{open:v,onClose:()=>y(!1)}),ye]})})};export{Ot as default};