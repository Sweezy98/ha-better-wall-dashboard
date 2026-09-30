import{A as e,B as t,C as n,D as r,E as i,F as a,H as o,I as s,L as c,M as l,N as u,O as d,P as f,R as p,S as m,T as h,V as ee,_ as te,a as ne,b as re,c as ie,d as g,f as _,g as ae,h as v,i as oe,j as se,k as ce,l as le,m as y,n as ue,o as de,p as b,r as fe,s as x,t as S,u as pe,v as me,w as he,x as C,y as ge,z as w}from"./boot-Bi78TO1d.js";var T=o(ee(),1),E=o(t(),1),_e=p.button`
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
  ${({$appearance:e,$danger:t})=>{let n=t?`var(--error-color, #db4437)`:`var(--primary-color, #03a9f4)`;return e===`accent`?c`
        background: ${n};
        color: var(--text-primary-color, #fff);
      `:e===`filled`?c`
        background: color-mix(in srgb, ${n} 16%, transparent);
        color: ${n};
      `:c`
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
`,D=()=>()=>{},O=({children:e,onClick:t,icon:n,appearance:r=`plain`,danger:a=!1,disabled:o,title:s})=>{let c=(0,T.useSyncExternalStore)(D,()=>!!customElements.get(`ha-button`)),l=(0,E.jsxs)(E.Fragment,{children:[n&&(0,E.jsx)(`span`,{slot:`start`,style:{display:`inline-flex`},children:(0,E.jsx)(i,{icon:n,size:`18px`})}),e]});return c?(0,T.createElement)(`ha-button`,{appearance:r,variant:a?`danger`:`brand`,disabled:o||void 0,"data-tip":s,onClick:t},l):(0,E.jsx)(_e,{type:`button`,$appearance:r,$danger:a,disabled:o,"data-tip":s,onClick:t,children:l})},k=[{part:`clock`,icon:`mdi:clock-outline`,label:`clock`},{part:`status`,icon:`mdi:wifi-star`,label:`nav_status`},{part:`climate`,icon:`mdi:home-thermometer-outline`,label:`room_climate`},{part:`persons`,icon:`mdi:account-multiple-outline`,label:`persons`},{part:`openings`,icon:`mdi:window-open-variant`,label:`openings`},{part:`batteries`,icon:`mdi:battery-high`,label:`batteries`},{part:`travel`,icon:`mdi:car-clock`,label:`travel_time`},{part:`quick`,icon:`mdi:gesture-tap-button`,label:`quick_actions`},{part:`calendar`,icon:`mdi:calendar-month-outline`,label:`calendar`},{part:`weather`,icon:`mdi:weather-partly-cloudy`,label:`weather`},{part:`notifications`,icon:`mdi:bell-outline`,label:`notifications`},{part:`system`,icon:`mdi:chart-box-outline`,label:`system_stats`}];function ve(e,t){switch(e.kind){case`page`:return e.page<t.pages.length?e:{kind:`pages`};case`section`:{let n=t.pages[e.page];return n?e.section<n.sections.length?e:{kind:`page`,page:e.page}:{kind:`pages`}}case`button`:return e.button<t.buttons.length?e:{kind:`buttons`};default:return e}}function ye(e){switch(e.kind){case`sidebar`:return[`sidebar`];case`page`:return[`pages`];case`section`:return[`pages`,`page-${e.page}`];case`button`:return[`buttons`];default:return[]}}function be(e,t){return JSON.stringify(e)===JSON.stringify(t)}function xe(e,t){switch(e.kind){case`general`:return[{label:t.label(`tab_general`)}];case`sidebar`:{let n=k.find(t=>t.part===e.part);return[{label:t.label(`tab_sidebar`)},{label:t.label(n?.label??e.part)}]}case`pages`:return[{label:t.label(`tab_pages`)}];case`page`:return[{label:t.label(`tab_pages`),view:{kind:`pages`}},{label:t.page(e.page)}];case`section`:return[{label:t.label(`tab_pages`),view:{kind:`pages`}},{label:t.page(e.page),view:{kind:`page`,page:e.page}},{label:t.section(e.page,e.section)}];case`buttons`:return[{label:t.label(`tab_buttons`)}];case`button`:return[{label:t.label(`tab_buttons`),view:{kind:`buttons`}},{label:t.button(e.button)}];case`users`:return[{label:t.label(`tab_users`)}];case`json`:return[{label:t.label(`tab_json`)}]}}var Se=p.div`
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
`,Ce=p.header`
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
`,A=p.button`
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
`,we=p.div`
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
`,Te=p.div`
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
`,j=p.div`
  background: var(--card-background-color, #1c1c1c);
  border-radius: var(--ha-card-border-radius, 12px);
  box-shadow: var(--ha-card-box-shadow, none);
  border: 1px solid var(--ha-card-border-color, var(--divider-color, rgba(225, 225, 225, 0.12)));
  box-sizing: border-box;
  min-width: 0;
  min-height: 0;
`,Ee=p(j)`
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
`,De=p.div`
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
`,Oe=p(j)`
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
`,M=p.section`
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
`,N=p.ul`
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
`,P=p.details`
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
`,ke=p.div`
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
`,Ae=p(j)`
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
`,je=p.dialog`
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
`,Me=({dashboards:e,draft:t,view:n,expanded:r,open:a,onToggle:o,onOpen:c,onSwitch:l,onNewDashboard:u})=>{let d=s(),f=(e,t,r)=>(0,E.jsx)(`li`,{children:(0,E.jsxs)(`button`,{type:`button`,"aria-current":be(n,e)?`page`:void 0,onClick:()=>c(e),children:[(0,E.jsx)(i,{className:`icon`,icon:r}),(0,E.jsx)(`span`,{className:`grow`,children:t})]})},JSON.stringify(e)),p=(e,t,a,s,l)=>{let u=r.has(e);return(0,E.jsxs)(`li`,{children:[(0,E.jsxs)(`button`,{type:`button`,"aria-expanded":u,"aria-current":be(n,t)?`page`:void 0,onClick:()=>c(t,e),children:[(0,E.jsx)(i,{className:`icon`,icon:s}),(0,E.jsx)(`span`,{className:`grow`,children:a}),(0,E.jsx)(`span`,{className:`twist`,"data-open":u,role:`button`,"aria-label":a,onClick:t=>{t.stopPropagation(),o(e)},children:(0,E.jsx)(i,{icon:`mdi:chevron-right`})})]}),u&&(0,E.jsx)(`ul`,{className:`sub`,children:l})]},e)},m=(0,E.jsxs)(E.Fragment,{children:[f({kind:`general`},d(`tab_general`),`mdi:cog-outline`),p(`sidebar`,{kind:`sidebar`,part:k[0].part},d(`tab_sidebar`),`mdi:dock-left`,k.map(e=>f({kind:`sidebar`,part:e.part},d(e.label),e.icon))),p(`pages`,{kind:`pages`},d(`tab_pages`),`mdi:book-open-page-variant-outline`,t.pages.map((e,t)=>e.sections.length?p(`page-${t}`,{kind:`page`,page:t},d(`page_n`,{n:t+1}),`mdi:file-outline`,e.sections.map((e,n)=>f({kind:`section`,page:t,section:n},e.name||d(`section_n`,{n:n+1}),e.icon||`mdi:view-grid-outline`))):f({kind:`page`,page:t},d(`page_n`,{n:t+1}),`mdi:file-outline`))),p(`buttons`,{kind:`buttons`},d(`tab_buttons`),`mdi:gesture-tap-button`,t.buttons.map((e,t)=>f({kind:`button`,button:t},e.name||d(`button_n`,{n:t+1}),e.icon||`mdi:gesture-tap`)))]});return(0,E.jsxs)(Ee,{$open:a,as:`nav`,"aria-label":d(`editor_title`),children:[(0,E.jsx)(`div`,{className:`heading`,children:d(`nav_dashboards`)}),(0,E.jsxs)(`ul`,{children:[e.map(e=>e.id===t.id?(0,E.jsxs)(`li`,{children:[(0,E.jsxs)(`button`,{type:`button`,"aria-expanded":!0,onClick:()=>c({kind:`general`}),children:[(0,E.jsx)(i,{className:`icon`,icon:`mdi:tablet-dashboard`}),(0,E.jsx)(`span`,{className:`grow`,children:(0,E.jsx)(`strong`,{children:t.name})})]}),(0,E.jsx)(`ul`,{className:`sub`,children:m})]},e.id):(0,E.jsx)(`li`,{children:(0,E.jsxs)(`button`,{type:`button`,onClick:()=>l(e.id),children:[(0,E.jsx)(i,{className:`icon`,icon:`mdi:tablet-dashboard`}),(0,E.jsx)(`span`,{className:`grow`,children:e.name})]})},e.id)),(0,E.jsx)(`li`,{className:`add`,children:(0,E.jsxs)(`button`,{type:`button`,onClick:u,children:[(0,E.jsx)(i,{className:`icon`,icon:`mdi:plus`}),(0,E.jsx)(`span`,{className:`grow`,children:d(`new_dashboard`)})]})})]}),(0,E.jsx)(`div`,{className:`heading`,children:d(`nav_house`)}),(0,E.jsx)(`ul`,{children:f({kind:`users`},d(`tab_users`),`mdi:account-multiple-outline`)})]})},Ne=p.div`
  position: relative;
  width: 100%;
  height: 100%;
  min-height: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
`,Pe=p.div`
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
`,Fe=(0,T.memo)(({dashboard:e,device:t,portrait:n,page:i})=>{let a=s(),o=(0,T.useRef)(null),c=(0,T.useRef)(null),[l,u]=(0,T.useState)(null),d=n?t.height:t.width,f=n?t.width:t.height,p=l?Math.min((l.width-40)/d,(l.height-40)/f):.5,m=Math.max(.1,Math.min(1,Math.floor(p*1e3)/1e3));(0,T.useLayoutEffect)(()=>{let e=o.current;if(!e)return;let t=()=>u({width:e.clientWidth,height:e.clientHeight});t();let n=new ResizeObserver(t);return n.observe(e),()=>n.disconnect()},[]);let h=(0,T.useRef)(null);(0,T.useLayoutEffect)(()=>{let e=c.current,t=h.current;if(h.current={width:d,height:f,scale:m,portrait:n},!e||!t||!l)return;let r=`translate(-50%, -50%) scale(${m})`;if(t.portrait!==n){let i=Math.min(t.scale,m)*.92;e.animate([{transform:`translate(-50%, -50%) scale(${t.scale}) rotate(${n?90:-90}deg)`},{transform:`translate(-50%, -50%) scale(${i}) rotate(${n?45:-45}deg)`,offset:.5},{transform:r}],{duration:750,easing:`cubic-bezier(0.45, 0, 0.25, 1)`})}else(t.width!==d||t.height!==f)&&e.animate([{width:`${t.width}px`,height:`${t.height}px`,transform:`translate(-50%, -50%) scale(${t.scale})`},{width:`${d}px`,height:`${f}px`,transform:r}],{duration:450,easing:`cubic-bezier(0.3, 0, 0.2, 1)`})},[d,f,m,n,l]);let ee=(0,T.useMemo)(()=>({dashboard:e,dashboards:[],kiosk:!1,is_admin:!0,pin_required:!1}),[e]);return(0,E.jsx)(Ne,{ref:o,"aria-label":a(`preview`),children:(0,E.jsx)(Pe,{ref:c,style:{width:d,height:f,transform:`translate(-50%, -50%) scale(${m})`},children:(0,E.jsx)(r,{view:ee,focusPage:i,children:(0,E.jsx)(oe,{})})})})}),F=p.label`
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
`,Ie=p.label`
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
`,I=p.div`
  display: grid;
  grid-template-columns: ${({$columns:e})=>e??`repeat(auto-fit, minmax(220px, 1fr))`};
  gap: 16px;
  align-items: start;
`,L=p.button`
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
`;function R(e,t,n){if(n<0||n>=e.length)return e;let r=[...e],[i]=r.splice(t,1);return r.splice(n,0,i),r}function z(){let e=new Uint8Array(6);return crypto.getRandomValues(e),Array.from(e,e=>e.toString(16).padStart(2,`0`)).join(``)}var B=e=>JSON.parse(JSON.stringify(e)),V=(e,t,n)=>e.map((e,r)=>r===t?n:e),H=({selector:e,value:t,onChange:n,label:r,helper:i,required:a=!1})=>{let o=(0,T.useRef)(null),s=(0,T.useRef)(null),c=(0,T.useRef)(n);(0,T.useEffect)(()=>{c.current=n}),(0,T.useEffect)(()=>{let e=document.createElement(`ha-selector`);e.hass=S();let t=t=>{t.stopPropagation();let n=t.detail.value;e.value=n,c.current(n)};e.addEventListener(`value-changed`,t),o.current?.append(e),s.current=e;let n=ue(t=>{e.hass=t});return()=>{n(),e.removeEventListener(`value-changed`,t),e.remove(),s.current=null}},[]);let l=JSON.stringify(e);return(0,T.useEffect)(()=>{let e=s.current;e&&(e.selector=JSON.parse(l),e.label=r,e.helper=i,e.required=a)},[l,r,i,a]),(0,T.useEffect)(()=>{let e=s.current;e&&e.value!==t&&(e.value=t)},[t]),(0,E.jsx)(`div`,{ref:o,className:`ha-field`})},Le=[`ha-selector`,`ha-entity-picker`,`ha-switch`,`ha-icon-picker`],Re=[{tag:`hui-entities-card`,config:{type:`entities`,entities:[]}},{tag:`hui-button-card`,config:{type:`button`}}],ze=null,Be=!1;function Ve(){return Be&&Le.every(e=>customElements.get(e))}var He=e=>new Promise(t=>window.setTimeout(()=>t(!1),e));async function Ue(){let e=Object.assign(document.createElement(`ha-selector`),{selector:{text:{}},hidden:!0});document.body.append(e);try{return await Promise.race([customElements.whenDefined(`ha-selector-text`).then(()=>!0),He(5e3)])}finally{e.remove()}}function We(){return Ve()?Promise.resolve(!0):(ze??=(async()=>{let e=window.loadCardHelpers,t=null;for(let n of Re)try{let r=customElements.get(n.tag);!r?.getConfigElement&&e&&(t??=await e(),r=(await t.createCardElement(n.config)).constructor),await r?.getConfigElement?.()}catch{}return Be=!!customElements.get(`ha-selector`)&&await Ue(),Ve()})(),ze)}function U(){let[e,t]=(0,T.useState)(Ve),n=(0,T.useSyncExternalStore)(ue,()=>S()!==null);return(0,T.useEffect)(()=>{if(e||!n)return;let r=!0;return We().then(e=>r&&e&&t(!0)),()=>{r=!1}},[e,n]),e&&n}var W=({label:e,hint:t,value:n,onChange:r,placeholder:i,type:a=`text`})=>U()?(0,E.jsx)(H,{selector:{text:a===`text`?{}:{type:a}},value:n,label:e,helper:t,onChange:e=>r(typeof e==`string`?e:``)}):(0,E.jsxs)(F,{children:[(0,E.jsx)(`span`,{className:`label`,children:e}),(0,E.jsx)(`input`,{type:a,value:n,placeholder:i,onChange:e=>r(e.target.value)}),t&&(0,E.jsx)(`small`,{children:t})]}),Ge=({label:e,hint:t,value:n,onChange:r,suggestions:i=[]})=>{let a=U(),o=e=>[...new Set(e.filter(e=>typeof e==`string`).map(e=>e.trim()).filter(Boolean))];if(a){let a=[...new Set([...n,...i])];return(0,E.jsxs)(F,{as:`div`,children:[(0,E.jsx)(`span`,{className:`label`,children:e}),t&&(0,E.jsx)(`small`,{children:t}),(0,E.jsx)(H,{selector:{select:{multiple:!0,custom_value:!0,mode:`dropdown`,sort:!1,options:a}},value:n,label:e,onChange:e=>r(Array.isArray(e)?o(e):[])})]})}return(0,E.jsxs)(F,{children:[(0,E.jsx)(`span`,{className:`label`,children:e}),(0,E.jsx)(`input`,{type:`text`,value:n.join(`, `),onChange:e=>r(o(e.target.value.split(`,`)))}),t&&(0,E.jsx)(`small`,{children:t})]})},G=({label:e,hint:t,value:n,onChange:r,min:i,max:a,step:o=1,unit:s})=>{let c=U(),l=e=>{let t=Number(e);e!==``&&e!==null&&Number.isFinite(t)&&r(t)};return c?(0,E.jsx)(H,{selector:{number:{min:i,max:a,step:o,mode:`box`,unit_of_measurement:s}},value:n,label:e,helper:t,onChange:l}):(0,E.jsxs)(F,{children:[(0,E.jsx)(`span`,{className:`label`,children:e}),(0,E.jsx)(`input`,{type:`number`,value:n,min:i,max:a,step:o,onChange:e=>l(e.target.value)}),t&&(0,E.jsx)(`small`,{children:t})]})},Ke=({label:e,hint:t,value:n,onChange:r,min:i,max:a,step:o,unit:s,scale:c=1})=>{let l=U(),u=Math.round(n*c*1e3)/1e3,d=e=>{let t=Number(e);Number.isFinite(t)&&r(t/c)};return l?(0,E.jsx)(H,{selector:{number:{min:i,max:a,step:o,mode:`slider`,unit_of_measurement:s}},value:u,label:e,helper:t,onChange:d}):(0,E.jsxs)(F,{children:[(0,E.jsxs)(`span`,{className:`label`,children:[e,`: `,u,s?` ${s}`:``]}),(0,E.jsx)(`input`,{type:`range`,value:u,min:i,max:a,step:o,onChange:e=>d(e.target.value)}),t&&(0,E.jsx)(`small`,{children:t})]})},K=({label:e,hint:t,value:n,onChange:r})=>U()?(0,E.jsx)(H,{selector:{boolean:{}},value:n,label:e,helper:t,onChange:e=>r(!!e)}):(0,E.jsxs)(Ie,{children:[(0,E.jsx)(`input`,{type:`checkbox`,checked:n,onChange:e=>r(e.target.checked)}),(0,E.jsxs)(`span`,{children:[e,t&&(0,E.jsx)(`small`,{children:t})]})]}),qe=e=>Array.isArray(e)&&e.length===3&&e.every(e=>typeof e==`number`)?`#${e.map(e=>Math.round(Math.min(255,Math.max(0,e))).toString(16).padStart(2,`0`)).join(``)}`:null,Je=e=>[1,3,5].map(t=>parseInt(e.slice(t,t+2),16)||0),Ye=({label:e,hint:t,value:n,onChange:r})=>U()?(0,E.jsx)(H,{selector:{color_rgb:{}},value:Je(n),label:e,helper:t,onChange:e=>{let t=qe(e);t&&r(t)}}):(0,E.jsxs)(F,{children:[(0,E.jsx)(`span`,{className:`label`,children:e}),(0,E.jsx)(`input`,{type:`color`,value:n,onChange:e=>r(e.target.value)}),t&&(0,E.jsx)(`small`,{children:t})]}),Xe=({label:e,hint:t,value:n,onChange:r})=>U()?(0,E.jsx)(H,{selector:{time:{}},value:n||void 0,label:e,helper:t,onChange:e=>r(typeof e==`string`?e.slice(0,5):``)}):(0,E.jsxs)(F,{children:[(0,E.jsx)(`span`,{className:`label`,children:e}),(0,E.jsx)(`input`,{type:`time`,value:n,onChange:e=>r(e.target.value)}),t&&(0,E.jsx)(`small`,{children:t})]}),q=({label:e,hint:t,value:n,onChange:r,options:i})=>U()?(0,E.jsx)(H,{selector:{select:{options:i,mode:`dropdown`}},value:n,label:e,helper:t,required:!0,onChange:e=>typeof e==`string`&&r(e)}):(0,E.jsxs)(F,{children:[(0,E.jsx)(`span`,{className:`label`,children:e}),(0,E.jsx)(`select`,{value:n,onChange:e=>r(e.target.value),children:i.map(e=>(0,E.jsx)(`option`,{value:e.value,children:e.label},e.value))}),t&&(0,E.jsx)(`small`,{children:t})]}),J=({label:e,hint:t,value:n,onChange:r})=>U()?(0,E.jsx)(H,{selector:{icon:{}},value:n,label:e,helper:t,onChange:e=>r(typeof e==`string`?e:``)}):(0,E.jsxs)(F,{children:[(0,E.jsx)(`span`,{className:`label`,children:e}),(0,E.jsxs)(`span`,{className:`with-icon`,children:[(0,E.jsx)(`input`,{type:`text`,value:n,placeholder:`mdi:…`,onChange:e=>r(e.target.value)}),n&&(0,E.jsx)(i,{icon:n,size:`24px`})]}),t&&(0,E.jsx)(`small`,{children:t})]}),Ze=({label:e,hint:t,value:n,onChange:r,accept:i})=>{let a=U(),o=(0,T.useMemo)(()=>n.startsWith(`media-source://`)?{media_content_id:n,media_content_type:i[0]}:void 0,[n,i]);return a?(0,E.jsx)(H,{selector:{media:{accept:i}},value:o,label:e,helper:t,onChange:e=>r(e?.media_content_id??``)}):(0,E.jsx)(W,{label:e,hint:t,value:n,onChange:r})},Qe=(0,T.createContext)([]),$e=({children:e})=>{let t=w(pe(e=>{let t={};for(let[n,r]of Object.entries(e.entities))t[n]=r.attributes.friendly_name||n;return t})),n=(0,T.useMemo)(()=>Object.entries(t).map(([e,t])=>({id:e,name:t})).sort((e,t)=>e.id.localeCompare(t.id)),[t]);return(0,E.jsx)(Qe.Provider,{value:n,children:e})},et=(e,t={},n,r)=>({entity:{...r?{include_entities:r}:{},...e?.length||n?{filter:{...e?.length?{domain:e}:{},...n?{integration:n}:{}}}:{},...t}}),tt=({value:e,domains:t,onChange:n})=>{let r=(0,T.useContext)(Qe),i=(0,T.useId)(),a=(0,T.useMemo)(()=>t?.length?r.filter(e=>t.includes(e.id.split(`.`)[0])):r,[r,t]);return(0,E.jsxs)(E.Fragment,{children:[(0,E.jsx)(`input`,{type:`text`,list:i,value:e,placeholder:t?.length?`${t[0]}.…`:`domain.object_id`,onChange:e=>n(e.target.value.trim())}),(0,E.jsx)(`datalist`,{id:i,children:a.map(e=>(0,E.jsx)(`option`,{value:e.id,children:e.name},e.id))})]})},Y=({label:e,hint:t,value:n,onChange:r,domains:i,integration:a,include:o})=>{let c=U(),l=(0,T.useContext)(Qe),u=s();if(c)return(0,E.jsx)(H,{selector:et(i,{},a,o),value:n||void 0,label:e,helper:t,onChange:e=>r(typeof e==`string`?e:``)});let d=l.find(e=>e.id===n);return(0,E.jsxs)(F,{children:[(0,E.jsx)(`span`,{className:`label`,children:e}),(0,E.jsx)(tt,{value:n,domains:i,onChange:r}),n&&(0,E.jsx)(`small`,{children:d?d.name:u(`not_found`)}),t&&(0,E.jsx)(`small`,{children:t})]})},X=({label:e,hint:t,value:n,onChange:r,domains:a,max:o,include:c})=>{let l=U(),u=s(),d=e=>r(o===void 0?e:e.slice(0,o));return l?(0,E.jsx)(H,{selector:et(a,{multiple:!0,reorder:!0},void 0,c),value:n,label:e,helper:t,onChange:e=>d(Array.isArray(e)?e.filter(e=>typeof e==`string`):[])}):(0,E.jsxs)(F,{as:`div`,children:[(0,E.jsx)(`span`,{className:`label`,children:e}),n.map((e,t)=>(0,E.jsxs)(I,{$columns:`minmax(0, 1fr) auto`,children:[(0,E.jsx)(tt,{value:e,domains:a,onChange:e=>d(n.map((n,r)=>r===t?e:n))}),(0,E.jsx)(Z,{index:t,length:n.length,onMove:e=>d(R(n,t,e)),onRemove:()=>d(n.filter((e,n)=>n!==t))})]},t)),(o===void 0||n.length<o)&&(0,E.jsx)(L,{type:`button`,className:`add`,onClick:()=>d([...n,``]),"data-tip":u(`add`),"aria-label":u(`add`),children:(0,E.jsx)(i,{icon:`mdi:plus`})}),t&&(0,E.jsx)(`small`,{children:t})]})},Z=({index:e,length:t,onMove:n,onRemove:r,onDuplicate:a})=>{let o=s();return(0,E.jsxs)(`span`,{className:`list-controls`,children:[(0,E.jsx)(L,{type:`button`,disabled:e===0,onClick:()=>n(e-1),"data-tip":o(`move_up`),"aria-label":o(`move_up`),children:(0,E.jsx)(i,{icon:`mdi:arrow-up`})}),(0,E.jsx)(L,{type:`button`,disabled:e===t-1,onClick:()=>n(e+1),"data-tip":o(`move_down`),"aria-label":o(`move_down`),children:(0,E.jsx)(i,{icon:`mdi:arrow-down`})}),a&&(0,E.jsx)(L,{type:`button`,onClick:a,"data-tip":o(`duplicate`),"aria-label":o(`duplicate`),children:(0,E.jsx)(i,{icon:`mdi:content-copy`})}),(0,E.jsx)(L,{type:`button`,$danger:!0,onClick:r,"data-tip":o(`remove`),"aria-label":o(`remove`),children:(0,E.jsx)(i,{icon:`mdi:delete-outline`})})]})},Q=({title:e,lead:t})=>(0,E.jsxs)(E.Fragment,{children:[(0,E.jsx)(`h2`,{children:e}),t&&(0,E.jsx)(`p`,{className:`lead`,children:t})]}),nt=p.span`
  margin-left: 8px;
  padding: 1px 8px;
  border-radius: 999px;
  font-size: 12px;
  font-weight: 400;
  background: var(--secondary-background-color, #282828);
  color: var(--secondary-text-color, #9b9b9b);
`,rt=({dashboards:e})=>{let t=s(),n=f(),[r,a]=(0,T.useState)(null);(0,T.useEffect)(()=>{n?.sendMessagePromise({type:`better_wall_dashboard/users`}).then(e=>a(e.users)).catch(()=>a([]))},[n]);let o=(0,T.useCallback)(async(e,t)=>{if(!n)return;a(n=>n?.map(n=>n.id===e.id?{...n,...t}:n)??null);let r=await n.sendMessagePromise({type:`better_wall_dashboard/save_user`,user_id:e.id,...t});a(t=>t?.map(t=>t.id===e.id?{...t,...r}:t)??null)},[n]);return(0,E.jsxs)(E.Fragment,{children:[(0,E.jsx)(Q,{title:t(`tab_users`),lead:t(`lead_users`)}),r?.map(n=>(0,E.jsxs)(P,{open:!n.is_admin||void 0,children:[(0,E.jsxs)(`summary`,{children:[(0,E.jsx)(i,{className:`icon`,icon:n.is_admin?`mdi:shield-account-outline`:`mdi:tablet`}),(0,E.jsxs)(`span`,{className:`text`,children:[(0,E.jsxs)(`span`,{children:[n.name,n.is_admin&&(0,E.jsx)(nt,{children:t(`admin`)}),!n.is_active&&(0,E.jsx)(nt,{children:t(`inactive`)})]}),(0,E.jsx)(`span`,{className:`secondary`,children:e.find(e=>e.id===n.dashboard)?.name??n.dashboard})]})]}),(0,E.jsxs)(`div`,{className:`fold-body`,children:[(0,E.jsx)(q,{label:t(`assigned_dashboard`),value:n.dashboard,options:e.map(e=>({value:e.id,label:e.name})),onChange:e=>o(n,{dashboard:e})}),(0,E.jsxs)(I,{children:[(0,E.jsx)(K,{label:t(`kiosk`),hint:t(`kiosk_user_hint`),value:n.kiosk,onChange:e=>o(n,{kiosk:e})}),(0,E.jsx)(K,{label:t(`start_page`),hint:t(`start_page_hint`),value:!!n.default_panel,onChange:e=>o(n,{default_panel:e})})]}),(0,E.jsx)(K,{label:t(`sidebar_only`),hint:t(`sidebar_only_hint`),value:n.sidebar_only,onChange:e=>o(n,{sidebar_only:e})})]})]},n.id))]})},it=`/better_wall_dashboard/static/icon.png`,at=p(je)`
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
`,ot=({open:t,onClose:n})=>{let r=s(),a=f(),o=(0,T.useRef)(null),[c,l]=(0,T.useState)(null),u=d();(0,T.useEffect)(()=>{let e=o.current;e&&(t&&!e.open&&e.showModal(),!t&&e.open&&e.close())}),(0,T.useEffect)(()=>{t&&a?.sendMessagePromise({type:`better_wall_dashboard/version`}).then(l).catch(()=>void 0)},[t,a]);let p=!!(u&&c&&c.app!==u);return(0,E.jsxs)(at,{ref:o,tabIndex:-1,onClose:()=>t&&n(),onClick:e=>e.target===e.currentTarget&&n(),children:[(0,E.jsxs)(`div`,{className:`head`,children:[(0,E.jsx)(`img`,{src:it,alt:``}),(0,E.jsx)(`h2`,{children:`Better Wall Dashboard`})]}),(0,E.jsx)(`p`,{className:`muted`,children:r(`about_blurb`)}),(0,E.jsx)(`table`,{children:(0,E.jsxs)(`tbody`,{children:[(0,E.jsxs)(`tr`,{children:[(0,E.jsx)(`th`,{children:r(`about_version`)}),(0,E.jsx)(`td`,{children:c?.version??`–`})]}),(0,E.jsxs)(`tr`,{children:[(0,E.jsx)(`th`,{children:r(`about_page`)}),(0,E.jsx)(`td`,{children:u?u.slice(0,12):`–`})]})]})}),p&&(0,E.jsxs)(E.Fragment,{children:[(0,E.jsx)(`p`,{children:r(`update_available`)}),(0,E.jsx)(O,{appearance:`filled`,icon:`mdi:reload`,onClick:()=>{let t=e(),n=null;if(t&&c){let e=new URL(t);e.searchParams.set(`v`,c.app),n=e.toString()}ce(n)},children:r(`reload`)})]}),(c?.documentation||c?.issues)&&(0,E.jsxs)(`p`,{children:[c.documentation&&(0,E.jsx)(`a`,{href:c.documentation,target:`_blank`,rel:`noopener noreferrer`,children:r(`about_repo`)}),c.documentation&&c.issues&&` · `,c.issues&&(0,E.jsx)(`a`,{href:c.issues,target:`_blank`,rel:`noopener noreferrer`,children:r(`about_issues`)})]}),(0,E.jsx)(L,{type:`button`,className:`shut`,"aria-label":r(`close`),"data-tip":r(`close`),onClick:n,children:(0,E.jsx)(i,{icon:`mdi:close`})})]})},st=({request:e,onAnswer:t})=>{let n=s(),r=(0,T.useRef)(null);return(0,T.useEffect)(()=>{let t=r.current;t&&(e&&!t.open&&t.showModal(),!e&&t.open&&t.close())}),(0,E.jsx)(je,{ref:r,role:`alertdialog`,tabIndex:-1,onCancel:e=>{e.preventDefault(),t(!1)},onClick:e=>e.target===e.currentTarget&&t(!1),children:e&&(0,E.jsxs)(E.Fragment,{children:[(0,E.jsx)(`h2`,{children:e.title}),e.text&&(0,E.jsx)(`p`,{className:`muted`,children:e.text}),(0,E.jsxs)(`div`,{className:`actions`,children:[(0,E.jsx)(O,{appearance:`plain`,onClick:()=>t(!1),children:n(`cancel`)}),(0,E.jsx)(O,{appearance:`accent`,danger:e.danger,onClick:()=>t(!0),children:e.confirm})]})]})})};function ct(){let[e,t]=(0,T.useState)(null);return{confirm:(0,T.useCallback)(e=>new Promise(n=>t({...e,resolve:n})),[]),dialog:(0,E.jsx)(st,{request:e,onAnswer:n=>{e?.resolve(n),t(null)}})}}var lt=(0,T.createContext)([]);function ut(){return(0,T.useContext)(lt)}function dt(e){let t=document.querySelector(`home-assistant`);return t?(t.dispatchEvent(new CustomEvent(`hass-notification`,{bubbles:!0,composed:!0,detail:{message:e,dismissable:!0}})),!0):!1}var ft=({draft:e,update:t})=>{let n=s(),r=n=>t({...e,background:{...e.background,...n}});return(0,E.jsxs)(E.Fragment,{children:[(0,E.jsx)(Q,{title:n(`tab_general`),lead:n(`lead_general`)}),(0,E.jsx)(M,{children:(0,E.jsx)(W,{label:n(`name`),value:e.name,onChange:n=>t({...e,name:n})})}),(0,E.jsxs)(M,{children:[(0,E.jsx)(`h3`,{children:n(`background`)}),(0,E.jsx)(q,{label:n(`background_mode`),value:e.background.mode??`image`,options:[{value:`image`,label:n(`background_mode_image`)},{value:`color`,label:n(`background_mode_color`)}],onChange:e=>r({mode:e===`color`?`color`:`image`})}),e.background.mode===`color`?(0,E.jsx)(Ye,{label:n(`background_color`),value:e.background.color??`#131313`,onChange:e=>r({color:e})}):(0,E.jsxs)(E.Fragment,{children:[(0,E.jsx)(Ze,{label:n(`background_media`),hint:n(`background_media_hint`),accept:[`image/*`],value:e.background.image,onChange:e=>r({image:e})}),(0,E.jsx)(W,{label:n(`background_image`),hint:n(`background_image_hint`),type:`url`,value:e.background.image.startsWith(`media-source://`)?``:e.background.image,onChange:e=>r({image:e})}),(0,E.jsxs)(I,{children:[(0,E.jsx)(Ke,{label:n(`background_dim`),value:e.background.dim,min:0,max:95,step:5,unit:`%`,scale:100,onChange:e=>r({dim:e})}),(0,E.jsx)(Ke,{label:n(`background_blur`),value:e.background.blur,min:0,max:40,step:1,unit:`px`,onChange:e=>r({blur:e})})]})]})]}),(0,E.jsxs)(M,{children:[(0,E.jsx)(`h3`,{children:n(`security_heading`)}),(0,E.jsx)(W,{label:n(`pin`),hint:n(`pin_hint`),type:`password`,value:e.pin??``,onChange:n=>t({...e,pin:n.replace(/\D/g,``).slice(0,8)})})]})]})},pt=6,mt=[{type:`state`,label:`rule_state`},{type:`numeric`,label:`rule_numeric`},{type:`time`,label:`rule_time`},{type:`sun`,label:`rule_sun`},{type:`home`,label:`rule_home`}],ht=e=>{switch(e){case`state`:return{type:e,entity:``,state:``,not:!1};case`numeric`:return{type:e,entity:``,above:null,below:null};case`time`:return{type:e,after:``,before:``};case`sun`:return{type:e,when:`night`};case`home`:return{type:e,who:`anyone`}}},gt=p.div`
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
`,_t=e=>{let t=Number(e.replace(`,`,`.`));return e.trim()===``||!Number.isFinite(t)?null:t},vt=({rule:e,onChange:t})=>{let n=s();switch(e.type){case`state`:return(0,E.jsxs)(E.Fragment,{children:[(0,E.jsx)(Y,{label:n(`entity`),value:e.entity,onChange:n=>t({...e,entity:n})}),(0,E.jsx)(W,{label:n(`rule_state_value`),hint:n(`rule_state_value_hint`),value:e.state,onChange:n=>t({...e,state:n})}),(0,E.jsx)(K,{label:n(`rule_not`),value:e.not,onChange:n=>t({...e,not:n})})]});case`numeric`:return(0,E.jsxs)(E.Fragment,{children:[(0,E.jsx)(Y,{label:n(`entity`),value:e.entity,onChange:n=>t({...e,entity:n})}),(0,E.jsxs)(I,{children:[(0,E.jsx)(W,{label:n(`rule_above`),value:e.above===null?``:String(e.above),onChange:n=>t({...e,above:_t(n)})}),(0,E.jsx)(W,{label:n(`rule_below`),value:e.below===null?``:String(e.below),onChange:n=>t({...e,below:_t(n)})})]})]});case`time`:return(0,E.jsxs)(I,{children:[(0,E.jsx)(Xe,{label:n(`rule_after`),value:e.after,onChange:n=>t({...e,after:n})}),(0,E.jsx)(Xe,{label:n(`rule_before`),hint:n(`rule_before_hint`),value:e.before,onChange:n=>t({...e,before:n})})]});case`sun`:return(0,E.jsx)(q,{label:n(`rule_sun`),value:e.when,options:[{value:`day`,label:n(`rule_day`)},{value:`night`,label:n(`rule_night`)}],onChange:n=>t({...e,when:n===`day`?`day`:`night`})});case`home`:return(0,E.jsx)(q,{label:n(`rule_home`),value:e.who,options:[{value:`anyone`,label:n(`rule_anyone`)},{value:`nobody`,label:n(`rule_nobody`)}],onChange:n=>t({...e,who:n===`nobody`?`nobody`:`anyone`})})}},yt=({rules:e,onChange:t})=>{let n=s();return(0,E.jsxs)(F,{as:`div`,children:[(0,E.jsx)(`span`,{className:`label`,children:n(`rules`)}),(0,E.jsx)(`small`,{children:n(`rules_hint`)}),e.map((r,i)=>(0,E.jsxs)(gt,{children:[(0,E.jsxs)(`div`,{className:`head`,children:[(0,E.jsx)(q,{label:n(`rule_type`),value:r.type,options:mt.map(e=>({value:e.type,label:n(e.label)})),onChange:n=>t(V(e,i,ht(n)))}),(0,E.jsx)(Z,{index:i,length:e.length,onMove:n=>t(R(e,i,n)),onRemove:()=>t(e.filter((e,t)=>t!==i))})]}),(0,E.jsx)(vt,{rule:r,onChange:n=>t(V(e,i,n))})]},i)),(0,E.jsx)(`div`,{children:(0,E.jsx)(O,{icon:`mdi:plus`,disabled:e.length>=pt,onClick:()=>t([...e,ht(`state`)]),children:n(`add_rule`)})})]})},bt=({item:e})=>{let t=a(e.entity||void 0),n=s(),r=e.name||t?.attributes.friendly_name||e.entity||n(`not_set`);return(0,E.jsxs)(E.Fragment,{children:[(0,E.jsx)(i,{className:`icon`,icon:e.icon||t?.attributes.icon||u(e.entity)}),(0,E.jsxs)(`span`,{className:`text`,children:[(0,E.jsx)(`span`,{children:r}),e.entity&&(0,E.jsxs)(`span`,{className:`secondary`,children:[e.entity,e.rules?.length?` · ${e.rules.length===1?n(`rules_one`):n(`rules_count`,{count:e.rules.length})}`:``]})]})]})};function $({items:e,max:t,domains:n,addLabel:r,withRules:a=!1,create:o,named:c=!0,extra:l,onChange:u}){let d=s(),f=(t,n)=>u(V(e,t,{...e[t],...n})),p=()=>o?.()??{id:z(),entity:``,name:``,icon:``,...a?{rules:[]}:{}};return(0,E.jsxs)(E.Fragment,{children:[e.length===0&&(0,E.jsxs)(ke,{children:[(0,E.jsx)(i,{icon:`mdi:playlist-plus`}),(0,E.jsx)(`span`,{children:d(`empty_list`)})]}),e.map((t,r)=>(0,E.jsxs)(P,{open:!t.entity||void 0,children:[(0,E.jsxs)(`summary`,{children:[(0,E.jsx)(bt,{item:t}),(0,E.jsx)(`span`,{onClick:e=>e.preventDefault(),children:(0,E.jsx)(Z,{index:r,length:e.length,onMove:t=>u(R(e,r,t)),onRemove:()=>u(e.filter((e,t)=>t!==r))})})]}),(0,E.jsxs)(`div`,{className:`fold-body`,children:[(0,E.jsx)(Y,{label:d(`entity`),value:t.entity,domains:n,onChange:e=>f(r,{entity:e})}),c?(0,E.jsxs)(I,{children:[(0,E.jsx)(W,{label:d(`name`),hint:d(`name_hint`),value:t.name,onChange:e=>f(r,{name:e})}),(0,E.jsx)(J,{label:d(`icon`),value:t.icon,onChange:e=>f(r,{icon:e})})]}):(0,E.jsx)(J,{label:d(`icon`),hint:d(`status_icon_hint`),value:t.icon,onChange:e=>f(r,{icon:e})}),l?.(t,e=>f(r,e)),a&&(0,E.jsx)(yt,{rules:t.rules??[],onChange:e=>f(r,{rules:e})})]})]},t.id)),(0,E.jsx)(`div`,{children:(0,E.jsxs)(O,{icon:`mdi:plus`,appearance:`filled`,disabled:e.length>=t,onClick:()=>u([...e,p()]),children:[r,` (`,e.length,`/`,t,`)`]})})]})}var xt=({value:e,onChange:t})=>{let n=s(),r=w(pe(e=>le(e.entities,[]))),i=n=>t({...e,...n});return(0,E.jsxs)(E.Fragment,{children:[(0,E.jsx)(K,{label:n(`batteries_enabled`),hint:n(`batteries_enabled_hint`),value:e.enabled,onChange:e=>i({enabled:e})}),(0,E.jsx)(K,{label:n(`batteries_hide_when_ok`),hint:n(`batteries_hide_when_ok_hint`),value:e.hide_when_ok,onChange:e=>i({hide_when_ok:e})}),(0,E.jsx)(K,{label:n(`batteries_only_critical`),hint:n(`batteries_only_critical_hint`),value:e.only_critical,onChange:e=>i({only_critical:e})}),(0,E.jsx)(G,{label:n(`batteries_threshold`),hint:n(`batteries_threshold_hint`),value:e.threshold,min:5,max:90,unit:`%`,onChange:e=>i({threshold:Math.max(5,Math.min(90,e))})}),(0,E.jsx)(X,{label:n(`batteries_hidden`),hint:n(`batteries_hidden_hint`),value:e.hidden,domains:[`sensor`,`binary_sensor`],include:r,onChange:e=>i({hidden:e})})]})},St=[`input_boolean`,`switch`,`binary_sensor`],Ct=({draft:e,update:t,part:n})=>{let r=s(),i=ut(),a=e.sidebar,o=n=>t({...e,sidebar:n}),c=(e,t)=>o({...a,[e]:{...a[e],...t}}),l=k.find(e=>e.part===n)?.label??`tab_sidebar`,u=(0,E.jsx)(Q,{title:r(l),lead:r(`lead_${n}`)});switch(n){case`clock`:return(0,E.jsxs)(E.Fragment,{children:[u,(0,E.jsxs)(M,{children:[(0,E.jsx)(q,{label:r(`clock_style`),value:a.clock?.style??`digital`,options:[{value:`digital`,label:r(`clock_digital`)},{value:`analog`,label:r(`clock_analog`)}],onChange:e=>c(`clock`,{style:e})}),(0,E.jsx)(K,{label:r(`clock_seconds`),value:!!a.clock?.seconds,onChange:e=>c(`clock`,{seconds:e})})]})]});case`status`:return(0,E.jsxs)(E.Fragment,{children:[u,(0,E.jsxs)(M,{children:[(0,E.jsx)(`h3`,{children:r(`status_icons`)}),(0,E.jsx)(`p`,{children:r(`status_icons_hint`)}),(0,E.jsx)($,{items:a.status.icons??[],max:x.statusIcons,domains:St,addLabel:r(`add_status_icon`),onChange:e=>c(`status`,{icons:e})})]}),(0,E.jsxs)(M,{children:[(0,E.jsx)(`h3`,{children:r(`wifi_heading`)}),(0,E.jsx)(Y,{label:r(`wifi_signal`),hint:r(`wifi_signal_hint`),value:a.status.wifi_signal,domains:[`sensor`],onChange:e=>c(`status`,{wifi_signal:e})})]}),(0,E.jsxs)(M,{children:[(0,E.jsx)(`h3`,{children:r(`guest_wifi`)}),(0,E.jsx)(Y,{label:r(`guest_qr_image`),hint:r(`guest_qr_image_hint`),value:a.guest_wifi.qr_image,domains:[`image`],onChange:e=>c(`guest_wifi`,{qr_image:e})}),(0,E.jsxs)(I,{children:[(0,E.jsx)(W,{label:r(`network`),value:a.guest_wifi.ssid,onChange:e=>c(`guest_wifi`,{ssid:e})}),(0,E.jsx)(W,{label:r(`password`),type:`password`,value:a.guest_wifi.password,onChange:e=>c(`guest_wifi`,{password:e})})]}),(0,E.jsxs)(I,{children:[(0,E.jsx)(q,{label:r(`security`),value:a.guest_wifi.security,options:[{value:`WPA`,label:`WPA/WPA2/WPA3`},{value:`WEP`,label:`WEP`},{value:`nopass`,label:r(`open_network`)}],onChange:e=>c(`guest_wifi`,{security:e})}),(0,E.jsx)(K,{label:r(`hidden_network`),value:a.guest_wifi.hidden,onChange:e=>c(`guest_wifi`,{hidden:e})})]})]})]});case`climate`:return(0,E.jsxs)(E.Fragment,{children:[u,(0,E.jsxs)(M,{children:[(0,E.jsx)(Y,{label:r(`temperature`),value:a.climate.temperature,domains:[`sensor`],onChange:e=>c(`climate`,{temperature:e})}),(0,E.jsx)(Y,{label:r(`humidity`),value:a.climate.humidity,domains:[`sensor`],onChange:e=>c(`climate`,{humidity:e})}),(0,E.jsx)(G,{label:r(`hours`),value:a.climate.hours,min:1,max:168,unit:`h`,onChange:e=>c(`climate`,{hours:e})})]})]});case`persons`:return(0,E.jsxs)(E.Fragment,{children:[u,(0,E.jsx)(X,{label:r(`persons`),value:a.persons,domains:[`person`],onChange:e=>o({...a,persons:e})})]});case`openings`:return(0,E.jsxs)(E.Fragment,{children:[u,(0,E.jsx)(X,{label:r(`openings`),hint:r(`openings_hint`),value:a.openings,domains:[`binary_sensor`,`cover`,`lock`,`sensor`],onChange:e=>o({...a,openings:e})}),(0,E.jsx)(K,{label:r(`openings_hide_when_closed`),hint:r(`openings_hide_when_closed_hint`),value:a.openings_view?.hide_when_closed??!1,onChange:e=>o({...a,openings_view:{only_open:!1,...a.openings_view,hide_when_closed:e}})}),(0,E.jsx)(K,{label:r(`openings_only_open`),hint:r(`openings_only_open_hint`),value:a.openings_view?.only_open??!1,onChange:e=>o({...a,openings_view:{hide_when_closed:!1,...a.openings_view,only_open:e}})})]});case`travel`:return(0,E.jsxs)(E.Fragment,{children:[u,(0,E.jsxs)(M,{children:[(0,E.jsx)(Y,{label:r(`travel_sensor`),value:a.travel.entity,domains:[`sensor`],onChange:e=>c(`travel`,{entity:e})}),(0,E.jsx)(W,{label:r(`name`),hint:r(`travel_name_hint`),value:a.travel.name,onChange:e=>c(`travel`,{name:e})})]}),(0,E.jsxs)(M,{children:[(0,E.jsx)(`h3`,{children:r(`map`)}),(0,E.jsx)(W,{label:r(`maps_api_key`),hint:r(`maps_api_key_hint`),type:`password`,value:a.travel.maps_api_key,onChange:e=>c(`travel`,{maps_api_key:e})}),(0,E.jsx)(W,{label:r(`map_url`),hint:r(`map_url_hint`),type:`url`,value:a.travel.map_url,onChange:e=>c(`travel`,{map_url:e})}),(0,E.jsx)(Y,{label:r(`travel_work_zone`),hint:r(`travel_work_zone_hint`),value:a.travel.work_zone??``,domains:[`zone`],onChange:e=>c(`travel`,{work_zone:e})}),(0,E.jsx)(W,{label:r(`travel_work_address`),hint:r(`travel_work_address_hint`),value:a.travel.work_address??``,onChange:e=>c(`travel`,{work_address:e})})]})]});case`quick`:return(0,E.jsxs)(E.Fragment,{children:[u,(0,E.jsx)($,{items:a.quick_actions,max:x.quickActions,addLabel:r(`add_quick_action`),withRules:!0,onChange:e=>o({...a,quick_actions:e})})]});case`calendar`:return(0,E.jsxs)(E.Fragment,{children:[u,(0,E.jsxs)(M,{children:[(0,E.jsx)(X,{label:r(`calendars`),value:a.calendar.entities,domains:[`calendar`],onChange:e=>c(`calendar`,{entities:e})}),(0,E.jsx)(G,{label:r(`days`),hint:r(`calendar_days_hint`),value:a.calendar.days,min:1,max:x.calendarDays,onChange:e=>c(`calendar`,{days:e})})]})]});case`weather`:return(0,E.jsxs)(E.Fragment,{children:[u,(0,E.jsxs)(M,{children:[(0,E.jsx)(Y,{label:r(`weather_entity`),value:a.weather.entity,domains:[`weather`],onChange:e=>c(`weather`,{entity:e})}),(0,E.jsx)(Y,{label:r(`outdoor_temperature`),hint:r(`outdoor_temperature_hint`),value:a.weather.temperature,domains:[`sensor`],onChange:e=>c(`weather`,{temperature:e})})]})]});case`notifications`:return(0,E.jsxs)(E.Fragment,{children:[u,(0,E.jsxs)(M,{children:[(0,E.jsx)(K,{label:r(`notifications_enabled`),value:a.notifications.enabled,onChange:e=>c(`notifications`,{enabled:e})}),(0,E.jsx)(Ge,{label:r(`notifications_prefix`),hint:r(`notifications_prefix_hint`),suggestions:de([...i,e]),value:ne(a.notifications),onChange:e=>c(`notifications`,{prefixes:e})})]}),(0,E.jsxs)(M,{children:[(0,E.jsx)(`h3`,{children:r(`settings`)}),(0,E.jsx)(K,{label:r(`settings_enabled`),hint:r(`settings_enabled_hint`),value:a.settings?.enabled!==!1,onChange:e=>c(`settings`,{enabled:e})})]})]});case`system`:return(0,E.jsxs)(E.Fragment,{children:[u,(0,E.jsx)($,{items:a.system,max:x.system,domains:[`sensor`],addLabel:r(`add_statistic`),onChange:e=>o({...a,system:e})}),(0,E.jsxs)(M,{children:[(0,E.jsx)(`h3`,{children:r(`system_buttons`)}),(0,E.jsx)(`p`,{children:r(`system_buttons_hint`)}),(0,E.jsx)($,{items:a.system_buttons??[],max:x.systemButtons,domains:[`button`,`input_button`,`script`,`scene`,`automation`,`switch`,`input_boolean`],addLabel:r(`add_system_button`),create:()=>({id:z(),entity:``,name:``,icon:``,confirm:!1}),extra:(e,t)=>(0,E.jsx)(K,{label:r(`system_button_confirm_option`),hint:r(`system_button_confirm_option_hint`),value:e.confirm,onChange:e=>t({confirm:e})}),onChange:e=>o({...a,system_buttons:e})})]})]});case`batteries`:return(0,E.jsxs)(E.Fragment,{children:[u,(0,E.jsx)(xt,{value:a.batteries??ie,onChange:e=>o({...a,batteries:e})})]})}},wt=p.textarea`
  min-height: 55vh;
  padding: 12px;
  border-radius: 8px;
  border: 1px solid var(--divider-color, rgba(225, 225, 225, 0.12));
  background: var(--code-editor-background-color, var(--secondary-background-color, #282828));
  color: inherit;
  font-family: var(--ha-font-family-code, ui-monospace, monospace);
  font-size: 13px;
  resize: vertical;
`,Tt=p.p`
  margin: 0;
  color: var(--error-color, #db4437);
`,Et=({draft:e,update:t})=>{let n=s(),[r,i]=(0,T.useState)(()=>JSON.stringify(e,null,2)),[a,o]=(0,T.useState)(!1);return(0,E.jsxs)(E.Fragment,{children:[(0,E.jsx)(Q,{title:n(`tab_json`),lead:n(`json_hint`)}),(0,E.jsx)(wt,{value:r,spellCheck:!1,onChange:e=>{i(e.target.value),o(!1)}}),a&&(0,E.jsx)(Tt,{children:n(`json_invalid`)}),(0,E.jsx)(`div`,{children:(0,E.jsx)(O,{icon:`mdi:check`,appearance:`filled`,onClick:()=>{try{t({...JSON.parse(r),id:e.id})}catch{o(!0)}},children:n(`apply`)})})]})};function Dt(){let e=w(e=>{let t=new Set(Object.values(e.entitiesRegistryDisplay).map(e=>e.platform));return g.filter(e=>!e.integration||t.has(e.integration)).map(e=>e.type).join(` `)});return g.filter(t=>e.split(` `).includes(t.type))}function Ot(e){let t=w(t=>e?.pickerEntities?e.pickerEntities(t.entities,e=>t.entitiesRegistryDisplay[e]?.platform).join(` `):null);return(0,T.useMemo)(()=>t===null?void 0:t.split(` `).filter(Boolean),[t])}var kt=({tile:e,onChange:t})=>{let n=s(),r=a(h(e.entity||void 0))?.attributes.options??[],i=Array.isArray(e.options.hidden_scenes)?e.options.hidden_scenes:[],o=n=>t({...e.options,...n});return(0,E.jsxs)(E.Fragment,{children:[r.length>0&&(0,E.jsxs)(F,{as:`div`,children:[(0,E.jsx)(`span`,{className:`label`,children:n(`bl_shown_scenes`)}),(0,E.jsx)(`small`,{children:n(`bl_shown_scenes_hint`)}),r.map(e=>(0,E.jsx)(K,{label:e,value:!i.includes(e),onChange:t=>o({hidden_scenes:t?i.filter(t=>t!==e):[...i.filter(e=>r.includes(e)),e]})},e))]}),(0,E.jsx)(K,{label:n(`light_hide_presets`),hint:n(`light_hide_presets_hint`),value:e.options.hide_presets===!0,onChange:e=>o({hide_presets:e})}),(0,E.jsxs)(I,{children:[(0,E.jsx)(Y,{label:n(`bl_button_entity`),hint:n(`bl_button_entity_hint`),value:typeof e.options.button_entity==`string`?e.options.button_entity:``,onChange:e=>o({button_entity:e})}),(0,E.jsx)(J,{label:n(`bl_button_icon`),value:typeof e.options.button_icon==`string`?e.options.button_icon:``,onChange:e=>o({button_icon:e})})]})]})},At=p(je)`
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
`,jt=({open:e,types:t,onPick:n,onClose:r})=>{let a=s(),o=(0,T.useRef)(null);return(0,T.useEffect)(()=>{let t=o.current;t&&(e&&!t.open&&t.isConnected&&t.showModal(),!e&&t.open&&t.close())}),(0,E.jsx)(At,{ref:o,tabIndex:-1,onCancel:e=>{e.preventDefault(),r()},onClick:e=>e.target===e.currentTarget&&r(),children:e&&(0,E.jsxs)(E.Fragment,{children:[(0,E.jsx)(`h2`,{children:a(`pick_tile`)}),(0,E.jsx)(`p`,{className:`muted`,children:a(`pick_tile_hint`)}),(0,E.jsx)(`div`,{className:`types`,children:t.map(e=>(0,E.jsxs)(`button`,{type:`button`,className:`type`,onClick:()=>n(e.type),children:[(0,E.jsx)(`span`,{className:`icon`,children:(0,E.jsx)(i,{icon:e.icon})}),(0,E.jsx)(`span`,{className:`name`,children:a(e.label)}),(0,E.jsx)(`span`,{className:`description`,children:a(e.description)})]},e.type))}),(0,E.jsx)(`div`,{className:`actions`,children:(0,E.jsx)(O,{appearance:`plain`,onClick:r,children:a(`cancel`)})})]})})},Mt=({preset:e,onChange:t})=>{let n=s(),r=a(e.entity||void 0),i=Array.isArray(r?.attributes.source_list)?r.attributes.source_list:[];return e.kind===`run`?null:e.kind===`source`&&i.length?(0,E.jsx)(q,{label:n(`media_preset_value`),value:e.value,options:[...new Set([...e.value?[e.value]:[],...i])].map(e=>({value:e,label:e})),onChange:t}):(0,E.jsx)(W,{label:e.kind===`app`?n(`media_preset_app_id`):n(`media_preset_value`),hint:e.kind===`app`?n(`media_preset_app_hint`):void 0,value:e.value,onChange:t})},Nt={bed:7,subs:2,heights:4},Pt=({tile:e,onChange:t})=>{let n=s(),r=ae(e.entity,e.options),i=n=>t({...e.options,...n}),a=r.layout??Nt,o=e=>i({speakers:m({...a,...e})}),c=e=>e.map(e=>({value:String(e),label:String(e)}));return(0,E.jsxs)(E.Fragment,{children:[(0,E.jsx)(X,{label:n(`media_players`),hint:n(`media_players_hint`),domains:[`media_player`],max:6,value:r.players.filter(t=>t!==e.entity),onChange:e=>i({players:e})}),(0,E.jsxs)(I,{children:[(0,E.jsx)(Y,{label:n(`media_power_entity`),hint:n(`media_power_entity_hint`),domains:l,value:typeof e.options.power==`string`?e.options.power:``,onChange:e=>i({power:e})}),(0,E.jsx)(Y,{label:n(`media_volume_entity`),hint:n(`media_volume_entity_hint`),domains:[`media_player`],value:typeof e.options.volume==`string`?e.options.volume:``,onChange:e=>i({volume:e})})]}),(0,E.jsx)(q,{label:n(`media_volume_unit`),value:r.volumeUnit,options:v.map(e=>({value:e,label:n(`media_volume_${e}`)})),onChange:e=>i({volume_unit:e})}),(0,E.jsxs)(F,{as:`div`,children:[(0,E.jsx)(`span`,{className:`label`,children:n(`media_presets`)}),(0,E.jsx)(`small`,{children:n(`media_presets_hint`)})]}),(0,E.jsx)($,{items:r.presets,max:8,domains:[`media_player`,`script`,`scene`,`button`,`input_button`],addLabel:n(`add_media_preset`),create:()=>({id:z(),entity:``,name:``,icon:``,kind:`source`,value:``}),extra:(e,t)=>(0,E.jsxs)(E.Fragment,{children:[(0,E.jsx)(q,{label:n(`media_preset_kind`),value:e.kind,options:b.map(e=>({value:e,label:n(`media_preset_${e}`)})),onChange:e=>t({kind:e,value:``})}),(0,E.jsx)(Mt,{preset:e,onChange:e=>t({value:e})})]}),onChange:e=>i({presets:e})}),(0,E.jsxs)(F,{as:`div`,children:[(0,E.jsx)(`span`,{className:`label`,children:n(`media_switches`)}),(0,E.jsx)(`small`,{children:n(`media_switches_hint`)})]}),(0,E.jsx)(W,{label:n(`media_switches_title`),value:r.switchesTitle,onChange:e=>i({switches_title:e})}),(0,E.jsx)($,{items:r.switches,max:4,domains:[`switch`,`input_boolean`,`light`],addLabel:n(`add_media_switch`),create:()=>({id:z(),entity:``,name:``,icon:``,subs:[]}),extra:(e,t)=>r.layout&&r.layout.subs>0?(0,E.jsxs)(F,{as:`div`,children:[(0,E.jsx)(`span`,{className:`label`,children:n(`media_switch_subs`)}),(0,E.jsx)(`small`,{children:n(`media_switch_subs_hint`)}),re.slice(0,r.layout.subs).map(r=>(0,E.jsx)(K,{label:n(`speaker_${r}`),value:e.subs.includes(r),onChange:n=>t({subs:n?[...e.subs,r]:e.subs.filter(e=>e!==r)})},r))]}):null,onChange:e=>i({switches:e})}),(0,E.jsxs)(F,{as:`div`,children:[(0,E.jsx)(`span`,{className:`label`,children:n(`media_devices`)}),(0,E.jsx)(`small`,{children:n(`media_devices_hint`)})]}),(0,E.jsx)($,{items:r.devices,max:4,domains:[`media_player`,`remote`,`switch`],addLabel:n(`add_media_device`),create:()=>({id:z(),entity:``,name:``,icon:``,info:``}),extra:(e,t)=>(0,E.jsx)(Y,{label:n(`media_device_info`),hint:n(`media_device_info_hint`),domains:[`sensor`,`input_text`,`select`],value:e.info,onChange:e=>t({info:e})}),onChange:e=>i({devices:e})}),(0,E.jsxs)(I,{children:[(0,E.jsx)(Y,{label:n(`media_night_entity`),hint:n(`media_night_entity_hint`),domains:[`switch`,`input_boolean`,`script`],value:r.night,onChange:e=>i({night:e})}),(0,E.jsx)(W,{label:n(`media_night_text`),value:r.nightText,onChange:e=>i({night_text:e})})]}),(0,E.jsx)(F,{as:`div`,children:(0,E.jsx)(`span`,{className:`label`,children:n(`media_sound_heading`)})}),(0,E.jsxs)(I,{children:[(0,E.jsx)(Y,{label:n(`media_mode_entity`),hint:n(`media_mode_entity_hint`),domains:[`sensor`,`select`,`input_text`],value:r.modeEntity,onChange:e=>i({mode_entity:e})}),(0,E.jsx)(Y,{label:n(`media_format_entity`),hint:n(`media_format_entity_hint`),domains:[`sensor`,`input_text`],value:r.formatEntity,onChange:e=>i({format_entity:e})})]}),(0,E.jsx)(K,{label:n(`media_layout`),hint:n(`media_layout_hint`),value:r.layout!==null,onChange:e=>i({speakers:e?m(a):``})}),r.layout&&(0,E.jsxs)(E.Fragment,{children:[(0,E.jsxs)(I,{children:[(0,E.jsx)(q,{label:n(`media_layout_bed`),value:String(a.bed),options:c(me),onChange:e=>o({bed:Number(e)})}),(0,E.jsx)(q,{label:n(`media_layout_subs`),value:String(a.subs),options:c(C),onChange:e=>o({subs:Number(e)})}),(0,E.jsx)(q,{label:n(`media_layout_heights`),value:String(a.heights),options:c(ge),onChange:e=>o({heights:Number(e)})})]}),(0,E.jsx)(q,{label:n(`media_sofa`),value:r.sofa,options:te.map(e=>({value:e,label:n(`media_sofa_${e}`)})),onChange:e=>i({sofa:e})}),(0,E.jsx)(K,{label:n(`media_listener`),hint:n(`media_listener_hint`),value:r.listener,onChange:e=>i({listener:e})}),(0,E.jsx)(q,{label:n(`media_screen`),value:r.screen,options:y.map(e=>({value:e,label:n(`media_screen_${e}`)})),onChange:e=>i({screen:e})}),r.screen===`image`&&(0,E.jsx)(Ze,{label:n(`media_screen_picture`),hint:n(`media_screen_picture_hint`),accept:[`image/*`],value:r.screenImage,onChange:e=>i({screen_image:e})}),(0,E.jsx)(K,{label:n(`media_walls`),value:r.walls,onChange:e=>i({hide_walls:!e})}),(0,E.jsx)(K,{label:n(`media_room_movable`),hint:n(`media_room_movable_hint`),value:r.roomMovable,onChange:e=>i({room_movable:e})})]})]})},Ft=({value:e,onChange:t})=>{let[n,r]=(0,T.useState)(()=>Object.keys(e).length?JSON.stringify(e):``),[i,a]=(0,T.useState)(!1),o=s();return(0,E.jsxs)(F,{children:[(0,E.jsx)(`span`,{className:`label`,children:o(`options_json`)}),(0,E.jsx)(`input`,{type:`text`,value:n,placeholder:`{"hours": 24, "color": "#03a9f4"}`,onChange:e=>{r(e.target.value);try{let n=e.target.value.trim()?JSON.parse(e.target.value):{};if(n&&typeof n==`object`&&!Array.isArray(n)){a(!1),t(n);return}}catch{}a(!0)}}),i&&(0,E.jsx)(`small`,{children:o(`json_invalid`)})]})},It=({value:e,entry:t,onChange:n})=>{let r=s(),i=Ot(t);return(0,E.jsx)(Y,{label:r(`entity`),value:e,domains:t?.domains,integration:t?.pickerIntegration,include:i,onChange:n})},Lt=({tile:e})=>{let t=s(),n=a(e.entity||void 0),r=_[e.type],o=e.name||n?.attributes.friendly_name||e.entity||(r?t(r.label):e.type);return(0,E.jsxs)(E.Fragment,{children:[(0,E.jsx)(i,{className:`icon`,icon:e.icon||r?.icon||`mdi:square-rounded-outline`}),(0,E.jsxs)(`span`,{className:`text`,children:[(0,E.jsx)(`span`,{children:o}),(0,E.jsxs)(`span`,{className:`secondary`,children:[r?t(r.label):e.type,` · `,e.w,` × `,e.h]})]})]})},Rt=({tiles:e,columns:t,rows:r,onChange:a})=>{let o=s(),c=Dt(),[l,u]=(0,T.useState)(!1),d=(t,n)=>a(V(e,t,{...e[t],...n}));return(0,E.jsxs)(E.Fragment,{children:[e.length===0&&(0,E.jsxs)(ke,{children:[(0,E.jsx)(i,{icon:`mdi:view-grid-plus-outline`}),(0,E.jsx)(`span`,{children:o(`empty_tiles`)})]}),e.map((i,s)=>{let l=_[i.type];return(0,E.jsxs)(P,{open:!i.entity&&l?.needsEntity!==!1||void 0,children:[(0,E.jsxs)(`summary`,{children:[(0,E.jsx)(Lt,{tile:i}),(0,E.jsx)(`span`,{onClick:e=>e.preventDefault(),children:(0,E.jsx)(Z,{index:s,length:e.length,onMove:t=>a(R(e,s,t)),onRemove:()=>a(e.filter((e,t)=>t!==s)),onDuplicate:()=>a([...e.slice(0,s+1),{...i,id:z()},...e.slice(s+1)])})})]}),(0,E.jsxs)(`div`,{className:`fold-body`,children:[(0,E.jsx)(q,{label:o(`type`),value:i.type,options:[...c.map(e=>({value:e.type,label:o(e.label)})),...c.some(e=>e.type===i.type)?[]:[{value:i.type,label:l?o(l.label):i.type}]],onChange:e=>{let n=_[e]?.size??[1,1];d(s,{type:e,w:Math.min(n[0],t),h:Math.min(n[1],r)})}}),l?.needsEntity!==!1&&(0,E.jsx)(It,{value:i.entity,entry:l,onChange:e=>d(s,{entity:e})}),(0,E.jsxs)(I,{children:[(0,E.jsx)(W,{label:o(`name`),hint:o(`name_hint`),value:i.name,onChange:e=>d(s,{name:e})}),(0,E.jsx)(J,{label:o(`icon`),value:i.icon,onChange:e=>d(s,{icon:e})})]}),(0,E.jsxs)(I,{children:[(0,E.jsx)(G,{label:o(`width`),value:i.w,min:1,max:t,onChange:e=>d(s,{w:Math.max(1,Math.min(t,e))})}),(0,E.jsx)(G,{label:o(`height`),value:i.h,min:1,max:r,onChange:e=>d(s,{h:Math.max(1,Math.min(r,e))})})]}),i.type===`sensor`&&(0,E.jsx)(Ft,{value:i.options,onChange:e=>d(s,{options:e})}),i.type===`entity`&&i.entity.startsWith(`light.`)&&(0,E.jsx)(K,{label:o(`light_hide_presets`),hint:o(`light_hide_presets_hint`),value:i.options.hide_presets===!0,onChange:e=>d(s,{options:{...i.options,hide_presets:e}})}),(i.type===`cover`||i.type===`adaptive_cover`)&&(0,E.jsx)(q,{label:o(`cover_active_when`),hint:o(`cover_active_when_hint`),value:n.includes(i.options.active_when)?String(i.options.active_when):`open`,options:n.map(e=>({value:e,label:o(`cover_active_${e}`)})),onChange:e=>d(s,{options:{...i.options,active_when:e}})}),(i.type===`cover`||i.type===`adaptive_cover`)&&(0,E.jsx)(K,{label:o(`cover_stop_only_moving`),hint:o(`cover_stop_only_moving_hint`),value:i.options.stop_only_moving===!0,onChange:e=>d(s,{options:{...i.options,stop_only_moving:e}})}),(i.type===`cover`||i.type===`adaptive_cover`)&&(0,E.jsx)(Ge,{label:o(`cover_presets`),hint:o(`cover_presets_hint`),suggestions:[`0`,`25`,`50`,`75`,`100`],value:he(i.options.positions).map(String),onChange:e=>d(s,{options:{...i.options,positions:he(e)}})}),i.type===`better_lighting`&&(0,E.jsx)(kt,{tile:i,onChange:e=>d(s,{options:e})}),i.type===`media`&&(0,E.jsx)(Pt,{tile:i,onChange:e=>d(s,{options:e})})]})]},i.id)}),(0,E.jsx)(`div`,{children:(0,E.jsx)(O,{icon:`mdi:plus`,appearance:`filled`,disabled:e.length>=x.tiles,onClick:()=>u(!0),children:o(`add_tile`)})}),(0,E.jsx)(jt,{open:l,types:c,onClose:()=>u(!1),onPick:n=>{u(!1);let i=_[n]?.size??[1,1];a([...e,{id:z(),type:n,entity:``,name:``,icon:``,w:Math.min(i[0],t),h:Math.min(i[1],r),options:{}}])}})]})},zt=()=>({id:z(),name:``,icon:``,status:[],status_icons:{},columns:2,rows:2,square:!0,tiles:[]}),Bt=()=>({id:z(),columns:[75,25],rows:[50,50],sections:[]}),Vt=e=>({...B(e),id:z(),sections:e.sections.map(e=>({...B(e),id:z(),tiles:e.tiles.map(e=>({...e,id:z()}))}))}),Ht=e=>{let t=e.split(/[,/ ]+/).filter(Boolean).map(Number);return t.length&&t.length<=3&&t.every(e=>Number.isFinite(e)&&e>0)?t:null},Ut=({label:e,hint:t,value:n,onChange:r})=>(0,E.jsx)(W,{label:e,hint:t,value:n.join(`, `),onChange:e=>{let t=Ht(e);t&&r(t)}}),Wt=({draft:e,update:t,open:n})=>{let r=s(),a=e.pages,o=n=>t({...e,pages:n});return(0,E.jsxs)(E.Fragment,{children:[(0,E.jsx)(Q,{title:r(`tab_pages`),lead:r(`lead_pages`)}),(0,E.jsx)(N,{children:a.map((e,t)=>(0,E.jsxs)(`li`,{children:[(0,E.jsxs)(`button`,{type:`button`,className:`open`,onClick:()=>n({kind:`page`,page:t}),children:[(0,E.jsx)(i,{className:`icon`,icon:`mdi:book-open-page-variant-outline`}),(0,E.jsxs)(`span`,{className:`text`,children:[(0,E.jsx)(`span`,{children:r(`page_n`,{n:t+1})}),(0,E.jsx)(`span`,{className:`secondary`,children:e.sections.map(e=>e.name).filter(Boolean).join(` · `)||r(`no_sections`)})]})]}),(0,E.jsx)(Z,{index:t,length:a.length,onMove:e=>o(R(a,t,e)),onDuplicate:a.length<x.pages?()=>o([...a.slice(0,t+1),Vt(e),...a.slice(t+1)]):void 0,onRemove:()=>a.length>1&&o(a.filter((e,n)=>n!==t))})]},e.id))}),(0,E.jsx)(`div`,{children:(0,E.jsx)(O,{icon:`mdi:plus`,appearance:`filled`,disabled:a.length>=x.pages,onClick:()=>{o([...a,Bt()]),n({kind:`page`,page:a.length})},children:r(`add_page`)})})]})},Gt=({draft:e,update:t,open:n,page:r})=>{let a=s(),o=e.pages[r],c=n=>t({...e,pages:V(e.pages,r,{...o,...n})}),l=o.columns.length*o.rows.length;return(0,E.jsxs)(E.Fragment,{children:[(0,E.jsx)(Q,{title:a(`page_n`,{n:r+1}),lead:a(`lead_page`)}),(0,E.jsxs)(M,{children:[(0,E.jsx)(`h3`,{children:a(`layout`)}),(0,E.jsxs)(I,{children:[(0,E.jsx)(Ut,{label:a(`column_split`),hint:a(`split_hint`),value:o.columns,onChange:e=>c({columns:e})}),(0,E.jsx)(Ut,{label:a(`row_split`),hint:a(`split_hint`),value:o.rows,onChange:e=>c({rows:e})})]})]}),(0,E.jsxs)(M,{children:[(0,E.jsx)(`h3`,{children:a(`sections`)}),(0,E.jsx)(`p`,{children:a(`sections_hint`,{cells:l})}),(0,E.jsx)(N,{children:Array.from({length:l},(e,t)=>{let s=o.sections[t];return s?(0,E.jsxs)(`li`,{children:[(0,E.jsxs)(`button`,{type:`button`,className:`open`,onClick:()=>n({kind:`section`,page:r,section:t}),children:[(0,E.jsx)(i,{className:`icon`,icon:s.icon||`mdi:view-grid-outline`}),(0,E.jsxs)(`span`,{className:`text`,children:[(0,E.jsx)(`span`,{children:s.name||a(`section_n`,{n:t+1})}),(0,E.jsxs)(`span`,{className:`secondary`,children:[a(`tiles_count`,{count:s.tiles.length}),` · `,s.columns,` × `,s.rows]})]})]}),(0,E.jsx)(Z,{index:t,length:o.sections.length,onMove:e=>c({sections:R(o.sections,t,e)}),onRemove:()=>c({sections:o.sections.filter((e,n)=>n!==t)})})]},s.id):(0,E.jsx)(`li`,{children:(0,E.jsxs)(`button`,{type:`button`,className:`open`,onClick:()=>{let e=[...o.sections];for(;e.length<=t;)e.push(zt());c({sections:e}),n({kind:`section`,page:r,section:t})},children:[(0,E.jsx)(i,{className:`icon`,icon:`mdi:plus-box-outline`}),(0,E.jsxs)(`span`,{className:`text`,children:[(0,E.jsx)(`span`,{children:a(`add_section`)}),(0,E.jsx)(`span`,{className:`secondary`,children:a(`cell_n`,{n:t+1})})]})]})},`empty-${t}`)})})]})]})},Kt=({draft:e,update:t,page:n,section:r})=>{let i=s(),a=e.pages[n],o=a.sections[r],c=i=>t({...e,pages:V(e.pages,n,{...a,sections:V(a.sections,r,{...o,...i})})});return(0,E.jsxs)(E.Fragment,{children:[(0,E.jsx)(Q,{title:o.name||i(`section_n`,{n:r+1}),lead:i(`lead_section`)}),(0,E.jsxs)(M,{children:[(0,E.jsx)(`h3`,{children:i(`section_header`)}),(0,E.jsxs)(I,{children:[(0,E.jsx)(W,{label:i(`name`),value:o.name,onChange:e=>c({name:e})}),(0,E.jsx)(J,{label:i(`icon`),value:o.icon,onChange:e=>c({icon:e})})]}),(0,E.jsx)(F,{as:`div`,children:(0,E.jsx)(`span`,{className:`label`,children:i(`status_entities`)})}),(0,E.jsx)($,{items:o.status.map((e,t)=>({id:`status-${t}`,entity:e,name:``,icon:o.status_icons?.[e]??``})),max:x.sectionStatus,domains:[`sensor`,`binary_sensor`],addLabel:i(`add_status`),named:!1,onChange:e=>c({status:e.map(e=>e.entity),status_icons:Object.fromEntries(e.filter(e=>e.entity&&e.icon).map(e=>[e.entity,e.icon]))})})]}),(0,E.jsxs)(M,{children:[(0,E.jsx)(`h3`,{children:i(`grid`)}),(0,E.jsxs)(I,{children:[(0,E.jsx)(G,{label:i(`columns`),value:o.columns,min:1,max:x.sectionCells,onChange:e=>c({columns:e})}),(0,E.jsx)(G,{label:i(`rows`),value:o.rows,min:1,max:x.sectionCells,onChange:e=>c({rows:e})})]}),(0,E.jsx)(K,{label:i(`square_cells`),hint:i(`square_cells_hint`),value:o.square,onChange:e=>c({square:e})})]}),(0,E.jsxs)(M,{children:[(0,E.jsx)(`h3`,{children:i(`tiles`)}),(0,E.jsx)(Rt,{tiles:o.tiles,columns:o.columns,rows:o.rows,onChange:e=>c({tiles:e})})]})]})},qt=({draft:e,update:t,open:n})=>{let r=s(),a=e.buttons,o=n=>t({...e,buttons:n});return(0,E.jsxs)(E.Fragment,{children:[(0,E.jsx)(Q,{title:r(`tab_buttons`),lead:r(`lead_buttons`)}),a.length>0&&(0,E.jsx)(N,{children:a.map((e,t)=>(0,E.jsxs)(`li`,{children:[(0,E.jsxs)(`button`,{type:`button`,className:`open`,onClick:()=>n({kind:`button`,button:t}),children:[(0,E.jsx)(i,{className:`icon`,icon:e.icon||`mdi:gesture-tap`}),(0,E.jsxs)(`span`,{className:`text`,children:[(0,E.jsx)(`span`,{children:e.name||r(`button_n`,{n:t+1})}),(0,E.jsx)(`span`,{className:`secondary`,children:r(`tiles_count`,{count:e.tiles.length})})]})]}),(0,E.jsx)(Z,{index:t,length:a.length,onMove:e=>o(R(a,t,e)),onRemove:()=>o(a.filter((e,n)=>n!==t))})]},e.id))}),(0,E.jsx)(`div`,{children:(0,E.jsxs)(O,{icon:`mdi:plus`,appearance:`filled`,disabled:a.length>=x.buttons,onClick:()=>{o([...a,{id:z(),name:``,icon:`mdi:gesture-tap`,columns:4,tiles:[]}]),n({kind:`button`,button:a.length})},children:[r(`add_button`),` (`,a.length,`/`,x.buttons,`)`]})})]})},Jt=({draft:e,update:t,button:n})=>{let r=s(),i=e.buttons[n],a=r=>t({...e,buttons:V(e.buttons,n,{...i,...r})});return(0,E.jsxs)(E.Fragment,{children:[(0,E.jsx)(Q,{title:i.name||r(`button_n`,{n:n+1}),lead:r(`lead_button`)}),(0,E.jsxs)(M,{children:[(0,E.jsxs)(I,{children:[(0,E.jsx)(W,{label:r(`name`),value:i.name,onChange:e=>a({name:e})}),(0,E.jsx)(J,{label:r(`icon`),value:i.icon,onChange:e=>a({icon:e})})]}),(0,E.jsx)(G,{label:r(`columns`),hint:r(`button_columns_hint`),value:i.columns,min:1,max:x.sectionCells,onChange:e=>a({columns:e})})]}),(0,E.jsxs)(M,{children:[(0,E.jsx)(`h3`,{children:r(`tiles`)}),(0,E.jsx)(Rt,{tiles:i.tiles,columns:i.columns,rows:x.sectionCells,onChange:e=>a({tiles:e})})]})]})},Yt=[{id:`tab-10`,label:`10″ tablet · 1280×800`,width:1280,height:800},{id:`tab-11`,label:`11″ tablet · 1194×834`,width:1194,height:834},{id:`tab-12`,label:`12″ tablet · 1366×1024`,width:1366,height:1024},{id:`fhd`,label:`Full HD · 1920×1080`,width:1920,height:1080},{id:`small`,label:`7″ panel · 1024×600`,width:1024,height:600}],Xt=({view:e,dashboards:t,...n})=>{switch(e.kind){case`general`:return(0,E.jsx)(ft,{...n});case`sidebar`:return(0,E.jsx)(Ct,{...n,part:e.part});case`pages`:return(0,E.jsx)(Wt,{...n});case`page`:return(0,E.jsx)(Gt,{...n,page:e.page});case`section`:return(0,E.jsx)(Kt,{...n,page:e.page,section:e.section});case`buttons`:return(0,E.jsx)(qt,{...n});case`button`:return(0,E.jsx)(Jt,{...n,button:e.button});case`users`:return(0,E.jsx)(rt,{dashboards:t});case`json`:return(0,E.jsx)(Et,{...n},n.draft.id)}},Zt=()=>{let e=s(),t=f(),{narrow:n}=fe(),[r,a]=(0,T.useState)(null),[o,c]=(0,T.useState)(null),[l,u]=(0,T.useState)(!1),[d,p]=(0,T.useState)(``),[m,h]=(0,T.useState)({kind:`general`}),[ee,te]=(0,T.useState)(()=>new Set),[ne,re]=(0,T.useState)(!1),[ie,g]=(0,T.useState)(!1),[_,ae]=(0,T.useState)(!1),[v,oe]=(0,T.useState)(!1),[ce,le]=(0,T.useState)(Yt[0].id),[y,ue]=(0,T.useState)(!1),de=Yt.find(e=>e.id===ce)??Yt[0],b=(0,T.useCallback)((e,t)=>{c(B(e.dashboards[t]??e.dashboards.default)),u(!1)},[]);(0,T.useEffect)(()=>{t?.sendMessagePromise({type:`better_wall_dashboard/document`}).then(e=>{a(e),b(e,`default`)}).catch(e=>p(String(e?.message??e)))},[t,b]),(0,T.useEffect)(()=>{if(!l)return;let e=e=>e.preventDefault();return window.addEventListener(`beforeunload`,e),()=>window.removeEventListener(`beforeunload`,e)},[l]);let x=(0,T.useCallback)(e=>{c(e),u(!0),p(``)},[]),S=(0,T.useCallback)((e,t)=>{h(e),te(n=>new Set([...n,...ye(e),...t?[t]:[]])),re(!1),g(!1),oe(!1)},[]),pe=(0,T.useCallback)(e=>{te(t=>{let n=new Set(t);return n.delete(e)||n.add(e),n})},[]),{confirm:me,dialog:he}=ct(),C=async()=>!l||me({title:e(`discard_title`),text:e(`discard_text`),confirm:e(`discard`),danger:!0}),ge=async()=>{if(t&&o){p(e(`saving`));try{let n=await t.sendMessagePromise({type:`better_wall_dashboard/save_dashboard`,dashboard:o});a(e=>e&&{...e,dashboards:{...e.dashboards,[n.dashboard.id]:n.dashboard}}),c(B(n.dashboard)),u(!1),p(e(`saved`))}catch(e){p(String(e?.message??e))}}},w=async()=>{r&&o&&await C()&&(r.dashboards[o.id]?b(r,o.id):b(r,`default`),p(``))},_e=async e=>{r&&await C()&&(b(r,e),S({kind:`general`}))},D=async t=>{if(g(!1),!r||!await C())return;let n=B(t??r.dashboards.default);c({...n,id:z(),name:t?`${t.name} (2)`:e(`new_dashboard`)}),u(!0),S({kind:`general`})},k=async()=>{if(g(!1),!t||!o)return;let n=e=>dt(e)||p(e);try{let r=await t.sendMessagePromise({type:`better_wall_dashboard/reload_tablets`,dashboard_id:o.id});n(e(`tablets_reloaded`,{count:r.reached}))}catch(e){n(String(e?.message??e))}},be=async()=>{if(g(!1),!t||!o||!r||o.id==="default"||!await me({title:e(`delete_title`,{name:o.name}),text:e(`confirm_delete`,{name:o.name}),confirm:e(`delete`),danger:!0}))return;r.dashboards[o.id]&&await t.sendMessagePromise({type:`better_wall_dashboard/delete_dashboard`,dashboard_id:o.id});let n={...r.dashboards};delete n[o.id];let i={...r,dashboards:n};a(i),b(i,`default`),S({kind:`general`})},j=(0,T.useMemo)(()=>Object.values(r?.dashboards??{}),[r]),Ee=(0,T.useMemo)(()=>{let e=Object.values(r?.dashboards??{}).map(e=>({id:e.id,name:e.name}));return o&&!e.some(e=>e.id===o.id)&&e.push({id:o.id,name:o.name}),e.map(e=>e.id===o?.id?{...e,name:o.name}:e)},[r,o]);if(!o)return(0,E.jsxs)(Se,{children:[(0,E.jsx)(Ce,{"data-narrow":n,children:(0,E.jsx)(`span`,{className:`app-title`,children:e(`editor_title`)})}),(0,E.jsx)(`p`,{style:{padding:24},children:d||e(`loading`)})]});let M=ve(m,o),N=xe(M,{label:t=>e(t),page:t=>e(`page_n`,{n:t+1}),section:(t,n)=>o.pages[t]?.sections[n]?.name||e(`section_n`,{n:n+1}),button:t=>o.buttons[t]?.name||e(`button_n`,{n:t+1})}),P=M.kind===`page`||M.kind===`section`?M.page:void 0,ke=M.kind!==`users`;return(0,E.jsx)($e,{children:(0,E.jsxs)(Se,{children:[(0,E.jsxs)(Ce,{"data-narrow":n,children:[(0,E.jsx)(A,{type:`button`,className:`only-narrow`,"aria-label":e(`menu`),onClick:e=>se(e.currentTarget),children:(0,E.jsx)(i,{icon:`mdi:menu`})}),(0,E.jsx)(A,{type:`button`,className:`only-drawer`,"aria-label":e(`editor_menu`),onClick:()=>re(!0),children:(0,E.jsx)(i,{icon:`mdi:format-list-bulleted`})}),(0,E.jsxs)(`div`,{className:`titles`,children:[(0,E.jsx)(`span`,{className:`app-title`,children:e(`editor_title`)}),(0,E.jsxs)(`nav`,{"aria-label":e(`editor_menu`),children:[(0,E.jsx)(`button`,{type:`button`,onClick:()=>S({kind:`general`}),children:o.name}),N.map((e,t)=>(0,E.jsxs)(`span`,{children:[`› `,e.view?(0,E.jsx)(`button`,{type:`button`,onClick:()=>S(e.view),children:e.label}):e.label]},t))]})]}),(0,E.jsx)(`span`,{className:`spacer`}),(0,E.jsx)(A,{type:`button`,className:`only-no-preview`,"aria-pressed":v,"aria-label":e(`preview`),"data-tip":e(`preview`),onClick:()=>oe(e=>!e),children:(0,E.jsx)(i,{icon:v?`mdi:form-select`:`mdi:tablet-dashboard`})}),(0,E.jsxs)(we,{children:[(0,E.jsx)(A,{type:`button`,"aria-label":e(`more`),"aria-expanded":ie,onClick:()=>g(e=>!e),children:(0,E.jsx)(i,{icon:`mdi:dots-vertical`})}),ie&&(0,E.jsxs)(`div`,{className:`menu`,role:`menu`,children:[(0,E.jsxs)(`button`,{type:`button`,role:`menuitem`,onClick:()=>void D(),children:[(0,E.jsx)(i,{icon:`mdi:plus`}),` `,e(`new_dashboard`)]}),(0,E.jsxs)(`button`,{type:`button`,role:`menuitem`,onClick:()=>void D(o),children:[(0,E.jsx)(i,{icon:`mdi:content-copy`}),` `,e(`duplicate`)]}),(0,E.jsxs)(`button`,{type:`button`,role:`menuitem`,onClick:()=>void k(),children:[(0,E.jsx)(i,{icon:`mdi:tablet-cellphone`}),` `,e(`reload_tablets`)]}),(0,E.jsxs)(`button`,{type:`button`,role:`menuitem`,onClick:()=>S({kind:`json`}),children:[(0,E.jsx)(i,{icon:`mdi:code-json`}),` `,e(`edit_json`)]}),(0,E.jsxs)(`button`,{type:`button`,role:`menuitem`,className:`danger`,disabled:o.id==="default",onClick:()=>void be(),children:[(0,E.jsx)(i,{icon:`mdi:delete-outline`}),` `,e(`delete_dashboard`)]}),(0,E.jsx)(`hr`,{}),(0,E.jsxs)(`button`,{type:`button`,role:`menuitem`,onClick:()=>{g(!1),ae(!0)},children:[(0,E.jsx)(i,{icon:`mdi:information-outline`}),` `,e(`about`)]})]})]})]}),(0,E.jsxs)(Te,{children:[(0,E.jsx)(De,{$open:ne,onClick:()=>re(!1)}),(0,E.jsx)(Me,{dashboards:Ee,draft:o,view:M,expanded:ee,open:ne,onToggle:pe,onOpen:S,onSwitch:e=>void _e(e),onNewDashboard:()=>void D()}),(0,E.jsxs)(Oe,{$hidden:v,children:[(0,E.jsx)(`div`,{className:`screen-body`,children:(0,E.jsx)(lt.Provider,{value:j,children:(0,E.jsx)(Xt,{view:M,dashboards:Ee,draft:o,update:x,open:S})})}),ke&&(0,E.jsxs)(`div`,{className:`screen-foot`,children:[(0,E.jsx)(`span`,{className:`status`,children:l?e(`unsaved`):d}),(0,E.jsxs)(`span`,{className:`end`,children:[(0,E.jsx)(O,{appearance:`plain`,disabled:!l,onClick:()=>void w(),children:e(`discard`)}),(0,E.jsx)(O,{appearance:`accent`,icon:`mdi:content-save-outline`,disabled:!l,onClick:ge,children:e(`save`)})]})]})]}),(0,E.jsxs)(Ae,{$shown:v,children:[(0,E.jsxs)(`div`,{className:`preview-bar`,children:[(0,E.jsx)(`h2`,{children:e(`preview`)}),(0,E.jsx)(q,{label:e(`device`),value:ce,options:Yt.map(e=>({value:e.id,label:e.label})),onChange:le}),(0,E.jsx)(A,{type:`button`,style:{color:`var(--secondary-text-color)`},"aria-label":e(y?`landscape`:`portrait`),"data-tip":e(y?`landscape`:`portrait`),onClick:()=>ue(e=>!e),children:(0,E.jsx)(i,{icon:y?`mdi:phone-rotate-landscape`:`mdi:phone-rotate-portrait`})})]}),(0,E.jsx)(`div`,{className:`stage`,children:(0,E.jsx)(Fe,{dashboard:o,device:de,portrait:y,page:P})})]})]}),(0,E.jsx)(ot,{open:_,onClose:()=>ae(!1)}),he]})})};export{Zt as default};