import{A as e,C as t,D as n,E as r,F as i,I as a,L as o,M as s,N as c,O as l,P as u,R as d,S as f,T as p,_ as m,a as ee,b as te,c as ne,d as re,f as h,g as ie,h as g,i as ae,j as oe,k as se,l as _,m as ce,n as v,o as le,p as y,r as ue,s as b,t as de,u as x,v as fe,w as S,x as pe,y as C,z as me}from"./boot-ClCXRykw.js";var w=me(d(),1),T=me(o(),1),E=i.button`
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
  ${({$appearance:e,$danger:t})=>{let n=t?`var(--error-color, #db4437)`:`var(--primary-color, #03a9f4)`;return e===`accent`?u`
        background: ${n};
        color: var(--text-primary-color, #fff);
      `:e===`filled`?u`
        background: color-mix(in srgb, ${n} 16%, transparent);
        color: ${n};
      `:u`
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
`,he=()=>()=>{},D=({children:e,onClick:n,icon:r,appearance:i=`plain`,danger:a=!1,disabled:o,title:s})=>{let c=(0,w.useSyncExternalStore)(he,()=>!!customElements.get(`ha-button`)),l=(0,T.jsxs)(T.Fragment,{children:[r&&(0,T.jsx)(`span`,{slot:`start`,style:{display:`inline-flex`},children:(0,T.jsx)(t,{icon:r,size:`18px`})}),e]});return c?(0,w.createElement)(`ha-button`,{appearance:i,variant:a?`danger`:`brand`,disabled:o||void 0,"data-tip":s,onClick:n},l):(0,T.jsx)(E,{type:`button`,$appearance:i,$danger:a,disabled:o,"data-tip":s,onClick:n,children:l})},O=[{part:`clock`,icon:`mdi:clock-outline`,label:`clock`},{part:`status`,icon:`mdi:wifi-star`,label:`nav_status`},{part:`climate`,icon:`mdi:home-thermometer-outline`,label:`room_climate`},{part:`persons`,icon:`mdi:account-multiple-outline`,label:`persons`},{part:`openings`,icon:`mdi:window-open-variant`,label:`openings`},{part:`travel`,icon:`mdi:car-clock`,label:`travel_time`},{part:`quick`,icon:`mdi:gesture-tap-button`,label:`quick_actions`},{part:`calendar`,icon:`mdi:calendar-month-outline`,label:`calendar`},{part:`weather`,icon:`mdi:weather-partly-cloudy`,label:`weather`},{part:`notifications`,icon:`mdi:bell-outline`,label:`notifications`},{part:`system`,icon:`mdi:chart-box-outline`,label:`system_stats`}];function ge(e,t){switch(e.kind){case`page`:return e.page<t.pages.length?e:{kind:`pages`};case`section`:{let n=t.pages[e.page];return n?e.section<n.sections.length?e:{kind:`page`,page:e.page}:{kind:`pages`}}case`button`:return e.button<t.buttons.length?e:{kind:`buttons`};default:return e}}function _e(e){switch(e.kind){case`sidebar`:return[`sidebar`];case`page`:return[`pages`];case`section`:return[`pages`,`page-${e.page}`];case`button`:return[`buttons`];default:return[]}}function ve(e,t){return JSON.stringify(e)===JSON.stringify(t)}function ye(e,t){switch(e.kind){case`general`:return[{label:t.label(`tab_general`)}];case`sidebar`:{let n=O.find(t=>t.part===e.part);return[{label:t.label(`tab_sidebar`)},{label:t.label(n?.label??e.part)}]}case`pages`:return[{label:t.label(`tab_pages`)}];case`page`:return[{label:t.label(`tab_pages`),view:{kind:`pages`}},{label:t.page(e.page)}];case`section`:return[{label:t.label(`tab_pages`),view:{kind:`pages`}},{label:t.page(e.page),view:{kind:`page`,page:e.page}},{label:t.section(e.page,e.section)}];case`buttons`:return[{label:t.label(`tab_buttons`)}];case`button`:return[{label:t.label(`tab_buttons`),view:{kind:`buttons`}},{label:t.button(e.button)}];case`users`:return[{label:t.label(`tab_users`)}];case`json`:return[{label:t.label(`tab_json`)}]}}var be=i.div`
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
`,xe=i.header`
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
`,k=i.button`
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
`,Se=i.div`
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
`,Ce=i.div`
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
`,A=i.div`
  background: var(--card-background-color, #1c1c1c);
  border-radius: var(--ha-card-border-radius, 12px);
  box-shadow: var(--ha-card-box-shadow, none);
  border: 1px solid var(--ha-card-border-color, var(--divider-color, rgba(225, 225, 225, 0.12)));
  box-sizing: border-box;
  min-width: 0;
  min-height: 0;
`,we=i(A)`
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
`,Te=i.div`
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
`,Ee=i(A)`
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
`,j=i.section`
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
`,M=i.ul`
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
`,N=i.details`
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
`,P=i.div`
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
`,De=i(A)`
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
`,Oe=i.dialog`
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
`,ke=({dashboards:e,draft:n,view:r,expanded:i,open:a,onToggle:o,onOpen:s,onSwitch:l,onNewDashboard:u})=>{let d=c(),f=(e,n,i)=>(0,T.jsx)(`li`,{children:(0,T.jsxs)(`button`,{type:`button`,"aria-current":ve(r,e)?`page`:void 0,onClick:()=>s(e),children:[(0,T.jsx)(t,{className:`icon`,icon:i}),(0,T.jsx)(`span`,{className:`grow`,children:n})]})},JSON.stringify(e)),p=(e,n,a,c,l)=>{let u=i.has(e);return(0,T.jsxs)(`li`,{children:[(0,T.jsxs)(`button`,{type:`button`,"aria-expanded":u,"aria-current":ve(r,n)?`page`:void 0,onClick:()=>s(n,e),children:[(0,T.jsx)(t,{className:`icon`,icon:c}),(0,T.jsx)(`span`,{className:`grow`,children:a}),(0,T.jsx)(`span`,{className:`twist`,"data-open":u,role:`button`,"aria-label":a,onClick:t=>{t.stopPropagation(),o(e)},children:(0,T.jsx)(t,{icon:`mdi:chevron-right`})})]}),u&&(0,T.jsx)(`ul`,{className:`sub`,children:l})]},e)},m=(0,T.jsxs)(T.Fragment,{children:[f({kind:`general`},d(`tab_general`),`mdi:cog-outline`),p(`sidebar`,{kind:`sidebar`,part:O[0].part},d(`tab_sidebar`),`mdi:dock-left`,O.map(e=>f({kind:`sidebar`,part:e.part},d(e.label),e.icon))),p(`pages`,{kind:`pages`},d(`tab_pages`),`mdi:book-open-page-variant-outline`,n.pages.map((e,t)=>e.sections.length?p(`page-${t}`,{kind:`page`,page:t},d(`page_n`,{n:t+1}),`mdi:file-outline`,e.sections.map((e,n)=>f({kind:`section`,page:t,section:n},e.name||d(`section_n`,{n:n+1}),e.icon||`mdi:view-grid-outline`))):f({kind:`page`,page:t},d(`page_n`,{n:t+1}),`mdi:file-outline`))),p(`buttons`,{kind:`buttons`},d(`tab_buttons`),`mdi:gesture-tap-button`,n.buttons.map((e,t)=>f({kind:`button`,button:t},e.name||d(`button_n`,{n:t+1}),e.icon||`mdi:gesture-tap`)))]});return(0,T.jsxs)(we,{$open:a,as:`nav`,"aria-label":d(`editor_title`),children:[(0,T.jsx)(`div`,{className:`heading`,children:d(`nav_dashboards`)}),(0,T.jsxs)(`ul`,{children:[e.map(e=>e.id===n.id?(0,T.jsxs)(`li`,{children:[(0,T.jsxs)(`button`,{type:`button`,"aria-expanded":!0,onClick:()=>s({kind:`general`}),children:[(0,T.jsx)(t,{className:`icon`,icon:`mdi:tablet-dashboard`}),(0,T.jsx)(`span`,{className:`grow`,children:(0,T.jsx)(`strong`,{children:n.name})})]}),(0,T.jsx)(`ul`,{className:`sub`,children:m})]},e.id):(0,T.jsx)(`li`,{children:(0,T.jsxs)(`button`,{type:`button`,onClick:()=>l(e.id),children:[(0,T.jsx)(t,{className:`icon`,icon:`mdi:tablet-dashboard`}),(0,T.jsx)(`span`,{className:`grow`,children:e.name})]})},e.id)),(0,T.jsx)(`li`,{className:`add`,children:(0,T.jsxs)(`button`,{type:`button`,onClick:u,children:[(0,T.jsx)(t,{className:`icon`,icon:`mdi:plus`}),(0,T.jsx)(`span`,{className:`grow`,children:d(`new_dashboard`)})]})})]}),(0,T.jsx)(`div`,{className:`heading`,children:d(`nav_house`)}),(0,T.jsx)(`ul`,{children:f({kind:`users`},d(`tab_users`),`mdi:account-multiple-outline`)})]})},Ae=i.div`
  position: relative;
  width: 100%;
  height: 100%;
  min-height: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
`,je=i.div`
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
`,Me=(0,w.memo)(({dashboard:e,device:t,portrait:n,page:r})=>{let i=c(),a=(0,w.useRef)(null),o=(0,w.useRef)(null),[s,l]=(0,w.useState)(null),u=n?t.height:t.width,d=n?t.width:t.height,f=s?Math.min((s.width-40)/u,(s.height-40)/d):.5,p=Math.max(.1,Math.min(1,Math.floor(f*1e3)/1e3));(0,w.useLayoutEffect)(()=>{let e=a.current;if(!e)return;let t=()=>l({width:e.clientWidth,height:e.clientHeight});t();let n=new ResizeObserver(t);return n.observe(e),()=>n.disconnect()},[]);let m=(0,w.useRef)(null);(0,w.useLayoutEffect)(()=>{let e=o.current,t=m.current;if(m.current={width:u,height:d,scale:p,portrait:n},!e||!t||!s)return;let r=`translate(-50%, -50%) scale(${p})`;if(t.portrait!==n){let i=Math.min(t.scale,p)*.92;e.animate([{transform:`translate(-50%, -50%) scale(${t.scale}) rotate(${n?90:-90}deg)`},{transform:`translate(-50%, -50%) scale(${i}) rotate(${n?45:-45}deg)`,offset:.5},{transform:r}],{duration:750,easing:`cubic-bezier(0.45, 0, 0.25, 1)`})}else(t.width!==u||t.height!==d)&&e.animate([{width:`${t.width}px`,height:`${t.height}px`,transform:`translate(-50%, -50%) scale(${t.scale})`},{width:`${u}px`,height:`${d}px`,transform:r}],{duration:450,easing:`cubic-bezier(0.3, 0, 0.2, 1)`})},[u,d,p,n,s]);let ee=(0,w.useMemo)(()=>({dashboard:e,dashboards:[],kiosk:!1,is_admin:!0,pin_required:!1}),[e]);return(0,T.jsx)(Ae,{ref:a,"aria-label":i(`preview`),children:(0,T.jsx)(je,{ref:o,style:{width:u,height:d,transform:`translate(-50%, -50%) scale(${p})`},children:(0,T.jsx)(S,{view:ee,focusPage:r,children:(0,T.jsx)(ae,{})})})})}),F=i.label`
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
`,Ne=i.label`
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
`,I=i.div`
  display: grid;
  grid-template-columns: ${({$columns:e})=>e??`repeat(auto-fit, minmax(220px, 1fr))`};
  gap: 16px;
  align-items: start;
`,L=i.button`
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
`;function R(e,t,n){if(n<0||n>=e.length)return e;let r=[...e],[i]=r.splice(t,1);return r.splice(n,0,i),r}function z(){let e=new Uint8Array(6);return crypto.getRandomValues(e),Array.from(e,e=>e.toString(16).padStart(2,`0`)).join(``)}var B=e=>JSON.parse(JSON.stringify(e)),V=(e,t,n)=>e.map((e,r)=>r===t?n:e),H=({selector:e,value:t,onChange:n,label:r,helper:i,required:a=!1})=>{let o=(0,w.useRef)(null),s=(0,w.useRef)(null),c=(0,w.useRef)(n);(0,w.useEffect)(()=>{c.current=n}),(0,w.useEffect)(()=>{let e=document.createElement(`ha-selector`);e.hass=de();let t=t=>{t.stopPropagation();let n=t.detail.value;e.value=n,c.current(n)};e.addEventListener(`value-changed`,t),o.current?.append(e),s.current=e;let n=v(t=>{e.hass=t});return()=>{n(),e.removeEventListener(`value-changed`,t),e.remove(),s.current=null}},[]);let l=JSON.stringify(e);return(0,w.useEffect)(()=>{let e=s.current;e&&(e.selector=JSON.parse(l),e.label=r,e.helper=i,e.required=a)},[l,r,i,a]),(0,w.useEffect)(()=>{let e=s.current;e&&e.value!==t&&(e.value=t)},[t]),(0,T.jsx)(`div`,{ref:o,className:`ha-field`})},Pe=[`ha-selector`,`ha-entity-picker`,`ha-switch`,`ha-icon-picker`],Fe=[{tag:`hui-entities-card`,config:{type:`entities`,entities:[]}},{tag:`hui-button-card`,config:{type:`button`}}],Ie=null,Le=!1;function Re(){return Le&&Pe.every(e=>customElements.get(e))}var ze=e=>new Promise(t=>window.setTimeout(()=>t(!1),e));async function Be(){let e=Object.assign(document.createElement(`ha-selector`),{selector:{text:{}},hidden:!0});document.body.append(e);try{return await Promise.race([customElements.whenDefined(`ha-selector-text`).then(()=>!0),ze(5e3)])}finally{e.remove()}}function Ve(){return Re()?Promise.resolve(!0):(Ie??=(async()=>{let e=window.loadCardHelpers,t=null;for(let n of Fe)try{let r=customElements.get(n.tag);!r?.getConfigElement&&e&&(t??=await e(),r=(await t.createCardElement(n.config)).constructor),await r?.getConfigElement?.()}catch{}return Le=!!customElements.get(`ha-selector`)&&await Be(),Re()})(),Ie)}function U(){let[e,t]=(0,w.useState)(Re),n=(0,w.useSyncExternalStore)(v,()=>de()!==null);return(0,w.useEffect)(()=>{if(e||!n)return;let r=!0;return Ve().then(e=>r&&e&&t(!0)),()=>{r=!1}},[e,n]),e&&n}var W=({label:e,hint:t,value:n,onChange:r,placeholder:i,type:a=`text`})=>U()?(0,T.jsx)(H,{selector:{text:a===`text`?{}:{type:a}},value:n,label:e,helper:t,onChange:e=>r(typeof e==`string`?e:``)}):(0,T.jsxs)(F,{children:[(0,T.jsx)(`span`,{className:`label`,children:e}),(0,T.jsx)(`input`,{type:a,value:n,placeholder:i,onChange:e=>r(e.target.value)}),t&&(0,T.jsx)(`small`,{children:t})]}),He=({label:e,hint:t,value:n,onChange:r,suggestions:i=[]})=>{let a=U(),o=e=>[...new Set(e.filter(e=>typeof e==`string`).map(e=>e.trim()).filter(Boolean))];if(a){let a=[...new Set([...n,...i])];return(0,T.jsxs)(F,{as:`div`,children:[(0,T.jsx)(`span`,{className:`label`,children:e}),t&&(0,T.jsx)(`small`,{children:t}),(0,T.jsx)(H,{selector:{select:{multiple:!0,custom_value:!0,mode:`dropdown`,sort:!1,options:a}},value:n,label:e,onChange:e=>r(Array.isArray(e)?o(e):[])})]})}return(0,T.jsxs)(F,{children:[(0,T.jsx)(`span`,{className:`label`,children:e}),(0,T.jsx)(`input`,{type:`text`,value:n.join(`, `),onChange:e=>r(o(e.target.value.split(`,`)))}),t&&(0,T.jsx)(`small`,{children:t})]})},G=({label:e,hint:t,value:n,onChange:r,min:i,max:a,step:o=1,unit:s})=>{let c=U(),l=e=>{let t=Number(e);e!==``&&e!==null&&Number.isFinite(t)&&r(t)};return c?(0,T.jsx)(H,{selector:{number:{min:i,max:a,step:o,mode:`box`,unit_of_measurement:s}},value:n,label:e,helper:t,onChange:l}):(0,T.jsxs)(F,{children:[(0,T.jsx)(`span`,{className:`label`,children:e}),(0,T.jsx)(`input`,{type:`number`,value:n,min:i,max:a,step:o,onChange:e=>l(e.target.value)}),t&&(0,T.jsx)(`small`,{children:t})]})},Ue=({label:e,hint:t,value:n,onChange:r,min:i,max:a,step:o,unit:s,scale:c=1})=>{let l=U(),u=Math.round(n*c*1e3)/1e3,d=e=>{let t=Number(e);Number.isFinite(t)&&r(t/c)};return l?(0,T.jsx)(H,{selector:{number:{min:i,max:a,step:o,mode:`slider`,unit_of_measurement:s}},value:u,label:e,helper:t,onChange:d}):(0,T.jsxs)(F,{children:[(0,T.jsxs)(`span`,{className:`label`,children:[e,`: `,u,s?` ${s}`:``]}),(0,T.jsx)(`input`,{type:`range`,value:u,min:i,max:a,step:o,onChange:e=>d(e.target.value)}),t&&(0,T.jsx)(`small`,{children:t})]})},K=({label:e,hint:t,value:n,onChange:r})=>U()?(0,T.jsx)(H,{selector:{boolean:{}},value:n,label:e,helper:t,onChange:e=>r(!!e)}):(0,T.jsxs)(Ne,{children:[(0,T.jsx)(`input`,{type:`checkbox`,checked:n,onChange:e=>r(e.target.checked)}),(0,T.jsxs)(`span`,{children:[e,t&&(0,T.jsx)(`small`,{children:t})]})]}),We=e=>Array.isArray(e)&&e.length===3&&e.every(e=>typeof e==`number`)?`#${e.map(e=>Math.round(Math.min(255,Math.max(0,e))).toString(16).padStart(2,`0`)).join(``)}`:null,Ge=e=>[1,3,5].map(t=>parseInt(e.slice(t,t+2),16)||0),Ke=({label:e,hint:t,value:n,onChange:r})=>U()?(0,T.jsx)(H,{selector:{color_rgb:{}},value:Ge(n),label:e,helper:t,onChange:e=>{let t=We(e);t&&r(t)}}):(0,T.jsxs)(F,{children:[(0,T.jsx)(`span`,{className:`label`,children:e}),(0,T.jsx)(`input`,{type:`color`,value:n,onChange:e=>r(e.target.value)}),t&&(0,T.jsx)(`small`,{children:t})]}),qe=({label:e,hint:t,value:n,onChange:r})=>U()?(0,T.jsx)(H,{selector:{time:{}},value:n||void 0,label:e,helper:t,onChange:e=>r(typeof e==`string`?e.slice(0,5):``)}):(0,T.jsxs)(F,{children:[(0,T.jsx)(`span`,{className:`label`,children:e}),(0,T.jsx)(`input`,{type:`time`,value:n,onChange:e=>r(e.target.value)}),t&&(0,T.jsx)(`small`,{children:t})]}),q=({label:e,hint:t,value:n,onChange:r,options:i})=>U()?(0,T.jsx)(H,{selector:{select:{options:i,mode:`dropdown`}},value:n,label:e,helper:t,required:!0,onChange:e=>typeof e==`string`&&r(e)}):(0,T.jsxs)(F,{children:[(0,T.jsx)(`span`,{className:`label`,children:e}),(0,T.jsx)(`select`,{value:n,onChange:e=>r(e.target.value),children:i.map(e=>(0,T.jsx)(`option`,{value:e.value,children:e.label},e.value))}),t&&(0,T.jsx)(`small`,{children:t})]}),J=({label:e,hint:n,value:r,onChange:i})=>U()?(0,T.jsx)(H,{selector:{icon:{}},value:r,label:e,helper:n,onChange:e=>i(typeof e==`string`?e:``)}):(0,T.jsxs)(F,{children:[(0,T.jsx)(`span`,{className:`label`,children:e}),(0,T.jsxs)(`span`,{className:`with-icon`,children:[(0,T.jsx)(`input`,{type:`text`,value:r,placeholder:`mdi:…`,onChange:e=>i(e.target.value)}),r&&(0,T.jsx)(t,{icon:r,size:`24px`})]}),n&&(0,T.jsx)(`small`,{children:n})]}),Je=({label:e,hint:t,value:n,onChange:r,accept:i})=>{let a=U(),o=(0,w.useMemo)(()=>n.startsWith(`media-source://`)?{media_content_id:n,media_content_type:i[0]}:void 0,[n,i]);return a?(0,T.jsx)(H,{selector:{media:{accept:i}},value:o,label:e,helper:t,onChange:e=>r(e?.media_content_id??``)}):(0,T.jsx)(W,{label:e,hint:t,value:n,onChange:r})},Ye=(0,w.createContext)([]),Xe=({children:e})=>{let t=a(ne(e=>{let t={};for(let[n,r]of Object.entries(e.entities))t[n]=r.attributes.friendly_name||n;return t})),n=(0,w.useMemo)(()=>Object.entries(t).map(([e,t])=>({id:e,name:t})).sort((e,t)=>e.id.localeCompare(t.id)),[t]);return(0,T.jsx)(Ye.Provider,{value:n,children:e})},Ze=(e,t={},n,r)=>({entity:{...r?{include_entities:r}:{},...e?.length||n?{filter:{...e?.length?{domain:e}:{},...n?{integration:n}:{}}}:{},...t}}),Qe=({value:e,domains:t,onChange:n})=>{let r=(0,w.useContext)(Ye),i=(0,w.useId)(),a=(0,w.useMemo)(()=>t?.length?r.filter(e=>t.includes(e.id.split(`.`)[0])):r,[r,t]);return(0,T.jsxs)(T.Fragment,{children:[(0,T.jsx)(`input`,{type:`text`,list:i,value:e,placeholder:t?.length?`${t[0]}.…`:`domain.object_id`,onChange:e=>n(e.target.value.trim())}),(0,T.jsx)(`datalist`,{id:i,children:a.map(e=>(0,T.jsx)(`option`,{value:e.id,children:e.name},e.id))})]})},Y=({label:e,hint:t,value:n,onChange:r,domains:i,integration:a,include:o})=>{let s=U(),l=(0,w.useContext)(Ye),u=c();if(s)return(0,T.jsx)(H,{selector:Ze(i,{},a,o),value:n||void 0,label:e,helper:t,onChange:e=>r(typeof e==`string`?e:``)});let d=l.find(e=>e.id===n);return(0,T.jsxs)(F,{children:[(0,T.jsx)(`span`,{className:`label`,children:e}),(0,T.jsx)(Qe,{value:n,domains:i,onChange:r}),n&&(0,T.jsx)(`small`,{children:d?d.name:u(`not_found`)}),t&&(0,T.jsx)(`small`,{children:t})]})},X=({label:e,hint:n,value:r,onChange:i,domains:a,max:o})=>{let s=U(),l=c(),u=e=>i(o===void 0?e:e.slice(0,o));return s?(0,T.jsx)(H,{selector:Ze(a,{multiple:!0,reorder:!0}),value:r,label:e,helper:n,onChange:e=>u(Array.isArray(e)?e.filter(e=>typeof e==`string`):[])}):(0,T.jsxs)(F,{as:`div`,children:[(0,T.jsx)(`span`,{className:`label`,children:e}),r.map((e,t)=>(0,T.jsxs)(I,{$columns:`minmax(0, 1fr) auto`,children:[(0,T.jsx)(Qe,{value:e,domains:a,onChange:e=>u(r.map((n,r)=>r===t?e:n))}),(0,T.jsx)(Z,{index:t,length:r.length,onMove:e=>u(R(r,t,e)),onRemove:()=>u(r.filter((e,n)=>n!==t))})]},t)),(o===void 0||r.length<o)&&(0,T.jsx)(L,{type:`button`,className:`add`,onClick:()=>u([...r,``]),"data-tip":l(`add`),"aria-label":l(`add`),children:(0,T.jsx)(t,{icon:`mdi:plus`})}),n&&(0,T.jsx)(`small`,{children:n})]})},Z=({index:e,length:n,onMove:r,onRemove:i,onDuplicate:a})=>{let o=c();return(0,T.jsxs)(`span`,{className:`list-controls`,children:[(0,T.jsx)(L,{type:`button`,disabled:e===0,onClick:()=>r(e-1),"data-tip":o(`move_up`),"aria-label":o(`move_up`),children:(0,T.jsx)(t,{icon:`mdi:arrow-up`})}),(0,T.jsx)(L,{type:`button`,disabled:e===n-1,onClick:()=>r(e+1),"data-tip":o(`move_down`),"aria-label":o(`move_down`),children:(0,T.jsx)(t,{icon:`mdi:arrow-down`})}),a&&(0,T.jsx)(L,{type:`button`,onClick:a,"data-tip":o(`duplicate`),"aria-label":o(`duplicate`),children:(0,T.jsx)(t,{icon:`mdi:content-copy`})}),(0,T.jsx)(L,{type:`button`,$danger:!0,onClick:i,"data-tip":o(`remove`),"aria-label":o(`remove`),children:(0,T.jsx)(t,{icon:`mdi:delete-outline`})})]})},Q=({title:e,lead:t})=>(0,T.jsxs)(T.Fragment,{children:[(0,T.jsx)(`h2`,{children:e}),t&&(0,T.jsx)(`p`,{className:`lead`,children:t})]}),$e=i.span`
  margin-left: 8px;
  padding: 1px 8px;
  border-radius: 999px;
  font-size: 12px;
  font-weight: 400;
  background: var(--secondary-background-color, #282828);
  color: var(--secondary-text-color, #9b9b9b);
`,et=({dashboards:e})=>{let n=c(),r=oe(),[i,a]=(0,w.useState)(null);(0,w.useEffect)(()=>{r?.sendMessagePromise({type:`better_wall_dashboard/users`}).then(e=>a(e.users)).catch(()=>a([]))},[r]);let o=(0,w.useCallback)(async(e,t)=>{if(!r)return;a(n=>n?.map(n=>n.id===e.id?{...n,...t}:n)??null);let n=await r.sendMessagePromise({type:`better_wall_dashboard/save_user`,user_id:e.id,...t});a(t=>t?.map(t=>t.id===e.id?{...t,...n}:t)??null)},[r]);return(0,T.jsxs)(T.Fragment,{children:[(0,T.jsx)(Q,{title:n(`tab_users`),lead:n(`lead_users`)}),i?.map(r=>(0,T.jsxs)(N,{open:!r.is_admin||void 0,children:[(0,T.jsxs)(`summary`,{children:[(0,T.jsx)(t,{className:`icon`,icon:r.is_admin?`mdi:shield-account-outline`:`mdi:tablet`}),(0,T.jsxs)(`span`,{className:`text`,children:[(0,T.jsxs)(`span`,{children:[r.name,r.is_admin&&(0,T.jsx)($e,{children:n(`admin`)}),!r.is_active&&(0,T.jsx)($e,{children:n(`inactive`)})]}),(0,T.jsx)(`span`,{className:`secondary`,children:e.find(e=>e.id===r.dashboard)?.name??r.dashboard})]})]}),(0,T.jsxs)(`div`,{className:`fold-body`,children:[(0,T.jsx)(q,{label:n(`assigned_dashboard`),value:r.dashboard,options:e.map(e=>({value:e.id,label:e.name})),onChange:e=>o(r,{dashboard:e})}),(0,T.jsxs)(I,{children:[(0,T.jsx)(K,{label:n(`kiosk`),hint:n(`kiosk_user_hint`),value:r.kiosk,onChange:e=>o(r,{kiosk:e})}),(0,T.jsx)(K,{label:n(`start_page`),hint:n(`start_page_hint`),value:!!r.default_panel,onChange:e=>o(r,{default_panel:e})})]}),(0,T.jsx)(K,{label:n(`sidebar_only`),hint:n(`sidebar_only_hint`),value:r.sidebar_only,onChange:e=>o(r,{sidebar_only:e})})]})]},r.id))]})},tt=`/better_wall_dashboard/static/icon.png`,nt=i(Oe)`
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
`,rt=({open:e,onClose:i})=>{let a=c(),o=oe(),s=(0,w.useRef)(null),[l,u]=(0,w.useState)(null),d=p();(0,w.useEffect)(()=>{let t=s.current;t&&(e&&!t.open&&t.showModal(),!e&&t.open&&t.close())}),(0,w.useEffect)(()=>{e&&o?.sendMessagePromise({type:`better_wall_dashboard/version`}).then(u).catch(()=>void 0)},[e,o]);let f=!!(d&&l&&l.app!==d);return(0,T.jsxs)(nt,{ref:s,tabIndex:-1,onClose:()=>e&&i(),onClick:e=>e.target===e.currentTarget&&i(),children:[(0,T.jsxs)(`div`,{className:`head`,children:[(0,T.jsx)(`img`,{src:tt,alt:``}),(0,T.jsx)(`h2`,{children:`Better Wall Dashboard`})]}),(0,T.jsx)(`p`,{className:`muted`,children:a(`about_blurb`)}),(0,T.jsx)(`table`,{children:(0,T.jsxs)(`tbody`,{children:[(0,T.jsxs)(`tr`,{children:[(0,T.jsx)(`th`,{children:a(`about_version`)}),(0,T.jsx)(`td`,{children:l?.version??`–`})]}),(0,T.jsxs)(`tr`,{children:[(0,T.jsx)(`th`,{children:a(`about_page`)}),(0,T.jsx)(`td`,{children:d?d.slice(0,12):`–`})]})]})}),f&&(0,T.jsxs)(T.Fragment,{children:[(0,T.jsx)(`p`,{children:a(`update_available`)}),(0,T.jsx)(D,{appearance:`filled`,icon:`mdi:reload`,onClick:()=>{let e=n(),t=null;if(e&&l){let n=new URL(e);n.searchParams.set(`v`,l.app),t=n.toString()}r(t)},children:a(`reload`)})]}),(l?.documentation||l?.issues)&&(0,T.jsxs)(`p`,{children:[l.documentation&&(0,T.jsx)(`a`,{href:l.documentation,target:`_blank`,rel:`noopener noreferrer`,children:a(`about_repo`)}),l.documentation&&l.issues&&` · `,l.issues&&(0,T.jsx)(`a`,{href:l.issues,target:`_blank`,rel:`noopener noreferrer`,children:a(`about_issues`)})]}),(0,T.jsx)(L,{type:`button`,className:`shut`,"aria-label":a(`close`),"data-tip":a(`close`),onClick:i,children:(0,T.jsx)(t,{icon:`mdi:close`})})]})},it=({request:e,onAnswer:t})=>{let n=c(),r=(0,w.useRef)(null);return(0,w.useEffect)(()=>{let t=r.current;t&&(e&&!t.open&&t.showModal(),!e&&t.open&&t.close())}),(0,T.jsx)(Oe,{ref:r,role:`alertdialog`,tabIndex:-1,onCancel:e=>{e.preventDefault(),t(!1)},onClick:e=>e.target===e.currentTarget&&t(!1),children:e&&(0,T.jsxs)(T.Fragment,{children:[(0,T.jsx)(`h2`,{children:e.title}),e.text&&(0,T.jsx)(`p`,{className:`muted`,children:e.text}),(0,T.jsxs)(`div`,{className:`actions`,children:[(0,T.jsx)(D,{appearance:`plain`,onClick:()=>t(!1),children:n(`cancel`)}),(0,T.jsx)(D,{appearance:`accent`,danger:e.danger,onClick:()=>t(!0),children:e.confirm})]})]})})};function at(){let[e,t]=(0,w.useState)(null);return{confirm:(0,w.useCallback)(e=>new Promise(n=>t({...e,resolve:n})),[]),dialog:(0,T.jsx)(it,{request:e,onAnswer:n=>{e?.resolve(n),t(null)}})}}var ot=(0,w.createContext)([]);function st(){return(0,w.useContext)(ot)}function ct(e){let t=document.querySelector(`home-assistant`);return t?(t.dispatchEvent(new CustomEvent(`hass-notification`,{bubbles:!0,composed:!0,detail:{message:e,dismissable:!0}})),!0):!1}var lt=({draft:e,update:t})=>{let n=c(),r=n=>t({...e,background:{...e.background,...n}});return(0,T.jsxs)(T.Fragment,{children:[(0,T.jsx)(Q,{title:n(`tab_general`),lead:n(`lead_general`)}),(0,T.jsx)(j,{children:(0,T.jsx)(W,{label:n(`name`),value:e.name,onChange:n=>t({...e,name:n})})}),(0,T.jsxs)(j,{children:[(0,T.jsx)(`h3`,{children:n(`background`)}),(0,T.jsx)(q,{label:n(`background_mode`),value:e.background.mode??`image`,options:[{value:`image`,label:n(`background_mode_image`)},{value:`color`,label:n(`background_mode_color`)}],onChange:e=>r({mode:e===`color`?`color`:`image`})}),e.background.mode===`color`?(0,T.jsx)(Ke,{label:n(`background_color`),value:e.background.color??`#131313`,onChange:e=>r({color:e})}):(0,T.jsxs)(T.Fragment,{children:[(0,T.jsx)(Je,{label:n(`background_media`),hint:n(`background_media_hint`),accept:[`image/*`],value:e.background.image,onChange:e=>r({image:e})}),(0,T.jsx)(W,{label:n(`background_image`),hint:n(`background_image_hint`),type:`url`,value:e.background.image.startsWith(`media-source://`)?``:e.background.image,onChange:e=>r({image:e})}),(0,T.jsxs)(I,{children:[(0,T.jsx)(Ue,{label:n(`background_dim`),value:e.background.dim,min:0,max:95,step:5,unit:`%`,scale:100,onChange:e=>r({dim:e})}),(0,T.jsx)(Ue,{label:n(`background_blur`),value:e.background.blur,min:0,max:40,step:1,unit:`px`,onChange:e=>r({blur:e})})]})]})]}),(0,T.jsxs)(j,{children:[(0,T.jsx)(`h3`,{children:n(`security_heading`)}),(0,T.jsx)(W,{label:n(`pin`),hint:n(`pin_hint`),type:`password`,value:e.pin??``,onChange:n=>t({...e,pin:n.replace(/\D/g,``).slice(0,8)})})]})]})},ut=6,dt=[{type:`state`,label:`rule_state`},{type:`numeric`,label:`rule_numeric`},{type:`time`,label:`rule_time`},{type:`sun`,label:`rule_sun`},{type:`home`,label:`rule_home`}],ft=e=>{switch(e){case`state`:return{type:e,entity:``,state:``,not:!1};case`numeric`:return{type:e,entity:``,above:null,below:null};case`time`:return{type:e,after:``,before:``};case`sun`:return{type:e,when:`night`};case`home`:return{type:e,who:`anyone`}}},pt=i.div`
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
`,mt=e=>{let t=Number(e.replace(`,`,`.`));return e.trim()===``||!Number.isFinite(t)?null:t},ht=({rule:e,onChange:t})=>{let n=c();switch(e.type){case`state`:return(0,T.jsxs)(T.Fragment,{children:[(0,T.jsx)(Y,{label:n(`entity`),value:e.entity,onChange:n=>t({...e,entity:n})}),(0,T.jsx)(W,{label:n(`rule_state_value`),hint:n(`rule_state_value_hint`),value:e.state,onChange:n=>t({...e,state:n})}),(0,T.jsx)(K,{label:n(`rule_not`),value:e.not,onChange:n=>t({...e,not:n})})]});case`numeric`:return(0,T.jsxs)(T.Fragment,{children:[(0,T.jsx)(Y,{label:n(`entity`),value:e.entity,onChange:n=>t({...e,entity:n})}),(0,T.jsxs)(I,{children:[(0,T.jsx)(W,{label:n(`rule_above`),value:e.above===null?``:String(e.above),onChange:n=>t({...e,above:mt(n)})}),(0,T.jsx)(W,{label:n(`rule_below`),value:e.below===null?``:String(e.below),onChange:n=>t({...e,below:mt(n)})})]})]});case`time`:return(0,T.jsxs)(I,{children:[(0,T.jsx)(qe,{label:n(`rule_after`),value:e.after,onChange:n=>t({...e,after:n})}),(0,T.jsx)(qe,{label:n(`rule_before`),hint:n(`rule_before_hint`),value:e.before,onChange:n=>t({...e,before:n})})]});case`sun`:return(0,T.jsx)(q,{label:n(`rule_sun`),value:e.when,options:[{value:`day`,label:n(`rule_day`)},{value:`night`,label:n(`rule_night`)}],onChange:n=>t({...e,when:n===`day`?`day`:`night`})});case`home`:return(0,T.jsx)(q,{label:n(`rule_home`),value:e.who,options:[{value:`anyone`,label:n(`rule_anyone`)},{value:`nobody`,label:n(`rule_nobody`)}],onChange:n=>t({...e,who:n===`nobody`?`nobody`:`anyone`})})}},gt=({rules:e,onChange:t})=>{let n=c();return(0,T.jsxs)(F,{as:`div`,children:[(0,T.jsx)(`span`,{className:`label`,children:n(`rules`)}),(0,T.jsx)(`small`,{children:n(`rules_hint`)}),e.map((r,i)=>(0,T.jsxs)(pt,{children:[(0,T.jsxs)(`div`,{className:`head`,children:[(0,T.jsx)(q,{label:n(`rule_type`),value:r.type,options:dt.map(e=>({value:e.type,label:n(e.label)})),onChange:n=>t(V(e,i,ft(n)))}),(0,T.jsx)(Z,{index:i,length:e.length,onMove:n=>t(R(e,i,n)),onRemove:()=>t(e.filter((e,t)=>t!==i))})]}),(0,T.jsx)(ht,{rule:r,onChange:n=>t(V(e,i,n))})]},i)),(0,T.jsx)(`div`,{children:(0,T.jsx)(D,{icon:`mdi:plus`,disabled:e.length>=ut,onClick:()=>t([...e,ft(`state`)]),children:n(`add_rule`)})})]})},_t=({item:n})=>{let r=s(n.entity||void 0),i=c(),a=n.name||r?.attributes.friendly_name||n.entity||i(`not_set`);return(0,T.jsxs)(T.Fragment,{children:[(0,T.jsx)(t,{className:`icon`,icon:n.icon||r?.attributes.icon||e(n.entity)}),(0,T.jsxs)(`span`,{className:`text`,children:[(0,T.jsx)(`span`,{children:a}),n.entity&&(0,T.jsxs)(`span`,{className:`secondary`,children:[n.entity,n.rules?.length?` · ${n.rules.length===1?i(`rules_one`):i(`rules_count`,{count:n.rules.length})}`:``]})]})]})};function $({items:e,max:n,domains:r,addLabel:i,withRules:a=!1,create:o,extra:s,onChange:l}){let u=c(),d=(t,n)=>l(V(e,t,{...e[t],...n})),f=()=>o?.()??{id:z(),entity:``,name:``,icon:``,...a?{rules:[]}:{}};return(0,T.jsxs)(T.Fragment,{children:[e.length===0&&(0,T.jsxs)(P,{children:[(0,T.jsx)(t,{icon:`mdi:playlist-plus`}),(0,T.jsx)(`span`,{children:u(`empty_list`)})]}),e.map((t,n)=>(0,T.jsxs)(N,{open:!t.entity||void 0,children:[(0,T.jsxs)(`summary`,{children:[(0,T.jsx)(_t,{item:t}),(0,T.jsx)(`span`,{onClick:e=>e.preventDefault(),children:(0,T.jsx)(Z,{index:n,length:e.length,onMove:t=>l(R(e,n,t)),onRemove:()=>l(e.filter((e,t)=>t!==n))})})]}),(0,T.jsxs)(`div`,{className:`fold-body`,children:[(0,T.jsx)(Y,{label:u(`entity`),value:t.entity,domains:r,onChange:e=>d(n,{entity:e})}),(0,T.jsxs)(I,{children:[(0,T.jsx)(W,{label:u(`name`),hint:u(`name_hint`),value:t.name,onChange:e=>d(n,{name:e})}),(0,T.jsx)(J,{label:u(`icon`),value:t.icon,onChange:e=>d(n,{icon:e})})]}),s?.(t,e=>d(n,e)),a&&(0,T.jsx)(gt,{rules:t.rules??[],onChange:e=>d(n,{rules:e})})]})]},t.id)),(0,T.jsx)(`div`,{children:(0,T.jsxs)(D,{icon:`mdi:plus`,appearance:`filled`,disabled:e.length>=n,onClick:()=>l([...e,f()]),children:[i,` (`,e.length,`/`,n,`)`]})})]})}var vt=[`input_boolean`,`switch`,`binary_sensor`],yt=({draft:e,update:t,part:n})=>{let r=c(),i=st(),a=e.sidebar,o=n=>t({...e,sidebar:n}),s=(e,t)=>o({...a,[e]:{...a[e],...t}}),l=O.find(e=>e.part===n)?.label??`tab_sidebar`,u=(0,T.jsx)(Q,{title:r(l),lead:r(`lead_${n}`)});switch(n){case`clock`:return(0,T.jsxs)(T.Fragment,{children:[u,(0,T.jsxs)(j,{children:[(0,T.jsx)(q,{label:r(`clock_style`),value:a.clock?.style??`digital`,options:[{value:`digital`,label:r(`clock_digital`)},{value:`analog`,label:r(`clock_analog`)}],onChange:e=>s(`clock`,{style:e})}),(0,T.jsx)(K,{label:r(`clock_seconds`),value:!!a.clock?.seconds,onChange:e=>s(`clock`,{seconds:e})})]})]});case`status`:return(0,T.jsxs)(T.Fragment,{children:[u,(0,T.jsxs)(j,{children:[(0,T.jsx)(`h3`,{children:r(`status_icons`)}),(0,T.jsx)(`p`,{children:r(`status_icons_hint`)}),(0,T.jsx)($,{items:a.status.icons??[],max:b.statusIcons,domains:vt,addLabel:r(`add_status_icon`),onChange:e=>s(`status`,{icons:e})})]}),(0,T.jsxs)(j,{children:[(0,T.jsx)(`h3`,{children:r(`wifi_heading`)}),(0,T.jsx)(Y,{label:r(`wifi_signal`),hint:r(`wifi_signal_hint`),value:a.status.wifi_signal,domains:[`sensor`],onChange:e=>s(`status`,{wifi_signal:e})})]}),(0,T.jsxs)(j,{children:[(0,T.jsx)(`h3`,{children:r(`guest_wifi`)}),(0,T.jsx)(Y,{label:r(`guest_qr_image`),hint:r(`guest_qr_image_hint`),value:a.guest_wifi.qr_image,domains:[`image`],onChange:e=>s(`guest_wifi`,{qr_image:e})}),(0,T.jsxs)(I,{children:[(0,T.jsx)(W,{label:r(`network`),value:a.guest_wifi.ssid,onChange:e=>s(`guest_wifi`,{ssid:e})}),(0,T.jsx)(W,{label:r(`password`),type:`password`,value:a.guest_wifi.password,onChange:e=>s(`guest_wifi`,{password:e})})]}),(0,T.jsxs)(I,{children:[(0,T.jsx)(q,{label:r(`security`),value:a.guest_wifi.security,options:[{value:`WPA`,label:`WPA/WPA2/WPA3`},{value:`WEP`,label:`WEP`},{value:`nopass`,label:r(`open_network`)}],onChange:e=>s(`guest_wifi`,{security:e})}),(0,T.jsx)(K,{label:r(`hidden_network`),value:a.guest_wifi.hidden,onChange:e=>s(`guest_wifi`,{hidden:e})})]})]})]});case`climate`:return(0,T.jsxs)(T.Fragment,{children:[u,(0,T.jsxs)(j,{children:[(0,T.jsx)(Y,{label:r(`temperature`),value:a.climate.temperature,domains:[`sensor`],onChange:e=>s(`climate`,{temperature:e})}),(0,T.jsx)(Y,{label:r(`humidity`),value:a.climate.humidity,domains:[`sensor`],onChange:e=>s(`climate`,{humidity:e})}),(0,T.jsx)(G,{label:r(`hours`),value:a.climate.hours,min:1,max:168,unit:`h`,onChange:e=>s(`climate`,{hours:e})})]})]});case`persons`:return(0,T.jsxs)(T.Fragment,{children:[u,(0,T.jsx)(X,{label:r(`persons`),value:a.persons,domains:[`person`],onChange:e=>o({...a,persons:e})})]});case`openings`:return(0,T.jsxs)(T.Fragment,{children:[u,(0,T.jsx)(X,{label:r(`openings`),hint:r(`openings_hint`),value:a.openings,domains:[`binary_sensor`,`cover`,`lock`,`sensor`],onChange:e=>o({...a,openings:e})}),(0,T.jsx)(K,{label:r(`openings_hide_when_closed`),hint:r(`openings_hide_when_closed_hint`),value:a.openings_view?.hide_when_closed??!1,onChange:e=>o({...a,openings_view:{only_open:!1,...a.openings_view,hide_when_closed:e}})}),(0,T.jsx)(K,{label:r(`openings_only_open`),hint:r(`openings_only_open_hint`),value:a.openings_view?.only_open??!1,onChange:e=>o({...a,openings_view:{hide_when_closed:!1,...a.openings_view,only_open:e}})})]});case`travel`:return(0,T.jsxs)(T.Fragment,{children:[u,(0,T.jsxs)(j,{children:[(0,T.jsx)(Y,{label:r(`travel_sensor`),value:a.travel.entity,domains:[`sensor`],onChange:e=>s(`travel`,{entity:e})}),(0,T.jsx)(W,{label:r(`name`),hint:r(`travel_name_hint`),value:a.travel.name,onChange:e=>s(`travel`,{name:e})})]}),(0,T.jsxs)(j,{children:[(0,T.jsx)(`h3`,{children:r(`map`)}),(0,T.jsx)(W,{label:r(`maps_api_key`),hint:r(`maps_api_key_hint`),type:`password`,value:a.travel.maps_api_key,onChange:e=>s(`travel`,{maps_api_key:e})}),(0,T.jsx)(W,{label:r(`map_url`),hint:r(`map_url_hint`),type:`url`,value:a.travel.map_url,onChange:e=>s(`travel`,{map_url:e})}),(0,T.jsx)(Y,{label:r(`travel_work_zone`),hint:r(`travel_work_zone_hint`),value:a.travel.work_zone??``,domains:[`zone`],onChange:e=>s(`travel`,{work_zone:e})}),(0,T.jsx)(W,{label:r(`travel_work_address`),hint:r(`travel_work_address_hint`),value:a.travel.work_address??``,onChange:e=>s(`travel`,{work_address:e})})]})]});case`quick`:return(0,T.jsxs)(T.Fragment,{children:[u,(0,T.jsx)($,{items:a.quick_actions,max:b.quickActions,addLabel:r(`add_quick_action`),withRules:!0,onChange:e=>o({...a,quick_actions:e})})]});case`calendar`:return(0,T.jsxs)(T.Fragment,{children:[u,(0,T.jsxs)(j,{children:[(0,T.jsx)(X,{label:r(`calendars`),value:a.calendar.entities,domains:[`calendar`],onChange:e=>s(`calendar`,{entities:e})}),(0,T.jsx)(G,{label:r(`days`),hint:r(`calendar_days_hint`),value:a.calendar.days,min:1,max:b.calendarDays,onChange:e=>s(`calendar`,{days:e})})]})]});case`weather`:return(0,T.jsxs)(T.Fragment,{children:[u,(0,T.jsxs)(j,{children:[(0,T.jsx)(Y,{label:r(`weather_entity`),value:a.weather.entity,domains:[`weather`],onChange:e=>s(`weather`,{entity:e})}),(0,T.jsx)(Y,{label:r(`outdoor_temperature`),hint:r(`outdoor_temperature_hint`),value:a.weather.temperature,domains:[`sensor`],onChange:e=>s(`weather`,{temperature:e})})]})]});case`notifications`:return(0,T.jsxs)(T.Fragment,{children:[u,(0,T.jsxs)(j,{children:[(0,T.jsx)(K,{label:r(`notifications_enabled`),value:a.notifications.enabled,onChange:e=>s(`notifications`,{enabled:e})}),(0,T.jsx)(He,{label:r(`notifications_prefix`),hint:r(`notifications_prefix_hint`),suggestions:le([...i,e]),value:ee(a.notifications),onChange:e=>s(`notifications`,{prefixes:e})})]}),(0,T.jsxs)(j,{children:[(0,T.jsx)(`h3`,{children:r(`settings`)}),(0,T.jsx)(K,{label:r(`settings_enabled`),hint:r(`settings_enabled_hint`),value:a.settings?.enabled!==!1,onChange:e=>s(`settings`,{enabled:e})})]})]});case`system`:return(0,T.jsxs)(T.Fragment,{children:[u,(0,T.jsx)($,{items:a.system,max:b.system,domains:[`sensor`],addLabel:r(`add_statistic`),onChange:e=>o({...a,system:e})})]})}},bt=i.textarea`
  min-height: 55vh;
  padding: 12px;
  border-radius: 8px;
  border: 1px solid var(--divider-color, rgba(225, 225, 225, 0.12));
  background: var(--code-editor-background-color, var(--secondary-background-color, #282828));
  color: inherit;
  font-family: var(--ha-font-family-code, ui-monospace, monospace);
  font-size: 13px;
  resize: vertical;
`,xt=i.p`
  margin: 0;
  color: var(--error-color, #db4437);
`,St=({draft:e,update:t})=>{let n=c(),[r,i]=(0,w.useState)(()=>JSON.stringify(e,null,2)),[a,o]=(0,w.useState)(!1);return(0,T.jsxs)(T.Fragment,{children:[(0,T.jsx)(Q,{title:n(`tab_json`),lead:n(`json_hint`)}),(0,T.jsx)(bt,{value:r,spellCheck:!1,onChange:e=>{i(e.target.value),o(!1)}}),a&&(0,T.jsx)(xt,{children:n(`json_invalid`)}),(0,T.jsx)(`div`,{children:(0,T.jsx)(D,{icon:`mdi:check`,appearance:`filled`,onClick:()=>{try{t({...JSON.parse(r),id:e.id})}catch{o(!0)}},children:n(`apply`)})})]})};function Ct(){let e=a(e=>{let t=new Set(Object.values(e.entitiesRegistryDisplay).map(e=>e.platform));return _.filter(e=>!e.integration||t.has(e.integration)).map(e=>e.type).join(` `)});return _.filter(t=>e.split(` `).includes(t.type))}function wt(e){let t=a(t=>e?.pickerEntities?e.pickerEntities(t.entities,e=>t.entitiesRegistryDisplay[e]?.platform).join(` `):null);return(0,w.useMemo)(()=>t===null?void 0:t.split(` `).filter(Boolean),[t])}var Tt=({tile:e,onChange:t})=>{let n=c(),r=s(f(e.entity||void 0))?.attributes.options??[],i=Array.isArray(e.options.hidden_scenes)?e.options.hidden_scenes:[],a=n=>t({...e.options,...n});return(0,T.jsxs)(T.Fragment,{children:[r.length>0&&(0,T.jsxs)(F,{as:`div`,children:[(0,T.jsx)(`span`,{className:`label`,children:n(`bl_shown_scenes`)}),(0,T.jsx)(`small`,{children:n(`bl_shown_scenes_hint`)}),r.map(e=>(0,T.jsx)(K,{label:e,value:!i.includes(e),onChange:t=>a({hidden_scenes:t?i.filter(t=>t!==e):[...i.filter(e=>r.includes(e)),e]})},e))]}),(0,T.jsx)(K,{label:n(`light_hide_presets`),hint:n(`light_hide_presets_hint`),value:e.options.hide_presets===!0,onChange:e=>a({hide_presets:e})}),(0,T.jsxs)(I,{children:[(0,T.jsx)(Y,{label:n(`bl_button_entity`),hint:n(`bl_button_entity_hint`),value:typeof e.options.button_entity==`string`?e.options.button_entity:``,onChange:e=>a({button_entity:e})}),(0,T.jsx)(J,{label:n(`bl_button_icon`),value:typeof e.options.button_icon==`string`?e.options.button_icon:``,onChange:e=>a({button_icon:e})})]})]})},Et=({preset:e,onChange:t})=>{let n=c(),r=s(e.entity||void 0),i=Array.isArray(r?.attributes.source_list)?r.attributes.source_list:[];return e.kind===`run`?null:e.kind===`source`&&i.length?(0,T.jsx)(q,{label:n(`media_preset_value`),value:e.value,options:[...new Set([...e.value?[e.value]:[],...i])].map(e=>({value:e,label:e})),onChange:t}):(0,T.jsx)(W,{label:e.kind===`app`?n(`media_preset_app_id`):n(`media_preset_value`),hint:e.kind===`app`?n(`media_preset_app_hint`):void 0,value:e.value,onChange:t})},Dt={bed:7,subs:2,heights:4},Ot=({tile:e,onChange:t})=>{let n=c(),r=y(e.entity,e.options),i=n=>t({...e.options,...n}),a=r.layout??Dt,o=e=>i({speakers:C({...a,...e})}),s=e=>e.map(e=>({value:String(e),label:String(e)}));return(0,T.jsxs)(T.Fragment,{children:[(0,T.jsx)(X,{label:n(`media_players`),hint:n(`media_players_hint`),domains:[`media_player`],max:6,value:r.players.filter(t=>t!==e.entity),onChange:e=>i({players:e})}),(0,T.jsxs)(I,{children:[(0,T.jsx)(Y,{label:n(`media_power_entity`),hint:n(`media_power_entity_hint`),domains:se,value:typeof e.options.power==`string`?e.options.power:``,onChange:e=>i({power:e})}),(0,T.jsx)(Y,{label:n(`media_volume_entity`),hint:n(`media_volume_entity_hint`),domains:[`media_player`],value:typeof e.options.volume==`string`?e.options.volume:``,onChange:e=>i({volume:e})})]}),(0,T.jsx)(q,{label:n(`media_volume_unit`),value:r.volumeUnit,options:h.map(e=>({value:e,label:n(`media_volume_${e}`)})),onChange:e=>i({volume_unit:e})}),(0,T.jsxs)(F,{as:`div`,children:[(0,T.jsx)(`span`,{className:`label`,children:n(`media_presets`)}),(0,T.jsx)(`small`,{children:n(`media_presets_hint`)})]}),(0,T.jsx)($,{items:r.presets,max:8,domains:[`media_player`,`script`,`scene`,`button`,`input_button`],addLabel:n(`add_media_preset`),create:()=>({id:z(),entity:``,name:``,icon:``,kind:`source`,value:``}),extra:(e,t)=>(0,T.jsxs)(T.Fragment,{children:[(0,T.jsx)(q,{label:n(`media_preset_kind`),value:e.kind,options:re.map(e=>({value:e,label:n(`media_preset_${e}`)})),onChange:e=>t({kind:e,value:``})}),(0,T.jsx)(Et,{preset:e,onChange:e=>t({value:e})})]}),onChange:e=>i({presets:e})}),(0,T.jsxs)(F,{as:`div`,children:[(0,T.jsx)(`span`,{className:`label`,children:n(`media_switches`)}),(0,T.jsx)(`small`,{children:n(`media_switches_hint`)})]}),(0,T.jsx)(W,{label:n(`media_switches_title`),value:r.switchesTitle,onChange:e=>i({switches_title:e})}),(0,T.jsx)($,{items:r.switches,max:4,domains:[`switch`,`input_boolean`,`light`],addLabel:n(`add_media_switch`),create:()=>({id:z(),entity:``,name:``,icon:``,subs:[]}),extra:(e,t)=>r.layout&&r.layout.subs>0?(0,T.jsxs)(F,{as:`div`,children:[(0,T.jsx)(`span`,{className:`label`,children:n(`media_switch_subs`)}),(0,T.jsx)(`small`,{children:n(`media_switch_subs_hint`)}),m.slice(0,r.layout.subs).map(r=>(0,T.jsx)(K,{label:n(`speaker_${r}`),value:e.subs.includes(r),onChange:n=>t({subs:n?[...e.subs,r]:e.subs.filter(e=>e!==r)})},r))]}):null,onChange:e=>i({switches:e})}),(0,T.jsxs)(F,{as:`div`,children:[(0,T.jsx)(`span`,{className:`label`,children:n(`media_devices`)}),(0,T.jsx)(`small`,{children:n(`media_devices_hint`)})]}),(0,T.jsx)($,{items:r.devices,max:4,domains:[`media_player`,`remote`,`switch`],addLabel:n(`add_media_device`),create:()=>({id:z(),entity:``,name:``,icon:``,info:``}),extra:(e,t)=>(0,T.jsx)(Y,{label:n(`media_device_info`),hint:n(`media_device_info_hint`),domains:[`sensor`,`input_text`,`select`],value:e.info,onChange:e=>t({info:e})}),onChange:e=>i({devices:e})}),(0,T.jsxs)(I,{children:[(0,T.jsx)(Y,{label:n(`media_night_entity`),hint:n(`media_night_entity_hint`),domains:[`switch`,`input_boolean`,`script`],value:r.night,onChange:e=>i({night:e})}),(0,T.jsx)(W,{label:n(`media_night_text`),value:r.nightText,onChange:e=>i({night_text:e})})]}),(0,T.jsx)(F,{as:`div`,children:(0,T.jsx)(`span`,{className:`label`,children:n(`media_sound_heading`)})}),(0,T.jsxs)(I,{children:[(0,T.jsx)(Y,{label:n(`media_mode_entity`),hint:n(`media_mode_entity_hint`),domains:[`sensor`,`select`,`input_text`],value:r.modeEntity,onChange:e=>i({mode_entity:e})}),(0,T.jsx)(Y,{label:n(`media_format_entity`),hint:n(`media_format_entity_hint`),domains:[`sensor`,`input_text`],value:r.formatEntity,onChange:e=>i({format_entity:e})})]}),(0,T.jsx)(K,{label:n(`media_layout`),hint:n(`media_layout_hint`),value:r.layout!==null,onChange:e=>i({speakers:e?C(a):``})}),r.layout&&(0,T.jsxs)(T.Fragment,{children:[(0,T.jsxs)(I,{children:[(0,T.jsx)(q,{label:n(`media_layout_bed`),value:String(a.bed),options:s(g),onChange:e=>o({bed:Number(e)})}),(0,T.jsx)(q,{label:n(`media_layout_subs`),value:String(a.subs),options:s(fe),onChange:e=>o({subs:Number(e)})}),(0,T.jsx)(q,{label:n(`media_layout_heights`),value:String(a.heights),options:s(ie),onChange:e=>o({heights:Number(e)})})]}),(0,T.jsx)(q,{label:n(`media_sofa`),value:r.sofa,options:ce.map(e=>({value:e,label:n(`media_sofa_${e}`)})),onChange:e=>i({sofa:e})}),(0,T.jsx)(K,{label:n(`media_listener`),hint:n(`media_listener_hint`),value:r.listener,onChange:e=>i({listener:e})}),(0,T.jsx)(K,{label:n(`media_walls`),value:r.walls,onChange:e=>i({hide_walls:!e})}),(0,T.jsx)(K,{label:n(`media_room_movable`),hint:n(`media_room_movable_hint`),value:r.roomMovable,onChange:e=>i({room_movable:e})})]})]})},kt=({value:e,onChange:t})=>{let[n,r]=(0,w.useState)(()=>Object.keys(e).length?JSON.stringify(e):``),[i,a]=(0,w.useState)(!1),o=c();return(0,T.jsxs)(F,{children:[(0,T.jsx)(`span`,{className:`label`,children:o(`options_json`)}),(0,T.jsx)(`input`,{type:`text`,value:n,placeholder:`{"hours": 24, "color": "#03a9f4"}`,onChange:e=>{r(e.target.value);try{let n=e.target.value.trim()?JSON.parse(e.target.value):{};if(n&&typeof n==`object`&&!Array.isArray(n)){a(!1),t(n);return}}catch{}a(!0)}}),i&&(0,T.jsx)(`small`,{children:o(`json_invalid`)})]})},At=({value:e,entry:t,onChange:n})=>{let r=c(),i=wt(t);return(0,T.jsx)(Y,{label:r(`entity`),value:e,domains:t?.domains,integration:t?.pickerIntegration,include:i,onChange:n})},jt=({tile:e})=>{let n=c(),r=s(e.entity||void 0),i=x[e.type],a=e.name||r?.attributes.friendly_name||e.entity||(i?n(i.label):e.type);return(0,T.jsxs)(T.Fragment,{children:[(0,T.jsx)(t,{className:`icon`,icon:e.icon||i?.icon||`mdi:square-rounded-outline`}),(0,T.jsxs)(`span`,{className:`text`,children:[(0,T.jsx)(`span`,{children:a}),(0,T.jsxs)(`span`,{className:`secondary`,children:[i?n(i.label):e.type,` · `,e.w,` × `,e.h]})]})]})},Mt=({tiles:e,columns:n,rows:r,onChange:i})=>{let a=c(),o=Ct(),s=(t,n)=>i(V(e,t,{...e[t],...n}));return(0,T.jsxs)(T.Fragment,{children:[e.length===0&&(0,T.jsxs)(P,{children:[(0,T.jsx)(t,{icon:`mdi:view-grid-plus-outline`}),(0,T.jsx)(`span`,{children:a(`empty_tiles`)})]}),e.map((t,c)=>{let l=x[t.type];return(0,T.jsxs)(N,{open:!t.entity&&l?.needsEntity!==!1||void 0,children:[(0,T.jsxs)(`summary`,{children:[(0,T.jsx)(jt,{tile:t}),(0,T.jsx)(`span`,{onClick:e=>e.preventDefault(),children:(0,T.jsx)(Z,{index:c,length:e.length,onMove:t=>i(R(e,c,t)),onRemove:()=>i(e.filter((e,t)=>t!==c)),onDuplicate:()=>i([...e.slice(0,c+1),{...t,id:z()},...e.slice(c+1)])})})]}),(0,T.jsxs)(`div`,{className:`fold-body`,children:[(0,T.jsx)(q,{label:a(`type`),value:t.type,options:[...o.map(e=>({value:e.type,label:a(e.label)})),...o.some(e=>e.type===t.type)?[]:[{value:t.type,label:l?a(l.label):t.type}]],onChange:e=>{let t=x[e]?.size??[1,1];s(c,{type:e,w:Math.min(t[0],n),h:Math.min(t[1],r)})}}),l?.needsEntity!==!1&&(0,T.jsx)(At,{value:t.entity,entry:l,onChange:e=>s(c,{entity:e})}),(0,T.jsxs)(I,{children:[(0,T.jsx)(W,{label:a(`name`),hint:a(`name_hint`),value:t.name,onChange:e=>s(c,{name:e})}),(0,T.jsx)(J,{label:a(`icon`),value:t.icon,onChange:e=>s(c,{icon:e})})]}),(0,T.jsxs)(I,{children:[(0,T.jsx)(G,{label:a(`width`),value:t.w,min:1,max:n,onChange:e=>s(c,{w:Math.max(1,Math.min(n,e))})}),(0,T.jsx)(G,{label:a(`height`),value:t.h,min:1,max:r,onChange:e=>s(c,{h:Math.max(1,Math.min(r,e))})})]}),t.type===`sensor`&&(0,T.jsx)(kt,{value:t.options,onChange:e=>s(c,{options:e})}),t.type===`entity`&&t.entity.startsWith(`light.`)&&(0,T.jsx)(K,{label:a(`light_hide_presets`),hint:a(`light_hide_presets_hint`),value:t.options.hide_presets===!0,onChange:e=>s(c,{options:{...t.options,hide_presets:e}})}),(t.type===`cover`||t.type===`adaptive_cover`)&&(0,T.jsx)(q,{label:a(`cover_active_when`),hint:a(`cover_active_when_hint`),value:te.includes(t.options.active_when)?String(t.options.active_when):`open`,options:te.map(e=>({value:e,label:a(`cover_active_${e}`)})),onChange:e=>s(c,{options:{...t.options,active_when:e}})}),(t.type===`cover`||t.type===`adaptive_cover`)&&(0,T.jsx)(K,{label:a(`cover_stop_only_moving`),hint:a(`cover_stop_only_moving_hint`),value:t.options.stop_only_moving===!0,onChange:e=>s(c,{options:{...t.options,stop_only_moving:e}})}),(t.type===`cover`||t.type===`adaptive_cover`)&&(0,T.jsx)(He,{label:a(`cover_presets`),hint:a(`cover_presets_hint`),suggestions:[`0`,`25`,`50`,`75`,`100`],value:pe(t.options.positions).map(String),onChange:e=>s(c,{options:{...t.options,positions:pe(e)}})}),t.type===`better_lighting`&&(0,T.jsx)(Tt,{tile:t,onChange:e=>s(c,{options:e})}),t.type===`media`&&(0,T.jsx)(Ot,{tile:t,onChange:e=>s(c,{options:e})})]})]},t.id)}),(0,T.jsx)(`div`,{children:(0,T.jsx)(D,{icon:`mdi:plus`,appearance:`filled`,disabled:e.length>=b.tiles,onClick:()=>i([...e,{id:z(),type:`entity`,entity:``,name:``,icon:``,w:1,h:1,options:{}}]),children:a(`add_tile`)})})]})},Nt=()=>({id:z(),name:``,icon:``,status:[],columns:2,rows:2,square:!0,tiles:[]}),Pt=()=>({id:z(),columns:[75,25],rows:[50,50],sections:[]}),Ft=e=>({...B(e),id:z(),sections:e.sections.map(e=>({...B(e),id:z(),tiles:e.tiles.map(e=>({...e,id:z()}))}))}),It=e=>{let t=e.split(/[,/ ]+/).filter(Boolean).map(Number);return t.length&&t.length<=3&&t.every(e=>Number.isFinite(e)&&e>0)?t:null},Lt=({label:e,hint:t,value:n,onChange:r})=>(0,T.jsx)(W,{label:e,hint:t,value:n.join(`, `),onChange:e=>{let t=It(e);t&&r(t)}}),Rt=({draft:e,update:n,open:r})=>{let i=c(),a=e.pages,o=t=>n({...e,pages:t});return(0,T.jsxs)(T.Fragment,{children:[(0,T.jsx)(Q,{title:i(`tab_pages`),lead:i(`lead_pages`)}),(0,T.jsx)(M,{children:a.map((e,n)=>(0,T.jsxs)(`li`,{children:[(0,T.jsxs)(`button`,{type:`button`,className:`open`,onClick:()=>r({kind:`page`,page:n}),children:[(0,T.jsx)(t,{className:`icon`,icon:`mdi:book-open-page-variant-outline`}),(0,T.jsxs)(`span`,{className:`text`,children:[(0,T.jsx)(`span`,{children:i(`page_n`,{n:n+1})}),(0,T.jsx)(`span`,{className:`secondary`,children:e.sections.map(e=>e.name).filter(Boolean).join(` · `)||i(`no_sections`)})]})]}),(0,T.jsx)(Z,{index:n,length:a.length,onMove:e=>o(R(a,n,e)),onDuplicate:a.length<b.pages?()=>o([...a.slice(0,n+1),Ft(e),...a.slice(n+1)]):void 0,onRemove:()=>a.length>1&&o(a.filter((e,t)=>t!==n))})]},e.id))}),(0,T.jsx)(`div`,{children:(0,T.jsx)(D,{icon:`mdi:plus`,appearance:`filled`,disabled:a.length>=b.pages,onClick:()=>{o([...a,Pt()]),r({kind:`page`,page:a.length})},children:i(`add_page`)})})]})},zt=({draft:e,update:n,open:r,page:i})=>{let a=c(),o=e.pages[i],s=t=>n({...e,pages:V(e.pages,i,{...o,...t})}),l=o.columns.length*o.rows.length;return(0,T.jsxs)(T.Fragment,{children:[(0,T.jsx)(Q,{title:a(`page_n`,{n:i+1}),lead:a(`lead_page`)}),(0,T.jsxs)(j,{children:[(0,T.jsx)(`h3`,{children:a(`layout`)}),(0,T.jsxs)(I,{children:[(0,T.jsx)(Lt,{label:a(`column_split`),hint:a(`split_hint`),value:o.columns,onChange:e=>s({columns:e})}),(0,T.jsx)(Lt,{label:a(`row_split`),hint:a(`split_hint`),value:o.rows,onChange:e=>s({rows:e})})]})]}),(0,T.jsxs)(j,{children:[(0,T.jsx)(`h3`,{children:a(`sections`)}),(0,T.jsx)(`p`,{children:a(`sections_hint`,{cells:l})}),(0,T.jsx)(M,{children:Array.from({length:l},(e,n)=>{let c=o.sections[n];return c?(0,T.jsxs)(`li`,{children:[(0,T.jsxs)(`button`,{type:`button`,className:`open`,onClick:()=>r({kind:`section`,page:i,section:n}),children:[(0,T.jsx)(t,{className:`icon`,icon:c.icon||`mdi:view-grid-outline`}),(0,T.jsxs)(`span`,{className:`text`,children:[(0,T.jsx)(`span`,{children:c.name||a(`section_n`,{n:n+1})}),(0,T.jsxs)(`span`,{className:`secondary`,children:[a(`tiles_count`,{count:c.tiles.length}),` · `,c.columns,` × `,c.rows]})]})]}),(0,T.jsx)(Z,{index:n,length:o.sections.length,onMove:e=>s({sections:R(o.sections,n,e)}),onRemove:()=>s({sections:o.sections.filter((e,t)=>t!==n)})})]},c.id):(0,T.jsx)(`li`,{children:(0,T.jsxs)(`button`,{type:`button`,className:`open`,onClick:()=>{let e=[...o.sections];for(;e.length<=n;)e.push(Nt());s({sections:e}),r({kind:`section`,page:i,section:n})},children:[(0,T.jsx)(t,{className:`icon`,icon:`mdi:plus-box-outline`}),(0,T.jsxs)(`span`,{className:`text`,children:[(0,T.jsx)(`span`,{children:a(`add_section`)}),(0,T.jsx)(`span`,{className:`secondary`,children:a(`cell_n`,{n:n+1})})]})]})},`empty-${n}`)})})]})]})},Bt=({draft:e,update:t,page:n,section:r})=>{let i=c(),a=e.pages[n],o=a.sections[r],s=i=>t({...e,pages:V(e.pages,n,{...a,sections:V(a.sections,r,{...o,...i})})});return(0,T.jsxs)(T.Fragment,{children:[(0,T.jsx)(Q,{title:o.name||i(`section_n`,{n:r+1}),lead:i(`lead_section`)}),(0,T.jsxs)(j,{children:[(0,T.jsx)(`h3`,{children:i(`section_header`)}),(0,T.jsxs)(I,{children:[(0,T.jsx)(W,{label:i(`name`),value:o.name,onChange:e=>s({name:e})}),(0,T.jsx)(J,{label:i(`icon`),value:o.icon,onChange:e=>s({icon:e})})]}),(0,T.jsx)(X,{label:i(`status_entities`),value:o.status,max:2,domains:[`sensor`,`binary_sensor`],onChange:e=>s({status:e})})]}),(0,T.jsxs)(j,{children:[(0,T.jsx)(`h3`,{children:i(`grid`)}),(0,T.jsxs)(I,{children:[(0,T.jsx)(G,{label:i(`columns`),value:o.columns,min:1,max:b.sectionCells,onChange:e=>s({columns:e})}),(0,T.jsx)(G,{label:i(`rows`),value:o.rows,min:1,max:b.sectionCells,onChange:e=>s({rows:e})})]}),(0,T.jsx)(K,{label:i(`square_cells`),hint:i(`square_cells_hint`),value:o.square,onChange:e=>s({square:e})})]}),(0,T.jsxs)(j,{children:[(0,T.jsx)(`h3`,{children:i(`tiles`)}),(0,T.jsx)(Mt,{tiles:o.tiles,columns:o.columns,rows:o.rows,onChange:e=>s({tiles:e})})]})]})},Vt=({draft:e,update:n,open:r})=>{let i=c(),a=e.buttons,o=t=>n({...e,buttons:t});return(0,T.jsxs)(T.Fragment,{children:[(0,T.jsx)(Q,{title:i(`tab_buttons`),lead:i(`lead_buttons`)}),a.length>0&&(0,T.jsx)(M,{children:a.map((e,n)=>(0,T.jsxs)(`li`,{children:[(0,T.jsxs)(`button`,{type:`button`,className:`open`,onClick:()=>r({kind:`button`,button:n}),children:[(0,T.jsx)(t,{className:`icon`,icon:e.icon||`mdi:gesture-tap`}),(0,T.jsxs)(`span`,{className:`text`,children:[(0,T.jsx)(`span`,{children:e.name||i(`button_n`,{n:n+1})}),(0,T.jsx)(`span`,{className:`secondary`,children:i(`tiles_count`,{count:e.tiles.length})})]})]}),(0,T.jsx)(Z,{index:n,length:a.length,onMove:e=>o(R(a,n,e)),onRemove:()=>o(a.filter((e,t)=>t!==n))})]},e.id))}),(0,T.jsx)(`div`,{children:(0,T.jsxs)(D,{icon:`mdi:plus`,appearance:`filled`,disabled:a.length>=b.buttons,onClick:()=>{o([...a,{id:z(),name:``,icon:`mdi:gesture-tap`,columns:4,tiles:[]}]),r({kind:`button`,button:a.length})},children:[i(`add_button`),` (`,a.length,`/`,b.buttons,`)`]})})]})},Ht=({draft:e,update:t,button:n})=>{let r=c(),i=e.buttons[n],a=r=>t({...e,buttons:V(e.buttons,n,{...i,...r})});return(0,T.jsxs)(T.Fragment,{children:[(0,T.jsx)(Q,{title:i.name||r(`button_n`,{n:n+1}),lead:r(`lead_button`)}),(0,T.jsxs)(j,{children:[(0,T.jsxs)(I,{children:[(0,T.jsx)(W,{label:r(`name`),value:i.name,onChange:e=>a({name:e})}),(0,T.jsx)(J,{label:r(`icon`),value:i.icon,onChange:e=>a({icon:e})})]}),(0,T.jsx)(G,{label:r(`columns`),hint:r(`button_columns_hint`),value:i.columns,min:1,max:b.sectionCells,onChange:e=>a({columns:e})})]}),(0,T.jsxs)(j,{children:[(0,T.jsx)(`h3`,{children:r(`tiles`)}),(0,T.jsx)(Mt,{tiles:i.tiles,columns:i.columns,rows:b.sectionCells,onChange:e=>a({tiles:e})})]})]})},Ut=[{id:`tab-10`,label:`10″ tablet · 1280×800`,width:1280,height:800},{id:`tab-11`,label:`11″ tablet · 1194×834`,width:1194,height:834},{id:`tab-12`,label:`12″ tablet · 1366×1024`,width:1366,height:1024},{id:`fhd`,label:`Full HD · 1920×1080`,width:1920,height:1080},{id:`small`,label:`7″ panel · 1024×600`,width:1024,height:600}],Wt=({view:e,dashboards:t,...n})=>{switch(e.kind){case`general`:return(0,T.jsx)(lt,{...n});case`sidebar`:return(0,T.jsx)(yt,{...n,part:e.part});case`pages`:return(0,T.jsx)(Rt,{...n});case`page`:return(0,T.jsx)(zt,{...n,page:e.page});case`section`:return(0,T.jsx)(Bt,{...n,page:e.page,section:e.section});case`buttons`:return(0,T.jsx)(Vt,{...n});case`button`:return(0,T.jsx)(Ht,{...n,button:e.button});case`users`:return(0,T.jsx)(et,{dashboards:t});case`json`:return(0,T.jsx)(St,{...n},n.draft.id)}},Gt=()=>{let e=c(),n=oe(),{narrow:r}=ue(),[i,a]=(0,w.useState)(null),[o,s]=(0,w.useState)(null),[u,d]=(0,w.useState)(!1),[f,p]=(0,w.useState)(``),[m,ee]=(0,w.useState)({kind:`general`}),[te,ne]=(0,w.useState)(()=>new Set),[re,h]=(0,w.useState)(!1),[ie,g]=(0,w.useState)(!1),[ae,se]=(0,w.useState)(!1),[_,ce]=(0,w.useState)(!1),[v,le]=(0,w.useState)(Ut[0].id),[y,b]=(0,w.useState)(!1),de=Ut.find(e=>e.id===v)??Ut[0],x=(0,w.useCallback)((e,t)=>{s(B(e.dashboards[t]??e.dashboards.default)),d(!1)},[]);(0,w.useEffect)(()=>{n?.sendMessagePromise({type:`better_wall_dashboard/document`}).then(e=>{a(e),x(e,`default`)}).catch(e=>p(String(e?.message??e)))},[n,x]),(0,w.useEffect)(()=>{if(!u)return;let e=e=>e.preventDefault();return window.addEventListener(`beforeunload`,e),()=>window.removeEventListener(`beforeunload`,e)},[u]);let fe=(0,w.useCallback)(e=>{s(e),d(!0),p(``)},[]),S=(0,w.useCallback)((e,t)=>{ee(e),ne(n=>new Set([...n,..._e(e),...t?[t]:[]])),h(!1),g(!1),ce(!1)},[]),pe=(0,w.useCallback)(e=>{ne(t=>{let n=new Set(t);return n.delete(e)||n.add(e),n})},[]),{confirm:C,dialog:me}=at(),E=async()=>!u||C({title:e(`discard_title`),text:e(`discard_text`),confirm:e(`discard`),danger:!0}),he=async()=>{if(n&&o){p(e(`saving`));try{let t=await n.sendMessagePromise({type:`better_wall_dashboard/save_dashboard`,dashboard:o});a(e=>e&&{...e,dashboards:{...e.dashboards,[t.dashboard.id]:t.dashboard}}),s(B(t.dashboard)),d(!1),p(e(`saved`))}catch(e){p(String(e?.message??e))}}},O=async()=>{i&&o&&await E()&&(i.dashboards[o.id]?x(i,o.id):x(i,`default`),p(``))},ve=async e=>{i&&await E()&&(x(i,e),S({kind:`general`}))},A=async t=>{if(g(!1),!i||!await E())return;let n=B(t??i.dashboards.default);s({...n,id:z(),name:t?`${t.name} (2)`:e(`new_dashboard`)}),d(!0),S({kind:`general`})},we=async()=>{if(g(!1),!n||!o)return;let t=e=>ct(e)||p(e);try{let r=await n.sendMessagePromise({type:`better_wall_dashboard/reload_tablets`,dashboard_id:o.id});t(e(`tablets_reloaded`,{count:r.reached}))}catch(e){t(String(e?.message??e))}},j=async()=>{if(g(!1),!n||!o||!i||o.id==="default"||!await C({title:e(`delete_title`,{name:o.name}),text:e(`confirm_delete`,{name:o.name}),confirm:e(`delete`),danger:!0}))return;i.dashboards[o.id]&&await n.sendMessagePromise({type:`better_wall_dashboard/delete_dashboard`,dashboard_id:o.id});let t={...i.dashboards};delete t[o.id];let r={...i,dashboards:t};a(r),x(r,`default`),S({kind:`general`})},M=(0,w.useMemo)(()=>Object.values(i?.dashboards??{}),[i]),N=(0,w.useMemo)(()=>{let e=Object.values(i?.dashboards??{}).map(e=>({id:e.id,name:e.name}));return o&&!e.some(e=>e.id===o.id)&&e.push({id:o.id,name:o.name}),e.map(e=>e.id===o?.id?{...e,name:o.name}:e)},[i,o]);if(!o)return(0,T.jsxs)(be,{children:[(0,T.jsx)(xe,{"data-narrow":r,children:(0,T.jsx)(`span`,{className:`app-title`,children:e(`editor_title`)})}),(0,T.jsx)(`p`,{style:{padding:24},children:f||e(`loading`)})]});let P=ge(m,o),Oe=ye(P,{label:t=>e(t),page:t=>e(`page_n`,{n:t+1}),section:(t,n)=>o.pages[t]?.sections[n]?.name||e(`section_n`,{n:n+1}),button:t=>o.buttons[t]?.name||e(`button_n`,{n:t+1})}),Ae=P.kind===`page`||P.kind===`section`?P.page:void 0,je=P.kind!==`users`;return(0,T.jsx)(Xe,{children:(0,T.jsxs)(be,{children:[(0,T.jsxs)(xe,{"data-narrow":r,children:[(0,T.jsx)(k,{type:`button`,className:`only-narrow`,"aria-label":e(`menu`),onClick:e=>l(e.currentTarget),children:(0,T.jsx)(t,{icon:`mdi:menu`})}),(0,T.jsx)(k,{type:`button`,className:`only-drawer`,"aria-label":e(`editor_menu`),onClick:()=>h(!0),children:(0,T.jsx)(t,{icon:`mdi:format-list-bulleted`})}),(0,T.jsxs)(`div`,{className:`titles`,children:[(0,T.jsx)(`span`,{className:`app-title`,children:e(`editor_title`)}),(0,T.jsxs)(`nav`,{"aria-label":e(`editor_menu`),children:[(0,T.jsx)(`button`,{type:`button`,onClick:()=>S({kind:`general`}),children:o.name}),Oe.map((e,t)=>(0,T.jsxs)(`span`,{children:[`› `,e.view?(0,T.jsx)(`button`,{type:`button`,onClick:()=>S(e.view),children:e.label}):e.label]},t))]})]}),(0,T.jsx)(`span`,{className:`spacer`}),(0,T.jsx)(k,{type:`button`,className:`only-no-preview`,"aria-pressed":_,"aria-label":e(`preview`),"data-tip":e(`preview`),onClick:()=>ce(e=>!e),children:(0,T.jsx)(t,{icon:_?`mdi:form-select`:`mdi:tablet-dashboard`})}),(0,T.jsxs)(Se,{children:[(0,T.jsx)(k,{type:`button`,"aria-label":e(`more`),"aria-expanded":ie,onClick:()=>g(e=>!e),children:(0,T.jsx)(t,{icon:`mdi:dots-vertical`})}),ie&&(0,T.jsxs)(`div`,{className:`menu`,role:`menu`,children:[(0,T.jsxs)(`button`,{type:`button`,role:`menuitem`,onClick:()=>void A(),children:[(0,T.jsx)(t,{icon:`mdi:plus`}),` `,e(`new_dashboard`)]}),(0,T.jsxs)(`button`,{type:`button`,role:`menuitem`,onClick:()=>void A(o),children:[(0,T.jsx)(t,{icon:`mdi:content-copy`}),` `,e(`duplicate`)]}),(0,T.jsxs)(`button`,{type:`button`,role:`menuitem`,onClick:()=>void we(),children:[(0,T.jsx)(t,{icon:`mdi:tablet-cellphone`}),` `,e(`reload_tablets`)]}),(0,T.jsxs)(`button`,{type:`button`,role:`menuitem`,onClick:()=>S({kind:`json`}),children:[(0,T.jsx)(t,{icon:`mdi:code-json`}),` `,e(`edit_json`)]}),(0,T.jsxs)(`button`,{type:`button`,role:`menuitem`,className:`danger`,disabled:o.id==="default",onClick:()=>void j(),children:[(0,T.jsx)(t,{icon:`mdi:delete-outline`}),` `,e(`delete_dashboard`)]}),(0,T.jsx)(`hr`,{}),(0,T.jsxs)(`button`,{type:`button`,role:`menuitem`,onClick:()=>{g(!1),se(!0)},children:[(0,T.jsx)(t,{icon:`mdi:information-outline`}),` `,e(`about`)]})]})]})]}),(0,T.jsxs)(Ce,{children:[(0,T.jsx)(Te,{$open:re,onClick:()=>h(!1)}),(0,T.jsx)(ke,{dashboards:N,draft:o,view:P,expanded:te,open:re,onToggle:pe,onOpen:S,onSwitch:e=>void ve(e),onNewDashboard:()=>void A()}),(0,T.jsxs)(Ee,{$hidden:_,children:[(0,T.jsx)(`div`,{className:`screen-body`,children:(0,T.jsx)(ot.Provider,{value:M,children:(0,T.jsx)(Wt,{view:P,dashboards:N,draft:o,update:fe,open:S})})}),je&&(0,T.jsxs)(`div`,{className:`screen-foot`,children:[(0,T.jsx)(`span`,{className:`status`,children:u?e(`unsaved`):f}),(0,T.jsxs)(`span`,{className:`end`,children:[(0,T.jsx)(D,{appearance:`plain`,disabled:!u,onClick:()=>void O(),children:e(`discard`)}),(0,T.jsx)(D,{appearance:`accent`,icon:`mdi:content-save-outline`,disabled:!u,onClick:he,children:e(`save`)})]})]})]}),(0,T.jsxs)(De,{$shown:_,children:[(0,T.jsxs)(`div`,{className:`preview-bar`,children:[(0,T.jsx)(`h2`,{children:e(`preview`)}),(0,T.jsx)(q,{label:e(`device`),value:v,options:Ut.map(e=>({value:e.id,label:e.label})),onChange:le}),(0,T.jsx)(k,{type:`button`,style:{color:`var(--secondary-text-color)`},"aria-label":e(y?`landscape`:`portrait`),"data-tip":e(y?`landscape`:`portrait`),onClick:()=>b(e=>!e),children:(0,T.jsx)(t,{icon:y?`mdi:phone-rotate-landscape`:`mdi:phone-rotate-portrait`})})]}),(0,T.jsx)(`div`,{className:`stage`,children:(0,T.jsx)(Me,{dashboard:o,device:de,portrait:y,page:Ae})})]})]}),(0,T.jsx)(rt,{open:ae,onClose:()=>se(!1)}),me]})})};export{Gt as default};