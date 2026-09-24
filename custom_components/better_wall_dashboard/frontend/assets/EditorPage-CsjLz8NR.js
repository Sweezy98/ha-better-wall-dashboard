import{_ as e,a as t,c as n,d as r,f as i,g as a,h as o,i as s,l as c,m as l,n as u,o as d,p as f,r as p,s as m,t as ee,u as h}from"./boot-BSx46D4R.js";var g=e(a(),1),_={pages:10,quickActions:6,buttons:5,sectionStatus:2,system:8,sectionCells:12,tiles:64,calendarDays:14},v=f.label`
  display: flex;
  flex-direction: column;
  gap: ${i(.25)};
  min-width: 0;
  font-size: ${i(.85)};

  > span.label {
    color: ${({theme:e})=>e.text.secondary};
  }

  > small {
    color: ${({theme:e})=>e.text.muted};
    font-size: ${i(.75)};
  }

  input:not([type='checkbox']):not([type='range']),
  select,
  textarea {
    width: 100%;
    min-width: 0;
    padding: ${i(.5)} ${i(.7)};
    border-radius: ${i(.6)};
    border: 1px solid rgba(255, 255, 255, 0.12);
    background: rgba(0, 0, 0, 0.25);
    color: inherit;
    font-size: ${i(.9)};
    outline: none;
  }

  input:focus,
  select:focus,
  textarea:focus {
    border-color: ${({theme:e})=>e.colors.accent};
  }

  option {
    background: #222;
  }
`,y=f.label`
  display: flex;
  align-items: center;
  gap: ${i(.6)};
  font-size: ${i(.9)};
  min-height: ${i(2.2)};

  input {
    width: ${i(1.1)};
    height: ${i(1.1)};
    accent-color: ${({theme:e})=>e.colors.accent};
  }
`,b=f.div`
  display: grid;
  grid-template-columns: ${({$columns:e})=>e??`repeat(auto-fill, minmax(14em, 1fr))`};
  gap: ${i(.6)} ${i(.9)};
  align-items: end;
`,x=f.fieldset`
  border: ${({theme:e})=>e.card.border};
  border-radius: ${i(1)};
  background: rgba(255, 255, 255, 0.025);
  padding: ${i(.8)} ${i(1)} ${i(1)};
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: ${i(.7)};
  min-width: 0;

  > legend {
    padding: 0 ${i(.4)};
    font-weight: 600;
    font-size: ${i(.95)};
  }
`,S=f.button`
  display: inline-flex;
  align-items: center;
  gap: ${i(.35)};
  padding: ${i(.4)} ${i(.8)};
  border-radius: ${i(.6)};
  font-size: ${i(.85)};
  white-space: nowrap;
  background: ${({$primary:e,$danger:t,theme:n})=>e?n.colors.accent:t?`rgba(255, 77, 77, 0.18)`:n.bubble.background};
  color: ${({$primary:e})=>e?`#0b141d`:`inherit`};
  font-weight: ${({$primary:e})=>e?600:400};

  &:disabled {
    opacity: 0.4;
    cursor: default;
  }
`;function C(e,t,n){if(n<0||n>=e.length)return e;let r=[...e],[i]=r.splice(t,1);return r.splice(n,0,i),r}function w(){let e=new Uint8Array(6);return crypto.getRandomValues(e),Array.from(e,e=>e.toString(16).padStart(2,`0`)).join(``)}var T=e(o(),1),E=({label:e,hint:t,value:n,onChange:r,placeholder:i,type:a})=>(0,T.jsxs)(v,{children:[(0,T.jsx)(`span`,{className:`label`,children:e}),(0,T.jsx)(`input`,{type:a??`text`,value:n,placeholder:i,onChange:e=>r(e.target.value)}),t&&(0,T.jsx)(`small`,{children:t})]}),D=({label:e,hint:t,value:n,onChange:r,min:i,max:a,step:o})=>(0,T.jsxs)(v,{children:[(0,T.jsx)(`span`,{className:`label`,children:e}),(0,T.jsx)(`input`,{type:`number`,value:n,min:i,max:a,step:o??1,onChange:e=>{let t=Number(e.target.value);Number.isFinite(t)&&r(t)}}),t&&(0,T.jsx)(`small`,{children:t})]}),O=({label:e,value:t,onChange:n,min:r,max:i,step:a,format:o})=>(0,T.jsxs)(v,{children:[(0,T.jsxs)(`span`,{className:`label`,children:[e,`: `,o?o(t):t]}),(0,T.jsx)(`input`,{type:`range`,value:t,min:r,max:i,step:a,onChange:e=>n(Number(e.target.value))})]}),k=({label:e,value:t,onChange:n})=>(0,T.jsxs)(y,{children:[(0,T.jsx)(`input`,{type:`checkbox`,checked:t,onChange:e=>n(e.target.checked)}),e]}),A=({label:e,hint:t,value:n,onChange:r,options:i})=>(0,T.jsxs)(v,{children:[(0,T.jsx)(`span`,{className:`label`,children:e}),(0,T.jsx)(`select`,{value:n,onChange:e=>r(e.target.value),children:i.map(e=>(0,T.jsx)(`option`,{value:e.value,children:e.label},e.value))}),t&&(0,T.jsx)(`small`,{children:t})]}),j=({label:e,value:t,onChange:n})=>(0,T.jsxs)(v,{children:[(0,T.jsx)(`span`,{className:`label`,children:e}),(0,T.jsxs)(`span`,{style:{display:`flex`,gap:`0.5em`,alignItems:`center`},children:[(0,T.jsx)(`input`,{type:`text`,value:t,placeholder:`mdi:…`,onChange:e=>n(e.target.value)}),t&&(0,T.jsx)(m,{icon:t,size:`1.6em`})]})]}),M=(0,g.createContext)([]),te=({children:e})=>{let t=l(p(e=>{let t={};for(let[n,r]of Object.entries(e.entities))t[n]=r.attributes.friendly_name||n;return t})),n=(0,g.useMemo)(()=>Object.entries(t).map(([e,t])=>({id:e,name:t})).sort((e,t)=>e.id.localeCompare(t.id)),[t]);return(0,T.jsx)(M.Provider,{value:n,children:e})},N=({label:e,hint:t,value:n,onChange:i,domains:a})=>{let o=(0,g.useContext)(M),s=(0,g.useId)(),c=r(),l=(0,g.useMemo)(()=>a?.length?o.filter(e=>a.includes(e.id.split(`.`)[0])):o,[o,a]),u=o.find(e=>e.id===n);return(0,T.jsxs)(v,{children:[(0,T.jsx)(`span`,{className:`label`,children:e}),(0,T.jsx)(`input`,{type:`text`,list:s,value:n,placeholder:a?.length?`${a[0]}.…`:`domain.object_id`,onChange:e=>i(e.target.value.trim())}),(0,T.jsx)(`datalist`,{id:s,children:l.map(e=>(0,T.jsx)(`option`,{value:e.id,children:e.name},e.id))}),n&&(0,T.jsx)(`small`,{children:u?u.name:c(`not_found`)}),t&&(0,T.jsx)(`small`,{children:t})]})},P=({label:e,hint:t,value:n,onChange:i,domains:a,max:o})=>{let s=r();return(0,T.jsxs)(x,{children:[(0,T.jsx)(`legend`,{children:e}),t&&(0,T.jsx)(`small`,{children:t}),n.map((e,t)=>(0,T.jsxs)(b,{$columns:`minmax(0, 1fr) auto`,children:[(0,T.jsx)(N,{label:`${t+1}`,value:e,domains:a,onChange:e=>i(n.map((n,r)=>r===t?e:n))}),(0,T.jsx)(F,{index:t,length:n.length,onMove:e=>i(C(n,t,e)),onRemove:()=>i(n.filter((e,n)=>n!==t))})]},t)),(0,T.jsx)(`div`,{children:(0,T.jsxs)(S,{type:`button`,disabled:o!==void 0&&n.length>=o,onClick:()=>i([...n,``]),children:[(0,T.jsx)(m,{icon:`mdi:plus`}),` `,s(`add`)]})})]})},F=({index:e,length:t,onMove:n,onRemove:i,onDuplicate:a})=>{let o=r();return(0,T.jsxs)(`span`,{style:{display:`flex`,gap:`0.3em`},children:[(0,T.jsx)(S,{type:`button`,disabled:e===0,onClick:()=>n(e-1),title:o(`move_up`),"aria-label":o(`move_up`),children:(0,T.jsx)(m,{icon:`mdi:arrow-up`})}),(0,T.jsx)(S,{type:`button`,disabled:e===t-1,onClick:()=>n(e+1),title:o(`move_down`),"aria-label":o(`move_down`),children:(0,T.jsx)(m,{icon:`mdi:arrow-down`})}),a&&(0,T.jsx)(S,{type:`button`,onClick:a,title:o(`duplicate`),"aria-label":o(`duplicate`),children:(0,T.jsx)(m,{icon:`mdi:content-copy`})}),(0,T.jsx)(S,{type:`button`,$danger:!0,onClick:i,title:o(`remove`),"aria-label":o(`remove`),children:(0,T.jsx)(m,{icon:`mdi:delete-outline`})})]})},I=({label:e,items:t,max:n,domains:i,onChange:a})=>{let o=r(),s=(e,n)=>a(t.map((t,r)=>r===e?{...t,...n}:t));return(0,T.jsxs)(x,{children:[(0,T.jsxs)(`legend`,{children:[e,` (`,t.length,`/`,n,`)`]}),t.map((e,n)=>(0,T.jsxs)(b,{$columns:`minmax(0, 2fr) minmax(0, 1.2fr) minmax(0, 1fr) auto`,children:[(0,T.jsx)(N,{label:o(`entity`),value:e.entity,domains:i,onChange:e=>s(n,{entity:e})}),(0,T.jsx)(E,{label:o(`name`),value:e.name,onChange:e=>s(n,{name:e})}),(0,T.jsx)(j,{label:o(`icon`),value:e.icon,onChange:e=>s(n,{icon:e})}),(0,T.jsx)(F,{index:n,length:t.length,onMove:e=>a(C(t,n,e)),onRemove:()=>a(t.filter((e,t)=>t!==n))})]},e.id)),(0,T.jsx)(`div`,{children:(0,T.jsxs)(S,{type:`button`,disabled:t.length>=n,onClick:()=>a([...t,{id:w(),entity:``,name:``,icon:``}]),children:[(0,T.jsx)(m,{icon:`mdi:plus`}),` `,o(`add`)]})})]})},L=[`input_boolean`,`switch`,`binary_sensor`],ne=({value:e,onChange:t})=>{let n=r(),i=(n,r)=>t({...e,[n]:{...e[n],...r}});return(0,T.jsxs)(T.Fragment,{children:[(0,T.jsxs)(x,{children:[(0,T.jsx)(`legend`,{children:n(`status_icons`)}),(0,T.jsxs)(b,{children:[(0,T.jsx)(N,{label:n(`absence_mode`),value:e.status.absence,domains:L,onChange:e=>i(`status`,{absence:e})}),(0,T.jsx)(N,{label:n(`guest_mode`),value:e.status.guest,domains:L,onChange:e=>i(`status`,{guest:e})}),(0,T.jsx)(N,{label:n(`night_mode`),value:e.status.night,domains:L,onChange:e=>i(`status`,{night:e})}),(0,T.jsx)(N,{label:n(`wifi_signal`),hint:n(`wifi_signal_hint`),value:e.status.wifi_signal,domains:[`sensor`],onChange:e=>i(`status`,{wifi_signal:e})})]})]}),(0,T.jsxs)(x,{children:[(0,T.jsx)(`legend`,{children:n(`guest_wifi`)}),(0,T.jsx)(N,{label:n(`guest_qr_image`),hint:n(`guest_qr_image_hint`),value:e.guest_wifi.qr_image,domains:[`image`],onChange:e=>i(`guest_wifi`,{qr_image:e})}),(0,T.jsxs)(b,{children:[(0,T.jsx)(E,{label:n(`network`),value:e.guest_wifi.ssid,onChange:e=>i(`guest_wifi`,{ssid:e})}),(0,T.jsx)(E,{label:n(`password`),type:`password`,value:e.guest_wifi.password,onChange:e=>i(`guest_wifi`,{password:e})}),(0,T.jsx)(A,{label:n(`security`),value:e.guest_wifi.security,options:[{value:`WPA`,label:`WPA/WPA2/WPA3`},{value:`WEP`,label:`WEP`},{value:`nopass`,label:`—`}],onChange:e=>i(`guest_wifi`,{security:e})}),(0,T.jsx)(k,{label:n(`hidden_network`),value:e.guest_wifi.hidden,onChange:e=>i(`guest_wifi`,{hidden:e})})]})]}),(0,T.jsxs)(x,{children:[(0,T.jsx)(`legend`,{children:n(`room_climate`)}),(0,T.jsxs)(b,{children:[(0,T.jsx)(N,{label:n(`temperature`),value:e.climate.temperature,domains:[`sensor`],onChange:e=>i(`climate`,{temperature:e})}),(0,T.jsx)(N,{label:n(`humidity`),value:e.climate.humidity,domains:[`sensor`],onChange:e=>i(`climate`,{humidity:e})}),(0,T.jsx)(D,{label:n(`hours`),value:e.climate.hours,min:1,max:168,onChange:e=>i(`climate`,{hours:e})})]})]}),(0,T.jsx)(P,{label:n(`persons`),value:e.persons,domains:[`person`],onChange:n=>t({...e,persons:n})}),(0,T.jsx)(P,{label:n(`openings`),value:e.openings,domains:[`binary_sensor`,`cover`,`lock`,`sensor`],onChange:n=>t({...e,openings:n})}),(0,T.jsxs)(x,{children:[(0,T.jsx)(`legend`,{children:n(`travel_time`)}),(0,T.jsxs)(b,{children:[(0,T.jsx)(N,{label:n(`travel_sensor`),value:e.travel.entity,domains:[`sensor`],onChange:e=>i(`travel`,{entity:e})}),(0,T.jsx)(E,{label:n(`name`),value:e.travel.name,placeholder:n(`travel_time`),onChange:e=>i(`travel`,{name:e})})]}),(0,T.jsx)(E,{label:n(`map_url`),hint:n(`map_url_hint`),value:e.travel.map_url,onChange:e=>i(`travel`,{map_url:e})}),(0,T.jsx)(E,{label:n(`maps_api_key`),hint:n(`maps_api_key_hint`),type:`password`,value:e.travel.maps_api_key,onChange:e=>i(`travel`,{maps_api_key:e})})]}),(0,T.jsx)(I,{label:n(`quick_actions`),items:e.quick_actions,max:_.quickActions,onChange:n=>t({...e,quick_actions:n})}),(0,T.jsxs)(x,{children:[(0,T.jsx)(`legend`,{children:n(`calendar`)}),(0,T.jsx)(P,{label:n(`calendars`),value:e.calendar.entities,domains:[`calendar`],onChange:e=>i(`calendar`,{entities:e})}),(0,T.jsx)(D,{label:n(`days`),value:e.calendar.days,min:1,max:_.calendarDays,onChange:e=>i(`calendar`,{days:e})})]}),(0,T.jsxs)(x,{children:[(0,T.jsx)(`legend`,{children:n(`weather`)}),(0,T.jsxs)(b,{children:[(0,T.jsx)(N,{label:n(`weather_entity`),value:e.weather.entity,domains:[`weather`],onChange:e=>i(`weather`,{entity:e})}),(0,T.jsx)(N,{label:n(`outdoor_temperature`),value:e.weather.temperature,domains:[`sensor`],onChange:e=>i(`weather`,{temperature:e})})]})]}),(0,T.jsxs)(x,{children:[(0,T.jsx)(`legend`,{children:n(`notifications`)}),(0,T.jsx)(k,{label:n(`notifications_enabled`),value:e.notifications.enabled,onChange:e=>i(`notifications`,{enabled:e})}),(0,T.jsx)(E,{label:n(`notifications_prefix`),hint:n(`notifications_prefix_hint`),value:e.notifications.prefix,onChange:e=>i(`notifications`,{prefix:e})})]}),(0,T.jsx)(I,{label:n(`system_stats`),items:e.system,max:_.system,domains:[`sensor`],onChange:n=>t({...e,system:n})})]})},R=({value:e,onChange:t})=>{let[n,i]=(0,g.useState)(()=>Object.keys(e).length?JSON.stringify(e):``),[a,o]=(0,g.useState)(!1),s=r();return(0,T.jsxs)(v,{children:[(0,T.jsx)(`span`,{className:`label`,children:s(`options_json`)}),(0,T.jsx)(`input`,{type:`text`,value:n,placeholder:`{"hours": 24, "color": "#03a9f4"}`,onChange:e=>{i(e.target.value);try{let n=e.target.value.trim()?JSON.parse(e.target.value):{};if(n&&typeof n==`object`&&!Array.isArray(n)){o(!1),t(n);return}}catch{}o(!0)}}),a&&(0,T.jsx)(`small`,{children:s(`json_invalid`)})]})},z=({tiles:e,columns:n,rows:i,onChange:a})=>{let o=r(),s=(t,n)=>a(e.map((e,r)=>r===t?{...e,...n}:e));return(0,T.jsxs)(x,{children:[(0,T.jsxs)(`legend`,{children:[o(`tiles`),` (`,e.length,`)`]}),e.map((r,c)=>{let l=d[r.type];return(0,T.jsxs)(b,{$columns:`minmax(0, 1.2fr) minmax(0, 2fr) minmax(0, 1.2fr) minmax(0, 1fr) 4em 4em auto`,children:[(0,T.jsx)(A,{label:o(`type`),value:r.type,options:[...t.map(e=>({value:e.type,label:o(e.label)})),...l?[]:[{value:r.type,label:r.type}]],onChange:e=>{let t=d[e]?.size??[1,1];s(c,{type:e,w:Math.min(t[0],n),h:Math.min(t[1],i)})}}),l?.needsEntity===!1?(0,T.jsx)(`span`,{}):(0,T.jsx)(N,{label:o(`entity`),value:r.entity,domains:l?.domains,onChange:e=>s(c,{entity:e})}),(0,T.jsx)(E,{label:o(`name`),value:r.name,onChange:e=>s(c,{name:e})}),(0,T.jsx)(j,{label:o(`icon`),value:r.icon,onChange:e=>s(c,{icon:e})}),(0,T.jsx)(D,{label:o(`width`),value:r.w,min:1,max:n,onChange:e=>s(c,{w:Math.max(1,Math.min(n,e))})}),(0,T.jsx)(D,{label:o(`height`),value:r.h,min:1,max:i,onChange:e=>s(c,{h:Math.max(1,Math.min(i,e))})}),(0,T.jsx)(F,{index:c,length:e.length,onMove:t=>a(C(e,c,t)),onRemove:()=>a(e.filter((e,t)=>t!==c)),onDuplicate:()=>a([...e.slice(0,c+1),{...r,id:w()},...e.slice(c+1)])}),r.type===`sensor`&&(0,T.jsx)(`div`,{style:{gridColumn:`1 / -1`},children:(0,T.jsx)(R,{value:r.options,onChange:e=>s(c,{options:e})})})]},r.id)}),(0,T.jsx)(`div`,{children:(0,T.jsxs)(S,{type:`button`,disabled:e.length>=_.tiles,onClick:()=>a([...e,{id:w(),type:`entity`,entity:``,name:``,icon:``,w:1,h:1,options:{}}]),children:[(0,T.jsx)(m,{icon:`mdi:plus`}),` `,o(`add_tile`)]})})]})},B=f.div`
  height: ${i(16)};
  padding: ${i(.6)};
  border-radius: ${i(1)};
  background: rgba(0, 0, 0, 0.3);
`,V=e=>{let t=e.split(/[,/ ]+/).filter(Boolean).map(Number);return t.length&&t.length<=3&&t.every(e=>Number.isFinite(e)&&e>0)?t:null},H=()=>({id:w(),name:``,icon:``,status:[],columns:2,rows:2,square:!0,tiles:[]}),U=({label:e,value:t,onChange:n})=>(0,T.jsx)(E,{label:e,value:t.join(`, `),onChange:e=>{let t=V(e);t&&n(t)}}),W=({section:e,onChange:t})=>{let n=r(),i=n=>t({...e,...n});return(0,T.jsxs)(T.Fragment,{children:[(0,T.jsxs)(b,{children:[(0,T.jsx)(E,{label:n(`name`),value:e.name,onChange:e=>i({name:e})}),(0,T.jsx)(j,{label:n(`icon`),value:e.icon,onChange:e=>i({icon:e})}),(0,T.jsx)(D,{label:n(`columns`),value:e.columns,min:1,max:_.sectionCells,onChange:e=>i({columns:e})}),(0,T.jsx)(D,{label:n(`rows`),value:e.rows,min:1,max:_.sectionCells,onChange:e=>i({rows:e})}),(0,T.jsx)(k,{label:n(`square_cells`),value:e.square,onChange:e=>i({square:e})})]}),(0,T.jsx)(P,{label:n(`status_entities`),value:e.status,max:_.sectionStatus,domains:[`sensor`,`binary_sensor`],onChange:e=>i({status:e})}),(0,T.jsx)(z,{tiles:e.tiles,columns:e.columns,rows:e.rows,onChange:e=>i({tiles:e})}),(0,T.jsx)(B,{children:(0,T.jsx)(s,{section:e})})]})},G=({pages:e,onChange:t})=>{let n=r(),i=(n,r)=>t(e.map((e,t)=>t===n?{...e,...r}:e));return(0,T.jsxs)(T.Fragment,{children:[e.map((r,a)=>{let o=r.columns.length*r.rows.length,s=Array.from({length:o},(e,t)=>r.sections[t]);return(0,T.jsxs)(x,{children:[(0,T.jsxs)(`legend`,{children:[n(`page`),` `,a+1]}),(0,T.jsxs)(b,{$columns:`minmax(0, 1fr) minmax(0, 1fr) auto`,children:[(0,T.jsx)(U,{label:n(`column_split`),value:r.columns,onChange:e=>i(a,{columns:e})}),(0,T.jsx)(U,{label:n(`row_split`),value:r.rows,onChange:e=>i(a,{rows:e})}),(0,T.jsx)(F,{index:a,length:e.length,onMove:n=>t(C(e,a,n)),onRemove:()=>e.length>1&&t(e.filter((e,t)=>t!==a))})]}),s.map((e,t)=>(0,T.jsxs)(x,{children:[(0,T.jsxs)(`legend`,{children:[n(`section`),` `,t+1]}),e?(0,T.jsx)(W,{section:e,onChange:e=>{let n=[...r.sections];n[t]=e,i(a,{sections:n})}}):(0,T.jsx)(`div`,{children:(0,T.jsxs)(S,{type:`button`,onClick:()=>{let e=[...r.sections];for(;e.length<=t;)e.push(H());i(a,{sections:e})},children:[(0,T.jsx)(m,{icon:`mdi:plus`}),` `,n(`add`)]})})]},e?.id??`empty-${t}`))]},r.id)}),(0,T.jsx)(`div`,{children:(0,T.jsxs)(S,{type:`button`,disabled:e.length>=_.pages,onClick:()=>t([...e,{id:w(),columns:[75,25],rows:[50,50],sections:[]}]),children:[(0,T.jsx)(m,{icon:`mdi:plus`}),` `,n(`add_page`)]})})]})},K=({buttons:e,onChange:t})=>{let n=r(),i=(n,r)=>t(e.map((e,t)=>t===n?{...e,...r}:e));return(0,T.jsxs)(T.Fragment,{children:[e.map((r,a)=>(0,T.jsxs)(x,{children:[(0,T.jsxs)(`legend`,{children:[n(`button`),` `,a+1]}),(0,T.jsxs)(b,{$columns:`minmax(0, 1.5fr) minmax(0, 1fr) 6em auto`,children:[(0,T.jsx)(E,{label:n(`name`),value:r.name,onChange:e=>i(a,{name:e})}),(0,T.jsx)(j,{label:n(`icon`),value:r.icon,onChange:e=>i(a,{icon:e})}),(0,T.jsx)(D,{label:n(`columns`),value:r.columns,min:1,max:_.sectionCells,onChange:e=>i(a,{columns:e})}),(0,T.jsx)(F,{index:a,length:e.length,onMove:n=>t(C(e,a,n)),onRemove:()=>t(e.filter((e,t)=>t!==a))})]}),(0,T.jsx)(z,{tiles:r.tiles,columns:r.columns,rows:_.sectionCells,onChange:e=>i(a,{tiles:e})})]},r.id)),(0,T.jsx)(`div`,{children:(0,T.jsxs)(S,{type:`button`,disabled:e.length>=_.buttons,onClick:()=>t([...e,{id:w(),name:``,icon:`mdi:gesture-tap`,columns:4,tiles:[]}]),children:[(0,T.jsx)(m,{icon:`mdi:plus`}),` `,n(`add_button`)]})})]})},q=f.div`
  display: grid;
  grid-template-columns: minmax(0, 1.4fr) minmax(0, 1.2fr) auto auto;
  gap: ${i(.5)} ${i(1.2)};
  align-items: center;
  font-size: ${i(.9)};

  .head {
    color: ${({theme:e})=>e.text.secondary};
    font-size: ${i(.8)};
  }

  .badge {
    margin-left: ${i(.5)};
    padding: 0 ${i(.4)};
    border-radius: ${i(.4)};
    background: ${({theme:e})=>e.bubble.background};
    font-size: ${i(.7)};
    color: ${({theme:e})=>e.text.secondary};
  }
`,J=({dashboards:e})=>{let t=r(),n=h(),[i,a]=(0,g.useState)(null);(0,g.useEffect)(()=>{n?.sendMessagePromise({type:`better_wall_dashboard/users`}).then(e=>a(e.users)).catch(()=>a([]))},[n]);let o=(0,g.useCallback)(async(e,t)=>{if(!n)return;a(n=>n?.map(n=>n.id===e.id?{...n,...t}:n)??null);let r=await n.sendMessagePromise({type:`better_wall_dashboard/save_user`,user_id:e.id,...t});a(t=>t?.map(t=>t.id===e.id?{...t,...r}:t)??null)},[n]);return(0,T.jsxs)(x,{children:[(0,T.jsx)(`legend`,{children:t(`tab_users`)}),(0,T.jsxs)(q,{children:[(0,T.jsx)(`span`,{className:`head`,children:t(`user`)}),(0,T.jsx)(`span`,{className:`head`,children:t(`assigned_dashboard`)}),(0,T.jsx)(`span`,{className:`head`,children:t(`kiosk`)}),(0,T.jsx)(`span`,{className:`head`,children:t(`start_page`)}),i?.map(t=>(0,T.jsx)(Y,{user:t,dashboards:e,onSave:o},t.id))]})]})},Y=({user:e,dashboards:t,onSave:n})=>{let i=r();return(0,T.jsxs)(T.Fragment,{children:[(0,T.jsxs)(`span`,{children:[e.name,e.is_admin&&(0,T.jsx)(`span`,{className:`badge`,children:i(`admin`)}),!e.is_active&&(0,T.jsx)(`span`,{className:`badge`,children:i(`inactive`)})]}),(0,T.jsx)(A,{label:``,value:e.dashboard,options:t.map(e=>({value:e.id,label:e.name})),onChange:t=>n(e,{dashboard:t})}),(0,T.jsx)(k,{label:``,value:e.kiosk,onChange:t=>n(e,{kiosk:t})}),(0,T.jsx)(k,{label:``,value:!!e.default_panel,onChange:t=>n(e,{default_panel:t})})]})},X=f.div`
  position: relative;
  width: 100%;
  height: 100%;
  min-height: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
`,re=f.div`
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
`,ie=(0,g.memo)(({dashboard:e,device:t,portrait:i})=>{let a=r(),o=(0,g.useRef)(null),[s,c]=(0,g.useState)(.5),l=i?t.height:t.width,d=i?t.width:t.height;(0,g.useLayoutEffect)(()=>{let e=o.current;if(!e)return;let t=()=>{let t=Math.min((e.clientWidth-40)/l,(e.clientHeight-40)/d);c(Math.max(.1,Math.min(1,Math.floor(t*1e3)/1e3)))};t();let n=new ResizeObserver(t);return n.observe(e),()=>n.disconnect()},[l,d]);let f=(0,g.useMemo)(()=>({dashboard:e,dashboards:[],kiosk:!1,is_admin:!0}),[e]);return(0,T.jsx)(X,{ref:o,"aria-label":a(`preview`),children:(0,T.jsx)(re,{style:{width:l,height:d,transform:`translate(-50%, -50%) scale(${s})`},children:(0,T.jsx)(n,{view:f,children:(0,T.jsx)(u,{})})})})}),Z=[{id:`tab-10`,label:`10″ tablet · 1280×800`,width:1280,height:800},{id:`tab-11`,label:`11″ tablet · 1194×834`,width:1194,height:834},{id:`tab-12`,label:`12″ tablet · 1366×1024`,width:1366,height:1024},{id:`fhd`,label:`Full HD · 1920×1080`,width:1920,height:1080},{id:`small`,label:`7″ panel · 1024×600`,width:1024,height:600}],ae=[`general`,`sidebar`,`pages`,`buttons`,`users`,`json`],oe=f.div`
  --u: 14px;
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-rows: auto minmax(0, 1fr);
  background: #101316;
  color: ${({theme:e})=>e.text.primary};
`,se=f.header`
  display: flex;
  align-items: center;
  gap: ${i(.7)};
  padding: ${i(.7)} ${i(1.2)};
  border-bottom: ${({theme:e})=>e.card.border};
  background: #14191e;
  flex-wrap: wrap;

  h1 {
    margin: 0 auto 0 0;
    font-size: ${i(1.3)};
    font-weight: 600;
    display: flex;
    align-items: center;
    gap: ${i(.6)};
    white-space: nowrap;
  }

  select {
    padding: ${i(.45)} ${i(.7)};
    border-radius: ${i(.6)};
    background: rgba(0, 0, 0, 0.25);
    border: 1px solid rgba(255, 255, 255, 0.14);
    color: inherit;
    font-size: ${i(.9)};
  }

  .status {
    font-size: ${i(.85)};
    color: ${({theme:e})=>e.text.secondary};
    white-space: nowrap;
  }
`,Q=f.div`
  display: grid;
  grid-template-columns: minmax(${i(30)}, 42%) minmax(0, 1fr);
  min-height: 0;

  @media (max-width: 1100px) {
    grid-template-columns: minmax(0, 1fr);
    grid-template-rows: minmax(0, 1fr) ${i(24)};
  }
`,ce=f.div`
  overflow-y: auto;
  padding: ${i(.4)} ${i(1.2)} ${i(2)};
  display: flex;
  flex-direction: column;
  gap: ${i(.8)};
  border-right: ${({theme:e})=>e.card.border};
`,le=f.div`
  display: flex;
  gap: ${i(.3)};
  flex-wrap: wrap;
  position: sticky;
  top: 0;
  z-index: 1;
  padding: ${i(.6)} 0;
  background: #101316;

  button {
    padding: ${i(.45)} ${i(.9)};
    border-radius: ${i(1)};
    font-size: ${i(.95)};
    color: ${({theme:e})=>e.text.secondary};
  }

  button[aria-selected='true'] {
    background: ${({theme:e})=>e.bubble.header};
    color: ${({theme:e})=>e.text.primary};
  }
`,ue=f.section`
  display: grid;
  grid-template-rows: auto minmax(0, 1fr);
  min-height: 0;
  min-width: 0;
  background: radial-gradient(80% 80% at 50% 40%, #1a2129, #0c0f12);

  .toolbar {
    display: flex;
    gap: ${i(.6)};
    align-items: center;
    padding: ${i(.6)} ${i(1)};
    font-size: ${i(.85)};
    color: ${({theme:e})=>e.text.secondary};
  }

  .toolbar select {
    padding: ${i(.35)} ${i(.6)};
    border-radius: ${i(.6)};
    background: rgba(0, 0, 0, 0.3);
    border: 1px solid rgba(255, 255, 255, 0.14);
    color: inherit;
  }
`,de=f.textarea`
  min-height: 60dvh;
  font-family: ui-monospace, 'JetBrains Mono', monospace;
  font-size: ${i(.8)};
`,$=e=>JSON.parse(JSON.stringify(e)),fe=()=>{let e=r(),t=h(),{narrow:n}=ee(),[i,a]=(0,g.useState)(null),[o,s]=(0,g.useState)(`default`),[l,u]=(0,g.useState)(null),[d,f]=(0,g.useState)(!1),[p,_]=(0,g.useState)(`general`),[y,C]=(0,g.useState)(``),[D,k]=(0,g.useState)(``),[A,j]=(0,g.useState)(Z[0].id),[M,N]=(0,g.useState)(!1),P=Z.find(e=>e.id===A)??Z[0],F=(0,g.useCallback)((e,t)=>{let n=e.dashboards[t]??e.dashboards.default;s(n.id),u($(n)),f(!1)},[]);(0,g.useEffect)(()=>{t?.sendMessagePromise({type:`better_wall_dashboard/document`}).then(e=>{a(e),F(e,`default`)}).catch(e=>C(String(e?.message??e)))},[t,F]),(0,g.useEffect)(()=>{if(!d)return;let e=e=>e.preventDefault();return window.addEventListener(`beforeunload`,e),()=>window.removeEventListener(`beforeunload`,e)},[d]);let I=e=>{e===`json`&&l&&k(JSON.stringify(l,null,2)),_(e)},L=(0,g.useCallback)(e=>{u(e),f(!0),C(``)},[]),R=async()=>{if(t&&l){C(e(`saving`));try{let n=await t.sendMessagePromise({type:`better_wall_dashboard/save_dashboard`,dashboard:l});a(e=>e&&{...e,dashboards:{...e.dashboards,[n.dashboard.id]:n.dashboard}}),s(n.dashboard.id),u($(n.dashboard)),f(!1),C(e(`saved`))}catch(e){C(String(e?.message??e))}}},z=()=>!d||window.confirm(e(`discard`)+`?`),B=t=>{if(!i||!z())return;let n={...$(t??i.dashboards.default),id:w(),name:t?`${t.name} (2)`:e(`new_dashboard`)};u(n),s(n.id),f(!0),I(`general`)},V=async()=>{if(!t||!l||!i||l.id==="default"||!window.confirm(e(`confirm_delete`,{name:l.name})))return;await t.sendMessagePromise({type:`better_wall_dashboard/delete_dashboard`,dashboard_id:l.id});let n={...i.dashboards};delete n[l.id];let r={...i,dashboards:n};a(r),F(r,`default`)},H=(0,g.useMemo)(()=>{let e=Object.values(i?.dashboards??{}).map(e=>({id:e.id,name:e.name}));return l&&!e.some(e=>e.id===l.id)&&e.push({id:l.id,name:l.name}),e},[i,l]);return(0,T.jsxs)(oe,{children:[(0,T.jsxs)(se,{children:[n&&(0,T.jsx)(S,{type:`button`,"aria-label":`Menu`,onClick:e=>c(e.currentTarget),children:(0,T.jsx)(m,{icon:`mdi:menu`})}),(0,T.jsxs)(`h1`,{children:[(0,T.jsx)(m,{icon:`mdi:view-dashboard-edit`}),` `,e(`editor_title`)]}),(0,T.jsx)(`span`,{className:`status`,children:d?e(`unsaved`):y}),(0,T.jsx)(`select`,{value:o,"aria-label":e(`dashboard`),onChange:e=>{z()&&i&&F(i,e.target.value)},children:H.map(e=>(0,T.jsx)(`option`,{value:e.id,children:e.name},e.id))}),(0,T.jsxs)(S,{type:`button`,disabled:!i,onClick:()=>B(),title:e(`new_dashboard`),children:[(0,T.jsx)(m,{icon:`mdi:plus`}),` `,e(`new_dashboard`)]}),(0,T.jsx)(S,{type:`button`,disabled:!l,onClick:()=>l&&B(l),title:e(`duplicate`),children:(0,T.jsx)(m,{icon:`mdi:content-copy`})}),(0,T.jsx)(S,{type:`button`,$danger:!0,disabled:!l||l.id==="default",onClick:V,title:e(`delete_dashboard`),children:(0,T.jsx)(m,{icon:`mdi:delete-outline`})}),(0,T.jsxs)(S,{type:`button`,$primary:!0,disabled:!d,onClick:R,children:[(0,T.jsx)(m,{icon:`mdi:content-save`}),` `,e(`save`)]})]}),(0,T.jsx)(te,{children:(0,T.jsxs)(Q,{children:[(0,T.jsxs)(ce,{children:[(0,T.jsx)(le,{role:`tablist`,children:ae.map(t=>(0,T.jsx)(`button`,{type:`button`,role:`tab`,"aria-selected":p===t,onClick:()=>I(t),children:e(`tab_${t}`)},t))}),!l&&(0,T.jsx)(`p`,{children:y||e(`loading`)}),l&&p===`general`&&(0,T.jsxs)(x,{children:[(0,T.jsx)(`legend`,{children:e(`tab_general`)}),(0,T.jsx)(E,{label:e(`name`),value:l.name,onChange:e=>L({...l,name:e})}),(0,T.jsx)(E,{label:e(`background_image`),hint:e(`background_image_hint`),value:l.background.image,onChange:e=>L({...l,background:{...l.background,image:e}})}),(0,T.jsxs)(b,{children:[(0,T.jsx)(O,{label:e(`background_dim`),value:l.background.dim,min:0,max:.95,step:.05,format:e=>`${Math.round(e*100)} %`,onChange:e=>L({...l,background:{...l.background,dim:e}})}),(0,T.jsx)(O,{label:e(`background_blur`),value:l.background.blur,min:0,max:40,step:1,format:e=>`${e} px`,onChange:e=>L({...l,background:{...l.background,blur:e}})})]})]}),l&&p===`sidebar`&&(0,T.jsx)(ne,{value:l.sidebar,onChange:e=>L({...l,sidebar:e})}),l&&p===`pages`&&(0,T.jsx)(G,{pages:l.pages,onChange:e=>L({...l,pages:e})}),l&&p===`buttons`&&(0,T.jsx)(K,{buttons:l.buttons,onChange:e=>L({...l,buttons:e})}),p===`users`&&(0,T.jsx)(J,{dashboards:H}),l&&p===`json`&&(0,T.jsxs)(v,{children:[(0,T.jsx)(`span`,{className:`label`,children:e(`json_hint`)}),(0,T.jsx)(de,{value:D,spellCheck:!1,onChange:e=>k(e.target.value)}),(0,T.jsx)(`div`,{children:(0,T.jsx)(S,{type:`button`,onClick:()=>{try{let e=JSON.parse(D);L({...e,id:l.id})}catch{C(e(`json_invalid`))}},children:e(`apply`)})})]})]}),(0,T.jsxs)(ue,{children:[(0,T.jsxs)(`div`,{className:`toolbar`,children:[(0,T.jsx)(`span`,{children:e(`preview`)}),(0,T.jsx)(`select`,{value:A,onChange:e=>j(e.target.value),"aria-label":e(`preview`),children:Z.map(e=>(0,T.jsx)(`option`,{value:e.id,children:e.label},e.id))}),(0,T.jsxs)(S,{type:`button`,onClick:()=>N(e=>!e),"aria-pressed":M,children:[(0,T.jsx)(m,{icon:M?`mdi:phone-rotate-landscape`:`mdi:phone-rotate-portrait`}),e(M?`landscape`:`portrait`)]})]}),l&&(0,T.jsx)(ie,{dashboard:l,device:P,portrait:M})]})]})})]})};export{fe as default};