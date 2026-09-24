import{_ as e,a as t,c as n,d as r,f as i,g as a,h as o,i as s,l as c,m as l,n as u,o as d,p as f,r as p,s as m,t as ee,u as h,v as g}from"./boot-CtVaY8Rf.js";var _=g(e(),1),v=l.label`
  display: flex;
  flex-direction: column;
  gap: ${f(.25)};
  min-width: 0;
  font-size: ${f(.85)};

  > span.label {
    color: ${({theme:e})=>e.text.secondary};
  }

  > small {
    color: ${({theme:e})=>e.text.muted};
    font-size: ${f(.75)};
  }

  input:not([type='checkbox']):not([type='range']),
  select,
  textarea {
    width: 100%;
    min-width: 0;
    padding: ${f(.5)} ${f(.7)};
    border-radius: ${f(.6)};
    border: 1px solid rgba(255, 255, 255, 0.12);
    background: rgba(0, 0, 0, 0.25);
    color: inherit;
    font-size: ${f(.9)};
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
`,y=l.label`
  display: flex;
  align-items: center;
  gap: ${f(.6)};
  font-size: ${f(.9)};
  min-height: ${f(2.2)};

  input {
    width: ${f(1.1)};
    height: ${f(1.1)};
    accent-color: ${({theme:e})=>e.colors.accent};
  }
`,b=l.div`
  display: grid;
  grid-template-columns: ${({$columns:e})=>e??`repeat(auto-fill, minmax(14em, 1fr))`};
  gap: ${f(.6)} ${f(.9)};
  align-items: end;
`,x=l.fieldset`
  border: ${({theme:e})=>e.card.border};
  border-radius: ${f(1)};
  background: rgba(255, 255, 255, 0.025);
  padding: ${f(.8)} ${f(1)} ${f(1)};
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: ${f(.7)};
  min-width: 0;

  > legend {
    padding: 0 ${f(.4)};
    font-weight: 600;
    font-size: ${f(.95)};
  }
`,S=l.button`
  display: inline-flex;
  align-items: center;
  gap: ${f(.35)};
  padding: ${f(.4)} ${f(.8)};
  border-radius: ${f(.6)};
  font-size: ${f(.85)};
  white-space: nowrap;
  background: ${({$primary:e,$danger:t,theme:n})=>e?n.colors.accent:t?`rgba(255, 77, 77, 0.18)`:n.bubble.background};
  color: ${({$primary:e})=>e?`#0b141d`:`inherit`};
  font-weight: ${({$primary:e})=>e?600:400};

  &:disabled {
    opacity: 0.4;
    cursor: default;
  }
`;function C(e,t,n){if(n<0||n>=e.length)return e;let r=[...e],[i]=r.splice(t,1);return r.splice(n,0,i),r}function w(){let e=new Uint8Array(6);return crypto.getRandomValues(e),Array.from(e,e=>e.toString(16).padStart(2,`0`)).join(``)}var T=g(a(),1),E=({label:e,hint:t,value:n,onChange:r,placeholder:i,type:a})=>(0,T.jsxs)(v,{children:[(0,T.jsx)(`span`,{className:`label`,children:e}),(0,T.jsx)(`input`,{type:a??`text`,value:n,placeholder:i,onChange:e=>r(e.target.value)}),t&&(0,T.jsx)(`small`,{children:t})]}),D=({label:e,hint:t,value:n,onChange:r,min:i,max:a,step:o})=>(0,T.jsxs)(v,{children:[(0,T.jsx)(`span`,{className:`label`,children:e}),(0,T.jsx)(`input`,{type:`number`,value:n,min:i,max:a,step:o??1,onChange:e=>{let t=Number(e.target.value);Number.isFinite(t)&&r(t)}}),t&&(0,T.jsx)(`small`,{children:t})]}),O=({label:e,value:t,onChange:n,min:r,max:i,step:a,format:o})=>(0,T.jsxs)(v,{children:[(0,T.jsxs)(`span`,{className:`label`,children:[e,`: `,o?o(t):t]}),(0,T.jsx)(`input`,{type:`range`,value:t,min:r,max:i,step:a,onChange:e=>n(Number(e.target.value))})]}),k=({label:e,value:t,onChange:n})=>(0,T.jsxs)(y,{children:[(0,T.jsx)(`input`,{type:`checkbox`,checked:t,onChange:e=>n(e.target.checked)}),e]}),A=({label:e,hint:t,value:n,onChange:r,options:i})=>(0,T.jsxs)(v,{children:[(0,T.jsx)(`span`,{className:`label`,children:e}),(0,T.jsx)(`select`,{value:n,onChange:e=>r(e.target.value),children:i.map(e=>(0,T.jsx)(`option`,{value:e.value,children:e.label},e.value))}),t&&(0,T.jsx)(`small`,{children:t})]}),j=({label:e,value:t,onChange:r})=>(0,T.jsxs)(v,{children:[(0,T.jsx)(`span`,{className:`label`,children:e}),(0,T.jsxs)(`span`,{style:{display:`flex`,gap:`0.5em`,alignItems:`center`},children:[(0,T.jsx)(`input`,{type:`text`,value:t,placeholder:`mdi:…`,onChange:e=>r(e.target.value)}),t&&(0,T.jsx)(n,{icon:t,size:`1.6em`})]})]}),M=(0,_.createContext)([]),te=({children:e})=>{let t=o(s(e=>{let t={};for(let[n,r]of Object.entries(e.entities))t[n]=r.attributes.friendly_name||n;return t})),n=(0,_.useMemo)(()=>Object.entries(t).map(([e,t])=>({id:e,name:t})).sort((e,t)=>e.id.localeCompare(t.id)),[t]);return(0,T.jsx)(M.Provider,{value:n,children:e})},N=({label:e,hint:t,value:n,onChange:r,domains:a})=>{let o=(0,_.useContext)(M),s=(0,_.useId)(),c=i(),l=(0,_.useMemo)(()=>a?.length?o.filter(e=>a.includes(e.id.split(`.`)[0])):o,[o,a]),u=o.find(e=>e.id===n);return(0,T.jsxs)(v,{children:[(0,T.jsx)(`span`,{className:`label`,children:e}),(0,T.jsx)(`input`,{type:`text`,list:s,value:n,placeholder:a?.length?`${a[0]}.…`:`domain.object_id`,onChange:e=>r(e.target.value.trim())}),(0,T.jsx)(`datalist`,{id:s,children:l.map(e=>(0,T.jsx)(`option`,{value:e.id,children:e.name},e.id))}),n&&(0,T.jsx)(`small`,{children:u?u.name:c(`not_found`)}),t&&(0,T.jsx)(`small`,{children:t})]})},P=({label:e,hint:t,value:r,onChange:a,domains:o,max:s})=>{let c=i();return(0,T.jsxs)(x,{children:[(0,T.jsx)(`legend`,{children:e}),t&&(0,T.jsx)(`small`,{children:t}),r.map((e,t)=>(0,T.jsxs)(b,{$columns:`minmax(0, 1fr) auto`,children:[(0,T.jsx)(N,{label:`${t+1}`,value:e,domains:o,onChange:e=>a(r.map((n,r)=>r===t?e:n))}),(0,T.jsx)(F,{index:t,length:r.length,onMove:e=>a(C(r,t,e)),onRemove:()=>a(r.filter((e,n)=>n!==t))})]},t)),(0,T.jsx)(`div`,{children:(0,T.jsxs)(S,{type:`button`,disabled:s!==void 0&&r.length>=s,onClick:()=>a([...r,``]),children:[(0,T.jsx)(n,{icon:`mdi:plus`}),` `,c(`add`)]})})]})},F=({index:e,length:t,onMove:r,onRemove:a,onDuplicate:o})=>{let s=i();return(0,T.jsxs)(`span`,{style:{display:`flex`,gap:`0.3em`},children:[(0,T.jsx)(S,{type:`button`,disabled:e===0,onClick:()=>r(e-1),title:s(`move_up`),"aria-label":s(`move_up`),children:(0,T.jsx)(n,{icon:`mdi:arrow-up`})}),(0,T.jsx)(S,{type:`button`,disabled:e===t-1,onClick:()=>r(e+1),title:s(`move_down`),"aria-label":s(`move_down`),children:(0,T.jsx)(n,{icon:`mdi:arrow-down`})}),o&&(0,T.jsx)(S,{type:`button`,onClick:o,title:s(`duplicate`),"aria-label":s(`duplicate`),children:(0,T.jsx)(n,{icon:`mdi:content-copy`})}),(0,T.jsx)(S,{type:`button`,$danger:!0,onClick:a,title:s(`remove`),"aria-label":s(`remove`),children:(0,T.jsx)(n,{icon:`mdi:delete-outline`})})]})},I=({label:e,items:t,max:r,domains:a,onChange:o})=>{let s=i(),c=(e,n)=>o(t.map((t,r)=>r===e?{...t,...n}:t));return(0,T.jsxs)(x,{children:[(0,T.jsxs)(`legend`,{children:[e,` (`,t.length,`/`,r,`)`]}),t.map((e,n)=>(0,T.jsxs)(b,{$columns:`minmax(0, 2fr) minmax(0, 1.2fr) minmax(0, 1fr) auto`,children:[(0,T.jsx)(N,{label:s(`entity`),value:e.entity,domains:a,onChange:e=>c(n,{entity:e})}),(0,T.jsx)(E,{label:s(`name`),value:e.name,onChange:e=>c(n,{name:e})}),(0,T.jsx)(j,{label:s(`icon`),value:e.icon,onChange:e=>c(n,{icon:e})}),(0,T.jsx)(F,{index:n,length:t.length,onMove:e=>o(C(t,n,e)),onRemove:()=>o(t.filter((e,t)=>t!==n))})]},e.id)),(0,T.jsx)(`div`,{children:(0,T.jsxs)(S,{type:`button`,disabled:t.length>=r,onClick:()=>o([...t,{id:w(),entity:``,name:``,icon:``}]),children:[(0,T.jsx)(n,{icon:`mdi:plus`}),` `,s(`add`)]})})]})},L=[`input_boolean`,`switch`,`binary_sensor`],ne=({value:e,onChange:t})=>{let n=i(),r=(n,r)=>t({...e,[n]:{...e[n],...r}});return(0,T.jsxs)(T.Fragment,{children:[(0,T.jsxs)(x,{children:[(0,T.jsx)(`legend`,{children:n(`status_icons`)}),(0,T.jsxs)(b,{children:[(0,T.jsx)(N,{label:n(`absence_mode`),value:e.status.absence,domains:L,onChange:e=>r(`status`,{absence:e})}),(0,T.jsx)(N,{label:n(`guest_mode`),value:e.status.guest,domains:L,onChange:e=>r(`status`,{guest:e})}),(0,T.jsx)(N,{label:n(`night_mode`),value:e.status.night,domains:L,onChange:e=>r(`status`,{night:e})}),(0,T.jsx)(N,{label:n(`wifi_signal`),hint:n(`wifi_signal_hint`),value:e.status.wifi_signal,domains:[`sensor`],onChange:e=>r(`status`,{wifi_signal:e})})]})]}),(0,T.jsxs)(x,{children:[(0,T.jsx)(`legend`,{children:n(`guest_wifi`)}),(0,T.jsx)(N,{label:n(`guest_qr_image`),hint:n(`guest_qr_image_hint`),value:e.guest_wifi.qr_image,domains:[`image`],onChange:e=>r(`guest_wifi`,{qr_image:e})}),(0,T.jsxs)(b,{children:[(0,T.jsx)(E,{label:n(`network`),value:e.guest_wifi.ssid,onChange:e=>r(`guest_wifi`,{ssid:e})}),(0,T.jsx)(E,{label:n(`password`),type:`password`,value:e.guest_wifi.password,onChange:e=>r(`guest_wifi`,{password:e})}),(0,T.jsx)(A,{label:n(`security`),value:e.guest_wifi.security,options:[{value:`WPA`,label:`WPA/WPA2/WPA3`},{value:`WEP`,label:`WEP`},{value:`nopass`,label:`—`}],onChange:e=>r(`guest_wifi`,{security:e})}),(0,T.jsx)(k,{label:n(`hidden_network`),value:e.guest_wifi.hidden,onChange:e=>r(`guest_wifi`,{hidden:e})})]})]}),(0,T.jsxs)(x,{children:[(0,T.jsx)(`legend`,{children:n(`room_climate`)}),(0,T.jsxs)(b,{children:[(0,T.jsx)(N,{label:n(`temperature`),value:e.climate.temperature,domains:[`sensor`],onChange:e=>r(`climate`,{temperature:e})}),(0,T.jsx)(N,{label:n(`humidity`),value:e.climate.humidity,domains:[`sensor`],onChange:e=>r(`climate`,{humidity:e})}),(0,T.jsx)(D,{label:n(`hours`),value:e.climate.hours,min:1,max:168,onChange:e=>r(`climate`,{hours:e})})]})]}),(0,T.jsx)(P,{label:n(`persons`),value:e.persons,domains:[`person`],onChange:n=>t({...e,persons:n})}),(0,T.jsx)(P,{label:n(`openings`),value:e.openings,domains:[`binary_sensor`,`cover`,`lock`,`sensor`],onChange:n=>t({...e,openings:n})}),(0,T.jsxs)(x,{children:[(0,T.jsx)(`legend`,{children:n(`travel_time`)}),(0,T.jsxs)(b,{children:[(0,T.jsx)(N,{label:n(`travel_sensor`),value:e.travel.entity,domains:[`sensor`],onChange:e=>r(`travel`,{entity:e})}),(0,T.jsx)(E,{label:n(`name`),value:e.travel.name,placeholder:n(`travel_time`),onChange:e=>r(`travel`,{name:e})})]}),(0,T.jsx)(E,{label:n(`map_url`),hint:n(`map_url_hint`),value:e.travel.map_url,onChange:e=>r(`travel`,{map_url:e})}),(0,T.jsx)(E,{label:n(`maps_api_key`),hint:n(`maps_api_key_hint`),type:`password`,value:e.travel.maps_api_key,onChange:e=>r(`travel`,{maps_api_key:e})})]}),(0,T.jsx)(I,{label:n(`quick_actions`),items:e.quick_actions,max:p.quickActions,onChange:n=>t({...e,quick_actions:n})}),(0,T.jsxs)(x,{children:[(0,T.jsx)(`legend`,{children:n(`calendar`)}),(0,T.jsx)(P,{label:n(`calendars`),value:e.calendar.entities,domains:[`calendar`],onChange:e=>r(`calendar`,{entities:e})}),(0,T.jsx)(D,{label:n(`days`),value:e.calendar.days,min:1,max:p.calendarDays,onChange:e=>r(`calendar`,{days:e})})]}),(0,T.jsxs)(x,{children:[(0,T.jsx)(`legend`,{children:n(`weather`)}),(0,T.jsxs)(b,{children:[(0,T.jsx)(N,{label:n(`weather_entity`),value:e.weather.entity,domains:[`weather`],onChange:e=>r(`weather`,{entity:e})}),(0,T.jsx)(N,{label:n(`outdoor_temperature`),value:e.weather.temperature,domains:[`sensor`],onChange:e=>r(`weather`,{temperature:e})})]})]}),(0,T.jsxs)(x,{children:[(0,T.jsx)(`legend`,{children:n(`notifications`)}),(0,T.jsx)(k,{label:n(`notifications_enabled`),value:e.notifications.enabled,onChange:e=>r(`notifications`,{enabled:e})}),(0,T.jsx)(E,{label:n(`notifications_prefix`),hint:n(`notifications_prefix_hint`),value:e.notifications.prefix,onChange:e=>r(`notifications`,{prefix:e})})]}),(0,T.jsx)(I,{label:n(`system_stats`),items:e.system,max:p.system,domains:[`sensor`],onChange:n=>t({...e,system:n})})]})},R=({value:e,onChange:t})=>{let[n,r]=(0,_.useState)(()=>Object.keys(e).length?JSON.stringify(e):``),[a,o]=(0,_.useState)(!1),s=i();return(0,T.jsxs)(v,{children:[(0,T.jsx)(`span`,{className:`label`,children:s(`options_json`)}),(0,T.jsx)(`input`,{type:`text`,value:n,placeholder:`{"hours": 24, "color": "#03a9f4"}`,onChange:e=>{r(e.target.value);try{let n=e.target.value.trim()?JSON.parse(e.target.value):{};if(n&&typeof n==`object`&&!Array.isArray(n)){o(!1),t(n);return}}catch{}o(!0)}}),a&&(0,T.jsx)(`small`,{children:s(`json_invalid`)})]})},z=({tiles:e,columns:t,rows:r,onChange:a})=>{let o=i(),s=(t,n)=>a(e.map((e,r)=>r===t?{...e,...n}:e));return(0,T.jsxs)(x,{children:[(0,T.jsxs)(`legend`,{children:[o(`tiles`),` (`,e.length,`)`]}),e.map((n,i)=>{let c=m[n.type];return(0,T.jsxs)(b,{$columns:`minmax(0, 1.2fr) minmax(0, 2fr) minmax(0, 1.2fr) minmax(0, 1fr) 4em 4em auto`,children:[(0,T.jsx)(A,{label:o(`type`),value:n.type,options:[...d.map(e=>({value:e.type,label:o(e.label)})),...c?[]:[{value:n.type,label:n.type}]],onChange:e=>{let n=m[e]?.size??[1,1];s(i,{type:e,w:Math.min(n[0],t),h:Math.min(n[1],r)})}}),c?.needsEntity===!1?(0,T.jsx)(`span`,{}):(0,T.jsx)(N,{label:o(`entity`),value:n.entity,domains:c?.domains,onChange:e=>s(i,{entity:e})}),(0,T.jsx)(E,{label:o(`name`),value:n.name,onChange:e=>s(i,{name:e})}),(0,T.jsx)(j,{label:o(`icon`),value:n.icon,onChange:e=>s(i,{icon:e})}),(0,T.jsx)(D,{label:o(`width`),value:n.w,min:1,max:t,onChange:e=>s(i,{w:Math.max(1,Math.min(t,e))})}),(0,T.jsx)(D,{label:o(`height`),value:n.h,min:1,max:r,onChange:e=>s(i,{h:Math.max(1,Math.min(r,e))})}),(0,T.jsx)(F,{index:i,length:e.length,onMove:t=>a(C(e,i,t)),onRemove:()=>a(e.filter((e,t)=>t!==i)),onDuplicate:()=>a([...e.slice(0,i+1),{...n,id:w()},...e.slice(i+1)])}),n.type===`sensor`&&(0,T.jsx)(`div`,{style:{gridColumn:`1 / -1`},children:(0,T.jsx)(R,{value:n.options,onChange:e=>s(i,{options:e})})})]},n.id)}),(0,T.jsx)(`div`,{children:(0,T.jsxs)(S,{type:`button`,disabled:e.length>=p.tiles,onClick:()=>a([...e,{id:w(),type:`entity`,entity:``,name:``,icon:``,w:1,h:1,options:{}}]),children:[(0,T.jsx)(n,{icon:`mdi:plus`}),` `,o(`add_tile`)]})})]})},B=l.div`
  height: ${f(16)};
  padding: ${f(.6)};
  border-radius: ${f(1)};
  background: rgba(0, 0, 0, 0.3);
`,V=e=>{let t=e.split(/[,/ ]+/).filter(Boolean).map(Number);return t.length&&t.length<=3&&t.every(e=>Number.isFinite(e)&&e>0)?t:null},H=()=>({id:w(),name:``,icon:``,status:[],columns:2,rows:2,square:!0,tiles:[]}),U=({label:e,value:t,onChange:n})=>(0,T.jsx)(E,{label:e,value:t.join(`, `),onChange:e=>{let t=V(e);t&&n(t)}}),W=({section:e,onChange:n})=>{let r=i(),a=t=>n({...e,...t});return(0,T.jsxs)(T.Fragment,{children:[(0,T.jsxs)(b,{children:[(0,T.jsx)(E,{label:r(`name`),value:e.name,onChange:e=>a({name:e})}),(0,T.jsx)(j,{label:r(`icon`),value:e.icon,onChange:e=>a({icon:e})}),(0,T.jsx)(D,{label:r(`columns`),value:e.columns,min:1,max:p.sectionCells,onChange:e=>a({columns:e})}),(0,T.jsx)(D,{label:r(`rows`),value:e.rows,min:1,max:p.sectionCells,onChange:e=>a({rows:e})}),(0,T.jsx)(k,{label:r(`square_cells`),value:e.square,onChange:e=>a({square:e})})]}),(0,T.jsx)(P,{label:r(`status_entities`),value:e.status,max:p.sectionStatus,domains:[`sensor`,`binary_sensor`],onChange:e=>a({status:e})}),(0,T.jsx)(z,{tiles:e.tiles,columns:e.columns,rows:e.rows,onChange:e=>a({tiles:e})}),(0,T.jsx)(B,{children:(0,T.jsx)(t,{section:e})})]})},G=({pages:e,onChange:t})=>{let r=i(),a=(n,r)=>t(e.map((e,t)=>t===n?{...e,...r}:e));return(0,T.jsxs)(T.Fragment,{children:[e.map((i,o)=>{let s=i.columns.length*i.rows.length,c=Array.from({length:s},(e,t)=>i.sections[t]);return(0,T.jsxs)(x,{children:[(0,T.jsxs)(`legend`,{children:[r(`page`),` `,o+1]}),(0,T.jsxs)(b,{$columns:`minmax(0, 1fr) minmax(0, 1fr) auto`,children:[(0,T.jsx)(U,{label:r(`column_split`),value:i.columns,onChange:e=>a(o,{columns:e})}),(0,T.jsx)(U,{label:r(`row_split`),value:i.rows,onChange:e=>a(o,{rows:e})}),(0,T.jsx)(F,{index:o,length:e.length,onMove:n=>t(C(e,o,n)),onRemove:()=>e.length>1&&t(e.filter((e,t)=>t!==o))})]}),c.map((e,t)=>(0,T.jsxs)(x,{children:[(0,T.jsxs)(`legend`,{children:[r(`section`),` `,t+1]}),e?(0,T.jsx)(W,{section:e,onChange:e=>{let n=[...i.sections];n[t]=e,a(o,{sections:n})}}):(0,T.jsx)(`div`,{children:(0,T.jsxs)(S,{type:`button`,onClick:()=>{let e=[...i.sections];for(;e.length<=t;)e.push(H());a(o,{sections:e})},children:[(0,T.jsx)(n,{icon:`mdi:plus`}),` `,r(`add`)]})})]},e?.id??`empty-${t}`))]},i.id)}),(0,T.jsx)(`div`,{children:(0,T.jsxs)(S,{type:`button`,disabled:e.length>=p.pages,onClick:()=>t([...e,{id:w(),columns:[75,25],rows:[50,50],sections:[]}]),children:[(0,T.jsx)(n,{icon:`mdi:plus`}),` `,r(`add_page`)]})})]})},K=({buttons:e,onChange:t})=>{let r=i(),a=(n,r)=>t(e.map((e,t)=>t===n?{...e,...r}:e));return(0,T.jsxs)(T.Fragment,{children:[e.map((n,i)=>(0,T.jsxs)(x,{children:[(0,T.jsxs)(`legend`,{children:[r(`button`),` `,i+1]}),(0,T.jsxs)(b,{$columns:`minmax(0, 1.5fr) minmax(0, 1fr) 6em auto`,children:[(0,T.jsx)(E,{label:r(`name`),value:n.name,onChange:e=>a(i,{name:e})}),(0,T.jsx)(j,{label:r(`icon`),value:n.icon,onChange:e=>a(i,{icon:e})}),(0,T.jsx)(D,{label:r(`columns`),value:n.columns,min:1,max:p.sectionCells,onChange:e=>a(i,{columns:e})}),(0,T.jsx)(F,{index:i,length:e.length,onMove:n=>t(C(e,i,n)),onRemove:()=>t(e.filter((e,t)=>t!==i))})]}),(0,T.jsx)(z,{tiles:n.tiles,columns:n.columns,rows:p.sectionCells,onChange:e=>a(i,{tiles:e})})]},n.id)),(0,T.jsx)(`div`,{children:(0,T.jsxs)(S,{type:`button`,disabled:e.length>=p.buttons,onClick:()=>t([...e,{id:w(),name:``,icon:`mdi:gesture-tap`,columns:4,tiles:[]}]),children:[(0,T.jsx)(n,{icon:`mdi:plus`}),` `,r(`add_button`)]})})]})},q=l.div`
  display: grid;
  grid-template-columns: minmax(0, 1.4fr) minmax(0, 1.2fr) auto auto;
  gap: ${f(.5)} ${f(1.2)};
  align-items: center;
  font-size: ${f(.9)};

  .head {
    color: ${({theme:e})=>e.text.secondary};
    font-size: ${f(.8)};
  }

  .badge {
    margin-left: ${f(.5)};
    padding: 0 ${f(.4)};
    border-radius: ${f(.4)};
    background: ${({theme:e})=>e.bubble.background};
    font-size: ${f(.7)};
    color: ${({theme:e})=>e.text.secondary};
  }
`,J=({dashboards:e})=>{let t=i(),n=r(),[a,o]=(0,_.useState)(null);(0,_.useEffect)(()=>{n?.sendMessagePromise({type:`better_wall_dashboard/users`}).then(e=>o(e.users)).catch(()=>o([]))},[n]);let s=(0,_.useCallback)(async(e,t)=>{if(!n)return;o(n=>n?.map(n=>n.id===e.id?{...n,...t}:n)??null);let r=await n.sendMessagePromise({type:`better_wall_dashboard/save_user`,user_id:e.id,...t});o(t=>t?.map(t=>t.id===e.id?{...t,...r}:t)??null)},[n]);return(0,T.jsxs)(x,{children:[(0,T.jsx)(`legend`,{children:t(`tab_users`)}),(0,T.jsxs)(q,{children:[(0,T.jsx)(`span`,{className:`head`,children:t(`user`)}),(0,T.jsx)(`span`,{className:`head`,children:t(`assigned_dashboard`)}),(0,T.jsx)(`span`,{className:`head`,children:t(`kiosk`)}),(0,T.jsx)(`span`,{className:`head`,children:t(`start_page`)}),a?.map(t=>(0,T.jsx)(Y,{user:t,dashboards:e,onSave:s},t.id))]})]})},Y=({user:e,dashboards:t,onSave:n})=>{let r=i();return(0,T.jsxs)(T.Fragment,{children:[(0,T.jsxs)(`span`,{children:[e.name,e.is_admin&&(0,T.jsx)(`span`,{className:`badge`,children:r(`admin`)}),!e.is_active&&(0,T.jsx)(`span`,{className:`badge`,children:r(`inactive`)})]}),(0,T.jsx)(A,{label:``,value:e.dashboard,options:t.map(e=>({value:e.id,label:e.name})),onChange:t=>n(e,{dashboard:t})}),(0,T.jsx)(k,{label:``,value:e.kiosk,onChange:t=>n(e,{kiosk:t})}),(0,T.jsx)(k,{label:``,value:!!e.default_panel,onChange:t=>n(e,{default_panel:t})})]})},X=l.div`
  position: relative;
  width: 100%;
  height: 100%;
  min-height: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
`,re=l.div`
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
`,ie=(0,_.memo)(({dashboard:e,device:t,portrait:n})=>{let r=i(),a=(0,_.useRef)(null),[o,s]=(0,_.useState)(.5),l=n?t.height:t.width,d=n?t.width:t.height;(0,_.useLayoutEffect)(()=>{let e=a.current;if(!e)return;let t=()=>{let t=Math.min((e.clientWidth-40)/l,(e.clientHeight-40)/d);s(Math.max(.1,Math.min(1,Math.floor(t*1e3)/1e3)))};t();let n=new ResizeObserver(t);return n.observe(e),()=>n.disconnect()},[l,d]);let f=(0,_.useMemo)(()=>({dashboard:e,dashboards:[],kiosk:!1,is_admin:!0}),[e]);return(0,T.jsx)(X,{ref:a,"aria-label":r(`preview`),children:(0,T.jsx)(re,{style:{width:l,height:d,transform:`translate(-50%, -50%) scale(${o})`},children:(0,T.jsx)(c,{view:f,children:(0,T.jsx)(u,{})})})})}),Z=[{id:`tab-10`,label:`10″ tablet · 1280×800`,width:1280,height:800},{id:`tab-11`,label:`11″ tablet · 1194×834`,width:1194,height:834},{id:`tab-12`,label:`12″ tablet · 1366×1024`,width:1366,height:1024},{id:`fhd`,label:`Full HD · 1920×1080`,width:1920,height:1080},{id:`small`,label:`7″ panel · 1024×600`,width:1024,height:600}],ae=[`general`,`sidebar`,`pages`,`buttons`,`users`,`json`],oe=l.div`
  --u: 14px;
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-rows: auto minmax(0, 1fr);
  background: #101316;
  color: ${({theme:e})=>e.text.primary};
`,Q=l.header`
  display: flex;
  align-items: center;
  gap: ${f(.7)};
  padding: ${f(.7)} ${f(1.2)};
  border-bottom: ${({theme:e})=>e.card.border};
  background: #14191e;
  flex-wrap: wrap;

  h1 {
    margin: 0 auto 0 0;
    font-size: ${f(1.3)};
    font-weight: 600;
    display: flex;
    align-items: center;
    gap: ${f(.6)};
    white-space: nowrap;
  }

  select {
    padding: ${f(.45)} ${f(.7)};
    border-radius: ${f(.6)};
    background: rgba(0, 0, 0, 0.25);
    border: 1px solid rgba(255, 255, 255, 0.14);
    color: inherit;
    font-size: ${f(.9)};
  }

  .status {
    font-size: ${f(.85)};
    color: ${({theme:e})=>e.text.secondary};
    white-space: nowrap;
  }
`,se=l.div`
  display: grid;
  grid-template-columns: minmax(${f(30)}, 42%) minmax(0, 1fr);
  min-height: 0;

  @media (max-width: 1100px) {
    grid-template-columns: minmax(0, 1fr);
    grid-template-rows: minmax(0, 1fr) ${f(24)};
  }
`,ce=l.div`
  overflow-y: auto;
  padding: ${f(.4)} ${f(1.2)} ${f(2)};
  display: flex;
  flex-direction: column;
  gap: ${f(.8)};
  border-right: ${({theme:e})=>e.card.border};
`,le=l.div`
  display: flex;
  gap: ${f(.3)};
  flex-wrap: wrap;
  position: sticky;
  top: 0;
  z-index: 1;
  padding: ${f(.6)} 0;
  background: #101316;

  button {
    padding: ${f(.45)} ${f(.9)};
    border-radius: ${f(1)};
    font-size: ${f(.95)};
    color: ${({theme:e})=>e.text.secondary};
  }

  button[aria-selected='true'] {
    background: ${({theme:e})=>e.bubble.header};
    color: ${({theme:e})=>e.text.primary};
  }
`,ue=l.section`
  display: grid;
  grid-template-rows: auto minmax(0, 1fr);
  min-height: 0;
  min-width: 0;
  background: radial-gradient(80% 80% at 50% 40%, #1a2129, #0c0f12);

  .toolbar {
    display: flex;
    gap: ${f(.6)};
    align-items: center;
    padding: ${f(.6)} ${f(1)};
    font-size: ${f(.85)};
    color: ${({theme:e})=>e.text.secondary};
  }

  .toolbar select {
    padding: ${f(.35)} ${f(.6)};
    border-radius: ${f(.6)};
    background: rgba(0, 0, 0, 0.3);
    border: 1px solid rgba(255, 255, 255, 0.14);
    color: inherit;
  }
`,de=l.textarea`
  min-height: 60dvh;
  font-family: ui-monospace, 'JetBrains Mono', monospace;
  font-size: ${f(.8)};
`,$=e=>JSON.parse(JSON.stringify(e)),fe=()=>{let e=i(),t=r(),{narrow:a}=ee(),[o,s]=(0,_.useState)(null),[c,l]=(0,_.useState)(`default`),[u,d]=(0,_.useState)(null),[f,p]=(0,_.useState)(!1),[m,g]=(0,_.useState)(`general`),[y,C]=(0,_.useState)(``),[D,k]=(0,_.useState)(``),[A,j]=(0,_.useState)(Z[0].id),[M,N]=(0,_.useState)(!1),P=Z.find(e=>e.id===A)??Z[0],F=(0,_.useCallback)((e,t)=>{let n=e.dashboards[t]??e.dashboards.default;l(n.id),d($(n)),p(!1)},[]);(0,_.useEffect)(()=>{t?.sendMessagePromise({type:`better_wall_dashboard/document`}).then(e=>{s(e),F(e,`default`)}).catch(e=>C(String(e?.message??e)))},[t,F]),(0,_.useEffect)(()=>{if(!f)return;let e=e=>e.preventDefault();return window.addEventListener(`beforeunload`,e),()=>window.removeEventListener(`beforeunload`,e)},[f]);let I=e=>{e===`json`&&u&&k(JSON.stringify(u,null,2)),g(e)},L=(0,_.useCallback)(e=>{d(e),p(!0),C(``)},[]),R=async()=>{if(t&&u){C(e(`saving`));try{let n=await t.sendMessagePromise({type:`better_wall_dashboard/save_dashboard`,dashboard:u});s(e=>e&&{...e,dashboards:{...e.dashboards,[n.dashboard.id]:n.dashboard}}),l(n.dashboard.id),d($(n.dashboard)),p(!1),C(e(`saved`))}catch(e){C(String(e?.message??e))}}},z=()=>!f||window.confirm(e(`discard`)+`?`),B=t=>{if(!o||!z())return;let n={...$(t??o.dashboards.default),id:w(),name:t?`${t.name} (2)`:e(`new_dashboard`)};d(n),l(n.id),p(!0),I(`general`)},V=async()=>{if(!t||!u||!o||u.id==="default"||!window.confirm(e(`confirm_delete`,{name:u.name})))return;await t.sendMessagePromise({type:`better_wall_dashboard/delete_dashboard`,dashboard_id:u.id});let n={...o.dashboards};delete n[u.id];let r={...o,dashboards:n};s(r),F(r,`default`)},H=(0,_.useMemo)(()=>{let e=Object.values(o?.dashboards??{}).map(e=>({id:e.id,name:e.name}));return u&&!e.some(e=>e.id===u.id)&&e.push({id:u.id,name:u.name}),e},[o,u]);return(0,T.jsxs)(oe,{children:[(0,T.jsxs)(Q,{children:[a&&(0,T.jsx)(S,{type:`button`,"aria-label":`Menu`,onClick:e=>h(e.currentTarget),children:(0,T.jsx)(n,{icon:`mdi:menu`})}),(0,T.jsxs)(`h1`,{children:[(0,T.jsx)(n,{icon:`mdi:view-dashboard-edit`}),` `,e(`editor_title`)]}),(0,T.jsx)(`span`,{className:`status`,children:f?e(`unsaved`):y}),(0,T.jsx)(`select`,{value:c,"aria-label":e(`dashboard`),onChange:e=>{z()&&o&&F(o,e.target.value)},children:H.map(e=>(0,T.jsx)(`option`,{value:e.id,children:e.name},e.id))}),(0,T.jsxs)(S,{type:`button`,disabled:!o,onClick:()=>B(),title:e(`new_dashboard`),children:[(0,T.jsx)(n,{icon:`mdi:plus`}),` `,e(`new_dashboard`)]}),(0,T.jsx)(S,{type:`button`,disabled:!u,onClick:()=>u&&B(u),title:e(`duplicate`),children:(0,T.jsx)(n,{icon:`mdi:content-copy`})}),(0,T.jsx)(S,{type:`button`,$danger:!0,disabled:!u||u.id==="default",onClick:V,title:e(`delete_dashboard`),children:(0,T.jsx)(n,{icon:`mdi:delete-outline`})}),(0,T.jsxs)(S,{type:`button`,$primary:!0,disabled:!f,onClick:R,children:[(0,T.jsx)(n,{icon:`mdi:content-save`}),` `,e(`save`)]})]}),(0,T.jsx)(te,{children:(0,T.jsxs)(se,{children:[(0,T.jsxs)(ce,{children:[(0,T.jsx)(le,{role:`tablist`,children:ae.map(t=>(0,T.jsx)(`button`,{type:`button`,role:`tab`,"aria-selected":m===t,onClick:()=>I(t),children:e(`tab_${t}`)},t))}),!u&&(0,T.jsx)(`p`,{children:y||e(`loading`)}),u&&m===`general`&&(0,T.jsxs)(x,{children:[(0,T.jsx)(`legend`,{children:e(`tab_general`)}),(0,T.jsx)(E,{label:e(`name`),value:u.name,onChange:e=>L({...u,name:e})}),(0,T.jsx)(E,{label:e(`background_image`),hint:e(`background_image_hint`),value:u.background.image,onChange:e=>L({...u,background:{...u.background,image:e}})}),(0,T.jsxs)(b,{children:[(0,T.jsx)(O,{label:e(`background_dim`),value:u.background.dim,min:0,max:.95,step:.05,format:e=>`${Math.round(e*100)} %`,onChange:e=>L({...u,background:{...u.background,dim:e}})}),(0,T.jsx)(O,{label:e(`background_blur`),value:u.background.blur,min:0,max:40,step:1,format:e=>`${e} px`,onChange:e=>L({...u,background:{...u.background,blur:e}})})]})]}),u&&m===`sidebar`&&(0,T.jsx)(ne,{value:u.sidebar,onChange:e=>L({...u,sidebar:e})}),u&&m===`pages`&&(0,T.jsx)(G,{pages:u.pages,onChange:e=>L({...u,pages:e})}),u&&m===`buttons`&&(0,T.jsx)(K,{buttons:u.buttons,onChange:e=>L({...u,buttons:e})}),m===`users`&&(0,T.jsx)(J,{dashboards:H}),u&&m===`json`&&(0,T.jsxs)(v,{children:[(0,T.jsx)(`span`,{className:`label`,children:e(`json_hint`)}),(0,T.jsx)(de,{value:D,spellCheck:!1,onChange:e=>k(e.target.value)}),(0,T.jsx)(`div`,{children:(0,T.jsx)(S,{type:`button`,onClick:()=>{try{let e=JSON.parse(D);L({...e,id:u.id})}catch{C(e(`json_invalid`))}},children:e(`apply`)})})]})]}),(0,T.jsxs)(ue,{children:[(0,T.jsxs)(`div`,{className:`toolbar`,children:[(0,T.jsx)(`span`,{children:e(`preview`)}),(0,T.jsx)(`select`,{value:A,onChange:e=>j(e.target.value),"aria-label":e(`preview`),children:Z.map(e=>(0,T.jsx)(`option`,{value:e.id,children:e.label},e.id))}),(0,T.jsxs)(S,{type:`button`,onClick:()=>N(e=>!e),"aria-pressed":M,children:[(0,T.jsx)(n,{icon:M?`mdi:phone-rotate-landscape`:`mdi:phone-rotate-portrait`}),e(M?`landscape`:`portrait`)]})]}),u&&(0,T.jsx)(ie,{dashboard:u,device:P,portrait:M})]})]})})]})};export{fe as default};