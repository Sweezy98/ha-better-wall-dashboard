import{C as e,S as t,_ as n,a as r,b as i,c as a,d as o,f as s,g as c,h as l,i as u,l as d,m as f,n as p,o as ee,p as te,r as ne,s as re,t as m,u as h,v as g,w as _,x as v,y}from"./boot-DJDlLq9f.js";var b=_(e(),1),x=_(t(),1),ie=i.button`
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
`,ae=()=>()=>{},S=({children:e,onClick:t,icon:n,appearance:r=`plain`,danger:i=!1,disabled:a,title:o})=>{let s=(0,b.useSyncExternalStore)(ae,()=>!!customElements.get(`ha-button`)),c=(0,x.jsxs)(x.Fragment,{children:[n&&(0,x.jsx)(`span`,{slot:`start`,style:{display:`inline-flex`},children:(0,x.jsx)(d,{icon:n,size:`18px`})}),e]});return s?(0,b.createElement)(`ha-button`,{appearance:r,variant:i?`danger`:`brand`,disabled:a||void 0,title:o,onClick:t},c):(0,x.jsx)(ie,{type:`button`,$appearance:r,$danger:i,disabled:a,title:o,onClick:t,children:c})},C=[{part:`clock`,icon:`mdi:clock-outline`,label:`clock`},{part:`status`,icon:`mdi:wifi-star`,label:`nav_status`},{part:`climate`,icon:`mdi:home-thermometer-outline`,label:`room_climate`},{part:`persons`,icon:`mdi:account-multiple-outline`,label:`persons`},{part:`openings`,icon:`mdi:window-open-variant`,label:`openings`},{part:`travel`,icon:`mdi:car-clock`,label:`travel_time`},{part:`quick`,icon:`mdi:gesture-tap-button`,label:`quick_actions`},{part:`calendar`,icon:`mdi:calendar-month-outline`,label:`calendar`},{part:`weather`,icon:`mdi:weather-partly-cloudy`,label:`weather`},{part:`notifications`,icon:`mdi:bell-outline`,label:`notifications`},{part:`system`,icon:`mdi:chart-box-outline`,label:`system_stats`}];function oe(e,t){switch(e.kind){case`page`:return e.page<t.pages.length?e:{kind:`pages`};case`section`:{let n=t.pages[e.page];return n?e.section<n.sections.length?e:{kind:`page`,page:e.page}:{kind:`pages`}}case`button`:return e.button<t.buttons.length?e:{kind:`buttons`};default:return e}}function se(e){switch(e.kind){case`sidebar`:return[`sidebar`];case`page`:return[`pages`];case`section`:return[`pages`,`page-${e.page}`];case`button`:return[`buttons`];default:return[]}}function w(e,t){return JSON.stringify(e)===JSON.stringify(t)}function ce(e,t){switch(e.kind){case`general`:return[{label:t.label(`tab_general`)}];case`sidebar`:{let n=C.find(t=>t.part===e.part);return[{label:t.label(`tab_sidebar`)},{label:t.label(n?.label??e.part)}]}case`pages`:return[{label:t.label(`tab_pages`)}];case`page`:return[{label:t.label(`tab_pages`),view:{kind:`pages`}},{label:t.page(e.page)}];case`section`:return[{label:t.label(`tab_pages`),view:{kind:`pages`}},{label:t.page(e.page),view:{kind:`page`,page:e.page}},{label:t.section(e.page,e.section)}];case`buttons`:return[{label:t.label(`tab_buttons`)}];case`button`:return[{label:t.label(`tab_buttons`),view:{kind:`buttons`}},{label:t.button(e.button)}];case`users`:return[{label:t.label(`tab_users`)}];case`json`:return[{label:t.label(`tab_json`)}]}}var le=i.div`
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
`,ue=i.header`
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
`,T=i.button`
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
`,de=i.div`
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
`,fe=i.div`
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
`,E=i.div`
  background: var(--card-background-color, #1c1c1c);
  border-radius: var(--ha-card-border-radius, 12px);
  box-shadow: var(--ha-card-box-shadow, none);
  border: 1px solid var(--ha-card-border-color, var(--divider-color, rgba(225, 225, 225, 0.12)));
  box-sizing: border-box;
  min-width: 0;
  min-height: 0;
`,pe=i(E)`
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
`,me=i.div`
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
`,he=i(E)`
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
`,D=i.section`
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
`,O=i.ul`
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
`,k=i.details`
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
`,A=i.div`
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
`,ge=i(E)`
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
`,j=i.dialog`
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
`,_e=({dashboards:e,draft:t,view:n,expanded:r,open:i,onToggle:a,onOpen:o,onSwitch:s,onNewDashboard:c})=>{let l=g(),u=(e,t,r)=>(0,x.jsx)(`li`,{children:(0,x.jsxs)(`button`,{type:`button`,"aria-current":w(n,e)?`page`:void 0,onClick:()=>o(e),children:[(0,x.jsx)(d,{className:`icon`,icon:r}),(0,x.jsx)(`span`,{className:`grow`,children:t})]})},JSON.stringify(e)),f=(e,t,i,s,c)=>{let l=r.has(e);return(0,x.jsxs)(`li`,{children:[(0,x.jsxs)(`button`,{type:`button`,"aria-expanded":l,"aria-current":w(n,t)?`page`:void 0,onClick:()=>o(t,e),children:[(0,x.jsx)(d,{className:`icon`,icon:s}),(0,x.jsx)(`span`,{className:`grow`,children:i}),(0,x.jsx)(`span`,{className:`twist`,"data-open":l,role:`button`,"aria-label":i,onClick:t=>{t.stopPropagation(),a(e)},children:(0,x.jsx)(d,{icon:`mdi:chevron-right`})})]}),l&&(0,x.jsx)(`ul`,{className:`sub`,children:c})]},e)},p=(0,x.jsxs)(x.Fragment,{children:[u({kind:`general`},l(`tab_general`),`mdi:cog-outline`),f(`sidebar`,{kind:`sidebar`,part:`status`},l(`tab_sidebar`),`mdi:dock-left`,C.map(e=>u({kind:`sidebar`,part:e.part},l(e.label),e.icon))),f(`pages`,{kind:`pages`},l(`tab_pages`),`mdi:book-open-page-variant-outline`,t.pages.map((e,t)=>e.sections.length?f(`page-${t}`,{kind:`page`,page:t},l(`page_n`,{n:t+1}),`mdi:file-outline`,e.sections.map((e,n)=>u({kind:`section`,page:t,section:n},e.name||l(`section_n`,{n:n+1}),e.icon||`mdi:view-grid-outline`))):u({kind:`page`,page:t},l(`page_n`,{n:t+1}),`mdi:file-outline`))),f(`buttons`,{kind:`buttons`},l(`tab_buttons`),`mdi:gesture-tap-button`,t.buttons.map((e,t)=>u({kind:`button`,button:t},e.name||l(`button_n`,{n:t+1}),e.icon||`mdi:gesture-tap`)))]});return(0,x.jsxs)(pe,{$open:i,as:`nav`,"aria-label":l(`editor_title`),children:[(0,x.jsx)(`div`,{className:`heading`,children:l(`nav_dashboards`)}),(0,x.jsxs)(`ul`,{children:[e.map(e=>e.id===t.id?(0,x.jsxs)(`li`,{children:[(0,x.jsxs)(`button`,{type:`button`,"aria-expanded":!0,onClick:()=>o({kind:`general`}),children:[(0,x.jsx)(d,{className:`icon`,icon:`mdi:tablet-dashboard`}),(0,x.jsx)(`span`,{className:`grow`,children:(0,x.jsx)(`strong`,{children:t.name})})]}),(0,x.jsx)(`ul`,{className:`sub`,children:p})]},e.id):(0,x.jsx)(`li`,{children:(0,x.jsxs)(`button`,{type:`button`,onClick:()=>s(e.id),children:[(0,x.jsx)(d,{className:`icon`,icon:`mdi:tablet-dashboard`}),(0,x.jsx)(`span`,{className:`grow`,children:e.name})]})},e.id)),(0,x.jsx)(`li`,{className:`add`,children:(0,x.jsxs)(`button`,{type:`button`,onClick:c,children:[(0,x.jsx)(d,{className:`icon`,icon:`mdi:plus`}),(0,x.jsx)(`span`,{className:`grow`,children:l(`new_dashboard`)})]})})]}),(0,x.jsx)(`div`,{className:`heading`,children:l(`nav_house`)}),(0,x.jsx)(`ul`,{children:u({kind:`users`},l(`tab_users`),`mdi:account-multiple-outline`)})]})},M=i.div`
  position: relative;
  width: 100%;
  height: 100%;
  min-height: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
`,ve=i.div`
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
`,ye=(0,b.memo)(({dashboard:e,device:t,portrait:n,page:r})=>{let i=g(),a=(0,b.useRef)(null),[o,s]=(0,b.useState)(.5),c=n?t.height:t.width,l=n?t.width:t.height;(0,b.useLayoutEffect)(()=>{let e=a.current;if(!e)return;let t=()=>{let t=Math.min((e.clientWidth-40)/c,(e.clientHeight-40)/l);s(Math.max(.1,Math.min(1,Math.floor(t*1e3)/1e3)))};t();let n=new ResizeObserver(t);return n.observe(e),()=>n.disconnect()},[c,l]);let d=(0,b.useMemo)(()=>({dashboard:e,dashboards:[],kiosk:!1,is_admin:!0,pin_required:!1}),[e]);return(0,x.jsx)(M,{ref:a,"aria-label":i(`preview`),children:(0,x.jsx)(ve,{style:{width:c,height:l,transform:`translate(-50%, -50%) scale(${o})`},children:(0,x.jsx)(h,{view:d,focusPage:r,children:(0,x.jsx)(u,{})})})})}),N=i.label`
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
`,be=i.label`
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
`,P=i.div`
  display: grid;
  grid-template-columns: ${({$columns:e})=>e??`repeat(auto-fit, minmax(220px, 1fr))`};
  gap: 16px;
  align-items: start;
`,F=i.button`
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
`;function I(e,t,n){if(n<0||n>=e.length)return e;let r=[...e],[i]=r.splice(t,1);return r.splice(n,0,i),r}function L(){let e=new Uint8Array(6);return crypto.getRandomValues(e),Array.from(e,e=>e.toString(16).padStart(2,`0`)).join(``)}var R=e=>JSON.parse(JSON.stringify(e)),z=(e,t,n)=>e.map((e,r)=>r===t?n:e),B=({selector:e,value:t,onChange:n,label:r,helper:i,required:a=!1})=>{let o=(0,b.useRef)(null),s=(0,b.useRef)(null),c=(0,b.useRef)(n);(0,b.useEffect)(()=>{c.current=n}),(0,b.useEffect)(()=>{let e=document.createElement(`ha-selector`);e.hass=m();let t=t=>{t.stopPropagation();let n=t.detail.value;e.value=n,c.current(n)};e.addEventListener(`value-changed`,t),o.current?.append(e),s.current=e;let n=p(t=>{e.hass=t});return()=>{n(),e.removeEventListener(`value-changed`,t),e.remove(),s.current=null}},[]);let l=JSON.stringify(e);return(0,b.useEffect)(()=>{let e=s.current;e&&(e.selector=JSON.parse(l),e.label=r,e.helper=i,e.required=a)},[l,r,i,a]),(0,b.useEffect)(()=>{let e=s.current;e&&e.value!==t&&(e.value=t)},[t]),(0,x.jsx)(`div`,{ref:o,className:`ha-field`})},xe=[`ha-selector`,`ha-entity-picker`,`ha-switch`,`ha-icon-picker`],Se=null;function V(){return xe.every(e=>customElements.get(e))}function H(){return V()?Promise.resolve(!0):(Se??=(async()=>{let e=window.loadCardHelpers;if(!e)return!1;try{let t=await e();for(let e of[{type:`entities`,entities:[]},{type:`button`}])try{await(await t.createCardElement(e)).constructor.getConfigElement?.()}catch{}}catch{return!1}return!!customElements.get(`ha-selector`)})(),Se)}function U(){let[e,t]=(0,b.useState)(V),n=(0,b.useSyncExternalStore)(p,()=>m()!==null);return(0,b.useEffect)(()=>{if(e||!n)return;let r=!0;return H().then(e=>r&&e&&t(!0)),()=>{r=!1}},[e,n]),e&&n}var W=({label:e,hint:t,value:n,onChange:r,placeholder:i,type:a=`text`})=>U()?(0,x.jsx)(B,{selector:{text:a===`text`?{}:{type:a}},value:n,label:e,helper:t,onChange:e=>r(typeof e==`string`?e:``)}):(0,x.jsxs)(N,{children:[(0,x.jsx)(`span`,{className:`label`,children:e}),(0,x.jsx)(`input`,{type:a,value:n,placeholder:i,onChange:e=>r(e.target.value)}),t&&(0,x.jsx)(`small`,{children:t})]}),G=({label:e,hint:t,value:n,onChange:r,min:i,max:a,step:o=1,unit:s})=>{let c=U(),l=e=>{let t=Number(e);e!==``&&e!==null&&Number.isFinite(t)&&r(t)};return c?(0,x.jsx)(B,{selector:{number:{min:i,max:a,step:o,mode:`box`,unit_of_measurement:s}},value:n,label:e,helper:t,onChange:l}):(0,x.jsxs)(N,{children:[(0,x.jsx)(`span`,{className:`label`,children:e}),(0,x.jsx)(`input`,{type:`number`,value:n,min:i,max:a,step:o,onChange:e=>l(e.target.value)}),t&&(0,x.jsx)(`small`,{children:t})]})},Ce=({label:e,hint:t,value:n,onChange:r,min:i,max:a,step:o,unit:s,scale:c=1})=>{let l=U(),u=Math.round(n*c*1e3)/1e3,d=e=>{let t=Number(e);Number.isFinite(t)&&r(t/c)};return l?(0,x.jsx)(B,{selector:{number:{min:i,max:a,step:o,mode:`slider`,unit_of_measurement:s}},value:u,label:e,helper:t,onChange:d}):(0,x.jsxs)(N,{children:[(0,x.jsxs)(`span`,{className:`label`,children:[e,`: `,u,s?` ${s}`:``]}),(0,x.jsx)(`input`,{type:`range`,value:u,min:i,max:a,step:o,onChange:e=>d(e.target.value)}),t&&(0,x.jsx)(`small`,{children:t})]})},K=({label:e,hint:t,value:n,onChange:r})=>U()?(0,x.jsx)(B,{selector:{boolean:{}},value:n,label:e,helper:t,onChange:e=>r(!!e)}):(0,x.jsxs)(be,{children:[(0,x.jsx)(`input`,{type:`checkbox`,checked:n,onChange:e=>r(e.target.checked)}),(0,x.jsxs)(`span`,{children:[e,t&&(0,x.jsx)(`small`,{children:t})]})]}),q=({label:e,hint:t,value:n,onChange:r,options:i})=>U()?(0,x.jsx)(B,{selector:{select:{options:i,mode:`dropdown`}},value:n,label:e,helper:t,required:!0,onChange:e=>typeof e==`string`&&r(e)}):(0,x.jsxs)(N,{children:[(0,x.jsx)(`span`,{className:`label`,children:e}),(0,x.jsx)(`select`,{value:n,onChange:e=>r(e.target.value),children:i.map(e=>(0,x.jsx)(`option`,{value:e.value,children:e.label},e.value))}),t&&(0,x.jsx)(`small`,{children:t})]}),J=({label:e,hint:t,value:n,onChange:r})=>U()?(0,x.jsx)(B,{selector:{icon:{}},value:n,label:e,helper:t,onChange:e=>r(typeof e==`string`?e:``)}):(0,x.jsxs)(N,{children:[(0,x.jsx)(`span`,{className:`label`,children:e}),(0,x.jsxs)(`span`,{className:`with-icon`,children:[(0,x.jsx)(`input`,{type:`text`,value:n,placeholder:`mdi:…`,onChange:e=>r(e.target.value)}),n&&(0,x.jsx)(d,{icon:n,size:`24px`})]}),t&&(0,x.jsx)(`small`,{children:t})]}),we=({label:e,hint:t,value:n,onChange:r,accept:i})=>{let a=U(),o=(0,b.useMemo)(()=>n.startsWith(`media-source://`)?{media_content_id:n,media_content_type:i[0]}:void 0,[n,i]);return a?(0,x.jsx)(B,{selector:{media:{accept:i}},value:o,label:e,helper:t,onChange:e=>r(e?.media_content_id??``)}):(0,x.jsx)(W,{label:e,hint:t,value:n,onChange:r})},Te=(0,b.createContext)([]),Ee=({children:e})=>{let t=v(ee(e=>{let t={};for(let[n,r]of Object.entries(e.entities))t[n]=r.attributes.friendly_name||n;return t})),n=(0,b.useMemo)(()=>Object.entries(t).map(([e,t])=>({id:e,name:t})).sort((e,t)=>e.id.localeCompare(t.id)),[t]);return(0,x.jsx)(Te.Provider,{value:n,children:e})},De=(e,t={})=>({entity:{...e?.length?{filter:{domain:e}}:{},...t}}),Oe=({value:e,domains:t,onChange:n})=>{let r=(0,b.useContext)(Te),i=(0,b.useId)(),a=(0,b.useMemo)(()=>t?.length?r.filter(e=>t.includes(e.id.split(`.`)[0])):r,[r,t]);return(0,x.jsxs)(x.Fragment,{children:[(0,x.jsx)(`input`,{type:`text`,list:i,value:e,placeholder:t?.length?`${t[0]}.…`:`domain.object_id`,onChange:e=>n(e.target.value.trim())}),(0,x.jsx)(`datalist`,{id:i,children:a.map(e=>(0,x.jsx)(`option`,{value:e.id,children:e.name},e.id))})]})},Y=({label:e,hint:t,value:n,onChange:r,domains:i})=>{let a=U(),o=(0,b.useContext)(Te),s=g();if(a)return(0,x.jsx)(B,{selector:De(i),value:n||void 0,label:e,helper:t,onChange:e=>r(typeof e==`string`?e:``)});let c=o.find(e=>e.id===n);return(0,x.jsxs)(N,{children:[(0,x.jsx)(`span`,{className:`label`,children:e}),(0,x.jsx)(Oe,{value:n,domains:i,onChange:r}),n&&(0,x.jsx)(`small`,{children:c?c.name:s(`not_found`)}),t&&(0,x.jsx)(`small`,{children:t})]})},X=({label:e,hint:t,value:n,onChange:r,domains:i,max:a})=>{let o=U(),s=g(),c=e=>r(a===void 0?e:e.slice(0,a));return o?(0,x.jsx)(B,{selector:De(i,{multiple:!0,reorder:!0}),value:n,label:e,helper:t,onChange:e=>c(Array.isArray(e)?e.filter(e=>typeof e==`string`):[])}):(0,x.jsxs)(N,{as:`div`,children:[(0,x.jsx)(`span`,{className:`label`,children:e}),n.map((e,t)=>(0,x.jsxs)(P,{$columns:`minmax(0, 1fr) auto`,children:[(0,x.jsx)(Oe,{value:e,domains:i,onChange:e=>c(n.map((n,r)=>r===t?e:n))}),(0,x.jsx)(Z,{index:t,length:n.length,onMove:e=>c(I(n,t,e)),onRemove:()=>c(n.filter((e,n)=>n!==t))})]},t)),(a===void 0||n.length<a)&&(0,x.jsx)(F,{type:`button`,className:`add`,onClick:()=>c([...n,``]),title:s(`add`),"aria-label":s(`add`),children:(0,x.jsx)(d,{icon:`mdi:plus`})}),t&&(0,x.jsx)(`small`,{children:t})]})},Z=({index:e,length:t,onMove:n,onRemove:r,onDuplicate:i})=>{let a=g();return(0,x.jsxs)(`span`,{className:`list-controls`,children:[(0,x.jsx)(F,{type:`button`,disabled:e===0,onClick:()=>n(e-1),title:a(`move_up`),"aria-label":a(`move_up`),children:(0,x.jsx)(d,{icon:`mdi:arrow-up`})}),(0,x.jsx)(F,{type:`button`,disabled:e===t-1,onClick:()=>n(e+1),title:a(`move_down`),"aria-label":a(`move_down`),children:(0,x.jsx)(d,{icon:`mdi:arrow-down`})}),i&&(0,x.jsx)(F,{type:`button`,onClick:i,title:a(`duplicate`),"aria-label":a(`duplicate`),children:(0,x.jsx)(d,{icon:`mdi:content-copy`})}),(0,x.jsx)(F,{type:`button`,$danger:!0,onClick:r,title:a(`remove`),"aria-label":a(`remove`),children:(0,x.jsx)(d,{icon:`mdi:delete-outline`})})]})},Q=({title:e,lead:t})=>(0,x.jsxs)(x.Fragment,{children:[(0,x.jsx)(`h2`,{children:e}),t&&(0,x.jsx)(`p`,{className:`lead`,children:t})]}),ke=i.span`
  margin-left: 8px;
  padding: 1px 8px;
  border-radius: 999px;
  font-size: 12px;
  font-weight: 400;
  background: var(--secondary-background-color, #282828);
  color: var(--secondary-text-color, #9b9b9b);
`,Ae=({dashboards:e})=>{let t=g(),n=c(),[r,i]=(0,b.useState)(null);(0,b.useEffect)(()=>{n?.sendMessagePromise({type:`better_wall_dashboard/users`}).then(e=>i(e.users)).catch(()=>i([]))},[n]);let a=(0,b.useCallback)(async(e,t)=>{if(!n)return;i(n=>n?.map(n=>n.id===e.id?{...n,...t}:n)??null);let r=await n.sendMessagePromise({type:`better_wall_dashboard/save_user`,user_id:e.id,...t});i(t=>t?.map(t=>t.id===e.id?{...t,...r}:t)??null)},[n]);return(0,x.jsxs)(x.Fragment,{children:[(0,x.jsx)(Q,{title:t(`tab_users`),lead:t(`lead_users`)}),r?.map(n=>(0,x.jsxs)(k,{open:!n.is_admin||void 0,children:[(0,x.jsxs)(`summary`,{children:[(0,x.jsx)(d,{className:`icon`,icon:n.is_admin?`mdi:shield-account-outline`:`mdi:tablet`}),(0,x.jsxs)(`span`,{className:`text`,children:[(0,x.jsxs)(`span`,{children:[n.name,n.is_admin&&(0,x.jsx)(ke,{children:t(`admin`)}),!n.is_active&&(0,x.jsx)(ke,{children:t(`inactive`)})]}),(0,x.jsx)(`span`,{className:`secondary`,children:e.find(e=>e.id===n.dashboard)?.name??n.dashboard})]})]}),(0,x.jsxs)(`div`,{className:`fold-body`,children:[(0,x.jsx)(q,{label:t(`assigned_dashboard`),value:n.dashboard,options:e.map(e=>({value:e.id,label:e.name})),onChange:e=>a(n,{dashboard:e})}),(0,x.jsxs)(P,{children:[(0,x.jsx)(K,{label:t(`kiosk`),hint:t(`kiosk_user_hint`),value:n.kiosk,onChange:e=>a(n,{kiosk:e})}),(0,x.jsx)(K,{label:t(`start_page`),hint:t(`start_page_hint`),value:!!n.default_panel,onChange:e=>a(n,{default_panel:e})})]}),(0,x.jsx)(K,{label:t(`sidebar_only`),hint:t(`sidebar_only_hint`),value:n.sidebar_only,onChange:e=>a(n,{sidebar_only:e})})]})]},n.id))]})},je=`/better_wall_dashboard/static/icon.png`,Me=i(j)`
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
`,Ne=({open:e,onClose:t})=>{let n=g(),r=c(),i=(0,b.useRef)(null),[a,l]=(0,b.useState)(null),u=o();(0,b.useEffect)(()=>{let t=i.current;t&&(e&&!t.open&&t.showModal(),!e&&t.open&&t.close())}),(0,b.useEffect)(()=>{e&&r?.sendMessagePromise({type:`better_wall_dashboard/version`}).then(l).catch(()=>void 0)},[e,r]);let f=!!(u&&a&&a.app!==u);return(0,x.jsxs)(Me,{ref:i,tabIndex:-1,onClose:()=>e&&t(),onClick:e=>e.target===e.currentTarget&&t(),children:[(0,x.jsxs)(`div`,{className:`head`,children:[(0,x.jsx)(`img`,{src:je,alt:``}),(0,x.jsx)(`h2`,{children:`Better Wall Dashboard`})]}),(0,x.jsx)(`p`,{className:`muted`,children:n(`about_blurb`)}),(0,x.jsx)(`table`,{children:(0,x.jsxs)(`tbody`,{children:[(0,x.jsxs)(`tr`,{children:[(0,x.jsx)(`th`,{children:n(`about_version`)}),(0,x.jsx)(`td`,{children:a?.version??`–`})]}),(0,x.jsxs)(`tr`,{children:[(0,x.jsx)(`th`,{children:n(`about_page`)}),(0,x.jsx)(`td`,{children:u?u.slice(0,12):`–`})]})]})}),f&&(0,x.jsxs)(x.Fragment,{children:[(0,x.jsx)(`p`,{children:n(`update_available`)}),(0,x.jsx)(S,{appearance:`filled`,icon:`mdi:reload`,onClick:()=>{let e=te(),t=null;if(e&&a){let n=new URL(e);n.searchParams.set(`v`,a.app),t=n.toString()}s(t)},children:n(`reload`)})]}),(a?.documentation||a?.issues)&&(0,x.jsxs)(`p`,{children:[a.documentation&&(0,x.jsx)(`a`,{href:a.documentation,target:`_blank`,rel:`noopener noreferrer`,children:n(`about_repo`)}),a.documentation&&a.issues&&` · `,a.issues&&(0,x.jsx)(`a`,{href:a.issues,target:`_blank`,rel:`noopener noreferrer`,children:n(`about_issues`)})]}),(0,x.jsx)(F,{type:`button`,className:`shut`,"aria-label":n(`close`),title:n(`close`),onClick:t,children:(0,x.jsx)(d,{icon:`mdi:close`})})]})},Pe=({request:e,onAnswer:t})=>{let n=g(),r=(0,b.useRef)(null);return(0,b.useEffect)(()=>{let t=r.current;t&&(e&&!t.open&&t.showModal(),!e&&t.open&&t.close())}),(0,x.jsx)(j,{ref:r,role:`alertdialog`,tabIndex:-1,onCancel:e=>{e.preventDefault(),t(!1)},onClick:e=>e.target===e.currentTarget&&t(!1),children:e&&(0,x.jsxs)(x.Fragment,{children:[(0,x.jsx)(`h2`,{children:e.title}),e.text&&(0,x.jsx)(`p`,{className:`muted`,children:e.text}),(0,x.jsxs)(`div`,{className:`actions`,children:[(0,x.jsx)(S,{appearance:`plain`,onClick:()=>t(!1),children:n(`cancel`)}),(0,x.jsx)(S,{appearance:`accent`,danger:e.danger,onClick:()=>t(!0),children:e.confirm})]})]})})};function Fe(){let[e,t]=(0,b.useState)(null);return{confirm:(0,b.useCallback)(e=>new Promise(n=>t({...e,resolve:n})),[]),dialog:(0,x.jsx)(Pe,{request:e,onAnswer:n=>{e?.resolve(n),t(null)}})}}function Ie(e){let t=document.querySelector(`home-assistant`);return t?(t.dispatchEvent(new CustomEvent(`hass-notification`,{bubbles:!0,composed:!0,detail:{message:e}})),!0):!1}var Le=({draft:e,update:t})=>{let n=g(),r=n=>t({...e,background:{...e.background,...n}});return(0,x.jsxs)(x.Fragment,{children:[(0,x.jsx)(Q,{title:n(`tab_general`),lead:n(`lead_general`)}),(0,x.jsx)(D,{children:(0,x.jsx)(W,{label:n(`name`),value:e.name,onChange:n=>t({...e,name:n})})}),(0,x.jsxs)(D,{children:[(0,x.jsx)(`h3`,{children:n(`background`)}),(0,x.jsx)(we,{label:n(`background_media`),hint:n(`background_media_hint`),accept:[`image/*`],value:e.background.image,onChange:e=>r({image:e})}),(0,x.jsx)(W,{label:n(`background_image`),hint:n(`background_image_hint`),type:`url`,value:e.background.image.startsWith(`media-source://`)?``:e.background.image,onChange:e=>r({image:e})}),(0,x.jsxs)(P,{children:[(0,x.jsx)(Ce,{label:n(`background_dim`),value:e.background.dim,min:0,max:95,step:5,unit:`%`,scale:100,onChange:e=>r({dim:e})}),(0,x.jsx)(Ce,{label:n(`background_blur`),value:e.background.blur,min:0,max:40,step:1,unit:`px`,onChange:e=>r({blur:e})})]})]}),(0,x.jsxs)(D,{children:[(0,x.jsx)(`h3`,{children:n(`security_heading`)}),(0,x.jsx)(W,{label:n(`pin`),hint:n(`pin_hint`),type:`password`,value:e.pin??``,onChange:n=>t({...e,pin:n.replace(/\D/g,``).slice(0,8)})})]})]})},Re=({item:e})=>{let t=n(e.entity||void 0),r=g(),i=e.name||t?.attributes.friendly_name||e.entity||r(`not_set`);return(0,x.jsxs)(x.Fragment,{children:[(0,x.jsx)(d,{className:`icon`,icon:e.icon||t?.attributes.icon||l(e.entity)}),(0,x.jsxs)(`span`,{className:`text`,children:[(0,x.jsx)(`span`,{children:i}),e.entity&&(0,x.jsx)(`span`,{className:`secondary`,children:e.entity})]})]})},ze=({items:e,max:t,domains:n,addLabel:r,onChange:i})=>{let a=g(),o=(t,n)=>i(z(e,t,{...e[t],...n}));return(0,x.jsxs)(x.Fragment,{children:[e.length===0&&(0,x.jsxs)(A,{children:[(0,x.jsx)(d,{icon:`mdi:playlist-plus`}),(0,x.jsx)(`span`,{children:a(`empty_list`)})]}),e.map((t,r)=>(0,x.jsxs)(k,{open:!t.entity||void 0,children:[(0,x.jsxs)(`summary`,{children:[(0,x.jsx)(Re,{item:t}),(0,x.jsx)(`span`,{onClick:e=>e.preventDefault(),children:(0,x.jsx)(Z,{index:r,length:e.length,onMove:t=>i(I(e,r,t)),onRemove:()=>i(e.filter((e,t)=>t!==r))})})]}),(0,x.jsxs)(`div`,{className:`fold-body`,children:[(0,x.jsx)(Y,{label:a(`entity`),value:t.entity,domains:n,onChange:e=>o(r,{entity:e})}),(0,x.jsxs)(P,{children:[(0,x.jsx)(W,{label:a(`name`),hint:a(`name_hint`),value:t.name,onChange:e=>o(r,{name:e})}),(0,x.jsx)(J,{label:a(`icon`),value:t.icon,onChange:e=>o(r,{icon:e})})]})]})]},t.id)),(0,x.jsx)(`div`,{children:(0,x.jsxs)(S,{icon:`mdi:plus`,appearance:`filled`,disabled:e.length>=t,onClick:()=>i([...e,{id:L(),entity:``,name:``,icon:``}]),children:[r,` (`,e.length,`/`,t,`)`]})})]})},Be=[`input_boolean`,`switch`,`binary_sensor`],Ve=({draft:e,update:t,part:n})=>{let i=g(),a=e.sidebar,o=n=>t({...e,sidebar:n}),s=(e,t)=>o({...a,[e]:{...a[e],...t}}),c=C.find(e=>e.part===n)?.label??`tab_sidebar`,l=(0,x.jsx)(Q,{title:i(c),lead:i(`lead_${n}`)});switch(n){case`clock`:return(0,x.jsxs)(x.Fragment,{children:[l,(0,x.jsx)(D,{children:(0,x.jsx)(q,{label:i(`clock_style`),value:a.clock?.style??`digital`,options:[{value:`digital`,label:i(`clock_digital`)},{value:`analog`,label:i(`clock_analog`)}],onChange:e=>s(`clock`,{style:e})})})]});case`status`:return(0,x.jsxs)(x.Fragment,{children:[l,(0,x.jsxs)(D,{children:[(0,x.jsx)(`h3`,{children:i(`status_icons`)}),(0,x.jsx)(`p`,{children:i(`status_icons_hint`)}),(0,x.jsx)(ze,{items:a.status.icons??[],max:r.statusIcons,domains:Be,addLabel:i(`add_status_icon`),onChange:e=>s(`status`,{icons:e})})]}),(0,x.jsxs)(D,{children:[(0,x.jsx)(`h3`,{children:i(`wifi_heading`)}),(0,x.jsx)(Y,{label:i(`wifi_signal`),hint:i(`wifi_signal_hint`),value:a.status.wifi_signal,domains:[`sensor`],onChange:e=>s(`status`,{wifi_signal:e})})]}),(0,x.jsxs)(D,{children:[(0,x.jsx)(`h3`,{children:i(`guest_wifi`)}),(0,x.jsx)(Y,{label:i(`guest_qr_image`),hint:i(`guest_qr_image_hint`),value:a.guest_wifi.qr_image,domains:[`image`],onChange:e=>s(`guest_wifi`,{qr_image:e})}),(0,x.jsxs)(P,{children:[(0,x.jsx)(W,{label:i(`network`),value:a.guest_wifi.ssid,onChange:e=>s(`guest_wifi`,{ssid:e})}),(0,x.jsx)(W,{label:i(`password`),type:`password`,value:a.guest_wifi.password,onChange:e=>s(`guest_wifi`,{password:e})})]}),(0,x.jsxs)(P,{children:[(0,x.jsx)(q,{label:i(`security`),value:a.guest_wifi.security,options:[{value:`WPA`,label:`WPA/WPA2/WPA3`},{value:`WEP`,label:`WEP`},{value:`nopass`,label:i(`open_network`)}],onChange:e=>s(`guest_wifi`,{security:e})}),(0,x.jsx)(K,{label:i(`hidden_network`),value:a.guest_wifi.hidden,onChange:e=>s(`guest_wifi`,{hidden:e})})]})]})]});case`climate`:return(0,x.jsxs)(x.Fragment,{children:[l,(0,x.jsxs)(D,{children:[(0,x.jsx)(Y,{label:i(`temperature`),value:a.climate.temperature,domains:[`sensor`],onChange:e=>s(`climate`,{temperature:e})}),(0,x.jsx)(Y,{label:i(`humidity`),value:a.climate.humidity,domains:[`sensor`],onChange:e=>s(`climate`,{humidity:e})}),(0,x.jsx)(G,{label:i(`hours`),value:a.climate.hours,min:1,max:168,unit:`h`,onChange:e=>s(`climate`,{hours:e})})]})]});case`persons`:return(0,x.jsxs)(x.Fragment,{children:[l,(0,x.jsx)(X,{label:i(`persons`),value:a.persons,domains:[`person`],onChange:e=>o({...a,persons:e})})]});case`openings`:return(0,x.jsxs)(x.Fragment,{children:[l,(0,x.jsx)(X,{label:i(`openings`),hint:i(`openings_hint`),value:a.openings,domains:[`binary_sensor`,`cover`,`lock`,`sensor`],onChange:e=>o({...a,openings:e})})]});case`travel`:return(0,x.jsxs)(x.Fragment,{children:[l,(0,x.jsxs)(D,{children:[(0,x.jsx)(Y,{label:i(`travel_sensor`),value:a.travel.entity,domains:[`sensor`],onChange:e=>s(`travel`,{entity:e})}),(0,x.jsx)(W,{label:i(`name`),hint:i(`travel_name_hint`),value:a.travel.name,onChange:e=>s(`travel`,{name:e})})]}),(0,x.jsxs)(D,{children:[(0,x.jsx)(`h3`,{children:i(`map`)}),(0,x.jsx)(W,{label:i(`maps_api_key`),hint:i(`maps_api_key_hint`),type:`password`,value:a.travel.maps_api_key,onChange:e=>s(`travel`,{maps_api_key:e})}),(0,x.jsx)(W,{label:i(`map_url`),hint:i(`map_url_hint`),type:`url`,value:a.travel.map_url,onChange:e=>s(`travel`,{map_url:e})})]})]});case`quick`:return(0,x.jsxs)(x.Fragment,{children:[l,(0,x.jsx)(ze,{items:a.quick_actions,max:r.quickActions,addLabel:i(`add_quick_action`),onChange:e=>o({...a,quick_actions:e})})]});case`calendar`:return(0,x.jsxs)(x.Fragment,{children:[l,(0,x.jsxs)(D,{children:[(0,x.jsx)(X,{label:i(`calendars`),value:a.calendar.entities,domains:[`calendar`],onChange:e=>s(`calendar`,{entities:e})}),(0,x.jsx)(G,{label:i(`days`),hint:i(`calendar_days_hint`),value:a.calendar.days,min:1,max:r.calendarDays,onChange:e=>s(`calendar`,{days:e})})]})]});case`weather`:return(0,x.jsxs)(x.Fragment,{children:[l,(0,x.jsxs)(D,{children:[(0,x.jsx)(Y,{label:i(`weather_entity`),value:a.weather.entity,domains:[`weather`],onChange:e=>s(`weather`,{entity:e})}),(0,x.jsx)(Y,{label:i(`outdoor_temperature`),hint:i(`outdoor_temperature_hint`),value:a.weather.temperature,domains:[`sensor`],onChange:e=>s(`weather`,{temperature:e})})]})]});case`notifications`:return(0,x.jsxs)(x.Fragment,{children:[l,(0,x.jsxs)(D,{children:[(0,x.jsx)(K,{label:i(`notifications_enabled`),value:a.notifications.enabled,onChange:e=>s(`notifications`,{enabled:e})}),(0,x.jsx)(W,{label:i(`notifications_prefix`),hint:i(`notifications_prefix_hint`),value:a.notifications.prefix,onChange:e=>s(`notifications`,{prefix:e})})]}),(0,x.jsxs)(D,{children:[(0,x.jsx)(`h3`,{children:i(`settings`)}),(0,x.jsx)(K,{label:i(`settings_enabled`),hint:i(`settings_enabled_hint`),value:a.settings?.enabled!==!1,onChange:e=>s(`settings`,{enabled:e})})]})]});case`system`:return(0,x.jsxs)(x.Fragment,{children:[l,(0,x.jsx)(ze,{items:a.system,max:r.system,domains:[`sensor`],addLabel:i(`add_statistic`),onChange:e=>o({...a,system:e})})]})}},He=i.textarea`
  min-height: 55vh;
  padding: 12px;
  border-radius: 8px;
  border: 1px solid var(--divider-color, rgba(225, 225, 225, 0.12));
  background: var(--code-editor-background-color, var(--secondary-background-color, #282828));
  color: inherit;
  font-family: var(--ha-font-family-code, ui-monospace, monospace);
  font-size: 13px;
  resize: vertical;
`,Ue=i.p`
  margin: 0;
  color: var(--error-color, #db4437);
`,We=({draft:e,update:t})=>{let n=g(),[r,i]=(0,b.useState)(()=>JSON.stringify(e,null,2)),[a,o]=(0,b.useState)(!1);return(0,x.jsxs)(x.Fragment,{children:[(0,x.jsx)(Q,{title:n(`tab_json`),lead:n(`json_hint`)}),(0,x.jsx)(He,{value:r,spellCheck:!1,onChange:e=>{i(e.target.value),o(!1)}}),a&&(0,x.jsx)(Ue,{children:n(`json_invalid`)}),(0,x.jsx)(`div`,{children:(0,x.jsx)(S,{icon:`mdi:check`,appearance:`filled`,onClick:()=>{try{t({...JSON.parse(r),id:e.id})}catch{o(!0)}},children:n(`apply`)})})]})},Ge=({value:e,onChange:t})=>{let[n,r]=(0,b.useState)(()=>Object.keys(e).length?JSON.stringify(e):``),[i,a]=(0,b.useState)(!1),o=g();return(0,x.jsxs)(N,{children:[(0,x.jsx)(`span`,{className:`label`,children:o(`options_json`)}),(0,x.jsx)(`input`,{type:`text`,value:n,placeholder:`{"hours": 24, "color": "#03a9f4"}`,onChange:e=>{r(e.target.value);try{let n=e.target.value.trim()?JSON.parse(e.target.value):{};if(n&&typeof n==`object`&&!Array.isArray(n)){a(!1),t(n);return}}catch{}a(!0)}}),i&&(0,x.jsx)(`small`,{children:o(`json_invalid`)})]})},Ke=({tile:e})=>{let t=g(),r=n(e.entity||void 0),i=a[e.type],o=e.name||r?.attributes.friendly_name||e.entity||(i?t(i.label):e.type);return(0,x.jsxs)(x.Fragment,{children:[(0,x.jsx)(d,{className:`icon`,icon:e.icon||i?.icon||`mdi:square-rounded-outline`}),(0,x.jsxs)(`span`,{className:`text`,children:[(0,x.jsx)(`span`,{children:o}),(0,x.jsxs)(`span`,{className:`secondary`,children:[i?t(i.label):e.type,` · `,e.w,` × `,e.h]})]})]})},qe=({tiles:e,columns:t,rows:n,onChange:i})=>{let o=g(),s=(t,n)=>i(z(e,t,{...e[t],...n}));return(0,x.jsxs)(x.Fragment,{children:[e.length===0&&(0,x.jsxs)(A,{children:[(0,x.jsx)(d,{icon:`mdi:view-grid-plus-outline`}),(0,x.jsx)(`span`,{children:o(`empty_tiles`)})]}),e.map((r,c)=>{let l=a[r.type];return(0,x.jsxs)(k,{open:!r.entity&&l?.needsEntity!==!1||void 0,children:[(0,x.jsxs)(`summary`,{children:[(0,x.jsx)(Ke,{tile:r}),(0,x.jsx)(`span`,{onClick:e=>e.preventDefault(),children:(0,x.jsx)(Z,{index:c,length:e.length,onMove:t=>i(I(e,c,t)),onRemove:()=>i(e.filter((e,t)=>t!==c)),onDuplicate:()=>i([...e.slice(0,c+1),{...r,id:L()},...e.slice(c+1)])})})]}),(0,x.jsxs)(`div`,{className:`fold-body`,children:[(0,x.jsx)(q,{label:o(`type`),value:r.type,options:[...re.map(e=>({value:e.type,label:o(e.label)})),...l?[]:[{value:r.type,label:r.type}]],onChange:e=>{let r=a[e]?.size??[1,1];s(c,{type:e,w:Math.min(r[0],t),h:Math.min(r[1],n)})}}),l?.needsEntity!==!1&&(0,x.jsx)(Y,{label:o(`entity`),value:r.entity,domains:l?.domains,onChange:e=>s(c,{entity:e})}),(0,x.jsxs)(P,{children:[(0,x.jsx)(W,{label:o(`name`),hint:o(`name_hint`),value:r.name,onChange:e=>s(c,{name:e})}),(0,x.jsx)(J,{label:o(`icon`),value:r.icon,onChange:e=>s(c,{icon:e})})]}),(0,x.jsxs)(P,{children:[(0,x.jsx)(G,{label:o(`width`),value:r.w,min:1,max:t,onChange:e=>s(c,{w:Math.max(1,Math.min(t,e))})}),(0,x.jsx)(G,{label:o(`height`),value:r.h,min:1,max:n,onChange:e=>s(c,{h:Math.max(1,Math.min(n,e))})})]}),r.type===`sensor`&&(0,x.jsx)(Ge,{value:r.options,onChange:e=>s(c,{options:e})})]})]},r.id)}),(0,x.jsx)(`div`,{children:(0,x.jsx)(S,{icon:`mdi:plus`,appearance:`filled`,disabled:e.length>=r.tiles,onClick:()=>i([...e,{id:L(),type:`entity`,entity:``,name:``,icon:``,w:1,h:1,options:{}}]),children:o(`add_tile`)})})]})},Je=()=>({id:L(),name:``,icon:``,status:[],columns:2,rows:2,square:!0,tiles:[]}),Ye=()=>({id:L(),columns:[75,25],rows:[50,50],sections:[]}),Xe=e=>({...R(e),id:L(),sections:e.sections.map(e=>({...R(e),id:L(),tiles:e.tiles.map(e=>({...e,id:L()}))}))}),Ze=e=>{let t=e.split(/[,/ ]+/).filter(Boolean).map(Number);return t.length&&t.length<=3&&t.every(e=>Number.isFinite(e)&&e>0)?t:null},Qe=({label:e,hint:t,value:n,onChange:r})=>(0,x.jsx)(W,{label:e,hint:t,value:n.join(`, `),onChange:e=>{let t=Ze(e);t&&r(t)}}),$e=({draft:e,update:t,open:n})=>{let i=g(),a=e.pages,o=n=>t({...e,pages:n});return(0,x.jsxs)(x.Fragment,{children:[(0,x.jsx)(Q,{title:i(`tab_pages`),lead:i(`lead_pages`)}),(0,x.jsx)(O,{children:a.map((e,t)=>(0,x.jsxs)(`li`,{children:[(0,x.jsxs)(`button`,{type:`button`,className:`open`,onClick:()=>n({kind:`page`,page:t}),children:[(0,x.jsx)(d,{className:`icon`,icon:`mdi:book-open-page-variant-outline`}),(0,x.jsxs)(`span`,{className:`text`,children:[(0,x.jsx)(`span`,{children:i(`page_n`,{n:t+1})}),(0,x.jsx)(`span`,{className:`secondary`,children:e.sections.map(e=>e.name).filter(Boolean).join(` · `)||i(`no_sections`)})]})]}),(0,x.jsx)(Z,{index:t,length:a.length,onMove:e=>o(I(a,t,e)),onDuplicate:a.length<r.pages?()=>o([...a.slice(0,t+1),Xe(e),...a.slice(t+1)]):void 0,onRemove:()=>a.length>1&&o(a.filter((e,n)=>n!==t))})]},e.id))}),(0,x.jsx)(`div`,{children:(0,x.jsx)(S,{icon:`mdi:plus`,appearance:`filled`,disabled:a.length>=r.pages,onClick:()=>{o([...a,Ye()]),n({kind:`page`,page:a.length})},children:i(`add_page`)})})]})},et=({draft:e,update:t,open:n,page:r})=>{let i=g(),a=e.pages[r],o=n=>t({...e,pages:z(e.pages,r,{...a,...n})}),s=a.columns.length*a.rows.length;return(0,x.jsxs)(x.Fragment,{children:[(0,x.jsx)(Q,{title:i(`page_n`,{n:r+1}),lead:i(`lead_page`)}),(0,x.jsxs)(D,{children:[(0,x.jsx)(`h3`,{children:i(`layout`)}),(0,x.jsxs)(P,{children:[(0,x.jsx)(Qe,{label:i(`column_split`),hint:i(`split_hint`),value:a.columns,onChange:e=>o({columns:e})}),(0,x.jsx)(Qe,{label:i(`row_split`),hint:i(`split_hint`),value:a.rows,onChange:e=>o({rows:e})})]})]}),(0,x.jsxs)(D,{children:[(0,x.jsx)(`h3`,{children:i(`sections`)}),(0,x.jsx)(`p`,{children:i(`sections_hint`,{cells:s})}),(0,x.jsx)(O,{children:Array.from({length:s},(e,t)=>{let s=a.sections[t];return s?(0,x.jsxs)(`li`,{children:[(0,x.jsxs)(`button`,{type:`button`,className:`open`,onClick:()=>n({kind:`section`,page:r,section:t}),children:[(0,x.jsx)(d,{className:`icon`,icon:s.icon||`mdi:view-grid-outline`}),(0,x.jsxs)(`span`,{className:`text`,children:[(0,x.jsx)(`span`,{children:s.name||i(`section_n`,{n:t+1})}),(0,x.jsxs)(`span`,{className:`secondary`,children:[i(`tiles_count`,{count:s.tiles.length}),` · `,s.columns,` × `,s.rows]})]})]}),(0,x.jsx)(Z,{index:t,length:a.sections.length,onMove:e=>o({sections:I(a.sections,t,e)}),onRemove:()=>o({sections:a.sections.filter((e,n)=>n!==t)})})]},s.id):(0,x.jsx)(`li`,{children:(0,x.jsxs)(`button`,{type:`button`,className:`open`,onClick:()=>{let e=[...a.sections];for(;e.length<=t;)e.push(Je());o({sections:e}),n({kind:`section`,page:r,section:t})},children:[(0,x.jsx)(d,{className:`icon`,icon:`mdi:plus-box-outline`}),(0,x.jsxs)(`span`,{className:`text`,children:[(0,x.jsx)(`span`,{children:i(`add_section`)}),(0,x.jsx)(`span`,{className:`secondary`,children:i(`cell_n`,{n:t+1})})]})]})},`empty-${t}`)})})]})]})},tt=({draft:e,update:t,page:n,section:i})=>{let a=g(),o=e.pages[n],s=o.sections[i],c=r=>t({...e,pages:z(e.pages,n,{...o,sections:z(o.sections,i,{...s,...r})})});return(0,x.jsxs)(x.Fragment,{children:[(0,x.jsx)(Q,{title:s.name||a(`section_n`,{n:i+1}),lead:a(`lead_section`)}),(0,x.jsxs)(D,{children:[(0,x.jsx)(`h3`,{children:a(`section_header`)}),(0,x.jsxs)(P,{children:[(0,x.jsx)(W,{label:a(`name`),value:s.name,onChange:e=>c({name:e})}),(0,x.jsx)(J,{label:a(`icon`),value:s.icon,onChange:e=>c({icon:e})})]}),(0,x.jsx)(X,{label:a(`status_entities`),value:s.status,max:2,domains:[`sensor`,`binary_sensor`],onChange:e=>c({status:e})})]}),(0,x.jsxs)(D,{children:[(0,x.jsx)(`h3`,{children:a(`grid`)}),(0,x.jsxs)(P,{children:[(0,x.jsx)(G,{label:a(`columns`),value:s.columns,min:1,max:r.sectionCells,onChange:e=>c({columns:e})}),(0,x.jsx)(G,{label:a(`rows`),value:s.rows,min:1,max:r.sectionCells,onChange:e=>c({rows:e})})]}),(0,x.jsx)(K,{label:a(`square_cells`),hint:a(`square_cells_hint`),value:s.square,onChange:e=>c({square:e})})]}),(0,x.jsxs)(D,{children:[(0,x.jsx)(`h3`,{children:a(`tiles`)}),(0,x.jsx)(qe,{tiles:s.tiles,columns:s.columns,rows:s.rows,onChange:e=>c({tiles:e})})]})]})},nt=({draft:e,update:t,open:n})=>{let i=g(),a=e.buttons,o=n=>t({...e,buttons:n});return(0,x.jsxs)(x.Fragment,{children:[(0,x.jsx)(Q,{title:i(`tab_buttons`),lead:i(`lead_buttons`)}),a.length>0&&(0,x.jsx)(O,{children:a.map((e,t)=>(0,x.jsxs)(`li`,{children:[(0,x.jsxs)(`button`,{type:`button`,className:`open`,onClick:()=>n({kind:`button`,button:t}),children:[(0,x.jsx)(d,{className:`icon`,icon:e.icon||`mdi:gesture-tap`}),(0,x.jsxs)(`span`,{className:`text`,children:[(0,x.jsx)(`span`,{children:e.name||i(`button_n`,{n:t+1})}),(0,x.jsx)(`span`,{className:`secondary`,children:i(`tiles_count`,{count:e.tiles.length})})]})]}),(0,x.jsx)(Z,{index:t,length:a.length,onMove:e=>o(I(a,t,e)),onRemove:()=>o(a.filter((e,n)=>n!==t))})]},e.id))}),(0,x.jsx)(`div`,{children:(0,x.jsxs)(S,{icon:`mdi:plus`,appearance:`filled`,disabled:a.length>=r.buttons,onClick:()=>{o([...a,{id:L(),name:``,icon:`mdi:gesture-tap`,columns:4,tiles:[]}]),n({kind:`button`,button:a.length})},children:[i(`add_button`),` (`,a.length,`/`,r.buttons,`)`]})})]})},rt=({draft:e,update:t,button:n})=>{let i=g(),a=e.buttons[n],o=r=>t({...e,buttons:z(e.buttons,n,{...a,...r})});return(0,x.jsxs)(x.Fragment,{children:[(0,x.jsx)(Q,{title:a.name||i(`button_n`,{n:n+1}),lead:i(`lead_button`)}),(0,x.jsxs)(D,{children:[(0,x.jsxs)(P,{children:[(0,x.jsx)(W,{label:i(`name`),value:a.name,onChange:e=>o({name:e})}),(0,x.jsx)(J,{label:i(`icon`),value:a.icon,onChange:e=>o({icon:e})})]}),(0,x.jsx)(G,{label:i(`columns`),hint:i(`button_columns_hint`),value:a.columns,min:1,max:r.sectionCells,onChange:e=>o({columns:e})})]}),(0,x.jsxs)(D,{children:[(0,x.jsx)(`h3`,{children:i(`tiles`)}),(0,x.jsx)(qe,{tiles:a.tiles,columns:a.columns,rows:r.sectionCells,onChange:e=>o({tiles:e})})]})]})},$=[{id:`tab-10`,label:`10″ tablet · 1280×800`,width:1280,height:800},{id:`tab-11`,label:`11″ tablet · 1194×834`,width:1194,height:834},{id:`tab-12`,label:`12″ tablet · 1366×1024`,width:1366,height:1024},{id:`fhd`,label:`Full HD · 1920×1080`,width:1920,height:1080},{id:`small`,label:`7″ panel · 1024×600`,width:1024,height:600}],it=({view:e,dashboards:t,...n})=>{switch(e.kind){case`general`:return(0,x.jsx)(Le,{...n});case`sidebar`:return(0,x.jsx)(Ve,{...n,part:e.part});case`pages`:return(0,x.jsx)($e,{...n});case`page`:return(0,x.jsx)(et,{...n,page:e.page});case`section`:return(0,x.jsx)(tt,{...n,page:e.page,section:e.section});case`buttons`:return(0,x.jsx)(nt,{...n});case`button`:return(0,x.jsx)(rt,{...n,button:e.button});case`users`:return(0,x.jsx)(Ae,{dashboards:t});case`json`:return(0,x.jsx)(We,{...n},n.draft.id)}},at=()=>{let e=g(),t=c(),{narrow:n}=ne(),[r,i]=(0,b.useState)(null),[a,o]=(0,b.useState)(null),[s,l]=(0,b.useState)(!1),[u,p]=(0,b.useState)(``),[ee,te]=(0,b.useState)({kind:`general`}),[re,m]=(0,b.useState)(()=>new Set),[h,_]=(0,b.useState)(!1),[v,y]=(0,b.useState)(!1),[ie,ae]=(0,b.useState)(!1),[C,w]=(0,b.useState)(!1),[E,pe]=(0,b.useState)($[0].id),[D,O]=(0,b.useState)(!1),k=$.find(e=>e.id===E)??$[0],A=(0,b.useCallback)((e,t)=>{o(R(e.dashboards[t]??e.dashboards.default)),l(!1)},[]);(0,b.useEffect)(()=>{t?.sendMessagePromise({type:`better_wall_dashboard/document`}).then(e=>{i(e),A(e,`default`)}).catch(e=>p(String(e?.message??e)))},[t,A]),(0,b.useEffect)(()=>{if(!s)return;let e=e=>e.preventDefault();return window.addEventListener(`beforeunload`,e),()=>window.removeEventListener(`beforeunload`,e)},[s]);let j=(0,b.useCallback)(e=>{o(e),l(!0),p(``)},[]),M=(0,b.useCallback)((e,t)=>{te(e),m(n=>new Set([...n,...se(e),...t?[t]:[]])),_(!1),y(!1),w(!1)},[]),ve=(0,b.useCallback)(e=>{m(t=>{let n=new Set(t);return n.delete(e)||n.add(e),n})},[]),{confirm:N,dialog:be}=Fe(),P=async()=>!s||N({title:e(`discard_title`),text:e(`discard_text`),confirm:e(`discard`),danger:!0}),F=async()=>{if(t&&a){p(e(`saving`));try{let n=await t.sendMessagePromise({type:`better_wall_dashboard/save_dashboard`,dashboard:a});i(e=>e&&{...e,dashboards:{...e.dashboards,[n.dashboard.id]:n.dashboard}}),o(R(n.dashboard)),l(!1),p(e(`saved`))}catch(e){p(String(e?.message??e))}}},I=async()=>{r&&a&&await P()&&(r.dashboards[a.id]?A(r,a.id):A(r,`default`),p(``))},z=async e=>{r&&await P()&&(A(r,e),M({kind:`general`}))},B=async t=>{if(y(!1),!r||!await P())return;let n=R(t??r.dashboards.default);o({...n,id:L(),name:t?`${t.name} (2)`:e(`new_dashboard`)}),l(!0),M({kind:`general`})},xe=async()=>{if(y(!1),!t||!a)return;let n=e=>Ie(e)||p(e);try{let r=await t.sendMessagePromise({type:`better_wall_dashboard/reload_tablets`,dashboard_id:a.id});n(e(`tablets_reloaded`,{count:r.reached}))}catch(e){n(String(e?.message??e))}},Se=async()=>{if(y(!1),!t||!a||!r||a.id==="default"||!await N({title:e(`delete_title`,{name:a.name}),text:e(`confirm_delete`,{name:a.name}),confirm:e(`delete`),danger:!0}))return;r.dashboards[a.id]&&await t.sendMessagePromise({type:`better_wall_dashboard/delete_dashboard`,dashboard_id:a.id});let n={...r.dashboards};delete n[a.id];let o={...r,dashboards:n};i(o),A(o,`default`),M({kind:`general`})},V=(0,b.useMemo)(()=>{let e=Object.values(r?.dashboards??{}).map(e=>({id:e.id,name:e.name}));return a&&!e.some(e=>e.id===a.id)&&e.push({id:a.id,name:a.name}),e.map(e=>e.id===a?.id?{...e,name:a.name}:e)},[r,a]);if(!a)return(0,x.jsxs)(le,{children:[(0,x.jsx)(ue,{"data-narrow":n,children:(0,x.jsx)(`span`,{className:`app-title`,children:e(`editor_title`)})}),(0,x.jsx)(`p`,{style:{padding:24},children:u||e(`loading`)})]});let H=oe(ee,a),U=ce(H,{label:t=>e(t),page:t=>e(`page_n`,{n:t+1}),section:(t,n)=>a.pages[t]?.sections[n]?.name||e(`section_n`,{n:n+1}),button:t=>a.buttons[t]?.name||e(`button_n`,{n:t+1})}),W=H.kind===`page`||H.kind===`section`?H.page:void 0,G=H.kind!==`users`;return(0,x.jsx)(Ee,{children:(0,x.jsxs)(le,{children:[(0,x.jsxs)(ue,{"data-narrow":n,children:[(0,x.jsx)(T,{type:`button`,className:`only-narrow`,"aria-label":e(`menu`),onClick:e=>f(e.currentTarget),children:(0,x.jsx)(d,{icon:`mdi:menu`})}),(0,x.jsx)(T,{type:`button`,className:`only-drawer`,"aria-label":e(`editor_menu`),onClick:()=>_(!0),children:(0,x.jsx)(d,{icon:`mdi:format-list-bulleted`})}),(0,x.jsxs)(`div`,{className:`titles`,children:[(0,x.jsx)(`span`,{className:`app-title`,children:e(`editor_title`)}),(0,x.jsxs)(`nav`,{"aria-label":e(`editor_menu`),children:[(0,x.jsx)(`button`,{type:`button`,onClick:()=>M({kind:`general`}),children:a.name}),U.map((e,t)=>(0,x.jsxs)(`span`,{children:[`› `,e.view?(0,x.jsx)(`button`,{type:`button`,onClick:()=>M(e.view),children:e.label}):e.label]},t))]})]}),(0,x.jsx)(`span`,{className:`spacer`}),(0,x.jsx)(T,{type:`button`,className:`only-no-preview`,"aria-pressed":C,"aria-label":e(`preview`),title:e(`preview`),onClick:()=>w(e=>!e),children:(0,x.jsx)(d,{icon:C?`mdi:form-select`:`mdi:tablet-dashboard`})}),(0,x.jsxs)(de,{children:[(0,x.jsx)(T,{type:`button`,"aria-label":e(`more`),"aria-expanded":v,onClick:()=>y(e=>!e),children:(0,x.jsx)(d,{icon:`mdi:dots-vertical`})}),v&&(0,x.jsxs)(`div`,{className:`menu`,role:`menu`,children:[(0,x.jsxs)(`button`,{type:`button`,role:`menuitem`,onClick:()=>void B(),children:[(0,x.jsx)(d,{icon:`mdi:plus`}),` `,e(`new_dashboard`)]}),(0,x.jsxs)(`button`,{type:`button`,role:`menuitem`,onClick:()=>void B(a),children:[(0,x.jsx)(d,{icon:`mdi:content-copy`}),` `,e(`duplicate`)]}),(0,x.jsxs)(`button`,{type:`button`,role:`menuitem`,onClick:()=>void xe(),children:[(0,x.jsx)(d,{icon:`mdi:tablet-cellphone`}),` `,e(`reload_tablets`)]}),(0,x.jsxs)(`button`,{type:`button`,role:`menuitem`,onClick:()=>M({kind:`json`}),children:[(0,x.jsx)(d,{icon:`mdi:code-json`}),` `,e(`edit_json`)]}),(0,x.jsxs)(`button`,{type:`button`,role:`menuitem`,className:`danger`,disabled:a.id==="default",onClick:()=>void Se(),children:[(0,x.jsx)(d,{icon:`mdi:delete-outline`}),` `,e(`delete_dashboard`)]}),(0,x.jsx)(`hr`,{}),(0,x.jsxs)(`button`,{type:`button`,role:`menuitem`,onClick:()=>{y(!1),ae(!0)},children:[(0,x.jsx)(d,{icon:`mdi:information-outline`}),` `,e(`about`)]})]})]})]}),(0,x.jsxs)(fe,{children:[(0,x.jsx)(me,{$open:h,onClick:()=>_(!1)}),(0,x.jsx)(_e,{dashboards:V,draft:a,view:H,expanded:re,open:h,onToggle:ve,onOpen:M,onSwitch:e=>void z(e),onNewDashboard:()=>void B()}),(0,x.jsxs)(he,{$hidden:C,children:[(0,x.jsx)(`div`,{className:`screen-body`,children:(0,x.jsx)(it,{view:H,dashboards:V,draft:a,update:j,open:M})}),G&&(0,x.jsxs)(`div`,{className:`screen-foot`,children:[(0,x.jsx)(`span`,{className:`status`,children:s?e(`unsaved`):u}),(0,x.jsxs)(`span`,{className:`end`,children:[(0,x.jsx)(S,{appearance:`plain`,disabled:!s,onClick:()=>void I(),children:e(`discard`)}),(0,x.jsx)(S,{appearance:`accent`,icon:`mdi:content-save-outline`,disabled:!s,onClick:F,children:e(`save`)})]})]})]}),(0,x.jsxs)(ge,{$shown:C,children:[(0,x.jsxs)(`div`,{className:`preview-bar`,children:[(0,x.jsx)(`h2`,{children:e(`preview`)}),(0,x.jsx)(q,{label:e(`device`),value:E,options:$.map(e=>({value:e.id,label:e.label})),onChange:pe}),(0,x.jsx)(T,{type:`button`,style:{color:`var(--secondary-text-color)`},"aria-label":e(D?`landscape`:`portrait`),title:e(D?`landscape`:`portrait`),onClick:()=>O(e=>!e),children:(0,x.jsx)(d,{icon:D?`mdi:phone-rotate-landscape`:`mdi:phone-rotate-portrait`})})]}),(0,x.jsx)(`div`,{className:`stage`,children:(0,x.jsx)(ye,{dashboard:a,device:k,portrait:D,page:W})})]})]}),(0,x.jsx)(Ne,{open:ie,onClose:()=>ae(!1)}),be]})})};export{at as default};