import{C as e,S as t,_ as n,a as r,b as i,c as a,d as o,f as s,g as c,h as l,i as u,l as d,m as f,n as p,o as ee,p as te,r as ne,s as re,t as m,u as ie,v as h,w as g,x as ae,y as _}from"./boot-BwS3Xj0G.js";var v=g(e(),1),y=g(t(),1),oe=i.button`
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
  ${({$appearance:e,$danger:t})=>{let n=t?`var(--error-color, #db4437)`:`var(--primary-color, #03a9f4)`;return e===`accent`?_`
        background: ${n};
        color: var(--text-primary-color, #fff);
      `:e===`filled`?_`
        background: color-mix(in srgb, ${n} 16%, transparent);
        color: ${n};
      `:_`
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
`,b=()=>()=>{},x=({children:e,onClick:t,icon:n,appearance:r=`plain`,danger:i=!1,disabled:a,title:o})=>{let c=(0,v.useSyncExternalStore)(b,()=>!!customElements.get(`ha-button`)),l=(0,y.jsxs)(y.Fragment,{children:[n&&(0,y.jsx)(`span`,{slot:`start`,style:{display:`inline-flex`},children:(0,y.jsx)(s,{icon:n,size:`18px`})}),e]});return c?(0,v.createElement)(`ha-button`,{appearance:r,variant:i?`danger`:`brand`,disabled:a||void 0,title:o,onClick:t},l):(0,y.jsx)(oe,{type:`button`,$appearance:r,$danger:i,disabled:a,title:o,onClick:t,children:l})},S=[{part:`status`,icon:`mdi:wifi-star`,label:`nav_status`},{part:`climate`,icon:`mdi:home-thermometer-outline`,label:`room_climate`},{part:`persons`,icon:`mdi:account-multiple-outline`,label:`persons`},{part:`openings`,icon:`mdi:window-open-variant`,label:`openings`},{part:`travel`,icon:`mdi:car-clock`,label:`travel_time`},{part:`quick`,icon:`mdi:gesture-tap-button`,label:`quick_actions`},{part:`calendar`,icon:`mdi:calendar-month-outline`,label:`calendar`},{part:`weather`,icon:`mdi:weather-partly-cloudy`,label:`weather`},{part:`notifications`,icon:`mdi:bell-outline`,label:`notifications`},{part:`system`,icon:`mdi:chart-box-outline`,label:`system_stats`}];function se(e,t){switch(e.kind){case`page`:return e.page<t.pages.length?e:{kind:`pages`};case`section`:{let n=t.pages[e.page];return n?e.section<n.sections.length?e:{kind:`page`,page:e.page}:{kind:`pages`}}case`button`:return e.button<t.buttons.length?e:{kind:`buttons`};default:return e}}function ce(e){switch(e.kind){case`sidebar`:return[`sidebar`];case`page`:return[`pages`];case`section`:return[`pages`,`page-${e.page}`];case`button`:return[`buttons`];default:return[]}}function C(e,t){return JSON.stringify(e)===JSON.stringify(t)}function le(e,t){switch(e.kind){case`general`:return[{label:t.label(`tab_general`)}];case`sidebar`:{let n=S.find(t=>t.part===e.part);return[{label:t.label(`tab_sidebar`)},{label:t.label(n?.label??e.part)}]}case`pages`:return[{label:t.label(`tab_pages`)}];case`page`:return[{label:t.label(`tab_pages`),view:{kind:`pages`}},{label:t.page(e.page)}];case`section`:return[{label:t.label(`tab_pages`),view:{kind:`pages`}},{label:t.page(e.page),view:{kind:`page`,page:e.page}},{label:t.section(e.page,e.section)}];case`buttons`:return[{label:t.label(`tab_buttons`)}];case`button`:return[{label:t.label(`tab_buttons`),view:{kind:`buttons`}},{label:t.button(e.button)}];case`users`:return[{label:t.label(`tab_users`)}];case`json`:return[{label:t.label(`tab_json`)}]}}var ue=i.div`
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
`,de=i.header`
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
`,w=i.button`
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
`,fe=i.div`
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
`,pe=i.div`
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
`,T=i.div`
  background: var(--card-background-color, #1c1c1c);
  border-radius: var(--ha-card-border-radius, 12px);
  box-shadow: var(--ha-card-box-shadow, none);
  border: 1px solid var(--ha-card-border-color, var(--divider-color, rgba(225, 225, 225, 0.12)));
  box-sizing: border-box;
  min-width: 0;
  min-height: 0;
`,me=i(T)`
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
`,he=i.div`
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
`,ge=i(T)`
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
`,E=i.section`
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
`,D=i.ul`
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
`,O=i.details`
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
`,k=i.div`
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
`,_e=i(T)`
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
`,A=i.dialog`
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
`,ve=({dashboards:e,draft:t,view:n,expanded:r,open:i,onToggle:a,onOpen:o,onSwitch:c,onNewDashboard:l})=>{let u=h(),d=(e,t,r)=>(0,y.jsx)(`li`,{children:(0,y.jsxs)(`button`,{type:`button`,"aria-current":C(n,e)?`page`:void 0,onClick:()=>o(e),children:[(0,y.jsx)(s,{className:`icon`,icon:r}),(0,y.jsx)(`span`,{className:`grow`,children:t})]})},JSON.stringify(e)),f=(e,t,i,c,l)=>{let u=r.has(e);return(0,y.jsxs)(`li`,{children:[(0,y.jsxs)(`button`,{type:`button`,"aria-expanded":u,"aria-current":C(n,t)?`page`:void 0,onClick:()=>o(t,e),children:[(0,y.jsx)(s,{className:`icon`,icon:c}),(0,y.jsx)(`span`,{className:`grow`,children:i}),(0,y.jsx)(`span`,{className:`twist`,"data-open":u,role:`button`,"aria-label":i,onClick:t=>{t.stopPropagation(),a(e)},children:(0,y.jsx)(s,{icon:`mdi:chevron-right`})})]}),u&&(0,y.jsx)(`ul`,{className:`sub`,children:l})]},e)},p=(0,y.jsxs)(y.Fragment,{children:[d({kind:`general`},u(`tab_general`),`mdi:cog-outline`),f(`sidebar`,{kind:`sidebar`,part:`status`},u(`tab_sidebar`),`mdi:dock-left`,S.map(e=>d({kind:`sidebar`,part:e.part},u(e.label),e.icon))),f(`pages`,{kind:`pages`},u(`tab_pages`),`mdi:book-open-page-variant-outline`,t.pages.map((e,t)=>e.sections.length?f(`page-${t}`,{kind:`page`,page:t},u(`page_n`,{n:t+1}),`mdi:file-outline`,e.sections.map((e,n)=>d({kind:`section`,page:t,section:n},e.name||u(`section_n`,{n:n+1}),e.icon||`mdi:view-grid-outline`))):d({kind:`page`,page:t},u(`page_n`,{n:t+1}),`mdi:file-outline`))),f(`buttons`,{kind:`buttons`},u(`tab_buttons`),`mdi:gesture-tap-button`,t.buttons.map((e,t)=>d({kind:`button`,button:t},e.name||u(`button_n`,{n:t+1}),e.icon||`mdi:gesture-tap`)))]});return(0,y.jsxs)(me,{$open:i,as:`nav`,"aria-label":u(`editor_title`),children:[(0,y.jsx)(`div`,{className:`heading`,children:u(`nav_dashboards`)}),(0,y.jsxs)(`ul`,{children:[e.map(e=>e.id===t.id?(0,y.jsxs)(`li`,{children:[(0,y.jsxs)(`button`,{type:`button`,"aria-expanded":!0,onClick:()=>o({kind:`general`}),children:[(0,y.jsx)(s,{className:`icon`,icon:`mdi:tablet-dashboard`}),(0,y.jsx)(`span`,{className:`grow`,children:(0,y.jsx)(`strong`,{children:t.name})})]}),(0,y.jsx)(`ul`,{className:`sub`,children:p})]},e.id):(0,y.jsx)(`li`,{children:(0,y.jsxs)(`button`,{type:`button`,onClick:()=>c(e.id),children:[(0,y.jsx)(s,{className:`icon`,icon:`mdi:tablet-dashboard`}),(0,y.jsx)(`span`,{className:`grow`,children:e.name})]})},e.id)),(0,y.jsx)(`li`,{className:`add`,children:(0,y.jsxs)(`button`,{type:`button`,onClick:l,children:[(0,y.jsx)(s,{className:`icon`,icon:`mdi:plus`}),(0,y.jsx)(`span`,{className:`grow`,children:u(`new_dashboard`)})]})})]}),(0,y.jsx)(`div`,{className:`heading`,children:u(`nav_house`)}),(0,y.jsx)(`ul`,{children:d({kind:`users`},u(`tab_users`),`mdi:account-multiple-outline`)})]})},j=i.div`
  position: relative;
  width: 100%;
  height: 100%;
  min-height: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
`,ye=i.div`
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
`,be=(0,v.memo)(({dashboard:e,device:t,portrait:n,page:r})=>{let i=h(),a=(0,v.useRef)(null),[o,s]=(0,v.useState)(.5),c=n?t.height:t.width,l=n?t.width:t.height;(0,v.useLayoutEffect)(()=>{let e=a.current;if(!e)return;let t=()=>{let t=Math.min((e.clientWidth-40)/c,(e.clientHeight-40)/l);s(Math.max(.1,Math.min(1,Math.floor(t*1e3)/1e3)))};t();let n=new ResizeObserver(t);return n.observe(e),()=>n.disconnect()},[c,l]);let d=(0,v.useMemo)(()=>({dashboard:e,dashboards:[],kiosk:!1,is_admin:!0,pin_required:!1}),[e]);return(0,y.jsx)(j,{ref:a,"aria-label":i(`preview`),children:(0,y.jsx)(ye,{style:{width:c,height:l,transform:`translate(-50%, -50%) scale(${o})`},children:(0,y.jsx)(te,{view:d,focusPage:r,children:(0,y.jsx)(u,{})})})})}),M=i.label`
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
`,xe=i.label`
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
`,N=i.div`
  display: grid;
  grid-template-columns: ${({$columns:e})=>e??`repeat(auto-fit, minmax(220px, 1fr))`};
  gap: 16px;
  align-items: start;
`,P=i.button`
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
`;function F(e,t,n){if(n<0||n>=e.length)return e;let r=[...e],[i]=r.splice(t,1);return r.splice(n,0,i),r}function I(){let e=new Uint8Array(6);return crypto.getRandomValues(e),Array.from(e,e=>e.toString(16).padStart(2,`0`)).join(``)}var L=e=>JSON.parse(JSON.stringify(e)),R=(e,t,n)=>e.map((e,r)=>r===t?n:e),z=({selector:e,value:t,onChange:n,label:r,helper:i,required:a=!1})=>{let o=(0,v.useRef)(null),s=(0,v.useRef)(null),c=(0,v.useRef)(n);(0,v.useEffect)(()=>{c.current=n}),(0,v.useEffect)(()=>{let e=document.createElement(`ha-selector`);e.hass=m();let t=t=>{t.stopPropagation();let n=t.detail.value;e.value=n,c.current(n)};e.addEventListener(`value-changed`,t),o.current?.append(e),s.current=e;let n=p(t=>{e.hass=t});return()=>{n(),e.removeEventListener(`value-changed`,t),e.remove(),s.current=null}},[]);let l=JSON.stringify(e);return(0,v.useEffect)(()=>{let e=s.current;e&&(e.selector=JSON.parse(l),e.label=r,e.helper=i,e.required=a)},[l,r,i,a]),(0,v.useEffect)(()=>{let e=s.current;e&&e.value!==t&&(e.value=t)},[t]),(0,y.jsx)(`div`,{ref:o,className:`ha-field`})},Se=[`ha-selector`,`ha-entity-picker`,`ha-switch`,`ha-icon-picker`],B=null;function V(){return Se.every(e=>customElements.get(e))}function Ce(){return V()?Promise.resolve(!0):(B??=(async()=>{let e=window.loadCardHelpers;if(!e)return!1;try{let t=await e();for(let e of[{type:`entities`,entities:[]},{type:`button`}])try{await(await t.createCardElement(e)).constructor.getConfigElement?.()}catch{}}catch{return!1}return!!customElements.get(`ha-selector`)})(),B)}function H(){let[e,t]=(0,v.useState)(V),n=(0,v.useSyncExternalStore)(p,()=>m()!==null);return(0,v.useEffect)(()=>{if(e||!n)return;let r=!0;return Ce().then(e=>r&&e&&t(!0)),()=>{r=!1}},[e,n]),e&&n}var U=({label:e,hint:t,value:n,onChange:r,placeholder:i,type:a=`text`})=>H()?(0,y.jsx)(z,{selector:{text:a===`text`?{}:{type:a}},value:n,label:e,helper:t,onChange:e=>r(typeof e==`string`?e:``)}):(0,y.jsxs)(M,{children:[(0,y.jsx)(`span`,{className:`label`,children:e}),(0,y.jsx)(`input`,{type:a,value:n,placeholder:i,onChange:e=>r(e.target.value)}),t&&(0,y.jsx)(`small`,{children:t})]}),W=({label:e,hint:t,value:n,onChange:r,min:i,max:a,step:o=1,unit:s})=>{let c=H(),l=e=>{let t=Number(e);e!==``&&e!==null&&Number.isFinite(t)&&r(t)};return c?(0,y.jsx)(z,{selector:{number:{min:i,max:a,step:o,mode:`box`,unit_of_measurement:s}},value:n,label:e,helper:t,onChange:l}):(0,y.jsxs)(M,{children:[(0,y.jsx)(`span`,{className:`label`,children:e}),(0,y.jsx)(`input`,{type:`number`,value:n,min:i,max:a,step:o,onChange:e=>l(e.target.value)}),t&&(0,y.jsx)(`small`,{children:t})]})},we=({label:e,hint:t,value:n,onChange:r,min:i,max:a,step:o,unit:s,scale:c=1})=>{let l=H(),u=Math.round(n*c*1e3)/1e3,d=e=>{let t=Number(e);Number.isFinite(t)&&r(t/c)};return l?(0,y.jsx)(z,{selector:{number:{min:i,max:a,step:o,mode:`slider`,unit_of_measurement:s}},value:u,label:e,helper:t,onChange:d}):(0,y.jsxs)(M,{children:[(0,y.jsxs)(`span`,{className:`label`,children:[e,`: `,u,s?` ${s}`:``]}),(0,y.jsx)(`input`,{type:`range`,value:u,min:i,max:a,step:o,onChange:e=>d(e.target.value)}),t&&(0,y.jsx)(`small`,{children:t})]})},G=({label:e,hint:t,value:n,onChange:r})=>H()?(0,y.jsx)(z,{selector:{boolean:{}},value:n,label:e,helper:t,onChange:e=>r(!!e)}):(0,y.jsxs)(xe,{children:[(0,y.jsx)(`input`,{type:`checkbox`,checked:n,onChange:e=>r(e.target.checked)}),(0,y.jsxs)(`span`,{children:[e,t&&(0,y.jsx)(`small`,{children:t})]})]}),K=({label:e,hint:t,value:n,onChange:r,options:i})=>H()?(0,y.jsx)(z,{selector:{select:{options:i,mode:`dropdown`}},value:n,label:e,helper:t,required:!0,onChange:e=>typeof e==`string`&&r(e)}):(0,y.jsxs)(M,{children:[(0,y.jsx)(`span`,{className:`label`,children:e}),(0,y.jsx)(`select`,{value:n,onChange:e=>r(e.target.value),children:i.map(e=>(0,y.jsx)(`option`,{value:e.value,children:e.label},e.value))}),t&&(0,y.jsx)(`small`,{children:t})]}),q=({label:e,hint:t,value:n,onChange:r})=>H()?(0,y.jsx)(z,{selector:{icon:{}},value:n,label:e,helper:t,onChange:e=>r(typeof e==`string`?e:``)}):(0,y.jsxs)(M,{children:[(0,y.jsx)(`span`,{className:`label`,children:e}),(0,y.jsxs)(`span`,{className:`with-icon`,children:[(0,y.jsx)(`input`,{type:`text`,value:n,placeholder:`mdi:…`,onChange:e=>r(e.target.value)}),n&&(0,y.jsx)(s,{icon:n,size:`24px`})]}),t&&(0,y.jsx)(`small`,{children:t})]}),Te=({label:e,hint:t,value:n,onChange:r,accept:i})=>{let a=H(),o=(0,v.useMemo)(()=>n.startsWith(`media-source://`)?{media_content_id:n,media_content_type:i[0]}:void 0,[n,i]);return a?(0,y.jsx)(z,{selector:{media:{accept:i}},value:o,label:e,helper:t,onChange:e=>r(e?.media_content_id??``)}):(0,y.jsx)(U,{label:e,hint:t,value:n,onChange:r})},J=(0,v.createContext)([]),Ee=({children:e})=>{let t=ae(d(e=>{let t={};for(let[n,r]of Object.entries(e.entities))t[n]=r.attributes.friendly_name||n;return t})),n=(0,v.useMemo)(()=>Object.entries(t).map(([e,t])=>({id:e,name:t})).sort((e,t)=>e.id.localeCompare(t.id)),[t]);return(0,y.jsx)(J.Provider,{value:n,children:e})},De=(e,t={})=>({entity:{...e?.length?{filter:{domain:e}}:{},...t}}),Oe=({value:e,domains:t,onChange:n})=>{let r=(0,v.useContext)(J),i=(0,v.useId)(),a=(0,v.useMemo)(()=>t?.length?r.filter(e=>t.includes(e.id.split(`.`)[0])):r,[r,t]);return(0,y.jsxs)(y.Fragment,{children:[(0,y.jsx)(`input`,{type:`text`,list:i,value:e,placeholder:t?.length?`${t[0]}.…`:`domain.object_id`,onChange:e=>n(e.target.value.trim())}),(0,y.jsx)(`datalist`,{id:i,children:a.map(e=>(0,y.jsx)(`option`,{value:e.id,children:e.name},e.id))})]})},Y=({label:e,hint:t,value:n,onChange:r,domains:i})=>{let a=H(),o=(0,v.useContext)(J),s=h();if(a)return(0,y.jsx)(z,{selector:De(i),value:n||void 0,label:e,helper:t,onChange:e=>r(typeof e==`string`?e:``)});let c=o.find(e=>e.id===n);return(0,y.jsxs)(M,{children:[(0,y.jsx)(`span`,{className:`label`,children:e}),(0,y.jsx)(Oe,{value:n,domains:i,onChange:r}),n&&(0,y.jsx)(`small`,{children:c?c.name:s(`not_found`)}),t&&(0,y.jsx)(`small`,{children:t})]})},X=({label:e,hint:t,value:n,onChange:r,domains:i,max:a})=>{let o=H(),c=h(),l=e=>r(a===void 0?e:e.slice(0,a));return o?(0,y.jsx)(z,{selector:De(i,{multiple:!0,reorder:!0}),value:n,label:e,helper:t,onChange:e=>l(Array.isArray(e)?e.filter(e=>typeof e==`string`):[])}):(0,y.jsxs)(M,{as:`div`,children:[(0,y.jsx)(`span`,{className:`label`,children:e}),n.map((e,t)=>(0,y.jsxs)(N,{$columns:`minmax(0, 1fr) auto`,children:[(0,y.jsx)(Oe,{value:e,domains:i,onChange:e=>l(n.map((n,r)=>r===t?e:n))}),(0,y.jsx)(Z,{index:t,length:n.length,onMove:e=>l(F(n,t,e)),onRemove:()=>l(n.filter((e,n)=>n!==t))})]},t)),(a===void 0||n.length<a)&&(0,y.jsx)(P,{type:`button`,className:`add`,onClick:()=>l([...n,``]),title:c(`add`),"aria-label":c(`add`),children:(0,y.jsx)(s,{icon:`mdi:plus`})}),t&&(0,y.jsx)(`small`,{children:t})]})},Z=({index:e,length:t,onMove:n,onRemove:r,onDuplicate:i})=>{let a=h();return(0,y.jsxs)(`span`,{className:`list-controls`,children:[(0,y.jsx)(P,{type:`button`,disabled:e===0,onClick:()=>n(e-1),title:a(`move_up`),"aria-label":a(`move_up`),children:(0,y.jsx)(s,{icon:`mdi:arrow-up`})}),(0,y.jsx)(P,{type:`button`,disabled:e===t-1,onClick:()=>n(e+1),title:a(`move_down`),"aria-label":a(`move_down`),children:(0,y.jsx)(s,{icon:`mdi:arrow-down`})}),i&&(0,y.jsx)(P,{type:`button`,onClick:i,title:a(`duplicate`),"aria-label":a(`duplicate`),children:(0,y.jsx)(s,{icon:`mdi:content-copy`})}),(0,y.jsx)(P,{type:`button`,$danger:!0,onClick:r,title:a(`remove`),"aria-label":a(`remove`),children:(0,y.jsx)(s,{icon:`mdi:delete-outline`})})]})},Q=({title:e,lead:t})=>(0,y.jsxs)(y.Fragment,{children:[(0,y.jsx)(`h2`,{children:e}),t&&(0,y.jsx)(`p`,{className:`lead`,children:t})]}),ke=i.span`
  margin-left: 8px;
  padding: 1px 8px;
  border-radius: 999px;
  font-size: 12px;
  font-weight: 400;
  background: var(--secondary-background-color, #282828);
  color: var(--secondary-text-color, #9b9b9b);
`,Ae=({dashboards:e})=>{let t=h(),n=c(),[r,i]=(0,v.useState)(null);(0,v.useEffect)(()=>{n?.sendMessagePromise({type:`better_wall_dashboard/users`}).then(e=>i(e.users)).catch(()=>i([]))},[n]);let a=(0,v.useCallback)(async(e,t)=>{if(!n)return;i(n=>n?.map(n=>n.id===e.id?{...n,...t}:n)??null);let r=await n.sendMessagePromise({type:`better_wall_dashboard/save_user`,user_id:e.id,...t});i(t=>t?.map(t=>t.id===e.id?{...t,...r}:t)??null)},[n]);return(0,y.jsxs)(y.Fragment,{children:[(0,y.jsx)(Q,{title:t(`tab_users`),lead:t(`lead_users`)}),r?.map(n=>(0,y.jsxs)(O,{open:!n.is_admin||void 0,children:[(0,y.jsxs)(`summary`,{children:[(0,y.jsx)(s,{className:`icon`,icon:n.is_admin?`mdi:shield-account-outline`:`mdi:tablet`}),(0,y.jsxs)(`span`,{className:`text`,children:[(0,y.jsxs)(`span`,{children:[n.name,n.is_admin&&(0,y.jsx)(ke,{children:t(`admin`)}),!n.is_active&&(0,y.jsx)(ke,{children:t(`inactive`)})]}),(0,y.jsx)(`span`,{className:`secondary`,children:e.find(e=>e.id===n.dashboard)?.name??n.dashboard})]})]}),(0,y.jsxs)(`div`,{className:`fold-body`,children:[(0,y.jsx)(K,{label:t(`assigned_dashboard`),value:n.dashboard,options:e.map(e=>({value:e.id,label:e.name})),onChange:e=>a(n,{dashboard:e})}),(0,y.jsxs)(N,{children:[(0,y.jsx)(G,{label:t(`kiosk`),hint:t(`kiosk_user_hint`),value:n.kiosk,onChange:e=>a(n,{kiosk:e})}),(0,y.jsx)(G,{label:t(`start_page`),hint:t(`start_page_hint`),value:!!n.default_panel,onChange:e=>a(n,{default_panel:e})})]})]})]},n.id))]})},je=`/better_wall_dashboard/static/icon.png`,Me=i(A)`
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
`,Ne=({open:e,onClose:t})=>{let n=h(),i=c(),a=(0,v.useRef)(null),[o,l]=(0,v.useState)(null),u=r();(0,v.useEffect)(()=>{let t=a.current;t&&(e&&!t.open&&t.showModal(),!e&&t.open&&t.close())}),(0,v.useEffect)(()=>{e&&i?.sendMessagePromise({type:`better_wall_dashboard/version`}).then(l).catch(()=>void 0)},[e,i]);let d=!!(u&&o&&o.app!==u);return(0,y.jsxs)(Me,{ref:a,tabIndex:-1,onClose:()=>e&&t(),onClick:e=>e.target===e.currentTarget&&t(),children:[(0,y.jsxs)(`div`,{className:`head`,children:[(0,y.jsx)(`img`,{src:je,alt:``}),(0,y.jsx)(`h2`,{children:`Better Wall Dashboard`})]}),(0,y.jsx)(`p`,{className:`muted`,children:n(`about_blurb`)}),(0,y.jsx)(`table`,{children:(0,y.jsxs)(`tbody`,{children:[(0,y.jsxs)(`tr`,{children:[(0,y.jsx)(`th`,{children:n(`about_version`)}),(0,y.jsx)(`td`,{children:o?.version??`–`})]}),(0,y.jsxs)(`tr`,{children:[(0,y.jsx)(`th`,{children:n(`about_page`)}),(0,y.jsx)(`td`,{children:u?u.slice(0,12):`–`})]})]})}),d&&(0,y.jsxs)(y.Fragment,{children:[(0,y.jsx)(`p`,{children:n(`update_available`)}),(0,y.jsx)(x,{appearance:`filled`,icon:`mdi:reload`,onClick:()=>{let e=re(),t=null;if(e&&o){let n=new URL(e);n.searchParams.set(`v`,o.app),t=n.toString()}ee(t)},children:n(`reload`)})]}),(o?.documentation||o?.issues)&&(0,y.jsxs)(`p`,{children:[o.documentation&&(0,y.jsx)(`a`,{href:o.documentation,target:`_blank`,rel:`noopener noreferrer`,children:n(`about_repo`)}),o.documentation&&o.issues&&` · `,o.issues&&(0,y.jsx)(`a`,{href:o.issues,target:`_blank`,rel:`noopener noreferrer`,children:n(`about_issues`)})]}),(0,y.jsx)(P,{type:`button`,className:`shut`,"aria-label":n(`close`),title:n(`close`),onClick:t,children:(0,y.jsx)(s,{icon:`mdi:close`})})]})},Pe=({request:e,onAnswer:t})=>{let n=h(),r=(0,v.useRef)(null);return(0,v.useEffect)(()=>{let t=r.current;t&&(e&&!t.open&&t.showModal(),!e&&t.open&&t.close())}),(0,y.jsx)(A,{ref:r,role:`alertdialog`,tabIndex:-1,onCancel:e=>{e.preventDefault(),t(!1)},onClick:e=>e.target===e.currentTarget&&t(!1),children:e&&(0,y.jsxs)(y.Fragment,{children:[(0,y.jsx)(`h2`,{children:e.title}),e.text&&(0,y.jsx)(`p`,{className:`muted`,children:e.text}),(0,y.jsxs)(`div`,{className:`actions`,children:[(0,y.jsx)(x,{appearance:`plain`,onClick:()=>t(!1),children:n(`cancel`)}),(0,y.jsx)(x,{appearance:`accent`,danger:e.danger,onClick:()=>t(!0),children:e.confirm})]})]})})};function Fe(){let[e,t]=(0,v.useState)(null);return{confirm:(0,v.useCallback)(e=>new Promise(n=>t({...e,resolve:n})),[]),dialog:(0,y.jsx)(Pe,{request:e,onAnswer:n=>{e?.resolve(n),t(null)}})}}var Ie=({draft:e,update:t})=>{let n=h(),r=n=>t({...e,background:{...e.background,...n}});return(0,y.jsxs)(y.Fragment,{children:[(0,y.jsx)(Q,{title:n(`tab_general`),lead:n(`lead_general`)}),(0,y.jsx)(E,{children:(0,y.jsx)(U,{label:n(`name`),value:e.name,onChange:n=>t({...e,name:n})})}),(0,y.jsxs)(E,{children:[(0,y.jsx)(`h3`,{children:n(`background`)}),(0,y.jsx)(Te,{label:n(`background_media`),hint:n(`background_media_hint`),accept:[`image/*`],value:e.background.image,onChange:e=>r({image:e})}),(0,y.jsx)(U,{label:n(`background_image`),hint:n(`background_image_hint`),type:`url`,value:e.background.image.startsWith(`media-source://`)?``:e.background.image,onChange:e=>r({image:e})}),(0,y.jsxs)(N,{children:[(0,y.jsx)(we,{label:n(`background_dim`),value:e.background.dim,min:0,max:95,step:5,unit:`%`,scale:100,onChange:e=>r({dim:e})}),(0,y.jsx)(we,{label:n(`background_blur`),value:e.background.blur,min:0,max:40,step:1,unit:`px`,onChange:e=>r({blur:e})})]})]}),(0,y.jsxs)(E,{children:[(0,y.jsx)(`h3`,{children:n(`security_heading`)}),(0,y.jsx)(U,{label:n(`pin`),hint:n(`pin_hint`),type:`password`,value:e.pin??``,onChange:n=>t({...e,pin:n.replace(/\D/g,``).slice(0,8)})})]})]})},Le=({item:e})=>{let t=n(e.entity||void 0),r=h(),i=e.name||t?.attributes.friendly_name||e.entity||r(`not_set`);return(0,y.jsxs)(y.Fragment,{children:[(0,y.jsx)(s,{className:`icon`,icon:e.icon||t?.attributes.icon||l(e.entity)}),(0,y.jsxs)(`span`,{className:`text`,children:[(0,y.jsx)(`span`,{children:i}),e.entity&&(0,y.jsx)(`span`,{className:`secondary`,children:e.entity})]})]})},Re=({items:e,max:t,domains:n,addLabel:r,onChange:i})=>{let a=h(),o=(t,n)=>i(R(e,t,{...e[t],...n}));return(0,y.jsxs)(y.Fragment,{children:[e.length===0&&(0,y.jsxs)(k,{children:[(0,y.jsx)(s,{icon:`mdi:playlist-plus`}),(0,y.jsx)(`span`,{children:a(`empty_list`)})]}),e.map((t,r)=>(0,y.jsxs)(O,{open:!t.entity||void 0,children:[(0,y.jsxs)(`summary`,{children:[(0,y.jsx)(Le,{item:t}),(0,y.jsx)(`span`,{onClick:e=>e.preventDefault(),children:(0,y.jsx)(Z,{index:r,length:e.length,onMove:t=>i(F(e,r,t)),onRemove:()=>i(e.filter((e,t)=>t!==r))})})]}),(0,y.jsxs)(`div`,{className:`fold-body`,children:[(0,y.jsx)(Y,{label:a(`entity`),value:t.entity,domains:n,onChange:e=>o(r,{entity:e})}),(0,y.jsxs)(N,{children:[(0,y.jsx)(U,{label:a(`name`),hint:a(`name_hint`),value:t.name,onChange:e=>o(r,{name:e})}),(0,y.jsx)(q,{label:a(`icon`),value:t.icon,onChange:e=>o(r,{icon:e})})]})]})]},t.id)),(0,y.jsx)(`div`,{children:(0,y.jsxs)(x,{icon:`mdi:plus`,appearance:`filled`,disabled:e.length>=t,onClick:()=>i([...e,{id:I(),entity:``,name:``,icon:``}]),children:[r,` (`,e.length,`/`,t,`)`]})})]})},ze=[`input_boolean`,`switch`,`binary_sensor`],Be=({draft:e,update:t,part:n})=>{let r=h(),i=e.sidebar,o=n=>t({...e,sidebar:n}),s=(e,t)=>o({...i,[e]:{...i[e],...t}}),c=S.find(e=>e.part===n)?.label??`tab_sidebar`,l=(0,y.jsx)(Q,{title:r(c),lead:r(`lead_${n}`)});switch(n){case`status`:return(0,y.jsxs)(y.Fragment,{children:[l,(0,y.jsxs)(E,{children:[(0,y.jsx)(`h3`,{children:r(`status_icons`)}),(0,y.jsx)(`p`,{children:r(`status_icons_hint`)}),(0,y.jsx)(Re,{items:i.status.icons??[],max:a.statusIcons,domains:ze,addLabel:r(`add_status_icon`),onChange:e=>s(`status`,{icons:e})})]}),(0,y.jsxs)(E,{children:[(0,y.jsx)(`h3`,{children:r(`wifi_heading`)}),(0,y.jsx)(Y,{label:r(`wifi_signal`),hint:r(`wifi_signal_hint`),value:i.status.wifi_signal,domains:[`sensor`],onChange:e=>s(`status`,{wifi_signal:e})})]}),(0,y.jsxs)(E,{children:[(0,y.jsx)(`h3`,{children:r(`guest_wifi`)}),(0,y.jsx)(Y,{label:r(`guest_qr_image`),hint:r(`guest_qr_image_hint`),value:i.guest_wifi.qr_image,domains:[`image`],onChange:e=>s(`guest_wifi`,{qr_image:e})}),(0,y.jsxs)(N,{children:[(0,y.jsx)(U,{label:r(`network`),value:i.guest_wifi.ssid,onChange:e=>s(`guest_wifi`,{ssid:e})}),(0,y.jsx)(U,{label:r(`password`),type:`password`,value:i.guest_wifi.password,onChange:e=>s(`guest_wifi`,{password:e})})]}),(0,y.jsxs)(N,{children:[(0,y.jsx)(K,{label:r(`security`),value:i.guest_wifi.security,options:[{value:`WPA`,label:`WPA/WPA2/WPA3`},{value:`WEP`,label:`WEP`},{value:`nopass`,label:r(`open_network`)}],onChange:e=>s(`guest_wifi`,{security:e})}),(0,y.jsx)(G,{label:r(`hidden_network`),value:i.guest_wifi.hidden,onChange:e=>s(`guest_wifi`,{hidden:e})})]})]})]});case`climate`:return(0,y.jsxs)(y.Fragment,{children:[l,(0,y.jsxs)(E,{children:[(0,y.jsx)(Y,{label:r(`temperature`),value:i.climate.temperature,domains:[`sensor`],onChange:e=>s(`climate`,{temperature:e})}),(0,y.jsx)(Y,{label:r(`humidity`),value:i.climate.humidity,domains:[`sensor`],onChange:e=>s(`climate`,{humidity:e})}),(0,y.jsx)(W,{label:r(`hours`),value:i.climate.hours,min:1,max:168,unit:`h`,onChange:e=>s(`climate`,{hours:e})})]})]});case`persons`:return(0,y.jsxs)(y.Fragment,{children:[l,(0,y.jsx)(X,{label:r(`persons`),value:i.persons,domains:[`person`],onChange:e=>o({...i,persons:e})})]});case`openings`:return(0,y.jsxs)(y.Fragment,{children:[l,(0,y.jsx)(X,{label:r(`openings`),hint:r(`openings_hint`),value:i.openings,domains:[`binary_sensor`,`cover`,`lock`,`sensor`],onChange:e=>o({...i,openings:e})})]});case`travel`:return(0,y.jsxs)(y.Fragment,{children:[l,(0,y.jsxs)(E,{children:[(0,y.jsx)(Y,{label:r(`travel_sensor`),value:i.travel.entity,domains:[`sensor`],onChange:e=>s(`travel`,{entity:e})}),(0,y.jsx)(U,{label:r(`name`),hint:r(`travel_name_hint`),value:i.travel.name,onChange:e=>s(`travel`,{name:e})})]}),(0,y.jsxs)(E,{children:[(0,y.jsx)(`h3`,{children:r(`map`)}),(0,y.jsx)(U,{label:r(`maps_api_key`),hint:r(`maps_api_key_hint`),type:`password`,value:i.travel.maps_api_key,onChange:e=>s(`travel`,{maps_api_key:e})}),(0,y.jsx)(U,{label:r(`map_url`),hint:r(`map_url_hint`),type:`url`,value:i.travel.map_url,onChange:e=>s(`travel`,{map_url:e})})]})]});case`quick`:return(0,y.jsxs)(y.Fragment,{children:[l,(0,y.jsx)(Re,{items:i.quick_actions,max:a.quickActions,addLabel:r(`add_quick_action`),onChange:e=>o({...i,quick_actions:e})})]});case`calendar`:return(0,y.jsxs)(y.Fragment,{children:[l,(0,y.jsxs)(E,{children:[(0,y.jsx)(X,{label:r(`calendars`),value:i.calendar.entities,domains:[`calendar`],onChange:e=>s(`calendar`,{entities:e})}),(0,y.jsx)(W,{label:r(`days`),hint:r(`calendar_days_hint`),value:i.calendar.days,min:1,max:a.calendarDays,onChange:e=>s(`calendar`,{days:e})})]})]});case`weather`:return(0,y.jsxs)(y.Fragment,{children:[l,(0,y.jsxs)(E,{children:[(0,y.jsx)(Y,{label:r(`weather_entity`),value:i.weather.entity,domains:[`weather`],onChange:e=>s(`weather`,{entity:e})}),(0,y.jsx)(Y,{label:r(`outdoor_temperature`),hint:r(`outdoor_temperature_hint`),value:i.weather.temperature,domains:[`sensor`],onChange:e=>s(`weather`,{temperature:e})})]})]});case`notifications`:return(0,y.jsxs)(y.Fragment,{children:[l,(0,y.jsxs)(E,{children:[(0,y.jsx)(G,{label:r(`notifications_enabled`),value:i.notifications.enabled,onChange:e=>s(`notifications`,{enabled:e})}),(0,y.jsx)(U,{label:r(`notifications_prefix`),hint:r(`notifications_prefix_hint`),value:i.notifications.prefix,onChange:e=>s(`notifications`,{prefix:e})})]})]});case`system`:return(0,y.jsxs)(y.Fragment,{children:[l,(0,y.jsx)(Re,{items:i.system,max:a.system,domains:[`sensor`],addLabel:r(`add_statistic`),onChange:e=>o({...i,system:e})})]})}},Ve=i.textarea`
  min-height: 55vh;
  padding: 12px;
  border-radius: 8px;
  border: 1px solid var(--divider-color, rgba(225, 225, 225, 0.12));
  background: var(--code-editor-background-color, var(--secondary-background-color, #282828));
  color: inherit;
  font-family: var(--ha-font-family-code, ui-monospace, monospace);
  font-size: 13px;
  resize: vertical;
`,He=i.p`
  margin: 0;
  color: var(--error-color, #db4437);
`,Ue=({draft:e,update:t})=>{let n=h(),[r,i]=(0,v.useState)(()=>JSON.stringify(e,null,2)),[a,o]=(0,v.useState)(!1);return(0,y.jsxs)(y.Fragment,{children:[(0,y.jsx)(Q,{title:n(`tab_json`),lead:n(`json_hint`)}),(0,y.jsx)(Ve,{value:r,spellCheck:!1,onChange:e=>{i(e.target.value),o(!1)}}),a&&(0,y.jsx)(He,{children:n(`json_invalid`)}),(0,y.jsx)(`div`,{children:(0,y.jsx)(x,{icon:`mdi:check`,appearance:`filled`,onClick:()=>{try{t({...JSON.parse(r),id:e.id})}catch{o(!0)}},children:n(`apply`)})})]})},We=({value:e,onChange:t})=>{let[n,r]=(0,v.useState)(()=>Object.keys(e).length?JSON.stringify(e):``),[i,a]=(0,v.useState)(!1),o=h();return(0,y.jsxs)(M,{children:[(0,y.jsx)(`span`,{className:`label`,children:o(`options_json`)}),(0,y.jsx)(`input`,{type:`text`,value:n,placeholder:`{"hours": 24, "color": "#03a9f4"}`,onChange:e=>{r(e.target.value);try{let n=e.target.value.trim()?JSON.parse(e.target.value):{};if(n&&typeof n==`object`&&!Array.isArray(n)){a(!1),t(n);return}}catch{}a(!0)}}),i&&(0,y.jsx)(`small`,{children:o(`json_invalid`)})]})},Ge=({tile:e})=>{let t=h(),r=n(e.entity||void 0),i=o[e.type],a=e.name||r?.attributes.friendly_name||e.entity||(i?t(i.label):e.type);return(0,y.jsxs)(y.Fragment,{children:[(0,y.jsx)(s,{className:`icon`,icon:e.icon||i?.icon||`mdi:square-rounded-outline`}),(0,y.jsxs)(`span`,{className:`text`,children:[(0,y.jsx)(`span`,{children:a}),(0,y.jsxs)(`span`,{className:`secondary`,children:[i?t(i.label):e.type,` · `,e.w,` × `,e.h]})]})]})},Ke=({tiles:e,columns:t,rows:n,onChange:r})=>{let i=h(),c=(t,n)=>r(R(e,t,{...e[t],...n}));return(0,y.jsxs)(y.Fragment,{children:[e.length===0&&(0,y.jsxs)(k,{children:[(0,y.jsx)(s,{icon:`mdi:view-grid-plus-outline`}),(0,y.jsx)(`span`,{children:i(`empty_tiles`)})]}),e.map((a,s)=>{let l=o[a.type];return(0,y.jsxs)(O,{open:!a.entity&&l?.needsEntity!==!1||void 0,children:[(0,y.jsxs)(`summary`,{children:[(0,y.jsx)(Ge,{tile:a}),(0,y.jsx)(`span`,{onClick:e=>e.preventDefault(),children:(0,y.jsx)(Z,{index:s,length:e.length,onMove:t=>r(F(e,s,t)),onRemove:()=>r(e.filter((e,t)=>t!==s)),onDuplicate:()=>r([...e.slice(0,s+1),{...a,id:I()},...e.slice(s+1)])})})]}),(0,y.jsxs)(`div`,{className:`fold-body`,children:[(0,y.jsx)(K,{label:i(`type`),value:a.type,options:[...ie.map(e=>({value:e.type,label:i(e.label)})),...l?[]:[{value:a.type,label:a.type}]],onChange:e=>{let r=o[e]?.size??[1,1];c(s,{type:e,w:Math.min(r[0],t),h:Math.min(r[1],n)})}}),l?.needsEntity!==!1&&(0,y.jsx)(Y,{label:i(`entity`),value:a.entity,domains:l?.domains,onChange:e=>c(s,{entity:e})}),(0,y.jsxs)(N,{children:[(0,y.jsx)(U,{label:i(`name`),hint:i(`name_hint`),value:a.name,onChange:e=>c(s,{name:e})}),(0,y.jsx)(q,{label:i(`icon`),value:a.icon,onChange:e=>c(s,{icon:e})})]}),(0,y.jsxs)(N,{children:[(0,y.jsx)(W,{label:i(`width`),value:a.w,min:1,max:t,onChange:e=>c(s,{w:Math.max(1,Math.min(t,e))})}),(0,y.jsx)(W,{label:i(`height`),value:a.h,min:1,max:n,onChange:e=>c(s,{h:Math.max(1,Math.min(n,e))})})]}),a.type===`sensor`&&(0,y.jsx)(We,{value:a.options,onChange:e=>c(s,{options:e})})]})]},a.id)}),(0,y.jsx)(`div`,{children:(0,y.jsx)(x,{icon:`mdi:plus`,appearance:`filled`,disabled:e.length>=a.tiles,onClick:()=>r([...e,{id:I(),type:`entity`,entity:``,name:``,icon:``,w:1,h:1,options:{}}]),children:i(`add_tile`)})})]})},qe=()=>({id:I(),name:``,icon:``,status:[],columns:2,rows:2,square:!0,tiles:[]}),Je=()=>({id:I(),columns:[75,25],rows:[50,50],sections:[]}),Ye=e=>({...L(e),id:I(),sections:e.sections.map(e=>({...L(e),id:I(),tiles:e.tiles.map(e=>({...e,id:I()}))}))}),Xe=e=>{let t=e.split(/[,/ ]+/).filter(Boolean).map(Number);return t.length&&t.length<=3&&t.every(e=>Number.isFinite(e)&&e>0)?t:null},Ze=({label:e,hint:t,value:n,onChange:r})=>(0,y.jsx)(U,{label:e,hint:t,value:n.join(`, `),onChange:e=>{let t=Xe(e);t&&r(t)}}),Qe=({draft:e,update:t,open:n})=>{let r=h(),i=e.pages,o=n=>t({...e,pages:n});return(0,y.jsxs)(y.Fragment,{children:[(0,y.jsx)(Q,{title:r(`tab_pages`),lead:r(`lead_pages`)}),(0,y.jsx)(D,{children:i.map((e,t)=>(0,y.jsxs)(`li`,{children:[(0,y.jsxs)(`button`,{type:`button`,className:`open`,onClick:()=>n({kind:`page`,page:t}),children:[(0,y.jsx)(s,{className:`icon`,icon:`mdi:book-open-page-variant-outline`}),(0,y.jsxs)(`span`,{className:`text`,children:[(0,y.jsx)(`span`,{children:r(`page_n`,{n:t+1})}),(0,y.jsx)(`span`,{className:`secondary`,children:e.sections.map(e=>e.name).filter(Boolean).join(` · `)||r(`no_sections`)})]})]}),(0,y.jsx)(Z,{index:t,length:i.length,onMove:e=>o(F(i,t,e)),onDuplicate:i.length<a.pages?()=>o([...i.slice(0,t+1),Ye(e),...i.slice(t+1)]):void 0,onRemove:()=>i.length>1&&o(i.filter((e,n)=>n!==t))})]},e.id))}),(0,y.jsx)(`div`,{children:(0,y.jsx)(x,{icon:`mdi:plus`,appearance:`filled`,disabled:i.length>=a.pages,onClick:()=>{o([...i,Je()]),n({kind:`page`,page:i.length})},children:r(`add_page`)})})]})},$e=({draft:e,update:t,open:n,page:r})=>{let i=h(),a=e.pages[r],o=n=>t({...e,pages:R(e.pages,r,{...a,...n})}),c=a.columns.length*a.rows.length;return(0,y.jsxs)(y.Fragment,{children:[(0,y.jsx)(Q,{title:i(`page_n`,{n:r+1}),lead:i(`lead_page`)}),(0,y.jsxs)(E,{children:[(0,y.jsx)(`h3`,{children:i(`layout`)}),(0,y.jsxs)(N,{children:[(0,y.jsx)(Ze,{label:i(`column_split`),hint:i(`split_hint`),value:a.columns,onChange:e=>o({columns:e})}),(0,y.jsx)(Ze,{label:i(`row_split`),hint:i(`split_hint`),value:a.rows,onChange:e=>o({rows:e})})]})]}),(0,y.jsxs)(E,{children:[(0,y.jsx)(`h3`,{children:i(`sections`)}),(0,y.jsx)(`p`,{children:i(`sections_hint`,{cells:c})}),(0,y.jsx)(D,{children:Array.from({length:c},(e,t)=>{let c=a.sections[t];return c?(0,y.jsxs)(`li`,{children:[(0,y.jsxs)(`button`,{type:`button`,className:`open`,onClick:()=>n({kind:`section`,page:r,section:t}),children:[(0,y.jsx)(s,{className:`icon`,icon:c.icon||`mdi:view-grid-outline`}),(0,y.jsxs)(`span`,{className:`text`,children:[(0,y.jsx)(`span`,{children:c.name||i(`section_n`,{n:t+1})}),(0,y.jsxs)(`span`,{className:`secondary`,children:[i(`tiles_count`,{count:c.tiles.length}),` · `,c.columns,` × `,c.rows]})]})]}),(0,y.jsx)(Z,{index:t,length:a.sections.length,onMove:e=>o({sections:F(a.sections,t,e)}),onRemove:()=>o({sections:a.sections.filter((e,n)=>n!==t)})})]},c.id):(0,y.jsx)(`li`,{children:(0,y.jsxs)(`button`,{type:`button`,className:`open`,onClick:()=>{let e=[...a.sections];for(;e.length<=t;)e.push(qe());o({sections:e}),n({kind:`section`,page:r,section:t})},children:[(0,y.jsx)(s,{className:`icon`,icon:`mdi:plus-box-outline`}),(0,y.jsxs)(`span`,{className:`text`,children:[(0,y.jsx)(`span`,{children:i(`add_section`)}),(0,y.jsx)(`span`,{className:`secondary`,children:i(`cell_n`,{n:t+1})})]})]})},`empty-${t}`)})})]})]})},et=({draft:e,update:t,page:n,section:r})=>{let i=h(),o=e.pages[n],s=o.sections[r],c=i=>t({...e,pages:R(e.pages,n,{...o,sections:R(o.sections,r,{...s,...i})})});return(0,y.jsxs)(y.Fragment,{children:[(0,y.jsx)(Q,{title:s.name||i(`section_n`,{n:r+1}),lead:i(`lead_section`)}),(0,y.jsxs)(E,{children:[(0,y.jsx)(`h3`,{children:i(`section_header`)}),(0,y.jsxs)(N,{children:[(0,y.jsx)(U,{label:i(`name`),value:s.name,onChange:e=>c({name:e})}),(0,y.jsx)(q,{label:i(`icon`),value:s.icon,onChange:e=>c({icon:e})})]}),(0,y.jsx)(X,{label:i(`status_entities`),value:s.status,max:2,domains:[`sensor`,`binary_sensor`],onChange:e=>c({status:e})})]}),(0,y.jsxs)(E,{children:[(0,y.jsx)(`h3`,{children:i(`grid`)}),(0,y.jsxs)(N,{children:[(0,y.jsx)(W,{label:i(`columns`),value:s.columns,min:1,max:a.sectionCells,onChange:e=>c({columns:e})}),(0,y.jsx)(W,{label:i(`rows`),value:s.rows,min:1,max:a.sectionCells,onChange:e=>c({rows:e})})]}),(0,y.jsx)(G,{label:i(`square_cells`),hint:i(`square_cells_hint`),value:s.square,onChange:e=>c({square:e})})]}),(0,y.jsxs)(E,{children:[(0,y.jsx)(`h3`,{children:i(`tiles`)}),(0,y.jsx)(Ke,{tiles:s.tiles,columns:s.columns,rows:s.rows,onChange:e=>c({tiles:e})})]})]})},tt=({draft:e,update:t,open:n})=>{let r=h(),i=e.buttons,o=n=>t({...e,buttons:n});return(0,y.jsxs)(y.Fragment,{children:[(0,y.jsx)(Q,{title:r(`tab_buttons`),lead:r(`lead_buttons`)}),i.length>0&&(0,y.jsx)(D,{children:i.map((e,t)=>(0,y.jsxs)(`li`,{children:[(0,y.jsxs)(`button`,{type:`button`,className:`open`,onClick:()=>n({kind:`button`,button:t}),children:[(0,y.jsx)(s,{className:`icon`,icon:e.icon||`mdi:gesture-tap`}),(0,y.jsxs)(`span`,{className:`text`,children:[(0,y.jsx)(`span`,{children:e.name||r(`button_n`,{n:t+1})}),(0,y.jsx)(`span`,{className:`secondary`,children:r(`tiles_count`,{count:e.tiles.length})})]})]}),(0,y.jsx)(Z,{index:t,length:i.length,onMove:e=>o(F(i,t,e)),onRemove:()=>o(i.filter((e,n)=>n!==t))})]},e.id))}),(0,y.jsx)(`div`,{children:(0,y.jsxs)(x,{icon:`mdi:plus`,appearance:`filled`,disabled:i.length>=a.buttons,onClick:()=>{o([...i,{id:I(),name:``,icon:`mdi:gesture-tap`,columns:4,tiles:[]}]),n({kind:`button`,button:i.length})},children:[r(`add_button`),` (`,i.length,`/`,a.buttons,`)`]})})]})},nt=({draft:e,update:t,button:n})=>{let r=h(),i=e.buttons[n],o=r=>t({...e,buttons:R(e.buttons,n,{...i,...r})});return(0,y.jsxs)(y.Fragment,{children:[(0,y.jsx)(Q,{title:i.name||r(`button_n`,{n:n+1}),lead:r(`lead_button`)}),(0,y.jsxs)(E,{children:[(0,y.jsxs)(N,{children:[(0,y.jsx)(U,{label:r(`name`),value:i.name,onChange:e=>o({name:e})}),(0,y.jsx)(q,{label:r(`icon`),value:i.icon,onChange:e=>o({icon:e})})]}),(0,y.jsx)(W,{label:r(`columns`),hint:r(`button_columns_hint`),value:i.columns,min:1,max:a.sectionCells,onChange:e=>o({columns:e})})]}),(0,y.jsxs)(E,{children:[(0,y.jsx)(`h3`,{children:r(`tiles`)}),(0,y.jsx)(Ke,{tiles:i.tiles,columns:i.columns,rows:a.sectionCells,onChange:e=>o({tiles:e})})]})]})},$=[{id:`tab-10`,label:`10″ tablet · 1280×800`,width:1280,height:800},{id:`tab-11`,label:`11″ tablet · 1194×834`,width:1194,height:834},{id:`tab-12`,label:`12″ tablet · 1366×1024`,width:1366,height:1024},{id:`fhd`,label:`Full HD · 1920×1080`,width:1920,height:1080},{id:`small`,label:`7″ panel · 1024×600`,width:1024,height:600}],rt=({view:e,dashboards:t,...n})=>{switch(e.kind){case`general`:return(0,y.jsx)(Ie,{...n});case`sidebar`:return(0,y.jsx)(Be,{...n,part:e.part});case`pages`:return(0,y.jsx)(Qe,{...n});case`page`:return(0,y.jsx)($e,{...n,page:e.page});case`section`:return(0,y.jsx)(et,{...n,page:e.page,section:e.section});case`buttons`:return(0,y.jsx)(tt,{...n});case`button`:return(0,y.jsx)(nt,{...n,button:e.button});case`users`:return(0,y.jsx)(Ae,{dashboards:t});case`json`:return(0,y.jsx)(Ue,{...n},n.draft.id)}},it=()=>{let e=h(),t=c(),{narrow:n}=ne(),[r,i]=(0,v.useState)(null),[a,o]=(0,v.useState)(null),[l,u]=(0,v.useState)(!1),[d,p]=(0,v.useState)(``),[ee,te]=(0,v.useState)({kind:`general`}),[re,m]=(0,v.useState)(()=>new Set),[ie,g]=(0,v.useState)(!1),[ae,_]=(0,v.useState)(!1),[oe,b]=(0,v.useState)(!1),[S,C]=(0,v.useState)(!1),[T,me]=(0,v.useState)($[0].id),[E,D]=(0,v.useState)(!1),O=$.find(e=>e.id===T)??$[0],k=(0,v.useCallback)((e,t)=>{o(L(e.dashboards[t]??e.dashboards.default)),u(!1)},[]);(0,v.useEffect)(()=>{t?.sendMessagePromise({type:`better_wall_dashboard/document`}).then(e=>{i(e),k(e,`default`)}).catch(e=>p(String(e?.message??e)))},[t,k]),(0,v.useEffect)(()=>{if(!l)return;let e=e=>e.preventDefault();return window.addEventListener(`beforeunload`,e),()=>window.removeEventListener(`beforeunload`,e)},[l]);let A=(0,v.useCallback)(e=>{o(e),u(!0),p(``)},[]),j=(0,v.useCallback)((e,t)=>{te(e),m(n=>new Set([...n,...ce(e),...t?[t]:[]])),g(!1),_(!1),C(!1)},[]),ye=(0,v.useCallback)(e=>{m(t=>{let n=new Set(t);return n.delete(e)||n.add(e),n})},[]),{confirm:M,dialog:xe}=Fe(),N=async()=>!l||M({title:e(`discard_title`),text:e(`discard_text`),confirm:e(`discard`),danger:!0}),P=async()=>{if(t&&a){p(e(`saving`));try{let n=await t.sendMessagePromise({type:`better_wall_dashboard/save_dashboard`,dashboard:a});i(e=>e&&{...e,dashboards:{...e.dashboards,[n.dashboard.id]:n.dashboard}}),o(L(n.dashboard)),u(!1),p(e(`saved`))}catch(e){p(String(e?.message??e))}}},F=async()=>{r&&a&&await N()&&(r.dashboards[a.id]?k(r,a.id):k(r,`default`),p(``))},R=async e=>{r&&await N()&&(k(r,e),j({kind:`general`}))},z=async t=>{if(_(!1),!r||!await N())return;let n=L(t??r.dashboards.default);o({...n,id:I(),name:t?`${t.name} (2)`:e(`new_dashboard`)}),u(!0),j({kind:`general`})},Se=async()=>{if(_(!1),!t||!a||!r||a.id==="default"||!await M({title:e(`delete_title`,{name:a.name}),text:e(`confirm_delete`,{name:a.name}),confirm:e(`delete`),danger:!0}))return;r.dashboards[a.id]&&await t.sendMessagePromise({type:`better_wall_dashboard/delete_dashboard`,dashboard_id:a.id});let n={...r.dashboards};delete n[a.id];let o={...r,dashboards:n};i(o),k(o,`default`),j({kind:`general`})},B=(0,v.useMemo)(()=>{let e=Object.values(r?.dashboards??{}).map(e=>({id:e.id,name:e.name}));return a&&!e.some(e=>e.id===a.id)&&e.push({id:a.id,name:a.name}),e.map(e=>e.id===a?.id?{...e,name:a.name}:e)},[r,a]);if(!a)return(0,y.jsxs)(ue,{children:[(0,y.jsx)(de,{"data-narrow":n,children:(0,y.jsx)(`span`,{className:`app-title`,children:e(`editor_title`)})}),(0,y.jsx)(`p`,{style:{padding:24},children:d||e(`loading`)})]});let V=se(ee,a),Ce=le(V,{label:t=>e(t),page:t=>e(`page_n`,{n:t+1}),section:(t,n)=>a.pages[t]?.sections[n]?.name||e(`section_n`,{n:n+1}),button:t=>a.buttons[t]?.name||e(`button_n`,{n:t+1})}),H=V.kind===`page`||V.kind===`section`?V.page:void 0,U=V.kind!==`users`;return(0,y.jsx)(Ee,{children:(0,y.jsxs)(ue,{children:[(0,y.jsxs)(de,{"data-narrow":n,children:[(0,y.jsx)(w,{type:`button`,className:`only-narrow`,"aria-label":e(`menu`),onClick:e=>f(e.currentTarget),children:(0,y.jsx)(s,{icon:`mdi:menu`})}),(0,y.jsx)(w,{type:`button`,className:`only-drawer`,"aria-label":e(`editor_menu`),onClick:()=>g(!0),children:(0,y.jsx)(s,{icon:`mdi:format-list-bulleted`})}),(0,y.jsxs)(`div`,{className:`titles`,children:[(0,y.jsx)(`span`,{className:`app-title`,children:e(`editor_title`)}),(0,y.jsxs)(`nav`,{"aria-label":e(`editor_menu`),children:[(0,y.jsx)(`button`,{type:`button`,onClick:()=>j({kind:`general`}),children:a.name}),Ce.map((e,t)=>(0,y.jsxs)(`span`,{children:[`› `,e.view?(0,y.jsx)(`button`,{type:`button`,onClick:()=>j(e.view),children:e.label}):e.label]},t))]})]}),(0,y.jsx)(`span`,{className:`spacer`}),(0,y.jsx)(w,{type:`button`,className:`only-no-preview`,"aria-pressed":S,"aria-label":e(`preview`),title:e(`preview`),onClick:()=>C(e=>!e),children:(0,y.jsx)(s,{icon:S?`mdi:form-select`:`mdi:tablet-dashboard`})}),(0,y.jsxs)(fe,{children:[(0,y.jsx)(w,{type:`button`,"aria-label":e(`more`),"aria-expanded":ae,onClick:()=>_(e=>!e),children:(0,y.jsx)(s,{icon:`mdi:dots-vertical`})}),ae&&(0,y.jsxs)(`div`,{className:`menu`,role:`menu`,children:[(0,y.jsxs)(`button`,{type:`button`,role:`menuitem`,onClick:()=>void z(),children:[(0,y.jsx)(s,{icon:`mdi:plus`}),` `,e(`new_dashboard`)]}),(0,y.jsxs)(`button`,{type:`button`,role:`menuitem`,onClick:()=>void z(a),children:[(0,y.jsx)(s,{icon:`mdi:content-copy`}),` `,e(`duplicate`)]}),(0,y.jsxs)(`button`,{type:`button`,role:`menuitem`,onClick:()=>j({kind:`json`}),children:[(0,y.jsx)(s,{icon:`mdi:code-json`}),` `,e(`edit_json`)]}),(0,y.jsxs)(`button`,{type:`button`,role:`menuitem`,className:`danger`,disabled:a.id==="default",onClick:()=>void Se(),children:[(0,y.jsx)(s,{icon:`mdi:delete-outline`}),` `,e(`delete_dashboard`)]}),(0,y.jsx)(`hr`,{}),(0,y.jsxs)(`button`,{type:`button`,role:`menuitem`,onClick:()=>{_(!1),b(!0)},children:[(0,y.jsx)(s,{icon:`mdi:information-outline`}),` `,e(`about`)]})]})]})]}),(0,y.jsxs)(pe,{children:[(0,y.jsx)(he,{$open:ie,onClick:()=>g(!1)}),(0,y.jsx)(ve,{dashboards:B,draft:a,view:V,expanded:re,open:ie,onToggle:ye,onOpen:j,onSwitch:e=>void R(e),onNewDashboard:()=>void z()}),(0,y.jsxs)(ge,{$hidden:S,children:[(0,y.jsx)(`div`,{className:`screen-body`,children:(0,y.jsx)(rt,{view:V,dashboards:B,draft:a,update:A,open:j})}),U&&(0,y.jsxs)(`div`,{className:`screen-foot`,children:[(0,y.jsx)(`span`,{className:`status`,children:l?e(`unsaved`):d}),(0,y.jsxs)(`span`,{className:`end`,children:[(0,y.jsx)(x,{appearance:`plain`,disabled:!l,onClick:()=>void F(),children:e(`discard`)}),(0,y.jsx)(x,{appearance:`accent`,icon:`mdi:content-save-outline`,disabled:!l,onClick:P,children:e(`save`)})]})]})]}),(0,y.jsxs)(_e,{$shown:S,children:[(0,y.jsxs)(`div`,{className:`preview-bar`,children:[(0,y.jsx)(`h2`,{children:e(`preview`)}),(0,y.jsx)(K,{label:e(`device`),value:T,options:$.map(e=>({value:e.id,label:e.label})),onChange:me}),(0,y.jsx)(w,{type:`button`,style:{color:`var(--secondary-text-color)`},"aria-label":e(E?`landscape`:`portrait`),title:e(E?`landscape`:`portrait`),onClick:()=>D(e=>!e),children:(0,y.jsx)(s,{icon:E?`mdi:phone-rotate-landscape`:`mdi:phone-rotate-portrait`})})]}),(0,y.jsx)(`div`,{className:`stage`,children:(0,y.jsx)(be,{dashboard:a,device:O,portrait:E,page:H})})]})]}),(0,y.jsx)(Ne,{open:oe,onClose:()=>b(!1)}),xe]})})};export{it as default};