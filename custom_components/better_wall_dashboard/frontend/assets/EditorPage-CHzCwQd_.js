import{A as e,B as t,C as n,D as r,E as i,F as a,G as o,H as s,I as c,K as l,L as u,M as d,N as f,O as p,P as m,R as ee,S as te,T as ne,U as h,V as g,W as _,_ as re,a as v,b as ie,c as ae,d as y,f as b,g as oe,h as se,i as x,j as ce,k as le,l as S,m as ue,n as C,o as de,p as fe,r as pe,s as w,t as T,u as me,v as he,w as ge,x as E,y as _e,z as D}from"./boot-BkUdZQ1s.js";var O=l(o(),1),k=l(_(),1),ve=s.button`
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
  ${({$appearance:e,$danger:t})=>{let n=t?`var(--error-color, #db4437)`:`var(--primary-color, #03a9f4)`;return e===`accent`?g`
        background: ${n};
        color: var(--text-primary-color, #fff);
      `:e===`filled`?g`
        background: color-mix(in srgb, ${n} 16%, transparent);
        color: ${n};
      `:g`
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
`,ye=()=>()=>{},A=({children:t,onClick:n,icon:r,appearance:i=`plain`,danger:a=!1,disabled:o,title:s})=>{let c=(0,O.useSyncExternalStore)(ye,()=>!!customElements.get(`ha-button`)),l=(0,k.jsxs)(k.Fragment,{children:[r&&(0,k.jsx)(`span`,{slot:`start`,style:{display:`inline-flex`},children:(0,k.jsx)(e,{icon:r,size:`18px`})}),t]});return c?(0,O.createElement)(`ha-button`,{appearance:i,variant:a?`danger`:`brand`,disabled:o||void 0,"data-tip":s,onClick:n},l):(0,k.jsx)(ve,{type:`button`,$appearance:i,$danger:a,disabled:o,"data-tip":s,onClick:n,children:l})},j=[{part:`clock`,icon:`mdi:clock-outline`,label:`clock`},{part:`status`,icon:`mdi:wifi-star`,label:`nav_status`},{part:`climate`,icon:`mdi:home-thermometer-outline`,label:`room_climate`},{part:`persons`,icon:`mdi:account-multiple-outline`,label:`persons`},{part:`openings`,icon:`mdi:window-open-variant`,label:`openings`},{part:`batteries`,icon:`mdi:battery-high`,label:`batteries`},{part:`travel`,icon:`mdi:car-clock`,label:`travel_time`},{part:`quick`,icon:`mdi:gesture-tap-button`,label:`quick_actions`},{part:`calendar`,icon:`mdi:calendar-month-outline`,label:`calendar`},{part:`weather`,icon:`mdi:weather-partly-cloudy`,label:`weather`},{part:`notifications`,icon:`mdi:bell-outline`,label:`notifications`},{part:`system`,icon:`mdi:chart-box-outline`,label:`system_stats`}];function be(e,t){switch(e.kind){case`page`:return e.page<t.pages.length?e:{kind:`pages`};case`section`:{let n=t.pages[e.page];return n?e.section<n.sections.length?e:{kind:`page`,page:e.page}:{kind:`pages`}}case`button`:return e.button<t.buttons.length?e:{kind:`buttons`};default:return e}}function xe(e){switch(e.kind){case`sidebar`:return[`sidebar`];case`page`:return[`pages`];case`section`:return[`pages`,`page-${e.page}`];case`button`:return[`buttons`];default:return[]}}function Se(e,t){return JSON.stringify(e)===JSON.stringify(t)}function Ce(e,t){switch(e.kind){case`general`:return[{label:t.label(`tab_general`)}];case`sidebar`:{let n=j.find(t=>t.part===e.part);return[{label:t.label(`tab_sidebar`)},{label:t.label(n?.label??e.part)}]}case`pages`:return[{label:t.label(`tab_pages`)}];case`page`:return[{label:t.label(`tab_pages`),view:{kind:`pages`}},{label:t.page(e.page)}];case`section`:return[{label:t.label(`tab_pages`),view:{kind:`pages`}},{label:t.page(e.page),view:{kind:`page`,page:e.page}},{label:t.section(e.page,e.section)}];case`buttons`:return[{label:t.label(`tab_buttons`)}];case`button`:return[{label:t.label(`tab_buttons`),view:{kind:`buttons`}},{label:t.button(e.button)}];case`users`:return[{label:t.label(`tab_users`)}];case`json`:return[{label:t.label(`tab_json`)}]}}var we=s.div`
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
`,Te=s.header`
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
`,M=s.button`
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
`,Ee=s.div`
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
`,De=s.div`
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
`,N=s.div`
  background: var(--card-background-color, #1c1c1c);
  border-radius: var(--ha-card-border-radius, 12px);
  box-shadow: var(--ha-card-box-shadow, none);
  border: 1px solid var(--ha-card-border-color, var(--divider-color, rgba(225, 225, 225, 0.12)));
  box-sizing: border-box;
  min-width: 0;
  min-height: 0;
`,Oe=s(N)`
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
`,ke=s.div`
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
`,Ae=s(N)`
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
`,P=s.section`
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
`,je=s.ul`
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
`,Me=s.details`
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
`,Ne=s.div`
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
`,Pe=s(N)`
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
`,Fe=s.dialog`
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
`,Ie=({dashboards:n,draft:r,view:i,expanded:a,open:o,onToggle:s,onOpen:c,onSwitch:l,onNewDashboard:u})=>{let d=t(),f=(t,n,r)=>(0,k.jsx)(`li`,{children:(0,k.jsxs)(`button`,{type:`button`,"aria-current":Se(i,t)?`page`:void 0,onClick:()=>c(t),children:[(0,k.jsx)(e,{className:`icon`,icon:r}),(0,k.jsx)(`span`,{className:`grow`,children:n})]})},JSON.stringify(t)),p=(t,n,r,o,l)=>{let u=a.has(t);return(0,k.jsxs)(`li`,{children:[(0,k.jsxs)(`button`,{type:`button`,"aria-expanded":u,"aria-current":Se(i,n)?`page`:void 0,onClick:()=>c(n,t),children:[(0,k.jsx)(e,{className:`icon`,icon:o}),(0,k.jsx)(`span`,{className:`grow`,children:r}),(0,k.jsx)(`span`,{className:`twist`,"data-open":u,role:`button`,"aria-label":r,onClick:e=>{e.stopPropagation(),s(t)},children:(0,k.jsx)(e,{icon:`mdi:chevron-right`})})]}),u&&(0,k.jsx)(`ul`,{className:`sub`,children:l})]},t)},m=(0,k.jsxs)(k.Fragment,{children:[f({kind:`general`},d(`tab_general`),`mdi:cog-outline`),p(`sidebar`,{kind:`sidebar`,part:j[0].part},d(`tab_sidebar`),`mdi:dock-left`,j.map(e=>f({kind:`sidebar`,part:e.part},d(e.label),e.icon))),p(`pages`,{kind:`pages`},d(`tab_pages`),`mdi:book-open-page-variant-outline`,r.pages.map((e,t)=>e.sections.length?p(`page-${t}`,{kind:`page`,page:t},d(`page_n`,{n:t+1}),`mdi:file-outline`,e.sections.map((e,n)=>f({kind:`section`,page:t,section:n},e.name||d(`section_n`,{n:n+1}),e.icon||`mdi:view-grid-outline`))):f({kind:`page`,page:t},d(`page_n`,{n:t+1}),`mdi:file-outline`))),p(`buttons`,{kind:`buttons`},d(`tab_buttons`),`mdi:gesture-tap-button`,r.buttons.map((e,t)=>f({kind:`button`,button:t},e.name||d(`button_n`,{n:t+1}),e.icon||`mdi:gesture-tap`)))]});return(0,k.jsxs)(Oe,{$open:o,as:`nav`,"aria-label":d(`editor_title`),children:[(0,k.jsx)(`div`,{className:`heading`,children:d(`nav_dashboards`)}),(0,k.jsxs)(`ul`,{children:[n.map(t=>t.id===r.id?(0,k.jsxs)(`li`,{children:[(0,k.jsxs)(`button`,{type:`button`,"aria-expanded":!0,onClick:()=>c({kind:`general`}),children:[(0,k.jsx)(e,{className:`icon`,icon:`mdi:tablet-dashboard`}),(0,k.jsx)(`span`,{className:`grow`,children:(0,k.jsx)(`strong`,{children:r.name})})]}),(0,k.jsx)(`ul`,{className:`sub`,children:m})]},t.id):(0,k.jsx)(`li`,{children:(0,k.jsxs)(`button`,{type:`button`,onClick:()=>l(t.id),children:[(0,k.jsx)(e,{className:`icon`,icon:`mdi:tablet-dashboard`}),(0,k.jsx)(`span`,{className:`grow`,children:t.name})]})},t.id)),(0,k.jsx)(`li`,{className:`add`,children:(0,k.jsxs)(`button`,{type:`button`,onClick:u,children:[(0,k.jsx)(e,{className:`icon`,icon:`mdi:plus`}),(0,k.jsx)(`span`,{className:`grow`,children:d(`new_dashboard`)})]})})]}),(0,k.jsx)(`div`,{className:`heading`,children:d(`nav_house`)}),(0,k.jsx)(`ul`,{children:f({kind:`users`},d(`tab_users`),`mdi:account-multiple-outline`)})]})},Le=s.div`
  position: relative;
  width: 100%;
  height: 100%;
  min-height: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
`,Re=s.div`
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
`,ze=(0,O.memo)(({dashboard:e,device:n,portrait:r,page:i})=>{let a=t(),o=(0,O.useRef)(null),s=(0,O.useRef)(null),[c,l]=(0,O.useState)(null),u=r?n.height:n.width,d=r?n.width:n.height,f=c?Math.min((c.width-40)/u,(c.height-40)/d):.5,p=Math.max(.1,Math.min(1,Math.floor(f*1e3)/1e3));(0,O.useLayoutEffect)(()=>{let e=o.current;if(!e)return;let t=()=>l({width:e.clientWidth,height:e.clientHeight});t();let n=new ResizeObserver(t);return n.observe(e),()=>n.disconnect()},[]);let m=(0,O.useRef)(null);(0,O.useLayoutEffect)(()=>{let e=s.current,t=m.current;if(m.current={width:u,height:d,scale:p,portrait:r},!e||!t||!c)return;let n=`translate(-50%, -50%) scale(${p})`;if(t.portrait!==r){let i=Math.min(t.scale,p)*.92;e.animate([{transform:`translate(-50%, -50%) scale(${t.scale}) rotate(${r?90:-90}deg)`},{transform:`translate(-50%, -50%) scale(${i}) rotate(${r?45:-45}deg)`,offset:.5},{transform:n}],{duration:750,easing:`cubic-bezier(0.45, 0, 0.25, 1)`})}else(t.width!==u||t.height!==d)&&e.animate([{width:`${t.width}px`,height:`${t.height}px`,transform:`translate(-50%, -50%) scale(${t.scale})`},{width:`${u}px`,height:`${d}px`,transform:n}],{duration:450,easing:`cubic-bezier(0.3, 0, 0.2, 1)`})},[u,d,p,r,c]);let ee=(0,O.useMemo)(()=>({dashboard:e,dashboards:[],kiosk:!1,is_admin:!0,pin_required:!1}),[e]);return(0,k.jsx)(Le,{ref:o,"aria-label":a(`preview`),children:(0,k.jsx)(Re,{ref:s,style:{width:u,height:d,transform:`translate(-50%, -50%) scale(${p})`},children:(0,k.jsx)(ce,{view:ee,focusPage:i,children:(0,k.jsx)(le.Provider,{value:!0,children:(0,k.jsx)(pe,{})})})})})}),F=s.label`
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
`,Be=s.label`
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
`,I=s.div`
  display: grid;
  grid-template-columns: ${({$columns:e})=>e??`repeat(auto-fit, minmax(220px, 1fr))`};
  gap: 16px;
  align-items: start;
`,L=s.button`
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
`;function R(e,t,n){if(n<0||n>=e.length)return e;let r=[...e],[i]=r.splice(t,1);return r.splice(n,0,i),r}function z(){let e=new Uint8Array(6);return crypto.getRandomValues(e),Array.from(e,e=>e.toString(16).padStart(2,`0`)).join(``)}var B=e=>JSON.parse(JSON.stringify(e)),V=(e,t,n)=>e.map((e,r)=>r===t?n:e),H=({selector:e,value:t,onChange:n,label:r,helper:i,required:a=!1})=>{let o=(0,O.useRef)(null),s=(0,O.useRef)(null),c=(0,O.useRef)(n),l=(0,O.useRef)([]);(0,O.useEffect)(()=>{c.current=n}),(0,O.useEffect)(()=>{let e=document.createElement(`ha-selector`);e.hass=T();let t=t=>{t.stopPropagation();let n=t.detail.value;e.value=n,l.current.push(JSON.stringify(n??null)),c.current(n)};e.addEventListener(`value-changed`,t),o.current?.append(e),s.current=e;let n=C(t=>{e.hass=t});return()=>{n(),e.removeEventListener(`value-changed`,t),e.remove(),s.current=null}},[]);let u=JSON.stringify(e);return(0,O.useEffect)(()=>{let e=s.current;e&&(e.selector=JSON.parse(u),e.label=r,e.helper=i,e.required=a)},[u,r,i,a]),(0,O.useEffect)(()=>{let e=s.current;if(!e)return;let n=JSON.stringify(t??null),r=l.current.indexOf(n);if(r>=0){l.current.splice(0,r+1);return}l.current=[],e.value!==t&&(e.value=t)},[t]),(0,k.jsx)(`div`,{ref:o,className:`ha-field`})},Ve=[`ha-selector`,`ha-entity-picker`,`ha-switch`,`ha-icon-picker`],He=[{tag:`hui-entities-card`,config:{type:`entities`,entities:[]}},{tag:`hui-button-card`,config:{type:`button`}}],Ue=null,We=!1;function Ge(){return We&&Ve.every(e=>customElements.get(e))}var Ke=e=>new Promise(t=>window.setTimeout(()=>t(!1),e));async function qe(){let e=Object.assign(document.createElement(`ha-selector`),{selector:{text:{}},hidden:!0});document.body.append(e);try{return await Promise.race([customElements.whenDefined(`ha-selector-text`).then(()=>!0),Ke(5e3)])}finally{e.remove()}}function Je(){return Ge()?Promise.resolve(!0):(Ue??=(async()=>{let e=window.loadCardHelpers,t=null;for(let n of He)try{let r=customElements.get(n.tag);!r?.getConfigElement&&e&&(t??=await e(),r=(await t.createCardElement(n.config)).constructor),await r?.getConfigElement?.()}catch{}return We=!!customElements.get(`ha-selector`)&&await qe(),Ge()})(),Ue)}function U(){let[e,t]=(0,O.useState)(Ge),n=(0,O.useSyncExternalStore)(C,()=>T()!==null);return(0,O.useEffect)(()=>{if(e||!n)return;let r=!0;return Je().then(e=>r&&e&&t(!0)),()=>{r=!1}},[e,n]),e&&n}var W=({label:e,hint:t,value:n,onChange:r,placeholder:i,type:a=`text`})=>U()?(0,k.jsx)(H,{selector:{text:a===`text`?{}:{type:a}},value:n,label:e,helper:t,onChange:e=>r(typeof e==`string`?e:``)}):(0,k.jsxs)(F,{children:[(0,k.jsx)(`span`,{className:`label`,children:e}),(0,k.jsx)(`input`,{type:a,value:n,placeholder:i,onChange:e=>r(e.target.value)}),t&&(0,k.jsx)(`small`,{children:t})]}),Ye=({label:e,hint:t,value:n,onChange:r,suggestions:i=[]})=>{let a=U(),o=e=>[...new Set(e.filter(e=>typeof e==`string`).map(e=>e.trim()).filter(Boolean))];if(a){let a=[...new Set([...n,...i])];return(0,k.jsxs)(F,{as:`div`,children:[(0,k.jsx)(`span`,{className:`label`,children:e}),t&&(0,k.jsx)(`small`,{children:t}),(0,k.jsx)(H,{selector:{select:{multiple:!0,custom_value:!0,mode:`dropdown`,sort:!1,options:a}},value:n,label:e,onChange:e=>r(Array.isArray(e)?o(e):[])})]})}return(0,k.jsxs)(F,{children:[(0,k.jsx)(`span`,{className:`label`,children:e}),(0,k.jsx)(`input`,{type:`text`,value:n.join(`, `),onChange:e=>r(o(e.target.value.split(`,`)))}),t&&(0,k.jsx)(`small`,{children:t})]})},G=({label:e,hint:t,value:n,onChange:r,min:i,max:a,step:o=1,unit:s})=>{let c=U(),l=e=>{let t=Number(e);e!==``&&e!==null&&Number.isFinite(t)&&r(t)};return c?(0,k.jsx)(H,{selector:{number:{min:i,max:a,step:o,mode:`box`,unit_of_measurement:s}},value:n,label:e,helper:t,onChange:l}):(0,k.jsxs)(F,{children:[(0,k.jsx)(`span`,{className:`label`,children:e}),(0,k.jsx)(`input`,{type:`number`,value:n,min:i,max:a,step:o,onChange:e=>l(e.target.value)}),t&&(0,k.jsx)(`small`,{children:t})]})},Xe=({label:e,hint:t,value:n,onChange:r,min:i,max:a,step:o,unit:s,scale:c=1})=>{let l=U(),u=Math.round(n*c*1e3)/1e3,d=e=>{let t=Number(e);Number.isFinite(t)&&r(t/c)};return l?(0,k.jsx)(H,{selector:{number:{min:i,max:a,step:o,mode:`slider`,unit_of_measurement:s}},value:u,label:e,helper:t,onChange:d}):(0,k.jsxs)(F,{children:[(0,k.jsxs)(`span`,{className:`label`,children:[e,`: `,u,s?` ${s}`:``]}),(0,k.jsx)(`input`,{type:`range`,value:u,min:i,max:a,step:o,onChange:e=>d(e.target.value)}),t&&(0,k.jsx)(`small`,{children:t})]})},K=({label:e,hint:t,value:n,onChange:r})=>U()?(0,k.jsx)(H,{selector:{boolean:{}},value:n,label:e,helper:t,onChange:e=>r(!!e)}):(0,k.jsxs)(Be,{children:[(0,k.jsx)(`input`,{type:`checkbox`,checked:n,onChange:e=>r(e.target.checked)}),(0,k.jsxs)(`span`,{children:[e,t&&(0,k.jsx)(`small`,{children:t})]})]}),Ze=e=>Array.isArray(e)&&e.length===3&&e.every(e=>typeof e==`number`)?`#${e.map(e=>Math.round(Math.min(255,Math.max(0,e))).toString(16).padStart(2,`0`)).join(``)}`:null,Qe=e=>[1,3,5].map(t=>parseInt(e.slice(t,t+2),16)||0),$e=({label:e,hint:t,value:n,onChange:r})=>U()?(0,k.jsx)(H,{selector:{color_rgb:{}},value:Qe(n),label:e,helper:t,onChange:e=>{let t=Ze(e);t&&r(t)}}):(0,k.jsxs)(F,{children:[(0,k.jsx)(`span`,{className:`label`,children:e}),(0,k.jsx)(`input`,{type:`color`,value:n,onChange:e=>r(e.target.value)}),t&&(0,k.jsx)(`small`,{children:t})]}),et=({label:e,hint:t,value:n,onChange:r})=>U()?(0,k.jsx)(H,{selector:{time:{}},value:n||void 0,label:e,helper:t,onChange:e=>r(typeof e==`string`?e.slice(0,5):``)}):(0,k.jsxs)(F,{children:[(0,k.jsx)(`span`,{className:`label`,children:e}),(0,k.jsx)(`input`,{type:`time`,value:n,onChange:e=>r(e.target.value)}),t&&(0,k.jsx)(`small`,{children:t})]}),q=({label:e,hint:t,value:n,onChange:r,options:i})=>U()?(0,k.jsx)(H,{selector:{select:{options:i,mode:`dropdown`}},value:n,label:e,helper:t,required:!0,onChange:e=>typeof e==`string`&&r(e)}):(0,k.jsxs)(F,{children:[(0,k.jsx)(`span`,{className:`label`,children:e}),(0,k.jsx)(`select`,{value:n,onChange:e=>r(e.target.value),children:i.map(e=>(0,k.jsx)(`option`,{value:e.value,children:e.label},e.value))}),t&&(0,k.jsx)(`small`,{children:t})]}),J=({label:t,hint:n,value:r,onChange:i})=>U()?(0,k.jsx)(H,{selector:{icon:{}},value:r,label:t,helper:n,onChange:e=>i(typeof e==`string`?e:``)}):(0,k.jsxs)(F,{children:[(0,k.jsx)(`span`,{className:`label`,children:t}),(0,k.jsxs)(`span`,{className:`with-icon`,children:[(0,k.jsx)(`input`,{type:`text`,value:r,placeholder:`mdi:…`,onChange:e=>i(e.target.value)}),r&&(0,k.jsx)(e,{icon:r,size:`24px`})]}),n&&(0,k.jsx)(`small`,{children:n})]}),tt=({label:e,hint:t,value:n,onChange:r,accept:i})=>{let a=U(),o=(0,O.useMemo)(()=>n.startsWith(`media-source://`)?{media_content_id:n,media_content_type:i[0]}:void 0,[n,i]);return a?(0,k.jsx)(H,{selector:{media:{accept:i}},value:o,label:e,helper:t,onChange:e=>r(e?.media_content_id??``)}):(0,k.jsx)(W,{label:e,hint:t,value:n,onChange:r})},nt=(0,O.createContext)([]),rt=({children:e})=>{let t=h(b(e=>{let t={};for(let[n,r]of Object.entries(e.entities))t[n]=r.attributes.friendly_name||n;return t})),n=(0,O.useMemo)(()=>Object.entries(t).map(([e,t])=>({id:e,name:t})).sort((e,t)=>e.id.localeCompare(t.id)),[t]);return(0,k.jsx)(nt.Provider,{value:n,children:e})},it=(e,t={},n,r)=>({entity:{...r?{include_entities:r}:{},...e?.length||n?{filter:{...e?.length?{domain:e}:{},...n?{integration:n}:{}}}:{},...t}}),at=({value:e,domains:t,onChange:n})=>{let r=(0,O.useContext)(nt),i=(0,O.useId)(),a=(0,O.useMemo)(()=>t?.length?r.filter(e=>t.includes(e.id.split(`.`)[0])):r,[r,t]);return(0,k.jsxs)(k.Fragment,{children:[(0,k.jsx)(`input`,{type:`text`,list:i,value:e,placeholder:t?.length?`${t[0]}.…`:`domain.object_id`,onChange:e=>n(e.target.value.trim())}),(0,k.jsx)(`datalist`,{id:i,children:a.map(e=>(0,k.jsx)(`option`,{value:e.id,children:e.name},e.id))})]})},Y=({label:e,hint:n,value:r,onChange:i,domains:a,integration:o,include:s})=>{let c=U(),l=(0,O.useContext)(nt),u=t();if(c)return(0,k.jsx)(H,{selector:it(a,{},o,s),value:r||void 0,label:e,helper:n,onChange:e=>i(typeof e==`string`?e:``)});let d=l.find(e=>e.id===r);return(0,k.jsxs)(F,{children:[(0,k.jsx)(`span`,{className:`label`,children:e}),(0,k.jsx)(at,{value:r,domains:a,onChange:i}),r&&(0,k.jsx)(`small`,{children:d?d.name:u(`not_found`)}),n&&(0,k.jsx)(`small`,{children:n})]})},X=({label:n,hint:r,value:i,onChange:a,domains:o,max:s,include:c})=>{let l=U(),u=t(),d=e=>a(s===void 0?e:e.slice(0,s));return l?(0,k.jsx)(H,{selector:it(o,{multiple:!0,reorder:!0},void 0,c),value:i,label:n,helper:r,onChange:e=>d(Array.isArray(e)?e.filter(e=>typeof e==`string`):[])}):(0,k.jsxs)(F,{as:`div`,children:[(0,k.jsx)(`span`,{className:`label`,children:n}),i.map((e,t)=>(0,k.jsxs)(I,{$columns:`minmax(0, 1fr) auto`,children:[(0,k.jsx)(at,{value:e,domains:o,onChange:e=>d(i.map((n,r)=>r===t?e:n))}),(0,k.jsx)(Z,{index:t,length:i.length,onMove:e=>d(R(i,t,e)),onRemove:()=>d(i.filter((e,n)=>n!==t))})]},t)),(s===void 0||i.length<s)&&(0,k.jsx)(L,{type:`button`,className:`add`,onClick:()=>d([...i,``]),"data-tip":u(`add`),"aria-label":u(`add`),children:(0,k.jsx)(e,{icon:`mdi:plus`})}),r&&(0,k.jsx)(`small`,{children:r})]})},Z=({index:n,length:r,onMove:i,onRemove:a,onDuplicate:o})=>{let s=t();return(0,k.jsxs)(`span`,{className:`list-controls`,children:[(0,k.jsx)(L,{type:`button`,disabled:n===0,onClick:()=>i(n-1),"data-tip":s(`move_up`),"aria-label":s(`move_up`),children:(0,k.jsx)(e,{icon:`mdi:arrow-up`})}),(0,k.jsx)(L,{type:`button`,disabled:n===r-1,onClick:()=>i(n+1),"data-tip":s(`move_down`),"aria-label":s(`move_down`),children:(0,k.jsx)(e,{icon:`mdi:arrow-down`})}),o&&(0,k.jsx)(L,{type:`button`,onClick:o,"data-tip":s(`duplicate`),"aria-label":s(`duplicate`),children:(0,k.jsx)(e,{icon:`mdi:content-copy`})}),(0,k.jsx)(L,{type:`button`,$danger:!0,onClick:a,"data-tip":s(`remove`),"aria-label":s(`remove`),children:(0,k.jsx)(e,{icon:`mdi:delete-outline`})})]})},Q=({title:e,lead:t})=>(0,k.jsxs)(k.Fragment,{children:[(0,k.jsx)(`h2`,{children:e}),t&&(0,k.jsx)(`p`,{className:`lead`,children:t})]}),ot=s.span`
  margin-left: 8px;
  padding: 1px 8px;
  border-radius: 999px;
  font-size: 12px;
  font-weight: 400;
  background: var(--secondary-background-color, #282828);
  color: var(--secondary-text-color, #9b9b9b);
`,st=({dashboards:n})=>{let r=t(),i=ee(),[a,o]=(0,O.useState)(null);(0,O.useEffect)(()=>{i?.sendMessagePromise({type:`better_wall_dashboard/users`}).then(e=>o(e.users)).catch(()=>o([]))},[i]);let s=(0,O.useCallback)(async(e,t)=>{if(!i)return;o(n=>n?.map(n=>n.id===e.id?{...n,...t}:n)??null);let n=await i.sendMessagePromise({type:`better_wall_dashboard/save_user`,user_id:e.id,...t});o(t=>t?.map(t=>t.id===e.id?{...t,...n}:t)??null)},[i]);return(0,k.jsxs)(k.Fragment,{children:[(0,k.jsx)(Q,{title:r(`tab_users`),lead:r(`lead_users`)}),a?.map(t=>(0,k.jsxs)(Me,{open:!t.is_admin||void 0,children:[(0,k.jsxs)(`summary`,{children:[(0,k.jsx)(e,{className:`icon`,icon:t.is_admin?`mdi:shield-account-outline`:`mdi:tablet`}),(0,k.jsxs)(`span`,{className:`text`,children:[(0,k.jsxs)(`span`,{children:[t.name,t.is_admin&&(0,k.jsx)(ot,{children:r(`admin`)}),!t.is_active&&(0,k.jsx)(ot,{children:r(`inactive`)})]}),(0,k.jsx)(`span`,{className:`secondary`,children:n.find(e=>e.id===t.dashboard)?.name??t.dashboard})]})]}),(0,k.jsxs)(`div`,{className:`fold-body`,children:[(0,k.jsx)(q,{label:r(`assigned_dashboard`),value:t.dashboard,options:n.map(e=>({value:e.id,label:e.name})),onChange:e=>s(t,{dashboard:e})}),(0,k.jsxs)(I,{children:[(0,k.jsx)(K,{label:r(`kiosk`),hint:r(`kiosk_user_hint`),value:t.kiosk,onChange:e=>s(t,{kiosk:e})}),(0,k.jsx)(K,{label:r(`start_page`),hint:r(`start_page_hint`),value:!!t.default_panel,onChange:e=>s(t,{default_panel:e})})]}),(0,k.jsx)(K,{label:r(`sidebar_only`),hint:r(`sidebar_only_hint`),value:t.sidebar_only,onChange:e=>s(t,{sidebar_only:e})})]})]},t.id))]})},ct=`/better_wall_dashboard/static/icon.png`,lt=s(Fe)`
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
`,ut=({open:n,onClose:r})=>{let i=t(),a=ee(),o=(0,O.useRef)(null),[s,c]=(0,O.useState)(null),l=d();(0,O.useEffect)(()=>{let e=o.current;e&&(n&&!e.open&&e.showModal(),!n&&e.open&&e.close())}),(0,O.useEffect)(()=>{n&&a?.sendMessagePromise({type:`better_wall_dashboard/version`}).then(c).catch(()=>void 0)},[n,a]);let u=!!(l&&s&&s.app!==l);return(0,k.jsxs)(lt,{ref:o,tabIndex:-1,onClose:()=>n&&r(),onClick:e=>e.target===e.currentTarget&&r(),children:[(0,k.jsxs)(`div`,{className:`head`,children:[(0,k.jsx)(`img`,{src:ct,alt:``}),(0,k.jsx)(`h2`,{children:`Better Wall Dashboard`})]}),(0,k.jsx)(`p`,{className:`muted`,children:i(`about_blurb`)}),(0,k.jsx)(`table`,{children:(0,k.jsxs)(`tbody`,{children:[(0,k.jsxs)(`tr`,{children:[(0,k.jsx)(`th`,{children:i(`about_version`)}),(0,k.jsx)(`td`,{children:s?.version??`–`})]}),(0,k.jsxs)(`tr`,{children:[(0,k.jsx)(`th`,{children:i(`about_page`)}),(0,k.jsx)(`td`,{children:l?l.slice(0,12):`–`})]})]})}),u&&(0,k.jsxs)(k.Fragment,{children:[(0,k.jsx)(`p`,{children:i(`update_available`)}),(0,k.jsx)(A,{appearance:`filled`,icon:`mdi:reload`,onClick:()=>{let e=m(),t=null;if(e&&s){let n=new URL(e);n.searchParams.set(`v`,s.app),t=n.toString()}f(t)},children:i(`reload`)})]}),(s?.documentation||s?.issues)&&(0,k.jsxs)(`p`,{children:[s.documentation&&(0,k.jsx)(`a`,{href:s.documentation,target:`_blank`,rel:`noopener noreferrer`,children:i(`about_repo`)}),s.documentation&&s.issues&&` · `,s.issues&&(0,k.jsx)(`a`,{href:s.issues,target:`_blank`,rel:`noopener noreferrer`,children:i(`about_issues`)})]}),(0,k.jsx)(L,{type:`button`,className:`shut`,"aria-label":i(`close`),"data-tip":i(`close`),onClick:r,children:(0,k.jsx)(e,{icon:`mdi:close`})})]})},dt=({request:e,onAnswer:n})=>{let r=t(),i=(0,O.useRef)(null);return(0,O.useEffect)(()=>{let t=i.current;t&&(e&&!t.open&&t.showModal(),!e&&t.open&&t.close())}),(0,k.jsx)(Fe,{ref:i,role:`alertdialog`,tabIndex:-1,onCancel:e=>{e.preventDefault(),n(!1)},onClick:e=>e.target===e.currentTarget&&n(!1),children:e&&(0,k.jsxs)(k.Fragment,{children:[(0,k.jsx)(`h2`,{children:e.title}),e.text&&(0,k.jsx)(`p`,{className:`muted`,children:e.text}),(0,k.jsxs)(`div`,{className:`actions`,children:[(0,k.jsx)(A,{appearance:`plain`,onClick:()=>n(!1),children:r(`cancel`)}),(0,k.jsx)(A,{appearance:`accent`,danger:e.danger,onClick:()=>n(!0),children:e.confirm})]})]})})};function ft(){let[e,t]=(0,O.useState)(null);return{confirm:(0,O.useCallback)(e=>new Promise(n=>t({...e,resolve:n})),[]),dialog:(0,k.jsx)(dt,{request:e,onAnswer:n=>{e?.resolve(n),t(null)}})}}var pt=(0,O.createContext)([]);function mt(){return(0,O.useContext)(pt)}function ht(e){let t=document.querySelector(`home-assistant`);return t?(t.dispatchEvent(new CustomEvent(`hass-notification`,{bubbles:!0,composed:!0,detail:{message:e,dismissable:!0}})),!0):!1}var gt=({draft:e,update:n})=>{let r=t(),i=t=>n({...e,background:{...e.background,...t}});return(0,k.jsxs)(k.Fragment,{children:[(0,k.jsx)(Q,{title:r(`tab_general`),lead:r(`lead_general`)}),(0,k.jsxs)(P,{children:[(0,k.jsx)(W,{label:r(`name`),value:e.name,onChange:t=>n({...e,name:t})}),(0,k.jsx)(q,{label:r(`popup_close`),hint:r(`popup_close_hint`),value:String(e.popup_close_minutes??2),options:[0,1,2,5,10,30].map(e=>({value:String(e),label:e?r(`popup_close_after`,{minutes:e}):r(`popup_close_never`)})),onChange:t=>n({...e,popup_close_minutes:Number(t)})}),(0,k.jsx)(K,{label:r(`hide_toasts`),hint:r(`hide_toasts_hint`),value:e.hide_toasts??!1,onChange:t=>n({...e,hide_toasts:t})})]}),(0,k.jsxs)(P,{children:[(0,k.jsx)(`h3`,{children:r(`background`)}),(0,k.jsx)(q,{label:r(`background_mode`),value:e.background.mode??`image`,options:[{value:`image`,label:r(`background_mode_image`)},{value:`color`,label:r(`background_mode_color`)}],onChange:e=>i({mode:e===`color`?`color`:`image`})}),e.background.mode===`color`?(0,k.jsx)($e,{label:r(`background_color`),value:e.background.color??`#131313`,onChange:e=>i({color:e})}):(0,k.jsxs)(k.Fragment,{children:[(0,k.jsx)(tt,{label:r(`background_media`),hint:r(`background_media_hint`),accept:[`image/*`],value:e.background.image,onChange:e=>i({image:e})}),(0,k.jsx)(W,{label:r(`background_image`),hint:r(`background_image_hint`),type:`url`,value:e.background.image.startsWith(`media-source://`)?``:e.background.image,onChange:e=>i({image:e})}),(0,k.jsxs)(I,{children:[(0,k.jsx)(Xe,{label:r(`background_dim`),value:e.background.dim,min:0,max:95,step:5,unit:`%`,scale:100,onChange:e=>i({dim:e})}),(0,k.jsx)(Xe,{label:r(`background_blur`),value:e.background.blur,min:0,max:40,step:1,unit:`px`,onChange:e=>i({blur:e})})]})]})]}),(0,k.jsxs)(P,{children:[(0,k.jsx)(`h3`,{children:r(`security_heading`)}),(0,k.jsx)(W,{label:r(`pin`),hint:r(`pin_hint`),type:`password`,value:e.pin??``,onChange:t=>n({...e,pin:t.replace(/\D/g,``).slice(0,8)})})]})]})},_t=6,vt=[{type:`state`,label:`rule_state`},{type:`numeric`,label:`rule_numeric`},{type:`time`,label:`rule_time`},{type:`sun`,label:`rule_sun`},{type:`home`,label:`rule_home`}],yt=e=>{switch(e){case`state`:return{type:e,entity:``,state:``,not:!1};case`numeric`:return{type:e,entity:``,above:null,below:null};case`time`:return{type:e,after:``,before:``};case`sun`:return{type:e,when:`night`};case`home`:return{type:e,who:`anyone`}}},bt=s.div`
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
`,xt=e=>{let t=Number(e.replace(`,`,`.`));return e.trim()===``||!Number.isFinite(t)?null:t},St=({rule:e,onChange:n})=>{let r=t();switch(e.type){case`state`:return(0,k.jsxs)(k.Fragment,{children:[(0,k.jsx)(Y,{label:r(`entity`),value:e.entity,onChange:t=>n({...e,entity:t})}),(0,k.jsx)(W,{label:r(`rule_state_value`),hint:r(`rule_state_value_hint`),value:e.state,onChange:t=>n({...e,state:t})}),(0,k.jsx)(K,{label:r(`rule_not`),value:e.not,onChange:t=>n({...e,not:t})})]});case`numeric`:return(0,k.jsxs)(k.Fragment,{children:[(0,k.jsx)(Y,{label:r(`entity`),value:e.entity,onChange:t=>n({...e,entity:t})}),(0,k.jsxs)(I,{children:[(0,k.jsx)(W,{label:r(`rule_above`),value:e.above===null?``:String(e.above),onChange:t=>n({...e,above:xt(t)})}),(0,k.jsx)(W,{label:r(`rule_below`),value:e.below===null?``:String(e.below),onChange:t=>n({...e,below:xt(t)})})]})]});case`time`:return(0,k.jsxs)(I,{children:[(0,k.jsx)(et,{label:r(`rule_after`),value:e.after,onChange:t=>n({...e,after:t})}),(0,k.jsx)(et,{label:r(`rule_before`),hint:r(`rule_before_hint`),value:e.before,onChange:t=>n({...e,before:t})})]});case`sun`:return(0,k.jsx)(q,{label:r(`rule_sun`),value:e.when,options:[{value:`day`,label:r(`rule_day`)},{value:`night`,label:r(`rule_night`)}],onChange:t=>n({...e,when:t===`day`?`day`:`night`})});case`home`:return(0,k.jsx)(q,{label:r(`rule_home`),value:e.who,options:[{value:`anyone`,label:r(`rule_anyone`)},{value:`nobody`,label:r(`rule_nobody`)}],onChange:t=>n({...e,who:t===`nobody`?`nobody`:`anyone`})})}},Ct=({rules:e,onChange:n})=>{let r=t();return(0,k.jsxs)(F,{as:`div`,children:[(0,k.jsx)(`span`,{className:`label`,children:r(`rules`)}),(0,k.jsx)(`small`,{children:r(`rules_hint`)}),e.map((t,i)=>(0,k.jsxs)(bt,{children:[(0,k.jsxs)(`div`,{className:`head`,children:[(0,k.jsx)(q,{label:r(`rule_type`),value:t.type,options:vt.map(e=>({value:e.type,label:r(e.label)})),onChange:t=>n(V(e,i,yt(t)))}),(0,k.jsx)(Z,{index:i,length:e.length,onMove:t=>n(R(e,i,t)),onRemove:()=>n(e.filter((e,t)=>t!==i))})]}),(0,k.jsx)(St,{rule:t,onChange:t=>n(V(e,i,t))})]},i)),(0,k.jsx)(`div`,{children:(0,k.jsx)(A,{icon:`mdi:plus`,disabled:e.length>=_t,onClick:()=>n([...e,yt(`state`)]),children:r(`add_rule`)})})]})},wt=({item:n})=>{let r=D(n.entity||void 0),i=t(),a=n.name||r?.attributes.friendly_name||n.entity||i(`not_set`);return(0,k.jsxs)(k.Fragment,{children:[(0,k.jsx)(e,{className:`icon`,icon:n.icon||r?.attributes.icon||u(n.entity)}),(0,k.jsxs)(`span`,{className:`text`,children:[(0,k.jsx)(`span`,{children:a}),n.entity&&(0,k.jsxs)(`span`,{className:`secondary`,children:[n.entity,n.rules?.length?` · ${n.rules.length===1?i(`rules_one`):i(`rules_count`,{count:n.rules.length})}`:``]})]})]})};function $({items:n,max:r,domains:i,addLabel:a,withRules:o=!1,create:s,named:c=!0,extra:l,onChange:u}){let d=t(),f=(e,t)=>u(V(n,e,{...n[e],...t})),p=()=>s?.()??{id:z(),entity:``,name:``,icon:``,...o?{rules:[]}:{}};return(0,k.jsxs)(k.Fragment,{children:[n.length===0&&(0,k.jsxs)(Ne,{children:[(0,k.jsx)(e,{icon:`mdi:playlist-plus`}),(0,k.jsx)(`span`,{children:d(`empty_list`)})]}),n.map((e,t)=>(0,k.jsxs)(Me,{open:!e.entity||void 0,children:[(0,k.jsxs)(`summary`,{children:[(0,k.jsx)(wt,{item:e}),(0,k.jsx)(`span`,{onClick:e=>e.preventDefault(),children:(0,k.jsx)(Z,{index:t,length:n.length,onMove:e=>u(R(n,t,e)),onRemove:()=>u(n.filter((e,n)=>n!==t))})})]}),(0,k.jsxs)(`div`,{className:`fold-body`,children:[(0,k.jsx)(Y,{label:d(`entity`),value:e.entity,domains:i,onChange:e=>f(t,{entity:e})}),c?(0,k.jsxs)(I,{children:[(0,k.jsx)(W,{label:d(`name`),hint:d(`name_hint`),value:e.name,onChange:e=>f(t,{name:e})}),(0,k.jsx)(J,{label:d(`icon`),value:e.icon,onChange:e=>f(t,{icon:e})})]}):(0,k.jsx)(J,{label:d(`icon`),hint:d(`status_icon_hint`),value:e.icon,onChange:e=>f(t,{icon:e})}),l?.(e,e=>f(t,e)),o&&(0,k.jsx)(Ct,{rules:e.rules??[],onChange:e=>f(t,{rules:e})})]})]},e.id)),(0,k.jsx)(`div`,{children:(0,k.jsxs)(A,{icon:`mdi:plus`,appearance:`filled`,disabled:n.length>=r,onClick:()=>u([...n,p()]),children:[a,` (`,n.length,`/`,r,`)`]})})]})}var Tt=({value:e,onChange:n})=>{let r=t(),i=h(b(e=>S(e.entities,[]))),a=t=>n({...e,...t});return(0,k.jsxs)(k.Fragment,{children:[(0,k.jsx)(K,{label:r(`batteries_enabled`),hint:r(`batteries_enabled_hint`),value:e.enabled,onChange:e=>a({enabled:e})}),(0,k.jsx)(K,{label:r(`batteries_hide_when_ok`),hint:r(`batteries_hide_when_ok_hint`),value:e.hide_when_ok,onChange:e=>a({hide_when_ok:e})}),(0,k.jsx)(K,{label:r(`batteries_only_critical`),hint:r(`batteries_only_critical_hint`),value:e.only_critical,onChange:e=>a({only_critical:e})}),(0,k.jsx)(G,{label:r(`batteries_threshold`),hint:r(`batteries_threshold_hint`),value:e.threshold,min:5,max:90,unit:`%`,onChange:e=>a({threshold:Math.max(5,Math.min(90,e))})}),(0,k.jsx)(X,{label:r(`batteries_hidden`),hint:r(`batteries_hidden_hint`),value:e.hidden,domains:[`sensor`,`binary_sensor`],include:i,onChange:e=>a({hidden:e})})]})},Et=[`input_boolean`,`switch`,`binary_sensor`],Dt=({draft:e,update:n,part:r})=>{let i=t(),a=mt(),o=e.sidebar,s=t=>n({...e,sidebar:t}),c=(e,t)=>s({...o,[e]:{...o[e],...t}}),l=j.find(e=>e.part===r)?.label??`tab_sidebar`,u=(0,k.jsx)(Q,{title:i(l),lead:i(`lead_${r}`)});switch(r){case`clock`:return(0,k.jsxs)(k.Fragment,{children:[u,(0,k.jsxs)(P,{children:[(0,k.jsx)(q,{label:i(`clock_style`),value:o.clock?.style??`digital`,options:[{value:`digital`,label:i(`clock_digital`)},{value:`analog`,label:i(`clock_analog`)}],onChange:e=>c(`clock`,{style:e})}),(0,k.jsx)(K,{label:i(`clock_seconds`),value:!!o.clock?.seconds,onChange:e=>c(`clock`,{seconds:e})})]})]});case`status`:return(0,k.jsxs)(k.Fragment,{children:[u,(0,k.jsxs)(P,{children:[(0,k.jsx)(`h3`,{children:i(`status_icons`)}),(0,k.jsx)(`p`,{children:i(`status_icons_hint`)}),(0,k.jsx)($,{items:o.status.icons??[],max:w.statusIcons,domains:Et,addLabel:i(`add_status_icon`),onChange:e=>c(`status`,{icons:e})})]}),(0,k.jsxs)(P,{children:[(0,k.jsx)(`h3`,{children:i(`wifi_heading`)}),(0,k.jsx)(Y,{label:i(`wifi_signal`),hint:i(`wifi_signal_hint`),value:o.status.wifi_signal,domains:[`sensor`],onChange:e=>c(`status`,{wifi_signal:e})})]}),(0,k.jsxs)(P,{children:[(0,k.jsx)(`h3`,{children:i(`guest_wifi`)}),(0,k.jsx)(Y,{label:i(`guest_qr_image`),hint:i(`guest_qr_image_hint`),value:o.guest_wifi.qr_image,domains:[`image`],onChange:e=>c(`guest_wifi`,{qr_image:e})}),(0,k.jsxs)(I,{children:[(0,k.jsx)(W,{label:i(`network`),value:o.guest_wifi.ssid,onChange:e=>c(`guest_wifi`,{ssid:e})}),(0,k.jsx)(W,{label:i(`password`),type:`password`,value:o.guest_wifi.password,onChange:e=>c(`guest_wifi`,{password:e})})]}),(0,k.jsxs)(I,{children:[(0,k.jsx)(q,{label:i(`security`),value:o.guest_wifi.security,options:[{value:`WPA`,label:`WPA/WPA2/WPA3`},{value:`WEP`,label:`WEP`},{value:`nopass`,label:i(`open_network`)}],onChange:e=>c(`guest_wifi`,{security:e})}),(0,k.jsx)(K,{label:i(`hidden_network`),value:o.guest_wifi.hidden,onChange:e=>c(`guest_wifi`,{hidden:e})})]})]})]});case`climate`:return(0,k.jsxs)(k.Fragment,{children:[u,(0,k.jsxs)(P,{children:[(0,k.jsx)(Y,{label:i(`temperature`),value:o.climate.temperature,domains:[`sensor`],onChange:e=>c(`climate`,{temperature:e})}),(0,k.jsx)(Y,{label:i(`humidity`),value:o.climate.humidity,domains:[`sensor`],onChange:e=>c(`climate`,{humidity:e})}),(0,k.jsx)(G,{label:i(`hours`),value:o.climate.hours,min:1,max:168,unit:`h`,onChange:e=>c(`climate`,{hours:e})})]})]});case`persons`:return(0,k.jsxs)(k.Fragment,{children:[u,(0,k.jsx)(X,{label:i(`persons`),value:o.persons,domains:[`person`],onChange:e=>s({...o,persons:e})})]});case`openings`:return(0,k.jsxs)(k.Fragment,{children:[u,(0,k.jsx)(X,{label:i(`openings`),hint:i(`openings_hint`),value:o.openings,domains:[`binary_sensor`,`cover`,`lock`,`sensor`],onChange:e=>s({...o,openings:e})}),(0,k.jsx)(K,{label:i(`openings_hide_when_closed`),hint:i(`openings_hide_when_closed_hint`),value:o.openings_view?.hide_when_closed??!1,onChange:e=>s({...o,openings_view:{only_open:!1,...o.openings_view,hide_when_closed:e}})}),(0,k.jsx)(K,{label:i(`openings_only_open`),hint:i(`openings_only_open_hint`),value:o.openings_view?.only_open??!1,onChange:e=>s({...o,openings_view:{hide_when_closed:!1,...o.openings_view,only_open:e}})})]});case`travel`:return(0,k.jsxs)(k.Fragment,{children:[u,(0,k.jsxs)(P,{children:[(0,k.jsx)(Y,{label:i(`travel_sensor`),value:o.travel.entity,domains:[`sensor`],onChange:e=>c(`travel`,{entity:e})}),(0,k.jsx)(W,{label:i(`name`),hint:i(`travel_name_hint`),value:o.travel.name,onChange:e=>c(`travel`,{name:e})})]}),(0,k.jsxs)(P,{children:[(0,k.jsx)(`h3`,{children:i(`map`)}),(0,k.jsx)(W,{label:i(`maps_api_key`),hint:i(`maps_api_key_hint`),type:`password`,value:o.travel.maps_api_key,onChange:e=>c(`travel`,{maps_api_key:e})}),(0,k.jsx)(W,{label:i(`map_url`),hint:i(`map_url_hint`),type:`url`,value:o.travel.map_url,onChange:e=>c(`travel`,{map_url:e})}),(0,k.jsx)(Y,{label:i(`travel_work_zone`),hint:i(`travel_work_zone_hint`),value:o.travel.work_zone??``,domains:[`zone`],onChange:e=>c(`travel`,{work_zone:e})}),(0,k.jsx)(W,{label:i(`travel_work_address`),hint:i(`travel_work_address_hint`),value:o.travel.work_address??``,onChange:e=>c(`travel`,{work_address:e})})]})]});case`quick`:return(0,k.jsxs)(k.Fragment,{children:[u,(0,k.jsx)($,{items:o.quick_actions,max:w.quickActions,addLabel:i(`add_quick_action`),withRules:!0,onChange:e=>s({...o,quick_actions:e})})]});case`calendar`:return(0,k.jsxs)(k.Fragment,{children:[u,(0,k.jsxs)(P,{children:[(0,k.jsx)(X,{label:i(`calendars`),value:o.calendar.entities,domains:[`calendar`],onChange:e=>c(`calendar`,{entities:e})}),(0,k.jsx)(G,{label:i(`days`),hint:i(`calendar_days_hint`),value:o.calendar.days,min:1,max:w.calendarDays,onChange:e=>c(`calendar`,{days:e})})]})]});case`weather`:return(0,k.jsxs)(k.Fragment,{children:[u,(0,k.jsxs)(P,{children:[(0,k.jsx)(Y,{label:i(`weather_entity`),value:o.weather.entity,domains:[`weather`],onChange:e=>c(`weather`,{entity:e})}),(0,k.jsx)(Y,{label:i(`outdoor_temperature`),hint:i(`outdoor_temperature_hint`),value:o.weather.temperature,domains:[`sensor`],onChange:e=>c(`weather`,{temperature:e})})]})]});case`notifications`:return(0,k.jsxs)(k.Fragment,{children:[u,(0,k.jsxs)(P,{children:[(0,k.jsx)(K,{label:i(`notifications_enabled`),value:o.notifications.enabled,onChange:e=>c(`notifications`,{enabled:e})}),(0,k.jsx)(Ye,{label:i(`notifications_prefix`),hint:i(`notifications_prefix_hint`),suggestions:v([...a,e]),value:x(o.notifications),onChange:e=>c(`notifications`,{prefixes:e})})]}),(0,k.jsxs)(P,{children:[(0,k.jsx)(`h3`,{children:i(`settings`)}),(0,k.jsx)(K,{label:i(`settings_enabled`),hint:i(`settings_enabled_hint`),value:o.settings?.enabled!==!1,onChange:e=>c(`settings`,{enabled:e})})]})]});case`system`:return(0,k.jsxs)(k.Fragment,{children:[u,(0,k.jsx)($,{items:o.system,max:w.system,domains:[`sensor`],addLabel:i(`add_statistic`),onChange:e=>s({...o,system:e})}),(0,k.jsxs)(P,{children:[(0,k.jsx)(`h3`,{children:i(`system_buttons`)}),(0,k.jsx)(`p`,{children:i(`system_buttons_hint`)}),(0,k.jsx)($,{items:o.system_buttons??[],max:w.systemButtons,domains:[`button`,`input_button`,`script`,`scene`,`automation`,`switch`,`input_boolean`],addLabel:i(`add_system_button`),create:()=>({id:z(),entity:``,name:``,icon:``,confirm:!1,on_name:``,off_name:``}),extra:(e,t)=>(0,k.jsxs)(k.Fragment,{children:[/^(switch|input_boolean|light|fan)\./.test(e.entity)&&(0,k.jsxs)(k.Fragment,{children:[(0,k.jsxs)(I,{children:[(0,k.jsx)(W,{label:i(`system_button_on_name`),value:e.on_name??``,onChange:e=>t({on_name:e})}),(0,k.jsx)(W,{label:i(`system_button_off_name`),value:e.off_name??``,onChange:e=>t({off_name:e})})]}),(0,k.jsx)(`p`,{children:i(`system_button_names_hint`)})]}),(0,k.jsx)(K,{label:i(`system_button_confirm_option`),hint:i(`system_button_confirm_option_hint`),value:e.confirm,onChange:e=>t({confirm:e})})]}),onChange:e=>s({...o,system_buttons:e})})]})]});case`batteries`:return(0,k.jsxs)(k.Fragment,{children:[u,(0,k.jsx)(Tt,{value:o.batteries??ae,onChange:e=>s({...o,batteries:e})})]})}},Ot=s.textarea`
  min-height: 55vh;
  padding: 12px;
  border-radius: 8px;
  border: 1px solid var(--divider-color, rgba(225, 225, 225, 0.12));
  background: var(--code-editor-background-color, var(--secondary-background-color, #282828));
  color: inherit;
  font-family: var(--ha-font-family-code, ui-monospace, monospace);
  font-size: 13px;
  resize: vertical;
`,kt=s.p`
  margin: 0;
  color: var(--error-color, #db4437);
`,At=({draft:e,update:n})=>{let r=t(),[i,a]=(0,O.useState)(()=>JSON.stringify(e,null,2)),[o,s]=(0,O.useState)(!1);return(0,k.jsxs)(k.Fragment,{children:[(0,k.jsx)(Q,{title:r(`tab_json`),lead:r(`json_hint`)}),(0,k.jsx)(Ot,{value:i,spellCheck:!1,onChange:e=>{a(e.target.value),s(!1)}}),o&&(0,k.jsx)(kt,{children:r(`json_invalid`)}),(0,k.jsx)(`div`,{children:(0,k.jsx)(A,{icon:`mdi:check`,appearance:`filled`,onClick:()=>{try{n({...JSON.parse(i),id:e.id})}catch{s(!0)}},children:r(`apply`)})})]})};function jt(){let e=h(e=>{let t=new Set(Object.values(e.entitiesRegistryDisplay).map(e=>e.platform));return me.filter(e=>!e.integration||t.has(e.integration)).map(e=>e.type).join(` `)});return me.filter(t=>e.split(` `).includes(t.type))}function Mt(e){let t=h(t=>e?.pickerEntities?e.pickerEntities(t.entities,e=>t.entitiesRegistryDisplay[e]?.platform).join(` `):null);return(0,O.useMemo)(()=>t===null?void 0:t.split(` `).filter(Boolean),[t])}var Nt=({tile:e,onChange:n})=>{let r=t(),i=D(p(e.entity||void 0))?.attributes.options??[],a=Array.isArray(e.options.hidden_scenes)?e.options.hidden_scenes:[],o=t=>n({...e.options,...t});return(0,k.jsxs)(k.Fragment,{children:[i.length>0&&(0,k.jsxs)(F,{as:`div`,children:[(0,k.jsx)(`span`,{className:`label`,children:r(`bl_shown_scenes`)}),(0,k.jsx)(`small`,{children:r(`bl_shown_scenes_hint`)}),i.map(e=>(0,k.jsx)(K,{label:e,value:!a.includes(e),onChange:t=>o({hidden_scenes:t?a.filter(t=>t!==e):[...a.filter(e=>i.includes(e)),e]})},e))]}),(0,k.jsx)(K,{label:r(`light_hide_presets`),hint:r(`light_hide_presets_hint`),value:e.options.hide_presets===!0,onChange:e=>o({hide_presets:e})}),(0,k.jsxs)(I,{children:[(0,k.jsx)(Y,{label:r(`bl_button_entity`),hint:r(`bl_button_entity_hint`),value:typeof e.options.button_entity==`string`?e.options.button_entity:``,onChange:e=>o({button_entity:e})}),(0,k.jsx)(J,{label:r(`bl_button_icon`),value:typeof e.options.button_icon==`string`?e.options.button_icon:``,onChange:e=>o({button_icon:e})})]})]})},Pt=s(Fe)`
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
`,Ft=({open:n,types:r,onPick:i,onClose:a})=>{let o=t(),s=(0,O.useRef)(null);return(0,O.useEffect)(()=>{let e=s.current;e&&(n&&!e.open&&e.isConnected&&e.showModal(),!n&&e.open&&e.close())}),(0,k.jsx)(Pt,{ref:s,tabIndex:-1,onCancel:e=>{e.preventDefault(),a()},onClick:e=>e.target===e.currentTarget&&a(),children:n&&(0,k.jsxs)(k.Fragment,{children:[(0,k.jsx)(`h2`,{children:o(`pick_tile`)}),(0,k.jsx)(`p`,{className:`muted`,children:o(`pick_tile_hint`)}),(0,k.jsx)(`div`,{className:`types`,children:r.map(t=>(0,k.jsxs)(`button`,{type:`button`,className:`type`,onClick:()=>i(t.type),children:[(0,k.jsx)(`span`,{className:`icon`,children:(0,k.jsx)(e,{icon:t.icon})}),(0,k.jsx)(`span`,{className:`name`,children:o(t.label)}),(0,k.jsx)(`span`,{className:`description`,children:o(t.description)})]},t.type))}),(0,k.jsx)(`div`,{className:`actions`,children:(0,k.jsx)(A,{appearance:`plain`,onClick:a,children:o(`cancel`)})})]})})},It=({value:e,onChange:n})=>{let r=t(),i=U(),a=re();return i?(0,k.jsx)(H,{selector:{select:{mode:`dropdown`,custom_value:!0,options:[...e&&!a.some(t=>t.id===e)?[{value:e,label:e}]:[],...a.map(e=>({value:e.id,label:e.name}))]}},value:e,label:r(`media_preset_app_id`),helper:r(`media_preset_app_hint`),onChange:e=>n(typeof e==`string`?e:``)}):(0,k.jsxs)(F,{children:[(0,k.jsx)(`span`,{className:`label`,children:r(`media_preset_app_id`)}),(0,k.jsx)(`input`,{type:`text`,list:`bwd-apps`,value:e,onChange:e=>n(e.target.value)}),(0,k.jsx)(`datalist`,{id:`bwd-apps`,children:a.map(e=>(0,k.jsx)(`option`,{value:e.id,children:e.name},e.id))}),(0,k.jsx)(`small`,{children:r(`media_preset_app_hint`)})]})},Lt=({device:e,patch:n})=>{let r=t(),i=D(e.entity||void 0),a=Array.isArray(i?.attributes.source_list)&&i.attributes.source_list.length>0;return(0,k.jsxs)(k.Fragment,{children:[(0,k.jsx)(Y,{label:r(`media_device_info`),hint:r(`media_device_info_hint`),domains:[`sensor`,`input_text`,`select`],value:e.info,onChange:e=>n({info:e})}),(a||e.sources)&&(0,k.jsx)(K,{label:r(`media_device_sources`),hint:r(`media_device_sources_hint`),value:e.sources,onChange:e=>n({sources:e})})]})},Rt=({preset:e,onChange:n})=>{let r=t(),i=D(e.entity||void 0),a=Array.isArray(i?.attributes.source_list)?i.attributes.source_list:[];return e.kind===`run`?null:e.kind===`source`&&a.length?(0,k.jsx)(q,{label:r(`media_preset_value`),value:e.value,options:[...new Set([...e.value?[e.value]:[],...a])].map(e=>({value:e,label:e})),onChange:n}):e.kind===`app`?(0,k.jsx)(It,{value:e.value,onChange:n}):(0,k.jsx)(W,{label:r(`media_preset_value`),value:e.value,onChange:n})},zt={bed:7,subs:2,heights:4},Bt=({tile:e,onChange:r})=>{let i=t(),a=he(e.entity,e.options),o=t=>r({...e.options,...t}),s=a.layout??zt,l=e=>o({speakers:ne({...s,...e})}),u=e=>e.map(e=>({value:String(e),label:String(e)}));return(0,k.jsxs)(k.Fragment,{children:[(0,k.jsx)(X,{label:i(`media_players`),hint:i(`media_players_hint`),domains:[`media_player`],max:6,value:a.players.filter(t=>t!==e.entity),onChange:e=>o({players:e})}),(0,k.jsxs)(I,{children:[(0,k.jsx)(Y,{label:i(`media_power_entity`),hint:i(`media_power_entity_hint`),domains:c,value:typeof e.options.power==`string`?e.options.power:``,onChange:e=>o({power:e})}),(0,k.jsx)(Y,{label:i(`media_volume_entity`),hint:i(`media_volume_entity_hint`),domains:[`media_player`],value:typeof e.options.volume==`string`?e.options.volume:``,onChange:e=>o({volume:e})})]}),(0,k.jsx)(K,{label:i(`media_hide_controls_off`),hint:i(`media_hide_controls_off_hint`),value:a.hideControlsOff,onChange:e=>o({hide_controls_off:e})}),(0,k.jsx)(q,{label:i(`media_volume_unit`),value:a.volumeUnit,options:oe.map(e=>({value:e,label:i(`media_volume_${e}`)})),onChange:e=>o({volume_unit:e})}),(0,k.jsxs)(F,{as:`div`,children:[(0,k.jsx)(`span`,{className:`label`,children:i(`media_presets`)}),(0,k.jsx)(`small`,{children:i(`media_presets_hint`)})]}),(0,k.jsx)($,{items:a.presets,max:8,domains:[`media_player`,`script`,`scene`,`button`,`input_button`],addLabel:i(`add_media_preset`),create:()=>({id:z(),entity:``,name:``,icon:``,kind:`source`,value:``}),extra:(e,t)=>(0,k.jsxs)(k.Fragment,{children:[(0,k.jsx)(q,{label:i(`media_preset_kind`),value:e.kind,options:fe.map(e=>({value:e,label:i(`media_preset_${e}`)})),onChange:e=>t({kind:e,value:``})}),(0,k.jsx)(Rt,{preset:e,onChange:e=>t({value:e})})]}),onChange:e=>o({presets:e})}),(0,k.jsxs)(F,{as:`div`,children:[(0,k.jsx)(`span`,{className:`label`,children:i(`media_switches`)}),(0,k.jsx)(`small`,{children:i(`media_switches_hint`)})]}),(0,k.jsx)(W,{label:i(`media_switches_title`),value:a.switchesTitle,onChange:e=>o({switches_title:e})}),(0,k.jsx)($,{items:a.switches,max:4,domains:[`switch`,`input_boolean`,`light`],addLabel:i(`add_media_switch`),create:()=>({id:z(),entity:``,name:``,icon:``,subs:[]}),extra:(e,t)=>a.layout&&a.layout.subs>0?(0,k.jsxs)(F,{as:`div`,children:[(0,k.jsx)(`span`,{className:`label`,children:i(`media_switch_subs`)}),(0,k.jsx)(`small`,{children:i(`media_switch_subs_hint`)}),n.slice(0,a.layout.subs).map(n=>(0,k.jsx)(K,{label:i(`speaker_${n}`),value:e.subs.includes(n),onChange:r=>t({subs:r?[...e.subs,n]:e.subs.filter(e=>e!==n)})},n))]}):null,onChange:e=>o({switches:e})}),(0,k.jsxs)(F,{as:`div`,children:[(0,k.jsx)(`span`,{className:`label`,children:i(`media_devices`)}),(0,k.jsx)(`small`,{children:i(`media_devices_hint`)})]}),(0,k.jsx)($,{items:a.devices,max:4,domains:[`media_player`,`remote`,`switch`],addLabel:i(`add_media_device`),create:()=>({id:z(),entity:``,name:``,icon:``,info:``,sources:!1}),extra:(e,t)=>(0,k.jsx)(Lt,{device:e,patch:t}),onChange:e=>o({devices:e})}),(0,k.jsxs)(F,{as:`div`,children:[(0,k.jsx)(`span`,{className:`label`,children:i(`media_extra`)}),(0,k.jsx)(`small`,{children:i(`media_extra_hint`)})]}),(0,k.jsx)(Y,{label:i(`entity`),domains:[`switch`,`input_boolean`,`light`,`fan`,`script`,`scene`,`button`,`input_button`,`automation`],value:a.extra.entity,onChange:e=>o({extra_entity:e})}),a.extra.entity&&(0,k.jsxs)(I,{children:[(0,k.jsx)(W,{label:i(`name`),hint:i(`name_hint`),value:a.extra.name,onChange:e=>o({extra_name:e})}),(0,k.jsx)(J,{label:i(`icon`),value:a.extra.icon,onChange:e=>o({extra_icon:e})})]}),a.extra.entity&&(0,k.jsx)(W,{label:i(`media_extra_title`),hint:i(`media_extra_title_hint`),value:a.extra.title,onChange:e=>o({extra_title:e})}),(0,k.jsxs)(F,{as:`div`,children:[(0,k.jsx)(`span`,{className:`label`,children:i(`media_more`)}),(0,k.jsx)(`small`,{children:i(`media_more_hint`)})]}),(0,k.jsx)($,{items:a.more,max:8,domains:[`select`,`input_select`,`switch`,`input_boolean`,`light`,`fan`,`script`,`scene`,`button`,`input_button`,`automation`],addLabel:i(`add_media_more`),create:()=>({id:z(),entity:``,name:``,icon:``,shownWhile:``}),extra:(e,t)=>(0,k.jsx)(Y,{label:i(`media_more_while`),hint:i(`media_more_while_hint`),value:e.shownWhile,onChange:e=>t({shownWhile:e})}),onChange:e=>o({more:e})}),(0,k.jsx)(Y,{label:i(`media_night_entity`),hint:i(`media_night_entity_hint`),domains:[`switch`,`input_boolean`,`script`],value:a.night,onChange:e=>o({night:e})}),(0,k.jsx)(W,{label:i(`media_night_text`),value:a.nightText,onChange:e=>o({night_text:e})}),(0,k.jsx)(F,{as:`div`,children:(0,k.jsx)(`span`,{className:`label`,children:i(`media_sound_heading`)})}),(0,k.jsxs)(I,{children:[(0,k.jsx)(Y,{label:i(`media_mode_entity`),hint:i(`media_mode_entity_hint`),domains:[`sensor`,`select`,`input_text`],value:a.modeEntity,onChange:e=>o({mode_entity:e})}),(0,k.jsx)(Y,{label:i(`media_format_entity`),hint:i(`media_format_entity_hint`),domains:[`sensor`,`input_text`],value:a.formatEntity,onChange:e=>o({format_entity:e})})]}),(0,k.jsx)(K,{label:i(`media_layout`),hint:i(`media_layout_hint`),value:a.layout!==null,onChange:e=>o({speakers:e?ne(s):``})}),a.layout&&(0,k.jsxs)(k.Fragment,{children:[(0,k.jsxs)(I,{children:[(0,k.jsx)(q,{label:i(`media_layout_bed`),value:String(s.bed),options:u(E),onChange:e=>l({bed:Number(e)})}),(0,k.jsx)(q,{label:i(`media_layout_subs`),value:String(s.subs),options:u(ge),onChange:e=>l({subs:Number(e)})}),(0,k.jsx)(q,{label:i(`media_layout_heights`),value:String(s.heights),options:u(te),onChange:e=>l({heights:Number(e)})})]}),s.heights>0&&(0,k.jsxs)(I,{children:[(0,k.jsx)(q,{label:i(`media_heights_front`),value:a.mounts.front,options:_e.map(e=>({value:e,label:i(`media_mount_${e}`)})),onChange:e=>o({heights_front:e})}),s.heights>=4&&(0,k.jsx)(q,{label:i(`media_heights_rear`),value:a.mounts.rear,options:_e.map(e=>({value:e,label:i(`media_mount_${e}`)})),onChange:e=>o({heights_rear:e})})]}),s.subs>0&&(0,k.jsx)(Y,{label:i(`media_sub_output`),hint:i(`media_sub_output_hint`),domains:[`switch`,`binary_sensor`,`input_boolean`],value:a.subOutput,onChange:e=>o({sub_output:e})}),(0,k.jsx)(q,{label:i(`media_sofa`),value:a.sofa,options:ie.map(e=>({value:e,label:i(`media_sofa_${e}`)})),onChange:e=>o({sofa:e})}),(0,k.jsx)(K,{label:i(`media_listener`),hint:i(`media_listener_hint`),value:a.listener,onChange:e=>o({listener:e})}),a.listener&&a.sofa!==`none`&&(0,k.jsx)(K,{label:i(`media_listener_sleeps`),hint:i(`media_listener_sleeps_hint`),value:a.sleeps,onChange:e=>o({listener_sleeps:e})}),(0,k.jsx)(Y,{label:i(`media_tv_entity`),hint:i(`media_tv_entity_hint`),domains:[`media_player`,`switch`,`binary_sensor`,`remote`],value:a.tvEntity,onChange:e=>o({tv_entity:e})}),(0,k.jsx)(q,{label:i(`media_screen`),value:a.screen,options:se.map(e=>({value:e,label:i(`media_screen_${e}`)})),onChange:e=>o({screen:e})}),a.screen===`image`&&(0,k.jsx)(tt,{label:i(`media_screen_picture`),hint:i(`media_screen_picture_hint`),accept:[`image/*`],value:a.screenImage,onChange:e=>o({screen_image:e})}),a.screen!==`off`&&(0,k.jsxs)(I,{children:[(0,k.jsx)(G,{label:i(`media_screen_scale`),hint:i(`media_screen_scale_hint`),value:a.screenScale,min:30,max:100,unit:`%`,onChange:e=>o({screen_scale:Math.max(30,Math.min(100,e))})}),(0,k.jsx)(q,{label:i(`media_screen_fit`),value:a.screenFit,options:ue.map(e=>({value:e,label:i(`media_screen_fit_${e}`)})),onChange:e=>o({screen_fit:e})})]}),(0,k.jsx)(K,{label:i(`media_walls`),value:a.walls,onChange:e=>o({hide_walls:!e})}),(0,k.jsx)(K,{label:i(`media_room_movable`),hint:i(`media_room_movable_hint`),value:a.roomMovable,onChange:e=>o({room_movable:e})})]})]})},Vt=({value:e,onChange:n})=>{let[r,i]=(0,O.useState)(()=>Object.keys(e).length?JSON.stringify(e):``),[a,o]=(0,O.useState)(!1),s=t();return(0,k.jsxs)(F,{children:[(0,k.jsx)(`span`,{className:`label`,children:s(`options_json`)}),(0,k.jsx)(`input`,{type:`text`,value:r,placeholder:`{"hours": 24, "color": "#03a9f4"}`,onChange:e=>{i(e.target.value);try{let t=e.target.value.trim()?JSON.parse(e.target.value):{};if(t&&typeof t==`object`&&!Array.isArray(t)){o(!1),n(t);return}}catch{}o(!0)}}),a&&(0,k.jsx)(`small`,{children:s(`json_invalid`)})]})},Ht=({value:e,entry:n,onChange:r})=>{let i=t(),a=Mt(n);return(0,k.jsx)(Y,{label:i(`entity`),value:e,domains:n?.domains,integration:n?.pickerIntegration,include:a,onChange:r})},Ut=({tile:n})=>{let r=t(),i=D(n.entity||void 0),a=y[n.type],o=n.name||i?.attributes.friendly_name||n.entity||(a?r(a.label):n.type);return(0,k.jsxs)(k.Fragment,{children:[(0,k.jsx)(e,{className:`icon`,icon:n.icon||a?.icon||`mdi:square-rounded-outline`}),(0,k.jsxs)(`span`,{className:`text`,children:[(0,k.jsx)(`span`,{children:o}),(0,k.jsxs)(`span`,{className:`secondary`,children:[a?r(a.label):n.type,` · `,n.w,` × `,n.h]})]})]})},Wt=({tiles:n,columns:a,rows:o,onChange:s})=>{let c=t(),l=jt(),[u,d]=(0,O.useState)(!1),f=(e,t)=>s(V(n,e,{...n[e],...t}));return(0,k.jsxs)(k.Fragment,{children:[n.length===0&&(0,k.jsxs)(Ne,{children:[(0,k.jsx)(e,{icon:`mdi:view-grid-plus-outline`}),(0,k.jsx)(`span`,{children:c(`empty_tiles`)})]}),n.map((e,t)=>{let u=y[e.type];return(0,k.jsxs)(Me,{open:!e.entity&&u?.needsEntity!==!1||void 0,children:[(0,k.jsxs)(`summary`,{children:[(0,k.jsx)(Ut,{tile:e}),(0,k.jsx)(`span`,{onClick:e=>e.preventDefault(),children:(0,k.jsx)(Z,{index:t,length:n.length,onMove:e=>s(R(n,t,e)),onRemove:()=>s(n.filter((e,n)=>n!==t)),onDuplicate:()=>s([...n.slice(0,t+1),{...e,id:z()},...n.slice(t+1)])})})]}),(0,k.jsxs)(`div`,{className:`fold-body`,children:[(0,k.jsx)(q,{label:c(`type`),value:e.type,options:[...l.map(e=>({value:e.type,label:c(e.label)})),...l.some(t=>t.type===e.type)?[]:[{value:e.type,label:u?c(u.label):e.type}]],onChange:e=>{let n=y[e]?.size??[1,1];f(t,{type:e,w:Math.min(n[0],a),h:Math.min(n[1],o)})}}),u?.needsEntity!==!1&&(0,k.jsx)(Ht,{value:e.entity,entry:u,onChange:e=>f(t,{entity:e})}),(0,k.jsxs)(I,{children:[(0,k.jsx)(W,{label:c(`name`),hint:c(`name_hint`),value:e.name,onChange:e=>f(t,{name:e})}),(0,k.jsx)(J,{label:c(`icon`),value:e.icon,onChange:e=>f(t,{icon:e})})]}),(0,k.jsxs)(I,{children:[(0,k.jsx)(G,{label:c(`width`),value:e.w,min:1,max:a,onChange:e=>f(t,{w:Math.max(1,Math.min(a,e))})}),(0,k.jsx)(G,{label:c(`height`),value:e.h,min:1,max:o,onChange:e=>f(t,{h:Math.max(1,Math.min(o,e))})})]}),e.type===`sensor`&&(0,k.jsx)(Vt,{value:e.options,onChange:e=>f(t,{options:e})}),e.type===`entity`&&e.entity.startsWith(`light.`)&&(0,k.jsx)(K,{label:c(`light_hide_presets`),hint:c(`light_hide_presets_hint`),value:e.options.hide_presets===!0,onChange:n=>f(t,{options:{...e.options,hide_presets:n}})}),(e.type===`cover`||e.type===`adaptive_cover`)&&(0,k.jsx)(q,{label:c(`cover_active_when`),hint:c(`cover_active_when_hint`),value:i.includes(e.options.active_when)?String(e.options.active_when):`open`,options:i.map(e=>({value:e,label:c(`cover_active_${e}`)})),onChange:n=>f(t,{options:{...e.options,active_when:n}})}),(e.type===`cover`||e.type===`adaptive_cover`)&&(0,k.jsx)(K,{label:c(`cover_stop_only_moving`),hint:c(`cover_stop_only_moving_hint`),value:e.options.stop_only_moving===!0,onChange:n=>f(t,{options:{...e.options,stop_only_moving:n}})}),(e.type===`cover`||e.type===`adaptive_cover`)&&(0,k.jsx)(Ye,{label:c(`cover_presets`),hint:c(`cover_presets_hint`),suggestions:[`0`,`25`,`50`,`75`,`100`],value:r(e.options.positions).map(String),onChange:n=>f(t,{options:{...e.options,positions:r(n)}})}),e.type===`better_lighting`&&(0,k.jsx)(Nt,{tile:e,onChange:e=>f(t,{options:e})}),e.type===`media`&&(0,k.jsx)(Bt,{tile:e,onChange:e=>f(t,{options:e})})]})]},e.id)}),(0,k.jsx)(`div`,{children:(0,k.jsx)(A,{icon:`mdi:plus`,appearance:`filled`,disabled:n.length>=w.tiles,onClick:()=>d(!0),children:c(`add_tile`)})}),(0,k.jsx)(Ft,{open:u,types:l,onClose:()=>d(!1),onPick:e=>{d(!1);let t=y[e]?.size??[1,1];s([...n,{id:z(),type:e,entity:``,name:``,icon:``,w:Math.min(t[0],a),h:Math.min(t[1],o),options:{}}])}})]})},Gt=()=>({id:z(),name:``,icon:``,status:[],status_icons:{},columns:2,rows:2,square:!0,tiles:[]}),Kt=()=>({id:z(),columns:[75,25],rows:[50,50],sections:[]}),qt=e=>({...B(e),id:z(),sections:e.sections.map(e=>({...B(e),id:z(),tiles:e.tiles.map(e=>({...e,id:z()}))}))}),Jt=e=>{let t=e.split(/[,/ ]+/).filter(Boolean).map(Number);return t.length&&t.length<=3&&t.every(e=>Number.isFinite(e)&&e>0)?t:null},Yt=({label:e,hint:t,value:n,onChange:r})=>(0,k.jsx)(W,{label:e,hint:t,value:n.join(`, `),onChange:e=>{let t=Jt(e);t&&r(t)}}),Xt=({draft:n,update:r,open:i})=>{let a=t(),o=n.pages,s=e=>r({...n,pages:e});return(0,k.jsxs)(k.Fragment,{children:[(0,k.jsx)(Q,{title:a(`tab_pages`),lead:a(`lead_pages`)}),(0,k.jsx)(je,{children:o.map((t,n)=>(0,k.jsxs)(`li`,{children:[(0,k.jsxs)(`button`,{type:`button`,className:`open`,onClick:()=>i({kind:`page`,page:n}),children:[(0,k.jsx)(e,{className:`icon`,icon:`mdi:book-open-page-variant-outline`}),(0,k.jsxs)(`span`,{className:`text`,children:[(0,k.jsx)(`span`,{children:a(`page_n`,{n:n+1})}),(0,k.jsx)(`span`,{className:`secondary`,children:t.sections.map(e=>e.name).filter(Boolean).join(` · `)||a(`no_sections`)})]})]}),(0,k.jsx)(Z,{index:n,length:o.length,onMove:e=>s(R(o,n,e)),onDuplicate:o.length<w.pages?()=>s([...o.slice(0,n+1),qt(t),...o.slice(n+1)]):void 0,onRemove:()=>o.length>1&&s(o.filter((e,t)=>t!==n))})]},t.id))}),(0,k.jsx)(`div`,{children:(0,k.jsx)(A,{icon:`mdi:plus`,appearance:`filled`,disabled:o.length>=w.pages,onClick:()=>{s([...o,Kt()]),i({kind:`page`,page:o.length})},children:a(`add_page`)})})]})},Zt=({draft:n,update:r,open:i,page:a})=>{let o=t(),s=n.pages[a],c=e=>r({...n,pages:V(n.pages,a,{...s,...e})}),l=s.columns.length*s.rows.length;return(0,k.jsxs)(k.Fragment,{children:[(0,k.jsx)(Q,{title:o(`page_n`,{n:a+1}),lead:o(`lead_page`)}),(0,k.jsxs)(P,{children:[(0,k.jsx)(`h3`,{children:o(`layout`)}),(0,k.jsxs)(I,{children:[(0,k.jsx)(Yt,{label:o(`column_split`),hint:o(`split_hint`),value:s.columns,onChange:e=>c({columns:e})}),(0,k.jsx)(Yt,{label:o(`row_split`),hint:o(`split_hint`),value:s.rows,onChange:e=>c({rows:e})})]})]}),(0,k.jsxs)(P,{children:[(0,k.jsx)(`h3`,{children:o(`sections`)}),(0,k.jsx)(`p`,{children:o(`sections_hint`,{cells:l})}),(0,k.jsx)(je,{children:Array.from({length:l},(t,n)=>{let r=s.sections[n];return r?(0,k.jsxs)(`li`,{children:[(0,k.jsxs)(`button`,{type:`button`,className:`open`,onClick:()=>i({kind:`section`,page:a,section:n}),children:[(0,k.jsx)(e,{className:`icon`,icon:r.icon||`mdi:view-grid-outline`}),(0,k.jsxs)(`span`,{className:`text`,children:[(0,k.jsx)(`span`,{children:r.name||o(`section_n`,{n:n+1})}),(0,k.jsxs)(`span`,{className:`secondary`,children:[o(`tiles_count`,{count:r.tiles.length}),` · `,r.columns,` × `,r.rows]})]})]}),(0,k.jsx)(Z,{index:n,length:s.sections.length,onMove:e=>c({sections:R(s.sections,n,e)}),onRemove:()=>c({sections:s.sections.filter((e,t)=>t!==n)})})]},r.id):(0,k.jsx)(`li`,{children:(0,k.jsxs)(`button`,{type:`button`,className:`open`,onClick:()=>{let e=[...s.sections];for(;e.length<=n;)e.push(Gt());c({sections:e}),i({kind:`section`,page:a,section:n})},children:[(0,k.jsx)(e,{className:`icon`,icon:`mdi:plus-box-outline`}),(0,k.jsxs)(`span`,{className:`text`,children:[(0,k.jsx)(`span`,{children:o(`add_section`)}),(0,k.jsx)(`span`,{className:`secondary`,children:o(`cell_n`,{n:n+1})})]})]})},`empty-${n}`)})})]})]})},Qt=({draft:e,update:n,page:r,section:i})=>{let a=t(),o=e.pages[r],s=o.sections[i],c=t=>n({...e,pages:V(e.pages,r,{...o,sections:V(o.sections,i,{...s,...t})})});return(0,k.jsxs)(k.Fragment,{children:[(0,k.jsx)(Q,{title:s.name||a(`section_n`,{n:i+1}),lead:a(`lead_section`)}),(0,k.jsxs)(P,{children:[(0,k.jsx)(`h3`,{children:a(`section_header`)}),(0,k.jsxs)(I,{children:[(0,k.jsx)(W,{label:a(`name`),value:s.name,onChange:e=>c({name:e})}),(0,k.jsx)(J,{label:a(`icon`),value:s.icon,onChange:e=>c({icon:e})})]}),(0,k.jsx)(F,{as:`div`,children:(0,k.jsx)(`span`,{className:`label`,children:a(`status_entities`)})}),(0,k.jsx)($,{items:s.status.map((e,t)=>({id:`status-${t}`,entity:e,name:``,icon:s.status_icons?.[e]??``})),max:w.sectionStatus,domains:[`sensor`,`binary_sensor`],addLabel:a(`add_status`),named:!1,onChange:e=>c({status:e.map(e=>e.entity),status_icons:Object.fromEntries(e.filter(e=>e.entity&&e.icon).map(e=>[e.entity,e.icon]))})})]}),(0,k.jsxs)(P,{children:[(0,k.jsx)(`h3`,{children:a(`grid`)}),(0,k.jsxs)(I,{children:[(0,k.jsx)(G,{label:a(`columns`),value:s.columns,min:1,max:w.sectionCells,onChange:e=>c({columns:e})}),(0,k.jsx)(G,{label:a(`rows`),value:s.rows,min:1,max:w.sectionCells,onChange:e=>c({rows:e})})]}),(0,k.jsx)(K,{label:a(`square_cells`),hint:a(`square_cells_hint`),value:s.square,onChange:e=>c({square:e})})]}),(0,k.jsxs)(P,{children:[(0,k.jsx)(`h3`,{children:a(`tiles`)}),(0,k.jsx)(Wt,{tiles:s.tiles,columns:s.columns,rows:s.rows,onChange:e=>c({tiles:e})})]})]})},$t=({draft:n,update:r,open:i})=>{let a=t(),o=n.buttons,s=e=>r({...n,buttons:e});return(0,k.jsxs)(k.Fragment,{children:[(0,k.jsx)(Q,{title:a(`tab_buttons`),lead:a(`lead_buttons`)}),o.length>0&&(0,k.jsx)(je,{children:o.map((t,n)=>(0,k.jsxs)(`li`,{children:[(0,k.jsxs)(`button`,{type:`button`,className:`open`,onClick:()=>i({kind:`button`,button:n}),children:[(0,k.jsx)(e,{className:`icon`,icon:t.icon||`mdi:gesture-tap`}),(0,k.jsxs)(`span`,{className:`text`,children:[(0,k.jsx)(`span`,{children:t.name||a(`button_n`,{n:n+1})}),(0,k.jsx)(`span`,{className:`secondary`,children:a(`tiles_count`,{count:t.tiles.length})})]})]}),(0,k.jsx)(Z,{index:n,length:o.length,onMove:e=>s(R(o,n,e)),onRemove:()=>s(o.filter((e,t)=>t!==n))})]},t.id))}),(0,k.jsx)(`div`,{children:(0,k.jsxs)(A,{icon:`mdi:plus`,appearance:`filled`,disabled:o.length>=w.buttons,onClick:()=>{s([...o,{id:z(),name:``,icon:`mdi:gesture-tap`,columns:4,tiles:[]}]),i({kind:`button`,button:o.length})},children:[a(`add_button`),` (`,o.length,`/`,w.buttons,`)`]})})]})},en=({draft:e,update:n,button:r})=>{let i=t(),a=e.buttons[r],o=t=>n({...e,buttons:V(e.buttons,r,{...a,...t})});return(0,k.jsxs)(k.Fragment,{children:[(0,k.jsx)(Q,{title:a.name||i(`button_n`,{n:r+1}),lead:i(`lead_button`)}),(0,k.jsxs)(P,{children:[(0,k.jsxs)(I,{children:[(0,k.jsx)(W,{label:i(`name`),value:a.name,onChange:e=>o({name:e})}),(0,k.jsx)(J,{label:i(`icon`),value:a.icon,onChange:e=>o({icon:e})})]}),(0,k.jsx)(G,{label:i(`columns`),hint:i(`button_columns_hint`),value:a.columns,min:1,max:w.sectionCells,onChange:e=>o({columns:e})})]}),(0,k.jsxs)(P,{children:[(0,k.jsx)(`h3`,{children:i(`tiles`)}),(0,k.jsx)(Wt,{tiles:a.tiles,columns:a.columns,rows:w.sectionCells,onChange:e=>o({tiles:e})})]})]})},tn=[{id:`tab-10`,label:`10″ tablet · 1280×800`,width:1280,height:800},{id:`tab-11`,label:`11″ tablet · 1194×834`,width:1194,height:834},{id:`tab-12`,label:`12″ tablet · 1366×1024`,width:1366,height:1024},{id:`fhd`,label:`Full HD · 1920×1080`,width:1920,height:1080},{id:`small`,label:`7″ panel · 1024×600`,width:1024,height:600}],nn=({view:e,dashboards:t,...n})=>{switch(e.kind){case`general`:return(0,k.jsx)(gt,{...n});case`sidebar`:return(0,k.jsx)(Dt,{...n,part:e.part});case`pages`:return(0,k.jsx)(Xt,{...n});case`page`:return(0,k.jsx)(Zt,{...n,page:e.page});case`section`:return(0,k.jsx)(Qt,{...n,page:e.page,section:e.section});case`buttons`:return(0,k.jsx)($t,{...n});case`button`:return(0,k.jsx)(en,{...n,button:e.button});case`users`:return(0,k.jsx)(st,{dashboards:t});case`json`:return(0,k.jsx)(At,{...n},n.draft.id)}},rn=()=>{let n=t(),r=ee(),{narrow:i}=de(),[o,s]=(0,O.useState)(null),[c,l]=(0,O.useState)(null),[u,d]=(0,O.useState)(!1),[f,p]=(0,O.useState)(``),[m,te]=(0,O.useState)({kind:`general`}),[ne,h]=(0,O.useState)(()=>new Set),[g,_]=(0,O.useState)(!1),[re,v]=(0,O.useState)(!1),[ie,ae]=(0,O.useState)(!1),[y,b]=(0,O.useState)(!1),[oe,se]=(0,O.useState)(tn[0].id),[x,ce]=(0,O.useState)(!1),le=tn.find(e=>e.id===oe)??tn[0],S=(0,O.useCallback)((e,t)=>{l(B(e.dashboards[t]??e.dashboards.default)),d(!1)},[]);(0,O.useEffect)(()=>{r?.sendMessagePromise({type:`better_wall_dashboard/document`}).then(e=>{s(e),S(e,`default`)}).catch(e=>p(String(e?.message??e)))},[r,S]),(0,O.useEffect)(()=>{if(!u)return;let e=e=>e.preventDefault();return window.addEventListener(`beforeunload`,e),()=>window.removeEventListener(`beforeunload`,e)},[u]);let ue=(0,O.useCallback)(e=>{l(e),d(!0),p(``)},[]),C=(0,O.useCallback)((e,t)=>{te(e),h(n=>new Set([...n,...xe(e),...t?[t]:[]])),_(!1),v(!1),b(!1)},[]),fe=(0,O.useCallback)(e=>{h(t=>{let n=new Set(t);return n.delete(e)||n.add(e),n})},[]),{confirm:pe,dialog:w}=ft(),T=async()=>!u||pe({title:n(`discard_title`),text:n(`discard_text`),confirm:n(`discard`),danger:!0}),me=async()=>{if(r&&c){p(n(`saving`));try{let e=await r.sendMessagePromise({type:`better_wall_dashboard/save_dashboard`,dashboard:c});s(t=>t&&{...t,dashboards:{...t.dashboards,[e.dashboard.id]:e.dashboard}}),l(B(e.dashboard)),d(!1),p(n(`saved`))}catch(e){p(String(e?.message??e))}}},he=async()=>{o&&c&&await T()&&(o.dashboards[c.id]?S(o,c.id):S(o,`default`),p(``))},ge=async e=>{o&&await T()&&(S(o,e),C({kind:`general`}))},E=async e=>{if(v(!1),!o||!await T())return;let t=B(e??o.dashboards.default);l({...t,id:z(),name:e?`${e.name} (2)`:n(`new_dashboard`)}),d(!0),C({kind:`general`})},_e=async()=>{if(v(!1),!r||!c)return;let e=e=>ht(e)||p(e);try{let t=await r.sendMessagePromise({type:`better_wall_dashboard/reload_tablets`,dashboard_id:c.id});e(n(`tablets_reloaded`,{count:t.reached}))}catch(t){e(String(t?.message??t))}},D=async()=>{if(v(!1),!r||!c||!o||c.id==="default"||!await pe({title:n(`delete_title`,{name:c.name}),text:n(`confirm_delete`,{name:c.name}),confirm:n(`delete`),danger:!0}))return;o.dashboards[c.id]&&await r.sendMessagePromise({type:`better_wall_dashboard/delete_dashboard`,dashboard_id:c.id});let e={...o.dashboards};delete e[c.id];let t={...o,dashboards:e};s(t),S(t,`default`),C({kind:`general`})},ve=(0,O.useMemo)(()=>Object.values(o?.dashboards??{}),[o]),ye=(0,O.useMemo)(()=>{let e=Object.values(o?.dashboards??{}).map(e=>({id:e.id,name:e.name}));return c&&!e.some(e=>e.id===c.id)&&e.push({id:c.id,name:c.name}),e.map(e=>e.id===c?.id?{...e,name:c.name}:e)},[o,c]);if(!c)return(0,k.jsxs)(we,{children:[(0,k.jsx)(Te,{"data-narrow":i,children:(0,k.jsx)(`span`,{className:`app-title`,children:n(`editor_title`)})}),(0,k.jsx)(`p`,{style:{padding:24},children:f||n(`loading`)})]});let j=be(m,c),Se=Ce(j,{label:e=>n(e),page:e=>n(`page_n`,{n:e+1}),section:(e,t)=>c.pages[e]?.sections[t]?.name||n(`section_n`,{n:t+1}),button:e=>c.buttons[e]?.name||n(`button_n`,{n:e+1})}),N=j.kind===`page`||j.kind===`section`?j.page:void 0,Oe=j.kind!==`users`;return(0,k.jsx)(rt,{children:(0,k.jsxs)(we,{children:[(0,k.jsxs)(Te,{"data-narrow":i,children:[(0,k.jsx)(M,{type:`button`,className:`only-narrow`,"aria-label":n(`menu`),onClick:e=>a(e.currentTarget),children:(0,k.jsx)(e,{icon:`mdi:menu`})}),(0,k.jsx)(M,{type:`button`,className:`only-drawer`,"aria-label":n(`editor_menu`),onClick:()=>_(!0),children:(0,k.jsx)(e,{icon:`mdi:format-list-bulleted`})}),(0,k.jsxs)(`div`,{className:`titles`,children:[(0,k.jsx)(`span`,{className:`app-title`,children:n(`editor_title`)}),(0,k.jsxs)(`nav`,{"aria-label":n(`editor_menu`),children:[(0,k.jsx)(`button`,{type:`button`,onClick:()=>C({kind:`general`}),children:c.name}),Se.map((e,t)=>(0,k.jsxs)(`span`,{children:[`› `,e.view?(0,k.jsx)(`button`,{type:`button`,onClick:()=>C(e.view),children:e.label}):e.label]},t))]})]}),(0,k.jsx)(`span`,{className:`spacer`}),(0,k.jsx)(M,{type:`button`,className:`only-no-preview`,"aria-pressed":y,"aria-label":n(`preview`),"data-tip":n(`preview`),onClick:()=>b(e=>!e),children:(0,k.jsx)(e,{icon:y?`mdi:form-select`:`mdi:tablet-dashboard`})}),(0,k.jsxs)(Ee,{children:[(0,k.jsx)(M,{type:`button`,"aria-label":n(`more`),"aria-expanded":re,onClick:()=>v(e=>!e),children:(0,k.jsx)(e,{icon:`mdi:dots-vertical`})}),re&&(0,k.jsxs)(`div`,{className:`menu`,role:`menu`,children:[(0,k.jsxs)(`button`,{type:`button`,role:`menuitem`,onClick:()=>void E(),children:[(0,k.jsx)(e,{icon:`mdi:plus`}),` `,n(`new_dashboard`)]}),(0,k.jsxs)(`button`,{type:`button`,role:`menuitem`,onClick:()=>void E(c),children:[(0,k.jsx)(e,{icon:`mdi:content-copy`}),` `,n(`duplicate`)]}),(0,k.jsxs)(`button`,{type:`button`,role:`menuitem`,onClick:()=>void _e(),children:[(0,k.jsx)(e,{icon:`mdi:tablet-cellphone`}),` `,n(`reload_tablets`)]}),(0,k.jsxs)(`button`,{type:`button`,role:`menuitem`,onClick:()=>C({kind:`json`}),children:[(0,k.jsx)(e,{icon:`mdi:code-json`}),` `,n(`edit_json`)]}),(0,k.jsxs)(`button`,{type:`button`,role:`menuitem`,className:`danger`,disabled:c.id==="default",onClick:()=>void D(),children:[(0,k.jsx)(e,{icon:`mdi:delete-outline`}),` `,n(`delete_dashboard`)]}),(0,k.jsx)(`hr`,{}),(0,k.jsxs)(`button`,{type:`button`,role:`menuitem`,onClick:()=>{v(!1),ae(!0)},children:[(0,k.jsx)(e,{icon:`mdi:information-outline`}),` `,n(`about`)]})]})]})]}),(0,k.jsxs)(De,{children:[(0,k.jsx)(ke,{$open:g,onClick:()=>_(!1)}),(0,k.jsx)(Ie,{dashboards:ye,draft:c,view:j,expanded:ne,open:g,onToggle:fe,onOpen:C,onSwitch:e=>void ge(e),onNewDashboard:()=>void E()}),(0,k.jsxs)(Ae,{$hidden:y,children:[(0,k.jsx)(`div`,{className:`screen-body`,children:(0,k.jsx)(pt.Provider,{value:ve,children:(0,k.jsx)(nn,{view:j,dashboards:ye,draft:c,update:ue,open:C})})}),Oe&&(0,k.jsxs)(`div`,{className:`screen-foot`,children:[(0,k.jsx)(`span`,{className:`status`,children:u?n(`unsaved`):f}),(0,k.jsxs)(`span`,{className:`end`,children:[(0,k.jsx)(A,{appearance:`plain`,disabled:!u,onClick:()=>void he(),children:n(`discard`)}),(0,k.jsx)(A,{appearance:`accent`,icon:`mdi:content-save-outline`,disabled:!u,onClick:me,children:n(`save`)})]})]})]}),(0,k.jsxs)(Pe,{$shown:y,children:[(0,k.jsxs)(`div`,{className:`preview-bar`,children:[(0,k.jsx)(`h2`,{children:n(`preview`)}),(0,k.jsx)(q,{label:n(`device`),value:oe,options:tn.map(e=>({value:e.id,label:e.label})),onChange:se}),(0,k.jsx)(M,{type:`button`,style:{color:`var(--secondary-text-color)`},"aria-label":n(x?`landscape`:`portrait`),"data-tip":n(x?`landscape`:`portrait`),onClick:()=>ce(e=>!e),children:(0,k.jsx)(e,{icon:x?`mdi:phone-rotate-landscape`:`mdi:phone-rotate-portrait`})})]}),(0,k.jsx)(`div`,{className:`stage`,children:(0,k.jsx)(ze,{dashboard:c,device:le,portrait:x,page:N})})]})]}),(0,k.jsx)(ut,{open:ie,onClose:()=>ae(!1)}),w]})})};export{rn as default};