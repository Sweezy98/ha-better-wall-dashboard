import{A as e,B as t,C as n,D as r,E as i,F as a,I as o,L as s,M as c,N as l,O as u,P as d,R as f,S as p,T as ee,_ as m,a as h,b as g,c as _,d as te,f as v,g as ne,h as re,i as y,j as ie,k as ae,l as oe,m as se,n as b,o as ce,p as le,r as ue,s as x,t as de,u as S,v as fe,w as C,x as w,y as pe,z as me}from"./boot-B6KOymY1.js";var T=t(me(),1),E=t(f(),1),he=o.button`
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
  ${({$appearance:e,$danger:t})=>{let n=t?`var(--error-color, #db4437)`:`var(--primary-color, #03a9f4)`;return e===`accent`?a`
        background: ${n};
        color: var(--text-primary-color, #fff);
      `:e===`filled`?a`
        background: color-mix(in srgb, ${n} 16%, transparent);
        color: ${n};
      `:a`
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
`,ge=()=>()=>{},D=({children:e,onClick:t,icon:n,appearance:r=`plain`,danger:i=!1,disabled:a,title:o})=>{let s=(0,T.useSyncExternalStore)(ge,()=>!!customElements.get(`ha-button`)),c=(0,E.jsxs)(E.Fragment,{children:[n&&(0,E.jsx)(`span`,{slot:`start`,style:{display:`inline-flex`},children:(0,E.jsx)(C,{icon:n,size:`18px`})}),e]});return s?(0,T.createElement)(`ha-button`,{appearance:r,variant:i?`danger`:`brand`,disabled:a||void 0,"data-tip":o,onClick:t},c):(0,E.jsx)(he,{type:`button`,$appearance:r,$danger:i,disabled:a,"data-tip":o,onClick:t,children:c})},O=[{part:`clock`,icon:`mdi:clock-outline`,label:`clock`},{part:`status`,icon:`mdi:wifi-star`,label:`nav_status`},{part:`climate`,icon:`mdi:home-thermometer-outline`,label:`room_climate`},{part:`persons`,icon:`mdi:account-multiple-outline`,label:`persons`},{part:`openings`,icon:`mdi:window-open-variant`,label:`openings`},{part:`travel`,icon:`mdi:car-clock`,label:`travel_time`},{part:`quick`,icon:`mdi:gesture-tap-button`,label:`quick_actions`},{part:`calendar`,icon:`mdi:calendar-month-outline`,label:`calendar`},{part:`weather`,icon:`mdi:weather-partly-cloudy`,label:`weather`},{part:`notifications`,icon:`mdi:bell-outline`,label:`notifications`},{part:`system`,icon:`mdi:chart-box-outline`,label:`system_stats`}];function _e(e,t){switch(e.kind){case`page`:return e.page<t.pages.length?e:{kind:`pages`};case`section`:{let n=t.pages[e.page];return n?e.section<n.sections.length?e:{kind:`page`,page:e.page}:{kind:`pages`}}case`button`:return e.button<t.buttons.length?e:{kind:`buttons`};default:return e}}function ve(e){switch(e.kind){case`sidebar`:return[`sidebar`];case`page`:return[`pages`];case`section`:return[`pages`,`page-${e.page}`];case`button`:return[`buttons`];default:return[]}}function k(e,t){return JSON.stringify(e)===JSON.stringify(t)}function ye(e,t){switch(e.kind){case`general`:return[{label:t.label(`tab_general`)}];case`sidebar`:{let n=O.find(t=>t.part===e.part);return[{label:t.label(`tab_sidebar`)},{label:t.label(n?.label??e.part)}]}case`pages`:return[{label:t.label(`tab_pages`)}];case`page`:return[{label:t.label(`tab_pages`),view:{kind:`pages`}},{label:t.page(e.page)}];case`section`:return[{label:t.label(`tab_pages`),view:{kind:`pages`}},{label:t.page(e.page),view:{kind:`page`,page:e.page}},{label:t.section(e.page,e.section)}];case`buttons`:return[{label:t.label(`tab_buttons`)}];case`button`:return[{label:t.label(`tab_buttons`),view:{kind:`buttons`}},{label:t.button(e.button)}];case`users`:return[{label:t.label(`tab_users`)}];case`json`:return[{label:t.label(`tab_json`)}]}}var be=o.div`
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
`,xe=o.header`
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
`,A=o.button`
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
`,Se=o.div`
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
`,Ce=o.div`
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
`,j=o.div`
  background: var(--card-background-color, #1c1c1c);
  border-radius: var(--ha-card-border-radius, 12px);
  box-shadow: var(--ha-card-box-shadow, none);
  border: 1px solid var(--ha-card-border-color, var(--divider-color, rgba(225, 225, 225, 0.12)));
  box-sizing: border-box;
  min-width: 0;
  min-height: 0;
`,we=o(j)`
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
`,Te=o.div`
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
`,Ee=o(j)`
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
`,M=o.section`
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
`,N=o.ul`
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
`,P=o.details`
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
`,De=o.div`
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
`,Oe=o(j)`
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
`,ke=o.dialog`
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
`,Ae=({dashboards:e,draft:t,view:n,expanded:r,open:i,onToggle:a,onOpen:o,onSwitch:s,onNewDashboard:c})=>{let l=d(),u=(e,t,r)=>(0,E.jsx)(`li`,{children:(0,E.jsxs)(`button`,{type:`button`,"aria-current":k(n,e)?`page`:void 0,onClick:()=>o(e),children:[(0,E.jsx)(C,{className:`icon`,icon:r}),(0,E.jsx)(`span`,{className:`grow`,children:t})]})},JSON.stringify(e)),f=(e,t,i,s,c)=>{let l=r.has(e);return(0,E.jsxs)(`li`,{children:[(0,E.jsxs)(`button`,{type:`button`,"aria-expanded":l,"aria-current":k(n,t)?`page`:void 0,onClick:()=>o(t,e),children:[(0,E.jsx)(C,{className:`icon`,icon:s}),(0,E.jsx)(`span`,{className:`grow`,children:i}),(0,E.jsx)(`span`,{className:`twist`,"data-open":l,role:`button`,"aria-label":i,onClick:t=>{t.stopPropagation(),a(e)},children:(0,E.jsx)(C,{icon:`mdi:chevron-right`})})]}),l&&(0,E.jsx)(`ul`,{className:`sub`,children:c})]},e)},p=(0,E.jsxs)(E.Fragment,{children:[u({kind:`general`},l(`tab_general`),`mdi:cog-outline`),f(`sidebar`,{kind:`sidebar`,part:O[0].part},l(`tab_sidebar`),`mdi:dock-left`,O.map(e=>u({kind:`sidebar`,part:e.part},l(e.label),e.icon))),f(`pages`,{kind:`pages`},l(`tab_pages`),`mdi:book-open-page-variant-outline`,t.pages.map((e,t)=>e.sections.length?f(`page-${t}`,{kind:`page`,page:t},l(`page_n`,{n:t+1}),`mdi:file-outline`,e.sections.map((e,n)=>u({kind:`section`,page:t,section:n},e.name||l(`section_n`,{n:n+1}),e.icon||`mdi:view-grid-outline`))):u({kind:`page`,page:t},l(`page_n`,{n:t+1}),`mdi:file-outline`))),f(`buttons`,{kind:`buttons`},l(`tab_buttons`),`mdi:gesture-tap-button`,t.buttons.map((e,t)=>u({kind:`button`,button:t},e.name||l(`button_n`,{n:t+1}),e.icon||`mdi:gesture-tap`)))]});return(0,E.jsxs)(we,{$open:i,as:`nav`,"aria-label":l(`editor_title`),children:[(0,E.jsx)(`div`,{className:`heading`,children:l(`nav_dashboards`)}),(0,E.jsxs)(`ul`,{children:[e.map(e=>e.id===t.id?(0,E.jsxs)(`li`,{children:[(0,E.jsxs)(`button`,{type:`button`,"aria-expanded":!0,onClick:()=>o({kind:`general`}),children:[(0,E.jsx)(C,{className:`icon`,icon:`mdi:tablet-dashboard`}),(0,E.jsx)(`span`,{className:`grow`,children:(0,E.jsx)(`strong`,{children:t.name})})]}),(0,E.jsx)(`ul`,{className:`sub`,children:p})]},e.id):(0,E.jsx)(`li`,{children:(0,E.jsxs)(`button`,{type:`button`,onClick:()=>s(e.id),children:[(0,E.jsx)(C,{className:`icon`,icon:`mdi:tablet-dashboard`}),(0,E.jsx)(`span`,{className:`grow`,children:e.name})]})},e.id)),(0,E.jsx)(`li`,{className:`add`,children:(0,E.jsxs)(`button`,{type:`button`,onClick:c,children:[(0,E.jsx)(C,{className:`icon`,icon:`mdi:plus`}),(0,E.jsx)(`span`,{className:`grow`,children:l(`new_dashboard`)})]})})]}),(0,E.jsx)(`div`,{className:`heading`,children:l(`nav_house`)}),(0,E.jsx)(`ul`,{children:u({kind:`users`},l(`tab_users`),`mdi:account-multiple-outline`)})]})},je=o.div`
  position: relative;
  width: 100%;
  height: 100%;
  min-height: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
`,Me=o.div`
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
`,Ne=(0,T.memo)(({dashboard:e,device:t,portrait:n,page:r})=>{let i=d(),a=(0,T.useRef)(null),o=(0,T.useRef)(null),[s,c]=(0,T.useState)(null),l=n?t.height:t.width,u=n?t.width:t.height,f=s?Math.min((s.width-40)/l,(s.height-40)/u):.5,p=Math.max(.1,Math.min(1,Math.floor(f*1e3)/1e3));(0,T.useLayoutEffect)(()=>{let e=a.current;if(!e)return;let t=()=>c({width:e.clientWidth,height:e.clientHeight});t();let n=new ResizeObserver(t);return n.observe(e),()=>n.disconnect()},[]);let m=(0,T.useRef)(null);(0,T.useLayoutEffect)(()=>{let e=o.current,t=m.current;if(m.current={width:l,height:u,scale:p,portrait:n},!e||!t||!s)return;let r=`translate(-50%, -50%) scale(${p})`;if(t.portrait!==n){let i=Math.min(t.scale,p)*.92;e.animate([{transform:`translate(-50%, -50%) scale(${t.scale}) rotate(${n?90:-90}deg)`},{transform:`translate(-50%, -50%) scale(${i}) rotate(${n?45:-45}deg)`,offset:.5},{transform:r}],{duration:750,easing:`cubic-bezier(0.45, 0, 0.25, 1)`})}else(t.width!==l||t.height!==u)&&e.animate([{width:`${t.width}px`,height:`${t.height}px`,transform:`translate(-50%, -50%) scale(${t.scale})`},{width:`${l}px`,height:`${u}px`,transform:r}],{duration:450,easing:`cubic-bezier(0.3, 0, 0.2, 1)`})},[l,u,p,n,s]);let h=(0,T.useMemo)(()=>({dashboard:e,dashboards:[],kiosk:!1,is_admin:!0,pin_required:!1}),[e]);return(0,E.jsx)(je,{ref:a,"aria-label":i(`preview`),children:(0,E.jsx)(Me,{ref:o,style:{width:l,height:u,transform:`translate(-50%, -50%) scale(${p})`},children:(0,E.jsx)(ee,{view:h,focusPage:r,children:(0,E.jsx)(y,{})})})})}),F=o.label`
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
`,Pe=o.label`
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
`,I=o.div`
  display: grid;
  grid-template-columns: ${({$columns:e})=>e??`repeat(auto-fit, minmax(220px, 1fr))`};
  gap: 16px;
  align-items: start;
`,L=o.button`
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
`;function R(e,t,n){if(n<0||n>=e.length)return e;let r=[...e],[i]=r.splice(t,1);return r.splice(n,0,i),r}function z(){let e=new Uint8Array(6);return crypto.getRandomValues(e),Array.from(e,e=>e.toString(16).padStart(2,`0`)).join(``)}var B=e=>JSON.parse(JSON.stringify(e)),V=(e,t,n)=>e.map((e,r)=>r===t?n:e),H=({selector:e,value:t,onChange:n,label:r,helper:i,required:a=!1})=>{let o=(0,T.useRef)(null),s=(0,T.useRef)(null),c=(0,T.useRef)(n);(0,T.useEffect)(()=>{c.current=n}),(0,T.useEffect)(()=>{let e=document.createElement(`ha-selector`);e.hass=de();let t=t=>{t.stopPropagation();let n=t.detail.value;e.value=n,c.current(n)};e.addEventListener(`value-changed`,t),o.current?.append(e),s.current=e;let n=b(t=>{e.hass=t});return()=>{n(),e.removeEventListener(`value-changed`,t),e.remove(),s.current=null}},[]);let l=JSON.stringify(e);return(0,T.useEffect)(()=>{let e=s.current;e&&(e.selector=JSON.parse(l),e.label=r,e.helper=i,e.required=a)},[l,r,i,a]),(0,T.useEffect)(()=>{let e=s.current;e&&e.value!==t&&(e.value=t)},[t]),(0,E.jsx)(`div`,{ref:o,className:`ha-field`})},Fe=[`ha-selector`,`ha-entity-picker`,`ha-switch`,`ha-icon-picker`],Ie=[{tag:`hui-entities-card`,config:{type:`entities`,entities:[]}},{tag:`hui-button-card`,config:{type:`button`}}],Le=null,Re=!1;function ze(){return Re&&Fe.every(e=>customElements.get(e))}var Be=e=>new Promise(t=>window.setTimeout(()=>t(!1),e));async function Ve(){let e=Object.assign(document.createElement(`ha-selector`),{selector:{text:{}},hidden:!0});document.body.append(e);try{return await Promise.race([customElements.whenDefined(`ha-selector-text`).then(()=>!0),Be(5e3)])}finally{e.remove()}}function He(){return ze()?Promise.resolve(!0):(Le??=(async()=>{let e=window.loadCardHelpers,t=null;for(let n of Ie)try{let r=customElements.get(n.tag);!r?.getConfigElement&&e&&(t??=await e(),r=(await t.createCardElement(n.config)).constructor),await r?.getConfigElement?.()}catch{}return Re=!!customElements.get(`ha-selector`)&&await Ve(),ze()})(),Le)}function U(){let[e,t]=(0,T.useState)(ze),n=(0,T.useSyncExternalStore)(b,()=>de()!==null);return(0,T.useEffect)(()=>{if(e||!n)return;let r=!0;return He().then(e=>r&&e&&t(!0)),()=>{r=!1}},[e,n]),e&&n}var W=({label:e,hint:t,value:n,onChange:r,placeholder:i,type:a=`text`})=>U()?(0,E.jsx)(H,{selector:{text:a===`text`?{}:{type:a}},value:n,label:e,helper:t,onChange:e=>r(typeof e==`string`?e:``)}):(0,E.jsxs)(F,{children:[(0,E.jsx)(`span`,{className:`label`,children:e}),(0,E.jsx)(`input`,{type:a,value:n,placeholder:i,onChange:e=>r(e.target.value)}),t&&(0,E.jsx)(`small`,{children:t})]}),Ue=({label:e,hint:t,value:n,onChange:r,suggestions:i=[]})=>{let a=U(),o=e=>[...new Set(e.filter(e=>typeof e==`string`).map(e=>e.trim()).filter(Boolean))];if(a){let a=[...new Set([...n,...i])];return(0,E.jsxs)(F,{as:`div`,children:[(0,E.jsx)(`span`,{className:`label`,children:e}),t&&(0,E.jsx)(`small`,{children:t}),(0,E.jsx)(H,{selector:{select:{multiple:!0,custom_value:!0,mode:`dropdown`,sort:!1,options:a}},value:n,label:e,onChange:e=>r(Array.isArray(e)?o(e):[])})]})}return(0,E.jsxs)(F,{children:[(0,E.jsx)(`span`,{className:`label`,children:e}),(0,E.jsx)(`input`,{type:`text`,value:n.join(`, `),onChange:e=>r(o(e.target.value.split(`,`)))}),t&&(0,E.jsx)(`small`,{children:t})]})},G=({label:e,hint:t,value:n,onChange:r,min:i,max:a,step:o=1,unit:s})=>{let c=U(),l=e=>{let t=Number(e);e!==``&&e!==null&&Number.isFinite(t)&&r(t)};return c?(0,E.jsx)(H,{selector:{number:{min:i,max:a,step:o,mode:`box`,unit_of_measurement:s}},value:n,label:e,helper:t,onChange:l}):(0,E.jsxs)(F,{children:[(0,E.jsx)(`span`,{className:`label`,children:e}),(0,E.jsx)(`input`,{type:`number`,value:n,min:i,max:a,step:o,onChange:e=>l(e.target.value)}),t&&(0,E.jsx)(`small`,{children:t})]})},We=({label:e,hint:t,value:n,onChange:r,min:i,max:a,step:o,unit:s,scale:c=1})=>{let l=U(),u=Math.round(n*c*1e3)/1e3,d=e=>{let t=Number(e);Number.isFinite(t)&&r(t/c)};return l?(0,E.jsx)(H,{selector:{number:{min:i,max:a,step:o,mode:`slider`,unit_of_measurement:s}},value:u,label:e,helper:t,onChange:d}):(0,E.jsxs)(F,{children:[(0,E.jsxs)(`span`,{className:`label`,children:[e,`: `,u,s?` ${s}`:``]}),(0,E.jsx)(`input`,{type:`range`,value:u,min:i,max:a,step:o,onChange:e=>d(e.target.value)}),t&&(0,E.jsx)(`small`,{children:t})]})},K=({label:e,hint:t,value:n,onChange:r})=>U()?(0,E.jsx)(H,{selector:{boolean:{}},value:n,label:e,helper:t,onChange:e=>r(!!e)}):(0,E.jsxs)(Pe,{children:[(0,E.jsx)(`input`,{type:`checkbox`,checked:n,onChange:e=>r(e.target.checked)}),(0,E.jsxs)(`span`,{children:[e,t&&(0,E.jsx)(`small`,{children:t})]})]}),Ge=e=>Array.isArray(e)&&e.length===3&&e.every(e=>typeof e==`number`)?`#${e.map(e=>Math.round(Math.min(255,Math.max(0,e))).toString(16).padStart(2,`0`)).join(``)}`:null,Ke=e=>[1,3,5].map(t=>parseInt(e.slice(t,t+2),16)||0),qe=({label:e,hint:t,value:n,onChange:r})=>U()?(0,E.jsx)(H,{selector:{color_rgb:{}},value:Ke(n),label:e,helper:t,onChange:e=>{let t=Ge(e);t&&r(t)}}):(0,E.jsxs)(F,{children:[(0,E.jsx)(`span`,{className:`label`,children:e}),(0,E.jsx)(`input`,{type:`color`,value:n,onChange:e=>r(e.target.value)}),t&&(0,E.jsx)(`small`,{children:t})]}),Je=({label:e,hint:t,value:n,onChange:r})=>U()?(0,E.jsx)(H,{selector:{time:{}},value:n||void 0,label:e,helper:t,onChange:e=>r(typeof e==`string`?e.slice(0,5):``)}):(0,E.jsxs)(F,{children:[(0,E.jsx)(`span`,{className:`label`,children:e}),(0,E.jsx)(`input`,{type:`time`,value:n,onChange:e=>r(e.target.value)}),t&&(0,E.jsx)(`small`,{children:t})]}),q=({label:e,hint:t,value:n,onChange:r,options:i})=>U()?(0,E.jsx)(H,{selector:{select:{options:i,mode:`dropdown`}},value:n,label:e,helper:t,required:!0,onChange:e=>typeof e==`string`&&r(e)}):(0,E.jsxs)(F,{children:[(0,E.jsx)(`span`,{className:`label`,children:e}),(0,E.jsx)(`select`,{value:n,onChange:e=>r(e.target.value),children:i.map(e=>(0,E.jsx)(`option`,{value:e.value,children:e.label},e.value))}),t&&(0,E.jsx)(`small`,{children:t})]}),J=({label:e,hint:t,value:n,onChange:r})=>U()?(0,E.jsx)(H,{selector:{icon:{}},value:n,label:e,helper:t,onChange:e=>r(typeof e==`string`?e:``)}):(0,E.jsxs)(F,{children:[(0,E.jsx)(`span`,{className:`label`,children:e}),(0,E.jsxs)(`span`,{className:`with-icon`,children:[(0,E.jsx)(`input`,{type:`text`,value:n,placeholder:`mdi:…`,onChange:e=>r(e.target.value)}),n&&(0,E.jsx)(C,{icon:n,size:`24px`})]}),t&&(0,E.jsx)(`small`,{children:t})]}),Ye=({label:e,hint:t,value:n,onChange:r,accept:i})=>{let a=U(),o=(0,T.useMemo)(()=>n.startsWith(`media-source://`)?{media_content_id:n,media_content_type:i[0]}:void 0,[n,i]);return a?(0,E.jsx)(H,{selector:{media:{accept:i}},value:o,label:e,helper:t,onChange:e=>r(e?.media_content_id??``)}):(0,E.jsx)(W,{label:e,hint:t,value:n,onChange:r})},Xe=(0,T.createContext)([]),Ze=({children:e})=>{let t=s(_(e=>{let t={};for(let[n,r]of Object.entries(e.entities))t[n]=r.attributes.friendly_name||n;return t})),n=(0,T.useMemo)(()=>Object.entries(t).map(([e,t])=>({id:e,name:t})).sort((e,t)=>e.id.localeCompare(t.id)),[t]);return(0,E.jsx)(Xe.Provider,{value:n,children:e})},Qe=(e,t={},n,r)=>({entity:{...r?{include_entities:r}:{},...e?.length||n?{filter:{...e?.length?{domain:e}:{},...n?{integration:n}:{}}}:{},...t}}),$e=({value:e,domains:t,onChange:n})=>{let r=(0,T.useContext)(Xe),i=(0,T.useId)(),a=(0,T.useMemo)(()=>t?.length?r.filter(e=>t.includes(e.id.split(`.`)[0])):r,[r,t]);return(0,E.jsxs)(E.Fragment,{children:[(0,E.jsx)(`input`,{type:`text`,list:i,value:e,placeholder:t?.length?`${t[0]}.…`:`domain.object_id`,onChange:e=>n(e.target.value.trim())}),(0,E.jsx)(`datalist`,{id:i,children:a.map(e=>(0,E.jsx)(`option`,{value:e.id,children:e.name},e.id))})]})},Y=({label:e,hint:t,value:n,onChange:r,domains:i,integration:a,include:o})=>{let s=U(),c=(0,T.useContext)(Xe),l=d();if(s)return(0,E.jsx)(H,{selector:Qe(i,{},a,o),value:n||void 0,label:e,helper:t,onChange:e=>r(typeof e==`string`?e:``)});let u=c.find(e=>e.id===n);return(0,E.jsxs)(F,{children:[(0,E.jsx)(`span`,{className:`label`,children:e}),(0,E.jsx)($e,{value:n,domains:i,onChange:r}),n&&(0,E.jsx)(`small`,{children:u?u.name:l(`not_found`)}),t&&(0,E.jsx)(`small`,{children:t})]})},X=({label:e,hint:t,value:n,onChange:r,domains:i,max:a})=>{let o=U(),s=d(),c=e=>r(a===void 0?e:e.slice(0,a));return o?(0,E.jsx)(H,{selector:Qe(i,{multiple:!0,reorder:!0}),value:n,label:e,helper:t,onChange:e=>c(Array.isArray(e)?e.filter(e=>typeof e==`string`):[])}):(0,E.jsxs)(F,{as:`div`,children:[(0,E.jsx)(`span`,{className:`label`,children:e}),n.map((e,t)=>(0,E.jsxs)(I,{$columns:`minmax(0, 1fr) auto`,children:[(0,E.jsx)($e,{value:e,domains:i,onChange:e=>c(n.map((n,r)=>r===t?e:n))}),(0,E.jsx)(Z,{index:t,length:n.length,onMove:e=>c(R(n,t,e)),onRemove:()=>c(n.filter((e,n)=>n!==t))})]},t)),(a===void 0||n.length<a)&&(0,E.jsx)(L,{type:`button`,className:`add`,onClick:()=>c([...n,``]),"data-tip":s(`add`),"aria-label":s(`add`),children:(0,E.jsx)(C,{icon:`mdi:plus`})}),t&&(0,E.jsx)(`small`,{children:t})]})},Z=({index:e,length:t,onMove:n,onRemove:r,onDuplicate:i})=>{let a=d();return(0,E.jsxs)(`span`,{className:`list-controls`,children:[(0,E.jsx)(L,{type:`button`,disabled:e===0,onClick:()=>n(e-1),"data-tip":a(`move_up`),"aria-label":a(`move_up`),children:(0,E.jsx)(C,{icon:`mdi:arrow-up`})}),(0,E.jsx)(L,{type:`button`,disabled:e===t-1,onClick:()=>n(e+1),"data-tip":a(`move_down`),"aria-label":a(`move_down`),children:(0,E.jsx)(C,{icon:`mdi:arrow-down`})}),i&&(0,E.jsx)(L,{type:`button`,onClick:i,"data-tip":a(`duplicate`),"aria-label":a(`duplicate`),children:(0,E.jsx)(C,{icon:`mdi:content-copy`})}),(0,E.jsx)(L,{type:`button`,$danger:!0,onClick:r,"data-tip":a(`remove`),"aria-label":a(`remove`),children:(0,E.jsx)(C,{icon:`mdi:delete-outline`})})]})},Q=({title:e,lead:t})=>(0,E.jsxs)(E.Fragment,{children:[(0,E.jsx)(`h2`,{children:e}),t&&(0,E.jsx)(`p`,{className:`lead`,children:t})]}),et=o.span`
  margin-left: 8px;
  padding: 1px 8px;
  border-radius: 999px;
  font-size: 12px;
  font-weight: 400;
  background: var(--secondary-background-color, #282828);
  color: var(--secondary-text-color, #9b9b9b);
`,tt=({dashboards:e})=>{let t=d(),n=c(),[r,i]=(0,T.useState)(null);(0,T.useEffect)(()=>{n?.sendMessagePromise({type:`better_wall_dashboard/users`}).then(e=>i(e.users)).catch(()=>i([]))},[n]);let a=(0,T.useCallback)(async(e,t)=>{if(!n)return;i(n=>n?.map(n=>n.id===e.id?{...n,...t}:n)??null);let r=await n.sendMessagePromise({type:`better_wall_dashboard/save_user`,user_id:e.id,...t});i(t=>t?.map(t=>t.id===e.id?{...t,...r}:t)??null)},[n]);return(0,E.jsxs)(E.Fragment,{children:[(0,E.jsx)(Q,{title:t(`tab_users`),lead:t(`lead_users`)}),r?.map(n=>(0,E.jsxs)(P,{open:!n.is_admin||void 0,children:[(0,E.jsxs)(`summary`,{children:[(0,E.jsx)(C,{className:`icon`,icon:n.is_admin?`mdi:shield-account-outline`:`mdi:tablet`}),(0,E.jsxs)(`span`,{className:`text`,children:[(0,E.jsxs)(`span`,{children:[n.name,n.is_admin&&(0,E.jsx)(et,{children:t(`admin`)}),!n.is_active&&(0,E.jsx)(et,{children:t(`inactive`)})]}),(0,E.jsx)(`span`,{className:`secondary`,children:e.find(e=>e.id===n.dashboard)?.name??n.dashboard})]})]}),(0,E.jsxs)(`div`,{className:`fold-body`,children:[(0,E.jsx)(q,{label:t(`assigned_dashboard`),value:n.dashboard,options:e.map(e=>({value:e.id,label:e.name})),onChange:e=>a(n,{dashboard:e})}),(0,E.jsxs)(I,{children:[(0,E.jsx)(K,{label:t(`kiosk`),hint:t(`kiosk_user_hint`),value:n.kiosk,onChange:e=>a(n,{kiosk:e})}),(0,E.jsx)(K,{label:t(`start_page`),hint:t(`start_page_hint`),value:!!n.default_panel,onChange:e=>a(n,{default_panel:e})})]}),(0,E.jsx)(K,{label:t(`sidebar_only`),hint:t(`sidebar_only_hint`),value:n.sidebar_only,onChange:e=>a(n,{sidebar_only:e})})]})]},n.id))]})},nt=`/better_wall_dashboard/static/icon.png`,rt=o(ke)`
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
`,it=({open:e,onClose:t})=>{let n=d(),a=c(),o=(0,T.useRef)(null),[s,l]=(0,T.useState)(null),f=i();(0,T.useEffect)(()=>{let t=o.current;t&&(e&&!t.open&&t.showModal(),!e&&t.open&&t.close())}),(0,T.useEffect)(()=>{e&&a?.sendMessagePromise({type:`better_wall_dashboard/version`}).then(l).catch(()=>void 0)},[e,a]);let p=!!(f&&s&&s.app!==f);return(0,E.jsxs)(rt,{ref:o,tabIndex:-1,onClose:()=>e&&t(),onClick:e=>e.target===e.currentTarget&&t(),children:[(0,E.jsxs)(`div`,{className:`head`,children:[(0,E.jsx)(`img`,{src:nt,alt:``}),(0,E.jsx)(`h2`,{children:`Better Wall Dashboard`})]}),(0,E.jsx)(`p`,{className:`muted`,children:n(`about_blurb`)}),(0,E.jsx)(`table`,{children:(0,E.jsxs)(`tbody`,{children:[(0,E.jsxs)(`tr`,{children:[(0,E.jsx)(`th`,{children:n(`about_version`)}),(0,E.jsx)(`td`,{children:s?.version??`–`})]}),(0,E.jsxs)(`tr`,{children:[(0,E.jsx)(`th`,{children:n(`about_page`)}),(0,E.jsx)(`td`,{children:f?f.slice(0,12):`–`})]})]})}),p&&(0,E.jsxs)(E.Fragment,{children:[(0,E.jsx)(`p`,{children:n(`update_available`)}),(0,E.jsx)(D,{appearance:`filled`,icon:`mdi:reload`,onClick:()=>{let e=u(),t=null;if(e&&s){let n=new URL(e);n.searchParams.set(`v`,s.app),t=n.toString()}r(t)},children:n(`reload`)})]}),(s?.documentation||s?.issues)&&(0,E.jsxs)(`p`,{children:[s.documentation&&(0,E.jsx)(`a`,{href:s.documentation,target:`_blank`,rel:`noopener noreferrer`,children:n(`about_repo`)}),s.documentation&&s.issues&&` · `,s.issues&&(0,E.jsx)(`a`,{href:s.issues,target:`_blank`,rel:`noopener noreferrer`,children:n(`about_issues`)})]}),(0,E.jsx)(L,{type:`button`,className:`shut`,"aria-label":n(`close`),"data-tip":n(`close`),onClick:t,children:(0,E.jsx)(C,{icon:`mdi:close`})})]})},at=({request:e,onAnswer:t})=>{let n=d(),r=(0,T.useRef)(null);return(0,T.useEffect)(()=>{let t=r.current;t&&(e&&!t.open&&t.showModal(),!e&&t.open&&t.close())}),(0,E.jsx)(ke,{ref:r,role:`alertdialog`,tabIndex:-1,onCancel:e=>{e.preventDefault(),t(!1)},onClick:e=>e.target===e.currentTarget&&t(!1),children:e&&(0,E.jsxs)(E.Fragment,{children:[(0,E.jsx)(`h2`,{children:e.title}),e.text&&(0,E.jsx)(`p`,{className:`muted`,children:e.text}),(0,E.jsxs)(`div`,{className:`actions`,children:[(0,E.jsx)(D,{appearance:`plain`,onClick:()=>t(!1),children:n(`cancel`)}),(0,E.jsx)(D,{appearance:`accent`,danger:e.danger,onClick:()=>t(!0),children:e.confirm})]})]})})};function ot(){let[e,t]=(0,T.useState)(null);return{confirm:(0,T.useCallback)(e=>new Promise(n=>t({...e,resolve:n})),[]),dialog:(0,E.jsx)(at,{request:e,onAnswer:n=>{e?.resolve(n),t(null)}})}}var st=(0,T.createContext)([]);function ct(){return(0,T.useContext)(st)}function lt(e){let t=document.querySelector(`home-assistant`);return t?(t.dispatchEvent(new CustomEvent(`hass-notification`,{bubbles:!0,composed:!0,detail:{message:e,dismissable:!0}})),!0):!1}var ut=({draft:e,update:t})=>{let n=d(),r=n=>t({...e,background:{...e.background,...n}});return(0,E.jsxs)(E.Fragment,{children:[(0,E.jsx)(Q,{title:n(`tab_general`),lead:n(`lead_general`)}),(0,E.jsx)(M,{children:(0,E.jsx)(W,{label:n(`name`),value:e.name,onChange:n=>t({...e,name:n})})}),(0,E.jsxs)(M,{children:[(0,E.jsx)(`h3`,{children:n(`background`)}),(0,E.jsx)(q,{label:n(`background_mode`),value:e.background.mode??`image`,options:[{value:`image`,label:n(`background_mode_image`)},{value:`color`,label:n(`background_mode_color`)}],onChange:e=>r({mode:e===`color`?`color`:`image`})}),e.background.mode===`color`?(0,E.jsx)(qe,{label:n(`background_color`),value:e.background.color??`#131313`,onChange:e=>r({color:e})}):(0,E.jsxs)(E.Fragment,{children:[(0,E.jsx)(Ye,{label:n(`background_media`),hint:n(`background_media_hint`),accept:[`image/*`],value:e.background.image,onChange:e=>r({image:e})}),(0,E.jsx)(W,{label:n(`background_image`),hint:n(`background_image_hint`),type:`url`,value:e.background.image.startsWith(`media-source://`)?``:e.background.image,onChange:e=>r({image:e})}),(0,E.jsxs)(I,{children:[(0,E.jsx)(We,{label:n(`background_dim`),value:e.background.dim,min:0,max:95,step:5,unit:`%`,scale:100,onChange:e=>r({dim:e})}),(0,E.jsx)(We,{label:n(`background_blur`),value:e.background.blur,min:0,max:40,step:1,unit:`px`,onChange:e=>r({blur:e})})]})]})]}),(0,E.jsxs)(M,{children:[(0,E.jsx)(`h3`,{children:n(`security_heading`)}),(0,E.jsx)(W,{label:n(`pin`),hint:n(`pin_hint`),type:`password`,value:e.pin??``,onChange:n=>t({...e,pin:n.replace(/\D/g,``).slice(0,8)})})]})]})},dt=6,ft=[{type:`state`,label:`rule_state`},{type:`numeric`,label:`rule_numeric`},{type:`time`,label:`rule_time`},{type:`sun`,label:`rule_sun`},{type:`home`,label:`rule_home`}],pt=e=>{switch(e){case`state`:return{type:e,entity:``,state:``,not:!1};case`numeric`:return{type:e,entity:``,above:null,below:null};case`time`:return{type:e,after:``,before:``};case`sun`:return{type:e,when:`night`};case`home`:return{type:e,who:`anyone`}}},mt=o.div`
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
`,ht=e=>{let t=Number(e.replace(`,`,`.`));return e.trim()===``||!Number.isFinite(t)?null:t},gt=({rule:e,onChange:t})=>{let n=d();switch(e.type){case`state`:return(0,E.jsxs)(E.Fragment,{children:[(0,E.jsx)(Y,{label:n(`entity`),value:e.entity,onChange:n=>t({...e,entity:n})}),(0,E.jsx)(W,{label:n(`rule_state_value`),hint:n(`rule_state_value_hint`),value:e.state,onChange:n=>t({...e,state:n})}),(0,E.jsx)(K,{label:n(`rule_not`),value:e.not,onChange:n=>t({...e,not:n})})]});case`numeric`:return(0,E.jsxs)(E.Fragment,{children:[(0,E.jsx)(Y,{label:n(`entity`),value:e.entity,onChange:n=>t({...e,entity:n})}),(0,E.jsxs)(I,{children:[(0,E.jsx)(W,{label:n(`rule_above`),value:e.above===null?``:String(e.above),onChange:n=>t({...e,above:ht(n)})}),(0,E.jsx)(W,{label:n(`rule_below`),value:e.below===null?``:String(e.below),onChange:n=>t({...e,below:ht(n)})})]})]});case`time`:return(0,E.jsxs)(I,{children:[(0,E.jsx)(Je,{label:n(`rule_after`),value:e.after,onChange:n=>t({...e,after:n})}),(0,E.jsx)(Je,{label:n(`rule_before`),hint:n(`rule_before_hint`),value:e.before,onChange:n=>t({...e,before:n})})]});case`sun`:return(0,E.jsx)(q,{label:n(`rule_sun`),value:e.when,options:[{value:`day`,label:n(`rule_day`)},{value:`night`,label:n(`rule_night`)}],onChange:n=>t({...e,when:n===`day`?`day`:`night`})});case`home`:return(0,E.jsx)(q,{label:n(`rule_home`),value:e.who,options:[{value:`anyone`,label:n(`rule_anyone`)},{value:`nobody`,label:n(`rule_nobody`)}],onChange:n=>t({...e,who:n===`nobody`?`nobody`:`anyone`})})}},_t=({rules:e,onChange:t})=>{let n=d();return(0,E.jsxs)(F,{as:`div`,children:[(0,E.jsx)(`span`,{className:`label`,children:n(`rules`)}),(0,E.jsx)(`small`,{children:n(`rules_hint`)}),e.map((r,i)=>(0,E.jsxs)(mt,{children:[(0,E.jsxs)(`div`,{className:`head`,children:[(0,E.jsx)(q,{label:n(`rule_type`),value:r.type,options:ft.map(e=>({value:e.type,label:n(e.label)})),onChange:n=>t(V(e,i,pt(n)))}),(0,E.jsx)(Z,{index:i,length:e.length,onMove:n=>t(R(e,i,n)),onRemove:()=>t(e.filter((e,t)=>t!==i))})]}),(0,E.jsx)(gt,{rule:r,onChange:n=>t(V(e,i,n))})]},i)),(0,E.jsx)(`div`,{children:(0,E.jsx)(D,{icon:`mdi:plus`,disabled:e.length>=dt,onClick:()=>t([...e,pt(`state`)]),children:n(`add_rule`)})})]})},vt=({item:e})=>{let t=l(e.entity||void 0),n=d(),r=e.name||t?.attributes.friendly_name||e.entity||n(`not_set`);return(0,E.jsxs)(E.Fragment,{children:[(0,E.jsx)(C,{className:`icon`,icon:e.icon||t?.attributes.icon||ie(e.entity)}),(0,E.jsxs)(`span`,{className:`text`,children:[(0,E.jsx)(`span`,{children:r}),e.entity&&(0,E.jsxs)(`span`,{className:`secondary`,children:[e.entity,e.rules?.length?` · ${e.rules.length===1?n(`rules_one`):n(`rules_count`,{count:e.rules.length})}`:``]})]})]})};function $({items:e,max:t,domains:n,addLabel:r,withRules:i=!1,create:a,extra:o,onChange:s}){let c=d(),l=(t,n)=>s(V(e,t,{...e[t],...n})),u=()=>a?.()??{id:z(),entity:``,name:``,icon:``,...i?{rules:[]}:{}};return(0,E.jsxs)(E.Fragment,{children:[e.length===0&&(0,E.jsxs)(De,{children:[(0,E.jsx)(C,{icon:`mdi:playlist-plus`}),(0,E.jsx)(`span`,{children:c(`empty_list`)})]}),e.map((t,r)=>(0,E.jsxs)(P,{open:!t.entity||void 0,children:[(0,E.jsxs)(`summary`,{children:[(0,E.jsx)(vt,{item:t}),(0,E.jsx)(`span`,{onClick:e=>e.preventDefault(),children:(0,E.jsx)(Z,{index:r,length:e.length,onMove:t=>s(R(e,r,t)),onRemove:()=>s(e.filter((e,t)=>t!==r))})})]}),(0,E.jsxs)(`div`,{className:`fold-body`,children:[(0,E.jsx)(Y,{label:c(`entity`),value:t.entity,domains:n,onChange:e=>l(r,{entity:e})}),(0,E.jsxs)(I,{children:[(0,E.jsx)(W,{label:c(`name`),hint:c(`name_hint`),value:t.name,onChange:e=>l(r,{name:e})}),(0,E.jsx)(J,{label:c(`icon`),value:t.icon,onChange:e=>l(r,{icon:e})})]}),o?.(t,e=>l(r,e)),i&&(0,E.jsx)(_t,{rules:t.rules??[],onChange:e=>l(r,{rules:e})})]})]},t.id)),(0,E.jsx)(`div`,{children:(0,E.jsxs)(D,{icon:`mdi:plus`,appearance:`filled`,disabled:e.length>=t,onClick:()=>s([...e,u()]),children:[r,` (`,e.length,`/`,t,`)`]})})]})}var yt=[`input_boolean`,`switch`,`binary_sensor`],bt=({draft:e,update:t,part:n})=>{let r=d(),i=ct(),a=e.sidebar,o=n=>t({...e,sidebar:n}),s=(e,t)=>o({...a,[e]:{...a[e],...t}}),c=O.find(e=>e.part===n)?.label??`tab_sidebar`,l=(0,E.jsx)(Q,{title:r(c),lead:r(`lead_${n}`)});switch(n){case`clock`:return(0,E.jsxs)(E.Fragment,{children:[l,(0,E.jsxs)(M,{children:[(0,E.jsx)(q,{label:r(`clock_style`),value:a.clock?.style??`digital`,options:[{value:`digital`,label:r(`clock_digital`)},{value:`analog`,label:r(`clock_analog`)}],onChange:e=>s(`clock`,{style:e})}),(0,E.jsx)(K,{label:r(`clock_seconds`),value:!!a.clock?.seconds,onChange:e=>s(`clock`,{seconds:e})})]})]});case`status`:return(0,E.jsxs)(E.Fragment,{children:[l,(0,E.jsxs)(M,{children:[(0,E.jsx)(`h3`,{children:r(`status_icons`)}),(0,E.jsx)(`p`,{children:r(`status_icons_hint`)}),(0,E.jsx)($,{items:a.status.icons??[],max:x.statusIcons,domains:yt,addLabel:r(`add_status_icon`),onChange:e=>s(`status`,{icons:e})})]}),(0,E.jsxs)(M,{children:[(0,E.jsx)(`h3`,{children:r(`wifi_heading`)}),(0,E.jsx)(Y,{label:r(`wifi_signal`),hint:r(`wifi_signal_hint`),value:a.status.wifi_signal,domains:[`sensor`],onChange:e=>s(`status`,{wifi_signal:e})})]}),(0,E.jsxs)(M,{children:[(0,E.jsx)(`h3`,{children:r(`guest_wifi`)}),(0,E.jsx)(Y,{label:r(`guest_qr_image`),hint:r(`guest_qr_image_hint`),value:a.guest_wifi.qr_image,domains:[`image`],onChange:e=>s(`guest_wifi`,{qr_image:e})}),(0,E.jsxs)(I,{children:[(0,E.jsx)(W,{label:r(`network`),value:a.guest_wifi.ssid,onChange:e=>s(`guest_wifi`,{ssid:e})}),(0,E.jsx)(W,{label:r(`password`),type:`password`,value:a.guest_wifi.password,onChange:e=>s(`guest_wifi`,{password:e})})]}),(0,E.jsxs)(I,{children:[(0,E.jsx)(q,{label:r(`security`),value:a.guest_wifi.security,options:[{value:`WPA`,label:`WPA/WPA2/WPA3`},{value:`WEP`,label:`WEP`},{value:`nopass`,label:r(`open_network`)}],onChange:e=>s(`guest_wifi`,{security:e})}),(0,E.jsx)(K,{label:r(`hidden_network`),value:a.guest_wifi.hidden,onChange:e=>s(`guest_wifi`,{hidden:e})})]})]})]});case`climate`:return(0,E.jsxs)(E.Fragment,{children:[l,(0,E.jsxs)(M,{children:[(0,E.jsx)(Y,{label:r(`temperature`),value:a.climate.temperature,domains:[`sensor`],onChange:e=>s(`climate`,{temperature:e})}),(0,E.jsx)(Y,{label:r(`humidity`),value:a.climate.humidity,domains:[`sensor`],onChange:e=>s(`climate`,{humidity:e})}),(0,E.jsx)(G,{label:r(`hours`),value:a.climate.hours,min:1,max:168,unit:`h`,onChange:e=>s(`climate`,{hours:e})})]})]});case`persons`:return(0,E.jsxs)(E.Fragment,{children:[l,(0,E.jsx)(X,{label:r(`persons`),value:a.persons,domains:[`person`],onChange:e=>o({...a,persons:e})})]});case`openings`:return(0,E.jsxs)(E.Fragment,{children:[l,(0,E.jsx)(X,{label:r(`openings`),hint:r(`openings_hint`),value:a.openings,domains:[`binary_sensor`,`cover`,`lock`,`sensor`],onChange:e=>o({...a,openings:e})}),(0,E.jsx)(K,{label:r(`openings_hide_when_closed`),hint:r(`openings_hide_when_closed_hint`),value:a.openings_view?.hide_when_closed??!1,onChange:e=>o({...a,openings_view:{only_open:!1,...a.openings_view,hide_when_closed:e}})}),(0,E.jsx)(K,{label:r(`openings_only_open`),hint:r(`openings_only_open_hint`),value:a.openings_view?.only_open??!1,onChange:e=>o({...a,openings_view:{hide_when_closed:!1,...a.openings_view,only_open:e}})})]});case`travel`:return(0,E.jsxs)(E.Fragment,{children:[l,(0,E.jsxs)(M,{children:[(0,E.jsx)(Y,{label:r(`travel_sensor`),value:a.travel.entity,domains:[`sensor`],onChange:e=>s(`travel`,{entity:e})}),(0,E.jsx)(W,{label:r(`name`),hint:r(`travel_name_hint`),value:a.travel.name,onChange:e=>s(`travel`,{name:e})})]}),(0,E.jsxs)(M,{children:[(0,E.jsx)(`h3`,{children:r(`map`)}),(0,E.jsx)(W,{label:r(`maps_api_key`),hint:r(`maps_api_key_hint`),type:`password`,value:a.travel.maps_api_key,onChange:e=>s(`travel`,{maps_api_key:e})}),(0,E.jsx)(W,{label:r(`map_url`),hint:r(`map_url_hint`),type:`url`,value:a.travel.map_url,onChange:e=>s(`travel`,{map_url:e})}),(0,E.jsx)(Y,{label:r(`travel_work_zone`),hint:r(`travel_work_zone_hint`),value:a.travel.work_zone??``,domains:[`zone`],onChange:e=>s(`travel`,{work_zone:e})}),(0,E.jsx)(W,{label:r(`travel_work_address`),hint:r(`travel_work_address_hint`),value:a.travel.work_address??``,onChange:e=>s(`travel`,{work_address:e})})]})]});case`quick`:return(0,E.jsxs)(E.Fragment,{children:[l,(0,E.jsx)($,{items:a.quick_actions,max:x.quickActions,addLabel:r(`add_quick_action`),withRules:!0,onChange:e=>o({...a,quick_actions:e})})]});case`calendar`:return(0,E.jsxs)(E.Fragment,{children:[l,(0,E.jsxs)(M,{children:[(0,E.jsx)(X,{label:r(`calendars`),value:a.calendar.entities,domains:[`calendar`],onChange:e=>s(`calendar`,{entities:e})}),(0,E.jsx)(G,{label:r(`days`),hint:r(`calendar_days_hint`),value:a.calendar.days,min:1,max:x.calendarDays,onChange:e=>s(`calendar`,{days:e})})]})]});case`weather`:return(0,E.jsxs)(E.Fragment,{children:[l,(0,E.jsxs)(M,{children:[(0,E.jsx)(Y,{label:r(`weather_entity`),value:a.weather.entity,domains:[`weather`],onChange:e=>s(`weather`,{entity:e})}),(0,E.jsx)(Y,{label:r(`outdoor_temperature`),hint:r(`outdoor_temperature_hint`),value:a.weather.temperature,domains:[`sensor`],onChange:e=>s(`weather`,{temperature:e})})]})]});case`notifications`:return(0,E.jsxs)(E.Fragment,{children:[l,(0,E.jsxs)(M,{children:[(0,E.jsx)(K,{label:r(`notifications_enabled`),value:a.notifications.enabled,onChange:e=>s(`notifications`,{enabled:e})}),(0,E.jsx)(Ue,{label:r(`notifications_prefix`),hint:r(`notifications_prefix_hint`),suggestions:ce([...i,e]),value:h(a.notifications),onChange:e=>s(`notifications`,{prefixes:e})})]}),(0,E.jsxs)(M,{children:[(0,E.jsx)(`h3`,{children:r(`settings`)}),(0,E.jsx)(K,{label:r(`settings_enabled`),hint:r(`settings_enabled_hint`),value:a.settings?.enabled!==!1,onChange:e=>s(`settings`,{enabled:e})})]})]});case`system`:return(0,E.jsxs)(E.Fragment,{children:[l,(0,E.jsx)($,{items:a.system,max:x.system,domains:[`sensor`],addLabel:r(`add_statistic`),onChange:e=>o({...a,system:e})})]})}},xt=o.textarea`
  min-height: 55vh;
  padding: 12px;
  border-radius: 8px;
  border: 1px solid var(--divider-color, rgba(225, 225, 225, 0.12));
  background: var(--code-editor-background-color, var(--secondary-background-color, #282828));
  color: inherit;
  font-family: var(--ha-font-family-code, ui-monospace, monospace);
  font-size: 13px;
  resize: vertical;
`,St=o.p`
  margin: 0;
  color: var(--error-color, #db4437);
`,Ct=({draft:e,update:t})=>{let n=d(),[r,i]=(0,T.useState)(()=>JSON.stringify(e,null,2)),[a,o]=(0,T.useState)(!1);return(0,E.jsxs)(E.Fragment,{children:[(0,E.jsx)(Q,{title:n(`tab_json`),lead:n(`json_hint`)}),(0,E.jsx)(xt,{value:r,spellCheck:!1,onChange:e=>{i(e.target.value),o(!1)}}),a&&(0,E.jsx)(St,{children:n(`json_invalid`)}),(0,E.jsx)(`div`,{children:(0,E.jsx)(D,{icon:`mdi:check`,appearance:`filled`,onClick:()=>{try{t({...JSON.parse(r),id:e.id})}catch{o(!0)}},children:n(`apply`)})})]})};function wt(){let e=s(e=>{let t=new Set(Object.values(e.entitiesRegistryDisplay).map(e=>e.platform));return oe.filter(e=>!e.integration||t.has(e.integration)).map(e=>e.type).join(` `)});return oe.filter(t=>e.split(` `).includes(t.type))}function Tt(e){let t=s(t=>e?.pickerEntities?e.pickerEntities(t.entities,e=>t.entitiesRegistryDisplay[e]?.platform).join(` `):null);return(0,T.useMemo)(()=>t===null?void 0:t.split(` `).filter(Boolean),[t])}var Et=({tile:e,onChange:t})=>{let r=d(),i=l(n(e.entity||void 0))?.attributes.options??[],a=Array.isArray(e.options.hidden_scenes)?e.options.hidden_scenes:[],o=n=>t({...e.options,...n});return(0,E.jsxs)(E.Fragment,{children:[i.length>0&&(0,E.jsxs)(F,{as:`div`,children:[(0,E.jsx)(`span`,{className:`label`,children:r(`bl_shown_scenes`)}),(0,E.jsx)(`small`,{children:r(`bl_shown_scenes_hint`)}),i.map(e=>(0,E.jsx)(K,{label:e,value:!a.includes(e),onChange:t=>o({hidden_scenes:t?a.filter(t=>t!==e):[...a.filter(e=>i.includes(e)),e]})},e))]}),(0,E.jsx)(K,{label:r(`light_hide_presets`),hint:r(`light_hide_presets_hint`),value:e.options.hide_presets===!0,onChange:e=>o({hide_presets:e})}),(0,E.jsxs)(I,{children:[(0,E.jsx)(Y,{label:r(`bl_button_entity`),hint:r(`bl_button_entity_hint`),value:typeof e.options.button_entity==`string`?e.options.button_entity:``,onChange:e=>o({button_entity:e})}),(0,E.jsx)(J,{label:r(`bl_button_icon`),value:typeof e.options.button_icon==`string`?e.options.button_icon:``,onChange:e=>o({button_icon:e})})]})]})},Dt=({preset:e,onChange:t})=>{let n=d(),r=l(e.entity||void 0),i=Array.isArray(r?.attributes.source_list)?r.attributes.source_list:[];return e.kind===`run`?null:e.kind===`source`&&i.length?(0,E.jsx)(q,{label:n(`media_preset_value`),value:e.value,options:[...new Set([...e.value?[e.value]:[],...i])].map(e=>({value:e,label:e})),onChange:t}):(0,E.jsx)(W,{label:e.kind===`app`?n(`media_preset_app_id`):n(`media_preset_value`),hint:e.kind===`app`?n(`media_preset_app_hint`):void 0,value:e.value,onChange:t})},Ot={bed:7,subs:2,heights:4},kt=({tile:t,onChange:n})=>{let r=d(),i=se(t.entity,t.options),a=e=>n({...t.options,...e}),o=i.layout??Ot,s=e=>a({speakers:g({...o,...e})}),c=e=>e.map(e=>({value:String(e),label:String(e)}));return(0,E.jsxs)(E.Fragment,{children:[(0,E.jsx)(X,{label:r(`media_players`),hint:r(`media_players_hint`),domains:[`media_player`],max:6,value:i.players.filter(e=>e!==t.entity),onChange:e=>a({players:e})}),(0,E.jsxs)(I,{children:[(0,E.jsx)(Y,{label:r(`media_power_entity`),hint:r(`media_power_entity_hint`),domains:e,value:typeof t.options.power==`string`?t.options.power:``,onChange:e=>a({power:e})}),(0,E.jsx)(Y,{label:r(`media_volume_entity`),hint:r(`media_volume_entity_hint`),domains:[`media_player`],value:typeof t.options.volume==`string`?t.options.volume:``,onChange:e=>a({volume:e})})]}),(0,E.jsx)(q,{label:r(`media_volume_unit`),value:i.volumeUnit,options:le.map(e=>({value:e,label:r(`media_volume_${e}`)})),onChange:e=>a({volume_unit:e})}),(0,E.jsxs)(F,{as:`div`,children:[(0,E.jsx)(`span`,{className:`label`,children:r(`media_presets`)}),(0,E.jsx)(`small`,{children:r(`media_presets_hint`)})]}),(0,E.jsx)($,{items:i.presets,max:8,domains:[`media_player`,`script`,`scene`,`button`,`input_button`],addLabel:r(`add_media_preset`),create:()=>({id:z(),entity:``,name:``,icon:``,kind:`source`,value:``}),extra:(e,t)=>(0,E.jsxs)(E.Fragment,{children:[(0,E.jsx)(q,{label:r(`media_preset_kind`),value:e.kind,options:te.map(e=>({value:e,label:r(`media_preset_${e}`)})),onChange:e=>t({kind:e,value:``})}),(0,E.jsx)(Dt,{preset:e,onChange:e=>t({value:e})})]}),onChange:e=>a({presets:e})}),(0,E.jsxs)(F,{as:`div`,children:[(0,E.jsx)(`span`,{className:`label`,children:r(`media_switches`)}),(0,E.jsx)(`small`,{children:r(`media_switches_hint`)})]}),(0,E.jsx)(W,{label:r(`media_switches_title`),value:i.switchesTitle,onChange:e=>a({switches_title:e})}),(0,E.jsx)($,{items:i.switches,max:4,domains:[`switch`,`input_boolean`,`light`],addLabel:r(`add_media_switch`),create:()=>({id:z(),entity:``,name:``,icon:``,subs:[]}),extra:(e,t)=>i.layout&&i.layout.subs>0?(0,E.jsxs)(F,{as:`div`,children:[(0,E.jsx)(`span`,{className:`label`,children:r(`media_switch_subs`)}),(0,E.jsx)(`small`,{children:r(`media_switch_subs_hint`)}),fe.slice(0,i.layout.subs).map(n=>(0,E.jsx)(K,{label:r(`speaker_${n}`),value:e.subs.includes(n),onChange:r=>t({subs:r?[...e.subs,n]:e.subs.filter(e=>e!==n)})},n))]}):null,onChange:e=>a({switches:e})}),(0,E.jsxs)(F,{as:`div`,children:[(0,E.jsx)(`span`,{className:`label`,children:r(`media_devices`)}),(0,E.jsx)(`small`,{children:r(`media_devices_hint`)})]}),(0,E.jsx)($,{items:i.devices,max:4,domains:[`media_player`,`remote`,`switch`],addLabel:r(`add_media_device`),create:()=>({id:z(),entity:``,name:``,icon:``,info:``}),extra:(e,t)=>(0,E.jsx)(Y,{label:r(`media_device_info`),hint:r(`media_device_info_hint`),domains:[`sensor`,`input_text`,`select`],value:e.info,onChange:e=>t({info:e})}),onChange:e=>a({devices:e})}),(0,E.jsxs)(I,{children:[(0,E.jsx)(Y,{label:r(`media_night_entity`),hint:r(`media_night_entity_hint`),domains:[`switch`,`input_boolean`,`script`],value:i.night,onChange:e=>a({night:e})}),(0,E.jsx)(W,{label:r(`media_night_text`),value:i.nightText,onChange:e=>a({night_text:e})})]}),(0,E.jsx)(F,{as:`div`,children:(0,E.jsx)(`span`,{className:`label`,children:r(`media_sound_heading`)})}),(0,E.jsxs)(I,{children:[(0,E.jsx)(Y,{label:r(`media_mode_entity`),hint:r(`media_mode_entity_hint`),domains:[`sensor`,`select`,`input_text`],value:i.modeEntity,onChange:e=>a({mode_entity:e})}),(0,E.jsx)(Y,{label:r(`media_format_entity`),hint:r(`media_format_entity_hint`),domains:[`sensor`,`input_text`],value:i.formatEntity,onChange:e=>a({format_entity:e})})]}),(0,E.jsx)(K,{label:r(`media_layout`),hint:r(`media_layout_hint`),value:i.layout!==null,onChange:e=>a({speakers:e?g(o):``})}),i.layout&&(0,E.jsxs)(E.Fragment,{children:[(0,E.jsxs)(I,{children:[(0,E.jsx)(q,{label:r(`media_layout_bed`),value:String(o.bed),options:c(ne),onChange:e=>s({bed:Number(e)})}),(0,E.jsx)(q,{label:r(`media_layout_subs`),value:String(o.subs),options:c(pe),onChange:e=>s({subs:Number(e)})}),(0,E.jsx)(q,{label:r(`media_layout_heights`),value:String(o.heights),options:c(m),onChange:e=>s({heights:Number(e)})})]}),(0,E.jsx)(q,{label:r(`media_sofa`),value:i.sofa,options:re.map(e=>({value:e,label:r(`media_sofa_${e}`)})),onChange:e=>a({sofa:e})}),(0,E.jsx)(K,{label:r(`media_listener`),hint:r(`media_listener_hint`),value:i.listener,onChange:e=>a({listener:e})}),(0,E.jsx)(q,{label:r(`media_screen`),value:i.screen,options:v.map(e=>({value:e,label:r(`media_screen_${e}`)})),onChange:e=>a({screen:e})}),i.screen===`image`&&(0,E.jsx)(Ye,{label:r(`media_screen_picture`),hint:r(`media_screen_picture_hint`),accept:[`image/*`],value:i.screenImage,onChange:e=>a({screen_image:e})}),(0,E.jsx)(K,{label:r(`media_walls`),value:i.walls,onChange:e=>a({hide_walls:!e})}),(0,E.jsx)(K,{label:r(`media_room_movable`),hint:r(`media_room_movable_hint`),value:i.roomMovable,onChange:e=>a({room_movable:e})})]})]})},At=({value:e,onChange:t})=>{let[n,r]=(0,T.useState)(()=>Object.keys(e).length?JSON.stringify(e):``),[i,a]=(0,T.useState)(!1),o=d();return(0,E.jsxs)(F,{children:[(0,E.jsx)(`span`,{className:`label`,children:o(`options_json`)}),(0,E.jsx)(`input`,{type:`text`,value:n,placeholder:`{"hours": 24, "color": "#03a9f4"}`,onChange:e=>{r(e.target.value);try{let n=e.target.value.trim()?JSON.parse(e.target.value):{};if(n&&typeof n==`object`&&!Array.isArray(n)){a(!1),t(n);return}}catch{}a(!0)}}),i&&(0,E.jsx)(`small`,{children:o(`json_invalid`)})]})},jt=({value:e,entry:t,onChange:n})=>{let r=d(),i=Tt(t);return(0,E.jsx)(Y,{label:r(`entity`),value:e,domains:t?.domains,integration:t?.pickerIntegration,include:i,onChange:n})},Mt=({tile:e})=>{let t=d(),n=l(e.entity||void 0),r=S[e.type],i=e.name||n?.attributes.friendly_name||e.entity||(r?t(r.label):e.type);return(0,E.jsxs)(E.Fragment,{children:[(0,E.jsx)(C,{className:`icon`,icon:e.icon||r?.icon||`mdi:square-rounded-outline`}),(0,E.jsxs)(`span`,{className:`text`,children:[(0,E.jsx)(`span`,{children:i}),(0,E.jsxs)(`span`,{className:`secondary`,children:[r?t(r.label):e.type,` · `,e.w,` × `,e.h]})]})]})},Nt=({tiles:e,columns:t,rows:n,onChange:r})=>{let i=d(),a=wt(),o=(t,n)=>r(V(e,t,{...e[t],...n}));return(0,E.jsxs)(E.Fragment,{children:[e.length===0&&(0,E.jsxs)(De,{children:[(0,E.jsx)(C,{icon:`mdi:view-grid-plus-outline`}),(0,E.jsx)(`span`,{children:i(`empty_tiles`)})]}),e.map((s,c)=>{let l=S[s.type];return(0,E.jsxs)(P,{open:!s.entity&&l?.needsEntity!==!1||void 0,children:[(0,E.jsxs)(`summary`,{children:[(0,E.jsx)(Mt,{tile:s}),(0,E.jsx)(`span`,{onClick:e=>e.preventDefault(),children:(0,E.jsx)(Z,{index:c,length:e.length,onMove:t=>r(R(e,c,t)),onRemove:()=>r(e.filter((e,t)=>t!==c)),onDuplicate:()=>r([...e.slice(0,c+1),{...s,id:z()},...e.slice(c+1)])})})]}),(0,E.jsxs)(`div`,{className:`fold-body`,children:[(0,E.jsx)(q,{label:i(`type`),value:s.type,options:[...a.map(e=>({value:e.type,label:i(e.label)})),...a.some(e=>e.type===s.type)?[]:[{value:s.type,label:l?i(l.label):s.type}]],onChange:e=>{let r=S[e]?.size??[1,1];o(c,{type:e,w:Math.min(r[0],t),h:Math.min(r[1],n)})}}),l?.needsEntity!==!1&&(0,E.jsx)(jt,{value:s.entity,entry:l,onChange:e=>o(c,{entity:e})}),(0,E.jsxs)(I,{children:[(0,E.jsx)(W,{label:i(`name`),hint:i(`name_hint`),value:s.name,onChange:e=>o(c,{name:e})}),(0,E.jsx)(J,{label:i(`icon`),value:s.icon,onChange:e=>o(c,{icon:e})})]}),(0,E.jsxs)(I,{children:[(0,E.jsx)(G,{label:i(`width`),value:s.w,min:1,max:t,onChange:e=>o(c,{w:Math.max(1,Math.min(t,e))})}),(0,E.jsx)(G,{label:i(`height`),value:s.h,min:1,max:n,onChange:e=>o(c,{h:Math.max(1,Math.min(n,e))})})]}),s.type===`sensor`&&(0,E.jsx)(At,{value:s.options,onChange:e=>o(c,{options:e})}),s.type===`entity`&&s.entity.startsWith(`light.`)&&(0,E.jsx)(K,{label:i(`light_hide_presets`),hint:i(`light_hide_presets_hint`),value:s.options.hide_presets===!0,onChange:e=>o(c,{options:{...s.options,hide_presets:e}})}),(s.type===`cover`||s.type===`adaptive_cover`)&&(0,E.jsx)(q,{label:i(`cover_active_when`),hint:i(`cover_active_when_hint`),value:w.includes(s.options.active_when)?String(s.options.active_when):`open`,options:w.map(e=>({value:e,label:i(`cover_active_${e}`)})),onChange:e=>o(c,{options:{...s.options,active_when:e}})}),(s.type===`cover`||s.type===`adaptive_cover`)&&(0,E.jsx)(K,{label:i(`cover_stop_only_moving`),hint:i(`cover_stop_only_moving_hint`),value:s.options.stop_only_moving===!0,onChange:e=>o(c,{options:{...s.options,stop_only_moving:e}})}),(s.type===`cover`||s.type===`adaptive_cover`)&&(0,E.jsx)(Ue,{label:i(`cover_presets`),hint:i(`cover_presets_hint`),suggestions:[`0`,`25`,`50`,`75`,`100`],value:p(s.options.positions).map(String),onChange:e=>o(c,{options:{...s.options,positions:p(e)}})}),s.type===`better_lighting`&&(0,E.jsx)(Et,{tile:s,onChange:e=>o(c,{options:e})}),s.type===`media`&&(0,E.jsx)(kt,{tile:s,onChange:e=>o(c,{options:e})})]})]},s.id)}),(0,E.jsx)(`div`,{children:(0,E.jsx)(D,{icon:`mdi:plus`,appearance:`filled`,disabled:e.length>=x.tiles,onClick:()=>r([...e,{id:z(),type:`entity`,entity:``,name:``,icon:``,w:1,h:1,options:{}}]),children:i(`add_tile`)})})]})},Pt=()=>({id:z(),name:``,icon:``,status:[],columns:2,rows:2,square:!0,tiles:[]}),Ft=()=>({id:z(),columns:[75,25],rows:[50,50],sections:[]}),It=e=>({...B(e),id:z(),sections:e.sections.map(e=>({...B(e),id:z(),tiles:e.tiles.map(e=>({...e,id:z()}))}))}),Lt=e=>{let t=e.split(/[,/ ]+/).filter(Boolean).map(Number);return t.length&&t.length<=3&&t.every(e=>Number.isFinite(e)&&e>0)?t:null},Rt=({label:e,hint:t,value:n,onChange:r})=>(0,E.jsx)(W,{label:e,hint:t,value:n.join(`, `),onChange:e=>{let t=Lt(e);t&&r(t)}}),zt=({draft:e,update:t,open:n})=>{let r=d(),i=e.pages,a=n=>t({...e,pages:n});return(0,E.jsxs)(E.Fragment,{children:[(0,E.jsx)(Q,{title:r(`tab_pages`),lead:r(`lead_pages`)}),(0,E.jsx)(N,{children:i.map((e,t)=>(0,E.jsxs)(`li`,{children:[(0,E.jsxs)(`button`,{type:`button`,className:`open`,onClick:()=>n({kind:`page`,page:t}),children:[(0,E.jsx)(C,{className:`icon`,icon:`mdi:book-open-page-variant-outline`}),(0,E.jsxs)(`span`,{className:`text`,children:[(0,E.jsx)(`span`,{children:r(`page_n`,{n:t+1})}),(0,E.jsx)(`span`,{className:`secondary`,children:e.sections.map(e=>e.name).filter(Boolean).join(` · `)||r(`no_sections`)})]})]}),(0,E.jsx)(Z,{index:t,length:i.length,onMove:e=>a(R(i,t,e)),onDuplicate:i.length<x.pages?()=>a([...i.slice(0,t+1),It(e),...i.slice(t+1)]):void 0,onRemove:()=>i.length>1&&a(i.filter((e,n)=>n!==t))})]},e.id))}),(0,E.jsx)(`div`,{children:(0,E.jsx)(D,{icon:`mdi:plus`,appearance:`filled`,disabled:i.length>=x.pages,onClick:()=>{a([...i,Ft()]),n({kind:`page`,page:i.length})},children:r(`add_page`)})})]})},Bt=({draft:e,update:t,open:n,page:r})=>{let i=d(),a=e.pages[r],o=n=>t({...e,pages:V(e.pages,r,{...a,...n})}),s=a.columns.length*a.rows.length;return(0,E.jsxs)(E.Fragment,{children:[(0,E.jsx)(Q,{title:i(`page_n`,{n:r+1}),lead:i(`lead_page`)}),(0,E.jsxs)(M,{children:[(0,E.jsx)(`h3`,{children:i(`layout`)}),(0,E.jsxs)(I,{children:[(0,E.jsx)(Rt,{label:i(`column_split`),hint:i(`split_hint`),value:a.columns,onChange:e=>o({columns:e})}),(0,E.jsx)(Rt,{label:i(`row_split`),hint:i(`split_hint`),value:a.rows,onChange:e=>o({rows:e})})]})]}),(0,E.jsxs)(M,{children:[(0,E.jsx)(`h3`,{children:i(`sections`)}),(0,E.jsx)(`p`,{children:i(`sections_hint`,{cells:s})}),(0,E.jsx)(N,{children:Array.from({length:s},(e,t)=>{let s=a.sections[t];return s?(0,E.jsxs)(`li`,{children:[(0,E.jsxs)(`button`,{type:`button`,className:`open`,onClick:()=>n({kind:`section`,page:r,section:t}),children:[(0,E.jsx)(C,{className:`icon`,icon:s.icon||`mdi:view-grid-outline`}),(0,E.jsxs)(`span`,{className:`text`,children:[(0,E.jsx)(`span`,{children:s.name||i(`section_n`,{n:t+1})}),(0,E.jsxs)(`span`,{className:`secondary`,children:[i(`tiles_count`,{count:s.tiles.length}),` · `,s.columns,` × `,s.rows]})]})]}),(0,E.jsx)(Z,{index:t,length:a.sections.length,onMove:e=>o({sections:R(a.sections,t,e)}),onRemove:()=>o({sections:a.sections.filter((e,n)=>n!==t)})})]},s.id):(0,E.jsx)(`li`,{children:(0,E.jsxs)(`button`,{type:`button`,className:`open`,onClick:()=>{let e=[...a.sections];for(;e.length<=t;)e.push(Pt());o({sections:e}),n({kind:`section`,page:r,section:t})},children:[(0,E.jsx)(C,{className:`icon`,icon:`mdi:plus-box-outline`}),(0,E.jsxs)(`span`,{className:`text`,children:[(0,E.jsx)(`span`,{children:i(`add_section`)}),(0,E.jsx)(`span`,{className:`secondary`,children:i(`cell_n`,{n:t+1})})]})]})},`empty-${t}`)})})]})]})},Vt=({draft:e,update:t,page:n,section:r})=>{let i=d(),a=e.pages[n],o=a.sections[r],s=i=>t({...e,pages:V(e.pages,n,{...a,sections:V(a.sections,r,{...o,...i})})});return(0,E.jsxs)(E.Fragment,{children:[(0,E.jsx)(Q,{title:o.name||i(`section_n`,{n:r+1}),lead:i(`lead_section`)}),(0,E.jsxs)(M,{children:[(0,E.jsx)(`h3`,{children:i(`section_header`)}),(0,E.jsxs)(I,{children:[(0,E.jsx)(W,{label:i(`name`),value:o.name,onChange:e=>s({name:e})}),(0,E.jsx)(J,{label:i(`icon`),value:o.icon,onChange:e=>s({icon:e})})]}),(0,E.jsx)(X,{label:i(`status_entities`),value:o.status,max:2,domains:[`sensor`,`binary_sensor`],onChange:e=>s({status:e})})]}),(0,E.jsxs)(M,{children:[(0,E.jsx)(`h3`,{children:i(`grid`)}),(0,E.jsxs)(I,{children:[(0,E.jsx)(G,{label:i(`columns`),value:o.columns,min:1,max:x.sectionCells,onChange:e=>s({columns:e})}),(0,E.jsx)(G,{label:i(`rows`),value:o.rows,min:1,max:x.sectionCells,onChange:e=>s({rows:e})})]}),(0,E.jsx)(K,{label:i(`square_cells`),hint:i(`square_cells_hint`),value:o.square,onChange:e=>s({square:e})})]}),(0,E.jsxs)(M,{children:[(0,E.jsx)(`h3`,{children:i(`tiles`)}),(0,E.jsx)(Nt,{tiles:o.tiles,columns:o.columns,rows:o.rows,onChange:e=>s({tiles:e})})]})]})},Ht=({draft:e,update:t,open:n})=>{let r=d(),i=e.buttons,a=n=>t({...e,buttons:n});return(0,E.jsxs)(E.Fragment,{children:[(0,E.jsx)(Q,{title:r(`tab_buttons`),lead:r(`lead_buttons`)}),i.length>0&&(0,E.jsx)(N,{children:i.map((e,t)=>(0,E.jsxs)(`li`,{children:[(0,E.jsxs)(`button`,{type:`button`,className:`open`,onClick:()=>n({kind:`button`,button:t}),children:[(0,E.jsx)(C,{className:`icon`,icon:e.icon||`mdi:gesture-tap`}),(0,E.jsxs)(`span`,{className:`text`,children:[(0,E.jsx)(`span`,{children:e.name||r(`button_n`,{n:t+1})}),(0,E.jsx)(`span`,{className:`secondary`,children:r(`tiles_count`,{count:e.tiles.length})})]})]}),(0,E.jsx)(Z,{index:t,length:i.length,onMove:e=>a(R(i,t,e)),onRemove:()=>a(i.filter((e,n)=>n!==t))})]},e.id))}),(0,E.jsx)(`div`,{children:(0,E.jsxs)(D,{icon:`mdi:plus`,appearance:`filled`,disabled:i.length>=x.buttons,onClick:()=>{a([...i,{id:z(),name:``,icon:`mdi:gesture-tap`,columns:4,tiles:[]}]),n({kind:`button`,button:i.length})},children:[r(`add_button`),` (`,i.length,`/`,x.buttons,`)`]})})]})},Ut=({draft:e,update:t,button:n})=>{let r=d(),i=e.buttons[n],a=r=>t({...e,buttons:V(e.buttons,n,{...i,...r})});return(0,E.jsxs)(E.Fragment,{children:[(0,E.jsx)(Q,{title:i.name||r(`button_n`,{n:n+1}),lead:r(`lead_button`)}),(0,E.jsxs)(M,{children:[(0,E.jsxs)(I,{children:[(0,E.jsx)(W,{label:r(`name`),value:i.name,onChange:e=>a({name:e})}),(0,E.jsx)(J,{label:r(`icon`),value:i.icon,onChange:e=>a({icon:e})})]}),(0,E.jsx)(G,{label:r(`columns`),hint:r(`button_columns_hint`),value:i.columns,min:1,max:x.sectionCells,onChange:e=>a({columns:e})})]}),(0,E.jsxs)(M,{children:[(0,E.jsx)(`h3`,{children:r(`tiles`)}),(0,E.jsx)(Nt,{tiles:i.tiles,columns:i.columns,rows:x.sectionCells,onChange:e=>a({tiles:e})})]})]})},Wt=[{id:`tab-10`,label:`10″ tablet · 1280×800`,width:1280,height:800},{id:`tab-11`,label:`11″ tablet · 1194×834`,width:1194,height:834},{id:`tab-12`,label:`12″ tablet · 1366×1024`,width:1366,height:1024},{id:`fhd`,label:`Full HD · 1920×1080`,width:1920,height:1080},{id:`small`,label:`7″ panel · 1024×600`,width:1024,height:600}],Gt=({view:e,dashboards:t,...n})=>{switch(e.kind){case`general`:return(0,E.jsx)(ut,{...n});case`sidebar`:return(0,E.jsx)(bt,{...n,part:e.part});case`pages`:return(0,E.jsx)(zt,{...n});case`page`:return(0,E.jsx)(Bt,{...n,page:e.page});case`section`:return(0,E.jsx)(Vt,{...n,page:e.page,section:e.section});case`buttons`:return(0,E.jsx)(Ht,{...n});case`button`:return(0,E.jsx)(Ut,{...n,button:e.button});case`users`:return(0,E.jsx)(tt,{dashboards:t});case`json`:return(0,E.jsx)(Ct,{...n},n.draft.id)}},Kt=()=>{let e=d(),t=c(),{narrow:n}=ue(),[r,i]=(0,T.useState)(null),[a,o]=(0,T.useState)(null),[s,l]=(0,T.useState)(!1),[u,f]=(0,T.useState)(``),[p,ee]=(0,T.useState)({kind:`general`}),[m,h]=(0,T.useState)(()=>new Set),[g,_]=(0,T.useState)(!1),[te,v]=(0,T.useState)(!1),[ne,re]=(0,T.useState)(!1),[y,ie]=(0,T.useState)(!1),[oe,se]=(0,T.useState)(Wt[0].id),[b,ce]=(0,T.useState)(!1),le=Wt.find(e=>e.id===oe)??Wt[0],x=(0,T.useCallback)((e,t)=>{o(B(e.dashboards[t]??e.dashboards.default)),l(!1)},[]);(0,T.useEffect)(()=>{t?.sendMessagePromise({type:`better_wall_dashboard/document`}).then(e=>{i(e),x(e,`default`)}).catch(e=>f(String(e?.message??e)))},[t,x]),(0,T.useEffect)(()=>{if(!s)return;let e=e=>e.preventDefault();return window.addEventListener(`beforeunload`,e),()=>window.removeEventListener(`beforeunload`,e)},[s]);let de=(0,T.useCallback)(e=>{o(e),l(!0),f(``)},[]),S=(0,T.useCallback)((e,t)=>{ee(e),h(n=>new Set([...n,...ve(e),...t?[t]:[]])),_(!1),v(!1),ie(!1)},[]),fe=(0,T.useCallback)(e=>{h(t=>{let n=new Set(t);return n.delete(e)||n.add(e),n})},[]),{confirm:w,dialog:pe}=ot(),me=async()=>!s||w({title:e(`discard_title`),text:e(`discard_text`),confirm:e(`discard`),danger:!0}),he=async()=>{if(t&&a){f(e(`saving`));try{let n=await t.sendMessagePromise({type:`better_wall_dashboard/save_dashboard`,dashboard:a});i(e=>e&&{...e,dashboards:{...e.dashboards,[n.dashboard.id]:n.dashboard}}),o(B(n.dashboard)),l(!1),f(e(`saved`))}catch(e){f(String(e?.message??e))}}},ge=async()=>{r&&a&&await me()&&(r.dashboards[a.id]?x(r,a.id):x(r,`default`),f(``))},O=async e=>{r&&await me()&&(x(r,e),S({kind:`general`}))},k=async t=>{if(v(!1),!r||!await me())return;let n=B(t??r.dashboards.default);o({...n,id:z(),name:t?`${t.name} (2)`:e(`new_dashboard`)}),l(!0),S({kind:`general`})},j=async()=>{if(v(!1),!t||!a)return;let n=e=>lt(e)||f(e);try{let r=await t.sendMessagePromise({type:`better_wall_dashboard/reload_tablets`,dashboard_id:a.id});n(e(`tablets_reloaded`,{count:r.reached}))}catch(e){n(String(e?.message??e))}},we=async()=>{if(v(!1),!t||!a||!r||a.id==="default"||!await w({title:e(`delete_title`,{name:a.name}),text:e(`confirm_delete`,{name:a.name}),confirm:e(`delete`),danger:!0}))return;r.dashboards[a.id]&&await t.sendMessagePromise({type:`better_wall_dashboard/delete_dashboard`,dashboard_id:a.id});let n={...r.dashboards};delete n[a.id];let o={...r,dashboards:n};i(o),x(o,`default`),S({kind:`general`})},M=(0,T.useMemo)(()=>Object.values(r?.dashboards??{}),[r]),N=(0,T.useMemo)(()=>{let e=Object.values(r?.dashboards??{}).map(e=>({id:e.id,name:e.name}));return a&&!e.some(e=>e.id===a.id)&&e.push({id:a.id,name:a.name}),e.map(e=>e.id===a?.id?{...e,name:a.name}:e)},[r,a]);if(!a)return(0,E.jsxs)(be,{children:[(0,E.jsx)(xe,{"data-narrow":n,children:(0,E.jsx)(`span`,{className:`app-title`,children:e(`editor_title`)})}),(0,E.jsx)(`p`,{style:{padding:24},children:u||e(`loading`)})]});let P=_e(p,a),De=ye(P,{label:t=>e(t),page:t=>e(`page_n`,{n:t+1}),section:(t,n)=>a.pages[t]?.sections[n]?.name||e(`section_n`,{n:n+1}),button:t=>a.buttons[t]?.name||e(`button_n`,{n:t+1})}),ke=P.kind===`page`||P.kind===`section`?P.page:void 0,je=P.kind!==`users`;return(0,E.jsx)(Ze,{children:(0,E.jsxs)(be,{children:[(0,E.jsxs)(xe,{"data-narrow":n,children:[(0,E.jsx)(A,{type:`button`,className:`only-narrow`,"aria-label":e(`menu`),onClick:e=>ae(e.currentTarget),children:(0,E.jsx)(C,{icon:`mdi:menu`})}),(0,E.jsx)(A,{type:`button`,className:`only-drawer`,"aria-label":e(`editor_menu`),onClick:()=>_(!0),children:(0,E.jsx)(C,{icon:`mdi:format-list-bulleted`})}),(0,E.jsxs)(`div`,{className:`titles`,children:[(0,E.jsx)(`span`,{className:`app-title`,children:e(`editor_title`)}),(0,E.jsxs)(`nav`,{"aria-label":e(`editor_menu`),children:[(0,E.jsx)(`button`,{type:`button`,onClick:()=>S({kind:`general`}),children:a.name}),De.map((e,t)=>(0,E.jsxs)(`span`,{children:[`› `,e.view?(0,E.jsx)(`button`,{type:`button`,onClick:()=>S(e.view),children:e.label}):e.label]},t))]})]}),(0,E.jsx)(`span`,{className:`spacer`}),(0,E.jsx)(A,{type:`button`,className:`only-no-preview`,"aria-pressed":y,"aria-label":e(`preview`),"data-tip":e(`preview`),onClick:()=>ie(e=>!e),children:(0,E.jsx)(C,{icon:y?`mdi:form-select`:`mdi:tablet-dashboard`})}),(0,E.jsxs)(Se,{children:[(0,E.jsx)(A,{type:`button`,"aria-label":e(`more`),"aria-expanded":te,onClick:()=>v(e=>!e),children:(0,E.jsx)(C,{icon:`mdi:dots-vertical`})}),te&&(0,E.jsxs)(`div`,{className:`menu`,role:`menu`,children:[(0,E.jsxs)(`button`,{type:`button`,role:`menuitem`,onClick:()=>void k(),children:[(0,E.jsx)(C,{icon:`mdi:plus`}),` `,e(`new_dashboard`)]}),(0,E.jsxs)(`button`,{type:`button`,role:`menuitem`,onClick:()=>void k(a),children:[(0,E.jsx)(C,{icon:`mdi:content-copy`}),` `,e(`duplicate`)]}),(0,E.jsxs)(`button`,{type:`button`,role:`menuitem`,onClick:()=>void j(),children:[(0,E.jsx)(C,{icon:`mdi:tablet-cellphone`}),` `,e(`reload_tablets`)]}),(0,E.jsxs)(`button`,{type:`button`,role:`menuitem`,onClick:()=>S({kind:`json`}),children:[(0,E.jsx)(C,{icon:`mdi:code-json`}),` `,e(`edit_json`)]}),(0,E.jsxs)(`button`,{type:`button`,role:`menuitem`,className:`danger`,disabled:a.id==="default",onClick:()=>void we(),children:[(0,E.jsx)(C,{icon:`mdi:delete-outline`}),` `,e(`delete_dashboard`)]}),(0,E.jsx)(`hr`,{}),(0,E.jsxs)(`button`,{type:`button`,role:`menuitem`,onClick:()=>{v(!1),re(!0)},children:[(0,E.jsx)(C,{icon:`mdi:information-outline`}),` `,e(`about`)]})]})]})]}),(0,E.jsxs)(Ce,{children:[(0,E.jsx)(Te,{$open:g,onClick:()=>_(!1)}),(0,E.jsx)(Ae,{dashboards:N,draft:a,view:P,expanded:m,open:g,onToggle:fe,onOpen:S,onSwitch:e=>void O(e),onNewDashboard:()=>void k()}),(0,E.jsxs)(Ee,{$hidden:y,children:[(0,E.jsx)(`div`,{className:`screen-body`,children:(0,E.jsx)(st.Provider,{value:M,children:(0,E.jsx)(Gt,{view:P,dashboards:N,draft:a,update:de,open:S})})}),je&&(0,E.jsxs)(`div`,{className:`screen-foot`,children:[(0,E.jsx)(`span`,{className:`status`,children:s?e(`unsaved`):u}),(0,E.jsxs)(`span`,{className:`end`,children:[(0,E.jsx)(D,{appearance:`plain`,disabled:!s,onClick:()=>void ge(),children:e(`discard`)}),(0,E.jsx)(D,{appearance:`accent`,icon:`mdi:content-save-outline`,disabled:!s,onClick:he,children:e(`save`)})]})]})]}),(0,E.jsxs)(Oe,{$shown:y,children:[(0,E.jsxs)(`div`,{className:`preview-bar`,children:[(0,E.jsx)(`h2`,{children:e(`preview`)}),(0,E.jsx)(q,{label:e(`device`),value:oe,options:Wt.map(e=>({value:e.id,label:e.label})),onChange:se}),(0,E.jsx)(A,{type:`button`,style:{color:`var(--secondary-text-color)`},"aria-label":e(b?`landscape`:`portrait`),"data-tip":e(b?`landscape`:`portrait`),onClick:()=>ce(e=>!e),children:(0,E.jsx)(C,{icon:b?`mdi:phone-rotate-landscape`:`mdi:phone-rotate-portrait`})})]}),(0,E.jsx)(`div`,{className:`stage`,children:(0,E.jsx)(Ne,{dashboard:a,device:le,portrait:b,page:ke})})]})]}),(0,E.jsx)(it,{open:ne,onClose:()=>re(!1)}),pe]})})};export{Kt as default};