import{A as e,B as t,C as n,D as r,E as i,F as a,G as o,H as s,I as c,L as l,M as u,N as d,O as ee,P as f,R as p,S as te,T as m,U as ne,V as h,W as re,_ as g,a as ie,b as ae,c as _,d as v,f as y,g as oe,h as b,i as se,j as ce,k as x,l as S,m as le,n as C,o as ue,p as de,r as fe,s as w,t as T,u as pe,v as me,w as he,x as ge,y as _e,z as E}from"./boot-DxwjEcB7.js";var D=o(re(),1),O=o(ne(),1),ve=h.button`
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
  ${({$appearance:e,$danger:n})=>{let r=n?`var(--error-color, #db4437)`:`var(--primary-color, #03a9f4)`;return e===`accent`?t`
        background: ${r};
        color: var(--text-primary-color, #fff);
      `:e===`filled`?t`
        background: color-mix(in srgb, ${r} 16%, transparent);
        color: ${r};
      `:t`
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
`,ye=()=>()=>{},k=({children:e,onClick:t,icon:n,appearance:r=`plain`,danger:i=!1,disabled:a,title:o})=>{let s=(0,D.useSyncExternalStore)(ye,()=>!!customElements.get(`ha-button`)),c=(0,O.jsxs)(O.Fragment,{children:[n&&(0,O.jsx)(`span`,{slot:`start`,style:{display:`inline-flex`},children:(0,O.jsx)(x,{icon:n,size:`18px`})}),e]});return s?(0,D.createElement)(`ha-button`,{appearance:r,variant:i?`danger`:`brand`,disabled:a||void 0,"data-tip":o,onClick:t},c):(0,O.jsx)(ve,{type:`button`,$appearance:r,$danger:i,disabled:a,"data-tip":o,onClick:t,children:c})},A=[{part:`clock`,icon:`mdi:clock-outline`,label:`clock`},{part:`status`,icon:`mdi:wifi-star`,label:`nav_status`},{part:`climate`,icon:`mdi:home-thermometer-outline`,label:`room_climate`},{part:`persons`,icon:`mdi:account-multiple-outline`,label:`persons`},{part:`openings`,icon:`mdi:window-open-variant`,label:`openings`},{part:`batteries`,icon:`mdi:battery-high`,label:`batteries`},{part:`travel`,icon:`mdi:car-clock`,label:`travel_time`},{part:`quick`,icon:`mdi:gesture-tap-button`,label:`quick_actions`},{part:`calendar`,icon:`mdi:calendar-month-outline`,label:`calendar`},{part:`weather`,icon:`mdi:weather-partly-cloudy`,label:`weather`},{part:`notifications`,icon:`mdi:bell-outline`,label:`notifications`},{part:`system`,icon:`mdi:chart-box-outline`,label:`system_stats`}];function be(e,t){switch(e.kind){case`page`:return e.page<t.pages.length?e:{kind:`pages`};case`section`:{let n=t.pages[e.page];return n?e.section<n.sections.length?e:{kind:`page`,page:e.page}:{kind:`pages`}}case`button`:return e.button<t.buttons.length?e:{kind:`buttons`};default:return e}}function xe(e){switch(e.kind){case`sidebar`:return[`sidebar`];case`page`:return[`pages`];case`section`:return[`pages`,`page-${e.page}`];case`button`:return[`buttons`];default:return[]}}function j(e,t){return JSON.stringify(e)===JSON.stringify(t)}function Se(e,t){switch(e.kind){case`general`:return[{label:t.label(`tab_general`)}];case`sidebar`:{let n=A.find(t=>t.part===e.part);return[{label:t.label(`tab_sidebar`)},{label:t.label(n?.label??e.part)}]}case`pages`:return[{label:t.label(`tab_pages`)}];case`page`:return[{label:t.label(`tab_pages`),view:{kind:`pages`}},{label:t.page(e.page)}];case`section`:return[{label:t.label(`tab_pages`),view:{kind:`pages`}},{label:t.page(e.page),view:{kind:`page`,page:e.page}},{label:t.section(e.page,e.section)}];case`buttons`:return[{label:t.label(`tab_buttons`)}];case`button`:return[{label:t.label(`tab_buttons`),view:{kind:`buttons`}},{label:t.button(e.button)}];case`users`:return[{label:t.label(`tab_users`)}];case`json`:return[{label:t.label(`tab_json`)}]}}var Ce=h.div`
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
`,we=h.header`
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
`,M=h.button`
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
`,Te=h.div`
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
`,Ee=h.div`
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
`,De=h.div`
  background: var(--card-background-color, #1c1c1c);
  border-radius: var(--ha-card-border-radius, 12px);
  box-shadow: var(--ha-card-box-shadow, none);
  border: 1px solid var(--ha-card-border-color, var(--divider-color, rgba(225, 225, 225, 0.12)));
  box-sizing: border-box;
  min-width: 0;
  min-height: 0;
`,Oe=h(De)`
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
`,ke=h.div`
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
`,Ae=h(De)`
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
`,N=h.section`
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
`,je=h.ul`
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
`,Me=h.details`
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
`,Ne=h.div`
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
`,Pe=h(De)`
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
`,Fe=h.dialog`
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
`,Ie=({dashboards:e,draft:t,view:n,expanded:r,open:i,onToggle:a,onOpen:o,onSwitch:s,onNewDashboard:c})=>{let l=E(),u=(e,t,r)=>(0,O.jsx)(`li`,{children:(0,O.jsxs)(`button`,{type:`button`,"aria-current":j(n,e)?`page`:void 0,onClick:()=>o(e),children:[(0,O.jsx)(x,{className:`icon`,icon:r}),(0,O.jsx)(`span`,{className:`grow`,children:t})]})},JSON.stringify(e)),d=(e,t,i,s,c)=>{let l=r.has(e);return(0,O.jsxs)(`li`,{children:[(0,O.jsxs)(`button`,{type:`button`,"aria-expanded":l,"aria-current":j(n,t)?`page`:void 0,onClick:()=>o(t,e),children:[(0,O.jsx)(x,{className:`icon`,icon:s}),(0,O.jsx)(`span`,{className:`grow`,children:i}),(0,O.jsx)(`span`,{className:`twist`,"data-open":l,role:`button`,"aria-label":i,onClick:t=>{t.stopPropagation(),a(e)},children:(0,O.jsx)(x,{icon:`mdi:chevron-right`})})]}),l&&(0,O.jsx)(`ul`,{className:`sub`,children:c})]},e)},ee=(0,O.jsxs)(O.Fragment,{children:[u({kind:`general`},l(`tab_general`),`mdi:cog-outline`),d(`sidebar`,{kind:`sidebar`,part:A[0].part},l(`tab_sidebar`),`mdi:dock-left`,A.map(e=>u({kind:`sidebar`,part:e.part},l(e.label),e.icon))),d(`pages`,{kind:`pages`},l(`tab_pages`),`mdi:book-open-page-variant-outline`,t.pages.map((e,t)=>e.sections.length?d(`page-${t}`,{kind:`page`,page:t},l(`page_n`,{n:t+1}),`mdi:file-outline`,e.sections.map((e,n)=>u({kind:`section`,page:t,section:n},e.name||l(`section_n`,{n:n+1}),e.icon||`mdi:view-grid-outline`))):u({kind:`page`,page:t},l(`page_n`,{n:t+1}),`mdi:file-outline`))),d(`buttons`,{kind:`buttons`},l(`tab_buttons`),`mdi:gesture-tap-button`,t.buttons.map((e,t)=>u({kind:`button`,button:t},e.name||l(`button_n`,{n:t+1}),e.icon||`mdi:gesture-tap`)))]});return(0,O.jsxs)(Oe,{$open:i,as:`nav`,"aria-label":l(`editor_title`),children:[(0,O.jsx)(`div`,{className:`heading`,children:l(`nav_dashboards`)}),(0,O.jsxs)(`ul`,{children:[e.map(e=>e.id===t.id?(0,O.jsxs)(`li`,{children:[(0,O.jsxs)(`button`,{type:`button`,"aria-expanded":!0,onClick:()=>o({kind:`general`}),children:[(0,O.jsx)(x,{className:`icon`,icon:`mdi:tablet-dashboard`}),(0,O.jsx)(`span`,{className:`grow`,children:(0,O.jsx)(`strong`,{children:t.name})})]}),(0,O.jsx)(`ul`,{className:`sub`,children:ee})]},e.id):(0,O.jsx)(`li`,{children:(0,O.jsxs)(`button`,{type:`button`,onClick:()=>s(e.id),children:[(0,O.jsx)(x,{className:`icon`,icon:`mdi:tablet-dashboard`}),(0,O.jsx)(`span`,{className:`grow`,children:e.name})]})},e.id)),(0,O.jsx)(`li`,{className:`add`,children:(0,O.jsxs)(`button`,{type:`button`,onClick:c,children:[(0,O.jsx)(x,{className:`icon`,icon:`mdi:plus`}),(0,O.jsx)(`span`,{className:`grow`,children:l(`new_dashboard`)})]})})]}),(0,O.jsx)(`div`,{className:`heading`,children:l(`nav_house`)}),(0,O.jsx)(`ul`,{children:u({kind:`users`},l(`tab_users`),`mdi:account-multiple-outline`)})]})},Le=h.div`
  position: relative;
  width: 100%;
  height: 100%;
  min-height: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
`,Re=h.div`
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
  will-change: transform;
`,ze=(0,D.memo)(({dashboard:t,device:n,portrait:r,page:i})=>{let a=E(),o=(0,D.useRef)(null),s=(0,D.useRef)(null),[c,l]=(0,D.useState)(null),u=r?n.height:n.width,d=r?n.width:n.height,ee=c?Math.min((c.width-40)/u,(c.height-40)/d):.5,f=Math.max(.1,Math.min(1,Math.floor(ee*1e3)/1e3));(0,D.useLayoutEffect)(()=>{let e=o.current;if(!e)return;let t=()=>l({width:e.clientWidth,height:e.clientHeight});t();let n=new ResizeObserver(t);return n.observe(e),()=>n.disconnect()},[]);let p=(0,D.useRef)(null);(0,D.useLayoutEffect)(()=>{let e=s.current,t=p.current;if(p.current={width:u,height:d,scale:f,portrait:r},!e||!t||!c)return;let n=`translate(-50%, -50%) scale(${f})`;if(t.portrait!==r){let i=Math.min(t.scale,f)*.92;e.animate([{transform:`translate(-50%, -50%) scale(${t.scale}) rotate(${r?90:-90}deg)`},{transform:`translate(-50%, -50%) scale(${i}) rotate(${r?45:-45}deg)`,offset:.5},{transform:n}],{duration:750,easing:`cubic-bezier(0.45, 0, 0.25, 1)`})}else(t.width!==u||t.height!==d)&&e.animate([{width:`${t.width}px`,height:`${t.height}px`,transform:`translate(-50%, -50%) scale(${t.scale})`},{width:`${u}px`,height:`${d}px`,transform:n}],{duration:450,easing:`cubic-bezier(0.3, 0, 0.2, 1)`})},[u,d,f,r,c]);let te=(0,D.useMemo)(()=>({dashboard:t,dashboards:[],kiosk:!1,is_admin:!0,pin_required:!1}),[t]);return(0,O.jsx)(Le,{ref:o,"aria-label":a(`preview`),children:(0,O.jsx)(Re,{ref:s,style:{width:u,height:d,transform:`translate(-50%, -50%) scale(${f})`},children:(0,O.jsx)(e,{view:te,focusPage:i,children:(0,O.jsx)(fe,{})})})})}),P=h.label`
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
`,Be=h.label`
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
`,F=h.div`
  display: grid;
  grid-template-columns: ${({$columns:e})=>e??`repeat(auto-fit, minmax(220px, 1fr))`};
  gap: 16px;
  align-items: start;
`,I=h.button`
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
`;function L(e,t,n){if(n<0||n>=e.length)return e;let r=[...e],[i]=r.splice(t,1);return r.splice(n,0,i),r}function R(){let e=new Uint8Array(6);return crypto.getRandomValues(e),Array.from(e,e=>e.toString(16).padStart(2,`0`)).join(``)}var z=e=>JSON.parse(JSON.stringify(e)),B=(e,t,n)=>e.map((e,r)=>r===t?n:e),V=({selector:e,value:t,onChange:n,label:r,helper:i,required:a=!1})=>{let o=(0,D.useRef)(null),s=(0,D.useRef)(null),c=(0,D.useRef)(n),l=(0,D.useRef)([]);(0,D.useEffect)(()=>{c.current=n}),(0,D.useEffect)(()=>{let e=document.createElement(`ha-selector`);e.hass=T();let t=t=>{t.stopPropagation();let n=t.detail.value;e.value=n,l.current.push(JSON.stringify(n??null)),c.current(n)};e.addEventListener(`value-changed`,t),o.current?.append(e),s.current=e;let n=C(t=>{e.hass=t});return()=>{n(),e.removeEventListener(`value-changed`,t),e.remove(),s.current=null}},[]);let u=JSON.stringify(e);return(0,D.useEffect)(()=>{let e=s.current;e&&(e.selector=JSON.parse(u),e.label=r,e.helper=i,e.required=a)},[u,r,i,a]),(0,D.useEffect)(()=>{let e=s.current;if(!e)return;let n=JSON.stringify(t??null),r=l.current.indexOf(n);if(r>=0){l.current.splice(0,r+1);return}l.current=[],e.value!==t&&(e.value=t)},[t]),(0,O.jsx)(`div`,{ref:o,className:`ha-field`})},Ve=[`ha-selector`,`ha-entity-picker`,`ha-switch`,`ha-icon-picker`],He=[{tag:`hui-entities-card`,config:{type:`entities`,entities:[]}},{tag:`hui-button-card`,config:{type:`button`}}],Ue=null,We=!1;function Ge(){return We&&Ve.every(e=>customElements.get(e))}var Ke=e=>new Promise(t=>window.setTimeout(()=>t(!1),e));async function qe(){let e=Object.assign(document.createElement(`ha-selector`),{selector:{text:{}},hidden:!0});document.body.append(e);try{return await Promise.race([customElements.whenDefined(`ha-selector-text`).then(()=>!0),Ke(5e3)])}finally{e.remove()}}function Je(){return Ge()?Promise.resolve(!0):(Ue??=(async()=>{let e=window.loadCardHelpers,t=null;for(let n of He)try{let r=customElements.get(n.tag);!r?.getConfigElement&&e&&(t??=await e(),r=(await t.createCardElement(n.config)).constructor),await r?.getConfigElement?.()}catch{}return We=!!customElements.get(`ha-selector`)&&await qe(),Ge()})(),Ue)}function H(){let[e,t]=(0,D.useState)(Ge),n=(0,D.useSyncExternalStore)(C,()=>T()!==null);return(0,D.useEffect)(()=>{if(e||!n)return;let r=!0;return Je().then(e=>r&&e&&t(!0)),()=>{r=!1}},[e,n]),e&&n}var U=({label:e,hint:t,value:n,onChange:r,placeholder:i,type:a=`text`})=>H()?(0,O.jsx)(V,{selector:{text:a===`text`?{}:{type:a}},value:n,label:e,helper:t,onChange:e=>r(typeof e==`string`?e:``)}):(0,O.jsxs)(P,{children:[(0,O.jsx)(`span`,{className:`label`,children:e}),(0,O.jsx)(`input`,{type:a,value:n,placeholder:i,onChange:e=>r(e.target.value)}),t&&(0,O.jsx)(`small`,{children:t})]}),Ye=({label:e,hint:t,value:n,onChange:r,suggestions:i=[]})=>{let a=H(),o=e=>[...new Set(e.filter(e=>typeof e==`string`).map(e=>e.trim()).filter(Boolean))];if(a){let a=[...new Set([...n,...i])];return(0,O.jsxs)(P,{as:`div`,children:[(0,O.jsx)(`span`,{className:`label`,children:e}),t&&(0,O.jsx)(`small`,{children:t}),(0,O.jsx)(V,{selector:{select:{multiple:!0,custom_value:!0,mode:`dropdown`,sort:!1,options:a}},value:n,label:e,onChange:e=>r(Array.isArray(e)?o(e):[])})]})}return(0,O.jsxs)(P,{children:[(0,O.jsx)(`span`,{className:`label`,children:e}),(0,O.jsx)(`input`,{type:`text`,value:n.join(`, `),onChange:e=>r(o(e.target.value.split(`,`)))}),t&&(0,O.jsx)(`small`,{children:t})]})},W=({label:e,hint:t,value:n,onChange:r,min:i,max:a,step:o=1,unit:s})=>{let c=H(),l=e=>{let t=Number(e);e!==``&&e!==null&&Number.isFinite(t)&&r(t)};return c?(0,O.jsx)(V,{selector:{number:{min:i,max:a,step:o,mode:`box`,unit_of_measurement:s}},value:n,label:e,helper:t,onChange:l}):(0,O.jsxs)(P,{children:[(0,O.jsx)(`span`,{className:`label`,children:e}),(0,O.jsx)(`input`,{type:`number`,value:n,min:i,max:a,step:o,onChange:e=>l(e.target.value)}),t&&(0,O.jsx)(`small`,{children:t})]})},Xe=({label:e,hint:t,value:n,onChange:r,min:i,max:a,step:o,unit:s,scale:c=1})=>{let l=H(),u=Math.round(n*c*1e3)/1e3,d=e=>{let t=Number(e);Number.isFinite(t)&&r(t/c)};return l?(0,O.jsx)(V,{selector:{number:{min:i,max:a,step:o,mode:`slider`,unit_of_measurement:s}},value:u,label:e,helper:t,onChange:d}):(0,O.jsxs)(P,{children:[(0,O.jsxs)(`span`,{className:`label`,children:[e,`: `,u,s?` ${s}`:``]}),(0,O.jsx)(`input`,{type:`range`,value:u,min:i,max:a,step:o,onChange:e=>d(e.target.value)}),t&&(0,O.jsx)(`small`,{children:t})]})},G=({label:e,hint:t,value:n,onChange:r})=>H()?(0,O.jsx)(V,{selector:{boolean:{}},value:n,label:e,helper:t,onChange:e=>r(!!e)}):(0,O.jsxs)(Be,{children:[(0,O.jsx)(`input`,{type:`checkbox`,checked:n,onChange:e=>r(e.target.checked)}),(0,O.jsxs)(`span`,{children:[e,t&&(0,O.jsx)(`small`,{children:t})]})]}),Ze=e=>Array.isArray(e)&&e.length===3&&e.every(e=>typeof e==`number`)?`#${e.map(e=>Math.round(Math.min(255,Math.max(0,e))).toString(16).padStart(2,`0`)).join(``)}`:null,Qe=e=>[1,3,5].map(t=>parseInt(e.slice(t,t+2),16)||0),$e=({label:e,hint:t,value:n,onChange:r})=>H()?(0,O.jsx)(V,{selector:{color_rgb:{}},value:Qe(n),label:e,helper:t,onChange:e=>{let t=Ze(e);t&&r(t)}}):(0,O.jsxs)(P,{children:[(0,O.jsx)(`span`,{className:`label`,children:e}),(0,O.jsx)(`input`,{type:`color`,value:n,onChange:e=>r(e.target.value)}),t&&(0,O.jsx)(`small`,{children:t})]}),et=({label:e,hint:t,value:n,onChange:r})=>H()?(0,O.jsx)(V,{selector:{time:{}},value:n||void 0,label:e,helper:t,onChange:e=>r(typeof e==`string`?e.slice(0,5):``)}):(0,O.jsxs)(P,{children:[(0,O.jsx)(`span`,{className:`label`,children:e}),(0,O.jsx)(`input`,{type:`time`,value:n,onChange:e=>r(e.target.value)}),t&&(0,O.jsx)(`small`,{children:t})]}),K=({label:e,hint:t,value:n,onChange:r,options:i})=>H()?(0,O.jsx)(V,{selector:{select:{options:i,mode:`dropdown`}},value:n,label:e,helper:t,required:!0,onChange:e=>typeof e==`string`&&r(e)}):(0,O.jsxs)(P,{children:[(0,O.jsx)(`span`,{className:`label`,children:e}),(0,O.jsx)(`select`,{value:n,onChange:e=>r(e.target.value),children:i.map(e=>(0,O.jsx)(`option`,{value:e.value,children:e.label},e.value))}),t&&(0,O.jsx)(`small`,{children:t})]}),q=({label:e,hint:t,value:n,onChange:r})=>H()?(0,O.jsx)(V,{selector:{icon:{}},value:n,label:e,helper:t,onChange:e=>r(typeof e==`string`?e:``)}):(0,O.jsxs)(P,{children:[(0,O.jsx)(`span`,{className:`label`,children:e}),(0,O.jsxs)(`span`,{className:`with-icon`,children:[(0,O.jsx)(`input`,{type:`text`,value:n,placeholder:`mdi:…`,onChange:e=>r(e.target.value)}),n&&(0,O.jsx)(x,{icon:n,size:`24px`})]}),t&&(0,O.jsx)(`small`,{children:t})]}),tt=({label:e,hint:t,value:n,onChange:r,accept:i})=>{let a=H(),o=(0,D.useMemo)(()=>n.startsWith(`media-source://`)?{media_content_id:n,media_content_type:i[0]}:void 0,[n,i]);return a?(0,O.jsx)(V,{selector:{media:{accept:i}},value:o,label:e,helper:t,onChange:e=>r(e?.media_content_id??``)}):(0,O.jsx)(U,{label:e,hint:t,value:n,onChange:r})},nt=(0,D.createContext)([]),rt=({children:e})=>{let t=s(pe(e=>{let t={};for(let[n,r]of Object.entries(e.entities))t[n]=r.attributes.friendly_name||n;return t})),n=(0,D.useMemo)(()=>Object.entries(t).map(([e,t])=>({id:e,name:t})).sort((e,t)=>e.id.localeCompare(t.id)),[t]);return(0,O.jsx)(nt.Provider,{value:n,children:e})},it=(e,t={},n,r)=>({entity:{...r?{include_entities:r}:{},...e?.length||n?{filter:{...e?.length?{domain:e}:{},...n?{integration:n}:{}}}:{},...t}}),at=({value:e,domains:t,onChange:n})=>{let r=(0,D.useContext)(nt),i=(0,D.useId)(),a=(0,D.useMemo)(()=>t?.length?r.filter(e=>t.includes(e.id.split(`.`)[0])):r,[r,t]);return(0,O.jsxs)(O.Fragment,{children:[(0,O.jsx)(`input`,{type:`text`,list:i,value:e,placeholder:t?.length?`${t[0]}.…`:`domain.object_id`,onChange:e=>n(e.target.value.trim())}),(0,O.jsx)(`datalist`,{id:i,children:a.map(e=>(0,O.jsx)(`option`,{value:e.id,children:e.name},e.id))})]})},J=({label:e,hint:t,value:n,onChange:r,domains:i,integration:a,include:o})=>{let s=H(),c=(0,D.useContext)(nt),l=E();if(s)return(0,O.jsx)(V,{selector:it(i,{},a,o),value:n||void 0,label:e,helper:t,onChange:e=>r(typeof e==`string`?e:``)});let u=c.find(e=>e.id===n);return(0,O.jsxs)(P,{children:[(0,O.jsx)(`span`,{className:`label`,children:e}),(0,O.jsx)(at,{value:n,domains:i,onChange:r}),n&&(0,O.jsx)(`small`,{children:u?u.name:l(`not_found`)}),t&&(0,O.jsx)(`small`,{children:t})]})},Y=({label:e,hint:t,value:n,onChange:r,domains:i,max:a,include:o})=>{let s=H(),c=E(),l=e=>r(a===void 0?e:e.slice(0,a));return s?(0,O.jsx)(V,{selector:it(i,{multiple:!0,reorder:!0},void 0,o),value:n,label:e,helper:t,onChange:e=>l(Array.isArray(e)?e.filter(e=>typeof e==`string`):[])}):(0,O.jsxs)(P,{as:`div`,children:[(0,O.jsx)(`span`,{className:`label`,children:e}),n.map((e,t)=>(0,O.jsxs)(F,{$columns:`minmax(0, 1fr) auto`,children:[(0,O.jsx)(at,{value:e,domains:i,onChange:e=>l(n.map((n,r)=>r===t?e:n))}),(0,O.jsx)(X,{index:t,length:n.length,onMove:e=>l(L(n,t,e)),onRemove:()=>l(n.filter((e,n)=>n!==t))})]},t)),(a===void 0||n.length<a)&&(0,O.jsx)(I,{type:`button`,className:`add`,onClick:()=>l([...n,``]),"data-tip":c(`add`),"aria-label":c(`add`),children:(0,O.jsx)(x,{icon:`mdi:plus`})}),t&&(0,O.jsx)(`small`,{children:t})]})},X=({index:e,length:t,onMove:n,onRemove:r,onDuplicate:i})=>{let a=E();return(0,O.jsxs)(`span`,{className:`list-controls`,children:[(0,O.jsx)(I,{type:`button`,disabled:e===0,onClick:()=>n(e-1),"data-tip":a(`move_up`),"aria-label":a(`move_up`),children:(0,O.jsx)(x,{icon:`mdi:arrow-up`})}),(0,O.jsx)(I,{type:`button`,disabled:e===t-1,onClick:()=>n(e+1),"data-tip":a(`move_down`),"aria-label":a(`move_down`),children:(0,O.jsx)(x,{icon:`mdi:arrow-down`})}),i&&(0,O.jsx)(I,{type:`button`,onClick:i,"data-tip":a(`duplicate`),"aria-label":a(`duplicate`),children:(0,O.jsx)(x,{icon:`mdi:content-copy`})}),(0,O.jsx)(I,{type:`button`,$danger:!0,onClick:r,"data-tip":a(`remove`),"aria-label":a(`remove`),children:(0,O.jsx)(x,{icon:`mdi:delete-outline`})})]})},Z=({title:e,lead:t})=>(0,O.jsxs)(O.Fragment,{children:[(0,O.jsx)(`h2`,{children:e}),t&&(0,O.jsx)(`p`,{className:`lead`,children:t})]}),ot=h.span`
  margin-left: 8px;
  padding: 1px 8px;
  border-radius: 999px;
  font-size: 12px;
  font-weight: 400;
  background: var(--secondary-background-color, #282828);
  color: var(--secondary-text-color, #9b9b9b);
`,st=({dashboards:e})=>{let t=E(),n=l(),[r,i]=(0,D.useState)(null);(0,D.useEffect)(()=>{n?.sendMessagePromise({type:`better_wall_dashboard/users`}).then(e=>i(e.users)).catch(()=>i([]))},[n]);let a=(0,D.useCallback)(async(e,t)=>{if(!n)return;i(n=>n?.map(n=>n.id===e.id?{...n,...t}:n)??null);let r=await n.sendMessagePromise({type:`better_wall_dashboard/save_user`,user_id:e.id,...t});i(t=>t?.map(t=>t.id===e.id?{...t,...r}:t)??null)},[n]);return(0,O.jsxs)(O.Fragment,{children:[(0,O.jsx)(Z,{title:t(`tab_users`),lead:t(`lead_users`)}),r?.map(n=>(0,O.jsxs)(Me,{open:!n.is_admin||void 0,children:[(0,O.jsxs)(`summary`,{children:[(0,O.jsx)(x,{className:`icon`,icon:n.is_admin?`mdi:shield-account-outline`:`mdi:tablet`}),(0,O.jsxs)(`span`,{className:`text`,children:[(0,O.jsxs)(`span`,{children:[n.name,n.is_admin&&(0,O.jsx)(ot,{children:t(`admin`)}),!n.is_active&&(0,O.jsx)(ot,{children:t(`inactive`)})]}),(0,O.jsx)(`span`,{className:`secondary`,children:e.find(e=>e.id===n.dashboard)?.name??n.dashboard})]})]}),(0,O.jsxs)(`div`,{className:`fold-body`,children:[(0,O.jsx)(K,{label:t(`assigned_dashboard`),value:n.dashboard,options:e.map(e=>({value:e.id,label:e.name})),onChange:e=>a(n,{dashboard:e})}),(0,O.jsxs)(F,{children:[(0,O.jsx)(G,{label:t(`kiosk`),hint:t(`kiosk_user_hint`),value:n.kiosk,onChange:e=>a(n,{kiosk:e})}),(0,O.jsx)(G,{label:t(`start_page`),hint:t(`start_page_hint`),value:!!n.default_panel,onChange:e=>a(n,{default_panel:e})})]}),(0,O.jsx)(G,{label:t(`sidebar_only`),hint:t(`sidebar_only_hint`),value:n.sidebar_only,onChange:e=>a(n,{sidebar_only:e})})]})]},n.id))]})},ct=`/better_wall_dashboard/static/icon.png`,lt=h(Fe)`
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
`,ut=({open:e,onClose:t})=>{let n=E(),r=l(),i=(0,D.useRef)(null),[a,o]=(0,D.useState)(null),s=ce();(0,D.useEffect)(()=>{let t=i.current;t&&(e&&!t.open&&t.showModal(),!e&&t.open&&t.close())}),(0,D.useEffect)(()=>{e&&r?.sendMessagePromise({type:`better_wall_dashboard/version`}).then(o).catch(()=>void 0)},[e,r]);let c=!!(s&&a&&a.app!==s);return(0,O.jsxs)(lt,{ref:i,tabIndex:-1,onClose:()=>e&&t(),onClick:e=>e.target===e.currentTarget&&t(),children:[(0,O.jsxs)(`div`,{className:`head`,children:[(0,O.jsx)(`img`,{src:ct,alt:``}),(0,O.jsx)(`h2`,{children:`Better Wall Dashboard`})]}),(0,O.jsx)(`p`,{className:`muted`,children:n(`about_blurb`)}),(0,O.jsx)(`table`,{children:(0,O.jsxs)(`tbody`,{children:[(0,O.jsxs)(`tr`,{children:[(0,O.jsx)(`th`,{children:n(`about_version`)}),(0,O.jsx)(`td`,{children:a?.version??`–`})]}),(0,O.jsxs)(`tr`,{children:[(0,O.jsx)(`th`,{children:n(`about_page`)}),(0,O.jsx)(`td`,{children:s?s.slice(0,12):`–`})]})]})}),c&&(0,O.jsxs)(O.Fragment,{children:[(0,O.jsx)(`p`,{children:n(`update_available`)}),(0,O.jsx)(k,{appearance:`filled`,icon:`mdi:reload`,onClick:()=>{let e=d(),t=null;if(e&&a){let n=new URL(e);n.searchParams.set(`v`,a.app),t=n.toString()}u(t)},children:n(`reload`)})]}),(a?.documentation||a?.issues)&&(0,O.jsxs)(`p`,{children:[a.documentation&&(0,O.jsx)(`a`,{href:a.documentation,target:`_blank`,rel:`noopener noreferrer`,children:n(`about_repo`)}),a.documentation&&a.issues&&` · `,a.issues&&(0,O.jsx)(`a`,{href:a.issues,target:`_blank`,rel:`noopener noreferrer`,children:n(`about_issues`)})]}),(0,O.jsx)(I,{type:`button`,className:`shut`,"aria-label":n(`close`),"data-tip":n(`close`),onClick:t,children:(0,O.jsx)(x,{icon:`mdi:close`})})]})},dt=({request:e,onAnswer:t})=>{let n=E(),r=(0,D.useRef)(null);return(0,D.useEffect)(()=>{let t=r.current;t&&(e&&!t.open&&t.showModal(),!e&&t.open&&t.close())}),(0,O.jsx)(Fe,{ref:r,role:`alertdialog`,tabIndex:-1,onCancel:e=>{e.preventDefault(),t(!1)},onClick:e=>e.target===e.currentTarget&&t(!1),children:e&&(0,O.jsxs)(O.Fragment,{children:[(0,O.jsx)(`h2`,{children:e.title}),e.text&&(0,O.jsx)(`p`,{className:`muted`,children:e.text}),(0,O.jsxs)(`div`,{className:`actions`,children:[(0,O.jsx)(k,{appearance:`plain`,onClick:()=>t(!1),children:n(`cancel`)}),(0,O.jsx)(k,{appearance:`accent`,danger:e.danger,onClick:()=>t(!0),children:e.confirm})]})]})})};function ft(){let[e,t]=(0,D.useState)(null);return{confirm:(0,D.useCallback)(e=>new Promise(n=>t({...e,resolve:n})),[]),dialog:(0,O.jsx)(dt,{request:e,onAnswer:n=>{e?.resolve(n),t(null)}})}}var pt=(0,D.createContext)([]);function mt(){return(0,D.useContext)(pt)}function ht(e){let t=document.querySelector(`home-assistant`);return t?(t.dispatchEvent(new CustomEvent(`hass-notification`,{bubbles:!0,composed:!0,detail:{message:e,dismissable:!0}})),!0):!1}var gt=({draft:e,update:t})=>{let n=E(),r=n=>t({...e,background:{...e.background,...n}});return(0,O.jsxs)(O.Fragment,{children:[(0,O.jsx)(Z,{title:n(`tab_general`),lead:n(`lead_general`)}),(0,O.jsxs)(N,{children:[(0,O.jsx)(U,{label:n(`name`),value:e.name,onChange:n=>t({...e,name:n})}),(0,O.jsx)(K,{label:n(`popup_close`),hint:n(`popup_close_hint`),value:String(e.popup_close_minutes??2),options:[0,1,2,5,10,30].map(e=>({value:String(e),label:e?n(`popup_close_after`,{minutes:e}):n(`popup_close_never`)})),onChange:n=>t({...e,popup_close_minutes:Number(n)})}),(0,O.jsx)(G,{label:n(`hide_toasts`),hint:n(`hide_toasts_hint`),value:e.hide_toasts??!1,onChange:n=>t({...e,hide_toasts:n})})]}),(0,O.jsxs)(N,{children:[(0,O.jsx)(`h3`,{children:n(`background`)}),(0,O.jsx)(K,{label:n(`background_mode`),value:e.background.mode??`image`,options:[{value:`image`,label:n(`background_mode_image`)},{value:`color`,label:n(`background_mode_color`)}],onChange:e=>r({mode:e===`color`?`color`:`image`})}),e.background.mode===`color`?(0,O.jsx)($e,{label:n(`background_color`),value:e.background.color??`#131313`,onChange:e=>r({color:e})}):(0,O.jsxs)(O.Fragment,{children:[(0,O.jsx)(tt,{label:n(`background_media`),hint:n(`background_media_hint`),accept:[`image/*`],value:e.background.image,onChange:e=>r({image:e})}),(0,O.jsx)(U,{label:n(`background_image`),hint:n(`background_image_hint`),type:`url`,value:e.background.image.startsWith(`media-source://`)?``:e.background.image,onChange:e=>r({image:e})}),(0,O.jsxs)(F,{children:[(0,O.jsx)(Xe,{label:n(`background_dim`),value:e.background.dim,min:0,max:95,step:5,unit:`%`,scale:100,onChange:e=>r({dim:e})}),(0,O.jsx)(Xe,{label:n(`background_blur`),value:e.background.blur,min:0,max:40,step:1,unit:`px`,onChange:e=>r({blur:e})})]})]})]}),(0,O.jsxs)(N,{children:[(0,O.jsx)(`h3`,{children:n(`security_heading`)}),(0,O.jsx)(U,{label:n(`pin`),hint:n(`pin_hint`),type:`password`,value:e.pin??``,onChange:n=>t({...e,pin:n.replace(/\D/g,``).slice(0,8)})})]})]})},_t=6,vt=[{type:`state`,label:`rule_state`},{type:`numeric`,label:`rule_numeric`},{type:`time`,label:`rule_time`},{type:`sun`,label:`rule_sun`},{type:`home`,label:`rule_home`}],yt=e=>{switch(e){case`state`:return{type:e,entity:``,state:``,not:!1};case`numeric`:return{type:e,entity:``,above:null,below:null};case`time`:return{type:e,after:``,before:``};case`sun`:return{type:e,when:`night`};case`home`:return{type:e,who:`anyone`}}},bt=h.div`
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
`,xt=e=>{let t=Number(e.replace(`,`,`.`));return e.trim()===``||!Number.isFinite(t)?null:t},St=({rule:e,onChange:t})=>{let n=E();switch(e.type){case`state`:return(0,O.jsxs)(O.Fragment,{children:[(0,O.jsx)(J,{label:n(`entity`),value:e.entity,onChange:n=>t({...e,entity:n})}),(0,O.jsx)(U,{label:n(`rule_state_value`),hint:n(`rule_state_value_hint`),value:e.state,onChange:n=>t({...e,state:n})}),(0,O.jsx)(G,{label:n(`rule_not`),value:e.not,onChange:n=>t({...e,not:n})})]});case`numeric`:return(0,O.jsxs)(O.Fragment,{children:[(0,O.jsx)(J,{label:n(`entity`),value:e.entity,onChange:n=>t({...e,entity:n})}),(0,O.jsxs)(F,{children:[(0,O.jsx)(U,{label:n(`rule_above`),value:e.above===null?``:String(e.above),onChange:n=>t({...e,above:xt(n)})}),(0,O.jsx)(U,{label:n(`rule_below`),value:e.below===null?``:String(e.below),onChange:n=>t({...e,below:xt(n)})})]})]});case`time`:return(0,O.jsxs)(F,{children:[(0,O.jsx)(et,{label:n(`rule_after`),value:e.after,onChange:n=>t({...e,after:n})}),(0,O.jsx)(et,{label:n(`rule_before`),hint:n(`rule_before_hint`),value:e.before,onChange:n=>t({...e,before:n})})]});case`sun`:return(0,O.jsx)(K,{label:n(`rule_sun`),value:e.when,options:[{value:`day`,label:n(`rule_day`)},{value:`night`,label:n(`rule_night`)}],onChange:n=>t({...e,when:n===`day`?`day`:`night`})});case`home`:return(0,O.jsx)(K,{label:n(`rule_home`),value:e.who,options:[{value:`anyone`,label:n(`rule_anyone`)},{value:`nobody`,label:n(`rule_nobody`)}],onChange:n=>t({...e,who:n===`nobody`?`nobody`:`anyone`})})}},Ct=({rules:e,onChange:t})=>{let n=E();return(0,O.jsxs)(P,{as:`div`,children:[(0,O.jsx)(`span`,{className:`label`,children:n(`rules`)}),(0,O.jsx)(`small`,{children:n(`rules_hint`)}),e.map((r,i)=>(0,O.jsxs)(bt,{children:[(0,O.jsxs)(`div`,{className:`head`,children:[(0,O.jsx)(K,{label:n(`rule_type`),value:r.type,options:vt.map(e=>({value:e.type,label:n(e.label)})),onChange:n=>t(B(e,i,yt(n)))}),(0,O.jsx)(X,{index:i,length:e.length,onMove:n=>t(L(e,i,n)),onRemove:()=>t(e.filter((e,t)=>t!==i))})]}),(0,O.jsx)(St,{rule:r,onChange:n=>t(B(e,i,n))})]},i)),(0,O.jsx)(`div`,{children:(0,O.jsx)(k,{icon:`mdi:plus`,disabled:e.length>=_t,onClick:()=>t([...e,yt(`state`)]),children:n(`add_rule`)})})]})},wt=({item:e})=>{let t=p(e.entity||void 0),n=E(),r=e.name||t?.attributes.friendly_name||e.entity||n(`not_set`);return(0,O.jsxs)(O.Fragment,{children:[(0,O.jsx)(x,{className:`icon`,icon:e.icon||t?.attributes.icon||c(e.entity)}),(0,O.jsxs)(`span`,{className:`text`,children:[(0,O.jsx)(`span`,{children:r}),e.entity&&(0,O.jsxs)(`span`,{className:`secondary`,children:[e.entity,e.rules?.length?` · ${e.rules.length===1?n(`rules_one`):n(`rules_count`,{count:e.rules.length})}`:``]})]})]})};function Q({items:e,max:t,domains:n,addLabel:r,withRules:i=!1,create:a,named:o=!0,extra:s,onChange:c}){let l=E(),u=(t,n)=>c(B(e,t,{...e[t],...n})),d=()=>a?.()??{id:R(),entity:``,name:``,icon:``,...i?{rules:[]}:{}};return(0,O.jsxs)(O.Fragment,{children:[e.length===0&&(0,O.jsxs)(Ne,{children:[(0,O.jsx)(x,{icon:`mdi:playlist-plus`}),(0,O.jsx)(`span`,{children:l(`empty_list`)})]}),e.map((t,r)=>(0,O.jsxs)(Me,{open:!t.entity||void 0,children:[(0,O.jsxs)(`summary`,{children:[(0,O.jsx)(wt,{item:t}),(0,O.jsx)(`span`,{onClick:e=>e.preventDefault(),children:(0,O.jsx)(X,{index:r,length:e.length,onMove:t=>c(L(e,r,t)),onRemove:()=>c(e.filter((e,t)=>t!==r))})})]}),(0,O.jsxs)(`div`,{className:`fold-body`,children:[(0,O.jsx)(J,{label:l(`entity`),value:t.entity,domains:n,onChange:e=>u(r,{entity:e})}),o?(0,O.jsxs)(F,{children:[(0,O.jsx)(U,{label:l(`name`),hint:l(`name_hint`),value:t.name,onChange:e=>u(r,{name:e})}),(0,O.jsx)(q,{label:l(`icon`),value:t.icon,onChange:e=>u(r,{icon:e})})]}):(0,O.jsx)(q,{label:l(`icon`),hint:l(`status_icon_hint`),value:t.icon,onChange:e=>u(r,{icon:e})}),s?.(t,e=>u(r,e)),i&&(0,O.jsx)(Ct,{rules:t.rules??[],onChange:e=>u(r,{rules:e})})]})]},t.id)),(0,O.jsx)(`div`,{children:(0,O.jsxs)(k,{icon:`mdi:plus`,appearance:`filled`,disabled:e.length>=t,onClick:()=>c([...e,d()]),children:[r,` (`,e.length,`/`,t,`)`]})})]})}var Tt=({value:e,onChange:t})=>{let n=E(),r=s(pe(e=>S(e.entities,[]))),i=n=>t({...e,...n});return(0,O.jsxs)(O.Fragment,{children:[(0,O.jsx)(G,{label:n(`batteries_enabled`),hint:n(`batteries_enabled_hint`),value:e.enabled,onChange:e=>i({enabled:e})}),(0,O.jsx)(G,{label:n(`batteries_hide_when_ok`),hint:n(`batteries_hide_when_ok_hint`),value:e.hide_when_ok,onChange:e=>i({hide_when_ok:e})}),(0,O.jsx)(G,{label:n(`batteries_only_critical`),hint:n(`batteries_only_critical_hint`),value:e.only_critical,onChange:e=>i({only_critical:e})}),(0,O.jsx)(W,{label:n(`batteries_threshold`),hint:n(`batteries_threshold_hint`),value:e.threshold,min:5,max:90,unit:`%`,onChange:e=>i({threshold:Math.max(5,Math.min(90,e))})}),(0,O.jsx)(Y,{label:n(`batteries_hidden`),hint:n(`batteries_hidden_hint`),value:e.hidden,domains:[`sensor`,`binary_sensor`],include:r,onChange:e=>i({hidden:e})})]})},Et=[`input_boolean`,`switch`,`binary_sensor`],Dt=({draft:e,update:t,part:n})=>{let r=E(),i=mt(),a=e.sidebar,o=n=>t({...e,sidebar:n}),s=(e,t)=>o({...a,[e]:{...a[e],...t}}),c=A.find(e=>e.part===n)?.label??`tab_sidebar`,l=(0,O.jsx)(Z,{title:r(c),lead:r(`lead_${n}`)});switch(n){case`clock`:return(0,O.jsxs)(O.Fragment,{children:[l,(0,O.jsxs)(N,{children:[(0,O.jsx)(K,{label:r(`clock_style`),value:a.clock?.style??`digital`,options:[{value:`digital`,label:r(`clock_digital`)},{value:`analog`,label:r(`clock_analog`)}],onChange:e=>s(`clock`,{style:e})}),(0,O.jsx)(G,{label:r(`clock_seconds`),value:!!a.clock?.seconds,onChange:e=>s(`clock`,{seconds:e})})]})]});case`status`:return(0,O.jsxs)(O.Fragment,{children:[l,(0,O.jsxs)(N,{children:[(0,O.jsx)(`h3`,{children:r(`status_icons`)}),(0,O.jsx)(`p`,{children:r(`status_icons_hint`)}),(0,O.jsx)(Q,{items:a.status.icons??[],max:w.statusIcons,domains:Et,addLabel:r(`add_status_icon`),onChange:e=>s(`status`,{icons:e})})]}),(0,O.jsxs)(N,{children:[(0,O.jsx)(`h3`,{children:r(`wifi_heading`)}),(0,O.jsx)(J,{label:r(`wifi_signal`),hint:r(`wifi_signal_hint`),value:a.status.wifi_signal,domains:[`sensor`],onChange:e=>s(`status`,{wifi_signal:e})})]}),(0,O.jsxs)(N,{children:[(0,O.jsx)(`h3`,{children:r(`guest_wifi`)}),(0,O.jsx)(J,{label:r(`guest_qr_image`),hint:r(`guest_qr_image_hint`),value:a.guest_wifi.qr_image,domains:[`image`],onChange:e=>s(`guest_wifi`,{qr_image:e})}),(0,O.jsxs)(F,{children:[(0,O.jsx)(U,{label:r(`network`),value:a.guest_wifi.ssid,onChange:e=>s(`guest_wifi`,{ssid:e})}),(0,O.jsx)(U,{label:r(`password`),type:`password`,value:a.guest_wifi.password,onChange:e=>s(`guest_wifi`,{password:e})})]}),(0,O.jsxs)(F,{children:[(0,O.jsx)(K,{label:r(`security`),value:a.guest_wifi.security,options:[{value:`WPA`,label:`WPA/WPA2/WPA3`},{value:`WEP`,label:`WEP`},{value:`nopass`,label:r(`open_network`)}],onChange:e=>s(`guest_wifi`,{security:e})}),(0,O.jsx)(G,{label:r(`hidden_network`),value:a.guest_wifi.hidden,onChange:e=>s(`guest_wifi`,{hidden:e})})]})]})]});case`climate`:return(0,O.jsxs)(O.Fragment,{children:[l,(0,O.jsxs)(N,{children:[(0,O.jsx)(J,{label:r(`temperature`),value:a.climate.temperature,domains:[`sensor`],onChange:e=>s(`climate`,{temperature:e})}),(0,O.jsx)(J,{label:r(`humidity`),value:a.climate.humidity,domains:[`sensor`],onChange:e=>s(`climate`,{humidity:e})}),(0,O.jsx)(W,{label:r(`hours`),value:a.climate.hours,min:1,max:168,unit:`h`,onChange:e=>s(`climate`,{hours:e})})]})]});case`persons`:return(0,O.jsxs)(O.Fragment,{children:[l,(0,O.jsx)(Y,{label:r(`persons`),value:a.persons,domains:[`person`],onChange:e=>o({...a,persons:e})})]});case`openings`:return(0,O.jsxs)(O.Fragment,{children:[l,(0,O.jsx)(Y,{label:r(`openings`),hint:r(`openings_hint`),value:a.openings,domains:[`binary_sensor`,`cover`,`lock`,`sensor`],onChange:e=>o({...a,openings:e})}),(0,O.jsx)(G,{label:r(`openings_hide_when_closed`),hint:r(`openings_hide_when_closed_hint`),value:a.openings_view?.hide_when_closed??!1,onChange:e=>o({...a,openings_view:{only_open:!1,...a.openings_view,hide_when_closed:e}})}),(0,O.jsx)(G,{label:r(`openings_only_open`),hint:r(`openings_only_open_hint`),value:a.openings_view?.only_open??!1,onChange:e=>o({...a,openings_view:{hide_when_closed:!1,...a.openings_view,only_open:e}})})]});case`travel`:return(0,O.jsxs)(O.Fragment,{children:[l,(0,O.jsxs)(N,{children:[(0,O.jsx)(J,{label:r(`travel_sensor`),value:a.travel.entity,domains:[`sensor`],onChange:e=>s(`travel`,{entity:e})}),(0,O.jsx)(U,{label:r(`name`),hint:r(`travel_name_hint`),value:a.travel.name,onChange:e=>s(`travel`,{name:e})})]}),(0,O.jsxs)(N,{children:[(0,O.jsx)(`h3`,{children:r(`map`)}),(0,O.jsx)(U,{label:r(`maps_api_key`),hint:r(`maps_api_key_hint`),type:`password`,value:a.travel.maps_api_key,onChange:e=>s(`travel`,{maps_api_key:e})}),(0,O.jsx)(U,{label:r(`map_url`),hint:r(`map_url_hint`),type:`url`,value:a.travel.map_url,onChange:e=>s(`travel`,{map_url:e})}),(0,O.jsx)(J,{label:r(`travel_work_zone`),hint:r(`travel_work_zone_hint`),value:a.travel.work_zone??``,domains:[`zone`],onChange:e=>s(`travel`,{work_zone:e})}),(0,O.jsx)(U,{label:r(`travel_work_address`),hint:r(`travel_work_address_hint`),value:a.travel.work_address??``,onChange:e=>s(`travel`,{work_address:e})})]})]});case`quick`:return(0,O.jsxs)(O.Fragment,{children:[l,(0,O.jsx)(Q,{items:a.quick_actions,max:w.quickActions,addLabel:r(`add_quick_action`),withRules:!0,onChange:e=>o({...a,quick_actions:e})})]});case`calendar`:return(0,O.jsxs)(O.Fragment,{children:[l,(0,O.jsxs)(N,{children:[(0,O.jsx)(Y,{label:r(`calendars`),value:a.calendar.entities,domains:[`calendar`],onChange:e=>s(`calendar`,{entities:e})}),(0,O.jsx)(W,{label:r(`days`),hint:r(`calendar_days_hint`),value:a.calendar.days,min:1,max:w.calendarDays,onChange:e=>s(`calendar`,{days:e})})]})]});case`weather`:return(0,O.jsxs)(O.Fragment,{children:[l,(0,O.jsxs)(N,{children:[(0,O.jsx)(J,{label:r(`weather_entity`),value:a.weather.entity,domains:[`weather`],onChange:e=>s(`weather`,{entity:e})}),(0,O.jsx)(J,{label:r(`outdoor_temperature`),hint:r(`outdoor_temperature_hint`),value:a.weather.temperature,domains:[`sensor`],onChange:e=>s(`weather`,{temperature:e})})]})]});case`notifications`:return(0,O.jsxs)(O.Fragment,{children:[l,(0,O.jsxs)(N,{children:[(0,O.jsx)(G,{label:r(`notifications_enabled`),value:a.notifications.enabled,onChange:e=>s(`notifications`,{enabled:e})}),(0,O.jsx)(Ye,{label:r(`notifications_prefix`),hint:r(`notifications_prefix_hint`),suggestions:ie([...i,e]),value:se(a.notifications),onChange:e=>s(`notifications`,{prefixes:e})})]}),(0,O.jsxs)(N,{children:[(0,O.jsx)(`h3`,{children:r(`settings`)}),(0,O.jsx)(G,{label:r(`settings_enabled`),hint:r(`settings_enabled_hint`),value:a.settings?.enabled!==!1,onChange:e=>s(`settings`,{enabled:e})})]})]});case`system`:return(0,O.jsxs)(O.Fragment,{children:[l,(0,O.jsx)(Q,{items:a.system,max:w.system,domains:[`sensor`],addLabel:r(`add_statistic`),onChange:e=>o({...a,system:e})}),(0,O.jsxs)(N,{children:[(0,O.jsx)(`h3`,{children:r(`system_buttons`)}),(0,O.jsx)(`p`,{children:r(`system_buttons_hint`)}),(0,O.jsx)(Q,{items:a.system_buttons??[],max:w.systemButtons,domains:[`button`,`input_button`,`script`,`scene`,`automation`,`switch`,`input_boolean`],addLabel:r(`add_system_button`),create:()=>({id:R(),entity:``,name:``,icon:``,confirm:!1,on_name:``,off_name:``}),extra:(e,t)=>(0,O.jsxs)(O.Fragment,{children:[/^(switch|input_boolean|light|fan)\./.test(e.entity)&&(0,O.jsxs)(O.Fragment,{children:[(0,O.jsxs)(F,{children:[(0,O.jsx)(U,{label:r(`system_button_on_name`),value:e.on_name??``,onChange:e=>t({on_name:e})}),(0,O.jsx)(U,{label:r(`system_button_off_name`),value:e.off_name??``,onChange:e=>t({off_name:e})})]}),(0,O.jsx)(`p`,{children:r(`system_button_names_hint`)})]}),(0,O.jsx)(G,{label:r(`system_button_confirm_option`),hint:r(`system_button_confirm_option_hint`),value:e.confirm,onChange:e=>t({confirm:e})})]}),onChange:e=>o({...a,system_buttons:e})})]})]});case`batteries`:return(0,O.jsxs)(O.Fragment,{children:[l,(0,O.jsx)(Tt,{value:a.batteries??_,onChange:e=>o({...a,batteries:e})})]})}},Ot=h.textarea`
  min-height: 55vh;
  padding: 12px;
  border-radius: 8px;
  border: 1px solid var(--divider-color, rgba(225, 225, 225, 0.12));
  background: var(--code-editor-background-color, var(--secondary-background-color, #282828));
  color: inherit;
  font-family: var(--ha-font-family-code, ui-monospace, monospace);
  font-size: 13px;
  resize: vertical;
`,kt=h.p`
  margin: 0;
  color: var(--error-color, #db4437);
`,At=({draft:e,update:t})=>{let n=E(),[r,i]=(0,D.useState)(()=>JSON.stringify(e,null,2)),[a,o]=(0,D.useState)(!1);return(0,O.jsxs)(O.Fragment,{children:[(0,O.jsx)(Z,{title:n(`tab_json`),lead:n(`json_hint`)}),(0,O.jsx)(Ot,{value:r,spellCheck:!1,onChange:e=>{i(e.target.value),o(!1)}}),a&&(0,O.jsx)(kt,{children:n(`json_invalid`)}),(0,O.jsx)(`div`,{children:(0,O.jsx)(k,{icon:`mdi:check`,appearance:`filled`,onClick:()=>{try{t({...JSON.parse(r),id:e.id})}catch{o(!0)}},children:n(`apply`)})})]})};function jt(){let e=s(e=>{let t=new Set(Object.values(e.entitiesRegistryDisplay).map(e=>e.platform));return v.filter(e=>!e.integration||t.has(e.integration)).map(e=>e.type).join(` `)});return v.filter(t=>e.split(` `).includes(t.type))}function Mt(e){let t=s(t=>e?.pickerEntities?e.pickerEntities(t.entities,e=>t.entitiesRegistryDisplay[e]?.platform).join(` `):null);return(0,D.useMemo)(()=>t===null?void 0:t.split(` `).filter(Boolean),[t])}var Nt=({tile:e,onChange:t})=>{let n=E(),r=p(ee(e.entity||void 0))?.attributes.options??[],i=Array.isArray(e.options.hidden_scenes)?e.options.hidden_scenes:[],a=n=>t({...e.options,...n});return(0,O.jsxs)(O.Fragment,{children:[r.length>0&&(0,O.jsxs)(P,{as:`div`,children:[(0,O.jsx)(`span`,{className:`label`,children:n(`bl_shown_scenes`)}),(0,O.jsx)(`small`,{children:n(`bl_shown_scenes_hint`)}),r.map(e=>(0,O.jsx)(G,{label:e,value:!i.includes(e),onChange:t=>a({hidden_scenes:t?i.filter(t=>t!==e):[...i.filter(e=>r.includes(e)),e]})},e))]}),(0,O.jsx)(G,{label:n(`light_hide_presets`),hint:n(`light_hide_presets_hint`),value:e.options.hide_presets===!0,onChange:e=>a({hide_presets:e})}),(0,O.jsxs)(F,{children:[(0,O.jsx)(J,{label:n(`bl_button_entity`),hint:n(`bl_button_entity_hint`),value:typeof e.options.button_entity==`string`?e.options.button_entity:``,onChange:e=>a({button_entity:e})}),(0,O.jsx)(q,{label:n(`bl_button_icon`),value:typeof e.options.button_icon==`string`?e.options.button_icon:``,onChange:e=>a({button_icon:e})})]})]})},Pt=h(Fe)`
  width: min(760px, calc(100vw - 32px));

  .types {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
    gap: 12px;
  }

  /* A card per type, as Home Assistant's card picker has them. */
  .type {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 8px;
    padding: 16px;
    border-radius: 16px;
    border: 1px solid var(--divider-color, rgba(255, 255, 255, 0.12));
    background: var(--secondary-background-color, rgba(255, 255, 255, 0.03));
    color: inherit;
    font: inherit;
    text-align: left;
    cursor: pointer;
    transition:
      border-color 0.2s ease,
      background 0.2s ease;
  }

  .type:hover,
  .type:focus-visible {
    border-color: var(--primary-color, #03a9f4);
    outline: none;
  }

  .type .icon {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    font-size: 22px;
    background: color-mix(in srgb, var(--primary-color, #03a9f4) 18%, transparent);
    color: var(--primary-color, #03a9f4);
  }

  .type .name {
    font-weight: 500;
  }

  .type .description {
    font-size: 13px;
    line-height: 1.4;
    color: var(--secondary-text-color, #9b9b9b);
  }
`,Ft=({open:e,types:t,onPick:n,onClose:r})=>{let i=E(),a=(0,D.useRef)(null);return(0,D.useEffect)(()=>{let t=a.current;t&&(e&&!t.open&&t.isConnected&&t.showModal(),!e&&t.open&&t.close())}),(0,O.jsx)(Pt,{ref:a,tabIndex:-1,onCancel:e=>{e.preventDefault(),r()},onClick:e=>e.target===e.currentTarget&&r(),children:e&&(0,O.jsxs)(O.Fragment,{children:[(0,O.jsx)(`h2`,{children:i(`pick_tile`)}),(0,O.jsx)(`p`,{className:`muted`,children:i(`pick_tile_hint`)}),(0,O.jsx)(`div`,{className:`types`,children:t.map(e=>(0,O.jsxs)(`button`,{type:`button`,className:`type`,onClick:()=>n(e.type),children:[(0,O.jsx)(`span`,{className:`icon`,children:(0,O.jsx)(x,{icon:e.icon})}),(0,O.jsx)(`span`,{className:`name`,children:i(e.label)}),(0,O.jsx)(`span`,{className:`description`,children:i(e.description)})]},e.type))}),(0,O.jsx)(`div`,{className:`actions`,children:(0,O.jsx)(k,{appearance:`plain`,onClick:r,children:i(`cancel`)})})]})})},It=({value:e,onChange:t})=>{let n=E(),r=H(),i=g();return r?(0,O.jsx)(V,{selector:{select:{mode:`dropdown`,custom_value:!0,options:[...e&&!i.some(t=>t.id===e)?[{value:e,label:e}]:[],...i.map(e=>({value:e.id,label:e.name}))]}},value:e,label:n(`media_preset_app_id`),helper:n(`media_preset_app_hint`),onChange:e=>t(typeof e==`string`?e:``)}):(0,O.jsxs)(P,{children:[(0,O.jsx)(`span`,{className:`label`,children:n(`media_preset_app_id`)}),(0,O.jsx)(`input`,{type:`text`,list:`bwd-apps`,value:e,onChange:e=>t(e.target.value)}),(0,O.jsx)(`datalist`,{id:`bwd-apps`,children:i.map(e=>(0,O.jsx)(`option`,{value:e.id,children:e.name},e.id))}),(0,O.jsx)(`small`,{children:n(`media_preset_app_hint`)})]})},Lt=({preset:e,onChange:t})=>{let n=E(),r=p(e.entity||void 0),i=Array.isArray(r?.attributes.source_list)?r.attributes.source_list:[];return e.kind===`run`?null:e.kind===`source`&&i.length?(0,O.jsx)(K,{label:n(`media_preset_value`),value:e.value,options:[...new Set([...e.value?[e.value]:[],...i])].map(e=>({value:e,label:e})),onChange:t}):e.kind===`app`?(0,O.jsx)(It,{value:e.value,onChange:t}):(0,O.jsx)(U,{label:n(`media_preset_value`),value:e.value,onChange:t})},Rt={bed:7,subs:2,heights:4},zt=({tile:e,onChange:t})=>{let r=E(),i=me(e.entity,e.options),o=n=>t({...e.options,...n}),s=i.layout??Rt,c=e=>o({speakers:m({...s,...e})}),l=e=>e.map(e=>({value:String(e),label:String(e)}));return(0,O.jsxs)(O.Fragment,{children:[(0,O.jsx)(Y,{label:r(`media_players`),hint:r(`media_players_hint`),domains:[`media_player`],max:6,value:i.players.filter(t=>t!==e.entity),onChange:e=>o({players:e})}),(0,O.jsxs)(F,{children:[(0,O.jsx)(J,{label:r(`media_power_entity`),hint:r(`media_power_entity_hint`),domains:a,value:typeof e.options.power==`string`?e.options.power:``,onChange:e=>o({power:e})}),(0,O.jsx)(J,{label:r(`media_volume_entity`),hint:r(`media_volume_entity_hint`),domains:[`media_player`],value:typeof e.options.volume==`string`?e.options.volume:``,onChange:e=>o({volume:e})})]}),(0,O.jsx)(K,{label:r(`media_volume_unit`),value:i.volumeUnit,options:oe.map(e=>({value:e,label:r(`media_volume_${e}`)})),onChange:e=>o({volume_unit:e})}),(0,O.jsxs)(P,{as:`div`,children:[(0,O.jsx)(`span`,{className:`label`,children:r(`media_presets`)}),(0,O.jsx)(`small`,{children:r(`media_presets_hint`)})]}),(0,O.jsx)(Q,{items:i.presets,max:8,domains:[`media_player`,`script`,`scene`,`button`,`input_button`],addLabel:r(`add_media_preset`),create:()=>({id:R(),entity:``,name:``,icon:``,kind:`source`,value:``}),extra:(e,t)=>(0,O.jsxs)(O.Fragment,{children:[(0,O.jsx)(K,{label:r(`media_preset_kind`),value:e.kind,options:de.map(e=>({value:e,label:r(`media_preset_${e}`)})),onChange:e=>t({kind:e,value:``})}),(0,O.jsx)(Lt,{preset:e,onChange:e=>t({value:e})})]}),onChange:e=>o({presets:e})}),(0,O.jsxs)(P,{as:`div`,children:[(0,O.jsx)(`span`,{className:`label`,children:r(`media_switches`)}),(0,O.jsx)(`small`,{children:r(`media_switches_hint`)})]}),(0,O.jsx)(U,{label:r(`media_switches_title`),value:i.switchesTitle,onChange:e=>o({switches_title:e})}),(0,O.jsx)(Q,{items:i.switches,max:4,domains:[`switch`,`input_boolean`,`light`],addLabel:r(`add_media_switch`),create:()=>({id:R(),entity:``,name:``,icon:``,subs:[]}),extra:(e,t)=>i.layout&&i.layout.subs>0?(0,O.jsxs)(P,{as:`div`,children:[(0,O.jsx)(`span`,{className:`label`,children:r(`media_switch_subs`)}),(0,O.jsx)(`small`,{children:r(`media_switch_subs_hint`)}),n.slice(0,i.layout.subs).map(n=>(0,O.jsx)(G,{label:r(`speaker_${n}`),value:e.subs.includes(n),onChange:r=>t({subs:r?[...e.subs,n]:e.subs.filter(e=>e!==n)})},n))]}):null,onChange:e=>o({switches:e})}),(0,O.jsxs)(P,{as:`div`,children:[(0,O.jsx)(`span`,{className:`label`,children:r(`media_devices`)}),(0,O.jsx)(`small`,{children:r(`media_devices_hint`)})]}),(0,O.jsx)(Q,{items:i.devices,max:4,domains:[`media_player`,`remote`,`switch`],addLabel:r(`add_media_device`),create:()=>({id:R(),entity:``,name:``,icon:``,info:``}),extra:(e,t)=>(0,O.jsx)(J,{label:r(`media_device_info`),hint:r(`media_device_info_hint`),domains:[`sensor`,`input_text`,`select`],value:e.info,onChange:e=>t({info:e})}),onChange:e=>o({devices:e})}),(0,O.jsxs)(P,{as:`div`,children:[(0,O.jsx)(`span`,{className:`label`,children:r(`media_extra`)}),(0,O.jsx)(`small`,{children:r(`media_extra_hint`)})]}),(0,O.jsx)(J,{label:r(`entity`),domains:[`switch`,`input_boolean`,`light`,`fan`,`script`,`scene`,`button`,`input_button`,`automation`],value:i.extra.entity,onChange:e=>o({extra_entity:e})}),i.extra.entity&&(0,O.jsxs)(F,{children:[(0,O.jsx)(U,{label:r(`name`),hint:r(`name_hint`),value:i.extra.name,onChange:e=>o({extra_name:e})}),(0,O.jsx)(q,{label:r(`icon`),value:i.extra.icon,onChange:e=>o({extra_icon:e})})]}),i.extra.entity&&(0,O.jsx)(U,{label:r(`media_extra_title`),hint:r(`media_extra_title_hint`),value:i.extra.title,onChange:e=>o({extra_title:e})}),(0,O.jsx)(J,{label:r(`media_night_entity`),hint:r(`media_night_entity_hint`),domains:[`switch`,`input_boolean`,`script`],value:i.night,onChange:e=>o({night:e})}),(0,O.jsx)(U,{label:r(`media_night_text`),value:i.nightText,onChange:e=>o({night_text:e})}),(0,O.jsx)(P,{as:`div`,children:(0,O.jsx)(`span`,{className:`label`,children:r(`media_sound_heading`)})}),(0,O.jsxs)(F,{children:[(0,O.jsx)(J,{label:r(`media_mode_entity`),hint:r(`media_mode_entity_hint`),domains:[`sensor`,`select`,`input_text`],value:i.modeEntity,onChange:e=>o({mode_entity:e})}),(0,O.jsx)(J,{label:r(`media_format_entity`),hint:r(`media_format_entity_hint`),domains:[`sensor`,`input_text`],value:i.formatEntity,onChange:e=>o({format_entity:e})})]}),(0,O.jsx)(G,{label:r(`media_layout`),hint:r(`media_layout_hint`),value:i.layout!==null,onChange:e=>o({speakers:e?m(s):``})}),i.layout&&(0,O.jsxs)(O.Fragment,{children:[(0,O.jsxs)(F,{children:[(0,O.jsx)(K,{label:r(`media_layout_bed`),value:String(s.bed),options:l(ge),onChange:e=>c({bed:Number(e)})}),(0,O.jsx)(K,{label:r(`media_layout_subs`),value:String(s.subs),options:l(he),onChange:e=>c({subs:Number(e)})}),(0,O.jsx)(K,{label:r(`media_layout_heights`),value:String(s.heights),options:l(te),onChange:e=>c({heights:Number(e)})})]}),s.heights>0&&(0,O.jsxs)(F,{children:[(0,O.jsx)(K,{label:r(`media_heights_front`),value:i.mounts.front,options:_e.map(e=>({value:e,label:r(`media_mount_${e}`)})),onChange:e=>o({heights_front:e})}),s.heights>=4&&(0,O.jsx)(K,{label:r(`media_heights_rear`),value:i.mounts.rear,options:_e.map(e=>({value:e,label:r(`media_mount_${e}`)})),onChange:e=>o({heights_rear:e})})]}),s.subs>0&&(0,O.jsx)(J,{label:r(`media_sub_output`),hint:r(`media_sub_output_hint`),domains:[`switch`,`binary_sensor`,`input_boolean`],value:i.subOutput,onChange:e=>o({sub_output:e})}),(0,O.jsx)(K,{label:r(`media_sofa`),value:i.sofa,options:ae.map(e=>({value:e,label:r(`media_sofa_${e}`)})),onChange:e=>o({sofa:e})}),(0,O.jsx)(G,{label:r(`media_listener`),hint:r(`media_listener_hint`),value:i.listener,onChange:e=>o({listener:e})}),i.listener&&i.sofa!==`none`&&(0,O.jsx)(G,{label:r(`media_listener_sleeps`),hint:r(`media_listener_sleeps_hint`),value:i.sleeps,onChange:e=>o({listener_sleeps:e})}),(0,O.jsx)(J,{label:r(`media_tv_entity`),hint:r(`media_tv_entity_hint`),domains:[`media_player`,`switch`,`binary_sensor`,`remote`],value:i.tvEntity,onChange:e=>o({tv_entity:e})}),(0,O.jsx)(K,{label:r(`media_screen`),value:i.screen,options:b.map(e=>({value:e,label:r(`media_screen_${e}`)})),onChange:e=>o({screen:e})}),i.screen===`image`&&(0,O.jsx)(tt,{label:r(`media_screen_picture`),hint:r(`media_screen_picture_hint`),accept:[`image/*`],value:i.screenImage,onChange:e=>o({screen_image:e})}),i.screen!==`off`&&(0,O.jsxs)(F,{children:[(0,O.jsx)(W,{label:r(`media_screen_scale`),hint:r(`media_screen_scale_hint`),value:i.screenScale,min:30,max:100,unit:`%`,onChange:e=>o({screen_scale:Math.max(30,Math.min(100,e))})}),(0,O.jsx)(K,{label:r(`media_screen_fit`),value:i.screenFit,options:le.map(e=>({value:e,label:r(`media_screen_fit_${e}`)})),onChange:e=>o({screen_fit:e})})]}),(0,O.jsx)(G,{label:r(`media_walls`),value:i.walls,onChange:e=>o({hide_walls:!e})}),(0,O.jsx)(G,{label:r(`media_room_movable`),hint:r(`media_room_movable_hint`),value:i.roomMovable,onChange:e=>o({room_movable:e})})]})]})},Bt=({value:e,onChange:t})=>{let[n,r]=(0,D.useState)(()=>Object.keys(e).length?JSON.stringify(e):``),[i,a]=(0,D.useState)(!1),o=E();return(0,O.jsxs)(P,{children:[(0,O.jsx)(`span`,{className:`label`,children:o(`options_json`)}),(0,O.jsx)(`input`,{type:`text`,value:n,placeholder:`{"hours": 24, "color": "#03a9f4"}`,onChange:e=>{r(e.target.value);try{let n=e.target.value.trim()?JSON.parse(e.target.value):{};if(n&&typeof n==`object`&&!Array.isArray(n)){a(!1),t(n);return}}catch{}a(!0)}}),i&&(0,O.jsx)(`small`,{children:o(`json_invalid`)})]})},Vt=({value:e,entry:t,onChange:n})=>{let r=E(),i=Mt(t);return(0,O.jsx)(J,{label:r(`entity`),value:e,domains:t?.domains,integration:t?.pickerIntegration,include:i,onChange:n})},Ht=({tile:e})=>{let t=E(),n=p(e.entity||void 0),r=y[e.type],i=e.name||n?.attributes.friendly_name||e.entity||(r?t(r.label):e.type);return(0,O.jsxs)(O.Fragment,{children:[(0,O.jsx)(x,{className:`icon`,icon:e.icon||r?.icon||`mdi:square-rounded-outline`}),(0,O.jsxs)(`span`,{className:`text`,children:[(0,O.jsx)(`span`,{children:i}),(0,O.jsxs)(`span`,{className:`secondary`,children:[r?t(r.label):e.type,` · `,e.w,` × `,e.h]})]})]})},Ut=({tiles:e,columns:t,rows:n,onChange:a})=>{let o=E(),s=jt(),[c,l]=(0,D.useState)(!1),u=(t,n)=>a(B(e,t,{...e[t],...n}));return(0,O.jsxs)(O.Fragment,{children:[e.length===0&&(0,O.jsxs)(Ne,{children:[(0,O.jsx)(x,{icon:`mdi:view-grid-plus-outline`}),(0,O.jsx)(`span`,{children:o(`empty_tiles`)})]}),e.map((c,l)=>{let d=y[c.type];return(0,O.jsxs)(Me,{open:!c.entity&&d?.needsEntity!==!1||void 0,children:[(0,O.jsxs)(`summary`,{children:[(0,O.jsx)(Ht,{tile:c}),(0,O.jsx)(`span`,{onClick:e=>e.preventDefault(),children:(0,O.jsx)(X,{index:l,length:e.length,onMove:t=>a(L(e,l,t)),onRemove:()=>a(e.filter((e,t)=>t!==l)),onDuplicate:()=>a([...e.slice(0,l+1),{...c,id:R()},...e.slice(l+1)])})})]}),(0,O.jsxs)(`div`,{className:`fold-body`,children:[(0,O.jsx)(K,{label:o(`type`),value:c.type,options:[...s.map(e=>({value:e.type,label:o(e.label)})),...s.some(e=>e.type===c.type)?[]:[{value:c.type,label:d?o(d.label):c.type}]],onChange:e=>{let r=y[e]?.size??[1,1];u(l,{type:e,w:Math.min(r[0],t),h:Math.min(r[1],n)})}}),d?.needsEntity!==!1&&(0,O.jsx)(Vt,{value:c.entity,entry:d,onChange:e=>u(l,{entity:e})}),(0,O.jsxs)(F,{children:[(0,O.jsx)(U,{label:o(`name`),hint:o(`name_hint`),value:c.name,onChange:e=>u(l,{name:e})}),(0,O.jsx)(q,{label:o(`icon`),value:c.icon,onChange:e=>u(l,{icon:e})})]}),(0,O.jsxs)(F,{children:[(0,O.jsx)(W,{label:o(`width`),value:c.w,min:1,max:t,onChange:e=>u(l,{w:Math.max(1,Math.min(t,e))})}),(0,O.jsx)(W,{label:o(`height`),value:c.h,min:1,max:n,onChange:e=>u(l,{h:Math.max(1,Math.min(n,e))})})]}),c.type===`sensor`&&(0,O.jsx)(Bt,{value:c.options,onChange:e=>u(l,{options:e})}),c.type===`entity`&&c.entity.startsWith(`light.`)&&(0,O.jsx)(G,{label:o(`light_hide_presets`),hint:o(`light_hide_presets_hint`),value:c.options.hide_presets===!0,onChange:e=>u(l,{options:{...c.options,hide_presets:e}})}),(c.type===`cover`||c.type===`adaptive_cover`)&&(0,O.jsx)(K,{label:o(`cover_active_when`),hint:o(`cover_active_when_hint`),value:i.includes(c.options.active_when)?String(c.options.active_when):`open`,options:i.map(e=>({value:e,label:o(`cover_active_${e}`)})),onChange:e=>u(l,{options:{...c.options,active_when:e}})}),(c.type===`cover`||c.type===`adaptive_cover`)&&(0,O.jsx)(G,{label:o(`cover_stop_only_moving`),hint:o(`cover_stop_only_moving_hint`),value:c.options.stop_only_moving===!0,onChange:e=>u(l,{options:{...c.options,stop_only_moving:e}})}),(c.type===`cover`||c.type===`adaptive_cover`)&&(0,O.jsx)(Ye,{label:o(`cover_presets`),hint:o(`cover_presets_hint`),suggestions:[`0`,`25`,`50`,`75`,`100`],value:r(c.options.positions).map(String),onChange:e=>u(l,{options:{...c.options,positions:r(e)}})}),c.type===`better_lighting`&&(0,O.jsx)(Nt,{tile:c,onChange:e=>u(l,{options:e})}),c.type===`media`&&(0,O.jsx)(zt,{tile:c,onChange:e=>u(l,{options:e})})]})]},c.id)}),(0,O.jsx)(`div`,{children:(0,O.jsx)(k,{icon:`mdi:plus`,appearance:`filled`,disabled:e.length>=w.tiles,onClick:()=>l(!0),children:o(`add_tile`)})}),(0,O.jsx)(Ft,{open:c,types:s,onClose:()=>l(!1),onPick:r=>{l(!1);let i=y[r]?.size??[1,1];a([...e,{id:R(),type:r,entity:``,name:``,icon:``,w:Math.min(i[0],t),h:Math.min(i[1],n),options:{}}])}})]})},Wt=()=>({id:R(),name:``,icon:``,status:[],status_icons:{},columns:2,rows:2,square:!0,tiles:[]}),Gt=()=>({id:R(),columns:[75,25],rows:[50,50],sections:[]}),Kt=e=>({...z(e),id:R(),sections:e.sections.map(e=>({...z(e),id:R(),tiles:e.tiles.map(e=>({...e,id:R()}))}))}),qt=e=>{let t=e.split(/[,/ ]+/).filter(Boolean).map(Number);return t.length&&t.length<=3&&t.every(e=>Number.isFinite(e)&&e>0)?t:null},Jt=({label:e,hint:t,value:n,onChange:r})=>(0,O.jsx)(U,{label:e,hint:t,value:n.join(`, `),onChange:e=>{let t=qt(e);t&&r(t)}}),Yt=({draft:e,update:t,open:n})=>{let r=E(),i=e.pages,a=n=>t({...e,pages:n});return(0,O.jsxs)(O.Fragment,{children:[(0,O.jsx)(Z,{title:r(`tab_pages`),lead:r(`lead_pages`)}),(0,O.jsx)(je,{children:i.map((e,t)=>(0,O.jsxs)(`li`,{children:[(0,O.jsxs)(`button`,{type:`button`,className:`open`,onClick:()=>n({kind:`page`,page:t}),children:[(0,O.jsx)(x,{className:`icon`,icon:`mdi:book-open-page-variant-outline`}),(0,O.jsxs)(`span`,{className:`text`,children:[(0,O.jsx)(`span`,{children:r(`page_n`,{n:t+1})}),(0,O.jsx)(`span`,{className:`secondary`,children:e.sections.map(e=>e.name).filter(Boolean).join(` · `)||r(`no_sections`)})]})]}),(0,O.jsx)(X,{index:t,length:i.length,onMove:e=>a(L(i,t,e)),onDuplicate:i.length<w.pages?()=>a([...i.slice(0,t+1),Kt(e),...i.slice(t+1)]):void 0,onRemove:()=>i.length>1&&a(i.filter((e,n)=>n!==t))})]},e.id))}),(0,O.jsx)(`div`,{children:(0,O.jsx)(k,{icon:`mdi:plus`,appearance:`filled`,disabled:i.length>=w.pages,onClick:()=>{a([...i,Gt()]),n({kind:`page`,page:i.length})},children:r(`add_page`)})})]})},Xt=({draft:e,update:t,open:n,page:r})=>{let i=E(),a=e.pages[r],o=n=>t({...e,pages:B(e.pages,r,{...a,...n})}),s=a.columns.length*a.rows.length;return(0,O.jsxs)(O.Fragment,{children:[(0,O.jsx)(Z,{title:i(`page_n`,{n:r+1}),lead:i(`lead_page`)}),(0,O.jsxs)(N,{children:[(0,O.jsx)(`h3`,{children:i(`layout`)}),(0,O.jsxs)(F,{children:[(0,O.jsx)(Jt,{label:i(`column_split`),hint:i(`split_hint`),value:a.columns,onChange:e=>o({columns:e})}),(0,O.jsx)(Jt,{label:i(`row_split`),hint:i(`split_hint`),value:a.rows,onChange:e=>o({rows:e})})]})]}),(0,O.jsxs)(N,{children:[(0,O.jsx)(`h3`,{children:i(`sections`)}),(0,O.jsx)(`p`,{children:i(`sections_hint`,{cells:s})}),(0,O.jsx)(je,{children:Array.from({length:s},(e,t)=>{let s=a.sections[t];return s?(0,O.jsxs)(`li`,{children:[(0,O.jsxs)(`button`,{type:`button`,className:`open`,onClick:()=>n({kind:`section`,page:r,section:t}),children:[(0,O.jsx)(x,{className:`icon`,icon:s.icon||`mdi:view-grid-outline`}),(0,O.jsxs)(`span`,{className:`text`,children:[(0,O.jsx)(`span`,{children:s.name||i(`section_n`,{n:t+1})}),(0,O.jsxs)(`span`,{className:`secondary`,children:[i(`tiles_count`,{count:s.tiles.length}),` · `,s.columns,` × `,s.rows]})]})]}),(0,O.jsx)(X,{index:t,length:a.sections.length,onMove:e=>o({sections:L(a.sections,t,e)}),onRemove:()=>o({sections:a.sections.filter((e,n)=>n!==t)})})]},s.id):(0,O.jsx)(`li`,{children:(0,O.jsxs)(`button`,{type:`button`,className:`open`,onClick:()=>{let e=[...a.sections];for(;e.length<=t;)e.push(Wt());o({sections:e}),n({kind:`section`,page:r,section:t})},children:[(0,O.jsx)(x,{className:`icon`,icon:`mdi:plus-box-outline`}),(0,O.jsxs)(`span`,{className:`text`,children:[(0,O.jsx)(`span`,{children:i(`add_section`)}),(0,O.jsx)(`span`,{className:`secondary`,children:i(`cell_n`,{n:t+1})})]})]})},`empty-${t}`)})})]})]})},Zt=({draft:e,update:t,page:n,section:r})=>{let i=E(),a=e.pages[n],o=a.sections[r],s=i=>t({...e,pages:B(e.pages,n,{...a,sections:B(a.sections,r,{...o,...i})})});return(0,O.jsxs)(O.Fragment,{children:[(0,O.jsx)(Z,{title:o.name||i(`section_n`,{n:r+1}),lead:i(`lead_section`)}),(0,O.jsxs)(N,{children:[(0,O.jsx)(`h3`,{children:i(`section_header`)}),(0,O.jsxs)(F,{children:[(0,O.jsx)(U,{label:i(`name`),value:o.name,onChange:e=>s({name:e})}),(0,O.jsx)(q,{label:i(`icon`),value:o.icon,onChange:e=>s({icon:e})})]}),(0,O.jsx)(P,{as:`div`,children:(0,O.jsx)(`span`,{className:`label`,children:i(`status_entities`)})}),(0,O.jsx)(Q,{items:o.status.map((e,t)=>({id:`status-${t}`,entity:e,name:``,icon:o.status_icons?.[e]??``})),max:w.sectionStatus,domains:[`sensor`,`binary_sensor`],addLabel:i(`add_status`),named:!1,onChange:e=>s({status:e.map(e=>e.entity),status_icons:Object.fromEntries(e.filter(e=>e.entity&&e.icon).map(e=>[e.entity,e.icon]))})})]}),(0,O.jsxs)(N,{children:[(0,O.jsx)(`h3`,{children:i(`grid`)}),(0,O.jsxs)(F,{children:[(0,O.jsx)(W,{label:i(`columns`),value:o.columns,min:1,max:w.sectionCells,onChange:e=>s({columns:e})}),(0,O.jsx)(W,{label:i(`rows`),value:o.rows,min:1,max:w.sectionCells,onChange:e=>s({rows:e})})]}),(0,O.jsx)(G,{label:i(`square_cells`),hint:i(`square_cells_hint`),value:o.square,onChange:e=>s({square:e})})]}),(0,O.jsxs)(N,{children:[(0,O.jsx)(`h3`,{children:i(`tiles`)}),(0,O.jsx)(Ut,{tiles:o.tiles,columns:o.columns,rows:o.rows,onChange:e=>s({tiles:e})})]})]})},Qt=({draft:e,update:t,open:n})=>{let r=E(),i=e.buttons,a=n=>t({...e,buttons:n});return(0,O.jsxs)(O.Fragment,{children:[(0,O.jsx)(Z,{title:r(`tab_buttons`),lead:r(`lead_buttons`)}),i.length>0&&(0,O.jsx)(je,{children:i.map((e,t)=>(0,O.jsxs)(`li`,{children:[(0,O.jsxs)(`button`,{type:`button`,className:`open`,onClick:()=>n({kind:`button`,button:t}),children:[(0,O.jsx)(x,{className:`icon`,icon:e.icon||`mdi:gesture-tap`}),(0,O.jsxs)(`span`,{className:`text`,children:[(0,O.jsx)(`span`,{children:e.name||r(`button_n`,{n:t+1})}),(0,O.jsx)(`span`,{className:`secondary`,children:r(`tiles_count`,{count:e.tiles.length})})]})]}),(0,O.jsx)(X,{index:t,length:i.length,onMove:e=>a(L(i,t,e)),onRemove:()=>a(i.filter((e,n)=>n!==t))})]},e.id))}),(0,O.jsx)(`div`,{children:(0,O.jsxs)(k,{icon:`mdi:plus`,appearance:`filled`,disabled:i.length>=w.buttons,onClick:()=>{a([...i,{id:R(),name:``,icon:`mdi:gesture-tap`,columns:4,tiles:[]}]),n({kind:`button`,button:i.length})},children:[r(`add_button`),` (`,i.length,`/`,w.buttons,`)`]})})]})},$t=({draft:e,update:t,button:n})=>{let r=E(),i=e.buttons[n],a=r=>t({...e,buttons:B(e.buttons,n,{...i,...r})});return(0,O.jsxs)(O.Fragment,{children:[(0,O.jsx)(Z,{title:i.name||r(`button_n`,{n:n+1}),lead:r(`lead_button`)}),(0,O.jsxs)(N,{children:[(0,O.jsxs)(F,{children:[(0,O.jsx)(U,{label:r(`name`),value:i.name,onChange:e=>a({name:e})}),(0,O.jsx)(q,{label:r(`icon`),value:i.icon,onChange:e=>a({icon:e})})]}),(0,O.jsx)(W,{label:r(`columns`),hint:r(`button_columns_hint`),value:i.columns,min:1,max:w.sectionCells,onChange:e=>a({columns:e})})]}),(0,O.jsxs)(N,{children:[(0,O.jsx)(`h3`,{children:r(`tiles`)}),(0,O.jsx)(Ut,{tiles:i.tiles,columns:i.columns,rows:w.sectionCells,onChange:e=>a({tiles:e})})]})]})},$=[{id:`tab-10`,label:`10″ tablet · 1280×800`,width:1280,height:800},{id:`tab-11`,label:`11″ tablet · 1194×834`,width:1194,height:834},{id:`tab-12`,label:`12″ tablet · 1366×1024`,width:1366,height:1024},{id:`fhd`,label:`Full HD · 1920×1080`,width:1920,height:1080},{id:`small`,label:`7″ panel · 1024×600`,width:1024,height:600}],en=({view:e,dashboards:t,...n})=>{switch(e.kind){case`general`:return(0,O.jsx)(gt,{...n});case`sidebar`:return(0,O.jsx)(Dt,{...n,part:e.part});case`pages`:return(0,O.jsx)(Yt,{...n});case`page`:return(0,O.jsx)(Xt,{...n,page:e.page});case`section`:return(0,O.jsx)(Zt,{...n,page:e.page,section:e.section});case`buttons`:return(0,O.jsx)(Qt,{...n});case`button`:return(0,O.jsx)($t,{...n,button:e.button});case`users`:return(0,O.jsx)(st,{dashboards:t});case`json`:return(0,O.jsx)(At,{...n},n.draft.id)}},tn=()=>{let e=E(),t=l(),{narrow:n}=ue(),[r,i]=(0,D.useState)(null),[a,o]=(0,D.useState)(null),[s,c]=(0,D.useState)(!1),[u,d]=(0,D.useState)(``),[ee,p]=(0,D.useState)({kind:`general`}),[te,m]=(0,D.useState)(()=>new Set),[ne,h]=(0,D.useState)(!1),[re,g]=(0,D.useState)(!1),[ie,ae]=(0,D.useState)(!1),[_,v]=(0,D.useState)(!1),[y,oe]=(0,D.useState)($[0].id),[b,se]=(0,D.useState)(!1),ce=$.find(e=>e.id===y)??$[0],S=(0,D.useCallback)((e,t)=>{o(z(e.dashboards[t]??e.dashboards.default)),c(!1)},[]);(0,D.useEffect)(()=>{t?.sendMessagePromise({type:`better_wall_dashboard/document`}).then(e=>{i(e),S(e,`default`)}).catch(e=>d(String(e?.message??e)))},[t,S]),(0,D.useEffect)(()=>{if(!s)return;let e=e=>e.preventDefault();return window.addEventListener(`beforeunload`,e),()=>window.removeEventListener(`beforeunload`,e)},[s]);let le=(0,D.useCallback)(e=>{o(e),c(!0),d(``)},[]),C=(0,D.useCallback)((e,t)=>{p(e),m(n=>new Set([...n,...xe(e),...t?[t]:[]])),h(!1),g(!1),v(!1)},[]),de=(0,D.useCallback)(e=>{m(t=>{let n=new Set(t);return n.delete(e)||n.add(e),n})},[]),{confirm:fe,dialog:w}=ft(),T=async()=>!s||fe({title:e(`discard_title`),text:e(`discard_text`),confirm:e(`discard`),danger:!0}),pe=async()=>{if(t&&a){d(e(`saving`));try{let n=await t.sendMessagePromise({type:`better_wall_dashboard/save_dashboard`,dashboard:a});i(e=>e&&{...e,dashboards:{...e.dashboards,[n.dashboard.id]:n.dashboard}}),o(z(n.dashboard)),c(!1),d(e(`saved`))}catch(e){d(String(e?.message??e))}}},me=async()=>{r&&a&&await T()&&(r.dashboards[a.id]?S(r,a.id):S(r,`default`),d(``))},he=async e=>{r&&await T()&&(S(r,e),C({kind:`general`}))},ge=async t=>{if(g(!1),!r||!await T())return;let n=z(t??r.dashboards.default);o({...n,id:R(),name:t?`${t.name} (2)`:e(`new_dashboard`)}),c(!0),C({kind:`general`})},_e=async()=>{if(g(!1),!t||!a)return;let n=e=>ht(e)||d(e);try{let r=await t.sendMessagePromise({type:`better_wall_dashboard/reload_tablets`,dashboard_id:a.id});n(e(`tablets_reloaded`,{count:r.reached}))}catch(e){n(String(e?.message??e))}},ve=async()=>{if(g(!1),!t||!a||!r||a.id==="default"||!await fe({title:e(`delete_title`,{name:a.name}),text:e(`confirm_delete`,{name:a.name}),confirm:e(`delete`),danger:!0}))return;r.dashboards[a.id]&&await t.sendMessagePromise({type:`better_wall_dashboard/delete_dashboard`,dashboard_id:a.id});let n={...r.dashboards};delete n[a.id];let o={...r,dashboards:n};i(o),S(o,`default`),C({kind:`general`})},ye=(0,D.useMemo)(()=>Object.values(r?.dashboards??{}),[r]),A=(0,D.useMemo)(()=>{let e=Object.values(r?.dashboards??{}).map(e=>({id:e.id,name:e.name}));return a&&!e.some(e=>e.id===a.id)&&e.push({id:a.id,name:a.name}),e.map(e=>e.id===a?.id?{...e,name:a.name}:e)},[r,a]);if(!a)return(0,O.jsxs)(Ce,{children:[(0,O.jsx)(we,{"data-narrow":n,children:(0,O.jsx)(`span`,{className:`app-title`,children:e(`editor_title`)})}),(0,O.jsx)(`p`,{style:{padding:24},children:u||e(`loading`)})]});let j=be(ee,a),De=Se(j,{label:t=>e(t),page:t=>e(`page_n`,{n:t+1}),section:(t,n)=>a.pages[t]?.sections[n]?.name||e(`section_n`,{n:n+1}),button:t=>a.buttons[t]?.name||e(`button_n`,{n:t+1})}),Oe=j.kind===`page`||j.kind===`section`?j.page:void 0,N=j.kind!==`users`;return(0,O.jsx)(rt,{children:(0,O.jsxs)(Ce,{children:[(0,O.jsxs)(we,{"data-narrow":n,children:[(0,O.jsx)(M,{type:`button`,className:`only-narrow`,"aria-label":e(`menu`),onClick:e=>f(e.currentTarget),children:(0,O.jsx)(x,{icon:`mdi:menu`})}),(0,O.jsx)(M,{type:`button`,className:`only-drawer`,"aria-label":e(`editor_menu`),onClick:()=>h(!0),children:(0,O.jsx)(x,{icon:`mdi:format-list-bulleted`})}),(0,O.jsxs)(`div`,{className:`titles`,children:[(0,O.jsx)(`span`,{className:`app-title`,children:e(`editor_title`)}),(0,O.jsxs)(`nav`,{"aria-label":e(`editor_menu`),children:[(0,O.jsx)(`button`,{type:`button`,onClick:()=>C({kind:`general`}),children:a.name}),De.map((e,t)=>(0,O.jsxs)(`span`,{children:[`› `,e.view?(0,O.jsx)(`button`,{type:`button`,onClick:()=>C(e.view),children:e.label}):e.label]},t))]})]}),(0,O.jsx)(`span`,{className:`spacer`}),(0,O.jsx)(M,{type:`button`,className:`only-no-preview`,"aria-pressed":_,"aria-label":e(`preview`),"data-tip":e(`preview`),onClick:()=>v(e=>!e),children:(0,O.jsx)(x,{icon:_?`mdi:form-select`:`mdi:tablet-dashboard`})}),(0,O.jsxs)(Te,{children:[(0,O.jsx)(M,{type:`button`,"aria-label":e(`more`),"aria-expanded":re,onClick:()=>g(e=>!e),children:(0,O.jsx)(x,{icon:`mdi:dots-vertical`})}),re&&(0,O.jsxs)(`div`,{className:`menu`,role:`menu`,children:[(0,O.jsxs)(`button`,{type:`button`,role:`menuitem`,onClick:()=>void ge(),children:[(0,O.jsx)(x,{icon:`mdi:plus`}),` `,e(`new_dashboard`)]}),(0,O.jsxs)(`button`,{type:`button`,role:`menuitem`,onClick:()=>void ge(a),children:[(0,O.jsx)(x,{icon:`mdi:content-copy`}),` `,e(`duplicate`)]}),(0,O.jsxs)(`button`,{type:`button`,role:`menuitem`,onClick:()=>void _e(),children:[(0,O.jsx)(x,{icon:`mdi:tablet-cellphone`}),` `,e(`reload_tablets`)]}),(0,O.jsxs)(`button`,{type:`button`,role:`menuitem`,onClick:()=>C({kind:`json`}),children:[(0,O.jsx)(x,{icon:`mdi:code-json`}),` `,e(`edit_json`)]}),(0,O.jsxs)(`button`,{type:`button`,role:`menuitem`,className:`danger`,disabled:a.id==="default",onClick:()=>void ve(),children:[(0,O.jsx)(x,{icon:`mdi:delete-outline`}),` `,e(`delete_dashboard`)]}),(0,O.jsx)(`hr`,{}),(0,O.jsxs)(`button`,{type:`button`,role:`menuitem`,onClick:()=>{g(!1),ae(!0)},children:[(0,O.jsx)(x,{icon:`mdi:information-outline`}),` `,e(`about`)]})]})]})]}),(0,O.jsxs)(Ee,{children:[(0,O.jsx)(ke,{$open:ne,onClick:()=>h(!1)}),(0,O.jsx)(Ie,{dashboards:A,draft:a,view:j,expanded:te,open:ne,onToggle:de,onOpen:C,onSwitch:e=>void he(e),onNewDashboard:()=>void ge()}),(0,O.jsxs)(Ae,{$hidden:_,children:[(0,O.jsx)(`div`,{className:`screen-body`,children:(0,O.jsx)(pt.Provider,{value:ye,children:(0,O.jsx)(en,{view:j,dashboards:A,draft:a,update:le,open:C})})}),N&&(0,O.jsxs)(`div`,{className:`screen-foot`,children:[(0,O.jsx)(`span`,{className:`status`,children:s?e(`unsaved`):u}),(0,O.jsxs)(`span`,{className:`end`,children:[(0,O.jsx)(k,{appearance:`plain`,disabled:!s,onClick:()=>void me(),children:e(`discard`)}),(0,O.jsx)(k,{appearance:`accent`,icon:`mdi:content-save-outline`,disabled:!s,onClick:pe,children:e(`save`)})]})]})]}),(0,O.jsxs)(Pe,{$shown:_,children:[(0,O.jsxs)(`div`,{className:`preview-bar`,children:[(0,O.jsx)(`h2`,{children:e(`preview`)}),(0,O.jsx)(K,{label:e(`device`),value:y,options:$.map(e=>({value:e.id,label:e.label})),onChange:oe}),(0,O.jsx)(M,{type:`button`,style:{color:`var(--secondary-text-color)`},"aria-label":e(b?`landscape`:`portrait`),"data-tip":e(b?`landscape`:`portrait`),onClick:()=>se(e=>!e),children:(0,O.jsx)(x,{icon:b?`mdi:phone-rotate-landscape`:`mdi:phone-rotate-portrait`})})]}),(0,O.jsx)(`div`,{className:`stage`,children:(0,O.jsx)(ze,{dashboard:a,device:ce,portrait:b,page:Oe})})]})]}),(0,O.jsx)(ut,{open:ie,onClose:()=>ae(!1)}),w]})})};export{tn as default};