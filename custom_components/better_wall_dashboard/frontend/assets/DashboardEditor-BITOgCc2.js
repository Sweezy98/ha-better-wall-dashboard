import{a as e,c as t,d as n,f as r,h as i,i as a,l as o,m as s,n as c,o as l,p as u,r as d,s as f,t as p,u as m}from"../better_wall_dashboard.js";var h=i(s(),1),g={pages:10,quickActions:6,buttons:5,sectionStatus:2,system:8,sectionCells:12,tiles:64,calendarDays:14},_=n.label`
  display: flex;
  flex-direction: column;
  gap: ${m(.25)};
  min-width: 0;
  font-size: ${m(.85)};

  > span.label {
    color: ${({theme:e})=>e.text.secondary};
  }

  > small {
    color: ${({theme:e})=>e.text.muted};
    font-size: ${m(.75)};
  }

  input:not([type='checkbox']):not([type='range']),
  select,
  textarea {
    width: 100%;
    min-width: 0;
    padding: ${m(.5)} ${m(.7)};
    border-radius: ${m(.6)};
    border: 1px solid rgba(255, 255, 255, 0.12);
    background: rgba(0, 0, 0, 0.25);
    color: inherit;
    font-size: ${m(.9)};
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
`,v=n.label`
  display: flex;
  align-items: center;
  gap: ${m(.6)};
  font-size: ${m(.9)};
  min-height: ${m(2.2)};

  input {
    width: ${m(1.1)};
    height: ${m(1.1)};
    accent-color: ${({theme:e})=>e.colors.accent};
  }
`,y=n.div`
  display: grid;
  grid-template-columns: ${({$columns:e})=>e??`repeat(auto-fill, minmax(14em, 1fr))`};
  gap: ${m(.6)} ${m(.9)};
  align-items: end;
`,b=n.fieldset`
  border: ${({theme:e})=>e.card.border};
  border-radius: ${m(1)};
  background: rgba(255, 255, 255, 0.025);
  padding: ${m(.8)} ${m(1)} ${m(1)};
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: ${m(.7)};
  min-width: 0;

  > legend {
    padding: 0 ${m(.4)};
    font-weight: 600;
    font-size: ${m(.95)};
  }
`,x=n.button`
  display: inline-flex;
  align-items: center;
  gap: ${m(.35)};
  padding: ${m(.4)} ${m(.8)};
  border-radius: ${m(.6)};
  font-size: ${m(.85)};
  white-space: nowrap;
  background: ${({$primary:e,$danger:t,theme:n})=>e?n.colors.accent:t?`rgba(255, 77, 77, 0.18)`:n.bubble.background};
  color: ${({$primary:e})=>e?`#0b141d`:`inherit`};
  font-weight: ${({$primary:e})=>e?600:400};

  &:disabled {
    opacity: 0.4;
    cursor: default;
  }
`;function S(e,t,n){if(n<0||n>=e.length)return e;let r=[...e],[i]=r.splice(t,1);return r.splice(n,0,i),r}function C(){let e=new Uint8Array(6);return crypto.getRandomValues(e),Array.from(e,e=>e.toString(16).padStart(2,`0`)).join(``)}var w=i(u(),1),T=({label:e,hint:t,value:n,onChange:r,placeholder:i,type:a})=>(0,w.jsxs)(_,{children:[(0,w.jsx)(`span`,{className:`label`,children:e}),(0,w.jsx)(`input`,{type:a??`text`,value:n,placeholder:i,onChange:e=>r(e.target.value)}),t&&(0,w.jsx)(`small`,{children:t})]}),E=({label:e,hint:t,value:n,onChange:r,min:i,max:a,step:o})=>(0,w.jsxs)(_,{children:[(0,w.jsx)(`span`,{className:`label`,children:e}),(0,w.jsx)(`input`,{type:`number`,value:n,min:i,max:a,step:o??1,onChange:e=>{let t=Number(e.target.value);Number.isFinite(t)&&r(t)}}),t&&(0,w.jsx)(`small`,{children:t})]}),D=({label:e,value:t,onChange:n,min:r,max:i,step:a,format:o})=>(0,w.jsxs)(_,{children:[(0,w.jsxs)(`span`,{className:`label`,children:[e,`: `,o?o(t):t]}),(0,w.jsx)(`input`,{type:`range`,value:t,min:r,max:i,step:a,onChange:e=>n(Number(e.target.value))})]}),O=({label:e,value:t,onChange:n})=>(0,w.jsxs)(v,{children:[(0,w.jsx)(`input`,{type:`checkbox`,checked:t,onChange:e=>n(e.target.checked)}),e]}),k=({label:e,hint:t,value:n,onChange:r,options:i})=>(0,w.jsxs)(_,{children:[(0,w.jsx)(`span`,{className:`label`,children:e}),(0,w.jsx)(`select`,{value:n,onChange:e=>r(e.target.value),children:i.map(e=>(0,w.jsx)(`option`,{value:e.value,children:e.label},e.value))}),t&&(0,w.jsx)(`small`,{children:t})]}),A=({label:e,value:t,onChange:n})=>(0,w.jsxs)(_,{children:[(0,w.jsx)(`span`,{className:`label`,children:e}),(0,w.jsxs)(`span`,{style:{display:`flex`,gap:`0.5em`,alignItems:`center`},children:[(0,w.jsx)(`input`,{type:`text`,value:t,placeholder:`mdi:…`,onChange:e=>n(e.target.value)}),t&&(0,w.jsx)(l,{icon:t,size:`1.6em`})]})]}),j=(0,h.createContext)([]),M=({children:e})=>{let t=r(p(e=>{let t={};for(let[n,r]of Object.entries(e.entities))t[n]=r.attributes.friendly_name||n;return t})),n=(0,h.useMemo)(()=>Object.entries(t).map(([e,t])=>({id:e,name:t})).sort((e,t)=>e.id.localeCompare(t.id)),[t]);return(0,w.jsx)(j.Provider,{value:n,children:e})},N=({label:e,hint:t,value:n,onChange:r,domains:i})=>{let a=(0,h.useContext)(j),s=(0,h.useId)(),c=o(),l=(0,h.useMemo)(()=>i?.length?a.filter(e=>i.includes(e.id.split(`.`)[0])):a,[a,i]),u=a.find(e=>e.id===n);return(0,w.jsxs)(_,{children:[(0,w.jsx)(`span`,{className:`label`,children:e}),(0,w.jsx)(`input`,{type:`text`,list:s,value:n,placeholder:i?.length?`${i[0]}.…`:`domain.object_id`,onChange:e=>r(e.target.value.trim())}),(0,w.jsx)(`datalist`,{id:s,children:l.map(e=>(0,w.jsx)(`option`,{value:e.id,children:e.name},e.id))}),n&&(0,w.jsx)(`small`,{children:u?u.name:c(`not_found`)}),t&&(0,w.jsx)(`small`,{children:t})]})},P=({label:e,hint:t,value:n,onChange:r,domains:i,max:a})=>{let s=o();return(0,w.jsxs)(b,{children:[(0,w.jsx)(`legend`,{children:e}),t&&(0,w.jsx)(`small`,{children:t}),n.map((e,t)=>(0,w.jsxs)(y,{$columns:`minmax(0, 1fr) auto`,children:[(0,w.jsx)(N,{label:`${t+1}`,value:e,domains:i,onChange:e=>r(n.map((n,r)=>r===t?e:n))}),(0,w.jsx)(F,{index:t,length:n.length,onMove:e=>r(S(n,t,e)),onRemove:()=>r(n.filter((e,n)=>n!==t))})]},t)),(0,w.jsx)(`div`,{children:(0,w.jsxs)(x,{type:`button`,disabled:a!==void 0&&n.length>=a,onClick:()=>r([...n,``]),children:[(0,w.jsx)(l,{icon:`mdi:plus`}),` `,s(`add`)]})})]})},F=({index:e,length:t,onMove:n,onRemove:r,onDuplicate:i})=>{let a=o();return(0,w.jsxs)(`span`,{style:{display:`flex`,gap:`0.3em`},children:[(0,w.jsx)(x,{type:`button`,disabled:e===0,onClick:()=>n(e-1),title:a(`move_up`),"aria-label":a(`move_up`),children:(0,w.jsx)(l,{icon:`mdi:arrow-up`})}),(0,w.jsx)(x,{type:`button`,disabled:e===t-1,onClick:()=>n(e+1),title:a(`move_down`),"aria-label":a(`move_down`),children:(0,w.jsx)(l,{icon:`mdi:arrow-down`})}),i&&(0,w.jsx)(x,{type:`button`,onClick:i,title:a(`duplicate`),"aria-label":a(`duplicate`),children:(0,w.jsx)(l,{icon:`mdi:content-copy`})}),(0,w.jsx)(x,{type:`button`,$danger:!0,onClick:r,title:a(`remove`),"aria-label":a(`remove`),children:(0,w.jsx)(l,{icon:`mdi:delete-outline`})})]})},I=({label:e,items:t,max:n,domains:r,onChange:i})=>{let a=o(),s=(e,n)=>i(t.map((t,r)=>r===e?{...t,...n}:t));return(0,w.jsxs)(b,{children:[(0,w.jsxs)(`legend`,{children:[e,` (`,t.length,`/`,n,`)`]}),t.map((e,n)=>(0,w.jsxs)(y,{$columns:`minmax(0, 2fr) minmax(0, 1.2fr) minmax(0, 1fr) auto`,children:[(0,w.jsx)(N,{label:a(`entity`),value:e.entity,domains:r,onChange:e=>s(n,{entity:e})}),(0,w.jsx)(T,{label:a(`name`),value:e.name,onChange:e=>s(n,{name:e})}),(0,w.jsx)(A,{label:a(`icon`),value:e.icon,onChange:e=>s(n,{icon:e})}),(0,w.jsx)(F,{index:n,length:t.length,onMove:e=>i(S(t,n,e)),onRemove:()=>i(t.filter((e,t)=>t!==n))})]},e.id)),(0,w.jsx)(`div`,{children:(0,w.jsxs)(x,{type:`button`,disabled:t.length>=n,onClick:()=>i([...t,{id:C(),entity:``,name:``,icon:``}]),children:[(0,w.jsx)(l,{icon:`mdi:plus`}),` `,a(`add`)]})})]})},L=[`input_boolean`,`switch`,`binary_sensor`],R=({value:e,onChange:t})=>{let n=o(),r=(n,r)=>t({...e,[n]:{...e[n],...r}});return(0,w.jsxs)(w.Fragment,{children:[(0,w.jsxs)(b,{children:[(0,w.jsx)(`legend`,{children:n(`status_icons`)}),(0,w.jsxs)(y,{children:[(0,w.jsx)(N,{label:n(`absence_mode`),value:e.status.absence,domains:L,onChange:e=>r(`status`,{absence:e})}),(0,w.jsx)(N,{label:n(`guest_mode`),value:e.status.guest,domains:L,onChange:e=>r(`status`,{guest:e})}),(0,w.jsx)(N,{label:n(`night_mode`),value:e.status.night,domains:L,onChange:e=>r(`status`,{night:e})}),(0,w.jsx)(N,{label:n(`wifi_signal`),hint:n(`wifi_signal_hint`),value:e.status.wifi_signal,domains:[`sensor`],onChange:e=>r(`status`,{wifi_signal:e})})]})]}),(0,w.jsxs)(b,{children:[(0,w.jsx)(`legend`,{children:n(`guest_wifi`)}),(0,w.jsx)(N,{label:n(`guest_qr_image`),hint:n(`guest_qr_image_hint`),value:e.guest_wifi.qr_image,domains:[`image`],onChange:e=>r(`guest_wifi`,{qr_image:e})}),(0,w.jsxs)(y,{children:[(0,w.jsx)(T,{label:n(`network`),value:e.guest_wifi.ssid,onChange:e=>r(`guest_wifi`,{ssid:e})}),(0,w.jsx)(T,{label:n(`password`),type:`password`,value:e.guest_wifi.password,onChange:e=>r(`guest_wifi`,{password:e})}),(0,w.jsx)(k,{label:n(`security`),value:e.guest_wifi.security,options:[{value:`WPA`,label:`WPA/WPA2/WPA3`},{value:`WEP`,label:`WEP`},{value:`nopass`,label:`—`}],onChange:e=>r(`guest_wifi`,{security:e})}),(0,w.jsx)(O,{label:n(`hidden_network`),value:e.guest_wifi.hidden,onChange:e=>r(`guest_wifi`,{hidden:e})})]})]}),(0,w.jsxs)(b,{children:[(0,w.jsx)(`legend`,{children:n(`room_climate`)}),(0,w.jsxs)(y,{children:[(0,w.jsx)(N,{label:n(`temperature`),value:e.climate.temperature,domains:[`sensor`],onChange:e=>r(`climate`,{temperature:e})}),(0,w.jsx)(N,{label:n(`humidity`),value:e.climate.humidity,domains:[`sensor`],onChange:e=>r(`climate`,{humidity:e})}),(0,w.jsx)(E,{label:n(`hours`),value:e.climate.hours,min:1,max:168,onChange:e=>r(`climate`,{hours:e})})]})]}),(0,w.jsx)(P,{label:n(`persons`),value:e.persons,domains:[`person`],onChange:n=>t({...e,persons:n})}),(0,w.jsx)(P,{label:n(`openings`),value:e.openings,domains:[`binary_sensor`,`cover`,`lock`,`sensor`],onChange:n=>t({...e,openings:n})}),(0,w.jsxs)(b,{children:[(0,w.jsx)(`legend`,{children:n(`travel_time`)}),(0,w.jsxs)(y,{children:[(0,w.jsx)(N,{label:n(`travel_sensor`),value:e.travel.entity,domains:[`sensor`],onChange:e=>r(`travel`,{entity:e})}),(0,w.jsx)(T,{label:n(`name`),value:e.travel.name,placeholder:n(`travel_time`),onChange:e=>r(`travel`,{name:e})})]}),(0,w.jsx)(T,{label:n(`map_url`),hint:n(`map_url_hint`),value:e.travel.map_url,onChange:e=>r(`travel`,{map_url:e})}),(0,w.jsx)(T,{label:n(`maps_api_key`),hint:n(`maps_api_key_hint`),type:`password`,value:e.travel.maps_api_key,onChange:e=>r(`travel`,{maps_api_key:e})})]}),(0,w.jsx)(I,{label:n(`quick_actions`),items:e.quick_actions,max:g.quickActions,onChange:n=>t({...e,quick_actions:n})}),(0,w.jsxs)(b,{children:[(0,w.jsx)(`legend`,{children:n(`calendar`)}),(0,w.jsx)(P,{label:n(`calendars`),value:e.calendar.entities,domains:[`calendar`],onChange:e=>r(`calendar`,{entities:e})}),(0,w.jsx)(E,{label:n(`days`),value:e.calendar.days,min:1,max:g.calendarDays,onChange:e=>r(`calendar`,{days:e})})]}),(0,w.jsxs)(b,{children:[(0,w.jsx)(`legend`,{children:n(`weather`)}),(0,w.jsxs)(y,{children:[(0,w.jsx)(N,{label:n(`weather_entity`),value:e.weather.entity,domains:[`weather`],onChange:e=>r(`weather`,{entity:e})}),(0,w.jsx)(N,{label:n(`outdoor_temperature`),value:e.weather.temperature,domains:[`sensor`],onChange:e=>r(`weather`,{temperature:e})})]})]}),(0,w.jsxs)(b,{children:[(0,w.jsx)(`legend`,{children:n(`notifications`)}),(0,w.jsx)(O,{label:n(`notifications_enabled`),value:e.notifications.enabled,onChange:e=>r(`notifications`,{enabled:e})}),(0,w.jsx)(T,{label:n(`notifications_prefix`),hint:n(`notifications_prefix_hint`),value:e.notifications.prefix,onChange:e=>r(`notifications`,{prefix:e})})]}),(0,w.jsx)(I,{label:n(`system_stats`),items:e.system,max:g.system,domains:[`sensor`],onChange:n=>t({...e,system:n})})]})},z=({value:e,onChange:t})=>{let[n,r]=(0,h.useState)(()=>Object.keys(e).length?JSON.stringify(e):``),[i,a]=(0,h.useState)(!1),s=o();return(0,w.jsxs)(_,{children:[(0,w.jsx)(`span`,{className:`label`,children:s(`options_json`)}),(0,w.jsx)(`input`,{type:`text`,value:n,placeholder:`{"hours": 24, "color": "#03a9f4"}`,onChange:e=>{r(e.target.value);try{let n=e.target.value.trim()?JSON.parse(e.target.value):{};if(n&&typeof n==`object`&&!Array.isArray(n)){a(!1),t(n);return}}catch{}a(!0)}}),i&&(0,w.jsx)(`small`,{children:s(`json_invalid`)})]})},B=({tiles:e,columns:t,rows:n,onChange:r})=>{let i=o(),s=(t,n)=>r(e.map((e,r)=>r===t?{...e,...n}:e));return(0,w.jsxs)(b,{children:[(0,w.jsxs)(`legend`,{children:[i(`tiles`),` (`,e.length,`)`]}),e.map((o,c)=>{let l=a[o.type];return(0,w.jsxs)(y,{$columns:`minmax(0, 1.2fr) minmax(0, 2fr) minmax(0, 1.2fr) minmax(0, 1fr) 4em 4em auto`,children:[(0,w.jsx)(k,{label:i(`type`),value:o.type,options:[...d.map(e=>({value:e.type,label:i(e.label)})),...l?[]:[{value:o.type,label:o.type}]],onChange:e=>{let r=a[e]?.size??[1,1];s(c,{type:e,w:Math.min(r[0],t),h:Math.min(r[1],n)})}}),l?.needsEntity===!1?(0,w.jsx)(`span`,{}):(0,w.jsx)(N,{label:i(`entity`),value:o.entity,domains:l?.domains,onChange:e=>s(c,{entity:e})}),(0,w.jsx)(T,{label:i(`name`),value:o.name,onChange:e=>s(c,{name:e})}),(0,w.jsx)(A,{label:i(`icon`),value:o.icon,onChange:e=>s(c,{icon:e})}),(0,w.jsx)(E,{label:i(`width`),value:o.w,min:1,max:t,onChange:e=>s(c,{w:Math.max(1,Math.min(t,e))})}),(0,w.jsx)(E,{label:i(`height`),value:o.h,min:1,max:n,onChange:e=>s(c,{h:Math.max(1,Math.min(n,e))})}),(0,w.jsx)(F,{index:c,length:e.length,onMove:t=>r(S(e,c,t)),onRemove:()=>r(e.filter((e,t)=>t!==c)),onDuplicate:()=>r([...e.slice(0,c+1),{...o,id:C()},...e.slice(c+1)])}),o.type===`sensor`&&(0,w.jsx)(`div`,{style:{gridColumn:`1 / -1`},children:(0,w.jsx)(z,{value:o.options,onChange:e=>s(c,{options:e})})})]},o.id)}),(0,w.jsx)(`div`,{children:(0,w.jsxs)(x,{type:`button`,disabled:e.length>=g.tiles,onClick:()=>r([...e,{id:C(),type:`entity`,entity:``,name:``,icon:``,w:1,h:1,options:{}}]),children:[(0,w.jsx)(l,{icon:`mdi:plus`}),` `,i(`add_tile`)]})})]})},V=n.div`
  height: ${m(16)};
  padding: ${m(.6)};
  border-radius: ${m(1)};
  background: rgba(0, 0, 0, 0.3);
`,H=e=>{let t=e.split(/[,/ ]+/).filter(Boolean).map(Number);return t.length&&t.length<=3&&t.every(e=>Number.isFinite(e)&&e>0)?t:null},U=()=>({id:C(),name:``,icon:``,status:[],columns:2,rows:2,square:!0,tiles:[]}),W=({label:e,value:t,onChange:n})=>(0,w.jsx)(T,{label:e,value:t.join(`, `),onChange:e=>{let t=H(e);t&&n(t)}}),G=({section:e,onChange:t})=>{let n=o(),r=n=>t({...e,...n});return(0,w.jsxs)(w.Fragment,{children:[(0,w.jsxs)(y,{children:[(0,w.jsx)(T,{label:n(`name`),value:e.name,onChange:e=>r({name:e})}),(0,w.jsx)(A,{label:n(`icon`),value:e.icon,onChange:e=>r({icon:e})}),(0,w.jsx)(E,{label:n(`columns`),value:e.columns,min:1,max:g.sectionCells,onChange:e=>r({columns:e})}),(0,w.jsx)(E,{label:n(`rows`),value:e.rows,min:1,max:g.sectionCells,onChange:e=>r({rows:e})}),(0,w.jsx)(O,{label:n(`square_cells`),value:e.square,onChange:e=>r({square:e})})]}),(0,w.jsx)(P,{label:n(`status_entities`),value:e.status,max:g.sectionStatus,domains:[`sensor`,`binary_sensor`],onChange:e=>r({status:e})}),(0,w.jsx)(B,{tiles:e.tiles,columns:e.columns,rows:e.rows,onChange:e=>r({tiles:e})}),(0,w.jsx)(V,{children:(0,w.jsx)(c,{section:e})})]})},K=({pages:e,onChange:t})=>{let n=o(),r=(n,r)=>t(e.map((e,t)=>t===n?{...e,...r}:e));return(0,w.jsxs)(w.Fragment,{children:[e.map((i,a)=>{let o=i.columns.length*i.rows.length,s=Array.from({length:o},(e,t)=>i.sections[t]);return(0,w.jsxs)(b,{children:[(0,w.jsxs)(`legend`,{children:[n(`page`),` `,a+1]}),(0,w.jsxs)(y,{$columns:`minmax(0, 1fr) minmax(0, 1fr) auto`,children:[(0,w.jsx)(W,{label:n(`column_split`),value:i.columns,onChange:e=>r(a,{columns:e})}),(0,w.jsx)(W,{label:n(`row_split`),value:i.rows,onChange:e=>r(a,{rows:e})}),(0,w.jsx)(F,{index:a,length:e.length,onMove:n=>t(S(e,a,n)),onRemove:()=>e.length>1&&t(e.filter((e,t)=>t!==a))})]}),s.map((e,t)=>(0,w.jsxs)(b,{children:[(0,w.jsxs)(`legend`,{children:[n(`section`),` `,t+1]}),e?(0,w.jsx)(G,{section:e,onChange:e=>{let n=[...i.sections];n[t]=e,r(a,{sections:n})}}):(0,w.jsx)(`div`,{children:(0,w.jsxs)(x,{type:`button`,onClick:()=>{let e=[...i.sections];for(;e.length<=t;)e.push(U());r(a,{sections:e})},children:[(0,w.jsx)(l,{icon:`mdi:plus`}),` `,n(`add`)]})})]},e?.id??`empty-${t}`))]},i.id)}),(0,w.jsx)(`div`,{children:(0,w.jsxs)(x,{type:`button`,disabled:e.length>=g.pages,onClick:()=>t([...e,{id:C(),columns:[75,25],rows:[50,50],sections:[]}]),children:[(0,w.jsx)(l,{icon:`mdi:plus`}),` `,n(`add_page`)]})})]})},q=({buttons:e,onChange:t})=>{let n=o(),r=(n,r)=>t(e.map((e,t)=>t===n?{...e,...r}:e));return(0,w.jsxs)(w.Fragment,{children:[e.map((i,a)=>(0,w.jsxs)(b,{children:[(0,w.jsxs)(`legend`,{children:[n(`button`),` `,a+1]}),(0,w.jsxs)(y,{$columns:`minmax(0, 1.5fr) minmax(0, 1fr) 6em auto`,children:[(0,w.jsx)(T,{label:n(`name`),value:i.name,onChange:e=>r(a,{name:e})}),(0,w.jsx)(A,{label:n(`icon`),value:i.icon,onChange:e=>r(a,{icon:e})}),(0,w.jsx)(E,{label:n(`columns`),value:i.columns,min:1,max:g.sectionCells,onChange:e=>r(a,{columns:e})}),(0,w.jsx)(F,{index:a,length:e.length,onMove:n=>t(S(e,a,n)),onRemove:()=>t(e.filter((e,t)=>t!==a))})]}),(0,w.jsx)(B,{tiles:i.tiles,columns:i.columns,rows:g.sectionCells,onChange:e=>r(a,{tiles:e})})]},i.id)),(0,w.jsx)(`div`,{children:(0,w.jsxs)(x,{type:`button`,disabled:e.length>=g.buttons,onClick:()=>t([...e,{id:C(),name:``,icon:`mdi:gesture-tap`,columns:4,tiles:[]}]),children:[(0,w.jsx)(l,{icon:`mdi:plus`}),` `,n(`add_button`)]})})]})},J=n.div`
  display: grid;
  grid-template-columns: minmax(0, 1.4fr) minmax(0, 1.2fr) auto auto;
  gap: ${m(.5)} ${m(1.2)};
  align-items: center;
  font-size: ${m(.9)};

  .head {
    color: ${({theme:e})=>e.text.secondary};
    font-size: ${m(.8)};
  }

  .badge {
    margin-left: ${m(.5)};
    padding: 0 ${m(.4)};
    border-radius: ${m(.4)};
    background: ${({theme:e})=>e.bubble.background};
    font-size: ${m(.7)};
    color: ${({theme:e})=>e.text.secondary};
  }
`,Y=({dashboards:e})=>{let n=o(),r=t(),[i,a]=(0,h.useState)(null);(0,h.useEffect)(()=>{r?.sendMessagePromise({type:`better_wall_dashboard/users`}).then(e=>a(e.users)).catch(()=>a([]))},[r]);let s=(0,h.useCallback)(async(e,t)=>{if(!r)return;a(n=>n?.map(n=>n.id===e.id?{...n,...t}:n)??null);let n=await r.sendMessagePromise({type:`better_wall_dashboard/save_user`,user_id:e.id,...t});a(t=>t?.map(t=>t.id===e.id?{...t,...n}:t)??null)},[r]);return(0,w.jsxs)(b,{children:[(0,w.jsx)(`legend`,{children:n(`tab_users`)}),(0,w.jsxs)(J,{children:[(0,w.jsx)(`span`,{className:`head`,children:n(`user`)}),(0,w.jsx)(`span`,{className:`head`,children:n(`assigned_dashboard`)}),(0,w.jsx)(`span`,{className:`head`,children:n(`kiosk`)}),(0,w.jsx)(`span`,{className:`head`,children:n(`start_page`)}),i?.map(t=>(0,w.jsx)(X,{user:t,dashboards:e,onSave:s},t.id))]})]})},X=({user:e,dashboards:t,onSave:n})=>{let r=o();return(0,w.jsxs)(w.Fragment,{children:[(0,w.jsxs)(`span`,{children:[e.name,e.is_admin&&(0,w.jsx)(`span`,{className:`badge`,children:r(`admin`)}),!e.is_active&&(0,w.jsx)(`span`,{className:`badge`,children:r(`inactive`)})]}),(0,w.jsx)(k,{label:``,value:e.dashboard,options:t.map(e=>({value:e.id,label:e.name})),onChange:t=>n(e,{dashboard:t})}),(0,w.jsx)(O,{label:``,value:e.kiosk,onChange:t=>n(e,{kiosk:t})}),(0,w.jsx)(O,{label:``,value:!!e.default_panel,onChange:t=>n(e,{default_panel:t})})]})},Z=[`general`,`sidebar`,`pages`,`buttons`,`users`,`json`],Q=n.div`
  display: flex;
  gap: ${m(.3)};
  flex-wrap: wrap;
  position: sticky;
  top: 0;
  z-index: 1;
  padding: ${m(.2)} 0 ${m(.6)};
  background: ${({theme:e})=>e.popup.background};

  button {
    padding: ${m(.45)} ${m(.9)};
    border-radius: ${m(1)};
    font-size: ${m(.9)};
    color: ${({theme:e})=>e.text.secondary};
  }

  button[aria-selected='true'] {
    background: ${({theme:e})=>e.bubble.header};
    color: ${({theme:e})=>e.text.primary};
  }
`,ee=n.div`
  display: flex;
  align-items: center;
  gap: ${m(.5)};
  margin-right: ${m(.5)};

  select {
    padding: ${m(.4)} ${m(.6)};
    border-radius: ${m(.6)};
    background: rgba(0, 0, 0, 0.25);
    border: 1px solid rgba(255, 255, 255, 0.12);
    color: inherit;
  }

  .status {
    font-size: ${m(.8)};
    color: ${({theme:e})=>e.text.secondary};
    white-space: nowrap;
  }
`,te=n.textarea`
  min-height: 50dvh;
  font-family: ui-monospace, 'JetBrains Mono', monospace;
  font-size: ${m(.8)};
`,$=e=>JSON.parse(JSON.stringify(e)),ne=({onClose:n})=>{let r=o(),i=t(),{view:a}=f(),[s,c]=(0,h.useState)(null),[u,d]=(0,h.useState)(a?.dashboard.id??`default`),[p,m]=(0,h.useState)(null),[g,v]=(0,h.useState)(!1),[S,E]=(0,h.useState)(`general`),[O,k]=(0,h.useState)(``),[A,j]=(0,h.useState)(``),N=(0,h.useCallback)((e,t)=>{let n=e.dashboards[t]??e.dashboards.default;d(n.id),m($(n)),v(!1)},[]);(0,h.useEffect)(()=>{i?.sendMessagePromise({type:`better_wall_dashboard/document`}).then(e=>{c(e),N(e,u)}).catch(e=>k(String(e?.message??e)))},[i,N]);let P=e=>{e===`json`&&p&&j(JSON.stringify(p,null,2)),E(e)},F=(0,h.useCallback)(e=>{m(e),v(!0),k(``)},[]),I=async()=>{if(i&&p){k(r(`saving`));try{let e=await i.sendMessagePromise({type:`better_wall_dashboard/save_dashboard`,dashboard:p});c(t=>t&&{...t,dashboards:{...t.dashboards,[e.dashboard.id]:e.dashboard}}),d(e.dashboard.id),m($(e.dashboard)),v(!1),k(r(`saved`))}catch(e){k(String(e?.message??e))}}},L=()=>!g||window.confirm(r(`discard`)+`?`),z=()=>{L()&&n()},B=e=>{if(!L())return;let t={...$(e||s.dashboards.default),id:C(),name:e?`${e.name} (2)`:r(`new_dashboard`)};m(t),d(t.id),v(!0),P(`general`)},V=async()=>{i&&p&&p.id!=="default"&&window.confirm(r(`confirm_delete`,{name:p.name}))&&(await i.sendMessagePromise({type:`better_wall_dashboard/delete_dashboard`,dashboard_id:p.id}),c(e=>{if(!e)return e;let t={...e.dashboards};return delete t[p.id],{...e,dashboards:t}}),s&&N(s,`default`))},H=(0,h.useMemo)(()=>{let e=Object.values(s?.dashboards??{}).map(e=>({id:e.id,name:e.name}));return p&&!e.some(e=>e.id===p.id)&&e.push({id:p.id,name:p.name}),e},[s,p]),U=(0,w.jsxs)(ee,{children:[(0,w.jsx)(`span`,{className:`status`,children:g?r(`unsaved`):O}),(0,w.jsx)(`select`,{value:u,"aria-label":r(`dashboard`),onChange:e=>{L()&&s&&N(s,e.target.value)},children:H.map(e=>(0,w.jsx)(`option`,{value:e.id,children:e.name},e.id))}),(0,w.jsx)(x,{type:`button`,onClick:()=>B(),title:r(`new_dashboard`),children:(0,w.jsx)(l,{icon:`mdi:plus`})}),(0,w.jsx)(x,{type:`button`,disabled:!p,onClick:()=>p&&B(p),title:r(`duplicate`),children:(0,w.jsx)(l,{icon:`mdi:content-copy`})}),(0,w.jsx)(x,{type:`button`,$danger:!0,disabled:!p||p.id==="default",onClick:V,title:r(`delete_dashboard`),children:(0,w.jsx)(l,{icon:`mdi:delete-outline`})}),(0,w.jsxs)(x,{type:`button`,$primary:!0,disabled:!g,onClick:I,children:[(0,w.jsx)(l,{icon:`mdi:content-save`}),` `,r(`save`)]})]});return(0,w.jsx)(e,{open:!0,onClose:z,title:r(`editor_title`),icon:`mdi:pencil`,full:!0,idleMs:0,actions:U,children:(0,w.jsxs)(M,{children:[(0,w.jsx)(Q,{role:`tablist`,children:Z.map(e=>(0,w.jsx)(`button`,{type:`button`,role:`tab`,"aria-selected":S===e,onClick:()=>P(e),children:r(`tab_${e}`)},e))}),!p&&(0,w.jsx)(`p`,{children:O||r(`loading`)}),p&&S===`general`&&(0,w.jsxs)(b,{children:[(0,w.jsx)(`legend`,{children:r(`tab_general`)}),(0,w.jsx)(T,{label:r(`name`),value:p.name,onChange:e=>F({...p,name:e})}),(0,w.jsx)(T,{label:r(`background_image`),hint:r(`background_image_hint`),value:p.background.image,onChange:e=>F({...p,background:{...p.background,image:e}})}),(0,w.jsxs)(y,{children:[(0,w.jsx)(D,{label:r(`background_dim`),value:p.background.dim,min:0,max:.95,step:.05,format:e=>`${Math.round(e*100)} %`,onChange:e=>F({...p,background:{...p.background,dim:e}})}),(0,w.jsx)(D,{label:r(`background_blur`),value:p.background.blur,min:0,max:40,step:1,format:e=>`${e} px`,onChange:e=>F({...p,background:{...p.background,blur:e}})})]})]}),p&&S===`sidebar`&&(0,w.jsx)(R,{value:p.sidebar,onChange:e=>F({...p,sidebar:e})}),p&&S===`pages`&&(0,w.jsx)(K,{pages:p.pages,onChange:e=>F({...p,pages:e})}),p&&S===`buttons`&&(0,w.jsx)(q,{buttons:p.buttons,onChange:e=>F({...p,buttons:e})}),S===`users`&&(0,w.jsx)(Y,{dashboards:H}),p&&S===`json`&&(0,w.jsxs)(_,{children:[(0,w.jsx)(`span`,{className:`label`,children:r(`json_hint`)}),(0,w.jsx)(te,{value:A,spellCheck:!1,onChange:e=>j(e.target.value)}),(0,w.jsx)(`div`,{children:(0,w.jsx)(x,{type:`button`,onClick:()=>{try{let e=JSON.parse(A);F({...e,id:p.id})}catch{k(r(`json_invalid`))}},children:r(`apply`)})})]})]})})};export{ne as default};