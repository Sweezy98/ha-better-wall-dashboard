import{_ as e,a as t,b as n,c as r,d as i,f as a,g as o,h as s,i as c,l,m as u,n as d,o as f,p,r as ee,s as m,t as h,u as te,v as ne,x as g,y as _}from"./boot-BzAAelWk.js";var v=g(n(),1),y=g(_(),1),b=e.button`
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
  ${({$appearance:e,$danger:t})=>{let n=t?`var(--error-color, #db4437)`:`var(--primary-color, #03a9f4)`;return e===`accent`?o`
        background: ${n};
        color: var(--text-primary-color, #fff);
      `:e===`filled`?o`
        background: color-mix(in srgb, ${n} 16%, transparent);
        color: ${n};
      `:o`
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
`,x=()=>()=>{},S=({children:e,onClick:t,icon:n,appearance:r=`plain`,danger:i=!1,disabled:a,title:o})=>{let s=(0,v.useSyncExternalStore)(x,()=>!!customElements.get(`ha-button`)),c=(0,y.jsxs)(y.Fragment,{children:[n&&(0,y.jsx)(`span`,{slot:`start`,style:{display:`inline-flex`},children:(0,y.jsx)(l,{icon:n,size:`18px`})}),e]});return s?(0,v.createElement)(`ha-button`,{appearance:r,variant:i?`danger`:`brand`,disabled:a||void 0,title:o,onClick:t},c):(0,y.jsx)(b,{type:`button`,$appearance:r,$danger:i,disabled:a,title:o,onClick:t,children:c})},C=[{part:`status`,icon:`mdi:wifi-star`,label:`nav_status`},{part:`climate`,icon:`mdi:home-thermometer-outline`,label:`room_climate`},{part:`persons`,icon:`mdi:account-multiple-outline`,label:`persons`},{part:`openings`,icon:`mdi:window-open-variant`,label:`openings`},{part:`travel`,icon:`mdi:car-clock`,label:`travel_time`},{part:`quick`,icon:`mdi:gesture-tap-button`,label:`quick_actions`},{part:`calendar`,icon:`mdi:calendar-month-outline`,label:`calendar`},{part:`weather`,icon:`mdi:weather-partly-cloudy`,label:`weather`},{part:`notifications`,icon:`mdi:bell-outline`,label:`notifications`},{part:`system`,icon:`mdi:chart-box-outline`,label:`system_stats`}];function re(e,t){switch(e.kind){case`page`:return e.page<t.pages.length?e:{kind:`pages`};case`section`:{let n=t.pages[e.page];return n?e.section<n.sections.length?e:{kind:`page`,page:e.page}:{kind:`pages`}}case`button`:return e.button<t.buttons.length?e:{kind:`buttons`};default:return e}}function ie(e){switch(e.kind){case`sidebar`:return[`sidebar`];case`page`:return[`pages`];case`section`:return[`pages`,`page-${e.page}`];case`button`:return[`buttons`];default:return[]}}function w(e,t){return JSON.stringify(e)===JSON.stringify(t)}function ae(e,t){switch(e.kind){case`general`:return[{label:t.label(`tab_general`)}];case`sidebar`:{let n=C.find(t=>t.part===e.part);return[{label:t.label(`tab_sidebar`)},{label:t.label(n?.label??e.part)}]}case`pages`:return[{label:t.label(`tab_pages`)}];case`page`:return[{label:t.label(`tab_pages`),view:{kind:`pages`}},{label:t.page(e.page)}];case`section`:return[{label:t.label(`tab_pages`),view:{kind:`pages`}},{label:t.page(e.page),view:{kind:`page`,page:e.page}},{label:t.section(e.page,e.section)}];case`buttons`:return[{label:t.label(`tab_buttons`)}];case`button`:return[{label:t.label(`tab_buttons`),view:{kind:`buttons`}},{label:t.button(e.button)}];case`users`:return[{label:t.label(`tab_users`)}];case`json`:return[{label:t.label(`tab_json`)}]}}var oe=e.div`
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
`,se=e.header`
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
`,T=e.button`
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
`,ce=e.div`
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
`,le=e.div`
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
`,E=e.div`
  background: var(--card-background-color, #1c1c1c);
  border-radius: var(--ha-card-border-radius, 12px);
  box-shadow: var(--ha-card-box-shadow, none);
  border: 1px solid var(--ha-card-border-color, var(--divider-color, rgba(225, 225, 225, 0.12)));
  box-sizing: border-box;
  min-width: 0;
  min-height: 0;
`,D=e(E)`
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
`,ue=e.div`
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
`,de=e(E)`
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
`,O=e.section`
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
`,k=e.ul`
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
`,A=e.details`
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
`,fe=e.div`
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
`,pe=e(E)`
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
`,me=({dashboards:e,draft:t,view:n,expanded:r,open:i,onToggle:a,onOpen:o,onSwitch:c,onNewDashboard:u})=>{let d=s(),f=(e,t,r)=>(0,y.jsx)(`li`,{children:(0,y.jsxs)(`button`,{type:`button`,"aria-current":w(n,e)?`page`:void 0,onClick:()=>o(e),children:[(0,y.jsx)(l,{className:`icon`,icon:r}),(0,y.jsx)(`span`,{className:`grow`,children:t})]})},JSON.stringify(e)),p=(e,t,i,s,c)=>{let u=r.has(e);return(0,y.jsxs)(`li`,{children:[(0,y.jsxs)(`button`,{type:`button`,"aria-expanded":u,"aria-current":w(n,t)?`page`:void 0,onClick:()=>o(t,e),children:[(0,y.jsx)(l,{className:`icon`,icon:s}),(0,y.jsx)(`span`,{className:`grow`,children:i}),(0,y.jsx)(`span`,{className:`twist`,"data-open":u,role:`button`,"aria-label":i,onClick:t=>{t.stopPropagation(),a(e)},children:(0,y.jsx)(l,{icon:`mdi:chevron-right`})})]}),u&&(0,y.jsx)(`ul`,{className:`sub`,children:c})]},e)},ee=(0,y.jsxs)(y.Fragment,{children:[f({kind:`general`},d(`tab_general`),`mdi:cog-outline`),p(`sidebar`,{kind:`sidebar`,part:`status`},d(`tab_sidebar`),`mdi:dock-left`,C.map(e=>f({kind:`sidebar`,part:e.part},d(e.label),e.icon))),p(`pages`,{kind:`pages`},d(`tab_pages`),`mdi:book-open-page-variant-outline`,t.pages.map((e,t)=>e.sections.length?p(`page-${t}`,{kind:`page`,page:t},d(`page_n`,{n:t+1}),`mdi:file-outline`,e.sections.map((e,n)=>f({kind:`section`,page:t,section:n},e.name||d(`section_n`,{n:n+1}),e.icon||`mdi:view-grid-outline`))):f({kind:`page`,page:t},d(`page_n`,{n:t+1}),`mdi:file-outline`))),p(`buttons`,{kind:`buttons`},d(`tab_buttons`),`mdi:gesture-tap-button`,t.buttons.map((e,t)=>f({kind:`button`,button:t},e.name||d(`button_n`,{n:t+1}),e.icon||`mdi:gesture-tap`)))]});return(0,y.jsxs)(D,{$open:i,as:`nav`,"aria-label":d(`editor_title`),children:[(0,y.jsx)(`div`,{className:`heading`,children:d(`nav_dashboards`)}),(0,y.jsxs)(`ul`,{children:[e.map(e=>e.id===t.id?(0,y.jsxs)(`li`,{children:[(0,y.jsxs)(`button`,{type:`button`,"aria-expanded":!0,onClick:()=>o({kind:`general`}),children:[(0,y.jsx)(l,{className:`icon`,icon:`mdi:tablet-dashboard`}),(0,y.jsx)(`span`,{className:`grow`,children:(0,y.jsx)(`strong`,{children:t.name})})]}),(0,y.jsx)(`ul`,{className:`sub`,children:ee})]},e.id):(0,y.jsx)(`li`,{children:(0,y.jsxs)(`button`,{type:`button`,onClick:()=>c(e.id),children:[(0,y.jsx)(l,{className:`icon`,icon:`mdi:tablet-dashboard`}),(0,y.jsx)(`span`,{className:`grow`,children:e.name})]})},e.id)),(0,y.jsx)(`li`,{className:`add`,children:(0,y.jsxs)(`button`,{type:`button`,onClick:u,children:[(0,y.jsx)(l,{className:`icon`,icon:`mdi:plus`}),(0,y.jsx)(`span`,{className:`grow`,children:d(`new_dashboard`)})]})})]}),(0,y.jsx)(`div`,{className:`heading`,children:d(`nav_house`)}),(0,y.jsx)(`ul`,{children:f({kind:`users`},d(`tab_users`),`mdi:account-multiple-outline`)})]})},j=e.div`
  position: relative;
  width: 100%;
  height: 100%;
  min-height: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
`,he=e.div`
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
`,ge=(0,v.memo)(({dashboard:e,device:t,portrait:n,page:r})=>{let i=s(),a=(0,v.useRef)(null),[o,l]=(0,v.useState)(.5),u=n?t.height:t.width,d=n?t.width:t.height;(0,v.useLayoutEffect)(()=>{let e=a.current;if(!e)return;let t=()=>{let t=Math.min((e.clientWidth-40)/u,(e.clientHeight-40)/d);l(Math.max(.1,Math.min(1,Math.floor(t*1e3)/1e3)))};t();let n=new ResizeObserver(t);return n.observe(e),()=>n.disconnect()},[u,d]);let f=(0,v.useMemo)(()=>({dashboard:e,dashboards:[],kiosk:!1,is_admin:!0,pin_required:!1}),[e]);return(0,y.jsx)(j,{ref:a,"aria-label":i(`preview`),children:(0,y.jsx)(he,{style:{width:u,height:d,transform:`translate(-50%, -50%) scale(${o})`},children:(0,y.jsx)(te,{view:f,focusPage:r,children:(0,y.jsx)(c,{})})})})}),M=e.label`
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
`,_e=e.label`
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
`,N=e.div`
  display: grid;
  grid-template-columns: ${({$columns:e})=>e??`repeat(auto-fit, minmax(220px, 1fr))`};
  gap: 16px;
  align-items: start;
`,P=e.button`
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
`;function F(e,t,n){if(n<0||n>=e.length)return e;let r=[...e],[i]=r.splice(t,1);return r.splice(n,0,i),r}function I(){let e=new Uint8Array(6);return crypto.getRandomValues(e),Array.from(e,e=>e.toString(16).padStart(2,`0`)).join(``)}var L=e=>JSON.parse(JSON.stringify(e)),R=(e,t,n)=>e.map((e,r)=>r===t?n:e),z=({selector:e,value:t,onChange:n,label:r,helper:i,required:a=!1})=>{let o=(0,v.useRef)(null),s=(0,v.useRef)(null),c=(0,v.useRef)(n);(0,v.useEffect)(()=>{c.current=n}),(0,v.useEffect)(()=>{let e=document.createElement(`ha-selector`);e.hass=h();let t=t=>{t.stopPropagation();let n=t.detail.value;e.value=n,c.current(n)};e.addEventListener(`value-changed`,t),o.current?.append(e),s.current=e;let n=d(t=>{e.hass=t});return()=>{n(),e.removeEventListener(`value-changed`,t),e.remove(),s.current=null}},[]);let l=JSON.stringify(e);return(0,v.useEffect)(()=>{let e=s.current;e&&(e.selector=JSON.parse(l),e.label=r,e.helper=i,e.required=a)},[l,r,i,a]),(0,v.useEffect)(()=>{let e=s.current;e&&e.value!==t&&(e.value=t)},[t]),(0,y.jsx)(`div`,{ref:o,className:`ha-field`})},ve=[`ha-selector`,`ha-entity-picker`,`ha-switch`,`ha-icon-picker`],B=null;function V(){return ve.every(e=>customElements.get(e))}function ye(){return V()?Promise.resolve(!0):(B??=(async()=>{let e=window.loadCardHelpers;if(!e)return!1;try{let t=await e();for(let e of[{type:`entities`,entities:[]},{type:`button`}])try{await(await t.createCardElement(e)).constructor.getConfigElement?.()}catch{}}catch{return!1}return!!customElements.get(`ha-selector`)})(),B)}function H(){let[e,t]=(0,v.useState)(V),n=(0,v.useSyncExternalStore)(d,()=>h()!==null);return(0,v.useEffect)(()=>{if(e||!n)return;let r=!0;return ye().then(e=>r&&e&&t(!0)),()=>{r=!1}},[e,n]),e&&n}var U=({label:e,hint:t,value:n,onChange:r,placeholder:i,type:a=`text`})=>H()?(0,y.jsx)(z,{selector:{text:a===`text`?{}:{type:a}},value:n,label:e,helper:t,onChange:e=>r(typeof e==`string`?e:``)}):(0,y.jsxs)(M,{children:[(0,y.jsx)(`span`,{className:`label`,children:e}),(0,y.jsx)(`input`,{type:a,value:n,placeholder:i,onChange:e=>r(e.target.value)}),t&&(0,y.jsx)(`small`,{children:t})]}),W=({label:e,hint:t,value:n,onChange:r,min:i,max:a,step:o=1,unit:s})=>{let c=H(),l=e=>{let t=Number(e);e!==``&&e!==null&&Number.isFinite(t)&&r(t)};return c?(0,y.jsx)(z,{selector:{number:{min:i,max:a,step:o,mode:`box`,unit_of_measurement:s}},value:n,label:e,helper:t,onChange:l}):(0,y.jsxs)(M,{children:[(0,y.jsx)(`span`,{className:`label`,children:e}),(0,y.jsx)(`input`,{type:`number`,value:n,min:i,max:a,step:o,onChange:e=>l(e.target.value)}),t&&(0,y.jsx)(`small`,{children:t})]})},be=({label:e,hint:t,value:n,onChange:r,min:i,max:a,step:o,unit:s,scale:c=1})=>{let l=H(),u=Math.round(n*c*1e3)/1e3,d=e=>{let t=Number(e);Number.isFinite(t)&&r(t/c)};return l?(0,y.jsx)(z,{selector:{number:{min:i,max:a,step:o,mode:`slider`,unit_of_measurement:s}},value:u,label:e,helper:t,onChange:d}):(0,y.jsxs)(M,{children:[(0,y.jsxs)(`span`,{className:`label`,children:[e,`: `,u,s?` ${s}`:``]}),(0,y.jsx)(`input`,{type:`range`,value:u,min:i,max:a,step:o,onChange:e=>d(e.target.value)}),t&&(0,y.jsx)(`small`,{children:t})]})},G=({label:e,hint:t,value:n,onChange:r})=>H()?(0,y.jsx)(z,{selector:{boolean:{}},value:n,label:e,helper:t,onChange:e=>r(!!e)}):(0,y.jsxs)(_e,{children:[(0,y.jsx)(`input`,{type:`checkbox`,checked:n,onChange:e=>r(e.target.checked)}),(0,y.jsxs)(`span`,{children:[e,t&&(0,y.jsx)(`small`,{children:t})]})]}),K=({label:e,hint:t,value:n,onChange:r,options:i})=>H()?(0,y.jsx)(z,{selector:{select:{options:i,mode:`dropdown`}},value:n,label:e,helper:t,required:!0,onChange:e=>typeof e==`string`&&r(e)}):(0,y.jsxs)(M,{children:[(0,y.jsx)(`span`,{className:`label`,children:e}),(0,y.jsx)(`select`,{value:n,onChange:e=>r(e.target.value),children:i.map(e=>(0,y.jsx)(`option`,{value:e.value,children:e.label},e.value))}),t&&(0,y.jsx)(`small`,{children:t})]}),q=({label:e,hint:t,value:n,onChange:r})=>H()?(0,y.jsx)(z,{selector:{icon:{}},value:n,label:e,helper:t,onChange:e=>r(typeof e==`string`?e:``)}):(0,y.jsxs)(M,{children:[(0,y.jsx)(`span`,{className:`label`,children:e}),(0,y.jsxs)(`span`,{className:`with-icon`,children:[(0,y.jsx)(`input`,{type:`text`,value:n,placeholder:`mdi:…`,onChange:e=>r(e.target.value)}),n&&(0,y.jsx)(l,{icon:n,size:`24px`})]}),t&&(0,y.jsx)(`small`,{children:t})]}),J=(0,v.createContext)([]),xe=({children:e})=>{let t=ne(f(e=>{let t={};for(let[n,r]of Object.entries(e.entities))t[n]=r.attributes.friendly_name||n;return t})),n=(0,v.useMemo)(()=>Object.entries(t).map(([e,t])=>({id:e,name:t})).sort((e,t)=>e.id.localeCompare(t.id)),[t]);return(0,y.jsx)(J.Provider,{value:n,children:e})},Se=(e,t={})=>({entity:{...e?.length?{filter:{domain:e}}:{},...t}}),Ce=({value:e,domains:t,onChange:n})=>{let r=(0,v.useContext)(J),i=(0,v.useId)(),a=(0,v.useMemo)(()=>t?.length?r.filter(e=>t.includes(e.id.split(`.`)[0])):r,[r,t]);return(0,y.jsxs)(y.Fragment,{children:[(0,y.jsx)(`input`,{type:`text`,list:i,value:e,placeholder:t?.length?`${t[0]}.…`:`domain.object_id`,onChange:e=>n(e.target.value.trim())}),(0,y.jsx)(`datalist`,{id:i,children:a.map(e=>(0,y.jsx)(`option`,{value:e.id,children:e.name},e.id))})]})},Y=({label:e,hint:t,value:n,onChange:r,domains:i})=>{let a=H(),o=(0,v.useContext)(J),c=s();if(a)return(0,y.jsx)(z,{selector:Se(i),value:n||void 0,label:e,helper:t,onChange:e=>r(typeof e==`string`?e:``)});let l=o.find(e=>e.id===n);return(0,y.jsxs)(M,{children:[(0,y.jsx)(`span`,{className:`label`,children:e}),(0,y.jsx)(Ce,{value:n,domains:i,onChange:r}),n&&(0,y.jsx)(`small`,{children:l?l.name:c(`not_found`)}),t&&(0,y.jsx)(`small`,{children:t})]})},X=({label:e,hint:t,value:n,onChange:r,domains:i,max:a})=>{let o=H(),c=s(),u=e=>r(a===void 0?e:e.slice(0,a));return o?(0,y.jsx)(z,{selector:Se(i,{multiple:!0,reorder:!0}),value:n,label:e,helper:t,onChange:e=>u(Array.isArray(e)?e.filter(e=>typeof e==`string`):[])}):(0,y.jsxs)(M,{as:`div`,children:[(0,y.jsx)(`span`,{className:`label`,children:e}),n.map((e,t)=>(0,y.jsxs)(N,{$columns:`minmax(0, 1fr) auto`,children:[(0,y.jsx)(Ce,{value:e,domains:i,onChange:e=>u(n.map((n,r)=>r===t?e:n))}),(0,y.jsx)(Z,{index:t,length:n.length,onMove:e=>u(F(n,t,e)),onRemove:()=>u(n.filter((e,n)=>n!==t))})]},t)),(a===void 0||n.length<a)&&(0,y.jsx)(P,{type:`button`,className:`add`,onClick:()=>u([...n,``]),title:c(`add`),"aria-label":c(`add`),children:(0,y.jsx)(l,{icon:`mdi:plus`})}),t&&(0,y.jsx)(`small`,{children:t})]})},Z=({index:e,length:t,onMove:n,onRemove:r,onDuplicate:i})=>{let a=s();return(0,y.jsxs)(`span`,{className:`list-controls`,children:[(0,y.jsx)(P,{type:`button`,disabled:e===0,onClick:()=>n(e-1),title:a(`move_up`),"aria-label":a(`move_up`),children:(0,y.jsx)(l,{icon:`mdi:arrow-up`})}),(0,y.jsx)(P,{type:`button`,disabled:e===t-1,onClick:()=>n(e+1),title:a(`move_down`),"aria-label":a(`move_down`),children:(0,y.jsx)(l,{icon:`mdi:arrow-down`})}),i&&(0,y.jsx)(P,{type:`button`,onClick:i,title:a(`duplicate`),"aria-label":a(`duplicate`),children:(0,y.jsx)(l,{icon:`mdi:content-copy`})}),(0,y.jsx)(P,{type:`button`,$danger:!0,onClick:r,title:a(`remove`),"aria-label":a(`remove`),children:(0,y.jsx)(l,{icon:`mdi:delete-outline`})})]})},Q=({title:e,lead:t})=>(0,y.jsxs)(y.Fragment,{children:[(0,y.jsx)(`h2`,{children:e}),t&&(0,y.jsx)(`p`,{className:`lead`,children:t})]}),we=e.span`
  margin-left: 8px;
  padding: 1px 8px;
  border-radius: 999px;
  font-size: 12px;
  font-weight: 400;
  background: var(--secondary-background-color, #282828);
  color: var(--secondary-text-color, #9b9b9b);
`,Te=({dashboards:e})=>{let t=s(),n=p(),[r,i]=(0,v.useState)(null);(0,v.useEffect)(()=>{n?.sendMessagePromise({type:`better_wall_dashboard/users`}).then(e=>i(e.users)).catch(()=>i([]))},[n]);let a=(0,v.useCallback)(async(e,t)=>{if(!n)return;i(n=>n?.map(n=>n.id===e.id?{...n,...t}:n)??null);let r=await n.sendMessagePromise({type:`better_wall_dashboard/save_user`,user_id:e.id,...t});i(t=>t?.map(t=>t.id===e.id?{...t,...r}:t)??null)},[n]);return(0,y.jsxs)(y.Fragment,{children:[(0,y.jsx)(Q,{title:t(`tab_users`),lead:t(`lead_users`)}),r?.map(n=>(0,y.jsxs)(A,{open:!n.is_admin||void 0,children:[(0,y.jsxs)(`summary`,{children:[(0,y.jsx)(l,{className:`icon`,icon:n.is_admin?`mdi:shield-account-outline`:`mdi:tablet`}),(0,y.jsxs)(`span`,{className:`text`,children:[(0,y.jsxs)(`span`,{children:[n.name,n.is_admin&&(0,y.jsx)(we,{children:t(`admin`)}),!n.is_active&&(0,y.jsx)(we,{children:t(`inactive`)})]}),(0,y.jsx)(`span`,{className:`secondary`,children:e.find(e=>e.id===n.dashboard)?.name??n.dashboard})]})]}),(0,y.jsxs)(`div`,{className:`fold-body`,children:[(0,y.jsx)(K,{label:t(`assigned_dashboard`),value:n.dashboard,options:e.map(e=>({value:e.id,label:e.name})),onChange:e=>a(n,{dashboard:e})}),(0,y.jsxs)(N,{children:[(0,y.jsx)(G,{label:t(`kiosk`),hint:t(`kiosk_user_hint`),value:n.kiosk,onChange:e=>a(n,{kiosk:e})}),(0,y.jsx)(G,{label:t(`start_page`),hint:t(`start_page_hint`),value:!!n.default_panel,onChange:e=>a(n,{default_panel:e})})]})]})]},n.id))]})},Ee=({draft:e,update:t})=>{let n=s(),r=n=>t({...e,background:{...e.background,...n}});return(0,y.jsxs)(y.Fragment,{children:[(0,y.jsx)(Q,{title:n(`tab_general`),lead:n(`lead_general`)}),(0,y.jsx)(O,{children:(0,y.jsx)(U,{label:n(`name`),value:e.name,onChange:n=>t({...e,name:n})})}),(0,y.jsxs)(O,{children:[(0,y.jsx)(`h3`,{children:n(`background`)}),(0,y.jsx)(U,{label:n(`background_image`),hint:n(`background_image_hint`),value:e.background.image,onChange:e=>r({image:e})}),(0,y.jsxs)(N,{children:[(0,y.jsx)(be,{label:n(`background_dim`),value:e.background.dim,min:0,max:95,step:5,unit:`%`,scale:100,onChange:e=>r({dim:e})}),(0,y.jsx)(be,{label:n(`background_blur`),value:e.background.blur,min:0,max:40,step:1,unit:`px`,onChange:e=>r({blur:e})})]})]}),(0,y.jsxs)(O,{children:[(0,y.jsx)(`h3`,{children:n(`security_heading`)}),(0,y.jsx)(U,{label:n(`pin`),hint:n(`pin_hint`),type:`password`,value:e.pin??``,onChange:n=>t({...e,pin:n.replace(/\D/g,``).slice(0,8)})})]})]})},De=({item:e})=>{let t=u(e.entity||void 0),n=s(),r=e.name||t?.attributes.friendly_name||e.entity||n(`not_set`);return(0,y.jsxs)(y.Fragment,{children:[(0,y.jsx)(l,{className:`icon`,icon:e.icon||t?.attributes.icon||a(e.entity)}),(0,y.jsxs)(`span`,{className:`text`,children:[(0,y.jsx)(`span`,{children:r}),e.entity&&(0,y.jsx)(`span`,{className:`secondary`,children:e.entity})]})]})},Oe=({items:e,max:t,domains:n,addLabel:r,onChange:i})=>{let a=s(),o=(t,n)=>i(R(e,t,{...e[t],...n}));return(0,y.jsxs)(y.Fragment,{children:[e.length===0&&(0,y.jsxs)(fe,{children:[(0,y.jsx)(l,{icon:`mdi:playlist-plus`}),(0,y.jsx)(`span`,{children:a(`empty_list`)})]}),e.map((t,r)=>(0,y.jsxs)(A,{open:!t.entity||void 0,children:[(0,y.jsxs)(`summary`,{children:[(0,y.jsx)(De,{item:t}),(0,y.jsx)(`span`,{onClick:e=>e.preventDefault(),children:(0,y.jsx)(Z,{index:r,length:e.length,onMove:t=>i(F(e,r,t)),onRemove:()=>i(e.filter((e,t)=>t!==r))})})]}),(0,y.jsxs)(`div`,{className:`fold-body`,children:[(0,y.jsx)(Y,{label:a(`entity`),value:t.entity,domains:n,onChange:e=>o(r,{entity:e})}),(0,y.jsxs)(N,{children:[(0,y.jsx)(U,{label:a(`name`),hint:a(`name_hint`),value:t.name,onChange:e=>o(r,{name:e})}),(0,y.jsx)(q,{label:a(`icon`),value:t.icon,onChange:e=>o(r,{icon:e})})]})]})]},t.id)),(0,y.jsx)(`div`,{children:(0,y.jsxs)(S,{icon:`mdi:plus`,appearance:`filled`,disabled:e.length>=t,onClick:()=>i([...e,{id:I(),entity:``,name:``,icon:``}]),children:[r,` (`,e.length,`/`,t,`)`]})})]})},ke=[`input_boolean`,`switch`,`binary_sensor`],Ae=({draft:e,update:n,part:r})=>{let i=s(),a=e.sidebar,o=t=>n({...e,sidebar:t}),c=(e,t)=>o({...a,[e]:{...a[e],...t}}),l=C.find(e=>e.part===r)?.label??`tab_sidebar`,u=(0,y.jsx)(Q,{title:i(l),lead:i(`lead_${r}`)});switch(r){case`status`:return(0,y.jsxs)(y.Fragment,{children:[u,(0,y.jsxs)(O,{children:[(0,y.jsx)(`h3`,{children:i(`status_icons`)}),(0,y.jsx)(`p`,{children:i(`status_icons_hint`)}),(0,y.jsx)(Y,{label:i(`absence_mode`),value:a.status.absence,domains:ke,onChange:e=>c(`status`,{absence:e})}),(0,y.jsx)(Y,{label:i(`guest_mode`),value:a.status.guest,domains:ke,onChange:e=>c(`status`,{guest:e})}),(0,y.jsx)(Y,{label:i(`night_mode`),value:a.status.night,domains:ke,onChange:e=>c(`status`,{night:e})}),(0,y.jsx)(Y,{label:i(`wifi_signal`),hint:i(`wifi_signal_hint`),value:a.status.wifi_signal,domains:[`sensor`],onChange:e=>c(`status`,{wifi_signal:e})})]}),(0,y.jsxs)(O,{children:[(0,y.jsx)(`h3`,{children:i(`guest_wifi`)}),(0,y.jsx)(Y,{label:i(`guest_qr_image`),hint:i(`guest_qr_image_hint`),value:a.guest_wifi.qr_image,domains:[`image`],onChange:e=>c(`guest_wifi`,{qr_image:e})}),(0,y.jsxs)(N,{children:[(0,y.jsx)(U,{label:i(`network`),value:a.guest_wifi.ssid,onChange:e=>c(`guest_wifi`,{ssid:e})}),(0,y.jsx)(U,{label:i(`password`),type:`password`,value:a.guest_wifi.password,onChange:e=>c(`guest_wifi`,{password:e})})]}),(0,y.jsxs)(N,{children:[(0,y.jsx)(K,{label:i(`security`),value:a.guest_wifi.security,options:[{value:`WPA`,label:`WPA/WPA2/WPA3`},{value:`WEP`,label:`WEP`},{value:`nopass`,label:i(`open_network`)}],onChange:e=>c(`guest_wifi`,{security:e})}),(0,y.jsx)(G,{label:i(`hidden_network`),value:a.guest_wifi.hidden,onChange:e=>c(`guest_wifi`,{hidden:e})})]})]})]});case`climate`:return(0,y.jsxs)(y.Fragment,{children:[u,(0,y.jsxs)(O,{children:[(0,y.jsx)(Y,{label:i(`temperature`),value:a.climate.temperature,domains:[`sensor`],onChange:e=>c(`climate`,{temperature:e})}),(0,y.jsx)(Y,{label:i(`humidity`),value:a.climate.humidity,domains:[`sensor`],onChange:e=>c(`climate`,{humidity:e})}),(0,y.jsx)(W,{label:i(`hours`),value:a.climate.hours,min:1,max:168,unit:`h`,onChange:e=>c(`climate`,{hours:e})})]})]});case`persons`:return(0,y.jsxs)(y.Fragment,{children:[u,(0,y.jsx)(X,{label:i(`persons`),value:a.persons,domains:[`person`],onChange:e=>o({...a,persons:e})})]});case`openings`:return(0,y.jsxs)(y.Fragment,{children:[u,(0,y.jsx)(X,{label:i(`openings`),hint:i(`openings_hint`),value:a.openings,domains:[`binary_sensor`,`cover`,`lock`,`sensor`],onChange:e=>o({...a,openings:e})})]});case`travel`:return(0,y.jsxs)(y.Fragment,{children:[u,(0,y.jsxs)(O,{children:[(0,y.jsx)(Y,{label:i(`travel_sensor`),value:a.travel.entity,domains:[`sensor`],onChange:e=>c(`travel`,{entity:e})}),(0,y.jsx)(U,{label:i(`name`),hint:i(`travel_name_hint`),value:a.travel.name,onChange:e=>c(`travel`,{name:e})})]}),(0,y.jsxs)(O,{children:[(0,y.jsx)(`h3`,{children:i(`map`)}),(0,y.jsx)(U,{label:i(`maps_api_key`),hint:i(`maps_api_key_hint`),type:`password`,value:a.travel.maps_api_key,onChange:e=>c(`travel`,{maps_api_key:e})}),(0,y.jsx)(U,{label:i(`map_url`),hint:i(`map_url_hint`),type:`url`,value:a.travel.map_url,onChange:e=>c(`travel`,{map_url:e})})]})]});case`quick`:return(0,y.jsxs)(y.Fragment,{children:[u,(0,y.jsx)(Oe,{items:a.quick_actions,max:t.quickActions,addLabel:i(`add_quick_action`),onChange:e=>o({...a,quick_actions:e})})]});case`calendar`:return(0,y.jsxs)(y.Fragment,{children:[u,(0,y.jsxs)(O,{children:[(0,y.jsx)(X,{label:i(`calendars`),value:a.calendar.entities,domains:[`calendar`],onChange:e=>c(`calendar`,{entities:e})}),(0,y.jsx)(W,{label:i(`days`),hint:i(`calendar_days_hint`),value:a.calendar.days,min:1,max:t.calendarDays,onChange:e=>c(`calendar`,{days:e})})]})]});case`weather`:return(0,y.jsxs)(y.Fragment,{children:[u,(0,y.jsxs)(O,{children:[(0,y.jsx)(Y,{label:i(`weather_entity`),value:a.weather.entity,domains:[`weather`],onChange:e=>c(`weather`,{entity:e})}),(0,y.jsx)(Y,{label:i(`outdoor_temperature`),hint:i(`outdoor_temperature_hint`),value:a.weather.temperature,domains:[`sensor`],onChange:e=>c(`weather`,{temperature:e})})]})]});case`notifications`:return(0,y.jsxs)(y.Fragment,{children:[u,(0,y.jsxs)(O,{children:[(0,y.jsx)(G,{label:i(`notifications_enabled`),value:a.notifications.enabled,onChange:e=>c(`notifications`,{enabled:e})}),(0,y.jsx)(U,{label:i(`notifications_prefix`),hint:i(`notifications_prefix_hint`),value:a.notifications.prefix,onChange:e=>c(`notifications`,{prefix:e})})]})]});case`system`:return(0,y.jsxs)(y.Fragment,{children:[u,(0,y.jsx)(Oe,{items:a.system,max:t.system,domains:[`sensor`],addLabel:i(`add_statistic`),onChange:e=>o({...a,system:e})})]})}},je=e.textarea`
  min-height: 55vh;
  padding: 12px;
  border-radius: 8px;
  border: 1px solid var(--divider-color, rgba(225, 225, 225, 0.12));
  background: var(--code-editor-background-color, var(--secondary-background-color, #282828));
  color: inherit;
  font-family: var(--ha-font-family-code, ui-monospace, monospace);
  font-size: 13px;
  resize: vertical;
`,Me=e.p`
  margin: 0;
  color: var(--error-color, #db4437);
`,Ne=({draft:e,update:t})=>{let n=s(),[r,i]=(0,v.useState)(()=>JSON.stringify(e,null,2)),[a,o]=(0,v.useState)(!1);return(0,y.jsxs)(y.Fragment,{children:[(0,y.jsx)(Q,{title:n(`tab_json`),lead:n(`json_hint`)}),(0,y.jsx)(je,{value:r,spellCheck:!1,onChange:e=>{i(e.target.value),o(!1)}}),a&&(0,y.jsx)(Me,{children:n(`json_invalid`)}),(0,y.jsx)(`div`,{children:(0,y.jsx)(S,{icon:`mdi:check`,appearance:`filled`,onClick:()=>{try{t({...JSON.parse(r),id:e.id})}catch{o(!0)}},children:n(`apply`)})})]})},Pe=({value:e,onChange:t})=>{let[n,r]=(0,v.useState)(()=>Object.keys(e).length?JSON.stringify(e):``),[i,a]=(0,v.useState)(!1),o=s();return(0,y.jsxs)(M,{children:[(0,y.jsx)(`span`,{className:`label`,children:o(`options_json`)}),(0,y.jsx)(`input`,{type:`text`,value:n,placeholder:`{"hours": 24, "color": "#03a9f4"}`,onChange:e=>{r(e.target.value);try{let n=e.target.value.trim()?JSON.parse(e.target.value):{};if(n&&typeof n==`object`&&!Array.isArray(n)){a(!1),t(n);return}}catch{}a(!0)}}),i&&(0,y.jsx)(`small`,{children:o(`json_invalid`)})]})},Fe=({tile:e})=>{let t=s(),n=u(e.entity||void 0),i=r[e.type],a=e.name||n?.attributes.friendly_name||e.entity||(i?t(i.label):e.type);return(0,y.jsxs)(y.Fragment,{children:[(0,y.jsx)(l,{className:`icon`,icon:e.icon||i?.icon||`mdi:square-rounded-outline`}),(0,y.jsxs)(`span`,{className:`text`,children:[(0,y.jsx)(`span`,{children:a}),(0,y.jsxs)(`span`,{className:`secondary`,children:[i?t(i.label):e.type,` · `,e.w,` × `,e.h]})]})]})},Ie=({tiles:e,columns:n,rows:i,onChange:a})=>{let o=s(),c=(t,n)=>a(R(e,t,{...e[t],...n}));return(0,y.jsxs)(y.Fragment,{children:[e.length===0&&(0,y.jsxs)(fe,{children:[(0,y.jsx)(l,{icon:`mdi:view-grid-plus-outline`}),(0,y.jsx)(`span`,{children:o(`empty_tiles`)})]}),e.map((t,s)=>{let l=r[t.type];return(0,y.jsxs)(A,{open:!t.entity&&l?.needsEntity!==!1||void 0,children:[(0,y.jsxs)(`summary`,{children:[(0,y.jsx)(Fe,{tile:t}),(0,y.jsx)(`span`,{onClick:e=>e.preventDefault(),children:(0,y.jsx)(Z,{index:s,length:e.length,onMove:t=>a(F(e,s,t)),onRemove:()=>a(e.filter((e,t)=>t!==s)),onDuplicate:()=>a([...e.slice(0,s+1),{...t,id:I()},...e.slice(s+1)])})})]}),(0,y.jsxs)(`div`,{className:`fold-body`,children:[(0,y.jsx)(K,{label:o(`type`),value:t.type,options:[...m.map(e=>({value:e.type,label:o(e.label)})),...l?[]:[{value:t.type,label:t.type}]],onChange:e=>{let t=r[e]?.size??[1,1];c(s,{type:e,w:Math.min(t[0],n),h:Math.min(t[1],i)})}}),l?.needsEntity!==!1&&(0,y.jsx)(Y,{label:o(`entity`),value:t.entity,domains:l?.domains,onChange:e=>c(s,{entity:e})}),(0,y.jsxs)(N,{children:[(0,y.jsx)(U,{label:o(`name`),hint:o(`name_hint`),value:t.name,onChange:e=>c(s,{name:e})}),(0,y.jsx)(q,{label:o(`icon`),value:t.icon,onChange:e=>c(s,{icon:e})})]}),(0,y.jsxs)(N,{children:[(0,y.jsx)(W,{label:o(`width`),value:t.w,min:1,max:n,onChange:e=>c(s,{w:Math.max(1,Math.min(n,e))})}),(0,y.jsx)(W,{label:o(`height`),value:t.h,min:1,max:i,onChange:e=>c(s,{h:Math.max(1,Math.min(i,e))})})]}),t.type===`sensor`&&(0,y.jsx)(Pe,{value:t.options,onChange:e=>c(s,{options:e})})]})]},t.id)}),(0,y.jsx)(`div`,{children:(0,y.jsx)(S,{icon:`mdi:plus`,appearance:`filled`,disabled:e.length>=t.tiles,onClick:()=>a([...e,{id:I(),type:`entity`,entity:``,name:``,icon:``,w:1,h:1,options:{}}]),children:o(`add_tile`)})})]})},Le=()=>({id:I(),name:``,icon:``,status:[],columns:2,rows:2,square:!0,tiles:[]}),Re=()=>({id:I(),columns:[75,25],rows:[50,50],sections:[]}),ze=e=>({...L(e),id:I(),sections:e.sections.map(e=>({...L(e),id:I(),tiles:e.tiles.map(e=>({...e,id:I()}))}))}),Be=e=>{let t=e.split(/[,/ ]+/).filter(Boolean).map(Number);return t.length&&t.length<=3&&t.every(e=>Number.isFinite(e)&&e>0)?t:null},Ve=({label:e,hint:t,value:n,onChange:r})=>(0,y.jsx)(U,{label:e,hint:t,value:n.join(`, `),onChange:e=>{let t=Be(e);t&&r(t)}}),He=({draft:e,update:n,open:r})=>{let i=s(),a=e.pages,o=t=>n({...e,pages:t});return(0,y.jsxs)(y.Fragment,{children:[(0,y.jsx)(Q,{title:i(`tab_pages`),lead:i(`lead_pages`)}),(0,y.jsx)(k,{children:a.map((e,n)=>(0,y.jsxs)(`li`,{children:[(0,y.jsxs)(`button`,{type:`button`,className:`open`,onClick:()=>r({kind:`page`,page:n}),children:[(0,y.jsx)(l,{className:`icon`,icon:`mdi:book-open-page-variant-outline`}),(0,y.jsxs)(`span`,{className:`text`,children:[(0,y.jsx)(`span`,{children:i(`page_n`,{n:n+1})}),(0,y.jsx)(`span`,{className:`secondary`,children:e.sections.map(e=>e.name).filter(Boolean).join(` · `)||i(`no_sections`)})]})]}),(0,y.jsx)(Z,{index:n,length:a.length,onMove:e=>o(F(a,n,e)),onDuplicate:a.length<t.pages?()=>o([...a.slice(0,n+1),ze(e),...a.slice(n+1)]):void 0,onRemove:()=>a.length>1&&o(a.filter((e,t)=>t!==n))})]},e.id))}),(0,y.jsx)(`div`,{children:(0,y.jsx)(S,{icon:`mdi:plus`,appearance:`filled`,disabled:a.length>=t.pages,onClick:()=>{o([...a,Re()]),r({kind:`page`,page:a.length})},children:i(`add_page`)})})]})},Ue=({draft:e,update:t,open:n,page:r})=>{let i=s(),a=e.pages[r],o=n=>t({...e,pages:R(e.pages,r,{...a,...n})}),c=a.columns.length*a.rows.length;return(0,y.jsxs)(y.Fragment,{children:[(0,y.jsx)(Q,{title:i(`page_n`,{n:r+1}),lead:i(`lead_page`)}),(0,y.jsxs)(O,{children:[(0,y.jsx)(`h3`,{children:i(`layout`)}),(0,y.jsxs)(N,{children:[(0,y.jsx)(Ve,{label:i(`column_split`),hint:i(`split_hint`),value:a.columns,onChange:e=>o({columns:e})}),(0,y.jsx)(Ve,{label:i(`row_split`),hint:i(`split_hint`),value:a.rows,onChange:e=>o({rows:e})})]})]}),(0,y.jsxs)(O,{children:[(0,y.jsx)(`h3`,{children:i(`sections`)}),(0,y.jsx)(`p`,{children:i(`sections_hint`,{cells:c})}),(0,y.jsx)(k,{children:Array.from({length:c},(e,t)=>{let s=a.sections[t];return s?(0,y.jsxs)(`li`,{children:[(0,y.jsxs)(`button`,{type:`button`,className:`open`,onClick:()=>n({kind:`section`,page:r,section:t}),children:[(0,y.jsx)(l,{className:`icon`,icon:s.icon||`mdi:view-grid-outline`}),(0,y.jsxs)(`span`,{className:`text`,children:[(0,y.jsx)(`span`,{children:s.name||i(`section_n`,{n:t+1})}),(0,y.jsxs)(`span`,{className:`secondary`,children:[i(`tiles_count`,{count:s.tiles.length}),` · `,s.columns,` × `,s.rows]})]})]}),(0,y.jsx)(Z,{index:t,length:a.sections.length,onMove:e=>o({sections:F(a.sections,t,e)}),onRemove:()=>o({sections:a.sections.filter((e,n)=>n!==t)})})]},s.id):(0,y.jsx)(`li`,{children:(0,y.jsxs)(`button`,{type:`button`,className:`open`,onClick:()=>{let e=[...a.sections];for(;e.length<=t;)e.push(Le());o({sections:e}),n({kind:`section`,page:r,section:t})},children:[(0,y.jsx)(l,{className:`icon`,icon:`mdi:plus-box-outline`}),(0,y.jsxs)(`span`,{className:`text`,children:[(0,y.jsx)(`span`,{children:i(`add_section`)}),(0,y.jsx)(`span`,{className:`secondary`,children:i(`cell_n`,{n:t+1})})]})]})},`empty-${t}`)})})]})]})},We=({draft:e,update:n,page:r,section:i})=>{let a=s(),o=e.pages[r],c=o.sections[i],l=t=>n({...e,pages:R(e.pages,r,{...o,sections:R(o.sections,i,{...c,...t})})});return(0,y.jsxs)(y.Fragment,{children:[(0,y.jsx)(Q,{title:c.name||a(`section_n`,{n:i+1}),lead:a(`lead_section`)}),(0,y.jsxs)(O,{children:[(0,y.jsx)(`h3`,{children:a(`section_header`)}),(0,y.jsxs)(N,{children:[(0,y.jsx)(U,{label:a(`name`),value:c.name,onChange:e=>l({name:e})}),(0,y.jsx)(q,{label:a(`icon`),value:c.icon,onChange:e=>l({icon:e})})]}),(0,y.jsx)(X,{label:a(`status_entities`),value:c.status,max:2,domains:[`sensor`,`binary_sensor`],onChange:e=>l({status:e})})]}),(0,y.jsxs)(O,{children:[(0,y.jsx)(`h3`,{children:a(`grid`)}),(0,y.jsxs)(N,{children:[(0,y.jsx)(W,{label:a(`columns`),value:c.columns,min:1,max:t.sectionCells,onChange:e=>l({columns:e})}),(0,y.jsx)(W,{label:a(`rows`),value:c.rows,min:1,max:t.sectionCells,onChange:e=>l({rows:e})})]}),(0,y.jsx)(G,{label:a(`square_cells`),hint:a(`square_cells_hint`),value:c.square,onChange:e=>l({square:e})})]}),(0,y.jsxs)(O,{children:[(0,y.jsx)(`h3`,{children:a(`tiles`)}),(0,y.jsx)(Ie,{tiles:c.tiles,columns:c.columns,rows:c.rows,onChange:e=>l({tiles:e})})]})]})},Ge=({draft:e,update:n,open:r})=>{let i=s(),a=e.buttons,o=t=>n({...e,buttons:t});return(0,y.jsxs)(y.Fragment,{children:[(0,y.jsx)(Q,{title:i(`tab_buttons`),lead:i(`lead_buttons`)}),a.length>0&&(0,y.jsx)(k,{children:a.map((e,t)=>(0,y.jsxs)(`li`,{children:[(0,y.jsxs)(`button`,{type:`button`,className:`open`,onClick:()=>r({kind:`button`,button:t}),children:[(0,y.jsx)(l,{className:`icon`,icon:e.icon||`mdi:gesture-tap`}),(0,y.jsxs)(`span`,{className:`text`,children:[(0,y.jsx)(`span`,{children:e.name||i(`button_n`,{n:t+1})}),(0,y.jsx)(`span`,{className:`secondary`,children:i(`tiles_count`,{count:e.tiles.length})})]})]}),(0,y.jsx)(Z,{index:t,length:a.length,onMove:e=>o(F(a,t,e)),onRemove:()=>o(a.filter((e,n)=>n!==t))})]},e.id))}),(0,y.jsx)(`div`,{children:(0,y.jsxs)(S,{icon:`mdi:plus`,appearance:`filled`,disabled:a.length>=t.buttons,onClick:()=>{o([...a,{id:I(),name:``,icon:`mdi:gesture-tap`,columns:4,tiles:[]}]),r({kind:`button`,button:a.length})},children:[i(`add_button`),` (`,a.length,`/`,t.buttons,`)`]})})]})},Ke=({draft:e,update:n,button:r})=>{let i=s(),a=e.buttons[r],o=t=>n({...e,buttons:R(e.buttons,r,{...a,...t})});return(0,y.jsxs)(y.Fragment,{children:[(0,y.jsx)(Q,{title:a.name||i(`button_n`,{n:r+1}),lead:i(`lead_button`)}),(0,y.jsxs)(O,{children:[(0,y.jsxs)(N,{children:[(0,y.jsx)(U,{label:i(`name`),value:a.name,onChange:e=>o({name:e})}),(0,y.jsx)(q,{label:i(`icon`),value:a.icon,onChange:e=>o({icon:e})})]}),(0,y.jsx)(W,{label:i(`columns`),hint:i(`button_columns_hint`),value:a.columns,min:1,max:t.sectionCells,onChange:e=>o({columns:e})})]}),(0,y.jsxs)(O,{children:[(0,y.jsx)(`h3`,{children:i(`tiles`)}),(0,y.jsx)(Ie,{tiles:a.tiles,columns:a.columns,rows:t.sectionCells,onChange:e=>o({tiles:e})})]})]})},$=[{id:`tab-10`,label:`10″ tablet · 1280×800`,width:1280,height:800},{id:`tab-11`,label:`11″ tablet · 1194×834`,width:1194,height:834},{id:`tab-12`,label:`12″ tablet · 1366×1024`,width:1366,height:1024},{id:`fhd`,label:`Full HD · 1920×1080`,width:1920,height:1080},{id:`small`,label:`7″ panel · 1024×600`,width:1024,height:600}],qe=({view:e,dashboards:t,...n})=>{switch(e.kind){case`general`:return(0,y.jsx)(Ee,{...n});case`sidebar`:return(0,y.jsx)(Ae,{...n,part:e.part});case`pages`:return(0,y.jsx)(He,{...n});case`page`:return(0,y.jsx)(Ue,{...n,page:e.page});case`section`:return(0,y.jsx)(We,{...n,page:e.page,section:e.section});case`buttons`:return(0,y.jsx)(Ge,{...n});case`button`:return(0,y.jsx)(Ke,{...n,button:e.button});case`users`:return(0,y.jsx)(Te,{dashboards:t});case`json`:return(0,y.jsx)(Ne,{...n},n.draft.id)}},Je=()=>{let e=s(),t=p(),{narrow:n}=ee(),[r,a]=(0,v.useState)(null),[o,c]=(0,v.useState)(null),[u,d]=(0,v.useState)(!1),[f,m]=(0,v.useState)(``),[h,te]=(0,v.useState)({kind:`general`}),[ne,g]=(0,v.useState)(()=>new Set),[_,b]=(0,v.useState)(!1),[x,C]=(0,v.useState)(!1),[w,E]=(0,v.useState)(!1),[D,O]=(0,v.useState)($[0].id),[k,A]=(0,v.useState)(!1),fe=$.find(e=>e.id===D)??$[0],j=(0,v.useCallback)((e,t)=>{c(L(e.dashboards[t]??e.dashboards.default)),d(!1)},[]);(0,v.useEffect)(()=>{t?.sendMessagePromise({type:`better_wall_dashboard/document`}).then(e=>{a(e),j(e,`default`)}).catch(e=>m(String(e?.message??e)))},[t,j]),(0,v.useEffect)(()=>{if(!u)return;let e=e=>e.preventDefault();return window.addEventListener(`beforeunload`,e),()=>window.removeEventListener(`beforeunload`,e)},[u]);let he=(0,v.useCallback)(e=>{c(e),d(!0),m(``)},[]),M=(0,v.useCallback)((e,t)=>{te(e),g(n=>new Set([...n,...ie(e),...t?[t]:[]])),b(!1),C(!1),E(!1)},[]),_e=(0,v.useCallback)(e=>{g(t=>{let n=new Set(t);return n.delete(e)||n.add(e),n})},[]),N=()=>!u||window.confirm(`${e(`discard`)}?`),P=async()=>{if(t&&o){m(e(`saving`));try{let n=await t.sendMessagePromise({type:`better_wall_dashboard/save_dashboard`,dashboard:o});a(e=>e&&{...e,dashboards:{...e.dashboards,[n.dashboard.id]:n.dashboard}}),c(L(n.dashboard)),d(!1),m(e(`saved`))}catch(e){m(String(e?.message??e))}}},F=()=>{r&&o&&N()&&(r.dashboards[o.id]?j(r,o.id):j(r,`default`),m(``))},R=e=>{r&&N()&&(j(r,e),M({kind:`general`}))},z=t=>{if(!r||!N())return;let n=L(t??r.dashboards.default);c({...n,id:I(),name:t?`${t.name} (2)`:e(`new_dashboard`)}),d(!0),M({kind:`general`})},ve=async()=>{if(C(!1),!t||!o||!r||o.id==="default"||!window.confirm(e(`confirm_delete`,{name:o.name})))return;r.dashboards[o.id]&&await t.sendMessagePromise({type:`better_wall_dashboard/delete_dashboard`,dashboard_id:o.id});let n={...r.dashboards};delete n[o.id];let i={...r,dashboards:n};a(i),j(i,`default`),M({kind:`general`})},B=(0,v.useMemo)(()=>{let e=Object.values(r?.dashboards??{}).map(e=>({id:e.id,name:e.name}));return o&&!e.some(e=>e.id===o.id)&&e.push({id:o.id,name:o.name}),e.map(e=>e.id===o?.id?{...e,name:o.name}:e)},[r,o]);if(!o)return(0,y.jsxs)(oe,{children:[(0,y.jsx)(se,{"data-narrow":n,children:(0,y.jsx)(`span`,{className:`app-title`,children:e(`editor_title`)})}),(0,y.jsx)(`p`,{style:{padding:24},children:f||e(`loading`)})]});let V=re(h,o),ye=ae(V,{label:t=>e(t),page:t=>e(`page_n`,{n:t+1}),section:(t,n)=>o.pages[t]?.sections[n]?.name||e(`section_n`,{n:n+1}),button:t=>o.buttons[t]?.name||e(`button_n`,{n:t+1})}),H=V.kind===`page`||V.kind===`section`?V.page:void 0,U=V.kind!==`users`;return(0,y.jsx)(xe,{children:(0,y.jsxs)(oe,{children:[(0,y.jsxs)(se,{"data-narrow":n,children:[(0,y.jsx)(T,{type:`button`,className:`only-narrow`,"aria-label":e(`menu`),onClick:e=>i(e.currentTarget),children:(0,y.jsx)(l,{icon:`mdi:menu`})}),(0,y.jsx)(T,{type:`button`,className:`only-drawer`,"aria-label":e(`editor_menu`),onClick:()=>b(!0),children:(0,y.jsx)(l,{icon:`mdi:format-list-bulleted`})}),(0,y.jsxs)(`div`,{className:`titles`,children:[(0,y.jsx)(`span`,{className:`app-title`,children:e(`editor_title`)}),(0,y.jsxs)(`nav`,{"aria-label":e(`editor_menu`),children:[(0,y.jsx)(`button`,{type:`button`,onClick:()=>M({kind:`general`}),children:o.name}),ye.map((e,t)=>(0,y.jsxs)(`span`,{children:[`› `,e.view?(0,y.jsx)(`button`,{type:`button`,onClick:()=>M(e.view),children:e.label}):e.label]},t))]})]}),(0,y.jsx)(`span`,{className:`spacer`}),(0,y.jsx)(T,{type:`button`,className:`only-no-preview`,"aria-pressed":w,"aria-label":e(`preview`),title:e(`preview`),onClick:()=>E(e=>!e),children:(0,y.jsx)(l,{icon:w?`mdi:form-select`:`mdi:tablet-dashboard`})}),(0,y.jsxs)(ce,{children:[(0,y.jsx)(T,{type:`button`,"aria-label":e(`more`),"aria-expanded":x,onClick:()=>C(e=>!e),children:(0,y.jsx)(l,{icon:`mdi:dots-vertical`})}),x&&(0,y.jsxs)(`div`,{className:`menu`,role:`menu`,children:[(0,y.jsxs)(`button`,{type:`button`,role:`menuitem`,onClick:()=>z(),children:[(0,y.jsx)(l,{icon:`mdi:plus`}),` `,e(`new_dashboard`)]}),(0,y.jsxs)(`button`,{type:`button`,role:`menuitem`,onClick:()=>z(o),children:[(0,y.jsx)(l,{icon:`mdi:content-copy`}),` `,e(`duplicate`)]}),(0,y.jsxs)(`button`,{type:`button`,role:`menuitem`,onClick:()=>M({kind:`json`}),children:[(0,y.jsx)(l,{icon:`mdi:code-json`}),` `,e(`edit_json`)]}),(0,y.jsx)(`hr`,{}),(0,y.jsxs)(`button`,{type:`button`,role:`menuitem`,className:`danger`,disabled:o.id==="default",onClick:ve,children:[(0,y.jsx)(l,{icon:`mdi:delete-outline`}),` `,e(`delete_dashboard`)]})]})]})]}),(0,y.jsxs)(le,{children:[(0,y.jsx)(ue,{$open:_,onClick:()=>b(!1)}),(0,y.jsx)(me,{dashboards:B,draft:o,view:V,expanded:ne,open:_,onToggle:_e,onOpen:M,onSwitch:R,onNewDashboard:()=>z()}),(0,y.jsxs)(de,{$hidden:w,children:[(0,y.jsx)(`div`,{className:`screen-body`,children:(0,y.jsx)(qe,{view:V,dashboards:B,draft:o,update:he,open:M})}),U&&(0,y.jsxs)(`div`,{className:`screen-foot`,children:[(0,y.jsx)(`span`,{className:`status`,children:u?e(`unsaved`):f}),(0,y.jsxs)(`span`,{className:`end`,children:[(0,y.jsx)(S,{appearance:`plain`,disabled:!u,onClick:F,children:e(`discard`)}),(0,y.jsx)(S,{appearance:`accent`,icon:`mdi:content-save-outline`,disabled:!u,onClick:P,children:e(`save`)})]})]})]}),(0,y.jsxs)(pe,{$shown:w,children:[(0,y.jsxs)(`div`,{className:`preview-bar`,children:[(0,y.jsx)(`h2`,{children:e(`preview`)}),(0,y.jsx)(K,{label:e(`device`),value:D,options:$.map(e=>({value:e.id,label:e.label})),onChange:O}),(0,y.jsx)(T,{type:`button`,style:{color:`var(--secondary-text-color)`},"aria-label":e(k?`landscape`:`portrait`),title:e(k?`landscape`:`portrait`),onClick:()=>A(e=>!e),children:(0,y.jsx)(l,{icon:k?`mdi:phone-rotate-landscape`:`mdi:phone-rotate-portrait`})})]}),(0,y.jsx)(`div`,{className:`stage`,children:(0,y.jsx)(ge,{dashboard:o,device:fe,portrait:k,page:H})})]})]})]})})};export{Je as default};