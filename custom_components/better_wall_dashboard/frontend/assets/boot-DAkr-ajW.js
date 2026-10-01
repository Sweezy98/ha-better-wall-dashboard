var e=Object.create,t=Object.defineProperty,n=Object.getOwnPropertyDescriptor,r=Object.getOwnPropertyNames,i=Object.getPrototypeOf,a=Object.prototype.hasOwnProperty,o=(e,t)=>()=>(t||(e((t={exports:{}}).exports,t),e=null),t.exports),s=(e,i,o,s)=>{if(i&&typeof i==`object`||typeof i==`function`)for(var c=r(i),l=0,u=c.length,d;l<u;l++)d=c[l],!a.call(e,d)&&d!==o&&t(e,d,{get:(e=>i[e]).bind(null,d),enumerable:!(s=n(i,d))||s.enumerable});return e},c=(n,r,o)=>(o=n==null?{}:e(i(n)),s(r||!n||!n.__esModule||!a.call(n,`default`)?t(o,`default`,{value:n,enumerable:!0}):o,n)),l=o((e=>{function t(e,t){var n=e.length;e.push(t);a:for(;0<n;){var r=n-1>>>1,a=e[r];if(0<i(a,t))e[r]=t,e[n]=a,n=r;else break a}}function n(e){return e.length===0?null:e[0]}function r(e){if(e.length===0)return null;var t=e[0],n=e.pop();if(n!==t){e[0]=n;a:for(var r=0,a=e.length,o=a>>>1;r<o;){var s=2*(r+1)-1,c=e[s],l=s+1,u=e[l];if(0>i(c,n))l<a&&0>i(u,c)?(e[r]=u,e[l]=n,r=l):(e[r]=c,e[s]=n,r=s);else if(l<a&&0>i(u,n))e[r]=u,e[l]=n,r=l;else break a}}return t}function i(e,t){var n=e.sortIndex-t.sortIndex;return n===0?e.id-t.id:n}if(e.unstable_now=void 0,typeof performance==`object`&&typeof performance.now==`function`){var a=performance;e.unstable_now=function(){return a.now()}}else{var o=Date,s=o.now();e.unstable_now=function(){return o.now()-s}}var c=[],l=[],u=1,d=null,f=3,p=!1,m=!1,h=!1,g=!1,_=typeof setTimeout==`function`?setTimeout:null,v=typeof clearTimeout==`function`?clearTimeout:null,y=typeof setImmediate<`u`?setImmediate:null;function b(e){for(var i=n(l);i!==null;){if(i.callback===null)r(l);else if(i.startTime<=e)r(l),i.sortIndex=i.expirationTime,t(c,i);else break;i=n(l)}}function x(e){if(h=!1,b(e),!m){if(n(c)!==null)m=!0,S||(S=!0,ne());else{var t=n(l);t!==null&&ie(x,t.startTime-e)}}}var S=!1,C=-1,ee=5,w=-1;function te(){return g?!0:!(e.unstable_now()-w<ee)}function T(){if(g=!1,S){var t=e.unstable_now();w=t;var i=!0;try{a:{m=!1,h&&(h=!1,v(C),C=-1),p=!0;var a=f;try{b:{for(b(t),d=n(c);d!==null&&!(d.expirationTime>t&&te());){var o=d.callback;if(typeof o==`function`){d.callback=null,f=d.priorityLevel;var s=o(d.expirationTime<=t);if(t=e.unstable_now(),typeof s==`function`){d.callback=s,b(t),i=!0;break b}d===n(c)&&r(c),b(t)}else r(c);d=n(c)}if(d!==null)i=!0;else{var u=n(l);u!==null&&ie(x,u.startTime-t),i=!1}}break a}finally{d=null,f=a,p=!1}i=void 0}}finally{i?ne():S=!1}}}var ne;if(typeof y==`function`)ne=function(){y(T)};else if(typeof MessageChannel<`u`){var E=new MessageChannel,re=E.port2;E.port1.onmessage=T,ne=function(){re.postMessage(null)}}else ne=function(){_(T,0)};function ie(t,n){C=_(function(){t(e.unstable_now())},n)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(e){e.callback=null},e.unstable_forceFrameRate=function(e){0>e||125<e?console.error(`forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported`):ee=0<e?Math.floor(1e3/e):5},e.unstable_getCurrentPriorityLevel=function(){return f},e.unstable_next=function(e){switch(f){case 1:case 2:case 3:var t=3;break;default:t=f}var n=f;f=t;try{return e()}finally{f=n}},e.unstable_requestPaint=function(){g=!0},e.unstable_runWithPriority=function(e,t){switch(e){case 1:case 2:case 3:case 4:case 5:break;default:e=3}var n=f;f=e;try{return t()}finally{f=n}},e.unstable_scheduleCallback=function(r,i,a){var o=e.unstable_now();switch(typeof a==`object`&&a?(a=a.delay,a=typeof a==`number`&&0<a?o+a:o):a=o,r){case 1:var s=-1;break;case 2:s=250;break;case 5:s=1073741823;break;case 4:s=1e4;break;default:s=5e3}return s=a+s,r={id:u++,callback:i,priorityLevel:r,startTime:a,expirationTime:s,sortIndex:-1},a>o?(r.sortIndex=a,t(l,r),n(c)===null&&r===n(l)&&(h?(v(C),C=-1):h=!0,ie(x,a-o))):(r.sortIndex=s,t(c,r),m||p||(m=!0,S||(S=!0,ne()))),r},e.unstable_shouldYield=te,e.unstable_wrapCallback=function(e){var t=f;return function(){var n=f;f=t;try{return e.apply(this,arguments)}finally{f=n}}}})),u=o(((e,t)=>{t.exports=l()})),d=o((e=>{var t=Symbol.for(`react.transitional.element`),n=Symbol.for(`react.portal`),r=Symbol.for(`react.fragment`),i=Symbol.for(`react.strict_mode`),a=Symbol.for(`react.profiler`),o=Symbol.for(`react.consumer`),s=Symbol.for(`react.context`),c=Symbol.for(`react.forward_ref`),l=Symbol.for(`react.suspense`),u=Symbol.for(`react.memo`),d=Symbol.for(`react.lazy`),f=Symbol.for(`react.activity`),p=Symbol.for(`react.view_transition`),m=Symbol.iterator;function h(e){return typeof e!=`object`||!e?null:(e=m&&e[m]||e[`@@iterator`],typeof e==`function`?e:null)}var g={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},_=Object.assign,v={};function y(e,t,n){this.props=e,this.context=t,this.refs=v,this.updater=n||g}y.prototype.isReactComponent={},y.prototype.setState=function(e,t){if(typeof e!=`object`&&typeof e!=`function`&&e!=null)throw Error(`takes an object of state variables to update or a function which returns an object of state variables.`);this.updater.enqueueSetState(this,e,t,`setState`)},y.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,`forceUpdate`)};function b(){}b.prototype=y.prototype;function x(e,t,n){this.props=e,this.context=t,this.refs=v,this.updater=n||g}var S=x.prototype=new b;S.constructor=x,_(S,y.prototype),S.isPureReactComponent=!0;var C=Array.isArray;function ee(){}var w={H:null,A:null,T:null,S:null},te=Object.prototype.hasOwnProperty;function T(e,n,r){var i=r.ref;return{$$typeof:t,type:e,key:n,ref:i===void 0?null:i,props:r}}function ne(e,t){return T(e.type,t,e.props)}function E(e){return typeof e==`object`&&!!e&&e.$$typeof===t}function re(e){var t={"=":`=0`,":":`=2`};return`$`+e.replace(/[=:]/g,function(e){return t[e]})}var ie=/\/+/g;function ae(e,t){return typeof e==`object`&&e&&e.key!=null?re(``+e.key):t.toString(36)}function oe(e){switch(e.status){case`fulfilled`:return e.value;case`rejected`:throw e.reason;default:switch(typeof e.status==`string`?e.then(ee,ee):(e.status=`pending`,e.then(function(t){e.status===`pending`&&(e.status=`fulfilled`,e.value=t)},function(t){e.status===`pending`&&(e.status=`rejected`,e.reason=t)})),e.status){case`fulfilled`:return e.value;case`rejected`:throw e.reason}}throw e}function se(e,r,i,a,o){var s=typeof e;(s===`undefined`||s===`boolean`)&&(e=null);var c=!1;if(e===null)c=!0;else switch(s){case`bigint`:case`string`:case`number`:c=!0;break;case`object`:switch(e.$$typeof){case t:case n:c=!0;break;case d:return c=e._init,se(c(e._payload),r,i,a,o)}}if(c)return o=o(e),c=a===``?`.`+ae(e,0):a,C(o)?(i=``,c!=null&&(i=c.replace(ie,`$&/`)+`/`),se(o,r,i,``,function(e){return e})):o!=null&&(E(o)&&(o=ne(o,i+(o.key==null||e&&e.key===o.key?``:(``+o.key).replace(ie,`$&/`)+`/`)+c)),r.push(o)),1;c=0;var l=a===``?`.`:a+`:`;if(C(e))for(var u=0;u<e.length;u++)a=e[u],s=l+ae(a,u),c+=se(a,r,i,s,o);else if(u=h(e),typeof u==`function`)for(e=u.call(e),u=0;!(a=e.next()).done;)a=a.value,s=l+ae(a,u++),c+=se(a,r,i,s,o);else if(s===`object`){if(typeof e.then==`function`)return se(oe(e),r,i,a,o);throw r=String(e),Error(`Objects are not valid as a React child (found: `+(r===`[object Object]`?`object with keys {`+Object.keys(e).join(`, `)+`}`:r)+`). If you meant to render a collection of children, use an array instead.`)}return c}function ce(e,t,n){if(e==null)return e;var r=[],i=0;return se(e,r,``,``,function(e){return t.call(n,e,i++)}),r}function le(e){if(e._status===-1){var t=e._result,n=t();n.then(function(t){(e._status===0||e._status===-1)&&(e._status=1,e._result=t,n.status===void 0&&(n.status=`fulfilled`,n.value=t))},function(t){(e._status===0||e._status===-1)&&(e._status=2,e._result=t,n.status===void 0&&(n.status=`rejected`,n.reason=t))}),e._status===-1&&(e._status=0,e._result=n)}if(e._status===1)return e._result.default;throw e._result}var ue=typeof reportError==`function`?reportError:function(e){if(typeof window==`object`&&typeof window.ErrorEvent==`function`){var t=new window.ErrorEvent(`error`,{bubbles:!0,cancelable:!0,message:typeof e==`object`&&e&&typeof e.message==`string`?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if(typeof process==`object`&&typeof process.emit==`function`){process.emit(`uncaughtException`,e);return}console.error(e)};function de(e){var t=w.T,n={};n.types=t===null?null:t.types,w.T=n;try{var r=e(),i=w.S;i!==null&&i(n,r),typeof r==`object`&&r&&typeof r.then==`function`&&r.then(ee,ue)}catch(e){ue(e)}finally{t!==null&&n.types!==null&&(t.types=n.types),w.T=t}}function fe(e){var t=w.T;if(t!==null){var n=t.types;n===null?t.types=[e]:n.indexOf(e)===-1&&n.push(e)}else de(fe.bind(null,e))}var pe={map:ce,forEach:function(e,t,n){ce(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return ce(e,function(){t++}),t},toArray:function(e){return ce(e,function(e){return e})||[]},only:function(e){if(!E(e))throw Error(`React.Children.only expected to receive a single React element child.`);return e}};e.Activity=f,e.Children=pe,e.Component=y,e.Fragment=r,e.Profiler=a,e.PureComponent=x,e.StrictMode=i,e.Suspense=l,e.ViewTransition=p,e.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=w,e.__COMPILER_RUNTIME={__proto__:null,c:function(e){return w.H.useMemoCache(e)}},e.addTransitionType=fe,e.cache=function(e){return function(){return e.apply(null,arguments)}},e.cacheSignal=function(){return null},e.cloneElement=function(e,t,n){if(e==null)throw Error(`The argument must be a React element, but you passed `+e+`.`);var r=_({},e.props),i=e.key;if(t!=null)for(a in t.key!==void 0&&(i=``+t.key),t)!te.call(t,a)||a===`key`||a===`__self`||a===`__source`||a===`ref`&&t.ref===void 0||(r[a]=t[a]);var a=arguments.length-2;if(a===1)r.children=n;else if(1<a){for(var o=Array(a),s=0;s<a;s++)o[s]=arguments[s+2];r.children=o}return T(e.type,i,r)},e.createContext=function(e){return e={$$typeof:s,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null},e.Provider=e,e.Consumer={$$typeof:o,_context:e},e},e.createElement=function(e,t,n){var r,i={},a=null;if(t!=null)for(r in t.key!==void 0&&(a=``+t.key),t)te.call(t,r)&&r!==`key`&&r!==`__self`&&r!==`__source`&&(i[r]=t[r]);var o=arguments.length-2;if(o===1)i.children=n;else if(1<o){for(var s=Array(o),c=0;c<o;c++)s[c]=arguments[c+2];i.children=s}if(e&&e.defaultProps)for(r in o=e.defaultProps,o)i[r]===void 0&&(i[r]=o[r]);return T(e,a,i)},e.createRef=function(){return{current:null}},e.forwardRef=function(e){return{$$typeof:c,render:e}},e.isValidElement=E,e.lazy=function(e){return{$$typeof:d,_payload:{_status:-1,_result:e},_init:le}},e.memo=function(e,t){return{$$typeof:u,type:e,compare:t===void 0?null:t}},e.startTransition=de,e.unstable_useCacheRefresh=function(){return w.H.useCacheRefresh()},e.use=function(e){return w.H.use(e)},e.useActionState=function(e,t,n){return w.H.useActionState(e,t,n)},e.useCallback=function(e,t){return w.H.useCallback(e,t)},e.useContext=function(e){return w.H.useContext(e)},e.useDebugValue=function(){},e.useDeferredValue=function(e,t){return w.H.useDeferredValue(e,t)},e.useEffect=function(e,t){return w.H.useEffect(e,t)},e.useEffectEvent=function(e){return w.H.useEffectEvent(e)},e.useId=function(){return w.H.useId()},e.useImperativeHandle=function(e,t,n){return w.H.useImperativeHandle(e,t,n)},e.useInsertionEffect=function(e,t){return w.H.useInsertionEffect(e,t)},e.useLayoutEffect=function(e,t){return w.H.useLayoutEffect(e,t)},e.useMemo=function(e,t){return w.H.useMemo(e,t)},e.useOptimistic=function(e,t){return w.H.useOptimistic(e,t)},e.useReducer=function(e,t,n){return w.H.useReducer(e,t,n)},e.useRef=function(e){return w.H.useRef(e)},e.useState=function(e){return w.H.useState(e)},e.useSyncExternalStore=function(e,t,n){return w.H.useSyncExternalStore(e,t,n)},e.useTransition=function(){return w.H.useTransition()},e.version=`19.3.0`})),f=o(((e,t)=>{t.exports=d()})),p=o((e=>{var t=f();function n(e){var t=`https://react.dev/errors/`+e;if(1<arguments.length){t+=`?args[]=`+encodeURIComponent(arguments[1]);for(var n=2;n<arguments.length;n++)t+=`&args[]=`+encodeURIComponent(arguments[n])}return`Minified React error #`+e+`; visit `+t+` for the full message or use the non-minified dev environment for full errors and additional helpful warnings.`}function r(){}var i={d:{f:r,r:function(){throw Error(n(522))},D:r,C:r,L:r,m:r,X:r,S:r,M:r},p:0,findDOMNode:null},a=Symbol.for(`react.portal`),o=Symbol.for(`react.recoverable`),s=Symbol.for(`react.optimistic_key`);function c(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:a,key:r==null?null:r===s?s:``+r,children:e,containerInfo:t,implementation:n}}var l=t.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function u(e,t){if(e===`font`)return``;if(typeof t==`string`)return t===`use-credentials`?t:``}e.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=i,e.browser=function(e){return{$$typeof:o,_reason:e}},e.createPortal=function(e,t){var r=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)throw Error(n(299));return c(e,t,null,r)},e.flushSync=function(e){var t=l.T,n=i.p;try{if(l.T=null,i.p=2,e)return e()}finally{l.T=t,i.p=n,i.d.f()}},e.preconnect=function(e,t){typeof e==`string`&&(t?(t=t.crossOrigin,t=typeof t==`string`?t===`use-credentials`?t:``:void 0):t=null,i.d.C(e,t))},e.prefetchDNS=function(e){typeof e==`string`&&i.d.D(e)},e.preinit=function(e,t){if(typeof e==`string`&&t&&typeof t.as==`string`){var n=t.as,r=u(n,t.crossOrigin),a=typeof t.integrity==`string`?t.integrity:void 0,o=typeof t.fetchPriority==`string`?t.fetchPriority:void 0;n===`style`?i.d.S(e,typeof t.precedence==`string`?t.precedence:void 0,{crossOrigin:r,integrity:a,fetchPriority:o}):n===`script`&&i.d.X(e,{crossOrigin:r,integrity:a,fetchPriority:o,nonce:typeof t.nonce==`string`?t.nonce:void 0})}},e.preinitModule=function(e,t){if(typeof e==`string`){if(typeof t==`object`&&t){if(t.as==null||t.as===`script`){var n=u(t.as,t.crossOrigin);i.d.M(e,{crossOrigin:n,integrity:typeof t.integrity==`string`?t.integrity:void 0,nonce:typeof t.nonce==`string`?t.nonce:void 0,fetchPriority:typeof t.fetchPriority==`string`?t.fetchPriority:void 0})}}else t??i.d.M(e)}},e.preload=function(e,t){if(typeof e==`string`&&typeof t==`object`&&t&&typeof t.as==`string`){var n=t.as,r=u(n,t.crossOrigin);i.d.L(e,n,{crossOrigin:r,integrity:typeof t.integrity==`string`?t.integrity:void 0,nonce:typeof t.nonce==`string`?t.nonce:void 0,type:typeof t.type==`string`?t.type:void 0,fetchPriority:typeof t.fetchPriority==`string`?t.fetchPriority:void 0,referrerPolicy:typeof t.referrerPolicy==`string`?t.referrerPolicy:void 0,imageSrcSet:typeof t.imageSrcSet==`string`?t.imageSrcSet:void 0,imageSizes:typeof t.imageSizes==`string`?t.imageSizes:void 0,media:typeof t.media==`string`?t.media:void 0})}},e.preloadModule=function(e,t){if(typeof e==`string`){if(t){var n=u(t.as,t.crossOrigin);i.d.m(e,{as:typeof t.as==`string`&&t.as!==`script`?t.as:void 0,crossOrigin:n,integrity:typeof t.integrity==`string`?t.integrity:void 0,nonce:typeof t.nonce==`string`?t.nonce:void 0,fetchPriority:typeof t.fetchPriority==`string`?t.fetchPriority:void 0})}else i.d.m(e)}},e.requestFormReset=function(e){i.d.r(e)},e.unstable_batchedUpdates=function(e,t){return e(t)},e.useFormState=function(e,t,n){return l.H.useFormState(e,t,n)},e.useFormStatus=function(){return l.H.useHostTransitionStatus()},e.version=`19.3.0`})),m=o(((e,t)=>{function n(){if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<`u`&&typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE==`function`)try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n)}catch(e){console.error(e)}}n(),t.exports=p()})),h=o((e=>{var t=u(),n=f(),r=m();function i(e){var t=`https://react.dev/errors/`+e;if(1<arguments.length){t+=`?args[]=`+encodeURIComponent(arguments[1]);for(var n=2;n<arguments.length;n++)t+=`&args[]=`+encodeURIComponent(arguments[n])}return`Minified React error #`+e+`; visit `+t+` for the full message or use the non-minified dev environment for full errors and additional helpful warnings.`}function a(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function o(e){for(var t=e,n=t;n&&!n.alternate;)t=n,t.flags&4098&&(e=t.return),n=t.return;for(;t.return;)t=t.return;return t.tag===3?e:null}function s(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function c(e){if(e.tag===31){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function l(e){if(o(e)!==e)throw Error(i(188))}function d(e){var t=e.alternate;if(!t){if(t=o(e),t===null)throw Error(i(188));return t===e?e:null}for(var n=e,r=t;;){var a=n.return;if(a===null)break;var s=a.alternate;if(s===null){if(r=a.return,r!==null){n=r;continue}break}if(a.child===s.child){for(s=a.child;s;){if(s===n)return l(a),e;if(s===r)return l(a),t;s=s.sibling}throw Error(i(188))}if(n.return!==r.return)n=a,r=s;else{for(var c=!1,u=a.child;u;){if(u===n){c=!0,n=a,r=s;break}if(u===r){c=!0,r=a,n=s;break}u=u.sibling}if(!c){for(u=s.child;u;){if(u===n){c=!0,n=s,r=a;break}if(u===r){c=!0,r=s,n=a;break}u=u.sibling}if(!c)throw Error(i(189))}}if(n.alternate!==r)throw Error(i(190))}if(n.tag!==3)throw Error(i(188));return n.stateNode.current===n?e:t}function p(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e;for(e=e.child;e!==null;){if(t=p(e),t!==null)return t;e=e.sibling}return null}function h(e,t,n,r,i,a){for(;e!==null;){if((e.tag===5||e.tag===27||e.tag===6)&&n(e,r,i,a)||(e.tag!==22||e.memoizedState===null)&&(t||e.tag!==5&&e.tag!==27)&&h(e.child,t,n,r,i,a))return!0;e=e.sibling}return!1}function g(e){for(e=e.return;e!==null;){if(e.tag===3||e.tag===5||e.tag===27)return e;e=e.return}return null}function _(e){var t=!1;for(e=e.return;e!==null&&(e.tag===4&&(t=!0),e.tag!==3&&e.tag!==5&&e.tag!==27);)e=e.return;return t}function v(e){var t=[null,null],n=g(e);return n===null||y(t,e,n.child,{foundSelf:!1}),t}function y(e,t,n,r){for(;n!==null;){if(n===t)r.foundSelf=!0;else if(n.tag===5||n.tag===27||n.tag===6){if(r.foundSelf)return e[1]=n,!0;e[0]=n}else if((n.tag!==22||n.memoizedState===null)&&y(e,t,n.child,r))return!0;n=n.sibling}return!1}function b(e){switch(e.tag){case 5:case 27:case 6:return e.stateNode;case 3:return e.stateNode.containerInfo;default:throw Error(i(559))}}var x=null,S=null;function C(e,t,n){return e===n||e===t&&(x=e,!0)}function ee(e,t,n){return e===n?(S=e,!1):e===t&&(S!==null&&(x=e),!0)}function w(e){if(e===null)return null;do e=e===null?null:e.return;while(e&&e.tag!==5&&e.tag!==27&&e.tag!==3);return e||null}function te(e,t,n){for(var r=0,i=e;i;i=n(i))r++;i=0;for(var a=t;a;a=n(a))i++;for(;0<r-i;)e=n(e),r--;for(;0<i-r;)t=n(t),i--;for(;r--;){if(e===t||t!==null&&e===t.alternate)return e;e=n(e),t=n(t)}return null}var T=Object.assign,ne=Symbol.for(`react.element`),E=Symbol.for(`react.transitional.element`),re=Symbol.for(`react.portal`),ie=Symbol.for(`react.fragment`),ae=Symbol.for(`react.strict_mode`),oe=Symbol.for(`react.profiler`),se=Symbol.for(`react.consumer`),ce=Symbol.for(`react.context`),le=Symbol.for(`react.forward_ref`),ue=Symbol.for(`react.suspense`),de=Symbol.for(`react.suspense_list`),fe=Symbol.for(`react.memo`),pe=Symbol.for(`react.lazy`),me=Symbol.for(`react.activity`),he=Symbol.for(`react.legacy_hidden`),ge=Symbol.for(`react.memo_cache_sentinel`),_e=Symbol.for(`react.view_transition`),ve=Symbol.for(`react.recoverable`),ye=Symbol.iterator;function be(e){return typeof e!=`object`||!e?null:(e=ye&&e[ye]||e[`@@iterator`],typeof e==`function`?e:null)}var xe=Symbol.for(`react.client.reference`);function Se(e){if(e==null)return null;if(typeof e==`function`)return e.$$typeof===xe?null:e.displayName||e.name||null;if(typeof e==`string`)return e;switch(e){case ie:return`Fragment`;case oe:return`Profiler`;case ae:return`StrictMode`;case ue:return`Suspense`;case de:return`SuspenseList`;case me:return`Activity`;case _e:return`ViewTransition`}if(typeof e==`object`)switch(e.$$typeof){case re:return`Portal`;case ce:return e.displayName||`Context`;case se:return(e._context.displayName||`Context`)+`.Consumer`;case le:var t=e.render;return e=e.displayName,e||=(e=t.displayName||t.name||``,e===``?`ForwardRef`:`ForwardRef(`+e+`)`),e;case fe:return t=e.displayName||null,t===null?Se(e.type)||`Memo`:t;case pe:t=e._payload,e=e._init;try{return Se(e(t))}catch{}}return null}var Ce=Array.isArray,D=n.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,O=r.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,we={pending:!1,data:null,method:null,action:null},Te=[],Ee=-1;function De(e){return{current:e}}function Oe(e){0>Ee||(e.current=Te[Ee],Te[Ee]=null,Ee--)}function ke(e,t){Ee++,Te[Ee]=e.current,e.current=t}var Ae=De(null),je=De(null),Me=De(null),Ne=De(null);function Pe(e,t){switch(ke(Me,t),ke(je,e),ke(Ae,null),t.nodeType){case 9:case 11:e=(e=t.documentElement)&&(e=e.namespaceURI)?up(e):0;break;default:if(e=t.tagName,t=t.namespaceURI)t=up(t),e=dp(t,e);else switch(e){case`svg`:e=1;break;case`math`:e=2;break;default:e=0}}Oe(Ae),ke(Ae,e)}function Fe(){Oe(Ae),Oe(je),Oe(Me)}function Ie(e){var t=e.memoizedState;t!==null&&(sh._currentValue=t.memoizedState,ke(Ne,e)),t=Ae.current;var n=dp(t,e.type);t!==n&&(ke(je,e),ke(Ae,n))}function Le(e){je.current===e&&(Oe(Ae),Oe(je)),Ne.current===e&&(Oe(Ne),sh._currentValue=we)}var Re,ze;function Be(e){if(Re===void 0)try{throw Error()}catch(e){var t=e.stack.trim().match(/\n( *(at )?)/);Re=t&&t[1]||``,ze=-1<e.stack.indexOf(`
    at`)?` (<anonymous>)`:-1<e.stack.indexOf(`@`)?`@unknown:0:0`:``}return`
`+Re+e+ze}var Ve=!1;function He(e,t){if(!e||Ve)return``;Ve=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var r={DetermineComponentFrameRoot:function(){try{if(t){var n=function(){throw Error()};if(Object.defineProperty(n.prototype,"props",{set:function(){throw Error()}}),typeof Reflect==`object`&&Reflect.construct){try{Reflect.construct(n,[])}catch(e){var r=e}Reflect.construct(e,[],n)}else{try{n.call()}catch(e){r=e}n=!1;try{var i=Object.getOwnPropertyDescriptor(e.prototype,`props`);Object.defineProperty(e.prototype,"props",{configurable:!0,set:function(){throw Error()}}),n=!0,new e}finally{n&&(i===void 0?delete e.prototype.props:Object.defineProperty(e.prototype,"props",i))}}}else{try{throw Error()}catch(e){r=e}(n=e())&&typeof n.catch==`function`&&n.catch(function(){})}}catch(e){if(e&&r&&typeof e.stack==`string`)return[e.stack,r.stack]}return[null,null]}};r.DetermineComponentFrameRoot.displayName=`DetermineComponentFrameRoot`;var i=Object.getOwnPropertyDescriptor(r.DetermineComponentFrameRoot,`name`);i&&i.configurable&&Object.defineProperty(r.DetermineComponentFrameRoot,"name",{value:`DetermineComponentFrameRoot`});var a=r.DetermineComponentFrameRoot(),o=a[0],s=a[1];if(o&&s){var c=o.split(`
`),l=s.split(`
`);for(i=r=0;r<c.length&&!c[r].includes(`DetermineComponentFrameRoot`);)r++;for(;i<l.length&&!l[i].includes(`DetermineComponentFrameRoot`);)i++;if(r===c.length||i===l.length)for(r=c.length-1,i=l.length-1;1<=r&&0<=i&&c[r]!==l[i];)i--;for(;1<=r&&0<=i;r--,i--)if(c[r]!==l[i]){if(r!==1||i!==1)do if(r--,i--,0>i||c[r]!==l[i]){var u=`
`+c[r].replace(` at new `,` at `);return e.displayName&&u.includes(`<anonymous>`)&&(u=u.replace(`<anonymous>`,e.displayName)),u}while(1<=r&&0<=i);break}}}finally{Ve=!1,Error.prepareStackTrace=n}return(n=e?e.displayName||e.name:``)?Be(n):``}function Ue(e,t){switch(e.tag){case 26:case 27:case 5:return Be(e.type);case 16:return Be(`Lazy`);case 13:return e.child!==t&&t!==null?Be(`Suspense Fallback`):Be(`Suspense`);case 19:return Be(`SuspenseList`);case 0:case 15:return He(e.type,!1);case 11:return He(e.type.render,!1);case 1:return He(e.type,!0);case 31:return Be(`Activity`);case 30:return Be(`ViewTransition`);default:return``}}function We(e){try{var t=``,n=null;do t+=Ue(e,n),n=e,e=e.return;while(e);return t}catch(e){return`
Error generating stack: `+e.message+`
`+e.stack}}var Ge=Object.prototype.hasOwnProperty,Ke=t.unstable_scheduleCallback,qe=t.unstable_cancelCallback,Je=t.unstable_shouldYield,Ye=t.unstable_requestPaint,Xe=t.unstable_now,Ze=t.unstable_getCurrentPriorityLevel,Qe=t.unstable_ImmediatePriority,$e=t.unstable_UserBlockingPriority,et=t.unstable_NormalPriority,tt=t.unstable_LowPriority,nt=t.unstable_IdlePriority,rt=t.log,it=t.unstable_setDisableYieldValue,at=null,ot=null;function st(e){if(typeof rt==`function`&&it(e),ot&&typeof ot.setStrictMode==`function`)try{ot.setStrictMode(at,e)}catch{}}var ct=Math.clz32?Math.clz32:dt,lt=Math.log,ut=Math.LN2;function dt(e){return e>>>=0,e===0?32:31-(lt(e)/ut|0)|0}var ft=256,pt=262144,mt=4194304;function ht(e){var t=e&42;if(t!==0)return t;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return e&-e;case 262144:case 524288:case 1048576:case 2097152:return e&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function gt(e,t,n){var r=e.pendingLanes;if(r===0)return 0;var i=0,a=e.suspendedLanes,o=e.pingedLanes;e=e.warmLanes;var s=r&134217727;return s===0?(s=r&~a,s===0?o===0?n||(n=r&~e,n!==0&&(i=ht(n))):i=ht(o):i=ht(s)):(r=s&~a,r===0?(o&=s,o===0?n||(n=s&~e,n!==0&&(i=ht(n))):i=ht(o)):i=ht(r)),i===0?0:t!==0&&t!==i&&(t&a)===0&&(a=i&-i,n=t&-t,a>=n||a===32&&n&4194048)?t:i}function _t(e,t){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&t)===0}function k(e,t){t&8&&(t|=t&32);var n=e.entangledLanes;if(n!==0)for(e=e.entanglements,n&=t;0<n;){var r=31-ct(n),i=1<<r;t|=e[r],n&=~i}return t}function vt(e,t){switch(e){case 1:case 2:case 4:case 8:case 64:return t+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function yt(){var e=mt;return mt<<=1,!(mt&62914560)&&(mt=4194304),e}function bt(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function xt(e,t){e.pendingLanes|=t,t!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function St(e,t,n,r,i,a){var o=e.pendingLanes;e.pendingLanes=n,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=n,e.entangledLanes&=n,e.errorRecoveryDisabledLanes&=n,e.shellSuspendCounter=0;var s=e.entanglements,c=e.expirationTimes,l=e.hiddenUpdates;for(n=o&~n;0<n;){var u=31-ct(n),d=1<<u;s[u]=0,c[u]=-1;var f=l[u];if(f!==null)for(l[u]=null,u=0;u<f.length;u++){var p=f[u];p!==null&&(p.lane&=-536870913)}n&=~d}r!==0&&Ct(e,r,0),a!==0&&i===0&&e.tag!==0&&(e.suspendedLanes|=a&~(o&~t))}function Ct(e,t,n){e.pendingLanes|=t,e.suspendedLanes&=~t;var r=31-ct(t);e.entangledLanes|=t,e.entanglements[r]=e.entanglements[r]|1073741824|n&261930}function wt(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-ct(n),i=1<<r;i&t|e[r]&t&&(e[r]|=t),n&=~i}}function Tt(e,t){var n=t&-t;return n=n&42?1:Et(n),(n&(e.suspendedLanes|t))===0?n:0}function Et(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function Dt(e){return e&=-e,2<e?8<e?e&134217727?32:268435456:8:2}function Ot(){var e=O.p;return e===0?(e=window.event,e===void 0?32:Ch(e.type)):e}function kt(e,t){var n=O.p;try{return O.p=e,t()}finally{O.p=n}}var At=Math.random().toString(36).slice(2),jt=`__reactFiber$`+At,Mt=`__reactProps$`+At,Nt=`__reactContainer$`+At,Pt=`__reactEvents$`+At,Ft=`__reactListeners$`+At,It=`__reactHandles$`+At,Lt=`__reactResources$`+At,Rt=`__reactMarker$`+At,zt=`__reactLoad$`+At;function Bt(e){delete e[jt],delete e[Mt],delete e[Ft],delete e[It]}function Vt(e){var t;if(t=e[jt])return t;for(var n=e.parentNode;n;){if(t=n[Nt]||n[jt]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=fm(e);e!==null;){if(n=e[jt])return n;e=fm(e)}return t}e=n,n=e.parentNode}return null}function Ht(e){if(e=e[jt]||e[Nt]){var t=e.tag;if(t===5||t===6||t===13||t===31||t===26||t===27||t===3)return e}return null}function Ut(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e.stateNode;throw Error(i(33))}function Wt(e){var t=e[Lt];return t||=e[Lt]={hoistableStyles:new Map,hoistableScripts:new Map},t}function Gt(e){e[Rt]=!0}function Kt(e){e[zt]=void 0}var qt=new Set,Jt={};function Yt(e,t){Xt(e,t),Xt(e+`Capture`,t)}function Xt(e,t){for(Jt[e]=t,e=0;e<t.length;e++)qt.add(t[e])}var Zt=RegExp(`^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$`),Qt={},$t={};function en(e){return Ge.call($t,e)?!0:Ge.call(Qt,e)?!1:Zt.test(e)?$t[e]=!0:(Qt[e]=!0,!1)}var tn=!1;function nn(){var e=tn;return tn=!1,e}function rn(e,t,n){if(en(t)){if(n===null)e.removeAttribute(t);else{switch(typeof n){case`undefined`:case`function`:case`symbol`:e.removeAttribute(t);return;case`boolean`:var r=t.toLowerCase().slice(0,5);if(r!==`data-`&&r!==`aria-`){e.removeAttribute(t);return}}e.setAttribute(t,n)}}}function an(e,t,n){if(n===null)e.removeAttribute(t);else{switch(typeof n){case`undefined`:case`function`:case`symbol`:case`boolean`:e.removeAttribute(t);return}e.setAttribute(t,n)}}function on(e,t,n,r){if(r===null)e.removeAttribute(n);else{switch(typeof r){case`undefined`:case`function`:case`symbol`:case`boolean`:e.removeAttribute(n);return}e.setAttributeNS(t,n,r)}}function sn(e){switch(typeof e){case`bigint`:case`boolean`:case`number`:case`string`:case`undefined`:return e;case`object`:return e;default:return``}}function cn(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()===`input`&&(t===`checkbox`||t===`radio`)}function ln(e,t,n){var r=Object.getOwnPropertyDescriptor(e.constructor.prototype,t);if(!e.hasOwnProperty(t)&&r!==void 0&&typeof r.get==`function`&&typeof r.set==`function`){var i=r.get,a=r.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return i.call(this)},set:function(e){n=``+e,a.call(this,e)}}),Object.defineProperty(e,t,{enumerable:r.enumerable}),{getValue:function(){return n},setValue:function(e){n=``+e},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function un(e){if(!e._valueTracker){var t=cn(e)?`checked`:`value`;e._valueTracker=ln(e,t,``+e[t])}}function dn(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r=``;return e&&(r=cn(e)?e.checked?`true`:`false`:e.value),e=r,e!==n&&(t.setValue(e),!0)}var fn=/[\n"\\]/g;function pn(e){return e.replace(fn,function(e){return`\\`+e.charCodeAt(0).toString(16)+` `})}function mn(e,t,n,r,i,a,o,s){e.name=``,o!=null&&typeof o!=`function`&&typeof o!=`symbol`&&typeof o!=`boolean`?e.type=o:e.removeAttribute(`type`),t==null?o!==`submit`&&o!==`reset`||e.removeAttribute(`value`):o===`number`?(t===0&&e.value===``||e.value!=t)&&(e.value=``+sn(t)):e.value!==``+sn(t)&&(e.value=``+sn(t)),t==null?n==null?r!=null&&e.removeAttribute(`value`):gn(e,sn(n)):o===`number`&&e.value==t?gn(e,sn(e.value)):gn(e,sn(t)),i==null&&a!=null&&(e.defaultChecked=!!a),i!=null&&(e.checked=i&&typeof i!=`function`&&typeof i!=`symbol`),s!=null&&typeof s!=`function`&&typeof s!=`symbol`&&typeof s!=`boolean`?e.name=``+sn(s):e.removeAttribute(`name`)}function hn(e,t,n,r,i,a,o,s){if(a!=null&&typeof a!=`function`&&typeof a!=`symbol`&&typeof a!=`boolean`&&(e.type=a),t!=null||n!=null){if(!(a!==`submit`&&a!==`reset`||t!=null)){un(e);return}n=n==null?``:``+sn(n),t=t==null?n:``+sn(t),s||t===e.value||(e.value=t),e.defaultValue=t}r??=i,r=typeof r!=`function`&&typeof r!=`symbol`&&!!r,e.checked=s?e.checked:!!r,e.defaultChecked=!!r,o!=null&&typeof o!=`function`&&typeof o!=`symbol`&&typeof o!=`boolean`&&(e.name=o),un(e)}function gn(e,t){e.defaultValue!==``+t&&(e.defaultValue=``+t)}function _n(e,t,n,r){if(e=e.options,t){t={};for(var i=0;i<n.length;i++)t[`$`+n[i]]=!0;for(n=0;n<e.length;n++)i=t.hasOwnProperty(`$`+e[n].value),e[n].selected!==i&&(e[n].selected=i),i&&r&&(e[n].defaultSelected=!0)}else{for(n=``+sn(n),t=null,i=0;i<e.length;i++){if(e[i].value===n){e[i].selected=!0,r&&(e[i].defaultSelected=!0);return}t!==null||e[i].disabled||(t=e[i])}t!==null&&(t.selected=!0)}}function vn(e,t,n){if(t!=null&&(t=``+sn(t),t!==e.value&&(e.value=t),n==null)){e.defaultValue!==t&&(e.defaultValue=t);return}e.defaultValue=n==null?``:``+sn(n)}function yn(e,t,n,r){if(t==null){if(r!=null){if(n!=null)throw Error(i(92));if(Ce(r)){if(1<r.length)throw Error(i(93));r=r[0]}n=r}n??=``,t=n}n=sn(t),e.defaultValue=n,r=e.textContent,r===n&&r!==``&&r!==null&&(e.value=r),un(e)}function bn(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var xn=new Set(`animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp`.split(` `));function Sn(e,t,n){var r=t.indexOf(`--`)===0;n==null||typeof n==`boolean`||n===``?r?e.setProperty(t,``):t===`float`?e.cssFloat=``:e[t]=``:r?e.setProperty(t,n):typeof n!=`number`||n===0||xn.has(t)?t===`float`?e.cssFloat=n:e[t]=(``+n).trim():e[t]=n+`px`}function Cn(e,t,n){if(t!=null&&typeof t!=`object`)throw Error(i(62));if(e=e.style,n!=null){for(var r in n)!n.hasOwnProperty(r)||t!=null&&t.hasOwnProperty(r)||(r.indexOf(`--`)===0?e.setProperty(r,``):r===`float`?e.cssFloat=``:e[r]=``,tn=!0);for(var a in t)r=t[a],t.hasOwnProperty(a)&&n[a]!==r&&(Sn(e,a,r),tn=!0)}else for(var o in t)t.hasOwnProperty(o)&&Sn(e,o,t[o])}function wn(e){if(e.indexOf(`-`)===-1)return!1;switch(e){case`annotation-xml`:case`color-profile`:case`font-face`:case`font-face-src`:case`font-face-uri`:case`font-face-format`:case`font-face-name`:case`missing-glyph`:return!1;default:return!0}}var Tn=new Map([[`acceptCharset`,`accept-charset`],[`htmlFor`,`for`],[`httpEquiv`,`http-equiv`],[`crossOrigin`,`crossorigin`],[`accentHeight`,`accent-height`],[`alignmentBaseline`,`alignment-baseline`],[`arabicForm`,`arabic-form`],[`baselineShift`,`baseline-shift`],[`capHeight`,`cap-height`],[`clipPath`,`clip-path`],[`clipRule`,`clip-rule`],[`colorInterpolation`,`color-interpolation`],[`colorInterpolationFilters`,`color-interpolation-filters`],[`colorProfile`,`color-profile`],[`colorRendering`,`color-rendering`],[`dominantBaseline`,`dominant-baseline`],[`enableBackground`,`enable-background`],[`fillOpacity`,`fill-opacity`],[`fillRule`,`fill-rule`],[`floodColor`,`flood-color`],[`floodOpacity`,`flood-opacity`],[`fontFamily`,`font-family`],[`fontSize`,`font-size`],[`fontSizeAdjust`,`font-size-adjust`],[`fontStretch`,`font-stretch`],[`fontStyle`,`font-style`],[`fontVariant`,`font-variant`],[`fontWeight`,`font-weight`],[`glyphName`,`glyph-name`],[`glyphOrientationHorizontal`,`glyph-orientation-horizontal`],[`glyphOrientationVertical`,`glyph-orientation-vertical`],[`horizAdvX`,`horiz-adv-x`],[`horizOriginX`,`horiz-origin-x`],[`imageRendering`,`image-rendering`],[`letterSpacing`,`letter-spacing`],[`lightingColor`,`lighting-color`],[`markerEnd`,`marker-end`],[`markerMid`,`marker-mid`],[`markerStart`,`marker-start`],[`maskType`,`mask-type`],[`overlinePosition`,`overline-position`],[`overlineThickness`,`overline-thickness`],[`paintOrder`,`paint-order`],[`panose-1`,`panose-1`],[`pointerEvents`,`pointer-events`],[`renderingIntent`,`rendering-intent`],[`shapeRendering`,`shape-rendering`],[`stopColor`,`stop-color`],[`stopOpacity`,`stop-opacity`],[`strikethroughPosition`,`strikethrough-position`],[`strikethroughThickness`,`strikethrough-thickness`],[`strokeDasharray`,`stroke-dasharray`],[`strokeDashoffset`,`stroke-dashoffset`],[`strokeLinecap`,`stroke-linecap`],[`strokeLinejoin`,`stroke-linejoin`],[`strokeMiterlimit`,`stroke-miterlimit`],[`strokeOpacity`,`stroke-opacity`],[`strokeWidth`,`stroke-width`],[`textAnchor`,`text-anchor`],[`textDecoration`,`text-decoration`],[`textRendering`,`text-rendering`],[`transformOrigin`,`transform-origin`],[`underlinePosition`,`underline-position`],[`underlineThickness`,`underline-thickness`],[`unicodeBidi`,`unicode-bidi`],[`unicodeRange`,`unicode-range`],[`unitsPerEm`,`units-per-em`],[`vAlphabetic`,`v-alphabetic`],[`vHanging`,`v-hanging`],[`vIdeographic`,`v-ideographic`],[`vMathematical`,`v-mathematical`],[`vectorEffect`,`vector-effect`],[`vertAdvY`,`vert-adv-y`],[`vertOriginX`,`vert-origin-x`],[`vertOriginY`,`vert-origin-y`],[`wordSpacing`,`word-spacing`],[`writingMode`,`writing-mode`],[`xmlnsXlink`,`xmlns:xlink`],[`xHeight`,`x-height`]]),En=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function Dn(e){return En.test(``+e)?`javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')`:e}function On(){}var kn=null;function An(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var jn=null,Mn=null;function Nn(e){var t=Ht(e);if(t&&(e=t.stateNode)){var n=e[Mt]||null;a:switch(e=t.stateNode,t.type){case`input`:if(mn(e,n.value,n.defaultValue,n.defaultValue,n.checked,n.defaultChecked,n.type,n.name),t=n.name,n.type===`radio`&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll(`input[name="`+pn(``+t)+`"][type="radio"]`),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var a=r[Mt]||null;if(!a)throw Error(i(90));mn(r,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name)}}for(t=0;t<n.length;t++)r=n[t],r.form===e.form&&dn(r)}break a;case`textarea`:vn(e,n.value,n.defaultValue);break a;case`select`:t=n.value,t!=null&&_n(e,!!n.multiple,t,!1)}}}var Pn=!1;function Fn(e,t,n){if(Pn)return e(t,n);Pn=!0;try{return e(t)}finally{if(Pn=!1,(jn!==null||Mn!==null)&&(Rd(),jn&&(t=jn,e=Mn,Mn=jn=null,Nn(t),e)))for(t=0;t<e.length;t++)Nn(e[t])}}function In(e,t){var n=e.stateNode;if(n===null)return null;var r=n[Mt]||null;if(r===null)return null;n=r[t];a:switch(t){case`onClick`:case`onClickCapture`:case`onDoubleClick`:case`onDoubleClickCapture`:case`onMouseDown`:case`onMouseDownCapture`:case`onMouseMove`:case`onMouseMoveCapture`:case`onMouseUp`:case`onMouseUpCapture`:case`onMouseEnter`:(r=!r.disabled)||(e=e.type,r=e!==`button`&&e!==`input`&&e!==`select`&&e!==`textarea`),e=!r;break a;default:e=!1}if(e)return null;if(n&&typeof n!=`function`)throw Error(i(231,t,typeof n));return n}var Ln=typeof window<`u`&&window.document!==void 0&&window.document.createElement!==void 0,Rn=!1;if(Ln)try{var zn={};Object.defineProperty(zn,"passive",{get:function(){Rn=!0}}),window.addEventListener(`test`,zn,zn),window.removeEventListener(`test`,zn,zn)}catch{Rn=!1}var Bn=null,Vn=null,Hn=null;function Un(){if(Hn)return Hn;var e,t=Vn,n=t.length,r,i=`value`in Bn?Bn.value:Bn.textContent,a=i.length;for(e=0;e<n&&t[e]===i[e];e++);var o=n-e;for(r=1;r<=o&&t[n-r]===i[a-r];r++);return Hn=i.slice(e,1<r?1-r:void 0)}function Wn(e){var t=e.keyCode;return`charCode`in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function A(){return!0}function Gn(){return!1}function Kn(e){function t(t,n,r,i,a){for(var o in this._reactName=t,this._targetInst=r,this.type=n,this.nativeEvent=i,this.target=a,this.currentTarget=null,e)e.hasOwnProperty(o)&&(t=e[o],this[o]=t?t(i):i[o]);return this.isDefaultPrevented=(i.defaultPrevented==null?!1===i.returnValue:i.defaultPrevented)?A:Gn,this.isPropagationStopped=Gn,this}return T(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var e=this.nativeEvent;e&&(e.preventDefault?e.preventDefault():typeof e.returnValue!=`unknown`&&(e.returnValue=!1),this.isDefaultPrevented=A)},stopPropagation:function(){var e=this.nativeEvent;e&&(e.stopPropagation?e.stopPropagation():typeof e.cancelBubble!=`unknown`&&(e.cancelBubble=!0),this.isPropagationStopped=A)},persist:function(){},isPersistent:A}),t}var qn={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Jn=Kn(qn),Yn=T({},qn,{view:0,detail:0}),Xn=Kn(Yn),Zn,Qn,$n,er=T({},Yn,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:dr,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return`movementX`in e?e.movementX:(e!==$n&&($n&&e.type===`mousemove`?(Zn=e.screenX-$n.screenX,Qn=e.screenY-$n.screenY):Qn=Zn=0,$n=e),Zn)},movementY:function(e){return`movementY`in e?e.movementY:Qn}}),tr=Kn(er),nr=Kn(T({},er,{dataTransfer:0})),rr=Kn(T({},Yn,{relatedTarget:0})),ir=Kn(T({},qn,{animationName:0,elapsedTime:0,pseudoElement:0})),ar=Kn(T({},qn,{clipboardData:function(e){return`clipboardData`in e?e.clipboardData:window.clipboardData}})),or=Kn(T({},qn,{data:0})),sr={Esc:`Escape`,Spacebar:` `,Left:`ArrowLeft`,Up:`ArrowUp`,Right:`ArrowRight`,Down:`ArrowDown`,Del:`Delete`,Win:`OS`,Menu:`ContextMenu`,Apps:`ContextMenu`,Scroll:`ScrollLock`,MozPrintableKey:`Unidentified`},cr={8:`Backspace`,9:`Tab`,12:`Clear`,13:`Enter`,16:`Shift`,17:`Control`,18:`Alt`,19:`Pause`,20:`CapsLock`,27:`Escape`,32:` `,33:`PageUp`,34:`PageDown`,35:`End`,36:`Home`,37:`ArrowLeft`,38:`ArrowUp`,39:`ArrowRight`,40:`ArrowDown`,45:`Insert`,46:`Delete`,112:`F1`,113:`F2`,114:`F3`,115:`F4`,116:`F5`,117:`F6`,118:`F7`,119:`F8`,120:`F9`,121:`F10`,122:`F11`,123:`F12`,144:`NumLock`,145:`ScrollLock`,224:`Meta`},lr={Alt:`altKey`,Control:`ctrlKey`,Meta:`metaKey`,Shift:`shiftKey`};function ur(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=lr[e])?!!t[e]:!1}function dr(){return ur}var fr=Kn(T({},Yn,{key:function(e){if(e.key){var t=sr[e.key]||e.key;if(t!==`Unidentified`)return t}return e.type===`keypress`?(e=Wn(e),e===13?`Enter`:String.fromCharCode(e)):e.type===`keydown`||e.type===`keyup`?cr[e.keyCode]||`Unidentified`:``},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:dr,charCode:function(e){return e.type===`keypress`?Wn(e):0},keyCode:function(e){return e.type===`keydown`||e.type===`keyup`?e.keyCode:0},which:function(e){return e.type===`keypress`?Wn(e):e.type===`keydown`||e.type===`keyup`?e.keyCode:0}})),pr=Kn(T({},er,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0})),mr=Kn(T({},qn,{submitter:0})),hr=Kn(T({},Yn,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:dr})),gr=Kn(T({},qn,{propertyName:0,elapsedTime:0,pseudoElement:0})),_r=Kn(T({},er,{deltaX:function(e){return`deltaX`in e?e.deltaX:`wheelDeltaX`in e?-e.wheelDeltaX:0},deltaY:function(e){return`deltaY`in e?e.deltaY:`wheelDeltaY`in e?-e.wheelDeltaY:`wheelDelta`in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0})),vr=Kn(T({},qn,{newState:0,oldState:0,source:0})),yr=[9,13,27,32],br=Ln&&`CompositionEvent`in window,xr=null;Ln&&`documentMode`in document&&(xr=document.documentMode);var Sr=Ln&&`TextEvent`in window&&!xr,Cr=Ln&&(!br||xr&&8<xr&&11>=xr),wr=` `,Tr=!1;function Er(e,t){switch(e){case`keyup`:return yr.indexOf(t.keyCode)!==-1;case`keydown`:return t.keyCode!==229;case`keypress`:case`mousedown`:case`focusout`:return!0;default:return!1}}function Dr(e){return e=e.detail,typeof e==`object`&&`data`in e?e.data:null}var j=!1;function Or(e,t){switch(e){case`compositionend`:return Dr(t);case`keypress`:return t.which===32?(Tr=!0,wr):null;case`textInput`:return e=t.data,e===wr&&Tr?null:e;default:return null}}function kr(e,t){if(j)return e===`compositionend`||!br&&Er(e,t)?(e=Un(),Hn=Vn=Bn=null,j=!1,e):null;switch(e){case`paste`:return null;case`keypress`:if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case`compositionend`:return Cr&&t.locale!==`ko`?null:t.data;default:return null}}var Ar={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function M(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t===`input`?!!Ar[e.type]:t===`textarea`}function jr(e,t,n,r){jn?Mn?Mn.push(r):Mn=[r]:jn=r,t=qf(t,`onChange`),0<t.length&&(n=new Jn(`onChange`,`change`,null,n,r),e.push({event:n,listeners:t}))}var Mr=null,Nr=null;function Pr(e){Bf(e,0)}function Fr(e){if(dn(Ut(e)))return e}function Ir(e,t){if(e===`change`)return t}var Lr=!1;if(Ln){var Rr;if(Ln){var zr=`oninput`in document;if(!zr){var Br=document.createElement(`div`);Br.setAttribute(`oninput`,`return;`),zr=typeof Br.oninput==`function`}Rr=zr}else Rr=!1;Lr=Rr&&(!document.documentMode||9<document.documentMode)}function Vr(){Mr&&(Mr.detachEvent(`onpropertychange`,Hr),Nr=Mr=null)}function Hr(e){if(e.propertyName===`value`&&Fr(Nr)){var t=[];jr(t,Nr,e,An(e)),Fn(Pr,t)}}function Ur(e,t,n){e===`focusin`?(Vr(),Mr=t,Nr=n,Mr.attachEvent(`onpropertychange`,Hr)):e===`focusout`&&Vr()}function Wr(e){if(e===`selectionchange`||e===`keyup`||e===`keydown`)return Fr(Nr)}function Gr(e,t){if(e===`click`)return Fr(t)}function Kr(e,t){if(e===`input`||e===`change`)return Fr(t)}function qr(e,t){return e===t&&(e!==0||1/e==1/t)||e!==e&&t!==t}var Jr=typeof Object.is==`function`?Object.is:qr;function Yr(e,t){if(Jr(e,t))return!0;if(typeof e!=`object`||!e||typeof t!=`object`||!t)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!Ge.call(t,i)||!Jr(e[i],t[i]))return!1}return!0}function Xr(e){if(e||=typeof document<`u`?document:void 0,e===void 0)return null;try{return e.activeElement||e.body}catch{return e.body}}function Zr(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Qr(e,t){var n=Zr(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}a:{for(;n;){if(n.nextSibling){n=n.nextSibling;break a}n=n.parentNode}n=void 0}n=Zr(n)}}function $r(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?$r(e,t.parentNode):`contains`in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function ei(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var t=Xr(e.document);t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href==`string`}catch{n=!1}if(n)e=t.contentWindow;else break;t=Xr(e.document)}return t}function ti(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t===`input`&&(e.type===`text`||e.type===`search`||e.type===`tel`||e.type===`url`||e.type===`password`)||t===`textarea`||e.contentEditable===`true`)}var ni=Ln&&`documentMode`in document&&11>=document.documentMode,ri=null,ii=null,ai=null,oi=!1;function si(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;oi||ri==null||ri!==Xr(r)||(r=ri,`selectionStart`in r&&ti(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),ai&&Yr(ai,r)||(ai=r,r=qf(ii,`onSelect`),0<r.length&&(t=new Jn(`onSelect`,`select`,null,t,n),e.push({event:t,listeners:r}),t.target=ri)))}function ci(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n[`Webkit`+e]=`webkit`+t,n[`Moz`+e]=`moz`+t,n}var li={animationend:ci(`Animation`,`AnimationEnd`),animationiteration:ci(`Animation`,`AnimationIteration`),animationstart:ci(`Animation`,`AnimationStart`),transitionrun:ci(`Transition`,`TransitionRun`),transitionstart:ci(`Transition`,`TransitionStart`),transitioncancel:ci(`Transition`,`TransitionCancel`),transitionend:ci(`Transition`,`TransitionEnd`)},ui={},di={};Ln&&(di=document.createElement(`div`).style,`AnimationEvent`in window||(delete li.animationend.animation,delete li.animationiteration.animation,delete li.animationstart.animation),`TransitionEvent`in window||delete li.transitionend.transition);function fi(e){if(ui[e])return ui[e];if(!li[e])return e;var t=li[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in di)return ui[e]=t[n];return e}var pi=fi(`animationend`),mi=fi(`animationiteration`),hi=fi(`animationstart`),gi=fi(`transitionrun`),_i=fi(`transitionstart`),vi=fi(`transitioncancel`),yi=fi(`transitionend`),bi=new Map,xi=`abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error fullscreenChange fullscreenError gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel`.split(` `);xi.push(`scrollEnd`);function Si(e,t){bi.set(e,t),Yt(t,[e])}var Ci=0;function wi(e,t){if(e.name!=null&&e.name!==`auto`)return e.name;if(t.autoName!==null)return t.autoName;e=yd.identifierPrefix;var n=Ci++;return e=`_`+e+`t_`+n.toString(32)+`_`,t.autoName=e}function Ti(e){if(e==null||typeof e==`string`)return e;var t=null,n=Dd;if(n!==null)for(var r=0;r<n.length;r++){var i=e[n[r]];if(i!=null){if(i===`none`)return`none`;t=t==null?i:t+(` `+i)}}return t??e.default}function Ei(e,t){return e=Ti(e),t=Ti(t),t==null?e===`auto`?null:e:t===`auto`?null:t}var Di=typeof reportError==`function`?reportError:function(e){if(typeof window==`object`&&typeof window.ErrorEvent==`function`){var t=new window.ErrorEvent(`error`,{bubbles:!0,cancelable:!0,message:typeof e==`object`&&e&&typeof e.message==`string`?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if(typeof process==`object`&&typeof process.emit==`function`){process.emit(`uncaughtException`,e);return}console.error(e)},Oi=[],ki=0,Ai=0;function ji(){for(var e=ki,t=Ai=ki=0;t<e;){var n=Oi[t];Oi[t++]=null;var r=Oi[t];Oi[t++]=null;var i=Oi[t];Oi[t++]=null;var a=Oi[t];if(Oi[t++]=null,r!==null&&i!==null){var o=r.pending;o===null?i.next=i:(i.next=o.next,o.next=i),r.pending=i}a!==0&&Fi(n,i,a)}}function Mi(e,t,n,r){Oi[ki++]=e,Oi[ki++]=t,Oi[ki++]=n,Oi[ki++]=r,Ai|=r,e.lanes|=r,e=e.alternate,e!==null&&(e.lanes|=r)}function Ni(e,t,n,r){return Mi(e,t,n,r),Ii(e)}function Pi(e,t){return Mi(e,null,null,t),Ii(e)}function Fi(e,t,n){e.lanes|=n;var r=e.alternate;r!==null&&(r.lanes|=n);for(var i=!1,a=e.return;a!==null;)a.childLanes|=n,r=a.alternate,r!==null&&(r.childLanes|=n),a.tag===22&&(e=a.stateNode,e===null||e._visibility&1||(i=!0)),e=a,a=a.return;return e.tag===3?(a=e.stateNode,i&&t!==null&&(i=31-ct(n),e=a.hiddenUpdates,r=e[i],r===null?e[i]=[t]:r.push(t),t.lane=n|536870912),a):null}function Ii(e){if(50<Od)throw Od=0,kd=null,Error(i(185));for(var t=e.return;t!==null;)e=t,t=e.return;return e.tag===3?e.stateNode:null}var Li={};function Ri(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function zi(e,t,n,r){return new Ri(e,t,n,r)}function Bi(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Vi(e,t){var n=e.alternate;return n===null?(n=zi(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&1206910976,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n.refCleanup=e.refCleanup,n}function Hi(e,t){e.flags&=1206910978;var n=e.alternate;return n===null?(e.childLanes=0,e.lanes=t,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=n.childLanes,e.lanes=n.lanes,e.child=n.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=n.memoizedProps,e.memoizedState=n.memoizedState,e.updateQueue=n.updateQueue,e.type=n.type,t=n.dependencies,e.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),e}function Ui(e,t,n,r,a,o){var s=0;if(r=e,typeof r==`function`)Bi(r)&&(s=1);else if(typeof r==`string`)s=qm(e,n,Ae.current)?26:e===`html`||e===`head`||e===`body`?27:5;else a:switch(r){case me:return e=zi(31,n,t,a),e.elementType=me,e.lanes=o,e;case ie:return Wi(n.children,a,o,t);case ae:s=8,a|=24;break;case oe:return e=zi(12,n,t,a|2),e.elementType=oe,e.lanes=o,e;case ue:return e=zi(13,n,t,a),e.elementType=ue,e.lanes=o,e;case de:return e=zi(19,n,t,a),e.elementType=de,e.lanes=o,e;case he:case _e:return e=a|32,e=zi(30,n,t,e),e.elementType=_e,e.lanes=o,e.stateNode={autoName:null,paired:null,clones:null,ref:null},e;default:if(typeof r==`object`&&r)switch(r.$$typeof){case ce:s=10;break a;case se:s=9;break a;case le:s=11;break a;case fe:s=14;break a;case pe:s=16,r=null;break a}s=29,n=Error(i(130,e===null?`null`:typeof e,``)),r=null}return t=zi(s,n,t,a),t.elementType=e,t.type=r,t.lanes=o,t}function Wi(e,t,n,r){return e=zi(7,e,r,t),e.lanes=n,e}function Gi(e,t,n){return e=zi(6,e,null,t),e.lanes=n,e}function Ki(e){var t=zi(18,null,null,0);return t.stateNode=e,t}function qi(e,t,n){return t=zi(4,e.children===null?[]:e.children,e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}var Ji=new WeakMap;function Yi(e,t){if(typeof e==`object`&&e){var n=Ji.get(e);return n===void 0?(t={value:e,source:t,stack:We(t)},Ji.set(e,t),t):n}return{value:e,source:t,stack:We(t)}}var Xi=[],Zi=0,Qi=null,$i=0,ea=[],ta=0,na=null,ra=1,ia=``;function aa(e,t){Xi[Zi++]=$i,Xi[Zi++]=Qi,Qi=e,$i=t}function oa(e,t,n){ea[ta++]=ra,ea[ta++]=ia,ea[ta++]=na,na=e;var r=ra;e=ia;var i=32-ct(r)-1;r&=~(1<<i),n+=1;var a=32-ct(t)+i;if(30<a){var o=i-i%5;a=(r&(1<<o)-1).toString(32),r>>=o,i-=o,ra=1<<32-ct(t)+i|n<<i|r,ia=a+e}else ra=1<<a|n<<i|r,ia=e}function sa(e){e.return!==null&&(aa(e,1),oa(e,1,0))}function ca(e){for(;e===Qi;)Qi=Xi[--Zi],Xi[Zi]=null,$i=Xi[--Zi],Xi[Zi]=null;for(;e===na;)na=ea[--ta],ea[ta]=null,ia=ea[--ta],ea[ta]=null,ra=ea[--ta],ea[ta]=null}function la(e,t){ea[ta++]=ra,ea[ta++]=ia,ea[ta++]=na,ra=t.id,ia=t.overflow,na=e}var ua=null,da=null,N=!1,fa=null,pa=!1,ma=Error(i(519));function ha(e){throw xa(Yi(Error(i(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?`text`:`HTML`,``)),e)),ma}function ga(e){var t=e.stateNode,n=e.type,r=e.memoizedProps;switch(t[jt]=e,t[Mt]=r,n){case`dialog`:$(`cancel`,t),$(`close`,t);break;case`iframe`:case`object`:case`embed`:$(`load`,t);break;case`video`:case`audio`:for(n=0;n<Rf.length;n++)$(Rf[n],t);break;case`source`:$(`error`,t);break;case`img`:case`image`:case`link`:$(`error`,t),$(`load`,t);break;case`details`:$(`toggle`,t);break;case`input`:$(`invalid`,t),hn(t,r.value,r.defaultValue,r.checked,r.defaultChecked,r.type,r.name,!0);break;case`select`:$(`invalid`,t);break;case`textarea`:$(`invalid`,t),yn(t,r.value,r.defaultValue,r.children)}n=r.children,typeof n!=`string`&&typeof n!=`number`&&typeof n!=`bigint`||t.textContent===``+n||!0===r.suppressHydrationWarning||$f(t.textContent,n)?(r.popover!=null&&($(`beforetoggle`,t),$(`toggle`,t)),r.onScroll!=null&&$(`scroll`,t),r.onScrollEnd!=null&&$(`scrollend`,t),r.onClick!=null&&(t.onclick=On),t=!0):t=!1,t||ha(e,!0)}function _a(e){for(ua=e.return;ua;)switch(ua.tag){case 5:case 31:case 13:pa=!1;return;case 27:case 3:pa=!0;return;default:ua=ua.return}}function va(e){if(e!==ua)return!1;if(!N)return _a(e),N=!0,!1;var t=e.tag,n;if((n=t!==3&&t!==27)&&((n=t===5)&&(n=e.type,n=n===`form`||n===`button`||pp(e.type,e.memoizedProps)),n=!n),n&&da&&ha(e),_a(e),t===13){if(e=e.memoizedState,e=e===null?null:e.dehydrated,!e)throw Error(i(317));da=dm(e)}else if(t===31){if(e=e.memoizedState,e=e===null?null:e.dehydrated,!e)throw Error(i(317));da=dm(e)}else t===27?(t=da,Sp(e.type)?(e=um,um=null,da=e):da=t):da=ua?lm(e.stateNode.nextSibling):null;return!0}function ya(){da=ua=null,N=!1}function ba(){var e=fa;return e!==null&&(dd===null?dd=e:dd.push.apply(dd,e),fa=null),e}function xa(e){fa===null?fa=[e]:fa.push(e)}var P=De(null),Sa=null,Ca=null;function wa(e,t,n){ke(P,t._currentValue),t._currentValue=n}function Ta(e){e._currentValue=P.current,Oe(P)}function Ea(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)===t?r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t):(e.childLanes|=t,r!==null&&(r.childLanes|=t)),e===n)break;e=e.return}}function Da(e,t,n,r){var a=e.child;for(a!==null&&(a.return=e);a!==null;){var o=a.dependencies;if(o!==null){var s=a.child;o=o.firstContext;a:for(;o!==null;){var c=o;o=a;for(var l=0;l<t.length;l++)if(c.context===t[l]){o.lanes|=n,c=o.alternate,c!==null&&(c.lanes|=n),Ea(o.return,n,e),r||(s=null);break a}o=c.next}}else if(a.tag===18){if(s=a.return,s===null)throw Error(i(341));s.lanes|=n,o=s.alternate,o!==null&&(o.lanes|=n),Ea(s,n,e),s=null}else a.tag===13&&a.memoizedState!==null&&a.memoizedState.dehydrated===null?(a.lanes|=n,s=a.alternate,s!==null&&(s.lanes|=n),Ea(a.return,n,e),s=a.child,s=s===null?null:s.sibling):s=a.child;if(s!==null)s.return=a;else for(s=a;s!==null;){if(s===e){s=null;break}if(a=s.sibling,a!==null){a.return=s.return,s=a;break}s=s.return}a=s}}function Oa(e,t,n,r){e=null;for(var a=t,o=!1;a!==null;){if(!o){if(a.flags&524288)o=!0;else if(a.flags&262144)break}if(a.tag===10){var s=a.alternate;if(s===null)throw Error(i(387));if(s=s.memoizedProps,s!==null){var c=a.type;Jr(a.pendingProps.value,s.value)||(e===null?e=[c]:e.push(c))}}else if(a===Ne.current){if(s=a.alternate,s===null)throw Error(i(387));s.memoizedState.memoizedState!==a.memoizedState.memoizedState&&(e===null?e=[sh]:e.push(sh))}a=a.return}return e!==null&&Da(t,e,n,r),t.flags|=262144,e!==null}function ka(e){for(e=e.firstContext;e!==null;){if(!Jr(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function Aa(e){Sa=e,Ca=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function ja(e){return Na(Sa,e)}function Ma(e,t){return Sa===null&&Aa(e),Na(e,t)}function Na(e,t){var n=t._currentValue;if(t={context:t,memoizedValue:n,next:null},Ca===null){if(e===null)throw Error(i(308));Ca=t,e.dependencies={lanes:0,firstContext:t},e.flags|=524288}else Ca=Ca.next=t;return n}var Pa=typeof AbortController<`u`?AbortController:function(){var e=[],t=this.signal={aborted:!1,addEventListener:function(t,n){e.push(n)}};this.abort=function(){t.aborted=!0,e.forEach(function(e){return e()})}},Fa=t.unstable_scheduleCallback,Ia=t.unstable_NormalPriority,La={$$typeof:ce,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function Ra(){return{controller:new Pa,data:new Map,refCount:0}}function za(e){e.refCount--,e.refCount===0&&Fa(Ia,function(){e.controller.abort()})}function Ba(e,t){if(e.pendingLanes&4194048){var n=e.transitionTypes;for(n===null&&(n=e.transitionTypes=[]),e=0;e<t.length;e++){var r=t[e];n.indexOf(r)===-1&&n.push(r)}}}var Va=null;function Ha(e){var t=e.transitionTypes;return e.transitionTypes=null,t}var Ua=null,Wa=0,Ga=0,Ka=null;function qa(e,t){if(Ua===null){var n=Ua=[];Wa=0,Ga=Nf(),Ka={status:`pending`,value:void 0,then:function(e){n.push(e)}}}return Wa++,t.then(Ja,Ja),t}function Ja(){if(--Wa===0&&(Va=null,Ua!==null)){Ka!==null&&(Ka.status=`fulfilled`);var e=Ua;Ua=null,Ga=0,Ka=null;for(var t=0;t<e.length;t++)(0,e[t])()}}function Ya(e,t){var n=[],r={status:`pending`,value:null,reason:null,then:function(e){n.push(e)}};return e.then(function(){r.status=`fulfilled`,r.value=t;for(var e=0;e<n.length;e++)(0,n[e])(t)},function(e){for(r.status=`rejected`,r.reason=e,e=0;e<n.length;e++)(0,n[e])(void 0)}),r}var Xa=D.S;D.S=function(e,t){if(md=Xe(),typeof t==`object`&&t&&typeof t.then==`function`&&qa(e,t),Va!==null)for(var n=yf;n!==null;)Ba(n,Va),n=n.next;if(n=e.types,n!==null){for(var r=yf;r!==null;)Ba(r,n),r=r.next;if(Ga!==0){r=Va,r===null&&(r=Va=[]);for(var i=0;i<n.length;i++){var a=n[i];r.indexOf(a)===-1&&r.push(a)}}}Xa!==null&&Xa(e,t)};var Za=De(null);function Qa(){var e=Za.current;return e===null?td.pooledCache:e}function $a(e,t){t===null?ke(Za,Za.current):ke(Za,t.pool)}function eo(){var e=Qa();return e===null?null:{parent:La._currentValue,pool:e}}var to=Error(i(460)),no=Error(i(474)),ro=Error(i(542)),io={then:function(){}};function ao(e){return e=e.status,e===`fulfilled`||e===`rejected`}function oo(e,t,n){switch(n=e[n],n===void 0?e.push(t):n!==t&&(t.then(On,On),t=n),t.status){case`fulfilled`:return t.value;case`rejected`:throw e=t.reason,uo(e),e===void 0&&!(`reason`in t)?Error(i(600)):e;default:if(typeof t.status==`string`)t.then(On,On);else{if(e=td,e!==null&&100<e.shellSuspendCounter)throw Error(i(482));e=t,e.status=`pending`,e.then(function(e){if(t.status===`pending`){var n=t;n.status=`fulfilled`,n.value=e}},function(e){if(t.status===`pending`){var n=t;n.status=`rejected`,n.reason=e}})}switch(t.status){case`fulfilled`:return t.value;case`rejected`:throw e=t.reason,uo(e),e}throw co=t,to}}function so(e){try{var t=e._init;return t(e._payload)}catch(e){throw typeof e==`object`&&e&&typeof e.then==`function`?(co=e,to):e}}var co=null;function lo(){if(co===null)throw Error(i(459));var e=co;return co=null,e}function uo(e){if(e===to||e===ro)throw Error(i(483))}var fo=null,po=0;function mo(e){var t=po;return po+=1,fo===null&&(fo=[]),oo(fo,e,t)}function ho(e,t){t=t.props.ref,e.ref=t===void 0?null:t}function go(e,t){throw t.$$typeof===ne?Error(i(525)):(e=Object.prototype.toString.call(t),Error(i(31,e===`[object Object]`?`object with keys {`+Object.keys(t).join(`, `)+`}`:e)))}function _o(e){function t(t,n){if(e){var r=t.deletions;r===null?(t.deletions=[n],t.flags|=16):r.push(n)}}function n(n,r){if(!e)return null;for(;r!==null;)t(n,r),r=r.sibling;return null}function r(e){for(var t=new Map;e!==null;)e.key===null?t.set(e.index,e):t.set(e.key,e),e=e.sibling;return t}function a(e,t){return e=Vi(e,t),e.index=0,e.sibling=null,e}function o(t,n,r){return t.index=r,e?(r=t.alternate,r===null?(t.flags|=134217730,n):(r=r.index,r<n?(t.flags|=2,n):r)):(t.flags|=1048576,n)}function s(t){return e&&t.alternate===null&&(t.flags|=134217730),t}function c(e,t,n,r){return t===null||t.tag!==6?(t=Gi(n,e.mode,r),t.return=e,t):(t=a(t,n),t.return=e,t)}function l(e,t,n,r){var i=n.type;return i===ie?(e=d(e,t,n.props.children,r,n.key),ho(e,n),e):t!==null&&(t.elementType===i||typeof i==`object`&&i&&i.$$typeof===pe&&so(i)===t.type)?(t=a(t,n.props),ho(t,n),t.return=e,t):(t=Ui(n.type,n.key,n.props,null,e.mode,r),ho(t,n),t.return=e,t)}function u(e,t,n,r){return t===null||t.tag!==4||t.stateNode.containerInfo!==n.containerInfo||t.stateNode.implementation!==n.implementation?(t=qi(n,e.mode,r),t.return=e,t):(t=a(t,n.children||[]),t.return=e,t)}function d(e,t,n,r,i){return t===null||t.tag!==7?(t=Wi(n,e.mode,r,i),t.return=e,t):(t=a(t,n),t.return=e,t)}function f(e,t,n){if(typeof t==`string`&&t!==``||typeof t==`number`||typeof t==`bigint`)return t=Gi(``+t,e.mode,n),t.return=e,t;if(typeof t==`object`&&t){switch(t.$$typeof){case E:return n=Ui(t.type,t.key,t.props,null,e.mode,n),ho(n,t),n.return=e,n;case re:return t=qi(t,e.mode,n),t.return=e,t;case pe:return t=so(t),f(e,t,n)}if(Ce(t)||be(t))return t=Wi(t,e.mode,n,null),t.return=e,t;if(typeof t.then==`function`)return f(e,mo(t),n);if(t.$$typeof===ce)return f(e,Ma(e,t),n);go(e,t)}return null}function p(e,t,n,r){var i=t===null?null:t.key;if(typeof n==`string`&&n!==``||typeof n==`number`||typeof n==`bigint`)return i===null?c(e,t,``+n,r):null;if(typeof n==`object`&&n){switch(n.$$typeof){case E:return n.key===i?l(e,t,n,r):null;case re:return n.key===i?u(e,t,n,r):null;case pe:return n=so(n),p(e,t,n,r)}if(Ce(n)||be(n))return i===null?d(e,t,n,r,null):null;if(typeof n.then==`function`)return p(e,t,mo(n),r);if(n.$$typeof===ce)return p(e,t,Ma(e,n),r);go(e,n)}return null}function m(e,t,n,r,i){if(typeof r==`string`&&r!==``||typeof r==`number`||typeof r==`bigint`)return e=e.get(n)||null,c(t,e,``+r,i);if(typeof r==`object`&&r){switch(r.$$typeof){case E:return e=e.get(r.key===null?n:r.key)||null,l(t,e,r,i);case re:return e=e.get(r.key===null?n:r.key)||null,u(t,e,r,i);case pe:return r=so(r),m(e,t,n,r,i)}if(Ce(r)||be(r))return e=e.get(n)||null,d(t,e,r,i,null);if(typeof r.then==`function`)return m(e,t,n,mo(r),i);if(r.$$typeof===ce)return m(e,t,n,Ma(t,r),i);go(t,r)}return null}function h(i,a,s,c){for(var l=null,u=null,d=a,h=a=0,g=null;d!==null&&h<s.length;h++){d.index>h?(g=d,d=null):g=d.sibling;var _=p(i,d,s[h],c);if(_===null){d===null&&(d=g);break}e&&d&&_.alternate===null&&t(i,d),a=o(_,a,h),u===null?l=_:u.sibling=_,u=_,d=g}if(h===s.length)return n(i,d),N&&aa(i,h),l;if(d===null){for(;h<s.length;h++)d=f(i,s[h],c),d!==null&&(a=o(d,a,h),u===null?l=d:u.sibling=d,u=d);return N&&aa(i,h),l}for(d=r(d);h<s.length;h++)g=m(d,i,h,s[h],c),g!==null&&(e&&(_=g.alternate,_!==null&&d.delete(_.key===null?h:_.key)),a=o(g,a,h),u===null?l=g:u.sibling=g,u=g);return e&&d.forEach(function(e){return t(i,e)}),N&&aa(i,h),l}function g(a,s,c,l){if(c==null)throw Error(i(151));for(var u=null,d=null,h=s,g=s=0,_=null,v=c.next();h!==null&&!v.done;g++,v=c.next()){h.index>g?(_=h,h=null):_=h.sibling;var y=p(a,h,v.value,l);if(y===null){h===null&&(h=_);break}e&&h&&y.alternate===null&&t(a,h),s=o(y,s,g),d===null?u=y:d.sibling=y,d=y,h=_}if(v.done)return n(a,h),N&&aa(a,g),u;if(h===null){for(;!v.done;g++,v=c.next())v=f(a,v.value,l),v!==null&&(s=o(v,s,g),d===null?u=v:d.sibling=v,d=v);return N&&aa(a,g),u}for(h=r(h);!v.done;g++,v=c.next())v=m(h,a,g,v.value,l),v!==null&&(e&&(_=v.alternate,_!==null&&h.delete(_.key===null?g:_.key)),s=o(v,s,g),d===null?u=v:d.sibling=v,d=v);return e&&h.forEach(function(e){return t(a,e)}),N&&aa(a,g),u}function _(e,r,o,c){if(typeof o==`object`&&o&&o.type===ie&&o.key===null&&o.props.ref===void 0&&(o=o.props.children),typeof o==`object`&&o){switch(o.$$typeof){case E:a:{for(var l=o.key;r!==null;){if(r.key===l){if(l=o.type,l===ie){if(r.tag===7){n(e,r.sibling),c=a(r,o.props.children),ho(c,o),c.return=e,e=c;break a}}else if(r.elementType===l||typeof l==`object`&&l&&l.$$typeof===pe&&so(l)===r.type){n(e,r.sibling),c=a(r,o.props),ho(c,o),c.return=e,e=c;break a}n(e,r);break}t(e,r),r=r.sibling}o.type===ie?(c=Wi(o.props.children,e.mode,c,o.key),ho(c,o),c.return=e,e=c):(c=Ui(o.type,o.key,o.props,null,e.mode,c),ho(c,o),c.return=e,e=c)}return s(e);case re:a:{for(l=o.key;r!==null;){if(r.key===l){if(r.tag===4&&r.stateNode.containerInfo===o.containerInfo&&r.stateNode.implementation===o.implementation){n(e,r.sibling),c=a(r,o.children||[]),c.return=e,e=c;break a}n(e,r);break}t(e,r),r=r.sibling}c=qi(o,e.mode,c),c.return=e,e=c}return s(e);case pe:return o=so(o),_(e,r,o,c)}if(Ce(o))return h(e,r,o,c);if(be(o)){if(l=be(o),typeof l!=`function`)throw Error(i(150));return o=l.call(o),g(e,r,o,c)}if(typeof o.then==`function`)return _(e,r,mo(o),c);if(o.$$typeof===ce)return _(e,r,Ma(e,o),c);go(e,o)}return typeof o==`string`&&o!==``||typeof o==`number`||typeof o==`bigint`?(o=``+o,r!==null&&r.tag===6?(n(e,r.sibling),c=a(r,o),c.return=e,e=c):(n(e,r),c=Gi(o,e.mode,c),c.return=e,e=c),s(e)):n(e,r)}return function(e,t,n,r){try{po=0;var i=_(e,t,n,r);return fo=null,i}catch(t){if(t===to||t===ro)throw t;var a=zi(29,t,null,e.mode);return a.lanes=r,a.return=e,a}}}var vo=_o(!0),yo=_o(!1),bo=!1;function xo(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function So(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function Co(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function wo(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,ed&2){var i=r.pending;return i===null?t.next=t:(t.next=i.next,i.next=t),r.pending=t,t=Ii(e),Fi(e,null,n),t}return Mi(e,r,t,n),Ii(e)}function To(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,n&4194048)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,wt(e,n)}}function Eo(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,a=null;if(n=n.firstBaseUpdate,n!==null){do{var o={lane:n.lane,tag:n.tag,payload:n.payload,callback:null,next:null};a===null?i=a=o:a=a.next=o,n=n.next}while(n!==null);a===null?i=a=t:a=a.next=t}else i=a=t;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:a,shared:r.shared,callbacks:r.callbacks},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}var Do=!1;function Oo(){if(Do){var e=Ka;if(e!==null)throw e}}function ko(e,t,n,r){Do=!1;var i=e.updateQueue;bo=!1;var a=i.firstBaseUpdate,o=i.lastBaseUpdate,s=i.shared.pending;if(s!==null){i.shared.pending=null;var c=s,l=c.next;c.next=null,o===null?a=l:o.next=l,o=c;var u=e.alternate;u!==null&&(u=u.updateQueue,s=u.lastBaseUpdate,s!==o&&(s===null?u.firstBaseUpdate=l:s.next=l,u.lastBaseUpdate=c))}if(a!==null){var d=i.baseState;o=0,u=l=c=null,s=a;do{var f=s.lane&-536870913,p=f!==s.lane;if(p?(q&f)===f:(r&f)===f){f!==0&&f===Ga&&(Do=!0),u!==null&&(u=u.next={lane:0,tag:s.tag,payload:s.payload,callback:null,next:null});a:{var m=e,h=s;f=t;var g=n;switch(h.tag){case 1:if(m=h.payload,typeof m==`function`){d=m.call(g,d,f);break a}d=m;break a;case 3:m.flags=m.flags&-65537|128;case 0:if(m=h.payload,f=typeof m==`function`?m.call(g,d,f):m,f==null)break a;d=T({},d,f);break a;case 2:bo=!0}}f=s.callback,f!==null&&(e.flags|=64,p&&(e.flags|=8192),p=i.callbacks,p===null?i.callbacks=[f]:p.push(f))}else p={lane:f,tag:s.tag,payload:s.payload,callback:s.callback,next:null},u===null?(l=u=p,c=d):u=u.next=p,o|=f;if(s=s.next,s===null){if(s=i.shared.pending,s===null)break;p=s,s=p.next,p.next=null,i.lastBaseUpdate=p,i.shared.pending=null}}while(1);u===null&&(c=d),i.baseState=c,i.firstBaseUpdate=l,i.lastBaseUpdate=u,a===null&&(i.shared.lanes=0),Z|=o,e.lanes=o,e.memoizedState=d}}function Ao(e,t){if(typeof e!=`function`)throw Error(i(191,e));e.call(t)}function jo(e,t){var n=e.callbacks;if(n!==null)for(e.callbacks=null,e=0;e<n.length;e++)Ao(n[e],t)}var Mo=De(null),No=De(0);function Po(e,t){e=id,ke(No,e),ke(Mo,t),id=e|t.baseLanes}function Fo(){ke(No,id),ke(Mo,Mo.current)}function Io(){id=No.current,Oe(Mo),Oe(No)}var Lo=De(null),Ro=null;function zo(e){var t=e.alternate;ke(F,F.current&1),ke(Lo,e),Ro===null&&(t===null||Mo.current!==null||t.memoizedState!==null)&&(Ro=e)}function Bo(e){ke(F,F.current),ke(Lo,e),Ro===null&&(Ro=e)}function Vo(e){e.tag===22?(ke(F,F.current),ke(Lo,e),Ro===null&&(Ro=e)):Ho()}function Ho(){ke(F,F.current),ke(Lo,Lo.current)}function Uo(e){Oe(Lo),Ro===e&&(Ro=null),Oe(F)}var F=De(0);function I(e,t){ke(Lo,Lo.current),ke(F,t)}function Wo(e){Oe(F),Oe(Lo),Ro===e&&(Ro=null)}function Go(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||om(n)||sm(n)))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==`independent`){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var Ko=0,L=null,R=null,qo=null,Jo=!1,Yo=!1,Xo=!1,Zo=0,Qo=0,$o=null,es=0;function ts(){throw Error(i(321))}function ns(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!Jr(e[n],t[n]))return!1;return!0}function rs(e,t,n,r,i,a){return Ko=a,L=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,D.H=e===null||e.memoizedState===null?vc:yc,Xo=!1,a=n(r,i),Xo=!1,Yo&&(a=as(t,n,r,i)),is(e),a}function is(e){D.H=_c;var t=R!==null&&R.next!==null;if(Ko=0,qo=R=L=null,Jo=!1,Qo=0,$o=null,t)throw Error(i(300));e===null||Ic||(e=e.dependencies,e!==null&&ka(e)&&(Ic=!0))}function as(e,t,n,r){L=e;var a=0;do{if(Yo&&($o=null),Qo=0,Yo=!1,25<=a)throw Error(i(301));if(a+=1,qo=R=null,e.updateQueue!=null){var o=e.updateQueue;o.lastEffect=null,o.events=null,o.stores=null,o.memoCache!=null&&(o.memoCache.index=0)}D.H=bc,o=t(n,r)}while(Yo);return o}function os(){var e=D.H,t=e.useState()[0];return t=typeof t.then==`function`?fs(t):t,e=e.useState()[0],(R===null?null:R.memoizedState)!==e&&(L.flags|=1024),t}function z(){var e=Zo!==0;return Zo=0,e}function ss(e,t,n){t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~n}function cs(e){if(Jo){for(e=e.memoizedState;e!==null;){var t=e.queue;t!==null&&(t.pending=null),e=e.next}Jo=!1}Ko=0,qo=R=L=null,Yo=!1,Qo=Zo=0,$o=null}function ls(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return qo===null?L.memoizedState=qo=e:qo=qo.next=e,qo}function us(){if(R===null){var e=L.alternate;e=e===null?null:e.memoizedState}else e=R.next;var t=qo===null?L.memoizedState:qo.next;if(t!==null)qo=t,R=e;else{if(e===null)throw L.alternate===null?Error(i(467)):Error(i(310));R=e,e={memoizedState:R.memoizedState,baseState:R.baseState,baseQueue:R.baseQueue,queue:R.queue,next:null},qo===null?L.memoizedState=qo=e:qo=qo.next=e}return qo}function ds(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function fs(e){var t=Qo;return Qo+=1,$o===null&&($o=[]),e=oo($o,e,t),t=L,(qo===null?t.memoizedState:qo.next)===null&&(t=t.alternate,D.H=t===null||t.memoizedState===null?vc:yc),e}function ps(e){if(typeof e==`object`&&e){if(typeof e.then==`function`)return fs(e);if(e.$$typeof===ve)return;if(e.$$typeof===ce)return ja(e)}throw Error(i(438,String(e)))}function ms(e){var t=null,n=L.updateQueue;if(n!==null&&(t=n.memoCache),t==null){var r=L.alternate;r!==null&&(r=r.updateQueue,r!==null&&(r=r.memoCache,r!=null&&(t={data:r.data.map(function(e){return e.slice()}),index:0})))}if(t??={data:[],index:0},n===null&&(n=ds(),L.updateQueue=n),n.memoCache=t,n=t.data[t.index],n===void 0)for(n=t.data[t.index]=Array(e),r=0;r<e;r++)n[r]=ge;return t.index++,n}function hs(e,t){return typeof t==`function`?t(e):t}function gs(e){return _s(us(),R,e)}function _s(e,t,n){var r=e.queue;if(r===null)throw Error(i(311));r.lastRenderedReducer=n;var a=e.baseQueue,o=r.pending;if(o!==null){if(a!==null){var s=a.next;a.next=o.next,o.next=s}t.baseQueue=a=o,r.pending=null}if(o=e.baseState,a===null)e.memoizedState=o;else{t=a.next;var c=s=null,l=null,u=t,d=!1;do{var f=u.lane&-536870913;if(f===u.lane?(Ko&f)===f:(q&f)===f){var p=u.revertLane;if(p===0)l!==null&&(l=l.next={lane:0,revertLane:0,gesture:null,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),f===Ga&&(d=!0);else if((Ko&p)===p){u=u.next,p===Ga&&(d=!0);continue}else f={lane:0,revertLane:u.revertLane,gesture:null,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null},l===null?(c=l=f,s=o):l=l.next=f,L.lanes|=p,Z|=p;f=u.action,Xo&&n(o,f),o=u.hasEagerState?u.eagerState:n(o,f)}else p={lane:f,revertLane:u.revertLane,gesture:u.gesture,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null},l===null?(c=l=p,s=o):l=l.next=p,L.lanes|=f,Z|=f;u=u.next}while(u!==null&&u!==t);if(l===null?s=o:l.next=c,!Jr(o,e.memoizedState)&&(Ic=!0,d&&(n=Ka,n!==null)))throw n;e.memoizedState=o,e.baseState=s,e.baseQueue=l,r.lastRenderedState=o}return a===null&&(r.lanes=0),[e.memoizedState,r.dispatch]}function vs(e){var t=us(),n=t.queue;if(n===null)throw Error(i(311));n.lastRenderedReducer=e;var r=n.dispatch,a=n.pending,o=t.memoizedState;if(a!==null){n.pending=null;var s=a=a.next;do o=e(o,s.action),s=s.next;while(s!==a);Jr(o,t.memoizedState)||(Ic=!0),t.memoizedState=o,t.baseQueue===null&&(t.baseState=o),n.lastRenderedState=o}return[o,r]}function ys(e,t,n){var r=L,a=us(),o=N;if(o){if(n===void 0)throw Error(i(407));n=n()}else n=t();var s=!Jr((R||a).memoizedState,n);if(s&&(a.memoizedState=n,Ic=!0),a=a.queue,Ws(Ss.bind(null,r,a,e),[e]),e=a.getSnapshot!==t||s||qo!==null&&!!(qo.memoizedState.tag&1),zs(e?9:8,{destroy:void 0},xs.bind(null,r,a,n,t),null),e){if(r.flags|=2048,td===null)throw Error(i(349));o||Ko&127||bs(r,t,n)}return n}function bs(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=L.updateQueue,t===null?(t=ds(),L.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function xs(e,t,n,r){t.value=n,t.getSnapshot=r,Cs(t)&&ws(e)}function Ss(e,t,n){return n(function(){Cs(t)&&ws(e)})}function Cs(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!Jr(e,n)}catch{return!0}}function ws(e){var t=Pi(e,2);t!==null&&Nd(t,e,2)}function Ts(e){var t=ls();if(typeof e==`function`){var n=e;if(e=n(),Xo){st(!0);try{n()}finally{st(!1)}}}return t.memoizedState=t.baseState=e,t.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:hs,lastRenderedState:e},t}function Es(e,t,n,r){return e.baseState=n,_s(e,R,typeof r==`function`?r:hs)}function Ds(e,t,n,r,a){if(mc(e))throw Error(i(485));if(e=t.action,e!==null){var o={payload:a,action:e,next:null,isTransition:!0,status:`pending`,value:null,reason:null,listeners:[],then:function(e){o.listeners.push(e)}};D.T===null?o.isTransition=!1:n(!0),r(o),n=t.pending,n===null?(o.next=t.pending=o,Os(t,o)):(o.next=n.next,t.pending=n.next=o)}}function Os(e,t){var n=t.action,r=t.payload,i=e.state;if(t.isTransition){var a=D.T,o={};o.types=a===null?null:a.types,D.T=o;try{var s=n(i,r),c=D.S;c!==null&&c(o,s),ks(e,t,s)}catch(n){js(e,t,n)}finally{a!==null&&o.types!==null&&(a.types=o.types),D.T=a}}else try{a=n(i,r),ks(e,t,a)}catch(n){js(e,t,n)}}function ks(e,t,n){typeof n==`object`&&n&&typeof n.then==`function`?n.then(function(n){As(e,t,n)},function(n){return js(e,t,n)}):As(e,t,n)}function As(e,t,n){t.status=`fulfilled`,t.value=n,Ms(t),e.state=n,t=e.pending,t!==null&&(n=t.next,n===t?e.pending=null:(n=n.next,t.next=n,Os(e,n)))}function js(e,t,n){var r=e.pending;if(e.pending=null,r!==null){r=r.next;do t.status=`rejected`,t.reason=n,Ms(t),t=t.next;while(t!==r)}e.action=null}function Ms(e){e=e.listeners;for(var t=0;t<e.length;t++)(0,e[t])()}function Ns(e,t){return t}function Ps(e,t){if(N){var n=td.formState;if(n!==null){a:{var r=L;if(N){if(da){b:{for(var i=da,a=pa;i.nodeType!==8;){if(!a){i=null;break b}if(i=lm(i.nextSibling),i===null){i=null;break b}}a=i.data,i=a===`F!`||a===`F`?i:null}if(i){da=lm(i.nextSibling),r=i.data===`F!`;break a}}ha(r)}r=!1}r&&(t=n[0])}}return n=ls(),n.memoizedState=n.baseState=t,r={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Ns,lastRenderedState:t},n.queue=r,n=dc.bind(null,L,r),r.dispatch=n,r=Ts(!1),a=pc.bind(null,L,!1,r.queue),r=ls(),i={state:t,dispatch:null,action:e,pending:null},r.queue=i,n=Ds.bind(null,L,i,a,n),i.dispatch=n,r.memoizedState=e,[t,n,!1]}function Fs(e){return Is(us(),R,e)}function Is(e,t,n){if(t=_s(e,t,Ns)[0],e=gs(hs)[0],typeof t==`object`&&t&&typeof t.then==`function`)try{var r=fs(t)}catch(e){throw e===to?ro:e}else r=t;t=us();var i=t.queue,a=i.dispatch;return n!==t.memoizedState&&(L.flags|=2048,zs(9,{destroy:void 0},Ls.bind(null,i,n),null)),[r,a,e]}function Ls(e,t){e.action=t}function Rs(e){var t=us(),n=R;if(n!==null)return Is(t,n,e);us(),t=t.memoizedState,n=us();var r=n.queue.dispatch;return n.memoizedState=e,[t,r,!1]}function zs(e,t,n,r){return e={tag:e,create:n,deps:r,inst:t,next:null},t=L.updateQueue,t===null&&(t=ds(),L.updateQueue=t),n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e),e}function Bs(){return us().memoizedState}function Vs(e,t,n,r){var i=ls();L.flags|=e,i.memoizedState=zs(1|t,{destroy:void 0},n,r===void 0?null:r)}function Hs(e,t,n,r){var i=us();r=r===void 0?null:r;var a=i.memoizedState.inst;R!==null&&r!==null&&ns(r,R.memoizedState.deps)?i.memoizedState=zs(t,a,n,r):(L.flags|=e,i.memoizedState=zs(1|t,a,n,r))}function Us(e,t){Vs(8390656,8,e,t)}function Ws(e,t){Hs(2048,8,e,t)}function Gs(e){L.flags|=4;var t=L.updateQueue;if(t===null)t=ds(),L.updateQueue=t,t.events=[e];else{var n=t.events;n===null?t.events=[e]:n.push(e)}}function Ks(e){var t=us().memoizedState;return Gs({ref:t,nextImpl:e}),function(){if(ed&2)throw Error(i(440));return t.impl.apply(void 0,arguments)}}function qs(e,t){return Hs(4,2,e,t)}function Js(e,t){return Hs(4,4,e,t)}function Ys(e,t){if(typeof t==`function`){e=e();var n=t(e);return function(){typeof n==`function`?n():t(null)}}if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function Xs(e,t,n){n=n==null?null:n.concat([e]),Hs(4,4,Ys.bind(null,t,e),n)}function Zs(){}function Qs(e,t){var n=us();t=t===void 0?null:t;var r=n.memoizedState;return t!==null&&ns(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function $s(e,t){var n=us();t=t===void 0?null:t;var r=n.memoizedState;if(t!==null&&ns(t,r[1]))return r[0];if(r=e(),Xo){st(!0);try{e()}finally{st(!1)}}return n.memoizedState=[r,t],r}function ec(e,t,n){return n===void 0||Ko&1073741824&&!(q&261930)?e.memoizedState=t:(e.memoizedState=n,e=jd(),L.lanes|=e,Z|=e,n)}function tc(e,t,n,r){return Jr(n,t)?n:Mo.current===null?!(Ko&106)||Ko&1073741824&&!(q&261930)?(Ic=!0,e.memoizedState=n):(e=jd(),L.lanes|=e,Z|=e,t):(e=ec(e,n,r),Jr(e,t)||(Ic=!0),e)}function nc(e,t,n,r,i){var a=O.p;O.p=a!==0&&8>a?a:8;var o=D.T,s={};s.types=o===null?null:o.types,D.T=s,pc(e,!1,t,n);try{var c=i(),l=D.S;l!==null&&l(s,c),typeof c==`object`&&c&&typeof c.then==`function`?fc(e,t,Ya(c,r),Ad(e)):fc(e,t,r,Ad(e))}catch(n){fc(e,t,{then:function(){},status:`rejected`,reason:n},Ad())}finally{O.p=a,o!==null&&s.types!==null&&(o.types=s.types),D.T=o}}function rc(){}function ic(e,t,n,r){if(e.tag!==5)throw Error(i(476));var a=ac(e).queue;nc(e,a,t,we,n===null?rc:function(){return oc(e),n(r)})}function ac(e){var t=e.memoizedState;if(t!==null)return t;t={memoizedState:we,baseState:we,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:hs,lastRenderedState:we},next:null};var n={};return t.next={memoizedState:n,baseState:n,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:hs,lastRenderedState:n},next:null},e.memoizedState=t,e=e.alternate,e!==null&&(e.memoizedState=t),t}function oc(e){var t=ac(e);t.next===null&&(t=e.alternate.memoizedState),fc(e,t.next.queue,{},Ad())}function B(){return ja(sh)}function sc(){return us().memoizedState}function cc(){return us().memoizedState}function lc(e){for(var t=e.return;t!==null;){switch(t.tag){case 24:case 3:var n=Ad();e=Co(n);var r=wo(t,e,n);r!==null&&(Nd(r,t,n),To(r,t,n)),t={cache:Ra()},e.payload=t;return}t=t.return}}function uc(e,t,n){var r=Ad();n={lane:r,revertLane:0,gesture:null,action:n,hasEagerState:!1,eagerState:null,next:null},mc(e)?hc(t,n):(n=Ni(e,t,n,r),n!==null&&(Nd(n,e,r),gc(n,t,r)))}function dc(e,t,n){fc(e,t,n,Ad())}function fc(e,t,n,r){var i={lane:r,revertLane:0,gesture:null,action:n,hasEagerState:!1,eagerState:null,next:null};if(mc(e))hc(t,i);else{var a=e.alternate;if(e.lanes===0&&(a===null||a.lanes===0)&&(a=t.lastRenderedReducer,a!==null))try{var o=t.lastRenderedState,s=a(o,n);if(i.hasEagerState=!0,i.eagerState=s,Jr(s,o))return Mi(e,t,i,0),td===null&&ji(),!1}catch{}if(n=Ni(e,t,i,r),n!==null)return Nd(n,e,r),gc(n,t,r),!0}return!1}function pc(e,t,n,r){if(r={lane:2,revertLane:Nf(),gesture:null,action:r,hasEagerState:!1,eagerState:null,next:null},mc(e)){if(t)throw Error(i(479))}else t=Ni(e,n,r,2),t!==null&&Nd(t,e,2)}function mc(e){var t=e.alternate;return e===L||t!==null&&t===L}function hc(e,t){Yo=Jo=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function gc(e,t,n){if(n&4194048){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,wt(e,n)}}var _c={readContext:ja,use:ps,useCallback:ts,useContext:ts,useEffect:ts,useImperativeHandle:ts,useLayoutEffect:ts,useInsertionEffect:ts,useMemo:ts,useReducer:ts,useRef:ts,useState:ts,useDebugValue:ts,useDeferredValue:ts,useTransition:ts,useSyncExternalStore:ts,useId:ts,useHostTransitionStatus:ts,useFormState:ts,useActionState:ts,useOptimistic:ts,useMemoCache:ts,useCacheRefresh:ts,useEffectEvent:ts},vc={readContext:ja,use:ps,useCallback:function(e,t){return ls().memoizedState=[e,t===void 0?null:t],e},useContext:ja,useEffect:Us,useImperativeHandle:function(e,t,n){n=n==null?null:n.concat([e]),Vs(4194308,4,Ys.bind(null,t,e),n)},useLayoutEffect:function(e,t){return Vs(4194308,4,e,t)},useInsertionEffect:function(e,t){Vs(4,2,e,t)},useMemo:function(e,t){var n=ls();t=t===void 0?null:t;var r=e();if(Xo){st(!0);try{e()}finally{st(!1)}}return n.memoizedState=[r,t],r},useReducer:function(e,t,n){var r=ls();if(n!==void 0){var i=n(t);if(Xo){st(!0);try{n(t)}finally{st(!1)}}}else i=t;return r.memoizedState=r.baseState=i,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:i},r.queue=e,e=e.dispatch=uc.bind(null,L,e),[r.memoizedState,e]},useRef:function(e){var t=ls();return e={current:e},t.memoizedState=e},useState:function(e){e=Ts(e);var t=e.queue,n=dc.bind(null,L,t);return t.dispatch=n,[e.memoizedState,n]},useDebugValue:Zs,useDeferredValue:function(e,t){return ec(ls(),e,t)},useTransition:function(){var e=Ts(!1);return e=nc.bind(null,L,e.queue,!0,!1),ls().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,t,n){var r=L,a=ls();if(N){if(n===void 0)throw Error(i(407));n=n()}else{if(n=t(),td===null)throw Error(i(349));q&127||bs(r,t,n)}a.memoizedState=n;var o={value:n,getSnapshot:t};return a.queue=o,Us(Ss.bind(null,r,o,e),[e]),r.flags|=2048,zs(9,{destroy:void 0},xs.bind(null,r,o,n,t),null),n},useId:function(){var e=ls(),t=td.identifierPrefix;if(N){var n=ia,r=ra;n=(r&~(1<<32-ct(r)-1)).toString(32)+n,t=`_`+t+`R_`+n,n=Zo++,0<n&&(t+=`H`+n.toString(32)),t+=`_`}else n=es++,t=`_`+t+`r_`+n.toString(32)+`_`;return e.memoizedState=t},useHostTransitionStatus:B,useFormState:Ps,useActionState:Ps,useOptimistic:function(e){var t=ls();t.memoizedState=t.baseState=e;var n={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return t.queue=n,t=pc.bind(null,L,!0,n),n.dispatch=t,[e,t]},useMemoCache:ms,useCacheRefresh:function(){return ls().memoizedState=lc.bind(null,L)},useEffectEvent:function(e){var t=ls(),n={impl:e};return t.memoizedState=n,function(){if(ed&2)throw Error(i(440));return n.impl.apply(void 0,arguments)}}},yc={readContext:ja,use:ps,useCallback:Qs,useContext:ja,useEffect:Ws,useImperativeHandle:Xs,useInsertionEffect:qs,useLayoutEffect:Js,useMemo:$s,useReducer:gs,useRef:Bs,useState:function(){return gs(hs)},useDebugValue:Zs,useDeferredValue:function(e,t){return tc(us(),R.memoizedState,e,t)},useTransition:function(){var e=gs(hs)[0],t=us().memoizedState;return[typeof e==`boolean`?e:fs(e),t]},useSyncExternalStore:ys,useId:sc,useHostTransitionStatus:B,useFormState:Fs,useActionState:Fs,useOptimistic:function(e,t){return Es(us(),R,e,t)},useMemoCache:ms,useCacheRefresh:cc,useEffectEvent:Ks},bc={readContext:ja,use:ps,useCallback:Qs,useContext:ja,useEffect:Ws,useImperativeHandle:Xs,useInsertionEffect:qs,useLayoutEffect:Js,useMemo:$s,useReducer:vs,useRef:Bs,useState:function(){return vs(hs)},useDebugValue:Zs,useDeferredValue:function(e,t){var n=us();return R===null?ec(n,e,t):tc(n,R.memoizedState,e,t)},useTransition:function(){var e=vs(hs)[0],t=us().memoizedState;return[typeof e==`boolean`?e:fs(e),t]},useSyncExternalStore:ys,useId:sc,useHostTransitionStatus:B,useFormState:Rs,useActionState:Rs,useOptimistic:function(e,t){var n=us();return R===null?(n.baseState=e,[e,n.queue.dispatch]):Es(n,R,e,t)},useMemoCache:ms,useCacheRefresh:cc,useEffectEvent:Ks};function xc(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:T({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var Sc={enqueueSetState:function(e,t,n){e=e._reactInternals;var r=Ad(),i=Co(r);i.payload=t,n!=null&&(i.callback=n),t=wo(e,i,r),t!==null&&(Nd(t,e,r),To(t,e,r))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=Ad(),i=Co(r);i.tag=1,i.payload=t,n!=null&&(i.callback=n),t=wo(e,i,r),t!==null&&(Nd(t,e,r),To(t,e,r))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=Ad(),r=Co(n);r.tag=2,t!=null&&(r.callback=t),t=wo(e,r,n),t!==null&&(Nd(t,e,n),To(t,e,n))}};function Cc(e,t,n,r,i,a,o){return e=e.stateNode,typeof e.shouldComponentUpdate==`function`?e.shouldComponentUpdate(r,a,o):t.prototype&&t.prototype.isPureReactComponent?!Yr(n,r)||!Yr(i,a):!0}function wc(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps==`function`&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps==`function`&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&Sc.enqueueReplaceState(t,t.state,null)}function Tc(e,t){var n=t;if(`ref`in t)for(var r in n={},t)r!==`ref`&&(n[r]=t[r]);if(e=e.defaultProps)for(var i in n===t&&(n=T({},n)),e)n[i]===void 0&&(n[i]=e[i]);return n}function Ec(e){Di(e)}function Dc(e){console.error(e)}function Oc(e){Di(e)}function kc(e,t){try{var n=e.onUncaughtError;n(t.value,{componentStack:t.stack})}catch(e){setTimeout(function(){throw e})}}function Ac(e,t,n){try{var r=e.onCaughtError;r(n.value,{componentStack:n.stack,errorBoundary:t.tag===1?t.stateNode:null})}catch(e){setTimeout(function(){throw e})}}function jc(e,t,n){return n=Co(n),n.tag=3,n.payload={element:null},n.callback=function(){kc(e,t)},n}function Mc(e){return e=Co(e),e.tag=3,e}function Nc(e,t,n,r){var i=n.type.getDerivedStateFromError;if(typeof i==`function`){var a=r.value;e.payload=function(){return i(a)},e.callback=function(){Ac(t,n,r)}}var o=n.stateNode;o!==null&&typeof o.componentDidCatch==`function`&&(e.callback=function(){Ac(t,n,r),typeof i!=`function`&&(_d===null?_d=new Set([this]):_d.add(this));var e=r.stack;this.componentDidCatch(r.value,{componentStack:e===null?``:e})})}function Pc(e,t,n,r,a){if(n.flags|=32768,typeof r==`object`&&r&&typeof r.then==`function`){if(t=n.alternate,t!==null&&Oa(t,n,a,!0),n=Lo.current,n!==null){switch(n.tag){case 31:case 13:case 19:return Ro===null?Q():n.alternate===null&&ad===0&&(ad=3),n.flags&=-257,n.flags|=65536,n.lanes=a,r===io?n.flags|=16384:(t=n.updateQueue,t===null?n.updateQueue=new Set([r]):t.add(r),pf(e,r,a)),!1;case 22:return n.flags|=65536,r===io?n.flags|=16384:(t=n.updateQueue,t===null?(t={transitions:null,markerInstances:null,retryQueue:new Set([r])},n.updateQueue=t):(n=t.retryQueue,n===null?t.retryQueue=new Set([r]):n.add(r)),pf(e,r,a)),!1}throw Error(i(435,n.tag))}return pf(e,r,a),Q(),!1}if(N)return t=Lo.current,t===null?(r!==ma&&(t=Error(i(423),{cause:r}),xa(Yi(t,n))),e=e.current.alternate,e.flags|=65536,a&=-a,e.lanes|=a,r=Yi(r,n),a=jc(e.stateNode,r,a),Eo(e,a),ad!==4&&(ad=2)):(!(t.flags&65536)&&(t.flags|=256),t.flags|=65536,t.lanes=a,r!==ma&&(e=Error(i(422),{cause:r}),xa(Yi(e,n)))),!1;var o=Error(i(520),{cause:r});if(o=Yi(o,n),ud===null?ud=[o]:ud.push(o),ad!==4&&(ad=2),t===null)return!0;r=Yi(r,n),n=t;do{switch(n.tag){case 3:return n.flags|=65536,e=a&-a,n.lanes|=e,e=jc(n.stateNode,r,e),Eo(n,e),!1;case 1:if(t=n.type,o=n.stateNode,!(n.flags&128)&&(typeof t.getDerivedStateFromError==`function`||o!==null&&typeof o.componentDidCatch==`function`&&(_d===null||!_d.has(o))))return n.flags|=65536,a&=-a,n.lanes|=a,a=Mc(a),Nc(a,e,n,r),Eo(n,a),!1;break;case 22:if(n.memoizedState!==null)return n.flags|=65536,!1}n=n.return}while(n!==null);return!1}var Fc=Error(i(461)),Ic=!1;function Lc(e,t,n,r){t.child=e===null?yo(t,null,n,r):vo(t,e.child,n,r)}function Rc(e,t,n,r,i){n=n.render;var a=t.ref;if(`ref`in r){var o={};for(var s in r)s!==`ref`&&(o[s]=r[s])}else o=r;return Aa(t),r=rs(e,t,n,o,a,i),s=z(),e!==null&&!Ic?(ss(e,t,i),fl(e,t,i)):(N&&s&&sa(t),t.flags|=1,Lc(e,t,r,i),t.child)}function zc(e,t,n,r,i){if(e===null){var a=n.type;return typeof a==`function`&&!Bi(a)&&a.defaultProps===void 0&&n.compare===null?(t.tag=15,t.type=a,Bc(e,t,a,r,i)):(e=Ui(n.type,null,r,t,t.mode,i),e.ref=t.ref,e.return=t,t.child=e)}if(a=e.child,!pl(e,i)){var o=a.memoizedProps;if(n=n.compare,n=n===null?Yr:n,n(o,r)&&e.ref===t.ref)return fl(e,t,i)}return t.flags|=1,e=Vi(a,r),e.ref=t.ref,e.return=t,t.child=e}function Bc(e,t,n,r,i){if(e!==null){var a=e.memoizedProps;if(Yr(a,r)&&e.ref===t.ref){if(Ic=!1,t.pendingProps=r=a,pl(e,i))e.flags&131072&&(Ic=!0);else return t.lanes=e.lanes,fl(e,t,i)}}return Jc(e,t,n,r,i)}function Vc(e,t,n,r){var i=r.children,a=e===null?null:e.memoizedState;if(e===null&&t.stateNode===null&&(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),r.mode===`hidden`){if(t.flags&128){if(a=a===null?n:a.baseLanes|n,e!==null){for(r=t.child=e.child,i=0;r!==null;)i=i|r.lanes|r.childLanes,r=r.sibling;r=i&~a}else r=0,t.child=null;return Uc(e,t,a,n,r)}if(n&536870912)t.memoizedState={baseLanes:0,cachePool:null},e!==null&&$a(t,a===null?null:a.cachePool),a===null?Fo():Po(t,a),Vo(t);else return r=t.lanes=536870912,Uc(e,t,a===null?n:a.baseLanes|n,n,r)}else a===null?(e!==null&&$a(t,null),Fo(),Ho()):($a(t,a.cachePool),Po(t,a),Ho(),t.memoizedState=null);return Lc(e,t,i,n),t.child}function Hc(e,t){return e!==null&&e.tag===22||t.stateNode!==null||(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),t.sibling}function Uc(e,t,n,r,i){var a=Qa();return a=a===null?null:{parent:La._currentValue,pool:a},t.memoizedState={baseLanes:n,cachePool:a},e!==null&&$a(t,null),Fo(),Vo(t),e!==null&&Oa(e,t,r,!0),t.childLanes=i,null}function Wc(e,t){return t=rl({mode:t.mode,children:t.children},e.mode),t.ref=e.ref,e.child=t,t.return=e,t}function Gc(e,t,n){return vo(t,e.child,null,n),e=Wc(t,t.pendingProps),e.flags|=2,Uo(t),t.memoizedState=null,e}function Kc(e,t,n){var r=t.pendingProps,a=!!(t.flags&128);if(t.flags&=-129,e===null){if(N){if(r.mode===`hidden`)return e=Wc(t,r),t.lanes=536870912,e.memoizedState={baseLanes:0,cachePool:null},Hc(null,e);if(Bo(t),(e=da)?(e=am(e,pa),e=e!==null&&e.data===`&`?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:na===null?null:{id:ra,overflow:ia},retryLane:536870912,hydrationErrors:null},n=Ki(e),n.return=t,t.child=n,ua=t,da=null)):e=null,e===null)throw ha(t);return t.lanes=536870912,null}return Wc(t,r)}var o=e.memoizedState;if(o!==null){var s=o.dehydrated;if(Bo(t),a){if(t.flags&256)t.flags&=-257,t=Gc(e,t,n);else if(t.memoizedState!==null)t.child=e.child,t.flags|=128,t=null;else throw Error(i(558))}else if(Ic||Oa(e,t,n,!1),a=(n&e.childLanes)!==0,Ic||a){if(Mo.current===null){if(r=td,r!==null&&(s=Tt(r,n),s!==0&&s!==o.retryLane))throw o.retryLane=s,Pi(e,s),Nd(r,e,s),Fc;Q()}t=Gc(e,t,n)}else e=o.treeContext,da=lm(s.nextSibling),ua=t,N=!0,fa=null,pa=!1,e!==null&&la(t,e),t=Wc(t,r),t.flags|=134221824;return t}return e=Vi(e.child,{mode:r.mode,children:r.children}),e.ref=t.ref,t.child=e,e.return=t,e}function qc(e,t){var n=t.ref;if(n===null)e!==null&&e.ref!==null&&(t.flags|=4194816);else{if(typeof n!=`function`&&typeof n!=`object`)throw Error(i(284));(e===null||e.ref!==n)&&(t.flags|=4194816)}}function Jc(e,t,n,r,i){return Aa(t),n=rs(e,t,n,r,void 0,i),r=z(),e!==null&&!Ic?(ss(e,t,i),fl(e,t,i)):(N&&r&&sa(t),t.flags|=1,Lc(e,t,n,i),t.child)}function Yc(e,t,n,r,i,a){return Aa(t),t.updateQueue=null,n=as(t,r,n,i),is(e),r=z(),e!==null&&!Ic?(ss(e,t,a),fl(e,t,a)):(N&&r&&sa(t),t.flags|=1,Lc(e,t,n,a),t.child)}function Xc(e,t,n,r,i){if(Aa(t),t.stateNode===null){var a=Li,o=n.contextType;typeof o==`object`&&o&&(a=ja(o)),a=new n(r,a),t.memoizedState=a.state!==null&&a.state!==void 0?a.state:null,a.updater=Sc,t.stateNode=a,a._reactInternals=t,a=t.stateNode,a.props=r,a.state=t.memoizedState,a.refs={},xo(t),o=n.contextType,a.context=typeof o==`object`&&o?ja(o):Li,a.state=t.memoizedState,o=n.getDerivedStateFromProps,typeof o==`function`&&(xc(t,n,o,r),a.state=t.memoizedState),typeof n.getDerivedStateFromProps==`function`||typeof a.getSnapshotBeforeUpdate==`function`||typeof a.UNSAFE_componentWillMount!=`function`&&typeof a.componentWillMount!=`function`||(o=a.state,typeof a.componentWillMount==`function`&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount==`function`&&a.UNSAFE_componentWillMount(),o!==a.state&&Sc.enqueueReplaceState(a,a.state,null),ko(t,r,a,i),Oo(),a.state=t.memoizedState),typeof a.componentDidMount==`function`&&(t.flags|=4194308),r=!0}else if(e===null){a=t.stateNode;var s=t.memoizedProps,c=Tc(n,s);a.props=c;var l=a.context,u=n.contextType;o=Li,typeof u==`object`&&u&&(o=ja(u));var d=n.getDerivedStateFromProps;u=typeof d==`function`||typeof a.getSnapshotBeforeUpdate==`function`,s=t.pendingProps!==s,u||typeof a.UNSAFE_componentWillReceiveProps!=`function`&&typeof a.componentWillReceiveProps!=`function`||(s||l!==o)&&wc(t,a,r,o),bo=!1;var f=t.memoizedState;a.state=f,ko(t,r,a,i),Oo(),l=t.memoizedState,s||f!==l||bo?(typeof d==`function`&&(xc(t,n,d,r),l=t.memoizedState),(c=bo||Cc(t,n,c,r,f,l,o))?(u||typeof a.UNSAFE_componentWillMount!=`function`&&typeof a.componentWillMount!=`function`||(typeof a.componentWillMount==`function`&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount==`function`&&a.UNSAFE_componentWillMount()),typeof a.componentDidMount==`function`&&(t.flags|=4194308)):(typeof a.componentDidMount==`function`&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=l),a.props=r,a.state=l,a.context=o,r=c):(typeof a.componentDidMount==`function`&&(t.flags|=4194308),r=!1)}else{a=t.stateNode,So(e,t),o=t.memoizedProps,u=Tc(n,o),a.props=u,d=t.pendingProps,f=a.context,l=n.contextType,c=Li,typeof l==`object`&&l&&(c=ja(l)),s=n.getDerivedStateFromProps,(l=typeof s==`function`||typeof a.getSnapshotBeforeUpdate==`function`)||typeof a.UNSAFE_componentWillReceiveProps!=`function`&&typeof a.componentWillReceiveProps!=`function`||(o!==d||f!==c)&&wc(t,a,r,c),bo=!1,f=t.memoizedState,a.state=f,ko(t,r,a,i),Oo();var p=t.memoizedState;o!==d||f!==p||bo||e!==null&&e.dependencies!==null&&ka(e.dependencies)?(typeof s==`function`&&(xc(t,n,s,r),p=t.memoizedState),(u=bo||Cc(t,n,u,r,f,p,c)||e!==null&&e.dependencies!==null&&ka(e.dependencies))?(l||typeof a.UNSAFE_componentWillUpdate!=`function`&&typeof a.componentWillUpdate!=`function`||(typeof a.componentWillUpdate==`function`&&a.componentWillUpdate(r,p,c),typeof a.UNSAFE_componentWillUpdate==`function`&&a.UNSAFE_componentWillUpdate(r,p,c)),typeof a.componentDidUpdate==`function`&&(t.flags|=4),typeof a.getSnapshotBeforeUpdate==`function`&&(t.flags|=1024)):(typeof a.componentDidUpdate!=`function`||o===e.memoizedProps&&f===e.memoizedState||(t.flags|=4),typeof a.getSnapshotBeforeUpdate!=`function`||o===e.memoizedProps&&f===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=p),a.props=r,a.state=p,a.context=c,r=u):(typeof a.componentDidUpdate!=`function`||o===e.memoizedProps&&f===e.memoizedState||(t.flags|=4),typeof a.getSnapshotBeforeUpdate!=`function`||o===e.memoizedProps&&f===e.memoizedState||(t.flags|=1024),r=!1)}return a=r,qc(e,t),r=!!(t.flags&128),a||r?(a=t.stateNode,n=r&&typeof n.getDerivedStateFromError!=`function`?null:a.render(),t.flags|=1,e!==null&&r?(t.child=vo(t,e.child,null,i),t.child=vo(t,null,n,i)):Lc(e,t,n,i),t.memoizedState=a.state,e=t.child):e=fl(e,t,i),e}function Zc(e,t,n,r){return ya(),t.flags|=256,Lc(e,t,n,r),t.child}var Qc={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function $c(e){return{baseLanes:e,cachePool:eo()}}function el(e,t,n){return e=e===null?0:e.childLanes&~n,t&&(e|=cd),e}function tl(e,t,n){var r=t.pendingProps,i=!1,a=!!(t.flags&128),o;if((o=a)||(o=e!==null&&e.memoizedState===null?!1:!!(F.current&2)),o&&(i=!0,t.flags&=-129),o=!!(t.flags&32),t.flags&=-33,e===null){if(N){if(i?zo(t):Ho(),(e=da)?(e=am(e,pa),e=e!==null&&e.data!==`&`?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:na===null?null:{id:ra,overflow:ia},retryLane:536870912,hydrationErrors:null},n=Ki(e),n.return=t,t.child=n,ua=t,da=null)):e=null,e===null)throw ha(t);return t.lanes=sm(e)?32:536870912,null}return a=r.children,r=r.fallback,i?(Ho(),i=t.mode,a=rl({mode:`hidden`,children:a},i),r=Wi(r,i,n,null),a.return=t,r.return=t,a.sibling=r,t.child=a,r=t.child,r.memoizedState=$c(n),r.childLanes=el(e,o,n),t.memoizedState=Qc,Hc(null,r)):(zo(t),nl(t,a))}var s=e.memoizedState;if(s!==null){var c=s.dehydrated;if(c!==null)return al(e,t,a,o,r,c,s,n)}return i?(Ho(),i=r.fallback,a=t.mode,s=e.child,c=s.sibling,r=Vi(s,{mode:`hidden`,children:r.children}),r.subtreeFlags=s.subtreeFlags&1206910976,c===null?(i=Wi(i,a,n,null),i.flags|=2):i=Vi(c,i),i.return=t,r.return=t,r.sibling=i,t.child=r,Hc(null,r),r=t.child,i=e.child.memoizedState,i===null?i=$c(n):(a=i.cachePool,a===null?a=eo():(s=La._currentValue,a=a.parent===s?a:{parent:s,pool:s}),i={baseLanes:i.baseLanes|n,cachePool:a}),r.memoizedState=i,r.childLanes=el(e,o,n),t.memoizedState=Qc,Hc(e.child,r)):(zo(t),n=e.child,e=n.sibling,n=Vi(n,{mode:`visible`,children:r.children}),n.return=t,n.sibling=null,e!==null&&(o=t.deletions,o===null?(t.deletions=[e],t.flags|=16):o.push(e)),t.child=n,t.memoizedState=null,n)}function nl(e,t){return t=rl({mode:`visible`,children:t},e.mode),t.return=e,e.child=t}function rl(e,t){return e=zi(22,e,null,t),e.lanes=0,e}function il(e,t,n){return vo(t,e.child,null,n),e=nl(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function al(e,t,n,r,a,o,s,c){if(n)return t.flags&256?(zo(t),t.flags&=-257,il(e,t,c)):t.memoizedState===null?(Ho(),o=a.fallback,s=t.mode,a=rl({mode:`visible`,children:a.children},s),o=Wi(o,s,c,null),o.flags|=2,a.return=t,o.return=t,a.sibling=o,t.child=a,vo(t,e.child,null,c),a=t.child,a.memoizedState=$c(c),a.childLanes=el(e,r,c),t.memoizedState=Qc,Hc(null,a)):(Ho(),t.child=e.child,t.flags|=128,null);if(zo(t),sm(o)){if(r=o.nextSibling&&o.nextSibling.dataset,r)var l=r.dgst;return r=l,r!==``&&(a=Error(i(419)),a.stack=``,a.digest=r,xa({value:a,source:null,stack:null})),il(e,t,c)}if(Ic||Oa(e,t,c,!1),r=(c&e.childLanes)!==0,Ic||r){if(Mo.current!==null)return il(e,t,c);if(r=td,r!==null&&(a=Tt(r,c),a!==0&&a!==s.retryLane))throw s.retryLane=a,Pi(e,a),Nd(r,e,a),Fc;return om(o)||Q(),il(e,t,c)}return om(o)?(t.flags|=192,t.child=e.child,null):(e=s.treeContext,da=lm(o.nextSibling),ua=t,N=!0,fa=null,pa=!1,e!==null&&la(t,e),t=nl(t,a.children),t.flags|=134221824,t)}function ol(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),Ea(e.return,t,n)}function sl(e){for(var t=null;e!==null;){var n=e.alternate;n!==null&&Go(n)===null&&(t=e),e=e.sibling}return t}function cl(e,t,n,r,i,a){var o=e.memoizedState;o===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i,treeForkCount:a}:(o.isBackwards=t,o.rendering=null,o.renderingStartTime=0,o.last=r,o.tail=n,o.tailMode=i,o.treeForkCount=a)}function ll(e){var t=e.child;for(e.child=null;t!==null;){var n=t.sibling;t.sibling=e.child,e.child=t,t=n}}function ul(e,t,n){var r=t.pendingProps,i=r.revealOrder,a=r.tail;r=r.children;var o=F.current;if(t.flags&128)return I(t,o),null;var s=!!(o&2);if(s?(o=o&1|2,t.flags|=128):o&=1,I(t,o),i===`backwards`&&e!==null?(ll(e),Lc(e,t,r,n),ll(e)):Lc(e,t,r,n),r=N?$i:0,!s&&e!==null&&e.flags&128)a:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&ol(e,n,t);else if(e.tag===19)ol(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break a;for(;e.sibling===null;){if(e.return===null||e.return===t)break a;e=e.return}e.sibling.return=e.return,e=e.sibling}switch(i){case`backwards`:n=sl(t.child),n===null?(i=t.child,t.child=null):(i=n.sibling,n.sibling=null,ll(t)),cl(t,!0,i,null,a,r);break;case`unstable_legacy-backwards`:for(n=null,i=t.child,t.child=null;i!==null;){if(e=i.alternate,e!==null&&Go(e)===null){t.child=i;break}e=i.sibling,i.sibling=n,n=i,i=e}cl(t,!0,n,null,a,r);break;case`together`:cl(t,!1,null,null,void 0,r);break;case`independent`:t.memoizedState=null;break;default:n=sl(t.child),n===null?(i=t.child,t.child=null):(i=n.sibling,n.sibling=null),cl(t,!1,i,n,a,r)}return t.child}function dl(e,t,n){var r=t.pendingProps;return wa(t,t.type,r.value),Lc(e,t,r.children,n),t.child}function fl(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),Z|=t.lanes,(n&t.childLanes)===0){if(e!==null){if(Oa(e,t,n,!1),(n&t.childLanes)===0)return null}else return null}if(e!==null&&t.child!==e.child)throw Error(i(153));if(t.child!==null){for(e=t.child,n=Vi(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=Vi(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function pl(e,t){return(e.lanes&t)!==0||(e=e.dependencies,!!(e!==null&&ka(e)))}function ml(e,t,n){switch(t.tag){case 3:Pe(t,t.stateNode.containerInfo),wa(t,La,e.memoizedState.cache),ya();break;case 27:case 5:Ie(t);break;case 4:Pe(t,t.stateNode.containerInfo);break;case 10:wa(t,t.type,t.memoizedProps.value);break;case 31:if(t.memoizedState!==null)return t.flags|=128,Bo(t),null;break;case 13:var r=t.memoizedState;if(r!==null){if(r.dehydrated!==null)return zo(t),t.flags|=128,null;r=Oa(e,t,n,!1);var i=t.child.childLanes;return r||(n&i)!==0?tl(e,t,n):(zo(t),e=fl(e,t,n),e===null?null:e.sibling)}zo(t);break;case 19:if(t.flags&128)return ul(e,t,n);if(i=!!(e.flags&128),r=(n&t.childLanes)!==0,r||=(Oa(e,t,n,!1),(n&t.childLanes)!==0),i){if(r)return ul(e,t,n);t.flags|=128}if(i=t.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),I(t,F.current),r)break;return null;case 22:return t.lanes=0,Vc(e,t,n,t.pendingProps);case 24:wa(t,La,e.memoizedState.cache)}return fl(e,t,n)}function hl(e,t,n){if(e!==null){if(e.memoizedProps!==t.pendingProps)Ic=!0;else{if(!pl(e,n)&&!(t.flags&128))return Ic=!1,ml(e,t,n);Ic=!!(e.flags&131072)}}else Ic=!1,N&&t.flags&1048576&&oa(t,$i,t.index);switch(t.lanes=0,t.tag){case 16:a:{var r=t.pendingProps;if(e=so(t.elementType),t.type=e,typeof e==`function`)Bi(e)?(r=Tc(e,r),t.tag=1,t=Xc(null,t,e,r,n)):(t.tag=0,t=Jc(null,t,e,r,n));else{if(e!=null){var a=e.$$typeof;if(a===le){t.tag=11,t=Rc(null,t,e,r,n);break a}if(a===fe){t.tag=14,t=zc(null,t,e,r,n);break a}if(a===ce){t.tag=10,t.type=e,t=dl(null,t,n);break a}}throw t=Se(e)||e,Error(i(306,t,``))}}return t;case 0:return Jc(e,t,t.type,t.pendingProps,n);case 1:return r=t.type,a=Tc(r,t.pendingProps),Xc(e,t,r,a,n);case 3:a:{if(Pe(t,t.stateNode.containerInfo),e===null)throw Error(i(387));r=t.pendingProps;var o=t.memoizedState;a=o.element,So(e,t),ko(t,r,null,n);var s=t.memoizedState;if(r=s.cache,wa(t,La,r),r!==o.cache&&Da(t,[La],n,!0),Oo(),r=s.element,o.isDehydrated){if(o={element:r,isDehydrated:!1,cache:s.cache},t.updateQueue.baseState=o,t.memoizedState=o,t.flags&256){t=Zc(e,t,r,n);break a}if(r!==a){a=Yi(Error(i(424)),t),xa(a),t=Zc(e,t,r,n);break a}switch(e=t.stateNode.containerInfo,e.nodeType){case 9:e=e.body;break;default:e=e.nodeName===`HTML`?e.ownerDocument.body:e}for(da=lm(e.firstChild),ua=t,N=!0,fa=null,pa=!0,n=yo(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|134221824,n=n.sibling}else{if(ya(),r===a){t=fl(e,t,n);break a}Lc(e,t,r,n)}t=t.child}return t;case 26:return qc(e,t),e===null?(n=Nm(t.type,null,t.pendingProps,null))?t.memoizedState=n:N||(t.stateNode=fp(t.type,t.pendingProps,Me.current,t)):t.memoizedState=Nm(t.type,e.memoizedProps,t.pendingProps,e.memoizedState),null;case 27:return Ie(t),e===null&&N&&(r=t.stateNode=hm(t.type,t.pendingProps,Me.current),ua=t,pa=!0,a=da,Sp(t.type)?(um=a,da=lm(r.firstChild)):da=a),Lc(e,t,t.pendingProps.children,n),qc(e,t),e===null&&(t.flags|=4194304),t.child;case 5:return e===null&&N&&((a=r=da)&&(r=rm(r,t.type,t.pendingProps,pa),r===null?a=!1:(t.stateNode=r,ua=t,da=lm(r.firstChild),pa=!1,a=!0)),a||ha(t)),Ie(t),a=t.type,o=t.pendingProps,s=e===null?null:e.memoizedProps,r=o.children,pp(a,o)?r=null:s!==null&&pp(a,s)&&(t.flags|=32),t.memoizedState!==null&&(a=rs(e,t,os,null,null,n),sh._currentValue=a),qc(e,t),Lc(e,t,r,n),t.child;case 6:return e===null&&N&&((e=n=da)&&(n=im(n,t.pendingProps,pa),n===null?e=!1:(t.stateNode=n,ua=t,da=null,e=!0)),e||ha(t)),null;case 13:return tl(e,t,n);case 4:return Pe(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=vo(t,null,r,n):Lc(e,t,r,n),t.child;case 11:return Rc(e,t,t.type,t.pendingProps,n);case 7:return r=t.pendingProps,qc(e,t),Lc(e,t,r,n),t.child;case 8:return Lc(e,t,t.pendingProps.children,n),t.child;case 12:return Lc(e,t,t.pendingProps.children,n),t.child;case 10:return dl(e,t,n);case 9:return a=t.type._context,r=t.pendingProps.children,Aa(t),a=ja(a),r=r(a),t.flags|=1,Lc(e,t,r,n),t.child;case 14:return zc(e,t,t.type,t.pendingProps,n);case 15:return Bc(e,t,t.type,t.pendingProps,n);case 19:return ul(e,t,n);case 31:return Kc(e,t,n);case 22:return Vc(e,t,n,t.pendingProps);case 24:return Aa(t),r=ja(La),e===null?(a=Qa(),a===null&&(a=td,o=Ra(),a.pooledCache=o,o.refCount++,o!==null&&(a.pooledCacheLanes|=n),a=o),t.memoizedState={parent:r,cache:a},xo(t),wa(t,La,a)):((e.lanes&n)!==0&&(So(e,t),ko(t,null,null,n),Oo()),a=e.memoizedState,o=t.memoizedState,a.parent===r?(r=o.cache,wa(t,La,r),r!==a.cache&&Da(t,[La],n,!0)):(a={parent:r,cache:r},t.memoizedState=a,t.lanes===0&&(t.memoizedState=t.updateQueue.baseState=a),wa(t,La,r))),Lc(e,t,t.pendingProps.children,n),t.child;case 30:return t.stateNode===null&&(t.stateNode={autoName:null,paired:null,clones:null,ref:null}),r=t.pendingProps,r.name!=null&&r.name!==`auto`?t.flags|=e===null?18882560:18874368:N&&sa(t),e!==null&&e.memoizedProps.name!==r.name?t.flags|=4194816:qc(e,t),Lc(e,t,r.children,n),t.child;case 29:throw t.pendingProps}throw Error(i(156,t.tag))}function gl(e){e.flags|=4}function _l(e,t,n,r,i){var a;if((a=!!(e.mode&32))&&(a=n===null?Jm(t,r):Jm(t,r)&&(r.src!==n.src||r.srcSet!==n.srcSet)),a){if(e.flags|=16777216,(i&335544128)===i){if(e.stateNode.complete)e.flags|=8192;else if(Hd())e.flags|=8192;else throw co=io,no}}else e.flags&=-16777217}function vl(e,t){if(t.type!==`stylesheet`||t.state.loading&4)e.flags&=-16777217;else if(e.flags|=16777216,!Ym(t)){if(Hd())e.flags|=8192;else throw co=io,no}}function yl(e,t){t!==null&&(e.flags|=4),e.flags&16384&&(t=e.tag===22?536870912:yt(),e.lanes|=t,ld|=t)}function bl(e,t){if(!N)switch(e.tailMode){case`visible`:break;case`collapsed`:for(var n=e.tail,r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null;break;default:for(t=e.tail,n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null}}function xl(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&1206910976,r|=i.flags&1206910976,i.return=e,i=i.sibling;else for(i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=e,i=i.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function Sl(e,t,n){var r=t.pendingProps;switch(ca(t),t.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return xl(t),null;case 1:return xl(t),null;case 3:return n=t.stateNode,r=null,e!==null&&(r=e.memoizedState.cache),t.memoizedState.cache!==r&&(t.flags|=2048),Ta(La),Fe(),n.pendingContext&&(n.context=n.pendingContext,n.pendingContext=null),(e===null||e.child===null)&&(va(t)?gl(t):e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,ba())),xl(t),null;case 26:var a=t.type,o=t.memoizedState;return e===null?(gl(t),o===null?(xl(t),_l(t,a,null,r,n)):(xl(t),vl(t,o))):o?o===e.memoizedState?(xl(t),t.flags&=-16777217):(gl(t),xl(t),vl(t,o)):(e=e.memoizedProps,e!==r&&gl(t),xl(t),_l(t,a,e,r,n)),null;case 27:if(Le(t),n=Me.current,a=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==r&&gl(t);else{if(!r){if(t.stateNode===null)throw Error(i(166));return xl(t),t.subtreeFlags&=-33554433,null}e=Ae.current,va(t)?ga(t,e):(e=hm(a,r,n),t.stateNode=e,gl(t))}return xl(t),t.subtreeFlags&=-33554433,null;case 5:if(Le(t),a=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==r&&gl(t);else{if(!r){if(t.stateNode===null)throw Error(i(166));return xl(t),t.subtreeFlags&=-33554433,null}if(o=Ae.current,va(t))ga(t,o);else{var s=lp(Me.current);switch(o){case 1:o=s.createElementNS(`http://www.w3.org/2000/svg`,a);break;case 2:o=s.createElementNS(`http://www.w3.org/1998/Math/MathML`,a);break;default:switch(a){case`svg`:o=s.createElementNS(`http://www.w3.org/2000/svg`,a);break;case`math`:o=s.createElementNS(`http://www.w3.org/1998/Math/MathML`,a);break;case`script`:o=s.createElement(`div`),o.innerHTML=`<script><\/script>`,o=o.removeChild(o.firstChild);break;case`select`:o=typeof r.is==`string`?s.createElement(`select`,{is:r.is}):s.createElement(`select`),r.multiple?o.multiple=!0:r.size&&(o.size=r.size);break;default:o=typeof r.is==`string`?s.createElement(a,{is:r.is}):s.createElement(a)}}o[jt]=t,o[Mt]=r;a:for(s=t.child;s!==null;){if(s.tag===5||s.tag===6)o.appendChild(s.stateNode);else if(s.tag!==4&&s.tag!==27&&s.child!==null){s.child.return=s,s=s.child;continue}if(s===t)break a;for(;s.sibling===null;){if(s.return===null||s.return===t)break a;s=s.return}s.sibling.return=s.return,s=s.sibling}t.stateNode=o;a:switch(np(o,a,r),a){case`button`:case`input`:case`select`:case`textarea`:r=!!r.autoFocus;break a;case`img`:r=!0;break a;default:r=!1}r&&gl(t)}}return xl(t),t.subtreeFlags&=-33554433,_l(t,t.type,e===null?null:e.memoizedProps,t.pendingProps,n),null;case 6:if(e&&t.stateNode!=null)e.memoizedProps!==r&&gl(t);else{if(typeof r!=`string`&&t.stateNode===null)throw Error(i(166));if(e=Me.current,va(t)){if(e=t.stateNode,n=t.memoizedProps,r=null,a=ua,a!==null)switch(a.tag){case 27:case 5:r=a.memoizedProps}e[jt]=t,e=!!(e.nodeValue===n||r!==null&&!0===r.suppressHydrationWarning||$f(e.nodeValue,n)),e||ha(t,!0)}else e=lp(e).createTextNode(r),e[jt]=t,t.stateNode=e}return xl(t),null;case 31:if(n=t.memoizedState,e===null||e.memoizedState!==null){if(r=va(t),n!==null){if(e===null){if(!r)throw Error(i(318));if(e=t.memoizedState,e=e===null?null:e.dehydrated,!e)throw Error(i(557));e[jt]=t}else ya(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;xl(t),e=!1}else n=ba(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=n),e=!0;if(!e)return t.flags&256?(Uo(t),t):(Uo(t),null);if(t.flags&128)throw Error(i(558))}return xl(t),null;case 13:if(r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(a=va(t),r!==null&&r.dehydrated!==null){if(e===null){if(!a)throw Error(i(318));if(a=t.memoizedState,a=a===null?null:a.dehydrated,!a)throw Error(i(317));a[jt]=t}else ya(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;xl(t),a=!1}else a=ba(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=a),a=!0;if(!a)return t.flags&256?(Uo(t),t):(Uo(t),null)}return Uo(t),t.flags&128?(t.lanes=n,t):(n=r!==null,e=e!==null&&e.memoizedState!==null,n&&(r=t.child,a=null,r.alternate!==null&&r.alternate.memoizedState!==null&&r.alternate.memoizedState.cachePool!==null&&(a=r.alternate.memoizedState.cachePool.pool),o=null,r.memoizedState!==null&&r.memoizedState.cachePool!==null&&(o=r.memoizedState.cachePool.pool),o!==a&&(r.flags|=2048)),n!==e&&n&&(t.child.flags|=8192),yl(t,t.updateQueue),xl(t),null);case 4:return Fe(),e===null&&Uf(t.stateNode.containerInfo),t.flags|=67108864,xl(t),null;case 10:return Ta(t.type),xl(t),null;case 19:if(Wo(t),r=t.memoizedState,r===null)return xl(t),null;if(a=!!(t.flags&128),o=r.rendering,o===null){if(a)bl(r,!1);else{if(ad!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(o=Go(e),o!==null){for(t.flags|=128,bl(r,!1),e=o.updateQueue,t.updateQueue=e,yl(t,e),t.subtreeFlags=0,e=n,n=t.child;n!==null;)Hi(n,e),n=n.sibling;return I(t,F.current&1|2),N&&aa(t,r.treeForkCount),t.child}e=e.sibling}r.tail!==null&&Xe()>hd&&(t.flags|=128,a=!0,bl(r,!1),t.lanes=4194304)}}else{if(!a){if(e=Go(o),e!==null){if(t.flags|=128,a=!0,e=e.updateQueue,t.updateQueue=e,yl(t,e),bl(r,!0),r.tail===null&&r.tailMode!==`collapsed`&&r.tailMode!==`visible`&&!o.alternate&&!N)return xl(t),null}else 2*Xe()-r.renderingStartTime>hd&&n!==536870912&&(t.flags|=128,a=!0,bl(r,!1),t.lanes=4194304)}r.isBackwards?(o.sibling=t.child,t.child=o):(e=r.last,e===null?t.child=o:e.sibling=o,r.last=o)}if(r.tail!==null){e=r.tail;a:{for(n=e;n!==null;){if(n.alternate!==null){n=!1;break a}n=n.sibling}n=!0}return r.rendering=e,r.tail=e.sibling,r.renderingStartTime=Xe(),e.sibling=null,o=F.current,o=a?o&1|2:o&1,r.tailMode===`visible`||r.tailMode===`collapsed`||!n||N?I(t,o):(n=o,ke(Lo,t),ke(F,n),Ro===null&&(Ro=t)),N&&aa(t,r.treeForkCount),e}return xl(t),null;case 22:case 23:return Uo(t),Io(),r=t.memoizedState!==null,e===null?r&&(t.flags|=8192):e.memoizedState!==null!==r&&(t.flags|=8192),r?n&536870912&&!(t.flags&128)&&(xl(t),t.subtreeFlags&6&&(t.flags|=8192)):xl(t),n=t.updateQueue,n!==null&&yl(t,n.retryQueue),n=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(n=e.memoizedState.cachePool.pool),r=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(r=t.memoizedState.cachePool.pool),r!==n&&(t.flags|=2048),e!==null&&Oe(Za),null;case 24:return n=null,e!==null&&(n=e.memoizedState.cache),t.memoizedState.cache!==n&&(t.flags|=2048),Ta(La),xl(t),null;case 25:return null;case 30:return t.flags|=33554432,xl(t),null}throw Error(i(156,t.tag))}function Cl(e,t){switch(ca(t),t.tag){case 1:return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return Ta(La),Fe(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 26:case 27:case 5:return Le(t),null;case 31:if(t.memoizedState!==null){if(Uo(t),t.alternate===null)throw Error(i(340));ya()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 13:if(Uo(t),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(i(340));ya()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return Wo(t),e=t.flags,e&65536?(t.flags=e&-65537|128,e=t.memoizedState,e!==null&&(e.rendering=null,e.tail=null),t.flags|=4,t):null;case 4:return Fe(),null;case 10:return Ta(t.type),null;case 22:case 23:return Uo(t),Io(),e!==null&&Oe(Za),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 24:return Ta(La),null;case 25:return null;default:return null}}function wl(e,t){switch(ca(t),t.tag){case 3:Ta(La),Fe();break;case 26:case 27:case 5:Le(t);break;case 4:Fe();break;case 31:t.memoizedState!==null&&Uo(t);break;case 13:Uo(t);break;case 19:Wo(t);break;case 10:Ta(t.type);break;case 22:case 23:Uo(t),Io(),e!==null&&Oe(Za);break;case 24:Ta(La)}}function Tl(e,t){try{var n=t.updateQueue,r=n===null?null:n.lastEffect;if(r!==null){var i=r.next;n=i;do{if((n.tag&e)===e){r=void 0;var a=n.create,o=n.inst;r=a(),o.destroy=r}n=n.next}while(n!==i)}}catch(e){ff(t,t.return,e)}}function El(e,t,n){try{var r=t.updateQueue,i=r===null?null:r.lastEffect;if(i!==null){var a=i.next;r=a;do{if((r.tag&e)===e){var o=r.inst,s=o.destroy;if(s!==void 0){o.destroy=void 0,i=t;var c=n,l=s;try{l()}catch(e){ff(i,c,e)}}}r=r.next}while(r!==a)}}catch(e){ff(t,t.return,e)}}function Dl(e){var t=e.updateQueue;if(t!==null){var n=e.stateNode;try{jo(t,n)}catch(t){ff(e,e.return,t)}}}function Ol(e,t,n){n.props=Tc(e.type,e.memoizedProps),n.state=e.memoizedState;try{n.componentWillUnmount()}catch(n){ff(e,t,n)}}function kl(e,t){try{var n=e.ref;if(n!==null){switch(e.tag){case 26:case 27:case 5:var r=e.stateNode;break;case 30:var i=e.stateNode,a=wi(e.memoizedProps,i);(i.ref===null||i.ref.name!==a)&&(i.ref=Pp(a)),r=i.ref;break;case 7:if(e.stateNode===null){var o=new Fp(e);h(e.child,!1,Qp,o,void 0,void 0),e.stateNode=o}r=e.stateNode;break;default:r=e.stateNode}typeof n==`function`?e.refCleanup=n(r):n.current=r}}catch(n){ff(e,t,n)}}function Al(e,t){var n=e.ref,r=e.refCleanup;if(n!==null){if(typeof r==`function`)try{r()}catch(n){ff(e,t,n)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof n==`function`)try{n(null)}catch(n){ff(e,t,n)}else n.current=null}}function jl(e,t){if((e.tag===5||e.tag===27||e.tag===6)&&e.alternate===null&&t!==null)for(var n=0;n<t.length;n++)em(e.stateNode,t[n])}function Ml(e){for(var t=e.return;t!==null&&(Fl(t)&&em(e.stateNode,t.stateNode),!Pl(t));)t=t.return}function Nl(e){for(var t=e.return;t!==null&&(Fl(t)&&tm(e.stateNode,t.stateNode),!Pl(t));)t=t.return}function Pl(e){return e.tag===5||e.tag===3||e.tag===27}function Fl(e){return e&&e.tag===7&&e.stateNode!==null}function Il(e){var t=e.type,n=e.memoizedProps,r=e.stateNode;try{a:switch(t){case`button`:case`input`:case`select`:case`textarea`:n.autoFocus&&r.focus();break a;case`img`:n.src?r.src=n.src:n.srcSet&&(r.srcset=n.srcSet)}}catch(t){ff(e,e.return,t)}}function Ll(e,t,n){try{var r=e.stateNode;ip(r,e.type,n,t),r[Mt]=t}catch(t){ff(e,e.return,t)}}function Rl(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&Sp(e.type)||e.tag===4}function zl(e){a:for(;;){for(;e.sibling===null;){if(e.return===null||Rl(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&Sp(e.type)||e.flags&2||e.child===null||e.tag===4)continue a;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Bl(e,t,n,r){var i=e.tag;if(i===5||i===6)i=e.stateNode,t?(n.nodeType===9?n.body:n.nodeName===`HTML`?n.ownerDocument.body:n).insertBefore(i,t):(t=n.nodeType===9?n.body:n.nodeName===`HTML`?n.ownerDocument.body:n,t.appendChild(i),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=On)),jl(e,r),tn=!0;else if(i!==4&&(i===27&&(jl(e,r),r=null,Sp(e.type)&&(n=e.stateNode,t=null)),e=e.child,e!==null))for(Bl(e,t,n,r),e=e.sibling;e!==null;)Bl(e,t,n,r),e=e.sibling}function Vl(e,t,n,r){var i=e.tag;if(i===5||i===6)i=e.stateNode,t?n.insertBefore(i,t):n.appendChild(i),jl(e,r),tn=!0;else if(i!==4&&(i===27&&(jl(e,r),r=null,Sp(e.type)&&(n=e.stateNode)),e=e.child,e!==null))for(Vl(e,t,n,r),e=e.sibling;e!==null;)Vl(e,t,n,r),e=e.sibling}function Hl(e){var t=e.stateNode,n=e.memoizedProps;try{for(var r=e.type,i=t.attributes;i.length;)t.removeAttributeNode(i[0]);np(t,r,n),t[jt]=e,t[Mt]=n}catch(t){ff(e,e.return,t)}}var Ul=!1,Wl=null;function Gl(e){(e.tag===30||e.subtreeFlags&33554432)&&(Ul=!0)}var Kl=null;function ql(){var e=Kl;return Kl=null,e}var Jl=0;function Yl(e,t,n,r,i){return Jl=0,Xl(e.child,t,n,r,i)}function Xl(e,t,n,r,i){for(var a=!1;e!==null;){if(e.tag===5){var o=e.stateNode;if(r!==null){var s=Op(o);r.push(s),s.view&&(a=!0)}else a||Op(o).view&&(a=!0);Ul=!0,Tp(o,Jl===0?t:t+`_`+Jl,n),Jl++}else(e.tag!==22||e.memoizedState===null)&&(e.tag===30&&i||Xl(e.child,t,n,r,i)&&(a=!0));e=e.sibling}return a}function Zl(e,t){for(;e!==null;)e.tag===5?Ep(e.stateNode,e.memoizedProps):(e.tag!==22||e.memoizedState===null)&&(e.tag===30&&t||Zl(e.child,t)),e=e.sibling}function Ql(e){if(e.subtreeFlags&18874368)for(e=e.child;e!==null;){if((e.tag!==22||e.memoizedState===null)&&(Ql(e),e.tag===30&&e.flags&18874368&&e.stateNode.paired)){var t=e.memoizedProps;if(t.name==null||t.name===`auto`)throw Error(i(544));var n=t.name;t=Ei(t.default,t.share),t!==`none`&&(Yl(e,n,t,null,!1)||Zl(e.child,!1))}e=e.sibling}}function $l(e,t){if(e.tag===30){var n=e.stateNode,r=e.memoizedProps,i=wi(r,n),a=Ei(r.default,n.paired?r.share:r.enter);a===`none`?Ql(e):Yl(e,i,a,null,!1)?(Ql(e),n.paired||t||Md(e,r.onEnter)):Zl(e.child,!1)}else if(e.subtreeFlags&33554432)for(e=e.child;e!==null;)$l(e,t),e=e.sibling;else Ql(e)}function eu(e){if(Wl!==null&&Wl.size!==0){var t=Wl;if(e.subtreeFlags&18874368)for(e=e.child;e!==null;){if(e.tag!==22||e.memoizedState===null){if(e.tag===30&&e.flags&18874368){var n=e.memoizedProps,r=n.name;if(r!=null&&r!==`auto`){var i=t.get(r);if(i!==void 0){var a=Ei(n.default,n.share);if(a!==`none`&&(Yl(e,r,a,null,!1)?(a=e.stateNode,i.paired=a,a.paired=i,Md(e,n.onShare)):Zl(e.child,!1)),t.delete(r),t.size===0)break}}}eu(e)}e=e.sibling}}}function tu(e){if(e.tag===30){var t=e.memoizedProps,n=wi(t,e.stateNode),r=Wl===null?void 0:Wl.get(n),i=Ei(t.default,r===void 0?t.exit:t.share);i!==`none`&&(Yl(e,n,i,null,!1)?r===void 0?Md(e,t.onExit):(i=e.stateNode,r.paired=i,i.paired=r,Wl.delete(n),Md(e,t.onShare)):Zl(e.child,!1)),Wl!==null&&eu(e)}else if(e.subtreeFlags&33554432)for(e=e.child;e!==null;)tu(e),e=e.sibling;else Wl!==null&&eu(e)}function nu(e){for(e=e.child;e!==null;){if(e.tag===30){var t=e.memoizedProps,n=wi(t,e.stateNode);t=Ei(t.default,t.update),e.flags&=-5,t!==`none`&&Yl(e,n,t,e.memoizedState=[],!1)}else e.subtreeFlags&33554432&&nu(e);e=e.sibling}}function V(e){if(e.subtreeFlags&18874368)for(e=e.child;e!==null;){if(e.tag!==22||e.memoizedState===null){if(e.tag===30&&e.flags&18874368){var t=e.stateNode;t.paired!==null&&(t.paired=null,Zl(e.child,!1))}V(e)}e=e.sibling}}function ru(e){if(e.tag===30)e.stateNode.paired=null,Zl(e.child,!1),V(e);else if(e.subtreeFlags&33554432)for(e=e.child;e!==null;)ru(e),e=e.sibling;else V(e)}function iu(e){for(e=e.child;e!==null;)e.tag===30?Zl(e.child,!1):e.subtreeFlags&33554432&&iu(e),e=e.sibling}function au(e,t,n,r,i,a,o){for(var s=!1;t!==null;){if(t.tag===5){var c=t.stateNode;if(a!==null&&Jl<a.length){var l=a[Jl],u=Op(c);(l.view||u.view)&&(s=!0);var d;if(d=!(e.flags&4)){if(u.clip)d=!0;else{d=l.rect;var f=u.rect;d=d.y!==f.y||d.x!==f.x||d.height!==f.height||d.width!==f.width}}d&&(e.flags|=4),u.abs?u=!l.abs:(l=l.rect,u=u.rect,u=l.height!==u.height||l.width!==u.width),u&&(e.flags|=32)}else e.flags|=32;e.flags&4&&Tp(c,Jl===0?n:n+`_`+Jl,i),s&&e.flags&4||(Kl===null&&(Kl=[]),Kl.push(c,Jl===0?r:r+`_`+Jl,t.memoizedProps)),Jl++}else(t.tag!==22||t.memoizedState===null)&&(t.tag===30&&o?e.flags|=t.flags&32:au(e,t.child,n,r,i,a,o)&&(s=!0));t=t.sibling}return s}function ou(e,t){for(e=e.child;e!==null;){if(e.tag===30){var n=e.memoizedProps,r=e.stateNode,i=wi(n,r),a=Ei(n.default,n.update);if(t){r=r.clones;var o=r===null?null:r.map(kp)}else o=e.memoizedState,e.memoizedState=null;r=e;var s=e.child;Jl=0,i=au(r,s,i,i,a,o,!1),e.flags&4&&i&&(t||Md(e,n.onUpdate))}else e.subtreeFlags&33554432&&ou(e,t);e=e.sibling}}var su=!1,cu=!1,lu=!1,uu=!1,du=typeof WeakSet==`function`?WeakSet:Set,fu=null,pu=!1,mu=!1,hu=!1,gu=!1;function _u(e,t,n){if(e=e.containerInfo,sp=gh,e=ei(e),ti(e)){if(`selectionStart`in e)var r={start:e.selectionStart,end:e.selectionEnd};else a:{r=(r=e.ownerDocument)&&r.defaultView||window;var i=r.getSelection&&r.getSelection();if(i&&i.rangeCount!==0){r=i.anchorNode;var a=i.anchorOffset,o=i.focusNode;i=i.focusOffset;try{r.nodeType,o.nodeType}catch{r=null;break a}var s=0,c=-1,l=-1,u=0,d=0,f=e,p=null;b:for(;;){for(var m;f!==r||a!==0&&f.nodeType!==3||(c=s+a),f!==o||i!==0&&f.nodeType!==3||(l=s+i),f.nodeType===3&&(s+=f.nodeValue.length),(m=f.firstChild)!==null;)p=f,f=m;for(;;){if(f===e)break b;if(p===r&&++u===a&&(c=s),p===o&&++d===i&&(l=s),(m=f.nextSibling)!==null)break;f=p,p=f.parentNode}f=m}r=c===-1||l===-1?null:{start:c,end:l}}else r=null}r||={start:0,end:0}}else r=null;for(cp={focusedElem:e,selectionRange:r},gh=!1,n=(n&335544064)===n,fu=t,t=n?9270:1024;fu!==null;){if(e=fu,n&&(r=e.deletions,r!==null))for(a=0;a<r.length;a++)n&&tu(r[a]);if(e.alternate===null&&e.flags&2)n&&Gl(e),vu(n);else{if(e.tag===22){if(r=e.alternate,e.memoizedState!==null){r!==null&&r.memoizedState===null&&n&&tu(r),vu(n);continue}if(r!==null&&r.memoizedState!==null){n&&Gl(e),vu(n);continue}}r=e.child,(e.subtreeFlags&t)!==0&&r!==null?(r.return=e,fu=r):(n&&nu(e),vu(n))}}Wl=null}function vu(e){for(;fu!==null;){var t=fu,n=e,r=t.alternate,a=t.flags;switch(t.tag){case 0:case 11:case 15:break;case 1:if(a&1024&&r!==null){n=void 0,a=r.memoizedProps,r=r.memoizedState;var o=t.stateNode;try{var s=Tc(t.type,a);n=o.getSnapshotBeforeUpdate(s,r),o.__reactInternalSnapshotBeforeUpdate=n}catch(e){ff(t,t.return,e)}}break;case 3:if(a&1024){if(r=t.stateNode.containerInfo,n=r.nodeType,n===9)nm(r);else if(n===1)switch(r.nodeName){case`HEAD`:case`HTML`:case`BODY`:nm(r);break;default:r.textContent=``}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;case 30:n&&r!==null&&(n=wi(r.memoizedProps,r.stateNode),a=t.memoizedProps,a=Ei(a.default,a.update),a!==`none`&&Yl(r,n,a,r.memoizedState=[],!0));break;default:if(a&1024)throw Error(i(163))}if(r=t.sibling,r!==null){r.return=t.return,fu=r;break}fu=t.return}}function yu(e,t,n){var r=n.flags;switch(n.tag){case 0:case 11:case 15:zu(e,n),r&4&&Tl(5,n);break;case 1:if(zu(e,n),r&4){if(e=n.stateNode,t===null)try{e.componentDidMount()}catch(e){ff(n,n.return,e)}else{var i=Tc(n.type,t.memoizedProps);t=t.memoizedState;try{e.componentDidUpdate(i,t,e.__reactInternalSnapshotBeforeUpdate)}catch(e){ff(n,n.return,e)}}}r&64&&Dl(n),r&512&&kl(n,n.return);break;case 3:if(zu(e,n),r&64&&(e=n.updateQueue,e!==null)){if(t=null,n.child!==null)switch(n.child.tag){case 27:case 5:t=n.child.stateNode;break;case 1:t=n.child.stateNode}try{jo(e,t)}catch(e){ff(n,n.return,e)}}break;case 27:t===null&&r&4&&Hl(n);case 26:case 5:zu(e,n),t===null&&r&4&&Il(n),r&512&&kl(n,n.return);break;case 12:zu(e,n);break;case 31:zu(e,n),r&4&&Ou(e,n);break;case 13:zu(e,n),r&4&&ku(e,n),r&64&&(e=n.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(n=gf.bind(null,n),cm(e,n))));break;case 22:if(r=n.memoizedState!==null||su,!r){var a=t!==null&&t.memoizedState!==null||cu;t=su,i=cu,su=r,(cu=a)&&!i?(r=2,n.subtreeFlags&8772&&(r|=1),Vu(e,n,r)):zu(e,n),su=t,cu=i}break;case 30:zu(e,n),r&512&&kl(n,n.return);break;case 7:r&512&&kl(n,n.return);default:zu(e,n)}}function bu(e,t){for(e=e.child;e!==null;)xu(e,t),e=e.sibling}function xu(e,t){switch(e.tag){case 5:case 26:try{var n=e.stateNode;if(t){var r=n.style;typeof r.setProperty==`function`?r.setProperty(`display`,`none`,`important`):r.display=`none`}else{var i=e.stateNode,a=e.memoizedProps.style,o=a!=null&&a.hasOwnProperty(`display`)?a.display:null;i.style.display=o==null||typeof o==`boolean`?``:(``+o).trim()}}catch(t){ff(e,e.return,t)}Su(e,t);break;case 6:try{e.stateNode.nodeValue=t?``:e.memoizedProps,tn=!0}catch(t){ff(e,e.return,t)}break;case 18:try{var s=e.stateNode;t?wp(s,!0):wp(e.stateNode,!1)}catch(t){ff(e,e.return,t)}break;case 22:case 23:e.memoizedState===null&&bu(e,t);break;default:bu(e,t)}}function Su(e,t){if(e.subtreeFlags&67108864)for(e=e.child;e!==null;){a:{var n=e,r=t;switch(n.tag){case 4:xu(n,r);break a;case 22:n.memoizedState===null&&Su(n,r);break a;default:Su(n,r)}}e=e.sibling}}function Cu(e){var t=e.alternate;t!==null&&(e.alternate=null,Cu(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&Bt(t)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var wu=null,Tu=!1;function Eu(e,t,n){for(n=n.child;n!==null;)Du(e,t,n),n=n.sibling}function Du(e,t,n){if(ot&&typeof ot.onCommitFiberUnmount==`function`)try{ot.onCommitFiberUnmount(at,n)}catch{}switch(n.tag){case 26:cu||Al(n,t),Eu(e,t,n),n.memoizedState?n.memoizedState.count--:n.stateNode&&!cu&&(n=n.stateNode,n.parentNode.removeChild(n));break;case 27:cu||Al(n,t),Nl(n);var r=wu,i=Tu;Sp(n.type)&&(wu=n.stateNode,Tu=!1),Eu(e,t,n),gm(n.stateNode,n.type,n.memoizedProps),wu=r,Tu=i;break;case 5:cu||Al(n,t),Nl(n);case 6:if(n.tag===6&&Nl(n),r=wu,i=Tu,wu=null,Eu(e,t,n),wu=r,Tu=i,wu!==null){if(Tu)try{(wu.nodeType===9?wu.body:wu.nodeName===`HTML`?wu.ownerDocument.body:wu).removeChild(n.stateNode),tn=!0}catch(e){ff(n,t,e)}else try{wu.removeChild(n.stateNode),tn=!0}catch(e){ff(n,t,e)}}break;case 18:wu!==null&&(Tu?(e=wu,Cp(e.nodeType===9?e.body:e.nodeName===`HTML`?e.ownerDocument.body:e,n.stateNode),Hh(e)):Cp(wu,n.stateNode));break;case 4:r=wu,i=Tu,wu=n.stateNode.containerInfo,Tu=!0,Eu(e,t,n),wu=r,Tu=i;break;case 0:case 11:case 14:case 15:El(2,n,t),cu||El(4,n,t),Eu(e,t,n);break;case 1:cu||(Al(n,t),r=n.stateNode,typeof r.componentWillUnmount==`function`&&Ol(n,t,r)),Eu(e,t,n);break;case 21:Eu(e,t,n);break;case 22:cu=(r=cu)||n.memoizedState!==null,Eu(e,t,n),cu=r;break;case 30:Al(n,t),Eu(e,t,n);break;case 7:cu||Al(n,t),Eu(e,t,n);break;default:Eu(e,t,n)}}function Ou(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null))){e=e.dehydrated;try{Hh(e)}catch(e){ff(t,t.return,e)}}}function ku(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{Hh(e)}catch(e){ff(t,t.return,e)}}function Au(e){switch(e.tag){case 31:case 13:case 19:var t=e.stateNode;return t===null&&(t=e.stateNode=new du),t;case 22:return e=e.stateNode,t=e._retryCache,t===null&&(t=e._retryCache=new du),t;default:throw Error(i(435,e.tag))}}function ju(e,t){var n=Au(e);t.forEach(function(t){if(!n.has(t)){n.add(t);var r=_f.bind(null,e,t);t.then(r,r)}})}function Mu(e,t,n){var r=t.deletions;if(r!==null)for(var a=0;a<r.length;a++){var o=r[a],s=e,c=t,l=c;a:for(;l!==null;){switch(l.tag){case 27:if(Sp(l.type)){wu=l.stateNode,Tu=!1;break a}break;case 5:wu=l.stateNode,Tu=!1;break a;case 3:case 4:wu=l.stateNode.containerInfo,Tu=!0;break a}l=l.return}if(wu===null)throw Error(i(160));Du(s,c,o),wu=null,Tu=!1,s=o.alternate,s!==null&&(s.return=null),o.return=null}if(t.subtreeFlags&13886)for(t=t.child;t!==null;)Pu(t,e,n),t=t.sibling}var Nu=null;function Pu(e,t,n){var r=e.alternate,a=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(a&4&&(r=e.updateQueue,r=r===null?null:r.events,r!==null))for(var o=0;o<r.length;o++){var s=r[o];s.ref.impl=s.nextImpl}Mu(t,e,n),Fu(e),a&4&&(El(3,e,e.return),Tl(3,e),El(5,e,e.return));break;case 1:Mu(t,e,n),Fu(e),a&512&&(cu||r===null||Al(r,r.return)),a&64&&su&&(e=e.updateQueue,e!==null&&(t=e.callbacks,t!==null&&(n=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=n===null?t:n.concat(t))));break;case 26:if(o=Nu,Mu(t,e,n),Fu(e),a&512&&(cu||r===null||Al(r,r.return)),a&4){if(a=r===null?null:r.memoizedState,n=e.memoizedState,r===null){if(n===null){if(e.stateNode===null){if(su)e.stateNode=fp(e.type,e.memoizedProps,t.containerInfo,e);else{a:{t=e.type,n=e.memoizedProps,a=o.ownerDocument||o;b:switch(t){case`title`:r=a.getElementsByTagName(`title`)[0],(!r||r[Rt]||r[jt]||r.namespaceURI===`http://www.w3.org/2000/svg`||r.hasAttribute(`itemprop`))&&(r=a.createElement(t),a.head.insertBefore(r,a.querySelector(`head > title`))),np(r,t,n),r[jt]=e,Gt(r),t=r;break a;case`link`:if(o=Gm(`link`,`href`,a).get(t+(n.href||``))){for(s=0;s<o.length;s++)if(r=o[s],r.getAttribute(`href`)===(n.href==null||n.href===``?null:n.href)&&r.getAttribute(`rel`)===(n.rel==null?null:n.rel)&&r.getAttribute(`title`)===(n.title==null?null:n.title)&&r.getAttribute(`crossorigin`)===(n.crossOrigin==null?null:n.crossOrigin)){o.splice(s,1);break b}}r=a.createElement(t),np(r,t,n),a.head.appendChild(r);break;case`meta`:if(o=Gm(`meta`,`content`,a).get(t+(n.content||``))){for(s=0;s<o.length;s++)if(r=o[s],r.getAttribute(`content`)===(n.content==null?null:``+n.content)&&r.getAttribute(`name`)===(n.name==null?null:n.name)&&r.getAttribute(`property`)===(n.property==null?null:n.property)&&r.getAttribute(`http-equiv`)===(n.httpEquiv==null?null:n.httpEquiv)&&r.getAttribute(`charset`)===(n.charSet==null?null:n.charSet)){o.splice(s,1);break b}}r=a.createElement(t),np(r,t,n),a.head.appendChild(r);break;default:throw Error(i(468,t))}r[jt]=e,Gt(r),t=r}e.stateNode=t}}else su||Km(o,e.type,e.stateNode)}else e.stateNode=Bm(o,n,e.memoizedProps)}else a===n?n===null&&e.stateNode!==null&&Ll(e,e.memoizedProps,r.memoizedProps):(a===null?(t=r.stateNode,t===null||cu||t.parentNode.removeChild(t)):a.count--,n===null?su||Km(o,e.type,e.stateNode):Bm(o,n,e.memoizedProps))}break;case 27:Mu(t,e,n),Fu(e),a&512&&(cu||r===null||Al(r,r.return)),r!==null&&a&4&&Ll(e,e.memoizedProps,r.memoizedProps);break;case 5:if(o=lu,lu=!1,Mu(t,e,n),lu=o,Fu(e),a&512&&(cu||r===null||Al(r,r.return)),e.flags&32){t=e.stateNode;try{bn(t,``),tn=!0}catch(t){ff(e,e.return,t)}}a&4&&e.stateNode!=null&&(t=e.memoizedProps,Ll(e,t,r===null?t:r.memoizedProps)),a&1024&&(uu=!0);break;case 6:if(Mu(t,e,n),Fu(e),a&4){if(e.stateNode===null)throw Error(i(162));t=e.memoizedProps,n=e.stateNode;try{n.nodeValue=t,tn=!0}catch(t){ff(e,e.return,t)}}break;case 3:if(tn=!1,Wm=null,o=Nu,Nu=bm(t.containerInfo),Mu(t,e,n),Nu=o,Fu(e),a&4&&r!==null&&r.memoizedState.isDehydrated)try{Hh(t.containerInfo)}catch(t){ff(e,e.return,t)}uu&&(uu=!1,Iu(e)),tn=!1;break;case 4:a=lu,lu=su,r=nn(),o=Nu,Nu=bm(e.stateNode.containerInfo),Mu(t,e,n),Fu(e),Nu=o,tn&&mu&&(hu=!0),tn=r,lu=a;break;case 12:Mu(t,e,n),Fu(e);break;case 31:Mu(t,e,n),Fu(e),a&4&&(t=e.updateQueue,t!==null&&(e.updateQueue=null,ju(e,t)));break;case 13:Mu(t,e,n),Fu(e),e.child.flags&8192&&e.memoizedState!==null!=(r!==null&&r.memoizedState!==null)&&(pd=Xe()),a&4&&(t=e.updateQueue,t!==null&&(e.updateQueue=null,ju(e,t)));break;case 22:o=e.memoizedState!==null,s=r!==null&&r.memoizedState!==null;var c=su,l=cu,u=lu;su=c||o,lu=u||o,cu=l||s,Mu(t,e,n),cu=l,lu=u,su=c,Fu(e),a&8192&&(t=e.stateNode,t._visibility=o?t._visibility&-2:t._visibility|1,!o||r===null||s||su||cu||(t=s||cu,n=su,r=cu,su=o||su,cu=t,Bu(e,2),su=n,cu=r),!o&&lu||bu(e,o)),a&4&&(t=e.updateQueue,t!==null&&(n=t.retryQueue,n!==null&&(t.retryQueue=null,ju(e,n))));break;case 19:Mu(t,e,n),Fu(e),a&4&&(t=e.updateQueue,t!==null&&(e.updateQueue=null,ju(e,t)));break;case 30:a&512&&(cu||r===null||Al(r,r.return)),a=nn(),o=mu,s=(n&335544064)===n,c=e.memoizedProps,mu=s&&Ei(c.default,c.update)!==`none`,Mu(t,e,n),Fu(e),s&&r!==null&&tn&&(e.flags|=4),mu=o,tn=a;break;case 21:break;case 7:a&512&&(cu||r===null||Al(r,r.return)),r&&r.stateNode!==null&&(r.stateNode._fragmentFiber=e);default:Mu(t,e,n),Fu(e)}}function Fu(e){var t=e.flags;if(t&2){try{for(var n,r=e.return;r!==null;){if(Rl(r)){n=r;break}r=r.return}r=null;for(var a=e.return;a!==null;){if(Fl(a)){var o=a.stateNode;r===null?r=[o]:r.push(o)}if(Pl(a))break;a=a.return}var s=r;if(n==null)throw Error(i(160));switch(n.tag){case 27:var c=n.stateNode;Vl(e,zl(e),c,s);break;case 5:var l=n.stateNode;n.flags&32&&(bn(l,``),n.flags&=-33),Vl(e,zl(e),l,s);break;case 3:case 4:var u=n.stateNode.containerInfo;Bl(e,zl(e),u,s);break;default:throw Error(i(161))}}catch(t){ff(e,e.return,t)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function Iu(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var t=e;Iu(t),t.tag===5&&t.flags&1024&&(t=t.stateNode,gh=!0,t.reset(),gh=!1),e=e.sibling}}function Lu(e,t){if(t.subtreeFlags&9270)for(t=t.child;t!==null;)Ru(t,e),t=t.sibling;else ou(t,!1)}function Ru(e,t){var n=e.alternate;if(n===null)$l(e,!1);else switch(e.tag){case 3:if(gu=pu=!1,ql(),Lu(t,e),!pu&&!hu){if(e=Kl,e!==null)for(var r=0;r<e.length;r+=3){n=e[r];var i=e[r+1];Ep(n,e[r+2]),n=n.ownerDocument.documentElement,n!==null&&n.animate({opacity:[0,0],pointerEvents:[`none`,`none`]},{duration:0,fill:`forwards`,pseudoElement:`::view-transition-group(`+i+`)`})}e=t.containerInfo,e=e.nodeType===9?e.documentElement:e.ownerDocument.documentElement,e!==null&&e.style.viewTransitionName===``&&(e.style.viewTransitionName=`none`,e.animate({opacity:[0,0],pointerEvents:[`none`,`none`]},{duration:0,fill:`forwards`,pseudoElement:`::view-transition-group(root)`}),e.animate({width:[0,0],height:[0,0]},{duration:0,fill:`forwards`,pseudoElement:`::view-transition`})),gu=!0}Kl=null;break;case 5:Lu(t,e);break;case 4:r=pu,pu=!1,Lu(t,e),pu&&(hu=!0),pu=r;break;case 22:e.memoizedState===null&&(n.memoizedState===null?Lu(t,e):$l(e,!1));break;case 30:r=pu,i=ql(),pu=!1,Lu(t,e),pu&&(e.flags|=4);var a=e.memoizedProps,o=e.stateNode;t=wi(a,o),o=wi(n.memoizedProps,o);var s=Ei(a.default,a.update);s===`none`?t=!1:(a=n.memoizedState,n.memoizedState=null,n=e.child,Jl=0,t=au(e,n,t,o,s,a,!0),Jl!==(a===null?0:a.length)&&(e.flags|=32)),e.flags&4&&t?(Md(e,e.memoizedProps.onUpdate),Kl=i):i!==null&&(i.push.apply(i,Kl),Kl=i),pu=e.flags&32?!0:r;break;default:Lu(t,e)}}function zu(e,t){if(t.subtreeFlags&8772)for(t=t.child;t!==null;)yu(e,t.alternate,t),t=t.sibling}function Bu(e,t){for(e=e.child;e!==null;){var n=e,r=t;switch(n.tag){case 0:case 11:case 14:case 15:El(4,n,n.return),Bu(n,r);break;case 1:Al(n,n.return);var i=n.stateNode;typeof i.componentWillUnmount==`function`&&Ol(n,n.return,i),Bu(n,r);break;case 27:r&2&&gm(n.stateNode,n.type,n.memoizedProps);case 5:Al(n,n.return),n.tag!==5&&n.tag!==27||Nl(n),Bu(n,r);break;case 6:Nl(n);break;case 26:Al(n,n.return),i=n.stateNode,n.memoizedState!==null||i===null||cu||i.parentNode.removeChild(i),Bu(n,r);break;case 22:n.memoizedState===null&&Bu(n,r);break;case 30:Al(n,n.return),Bu(n,r);break;case 7:Al(n,n.return);default:Bu(n,r)}e=e.sibling}}function Vu(e,t,n){for(n=t.subtreeFlags&8772?n:n&-2,t=t.child;t!==null;){var r=t.alternate,i=e,a=t,o=a.flags,s=!!(n&1);switch(a.tag){case 0:case 11:case 15:Vu(i,a,n),Tl(4,a);break;case 1:if(Vu(i,a,n),r=a,i=r.stateNode,typeof i.componentDidMount==`function`)try{i.componentDidMount()}catch(e){ff(r,r.return,e)}if(r=a,i=r.updateQueue,i!==null){var c=r.stateNode;try{var l=i.shared.hiddenCallbacks;if(l!==null)for(i.shared.hiddenCallbacks=null,i=0;i<l.length;i++)Ao(l[i],c)}catch(e){ff(r,r.return,e)}}s&&o&64&&Dl(a),kl(a,a.return);break;case 27:n&2&&Hl(a);case 5:a.tag!==5&&a.tag!==27||Ml(a),Vu(i,a,n),s&&r===null&&o&4&&Il(a),kl(a,a.return);break;case 6:Ml(a);break;case 26:c=a.stateNode,a.memoizedState!==null||c===null||su||Km(bm(c.ownerDocument),a.type,c),Vu(i,a,n),s&&r===null&&o&4&&Il(a),kl(a,a.return);break;case 12:Vu(i,a,n);break;case 31:Vu(i,a,n),s&&o&4&&Ou(i,a);break;case 13:Vu(i,a,n),s&&o&4&&ku(i,a);break;case 22:a.memoizedState===null&&Vu(i,a,n),kl(a,a.return);break;case 30:Vu(i,a,n),kl(a,a.return);break;case 7:kl(a,a.return);default:Vu(i,a,n)}t=t.sibling}}function H(e,t){var n=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(n=e.memoizedState.cachePool.pool),e=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(e=t.memoizedState.cachePool.pool),e!==n&&(e!=null&&e.refCount++,n!=null&&za(n))}function Hu(e,t){e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&za(e))}function Uu(e,t,n,r){var i=(n&335544064)===n;if(t.subtreeFlags&(i?10262:10256))for(t=t.child;t!==null;)Wu(e,t,n,r),t=t.sibling;else i&&iu(t)}function Wu(e,t,n,r){var i=(n&335544064)===n;i&&t.alternate===null&&t.return!==null&&t.return.alternate!==null&&ru(t);var a=t.flags;switch(t.tag){case 0:case 11:case 15:Uu(e,t,n,r),a&2048&&Tl(9,t);break;case 1:Uu(e,t,n,r);break;case 3:Uu(e,t,n,r),i&&gu&&(e=e.containerInfo,e=e.nodeType===9?e.body:e.nodeName===`HTML`?e.ownerDocument.body:e,e.style.viewTransitionName===`root`&&(e.style.viewTransitionName=``),e=e.ownerDocument.documentElement,e!==null&&e.style.viewTransitionName===`none`&&(e.style.viewTransitionName=``)),a&2048&&(a=null,t.alternate!==null&&(a=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==a&&(t.refCount++,a!=null&&za(a)));break;case 12:if(a&2048){Uu(e,t,n,r),a=t.stateNode;try{var o=t.memoizedProps,s=o.id,c=o.onPostCommit;typeof c==`function`&&c(s,t.alternate===null?`mount`:`update`,a.passiveEffectDuration,-0)}catch(e){ff(t,t.return,e)}}else Uu(e,t,n,r);break;case 31:Uu(e,t,n,r);break;case 13:Uu(e,t,n,r);break;case 23:break;case 22:o=t.stateNode,s=t.alternate,t.memoizedState===null?(i&&s!==null&&s.memoizedState!==null&&ru(t),o._visibility&2?Uu(e,t,n,r):(o._visibility|=2,Gu(e,t,n,r,!!(t.subtreeFlags&10256)||!1))):(i&&s!==null&&s.memoizedState===null&&ru(s),o._visibility&2?Uu(e,t,n,r):U(e,t)),a&2048&&H(s,t);break;case 24:Uu(e,t,n,r),a&2048&&Hu(t.alternate,t);break;case 30:i&&(a=t.alternate,a!==null&&(Zl(a.child,!0),Zl(t.child,!0))),Uu(e,t,n,r);break;default:Uu(e,t,n,r)}}function Gu(e,t,n,r,i){for(i&&=!!(t.subtreeFlags&10256)||!1,t=t.child;t!==null;){var a=e,o=t,s=n,c=r,l=o.flags;switch(o.tag){case 0:case 11:case 15:Gu(a,o,s,c,i),Tl(8,o);break;case 23:break;case 22:var u=o.stateNode;o.memoizedState===null?(u._visibility|=2,Gu(a,o,s,c,i)):u._visibility&2?Gu(a,o,s,c,i):U(a,o),i&&l&2048&&H(o.alternate,o);break;case 24:Gu(a,o,s,c,i),i&&l&2048&&Hu(o.alternate,o);break;default:Gu(a,o,s,c,i)}t=t.sibling}}function U(e,t){if(t.subtreeFlags&10256)for(t=t.child;t!==null;){var n=e,r=t,i=r.flags;switch(r.tag){case 22:U(n,r),i&2048&&H(r.alternate,r);break;case 24:U(n,r),i&2048&&Hu(r.alternate,r);break;default:U(n,r)}t=t.sibling}}var Ku=8192;function qu(e,t,n){if(e.subtreeFlags&Ku)for(e=e.child;e!==null;)W(e,t,n),e=e.sibling}function W(e,t,n){switch(e.tag){case 26:qu(e,t,n),e.flags&Ku&&(e.memoizedState===null?(e=e.stateNode,(t&335544128)===t&&Zm(n,e)):Qm(n,Nu,e.memoizedState,e.memoizedProps));break;case 5:qu(e,t,n),e.flags&Ku&&(e=e.stateNode,(t&335544128)===t&&Zm(n,e));break;case 3:case 4:var r=Nu;Nu=bm(e.stateNode.containerInfo),qu(e,t,n),Nu=r;break;case 22:e.memoizedState===null&&(r=e.alternate,r!==null&&r.memoizedState!==null?(r=Ku,Ku=16777216,qu(e,t,n),Ku=r):qu(e,t,n));break;case 30:if((e.flags&Ku)!==0&&(r=e.memoizedProps.name,r!=null&&r!==`auto`)){var i=e.stateNode;i.paired=null,Wl===null&&(Wl=new Map),Wl.set(r,i)}qu(e,t,n);break;default:qu(e,t,n)}}function Ju(e){var t=e.alternate;if(t!==null&&(e=t.child,e!==null)){t.child=null;do t=e.sibling,e.sibling=null,e=t;while(e!==null)}}function Yu(e){var t=e.deletions;if(e.flags&16){if(t!==null)for(var n=0;n<t.length;n++){var r=t[n];fu=r,Qu(r,e)}Ju(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)Xu(e),e=e.sibling}function Xu(e){switch(e.tag){case 0:case 11:case 15:Yu(e),e.flags&2048&&El(9,e,e.return);break;case 3:Yu(e);break;case 12:Yu(e);break;case 22:var t=e.stateNode;e.memoizedState!==null&&t._visibility&2&&(e.return===null||e.return.tag!==13)?(t._visibility&=-3,Zu(e)):Yu(e);break;default:Yu(e)}}function Zu(e){var t=e.deletions;if(e.flags&16){if(t!==null)for(var n=0;n<t.length;n++){var r=t[n];fu=r,Qu(r,e)}Ju(e)}for(e=e.child;e!==null;){switch(t=e,t.tag){case 0:case 11:case 15:El(8,t,t.return),Zu(t);break;case 22:n=t.stateNode,n._visibility&2&&(n._visibility&=-3,Zu(t));break;default:Zu(t)}e=e.sibling}}function Qu(e,t){for(;fu!==null;){var n=fu;switch(n.tag){case 0:case 11:case 15:El(8,n,t);break;case 23:case 22:if(n.memoizedState!==null&&n.memoizedState.cachePool!==null){var r=n.memoizedState.cachePool.pool;r!=null&&r.refCount++}break;case 24:za(n.memoizedState.cache)}if(r=n.child,r!==null)r.return=n,fu=r;else a:for(n=e;fu!==null;){r=fu;var i=r.sibling,a=r.return;if(Cu(r),r===n){fu=null;break a}if(i!==null){i.return=a,fu=i;break a}fu=a}}}var G={getCacheForType:function(e){var t=ja(La),n=t.data.get(e);return n===void 0&&(n=e(),t.data.set(e,n)),n},cacheSignal:function(){return ja(La).controller.signal}},$u=typeof WeakMap==`function`?WeakMap:Map,ed=0,td=null,K=null,q=0,J=0,nd=null,rd=!1,Y=!1,X=!1,id=0,ad=0,Z=0,od=0,sd=0,cd=0,ld=0,ud=null,dd=null,fd=!1,pd=0,md=0,hd=1/0,gd=null,_d=null,vd=0,yd=null,bd=null,xd=0,Sd=0,Cd=null,wd=null,Td=null,Ed=null,Dd=null,Od=0,kd=null;function Ad(){return ed&2&&q!==0?q&-q:D.T===null?Ot():Nf()}function jd(){if(cd===0){if(!(q&536870912)||N){var e=pt;pt<<=1,!(pt&3932160)&&(pt=262144),cd=e}else cd=536870912}return e=Lo.current,e!==null&&(e.flags|=32),cd}function Md(e,t){if(t!=null){var n=e.stateNode,r=n.ref;r===null&&(r=n.ref=Pp(wi(e.memoizedProps,n))),Ed===null&&(Ed=[]),Ed.push(t.bind(null,r))}}function Nd(e,t,n){(e===td&&(J===2||J===9)||e.cancelPendingCommit!==null)&&(Bd(e,0),Ld(e,q,cd,!1)),xt(e,n),(!(ed&2)||e!==td)&&(e===td&&(!(ed&2)&&(od|=n),ad===4&&Ld(e,q,cd,!1)),Tf(e))}function Pd(e,t,n){if(ed&6)throw Error(i(327));var r=!n&&!(t&127)&&(t&e.expiredLanes)===0||_t(e,t),a=r?qd(e,t):Gd(e,t,!0),o=r;do{if(a===0){Y&&!r&&Ld(e,t,0,!1);break}if(n=e.current.alternate,o&&!Id(n)){a=Gd(e,t,!1),o=!1;continue}if(a===2){if(o=t,e.errorRecoveryDisabledLanes&o)var s=0;else s=e.pendingLanes&-536870913,s=s===0?s&536870912?536870912:0:s;if(s!==0){t=s;a:{var c=e;a=ud;var l=c.current.memoizedState.isDehydrated;if(l&&(Bd(c,s).flags|=256),s=Gd(c,s,!1),s!==2&&s!==6){if(X&&!l){c.errorRecoveryDisabledLanes|=o,od|=o,a=4;break a}o=dd,dd=a,o!==null&&(dd===null?dd=o:dd.push.apply(dd,o))}a=s}if(o=!1,a!==2)continue}}if(a===1){Bd(e,0),Ld(e,t,0,!0);break}a:{switch(r=e,o=a,o){case 0:case 1:throw Error(i(345));case 4:if((t&4194048)!==t&&(t&62914560)!==t)break;case 6:Ld(r,t,cd,!rd);break a;case 2:dd=null;break;case 3:case 5:break;default:throw Error(i(329))}if((t&62914560)===t&&(a=pd+300-Xe(),10<a)){if(Ld(r,t,cd,!rd),gt(r,0,!0)!==0)break a;xd=t,r.timeoutHandle=gp(Fd.bind(null,r,n,dd,gd,fd,t,cd,od,ld,rd,o,`Throttled`,-0,0),a);break a}Fd(r,n,dd,gd,fd,t,cd,od,ld,rd,o,null,-0,0)}break}while(1);Tf(e)}function Fd(e,t,n,r,i,a,o,s,c,l,u,d,f,p){e.timeoutHandle=-1;var m=t.subtreeFlags,h=(a&335544064)===a;if(d=null,(h||m&8192||(m&16785408)==16785408)&&(d={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:On},Wl=null,W(t,a,d),h&&(m=d,h=e.containerInfo,h=(h.nodeType===9?h:h.ownerDocument).__reactViewTransition,h!=null&&(m.count++,m.waitingForViewTransition=!0,m=nh.bind(m),h.finished.then(m,m))),m=(a&62914560)===a?pd-Xe():(a&4194048)===a?md-Xe():0,m=eh(d,m),m!==null)){xd=a,e.cancelPendingCommit=m(ef.bind(null,e,t,a,n,r,i,o,s,c,l,u,d,null,f,p)),Ld(e,a,o,!l);return}ef(e,t,a,n,r,i,o,s,c,l,u,d)}function Id(e){for(var t=e;;){var n=t.tag;if((n===0||n===11||n===15)&&t.flags&16384&&(n=t.updateQueue,n!==null&&(n=n.stores,n!==null)))for(var r=0;r<n.length;r++){var i=n[r],a=i.getSnapshot;i=i.value;try{if(!Jr(a(),i))return!1}catch{return!1}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function Ld(e,t,n,r){t=k(e,t),t&=~sd,t&=~od,e.suspendedLanes|=t,e.pingedLanes&=~t,r&&(e.warmLanes|=t),r=e.expirationTimes;for(var i=t;0<i;){var a=31-ct(i),o=1<<a;r[a]=-1,i&=~o}n!==0&&Ct(e,n,t)}function Rd(){return ed&6?!0:(Ef(0,!1),!1)}function zd(){if(K!==null){if(J===0)var e=K.return;else e=K,Ca=Sa=null,cs(e),fo=null,po=0,e=K;for(;e!==null;)wl(e.alternate,e),e=e.return;K=null}}function Bd(e,t){var n=e.timeoutHandle;return n!==-1&&(e.timeoutHandle=-1,_p(n)),n=e.cancelPendingCommit,n!==null&&(e.cancelPendingCommit=null,n()),xd=0,zd(),td=e,K=n=Vi(e.current,null),q=t,J=0,nd=null,rd=!1,Y=_t(e,t),X=!1,ld=cd=sd=od=Z=ad=0,dd=ud=null,fd=!1,id=k(e,t),ji(),n}function Vd(e,t){L=null,D.H=_c,t===to||t===ro?(t=lo(),J=3):t===no?(t=lo(),J=4):J=t===Fc?8:typeof t==`object`&&t&&typeof t.then==`function`?6:1,nd=t,K===null&&(ad=1,kc(e,Yi(t,e.current)))}function Hd(){var e=Lo.current;return e===null?!0:(q&4194048)===q?Ro===null:(q&62914560)===q||q&536870912?e===Ro:!1}function Ud(){var e=D.H;return D.H=_c,e===null?_c:e}function Wd(){var e=D.A;return D.A=G,e}function Q(){ad=4,rd||(q&4194048)!==q&&Lo.current!==null||(Y=!0),!(Z&134217727)&&!(od&134217727)||td===null||Ld(td,q,cd,!1)}function Gd(e,t,n){var r=ed;ed|=2;var i=Ud(),a=Wd();(td!==e||q!==t)&&(gd=null,Bd(e,t)),t=!1;var o=ad;a:do try{if(J!==0&&K!==null){var s=K,c=nd;switch(J){case 8:zd(),o=6;break a;case 3:case 2:case 9:case 6:Lo.current===null&&(t=!0);var l=J;if(J=0,nd=null,Zd(e,s,c,l),n&&Y){o=0;break a}break;default:l=J,J=0,nd=null,Zd(e,s,c,l)}}Kd(),o=ad;break}catch(t){Vd(e,t)}while(1);return t&&e.shellSuspendCounter++,Ca=Sa=null,ed=r,D.H=i,D.A=a,K===null&&(td=null,q=0,ji()),o}function Kd(){for(;K!==null;)Yd(K)}function qd(e,t){var n=ed;ed|=2;var r=Ud(),a=Wd();td!==e||q!==t?(gd=null,hd=Xe()+500,Bd(e,t)):Y=_t(e,t);a:do try{if(J!==0&&K!==null){t=K;var o=nd;b:switch(J){case 1:J=0,nd=null,Zd(e,t,o,1);break;case 2:case 9:if(ao(o)){J=0,nd=null,Xd(t);break}t=function(){J!==2&&J!==9||td!==e||(J=7),Tf(e)},o.then(t,t);break a;case 3:J=7;break a;case 4:J=5;break a;case 7:ao(o)?(J=0,nd=null,Xd(t)):(J=0,nd=null,Zd(e,t,o,7));break;case 5:var s=null;switch(K.tag){case 26:s=K.memoizedState;case 5:case 27:var c=K;if(s?Ym(s):c.stateNode.complete){J=0,nd=null;var l=c.sibling;if(l!==null)K=l;else{var u=c.return;u===null?K=null:(K=u,Qd(u))}break b}}J=0,nd=null,Zd(e,t,o,5);break;case 6:J=0,nd=null,Zd(e,t,o,6);break;case 8:zd(),ad=6;break a;default:throw Error(i(462))}}Jd();break}catch(t){Vd(e,t)}while(1);return Ca=Sa=null,D.H=r,D.A=a,ed=n,K===null?(td=null,q=0,ji(),ad):0}function Jd(){for(;K!==null&&!Je();)Yd(K)}function Yd(e){var t=hl(e.alternate,e,id);e.memoizedProps=e.pendingProps,t===null?Qd(e):K=t}function Xd(e){var t=e,n=t.alternate;switch(t.tag){case 15:case 0:t=Yc(n,t,t.pendingProps,t.type,void 0,q);break;case 11:t=Yc(n,t,t.pendingProps,t.type.render,t.ref,q);break;case 5:cs(t);var r=t;r===ua&&(N?(_a(r),r.tag===5&&r.stateNode!=null&&(da=r.stateNode)):(_a(r),N=!0));default:wl(n,t),t=K=Hi(t,id),t=hl(n,t,id)}e.memoizedProps=e.pendingProps,t===null?Qd(e):K=t}function Zd(e,t,n,r){Ca=Sa=null,cs(t),fo=null,po=0;var i=t.return;try{if(Pc(e,i,t,n,q)){ad=1,kc(e,Yi(n,e.current)),K=null;return}}catch(t){if(i!==null)throw K=i,t;ad=1,kc(e,Yi(n,e.current)),K=null;return}t.flags&32768?(N||r===1?e=!0:Y||q&536870912?e=!1:(rd=e=!0,(r===2||r===9||r===3||r===6)&&(r=Lo.current,r!==null&&r.tag===13&&(r.flags|=16384))),$d(t,e)):Qd(t)}function Qd(e){var t=e;do{if(t.flags&32768){$d(t,rd);return}e=t.return;var n=Sl(t.alternate,t,id);if(n!==null){K=n;return}if(t=t.sibling,t!==null){K=t;return}K=t=e}while(t!==null);ad===0&&(ad=5)}function $d(e,t){do{var n=Cl(e.alternate,e);if(n!==null){n.flags&=32767,K=n;return}if(n=e.return,n!==null&&(n.flags|=32768,n.subtreeFlags=0,n.deletions=null),!t&&(e=e.sibling,e!==null)){K=e;return}K=e=n}while(e!==null);ad=6,K=null}function ef(e,t,n,r,a,o,s,c,l,u,d,f){e.cancelPendingCommit=null;do lf();while(vd!==0);if(ed&6)throw Error(i(327));if(t!==null){if(t===e.current)throw Error(i(177));e===td&&(K=td=null,q=0),bd=t,yd=e,xd=n,Cd=a,wd=r,tf(e,t,n,s,c,l,f)}}function tf(e,t,n,r,i,a,o){var s=t.lanes|t.childLanes;if(Sd=s,s|=Ai,St(e,n,s,r,i,a),Ed=null,(n&335544064)===n?(Dd=Ha(e),r=10262):(Dd=null,r=10256),(t.subtreeFlags&r)!==0||(t.flags&r)!==0?(e.callbackNode=null,e.callbackPriority=0,vf(et,function(){return uf(),null})):(e.callbackNode=null,e.callbackPriority=0),Ul=!1,r=!!(t.flags&13878),t.subtreeFlags&13878||r){r=D.T,D.T=null,i=O.p,O.p=2,a=ed,ed|=4;try{_u(e,t,n)}finally{ed=a,O.p=i,D.T=r}}vd=1,Ul?Td=Mp(o,e.containerInfo,Dd,af,of,rf,sf,uf,nf,null,null):(af(),of(),sf())}function nf(e){if(vd!==0){var t=yd.onRecoverableError;t(e,{componentStack:null})}}function rf(){vd===3&&(vd=0,Ru(bd,yd),vd=4)}function af(){if(vd===1){vd=0;var e=yd,t=bd,n=xd,r=!!(t.flags&13878);if(t.subtreeFlags&13878||r){r=D.T,D.T=null;var i=O.p;O.p=2;var a=ed;ed|=4;try{mu=hu=!1,Pu(t,e,n),n=cp;var o=ei(e.containerInfo),s=n.focusedElem,c=n.selectionRange;if(o!==s&&s&&s.ownerDocument&&$r(s.ownerDocument.documentElement,s)){if(c!==null&&ti(s)){var l=c.start,u=c.end;if(u===void 0&&(u=l),`selectionStart`in s)s.selectionStart=l,s.selectionEnd=Math.min(u,s.value.length);else{var d=s.ownerDocument||document,f=d&&d.defaultView||window;if(f.getSelection){var p=f.getSelection(),m=s.textContent.length,h=Math.min(c.start,m),g=c.end===void 0?h:Math.min(c.end,m);!p.extend&&h>g&&(o=g,g=h,h=o);var _=Qr(s,h),v=Qr(s,g);if(_&&v&&(p.rangeCount!==1||p.anchorNode!==_.node||p.anchorOffset!==_.offset||p.focusNode!==v.node||p.focusOffset!==v.offset)){var y=d.createRange();y.setStart(_.node,_.offset),p.removeAllRanges(),h>g?(p.addRange(y),p.extend(v.node,v.offset)):(y.setEnd(v.node,v.offset),p.addRange(y))}}}}for(d=[],p=s;p=p.parentNode;)p.nodeType===1&&d.push({element:p,left:p.scrollLeft,top:p.scrollTop});for(typeof s.focus==`function`&&s.focus(),s=0;s<d.length;s++){var b=d[s];b.element.scrollLeft=b.left,b.element.scrollTop=b.top}}gh=!!sp,cp=sp=null}finally{ed=a,O.p=i,D.T=r}}e.current=t,vd=2}}function of(){if(vd===2){vd=0;var e=yd,t=bd,n=!!(t.flags&8772);if(t.subtreeFlags&8772||n){n=D.T,D.T=null;var r=O.p;O.p=2;var i=ed;ed|=4;try{yu(e,t.alternate,t)}finally{ed=i,O.p=r,D.T=n}}vd=3}}function sf(){if(vd===4||vd===3){vd=0;var e=Td;Td=null,Ye();var t=yd,n=bd,r=xd,i=wd,a=(r&335544064)===r?10262:10256;if((n.subtreeFlags&a)!==0||(n.flags&a)!==0?vd=5:(vd=0,bd=yd=null,cf(t,t.pendingLanes)),a=t.pendingLanes,a===0&&(_d=null),Dt(r),n=n.stateNode,ot&&typeof ot.onCommitFiberRoot==`function`)try{ot.onCommitFiberRoot(at,n,void 0,(n.current.flags&128)==128)}catch{}if(i!==null){n=D.T,a=O.p,O.p=2,D.T=null;try{for(var o=t.onRecoverableError,s=0;s<i.length;s++){var c=i[s];o(c.value,{componentStack:c.stack})}}finally{D.T=n,O.p=a}}if(i=Ed,o=Dd,Dd=null,i!==null&&(Ed=null,o===null&&(o=[]),e!==null))for(c=0;c<i.length;c++)n=(0,i[c])(o),n!==void 0&&e.finished.finally(n);xd&3&&lf(),Tf(t),a=t.pendingLanes,r&261930&&a&42?t===kd?Od++:(Od=0,kd=t):(Od=0,kd=null),Ef(0,!1)}}function cf(e,t){(e.pooledCacheLanes&=t)===0&&(t=e.pooledCache,t!=null&&(e.pooledCache=null,za(t)))}function lf(){return Td!==null&&(Td.skipTransition(),Td=null),af(),of(),sf(),uf()}function uf(){if(vd!==5)return!1;var e=yd,t=Sd;Sd=0;var n=Dt(xd),r=D.T,a=O.p;try{O.p=32>n?32:n,D.T=null,n=Cd,Cd=null;var o=yd,s=xd;if(vd=0,bd=yd=null,xd=0,ed&6)throw Error(i(331));var c=ed;if(ed|=4,Xu(o.current),Wu(o,o.current,s,n),ed=c,Ef(0,!1),ot&&typeof ot.onPostCommitFiberRoot==`function`)try{ot.onPostCommitFiberRoot(at,o)}catch{}return!0}finally{O.p=a,D.T=r,cf(e,t)}}function df(e,t,n){t=Yi(n,t),t=jc(e.stateNode,t,2),e=wo(e,t,2),e!==null&&(xt(e,2),Tf(e))}function ff(e,t,n){if(e.tag===3)df(e,e,n);else for(;t!==null;){if(t.tag===3){df(t,e,n);break}if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError==`function`||typeof r.componentDidCatch==`function`&&(_d===null||!_d.has(r))){e=Yi(n,e),n=Mc(2),r=wo(t,n,2),r!==null&&(Nc(n,r,t,e),xt(r,2),Tf(r));break}}t=t.return}}function pf(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new $u;var i=new Set;r.set(t,i)}else i=r.get(t),i===void 0&&(i=new Set,r.set(t,i));i.has(n)||(X=!0,i.add(n),e=mf.bind(null,e,t,n),t.then(e,e))}function mf(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),e.pingedLanes|=e.suspendedLanes&n,e.warmLanes&=~n,td===e&&(q&n)===n&&(ad===4||ad===3&&(q&62914560)===q&&300>Xe()-pd?ed&2?sd|=n:Bd(e,0):sd|=n,ld===q&&(ld=0)),Tf(e)}function hf(e,t){t===0&&(t=yt()),e=Pi(e,t),e!==null&&(xt(e,t),Tf(e))}function gf(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),hf(e,n)}function _f(e,t){var n=0;switch(e.tag){case 31:case 13:var r=e.stateNode,a=e.memoizedState;a!==null&&(n=a.retryLane);break;case 19:r=e.stateNode;break;case 22:r=e.stateNode._retryCache;break;default:throw Error(i(314))}r!==null&&r.delete(t),hf(e,n)}function vf(e,t){return Ke(e,t)}var yf=null,bf=null,xf=!1,Sf=!1,Cf=!1,wf=0;function Tf(e){e!==bf&&e.next===null&&(bf===null?yf=bf=e:bf=bf.next=e),Sf=!0,xf||(xf=!0,Mf())}function Ef(e,t){if(!Cf&&Sf){Cf=!0;do for(var n=!1,r=yf;r!==null;){if(!t){if(e!==0){var i=r.pendingLanes;if(i===0)var a=0;else{var o=r.suspendedLanes,s=r.pingedLanes;a=(1<<31-ct(42|e)+1)-1,a&=i&~(o&~s),a=a&201326741?a&201326741|1:a?a|2:0}a!==0&&(n=!0,jf(r,a))}else a=q,a=gt(r,r===td?a:0,r.cancelPendingCommit!==null||r.timeoutHandle!==-1),!(a&3)||_t(r,a)||(n=!0,jf(r,a))}r=r.next}while(n);Cf=!1}}function Df(){Of()}function Of(){Sf=xf=!1;var e=0;wf!==0&&hp()&&(e=wf);for(var t=Xe(),n=null,r=yf;r!==null;){var i=r.next,a=kf(r,t);a===0?(r.next=null,n===null?yf=i:n.next=i,i===null&&(bf=n)):(n=r,(e!==0||a&3)&&(Sf=!0)),r=i}vd!==0&&vd!==5||Ef(e,!1),wf!==0&&(wf=0)}function kf(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,i=e.expirationTimes,a=e.pendingLanes&-62914561;0<a;){var o=31-ct(a),s=1<<o,c=i[o];c===-1?((s&n)===0||(s&r)!==0)&&(i[o]=vt(s,t)):c<=t&&(e.expiredLanes|=s),a&=~s}if(t=td,n=q,n=gt(e,e===t?n:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),r=e.callbackNode,n===0||e===t&&(J===2||J===9)||e.cancelPendingCommit!==null)return r!==null&&r!==null&&qe(r),e.callbackNode=null,e.callbackPriority=0;if(!(n&3)||_t(e,n)){if(t=n&-n,t===e.callbackPriority)return t;switch(r!==null&&qe(r),Dt(n)){case 2:case 8:n=$e;break;case 32:n=et;break;case 268435456:n=nt;break;default:n=et}return r=Af.bind(null,e),n=Ke(n,r),e.callbackPriority=t,e.callbackNode=n,t}return r!==null&&r!==null&&qe(r),e.callbackPriority=2,e.callbackNode=null,2}function Af(e,t){if(vd!==0&&vd!==5)return e.callbackNode=null,e.callbackPriority=0,null;var n=e.callbackNode;if(lf()&&e.callbackNode!==n)return null;var r=q;return r=gt(e,e===td?r:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),r===0?null:(Pd(e,r,t),kf(e,Xe()),e.callbackNode!=null&&e.callbackNode===n?Af.bind(null,e):null)}function jf(e,t){if(lf())return null;Pd(e,t,!0)}function Mf(){bp(function(){ed&6?Ke(Qe,Df):Of()})}function Nf(){if(wf===0){var e=Ga;e===0&&(e=ft,ft<<=1,!(ft&261888)&&(ft=256)),wf=e}return wf}function Pf(e){return e==null||typeof e==`symbol`||typeof e==`boolean`?null:typeof e==`function`?e:Dn(e)}function Ff(e,t,n,r,i){if(t===`submit`&&n&&n.stateNode===i){var a=Pf((i[Mt]||null).action),o=r.submitter;o&&(t=(t=o[Mt]||null)?Pf(t.formAction):o.getAttribute(`formAction`),t!==null&&(a=t,o=null));var s=new Jn(`action`,`action`,null,r,i);e.push({event:s,listeners:[{instance:null,listener:function(){if(r.defaultPrevented){if(wf!==0){var e=new FormData(i,o);ic(n,{pending:!0,data:e,method:i.method,action:a},null,e)}}else typeof a==`function`&&(s.preventDefault(),e=new FormData(i,o),ic(n,{pending:!0,data:e,method:i.method,action:a},a,e))},currentTarget:i}]})}}for(var If=0;If<xi.length;If++){var Lf=xi[If];Si(Lf.toLowerCase(),`on`+(Lf[0].toUpperCase()+Lf.slice(1)))}Si(pi,`onAnimationEnd`),Si(mi,`onAnimationIteration`),Si(hi,`onAnimationStart`),Si(`dblclick`,`onDoubleClick`),Si(`focusin`,`onFocus`),Si(`focusout`,`onBlur`),Si(gi,`onTransitionRun`),Si(_i,`onTransitionStart`),Si(vi,`onTransitionCancel`),Si(yi,`onTransitionEnd`),Xt(`onMouseEnter`,[`mouseout`,`mouseover`]),Xt(`onMouseLeave`,[`mouseout`,`mouseover`]),Xt(`onPointerEnter`,[`pointerout`,`pointerover`]),Xt(`onPointerLeave`,[`pointerout`,`pointerover`]),Yt(`onChange`,`change click focusin focusout input keydown keyup selectionchange`.split(` `)),Yt(`onSelect`,`focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange`.split(` `)),Yt(`onBeforeInput`,[`compositionend`,`keypress`,`textInput`,`paste`]),Yt(`onCompositionEnd`,`compositionend focusout keydown keypress keyup mousedown`.split(` `)),Yt(`onCompositionStart`,`compositionstart focusout keydown keypress keyup mousedown`.split(` `)),Yt(`onCompositionUpdate`,`compositionupdate focusout keydown keypress keyup mousedown`.split(` `));var Rf=`abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting`.split(` `),zf=new Set(`beforetoggle cancel close invalid load scroll scrollend toggle`.split(` `).concat(Rf));function Bf(e,t){t=!!(t&4);for(var n=0;n<e.length;n++){var r=e[n],i=r.event;r=r.listeners;a:{var a=void 0;if(t)for(var o=r.length-1;0<=o;o--){var s=r[o],c=s.instance,l=s.currentTarget;if(s=s.listener,c!==a&&i.isPropagationStopped())break a;a=s,i.currentTarget=l;try{a(i)}catch(e){Di(e)}i.currentTarget=null,a=c}else for(o=0;o<r.length;o++){if(s=r[o],c=s.instance,l=s.currentTarget,s=s.listener,c!==a&&i.isPropagationStopped())break a;a=s,i.currentTarget=l;try{a(i)}catch(e){Di(e)}i.currentTarget=null,a=c}}}}function $(e,t){var n=t[Pt];n===void 0&&(n=t[Pt]=new Set);var r=e+`__bubble`;n.has(r)||(Wf(t,e,2,!1),n.add(r))}function Vf(e,t,n){var r=0;t&&(r|=4),Wf(n,e,r,t)}var Hf=`_reactListening`+Math.random().toString(36).slice(2);function Uf(e){if(!e[Hf]){e[Hf]=!0,qt.forEach(function(t){t!==`selectionchange`&&(zf.has(t)||Vf(t,!1,e),Vf(t,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[Hf]||(t[Hf]=!0,Vf(`selectionchange`,!1,t))}}function Wf(e,t,n,r){switch(Ch(t)){case 2:var i=_h;break;case 8:i=vh;break;default:i=yh}n=i.bind(null,t,n,e),i=void 0,!Rn||t!==`touchstart`&&t!==`touchmove`&&t!==`wheel`||(i=!0),r?i===void 0?e.addEventListener(t,n,!0):e.addEventListener(t,n,{capture:!0,passive:i}):i===void 0?e.addEventListener(t,n,!1):e.addEventListener(t,n,{passive:i})}function Gf(e,t,n,r,i){var a=r;if(!(t&1)&&!(t&2)&&r!==null)a:for(;;){if(r===null)return;var s=r.tag;if(s===3||s===4){var c=r.stateNode.containerInfo;if(c===i)break;if(s===4)for(s=r.return;s!==null;){var l=s.tag;if((l===3||l===4)&&s.stateNode.containerInfo===i)return;s=s.return}for(;c!==null;){if(s=Vt(c),s===null)return;if(l=s.tag,l===5||l===6||l===26||l===27){r=a=s;continue a}c=c.parentNode}}r=r.return}Fn(function(){var r=a,i=An(n),s=[];a:{var c=bi.get(e);if(c!==void 0){var l=Jn,u=e;switch(e){case`keypress`:if(Wn(n)===0)break a;case`keydown`:case`keyup`:l=fr;break;case`focusin`:u=`focus`,l=rr;break;case`focusout`:u=`blur`,l=rr;break;case`beforeblur`:case`afterblur`:l=rr;break;case`click`:if(n.button===2)break a;case`auxclick`:case`dblclick`:case`mousedown`:case`mousemove`:case`mouseup`:case`mouseout`:case`mouseover`:case`contextmenu`:l=tr;break;case`drag`:case`dragend`:case`dragenter`:case`dragexit`:case`dragleave`:case`dragover`:case`dragstart`:case`drop`:l=nr;break;case`touchcancel`:case`touchend`:case`touchmove`:case`touchstart`:l=hr;break;case pi:case mi:case hi:l=ir;break;case yi:l=gr;break;case`scroll`:case`scrollend`:l=Xn;break;case`wheel`:l=_r;break;case`copy`:case`cut`:case`paste`:l=ar;break;case`gotpointercapture`:case`lostpointercapture`:case`pointercancel`:case`pointerdown`:case`pointermove`:case`pointerout`:case`pointerover`:case`pointerup`:l=pr;break;case`submit`:l=mr;break;case`toggle`:case`beforetoggle`:l=vr}var d=!!(t&4),f=!d&&(e===`scroll`||e===`scrollend`),p=d?c===null?null:c+`Capture`:c;d=[];for(var m=r,h;m!==null;){var g=m;if(h=g.stateNode,g=g.tag,g!==5&&g!==26&&g!==27||h===null||p===null||(g=In(m,p),g!=null&&d.push(Kf(m,g,h))),f)break;m=m.return}0<d.length&&(c=new l(c,u,null,n,i),s.push({event:c,listeners:d}))}}if(!(t&7)){a:{if(l=e===`mouseover`||e===`pointerover`,c=e===`mouseout`||e===`pointerout`,l&&n!==kn&&(u=n.relatedTarget||n.fromElement)&&(Vt(u)||u[Nt]))break a;(c||l)&&(u=i.window===i?i:(l=i.ownerDocument)?l.defaultView||l.parentWindow:window,c?(l=n.relatedTarget||n.toElement,c=r,l=l?Vt(l):null,l!==null&&(f=o(l),d=l.tag,l!==f||d!==5&&d!==27&&d!==6)&&(l=null)):(c=null,l=r),c!==l&&(d=tr,g=`onMouseLeave`,p=`onMouseEnter`,m=`mouse`,(e===`pointerout`||e===`pointerover`)&&(d=pr,g=`onPointerLeave`,p=`onPointerEnter`,m=`pointer`),f=c==null?u:Ut(c),h=l==null?u:Ut(l),u=new d(g,m+`leave`,c,n,i),u.target=f,u.relatedTarget=h,g=null,Vt(i)===r&&(d=new d(p,m+`enter`,l,n,i),d.target=h,d.relatedTarget=f,g=d),f=g,d=c&&l?te(c,l,Jf):null,c!==null&&Yf(s,u,c,d,!1),l!==null&&f!==null&&Yf(s,f,l,d,!0)))}a:{if(c=r?Ut(r):window,l=c.nodeName&&c.nodeName.toLowerCase(),l===`select`||l===`input`&&c.type===`file`)var _=Ir;else if(M(c)){if(Lr)_=Kr;else{_=Wr;var v=Ur}}else l=c.nodeName,!l||l.toLowerCase()!==`input`||c.type!==`checkbox`&&c.type!==`radio`?r&&wn(r.elementType)&&(_=Ir):_=Gr;if(_&&=_(e,r)){jr(s,_,n,i);break a}v&&v(e,c,r)}switch(v=r?Ut(r):window,e){case`focusin`:(M(v)||v.contentEditable===`true`)&&(ri=v,ii=r,ai=null);break;case`focusout`:ai=ii=ri=null;break;case`mousedown`:oi=!0;break;case`contextmenu`:case`mouseup`:case`dragend`:oi=!1,si(s,n,i);break;case`selectionchange`:if(ni)break;case`keydown`:case`keyup`:si(s,n,i)}var y;if(br)b:{switch(e){case`compositionstart`:var b=`onCompositionStart`;break b;case`compositionend`:b=`onCompositionEnd`;break b;case`compositionupdate`:b=`onCompositionUpdate`;break b}b=void 0}else j?Er(e,n)&&(b=`onCompositionEnd`):e===`keydown`&&n.keyCode===229&&(b=`onCompositionStart`);b&&(Cr&&n.locale!==`ko`&&(j||b!==`onCompositionStart`?b===`onCompositionEnd`&&j&&(y=Un()):(Bn=i,Vn=`value`in Bn?Bn.value:Bn.textContent,j=!0)),v=qf(r,b),0<v.length&&(b=new or(b,e,null,n,i),s.push({event:b,listeners:v}),y?b.data=y:(y=Dr(n),y!==null&&(b.data=y)))),(y=Sr?Or(e,n):kr(e,n))&&(b=qf(r,`onBeforeInput`),0<b.length&&(v=new or(`onBeforeInput`,`beforeinput`,null,n,i),s.push({event:v,listeners:b}),v.data=y)),Ff(s,e,r,n,i)}Bf(s,t)})}function Kf(e,t,n){return{instance:e,listener:t,currentTarget:n}}function qf(e,t){for(var n=t+`Capture`,r=[];e!==null;){var i=e,a=i.stateNode;if(i=i.tag,i!==5&&i!==26&&i!==27||a===null||(i=In(e,n),i!=null&&r.unshift(Kf(e,i,a)),i=In(e,t),i!=null&&r.push(Kf(e,i,a))),e.tag===3)return r;e=e.return}return[]}function Jf(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function Yf(e,t,n,r,i){for(var a=t._reactName,o=[];n!==null&&n!==r;){var s=n,c=s.alternate,l=s.stateNode;if(s=s.tag,c!==null&&c===r)break;s!==5&&s!==26&&s!==27||l===null||(c=l,i?(l=In(n,a),l!=null&&o.unshift(Kf(n,l,c))):i||(l=In(n,a),l!=null&&o.push(Kf(n,l,c)))),n=n.return}o.length!==0&&e.push({event:t,listeners:o})}var Xf=/\r\n?/g,Zf=/\u0000|\uFFFD/g;function Qf(e){return(typeof e==`string`?e:``+e).replace(Xf,`
`).replace(Zf,``)}function $f(e,t){return t=Qf(t),Qf(e)===t}function ep(e,t,n,r,a,o){switch(n){case`children`:if(typeof r==`string`)t===`body`||t===`textarea`&&r===``||bn(e,r);else if(typeof r==`number`||typeof r==`bigint`)t!==`body`&&bn(e,``+r);else return;break;case`className`:an(e,`class`,r);break;case`tabIndex`:an(e,`tabindex`,r);break;case`dir`:case`role`:case`viewBox`:case`width`:case`height`:an(e,n,r);break;case`style`:Cn(e,r,o);return;case`data`:if(t!==`object`){an(e,`data`,r);break}case`src`:case`href`:if(r===``&&(t!==`a`||n!==`href`)){e.removeAttribute(n);break}if(r==null||typeof r==`function`||typeof r==`symbol`||typeof r==`boolean`){e.removeAttribute(n);break}r=Dn(r),e.setAttribute(n,r);break;case`action`:case`formAction`:if(typeof r==`function`){e.setAttribute(n,`javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')`);break}if(typeof o==`function`&&(n===`formAction`?(t!==`input`&&ep(e,t,`name`,a.name,a,null),ep(e,t,`formEncType`,a.formEncType,a,null),ep(e,t,`formMethod`,a.formMethod,a,null),ep(e,t,`formTarget`,a.formTarget,a,null)):(ep(e,t,`encType`,a.encType,a,null),ep(e,t,`method`,a.method,a,null),ep(e,t,`target`,a.target,a,null))),r==null||typeof r==`symbol`||typeof r==`boolean`){e.removeAttribute(n);break}r=Dn(r),e.setAttribute(n,r);break;case`onClick`:r!=null&&(e.onclick=On);return;case`onScroll`:r!=null&&$(`scroll`,e);return;case`onScrollEnd`:r!=null&&$(`scrollend`,e);return;case`dangerouslySetInnerHTML`:if(r!=null){if(typeof r!=`object`||!(`__html`in r))throw Error(i(61));if(n=r.__html,n!=null){if(a.children!=null)throw Error(i(60));o?.__html!==n&&(e.innerHTML=n)}}break;case`multiple`:e.multiple=r&&typeof r!=`function`&&typeof r!=`symbol`;break;case`muted`:e.muted=r&&typeof r!=`function`&&typeof r!=`symbol`;break;case`suppressContentEditableWarning`:case`suppressHydrationWarning`:case`defaultValue`:case`defaultChecked`:case`innerHTML`:case`ref`:break;case`autoFocus`:break;case`xlinkHref`:if(r==null||typeof r==`function`||typeof r==`boolean`||typeof r==`symbol`){e.removeAttribute(`xlink:href`);break}n=Dn(r),e.setAttributeNS(`http://www.w3.org/1999/xlink`,`xlink:href`,n);break;case`contentEditable`:case`spellCheck`:case`draggable`:case`value`:case`autoReverse`:case`externalResourcesRequired`:case`focusable`:case`preserveAlpha`:r!=null&&typeof r!=`function`&&typeof r!=`symbol`?e.setAttribute(n,r):e.removeAttribute(n);break;case`inert`:case`allowFullScreen`:case`async`:case`autoPlay`:case`controls`:case`credentialless`:case`default`:case`defer`:case`disabled`:case`disablePictureInPicture`:case`disableRemotePlayback`:case`formNoValidate`:case`hidden`:case`loop`:case`noModule`:case`noValidate`:case`open`:case`playsInline`:case`readOnly`:case`required`:case`reversed`:case`scoped`:case`seamless`:case`itemScope`:r&&typeof r!=`function`&&typeof r!=`symbol`?e.setAttribute(n,``):e.removeAttribute(n);break;case`capture`:case`download`:!0===r?e.setAttribute(n,``):!1!==r&&r!=null&&typeof r!=`function`&&typeof r!=`symbol`?e.setAttribute(n,r):e.removeAttribute(n);break;case`cols`:case`rows`:case`size`:case`span`:r!=null&&typeof r!=`function`&&typeof r!=`symbol`&&!isNaN(r)&&1<=r?e.setAttribute(n,r):e.removeAttribute(n);break;case`rowSpan`:case`start`:r==null||typeof r==`function`||typeof r==`symbol`||isNaN(r)?e.removeAttribute(n):e.setAttribute(n,r);break;case`popover`:$(`beforetoggle`,e),$(`toggle`,e),rn(e,`popover`,r);break;case`xlinkActuate`:on(e,`http://www.w3.org/1999/xlink`,`xlink:actuate`,r);break;case`xlinkArcrole`:on(e,`http://www.w3.org/1999/xlink`,`xlink:arcrole`,r);break;case`xlinkRole`:on(e,`http://www.w3.org/1999/xlink`,`xlink:role`,r);break;case`xlinkShow`:on(e,`http://www.w3.org/1999/xlink`,`xlink:show`,r);break;case`xlinkTitle`:on(e,`http://www.w3.org/1999/xlink`,`xlink:title`,r);break;case`xlinkType`:on(e,`http://www.w3.org/1999/xlink`,`xlink:type`,r);break;case`xmlBase`:on(e,`http://www.w3.org/XML/1998/namespace`,`xml:base`,r);break;case`xmlLang`:on(e,`http://www.w3.org/XML/1998/namespace`,`xml:lang`,r);break;case`xmlSpace`:on(e,`http://www.w3.org/XML/1998/namespace`,`xml:space`,r);break;case`is`:rn(e,`is`,r);break;case`innerText`:case`textContent`:return;default:if(!(2<n.length)||n[0]!==`o`&&n[0]!==`O`||n[1]!==`n`&&n[1]!==`N`)n=Tn.get(n)||n,rn(e,n,r);else return}tn=!0}function tp(e,t,n,r,a,o){switch(n){case`style`:Cn(e,r,o);return;case`dangerouslySetInnerHTML`:if(r!=null){if(typeof r!=`object`||!(`__html`in r))throw Error(i(61));if(n=r.__html,n!=null){if(a.children!=null)throw Error(i(60));o?.__html!==n&&(e.innerHTML=n)}}break;case`children`:if(typeof r==`string`)bn(e,r);else if(typeof r==`number`||typeof r==`bigint`)bn(e,``+r);else return;break;case`onScroll`:r!=null&&$(`scroll`,e);return;case`onScrollEnd`:r!=null&&$(`scrollend`,e);return;case`onClick`:r!=null&&(e.onclick=On);return;case`suppressContentEditableWarning`:case`suppressHydrationWarning`:case`innerHTML`:case`ref`:return;case`innerText`:case`textContent`:return;default:if(!Jt.hasOwnProperty(n))a:{if(n[0]===`o`&&n[1]===`n`&&(a=n.endsWith(`Capture`),o=n.slice(2,a?n.length-7:void 0),t=e[Mt]||null,t=t==null?null:t[n],typeof t==`function`&&e.removeEventListener(o,t,a),typeof r==`function`)){typeof t!=`function`&&t!==null&&(n in e?e[n]=null:e.hasAttribute(n)&&e.removeAttribute(n)),e.addEventListener(o,r,a);break a}tn=!0,n in e?e[n]=r:!0===r?e.setAttribute(n,``):rn(e,n,r)}return}tn=!0}function np(e,t,n){switch(t){case`div`:case`span`:case`svg`:case`path`:case`a`:case`g`:case`p`:case`li`:break;case`img`:$(`error`,e),$(`load`,e);var r=!1,a=!1,o;for(o in n)if(n.hasOwnProperty(o)){var s=n[o];if(s!=null)switch(o){case`src`:r=!0;break;case`srcSet`:a=!0;break;case`children`:case`dangerouslySetInnerHTML`:throw Error(i(137,t));default:ep(e,t,o,s,n,null)}}a&&ep(e,t,`srcSet`,n.srcSet,n,null),r&&ep(e,t,`src`,n.src,n,null);return;case`input`:$(`invalid`,e);var c=o=s=a=null,l=null,u=null;for(r in n)if(n.hasOwnProperty(r)){var d=n[r];if(d!=null)switch(r){case`name`:a=d;break;case`type`:s=d;break;case`checked`:l=d;break;case`defaultChecked`:u=d;break;case`value`:o=d;break;case`defaultValue`:c=d;break;case`children`:case`dangerouslySetInnerHTML`:if(d!=null)throw Error(i(137,t));break;default:ep(e,t,r,d,n,null)}}hn(e,o,c,l,u,s,a,!1);return;case`select`:for(a in $(`invalid`,e),r=s=o=null,n)if(n.hasOwnProperty(a)&&(c=n[a],c!=null))switch(a){case`value`:o=c;break;case`defaultValue`:s=c;break;case`multiple`:r=c;default:ep(e,t,a,c,n,null)}t=o,n=s,e.multiple=!!r,t==null?n!=null&&_n(e,!!r,n,!0):_n(e,!!r,t,!1);return;case`textarea`:for(s in $(`invalid`,e),o=a=r=null,n)if(n.hasOwnProperty(s)&&(c=n[s],c!=null))switch(s){case`value`:r=c;break;case`defaultValue`:a=c;break;case`children`:o=c;break;case`dangerouslySetInnerHTML`:if(c!=null)throw Error(i(91));break;default:ep(e,t,s,c,n,null)}yn(e,r,a,o);return;case`option`:for(l in n)if(n.hasOwnProperty(l)&&(r=n[l],r!=null))switch(l){case`selected`:e.selected=r&&typeof r!=`function`&&typeof r!=`symbol`;break;default:ep(e,t,l,r,n,null)}return;case`dialog`:$(`beforetoggle`,e),$(`toggle`,e),$(`cancel`,e),$(`close`,e);break;case`iframe`:case`object`:$(`load`,e);break;case`video`:case`audio`:for(r=0;r<Rf.length;r++)$(Rf[r],e);break;case`image`:$(`error`,e),$(`load`,e);break;case`details`:$(`toggle`,e);break;case`embed`:case`source`:case`link`:$(`error`,e),$(`load`,e);case`area`:case`base`:case`br`:case`col`:case`hr`:case`keygen`:case`meta`:case`param`:case`track`:case`wbr`:case`menuitem`:for(u in n)if(n.hasOwnProperty(u)&&(r=n[u],r!=null))switch(u){case`children`:case`dangerouslySetInnerHTML`:throw Error(i(137,t));default:ep(e,t,u,r,n,null)}return;default:if(wn(t)){for(d in n)n.hasOwnProperty(d)&&(r=n[d],r!==void 0&&tp(e,t,d,r,n,void 0));return}}for(c in n)n.hasOwnProperty(c)&&(r=n[c],r!=null&&ep(e,t,c,r,n,null))}var rp={};function ip(e,t,n,r){switch(t){case`div`:case`span`:case`svg`:case`path`:case`a`:case`g`:case`p`:case`li`:break;case`input`:var a=null,o=null,s=null,c=null,l=null,u=null,d=null;for(m in n){var f=n[m];if(n.hasOwnProperty(m)&&f!=null)switch(m){case`checked`:break;case`value`:break;case`defaultValue`:l=f;default:r.hasOwnProperty(m)||ep(e,t,m,null,r,f)}}for(var p in r){var m=r[p];if(f=n[p],r.hasOwnProperty(p)&&(m!=null||f!=null))switch(p){case`type`:m!==f&&(tn=!0),o=m;break;case`name`:m!==f&&(tn=!0),a=m;break;case`checked`:m!==f&&(tn=!0),u=m;break;case`defaultChecked`:m!==f&&(tn=!0),d=m;break;case`value`:m!==f&&(tn=!0),s=m;break;case`defaultValue`:m!==f&&(tn=!0),c=m;break;case`children`:case`dangerouslySetInnerHTML`:if(m!=null)throw Error(i(137,t));break;default:m!==f&&ep(e,t,p,m,r,f)}}mn(e,s,c,l,u,d,o,a);return;case`select`:for(o in m=s=c=p=null,n)if(l=n[o],n.hasOwnProperty(o)&&l!=null)switch(o){case`value`:break;case`multiple`:m=l;default:r.hasOwnProperty(o)||ep(e,t,o,null,r,l)}for(a in r)if(o=r[a],l=n[a],r.hasOwnProperty(a)&&(o!=null||l!=null))switch(a){case`value`:o!==l&&(tn=!0),p=o;break;case`defaultValue`:o!==l&&(tn=!0),c=o;break;case`multiple`:o!==l&&(tn=!0),s=o;default:o!==l&&ep(e,t,a,o,r,l)}t=c,n=s,r=m,p==null?!!r!=!!n&&(t==null?_n(e,!!n,n?[]:``,!1):_n(e,!!n,t,!0)):_n(e,!!n,p,!1);return;case`textarea`:for(c in m=p=null,n)if(a=n[c],n.hasOwnProperty(c)&&a!=null&&!r.hasOwnProperty(c))switch(c){case`value`:break;case`children`:break;default:ep(e,t,c,null,r,a)}for(s in r)if(a=r[s],o=n[s],r.hasOwnProperty(s)&&(a!=null||o!=null))switch(s){case`value`:a!==o&&(tn=!0),p=a;break;case`defaultValue`:a!==o&&(tn=!0),m=a;break;case`children`:break;case`dangerouslySetInnerHTML`:if(a!=null)throw Error(i(91));break;default:a!==o&&ep(e,t,s,a,r,o)}vn(e,p,m);return;case`option`:for(var h in n)if(p=n[h],n.hasOwnProperty(h)&&p!=null&&!r.hasOwnProperty(h))switch(h){case`selected`:e.selected=!1;break;default:ep(e,t,h,null,r,p)}for(l in r)if(p=r[l],m=n[l],r.hasOwnProperty(l)&&p!==m&&(p!=null||m!=null))switch(l){case`selected`:p!==m&&(tn=!0),e.selected=p&&typeof p!=`function`&&typeof p!=`symbol`;break;default:ep(e,t,l,p,r,m)}return;case`img`:case`link`:case`area`:case`base`:case`br`:case`col`:case`embed`:case`hr`:case`keygen`:case`meta`:case`param`:case`source`:case`track`:case`wbr`:case`menuitem`:for(var g in n)p=n[g],n.hasOwnProperty(g)&&p!=null&&!r.hasOwnProperty(g)&&ep(e,t,g,null,r,p);for(u in r)if(p=r[u],m=n[u],r.hasOwnProperty(u)&&p!==m&&(p!=null||m!=null))switch(u){case`children`:case`dangerouslySetInnerHTML`:if(p!=null)throw Error(i(137,t));break;default:ep(e,t,u,p,r,m)}return;default:if(wn(t)){for(var _ in n)p=n[_],n.hasOwnProperty(_)&&p!==void 0&&!r.hasOwnProperty(_)&&tp(e,t,_,void 0,r,p);for(d in r)p=r[d],m=n[d],!r.hasOwnProperty(d)||p===m||p===void 0&&m===void 0||tp(e,t,d,p,r,m);return}}for(var v in n)p=n[v],n.hasOwnProperty(v)&&p!=null&&!r.hasOwnProperty(v)&&ep(e,t,v,null,r,p);for(f in r)p=r[f],m=n[f],!r.hasOwnProperty(f)||p===m||p==null&&m==null||ep(e,t,f,p,r,m)}function ap(e){switch(e){case`css`:case`script`:case`font`:case`img`:case`image`:case`input`:case`link`:return!0;default:return!1}}function op(){if(typeof performance.getEntriesByType==`function`){for(var e=0,t=0,n=performance.getEntriesByType(`resource`),r=0;r<n.length;r++){var i=n[r],a=i.transferSize,o=i.initiatorType,s=i.duration;if(a&&s&&ap(o)){for(o=0,s=i.responseEnd,r+=1;r<n.length;r++){var c=n[r],l=c.startTime;if(l>s)break;var u=c.transferSize,d=c.initiatorType;u&&ap(d)&&(c=c.responseEnd,o+=u*(c<s?1:(s-l)/(c-l)))}if(--r,t+=8*(a+o)/(i.duration/1e3),e++,10<e)break}}if(0<e)return t/e/1e6}return navigator.connection&&(e=navigator.connection.downlink,typeof e==`number`)?e:5}var sp=null,cp=null;function lp(e){return e.nodeType===9?e:e.ownerDocument}function up(e){switch(e){case`http://www.w3.org/2000/svg`:return 1;case`http://www.w3.org/1998/Math/MathML`:return 2;default:return 0}}function dp(e,t){if(e===0)switch(t){case`svg`:return 1;case`math`:return 2;default:return 0}return e===1&&t===`foreignObject`?0:e}function fp(e,t,n,r){return n=lp(n).createElement(e),n[jt]=r,n[Mt]=t,np(n,e,t),Gt(n),n}function pp(e,t){return e===`textarea`||e===`noscript`||typeof t.children==`string`||typeof t.children==`number`||typeof t.children==`bigint`||typeof t.dangerouslySetInnerHTML==`object`&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var mp=null;function hp(){var e=window.event;return e&&e.type===`popstate`?e!==mp&&(mp=e,!0):(mp=null,!1)}var gp=typeof setTimeout==`function`?setTimeout:void 0,_p=typeof clearTimeout==`function`?clearTimeout:void 0,vp=typeof Promise==`function`?Promise:void 0,yp=typeof requestAnimationFrame==`function`?requestAnimationFrame:gp,bp=typeof queueMicrotask==`function`?queueMicrotask:vp===void 0?gp:function(e){return vp.resolve(null).then(e).catch(xp)};function xp(e){setTimeout(function(){throw e})}function Sp(e){return e===`head`}function Cp(e,t){var n=t,r=0;do{var i=n.nextSibling;if(e.removeChild(n),i&&i.nodeType===8){if(n=i.data,n===`/$`||n===`/&`){if(r===0){e.removeChild(i),Hh(t);return}r--}else if(n===`$`||n===`$?`||n===`$~`||n===`$!`||n===`&`)r++;else if(n===`html`)_m(e.ownerDocument.documentElement);else if(n===`head`){n=e.ownerDocument.head,_m(n);for(var a=n.firstChild;a;){var o=a.nextSibling,s=a.nodeName;a[Rt]||s===`SCRIPT`||s===`STYLE`||s===`LINK`&&a.rel.toLowerCase()===`stylesheet`||n.removeChild(a),a=o}}else n===`body`&&_m(e.ownerDocument.body)}n=i}while(n);Hh(t)}function wp(e,t){var n=e;e=0;do{var r=n.nextSibling;if(n.nodeType===1?t?(n._stashedDisplay=n.style.display,n.style.display=`none`):(n.style.display=n._stashedDisplay||``,n.getAttribute(`style`)===``&&n.removeAttribute(`style`)):n.nodeType===3&&(t?(n._stashedText=n.nodeValue,n.nodeValue=``):n.nodeValue=n._stashedText||``),r&&r.nodeType===8){if(n=r.data,n===`/$`){if(e===0)break;e--}else n!==`$`&&n!==`$?`&&n!==`$~`&&n!==`$!`||e++}n=r}while(n)}function Tp(e,t,n){if(t=CSS.escape(t)===t?t:`r-`+btoa(t).replace(/=/g,``),e.style.viewTransitionName=t,n!=null&&(e.style.viewTransitionClass=n),n=getComputedStyle(e),n.display===`inline`){if(t=e.getClientRects(),t.length===1)var r=1;else for(var i=r=0;i<t.length;i++){var a=t[i];0<a.width&&0<a.height&&r++}r===1&&(e=e.style,e.display=t.length===1?`inline-block`:`block`,e.marginTop=`-`+n.paddingTop,e.marginBottom=`-`+n.paddingBottom)}}function Ep(e,t){e=e.style,t=t.style;var n=t==null?null:t.hasOwnProperty(`viewTransitionName`)?t.viewTransitionName:t.hasOwnProperty(`view-transition-name`)?t[`view-transition-name`]:null;e.viewTransitionName=n==null||typeof n==`boolean`?``:(``+n).trim(),n=t==null?null:t.hasOwnProperty(`viewTransitionClass`)?t.viewTransitionClass:t.hasOwnProperty(`view-transition-class`)?t[`view-transition-class`]:null,e.viewTransitionClass=n==null||typeof n==`boolean`?``:(``+n).trim(),e.display===`inline-block`&&(t==null?e.display=e.margin=``:(n=t.display,e.display=n==null||typeof n==`boolean`?``:n,n=t.margin,n==null?(n=t.hasOwnProperty(`marginTop`)?t.marginTop:t[`margin-top`],e.marginTop=n==null||typeof n==`boolean`?``:n,t=t.hasOwnProperty(`marginBottom`)?t.marginBottom:t[`margin-bottom`],e.marginBottom=t==null||typeof t==`boolean`?``:t):e.margin=n))}function Dp(e,t,n){return n=n.ownerDocument.defaultView,{rect:e,abs:t.position===`absolute`||t.position===`fixed`,clip:t.clipPath!==`none`||t.overflow!==`visible`||t.filter!==`none`||t.mask!==`none`||t.mask!==`none`||t.borderRadius!==`0px`,view:0<=e.bottom&&0<=e.right&&e.top<=n.innerHeight&&e.left<=n.innerWidth}}function Op(e){return Dp(e.getBoundingClientRect(),getComputedStyle(e),e)}function kp(e){var t=e.getBoundingClientRect();t=new DOMRect(t.x+2e4,t.y+2e4,t.width,t.height);var n=getComputedStyle(e);return Dp(t,n,e)}function Ap(e){return e.documentElement.clientHeight}function jp(e){this.addEventListener(`load`,e),this.addEventListener(`error`,e)}function Mp(e,t,n,r,i,a,o,s,c){var l=t.nodeType===9?t:t.ownerDocument;try{var u=l.startViewTransition({update:function(){var t=l.defaultView,n=t.navigation&&t.navigation.transition,o=l.fonts.status;r();var s=[];if(o===`loaded`&&(Ap(l),l.fonts.status===`loading`&&s.push(l.fonts.ready)),o=s.length,e!==null)for(var c=e.suspenseyImages,u=0,d=0;d<c.length;d++){var f=c[d];if(!f.complete){var p=f.getBoundingClientRect();if(0<p.bottom&&0<p.right&&p.top<t.innerHeight&&p.left<t.innerWidth){if(u+=Xm(f),u>$m){s.length=o;break}f=new Promise(jp.bind(f)),s.push(f)}}}if(0<s.length)return t=Promise.race([Promise.all(s),new Promise(function(e){return setTimeout(e,500)})]).then(i,i),(n?Promise.allSettled([n.finished,t]):t).then(a,a);if(i(),n)return n.finished.then(a,a);a()},types:n});l.__reactViewTransition=u;var d=[];return u.ready.then(function(){for(var e=l.documentElement.getAnimations({subtree:!0}),t=0;t<e.length;t++){var n=e[t],r=n.effect,i=r.pseudoElement;if(i!=null&&i.startsWith(`::view-transition`)){d.push(n),n=r.getKeyframes();for(var a=i=void 0,s=!0,c=0;c<n.length;c++){var u=n[c],f=u.width;if(i===void 0)i=f;else if(i!==f){s=!1;break}if(f=u.height,a===void 0)a=f;else if(a!==f){s=!1;break}delete u.width,delete u.height,u.transform===`none`&&delete u.transform}s&&i!==void 0&&a!==void 0&&(r.setKeyframes(n),s=getComputedStyle(r.target,r.pseudoElement),s.width!==i||s.height!==a)&&(s=n[0],s.width=i,s.height=a,s=n[n.length-1],s.width=i,s.height=a,r.setKeyframes(n))}}o()},function(e){l.__reactViewTransition===u&&(l.__reactViewTransition=null);try{if(typeof e==`object`&&e)switch(e.name){case`InvalidStateError`:(e.message===`View transition was skipped because document visibility state is hidden.`||e.message===`Skipping view transition because document visibility state has become hidden.`||e.message===`Skipping view transition because viewport size changed.`||e.message===`Transition was aborted because of invalid state`)&&(e=null)}e!==null&&c(e)}finally{r(),i(),o()}}),u.finished.finally(function(){for(var e=0;e<d.length;e++)d[e].cancel();l.__reactViewTransition===u&&(l.__reactViewTransition=null),s()}),u}catch{return r(),i(),o(),null}}function Np(e,t){this._scope=document.documentElement,this._selector=`::view-transition-`+e+`(`+t+`)`}Np.prototype.animate=function(e,t){return t=typeof t==`number`?{duration:t}:T({},t),t.pseudoElement=this._selector,this._scope.animate(e,t)},Np.prototype.getAnimations=function(){for(var e=this._scope,t=this._selector,n=e.getAnimations({subtree:!0}),r=[],i=0;i<n.length;i++){var a=n[i].effect;a!==null&&a.target===e&&a.pseudoElement===t&&r.push(n[i])}return r},Np.prototype.getComputedStyle=function(){return getComputedStyle(this._scope,this._selector)};function Pp(e){return{name:e,group:new Np(`group`,e),imagePair:new Np(`image-pair`,e),old:new Np(`old`,e),new:new Np(`new`,e)}}function Fp(e){this._fragmentFiber=e,this._observers=this._eventListeners=null}Fp.prototype.addEventListener=function(e,t,n){var r=null,i=null;if(!(n!=null&&typeof n!=`boolean`&&(r=n.signal||null,r!==null&&r.aborted))){this._eventListeners===null&&(this._eventListeners=[]);var a=this._eventListeners;if(Bp(a,e,t,n)===-1){var o=this,s=t;n!=null&&typeof n!=`boolean`&&!0===n.once&&(s=function(r){o.removeEventListener(e,t,n),typeof t==`function`?t.call(this,r):t.handleEvent(r)}),r!==null&&(i=o.removeEventListener.bind(o,e,t,n),r.addEventListener(`abort`,i,{once:!0}),i=r.removeEventListener.bind(r,`abort`,i)),r=Rp(n),a.push({type:e,listener:t,optionsOrUseCapture:n,attachedListener:s,cleanup:i}),h(this._fragmentFiber.child,!1,Ip,e,s,r)}this._eventListeners=a}};function Ip(e,t,n,r){return b(e).addEventListener(t,n,r),!1}Fp.prototype.removeEventListener=function(e,t,n){var r=this._eventListeners;if(r!==null&&(t=Bp(r,e,t,n),t!==-1)){var i=r[t];n=i.attachedListener;var a=i.cleanup;i=Rp(i.optionsOrUseCapture),h(this._fragmentFiber.child,!1,Lp,e,n,i),r.splice(t,1),a!==null&&a()}};function Lp(e,t,n,r){return b(e).removeEventListener(t,n,r),!1}function Rp(e){return e!=null&&typeof e!=`boolean`&&(!0===e.once||e.signal instanceof AbortSignal)?{capture:e.capture,passive:e.passive}:e}function zp(e){return e==null?`c=0`:typeof e==`boolean`?`c=`+(e?`1`:`0`):`c=`+(e.capture?`1`:`0`)}function Bp(e,t,n,r){if(e.length===0)return-1;r=zp(r);for(var i=0;i<e.length;i++){var a=e[i];if(a.type===t&&a.listener===n&&zp(a.optionsOrUseCapture)===r)return i}return-1}Fp.prototype.dispatchEvent=function(e){var t=g(this._fragmentFiber);if(t===null)return!0;t=b(t);var n=this._eventListeners;if(n!==null&&0<n.length||!e.bubbles){var r=t.nodeType===9?t.createComment(``):document.createTextNode(``);if(n)for(var i=0;i<n.length;i++){var a=n[i];r.addEventListener(a.type,a.attachedListener,Rp(a.optionsOrUseCapture))}if(t.appendChild(r),e=r.dispatchEvent(e),n)for(i=0;i<n.length;i++)a=n[i],r.removeEventListener(a.type,a.attachedListener,Rp(a.optionsOrUseCapture));return t.removeChild(r),e}return t.dispatchEvent(e)},Fp.prototype.focus=function(e){h(this._fragmentFiber.child,!0,Vp,e,void 0,void 0)};function Vp(e,t){return e.tag!==6&&(e=b(e),pm(e,t))}Fp.prototype.focusLast=function(e){var t=[];h(this._fragmentFiber.child,!0,Hp,t,void 0,void 0);for(var n=t.length-1;0<=n&&!Vp(t[n],e);n--);};function Hp(e,t){return t.push(e),!1}Fp.prototype.blur=function(){var e=g(this._fragmentFiber);e!==null&&(e=b(e),e=lp(e).activeElement,e!==null&&h(this._fragmentFiber.child,!1,Up,e,void 0,void 0))};function Up(e,t){return e.tag!==6&&(e=b(e),e===t||e.contains(t)?(t.blur(),!0):!1)}Fp.prototype.observeUsing=function(e){this._observers===null&&(this._observers=new Set),this._observers.add(e),h(this._fragmentFiber.child,!1,Wp,e,void 0,void 0)};function Wp(e,t){return e.tag!==6&&(e=b(e),t.observe(e),!1)}Fp.prototype.unobserveUsing=function(e){var t=this._observers;if(t!==null&&t.has(e)){t.delete(e),h(this._fragmentFiber.child,!1,Gp,e,void 0,void 0);for(var n=t=0;n<Kp.length;n++){var r=Kp[n];r.fragmentInstance===this&&r.observer===e?e.unobserve(r.instance):Kp[t++]=r}Kp.length=t}};function Gp(e,t){return e.tag!==6&&(e=b(e),t.unobserve(e),!1)}var Kp=[],qp=!1;function Jp(e,t,n){Kp.push({fragmentInstance:e,observer:t,instance:n}),qp||(qp=!0,mm(function(){qp=!1;var e=Kp;Kp=[];for(var t=0;t<e.length;t++){var n=e[t];n.observer.unobserve(n.instance)}}))}Fp.prototype.getClientRects=function(){var e=[];return h(this._fragmentFiber.child,!1,Yp,e,void 0,void 0),e};function Yp(e,t){if(e.tag===6){e=e.stateNode;var n=e.ownerDocument.createRange();n.selectNodeContents(e),t.push.apply(t,n.getClientRects())}else e=b(e),t.push.apply(t,e.getClientRects());return!1}Fp.prototype.getRootNode=function(e){var t=g(this._fragmentFiber);return t===null?this:b(t).getRootNode(e)},Fp.prototype.compareDocumentPosition=function(e){var t=g(this._fragmentFiber);if(t===null)return Node.DOCUMENT_POSITION_DISCONNECTED;var n=[];h(this._fragmentFiber.child,!1,Hp,n,void 0,void 0);var r=b(t);if(n.length===0){if(n=r,_(this._fragmentFiber)){a:{for(t=this._fragmentFiber.return;t!==null;){if(t.tag===4){t=t.stateNode.containerInfo;break a}if(t.tag===3||t.tag===5||t.tag===27)break;t=t.return}t=null}t!=null&&(n=t)}t=this._fragmentFiber;var i=r=n.compareDocumentPosition(e);return n===e?i=Node.DOCUMENT_POSITION_CONTAINS:r&Node.DOCUMENT_POSITION_CONTAINED_BY&&(n=v(t)[1],n===null?i=Node.DOCUMENT_POSITION_PRECEDING:(e=b(n).compareDocumentPosition(e),i=e===0||e&Node.DOCUMENT_POSITION_FOLLOWING?Node.DOCUMENT_POSITION_FOLLOWING:Node.DOCUMENT_POSITION_PRECEDING)),i|=Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC}t=b(n[0]),i=b(n[n.length-1]);var a=_(this._fragmentFiber)?t.parentElement:r;if(a==null)return Node.DOCUMENT_POSITION_DISCONNECTED;r=a.compareDocumentPosition(t)&Node.DOCUMENT_POSITION_CONTAINED_BY,a=a.compareDocumentPosition(i)&Node.DOCUMENT_POSITION_CONTAINED_BY;var o=t.compareDocumentPosition(e),s=i.compareDocumentPosition(e),c=o&Node.DOCUMENT_POSITION_CONTAINED_BY||s&Node.DOCUMENT_POSITION_CONTAINED_BY;return s=r&&a&&o&Node.DOCUMENT_POSITION_FOLLOWING&&s&Node.DOCUMENT_POSITION_PRECEDING,t=r&&t===e||a&&i===e||c||s?Node.DOCUMENT_POSITION_CONTAINED_BY:!r&&t===e||!a&&i===e?Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC:o,t&Node.DOCUMENT_POSITION_DISCONNECTED||t&Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC||Xp(t,this._fragmentFiber,n[0],n[n.length-1],e)?t:Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC};function Xp(e,t,n,r,i){var a=Vt(i);if(e&Node.DOCUMENT_POSITION_CONTAINED_BY){if(n=!!a)a:{for(;a!==null;){if(a.tag===7&&(a===t||a.alternate===t)){n=!0;break a}a=a.return}n=!1}return n}if(e&Node.DOCUMENT_POSITION_CONTAINS){if(a===null)return a=i.ownerDocument,i===a||i===a.documentElement||i===a.body;a:{for(a=t,t=g(t);a!==null;){if(!(a.tag!==5&&a.tag!==3&&a.tag!==27||a!==t&&a.alternate!==t)){a=!0;break a}a=a.return}a=!1}return a}return e&Node.DOCUMENT_POSITION_PRECEDING?((t=!!a)&&!(t=a===n)&&(t=te(n,a,w),t===null?t=!1:(h(t,!0,C,a,n),a=x,x=null,t=a!==null)),t):e&Node.DOCUMENT_POSITION_FOLLOWING?((t=!!a)&&!(t=a===r)&&(t=te(r,a,w),t===null?t=!1:(h(t,!0,ee,a,r),a=x,S=x=null,t=a!==null)),t):!1}function Zp(e,t){var n=e.ownerDocument.createRange();n.selectNodeContents(e),e=n.getBoundingClientRect(),window.scrollTo(window.scrollX+e.left,t?window.scrollY+e.top:window.scrollY+e.bottom-window.innerHeight)}Fp.prototype.scrollIntoView=function(e){if(typeof e==`object`)throw Error(i(566));var t=[];h(this._fragmentFiber.child,!1,Hp,t,void 0,void 0);var n=!1!==e;if(t.length===0){var r=v(this._fragmentFiber);if(r=n?r[1]||r[0]||g(this._fragmentFiber):r[0]||r[1],r===null)return;if(r.tag===6){e=b(r),Zp(e,n);return}if(r=b(r),r.nodeType!==9){if(r.nodeType===11){n=`host`in r?r.host:null,n!==null&&n.scrollIntoView(e);return}r.scrollIntoView(e)}}for(r=n?t.length-1:0;r!==(n?-1:t.length);){var a=t[r];a.tag===6?(a=b(a),Zp(a,n)):b(a).scrollIntoView(e),r+=n?-1:1}};function Qp(e,t){return e=b(e),$p(e,t),!1}function $p(e,t){e.reactFragments??=new Set,e.reactFragments.add(t)}function em(e,t){var n=t._eventListeners;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];e.addEventListener(i.type,i.attachedListener,Rp(i.optionsOrUseCapture))}e.nodeType!==3&&(n=t._observers,n!==null&&n.forEach(function(n){for(var r=0,i=0;i<Kp.length;i++){var a=Kp[i];(a.fragmentInstance!==t||a.observer!==n||a.instance!==e)&&(Kp[r++]=a)}Kp.length=r,n.observe(e)}),$p(e,t))}function tm(e,t){var n=t._eventListeners;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];e.removeEventListener(i.type,i.attachedListener,Rp(i.optionsOrUseCapture))}e.nodeType!==3&&(n=t._observers,n!==null&&n.forEach(function(n){typeof n.rootMargin==`string`?Jp(t,n,e):n.unobserve(e)}),e.reactFragments!=null&&e.reactFragments.delete(t))}function nm(e){var t=e.firstChild;for(t&&t.nodeType===10&&(t=t.nextSibling);t;){var n=t;switch(t=t.nextSibling,n.nodeName){case`HTML`:case`HEAD`:case`BODY`:nm(n),Bt(n);continue;case`SCRIPT`:case`STYLE`:continue;case`LINK`:if(n.rel.toLowerCase()===`stylesheet`)continue}e.removeChild(n)}}function rm(e,t,n,r){for(;e.nodeType===1;){var i=n;if(e.nodeName.toLowerCase()!==t.toLowerCase()){if(!r&&(e.nodeName!==`INPUT`||e.type!==`hidden`))break}else if(!r){if(t===`input`&&e.type===`hidden`){var a=i.name==null?null:``+i.name;if(i.type===`hidden`&&e.getAttribute(`name`)===a)return e}else return e}else if(!e[Rt])switch(t){case`meta`:if(!e.hasAttribute(`itemprop`))break;return e;case`link`:if(a=e.getAttribute(`rel`),a===`stylesheet`&&e.hasAttribute(`data-precedence`)||a!==i.rel||e.getAttribute(`href`)!==(i.href==null||i.href===``?null:i.href)||e.getAttribute(`crossorigin`)!==(i.crossOrigin==null?null:i.crossOrigin)||e.getAttribute(`title`)!==(i.title==null?null:i.title))break;return e;case`style`:if(e.hasAttribute(`data-precedence`))break;return e;case`script`:if(a=e.getAttribute(`src`),(a!==(i.src==null?null:i.src)||e.getAttribute(`type`)!==(i.type==null?null:i.type)||e.getAttribute(`crossorigin`)!==(i.crossOrigin==null?null:i.crossOrigin))&&a&&e.hasAttribute(`async`)&&!e.hasAttribute(`itemprop`))break;return e;default:return e}if(e=lm(e.nextSibling),e===null)break}return null}function im(e,t,n){if(t===``)return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!==`INPUT`||e.type!==`hidden`)&&!n||(e=lm(e.nextSibling),e===null))return null;return e}function am(e,t){for(;e.nodeType!==8;)if((e.nodeType!==1||e.nodeName!==`INPUT`||e.type!==`hidden`)&&!t||(e=lm(e.nextSibling),e===null))return null;return e}function om(e){return e.data===`$?`||e.data===`$~`}function sm(e){return e.data===`$!`||e.data===`$?`&&e.ownerDocument.readyState!==`loading`}function cm(e,t){var n=e.ownerDocument;if(e.data===`$~`)e._reactRetry=t;else if(e.data!==`$?`||n.readyState!==`loading`)t();else{var r=function(){t(),n.removeEventListener(`DOMContentLoaded`,r)};n.addEventListener(`DOMContentLoaded`,r),e._reactRetry=r}}function lm(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t===`$`||t===`$!`||t===`$?`||t===`$~`||t===`&`||t===`F!`||t===`F`)break;if(t===`/$`||t===`/&`)return null}}return e}var um=null;function dm(e){e=e.nextSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n===`/$`||n===`/&`){if(t===0)return lm(e.nextSibling);t--}else n!==`$`&&n!==`$!`&&n!==`$?`&&n!==`$~`&&n!==`&`||t++}e=e.nextSibling}return null}function fm(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n===`$`||n===`$!`||n===`$?`||n===`$~`||n===`&`){if(t===0)return e;t--}else n!==`/$`&&n!==`/&`||t++}e=e.previousSibling}return null}function pm(e,t){function n(){r=!0}if(e.ownerDocument.activeElement===e)return!0;var r=!1;try{e.ownerDocument.addEventListener(`focus`,n,!0),(e.focus||HTMLElement.prototype.focus).call(e,t)}finally{e.ownerDocument.removeEventListener(`focus`,n,!0)}return r}function mm(e){yp(function(){yp(function(t){return e(t)})})}function hm(e,t,n){switch(t=lp(n),e){case`html`:if(e=t.documentElement,!e)throw Error(i(452));return e;case`head`:if(e=t.head,!e)throw Error(i(453));return e;case`body`:if(e=t.body,!e)throw Error(i(454));return e;default:throw Error(i(451))}}function gm(e,t,n){for(var r in n){var i=n[r];n.hasOwnProperty(r)&&i!=null&&ep(e,t,r,null,rp,i)}n.dangerouslySetInnerHTML!=null&&(e.textContent=``),e.onclick===On&&(e.onclick=null),Bt(e)}function _m(e){for(var t=e.attributes;t.length;)e.removeAttributeNode(t[0]);Bt(e)}var vm=new Map,ym=new Set;function bm(e){if(typeof e.getRootNode==`function`){var t=e.getRootNode();if(t.nodeType===9||t.nodeType===11)return t}return e.nodeType===9?e:e.ownerDocument}var xm=O.d;O.d={f:Sm,r:Cm,D:Em,C:Dm,L:Om,m:km,X:jm,S:Am,M:Mm};function Sm(){var e=xm.f(),t=Rd();return e||t}function Cm(e){var t=Ht(e);t!==null&&t.tag===5&&t.type===`form`?oc(t):xm.r(e)}var wm=typeof document>`u`?null:document;function Tm(e,t,n){var r=wm;if(r&&typeof t==`string`&&t){var i=pn(t);i=`link[rel="`+e+`"][href="`+i+`"]`,typeof n==`string`&&(i+=`[crossorigin="`+n+`"]`),ym.has(i)||(ym.add(i),e={rel:e,crossOrigin:n,href:t},r.querySelector(i)===null&&(t=r.createElement(`link`),np(t,`link`,e),Gt(t),r.head.appendChild(t)))}}function Em(e){xm.D(e),Tm(`dns-prefetch`,e,null)}function Dm(e,t){xm.C(e,t),Tm(`preconnect`,e,t)}function Om(e,t,n){xm.L(e,t,n);var r=wm;if(r&&e&&t){var i=`link[rel="preload"][as="`+pn(t)+`"]`;t===`image`&&n&&n.imageSrcSet?(i+=`[imagesrcset="`+pn(n.imageSrcSet)+`"]`,typeof n.imageSizes==`string`&&(i+=`[imagesizes="`+pn(n.imageSizes)+`"]`)):i+=`[href="`+pn(e)+`"]`;var a=i;switch(t){case`style`:a=Pm(e);break;case`script`:a=Rm(e)}if(!(vm.has(a)||(e=T({rel:`preload`,href:t===`image`&&n&&n.imageSrcSet?void 0:e,as:t},n),vm.set(a,e),r.querySelector(i)!==null||t===`style`&&r.querySelector(Fm(a))||t===`script`&&r.querySelector(zm(a))))){var o=r.createElement(`link`);np(o,`link`,e),t===`style`&&(o[zt]=!0,o.onload=o.onerror=function(){Kt(o)}),Gt(o),r.head.appendChild(o)}}}function km(e,t){xm.m(e,t);var n=wm;if(n&&e){var r=t&&typeof t.as==`string`?t.as:`script`,i=`link[rel="modulepreload"][as="`+pn(r)+`"][href="`+pn(e)+`"]`,a=i;switch(r){case`audioworklet`:case`paintworklet`:case`serviceworker`:case`sharedworker`:case`worker`:case`script`:a=Rm(e)}if(!vm.has(a)&&(e=T({rel:`modulepreload`,href:e},t),vm.set(a,e),n.querySelector(i)===null)){switch(r){case`audioworklet`:case`paintworklet`:case`serviceworker`:case`sharedworker`:case`worker`:case`script`:if(n.querySelector(zm(a)))return}r=n.createElement(`link`),np(r,`link`,e),Gt(r),n.head.appendChild(r)}}}function Am(e,t,n){xm.S(e,t,n);var r=wm;if(r&&e){var i=Wt(r).hoistableStyles,a=Pm(e);t||=`default`;var o=i.get(a);if(!o){var s={loading:0,preload:null};if(o=r.querySelector(Fm(a)))s.loading=5;else{e=T({rel:`stylesheet`,href:e,"data-precedence":t},n),(n=vm.get(a))&&Hm(e,n);var c=o=r.createElement(`link`);Gt(c),np(c,`link`,e),c._p=new Promise(function(e,t){c.onload=e,c.onerror=t}),c.addEventListener(`load`,function(){s.loading|=1}),c.addEventListener(`error`,function(){s.loading|=2}),s.loading|=4,Vm(o,t,r)}o={type:`stylesheet`,instance:o,count:1,state:s},i.set(a,o)}}}function jm(e,t){xm.X(e,t);var n=wm;if(n&&e){var r=Wt(n).hoistableScripts,i=Rm(e),a=r.get(i);a||(a=n.querySelector(zm(i)),a||(e=T({src:e,async:!0},t),(t=vm.get(i))&&Um(e,t),a=n.createElement(`script`),Gt(a),np(a,`link`,e),n.head.appendChild(a)),a={type:`script`,instance:a,count:1,state:null},r.set(i,a))}}function Mm(e,t){xm.M(e,t);var n=wm;if(n&&e){var r=Wt(n).hoistableScripts,i=Rm(e),a=r.get(i);a||(a=n.querySelector(zm(i)),a||(e=T({src:e,async:!0,type:`module`},t),(t=vm.get(i))&&Um(e,t),a=n.createElement(`script`),Gt(a),np(a,`link`,e),n.head.appendChild(a)),a={type:`script`,instance:a,count:1,state:null},r.set(i,a))}}function Nm(e,t,n,r){var a=(a=Me.current)?bm(a):null;if(!a)throw Error(i(446));switch(e){case`meta`:case`title`:return null;case`style`:return typeof n.precedence==`string`&&typeof n.href==`string`?(n=Pm(n.href),t=Wt(a).hoistableStyles,r=t.get(n),r||(r={type:`style`,instance:null,count:0,state:null},t.set(n,r)),r):{type:`void`,instance:null,count:0,state:null};case`link`:if(n.rel===`stylesheet`&&typeof n.href==`string`&&typeof n.precedence==`string`){e=Pm(n.href);var o=Wt(a).hoistableStyles,s=o.get(e);if(s||(a=a.ownerDocument||a,s={type:`stylesheet`,instance:null,count:0,state:{loading:0,preload:null}},o.set(e,s),(o=a.querySelector(Fm(e)))?o._p||(s.instance=o,s.state.loading=5):(o=vm.get(e),o||(o={rel:`preload`,as:`style`,href:n.href,crossOrigin:n.crossOrigin,integrity:n.integrity,media:n.media,hrefLang:n.hrefLang,referrerPolicy:n.referrerPolicy},vm.set(e,o)),Lm(a,e,o,s.state))),t&&r===null)throw Error(i(528,``));return s}if(t&&r!==null)throw Error(i(529,``));return null;case`script`:return t=n.async,n=n.src,typeof n==`string`&&t&&typeof t!=`function`&&typeof t!=`symbol`?(n=Rm(n),t=Wt(a).hoistableScripts,r=t.get(n),r||(r={type:`script`,instance:null,count:0,state:null},t.set(n,r)),r):{type:`void`,instance:null,count:0,state:null};default:throw Error(i(444,e))}}function Pm(e){return`href="`+pn(e)+`"`}function Fm(e){return`link[rel="stylesheet"][`+e+`]`}function Im(e){return T({},e,{"data-precedence":e.precedence,precedence:null})}function Lm(e,t,n,r){if(t=e.querySelector(`link[rel="preload"][as="style"][`+t+`]`)){if(!0!==t[zt]){r.loading=1;return}}else t=e.createElement(`link`),t[zt]=!0,t.onload=t.onerror=Kt.bind(null,t),np(t,`link`,n),Gt(t),e.head.appendChild(t);r.preload=t,t.addEventListener(`load`,function(){return r.loading|=1}),t.addEventListener(`error`,function(){return r.loading|=2})}function Rm(e){return`[src="`+pn(e)+`"]`}function zm(e){return`script[async]`+e}function Bm(e,t,n){if(t.count++,t.instance===null)switch(t.type){case`style`:var r=e.querySelector(`style[data-href~="`+pn(n.href)+`"]`);if(r)return t.instance=r,Gt(r),r;var a=T({},n,{"data-href":n.href,"data-precedence":n.precedence,href:null,precedence:null});return r=(e.ownerDocument||e).createElement(`style`),Gt(r),np(r,`style`,a),Vm(r,n.precedence,e),t.instance=r;case`stylesheet`:a=Pm(n.href);var o=e.querySelector(Fm(a));if(o)return t.state.loading|=4,t.instance=o,Gt(o),o;r=Im(n),(a=vm.get(a))&&Hm(r,a),o=(e.ownerDocument||e).createElement(`link`),Gt(o);var s=o;return s._p=new Promise(function(e,t){s.onload=e,s.onerror=t}),np(o,`link`,r),t.state.loading|=4,Vm(o,n.precedence,e),t.instance=o;case`script`:return o=Rm(n.src),(a=e.querySelector(zm(o)))?(t.instance=a,Gt(a),a):(r=n,(a=vm.get(o))&&(r=T({},n),Um(r,a)),e=e.ownerDocument||e,a=e.createElement(`script`),Gt(a),np(a,`link`,r),e.head.appendChild(a),t.instance=a);case`void`:return null;default:throw Error(i(443,t.type))}else t.type===`stylesheet`&&!(t.state.loading&4)&&(r=t.instance,t.state.loading|=4,Vm(r,n.precedence,e));return t.instance}function Vm(e,t,n){for(var r=n.querySelectorAll(`link[rel="stylesheet"][data-precedence],style[data-precedence]`),i=r.length?r[r.length-1]:null,a=i,o=0;o<r.length;o++){var s=r[o];if(s.dataset.precedence===t)a=s;else if(a!==i)break}a?a.parentNode.insertBefore(e,a.nextSibling):(t=n.nodeType===9?n.head:n,t.insertBefore(e,t.firstChild))}function Hm(e,t){e.crossOrigin??=t.crossOrigin,e.referrerPolicy??=t.referrerPolicy,e.title??=t.title}function Um(e,t){e.crossOrigin??=t.crossOrigin,e.referrerPolicy??=t.referrerPolicy,e.integrity??=t.integrity}var Wm=null;function Gm(e,t,n){if(Wm===null){var r=new Map,i=Wm=new Map;i.set(n,r)}else i=Wm,r=i.get(n),r||(r=new Map,i.set(n,r));if(r.has(e))return r;for(r.set(e,null),n=n.getElementsByTagName(e),i=0;i<n.length;i++){var a=n[i];if(!(a[Rt]||a[jt]||e===`link`&&a.getAttribute(`rel`)===`stylesheet`)&&a.namespaceURI!==`http://www.w3.org/2000/svg`){var o=a.getAttribute(t)||``;o=e+o;var s=r.get(o);s?s.push(a):r.set(o,[a])}}return r}function Km(e,t,n){e=e.ownerDocument||e,e.head.insertBefore(n,t===`title`?e.querySelector(`head > title`):null)}function qm(e,t,n){if(n===1||t.itemProp!=null)return!1;switch(e){case`meta`:case`title`:return!0;case`style`:if(typeof t.precedence!=`string`||typeof t.href!=`string`||t.href===``)break;return!0;case`link`:if(typeof t.rel!=`string`||typeof t.href!=`string`||t.href===``||t.onLoad||t.onError)break;switch(t.rel){case`stylesheet`:return e=t.disabled,typeof t.precedence==`string`&&e==null;default:return!0}case`script`:if(t.async&&typeof t.async!=`function`&&typeof t.async!=`symbol`&&!t.onLoad&&!t.onError&&t.src&&typeof t.src==`string`)return!0}return!1}function Jm(e,t){return e===`img`&&t.src!=null&&t.src!==``&&t.onLoad==null&&t.loading!==`lazy`}function Ym(e){return!(e.type===`stylesheet`&&!(e.state.loading&3))}function Xm(e){return(e.width||100)*(e.height||100)*(typeof devicePixelRatio==`number`?devicePixelRatio:1)*.25}function Zm(e,t){typeof t.decode==`function`&&(e.imgCount++,t.complete||(e.imgBytes+=Xm(t),e.suspenseyImages.push(t)),e=rh.bind(e),t.decode().then(e,e))}function Qm(e,t,n,r){if(n.type===`stylesheet`&&(typeof r.media!=`string`||!1!==matchMedia(r.media).matches)&&!(n.state.loading&4)){if(n.instance===null){var i=Pm(r.href),a=t.querySelector(Fm(i));if(a){t=a._p,typeof t==`object`&&t&&typeof t.then==`function`&&(e.count++,e=nh.bind(e),t.then(e,e)),n.state.loading|=4,n.instance=a,Gt(a);return}a=t.ownerDocument||t,r=Im(r),(i=vm.get(i))&&Hm(r,i),a=a.createElement(`link`),Gt(a);var o=a;o._p=new Promise(function(e,t){o.onload=e,o.onerror=t}),np(a,`link`,r),n.instance=a}e.stylesheets===null&&(e.stylesheets=new Map),e.stylesheets.set(n,t),(t=n.state.preload)&&!(n.state.loading&3)&&(e.count++,n=nh.bind(e),t.addEventListener(`load`,n),t.addEventListener(`error`,n))}}var $m=0;function eh(e,t){return e.stylesheets&&e.count===0&&ah(e,e.stylesheets),0<e.count||0<e.imgCount?function(n){var r=setTimeout(function(){if(e.stylesheets&&ah(e,e.stylesheets),e.unsuspend){var t=e.unsuspend;e.unsuspend=null,t()}},6e4+t);0<e.imgBytes&&$m===0&&($m=62500*op());var i=setTimeout(function(){if(e.waitingForImages=!1,e.count===0&&(e.stylesheets&&ah(e,e.stylesheets),e.unsuspend)){var t=e.unsuspend;e.unsuspend=null,t()}},(e.imgBytes>$m?50:800)+t);return e.unsuspend=n,function(){e.unsuspend=null,clearTimeout(r),clearTimeout(i)}}:null}function th(e){if(e.count===0&&(e.imgCount===0||!e.waitingForImages)){if(e.stylesheets)ah(e,e.stylesheets);else if(e.unsuspend){var t=e.unsuspend;e.unsuspend=null,t()}}}function nh(){this.count--,th(this)}function rh(){this.imgCount--,th(this)}var ih=null;function ah(e,t){e.stylesheets=null,e.unsuspend!==null&&(e.count++,ih=new Map,t.forEach(oh,e),ih=null,nh.call(e))}function oh(e,t){if(!(t.state.loading&4)){var n=ih.get(e);if(n)var r=n.get(null);else{n=new Map,ih.set(e,n);for(var i=e.querySelectorAll(`link[data-precedence],style[data-precedence]`),a=0;a<i.length;a++){var o=i[a];(o.nodeName===`LINK`||o.getAttribute(`media`)!==`not all`)&&(n.set(o.dataset.precedence,o),r=o)}r&&n.set(null,r)}i=t.instance,o=i.getAttribute(`data-precedence`),a=n.get(o)||r,a===r&&n.set(null,i),n.set(o,i),this.count++,r=nh.bind(this),i.addEventListener(`load`,r),i.addEventListener(`error`,r),a?a.parentNode.insertBefore(i,a.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(i,e.firstChild)),t.state.loading|=4}}var sh={$$typeof:ce,Provider:null,Consumer:null,_currentValue:we,_currentValue2:we,_threadCount:0};function ch(e,t,n,r,i,a,o,s,c){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=bt(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=bt(0),this.hiddenUpdates=bt(null),this.identifierPrefix=r,this.onUncaughtError=i,this.onCaughtError=a,this.onRecoverableError=o,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=c,this.transitionTypes=null,this.incompleteTransitions=new Map}function lh(e,t,n,r,i,a,o,s,c,l,u,d){return e=new ch(e,t,n,o,c,l,u,d,s),t=1,!0===a&&(t|=24),a=zi(3,null,null,t),e.current=a,a.stateNode=e,t=Ra(),t.refCount++,e.pooledCache=t,t.refCount++,a.memoizedState={element:r,isDehydrated:n,cache:t},xo(a),e}function uh(e){return e?(e=Li,e):Li}function dh(e,t,n,r,i,a){i=uh(i),r.context===null?r.context=i:r.pendingContext=i,r=Co(t),r.payload={element:n},a=a===void 0?null:a,a!==null&&(r.callback=a),n=wo(e,r,t),n!==null&&(Nd(n,e,t),To(n,e,t))}function fh(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function ph(e,t){fh(e,t),(e=e.alternate)&&fh(e,t)}function mh(e){if(e.tag===13||e.tag===31){var t=Pi(e,67108864);t!==null&&Nd(t,e,67108864),ph(e,67108864)}}function hh(e){if(e.tag===13||e.tag===31){var t=Ad();t=Et(t);var n=Pi(e,t);n!==null&&Nd(n,e,t),ph(e,t)}}var gh=!0;function _h(e,t,n,r){var i=D.T;D.T=null;var a=O.p;try{O.p=2,yh(e,t,n,r)}finally{O.p=a,D.T=i}}function vh(e,t,n,r){var i=D.T;D.T=null;var a=O.p;try{O.p=8,yh(e,t,n,r)}finally{O.p=a,D.T=i}}function yh(e,t,n,r){if(gh){var i=bh(r);if(i===null)Gf(e,t,r,xh,n),Mh(e,r);else if(Ph(i,e,t,n,r))r.stopPropagation();else if(Mh(e,r),t&4&&-1<jh.indexOf(e)){for(;i!==null;){var a=Ht(i);if(a!==null)switch(a.tag){case 3:if(a=a.stateNode,a.current.memoizedState.isDehydrated){var o=ht(a.pendingLanes);if(o!==0){var s=a;for(s.pendingLanes|=2,s.entangledLanes|=2;o;){var c=1<<31-ct(o);s.entanglements[1]|=c,o&=~c}Tf(a),!(ed&6)&&(hd=Xe()+500,Ef(0,!1))}}break;case 31:case 13:s=Pi(a,2),s!==null&&Nd(s,a,2),Rd(),ph(a,2)}if(a=bh(r),a===null&&Gf(e,t,r,xh,n),a===i)break;i=a}i!==null&&r.stopPropagation()}else Gf(e,t,r,null,n)}}function bh(e){return e=An(e),Sh(e)}var xh=null;function Sh(e){if(xh=null,e=Vt(e),e!==null){var t=o(e);if(t===null)e=null;else{var n=t.tag;if(n===13){if(e=s(t),e!==null)return e;e=null}else if(n===31){if(e=c(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null)}}return xh=e,null}function Ch(e){switch(e){case`beforetoggle`:case`cancel`:case`click`:case`close`:case`contextmenu`:case`copy`:case`cut`:case`auxclick`:case`dblclick`:case`dragend`:case`dragstart`:case`drop`:case`focusin`:case`focusout`:case`input`:case`invalid`:case`keydown`:case`keypress`:case`keyup`:case`mousedown`:case`mouseup`:case`paste`:case`pause`:case`play`:case`pointercancel`:case`pointerdown`:case`pointerup`:case`ratechange`:case`reset`:case`seeked`:case`submit`:case`toggle`:case`touchcancel`:case`touchend`:case`touchstart`:case`volumechange`:case`change`:case`selectionchange`:case`textInput`:case`compositionstart`:case`compositionend`:case`compositionupdate`:case`beforeblur`:case`afterblur`:case`beforeinput`:case`blur`:case`fullscreenchange`:case`fullscreenerror`:case`focus`:case`hashchange`:case`popstate`:case`select`:case`selectstart`:return 2;case`drag`:case`dragenter`:case`dragexit`:case`dragleave`:case`dragover`:case`mousemove`:case`mouseout`:case`mouseover`:case`pointermove`:case`pointerout`:case`pointerover`:case`resize`:case`scroll`:case`touchmove`:case`wheel`:case`mouseenter`:case`mouseleave`:case`pointerenter`:case`pointerleave`:return 8;case`message`:switch(Ze()){case Qe:return 2;case $e:return 8;case et:case tt:return 32;case nt:return 268435456;default:return 32}default:return 32}}var wh=!1,Th=null,Eh=null,Dh=null,Oh=new Map,kh=new Map,Ah=[],jh=`mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset`.split(` `);function Mh(e,t){switch(e){case`focusin`:case`focusout`:Th=null;break;case`dragenter`:case`dragleave`:Eh=null;break;case`mouseover`:case`mouseout`:Dh=null;break;case`pointerover`:case`pointerout`:Oh.delete(t.pointerId);break;case`gotpointercapture`:case`lostpointercapture`:kh.delete(t.pointerId)}}function Nh(e,t,n,r,i,a){return e===null||e.nativeEvent!==a?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:a,targetContainers:[i]},t!==null&&(t=Ht(t),t!==null&&mh(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,i!==null&&t.indexOf(i)===-1&&t.push(i),e)}function Ph(e,t,n,r,i){switch(t){case`focusin`:return Th=Nh(Th,e,t,n,r,i),!0;case`dragenter`:return Eh=Nh(Eh,e,t,n,r,i),!0;case`mouseover`:return Dh=Nh(Dh,e,t,n,r,i),!0;case`pointerover`:var a=i.pointerId;return Oh.set(a,Nh(Oh.get(a)||null,e,t,n,r,i)),!0;case`gotpointercapture`:return a=i.pointerId,kh.set(a,Nh(kh.get(a)||null,e,t,n,r,i)),!0}return!1}function Fh(e){var t=Vt(e.target);if(t!==null){var n=o(t);if(n!==null){if(t=n.tag,t===13){if(t=s(n),t!==null){e.blockedOn=t,kt(e.priority,function(){hh(n)});return}}else if(t===31){if(t=c(n),t!==null){e.blockedOn=t,kt(e.priority,function(){hh(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Ih(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=bh(e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);kn=r,n.target.dispatchEvent(r),kn=null}else return t=Ht(n),t!==null&&mh(t),e.blockedOn=n,!1;t.shift()}return!0}function Lh(e,t,n){Ih(e)&&n.delete(t)}function Rh(){wh=!1,Th!==null&&Ih(Th)&&(Th=null),Eh!==null&&Ih(Eh)&&(Eh=null),Dh!==null&&Ih(Dh)&&(Dh=null),Oh.forEach(Lh),kh.forEach(Lh)}function zh(e,n){e.blockedOn===n&&(e.blockedOn=null,wh||(wh=!0,t.unstable_scheduleCallback(t.unstable_NormalPriority,Rh)))}var Bh=null;function Vh(e){Bh!==e&&(Bh=e,t.unstable_scheduleCallback(t.unstable_NormalPriority,function(){Bh===e&&(Bh=null);for(var t=0;t<e.length;t+=3){var n=e[t],r=e[t+1],i=e[t+2];if(typeof r!=`function`){if(Sh(r||n)===null)continue;break}var a=Ht(n);a!==null&&(e.splice(t,3),t-=3,ic(a,{pending:!0,data:i,method:n.method,action:r},r,i))}}))}function Hh(e){function t(t){return zh(t,e)}Th!==null&&zh(Th,e),Eh!==null&&zh(Eh,e),Dh!==null&&zh(Dh,e),Oh.forEach(t),kh.forEach(t);for(var n=0;n<Ah.length;n++){var r=Ah[n];r.blockedOn===e&&(r.blockedOn=null)}for(;0<Ah.length&&(n=Ah[0],n.blockedOn===null);)Fh(n),n.blockedOn===null&&Ah.shift();if(n=(e.ownerDocument||e).$$reactFormReplay,n!=null)for(r=0;r<n.length;r+=3){var i=n[r],a=n[r+1],o=i[Mt]||null;if(typeof a==`function`)o||Vh(n);else if(o){var s=null;if(a&&a.hasAttribute(`formAction`)){if(i=a,o=a[Mt]||null)s=o.formAction;else if(Sh(i)!==null)continue}else s=o.action;typeof s==`function`?n[r+1]=s:(n.splice(r,3),r-=3),Vh(n)}}}function Uh(){function e(e){e.canIntercept&&e.info===`react-transition`&&e.intercept({handler:function(){return new Promise(function(e){return i=e})},focusReset:`manual`,scroll:`manual`})}function t(){i!==null&&(i(),i=null),r||setTimeout(n,20)}function n(){if(!r&&!navigation.transition){var e=navigation.currentEntry;e&&e.url!=null&&navigation.navigate(e.url,{state:e.getState(),info:`react-transition`,history:`replace`})}}if(typeof navigation==`object`){var r=!1,i=null;return navigation.addEventListener(`navigate`,e),navigation.addEventListener(`navigatesuccess`,t),navigation.addEventListener(`navigateerror`,t),setTimeout(n,100),function(){r=!0,navigation.removeEventListener(`navigate`,e),navigation.removeEventListener(`navigatesuccess`,t),navigation.removeEventListener(`navigateerror`,t),i!==null&&(i(),i=null)}}}function Wh(e){this._internalRoot=e}Gh.prototype.render=Wh.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(i(409));var n=t.current;dh(n,Ad(),e,t,null,null)},Gh.prototype.unmount=Wh.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;dh(e.current,2,null,e,null,null),Rd(),t[Nt]=null}};function Gh(e){this._internalRoot=e}Gh.prototype.unstable_scheduleHydration=function(e){if(e){var t=Ot();e={blockedOn:null,target:e,priority:t};for(var n=0;n<Ah.length&&t!==0&&t<Ah[n].priority;n++);Ah.splice(n,0,e),n===0&&Fh(e)}};var Kh=n.version;if(Kh!==`19.3.0`)throw Error(i(527,Kh,`19.3.0`));O.findDOMNode=function(e){var t=e._reactInternals;if(t===void 0)throw typeof e.render==`function`?Error(i(188)):(e=Object.keys(e).join(`,`),Error(i(268,e)));return e=d(t),e=e===null?null:p(e),e=e===null?null:e.stateNode,e};var qh={bundleType:0,version:`19.3.0`,rendererPackageName:`react-dom`,currentDispatcherRef:D,reconcilerVersion:`19.3.0`};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<`u`){var Jh=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Jh.isDisabled&&Jh.supportsFiber)try{at=Jh.inject(qh),ot=Jh}catch{}}e.createRoot=function(e,t){if(!a(e))throw Error(i(299));var n=!1,r=``,o=Ec,s=Dc,c=Oc;return t!=null&&(!0===t.unstable_strictMode&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onUncaughtError!==void 0&&(o=t.onUncaughtError),t.onCaughtError!==void 0&&(s=t.onCaughtError),t.onRecoverableError!==void 0&&(c=t.onRecoverableError)),t=lh(e,1,!1,null,null,n,r,null,o,s,c,Uh),e[Nt]=t.current,Uf(e),new Wh(t)}})),g=o(((e,t)=>{function n(){if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<`u`&&typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE==`function`)try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n)}catch(e){console.error(e)}}n(),t.exports=h()})),_=o(((e,t)=>{(function(){var n,r=`Expected a function`,i=`__lodash_hash_undefined__`,a=`__lodash_placeholder__`,o=1,s=2,c=8,l=16,u=32,d=64,f=128,p=256,m=512,h=1/0,g=9007199254740991,_=17976931348623157e292,v=NaN,y=4294967295,b=y-1,x=y>>>1,S=[[`ary`,f],[`bind`,o],[`bindKey`,s],[`curry`,c],[`curryRight`,l],[`flip`,m],[`partial`,u],[`partialRight`,d],[`rearg`,p]],C=`[object Arguments]`,ee=`[object Array]`,w=`[object AsyncFunction]`,te=`[object Boolean]`,T=`[object Date]`,ne=`[object DOMException]`,E=`[object Error]`,re=`[object Function]`,ie=`[object GeneratorFunction]`,ae=`[object Map]`,oe=`[object Number]`,se=`[object Null]`,ce=`[object Object]`,le=`[object Promise]`,ue=`[object Proxy]`,de=`[object RegExp]`,fe=`[object Set]`,pe=`[object String]`,me=`[object Symbol]`,he=`[object Undefined]`,ge=`[object WeakMap]`,_e=`[object WeakSet]`,ve=`[object ArrayBuffer]`,ye=`[object DataView]`,be=`[object Float32Array]`,xe=`[object Float64Array]`,Se=`[object Int8Array]`,Ce=`[object Int16Array]`,D=`[object Int32Array]`,O=`[object Uint8Array]`,we=`[object Uint8ClampedArray]`,Te=`[object Uint16Array]`,Ee=`[object Uint32Array]`,De=/\b__p \+= '';/g,Oe=/\b(__p \+=) '' \+/g,ke=/(__e\(.*?\)|\b__t\)) \+\n'';/g,Ae=/&(?:amp|lt|gt|quot|#39);/g,je=/[&<>"']/g,Me=RegExp(Ae.source),Ne=RegExp(je.source),Pe=/<%-([\s\S]+?)%>/g,Fe=/<%([\s\S]+?)%>/g,Ie=/<%=([\s\S]+?)%>/g,Le=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,Re=/^\w*$/,ze=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,Be=/[\\^$.*+?()[\]{}|]/g,Ve=RegExp(Be.source),He=/^\s+/,Ue=/\s/,We=/\{(?:\n\/\* \[wrapped with .+\] \*\/)?\n?/,Ge=/\{\n\/\* \[wrapped with (.+)\] \*/,Ke=/,? & /,qe=/[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g,Je=/[()=,{}\[\]\/\s]/,Ye=/\\(\\)?/g,Xe=/\$\{([^\\}]*(?:\\.[^\\}]*)*)\}/g,Ze=/\w*$/,Qe=/^[-+]0x[0-9a-f]+$/i,$e=/^0b[01]+$/i,et=/^\[object .+?Constructor\]$/,tt=/^0o[0-7]+$/i,nt=/^(?:0|[1-9]\d*)$/,rt=/[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g,it=/($^)/,at=/['\n\r\u2028\u2029\\]/g,ot=`\\ud800-\\udfff`,st=`\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff`,ct=`\\u2700-\\u27bf`,lt=`a-z\\xdf-\\xf6\\xf8-\\xff`,ut=`\\xac\\xb1\\xd7\\xf7`,dt=`\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf`,ft=`\\u2000-\\u206f`,pt=` \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000`,mt=`A-Z\\xc0-\\xd6\\xd8-\\xde`,ht=`\\ufe0e\\ufe0f`,gt=ut+dt+ft+pt,_t=`['’]`,k=`[`+ot+`]`,vt=`[`+gt+`]`,yt=`[`+st+`]`,bt=`\\d+`,xt=`[`+ct+`]`,St=`[`+lt+`]`,Ct=`[^`+ot+gt+bt+ct+lt+mt+`]`,wt=`\\ud83c[\\udffb-\\udfff]`,Tt=`(?:`+yt+`|`+wt+`)`,Et=`[^`+ot+`]`,Dt=`(?:\\ud83c[\\udde6-\\uddff]){2}`,Ot=`[\\ud800-\\udbff][\\udc00-\\udfff]`,kt=`[`+mt+`]`,At=`\\u200d`,jt=`(?:`+St+`|`+Ct+`)`,Mt=`(?:`+kt+`|`+Ct+`)`,Nt=`(?:`+_t+`(?:d|ll|m|re|s|t|ve))?`,Pt=`(?:`+_t+`(?:D|LL|M|RE|S|T|VE))?`,Ft=Tt+`?`,It=`[`+ht+`]?`,Lt=`(?:`+At+`(?:`+[Et,Dt,Ot].join(`|`)+`)`+It+Ft+`)*`,Rt=`\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])`,zt=`\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])`,Bt=It+Ft+Lt,Vt=`(?:`+[xt,Dt,Ot].join(`|`)+`)`+Bt,Ht=`(?:`+[Et+yt+`?`,yt,Dt,Ot,k].join(`|`)+`)`,Ut=RegExp(_t,`g`),Wt=RegExp(yt,`g`),Gt=RegExp(wt+`(?=`+wt+`)|`+Ht+Bt,`g`),Kt=RegExp([kt+`?`+St+`+`+Nt+`(?=`+[vt,kt,`$`].join(`|`)+`)`,Mt+`+`+Pt+`(?=`+[vt,kt+jt,`$`].join(`|`)+`)`,kt+`?`+jt+`+`+Nt,kt+`+`+Pt,zt,Rt,bt,Vt].join(`|`),`g`),qt=RegExp(`[`+At+ot+st+ht+`]`),Jt=/[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/,Yt=`Array.Buffer.DataView.Date.Error.Float32Array.Float64Array.Function.Int8Array.Int16Array.Int32Array.Map.Math.Object.Promise.RegExp.Set.String.Symbol.TypeError.Uint8Array.Uint8ClampedArray.Uint16Array.Uint32Array.WeakMap._.clearTimeout.isFinite.parseInt.setTimeout`.split(`.`),Xt=-1,Zt={};Zt[be]=Zt[xe]=Zt[Se]=Zt[Ce]=Zt[D]=Zt[O]=Zt[we]=Zt[Te]=Zt[Ee]=!0,Zt[C]=Zt[ee]=Zt[ve]=Zt[te]=Zt[ye]=Zt[T]=Zt[E]=Zt[re]=Zt[ae]=Zt[oe]=Zt[ce]=Zt[de]=Zt[fe]=Zt[pe]=Zt[ge]=!1;var Qt={};Qt[C]=Qt[ee]=Qt[ve]=Qt[ye]=Qt[te]=Qt[T]=Qt[be]=Qt[xe]=Qt[Se]=Qt[Ce]=Qt[D]=Qt[ae]=Qt[oe]=Qt[ce]=Qt[de]=Qt[fe]=Qt[pe]=Qt[me]=Qt[O]=Qt[we]=Qt[Te]=Qt[Ee]=!0,Qt[E]=Qt[re]=Qt[ge]=!1;var $t={À:`A`,Á:`A`,Â:`A`,Ã:`A`,Ä:`A`,Å:`A`,à:`a`,á:`a`,â:`a`,ã:`a`,ä:`a`,å:`a`,Ç:`C`,ç:`c`,Ð:`D`,ð:`d`,È:`E`,É:`E`,Ê:`E`,Ë:`E`,è:`e`,é:`e`,ê:`e`,ë:`e`,Ì:`I`,Í:`I`,Î:`I`,Ï:`I`,ì:`i`,í:`i`,î:`i`,ï:`i`,Ñ:`N`,ñ:`n`,Ò:`O`,Ó:`O`,Ô:`O`,Õ:`O`,Ö:`O`,Ø:`O`,ò:`o`,ó:`o`,ô:`o`,õ:`o`,ö:`o`,ø:`o`,Ù:`U`,Ú:`U`,Û:`U`,Ü:`U`,ù:`u`,ú:`u`,û:`u`,ü:`u`,Ý:`Y`,ý:`y`,ÿ:`y`,Æ:`Ae`,æ:`ae`,Þ:`Th`,þ:`th`,ß:`ss`,Ā:`A`,Ă:`A`,Ą:`A`,ā:`a`,ă:`a`,ą:`a`,Ć:`C`,Ĉ:`C`,Ċ:`C`,Č:`C`,ć:`c`,ĉ:`c`,ċ:`c`,č:`c`,Ď:`D`,Đ:`D`,ď:`d`,đ:`d`,Ē:`E`,Ĕ:`E`,Ė:`E`,Ę:`E`,Ě:`E`,ē:`e`,ĕ:`e`,ė:`e`,ę:`e`,ě:`e`,Ĝ:`G`,Ğ:`G`,Ġ:`G`,Ģ:`G`,ĝ:`g`,ğ:`g`,ġ:`g`,ģ:`g`,Ĥ:`H`,Ħ:`H`,ĥ:`h`,ħ:`h`,Ĩ:`I`,Ī:`I`,Ĭ:`I`,Į:`I`,İ:`I`,ĩ:`i`,ī:`i`,ĭ:`i`,į:`i`,ı:`i`,Ĵ:`J`,ĵ:`j`,Ķ:`K`,ķ:`k`,ĸ:`k`,Ĺ:`L`,Ļ:`L`,Ľ:`L`,Ŀ:`L`,Ł:`L`,ĺ:`l`,ļ:`l`,ľ:`l`,ŀ:`l`,ł:`l`,Ń:`N`,Ņ:`N`,Ň:`N`,Ŋ:`N`,ń:`n`,ņ:`n`,ň:`n`,ŋ:`n`,Ō:`O`,Ŏ:`O`,Ő:`O`,ō:`o`,ŏ:`o`,ő:`o`,Ŕ:`R`,Ŗ:`R`,Ř:`R`,ŕ:`r`,ŗ:`r`,ř:`r`,Ś:`S`,Ŝ:`S`,Ş:`S`,Š:`S`,ś:`s`,ŝ:`s`,ş:`s`,š:`s`,Ţ:`T`,Ť:`T`,Ŧ:`T`,ţ:`t`,ť:`t`,ŧ:`t`,Ũ:`U`,Ū:`U`,Ŭ:`U`,Ů:`U`,Ű:`U`,Ų:`U`,ũ:`u`,ū:`u`,ŭ:`u`,ů:`u`,ű:`u`,ų:`u`,Ŵ:`W`,ŵ:`w`,Ŷ:`Y`,ŷ:`y`,Ÿ:`Y`,Ź:`Z`,Ż:`Z`,Ž:`Z`,ź:`z`,ż:`z`,ž:`z`,Ĳ:`IJ`,ĳ:`ij`,Œ:`Oe`,œ:`oe`,ŉ:`'n`,ſ:`s`},en={"&":`&amp;`,"<":`&lt;`,">":`&gt;`,'"':`&quot;`,"'":`&#39;`},tn={"&amp;":`&`,"&lt;":`<`,"&gt;":`>`,"&quot;":`"`,"&#39;":`'`},nn={"\\":`\\`,"'":`'`,"\n":`n`,"\r":`r`,"\u2028":`u2028`,"\u2029":`u2029`},rn=parseFloat,an=parseInt,on=typeof global==`object`&&global&&global.Object===Object&&global,sn=typeof self==`object`&&self&&self.Object===Object&&self,cn=on||sn||Function(`return this`)(),ln=typeof e==`object`&&e&&!e.nodeType&&e,un=ln&&typeof t==`object`&&t&&!t.nodeType&&t,dn=un&&un.exports===ln,fn=dn&&on.process,pn=function(){try{return un&&un.require&&un.require(`util`).types||fn&&fn.binding&&fn.binding(`util`)}catch{}}(),mn=pn&&pn.isArrayBuffer,hn=pn&&pn.isDate,gn=pn&&pn.isMap,_n=pn&&pn.isRegExp,vn=pn&&pn.isSet,yn=pn&&pn.isTypedArray;function bn(e,t,n){switch(n.length){case 0:return e.call(t);case 1:return e.call(t,n[0]);case 2:return e.call(t,n[0],n[1]);case 3:return e.call(t,n[0],n[1],n[2])}return e.apply(t,n)}function xn(e,t,n,r){for(var i=-1,a=e==null?0:e.length;++i<a;){var o=e[i];t(r,o,n(o),e)}return r}function Sn(e,t){for(var n=-1,r=e==null?0:e.length;++n<r&&t(e[n],n,e)!==!1;);return e}function Cn(e,t){for(var n=e==null?0:e.length;n--&&t(e[n],n,e)!==!1;);return e}function wn(e,t){for(var n=-1,r=e==null?0:e.length;++n<r;)if(!t(e[n],n,e))return!1;return!0}function Tn(e,t){for(var n=-1,r=e==null?0:e.length,i=0,a=[];++n<r;){var o=e[n];t(o,n,e)&&(a[i++]=o)}return a}function En(e,t){return!!(e!=null&&e.length)&&Rn(e,t,0)>-1}function Dn(e,t,n){for(var r=-1,i=e==null?0:e.length;++r<i;)if(n(t,e[r]))return!0;return!1}function On(e,t){for(var n=-1,r=e==null?0:e.length,i=Array(r);++n<r;)i[n]=t(e[n],n,e);return i}function kn(e,t){for(var n=-1,r=t.length,i=e.length;++n<r;)e[i+n]=t[n];return e}function An(e,t,n,r){var i=-1,a=e==null?0:e.length;for(r&&a&&(n=e[++i]);++i<a;)n=t(n,e[i],i,e);return n}function jn(e,t,n,r){var i=e==null?0:e.length;for(r&&i&&(n=e[--i]);i--;)n=t(n,e[i],i,e);return n}function Mn(e,t){for(var n=-1,r=e==null?0:e.length;++n<r;)if(t(e[n],n,e))return!0;return!1}var Nn=Hn(`length`);function Pn(e){return e.split(``)}function Fn(e){return e.match(qe)||[]}function In(e,t,n){var r;return n(e,function(e,n,i){if(t(e,n,i))return r=n,!1}),r}function Ln(e,t,n,r){for(var i=e.length,a=n+(r?1:-1);r?a--:++a<i;)if(t(e[a],a,e))return a;return-1}function Rn(e,t,n){return t===t?pr(e,t,n):Ln(e,Bn,n)}function zn(e,t,n,r){for(var i=n-1,a=e.length;++i<a;)if(r(e[i],t))return i;return-1}function Bn(e){return e!==e}function Vn(e,t){var n=e==null?0:e.length;return n?Gn(e,t)/n:v}function Hn(e){return function(t){return t==null?n:t[e]}}function Un(e){return function(t){return e==null?n:e[t]}}function Wn(e,t,n,r,i){return i(e,function(e,i,a){n=r?(r=!1,e):t(n,e,i,a)}),n}function A(e,t){var n=e.length;for(e.sort(t);n--;)e[n]=e[n].value;return e}function Gn(e,t){for(var r,i=-1,a=e.length;++i<a;){var o=t(e[i]);o!==n&&(r=r===n?o:r+o)}return r}function Kn(e,t){for(var n=-1,r=Array(e);++n<e;)r[n]=t(n);return r}function qn(e,t){return On(t,function(t){return[t,e[t]]})}function Jn(e){return e&&e.slice(0,_r(e)+1).replace(He,``)}function Yn(e){return function(t){return e(t)}}function Xn(e,t){return On(t,function(t){return e[t]})}function Zn(e,t){return e.has(t)}function Qn(e,t){for(var n=-1,r=e.length;++n<r&&Rn(t,e[n],0)>-1;);return n}function $n(e,t){for(var n=e.length;n--&&Rn(t,e[n],0)>-1;);return n}function er(e,t){for(var n=e.length,r=0;n--;)e[n]===t&&++r;return r}var tr=Un($t),nr=Un(en);function rr(e){return`\\`+nn[e]}function ir(e,t){return e==null?n:e[t]}function ar(e){return qt.test(e)}function or(e){return Jt.test(e)}function sr(e){for(var t,n=[];!(t=e.next()).done;)n.push(t.value);return n}function cr(e){var t=-1,n=Array(e.size);return e.forEach(function(e,r){n[++t]=[r,e]}),n}function lr(e,t){return function(n){return e(t(n))}}function ur(e,t){for(var n=-1,r=e.length,i=0,o=[];++n<r;){var s=e[n];(s===t||s===a)&&(e[n]=a,o[i++]=n)}return o}function dr(e){var t=-1,n=Array(e.size);return e.forEach(function(e){n[++t]=e}),n}function fr(e){var t=-1,n=Array(e.size);return e.forEach(function(e){n[++t]=[e,e]}),n}function pr(e,t,n){for(var r=n-1,i=e.length;++r<i;)if(e[r]===t)return r;return-1}function mr(e,t,n){for(var r=n+1;r--;)if(e[r]===t)return r;return r}function hr(e){return ar(e)?yr(e):Nn(e)}function gr(e){return ar(e)?br(e):Pn(e)}function _r(e){for(var t=e.length;t--&&Ue.test(e.charAt(t)););return t}var vr=Un(tn);function yr(e){for(var t=Gt.lastIndex=0;Gt.test(e);)++t;return t}function br(e){return e.match(Gt)||[]}function xr(e){return e.match(Kt)||[]}var Sr=(function e(t){t=t==null?cn:Sr.defaults(cn.Object(),t,Sr.pick(cn,Yt));var Ue=t.Array,qe=t.Date,ot=t.Error,st=t.Function,ct=t.Math,lt=t.Object,ut=t.RegExp,dt=t.String,ft=t.TypeError,pt=Ue.prototype,mt=st.prototype,ht=lt.prototype,gt=t[`__core-js_shared__`],_t=mt.toString,k=ht.hasOwnProperty,vt=0,yt=function(){var e=/[^.]+$/.exec(gt&&gt.keys&&gt.keys.IE_PROTO||``);return e?`Symbol(src)_1.`+e:``}(),bt=ht.toString,xt=_t.call(lt),St=cn._,Ct=ut(`^`+_t.call(k).replace(Be,`\\$&`).replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,`$1.*?`)+`$`),wt=dn?t.Buffer:n,Tt=t.Symbol,Et=t.Uint8Array,Dt=wt?wt.allocUnsafe:n,Ot=lr(lt.getPrototypeOf,lt),kt=lt.create,At=ht.propertyIsEnumerable,jt=pt.splice,Mt=Tt?Tt.isConcatSpreadable:n,Nt=Tt?Tt.iterator:n,Pt=Tt?Tt.toStringTag:n,Ft=function(){try{var e=Ko(lt,`defineProperty`);return e({},``,{}),e}catch{}}(),It=t.clearTimeout!==cn.clearTimeout&&t.clearTimeout,Lt=qe&&qe.now!==cn.Date.now&&qe.now,Rt=t.setTimeout!==cn.setTimeout&&t.setTimeout,zt=ct.ceil,Bt=ct.floor,Vt=lt.getOwnPropertySymbols,Ht=wt?wt.isBuffer:n,Gt=t.isFinite,Kt=pt.join,qt=lr(lt.keys,lt),Jt=ct.max,$t=ct.min,en=qe.now,tn=t.parseInt,nn=ct.random,on=pt.reverse,sn=Ko(t,`DataView`),ln=Ko(t,`Map`),un=Ko(t,`Promise`),fn=Ko(t,`Set`),pn=Ko(t,`WeakMap`),Nn=Ko(lt,`create`),Pn=pn&&new pn,Un={},pr=Os(sn),yr=Os(ln),br=Os(un),Cr=Os(fn),wr=Os(pn),Tr=Tt?Tt.prototype:n,Er=Tr?Tr.valueOf:n,Dr=Tr?Tr.toString:n;function j(e){if(yu(e)&&!V(e)&&!(e instanceof M)){if(e instanceof Ar)return e;if(k.call(e,`__wrapped__`))return As(e)}return new Ar(e)}var Or=function(){function e(){}return function(t){if(!vu(t))return{};if(kt)return kt(t);e.prototype=t;var r=new e;return e.prototype=n,r}}();function kr(){}function Ar(e,t){this.__wrapped__=e,this.__actions__=[],this.__chain__=!!t,this.__index__=0,this.__values__=n}j.templateSettings={escape:Pe,evaluate:Fe,interpolate:Ie,variable:``,imports:{_:j}},j.prototype=kr.prototype,j.prototype.constructor=j,Ar.prototype=Or(kr.prototype),Ar.prototype.constructor=Ar;function M(e){this.__wrapped__=e,this.__actions__=[],this.__dir__=1,this.__filtered__=!1,this.__iteratees__=[],this.__takeCount__=y,this.__views__=[]}function jr(){var e=new M(this.__wrapped__);return e.__actions__=io(this.__actions__),e.__dir__=this.__dir__,e.__filtered__=this.__filtered__,e.__iteratees__=io(this.__iteratees__),e.__takeCount__=this.__takeCount__,e.__views__=io(this.__views__),e}function Mr(){if(this.__filtered__){var e=new M(this);e.__dir__=-1,e.__filtered__=!0}else e=this.clone(),e.__dir__*=-1;return e}function Nr(){var e=this.__wrapped__.value(),t=this.__dir__,n=V(e),r=t<0,i=n?e.length:0,a=Yo(0,i,this.__views__),o=a.start,s=a.end,c=s-o,l=r?s:o-1,u=this.__iteratees__,d=u.length,f=0,p=$t(c,this.__takeCount__);if(!n||!r&&i==c&&p==c)return za(e,this.__actions__);var m=[];outer:for(;c--&&f<p;){l+=t;for(var h=-1,g=e[l];++h<d;){var _=u[h],v=_.iteratee,y=_.type,b=v(g);if(y==2)g=b;else if(!b){if(y==1)continue outer;break outer}}m[f++]=g}return m}M.prototype=Or(kr.prototype),M.prototype.constructor=M;function Pr(e){var t=-1,n=e==null?0:e.length;for(this.clear();++t<n;){var r=e[t];this.set(r[0],r[1])}}function Fr(){this.__data__=Nn?Nn(null):{},this.size=0}function Ir(e){var t=this.has(e)&&delete this.__data__[e];return this.size-=+!!t,t}function Lr(e){var t=this.__data__;if(Nn){var r=t[e];return r===i?n:r}return k.call(t,e)?t[e]:n}function Rr(e){var t=this.__data__;return Nn?t[e]!==n:k.call(t,e)}function zr(e,t){var r=this.__data__;return this.size+=+!this.has(e),r[e]=Nn&&t===n?i:t,this}Pr.prototype.clear=Fr,Pr.prototype.delete=Ir,Pr.prototype.get=Lr,Pr.prototype.has=Rr,Pr.prototype.set=zr;function Br(e){var t=-1,n=e==null?0:e.length;for(this.clear();++t<n;){var r=e[t];this.set(r[0],r[1])}}function Vr(){this.__data__=[],this.size=0}function Hr(e){var t=this.__data__,n=pi(t,e);return n<0?!1:(n==t.length-1?t.pop():jt.call(t,n,1),--this.size,!0)}function Ur(e){var t=this.__data__,r=pi(t,e);return r<0?n:t[r][1]}function Wr(e){return pi(this.__data__,e)>-1}function Gr(e,t){var n=this.__data__,r=pi(n,e);return r<0?(++this.size,n.push([e,t])):n[r][1]=t,this}Br.prototype.clear=Vr,Br.prototype.delete=Hr,Br.prototype.get=Ur,Br.prototype.has=Wr,Br.prototype.set=Gr;function Kr(e){var t=-1,n=e==null?0:e.length;for(this.clear();++t<n;){var r=e[t];this.set(r[0],r[1])}}function qr(){this.size=0,this.__data__={hash:new Pr,map:new(ln||Br),string:new Pr}}function Jr(e){var t=Wo(this,e).delete(e);return this.size-=+!!t,t}function Yr(e){return Wo(this,e).get(e)}function Xr(e){return Wo(this,e).has(e)}function Zr(e,t){var n=Wo(this,e),r=n.size;return n.set(e,t),this.size+=n.size==r?0:1,this}Kr.prototype.clear=qr,Kr.prototype.delete=Jr,Kr.prototype.get=Yr,Kr.prototype.has=Xr,Kr.prototype.set=Zr;function Qr(e){var t=-1,n=e==null?0:e.length;for(this.__data__=new Kr;++t<n;)this.add(e[t])}function $r(e){return this.__data__.set(e,i),this}function ei(e){return this.__data__.has(e)}Qr.prototype.add=Qr.prototype.push=$r,Qr.prototype.has=ei;function ti(e){var t=this.__data__=new Br(e);this.size=t.size}function ni(){this.__data__=new Br,this.size=0}function ri(e){var t=this.__data__,n=t.delete(e);return this.size=t.size,n}function ii(e){return this.__data__.get(e)}function ai(e){return this.__data__.has(e)}function oi(e,t){var n=this.__data__;if(n instanceof Br){var r=n.__data__;if(!ln||r.length<199)return r.push([e,t]),this.size=++n.size,this;n=this.__data__=new Kr(r)}return n.set(e,t),this.size=n.size,this}ti.prototype.clear=ni,ti.prototype.delete=ri,ti.prototype.get=ii,ti.prototype.has=ai,ti.prototype.set=oi;function si(e,t){var n=V(e),r=!n&&nu(e),i=!n&&!r&&su(e),a=!n&&!r&&!i&&Pu(e),o=n||r||i||a,s=o?Kn(e.length,dt):[],c=s.length;for(var l in e)(t||k.call(e,l))&&!(o&&(l==`length`||i&&(l==`offset`||l==`parent`)||a&&(l==`buffer`||l==`byteLength`||l==`byteOffset`)||rs(l,c)))&&s.push(l);return s}function ci(e){var t=e.length;return t?e[ya(0,t-1)]:n}function li(e,t){return Ts(io(e),yi(t,0,e.length))}function ui(e){return Ts(io(e))}function di(e,t,r){(r!==n&&!$l(e[t],r)||r===n&&!(t in e))&&_i(e,t,r)}function fi(e,t,r){var i=e[t];(!(k.call(e,t)&&$l(i,r))||r===n&&!(t in e))&&_i(e,t,r)}function pi(e,t){for(var n=e.length;n--;)if($l(e[n][0],t))return n;return-1}function mi(e,t,n,r){return Ti(e,function(e,i,a){t(r,e,n(e),a)}),r}function hi(e,t){return e&&ao(t,od(t),e)}function gi(e,t){return e&&ao(t,sd(t),e)}function _i(e,t,n){t==`__proto__`&&Ft?Ft(e,t,{configurable:!0,enumerable:!0,value:n,writable:!0}):e[t]=n}function vi(e,t){for(var r=-1,i=t.length,a=Ue(i),o=e==null;++r<i;)a[r]=o?n:rd(e,t[r]);return a}function yi(e,t,r){return e===e&&(r!==n&&(e=e<=r?e:r),t!==n&&(e=e>=t?e:t)),e}function bi(e,t,r,i,a,o){var s,c=t&1,l=t&2,u=t&4;if(r&&(s=a?r(e,i,a,o):r(e)),s!==n)return s;if(!vu(e))return e;var d=V(e);if(d){if(s=Qo(e),!c)return io(e,s)}else{var f=Jo(e),p=f==re||f==ie;if(su(e))return Ja(e,c);if(f==ce||f==C||p&&!a){if(s=l||p?{}:$o(e),!c)return l?so(e,gi(s,e)):oo(e,hi(s,e))}else{if(!Qt[f])return a?e:{};s=es(e,f,c)}}o||=new ti;var m=o.get(e);if(m)return m;o.set(e,s),ju(e)?e.forEach(function(n){s.add(bi(n,t,r,n,e,o))}):bu(e)&&e.forEach(function(n,i){s.set(i,bi(n,t,r,i,e,o))});var h=d?n:(u?l?Vo:Bo:l?sd:od)(e);return Sn(h||e,function(n,i){h&&(i=n,n=e[i]),fi(s,i,bi(n,t,r,i,e,o))}),s}function xi(e){var t=od(e);return function(n){return Si(n,e,t)}}function Si(e,t,r){var i=r.length;if(e==null)return!i;for(e=lt(e);i--;){var a=r[i],o=t[a],s=e[a];if(s===n&&!(a in e)||!o(s))return!1}return!0}function Ci(e,t,i){if(typeof e!=`function`)throw new ft(r);return xs(function(){e.apply(n,i)},t)}function wi(e,t,n,r){var i=-1,a=En,o=!0,s=e.length,c=[],l=t.length;if(!s)return c;n&&(t=On(t,Yn(n))),r?(a=Dn,o=!1):t.length>=200&&(a=Zn,o=!1,t=new Qr(t));outer:for(;++i<s;){var u=e[i],d=n==null?u:n(u);if(u=r||u!==0?u:0,o&&d===d){for(var f=l;f--;)if(t[f]===d)continue outer;c.push(u)}else a(t,d,r)||c.push(u)}return c}var Ti=uo(Pi),Ei=uo(Fi,!0);function Di(e,t){var n=!0;return Ti(e,function(e,r,i){return n=!!t(e,r,i),n}),n}function Oi(e,t,r){for(var i=-1,a=e.length;++i<a;){var o=e[i],s=t(o);if(s!=null&&(c===n?s===s&&!Nu(s):r(s,c)))var c=s,l=o}return l}function ki(e,t,r,i){var a=e.length;for(r=H(r),r<0&&(r=-r>a?0:a+r),i=i===n||i>a?a:H(i),i<0&&(i+=a),i=r>i?0:Hu(i);r<i;)e[r++]=t;return e}function Ai(e,t){var n=[];return Ti(e,function(e,r,i){t(e,r,i)&&n.push(e)}),n}function ji(e,t,n,r,i){var a=-1,o=e.length;for(n||=ns,i||=[];++a<o;){var s=e[a];t>0&&n(s)?t>1?ji(s,t-1,n,r,i):kn(i,s):r||(i[i.length]=s)}return i}var Mi=fo(),Ni=fo(!0);function Pi(e,t){return e&&Mi(e,t,od)}function Fi(e,t){return e&&Ni(e,t,od)}function Ii(e,t){return Tn(t,function(t){return hu(e[t])})}function Li(e,t){t=Wa(t,e);for(var r=0,i=t.length;e!=null&&r<i;)e=e[Ds(t[r++])];return r&&r==i?e:n}function Ri(e,t,n){var r=t(e);return V(e)?r:kn(r,n(e))}function zi(e){return e==null?e===n?he:se:Pt&&Pt in lt(e)?L(e):hs(e)}function Bi(e,t){return e>t}function Vi(e,t){return e!=null&&k.call(e,t)}function Hi(e,t){return e!=null&&t in lt(e)}function Ui(e,t,n){return e>=$t(t,n)&&e<Jt(t,n)}function Wi(e,t,r){for(var i=r?Dn:En,a=e[0].length,o=e.length,s=o,c=Ue(o),l=1/0,u=[];s--;){var d=e[s];s&&t&&(d=On(d,Yn(t))),l=$t(d.length,l),c[s]=!r&&(t||a>=120&&d.length>=120)?new Qr(s&&d):n}d=e[0];var f=-1,p=c[0];outer:for(;++f<a&&u.length<l;){var m=d[f],h=t?t(m):m;if(m=r||m!==0?m:0,!(p?Zn(p,h):i(u,h,r))){for(s=o;--s;){var g=c[s];if(!(g?Zn(g,h):i(e[s],h,r)))continue outer}p&&p.push(h),u.push(m)}}return u}function Gi(e,t,n,r){return Pi(e,function(e,i,a){t(r,n(e),i,a)}),r}function Ki(e,t,r){t=Wa(t,e),e=_s(e,t);var i=e==null?e:e[Ds(tc(t))];return i==null?n:bn(i,e,r)}function qi(e){return yu(e)&&zi(e)==C}function Ji(e){return yu(e)&&zi(e)==ve}function Yi(e){return yu(e)&&zi(e)==T}function Xi(e,t,n,r,i){return e===t?!0:e==null||t==null||!yu(e)&&!yu(t)?e!==e&&t!==t:Zi(e,t,n,r,Xi,i)}function Zi(e,t,n,r,i,a){var o=V(e),s=V(t),c=o?ee:Jo(e),l=s?ee:Jo(t);c=c==C?ce:c,l=l==C?ce:l;var u=c==ce,d=l==ce,f=c==l;if(f&&su(e)){if(!su(t))return!1;o=!0,u=!1}if(f&&!u)return a||=new ti,o||Pu(e)?Io(e,t,n,r,i,a):Lo(e,t,c,n,r,i,a);if(!(n&1)){var p=u&&k.call(e,`__wrapped__`),m=d&&k.call(t,`__wrapped__`);if(p||m){var h=p?e.value():e,g=m?t.value():t;return a||=new ti,i(h,g,n,r,a)}}return f?(a||=new ti,Ro(e,t,n,r,i,a)):!1}function Qi(e){return yu(e)&&Jo(e)==ae}function $i(e,t,r,i){var a=r.length,o=a,s=!i;if(e==null)return!o;for(e=lt(e);a--;){var c=r[a];if(s&&c[2]?c[1]!==e[c[0]]:!(c[0]in e))return!1}for(;++a<o;){c=r[a];var l=c[0],u=e[l],d=c[1];if(s&&c[2]){if(u===n&&!(l in e))return!1}else{var f=new ti;if(i)var p=i(u,d,l,e,t,f);if(!(p===n?Xi(d,u,3,i,f):p))return!1}}return!0}function ea(e){return!vu(e)||ss(e)?!1:(hu(e)?Ct:et).test(Os(e))}function ta(e){return yu(e)&&zi(e)==de}function na(e){return yu(e)&&Jo(e)==fe}function ra(e){return yu(e)&&_u(e.length)&&!!Zt[zi(e)]}function ia(e){return typeof e==`function`?e:e==null?mf:typeof e==`object`?V(e)?ua(e[0],e[1]):la(e):Df(e)}function aa(e){if(!ls(e))return qt(e);var t=[];for(var n in lt(e))k.call(e,n)&&n!=`constructor`&&t.push(n);return t}function oa(e){if(!vu(e))return ms(e);var t=ls(e),n=[];for(var r in e)(r!=`constructor`||!t&&k.call(e,r))&&n.push(r);return n}function sa(e,t){return e<t}function ca(e,t){var n=-1,r=iu(e)?Ue(e.length):[];return Ti(e,function(e,i,a){r[++n]=t(e,i,a)}),r}function la(e){var t=Go(e);return t.length==1&&t[0][2]?ds(t[0][0],t[0][1]):function(n){return n===e||$i(n,e,t)}}function ua(e,t){return as(e)&&us(t)?ds(Ds(e),t):function(r){var i=rd(r,e);return i===n&&i===t?X(r,e):Xi(t,i,3)}}function da(e,t,r,i,a){e!==t&&Mi(t,function(o,s){if(a||=new ti,vu(o))N(e,t,s,r,da,i,a);else{var c=i?i(ys(e,s),o,s+``,e,t,a):n;c===n&&(c=o),di(e,s,c)}},sd)}function N(e,t,r,i,a,o,s){var c=ys(e,r),l=ys(t,r),u=s.get(l);if(u){di(e,r,u);return}var d=o?o(c,l,r+``,e,t,s):n,f=d===n;if(f){var p=V(l),m=!p&&su(l),h=!p&&!m&&Pu(l);d=l,p||m||h?V(c)?d=c:au(c)?d=io(c):m?(f=!1,d=Ja(l,!0)):h?(f=!1,d=$a(l,!0)):d=[]:Ou(l)||nu(l)?(d=c,nu(c)?d=Wu(c):(!vu(c)||hu(c))&&(d=$o(l))):f=!1}f&&(s.set(l,d),a(d,l,i,o,s),s.delete(l)),di(e,r,d)}function fa(e,t){var r=e.length;if(r)return t+=t<0?r:0,rs(t,r)?e[t]:n}function pa(e,t,n){t=t.length?On(t,function(e){return V(e)?function(t){return Li(t,e.length===1?e[0]:e)}:e}):[mf];var r=-1;return t=On(t,Yn(I())),A(ca(e,function(e,n,i){return{criteria:On(t,function(t){return t(e)}),index:++r,value:e}}),function(e,t){return to(e,t,n)})}function ma(e,t){return ha(e,t,function(t,n){return X(e,n)})}function ha(e,t,n){for(var r=-1,i=t.length,a={};++r<i;){var o=t[r],s=Li(e,o);n(s,o)&&wa(a,Wa(o,e),s)}return a}function ga(e){return function(t){return Li(t,e)}}function _a(e,t,n,r){var i=r?zn:Rn,a=-1,o=t.length,s=e;for(e===t&&(t=io(t)),n&&(s=On(e,Yn(n)));++a<o;)for(var c=0,l=t[a],u=n?n(l):l;(c=i(s,u,c,r))>-1;)s!==e&&jt.call(s,c,1),jt.call(e,c,1);return e}function va(e,t){for(var n=e?t.length:0,r=n-1;n--;){var i=t[n];if(n==r||i!==a){var a=i;rs(i)?jt.call(e,i,1):Ia(e,i)}}return e}function ya(e,t){return e+Bt(nn()*(t-e+1))}function ba(e,t,n,r){for(var i=-1,a=Jt(zt((t-e)/(n||1)),0),o=Ue(a);a--;)o[r?a:++i]=e,e+=n;return o}function xa(e,t){var n=``;if(!e||t<1||t>g)return n;do t%2&&(n+=e),t=Bt(t/2),t&&(e+=e);while(t);return n}function P(e,t){return Ss(gs(e,t,mf),e+``)}function Sa(e){return ci(Td(e))}function Ca(e,t){var n=Td(e);return Ts(n,yi(t,0,n.length))}function wa(e,t,r,i){if(!vu(e))return e;t=Wa(t,e);for(var a=-1,o=t.length,s=o-1,c=e;c!=null&&++a<o;){var l=Ds(t[a]),u=r;if(l===`__proto__`||l===`constructor`||l===`prototype`)return e;if(a!=s){var d=c[l];u=i?i(d,l,c):n,u===n&&(u=vu(d)?d:rs(t[a+1])?[]:{})}fi(c,l,u),c=c[l]}return e}var Ta=Pn?function(e,t){return Pn.set(e,t),e}:mf,Ea=Ft?function(e,t){return Ft(e,`toString`,{configurable:!0,enumerable:!1,value:uf(t),writable:!0})}:mf;function Da(e){return Ts(Td(e))}function Oa(e,t,n){var r=-1,i=e.length;t<0&&(t=-t>i?0:i+t),n=n>i?i:n,n<0&&(n+=i),i=t>n?0:n-t>>>0,t>>>=0;for(var a=Ue(i);++r<i;)a[r]=e[r+t];return a}function ka(e,t){var n;return Ti(e,function(e,r,i){return n=t(e,r,i),!n}),!!n}function Aa(e,t,n){var r=0,i=e==null?r:e.length;if(typeof t==`number`&&t===t&&i<=x){for(;r<i;){var a=r+i>>>1,o=e[a];o!==null&&!Nu(o)&&(n?o<=t:o<t)?r=a+1:i=a}return i}return ja(e,t,mf,n)}function ja(e,t,r,i){var a=0,o=e==null?0:e.length;if(o===0)return 0;t=r(t);for(var s=t!==t,c=t===null,l=Nu(t),u=t===n;a<o;){var d=Bt((a+o)/2),f=r(e[d]),p=f!==n,m=f===null,h=f===f,g=Nu(f);if(s)var _=i||h;else _=u?h&&(i||p):c?h&&p&&(i||!m):l?h&&p&&!m&&(i||!g):m||g?!1:i?f<=t:f<t;_?a=d+1:o=d}return $t(o,b)}function Ma(e,t){for(var n=-1,r=e.length,i=0,a=[];++n<r;){var o=e[n],s=t?t(o):o;if(!n||!$l(s,c)){var c=s;a[i++]=o===0?0:o}}return a}function Na(e){return typeof e==`number`?e:Nu(e)?v:+e}function Pa(e){if(typeof e==`string`)return e;if(V(e))return On(e,Pa)+``;if(Nu(e))return Dr?Dr.call(e):``;var t=e+``;return t==`0`&&1/e==-1/0?`-0`:t}function Fa(e,t,n){var r=-1,i=En,a=e.length,o=!0,s=[],c=s;if(n)o=!1,i=Dn;else if(a>=200){var l=t?null:Ao(e);if(l)return dr(l);o=!1,i=Zn,c=new Qr}else c=t?[]:s;outer:for(;++r<a;){var u=e[r],d=t?t(u):u;if(u=n||u!==0?u:0,o&&d===d){for(var f=c.length;f--;)if(c[f]===d)continue outer;t&&c.push(d),s.push(u)}else i(c,d,n)||(c!==s&&c.push(d),s.push(u))}return s}function Ia(e,t){t=Wa(t,e);var n=-1,r=t.length;if(!r)return!0;for(;++n<r;){var i=Ds(t[n]);if(i===`__proto__`&&!k.call(e,`__proto__`)||(i===`constructor`||i===`prototype`)&&n<r-1)return!1}var a=_s(e,t);return a==null||delete a[Ds(tc(t))]}function La(e,t,n,r){return wa(e,t,n(Li(e,t)),r)}function Ra(e,t,n,r){for(var i=e.length,a=r?i:-1;(r?a--:++a<i)&&t(e[a],a,e););return n?Oa(e,r?0:a,r?a+1:i):Oa(e,r?a+1:0,r?i:a)}function za(e,t){var n=e;return n instanceof M&&(n=n.value()),An(t,function(e,t){return t.func.apply(t.thisArg,kn([e],t.args))},n)}function Ba(e,t,n){var r=e.length;if(r<2)return r?Fa(e[0]):[];for(var i=-1,a=Ue(r);++i<r;)for(var o=e[i],s=-1;++s<r;)s!=i&&(a[i]=wi(a[i]||o,e[s],t,n));return Fa(ji(a,1),t,n)}function Va(e,t,r){for(var i=-1,a=e.length,o=t.length,s={};++i<a;){var c=i<o?t[i]:n;r(s,e[i],c)}return s}function Ha(e){return au(e)?e:[]}function Ua(e){return typeof e==`function`?e:mf}function Wa(e,t){return V(e)?e:as(e,t)?[e]:Es(U(e))}var Ga=P;function Ka(e,t,r){var i=e.length;return r=r===n?i:r,!t&&r>=i?e:Oa(e,t,r)}var qa=It||function(e){return cn.clearTimeout(e)};function Ja(e,t){if(t)return e.slice();var n=e.length,r=Dt?Dt(n):new e.constructor(n);return e.copy(r),r}function Ya(e){var t=new e.constructor(e.byteLength);return new Et(t).set(new Et(e)),t}function Xa(e,t){var n=t?Ya(e.buffer):e.buffer;return new e.constructor(n,e.byteOffset,e.byteLength)}function Za(e){var t=new e.constructor(e.source,Ze.exec(e));return t.lastIndex=e.lastIndex,t}function Qa(e){return Er?lt(Er.call(e)):{}}function $a(e,t){var n=t?Ya(e.buffer):e.buffer;return new e.constructor(n,e.byteOffset,e.length)}function eo(e,t){if(e!==t){var r=e!==n,i=e===null,a=e===e,o=Nu(e),s=t!==n,c=t===null,l=t===t,u=Nu(t);if(!c&&!u&&!o&&e>t||o&&s&&l&&!c&&!u||i&&s&&l||!r&&l||!a)return 1;if(!i&&!o&&!u&&e<t||u&&r&&a&&!i&&!o||c&&r&&a||!s&&a||!l)return-1}return 0}function to(e,t,n){for(var r=-1,i=e.criteria,a=t.criteria,o=i.length,s=n.length;++r<o;){var c=eo(i[r],a[r]);if(c)return r>=s?c:c*(n[r]==`desc`?-1:1)}return e.index-t.index}function no(e,t,n,r){for(var i=-1,a=e.length,o=n.length,s=-1,c=t.length,l=Jt(a-o,0),u=Ue(c+l),d=!r;++s<c;)u[s]=t[s];for(;++i<o;)(d||i<a)&&(u[n[i]]=e[i]);for(;l--;)u[s++]=e[i++];return u}function ro(e,t,n,r){for(var i=-1,a=e.length,o=-1,s=n.length,c=-1,l=t.length,u=Jt(a-s,0),d=Ue(u+l),f=!r;++i<u;)d[i]=e[i];for(var p=i;++c<l;)d[p+c]=t[c];for(;++o<s;)(f||i<a)&&(d[p+n[o]]=e[i++]);return d}function io(e,t){var n=-1,r=e.length;for(t||=Ue(r);++n<r;)t[n]=e[n];return t}function ao(e,t,r,i){var a=!r;r||={};for(var o=-1,s=t.length;++o<s;){var c=t[o],l=i?i(r[c],e[c],c,r,e):n;l===n&&(l=e[c]),a?_i(r,c,l):fi(r,c,l)}return r}function oo(e,t){return ao(e,R(e),t)}function so(e,t){return ao(e,qo(e),t)}function co(e,t){return function(n,r){var i=V(n)?xn:mi,a=t?t():{};return i(n,e,I(r,2),a)}}function lo(e){return P(function(t,r){var i=-1,a=r.length,o=a>1?r[a-1]:n,s=a>2?r[2]:n;for(o=e.length>3&&typeof o==`function`?(a--,o):n,s&&is(r[0],r[1],s)&&(o=a<3?n:o,a=1),t=lt(t);++i<a;){var c=r[i];c&&e(t,c,i,o)}return t})}function uo(e,t){return function(n,r){if(n==null)return n;if(!iu(n))return e(n,r);for(var i=n.length,a=t?i:-1,o=lt(n);(t?a--:++a<i)&&r(o[a],a,o)!==!1;);return n}}function fo(e){return function(t,n,r){for(var i=-1,a=lt(t),o=r(t),s=o.length;s--;){var c=o[e?s:++i];if(n(a[c],c,a)===!1)break}return t}}function po(e,t,n){var r=t&o,i=go(e);function a(){return(this&&this!==cn&&this instanceof a?i:e).apply(r?n:this,arguments)}return a}function mo(e){return function(t){t=U(t);var r=ar(t)?gr(t):n,i=r?r[0]:t.charAt(0),a=r?Ka(r,1).join(``):t.slice(1);return i[e]()+a}}function ho(e){return function(t){return An(af(Md(t).replace(Ut,``)),e,``)}}function go(e){return function(){var t=arguments;switch(t.length){case 0:return new e;case 1:return new e(t[0]);case 2:return new e(t[0],t[1]);case 3:return new e(t[0],t[1],t[2]);case 4:return new e(t[0],t[1],t[2],t[3]);case 5:return new e(t[0],t[1],t[2],t[3],t[4]);case 6:return new e(t[0],t[1],t[2],t[3],t[4],t[5]);case 7:return new e(t[0],t[1],t[2],t[3],t[4],t[5],t[6])}var n=Or(e.prototype),r=e.apply(n,t);return vu(r)?r:n}}function _o(e,t,r){var i=go(e);function a(){for(var o=arguments.length,s=Ue(o),c=o,l=F(a);c--;)s[c]=arguments[c];var u=o<3&&s[0]!==l&&s[o-1]!==l?[]:ur(s,l);return o-=u.length,o<r?Oo(e,t,bo,a.placeholder,n,s,u,n,n,r-o):bn(this&&this!==cn&&this instanceof a?i:e,this,s)}return a}function vo(e){return function(t,r,i){var a=lt(t);if(!iu(t)){var o=I(r,3);t=od(t),r=function(e){return o(a[e],e,a)}}var s=e(t,r,i);return s>-1?a[o?t[s]:s]:n}}function yo(e){return zo(function(t){var i=t.length,a=i,o=Ar.prototype.thru;for(e&&t.reverse();a--;){var s=t[a];if(typeof s!=`function`)throw new ft(r);if(o&&!l&&Uo(s)==`wrapper`)var l=new Ar([],!0)}for(a=l?a:i;++a<i;){s=t[a];var d=Uo(s),m=d==`wrapper`?Ho(s):n;l=m&&z(m[0])&&m[1]==(f|c|u|p)&&!m[4].length&&m[9]==1?l[Uo(m[0])].apply(l,m[3]):s.length==1&&z(s)?l[d]():l.thru(s)}return function(){var e=arguments,n=e[0];if(l&&e.length==1&&V(n))return l.plant(n).value();for(var r=0,a=i?t[r].apply(this,e):n;++r<i;)a=t[r].call(this,a);return a}})}function bo(e,t,r,i,a,u,d,p,h,g){var _=t&f,v=t&o,y=t&s,b=t&(c|l),x=t&m,S=y?n:go(e);function C(){for(var n=arguments.length,o=Ue(n),s=n;s--;)o[s]=arguments[s];if(b)var c=F(C),l=er(o,c);if(i&&(o=no(o,i,a,b)),u&&(o=ro(o,u,d,b)),n-=l,b&&n<g){var f=ur(o,c);return Oo(e,t,bo,C.placeholder,r,o,f,p,h,g-n)}var m=v?r:this,ee=y?m[e]:e;return n=o.length,p?o=vs(o,p):x&&n>1&&o.reverse(),_&&h<n&&(o.length=h),this&&this!==cn&&this instanceof C&&(ee=S||go(ee)),ee.apply(m,o)}return C}function xo(e,t){return function(n,r){return Gi(n,e,t(r),{})}}function So(e,t){return function(r,i){var a;if(r===n&&i===n)return t;if(r!==n&&(a=r),i!==n){if(a===n)return i;typeof r==`string`||typeof i==`string`?(r=Pa(r),i=Pa(i)):(r=Na(r),i=Na(i)),a=e(r,i)}return a}}function Co(e){return zo(function(t){return t=On(t,Yn(I())),P(function(n){var r=this;return e(t,function(e){return bn(e,r,n)})})})}function wo(e,t){t=t===n?` `:Pa(t);var r=t.length;if(r<2)return r?xa(t,e):t;var i=xa(t,zt(e/hr(t)));return ar(t)?Ka(gr(i),0,e).join(``):i.slice(0,e)}function To(e,t,n,r){var i=t&o,a=go(e);function s(){for(var t=-1,o=arguments.length,c=-1,l=r.length,u=Ue(l+o),d=this&&this!==cn&&this instanceof s?a:e;++c<l;)u[c]=r[c];for(;o--;)u[c++]=arguments[++t];return bn(d,i?n:this,u)}return s}function Eo(e){return function(t,r,i){return i&&typeof i!=`number`&&is(t,r,i)&&(r=i=n),t=Vu(t),r===n?(r=t,t=0):r=Vu(r),i=i===n?t<r?1:-1:Vu(i),ba(t,r,i,e)}}function Do(e){return function(t,n){return(typeof t!=`string`||typeof n!=`string`)&&(t=Uu(t),n=Uu(n)),e(t,n)}}function Oo(e,t,r,i,a,l,f,p,m,h){var g=t&c,_=g?f:n,v=g?n:f,y=g?l:n,b=g?n:l;t|=g?u:d,t&=~(g?d:u),t&4||(t&=~(o|s));var x=[e,t,a,y,_,b,v,p,m,h],S=r.apply(n,x);return z(e)&&bs(S,x),S.placeholder=i,Cs(S,e,t)}function ko(e){var t=ct[e];return function(e,n){if(e=Uu(e),n=n==null?0:$t(H(n),292),n&&Gt(e)){var r=(U(e)+`e`).split(`e`);return r=(U(t(r[0]+`e`+(+r[1]+n)))+`e`).split(`e`),+(r[0]+`e`+(+r[1]-n))}return t(e)}}var Ao=fn&&1/dr(new fn([,-0]))[1]==h?function(e){return new fn(e)}:Sf;function jo(e){return function(t){var n=Jo(t);return n==ae?cr(t):n==fe?fr(t):qn(t,e(t))}}function Mo(e,t,i,a,f,p,m,h){var g=t&s;if(!g&&typeof e!=`function`)throw new ft(r);var _=a?a.length:0;if(_||(t&=~(u|d),a=f=n),m=m===n?m:Jt(H(m),0),h=h===n?h:H(h),_-=f?f.length:0,t&d){var v=a,y=f;a=f=n}var b=g?n:Ho(e),x=[e,t,i,a,f,v,y,p,m,h];if(b&&ps(x,b),e=x[0],t=x[1],i=x[2],a=x[3],f=x[4],h=x[9]=x[9]===n?g?0:e.length:Jt(x[9]-_,0),!h&&t&(c|l)&&(t&=~(c|l)),!t||t==o)var S=po(e,t,i);else S=t==c||t==l?_o(e,t,h):(t==u||t==(o|u))&&!f.length?To(e,t,i,a):bo.apply(n,x);return Cs((b?Ta:bs)(S,x),e,t)}function No(e,t,r,i){return e===n||$l(e,ht[r])&&!k.call(i,r)?t:e}function Po(e,t,r,i,a,o){return vu(e)&&vu(t)&&(o.set(t,e),da(e,t,n,Po,o),o.delete(t)),e}function Fo(e){return Ou(e)?n:e}function Io(e,t,r,i,a,o){var s=r&1,c=e.length,l=t.length;if(c!=l&&!(s&&l>c))return!1;var u=o.get(e),d=o.get(t);if(u&&d)return u==t&&d==e;var f=-1,p=!0,m=r&2?new Qr:n;for(o.set(e,t),o.set(t,e);++f<c;){var h=e[f],g=t[f];if(i)var _=s?i(g,h,f,t,e,o):i(h,g,f,e,t,o);if(_!==n){if(_)continue;p=!1;break}if(m){if(!Mn(t,function(e,t){if(!Zn(m,t)&&(h===e||a(h,e,r,i,o)))return m.push(t)})){p=!1;break}}else if(!(h===g||a(h,g,r,i,o))){p=!1;break}}return o.delete(e),o.delete(t),p}function Lo(e,t,n,r,i,a,o){switch(n){case ye:if(e.byteLength!=t.byteLength||e.byteOffset!=t.byteOffset)return!1;e=e.buffer,t=t.buffer;case ve:return!(e.byteLength!=t.byteLength||!a(new Et(e),new Et(t)));case te:case T:case oe:return $l(+e,+t);case E:return e.name==t.name&&e.message==t.message;case de:case pe:return e==t+``;case ae:var s=cr;case fe:var c=r&1;if(s||=dr,e.size!=t.size&&!c)return!1;var l=o.get(e);if(l)return l==t;r|=2,o.set(e,t);var u=Io(s(e),s(t),r,i,a,o);return o.delete(e),u;case me:if(Er)return Er.call(e)==Er.call(t)}return!1}function Ro(e,t,r,i,a,o){var s=r&1,c=Bo(e),l=c.length;if(l!=Bo(t).length&&!s)return!1;for(var u=l;u--;){var d=c[u];if(!(s?d in t:k.call(t,d)))return!1}var f=o.get(e),p=o.get(t);if(f&&p)return f==t&&p==e;var m=!0;o.set(e,t),o.set(t,e);for(var h=s;++u<l;){d=c[u];var g=e[d],_=t[d];if(i)var v=s?i(_,g,d,t,e,o):i(g,_,d,e,t,o);if(!(v===n?g===_||a(g,_,r,i,o):v)){m=!1;break}h||=d==`constructor`}if(m&&!h){var y=e.constructor,b=t.constructor;y!=b&&`constructor`in e&&`constructor`in t&&!(typeof y==`function`&&y instanceof y&&typeof b==`function`&&b instanceof b)&&(m=!1)}return o.delete(e),o.delete(t),m}function zo(e){return Ss(gs(e,n,Ws),e+``)}function Bo(e){return Ri(e,od,R)}function Vo(e){return Ri(e,sd,qo)}var Ho=Pn?function(e){return Pn.get(e)}:Sf;function Uo(e){for(var t=e.name+``,n=Un[t],r=k.call(Un,t)?n.length:0;r--;){var i=n[r],a=i.func;if(a==null||a==e)return i.name}return t}function F(e){return(k.call(j,`placeholder`)?j:e).placeholder}function I(){var e=j.iteratee||hf;return e=e===hf?ia:e,arguments.length?e(arguments[0],arguments[1]):e}function Wo(e,t){var n=e.__data__;return os(t)?n[typeof t==`string`?`string`:`hash`]:n.map}function Go(e){for(var t=od(e),n=t.length;n--;){var r=t[n],i=e[r];t[n]=[r,i,us(i)]}return t}function Ko(e,t){var r=ir(e,t);return ea(r)?r:n}function L(e){var t=k.call(e,Pt),r=e[Pt];try{e[Pt]=n;var i=!0}catch{}var a=bt.call(e);return i&&(t?e[Pt]=r:delete e[Pt]),a}var R=Vt?function(e){return e==null?[]:(e=lt(e),Tn(Vt(e),function(t){return At.call(e,t)}))}:jf,qo=Vt?function(e){for(var t=[];e;)kn(t,R(e)),e=Ot(e);return t}:jf,Jo=zi;(sn&&Jo(new sn(new ArrayBuffer(1)))!=ye||ln&&Jo(new ln)!=ae||un&&Jo(un.resolve())!=le||fn&&Jo(new fn)!=fe||pn&&Jo(new pn)!=ge)&&(Jo=function(e){var t=zi(e),r=t==ce?e.constructor:n,i=r?Os(r):``;if(i)switch(i){case pr:return ye;case yr:return ae;case br:return le;case Cr:return fe;case wr:return ge}return t});function Yo(e,t,n){for(var r=-1,i=n.length;++r<i;){var a=n[r],o=a.size;switch(a.type){case`drop`:e+=o;break;case`dropRight`:t-=o;break;case`take`:t=$t(t,e+o);break;case`takeRight`:e=Jt(e,t-o)}}return{start:e,end:t}}function Xo(e){var t=e.match(Ge);return t?t[1].split(Ke):[]}function Zo(e,t,n){t=Wa(t,e);for(var r=-1,i=t.length,a=!1;++r<i;){var o=Ds(t[r]);if(!(a=e!=null&&n(e,o)))break;e=e[o]}return a||++r!=i?a:(i=e==null?0:e.length,!!i&&_u(i)&&rs(o,i)&&(V(e)||nu(e)))}function Qo(e){var t=e.length,n=new e.constructor(t);return t&&typeof e[0]==`string`&&k.call(e,`index`)&&(n.index=e.index,n.input=e.input),n}function $o(e){return typeof e.constructor==`function`&&!ls(e)?Or(Ot(e)):{}}function es(e,t,n){var r=e.constructor;switch(t){case ve:return Ya(e);case te:case T:return new r(+e);case ye:return Xa(e,n);case be:case xe:case Se:case Ce:case D:case O:case we:case Te:case Ee:return $a(e,n);case ae:return new r;case oe:case pe:return new r(e);case de:return Za(e);case fe:return new r;case me:return Qa(e)}}function ts(e,t){var n=t.length;if(!n)return e;var r=n-1;return t[r]=(n>1?`& `:``)+t[r],t=t.join(n>2?`, `:` `),e.replace(We,`{
/* [wrapped with `+t+`] */
`)}function ns(e){return V(e)||nu(e)||!!(Mt&&e&&e[Mt])}function rs(e,t){var n=typeof e;return t??=g,!!t&&(n==`number`||n!=`symbol`&&nt.test(e))&&e>-1&&e%1==0&&e<t}function is(e,t,n){if(!vu(n))return!1;var r=typeof t;return(r==`number`?iu(n)&&rs(t,n.length):r==`string`&&t in n)?$l(n[t],e):!1}function as(e,t){if(V(e))return!1;var n=typeof e;return n==`number`||n==`symbol`||n==`boolean`||e==null||Nu(e)?!0:Re.test(e)||!Le.test(e)||t!=null&&e in lt(t)}function os(e){var t=typeof e;return t==`string`||t==`number`||t==`symbol`||t==`boolean`?e!==`__proto__`:e===null}function z(e){var t=Uo(e),n=j[t];if(typeof n!=`function`||!(t in M.prototype))return!1;if(e===n)return!0;var r=Ho(n);return!!r&&e===r[0]}function ss(e){return!!yt&&yt in e}var cs=gt?hu:Mf;function ls(e){var t=e&&e.constructor;return e===(typeof t==`function`&&t.prototype||ht)}function us(e){return e===e&&!vu(e)}function ds(e,t){return function(r){return r!=null&&r[e]===t&&(t!==n||e in lt(r))}}function fs(e){var t=Fl(e,function(e){return n.size===500&&n.clear(),e}),n=t.cache;return t}function ps(e,t){var n=e[1],r=t[1],i=n|r,l=i<(o|s|f),u=r==f&&n==c||r==f&&n==p&&e[7].length<=t[8]||r==(f|p)&&t[7].length<=t[8]&&n==c;if(!(l||u))return e;r&o&&(e[2]=t[2],i|=n&o?0:4);var d=t[3];if(d){var m=e[3];e[3]=m?no(m,d,t[4]):d,e[4]=m?ur(e[3],a):t[4]}return d=t[5],d&&(m=e[5],e[5]=m?ro(m,d,t[6]):d,e[6]=m?ur(e[5],a):t[6]),d=t[7],d&&(e[7]=d),r&f&&(e[8]=e[8]==null?t[8]:$t(e[8],t[8])),e[9]??=t[9],e[0]=t[0],e[1]=i,e}function ms(e){var t=[];if(e!=null)for(var n in lt(e))t.push(n);return t}function hs(e){return bt.call(e)}function gs(e,t,r){return t=Jt(t===n?e.length-1:t,0),function(){for(var n=arguments,i=-1,a=Jt(n.length-t,0),o=Ue(a);++i<a;)o[i]=n[t+i];i=-1;for(var s=Ue(t+1);++i<t;)s[i]=n[i];return s[t]=r(o),bn(e,this,s)}}function _s(e,t){return t.length<2?e:Li(e,Oa(t,0,-1))}function vs(e,t){for(var r=e.length,i=$t(t.length,r),a=io(e);i--;){var o=t[i];e[i]=rs(o,r)?a[o]:n}return e}function ys(e,t){if((t!==`constructor`||typeof e[t]!=`function`)&&t!=`__proto__`)return e[t]}var bs=ws(Ta),xs=Rt||function(e,t){return cn.setTimeout(e,t)},Ss=ws(Ea);function Cs(e,t,n){var r=t+``;return Ss(e,ts(r,ks(Xo(r),n)))}function ws(e){var t=0,r=0;return function(){var i=en(),a=16-(i-r);if(r=i,a>0){if(++t>=800)return arguments[0]}else t=0;return e.apply(n,arguments)}}function Ts(e,t){var r=-1,i=e.length,a=i-1;for(t=t===n?i:t;++r<t;){var o=ya(r,a),s=e[o];e[o]=e[r],e[r]=s}return e.length=t,e}var Es=fs(function(e){var t=[];return e.charCodeAt(0)===46&&t.push(``),e.replace(ze,function(e,n,r,i){t.push(r?i.replace(Ye,`$1`):n||e)}),t});function Ds(e){if(typeof e==`string`||Nu(e))return e;var t=e+``;return t==`0`&&1/e==-1/0?`-0`:t}function Os(e){if(e!=null){try{return _t.call(e)}catch{}try{return e+``}catch{}}return``}function ks(e,t){return Sn(S,function(n){var r=`_.`+n[0];t&n[1]&&!En(e,r)&&e.push(r)}),e.sort()}function As(e){if(e instanceof M)return e.clone();var t=new Ar(e.__wrapped__,e.__chain__);return t.__actions__=io(e.__actions__),t.__index__=e.__index__,t.__values__=e.__values__,t}function js(e,t,r){t=(r?is(e,t,r):t===n)?1:Jt(H(t),0);var i=e==null?0:e.length;if(!i||t<1)return[];for(var a=0,o=0,s=Ue(zt(i/t));a<i;)s[o++]=Oa(e,a,a+=t);return s}function Ms(e){for(var t=-1,n=e==null?0:e.length,r=0,i=[];++t<n;){var a=e[t];a&&(i[r++]=a)}return i}function Ns(){var e=arguments.length;if(!e)return[];for(var t=Ue(e-1),n=arguments[0],r=e;r--;)t[r-1]=arguments[r];return kn(V(n)?io(n):[n],ji(t,1))}var Ps=P(function(e,t){return au(e)?wi(e,ji(t,1,au,!0)):[]}),Fs=P(function(e,t){var r=tc(t);return au(r)&&(r=n),au(e)?wi(e,ji(t,1,au,!0),I(r,2)):[]}),Is=P(function(e,t){var r=tc(t);return au(r)&&(r=n),au(e)?wi(e,ji(t,1,au,!0),n,r):[]});function Ls(e,t,r){var i=e==null?0:e.length;return i?(t=r||t===n?1:H(t),Oa(e,t<0?0:t,i)):[]}function Rs(e,t,r){var i=e==null?0:e.length;return i?(t=r||t===n?1:H(t),t=i-t,Oa(e,0,t<0?0:t)):[]}function zs(e,t){return e&&e.length?Ra(e,I(t,3),!0,!0):[]}function Bs(e,t){return e&&e.length?Ra(e,I(t,3),!0):[]}function Vs(e,t,n,r){var i=e==null?0:e.length;return i?(n&&typeof n!=`number`&&is(e,t,n)&&(n=0,r=i),ki(e,t,n,r)):[]}function Hs(e,t,n){var r=e==null?0:e.length;if(!r)return-1;var i=n==null?0:H(n);return i<0&&(i=Jt(r+i,0)),Ln(e,I(t,3),i)}function Us(e,t,r){var i=e==null?0:e.length;if(!i)return-1;var a=i-1;return r!==n&&(a=H(r),a=r<0?Jt(i+a,0):$t(a,i-1)),Ln(e,I(t,3),a,!0)}function Ws(e){return e!=null&&e.length?ji(e,1):[]}function Gs(e){return e!=null&&e.length?ji(e,h):[]}function Ks(e,t){return e!=null&&e.length?(t=t===n?1:H(t),ji(e,t)):[]}function qs(e){for(var t=-1,n=e==null?0:e.length,r={};++t<n;){var i=e[t];_i(r,i[0],i[1])}return r}function Js(e){return e&&e.length?e[0]:n}function Ys(e,t,n){var r=e==null?0:e.length;if(!r)return-1;var i=n==null?0:H(n);return i<0&&(i=Jt(r+i,0)),Rn(e,t,i)}function Xs(e){return e!=null&&e.length?Oa(e,0,-1):[]}var Zs=P(function(e){var t=On(e,Ha);return t.length&&t[0]===e[0]?Wi(t):[]}),Qs=P(function(e){var t=tc(e),r=On(e,Ha);return t===tc(r)?t=n:r.pop(),r.length&&r[0]===e[0]?Wi(r,I(t,2)):[]}),$s=P(function(e){var t=tc(e),r=On(e,Ha);return t=typeof t==`function`?t:n,t&&r.pop(),r.length&&r[0]===e[0]?Wi(r,n,t):[]});function ec(e,t){return e==null?``:Kt.call(e,t)}function tc(e){var t=e==null?0:e.length;return t?e[t-1]:n}function nc(e,t,r){var i=e==null?0:e.length;if(!i)return-1;var a=i;return r!==n&&(a=H(r),a=a<0?Jt(i+a,0):$t(a,i-1)),t===t?mr(e,t,a):Ln(e,Bn,a,!0)}function rc(e,t){return e&&e.length?fa(e,H(t)):n}var ic=P(ac);function ac(e,t){return e&&e.length&&t&&t.length?_a(e,t):e}function oc(e,t,n){return e&&e.length&&t&&t.length?_a(e,t,I(n,2)):e}function B(e,t,r){return e&&e.length&&t&&t.length?_a(e,t,n,r):e}var sc=zo(function(e,t){var n=e==null?0:e.length,r=vi(e,t);return va(e,On(t,function(e){return rs(e,n)?+e:e}).sort(eo)),r});function cc(e,t){var n=[];if(!(e&&e.length))return n;var r=-1,i=[],a=e.length;for(t=I(t,3);++r<a;){var o=e[r];t(o,r,e)&&(n.push(o),i.push(r))}return va(e,i),n}function lc(e){return e==null?e:on.call(e)}function uc(e,t,r){var i=e==null?0:e.length;return i?(r&&typeof r!=`number`&&is(e,t,r)?(t=0,r=i):(t=t==null?0:H(t),r=r===n?i:H(r)),Oa(e,t,r)):[]}function dc(e,t){return Aa(e,t)}function fc(e,t,n){return ja(e,t,I(n,2))}function pc(e,t){var n=e==null?0:e.length;if(n){var r=Aa(e,t);if(r<n&&$l(e[r],t))return r}return-1}function mc(e,t){return Aa(e,t,!0)}function hc(e,t,n){return ja(e,t,I(n,2),!0)}function gc(e,t){if(e!=null&&e.length){var n=Aa(e,t,!0)-1;if($l(e[n],t))return n}return-1}function _c(e){return e&&e.length?Ma(e):[]}function vc(e,t){return e&&e.length?Ma(e,I(t,2)):[]}function yc(e){var t=e==null?0:e.length;return t?Oa(e,1,t):[]}function bc(e,t,r){return e&&e.length?(t=r||t===n?1:H(t),Oa(e,0,t<0?0:t)):[]}function xc(e,t,r){var i=e==null?0:e.length;return i?(t=r||t===n?1:H(t),t=i-t,Oa(e,t<0?0:t,i)):[]}function Sc(e,t){return e&&e.length?Ra(e,I(t,3),!1,!0):[]}function Cc(e,t){return e&&e.length?Ra(e,I(t,3)):[]}var wc=P(function(e){return Fa(ji(e,1,au,!0))}),Tc=P(function(e){var t=tc(e);return au(t)&&(t=n),Fa(ji(e,1,au,!0),I(t,2))}),Ec=P(function(e){var t=tc(e);return t=typeof t==`function`?t:n,Fa(ji(e,1,au,!0),n,t)});function Dc(e){return e&&e.length?Fa(e):[]}function Oc(e,t){return e&&e.length?Fa(e,I(t,2)):[]}function kc(e,t){return t=typeof t==`function`?t:n,e&&e.length?Fa(e,n,t):[]}function Ac(e){if(!(e&&e.length))return[];var t=0;return e=Tn(e,function(e){if(au(e))return t=Jt(e.length,t),!0}),Kn(t,function(t){return On(e,Hn(t))})}function jc(e,t){if(!(e&&e.length))return[];var r=Ac(e);return t==null?r:On(r,function(e){return bn(t,n,e)})}var Mc=P(function(e,t){return au(e)?wi(e,t):[]}),Nc=P(function(e){return Ba(Tn(e,au))}),Pc=P(function(e){var t=tc(e);return au(t)&&(t=n),Ba(Tn(e,au),I(t,2))}),Fc=P(function(e){var t=tc(e);return t=typeof t==`function`?t:n,Ba(Tn(e,au),n,t)}),Ic=P(Ac);function Lc(e,t){return Va(e||[],t||[],fi)}function Rc(e,t){return Va(e||[],t||[],wa)}var zc=P(function(e){var t=e.length,r=t>1?e[t-1]:n;return r=typeof r==`function`?(e.pop(),r):n,jc(e,r)});function Bc(e){var t=j(e);return t.__chain__=!0,t}function Vc(e,t){return t(e),e}function Hc(e,t){return t(e)}var Uc=zo(function(e){var t=e.length,r=t?e[0]:0,i=this.__wrapped__,a=function(t){return vi(t,e)};return t>1||this.__actions__.length||!(i instanceof M)||!rs(r)?this.thru(a):(i=i.slice(r,+r+ +!!t),i.__actions__.push({func:Hc,args:[a],thisArg:n}),new Ar(i,this.__chain__).thru(function(e){return t&&!e.length&&e.push(n),e}))});function Wc(){return Bc(this)}function Gc(){return new Ar(this.value(),this.__chain__)}function Kc(){this.__values__===n&&(this.__values__=Bu(this.value()));var e=this.__index__>=this.__values__.length;return{done:e,value:e?n:this.__values__[this.__index__++]}}function qc(){return this}function Jc(e){for(var t,r=this;r instanceof kr;){var i=As(r);i.__index__=0,i.__values__=n,t?a.__wrapped__=i:t=i;var a=i;r=r.__wrapped__}return a.__wrapped__=e,t}function Yc(){var e=this.__wrapped__;if(e instanceof M){var t=e;return this.__actions__.length&&(t=new M(this)),t=t.reverse(),t.__actions__.push({func:Hc,args:[lc],thisArg:n}),new Ar(t,this.__chain__)}return this.thru(lc)}function Xc(){return za(this.__wrapped__,this.__actions__)}var Zc=co(function(e,t,n){k.call(e,n)?++e[n]:_i(e,n,1)});function Qc(e,t,r){var i=V(e)?wn:Di;return r&&is(e,t,r)&&(t=n),i(e,I(t,3))}function $c(e,t){return(V(e)?Tn:Ai)(e,I(t,3))}var el=vo(Hs),tl=vo(Us);function nl(e,t){return ji(dl(e,t),1)}function rl(e,t){return ji(dl(e,t),h)}function il(e,t,r){return r=r===n?1:H(r),ji(dl(e,t),r)}function al(e,t){return(V(e)?Sn:Ti)(e,I(t,3))}function ol(e,t){return(V(e)?Cn:Ei)(e,I(t,3))}var sl=co(function(e,t,n){k.call(e,n)?e[n].push(t):_i(e,n,[t])});function cl(e,t,n,r){e=iu(e)?e:Td(e),n=n&&!r?H(n):0;var i=e.length;return n<0&&(n=Jt(i+n,0)),Mu(e)?n<=i&&e.indexOf(t,n)>-1:!!i&&Rn(e,t,n)>-1}var ll=P(function(e,t,n){var r=-1,i=typeof t==`function`,a=iu(e)?Ue(e.length):[];return Ti(e,function(e){a[++r]=i?bn(t,e,n):Ki(e,t,n)}),a}),ul=co(function(e,t,n){_i(e,n,t)});function dl(e,t){return(V(e)?On:ca)(e,I(t,3))}function fl(e,t,r,i){return e==null?[]:(V(t)||(t=t==null?[]:[t]),r=i?n:r,V(r)||(r=r==null?[]:[r]),pa(e,t,r))}var pl=co(function(e,t,n){e[+!n].push(t)},function(){return[[],[]]});function ml(e,t,n){var r=V(e)?An:Wn,i=arguments.length<3;return r(e,I(t,4),n,i,Ti)}function hl(e,t,n){var r=V(e)?jn:Wn,i=arguments.length<3;return r(e,I(t,4),n,i,Ei)}function gl(e,t){return(V(e)?Tn:Ai)(e,Il(I(t,3)))}function _l(e){return(V(e)?ci:Sa)(e)}function vl(e,t,r){return t=(r?is(e,t,r):t===n)?1:H(t),(V(e)?li:Ca)(e,t)}function yl(e){return(V(e)?ui:Da)(e)}function bl(e){if(e==null)return 0;if(iu(e))return Mu(e)?hr(e):e.length;var t=Jo(e);return t==ae||t==fe?e.size:aa(e).length}function xl(e,t,r){var i=V(e)?Mn:ka;return r&&is(e,t,r)&&(t=n),i(e,I(t,3))}var Sl=P(function(e,t){if(e==null)return[];var n=t.length;return n>1&&is(e,t[0],t[1])?t=[]:n>2&&is(t[0],t[1],t[2])&&(t=[t[0]]),pa(e,ji(t,1),[])}),Cl=Lt||function(){return cn.Date.now()};function wl(e,t){if(typeof t!=`function`)throw new ft(r);return e=H(e),function(){if(--e<1)return t.apply(this,arguments)}}function Tl(e,t,r){return t=r?n:t,t=e&&t==null?e.length:t,Mo(e,f,n,n,n,n,t)}function El(e,t){var i;if(typeof t!=`function`)throw new ft(r);return e=H(e),function(){return--e>0&&(i=t.apply(this,arguments)),e<=1&&(t=n),i}}var Dl=P(function(e,t,n){var r=o;if(n.length){var i=ur(n,F(Dl));r|=u}return Mo(e,r,t,n,i)}),Ol=P(function(e,t,n){var r=o|s;if(n.length){var i=ur(n,F(Ol));r|=u}return Mo(t,r,e,n,i)});function kl(e,t,r){t=r?n:t;var i=Mo(e,c,n,n,n,n,n,t);return i.placeholder=kl.placeholder,i}function Al(e,t,r){t=r?n:t;var i=Mo(e,l,n,n,n,n,n,t);return i.placeholder=Al.placeholder,i}function jl(e,t,i){var a,o,s,c,l,u,d=0,f=!1,p=!1,m=!0;if(typeof e!=`function`)throw new ft(r);t=Uu(t)||0,vu(i)&&(f=!!i.leading,p=`maxWait`in i,s=p?Jt(Uu(i.maxWait)||0,t):s,m=`trailing`in i?!!i.trailing:m);function h(t){var r=a,i=o;return a=o=n,d=t,c=e.apply(i,r),c}function g(e){return d=e,l=xs(y,t),f?h(e):c}function _(e){var n=e-u,r=e-d,i=t-n;return p?$t(i,s-r):i}function v(e){var r=e-u,i=e-d;return u===n||r>=t||r<0||p&&i>=s}function y(){var e=Cl();if(v(e))return b(e);l=xs(y,_(e))}function b(e){return l=n,m&&a?h(e):(a=o=n,c)}function x(){l!==n&&qa(l),d=0,a=u=o=l=n}function S(){return l===n?c:b(Cl())}function C(){var e=Cl(),r=v(e);if(a=arguments,o=this,u=e,r){if(l===n)return g(u);if(p)return qa(l),l=xs(y,t),h(u)}return l===n&&(l=xs(y,t)),c}return C.cancel=x,C.flush=S,C}var Ml=P(function(e,t){return Ci(e,1,t)}),Nl=P(function(e,t,n){return Ci(e,Uu(t)||0,n)});function Pl(e){return Mo(e,m)}function Fl(e,t){if(typeof e!=`function`||t!=null&&typeof t!=`function`)throw new ft(r);var n=function(){var r=arguments,i=t?t.apply(this,r):r[0],a=n.cache;if(a.has(i))return a.get(i);var o=e.apply(this,r);return n.cache=a.set(i,o)||a,o};return n.cache=new(Fl.Cache||Kr),n}Fl.Cache=Kr;function Il(e){if(typeof e!=`function`)throw new ft(r);return function(){var t=arguments;switch(t.length){case 0:return!e.call(this);case 1:return!e.call(this,t[0]);case 2:return!e.call(this,t[0],t[1]);case 3:return!e.call(this,t[0],t[1],t[2])}return!e.apply(this,t)}}function Ll(e){return El(2,e)}var Rl=Ga(function(e,t){t=t.length==1&&V(t[0])?On(t[0],Yn(I())):On(ji(t,1),Yn(I()));var n=t.length;return P(function(r){for(var i=-1,a=$t(r.length,n);++i<a;)r[i]=t[i].call(this,r[i]);return bn(e,this,r)})}),zl=P(function(e,t){return Mo(e,u,n,t,ur(t,F(zl)))}),Bl=P(function(e,t){return Mo(e,d,n,t,ur(t,F(Bl)))}),Vl=zo(function(e,t){return Mo(e,p,n,n,n,t)});function Hl(e,t){if(typeof e!=`function`)throw new ft(r);return t=t===n?t:H(t),P(e,t)}function Ul(e,t){if(typeof e!=`function`)throw new ft(r);return t=t==null?0:Jt(H(t),0),P(function(n){var r=n[t],i=Ka(n,0,t);return r&&kn(i,r),bn(e,this,i)})}function Wl(e,t,n){var i=!0,a=!0;if(typeof e!=`function`)throw new ft(r);return vu(n)&&(i=`leading`in n?!!n.leading:i,a=`trailing`in n?!!n.trailing:a),jl(e,t,{leading:i,maxWait:t,trailing:a})}function Gl(e){return Tl(e,1)}function Kl(e,t){return zl(Ua(t),e)}function ql(){if(!arguments.length)return[];var e=arguments[0];return V(e)?e:[e]}function Jl(e){return bi(e,4)}function Yl(e,t){return t=typeof t==`function`?t:n,bi(e,4,t)}function Xl(e){return bi(e,5)}function Zl(e,t){return t=typeof t==`function`?t:n,bi(e,5,t)}function Ql(e,t){return t==null||Si(e,t,od(t))}function $l(e,t){return e===t||e!==e&&t!==t}var eu=Do(Bi),tu=Do(function(e,t){return e>=t}),nu=qi(function(){return arguments}())?qi:function(e){return yu(e)&&k.call(e,`callee`)&&!At.call(e,`callee`)},V=Ue.isArray,ru=mn?Yn(mn):Ji;function iu(e){return e!=null&&_u(e.length)&&!hu(e)}function au(e){return yu(e)&&iu(e)}function ou(e){return e===!0||e===!1||yu(e)&&zi(e)==te}var su=Ht||Mf,cu=hn?Yn(hn):Yi;function lu(e){return yu(e)&&e.nodeType===1&&!Ou(e)}function uu(e){if(e==null)return!0;if(iu(e)&&(V(e)||typeof e==`string`||typeof e.splice==`function`||su(e)||Pu(e)||nu(e)))return!e.length;var t=Jo(e);if(t==ae||t==fe)return!e.size;if(ls(e))return!aa(e).length;for(var n in e)if(k.call(e,n))return!1;return!0}function du(e,t){return Xi(e,t)}function fu(e,t,r){r=typeof r==`function`?r:n;var i=r?r(e,t):n;return i===n?Xi(e,t,n,r):!!i}function pu(e){if(!yu(e))return!1;var t=zi(e);return t==E||t==ne||typeof e.message==`string`&&typeof e.name==`string`&&!Ou(e)}function mu(e){return typeof e==`number`&&Gt(e)}function hu(e){if(!vu(e))return!1;var t=zi(e);return t==re||t==ie||t==w||t==ue}function gu(e){return typeof e==`number`&&e==H(e)}function _u(e){return typeof e==`number`&&e>-1&&e%1==0&&e<=g}function vu(e){var t=typeof e;return e!=null&&(t==`object`||t==`function`)}function yu(e){return typeof e==`object`&&!!e}var bu=gn?Yn(gn):Qi;function xu(e,t){return e===t||$i(e,t,Go(t))}function Su(e,t,r){return r=typeof r==`function`?r:n,$i(e,t,Go(t),r)}function Cu(e){return Du(e)&&e!=+e}function wu(e){if(cs(e))throw new ot(`Unsupported core-js use. Try https://npms.io/search?q=ponyfill.`);return ea(e)}function Tu(e){return e===null}function Eu(e){return e==null}function Du(e){return typeof e==`number`||yu(e)&&zi(e)==oe}function Ou(e){if(!yu(e)||zi(e)!=ce)return!1;var t=Ot(e);if(t===null)return!0;var n=k.call(t,`constructor`)&&t.constructor;return typeof n==`function`&&n instanceof n&&_t.call(n)==xt}var ku=_n?Yn(_n):ta;function Au(e){return gu(e)&&e>=-g&&e<=g}var ju=vn?Yn(vn):na;function Mu(e){return typeof e==`string`||!V(e)&&yu(e)&&zi(e)==pe}function Nu(e){return typeof e==`symbol`||yu(e)&&zi(e)==me}var Pu=yn?Yn(yn):ra;function Fu(e){return e===n}function Iu(e){return yu(e)&&Jo(e)==ge}function Lu(e){return yu(e)&&zi(e)==_e}var Ru=Do(sa),zu=Do(function(e,t){return e<=t});function Bu(e){if(!e)return[];if(iu(e))return Mu(e)?gr(e):io(e);if(Nt&&e[Nt])return sr(e[Nt]());var t=Jo(e);return(t==ae?cr:t==fe?dr:Td)(e)}function Vu(e){return e?(e=Uu(e),e===h||e===-1/0?(e<0?-1:1)*_:e===e?e:0):e===0?e:0}function H(e){var t=Vu(e),n=t%1;return t===t?n?t-n:t:0}function Hu(e){return e?yi(H(e),0,y):0}function Uu(e){if(typeof e==`number`)return e;if(Nu(e))return v;if(vu(e)){var t=typeof e.valueOf==`function`?e.valueOf():e;e=vu(t)?t+``:t}if(typeof e!=`string`)return e===0?e:+e;e=Jn(e);var n=$e.test(e);return n||tt.test(e)?an(e.slice(2),n?2:8):Qe.test(e)?v:+e}function Wu(e){return ao(e,sd(e))}function Gu(e){return e?yi(H(e),-g,g):e===0?e:0}function U(e){return e==null?``:Pa(e)}var Ku=lo(function(e,t){if(ls(t)||iu(t)){ao(t,od(t),e);return}for(var n in t)k.call(t,n)&&fi(e,n,t[n])}),qu=lo(function(e,t){ao(t,sd(t),e)}),W=lo(function(e,t,n,r){ao(t,sd(t),e,r)}),Ju=lo(function(e,t,n,r){ao(t,od(t),e,r)}),Yu=zo(vi);function Xu(e,t){var n=Or(e);return t==null?n:hi(n,t)}var Zu=P(function(e,t){e=lt(e);var r=-1,i=t.length,a=i>2?t[2]:n;for(a&&is(t[0],t[1],a)&&(i=1);++r<i;)for(var o=t[r],s=sd(o),c=-1,l=s.length;++c<l;){var u=s[c],d=e[u];(d===n||$l(d,ht[u])&&!k.call(e,u))&&(e[u]=o[u])}return e}),Qu=P(function(e){return e.push(n,Po),bn(dd,n,e)});function G(e,t){return In(e,I(t,3),Pi)}function $u(e,t){return In(e,I(t,3),Fi)}function ed(e,t){return e==null?e:Mi(e,I(t,3),sd)}function td(e,t){return e==null?e:Ni(e,I(t,3),sd)}function K(e,t){return e&&Pi(e,I(t,3))}function q(e,t){return e&&Fi(e,I(t,3))}function J(e){return e==null?[]:Ii(e,od(e))}function nd(e){return e==null?[]:Ii(e,sd(e))}function rd(e,t,r){var i=e==null?n:Li(e,t);return i===n?r:i}function Y(e,t){return e!=null&&Zo(e,t,Vi)}function X(e,t){return e!=null&&Zo(e,t,Hi)}var id=xo(function(e,t,n){t!=null&&typeof t.toString!=`function`&&(t=bt.call(t)),e[t]=n},uf(mf)),ad=xo(function(e,t,n){t!=null&&typeof t.toString!=`function`&&(t=bt.call(t)),k.call(e,t)?e[t].push(n):e[t]=[n]},I),Z=P(Ki);function od(e){return iu(e)?si(e):aa(e)}function sd(e){return iu(e)?si(e,!0):oa(e)}function cd(e,t){var n={};return t=I(t,3),Pi(e,function(e,r,i){_i(n,t(e,r,i),e)}),n}function ld(e,t){var n={};return t=I(t,3),Pi(e,function(e,r,i){_i(n,r,t(e,r,i))}),n}var ud=lo(function(e,t,n){da(e,t,n)}),dd=lo(function(e,t,n,r){da(e,t,n,r)}),fd=zo(function(e,t){var n={};if(e==null)return n;var r=!1;t=On(t,function(t){return t=Wa(t,e),r||=t.length>1,t}),ao(e,Vo(e),n),r&&(n=bi(n,7,Fo));for(var i=t.length;i--;)Ia(n,t[i]);return n});function pd(e,t){return hd(e,Il(I(t)))}var md=zo(function(e,t){return e==null?{}:ma(e,t)});function hd(e,t){if(e==null)return{};var n=On(Vo(e),function(e){return[e]});return t=I(t),ha(e,n,function(e,n){return t(e,n[0])})}function gd(e,t,r){t=Wa(t,e);var i=-1,a=t.length;for(a||(a=1,e=n);++i<a;){var o=e==null?n:e[Ds(t[i])];o===n&&(i=a,o=r),e=hu(o)?o.call(e):o}return e}function _d(e,t,n){return e==null?e:wa(e,t,n)}function vd(e,t,r,i){return i=typeof i==`function`?i:n,e==null?e:wa(e,t,r,i)}var yd=jo(od),bd=jo(sd);function xd(e,t,n){var r=V(e),i=r||su(e)||Pu(e);if(t=I(t,4),n==null){var a=e&&e.constructor;n=i?r?new a:[]:vu(e)&&hu(a)?Or(Ot(e)):{}}return(i?Sn:Pi)(e,function(e,r,i){return t(n,e,r,i)}),n}function Sd(e,t){return e==null||Ia(e,t)}function Cd(e,t,n){return e==null?e:La(e,t,Ua(n))}function wd(e,t,r,i){return i=typeof i==`function`?i:n,e==null?e:La(e,t,Ua(r),i)}function Td(e){return e==null?[]:Xn(e,od(e))}function Ed(e){return e==null?[]:Xn(e,sd(e))}function Dd(e,t,r){return r===n&&(r=t,t=n),r!==n&&(r=Uu(r),r=r===r?r:0),t!==n&&(t=Uu(t),t=t===t?t:0),yi(Uu(e),t,r)}function Od(e,t,r){return t=Vu(t),r===n?(r=t,t=0):r=Vu(r),e=Uu(e),Ui(e,t,r)}function kd(e,t,r){if(r&&typeof r!=`boolean`&&is(e,t,r)&&(t=r=n),r===n&&(typeof t==`boolean`?(r=t,t=n):typeof e==`boolean`&&(r=e,e=n)),e===n&&t===n?(e=0,t=1):(e=Vu(e),t===n?(t=e,e=0):t=Vu(t)),e>t){var i=e;e=t,t=i}if(r||e%1||t%1){var a=nn();return $t(e+a*(t-e+rn(`1e-`+((a+``).length-1))),t)}return ya(e,t)}var Ad=ho(function(e,t,n){return t=t.toLowerCase(),e+(n?jd(t):t)});function jd(e){return rf(U(e).toLowerCase())}function Md(e){return e=U(e),e&&e.replace(rt,tr).replace(Wt,``)}function Nd(e,t,r){e=U(e),t=Pa(t);var i=e.length;r=r===n?i:yi(H(r),0,i);var a=r;return r-=t.length,r>=0&&e.slice(r,a)==t}function Pd(e){return e=U(e),e&&Ne.test(e)?e.replace(je,nr):e}function Fd(e){return e=U(e),e&&Ve.test(e)?e.replace(Be,`\\$&`):e}var Id=ho(function(e,t,n){return e+(n?`-`:``)+t.toLowerCase()}),Ld=ho(function(e,t,n){return e+(n?` `:``)+t.toLowerCase()}),Rd=mo(`toLowerCase`);function zd(e,t,n){e=U(e),t=H(t);var r=t?hr(e):0;if(!t||r>=t)return e;var i=(t-r)/2;return wo(Bt(i),n)+e+wo(zt(i),n)}function Bd(e,t,n){e=U(e),t=H(t);var r=t?hr(e):0;return t&&r<t?e+wo(t-r,n):e}function Vd(e,t,n){e=U(e),t=H(t);var r=t?hr(e):0;return t&&r<t?wo(t-r,n)+e:e}function Hd(e,t,n){return n||t==null?t=0:t&&=+t,tn(U(e).replace(He,``),t||0)}function Ud(e,t,r){return t=(r?is(e,t,r):t===n)?1:H(t),xa(U(e),t)}function Wd(){var e=arguments,t=U(e[0]);return e.length<3?t:t.replace(e[1],e[2])}var Q=ho(function(e,t,n){return e+(n?`_`:``)+t.toLowerCase()});function Gd(e,t,r){return r&&typeof r!=`number`&&is(e,t,r)&&(t=r=n),r=r===n?y:r>>>0,r?(e=U(e),e&&(typeof t==`string`||t!=null&&!ku(t))&&(t=Pa(t),!t&&ar(e))?Ka(gr(e),0,r):e.split(t,r)):[]}var Kd=ho(function(e,t,n){return e+(n?` `:``)+rf(t)});function qd(e,t,n){return e=U(e),n=n==null?0:yi(H(n),0,e.length),t=Pa(t),e.slice(n,n+t.length)==t}function Jd(e,t,r){var i=j.templateSettings;r&&is(e,t,r)&&(t=n),e=U(e),t=Ju({},t,i,No);var a=Ju({},t.imports,i.imports,No),o=od(a),s=Xn(a,o);Sn(o,function(e){if(Je.test(e))throw new ot("Invalid `imports` option passed into `_.template`")});var c,l,u=0,d=t.interpolate||it,f=`__p += '`,p=ut((t.escape||it).source+`|`+d.source+`|`+(d===Ie?Xe:it).source+`|`+(t.evaluate||it).source+`|$`,`g`),m=`//# sourceURL=`+(k.call(t,`sourceURL`)?(t.sourceURL+``).replace(/\s/g,` `):`lodash.templateSources[`+ ++Xt+`]`)+`
`;e.replace(p,function(t,n,r,i,a,o){return r||=i,f+=e.slice(u,o).replace(at,rr),n&&(c=!0,f+=`' +
__e(`+n+`) +
'`),a&&(l=!0,f+=`';
`+a+`;
__p += '`),r&&(f+=`' +
((__t = (`+r+`)) == null ? '' : __t) +
'`),u=o+t.length,t}),f+=`';
`;var h=k.call(t,`variable`)&&t.variable;if(!h)f=`with (obj) {
`+f+`
}
`;else if(Je.test(h))throw new ot("Invalid `variable` option passed into `_.template`");f=(l?f.replace(De,``):f).replace(Oe,`$1`).replace(ke,`$1;`),f=`function(`+(h||`obj`)+`) {
`+(h?``:`obj || (obj = {});
`)+`var __t, __p = ''`+(c?`, __e = _.escape`:``)+(l?`, __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
`:`;
`)+f+`return __p
}`;var g=of(function(){return st(o,m+`return `+f).apply(n,s)});if(g.source=f,pu(g))throw g;return g}function Yd(e){return U(e).toLowerCase()}function Xd(e){return U(e).toUpperCase()}function Zd(e,t,r){if(e=U(e),e&&(r||t===n))return Jn(e);if(!e||!(t=Pa(t)))return e;var i=gr(e),a=gr(t);return Ka(i,Qn(i,a),$n(i,a)+1).join(``)}function Qd(e,t,r){if(e=U(e),e&&(r||t===n))return e.slice(0,_r(e)+1);if(!e||!(t=Pa(t)))return e;var i=gr(e);return Ka(i,0,$n(i,gr(t))+1).join(``)}function $d(e,t,r){if(e=U(e),e&&(r||t===n))return e.replace(He,``);if(!e||!(t=Pa(t)))return e;var i=gr(e);return Ka(i,Qn(i,gr(t))).join(``)}function ef(e,t){var r=30,i=`...`;if(vu(t)){var a=`separator`in t?t.separator:a;r=`length`in t?H(t.length):r,i=`omission`in t?Pa(t.omission):i}e=U(e);var o=e.length;if(ar(e)){var s=gr(e);o=s.length}if(r>=o)return e;var c=r-hr(i);if(c<1)return i;var l=s?Ka(s,0,c).join(``):e.slice(0,c);if(a===n)return l+i;if(s&&(c+=l.length-c),ku(a)){if(e.slice(c).search(a)){var u,d=l;for(a.global||(a=ut(a.source,U(Ze.exec(a))+`g`)),a.lastIndex=0;u=a.exec(d);)var f=u.index;l=l.slice(0,f===n?c:f)}}else if(e.indexOf(Pa(a),c)!=c){var p=l.lastIndexOf(a);p>-1&&(l=l.slice(0,p))}return l+i}function tf(e){return e=U(e),e&&Me.test(e)?e.replace(Ae,vr):e}var nf=ho(function(e,t,n){return e+(n?` `:``)+t.toUpperCase()}),rf=mo(`toUpperCase`);function af(e,t,r){return e=U(e),t=r?n:t,t===n?or(e)?xr(e):Fn(e):e.match(t)||[]}var of=P(function(e,t){try{return bn(e,n,t)}catch(e){return pu(e)?e:new ot(e)}}),sf=zo(function(e,t){return Sn(t,function(t){t=Ds(t),_i(e,t,Dl(e[t],e))}),e});function cf(e){var t=e==null?0:e.length,n=I();return e=t?On(e,function(e){if(typeof e[1]!=`function`)throw new ft(r);return[n(e[0]),e[1]]}):[],P(function(n){for(var r=-1;++r<t;){var i=e[r];if(bn(i[0],this,n))return bn(i[1],this,n)}})}function lf(e){return xi(bi(e,1))}function uf(e){return function(){return e}}function df(e,t){return e==null||e!==e?t:e}var ff=yo(),pf=yo(!0);function mf(e){return e}function hf(e){return ia(typeof e==`function`?e:bi(e,1))}function gf(e){return la(bi(e,1))}function _f(e,t){return ua(e,bi(t,1))}var vf=P(function(e,t){return function(n){return Ki(n,e,t)}}),yf=P(function(e,t){return function(n){return Ki(e,n,t)}});function bf(e,t,n){var r=od(t),i=Ii(t,r);n==null&&(!vu(t)||!i.length&&r.length)&&(n=t,t=e,e=this,i=Ii(t,od(t)));var a=!(vu(n)&&`chain`in n)||!!n.chain,o=hu(e);return Sn(i,function(n){var r=t[n];e[n]=r,o&&(e.prototype[n]=function(){var t=this.__chain__;if(a||t){var n=e(this.__wrapped__);return(n.__actions__=io(this.__actions__)).push({func:r,args:arguments,thisArg:e}),n.__chain__=t,n}return r.apply(e,kn([this.value()],arguments))})}),e}function xf(){return cn._===this&&(cn._=St),this}function Sf(){}function Cf(e){return e=H(e),P(function(t){return fa(t,e)})}var wf=Co(On),Tf=Co(wn),Ef=Co(Mn);function Df(e){return as(e)?Hn(Ds(e)):ga(e)}function Of(e){return function(t){return e==null?n:Li(e,t)}}var kf=Eo(),Af=Eo(!0);function jf(){return[]}function Mf(){return!1}function Nf(){return{}}function Pf(){return``}function Ff(){return!0}function If(e,t){if(e=H(e),e<1||e>g)return[];var n=y,r=$t(e,y);t=I(t),e-=y;for(var i=Kn(r,t);++n<e;)t(n);return i}function Lf(e){return V(e)?On(e,Ds):Nu(e)?[e]:io(Es(U(e)))}function Rf(e){var t=++vt;return U(e)+t}var zf=So(function(e,t){return e+t},0),Bf=ko(`ceil`),$=So(function(e,t){return e/t},1),Vf=ko(`floor`);function Hf(e){return e&&e.length?Oi(e,mf,Bi):n}function Uf(e,t){return e&&e.length?Oi(e,I(t,2),Bi):n}function Wf(e){return Vn(e,mf)}function Gf(e,t){return Vn(e,I(t,2))}function Kf(e){return e&&e.length?Oi(e,mf,sa):n}function qf(e,t){return e&&e.length?Oi(e,I(t,2),sa):n}var Jf=So(function(e,t){return e*t},1),Yf=ko(`round`),Xf=So(function(e,t){return e-t},0);function Zf(e){return e&&e.length?Gn(e,mf):0}function Qf(e,t){return e&&e.length?Gn(e,I(t,2)):0}return j.after=wl,j.ary=Tl,j.assign=Ku,j.assignIn=qu,j.assignInWith=W,j.assignWith=Ju,j.at=Yu,j.before=El,j.bind=Dl,j.bindAll=sf,j.bindKey=Ol,j.castArray=ql,j.chain=Bc,j.chunk=js,j.compact=Ms,j.concat=Ns,j.cond=cf,j.conforms=lf,j.constant=uf,j.countBy=Zc,j.create=Xu,j.curry=kl,j.curryRight=Al,j.debounce=jl,j.defaults=Zu,j.defaultsDeep=Qu,j.defer=Ml,j.delay=Nl,j.difference=Ps,j.differenceBy=Fs,j.differenceWith=Is,j.drop=Ls,j.dropRight=Rs,j.dropRightWhile=zs,j.dropWhile=Bs,j.fill=Vs,j.filter=$c,j.flatMap=nl,j.flatMapDeep=rl,j.flatMapDepth=il,j.flatten=Ws,j.flattenDeep=Gs,j.flattenDepth=Ks,j.flip=Pl,j.flow=ff,j.flowRight=pf,j.fromPairs=qs,j.functions=J,j.functionsIn=nd,j.groupBy=sl,j.initial=Xs,j.intersection=Zs,j.intersectionBy=Qs,j.intersectionWith=$s,j.invert=id,j.invertBy=ad,j.invokeMap=ll,j.iteratee=hf,j.keyBy=ul,j.keys=od,j.keysIn=sd,j.map=dl,j.mapKeys=cd,j.mapValues=ld,j.matches=gf,j.matchesProperty=_f,j.memoize=Fl,j.merge=ud,j.mergeWith=dd,j.method=vf,j.methodOf=yf,j.mixin=bf,j.negate=Il,j.nthArg=Cf,j.omit=fd,j.omitBy=pd,j.once=Ll,j.orderBy=fl,j.over=wf,j.overArgs=Rl,j.overEvery=Tf,j.overSome=Ef,j.partial=zl,j.partialRight=Bl,j.partition=pl,j.pick=md,j.pickBy=hd,j.property=Df,j.propertyOf=Of,j.pull=ic,j.pullAll=ac,j.pullAllBy=oc,j.pullAllWith=B,j.pullAt=sc,j.range=kf,j.rangeRight=Af,j.rearg=Vl,j.reject=gl,j.remove=cc,j.rest=Hl,j.reverse=lc,j.sampleSize=vl,j.set=_d,j.setWith=vd,j.shuffle=yl,j.slice=uc,j.sortBy=Sl,j.sortedUniq=_c,j.sortedUniqBy=vc,j.split=Gd,j.spread=Ul,j.tail=yc,j.take=bc,j.takeRight=xc,j.takeRightWhile=Sc,j.takeWhile=Cc,j.tap=Vc,j.throttle=Wl,j.thru=Hc,j.toArray=Bu,j.toPairs=yd,j.toPairsIn=bd,j.toPath=Lf,j.toPlainObject=Wu,j.transform=xd,j.unary=Gl,j.union=wc,j.unionBy=Tc,j.unionWith=Ec,j.uniq=Dc,j.uniqBy=Oc,j.uniqWith=kc,j.unset=Sd,j.unzip=Ac,j.unzipWith=jc,j.update=Cd,j.updateWith=wd,j.values=Td,j.valuesIn=Ed,j.without=Mc,j.words=af,j.wrap=Kl,j.xor=Nc,j.xorBy=Pc,j.xorWith=Fc,j.zip=Ic,j.zipObject=Lc,j.zipObjectDeep=Rc,j.zipWith=zc,j.entries=yd,j.entriesIn=bd,j.extend=qu,j.extendWith=W,bf(j,j),j.add=zf,j.attempt=of,j.camelCase=Ad,j.capitalize=jd,j.ceil=Bf,j.clamp=Dd,j.clone=Jl,j.cloneDeep=Xl,j.cloneDeepWith=Zl,j.cloneWith=Yl,j.conformsTo=Ql,j.deburr=Md,j.defaultTo=df,j.divide=$,j.endsWith=Nd,j.eq=$l,j.escape=Pd,j.escapeRegExp=Fd,j.every=Qc,j.find=el,j.findIndex=Hs,j.findKey=G,j.findLast=tl,j.findLastIndex=Us,j.findLastKey=$u,j.floor=Vf,j.forEach=al,j.forEachRight=ol,j.forIn=ed,j.forInRight=td,j.forOwn=K,j.forOwnRight=q,j.get=rd,j.gt=eu,j.gte=tu,j.has=Y,j.hasIn=X,j.head=Js,j.identity=mf,j.includes=cl,j.indexOf=Ys,j.inRange=Od,j.invoke=Z,j.isArguments=nu,j.isArray=V,j.isArrayBuffer=ru,j.isArrayLike=iu,j.isArrayLikeObject=au,j.isBoolean=ou,j.isBuffer=su,j.isDate=cu,j.isElement=lu,j.isEmpty=uu,j.isEqual=du,j.isEqualWith=fu,j.isError=pu,j.isFinite=mu,j.isFunction=hu,j.isInteger=gu,j.isLength=_u,j.isMap=bu,j.isMatch=xu,j.isMatchWith=Su,j.isNaN=Cu,j.isNative=wu,j.isNil=Eu,j.isNull=Tu,j.isNumber=Du,j.isObject=vu,j.isObjectLike=yu,j.isPlainObject=Ou,j.isRegExp=ku,j.isSafeInteger=Au,j.isSet=ju,j.isString=Mu,j.isSymbol=Nu,j.isTypedArray=Pu,j.isUndefined=Fu,j.isWeakMap=Iu,j.isWeakSet=Lu,j.join=ec,j.kebabCase=Id,j.last=tc,j.lastIndexOf=nc,j.lowerCase=Ld,j.lowerFirst=Rd,j.lt=Ru,j.lte=zu,j.max=Hf,j.maxBy=Uf,j.mean=Wf,j.meanBy=Gf,j.min=Kf,j.minBy=qf,j.stubArray=jf,j.stubFalse=Mf,j.stubObject=Nf,j.stubString=Pf,j.stubTrue=Ff,j.multiply=Jf,j.nth=rc,j.noConflict=xf,j.noop=Sf,j.now=Cl,j.pad=zd,j.padEnd=Bd,j.padStart=Vd,j.parseInt=Hd,j.random=kd,j.reduce=ml,j.reduceRight=hl,j.repeat=Ud,j.replace=Wd,j.result=gd,j.round=Yf,j.runInContext=e,j.sample=_l,j.size=bl,j.snakeCase=Q,j.some=xl,j.sortedIndex=dc,j.sortedIndexBy=fc,j.sortedIndexOf=pc,j.sortedLastIndex=mc,j.sortedLastIndexBy=hc,j.sortedLastIndexOf=gc,j.startCase=Kd,j.startsWith=qd,j.subtract=Xf,j.sum=Zf,j.sumBy=Qf,j.template=Jd,j.times=If,j.toFinite=Vu,j.toInteger=H,j.toLength=Hu,j.toLower=Yd,j.toNumber=Uu,j.toSafeInteger=Gu,j.toString=U,j.toUpper=Xd,j.trim=Zd,j.trimEnd=Qd,j.trimStart=$d,j.truncate=ef,j.unescape=tf,j.uniqueId=Rf,j.upperCase=nf,j.upperFirst=rf,j.each=al,j.eachRight=ol,j.first=Js,bf(j,function(){var e={};return Pi(j,function(t,n){k.call(j.prototype,n)||(e[n]=t)}),e}(),{chain:!1}),j.VERSION=`4.18.1`,Sn([`bind`,`bindKey`,`curry`,`curryRight`,`partial`,`partialRight`],function(e){j[e].placeholder=j}),Sn([`drop`,`take`],function(e,t){M.prototype[e]=function(r){r=r===n?1:Jt(H(r),0);var i=this.__filtered__&&!t?new M(this):this.clone();return i.__filtered__?i.__takeCount__=$t(r,i.__takeCount__):i.__views__.push({size:$t(r,y),type:e+(i.__dir__<0?`Right`:``)}),i},M.prototype[e+`Right`]=function(t){return this.reverse()[e](t).reverse()}}),Sn([`filter`,`map`,`takeWhile`],function(e,t){var n=t+1,r=n==1||n==3;M.prototype[e]=function(e){var t=this.clone();return t.__iteratees__.push({iteratee:I(e,3),type:n}),t.__filtered__=t.__filtered__||r,t}}),Sn([`head`,`last`],function(e,t){var n=`take`+(t?`Right`:``);M.prototype[e]=function(){return this[n](1).value()[0]}}),Sn([`initial`,`tail`],function(e,t){var n=`drop`+(t?``:`Right`);M.prototype[e]=function(){return this.__filtered__?new M(this):this[n](1)}}),M.prototype.compact=function(){return this.filter(mf)},M.prototype.find=function(e){return this.filter(e).head()},M.prototype.findLast=function(e){return this.reverse().find(e)},M.prototype.invokeMap=P(function(e,t){return typeof e==`function`?new M(this):this.map(function(n){return Ki(n,e,t)})}),M.prototype.reject=function(e){return this.filter(Il(I(e)))},M.prototype.slice=function(e,t){e=H(e);var r=this;return r.__filtered__&&(e>0||t<0)?new M(r):(e<0?r=r.takeRight(-e):e&&(r=r.drop(e)),t!==n&&(t=H(t),r=t<0?r.dropRight(-t):r.take(t-e)),r)},M.prototype.takeRightWhile=function(e){return this.reverse().takeWhile(e).reverse()},M.prototype.toArray=function(){return this.take(y)},Pi(M.prototype,function(e,t){var r=/^(?:filter|find|map|reject)|While$/.test(t),i=/^(?:head|last)$/.test(t),a=j[i?`take`+(t==`last`?`Right`:``):t],o=i||/^find/.test(t);a&&(j.prototype[t]=function(){var t=this.__wrapped__,s=i?[1]:arguments,c=t instanceof M,l=s[0],u=c||V(t),d=function(e){var t=a.apply(j,kn([e],s));return i&&f?t[0]:t};u&&r&&typeof l==`function`&&l.length!=1&&(c=u=!1);var f=this.__chain__,p=!!this.__actions__.length,m=o&&!f,h=c&&!p;if(!o&&u){t=h?t:new M(this);var g=e.apply(t,s);return g.__actions__.push({func:Hc,args:[d],thisArg:n}),new Ar(g,f)}return m&&h?e.apply(this,s):(g=this.thru(d),m?i?g.value()[0]:g.value():g)})}),Sn([`pop`,`push`,`shift`,`sort`,`splice`,`unshift`],function(e){var t=pt[e],n=/^(?:push|sort|unshift)$/.test(e)?`tap`:`thru`,r=/^(?:pop|shift)$/.test(e);j.prototype[e]=function(){var e=arguments;if(r&&!this.__chain__){var i=this.value();return t.apply(V(i)?i:[],e)}return this[n](function(n){return t.apply(V(n)?n:[],e)})}}),Pi(M.prototype,function(e,t){var n=j[t];if(n){var r=n.name+``;k.call(Un,r)||(Un[r]=[]),Un[r].push({name:t,func:n})}}),Un[bo(n,s).name]=[{name:`wrapper`,func:n}],M.prototype.clone=jr,M.prototype.reverse=Mr,M.prototype.value=Nr,j.prototype.at=Uc,j.prototype.chain=Wc,j.prototype.commit=Gc,j.prototype.next=Kc,j.prototype.plant=Jc,j.prototype.reverse=Yc,j.prototype.toJSON=j.prototype.valueOf=j.prototype.value=Xc,j.prototype.first=j.prototype.head,Nt&&(j.prototype[Nt]=qc),j})();typeof define==`function`&&typeof define.amd==`object`&&define.amd?(cn._=Sr,define(function(){return Sr})):un?((un.exports=Sr)._=Sr,ln._=Sr):cn._=Sr}).call(e)})),v=c(f(),1),y=g(),b=_(),x=o((e=>{var t=Symbol.for(`react.transitional.element`),n=Symbol.for(`react.fragment`);function r(e,n,r){var i=null;if(r!==void 0&&(i=``+r),n.key!==void 0&&(i=``+n.key),`key`in n)for(var a in r={},n)a!==`key`&&(r[a]=n[a]);else r=n;return n=r.ref,{$$typeof:t,type:e,key:i,ref:n===void 0?null:n,props:r}}e.Fragment=n,e.jsx=r,e.jsxs=r})),S=o(((e,t)=>{t.exports=x()})),C=c(S(),1);function ee(e){if(e.sheet)return e.sheet;for(var t=0;t<document.styleSheets.length;t++)if(document.styleSheets[t].ownerNode===e)return document.styleSheets[t]}function w(e){var t=document.createElement(`style`);return t.setAttribute(`data-emotion`,e.key),e.nonce!==void 0&&t.setAttribute(`nonce`,e.nonce),t.appendChild(document.createTextNode(``)),t.setAttribute(`data-s`,``),t}var te=function(){function e(e){var t=this;this._insertTag=function(e){var n=t.tags.length===0?t.insertionPoint?t.insertionPoint.nextSibling:t.prepend?t.container.firstChild:t.before:t.tags[t.tags.length-1].nextSibling;t.container.insertBefore(e,n),t.tags.push(e)},this.isSpeedy=e.speedy===void 0||e.speedy,this.tags=[],this.ctr=0,this.nonce=e.nonce,this.key=e.key,this.container=e.container,this.prepend=e.prepend,this.insertionPoint=e.insertionPoint,this.before=null}var t=e.prototype;return t.hydrate=function(e){e.forEach(this._insertTag)},t.insert=function(e){this.ctr%(this.isSpeedy?65e3:1)==0&&this._insertTag(w(this));var t=this.tags[this.tags.length-1];if(this.isSpeedy){var n=ee(t);try{n.insertRule(e,n.cssRules.length)}catch{}}else t.appendChild(document.createTextNode(e));this.ctr++},t.flush=function(){this.tags.forEach(function(e){return e.parentNode?.removeChild(e)}),this.tags=[],this.ctr=0},e}(),T=`-ms-`,ne=`-moz-`,E=`-webkit-`,re=`comm`,ie=`rule`,ae=`decl`,oe=`@import`,se=`@keyframes`,ce=`@layer`,le=Math.abs,ue=String.fromCharCode,de=Object.assign;function fe(e,t){return _e(e,0)^45?(((t<<2^_e(e,0))<<2^_e(e,1))<<2^_e(e,2))<<2^_e(e,3):0}function pe(e){return e.trim()}function me(e,t){return(e=t.exec(e))?e[0]:e}function he(e,t,n){return e.replace(t,n)}function ge(e,t){return e.indexOf(t)}function _e(e,t){return e.charCodeAt(t)|0}function ve(e,t,n){return e.slice(t,n)}function ye(e){return e.length}function be(e){return e.length}function xe(e,t){return t.push(e),e}function Se(e,t){return e.map(t).join(``)}var Ce=1,D=1,O=0,we=0,Te=0,Ee=``;function De(e,t,n,r,i,a,o){return{value:e,root:t,parent:n,type:r,props:i,children:a,line:Ce,column:D,length:o,return:``}}function Oe(e,t){return de(De(``,null,null,``,null,null,0),e,{length:-e.length},t)}function ke(){return Te}function Ae(){return Te=we>0?_e(Ee,--we):0,D--,Te===10&&(D=1,Ce--),Te}function je(){return Te=we<O?_e(Ee,we++):0,D++,Te===10&&(D=1,Ce++),Te}function Me(){return _e(Ee,we)}function Ne(){return we}function Pe(e,t){return ve(Ee,e,t)}function Fe(e){switch(e){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function Ie(e){return Ce=D=1,O=ye(Ee=e),we=0,[]}function Le(e){return Ee=``,e}function Re(e){return pe(Pe(we-1,Ve(e===91?e+2:e===40?e+1:e)))}function ze(e){for(;(Te=Me())&&Te<33;)je();return Fe(e)>2||Fe(Te)>3?``:` `}function Be(e,t){for(;--t&&je()&&!(Te<48||Te>102||Te>57&&Te<65||Te>70&&Te<97););return Pe(e,Ne()+(t<6&&Me()==32&&je()==32))}function Ve(e){for(;je();)switch(Te){case e:return we;case 34:case 39:e!==34&&e!==39&&Ve(Te);break;case 40:e===41&&Ve(e);break;case 92:je()}return we}function He(e,t){for(;je()&&e+Te!==57&&(e+Te!==84||Me()!==47););return`/*`+Pe(t,we-1)+`*`+ue(e===47?e:je())}function Ue(e){for(;!Fe(Me());)je();return Pe(e,we)}function We(e){return Le(Ge(``,null,null,null,[``],e=Ie(e),0,[0],e))}function Ge(e,t,n,r,i,a,o,s,c){for(var l=0,u=0,d=o,f=0,p=0,m=0,h=1,g=1,_=1,v=0,y=``,b=i,x=a,S=r,C=y;g;)switch(m=v,v=je()){case 40:if(m!=108&&_e(C,d-1)==58){ge(C+=he(Re(v),`&`,`&\f`),`&\f`)!=-1&&(_=-1);break}case 34:case 39:case 91:C+=Re(v);break;case 9:case 10:case 13:case 32:C+=ze(m);break;case 92:C+=Be(Ne()-1,7);continue;case 47:switch(Me()){case 42:case 47:xe(qe(He(je(),Ne()),t,n),c);break;default:C+=`/`}break;case 123*h:s[l++]=ye(C)*_;case 125*h:case 59:case 0:switch(v){case 0:case 125:g=0;case 59+u:_==-1&&(C=he(C,/\f/g,``)),p>0&&ye(C)-d&&xe(p>32?Je(C+`;`,r,n,d-1):Je(he(C,` `,``)+`;`,r,n,d-2),c);break;case 59:C+=`;`;default:if(xe(S=Ke(C,t,n,l,u,i,s,y,b=[],x=[],d),a),v===123){if(u===0)Ge(C,t,S,S,b,a,d,s,x);else switch(f===99&&_e(C,3)===110?100:f){case 100:case 108:case 109:case 115:Ge(e,S,S,r&&xe(Ke(e,S,S,0,0,i,s,y,i,b=[],d),x),i,x,d,s,r?b:x);break;default:Ge(C,S,S,S,[``],x,0,s,x)}}}l=u=p=0,h=_=1,y=C=``,d=o;break;case 58:d=1+ye(C),p=m;default:if(h<1){if(v==123)--h;else if(v==125&&h++==0&&Ae()==125)continue}switch(C+=ue(v),v*h){case 38:_=u>0?1:(C+=`\f`,-1);break;case 44:s[l++]=(ye(C)-1)*_,_=1;break;case 64:Me()===45&&(C+=Re(je())),f=Me(),u=d=ye(y=C+=Ue(Ne())),v++;break;case 45:m===45&&ye(C)==2&&(h=0)}}return a}function Ke(e,t,n,r,i,a,o,s,c,l,u){for(var d=i-1,f=i===0?a:[``],p=be(f),m=0,h=0,g=0;m<r;++m)for(var _=0,v=ve(e,d+1,d=le(h=o[m])),y=e;_<p;++_)(y=pe(h>0?f[_]+` `+v:he(v,/&\f/g,f[_])))&&(c[g++]=y);return De(e,t,n,i===0?ie:s,c,l,u)}function qe(e,t,n){return De(e,t,n,re,ue(ke()),ve(e,2,-2),0)}function Je(e,t,n,r){return De(e,t,n,ae,ve(e,0,r),ve(e,r+1,-1),r)}function Ye(e,t){for(var n=``,r=be(e),i=0;i<r;i++)n+=t(e[i],i,e,t)||``;return n}function Xe(e,t,n,r){switch(e.type){case ce:if(e.children.length)break;case oe:case ae:return e.return=e.return||e.value;case re:return``;case se:return e.return=e.value+`{`+Ye(e.children,r)+`}`;case ie:e.value=e.props.join(`,`)}return ye(n=Ye(e.children,r))?e.return=e.value+`{`+n+`}`:``}function Ze(e){var t=be(e);return function(n,r,i,a){for(var o=``,s=0;s<t;s++)o+=e[s](n,r,i,a)||``;return o}}function Qe(e){return function(t){t.root||(t=t.return)&&e(t)}}function $e(e){var t=Object.create(null);return function(n){return t[n]===void 0&&(t[n]=e(n)),t[n]}}var et=function(e,t,n){for(var r=0,i=0;r=i,i=Me(),r===38&&i===12&&(t[n]=1),!Fe(i);)je();return Pe(e,we)},tt=function(e,t){var n=-1,r=44;do switch(Fe(r)){case 0:r===38&&Me()===12&&(t[n]=1),e[n]+=et(we-1,t,n);break;case 2:e[n]+=Re(r);break;case 4:if(r===44){e[++n]=Me()===58?`&\f`:``,t[n]=e[n].length;break}default:e[n]+=ue(r)}while(r=je());return e},nt=function(e,t){return Le(tt(Ie(e),t))},rt=new WeakMap,it=function(e){if(!(e.type!==`rule`||!e.parent||e.length<1)){for(var t=e.value,n=e.parent,r=e.column===n.column&&e.line===n.line;n.type!==`rule`;)if(n=n.parent,!n)return;if((e.props.length!==1||t.charCodeAt(0)===58||rt.get(n))&&!r){rt.set(e,!0);for(var i=[],a=nt(t,i),o=n.props,s=0,c=0;s<a.length;s++)for(var l=0;l<o.length;l++,c++)e.props[c]=i[s]?a[s].replace(/&\f/g,o[l]):o[l]+` `+a[s]}}},at=function(e){if(e.type===`decl`){var t=e.value;t.charCodeAt(0)===108&&t.charCodeAt(2)===98&&(e.return=``,e.value=``)}};function ot(e,t){switch(fe(e,t)){case 5103:return E+`print-`+e+e;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return E+e+e;case 5349:case 4246:case 4810:case 6968:case 2756:return E+e+ne+e+T+e+e;case 6828:case 4268:return E+e+T+e+e;case 6165:return E+e+T+`flex-`+e+e;case 5187:return E+e+he(e,/(\w+).+(:[^]+)/,E+`box-$1$2`+T+`flex-$1$2`)+e;case 5443:return E+e+T+`flex-item-`+he(e,/flex-|-self/,``)+e;case 4675:return E+e+T+`flex-line-pack`+he(e,/align-content|flex-|-self/,``)+e;case 5548:return E+e+T+he(e,`shrink`,`negative`)+e;case 5292:return E+e+T+he(e,`basis`,`preferred-size`)+e;case 6060:return E+`box-`+he(e,`-grow`,``)+E+e+T+he(e,`grow`,`positive`)+e;case 4554:return E+he(e,/([^-])(transform)/g,`$1`+E+`$2`)+e;case 6187:return he(he(he(e,/(zoom-|grab)/,E+`$1`),/(image-set)/,E+`$1`),e,``)+e;case 5495:case 3959:return he(e,/(image-set\([^]*)/,E+"$1$`$1");case 4968:return he(he(e,/(.+:)(flex-)?(.*)/,E+`box-pack:$3`+T+`flex-pack:$3`),/s.+-b[^;]+/,`justify`)+E+e+e;case 4095:case 3583:case 4068:case 2532:return he(e,/(.+)-inline(.+)/,E+`$1$2`)+e;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(ye(e)-1-t>6)switch(_e(e,t+1)){case 109:if(_e(e,t+4)!==45)break;case 102:return he(e,/(.+:)(.+)-([^]+)/,`$1`+E+`$2-$3$1`+ne+(_e(e,t+3)==108?`$3`:`$2-$3`))+e;case 115:return~ge(e,`stretch`)?ot(he(e,`stretch`,`fill-available`),t)+e:e}break;case 4949:if(_e(e,t+1)!==115)break;case 6444:switch(_e(e,ye(e)-3-(~ge(e,`!important`)&&10))){case 107:return he(e,`:`,`:`+E)+e;case 101:return he(e,/(.+:)([^;!]+)(;|!.+)?/,`$1`+E+(_e(e,14)===45?`inline-`:``)+`box$3$1`+E+`$2$3$1`+T+`$2box$3`)+e}break;case 5936:switch(_e(e,t+11)){case 114:return E+e+T+he(e,/[svh]\w+-[tblr]{2}/,`tb`)+e;case 108:return E+e+T+he(e,/[svh]\w+-[tblr]{2}/,`tb-rl`)+e;case 45:return E+e+T+he(e,/[svh]\w+-[tblr]{2}/,`lr`)+e}return E+e+T+e+e}return e}var st=[function(e,t,n,r){if(e.length>-1&&!e.return)switch(e.type){case ae:e.return=ot(e.value,e.length);break;case se:return Ye([Oe(e,{value:he(e.value,`@`,`@`+E)})],r);case ie:if(e.length)return Se(e.props,function(t){switch(me(t,/(::plac\w+|:read-\w+)/)){case`:read-only`:case`:read-write`:return Ye([Oe(e,{props:[he(t,/:(read-\w+)/,`:`+ne+`$1`)]})],r);case`::placeholder`:return Ye([Oe(e,{props:[he(t,/:(plac\w+)/,`:`+E+`input-$1`)]}),Oe(e,{props:[he(t,/:(plac\w+)/,`:`+ne+`$1`)]}),Oe(e,{props:[he(t,/:(plac\w+)/,T+`input-$1`)]})],r)}return``})}}],ct=function(e){var t=e.key;if(t===`css`){var n=document.querySelectorAll(`style[data-emotion]:not([data-s])`);Array.prototype.forEach.call(n,function(e){e.getAttribute(`data-emotion`).indexOf(` `)!==-1&&(document.head.appendChild(e),e.setAttribute(`data-s`,``))})}var r=e.stylisPlugins||st,i={},a,o=[];a=e.container||document.head,Array.prototype.forEach.call(document.querySelectorAll(`style[data-emotion^="`+t+` "]`),function(e){for(var t=e.getAttribute(`data-emotion`).split(` `),n=1;n<t.length;n++)i[t[n]]=!0;o.push(e)});var s,c=[it,at],l,u=[Xe,Qe(function(e){l.insert(e)})],d=Ze(c.concat(r,u)),f=function(e){return Ye(We(e),d)};s=function(e,t,n,r){l=n,f(e?e+`{`+t.styles+`}`:t.styles),r&&(p.inserted[t.name]=!0)};var p={key:t,sheet:new te({key:t,container:a,nonce:e.nonce,speedy:e.speedy,prepend:e.prepend,insertionPoint:e.insertionPoint}),nonce:e.nonce,inserted:i,registered:{},insert:s};return p.sheet.hydrate(o),p};function lt(e,t,n){var r=``;return n.split(` `).forEach(function(n){e[n]===void 0?n&&(r+=n+` `):t.push(e[n]+`;`)}),r}var ut=function(e,t,n){var r=e.key+`-`+t.name;n===!1&&e.registered[r]===void 0&&(e.registered[r]=t.styles)},dt=function(e,t,n){ut(e,t,n);var r=e.key+`-`+t.name;if(e.inserted[t.name]===void 0){var i=t;do e.insert(t===i?`.`+r:``,i,e.sheet,!0),i=i.next;while(i!==void 0)}};function ft(e){for(var t=0,n,r=0,i=e.length;i>=4;++r,i-=4)n=e.charCodeAt(r)&255|(e.charCodeAt(++r)&255)<<8|(e.charCodeAt(++r)&255)<<16|(e.charCodeAt(++r)&255)<<24,n=(n&65535)*1540483477+((n>>>16)*59797<<16),n^=n>>>24,t=(n&65535)*1540483477+((n>>>16)*59797<<16)^(t&65535)*1540483477+((t>>>16)*59797<<16);switch(i){case 3:t^=(e.charCodeAt(r+2)&255)<<16;case 2:t^=(e.charCodeAt(r+1)&255)<<8;case 1:t^=e.charCodeAt(r)&255,t=(t&65535)*1540483477+((t>>>16)*59797<<16)}return t^=t>>>13,t=(t&65535)*1540483477+((t>>>16)*59797<<16),((t^t>>>15)>>>0).toString(36)}var pt={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,scale:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},mt=/[A-Z]|^ms/g,ht=/_EMO_([^_]+?)_([^]*?)_EMO_/g,gt=function(e){return e.charCodeAt(1)===45},_t=function(e){return e!=null&&typeof e!=`boolean`},k=$e(function(e){return gt(e)?e:e.replace(mt,`-$&`).toLowerCase()}),vt=function(e,t){switch(e){case`animation`:case`animationName`:if(typeof t==`string`)return t.replace(ht,function(e,t,n){return St={name:t,styles:n,next:St},t})}return pt[e]!==1&&!gt(e)&&typeof t==`number`&&t!==0?t+`px`:t};function yt(e,t,n){if(n==null)return``;var r=n;if(r.__emotion_styles!==void 0)return r;switch(typeof n){case`boolean`:return``;case`object`:var i=n;if(i.anim===1)return St={name:i.name,styles:i.styles,next:St},i.name;var a=n;if(a.styles!==void 0){var o=a.next;if(o!==void 0)for(;o!==void 0;)St={name:o.name,styles:o.styles,next:St},o=o.next;return a.styles+`;`}return bt(e,t,n);case`function`:if(e!==void 0){var s=St,c=n(e);return St=s,yt(e,t,c)}}var l=n;if(t==null)return l;var u=t[l];return u===void 0?l:u}function bt(e,t,n){var r=``;if(Array.isArray(n))for(var i=0;i<n.length;i++)r+=yt(e,t,n[i])+`;`;else for(var a in n){var o=n[a];if(typeof o!=`object`){var s=o;t!=null&&t[s]!==void 0?r+=a+`{`+t[s]+`}`:_t(s)&&(r+=k(a)+`:`+vt(a,s)+`;`)}else if(Array.isArray(o)&&typeof o[0]==`string`&&(t==null||t[o[0]]===void 0))for(var c=0;c<o.length;c++)_t(o[c])&&(r+=k(a)+`:`+vt(a,o[c])+`;`);else{var l=yt(e,t,o);switch(a){case`animation`:case`animationName`:r+=k(a)+`:`+l+`;`;break;default:r+=a+`{`+l+`}`}}}return r}var xt=/label:\s*([^\s;{]+)\s*(;|$)/g,St;function Ct(e,t,n){if(e.length===1&&typeof e[0]==`object`&&e[0]!==null&&e[0].styles!==void 0)return e[0];var r=!0,i=``;St=void 0;var a=e[0];a==null||a.raw===void 0?(r=!1,i+=yt(n,t,a)):i+=a[0];for(var o=1;o<e.length;o++)i+=yt(n,t,e[o]),r&&(i+=a[o]);xt.lastIndex=0;for(var s=``,c;(c=xt.exec(i))!==null;)s+=`-`+c[1];return{name:ft(i)+s,styles:i,next:St}}function wt(e){return{type:`auth`,access_token:e}}function Tt(){return{type:`supported_features`,id:1,features:{coalesce_messages:1}}}function Et(){return{type:`get_states`}}function Dt(){return{type:`get_config`}}function Ot(){return{type:`get_services`}}function kt(){return{type:`auth/current_user`}}function At(e,t,n,r,i){let a={type:`call_service`,domain:e,service:t,target:r,return_response:i};return n&&(a.service_data=n),a}function jt(e){let t={type:`subscribe_events`};return e&&(t.event_type=e),t}function Mt(e){return{type:`unsubscribe_events`,subscription:e}}function Nt(){return{type:`ping`}}function Pt(e,t){return{type:`result`,success:!1,error:{code:e,message:t}}}function Ft(e){let t={},n=e.split(`&`);for(let e=0;e<n.length;e++){let r=n[e].split(`=`),i=decodeURIComponent(r[0]);t[i]=r.length>1?decodeURIComponent(r[1]):void 0}return t}var It=(e,t,n=!1)=>{let r;return function(...i){let a=this,o=()=>{r=void 0,n||e.apply(a,i)},s=n&&!r;clearTimeout(r),r=setTimeout(o,t),s&&e.apply(a,i)}},Lt=(e,t,n,r)=>{let[i,a,o]=e.split(`.`,3);return Number(i)>t||Number(i)===t&&(r===void 0?Number(a)>=n:Number(a)>n)||r!==void 0&&Number(i)===t&&Number(a)===n&&Number(o)>=r},Rt=1e4,zt=`auth_invalid`,Bt=`auth_ok`;function Vt(e){if(!e.auth)throw 4;let t=e.auth,n=t.expired?t.refreshAccessToken().then(()=>{n=void 0},()=>{n=void 0}):void 0,r=t.wsUrl,i=e.connectTimeout??Rt;function a(e,o,s){let c=new WebSocket(r),l=!1,u=i>0?setTimeout(()=>{c.close()},i):void 0,d=()=>{u!==void 0&&clearTimeout(u)},f=()=>{if(d(),c.removeEventListener(`close`,f),l){s(2);return}if(e===0){s(1);return}let t=e===-1?-1:e-1;setTimeout(()=>a(t,o,s),1e3)},p=async e=>{d();try{t.expired&&await(n||t.refreshAccessToken()),c.send(JSON.stringify(wt(t.accessToken)))}catch(e){l=e===2,c.close()}},m=async e=>{let t=JSON.parse(e.data);switch(t.type){case zt:l=!0,c.close();break;case Bt:c.removeEventListener(`open`,p),c.removeEventListener(`message`,m),c.removeEventListener(`close`,f),c.removeEventListener(`error`,f),c.haVersion=t.ha_version,Lt(c.haVersion,2022,9)&&c.send(JSON.stringify(Tt())),o(c)}};c.addEventListener(`open`,p),c.addEventListener(`message`,m),c.addEventListener(`close`,f),c.addEventListener(`error`,f)}return new Promise((t,n)=>a(e.setupRetry,t,n))}var Ht=class{constructor(e,t){this._handleMessage=e=>{let t=JSON.parse(e.data);Array.isArray(t)||(t=[t]),t.forEach(e=>{let t=this.commands.get(e.id);switch(e.type){case`event`:t?t.callback(e.event):(console.warn(`Received event for unknown subscription ${e.id}. Unsubscribing.`),this.sendMessagePromise(Mt(e.id)).catch(e=>{}));break;case`result`:t&&(e.success?(t.resolve(e.result),`subscribe`in t||this.commands.delete(e.id)):(t.reject(e.error),this.commands.delete(e.id)));break;case`pong`:t?(t.resolve(),this.commands.delete(e.id)):console.warn(`Received unknown pong response ${e.id}`)}})},this._handleClose=async()=>{let e=this.commands;if(this.commandId=1,this.oldSubscriptions=this.commands,this.commands=new Map,this.socket=void 0,e.forEach(e=>{`subscribe`in e||e.reject(Pt(3,`Connection lost`))}),this.closeRequested)return;this.fireEvent(`disconnected`);let t=Object.assign(Object.assign({},this.options),{setupRetry:0}),n=e=>{setTimeout(async()=>{if(!this.closeRequested)try{let e=await t.createSocket(t);this._setSocket(e)}catch(t){if(this._queuedMessages){let e=this._queuedMessages;this._queuedMessages=void 0;for(let t of e)t.reject&&t.reject(3)}t===2?this.fireEvent(`reconnect-error`,t):n(e+1)}},Math.min(e,5)*1e3)};this.suspendReconnectPromise&&(await this.suspendReconnectPromise,this.suspendReconnectPromise=void 0,this._queuedMessages=[]),n(0)},this.options=t,this.commandId=2,this.commands=new Map,this.eventListeners=new Map,this.closeRequested=!1,this._setSocket(e)}get connected(){return this.socket!==void 0&&this.socket.readyState==this.socket.OPEN}_setSocket(e){this.socket=e,this.haVersion=e.haVersion,e.addEventListener(`message`,this._handleMessage),e.addEventListener(`close`,this._handleClose);let t=this.oldSubscriptions;t&&(this.oldSubscriptions=void 0,t.forEach(e=>{`subscribe`in e&&e.subscribe&&e.subscribe().then(t=>{e.unsubscribe=t,e.resolve()})}));let n=this._queuedMessages;if(n){this._queuedMessages=void 0;for(let e of n)e.resolve()}this.fireEvent(`ready`)}addEventListener(e,t){let n=this.eventListeners.get(e);n||(n=[],this.eventListeners.set(e,n)),n.push(t)}removeEventListener(e,t){let n=this.eventListeners.get(e);if(!n)return;let r=n.indexOf(t);r!==-1&&n.splice(r,1)}fireEvent(e,t){(this.eventListeners.get(e)||[]).forEach(e=>e(this,t))}suspendReconnectUntil(e){this.suspendReconnectPromise=e}suspend(){if(!this.suspendReconnectPromise)throw Error(`Suspend promise not set`);this.socket&&this.socket.close()}reconnect(e=!1){if(this.socket){if(!e){this.socket.close();return}this.socket.removeEventListener(`message`,this._handleMessage),this.socket.removeEventListener(`close`,this._handleClose),this.socket.close(),this._handleClose()}}close(){this.closeRequested=!0,this.socket&&this.socket.close()}async subscribeEvents(e,t){return this.subscribeMessage(e,jt(t))}ping(){return this.sendMessagePromise(Nt())}sendMessage(e,t){if(!this.connected)throw 3;if(this._queuedMessages){if(t)throw Error(`Cannot queue with commandId`);this._queuedMessages.push({resolve:()=>this.sendMessage(e)});return}t||=this._genCmdId(),e.id=t,this.socket.send(JSON.stringify(e))}sendMessagePromise(e){return new Promise((t,n)=>{if(this._queuedMessages){this._queuedMessages.push({reject:n,resolve:async()=>{try{t(await this.sendMessagePromise(e))}catch(e){n(e)}}});return}let r=this._genCmdId();this.commands.set(r,{resolve:t,reject:n}),this.sendMessage(e,r)})}async subscribeMessage(e,t,n){if(this._queuedMessages&&await new Promise((e,t)=>{this._queuedMessages.push({resolve:e,reject:t})}),n?.preCheck&&!await n.preCheck())throw Error(`Pre-check failed`);let r;return await new Promise((i,a)=>{let o=this._genCmdId();r={resolve:i,reject:a,callback:e,subscribe:n?.resubscribe===!1?void 0:()=>this.subscribeMessage(e,t,n),unsubscribe:async()=>{this.connected&&await this.sendMessagePromise(Mt(o)),this.commands.delete(o)}},this.commands.set(o,r);try{this.sendMessage(t,o)}catch{}}),()=>r.unsubscribe()}_genCmdId(){return++this.commandId}},Ut=()=>`${location.protocol}//${location.host}/`,Wt=e=>e*1e3+Date.now();function Gt(){let{protocol:e,host:t,pathname:n,search:r}=location;return`${e}//${t}${n}${r}`}function Kt(e,t,n,r){let i=`${e}/auth/authorize?response_type=code&redirect_uri=${encodeURIComponent(n)}`;return t!==null&&(i+=`&client_id=${encodeURIComponent(t)}`),r&&(i+=`&state=${encodeURIComponent(r)}`),i}function qt(e,t,n,r){n+=(n.includes(`?`)?`&`:`?`)+`auth_callback=1`,document.location.href=Kt(e,t,n,r)}async function Jt(e,t,n){let r=typeof location<`u`&&location;if(r&&r.protocol===`https:`){let t=document.createElement(`a`);if(t.href=e,t.protocol===`http:`&&t.hostname!==`localhost`)throw 5}let i=new FormData;t!==null&&i.append(`client_id`,t),Object.keys(n).forEach(e=>{i.append(e,n[e])});let a=await fetch(`${e}/auth/token`,{method:`POST`,credentials:`same-origin`,body:i});if(!a.ok)throw a.status===400||a.status===403?2:Error(`Unable to fetch tokens`);let o=await a.json();return o.hassUrl=e,o.clientId=t,o.expires=Wt(o.expires_in),o}function Yt(e,t,n){return Jt(e,t,{code:n,grant_type:`authorization_code`})}function Xt(e){return btoa(JSON.stringify(e))}function Zt(e){return JSON.parse(atob(e))}var Qt=class{constructor(e,t){this.data=e,this._saveTokens=t}get wsUrl(){return`ws${this.data.hassUrl.substr(4)}/api/websocket`}get accessToken(){return this.data.access_token}get expired(){return Date.now()>this.data.expires}async refreshAccessToken(){if(!this.data.refresh_token)throw Error(`No refresh_token`);let e=await Jt(this.data.hassUrl,this.data.clientId,{grant_type:`refresh_token`,refresh_token:this.data.refresh_token});e.refresh_token=this.data.refresh_token,this.data=e,this._saveTokens&&this._saveTokens(e)}async revoke(){if(!this.data.refresh_token)throw Error(`No refresh_token to revoke`);let e=new FormData;e.append(`token`,this.data.refresh_token),await fetch(`${this.data.hassUrl}/auth/revoke`,{method:`POST`,credentials:`same-origin`,body:e}),this._saveTokens&&this._saveTokens(null)}};function $t(e,t){return new Qt({hassUrl:e,clientId:null,expires:Date.now()+1e11,refresh_token:``,access_token:t,expires_in:1e11})}async function en(e={}){let t,n=e.hassUrl;n&&n[n.length-1]===`/`&&(n=n.substr(0,n.length-1));let r=e.clientId===void 0?Ut():e.clientId,i=e.limitHassInstance===!0;if(e.authCode&&n&&(t=await Yt(n,r,e.authCode),e.saveTokens&&e.saveTokens(t)),!t){let a=Ft(location.search.substr(1));if(`auth_callback`in a){let o=Zt(a.state);if(i&&(o.hassUrl!==n||o.clientId!==r))throw 6;t=await Yt(o.hassUrl,o.clientId,a.code),e.saveTokens&&e.saveTokens(t)}}if(!t&&e.loadTokens&&(t=await e.loadTokens()),t&&(n===void 0||t.hassUrl===n))return new Qt(t,e.saveTokens);if(n===void 0)throw 4;return qt(n,r,e.redirectUrl||Gt(),Xt({hassUrl:n,clientId:r})),new Promise(()=>{})}var tn=e=>{let t=[];function n(e){let n=[];for(let r=0;r<t.length;r++)t[r]===e?e=null:n.push(t[r]);t=n}function r(n,r){e=r?n:Object.assign(Object.assign({},e),n);let i=t;for(let t=0;t<i.length;t++)i[t](e)}return{get state(){return e},action(t){function n(e){r(e,!1)}return function(){let r=[e];for(let e=0;e<arguments.length;e++)r.push(arguments[e]);let i=t.apply(this,r);if(i!=null)return i instanceof Promise?i.then(n):n(i)}},setState:r,clearState(){e=void 0},subscribe(e){return t.push(e),()=>{n(e)}}}},nn=5e3,rn=(e,t,n,r,i={unsubGrace:!0})=>{if(e[t])return e[t];let a=0,o,s,c=tn(),l=()=>{if(!n)throw Error(`Collection does not support refresh`);return n(e).then(e=>c.setState(e,!0))},u=()=>l().catch(t=>{if(e.connected)throw t}),d=()=>{if(s!==void 0){clearTimeout(s),s=void 0;return}r&&(o=r(e,c)),n&&(e.addEventListener(`ready`,u),u()),e.addEventListener(`disconnected`,m)},f=()=>{s=void 0,o&&o.then(e=>{e()}),c.clearState(),e.removeEventListener(`ready`,l),e.removeEventListener(`disconnected`,m)},p=()=>{s=setTimeout(f,nn)},m=()=>{s&&(clearTimeout(s),f())};return e[t]={get state(){return c.state},refresh:l,subscribe(e){a++,a===1&&d();let t=c.subscribe(e);return c.state!==void 0&&setTimeout(()=>e(c.state),0),()=>{t(),a--,a||(i.unsubGrace?p():f())}}},e[t]},an=(e,t,n,r,i)=>rn(r,e,t,n).subscribe(i),on=e=>e.sendMessagePromise(Et()),sn=e=>e.sendMessagePromise(Ot()),cn=e=>e.sendMessagePromise(Dt()),ln=e=>e.sendMessagePromise(kt()),un=(e,t,n,r,i,a)=>e.sendMessagePromise(At(t,n,r,i,a));function dn(e,t){return e===void 0?null:{components:e.components.concat(t.data.component)}}var fn=e=>cn(e),pn=(e,t)=>Promise.all([e.subscribeEvents(t.action(dn),`component_loaded`),e.subscribeEvents(()=>fn(e).then(e=>t.setState(e,!0)),`core_config_updated`)]).then(e=>()=>e.forEach(e=>e())),mn=e=>rn(e,`_cnf`,fn,pn),hn=(e,t)=>mn(e).subscribe(t);function gn(e,t,n){let r=t.state;if(r===void 0)return;let{domain:i,service:a}=n.data;if(!r.domain?.service){let e=Object.assign(Object.assign({},r[i]),{[a]:{description:``,fields:{}}});t.setState({[i]:e})}vn(e,t)}function _n(e,t){if(e===void 0)return null;let{domain:n,service:r}=t.data,i=e[n];if(!i||!(r in i))return null;let a={};return Object.keys(i).forEach(e=>{e!==r&&(a[e]=i[e])}),{[n]:a}}var vn=It((e,t)=>yn(e).then(e=>t.setState(e,!0)),5e3),yn=e=>sn(e),bn=(e,t)=>Promise.all([e.subscribeEvents(n=>gn(e,t,n),`service_registered`),e.subscribeEvents(t.action(_n),`service_removed`)]).then(e=>()=>e.forEach(e=>e())),xn=e=>rn(e,`_srv`,yn,bn),Sn=(e,t)=>xn(e).subscribe(t);function Cn(e,t){let n=Object.assign({},e.state);if(t.a)for(let e in t.a){let r=t.a[e],i=new Date(r.lc*1e3).toISOString();n[e]={entity_id:e,state:r.s,attributes:r.a,context:typeof r.c==`string`?{id:r.c,parent_id:null,user_id:null}:r.c,last_changed:i,last_updated:r.lu?new Date(r.lu*1e3).toISOString():i}}if(t.r)for(let e of t.r)delete n[e];if(t.c)for(let e in t.c){let r=n[e];if(!r){console.warn(`Received state update for unknown entity`,e);continue}r=Object.assign({},r);let{"+":i,"-":a}=t.c[e],o=i?.a||a?.a,s=o?Object.assign({},r.attributes):r.attributes;if(i&&(i.s!==void 0&&(r.state=i.s),i.c&&(typeof i.c==`string`?r.context=Object.assign(Object.assign({},r.context),{id:i.c}):r.context=Object.assign(Object.assign({},r.context),i.c)),i.lc?r.last_updated=r.last_changed=new Date(i.lc*1e3).toISOString():i.lu&&(r.last_updated=new Date(i.lu*1e3).toISOString()),i.a&&Object.assign(s,i.a)),a?.a)for(let e of a.a)delete s[e];o&&(r.attributes=s),n[e]=r}e.setState(n,!0)}var wn=(e,t)=>e.subscribeMessage(e=>Cn(t,e),{type:`subscribe_entities`});function Tn(e,t){let n=e.state;if(n===void 0)return;let{entity_id:r,new_state:i}=t.data;if(i)e.setState({[i.entity_id]:i});else{let t=Object.assign({},n);delete t[r],e.setState(t,!0)}}async function En(e){let t=await on(e),n={};for(let e=0;e<t.length;e++){let r=t[e];n[r.entity_id]=r}return n}var Dn=(e,t)=>e.subscribeEvents(e=>Tn(t,e),`state_changed`),On=e=>Lt(e.haVersion,2022,4,0)?rn(e,`_ent`,void 0,wn):rn(e,`_ent`,En,Dn),kn=(e,t)=>On(e).subscribe(t);async function An(e){let t=Object.assign({setupRetry:0,createSocket:Vt},e);return new Ht(await t.createSocket(t),t)}var jn=typeof window<`u`?window.localStorage:null,Mn=jn!==null;function Nn(){Mn?jn.removeItem(`hassTokens`):console.error(`Local storage not supported on this device.`)}function Pn(e){if(Mn)try{jn.setItem(`hassTokens`,JSON.stringify(e))}catch(e){console.error(`Failed to save tokens, probably due to private mode or storage full`,e)}else console.error(`Local storage not supported on this device.`)}function Fn(e,t=!0){if(!Mn)return console.error(`Local storage not supported on this device.`),null;let n=jn.getItem(`hassTokens`);if(n)try{let r=JSON.parse(n);if(r.hassUrl===e)return r;if(t)return Nn(),null}catch(e){return console.error(`Error parsing stored tokens.`,e?.message||``),Nn(),null}return null}var In=e=>{let t,n=new Set,r=(e,r)=>{let i=typeof e==`function`?e(t):e;if(!Object.is(i,t)){let e=t;t=r??(typeof i!=`object`||!i)?i:Object.assign({},t,i),n.forEach(n=>n(t,e))}},i=()=>t,a={setState:r,getState:i,getInitialState:()=>o,subscribe:e=>(n.add(e),()=>n.delete(e))},o=t=e(r,i,a);return a},Ln=(e=>e?In(e):In),Rn=e=>e;function zn(e,t=Rn){let n=v.useSyncExternalStore(e.subscribe,v.useCallback(()=>t(e.getState()),[e,t]),v.useCallback(()=>t(e.getInitialState()),[e,t]));return v.useDebugValue(n),n}var Bn=e=>{let t=Ln(e),n=e=>zn(t,e);return Object.assign(n,t),n},Vn=(e=>e?Bn(e):Bn),Hn=(function(){let e=typeof document<`u`&&document.createElement(`link`).relList;return e&&e.supports&&e.supports(`modulepreload`)?`modulepreload`:`preload`})(),Un=function(e,t){return new URL(e,t).href},Wn={},A=function(e,t,n){let r=Promise.resolve();if(t&&t.length>0){let e=document.getElementsByTagName(`link`),i=document.querySelector(`meta[property=csp-nonce]`),a=i?.nonce||i?.getAttribute(`nonce`);function o(e){return Promise.all(e.map(e=>Promise.resolve(e).then(e=>({status:`fulfilled`,value:e}),e=>({status:`rejected`,reason:e}))))}function s(e){return import.meta.resolve?import.meta.resolve(e):new URL(e,import.meta.url).href}r=o(t.map(t=>{if(t=Un(t,n),t=s(t),t in Wn)return;Wn[t]=!0;let r=t.endsWith(`.css`);for(let n=e.length-1;n>=0;n--){let i=e[n];if(i.href===t&&(!r||i.rel===`stylesheet`))return}let i=document.createElement(`link`);if(i.rel=r?`stylesheet`:Hn,r||(i.as=`script`),i.crossOrigin=``,i.href=t,a&&i.setAttribute(`nonce`,a),document.head.appendChild(i),r)return new Promise((e,n)=>{i.addEventListener(`load`,e),i.addEventListener(`error`,()=>n(Error(`Unable to preload CSS for ${t}`)))})}).filter(e=>e!==void 0))}function i(e){let t=new Event(`vite:preloadError`,{cancelable:!0});if(t.payload=e,window.dispatchEvent(t),!t.defaultPrevented)throw e}return r.then(t=>{for(let e of t||[])e.status===`rejected`&&i(e.reason);return e().catch(i)})},Gn=(e,t,n)=>{let r=e[t];return r?typeof r==`function`?r():Promise.resolve(r):new Promise((e,r)=>{(typeof queueMicrotask==`function`?queueMicrotask:setTimeout)(r.bind(null,Error(`Unknown variable dynamic import: `+t+(t.split(`/`).length===n?``:`. Note that variables only represent file names one level deep.`))))})},Kn={},qn=[{code:`af`,hash:`a0f076339d8da6ddfaff27769928d414`,name:`Afrikaans`},{code:`ar`,hash:`47f82bd73d0d248e7edd924bcea1e341`,name:`العربية`},{code:`bg`,hash:`0b90285b73e35715d9306423264194c8`,name:`Български`},{code:`bn`,hash:`aa188fc15cb8be5cfcdb95c1e7d18025`,name:`বাংলা`},{code:`bs`,hash:`df5713a2a8f86cf7499583b1c8575820`,name:`Bosanski`},{code:`ca`,hash:`9e4979937070edb93be05ff5b6cac8cb`,name:`Català`},{code:`cs`,hash:`f9dc651353b0b2ecb1adbe2b92f5cc01`,name:`Čeština`},{code:`cy`,hash:`f6faf915421db6dd1d39b70be45a8e54`,name:`Cymraeg`},{code:`da`,hash:`263ca3a50b0cd2f43472e0cb57ef5f80`,name:`Dansk`},{code:`de`,hash:`4b920fc7c58aa42d9603117aa71b9a61`,name:`Deutsch`},{code:`el`,hash:`d6de69aa7e1c7e07a3ca2af3cdba9c57`,name:`Ελληνικά`},{code:`en`,hash:`f44c6fb1abaaeacf587fa122f38e0a35`,name:`English`},{code:`en-GB`,hash:`eeb99ff4b9c997a0c0a99306cca6243b`,name:`English (GB)`},{code:`eo`,hash:`0de839e3ad3e3189ec37160fe540c75e`,name:`Esperanto`},{code:`es`,hash:`3fc8453548402180bca5d5d32473762d`,name:`Español`},{code:`es-419`,hash:`5898b9c0e228624152a5ff77b1ffa097`,name:`Español (Latin America)`},{code:`et`,hash:`38bf32a6ed529efe3f2d2f9e3f8b9c41`,name:`Eesti`},{code:`eu`,hash:`209289e6245240e0e1947346f86233f7`,name:`Euskara`},{code:`fa`,hash:`3c5c2ce234df8011e6459ece93c27655`,name:`فارسی`},{code:`fi`,hash:`be1cec524da9d80f4e92a6aa97e82a6e`,name:`Suomi`},{code:`fy`,hash:`353b0354181447d4299a065b8bd40814`,name:`Frysk`},{code:`fr`,hash:`8e52d097a63fb73aa3d0f27d2836bfe0`,name:`Français`},{code:`ga`,hash:`ad525e2c76d18b24e752bf3c697d6665`,name:`Gaeilge`},{code:`gl`,hash:`06ac0757b8866d60e1099a1a70a51a83`,name:`Galego`},{code:`gsw`,hash:`1fc73e115507ad1aceadbd099405b12c`,name:`Schwiizerdütsch`},{code:`he`,hash:`455f5c0d09ccd2a6158c23b136893a00`,name:`עברית`},{code:`hi`,hash:`fa3c3883f143810a970ebbcf8d5a9891`,name:`हिन्दी`},{code:`hr`,hash:`ff3c1ddc18a8ede7ea05188448804325`,name:`Hrvatski`},{code:`hu`,hash:`3ccdebaa83fb5e715fec48651db1d86e`,name:`Magyar`},{code:`hy`,hash:`af0ef4c42c4d13b56bf49f85a27bc9ed`,name:`Հայերեն`},{code:`id`,hash:`b0ab2243854055b9ea73f66be53d4660`,name:`Indonesia`},{code:`it`,hash:`8c1e736d6cbaa7307d0df720e05f2ea8`,name:`Italiano`},{code:`is`,hash:`4bd6a2f1407956e74a74ece79a55d6b0`,name:`Íslenska`},{code:`ja`,hash:`2b5b92cec0f0a5b0a75012340d7c0faa`,name:`日本語`},{code:`ka`,hash:`5af785961d76db569358229418d52cb6`,name:`Kartuli`},{code:`ko`,hash:`811c7aaa07c09aefe2a55341a21e844f`,name:`한국어`},{code:`lb`,hash:`b389bf3d7d89bd8f3595cfb080052d03`,name:`Lëtzebuergesch`},{code:`lt`,hash:`ec3675bc693854933c932edebf28ad3a`,name:`Lietuvių`},{code:`lv`,hash:`e272436516b72ade32c63be53fbe0f8e`,name:`Latviešu`},{code:`mk`,hash:`683584ddd277e24d703eff7b88500a40`,name:`Македонски`},{code:`ml`,hash:`47e7c52f17d5462f2f34e20c4d1fb8ed`,name:`മലയാളം`},{code:`nl`,hash:`b44e4be9fcc4f8aac2054096e4745800`,name:`Nederlands`},{code:`nb`,hash:`83817abf88651f558ddd4dd5a13b0568`,name:`Norsk Bokmål`},{code:`nn`,hash:`d059505d060777558d54f164067bbc3e`,name:`Norsk Nynorsk`},{code:`pl`,hash:`666b38542cc58bcc38638a3b8f54b7b0`,name:`Polski`},{code:`pt`,hash:`6a6dcc2e92ca21f95d0c96a6f8c9ffd9`,name:`Português`},{code:`pt-BR`,hash:`3936613df32bef26e4d43c8e10e57964`,name:`Português (BR)`},{code:`ro`,hash:`0979ced3b8898618b53d23788a2f4618`,name:`Română`},{code:`ru`,hash:`cf3a476024af4bf2084cfbd7a2735249`,name:`Русский`},{code:`sk`,hash:`ab41f13ae8a7e12a1c34420edb8cdfa5`,name:`Slovenčina`},{code:`sl`,hash:`6b3ccd0f11df82cf75c680d9d4714277`,name:`Slovenščina`},{code:`sr`,hash:`af8703dcadf10b434886b1a1ba3794fa`,name:`Српски`},{code:`sr-Latn`,hash:`a3fa96f829aad8e8d50044215923ef1d`,name:`Srpski`},{code:`sv`,hash:`129f3efbf453899a8113bbb263b9d031`,name:`Svenska`},{code:`sq`,hash:`d9c6b057141c562baf87d0c47702f96c`,name:`Shqip`},{code:`ta`,hash:`01e739303bcd977722c665a7fb63ff58`,name:`தமிழ்`},{code:`te`,hash:`c87b12777023388965f6e88c3d8e5970`,name:`తెలుగు`},{code:`th`,hash:`3fdcf2b75b36bb3ece1947414afcf492`,name:`ภาษาไทย`},{code:`tr`,hash:`2d1166ed61fa775047a1fb9530a9368d`,name:`Türkçe`},{code:`uk`,hash:`12365a6043e52d725d7904cb03f8154b`,name:`Українська`},{code:`ur`,hash:`138a60bb34967385726bcef3b9622c88`,name:`اُردُو`},{code:`vi`,hash:`e55a8b252ebafaa38af428aaca3f5cdd`,name:`Tiếng Việt`},{code:`zh-Hans`,hash:`ca6c86cd23631a2b4f03f81631af576f`,name:`简体中文`},{code:`zh-Hant`,hash:`37e304c63a253cb8dc099de9ba8a8336`,name:`繁體中文`}],Jn=qn,Yn=qn.map(e=>({...e,async fetch(){let t=Kn[e.code];if(typeof t<`u`)return t;let n=await Gn(Object.assign({"./af/af.json":()=>A(()=>import(`./_bwd-empty-locale-DOwCrGXH.js`),[],import.meta.url),"./ar/ar.json":()=>A(()=>import(`./_bwd-empty-locale-DOwCrGXH.js`),[],import.meta.url),"./bg/bg.json":()=>A(()=>import(`./_bwd-empty-locale-DOwCrGXH.js`),[],import.meta.url),"./bn/bn.json":()=>A(()=>import(`./_bwd-empty-locale-DOwCrGXH.js`),[],import.meta.url),"./bs/bs.json":()=>A(()=>import(`./_bwd-empty-locale-DOwCrGXH.js`),[],import.meta.url),"./ca/ca.json":()=>A(()=>import(`./_bwd-empty-locale-DOwCrGXH.js`),[],import.meta.url),"./cs/cs.json":()=>A(()=>import(`./_bwd-empty-locale-DOwCrGXH.js`),[],import.meta.url),"./cy/cy.json":()=>A(()=>import(`./_bwd-empty-locale-DOwCrGXH.js`),[],import.meta.url),"./da/da.json":()=>A(()=>import(`./_bwd-empty-locale-DOwCrGXH.js`),[],import.meta.url),"./de/de.json":()=>A(()=>import(`./de-0RbhrSu6.js`),[],import.meta.url),"./el/el.json":()=>A(()=>import(`./_bwd-empty-locale-DOwCrGXH.js`),[],import.meta.url),"./en-GB/en-GB.json":()=>A(()=>import(`./_bwd-empty-locale-DOwCrGXH.js`),[],import.meta.url),"./en/en.json":()=>A(()=>import(`./en-kZedN8ts.js`),[],import.meta.url),"./eo/eo.json":()=>A(()=>import(`./_bwd-empty-locale-DOwCrGXH.js`),[],import.meta.url),"./es-419/es-419.json":()=>A(()=>import(`./es-419-CqsxY9P4.js`),[],import.meta.url),"./es/es.json":()=>A(()=>import(`./_bwd-empty-locale-DOwCrGXH.js`),[],import.meta.url),"./et/et.json":()=>A(()=>import(`./_bwd-empty-locale-DOwCrGXH.js`),[],import.meta.url),"./eu/eu.json":()=>A(()=>import(`./_bwd-empty-locale-DOwCrGXH.js`),[],import.meta.url),"./fa/fa.json":()=>A(()=>import(`./_bwd-empty-locale-DOwCrGXH.js`),[],import.meta.url),"./fi/fi.json":()=>A(()=>import(`./_bwd-empty-locale-DOwCrGXH.js`),[],import.meta.url),"./fr/fr.json":()=>A(()=>import(`./_bwd-empty-locale-DOwCrGXH.js`),[],import.meta.url),"./fy/fy.json":()=>A(()=>import(`./_bwd-empty-locale-DOwCrGXH.js`),[],import.meta.url),"./ga/ga.json":()=>A(()=>import(`./_bwd-empty-locale-DOwCrGXH.js`),[],import.meta.url),"./gl/gl.json":()=>A(()=>import(`./_bwd-empty-locale-DOwCrGXH.js`),[],import.meta.url),"./gsw/gsw.json":()=>A(()=>import(`./_bwd-empty-locale-DOwCrGXH.js`),[],import.meta.url),"./he/he.json":()=>A(()=>import(`./_bwd-empty-locale-DOwCrGXH.js`),[],import.meta.url),"./hi/hi.json":()=>A(()=>import(`./_bwd-empty-locale-DOwCrGXH.js`),[],import.meta.url),"./hr/hr.json":()=>A(()=>import(`./_bwd-empty-locale-DOwCrGXH.js`),[],import.meta.url),"./hu/hu.json":()=>A(()=>import(`./_bwd-empty-locale-DOwCrGXH.js`),[],import.meta.url),"./hy/hy.json":()=>A(()=>import(`./_bwd-empty-locale-DOwCrGXH.js`),[],import.meta.url),"./id/id.json":()=>A(()=>import(`./_bwd-empty-locale-DOwCrGXH.js`),[],import.meta.url),"./is/is.json":()=>A(()=>import(`./_bwd-empty-locale-DOwCrGXH.js`),[],import.meta.url),"./it/it.json":()=>A(()=>import(`./_bwd-empty-locale-DOwCrGXH.js`),[],import.meta.url),"./ja/ja.json":()=>A(()=>import(`./_bwd-empty-locale-DOwCrGXH.js`),[],import.meta.url),"./ka/ka.json":()=>A(()=>import(`./_bwd-empty-locale-DOwCrGXH.js`),[],import.meta.url),"./ko/ko.json":()=>A(()=>import(`./_bwd-empty-locale-DOwCrGXH.js`),[],import.meta.url),"./lb/lb.json":()=>A(()=>import(`./_bwd-empty-locale-DOwCrGXH.js`),[],import.meta.url),"./lt/lt.json":()=>A(()=>import(`./_bwd-empty-locale-DOwCrGXH.js`),[],import.meta.url),"./lv/lv.json":()=>A(()=>import(`./_bwd-empty-locale-DOwCrGXH.js`),[],import.meta.url),"./mk/mk.json":()=>A(()=>import(`./_bwd-empty-locale-DOwCrGXH.js`),[],import.meta.url),"./ml/ml.json":()=>A(()=>import(`./_bwd-empty-locale-DOwCrGXH.js`),[],import.meta.url),"./nb/nb.json":()=>A(()=>import(`./_bwd-empty-locale-DOwCrGXH.js`),[],import.meta.url),"./nl/nl.json":()=>A(()=>import(`./_bwd-empty-locale-DOwCrGXH.js`),[],import.meta.url),"./nn/nn.json":()=>A(()=>import(`./_bwd-empty-locale-DOwCrGXH.js`),[],import.meta.url),"./pl/pl.json":()=>A(()=>import(`./_bwd-empty-locale-DOwCrGXH.js`),[],import.meta.url),"./pt-BR/pt-BR.json":()=>A(()=>import(`./_bwd-empty-locale-DOwCrGXH.js`),[],import.meta.url),"./pt/pt.json":()=>A(()=>import(`./_bwd-empty-locale-DOwCrGXH.js`),[],import.meta.url),"./ro/ro.json":()=>A(()=>import(`./_bwd-empty-locale-DOwCrGXH.js`),[],import.meta.url),"./ru/ru.json":()=>A(()=>import(`./_bwd-empty-locale-DOwCrGXH.js`),[],import.meta.url),"./sk/sk.json":()=>A(()=>import(`./_bwd-empty-locale-DOwCrGXH.js`),[],import.meta.url),"./sl/sl.json":()=>A(()=>import(`./_bwd-empty-locale-DOwCrGXH.js`),[],import.meta.url),"./sq/sq.json":()=>A(()=>import(`./_bwd-empty-locale-DOwCrGXH.js`),[],import.meta.url),"./sr-Latn/sr-Latn.json":()=>A(()=>import(`./_bwd-empty-locale-DOwCrGXH.js`),[],import.meta.url),"./sr/sr.json":()=>A(()=>import(`./_bwd-empty-locale-DOwCrGXH.js`),[],import.meta.url),"./sv/sv.json":()=>A(()=>import(`./_bwd-empty-locale-DOwCrGXH.js`),[],import.meta.url),"./ta/ta.json":()=>A(()=>import(`./_bwd-empty-locale-DOwCrGXH.js`),[],import.meta.url),"./te/te.json":()=>A(()=>import(`./_bwd-empty-locale-DOwCrGXH.js`),[],import.meta.url),"./th/th.json":()=>A(()=>import(`./_bwd-empty-locale-DOwCrGXH.js`),[],import.meta.url),"./tr/tr.json":()=>A(()=>import(`./_bwd-empty-locale-DOwCrGXH.js`),[],import.meta.url),"./uk/uk.json":()=>A(()=>import(`./_bwd-empty-locale-DOwCrGXH.js`),[],import.meta.url),"./ur/ur.json":()=>A(()=>import(`./_bwd-empty-locale-DOwCrGXH.js`),[],import.meta.url),"./vi/vi.json":()=>A(()=>import(`./_bwd-empty-locale-DOwCrGXH.js`),[],import.meta.url),"./zh-Hans/zh-Hans.json":()=>A(()=>import(`./_bwd-empty-locale-DOwCrGXH.js`),[],import.meta.url),"./zh-Hant/zh-Hant.json":()=>A(()=>import(`./_bwd-empty-locale-DOwCrGXH.js`),[],import.meta.url)}),`./${e.code}/${e.code}.json`,3);return Kn[e.code]=n.default,n.default}})),Xn=(e=>(e.language=`language`,e.system=`system`,e.DMY=`DMY`,e.MDY=`MDY`,e.YMD=`YMD`,e))(Xn||{}),Zn=(e,t,n)=>e.subscribeMessage(n,{type:`frontend/subscribe_user_data`,key:t}),Qn={"zh-cn":`zh-Hans`,"zh-sg":`zh-Hans`,"zh-my":`zh-Hans`,"zh-tw":`zh-Hant`,"zh-hk":`zh-Hant`,"zh-mo":`zh-Hant`,zh:`zh-Hant`};function $n(e){if(Jn.find(t=>t.code===e))return e;let t=e.toLowerCase();if(t in Qn)return Qn[t];let n=Jn.find(e=>e.code.toLowerCase()===t);if(n)return n.code;if(e.includes(`-`))return $n(e.split(`-`)[0])}function er(e){let t=e.language;if(t){let e=$n(t);if(e)return e}return t}var tr=Intl.DateTimeFormat?.().resolvedOptions?.().timeZone,nr=tr??`UTC`,rr=(e,t)=>e===`local`&&tr?nr:t,ir=e=>{if(e.time_format===`language`||e.time_format===`system`){let t=e.time_format===`language`?e.language:void 0;return new Date(`January 1, 2023 22:00:00`).toLocaleString(t).includes(`10`)}return e.time_format===`12`},ar={ms:1,s:1e3,min:6e4,h:36e5,d:864e5},or=(e,t)=>cr(parseFloat(e)*ar[t])||`0`,sr=(e,t=2)=>{let n=``+e;for(let e=1;e<t;e++)n=parseInt(n)<10**e?`0${n}`:n;return n};function cr(e){let t=Math.floor(e/1e3/3600),n=Math.floor(e/1e3%3600/60),r=Math.floor(e/1e3%3600%60),i=Math.floor(e%1e3);return t>0?`${t}:${sr(n)}:${sr(r)}`:n>0?`${n}:${sr(r)}`:r>0||i>0?`${r}${i>0?`.${sr(i,3)}`:``}`:null}var lr=/^\d{4}-(0[1-9]|1[0-2])-([12]\d|0[1-9]|3[01])[T| ](((([01]\d|2[0-3])((:?)[0-5]\d)?|24:?00)([.,]\d+(?!:))?)(\8[0-5]\d([.,]\d+)?)?([zZ]|([+-])([01]\d|2[0-3]):?([0-5]\d)?)?)$/,ur=e=>lr.test(e),dr=`^\\d{4}-(0[1-9]|1[0-2])-([12]\\d|0[1-9]|3[01])`,fr=RegExp(dr+`$`),pr=new RegExp(dr),mr=(e,t=!1)=>t?pr.test(e):fr.test(e);function hr(e){return e?e instanceof Date&&!isNaN(e.valueOf()):!1}function gr(e){let t=null,n=null;return(...r)=>(t&&t.length===r.length&&t.every((e,t)=>e===r[t])||(t=r,n=e(...r)),n)}var _r=gr((e,t)=>new Intl.DateTimeFormat(e.language,{year:`numeric`,month:`long`,day:`numeric`,timeZone:rr(e.time_zone,t)})),vr=gr((e,t)=>new Intl.DateTimeFormat(e.language,{hour:ir(e)?`numeric`:`2-digit`,minute:`2-digit`,hourCycle:ir(e)?`h12`:`h23`,timeZone:rr(e.time_zone,t)})),yr=gr((e,t)=>new Intl.DateTimeFormat(e.language,{hour:`2-digit`,minute:`2-digit`,hourCycle:`h23`,timeZone:rr(e.time_zone,t)})),br=gr((e,t)=>new Intl.DateTimeFormat(e.language,{hour:ir(e)?`numeric`:`2-digit`,hourCycle:ir(e)?`h12`:`h23`,timeZone:rr(e.time_zone,t)})),xr=gr((e,t)=>new Intl.DateTimeFormat(e.language,{minute:`2-digit`,timeZone:rr(e.time_zone,t)})),Sr=gr((e,t)=>new Intl.DateTimeFormat(e.language,{second:`2-digit`,timeZone:rr(e.time_zone,t)})),Cr=gr((e,t)=>new Intl.DateTimeFormat(e.language,{year:`numeric`,month:`long`,day:`numeric`,hour:ir(e)?`numeric`:`2-digit`,minute:`2-digit`,hourCycle:ir(e)?`h12`:`h23`,timeZone:rr(e.time_zone,t)})),wr=gr((e,t)=>new Intl.DateTimeFormat(e.language,{year:`numeric`,month:`long`,day:`numeric`,hour:ir(e)?`numeric`:`2-digit`,minute:`2-digit`,second:`2-digit`,hourCycle:ir(e)?`h12`:`h23`,timeZone:rr(e.time_zone,t)})),Tr=gr((e,t)=>new Intl.DateTimeFormat(e.language,{year:`numeric`,month:`short`,day:`numeric`,hour:ir(e)?`numeric`:`2-digit`,minute:`2-digit`,hourCycle:ir(e)?`h12`:`h23`,timeZone:rr(e.time_zone,t)})),Er=gr((e,t)=>new Intl.DateTimeFormat(e.language,{month:`short`,day:`numeric`,hour:ir(e)?`numeric`:`2-digit`,minute:`2-digit`,hourCycle:ir(e)?`h12`:`h23`,timeZone:rr(e.time_zone,t)})),Dr=gr(()=>new Intl.DateTimeFormat(void 0,{year:`numeric`,month:`long`,day:`numeric`,hour:`2-digit`,minute:`2-digit`})),j=gr((e,t)=>new Intl.DateTimeFormat(e.language,{weekday:`long`,month:`long`,day:`numeric`,timeZone:rr(e.time_zone,t)})),Or=gr((e,t)=>new Intl.DateTimeFormat(e.language,{year:`numeric`,month:`short`,day:`numeric`,timeZone:rr(e.time_zone,t)})),kr=gr((e,t)=>new Intl.DateTimeFormat(e.language,{day:`numeric`,month:`short`,timeZone:rr(e.time_zone,t)})),Ar=gr((e,t)=>new Intl.DateTimeFormat(e.language,{month:`long`,year:`numeric`,timeZone:rr(e.time_zone,t)})),M=gr((e,t)=>new Intl.DateTimeFormat(e.language,{month:`long`,timeZone:rr(e.time_zone,t)})),jr=gr((e,t)=>new Intl.DateTimeFormat(e.language,{year:`numeric`,timeZone:rr(e.time_zone,t)})),Mr=gr((e,t)=>new Intl.DateTimeFormat(e.language,{weekday:`long`,timeZone:rr(e.time_zone,t)})),Nr=gr((e,t)=>new Intl.DateTimeFormat(e.language,{weekday:`short`,timeZone:rr(e.time_zone,t)})),Pr=gr((e,t)=>{let n=e.date_format===Xn.system?void 0:e.language;return new Intl.DateTimeFormat(n,{year:`numeric`,month:`numeric`,day:`numeric`,timeZone:rr(e.time_zone,t)})}),Fr=(e,t,n)=>_r(n,t.time_zone).format(e),Ir=(e,t,n)=>vr(n,t.time_zone).format(e),Lr=(e,t,n)=>yr(n,t.time_zone).format(e),Rr=(e,t,n)=>br(n,t.time_zone).formatToParts(e).find(e=>e.type===`hour`)?.value||``,zr=(e,t,n)=>xr(n,t.time_zone).formatToParts(e).find(e=>e.type===`minute`)?.value||``,Br=(e,t,n)=>Sr(n,t.time_zone).formatToParts(e).find(e=>e.type===`second`)?.value||``,Vr=(e,t,n)=>Cr(n,t.time_zone).format(e),Hr=(e,t,n)=>wr(t,n.time_zone).format(e),Ur=(e,t,n)=>Er(t,n.time_zone).format(e),Wr=(e,t,n)=>Tr(t,n.time_zone).format(e),Gr=(e,t,n)=>new Date().getFullYear()===e.getFullYear()?Ur(e,t,n):Wr(e,t,n),Kr=e=>Dr().format(e),qr=(e,t,n)=>`${new Intl.DateTimeFormat(t.language,{year:`numeric`,month:`numeric`,day:`numeric`,timeZone:rr(t.time_zone,n.time_zone)}).format(e)}, ${Ir(e,n,t)}`,Jr=(e,t,n)=>j(t,n.time_zone).format(e),Yr=(e,t,n)=>Or(t,n.time_zone).format(e),Xr=(e,t,n)=>kr(t,n.time_zone).format(e),Zr=(e,t,n)=>Ar(t,n.time_zone).format(e),Qr=(e,t,n)=>M(t,n.time_zone).format(e),$r=(e,t,n)=>jr(t,n.time_zone).format(e),ei=(e,t,n)=>Mr(t,n.time_zone).format(e),ti=(e,t,n)=>Nr(t,n.time_zone).format(e),ni=(e,t,n)=>{let r=Pr(t,n.time_zone);if(t.date_format===Xn.language||t.date_format===Xn.system)return r.format(e);let i=r.formatToParts(e),a=i.find(e=>e.type===`literal`)?.value||`/`,o=i.find(e=>e.type===`day`)?.value||``,s=i.find(e=>e.type===`month`)?.value||``,c=i.find(e=>e.type===`year`)?.value||``,l=i[i.length-1],u=l?.type===`literal`?l.value:``;return t.language===`bg`&&t.date_format===Xn.YMD&&(u=``),{[Xn.DMY]:`${o}${a}${s}${a}${c}${u}`,[Xn.MDY]:`${s}${a}${o}${a}${c}${u}`,[Xn.YMD]:`${c}${a}${s}${a}${o}${u}`,[Xn.language]:r.format(e),[Xn.system]:r.format(e)}[t.date_format]},ri=(e,t,n)=>{try{return new Intl.DateTimeFormat(t.language,{hour:`numeric`,hour12:!0,timeZone:rr(t.time_zone,n.time_zone)}).formatToParts(e).find(e=>e.type===`dayPeriod`)?.value||(e.getHours()>=12?`PM`:`AM`)}catch{return e.getHours()>=12?`PM`:`AM`}};function ii(){return ii=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)({}).hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},ii.apply(null,arguments)}var ai=o((e=>{var t=typeof Symbol==`function`&&Symbol.for,n=t?Symbol.for(`react.element`):60103,r=t?Symbol.for(`react.portal`):60106,i=t?Symbol.for(`react.fragment`):60107,a=t?Symbol.for(`react.strict_mode`):60108,o=t?Symbol.for(`react.profiler`):60114,s=t?Symbol.for(`react.provider`):60109,c=t?Symbol.for(`react.context`):60110,l=t?Symbol.for(`react.async_mode`):60111,u=t?Symbol.for(`react.concurrent_mode`):60111,d=t?Symbol.for(`react.forward_ref`):60112,f=t?Symbol.for(`react.suspense`):60113,p=t?Symbol.for(`react.suspense_list`):60120,m=t?Symbol.for(`react.memo`):60115,h=t?Symbol.for(`react.lazy`):60116,g=t?Symbol.for(`react.block`):60121,_=t?Symbol.for(`react.fundamental`):60117,v=t?Symbol.for(`react.responder`):60118,y=t?Symbol.for(`react.scope`):60119;function b(e){if(typeof e==`object`&&e){var t=e.$$typeof;switch(t){case n:switch(e=e.type,e){case l:case u:case i:case o:case a:case f:return e;default:switch(e&&=e.$$typeof,e){case c:case d:case h:case m:case s:return e;default:return t}}case r:return t}}}function x(e){return b(e)===u}e.AsyncMode=l,e.ConcurrentMode=u,e.ContextConsumer=c,e.ContextProvider=s,e.Element=n,e.ForwardRef=d,e.Fragment=i,e.Lazy=h,e.Memo=m,e.Portal=r,e.Profiler=o,e.StrictMode=a,e.Suspense=f,e.isAsyncMode=function(e){return x(e)||b(e)===l},e.isConcurrentMode=x,e.isContextConsumer=function(e){return b(e)===c},e.isContextProvider=function(e){return b(e)===s},e.isElement=function(e){return typeof e==`object`&&!!e&&e.$$typeof===n},e.isForwardRef=function(e){return b(e)===d},e.isFragment=function(e){return b(e)===i},e.isLazy=function(e){return b(e)===h},e.isMemo=function(e){return b(e)===m},e.isPortal=function(e){return b(e)===r},e.isProfiler=function(e){return b(e)===o},e.isStrictMode=function(e){return b(e)===a},e.isSuspense=function(e){return b(e)===f},e.isValidElementType=function(e){return typeof e==`string`||typeof e==`function`||e===i||e===u||e===o||e===a||e===f||e===p||typeof e==`object`&&!!e&&(e.$$typeof===h||e.$$typeof===m||e.$$typeof===s||e.$$typeof===c||e.$$typeof===d||e.$$typeof===_||e.$$typeof===v||e.$$typeof===y||e.$$typeof===g)},e.typeOf=b})),oi=o(((e,t)=>{t.exports=ai()})),si=o(((e,t)=>{var n=oi(),r={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},i={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},a={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},o={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},s={};s[n.ForwardRef]=a,s[n.Memo]=o;function c(e){return n.isMemo(e)?o:s[e.$$typeof]||r}var l=Object.defineProperty,u=Object.getOwnPropertyNames,d=Object.getOwnPropertySymbols,f=Object.getOwnPropertyDescriptor,p=Object.getPrototypeOf,m=Object.prototype;function h(e,t,n){if(typeof t!=`string`){if(m){var r=p(t);r&&r!==m&&h(e,r,n)}var a=u(t);d&&(a=a.concat(d(t)));for(var o=c(e),s=c(t),g=0;g<a.length;++g){var _=a[g];if(!i[_]&&!(n&&n[_])&&!(s&&s[_])&&!(o&&o[_])){var v=f(t,_);try{l(e,_,v)}catch{}}}}return e}t.exports=h})),ci=function(e){return e()},li=v.useInsertionEffect?v.useInsertionEffect:!1,ui=li||ci;li||v.useLayoutEffect;var di=v.createContext(typeof HTMLElement<`u`?ct({key:`css`}):null),fi=di.Provider,pi=function(e){return(0,v.forwardRef)(function(t,n){return e(t,(0,v.useContext)(di),n)})},mi=v.createContext({}),hi={}.hasOwnProperty,gi=`__EMOTION_TYPE_PLEASE_DO_NOT_USE__`,_i=function(e,t){var n={};for(var r in t)hi.call(t,r)&&(n[r]=t[r]);return n[gi]=e,n},vi=function(e){var t=e.cache,n=e.serialized,r=e.isStringTag;return ut(t,n,r),ui(function(){return dt(t,n,r)}),null},yi=pi(function(e,t,n){var r=e.css;typeof r==`string`&&t.registered[r]!==void 0&&(r=t.registered[r]);var i=e[gi],a=[r],o=``;typeof e.className==`string`?o=lt(t.registered,a,e.className):e.className!=null&&(o=e.className+` `);var s=Ct(a,void 0,v.useContext(mi));o+=t.key+`-`+s.name;var c={};for(var l in e)hi.call(e,l)&&l!==`css`&&l!==gi&&(c[l]=e[l]);return c.className=o,n&&(c.ref=n),v.createElement(v.Fragment,null,v.createElement(vi,{cache:t,serialized:s,isStringTag:typeof i==`string`}),v.createElement(i,c))});si();var bi=function(e,t){var n=arguments;if(t==null||!hi.call(t,`css`))return v.createElement.apply(void 0,n);var r=n.length,i=Array(r);i[0]=yi,i[1]=_i(e,t);for(var a=2;a<r;a++)i[a]=n[a];return v.createElement.apply(null,i)};(function(e){var t;t||=e.JSX||={}})(bi||={});function xi(){return Ct([...arguments])}function Si(){var e=xi.apply(void 0,arguments),t=`animation-`+e.name;return{name:t,styles:`@keyframes `+t+`{`+e.styles+`}`,anim:1,toString:function(){return`_EMO_`+this.name+`_`+this.styles+`_EMO_`}}}var Ci=/^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|disableRemotePlayback|download|draggable|encType|enterKeyHint|fetchpriority|fetchPriority|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|popover|popoverTarget|popoverTargetAction|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/,wi=$e(function(e){return Ci.test(e)||e.charCodeAt(0)===111&&e.charCodeAt(1)===110&&e.charCodeAt(2)<91}),Ti=function(e){return e!==`theme`},Ei=function(e){return typeof e==`string`&&e.charCodeAt(0)>96?wi:Ti},Di=function(e,t,n){var r;if(t){var i=t.shouldForwardProp;r=e.__emotion_forwardProp&&i?function(t){return e.__emotion_forwardProp(t)&&i(t)}:i}return typeof r!=`function`&&n&&(r=e.__emotion_forwardProp),r},Oi=function(e){var t=e.cache,n=e.serialized,r=e.isStringTag;return ut(t,n,r),ui(function(){return dt(t,n,r)}),null},ki=function e(t,n){var r=t.__emotion_real===t,i=r&&t.__emotion_base||t,a,o;n!==void 0&&(a=n.label,o=n.target);var s=Di(t,n,r),c=s||Ei(i),l=!c(`as`);return function(){var u=arguments,d=r&&t.__emotion_styles!==void 0?t.__emotion_styles.slice(0):[];if(a!==void 0&&d.push(`label:`+a+`;`),u[0]==null||u[0].raw===void 0)d.push.apply(d,u);else{var f=u[0];d.push(f[0]);for(var p=u.length,m=1;m<p;m++)d.push(u[m],f[m])}var h=pi(function(e,t,n){var r=l&&e.as||i,a=``,u=[],f=e;if(e.theme==null){for(var p in f={},e)f[p]=e[p];f.theme=v.useContext(mi)}typeof e.className==`string`?a=lt(t.registered,u,e.className):e.className!=null&&(a=e.className+` `);var m=Ct(d.concat(u),t.registered,f);a+=t.key+`-`+m.name,o!==void 0&&(a+=` `+o);var h=l&&s===void 0?Ei(r):c,g={};for(var _ in e)l&&_===`as`||h(_)&&(g[_]=e[_]);return g.className=a,n&&(g.ref=n),v.createElement(v.Fragment,null,v.createElement(Oi,{cache:t,serialized:m,isStringTag:typeof r==`string`}),v.createElement(r,g))});return h.displayName=a===void 0?`Styled(`+(typeof i==`string`?i:i.displayName||i.name||`Component`)+`)`:a,h.defaultProps=t.defaultProps,h.__emotion_real=h,h.__emotion_base=i,h.__emotion_styles=d,h.__emotion_forwardProp=s,Object.defineProperty(h,"toString",{value:function(){return`.`+o}}),h.withComponent=function(t,r){return e(t,ii({},n,r,{shouldForwardProp:Di(h,r,!0)})).apply(void 0,d)},h}},Ai=`a.abbr.address.area.article.aside.audio.b.base.bdi.bdo.big.blockquote.body.br.button.canvas.caption.cite.code.col.colgroup.data.datalist.dd.del.details.dfn.dialog.div.dl.dt.em.embed.fieldset.figcaption.figure.footer.form.h1.h2.h3.h4.h5.h6.head.header.hgroup.hr.html.i.iframe.img.input.ins.kbd.keygen.label.legend.li.link.main.map.mark.marquee.menu.menuitem.meta.meter.nav.noscript.object.ol.optgroup.option.output.p.param.picture.pre.progress.q.rp.rt.ruby.s.samp.script.section.select.small.source.span.strong.style.sub.summary.sup.table.tbody.td.textarea.tfoot.th.thead.time.title.tr.track.u.ul.var.video.wbr.circle.clipPath.defs.ellipse.foreignObject.g.image.line.linearGradient.mask.path.pattern.polygon.polyline.radialGradient.rect.stop.svg.text.tspan`.split(`.`),ji=ki.bind(null);Ai.forEach(function(e){ji[e]=ji(e)});function Mi(e,t){let n=e.icons,r=e.aliases||Object.create(null),i=Object.create(null);function a(e){if(n[e])return i[e]=[];if(!(e in i)){i[e]=null;let t=r[e]&&r[e].parent,n=t&&a(t);n&&(i[e]=[t].concat(n))}return i[e]}return Object.keys(n).concat(Object.keys(r)).forEach(a),i}var Ni=Object.freeze({left:0,top:0,width:16,height:16}),Pi=Object.freeze({rotate:0,vFlip:!1,hFlip:!1}),Fi=Object.freeze({...Ni,...Pi}),Ii=Object.freeze({...Fi,body:``,hidden:!1});function Li(e,t){let n={};!e.hFlip!=!t.hFlip&&(n.hFlip=!0),!e.vFlip!=!t.vFlip&&(n.vFlip=!0);let r=((e.rotate||0)+(t.rotate||0))%4;return r&&(n.rotate=r),n}function Ri(e,t){let n=Li(e,t);for(let r in Ii)r in Pi?r in e&&!(r in n)&&(n[r]=Pi[r]):r in t?n[r]=t[r]:r in e&&(n[r]=e[r]);return n}function zi(e,t,n){let r=e.icons,i=e.aliases||Object.create(null),a={};function o(e){a=Ri(r[e]||i[e],a)}return o(t),n.forEach(o),Ri(e,a)}function Bi(e,t){let n=[];if(typeof e!=`object`||typeof e.icons!=`object`)return n;e.not_found instanceof Array&&e.not_found.forEach(e=>{t(e,null),n.push(e)});let r=Mi(e);for(let i in r){let a=r[i];a&&(t(i,zi(e,i,a)),n.push(i))}return n}var Vi={provider:``,aliases:{},not_found:{},...Ni};function Hi(e,t){for(let n in t)if(n in e&&typeof e[n]!=typeof t[n])return!1;return!0}function Ui(e){if(typeof e!=`object`||!e)return null;let t=e;if(typeof t.prefix!=`string`||!e.icons||typeof e.icons!=`object`||!Hi(e,Vi))return null;let n=t.icons;for(let e in n){let t=n[e];if(!e||typeof t.body!=`string`||!Hi(t,Ii))return null}let r=t.aliases||Object.create(null);for(let e in r){let t=r[e],i=t.parent;if(!e||typeof i!=`string`||!n[i]&&!r[i]||!Hi(t,Ii))return null}return t}var Wi=Object.create(null);function Gi(e,t){return{provider:e,prefix:t,icons:Object.create(null),missing:new Set}}function Ki(e,t){let n=Wi[e]||(Wi[e]=Object.create(null));return n[t]||(n[t]=Gi(e,t))}function qi(e,t){return Ui(t)?Bi(t,(t,n)=>{n?e.icons[t]=n:e.missing.add(t)}):[]}function Ji(e,t,n){try{if(typeof n.body==`string`)return e.icons[t]={...n},!0}catch{}return!1}var Yi=/^[a-z0-9]+(-[a-z0-9]+)*$/,Xi=(e,t,n,r=``)=>{let i=e.split(`:`);if(e.slice(0,1)===`@`){if(i.length<2||i.length>3)return null;r=i.shift().slice(1)}if(i.length>3||!i.length)return null;if(i.length>1){let e=i.pop(),n=i.pop(),a={provider:i.length>0?i[0]:r,prefix:n,name:e};return t&&!Zi(a)?null:a}let a=i[0],o=a.split(`-`);if(o.length>1){let e={provider:r,prefix:o.shift(),name:o.join(`-`)};return t&&!Zi(e)?null:e}if(n&&r===``){let e={provider:r,prefix:``,name:a};return t&&!Zi(e,n)?null:e}return null},Zi=(e,t)=>e?!!((t&&e.prefix===``||e.prefix)&&e.name):!1,Qi=!1;function $i(e){return typeof e==`boolean`&&(Qi=e),Qi}function ea(e){let t=typeof e==`string`?Xi(e,!0,Qi):e;if(t){let e=Ki(t.provider,t.prefix),n=t.name;return e.icons[n]||(e.missing.has(n)?null:void 0)}}function ta(e,t){let n=Xi(e,!0,Qi);if(!n)return!1;let r=Ki(n.provider,n.prefix);return t?Ji(r,n.name,t):(r.missing.add(n.name),!0)}function na(e,t){if(typeof e!=`object`)return!1;if(typeof t!=`string`&&(t=e.provider||``),Qi&&!t&&!e.prefix){let t=!1;return Ui(e)&&(e.prefix=``,Bi(e,(e,n)=>{ta(e,n)&&(t=!0)})),t}let n=e.prefix;return Zi({prefix:n,name:`a`})?!!qi(Ki(t,n),e):!1}var ra=Object.freeze({width:null,height:null}),ia=Object.freeze({...ra,...Pi}),aa=/(-?[0-9.]*[0-9]+[0-9.]*)/g,oa=/^-?[0-9.]*[0-9]+[0-9.]*$/g;function sa(e,t,n){if(t===1)return e;if(n||=100,typeof e==`number`)return Math.ceil(e*t*n)/n;if(typeof e!=`string`)return e;let r=e.split(aa);if(r===null||!r.length)return e;let i=[],a=r.shift(),o=oa.test(a);for(;;){if(o){let e=parseFloat(a);isNaN(e)?i.push(a):i.push(Math.ceil(e*t*n)/n)}else i.push(a);if(a=r.shift(),a===void 0)return i.join(``);o=!o}}function ca(e,t=`defs`){let n=``,r=e.indexOf(`<`+t);for(;r>=0;){let i=e.indexOf(`>`,r),a=e.indexOf(`</`+t);if(i===-1||a===-1)break;let o=e.indexOf(`>`,a);if(o===-1)break;n+=e.slice(i+1,a).trim(),e=e.slice(0,r).trim()+e.slice(o+1)}return{defs:n,content:e}}function la(e,t){return e?`<defs>`+e+`</defs>`+t:t}function ua(e,t,n){let r=ca(e);return la(r.defs,t+r.content+n)}var da=e=>e===`unset`||e===`undefined`||e===`none`;function N(e,t){let n={...Fi,...e},r={...ia,...t},i={left:n.left,top:n.top,width:n.width,height:n.height},a=n.body;[n,r].forEach(e=>{let t=[],n=e.hFlip,r=e.vFlip,o=e.rotate;n?r?o+=2:(t.push(`translate(`+(i.width+i.left).toString()+` `+(0-i.top).toString()+`)`),t.push(`scale(-1 1)`),i.top=i.left=0):r&&(t.push(`translate(`+(0-i.left).toString()+` `+(i.height+i.top).toString()+`)`),t.push(`scale(1 -1)`),i.top=i.left=0);let s;switch(o<0&&(o-=Math.floor(o/4)*4),o%=4,o){case 1:s=i.height/2+i.top,t.unshift(`rotate(90 `+s.toString()+` `+s.toString()+`)`);break;case 2:t.unshift(`rotate(180 `+(i.width/2+i.left).toString()+` `+(i.height/2+i.top).toString()+`)`);break;case 3:s=i.width/2+i.left,t.unshift(`rotate(-90 `+s.toString()+` `+s.toString()+`)`)}o%2==1&&(i.left!==i.top&&(s=i.left,i.left=i.top,i.top=s),i.width!==i.height&&(s=i.width,i.width=i.height,i.height=s)),t.length&&(a=ua(a,`<g transform="`+t.join(` `)+`">`,`</g>`))});let o=r.width,s=r.height,c=i.width,l=i.height,u,d;o===null?(d=s===null?`1em`:s===`auto`?l:s,u=sa(d,c/l)):(u=o===`auto`?c:o,d=s===null?sa(u,l/c):s===`auto`?l:s);let f={},p=(e,t)=>{da(t)||(f[e]=t.toString())};p(`width`,u),p(`height`,d);let m=[i.left,i.top,c,l];return f.viewBox=m.join(` `),{attributes:f,viewBox:m,body:a}}var fa=/\sid="(\S+)"/g,pa=`IconifyId`+Date.now().toString(16)+(Math.random()*16777216|0).toString(16),ma=0;function ha(e,t=pa){let n=[],r;for(;r=fa.exec(e);)n.push(r[1]);if(!n.length)return e;let i=`suffix`+(Math.random()*16777216|Date.now()).toString(16);return n.forEach(n=>{let r=typeof t==`function`?t(n):t+(ma++).toString(),a=n.replace(/[.*+?^${}()|[\]\\]/g,`\\$&`);e=e.replace(RegExp(`([#;"])(`+a+`)([")]|\\.[a-z])`,`g`),`$1`+r+i+`$3`)}),e=e.replace(new RegExp(i,`g`),``),e}var ga=Object.create(null);function _a(e,t){ga[e]=t}function va(e){return ga[e]||ga[``]}function ya(e){let t;if(typeof e.resources==`string`)t=[e.resources];else if(t=e.resources,!(t instanceof Array)||!t.length)return null;return{resources:t,path:e.path||`/`,maxURL:e.maxURL||500,rotate:e.rotate||750,timeout:e.timeout||5e3,random:e.random===!0,index:e.index||0,dataAfterTimeout:e.dataAfterTimeout!==!1}}for(var ba=Object.create(null),xa=[`https://api.simplesvg.com`,`https://api.unisvg.com`],P=[];xa.length>0;)xa.length===1||Math.random()>.5?P.push(xa.shift()):P.push(xa.pop());ba[``]=ya({resources:[`https://api.iconify.design`].concat(P)});function Sa(e,t){let n=ya(t);return n!==null&&(ba[e]=n,!0)}function Ca(e){return ba[e]}var wa=(()=>{let e;try{if(e=fetch,typeof e==`function`)return e}catch{}})();function Ta(e,t){let n=Ca(e);if(!n)return 0;let r;if(!n.maxURL)r=0;else{let e=0;n.resources.forEach(t=>{e=Math.max(e,t.length)});let i=t+`.json?icons=`;r=n.maxURL-e-n.path.length-i.length}return r}function Ea(e){return e===404}var Da=(e,t,n)=>{let r=[],i=Ta(e,t),a=`icons`,o={type:a,provider:e,prefix:t,icons:[]},s=0;return n.forEach((n,c)=>{s+=n.length+1,s>=i&&c>0&&(r.push(o),o={type:a,provider:e,prefix:t,icons:[]},s=n.length),o.icons.push(n)}),r.push(o),r};function Oa(e){if(typeof e==`string`){let t=Ca(e);if(t)return t.path}return`/`}var ka={prepare:Da,send:(e,t,n)=>{if(!wa){n(`abort`,424);return}let r=Oa(t.provider);switch(t.type){case`icons`:{let e=t.prefix,n=t.icons.join(`,`),i=new URLSearchParams({icons:n});r+=e+`.json?`+i.toString();break}case`custom`:{let e=t.uri;r+=e.slice(0,1)===`/`?e.slice(1):e;break}default:n(`abort`,400);return}let i=503;wa(e+r).then(e=>{let t=e.status;if(t!==200){setTimeout(()=>{n(Ea(t)?`abort`:`next`,t)});return}return i=501,e.json()}).then(e=>{if(typeof e!=`object`||!e){setTimeout(()=>{e===404?n(`abort`,e):n(`next`,i)});return}setTimeout(()=>{n(`success`,e)})}).catch(()=>{n(`next`,i)})}};function Aa(e,t){e.forEach(e=>{let n=e.loaderCallbacks;n&&(e.loaderCallbacks=n.filter(e=>e.id!==t))})}function ja(e){e.pendingCallbacksFlag||(e.pendingCallbacksFlag=!0,setTimeout(()=>{e.pendingCallbacksFlag=!1;let t=e.loaderCallbacks?e.loaderCallbacks.slice(0):[];if(!t.length)return;let n=!1,r=e.provider,i=e.prefix;t.forEach(t=>{let a=t.icons,o=a.pending.length;a.pending=a.pending.filter(t=>{if(t.prefix!==i)return!0;let o=t.name;if(e.icons[o])a.loaded.push({provider:r,prefix:i,name:o});else if(e.missing.has(o))a.missing.push({provider:r,prefix:i,name:o});else return n=!0,!0;return!1}),a.pending.length!==o&&(n||Aa([e],t.id),t.callback(a.loaded.slice(0),a.missing.slice(0),a.pending.slice(0),t.abort))})}))}var Ma=0;function Na(e,t,n){let r=Ma++,i=Aa.bind(null,n,r);if(!t.pending.length)return i;let a={id:r,icons:t,callback:e,abort:i};return n.forEach(e=>{(e.loaderCallbacks||=[]).push(a)}),i}function Pa(e){let t={loaded:[],missing:[],pending:[]},n=Object.create(null);e.sort((e,t)=>e.provider===t.provider?e.prefix===t.prefix?e.name.localeCompare(t.name):e.prefix.localeCompare(t.prefix):e.provider.localeCompare(t.provider));let r={provider:``,prefix:``,name:``};return e.forEach(e=>{if(r.name===e.name&&r.prefix===e.prefix&&r.provider===e.provider)return;r=e;let i=e.provider,a=e.prefix,o=e.name,s=n[i]||(n[i]=Object.create(null)),c=s[a]||(s[a]=Ki(i,a)),l;l=o in c.icons?t.loaded:a===``||c.missing.has(o)?t.missing:t.pending;let u={provider:i,prefix:a,name:o};l.push(u)}),t}function Fa(e,t=!0,n=!1){let r=[];return e.forEach(e=>{let i=typeof e==`string`?Xi(e,t,n):e;i&&r.push(i)}),r}var Ia={resources:[],index:0,timeout:2e3,rotate:750,random:!1,dataAfterTimeout:!1};function La(e,t,n,r){let i=e.resources.length,a=e.random?Math.floor(Math.random()*i):e.index,o;if(e.random){let t=e.resources.slice(0);for(o=[];t.length>1;){let e=Math.floor(Math.random()*t.length);o.push(t[e]),t=t.slice(0,e).concat(t.slice(e+1))}o=o.concat(t)}else o=e.resources.slice(a).concat(e.resources.slice(0,a));let s=Date.now(),c=`pending`,l=0,u,d=null,f=[],p=[];typeof r==`function`&&p.push(r);function m(){d&&=(clearTimeout(d),null)}function h(){c===`pending`&&(c=`aborted`),m(),f.forEach(e=>{e.status===`pending`&&(e.status=`aborted`)}),f=[]}function g(e,t){t&&(p=[]),typeof e==`function`&&p.push(e)}function _(){return{startTime:s,payload:t,status:c,queriesSent:l,queriesPending:f.length,subscribe:g,abort:h}}function v(){c=`failed`,p.forEach(e=>{e(void 0,u)})}function y(){f.forEach(e=>{e.status===`pending`&&(e.status=`aborted`)}),f=[]}function b(t,n,r){let i=n!==`success`;switch(f=f.filter(e=>e!==t),c){case`pending`:break;case`failed`:if(i||!e.dataAfterTimeout)return;break;default:return}if(n===`abort`){u=r,v();return}if(i){u=r,f.length||(o.length?x():v());return}if(m(),y(),!e.random){let n=e.resources.indexOf(t.resource);n!==-1&&n!==e.index&&(e.index=n)}c=`completed`,p.forEach(e=>{e(r)})}function x(){if(c!==`pending`)return;m();let r=o.shift();if(r===void 0){if(f.length){d=setTimeout(()=>{m(),c===`pending`&&(y(),v())},e.timeout);return}v();return}let i={status:`pending`,resource:r,callback:(e,t)=>{b(i,e,t)}};f.push(i),l++,d=setTimeout(x,e.rotate),n(r,t,i.callback)}return setTimeout(x),_}function Ra(e){let t={...Ia,...e},n=[];function r(){n=n.filter(e=>e().status===`pending`)}function i(e,i,a){let o=La(t,e,i,(e,t)=>{r(),a&&a(e,t)});return n.push(o),o}function a(e){return n.find(t=>e(t))||null}return{query:i,find:a,setIndex:e=>{t.index=e},getIndex:()=>t.index,cleanup:r}}function za(){}var Ba=Object.create(null);function Va(e){if(!Ba[e]){let t=Ca(e);if(!t)return;Ba[e]={config:t,redundancy:Ra(t)}}return Ba[e]}function Ha(e,t,n){let r,i;if(typeof e==`string`){let t=va(e);if(!t)return n(void 0,424),za;i=t.send;let a=Va(e);a&&(r=a.redundancy)}else{let t=ya(e);if(t){r=Ra(t);let n=va(e.resources?e.resources[0]:``);n&&(i=n.send)}}return!r||!i?(n(void 0,424),za):r.query(t,i,n)().abort}function Ua(){}function Wa(e){e.iconsLoaderFlag||(e.iconsLoaderFlag=!0,setTimeout(()=>{e.iconsLoaderFlag=!1,ja(e)}))}function Ga(e){let t=[],n=[];return e.forEach(e=>{(e.match(Yi)?t:n).push(e)}),{valid:t,invalid:n}}function Ka(e,t,n){function r(){let n=e.pendingIcons;t.forEach(t=>{n&&n.delete(t),e.icons[t]||e.missing.add(t)})}if(n&&typeof n==`object`)try{if(!qi(e,n).length){r();return}}catch(e){console.error(e)}r(),Wa(e)}function qa(e,t){e instanceof Promise?e.then(e=>{t(e)}).catch(()=>{t(null)}):t(e)}function Ja(e,t){e.iconsToLoad=e.iconsToLoad?e.iconsToLoad.concat(t).sort():t,e.iconsQueueFlag||(e.iconsQueueFlag=!0,setTimeout(()=>{e.iconsQueueFlag=!1;let{provider:t,prefix:n}=e,r=e.iconsToLoad;if(delete e.iconsToLoad,!r||!r.length)return;let i=e.loadIcon;if(e.loadIcons&&(r.length>1||!i)){qa(e.loadIcons(r,n,t),t=>{Ka(e,r,t)});return}if(i){r.forEach(r=>{qa(i(r,n,t),t=>{Ka(e,[r],t?{prefix:n,icons:{[r]:t}}:null)})});return}let{valid:a,invalid:o}=Ga(r);if(o.length&&Ka(e,o,null),!a.length)return;let s=n.match(Yi)?va(t):null;if(!s){Ka(e,a,null);return}s.prepare(t,n,a).forEach(n=>{Ha(t,n,t=>{Ka(e,n.icons,t)})})}))}var Ya=(e,t)=>{let n=Pa(Fa(e,!0,$i()));if(!n.pending.length){let e=!0;return t&&setTimeout(()=>{e&&t(n.loaded,n.missing,n.pending,Ua)}),()=>{e=!1}}let r=Object.create(null),i=[],a,o;return n.pending.forEach(e=>{let{provider:t,prefix:n}=e;if(n===o&&t===a)return;a=t,o=n,i.push(Ki(t,n));let s=r[t]||(r[t]=Object.create(null));s[n]||(s[n]=[])}),n.pending.forEach(e=>{let{provider:t,prefix:n,name:i}=e,a=Ki(t,n),o=a.pendingIcons||=new Set;o.has(i)||(o.add(i),r[t][n].push(i))}),i.forEach(e=>{let t=r[e.provider][e.prefix];t.length&&Ja(e,t)}),t?Na(t,n,i):Ua};function Xa(e,t){let n={...e};for(let e in t){let r=t[e],i=typeof r;e in ra?(r===null||r&&(i===`string`||i===`number`))&&(n[e]=r):i===typeof n[e]&&(n[e]=e===`rotate`?r%4:r)}return n}var Za=/[\s,]+/;function Qa(e,t){t.split(Za).forEach(t=>{switch(t.trim()){case`horizontal`:e.hFlip=!0;break;case`vertical`:e.vFlip=!0}})}function $a(e,t=0){let n=e.replace(/^-?[0-9.]*/,``);function r(e){for(;e<0;)e+=4;return e%4}if(n===``){let t=parseInt(e);return isNaN(t)?0:r(t)}if(n!==e){let t=0;switch(n){case`%`:t=25;break;case`deg`:t=90}if(t){let i=parseFloat(e.slice(0,e.length-n.length));return isNaN(i)?0:(i/=t,i%1==0?r(i):0)}}return t}function eo(e,t){let n=e.indexOf(`xlink:`)===-1?``:` xmlns:xlink="http://www.w3.org/1999/xlink"`;for(let e in t)n+=` `+e+`="`+t[e]+`"`;return`<svg xmlns="http://www.w3.org/2000/svg"`+n+`>`+e+`</svg>`}function to(e){return e.replace(/"/g,`'`).replace(/%/g,`%25`).replace(/#/g,`%23`).replace(/</g,`%3C`).replace(/>/g,`%3E`).replace(/\s+/g,` `)}function no(e){return`data:image/svg+xml,`+to(e)}function ro(e){return`url("`+no(e)+`")`}var io;function ao(){try{io=window.trustedTypes.createPolicy(`iconify`,{createHTML:e=>e})}catch{io=null}}function oo(e){return io===void 0&&ao(),io?io.createHTML(e):e}var so={...ia,inline:!1},co={xmlns:`http://www.w3.org/2000/svg`,xmlnsXlink:`http://www.w3.org/1999/xlink`,"aria-hidden":!0,role:`img`},lo={display:`inline-block`},uo={backgroundColor:`currentColor`},fo={backgroundColor:`transparent`},po={Image:`var(--svg)`,Repeat:`no-repeat`,Size:`100% 100%`},mo={WebkitMask:uo,mask:uo,background:fo};for(let e in mo){let t=mo[e];for(let n in po)t[e+n]=po[n]}var ho={...so,inline:!0};function go(e){return e+(e.match(/^[-0-9.]+$/)?`px`:``)}var _o=(e,t,n)=>{let r=t.inline?ho:so,i=Xa(r,t),a=t.mode||`svg`,o={},s=t.style||{},c={...a===`svg`?co:{}};if(n){let e=Xi(n,!1,!0);if(e){let t=[`iconify`];for(let n of[`provider`,`prefix`])e[n]&&t.push(`iconify--`+e[n]);c.className=t.join(` `)}}for(let e in t){let n=t[e];if(n!==void 0)switch(e){case`icon`:case`style`:case`children`:case`onLoad`:case`mode`:case`ssr`:case`fallback`:break;case`_ref`:c.ref=n;break;case`className`:c[e]=(c[e]?c[e]+` `:``)+n;break;case`inline`:case`hFlip`:case`vFlip`:i[e]=n===!0||n===`true`||n===1;break;case`flip`:typeof n==`string`&&Qa(i,n);break;case`color`:o.color=n;break;case`rotate`:typeof n==`string`?i[e]=$a(n):typeof n==`number`&&(i[e]=n);break;case`ariaHidden`:case`aria-hidden`:n!==!0&&n!==`true`&&delete c[`aria-hidden`];break;default:r[e]===void 0&&(c[e]=n)}}let l=N(e,i),u=l.attributes;if(i.inline&&(o.verticalAlign=`-0.125em`),a===`svg`){c.style={...o,...s},Object.assign(c,u);let e=0,n=t.id;return typeof n==`string`&&(n=n.replace(/-/g,`_`)),c.dangerouslySetInnerHTML={__html:oo(ha(l.body,n?()=>n+`ID`+e++:`iconifyReact`))},(0,v.createElement)(`svg`,c)}let{body:d,width:f,height:p}=e,m=a===`mask`||a!==`bg`&&d.indexOf(`currentColor`)!==-1,h=eo(d,{...u,width:f+``,height:p+``});return c.style={...o,"--svg":ro(h),width:go(u.width),height:go(u.height),...lo,...m?uo:fo,...s},(0,v.createElement)(`span`,c)};if($i(!0),_a(``,ka),typeof document<`u`&&typeof window<`u`){let e=window;if(e.IconifyPreload!==void 0){let t=e.IconifyPreload,n=`Invalid IconifyPreload syntax.`;typeof t==`object`&&t&&(t instanceof Array?t:[t]).forEach(e=>{try{(typeof e!=`object`||!e||e instanceof Array||typeof e.icons!=`object`||typeof e.prefix!=`string`||!na(e))&&console.error(n)}catch{console.error(n)}})}if(e.IconifyProviders!==void 0){let t=e.IconifyProviders;if(typeof t==`object`&&t)for(let e in t){let n=`IconifyProviders[`+e+`] is invalid.`;try{let r=t[e];if(typeof r!=`object`||!r||r.resources===void 0)continue;Sa(e,r)||console.error(n)}catch{console.error(n)}}}}function vo(e){let[t,n]=(0,v.useState)(!!e.ssr),[r,i]=(0,v.useState)({});function a(t){if(t){let t=e.icon;if(typeof t==`object`)return{name:``,data:t};let n=ea(t);if(n)return{name:t,data:n}}return{name:``}}let[o,s]=(0,v.useState)(a(!!e.ssr));function c(){let e=r.callback;e&&(e(),i({}))}function l(e){if(JSON.stringify(o)!==JSON.stringify(e))return c(),s(e),!0}function u(){var t;let n=e.icon;if(typeof n==`object`){l({name:``,data:n});return}let r=ea(n);if(l({name:n,data:r})){if(r===void 0){let e=Ya([n],u);i({callback:e})}else r&&((t=e.onLoad)==null||t.call(e,n))}}(0,v.useEffect)(()=>(n(!0),c),[]),(0,v.useEffect)(()=>{t&&u()},[e.icon,t]);let{name:d,data:f}=o;return f?_o({...Fi,...f},e,d):e.children?e.children:e.fallback?e.fallback:(0,v.createElement)(`span`,{})}var yo=(0,v.forwardRef)((e,t)=>vo({...e,_ref:t}));(0,v.forwardRef)((e,t)=>vo({inline:!0,...e,_ref:t}));var bo={UNKNOWN:`unknown`,ONOFF:`onoff`,BRIGHTNESS:`brightness`,COLOR_TEMP:`color_temp`,HS:`hs`,XY:`xy`,RGB:`rgb`,RGBW:`rgbw`,RGBWW:`rgbww`,WHITE:`white`},xo=e=>(0,b.snakeCase)(e.substring(0,e.indexOf(`.`))),So=(e,t)=>{let n=t?.display_precision;if(n!=null)return{maximumFractionDigits:n,minimumFractionDigits:n};if(Number.isInteger(Number(e?.attributes?.step))&&Number.isInteger(Number(e?.state)))return{maximumFractionDigits:0}},Co=(e,t)=>!!e.unit_of_measurement||!!e.state_class||(t||[]).includes(e.device_class||``),wo=(e,t)=>{let n={maximumFractionDigits:2,...t};if(typeof e!=`string`)return n;if(!t||t.minimumFractionDigits===void 0&&t.maximumFractionDigits===void 0){let t=e.indexOf(`.`)>-1?e.split(`.`)[1].length:0;n.minimumFractionDigits=t,n.maximumFractionDigits=t}return n},To=(e,t=2)=>Math.round(e*10**t)/10**t,Eo=(e,t)=>(Number.isNaN=Number.isNaN||function e(t){return typeof t==`number`&&e(t)},!Number.isNaN(Number(e))&&e!==``?new Intl.NumberFormat(`en-US`,wo(e,{...t,useGrouping:!1})).format(Number(e)):typeof e==`string`?e:`${To(e,t?.maximumFractionDigits).toString()}${t?.style===`currency`?` ${t.currency}`:``}`),Do=e=>{switch(e.language){case`cs`:case`de`:case`fi`:case`fr`:case`sk`:case`sv`:return` `;default:return``}},Oo=(e,t)=>e===`°`?``:t&&e===`%`?Do(t):` `;function ko(e,t={}){let{suspendWhenHidden:n=!0,hiddenDelayMs:r=3e5,debug:i=!1,onStatusChange:a}=t,o=r,s=null,c=null,l=!1,u=null;e.connected?(i&&console.log(`[SR] Connection is already active → handleSuspendResume will manage suspension`),a?.(`connected`)):(i&&console.log(`[SR] Connection is not active`),a?.(`disconnected`));function d(){if(i&&console.log(`[SR] onHidden() triggered`),!n){i&&console.log(`[SR] suspendWhenHidden is false → skipping suspension`);return}if(l){i&&console.log(`[SR] Already suspended → skipping duplicate suspension`);return}l=!0;let t=new Promise(e=>{s=()=>{i&&console.log(`[SR] pendingResolve() called → lifting suspension`),l=!1,s=null,_(),e(),a?.(`connected`)}});i&&console.log(`[SR] Calling connection.suspendReconnectUntil(...)`),a?.(`pending-suspension`),e.suspendReconnectUntil(t),i&&console.log(`[SR] Starting hidden delay of ${o}ms before actual suspend()`),c=typeof window<`u`?window.setTimeout(()=>{c=null,document.hidden?(i&&console.log(`[SR] Hidden timeout elapsed → calling suspend()`),v(),g()):s&&(i&&console.log(`[SR] Hidden timeout elapsed but page is visible → resolving pendingResolve()`),s())},o):null,typeof window<`u`&&window.addEventListener(`focus`,f)}function f(){i&&console.log(`[SR] onVisibleOrResume() fired (page became visible)`),c!==null&&(clearTimeout(c),c=null,i&&console.log(`[SR] Cleared hiddenTimeoutId (user returned before allotted time)`)),s&&(i&&console.log(`[SR] Resolving pendingResolve() on actual resume`),s()),_()}function p(){document.hidden?(i&&console.log(`[SR] visibilitychange → HIDDEN`),d()):(i&&console.log(`[SR] visibilitychange → VISIBLE`),f())}function m(){i&&console.log(`[SR] resume event fired`),f()}function h(){i&&console.log(`[SR] pageshow event fired`),f()}function g(){u===null&&(typeof window>`u`||(u=window.setInterval(()=>{document.hidden||(i&&console.log(`[SR] visibility polling detected VISIBLE`),f())},2e3)))}function _(){u!==null&&typeof window<`u`&&(clearInterval(u),u=null)}function v(){if(!e.connected){i&&console.log(`[SR] Connection already suspended → skipping suspend()`);return}a?.(`suspended`),i&&console.log(`[SR] suspend() called → suspending connection`),typeof window<`u`&&window.stop(),e.suspend()}return document.addEventListener(`visibilitychange`,p,!1),document.addEventListener(`freeze`,v),document.addEventListener(`resume`,m),document.addEventListener(`pageshow`,h),i&&console.log(`[SR] handleSuspendResume() initialized; debugging is ON`),()=>{i&&console.log(`[SR] cleanup() called → removing listeners & clearing timeouts`),document.removeEventListener(`visibilitychange`,p,!1),document.removeEventListener(`freeze`,v),document.removeEventListener(`resume`,m),document.removeEventListener(`pageshow`,h),typeof window<`u`&&window.removeEventListener(`focus`,f),c!==null&&(i&&console.log(`[SR] cleanup: Clearing hiddenTimeoutId`),clearTimeout(c),c=null),_(),s&&(i&&console.log(`[SR] cleanup: Resolving pendingResolve() to let reconnection proceed`),s(),s=null,l=!1)}}function Ao(e,t){let n=(()=>{switch(e){case 2:return`ERR_INVALID_AUTH: Invalid authentication. ${t?`Check your "Long-Lived Access Token".`:``}`;case 1:return`ERR_CANNOT_CONNECT: Unable to connect`;case 3:return`ERR_CONNECTION_LOST: Lost connection to home assistant.`;case 4:return`ERR_HASS_HOST_REQUIRED: Please enter a Home Assistant URL.`;case 5:return`ERR_INVALID_HTTPS_TO_HTTP: Cannot connect to Home Assistant instances over "http://".`;default:return null}})();return n===null?e?.error||e?.message||`Unknown Error (${e})`:n}function jo(){try{return typeof window<`u`?window.top?.hassConnection:void 0}catch(e){console.error(`Error getting inherited connection`,e);return}}function Mo(e,t){let n=location&&location.search.includes(`auth_callback=1`),r=!!jo(),i=!!t,a=!!Fn(e,!1);switch(!0){case n:return`auth-callback`;case r:return`inherited-auth`;case i:return`provided-token`;case a:return`saved-tokens`;default:return`user-request`}}var No=async(e,t)=>{let n=Mo(e,t);if(n===`inherited-auth`)try{let{auth:e,conn:t}=await jo();return{type:`success`,connection:t,auth:e}}catch(e){return{type:`error`,error:Ao(e,t)}}if(n===`provided-token`&&t)try{let n=await $t(e,t);return{type:`success`,connection:await An({auth:n}),auth:n}}catch(e){return{type:`error`,error:Ao(e,t)}}let r={saveTokens:Pn,loadTokens:()=>Promise.resolve(Fn(e))};if(e&&n===`user-request`){if(r.hassUrl=e,r.hassUrl===``)return{type:`error`,error:`Please enter a Home Assistant URL.`};if(r.hassUrl.indexOf(`://`)===-1)return{type:`error`,error:`Please enter your full URL, including the protocol part (https://).`};try{new URL(r.hassUrl)}catch(e){return console.error(`Error:`,e),{type:`error`,error:`Invalid URL`}}}let i;try{i=await en(r)}catch(r){return r?.error===`invalid_grant`?(Nn(),No(e,t)):n===`saved-tokens`&&r===1?{type:`failed`,cannotConnect:!0}:{type:`error`,error:Ao(r,t)}}finally{typeof window<`u`&&location&&location.search.includes(`auth_callback=1`)&&history.replaceState(null,``,location.pathname)}let a;try{a=await An({auth:i})}catch(e){if(n===`saved-tokens`){if(e===1)return{type:`failed`,cannotConnect:!0};e===2&&Pn(null)}return{type:`error`,error:Ao(e,t)}}return{type:`success`,connection:a,auth:i}},Po=e=>e.sendMessagePromise({type:`config/area_registry/list`}),Fo=(e,t)=>e.subscribeEvents((0,b.debounce)(()=>Po(e).then(e=>t.setState(e,!0)),500,{leading:!0,trailing:!0}),`area_registry_updated`),Io=(e,t)=>an(`_areaRegistry`,Po,Fo,e,t),Lo=e=>e.sendMessagePromise({type:`config/floor_registry/list`}),Ro=(e,t)=>e.subscribeEvents((0,b.debounce)(()=>Lo(e).then(e=>t.setState(e,!0)),500,{leading:!0,trailing:!0}),`floor_registry_updated`),zo=(e,t)=>an(`_floorRegistry`,Lo,Ro,e,t),Bo=async(e,{includeSystemGenerated:t=!1,includeInactiveUsers:n=!1}={})=>(await e.sendMessagePromise({type:`config/auth/list`})).filter(e=>!(!t&&e.system_generated||!n&&!e.is_active)),Vo=(e,t,n)=>(Bo(e,n).then(t).catch(e=>{console.warn(`subscribeUsers: failed to fetch users`,e),t([])}),()=>{}),Ho=e=>rn(e,`_usr`,()=>ln(e),void 0),Uo=(e,t)=>Ho(e).subscribe(t);bo.HS,bo.XY,bo.RGB,bo.RGBW,bo.RGBWW,bo.COLOR_TEMP,bo.BRIGHTNESS,bo.WHITE;function F(e){return typeof e==`string`?new Date(e):e}function I(){let e=e=>Kr(e),t=()=>Ko.getState();return{formatDate:n=>{let r=F(n),{locale:i,config:a}=t();return!i||!a?e(r):Fr(r,a,i)},formatTime:n=>{let r=F(n),{locale:i,config:a}=t();return!i||!a?e(r):Ir(r,a,i)},formatTimeWithoutAmPm:e=>{let n=F(e),{locale:r,config:i}=t();return!r||!i?`${n.getHours().toString().padStart(2,`0`)}:${n.getMinutes().toString().padStart(2,`0`)}`:Lr(n,i,r)},formatHour:e=>{let n=F(e),{locale:r,config:i}=t();return!r||!i?n.getHours().toString().padStart(2,`0`):Rr(n,i,r)},formatAmPmSuffix:e=>{let n=F(e),{locale:r,config:i}=t();return!r||!i?n.getHours()>=12?`PM`:`AM`:ri(n,r,i)},formatMinute:e=>{let n=F(e),{locale:r,config:i}=t();return!r||!i?n.getMinutes().toString().padStart(2,`0`):zr(n,i,r)},formatSeconds:e=>{let n=F(e),{locale:r,config:i}=t();return!r||!i?n.getSeconds().toString().padStart(2,`0`):Br(n,i,r)},formatDateTime:n=>{let r=F(n),{locale:i,config:a}=t();return!i||!a?e(r):Vr(r,a,i)},formatDateTimeWithSeconds:n=>{let r=F(n),{locale:i,config:a}=t();return!i||!a?e(r):Hr(r,i,a)},formatShortDateTime:n=>{let r=F(n),{locale:i,config:a}=t();return!i||!a?e(r):Ur(r,i,a)},formatShortDateTimeWithYear:n=>{let r=F(n),{locale:i,config:a}=t();return!i||!a?e(r):Wr(r,i,a)},formatShortDateTimeWithConditionalYear:n=>{let r=F(n),{locale:i,config:a}=t();return!i||!a?e(r):Gr(r,i,a)},formatDateTimeWithBrowserDefaults:e=>Kr(F(e)),formatDateTimeNumeric:n=>{let r=F(n),{locale:i,config:a}=t();return!i||!a?e(r):qr(r,i,a)},formatDateWeekdayDay:n=>{let r=F(n),{locale:i,config:a}=t();return!i||!a?e(r):Jr(r,i,a)},formatDateShort:n=>{let r=F(n),{locale:i,config:a}=t();return!i||!a?e(r):Yr(r,i,a)},formatDateVeryShort:n=>{let r=F(n),{locale:i,config:a}=t();return!i||!a?e(r):Xr(r,i,a)},formatDateMonthYear:n=>{let r=F(n),{locale:i,config:a}=t();return!i||!a?e(r):Zr(r,i,a)},formatDateMonth:n=>{let r=F(n),{locale:i,config:a}=t();return!i||!a?e(r):Qr(r,i,a)},formatDateYear:n=>{let r=F(n),{locale:i,config:a}=t();return!i||!a?e(r):$r(r,i,a)},formatDateWeekday:n=>{let r=F(n),{locale:i,config:a}=t();return!i||!a?e(r):ei(r,i,a)},formatDateWeekdayShort:n=>{let r=F(n),{locale:i,config:a}=t();return!i||!a?e(r):ti(r,i,a)},formatDateNumeric:n=>{let r=F(n),{locale:i,config:a}=t();return!i||!a?e(r):ni(r,i,a)}}}async function Wo(e,t){try{let{connection:n,hassUrl:r}=Ko.getState(),i=await fetch(`${r}/api${e}`,{method:`GET`,...t??{},headers:{Authorization:`Bearer `+n?.options.auth?.accessToken,"Content-type":`application/json;charset=UTF-8`,...t?.headers??{}}});return i.status===200?{status:`success`,data:await i.json()}:{status:`error`,data:i.statusText}}catch(t){return console.error(`API Error:`,t),{status:`error`,data:`API Request failed for endpoint "${e}", follow instructions here: https://shannonhochkins.github.io/ha-component-kit/?path=/docs/core-hooks-usehass-hass-callapi--docs.`}}}var Go=(e,t)=>{let{last_changed:n,last_updated:r,context:i,...a}=e,{last_changed:o,last_updated:s,context:c,...l}=t;return JSON.stringify(a)===JSON.stringify(l)},Ko=Vn((e,t)=>({sensorNumericDeviceClasses:[],setSensorNumericDeviceClasses:t=>e({sensorNumericDeviceClasses:t}),locale:null,setLocale:t=>e({locale:t}),routes:[],setRoutes:t=>e(()=>({routes:t})),entities:{},devices:{},setDevices:t=>e(()=>({devices:t})),entitiesRegistryDisplay:{},setEntitiesRegistryDisplay:t=>e(()=>({entitiesRegistryDisplay:t})),areas:{},setAreas:t=>e(()=>({areas:t})),floors:{},services:{},setServices:t=>e(()=>({services:t})),setFloors:t=>e(()=>({floors:t})),setHassUrl:t=>e({hassUrl:t}),hassUrl:null,hash:``,locales:null,setLocales:t=>e({locales:t}),setHash:t=>e({hash:t}),setPortalRoot:t=>e({portalRoot:t}),windowContext:window,setWindowContext:t=>e({windowContext:t}),setEntities:t=>e(e=>{let n=!1,r={...e.entities};for(let[i,a]of Object.entries(t)){let t=e.entities[i];if(!t){r[i]=a,n=!0;continue}Go(t,a)||(r[i]=a,n=!0)}return n?{entities:r,lastUpdated:Date.now(),ready:!0}:e}),connectionStatus:`pending`,setConnectionStatus:t=>e({connectionStatus:t}),connection:null,setConnection:t=>e({connection:t}),cannotConnect:!1,setCannotConnect:t=>e({cannotConnect:t}),ready:!1,setReady:t=>e({ready:t}),auth:null,setAuth:t=>e({auth:t}),config:null,setConfig:t=>e({config:t}),user:null,setUser:t=>e({user:t}),users:[],setUsers:t=>e({users:t}),error:null,setError:t=>e({error:t}),globalComponentStyles:{},setGlobalComponentStyles:t=>e(()=>({globalComponentStyles:t})),disconnectCallbacks:[],onDisconnect:t=>e(e=>({disconnectCallbacks:[...e.disconnectCallbacks,t]})),triggerOnDisconnect:()=>e(e=>(e.disconnectCallbacks.forEach(e=>e()),{disconnectCallbacks:[]})),helpers:{logout(){let{reset:e}=L.getState(),{setError:n}=t();try{e(),Nn(),location&&location.reload()}catch(e){console.error(`Error:`,e),n(`Unable to log out!`)}},callService:(e=>{let{domain:n,service:r,serviceData:i,target:a,returnResponse:o}=e,{connection:s,ready:c}=t(),l=typeof a==`string`||(0,b.isArray)(a)?{entity_id:a}:a;if(!s||!c)return o?Promise.reject(Error(`callService: connection not established or not ready`)):void 0;try{let e=un(s,(0,b.snakeCase)(n),(0,b.snakeCase)(r),i??{},l,o);return o?e:void 0}catch(e){return console.error(`Error calling service:`,e),o?Promise.reject(e):void 0}}),addRoute(e){let{routes:n,setRoutes:r}=t();if(!n.find(t=>t.hash===e.hash)){let t=typeof window<`u`?window.location.hash.replace(`#`,``):``,i=t!==``&&t===e.hash;r([...n,{...e,active:i}])}},getRoute(e){let{routes:n}=t();return n.find(t=>t.hash===e)||null},getAllEntities(){return t().entities},joinHassUrl(e){let{connection:n}=t();return n?new URL(e,n.options.auth?.data.hassUrl).toString():``},callApi:Wo,dateTime:{shouldUseAmPm:()=>{let{locale:e}=t();return!e||ir(e)},getTimeZone(){let{locale:e,config:n}=t();return!n||!e?`UTC`:rr(e.time_zone,n.time_zone)}}},formatter:{stateValue:e=>{let{config:n,entitiesRegistryDisplay:r,locale:i,sensorNumericDeviceClasses:a}=t();return!n||!i?``:is(e,n,r,i,a,e.state)},attributeValue:(e,n)=>{let{config:r,entitiesRegistryDisplay:i,locale:a}=t();return!r||!a?``:rs(e,a,r,i,n)},...I()}})),L=Vn((e,t)=>({authenticated:!1,setAuthenticated:t=>e({authenticated:t}),subscriptions:{},addSubscription:(n,r)=>{if(!r)return;let i=t().subscriptions;if(i[n])try{i[n]()}catch{}e({subscriptions:{...i,[n]:r}})},removeSubscription:n=>{let r=t().subscriptions;if(!r[n])return;try{r[n]()}catch{}let i={...r};delete i[n],e({subscriptions:i})},unsubscribeAll:()=>{let n=t().subscriptions;for(let e of Object.keys(n))try{n[e]()}catch{}e({subscriptions:{}})},reset(){let{unsubscribeAll:e,setAuthenticated:n}=t(),{setAuth:r,setUser:i,setCannotConnect:a,setConfig:o,setConnection:s,setEntities:c,setError:l,setReady:u,setRoutes:d,setConnectionStatus:f}=Ko.getState();r(null),d([]),u(!1),s(null),c({}),o(null),l(null),a(!1),i(null),f(`pending`),n(!1),e()}})),R=Ko,qo={};function Jo(e){Object.assign(qo,e)}function Yo(e,t){let{search:n,replace:r,fallback:i}=t??{};return qo[e]?typeof n==`string`&&typeof r==`string`?qo[e].replace(`${n}`,r).trim():qo[e]:i||e}var Xo=e=>e.sendMessagePromise({type:`config/entity_registry/list_for_display`}),Zo=(e,t)=>e.subscribeEvents((0,b.debounce)(()=>Xo(e).then(e=>t.setState(e,!0)),500,{leading:!0,trailing:!0}),`entity_registry_updated`),Qo=(e,t)=>an(`_entityRegistryDisplay`,Xo,Zo,e,t),$o=new Set([`temperature`,`current_temperature`,`target_temperature`,`target_temp_temp`,`target_temp_high`,`target_temp_low`,`target_temp_step`,`min_temp`,`max_temp`]),es={light:{brightness:e=>Math.round(e/255*100).toString()},media_player:{volume_level:e=>Math.round(e*100).toString(),media_duration:e=>or(e.toString(),`s`)}},ts={climate:{humidity:`%`,current_humidity:`%`,target_humidity_low:`%`,target_humidity_high:`%`,target_humidity_step:`%`,min_humidity:`%`,max_humidity:`%`},cover:{current_position:`%`,current_tilt_position:`%`},fan:{percentage:`%`},humidifier:{humidity:`%`,current_humidity:`%`,min_humidity:`%`,max_humidity:`%`},light:{color_temp:`mired`,max_mireds:`mired`,min_mireds:`mired`,color_temp_kelvin:`K`,min_color_temp_kelvin:`K`,max_color_temp_kelvin:`K`,brightness:`%`},sun:{azimuth:`°`,elevation:`°`},vacuum:{battery_level:`%`},valve:{current_position:`%`},sensor:{battery_level:`%`},media_player:{volume_level:`%`}},ns=(e,t,n)=>{let r=e.unit_system.length||``;switch(n){case`visibility`:return t.attributes.visibility_unit||r;case`precipitation`:return t.attributes.precipitation_unit||(r===`km`?`mm`:`in`);case`pressure`:return t.attributes.pressure_unit||(r===`km`?`hPa`:`inHg`);case`temperature`:case`templow`:return t.attributes.temperature_unit||e.unit_system.temperature;case`wind_speed`:return t.attributes.wind_speed_unit||`${r}/h`;case`humidity`:case`precipitation_probability`:return`%`;default:{let t=e.unit_system;return n in t?t[n]:``}}},rs=(e,t,n,r,i,a)=>{let o=a===void 0?e.attributes[i]:a;if(o==null)return Yo(`unknown`);if(typeof o==`number`){let r=xo(e.entity_id),a=es[r]?.[i],s=a?a(o):Eo(o),c=ts[r]?.[i];return r===`weather`?c=ns(n,e,i):$o.has(i)&&(c=n.unit_system.temperature),c?`${s}${Oo(c,t)}${c}`:s}if(typeof o==`string`&&mr(o,!0)){if(ur(o)){let e=new Date(o);if(hr(e))return Hr(e,t,n)}let e=new Date(o);if(hr(e))return Fr(e,n,t)}return Array.isArray(o)&&o.some(e=>e instanceof Object)||!Array.isArray(o)&&o instanceof Object?JSON.stringify(o):Array.isArray(o)?o.map(a=>rs(e,t,n,r,i,a)).join(`, `):Yo(o)},is=(e,t,n,r,i,a)=>{let o=n?.[e.entity_id];return as(r,i,t,o,e.entity_id,e.attributes,a===void 0?e.state:a)},as=(e,t,n,r,i,a,o)=>{if(o===`unknown`||o===`unavailable`)return Yo(o);let s=xo(i),c=s===`counter`||s===`number`||s===`input_number`;if(Co(a,s===`sensor`?t:[])||c){let e=a.unit_of_measurement;if(a.device_class===`duration`&&a.unit_of_measurement&&ar[e]&&r?.display_precision===void 0)try{return or(o,e)}catch{}if(a.device_class===`monetary`)try{return Eo(o,{style:`currency`,currency:a.unit_of_measurement,minimumFractionDigits:2,...So({state:o,attributes:a},r)})}catch{}let t=Eo(o,So({state:o,attributes:a},r)),n=a.unit_of_measurement;return n?`${t}${n}`:t}if([`date`,`input_datetime`,`time`].includes(s))try{let t=o.split(` `);if(t.length===2)return e?Vr(new Date(t.join(`T`)),n,e):new Date(t.join(`T`)).toLocaleString();if(t.length===1){if(o.includes(`-`))return e?Fr(new Date(`${o}T00:00`),n,e):new Date(`${o}T00:00`).toLocaleDateString();if(o.includes(`:`)){let t=new Date;return e?Ir(new Date(`${t.toISOString().split(`T`)[0]}T${o}`),n,e):new Date(`${t.toISOString().split(`T`)[0]}T${o}`).toLocaleTimeString()}}return o}catch{return o}if([`ai_task`,`button`,`conversation`,`event`,`image`,`input_button`,`notify`,`scene`,`stt`,`tag`,`tts`,`wake_word`,`datetime`].includes(s)||s===`sensor`&&a.device_class===`timestamp`)try{return e?Vr(new Date(o),n,e):new Date(o).toLocaleString()}catch{return o}if([`button`,`conversation`,`event`,`image`,`input_button`,`notify`,`scene`,`stt`,`tag`,`tts`,`wake_word`].includes(s)||s===`sensor`&&a.device_class===`timestamp`)try{return e?Vr(new Date(o),n,e):new Date(o).toLocaleString()}catch{return o}return Yo(o)},os={exports:{}},z={},ss;function cs(){if(ss)return z;ss=1;var e=typeof Symbol==`function`&&Symbol.for,t=e?Symbol.for(`react.element`):60103,n=e?Symbol.for(`react.portal`):60106,r=e?Symbol.for(`react.fragment`):60107,i=e?Symbol.for(`react.strict_mode`):60108,a=e?Symbol.for(`react.profiler`):60114,o=e?Symbol.for(`react.provider`):60109,s=e?Symbol.for(`react.context`):60110,c=e?Symbol.for(`react.async_mode`):60111,l=e?Symbol.for(`react.concurrent_mode`):60111,u=e?Symbol.for(`react.forward_ref`):60112,d=e?Symbol.for(`react.suspense`):60113,f=e?Symbol.for(`react.suspense_list`):60120,p=e?Symbol.for(`react.memo`):60115,m=e?Symbol.for(`react.lazy`):60116,h=e?Symbol.for(`react.block`):60121,g=e?Symbol.for(`react.fundamental`):60117,_=e?Symbol.for(`react.responder`):60118,v=e?Symbol.for(`react.scope`):60119;function y(e){if(typeof e==`object`&&e){var f=e.$$typeof;switch(f){case t:switch(e=e.type,e){case c:case l:case r:case a:case i:case d:return e;default:switch(e&&=e.$$typeof,e){case s:case u:case m:case p:case o:return e;default:return f}}case n:return f}}}function b(e){return y(e)===l}return z.AsyncMode=c,z.ConcurrentMode=l,z.ContextConsumer=s,z.ContextProvider=o,z.Element=t,z.ForwardRef=u,z.Fragment=r,z.Lazy=m,z.Memo=p,z.Portal=n,z.Profiler=a,z.StrictMode=i,z.Suspense=d,z.isAsyncMode=function(e){return b(e)||y(e)===c},z.isConcurrentMode=b,z.isContextConsumer=function(e){return y(e)===s},z.isContextProvider=function(e){return y(e)===o},z.isElement=function(e){return typeof e==`object`&&!!e&&e.$$typeof===t},z.isForwardRef=function(e){return y(e)===u},z.isFragment=function(e){return y(e)===r},z.isLazy=function(e){return y(e)===m},z.isMemo=function(e){return y(e)===p},z.isPortal=function(e){return y(e)===n},z.isProfiler=function(e){return y(e)===a},z.isStrictMode=function(e){return y(e)===i},z.isSuspense=function(e){return y(e)===d},z.isValidElementType=function(e){return typeof e==`string`||typeof e==`function`||e===r||e===l||e===a||e===i||e===d||e===f||typeof e==`object`&&!!e&&(e.$$typeof===m||e.$$typeof===p||e.$$typeof===o||e.$$typeof===s||e.$$typeof===u||e.$$typeof===g||e.$$typeof===_||e.$$typeof===v||e.$$typeof===h)},z.typeOf=y,z}var ls;function us(){return ls||(ls=1,os.exports=cs()),os.exports}var ds,fs;function ps(){if(fs)return ds;fs=1;var e=us(),t={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},n={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},r={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},i={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},a={};a[e.ForwardRef]=r,a[e.Memo]=i;function o(n){return e.isMemo(n)?i:a[n.$$typeof]||t}var s=Object.defineProperty,c=Object.getOwnPropertyNames,l=Object.getOwnPropertySymbols,u=Object.getOwnPropertyDescriptor,d=Object.getPrototypeOf,f=Object.prototype;function p(e,t,r){if(typeof t!=`string`){if(f){var i=d(t);i&&i!==f&&p(e,i,r)}var a=c(t);l&&(a=a.concat(l(t)));for(var m=o(e),h=o(t),g=0;g<a.length;++g){var _=a[g];if(!n[_]&&!(r&&r[_])&&!(h&&h[_])&&!(m&&m[_])){var v=u(t,_);try{s(e,_,v)}catch{}}}}return e}return ds=p,ds}ps();var ms=(v.useInsertionEffect?v.useInsertionEffect:!1)||function(e){return e()},hs=v.createContext(typeof HTMLElement<`u`?ct({key:`css`}):null);hs.Provider;var gs=function(e){return(0,v.forwardRef)(function(t,n){return e(t,(0,v.useContext)(hs),n)})},_s=v.createContext({}),vs={}.hasOwnProperty,ys=`__EMOTION_TYPE_PLEASE_DO_NOT_USE__`,bs=function(e,t){var n={};for(var r in t)vs.call(t,r)&&(n[r]=t[r]);return n[ys]=e,n},xs=function(e){var t=e.cache,n=e.serialized,r=e.isStringTag;return ut(t,n,r),ms(function(){return dt(t,n,r)}),null},Ss=gs(function(e,t,n){var r=e.css;typeof r==`string`&&t.registered[r]!==void 0&&(r=t.registered[r]);var i=e[ys],a=[r],o=``;typeof e.className==`string`?o=lt(t.registered,a,e.className):e.className!=null&&(o=e.className+` `);var s=Ct(a,void 0,v.useContext(_s));o+=t.key+`-`+s.name;var c={};for(var l in e)vs.call(e,l)&&l!==`css`&&l!==ys&&(c[l]=e[l]);return c.className=o,n&&(c.ref=n),v.createElement(v.Fragment,null,v.createElement(xs,{cache:t,serialized:s,isStringTag:typeof i==`string`}),v.createElement(i,c))}),Cs=C.Fragment,ws=function(e,t,n){return vs.call(t,`css`)?C.jsx(Ss,bs(e,t),n):C.jsx(e,t,n)},Ts=function(e,t,n){return vs.call(t,`css`)?C.jsxs(Ss,bs(e,t),n):C.jsxs(e,t,n)},Es=e=>Symbol.iterator in e,Ds=e=>`entries`in e,Os=(e,t)=>{let n=e instanceof Map?e:new Map(e.entries()),r=t instanceof Map?t:new Map(t.entries());if(n.size!==r.size)return!1;for(let[e,t]of n)if(!r.has(e)||!Object.is(t,r.get(e)))return!1;return!0},ks=(e,t)=>{let n=e[Symbol.iterator](),r=t[Symbol.iterator](),i=n.next(),a=r.next();for(;!i.done&&!a.done;){if(!Object.is(i.value,a.value))return!1;i=n.next(),a=r.next()}return!!i.done&&!!a.done};function As(e,t){return Object.is(e,t)?!0:typeof e!=`object`||!e||typeof t!=`object`||!t||Object.getPrototypeOf(e)!==Object.getPrototypeOf(t)?!1:Es(e)&&Es(t)?Ds(e)&&Ds(t)?Os(e,t):ks(e,t):Os({entries:()=>Object.entries(e)},{entries:()=>Object.entries(t)})}function js(e){let t=v.useRef(void 0);return n=>{let r=e(n);return As(t.current,r)?t.current:t.current=r}}var Ms=new Set;function Ns({children:e,hassUrl:t,hassToken:n,portalRoot:r,windowContext:i,renderError:a=e=>e,handleResumeOptions:o}){let s=L(e=>e.addSubscription),c=L(e=>e.setAuthenticated),{hash:l,ready:u,error:d,cannotConnect:f,setError:p}=Ko(js(e=>({hash:e.hash,routes:e.routes,ready:e.ready,error:e.error,cannotConnect:e.cannotConnect,auth:e.auth,setError:e.setError})));(0,v.useEffect)(()=>{let{setPortalRoot:e}=Ko.getState();r&&e(r)},[r]),(0,v.useEffect)(()=>{let{setWindowContext:e}=Ko.getState();i&&e(i)},[i]);let m=(0,v.useCallback)(async()=>{let{setError:e,setUser:r,setCannotConnect:i,setAuth:a,setConnection:l,setEntities:u,setConfig:d,setConnectionStatus:f,setAreas:p,setDevices:m,setFloors:h,setEntitiesRegistryDisplay:g,setServices:_,setUsers:v,setLocale:y,setSensorNumericDeviceClasses:b}=Ko.getState(),x=await No(t,n);if(x.type===`error`)c(!1),e(x.error);else if(x.type===`failed`)c(!1),i(!0);else if(x.type===`success`){let{connection:e,auth:t}=x;a(t),l(e),s(`entities`,kn(e,e=>{u(e)})),s(`entity_registry_display`,Qo(e,e=>{let t={};for(let n of e.entities)t[n.ei]={entity_id:n.ei,device_id:n.di,area_id:n.ai,labels:n.lb,translation_key:n.tk,platform:n.pl,entity_category:n.ec===void 0?void 0:e.entity_categories[n.ec],has_entity_name:n.hn,name:n.en,icon:n.ic,hidden:n.hb,display_precision:n.dp};g(t)})),s(`areas`,Io(e,e=>{let t={};for(let n of e)t[n.area_id]=n;p(t)})),s(`devices`,Rs(e,e=>{let t={};for(let n of e)t[n.id]=n;m(t)})),s(`floors`,zo(e,e=>{let t={};for(let n of e)t[n.floor_id]=n;h(t)})),s(`config`,hn(e,e=>{d(e)})),s(`current_user`,Uo(e,e=>{r(e)})),s(`services`,Sn(e,e=>{_(e)})),s(`users`,Vo(e,e=>{v(e)})),s(`language`,await Zn(e,`language`,e=>{if(e.value){let t=er(e.value);y({...e.value,language:t})}else y(e.value)})),e.sendMessagePromise({type:`sensor/numeric_device_classes`}).then(e=>{b(e.numeric_device_classes)});let{onStatusChange:n,...i}=o||{},c=ko(e,{suspendWhenHidden:!0,hiddenDelayMs:3e5,debug:!1,onStatusChange:e=>{f(e),n?.(e)},...i});s(`resume`,c)}},[t,n,o,s,c]);(0,v.useEffect)(()=>{let{setHassUrl:e}=Ko.getState();e(t)},[t]),(0,v.useEffect)(()=>{let{setHash:e}=Ko.getState();location.hash!==``&&location.hash.replace(`#`,``)!==l&&e(location.hash)},[l]),(0,v.useEffect)(()=>(typeof window<`u`&&window.addEventListener(`hashchange`,Ps),()=>{typeof window<`u`&&window.removeEventListener(`hashchange`,Ps)}),[]),(0,v.useEffect)(()=>()=>L.getState().reset(),[]);let h=(0,v.useCallback)(async()=>{if(!Ms.has(t)){Ms.add(t);try{L.getState().authenticated&&Ko.getState().hassUrl!==t&&L.getState().reset(),c(!0),o?.onStatusChange?.(`pending`),await m()}catch(e){let t=Ao(e);p(`Unable to connect to Home Assistant, please check the URL: "${t}"`)}}},[m,p,o,t,c]);return(0,v.useEffect)(()=>{h()},[h]),f?a(Ts(`p`,{children:[`Unable to connect to `,Fn(t)?.hassUrl,`, refresh the page and try again, or`,` `,ws(`a`,{onClick:R.getState().helpers.logout,children:`Logout`}),`.`]})):d===null?e(u):a(d)}function Ps(){let{routes:e,setRoutes:t,setHash:n}=Ko.getState();t(e.map(e=>e.hash===location.hash.replace(`#`,``)?{...e,active:!0}:{...e,active:!1})),n(location.hash)}function Fs(){let e=R(e=>e.config);return(0,v.useMemo)(()=>e,[e])}var Is=e=>e.sendMessagePromise({type:`config/device_registry/list`}),Ls=(e,t)=>e.subscribeEvents((0,b.debounce)(()=>Is(e).then(e=>t.setState(e,!0)),500,{leading:!0,trailing:!0}),`device_registry_updated`),Rs=(e,t)=>an(`_dr`,Is,Ls,e,t);function zs({locale:e,children:t}){let n=Fs(),[r,i]=(0,v.useState)(!1),a=(0,v.useRef)(!1),o=(0,v.useRef)(null),s=Ko(e=>e.setError),c=Ko(e=>e.setLocales);return(0,v.useEffect)(()=>{if(!(e??n?.language))return;let t=Yn.find(({code:t})=>t===(e??n?.language));if(o.current!==t?.code&&(i(!1),a.current=!1,s(null)),!t)a.current=!1,s(`Locale "${e??n?.language}" not found, available options are "${Yn.map(({code:e})=>`${e}`).join(`, `)}"`);else{if(a.current)return;a.current=!0,o.current=t.code,t.fetch().then(e=>{a.current=!1,i(!0),Jo(e),c(e)}).catch(e=>{a.current=!1,i(!0),s(`Error retrieving translations from Home Assistant: ${e?.message??e}`)})}},[n,r,c,s,e]),r?t:null}var Bs=Si`
  0% {stroke-width:0; opacity:0;}
  50% {stroke-width:5; opacity:1;}
  100% {stroke-width:0; opacity:0;}
`;function Vs({className:e}){return ws(`div`,{className:e,children:Ts(`svg`,{children:[ws(`path`,{d:`m 12.5,20 15,0 0,0 -15,0 z`}),ws(`path`,{d:`m 32.5,20 15,0 0,0 -15,0 z`}),ws(`path`,{d:`m 52.5,20 15,0 0,0 -15,0 z`}),ws(`path`,{d:`m 72.5,20 15,0 0,0 -15,0 z`})]})})}var Hs=ji(Vs)`
  position: fixed;
  inset: 0;
  background-color: #1a1a1a;
  svg {
    position: absolute;
    top: 50%;
    left: 50%;
    width: 6.25em;
    height: 3.125em;
    margin: -1.562em 0 0 -3.125em;
    path {
      fill: none;
      stroke: #f0c039;
      opacity: 0;
    }
    path:nth-of-type(1) {
      animation: ${Bs} 1s ease-in-out 0s infinite alternate;
    }
    path:nth-of-type(2) {
      animation: ${Bs} 1s ease-in-out 0.1s infinite alternate;
    }
    path:nth-of-type(3) {
      animation: ${Bs} 1s ease-in-out 0.2s infinite alternate;
    }
    path:nth-of-type(4) {
      animation: ${Bs} 1s ease-in-out 0.3s infinite alternate;
    }
  }
`,Us=ji.div`
  width: 100%;
  height: 100%;
`,Ws=(0,v.memo)(function({children:e,hassUrl:t,hassToken:n,loading:r=ws(Hs,{}),onReady:i,options:a={},wrapperProps:o}){let s=(0,v.useRef)(!1),c=(0,v.useMemo)(()=>{try{return new URL(t).origin}catch(e){return console.log(`Error:`,e),null}},[t]);return!c||c===`null`||c===null?ws(Cs,{children:`Provide the hassUrl prop with a valid url to your home assistant instance.`}):ws(Ns,{hassUrl:c,hassToken:n,...a,children:t=>ws(Cs,{children:t?ws(Us,{...o,children:Ts(zs,{locale:a.locale,children:[i&&!s.current&&(i(),s.current=!0,null),e]})}):ws(Us,{...o,children:r})})})}),Gs=`-ms-`,Ks=`-moz-`,qs=`-webkit-`,Js=`comm`,Ys=`rule`,Xs=`decl`,Zs=`@import`,Qs=`@namespace`,$s=`@keyframes`,ec=`@layer`,tc=Math.abs,nc=String.fromCharCode,rc=Object.assign;function ic(e,t){return cc(e,0)^45?(((t<<2^cc(e,0))<<2^cc(e,1))<<2^cc(e,2))<<2^cc(e,3):0}function ac(e){return e.trim()}function oc(e,t){return(e=t.exec(e))?e[0]:e}function B(e,t,n){return e.replace(t,n)}function sc(e,t,n){return e.indexOf(t,n)}function cc(e,t){return e.charCodeAt(t)|0}function lc(e,t,n){return e.slice(t,n)}function uc(e){return e.length}function dc(e){return e.length}function fc(e,t){return t.push(e),e}function pc(e,t){return e.map(t).join(``)}function mc(e,t){return e.filter(function(e){return!oc(e,t)})}var hc=1,gc=1,_c=0,vc=0,yc=0,bc=``;function xc(e,t,n,r,i,a,o,s){return{value:e,root:t,parent:n,type:r,props:i,children:a,line:hc,column:gc,length:o,return:``,siblings:s}}function Sc(e,t){return rc(xc(``,null,null,``,null,null,0,e.siblings),e,{length:-e.length},t)}function Cc(e){for(;e.root;)e=Sc(e.root,{children:[e]});fc(e,e.siblings)}function wc(){return yc}function Tc(){return yc=vc>0?cc(bc,--vc):0,gc--,yc===10&&(gc=1,hc--),yc}function Ec(){return yc=vc<_c?cc(bc,vc++):0,gc++,yc===10&&(gc=1,hc++),yc}function Dc(){return cc(bc,vc)}function Oc(){return vc}function kc(e,t){return lc(bc,e,t)}function Ac(e){switch(e){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function jc(e){return hc=gc=1,_c=uc(bc=e),vc=0,[]}function Mc(e){return bc=``,e}function Nc(e){return ac(kc(vc-1,Ic(e===91?e+2:e===40?e+1:e)))}function Pc(e){for(;(yc=Dc())&&yc<33;)Ec();return Ac(e)>2||Ac(yc)>3?``:` `}function Fc(e,t){for(;--t&&Ec()&&!(yc<48||yc>102||yc>57&&yc<65||yc>70&&yc<97););return kc(e,Oc()+(t<6&&Dc()==32&&Ec()==32))}function Ic(e){for(;Ec();)switch(yc){case e:return vc;case 34:case 39:e!==34&&e!==39&&Ic(yc);break;case 40:e===41&&Ic(e);break;case 92:Ec()}return vc}function Lc(e,t){for(;Ec()&&e+yc!==57&&(e+yc!==84||Dc()!==47););return`/*`+kc(t,vc-1)+`*`+nc(e===47?e:Ec())}function Rc(e){for(;!Ac(Dc());)Ec();return kc(e,vc)}function zc(e){return Mc(Bc(``,null,null,null,[``],e=jc(e),0,[0],e))}function Bc(e,t,n,r,i,a,o,s,c){for(var l=0,u=0,d=o,f=0,p=0,m=0,h=1,g=1,_=1,v=0,y=``,b=i,x=a,S=r,C=y;g;)switch(m=v,v=Ec()){case 40:if(m!=108&&cc(C,d-1)==58){sc(C+=B(Nc(v),`&`,`&\f`),`&\f`,tc(l?s[l-1]:0))!=-1&&(_=-1);break}case 34:case 39:case 91:C+=Nc(v);break;case 9:case 10:case 13:case 32:C+=Pc(m);break;case 92:C+=Fc(Oc()-1,7);continue;case 47:switch(Dc()){case 42:case 47:fc(Hc(Lc(Ec(),Oc()),t,n,c),c),(Ac(m||1)==5||Ac(Dc()||1)==5)&&uc(C)&&lc(C,-1,void 0)!==` `&&(C+=` `);break;default:C+=`/`}break;case 123*h:s[l++]=uc(C)*_;case 125*h:case 59:case 0:switch(v){case 0:case 125:g=0;case 59+u:_==-1&&(C=B(C,/\f/g,``)),p>0&&(uc(C)-d||h===0&&m===47)&&fc(p>32?Uc(C+`;`,r,n,d-1,c):Uc(B(C,` `,``)+`;`,r,n,d-2,c),c);break;case 59:C+=`;`;default:if(fc(S=Vc(C,t,n,l,u,i,s,y,b=[],x=[],d,a),a),v===123){if(u===0)Bc(C,t,S,S,b,a,d,s,x);else{switch(f){case 99:if(cc(C,3)===110)break;case 108:if(cc(C,2)===97)break;default:u=0;case 100:case 109:case 115:}u?Bc(e,S,S,r&&fc(Vc(e,S,S,0,0,i,s,y,i,b=[],d,x),x),i,x,d,s,r?b:x):Bc(C,S,S,S,[``],x,0,s,x)}}}l=u=p=0,h=_=1,y=C=``,d=o;break;case 58:d=1+uc(C),p=m;default:if(h<1){if(v==123)--h;else if(v==125&&h++==0&&Tc()==125)continue}switch(C+=nc(v),v*h){case 38:_=u>0?1:(C+=`\f`,-1);break;case 44:s[l++]=(uc(C)-1)*_,_=1;break;case 64:Dc()===45&&(C+=Nc(Ec())),f=Dc(),u=d=uc(y=C+=Rc(Oc())),v++;break;case 45:m===45&&uc(C)==2&&(h=0)}}return a}function Vc(e,t,n,r,i,a,o,s,c,l,u,d){for(var f=i-1,p=i===0?a:[``],m=dc(p),h=0,g=0,_=0;h<r;++h)for(var v=0,y=lc(e,f+1,f=tc(g=o[h])),b=e;v<m;++v)(b=ac(g>0?p[v]+` `+y:B(y,/&\f/g,p[v])))&&(c[_++]=b);return xc(e,t,n,i===0?Ys:s,c,l,u,d)}function Hc(e,t,n,r){return xc(e,t,n,Js,nc(wc()),lc(e,2,-2),0,r)}function Uc(e,t,n,r,i){return xc(e,t,n,Xs,lc(e,0,r),lc(e,r+1,-1),r,i)}function Wc(e,t,n){switch(ic(e,t)){case 5103:return qs+`print-`+e+e;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:case 6391:case 5879:case 5623:case 6135:case 4599:return qs+e+e;case 4855:return qs+e.replace(`add`,`source-over`).replace(`substract`,`source-out`).replace(`intersect`,`source-in`).replace(`exclude`,`xor`)+e;case 4789:return Ks+e+e;case 5349:case 4246:case 4810:case 6968:case 2756:return qs+e+Ks+e+Gs+e+e;case 5936:switch(cc(e,t+11)){case 114:return qs+e+Gs+B(e,/[svh]\w+-[tblr]{2}/,`tb`)+e;case 108:return qs+e+Gs+B(e,/[svh]\w+-[tblr]{2}/,`tb-rl`)+e;case 45:return qs+e+Gs+B(e,/[svh]\w+-[tblr]{2}/,`lr`)+e}case 6828:case 4268:case 2903:return qs+e+Gs+e+e;case 6165:return qs+e+Gs+`flex-`+e+e;case 5187:return qs+e+B(e,/(\w+).+(:[^]+)/,qs+`box-$1$2`+Gs+`flex-$1$2`)+e;case 5443:return qs+e+Gs+`flex-item-`+B(e,/flex-|-self/g,``)+(oc(e,/flex-|baseline/)?``:Gs+`grid-row-`+B(e,/flex-|-self/g,``))+e;case 4675:return qs+e+Gs+`flex-line-pack`+B(e,/align-content|flex-|-self/g,``)+e;case 5548:return qs+e+Gs+B(e,`shrink`,`negative`)+e;case 5292:return qs+e+Gs+B(e,`basis`,`preferred-size`)+e;case 6060:return qs+`box-`+B(e,`-grow`,``)+qs+e+Gs+B(e,`grow`,`positive`)+e;case 4554:return qs+B(e,/([^-])(transform)/g,`$1`+qs+`$2`)+e;case 6187:return B(B(B(e,/(zoom-|grab)/,qs+`$1`),/(image-set)/,qs+`$1`),e,``)+e;case 5495:case 3959:return B(e,/(image-set\([^]*)/,qs+"$1$`$1");case 4968:return B(B(e,/(.+:)(flex-)?(.*)/,qs+`box-pack:$3`+Gs+`flex-pack:$3`),/space-between/,`justify`)+qs+e+e;case 4200:if(!oc(e,/flex-|baseline/))return Gs+`grid-column-align`+lc(e,t)+e;break;case 2592:case 3360:return Gs+B(e,`template-`,``)+e;case 4384:case 3616:return n&&n.some(function(e,n){return t=n,oc(e.props,/grid-\w+-end/)})?~sc(e+(n=n[t].value),`span`,0)?e:Gs+B(e,`-start`,``)+e+Gs+`grid-row-span:`+(~sc(n,`span`,0)?oc(n,/\d+/):+oc(n,/\d+/)-oc(e,/\d+/))+`;`:Gs+B(e,`-start`,``)+e;case 4896:case 4128:return n&&n.some(function(e){return oc(e.props,/grid-\w+-start/)})?e:Gs+B(B(e,`-end`,`-span`),`span `,``)+e;case 4095:case 3583:case 4068:case 2532:return B(e,/(.+)-inline(.+)/,qs+`$1$2`)+e;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(uc(e)-1-t>6)switch(cc(e,t+1)){case 109:if(cc(e,t+4)!==45)break;case 102:return B(e,/(.+:)(.+)-([^]+)/,`$1`+qs+`$2-$3$1`+Ks+(cc(e,t+3)==108?`$3`:`$2-$3`))+e;case 115:return~sc(e,`stretch`,0)?Wc(B(e,`stretch`,`fill-available`),t,n)+e:e}break;case 5152:case 5920:return B(e,/(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/,function(t,n,r,i,a,o,s){return Gs+n+`:`+r+s+(i?Gs+n+`-span:`+(a?o:+o-r)+s:``)+e});case 4949:if(cc(e,t+6)===121)return B(e,`:`,`:`+qs)+e;break;case 6444:switch(cc(e,cc(e,14)===45?18:11)){case 120:return B(e,/(.+:)([^;\s!]+)(;|(\s+)?!.+)?/,`$1`+qs+(cc(e,14)===45?`inline-`:``)+`box$3$1`+qs+`$2$3$1`+Gs+`$2box$3`)+e;case 100:return B(e,`:`,`:`+Gs)+e}break;case 5719:case 2647:case 2135:case 3927:case 2391:return B(e,`scroll-`,`scroll-snap-`)+e}return e}function Gc(e,t){for(var n=``,r=0;r<e.length;r++)n+=t(e[r],r,e,t)||``;return n}function Kc(e,t,n,r){switch(e.type){case ec:if(e.children.length)break;case Zs:case Qs:case Xs:return e.return=e.return||e.value;case Js:return``;case $s:return e.return=e.value+`{`+Gc(e.children,r)+`}`;case Ys:if(!uc(e.value=e.props.join(`,`)))return``}return uc(n=Gc(e.children,r))?e.return=e.value+`{`+n+`}`:``}function qc(e){var t=dc(e);return function(n,r,i,a){for(var o=``,s=0;s<t;s++)o+=e[s](n,r,i,a)||``;return o}}function Jc(e){return function(t){t.root||(t=t.return)&&e(t)}}function Yc(e,t,n,r){if(e.length>-1&&!e.return)switch(e.type){case Xs:e.return=Wc(e.value,e.length,n);return;case $s:return Gc([Sc(e,{value:B(e.value,`@`,`@`+qs)})],r);case Ys:if(e.length)return pc(n=e.props,function(t){switch(oc(t,r=/(::plac\w+|:read-\w+)/)){case`:read-only`:case`:read-write`:Cc(Sc(e,{props:[B(t,/:(read-\w+)/,`:`+Ks+`$1`)]})),Cc(Sc(e,{props:[t]})),rc(e,{props:mc(n,r)});break;case`::placeholder`:Cc(Sc(e,{props:[B(t,/:(plac\w+)/,`:`+qs+`input-$1`)]})),Cc(Sc(e,{props:[B(t,/:(plac\w+)/,`:`+Ks+`$1`)]})),Cc(Sc(e,{props:[B(t,/:(plac\w+)/,Gs+`input-$1`)]})),Cc(Sc(e,{props:[t]})),rc(e,{props:mc(n,r)})}return``})}}var Xc=typeof process<`u`&&({}.REACT_APP_SC_ATTR||{}.SC_ATTR)||`data-styled`,Zc=`active`,Qc=`data-styled-version`,$c=`6.5.3`,el=`/*!sc*/
`,tl=typeof window<`u`&&typeof document<`u`;function nl(e){if(typeof process<`u`){let t={}[e];if(t!==void 0&&t!==``)return t!==`false`}}var rl=!!(typeof SC_DISABLE_SPEEDY==`boolean`?SC_DISABLE_SPEEDY:nl(`REACT_APP_SC_DISABLE_SPEEDY`)??nl(`SC_DISABLE_SPEEDY`)??(typeof process<`u`&&!1)),il=`sc-keyframes-`,al={};function ol(e,...t){return Error(`An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#${e} for more information.${t.length>0?` Args: ${t.join(`, `)}`:``}`)}var sl=new Map,cl=new Map,ll=1,ul=e=>{if(sl.has(e))return sl.get(e);for(;cl.has(ll);)ll++;let t=ll++;return sl.set(e,t),cl.set(t,e),t},dl=e=>cl.get(e),fl=(e,t)=>{ll=t+1,sl.set(e,t),cl.set(t,e)},pl=Object.freeze([]),ml=Object.freeze({});function hl(e,t,n=ml){return e.theme!==n.theme&&e.theme||t||n.theme}var gl=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,_l=/(^-|-$)/g;function vl(e){return e.replace(gl,`-`).replace(_l,``)}var yl=/(a)(d)/gi,bl=e=>String.fromCharCode(e+(e>25?39:97));function xl(e){let t,n=``;for(t=Math.abs(e);t>52;t=t/52|0)n=bl(t%52)+n;return(bl(t%52)+n).replace(yl,`$1-$2`)}var Sl=5381,Cl=(e,t)=>{let n=t.length;for(;n;)e=33*e^t.charCodeAt(--n);return e},wl=e=>Cl(Sl,e);function Tl(e){return xl(wl(e)>>>0)}function El(e){return e.displayName||e.name||`Component`}function Dl(e){return typeof e==`string`&&!0}function Ol(e){return Dl(e)?`styled.${e}`:`Styled(${El(e)})`}var kl=Symbol.for(`react.memo`),Al=Symbol.for(`react.forward_ref`),jl={contextType:!0,defaultProps:!0,displayName:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,propTypes:!0,type:!0},Ml={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},Nl={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},Pl={[Al]:{$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},[kl]:Nl};function Fl(e){return(`type`in(t=e)&&t.type.$$typeof)===kl?Nl:`$$typeof`in e?Pl[e.$$typeof]:jl;var t}var Il=Object.defineProperty,Ll=Object.getOwnPropertyNames,Rl=Object.getOwnPropertySymbols,zl=Object.getOwnPropertyDescriptor,Bl=Object.getPrototypeOf,Vl=Object.prototype;function Hl(e,t,n){if(typeof t!=`string`){let r=Bl(t);r&&r!==Vl&&Hl(e,r,n);let i=Ll(t).concat(Rl(t)),a=Fl(e),o=Fl(t);for(let r=0;r<i.length;++r){let s=i[r];if(!(s in Ml||n&&n[s]||o&&s in o||a&&s in a)){let n=zl(t,s);try{Il(e,s,n)}catch{}}}}return e}function Ul(e){return typeof e==`function`}var Wl=Symbol.for(`react.forward_ref`);function Gl(e){return e!=null&&(typeof e==`object`||typeof e==`function`)&&e.$$typeof===Wl&&`styledComponentId`in e}function Kl(e,t){return e&&t?e+` `+t:e||t||``}function ql(e,t){return e.join(t||``)}function Jl(e){return typeof e==`object`&&!!e&&e.constructor.name===Object.name&&!(`props`in e&&e.$$typeof)}function Yl(e,t,n=!1){if(!n&&!Jl(e)&&!Array.isArray(e))return t;if(Array.isArray(t))for(let n=0;n<t.length;n++)e[n]=Yl(e[n],t[n]);else if(Jl(t))for(let n in t)e[n]=Yl(e[n],t[n]);return e}function Xl(e,t){Object.defineProperty(e,"toString",{value:t})}var Zl=class{constructor(e){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=e,this._cGroup=0,this._cIndex=0}indexOfGroup(e){if(e===this._cGroup)return this._cIndex;let t=this._cIndex;if(e>this._cGroup)for(let n=this._cGroup;n<e;n++)t+=this.groupSizes[n];else for(let n=this._cGroup-1;n>=e;n--)t-=this.groupSizes[n];return this._cGroup=e,this._cIndex=t,t}insertRules(e,t){if(e>=this.groupSizes.length){let t=this.groupSizes,n=t.length,r=n;for(;e>=r;)if(r<<=1,r<0)throw ol(16,`${e}`);this.groupSizes=new Uint32Array(r),this.groupSizes.set(t),this.length=r;for(let e=n;e<r;e++)this.groupSizes[e]=0}let n=this.indexOfGroup(e+1),r=0;for(let i=0,a=t.length;i<a;i++)this.tag.insertRule(n,t[i])&&(this.groupSizes[e]++,n++,r++);r>0&&this._cGroup>e&&(this._cIndex+=r)}clearGroup(e){if(e<this.length){let t=this.groupSizes[e],n=this.indexOfGroup(e),r=n+t;this.groupSizes[e]=0;for(let e=n;e<r;e++)this.tag.deleteRule(n);t>0&&this._cGroup>e&&(this._cIndex-=t)}}getGroup(e){let t=``;if(e>=this.length||this.groupSizes[e]===0)return t;let n=this.groupSizes[e],r=this.indexOfGroup(e),i=r+n;for(let e=r;e<i;e++)t+=this.tag.getRule(e)+el;return t}},Ql=`style[${Xc}][${Qc}="${$c}"]`,$l=RegExp(`^${Xc}\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)`),eu=e=>typeof ShadowRoot<`u`&&e instanceof ShadowRoot||`host`in e&&e.nodeType===11,tu=e=>{if(!e)return document;if(eu(e))return e;if(`getRootNode`in e){let t=e.getRootNode();if(eu(t))return t}return document},nu=(e,t,n)=>{let r=n.split(`,`),i;for(let n=0,a=r.length;n<a;n++)(i=r[n])&&e.registerName(t,i)},V=(e,t)=>{let n=(t.textContent??``).split(el),r=[];for(let t=0,i=n.length;t<i;t++){let i=n[t].trim();if(!i)continue;let a=i.match($l);if(a){let t=0|parseInt(a[1],10),n=a[2];t!==0&&(fl(n,t),nu(e,n,a[3]),e.getTag().insertRules(t,r)),r.length=0}else r.push(i)}},ru=e=>{let t=tu(e.options.target).querySelectorAll(Ql);for(let n=0,r=t.length;n<r;n++){let r=t[n];r&&r.getAttribute(Xc)!==Zc&&(V(e,r),r.parentNode&&r.parentNode.removeChild(r))}},iu=!1;function au(){if(!1!==iu)return iu;if(typeof document<`u`){let e=document.head.querySelector(`meta[property="csp-nonce"]`);if(e)return iu=e.nonce||e.getAttribute(`content`)||void 0;let t=document.head.querySelector(`meta[name="sc-nonce"]`);if(t)return iu=t.getAttribute(`content`)||void 0}return iu=typeof __webpack_nonce__<`u`?__webpack_nonce__:void 0}var ou=(e,t)=>{let n=document.head,r=e||n,i=document.createElement(`style`),a=(e=>{let t=Array.from(e.querySelectorAll(`style[${Xc}]`));return t[t.length-1]})(r),o=a===void 0?null:a.nextSibling;i.setAttribute(Xc,Zc),i.setAttribute(Qc,$c);let s=t||au();return s&&i.setAttribute(`nonce`,s),r.insertBefore(i,o),i},su=class{constructor(e,t){this.element=ou(e,t),this.element.appendChild(document.createTextNode(``)),this.sheet=(e=>{if(e.sheet)return e.sheet;let t=e.getRootNode().styleSheets??document.styleSheets;for(let n=0,r=t.length;n<r;n++){let r=t[n];if(r.ownerNode===e)return r}throw ol(17)})(this.element),this.length=0}insertRule(e,t){try{return this.sheet.insertRule(t,e),this.length++,!0}catch{return!1}}deleteRule(e){this.sheet.deleteRule(e),this.length--}getRule(e){let t=this.sheet.cssRules[e];return t&&t.cssText?t.cssText:``}},cu=class{constructor(e,t){this.element=ou(e,t),this.nodes=this.element.childNodes,this.length=0}insertRule(e,t){if(e<=this.length&&e>=0){let n=document.createTextNode(t);return this.element.insertBefore(n,this.nodes[e]||null),this.length++,!0}return!1}deleteRule(e){this.element.removeChild(this.nodes[e]),this.length--}getRule(e){return e<this.length?this.nodes[e].textContent:``}},lu=tl,uu={isServer:!tl,useCSSOMInjection:!rl},du=class e{static registerId(e){return ul(e)}constructor(e=ml,t={},n){this.options=Object.assign(Object.assign({},uu),e),this.gs=t,this.keyframeIds=new Set,this.names=new Map(n),this.server=!!e.isServer,!this.server&&tl&&lu&&(lu=!1,ru(this)),Xl(this,()=>(e=>{let t=e.getTag(),{length:n}=t,r=``;for(let i=0;i<n;i++){let n=dl(i);if(n===void 0)continue;let a=e.names.get(n);if(a===void 0||!a.size)continue;let o=t.getGroup(i);if(o.length===0)continue;let s=Xc+`.g`+i+`[id="`+n+`"]`,c=``;for(let e of a)e.length>0&&(c+=e+`,`);r+=o+s+`{content:"`+c+`"}/*!sc*/
`}return r})(this))}rehydrate(){!this.server&&tl&&ru(this)}reconstructWithOptions(t,n=!0){let r=new e(Object.assign(Object.assign({},this.options),t),this.gs,n&&this.names||void 0);return r.keyframeIds=new Set(this.keyframeIds),!this.server&&tl&&t.target!==this.options.target&&tu(this.options.target)!==tu(t.target)&&ru(r),r}allocateGSInstance(e){return this.gs[e]=(this.gs[e]||0)+1}getTag(){return this.tag||=(e=(({useCSSOMInjection:e,target:t,nonce:n})=>e?new su(t,n):new cu(t,n))(this.options),new Zl(e));var e}hasNameForId(e,t){var n;return(n=this.names.get(e)?.has(t))!=null&&n}registerName(e,t){ul(e),e.startsWith(il)&&this.keyframeIds.add(e);let n=this.names.get(e);n?n.add(t):this.names.set(e,new Set([t]))}insertRules(e,t,n){this.registerName(e,t),this.getTag().insertRules(ul(e),n)}clearNames(e){this.names.has(e)&&this.names.get(e).clear()}clearRules(e){this.getTag().clearGroup(ul(e)),this.clearNames(e)}clearTag(){this.tag=void 0}},fu=new WeakSet,pu={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexShrink:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,scale:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1};function mu(e,t){return t==null||typeof t==`boolean`||t===``?``:typeof t!=`number`||t===0||e in pu||e.startsWith(`--`)?String(t).trim():t+`px`}var hu=47;function gu(e){if(e.charCodeAt(0)===45&&e.charCodeAt(1)===45)return e;let t=``;for(let n=0;n<e.length;n++){let r=e.charCodeAt(n);t+=r>=65&&r<=90?`-`+String.fromCharCode(r+32):e[n]}return t.startsWith(`ms-`)?`-`+t:t}var _u=Symbol.for(`sc-keyframes`);function vu(e){return typeof e==`object`&&!!e&&_u in e}function yu(e){return Ul(e)&&!(e.prototype&&e.prototype.isReactComponent)}var bu=e=>e==null||!1===e||e===``,xu=Symbol.for(`react.client.reference`);function Su(e){return e.$$typeof===xu}function Cu(e,t){for(let n in e){let r=e[n];e.hasOwnProperty(n)&&!bu(r)&&(Array.isArray(r)&&fu.has(r)||Ul(r)?t.push(gu(n)+`:`,r,`;`):Jl(r)?(t.push(n+` {`),Cu(r,t),t.push(`}`)):t.push(gu(n)+`: `+mu(n,r)+`;`))}}function wu(e,t,n,r,i=[]){if(bu(e))return i;let a=typeof e;if(a===`string`)return i.push(e),i;if(a===`function`)return Su(e)?i:yu(e)&&t?wu(e(t),t,n,r,i):(i.push(e),i);if(Array.isArray(e)){for(let a=0;a<e.length;a++)wu(e[a],t,n,r,i);return i}return Gl(e)?(i.push(`.${e.styledComponentId}`),i):vu(e)?(n?(e.inject(n,r),i.push(e.getName(r))):i.push(e),i):Su(e)?i:Jl(e)&&e.toString===Object.prototype.toString?(Cu(e,i),i):(i.push(e.toString()),i)}var Tu=wl($c),Eu=class{constructor(e,t,n){this.rules=e,this.componentId=t,this.baseHash=Cl(Tu,t),this.baseStyle=n,du.registerId(t)}generateAndInjectStyles(e,t,n){let r=this.baseStyle?this.baseStyle.generateAndInjectStyles(e,t,n):``;{let i=``;for(let r=0;r<this.rules.length;r++){let a=this.rules[r];if(typeof a==`string`)i+=a;else if(a){if(yu(a)){let r=a(e);typeof r==`string`?i+=r:r!=null&&!1!==r&&(i+=ql(wu(r,e,t,n)))}else i+=ql(wu(a,e,t,n))}}if(i){this.dynamicNameCache||=new Map;let e=n.hash?n.hash+i:i,a=this.dynamicNameCache.get(e);if(!a){if(a=xl(Cl(Cl(this.baseHash,n.hash),i)>>>0),this.dynamicNameCache.size>=200){let e=this.dynamicNameCache.keys().next().value;e!==void 0&&this.dynamicNameCache.delete(e)}this.dynamicNameCache.set(e,a)}if(!t.hasNameForId(this.componentId,a)){let e=n(i,`.`+a,void 0,this.componentId);t.insertRules(this.componentId,a,e)}r=Kl(r,a)}}return r}},Du=/&/g;function Ou(e,t){let n=0;for(;--t>=0&&e.charCodeAt(t)===92;)n++;return!(1&~n)}function ku(e){let t=e.length,n=``,r=0,i=0,a=0,o=!1,s=!1;for(let c=0;c<t;c++){let l=e.charCodeAt(c);if(a!==0||o||l!==hu||e.charCodeAt(c+1)!==42){if(o)l===42&&e.charCodeAt(c+1)===hu&&(o=!1,c++);else if(l!==34&&l!==39||Ou(e,c)){if(a===0){if(l===123)i++;else if(l===125){if(i--,i<0){s=!0;let n=c+1;for(;n<t;){let t=e.charCodeAt(n);if(t===59||t===10)break;n++}n<t&&e.charCodeAt(n)===59&&n++,i=0,c=n-1,r=n;continue}i===0&&(n+=e.substring(r,c+1),r=c+1)}else l===59&&i===0&&(n+=e.substring(r,c+1),r=c+1)}}else a===0?a=l:a===l&&(a=0)}else o=!0,c++}return s||i!==0||a!==0?(r<t&&i===0&&a===0&&(n+=e.substring(r)),n):e}function Au(e,t){let n=t+` `,r=`,`+n;for(let i=0;i<e.length;i++){let a=e[i];if(a.type===`rule`){a.value=(n+a.value).replaceAll(`,`,r);let e=a.props,t=[];for(let r=0;r<e.length;r++)t[r]=n+e[r];a.props=t}Array.isArray(a.children)&&a.type!==`@keyframes`&&Au(a.children,t)}return e}function ju({options:e=ml,plugins:t=pl}=ml){let n,r,i,a=(e,t,i)=>i.startsWith(r)&&i.endsWith(r)&&i.replaceAll(r,``).length>0?`.${n}`:e,o=t.slice();o.push(e=>{e.type===`rule`&&e.value.includes(`&`)&&(i||=RegExp(`\\${r}\\b`,`g`),e.props[0]=e.props[0].replace(Du,r).replace(i,a))}),e.prefix&&o.push(Yc),o.push(Kc);let s=[],c=qc(o.concat(Jc(e=>s.push(e)))),l=(t,a=``,o=``,l=`&`)=>{n=l,r=a,i=void 0;let u=function(e){let t=e.indexOf(`//`)!==-1,n=e.indexOf(`}`)!==-1;if(!t&&!n)return e;if(!t)return ku(e);let r=e.length,i=``,a=0,o=0,s=0,c=0,l=0,u=!1;for(;o<r;){let t=e.charCodeAt(o);if(t!==34&&t!==39||Ou(e,o)){if(s===0){if(t===hu&&o+1<r&&e.charCodeAt(o+1)===42){for(o+=2;o+1<r&&(e.charCodeAt(o)!==42||e.charCodeAt(o+1)!==hu);)o++;o+=2}else if(t!==40){if(t!==41){if(c>0)o++;else if(t===42&&o+1<r&&e.charCodeAt(o+1)===hu)i+=e.substring(a,o),o+=2,a=o,u=!0;else if(t===hu&&o+1<r&&e.charCodeAt(o+1)===hu){for(i+=e.substring(a,o);o<r&&e.charCodeAt(o)!==10;)o++;a=o,u=!0}else t===123?l++:t===125&&l--,o++}else c>0&&c--,o++}else c++,o++}else o++}else s===0?s=t:s===t&&(s=0),o++}return u?(a<r&&(i+=e.substring(a)),l===0?i:ku(i)):l===0?e:ku(e)}(t),d=zc(o||a?o+` `+a+` { `+u+` }`:u);return e.namespace&&(d=Au(d,e.namespace)),s=[],Gc(d,c),s},u=e,d=Sl;for(let e=0;e<t.length;e++)t[e].name||ol(15),d=Cl(d,t[e].name);return u!=null&&u.namespace&&(d=Cl(d,u.namespace)),u!=null&&u.prefix&&(d=Cl(d,`p`)),l.hash=d===Sl?``:d.toString(),l}var Mu=new du,Nu=ju(),Pu=v.createContext({shouldForwardProp:void 0,styleSheet:Mu,stylis:Nu,stylisPlugins:void 0});Pu.Consumer;function Fu(){return v.useContext(Pu)}function Iu(e){let t=Fu(),{styleSheet:n}=t,r=v.useMemo(()=>{let t=n;return e.sheet?t=e.sheet:e.target?t=t.reconstructWithOptions(e.nonce===void 0?{target:e.target}:{target:e.target,nonce:e.nonce},!1):e.nonce!==void 0&&(t=t.reconstructWithOptions({nonce:e.nonce})),e.disableCSSOMInjection&&(t=t.reconstructWithOptions({useCSSOMInjection:!1})),t},[e.disableCSSOMInjection,e.nonce,e.sheet,e.target,n]),i=v.useMemo(()=>e.stylisPlugins===void 0&&e.namespace===void 0&&e.enableVendorPrefixes===void 0?t.stylis:ju({options:{namespace:e.namespace,prefix:e.enableVendorPrefixes},plugins:e.stylisPlugins??t.stylisPlugins}),[e.enableVendorPrefixes,e.namespace,e.stylisPlugins,t.stylis,t.stylisPlugins]),a=`shouldForwardProp`in e?e.shouldForwardProp:t.shouldForwardProp,o=e.stylisPlugins??t.stylisPlugins,s=v.useMemo(()=>({shouldForwardProp:a,styleSheet:r,stylis:i,stylisPlugins:o}),[a,r,i,o]);return v.createElement(Pu.Provider,{value:s},e.children)}var Lu=v.createContext(void 0);Lu.Consumer;function Ru(){let e=v.useContext(Lu);if(!e)throw ol(18);return e}function zu(e){let t=v.useContext(Lu),n=v.useMemo(()=>function(e,t){if(!e)throw ol(14);if(Ul(e))return e(t);if(Array.isArray(e)||typeof e!=`object`)throw ol(8);return t?Object.assign(Object.assign({},t),e):e}(e.theme,t),[e.theme,t]);return e.children?v.createElement(Lu.Provider,{value:n},e.children):null}var Bu=Object.prototype.hasOwnProperty,Vu={};function H(e,t){let n=typeof e==`string`?vl(e):`sc`;Vu[n]=(Vu[n]||0)+1;let r=n+`-`+Tl($c+n+Vu[n]);return t?t+`-`+r:r}function Hu(e,t,n){let r=Gl(e),i=e,a=!Dl(e),{attrs:o=pl,componentId:s=H(t.displayName,t.parentComponentId),displayName:c=Ol(e)}=t,l=t.displayName&&t.componentId?vl(t.displayName)+`-`+t.componentId:t.componentId||s,u=r&&i.attrs?i.attrs.concat(o).filter(Boolean):o,{shouldForwardProp:d}=t;if(r&&i.shouldForwardProp){let e=i.shouldForwardProp;if(t.shouldForwardProp){let n=t.shouldForwardProp;d=(t,r)=>e(t,r)&&n(t,r)}else d=e}let f=new Eu(n,l,r?i.componentStyle:void 0);function p(e,t){return function(e,t,n){let{attrs:r,componentStyle:i,defaultProps:a,foldedComponentIds:o,styledComponentId:s,target:c}=e,l=v.useContext(Lu),u=Fu(),d=e.shouldForwardProp||u.shouldForwardProp,f=hl(t,l,a)||ml,p,m;{let e=v.useRef(null),n=e.current;if(n!==null&&n[1]===f&&n[2]===u.styleSheet&&n[3]===u.stylis&&n[7]===i&&function(e,t,n){let r=e,i=t,a=0;for(let e in i)if(Bu.call(i,e)&&(a++,r[e]!==i[e]))return!1;return a===n}(n[0],t,n[4]))p=n[5],m=n[6];else{p=function(e,t,n){let r=Object.assign(Object.assign({},t),{className:void 0,theme:n}),i=e.length>1;for(let n=0;n<e.length;n++){let a=e[n],o=Ul(a)?a(i?Object.assign({},r):r):a;for(let e in o)e===`className`?r.className=Kl(r.className,o[e]):e===`style`?r.style=Object.assign(Object.assign({},r.style),o[e]):e in t&&t[e]===void 0||(r[e]=o[e])}return`className`in t&&typeof t.className==`string`&&(r.className=Kl(r.className,t.className)),r}(r,t,f),m=i.generateAndInjectStyles(p,u.styleSheet,u.stylis);let n=0;for(let e in t)Bu.call(t,e)&&n++;e.current=[t,f,u.styleSheet,u.stylis,n,p,m,i]}}let h=p.as||c,g=function(e,t,n,r){let i={};for(let a in e)e[a]===void 0||a[0]===`$`||a===`as`||a===`theme`&&e.theme===n||(a===`forwardedAs`?i.as=e.forwardedAs:r&&!r(a,t)||(i[a]=e[a]));return i}(p,h,f,d),_=Kl(o,s);return m&&(_+=` `+m),p.className&&(_+=` `+p.className),g[Dl(h)&&h.includes(`-`)?`class`:`className`]=_,n&&(g.ref=n),(0,v.createElement)(h,g)}(m,e,t)}p.displayName=c;let m=v.forwardRef(p);return m.attrs=u,m.componentStyle=f,m.displayName=c,m.shouldForwardProp=d,m.foldedComponentIds=r?Kl(i.foldedComponentIds,i.styledComponentId):``,m.styledComponentId=l,m.target=r?i.target:e,Object.defineProperty(m,"defaultProps",{get(){return this._foldedDefaultProps},set(e){this._foldedDefaultProps=r?function(e,...t){for(let n of t)Yl(e,n,!0);return e}({},i.defaultProps,e):e}}),Xl(m,()=>`.${m.styledComponentId}`),a&&Hl(m,e,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0}),m}var Uu=new Set(`a.abbr.address.area.article.aside.audio.b.bdi.bdo.blockquote.body.button.br.canvas.caption.cite.code.col.colgroup.data.datalist.dd.del.details.dfn.dialog.div.dl.dt.em.embed.fieldset.figcaption.figure.footer.form.h1.h2.h3.h4.h5.h6.header.hgroup.hr.html.i.iframe.img.input.ins.kbd.label.legend.li.main.map.mark.menu.meter.nav.object.ol.optgroup.option.output.p.picture.pre.progress.q.rp.rt.ruby.s.samp.search.section.select.slot.small.span.strong.sub.summary.sup.table.tbody.td.template.textarea.tfoot.th.thead.time.tr.u.ul.var.video.wbr.circle.clipPath.defs.ellipse.feBlend.feColorMatrix.feComponentTransfer.feComposite.feConvolveMatrix.feDiffuseLighting.feDisplacementMap.feDistantLight.feDropShadow.feFlood.feFuncA.feFuncB.feFuncG.feFuncR.feGaussianBlur.feImage.feMerge.feMergeNode.feMorphology.feOffset.fePointLight.feSpecularLighting.feSpotLight.feTile.feTurbulence.filter.foreignObject.g.image.line.linearGradient.marker.mask.path.pattern.polygon.polyline.radialGradient.rect.stop.svg.switch.symbol.text.textPath.tspan.use`.split(`.`));function Wu(e,t){let n=[e[0]];for(let r=0,i=t.length;r<i;r+=1)n.push(t[r],e[r+1]);return n}var Gu=e=>(fu.add(e),e);function U(e,...t){if(Ul(e)||Jl(e))return Gu(wu(Wu(pl,[e,...t])));let n=e;return t.length===0&&n.length===1&&typeof n[0]==`string`?wu(n):Gu(wu(Wu(n,t)))}function Ku(e,t,n=ml){if(!t)throw ol(1,t);let r=(r,...i)=>e(t,n,U(r,...i));return r.attrs=r=>Ku(e,t,Object.assign(Object.assign({},n),{attrs:Array.prototype.concat(n.attrs,r).filter(Boolean)})),r.withConfig=r=>Ku(e,t,Object.assign(Object.assign({},n),r)),r}var qu=e=>Ku(Hu,e),W=qu;Uu.forEach(e=>{W[e]=qu(e)});var Ju=class{constructor(e,t){this.instanceRules=new Map,this.rules=e,this.componentId=t,this.isStatic=function(e){for(let t=0;t<e.length;t+=1){let n=e[t];if(Ul(n)&&!Gl(n))return!1}return!0}(e),du.registerId(this.componentId)}removeStyles(e,t){this.instanceRules.delete(e),this.rebuildGroup(t)}renderStyles(e,t,n,r){let i=this.componentId;if(this.isStatic){if(n.hasNameForId(i,i+e))this.instanceRules.has(e)||this.computeRules(e,t,n,r);else{let a=this.computeRules(e,t,n,r);n.insertRules(i,a.name,a.rules)}return}let a=this.instanceRules.get(e);if(this.computeRules(e,t,n,r),!n.server&&a){let t=a.rules,n=this.instanceRules.get(e).rules;if(t.length===n.length){let e=!0;for(let r=0;r<t.length;r++)if(t[r]!==n[r]){e=!1;break}if(e)return}}this.rebuildGroup(n)}computeRules(e,t,n,r){let i=ql(wu(this.rules,t,n,r)),a={name:this.componentId+e,rules:r(i,``)};return this.instanceRules.set(e,a),a}rebuildGroup(e){let t=this.componentId;e.clearRules(t);for(let n of this.instanceRules.values())e.insertRules(t,n.name,n.rules)}};function Yu(e,...t){let n=U(e,...t),r=`sc-global-${Tl(JSON.stringify(n))}`,i=new Ju(n,r),a=e=>{let t=Fu(),n=v.useContext(Lu),a;{let e=v.useRef(null);e.current===null&&(e.current=t.styleSheet.allocateGSInstance(r)),a=e.current}t.styleSheet.server&&o(a,e,t.styleSheet,n,t.stylis);{let s=i.isStatic?[a,t.styleSheet,i]:[a,e,t.styleSheet,n,t.stylis,i],c=v.useRef(i);v.useLayoutEffect(()=>{t.styleSheet.server||(c.current!==i&&(t.styleSheet.clearRules(r),c.current=i),o(a,e,t.styleSheet,n,t.stylis))},s),v.useLayoutEffect(()=>()=>{t.styleSheet.server||i.removeStyles(a,t.styleSheet)},[a,t.styleSheet,i])}return t.styleSheet.server&&i.instanceRules.delete(a),null};function o(e,t,n,r,o){if(i.isStatic)i.renderStyles(e,al,n,o);else{let s=Object.assign(Object.assign({},t),{theme:hl(t,r,a.defaultProps)});i.renderStyles(e,s,n,o)}}return v.memo(a)}var Xu,Zu=class{constructor(e,t){this[Xu]=!0,this.inject=(e,t=Nu)=>{let n=this.getName(t);if(!e.hasNameForId(this.id,n)){let r=t(this.rules,n,`@keyframes`);e.insertRules(this.id,n,r)}},this.name=e,this.id=il+e,this.rules=t,ul(this.id),Xl(this,()=>{throw ol(12,String(this.name))})}getName(e=Nu){return e.hash?this.name+xl(e.hash>>>0):this.name}};function Qu(e,...t){let n=ql(U(e,...t));return new Zu(Tl(n),n)}Xu=_u,`${Xc}`,`${Xc}`,`${Xc}`;var G=e=>`calc(var(--u) * ${e})`,$u={font:`var(--ha-font-family-body, Roboto, Noto, sans-serif)`,card:{border:`0.5px solid rgba(255, 255, 255, 0.05)`,on:`rgba(255, 255, 255, 0.018)`},bubble:{background:`rgba(255, 255, 255, 0.05)`,on:`rgba(255, 255, 255, 0.03)`,inset:`rgba(255, 255, 255, 0.035)`,header:`rgba(255, 255, 255, 0.1)`,icon:`rgba(255, 255, 255, 0.08)`,hover:`rgba(255, 255, 255, 0.09)`,pressed:`rgba(255, 255, 255, 0.14)`},text:{primary:`rgba(255, 255, 255, 0.92)`,secondary:`rgba(255, 255, 255, 0.62)`,muted:`rgba(255, 255, 255, 0.4)`},colors:{temperature:`#03a9f4`,humidity:`#00ff70`,alert:`#ff4d4d`,accent:`#4aa8e0`,warm:`#ffb43c`,calendar:`#03a9f4`,cover:`#b388ff`,success:`#5fce7e`},popup:{backdrop:`rgba(0, 0, 0, 0.62)`}},ed=Yu`
  .bwd-connect {
    width: 100%;
    height: 100%;
  }

  .bwd-root {
    font-family: ${({theme:e})=>e.font};
    color: ${({theme:e})=>e.text.primary};
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    -webkit-tap-highlight-color: transparent;
    user-select: none;
    -webkit-user-select: none;
  }

  :where(.bwd-root) *,
  :where(.bwd-root) *::before,
  :where(.bwd-root) *::after {
    box-sizing: border-box;
  }

  :where(.bwd-root p) {
    margin: 0;
  }

  :where(.bwd-root img) {
    user-select: none;
    pointer-events: none;
  }

  :where(.bwd-root button) {
    font: inherit;
    color: inherit;
    background: none;
    border: none;
    padding: 0;
    margin: 0;
    cursor: pointer;
    text-align: inherit;
  }

  :where(.bwd-root input, .bwd-root select, .bwd-root textarea) {
    font: inherit;
    color: inherit;
    user-select: text;
    -webkit-user-select: text;
  }

  .bwd-root ::-webkit-scrollbar {
    width: 6px;
    height: 6px;
  }

  .bwd-root ::-webkit-scrollbar-thumb {
    background: rgba(255, 255, 255, 0.15);
    border-radius: 3px;
  }
`,td={loading:`Connecting to Home Assistant…`,connection_lost:`No connection to Home Assistant`,connection_lost_hint:`Home Assistant may be restarting. The dashboard reconnects by itself as soon as it is back.`,connection_lost_since:`Gone for {time}`,not_loaded:`Better Wall Dashboard is not set up. Add the integration under Settings → Devices & services.`,temperature:`Temperature`,humidity:`Humidity`,open_openings:`Open windows and doors`,openings:`Windows and doors`,none_open:`Everything is closed`,open:`Open`,closed:`Closed`,travel_time:`Travel time to work`,travel_work_zone:`Work, as a zone`,travel_work_zone_hint:`Where the map’s route ends. Only the map: the minutes are the sensor’s. Empty: the sensor’s own destination.`,travel_work_address:`Or work’s address`,travel_work_address_hint:`Used when no zone is set. Stored in Home Assistant with the dashboard.`,quick_actions:`Quick actions`,on:`On`,off:`Off`,home:`Home`,away:`Away`,unavailable:`Unavailable`,no_events:`No upcoming events`,all_day:`All day`,tomorrow:`Tomorrow`,happening_now:`Now`,event_day:`Day {index} of {count}`,calendar:`Calendar`,weather:`Weather`,forecast_daily:`Next days`,no_forecast:`This weather service provides no forecast.`,feels_like:`Feels like`,wind:`Wind`,rain:`Rain`,uv_index:`UV index`,pressure:`Pressure`,moon:`Moon`,moon_lit:`{percent} % lit`,moon_next_full:`Full moon {date}`,moon_new_moon:`New moon`,moon_waxing_crescent:`Waxing crescent`,moon_first_quarter:`First quarter`,moon_waxing_gibbous:`Waxing gibbous`,moon_full_moon:`Full moon`,moon_waning_gibbous:`Waning gibbous`,moon_last_quarter:`Last quarter`,moon_waning_crescent:`Waning crescent`,pressure_low:`Lowest in 3 days`,lightning_nearby:`Lightning nearby`,pin_title:`Enter PIN`,pin:`PIN for Home Assistant's sidebar`,pin_hint:`4 to 8 digits. Asked for before a long press on the clock opens Home Assistant's sidebar on the tablet. Empty: no PIN.`,pin_wrong:`Wrong PIN`,pin_locked:`Too many attempts. Try again in {seconds} s.`,pin_delete:`Delete`,pin_confirm:`Confirm`,lightning_within:`Within {range} {unit}`,thunderstorm:`Thunderstorm nearby`,lightning_none:`None`,lightning_count:`{count} strikes`,lightning_nearest:`Nearest strike`,lightning_direction:`Direction`,lightning_last:`Last strike`,pressure_high:`Highest in 3 days`,sunrise:`Sunrise`,sunset:`Sunset`,high_today:`Highest today`,low_today:`Lowest today`,today:`Today`,notifications:`Notifications`,no_notifications:`No new notifications`,dismiss:`Dismiss`,dismiss_all:`Dismiss all`,settings:`Settings`,system:`System`,guest_wifi:`Guest Wi-Fi`,guest_wifi_hint:`Scan with your phone camera to join.`,guest_wifi_missing:`No guest network is configured for this dashboard.`,network:`Network`,password:`Password`,signal:`Signal`,absence_mode:`Absence mode`,guest_mode:`Guest mode`,night_mode:`Night mode`,history:`History`,last_hours:`Last {hours} hours`,lowest:`Lowest`,highest:`Highest`,average:`Average`,route:`Route`,via:`via`,traffic_delay:`+{minutes} min traffic`,map_blocked:`Google blocked the map for this key. Add the Maps JavaScript API to the key’s API restrictions in the Google Cloud Console.`,map_key_error:`The map could not be loaded with this key. Enable the Maps JavaScript API and the Routes API for it in the Google Cloud Console.`,no_map:`Add a Google Maps API key (or an embed URL) in the editor to see the routes here.`,close:`Close`,reload:`Reload the dashboard`,app_error:`Something went wrong drawing this page.`,app_error_reloading:`Something went wrong drawing the dashboard. It reloads by itself in a moment.`,reload_hint:`Fetches the newest version, past the app’s cache.`,update_available:`A new version of the dashboard is installed.`,update_available_tap:`New version installed – tap to load it`,update:`Update`,kiosk:`Hide the Home Assistant sidebar`,edit_dashboard:`Edit dashboard`,edit_elsewhere:`Opens the editor in its own panel`,preview:`Preview`,portrait:`Portrait`,landscape:`Landscape`,version:`Version`,dashboard:`Dashboard`,empty_section:`Empty section`,empty_popup:`Nothing here yet. Add tiles to this button in the editor.`,not_found:`Entity not found`,editor_title:`Dashboard editor`,save:`Save`,saved:`Saved`,saving:`Saving…`,discard:`Discard changes`,unsaved:`Unsaved changes`,add:`Add`,remove:`Remove`,move_up:`Move up`,move_down:`Move down`,duplicate:`Duplicate`,new_dashboard:`New dashboard`,delete_dashboard:`Delete dashboard`,confirm_delete:`Delete “{name}”? Users assigned to it will see the default dashboard.`,tab_general:`General`,tab_sidebar:`Sidebar`,tab_pages:`Pages`,tab_buttons:`Buttons`,tab_users:`Users`,tab_json:`JSON`,name:`Name`,icon:`Icon`,entity:`Entity`,entities:`Entities`,background_image:`Or a picture’s address`,background_image_hint:`For example /local/wall.jpg. Empty uses the built-in image.`,background_dim:`Darken background`,background_mode:`Background shows`,background_mode_image:`A picture`,background_mode_color:`A plain colour`,background_color:`Colour`,background_blur:`Blur background`,status_icons:`Status icons`,wifi_signal:`Wi-Fi signal sensor of this tablet`,wifi_signal_hint:`The companion app’s “Wi-Fi signal strength” sensor.`,guest_qr_image:`QR code image entity`,guest_qr_image_hint:`The UniFi integration provides one per network. Used instead of the fields below when set.`,security:`Security`,hidden_network:`Hidden network`,room_climate:`Room climate`,hours:`Hours of history`,persons:`People`,travel_sensor:`Travel time sensor`,map_url:`Google Maps embed URL`,map_url_hint:`In Google Maps: plan the route, then Share → Embed a map, and copy the src of the iframe.`,maps_api_key:`Google Maps API key`,maps_api_key_hint:`Needs the Maps JavaScript API and the Routes API. The routes are then drawn on the dashboard’s own map, without Google’s overlays.`,calendars:`Calendars`,days:`Days`,weather_entity:`Weather entity`,outdoor_temperature:`Outdoor temperature sensor`,notifications_enabled:`Show notifications`,notifications_prefix:`ID prefix`,notifications_prefix_hint:`Only notifications whose ID starts with one of these: for example wall_all_ for every tablet and wall_living_ for this one. None shows every persistent notification.`,system_stats:`System statistics`,page:`Page`,add_page:`Add page`,column_split:`Column split (%)`,row_split:`Row split (%)`,section:`Section`,columns:`Columns`,rows:`Rows`,square_cells:`Square cells`,status_entities:`Header readings (up to two)`,status_icon_hint:`Empty: the entity’s own.`,add_status:`Add reading`,tiles:`Tiles`,pick_tile:`Add a tile`,pick_tile_hint:`Choose what it is; you set it up next.`,add_tile:`Add tile`,type:`Type`,width:`Width`,height:`Height`,button:`Button`,add_button:`Add button`,user:`User`,assigned_dashboard:`Dashboard`,start_page:`Opens on start`,admin:`Admin`,inactive:`Inactive`,json_hint:`The whole dashboard as stored. Invalid parts are dropped when saved.`,json_invalid:`This is not valid JSON.`,apply:`Apply`,tile_entity:`Entity button`,tile_entity_hint:`Switches, toggles, runs or presses one thing with a tap. A light opens up close on a double tap.`,tile_sensor:`Sensor with graph`,tile_sensor_hint:`A reading with its last day as a graph; a tap shows the history.`,tile_cover:`Cover`,tile_cover_hint:`A shutter or blind: up, stop, down, favourite positions, and its position on a double tap.`,tile_adaptive_cover:`Adaptive Cover Pro`,tile_adaptive_cover_hint:`A cover Adaptive Cover Pro steers: what steers it, and on a double tap why.`,acp_badge_auto:`Auto`,acp_badge_manual:`Manual`,acp_badge_weather:`Weather safety`,acp_badge_glare_zone:`Glare`,acp_badge_climate:`Climate`,acp_badge_cloud:`Cloudy`,acp_badge_custom_position:`Custom`,acp_badge_solar:`Solar tracking`,acp_badge_motion:`Nobody here`,acp_badge_off:`Off`,acp_badge_off_schedule:`Off schedule`,acp_reset_manual:`Back to automatic`,acp_target:`Target`,acp_actual:`Now`,acp_control:`Control`,acp_sun:`Sun`,acp_sun_on_window:`On the window`,acp_sun_off_window:`Not on the window`,acp_sun_away:`Sun not on the window: nothing to shade yet`,acp_switches:`Control`,acp_enabled:`Integration`,acp_automatic:`Automatic control`,acp_climate_mode:`Climate mode`,acp_motion_control:`Occupancy`,acp_decision:`Decision`,acp_details:`Details`,acp_manual_until:`Manual until`,acp_motion:`Occupancy`,acp_sun_window:`Sun on the window`,acp_last_action:`Last move`,acp_climate:`Climate`,acp_indoor:`Indoor`,acp_outdoor:`Outdoor`,acp_forecast:`Today’s plan`,acp_history:`Last 24 hours`,acp_history_target:`Target`,acp_history_actual:`Actual`,acp_window:`Window`,acp_sun_today:`Sun today`,acp_activity:`Activity`,acp_event_buffer:`Advanced — event buffer`,acp_no_activity:`Nothing happened in the last 24 hours.`,acp_events_count:`{shown} of {all} events`,acp_buffer_size:`Buffer size {size}`,acp_copy_diagnostics:`Copy diagnostics`,acp_copied:`Copied`,acp_filter_events:`Filter events…`,loading_short:`Loading…`,acp_tip_fov:`What the window sees: {from} to {to}`,acp_tip_blind:`Blind spot: {from} to {to}`,acp_tip_path:`The sun’s path today`,acp_tip_window:`The window faces {bearing}`,acp_tip_sun:`The sun now: {azimuth}, {elevation} high`,compass_n:`N`,compass_e:`E`,compass_s:`S`,compass_w:`W`,acp_status_active:`Active`,acp_status_calibrating:`Calibrating`,acp_status_outside_time_window:`Outside the schedule`,acp_status_position_delta_too_small:`Change too small`,acp_status_time_delta_too_small:`Waiting between moves`,acp_status_manual_override:`Held by hand`,acp_status_automatic_control_off:`Automatic control off`,acp_status_sun_not_visible:`Sun not on the window`,acp_status_weather_override_active:`Weather override`,acp_status_motion_timeout:`Nobody here`,acp_motion_not_configured:`Not set up`,acp_motion_motion_detected:`Someone here`,acp_motion_timeout_pending:`Leaving soon`,acp_motion_no_motion:`Nobody here`,acp_motion_holding:`Holding`,acp_motion_waiting_for_data:`Waiting for data`,acp_climate_summer_mode:`Summer`,acp_climate_winter_mode:`Winter`,acp_climate_intermediate:`In between`,acp_handler_weather:`Weather`,acp_handler_manual_override:`Manual`,acp_handler_custom_position:`Custom position`,acp_handler_motion_timeout:`Occupancy`,acp_handler_cloud_suppression:`Clouds`,acp_handler_climate:`Climate`,acp_handler_glare_zone:`Glare`,acp_handler_solar:`Sun`,acp_handler_default:`Default`,acp_decides:`decides`,acp_would:`would be {position}`,cover_open:`Open`,cover_closed:`Closed`,cover_opening:`Opening`,cover_closing:`Closing`,cover_up:`Up`,cover_stop:`Stop`,cover_down:`Down`,cover_position:`Position`,cover_tilt:`Tilt`,cover_active_when:`Shown as active`,cover_active_when_hint:`When the tile is lit: while light comes in, or while the cover is down.`,cover_active_open:`When open`,cover_active_closed:`When closed`,cover_active_never:`Never`,cover_stop_only_moving:`Stop only while moving`,cover_presets:`Positions`,cover_presets_hint:`Up to four, 0 to 100 %: a row of buttons under the controls where the tile has room, and in its details.`,cover_stop_only_moving_hint:`For covers that report when they move. One that does not would never show it.`,brightness:`Brightness`,light_power:`On / off`,light_color:`Colour`,light_temperature:`Colour temperature`,light_members:`Lights`,light_hide_presets:`Hide colour presets`,light_hide_presets_hint:`In the light’s details, opened with a double tap on the tile.`,tile_better_lighting:`Better Lighting room`,tile_better_lighting_hint:`A Better Lighting room: its light, its scenes, and what switched it.`,bl_presence:`Presence detected`,bl_nobody:`Nobody here`,bl_night:`Night mode`,bl_simulating:`Simulating presence`,bl_by_hand:`On by hand`,bl_automatic:`On automatically`,bl_switching_off:`Switching off`,bl_back_to_adaptive:`Back to adaptive`,bl_scenes:`Scenes`,bl_previous_scene:`Previous scene`,bl_next_scene:`Next scene`,bl_shown_scenes:`Scenes in the list`,bl_shown_scenes_hint:`Those switched off are left out of the list and skipped by the arrows.`,bl_button_entity:`Extra button`,bl_button_entity_hint:`Any entity, as one more button beside the room: a scene, a script, a switch.`,bl_button_icon:`Extra button icon`,options_json:`Options (JSON)`,nav_status:`Status & Wi-Fi`,nav_dashboards:`Dashboards`,nav_house:`Home`,menu:`Menu`,editor_menu:`Editor menu`,more:`More`,edit_json:`Edit as JSON`,device:`Device`,background:`Background`,security_heading:`Tablet security`,not_set:`Not set`,name_hint:`Empty uses the entity’s own name.`,empty_list:`Nothing here yet.`,empty_tiles:`No tiles yet. Add the first one below.`,add_quick_action:`Add quick action`,rules:`Show only when`,rules_hint:`All of these at once. Without any, it always shows.`,rules_count:`{count} rules`,rules_one:`1 rule`,add_rule:`Add rule`,rule_type:`Rule`,rule_state:`An entity is in a state`,rule_numeric:`A value is above or below`,rule_time:`A time of day`,rule_sun:`Day or night`,rule_home:`Somebody home`,rule_state_value:`State`,rule_state_value_hint:`As Home Assistant has it: on, off, home, playing …`,rule_not:`Any state but this one`,rule_above:`Above`,rule_below:`Below`,rule_after:`From`,rule_before:`Until`,rule_before_hint:`Earlier than the start runs through midnight.`,rule_day:`By day`,rule_night:`At night`,rule_anyone:`Somebody is home`,rule_nobody:`Nobody is home`,add_statistic:`Add statistic`,status_icons_hint:`Modes shown at the top of the sidebar, left of the Wi-Fi icon, each only while it is on: a helper, a switch or a binary sensor.`,open_network:`Open (no password)`,openings_hint:`Windows, doors, covers and locks. The sidebar counts the open ones.`,openings_hide_when_closed:`Only while something is open`,openings_hide_when_closed_hint:`The row leaves the sidebar while every window and door is shut.`,openings_only_open:`List only what is open`,openings_only_open_hint:`The popup leaves out what is shut.`,travel_name_hint:`Empty shows “Travel time to work”.`,map:`Map`,calendar_days_hint:`How many days with events the sidebar shows. It looks two weeks ahead.`,outdoor_temperature_hint:`Shown instead of the forecast’s temperature when set.`,lead_general:`The dashboard’s name, its background and the PIN guarding the tablet.`,lead_status:`The icons at the top of the sidebar, and the guest Wi-Fi they open.`,lead_climate:`The two graphs under the clock.`,lead_persons:`Who is home, two to a row.`,lead_openings:`Open windows and doors, counted in one row.`,lead_batteries:`Every battery in the house, found by itself, and which are running out.`,lead_travel:`The travel time row, and the map it opens.`,lead_quick:`One tap switches: one to a row up to three, two to a row from four.`,lead_calendar:`The upcoming events in the sidebar.`,lead_weather:`The weather in the sidebar’s footer, and the forecast it opens.`,lead_notifications:`The buttons in the sidebar’s footer: Home Assistant’s notifications behind the bell, and the settings.`,lead_system:`Readings shown in the settings popup.`,lead_pages:`The pages swipe in this order.`,lead_page:`How the page is divided, and the section in each cell.`,lead_section:`A section’s header, its grid, and the tiles in it.`,lead_buttons:`Up to five buttons along the bottom, each opening a popup of tiles.`,lead_button:`How the button looks in the bar, and the tiles in its popup.`,lead_users:`Which dashboard each user sees, full screen or not, and whose Home Assistant opens on it. Saved straight away.`,page_n:`Page {n}`,section_n:`Section {n}`,button_n:`Button {n}`,cell_n:`Cell {n}`,no_sections:`No sections yet`,layout:`Layout`,sections:`Sections`,sections_hint:`{cells} cells, filled row by row.`,split_hint:`Percentages, up to three, e.g. 75, 25.`,add_section:`Add section`,tiles_count:`{count} tiles`,section_header:`Header`,grid:`Grid`,square_cells_hint:`The same square cells in every section, so tiles line up across the page.`,button_columns_hint:`Columns of the popup’s grid.`,kiosk_user_hint:`Without Home Assistant’s sidebar and header.`,start_page_hint:`Home Assistant opens on this dashboard for this user.`,about:`About`,about_blurb:`A full-screen dashboard for wall tablets, served by its own integration and set up here.`,about_version:`Integration`,about_page:`This page`,about_repo:`Documentation`,about_issues:`Report a problem`,clock:`Clock`,clock_style:`Style`,clock_digital:`Digital`,clock_analog:`Analog`,clock_seconds:`Show seconds`,lead_clock:`The time at the top of the sidebar. A long press on it opens Home Assistant’s sidebar.`,settings_enabled:`Show the settings button`,settings_enabled_hint:`The cog in the sidebar’s footer. Hidden, the tablet is reloaded from the editor instead.`,sidebar_only:`Only this dashboard in Home Assistant’s sidebar`,sidebar_only_hint:`Hides every other entry and the notifications from this user’s sidebar; the profile stays. Panels added later are hidden too.`,reload_tablets:`Reload tablets showing it`,tablets_reloaded:`Reloaded on {count} tablet(s) showing this dashboard.`,cancel:`Cancel`,delete:`Delete`,discard_title:`Discard unsaved changes?`,discard_text:`What was changed since the last save is lost.`,delete_title:`Delete “{name}”?`,add_status_icon:`Add status icon`,wifi_heading:`Wi-Fi`,background_media:`Background picture`,background_media_hint:`From Home Assistant’s media library. Empty uses the built-in picture.`,tile_media:`Media player`,tile_media_hint:`What plays, with its art, power, volume and controls; on a double tap the whole system and the room.`,media_power:`Switch on or off`,media_volume:`Volume`,media_volume_up:`Louder`,media_volume_down:`Quieter`,media_mute:`Mute`,media_muted:`Muted`,media_play:`Play`,media_pause:`Pause`,media_previous:`Previous`,media_next:`Next`,media_stop:`Stop`,media_shuffle:`Shuffle`,media_repeat:`Repeat`,media_nothing:`Nothing playing`,media_current_source:`Current source`,media_now_playing:`Now playing`,media_audio_format:`Audio format`,media_sound_mode:`Sound mode`,media_decoder:`Decoder`,media_input_signal:`Input signal`,media_source_channels:`Source channels`,media_sample_rate:`Sample rate`,media_switches:`Outlets`,media_night:`Night mode`,media_speakers:`Speakers`,speaker_active:`Playing`,speaker_silent:`Silent`,speaker_unknown:`Unknown`,speaker_unpowered:`Switched off`,speaker_FL:`Front left`,speaker_FR:`Front right`,speaker_C:`Centre`,speaker_SL:`Surround left`,speaker_SR:`Surround right`,speaker_SBL:`Surround back left`,speaker_SBR:`Surround back right`,speaker_FHL:`Front height left`,speaker_FHR:`Front height right`,speaker_TML:`Top middle left`,speaker_TMR:`Top middle right`,speaker_RHL:`Rear height left`,speaker_RHR:`Rear height right`,speaker_SW1:`Subwoofer 1 (front)`,speaker_SW2:`Subwoofer 2 (front)`,speaker_SW3:`Subwoofer 3 (rear)`,speaker_SW4:`Subwoofer 4 (rear)`,media_players:`Further players`,media_players_hint:`What plays through it, e.g. the streaming box and the TV. The tile shows whichever of them and the main player has the most going on; on a tie, the earlier.`,media_power_entity:`Power button switches`,media_power_entity_hint:`Empty: the main player.`,media_volume_entity:`Volume of`,media_volume_entity_hint:`The player whose volume is shown and changed. Empty: the main player.`,media_volume_unit:`Volume in`,media_volume_auto:`Automatic (dB for a Denon receiver)`,media_volume_db:`Decibels`,media_volume_percent:`Percent`,media_presets:`Source presets`,media_presets_hint:`Shown in the details: one tap switches to the source.`,add_media_preset:`Add preset`,media_preset_kind:`Does`,media_preset_source:`Choose an input`,media_preset_app:`Open an app`,media_preset_run:`Run a script or scene`,media_preset_value:`Input`,media_preset_app_id:`App`,media_preset_app_hint:`The app’s package or id, e.g. com.google.android.youtube.tv.`,media_switches_title:`Heading of the outlets`,media_switches_hint:`Outlets to switch in the details, e.g. the subwoofers’.`,add_media_switch:`Add outlet`,media_switch_subs:`Powers the subwoofers`,media_switch_subs_hint:`Drawn switched off in the room while this is off.`,media_devices:`Devices`,media_devices_hint:`Their power and what they show, in the details.`,add_media_device:`Add device`,media_device_info:`What it shows`,media_device_info_hint:`A sensor, e.g. “4K HDR”. Empty: its input.`,media_night_entity:`Night mode`,media_night_entity_hint:`A switch, input boolean or script that quietens the system.`,media_night_text:`Night mode’s description`,media_sound_heading:`Sound`,media_mode_entity:`Sound mode from`,media_mode_entity_hint:`Empty: the volume player’s own, or Denon’s sensor where the HACS integration provides one.`,media_format_entity:`Source channels from`,media_format_entity_hint:`A sensor like “3/2/.1” or “5.1”. Found by itself for Denon’s HACS integration.`,media_layout:`Speakers in the room`,media_layout_hint:`Drawn in the details, lit by what the receiver plays.`,media_layout_bed:`At ear height`,media_layout_subs:`Subwoofers`,media_layout_heights:`Height speakers`,media_sofa:`Sofa`,media_sofa_none:`None`,media_sofa_straight:`Straight`,media_sofa_l_left:`L-shaped, chaise on the left`,media_sofa_l_right:`L-shaped, chaise on the right`,media_view_reset:`Back to the first view`,media_audio_info:`Audio`,media_listener:`Show a listener`,media_walls:`Show the walls`,media_screen:`On the screen`,media_screen_off:`Nothing`,media_screen_art:`What is playing`,media_screen_image:`A picture`,media_screen_picture:`Picture on the screen`,media_screen_picture_hint:`From Home Assistant’s media library, e.g. your receiver maker’s logo.`,media_listener_hint:`Someone seated in the middle of the sofa, where the speakers are aimed.`,media_room_movable:`Turn and move the room by hand`,media_room_movable_hint:`Drag to turn it; two fingers, a right-button drag or the wheel to pan and zoom.`,batteries:`Batteries`,batteries_critical:`{count} running out`,batteries_ok:`All fine`,batteries_none:`No batteries found`,batteries_none_critical:`No battery is running out`,battery_low:`Low`,battery_fine:`Fine`,batteries_enabled:`Show the batteries`,batteries_enabled_hint:`Every battery Home Assistant knows of, found by itself -- one added later shows too.`,batteries_hide_when_ok:`Only while one is running out`,batteries_hide_when_ok_hint:`The row is hidden while every battery is fine.`,batteries_only_critical:`List only those running out`,batteries_only_critical_hint:`The popup leaves the fine ones out.`,batteries_threshold:`Running out at`,batteries_threshold_hint:`A battery at or under this is shown in red.`,batteries_hidden:`Left out`,batteries_hidden_hint:`Batteries not to show, e.g. a phone’s.`,system_buttons:`Actions`,system_buttons_hint:`Up to twelve buttons in the settings popup: restarting Home Assistant, letting devices join the Zigbee network.`,add_system_button:`Add action`,system_button_confirm:`Tap again to confirm`,system_button_confirm_option:`Ask for a second tap`,system_button_confirm_option_hint:`For what should not happen by accident, like a restart.`,media_heights_front:`Front heights`,media_heights_rear:`Rear heights`,media_mount_wall:`Bookshelves high on the wall`,media_mount_ceiling:`Round, in the ceiling`,media_sub_output:`Subwoofer output`,media_sub_output_hint:`The receiver’s own switch for its subwoofer output; found by itself with Denon’s HACS integration. Off, every subwoofer is drawn switched off.`,media_listener_sleeps:`Asleep while everything is off`,media_listener_sleeps_hint:`The listener lies down on the sofa while the receiver and the TV are off.`,media_tv_entity:`TV switched on`,media_tv_entity_hint:`Its power lights the screen in the room. Empty: the receiver’s.`,media_screen_scale:`Picture size`,media_screen_scale_hint:`How much of the screen it takes, the rest left blue.`,media_screen_fit:`Picture fill`,media_screen_fit_contain:`Whole picture (letterbox)`,media_screen_fit_cover:`Fill, cropping`,media_screen_fit_stretch:`Stretch`,speaker_FWL:`Front wide left`,speaker_FWR:`Front wide right`,system_button_on_name:`Name while on`,system_button_off_name:`Name while off`,system_button_names_hint:`For a switch: what the button says in each state, e.g. “Stop Zigbee pairing” and “Allow Zigbee pairing”. Empty: the name.`,kiosk_preview:`Home Assistant’s sidebar`,kiosk_preview_hint_shown:`Shown in this tab. Tap to hide it here, as kiosk mode does.`,kiosk_preview_hint_hidden:`Hidden in this tab. Tap to show it again.`,fullscreen:`Full screen`,fullscreen_on:`On. Tap to leave.`,fullscreen_off:`Off. Tap to fill the screen.`},K={en:td,de:{loading:`Verbindung zu Home Assistant wird hergestellt…`,connection_lost:`Keine Verbindung zu Home Assistant`,connection_lost_hint:`Home Assistant startet vielleicht gerade neu. Das Dashboard verbindet sich von selbst wieder, sobald es zurück ist.`,connection_lost_since:`Seit {time} getrennt`,not_loaded:`Better Wall Dashboard ist nicht eingerichtet. Die Integration unter Einstellungen → Geräte & Dienste hinzufügen.`,temperature:`Temperatur`,humidity:`Luftfeuchtigkeit`,open_openings:`Offene Fenster und Türen`,openings:`Fenster und Türen`,none_open:`Alles geschlossen`,open:`Offen`,closed:`Geschlossen`,travel_time:`Fahrzeit Arbeit`,travel_work_zone:`Arbeitsort als Zone`,travel_work_zone_hint:`Wo die Route auf der Karte endet. Nur die Karte: die Minuten kommen weiter vom Sensor. Leer: das Ziel des Sensors.`,travel_work_address:`Oder die Adresse der Arbeit`,travel_work_address_hint:`Gilt, wenn keine Zone gewählt ist. Gespeichert in Home Assistant, beim Dashboard.`,quick_actions:`Quick Actions`,on:`An`,off:`Aus`,home:`Zuhause`,away:`Abwesend`,unavailable:`Nicht verfügbar`,no_events:`Keine anstehenden Termine`,all_day:`Ganztägig`,tomorrow:`Morgen`,happening_now:`Jetzt`,event_day:`Tag {index} von {count}`,calendar:`Kalender`,weather:`Wetter`,forecast_daily:`Nächste Tage`,no_forecast:`Dieser Wetterdienst liefert keine Vorhersage.`,feels_like:`Gefühlt`,wind:`Wind`,rain:`Regen`,uv_index:`UV-Index`,pressure:`Luftdruck`,moon:`Mond`,moon_lit:`{percent} % beleuchtet`,moon_next_full:`Vollmond {date}`,moon_new_moon:`Neumond`,moon_waxing_crescent:`Zunehmende Sichel`,moon_first_quarter:`Erstes Viertel`,moon_waxing_gibbous:`Zunehmender Mond`,moon_full_moon:`Vollmond`,moon_waning_gibbous:`Abnehmender Mond`,moon_last_quarter:`Letztes Viertel`,moon_waning_crescent:`Abnehmende Sichel`,pressure_low:`Tiefstwert der letzten 3 Tage`,lightning_nearby:`Blitze in der Nähe`,pin_title:`PIN eingeben`,pin:`PIN für die Home-Assistant-Seitenleiste`,pin_hint:`4 bis 8 Ziffern. Wird abgefragt, bevor ein langer Druck auf die Uhr am Tablet die Seitenleiste von Home Assistant öffnet. Leer: keine PIN.`,pin_wrong:`Falscher PIN`,pin_locked:`Zu viele Versuche. Erneut in {seconds} s.`,pin_delete:`Löschen`,pin_confirm:`Bestätigen`,lightning_within:`Im Umkreis von {range} {unit}`,thunderstorm:`Gewitter in der Nähe`,lightning_none:`Keine`,lightning_count:`{count} Blitze`,lightning_nearest:`Nächster Einschlag`,lightning_direction:`Richtung`,lightning_last:`Letzter Blitz`,pressure_high:`Höchstwert der letzten 3 Tage`,sunrise:`Sonnenaufgang`,sunset:`Sonnenuntergang`,high_today:`Höchstwert heute`,low_today:`Tiefstwert heute`,today:`Heute`,notifications:`Benachrichtigungen`,no_notifications:`Keine neuen Benachrichtigungen`,dismiss:`Verwerfen`,dismiss_all:`Alle verwerfen`,settings:`Einstellungen`,system:`System`,guest_wifi:`Gäste-WLAN`,guest_wifi_hint:`Mit der Handykamera scannen, um beizutreten.`,guest_wifi_missing:`Für dieses Dashboard ist kein Gästenetz eingerichtet.`,network:`Netzwerk`,password:`Passwort`,signal:`Signal`,absence_mode:`Abwesenheitsmodus`,guest_mode:`Gastmodus`,night_mode:`Nachtmodus`,history:`Verlauf`,last_hours:`Letzte {hours} Stunden`,lowest:`Tiefstwert`,highest:`Höchstwert`,average:`Durchschnitt`,route:`Route`,via:`über`,traffic_delay:`+{minutes} Min. Verkehr`,map_blocked:`Google hat die Karte für diesen Schlüssel blockiert. In der Google Cloud Console die Maps JavaScript API zu den API-Einschränkungen des Schlüssels hinzufügen.`,map_key_error:`Die Karte konnte mit diesem Schlüssel nicht geladen werden. In der Google Cloud Console die Maps JavaScript API und die Routes API dafür aktivieren.`,no_map:`Im Editor einen Google-Maps-API-Schlüssel (oder eine Einbettungs-URL) eintragen, um die Routen hier zu sehen.`,close:`Schließen`,reload:`Dashboard neu laden`,app_error:`Beim Zeichnen dieser Seite ist etwas schiefgegangen.`,app_error_reloading:`Beim Zeichnen des Dashboards ist etwas schiefgegangen. Es lädt sich gleich von selbst neu.`,reload_hint:`Holt die neueste Version, am Cache der App vorbei.`,update_available:`Eine neue Version des Dashboards ist installiert.`,update_available_tap:`Neue Version installiert – tippen zum Laden`,update:`Update`,kiosk:`Home-Assistant-Seitenleiste ausblenden`,edit_dashboard:`Dashboard bearbeiten`,edit_elsewhere:`Öffnet den Editor in einem eigenen Bereich`,preview:`Vorschau`,portrait:`Hochformat`,landscape:`Querformat`,version:`Version`,dashboard:`Dashboard`,empty_section:`Leerer Bereich`,empty_popup:`Noch leer. Im Editor Kacheln zu diesem Button hinzufügen.`,not_found:`Entität nicht gefunden`,editor_title:`Dashboard-Editor`,save:`Speichern`,saved:`Gespeichert`,saving:`Wird gespeichert…`,discard:`Änderungen verwerfen`,unsaved:`Ungespeicherte Änderungen`,add:`Hinzufügen`,remove:`Entfernen`,move_up:`Nach oben`,move_down:`Nach unten`,duplicate:`Duplizieren`,new_dashboard:`Neues Dashboard`,delete_dashboard:`Dashboard löschen`,confirm_delete:`„{name}“ löschen? Zugewiesene Benutzer sehen dann das Standard-Dashboard.`,tab_general:`Allgemein`,tab_sidebar:`Seitenleiste`,tab_pages:`Seiten`,tab_buttons:`Buttons`,tab_users:`Benutzer`,tab_json:`JSON`,name:`Name`,icon:`Symbol`,entity:`Entität`,entities:`Entitäten`,background_image:`Oder die Adresse eines Bilds`,background_image_hint:`Zum Beispiel /local/wand.jpg. Leer verwendet das mitgelieferte Bild.`,background_dim:`Hintergrund abdunkeln`,background_mode:`Als Hintergrund`,background_mode_image:`Ein Bild`,background_mode_color:`Eine einfarbige Fläche`,background_color:`Farbe`,background_blur:`Hintergrund weichzeichnen`,status_icons:`Statussymbole`,wifi_signal:`WLAN-Signalsensor dieses Tablets`,wifi_signal_hint:`Der Sensor „WLAN-Signalstärke“ der Companion-App.`,guest_qr_image:`Bild-Entität mit QR-Code`,guest_qr_image_hint:`Die UniFi-Integration stellt eine pro Netzwerk bereit. Hat Vorrang vor den Feldern darunter.`,security:`Verschlüsselung`,hidden_network:`Verstecktes Netzwerk`,room_climate:`Raumklima`,hours:`Stunden Verlauf`,persons:`Personen`,travel_sensor:`Fahrzeit-Sensor`,map_url:`Google-Maps-Einbettungs-URL`,map_url_hint:`In Google Maps die Route planen, dann Teilen → Karte einbetten, und den src des iframes kopieren.`,maps_api_key:`Google-Maps-API-Schlüssel`,maps_api_key_hint:`Benötigt die Maps JavaScript API und die Routes API. Die Routen werden dann auf einer eigenen Karte ohne Google-Einblendungen gezeichnet.`,calendars:`Kalender`,days:`Tage`,weather_entity:`Wetter-Entität`,outdoor_temperature:`Außentemperatur-Sensor`,notifications_enabled:`Benachrichtigungen anzeigen`,notifications_prefix:`ID-Präfix`,notifications_prefix_hint:`Nur Benachrichtigungen, deren ID mit einem davon beginnt: zum Beispiel wall_all_ für alle Tablets und wall_living_ für dieses. Keiner zeigt alle dauerhaften Benachrichtigungen.`,system_stats:`Systemstatistik`,page:`Seite`,add_page:`Seite hinzufügen`,column_split:`Spaltenaufteilung (%)`,row_split:`Zeilenaufteilung (%)`,section:`Bereich`,columns:`Spalten`,rows:`Zeilen`,square_cells:`Quadratische Zellen`,status_entities:`Werte in der Kopfzeile (bis zu zwei)`,status_icon_hint:`Leer: das der Entität.`,add_status:`Wert hinzufügen`,tiles:`Kacheln`,pick_tile:`Kachel hinzufügen`,pick_tile_hint:`Wähle, was sie ist; eingerichtet wird sie danach.`,add_tile:`Kachel hinzufügen`,type:`Typ`,width:`Breite`,height:`Höhe`,button:`Button`,add_button:`Button hinzufügen`,user:`Benutzer`,assigned_dashboard:`Dashboard`,start_page:`Startseite`,admin:`Admin`,inactive:`Inaktiv`,json_hint:`Das ganze Dashboard, wie es gespeichert wird. Ungültige Teile werden beim Speichern verworfen.`,json_invalid:`Das ist kein gültiges JSON.`,apply:`Übernehmen`,tile_entity:`Entitäts-Button`,tile_entity_hint:`Schaltet, startet oder drückt eine Sache mit einem Tippen. Ein Licht öffnet sich mit Doppeltippen.`,tile_sensor:`Sensor mit Verlauf`,tile_sensor_hint:`Ein Messwert mit dem letzten Tag als Verlauf; ein Tippen zeigt die Historie.`,tile_cover:`Rollladen`,tile_cover_hint:`Ein Rollladen: hoch, stopp, runter, Lieblingspositionen und seine Position per Doppeltippen.`,tile_adaptive_cover:`Adaptive Cover Pro`,tile_adaptive_cover_hint:`Ein von Adaptive Cover Pro gesteuerter Rollladen: was ihn steuert, und per Doppeltippen warum.`,acp_badge_auto:`Auto`,acp_badge_manual:`Manuell`,acp_badge_weather:`Wetterschutz`,acp_badge_glare_zone:`Blendung`,acp_badge_climate:`Klima`,acp_badge_cloud:`Bewölkt`,acp_badge_custom_position:`Eigene Position`,acp_badge_solar:`Sonnennachführung`,acp_badge_motion:`Niemand da`,acp_badge_off:`Aus`,acp_badge_off_schedule:`Außerhalb Zeitplan`,acp_reset_manual:`Zurück zur Automatik`,acp_target:`Ziel`,acp_actual:`Aktuell`,acp_control:`Steuerung`,acp_sun:`Sonne`,acp_sun_on_window:`Am Fenster`,acp_sun_off_window:`Nicht am Fenster`,acp_sun_away:`Sonne nicht am Fenster: noch nichts zu beschatten`,acp_switches:`Steuerung`,acp_enabled:`Integration`,acp_automatic:`Automatik`,acp_climate_mode:`Klimamodus`,acp_motion_control:`Anwesenheit`,acp_decision:`Entscheidung`,acp_details:`Details`,acp_manual_until:`Manuell bis`,acp_motion:`Anwesenheit`,acp_sun_window:`Sonne am Fenster`,acp_last_action:`Letzte Bewegung`,acp_climate:`Klima`,acp_indoor:`Innen`,acp_outdoor:`Außen`,acp_forecast:`Plan für heute`,acp_history:`Letzte 24 Stunden`,acp_history_target:`Ziel`,acp_history_actual:`Tatsächlich`,acp_window:`Fenster`,acp_sun_today:`Sonne heute`,acp_activity:`Aktivität`,acp_event_buffer:`Erweitert — Ereignispuffer`,acp_no_activity:`In den letzten 24 Stunden ist nichts passiert.`,acp_events_count:`{shown} von {all} Ereignissen`,acp_buffer_size:`Puffergröße {size}`,acp_copy_diagnostics:`Diagnose kopieren`,acp_copied:`Kopiert`,acp_filter_events:`Ereignisse filtern…`,loading_short:`Lädt…`,acp_tip_fov:`Was das Fenster sieht: {from} bis {to}`,acp_tip_blind:`Toter Winkel: {from} bis {to}`,acp_tip_path:`Die Bahn der Sonne heute`,acp_tip_window:`Das Fenster zeigt nach {bearing}`,acp_tip_sun:`Die Sonne jetzt: {azimuth}, {elevation} hoch`,compass_n:`N`,compass_e:`O`,compass_s:`S`,compass_w:`W`,acp_status_active:`Aktiv`,acp_status_calibrating:`Kalibriert`,acp_status_outside_time_window:`Außerhalb des Zeitplans`,acp_status_position_delta_too_small:`Änderung zu klein`,acp_status_time_delta_too_small:`Wartet zwischen Bewegungen`,acp_status_manual_override:`Von Hand gehalten`,acp_status_automatic_control_off:`Automatik aus`,acp_status_sun_not_visible:`Sonne nicht am Fenster`,acp_status_weather_override_active:`Wetterschutz aktiv`,acp_status_motion_timeout:`Niemand da`,acp_motion_not_configured:`Nicht eingerichtet`,acp_motion_motion_detected:`Jemand da`,acp_motion_timeout_pending:`Läuft ab`,acp_motion_no_motion:`Niemand da`,acp_motion_holding:`Hält`,acp_motion_waiting_for_data:`Wartet auf Daten`,acp_climate_summer_mode:`Sommer`,acp_climate_winter_mode:`Winter`,acp_climate_intermediate:`Übergang`,acp_handler_weather:`Wetter`,acp_handler_manual_override:`Manuell`,acp_handler_custom_position:`Eigene Position`,acp_handler_motion_timeout:`Anwesenheit`,acp_handler_cloud_suppression:`Wolken`,acp_handler_climate:`Klima`,acp_handler_glare_zone:`Blendung`,acp_handler_solar:`Sonne`,acp_handler_default:`Standard`,acp_decides:`entscheidet`,acp_would:`wäre {position}`,cover_open:`Geöffnet`,cover_closed:`Geschlossen`,cover_opening:`Öffnet`,cover_closing:`Schließt`,cover_up:`Hoch`,cover_stop:`Stopp`,cover_down:`Runter`,cover_position:`Position`,cover_tilt:`Neigung`,cover_active_when:`Als aktiv dargestellt`,cover_active_when_hint:`Wann die Kachel leuchtet: solange Licht hereinkommt oder solange der Rollladen unten ist.`,cover_active_open:`Wenn geöffnet`,cover_active_closed:`Wenn geschlossen`,cover_active_never:`Nie`,cover_stop_only_moving:`Stopp nur während der Fahrt`,cover_presets:`Positionen`,cover_presets_hint:`Bis zu vier, 0 bis 100 %: eine Reihe Buttons unter der Steuerung, wo die Kachel Platz hat, und in ihren Details.`,cover_stop_only_moving_hint:`Für Rollläden, die melden, dass sie fahren. Bei einem, der das nicht tut, wäre Stopp nie verfügbar.`,brightness:`Helligkeit`,light_power:`An / Aus`,light_color:`Farbe`,light_temperature:`Farbtemperatur`,light_members:`Lampen`,light_hide_presets:`Farbvorlagen ausblenden`,light_hide_presets_hint:`In den Details des Lichts, die ein Doppeltipp auf die Kachel öffnet.`,tile_better_lighting:`Better-Lighting-Raum`,tile_better_lighting_hint:`Ein Better-Lighting-Raum: sein Licht, seine Szenen und was es geschaltet hat.`,bl_presence:`Anwesenheit erkannt`,bl_nobody:`Niemand da`,bl_night:`Nachtmodus`,bl_simulating:`Anwesenheit wird simuliert`,bl_by_hand:`Von Hand an`,bl_automatic:`Automatisch an`,bl_switching_off:`Schaltet ab`,bl_back_to_adaptive:`Zurück zu adaptiv`,bl_scenes:`Szenen`,bl_previous_scene:`Vorherige Szene`,bl_next_scene:`Nächste Szene`,bl_shown_scenes:`Szenen in der Liste`,bl_shown_scenes_hint:`Ausgeschaltete fehlen in der Liste und werden von den Pfeilen übersprungen.`,bl_button_entity:`Zusätzlicher Button`,bl_button_entity_hint:`Eine beliebige Entität als weiterer Button neben dem Raum: eine Szene, ein Skript, ein Schalter.`,bl_button_icon:`Symbol des zusätzlichen Buttons`,options_json:`Optionen (JSON)`,nav_status:`Status & WLAN`,nav_dashboards:`Dashboards`,nav_house:`Zuhause`,menu:`Menü`,editor_menu:`Editor-Menü`,more:`Mehr`,edit_json:`Als JSON bearbeiten`,device:`Gerät`,background:`Hintergrund`,security_heading:`Tablet-Sicherheit`,not_set:`Nicht gesetzt`,name_hint:`Leer verwendet den Namen der Entität.`,empty_list:`Noch nichts hier.`,empty_tiles:`Noch keine Kacheln. Füge unten die erste hinzu.`,add_quick_action:`Schnellaktion hinzufügen`,rules:`Nur anzeigen, wenn`,rules_hint:`Alle zugleich. Ohne Regel immer sichtbar.`,rules_count:`{count} Regeln`,rules_one:`1 Regel`,add_rule:`Regel hinzufügen`,rule_type:`Regel`,rule_state:`Eine Entität hat einen Zustand`,rule_numeric:`Ein Wert liegt über oder unter`,rule_time:`Eine Tageszeit`,rule_sun:`Tag oder Nacht`,rule_home:`Jemand zu Hause`,rule_state_value:`Zustand`,rule_state_value_hint:`Wie Home Assistant ihn nennt: on, off, home, playing …`,rule_not:`Jeder Zustand außer diesem`,rule_above:`Über`,rule_below:`Unter`,rule_after:`Ab`,rule_before:`Bis`,rule_before_hint:`Früher als der Beginn geht über Mitternacht.`,rule_day:`Tagsüber`,rule_night:`Nachts`,rule_anyone:`Jemand ist zu Hause`,rule_nobody:`Niemand ist zu Hause`,add_statistic:`Statistik hinzufügen`,status_icons_hint:`Modi oben in der Seitenleiste, links vom WLAN-Symbol, jeder nur, solange er an ist: ein Helfer, ein Schalter oder ein Binärsensor.`,open_network:`Offen (ohne Passwort)`,openings_hint:`Fenster, Türen, Rollläden und Schlösser. Die Seitenleiste zählt die offenen.`,openings_hide_when_closed:`Nur, wenn etwas offen ist`,openings_hide_when_closed_hint:`Die Zeile verschwindet aus der Seitenleiste, solange alle Fenster und Türen zu sind.`,openings_only_open:`Nur Offenes auflisten`,openings_only_open_hint:`Das Popup lässt weg, was geschlossen ist.`,travel_name_hint:`Leer zeigt „Fahrzeit zur Arbeit“.`,map:`Karte`,calendar_days_hint:`Wie viele Tage mit Terminen die Seitenleiste zeigt. Sie schaut zwei Wochen voraus.`,outdoor_temperature_hint:`Wird statt der Temperatur der Vorhersage angezeigt, wenn gesetzt.`,lead_general:`Name des Dashboards, sein Hintergrund und die PIN, die das Tablet schützt.`,lead_status:`Die Symbole oben in der Seitenleiste und das Gäste-WLAN, das sie öffnen.`,lead_climate:`Die beiden Verläufe unter der Uhr.`,lead_persons:`Wer zu Hause ist, zwei pro Zeile.`,lead_openings:`Offene Fenster und Türen, gezählt in einer Zeile.`,lead_batteries:`Jede Batterie im Haus, von selbst gefunden, und welche fast leer sind.`,lead_travel:`Die Fahrzeit-Zeile und die Karte, die sie öffnet.`,lead_quick:`Ein Tipp schaltet: bis drei eine pro Zeile, ab vier zwei pro Zeile.`,lead_calendar:`Die anstehenden Termine in der Seitenleiste.`,lead_weather:`Das Wetter unten in der Seitenleiste und die Vorhersage, die es öffnet.`,lead_notifications:`Die Buttons unten in der Seitenleiste: die Benachrichtigungen von Home Assistant hinter der Glocke, und die Einstellungen.`,lead_system:`Werte, die im Einstellungs-Popup angezeigt werden.`,lead_pages:`Die Seiten wischen in dieser Reihenfolge.`,lead_page:`Wie die Seite aufgeteilt ist, und der Bereich in jeder Zelle.`,lead_section:`Kopfzeile eines Bereichs, sein Raster und seine Kacheln.`,lead_buttons:`Bis zu fünf Buttons unten, jeder öffnet ein Popup mit Kacheln.`,lead_button:`Wie der Button in der Leiste aussieht, und die Kacheln in seinem Popup.`,lead_users:`Welches Dashboard jeder Benutzer sieht, ob im Vollbild, und bei wem Home Assistant darauf startet. Wird sofort gespeichert.`,page_n:`Seite {n}`,section_n:`Bereich {n}`,button_n:`Button {n}`,cell_n:`Zelle {n}`,no_sections:`Noch keine Bereiche`,layout:`Aufteilung`,sections:`Bereiche`,sections_hint:`{cells} Zellen, zeilenweise gefüllt.`,split_hint:`Prozent, bis zu drei, z. B. 75, 25.`,add_section:`Bereich hinzufügen`,tiles_count:`{count} Kacheln`,section_header:`Kopfzeile`,grid:`Raster`,square_cells_hint:`Gleiche quadratische Zellen in jedem Bereich, damit Kacheln seitenweit fluchten.`,button_columns_hint:`Spalten des Popup-Rasters.`,kiosk_user_hint:`Ohne Seitenleiste und Kopfzeile von Home Assistant.`,start_page_hint:`Home Assistant startet für diesen Benutzer auf diesem Dashboard.`,about:`Über`,about_blurb:`Ein Vollbild-Dashboard für Wandtablets, ausgeliefert von seiner eigenen Integration und hier eingerichtet.`,about_version:`Integration`,about_page:`Diese Seite`,about_repo:`Dokumentation`,about_issues:`Problem melden`,clock:`Uhr`,clock_style:`Darstellung`,clock_digital:`Digital`,clock_analog:`Analog`,clock_seconds:`Sekunden anzeigen`,lead_clock:`Die Uhrzeit oben in der Seitenleiste. Ein langer Druck darauf öffnet die Seitenleiste von Home Assistant.`,settings_enabled:`Einstellungs-Button anzeigen`,settings_enabled_hint:`Das Zahnrad unten in der Seitenleiste. Ausgeblendet wird das Tablet stattdessen aus dem Editor neu geladen.`,sidebar_only:`Nur dieses Dashboard in der Seitenleiste von Home Assistant`,sidebar_only_hint:`Blendet alle anderen Einträge und die Benachrichtigungen in der Seitenleiste dieses Benutzers aus; das Profil bleibt. Später hinzugefügte Panels werden ebenfalls ausgeblendet.`,reload_tablets:`Tablets damit neu laden`,tablets_reloaded:`Auf {count} Tablet(s) mit diesem Dashboard neu geladen.`,cancel:`Abbrechen`,delete:`Löschen`,discard_title:`Ungespeicherte Änderungen verwerfen?`,discard_text:`Was seit dem letzten Speichern geändert wurde, geht verloren.`,delete_title:`„{name}“ löschen?`,add_status_icon:`Statussymbol hinzufügen`,wifi_heading:`WLAN`,background_media:`Hintergrundbild`,background_media_hint:`Aus der Medienbibliothek von Home Assistant. Leer verwendet das mitgelieferte Bild.`,tile_media:`Mediaplayer`,tile_media_hint:`Was spielt, mit Cover, Ein/Aus, Lautstärke und Steuerung; per Doppeltippen die ganze Anlage und der Raum.`,media_power:`Ein- oder ausschalten`,media_volume:`Lautstärke`,media_volume_up:`Lauter`,media_volume_down:`Leiser`,media_mute:`Stumm`,media_muted:`Stumm`,media_play:`Abspielen`,media_pause:`Pause`,media_previous:`Zurück`,media_next:`Weiter`,media_stop:`Stopp`,media_shuffle:`Zufällig`,media_repeat:`Wiederholen`,media_nothing:`Keine Wiedergabe`,media_current_source:`Aktuelle Quelle`,media_now_playing:`Wiedergabe`,media_audio_format:`Audioformat`,media_sound_mode:`Klangmodus`,media_decoder:`Decoder`,media_input_signal:`Eingangssignal`,media_source_channels:`Kanäle der Quelle`,media_sample_rate:`Abtastrate`,media_switches:`Steckdosen`,media_night:`Nachtmodus`,media_speakers:`Lautsprecher`,speaker_active:`Spielt`,speaker_silent:`Still`,speaker_unknown:`Unbekannt`,speaker_unpowered:`Ausgeschaltet`,speaker_FL:`Front links`,speaker_FR:`Front rechts`,speaker_C:`Center`,speaker_SL:`Surround links`,speaker_SR:`Surround rechts`,speaker_SBL:`Surround hinten links`,speaker_SBR:`Surround hinten rechts`,speaker_FHL:`Höhe vorne links`,speaker_FHR:`Höhe vorne rechts`,speaker_TML:`Decke Mitte links`,speaker_TMR:`Decke Mitte rechts`,speaker_RHL:`Höhe hinten links`,speaker_RHR:`Höhe hinten rechts`,speaker_SW1:`Subwoofer 1 (vorne)`,speaker_SW2:`Subwoofer 2 (vorne)`,speaker_SW3:`Subwoofer 3 (hinten)`,speaker_SW4:`Subwoofer 4 (hinten)`,media_players:`Weitere Player`,media_players_hint:`Was darüber spielt, z. B. die Streaming-Box und der Fernseher. Die Kachel zeigt, bei wem davon und beim Haupt-Player am meisten los ist; bei Gleichstand den früheren.`,media_power_entity:`Ein/Aus-Taste schaltet`,media_power_entity_hint:`Leer: den Haupt-Player.`,media_volume_entity:`Lautstärke von`,media_volume_entity_hint:`Der Player, dessen Lautstärke gezeigt und geändert wird. Leer: der Haupt-Player.`,media_volume_unit:`Lautstärke in`,media_volume_auto:`Automatisch (dB bei einem Denon-Receiver)`,media_volume_db:`Dezibel`,media_volume_percent:`Prozent`,media_presets:`Quellen-Voreinstellungen`,media_presets_hint:`In den Details: ein Tippen wechselt zur Quelle.`,add_media_preset:`Voreinstellung hinzufügen`,media_preset_kind:`Macht`,media_preset_source:`Eingang wählen`,media_preset_app:`App öffnen`,media_preset_run:`Skript oder Szene ausführen`,media_preset_value:`Eingang`,media_preset_app_id:`App`,media_preset_app_hint:`Paket oder ID der App, z. B. com.google.android.youtube.tv.`,media_switches_title:`Überschrift der Steckdosen`,media_switches_hint:`Steckdosen, die in den Details geschaltet werden, z. B. die der Subwoofer.`,add_media_switch:`Steckdose hinzufügen`,media_switch_subs:`Versorgt die Subwoofer`,media_switch_subs_hint:`Im Raum als ausgeschaltet gezeichnet, solange sie aus ist.`,media_devices:`Geräte`,media_devices_hint:`Ihr Ein/Aus und was sie zeigen, in den Details.`,add_media_device:`Gerät hinzufügen`,media_device_info:`Was es zeigt`,media_device_info_hint:`Ein Sensor, z. B. „4K HDR“. Leer: sein Eingang.`,media_night_entity:`Nachtmodus`,media_night_entity_hint:`Ein Schalter, Input Boolean oder Skript, das die Anlage leiser stellt.`,media_night_text:`Beschreibung des Nachtmodus`,media_sound_heading:`Ton`,media_mode_entity:`Klangmodus aus`,media_mode_entity_hint:`Leer: der des Lautstärke-Players, oder Denons Sensor, wo die HACS-Integration einen hat.`,media_format_entity:`Kanäle der Quelle aus`,media_format_entity_hint:`Ein Sensor wie „3/2/.1“ oder „5.1“. Bei Denons HACS-Integration von selbst gefunden.`,media_layout:`Lautsprecher im Raum`,media_layout_hint:`In den Details gezeichnet, leuchtend nach dem, was der Receiver spielt.`,media_layout_bed:`Auf Ohrhöhe`,media_layout_subs:`Subwoofer`,media_layout_heights:`Höhenlautsprecher`,media_sofa:`Sofa`,media_sofa_none:`Keines`,media_sofa_straight:`Gerade`,media_sofa_l_left:`L-Form, Liege links`,media_sofa_l_right:`L-Form, Liege rechts`,media_view_reset:`Zurück zur ersten Ansicht`,media_audio_info:`Audio`,media_listener:`Zuhörer zeigen`,media_walls:`Wände zeigen`,media_screen:`Auf dem Bildschirm`,media_screen_off:`Nichts`,media_screen_art:`Was gerade läuft`,media_screen_image:`Ein Bild`,media_screen_picture:`Bild auf dem Bildschirm`,media_screen_picture_hint:`Aus der Medienbibliothek von Home Assistant, z. B. das Logo deines Receiver-Herstellers.`,media_listener_hint:`Jemand in der Mitte des Sofas, wohin die Lautsprecher zielen.`,media_room_movable:`Raum von Hand drehen und verschieben`,media_room_movable_hint:`Ziehen dreht ihn; zwei Finger, Ziehen mit rechter Maustaste oder das Mausrad verschieben und zoomen.`,batteries:`Batterien`,batteries_critical:`{count} fast leer`,batteries_ok:`Alle in Ordnung`,batteries_none:`Keine Batterien gefunden`,batteries_none_critical:`Keine Batterie ist fast leer`,battery_low:`Schwach`,battery_fine:`In Ordnung`,batteries_enabled:`Batterien zeigen`,batteries_enabled_hint:`Jede Batterie, die Home Assistant kennt, von selbst gefunden -- auch später hinzugefügte.`,batteries_hide_when_ok:`Nur wenn eine fast leer ist`,batteries_hide_when_ok_hint:`Die Zeile ist ausgeblendet, solange alle Batterien in Ordnung sind.`,batteries_only_critical:`Nur fast leere auflisten`,batteries_only_critical_hint:`Das Popup lässt die vollen weg.`,batteries_threshold:`Fast leer ab`,batteries_threshold_hint:`Eine Batterie auf oder unter diesem Wert wird rot gezeigt.`,batteries_hidden:`Ausgelassen`,batteries_hidden_hint:`Batterien, die nicht gezeigt werden, z. B. die des Handys.`,system_buttons:`Aktionen`,system_buttons_hint:`Bis zu zwölf Buttons im Einstellungs-Popup: Home Assistant neu starten, Geräte ins Zigbee-Netz aufnehmen.`,add_system_button:`Aktion hinzufügen`,system_button_confirm:`Zum Bestätigen nochmal tippen`,system_button_confirm_option:`Zweites Tippen verlangen`,system_button_confirm_option_hint:`Für was nicht versehentlich passieren soll, wie ein Neustart.`,media_heights_front:`Höhenlautsprecher vorne`,media_heights_rear:`Höhenlautsprecher hinten`,media_mount_wall:`Regallautsprecher hoch an der Wand`,media_mount_ceiling:`Rund, in der Decke`,media_sub_output:`Subwoofer-Ausgang`,media_sub_output_hint:`Der Schalter des Receivers für seinen Subwoofer-Ausgang; bei Denons HACS-Integration von selbst gefunden. Aus, werden alle Subwoofer als ausgeschaltet gezeichnet.`,media_listener_sleeps:`Schläft, wenn alles aus ist`,media_listener_sleeps_hint:`Der Zuhörer legt sich aufs Sofa, solange Receiver und Fernseher aus sind.`,media_tv_entity:`Fernseher eingeschaltet`,media_tv_entity_hint:`Sein Ein/Aus lässt den Bildschirm im Raum leuchten. Leer: der des Receivers.`,media_screen_scale:`Bildgröße`,media_screen_scale_hint:`Wie viel des Bildschirms es einnimmt, der Rest bleibt blau.`,media_screen_fit:`Bildfüllung`,media_screen_fit_contain:`Ganzes Bild (Letterbox)`,media_screen_fit_cover:`Füllen, beschnitten`,media_screen_fit_stretch:`Strecken`,speaker_FWL:`Front Wide links`,speaker_FWR:`Front Wide rechts`,system_button_on_name:`Name wenn an`,system_button_off_name:`Name wenn aus`,system_button_names_hint:`Für einen Schalter: was der Button in jedem Zustand sagt, z. B. „Zigbee-Kopplung beenden“ und „Zigbee-Kopplung erlauben“. Leer: der Name.`,kiosk_preview:`Seitenleiste von Home Assistant`,kiosk_preview_hint_shown:`In diesem Tab sichtbar. Tippen blendet sie hier aus, wie der Kiosk-Modus.`,kiosk_preview_hint_hidden:`In diesem Tab ausgeblendet. Tippen zeigt sie wieder.`,fullscreen:`Vollbild`,fullscreen_on:`An. Tippen zum Verlassen.`,fullscreen_off:`Aus. Tippen, um den Bildschirm zu füllen.`}};function q(e,t,n){let r=(K[e.split(`-`)[0]]??td)[t]??td[t]??t;if(n)for(let[e,t]of Object.entries(n))r=r.replaceAll(`{${e}}`,String(t));return r}function J(e){return R(t=>e?t.entities[e]:void 0)}function nd(){return R(e=>e.connection)}function rd(e){return R(t=>e?t.entitiesRegistryDisplay[e]?.display_precision:void 0)}function Y(){let e=R(e=>e.locale?.language),t=R(e=>e.config?.language);return e||t||navigator.language||`en`}function X(){let e=Y();return(0,v.useCallback)((t,n)=>q(e,t,n),[e])}function id(){return R(e=>e.entities[`sun.sun`]?.state===`below_horizon`)}function ad(){return R(e=>e.helpers.joinHassUrl)}function Z(){let e=nd();return(0,v.useCallback)(async(t,n,r,i,a=!1)=>{if(e)return e.sendMessagePromise({type:`call_service`,domain:t,service:n,service_data:r,target:i,...a?{return_response:!0}:{}})},[e])}function od(e){return{light:`mdi:lightbulb`,switch:`mdi:toggle-switch-variant`,fan:`mdi:fan`,cover:`mdi:window-shutter`,climate:`mdi:thermostat`,media_player:`mdi:speaker`,lock:`mdi:lock`,vacuum:`mdi:robot-vacuum`,scene:`mdi:palette`,script:`mdi:script-text`,input_boolean:`mdi:toggle-switch-variant`,automation:`mdi:robot`,button:`mdi:gesture-tap-button`,sensor:`mdi:eye`,binary_sensor:`mdi:checkbox-blank-circle-outline`}[e.split(`.`)[0]]??`mdi:gesture-tap`}var sd=[`automation`,`button`,`climate`,`cover`,`fan`,`humidifier`,`input_boolean`,`input_button`,`light`,`media_player`,`remote`,`scene`,`script`,`siren`,`switch`,`vacuum`,`valve`];function cd(e){let t=e.split(`.`)[0];switch(t){case`scene`:case`script`:return[t,`turn_on`];case`button`:case`input_button`:return[t,`press`];case`lock`:return[t,`toggle`];case`cover`:return[t,`toggle`];case`automation`:case`fan`:case`input_boolean`:case`light`:case`switch`:case`media_player`:case`climate`:case`humidifier`:case`siren`:case`vacuum`:return[t,`toggle`];default:return[`homeassistant`,`toggle`]}}function ld(e,t,n,r){let i=nd(),a=(0,v.useRef)({build:t,onEvent:n,onError:r});(0,v.useEffect)(()=>{a.current={build:t,onEvent:n,onError:r}}),(0,v.useEffect)(()=>{if(!i||e===null)return;let t,n=!1;return i.subscribeMessage(e=>a.current.onEvent(e),a.current.build(),{resubscribe:!0}).then(e=>{n?e():t=e}).catch(e=>a.current.onError?.(e)),()=>{n=!0,Promise.resolve(t?.()).catch(()=>void 0)}},[i,e])}var ud=!1,dd=!1,fd=null,pd=null;function md(){let e=dd&&(pd??ud);if(e!==fd){if(!e&&fd!==!0){fd=e;return}fd=e,window.dispatchEvent(new CustomEvent(`hass-kiosk-mode`,{detail:{enable:e}}))}}function hd(e){ud=e,md()}function gd(e){dd=e,md()}function _d(e){e.dispatchEvent(new CustomEvent(`hass-toggle-menu`,{bubbles:!0,composed:!0,detail:{open:!0}}))}function vd(){return fd===!0}function yd(){return pd=!vd(),md(),vd()}var bd=`better-wall-dashboard-sidebar`,xd=`#sidebar-notifications { display: none !important; }`;function Sd(){return((document.querySelector(`home-assistant`)?.shadowRoot)?.querySelector(`home-assistant-main`)?.shadowRoot)?.querySelector(`ha-sidebar`)?.shadowRoot??null}function Cd(e){let t=Sd();if(!t)return;let n=t.getElementById(bd);if(e&&!n){let e=document.createElement(`style`);e.id=bd,e.textContent=xd,t.append(e)}e||n?.remove()}var wd=null;function Td(e){wd=e}function Ed(){return wd}function Dd(e=Ed()){if(!e)return null;try{return new URL(e).searchParams.get(`v`)}catch{return null}}function Od(e,t){try{let{pathname:n}=new URL(e);return n.startsWith(t)?!0:!(n.split(`/`).pop()??``).includes(`.`)}catch{return!1}}async function kd(e,t=`/better_wall_dashboard/`){if(e)try{if(!(await fetch(e,{cache:`reload`})).ok)return`missing`}catch{return`missing`}try{if(`caches`in window)for(let e of await caches.keys()){let n=await caches.open(e);for(let e of await n.keys())Od(e.url,t)&&await n.delete(e)}await(await navigator.serviceWorker?.getRegistration())?.update()}catch{}return window.location.reload(),`reloading`}var Ad=(0,v.createContext)({view:null,error:null,preview:()=>void 0,previewing:null}),jd=`better-wall-dashboard:preview`;function Md(){try{return new URLSearchParams(window.location.search).get(`dashboard`)||window.localStorage.getItem(jd)}catch{return null}}function Nd(e){try{e?window.localStorage.setItem(jd,e):window.localStorage.removeItem(jd)}catch{}}var Pd=({children:e})=>{let[t,n]=(0,v.useState)(null),[r,i]=(0,v.useState)(null),[a,o]=(0,v.useState)(Md);ld(a??``,()=>({type:`better_wall_dashboard/subscribe`,dashboard:a}),e=>{if(`reload`in e){kd(Ed());return}i(null),n(e)},e=>i(e.code??e.message??`error`)),(0,v.useEffect)(()=>{hd(!!t?.kiosk)},[t?.kiosk]),(0,v.useEffect)(()=>{Cd(!!t?.sidebar_only)},[t?.sidebar_only]);let s=(0,v.useCallback)(e=>{Nd(e),o(e)},[]),c=(0,v.useMemo)(()=>({view:t,error:r,preview:s,previewing:a}),[t,r,s,a]);return(0,C.jsx)(Ad.Provider,{value:c,children:e})},Fd=({view:e,focusPage:t,children:n})=>{let r=(0,v.useMemo)(()=>({view:e,error:null,preview:()=>void 0,previewing:null,focusPage:t}),[e,t]);return(0,C.jsx)(Ad.Provider,{value:r,children:n})};function Id(){return(0,v.useContext)(Ad)}function Ld(){let{view:e}=(0,v.useContext)(Ad);if(!e)throw Error(`useDashboard() before the dashboard has loaded`);return e.dashboard}function Rd(e){let t=1/0,n=1/0;for(let r of e)r.width<=0||r.height<=0||r.columns<1||r.rows<1||(t=Math.min(t,(r.width-(r.columns-1)*r.gap)/r.columns),n=Math.min(n,(r.height-(r.rows-1)*r.gap)/r.rows));return!Number.isFinite(t)||!Number.isFinite(n)||t<=0||n<=0?null:(t=Math.min(t,n*1),n=Math.min(n,t*1),{width:Math.floor(t),height:Math.floor(n)})}function zd(e,t,n,r,i=0){let a=(Math.abs(t)>n*.12||Math.abs(i)>.5)&&t!==0?e+(t<0?1:-1):e;return Math.max(0,Math.min(r-1,a))}function Bd(e,t,n=0){return!(Math.abs(e)>t/3||Math.abs(n)>.6&&Math.abs(e)>24)||e===0?0:e<0?-1:1}function Vd(e,t){let n=e.composedPath()[0];if(!(n instanceof Element))return!1;let r=n.closest(`dialog`);return r!==null&&t.contains(r)&&!r.contains(t)}function Hd(e,t){let n=e.target,r=e.currentTarget;if(!n||!r)return!1;let i=n.closest(t);if(i&&r.contains(i))return!0;let a=n.closest(`dialog`);return a!==null&&r.contains(a)}function Ud(e,t){(0,v.useEffect)(()=>{let n=e.current;if(!n)return;let r=null,i=0,a=e=>{e.stopPropagation(),e.preventDefault()},o=e=>{e.pointerType===`mouse`&&e.button===0&&(Vd(e,n)||(r={id:e.pointerId,x:e.clientX,left:n.scrollLeft,moved:!1,lastX:e.clientX,lastT:e.timeStamp,velocity:0}))},s=e=>{if(!r||e.pointerId!==r.id)return;if(e.buttons===0){c(e);return}let t=e.clientX-r.x;if(!r.moved){if(Math.abs(t)<6)return;r.moved=!0,i+=1,n.setPointerCapture(r.id),n.style.scrollSnapType=`none`,n.style.cursor=`grabbing`}let a=e.timeStamp-r.lastT;a>0&&(r.velocity=(e.clientX-r.lastX)/a),r.lastX=e.clientX,r.lastT=e.timeStamp,n.scrollLeft=r.left-t},c=e=>{if(!r||e.pointerId!==r.id)return;let o=r;if(r=null,!o.moved)return;n.style.cursor=``,n.addEventListener(`click`,a,{capture:!0,once:!0}),window.setTimeout(()=>n.removeEventListener(`click`,a,{capture:!0}),0);let s=n.clientWidth,c=zd(Math.round(o.left/s),e.clientX-o.x,s,t,o.velocity),l=i,u=()=>{l!==i||r?.moved||(n.style.scrollSnapType=``)};n.addEventListener(`scrollend`,u,{once:!0}),window.setTimeout(u,700),n.scrollTo({left:c*s,behavior:`smooth`})},l=e=>e.preventDefault();return n.addEventListener(`pointerdown`,o),n.addEventListener(`pointermove`,s),n.addEventListener(`pointerup`,c),n.addEventListener(`pointercancel`,c),n.addEventListener(`dragstart`,l),()=>{n.removeEventListener(`pointerdown`,o),n.removeEventListener(`pointermove`,s),n.removeEventListener(`pointerup`,c),n.removeEventListener(`pointercancel`,c),n.removeEventListener(`dragstart`,l)}},[e,t])}var Wd=W.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  width: ${({$size:e})=>e??`1em`};
  height: ${({$size:e})=>e??`1em`};
  color: ${({$color:e})=>e??`inherit`};
  --mdc-icon-size: ${({$size:e})=>e??`1em`};
  /* ha-icon is inline: its line box would sit the glyph on the text
     baseline, low and to the left of the circle it is meant to fill. */
  line-height: 0;
  transition:
    color 0.3s ease-in-out,
    opacity 0.3s ease-in-out;

  ha-icon {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
  }

  svg {
    width: 100%;
    height: 100%;
    display: block;
  }
`,Q=(0,v.memo)(({icon:e,size:t,color:n,className:r})=>{let i=typeof customElements<`u`&&customElements.get(`ha-icon`);return(0,C.jsx)(Wd,{$size:t,$color:n,className:r,children:i?(0,C.jsx)(`ha-icon`,{icon:e}):(0,C.jsx)(yo,{icon:e})})});function Gd(e,t){let n=e.split(`.`)[0];return n===`input_number`||n===`number`||n===`counter`?!0:n===`sensor`?Number.isFinite(Number(t.state))&&t.state!==``?!0:`state_class`in t.attributes:!1}function Kd(e,t){let n=new Set;for(let[r,i]of Object.entries(e)){if(!r.startsWith(`sensor.`)||t(r)!==`adaptive_cover_pro`)continue;let e=i.attributes.actual_positions;e&&typeof e==`object`&&Object.keys(e).forEach(e=>n.add(e))}return[...n].sort()}var qd=U`
  background-image:
    radial-gradient(120px circle at var(--glow-x, 50%) var(--glow-y, 50%), rgba(255, 255, 255, 0.06), rgba(255, 255, 255, 0)),
    var(--own-sheen, none);
`,Jd=(e,t)=>U`
  /* Marks it as one that glows, for the wave a press sends out (glow.ts). */
  --glow: 1;
  transition: background-color 0.2s ease;

  @media (hover: hover) {
    &:hover:enabled {
      background-color: ${e};
      ${qd}
    }
  }

  &:active:enabled {
    background-color: ${t};
  }
`,Yd=e=>U`
  --glow: 1;
  transition: background-color 0.2s ease;

  @media (hover: hover) {
    &:hover {
      background-color: ${e};
      ${qd}
    }
  }
`,Xd=(e,t=0)=>U`
  background-color: ${e};
  /* The sheen is a fixed size from the top left corner, not a share of the
     surface: stretched over the tall sidebar, a proportional one made it
     lighter than the tiles beside it. */
  /* Through a variable, so a hovered surface can lay the pointer's glow
     over its sheen (see interaction.ts). Not inherited: see glow.ts. */
  --own-sheen: radial-gradient(circle at 0 0, rgba(255, 255, 255, 0.075), rgba(255, 255, 255, 0) 190px);
  background-image: var(--own-sheen);
  ${t?`backdrop-filter: blur(${t}px) saturate(140%); -webkit-backdrop-filter: blur(${t}px) saturate(140%);`:``}
  border: 1px solid rgba(255, 255, 255, 0.08);
  box-shadow:
    inset 0 1px 0 rgba(255, 255, 255, 0.1),
    0 4px 16px rgba(0, 0, 0, 0.28);
  box-sizing: border-box;
`,Zd=Xd(`rgba(255, 255, 255, 0.035)`),Qd=U`
  border-radius: ${G(1.1)};
  ${Zd}

  &[data-on='true'] {
    background-color: ${({theme:e})=>e.card.on};
    --own-sheen: radial-gradient(
      circle at 0 0,
      color-mix(in srgb, var(--on-color, ${({theme:e})=>e.colors.warm}) 24%, transparent),
      transparent 190px
    );
  }
`,$d=U`
  ${({theme:e})=>Jd(e.bubble.background,e.bubble.hover)}
  /* A double tap opens a light: it must not zoom the page instead. */
  touch-action: manipulation;
`,ef=W.div`
  position: relative;
  width: 100%;
  height: 100%;
  min-width: 0;
  min-height: 0;
  ${Qd}
  overflow: hidden;
`,tf=300;function nf(e,t){let n=(0,v.useRef)(0);return(0,v.useEffect)(()=>()=>window.clearTimeout(n.current),[]),()=>{if(!t){e();return}if(n.current){window.clearTimeout(n.current),n.current=0,t();return}n.current=window.setTimeout(()=>{n.current=0,e()},tf)}}function rf(e){let t=e/100,n=e=>Math.round(Math.min(255,Math.max(0,e))),r=t<=66?255:329.698727446*(t-60)**-.1332047592,i=t<=66?99.4708025861*Math.log(t)-161.1195681661:288.1221695283*(t-60)**-.0755148492,a=t>=66?255:t<=19?0:138.5177312231*Math.log(t-10)-305.0447927307;return[n(r),n(i),n(a)]}function af(e){let t=e.rgb_color??(e.color_temp_kelvin?rf(e.color_temp_kelvin):null);return t?`rgb(${t.join(`, `)})`:void 0}function of(e,t){return e&&t?Math.round(t/255*100):0}var sf=new Set([`hs`,`xy`,`rgb`,`rgbw`,`rgbww`]);function cf(e){let t=e??[];return{brightness:t.some(e=>e!==`onoff`),color:t.some(e=>sf.has(e)),temperature:t.includes(`color_temp`)}}function lf(e,t,n){let r=(Math.atan2(t,e)*180/Math.PI+360)%360,i=Math.min(1,Math.hypot(e,t)/n)*100;return[Math.round(r),Math.round(i)]}function uf([e,t],n){let r=e*Math.PI/180,i=Math.min(100,Math.max(0,t))/100*n;return{x:Math.cos(r)*i,y:Math.sin(r)*i}}function df(e,t,n){let r=n-Math.min(1,Math.max(0,e))*(n-t);return Math.min(n,Math.max(t,Math.round(r/50)*50))}function ff(e,t,n){return n<=t?.5:Math.min(1,Math.max(0,(n-e)/(n-t)))}function pf([e,t]){let n=t/100,r=t=>{let r=(t+e/60)%6;return Math.round(255*(1-n*Math.max(0,Math.min(r,4-r,1))))};return[r(5),r(3),r(1)]}var mf=[2e3,2700,4e3,6500],hf=[[127,172,255],[215,150,255],[255,158,243],[255,110,84]],gf=Qu`
  from { opacity: 0; transform: translateY(${G(3)}) scale(0.98); }
  to { opacity: 1; transform: none; }
`,_f=Qu`
  from { opacity: 1; transform: none; }
  to { opacity: 0; transform: translateY(${G(2)}) scale(0.98); }
`,vf=Qu`
  from { opacity: 0; }
  to { opacity: 1; }
`,yf=Qu`
  from { opacity: 1; }
  to { opacity: 0; }
`,bf=W.dialog`
  /* The dialog is in the top layer, so none of this is relative to the
     dashboard: no transformed ancestor can offset it and no stacking context
     can bury it. */
  width: ${({$width:e,$full:t})=>t?`calc(100vw - 32px)`:`min(calc(100vw - 32px), ${G(e)})`};
  max-width: ${({$full:e})=>e?`1600px`:`none`};
  /* fit-content, not auto: a modal dialog is positioned with inset: 0, and
     height: auto would stretch it from top to bottom whatever it holds. */
  height: ${({$full:e})=>e?`calc(100dvh - 32px)`:`fit-content`};
  max-height: ${({$full:e})=>e?`none`:`min(calc(100dvh - 32px), 92dvh)`};
  padding: 0;
  border-radius: ${G(1.8)};
  ${Xd(`rgba(24, 24, 28, 0.62)`,28)}
  /* Lifted further than a tile: it floats over the dashboard. */
  box-shadow:
    inset 0 1px 0 rgba(255, 255, 255, 0.1),
    0 ${G(1)} ${G(4)} rgba(0, 0, 0, 0.5);
  color: ${({theme:e})=>e.text.primary};
  font-family: ${({theme:e})=>e.font};
  overflow: hidden;
  /* Its own rule: a modal dialog does not take the dashboard's -- its text
     came out selectable by a long press. */
  user-select: none;
  -webkit-user-select: none;
  -webkit-touch-callout: none;

  /* Showing something that is on: the corner shine of a tile that is on,
     in its colour (--on-color), spread for the bigger glass. */
  &[data-on='true'] {
    --own-sheen: radial-gradient(circle at 0 0, color-mix(in srgb, var(--on-color) 22%, transparent), transparent 360px);
  }

  &[open] {
    display: flex;
    flex-direction: column;
    animation: ${gf} 0.28s cubic-bezier(0.215, 0.61, 0.355, 1);
  }

  &:focus {
    outline: none;
  }

  &::backdrop {
    background: ${({theme:e})=>e.popup.backdrop};
  }

  &[open]::backdrop {
    animation: ${vf} 0.28s ease-out;
  }

  /* On its way out (Popup sets it, then closes when this ends): nothing in
     it takes a tap any more. */
  &[data-closing] {
    animation: ${_f} ${200}ms ease-in forwards;
    pointer-events: none;
  }

  &[data-closing]::backdrop {
    animation: ${yf} ${200}ms ease-in forwards;
  }

  /* Opened over another popup (popupStack): the page is dimmed already, so
     its backdrop only takes the tap that closes it ... */
  &[data-nested]::backdrop {
    background: transparent;
  }

  /* ... and the popup it covers dims instead, as the page beneath it is.
     A filter only while covered: one there always would make the popup the
     box its fixed-position content (a graph's tooltip) is placed in. */
  transition: filter 0.25s ease;

  &[data-covered] {
    filter: brightness(0.45);
  }
`,xf=W.header`
  display: flex;
  align-items: center;
  gap: ${G(.8)};
  padding: ${G(1.2)} ${G(1.2)} ${G(.8)} ${G(1.4)};
  flex-shrink: 0;
`,Sf=W.span`
  display: flex;
  align-items: center;
  justify-content: center;
  width: ${G(3.2)};
  height: ${G(3.2)};
  border-radius: 50%;
  background: ${({theme:e})=>e.bubble.icon};
  font-size: ${G(1.7)};
  color: ${({$color:e})=>e??`inherit`};
  flex-shrink: 0;
`,Cf=W.div`
  flex: 1;
  min-width: 0;

  h2 {
    margin: 0;
    font-size: ${G(1.5)};
    font-weight: 600;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  p {
    font-size: ${G(1)};
    color: ${({theme:e})=>e.text.secondary};
    margin-top: ${G(.15)};
  }
`,wf=W.button`
  width: ${G(3.4)};
  height: ${G(3.4)};
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: ${G(1.8)};
  flex-shrink: 0;
  ${({theme:e})=>Jd(e.bubble.background,e.bubble.pressed)}
`,Tf=W.div`
  flex: 1;
  padding: ${G(.4)} ${G(1.4)} ${G(1.6)};
  font-size: ${G(1.05)};
  overflow-y: ${({$fixed:e})=>e?`hidden`:`auto`};
  /* Vertical only: a notification swiped away slides past the edge, and
     would otherwise give the body a horizontal scrollbar. */
  overflow-x: hidden;
  overscroll-behavior: contain;
  min-height: 0;
  display: flex;
  flex-direction: column;
  gap: ${G(.7)};

  /* Sections keep their size and the body scrolls. A child with its own
     overflow -- the hourly forecast strip -- would otherwise be allowed to
     shrink below its content, and did, to a sliver. */
  > * {
    flex-shrink: 0;
  }
`,Ef=W.div`
  ${Tf} > & {
    flex: 0 1 auto;
  }

  min-height: ${G(6)};
  overflow-y: auto;
  overscroll-behavior: contain;
  scrollbar-width: none;

  &::-webkit-scrollbar {
    display: none;
  }
`,Df=[];function Of(){Df.forEach((e,t)=>{e.toggleAttribute(`data-nested`,t>0),e.toggleAttribute(`data-covered`,t<Df.length-1)})}function kf(e){Df.includes(e)||Df.push(e),Of()}function Af(e){let t=Df.indexOf(e);t>=0&&Df.splice(t,1),e.removeAttribute(`data-covered`),Of()}function jf(e){Af(e),e.removeAttribute(`data-nested`)}var Mf=({open:e,onClose:t,title:n,subtitle:r,icon:i,iconColor:a,glow:o,width:s=50,idleMs:c=12e4,full:l=!1,fixedBody:u=!1,actions:d,children:f})=>{let p=(0,v.useRef)(null),m=X(),[h,g]=(0,v.useState)(e);return e&&!h&&g(!0),(0,v.useEffect)(()=>{let t=p.current;if(t&&(e&&!t.open&&t.isConnected&&(t.setAttribute(`autofocus`,``),t.showModal(),kf(t)),!e&&t.open&&!(`closing`in t.dataset))){t.dataset.closing=``,Af(t);let e=!1,n=()=>{e||(e=!0,t.removeEventListener(`animationend`,r),delete t.dataset.closing,t.close(),jf(t),t.getRootNode().activeElement?.blur(),g(!1))},r=e=>e.target===t&&n();t.addEventListener(`animationend`,r),window.setTimeout(n,300)}}),(0,v.useEffect)(()=>{let e=p.current;return()=>{e&&jf(e)}},[]),(0,v.useEffect)(()=>{let n=p.current;if(!e||!n||!c)return;let r=window.setTimeout(t,c),i=()=>{window.clearTimeout(r),r=window.setTimeout(t,c)};return n.addEventListener(`pointerdown`,i),n.addEventListener(`keydown`,i),n.addEventListener(`scroll`,i,!0),()=>{window.clearTimeout(r),n.removeEventListener(`pointerdown`,i),n.removeEventListener(`keydown`,i),n.removeEventListener(`scroll`,i,!0)}},[e,c,t]),(0,C.jsx)(bf,{ref:p,tabIndex:-1,$width:s,$full:l,"data-on":!!o,style:o?{"--on-color":o}:void 0,onClose:n=>n.target===n.currentTarget&&e&&t(),onCancel:e=>{e.target===e.currentTarget&&(e.preventDefault(),t())},onClick:e=>{e.target===e.currentTarget&&t()},children:h&&(0,C.jsxs)(C.Fragment,{children:[(0,C.jsxs)(xf,{children:[i&&(0,C.jsx)(Sf,{$color:a,children:(0,C.jsx)(Q,{icon:i})}),(0,C.jsxs)(Cf,{children:[(0,C.jsx)(`h2`,{children:n}),r&&(0,C.jsx)(`p`,{children:r})]}),d,(0,C.jsx)(wf,{type:`button`,onClick:t,"aria-label":m(`close`),children:(0,C.jsx)(Q,{icon:`mdi:close`})})]}),(0,C.jsx)(Tf,{$fixed:u,children:f})]})})},Nf=W.button`
  position: relative;
  display: flex;
  align-items: center;
  width: 100%;
  min-width: 0;
  height: ${G(3.4)};
  border-radius: ${G(1.7)};
  background-color: ${({theme:e,$background:t})=>t??e.bubble.background};
  overflow: hidden;
  /* A bubble that is part of a bigger button -- a graph card's header -- keeps that button's hand. */
  cursor: ${({$interactive:e})=>e?`pointer`:`inherit`};
  ${({$interactive:e,theme:t})=>e&&Jd(t.bubble.hover,t.bubble.pressed)}

  /* What it switches is on: as a tile that is on, a shade clearer, with a
     shine in its icon's colour (--on-color) -- from the left, the pill's
     round end, where the tile's comes from its corner. */
  &[data-on='true'] {
    background-color: ${({theme:e})=>e.bubble.on};
    /* Most of the way along the pill, so on reads at a glance. */
    --own-sheen: radial-gradient(ellipse 85% 180% at 0 50%, color-mix(in srgb, var(--on-color, #fff) 22%, transparent), transparent);
    background-image: var(--own-sheen);
  }
`,Pf=W.span`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  width: ${G(2.5)};
  height: ${G(2.5)};
  margin: ${G(.4)};
  border-radius: 50%;
  background-color: ${({theme:e})=>e.bubble.icon};
  overflow: hidden;
  font-size: ${G(1.35)};
  color: ${({theme:e,$color:t})=>t??e.text.primary};
  opacity: ${({$active:e})=>e?1:.6};
  transition:
    opacity 0.3s ease-in-out,
    color 0.3s ease-in-out;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`,Ff=W.span`
  display: flex;
  flex-direction: column;
  justify-content: center;
  min-width: 0;
  flex: 1;
  margin: 0 ${G(1)} 0 ${G(.25)};
  line-height: 1.35;
  pointer-events: none;
`,If=W.span`
  font-size: ${G(.95)};
  font-weight: 600;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`,Lf=W.span`
  font-size: ${G(.88)};
  opacity: 0.7;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`,Rf=W.span`
  display: flex;
  align-items: center;
  gap: ${G(.3)};
  margin-right: ${G(.8)};
  font-size: ${G(.8)};
  color: ${({theme:e})=>e.text.secondary};
  flex-shrink: 0;
`,zf=(0,v.memo)(({name:e,state:t,icon:n,picture:r,active:i=!0,iconColor:a,lit:o=!1,background:s,trailing:c,onClick:l,className:u})=>(0,C.jsxs)(Nf,{as:l?`button`:`span`,type:l?`button`:void 0,onClick:l,$interactive:!!l,$background:s,"data-on":o,style:o&&a?{"--on-color":a}:void 0,className:u,children:[(0,C.jsx)(Pf,{$active:i||!!r,$color:a,children:r?(0,C.jsx)(`img`,{src:r,alt:``}):n?(0,C.jsx)(Q,{icon:n}):null}),(0,C.jsxs)(Ff,{children:[(0,C.jsx)(If,{children:e}),t!=null&&t!==``&&(0,C.jsx)(Lf,{children:t})]}),c&&(0,C.jsx)(Rf,{children:c})]}));function Bf(e,t,n){let r=(0,v.useRef)(null),[i,a]=(0,v.useState)(null),[o,s]=(0,v.useState)(!1),c=(0,v.useRef)({pick:e,onRelease:t}),l=(0,v.useRef)(n);return(0,v.useEffect)(()=>{c.current={pick:e,onRelease:t},l.current=n}),(0,v.useEffect)(()=>{let e=r.current;if(!e)return;let t=null,n,i=0,o=t=>{n=c.current.pick(t,e.getBoundingClientRect()),a({value:n,since:l.current})},u=n=>{n.button===0&&(n.stopPropagation(),t=n.pointerId,e.setPointerCapture(t),window.clearTimeout(i),o(n),s(!0))},d=e=>{e.pointerId===t&&o(e)},f=e=>{e.pointerId===t&&n!==void 0&&(t=null,s(!1),a({value:n,since:l.current}),c.current.onRelease(n),i=window.setTimeout(()=>a(null),4e3))},p=e=>{e.pointerId===t&&(t=null,s(!1),a(null))};return e.addEventListener(`pointerdown`,u),e.addEventListener(`pointermove`,d),e.addEventListener(`pointerup`,f),e.addEventListener(`pointercancel`,p),()=>{window.clearTimeout(i),e.removeEventListener(`pointerdown`,u),e.removeEventListener(`pointermove`,d),e.removeEventListener(`pointerup`,f),e.removeEventListener(`pointercancel`,p)}},[]),{ref:r,value:i&&(o||i.since===n)?i.value:null,dragging:o}}function $(e,t,n){let r=n===`x`?(e.clientX-t.left)/t.width:(t.bottom-e.clientY)/t.height;return Math.min(1,Math.max(0,r))}var Vf=W.div`
  position: relative;
  flex: 1 1 auto;
  min-width: 0;
  height: ${({$height:e})=>G(e)};
  border-radius: ${({$height:e})=>G(e/2)};
  background: ${({theme:e})=>e.bubble.icon};
  overflow: hidden;
  cursor: pointer;
  /* The bar takes the finger, or the page would swipe instead. */
  touch-action: none;

  &:focus-visible {
    outline: 2px solid ${({theme:e})=>e.colors.accent};
  }

  .fill {
    position: absolute;
    inset: 0 auto 0 0;
    background: color-mix(in srgb, ${({$color:e})=>e} 45%, transparent);
    transition: width 0.3s ease;
  }

  &[data-dragging='true'] .fill {
    transition: none;
  }

  /* A grip at the end of the fill, so the level reads as something to drag. */
  .fill::after {
    content: '';
    position: absolute;
    top: 30%;
    bottom: 30%;
    right: ${G(.6)};
    width: ${G(.25)};
    border-radius: ${G(.2)};
    background: ${({$color:e})=>e};
  }

  .fill[data-empty='true']::after {
    display: none;
  }

  /* The number only while dragging, as Better Lighting's card has it. */
  .value {
    position: absolute;
    right: ${G(1.2)};
    top: 50%;
    transform: translateY(-50%);
    font-size: ${G(.95)};
    font-weight: 600;
    font-variant-numeric: tabular-nums;
    pointer-events: none;
  }
`,Hf=(0,v.memo)(({percent:e,color:t,label:n,reported:r,onChange:i,height:a=2.8})=>{let{ref:o,value:s,dragging:c}=Bf((e,t)=>Math.max(1,Math.round($(e,t,`x`)*100)),i,r),l=s??e;return(0,C.jsxs)(Vf,{ref:o,$color:t,$height:a,role:`slider`,tabIndex:0,"aria-label":n,"aria-valuemin":1,"aria-valuemax":100,"aria-valuenow":l,"data-dragging":c,onKeyDown:e=>{(e.key===`ArrowRight`||e.key===`ArrowUp`)&&i(Math.min(100,l+5)),(e.key===`ArrowLeft`||e.key===`ArrowDown`)&&i(Math.max(1,l-5))},children:[(0,C.jsx)(`span`,{className:`fill`,"data-empty":l===0,style:{width:`${l}%`}}),c&&(0,C.jsxs)(`span`,{className:`value`,children:[l,` %`]})]})}),Uf=21,Wf=W.div`
  position: relative;
  width: ${G(8.6)};
  height: ${G(Uf)};
  border-radius: ${G(2.6)};
  background: ${({theme:e})=>e.bubble.icon};
  overflow: hidden;
  cursor: pointer;
  /* The column takes the finger, or the popup would scroll instead. */
  touch-action: none;
  box-shadow: inset 0 0 0 1px rgba(255, 255, 255, 0.06);

  &:focus-visible {
    outline: 2px solid ${({theme:e})=>e.colors.accent};
  }

  .fill {
    position: absolute;
    inset: auto 0 0 0;
    background: color-mix(in srgb, ${({$color:e})=>e} 55%, transparent);
    transition: height 0.3s ease;
  }

  &[data-dragging='true'] .fill,
  &[data-dragging='true'] .marker {
    transition: none;
  }

  /* A grip at the top of the fill, so the level reads as something to drag. */
  .fill::after {
    content: '';
    position: absolute;
    top: ${G(.9)};
    left: 36%;
    right: 36%;
    height: ${G(.3)};
    border-radius: ${G(.2)};
    background: ${({$color:e})=>e};
  }

  .fill[data-empty='true']::after {
    display: none;
  }

  /* On the white: a bar across it where it is set. */
  .marker {
    position: absolute;
    left: ${G(1.2)};
    right: ${G(1.2)};
    height: ${G(.5)};
    border-radius: ${G(.3)};
    background: #fff;
    box-shadow: 0 1px 4px rgba(0, 0, 0, 0.45);
    transform: translateY(50%);
    transition: bottom 0.3s ease;
  }
`,Gf=W.div`
  position: relative;
  width: ${G(Uf)};
  height: ${G(Uf)};
  border-radius: 50%;
  /* White in the middle over the hues, red to the right and on clockwise. */
  background:
    radial-gradient(circle closest-side, #fff, rgba(255, 255, 255, 0)), conic-gradient(from 90deg, #f00, #ff0, #0f0, #0ff, #00f, #f0f, #f00);
  cursor: pointer;
  touch-action: none;

  .marker {
    position: absolute;
    width: ${G(2.2)};
    height: ${G(2.2)};
    border-radius: 50%;
    border: 3px solid #fff;
    box-shadow: 0 1px 6px rgba(0, 0, 0, 0.5);
    box-sizing: border-box;
    transform: translate(-50%, -50%);
    pointer-events: none;
  }
`,Kf=(0,v.memo)(({label:e,reported:t,percent:n,color:r,min:i=1,onChange:a})=>{let{ref:o,value:s,dragging:c}=Bf((e,t)=>Math.max(i,Math.round($(e,t,`y`)*100)),a,t),l=s??n;return(0,C.jsx)(Wf,{ref:o,$color:r,role:`slider`,tabIndex:0,"aria-label":e,"aria-orientation":`vertical`,"aria-valuemin":i,"aria-valuemax":100,"aria-valuenow":l,"data-dragging":c,onKeyDown:e=>{(e.key===`ArrowUp`||e.key===`ArrowRight`)&&a(Math.min(100,l+5)),(e.key===`ArrowDown`||e.key===`ArrowLeft`)&&a(Math.max(i,l-5))},children:(0,C.jsx)(`span`,{className:`fill`,"data-empty":l===0,style:{height:`${l}%`}})})}),qf=(0,v.memo)(({label:e,reported:t,kelvin:n,min:r,max:i,onChange:a})=>{let{ref:o,value:s,dragging:c}=Bf((e,t)=>df($(e,t,`y`),r,i),a,t),l=s??n,u=[0,.25,.5,.75,1].map(e=>`rgb(${rf(r+e*(i-r)).join(`, `)})`);return(0,C.jsx)(Wf,{ref:o,$color:`#fff`,style:{background:`linear-gradient(to bottom, ${u.join(`, `)})`},role:`slider`,tabIndex:0,"aria-label":e,"aria-orientation":`vertical`,"aria-valuemin":r,"aria-valuemax":i,"aria-valuenow":l,"data-dragging":c,onKeyDown:e=>{let t=Math.max(50,Math.round((i-r)/20/50)*50),n=l??r;e.key===`ArrowUp`&&a(Math.max(r,n-t)),e.key===`ArrowDown`&&a(Math.min(i,n+t))},children:l!==void 0&&(0,C.jsx)(`span`,{className:`marker`,style:{bottom:`calc(${G(.6)} + ${ff(l,r,i)} * (100% - ${G(1.2)}))`}})})}),Jf=(0,v.memo)(({label:e,reported:t,hs:n,onChange:r})=>{let{ref:i,value:a}=Bf((e,t)=>lf(e.clientX-(t.left+t.width/2),e.clientY-(t.top+t.height/2),t.width/2),r,t),o=a??n,s=o?uf(o,50):null;return(0,C.jsx)(Gf,{ref:i,role:`slider`,tabIndex:0,"aria-label":e,"aria-valuetext":o?`${o[0]}°, ${o[1]} %`:void 0,children:s&&o&&(0,C.jsx)(`span`,{className:`marker`,style:{left:`${50+s.x}%`,top:`${50+s.y}%`,background:`rgb(${pf(o).join(`, `)})`}})})}),Yf=W.div`
  display: grid;
  grid-template-columns: ${({$side:e})=>e?`auto minmax(0, 1fr)`:`auto`};
  justify-content: ${({$side:e})=>e?`stretch`:`center`};
  gap: ${G(2.4)};
  align-items: start;

  .control {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: ${G(1.4)};
    min-width: ${G(21)};
  }

  .modes {
    display: flex;
    align-items: center;
    gap: ${G(.4)};
    padding: ${G(.4)};
    border-radius: ${G(2.2)};
    background: ${({theme:e})=>e.bubble.background};
  }

  .divider {
    width: 1px;
    align-self: stretch;
    margin: ${G(.4)} ${G(.2)};
    background: rgba(255, 255, 255, 0.12);
  }

  .mode {
    width: ${G(3.4)};
    height: ${G(3.4)};
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: ${G(1.45)};
    color: ${({theme:e})=>e.text.secondary};
    ${({theme:e})=>Jd(e.bubble.hover,e.bubble.pressed)}
  }

  .mode[data-selected='true'] {
    color: ${({theme:e})=>e.text.primary};
    background-color: ${({theme:e})=>e.bubble.pressed};
    box-shadow: inset 0 0 0 2px rgba(255, 255, 255, 0.8);
  }

  .mode.power[aria-pressed='true'] {
    color: ${({theme:e})=>e.colors.warm};
  }

  /* The colour and white modes drawn as what they set, as Home Assistant's are. */
  .swatch {
    width: ${G(1.7)};
    height: ${G(1.7)};
    border-radius: 50%;
  }

  .swatch.wheel {
    background:
      radial-gradient(circle closest-side, #fff, rgba(255, 255, 255, 0)),
      conic-gradient(from 90deg, #f00, #ff0, #0f0, #0ff, #00f, #f0f, #f00);
  }

  .swatch.white {
    background: linear-gradient(to bottom, rgb(${rf(2e3).join(`, `)}), #fff, rgb(${rf(6500).join(`, `)}));
  }

  .side {
    display: flex;
    flex-direction: column;
    gap: ${G(1.6)};
    min-width: 0;
  }

  .side h3 {
    margin: 0 0 ${G(.2)};
    font-size: ${G(1.05)};
    font-weight: 600;
    color: ${({theme:e})=>e.text.secondary};
  }

  .presets {
    display: grid;
    grid-template-columns: repeat(4, ${G(3.4)});
    gap: ${G(1)};
  }

  .preset {
    width: ${G(3.4)};
    height: ${G(3.4)};
    border-radius: 50%;
    box-shadow: inset 0 0 0 1px rgba(255, 255, 255, 0.15);
    transition: transform 0.15s ease;
  }

  .preset:active {
    transform: scale(0.9);
  }

  .members {
    display: flex;
    flex-direction: column;
    gap: ${G(.6)};
  }

  .member {
    display: grid;
    grid-template-columns: minmax(0, 1fr) minmax(0, 1.1fr);
    gap: ${G(.6)};
    align-items: center;
  }

  /* Off, a lamp has no level to show: its row is only the switch. */
  .member[data-on='false'] {
    grid-template-columns: minmax(0, 1fr);
  }
`,Xf=(0,v.memo)(({entityId:e})=>{let t=X(),n=Ru(),r=J(e),i=Z();if(!r)return null;let a=r.state===`on`,o=r.attributes,s=af(o)??n.colors.warm,c=of(a,o.brightness),l=cf(o.supported_color_modes);return(0,C.jsxs)(`div`,{className:`member`,"data-on":a,children:[(0,C.jsx)(zf,{name:o.friendly_name??e,state:a?l.brightness?`${c} %`:t(`on`):t(`off`),icon:o.icon??`mdi:lightbulb`,active:a,lit:a,iconColor:a?s:void 0,onClick:()=>void i(`light`,`toggle`,void 0,{entity_id:e})}),a&&l.brightness&&(0,C.jsx)(Hf,{percent:c,color:s,height:3.4,label:t(`brightness`),reported:r.last_updated,onChange:t=>void i(`light`,`turn_on`,{brightness_pct:t},{entity_id:e})})]})}),Zf=({entityId:e,presets:t})=>{let n=X(),r=Ru(),i=J(e),a=Z(),o=i?.attributes??{},s=cf(o.supported_color_modes),[c,l]=(0,v.useState)(()=>s.brightness?`brightness`:s.color?`color`:s.temperature?`temperature`:`brightness`);if(!i)return(0,C.jsx)(`p`,{children:n(`not_found`)});let u=i.state===`on`,d=af(o)??r.colors.warm,f=of(u,o.brightness),p=t=>void a(`light`,`turn_on`,t,{entity_id:e}),m=(o.entity_id??[]).filter(t=>t.startsWith(`light.`)&&t!==e),h=o.min_color_temp_kelvin??2e3,g=o.max_color_temp_kelvin??6500,_=t?[...(s.temperature?mf.filter(e=>e>=h&&e<=g):[]).map(e=>({key:`k${e}`,color:`rgb(${rf(e).join(`, `)})`,apply:()=>p({color_temp_kelvin:e})})),...(s.color?hf:[]).map(e=>({key:e.join(`,`),color:`rgb(${e.join(`, `)})`,apply:()=>p({rgb_color:e})}))]:[],y=m.length>0,b=c===`color`&&!s.color||c===`temperature`&&!s.temperature?`brightness`:c;return(0,C.jsxs)(Yf,{$side:y,children:[(0,C.jsxs)(`div`,{className:`control`,children:[b===`color`?(0,C.jsx)(Jf,{label:n(`light_color`),reported:i.last_updated,hs:u?o.hs_color:void 0,onChange:e=>p({hs_color:e})}):b===`temperature`?(0,C.jsx)(qf,{label:n(`light_temperature`),reported:i.last_updated,kelvin:u?o.color_temp_kelvin:void 0,min:h,max:g,onChange:e=>p({color_temp_kelvin:e})}):s.brightness&&(0,C.jsx)(Kf,{label:n(`brightness`),reported:i.last_updated,percent:f,color:d,onChange:e=>p({brightness_pct:e})}),(0,C.jsxs)(`div`,{className:`modes`,children:[(0,C.jsx)(`button`,{type:`button`,className:`mode power`,"aria-pressed":u,"aria-label":n(`light_power`),"data-tip":n(`light_power`),onClick:()=>void a(`light`,`toggle`,void 0,{entity_id:e}),children:(0,C.jsx)(Q,{icon:`mdi:power`})}),(s.color||s.temperature)&&(0,C.jsx)(`span`,{className:`divider`}),s.brightness&&(s.color||s.temperature)&&(0,C.jsx)(`button`,{type:`button`,className:`mode`,"data-selected":b===`brightness`,"aria-label":n(`brightness`),"data-tip":n(`brightness`),onClick:()=>l(`brightness`),children:(0,C.jsx)(Q,{icon:`mdi:brightness-6`})}),s.color&&(0,C.jsx)(`button`,{type:`button`,className:`mode`,"data-selected":b===`color`,"aria-label":n(`light_color`),"data-tip":n(`light_color`),onClick:()=>l(`color`),children:(0,C.jsx)(`span`,{className:`swatch wheel`})}),s.temperature&&(0,C.jsx)(`button`,{type:`button`,className:`mode`,"data-selected":b===`temperature`,"aria-label":n(`light_temperature`),"data-tip":n(`light_temperature`),onClick:()=>l(`temperature`),children:(0,C.jsx)(`span`,{className:`swatch white`})})]}),_.length>0&&(0,C.jsx)(`div`,{className:`presets`,children:_.map(e=>(0,C.jsx)(`button`,{type:`button`,className:`preset`,style:{background:e.color},"aria-label":e.color,onClick:e.apply},e.key))})]}),y&&(0,C.jsx)(`div`,{className:`side`,children:m.length>0&&(0,C.jsxs)(`div`,{children:[(0,C.jsx)(`h3`,{children:n(`light_members`)}),(0,C.jsx)(`div`,{className:`members`,children:m.map(e=>(0,C.jsx)(Xf,{entityId:e},e))})]})})]})},Qf=(0,v.memo)(({open:e,onClose:t,entityId:n,name:r,icon:i,presets:a=!0})=>{let o=X(),s=Ru(),c=J(n),l=c?.attributes??{},u=c?.state===`on`,d=cf(l.supported_color_modes),f=of(u,l.brightness),p=u?af(l)??s.colors.warm:void 0,m=c?u?d.brightness?`${o(`on`)} · ${f} %`:o(`on`):o(`off`):o(`not_found`),h=(l.entity_id??[]).some(e=>e.startsWith(`light.`)&&e!==n);return(0,C.jsx)(Mf,{open:e,onClose:t,title:r,subtitle:m,icon:i,iconColor:p,glow:p,width:h?68:34,children:(0,C.jsx)(Zf,{entityId:n,presets:a})})}),$f=new Set([`on`,`open`,`opening`,`unlocked`,`playing`,`heat`,`cool`,`heat_cool`,`auto`,`home`]),ep=W(ef).attrs({as:`button`,type:`button`})`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: ${G(.8)};
  text-align: left;
  ${$d}

  .icon {
    width: ${G(2.8)};
    height: ${G(2.8)};
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: ${G(1.4)};
    /* On: the icon in the light's own colour, on a wash of it. */
    background: ${({$active:e,$glow:t,theme:n})=>e?`color-mix(in srgb, ${t??n.colors.warm} 22%, transparent)`:n.bubble.icon};
    color: ${({$active:e,$glow:t,theme:n})=>e?t??n.colors.warm:n.text.secondary};
    transition:
      background 0.3s ease,
      color 0.3s ease;
  }

  .name {
    font-size: ${G(1.05)};
    font-weight: 600;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
  }

  .state {
    font-size: ${G(.95)};
    color: ${({theme:e})=>e.text.secondary};
  }
`,tp=(0,v.memo)(({tile:e})=>{let t=J(e.entity||void 0),n=Z(),r=X(),[i,a]=(0,v.useState)(!1),o=e.entity.startsWith(`light.`),s=t?$f.has(t.state):!1,c=s?af(t?.attributes):void 0,l=t?t.state===`on`?r(`on`):t.state===`off`?r(`off`):t.state:r(`not_found`),u=e.name||t?.attributes.friendly_name||e.entity,d=e.icon||t?.attributes.icon||od(e.entity),f=nf(()=>{let[t,r]=cd(e.entity);n(t,r,void 0,{entity_id:e.entity})},o?()=>a(!0):void 0);return(0,C.jsxs)(C.Fragment,{children:[(0,C.jsxs)(ep,{$active:s,$glow:c,"data-on":s,style:c?{"--on-color":c}:void 0,disabled:!t,onClick:f,children:[(0,C.jsx)(`span`,{className:`icon`,children:(0,C.jsx)(Q,{icon:d})}),(0,C.jsxs)(`span`,{children:[(0,C.jsx)(`div`,{className:`name`,children:u}),(0,C.jsx)(`div`,{className:`state`,children:l})]})]}),o&&(0,C.jsx)(Qf,{open:i,onClose:()=>a(!1),entityId:e.entity,name:u,icon:d,presets:e.options.hide_presets!==!0})]})}),np=36e5;function rp(e,t,n,r){let i=[];for(let a of e){let e=(r-a.t)/np*n-t*n;if(e<0){let t=Math.floor(Math.abs(e));(i[t]??=[]).push(a)}else i[0]=[a]}return i.length=Math.ceil(t*n),i}var ip=e=>e.reduce((e,t)=>e+t.v,0)/e.length;function ap(e,t){let n=t.width??500,r=t.height??100,i=t.fill?0:t.lineWidth,a=t.lineWidth,o=n-i*2,s=r-a*4,c=t.smoothing??!0,l=t.now??Date.now(),u=e.filter(e=>Number.isFinite(e.v));if(!u.length)return null;let d=rp(u,t.hours,t.pointsPerHour,l),f=o/(t.hours*t.pointsPerHour-1);f=Number.isFinite(f)?f:o;let p=d.find(Boolean),m=l-t.hours*np,h=np/t.pointsPerHour,g=[];for(let e=0;e<d.length;e+=1){let t=f*e+i,n=m+(e+.5)*h,r=d[e];r?(p=r,g.push([t,ip(r),n])):g.push([t,p[p.length-1].v,n])}g.length===1&&g.push([o+i,g[0][1],l]);let _=g.map(([,e])=>e),v=Math.min(..._),y=Math.max(..._),b=(y-v)/s||1,x=g.map(([e,t,n])=>({x:e,y:s-(t-v)/b+a*2,v:t,t:n})),S=(e,t)=>({x:(e.x-t.x)/2+t.x,y:(e.y-t.y)/2+t.y}),C=e=>Math.round(e*100)/100,ee=`M${C(x[0].x)},${C(x[0].y)}`,w=x[0];for(let e of x){let t=c?S(w,e):e;ee+=` ${C(t.x)},${C(t.y)} Q ${C(e.x)},${C(e.y)}`,w=e}ee+=` ${C(w.x)},${C(w.y)}`;let te=`${ee} L ${C(o-i*2)}, ${r} L ${C(x[0].x)}, ${r} z`,T=c?x.slice(1).map((e,t)=>({...S(x[t],e),v:(x[t].v+e.v)/2,t:(x[t].t+e.t)/2})):x;return{width:n,height:r,line:ee,fill:te,points:T,min:v,max:y}}function op(e){let t=e.filter(e=>Number.isFinite(e.v));if(!t.length)return null;let n=t[0],r=t[0];for(let e of t)e.v<n.v&&(n=e),e.v>r.v&&(r=e);return{min:n,max:r}}function sp(e){let t=e.filter(Number.isFinite);return t.length?{min:Math.min(...t),max:Math.max(...t)}:null}var cp=W.div`
  position: absolute;
  z-index: 2;
  transform: translate(-50%, calc(-100% - ${G(.9)}));
  padding: ${G(.25)} ${G(.6)};
  border-radius: ${G(.6)};
  background: rgba(18, 18, 22, 0.85);
  border: 1px solid rgba(255, 255, 255, 0.1);
  color: ${({theme:e})=>e.text.primary};
  font-size: ${G(.9)};
  font-weight: 500;
  white-space: nowrap;
  pointer-events: none;
`,lp=Qu`
  0% { opacity: 0; stroke-dashoffset: 1; }
  25% { opacity: 1; }
  100% { opacity: 1; stroke-dashoffset: 0; }
`,up=Qu`
  0% { opacity: 0; }
  100% { opacity: 0.15; }
`,dp=Qu`
  0% { opacity: 0; }
  100% { opacity: 1; }
`,fp=W.div`
  position: relative;
  width: 100%;
  height: 100%;
  min-height: 0;

  /* A graph that answers a finger keeps vertical swipes for the popup. */
  &[data-inspectable] {
    touch-action: pan-y;
  }

  .inspect {
    pointer-events: none;
  }

  svg {
    position: absolute;
    inset: 0;
    width: 100%;
    height: 100%;
    display: block;
    overflow: hidden;
  }

  path {
    stroke-linecap: round;
    stroke-linejoin: round;
  }

  .line {
    stroke-dasharray: 1;
    animation: ${lp} 1s cubic-bezier(0.215, 0.61, 0.355, 1) forwards;
  }

  .fill {
    opacity: 0;
    animation: ${up} 0.5s cubic-bezier(0.215, 0.61, 0.355, 1) forwards;
  }

  .points {
    opacity: 0;
    animation: ${dp} 0.5s cubic-bezier(0.215, 0.61, 0.355, 1) 0.5s forwards;
  }
`,pp=W.div`
  position: absolute;
  inset: ${G(.3)} auto ${G(.3)} ${G(.8)};
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  font-size: ${G(.85)};
  font-weight: 500;
  color: ${({theme:e})=>e.text.primary};
  pointer-events: none;
  z-index: 1;

  /* A dark chip under each, so it reads over the line and the fill alike. */
  span {
    background: rgba(18, 18, 22, 0.72);
    backdrop-filter: blur(6px);
    -webkit-backdrop-filter: blur(6px);
    border-radius: ${G(.5)};
    padding: ${G(.05)} ${G(.45)};
  }
`,mp=(0,v.memo)(({samples:e,hours:t,pointsPerHour:n=.5,color:r,lineWidth:i=5,fill:a=!0,showPoints:o=!1,labels:s,tooltip:c,className:l})=>{let u=(0,v.useRef)(null),[d,f]=(0,v.useState)(.25),[p,m]=(0,v.useState)(null),h=(0,v.useId)();(0,v.useLayoutEffect)(()=>{let e=u.current;if(!e)return;let t=()=>{let{width:t,height:n}=e.getBoundingClientRect();t&&n&&f(Math.round(n/t*1e3)/1e3)};t();let n=new ResizeObserver(t);return n.observe(e),()=>n.disconnect()},[]);let g=Math.max(20,500*d),_=(0,v.useMemo)(()=>ap(e,{hours:t,pointsPerHour:n,lineWidth:i,fill:a,height:g}),[e,t,n,i,a,g]),y=e=>{if(!_||!c||!_.points.length)return;let t=e.currentTarget.getBoundingClientRect(),n=(e.clientX-t.left)/t.width*500,r=0;_.points.forEach((e,t)=>{Math.abs(e.x-n)<Math.abs(_.points[r].x-n)&&(r=t)}),m(r)},b=_&&p!==null?_.points[p]:void 0;return(0,C.jsxs)(fp,{ref:u,className:l,"data-inspectable":c?``:void 0,onPointerMove:c?y:void 0,onPointerDown:c?y:void 0,onPointerLeave:c?e=>e.pointerType===`mouse`&&m(null):void 0,children:[_&&(0,C.jsxs)(`svg`,{viewBox:`0 0 500 ${_.height}`,preserveAspectRatio:`none`,"aria-hidden":`true`,children:[a&&(0,C.jsx)(`path`,{className:`fill`,d:_.fill,fill:r}),(0,C.jsx)(`path`,{className:`line`,d:_.line,fill:`none`,stroke:r,strokeWidth:i,pathLength:1}),o&&(0,C.jsx)(`g`,{className:`points`,fill:`rgba(30, 30, 34, 1)`,stroke:r,strokeWidth:i/2,children:_.points.map((e,t)=>(0,C.jsx)(`circle`,{cx:e.x,cy:e.y,r:i},`${h}-${t}`))}),b&&(0,C.jsxs)(`g`,{className:`inspect`,children:[(0,C.jsx)(`line`,{x1:b.x,x2:b.x,y1:0,y2:_.height,stroke:`rgba(255, 255, 255, 0.25)`,strokeWidth:1,vectorEffect:`non-scaling-stroke`}),(0,C.jsx)(`circle`,{cx:b.x,cy:b.y,r:i*1.6,fill:r,stroke:`#fff`,strokeWidth:i/2})]})]}),_&&b&&c&&(0,C.jsx)(cp,{style:{left:`${Math.min(88,Math.max(12,b.x/500*100))}%`,top:`${b.y/_.height*100}%`},children:c(b)}),_&&s&&(0,C.jsxs)(pp,{children:[(0,C.jsx)(`span`,{children:s(_.max)}),(0,C.jsx)(`span`,{children:s(_.min)})]})]})}),hp=W.div`
  position: relative;
  display: flex;
  gap: ${G(.3)};

  button {
    position: relative;
    z-index: 1;
    padding: ${G(.3)} ${G(.7)};
    border-radius: ${G(1)};
    font-size: ${G(.96)};
    color: ${({theme:e})=>e.text.secondary};
    transition: color 0.25s ease;
  }

  button[aria-pressed='true'] {
    color: ${({theme:e})=>e.text.primary};
  }

  /* The chosen one's background, one element behind them all: it slides
     from the old choice to the new rather than jumping. */
  .thumb {
    position: absolute;
    top: 0;
    left: 0;
    border-radius: ${G(1)};
    background: ${({theme:e})=>e.bubble.header};
    transition:
      transform 0.3s cubic-bezier(0.3, 0, 0.2, 1),
      width 0.3s cubic-bezier(0.3, 0, 0.2, 1);
    pointer-events: none;
  }
`;function gp({options:e,value:t,onChange:n,label:r}){let i=(0,v.useRef)(null),a=(0,v.useRef)(null),o=(0,v.useRef)(!1);return(0,v.useLayoutEffect)(()=>{let e=i.current,t=a.current;if(!e||!t)return;let n=()=>{let n=e.querySelector(`button[aria-pressed="true"]`);n&&(o.current||(t.style.transition=`none`),t.style.width=`${n.offsetWidth}px`,t.style.height=`${n.offsetHeight}px`,t.style.transform=`translate(${n.offsetLeft}px, ${n.offsetTop}px)`,o.current||=(t.offsetWidth,t.style.transition=``,!0))};n();let r=new ResizeObserver(n);return r.observe(e),()=>r.disconnect()},[t]),(0,C.jsxs)(hp,{ref:i,role:`group`,"aria-label":r,children:[(0,C.jsx)(`span`,{ref:a,className:`thumb`,"aria-hidden":`true`}),e.map(e=>(0,C.jsx)(`button`,{type:`button`,"aria-pressed":e.value===t,onClick:()=>n(e.value),children:e.label},e.value))]})}function _p(e){let[t,n]=(0,v.useState)(()=>Date.now());return(0,v.useEffect)(()=>{let t,r=()=>{let i=e-Date.now()%e+20;t=window.setTimeout(()=>{n(Date.now()),r()},i)};r();let i=()=>{document.visibilityState===`visible`&&n(Date.now())};return document.addEventListener(`visibilitychange`,i),()=>{window.clearTimeout(t),document.removeEventListener(`visibilitychange`,i)}},[e]),t}var vp=[];function yp(e,t){let[n,r]=(0,v.useState)({key:null,samples:[]}),i=_p(6e5),a=e?`${e}|${t}`:null;ld(a,()=>({type:`history/stream`,entity_ids:[e],start_time:new Date(Date.now()-t*36e5).toISOString(),minimal_response:!0,no_attributes:!0,significant_changes_only:!1}),t=>{let n=(t.states?.[e]??[]).map(e=>({t:(e.lc??e.lu)*1e3,v:Number(e.s)})).filter(e=>Number.isFinite(e.v));r(e=>({key:a,samples:[...e.key===a?e.samples:[],...n].sort((e,t)=>e.t-t.t)}))});let o=n.key===a?n.samples:vp;return(0,v.useMemo)(()=>{let e=i-t*36e5,n=o.findIndex(t=>t.t>=e);return n===-1&&(n=o.length),o.slice(Math.max(0,n-1))},[o,i,t])}var bp=new Set([`unavailable`,`unknown`,``]);function xp(e){return e!=null&&!bp.has(e)}function Sp(e){if(!xp(e))return null;let t=Number(e);return Number.isFinite(t)?t:null}var Cp=new Set([`de`,`fr`,`cs`,`da`,`fi`,`nb`,`no`,`pl`,`ru`,`sk`,`sv`,`uk`,`es`,`bg`]);function wp(e,t){return!e||e===`°`?``:e===`%`?Cp.has(t.split(`-`)[0])?` `:``:` `}function Tp(e,t,n=1,r=0){return new Intl.NumberFormat(t,{maximumFractionDigits:n,minimumFractionDigits:Math.min(r,n)}).format(e)}function Ep(e,t,n,r){let i=Sp(e);if(i===null)return xp(e)?e:`–`;let a=Tp(i,n,r??1,r??0);return t?`${a}${wp(t,n)}${t}`:a}function Dp(e,t){let n=Math.max(0,Math.round(e)),r=Math.floor(n/60),i=n%60,a=(e,n)=>new Intl.NumberFormat(t,{style:`unit`,unit:n,unitDisplay:`short`}).format(e);return r?i?`${a(r,`hour`)} ${a(i,`minute`)}`:a(r,`hour`):a(i,`minute`)}function Op(e,t){let n=Sp(e);if(n===null)return null;switch(t){case`s`:return n/60;case`h`:return n*60;case`d`:return n*1440;default:return n}}function kp(e,t,n){return new Intl.DateTimeFormat(t,{hour:`2-digit`,minute:`2-digit`,hour12:n}).format(e)}function Ap(e,t){return new Intl.DateTimeFormat(t,{day:`2-digit`,month:`2-digit`,year:`numeric`}).format(e)}function jp(e,t,n=`short`){return new Intl.DateTimeFormat(t,{weekday:n}).format(e).replace(/\.$/,``)}function Mp(e,t,n=Date.now()){let r=Math.round((e.getTime()-n)/1e3),i=new Intl.RelativeTimeFormat(t,{numeric:`auto`}),a=Math.abs(r);return a<60?i.format(r,`second`):a<3600?i.format(Math.round(r/60),`minute`):a<86400?i.format(Math.round(r/3600),`hour`):i.format(Math.round(r/86400),`day`)}function Np(e){let t=new Date(e);return t.setHours(0,0,0,0),t}function Pp(e,t){let n=new Date(e);return n.setDate(n.getDate()+t),n}var Fp=[6,24,72,168],Ip=W.div`
  display: flex;
  align-items: baseline;
  justify-content: space-between;
  gap: ${G(1)};

  strong {
    font-size: ${G(3.12)};
    font-weight: 400;
  }
`,Lp=W.div`
  height: ${G(11)};

  svg {
    border-radius: ${G(1.2)};
  }
`,Rp=W.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: ${G(.6)};

  div {
    background: ${({theme:e})=>e.bubble.background};
    border-radius: ${G(1)};
    padding: ${G(.6)} ${G(.8)};
    display: flex;
    flex-direction: column;
    gap: ${G(.15)};
  }

  span {
    font-size: ${G(.9)};
    color: ${({theme:e})=>e.text.secondary};
  }

  strong {
    font-size: ${G(1.26)};
    font-weight: 600;
  }
`,zp=({open:e,onClose:t,entityId:n,name:r,icon:i,color:a})=>{let o=J(n),s=Y(),c=o?Mp(new Date(o.last_changed),s):void 0;return(0,C.jsx)(Mf,{open:e,onClose:t,title:r,subtitle:c,icon:i,iconColor:a,width:58,children:(0,C.jsx)(Bp,{entityId:n,color:a})})},Bp=({entityId:e,color:t})=>{let[n,r]=(0,v.useState)(24),i=J(e),a=rd(e),o=Y(),s=X(),c=yp(e,n),l=_p(6e4),u=i?.attributes.unit_of_measurement,d=e=>Ep(String(e),u,o,a),f=(0,v.useMemo)(()=>op(c),[c]),p=(0,v.useMemo)(()=>{if(c.length<2)return c[0]?.v;let e=l-n*36e5,t=0,r=0;return c.forEach((n,i)=>{let a=Math.max(n.t,e),o=i+1<c.length?c[i+1].t:l;o>a&&(t+=n.v*(o-a),r+=o-a)}),r?t/r:void 0},[c,n,l]),m=e=>{let t=new Date(e);return new Date().toDateString()===t.toDateString()?kp(t,o):`${t.toLocaleDateString(o,{weekday:`short`})} ${kp(t,o)}`};return(0,C.jsxs)(C.Fragment,{children:[(0,C.jsxs)(Ip,{children:[(0,C.jsx)(`strong`,{children:Ep(i?.state,u,o,a)}),(0,C.jsx)(gp,{label:s(`history`),value:n,onChange:r,options:Fp.map(e=>({value:e,label:e<48?`${e} h`:`${e/24} d`}))})]}),(0,C.jsx)(Lp,{children:(0,C.jsx)(mp,{samples:c,hours:n,pointsPerHour:n<=24?1:24/n,lineWidth:3,color:t,showPoints:!0,labels:d,tooltip:e=>`${d(e.v)} · ${m(e.t)}`})}),(0,C.jsxs)(Rp,{children:[(0,C.jsxs)(`div`,{children:[(0,C.jsxs)(`span`,{children:[s(`lowest`),f?` · ${m(f.min.t)}`:``]}),(0,C.jsx)(`strong`,{children:f?d(f.min.v):`–`})]}),(0,C.jsxs)(`div`,{children:[(0,C.jsx)(`span`,{children:s(`average`)}),(0,C.jsx)(`strong`,{children:f&&p!==void 0?d(p):`–`})]}),(0,C.jsxs)(`div`,{children:[(0,C.jsxs)(`span`,{children:[s(`highest`),f?` · ${m(f.max.t)}`:``]}),(0,C.jsx)(`strong`,{children:f?d(f.max.v):`–`})]})]})]})},Vp=W(ef).attrs({as:`button`,type:`button`})`
  display: flex;
  flex-direction: column;
  text-align: left;
  ${$d}

  /* The head every card has: its icon in a circle, the name over the value. */
  .head {
    display: flex;
    align-items: center;
    gap: ${G(.8)};
    min-width: 0;
    padding: ${G(.8)} ${G(.8)} 0;
  }

  .icon {
    flex: none;
    width: ${G(2.8)};
    height: ${G(2.8)};
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: ${G(1.4)};
    /* A reading is neither on nor off: its icon in the plain, unlit style. */
    background: ${({theme:e})=>e.bubble.icon};
    color: ${({theme:e})=>e.text.secondary};
  }

  .text {
    display: flex;
    flex-direction: column;
    gap: ${G(.3)};
    min-width: 0;
  }

  .name {
    font-size: ${G(1.05)};
    font-weight: 600;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  .value {
    font-size: ${G(.95)};
    color: ${({theme:e})=>e.text.secondary};
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  .graph {
    flex: 1;
    min-height: ${G(1.5)};
    pointer-events: none;
  }
`,Hp=(0,v.memo)(({tile:e})=>{let t=J(e.entity||void 0),n=rd(e.entity||void 0),r=Y(),i=Ru(),[a,o]=(0,v.useState)(!1),s=typeof e.options.hours==`number`?e.options.hours:24,c=typeof e.options.color==`string`?e.options.color:i.colors.temperature,l=yp(e.entity||void 0,s),u=e.name||t?.attributes.friendly_name||e.entity,d=t?.attributes.device_class,f=e.icon||t?.attributes.icon||(d===`temperature`?`mdi:thermometer`:d===`humidity`?`mdi:water-percent`:`mdi:chart-line`);return(0,C.jsxs)(C.Fragment,{children:[(0,C.jsxs)(Vp,{onClick:()=>o(!0),disabled:!e.entity,children:[(0,C.jsxs)(`span`,{className:`head`,children:[(0,C.jsx)(`span`,{className:`icon`,children:(0,C.jsx)(Q,{icon:f})}),(0,C.jsxs)(`span`,{className:`text`,children:[(0,C.jsx)(`span`,{className:`name`,children:u}),(0,C.jsx)(`span`,{className:`value`,children:Ep(t?.state,t?.attributes.unit_of_measurement,r,n)})]})]}),(0,C.jsx)(`span`,{className:`graph`,children:(0,C.jsx)(mp,{samples:l,hours:s,color:c})})]}),e.entity&&(0,C.jsx)(zp,{open:a,onClose:()=>o(!1),entityId:e.entity,name:u,icon:f,color:c})]})});function Up(e){return R(t=>{let n=e?t.entitiesRegistryDisplay[e]?.device_id:void 0;if(n)return Object.values(t.entitiesRegistryDisplay).find(e=>e.device_id===n&&e.entity_id.startsWith(`select.`))?.entity_id})}function Wp(e,t){if(!e)return null;let n=Math.round((Date.parse(e)-t)/1e3);return Number.isFinite(n)&&n>0?n:null}function Gp(e){let t=e=>String(e).padStart(2,`0`),n=Math.floor(e/60);return n<60?`${n}:${t(e%60)}`:`${Math.floor(n/60)}h ${t(n%60)}m`}function Kp(e,t,n){if(!e.length)return;let r=t===void 0?-1:e.indexOf(t);return r<0?n>0?e[0]:e[e.length-1]:e[(r+n+e.length)%e.length]}function qp(e,t,n){let r=[];return e.bl_presence===!0&&r.push(`presence`),e.bl_presence===!1&&r.push(`nobody`),e.bl_night===!0&&r.push(`night`),e.bl_simulating===!0&&r.push(`simulating`),t&&!n&&e.bl_held_by_hand!==void 0&&r.push(e.bl_held_by_hand?`by_hand`:`automatic`),r}var Jp={presence:{icon:`mdi:motion-sensor`,label:`bl_presence`},nobody:{icon:`mdi:motion-sensor-off`,label:`bl_nobody`},night:{icon:`mdi:weather-night`,label:`bl_night`},simulating:{icon:`mdi:home-clock`,label:`bl_simulating`},by_hand:{icon:`mdi:hand-back-right`,label:`bl_by_hand`},automatic:{icon:`mdi:auto-mode`,label:`bl_automatic`}},Yp=new Set([`off`,`closed`,`idle`,`unavailable`,`unknown`,``]),Xp=W(ef)`
  display: flex;
  flex-direction: column;
  gap: ${G(.6)};
  padding: ${G(.8)};
  /* Sized by its cells, and asked how tall it came out: one unit to the em,
     so the query below reads in the same units as the rows it adds up. */
  container-type: size;
  font-size: ${G(1)};
  /* The card is the button that switches the room: glass that glows under
     the pointer, and gives when pressed (bounce.ts, by data-press). */
  cursor: pointer;
  ${({theme:e})=>Yd(e.bubble.hover)}
  /* A double tap opens the details: the browser must not take it for a
     zoom, which ends as one click -- and moves the cover or switches the room. */
  touch-action: manipulation;

  &:focus-visible {
    outline: 2px solid ${({theme:e})=>e.colors.accent};
  }

  .head {
    display: flex;
    align-items: center;
    gap: ${G(.4)};
    min-width: 0;
  }

  .power {
    flex: 1 1 auto;
    display: flex;
    align-items: center;
    gap: ${G(.8)};
    min-width: 0;
  }

  .icon {
    flex: none;
    width: ${G(2.8)};
    height: ${G(2.8)};
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: ${G(1.4)};
    background: ${({theme:e})=>e.bubble.icon};
    color: ${({theme:e})=>e.text.secondary};
    transition:
      background 0.3s ease,
      color 0.3s ease;
  }

  /* On: the icon in the room's own colour, on a wash of it -- as a light's tile. */
  &[data-on='true'] .power .icon {
    background: color-mix(in srgb, ${({$glow:e})=>e} 22%, transparent);
    color: ${({$glow:e})=>e};
  }

  .text {
    min-width: 0;
  }

  .name {
    font-size: ${G(1.05)};
    font-weight: 600;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  .state {
    display: flex;
    align-items: center;
    gap: ${G(.4)};
    font-size: ${G(.95)};
    color: ${({theme:e})=>e.text.secondary};
    white-space: nowrap;
  }

  .badge {
    display: inline-flex;
    font-size: ${G(1.05)};
  }

  .countdown {
    display: inline-flex;
    align-items: center;
    gap: ${G(.15)};
    font-variant-numeric: tabular-nums;
  }

  .round {
    flex: none;
    width: ${G(2.8)};
    height: ${G(2.8)};
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: ${G(1.35)};
    background-color: ${({theme:e})=>e.bubble.icon};
    ${({theme:e})=>Jd(e.bubble.hover,e.bubble.pressed)}
  }

  .round[aria-pressed='true'] {
    color: ${({theme:e})=>e.colors.accent};
  }

  .round.adaptive {
    background-color: color-mix(in srgb, ${({theme:e})=>e.colors.warm} 16%, transparent);
    color: ${({theme:e})=>e.colors.warm};
  }

  .controls {
    margin-top: auto;
    display: flex;
    flex-direction: column;
    gap: ${G(.5)};
  }

  .scenes {
    display: grid;
    grid-template-columns: ${G(2.8)} minmax(0, 1fr) ${G(2.8)};
    gap: ${G(.5)};
  }

  .scenes .round {
    border-radius: ${G(1.4)};
  }

  .scene {
    display: flex;
    align-items: center;
    gap: ${G(.6)};
    min-width: 0;
    height: ${G(2.8)};
    padding: 0 ${G(.9)};
    border-radius: ${G(1.4)};
    font-size: ${G(.95)};
    background-color: ${({theme:e})=>e.bubble.icon};
    ${({theme:e})=>Jd(e.bubble.hover,e.bubble.pressed)}
  }

  .scene .label {
    flex: 1;
    min-width: 0;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  .scene .lead {
    font-size: ${G(1.2)};
  }

  button:disabled {
    opacity: 0.4;
  }

  /* Too short for both the bar and the scenes under it (three rows of 2.8
     and their gaps, measured inside the padding): the scenes stay and the
     bar goes -- the room is dimmed in its details, a double tap away. A room
     without scenes keeps its bar. Last, so these win over the layout above. */
  @container (height < 9.6em) {
    .controls:has(.scenes) > [role='slider'] {
      display: none;
    }
  }

  /* Too narrow for the arrows beside it, as a 1x1 is: the scene button alone. */
  @container (width < 12em) {
    .scenes {
      grid-template-columns: minmax(0, 1fr);
    }

    .scenes > .round {
      display: none;
    }
  }
`,Zp=W.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(${G(14)}, 1fr));
  gap: ${G(.6)};
`,Qp=({offAt:e})=>{let t=X(),n=Wp(e,_p(1e3));return n===null?null:(0,C.jsxs)(`span`,{className:`countdown`,"data-tip":t(`bl_switching_off`),children:[(0,C.jsx)(Q,{className:`badge`,icon:`mdi:timer-outline`}),Gp(n)]})},$p=({entityId:e,icon:t})=>{let n=J(e),r=Z();if(!n)return null;let i=n.attributes.friendly_name??e;return(0,C.jsx)(`button`,{type:`button`,className:`round`,"data-tip":i,"aria-label":i,"aria-pressed":!Yp.has(n.state.toLowerCase()),onClick:()=>{let[t,n]=cd(e);r(t,n,void 0,{entity_id:e})},children:(0,C.jsx)(Q,{icon:t||n.attributes.icon||od(e)})})},em=({selectId:e,hidden:t,on:n,title:r})=>{let i=X(),a=Ru(),o=J(e),s=Z(),[c,l]=(0,v.useState)(!1),u=(0,v.useCallback)(()=>l(!1),[]);if(!o)return null;let d=(o.attributes.options??[]).filter(e=>!t.includes(e)),f=o.attributes.bl_option_icons??{},p=o.state,m=t=>{t&&t!==p&&s(`select`,`select_option`,{option:t},{entity_id:e})},h=n&&d.length>1;return(0,C.jsxs)(C.Fragment,{children:[(0,C.jsx)(Mf,{open:c,onClose:u,title:r,subtitle:i(`bl_scenes`),icon:`mdi:palette-outline`,width:46,children:(0,C.jsx)(Zp,{children:d.map(e=>(0,C.jsx)(zf,{name:e,icon:f[e]??`mdi:palette`,iconColor:e===p?a.colors.accent:void 0,trailing:e===p?(0,C.jsx)(Q,{icon:`mdi:check`,color:a.colors.accent}):void 0,onClick:()=>{m(e),u()}},e))})}),(0,C.jsxs)(`div`,{className:`scenes`,children:[(0,C.jsx)(`button`,{type:`button`,className:`round`,"aria-label":i(`bl_previous_scene`),disabled:!h,onClick:()=>m(Kp(d,p,-1)),children:(0,C.jsx)(Q,{icon:`mdi:chevron-left`})}),(0,C.jsxs)(`button`,{type:`button`,className:`scene`,onClick:()=>l(!0),children:[(0,C.jsx)(Q,{className:`lead`,icon:f[p]??`mdi:palette`}),(0,C.jsx)(`span`,{className:`label`,children:p}),(0,C.jsx)(Q,{icon:`mdi:chevron-down`})]}),(0,C.jsx)(`button`,{type:`button`,className:`round`,"aria-label":i(`bl_next_scene`),disabled:!h,onClick:()=>m(Kp(d,p,1)),children:(0,C.jsx)(Q,{icon:`mdi:chevron-right`})})]})]})},tm=(0,v.memo)(({tile:e})=>{let t=X(),n=Ru(),r=J(e.entity||void 0),i=Up(e.entity||void 0),a=Z(),o=r?.attributes??{},s=r?.state===`on`,[c,l]=(0,v.useState)(!1),u=nf(()=>void a(`light`,`toggle`,void 0,{entity_id:e.entity}),()=>l(!0)),d=Array.isArray(e.options.hidden_scenes)?e.options.hidden_scenes:[],f=typeof e.options.button_entity==`string`?e.options.button_entity:``,p=typeof e.options.button_icon==`string`?e.options.button_icon:``,m=e.name||o.friendly_name||e.entity,h=e.icon||o.icon||`mdi:lightbulb-group`,g=af(o)??n.colors.warm,_=of(s,o.brightness),y=qp(o,s,!!o.bl_off_at);return r?(0,C.jsxs)(C.Fragment,{children:[(0,C.jsx)(Qf,{open:c,onClose:()=>l(!1),entityId:e.entity,name:m,icon:h,presets:e.options.hide_presets!==!0}),(0,C.jsxs)(Xp,{$glow:g,"data-on":s,"data-press":!0,style:{"--on-color":g},role:`button`,tabIndex:0,"aria-pressed":s,"aria-label":m,onClick:e=>{Hd(e,`button, [role="slider"]`)||u()},onKeyDown:e=>{e.target!==e.currentTarget||e.key!==`Enter`&&e.key!==` `||(e.preventDefault(),u())},children:[(0,C.jsxs)(`div`,{className:`head`,children:[(0,C.jsxs)(`span`,{className:`power`,children:[(0,C.jsx)(`span`,{className:`icon`,children:(0,C.jsx)(Q,{icon:h})}),(0,C.jsxs)(`span`,{className:`text`,children:[(0,C.jsx)(`div`,{className:`name`,children:m}),(0,C.jsxs)(`div`,{className:`state`,children:[(0,C.jsx)(`span`,{children:s?`${_} %`:t(`off`)}),y.map(e=>(0,C.jsx)(`span`,{className:`badge`,"data-tip":t(Jp[e].label),"aria-label":t(Jp[e].label),children:(0,C.jsx)(Q,{icon:Jp[e].icon})},e)),o.bl_off_at&&(0,C.jsx)(Qp,{offAt:o.bl_off_at})]})]})]}),s&&o.bl_adaptive===!1&&(0,C.jsx)(`button`,{type:`button`,className:`round adaptive`,"data-tip":t(`bl_back_to_adaptive`),"aria-label":t(`bl_back_to_adaptive`),onClick:()=>void a(`better_lighting`,`set_adaptive`,{entity_id:e.entity}),children:(0,C.jsx)(Q,{icon:`mdi:white-balance-sunny`})}),f&&(0,C.jsx)($p,{entityId:f,icon:p})]}),(0,C.jsxs)(`div`,{className:`controls`,children:[(0,C.jsx)(Hf,{percent:_,color:g,label:t(`brightness`),reported:r.last_updated,onChange:t=>void a(`light`,`turn_on`,{brightness_pct:t},{entity_id:e.entity})}),i&&(0,C.jsx)(em,{selectId:i,hidden:d,on:s,title:m})]})]})]}):(0,C.jsxs)(Xp,{$glow:g,children:[(0,C.jsx)(`div`,{className:`name`,children:m||t(`tile_better_lighting`)}),(0,C.jsx)(`div`,{className:`state`,children:t(`not_found`)})]})}),nm={open:`cover_open`,closed:`cover_closed`,opening:`cover_opening`,closing:`cover_closing`},rm=1,im=2,am=4,om=8,sm=128;function cm(e){let t=e??0;return{open:(t&rm)!==0,close:(t&im)!==0,position:(t&am)!==0,stop:(t&om)!==0,tilt:(t&sm)!==0}}function lm(e,t){let n=e===`opening`||e===`closing`,r=typeof t==`number`?Math.min(100,Math.max(0,Math.round(t))):void 0;return{position:r,moving:n,canOpen:n||!(r===void 0?e===`open`:r>=100),canClose:n||!(r===void 0?e===`closed`:r<=0),open:r===void 0?e===`open`||n:r>0}}var um=[`open`,`closed`,`never`];function dm(e,t,n){return!n||t===`never`?!1:t===`closed`?!e.open&&!e.moving:e.open}function fm(e){if(!Array.isArray(e))return[];let t=[];for(let n of e){let e=Math.round(Number(n));if(!(n===``||n===null||!Number.isFinite(e)||e<0||e>100||t.includes(e))&&(t.push(e),t.length===4))break}return t}var pm=W.div`
  display: grid;
  grid-template-columns: repeat(${({$count:e})=>e}, minmax(0, 1fr));
  gap: ${({$large:e})=>G(e?.6:.5)};

  /* The tile's own button pill (see CoverTileView), or the details' larger one. */
  button {
    display: flex;
    align-items: center;
    justify-content: center;
    height: ${({$large:e})=>G(e?3.4:2.8)};
    border-radius: ${({$large:e})=>G(e?1.7:1.4)};
    font-size: ${({$large:e})=>G(e?1:.95)};
    font-weight: 500;
    font-variant-numeric: tabular-nums;
    color: ${({theme:e})=>e.text.primary};
    background-color: ${({theme:e,$large:t})=>t?e.bubble.background:e.bubble.icon};
    ${({theme:e})=>Jd(e.bubble.hover,e.bubble.pressed)}
  }

  /* Where it stands already: that one lit, as a chosen range is. */
  button[aria-pressed='true'] {
    font-weight: 700;
    background-color: ${({theme:e})=>e.bubble.header};
  }

  button:disabled {
    opacity: 0.35;
  }
`,mm=(0,v.memo)(({entityId:e,presets:t,large:n=!1,className:r})=>{let i=X(),a=J(e),o=Z();if(!t.length)return null;let s=cm(a?.attributes.supported_features),c=Number(a?.attributes.current_position);return(0,C.jsx)(pm,{$count:t.length,$large:n,className:r,role:`group`,"aria-label":i(`cover_presets`),children:t.map(t=>(0,C.jsxs)(`button`,{type:`button`,"aria-pressed":c===t,disabled:!a||!s.position,onClick:()=>void o(`cover`,`set_cover_position`,{position:t},{entity_id:e}),children:[t,` %`]},t))})}),hm=(e,t)=>Qu`
  0% { transform: translateY(${e}px); }
  85%, 100% { transform: translateY(${t}px); }
`,gm=hm(0,-12),_m=hm(-12,0),vm=W.svg`
  width: 1em;
  height: 1em;

  .slats {
    animation: ${({$direction:e})=>e===`up`?gm:_m} 1.4s ease-in-out infinite;
  }
`,ym=({direction:e})=>(0,C.jsxs)(vm,{$direction:e,viewBox:`0 0 24 24`,fill:`currentColor`,"aria-hidden":`true`,children:[(0,C.jsx)(`rect`,{x:3,y:3,width:18,height:3,rx:.6}),(0,C.jsx)(`clipPath`,{id:`shade-${e}`,children:(0,C.jsx)(`rect`,{x:4,y:6,width:16,height:15})}),(0,C.jsx)(`g`,{clipPath:`url(#shade-${e})`,children:(0,C.jsx)(`g`,{className:`slats`,children:[0,1,2,3,4].map(e=>(0,C.jsx)(`rect`,{x:5,y:7+e*3,width:14,height:2,rx:.4},e))})})]}),bm=W(ef)`
  padding: ${G(.8)};
  /* Asked how tall it came out, in units (one to the em): see the end. */
  container-type: size;
  font-size: ${G(1)};
  /* The tile is the button, as a light's is: glass that glows under the
     pointer and gives when pressed (bounce.ts, by data-press). */
  cursor: pointer;
  ${({theme:e})=>Yd(e.bubble.hover)}
  /* A double tap opens the details: the browser must not take it for a
     zoom, which ends as one click -- and moves the cover or switches the room. */
  touch-action: manipulation;

  &:focus-visible {
    outline: 2px solid ${({theme:e})=>e.colors.accent};
  }

  /* The rows in a box of their own: a size query styles what is inside the
     container, never the container itself, so the gap has to live here. */
  .body {
    display: flex;
    flex-direction: column;
    gap: ${G(.6)};
    height: 100%;
  }

  .head {
    display: flex;
    align-items: center;
    gap: ${G(.8)};
    min-width: 0;
    text-align: left;
  }

  .icon {
    flex: none;
    width: ${G(2.8)};
    height: ${G(2.8)};
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: ${G(1.4)};
    background: ${({theme:e})=>e.bubble.icon};
    color: ${({theme:e})=>e.text.secondary};
    transition:
      background 0.3s ease,
      color 0.3s ease;
  }

  &[data-on='true'] .icon {
    background: color-mix(in srgb, ${({$color:e})=>e} 22%, transparent);
    color: ${({$color:e})=>e};
  }

  /* At the head's right end, as the Better Lighting card's "back to
     adaptive": a round button in the warm tint. */
  .round {
    flex: none;
    margin-left: auto;
    width: ${G(2.8)};
    height: ${G(2.8)};
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: ${G(1.35)};
    background-color: color-mix(in srgb, ${({theme:e})=>e.colors.warm} 16%, transparent);
    color: ${({theme:e})=>e.colors.warm};
    ${({theme:e})=>Jd(e.bubble.hover,e.bubble.pressed)}
  }

  .text {
    display: flex;
    flex-direction: column;
    gap: ${G(.3)};
    min-width: 0;
  }

  .name {
    font-size: ${G(1.05)};
    font-weight: 600;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  /* Where it stands, then small grey signs of what is steering it -- as the
     Better Lighting card has them. */
  .state {
    display: flex;
    align-items: center;
    gap: ${G(.4)};
    font-size: ${G(.95)};
    color: ${({theme:e})=>e.text.secondary};
    white-space: nowrap;
    min-width: 0;
  }

  .state .full,
  .state .short {
    overflow: hidden;
    text-overflow: ellipsis;
  }

  .state .short {
    display: none;
  }

  .state .sign {
    display: inline-flex;
    flex: none;
    font-size: ${G(1.05)};
  }

  .controls {
    margin-top: auto;
    display: flex;
    flex-direction: column;
    gap: ${G(.5)};
  }

  .buttons {
    display: grid;
    grid-template-columns: repeat(3, minmax(0, 1fr));
    gap: ${G(.5)};
  }

  .buttons button {
    height: ${G(2.8)};
    border-radius: ${G(1.4)};
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: ${G(1.35)};
    background-color: ${({theme:e})=>e.bubble.icon};
    ${({theme:e})=>Jd(e.bubble.hover,e.bubble.pressed)}
  }

  .buttons button:disabled {
    opacity: 0.35;
  }

  /* The presets where there is room for a row of them above the buttons
     (head 2.8, presets 2.8, buttons 2.8 and their gaps, inside the
     padding) and across it: left out otherwise, the buttons still there. */
  @container (height < 9.6em) or (width < 12em) {
    .presets {
      display: none;
    }
  }

  /* Narrow, as a 1x1 is: where the cover stands by its number alone, and a
     smaller icon to leave it and its signs room. Last, as the query below,
     so they win over the layout above. */
  @container (width < 13em) {
    .head {
      gap: ${G(.5)};
    }

    .icon {
      width: ${G(2.2)};
      height: ${G(2.2)};
      font-size: ${G(1.15)};
    }

    .state {
      gap: ${G(.25)};
    }

    .round {
      width: ${G(2.2)};
      height: ${G(2.2)};
      font-size: ${G(1.1)};
    }

    .state .sign {
      font-size: ${G(.95)};
    }

    .state .full {
      display: none;
    }

    .state .short {
      display: inline;
    }
  }

  /* Short, as a 1x1 is (head 2.8, buttons 2.8 and their gap, inside the
     padding): the buttons come down a little. */
  @container (height < 6.4em) {
    .body {
      gap: ${G(.3)};
    }

    .buttons button {
      height: ${G(2.1)};
    }
  }
`,xm=(0,v.memo)(({tile:e,signs:t,action:n,onDetails:r})=>{let i=X(),a=Ru(),o=J(e.entity||void 0),s=Z(),c=o?.attributes??{},l=cm(c.supported_features),u=lm(o?.state,c.current_position),d=e.name||c.friendly_name||e.entity,f=e.icon||c.icon||od(e.entity||`cover.x`),p=o?nm[o.state]:void 0,m=o?[p?i(p):o.state,u.position===void 0?``:`${u.position} %`].filter(Boolean).join(` · `):i(`not_found`),h=t=>void s(`cover`,t,void 0,{entity_id:e.entity}),g=nf(()=>h(`toggle`),r),_=dm(u,e.options.active_when,!!o),v=e.options.stop_only_moving===!0,y=o?.state===`opening`?`up`:o?.state===`closing`?`down`:null,b={"--on-color":a.colors.cover},x=(0,C.jsxs)(C.Fragment,{children:[(0,C.jsx)(`span`,{className:`icon`,children:y?(0,C.jsx)(ym,{direction:y}):(0,C.jsx)(Q,{icon:f})}),(0,C.jsxs)(`span`,{className:`text`,children:[(0,C.jsx)(`span`,{className:`name`,children:d}),(0,C.jsxs)(`span`,{className:`state`,children:[(0,C.jsx)(`span`,{className:`full`,children:m}),(0,C.jsx)(`span`,{className:`short`,children:u.position===void 0?m:`${u.position} %`}),t]})]})]});return(0,C.jsx)(bm,{$color:a.colors.cover,"data-on":_,"data-press":!0,style:b,role:`button`,tabIndex:0,"aria-label":d,onClick:e=>{o&&!Hd(e,`button`)&&g()},onKeyDown:e=>{!o||e.target!==e.currentTarget||e.key!==`Enter`&&e.key!==` `||(e.preventDefault(),g())},children:(0,C.jsxs)(`div`,{className:`body`,children:[(0,C.jsxs)(`div`,{className:`head`,children:[x,n]}),(0,C.jsxs)(`div`,{className:`controls`,children:[(0,C.jsx)(mm,{className:`presets`,entityId:e.entity,presets:fm(e.options.positions)}),(0,C.jsxs)(`div`,{className:`buttons`,children:[(0,C.jsx)(`button`,{type:`button`,"aria-label":i(`cover_up`),disabled:!o||!l.open||!u.canOpen,onClick:()=>h(`open_cover`),children:(0,C.jsx)(Q,{icon:`mdi:arrow-up`})}),(0,C.jsx)(`button`,{type:`button`,"aria-label":i(`cover_stop`),disabled:!o||!l.stop||v&&!u.moving,onClick:()=>h(`stop_cover`),children:(0,C.jsx)(Q,{icon:`mdi:stop`})}),(0,C.jsx)(`button`,{type:`button`,"aria-label":i(`cover_down`),disabled:!o||!l.close||!u.canClose,onClick:()=>h(`close_cover`),children:(0,C.jsx)(Q,{icon:`mdi:arrow-down`})})]})]})]})})}),Sm=W.div`
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: ${G(.6)};
  width: 100%;

  button {
    height: ${G(3.4)};
    border-radius: ${G(1.7)};
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: ${G(1.45)};
    background-color: ${({theme:e})=>e.bubble.background};
    ${({theme:e})=>Jd(e.bubble.hover,e.bubble.pressed)}
  }

  button:disabled {
    opacity: 0.35;
  }
`,Cm=(0,v.memo)(({entityId:e,stopOnlyMoving:t=!1})=>{let n=X(),r=J(e),i=Z(),a=r?.attributes??{},o=cm(a.supported_features),s=lm(r?.state,a.current_position),c=t=>void i(`cover`,t,void 0,{entity_id:e});return(0,C.jsxs)(Sm,{children:[(0,C.jsx)(`button`,{type:`button`,"aria-label":n(`cover_up`),disabled:!r||!o.open||!s.canOpen,onClick:()=>c(`open_cover`),children:(0,C.jsx)(Q,{icon:`mdi:arrow-up`})}),(0,C.jsx)(`button`,{type:`button`,"aria-label":n(`cover_stop`),disabled:!r||!o.stop||t&&!s.moving,onClick:()=>c(`stop_cover`),children:(0,C.jsx)(Q,{icon:`mdi:stop`})}),(0,C.jsx)(`button`,{type:`button`,"aria-label":n(`cover_down`),disabled:!r||!o.close||!s.canClose,onClick:()=>c(`close_cover`),children:(0,C.jsx)(Q,{icon:`mdi:arrow-down`})})]})}),wm=W.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${G(1.4)};

  .columns {
    display: flex;
    gap: ${G(1.6)};
  }

  .column {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: ${G(.5)};
    font-size: ${G(.9)};
    color: ${({theme:e})=>e.text.secondary};
  }
`,Tm=({entityId:e,stopOnlyMoving:t})=>{let n=X(),r=Ru(),i=J(e),a=Z();if(!i)return(0,C.jsx)(`p`,{children:n(`not_found`)});let o=i.attributes,s=cm(o.supported_features),c=lm(i.state,o.current_position),l=Number(o.current_tilt_position),u=(t,n)=>void a(`cover`,t,n,{entity_id:e});return(0,C.jsxs)(wm,{children:[(s.position||s.tilt)&&(0,C.jsxs)(`div`,{className:`columns`,children:[s.position&&(0,C.jsxs)(`div`,{className:`column`,children:[(0,C.jsx)(Kf,{label:n(`cover_position`),reported:i.last_updated,percent:c.position??0,color:r.colors.cover,min:0,onChange:e=>u(`set_cover_position`,{position:e})}),n(`cover_position`)]}),s.tilt&&(0,C.jsxs)(`div`,{className:`column`,children:[(0,C.jsx)(Kf,{label:n(`cover_tilt`),reported:i.last_updated,percent:Number.isFinite(l)?l:0,color:r.colors.cover,min:0,onChange:e=>u(`set_cover_tilt_position`,{tilt_position:e})}),n(`cover_tilt`)]})]}),(0,C.jsx)(Cm,{entityId:e,stopOnlyMoving:t})]})},Em=(0,v.memo)(({open:e,onClose:t,entityId:n,name:r,icon:i,stopOnlyMoving:a=!1})=>{let o=X(),s=Ru(),c=J(n),l=Number(c?.attributes.current_position),u=c?Number.isFinite(l)?`${l} %`:void 0:o(`not_found`);return(0,C.jsx)(Mf,{open:e,onClose:t,title:r,subtitle:u,icon:i,iconColor:s.colors.cover,width:34,children:(0,C.jsx)(Tm,{entityId:n,stopOnlyMoving:a})})}),Dm=(0,v.memo)(({tile:e})=>{let t=J(e.entity||void 0),[n,r]=(0,v.useState)(!1),i=e.name||t?.attributes.friendly_name||e.entity,a=e.icon||t?.attributes.icon||od(e.entity||`cover.x`);return(0,C.jsxs)(C.Fragment,{children:[(0,C.jsx)(xm,{tile:e,onDetails:t?()=>r(!0):void 0}),t&&(0,C.jsx)(Em,{open:n,onClose:()=>r(!1),entityId:e.entity,name:i,icon:a,stopOnlyMoving:e.options.stop_only_moving===!0})]})}),Om=W.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(${G(10.5)}, 1fr));
  gap: ${G(.6)};

  grid-auto-flow: dense;

  > div {
    display: grid;
    grid-template-columns: auto minmax(0, 1fr);
    grid-template-rows: auto auto;
    column-gap: ${G(.6)};
    align-items: center;
    padding: ${G(.6)} ${G(.8)};
    border-radius: ${G(1)};
    background: ${({theme:e})=>e.bubble.background};
  }

  /* Two rows high: the reading on top as in every fact, a dial under it. */
  > .tall {
    grid-row: span 2;
    grid-template-rows: auto auto minmax(0, 1fr);
    align-items: start;
  }

  .icon {
    grid-row: 1 / 3;
    font-size: ${G(1.6)};
    color: ${({theme:e})=>e.text.secondary};
  }

  .label {
    font-size: ${G(.85)};
    color: ${({theme:e})=>e.text.secondary};
  }

  .value {
    font-size: ${G(1.15)};
    font-weight: 600;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
`,km=W.span`
  display: inline-flex;
  align-items: center;
  gap: ${G(.3)};
  height: ${G(1.8)};
  padding: 0 ${G(.7)} 0 ${G(.5)};
  border-radius: ${G(.9)};
  font-size: ${G(.8)};
  font-weight: 600;
  white-space: nowrap;
  /* A wash of its colour, the way a lit icon sits on one. */
  background: ${({$color:e,theme:t})=>e?`color-mix(in srgb, ${e} 18%, transparent)`:t.bubble.icon};
  color: ${({$color:e,theme:t})=>e??t.text.secondary};

  .chip-icon {
    font-size: ${G(1)};
  }

  /* One that does something: a press brightens it, as a button's does. */
  &:is(button) {
    transition: filter 0.2s ease;
  }

  &:is(button):active {
    filter: brightness(1.3);
  }
`,Am=(0,v.memo)(({icon:e,label:t,color:n,title:r,onClick:i,action:a})=>(0,C.jsxs)(km,{as:i?`button`:`span`,type:i?`button`:void 0,onClick:i,$color:n,"data-tip":r??t,children:[(0,C.jsx)(Q,{className:`chip-icon`,icon:e}),(0,C.jsx)(`span`,{className:`chip-label`,children:t}),a&&(0,C.jsx)(Q,{className:`chip-icon`,icon:a})]})),jm=`adaptive_cover_pro`,Mm={target:`sensor:Cover_Position`,control:`sensor:control_status`,decision:`sensor:decision_trace`,forecast:`sensor:position_forecast`,manualEnd:`sensor:manual_override_end_time`,motion:`sensor:motion_status`,climate:`sensor:climate_status`,startSun:`sensor:Start Sun`,endSun:`sensor:End Sun`,sun:`sensor:sun_position`,lastAction:`sensor:last_cover_action`,manual:`binary_sensor:manual_override`,sunInFront:`binary_sensor:sun_motion`,enabled:`switch:Integration Enabled`,automatic:`switch:Automatic Control`,climateMode:`switch:Climate Mode`,motionControl:`switch:Motion Control`,resetManual:`button:Reset Manual Override`};function Nm(e,t){let n=new Map;for(let r of e){if(r.platform!==`adaptive_cover_pro`||r.config_entry_id!==t)continue;let e=`${t}_`;r.unique_id.startsWith(e)&&n.set(`${r.entity_id.split(`.`)[0]}:${r.unique_id.slice(e.length)}`,r.entity_id)}let r={};for(let[e,t]of Object.entries(Mm)){let i=n.get(t);i&&(r[e]=i)}return r}function Pm(e,t){for(let[n,r]of Object.entries(t)){if(!n.startsWith(`sensor.`))continue;let t=r.attributes.actual_positions;if(t&&typeof t==`object`&&e in t)return n}}var Fm={auto:{icon:`mdi:autorenew`,color:`#4caf50`},manual:{icon:`mdi:hand-back-right`,color:`#ff9800`},weather:{icon:`mdi:shield-sun`,color:`#f44336`},glare_zone:{icon:`mdi:weather-sunny-alert`,color:`#f44336`},climate:{icon:`mdi:thermostat`,color:`#009688`},cloud:{icon:`mdi:weather-cloudy`,color:`#2196f3`},custom_position:{icon:`mdi:bookmark`,color:`#9c27b0`},solar:{icon:`mdi:white-balance-sunny`,color:`#4caf50`},motion:{icon:`mdi:motion-sensor`,color:`#ffeb3b`},off:{icon:`mdi:power`,color:`#9e9e9e`},off_schedule:{icon:`mdi:clock-alert-outline`,color:`#607d8b`}};function Im(e){if(e)return e.startsWith(`custom_position`)?`custom_position`:{manual_override:`manual`,manual:`manual`,weather_override:`weather`,weather:`weather`,motion_timeout:`motion`,motion:`motion`,cloud_suppression:`cloud`,cloud:`cloud`,glare_zone:`glare_zone`,climate:`climate`,solar:`solar`}[e]}function Lm(e){if(e.enabled===!1)return`off`;if(e.automatic===!1)return null;let t=Im(e.winner),n=e.manual&&t!==`custom_position`?`manual`:t??`auto`;if(n===`auto`){let t=e.trace.map(e=>e.matched?Im(e.handler):void 0).find(e=>e&&e!==`motion`);t&&(n=t)}return e.inTimeWindow===!1&&n!==`manual`?`off_schedule`:n}function Rm(e,t){return e.enabled!==!1&&e.automatic===!0&&!e.manual&&t!==`auto`&&t!==`off_schedule`}var zm={manual_override:`manual`,motion_timeout:`motion`,cloud_suppression:`cloud`};function Bm(e,t){return t?e.filter(e=>{let n=e.handler.startsWith(`custom_position`)?`custom_position`:zm[e.handler]??e.handler;return t.includes(n)}):e}var Vm={auto:`acp_badge_auto`,manual:`acp_badge_manual`,weather:`acp_badge_weather`,glare_zone:`acp_badge_glare_zone`,climate:`acp_badge_climate`,cloud:`acp_badge_cloud`,custom_position:`acp_badge_custom_position`,solar:`acp_badge_solar`,motion:`acp_badge_motion`,off:`acp_badge_off`,off_schedule:`acp_badge_off_schedule`},Hm={active:`acp_status_active`,calibrating:`acp_status_calibrating`,outside_time_window:`acp_status_outside_time_window`,position_delta_too_small:`acp_status_position_delta_too_small`,time_delta_too_small:`acp_status_time_delta_too_small`,manual_override:`acp_status_manual_override`,automatic_control_off:`acp_status_automatic_control_off`,sun_not_visible:`acp_status_sun_not_visible`,weather_override_active:`acp_status_weather_override_active`,motion_timeout:`acp_status_motion_timeout`},Um={not_configured:`acp_motion_not_configured`,motion_detected:`acp_motion_motion_detected`,timeout_pending:`acp_motion_timeout_pending`,no_motion:`acp_motion_no_motion`,holding:`acp_motion_holding`,waiting_for_data:`acp_motion_waiting_for_data`},Wm={summer_mode:`acp_climate_summer_mode`,winter_mode:`acp_climate_winter_mode`,intermediate:`acp_climate_intermediate`},Gm={weather:`acp_handler_weather`,manual_override:`acp_handler_manual_override`,custom_position:`acp_handler_custom_position`,motion_timeout:`acp_handler_motion_timeout`,cloud_suppression:`acp_handler_cloud_suppression`,climate:`acp_handler_climate`,glare_zone:`acp_handler_glare_zone`,solar:`acp_handler_solar`,default:`acp_handler_default`},Km=e=>Gm[e.startsWith(`custom_position`)?`custom_position`:e];function qm(e){let t=J(e.enabled),n=J(e.automatic),r=J(e.manual),i=J(e.decision),a=J(e.manualEnd),o=J(e.sunInFront),s=e=>e===`on`||e!==`off`&&void 0,c=Array.isArray(i?.attributes.trace)?i.attributes.trace:[],l={enabled:s(t?.state),automatic:s(n?.state),manual:r?.state===`on`,winner:i?.state,trace:c,inTimeWindow:i?.attributes.in_time_window},u=Lm(l),d=a?Date.parse(a.state):NaN;return{badge:u,auto:Rm(l,u),manual:l.manual,manualUntil:l.manual&&Number.isFinite(d)?new Date(d):null,trace:c,winner:i?.state,sunAway:l.enabled!==!1&&l.automatic===!0&&!l.manual&&o?.state===`off`}}var Jm=(0,v.memo)(({entities:e})=>{let t=X(),n=Y(),r=Z(),i=qm(e),{badge:a}=i,o=i.manualUntil?.toLocaleTimeString(n,{hour:`2-digit`,minute:`2-digit`});return(0,C.jsxs)(C.Fragment,{children:[i.auto&&(0,C.jsx)(Am,{icon:Fm.auto.icon,color:Fm.auto.color,label:t(`acp_badge_auto`)}),a&&(0,C.jsx)(Am,{icon:Fm[a].icon,color:Fm[a].color,label:a===`manual`&&o?o:t(Vm[a]),title:a===`manual`&&e.resetManual?t(`acp_reset_manual`):t(Vm[a]),action:a===`manual`&&e.resetManual?`mdi:restore`:void 0,onClick:a===`manual`&&e.resetManual?()=>void r(`button`,`press`,void 0,{entity_id:e.resetManual}):void 0})]})}),Ym=(e,t)=>(Math.min(t.end,Math.max(t.start,e))-t.start)/(t.end-t.start)*t.width,Xm=(e,t)=>t.height-Math.min(100,Math.max(0,e))/100*t.height;function Zm(e,t){let n=[...e].sort((e,t)=>e.t-t.t),r=n.filter(e=>e.t<=t.start).pop(),i=n.filter(e=>e.t>t.start&&e.t<=t.end),a=r??i[0];if(!a)return``;let o=`M${Ym(r?t.start:a.t,t).toFixed(1)},${Xm(a.v,t).toFixed(1)}`;for(let e of r?i:i.slice(1))o+=` H${Ym(e.t,t).toFixed(1)} V${Xm(e.v,t).toFixed(1)}`;return`${o} H${Ym(t.end,t).toFixed(1)}`}function Qm(e,t,n){let r=[...e].sort((e,t)=>e.t-t.t),i=[];return r.forEach((e,a)=>{let o=Math.max(t,e.t),s=Math.min(n,r[a+1]?.t??n);if(s<=o)return;let c=i[i.length-1];c&&c.key===e.key&&c.to===o?c.to=s:i.push({from:o,to:s,key:e.key})}),i}function $m(e,t,n){return Math.min(1,Math.max(0,(e-t)/(n-t)))}function eh(e,t){let n;for(let r of e){if(r.t>t)break;n=r.v}return n}function th(e,t){let[n,r]=(0,v.useState)(null),i=n=>{let i=n.currentTarget.getBoundingClientRect(),a=Math.min(1,Math.max(0,(n.clientX-i.left)/i.width));r(e+a*(t-e))};return{t:n,handlers:{onPointerMove:i,onPointerDown:i,onPointerLeave:e=>e.pointerType===`mouse`&&r(null)}}}var nh=500,rh=100,ih=W.div`
  display: flex;
  flex-direction: column;
  gap: ${G(.35)};
  padding: ${G(.8)};
  border-radius: ${G(1)};
  background: ${({theme:e})=>e.bubble.background};

  /* Hovered or touched, it shows what held at that moment. */
  .plot {
    position: relative;
    cursor: default;
    /* A finger drags along it; the popup still scrolls up and down. */
    touch-action: pan-y;
  }

  svg {
    display: block;
    width: 100%;
    height: ${G(7)};
    overflow: visible;
  }

  .grid {
    stroke: rgba(255, 255, 255, 0.07);
    stroke-width: 1;
  }

  .band {
    position: relative;
    height: ${G(.5)};
    border-radius: ${G(.3)};
    overflow: hidden;
    background: ${({theme:e})=>e.bubble.icon};
  }

  .band span {
    position: absolute;
    top: 0;
    bottom: 0;
  }

  .axis {
    display: flex;
    justify-content: space-between;
    font-size: ${G(.8)};
    color: ${({theme:e})=>e.text.secondary};
  }

  .legend {
    display: flex;
    flex-wrap: wrap;
    gap: ${G(1)};
    font-size: ${G(.8)};
    color: ${({theme:e})=>e.text.secondary};
  }

  .legend span {
    display: inline-flex;
    align-items: center;
    gap: ${G(.35)};
  }

  .legend i {
    width: ${G(.9)};
    height: ${G(.25)};
    border-radius: ${G(.15)};
  }
`,ah=(0,v.memo)(({start:e,end:t,lines:n,bands:r,marker:i})=>{let a=Y(),o={start:e,end:t,width:nh,height:rh},s=e=>new Date(e).toLocaleTimeString(a,{hour:`2-digit`,minute:`2-digit`}),c=th(e,t),l=c.t===null?null:$m(c.t,e,t),u=c.t===null?[]:n.flatMap(e=>{let t=eh(e.points,c.t);return t===void 0?[]:[`${e.label} ${Math.round(t)} %`]});return(0,C.jsxs)(ih,{children:[(0,C.jsxs)(`div`,{className:`plot`,...c.handlers,children:[(0,C.jsxs)(`svg`,{viewBox:`0 -4 ${nh} 108`,preserveAspectRatio:`none`,"aria-hidden":`true`,children:[[0,50,100].map(e=>(0,C.jsx)(`line`,{className:`grid`,x1:0,x2:nh,y1:rh-e,y2:rh-e,vectorEffect:`non-scaling-stroke`},e)),n.map(e=>(0,C.jsx)(`path`,{d:Zm(e.points,o),fill:`none`,stroke:e.color,strokeWidth:2,strokeDasharray:e.dashed?`5 4`:void 0,strokeLinejoin:`round`,vectorEffect:`non-scaling-stroke`},e.label)),l!==null&&(0,C.jsx)(`line`,{x1:l*nh,x2:l*nh,y1:0,y2:rh,stroke:`rgba(255, 255, 255, 0.7)`,strokeWidth:1,vectorEffect:`non-scaling-stroke`}),i!==void 0&&(0,C.jsx)(`line`,{x1:$m(i,e,t)*nh,x2:$m(i,e,t)*nh,y1:0,y2:rh,stroke:`rgba(255, 255, 255, 0.5)`,strokeWidth:1,vectorEffect:`non-scaling-stroke`})]}),l!==null&&c.t!==null&&u.length>0&&(0,C.jsx)(cp,{style:{left:`${Math.min(88,Math.max(12,l*100))}%`,top:0},children:[s(c.t),...u].join(` · `)})]}),r&&r.length>0&&(0,C.jsx)(`div`,{className:`band`,children:r.map(n=>(0,C.jsx)(`span`,{"data-tip":n.key,style:{left:`${$m(n.from,e,t)*100}%`,width:`${($m(n.to,e,t)-$m(n.from,e,t))*100}%`,background:n.color}},`${n.from}-${n.key}`))}),(0,C.jsxs)(`div`,{className:`axis`,children:[(0,C.jsx)(`span`,{children:s(e)}),(0,C.jsx)(`span`,{children:s((e+t)/2)}),(0,C.jsx)(`span`,{children:s(t)})]}),(0,C.jsx)(`div`,{className:`legend`,children:n.map(e=>(0,C.jsxs)(`span`,{children:[(0,C.jsx)(`i`,{style:{background:e.color}}),e.label]},e.label))})]})}),oh=Math.PI/180;function sh(e,t,n){let r=e/864e5-10957.5,i=(357.529+.98560028*r)*oh,a=(280.459+.98564736*r+1.915*Math.sin(i)+.02*Math.sin(2*i))*oh,o=(23.439-36e-8*r)*oh,s=Math.atan2(Math.cos(o)*Math.sin(a),Math.cos(a)),c=Math.asin(Math.sin(o)*Math.sin(a)),l=((18.697374558+24.06570982441908*r)*15+n)*oh-s,u=t*oh,d=Math.asin(Math.sin(u)*Math.sin(c)+Math.cos(u)*Math.cos(c)*Math.cos(l));return{azimuth:(Math.atan2(Math.sin(l),Math.cos(l)*Math.sin(u)-Math.tan(c)*Math.cos(u))/oh+180+360)%360,elevation:d/oh}}function ch(e,t,n,r=10){let i=Math.round(1440/r);return Array.from({length:i+1},(i,a)=>{let o=e+a*r*6e4;return{t:o,...sh(o,t,n)}})}function lh(e,t,n){let r=n*(90-Math.min(90,Math.max(0,t)))/90;return{x:r*Math.sin(e*oh),y:-r*Math.cos(e*oh)}}function uh(e,t,n){let r=lh(e,0,n),i=lh(t,0,n),a=+(((t-e)%360+360)%360>180);return`M0,0 L${r.x.toFixed(2)},${r.y.toFixed(2)} A${n},${n} 0 ${a} 1 ${i.x.toFixed(2)},${i.y.toFixed(2)} Z`}var dh=100,fh=-20,ph=90,mh=W.div`
  display: grid;
  grid-template-columns: auto minmax(0, 1fr);
  gap: ${G(.6)};

  > div {
    display: flex;
    flex-direction: column;
    gap: ${G(.5)};
    padding: ${G(.8)};
    border-radius: ${G(1)};
    background: ${({theme:e})=>e.bubble.background};
    min-width: 0;
  }

  .compass svg {
    width: ${G(13)};
    height: ${G(13)};
    overflow: visible;
  }

  /* Hovered or touched, it shows the sun's height at that moment. */
  .plot {
    position: relative;
    cursor: default;
    touch-action: pan-y;
  }

  .plot svg {
    display: block;
    width: 100%;
    height: ${G(10.5)};
    overflow: visible;
  }

  /* Now, as HTML over the chart: it stays round however the chart is stretched. */
  .dot {
    position: absolute;
    width: ${G(.9)};
    height: ${G(.9)};
    border-radius: 50%;
    transform: translate(-50%, -50%);
    box-shadow: 0 0 0 ${G(.3)} rgba(0, 0, 0, 0.35);
  }

  .ring {
    fill: none;
    stroke: rgba(255, 255, 255, 0.1);
    stroke-width: 1;
  }

  .cardinal {
    font-size: 13px;
    fill: ${({theme:e})=>e.text.secondary};
    text-anchor: middle;
    dominant-baseline: central;
  }

  .caption {
    display: flex;
    justify-content: space-between;
    gap: ${G(.6)};
    font-size: ${G(.82)};
    color: ${({theme:e})=>e.text.secondary};
  }

  .caption strong {
    color: ${({theme:e})=>e.text.primary};
    font-weight: 600;
  }

  .axis {
    display: flex;
    justify-content: space-between;
    font-size: ${G(.8)};
    color: ${({theme:e})=>e.text.secondary};
  }
`,hh=e=>Number.isFinite(Number(e))&&e!==null?Number(e):void 0,gh=(0,v.memo)(({entities:e})=>{let t=X(),n=Ru(),r=Y(),i=J(e.sun),a=J(e.startSun),o=J(e.endSun),s=J(e.sunInFront),c=R(e=>e.config?.latitude),l=R(e=>e.config?.longitude),u=_p(6e4),d=new Date(u).setHours(0,0,0,0),f=d+864e5,p=th(d,f),m=(0,v.useMemo)(()=>c!==void 0&&l!==void 0?ch(d,c,l):[],[d,c,l]),h=i?.attributes??{},g=hh(i?.state),_=hh(h.elevation),y=hh(h.window_azimuth),b=hh(h.fov_left)??0,x=hh(h.fov_right)??0,S=Array.isArray(h.blind_spot_ranges)?h.blind_spot_ranges:[],ee=s?.state===`on`,w=e=>{let t=e?Date.parse(e):NaN;return Number.isFinite(t)?new Date(t).toLocaleTimeString(r,{hour:`2-digit`,minute:`2-digit`}):`–`},te=e=>(e%360+360)%360,T=e=>e===void 0?`–`:`${Tp(e,r,0)}°`,ne=n.colors.warm,E=m.filter(e=>e.elevation>0).map(e=>lh(e.azimuth,e.elevation,dh)).map(e=>`${e.x.toFixed(1)},${e.y.toFixed(1)}`),re=g!==void 0&&_!==void 0?lh(g,_,dh):null,ie=y===void 0?null:lh(y,0,dh*.78),ae=e=>100-(Math.min(ph,Math.max(fh,e))-fh)/110*100,oe=m.map((e,t)=>`${t?`L`:`M`}${($m(e.t,d,f)*500).toFixed(1)},${ae(e.elevation).toFixed(1)}`).join(` `),se=a?Date.parse(a.state):NaN,ce=o?Date.parse(o.state):NaN,le=$m(u,d,f)*500,ue=e=>m.length?m[Math.min(m.length-1,Math.max(0,Math.round((e-d)/864e5*(m.length-1))))].elevation:void 0,de=ue(u),fe=p.t===null?void 0:ue(p.t),pe=p.t===null?null:$m(p.t,d,f);return i?(0,C.jsxs)(mh,{children:[(0,C.jsxs)(`div`,{className:`compass`,children:[(0,C.jsxs)(`svg`,{viewBox:`-114 -114 228 228`,role:`img`,"aria-label":t(`acp_window`),children:[[dh,200/3,dh/3].map(e=>(0,C.jsx)(`circle`,{className:`ring`,r:e},e)),y!==void 0&&(0,C.jsx)(`path`,{d:uh(y-b,y+x,dh),fill:`color-mix(in srgb, ${n.colors.accent} 16%, transparent)`,stroke:`color-mix(in srgb, ${n.colors.accent} 45%, transparent)`,strokeDasharray:`4 3`,"data-tip":t(`acp_tip_fov`,{from:T(te(y-b)),to:T(te(y+x))})}),S.map(([e,r])=>(0,C.jsx)(`path`,{d:uh(e,r,dh),fill:`color-mix(in srgb, ${n.colors.alert} 16%, transparent)`,"data-tip":t(`acp_tip_blind`,{from:T(e),to:T(r)})},`${e}-${r}`)),E.length>1&&(0,C.jsx)(`polyline`,{points:E.join(` `),fill:`none`,stroke:ne,strokeOpacity:.55,strokeWidth:1.5,strokeDasharray:`2 4`}),E.length>1&&(0,C.jsx)(`polyline`,{points:E.join(` `),fill:`none`,stroke:`transparent`,strokeWidth:10,"data-tip":t(`acp_tip_path`)}),ie&&(0,C.jsxs)(`g`,{"data-tip":t(`acp_tip_window`,{bearing:T(y)}),children:[(0,C.jsx)(`line`,{x1:0,y1:0,x2:ie.x,y2:ie.y,stroke:n.colors.cover,strokeWidth:3,strokeLinecap:`round`}),(0,C.jsx)(`line`,{x1:0,y1:0,x2:ie.x,y2:ie.y,stroke:`transparent`,strokeWidth:12})]}),(0,C.jsx)(`circle`,{r:3,fill:n.colors.cover}),[`N`,`E`,`S`,`W`].map((e,n)=>{let r=lh(n*90,0,109);return(0,C.jsx)(`text`,{className:`cardinal`,x:r.x,y:r.y,children:t(`compass_${e.toLowerCase()}`)},e)}),re&&_!==void 0&&_>0&&(0,C.jsxs)(`g`,{"data-tip":`${t(`acp_tip_sun`,{azimuth:T(g),elevation:T(_)})}\n${t(ee?`acp_sun_on_window`:`acp_sun_off_window`)}`,children:[ee&&(0,C.jsx)(`circle`,{cx:re.x,cy:re.y,r:13,fill:ne,opacity:.25}),(0,C.jsx)(`circle`,{cx:re.x,cy:re.y,r:7,fill:ne})]})]}),(0,C.jsxs)(`div`,{className:`caption`,children:[(0,C.jsxs)(`span`,{children:[t(`acp_window`),` `,(0,C.jsx)(`strong`,{children:T(y)})]}),(0,C.jsxs)(`span`,{children:[t(`acp_sun`),` `,(0,C.jsx)(`strong`,{children:T(g)}),` / `,(0,C.jsx)(`strong`,{children:T(_)})]})]})]}),(0,C.jsxs)(`div`,{className:`day`,children:[(0,C.jsxs)(`div`,{className:`caption`,children:[(0,C.jsx)(`span`,{children:t(`acp_sun_today`)}),(0,C.jsxs)(`span`,{children:[t(`acp_sun_window`),` `,(0,C.jsx)(`strong`,{children:w(a?.state)}),` – `,(0,C.jsx)(`strong`,{children:w(o?.state)})]})]}),(0,C.jsxs)(`div`,{className:`plot`,...p.handlers,children:[(0,C.jsxs)(`svg`,{viewBox:`0 0 500 100`,preserveAspectRatio:`none`,"aria-hidden":`true`,children:[Number.isFinite(se)&&Number.isFinite(ce)&&(0,C.jsx)(`rect`,{x:$m(se,d,f)*500,width:($m(ce,d,f)-$m(se,d,f))*500,y:0,height:100,fill:`color-mix(in srgb, ${n.colors.accent} 16%, transparent)`}),(0,C.jsx)(`line`,{x1:0,x2:500,y1:ae(0),y2:ae(0),stroke:`rgba(255, 255, 255, 0.18)`,strokeWidth:1,vectorEffect:`non-scaling-stroke`}),(0,C.jsx)(`path`,{d:oe,fill:`none`,stroke:ne,strokeWidth:2,vectorEffect:`non-scaling-stroke`}),(0,C.jsx)(`line`,{x1:le,x2:le,y1:0,y2:100,stroke:`rgba(255, 255, 255, 0.45)`,strokeWidth:1,vectorEffect:`non-scaling-stroke`}),pe!==null&&(0,C.jsx)(`line`,{x1:pe*500,x2:pe*500,y1:0,y2:100,stroke:`rgba(255, 255, 255, 0.7)`,strokeWidth:1,vectorEffect:`non-scaling-stroke`})]}),de!==void 0&&(0,C.jsx)(`span`,{className:`dot`,style:{left:`${le/500*100}%`,top:`${ae(de)/100*100}%`,background:ne}}),pe!==null&&p.t!==null&&fe!==void 0&&(0,C.jsxs)(C.Fragment,{children:[(0,C.jsx)(`span`,{className:`dot`,style:{left:`${pe*100}%`,top:`${ae(fe)/100*100}%`,background:`#fff`}}),(0,C.jsxs)(cp,{style:{left:`${Math.min(88,Math.max(12,pe*100))}%`,top:0},children:[w(new Date(p.t).toISOString()),` · `,T(fe)]})]})]}),(0,C.jsxs)(`div`,{className:`axis`,children:[(0,C.jsx)(`span`,{children:`00:00`}),(0,C.jsx)(`span`,{children:`06:00`}),(0,C.jsx)(`span`,{children:`12:00`}),(0,C.jsx)(`span`,{children:`18:00`}),(0,C.jsx)(`span`,{children:`24:00`})]})]})]}):null}),_h=W.section`
  display: flex;
  flex-direction: column;

  > button {
    display: flex;
    align-items: center;
    gap: ${G(.6)};
    width: 100%;
    padding: ${G(.6)} ${G(.8)};
    border-radius: ${G(1)};
    text-align: left;
    font-size: ${G(1.05)};
    font-weight: 600;
    color: ${({theme:e})=>e.text.secondary};
    ${({theme:e})=>Jd(e.bubble.hover,e.bubble.pressed)}
  }

  > button .chevron {
    font-size: ${G(1.3)};
    transition: transform 0.25s ease;
  }

  &[data-open='true'] > button .chevron {
    transform: rotate(90deg);
  }

  > button .extra {
    margin-left: auto;
    font-size: ${G(.85)};
    font-weight: 400;
  }

  /* Opened and closed by its height, animated: a grid row from nothing to its content. */
  .fold {
    display: grid;
    grid-template-rows: 0fr;
    transition: grid-template-rows 0.3s ease;
  }

  &[data-open='true'] .fold {
    grid-template-rows: 1fr;
  }

  .fold > div {
    min-height: 0;
    overflow: hidden;
  }

  .inner {
    padding-top: ${G(.6)};
  }
`,vh=({title:e,extra:t,children:n})=>{let[r,i]=(0,v.useState)(!1),[a,o]=(0,v.useState)(!1);return(0,C.jsxs)(_h,{"data-open":r,children:[(0,C.jsxs)(`button`,{type:`button`,"aria-expanded":r,onClick:()=>{i(!r),o(!0)},children:[(0,C.jsx)(Q,{className:`chevron`,icon:`mdi:chevron-right`}),e,t&&(0,C.jsx)(`span`,{className:`extra`,children:t})]}),(0,C.jsx)(`div`,{className:`fold`,children:(0,C.jsx)(`div`,{children:(0,C.jsx)(`div`,{className:`inner`,children:a&&n()})})})]})},yh=W.div`
  display: flex;
  flex-direction: column;
  max-height: ${G(24)};
  overflow-y: auto;
  padding-right: ${G(.3)};

  .day {
    position: sticky;
    top: 0;
    z-index: 1;
    padding: ${G(.4)} 0 ${G(.3)};
    font-size: ${G(.85)};
    font-weight: 600;
    color: ${({theme:e})=>e.text.secondary};
    background: rgba(24, 24, 28, 0.96);
  }

  .row {
    display: grid;
    grid-template-columns: auto minmax(0, 1fr) auto;
    gap: ${G(.7)};
    align-items: baseline;
    padding: ${G(.45)} ${G(.2)};
    border-bottom: 1px solid rgba(255, 255, 255, 0.05);
  }

  .dot {
    width: ${G(.6)};
    height: ${G(.6)};
    border-radius: 50%;
    transform: translateY(-1px);
  }

  .what {
    font-size: ${G(.92)};
    font-weight: 600;
    overflow-wrap: anywhere;
  }

  .who {
    font-size: ${G(.82)};
    font-weight: 400;
    color: ${({theme:e})=>e.text.secondary};
  }

  .when {
    font-size: ${G(.82)};
    color: ${({theme:e})=>e.text.secondary};
    font-variant-numeric: tabular-nums;
  }

  .empty {
    padding: ${G(.6)} 0;
    font-size: ${G(.9)};
    color: ${({theme:e})=>e.text.secondary};
  }
`,bh=W.div`
  display: flex;
  flex-direction: column;
  gap: ${G(.6)};

  .meta {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    gap: ${G(1)};
    font-size: ${G(.82)};
    color: ${({theme:e})=>e.text.secondary};
  }

  .copy {
    margin-left: auto;
    font-size: ${G(.85)};
    font-weight: 600;
    color: ${({theme:e})=>e.colors.accent};
  }

  input {
    padding: ${G(.55)} ${G(.8)};
    border-radius: ${G(1)};
    border: 1px solid rgba(255, 255, 255, 0.08);
    background: ${({theme:e})=>e.bubble.background};
    color: inherit;
    font: inherit;
    font-size: ${G(.9)};
  }

  .event {
    display: grid;
    grid-template-columns: ${G(3.6)} minmax(0, 0.9fr) minmax(0, 1.4fr);
    gap: ${G(.8)};
    padding: ${G(.5)} ${G(.6)};
    border-left: 3px solid var(--event-color);
    border-radius: ${G(.3)};
    background: ${({theme:e})=>e.bubble.background};
    font-size: ${G(.82)};
  }

  .event .name {
    font-weight: 600;
    overflow-wrap: anywhere;
  }

  .event .details {
    font-family: ui-monospace, 'SFMono-Regular', Menlo, monospace;
    font-size: ${G(.75)};
    color: ${({theme:e})=>e.text.secondary};
    white-space: pre-wrap;
    overflow-wrap: anywhere;
  }
`,xh=({entityIds:e,decisionId:t,controlId:n,coverId:r})=>{let i=X(),a=Ru(),o=Y(),s=nd(),[c,l]=(0,v.useState)(null),u=e.join(` `),d=R(t=>e.map(e=>t.entities[e]?.attributes.friendly_name??e).join(`
`));if((0,v.useEffect)(()=>{if(!s)return;let e=!0,t=Date.now();return s.sendMessagePromise({type:`logbook/get_events`,start_time:new Date(t-864e5).toISOString(),end_time:new Date(t).toISOString(),entity_ids:u.split(` `)}).then(t=>e&&l([...t].sort((e,t)=>t.when-e.when))).catch(()=>e&&l([])),()=>{e=!1}},[s,u]),!c)return(0,C.jsx)(yh,{children:(0,C.jsx)(`div`,{className:`empty`,children:i(`loading_short`)})});if(!c.length)return(0,C.jsx)(yh,{children:(0,C.jsx)(`div`,{className:`empty`,children:i(`acp_no_activity`)})});let f=e=>e.entity_id===r?a.colors.cover:e.entity_id===t?Fm[Im(e.state)??`auto`].color:a.text.muted,p=t=>{let n=t?e.indexOf(t):-1;return n>=0?d.split(`
`)[n]:t??``},m=e=>{if(e.message)return e.message;let a=e.state??``;if(e.entity_id===r&&nm[a])return i(nm[a]);let o=e.entity_id===t?Km(a):void 0;return o?i(o):e.entity_id===n&&Hm[a]?i(Hm[a]):a===`on`?i(`on`):a===`off`?i(`off`):a},h=e=>new Date(e*1e3).toLocaleDateString(o,{weekday:`long`,day:`numeric`,month:`long`});return(0,C.jsx)(yh,{children:c.map((e,t)=>{let n=h(e.when),r=t===0||h(c[t-1].when)!==n;return(0,C.jsxs)(`div`,{children:[r&&(0,C.jsx)(`div`,{className:`day`,children:n}),(0,C.jsxs)(`div`,{className:`row`,children:[(0,C.jsx)(`span`,{className:`dot`,style:{background:f(e)}}),(0,C.jsxs)(`span`,{className:`what`,children:[m(e),` `,(0,C.jsx)(`span`,{className:`who`,children:e.name??p(e.entity_id)})]}),(0,C.jsx)(`span`,{className:`when`,children:new Date(e.when*1e3).toLocaleTimeString(o,{hour:`2-digit`,minute:`2-digit`})})]})]},`${e.when}-${e.entity_id}-${t}`)})})},Sh=e=>/fail|error|gave_up/.test(e)?`#f44336`:/skip/.test(e)?`#ff9800`:/sent|command/.test(e)?`#4caf50`:`rgba(255,255,255,0.25)`,Ch=({targetId:e})=>{let t=X(),n=Y(),r=Z(),[i,a]=(0,v.useState)(null),[o,s]=(0,v.useState)(``),[c,l]=(0,v.useState)(!1);(0,v.useEffect)(()=>{let t=!0;return r(`adaptive_cover_pro`,`get_diagnostics`,{},{entity_id:e},!0).then(e=>{if(!t)return;let n=e?.response?.entries??{},r=Object.values(n)[0];a({raw:e?.response,value:r?.diagnostics??{}})}).catch(()=>t&&a({raw:null,value:{}})),()=>{t=!1}},[r,e]);let u=(0,v.useMemo)(()=>[...i?.value.event_timeline??[]].reverse(),[i]);if(!i)return(0,C.jsx)(bh,{children:(0,C.jsx)(`div`,{className:`meta`,children:t(`loading_short`)})});let d=o.trim().toLowerCase(),f=d?u.filter(e=>JSON.stringify(e).toLowerCase().includes(d)):u,p=e=>{let t=typeof e==`number`?e*(e<0xe8d4a51000?1e3:1):Date.parse(String(e));return Number.isFinite(t)?new Date(t).toLocaleTimeString(n,{hour:`2-digit`,minute:`2-digit`}):``},m=async()=>{let e=JSON.stringify(i.raw,null,2);try{await navigator.clipboard.writeText(e)}catch{let t=document.createElement(`textarea`);t.value=e,document.body.append(t),t.select(),document.execCommand(`copy`),t.remove()}l(!0),window.setTimeout(()=>l(!1),2e3)},h=i.value.data_window;return(0,C.jsxs)(bh,{children:[(0,C.jsxs)(`div`,{className:`meta`,children:[(0,C.jsx)(`span`,{children:t(`acp_events_count`,{shown:f.length,all:u.length})}),i.value.debug_config?.debug_event_buffer_size!==void 0&&(0,C.jsx)(`span`,{children:t(`acp_buffer_size`,{size:i.value.debug_config.debug_event_buffer_size})}),h?.start&&(0,C.jsxs)(`span`,{children:[p(h.start),` – `,p(h.end)]}),(0,C.jsx)(`button`,{type:`button`,className:`copy`,onClick:()=>void m(),children:t(c?`acp_copied`:`acp_copy_diagnostics`)})]}),(0,C.jsx)(`input`,{type:`search`,value:o,placeholder:t(`acp_filter_events`),onChange:e=>s(e.target.value)}),(0,C.jsx)(yh,{children:f.map((e,t)=>{let{ts:n,event:r=``,...i}=e;return(0,C.jsxs)(`div`,{className:`event`,style:{"--event-color":Sh(r)},children:[(0,C.jsx)(`span`,{children:p(n)}),(0,C.jsx)(`span`,{className:`name`,children:r}),(0,C.jsx)(`span`,{className:`details`,children:Object.entries(i).map(([e,t])=>`${e}=${typeof t==`object`?JSON.stringify(t):String(t)}`).join(`
`)})]},`${String(n)}-${t}`)})})]})},wh=(0,v.memo)(({coverId:e,entities:t})=>{let n=X(),r=[e,t.decision,t.lastAction,t.manual,t.sunInFront,t.control].filter(e=>!!e);return(0,C.jsxs)(C.Fragment,{children:[(0,C.jsx)(vh,{title:n(`acp_activity`),children:()=>(0,C.jsx)(xh,{entityIds:r,decisionId:t.decision,controlId:t.control,coverId:e})}),t.target&&(0,C.jsx)(vh,{title:n(`acp_event_buffer`),children:()=>(0,C.jsx)(Ch,{targetId:t.target})})]})}),Th=3e5;function Eh(e,t,n,r){let i=nd(),[a,o]=(0,v.useState)(null),s=`${e}|${t}|${n}|${r}`;return(0,v.useEffect)(()=>{if(!i)return;let a=!0,c=()=>{let c=Date.now(),l=c-r*36e5,u=[e,t,n].filter(e=>!!e);i.sendMessagePromise({type:`history/history_during_period`,entity_ids:u,start_time:new Date(l).toISOString(),end_time:new Date(c).toISOString(),minimal_response:!1,no_attributes:!1,significant_changes_only:!1}).then(r=>{if(!a)return;let i=e=>(e.lc??e.lu)*1e3,u={},d=(r[e]??[]).flatMap(e=>{u=e.a??u;let t=Number(u.current_position);return Number.isFinite(t)?[{t:i(e),v:t}]:[]}),f=(t?r[t]??[]:[]).flatMap(e=>{let t=Number(e.s);return e.s!==``&&Number.isFinite(t)?[{t:i(e),v:t}]:[]}),p=(n?r[n]??[]:[]).filter(e=>e.s!==`unknown`&&e.s!==`unavailable`).map(e=>({t:i(e),key:e.s}));o({key:s,value:{actual:d,target:f,winners:p},start:l,end:c})}).catch(()=>void 0)};c();let l=window.setInterval(c,Th);return()=>{a=!1,window.clearInterval(l)}},[i,e,t,n,r,s]),a?.key===s?a:null}var Dh=W(Om)`
  grid-template-columns: repeat(auto-fit, minmax(${G(14)}, 1fr));
`,Oh=W.div`
  display: flex;
  flex-direction: column;
  gap: ${G(1.4)};

  h3 {
    margin: 0 0 ${G(.5)};
    font-size: ${G(1.05)};
    font-weight: 600;
    color: ${({theme:e})=>e.text.secondary};
  }

  .badges {
    display: flex;
    flex-wrap: wrap;
    gap: ${G(.4)};
  }

  /* Two columns where there is room: what to do on the left, why and when on the right. */
  .columns {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(${G(26)}, 1fr));
    gap: ${G(1.4)};
    align-items: start;
  }

  .column {
    display: flex;
    flex-direction: column;
    gap: ${G(1.4)};
    min-width: 0;
  }

  .cover-buttons {
    display: flex;
    flex-direction: column;
    gap: ${G(.6)};
    margin-bottom: ${G(.6)};
  }

  .switches {
    display: grid;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: ${G(.6)};
  }

  .steps {
    display: flex;
    flex-direction: column;
    gap: ${G(.4)};
  }

  /* Each handler with its own sign, not a choice to tick: the one that
     decides lit in its colour and saying so, one that matched but lost
     still clear, the rest faded back without a box of their own. */
  .step {
    display: grid;
    grid-template-columns: auto minmax(0, 1fr) auto;
    gap: ${G(.7)};
    align-items: center;
    padding: ${G(.45)} ${G(.8)} ${G(.45)} ${G(.45)};
    border-radius: ${G(1.4)};
    background: ${({theme:e})=>e.bubble.background};
  }

  .step[data-matched='false'] {
    background: none;
    opacity: 0.45;
  }

  .step[data-winner='true'] {
    background: color-mix(in srgb, var(--step-color) 14%, transparent);
    box-shadow: inset 0 0 0 1px color-mix(in srgb, var(--step-color) 40%, transparent);
  }

  .step .sign {
    display: flex;
    align-items: center;
    justify-content: center;
    width: ${G(2.3)};
    height: ${G(2.3)};
    border-radius: 50%;
    font-size: ${G(1.15)};
    background: ${({theme:e})=>e.bubble.icon};
    color: ${({theme:e})=>e.text.secondary};
  }

  .step[data-winner='true'] .sign {
    background: color-mix(in srgb, var(--step-color) 24%, transparent);
    color: var(--step-color);
  }

  .step .outcome {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    gap: ${G(.05)};
  }

  .step .verdict {
    font-size: ${G(.75)};
    font-weight: 600;
    color: var(--step-color);
  }

  .step .name {
    font-size: ${G(.95)};
    font-weight: 600;
  }

  .step .reason {
    font-size: ${G(.82)};
    color: ${({theme:e})=>e.text.secondary};
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  .step .position {
    font-size: ${G(.95)};
    font-weight: 600;
    font-variant-numeric: tabular-nums;
  }

  .step[data-winner='false'] .position {
    font-weight: 400;
    color: ${({theme:e})=>e.text.secondary};
  }
`,kh={default:`mdi:window-shutter`,group_lock:`mdi:lock-outline`,group_scene:`mdi:palette-outline`},Ah=[{role:`enabled`,label:`acp_enabled`,icon:`mdi:power`},{role:`automatic`,label:`acp_automatic`,icon:`mdi:autorenew`},{role:`climateMode`,label:`acp_climate_mode`,icon:`mdi:thermostat`},{role:`motionControl`,label:`acp_motion_control`,icon:`mdi:motion-sensor`}],jh=({entityId:e,label:t,icon:n})=>{let r=X(),i=J(e),a=Z();if(!i)return null;let o=i.state===`on`;return(0,C.jsx)(zf,{name:t,state:r(o?`on`:`off`),icon:n,active:o,lit:o,onClick:()=>void a(`switch`,`toggle`,void 0,{entity_id:e})})},Mh=e=>typeof e==`number`?e<0xe8d4a51000?e*1e3:e:typeof e==`string`?Date.parse(e):NaN,Nh=({coverId:e,entities:t,stopOnlyMoving:n,presets:r})=>{let i=X(),a=Ru(),o=Y(),s=Z(),c=qm(t),l=J(e),u=J(t.target),d=J(t.control),f=J(t.sun),p=J(t.sunInFront),m=J(t.motion),h=J(t.climate),g=J(t.lastAction),_=J(t.forecast),v=Eh(e,t.target,t.decision,24),y=J(t.decision)?.attributes.enabled_handlers,b=Bm(c.trace,Array.isArray(y)?y:void 0),x=e=>{let t=e?Date.parse(e):NaN;return Number.isFinite(t)?new Date(t).toLocaleTimeString(o,{hour:`2-digit`,minute:`2-digit`}):`–`},S=e=>Number.isFinite(Number(e))&&e!==null?`${Math.round(Number(e))} %`:`–`,ee=(e,t)=>t&&e[t]?i(e[t]):t??`–`,w=e=>Number.isFinite(Number(e))?`${Tp(Number(e),o,0)}°`:`–`,te=_p(6e4),T=new Date(te).setHours(0,0,0,0),ne=T+864e5,E=(Array.isArray(_?.attributes.forecast)?_.attributes.forecast:[]).map(e=>({t:Mh(e.t),v:Number(e.position)})).filter(e=>Number.isFinite(e.t)&&Number.isFinite(e.v)),re=e=>Fm[Im(e)??`auto`].color,ie=h?.attributes??{},ae=ie.temperature_unit??`°C`;return(0,C.jsxs)(Oh,{children:[(0,C.jsxs)(Om,{children:[(0,C.jsxs)(`div`,{children:[(0,C.jsx)(Q,{className:`icon`,icon:`mdi:target`}),(0,C.jsx)(`span`,{className:`label`,children:i(`acp_target`)}),(0,C.jsx)(`span`,{className:`value`,children:S(u?.attributes.linear_position??u?.state)})]}),(0,C.jsxs)(`div`,{children:[(0,C.jsx)(Q,{className:`icon`,icon:`mdi:window-shutter`}),(0,C.jsx)(`span`,{className:`label`,children:i(`acp_actual`)}),(0,C.jsxs)(`span`,{className:`value`,children:[l&&nm[l.state]?`${i(nm[l.state])} · `:``,S(l?.attributes.current_position)]})]}),(0,C.jsxs)(`div`,{children:[(0,C.jsx)(Q,{className:`icon`,icon:`mdi:state-machine`}),(0,C.jsx)(`span`,{className:`label`,children:i(`acp_control`)}),(0,C.jsx)(`span`,{className:`value`,children:ee(Hm,d?.state)})]}),(0,C.jsxs)(`div`,{children:[(0,C.jsx)(Q,{className:`icon`,icon:p?.state===`on`?`mdi:white-balance-sunny`:`mdi:weather-sunny-off`}),(0,C.jsx)(`span`,{className:`label`,children:i(`acp_sun`)}),(0,C.jsxs)(`span`,{className:`value`,children:[p?p.state===`on`?i(`acp_sun_on_window`):i(`acp_sun_off_window`):``,f?` · ${w(f.state)} / ${w(f.attributes.elevation)}`:``]})]})]}),(0,C.jsx)(`div`,{className:`badges`,children:(0,C.jsx)(Jm,{entities:t})}),(0,C.jsx)(gh,{entities:t}),(0,C.jsxs)(`div`,{className:`columns`,children:[(0,C.jsxs)(`div`,{className:`column`,children:[(0,C.jsxs)(`section`,{children:[(0,C.jsx)(`h3`,{children:i(`acp_switches`)}),(0,C.jsxs)(`div`,{className:`cover-buttons`,children:[(0,C.jsx)(Cm,{entityId:e,stopOnlyMoving:n}),(0,C.jsx)(mm,{entityId:e,presets:r,large:!0})]}),(0,C.jsxs)(`div`,{className:`switches`,children:[Ah.map(e=>{let n=t[e.role];return n?(0,C.jsx)(jh,{entityId:n,label:i(e.label),icon:e.icon},e.role):null}),c.manual&&t.resetManual&&(0,C.jsx)(zf,{name:i(`acp_reset_manual`),icon:`mdi:restore`,iconColor:Fm.manual.color,onClick:()=>void s(`button`,`press`,void 0,{entity_id:t.resetManual})})]})]}),b.length>0&&(0,C.jsxs)(`section`,{children:[(0,C.jsx)(`h3`,{children:i(`acp_decision`)}),(0,C.jsx)(`div`,{className:`steps`,children:b.map(e=>{let t=Km(e.handler),n=e===c.trace.find(e=>e.matched),r=e.held_position??e.position,o=Im(e.handler),s=r==null?``:`${Math.round(r)} %`;return(0,C.jsxs)(`div`,{className:`step`,"data-matched":e.matched,"data-winner":n,style:{"--step-color":o?Fm[o].color:a.colors.accent},children:[(0,C.jsx)(`span`,{className:`sign`,children:(0,C.jsx)(Q,{icon:o?Fm[o].icon:kh[e.handler]??`mdi:window-shutter`})}),(0,C.jsxs)(`span`,{children:[(0,C.jsx)(`div`,{className:`name`,children:t?i(t):e.handler}),e.reason&&(0,C.jsx)(`div`,{className:`reason`,children:e.reason})]}),e.matched&&s&&(0,C.jsxs)(`span`,{className:`outcome`,children:[(0,C.jsx)(`span`,{className:`position`,children:n?s:i(`acp_would`,{position:s})}),n&&(0,C.jsx)(`span`,{className:`verdict`,children:i(`acp_decides`)})]})]},e.handler)})})]})]}),(0,C.jsxs)(`div`,{className:`column`,children:[(0,C.jsxs)(`section`,{children:[(0,C.jsx)(`h3`,{children:i(`acp_details`)}),(0,C.jsxs)(Dh,{children:[c.manualUntil&&(0,C.jsxs)(`div`,{children:[(0,C.jsx)(Q,{className:`icon`,icon:`mdi:hand-back-right`}),(0,C.jsx)(`span`,{className:`label`,children:i(`acp_manual_until`)}),(0,C.jsx)(`span`,{className:`value`,children:x(c.manualUntil.toISOString())})]}),m&&m.state!==`not_configured`&&(0,C.jsxs)(`div`,{children:[(0,C.jsx)(Q,{className:`icon`,icon:`mdi:motion-sensor`}),(0,C.jsx)(`span`,{className:`label`,children:i(`acp_motion`)}),(0,C.jsx)(`span`,{className:`value`,children:ee(Um,m.state)})]}),typeof g?.attributes.timestamp==`string`&&(0,C.jsxs)(`div`,{children:[(0,C.jsx)(Q,{className:`icon`,icon:`mdi:history`}),(0,C.jsx)(`span`,{className:`label`,children:i(`acp_last_action`)}),(0,C.jsxs)(`span`,{className:`value`,children:[x(g.attributes.timestamp),Number.isFinite(Number(g.attributes.position))?` · ${S(g.attributes.position)}`:``]})]}),h&&(0,C.jsxs)(`div`,{children:[(0,C.jsx)(Q,{className:`icon`,icon:`mdi:thermostat`}),(0,C.jsxs)(`span`,{className:`label`,children:[i(`acp_climate`),` · `,ee(Wm,h.state)]}),(0,C.jsxs)(`span`,{className:`value`,"data-tip":`${i(`acp_indoor`)} / ${i(`acp_outdoor`)}`,children:[[ie.indoor_temperature,ie.outdoor_temperature].map(e=>e==null?`–`:Tp(Number(e),o,1)).join(` / `),` `,ae]})]})]})]}),E.length>0&&(0,C.jsxs)(`section`,{children:[(0,C.jsx)(`h3`,{children:i(`acp_forecast`)}),(0,C.jsx)(ah,{start:T,end:ne,marker:te,lines:[{points:E,color:a.colors.warm,label:i(`acp_history_target`)}]})]}),v&&(v.value.actual.length>0||v.value.target.length>0)&&(0,C.jsxs)(`section`,{children:[(0,C.jsx)(`h3`,{children:i(`acp_history`)}),(0,C.jsx)(ah,{start:v.start,end:v.end,lines:[{points:v.value.target,color:a.colors.warm,label:i(`acp_history_target`),dashed:!0},{points:v.value.actual,color:a.colors.cover,label:i(`acp_history_actual`)}],bands:Qm(v.value.winners,v.start,v.end).map(e=>({...e,color:re(e.key)}))})]})]})]}),(0,C.jsx)(wh,{coverId:e,entities:t})]})},Ph=[],Fh=(0,v.memo)(({open:e,onClose:t,coverId:n,entities:r,name:i,stopOnlyMoving:a=!1,presets:o=Ph})=>{let s=Ru(),c=J(n),l=J(r.target),u=i||c?.attributes.friendly_name||n;return(0,C.jsx)(Mf,{open:e,onClose:t,title:u,subtitle:l?.attributes.reason??void 0,icon:`mdi:window-shutter-auto`,iconColor:s.colors.cover,width:72,children:(0,C.jsx)(Nh,{coverId:n,entities:r,stopOnlyMoving:a,presets:o})})}),Ih=new WeakMap;function Lh(e){let t=Ih.get(e);return t||(t=e.sendMessagePromise({type:`config/entity_registry/list`}).then(e=>e.filter(e=>e.platform===jm)),t.catch(()=>Ih.delete(e)),Ih.set(e,t)),t}function Rh(e){let t=nd(),[n,r]=(0,v.useState)(null),i=R(t=>e?Pm(e,t.entities):void 0);return(0,v.useEffect)(()=>{if(!t)return;let e=!0;return Lh(t).then(t=>e&&r(t)).catch(()=>void 0),()=>{e=!1}},[t]),(0,v.useMemo)(()=>{if(!i||!n)return null;let e=n.find(e=>e.entity_id===i)?.config_entry_id;return e?Nm(n,e):null},[i,n])}var zh=(0,v.memo)(({entities:e})=>{let t=X(),n=Y(),r=qm(e),i=r.manualUntil?.toLocaleTimeString(n,{hour:`2-digit`,minute:`2-digit`}),a=[...r.auto?[`auto`]:[],...r.badge?[r.badge]:[]];return(0,C.jsxs)(C.Fragment,{children:[a.map(e=>{let n=e===`manual`&&i?`${t(Vm.manual)} · ${i}`:t(Vm[e]);return(0,C.jsx)(`span`,{className:`sign`,"data-tip":n,"aria-label":n,children:(0,C.jsx)(Q,{icon:Fm[e].icon})},e)}),r.sunAway&&(0,C.jsx)(`span`,{className:`sign`,"data-tip":t(`acp_sun_away`),"aria-label":t(`acp_sun_away`),children:(0,C.jsx)(Q,{icon:`mdi:weather-sunny-off`})})]})}),Bh=(0,v.memo)(({entities:e})=>{let t=X(),n=Z(),{manual:r}=qm(e);return!r||!e.resetManual?null:(0,C.jsx)(`button`,{type:`button`,className:`round`,"data-tip":t(`acp_reset_manual`),"aria-label":t(`acp_reset_manual`),onClick:()=>void n(`button`,`press`,void 0,{entity_id:e.resetManual}),children:(0,C.jsx)(Q,{icon:`mdi:window-shutter-auto`})})}),Vh=(0,v.memo)(({tile:e})=>{let t=Rh(e.entity||void 0),[n,r]=(0,v.useState)(!1);return(0,C.jsxs)(C.Fragment,{children:[(0,C.jsx)(xm,{tile:e,signs:t&&(0,C.jsx)(zh,{entities:t}),action:t&&(0,C.jsx)(Bh,{entities:t}),onDetails:t?()=>r(!0):void 0}),t&&(0,C.jsx)(Fh,{open:n,onClose:()=>r(!1),coverId:e.entity,entities:t,name:e.name,stopOnlyMoving:e.options.stop_only_moving===!0,presets:fm(e.options.positions)})]})}),Hh=[2,3,5,7,9],Uh=[0,1,2,3,4],Wh=[0,2,4,6],Gh=(e,t)=>[...t].reverse().find(t=>t<=e)??t[0];function Kh(e){let t=typeof e==`string`?/^\s*(\d+)\.(\d+)(?:\.(\d+))?\s*$/.exec(e):null;return t?{bed:Gh(Number(t[1]),Hh),subs:Math.min(4,Number(t[2])),heights:Gh(Number(t[3]??0),Wh)}:null}var qh=e=>`${e.bed}.${e.subs}.${e.heights}`,Jh={2:[`FL`,`FR`],3:[`FL`,`FR`,`C`],5:[`FL`,`FR`,`C`,`SL`,`SR`],7:[`FL`,`FR`,`C`,`SL`,`SR`,`SBL`,`SBR`],9:[`FL`,`FR`,`C`,`FWL`,`FWR`,`SL`,`SR`,`SBL`,`SBR`]},Yh={0:[],2:[`FHL`,`FHR`],4:[`FHL`,`FHR`,`RHL`,`RHR`],6:[`FHL`,`FHR`,`TML`,`TMR`,`RHL`,`RHR`]},Xh=[`SW1`,`SW2`,`SW3`,`SW4`];function Zh(e){return[...Jh[e.bed]??Jh[2],...Yh[e.heights]??[],...Xh.slice(0,e.subs)]}var Qh=e=>e.startsWith(`SW`),$h=[/atmos/,/dts\s*[:-]?\s*x/,/neural/,/auro/,/imax/,/dolby\s*surround/,/\bdsur\b/,/\+\s*ds\b/,/(multi|m)\s*-?\s*ch(annel)?\s*stereo/,/all\s*(zone|ch)\s*stereo/,/virtual/,/rock arena|jazz club|matrix|mono movie|video game/],eg=[/dolby/,/dts/,/pcm/,/multi\s*ch/,/\bm\s*ch\s*in\b/,/true\s*hd/,/direct/,/\d\.\d/];function tg(e){let t=(e??``).trim().toLowerCase();return t?$h.some(e=>e.test(t))?`all`:/stereo/.test(t)?`stereo`:eg.some(e=>e.test(t))?`source`:null:null}function ng(...e){for(let t of e){if(!t)continue;let e=/(\d)\s*\/\s*(\d)\s*\/\s*\.?(\d)(?:\s*\/\s*(\d))?/.exec(t);if(e)return{front:+e[1],surround:+e[2],lfe:+e[3],heights:+(e[4]??0)};let n=/(\d{1,2})\.(\d)(?:\.(\d))?/.exec(t);if(n){let e=+n[1],t=e===4?2:Math.min(3,e);return{front:t,surround:Math.max(0,e-t),lfe:+n[2],heights:+(n[3]??0)}}}return null}function rg(e){let t=ng(e);return t?`${t.front+t.surround}.${t.lfe}${t.heights?`.${t.heights}`:``}`:e&&/[a-z]/i.test(e)?e.trim():void 0}function ig(e){let t=e.front===1?[`C`]:e.front===2?[`FL`,`FR`]:e.front>=3?[`FL`,`FR`,`C`]:[],n=e.surround>=3?[`SL`,`SR`,`SBL`,`SBR`]:e.surround>=1?[`SL`,`SR`]:[];return[...t,...n,...e.heights>0?Yh[6]:[],...e.lfe>0?Xh:[]]}function ag(e,t,n=[]){let r=Zh(e),i=t.on?tg(t.mode):null,a=t.on&&!i&&ng(t.format)?`source`:i,o=a===`source`?ng(t.format,t.mode):null,s=t.on?a===`all`?r:a===`stereo`?[`FL`,`FR`]:o?ig(o):null:[],c={};if(!t.on)return Object.fromEntries(r.map(e=>[e,`unpowered`]));for(let e of r)c[e]=Qh(e)&&n.includes(e)?`unpowered`:s===null?`unknown`:s.includes(e)?`active`:`silent`;if(s?.includes(`C`)&&!r.includes(`C`))for(let e of[`FL`,`FR`])c[e]===`silent`&&(c[e]=`active`);return c}function og(e){let t=e.split(`.`)[0];switch(t){case`button`:case`input_button`:return[t,`press`];case`script`:case`scene`:return[t,`turn_on`];case`automation`:return[t,`trigger`];case`switch`:case`input_boolean`:case`light`:case`fan`:return[t,`toggle`];default:return[`homeassistant`,`turn_on`]}}var sg={width:4.2,depth:5.4,height:2.6},cg=(e,t,n,r,i,a)=>({x:e,y:t,z:n,w:r,d:i,h:a}),lg=[`wall`,`ceiling`],ug={front:`wall`,rear:`wall`};function dg(e,t){return e===`TML`||e===`TMR`?!0:e===`FHL`||e===`FHR`?t.front===`ceiling`:e===`RHL`||e===`RHR`?t.rear===`ceiling`:!1}var fg=.26,pg=.06,mg=(e,t)=>cg(e,t,sg.height-pg,fg,fg,pg);function hg(e,t=ug){let n=sg.depth,r={FL:cg(-1.35,.4,0,.3,.32,1.1),FR:cg(1.35,.4,0,.3,.32,1.1),C:cg(0,.32,.6,.62,.26,.2),FWL:cg(-1.85,2.9,.95,.22,.26,.36),FWR:cg(1.85,2.9,.95,.22,.26,.36),SL:cg(-1.8,4.05,.95,.22,.26,.36),SR:cg(1.8,4.05,.95,.22,.26,.36),SBL:cg(-1.2,n-.3,.9,.28,.28,.52),SBR:cg(1.2,n-.3,.9,.28,.28,.52),FHL:t.front===`ceiling`?mg(-1.1,1.6):cg(-1.3,.13,2.05,.24,.22,.32),FHR:t.front===`ceiling`?mg(1.1,1.6):cg(1.3,.13,2.05,.24,.22,.32),TML:mg(-.8,2.9),TMR:mg(.8,2.9),RHL:t.rear===`ceiling`?mg(-1.1,n-.55):cg(-1.3,n-.13,2.05,.24,.22,.32),RHR:t.rear===`ceiling`?mg(1.1,n-.55):cg(1.3,n-.13,2.05,.24,.22,.32),SW1:cg(e.subs===1?0:-.4,.34,0,.4,.4,.42),SW2:cg(.4,.34,0,.4,.4,.42),SW3:{...cg(e.subs===3?0:-sg.width/2+.3,n-.3,0,.4,.4,.42),yaw:Math.PI},SW4:{...cg(sg.width/2-.3,n-.3,0,.4,.4,.42),yaw:Math.PI}};return Object.fromEntries(Zh(e).map(e=>[e,_g.includes(e)&&!dg(e,t)?yg(r[e],gg,vg.includes(e)):r[e]]))}var gg=[0,4.05,1],_g=[`FL`,`FR`,`FWL`,`FWR`,`SL`,`SR`,`SBL`,`SBR`,`FHL`,`FHR`,`RHL`,`RHR`],vg=[`FHL`,`FHR`,`RHL`,`RHR`];function yg(e,t,n=!0){let[r,i,a]=[t[0]-e.x,t[1]-e.y,t[2]-(e.z+e.h/2)];return{...e,yaw:Math.atan2(-r,i),pitch:n?Math.atan2(a,Math.hypot(r,i)):0}}function bg(e,[t,n,r]){let i=e.pitch??0,a=e.yaw??0,[o,s]=[n*Math.cos(i)-r*Math.sin(i),n*Math.sin(i)+r*Math.cos(i)],[c,l]=[t*Math.cos(a)-o*Math.sin(a),t*Math.sin(a)+o*Math.cos(a)];return[e.x+c,e.y+l,e.z+e.h/2+s]}var xg=[`none`,`straight`,`l_left`,`l_right`];function Sg(e){if(e===`none`)return[];let[t,n,r,i,a]=[-1.4,1.4,3.72,4.37,4.57],o=.28,s=.14,c=(e,t,n,r,i,a)=>cg((e+t)/2,(n+r)/2,i,t-e,r-n,a-i),l=e=>({...e,x:-e.x}),u=(e,t,n)=>Array.from({length:n},(a,s)=>{let l=(t-e)/n;return c(e+s*l+.01,e+(s+1)*l-.01,r+.02,i,o,.44000000000000006)}),d=[c(t,n,i,a,0,.83),c(n-s,n,r,i,0,.62)];if(e===`straight`)return[...d,c(t,t+s,r,i,0,.62),c(t+s,n-s,r,i,0,o),...u(t+s,n-s,3)];let f=t+.86,p=t+.2,m=3.1,h=[...d,c(f,n-s,r,i,0,o),...u(f,n-s,2),c(t,p,m,i,0,.83),c(p,f,m,i,0,o),c(t,f,2.45,m,0,o),c(p+.02,f-.02,m,i,o,.44000000000000006),c(t+.02,f-.02,2.47,3.0900000000000003,o,.44000000000000006)];return e===`l_right`?h.map(l):h}var Cg=cg(0,.05,.95,1.5,.06,.86);function wg(e,t=ug){return dg(e,t)?`ceiling`:e===`FL`||e===`FR`?`tower`:e===`C`?`center`:e.startsWith(`SW`)?`sub`:e===`SBL`||e===`SBR`?`threeWay`:`bookshelf`}var Tg=[`SL`,`SR`,`FWL`,`FWR`];function Eg(e,t=28){let n=e.w/2,r=r=>Array.from({length:t},(i,a)=>{let o=a/t*Math.PI*2;return[e.x+n*Math.cos(o),e.y+n*Math.sin(o),r]}),[i,a]=[r(e.z),r(e.z+e.h)],o=i.map((e,n)=>{let r=(n+1)%t,o=(n+.5)/t*Math.PI*2;return{name:`side`,points:[e,i[r],a[r],a[n]],normal:[Math.cos(o),Math.sin(o),0]}});return[{name:`bottom`,points:i,normal:[0,0,-1]},...o,{name:`top`,points:a,normal:[0,0,1]}]}function Dg(e,t,n){return e[0]*(n[0]-t[0])+e[1]*(n[1]-t[1])+e[2]*(n[2]-t[2])>0}var Og={tower:[[.5,.9,.13],[.5,.76,.22],[.5,.54,.32],[.5,.3,.32]],bookshelf:[[.5,.8,.14],[.5,.4,.32]],threeWay:[[.5,.87,.12],[.5,.67,.2],[.5,.33,.32]],center:[[.22,.5,.13],[.78,.5,.13],[.5,.5,.06]],sub:[[.5,.5,.36]],ceiling:[[.5,.5,.36]]};function kg(e,t,n,r,i,a=24){let o=i*e.w,s=-e.w/2+n*e.w;return Array.from({length:a},(n,i)=>{let c=i/a*Math.PI*2;return bg(e,t===`back`?[s+o*Math.cos(c),e.d/2,-e.h/2+r*e.h+o*Math.sin(c)]:[s+o*Math.cos(c),-e.d/2+r*e.d+o*Math.sin(c),e.h/2])})}function Ag(e){let[t,n,r]=[e.w/2,e.d/2,e.h/2];return[[-t,-n,-r],[t,-n,-r],[t,n,-r],[-t,n,-r],[-t,-n,r],[t,-n,r],[t,n,r],[-t,n,r]].map(t=>bg(e,t))}var jg=[{name:`back`,corners:[3,2,6,7]},{name:`front`,corners:[1,0,4,5]},{name:`left`,corners:[0,3,7,4]},{name:`right`,corners:[2,1,5,6]},{name:`top`,corners:[4,7,6,5]},{name:`bottom`,corners:[0,1,2,3]}],Mg=(e,t)=>[e[0]-t[0],e[1]-t[1],e[2]-t[2]],Ng=(e,t)=>e[0]*t[0]+e[1]*t[1]+e[2]*t[2],Pg=(e,t)=>[e[1]*t[2]-e[2]*t[1],e[2]*t[0]-e[0]*t[2],e[0]*t[1]-e[1]*t[0]],Fg=e=>{let t=Math.hypot(...e);return[e[0]/t,e[1]/t,e[2]/t]},Ig={turn:0,tilt:0,zoom:1,panX:0,panY:0},Lg=[0,sg.depth+2.2,sg.height+3.6],Rg=[0,sg.depth*.46,0],zg=(e,t,n)=>Math.min(n,Math.max(t,e));function Bg(e){let t=Mg(Lg,Rg),n=Math.asin(t[2]/Math.hypot(...t));return{turn:e.turn,tilt:zg(e.tilt,.12-n,1.5-n),zoom:zg(e.zoom,.75,1.8),panX:zg(e.panX,-1.5,1.5),panY:zg(e.panY,-1.5,1.5)}}function Vg(e=Ig){let t=Mg(Lg,Rg),n=Math.hypot(...t)*e.zoom,r=Math.asin(t[2]/Math.hypot(...t))+e.tilt,i=Math.atan2(t[0],t[1])+e.turn,a=[Rg[0]+e.panX*Math.cos(i)-e.panY*Math.sin(i),Rg[1]-e.panX*Math.sin(i)-e.panY*Math.cos(i),Rg[2]],o=[a[0]+n*Math.cos(r)*Math.sin(i),a[1]+n*Math.cos(r)*Math.cos(i),a[2]+n*Math.sin(r)],s=Fg(Mg(a,o)),c=Fg(Pg([0,0,1],s));return{eye:o,forward:s,right:c,up:Pg(s,c)}}function Hg(){let[e,t]=[gg[0],gg[1]-.04],n=(e,t,n)=>({from:e,to:t,radius:n}),r=e=>[e(-1),e(1)];return{limbs:[...r(r=>n([e+r*.1,t+.1,.53],[e+r*.12,t-.34,.54],.08)),...r(r=>n([e+r*.12,t-.4,.5],[e+r*.13,t-.44,.1],.06)),...r(r=>n([e+r*.13,t-.44,.045],[e+r*.14,t-.6,.045],.045)),n([e,t+.12,.6],[e,t+.18,.88],.16),n([e-.19,t+.18,.93],[e+.19,t+.18,.93],.075),n([e,t+.17,.96],[e,t+.15,1.06],.05),...r(r=>n([e+r*.22,t+.18,.9],[e+r*.25,t+.08,.66],.055)),...r(r=>n([e+r*.25,t+.06,.64],[e+r*.16,t-.2,.63],.048))],head:[e,t+.13,1.17],headRadius:.1}}function Ug(e){let t=e===`l_right`?-1:1,n=e=>.445+e,r=(e,n,r)=>[e*t,4.04+n,r],i=(e,t,n)=>({from:e,to:t,radius:n}),a=e=>[e(-1),e(1)];return{limbs:[...a(e=>i(r(.32,e*.1,n(.08)),r(-.06,e*.1,n(.08)),.08)),...a(e=>i(r(-.1,e*.1,n(.06)),r(-.44,e*.1,n(.06)),.06)),...a(e=>i(r(-.48,e*.1,n(.045)),r(-.5,e*.1,n(.045)+.1),.045)),i(r(.38,0,n(.14)),r(.78,0,n(.14)),.14),i(r(.84,-.19,n(.075)),r(.84,.19,n(.075)),.075),...a(e=>i(r(.82,e*.24,n(.055)),r(.56,e*.25,n(.055)),.055)),...a(e=>i(r(.54,e*.25,n(.048)),r(.3,e*.22,n(.048)),.048))],head:r(1.04,0,n(.1)),headRadius:.1}}function Wg(e,t){let n=Mg(e,t.eye),r=Ng(n,t.forward);return{x:Ng(n,t.right)/r,y:-Ng(n,t.up)/r,depth:r}}function Gg(e){let t=0;for(let n=0;n<e.length;n++){let[r,i]=e[n],[a,o]=e[(n+1)%e.length];t+=r*o-a*i}return-t}function Kg(e,t=0){return{min:[0,1,2].map(n=>Math.min(...e.map(e=>e[n]))-t),max:[0,1,2].map(n=>Math.max(...e.map(e=>e[n]))+t)}}var qg=e=>Kg(Ag(e)),Jg=e=>Kg([e.from,e.to],e.radius),Yg=(e,t)=>Kg([e],t);function Xg(e,t,n){for(let r of[0,1,2]){if(e.max[r]<=t.min[r]+1e-6)return n[r]>=e.max[r];if(t.max[r]<=e.min[r]+1e-6)return n[r]<=t.max[r]}return null}function Zg(e,t){let n=e.length,r=e.map(()=>[]),i=Array(n).fill(0),a=(e,t)=>e[0]<t[2]&&t[0]<e[2]&&e[1]<t[3]&&t[1]<e[3];for(let o=0;o<n;o++)for(let s=o+1;s<n;s++){if(!a(e[o].rect,e[s].rect))continue;let n=Xg(e[o].bounds,e[s].bounds,t);if(n===null)continue;let[c,l]=n?[o,s]:[s,o];r[c].push(l),i[l]+=1}let o=[],s=Array(n).fill(!1);for(;o.length<n;){let t=-1;for(let r=0;r<n;r++)s[r]||i[r]>0||(t<0||e[r].depth>e[t].depth)&&(t=r);if(t<0)for(let r=0;r<n;r++)!s[r]&&(t<0||e[r].depth>e[t].depth)&&(t=r);s[t]=!0,o.push(t);for(let e of r[t])--i[e]}return o}var Qg={pause:1,seek:2,volumeSet:4,volumeMute:8,previous:16,next:32,turnOn:128,turnOff:256,volumeStep:1024,selectSource:2048,stop:4096,play:16384,shuffle:32768,repeat:262144};function $g(e){let t=typeof e==`number`?e:0;return Object.fromEntries(Object.entries(Qg).map(([e,n])=>[e,(t&n)!==0]))}var e_=[`off`,`standby`,`unavailable`,`unknown`];function t_(e){return!!e&&!e_.includes(e.state)}function n_(e){return t_(e)?e.state===`playing`?4:e.state===`paused`||e.state===`buffering`?3:e.attributes.media_title?2:1:0}function r_(e,t){let n,r=-1;for(let i of e){let e=n_(t[i]);e>r&&(n=i,r=e)}return n}function i_(e,t){let n=Number(e?.attributes.media_duration);if(!e||!Number.isFinite(n)||n<=0)return null;let r=Number(e.attributes.media_position);Number.isFinite(r)||(r=0);let i=Date.parse(String(e.attributes.media_position_updated_at??``));return e.state===`playing`&&Number.isFinite(i)&&(r+=Math.max(0,t-i)/1e3),{position:Math.min(n,Math.max(0,r)),duration:n}}function a_(e){let t=Math.max(0,Math.floor(e)),n=Math.floor(t/3600),r=Math.floor(t%3600/60),i=String(t%60).padStart(2,`0`);return n?`${n}:${String(r).padStart(2,`0`)}:${i}`:`${String(r).padStart(2,`0`)}:${i}`}var o_=[`auto`,`db`,`percent`];function s_(e,t){return e===`db`||e!==`percent`&&t===`denonavr`}function c_(e){return Math.round((e*100-80)*2)/2}var l_=[`source`,`app`,`run`],u_=e=>typeof e==`string`?e:``;function d_(e,t,n){return Array.isArray(e)?e.filter(e=>!!e&&typeof e==`object`).slice(0,t).map(n):[]}var f_=(e,t)=>({id:u_(e.id)||`item-${t}`,entity:u_(e.entity),name:u_(e.name),icon:u_(e.icon)}),p_=e=>d_(e,8,(e,t)=>({...f_(e,t),kind:l_.includes(e.kind)?e.kind:`source`,value:u_(e.value)})),m_=e=>d_(e,4,(e,t)=>({...f_(e,t),subs:Array.isArray(e.subs)?e.subs.filter(e=>typeof e==`string`):[]})),h_=e=>d_(e,4,(e,t)=>({...f_(e,t),info:u_(e.info)}));function g_(e,t){if(!t_(t)||!e.value)return!1;let n=e.value.toLowerCase();return e.kind===`source`?String(t.attributes.source??``).toLowerCase()===n:e.kind===`app`&&String(t.attributes.app_id??``).toLowerCase()===n}function __(e,t){if(e.kind===`run`){let[t,n]=og(e.entity);return[{domain:t,service:n}]}let n=t_(t)?[]:[{domain:`media_player`,service:`turn_on`}];return e.kind===`app`?[...n,{domain:`media_player`,service:`play_media`,data:{media_content_type:`app`,media_content_id:e.value}}]:[...n,{domain:`media_player`,service:`select_source`,data:{source:e.value}}]}var v_={volume:`volume`,format:`audio_format`,decoder:`decoder`,signal:`input_signal`,sampleRate:`sample_rate`,modeInfo:`mode_info`,soundMode:`sound_mode`,subOutput:`subwoofer_switch`};function y_(e,t){let n=t[e]?.device_id;if(!n)return{};let r={};for(let e of Object.values(t)){if(e.device_id!==n||e.platform!==`denon_avr`)continue;let t=Object.keys(v_).find(t=>v_[t]===e.translation_key);(!t||e.entity_id.startsWith(t===`subOutput`?`switch.`:`sensor.`))&&t&&(r[t]=e.entity_id)}return r}var b_=[`contain`,`cover`,`stretch`],x_=[`off`,`art`,`image`];function S_(e,t){let n=Array.isArray(t.players)?t.players.filter(e=>typeof e==`string`&&e!==``):[];return{main:e,players:[...new Set([e,...n].filter(Boolean))],power:u_(t.power)||e,volume:u_(t.volume)||e,volumeUnit:o_.includes(t.volume_unit)?t.volume_unit:`auto`,presets:p_(t.presets),switches:m_(t.switches),switchesTitle:u_(t.switches_title),devices:h_(t.devices),night:u_(t.night),nightText:u_(t.night_text),modeEntity:u_(t.mode_entity),formatEntity:u_(t.format_entity),layout:Kh(t.speakers),sofa:xg.includes(t.sofa)?t.sofa:`none`,listener:t.listener===!0,roomMovable:t.room_movable===!0,walls:t.hide_walls!==!0,screen:x_.includes(t.screen)?t.screen:`off`,screenImage:u_(t.screen_image),screenScale:typeof t.screen_scale==`number`?Math.min(100,Math.max(30,Math.round(t.screen_scale))):90,screenFit:b_.includes(t.screen_fit)?t.screen_fit:`contain`,tvEntity:u_(t.tv_entity),sleeps:t.listener_sleeps===!0,mounts:{front:lg.includes(t.heights_front)?t.heights_front:`wall`,rear:lg.includes(t.heights_rear)?t.heights_rear:`wall`},subOutput:u_(t.sub_output)}}function C_(e){let t=e?.attributes??{},n=t.app_name??t.source;return typeof n==`string`&&n?n:void 0}function w_(e,t){return t?`mdi:volume-off`:e===null||e<.34?`mdi:volume-low`:e<.67?`mdi:volume-medium`:`mdi:volume-high`}var T_=W.div`
  display: ${({$full:e})=>e?`grid`:`flex`};
  grid-template-columns: repeat(2, minmax(0, 1fr)) minmax(0, 1.6fr) auto minmax(0, 1.6fr) repeat(2, minmax(0, 1fr));
  align-items: center;
  justify-items: center;
  justify-content: center;
  gap: ${({$large:e})=>G(e?.8:.5)};

  button {
    flex: 1 1 0;
    min-width: 0;
    height: ${({$large:e})=>G(e?3.4:2.8)};
    border-radius: ${({$large:e})=>G(e?1.7:1.4)};
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: ${({$large:e})=>G(e?1.45:1.35)};
    background-color: ${({theme:e,$large:t})=>t?e.bubble.background:e.bubble.icon};
    ${({theme:e})=>Jd(e.bubble.hover,e.bubble.pressed)}
  }

  button:disabled {
    opacity: 0.35;
  }

  .skip {
    width: 100%;
  }

  .round {
    flex: none;
    width: ${({$large:e})=>G(e?3.4:2.8)};
  }

  button[aria-pressed='true'] {
    color: ${({theme:e})=>e.colors.accent};
  }

  .main {
    flex: none;
    width: ${({$large:e})=>G(e?4.4:3.6)};
    height: ${({$large:e})=>G(e?4.4:3.6)};
    border-radius: 50%;
    font-size: ${({$large:e})=>G(e?1.9:1.6)};
    box-shadow: inset 0 0 0 2px ${({theme:e})=>e.bubble.header};
    transition: box-shadow 0.3s ease;
  }

  .main[data-playing='true'] {
    color: ${({theme:e})=>e.colors.accent};
    box-shadow:
      inset 0 0 0 2px ${({theme:e})=>e.colors.accent},
      0 0 ${G(1.2)} color-mix(in srgb, ${({theme:e})=>e.colors.accent} 35%, transparent);
  }
`,E_={off:`all`,all:`one`,one:`off`},D_={off:`mdi:repeat-off`,all:`mdi:repeat`,one:`mdi:repeat-once`},O_=(0,v.memo)(({entityId:e,full:t=!1,large:n=!1,className:r})=>{let i=X(),a=J(e),o=Z(),s=a?.attributes??{},c=$g(s.supported_features),l=t_(a),u=a?.state===`playing`,d=(t,n)=>e&&void o(`media_player`,t,n,{entity_id:e}),f=typeof s.repeat==`string`?s.repeat:`off`;return(0,C.jsxs)(T_,{$large:n,$full:t,className:r,children:[t&&!c.shuffle&&(0,C.jsx)(`span`,{}),t&&c.shuffle&&(0,C.jsx)(`button`,{className:`round`,type:`button`,"aria-label":i(`media_shuffle`),"data-tip":i(`media_shuffle`),"aria-pressed":s.shuffle===!0,disabled:!l,onClick:()=>d(`shuffle_set`,{shuffle:s.shuffle!==!0}),children:(0,C.jsx)(Q,{icon:s.shuffle===!0?`mdi:shuffle-variant`:`mdi:shuffle-disabled`})}),t&&!c.repeat&&(0,C.jsx)(`span`,{}),t&&c.repeat&&(0,C.jsx)(`button`,{className:`round`,type:`button`,"aria-label":i(`media_repeat`),"data-tip":i(`media_repeat`),"aria-pressed":f!==`off`,disabled:!l,onClick:()=>d(`repeat_set`,{repeat:E_[f]??`off`}),children:(0,C.jsx)(Q,{icon:D_[f]??`mdi:repeat`})}),(0,C.jsx)(`button`,{type:`button`,className:`skip`,"aria-label":i(`media_previous`),disabled:!l||!c.previous,onClick:()=>d(`media_previous_track`),children:(0,C.jsx)(Q,{icon:`mdi:skip-previous`})}),(0,C.jsx)(`button`,{type:`button`,className:`main`,"data-playing":u,"aria-label":i(u?`media_pause`:`media_play`),disabled:!l||!(c.pause||c.play),onClick:()=>d(`media_play_pause`),children:(0,C.jsx)(Q,{icon:u?`mdi:pause`:`mdi:play`})}),(0,C.jsx)(`button`,{type:`button`,className:`skip`,"aria-label":i(`media_next`),disabled:!l||!c.next,onClick:()=>d(`media_next_track`),children:(0,C.jsx)(Q,{icon:`mdi:skip-next`})}),t&&!c.stop&&(0,C.jsx)(`span`,{}),t&&c.stop&&(0,C.jsx)(`button`,{type:`button`,className:`round`,"aria-label":i(`media_stop`),"data-tip":i(`media_stop`),disabled:!l,onClick:()=>d(`media_stop`),children:(0,C.jsx)(Q,{icon:`mdi:stop`})}),t&&(0,C.jsx)(`span`,{})]})}),k_=W.div`
  display: flex;
  flex-direction: column;
  gap: ${G(.35)};

  /* Inline, the times sit either side of the track, as a player's own "now playing" has them. */
  &[data-inline='true'] {
    display: grid;
    grid-template-columns: auto minmax(0, 1fr) auto;
    align-items: center;
    gap: ${G(.9)};
  }

  &[data-inline='true'] .times {
    display: contents;
  }

  &[data-inline='true'] .times span:first-child {
    grid-column: 1;
    grid-row: 1;
  }

  &[data-inline='true'] .times span:last-child {
    grid-column: 3;
    grid-row: 1;
  }

  &[data-inline='true'] .track {
    grid-column: 2;
    grid-row: 1;
  }

  .track {
    position: relative;
    height: ${G(.35)};
    border-radius: ${G(.2)};
    background: ${({theme:e})=>e.bubble.header};
    cursor: ${({$seekable:e})=>e?`pointer`:`default`};
    /* The track takes the finger, or the page would swipe instead. */
    touch-action: ${({$seekable:e})=>e?`none`:`auto`};
  }

  /* A taller target than it looks, for a finger. */
  .track::before {
    content: '';
    position: absolute;
    inset: ${G(-.8)} 0;
  }

  .fill {
    position: absolute;
    inset: 0 auto 0 0;
    border-radius: inherit;
    background: ${({theme:e})=>e.colors.accent};
  }

  .dot {
    position: absolute;
    top: 50%;
    width: ${G(.9)};
    height: ${G(.9)};
    border-radius: 50%;
    background: #fff;
    transform: translate(-50%, -50%);
    box-shadow: 0 0 ${G(.4)} rgba(0, 0, 0, 0.4);
  }

  .times {
    display: flex;
    justify-content: space-between;
    font-size: ${G(.8)};
    font-variant-numeric: tabular-nums;
    color: ${({theme:e})=>e.text.secondary};
  }
`,A_=(0,v.memo)(({entityId:e,seekable:t=!1,inline:n=!1,className:r})=>{let i=J(e),a=Z(),o=i_(i,_p(1e3)),s=t&&$g(i?.attributes.supported_features).seek,c=Bf((e,t)=>$(e,t,`x`),t=>o&&e&&void a(`media_player`,`media_seek`,{seek_position:Math.round(t*o.duration)},{entity_id:e}),i?.attributes.media_position_updated_at);if(!o)return null;let l=s&&c.value!==null?c.value:o.position/o.duration,u=l*o.duration;return(0,C.jsxs)(k_,{$seekable:s,"data-inline":n,className:r,children:[(0,C.jsxs)(`div`,{className:`track`,ref:s?c.ref:void 0,children:[(0,C.jsx)(`span`,{className:`fill`,style:{width:`${l*100}%`}}),(0,C.jsx)(`span`,{className:`dot`,style:{left:`${l*100}%`}})]}),(0,C.jsxs)(`div`,{className:`times`,children:[(0,C.jsx)(`span`,{children:a_(u)}),(0,C.jsxs)(`span`,{children:[`-`,a_(o.duration-u)]})]})]})}),j_=W.div`
  display: flex;
  gap: ${G(.6)};
  overflow-x: auto;
  scrollbar-width: none;

  &::-webkit-scrollbar {
    display: none;
  }

  > * {
    flex: 1 0 ${G(12)};
    max-width: ${G(20)};
  }
`,M_=({preset:e})=>{let t=Ru(),n=J(e.entity||void 0),r=Z(),i=g_(e,n),a=e.name||e.value||n?.attributes.friendly_name||e.entity;return(0,C.jsx)(zf,{name:a,state:n?.attributes.friendly_name??void 0,icon:e.icon||n?.attributes.icon||od(e.entity||`media_player.x`),iconColor:i?t.colors.accent:void 0,active:i,lit:i,onClick:async()=>{if(e.entity)for(let t of __(e,n))await r(t.domain,t.service,t.data,{entity_id:e.entity})}})},N_=(0,v.memo)(({activeId:e,presets:t})=>{let n=X(),r=Ru(),i=J(e),a=t.find(t=>t.entity===e&&g_(t,i)),o=C_(i)??i?.attributes.friendly_name??e??``;return(0,C.jsxs)(j_,{children:[(0,C.jsx)(zf,{name:a?.name||o,state:n(`media_current_source`),icon:a?.icon||i?.attributes.icon||`mdi:play-network`,iconColor:r.colors.accent,lit:!0}),t.filter(e=>e!==a).map(e=>(0,C.jsx)(M_,{preset:e},e.id))]})}),P_=16,F_=W.div`
  display: flex;
  flex-direction: column;
  gap: ${G(.7)};
  padding: ${G(.8)} ${G(.9)};
  border-radius: ${G(1)};
  background: ${({theme:e})=>e.bubble.background};

  .head {
    display: flex;
    align-items: center;
    gap: ${G(.5)};
    font-size: ${G(.85)};
    color: ${({theme:e})=>e.text.secondary};
  }

  .head .icon {
    font-size: ${G(1.3)};
  }

  .value {
    font-size: ${G(2.2)};
    font-weight: 700;
    line-height: 1;
    font-variant-numeric: tabular-nums;
  }

  .steps {
    display: grid;
    grid-template-columns: repeat(${P_}, minmax(0, 1fr));
    gap: ${G(.25)};
    height: ${G(.9)};
    cursor: pointer;
    /* The steps take the finger, or the page would swipe instead. */
    touch-action: none;
  }

  .steps[data-disabled='true'] {
    cursor: default;
  }

  .steps span {
    border-radius: ${G(.2)};
    background: ${({theme:e})=>e.bubble.header};
    transition: background 0.2s ease;
  }

  .steps span[data-lit='true'] {
    background: ${({theme:e})=>e.colors.accent};
  }

  .buttons {
    display: grid;
    grid-template-columns: repeat(3, minmax(0, 1fr));
    gap: ${G(.6)};
  }

  .buttons button {
    height: ${G(3)};
    border-radius: ${G(1.5)};
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: ${G(1.35)};
    background-color: ${({theme:e})=>e.bubble.icon};
    ${({theme:e})=>Jd(e.bubble.hover,e.bubble.pressed)}
  }

  .buttons button[aria-pressed='true'] {
    color: ${({theme:e})=>e.colors.accent};
  }

  .buttons button:disabled {
    opacity: 0.35;
  }
`,I_=(0,v.memo)(({entityId:e,volume:t})=>{let n=X(),r=J(e),i=Z(),a=$g(r?.attributes.supported_features),o=t_(r),s=(t,n)=>void i(`media_player`,t,n,{entity_id:e}),c=o&&a.volumeSet,l=Bf((e,t)=>$(e,t,`x`),e=>c&&s(`volume_set`,{volume_level:Math.round(e*100)/100}),r?.attributes.volume_level),u=l.value??t.level??0,d=Math.round(u*P_);return(0,C.jsxs)(F_,{children:[(0,C.jsxs)(`div`,{className:`head`,children:[(0,C.jsx)(Q,{className:`icon`,icon:w_(t.level,t.muted)}),(0,C.jsx)(`span`,{children:n(`media_volume`)})]}),(0,C.jsx)(`div`,{className:`value`,children:t.muted?n(`media_muted`):t.text}),(0,C.jsx)(`div`,{className:`steps`,ref:c?l.ref:void 0,"data-disabled":!c,"aria-hidden":`true`,children:Array.from({length:P_},(e,t)=>(0,C.jsx)(`span`,{"data-lit":t<d},t))}),(0,C.jsxs)(`div`,{className:`buttons`,children:[(0,C.jsx)(`button`,{type:`button`,"aria-label":n(`media_volume_down`),disabled:!o||!(a.volumeStep||a.volumeSet),onClick:()=>s(`volume_down`),children:(0,C.jsx)(Q,{icon:`mdi:volume-minus`})}),(0,C.jsx)(`button`,{type:`button`,"aria-label":n(`media_mute`),"aria-pressed":t.muted,disabled:!o||!a.volumeMute,onClick:()=>s(`volume_mute`,{is_volume_muted:!t.muted}),children:(0,C.jsx)(Q,{icon:t.muted?`mdi:volume-off`:`mdi:volume-mute`})}),(0,C.jsx)(`button`,{type:`button`,"aria-label":n(`media_volume_up`),disabled:!o||!(a.volumeStep||a.volumeSet),onClick:()=>s(`volume_up`),children:(0,C.jsx)(Q,{icon:`mdi:volume-plus`})})]})]})}),L_=.008,R_=.008;function z_(e){let t=(0,v.useRef)(null),[n,r]=(0,v.useState)(Ig);return(0,v.useEffect)(()=>{let n=t.current;if(!n||!e)return;let i=new Map,a=!1,o=e=>r(t=>Bg(e(t))),s=e=>{let t=e;t.stopPropagation(),n.setPointerCapture(t.pointerId),i.set(t.pointerId,{x:t.clientX,y:t.clientY}),a=t.button===2||t.shiftKey},c=e=>{i.delete(e.pointerId)},l=e=>{let t=e,n=i.get(t.pointerId);if(!n)return;if(t.pointerType===`mouse`&&t.buttons===0)return c(e);let[r,s]=[t.clientX-n.x,t.clientY-n.y],l=[...i.entries()].find(([e])=>e!==t.pointerId)?.[1];if(l){let e=Math.hypot(n.x-l.x,n.y-l.y),i=Math.hypot(t.clientX-l.x,t.clientY-l.y);o(t=>({...t,zoom:i>0?t.zoom*(e/i):t.zoom,panX:t.panX-r/2*R_*t.zoom,panY:t.panY+s/2*R_*t.zoom}))}else o(a?e=>({...e,panX:e.panX-r*R_*e.zoom,panY:e.panY+s*R_*e.zoom}):e=>({...e,turn:e.turn-r*L_,tilt:e.tilt+s*L_}));i.set(t.pointerId,{x:t.clientX,y:t.clientY})},u=e=>{let t=e;t.preventDefault(),o(e=>({...e,zoom:e.zoom*Math.exp(t.deltaY*.0015)}))},d=e=>e.preventDefault();return n.addEventListener(`pointerdown`,s),n.addEventListener(`pointermove`,l),n.addEventListener(`pointerup`,c),n.addEventListener(`pointercancel`,c),n.addEventListener(`wheel`,u,{passive:!1}),n.addEventListener(`contextmenu`,d),()=>{n.removeEventListener(`pointerdown`,s),n.removeEventListener(`pointermove`,l),n.removeEventListener(`pointerup`,c),n.removeEventListener(`pointercancel`,c),n.removeEventListener(`wheel`,u),n.removeEventListener(`contextmenu`,d)}},[e]),{ref:t,view:n,moved:Object.keys(Ig).some(e=>n[e]!==Ig[e]),reset:()=>r(Ig)}}var B_=W.figure`
  --lit: ${({theme:e})=>e.colors.accent};
  position: relative;
  margin: 0;
  display: flex;
  min-height: 0;
  padding: ${G(.6)};
  border-radius: ${G(1)};
  background: radial-gradient(ellipse at 50% 40%, #0e1a28, #05090e 75%);
  border: 1px solid rgba(120, 190, 255, 0.08);

  /* As big as the space it is given allows, whichever way that runs out first. */
  svg {
    display: block;
    width: 100%;
    height: 100%;
  }

  /* Lines as thick on a small room as on a big one. */
  svg * {
    vector-effect: non-scaling-stroke;
  }

  &[data-movable='true'] svg {
    cursor: grab;
    touch-action: none;
  }

  /* Back to where it started, once moved: the popup's round buttons. */
  .reset {
    position: absolute;
    top: ${G(.7)};
    right: ${G(.7)};
    width: ${G(2.6)};
    height: ${G(2.6)};
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: ${G(1.3)};
    background-color: ${({theme:e})=>e.bubble.icon};
    ${({theme:e})=>Jd(e.bubble.hover,e.bubble.pressed)}
  }

  .wall {
    stroke: rgba(120, 190, 255, 0.2);
    stroke-width: 1.2;
    stroke-linejoin: round;
  }

  .grid {
    stroke: rgba(120, 190, 255, 0.06);
    stroke-width: 1;
  }

  .edge {
    fill: none;
    stroke: rgba(120, 190, 255, 0.2);
    stroke-width: 1.2;
  }

  .solid polygon {
    stroke-linejoin: round;
    stroke-width: 1;
  }

  .sofa polygon {
    fill: #343c49;
    stroke: rgba(255, 255, 255, 0.06);
  }

  .sofa polygon[data-face='top'] {
    fill: #465063;
  }

  .sofa polygon[data-face='left'],
  .sofa polygon[data-face='right'] {
    fill: #2c333e;
  }

  /* Not the lines' own width here: a limb's stroke is its thickness, and scales with the room. */
  .person .limb {
    vector-effect: none;
    stroke-linecap: round;
    /* Well lighter than the sofa, so one sitting on it stands out. */
    stroke: #8596ad;
  }

  .screen polygon {
    fill: #020406;
    stroke: #26303c;
  }

  .screen[data-on='true'] polygon[data-face='back'] {
    fill: var(--screen);
  }

  .stand {
    stroke: #3a4656;
    stroke-width: 2.5;
    stroke-linecap: round;
  }

  /* A speaker's body is dark; what it plays through lights its edges and drivers. */
  .speaker polygon {
    fill: #0b1520;
    stroke: rgba(150, 185, 220, 0.3);
    stroke-width: 1.2;
    stroke-linejoin: round;
    transition:
      fill 0.4s ease,
      stroke 0.4s ease;
  }

  .speaker polygon[data-face='top'] {
    fill: #122130;
  }

  .speaker .can {
    fill: rgba(0, 0, 0, 0.35);
    stroke: rgba(150, 185, 220, 0.25);
  }

  .zz {
    fill: ${({theme:e})=>e.text.secondary};
    font-family: ${({theme:e})=>e.font};
    font-weight: 600;
  }

  .speaker .driver {
    fill: #060c12;
    stroke: rgba(150, 185, 220, 0.3);
    stroke-width: 1.1;
  }

  .speaker[data-state='active'] polygon {
    fill: color-mix(in srgb, var(--lit) 18%, #07111b);
    stroke: var(--lit);
    stroke-width: 1.6;
  }

  .speaker[data-state='active'] polygon[data-face='top'] {
    fill: color-mix(in srgb, var(--lit) 30%, #07111b);
  }

  .speaker[data-state='active'] .driver {
    stroke: color-mix(in srgb, var(--lit) 70%, #fff);
    stroke-width: 1.4;
  }

  .speaker[data-state='unknown'] polygon {
    stroke: rgba(150, 185, 220, 0.5);
  }

  .speaker[data-state='unpowered'] {
    opacity: 0.35;
  }

  .speaker[data-state='unpowered'] polygon {
    stroke-dasharray: 3 3;
  }
`,V_=1e3,H_=(e,t)=>{let n=Wg(e,t);return[n.x*V_,n.y*V_]},U_=e=>e.map(e=>`${e[0].toFixed(1)},${e[1].toFixed(1)}`).join(` `);function W_(e,t){let n=Ag(e).map(e=>H_(e,t)),r=new Set;return{faces:jg.map(e=>{let t=e.corners.map(e=>n[e]);return Gg(t)<=0?null:(r.add(e.name),(0,C.jsx)(`polygon`,{"data-face":e.name,points:U_(t)},e.name))}),shown:r}}var G_=(e,t)=>Wg([e.x,e.y,e.z+e.h/2],t).depth;function K_(e,t){let n=[0,1,2,3,4,5,6,7].map(n=>H_([(n&1?e.max:e.min)[0],(n&2?e.max:e.min)[1],(n&4?e.max:e.min)[2]],t)),r=n.map(e=>e[0]),i=n.map(e=>e[1]);return[Math.min(...r),Math.min(...i),Math.max(...r),Math.max(...i)]}var q_=[6,4],J_={contain:`xMidYMid meet`,cover:`xMidYMid slice`,stretch:`none`};function Y_(e,t,n,r,i){let{x:a,y:o,z:s,w:c,d:l,h:u}=Cg,[d,f]=[c*r/100,u*r/100],p=(e,n)=>H_([a-c/2+e,o+l/2,s+u-n],t),[m,h]=q_,g=[];for(let t=0;t<m;t++)for(let r=0;r<h;r++){let[a,o,s,l]=[t*c/m,(t+1)*c/m,r*u/h,(r+1)*u/h],[_,v,y]=[p(a,s),p(o,s),p(a,l)],b=[(v[0]-_[0])/(o-a),(v[1]-_[1])/(o-a)],x=[(y[0]-_[0])/(l-s),(y[1]-_[1])/(l-s)],S=[b[0],b[1],x[0],x[1],_[0]-b[0]*a-x[0]*s,_[1]-b[1]*a-x[1]*s],ee=.004;g.push((0,C.jsxs)(`g`,{transform:`matrix(${S.join(` `)})`,children:[(0,C.jsx)(`clipPath`,{id:`${n}-cell-${t}-${r}`,children:(0,C.jsx)(`rect`,{x:a-ee,y:s-ee,width:o-a+ee*2,height:l-s+ee*2})}),(0,C.jsx)(`image`,{href:e,x:(c-d)/2,y:(u-f)/2,width:d,height:f,preserveAspectRatio:J_[i],clipPath:`url(#${n}-cell-${t}-${r})`})]},`${t}-${r}`))}return g}function X_(e,t){let n=new Set,r=[];return Eg(e).forEach((i,a)=>{if(!Dg(i.normal,i.points[0],t.eye))return;n.add(i.name);let o=i.points.map(e=>H_(e,t));if(r.push((0,C.jsx)(`polygon`,{"data-face":i.name===`bottom`?`back`:i.name,points:U_(o)},a)),i.name===`bottom`||i.name===`top`){let n=[e.x,e.y,i.points[0][2]],o=i.points.map(e=>H_([n[0]+(e[0]-n[0])*.72,n[1]+(e[1]-n[1])*.72,n[2]],t));r.push((0,C.jsx)(`polygon`,{className:i.name===`bottom`?`driver`:`can`,points:U_(o)},`${a}-inner`))}}),{faces:r,shown:n}}function Z_(e,t,n){let[r,i]=H_(e,n),[a,o]=H_([e[0]+n.right[0]*t,e[1]+n.right[1]*t,e[2]+n.right[2]*t],n);return Math.hypot(a-r,o-i)}function Q_(e,t,n,r){let{limbs:i,head:a,headRadius:o}=n,s=i.map((t,n)=>{let r=[0,1,2].map(e=>(t.from[e]+t.to[e])/2),i=Z_(r,t.radius*2,e),[a,o]=[H_(t.from,e),H_(t.to,e)];return{key:`limb-${n}`,depth:Wg(r,e).depth,bounds:Jg(t),element:(0,C.jsx)(`g`,{className:`person`,children:(0,C.jsx)(`line`,{className:`limb`,x1:a[0],y1:a[1],x2:o[0],y2:o[1],strokeWidth:i})})}}),[c,l]=H_(a,e);return s.push({key:`head`,depth:Wg(a,e).depth,bounds:Yg(a,o),element:(0,C.jsxs)(`g`,{className:`person`,children:[(0,C.jsx)(`circle`,{cx:c,cy:l,r:Z_(a,o,e),fill:`url(#${t}-head)`}),r&&(0,C.jsxs)(`text`,{className:`zz`,x:c+Z_(a,o,e)*1.2,y:l-Z_(a,o,e)*1.2,fontSize:Z_(a,o*1.6,e),children:[`z`,(0,C.jsx)(`tspan`,{dx:`0.15em`,dy:`-0.5em`,fontSize:`1.3em`,children:`Z`})]})]})}),s}var[$_,ev,tv]=[sg.width/2,sg.depth,sg.height],nv=[{key:`floor`,corners:[[-$_,0,0],[$_,0,0],[$_,ev,0],[-$_,ev,0]],inside:e=>e[2]>0},{key:`front`,corners:[[-$_,0,0],[-$_,0,tv],[$_,0,tv],[$_,0,0]],inside:e=>e[1]>0},{key:`back`,corners:[[$_,ev,0],[$_,ev,tv],[-$_,ev,tv],[-$_,ev,0]],inside:e=>e[1]<ev},{key:`left`,corners:[[-$_,0,0],[-$_,ev,0],[-$_,ev,tv],[-$_,0,tv]],inside:e=>e[0]>-$_},{key:`right`,corners:[[$_,0,0],[$_,0,tv],[$_,ev,tv],[$_,ev,0]],inside:e=>e[0]<$_}],rv=(0,v.memo)(({layout:e,mounts:t,sofa:n,states:r,on:i,listener:a,movable:o,walls:s,screen:c,screenScale:l,screenFit:u})=>{let d=X(),f=(0,v.useId)().replace(/:/g,``),{ref:p,view:m,moved:h,reset:g}=z_(o),_=(0,v.useMemo)(()=>Vg(m),[m]),y=(0,v.useMemo)(()=>hg(e,t),[e,t]),b=(0,v.useMemo)(()=>{let e=Vg(),t=nv.flatMap(t=>t.corners.map(t=>H_(t,e))),n=t.map(e=>e[0]),r=t.map(e=>e[1]);return[Math.min(...n)-10,Math.min(...r)-10,Math.max(...n)-Math.min(...n)+20,Math.max(...r)-Math.min(...r)+20].map(e=>Math.round(e)).join(` `)},[]),x=e=>H_(e,_),S=nv.filter(e=>s||e.key===`floor`).map(e=>e.inside(_.eye)?(0,C.jsx)(`polygon`,{className:`wall`,points:U_(e.corners.map(x)),fill:`url(#${f}-${e.key===`floor`?`floor`:`wall`})`},e.key):e.key===`floor`?null:(0,C.jsx)(`polyline`,{className:`edge`,points:U_([e.corners[1],e.corners[2]].map(x))},e.key)),ee=[];for(let e=-$_+.6;e<$_-.01;e+=.6)ee.push([x([e,0,0]),x([e,ev,0])]);for(let e=.6;e<ev-.01;e+=.6)ee.push([x([-$_,e,0]),x([$_,e,0])]);let w=[],te=(e,t,n,r,i)=>{let{faces:a,shown:o}=W_(n,_);w.push({key:e,depth:G_(n,_),bounds:qg(n),element:(0,C.jsxs)(`g`,{className:`solid ${t}`,...r,children:[a,o.has(`back`)&&i]})})};te(`screen`,`screen`,Cg,{"data-on":i},c?Y_(c,_,f,l,u):null),Sg(n).forEach((e,t)=>te(`sofa-${t}`,`sofa`,e));let T=a===`asleep`&&n!==`none`;a&&w.push(...Q_(_,f,T?Ug(n):Hg(),T));let ne=[];for(let[e,n]of Object.entries(y)){let i=r[e]??`unknown`,a=wg(e,t),o=a===`ceiling`,{faces:s,shown:c}=o?X_(n,_):W_(n,_),l=!o&&c.has(`back`)?Og[a].map(([e,t,r],i)=>(0,C.jsx)(`polygon`,{className:`driver`,points:U_(kg(n,`back`,e,t,r).map(x))},`driver-${i}`)):null,u=Tg.includes(e);if(i===`active`&&(n.z<1.2||o)){let t=kg({...n,z:0,h:0,d:0,yaw:0,pitch:0},`top`,.5,0,.6/n.w,28).map(x);ne.push((0,C.jsx)(`polygon`,{points:U_(t),fill:`url(#${f}-pool)`},e))}let[p,m]=[x([n.x,n.y,0]),x([n.x,n.y,n.z])];w.push({key:e,depth:G_(n,_),bounds:u?{...qg(n),min:[qg(n).min[0],qg(n).min[1],0]}:qg(n),element:(0,C.jsxs)(`g`,{className:`speaker`,"data-state":i,"data-tip":`${d(`speaker_${e}`)} · ${d(`speaker_${i}`)}`,filter:i===`active`?`url(#${f}-glow)`:void 0,children:[u&&(0,C.jsx)(`line`,{className:`stand`,x1:p[0],y1:p[1],x2:m[0],y2:m[1]}),s,l]})})}let E=Zg(w.map(e=>({bounds:e.bounds,depth:e.depth,rect:K_(e.bounds,_)})),_.eye).map(e=>w[e]);return(0,C.jsxs)(B_,{"data-movable":o,children:[(0,C.jsxs)(`svg`,{ref:p,viewBox:b,role:`img`,"aria-label":d(`media_speakers`),style:{"--screen":`url(#${f}-screen)`},children:[(0,C.jsxs)(`defs`,{children:[(0,C.jsxs)(`linearGradient`,{id:`${f}-wall`,x1:`0`,y1:`0`,x2:`0`,y2:`1`,children:[(0,C.jsx)(`stop`,{offset:`0`,stopColor:`#16283a`,stopOpacity:`0.9`}),(0,C.jsx)(`stop`,{offset:`1`,stopColor:`#0b1520`,stopOpacity:`0.9`})]}),(0,C.jsxs)(`radialGradient`,{id:`${f}-floor`,cx:`0.5`,cy:`0.45`,r:`0.7`,children:[(0,C.jsx)(`stop`,{offset:`0`,stopColor:`#14222f`}),(0,C.jsx)(`stop`,{offset:`1`,stopColor:`#070c12`})]}),(0,C.jsxs)(`radialGradient`,{id:`${f}-pool`,children:[(0,C.jsx)(`stop`,{offset:`0`,stopColor:`var(--lit)`,stopOpacity:`0.35`}),(0,C.jsx)(`stop`,{offset:`1`,stopColor:`var(--lit)`,stopOpacity:`0`})]}),(0,C.jsxs)(`radialGradient`,{id:`${f}-head`,cx:`0.38`,cy:`0.32`,r:`0.75`,children:[(0,C.jsx)(`stop`,{offset:`0`,stopColor:`#b4c2d4`}),(0,C.jsx)(`stop`,{offset:`1`,stopColor:`#7788a0`})]}),(0,C.jsxs)(`linearGradient`,{id:`${f}-screen`,x1:`0`,y1:`0`,x2:`1`,y2:`1`,children:[(0,C.jsx)(`stop`,{offset:`0`,stopColor:`#12314a`}),(0,C.jsx)(`stop`,{offset:`1`,stopColor:`#05101a`})]}),(0,C.jsxs)(`filter`,{id:`${f}-glow`,x:`-60%`,y:`-60%`,width:`220%`,height:`220%`,children:[(0,C.jsx)(`feGaussianBlur`,{in:`SourceGraphic`,stdDeviation:`7`,result:`blur`}),(0,C.jsxs)(`feMerge`,{children:[(0,C.jsx)(`feMergeNode`,{in:`blur`}),(0,C.jsx)(`feMergeNode`,{in:`blur`}),(0,C.jsx)(`feMergeNode`,{in:`blur`}),(0,C.jsx)(`feMergeNode`,{in:`SourceGraphic`})]})]})]}),S,_.eye[2]>0&&ee.map(([e,t],n)=>(0,C.jsx)(`line`,{className:`grid`,x1:e[0],y1:e[1],x2:t[0],y2:t[1]},n)),ne,E.map(e=>(0,C.jsx)(`g`,{children:e.element},e.key))]}),h&&(0,C.jsx)(`button`,{type:`button`,className:`reset`,"aria-label":d(`media_view_reset`),"data-tip":d(`media_view_reset`),onClick:g,children:(0,C.jsx)(Q,{icon:`mdi:camera-retake-outline`})})]})});function iv(e){return R(t=>r_(e,t.entities))}function av(e){let t=J(e),n=ad(),r=t?.attributes.entity_picture;if(r)return r.startsWith(`/`)&&n?n(r):r}function ov(e){let t=R(t=>JSON.stringify(y_(e,t.entitiesRegistryDisplay)));return(0,v.useMemo)(()=>JSON.parse(t),[t])}var sv=e=>{let t=e?.trim();return t&&![`unknown`,`unavailable`,`none`].includes(t.toLowerCase())?t:void 0};function cv(e,t,n,r,i=``){let a=Y(),o=J(e||void 0),s=R(t=>t.entitiesRegistryDisplay[e]?.platform),c=ov(e),l=J(c.volume),u=J(c.modeInfo),d=J(c.soundMode),f=J(n||void 0),p=J(r||c.format),m=J(c.decoder),h=J(c.signal),g=J(c.sampleRate),_=J(i||c.subOutput),v=o?.attributes??{},y=Number(v.volume_level),b=v.volume_level===void 0||!Number.isFinite(y)?null:y,x=Number(sv(l?.state)),S=`–`;t!==`percent`&&Number.isFinite(x)?S=`${Tp(x,a,1)} dB`:b!==null&&s_(t,s)?S=`${Tp(c_(b),a,1)} dB`:b!==null&&(S=`${Math.round(b*100)} %`);let C=sv(f?.state)??sv(u?.state)??v.sound_mode_raw??v.sound_mode??sv(d?.state);return{on:t_(o),volume:{level:b,text:S,muted:v.is_volume_muted===!0},mode:C,format:sv(p?.state),decoder:sv(m?.state),signal:/[a-z]/i.test(h?.state??``)?sv(h?.state):void 0,sampleRate:sv(g?.state),subOutput:_?.state===`on`||_?.state!==`off`&&void 0}}var lv=new URL(`background-D0ndr4z6.jpg`,import.meta.url).href,uv=`media-source://`,dv=604800,fv=216e5;function pv(e){return mv(e,lv)}function mv(e,t){let n=nd(),r=ad(),[i,a]=(0,v.useState)(null),o=e.startsWith(uv);return(0,v.useEffect)(()=>{if(!o||!n)return;let t=!0,r=()=>n.sendMessagePromise({type:`media_source/resolve_media`,media_content_id:e,expires:dv}).then(n=>t&&a({id:e,url:n.url})).catch(n=>{console.warn(`Better Wall Dashboard: picture not found`,e,n),t&&a({id:e,url:``})});r();let i=window.setInterval(r,fv);return()=>{t=!1,window.clearInterval(i)}},[e,o,n]),e?o?i?.id===e?i.url?r(i.url):t:``:e.startsWith(`/`)?r(e):e:t}var hv=W.div`
  flex: 1 1 auto;
  display: grid;
  grid-template-rows: auto minmax(0, 1fr) auto;
  gap: ${G(1)};
  min-height: 0;

  h3 {
    margin: 0 0 ${G(.5)};
    font-size: ${G(1.05)};
    font-weight: 600;
    color: ${({theme:e})=>e.text.secondary};
  }

  .middle {
    display: grid;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: ${G(1.2)};
    min-height: 0;
  }

  &[data-room='true'] .middle {
    grid-template-columns: minmax(${G(20)}, 1fr) minmax(0, 2fr) minmax(${G(20)}, 1fr);
  }

  /* A column that still runs long on a short screen gives way by itself, unseen. */
  .column {
    display: flex;
    flex-direction: column;
    gap: ${G(.9)};
    min-width: 0;
    min-height: 0;
    overflow-y: auto;
    scrollbar-width: none;
  }

  .column::-webkit-scrollbar {
    display: none;
  }

  .column > * {
    flex-shrink: 0;
  }

  /* The heading sits on its picture as the others' do on their first item:
     the column's gap is between sections, not under a heading. */
  .room {
    gap: 0;
    overflow: hidden;
  }

  .room > figure {
    flex: 1 1 auto;
  }

  .bubbles {
    display: grid;
    gap: ${G(.6)};
  }

  .playing {
    display: grid;
    grid-template-columns: minmax(${G(18)}, 1fr) minmax(0, 3fr);
    gap: ${G(1.4)};
    align-items: center;
    padding: ${G(.9)} ${G(1.1)};
    border-radius: ${G(1)};
    background: ${({theme:e})=>e.bubble.background};
  }

  .transport {
    display: flex;
    flex-direction: column;
    gap: ${G(.7)};
    min-width: 0;
  }

  .now {
    display: flex;
    align-items: center;
    gap: ${G(.9)};
    min-width: 0;
  }

  .now img,
  .now .placeholder {
    flex: none;
    width: ${G(5.6)};
    height: ${G(5.6)};
    border-radius: ${G(.8)};
    object-fit: cover;
    background: ${({theme:e})=>e.bubble.icon};
  }

  .now .placeholder {
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: ${G(2)};
    color: ${({theme:e})=>e.text.secondary};
  }

  .now .text {
    display: flex;
    flex-direction: column;
    gap: ${G(.15)};
    min-width: 0;
  }

  .now .text > span {
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  .now .app {
    font-size: ${G(.85)};
    color: ${({theme:e})=>e.text.secondary};
  }

  .now .title {
    font-size: ${G(1.2)};
    font-weight: 700;
  }

  .times {
    font-size: ${G(.9)};
  }

  .now .artist {
    font-size: ${G(.95)};
    color: ${({theme:e})=>e.text.secondary};
  }
`,gv=(e,t)=>{let[n,r]=cd(t);e(n,r,void 0,{entity_id:t})},_v=({item:e,info:t})=>{let n=X(),r=Ru(),i=J(e.entity||void 0),a=Z();if(!i)return null;let o=t_(i);return(0,C.jsx)(zf,{name:e.name||i.attributes.friendly_name||e.entity,state:[n(o?`on`:`off`),o?t:void 0].filter(Boolean).join(` · `),icon:e.icon||i.attributes.icon||od(e.entity),iconColor:o?r.colors.success:void 0,active:o,lit:o,onClick:()=>gv(a,e.entity)})},vv=({device:e})=>{let t=J(e.entity||void 0),n=J(e.info||void 0),r=n&&![`unknown`,`unavailable`].includes(n.state)?n.state:C_(t);return(0,C.jsx)(_v,{item:e,info:r})},yv=({entityId:e,text:t})=>{let n=X(),r=Ru(),i=J(e),a=Z();if(!i)return null;let o=i.state===`on`;return(0,C.jsx)(zf,{name:n(`media_night`),state:t||n(o?`on`:`off`),icon:i.attributes.icon||`mdi:weather-night`,iconColor:o?r.colors.accent:void 0,active:o,lit:o,onClick:()=>gv(a,e)})},bv=e=>/dolby/i.test(e??``)?`mdi:dolby`:/stereo|direct/i.test(e??``)?`mdi:surround-sound-2-0`:`mdi:surround-sound`,xv=({audio:e})=>{let t=X(),n=[{icon:bv(e.mode),label:t(`media_sound_mode`),value:e.mode},{icon:`mdi:speaker-multiple`,label:t(`media_source_channels`),value:rg(e.format)},{icon:`mdi:chip`,label:t(`media_decoder`),value:e.decoder},{icon:`mdi:video-input-hdmi`,label:t(`media_input_signal`),value:e.signal},{icon:`mdi:waveform`,label:t(`media_sample_rate`),value:e.sampleRate}];return(0,C.jsx)(Om,{children:n.filter(e=>e.value).map((e,t)=>(0,C.jsxs)(`div`,{style:t===0?{gridColumn:`1 / -1`}:void 0,children:[(0,C.jsx)(Q,{className:`icon`,icon:e.icon}),(0,C.jsx)(`span`,{className:`label`,children:e.label}),(0,C.jsx)(`span`,{className:`value`,children:e.value})]},e.label))})},Sv=({activeId:e})=>{let t=X(),n=J(e),r=t_(n),i=av(r?e:void 0),[a,o]=(0,v.useState)(null),s=n?.attributes??{},c=r?s.media_title??C_(n)??t(`media_nothing`):t(`off`),l=[s.media_artist??s.media_series_title,s.media_album_name].filter(Boolean).join(` · `);return(0,C.jsxs)(`section`,{className:`playing`,"aria-label":t(`media_now_playing`),children:[(0,C.jsxs)(`div`,{className:`now`,children:[i&&i!==a?(0,C.jsx)(`img`,{src:i,alt:``,onError:()=>o(i)}):(0,C.jsx)(`span`,{className:`placeholder`,children:(0,C.jsx)(Q,{icon:`mdi:music`})}),(0,C.jsxs)(`div`,{className:`text`,children:[(0,C.jsx)(`span`,{className:`app`,children:C_(n)??s.friendly_name}),(0,C.jsx)(`span`,{className:`title`,children:c}),r&&l&&(0,C.jsx)(`span`,{className:`artist`,children:l})]})]}),(0,C.jsxs)(`div`,{className:`transport`,children:[(0,C.jsx)(A_,{entityId:r?e:void 0,seekable:!0,inline:!0}),(0,C.jsx)(O_,{entityId:e,full:!0,large:!0})]})]})},Cv=({config:e,activeId:t})=>{let n=X(),r=cv(e.volume,e.volumeUnit,e.modeEntity,e.formatEntity,e.subOutput),i=[...R(t=>e.switches.filter(e=>t.entities[e.entity]?.state===`off`).flatMap(e=>e.subs).join(` `)).split(` `).filter(Boolean),...r.subOutput===!1?Xh:[]],a=e.layout?ag(e.layout,r,i):{},o=J(e.tvEntity||void 0),s=e.tvEntity?t_(o):r.on,c=av(e.screen===`art`&&s?t:void 0),l=mv(e.screen===`image`?e.screenImage:``,``),u=s?e.screen===`art`?c:e.screen===`image`?l:void 0:void 0;return(0,C.jsxs)(hv,{"data-room":e.layout!==null,children:[(0,C.jsx)(N_,{activeId:t,presets:e.presets}),(0,C.jsxs)(`div`,{className:`middle`,children:[(0,C.jsxs)(`div`,{className:`column`,children:[(0,C.jsxs)(`section`,{children:[(0,C.jsx)(`h3`,{children:n(`media_audio_info`)}),(0,C.jsx)(xv,{audio:r})]}),e.volume&&(0,C.jsx)(I_,{entityId:e.volume,volume:r.volume}),e.night&&(0,C.jsx)(yv,{entityId:e.night,text:e.nightText})]}),e.layout&&(0,C.jsxs)(`div`,{className:`column room`,children:[(0,C.jsx)(`h3`,{children:n(`media_speakers`)}),(0,C.jsx)(rv,{layout:e.layout,mounts:e.mounts,sofa:e.sofa,states:a,on:s,listener:e.listener?e.sleeps&&!r.on&&!s?`asleep`:`awake`:null,screenScale:e.screenScale,screenFit:e.screenFit,movable:e.roomMovable,walls:e.walls,screen:u||void 0})]}),(0,C.jsxs)(`div`,{className:`column`,children:[e.devices.length>0&&(0,C.jsxs)(`section`,{children:[(0,C.jsx)(`h3`,{children:n(`media_devices`)}),(0,C.jsx)(`div`,{className:`bubbles`,children:e.devices.map(e=>(0,C.jsx)(vv,{device:e},e.id))})]}),e.switches.length>0&&(0,C.jsxs)(`section`,{children:[(0,C.jsx)(`h3`,{children:e.switchesTitle||n(`media_switches`)}),(0,C.jsx)(`div`,{className:`bubbles`,children:e.switches.map(e=>(0,C.jsx)(_v,{item:e},e.id))})]})]})]}),(0,C.jsx)(Sv,{activeId:t})]})},wv=W.button`
  width: ${G(3.4)};
  height: ${G(3.4)};
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: ${G(1.6)};
  ${({theme:e})=>Jd(e.bubble.background,e.bubble.pressed)}

  &[aria-pressed='true'] {
    color: ${({theme:e})=>e.colors.accent};
  }
`,Tv=({entityId:e})=>{let t=X(),n=J(e||void 0),r=Z();return n?(0,C.jsx)(wv,{type:`button`,"aria-label":t(`media_power`),"data-tip":t(`media_power`),"aria-pressed":t_(n),onClick:()=>gv(r,e),children:(0,C.jsx)(Q,{icon:`mdi:power`})}):null},Ev=(0,v.memo)(({open:e,onClose:t,config:n,activeId:r,name:i})=>{let a=Ru(),o=J(r),s=t_(o)?[C_(o),o?.attributes.media_title].filter(Boolean).join(` · `):void 0;return(0,C.jsx)(Mf,{open:e,onClose:t,title:i,subtitle:s,icon:`mdi:multimedia`,iconColor:a.colors.accent,full:!0,fixedBody:!0,actions:(0,C.jsx)(Tv,{entityId:n.power}),children:(0,C.jsx)(Cv,{config:n,activeId:r})})}),Dv=W(ef)`
  /* Asked how big it came out, in units (one to the em): see the end. */
  container-type: size;
  font-size: ${G(1)};
  cursor: pointer;
  ${({theme:e})=>Yd(e.bubble.hover)}
  /* A double tap opens the details: not a zoom. */
  touch-action: manipulation;

  &:focus-visible {
    outline: 2px solid ${({theme:e})=>e.colors.accent};
  }

  /* The album art behind it all, darkened toward the text at the foot. */
  .art {
    position: absolute;
    inset: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    opacity: 0.9;
    pointer-events: none;
  }

  .shade {
    position: absolute;
    inset: 0;
    background: linear-gradient(to bottom, rgba(0, 0, 0, 0.35) 0%, rgba(0, 0, 0, 0) 28%, rgba(0, 0, 0, 0.55) 55%, rgba(0, 0, 0, 0.85) 100%);
    pointer-events: none;
  }

  .body {
    position: relative;
    display: flex;
    flex-direction: column;
    gap: ${G(.6)};
    height: 100%;
    padding: ${G(.8)};
    box-sizing: border-box;
  }

  .top {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: ${G(.5)};
  }

  /* The cover tile's round head button, in the accent while on. */
  .power {
    flex: none;
    width: ${G(2.8)};
    height: ${G(2.8)};
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: ${G(1.35)};
    background-color: rgba(0, 0, 0, 0.3);
    box-shadow: inset 0 0 0 1px ${({theme:e})=>e.bubble.header};
    ${({theme:e})=>Jd(e.bubble.hover,e.bubble.pressed)}
  }

  .power[aria-pressed='true'] {
    color: ${({theme:e})=>e.colors.accent};
  }

  .volume {
    display: flex;
    align-items: center;
    gap: ${G(.45)};
    height: ${G(2.8)};
    padding: 0 ${G(1)} 0 ${G(.8)};
    border-radius: ${G(1.4)};
    font-size: ${G(.95)};
    font-weight: 600;
    font-variant-numeric: tabular-nums;
    white-space: nowrap;
    background-color: rgba(0, 0, 0, 0.3);
    box-shadow: inset 0 0 0 1px ${({theme:e})=>e.bubble.header};
  }

  .volume .speaker {
    font-size: ${G(1.2)};
    color: ${({theme:e})=>e.text.secondary};
  }

  .info {
    margin-top: auto;
    display: flex;
    flex-direction: column;
    gap: ${G(.15)};
    min-width: 0;
    text-shadow: 0 1px ${G(.4)} rgba(0, 0, 0, 0.5);
  }

  .info > span {
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  .source {
    font-size: ${G(.85)};
    color: ${({theme:e})=>e.text.secondary};
  }

  .title {
    font-size: ${G(1.45)};
    font-weight: 700;
    line-height: 1.2;
  }

  .artist {
    font-size: ${G(.95)};
    color: ${({theme:e})=>e.text.primary};
  }

  .album {
    font-size: ${G(.85)};
    color: ${({theme:e})=>e.text.secondary};
  }

  /* Smaller, the lines that matter least go first: the album, the artist,
     the times, the source. Last, so they win over the rules above. */
  @container (height < 19em) {
    .album {
      display: none;
    }
  }

  @container (height < 16em) {
    .artist {
      display: none;
    }

    .title {
      font-size: ${G(1.2)};
    }
  }

  /* One row high: the head, the title and the controls, and nothing else. */
  @container (height < 14em) {
    .source,
    .timeline {
      display: none;
    }

    .body {
      gap: ${G(.45)};
    }

    .title {
      font-size: ${G(1.1)};
    }

    .controls .main {
      width: ${G(2.8)};
      height: ${G(2.8)};
      font-size: ${G(1.35)};
    }
  }

  /* Smaller still, a row of a small cell: everything a size down. */
  @container (height < 9.5em) {
    .body {
      padding: ${G(.6)};
      gap: ${G(.3)};
    }

    .power,
    .volume {
      height: ${G(2.2)};
    }

    .power {
      width: ${G(2.2)};
      font-size: ${G(1.1)};
    }

    .title {
      font-size: ${G(.95)};
    }

    .controls button,
    .controls .main {
      height: ${G(2.2)};
      font-size: ${G(1.1)};
    }

    .controls .main {
      width: ${G(2.2)};
    }
  }

  /* Too narrow for the volume beside the power button: the power button alone. */
  @container (width < 10em) {
    .volume {
      display: none;
    }
  }

  @container (width < 15em) {
    .volume {
      padding: 0 ${G(.7)};
    }

    .volume .speaker {
      display: none;
    }
  }
`,Ov=(0,v.memo)(({tile:e})=>{let t=X(),n=Ru(),r=Z(),i=(0,v.useMemo)(()=>S_(e.entity,e.options),[e.entity,e.options]),a=iv(i.players),o=J(a),s=J(e.entity||void 0),c=J(i.power||void 0),l=av(t_(o)?a:void 0),u=cv(i.volume,i.volumeUnit,i.modeEntity,i.formatEntity),[d,f]=(0,v.useState)(!1),[p,m]=(0,v.useState)(null),h=nf(()=>void 0,()=>f(!0)),g=o?.attributes??{},_=e.name||s?.attributes.friendly_name||e.entity,y=t_(o),b=C_(o),x=g.friendly_name??_,S=g.media_title,ee=y?S??b??t(`media_nothing`):t(s?`off`:`not_found`),w=y?S?b??x:x:_,te=g.media_artist??g.media_series_title,T=t_(c)||c?.state===`on`;return(0,C.jsxs)(C.Fragment,{children:[(0,C.jsxs)(Dv,{"data-on":y,"data-press":!0,style:{"--on-color":n.colors.accent},role:`button`,tabIndex:0,"aria-label":_,onClick:e=>{s&&!Hd(e,`button`)&&h()},onKeyDown:e=>{!s||e.target!==e.currentTarget||e.key!==`Enter`&&e.key!==` `||(e.preventDefault(),f(!0))},children:[l&&l!==p&&(0,C.jsx)(`img`,{className:`art`,src:l,alt:``,onError:()=>m(l)}),l&&l!==p&&(0,C.jsx)(`div`,{className:`shade`}),(0,C.jsxs)(`div`,{className:`body`,children:[(0,C.jsxs)(`div`,{className:`top`,children:[(0,C.jsx)(`button`,{type:`button`,className:`power`,"aria-label":t(`media_power`),"data-tip":t(`media_power`),"aria-pressed":T,disabled:!c,onClick:()=>{let[e,t]=cd(i.power);r(e,t,void 0,{entity_id:i.power})},children:(0,C.jsx)(Q,{icon:`mdi:power`})}),u.volume.level!==null&&(0,C.jsxs)(`span`,{className:`volume`,"data-tip":t(`media_volume`),children:[(0,C.jsx)(Q,{className:`speaker`,icon:w_(u.volume.level,u.volume.muted)}),u.volume.muted?t(`media_muted`):u.volume.text]})]}),(0,C.jsxs)(`div`,{className:`info`,children:[(0,C.jsx)(`span`,{className:`source`,children:w}),(0,C.jsx)(`span`,{className:`title`,children:ee}),y&&te&&(0,C.jsx)(`span`,{className:`artist`,children:te}),y&&typeof g.media_album_name==`string`&&(0,C.jsx)(`span`,{className:`album`,children:g.media_album_name})]}),(0,C.jsx)(A_,{className:`timeline`,entityId:y?a:void 0}),(0,C.jsx)(O_,{className:`controls`,entityId:a})]})]}),s&&(0,C.jsx)(Ev,{open:d,onClose:()=>f(!1),config:i,activeId:a,name:_})]})}),kv=[{type:`entity`,label:`tile_entity`,description:`tile_entity_hint`,icon:`mdi:gesture-tap-button`,component:tp,needsEntity:!0,domains:sd,size:[1,1]},{type:`sensor`,label:`tile_sensor`,description:`tile_sensor_hint`,icon:`mdi:chart-bell-curve-cumulative`,component:Hp,needsEntity:!0,domains:[`sensor`,`input_number`,`number`,`counter`],pickerEntities:e=>Object.keys(e).filter(t=>Gd(t,e[t])),size:[2,1]},{type:`cover`,label:`tile_cover`,description:`tile_cover_hint`,icon:`mdi:window-shutter`,component:Dm,needsEntity:!0,domains:[`cover`],size:[2,1]},{type:`better_lighting`,label:`tile_better_lighting`,description:`tile_better_lighting_hint`,icon:`mdi:lightbulb-group`,component:tm,needsEntity:!0,domains:[`light`],size:[2,2],integration:`better_lighting`,pickerIntegration:`better_lighting`},{type:`adaptive_cover`,label:`tile_adaptive_cover`,description:`tile_adaptive_cover_hint`,icon:`mdi:window-shutter-auto`,component:Vh,needsEntity:!0,domains:[`cover`],size:[2,2],integration:`adaptive_cover_pro`,pickerEntities:Kd},{type:`media`,label:`tile_media`,description:`tile_media_hint`,icon:`mdi:multimedia`,component:Ov,needsEntity:!0,domains:[`media_player`],size:[2,2]}],Av=Object.fromEntries(kv.map(e=>[e.type,e])),jv=(0,v.memo)(({tile:e,place:t})=>{let n=Av[e.type]?.component;return n?(0,C.jsx)(`div`,{"data-tile":!0,style:{gridColumn:`${t.column+1} / span ${t.w}`,gridRow:`${t.row+1} / span ${t.h}`,minWidth:0,minHeight:0},children:(0,C.jsx)(n,{tile:e})}):null});function Mv(e,t,n){let r=new Set,i=(e,t,n,i)=>{for(let a=t;a<t+i;a++)for(let t=e;t<e+n;t++)if(r.has(`${t},${a}`))return!1;return!0},a=0;return e.map(e=>{let o=Math.max(1,Math.min(t,e.w)),s=a;for(;!i(s%t,Math.floor(s/t),o,1)||s%t>t-o;)s++;let c=s%t,l=Math.floor(s/t),u=Math.max(1,Math.min(e.h,n-l));for(;u>1&&!i(c,l,o,u);)u--;for(let e=l;e<l+u;e++)for(let t=c;t<c+o;t++)r.add(`${t},${e}`);return a=s,{column:c,row:l,w:o,h:u}})}var Nv=W.div`
  container-type: size;
  min-width: 0;
  min-height: 0;
  width: 100%;
  height: 100%;
`,Pv=W.div`
  --gap: ${G(.55)};
  display: grid;
  gap: var(--gap);
  width: 100%;
  height: 100%;
  ${({$columns:e,$rows:t,$square:n})=>{if(!n)return`
        grid-template-columns: repeat(${e}, minmax(0, 1fr));
        grid-template-rows: repeat(${t}, minmax(0, 1fr));
      `;let r=`min((100cqw - (${e-1}) * var(--gap)) / ${e}, (100cqh - (${t-1}) * var(--gap)) / ${t})`;return`
      grid-template-columns: repeat(${e}, var(--cell-w, ${r}));
      grid-template-rows: repeat(${t}, var(--cell-h, ${r}));
      justify-content: start;
      align-content: start;
    `}}
`,Fv=(0,v.memo)(({tiles:e,columns:t,rows:n,square:r})=>{let i=(0,v.useMemo)(()=>Mv(e,t,n),[e,t,n]);return(0,C.jsx)(Nv,{"data-cell-grid":r?``:void 0,"data-columns":t,"data-rows":n,children:(0,C.jsx)(Pv,{$columns:t,$rows:n,$square:r,children:e.map((e,t)=>(0,C.jsx)(jv,{tile:e,place:i[t]},e.id))})})}),Iv=W.section`
  display: grid;
  grid-template-rows: ${({$headed:e})=>e?`${G(2.6)} minmax(0, 1fr)`:`minmax(0, 1fr)`};
  row-gap: ${G(.4)};
  min-width: 0;
  min-height: 0;
`,Lv=W.header`
  display: flex;
  align-items: center;
  min-width: 0;
  padding: 0 ${G(.3)};

  /* One gap throughout: icon, name, rule and readings as evenly apart as
     the readings are from their dots. */
  .icon {
    font-size: ${G(1.35)};
    margin-right: ${G(.9)};
  }

  h2 {
    margin: 0 ${G(.9)} 0 0;
    font-size: ${G(1.2)};
    font-weight: 600;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  /* The tiles' glass, as far as a thin line can carry it: a tint a little
     stronger than theirs, their hairline edge and top highlight. */
  .line,
  .dot {
    height: ${G(.5)};
    border-radius: ${G(.5)};
    box-sizing: border-box;
    background: linear-gradient(to bottom, rgba(255, 255, 255, 0.09), rgba(255, 255, 255, 0.05));
    border: 1px solid rgba(255, 255, 255, 0.06);
    box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.07);
  }

  /* Kept clear of the first reading by that reading's own margin, the same
     gap as either side of a dot; without readings it runs to the end. */
  .line {
    flex: 1;
    min-width: ${G(1)};
  }

  /* Between two readings: the rule again, as a dot. */
  .dot {
    flex: none;
    width: ${G(.5)};
    margin-left: ${G(.9)};
  }
`,Rv=W.span`
  display: inline-flex;
  align-items: center;
  gap: ${G(.3)};
  font-size: ${G(.95)};
  white-space: nowrap;
  margin-left: ${G(.9)};
  color: ${({theme:e})=>e.text.primary};

  .reading-icon {
    font-size: ${G(.95)};
  }
`,zv=({iso:e})=>{let t=Y(),n=_p(6e4),r=new Date(e),i=Mp(r,t,n);return(0,C.jsx)(`span`,{"data-tip":r.toLocaleString(t,{weekday:`short`,day:`numeric`,month:`short`,hour:`2-digit`,minute:`2-digit`}),children:i.charAt(0).toLocaleUpperCase(t)+i.slice(1)})},Bv=({entityId:e,icon:t})=>{let n=J(e),r=rd(e),i=Y(),a=n?.attributes.device_class,o=t||n?.attributes.icon||(a===`temperature`?`mdi:thermometer`:a===`humidity`?`mdi:water`:a===`timestamp`?`mdi:clock-outline`:`mdi:information-outline`),s=a===`timestamp`&&n&&Number.isFinite(Date.parse(n.state));return(0,C.jsxs)(Rv,{children:[(0,C.jsx)(Q,{className:`reading-icon`,icon:o}),s?(0,C.jsx)(zv,{iso:n.state}):Ep(n?.state,n?.attributes.unit_of_measurement,i,r)]})},Vv=(0,v.memo)(({section:e})=>{let t=!!(e.name||e.icon||e.status.length);return(0,C.jsxs)(Iv,{$headed:t,children:[t&&(0,C.jsxs)(Lv,{children:[e.icon&&(0,C.jsx)(Q,{className:`icon`,icon:e.icon}),e.name&&(0,C.jsx)(`h2`,{children:e.name}),(0,C.jsx)(`span`,{className:`line`}),e.status.map((t,n)=>(0,C.jsxs)(v.Fragment,{children:[n>0&&(0,C.jsx)(`span`,{className:`dot`}),(0,C.jsx)(Bv,{entityId:t,icon:e.status_icons?.[t]})]},t))]}),(0,C.jsx)(Fv,{tiles:e.tiles,columns:e.columns,rows:e.rows,square:e.square})]})}),Hv=W.div`
  display: grid;
  grid-template-columns: ${({$columns:e})=>e};
  grid-template-rows: ${({$rows:e})=>e};
  gap: ${G(.9)};
  min-width: 0;
  min-height: 0;
  overflow: hidden;
  /* Back in from the swiper's faded edge; see PageSwiper. */
  padding: 0 ${G(1.1)};
`,Uv=e=>e.map(e=>`minmax(0, ${e}fr)`).join(` `),Wv=(0,v.memo)(({page:e})=>(0,C.jsx)(Hv,{$columns:Uv(e.columns),$rows:Uv(e.rows),children:e.sections.map(e=>(0,C.jsx)(Vv,{section:e},e.id))})),Gv=W.div`
  display: grid;
  grid-template-rows: minmax(0, 1fr) auto;
  min-height: 0;
  min-width: 0;
`,Kv=G(1.1),qv=W.div`
  margin: 0 calc(-1 * ${Kv});
  mask-image: linear-gradient(to right, transparent, black ${Kv}, black calc(100% - ${Kv}), transparent);
  -webkit-mask-image: linear-gradient(to right, transparent, black ${Kv}, black calc(100% - ${Kv}), transparent);

  display: flex;
  overflow-x: auto;
  overflow-y: hidden;
  scroll-snap-type: x mandatory;
  overscroll-behavior-x: contain;
  scrollbar-width: none;
  min-height: 0;

  &::-webkit-scrollbar {
    display: none;
  }

  > * {
    flex: 0 0 100%;
    width: 100%;
    height: 100%;
    scroll-snap-align: start;
    scroll-snap-stop: always;
  }
`,Jv=`round(nearest, calc(var(--u) * 0.6), 2px)`,Yv=W.div`
  display: flex;
  justify-content: center;
  height: ${G(1.6)};
  align-items: center;

  button {
    width: ${G(1.2)};
    height: ${G(1.6)};
    display: flex;
    align-items: center;
    justify-content: center;
  }

  button::after {
    content: '';
    width: ${Jv};
    height: ${Jv};
    border-radius: 50%;
    background: rgba(255, 255, 255, 0.45);
    /* An empty ring: the hole reaches to within a sixth of the edge. */
    --dot-hole: 70%;
    mask-image: radial-gradient(circle closest-side, transparent var(--dot-hole), #000 calc(var(--dot-hole) + 0.5px));
    -webkit-mask-image: radial-gradient(circle closest-side, transparent var(--dot-hole), #000 calc(var(--dot-hole) + 0.5px));
    transition:
      --dot-hole 0.4s cubic-bezier(0.4, 0, 0.2, 1),
      background-color 0.4s ease;
  }

  /* No hole at all: completely filled. Past zero, or the mask's own edge
     leaves a pinhole in the middle. */
  button[aria-current='true']::after {
    --dot-hole: -10%;
    background: ${({theme:e})=>e.colors.accent};
  }
`,Xv=(0,v.memo)(({pages:e})=>{let t=(0,v.useRef)(null),[n,r]=(0,v.useState)(0);Ud(t,e.length),(0,v.useEffect)(()=>{let e=t.current;if(!e)return;let n=0,i=()=>{cancelAnimationFrame(n),n=requestAnimationFrame(()=>{let t=Math.round(e.scrollLeft/Math.max(1,e.clientWidth));r(e=>e===t?e:t)})};return e.addEventListener(`scroll`,i,{passive:!0}),()=>{e.removeEventListener(`scroll`,i),cancelAnimationFrame(n)}},[]),(0,v.useLayoutEffect)(()=>{let e=t.current;if(!e)return;let n=()=>{let t=Rd([...e.querySelectorAll(`[data-cell-grid]`)].map(e=>{let t=e.clientWidth,n=e.clientHeight,r=e.firstElementChild;return{width:t,height:n,gap:r&&parseFloat(getComputedStyle(r).columnGap)||0,columns:Number(e.dataset.columns),rows:Number(e.dataset.rows)}}));t?(e.style.setProperty(`--cell-w`,`${t.width}px`),e.style.setProperty(`--cell-h`,`${t.height}px`)):(e.style.removeProperty(`--cell-w`),e.style.removeProperty(`--cell-h`))};n();let r=new ResizeObserver(n);return r.observe(e),()=>r.disconnect()},[e]);let i=e=>{let n=t.current;n?.scrollTo({left:e*n.clientWidth,behavior:`smooth`})},{focusPage:a}=Id();return(0,v.useEffect)(()=>{let e=t.current;a!==void 0&&e&&e.scrollTo({left:a*e.clientWidth,behavior:`smooth`})},[a]),(0,C.jsxs)(Gv,{children:[(0,C.jsx)(qv,{ref:t,children:e.map(e=>(0,C.jsx)(Wv,{page:e},e.id))}),(0,C.jsx)(Yv,{children:e.length>1&&e.map((e,t)=>(0,C.jsx)(`button`,{type:`button`,"aria-label":`${t+1}`,"aria-current":t===n,onClick:()=>i(t)},e.id))})]})}),Zv=W.nav`
  display: grid;
  grid-template-columns: repeat(${({$count:e})=>e}, minmax(0, 1fr));
  column-gap: ${G(.7)};
  height: ${G(3.2)};
`,Qv=W.button`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  min-width: 0;
  padding: 0 ${G(1)} 0 ${G(3.4)};
  ${Qd}
  ${$d}
  font-size: ${G(1.15)};

  .icon {
    position: absolute;
    left: ${G(1.4)};
    font-size: ${G(1.8)};
  }

  .name {
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
`,$v=W.p`
  color: ${({theme:e})=>e.text.secondary};
  text-align: center;
  padding: ${G(2)} 0;
`,ey=W.div`
  height: ${({$rows:e})=>G(e*8)};
  max-height: 60dvh;
`,ty=({button:e})=>{let t=X();if(!e.tiles.length)return(0,C.jsx)($v,{children:t(`empty_popup`)});let n=e.tiles.reduce((e,t)=>e+t.w*t.h,0),r=Math.max(1,Math.ceil(n/e.columns));return(0,C.jsx)(ey,{$rows:r,children:(0,C.jsx)(Fv,{tiles:e.tiles,columns:e.columns,rows:r,square:!1})})},ny=(0,v.memo)(({buttons:e})=>{let[t,n]=(0,v.useState)(null),r=(0,v.useCallback)(()=>n(null),[]);return e.length?(0,C.jsxs)(Zv,{$count:e.length,"data-bounce":!0,children:[e.map(e=>(0,C.jsxs)(Qv,{type:`button`,onClick:()=>n(e.id),children:[e.icon&&(0,C.jsx)(Q,{className:`icon`,icon:e.icon}),(0,C.jsx)(`span`,{className:`name`,children:e.name})]},e.id)),e.map(e=>(0,C.jsx)(Mf,{open:t===e.id,onClose:r,title:e.name,icon:e.icon,width:Math.max(50,e.columns*14),children:(0,C.jsx)(ty,{button:e})},e.id))]}):null}),ry=W.main`
  width: 100%;
  height: 100%;
  min-width: 0;
  min-height: 0;
  display: grid;
  grid-template-rows: minmax(0, 1fr) auto;
  row-gap: ${G(.6)};
`,iy=()=>{let e=Ld();return(0,C.jsxs)(ry,{children:[(0,C.jsx)(Xv,{pages:e.pages}),(0,C.jsx)(ny,{buttons:e.buttons})]})},ay=W(W.div`
  position: relative;
  width: 100%;
  height: 100%;
  min-width: 0;
  min-height: 0;
  border-radius: ${G(1.2)};
  ${Zd}
  padding: ${G(1)};
  display: flex;
  overflow: hidden;
`)`
  display: grid;
  grid-template-columns: minmax(0, 1fr);
  grid-template-rows: auto minmax(0, 1fr) auto;
  grid-template-areas:
    'header'
    'body'
    'footer';
  padding: ${G(.9)} ${G(1.1)} ${G(.6)};

  [data-orientation='portrait'] & {
    grid-template-columns: minmax(0, 1fr) minmax(0, 1fr);
    grid-template-rows: auto minmax(0, 1fr) auto;
    grid-template-areas:
      'header right'
      'left right'
      'left footer';
    column-gap: ${G(1.4)};
  }
`,oy=W.div`
  grid-area: body;
  display: flex;
  flex-direction: column;
  min-height: 0;
  overflow: hidden;

  /* In portrait both columns are the band's own grid items. */
  [data-orientation='portrait'] & {
    display: contents;
  }
`,sy=W.div`
  display: contents;

  [data-orientation='portrait'] & {
    grid-area: ${({$side:e})=>e};
    display: flex;
    flex-direction: column;
    min-width: 0;
    min-height: 0;
    /* The left column alone sets the band's height. The right one is sized
       to contribute nothing, then stretched to what the left one made, and
       its calendar scrolls within that. */
    ${({$side:e})=>e===`right`?`contain: size;`:``}
  }
`,cy=W.div`
  grid-area: ${({$area:e})=>e};
  min-width: 0;
  /* Every block keeps its content's height; the calendar alone gives way. */
  flex: none;

  /* Spaced from the next only when something in it shows: a block hidden by
     its settings still holds its popup, closed, and was not empty -- its
     spacing doubled the gap where it had been. */
  &:has(> :not(dialog)) {
    padding-bottom: ${G(.6)};
  }

  /* The calendar takes the space that is left and scrolls within it. */
  &[data-area='calendar'] {
    flex: 1 1 0;
    min-height: 0;
    display: flex;
    flex-direction: column;
  }

  /* Its own block, set apart from the quick actions above it. */
  &[data-area='calendar']:has(> :not(dialog)) {
    margin-top: ${G(.6)};
  }

  /* The last block sits on the card's own padding, not on its own too. */
  &[data-area='footer'] {
    padding-bottom: 0;
  }

  [data-orientation='portrait'] &[data-area='footer'] {
    align-self: end;
  }
`,ly=W.h3`
  margin: ${G(.5)} 0 ${G(.2)} ${G(.2)};
  font-size: ${G(1.2)};
  font-weight: 600;
`,uy=W.div`
  display: flex;
  flex-direction: column;
  min-width: 0;
  line-height: 1;
  font-weight: 300;
`,dy=W.p`
  font-size: ${G(6.4)};
  letter-spacing: -0.02em;
  margin-left: -0.04em;
`,fy=W.span`
  font-size: 0.42em;
  margin-left: 0.08em;
  color: ${({theme:e})=>e.text.secondary};
  font-variant-numeric: tabular-nums;
`,py=W.p`
  font-size: ${G(2.05)};
  margin-top: ${G(.35)};
  padding-left: ${G(.1)};
  white-space: nowrap;
`,my=({timeProps:e,seconds:t=!1})=>{let n=new Date(_p(t?1e3:6e4)),r=Y();return(0,C.jsxs)(uy,{children:[(0,C.jsx)(`div`,{...e,children:(0,C.jsxs)(dy,{children:[kp(n,r),t&&(0,C.jsx)(fy,{children:String(n.getSeconds()).padStart(2,`0`)})]})}),(0,C.jsx)(py,{children:Ap(n,r)})]})},hy=Qu`
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
`,gy=W.div`
  width: ${G(8.8)};
  height: ${G(8.8)};
  flex: none;

  svg {
    display: block;
    width: 100%;
    height: 100%;
    overflow: visible;
  }

  /* Each hand turns about the dial's centre, forever, at its own speed. */
  .hand {
    transform-box: view-box;
    transform-origin: 50px 50px;
    animation-name: ${hy};
    animation-timing-function: linear;
    animation-iteration-count: infinite;
  }
`,_y=(e,t)=>{let n=e*2*Math.PI;return{x:50+t*Math.sin(n),y:50-t*Math.cos(n)}},vy=({period:e,into:t,length:n,width:r,tail:i=7,color:a,shadow:o})=>(0,C.jsx)(`g`,{filter:`url(#${o})`,children:(0,C.jsx)(`g`,{className:`hand`,style:{animationDuration:`${e}s`,animationDelay:`-${t}s`},children:(0,C.jsx)(`line`,{x1:50,y1:50+i,x2:50,y2:50-n,stroke:a,strokeWidth:r,strokeLinecap:`round`})})}),yy=({timeProps:e,seconds:t=!1})=>{let n=_p(6e5),r=`clock-shadow-${(0,v.useId)().replace(/[^\w-]/g,``)}`,i=new Date(n),a=i.getSeconds()+i.getMilliseconds()/1e3,o=i.getMinutes()*60+a,s=i.getHours()%12*3600+o;return(0,C.jsx)(gy,{...e,children:(0,C.jsxs)(`svg`,{viewBox:`0 0 100 100`,role:`img`,"aria-label":i.toLocaleTimeString(),children:[Array.from({length:12},(e,t)=>{if(t%3==0){let e=_y(t/12,44),n=_y(t/12,35);return(0,C.jsx)(`line`,{x1:n.x,y1:n.y,x2:e.x,y2:e.y,stroke:`rgba(255, 255, 255, 0.75)`,strokeWidth:3.5,strokeLinecap:`round`},t)}let n=_y(t/12,40);return(0,C.jsx)(`circle`,{cx:n.x,cy:n.y,r:1.9,fill:`rgba(255, 255, 255, 0.35)`},t)}),(0,C.jsx)(`defs`,{children:(0,C.jsx)(`filter`,{id:r,x:`-50%`,y:`-50%`,width:`200%`,height:`200%`,children:(0,C.jsx)(`feDropShadow`,{dx:0,dy:1,stdDeviation:1.3,floodColor:`#000`,floodOpacity:.5})})}),(0,C.jsxs)(`g`,{children:[(0,C.jsx)(vy,{period:43200,into:s,length:23,width:6.5,tail:5,color:`#c9ccd1`,shadow:r}),(0,C.jsx)(vy,{period:3600,into:o,length:36,width:3.8,tail:6,color:`#ffffff`,shadow:r}),t&&(0,C.jsx)(vy,{period:60,into:a,length:40,width:1.3,tail:11,color:`rgba(255, 255, 255, 0.85)`,shadow:r})]},n),(0,C.jsx)(`circle`,{cx:50,cy:50,r:3.4,fill:`#fff`,filter:`url(#${r})`})]})})},by=W.p`
  font-size: ${G(1.8)};
  font-weight: 300;
  line-height: 1.1;
  white-space: nowrap;
`,xy=()=>{let e=new Date(_p(6e4)),t=Y();return(0,C.jsx)(by,{children:Ap(e,t)})},Sy=(0,v.memo)(my),Cy=W.span`
  position: absolute;
  top: ${G(-.1)};
  right: ${G(-.1)};
  background-color: ${({theme:e})=>e.colors.alert};
  color: #fff;
  border-radius: ${G(.6)};
  min-width: ${G(1.2)};
  height: ${G(1.2)};
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: ${G(.7)};
  font-weight: 600;
  line-height: 1;
  padding: 0 ${G(.35)};
  pointer-events: none;
`,wy=W.button`
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  width: ${G(3)};
  height: ${G(3)};
  border-radius: 50%;
  flex-shrink: 0;
  font-size: ${G(1.5)};
  color: ${({theme:e,$active:t})=>t===!1?e.text.secondary:e.text.primary};
  ${({theme:e})=>Jd(e.bubble.background,e.bubble.pressed)}
`,Ty=({icon:e,onClick:t,badge:n,label:r,active:i,color:a})=>(0,C.jsxs)(wy,{type:`button`,onClick:t,"aria-label":r,"data-tip":r,$active:i,children:[(0,C.jsx)(Q,{icon:e,color:a}),n!==void 0&&n>0&&(0,C.jsx)(Cy,{children:n>99?`99+`:n})]}),Ey=(e=>(e[e.Border=-1]=`Border`,e[e.Data=0]=`Data`,e[e.Function=1]=`Function`,e[e.Position=2]=`Position`,e[e.Timing=3]=`Timing`,e[e.Alignment=4]=`Alignment`,e))(Ey||{}),Dy=[0,1],Oy=[1,0],ky=[2,3],Ay=[3,2],jy={L:Dy,M:Oy,Q:ky,H:Ay},My=/^\d*$/,Ny=/^[A-Z0-9 $%*+./:-]*$/,Py=`0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ $%*+-./:`,Fy=1,Iy=40,Ly=3,Ry=3,zy=40,By=10,Vy=[[-1,7,10,15,20,26,18,20,24,30,18,20,24,26,30,22,24,28,30,28,28,28,28,30,30,26,28,30,30,30,30,30,30,30,30,30,30,30,30,30,30],[-1,10,16,26,18,24,16,18,22,22,26,30,22,22,24,24,28,28,26,26,26,26,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28],[-1,13,22,18,26,18,24,18,22,20,24,28,26,24,20,30,24,28,28,26,30,28,30,30,30,30,28,30,30,30,30,30,30,30,30,30,30,30,30,30,30],[-1,17,28,22,16,22,28,26,26,24,28,24,28,22,24,24,30,28,28,26,28,30,24,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30]],Hy=[[-1,1,1,1,1,1,2,2,2,2,4,4,4,4,4,6,6,6,6,7,8,8,9,9,10,12,12,12,13,14,15,16,17,18,19,19,20,21,22,24,25],[-1,1,1,1,2,2,4,4,4,5,5,5,8,9,9,10,10,11,13,14,16,17,17,18,20,21,23,25,26,28,29,31,33,35,37,38,40,43,45,47,49],[-1,1,1,2,2,4,4,6,6,8,8,8,10,12,16,12,17,16,18,21,20,23,23,25,27,29,34,34,35,38,40,43,45,48,51,53,56,59,62,65,68],[-1,1,1,2,4,4,4,5,6,8,8,11,11,16,16,18,16,19,21,25,25,25,34,30,32,35,37,40,42,45,48,51,54,57,60,63,66,70,74,77,81]],Uy=class{constructor(e,t,n,r){if(this.version=e,this.ecc=t,e<Fy||e>Iy)throw RangeError(`Version value out of range`);if(r<-1||r>7)throw RangeError(`Mask value out of range`);this.size=e*4+17;let i=Array.from({length:this.size}).fill(!1);for(let e=0;e<this.size;e++)this.modules.push(i.slice()),this.types.push(i.map(()=>0));this.drawFunctionPatterns();let a=this.addEccAndInterleave(n);if(this.drawCodewords(a),r===-1){let e=1e9;for(let t=0;t<8;t++){this.applyMask(t),this.drawFormatBits(t);let n=this.getPenaltyScore();n<e&&(r=t,e=n),this.applyMask(t)}}this.mask=r,this.applyMask(r),this.drawFormatBits(r)}size;mask;modules=[];types=[];getModule(e,t){return e>=0&&e<this.size&&t>=0&&t<this.size&&this.modules[t][e]}drawFunctionPatterns(){for(let e=0;e<this.size;e++)this.setFunctionModule(6,e,e%2==0,Ey.Timing),this.setFunctionModule(e,6,e%2==0,Ey.Timing);this.drawFinderPattern(3,3),this.drawFinderPattern(this.size-4,3),this.drawFinderPattern(3,this.size-4);let e=this.getAlignmentPatternPositions(),t=e.length;for(let n=0;n<t;n++)for(let r=0;r<t;r++)n===0&&r===0||n===0&&r===t-1||n===t-1&&r===0||this.drawAlignmentPattern(e[n],e[r]);this.drawFormatBits(0),this.drawVersion()}drawFormatBits(e){let t=this.ecc[1]<<3|e,n=t;for(let e=0;e<10;e++)n=n<<1^(n>>>9)*1335;let r=(t<<10|n)^21522;for(let e=0;e<=5;e++)this.setFunctionModule(8,e,Gy(r,e));this.setFunctionModule(8,7,Gy(r,6)),this.setFunctionModule(8,8,Gy(r,7)),this.setFunctionModule(7,8,Gy(r,8));for(let e=9;e<15;e++)this.setFunctionModule(14-e,8,Gy(r,e));for(let e=0;e<8;e++)this.setFunctionModule(this.size-1-e,8,Gy(r,e));for(let e=8;e<15;e++)this.setFunctionModule(8,this.size-15+e,Gy(r,e));this.setFunctionModule(8,this.size-8,!0)}drawVersion(){if(this.version<7)return;let e=this.version;for(let t=0;t<12;t++)e=e<<1^(e>>>11)*7973;let t=this.version<<12|e;for(let e=0;e<18;e++){let n=Gy(t,e),r=this.size-11+e%3,i=Math.floor(e/3);this.setFunctionModule(r,i,n),this.setFunctionModule(i,r,n)}}drawFinderPattern(e,t){for(let n=-4;n<=4;n++)for(let r=-4;r<=4;r++){let i=Math.max(Math.abs(r),Math.abs(n)),a=e+r,o=t+n;a>=0&&a<this.size&&o>=0&&o<this.size&&this.setFunctionModule(a,o,i!==2&&i!==4,Ey.Position)}}drawAlignmentPattern(e,t){for(let n=-2;n<=2;n++)for(let r=-2;r<=2;r++)this.setFunctionModule(e+r,t+n,Math.max(Math.abs(r),Math.abs(n))!==1,Ey.Alignment)}setFunctionModule(e,t,n,r=Ey.Function){this.modules[t][e]=n,this.types[t][e]=r}addEccAndInterleave(e){let t=this.version,n=this.ecc;if(e.length!==ob(t,n))throw RangeError(`Invalid argument`);let r=Hy[n[0]][t],i=Vy[n[0]][t],a=Math.floor(ab(t)/8),o=r-a%r,s=Math.floor(a/r),c=[],l=sb(i);for(let t=0,n=0;t<r;t++){let r=e.slice(n,n+s-i+(t<o?0:1));n+=r.length;let a=cb(r,l);t<o&&r.push(0),c.push(r.concat(a))}let u=[];for(let e=0;e<c[0].length;e++)c.forEach((t,n)=>{(e!==s-i||n>=o)&&u.push(t[e])});return u}drawCodewords(e){if(e.length!==Math.floor(ab(this.version)/8))throw RangeError(`Invalid argument`);let t=0;for(let n=this.size-1;n>=1;n-=2){n===6&&(n=5);for(let r=0;r<this.size;r++)for(let i=0;i<2;i++){let a=n-i,o=n+1&2?r:this.size-1-r;!this.types[o][a]&&t<e.length*8&&(this.modules[o][a]=Gy(e[t>>>3],7-(t&7)),t++)}}}applyMask(e){if(e<0||e>7)throw RangeError(`Mask value out of range`);for(let t=0;t<this.size;t++)for(let n=0;n<this.size;n++){let r;switch(e){case 0:r=(n+t)%2==0;break;case 1:r=t%2==0;break;case 2:r=n%3==0;break;case 3:r=(n+t)%3==0;break;case 4:r=(Math.floor(n/3)+Math.floor(t/2))%2==0;break;case 5:r=n*t%2+n*t%3==0;break;case 6:r=(n*t%2+n*t%3)%2==0;break;case 7:r=((n+t)%2+n*t%3)%2==0;break;default:throw Error(`Unreachable`)}!this.types[t][n]&&r&&(this.modules[t][n]=!this.modules[t][n])}}getPenaltyScore(){let e=0;for(let t=0;t<this.size;t++){let n=!1,r=0,i=[0,0,0,0,0,0,0];for(let a=0;a<this.size;a++)this.modules[t][a]===n?(r++,r===5?e+=Ly:r>5&&e++):(this.finderPenaltyAddHistory(r,i),n||(e+=this.finderPenaltyCountPatterns(i)*zy),n=this.modules[t][a],r=1);e+=this.finderPenaltyTerminateAndCount(n,r,i)*zy}for(let t=0;t<this.size;t++){let n=!1,r=0,i=[0,0,0,0,0,0,0];for(let a=0;a<this.size;a++)this.modules[a][t]===n?(r++,r===5?e+=Ly:r>5&&e++):(this.finderPenaltyAddHistory(r,i),n||(e+=this.finderPenaltyCountPatterns(i)*zy),n=this.modules[a][t],r=1);e+=this.finderPenaltyTerminateAndCount(n,r,i)*zy}for(let t=0;t<this.size-1;t++)for(let n=0;n<this.size-1;n++){let r=this.modules[t][n];r===this.modules[t][n+1]&&r===this.modules[t+1][n]&&r===this.modules[t+1][n+1]&&(e+=Ry)}let t=0;for(let e of this.modules)t=e.reduce((e,t)=>e+ +!!t,t);let n=this.size*this.size,r=Math.ceil(Math.abs(t*20-n*10)/n)-1;return e+=r*By,e}getAlignmentPatternPositions(){if(this.version===1)return[];{let e=Math.floor(this.version/7)+2,t=this.version===32?26:Math.ceil((this.version*4+4)/(e*2-2))*2,n=[6];for(let r=this.size-7;n.length<e;r-=t)n.splice(1,0,r);return n}}finderPenaltyCountPatterns(e){let t=e[1],n=t>0&&e[2]===t&&e[3]===t*3&&e[4]===t&&e[5]===t;return(n&&e[0]>=t*4&&e[6]>=t?1:0)+(n&&e[6]>=t*4&&e[0]>=t?1:0)}finderPenaltyTerminateAndCount(e,t,n){return e&&(this.finderPenaltyAddHistory(t,n),t=0),t+=this.size,this.finderPenaltyAddHistory(t,n),this.finderPenaltyCountPatterns(n)}finderPenaltyAddHistory(e,t){t[0]===0&&(e+=this.size),t.pop(),t.unshift(e)}};function Wy(e,t,n){if(t<0||t>31||e>>>t)throw RangeError(`Value out of range`);for(let r=t-1;r>=0;r--)n.push(e>>>r&1)}function Gy(e,t){return!!(e>>>t&1)}var Ky=class{constructor(e,t,n){if(this.mode=e,this.numChars=t,this.bitData=n,t<0)throw RangeError(`Invalid argument`);this.bitData=n.slice()}getData(){return this.bitData.slice()}},qy=[1,10,12,14],Jy=[2,9,11,13],Yy=[4,8,16,16];function Xy(e,t){return e[Math.floor((t+7)/17)+1]}function Zy(e){let t=[];for(let n of e)Wy(n,8,t);return new Ky(Yy,e.length,t)}function Qy(e){if(!tb(e))throw RangeError(`String contains non-numeric characters`);let t=[];for(let n=0;n<e.length;){let r=Math.min(e.length-n,3);Wy(Number.parseInt(e.substring(n,n+r),10),r*3+1,t),n+=r}return new Ky(qy,e.length,t)}function $y(e){if(!nb(e))throw RangeError(`String contains unencodable characters in alphanumeric mode`);let t=[],n=0;for(;n+2<=e.length;n+=2){let r=Py.indexOf(e.charAt(n))*45;r+=Py.indexOf(e.charAt(n+1)),Wy(r,11,t)}return n<e.length&&Wy(Py.indexOf(e.charAt(n)),6,t),new Ky(Jy,e.length,t)}function eb(e){return e===``?[]:tb(e)?[Qy(e)]:nb(e)?[$y(e)]:[Zy(ib(e))]}function tb(e){return My.test(e)}function nb(e){return Ny.test(e)}function rb(e,t){let n=0;for(let r of e){let e=Xy(r.mode,t);if(r.numChars>=1<<e)return 1/0;n+=4+e+r.bitData.length}return n}function ib(e){e=encodeURI(e);let t=[];for(let n=0;n<e.length;n++)e.charAt(n)===`%`?(t.push(Number.parseInt(e.substring(n+1,n+3),16)),n+=2):t.push(e.charCodeAt(n));return t}function ab(e){if(e<Fy||e>Iy)throw RangeError(`Version number out of range`);let t=(16*e+128)*e+64;if(e>=2){let n=Math.floor(e/7)+2;t-=(25*n-10)*n-55,e>=7&&(t-=36)}return t}function ob(e,t){return Math.floor(ab(e)/8)-Vy[t[0]][e]*Hy[t[0]][e]}function sb(e){if(e<1||e>255)throw RangeError(`Degree out of range`);let t=[];for(let n=0;n<e-1;n++)t.push(0);t.push(1);let n=1;for(let r=0;r<e;r++){for(let e=0;e<t.length;e++)t[e]=lb(t[e],n),e+1<t.length&&(t[e]^=t[e+1]);n=lb(n,2)}return t}function cb(e,t){let n=t.map(e=>0);for(let r of e){let e=r^n.shift();n.push(0),t.forEach((t,r)=>n[r]^=lb(t,e))}return n}function lb(e,t){if(e>>>8||t>>>8)throw RangeError(`Byte out of range`);let n=0;for(let r=7;r>=0;r--)n=n<<1^(n>>>7)*285,n^=(t>>>r&1)*e;return n}function ub(e,t,n=1,r=40,i=-1,a=!0){if(!(Fy<=n&&n<=r&&r<=Iy)||i<-1||i>7)throw RangeError(`Invalid value`);let o,s;for(o=n;;o++){let n=ob(o,t)*8,i=rb(e,o);if(i<=n){s=i;break}if(o>=r)throw RangeError(`Data too long`)}for(let e of[Oy,ky,Ay])a&&s<=ob(o,e)*8&&(t=e);let c=[];for(let t of e){Wy(t.mode[0],4,c),Wy(t.numChars,Xy(t.mode,o),c);for(let e of t.getData())c.push(e)}let l=ob(o,t)*8;Wy(0,Math.min(4,l-c.length),c),Wy(0,(8-c.length%8)%8,c);for(let e=236;c.length<l;e^=253)Wy(e,8,c);let u=Array.from({length:Math.ceil(c.length/8)},()=>0);return c.forEach((e,t)=>u[t>>>3]|=e<<7-(t&7)),new Uy(o,t,u,i)}function db(e,t){let{ecc:n=`L`,boostEcc:r=!1,minVersion:i=1,maxVersion:a=40,maskPattern:o=-1,border:s=1}=t||{},c=typeof e==`string`?eb(e):Array.isArray(e)?[Zy(e)]:void 0;if(!c)throw Error(`uqr only supports encoding string and binary data, but got: ${typeof e}`);let l=ub(c,jy[n],i,a,o,r),u=fb({version:l.version,maskPattern:l.mask,size:l.size,data:l.modules,types:l.types},s);return t?.invert&&(u.data=u.data.map(e=>e.map(e=>!e))),t?.onEncoded?.(u),u}function fb(e,t=1){if(!t)return e;let{size:n}=e,r=n+t*2;e.size=r,e.data.forEach(e=>{for(let n=0;n<t;n++)e.unshift(!1),e.push(!1)});for(let n=0;n<t;n++)e.data.unshift(Array.from({length:r},e=>!1)),e.data.push(Array.from({length:r},e=>!1));let i=Ey.Border;e.types.forEach(e=>{for(let n=0;n<t;n++)e.unshift(i),e.push(i)});for(let n=0;n<t;n++)e.types.unshift(Array.from({length:r},e=>i)),e.types.push(Array.from({length:r},e=>i));return e}var pb=W.div`
  position: relative;
  width: 100%;
  height: 100%;

  svg {
    display: block;
    width: 100%;
    height: 100%;
  }

  /* Over the middle, where the code leaves room for it. */
  .badge {
    position: absolute;
    left: 50%;
    top: 50%;
    width: 22%;
    aspect-ratio: 1;
    transform: translate(-50%, -50%);
    display: flex;
    align-items: center;
    justify-content: center;
    color: #fff;
    font-size: ${G(3)};
  }
`,mb=`#ffffff`,hb=(e,t,n)=>e<7&&t<7||e>=n-7&&t<7||e<7&&t>=n-7,gb=({payload:e})=>{let{data:t,size:n}=(0,v.useMemo)(()=>db(e,{ecc:`H`,border:0}),[e]),r=Math.ceil(n*.26),i=(n-r)/2,a=(e,t)=>e+1>i&&e<i+r&&t+1>i&&t<i+r,o=[];t.forEach((e,t)=>e.forEach((e,r)=>{e&&!hb(r,t,n)&&!a(r,t)&&o.push((0,C.jsx)(`circle`,{cx:r+.5,cy:t+.5,r:.47},`${r}-${t}`))}));let s=[[0,0],[n-7,0],[0,n-7]];return(0,C.jsxs)(pb,{children:[(0,C.jsxs)(`svg`,{viewBox:`0 0 ${n} ${n}`,role:`img`,"aria-hidden":`true`,children:[(0,C.jsx)(`g`,{fill:mb,children:o}),s.map(([e,t])=>(0,C.jsxs)(`g`,{children:[(0,C.jsx)(`rect`,{x:e+.5,y:t+.5,width:6,height:6,rx:1.9,fill:`none`,stroke:mb,strokeWidth:1}),(0,C.jsx)(`rect`,{x:e+2,y:t+2,width:3,height:3,rx:.9,fill:mb})]},`${e}-${t}`))]}),(0,C.jsx)(`span`,{className:`badge`,children:(0,C.jsx)(Q,{icon:`mdi:wifi`})})]})};function _b(e){return e===null||!Number.isFinite(e)?null:e>=-55?4:e>=-66?3:e>=-77?2:+(e>=-88)}function vb(e,t){return t?e===null?`mdi:wifi-strength-off-outline`:[`mdi:wifi-strength-outline`,`mdi:wifi-strength-1`,`mdi:wifi-strength-2`,`mdi:wifi-strength-3`,`mdi:wifi-strength-4`][e]:`mdi:wifi`}function yb(e,t,n,r){let i=e=>e.replace(/([\\;,:"])/g,`\\$1`),a=[`T:${n}`,`S:${i(e)}`];return n!==`nopass`&&a.push(`P:${i(t)}`),r&&a.push(`H:true`),`WIFI:${a.join(`;`)};;`}var bb=W.div`
  align-self: center;
  width: min(100%, ${G(22)});
  aspect-ratio: 1;
  /* The dark around the code is its quiet zone. */
  padding: ${G(1)};

  /* The UniFi integration's picture is dark on white: on a card of its own. */
  > img {
    width: 100%;
    height: 100%;
    display: block;
    padding: ${G(1.2)};
    border-radius: ${G(1.8)};
    background: #fff;
    box-sizing: border-box;
  }
`,xb=W.p`
  text-align: center;
  color: ${({theme:e})=>e.text.secondary};
  font-size: ${G(1.08)};
`,Sb=({open:e,onClose:t,config:n})=>{let r=X(),i=n.guest_wifi;return(0,C.jsx)(Mf,{open:e,onClose:t,title:r(`guest_wifi`),icon:`mdi:qrcode`,width:42,children:(0,C.jsx)(Cb,{wifi:i})})},Cb=({wifi:e})=>{let t=X(),n=J(e.qr_image||void 0),r=ad(),i=n?.attributes.entity_picture;return i?(0,C.jsxs)(C.Fragment,{children:[(0,C.jsx)(bb,{children:(0,C.jsx)(`img`,{src:r(i),alt:t(`guest_wifi`)})}),(0,C.jsx)(xb,{children:t(`guest_wifi_hint`)})]}):e.ssid?(0,C.jsxs)(C.Fragment,{children:[(0,C.jsx)(bb,{children:(0,C.jsx)(gb,{payload:yb(e.ssid,e.password,e.security,e.hidden)})}),(0,C.jsx)(xb,{children:t(`guest_wifi_hint`)})]}):(0,C.jsx)(xb,{children:t(`guest_wifi_missing`)})},wb=8,Tb=W.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${G(1.2)};
  padding-bottom: ${G(.4)};
  /* A keypad, not text: a long press on a key must not select its digit. */
  user-select: none;
  -webkit-user-select: none;
  -webkit-touch-callout: none;

  /* Focused to take key presses; nothing to show for it. */
  &:focus {
    outline: none;
  }

  .dots {
    display: flex;
    gap: ${G(.8)};
    height: ${G(1.2)};
    align-items: center;
  }

  .dot {
    width: ${G(1)};
    height: ${G(1)};
    border-radius: 50%;
    background: ${({theme:e})=>e.text.primary};
  }

  .hint {
    min-height: 1.4em;
    font-size: ${G(1)};
    color: ${({theme:e})=>e.text.secondary};
  }

  .hint.error {
    color: ${({theme:e})=>e.colors.alert};
  }
`,Eb=W.div`
  display: grid;
  grid-template-columns: repeat(3, ${G(4.6)});
  gap: ${G(.8)};

  button {
    width: ${G(4.6)};
    height: ${G(4.6)};
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: ${G(1.8)};
    background: ${({theme:e})=>e.bubble.background};
    ${({theme:e})=>Jd(e.bubble.hover,e.bubble.pressed)}
  }

  button:disabled {
    opacity: 0.35;
  }

  .confirm {
    color: ${({theme:e})=>e.colors.temperature};
  }
`,Db=({open:e,onClose:t,dashboardId:n,required:r,onUnlocked:i})=>{let a=X(),o=nd(),[s,c]=(0,v.useState)(``),[l,u]=(0,v.useState)(null),[d,f]=(0,v.useState)(!1),p=()=>{c(``),u(null),t()},m=async()=>{if(s&&!d){f(!0);try{let e=await o?.sendMessagePromise({type:`better_wall_dashboard/verify_pin`,pin:s,dashboard:n});if(c(``),e?.ok){p(),i();return}u({text:e?.locked_for?a(`pin_locked`,{seconds:e.locked_for}):a(`pin_wrong`),error:!0})}finally{f(!1)}}},h=e=>{u(null),c(t=>t.length<wb?t+e:t)};return(0,C.jsx)(Mf,{open:e,onClose:p,title:a(`pin_title`),icon:`mdi:lock-outline`,width:30,idleMs:3e4,children:(0,C.jsxs)(Tb,{tabIndex:-1,onKeyDown:e=>{/^[0-9]$/.test(e.key)&&h(e.key),e.key===`Backspace`&&c(e=>e.slice(0,-1)),e.key===`Enter`&&m()},children:[(0,C.jsx)(`div`,{className:`dots`,"aria-label":a(`pin_title`),children:Array.from({length:s.length},(e,t)=>(0,C.jsx)(`span`,{className:`dot`},t))}),(0,C.jsx)(`div`,{className:l?.error?`hint error`:`hint`,children:l?.text??``}),(0,C.jsxs)(Eb,{children:[[`1`,`2`,`3`,`4`,`5`,`6`,`7`,`8`,`9`].map(e=>(0,C.jsx)(`button`,{type:`button`,onClick:()=>h(e),children:e},e)),(0,C.jsx)(`button`,{type:`button`,"aria-label":a(`pin_delete`),disabled:!s,onClick:()=>c(e=>e.slice(0,-1)),children:(0,C.jsx)(Q,{icon:`mdi:backspace-outline`})}),(0,C.jsx)(`button`,{type:`button`,onClick:()=>h(`0`),children:`0`}),(0,C.jsx)(`button`,{type:`button`,className:`confirm`,"aria-label":a(`pin_confirm`),disabled:!s||d,onClick:()=>void m(),children:(0,C.jsx)(Q,{icon:`mdi:check`})})]})]})})};function Ob(e,t=3e3){let n=(0,v.useRef)(void 0),r=(0,v.useCallback)(()=>{window.clearTimeout(n.current),n.current=void 0},[]);return{onPointerDown:(0,v.useCallback)(i=>{let a=i.currentTarget;r(),n.current=window.setTimeout(()=>e(a),t)},[r,t,e]),onPointerUp:r,onPointerLeave:r,onPointerCancel:r}}function kb(e,t=300){let[n,r]=(0,v.useState)(e?`shown`:null);return(0,v.useEffect)(()=>{let n=0,i=0;return e?n=requestAnimationFrame(()=>{r(e=>e===`shown`?e:`enter`),n=requestAnimationFrame(()=>r(`shown`))}):(n=requestAnimationFrame(()=>r(e=>e===null?null:`leave`)),i=window.setTimeout(()=>r(null),t)),()=>{cancelAnimationFrame(n),window.clearTimeout(i)}},[e,t]),n}var Ab=W.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  /* No gap: the icons' own boxes already keep them clear of the clock. */
  padding: 0 0 ${G(.5)} ${G(.3)};
`,jb=W.div`
  flex: 1 1 0;
  /* At least two to a row before it wraps. */
  min-width: ${G(6)};
  display: flex;
  flex-direction: row-reverse;
  flex-wrap: wrap;
  align-content: flex-start;
  margin: ${G(-.3)} ${G(-.6)} 0 0;

  > :not(dialog) {
    width: ${G(3)};
    height: ${G(3)};
    flex: none;
  }
`,Mb=W.div`
  flex: 1 1 0;
  align-self: stretch;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: space-between;
  gap: ${G(.4)};
  min-width: 0;

  > :first-child {
    flex: none;
    align-self: stretch;
  }
`,Nb=W.span`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: ${G(1.5)};
  overflow: hidden;
  transition:
    width 0.3s ease,
    opacity 0.3s ease,
    transform 0.3s ease;

  &&[data-presence='enter'],
  &&[data-presence='leave'] {
    width: 0;
    opacity: 0;
    transform: scale(0.4);
  }
`,Pb=e=>e===`on`||e===`true`,Fb=({item:e})=>{let t=J(e.entity||void 0),n=kb(Pb(t?.state));if(!n)return null;let r=e.name||t?.attributes.friendly_name||e.entity;return(0,C.jsx)(Nb,{"data-tip":r,"aria-label":r,"data-presence":n,children:(0,C.jsx)(Q,{icon:e.icon||t?.attributes.icon||od(e.entity)})})},Ib=({config:e})=>{let t=X(),[n,r]=(0,v.useState)(!1),i=J(e.status.wifi_signal||void 0),a=!!e.status.wifi_signal,o=vb(_b(Sp(i?.state)),a),s=(0,v.useCallback)(()=>r(!1),[]);return(0,C.jsxs)(C.Fragment,{children:[(0,C.jsx)(Ty,{icon:o,label:t(`guest_wifi`),onClick:()=>r(!0)}),(0,C.jsx)(Sb,{open:n,onClose:s,config:e})]})};function Lb(){let{view:e}=Id(),[t,n]=(0,v.useState)(!1),r=!!e?.pin_required,i=(0,v.useRef)(null);return{longPress:Ob(e=>{i.current=e,r?n(!0):_d(e)}),popup:(0,C.jsx)(Db,{open:t,onClose:()=>n(!1),dashboardId:e?.dashboard.id??``,required:r,onUnlocked:()=>i.current&&_d(i.current)})}}var Rb=(0,v.memo)(({config:e})=>{let{longPress:t,popup:n}=Lb(),r=(0,C.jsxs)(jb,{children:[(0,C.jsx)(Ib,{config:e}),[...e.status.icons??[]].reverse().map(e=>(0,C.jsx)(Fb,{item:e},e.id))]});return e.clock?.style===`analog`?(0,C.jsxs)(Ab,{children:[n,(0,C.jsx)(yy,{timeProps:t,seconds:e.clock?.seconds}),(0,C.jsxs)(Mb,{children:[r,(0,C.jsx)(xy,{})]})]}):(0,C.jsxs)(Ab,{children:[n,(0,C.jsx)(Sy,{timeProps:t,seconds:e.clock?.seconds}),r]})}),zb=W.button`
  position: relative;
  display: flex;
  flex-direction: column;
  width: 100%;
  min-width: 0;
  border-radius: ${G(1.65)};
  background: ${({theme:e})=>e.bubble.inset};
  overflow: hidden;
  cursor: pointer;
  ${({theme:e})=>Jd(e.bubble.background,e.bubble.hover)}

  /* The header fills the card's top corners -- the same radius, and no
     border between them to show as a ring -- and is a pill underneath. */
  > :first-child {
    border-radius: ${G(1.65)} ${G(1.65)} ${G(1.7)} ${G(1.7)};
  }
`,Bb=W.div`
  height: ${G(3.9)};
  pointer-events: none;
`,Vb=(0,v.memo)(({entityId:e,name:t,state:n,icon:r,color:i,hours:a,onClick:o})=>{let s=yp(e,a),c=Ru();return(0,C.jsxs)(zb,{type:`button`,onClick:o,"aria-label":`${t}: ${n}`,children:[(0,C.jsx)(zf,{name:t,state:n,icon:r,background:c.bubble.header}),(0,C.jsx)(Bb,{children:(0,C.jsx)(mp,{samples:s,hours:a,color:i})})]})}),Hb=W.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(0, 1fr));
  gap: ${G(.6)};
`,Ub=({entityId:e,name:t,icon:n,color:r,hours:i})=>{let a=J(e),o=rd(e),s=Y(),[c,l]=(0,v.useState)(!1),u=(0,v.useCallback)(()=>l(!1),[]),d=Ep(a?.state,a?.attributes.unit_of_measurement,s,o);return(0,C.jsxs)(C.Fragment,{children:[(0,C.jsx)(Vb,{entityId:e,name:t,state:d,icon:n,color:r,hours:i,onClick:()=>l(!0)}),(0,C.jsx)(zp,{open:c,onClose:u,entityId:e,name:t,icon:n,color:r})]})},Wb=(0,v.memo)(({config:e})=>{let t=X(),n=Ru();return!e.temperature&&!e.humidity?null:(0,C.jsxs)(Hb,{children:[e.temperature&&(0,C.jsx)(Ub,{entityId:e.temperature,name:t(`temperature`),icon:`mdi:thermometer`,color:n.colors.temperature,hours:e.hours}),e.humidity&&(0,C.jsx)(Ub,{entityId:e.humidity,name:t(`humidity`),icon:`mdi:water`,color:n.colors.humidity,hours:e.hours})]})}),Gb=W.div`
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: ${G(.6)};

  > :last-child:nth-child(odd) {
    grid-column: 1 / -1;
  }
`,Kb=({entityId:e})=>{let t=J(e),n=ad(),r=X();if(!t)return(0,C.jsx)(zf,{name:e,state:r(`not_found`),icon:`mdi:account-question`,active:!1});let i=t.attributes.entity_picture,a=t.state===`home`?r(`home`):t.state===`not_home`?r(`away`):t.state===`unknown`||t.state===`unavailable`?r(`unavailable`):t.state;return(0,C.jsx)(zf,{name:t.attributes.friendly_name||e,state:a,picture:i?n(i):void 0,icon:`mdi:account`,active:t.state===`home`})},qb=(0,v.memo)(({entities:e})=>e.length?(0,C.jsx)(Gb,{children:e.map(e=>(0,C.jsx)(Kb,{entityId:e},e))}):null),Jb=e=>Symbol.iterator in e,Yb=e=>`entries`in e,Xb=(e,t)=>{let n=e instanceof Map?e:new Map(e.entries()),r=t instanceof Map?t:new Map(t.entries());if(n.size!==r.size)return!1;for(let[e,t]of n)if(!r.has(e)||!Object.is(t,r.get(e)))return!1;return!0},Zb=(e,t)=>{let n=e[Symbol.iterator](),r=t[Symbol.iterator](),i=n.next(),a=r.next();for(;!i.done&&!a.done;){if(!Object.is(i.value,a.value))return!1;i=n.next(),a=r.next()}return!!i.done&&!!a.done};function Qb(e,t){return Object.is(e,t)?!0:typeof e!=`object`||!e||typeof t!=`object`||!t||Object.getPrototypeOf(e)!==Object.getPrototypeOf(t)?!1:Jb(e)&&Jb(t)?Yb(e)&&Yb(t)?Xb(e,t):Zb(e,t):Xb({entries:()=>Object.entries(e)},{entries:()=>Object.entries(t)})}function $b(e){let t=v.useRef(void 0);return n=>{let r=e(n);return Qb(t.current,r)?t.current:t.current=r}}function ex(e,t){if(t===void 0||t===`unavailable`||t===`unknown`)return null;switch(e.split(`.`)[0]){case`binary_sensor`:case`input_boolean`:case`switch`:return t===`on`;case`cover`:return t===`open`||t===`opening`||t===`closing`;case`lock`:return t===`unlocked`||t===`open`||t===`opening`;default:return t===`open`||t===`on`?!0:t===`closed`||t===`off`?!1:null}}function tx(e){let t=0;for(let{entityId:n,state:r}of e)n.startsWith(`sensor.`)&&r!==void 0&&Number.isFinite(Number(r))?t+=Math.max(0,Math.round(Number(r))):ex(n,r)&&(t+=1);return t}var nx=W.div`
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: ${G(.6)};
`;function rx(e,t){switch(e){case`door`:return t?`mdi:door-open`:`mdi:door-closed`;case`garage_door`:return t?`mdi:garage-open`:`mdi:garage`;case`lock`:return t?`mdi:lock-open-variant`:`mdi:lock`;default:return t?`mdi:window-open-variant`:`mdi:window-closed-variant`}}var ix=({entityId:e})=>{let t=J(e),n=X(),r=Y(),i=Ru(),a=ex(e,t?.state),o=t?.attributes.friendly_name||e,s=t?Mp(new Date(t.last_changed),r):``,c=rx(t?.attributes.device_class,!!a);return(0,C.jsx)(zf,{name:o,state:a===null?n(`unavailable`):`${n(a?`open`:`closed`)} · ${s}`,icon:t?.attributes.icon??c,iconColor:a?i.colors.alert:void 0,active:!!a})},ax=W.p`
  margin: 0;
  padding: ${G(1)} 0;
  text-align: center;
  color: ${({theme:e})=>e.text.secondary};
`,ox=({open:e,onClose:t,entities:n,onlyOpen:r=!1})=>{let i=X();return(0,C.jsx)(Mf,{open:e,onClose:t,title:i(`openings`),icon:`mdi:window-open-variant`,width:58,children:(0,C.jsx)(sx,{entities:n,onlyOpen:r})})},sx=({entities:e,onlyOpen:t})=>{let n=X(),r=R($b(t=>e.map(e=>t.entities[e]?.state))),i=t=>{let n=ex(e[t],r[t]);return n?0:n===null?1:2},a=e.map((e,t)=>({id:e,rank:i(t)})).filter(e=>!t||e.rank===0).sort((e,t)=>e.rank-t.rank);return a.length?(0,C.jsx)(nx,{children:a.map(({id:e})=>(0,C.jsx)(ix,{entityId:e},e))}):(0,C.jsx)(ax,{children:n(`none_open`)})},cx=(0,v.memo)(({entities:e,view:t})=>{let n=X(),r=Ru(),[i,a]=(0,v.useState)(!1),o=(0,v.useCallback)(()=>a(!1),[]),s=R($b(t=>e.map(e=>t.entities[e]?.state)));if(!e.length)return null;let c=tx(e.map((e,t)=>({entityId:e,state:s[t]}))),l=!!t?.hide_when_closed&&c===0;return(0,C.jsxs)(C.Fragment,{children:[!l&&(0,C.jsx)(zf,{name:n(`open_openings`),state:String(c),icon:c?`mdi:window-open-variant`:`mdi:window-closed-variant`,iconColor:c?r.colors.alert:void 0,active:c>0,onClick:()=>a(!0)}),(0,C.jsx)(ox,{open:i,onClose:o,entities:e,onlyOpen:!!t?.only_open})]})}),lx={enabled:!1,hide_when_ok:!1,only_critical:!1,threshold:20,hidden:[]},ux=(e,t)=>t?.attributes.device_class===`battery`&&(e.startsWith(`sensor.`)||e.startsWith(`binary_sensor.`));function dx(e,t){return Object.keys(e).filter(n=>ux(n,e[n])&&!t.includes(n)).sort()}function fx(e,t,n){let r=t?.state;if(!t||r===`unavailable`||r===`unknown`)return{level:null,critical:!1,unknown:!0};if(e.startsWith(`binary_sensor.`))return{level:null,critical:r===`on`,unknown:!1};let i=Number(r);return Number.isFinite(i)?{level:i,critical:i<=n,unknown:!1}:{level:null,critical:!1,unknown:!0}}function px(e,t){let n=e=>e.critical?0:e.unknown?2:1;return n(e)-n(t)||(e.level??101)-(t.level??101)}function mx(e){if(e.unknown)return`mdi:battery-unknown`;if(e.level===null)return e.critical?`mdi:battery-alert-variant-outline`:`mdi:battery`;if(e.critical&&e.level<10)return`mdi:battery-alert`;let t=Math.round(e.level/10)*10;return t>=100?`mdi:battery`:t<=0?`mdi:battery-outline`:`mdi:battery-${t}`}var hx=W.div`
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: ${G(.6)};
`,gx=W.p`
  margin: 0;
  padding: ${G(1)} 0;
  text-align: center;
  color: ${({theme:e})=>e.text.secondary};
`,_x=({entityId:e,threshold:t})=>{let n=X(),r=Ru(),i=Y(),a=J(e),o=fx(e,a,t),s=o.unknown?n(`unavailable`):o.level===null?o.critical?n(`battery_low`):n(`battery_fine`):`${Tp(o.level,i,0)} %`;return(0,C.jsx)(zf,{name:a?.attributes.friendly_name??e,state:s,icon:mx(o),iconColor:o.critical?r.colors.alert:void 0,active:o.critical})},vx=({config:e})=>{let t=X(),{threshold:n,hidden:r,only_critical:i}=e,a=R($b(e=>dx(e.entities,r))),o=R($b(e=>a.map(t=>e.entities[t]?.state))),s=a.map((e,t)=>({id:e,reading:fx(e,{state:o[t]??`unknown`,attributes:{}},n)})).filter(e=>!i||e.reading.critical).sort((e,t)=>px(e.reading,t.reading));return s.length?(0,C.jsx)(hx,{children:s.map(e=>(0,C.jsx)(_x,{entityId:e.id,threshold:n},e.id))}):(0,C.jsx)(gx,{children:t(i?`batteries_none_critical`:`batteries_none`)})},yx=({open:e,onClose:t,config:n})=>{let r=X();return(0,C.jsx)(Mf,{open:e,onClose:t,title:r(`batteries`),icon:`mdi:battery-high`,width:58,children:(0,C.jsx)(vx,{config:n})})},bx=(0,v.memo)(({config:e})=>{let t=X(),n=Ru(),[r,i]=(0,v.useState)(!1),a=(0,v.useCallback)(()=>i(!1),[]),o=(0,v.useMemo)(()=>e?.hidden??[],[e?.hidden]),s=e?.threshold??20,c=R(t=>e?.enabled?dx(t.entities,o).filter(e=>fx(e,t.entities[e],s).critical).length:0);if(!e?.enabled)return null;let l=!e.hide_when_ok||c>0;return(0,C.jsxs)(C.Fragment,{children:[l&&(0,C.jsx)(zf,{name:t(`batteries`),state:c?t(`batteries_critical`,{count:c}):t(`batteries_ok`),icon:c?`mdi:battery-alert-variant-outline`:`mdi:battery-high`,iconColor:c?n.colors.alert:void 0,active:c>0,onClick:()=>i(!0)}),(0,C.jsx)(yx,{open:r,onClose:a,config:e})]})});function xx(e){let t=e.map_url.trim();if(!t)return null;let n=t.match(/src="([^"]+)"/)?.[1]??t;try{let e=new URL(n);if(e.protocol===`https:`&&e.hostname===`www.google.com`&&e.pathname.startsWith(`/maps/embed`))return e.toString()}catch{}return null}function Sx(e,t,n){let r=Number(e?.attributes.latitude),i=Number(e?.attributes.longitude);return e&&Number.isFinite(r)&&Number.isFinite(i)?`${r},${i}`:t?.trim()?t.trim():n}var Cx=null,wx=!1,Tx=new Set,Ex=`__betterWallDashboardMapsReady`;function Dx(e){return wx&&e(),Tx.add(e),()=>Tx.delete(e)}function Ox(e,t){return typeof google<`u`&&google.maps?.Map?Promise.resolve(google.maps):Cx||(Cx=new Promise((n,r)=>{let i=new URLSearchParams({key:e,v:`weekly`,libraries:`geometry`,language:t,callback:Ex,loading:`async`});window[Ex]=()=>n(google.maps),window.gm_authFailure=()=>{wx=!0,Tx.forEach(e=>e()),r(Error(`auth`))};let a=document.createElement(`script`);a.src=`https://maps.googleapis.com/maps/api/js?${i}`,a.async=!0,a.onerror=()=>r(Error(`load`)),document.head.append(a)}).catch(e=>{throw Cx=null,e}),Cx)}var kx=/^\s*(-?\d+(?:\.\d+)?)\s*,\s*(-?\d+(?:\.\d+)?)\s*$/;function Ax(e){let t=e.match(kx);return t?{location:{latLng:{latitude:Number(t[1]),longitude:Number(t[2])}}}:{address:e}}var jx=`https://routes.googleapis.com/directions/v2:computeRoutes`,Mx=`routes.description,routes.duration,routes.staticDuration,routes.distanceMeters,routes.polyline.encodedPolyline`;function Nx(e,t,n){let r={origin:Ax(e),destination:Ax(t),travelMode:`DRIVE`,routingPreference:`TRAFFIC_AWARE`,computeAlternativeRoutes:!0,languageCode:n,units:`METRIC`};return[r,{...r,routeModifiers:{avoidHighways:!0}}]}function Px(e,t=3){let n=new Set;return e.flat().sort((e,t)=>e.duration-t.duration).filter(e=>{let t=e.description||e.polyline;return!n.has(t)&&(n.add(t),!0)}).slice(0,t)}function Fx(e){let t=typeof e==`string`?parseFloat(e):Number(e);return Number.isFinite(t)?t:0}function Ix(e){let t=e?.routes;return Array.isArray(t)?t.map(e=>{let t=e;return{description:typeof t.description==`string`?t.description:``,duration:Fx(t.duration),staticDuration:Fx(t.staticDuration),distanceMeters:Number(t.distanceMeters)||0,polyline:(t.polyline?.encodedPolyline??``).trim()}}).filter(e=>e.polyline&&e.duration>0).sort((e,t)=>e.duration-t.duration):[]}function Lx(e){let t=Math.round((e.duration-e.staticDuration)/60);return t>=3?t:0}var Rx=[{elementType:`geometry`,stylers:[{color:`#1d2126`}]},{elementType:`labels.text.fill`,stylers:[{color:`#8a939c`}]},{elementType:`labels.text.stroke`,stylers:[{color:`#1d2126`}]},{featureType:`administrative`,elementType:`geometry`,stylers:[{visibility:`off`}]},{featureType:`poi`,stylers:[{visibility:`off`}]},{featureType:`transit`,stylers:[{visibility:`off`}]},{featureType:`road`,elementType:`labels.icon`,stylers:[{visibility:`off`}]},{featureType:`road`,elementType:`geometry`,stylers:[{color:`#2c333b`}]},{featureType:`road.highway`,elementType:`geometry`,stylers:[{color:`#3a434d`}]},{featureType:`water`,elementType:`geometry`,stylers:[{color:`#121820`}]},{featureType:`landscape.natural`,elementType:`geometry`,stylers:[{color:`#1a1f23`}]}],zx=W.div`
  width: 100%;
  aspect-ratio: 16 / 9;
  border-radius: ${G(1.2)};
  overflow: hidden;
  background: #1d2126;

  /* Nothing of Google's on top of the map: not the logo, not the
     attribution and terms bar. The owner's decision for a private wall
     tablet -- Google's terms ask for both. */
  .gm-style-cc,
  .gm-style a[href*='maps.google.com'],
  .gm-style a[href*='google.com/maps'] {
    display: none !important;
  }

  /* The one part that gives way on a short screen, so the routes and the
     graph below always fit without the popup scrolling. */
  && {
    flex: 0 1 auto;
    min-height: ${G(10)};
  }
`,Bx=W.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(${G(13)}, 1fr));
  gap: ${G(.6)};

  button {
    display: flex;
    flex-direction: column;
    gap: ${G(.15)};
    padding: ${G(.7)} ${G(1)};
    border-radius: ${G(1)};
    background: ${({theme:e})=>e.bubble.background};
    border: 2px solid transparent;
    text-align: left;
  }

  button[aria-pressed='true'] {
    border-color: ${({theme:e})=>e.colors.temperature};
  }

  .time {
    font-size: ${G(1.5)};
    font-weight: 600;
  }

  .via {
    font-size: ${G(.95)};
    color: ${({theme:e})=>e.text.secondary};
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  .delay {
    font-size: ${G(.9)};
    color: ${({theme:e})=>e.colors.warm};
  }
`,Vx=W.p`
  color: ${({theme:e})=>e.text.secondary};
  font-size: ${G(1)};
  padding: ${G(1)} 0;
`,Hx=`#03a9f4`,Ux=`#7d8892`,Wx=({apiKey:e,origin:t,destination:n})=>{let r=X(),i=Y(),a=(0,v.useRef)(null),o=(0,v.useRef)(null),s=(0,v.useRef)([]),[c,l]=(0,v.useState)([]),[u,d]=(0,v.useState)(0),[f,p]=(0,v.useState)(!1),[m,h]=(0,v.useState)(!1),[g,_]=(0,v.useState)(!1);return(0,v.useEffect)(()=>Dx(()=>_(!0)),[]),(0,v.useEffect)(()=>{let t=!1;return Ox(e,i).then(e=>{t||!a.current||o.current||(o.current=new e.Map(a.current,{disableDefaultUI:!0,clickableIcons:!1,keyboardShortcuts:!1,gestureHandling:`greedy`,backgroundColor:`#1d2126`,styles:Rx,center:{lat:0,lng:0},zoom:2}),h(!0))}).catch(()=>!t&&p(!0)),()=>{t=!0}},[e,i]),(0,v.useEffect)(()=>{let r=!1,a=t=>fetch(jx,{method:`POST`,headers:{"Content-Type":`application/json`,"X-Goog-Api-Key":e,"X-Goog-FieldMask":Mx},body:JSON.stringify(t)}).then(e=>e.json()).then(Ix),o=()=>Promise.allSettled(Nx(t,n,i).map(a)).then(e=>{if(r)return;let t=Px(e.map(e=>e.status===`fulfilled`?e.value:[]));p(t.length===0),l(t)});o();let s=window.setInterval(o,3e5);return()=>{r=!0,window.clearInterval(s)}},[e,t,n,i]),(0,v.useEffect)(()=>{let e=o.current;if(!e||!c.length||typeof google>`u`)return;s.current.forEach(e=>e.setMap(null));let t=new google.maps.LatLngBounds,n=e=>({offset:e,icon:{path:google.maps.SymbolPath.CIRCLE,scale:6,fillColor:Hx,fillOpacity:1,strokeColor:`#ffffff`,strokeWeight:2}});s.current=c.map((r,i)=>{let a=google.maps.geometry.encoding.decodePath(r.polyline);a.forEach(e=>t.extend(e));let o=i===u;return new google.maps.Polyline({map:e,path:a,strokeColor:o?Hx:Ux,strokeOpacity:o?1:.7,strokeWeight:o?6:5,zIndex:o?2:1,clickable:!1,icons:o?[n(`0%`),n(`100%`)]:[]})}),e.fitBounds(t,32)},[c,u,m]),f&&!c.length?(0,C.jsx)(Vx,{children:r(`map_key_error`)}):(0,C.jsxs)(C.Fragment,{children:[(0,C.jsx)(zx,{ref:a,style:g?{display:`none`}:void 0}),g&&(0,C.jsx)(Vx,{children:r(`map_blocked`)}),c.length>0&&(0,C.jsx)(Bx,{children:c.map((e,t)=>{let n=Lx(e);return(0,C.jsxs)(`button`,{type:`button`,"aria-pressed":t===u,onClick:()=>d(t),children:[(0,C.jsx)(`span`,{className:`time`,children:Dp(e.duration/60,i)}),e.description&&(0,C.jsxs)(`span`,{className:`via`,children:[r(`via`),` `,e.description]}),n>0&&(0,C.jsx)(`span`,{className:`delay`,children:r(`traffic_delay`,{minutes:n})})]},e.polyline)})})]})},Gx=W.div`
  width: 100%;
  aspect-ratio: 16 / 9;
  border-radius: ${G(1.2)};
  overflow: hidden;
  background: ${({theme:e})=>e.bubble.inset};

  /* The one part that gives way on a short screen, so the routes and the
     graph below always fit without the popup scrolling. */
  && {
    flex: 0 1 auto;
    min-height: ${G(10)};
  }

  iframe {
    width: 100%;
    height: 100%;
    border: 0;
    display: block;
  }
`,Kx=W.div`
  height: ${G(6)};

  svg {
    border-radius: ${G(1.2)};
  }
`,qx=W.p`
  color: ${({theme:e})=>e.text.secondary};
  font-size: ${G(1.08)};
  padding: ${G(2)};
  text-align: center;
`,Jx=({open:e,onClose:t,config:n})=>{let r=X(),i=Y(),a=J(n.entity||void 0),o=Op(a?.state,a?.attributes.unit_of_measurement);return(0,C.jsx)(Mf,{open:e,onClose:t,title:n.name||r(`travel_time`),subtitle:o===null?void 0:Dp(o,i),icon:`mdi:car-clock`,width:72,fixedBody:!0,children:(0,C.jsx)(Yx,{config:n})})},Yx=({config:e})=>{let t=X(),n=Y(),r=Ru(),i=J(e.entity||void 0),a=yp(e.entity||void 0,24),o=J(e.work_zone||void 0),s=i?.attributes??{},c=s.origin,l=Sx(o,e.work_address,s.destination),u=!!(e.maps_api_key&&c&&l),d=u?null:xx(e);return(0,C.jsxs)(C.Fragment,{children:[u?(0,C.jsx)(Wx,{apiKey:e.maps_api_key,origin:c,destination:l}):(0,C.jsx)(Gx,{children:d?(0,C.jsx)(`iframe`,{src:d,title:t(`route`),loading:`lazy`,referrerPolicy:`no-referrer-when-downgrade`,allowFullScreen:!0}):(0,C.jsx)(qx,{children:t(`no_map`)})}),(0,C.jsx)(Kx,{children:(0,C.jsx)(mp,{samples:a,hours:24,pointsPerHour:2,lineWidth:3,color:r.colors.accent,labels:e=>Dp(e,n),tooltip:e=>`${Dp(e.v,n)} · ${kp(new Date(e.t),n)}`})})]})},Xx=(0,v.memo)(({config:e})=>{let t=X(),n=Y(),r=J(e.entity||void 0),[i,a]=(0,v.useState)(!1),o=(0,v.useCallback)(()=>a(!1),[]);if(!e.entity)return null;let s=Op(r?.state,r?.attributes.unit_of_measurement);return(0,C.jsxs)(C.Fragment,{children:[(0,C.jsx)(zf,{name:e.name||t(`travel_time`),state:s===null?t(`unavailable`):Dp(s,n),icon:`mdi:car-clock`,active:!1,onClick:()=>a(!0)}),(0,C.jsx)(Jx,{open:i,onClose:o,config:e})]})}),Zx=e=>{let[t,n]=e.split(`:`).map(Number);return Number.isFinite(t)&&Number.isFinite(n)?t*60+n:void 0};function Qx(e,t){switch(e.type){case`state`:{if(!e.entity||!e.state)return!0;let n=t.state(e.entity);return n===void 0||n===e.state!==e.not}case`numeric`:{if(!e.entity||e.above===null&&e.below===null)return!0;let n=Number(t.state(e.entity));return Number.isFinite(n)?(e.above===null||n>e.above)&&(e.below===null||n<e.below):!1}case`time`:{let n=Zx(e.after),r=Zx(e.before);if(n===void 0&&r===void 0)return!0;let i=t.minutes;return n!==void 0&&r!==void 0?n<=r?i>=n&&i<r:i>=n||i<r:n===void 0?i<r:i>=n}case`sun`:return t.day===void 0||t.day===(e.when===`day`);case`home`:return t.anyoneHome===void 0||t.anyoneHome===(e.who===`anyone`)}}function $x(e,t){return(e??[]).every(e=>Qx(e,t))}function eS(e){let t=_p(6e4),n=R(n=>{let r=n.entities,i=Object.keys(r).filter(e=>e.startsWith(`person.`)),a=new Date(t),o={state:e=>r[e]?.state,minutes:a.getHours()*60+a.getMinutes(),day:r[`sun.sun`]?r[`sun.sun`].state===`above_horizon`:void 0,anyoneHome:i.length?i.some(e=>r[e].state===`home`):void 0};return e.map(e=>$x(e.rules,o)?`1`:`0`).join(``)});return e.filter((e,t)=>n[t]===`1`)}var tS=W.div`
  display: grid;
  grid-template-columns: repeat(${({$columns:e})=>e}, minmax(0, 1fr));
  gap: ${G(.6)};
`,nS=new Set([`on`,`open`,`unlocked`,`playing`,`home`,`heat`,`cool`,`auto`]),rS=({action:e})=>{let t=J(e.entity),n=Z(),r=X(),i=t?nS.has(t.state):!1,a=t?t.state===`on`?r(`on`):t.state===`off`?r(`off`):t.state:r(`not_found`);return(0,C.jsx)(zf,{name:e.name||t?.attributes.friendly_name||e.entity,state:a,icon:e.icon||t?.attributes.icon||od(e.entity),active:i,lit:i,onClick:t?()=>{let[t,r]=cd(e.entity);n(t,r,void 0,{entity_id:e.entity})}:void 0})},iS=(0,v.memo)(({actions:e})=>{let t=X(),n=eS(e.filter(e=>e.entity));return n.length?(0,C.jsxs)(`div`,{children:[(0,C.jsx)(ly,{children:t(`quick_actions`)}),(0,C.jsx)(tS,{$columns:n.length>3?2:1,children:n.map(e=>(0,C.jsx)(rS,{action:e},e.id))})]}):null}),aS={pages:10,quickActions:6,statusIcons:6,buttons:5,sectionStatus:2,system:8,systemButtons:12,sectionCells:12,tiles:64,calendarDays:14};function oS(e,t,n=new Date){let r=Np(n);return Array.from({length:t},(t,n)=>{let i=Pp(r,n),a=Pp(i,1);return{day:i,events:e.filter(e=>e.start<a&&e.end>i)}})}var sS=864e5,cS=[`#03a9f4`,`#ff9f43`,`#4cd964`,`#ff5e8a`,`#b388ff`,`#26c6da`,`#ffd54f`];function lS(e){return cS[(e%cS.length+cS.length)%cS.length]}function uS(e,t=Date.now()){let n=e.start.getTime(),r=e.end.getTime();return r<=n||t<n||t>=r?null:(t-n)/(r-n)}function dS(e,t){let n=Np(e.start).getTime(),r=Np(new Date(e.end.getTime()-1)).getTime(),i=Math.round((r-n)/sS)+1;return i<=1?null:{index:Math.round((Np(t).getTime()-n)/sS)+1,count:i}}function fS(e){return(e??``).replace(/<br\s*\/?>/gi,`
`).replace(/<[^>]+>/g,` `).replace(/&nbsp;/g,` `).replace(/&amp;/g,`&`).replace(/[ \t]+/g,` `).replace(/ *\n */g,`
`).trim()}function pS(e,t,n,r=`long`,i=new Date){let a=Np(i).getTime(),o=new Intl.DateTimeFormat(t,{weekday:r,day:`numeric`,month:r}).format(e);return Np(e).getTime()===a?{label:n.today,date:o}:Np(e).getTime()===Pp(new Date(a),1).getTime()?{label:n.tomorrow,date:o}:{label:o,date:``}}var mS=W.div`
  display: flex;
  flex-direction: column;

  & + & {
    margin-top: ${G(.7)};
  }

  h4 {
    display: flex;
    align-items: baseline;
    gap: ${G(.5)};
    margin: 0 0 ${G(.2)} ${G(.3)};
    font-size: ${G(.95)};
    font-weight: 600;
  }

  h4 span {
    font-weight: 400;
    color: ${({theme:e})=>e.text.secondary};
  }
`,hS=W.div`
  position: relative;
  border-radius: ${G(1.7)};
  overflow: hidden;

  .progress {
    position: absolute;
    left: ${G(3.3)};
    right: ${G(1)};
    bottom: ${G(.2)};
    height: ${G(.2)};
    border-radius: ${G(.2)};
    background: rgba(255, 255, 255, 0.08);
    overflow: hidden;
  }

  .progress span {
    display: block;
    height: 100%;
  }
`,gS=(0,v.memo)(({day:e,events:t,calendars:n,now:r})=>{let i=Y(),a=X(),o=pS(e,i,{today:a(`today`),tomorrow:a(`tomorrow`)},`short`,new Date(r));return(0,C.jsxs)(mS,{children:[(0,C.jsxs)(`h4`,{children:[o.label,o.date&&(0,C.jsx)(`span`,{children:o.date})]}),t.length===0&&(0,C.jsx)(zf,{name:a(`no_events`),icon:`mdi:calendar-check-outline`,active:!1,background:`transparent`}),t.map(t=>{let o=lS(n.indexOf(t.calendar)),s=t.allDay?null:uS(t,r),c=dS(t,e),l=c?a(`event_day`,c):t.allDay?a(`all_day`):`${kp(t.start,i)} – ${kp(t.end,i)}`;return(0,C.jsxs)(hS,{children:[(0,C.jsx)(zf,{name:t.summary,state:s===null?l:`${a(`happening_now`)} · ${l}`,icon:t.allDay||c?`mdi:calendar-star`:`mdi:calendar-clock`,iconColor:o,background:`transparent`}),s!==null&&(0,C.jsx)(`span`,{className:`progress`,children:(0,C.jsx)(`span`,{style:{width:`${s*100}%`,background:o}})})]},`${t.calendar}-${t.start.getTime()}-${t.summary}`)})]})}),_S=[];function vS(e){if(/^\d{4}-\d{2}-\d{2}$/.test(e)){let[t,n,r]=e.split(`-`).map(Number);return{date:new Date(t,n-1,r),allDay:!0}}return{date:new Date(e),allDay:!1}}function yS(e,t){let n=Z(),[r,i]=(0,v.useState)(null),[a,o]=(0,v.useState)(0),s=R(t=>e.map(e=>`${e}:${t.entities[e]?.state}:${t.entities[e]?.last_changed}`).join(`|`)),c=e.join(`,`);return(0,v.useEffect)(()=>{let e=window.setInterval(()=>o(e=>e+1),9e5);return()=>window.clearInterval(e)},[]),(0,v.useEffect)(()=>{if(!c)return;let e=!1,r=Np(new Date),a=Pp(r,t);return n(`calendar`,`get_events`,{start_date_time:r.toISOString(),end_date_time:a.toISOString()},{entity_id:c.split(`,`)},!0).then(t=>{if(e||!t)return;let n=t.response??{},r=[];for(let[e,t]of Object.entries(n))for(let n of t.events??[]){let t=vS(n.start),i=vS(n.end);r.push({calendar:e,summary:n.summary,start:t.date,end:i.date,allDay:t.allDay,location:n.location,description:n.description})}r.sort((e,t)=>e.start.getTime()-t.start.getTime()||Number(t.allDay)-Number(e.allDay)),i(r)}).catch(()=>{e||i([])}),()=>{e=!0}},[n,c,t,s,a]),c?r:_S}function bS(e,t){let n=yS(e,t);return(0,v.useMemo)(()=>n?oS(n,t):null,[n,t])}var xS=W.div`
  display: flex;
  flex-wrap: wrap;
  gap: ${G(.5)};

  button {
    display: inline-flex;
    align-items: center;
    gap: ${G(.5)};
    padding: ${G(.45)} ${G(.9)};
    border-radius: ${G(2)};
    background: ${({theme:e})=>e.bubble.background};
    font-size: ${G(1)};
  }

  button[aria-pressed='false'] {
    opacity: 0.45;
  }

  .dot {
    width: ${G(.7)};
    height: ${G(.7)};
    border-radius: 50%;
  }
`,SS=W.section`
  display: flex;
  flex-direction: column;
  gap: ${G(.5)};

  h3 {
    display: flex;
    align-items: baseline;
    gap: ${G(.6)};
    margin: ${G(.4)} 0 0 ${G(.2)};
    font-size: ${G(1.2)};
    font-weight: 600;
  }

  h3 span {
    font-size: ${G(1)};
    font-weight: 400;
    color: ${({theme:e})=>e.text.secondary};
  }
`,CS=W.article`
  display: grid;
  grid-template-columns: ${G(.35)} ${G(5.2)} minmax(0, 1fr);
  column-gap: ${G(.9)};
  padding: ${G(.7)} ${G(1)} ${G(.7)} ${G(.7)};
  border-radius: ${G(1)};
  background: ${({theme:e})=>e.bubble.background};
  opacity: ${({$past:e})=>e?.5:1};

  .bar {
    border-radius: ${G(.2)};
    background: ${({$color:e})=>e};
  }

  .time {
    display: flex;
    flex-direction: column;
    justify-content: center;
    line-height: 1.2;
  }

  .start {
    font-size: ${G(1.2)};
    font-weight: 600;
  }

  .end,
  .all-day {
    font-size: ${G(.9)};
    color: ${({theme:e})=>e.text.secondary};
  }

  .body {
    display: flex;
    flex-direction: column;
    gap: ${G(.25)};
    min-width: 0;
  }

  .title {
    display: flex;
    align-items: center;
    gap: ${G(.6)};
  }

  .summary {
    flex: 1;
    min-width: 0;
    font-size: ${G(1.15)};
    font-weight: 600;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  .badge {
    flex: none;
    padding: ${G(.1)} ${G(.6)};
    border-radius: ${G(1)};
    font-size: ${G(.85)};
    font-weight: 600;
    background: ${({$color:e})=>`${e}33`};
    color: ${({$color:e})=>e};
  }

  .meta {
    display: flex;
    flex-wrap: wrap;
    gap: ${G(.2)} ${G(1)};
    font-size: ${G(.95)};
    color: ${({theme:e})=>e.text.secondary};
  }

  .meta span {
    display: inline-flex;
    align-items: center;
    gap: ${G(.3)};
    min-width: 0;
  }

  .description {
    font-size: ${G(.95)};
    color: ${({theme:e})=>e.text.secondary};
    white-space: pre-line;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
  }

  .progress {
    height: ${G(.3)};
    margin-top: ${G(.3)};
    border-radius: ${G(.3)};
    background: rgba(255, 255, 255, 0.08);
    overflow: hidden;
  }

  .progress div {
    height: 100%;
    background: ${({$color:e})=>e};
  }
`,wS=W.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${G(.6)};
  padding: ${G(2)} 0;
  font-size: ${G(1.15)};
  color: ${({theme:e})=>e.text.secondary};

  .icon {
    font-size: ${G(3)};
  }
`,TS=({entityId:e,color:t,shown:n,onToggle:r})=>{let i=J(e);return(0,C.jsxs)(`button`,{type:`button`,"aria-pressed":n,onClick:r,children:[(0,C.jsx)(`span`,{className:`dot`,style:{background:t}}),i?.attributes.friendly_name??e]})},ES=({event:e,day:t,color:n,now:r,next:i})=>{let a=X(),o=Y(),s=uS(e,r),c=dS(e,t),l=fS(e.description),u=(e.end.getTime()-e.start.getTime())/6e4;return(0,C.jsxs)(CS,{$color:n,$past:e.end.getTime()<=r,children:[(0,C.jsx)(`span`,{className:`bar`}),(0,C.jsx)(`div`,{className:`time`,children:e.allDay||c?(0,C.jsx)(`span`,{className:`all-day`,children:c?a(`event_day`,c):a(`all_day`)}):(0,C.jsxs)(C.Fragment,{children:[(0,C.jsx)(`span`,{className:`start`,children:kp(e.start,o)}),(0,C.jsx)(`span`,{className:`end`,children:kp(e.end,o)})]})}),(0,C.jsxs)(`div`,{className:`body`,children:[(0,C.jsxs)(`div`,{className:`title`,children:[(0,C.jsx)(`span`,{className:`summary`,children:e.summary}),s!==null&&!e.allDay&&(0,C.jsx)(`span`,{className:`badge`,children:a(`happening_now`)}),i&&(0,C.jsx)(`span`,{className:`badge`,children:Mp(e.start,o,r)})]}),(0,C.jsxs)(`div`,{className:`meta`,children:[e.location&&(0,C.jsxs)(`span`,{children:[(0,C.jsx)(Q,{icon:`mdi:map-marker-outline`}),e.location]}),!e.allDay&&!c&&(0,C.jsxs)(`span`,{children:[(0,C.jsx)(Q,{icon:`mdi:timer-outline`}),Dp(u,o)]})]}),l&&(0,C.jsx)(`div`,{className:`description`,children:l}),s!==null&&!e.allDay&&(0,C.jsx)(`div`,{className:`progress`,children:(0,C.jsx)(`div`,{style:{width:`${s*100}%`}})})]})]})},DS=({entities:e})=>{let t=X(),n=Y(),r=_p(6e4),i=bS(e,14),[a,o]=(0,v.useState)([]),s=t=>lS(e.indexOf(t)),c=e=>o(t=>t.includes(e)?t.filter(t=>t!==e):[...t,e]),l=(i??[]).map(({day:e,events:t})=>({day:e,events:t.filter(e=>!a.includes(e.calendar))})).filter(({events:e})=>e.length),u=Np(new Date(r)).getTime(),d=l.find(({day:e})=>e.getTime()===u)?.events.find(e=>!e.allDay&&e.start.getTime()>r);return(0,C.jsxs)(C.Fragment,{children:[e.length>1&&(0,C.jsx)(xS,{children:e.map(e=>(0,C.jsx)(TS,{entityId:e,color:s(e),shown:!a.includes(e),onToggle:()=>c(e)},e))}),i&&!l.length&&(0,C.jsxs)(wS,{children:[(0,C.jsx)(Q,{className:`icon`,icon:`mdi:calendar-check-outline`}),t(`no_events`)]}),l.map(({day:e,events:i})=>{let a=pS(e,n,{today:t(`today`),tomorrow:t(`tomorrow`)},`long`,new Date(r));return(0,C.jsxs)(SS,{children:[(0,C.jsxs)(`h3`,{children:[a.label,a.date&&(0,C.jsx)(`span`,{children:a.date})]}),i.map(t=>(0,C.jsx)(ES,{event:t,day:e,color:s(t.calendar),now:r,next:t===d},`${t.calendar}-${t.start.getTime()}-${t.summary}`))]},e.getTime())})]})},OS=({open:e,onClose:t,entities:n})=>{let r=X();return(0,C.jsx)(Mf,{open:e,onClose:t,title:r(`calendar`),icon:`mdi:calendar`,width:58,children:(0,C.jsx)(DS,{entities:n})})},kS=new WeakSet;function AS(e,t=!0,n=`y`){(0,v.useEffect)(()=>{let t=e.current;if(!t)return;let r=e=>n===`x`?e.clientX:e.clientY,i=()=>n===`x`?t.scrollLeft:t.scrollTop,a=()=>n===`x`?t.scrollWidth-t.clientWidth:t.scrollHeight-t.clientHeight,o=null,s=e=>{e.stopPropagation(),e.preventDefault()},c=e=>{e.pointerType!==`mouse`||e.button!==0||kS.has(e)||Vd(e,t)||a()<=0||(kS.add(e),o={id:e.pointerId,from:r(e),start:i(),moved:!1,last:r(e),lastT:e.timeStamp,velocity:0})},l=e=>{if(!o||e.pointerId!==o.id)return;if(e.buttons===0){u(e);return}let i=r(e)-o.from;if(!o.moved){if(Math.abs(i)<6)return;o.moved=!0,t.setPointerCapture(o.id),t.style.cursor=`grabbing`}let a=e.timeStamp-o.lastT;a>0&&(o.velocity=(r(e)-o.last)/a),o.last=r(e),o.lastT=e.timeStamp,n===`x`?t.scrollLeft=o.start-i:t.scrollTop=o.start-i},u=e=>{if(!o||e.pointerId!==o.id)return;let r=o;if(o=null,!r.moved)return;t.style.cursor=``,t.addEventListener(`click`,s,{capture:!0,once:!0}),window.setTimeout(()=>t.removeEventListener(`click`,s,{capture:!0}),0);let i=-r.velocity*250;t.scrollBy(n===`x`?{left:i,behavior:`smooth`}:{top:i,behavior:`smooth`})},d=e=>e.preventDefault();return t.addEventListener(`pointerdown`,c),t.addEventListener(`pointermove`,l),t.addEventListener(`pointerup`,u),t.addEventListener(`pointercancel`,u),t.addEventListener(`dragstart`,d),()=>{t.removeEventListener(`pointerdown`,c),t.removeEventListener(`pointermove`,l),t.removeEventListener(`pointerup`,u),t.removeEventListener(`pointercancel`,u),t.removeEventListener(`dragstart`,d)}},[e,t,n])}var jS=W.div`
  /* Scrolls when the days do not fit: how many do depends on the tablet. The
     bottom edge fades so a cut-off day reads as "more below", and the extra
     padding lets the last one scroll clear of the fade. A tap opens the
     calendar; a scroll gesture does not, because it never becomes a click. */
  flex: 1 1 0;
  min-height: 0;
  box-sizing: border-box;
  width: 100%;
  overflow-y: auto;
  overscroll-behavior: contain;
  scrollbar-width: none;
  padding: ${G(.3)} 0 ${G(1.4)};
  cursor: pointer;
  mask-image: linear-gradient(to bottom, black calc(100% - ${G(1.4)}), transparent);
  -webkit-mask-image: linear-gradient(to bottom, black calc(100% - ${G(1.4)}), transparent);

  &::-webkit-scrollbar {
    display: none;
  }
`,MS=(0,v.memo)(({config:e})=>{let t=X(),[n,r]=(0,v.useState)(!1),i=(0,v.useCallback)(()=>r(!1),[]),a=(0,v.useRef)(null),o=_p(6e4),s=bS(e.entities,aS.calendarDays),c=e.entities.length>0;AS(a,c);let l=(0,v.useMemo)(()=>{let t=s?.map(({day:e,events:t})=>({day:e,events:t.filter(e=>e.end.getTime()>o)}));if(!t)return t;let[n,...r]=t;return[n,...r.filter(({events:e})=>e.length).slice(0,Math.max(0,e.days-+!!n.events.length))]},[s,o,e.days]);return c?(0,C.jsxs)(C.Fragment,{children:[(0,C.jsx)(jS,{ref:a,role:`button`,tabIndex:0,onClick:()=>r(!0),onKeyDown:e=>(e.key===`Enter`||e.key===` `)&&r(!0),"aria-label":t(`calendar`),children:l?.map(({day:t,events:n})=>(0,C.jsx)(gS,{day:t,events:n,calendars:e.entities,now:o},t.getTime()))}),(0,C.jsx)(OS,{open:n,onClose:i,entities:e.entities})]}):null}),NS=Object.assign({"../assets/weather_icons/clear-night.svg":`data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%2064%2064'%3e%3cg%3e%3cpath%20fill='none'%20stroke='%2372b9d5'%20stroke-linecap='round'%20stroke-linejoin='round'%20stroke-width='3'%20d='M46.66%2036.2a16.66%2016.66%200%2001-16.78-16.55%2016.29%2016.29%200%2001.55-4.15A16.56%2016.56%200%201048.5%2036.1c-.61.06-1.22.1-1.84.1z'/%3e%3canimateTransform%20attributeName='transform'%20dur='10s'%20repeatCount='indefinite'%20type='rotate'%20values='-5%2032%2032;15%2032%2032;-5%2032%2032'/%3e%3c/g%3e%3c/svg%3e`,"../assets/weather_icons/cloudy.svg":`data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%2064%2064'%3e%3cg%3e%3cpath%20fill='none'%20stroke='%23e5e7eb'%20stroke-linejoin='round'%20stroke-width='3'%20d='M46.5%2031.5h-.32a10.49%2010.49%200%2000-19.11-8%207%207%200%2000-10.57%206%207.21%207.21%200%2000.1%201.14A7.5%207.5%200%200018%2045.5a4.19%204.19%200%2000.5%200v0h28a7%207%200%20000-14z'/%3e%3canimateTransform%20attributeName='transform'%20dur='7s'%20repeatCount='indefinite'%20type='translate'%20values='-3%200;%203%200;%20-3%200'/%3e%3c/g%3e%3c/svg%3e`,"../assets/weather_icons/exceptional.svg":`data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%2064%2064'%3e%3cg%3e%3cpath%20fill='none'%20stroke='%23f59e0b'%20stroke-linecap='round'%20stroke-miterlimit='10'%20stroke-width='3'%20d='M42.5%2032A10.5%2010.5%200%201132%2021.5%2010.5%2010.5%200%200142.5%2032zM32%2015.71V9.5m0%2045v-6.21m11.52-27.81l4.39-4.39M16.09%2047.91l4.39-4.39m0-23l-4.39-4.39m31.82%2031.78l-4.39-4.39M15.71%2032H9.5m45%200h-6.21'/%3e%3canimateTransform%20attributeName='transform'%20dur='45s'%20from='0%2032%2032'%20repeatCount='indefinite'%20to='360%2032%2032'%20type='rotate'/%3e%3c/g%3e%3c/svg%3e`,"../assets/weather_icons/fog.svg":`data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%2064%2064'%3e%3cpath%20fill='none'%20stroke='%23e5e7eb'%20stroke-linejoin='round'%20stroke-width='3'%20d='M46.5%2031.5h-.32a10.49%2010.49%200%2000-19.11-8%207%207%200%2000-10.57%206%207.21%207.21%200%2000.1%201.14A7.5%207.5%200%200018%2045.5a4.19%204.19%200%2000.5%200v0h28a7%207%200%20000-14z'/%3e%3cg%3e%3cpath%20fill='none'%20stroke='%23d1d5db'%20stroke-linecap='round'%20stroke-miterlimit='10'%20stroke-width='3'%20d='M17%2058h30'/%3e%3canimateTransform%20attributeName='transform'%20begin='0s'%20dur='5s'%20repeatCount='indefinite'%20type='translate'%20values='-4%200;%204%200;%20-4%200'/%3e%3c/g%3e%3cg%3e%3cpath%20fill='none'%20stroke='%23d1d5db'%20stroke-linecap='round'%20stroke-miterlimit='10'%20stroke-width='3'%20d='M17%2052h30'/%3e%3canimateTransform%20attributeName='transform'%20begin='-4s'%20dur='5s'%20repeatCount='indefinite'%20type='translate'%20values='-4%200;%204%200;%20-4%200'/%3e%3c/g%3e%3c/svg%3e`,"../assets/weather_icons/hail.svg":`data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%2064%2064'%3e%3cpath%20fill='none'%20stroke='%23e5e7eb'%20stroke-linecap='round'%20stroke-linejoin='round'%20stroke-width='3'%20d='M43.67%2045.5h2.83a7%207%200%20000-14h-.32a10.49%2010.49%200%2000-19.11-8%207%207%200%2000-10.57%206%207.21%207.21%200%2000.1%201.14A7.5%207.5%200%200018%2045.5a4.19%204.19%200%2000.5%200v0'/%3e%3cg%3e%3ccircle%20cx='24'%20cy='45'%20r='1.5'%20fill='%2372b8d4'/%3e%3canimateTransform%20attributeName='transform'%20dur='0.6s'%20repeatCount='indefinite'%20type='translate'%20values='1%20-5;%20-2%2018;%20-4%2014'/%3e%3canimate%20attributeName='opacity'%20dur='0.6s'%20repeatCount='indefinite'%20values='1;1;0'/%3e%3c/g%3e%3cg%3e%3ccircle%20cx='31'%20cy='45'%20r='1.5'%20fill='%2372b8d4'/%3e%3canimateTransform%20attributeName='transform'%20begin='-0.4s'%20dur='0.6s'%20repeatCount='indefinite'%20type='translate'%20values='1%20-5;%20-2%2018;%20-4%2014'/%3e%3canimate%20attributeName='opacity'%20begin='-0.4s'%20dur='0.6s'%20repeatCount='indefinite'%20values='1;1;0'/%3e%3c/g%3e%3cg%3e%3ccircle%20cx='38'%20cy='45'%20r='1.5'%20fill='%2372b8d4'/%3e%3canimateTransform%20attributeName='transform'%20begin='-0.2s'%20dur='0.6s'%20repeatCount='indefinite'%20type='translate'%20values='1%20-5;%20-2%2018;%20-4%2014'/%3e%3canimate%20attributeName='opacity'%20begin='-0.2s'%20dur='0.6s'%20repeatCount='indefinite'%20values='1;1;0'/%3e%3c/g%3e%3c/svg%3e`,"../assets/weather_icons/lightning-bolt.svg":`data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%2064%2064'%3e%3cpath%20fill='%23f59e0b'%20d='M29%2015.5l-6%2018h6l-3%2015%2015-21h-9l6-12h-9z'%3e%3canimate%20attributeName='opacity'%20dur='2s'%20repeatCount='indefinite'%20values='1;%201;%201;%201;%201;%201;%200.1;%201;%200.1;%201;%201;%200.1;%201;%200.1;%201'/%3e%3c/path%3e%3c/svg%3e`,"../assets/weather_icons/lightning-rainy.svg":`data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%2064%2064'%3e%3cpath%20fill='none'%20stroke='%23e5e7eb'%20stroke-linecap='round'%20stroke-linejoin='round'%20stroke-width='3'%20d='M43.67%2045.5h2.83a7%207%200%20000-14h-.32a10.49%2010.49%200%2000-19.11-8%207%207%200%2000-10.57%206%207.21%207.21%200%2000.1%201.14A7.5%207.5%200%200018%2045.5a4.19%204.19%200%2000.5%200v0'/%3e%3cg%3e%3cpath%20fill='none'%20stroke='%232885c7'%20stroke-linecap='round'%20stroke-miterlimit='10'%20stroke-width='2'%20d='M24.39%2043.03l-.78%204.94'/%3e%3canimateTransform%20attributeName='transform'%20dur='0.7s'%20repeatCount='indefinite'%20type='translate'%20values='1%20-5;%20-2%2010'/%3e%3canimate%20attributeName='opacity'%20dur='0.7s'%20repeatCount='indefinite'%20values='0;1;1;0'/%3e%3c/g%3e%3cg%3e%3cpath%20fill='none'%20stroke='%232885c7'%20stroke-linecap='round'%20stroke-miterlimit='10'%20stroke-width='2'%20d='M31.39%2043.03l-.78%204.94'/%3e%3canimateTransform%20attributeName='transform'%20begin='-0.4s'%20dur='0.7s'%20repeatCount='indefinite'%20type='translate'%20values='1%20-5;%20-2%2010'/%3e%3canimate%20attributeName='opacity'%20begin='-0.4s'%20dur='0.7s'%20repeatCount='indefinite'%20values='0;1;1;0'/%3e%3c/g%3e%3cg%3e%3cpath%20fill='none'%20stroke='%232885c7'%20stroke-linecap='round'%20stroke-miterlimit='10'%20stroke-width='2'%20d='M38.39%2043.03l-.78%204.94'/%3e%3canimateTransform%20attributeName='transform'%20begin='-0.2s'%20dur='0.7s'%20repeatCount='indefinite'%20type='translate'%20values='1%20-5;%20-2%2010'/%3e%3canimate%20attributeName='opacity'%20begin='-0.2s'%20dur='0.7s'%20repeatCount='indefinite'%20values='0;1;1;0'/%3e%3c/g%3e%3cg%3e%3cpath%20fill='%23f59e0b'%20d='M30%2036l-4%2012h4l-2%2010%2010-14h-6l4-8h-6z'/%3e%3canimate%20attributeName='opacity'%20dur='2s'%20repeatCount='indefinite'%20values='1;1;1;1;1;1;0.1;1;0.1;1;1;0.1;1;0.1;1'/%3e%3c/g%3e%3c/svg%3e`,"../assets/weather_icons/lightning.svg":`data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%2064%2064'%3e%3cpath%20fill='none'%20stroke='%23e5e7eb'%20stroke-linecap='round'%20stroke-linejoin='round'%20stroke-width='3'%20d='M43.67%2045.5h2.83a7%207%200%20000-14h-.32a10.49%2010.49%200%2000-19.11-8%207%207%200%2000-10.57%206%207.21%207.21%200%2000.1%201.14A7.5%207.5%200%200018%2045.5a4.19%204.19%200%2000.5%200v0'/%3e%3cg%3e%3cpath%20fill='%23f59e0b'%20d='M30%2036l-4%2012h4l-2%2010%2010-14h-6l4-8h-6z'/%3e%3canimate%20attributeName='opacity'%20dur='2s'%20repeatCount='indefinite'%20values='1;1;1;1;1;1;0.1;1;0.1;1;1;0.1;1;0.1;1'/%3e%3c/g%3e%3c/svg%3e`,"../assets/weather_icons/loader.svg":`data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%20100%20100'%3e%3cstyle%3e%20.loader%20{%20fill:%20%230e1315;%20}%20%3c/style%3e%3cg%20class='loader'%3e%3crect%20x='48'%20y='23.5'%20rx='.78'%20width='4'%20height='13'%3e%3canimate%20attributeName='opacity'%20values='1;0'%20keyTimes='0;1'%20dur='1.2658227848101264s'%20begin='-1.160337552742616s'%20repeatCount='indefinite'%20/%3e%3c/rect%3e%3c/g%3e%3cg%20transform='rotate(30%2050%2050)'%20class='loader'%3e%3crect%20x='48'%20y='23.5'%20rx='.78'%20width='4'%20height='13'%3e%3canimate%20attributeName='opacity'%20values='1;0'%20keyTimes='0;1'%20dur='1.2658227848101264s'%20begin='-1.0548523206751055s'%20repeatCount='indefinite'%20/%3e%3c/rect%3e%3c/g%3e%3cg%20transform='rotate(60%2050%2050)'%20class='loader'%3e%3crect%20x='48'%20y='23.5'%20rx='.78'%20width='4'%20height='13'%3e%3canimate%20attributeName='opacity'%20values='1;0'%20keyTimes='0;1'%20dur='1.2658227848101264s'%20begin='-0.9493670886075949s'%20repeatCount='indefinite'%20/%3e%3c/rect%3e%3c/g%3e%3cg%20transform='rotate(90%2050%2050)'%20class='loader'%3e%3crect%20x='48'%20y='23.5'%20rx='.78'%20width='4'%20height='13'%3e%3canimate%20attributeName='opacity'%20values='1;0'%20keyTimes='0;1'%20dur='1.2658227848101264s'%20begin='-0.8438818565400843s'%20repeatCount='indefinite'%20/%3e%3c/rect%3e%3c/g%3e%3cg%20transform='rotate(120%2050%2050)'%20class='loader'%3e%3crect%20x='48'%20y='23.5'%20rx='.78'%20width='4'%20height='13'%3e%3canimate%20attributeName='opacity'%20values='1;0'%20keyTimes='0;1'%20dur='1.2658227848101264s'%20begin='-0.7383966244725738s'%20repeatCount='indefinite'%20/%3e%3c/rect%3e%3c/g%3e%3cg%20transform='rotate(150%2050%2050)'%20class='loader'%3e%3crect%20x='48'%20y='23.5'%20rx='.78'%20width='4'%20height='13'%3e%3canimate%20attributeName='opacity'%20values='1;0'%20keyTimes='0;1'%20dur='1.2658227848101264s'%20begin='-0.6329113924050632s'%20repeatCount='indefinite'%20/%3e%3c/rect%3e%3c/g%3e%3cg%20transform='rotate(180%2050%2050)'%20class='loader'%3e%3crect%20x='48'%20y='23.5'%20rx='.78'%20width='4'%20height='13'%3e%3canimate%20attributeName='opacity'%20values='1;0'%20keyTimes='0;1'%20dur='1.2658227848101264s'%20begin='-0.5274261603375527s'%20repeatCount='indefinite'%20/%3e%3c/rect%3e%3c/g%3e%3cg%20transform='rotate(210%2050%2050)'%20class='loader'%3e%3crect%20x='48'%20y='23.5'%20rx='.78'%20width='4'%20height='13'%3e%3canimate%20attributeName='opacity'%20values='1;0'%20keyTimes='0;1'%20dur='1.2658227848101264s'%20begin='-0.42194092827004215s'%20repeatCount='indefinite'%20/%3e%3c/rect%3e%3c/g%3e%3cg%20transform='rotate(240%2050%2050)'%20class='loader'%3e%3crect%20x='48'%20y='23.5'%20rx='.78'%20width='4'%20height='13'%3e%3canimate%20attributeName='opacity'%20values='1;0'%20keyTimes='0;1'%20dur='1.2658227848101264s'%20begin='-0.3164556962025316s'%20repeatCount='indefinite'%20/%3e%3c/rect%3e%3c/g%3e%3cg%20transform='rotate(270%2050%2050)'%20class='loader'%3e%3crect%20x='48'%20y='23.5'%20rx='.78'%20width='4'%20height='13'%3e%3canimate%20attributeName='opacity'%20values='1;0'%20keyTimes='0;1'%20dur='1.2658227848101264s'%20begin='-0.21097046413502107s'%20repeatCount='indefinite'%20/%3e%3c/rect%3e%3c/g%3e%3cg%20transform='rotate(300%2050%2050)'%20class='loader'%3e%3crect%20x='48'%20y='23.5'%20rx='.78'%20width='4'%20height='13'%3e%3canimate%20attributeName='opacity'%20values='1;0'%20keyTimes='0;1'%20dur='1.2658227848101264s'%20begin='-0.10548523206751054s'%20repeatCount='indefinite'%20/%3e%3c/rect%3e%3c/g%3e%3cg%20transform='rotate(330%2050%2050)'%20class='loader'%3e%3crect%20x='48'%20y='23.5'%20rx='.78'%20width='4'%20height='13'%3e%3canimate%20attributeName='opacity'%20values='1;0'%20keyTimes='0;1'%20dur='1.2658227848101264s'%20begin='0s'%20repeatCount='indefinite'%20/%3e%3c/rect%3e%3c/g%3e%3c/svg%3e`,"../assets/weather_icons/partly-cloudy-night.svg":`data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%2064%2064'%3e%3cdefs%3e%3cclipPath%20id='a'%3e%3cpath%20fill='none'%20d='M12%2035l-5.28-4.21-2-6%201-7%204-5%205-3h6l5%201%203%203L33%2020l-6%204h-6l-3%203v4l-4%202-2%202z'/%3e%3c/clipPath%3e%3c/defs%3e%3cg%20clip-path='url(%23a)'%3e%3cg%3e%3cpath%20fill='none'%20stroke='%2372b9d5'%20stroke-linecap='round'%20stroke-linejoin='round'%20stroke-width='2'%20d='M29.33%2026.68a10.61%2010.61%200%2001-10.68-10.54A10.5%2010.5%200%200119%2013.5a10.54%2010.54%200%201011.5%2013.11%2011.48%2011.48%200%2001-1.17.07z'/%3e%3canimateTransform%20attributeName='transform'%20dur='10s'%20repeatCount='indefinite'%20type='rotate'%20values='-10%2019.22%2024.293;10%2019.22%2024.293;-10%2019.22%2024.293'/%3e%3c/g%3e%3c/g%3e%3cpath%20fill='none'%20stroke='%23e5e7eb'%20stroke-linejoin='round'%20stroke-width='3'%20d='M46.5%2031.5h-.32a10.49%2010.49%200%2000-19.11-8%207%207%200%2000-10.57%206%207.21%207.21%200%2000.1%201.14A7.5%207.5%200%200018%2045.5a4.19%204.19%200%2000.5%200v0h28a7%207%200%20000-14z'/%3e%3c/svg%3e`,"../assets/weather_icons/partlycloudy.svg":`data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%2064%2064'%3e%3cdefs%3e%3cclipPath%20id='a'%3e%3cpath%20fill='none'%20d='M12%2035l-5.28-4.21-2-6%201-7%204-5%205-3h6l5%201%203%203L33%2020l-6%204h-6l-3%203v4l-4%202-2%202z'/%3e%3c/clipPath%3e%3c/defs%3e%3cg%20clip-path='url(%23a)'%3e%3cg%3e%3cpath%20fill='none'%20stroke='%23f59e0b'%20stroke-linecap='round'%20stroke-miterlimit='10'%20stroke-width='2'%20d='M23.5%2024a4.5%204.5%200%2011-4.5-4.5%204.49%204.49%200%20014.5%204.5zM19%2015.67V12.5m0%2023v-3.17m5.89-14.22l2.24-2.24M10.87%2032.13l2.24-2.24m0-11.78l-2.24-2.24m16.26%2016.26l-2.24-2.24M7.5%2024h3.17m19.83%200h-3.17'/%3e%3canimateTransform%20attributeName='transform'%20dur='45s'%20from='0%2019%2024'%20repeatCount='indefinite'%20to='360%2019%2024'%20type='rotate'/%3e%3c/g%3e%3c/g%3e%3cpath%20fill='none'%20stroke='%23e5e7eb'%20stroke-linejoin='round'%20stroke-width='3'%20d='M46.5%2031.5h-.32a10.49%2010.49%200%2000-19.11-8%207%207%200%2000-10.57%206%207.21%207.21%200%2000.1%201.14A7.5%207.5%200%200018%2045.5a4.19%204.19%200%2000.5%200v0h28a7%207%200%20000-14z'/%3e%3c/svg%3e`,"../assets/weather_icons/pouring.svg":`data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%2064%2064'%3e%3cpath%20fill='none'%20stroke='%23e5e7eb'%20stroke-linecap='round'%20stroke-linejoin='round'%20stroke-width='3'%20d='M43.67%2045.5h2.83a7%207%200%20000-14h-.32a10.49%2010.49%200%2000-19.11-8%207%207%200%2000-10.57%206%207.21%207.21%200%2000.1%201.14A7.5%207.5%200%200018%2045.5a4.19%204.19%200%2000.5%200v0'/%3e%3cg%3e%3cpath%20fill='none'%20stroke='%232885c7'%20stroke-linecap='round'%20stroke-miterlimit='10'%20stroke-width='2'%20d='M24.39%2043.03l-.78%204.94'/%3e%3canimateTransform%20attributeName='transform'%20dur='0.7s'%20repeatCount='indefinite'%20type='translate'%20values='1%20-5;%20-2%2010'/%3e%3canimate%20attributeName='opacity'%20dur='0.7s'%20repeatCount='indefinite'%20values='0;1;1;0'/%3e%3c/g%3e%3cg%3e%3cpath%20fill='none'%20stroke='%232885c7'%20stroke-linecap='round'%20stroke-miterlimit='10'%20stroke-width='2'%20d='M31.39%2043.03l-.78%204.94'/%3e%3canimateTransform%20attributeName='transform'%20begin='-0.4s'%20dur='0.7s'%20repeatCount='indefinite'%20type='translate'%20values='1%20-5;%20-2%2010'/%3e%3canimate%20attributeName='opacity'%20begin='-0.4s'%20dur='0.7s'%20repeatCount='indefinite'%20values='0;1;1;0'/%3e%3c/g%3e%3cg%3e%3cpath%20fill='none'%20stroke='%232885c7'%20stroke-linecap='round'%20stroke-miterlimit='10'%20stroke-width='2'%20d='M38.39%2043.03l-.78%204.94'/%3e%3canimateTransform%20attributeName='transform'%20begin='-0.2s'%20dur='0.7s'%20repeatCount='indefinite'%20type='translate'%20values='1%20-5;%20-2%2010'/%3e%3canimate%20attributeName='opacity'%20begin='-0.2s'%20dur='0.7s'%20repeatCount='indefinite'%20values='0;1;1;0'/%3e%3c/g%3e%3c/svg%3e`,"../assets/weather_icons/raindrop.svg":`data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%2064%2064'%3e%3cpath%20fill='none'%20stroke='%232885c7'%20stroke-linecap='round'%20stroke-linejoin='round'%20stroke-width='3'%20d='M32%2017c-6.09%209-10%2014.62-10%2020.09a10%2010%200%200020%200C42%2031.62%2038.09%2026%2032%2017z'%3e%3canimateTransform%20attributeName='transform'%20calcMode='spline'%20dur='5s'%20keySplines='0.5%200%200.5%201;%200.5%200%200.5%201'%20repeatCount='indefinite'%20type='scale'%20values='1%201;%201%20.9;%201%201'/%3e%3c/path%3e%3c/svg%3e`,"../assets/weather_icons/rainy.svg":`data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%2064%2064'%3e%3cpath%20fill='none'%20stroke='%23e5e7eb'%20stroke-linecap='round'%20stroke-linejoin='round'%20stroke-width='3'%20d='M43.67%2045.5h2.83a7%207%200%20000-14h-.32a10.49%2010.49%200%2000-19.11-8%207%207%200%2000-10.57%206%207.21%207.21%200%2000.1%201.14A7.5%207.5%200%200018%2045.5a4.19%204.19%200%2000.5%200v0'/%3e%3cg%3e%3cpath%20fill='none'%20stroke='%232885c7'%20stroke-linecap='round'%20stroke-miterlimit='10'%20stroke-width='2'%20d='M24.39%2043.03l-.78%204.94'/%3e%3canimateTransform%20attributeName='transform'%20dur='0.7s'%20repeatCount='indefinite'%20type='translate'%20values='1%20-5;%20-2%2010'/%3e%3canimate%20attributeName='opacity'%20dur='0.7s'%20repeatCount='indefinite'%20values='0;1;1;0'/%3e%3c/g%3e%3cg%3e%3cpath%20fill='none'%20stroke='%232885c7'%20stroke-linecap='round'%20stroke-miterlimit='10'%20stroke-width='2'%20d='M31.39%2043.03l-.78%204.94'/%3e%3canimateTransform%20attributeName='transform'%20begin='-0.4s'%20dur='0.7s'%20repeatCount='indefinite'%20type='translate'%20values='1%20-5;%20-2%2010'/%3e%3canimate%20attributeName='opacity'%20begin='-0.4s'%20dur='0.7s'%20repeatCount='indefinite'%20values='0;1;1;0'/%3e%3c/g%3e%3cg%3e%3cpath%20fill='none'%20stroke='%232885c7'%20stroke-linecap='round'%20stroke-miterlimit='10'%20stroke-width='2'%20d='M38.39%2043.03l-.78%204.94'/%3e%3canimateTransform%20attributeName='transform'%20begin='-0.2s'%20dur='0.7s'%20repeatCount='indefinite'%20type='translate'%20values='1%20-5;%20-2%2010'/%3e%3canimate%20attributeName='opacity'%20begin='-0.2s'%20dur='0.7s'%20repeatCount='indefinite'%20values='0;1;1;0'/%3e%3c/g%3e%3c/svg%3e`,"../assets/weather_icons/snowy-rainy.svg":`data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%2064%2064'%3e%3cpath%20fill='none'%20stroke='%23e5e7eb'%20stroke-linecap='round'%20stroke-linejoin='round'%20stroke-width='3'%20d='M43.67%2045.5h2.83a7%207%200%20000-14h-.32a10.49%2010.49%200%2000-19.11-8%207%207%200%2000-10.57%206%207.21%207.21%200%2000.1%201.14A7.5%207.5%200%200018%2045.5a4.19%204.19%200%2000.5%200v0'/%3e%3cg%3e%3ccircle%20cx='24'%20cy='45'%20r='1.25'%20fill='none'%20stroke='%2372b8d4'%20stroke-miterlimit='10'/%3e%3cpath%20fill='none'%20stroke='%2372b8d4'%20stroke-linecap='round'%20stroke-miterlimit='10'%20d='M26.17%2046.25l-1.09-.63m-2.16-1.24l-1.09-.63M24%2042.5v1.25m0%203.75v-1.25m-1.08-.63l-1.09.63m4.34-2.5l-1.09.63'/%3e%3canimateTransform%20additive='sum'%20attributeName='transform'%20begin='-2s'%20dur='4s'%20repeatCount='indefinite'%20type='translate'%20values='1%20-6;%20-1%2012'/%3e%3canimateTransform%20additive='sum'%20attributeName='transform'%20dur='9s'%20repeatCount='indefinite'%20type='rotate'%20values='0%2024%2045;%20360%2024%2045'/%3e%3canimate%20attributeName='opacity'%20begin='-2s'%20dur='4s'%20repeatCount='indefinite'%20values='0;1;1;1;0'/%3e%3c/g%3e%3cg%3e%3ccircle%20cx='38'%20cy='45'%20r='1.25'%20fill='none'%20stroke='%2372b8d4'%20stroke-miterlimit='10'/%3e%3cpath%20fill='none'%20stroke='%2372b8d4'%20stroke-linecap='round'%20stroke-miterlimit='10'%20d='M40.17%2046.25l-1.09-.63m-2.16-1.24l-1.09-.63M38%2042.5v1.25m0%203.75v-1.25m-1.08-.63l-1.09.63m4.34-2.5l-1.09.63'/%3e%3canimateTransform%20additive='sum'%20attributeName='transform'%20begin='-1s'%20dur='4s'%20repeatCount='indefinite'%20type='translate'%20values='1%20-6;%20-1%2012'/%3e%3canimateTransform%20additive='sum'%20attributeName='transform'%20dur='9s'%20repeatCount='indefinite'%20type='rotate'%20values='0%2038%2045;%20360%2038%2045'/%3e%3canimate%20attributeName='opacity'%20begin='-1s'%20dur='4s'%20repeatCount='indefinite'%20values='0;1;1;1;0'/%3e%3c/g%3e%3cg%3e%3cpath%20fill='none'%20stroke='%232885c7'%20stroke-linecap='round'%20stroke-miterlimit='10'%20stroke-width='2'%20d='M24.08%2045.01l-.16.98'/%3e%3canimateTransform%20attributeName='transform'%20dur='1.5s'%20repeatCount='indefinite'%20type='translate'%20values='1%20-5;%20-2%2010'/%3e%3canimate%20attributeName='opacity'%20dur='1.5s'%20repeatCount='indefinite'%20values='0;1;1;0'/%3e%3c/g%3e%3cg%3e%3cpath%20fill='none'%20stroke='%232885c7'%20stroke-linecap='round'%20stroke-miterlimit='10'%20stroke-width='2'%20d='M31.08%2045.01l-.16.98'/%3e%3canimateTransform%20attributeName='transform'%20begin='-0.5s'%20dur='1.5s'%20repeatCount='indefinite'%20type='translate'%20values='1%20-5;%20-2%2010'/%3e%3canimate%20attributeName='opacity'%20begin='-0.5s'%20dur='1.5s'%20repeatCount='indefinite'%20values='0;1;1;0'/%3e%3c/g%3e%3cg%3e%3cpath%20fill='none'%20stroke='%232885c7'%20stroke-linecap='round'%20stroke-miterlimit='10'%20stroke-width='2'%20d='M38.08%2045.01l-.16.98'/%3e%3canimateTransform%20attributeName='transform'%20begin='-1s'%20dur='1.5s'%20repeatCount='indefinite'%20type='translate'%20values='1%20-5;%20-2%2010'/%3e%3canimate%20attributeName='opacity'%20begin='-1s'%20dur='1.5s'%20repeatCount='indefinite'%20values='0;1;1;0'/%3e%3c/g%3e%3c/svg%3e`,"../assets/weather_icons/snowy.svg":`data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%2064%2064'%3e%3cpath%20fill='none'%20stroke='%23e5e7eb'%20stroke-linecap='round'%20stroke-linejoin='round'%20stroke-width='3'%20d='M43.67%2045.5h2.83a7%207%200%20000-14h-.32a10.49%2010.49%200%2000-19.11-8%207%207%200%2000-10.57%206%207.21%207.21%200%2000.1%201.14A7.5%207.5%200%200018%2045.5a4.19%204.19%200%2000.5%200v0'/%3e%3cg%3e%3ccircle%20cx='31'%20cy='45'%20r='1.25'%20fill='none'%20stroke='%2372b8d4'%20stroke-miterlimit='10'/%3e%3cpath%20fill='none'%20stroke='%2372b8d4'%20stroke-linecap='round'%20stroke-miterlimit='10'%20d='M33.17%2046.25l-1.09-.63m-2.16-1.24l-1.09-.63M31%2042.5v1.25m0%203.75v-1.25m-1.08-.63l-1.09.63m4.34-2.5l-1.09.63'/%3e%3canimateTransform%20additive='sum'%20attributeName='transform'%20dur='4s'%20repeatCount='indefinite'%20type='translate'%20values='-1%20-6;%201%2012'/%3e%3canimateTransform%20additive='sum'%20attributeName='transform'%20dur='9s'%20repeatCount='indefinite'%20type='rotate'%20values='0%2031%2045;%20360%2031%2045'/%3e%3canimate%20attributeName='opacity'%20dur='4s'%20repeatCount='indefinite'%20values='0;1;1;1;0'/%3e%3c/g%3e%3cg%3e%3ccircle%20cx='24'%20cy='45'%20r='1.25'%20fill='none'%20stroke='%2372b8d4'%20stroke-miterlimit='10'/%3e%3cpath%20fill='none'%20stroke='%2372b8d4'%20stroke-linecap='round'%20stroke-miterlimit='10'%20d='M26.17%2046.25l-1.09-.63m-2.16-1.24l-1.09-.63M24%2042.5v1.25m0%203.75v-1.25m-1.08-.63l-1.09.63m4.34-2.5l-1.09.63'/%3e%3canimateTransform%20additive='sum'%20attributeName='transform'%20begin='-2s'%20dur='4s'%20repeatCount='indefinite'%20type='translate'%20values='1%20-6;%20-1%2012'/%3e%3canimateTransform%20additive='sum'%20attributeName='transform'%20dur='9s'%20repeatCount='indefinite'%20type='rotate'%20values='0%2024%2045;%20360%2024%2045'/%3e%3canimate%20attributeName='opacity'%20begin='-2s'%20dur='4s'%20repeatCount='indefinite'%20values='0;1;1;1;0'/%3e%3c/g%3e%3cg%3e%3ccircle%20cx='38'%20cy='45'%20r='1.25'%20fill='none'%20stroke='%2372b8d4'%20stroke-miterlimit='10'/%3e%3cpath%20fill='none'%20stroke='%2372b8d4'%20stroke-linecap='round'%20stroke-miterlimit='10'%20d='M40.17%2046.25l-1.09-.63m-2.16-1.24l-1.09-.63M38%2042.5v1.25m0%203.75v-1.25m-1.08-.63l-1.09.63m4.34-2.5l-1.09.63'/%3e%3canimateTransform%20additive='sum'%20attributeName='transform'%20begin='-1s'%20dur='4s'%20repeatCount='indefinite'%20type='translate'%20values='1%20-6;%20-1%2012'/%3e%3canimateTransform%20additive='sum'%20attributeName='transform'%20dur='9s'%20repeatCount='indefinite'%20type='rotate'%20values='0%2038%2045;%20360%2038%2045'/%3e%3canimate%20attributeName='opacity'%20begin='-1s'%20dur='4s'%20repeatCount='indefinite'%20values='0;1;1;1;0'/%3e%3c/g%3e%3c/svg%3e`,"../assets/weather_icons/sunny.svg":`data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%2064%2064'%3e%3cg%3e%3cpath%20fill='none'%20stroke='%23f59e0b'%20stroke-linecap='round'%20stroke-miterlimit='10'%20stroke-width='3'%20d='M42.5%2032A10.5%2010.5%200%201132%2021.5%2010.5%2010.5%200%200142.5%2032zM32%2015.71V9.5m0%2045v-6.21m11.52-27.81l4.39-4.39M16.09%2047.91l4.39-4.39m0-23l-4.39-4.39m31.82%2031.78l-4.39-4.39M15.71%2032H9.5m45%200h-6.21'/%3e%3canimateTransform%20attributeName='transform'%20dur='45s'%20from='0%2032%2032'%20repeatCount='indefinite'%20to='360%2032%2032'%20type='rotate'/%3e%3c/g%3e%3c/svg%3e`,"../assets/weather_icons/thermometer-colder.svg":`data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%2064%2064'%3e%3ccircle%20cx='32'%20cy='42'%20r='4'%20fill='%23ef4444'/%3e%3cpath%20fill='none'%20stroke='%23ef4444'%20stroke-linecap='round'%20stroke-miterlimit='10'%20stroke-width='2'%20d='M32%2033v8.5'%3e%3canimateTransform%20attributeName='transform'%20dur='1s'%20repeatCount='indefinite'%20type='translate'%20values='0%200;%200%201;%200%200'/%3e%3c/path%3e%3cg%3e%3cpath%20fill='none'%20stroke='%232885c7'%20stroke-linecap='round'%20stroke-linejoin='round'%20stroke-width='2'%20d='M44%2026v12l-3-3.45L44%2038l3-3.45'/%3e%3canimateTransform%20attributeName='transform'%20begin='0s'%20dur='1.5s'%20keyTimes='0.0;%200.5;%200.9;%201.0'%20repeatCount='indefinite'%20type='translate'%20values='0%200;%200%200;%200%206;%200%206'/%3e%3canimate%20attributeName='opacity'%20dur='1.5s'%20keyTimes='0.0;%200.3;%200.8;%200.9;%201.0'%20repeatCount='indefinite'%20values='0;%201;%201;%200;%200'/%3e%3c/g%3e%3cpath%20fill='none'%20stroke='%23e5e7eb'%20stroke-linecap='round'%20stroke-linejoin='round'%20stroke-width='2'%20d='M39%2041.9a7%207%200%2011-14%200%207.12%207.12%200%20013-5.83v-17a4%204%200%20118%200v17a7.12%207.12%200%20013%205.83zM32.5%2025h3m-3-4h3m-3%208h3'/%3e%3c/svg%3e`,"../assets/weather_icons/thermometer-warmer.svg":`data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%2064%2064'%3e%3ccircle%20cx='32'%20cy='42'%20r='4'%20fill='%23ef4444'/%3e%3cpath%20fill='none'%20stroke='%23ef4444'%20stroke-linecap='round'%20stroke-miterlimit='10'%20stroke-width='2'%20d='M32%2019v22.5'%3e%3canimateTransform%20attributeName='transform'%20dur='1s'%20repeatCount='indefinite'%20type='translate'%20values='0%200;%200%201;%200%200'/%3e%3c/path%3e%3cg%3e%3cpath%20fill='none'%20stroke='%23ef4444'%20stroke-linecap='round'%20stroke-linejoin='round'%20stroke-width='2'%20d='M44%2038V26l-3%203.45L44%2026l3%203.45'/%3e%3canimateTransform%20attributeName='transform'%20begin='0s'%20dur='1.5s'%20keyTimes='0.0;%200.5;%200.9;%201.0'%20repeatCount='indefinite'%20type='translate'%20values='0%200;%200%200;%200%20-6;%200%20-6'/%3e%3canimate%20attributeName='opacity'%20dur='1.5s'%20keyTimes='0.0;%200.3;%200.8;%200.9;%201.0'%20repeatCount='indefinite'%20values='0;%201;%201;%200;%200'/%3e%3c/g%3e%3cpath%20fill='none'%20stroke='%23e5e7eb'%20stroke-linecap='round'%20stroke-linejoin='round'%20stroke-width='2'%20d='M39%2041.9a7%207%200%2011-14%200%207.12%207.12%200%20013-5.83v-17a4%204%200%20118%200v17a7.12%207.12%200%20013%205.83zM32.5%2025h3m-3-4h3m-3%208h3'/%3e%3c/svg%3e`,"../assets/weather_icons/umbrella.svg":`data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%2064%2064'%3e%3cpath%20fill='none'%20stroke='%23d1d5db'%20stroke-linecap='round'%20stroke-linejoin='round'%20stroke-width='3'%20d='M32%2032.69v12.5c0%202.12-1.9%202.12-3%202.12a3%203%200%2001-3-2.12m6-28.69v1'/%3e%3cpath%20fill='none'%20stroke='%23ef4444'%20stroke-linecap='round'%20stroke-linejoin='round'%20stroke-width='2'%20d='M45.5%2033.12c0-8.28-6-15-13.5-15s-13.5%206.72-13.5%2015l1.43-.91a6%206%200%20016.58.08l1.24.83.77-.54a6%206%200%20017%200l.77.54%201.24-.83a6%206%200%20016.58-.08z'%3e%3canimateTransform%20attributeName='transform'%20dur='2s'%20repeatCount='indefinite'%20type='translate'%20values='0%200;%200%200.5;%200%200'/%3e%3c/path%3e%3c/svg%3e`,"../assets/weather_icons/uv-index-10.svg":`data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%2064%2064'%3e%3cg%3e%3cpath%20fill='none'%20stroke='%23f59e0b'%20stroke-linecap='round'%20stroke-miterlimit='10'%20stroke-width='3'%20d='M42.5%2032A10.5%2010.5%200%201132%2021.5%2010.5%2010.5%200%200142.5%2032zM32%2015.71V9.5m0%2045v-6.21m11.52-27.81l4.39-4.39M16.09%2047.91l4.39-4.39m0-23l-4.39-4.39m31.82%2031.78l-4.39-4.39M15.71%2032H9.5m45%200h-6.21'/%3e%3canimateTransform%20attributeName='transform'%20dur='45s'%20from='0%2032%2032'%20repeatCount='indefinite'%20to='360%2032%2032'%20type='rotate'/%3e%3c/g%3e%3crect%20width='21'%20height='21'%20x='33.5'%20y='33.5'%20fill='%23ff3c00'%20stroke='%23fff'%20stroke-miterlimit='10'%20stroke-width='2'%20rx='6'/%3e%3cpath%20fill='%23fff'%20d='M41.9%2040.1a.5.5%200%2001.1.36v7.08a.5.5%200%2001-.1.36.46.46%200%2001-.35.1h-.89a.46.46%200%2001-.35-.1.5.5%200%2001-.1-.36v-5.29l-1.07.62a.42.42%200%2001-.68-.18l-.38-.69a.45.45%200%2001-.07-.35.64.64%200%2001.29-.27l2-1.18a1.24%201.24%200%2001.64-.18h.63a.46.46%200%2001.33.08zM44.8%2040.72a3.74%203.74%200%20014.41%200%202.54%202.54%200%2001.79%202v2.6a2.53%202.53%200%2001-.79%202A3.09%203.09%200%200147%2048a3.14%203.14%200%2001-2.21-.73%202.53%202.53%200%2001-.8-2v-2.6a2.51%202.51%200%2001.81-1.95zm3.1%201.16a1.33%201.33%200%2000-.89-.27%201.35%201.35%200%2000-.91.27%201%201%200%2000-.32.79v2.65a1%201%200%2000.32.79%201.31%201.31%200%2000.91.28%201.28%201.28%200%2000.89-.28%201%201%200%2000.32-.79v-2.65a1%201%200%2000-.32-.79z'/%3e%3c/svg%3e`,"../assets/weather_icons/uv-index-11.svg":`data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%2064%2064'%3e%3cg%3e%3cpath%20fill='none'%20stroke='%23f59e0b'%20stroke-linecap='round'%20stroke-miterlimit='10'%20stroke-width='3'%20d='M42.5%2032A10.5%2010.5%200%201132%2021.5%2010.5%2010.5%200%200142.5%2032zM32%2015.71V9.5m0%2045v-6.21m11.52-27.81l4.39-4.39M16.09%2047.91l4.39-4.39m0-23l-4.39-4.39m31.82%2031.78l-4.39-4.39M15.71%2032H9.5m45%200h-6.21'/%3e%3canimateTransform%20attributeName='transform'%20dur='45s'%20from='0%2032%2032'%20repeatCount='indefinite'%20to='360%2032%2032'%20type='rotate'/%3e%3c/g%3e%3crect%20width='21'%20height='21'%20x='33.5'%20y='33.5'%20fill='%239936d4'%20stroke='%23fff'%20stroke-miterlimit='10'%20stroke-width='2'%20rx='6'/%3e%3cpath%20fill='%23fff'%20d='M42.9%2040.1a.5.5%200%2001.1.36v7.08a.5.5%200%2001-.1.36.46.46%200%2001-.35.1h-.89a.46.46%200%2001-.35-.1.5.5%200%2001-.1-.36v-5.29l-1.07.62a.42.42%200%2001-.68-.18l-.39-.69a.43.43%200%20010-.35.56.56%200%2001.28-.27l2-1.18a1.18%201.18%200%2001.63-.18h.63a.46.46%200%2001.29.08zM47.9%2040.1a.5.5%200%2001.1.36v7.08a.5.5%200%2001-.1.36.46.46%200%2001-.35.1h-.89a.46.46%200%2001-.35-.1.5.5%200%2001-.1-.36v-5.29l-1.07.62a.42.42%200%2001-.68-.18l-.38-.69a.45.45%200%2001-.07-.35.64.64%200%2001.29-.27l2-1.18a1.24%201.24%200%2001.64-.18h.63a.46.46%200%2001.33.08z'/%3e%3c/svg%3e`,"../assets/weather_icons/uv-index-9.svg":`data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%2064%2064'%3e%3cg%3e%3cpath%20fill='none'%20stroke='%23f59e0b'%20stroke-linecap='round'%20stroke-miterlimit='10'%20stroke-width='3'%20d='M42.5%2032A10.5%2010.5%200%201132%2021.5%2010.5%2010.5%200%200142.5%2032zM32%2015.71V9.5m0%2045v-6.21m11.52-27.81l4.39-4.39M16.09%2047.91l4.39-4.39m0-23l-4.39-4.39m31.82%2031.78l-4.39-4.39M15.71%2032H9.5m45%200h-6.21'/%3e%3canimateTransform%20attributeName='transform'%20dur='45s'%20from='0%2032%2032'%20repeatCount='indefinite'%20to='360%2032%2032'%20type='rotate'/%3e%3c/g%3e%3crect%20width='21'%20height='21'%20x='33.5'%20y='33.5'%20fill='%23ff3c00'%20stroke='%23fff'%20stroke-miterlimit='10'%20stroke-width='2'%20rx='6'/%3e%3cpath%20fill='%23fff'%20d='M43.89%2045a3.21%203.21%200%2001-2.18-.63%202.38%202.38%200%2001-.71-1.84%202.25%202.25%200%2001.8-1.85A3.29%203.29%200%200144%2040a3%203%200%20012.23.76%202.84%202.84%200%2001.77%202.12v2.24a2.81%202.81%200%2001-.78%202.12A3%203%200%200144%2048a2.75%202.75%200%2001-2.88-1.73.4.4%200%20010-.35.53.53%200%2001.29-.21l.78-.29a.42.42%200%2001.34%200%20.75.75%200%2001.22.31%201.21%201.21%200%20001.26.69%201.11%201.11%200%20001.27-1.25v-.23a6.78%206.78%200%2001-1.39.06zm.11-3.41q-1.26%200-1.26.93a.84.84%200%2000.29.7%201.63%201.63%200%20001%20.23%203.43%203.43%200%20001.26-.18v-.48q-.03-1.2-1.29-1.2z'/%3e%3c/svg%3e`,"../assets/weather_icons/windy-variant.svg":`data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%2064%2064'%3e%3cpath%20fill='none'%20stroke='%23e5e7eb'%20stroke-dasharray='35%2022'%20stroke-linecap='round'%20stroke-miterlimit='10'%20stroke-width='3'%20d='M43.64%2020a5%205%200%20113.61%208.46h-35.5'%3e%3canimate%20attributeName='stroke-dashoffset'%20dur='2s'%20repeatCount='indefinite'%20values='-57;%2057'/%3e%3c/path%3e%3cpath%20fill='none'%20stroke='%23e5e7eb'%20stroke-dasharray='24%2015'%20stroke-linecap='round'%20stroke-miterlimit='10'%20stroke-width='3'%20d='M29.14%2044a5%205%200%20103.61-8.46h-21'%3e%3canimate%20attributeName='stroke-dashoffset'%20begin='-1.5s'%20dur='2s'%20repeatCount='indefinite'%20values='-39;%2039'/%3e%3c/path%3e%3c/svg%3e`,"../assets/weather_icons/windy.svg":`data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%2064%2064'%3e%3cpath%20fill='none'%20stroke='%23e5e7eb'%20stroke-dasharray='35%2022'%20stroke-linecap='round'%20stroke-miterlimit='10'%20stroke-width='3'%20d='M43.64%2020a5%205%200%20113.61%208.46h-35.5'%3e%3canimate%20attributeName='stroke-dashoffset'%20dur='2s'%20repeatCount='indefinite'%20values='-57;%2057'/%3e%3c/path%3e%3cpath%20fill='none'%20stroke='%23e5e7eb'%20stroke-dasharray='24%2015'%20stroke-linecap='round'%20stroke-miterlimit='10'%20stroke-width='3'%20d='M29.14%2044a5%205%200%20103.61-8.46h-21'%3e%3canimate%20attributeName='stroke-dashoffset'%20begin='-1.5s'%20dur='2s'%20repeatCount='indefinite'%20values='-39;%2039'/%3e%3c/path%3e%3c/svg%3e`}),PS=e=>NS[`../assets/weather_icons/${e}.svg`],FS=[`clear-night`,`cloudy`,`exceptional`,`fog`,`hail`,`lightning`,`lightning-rainy`,`partlycloudy`,`pouring`,`rainy`,`snowy`,`snowy-rainy`,`sunny`,`windy`,`windy-variant`];function IS(e,t){return e?t&&e===`sunny`?`clear-night`:t&&e===`partlycloudy`?`partly-cloudy-night`:FS.includes(e)?e:`exceptional`:`cloudy`}function LS(e,t){return PS(IS(e,t))??PS(`cloudy`)}var RS={en:{"clear-night":`Clear`,cloudy:`Cloudy`,exceptional:`Exceptional`,fog:`Fog`,hail:`Hail`,lightning:`Lightning`,"lightning-rainy":`Thunderstorm`,partlycloudy:`Partly cloudy`,pouring:`Pouring`,rainy:`Rainy`,snowy:`Snowy`,"snowy-rainy":`Sleet`,sunny:`Sunny`,windy:`Windy`,"windy-variant":`Windy and cloudy`},de:{"clear-night":`Klar`,cloudy:`Bewölkt`,exceptional:`Außergewöhnlich`,fog:`Nebel`,hail:`Hagel`,lightning:`Gewitter`,"lightning-rainy":`Gewitter mit Regen`,partlycloudy:`Teilweise bewölkt`,pouring:`Starkregen`,rainy:`Regnerisch`,snowy:`Schnee`,"snowy-rainy":`Schneeregen`,sunny:`Sonnig`,windy:`Windig`,"windy-variant":`Windig und bewölkt`}};function zS(e,t){return e?(RS[t.split(`-`)[0]]??RS.en)[e]??e:``}var BS={en:[`N`,`NE`,`E`,`SE`,`S`,`SW`,`W`,`NW`],de:[`N`,`NO`,`O`,`SO`,`S`,`SW`,`W`,`NW`]};function VS(e,t){return(BS[t.split(`-`)[0]]??BS.en)[Math.round((e%360+360)%360/45)%8]}var HS={hPa:1,mbar:1,Pa:.01,kPa:10,inHg:33.8639,mmHg:1.33322,psi:68.9476};function US(e,t){return e*(HS[t??`hPa`]??1)}function WS(e){return Math.min(1,Math.max(0,(e-960)/100))}var GS=W.img`
  width: ${({$size:e})=>e};
  height: ${({$size:e})=>e};
  flex-shrink: 0;
  display: block;
`;function KS(e,t){let n=`<!-- ${t} -->`;return e.startsWith(`data:image/svg+xml;base64,`)?`data:image/svg+xml;base64,${btoa(atob(e.slice(26))+n)}`:e.startsWith(`data:image/svg+xml,`)?`${e}${encodeURIComponent(n)}`:`${e}${e.includes(`?`)?`&`:`?`}timeline=${encodeURIComponent(t)}`}var qS=(0,v.memo)(({condition:e,night:t=!1,size:n,timeline:r})=>{let i=LS(e,t),a=i&&r?KS(i,r):i;return a?(0,C.jsx)(GS,{src:a,alt:``,$size:n,draggable:!1}):null}),JS=({children:e})=>{let t=(0,v.useRef)(null);return AS(t),(0,C.jsx)(Ef,{ref:t,children:e})};function YS(e,t,n){let r=nd(),[i,a]=(0,v.useState)(null),o=`${e}|${t}|${n}`;return(0,v.useEffect)(()=>{if(!r)return;let i=!1;return r.sendMessagePromise({type:`history/history_during_period`,entity_ids:[e],start_time:new Date(Date.now()-n*36e5).toISOString(),minimal_response:!1,no_attributes:!1,significant_changes_only:!1}).then(n=>{if(i)return;let r=(n[e]??[]).map(e=>Number(e.a?.[t]));a({key:o,value:sp(r)})}).catch(()=>!i&&a({key:o,value:null})),()=>{i=!0}},[r,e,t,n,o]),i?.key===o?i.value:null}var XS=120,ZS=68,QS=60,$S=62,eC=40,tC=5,nC=W.div`
  grid-column: 1 / -1;
  position: relative;
  justify-self: center;
  width: 100%;
  max-width: ${G(11)};
  aspect-ratio: ${XS} / ${ZS};
  margin-top: ${G(.7)};
  color: ${({theme:e})=>e.text.secondary};

  svg {
    display: block;
    width: 100%;
    height: 100%;
  }

  .glyph {
    position: absolute;
    width: 15%;
    aspect-ratio: 1;
    transform: translate(-50%, -50%);
  }
`,rC=(e,t=eC)=>{let n=Math.PI*(1+e);return{x:+(QS+t*Math.cos(n)).toFixed(2),y:+($S+t*Math.sin(n)).toFixed(2)}},iC=(e,t)=>{let n=rC(e),r=rC(t);return`M ${n.x} ${n.y} A ${eC} ${eC} 0 0 1 ${r.x} ${r.y}`},aC=e=>[rC(e,eC-tC/2),rC(e-.035,45.5),rC(e+.035,45.5)].map(({x:e,y:t})=>`${e},${t}`).join(` `),oC=[{fraction:.14,icon:`mdi:weather-pouring`},{fraction:.5,icon:`mdi:weather-partly-cloudy`},{fraction:.86,icon:`mdi:weather-sunny`}],sC=({entityId:e,value:t,unit:n})=>{let r=X(),i=Y(),a=Ru(),o=YS(e,`pressure`,72),s=e=>WS(US(e,n)),c=n===`inHg`||n===`kPa`?2:0,l=rC(s(t)),u=o&&o.max>o.min?o:null;return(0,C.jsxs)(`div`,{className:`tall`,children:[(0,C.jsx)(Q,{className:`icon`,icon:`mdi:gauge`}),(0,C.jsx)(`span`,{className:`label`,children:r(`pressure`)}),(0,C.jsxs)(`span`,{className:`value`,children:[Tp(t,i,c),` `,n??`hPa`]}),(0,C.jsxs)(nC,{children:[(0,C.jsxs)(`svg`,{viewBox:`0 0 ${XS} ${ZS}`,"aria-hidden":`true`,children:[(0,C.jsx)(`path`,{d:iC(0,1),fill:`none`,stroke:`rgba(255, 255, 255, 0.08)`,strokeWidth:tC,strokeLinecap:`round`}),u&&(0,C.jsxs)(C.Fragment,{children:[(0,C.jsx)(`polygon`,{points:aC(s(u.min)),fill:a.colors.temperature,"data-tip":`${r(`pressure_low`)}: ${Tp(u.min,i,c)}`}),(0,C.jsx)(`polygon`,{points:aC(s(u.max)),fill:a.colors.alert,"data-tip":`${r(`pressure_high`)}: ${Tp(u.max,i,c)}`})]}),(0,C.jsx)(`circle`,{cx:l.x,cy:l.y,r:4.6,fill:`#fff`,stroke:`#1c1c20`,strokeWidth:2})]}),oC.map(e=>{let t=rC(e.fraction,55);return(0,C.jsx)(`span`,{className:`glyph`,style:{left:`${t.x/XS*100}%`,top:`${t.y/ZS*100}%`},children:(0,C.jsx)(Q,{icon:e.icon,size:`100%`})},e.icon)})]})]})},cC=29.530588853,lC=Date.UTC(2e3,0,6,18,14),uC=864e5;function dC(e){return((e-lC)/uC%cC+cC)%cC}function fC(e){return(1-Math.cos(2*Math.PI*dC(e)/cC))/2}function pC(e){return dC(e)<cC/2}function mC(e){return e+(cC/2-dC(e)+cC)%cC*uC}function hC(e,t,n,r=!1){let i=Math.min(1,Math.max(0,e)),a=Math.abs(2*i-1)*n,o=t!==r,s=+!!o,c=i<.5===o?0:1;return`M0,${-n} A${n},${n} 0 0 ${s} 0,${n} A${a.toFixed(2)},${n} 0 0 ${c} 0,${-n} Z`}var gC={new_moon:`moon_new_moon`,waxing_crescent:`moon_waxing_crescent`,first_quarter:`moon_first_quarter`,waxing_gibbous:`moon_waxing_gibbous`,full_moon:`moon_full_moon`,waning_gibbous:`moon_waning_gibbous`,last_quarter:`moon_last_quarter`,waning_crescent:`moon_waning_crescent`},_C=W.div`
  .label,
  .value {
    grid-column: 1 / -1;
  }
`,vC=W.div`
  grid-column: 1 / -1;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${G(.35)};
  margin-top: ${G(.5)};

  svg {
    width: ${G(4.6)};
    height: ${G(4.6)};
    overflow: visible;
  }

  .details {
    font-size: ${G(.82)};
    color: ${({theme:e})=>e.text.secondary};
    text-align: center;
  }
`,yC=(0,v.memo)(({entityId:e})=>{let t=X(),n=Y(),r=J(e),i=R(e=>e.config?.latitude),a=_p(36e5);if(!r)return null;let o=gC[r.state],s=fC(a),c=new Date(mC(a)).toLocaleDateString(n,{day:`numeric`,month:`short`});return(0,C.jsxs)(_C,{className:`tall`,children:[(0,C.jsx)(`span`,{className:`label`,children:t(`moon`)}),(0,C.jsx)(`span`,{className:`value`,children:o?t(o):r.state}),(0,C.jsxs)(vC,{children:[(0,C.jsxs)(`svg`,{viewBox:`-12 -12 24 24`,"aria-hidden":`true`,children:[(0,C.jsx)(`defs`,{children:(0,C.jsxs)(`radialGradient`,{id:`bwd-moon-lit`,cx:`40%`,cy:`35%`,r:`75%`,children:[(0,C.jsx)(`stop`,{offset:`0`,stopColor:`#f6f3ea`}),(0,C.jsx)(`stop`,{offset:`1`,stopColor:`#c3bfb2`})]})}),(0,C.jsx)(`circle`,{r:11.5,fill:`rgba(255, 246, 220, 1)`,opacity:.04+s*.08}),(0,C.jsx)(`circle`,{r:10,fill:`rgba(255, 255, 255, 0.07)`,stroke:`rgba(255, 255, 255, 0.12)`,strokeWidth:.4}),(0,C.jsx)(`path`,{d:hC(s,pC(a),10,(i??0)<0),fill:`url(#bwd-moon-lit)`})]}),(0,C.jsxs)(`span`,{className:`details`,children:[t(`moon_lit`,{percent:Math.round(s*100)}),` · `,t(`moon_next_full`,{date:c})]})]})]})});function bC(){return R(e=>Object.values(e.entitiesRegistryDisplay).find(e=>e.platform===`moon`&&e.entity_id.startsWith(`sensor.`))?.entity_id)}var xC=[`distance`,`azimuth`,`counter`];function SC(e){let t={};for(let n of e){if(n.pl!==`blitzortung`||!n.ei.startsWith(`sensor.`))continue;let e=xC.find(e=>e===n.tk);e&&!t[e]&&(t[e]=n.ei)}return t.distance?{distance:t.distance,azimuth:t.azimuth??``,counter:t.counter??``}:null}var CC=e=>e*Math.PI/180;function wC(e,t){let n=CC(e.lat),r=CC(t.lat),i=CC(t.lon-e.lon),a=Math.sin(i)*Math.cos(r),o=Math.cos(n)*Math.sin(r)-Math.sin(n)*Math.cos(r)*Math.cos(i);return(Math.atan2(a,o)*180/Math.PI+360)%360}function TC(e){return[10,25,50,100,200,500,1e3,2e3,5e3].find(t=>e<=t)??Math.ceil(e/1e3)*1e3}function EC(e,t){let n=Math.min(1,e.distance/t);return{x:n*Math.sin(CC(e.bearing)),y:-n*Math.cos(CC(e.bearing))}}var DC=W(Om)`
  grid-template-columns: ${G(7.8)} repeat(2, minmax(0, 1fr));

  > .radar {
    display: block;
    grid-row: span 2;
    padding: ${G(.4)};
  }

  svg {
    display: block;
    width: 100%;
    height: 100%;
  }
`,OC=50,kC=({lightning:e,range:t})=>{let n=Ru(),r=e.strikes[0]?.time??0,i=e.strikes[e.strikes.length-1]?.time??r,a=e=>r===i?0:(r-e)/(r-i);return(0,C.jsx)(`div`,{className:`radar`,children:(0,C.jsxs)(`svg`,{viewBox:`-56 -56 112 112`,"aria-hidden":`true`,children:[(0,C.jsxs)(`g`,{fill:`none`,stroke:`rgba(255, 255, 255, 0.08)`,strokeWidth:1.5,children:[(0,C.jsx)(`circle`,{r:OC}),(0,C.jsx)(`circle`,{r:OC/2}),(0,C.jsx)(`path`,{d:`M 0 -50 V ${OC} M -50 0 H ${OC}`,strokeWidth:1})]}),(0,C.jsx)(`path`,{d:`M 0 -55 V -45`,stroke:`rgba(255, 255, 255, 0.35)`,strokeWidth:2,strokeLinecap:`round`}),[...e.strikes].reverse().map((r,i)=>{let o=EC(r,t),s=i===e.strikes.length-1;return(0,C.jsx)(`circle`,{cx:o.x*OC,cy:o.y*OC,r:s?3.6:2.4,fill:n.colors.warm,opacity:1-.75*a(r.time)},`${r.time}-${i}`)}),(0,C.jsx)(`circle`,{r:3.6,fill:`#fff`,stroke:`#1c1c20`,strokeWidth:1.8})]})})},AC=()=>{let e=X();return(0,C.jsxs)(`div`,{children:[(0,C.jsx)(Q,{className:`icon`,icon:`mdi:flash-off-outline`}),(0,C.jsx)(`span`,{className:`label`,children:e(`lightning_nearby`)}),(0,C.jsx)(`span`,{className:`value`,children:e(`lightning_none`)})]})},jC=({lightning:e})=>{let t=X(),n=Y(),r=_p(3e4),i=Sp(J(e.sensors.counter||void 0)?.state),a=Sp(J(e.sensors.azimuth||void 0)?.state),o=e.strikes[0],s=Math.min(...e.strikes.map(e=>e.distance)),c=a??o?.bearing,l=i||e.strikes.length,u=TC(Math.max(...e.strikes.map(e=>e.distance)));return(0,C.jsxs)(DC,{children:[(0,C.jsx)(kC,{lightning:e,range:u}),(0,C.jsxs)(`div`,{children:[(0,C.jsx)(Q,{className:`icon`,icon:`mdi:flash`}),(0,C.jsx)(`span`,{className:`label`,children:t(`lightning_within`,{range:u,unit:e.unit})}),(0,C.jsx)(`span`,{className:`value`,children:t(`lightning_count`,{count:l})})]}),(0,C.jsxs)(`div`,{children:[(0,C.jsx)(Q,{className:`icon`,icon:`mdi:map-marker-radius-outline`}),(0,C.jsx)(`span`,{className:`label`,children:t(`lightning_nearest`)}),(0,C.jsx)(`span`,{className:`value`,children:`${Tp(s,n,0)} ${e.unit}`})]}),c!=null&&(0,C.jsxs)(`div`,{children:[(0,C.jsx)(Q,{className:`icon`,icon:`mdi:compass-outline`}),(0,C.jsx)(`span`,{className:`label`,children:t(`lightning_direction`)}),(0,C.jsx)(`span`,{className:`value`,children:VS(c,n)})]}),o&&Number.isFinite(o.time)&&(0,C.jsxs)(`div`,{children:[(0,C.jsx)(Q,{className:`icon`,icon:`mdi:clock-outline`}),(0,C.jsx)(`span`,{className:`label`,children:t(`lightning_last`)}),(0,C.jsx)(`span`,{className:`value`,children:Mp(new Date(o.time),n,r)})]})]})};function MC(){let e=nd(),[t,n]=(0,v.useState)(null);return(0,v.useEffect)(()=>{if(!e)return;let t=!1;return e.sendMessagePromise({type:`config/entity_registry/list_for_display`}).then(e=>!t&&n(SC(e.entities??[]))).catch(()=>!t&&n(null)),()=>{t=!0}},[e]),t}function NC(){let e=MC(),t=R(e=>{let t=e.entities[`zone.home`]?.attributes,n=[`${t?.latitude},${t?.longitude}`];for(let[t,r]of Object.entries(e.entities)){if(!t.startsWith(`geo_location.`)||r.attributes.source!==`blitzortung`)continue;let e=r.attributes;n.push([r.state,e.latitude,e.longitude,e.publication_date,e.unit_of_measurement].join(`,`))}return n.join(`|`)});return(0,v.useMemo)(()=>{if(!e)return null;let[n,...r]=t.split(`|`),[i,a]=n.split(`,`).map(Number),o=`km`,s=r.map(e=>{let[t,n,r,s,c]=e.split(`,`);return c&&(o=c),{distance:Number(t),bearing:wC({lat:i,lon:a},{lat:Number(n),lon:Number(r)}),time:Date.parse(s)}}).filter(e=>Number.isFinite(e.distance)&&Number.isFinite(e.bearing)).sort((e,t)=>t.time-e.time);return{sensors:e,strikes:s,unit:o}},[e,t])}function PC(e,t){let[n,r]=(0,v.useState)(null),[i,a]=(0,v.useState)(!1);return ld(e?`${e}|${t}`:null,()=>({type:`weather/subscribe_forecast`,entity_id:e,forecast_type:t}),e=>{a(!1),r(e.forecast??[])},()=>a(!0)),{forecast:n,unsupported:i}}var FC=W.div`
  display: grid;
  grid-template-columns: auto auto minmax(0, 1fr);
  align-items: center;
  gap: ${G(1.4)};

  .reading {
    display: flex;
    align-items: center;
    gap: ${G(1)};
  }

  .temperature {
    font-size: ${G(4)};
    font-weight: 300;
    line-height: 1;
    white-space: nowrap;
  }

  .condition {
    font-size: ${G(1.3)};
    margin-top: ${G(.3)};
  }

  .feels {
    font-size: ${G(1)};
    color: ${({theme:e})=>e.text.secondary};
    margin-top: ${G(.2)};
  }

  /* Today's high and low, marked as in the sidebar's weather button. */
  .today {
    display: flex;
    flex-direction: column;
    gap: ${G(.2)};
    font-size: ${G(1.2)};
  }

  .today div {
    display: flex;
    align-items: center;
    gap: ${G(.15)};
  }

  .today .icon {
    font-size: ${G(1.4)};
    color: ${({theme:e})=>e.text.secondary};
  }
`,IC=W.h3`
  margin: ${G(.6)} 0 0;
  font-size: ${G(1.15)};
  font-weight: 600;
`,LC=W.div`
  min-width: 0;
  overflow-x: auto;
  overscroll-behavior-x: contain;
  scrollbar-width: none;
  /* Fades out at the right, so a strip longer than the room reads as more. */
  mask-image: linear-gradient(to right, black calc(100% - ${G(2)}), transparent);
  -webkit-mask-image: linear-gradient(to right, black calc(100% - ${G(2)}), transparent);

  &::-webkit-scrollbar {
    display: none;
  }

  .strip {
    display: grid;
    grid-auto-flow: column;
    grid-auto-columns: ${G(4.6)};
    width: max-content;
    padding-right: ${G(2)};
  }

  .hour {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: ${G(.15)};
    font-size: ${G(.95)};
  }

  .time {
    color: ${({theme:e})=>e.text.secondary};
  }

  .temp {
    font-size: ${G(1.15)};
    font-weight: 600;
  }

  .rain {
    min-height: 1.2em;
    font-size: ${G(.8)};
    color: ${({theme:e})=>e.colors.temperature};
  }
`,RC=W.div`
  display: grid;
  grid-auto-flow: column;
  grid-auto-columns: minmax(0, 1fr);
  padding: ${G(.8)} ${G(.4)};
  border-radius: ${G(1.2)};
  background: ${({theme:e})=>e.bubble.inset};

  > div {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: ${G(.3)};
    min-width: 0;
  }

  .day {
    font-size: ${G(1)};
    color: ${({theme:e})=>e.text.secondary};
  }

  .high {
    font-size: ${G(1.25)};
    font-weight: 600;
    margin-top: ${G(.2)};
  }

  .low {
    font-size: ${G(1.1)};
    color: ${({theme:e})=>e.text.secondary};
  }

  .rain {
    display: flex;
    align-items: center;
    gap: ${G(.1)};
    min-height: 1.3em;
    font-size: ${G(.85)};
    color: ${({theme:e})=>e.colors.temperature};
  }
`,zC=W.p`
  color: ${({theme:e})=>e.text.secondary};
  font-size: ${G(1)};
`,BC=({open:e,onClose:t,entityId:n,temperature:r})=>{let i=X(),a=J(n);return(0,C.jsx)(Mf,{open:e,onClose:t,title:i(`weather`),subtitle:a?.attributes.friendly_name,icon:`mdi:weather-partly-cloudy`,width:66,fixedBody:!0,children:(0,C.jsx)(WC,{entityId:n,temperature:r})})},VC=(e,t)=>e===void 0?`–`:`${Tp(e,t,0)}°`,HC=({hours:e})=>{let t=Y(),n=(0,v.useRef)(null);return AS(n,!0,`x`),(0,C.jsx)(LC,{ref:n,children:(0,C.jsx)(`div`,{className:`strip`,children:e.map(e=>(0,C.jsxs)(`div`,{className:`hour`,children:[(0,C.jsx)(`span`,{className:`time`,children:kp(new Date(e.datetime),t)}),(0,C.jsx)(qS,{timeline:`popup`,condition:e.condition,night:e.is_daytime===!1,size:G(2.6)}),(0,C.jsx)(`span`,{className:`temp`,children:VC(e.temperature,t)}),(0,C.jsx)(`span`,{className:`rain`,children:e.precipitation_probability?`${e.precipitation_probability} %`:``})]},e.datetime))})})},UC=({days:e})=>{let t=Y(),n=X();return(0,C.jsx)(RC,{children:e.map((e,r)=>(0,C.jsxs)(`div`,{children:[(0,C.jsx)(`span`,{className:`day`,children:r===0?n(`today`):jp(new Date(e.datetime),t)}),(0,C.jsx)(qS,{timeline:`popup`,condition:e.condition,size:G(3)}),(0,C.jsx)(`span`,{className:`high`,children:VC(e.temperature,t)}),(0,C.jsx)(`span`,{className:`low`,children:VC(e.templow,t)}),(0,C.jsx)(`span`,{className:`rain`,children:e.precipitation_probability?(0,C.jsxs)(C.Fragment,{children:[(0,C.jsx)(Q,{icon:`mdi:water`}),e.precipitation_probability,` %`]}):null})]},e.datetime))})},WC=({entityId:e,temperature:t})=>{let n=X(),r=Y(),i=id(),a=J(e),o=J(`sun.sun`),s=PC(e,`hourly`),c=PC(e,`daily`),l=_p(6e5),u=a?.attributes??{},d=(s.forecast??[]).filter(e=>new Date(e.datetime).getTime()>l-36e5),f=Np(new Date(l)).getTime()+864e5,p=d.filter(e=>new Date(e.datetime).getTime()<f),m=p.length>=6?p:d.slice(0,8),h=(c.forecast??[]).slice(0,7),g=h[0],_=g?.precipitation_probability??m[0]?.precipitation_probability,v=g?.precipitation,y=e=>typeof e==`string`?kp(new Date(e),r):void 0,b=(e,t=0)=>e==null?void 0:Tp(Number(e),r,t),x=[{icon:`mdi:water-percent`,label:n(`humidity`),value:b(u.humidity)&&`${b(u.humidity)} %`},{icon:`mdi:weather-windy`,label:n(`wind`),value:b(u.wind_speed)&&`${b(u.wind_speed)} ${u.wind_speed_unit??``}${u.wind_bearing===void 0?``:` ${VS(Number(u.wind_bearing),r)}`}`},{icon:`mdi:weather-rainy`,label:n(`rain`),value:[_===void 0?null:`${_} %`,v?`${b(v,1)} ${u.precipitation_unit??`mm`}`:null].filter(Boolean).join(` · `)||void 0},{icon:`mdi:sun-wireless`,label:n(`uv_index`),value:b(u.uv_index)},{icon:`mdi:weather-sunset-up`,label:n(`sunrise`),value:y(o?.attributes.next_rising)},{icon:`mdi:weather-sunset-down`,label:n(`sunset`),value:y(o?.attributes.next_setting)}].filter(e=>e.value),S=NC(),ee=S&&S.strikes.length>0?S:null,w=typeof u.pressure==`number`?{value:u.pressure,unit:u.pressure_unit}:null,te=bC();return(0,C.jsxs)(C.Fragment,{children:[(0,C.jsxs)(FC,{children:[(0,C.jsx)(qS,{timeline:`popup`,condition:a?.state,night:i,size:G(7.5)}),(0,C.jsxs)(`div`,{children:[(0,C.jsxs)(`div`,{className:`reading`,children:[(0,C.jsx)(`span`,{className:`temperature`,children:t}),g&&(0,C.jsxs)(`div`,{className:`today`,children:[(0,C.jsxs)(`div`,{"data-tip":n(`high_today`),children:[(0,C.jsx)(Q,{className:`icon`,icon:`mdi:arrow-up-thin`}),VC(g.temperature,r)]}),(0,C.jsxs)(`div`,{"data-tip":n(`low_today`),children:[(0,C.jsx)(Q,{className:`icon`,icon:`mdi:arrow-down-thin`}),VC(g.templow,r)]})]})]}),(0,C.jsx)(`div`,{className:`condition`,children:zS(a?.state,r)}),typeof u.apparent_temperature==`number`&&(0,C.jsxs)(`div`,{className:`feels`,children:[n(`feels_like`),` `,VC(u.apparent_temperature,r)]})]}),m.length>1?(0,C.jsx)(HC,{hours:m}):(0,C.jsx)(`span`,{})]}),(x.length>0||w||te)&&(0,C.jsxs)(Om,{children:[w&&(0,C.jsx)(sC,{entityId:e,value:w.value,unit:w.unit}),te&&(0,C.jsx)(yC,{entityId:te}),S&&!ee&&(0,C.jsx)(AC,{}),x.map(e=>(0,C.jsxs)(`div`,{children:[(0,C.jsx)(Q,{className:`icon`,icon:e.icon}),(0,C.jsx)(`span`,{className:`label`,children:e.label}),(0,C.jsx)(`span`,{className:`value`,children:e.value})]},e.label))]}),ee&&(0,C.jsxs)(C.Fragment,{children:[(0,C.jsx)(IC,{children:n(`thunderstorm`)}),(0,C.jsx)(jC,{lightning:ee})]}),h.length>0&&(0,C.jsxs)(C.Fragment,{children:[(0,C.jsx)(IC,{children:n(`forecast_daily`)}),(0,C.jsx)(JS,{children:(0,C.jsx)(UC,{days:h})})]}),s.unsupported&&c.unsupported&&(0,C.jsx)(zC,{children:n(`no_forecast`)})]})};function GC(e){let[t,n]=(0,v.useState)(0),[r,i]=(0,v.useState)(0),[a,o]=(0,v.useState)(!1),s=(0,v.useRef)(null),c=e=>{r||e.pointerType===`mouse`&&e.button!==0||(s.current={id:e.pointerId,x:e.clientX,y:e.clientY,moved:!1,lastX:e.clientX,lastT:e.timeStamp,velocity:0})},l=e=>{let t=s.current;if(!t||e.pointerId!==t.id)return;let r=e.clientX-t.x;if(!t.moved){if(Math.abs(r)<8||Math.abs(r)<Math.abs(e.clientY-t.y))return;t.moved=!0,o(!0),e.currentTarget.setPointerCapture(t.id)}let i=e.timeStamp-t.lastT;i>0&&(t.velocity=(e.clientX-t.lastX)/i),t.lastX=e.clientX,t.lastT=e.timeStamp,n(r)},u=t=>{let r=s.current;if(s.current=null,!r||!r.moved)return;o(!1);let a=t.currentTarget,c=e=>{e.stopPropagation(),e.preventDefault()};a.addEventListener(`click`,c,{capture:!0,once:!0}),window.setTimeout(()=>a.removeEventListener(`click`,c,{capture:!0}),0);let l=Bd(t.clientX-r.x,a.offsetWidth,r.velocity);if(!l){n(0);return}i(l),n(l*a.offsetWidth*1.1),window.setTimeout(e,220)};return{style:{transform:t?`translateX(${t}px)`:void 0,opacity:r?0:1-Math.min(.6,Math.abs(t)/600),transition:a?`none`:`transform 0.22s ease, opacity 0.22s ease, background-color 0.2s ease`,touchAction:`pan-y`},handlers:{onPointerDown:c,onPointerMove:l,onPointerUp:u,onPointerCancel:u}}}var KC=W.article`
  display: grid;
  grid-template-columns: minmax(0, 1fr) auto;
  gap: ${G(.2)} ${G(.8)};
  padding: ${G(.8)} ${G(.8)} ${G(.8)} ${G(1)};
  cursor: grab;
  user-select: none;
  border-radius: ${G(1.2)};
  background: ${({theme:e})=>e.bubble.background};
  ${({theme:e})=>Yd(e.bubble.hover)}

  h4 {
    margin: 0;
    font-size: ${G(1.14)};
    font-weight: 600;
  }

  time {
    font-size: ${G(.9)};
    color: ${({theme:e})=>e.text.secondary};
  }

  h4,
  time,
  .message {
    grid-column: 1;
    min-width: 0;
  }

  /* Its own column, so a long line wraps before it rather than under it. */
  .message {
    font-size: ${G(1.08)};
    white-space: pre-line;
    overflow-wrap: anywhere;
    color: ${({theme:e})=>e.text.primary};
  }

  /* Centred on the whole card, however many lines the message takes. */
  button {
    grid-row: 1 / 4;
    grid-column: 2;
    align-self: center;
    width: ${G(3)};
    height: ${G(3)};
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: ${G(1.5)};
    color: ${({theme:e})=>e.text.secondary};
    ${({theme:e})=>Jd(e.bubble.hover,e.bubble.pressed)}
  }
`,qC=W.div`
  display: flex;
  justify-content: flex-end;

  button {
    padding: ${G(.4)} ${G(1)};
    border-radius: ${G(1)};
    background: ${({theme:e})=>e.bubble.background};
    font-size: ${G(1.02)};
  }
`,JC=W.p`
  color: ${({theme:e})=>e.text.secondary};
  text-align: center;
  padding: ${G(2)} 0;
`,YC=({item:e,onDismiss:t})=>{let n=X(),r=Y(),i=GC(t);return(0,C.jsxs)(KC,{style:i.style,...i.handlers,"data-glow":!0,children:[(0,C.jsx)(`h4`,{children:e.title||n(`notifications`)}),(0,C.jsx)(`button`,{type:`button`,onClick:t,"aria-label":n(`dismiss`),"data-tip":n(`dismiss`),children:(0,C.jsx)(Q,{icon:`mdi:close`})}),(0,C.jsx)(`time`,{dateTime:e.created_at,children:Mp(new Date(e.created_at),r)}),(0,C.jsx)(`p`,{className:`message`,children:e.message.replace(/\*\*|__|`/g,``)})]})},XC=({open:e,onClose:t,notifications:n,onDismiss:r,onDismissAll:i})=>{let a=X();return(0,C.jsxs)(Mf,{open:e,onClose:t,title:a(`notifications`),icon:`mdi:bell`,width:54,children:[n.length===0&&(0,C.jsx)(JC,{children:a(`no_notifications`)}),n.length>1&&(0,C.jsx)(qC,{children:(0,C.jsx)(`button`,{type:`button`,onClick:i,children:a(`dismiss_all`)})}),n.map(e=>(0,C.jsx)(YC,{item:e,onDismiss:()=>r(e.notification_id)},e.notification_id))]})},ZC={mode:`dashboard`,narrow:!1,embedded:!1},QC=new Set;function $C(e){let t={...ZC,...e};(t.mode!==ZC.mode||t.narrow!==ZC.narrow||t.embedded!==ZC.embedded)&&(ZC=t,QC.forEach(e=>e()))}function ew(){return(0,v.useSyncExternalStore)(e=>(QC.add(e),()=>QC.delete(e)),()=>ZC)}var tw=W.section`
  display: flex;
  flex-direction: column;
  gap: ${G(.6)};

  h3 {
    margin: ${G(.4)} 0 0;
    font-size: ${G(1.14)};
    font-weight: 600;
  }
`,nw=Qu`
  0%, 100% { opacity: 1; transform: scale(1); }
  50% { opacity: 0.4; transform: scale(0.7); }
`,rw=W.div`
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: ${G(.6)};
`,iw=W.p`
  font-size: ${G(.96)};
  color: ${({theme:e})=>e.text.secondary};
`,aw=W.span`
  display: inline-flex;
  align-items: center;
  gap: ${G(.4)};
  padding: ${G(.2)} ${G(.7)};
  border-radius: ${G(1)};
  background: color-mix(in srgb, ${({theme:e})=>e.colors.accent} 20%, transparent);
  color: ${({theme:e})=>e.colors.accent};
  font-size: ${G(.85)};
  font-weight: 600;

  &::before {
    content: '';
    width: ${G(.5)};
    height: ${G(.5)};
    border-radius: 50%;
    background: currentColor;
    animation: ${nw} 1.6s ease-in-out infinite;
  }
`,ow=W(iw)`
  display: flex;
  justify-content: space-between;
  gap: ${G(1)};
  margin-top: ${G(.8)};
`,sw=W.select`
  width: 100%;
  padding: ${G(.6)};
  border-radius: ${G(1)};
  border: ${({theme:e})=>e.card.border};
  background: ${({theme:e})=>e.bubble.background};
`;function cw(){window.history.pushState(null,``,`/better-wall-dashboard-editor`),window.dispatchEvent(new CustomEvent(`location-changed`,{detail:{replace:!1}}))}var lw=[`temperature`,`humidity`,`warm`,`accent`],uw=({stat:e,color:t})=>{let n=J(e.entity),r=rd(e.entity),i=Y(),[a,o]=(0,v.useState)(!1),s=e.name||n?.attributes.friendly_name||e.entity,c=e.icon||n?.attributes.icon||`mdi:chart-line`,l=Ep(n?.state,n?.attributes.unit_of_measurement,i,r);return(0,C.jsxs)(C.Fragment,{children:[(0,C.jsx)(Vb,{entityId:e.entity,name:s,state:l,icon:c,color:t,hours:24,onClick:()=>o(!0)}),(0,C.jsx)(zp,{open:a,onClose:()=>o(!1),entityId:e.entity,name:s,icon:c,color:t})]})},dw=W.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(${G(15)}, 1fr));
  gap: ${G(.6)};
`,fw=4e3,pw=({button:e})=>{let t=X(),n=Ru(),r=J(e.entity),i=Z(),[a,o]=(0,v.useState)(!1);(0,v.useEffect)(()=>{if(!a)return;let e=window.setTimeout(()=>o(!1),fw);return()=>window.clearTimeout(e)},[a]);let s=!!r&&[`on`,`off`].includes(r.state),c=r?.state===`on`,l=e.name||r?.attributes.friendly_name||e.entity,u=s&&(c?e.on_name:e.off_name)||l;return(0,C.jsx)(zf,{name:u,state:a?t(`system_button_confirm`):r?s?t(c?`on`:`off`):void 0:t(`not_found`),icon:e.icon||r?.attributes.icon||od(e.entity),iconColor:a?n.colors.warm:c?n.colors.accent:void 0,active:!s||c,lit:a||c,onClick:()=>{if(!r)return;if(e.confirm&&!a){o(!0);return}o(!1);let[t,n]=og(e.entity);i(t,n,void 0,{entity_id:e.entity})}})},mw=({embedded:e})=>{let t=X(),[n,r]=(0,v.useState)(vd),[i,a]=(0,v.useState)(()=>!!document.fullscreenElement);return(0,v.useEffect)(()=>{let e=()=>a(!!document.fullscreenElement);return document.addEventListener(`fullscreenchange`,e),()=>document.removeEventListener(`fullscreenchange`,e)},[]),(0,C.jsxs)(C.Fragment,{children:[e&&(0,C.jsx)(zf,{name:t(`kiosk_preview`),state:t(n?`kiosk_preview_hint_hidden`:`kiosk_preview_hint_shown`),icon:n?`mdi:dock-left`:`mdi:page-layout-sidebar-left`,onClick:()=>r(yd())}),document.fullscreenEnabled&&(0,C.jsx)(zf,{name:t(`fullscreen`),state:t(i?`fullscreen_on`:`fullscreen_off`),icon:i?`mdi:fullscreen-exit`:`mdi:fullscreen`,onClick:()=>void(document.fullscreenElement?document.exitFullscreen():document.documentElement.requestFullscreen())})]})},hw=({config:e})=>{let t=X(),n=Ru(),r=nd(),{view:i,preview:a,previewing:o}=Id(),{embedded:s}=ew(),[c,l]=(0,v.useState)(null),[u,d]=(0,v.useState)(!1),f=Dd();(0,v.useEffect)(()=>{r?.sendMessagePromise({type:`better_wall_dashboard/version`}).then(l).catch(()=>void 0)},[r]);let p=!!(f&&c&&c.app!==f),m=e.system.filter(e=>e.entity),h=(e.system_buttons??[]).filter(e=>e.entity);return(0,C.jsxs)(C.Fragment,{children:[m.length>0&&(0,C.jsxs)(tw,{children:[(0,C.jsx)(`h3`,{children:t(`system`)}),(0,C.jsx)(rw,{children:m.map((e,t)=>(0,C.jsx)(uw,{stat:e,color:n.colors[lw[t%lw.length]]},e.id))})]}),h.length>0&&(0,C.jsxs)(tw,{children:[(0,C.jsx)(`h3`,{children:t(`system_buttons`)}),(0,C.jsx)(dw,{children:h.map(e=>(0,C.jsx)(pw,{button:e},e.id))})]}),(0,C.jsxs)(tw,{children:[(0,C.jsx)(`h3`,{children:t(`settings`)}),(0,C.jsx)(zf,{name:t(`reload`),state:t(u?`not_found`:p?`update_available_tap`:`reload_hint`),icon:`mdi:refresh`,trailing:p?(0,C.jsx)(aw,{children:t(`update`)}):void 0,onClick:async()=>{let e=Ed(),t=null;if(e&&f){let n=new URL(e);c&&n.searchParams.set(`v`,c.app),t=n.toString()}let n=await kd(t);d(n===`missing`)}}),i?.is_admin&&(0,C.jsxs)(C.Fragment,{children:[s&&(0,C.jsx)(zf,{name:t(`edit_dashboard`),state:t(`edit_elsewhere`),icon:`mdi:view-dashboard-edit`,onClick:cw}),(0,C.jsx)(mw,{embedded:s}),i.dashboards.length>1&&(0,C.jsxs)(`label`,{children:[(0,C.jsx)(iw,{children:t(`dashboard`)}),(0,C.jsxs)(sw,{value:o??``,onChange:e=>a(e.target.value||null),children:[(0,C.jsx)(`option`,{value:``,children:`—`}),i.dashboards.map(e=>(0,C.jsx)(`option`,{value:e.id,children:e.name},e.id))]})]})]}),c&&(0,C.jsxs)(ow,{children:[(0,C.jsx)(`span`,{children:`Better Wall Dashboard`}),(0,C.jsxs)(`span`,{children:[t(`version`),` `,c.version,f?` · ${f}`:``]})]})]})]})},gw=({open:e,onClose:t,config:n})=>{let r=X();return(0,C.jsx)(Mf,{open:e,onClose:t,title:r(`settings`),icon:`mdi:cog`,width:56,children:(0,C.jsx)(hw,{config:n})})};function _w(e,t){return!t.length||t.some(t=>e.startsWith(t))}function vw(e){return e.prefixes?e.prefixes:e.prefix?[e.prefix]:[]}function yw(e){return[...new Set(e.flatMap(e=>vw(e.sidebar.notifications)))]}function bw(e,t){let[n,r]=(0,v.useState)({}),i=Z();ld(e?`notifications`:null,()=>({type:`persistent_notification/subscribe`}),e=>{r(t=>{if(e.type===`current`)return{...e.notifications};let n={...t};for(let[t,r]of Object.entries(e.notifications))e.type===`removed`?delete n[t]:n[t]=r;return n})});let a=(0,v.useMemo)(()=>Object.values(n).filter(e=>_w(e.notification_id,t)).sort((e,t)=>t.created_at.localeCompare(e.created_at)),[n,t]),o=(0,v.useCallback)(e=>i(`persistent_notification`,`dismiss`,{notification_id:e}),[i]),s=(0,v.useCallback)(()=>Promise.all(a.map(e=>o(e.notification_id))),[a,o]);return{notifications:e?a:[],dismiss:o,dismissAll:s}}var xw=W.div`
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  gap: ${G(.5)};
  padding-top: ${G(.4)};
  margin: 0 ${G(-.4)} ${G(-.3)};
`,Sw=W.button`
  flex: 1 1 auto;
  display: grid;
  /* The text gives way to the high and low, cut short, rather than pushing
     them out over the buttons beside it. */
  grid-template-columns: auto minmax(0, max-content) auto;
  justify-content: start;
  grid-template-rows: auto auto;
  column-gap: ${G(1)};
  align-items: center;
  min-width: 0;
  text-align: left;
  padding: ${G(.4)} ${G(.7)} ${G(.4)} ${G(.4)};
  border-radius: ${G(1)};
  ${({theme:e})=>Jd(e.bubble.background,e.bubble.hover)}

  > :first-child {
    grid-row: 1 / 3;
  }

  .temperature {
    font-size: ${G(1.7)};
    font-weight: 700;
    align-self: end;
    white-space: nowrap;
  }

  .condition {
    font-size: ${G(1)};
    align-self: start;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  /* Right beside now, not pushed to the far end of the button. */
  .range {
    grid-column: 3;
    grid-row: 1 / 3;
    display: flex;
    flex-direction: column;
    gap: ${G(.15)};
    font-size: ${G(1.05)};
    white-space: nowrap;
  }

  .range span {
    display: flex;
    align-items: center;
    gap: ${G(.1)};
  }

  .range .icon {
    font-size: ${G(1.3)};
    color: ${({theme:e})=>e.text.secondary};
  }
`,Cw=W.div`
  display: flex;
  gap: ${G(.2)};
  flex-shrink: 0;
`,ww=({config:e})=>{let t=J(e.entity||void 0),n=J(e.temperature||void 0),r=rd(e.temperature||void 0),i=id(),a=Y(),o=X(),[s,c]=(0,v.useState)(!1),l=(0,v.useCallback)(()=>c(!1),[]),u=PC(e.entity||void 0,`daily`).forecast?.[0];if(!e.entity&&!e.temperature)return(0,C.jsx)(`span`,{});let d=e=>e===void 0?`–`:`${Tp(e,a,0)}°`,f=n?Ep(n.state,n.attributes.unit_of_measurement,a,r):t?Ep(String(t.attributes.temperature),t.attributes.temperature_unit,a):`–`;return(0,C.jsxs)(C.Fragment,{children:[(0,C.jsxs)(Sw,{type:`button`,onClick:()=>c(!0),disabled:!e.entity,"aria-label":o(`weather`),children:[(0,C.jsx)(qS,{condition:t?.state,night:i,size:G(4.4)}),(0,C.jsx)(`span`,{className:`temperature`,children:f}),(0,C.jsx)(`span`,{className:`condition`,children:zS(t?.state,a)}),u&&(0,C.jsxs)(`span`,{className:`range`,children:[(0,C.jsxs)(`span`,{"data-tip":o(`high_today`),children:[(0,C.jsx)(Q,{className:`icon`,icon:`mdi:arrow-up-thin`}),d(u.temperature)]}),(0,C.jsxs)(`span`,{"data-tip":o(`low_today`),children:[(0,C.jsx)(Q,{className:`icon`,icon:`mdi:arrow-down-thin`}),d(u.templow)]})]})]}),e.entity&&(0,C.jsx)(BC,{open:s,onClose:l,entityId:e.entity,temperature:f})]})},Tw=(0,v.memo)(({config:e})=>{let t=X(),n=(0,v.useMemo)(()=>vw(e.notifications),[e.notifications]),{notifications:r,dismiss:i,dismissAll:a}=bw(e.notifications.enabled,n),[o,s]=(0,v.useState)(null),c=(0,v.useCallback)(()=>s(null),[]);return(0,C.jsxs)(xw,{children:[(0,C.jsx)(ww,{config:e.weather}),(0,C.jsxs)(Cw,{children:[e.notifications.enabled&&(0,C.jsx)(Ty,{icon:`mdi:bell`,label:t(`notifications`),badge:r.length,onClick:()=>s(`notifications`)}),e.settings?.enabled!==!1&&(0,C.jsx)(Ty,{icon:`mdi:cog`,label:t(`settings`),onClick:()=>s(`settings`)})]}),(0,C.jsx)(XC,{open:o===`notifications`,onClose:c,notifications:r,onDismiss:i,onDismissAll:a}),(0,C.jsx)(gw,{open:o===`settings`,onClose:c,config:e})]})}),Ew=()=>{let{sidebar:e}=Ld();return(0,C.jsxs)(ay,{as:`aside`,"data-bounce":!0,children:[(0,C.jsx)(cy,{$area:`header`,"data-area":`header`,children:(0,C.jsx)(Rb,{config:e})}),(0,C.jsxs)(oy,{children:[(0,C.jsxs)(sy,{$side:`left`,children:[(0,C.jsx)(cy,{$area:`climate`,"data-area":`climate`,children:(0,C.jsx)(Wb,{config:e.climate})}),(0,C.jsx)(cy,{$area:`persons`,"data-area":`persons`,children:(0,C.jsx)(qb,{entities:e.persons})}),(0,C.jsx)(cy,{$area:`openings`,"data-area":`openings`,children:(0,C.jsx)(cx,{entities:e.openings,view:e.openings_view})}),(0,C.jsx)(cy,{$area:`batteries`,"data-area":`batteries`,children:(0,C.jsx)(bx,{config:e.batteries})}),(0,C.jsx)(cy,{$area:`travel`,"data-area":`travel`,children:(0,C.jsx)(Xx,{config:e.travel})})]}),(0,C.jsxs)(sy,{$side:`right`,children:[(0,C.jsx)(cy,{$area:`quick`,"data-area":`quick`,children:(0,C.jsx)(iS,{actions:e.quick_actions})}),(0,C.jsx)(cy,{$area:`calendar`,"data-area":`calendar`,children:(0,C.jsx)(MS,{config:e.calendar})})]})]}),(0,C.jsx)(cy,{$area:`footer`,"data-area":`footer`,children:(0,C.jsx)(Tw,{config:e})})]})},Dw=Qu`
  0%, 100% { opacity: 0.35; }
  50% { opacity: 1; }
`,Ow=W.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 16px;
  color: rgba(255, 255, 255, 0.7);
  font-size: 15px;
  text-align: center;
  padding: 24px;

  .action {
    padding: 10px 20px;
    border-radius: 20px;
    background: rgba(255, 255, 255, 0.1);
    color: rgba(255, 255, 255, 0.92);
    font: inherit;
  }

  .mark {
    width: 64px;
    height: 64px;
    animation: ${Dw} 1.6s ease-in-out infinite;
  }
`,kw=({message:e,children:t})=>(0,C.jsxs)(Ow,{children:[(0,C.jsx)(`svg`,{className:`mark`,viewBox:`0 0 24 24`,fill:`currentColor`,"aria-hidden":`true`,children:(0,C.jsx)(`path`,{d:`M3.5 4h17A2.5 2.5 0 0 1 23 6.5v11a2.5 2.5 0 0 1-2.5 2.5h-17A2.5 2.5 0 0 1 1 17.5v-11A2.5 2.5 0 0 1 3.5 4z M2.8 5.8v12.4h18.4V5.8z M4.6 7.6h3.8v8.8H4.6z M10 7.6h4.3v3.9H10z M15.3 7.6h4.3v3.9h-4.3z M10 12.5h4.3v3.9H10z M15.3 12.5h4.3v3.9h-4.3z`})}),e&&(0,C.jsx)(`p`,{children:e}),t]}),Aw=W.div`
  position: relative;
  width: 100%;
  height: 100%;
  overflow: hidden;
  /* Until the first measurement; see useUnit. */
  --u: 12px;
  isolation: isolate;
  /* A wall tablet is touched, never read by selecting: a long press on a
     tile or a key must not highlight its text. */
  user-select: none;
  -webkit-user-select: none;
  -webkit-touch-callout: none;
`,jw=W.div`
  position: absolute;
  inset: 0;
  z-index: -1;
  background-color: ${({$color:e})=>e??`#131313`};
  overflow: hidden;

  ${({$image:e,$dim:t=0,$blur:n=0})=>e&&U`
      &::before {
        content: '';
        position: absolute;
        /* Blur pulls the edges in; oversize so the corners stay covered. */
        inset: -${n*2}px;
        background-image: url('${e}');
        background-size: cover;
        background-position: center;
        filter: ${n?`blur(${n}px)`:`none`};
      }

      &::after {
        content: '';
        position: absolute;
        inset: 0;
        background: rgba(10, 10, 10, ${t});
      }
    `}
`,Mw=W.div`
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-columns: clamp(${G(24)}, 24%, ${G(36)}) minmax(0, 1fr);
  grid-template-rows: minmax(0, 1fr);
  gap: ${G(1.1)};
  /* The notch and rounded corners of a tablet held in portrait. */
  padding: max(${G(1.1)}, env(safe-area-inset-top)) max(${G(1.1)}, env(safe-area-inset-right)) max(${G(1.1)}, env(safe-area-inset-bottom))
    max(${G(1.1)}, env(safe-area-inset-left));

  [data-orientation='portrait'] > & {
    grid-template-columns: minmax(0, 1fr);
    grid-template-rows: auto minmax(0, 1fr);
  }
`;function Nw(e,t){let n=t>e,r=8+.007*(n?e:t),i=n?e/58:e/94;return Math.max(11,Math.min(22,r,i))}function Pw(e){(0,v.useLayoutEffect)(()=>{let t=e.current;if(!t)return;let n=()=>{let e=t.offsetWidth,n=t.offsetHeight;e&&n&&(t.style.setProperty(`--u`,`${Nw(e,n).toFixed(2)}px`),t.dataset.orientation=n>e?`portrait`:`landscape`)};n();let r=new ResizeObserver(n);return r.observe(t),()=>r.disconnect()},[e])}function Fw(e){if(e.pointerType!==`mouse`)return;let t=e.target.closest?.(`button, [role="button"], [data-glow]`);if(!t)return;let n=t.getBoundingClientRect();t.style.setProperty(`--glow-x`,`${e.clientX-n.left}px`),t.style.setProperty(`--glow-y`,`${e.clientY-n.top}px`)}function Iw(e){for(let t of e.nativeEvent.composedPath()){if(t===e.currentTarget)return null;if(t instanceof HTMLElement&&getComputedStyle(t).getPropertyValue(`--glow`).trim()===`1`)return t.disabled?null:t}return null}function Lw(e){if(e.button!==0)return;let t=e.pointerType!==`mouse`,n=Iw(e);if(!n)return;let r=n.getBoundingClientRect(),i=e.clientX-r.left,a=e.clientY-r.top,o=Math.hypot(Math.max(i,r.width-i),Math.max(a,r.height-a));getComputedStyle(n).position===`static`&&(n.style.position=`relative`);let s=document.createElement(`span`);s.setAttribute(`aria-hidden`,`true`),s.style.cssText=`position:absolute;inset:0;border-radius:inherit;overflow:hidden;pointer-events:none;`;let c=document.createElement(`span`);c.style.cssText=[`position:absolute`,`left:${i-o}px`,`top:${a-o}px`,`width:${o*2}px`,`height:${o*2}px`,`border-radius:50%`,`background:radial-gradient(circle closest-side, rgba(255,255,255,${t?.24:.14}) 75%, rgba(255,255,255,0) 100%)`].join(`;`),s.append(c),n.append(s),c.animate([{transform:`scale(${t?.15:0})`,opacity:1},{transform:`scale(1)`,opacity:.8,offset:.7},{transform:`scale(1)`,opacity:0}],{duration:800,easing:`cubic-bezier(0.2, 0, 0.2, 1)`}).finished.catch(()=>void 0).finally(()=>s.remove())}function Rw(){zw({name:`--own-sheen`,syntax:`*`,inherits:!1}),zw({name:`--glow`,syntax:`*`,inherits:!1}),zw({name:`--dot-hole`,syntax:`<percentage>`,inherits:!1,initialValue:`70%`})}function zw(e){try{CSS.registerProperty(e)}catch{}}var Bw=[{transform:`scale(1)`,offset:0,easing:`cubic-bezier(0.33, 0, 0.2, 1)`},{transform:`scale(0.95)`,offset:.3,easing:`cubic-bezier(0.3, 1.35, 0.5, 1)`},{transform:`scale(1)`,offset:1}];function Vw(e){let t=e.target,n=t.closest(`button, [data-press]`);if(!n||t.closest(`[role="slider"]`))return;let r=t.closest(`[data-tile]`),i=r??t.closest(`[data-bounce]`);if(!i)return;let a=t.closest(`dialog`);if(a&&i.contains(a))return;let o=!r||n.hasAttribute(`data-press`)||n.parentElement===r,s=r?[...r.children].find(e=>e.contains(n))??n:n;(o?s:n).animate(Bw,{duration:560})}var Hw=`M4,1C2.89,1 2,1.89 2,3V7C2,8.11 2.89,9 4,9H1V11H13V9H10C11.11,9 12,8.11 12,7V3C12,1.89 11.11,1 10,1H4M4,3H10V7H4V3M14,13C12.89,13 12,13.89 12,15V19C12,20.11 12.89,21 14,21H11V23H23V21H20C21.11,21 22,20.11 22,19V15C22,13.89 21.11,13 20,13H14M3.88,13.46L2.46,14.88L4.59,17L2.46,19.12L3.88,20.54L6,18.41L8.12,20.54L9.54,19.12L7.41,17L9.54,14.88L8.12,13.46L6,15.59L3.88,13.46M14,15H20V19H14V15Z`,Uw=Qu`
  0%, 100% { opacity: 0.45; transform: scale(0.94); }
  50% { opacity: 1; transform: scale(1); }
`,Ww=W.dialog`
  /* A modal dialog, opened last: over the dashboard and any popup open on it,
     and the one thing that takes a touch -- everything under it is inert. */
  &[open] {
    position: fixed;
    inset: 0;
    width: 100%;
    height: 100%;
    max-width: none;
    max-height: none;
    margin: 0;
    padding: ${G(1.6)};
    border: 0;
    box-sizing: border-box;
    display: flex;
    align-items: center;
    justify-content: center;
    background: rgba(8, 8, 10, 0.72);
    backdrop-filter: blur(10px);
    -webkit-backdrop-filter: blur(10px);
    color: ${({theme:e})=>e.text.primary};
    font-family: ${({theme:e})=>e.font};
    user-select: none;
    -webkit-user-select: none;
  }

  &::backdrop {
    background: transparent;
  }

  .card {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: ${G(.8)};
    max-width: ${G(34)};
    padding: ${G(2.4)} ${G(2.6)};
    border-radius: ${G(1.8)};
    text-align: center;
    ${Xd(`rgba(24, 24, 28, 0.62)`)}
  }

  .mark {
    display: flex;
    align-items: center;
    justify-content: center;
    width: ${G(4.6)};
    height: ${G(4.6)};
    margin-bottom: ${G(.4)};
    border-radius: 50%;
    font-size: ${G(2.3)};
    background: color-mix(in srgb, ${({theme:e})=>e.colors.warm} 16%, transparent);
    color: ${({theme:e})=>e.colors.warm};
    animation: ${Uw} 2s ease-in-out infinite;
  }

  h2 {
    margin: 0;
    font-size: ${G(1.5)};
    font-weight: 600;
  }

  p {
    margin: 0;
    font-size: ${G(1)};
    line-height: 1.45;
    color: ${({theme:e})=>e.text.secondary};
  }

  .since {
    font-size: ${G(.9)};
    font-variant-numeric: tabular-nums;
    color: ${({theme:e})=>e.text.muted};
  }
`;function Gw(e){let t=Math.max(0,Math.floor(e/1e3)),n=e=>String(e).padStart(2,`0`),r=Math.floor(t/3600),i=Math.floor(t%3600/60);return r?`${r}:${n(i)}:${n(t%60)}`:`${i}:${n(t%60)}`}var Kw=(0,v.memo)(({since:e})=>{let t=X(),n=(0,v.useRef)(null),r=_p(1e3);return(0,v.useEffect)(()=>{let e=n.current;if(!e)return;let t=()=>{e.isConnected&&!e.open&&e.showModal()};t();let r=window.setInterval(t,500);return()=>{window.clearInterval(r),e.open&&e.close()}},[]),(0,C.jsx)(Ww,{ref:n,role:`alert`,"aria-live":`assertive`,onCancel:e=>e.preventDefault(),children:(0,C.jsxs)(`div`,{className:`card`,children:[(0,C.jsx)(`span`,{className:`mark`,children:(0,C.jsx)(`svg`,{viewBox:`0 0 24 24`,width:`1em`,height:`1em`,fill:`currentColor`,"aria-hidden":`true`,children:(0,C.jsx)(`path`,{d:Hw})})}),(0,C.jsx)(`h2`,{children:t(`connection_lost`)}),(0,C.jsx)(`p`,{children:t(`connection_lost_hint`)}),(0,C.jsx)(`span`,{className:`since`,children:t(`connection_lost_since`,{time:Gw(r-e)})})]})})}),qw=2e3;function Jw(){let e=nd(),[t,n]=(0,v.useState)(null);return(0,v.useEffect)(()=>{if(!e)return;let t=0,r=null,i=()=>{if(r!==null)return;r=Date.now();let e=r;t=window.setTimeout(()=>n(e),qw)},a=()=>{r=null,window.clearTimeout(t),n(null)};return e.addEventListener(`disconnected`,i),e.addEventListener(`reconnect-error`,i),e.addEventListener(`ready`,a),e.connected||i(),()=>{window.clearTimeout(t),e.removeEventListener(`disconnected`,i),e.removeEventListener(`reconnect-error`,i),e.removeEventListener(`ready`,a)}},[e]),t}var Yw=()=>{let{view:e,error:t}=Id(),n=X();return t?(0,C.jsx)(kw,{message:t===`not_loaded`||t===`unknown_command`?n(`not_loaded`):t}):e?(0,C.jsx)(Xw,{}):(0,C.jsx)(kw,{message:n(`loading`)})},Xw=()=>{let e=(0,v.useRef)(null),{view:t}=Id();Pw(e);let n=t.dashboard.background,r=pv(n.image),i=n.mode===`color`,a=Jw();return(0,C.jsxs)(Aw,{ref:e,onPointerMove:Fw,onPointerDown:Lw,onClick:Vw,children:[i?(0,C.jsx)(jw,{$color:n.color}):(0,C.jsx)(jw,{$image:r,$dim:n.dim,$blur:n.blur}),(0,C.jsxs)(Mw,{children:[(0,C.jsx)(Ew,{}),(0,C.jsx)(iy,{})]}),a!==null&&(0,C.jsx)(Kw,{since:a})]})};function Zw(e,t=3){return(0,v.lazy)(async()=>{for(let n=1;;n+=1)try{return await e()}catch(e){if(n>=t)throw e;await new Promise(e=>setTimeout(e,1e3*n))}})}var Qw=350,$w=8,eT=W.div`
  &:popover-open {
    position: fixed;
    inset: auto;
    margin: 0;
    max-width: min(320px, calc(100vw - 16px));
    padding: 5px 10px;
    border-radius: 8px;
    border: 1px solid rgba(255, 255, 255, 0.1);
    background: rgba(18, 18, 22, 0.92);
    color: rgba(255, 255, 255, 0.92);
    font: 500 13px/1.35 var(--ha-font-family-body, Roboto, Noto, sans-serif);
    box-shadow: 0 4px 16px rgba(0, 0, 0, 0.4);
    pointer-events: none;
    white-space: pre-line;
    overflow: hidden;
  }
`;function tT(e){for(let t of e.composedPath())if(t instanceof Element&&t.hasAttribute(`data-tip`))return t;return null}var nT=()=>{let e=(0,v.useRef)(null);return(0,v.useEffect)(()=>{let t=e.current;if(!t?.showPopover)return;let n=null,r=0,i=()=>{window.clearTimeout(r),n=null,t.matches(`:popover-open`)&&t.hidePopover()},a=e=>{let n=e.getAttribute(`data-tip`);if(!n||!e.isConnected||!t.isConnected)return;t.textContent=n,t.matches(`:popover-open`)&&t.hidePopover(),t.showPopover();let r=e.getBoundingClientRect(),i=t.offsetWidth,a=t.offsetHeight,o=Math.min(window.innerWidth-i-$w,Math.max($w,r.left+r.width/2-i/2)),s=r.top-a-$w>=$w?r.top-a-$w:r.bottom+$w;t.style.left=`${o}px`,t.style.top=`${s}px`},o=null,s=e=>{if(e.pointerType!==`mouse`)return;let t=e.composedPath()[0]??null;if(t===o)return;o=t;let s=tT(e);s!==n&&(i(),s&&(n=s,r=window.setTimeout(()=>a(s),Qw)))},c=e=>{e.relatedTarget||i()},l=()=>i();return window.addEventListener(`pointermove`,s,!0),window.addEventListener(`pointerout`,c,!0),window.addEventListener(`pointerdown`,i,!0),window.addEventListener(`wheel`,l,{capture:!0,passive:!0}),window.addEventListener(`keydown`,i,!0),()=>{i(),window.removeEventListener(`pointermove`,s,!0),window.removeEventListener(`pointerout`,c,!0),window.removeEventListener(`pointerdown`,i,!0),window.removeEventListener(`wheel`,l,{capture:!0}),window.removeEventListener(`keydown`,i,!0)}},[]),(0,C.jsx)(eT,{ref:e,popover:`manual`,role:`tooltip`})},rT=15e3,iT=class extends v.Component{state={failed:!1};timer=0;static getDerivedStateFromError(){return{failed:!0}}componentDidCatch(e,t){console.error(`Better Wall Dashboard failed to draw`,e,t.componentStack),this.props.autoReload&&(this.timer=window.setTimeout(()=>window.location.reload(),rT))}componentWillUnmount(){window.clearTimeout(this.timer)}render(){if(!this.state.failed)return this.props.children;let e=navigator.language;return(0,C.jsx)(kw,{message:q(e,this.props.autoReload?`app_error_reloading`:`app_error`),children:(0,C.jsx)(`button`,{type:`button`,className:`action`,onClick:()=>window.location.reload(),children:q(e,`reload`)})})}},aT=Zw(()=>A(()=>import(`./EditorPage-B1QrDrp3.js`),[],import.meta.url)),oT=()=>{let{mode:e}=ew();return e===`editor`?(0,C.jsx)(iT,{autoReload:!1,children:(0,C.jsx)(v.Suspense,{fallback:(0,C.jsx)(kw,{}),children:(0,C.jsx)(aT,{})})},`editor`):(0,C.jsx)(iT,{autoReload:!0,children:(0,C.jsx)(Pd,{children:(0,C.jsx)(Yw,{})})},`dashboard`)},sT=({hassUrl:e,hassToken:t,embedded:n,styleTarget:r})=>{let i=(0,v.useMemo)(()=>ct({key:`bwd`,container:r,speedy:!1}),[r]);return(0,C.jsx)(Iu,{target:r,disableCSSOMInjection:!0,children:(0,C.jsx)(fi,{value:i,children:(0,C.jsxs)(zu,{theme:$u,children:[(0,C.jsx)(ed,{}),(0,C.jsx)(nT,{}),(0,C.jsx)(Ws,{hassUrl:e,hassToken:t,loading:(0,C.jsx)(kw,{}),wrapperProps:{className:`bwd-connect`},options:{handleResumeOptions:{suspendWhenHidden:!n}},children:(0,C.jsx)(oT,{})})]})})})},cT=null,lT=`
  :host {
    display: block;
    position: relative;
    width: 100%;
    height: 100vh;
    height: 100dvh;
    overflow: hidden;
    background: #111;
  }
  .bwd-host, .bwd-root { width: 100%; height: 100%; }
`;function uT(e,t,n=`dashboard`){let r=e.shadowRoot??e.attachShadow({mode:`open`});if(!r.querySelector(`style[data-host]`)){let e=document.createElement(`style`);e.dataset.host=``,e.textContent=lT,r.append(e)}if(!cT){cT=document.createElement(`div`),cT.className=`bwd-host`;let e=document.createElement(`div`),n=document.createElement(`div`);n.className=`bwd-root`,cT.append(e,n),(0,y.createRoot)(n).render((0,C.jsx)(sT,{...t,styleTarget:e}))}r.append(cT),dT(cT),$C({mode:n,embedded:t.embedded}),gd(n===`dashboard`)}function dT(e){for(let t of e.querySelectorAll(`dialog[open]`))t.matches(`:modal`)||(t.removeAttribute(`open`),t.showModal())}function fT(e){cT&&e.shadowRoot?.contains(cT)&&gd(!1)}var pT=null,mT=new Set;function hT(e){pT=e,mT.forEach(t=>t(e))}function gT(){return pT}function _T(e){return mT.add(e),()=>mT.delete(e)}function vT(e,t){class n extends HTMLElement{route;panel;_narrow=!1;_hass=null;get hass(){return this._hass}set hass(e){this._hass=e,this.isConnected&&hT(e)}get narrow(){return this._narrow}set narrow(e){this._narrow=!!e,this.isConnected&&$C({narrow:this._narrow})}connectedCallback(){for(let e of[`narrow`,`hass`]){if(!Object.prototype.hasOwnProperty.call(this,e))continue;let t=this[e];delete this[e],this[e]=t}uT(this,{hassUrl:window.location.origin,embedded:!0},t),$C({narrow:this._narrow}),hT(this._hass)}disconnectedCallback(){fT(this)}}customElements.get(e)||customElements.define(e,n)}Td(globalThis.__betterWallDashboardEntry??import.meta.url),Rw(),vT(`better-wall-dashboard-panel`,`dashboard`),vT(`better-wall-dashboard-editor`,`editor`);export{Dd as A,W as B,Uh as C,Up as D,fm as E,od as F,S as H,nd as I,J as L,Ed as M,_d as N,Q as O,sd as P,X as R,Xh as S,um as T,f as U,R as V,c as W,S_ as _,yw as a,Hh as b,lx as c,kv as d,Av as f,o_ as g,x_ as h,vw as i,kd as j,Fd as k,dx as l,b_ as m,_T as n,ew as o,l_ as p,Xw as r,aS as s,gT as t,$b as u,lg as v,qh as w,Wh as x,xg as y,U as z};