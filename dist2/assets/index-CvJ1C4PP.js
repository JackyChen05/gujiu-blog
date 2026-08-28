var W0=Object.defineProperty;var zs=n=>{throw TypeError(n)};var G0=(n,e,t)=>e in n?W0(n,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):n[e]=t;var F=(n,e,t)=>G0(n,typeof e!="symbol"?e+"":e,t),H0=(n,e,t)=>e.has(n)||zs("Cannot "+t);var Ls=(n,e,t)=>e.has(n)?zs("Cannot add the same private member more than once"):e instanceof WeakSet?e.add(n):e.set(n,t);var Er=(n,e,t)=>(H0(n,e,"access private method"),t);function Q0(n,e){for(var t=0;t<e.length;t++){const r=e[t];if(typeof r!="string"&&!Array.isArray(r)){for(const l in r)if(l!=="default"&&!(l in n)){const i=Object.getOwnPropertyDescriptor(r,l);i&&Object.defineProperty(n,l,i.get?i:{enumerable:!0,get:()=>r[l]})}}}return Object.freeze(Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}))}(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))r(l);new MutationObserver(l=>{for(const i of l)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function t(l){const i={};return l.integrity&&(i.integrity=l.integrity),l.referrerPolicy&&(i.referrerPolicy=l.referrerPolicy),l.crossOrigin==="use-credentials"?i.credentials="include":l.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(l){if(l.ep)return;l.ep=!0;const i=t(l);fetch(l.href,i)}})();function K0(n){return n&&n.__esModule&&Object.prototype.hasOwnProperty.call(n,"default")?n.default:n}var lu={exports:{}},Ll={},iu={exports:{}},R={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var yr=Symbol.for("react.element"),X0=Symbol.for("react.portal"),Z0=Symbol.for("react.fragment"),Y0=Symbol.for("react.strict_mode"),q0=Symbol.for("react.profiler"),J0=Symbol.for("react.provider"),b0=Symbol.for("react.context"),nf=Symbol.for("react.forward_ref"),ef=Symbol.for("react.suspense"),tf=Symbol.for("react.memo"),rf=Symbol.for("react.lazy"),Ds=Symbol.iterator;function lf(n){return n===null||typeof n!="object"?null:(n=Ds&&n[Ds]||n["@@iterator"],typeof n=="function"?n:null)}var ou={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},su=Object.assign,au={};function It(n,e,t){this.props=n,this.context=e,this.refs=au,this.updater=t||ou}It.prototype.isReactComponent={};It.prototype.setState=function(n,e){if(typeof n!="object"&&typeof n!="function"&&n!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,n,e,"setState")};It.prototype.forceUpdate=function(n){this.updater.enqueueForceUpdate(this,n,"forceUpdate")};function uu(){}uu.prototype=It.prototype;function Eo(n,e,t){this.props=n,this.context=e,this.refs=au,this.updater=t||ou}var To=Eo.prototype=new uu;To.constructor=Eo;su(To,It.prototype);To.isPureReactComponent=!0;var js=Array.isArray,cu=Object.prototype.hasOwnProperty,_o={current:null},fu={key:!0,ref:!0,__self:!0,__source:!0};function du(n,e,t){var r,l={},i=null,o=null;if(e!=null)for(r in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(i=""+e.key),e)cu.call(e,r)&&!fu.hasOwnProperty(r)&&(l[r]=e[r]);var s=arguments.length-2;if(s===1)l.children=t;else if(1<s){for(var a=Array(s),u=0;u<s;u++)a[u]=arguments[u+2];l.children=a}if(n&&n.defaultProps)for(r in s=n.defaultProps,s)l[r]===void 0&&(l[r]=s[r]);return{$$typeof:yr,type:n,key:i,ref:o,props:l,_owner:_o.current}}function of(n,e){return{$$typeof:yr,type:n.type,key:e,ref:n.ref,props:n.props,_owner:n._owner}}function No(n){return typeof n=="object"&&n!==null&&n.$$typeof===yr}function sf(n){var e={"=":"=0",":":"=2"};return"$"+n.replace(/[=:]/g,function(t){return e[t]})}var Ms=/\/+/g;function ei(n,e){return typeof n=="object"&&n!==null&&n.key!=null?sf(""+n.key):e.toString(36)}function Xr(n,e,t,r,l){var i=typeof n;(i==="undefined"||i==="boolean")&&(n=null);var o=!1;if(n===null)o=!0;else switch(i){case"string":case"number":o=!0;break;case"object":switch(n.$$typeof){case yr:case X0:o=!0}}if(o)return o=n,l=l(o),n=r===""?"."+ei(o,0):r,js(l)?(t="",n!=null&&(t=n.replace(Ms,"$&/")+"/"),Xr(l,e,t,"",function(u){return u})):l!=null&&(No(l)&&(l=of(l,t+(!l.key||o&&o.key===l.key?"":(""+l.key).replace(Ms,"$&/")+"/")+n)),e.push(l)),1;if(o=0,r=r===""?".":r+":",js(n))for(var s=0;s<n.length;s++){i=n[s];var a=r+ei(i,s);o+=Xr(i,e,t,a,l)}else if(a=lf(n),typeof a=="function")for(n=a.call(n),s=0;!(i=n.next()).done;)i=i.value,a=r+ei(i,s++),o+=Xr(i,e,t,a,l);else if(i==="object")throw e=String(n),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return o}function Tr(n,e,t){if(n==null)return n;var r=[],l=0;return Xr(n,r,"","",function(i){return e.call(t,i,l++)}),r}function af(n){if(n._status===-1){var e=n._result;e=e(),e.then(function(t){(n._status===0||n._status===-1)&&(n._status=1,n._result=t)},function(t){(n._status===0||n._status===-1)&&(n._status=2,n._result=t)}),n._status===-1&&(n._status=0,n._result=e)}if(n._status===1)return n._result.default;throw n._result}var pn={current:null},Zr={transition:null},uf={ReactCurrentDispatcher:pn,ReactCurrentBatchConfig:Zr,ReactCurrentOwner:_o};function pu(){throw Error("act(...) is not supported in production builds of React.")}R.Children={map:Tr,forEach:function(n,e,t){Tr(n,function(){e.apply(this,arguments)},t)},count:function(n){var e=0;return Tr(n,function(){e++}),e},toArray:function(n){return Tr(n,function(e){return e})||[]},only:function(n){if(!No(n))throw Error("React.Children.only expected to receive a single React element child.");return n}};R.Component=It;R.Fragment=Z0;R.Profiler=q0;R.PureComponent=Eo;R.StrictMode=Y0;R.Suspense=ef;R.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=uf;R.act=pu;R.cloneElement=function(n,e,t){if(n==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+n+".");var r=su({},n.props),l=n.key,i=n.ref,o=n._owner;if(e!=null){if(e.ref!==void 0&&(i=e.ref,o=_o.current),e.key!==void 0&&(l=""+e.key),n.type&&n.type.defaultProps)var s=n.type.defaultProps;for(a in e)cu.call(e,a)&&!fu.hasOwnProperty(a)&&(r[a]=e[a]===void 0&&s!==void 0?s[a]:e[a])}var a=arguments.length-2;if(a===1)r.children=t;else if(1<a){s=Array(a);for(var u=0;u<a;u++)s[u]=arguments[u+2];r.children=s}return{$$typeof:yr,type:n.type,key:l,ref:i,props:r,_owner:o}};R.createContext=function(n){return n={$$typeof:b0,_currentValue:n,_currentValue2:n,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},n.Provider={$$typeof:J0,_context:n},n.Consumer=n};R.createElement=du;R.createFactory=function(n){var e=du.bind(null,n);return e.type=n,e};R.createRef=function(){return{current:null}};R.forwardRef=function(n){return{$$typeof:nf,render:n}};R.isValidElement=No;R.lazy=function(n){return{$$typeof:rf,_payload:{_status:-1,_result:n},_init:af}};R.memo=function(n,e){return{$$typeof:tf,type:n,compare:e===void 0?null:e}};R.startTransition=function(n){var e=Zr.transition;Zr.transition={};try{n()}finally{Zr.transition=e}};R.unstable_act=pu;R.useCallback=function(n,e){return pn.current.useCallback(n,e)};R.useContext=function(n){return pn.current.useContext(n)};R.useDebugValue=function(){};R.useDeferredValue=function(n){return pn.current.useDeferredValue(n)};R.useEffect=function(n,e){return pn.current.useEffect(n,e)};R.useId=function(){return pn.current.useId()};R.useImperativeHandle=function(n,e,t){return pn.current.useImperativeHandle(n,e,t)};R.useInsertionEffect=function(n,e){return pn.current.useInsertionEffect(n,e)};R.useLayoutEffect=function(n,e){return pn.current.useLayoutEffect(n,e)};R.useMemo=function(n,e){return pn.current.useMemo(n,e)};R.useReducer=function(n,e,t){return pn.current.useReducer(n,e,t)};R.useRef=function(n){return pn.current.useRef(n)};R.useState=function(n){return pn.current.useState(n)};R.useSyncExternalStore=function(n,e,t){return pn.current.useSyncExternalStore(n,e,t)};R.useTransition=function(){return pn.current.useTransition()};R.version="18.3.1";iu.exports=R;var S=iu.exports;const hu=K0(S),cf=Q0({__proto__:null,default:hu},[S]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ff=S,df=Symbol.for("react.element"),pf=Symbol.for("react.fragment"),hf=Object.prototype.hasOwnProperty,gf=ff.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,mf={key:!0,ref:!0,__self:!0,__source:!0};function gu(n,e,t){var r,l={},i=null,o=null;t!==void 0&&(i=""+t),e.key!==void 0&&(i=""+e.key),e.ref!==void 0&&(o=e.ref);for(r in e)hf.call(e,r)&&!mf.hasOwnProperty(r)&&(l[r]=e[r]);if(n&&n.defaultProps)for(r in e=n.defaultProps,e)l[r]===void 0&&(l[r]=e[r]);return{$$typeof:df,type:n,key:i,ref:o,props:l,_owner:gf.current}}Ll.Fragment=pf;Ll.jsx=gu;Ll.jsxs=gu;lu.exports=Ll;var x=lu.exports,Ei={},mu={exports:{}},Pn={},vu={exports:{}},yu={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(n){function e(C,_){var N=C.length;C.push(_);n:for(;0<N;){var X=N-1>>>1,nn=C[X];if(0<l(nn,_))C[X]=_,C[N]=nn,N=X;else break n}}function t(C){return C.length===0?null:C[0]}function r(C){if(C.length===0)return null;var _=C[0],N=C.pop();if(N!==_){C[0]=N;n:for(var X=0,nn=C.length,Cr=nn>>>1;X<Cr;){var Ee=2*(X+1)-1,ni=C[Ee],Te=Ee+1,Or=C[Te];if(0>l(ni,N))Te<nn&&0>l(Or,ni)?(C[X]=Or,C[Te]=N,X=Te):(C[X]=ni,C[Ee]=N,X=Ee);else if(Te<nn&&0>l(Or,N))C[X]=Or,C[Te]=N,X=Te;else break n}}return _}function l(C,_){var N=C.sortIndex-_.sortIndex;return N!==0?N:C.id-_.id}if(typeof performance=="object"&&typeof performance.now=="function"){var i=performance;n.unstable_now=function(){return i.now()}}else{var o=Date,s=o.now();n.unstable_now=function(){return o.now()-s}}var a=[],u=[],f=1,d=null,p=3,m=!1,w=!1,y=!1,A=typeof setTimeout=="function"?setTimeout:null,h=typeof clearTimeout=="function"?clearTimeout:null,c=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function g(C){for(var _=t(u);_!==null;){if(_.callback===null)r(u);else if(_.startTime<=C)r(u),_.sortIndex=_.expirationTime,e(a,_);else break;_=t(u)}}function v(C){if(y=!1,g(C),!w)if(t(a)!==null)w=!0,Jl(I);else{var _=t(u);_!==null&&bl(v,_.startTime-C)}}function I(C,_){w=!1,y&&(y=!1,h(T),T=-1),m=!0;var N=p;try{for(g(_),d=t(a);d!==null&&(!(d.expirationTime>_)||C&&!zn());){var X=d.callback;if(typeof X=="function"){d.callback=null,p=d.priorityLevel;var nn=X(d.expirationTime<=_);_=n.unstable_now(),typeof nn=="function"?d.callback=nn:d===t(a)&&r(a),g(_)}else r(a);d=t(a)}if(d!==null)var Cr=!0;else{var Ee=t(u);Ee!==null&&bl(v,Ee.startTime-_),Cr=!1}return Cr}finally{d=null,p=N,m=!1}}var O=!1,E=null,T=-1,K=5,z=-1;function zn(){return!(n.unstable_now()-z<K)}function Ot(){if(E!==null){var C=n.unstable_now();z=C;var _=!0;try{_=E(!0,C)}finally{_?Et():(O=!1,E=null)}}else O=!1}var Et;if(typeof c=="function")Et=function(){c(Ot)};else if(typeof MessageChannel<"u"){var Rs=new MessageChannel,V0=Rs.port2;Rs.port1.onmessage=Ot,Et=function(){V0.postMessage(null)}}else Et=function(){A(Ot,0)};function Jl(C){E=C,O||(O=!0,Et())}function bl(C,_){T=A(function(){C(n.unstable_now())},_)}n.unstable_IdlePriority=5,n.unstable_ImmediatePriority=1,n.unstable_LowPriority=4,n.unstable_NormalPriority=3,n.unstable_Profiling=null,n.unstable_UserBlockingPriority=2,n.unstable_cancelCallback=function(C){C.callback=null},n.unstable_continueExecution=function(){w||m||(w=!0,Jl(I))},n.unstable_forceFrameRate=function(C){0>C||125<C?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):K=0<C?Math.floor(1e3/C):5},n.unstable_getCurrentPriorityLevel=function(){return p},n.unstable_getFirstCallbackNode=function(){return t(a)},n.unstable_next=function(C){switch(p){case 1:case 2:case 3:var _=3;break;default:_=p}var N=p;p=_;try{return C()}finally{p=N}},n.unstable_pauseExecution=function(){},n.unstable_requestPaint=function(){},n.unstable_runWithPriority=function(C,_){switch(C){case 1:case 2:case 3:case 4:case 5:break;default:C=3}var N=p;p=C;try{return _()}finally{p=N}},n.unstable_scheduleCallback=function(C,_,N){var X=n.unstable_now();switch(typeof N=="object"&&N!==null?(N=N.delay,N=typeof N=="number"&&0<N?X+N:X):N=X,C){case 1:var nn=-1;break;case 2:nn=250;break;case 5:nn=1073741823;break;case 4:nn=1e4;break;default:nn=5e3}return nn=N+nn,C={id:f++,callback:_,priorityLevel:C,startTime:N,expirationTime:nn,sortIndex:-1},N>X?(C.sortIndex=N,e(u,C),t(a)===null&&C===t(u)&&(y?(h(T),T=-1):y=!0,bl(v,N-X))):(C.sortIndex=nn,e(a,C),w||m||(w=!0,Jl(I))),C},n.unstable_shouldYield=zn,n.unstable_wrapCallback=function(C){var _=p;return function(){var N=p;p=_;try{return C.apply(this,arguments)}finally{p=N}}}})(yu);vu.exports=yu;var vf=vu.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var yf=S,Sn=vf;function k(n){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+n,t=1;t<arguments.length;t++)e+="&args[]="+encodeURIComponent(arguments[t]);return"Minified React error #"+n+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var wu=new Set,bt={};function Qe(n,e){mt(n,e),mt(n+"Capture",e)}function mt(n,e){for(bt[n]=e,n=0;n<e.length;n++)wu.add(e[n])}var ne=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Ti=Object.prototype.hasOwnProperty,wf=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,$s={},Fs={};function kf(n){return Ti.call(Fs,n)?!0:Ti.call($s,n)?!1:wf.test(n)?Fs[n]=!0:($s[n]=!0,!1)}function xf(n,e,t,r){if(t!==null&&t.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return r?!1:t!==null?!t.acceptsBooleans:(n=n.toLowerCase().slice(0,5),n!=="data-"&&n!=="aria-");default:return!1}}function Af(n,e,t,r){if(e===null||typeof e>"u"||xf(n,e,t,r))return!0;if(r)return!1;if(t!==null)switch(t.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function hn(n,e,t,r,l,i,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=r,this.attributeNamespace=l,this.mustUseProperty=t,this.propertyName=n,this.type=e,this.sanitizeURL=i,this.removeEmptyString=o}var on={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(n){on[n]=new hn(n,0,!1,n,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(n){var e=n[0];on[e]=new hn(e,1,!1,n[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(n){on[n]=new hn(n,2,!1,n.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(n){on[n]=new hn(n,2,!1,n,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(n){on[n]=new hn(n,3,!1,n.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(n){on[n]=new hn(n,3,!0,n,null,!1,!1)});["capture","download"].forEach(function(n){on[n]=new hn(n,4,!1,n,null,!1,!1)});["cols","rows","size","span"].forEach(function(n){on[n]=new hn(n,6,!1,n,null,!1,!1)});["rowSpan","start"].forEach(function(n){on[n]=new hn(n,5,!1,n.toLowerCase(),null,!1,!1)});var Ro=/[\-:]([a-z])/g;function zo(n){return n[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(n){var e=n.replace(Ro,zo);on[e]=new hn(e,1,!1,n,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(n){var e=n.replace(Ro,zo);on[e]=new hn(e,1,!1,n,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(n){var e=n.replace(Ro,zo);on[e]=new hn(e,1,!1,n,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(n){on[n]=new hn(n,1,!1,n.toLowerCase(),null,!1,!1)});on.xlinkHref=new hn("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(n){on[n]=new hn(n,1,!1,n.toLowerCase(),null,!0,!0)});function Lo(n,e,t,r){var l=on.hasOwnProperty(e)?on[e]:null;(l!==null?l.type!==0:r||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(Af(e,t,l,r)&&(t=null),r||l===null?kf(e)&&(t===null?n.removeAttribute(e):n.setAttribute(e,""+t)):l.mustUseProperty?n[l.propertyName]=t===null?l.type===3?!1:"":t:(e=l.attributeName,r=l.attributeNamespace,t===null?n.removeAttribute(e):(l=l.type,t=l===3||l===4&&t===!0?"":""+t,r?n.setAttributeNS(r,e,t):n.setAttribute(e,t))))}var le=yf.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,_r=Symbol.for("react.element"),Je=Symbol.for("react.portal"),be=Symbol.for("react.fragment"),Do=Symbol.for("react.strict_mode"),_i=Symbol.for("react.profiler"),ku=Symbol.for("react.provider"),xu=Symbol.for("react.context"),jo=Symbol.for("react.forward_ref"),Ni=Symbol.for("react.suspense"),Ri=Symbol.for("react.suspense_list"),Mo=Symbol.for("react.memo"),se=Symbol.for("react.lazy"),Au=Symbol.for("react.offscreen"),Bs=Symbol.iterator;function Tt(n){return n===null||typeof n!="object"?null:(n=Bs&&n[Bs]||n["@@iterator"],typeof n=="function"?n:null)}var H=Object.assign,ti;function $t(n){if(ti===void 0)try{throw Error()}catch(t){var e=t.stack.trim().match(/\n( *(at )?)/);ti=e&&e[1]||""}return`
`+ti+n}var ri=!1;function li(n,e){if(!n||ri)return"";ri=!0;var t=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(u){var r=u}Reflect.construct(n,[],e)}else{try{e.call()}catch(u){r=u}n.call(e.prototype)}else{try{throw Error()}catch(u){r=u}n()}}catch(u){if(u&&r&&typeof u.stack=="string"){for(var l=u.stack.split(`
`),i=r.stack.split(`
`),o=l.length-1,s=i.length-1;1<=o&&0<=s&&l[o]!==i[s];)s--;for(;1<=o&&0<=s;o--,s--)if(l[o]!==i[s]){if(o!==1||s!==1)do if(o--,s--,0>s||l[o]!==i[s]){var a=`
`+l[o].replace(" at new "," at ");return n.displayName&&a.includes("<anonymous>")&&(a=a.replace("<anonymous>",n.displayName)),a}while(1<=o&&0<=s);break}}}finally{ri=!1,Error.prepareStackTrace=t}return(n=n?n.displayName||n.name:"")?$t(n):""}function If(n){switch(n.tag){case 5:return $t(n.type);case 16:return $t("Lazy");case 13:return $t("Suspense");case 19:return $t("SuspenseList");case 0:case 2:case 15:return n=li(n.type,!1),n;case 11:return n=li(n.type.render,!1),n;case 1:return n=li(n.type,!0),n;default:return""}}function zi(n){if(n==null)return null;if(typeof n=="function")return n.displayName||n.name||null;if(typeof n=="string")return n;switch(n){case be:return"Fragment";case Je:return"Portal";case _i:return"Profiler";case Do:return"StrictMode";case Ni:return"Suspense";case Ri:return"SuspenseList"}if(typeof n=="object")switch(n.$$typeof){case xu:return(n.displayName||"Context")+".Consumer";case ku:return(n._context.displayName||"Context")+".Provider";case jo:var e=n.render;return n=n.displayName,n||(n=e.displayName||e.name||"",n=n!==""?"ForwardRef("+n+")":"ForwardRef"),n;case Mo:return e=n.displayName||null,e!==null?e:zi(n.type)||"Memo";case se:e=n._payload,n=n._init;try{return zi(n(e))}catch{}}return null}function Sf(n){var e=n.type;switch(n.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return n=e.render,n=n.displayName||n.name||"",e.displayName||(n!==""?"ForwardRef("+n+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return zi(e);case 8:return e===Do?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function Ie(n){switch(typeof n){case"boolean":case"number":case"string":case"undefined":return n;case"object":return n;default:return""}}function Iu(n){var e=n.type;return(n=n.nodeName)&&n.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function Pf(n){var e=Iu(n)?"checked":"value",t=Object.getOwnPropertyDescriptor(n.constructor.prototype,e),r=""+n[e];if(!n.hasOwnProperty(e)&&typeof t<"u"&&typeof t.get=="function"&&typeof t.set=="function"){var l=t.get,i=t.set;return Object.defineProperty(n,e,{configurable:!0,get:function(){return l.call(this)},set:function(o){r=""+o,i.call(this,o)}}),Object.defineProperty(n,e,{enumerable:t.enumerable}),{getValue:function(){return r},setValue:function(o){r=""+o},stopTracking:function(){n._valueTracker=null,delete n[e]}}}}function Nr(n){n._valueTracker||(n._valueTracker=Pf(n))}function Su(n){if(!n)return!1;var e=n._valueTracker;if(!e)return!0;var t=e.getValue(),r="";return n&&(r=Iu(n)?n.checked?"true":"false":n.value),n=r,n!==t?(e.setValue(n),!0):!1}function ol(n){if(n=n||(typeof document<"u"?document:void 0),typeof n>"u")return null;try{return n.activeElement||n.body}catch{return n.body}}function Li(n,e){var t=e.checked;return H({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:t??n._wrapperState.initialChecked})}function Us(n,e){var t=e.defaultValue==null?"":e.defaultValue,r=e.checked!=null?e.checked:e.defaultChecked;t=Ie(e.value!=null?e.value:t),n._wrapperState={initialChecked:r,initialValue:t,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function Pu(n,e){e=e.checked,e!=null&&Lo(n,"checked",e,!1)}function Di(n,e){Pu(n,e);var t=Ie(e.value),r=e.type;if(t!=null)r==="number"?(t===0&&n.value===""||n.value!=t)&&(n.value=""+t):n.value!==""+t&&(n.value=""+t);else if(r==="submit"||r==="reset"){n.removeAttribute("value");return}e.hasOwnProperty("value")?ji(n,e.type,t):e.hasOwnProperty("defaultValue")&&ji(n,e.type,Ie(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(n.defaultChecked=!!e.defaultChecked)}function Vs(n,e,t){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var r=e.type;if(!(r!=="submit"&&r!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+n._wrapperState.initialValue,t||e===n.value||(n.value=e),n.defaultValue=e}t=n.name,t!==""&&(n.name=""),n.defaultChecked=!!n._wrapperState.initialChecked,t!==""&&(n.name=t)}function ji(n,e,t){(e!=="number"||ol(n.ownerDocument)!==n)&&(t==null?n.defaultValue=""+n._wrapperState.initialValue:n.defaultValue!==""+t&&(n.defaultValue=""+t))}var Ft=Array.isArray;function ct(n,e,t,r){if(n=n.options,e){e={};for(var l=0;l<t.length;l++)e["$"+t[l]]=!0;for(t=0;t<n.length;t++)l=e.hasOwnProperty("$"+n[t].value),n[t].selected!==l&&(n[t].selected=l),l&&r&&(n[t].defaultSelected=!0)}else{for(t=""+Ie(t),e=null,l=0;l<n.length;l++){if(n[l].value===t){n[l].selected=!0,r&&(n[l].defaultSelected=!0);return}e!==null||n[l].disabled||(e=n[l])}e!==null&&(e.selected=!0)}}function Mi(n,e){if(e.dangerouslySetInnerHTML!=null)throw Error(k(91));return H({},e,{value:void 0,defaultValue:void 0,children:""+n._wrapperState.initialValue})}function Ws(n,e){var t=e.value;if(t==null){if(t=e.children,e=e.defaultValue,t!=null){if(e!=null)throw Error(k(92));if(Ft(t)){if(1<t.length)throw Error(k(93));t=t[0]}e=t}e==null&&(e=""),t=e}n._wrapperState={initialValue:Ie(t)}}function Cu(n,e){var t=Ie(e.value),r=Ie(e.defaultValue);t!=null&&(t=""+t,t!==n.value&&(n.value=t),e.defaultValue==null&&n.defaultValue!==t&&(n.defaultValue=t)),r!=null&&(n.defaultValue=""+r)}function Gs(n){var e=n.textContent;e===n._wrapperState.initialValue&&e!==""&&e!==null&&(n.value=e)}function Ou(n){switch(n){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function $i(n,e){return n==null||n==="http://www.w3.org/1999/xhtml"?Ou(e):n==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":n}var Rr,Eu=function(n){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,t,r,l){MSApp.execUnsafeLocalFunction(function(){return n(e,t,r,l)})}:n}(function(n,e){if(n.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in n)n.innerHTML=e;else{for(Rr=Rr||document.createElement("div"),Rr.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=Rr.firstChild;n.firstChild;)n.removeChild(n.firstChild);for(;e.firstChild;)n.appendChild(e.firstChild)}});function nr(n,e){if(e){var t=n.firstChild;if(t&&t===n.lastChild&&t.nodeType===3){t.nodeValue=e;return}}n.textContent=e}var Vt={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Cf=["Webkit","ms","Moz","O"];Object.keys(Vt).forEach(function(n){Cf.forEach(function(e){e=e+n.charAt(0).toUpperCase()+n.substring(1),Vt[e]=Vt[n]})});function Tu(n,e,t){return e==null||typeof e=="boolean"||e===""?"":t||typeof e!="number"||e===0||Vt.hasOwnProperty(n)&&Vt[n]?(""+e).trim():e+"px"}function _u(n,e){n=n.style;for(var t in e)if(e.hasOwnProperty(t)){var r=t.indexOf("--")===0,l=Tu(t,e[t],r);t==="float"&&(t="cssFloat"),r?n.setProperty(t,l):n[t]=l}}var Of=H({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Fi(n,e){if(e){if(Of[n]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(k(137,n));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(k(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(k(61))}if(e.style!=null&&typeof e.style!="object")throw Error(k(62))}}function Bi(n,e){if(n.indexOf("-")===-1)return typeof e.is=="string";switch(n){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Ui=null;function $o(n){return n=n.target||n.srcElement||window,n.correspondingUseElement&&(n=n.correspondingUseElement),n.nodeType===3?n.parentNode:n}var Vi=null,ft=null,dt=null;function Hs(n){if(n=xr(n)){if(typeof Vi!="function")throw Error(k(280));var e=n.stateNode;e&&(e=Fl(e),Vi(n.stateNode,n.type,e))}}function Nu(n){ft?dt?dt.push(n):dt=[n]:ft=n}function Ru(){if(ft){var n=ft,e=dt;if(dt=ft=null,Hs(n),e)for(n=0;n<e.length;n++)Hs(e[n])}}function zu(n,e){return n(e)}function Lu(){}var ii=!1;function Du(n,e,t){if(ii)return n(e,t);ii=!0;try{return zu(n,e,t)}finally{ii=!1,(ft!==null||dt!==null)&&(Lu(),Ru())}}function er(n,e){var t=n.stateNode;if(t===null)return null;var r=Fl(t);if(r===null)return null;t=r[e];n:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(n=n.type,r=!(n==="button"||n==="input"||n==="select"||n==="textarea")),n=!r;break n;default:n=!1}if(n)return null;if(t&&typeof t!="function")throw Error(k(231,e,typeof t));return t}var Wi=!1;if(ne)try{var _t={};Object.defineProperty(_t,"passive",{get:function(){Wi=!0}}),window.addEventListener("test",_t,_t),window.removeEventListener("test",_t,_t)}catch{Wi=!1}function Ef(n,e,t,r,l,i,o,s,a){var u=Array.prototype.slice.call(arguments,3);try{e.apply(t,u)}catch(f){this.onError(f)}}var Wt=!1,sl=null,al=!1,Gi=null,Tf={onError:function(n){Wt=!0,sl=n}};function _f(n,e,t,r,l,i,o,s,a){Wt=!1,sl=null,Ef.apply(Tf,arguments)}function Nf(n,e,t,r,l,i,o,s,a){if(_f.apply(this,arguments),Wt){if(Wt){var u=sl;Wt=!1,sl=null}else throw Error(k(198));al||(al=!0,Gi=u)}}function Ke(n){var e=n,t=n;if(n.alternate)for(;e.return;)e=e.return;else{n=e;do e=n,e.flags&4098&&(t=e.return),n=e.return;while(n)}return e.tag===3?t:null}function ju(n){if(n.tag===13){var e=n.memoizedState;if(e===null&&(n=n.alternate,n!==null&&(e=n.memoizedState)),e!==null)return e.dehydrated}return null}function Qs(n){if(Ke(n)!==n)throw Error(k(188))}function Rf(n){var e=n.alternate;if(!e){if(e=Ke(n),e===null)throw Error(k(188));return e!==n?null:n}for(var t=n,r=e;;){var l=t.return;if(l===null)break;var i=l.alternate;if(i===null){if(r=l.return,r!==null){t=r;continue}break}if(l.child===i.child){for(i=l.child;i;){if(i===t)return Qs(l),n;if(i===r)return Qs(l),e;i=i.sibling}throw Error(k(188))}if(t.return!==r.return)t=l,r=i;else{for(var o=!1,s=l.child;s;){if(s===t){o=!0,t=l,r=i;break}if(s===r){o=!0,r=l,t=i;break}s=s.sibling}if(!o){for(s=i.child;s;){if(s===t){o=!0,t=i,r=l;break}if(s===r){o=!0,r=i,t=l;break}s=s.sibling}if(!o)throw Error(k(189))}}if(t.alternate!==r)throw Error(k(190))}if(t.tag!==3)throw Error(k(188));return t.stateNode.current===t?n:e}function Mu(n){return n=Rf(n),n!==null?$u(n):null}function $u(n){if(n.tag===5||n.tag===6)return n;for(n=n.child;n!==null;){var e=$u(n);if(e!==null)return e;n=n.sibling}return null}var Fu=Sn.unstable_scheduleCallback,Ks=Sn.unstable_cancelCallback,zf=Sn.unstable_shouldYield,Lf=Sn.unstable_requestPaint,Z=Sn.unstable_now,Df=Sn.unstable_getCurrentPriorityLevel,Fo=Sn.unstable_ImmediatePriority,Bu=Sn.unstable_UserBlockingPriority,ul=Sn.unstable_NormalPriority,jf=Sn.unstable_LowPriority,Uu=Sn.unstable_IdlePriority,Dl=null,Qn=null;function Mf(n){if(Qn&&typeof Qn.onCommitFiberRoot=="function")try{Qn.onCommitFiberRoot(Dl,n,void 0,(n.current.flags&128)===128)}catch{}}var $n=Math.clz32?Math.clz32:Bf,$f=Math.log,Ff=Math.LN2;function Bf(n){return n>>>=0,n===0?32:31-($f(n)/Ff|0)|0}var zr=64,Lr=4194304;function Bt(n){switch(n&-n){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return n&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return n}}function cl(n,e){var t=n.pendingLanes;if(t===0)return 0;var r=0,l=n.suspendedLanes,i=n.pingedLanes,o=t&268435455;if(o!==0){var s=o&~l;s!==0?r=Bt(s):(i&=o,i!==0&&(r=Bt(i)))}else o=t&~l,o!==0?r=Bt(o):i!==0&&(r=Bt(i));if(r===0)return 0;if(e!==0&&e!==r&&!(e&l)&&(l=r&-r,i=e&-e,l>=i||l===16&&(i&4194240)!==0))return e;if(r&4&&(r|=t&16),e=n.entangledLanes,e!==0)for(n=n.entanglements,e&=r;0<e;)t=31-$n(e),l=1<<t,r|=n[t],e&=~l;return r}function Uf(n,e){switch(n){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Vf(n,e){for(var t=n.suspendedLanes,r=n.pingedLanes,l=n.expirationTimes,i=n.pendingLanes;0<i;){var o=31-$n(i),s=1<<o,a=l[o];a===-1?(!(s&t)||s&r)&&(l[o]=Uf(s,e)):a<=e&&(n.expiredLanes|=s),i&=~s}}function Hi(n){return n=n.pendingLanes&-1073741825,n!==0?n:n&1073741824?1073741824:0}function Vu(){var n=zr;return zr<<=1,!(zr&4194240)&&(zr=64),n}function oi(n){for(var e=[],t=0;31>t;t++)e.push(n);return e}function wr(n,e,t){n.pendingLanes|=e,e!==536870912&&(n.suspendedLanes=0,n.pingedLanes=0),n=n.eventTimes,e=31-$n(e),n[e]=t}function Wf(n,e){var t=n.pendingLanes&~e;n.pendingLanes=e,n.suspendedLanes=0,n.pingedLanes=0,n.expiredLanes&=e,n.mutableReadLanes&=e,n.entangledLanes&=e,e=n.entanglements;var r=n.eventTimes;for(n=n.expirationTimes;0<t;){var l=31-$n(t),i=1<<l;e[l]=0,r[l]=-1,n[l]=-1,t&=~i}}function Bo(n,e){var t=n.entangledLanes|=e;for(n=n.entanglements;t;){var r=31-$n(t),l=1<<r;l&e|n[r]&e&&(n[r]|=e),t&=~l}}var j=0;function Wu(n){return n&=-n,1<n?4<n?n&268435455?16:536870912:4:1}var Gu,Uo,Hu,Qu,Ku,Qi=!1,Dr=[],he=null,ge=null,me=null,tr=new Map,rr=new Map,ue=[],Gf="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Xs(n,e){switch(n){case"focusin":case"focusout":he=null;break;case"dragenter":case"dragleave":ge=null;break;case"mouseover":case"mouseout":me=null;break;case"pointerover":case"pointerout":tr.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":rr.delete(e.pointerId)}}function Nt(n,e,t,r,l,i){return n===null||n.nativeEvent!==i?(n={blockedOn:e,domEventName:t,eventSystemFlags:r,nativeEvent:i,targetContainers:[l]},e!==null&&(e=xr(e),e!==null&&Uo(e)),n):(n.eventSystemFlags|=r,e=n.targetContainers,l!==null&&e.indexOf(l)===-1&&e.push(l),n)}function Hf(n,e,t,r,l){switch(e){case"focusin":return he=Nt(he,n,e,t,r,l),!0;case"dragenter":return ge=Nt(ge,n,e,t,r,l),!0;case"mouseover":return me=Nt(me,n,e,t,r,l),!0;case"pointerover":var i=l.pointerId;return tr.set(i,Nt(tr.get(i)||null,n,e,t,r,l)),!0;case"gotpointercapture":return i=l.pointerId,rr.set(i,Nt(rr.get(i)||null,n,e,t,r,l)),!0}return!1}function Xu(n){var e=ze(n.target);if(e!==null){var t=Ke(e);if(t!==null){if(e=t.tag,e===13){if(e=ju(t),e!==null){n.blockedOn=e,Ku(n.priority,function(){Hu(t)});return}}else if(e===3&&t.stateNode.current.memoizedState.isDehydrated){n.blockedOn=t.tag===3?t.stateNode.containerInfo:null;return}}}n.blockedOn=null}function Yr(n){if(n.blockedOn!==null)return!1;for(var e=n.targetContainers;0<e.length;){var t=Ki(n.domEventName,n.eventSystemFlags,e[0],n.nativeEvent);if(t===null){t=n.nativeEvent;var r=new t.constructor(t.type,t);Ui=r,t.target.dispatchEvent(r),Ui=null}else return e=xr(t),e!==null&&Uo(e),n.blockedOn=t,!1;e.shift()}return!0}function Zs(n,e,t){Yr(n)&&t.delete(e)}function Qf(){Qi=!1,he!==null&&Yr(he)&&(he=null),ge!==null&&Yr(ge)&&(ge=null),me!==null&&Yr(me)&&(me=null),tr.forEach(Zs),rr.forEach(Zs)}function Rt(n,e){n.blockedOn===e&&(n.blockedOn=null,Qi||(Qi=!0,Sn.unstable_scheduleCallback(Sn.unstable_NormalPriority,Qf)))}function lr(n){function e(l){return Rt(l,n)}if(0<Dr.length){Rt(Dr[0],n);for(var t=1;t<Dr.length;t++){var r=Dr[t];r.blockedOn===n&&(r.blockedOn=null)}}for(he!==null&&Rt(he,n),ge!==null&&Rt(ge,n),me!==null&&Rt(me,n),tr.forEach(e),rr.forEach(e),t=0;t<ue.length;t++)r=ue[t],r.blockedOn===n&&(r.blockedOn=null);for(;0<ue.length&&(t=ue[0],t.blockedOn===null);)Xu(t),t.blockedOn===null&&ue.shift()}var pt=le.ReactCurrentBatchConfig,fl=!0;function Kf(n,e,t,r){var l=j,i=pt.transition;pt.transition=null;try{j=1,Vo(n,e,t,r)}finally{j=l,pt.transition=i}}function Xf(n,e,t,r){var l=j,i=pt.transition;pt.transition=null;try{j=4,Vo(n,e,t,r)}finally{j=l,pt.transition=i}}function Vo(n,e,t,r){if(fl){var l=Ki(n,e,t,r);if(l===null)mi(n,e,r,dl,t),Xs(n,r);else if(Hf(l,n,e,t,r))r.stopPropagation();else if(Xs(n,r),e&4&&-1<Gf.indexOf(n)){for(;l!==null;){var i=xr(l);if(i!==null&&Gu(i),i=Ki(n,e,t,r),i===null&&mi(n,e,r,dl,t),i===l)break;l=i}l!==null&&r.stopPropagation()}else mi(n,e,r,null,t)}}var dl=null;function Ki(n,e,t,r){if(dl=null,n=$o(r),n=ze(n),n!==null)if(e=Ke(n),e===null)n=null;else if(t=e.tag,t===13){if(n=ju(e),n!==null)return n;n=null}else if(t===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;n=null}else e!==n&&(n=null);return dl=n,null}function Zu(n){switch(n){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Df()){case Fo:return 1;case Bu:return 4;case ul:case jf:return 16;case Uu:return 536870912;default:return 16}default:return 16}}var fe=null,Wo=null,qr=null;function Yu(){if(qr)return qr;var n,e=Wo,t=e.length,r,l="value"in fe?fe.value:fe.textContent,i=l.length;for(n=0;n<t&&e[n]===l[n];n++);var o=t-n;for(r=1;r<=o&&e[t-r]===l[i-r];r++);return qr=l.slice(n,1<r?1-r:void 0)}function Jr(n){var e=n.keyCode;return"charCode"in n?(n=n.charCode,n===0&&e===13&&(n=13)):n=e,n===10&&(n=13),32<=n||n===13?n:0}function jr(){return!0}function Ys(){return!1}function Cn(n){function e(t,r,l,i,o){this._reactName=t,this._targetInst=l,this.type=r,this.nativeEvent=i,this.target=o,this.currentTarget=null;for(var s in n)n.hasOwnProperty(s)&&(t=n[s],this[s]=t?t(i):i[s]);return this.isDefaultPrevented=(i.defaultPrevented!=null?i.defaultPrevented:i.returnValue===!1)?jr:Ys,this.isPropagationStopped=Ys,this}return H(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var t=this.nativeEvent;t&&(t.preventDefault?t.preventDefault():typeof t.returnValue!="unknown"&&(t.returnValue=!1),this.isDefaultPrevented=jr)},stopPropagation:function(){var t=this.nativeEvent;t&&(t.stopPropagation?t.stopPropagation():typeof t.cancelBubble!="unknown"&&(t.cancelBubble=!0),this.isPropagationStopped=jr)},persist:function(){},isPersistent:jr}),e}var St={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(n){return n.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Go=Cn(St),kr=H({},St,{view:0,detail:0}),Zf=Cn(kr),si,ai,zt,jl=H({},kr,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Ho,button:0,buttons:0,relatedTarget:function(n){return n.relatedTarget===void 0?n.fromElement===n.srcElement?n.toElement:n.fromElement:n.relatedTarget},movementX:function(n){return"movementX"in n?n.movementX:(n!==zt&&(zt&&n.type==="mousemove"?(si=n.screenX-zt.screenX,ai=n.screenY-zt.screenY):ai=si=0,zt=n),si)},movementY:function(n){return"movementY"in n?n.movementY:ai}}),qs=Cn(jl),Yf=H({},jl,{dataTransfer:0}),qf=Cn(Yf),Jf=H({},kr,{relatedTarget:0}),ui=Cn(Jf),bf=H({},St,{animationName:0,elapsedTime:0,pseudoElement:0}),nd=Cn(bf),ed=H({},St,{clipboardData:function(n){return"clipboardData"in n?n.clipboardData:window.clipboardData}}),td=Cn(ed),rd=H({},St,{data:0}),Js=Cn(rd),ld={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},id={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},od={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function sd(n){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(n):(n=od[n])?!!e[n]:!1}function Ho(){return sd}var ad=H({},kr,{key:function(n){if(n.key){var e=ld[n.key]||n.key;if(e!=="Unidentified")return e}return n.type==="keypress"?(n=Jr(n),n===13?"Enter":String.fromCharCode(n)):n.type==="keydown"||n.type==="keyup"?id[n.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Ho,charCode:function(n){return n.type==="keypress"?Jr(n):0},keyCode:function(n){return n.type==="keydown"||n.type==="keyup"?n.keyCode:0},which:function(n){return n.type==="keypress"?Jr(n):n.type==="keydown"||n.type==="keyup"?n.keyCode:0}}),ud=Cn(ad),cd=H({},jl,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),bs=Cn(cd),fd=H({},kr,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Ho}),dd=Cn(fd),pd=H({},St,{propertyName:0,elapsedTime:0,pseudoElement:0}),hd=Cn(pd),gd=H({},jl,{deltaX:function(n){return"deltaX"in n?n.deltaX:"wheelDeltaX"in n?-n.wheelDeltaX:0},deltaY:function(n){return"deltaY"in n?n.deltaY:"wheelDeltaY"in n?-n.wheelDeltaY:"wheelDelta"in n?-n.wheelDelta:0},deltaZ:0,deltaMode:0}),md=Cn(gd),vd=[9,13,27,32],Qo=ne&&"CompositionEvent"in window,Gt=null;ne&&"documentMode"in document&&(Gt=document.documentMode);var yd=ne&&"TextEvent"in window&&!Gt,qu=ne&&(!Qo||Gt&&8<Gt&&11>=Gt),na=" ",ea=!1;function Ju(n,e){switch(n){case"keyup":return vd.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function bu(n){return n=n.detail,typeof n=="object"&&"data"in n?n.data:null}var nt=!1;function wd(n,e){switch(n){case"compositionend":return bu(e);case"keypress":return e.which!==32?null:(ea=!0,na);case"textInput":return n=e.data,n===na&&ea?null:n;default:return null}}function kd(n,e){if(nt)return n==="compositionend"||!Qo&&Ju(n,e)?(n=Yu(),qr=Wo=fe=null,nt=!1,n):null;switch(n){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return qu&&e.locale!=="ko"?null:e.data;default:return null}}var xd={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function ta(n){var e=n&&n.nodeName&&n.nodeName.toLowerCase();return e==="input"?!!xd[n.type]:e==="textarea"}function nc(n,e,t,r){Nu(r),e=pl(e,"onChange"),0<e.length&&(t=new Go("onChange","change",null,t,r),n.push({event:t,listeners:e}))}var Ht=null,ir=null;function Ad(n){fc(n,0)}function Ml(n){var e=rt(n);if(Su(e))return n}function Id(n,e){if(n==="change")return e}var ec=!1;if(ne){var ci;if(ne){var fi="oninput"in document;if(!fi){var ra=document.createElement("div");ra.setAttribute("oninput","return;"),fi=typeof ra.oninput=="function"}ci=fi}else ci=!1;ec=ci&&(!document.documentMode||9<document.documentMode)}function la(){Ht&&(Ht.detachEvent("onpropertychange",tc),ir=Ht=null)}function tc(n){if(n.propertyName==="value"&&Ml(ir)){var e=[];nc(e,ir,n,$o(n)),Du(Ad,e)}}function Sd(n,e,t){n==="focusin"?(la(),Ht=e,ir=t,Ht.attachEvent("onpropertychange",tc)):n==="focusout"&&la()}function Pd(n){if(n==="selectionchange"||n==="keyup"||n==="keydown")return Ml(ir)}function Cd(n,e){if(n==="click")return Ml(e)}function Od(n,e){if(n==="input"||n==="change")return Ml(e)}function Ed(n,e){return n===e&&(n!==0||1/n===1/e)||n!==n&&e!==e}var Bn=typeof Object.is=="function"?Object.is:Ed;function or(n,e){if(Bn(n,e))return!0;if(typeof n!="object"||n===null||typeof e!="object"||e===null)return!1;var t=Object.keys(n),r=Object.keys(e);if(t.length!==r.length)return!1;for(r=0;r<t.length;r++){var l=t[r];if(!Ti.call(e,l)||!Bn(n[l],e[l]))return!1}return!0}function ia(n){for(;n&&n.firstChild;)n=n.firstChild;return n}function oa(n,e){var t=ia(n);n=0;for(var r;t;){if(t.nodeType===3){if(r=n+t.textContent.length,n<=e&&r>=e)return{node:t,offset:e-n};n=r}n:{for(;t;){if(t.nextSibling){t=t.nextSibling;break n}t=t.parentNode}t=void 0}t=ia(t)}}function rc(n,e){return n&&e?n===e?!0:n&&n.nodeType===3?!1:e&&e.nodeType===3?rc(n,e.parentNode):"contains"in n?n.contains(e):n.compareDocumentPosition?!!(n.compareDocumentPosition(e)&16):!1:!1}function lc(){for(var n=window,e=ol();e instanceof n.HTMLIFrameElement;){try{var t=typeof e.contentWindow.location.href=="string"}catch{t=!1}if(t)n=e.contentWindow;else break;e=ol(n.document)}return e}function Ko(n){var e=n&&n.nodeName&&n.nodeName.toLowerCase();return e&&(e==="input"&&(n.type==="text"||n.type==="search"||n.type==="tel"||n.type==="url"||n.type==="password")||e==="textarea"||n.contentEditable==="true")}function Td(n){var e=lc(),t=n.focusedElem,r=n.selectionRange;if(e!==t&&t&&t.ownerDocument&&rc(t.ownerDocument.documentElement,t)){if(r!==null&&Ko(t)){if(e=r.start,n=r.end,n===void 0&&(n=e),"selectionStart"in t)t.selectionStart=e,t.selectionEnd=Math.min(n,t.value.length);else if(n=(e=t.ownerDocument||document)&&e.defaultView||window,n.getSelection){n=n.getSelection();var l=t.textContent.length,i=Math.min(r.start,l);r=r.end===void 0?i:Math.min(r.end,l),!n.extend&&i>r&&(l=r,r=i,i=l),l=oa(t,i);var o=oa(t,r);l&&o&&(n.rangeCount!==1||n.anchorNode!==l.node||n.anchorOffset!==l.offset||n.focusNode!==o.node||n.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(l.node,l.offset),n.removeAllRanges(),i>r?(n.addRange(e),n.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),n.addRange(e)))}}for(e=[],n=t;n=n.parentNode;)n.nodeType===1&&e.push({element:n,left:n.scrollLeft,top:n.scrollTop});for(typeof t.focus=="function"&&t.focus(),t=0;t<e.length;t++)n=e[t],n.element.scrollLeft=n.left,n.element.scrollTop=n.top}}var _d=ne&&"documentMode"in document&&11>=document.documentMode,et=null,Xi=null,Qt=null,Zi=!1;function sa(n,e,t){var r=t.window===t?t.document:t.nodeType===9?t:t.ownerDocument;Zi||et==null||et!==ol(r)||(r=et,"selectionStart"in r&&Ko(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Qt&&or(Qt,r)||(Qt=r,r=pl(Xi,"onSelect"),0<r.length&&(e=new Go("onSelect","select",null,e,t),n.push({event:e,listeners:r}),e.target=et)))}function Mr(n,e){var t={};return t[n.toLowerCase()]=e.toLowerCase(),t["Webkit"+n]="webkit"+e,t["Moz"+n]="moz"+e,t}var tt={animationend:Mr("Animation","AnimationEnd"),animationiteration:Mr("Animation","AnimationIteration"),animationstart:Mr("Animation","AnimationStart"),transitionend:Mr("Transition","TransitionEnd")},di={},ic={};ne&&(ic=document.createElement("div").style,"AnimationEvent"in window||(delete tt.animationend.animation,delete tt.animationiteration.animation,delete tt.animationstart.animation),"TransitionEvent"in window||delete tt.transitionend.transition);function $l(n){if(di[n])return di[n];if(!tt[n])return n;var e=tt[n],t;for(t in e)if(e.hasOwnProperty(t)&&t in ic)return di[n]=e[t];return n}var oc=$l("animationend"),sc=$l("animationiteration"),ac=$l("animationstart"),uc=$l("transitionend"),cc=new Map,aa="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Pe(n,e){cc.set(n,e),Qe(e,[n])}for(var pi=0;pi<aa.length;pi++){var hi=aa[pi],Nd=hi.toLowerCase(),Rd=hi[0].toUpperCase()+hi.slice(1);Pe(Nd,"on"+Rd)}Pe(oc,"onAnimationEnd");Pe(sc,"onAnimationIteration");Pe(ac,"onAnimationStart");Pe("dblclick","onDoubleClick");Pe("focusin","onFocus");Pe("focusout","onBlur");Pe(uc,"onTransitionEnd");mt("onMouseEnter",["mouseout","mouseover"]);mt("onMouseLeave",["mouseout","mouseover"]);mt("onPointerEnter",["pointerout","pointerover"]);mt("onPointerLeave",["pointerout","pointerover"]);Qe("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Qe("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Qe("onBeforeInput",["compositionend","keypress","textInput","paste"]);Qe("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Qe("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Qe("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Ut="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),zd=new Set("cancel close invalid load scroll toggle".split(" ").concat(Ut));function ua(n,e,t){var r=n.type||"unknown-event";n.currentTarget=t,Nf(r,e,void 0,n),n.currentTarget=null}function fc(n,e){e=(e&4)!==0;for(var t=0;t<n.length;t++){var r=n[t],l=r.event;r=r.listeners;n:{var i=void 0;if(e)for(var o=r.length-1;0<=o;o--){var s=r[o],a=s.instance,u=s.currentTarget;if(s=s.listener,a!==i&&l.isPropagationStopped())break n;ua(l,s,u),i=a}else for(o=0;o<r.length;o++){if(s=r[o],a=s.instance,u=s.currentTarget,s=s.listener,a!==i&&l.isPropagationStopped())break n;ua(l,s,u),i=a}}}if(al)throw n=Gi,al=!1,Gi=null,n}function B(n,e){var t=e[no];t===void 0&&(t=e[no]=new Set);var r=n+"__bubble";t.has(r)||(dc(e,n,2,!1),t.add(r))}function gi(n,e,t){var r=0;e&&(r|=4),dc(t,n,r,e)}var $r="_reactListening"+Math.random().toString(36).slice(2);function sr(n){if(!n[$r]){n[$r]=!0,wu.forEach(function(t){t!=="selectionchange"&&(zd.has(t)||gi(t,!1,n),gi(t,!0,n))});var e=n.nodeType===9?n:n.ownerDocument;e===null||e[$r]||(e[$r]=!0,gi("selectionchange",!1,e))}}function dc(n,e,t,r){switch(Zu(e)){case 1:var l=Kf;break;case 4:l=Xf;break;default:l=Vo}t=l.bind(null,e,t,n),l=void 0,!Wi||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(l=!0),r?l!==void 0?n.addEventListener(e,t,{capture:!0,passive:l}):n.addEventListener(e,t,!0):l!==void 0?n.addEventListener(e,t,{passive:l}):n.addEventListener(e,t,!1)}function mi(n,e,t,r,l){var i=r;if(!(e&1)&&!(e&2)&&r!==null)n:for(;;){if(r===null)return;var o=r.tag;if(o===3||o===4){var s=r.stateNode.containerInfo;if(s===l||s.nodeType===8&&s.parentNode===l)break;if(o===4)for(o=r.return;o!==null;){var a=o.tag;if((a===3||a===4)&&(a=o.stateNode.containerInfo,a===l||a.nodeType===8&&a.parentNode===l))return;o=o.return}for(;s!==null;){if(o=ze(s),o===null)return;if(a=o.tag,a===5||a===6){r=i=o;continue n}s=s.parentNode}}r=r.return}Du(function(){var u=i,f=$o(t),d=[];n:{var p=cc.get(n);if(p!==void 0){var m=Go,w=n;switch(n){case"keypress":if(Jr(t)===0)break n;case"keydown":case"keyup":m=ud;break;case"focusin":w="focus",m=ui;break;case"focusout":w="blur",m=ui;break;case"beforeblur":case"afterblur":m=ui;break;case"click":if(t.button===2)break n;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":m=qs;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":m=qf;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":m=dd;break;case oc:case sc:case ac:m=nd;break;case uc:m=hd;break;case"scroll":m=Zf;break;case"wheel":m=md;break;case"copy":case"cut":case"paste":m=td;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":m=bs}var y=(e&4)!==0,A=!y&&n==="scroll",h=y?p!==null?p+"Capture":null:p;y=[];for(var c=u,g;c!==null;){g=c;var v=g.stateNode;if(g.tag===5&&v!==null&&(g=v,h!==null&&(v=er(c,h),v!=null&&y.push(ar(c,v,g)))),A)break;c=c.return}0<y.length&&(p=new m(p,w,null,t,f),d.push({event:p,listeners:y}))}}if(!(e&7)){n:{if(p=n==="mouseover"||n==="pointerover",m=n==="mouseout"||n==="pointerout",p&&t!==Ui&&(w=t.relatedTarget||t.fromElement)&&(ze(w)||w[ee]))break n;if((m||p)&&(p=f.window===f?f:(p=f.ownerDocument)?p.defaultView||p.parentWindow:window,m?(w=t.relatedTarget||t.toElement,m=u,w=w?ze(w):null,w!==null&&(A=Ke(w),w!==A||w.tag!==5&&w.tag!==6)&&(w=null)):(m=null,w=u),m!==w)){if(y=qs,v="onMouseLeave",h="onMouseEnter",c="mouse",(n==="pointerout"||n==="pointerover")&&(y=bs,v="onPointerLeave",h="onPointerEnter",c="pointer"),A=m==null?p:rt(m),g=w==null?p:rt(w),p=new y(v,c+"leave",m,t,f),p.target=A,p.relatedTarget=g,v=null,ze(f)===u&&(y=new y(h,c+"enter",w,t,f),y.target=g,y.relatedTarget=A,v=y),A=v,m&&w)e:{for(y=m,h=w,c=0,g=y;g;g=qe(g))c++;for(g=0,v=h;v;v=qe(v))g++;for(;0<c-g;)y=qe(y),c--;for(;0<g-c;)h=qe(h),g--;for(;c--;){if(y===h||h!==null&&y===h.alternate)break e;y=qe(y),h=qe(h)}y=null}else y=null;m!==null&&ca(d,p,m,y,!1),w!==null&&A!==null&&ca(d,A,w,y,!0)}}n:{if(p=u?rt(u):window,m=p.nodeName&&p.nodeName.toLowerCase(),m==="select"||m==="input"&&p.type==="file")var I=Id;else if(ta(p))if(ec)I=Od;else{I=Pd;var O=Sd}else(m=p.nodeName)&&m.toLowerCase()==="input"&&(p.type==="checkbox"||p.type==="radio")&&(I=Cd);if(I&&(I=I(n,u))){nc(d,I,t,f);break n}O&&O(n,p,u),n==="focusout"&&(O=p._wrapperState)&&O.controlled&&p.type==="number"&&ji(p,"number",p.value)}switch(O=u?rt(u):window,n){case"focusin":(ta(O)||O.contentEditable==="true")&&(et=O,Xi=u,Qt=null);break;case"focusout":Qt=Xi=et=null;break;case"mousedown":Zi=!0;break;case"contextmenu":case"mouseup":case"dragend":Zi=!1,sa(d,t,f);break;case"selectionchange":if(_d)break;case"keydown":case"keyup":sa(d,t,f)}var E;if(Qo)n:{switch(n){case"compositionstart":var T="onCompositionStart";break n;case"compositionend":T="onCompositionEnd";break n;case"compositionupdate":T="onCompositionUpdate";break n}T=void 0}else nt?Ju(n,t)&&(T="onCompositionEnd"):n==="keydown"&&t.keyCode===229&&(T="onCompositionStart");T&&(qu&&t.locale!=="ko"&&(nt||T!=="onCompositionStart"?T==="onCompositionEnd"&&nt&&(E=Yu()):(fe=f,Wo="value"in fe?fe.value:fe.textContent,nt=!0)),O=pl(u,T),0<O.length&&(T=new Js(T,n,null,t,f),d.push({event:T,listeners:O}),E?T.data=E:(E=bu(t),E!==null&&(T.data=E)))),(E=yd?wd(n,t):kd(n,t))&&(u=pl(u,"onBeforeInput"),0<u.length&&(f=new Js("onBeforeInput","beforeinput",null,t,f),d.push({event:f,listeners:u}),f.data=E))}fc(d,e)})}function ar(n,e,t){return{instance:n,listener:e,currentTarget:t}}function pl(n,e){for(var t=e+"Capture",r=[];n!==null;){var l=n,i=l.stateNode;l.tag===5&&i!==null&&(l=i,i=er(n,t),i!=null&&r.unshift(ar(n,i,l)),i=er(n,e),i!=null&&r.push(ar(n,i,l))),n=n.return}return r}function qe(n){if(n===null)return null;do n=n.return;while(n&&n.tag!==5);return n||null}function ca(n,e,t,r,l){for(var i=e._reactName,o=[];t!==null&&t!==r;){var s=t,a=s.alternate,u=s.stateNode;if(a!==null&&a===r)break;s.tag===5&&u!==null&&(s=u,l?(a=er(t,i),a!=null&&o.unshift(ar(t,a,s))):l||(a=er(t,i),a!=null&&o.push(ar(t,a,s)))),t=t.return}o.length!==0&&n.push({event:e,listeners:o})}var Ld=/\r\n?/g,Dd=/\u0000|\uFFFD/g;function fa(n){return(typeof n=="string"?n:""+n).replace(Ld,`
`).replace(Dd,"")}function Fr(n,e,t){if(e=fa(e),fa(n)!==e&&t)throw Error(k(425))}function hl(){}var Yi=null,qi=null;function Ji(n,e){return n==="textarea"||n==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var bi=typeof setTimeout=="function"?setTimeout:void 0,jd=typeof clearTimeout=="function"?clearTimeout:void 0,da=typeof Promise=="function"?Promise:void 0,Md=typeof queueMicrotask=="function"?queueMicrotask:typeof da<"u"?function(n){return da.resolve(null).then(n).catch($d)}:bi;function $d(n){setTimeout(function(){throw n})}function vi(n,e){var t=e,r=0;do{var l=t.nextSibling;if(n.removeChild(t),l&&l.nodeType===8)if(t=l.data,t==="/$"){if(r===0){n.removeChild(l),lr(e);return}r--}else t!=="$"&&t!=="$?"&&t!=="$!"||r++;t=l}while(t);lr(e)}function ve(n){for(;n!=null;n=n.nextSibling){var e=n.nodeType;if(e===1||e===3)break;if(e===8){if(e=n.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return n}function pa(n){n=n.previousSibling;for(var e=0;n;){if(n.nodeType===8){var t=n.data;if(t==="$"||t==="$!"||t==="$?"){if(e===0)return n;e--}else t==="/$"&&e++}n=n.previousSibling}return null}var Pt=Math.random().toString(36).slice(2),Wn="__reactFiber$"+Pt,ur="__reactProps$"+Pt,ee="__reactContainer$"+Pt,no="__reactEvents$"+Pt,Fd="__reactListeners$"+Pt,Bd="__reactHandles$"+Pt;function ze(n){var e=n[Wn];if(e)return e;for(var t=n.parentNode;t;){if(e=t[ee]||t[Wn]){if(t=e.alternate,e.child!==null||t!==null&&t.child!==null)for(n=pa(n);n!==null;){if(t=n[Wn])return t;n=pa(n)}return e}n=t,t=n.parentNode}return null}function xr(n){return n=n[Wn]||n[ee],!n||n.tag!==5&&n.tag!==6&&n.tag!==13&&n.tag!==3?null:n}function rt(n){if(n.tag===5||n.tag===6)return n.stateNode;throw Error(k(33))}function Fl(n){return n[ur]||null}var eo=[],lt=-1;function Ce(n){return{current:n}}function U(n){0>lt||(n.current=eo[lt],eo[lt]=null,lt--)}function $(n,e){lt++,eo[lt]=n.current,n.current=e}var Se={},cn=Ce(Se),vn=Ce(!1),Fe=Se;function vt(n,e){var t=n.type.contextTypes;if(!t)return Se;var r=n.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===e)return r.__reactInternalMemoizedMaskedChildContext;var l={},i;for(i in t)l[i]=e[i];return r&&(n=n.stateNode,n.__reactInternalMemoizedUnmaskedChildContext=e,n.__reactInternalMemoizedMaskedChildContext=l),l}function yn(n){return n=n.childContextTypes,n!=null}function gl(){U(vn),U(cn)}function ha(n,e,t){if(cn.current!==Se)throw Error(k(168));$(cn,e),$(vn,t)}function pc(n,e,t){var r=n.stateNode;if(e=e.childContextTypes,typeof r.getChildContext!="function")return t;r=r.getChildContext();for(var l in r)if(!(l in e))throw Error(k(108,Sf(n)||"Unknown",l));return H({},t,r)}function ml(n){return n=(n=n.stateNode)&&n.__reactInternalMemoizedMergedChildContext||Se,Fe=cn.current,$(cn,n),$(vn,vn.current),!0}function ga(n,e,t){var r=n.stateNode;if(!r)throw Error(k(169));t?(n=pc(n,e,Fe),r.__reactInternalMemoizedMergedChildContext=n,U(vn),U(cn),$(cn,n)):U(vn),$(vn,t)}var Zn=null,Bl=!1,yi=!1;function hc(n){Zn===null?Zn=[n]:Zn.push(n)}function Ud(n){Bl=!0,hc(n)}function Oe(){if(!yi&&Zn!==null){yi=!0;var n=0,e=j;try{var t=Zn;for(j=1;n<t.length;n++){var r=t[n];do r=r(!0);while(r!==null)}Zn=null,Bl=!1}catch(l){throw Zn!==null&&(Zn=Zn.slice(n+1)),Fu(Fo,Oe),l}finally{j=e,yi=!1}}return null}var it=[],ot=0,vl=null,yl=0,On=[],En=0,Be=null,Yn=1,qn="";function _e(n,e){it[ot++]=yl,it[ot++]=vl,vl=n,yl=e}function gc(n,e,t){On[En++]=Yn,On[En++]=qn,On[En++]=Be,Be=n;var r=Yn;n=qn;var l=32-$n(r)-1;r&=~(1<<l),t+=1;var i=32-$n(e)+l;if(30<i){var o=l-l%5;i=(r&(1<<o)-1).toString(32),r>>=o,l-=o,Yn=1<<32-$n(e)+l|t<<l|r,qn=i+n}else Yn=1<<i|t<<l|r,qn=n}function Xo(n){n.return!==null&&(_e(n,1),gc(n,1,0))}function Zo(n){for(;n===vl;)vl=it[--ot],it[ot]=null,yl=it[--ot],it[ot]=null;for(;n===Be;)Be=On[--En],On[En]=null,qn=On[--En],On[En]=null,Yn=On[--En],On[En]=null}var In=null,An=null,V=!1,Mn=null;function mc(n,e){var t=Tn(5,null,null,0);t.elementType="DELETED",t.stateNode=e,t.return=n,e=n.deletions,e===null?(n.deletions=[t],n.flags|=16):e.push(t)}function ma(n,e){switch(n.tag){case 5:var t=n.type;return e=e.nodeType!==1||t.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(n.stateNode=e,In=n,An=ve(e.firstChild),!0):!1;case 6:return e=n.pendingProps===""||e.nodeType!==3?null:e,e!==null?(n.stateNode=e,In=n,An=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(t=Be!==null?{id:Yn,overflow:qn}:null,n.memoizedState={dehydrated:e,treeContext:t,retryLane:1073741824},t=Tn(18,null,null,0),t.stateNode=e,t.return=n,n.child=t,In=n,An=null,!0):!1;default:return!1}}function to(n){return(n.mode&1)!==0&&(n.flags&128)===0}function ro(n){if(V){var e=An;if(e){var t=e;if(!ma(n,e)){if(to(n))throw Error(k(418));e=ve(t.nextSibling);var r=In;e&&ma(n,e)?mc(r,t):(n.flags=n.flags&-4097|2,V=!1,In=n)}}else{if(to(n))throw Error(k(418));n.flags=n.flags&-4097|2,V=!1,In=n}}}function va(n){for(n=n.return;n!==null&&n.tag!==5&&n.tag!==3&&n.tag!==13;)n=n.return;In=n}function Br(n){if(n!==In)return!1;if(!V)return va(n),V=!0,!1;var e;if((e=n.tag!==3)&&!(e=n.tag!==5)&&(e=n.type,e=e!=="head"&&e!=="body"&&!Ji(n.type,n.memoizedProps)),e&&(e=An)){if(to(n))throw vc(),Error(k(418));for(;e;)mc(n,e),e=ve(e.nextSibling)}if(va(n),n.tag===13){if(n=n.memoizedState,n=n!==null?n.dehydrated:null,!n)throw Error(k(317));n:{for(n=n.nextSibling,e=0;n;){if(n.nodeType===8){var t=n.data;if(t==="/$"){if(e===0){An=ve(n.nextSibling);break n}e--}else t!=="$"&&t!=="$!"&&t!=="$?"||e++}n=n.nextSibling}An=null}}else An=In?ve(n.stateNode.nextSibling):null;return!0}function vc(){for(var n=An;n;)n=ve(n.nextSibling)}function yt(){An=In=null,V=!1}function Yo(n){Mn===null?Mn=[n]:Mn.push(n)}var Vd=le.ReactCurrentBatchConfig;function Lt(n,e,t){if(n=t.ref,n!==null&&typeof n!="function"&&typeof n!="object"){if(t._owner){if(t=t._owner,t){if(t.tag!==1)throw Error(k(309));var r=t.stateNode}if(!r)throw Error(k(147,n));var l=r,i=""+n;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===i?e.ref:(e=function(o){var s=l.refs;o===null?delete s[i]:s[i]=o},e._stringRef=i,e)}if(typeof n!="string")throw Error(k(284));if(!t._owner)throw Error(k(290,n))}return n}function Ur(n,e){throw n=Object.prototype.toString.call(e),Error(k(31,n==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":n))}function ya(n){var e=n._init;return e(n._payload)}function yc(n){function e(h,c){if(n){var g=h.deletions;g===null?(h.deletions=[c],h.flags|=16):g.push(c)}}function t(h,c){if(!n)return null;for(;c!==null;)e(h,c),c=c.sibling;return null}function r(h,c){for(h=new Map;c!==null;)c.key!==null?h.set(c.key,c):h.set(c.index,c),c=c.sibling;return h}function l(h,c){return h=xe(h,c),h.index=0,h.sibling=null,h}function i(h,c,g){return h.index=g,n?(g=h.alternate,g!==null?(g=g.index,g<c?(h.flags|=2,c):g):(h.flags|=2,c)):(h.flags|=1048576,c)}function o(h){return n&&h.alternate===null&&(h.flags|=2),h}function s(h,c,g,v){return c===null||c.tag!==6?(c=Pi(g,h.mode,v),c.return=h,c):(c=l(c,g),c.return=h,c)}function a(h,c,g,v){var I=g.type;return I===be?f(h,c,g.props.children,v,g.key):c!==null&&(c.elementType===I||typeof I=="object"&&I!==null&&I.$$typeof===se&&ya(I)===c.type)?(v=l(c,g.props),v.ref=Lt(h,c,g),v.return=h,v):(v=il(g.type,g.key,g.props,null,h.mode,v),v.ref=Lt(h,c,g),v.return=h,v)}function u(h,c,g,v){return c===null||c.tag!==4||c.stateNode.containerInfo!==g.containerInfo||c.stateNode.implementation!==g.implementation?(c=Ci(g,h.mode,v),c.return=h,c):(c=l(c,g.children||[]),c.return=h,c)}function f(h,c,g,v,I){return c===null||c.tag!==7?(c=Me(g,h.mode,v,I),c.return=h,c):(c=l(c,g),c.return=h,c)}function d(h,c,g){if(typeof c=="string"&&c!==""||typeof c=="number")return c=Pi(""+c,h.mode,g),c.return=h,c;if(typeof c=="object"&&c!==null){switch(c.$$typeof){case _r:return g=il(c.type,c.key,c.props,null,h.mode,g),g.ref=Lt(h,null,c),g.return=h,g;case Je:return c=Ci(c,h.mode,g),c.return=h,c;case se:var v=c._init;return d(h,v(c._payload),g)}if(Ft(c)||Tt(c))return c=Me(c,h.mode,g,null),c.return=h,c;Ur(h,c)}return null}function p(h,c,g,v){var I=c!==null?c.key:null;if(typeof g=="string"&&g!==""||typeof g=="number")return I!==null?null:s(h,c,""+g,v);if(typeof g=="object"&&g!==null){switch(g.$$typeof){case _r:return g.key===I?a(h,c,g,v):null;case Je:return g.key===I?u(h,c,g,v):null;case se:return I=g._init,p(h,c,I(g._payload),v)}if(Ft(g)||Tt(g))return I!==null?null:f(h,c,g,v,null);Ur(h,g)}return null}function m(h,c,g,v,I){if(typeof v=="string"&&v!==""||typeof v=="number")return h=h.get(g)||null,s(c,h,""+v,I);if(typeof v=="object"&&v!==null){switch(v.$$typeof){case _r:return h=h.get(v.key===null?g:v.key)||null,a(c,h,v,I);case Je:return h=h.get(v.key===null?g:v.key)||null,u(c,h,v,I);case se:var O=v._init;return m(h,c,g,O(v._payload),I)}if(Ft(v)||Tt(v))return h=h.get(g)||null,f(c,h,v,I,null);Ur(c,v)}return null}function w(h,c,g,v){for(var I=null,O=null,E=c,T=c=0,K=null;E!==null&&T<g.length;T++){E.index>T?(K=E,E=null):K=E.sibling;var z=p(h,E,g[T],v);if(z===null){E===null&&(E=K);break}n&&E&&z.alternate===null&&e(h,E),c=i(z,c,T),O===null?I=z:O.sibling=z,O=z,E=K}if(T===g.length)return t(h,E),V&&_e(h,T),I;if(E===null){for(;T<g.length;T++)E=d(h,g[T],v),E!==null&&(c=i(E,c,T),O===null?I=E:O.sibling=E,O=E);return V&&_e(h,T),I}for(E=r(h,E);T<g.length;T++)K=m(E,h,T,g[T],v),K!==null&&(n&&K.alternate!==null&&E.delete(K.key===null?T:K.key),c=i(K,c,T),O===null?I=K:O.sibling=K,O=K);return n&&E.forEach(function(zn){return e(h,zn)}),V&&_e(h,T),I}function y(h,c,g,v){var I=Tt(g);if(typeof I!="function")throw Error(k(150));if(g=I.call(g),g==null)throw Error(k(151));for(var O=I=null,E=c,T=c=0,K=null,z=g.next();E!==null&&!z.done;T++,z=g.next()){E.index>T?(K=E,E=null):K=E.sibling;var zn=p(h,E,z.value,v);if(zn===null){E===null&&(E=K);break}n&&E&&zn.alternate===null&&e(h,E),c=i(zn,c,T),O===null?I=zn:O.sibling=zn,O=zn,E=K}if(z.done)return t(h,E),V&&_e(h,T),I;if(E===null){for(;!z.done;T++,z=g.next())z=d(h,z.value,v),z!==null&&(c=i(z,c,T),O===null?I=z:O.sibling=z,O=z);return V&&_e(h,T),I}for(E=r(h,E);!z.done;T++,z=g.next())z=m(E,h,T,z.value,v),z!==null&&(n&&z.alternate!==null&&E.delete(z.key===null?T:z.key),c=i(z,c,T),O===null?I=z:O.sibling=z,O=z);return n&&E.forEach(function(Ot){return e(h,Ot)}),V&&_e(h,T),I}function A(h,c,g,v){if(typeof g=="object"&&g!==null&&g.type===be&&g.key===null&&(g=g.props.children),typeof g=="object"&&g!==null){switch(g.$$typeof){case _r:n:{for(var I=g.key,O=c;O!==null;){if(O.key===I){if(I=g.type,I===be){if(O.tag===7){t(h,O.sibling),c=l(O,g.props.children),c.return=h,h=c;break n}}else if(O.elementType===I||typeof I=="object"&&I!==null&&I.$$typeof===se&&ya(I)===O.type){t(h,O.sibling),c=l(O,g.props),c.ref=Lt(h,O,g),c.return=h,h=c;break n}t(h,O);break}else e(h,O);O=O.sibling}g.type===be?(c=Me(g.props.children,h.mode,v,g.key),c.return=h,h=c):(v=il(g.type,g.key,g.props,null,h.mode,v),v.ref=Lt(h,c,g),v.return=h,h=v)}return o(h);case Je:n:{for(O=g.key;c!==null;){if(c.key===O)if(c.tag===4&&c.stateNode.containerInfo===g.containerInfo&&c.stateNode.implementation===g.implementation){t(h,c.sibling),c=l(c,g.children||[]),c.return=h,h=c;break n}else{t(h,c);break}else e(h,c);c=c.sibling}c=Ci(g,h.mode,v),c.return=h,h=c}return o(h);case se:return O=g._init,A(h,c,O(g._payload),v)}if(Ft(g))return w(h,c,g,v);if(Tt(g))return y(h,c,g,v);Ur(h,g)}return typeof g=="string"&&g!==""||typeof g=="number"?(g=""+g,c!==null&&c.tag===6?(t(h,c.sibling),c=l(c,g),c.return=h,h=c):(t(h,c),c=Pi(g,h.mode,v),c.return=h,h=c),o(h)):t(h,c)}return A}var wt=yc(!0),wc=yc(!1),wl=Ce(null),kl=null,st=null,qo=null;function Jo(){qo=st=kl=null}function bo(n){var e=wl.current;U(wl),n._currentValue=e}function lo(n,e,t){for(;n!==null;){var r=n.alternate;if((n.childLanes&e)!==e?(n.childLanes|=e,r!==null&&(r.childLanes|=e)):r!==null&&(r.childLanes&e)!==e&&(r.childLanes|=e),n===t)break;n=n.return}}function ht(n,e){kl=n,qo=st=null,n=n.dependencies,n!==null&&n.firstContext!==null&&(n.lanes&e&&(mn=!0),n.firstContext=null)}function Nn(n){var e=n._currentValue;if(qo!==n)if(n={context:n,memoizedValue:e,next:null},st===null){if(kl===null)throw Error(k(308));st=n,kl.dependencies={lanes:0,firstContext:n}}else st=st.next=n;return e}var Le=null;function ns(n){Le===null?Le=[n]:Le.push(n)}function kc(n,e,t,r){var l=e.interleaved;return l===null?(t.next=t,ns(e)):(t.next=l.next,l.next=t),e.interleaved=t,te(n,r)}function te(n,e){n.lanes|=e;var t=n.alternate;for(t!==null&&(t.lanes|=e),t=n,n=n.return;n!==null;)n.childLanes|=e,t=n.alternate,t!==null&&(t.childLanes|=e),t=n,n=n.return;return t.tag===3?t.stateNode:null}var ae=!1;function es(n){n.updateQueue={baseState:n.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function xc(n,e){n=n.updateQueue,e.updateQueue===n&&(e.updateQueue={baseState:n.baseState,firstBaseUpdate:n.firstBaseUpdate,lastBaseUpdate:n.lastBaseUpdate,shared:n.shared,effects:n.effects})}function Jn(n,e){return{eventTime:n,lane:e,tag:0,payload:null,callback:null,next:null}}function ye(n,e,t){var r=n.updateQueue;if(r===null)return null;if(r=r.shared,L&2){var l=r.pending;return l===null?e.next=e:(e.next=l.next,l.next=e),r.pending=e,te(n,t)}return l=r.interleaved,l===null?(e.next=e,ns(r)):(e.next=l.next,l.next=e),r.interleaved=e,te(n,t)}function br(n,e,t){if(e=e.updateQueue,e!==null&&(e=e.shared,(t&4194240)!==0)){var r=e.lanes;r&=n.pendingLanes,t|=r,e.lanes=t,Bo(n,t)}}function wa(n,e){var t=n.updateQueue,r=n.alternate;if(r!==null&&(r=r.updateQueue,t===r)){var l=null,i=null;if(t=t.firstBaseUpdate,t!==null){do{var o={eventTime:t.eventTime,lane:t.lane,tag:t.tag,payload:t.payload,callback:t.callback,next:null};i===null?l=i=o:i=i.next=o,t=t.next}while(t!==null);i===null?l=i=e:i=i.next=e}else l=i=e;t={baseState:r.baseState,firstBaseUpdate:l,lastBaseUpdate:i,shared:r.shared,effects:r.effects},n.updateQueue=t;return}n=t.lastBaseUpdate,n===null?t.firstBaseUpdate=e:n.next=e,t.lastBaseUpdate=e}function xl(n,e,t,r){var l=n.updateQueue;ae=!1;var i=l.firstBaseUpdate,o=l.lastBaseUpdate,s=l.shared.pending;if(s!==null){l.shared.pending=null;var a=s,u=a.next;a.next=null,o===null?i=u:o.next=u,o=a;var f=n.alternate;f!==null&&(f=f.updateQueue,s=f.lastBaseUpdate,s!==o&&(s===null?f.firstBaseUpdate=u:s.next=u,f.lastBaseUpdate=a))}if(i!==null){var d=l.baseState;o=0,f=u=a=null,s=i;do{var p=s.lane,m=s.eventTime;if((r&p)===p){f!==null&&(f=f.next={eventTime:m,lane:0,tag:s.tag,payload:s.payload,callback:s.callback,next:null});n:{var w=n,y=s;switch(p=e,m=t,y.tag){case 1:if(w=y.payload,typeof w=="function"){d=w.call(m,d,p);break n}d=w;break n;case 3:w.flags=w.flags&-65537|128;case 0:if(w=y.payload,p=typeof w=="function"?w.call(m,d,p):w,p==null)break n;d=H({},d,p);break n;case 2:ae=!0}}s.callback!==null&&s.lane!==0&&(n.flags|=64,p=l.effects,p===null?l.effects=[s]:p.push(s))}else m={eventTime:m,lane:p,tag:s.tag,payload:s.payload,callback:s.callback,next:null},f===null?(u=f=m,a=d):f=f.next=m,o|=p;if(s=s.next,s===null){if(s=l.shared.pending,s===null)break;p=s,s=p.next,p.next=null,l.lastBaseUpdate=p,l.shared.pending=null}}while(!0);if(f===null&&(a=d),l.baseState=a,l.firstBaseUpdate=u,l.lastBaseUpdate=f,e=l.shared.interleaved,e!==null){l=e;do o|=l.lane,l=l.next;while(l!==e)}else i===null&&(l.shared.lanes=0);Ve|=o,n.lanes=o,n.memoizedState=d}}function ka(n,e,t){if(n=e.effects,e.effects=null,n!==null)for(e=0;e<n.length;e++){var r=n[e],l=r.callback;if(l!==null){if(r.callback=null,r=t,typeof l!="function")throw Error(k(191,l));l.call(r)}}}var Ar={},Kn=Ce(Ar),cr=Ce(Ar),fr=Ce(Ar);function De(n){if(n===Ar)throw Error(k(174));return n}function ts(n,e){switch($(fr,e),$(cr,n),$(Kn,Ar),n=e.nodeType,n){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:$i(null,"");break;default:n=n===8?e.parentNode:e,e=n.namespaceURI||null,n=n.tagName,e=$i(e,n)}U(Kn),$(Kn,e)}function kt(){U(Kn),U(cr),U(fr)}function Ac(n){De(fr.current);var e=De(Kn.current),t=$i(e,n.type);e!==t&&($(cr,n),$(Kn,t))}function rs(n){cr.current===n&&(U(Kn),U(cr))}var W=Ce(0);function Al(n){for(var e=n;e!==null;){if(e.tag===13){var t=e.memoizedState;if(t!==null&&(t=t.dehydrated,t===null||t.data==="$?"||t.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===n)break;for(;e.sibling===null;){if(e.return===null||e.return===n)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var wi=[];function ls(){for(var n=0;n<wi.length;n++)wi[n]._workInProgressVersionPrimary=null;wi.length=0}var nl=le.ReactCurrentDispatcher,ki=le.ReactCurrentBatchConfig,Ue=0,G=null,J=null,en=null,Il=!1,Kt=!1,dr=0,Wd=0;function sn(){throw Error(k(321))}function is(n,e){if(e===null)return!1;for(var t=0;t<e.length&&t<n.length;t++)if(!Bn(n[t],e[t]))return!1;return!0}function os(n,e,t,r,l,i){if(Ue=i,G=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,nl.current=n===null||n.memoizedState===null?Kd:Xd,n=t(r,l),Kt){i=0;do{if(Kt=!1,dr=0,25<=i)throw Error(k(301));i+=1,en=J=null,e.updateQueue=null,nl.current=Zd,n=t(r,l)}while(Kt)}if(nl.current=Sl,e=J!==null&&J.next!==null,Ue=0,en=J=G=null,Il=!1,e)throw Error(k(300));return n}function ss(){var n=dr!==0;return dr=0,n}function Vn(){var n={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return en===null?G.memoizedState=en=n:en=en.next=n,en}function Rn(){if(J===null){var n=G.alternate;n=n!==null?n.memoizedState:null}else n=J.next;var e=en===null?G.memoizedState:en.next;if(e!==null)en=e,J=n;else{if(n===null)throw Error(k(310));J=n,n={memoizedState:J.memoizedState,baseState:J.baseState,baseQueue:J.baseQueue,queue:J.queue,next:null},en===null?G.memoizedState=en=n:en=en.next=n}return en}function pr(n,e){return typeof e=="function"?e(n):e}function xi(n){var e=Rn(),t=e.queue;if(t===null)throw Error(k(311));t.lastRenderedReducer=n;var r=J,l=r.baseQueue,i=t.pending;if(i!==null){if(l!==null){var o=l.next;l.next=i.next,i.next=o}r.baseQueue=l=i,t.pending=null}if(l!==null){i=l.next,r=r.baseState;var s=o=null,a=null,u=i;do{var f=u.lane;if((Ue&f)===f)a!==null&&(a=a.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),r=u.hasEagerState?u.eagerState:n(r,u.action);else{var d={lane:f,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};a===null?(s=a=d,o=r):a=a.next=d,G.lanes|=f,Ve|=f}u=u.next}while(u!==null&&u!==i);a===null?o=r:a.next=s,Bn(r,e.memoizedState)||(mn=!0),e.memoizedState=r,e.baseState=o,e.baseQueue=a,t.lastRenderedState=r}if(n=t.interleaved,n!==null){l=n;do i=l.lane,G.lanes|=i,Ve|=i,l=l.next;while(l!==n)}else l===null&&(t.lanes=0);return[e.memoizedState,t.dispatch]}function Ai(n){var e=Rn(),t=e.queue;if(t===null)throw Error(k(311));t.lastRenderedReducer=n;var r=t.dispatch,l=t.pending,i=e.memoizedState;if(l!==null){t.pending=null;var o=l=l.next;do i=n(i,o.action),o=o.next;while(o!==l);Bn(i,e.memoizedState)||(mn=!0),e.memoizedState=i,e.baseQueue===null&&(e.baseState=i),t.lastRenderedState=i}return[i,r]}function Ic(){}function Sc(n,e){var t=G,r=Rn(),l=e(),i=!Bn(r.memoizedState,l);if(i&&(r.memoizedState=l,mn=!0),r=r.queue,as(Oc.bind(null,t,r,n),[n]),r.getSnapshot!==e||i||en!==null&&en.memoizedState.tag&1){if(t.flags|=2048,hr(9,Cc.bind(null,t,r,l,e),void 0,null),tn===null)throw Error(k(349));Ue&30||Pc(t,e,l)}return l}function Pc(n,e,t){n.flags|=16384,n={getSnapshot:e,value:t},e=G.updateQueue,e===null?(e={lastEffect:null,stores:null},G.updateQueue=e,e.stores=[n]):(t=e.stores,t===null?e.stores=[n]:t.push(n))}function Cc(n,e,t,r){e.value=t,e.getSnapshot=r,Ec(e)&&Tc(n)}function Oc(n,e,t){return t(function(){Ec(e)&&Tc(n)})}function Ec(n){var e=n.getSnapshot;n=n.value;try{var t=e();return!Bn(n,t)}catch{return!0}}function Tc(n){var e=te(n,1);e!==null&&Fn(e,n,1,-1)}function xa(n){var e=Vn();return typeof n=="function"&&(n=n()),e.memoizedState=e.baseState=n,n={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:pr,lastRenderedState:n},e.queue=n,n=n.dispatch=Qd.bind(null,G,n),[e.memoizedState,n]}function hr(n,e,t,r){return n={tag:n,create:e,destroy:t,deps:r,next:null},e=G.updateQueue,e===null?(e={lastEffect:null,stores:null},G.updateQueue=e,e.lastEffect=n.next=n):(t=e.lastEffect,t===null?e.lastEffect=n.next=n:(r=t.next,t.next=n,n.next=r,e.lastEffect=n)),n}function _c(){return Rn().memoizedState}function el(n,e,t,r){var l=Vn();G.flags|=n,l.memoizedState=hr(1|e,t,void 0,r===void 0?null:r)}function Ul(n,e,t,r){var l=Rn();r=r===void 0?null:r;var i=void 0;if(J!==null){var o=J.memoizedState;if(i=o.destroy,r!==null&&is(r,o.deps)){l.memoizedState=hr(e,t,i,r);return}}G.flags|=n,l.memoizedState=hr(1|e,t,i,r)}function Aa(n,e){return el(8390656,8,n,e)}function as(n,e){return Ul(2048,8,n,e)}function Nc(n,e){return Ul(4,2,n,e)}function Rc(n,e){return Ul(4,4,n,e)}function zc(n,e){if(typeof e=="function")return n=n(),e(n),function(){e(null)};if(e!=null)return n=n(),e.current=n,function(){e.current=null}}function Lc(n,e,t){return t=t!=null?t.concat([n]):null,Ul(4,4,zc.bind(null,e,n),t)}function us(){}function Dc(n,e){var t=Rn();e=e===void 0?null:e;var r=t.memoizedState;return r!==null&&e!==null&&is(e,r[1])?r[0]:(t.memoizedState=[n,e],n)}function jc(n,e){var t=Rn();e=e===void 0?null:e;var r=t.memoizedState;return r!==null&&e!==null&&is(e,r[1])?r[0]:(n=n(),t.memoizedState=[n,e],n)}function Mc(n,e,t){return Ue&21?(Bn(t,e)||(t=Vu(),G.lanes|=t,Ve|=t,n.baseState=!0),e):(n.baseState&&(n.baseState=!1,mn=!0),n.memoizedState=t)}function Gd(n,e){var t=j;j=t!==0&&4>t?t:4,n(!0);var r=ki.transition;ki.transition={};try{n(!1),e()}finally{j=t,ki.transition=r}}function $c(){return Rn().memoizedState}function Hd(n,e,t){var r=ke(n);if(t={lane:r,action:t,hasEagerState:!1,eagerState:null,next:null},Fc(n))Bc(e,t);else if(t=kc(n,e,t,r),t!==null){var l=dn();Fn(t,n,r,l),Uc(t,e,r)}}function Qd(n,e,t){var r=ke(n),l={lane:r,action:t,hasEagerState:!1,eagerState:null,next:null};if(Fc(n))Bc(e,l);else{var i=n.alternate;if(n.lanes===0&&(i===null||i.lanes===0)&&(i=e.lastRenderedReducer,i!==null))try{var o=e.lastRenderedState,s=i(o,t);if(l.hasEagerState=!0,l.eagerState=s,Bn(s,o)){var a=e.interleaved;a===null?(l.next=l,ns(e)):(l.next=a.next,a.next=l),e.interleaved=l;return}}catch{}finally{}t=kc(n,e,l,r),t!==null&&(l=dn(),Fn(t,n,r,l),Uc(t,e,r))}}function Fc(n){var e=n.alternate;return n===G||e!==null&&e===G}function Bc(n,e){Kt=Il=!0;var t=n.pending;t===null?e.next=e:(e.next=t.next,t.next=e),n.pending=e}function Uc(n,e,t){if(t&4194240){var r=e.lanes;r&=n.pendingLanes,t|=r,e.lanes=t,Bo(n,t)}}var Sl={readContext:Nn,useCallback:sn,useContext:sn,useEffect:sn,useImperativeHandle:sn,useInsertionEffect:sn,useLayoutEffect:sn,useMemo:sn,useReducer:sn,useRef:sn,useState:sn,useDebugValue:sn,useDeferredValue:sn,useTransition:sn,useMutableSource:sn,useSyncExternalStore:sn,useId:sn,unstable_isNewReconciler:!1},Kd={readContext:Nn,useCallback:function(n,e){return Vn().memoizedState=[n,e===void 0?null:e],n},useContext:Nn,useEffect:Aa,useImperativeHandle:function(n,e,t){return t=t!=null?t.concat([n]):null,el(4194308,4,zc.bind(null,e,n),t)},useLayoutEffect:function(n,e){return el(4194308,4,n,e)},useInsertionEffect:function(n,e){return el(4,2,n,e)},useMemo:function(n,e){var t=Vn();return e=e===void 0?null:e,n=n(),t.memoizedState=[n,e],n},useReducer:function(n,e,t){var r=Vn();return e=t!==void 0?t(e):e,r.memoizedState=r.baseState=e,n={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:n,lastRenderedState:e},r.queue=n,n=n.dispatch=Hd.bind(null,G,n),[r.memoizedState,n]},useRef:function(n){var e=Vn();return n={current:n},e.memoizedState=n},useState:xa,useDebugValue:us,useDeferredValue:function(n){return Vn().memoizedState=n},useTransition:function(){var n=xa(!1),e=n[0];return n=Gd.bind(null,n[1]),Vn().memoizedState=n,[e,n]},useMutableSource:function(){},useSyncExternalStore:function(n,e,t){var r=G,l=Vn();if(V){if(t===void 0)throw Error(k(407));t=t()}else{if(t=e(),tn===null)throw Error(k(349));Ue&30||Pc(r,e,t)}l.memoizedState=t;var i={value:t,getSnapshot:e};return l.queue=i,Aa(Oc.bind(null,r,i,n),[n]),r.flags|=2048,hr(9,Cc.bind(null,r,i,t,e),void 0,null),t},useId:function(){var n=Vn(),e=tn.identifierPrefix;if(V){var t=qn,r=Yn;t=(r&~(1<<32-$n(r)-1)).toString(32)+t,e=":"+e+"R"+t,t=dr++,0<t&&(e+="H"+t.toString(32)),e+=":"}else t=Wd++,e=":"+e+"r"+t.toString(32)+":";return n.memoizedState=e},unstable_isNewReconciler:!1},Xd={readContext:Nn,useCallback:Dc,useContext:Nn,useEffect:as,useImperativeHandle:Lc,useInsertionEffect:Nc,useLayoutEffect:Rc,useMemo:jc,useReducer:xi,useRef:_c,useState:function(){return xi(pr)},useDebugValue:us,useDeferredValue:function(n){var e=Rn();return Mc(e,J.memoizedState,n)},useTransition:function(){var n=xi(pr)[0],e=Rn().memoizedState;return[n,e]},useMutableSource:Ic,useSyncExternalStore:Sc,useId:$c,unstable_isNewReconciler:!1},Zd={readContext:Nn,useCallback:Dc,useContext:Nn,useEffect:as,useImperativeHandle:Lc,useInsertionEffect:Nc,useLayoutEffect:Rc,useMemo:jc,useReducer:Ai,useRef:_c,useState:function(){return Ai(pr)},useDebugValue:us,useDeferredValue:function(n){var e=Rn();return J===null?e.memoizedState=n:Mc(e,J.memoizedState,n)},useTransition:function(){var n=Ai(pr)[0],e=Rn().memoizedState;return[n,e]},useMutableSource:Ic,useSyncExternalStore:Sc,useId:$c,unstable_isNewReconciler:!1};function Dn(n,e){if(n&&n.defaultProps){e=H({},e),n=n.defaultProps;for(var t in n)e[t]===void 0&&(e[t]=n[t]);return e}return e}function io(n,e,t,r){e=n.memoizedState,t=t(r,e),t=t==null?e:H({},e,t),n.memoizedState=t,n.lanes===0&&(n.updateQueue.baseState=t)}var Vl={isMounted:function(n){return(n=n._reactInternals)?Ke(n)===n:!1},enqueueSetState:function(n,e,t){n=n._reactInternals;var r=dn(),l=ke(n),i=Jn(r,l);i.payload=e,t!=null&&(i.callback=t),e=ye(n,i,l),e!==null&&(Fn(e,n,l,r),br(e,n,l))},enqueueReplaceState:function(n,e,t){n=n._reactInternals;var r=dn(),l=ke(n),i=Jn(r,l);i.tag=1,i.payload=e,t!=null&&(i.callback=t),e=ye(n,i,l),e!==null&&(Fn(e,n,l,r),br(e,n,l))},enqueueForceUpdate:function(n,e){n=n._reactInternals;var t=dn(),r=ke(n),l=Jn(t,r);l.tag=2,e!=null&&(l.callback=e),e=ye(n,l,r),e!==null&&(Fn(e,n,r,t),br(e,n,r))}};function Ia(n,e,t,r,l,i,o){return n=n.stateNode,typeof n.shouldComponentUpdate=="function"?n.shouldComponentUpdate(r,i,o):e.prototype&&e.prototype.isPureReactComponent?!or(t,r)||!or(l,i):!0}function Vc(n,e,t){var r=!1,l=Se,i=e.contextType;return typeof i=="object"&&i!==null?i=Nn(i):(l=yn(e)?Fe:cn.current,r=e.contextTypes,i=(r=r!=null)?vt(n,l):Se),e=new e(t,i),n.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=Vl,n.stateNode=e,e._reactInternals=n,r&&(n=n.stateNode,n.__reactInternalMemoizedUnmaskedChildContext=l,n.__reactInternalMemoizedMaskedChildContext=i),e}function Sa(n,e,t,r){n=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(t,r),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(t,r),e.state!==n&&Vl.enqueueReplaceState(e,e.state,null)}function oo(n,e,t,r){var l=n.stateNode;l.props=t,l.state=n.memoizedState,l.refs={},es(n);var i=e.contextType;typeof i=="object"&&i!==null?l.context=Nn(i):(i=yn(e)?Fe:cn.current,l.context=vt(n,i)),l.state=n.memoizedState,i=e.getDerivedStateFromProps,typeof i=="function"&&(io(n,e,i,t),l.state=n.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof l.getSnapshotBeforeUpdate=="function"||typeof l.UNSAFE_componentWillMount!="function"&&typeof l.componentWillMount!="function"||(e=l.state,typeof l.componentWillMount=="function"&&l.componentWillMount(),typeof l.UNSAFE_componentWillMount=="function"&&l.UNSAFE_componentWillMount(),e!==l.state&&Vl.enqueueReplaceState(l,l.state,null),xl(n,t,l,r),l.state=n.memoizedState),typeof l.componentDidMount=="function"&&(n.flags|=4194308)}function xt(n,e){try{var t="",r=e;do t+=If(r),r=r.return;while(r);var l=t}catch(i){l=`
Error generating stack: `+i.message+`
`+i.stack}return{value:n,source:e,stack:l,digest:null}}function Ii(n,e,t){return{value:n,source:null,stack:t??null,digest:e??null}}function so(n,e){try{console.error(e.value)}catch(t){setTimeout(function(){throw t})}}var Yd=typeof WeakMap=="function"?WeakMap:Map;function Wc(n,e,t){t=Jn(-1,t),t.tag=3,t.payload={element:null};var r=e.value;return t.callback=function(){Cl||(Cl=!0,yo=r),so(n,e)},t}function Gc(n,e,t){t=Jn(-1,t),t.tag=3;var r=n.type.getDerivedStateFromError;if(typeof r=="function"){var l=e.value;t.payload=function(){return r(l)},t.callback=function(){so(n,e)}}var i=n.stateNode;return i!==null&&typeof i.componentDidCatch=="function"&&(t.callback=function(){so(n,e),typeof r!="function"&&(we===null?we=new Set([this]):we.add(this));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),t}function Pa(n,e,t){var r=n.pingCache;if(r===null){r=n.pingCache=new Yd;var l=new Set;r.set(e,l)}else l=r.get(e),l===void 0&&(l=new Set,r.set(e,l));l.has(t)||(l.add(t),n=cp.bind(null,n,e,t),e.then(n,n))}function Ca(n){do{var e;if((e=n.tag===13)&&(e=n.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return n;n=n.return}while(n!==null);return null}function Oa(n,e,t,r,l){return n.mode&1?(n.flags|=65536,n.lanes=l,n):(n===e?n.flags|=65536:(n.flags|=128,t.flags|=131072,t.flags&=-52805,t.tag===1&&(t.alternate===null?t.tag=17:(e=Jn(-1,1),e.tag=2,ye(t,e,1))),t.lanes|=1),n)}var qd=le.ReactCurrentOwner,mn=!1;function fn(n,e,t,r){e.child=n===null?wc(e,null,t,r):wt(e,n.child,t,r)}function Ea(n,e,t,r,l){t=t.render;var i=e.ref;return ht(e,l),r=os(n,e,t,r,i,l),t=ss(),n!==null&&!mn?(e.updateQueue=n.updateQueue,e.flags&=-2053,n.lanes&=~l,re(n,e,l)):(V&&t&&Xo(e),e.flags|=1,fn(n,e,r,l),e.child)}function Ta(n,e,t,r,l){if(n===null){var i=t.type;return typeof i=="function"&&!vs(i)&&i.defaultProps===void 0&&t.compare===null&&t.defaultProps===void 0?(e.tag=15,e.type=i,Hc(n,e,i,r,l)):(n=il(t.type,null,r,e,e.mode,l),n.ref=e.ref,n.return=e,e.child=n)}if(i=n.child,!(n.lanes&l)){var o=i.memoizedProps;if(t=t.compare,t=t!==null?t:or,t(o,r)&&n.ref===e.ref)return re(n,e,l)}return e.flags|=1,n=xe(i,r),n.ref=e.ref,n.return=e,e.child=n}function Hc(n,e,t,r,l){if(n!==null){var i=n.memoizedProps;if(or(i,r)&&n.ref===e.ref)if(mn=!1,e.pendingProps=r=i,(n.lanes&l)!==0)n.flags&131072&&(mn=!0);else return e.lanes=n.lanes,re(n,e,l)}return ao(n,e,t,r,l)}function Qc(n,e,t){var r=e.pendingProps,l=r.children,i=n!==null?n.memoizedState:null;if(r.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},$(ut,kn),kn|=t;else{if(!(t&1073741824))return n=i!==null?i.baseLanes|t:t,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:n,cachePool:null,transitions:null},e.updateQueue=null,$(ut,kn),kn|=n,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=i!==null?i.baseLanes:t,$(ut,kn),kn|=r}else i!==null?(r=i.baseLanes|t,e.memoizedState=null):r=t,$(ut,kn),kn|=r;return fn(n,e,l,t),e.child}function Kc(n,e){var t=e.ref;(n===null&&t!==null||n!==null&&n.ref!==t)&&(e.flags|=512,e.flags|=2097152)}function ao(n,e,t,r,l){var i=yn(t)?Fe:cn.current;return i=vt(e,i),ht(e,l),t=os(n,e,t,r,i,l),r=ss(),n!==null&&!mn?(e.updateQueue=n.updateQueue,e.flags&=-2053,n.lanes&=~l,re(n,e,l)):(V&&r&&Xo(e),e.flags|=1,fn(n,e,t,l),e.child)}function _a(n,e,t,r,l){if(yn(t)){var i=!0;ml(e)}else i=!1;if(ht(e,l),e.stateNode===null)tl(n,e),Vc(e,t,r),oo(e,t,r,l),r=!0;else if(n===null){var o=e.stateNode,s=e.memoizedProps;o.props=s;var a=o.context,u=t.contextType;typeof u=="object"&&u!==null?u=Nn(u):(u=yn(t)?Fe:cn.current,u=vt(e,u));var f=t.getDerivedStateFromProps,d=typeof f=="function"||typeof o.getSnapshotBeforeUpdate=="function";d||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(s!==r||a!==u)&&Sa(e,o,r,u),ae=!1;var p=e.memoizedState;o.state=p,xl(e,r,o,l),a=e.memoizedState,s!==r||p!==a||vn.current||ae?(typeof f=="function"&&(io(e,t,f,r),a=e.memoizedState),(s=ae||Ia(e,t,s,r,p,a,u))?(d||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=r,e.memoizedState=a),o.props=r,o.state=a,o.context=u,r=s):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),r=!1)}else{o=e.stateNode,xc(n,e),s=e.memoizedProps,u=e.type===e.elementType?s:Dn(e.type,s),o.props=u,d=e.pendingProps,p=o.context,a=t.contextType,typeof a=="object"&&a!==null?a=Nn(a):(a=yn(t)?Fe:cn.current,a=vt(e,a));var m=t.getDerivedStateFromProps;(f=typeof m=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(s!==d||p!==a)&&Sa(e,o,r,a),ae=!1,p=e.memoizedState,o.state=p,xl(e,r,o,l);var w=e.memoizedState;s!==d||p!==w||vn.current||ae?(typeof m=="function"&&(io(e,t,m,r),w=e.memoizedState),(u=ae||Ia(e,t,u,r,p,w,a)||!1)?(f||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(r,w,a),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(r,w,a)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||s===n.memoizedProps&&p===n.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||s===n.memoizedProps&&p===n.memoizedState||(e.flags|=1024),e.memoizedProps=r,e.memoizedState=w),o.props=r,o.state=w,o.context=a,r=u):(typeof o.componentDidUpdate!="function"||s===n.memoizedProps&&p===n.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||s===n.memoizedProps&&p===n.memoizedState||(e.flags|=1024),r=!1)}return uo(n,e,t,r,i,l)}function uo(n,e,t,r,l,i){Kc(n,e);var o=(e.flags&128)!==0;if(!r&&!o)return l&&ga(e,t,!1),re(n,e,i);r=e.stateNode,qd.current=e;var s=o&&typeof t.getDerivedStateFromError!="function"?null:r.render();return e.flags|=1,n!==null&&o?(e.child=wt(e,n.child,null,i),e.child=wt(e,null,s,i)):fn(n,e,s,i),e.memoizedState=r.state,l&&ga(e,t,!0),e.child}function Xc(n){var e=n.stateNode;e.pendingContext?ha(n,e.pendingContext,e.pendingContext!==e.context):e.context&&ha(n,e.context,!1),ts(n,e.containerInfo)}function Na(n,e,t,r,l){return yt(),Yo(l),e.flags|=256,fn(n,e,t,r),e.child}var co={dehydrated:null,treeContext:null,retryLane:0};function fo(n){return{baseLanes:n,cachePool:null,transitions:null}}function Zc(n,e,t){var r=e.pendingProps,l=W.current,i=!1,o=(e.flags&128)!==0,s;if((s=o)||(s=n!==null&&n.memoizedState===null?!1:(l&2)!==0),s?(i=!0,e.flags&=-129):(n===null||n.memoizedState!==null)&&(l|=1),$(W,l&1),n===null)return ro(e),n=e.memoizedState,n!==null&&(n=n.dehydrated,n!==null)?(e.mode&1?n.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(o=r.children,n=r.fallback,i?(r=e.mode,i=e.child,o={mode:"hidden",children:o},!(r&1)&&i!==null?(i.childLanes=0,i.pendingProps=o):i=Hl(o,r,0,null),n=Me(n,r,t,null),i.return=e,n.return=e,i.sibling=n,e.child=i,e.child.memoizedState=fo(t),e.memoizedState=co,n):cs(e,o));if(l=n.memoizedState,l!==null&&(s=l.dehydrated,s!==null))return Jd(n,e,o,r,s,l,t);if(i){i=r.fallback,o=e.mode,l=n.child,s=l.sibling;var a={mode:"hidden",children:r.children};return!(o&1)&&e.child!==l?(r=e.child,r.childLanes=0,r.pendingProps=a,e.deletions=null):(r=xe(l,a),r.subtreeFlags=l.subtreeFlags&14680064),s!==null?i=xe(s,i):(i=Me(i,o,t,null),i.flags|=2),i.return=e,r.return=e,r.sibling=i,e.child=r,r=i,i=e.child,o=n.child.memoizedState,o=o===null?fo(t):{baseLanes:o.baseLanes|t,cachePool:null,transitions:o.transitions},i.memoizedState=o,i.childLanes=n.childLanes&~t,e.memoizedState=co,r}return i=n.child,n=i.sibling,r=xe(i,{mode:"visible",children:r.children}),!(e.mode&1)&&(r.lanes=t),r.return=e,r.sibling=null,n!==null&&(t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)),e.child=r,e.memoizedState=null,r}function cs(n,e){return e=Hl({mode:"visible",children:e},n.mode,0,null),e.return=n,n.child=e}function Vr(n,e,t,r){return r!==null&&Yo(r),wt(e,n.child,null,t),n=cs(e,e.pendingProps.children),n.flags|=2,e.memoizedState=null,n}function Jd(n,e,t,r,l,i,o){if(t)return e.flags&256?(e.flags&=-257,r=Ii(Error(k(422))),Vr(n,e,o,r)):e.memoizedState!==null?(e.child=n.child,e.flags|=128,null):(i=r.fallback,l=e.mode,r=Hl({mode:"visible",children:r.children},l,0,null),i=Me(i,l,o,null),i.flags|=2,r.return=e,i.return=e,r.sibling=i,e.child=r,e.mode&1&&wt(e,n.child,null,o),e.child.memoizedState=fo(o),e.memoizedState=co,i);if(!(e.mode&1))return Vr(n,e,o,null);if(l.data==="$!"){if(r=l.nextSibling&&l.nextSibling.dataset,r)var s=r.dgst;return r=s,i=Error(k(419)),r=Ii(i,r,void 0),Vr(n,e,o,r)}if(s=(o&n.childLanes)!==0,mn||s){if(r=tn,r!==null){switch(o&-o){case 4:l=2;break;case 16:l=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:l=32;break;case 536870912:l=268435456;break;default:l=0}l=l&(r.suspendedLanes|o)?0:l,l!==0&&l!==i.retryLane&&(i.retryLane=l,te(n,l),Fn(r,n,l,-1))}return ms(),r=Ii(Error(k(421))),Vr(n,e,o,r)}return l.data==="$?"?(e.flags|=128,e.child=n.child,e=fp.bind(null,n),l._reactRetry=e,null):(n=i.treeContext,An=ve(l.nextSibling),In=e,V=!0,Mn=null,n!==null&&(On[En++]=Yn,On[En++]=qn,On[En++]=Be,Yn=n.id,qn=n.overflow,Be=e),e=cs(e,r.children),e.flags|=4096,e)}function Ra(n,e,t){n.lanes|=e;var r=n.alternate;r!==null&&(r.lanes|=e),lo(n.return,e,t)}function Si(n,e,t,r,l){var i=n.memoizedState;i===null?n.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:r,tail:t,tailMode:l}:(i.isBackwards=e,i.rendering=null,i.renderingStartTime=0,i.last=r,i.tail=t,i.tailMode=l)}function Yc(n,e,t){var r=e.pendingProps,l=r.revealOrder,i=r.tail;if(fn(n,e,r.children,t),r=W.current,r&2)r=r&1|2,e.flags|=128;else{if(n!==null&&n.flags&128)n:for(n=e.child;n!==null;){if(n.tag===13)n.memoizedState!==null&&Ra(n,t,e);else if(n.tag===19)Ra(n,t,e);else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break n;for(;n.sibling===null;){if(n.return===null||n.return===e)break n;n=n.return}n.sibling.return=n.return,n=n.sibling}r&=1}if($(W,r),!(e.mode&1))e.memoizedState=null;else switch(l){case"forwards":for(t=e.child,l=null;t!==null;)n=t.alternate,n!==null&&Al(n)===null&&(l=t),t=t.sibling;t=l,t===null?(l=e.child,e.child=null):(l=t.sibling,t.sibling=null),Si(e,!1,l,t,i);break;case"backwards":for(t=null,l=e.child,e.child=null;l!==null;){if(n=l.alternate,n!==null&&Al(n)===null){e.child=l;break}n=l.sibling,l.sibling=t,t=l,l=n}Si(e,!0,t,null,i);break;case"together":Si(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function tl(n,e){!(e.mode&1)&&n!==null&&(n.alternate=null,e.alternate=null,e.flags|=2)}function re(n,e,t){if(n!==null&&(e.dependencies=n.dependencies),Ve|=e.lanes,!(t&e.childLanes))return null;if(n!==null&&e.child!==n.child)throw Error(k(153));if(e.child!==null){for(n=e.child,t=xe(n,n.pendingProps),e.child=t,t.return=e;n.sibling!==null;)n=n.sibling,t=t.sibling=xe(n,n.pendingProps),t.return=e;t.sibling=null}return e.child}function bd(n,e,t){switch(e.tag){case 3:Xc(e),yt();break;case 5:Ac(e);break;case 1:yn(e.type)&&ml(e);break;case 4:ts(e,e.stateNode.containerInfo);break;case 10:var r=e.type._context,l=e.memoizedProps.value;$(wl,r._currentValue),r._currentValue=l;break;case 13:if(r=e.memoizedState,r!==null)return r.dehydrated!==null?($(W,W.current&1),e.flags|=128,null):t&e.child.childLanes?Zc(n,e,t):($(W,W.current&1),n=re(n,e,t),n!==null?n.sibling:null);$(W,W.current&1);break;case 19:if(r=(t&e.childLanes)!==0,n.flags&128){if(r)return Yc(n,e,t);e.flags|=128}if(l=e.memoizedState,l!==null&&(l.rendering=null,l.tail=null,l.lastEffect=null),$(W,W.current),r)break;return null;case 22:case 23:return e.lanes=0,Qc(n,e,t)}return re(n,e,t)}var qc,po,Jc,bc;qc=function(n,e){for(var t=e.child;t!==null;){if(t.tag===5||t.tag===6)n.appendChild(t.stateNode);else if(t.tag!==4&&t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return;t=t.return}t.sibling.return=t.return,t=t.sibling}};po=function(){};Jc=function(n,e,t,r){var l=n.memoizedProps;if(l!==r){n=e.stateNode,De(Kn.current);var i=null;switch(t){case"input":l=Li(n,l),r=Li(n,r),i=[];break;case"select":l=H({},l,{value:void 0}),r=H({},r,{value:void 0}),i=[];break;case"textarea":l=Mi(n,l),r=Mi(n,r),i=[];break;default:typeof l.onClick!="function"&&typeof r.onClick=="function"&&(n.onclick=hl)}Fi(t,r);var o;t=null;for(u in l)if(!r.hasOwnProperty(u)&&l.hasOwnProperty(u)&&l[u]!=null)if(u==="style"){var s=l[u];for(o in s)s.hasOwnProperty(o)&&(t||(t={}),t[o]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(bt.hasOwnProperty(u)?i||(i=[]):(i=i||[]).push(u,null));for(u in r){var a=r[u];if(s=l!=null?l[u]:void 0,r.hasOwnProperty(u)&&a!==s&&(a!=null||s!=null))if(u==="style")if(s){for(o in s)!s.hasOwnProperty(o)||a&&a.hasOwnProperty(o)||(t||(t={}),t[o]="");for(o in a)a.hasOwnProperty(o)&&s[o]!==a[o]&&(t||(t={}),t[o]=a[o])}else t||(i||(i=[]),i.push(u,t)),t=a;else u==="dangerouslySetInnerHTML"?(a=a?a.__html:void 0,s=s?s.__html:void 0,a!=null&&s!==a&&(i=i||[]).push(u,a)):u==="children"?typeof a!="string"&&typeof a!="number"||(i=i||[]).push(u,""+a):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(bt.hasOwnProperty(u)?(a!=null&&u==="onScroll"&&B("scroll",n),i||s===a||(i=[])):(i=i||[]).push(u,a))}t&&(i=i||[]).push("style",t);var u=i;(e.updateQueue=u)&&(e.flags|=4)}};bc=function(n,e,t,r){t!==r&&(e.flags|=4)};function Dt(n,e){if(!V)switch(n.tailMode){case"hidden":e=n.tail;for(var t=null;e!==null;)e.alternate!==null&&(t=e),e=e.sibling;t===null?n.tail=null:t.sibling=null;break;case"collapsed":t=n.tail;for(var r=null;t!==null;)t.alternate!==null&&(r=t),t=t.sibling;r===null?e||n.tail===null?n.tail=null:n.tail.sibling=null:r.sibling=null}}function an(n){var e=n.alternate!==null&&n.alternate.child===n.child,t=0,r=0;if(e)for(var l=n.child;l!==null;)t|=l.lanes|l.childLanes,r|=l.subtreeFlags&14680064,r|=l.flags&14680064,l.return=n,l=l.sibling;else for(l=n.child;l!==null;)t|=l.lanes|l.childLanes,r|=l.subtreeFlags,r|=l.flags,l.return=n,l=l.sibling;return n.subtreeFlags|=r,n.childLanes=t,e}function np(n,e,t){var r=e.pendingProps;switch(Zo(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return an(e),null;case 1:return yn(e.type)&&gl(),an(e),null;case 3:return r=e.stateNode,kt(),U(vn),U(cn),ls(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(n===null||n.child===null)&&(Br(e)?e.flags|=4:n===null||n.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,Mn!==null&&(xo(Mn),Mn=null))),po(n,e),an(e),null;case 5:rs(e);var l=De(fr.current);if(t=e.type,n!==null&&e.stateNode!=null)Jc(n,e,t,r,l),n.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!r){if(e.stateNode===null)throw Error(k(166));return an(e),null}if(n=De(Kn.current),Br(e)){r=e.stateNode,t=e.type;var i=e.memoizedProps;switch(r[Wn]=e,r[ur]=i,n=(e.mode&1)!==0,t){case"dialog":B("cancel",r),B("close",r);break;case"iframe":case"object":case"embed":B("load",r);break;case"video":case"audio":for(l=0;l<Ut.length;l++)B(Ut[l],r);break;case"source":B("error",r);break;case"img":case"image":case"link":B("error",r),B("load",r);break;case"details":B("toggle",r);break;case"input":Us(r,i),B("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!i.multiple},B("invalid",r);break;case"textarea":Ws(r,i),B("invalid",r)}Fi(t,i),l=null;for(var o in i)if(i.hasOwnProperty(o)){var s=i[o];o==="children"?typeof s=="string"?r.textContent!==s&&(i.suppressHydrationWarning!==!0&&Fr(r.textContent,s,n),l=["children",s]):typeof s=="number"&&r.textContent!==""+s&&(i.suppressHydrationWarning!==!0&&Fr(r.textContent,s,n),l=["children",""+s]):bt.hasOwnProperty(o)&&s!=null&&o==="onScroll"&&B("scroll",r)}switch(t){case"input":Nr(r),Vs(r,i,!0);break;case"textarea":Nr(r),Gs(r);break;case"select":case"option":break;default:typeof i.onClick=="function"&&(r.onclick=hl)}r=l,e.updateQueue=r,r!==null&&(e.flags|=4)}else{o=l.nodeType===9?l:l.ownerDocument,n==="http://www.w3.org/1999/xhtml"&&(n=Ou(t)),n==="http://www.w3.org/1999/xhtml"?t==="script"?(n=o.createElement("div"),n.innerHTML="<script><\/script>",n=n.removeChild(n.firstChild)):typeof r.is=="string"?n=o.createElement(t,{is:r.is}):(n=o.createElement(t),t==="select"&&(o=n,r.multiple?o.multiple=!0:r.size&&(o.size=r.size))):n=o.createElementNS(n,t),n[Wn]=e,n[ur]=r,qc(n,e,!1,!1),e.stateNode=n;n:{switch(o=Bi(t,r),t){case"dialog":B("cancel",n),B("close",n),l=r;break;case"iframe":case"object":case"embed":B("load",n),l=r;break;case"video":case"audio":for(l=0;l<Ut.length;l++)B(Ut[l],n);l=r;break;case"source":B("error",n),l=r;break;case"img":case"image":case"link":B("error",n),B("load",n),l=r;break;case"details":B("toggle",n),l=r;break;case"input":Us(n,r),l=Li(n,r),B("invalid",n);break;case"option":l=r;break;case"select":n._wrapperState={wasMultiple:!!r.multiple},l=H({},r,{value:void 0}),B("invalid",n);break;case"textarea":Ws(n,r),l=Mi(n,r),B("invalid",n);break;default:l=r}Fi(t,l),s=l;for(i in s)if(s.hasOwnProperty(i)){var a=s[i];i==="style"?_u(n,a):i==="dangerouslySetInnerHTML"?(a=a?a.__html:void 0,a!=null&&Eu(n,a)):i==="children"?typeof a=="string"?(t!=="textarea"||a!=="")&&nr(n,a):typeof a=="number"&&nr(n,""+a):i!=="suppressContentEditableWarning"&&i!=="suppressHydrationWarning"&&i!=="autoFocus"&&(bt.hasOwnProperty(i)?a!=null&&i==="onScroll"&&B("scroll",n):a!=null&&Lo(n,i,a,o))}switch(t){case"input":Nr(n),Vs(n,r,!1);break;case"textarea":Nr(n),Gs(n);break;case"option":r.value!=null&&n.setAttribute("value",""+Ie(r.value));break;case"select":n.multiple=!!r.multiple,i=r.value,i!=null?ct(n,!!r.multiple,i,!1):r.defaultValue!=null&&ct(n,!!r.multiple,r.defaultValue,!0);break;default:typeof l.onClick=="function"&&(n.onclick=hl)}switch(t){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break n;case"img":r=!0;break n;default:r=!1}}r&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return an(e),null;case 6:if(n&&e.stateNode!=null)bc(n,e,n.memoizedProps,r);else{if(typeof r!="string"&&e.stateNode===null)throw Error(k(166));if(t=De(fr.current),De(Kn.current),Br(e)){if(r=e.stateNode,t=e.memoizedProps,r[Wn]=e,(i=r.nodeValue!==t)&&(n=In,n!==null))switch(n.tag){case 3:Fr(r.nodeValue,t,(n.mode&1)!==0);break;case 5:n.memoizedProps.suppressHydrationWarning!==!0&&Fr(r.nodeValue,t,(n.mode&1)!==0)}i&&(e.flags|=4)}else r=(t.nodeType===9?t:t.ownerDocument).createTextNode(r),r[Wn]=e,e.stateNode=r}return an(e),null;case 13:if(U(W),r=e.memoizedState,n===null||n.memoizedState!==null&&n.memoizedState.dehydrated!==null){if(V&&An!==null&&e.mode&1&&!(e.flags&128))vc(),yt(),e.flags|=98560,i=!1;else if(i=Br(e),r!==null&&r.dehydrated!==null){if(n===null){if(!i)throw Error(k(318));if(i=e.memoizedState,i=i!==null?i.dehydrated:null,!i)throw Error(k(317));i[Wn]=e}else yt(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;an(e),i=!1}else Mn!==null&&(xo(Mn),Mn=null),i=!0;if(!i)return e.flags&65536?e:null}return e.flags&128?(e.lanes=t,e):(r=r!==null,r!==(n!==null&&n.memoizedState!==null)&&r&&(e.child.flags|=8192,e.mode&1&&(n===null||W.current&1?b===0&&(b=3):ms())),e.updateQueue!==null&&(e.flags|=4),an(e),null);case 4:return kt(),po(n,e),n===null&&sr(e.stateNode.containerInfo),an(e),null;case 10:return bo(e.type._context),an(e),null;case 17:return yn(e.type)&&gl(),an(e),null;case 19:if(U(W),i=e.memoizedState,i===null)return an(e),null;if(r=(e.flags&128)!==0,o=i.rendering,o===null)if(r)Dt(i,!1);else{if(b!==0||n!==null&&n.flags&128)for(n=e.child;n!==null;){if(o=Al(n),o!==null){for(e.flags|=128,Dt(i,!1),r=o.updateQueue,r!==null&&(e.updateQueue=r,e.flags|=4),e.subtreeFlags=0,r=t,t=e.child;t!==null;)i=t,n=r,i.flags&=14680066,o=i.alternate,o===null?(i.childLanes=0,i.lanes=n,i.child=null,i.subtreeFlags=0,i.memoizedProps=null,i.memoizedState=null,i.updateQueue=null,i.dependencies=null,i.stateNode=null):(i.childLanes=o.childLanes,i.lanes=o.lanes,i.child=o.child,i.subtreeFlags=0,i.deletions=null,i.memoizedProps=o.memoizedProps,i.memoizedState=o.memoizedState,i.updateQueue=o.updateQueue,i.type=o.type,n=o.dependencies,i.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),t=t.sibling;return $(W,W.current&1|2),e.child}n=n.sibling}i.tail!==null&&Z()>At&&(e.flags|=128,r=!0,Dt(i,!1),e.lanes=4194304)}else{if(!r)if(n=Al(o),n!==null){if(e.flags|=128,r=!0,t=n.updateQueue,t!==null&&(e.updateQueue=t,e.flags|=4),Dt(i,!0),i.tail===null&&i.tailMode==="hidden"&&!o.alternate&&!V)return an(e),null}else 2*Z()-i.renderingStartTime>At&&t!==1073741824&&(e.flags|=128,r=!0,Dt(i,!1),e.lanes=4194304);i.isBackwards?(o.sibling=e.child,e.child=o):(t=i.last,t!==null?t.sibling=o:e.child=o,i.last=o)}return i.tail!==null?(e=i.tail,i.rendering=e,i.tail=e.sibling,i.renderingStartTime=Z(),e.sibling=null,t=W.current,$(W,r?t&1|2:t&1),e):(an(e),null);case 22:case 23:return gs(),r=e.memoizedState!==null,n!==null&&n.memoizedState!==null!==r&&(e.flags|=8192),r&&e.mode&1?kn&1073741824&&(an(e),e.subtreeFlags&6&&(e.flags|=8192)):an(e),null;case 24:return null;case 25:return null}throw Error(k(156,e.tag))}function ep(n,e){switch(Zo(e),e.tag){case 1:return yn(e.type)&&gl(),n=e.flags,n&65536?(e.flags=n&-65537|128,e):null;case 3:return kt(),U(vn),U(cn),ls(),n=e.flags,n&65536&&!(n&128)?(e.flags=n&-65537|128,e):null;case 5:return rs(e),null;case 13:if(U(W),n=e.memoizedState,n!==null&&n.dehydrated!==null){if(e.alternate===null)throw Error(k(340));yt()}return n=e.flags,n&65536?(e.flags=n&-65537|128,e):null;case 19:return U(W),null;case 4:return kt(),null;case 10:return bo(e.type._context),null;case 22:case 23:return gs(),null;case 24:return null;default:return null}}var Wr=!1,un=!1,tp=typeof WeakSet=="function"?WeakSet:Set,P=null;function at(n,e){var t=n.ref;if(t!==null)if(typeof t=="function")try{t(null)}catch(r){Q(n,e,r)}else t.current=null}function ho(n,e,t){try{t()}catch(r){Q(n,e,r)}}var za=!1;function rp(n,e){if(Yi=fl,n=lc(),Ko(n)){if("selectionStart"in n)var t={start:n.selectionStart,end:n.selectionEnd};else n:{t=(t=n.ownerDocument)&&t.defaultView||window;var r=t.getSelection&&t.getSelection();if(r&&r.rangeCount!==0){t=r.anchorNode;var l=r.anchorOffset,i=r.focusNode;r=r.focusOffset;try{t.nodeType,i.nodeType}catch{t=null;break n}var o=0,s=-1,a=-1,u=0,f=0,d=n,p=null;e:for(;;){for(var m;d!==t||l!==0&&d.nodeType!==3||(s=o+l),d!==i||r!==0&&d.nodeType!==3||(a=o+r),d.nodeType===3&&(o+=d.nodeValue.length),(m=d.firstChild)!==null;)p=d,d=m;for(;;){if(d===n)break e;if(p===t&&++u===l&&(s=o),p===i&&++f===r&&(a=o),(m=d.nextSibling)!==null)break;d=p,p=d.parentNode}d=m}t=s===-1||a===-1?null:{start:s,end:a}}else t=null}t=t||{start:0,end:0}}else t=null;for(qi={focusedElem:n,selectionRange:t},fl=!1,P=e;P!==null;)if(e=P,n=e.child,(e.subtreeFlags&1028)!==0&&n!==null)n.return=e,P=n;else for(;P!==null;){e=P;try{var w=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(w!==null){var y=w.memoizedProps,A=w.memoizedState,h=e.stateNode,c=h.getSnapshotBeforeUpdate(e.elementType===e.type?y:Dn(e.type,y),A);h.__reactInternalSnapshotBeforeUpdate=c}break;case 3:var g=e.stateNode.containerInfo;g.nodeType===1?g.textContent="":g.nodeType===9&&g.documentElement&&g.removeChild(g.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(k(163))}}catch(v){Q(e,e.return,v)}if(n=e.sibling,n!==null){n.return=e.return,P=n;break}P=e.return}return w=za,za=!1,w}function Xt(n,e,t){var r=e.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var l=r=r.next;do{if((l.tag&n)===n){var i=l.destroy;l.destroy=void 0,i!==void 0&&ho(e,t,i)}l=l.next}while(l!==r)}}function Wl(n,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var t=e=e.next;do{if((t.tag&n)===n){var r=t.create;t.destroy=r()}t=t.next}while(t!==e)}}function go(n){var e=n.ref;if(e!==null){var t=n.stateNode;switch(n.tag){case 5:n=t;break;default:n=t}typeof e=="function"?e(n):e.current=n}}function n0(n){var e=n.alternate;e!==null&&(n.alternate=null,n0(e)),n.child=null,n.deletions=null,n.sibling=null,n.tag===5&&(e=n.stateNode,e!==null&&(delete e[Wn],delete e[ur],delete e[no],delete e[Fd],delete e[Bd])),n.stateNode=null,n.return=null,n.dependencies=null,n.memoizedProps=null,n.memoizedState=null,n.pendingProps=null,n.stateNode=null,n.updateQueue=null}function e0(n){return n.tag===5||n.tag===3||n.tag===4}function La(n){n:for(;;){for(;n.sibling===null;){if(n.return===null||e0(n.return))return null;n=n.return}for(n.sibling.return=n.return,n=n.sibling;n.tag!==5&&n.tag!==6&&n.tag!==18;){if(n.flags&2||n.child===null||n.tag===4)continue n;n.child.return=n,n=n.child}if(!(n.flags&2))return n.stateNode}}function mo(n,e,t){var r=n.tag;if(r===5||r===6)n=n.stateNode,e?t.nodeType===8?t.parentNode.insertBefore(n,e):t.insertBefore(n,e):(t.nodeType===8?(e=t.parentNode,e.insertBefore(n,t)):(e=t,e.appendChild(n)),t=t._reactRootContainer,t!=null||e.onclick!==null||(e.onclick=hl));else if(r!==4&&(n=n.child,n!==null))for(mo(n,e,t),n=n.sibling;n!==null;)mo(n,e,t),n=n.sibling}function vo(n,e,t){var r=n.tag;if(r===5||r===6)n=n.stateNode,e?t.insertBefore(n,e):t.appendChild(n);else if(r!==4&&(n=n.child,n!==null))for(vo(n,e,t),n=n.sibling;n!==null;)vo(n,e,t),n=n.sibling}var rn=null,jn=!1;function oe(n,e,t){for(t=t.child;t!==null;)t0(n,e,t),t=t.sibling}function t0(n,e,t){if(Qn&&typeof Qn.onCommitFiberUnmount=="function")try{Qn.onCommitFiberUnmount(Dl,t)}catch{}switch(t.tag){case 5:un||at(t,e);case 6:var r=rn,l=jn;rn=null,oe(n,e,t),rn=r,jn=l,rn!==null&&(jn?(n=rn,t=t.stateNode,n.nodeType===8?n.parentNode.removeChild(t):n.removeChild(t)):rn.removeChild(t.stateNode));break;case 18:rn!==null&&(jn?(n=rn,t=t.stateNode,n.nodeType===8?vi(n.parentNode,t):n.nodeType===1&&vi(n,t),lr(n)):vi(rn,t.stateNode));break;case 4:r=rn,l=jn,rn=t.stateNode.containerInfo,jn=!0,oe(n,e,t),rn=r,jn=l;break;case 0:case 11:case 14:case 15:if(!un&&(r=t.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){l=r=r.next;do{var i=l,o=i.destroy;i=i.tag,o!==void 0&&(i&2||i&4)&&ho(t,e,o),l=l.next}while(l!==r)}oe(n,e,t);break;case 1:if(!un&&(at(t,e),r=t.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=t.memoizedProps,r.state=t.memoizedState,r.componentWillUnmount()}catch(s){Q(t,e,s)}oe(n,e,t);break;case 21:oe(n,e,t);break;case 22:t.mode&1?(un=(r=un)||t.memoizedState!==null,oe(n,e,t),un=r):oe(n,e,t);break;default:oe(n,e,t)}}function Da(n){var e=n.updateQueue;if(e!==null){n.updateQueue=null;var t=n.stateNode;t===null&&(t=n.stateNode=new tp),e.forEach(function(r){var l=dp.bind(null,n,r);t.has(r)||(t.add(r),r.then(l,l))})}}function Ln(n,e){var t=e.deletions;if(t!==null)for(var r=0;r<t.length;r++){var l=t[r];try{var i=n,o=e,s=o;n:for(;s!==null;){switch(s.tag){case 5:rn=s.stateNode,jn=!1;break n;case 3:rn=s.stateNode.containerInfo,jn=!0;break n;case 4:rn=s.stateNode.containerInfo,jn=!0;break n}s=s.return}if(rn===null)throw Error(k(160));t0(i,o,l),rn=null,jn=!1;var a=l.alternate;a!==null&&(a.return=null),l.return=null}catch(u){Q(l,e,u)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)r0(e,n),e=e.sibling}function r0(n,e){var t=n.alternate,r=n.flags;switch(n.tag){case 0:case 11:case 14:case 15:if(Ln(e,n),Un(n),r&4){try{Xt(3,n,n.return),Wl(3,n)}catch(y){Q(n,n.return,y)}try{Xt(5,n,n.return)}catch(y){Q(n,n.return,y)}}break;case 1:Ln(e,n),Un(n),r&512&&t!==null&&at(t,t.return);break;case 5:if(Ln(e,n),Un(n),r&512&&t!==null&&at(t,t.return),n.flags&32){var l=n.stateNode;try{nr(l,"")}catch(y){Q(n,n.return,y)}}if(r&4&&(l=n.stateNode,l!=null)){var i=n.memoizedProps,o=t!==null?t.memoizedProps:i,s=n.type,a=n.updateQueue;if(n.updateQueue=null,a!==null)try{s==="input"&&i.type==="radio"&&i.name!=null&&Pu(l,i),Bi(s,o);var u=Bi(s,i);for(o=0;o<a.length;o+=2){var f=a[o],d=a[o+1];f==="style"?_u(l,d):f==="dangerouslySetInnerHTML"?Eu(l,d):f==="children"?nr(l,d):Lo(l,f,d,u)}switch(s){case"input":Di(l,i);break;case"textarea":Cu(l,i);break;case"select":var p=l._wrapperState.wasMultiple;l._wrapperState.wasMultiple=!!i.multiple;var m=i.value;m!=null?ct(l,!!i.multiple,m,!1):p!==!!i.multiple&&(i.defaultValue!=null?ct(l,!!i.multiple,i.defaultValue,!0):ct(l,!!i.multiple,i.multiple?[]:"",!1))}l[ur]=i}catch(y){Q(n,n.return,y)}}break;case 6:if(Ln(e,n),Un(n),r&4){if(n.stateNode===null)throw Error(k(162));l=n.stateNode,i=n.memoizedProps;try{l.nodeValue=i}catch(y){Q(n,n.return,y)}}break;case 3:if(Ln(e,n),Un(n),r&4&&t!==null&&t.memoizedState.isDehydrated)try{lr(e.containerInfo)}catch(y){Q(n,n.return,y)}break;case 4:Ln(e,n),Un(n);break;case 13:Ln(e,n),Un(n),l=n.child,l.flags&8192&&(i=l.memoizedState!==null,l.stateNode.isHidden=i,!i||l.alternate!==null&&l.alternate.memoizedState!==null||(ps=Z())),r&4&&Da(n);break;case 22:if(f=t!==null&&t.memoizedState!==null,n.mode&1?(un=(u=un)||f,Ln(e,n),un=u):Ln(e,n),Un(n),r&8192){if(u=n.memoizedState!==null,(n.stateNode.isHidden=u)&&!f&&n.mode&1)for(P=n,f=n.child;f!==null;){for(d=P=f;P!==null;){switch(p=P,m=p.child,p.tag){case 0:case 11:case 14:case 15:Xt(4,p,p.return);break;case 1:at(p,p.return);var w=p.stateNode;if(typeof w.componentWillUnmount=="function"){r=p,t=p.return;try{e=r,w.props=e.memoizedProps,w.state=e.memoizedState,w.componentWillUnmount()}catch(y){Q(r,t,y)}}break;case 5:at(p,p.return);break;case 22:if(p.memoizedState!==null){Ma(d);continue}}m!==null?(m.return=p,P=m):Ma(d)}f=f.sibling}n:for(f=null,d=n;;){if(d.tag===5){if(f===null){f=d;try{l=d.stateNode,u?(i=l.style,typeof i.setProperty=="function"?i.setProperty("display","none","important"):i.display="none"):(s=d.stateNode,a=d.memoizedProps.style,o=a!=null&&a.hasOwnProperty("display")?a.display:null,s.style.display=Tu("display",o))}catch(y){Q(n,n.return,y)}}}else if(d.tag===6){if(f===null)try{d.stateNode.nodeValue=u?"":d.memoizedProps}catch(y){Q(n,n.return,y)}}else if((d.tag!==22&&d.tag!==23||d.memoizedState===null||d===n)&&d.child!==null){d.child.return=d,d=d.child;continue}if(d===n)break n;for(;d.sibling===null;){if(d.return===null||d.return===n)break n;f===d&&(f=null),d=d.return}f===d&&(f=null),d.sibling.return=d.return,d=d.sibling}}break;case 19:Ln(e,n),Un(n),r&4&&Da(n);break;case 21:break;default:Ln(e,n),Un(n)}}function Un(n){var e=n.flags;if(e&2){try{n:{for(var t=n.return;t!==null;){if(e0(t)){var r=t;break n}t=t.return}throw Error(k(160))}switch(r.tag){case 5:var l=r.stateNode;r.flags&32&&(nr(l,""),r.flags&=-33);var i=La(n);vo(n,i,l);break;case 3:case 4:var o=r.stateNode.containerInfo,s=La(n);mo(n,s,o);break;default:throw Error(k(161))}}catch(a){Q(n,n.return,a)}n.flags&=-3}e&4096&&(n.flags&=-4097)}function lp(n,e,t){P=n,l0(n)}function l0(n,e,t){for(var r=(n.mode&1)!==0;P!==null;){var l=P,i=l.child;if(l.tag===22&&r){var o=l.memoizedState!==null||Wr;if(!o){var s=l.alternate,a=s!==null&&s.memoizedState!==null||un;s=Wr;var u=un;if(Wr=o,(un=a)&&!u)for(P=l;P!==null;)o=P,a=o.child,o.tag===22&&o.memoizedState!==null?$a(l):a!==null?(a.return=o,P=a):$a(l);for(;i!==null;)P=i,l0(i),i=i.sibling;P=l,Wr=s,un=u}ja(n)}else l.subtreeFlags&8772&&i!==null?(i.return=l,P=i):ja(n)}}function ja(n){for(;P!==null;){var e=P;if(e.flags&8772){var t=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:un||Wl(5,e);break;case 1:var r=e.stateNode;if(e.flags&4&&!un)if(t===null)r.componentDidMount();else{var l=e.elementType===e.type?t.memoizedProps:Dn(e.type,t.memoizedProps);r.componentDidUpdate(l,t.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var i=e.updateQueue;i!==null&&ka(e,i,r);break;case 3:var o=e.updateQueue;if(o!==null){if(t=null,e.child!==null)switch(e.child.tag){case 5:t=e.child.stateNode;break;case 1:t=e.child.stateNode}ka(e,o,t)}break;case 5:var s=e.stateNode;if(t===null&&e.flags&4){t=s;var a=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":a.autoFocus&&t.focus();break;case"img":a.src&&(t.src=a.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var u=e.alternate;if(u!==null){var f=u.memoizedState;if(f!==null){var d=f.dehydrated;d!==null&&lr(d)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(k(163))}un||e.flags&512&&go(e)}catch(p){Q(e,e.return,p)}}if(e===n){P=null;break}if(t=e.sibling,t!==null){t.return=e.return,P=t;break}P=e.return}}function Ma(n){for(;P!==null;){var e=P;if(e===n){P=null;break}var t=e.sibling;if(t!==null){t.return=e.return,P=t;break}P=e.return}}function $a(n){for(;P!==null;){var e=P;try{switch(e.tag){case 0:case 11:case 15:var t=e.return;try{Wl(4,e)}catch(a){Q(e,t,a)}break;case 1:var r=e.stateNode;if(typeof r.componentDidMount=="function"){var l=e.return;try{r.componentDidMount()}catch(a){Q(e,l,a)}}var i=e.return;try{go(e)}catch(a){Q(e,i,a)}break;case 5:var o=e.return;try{go(e)}catch(a){Q(e,o,a)}}}catch(a){Q(e,e.return,a)}if(e===n){P=null;break}var s=e.sibling;if(s!==null){s.return=e.return,P=s;break}P=e.return}}var ip=Math.ceil,Pl=le.ReactCurrentDispatcher,fs=le.ReactCurrentOwner,_n=le.ReactCurrentBatchConfig,L=0,tn=null,Y=null,ln=0,kn=0,ut=Ce(0),b=0,gr=null,Ve=0,Gl=0,ds=0,Zt=null,gn=null,ps=0,At=1/0,Xn=null,Cl=!1,yo=null,we=null,Gr=!1,de=null,Ol=0,Yt=0,wo=null,rl=-1,ll=0;function dn(){return L&6?Z():rl!==-1?rl:rl=Z()}function ke(n){return n.mode&1?L&2&&ln!==0?ln&-ln:Vd.transition!==null?(ll===0&&(ll=Vu()),ll):(n=j,n!==0||(n=window.event,n=n===void 0?16:Zu(n.type)),n):1}function Fn(n,e,t,r){if(50<Yt)throw Yt=0,wo=null,Error(k(185));wr(n,t,r),(!(L&2)||n!==tn)&&(n===tn&&(!(L&2)&&(Gl|=t),b===4&&ce(n,ln)),wn(n,r),t===1&&L===0&&!(e.mode&1)&&(At=Z()+500,Bl&&Oe()))}function wn(n,e){var t=n.callbackNode;Vf(n,e);var r=cl(n,n===tn?ln:0);if(r===0)t!==null&&Ks(t),n.callbackNode=null,n.callbackPriority=0;else if(e=r&-r,n.callbackPriority!==e){if(t!=null&&Ks(t),e===1)n.tag===0?Ud(Fa.bind(null,n)):hc(Fa.bind(null,n)),Md(function(){!(L&6)&&Oe()}),t=null;else{switch(Wu(r)){case 1:t=Fo;break;case 4:t=Bu;break;case 16:t=ul;break;case 536870912:t=Uu;break;default:t=ul}t=d0(t,i0.bind(null,n))}n.callbackPriority=e,n.callbackNode=t}}function i0(n,e){if(rl=-1,ll=0,L&6)throw Error(k(327));var t=n.callbackNode;if(gt()&&n.callbackNode!==t)return null;var r=cl(n,n===tn?ln:0);if(r===0)return null;if(r&30||r&n.expiredLanes||e)e=El(n,r);else{e=r;var l=L;L|=2;var i=s0();(tn!==n||ln!==e)&&(Xn=null,At=Z()+500,je(n,e));do try{ap();break}catch(s){o0(n,s)}while(!0);Jo(),Pl.current=i,L=l,Y!==null?e=0:(tn=null,ln=0,e=b)}if(e!==0){if(e===2&&(l=Hi(n),l!==0&&(r=l,e=ko(n,l))),e===1)throw t=gr,je(n,0),ce(n,r),wn(n,Z()),t;if(e===6)ce(n,r);else{if(l=n.current.alternate,!(r&30)&&!op(l)&&(e=El(n,r),e===2&&(i=Hi(n),i!==0&&(r=i,e=ko(n,i))),e===1))throw t=gr,je(n,0),ce(n,r),wn(n,Z()),t;switch(n.finishedWork=l,n.finishedLanes=r,e){case 0:case 1:throw Error(k(345));case 2:Ne(n,gn,Xn);break;case 3:if(ce(n,r),(r&130023424)===r&&(e=ps+500-Z(),10<e)){if(cl(n,0)!==0)break;if(l=n.suspendedLanes,(l&r)!==r){dn(),n.pingedLanes|=n.suspendedLanes&l;break}n.timeoutHandle=bi(Ne.bind(null,n,gn,Xn),e);break}Ne(n,gn,Xn);break;case 4:if(ce(n,r),(r&4194240)===r)break;for(e=n.eventTimes,l=-1;0<r;){var o=31-$n(r);i=1<<o,o=e[o],o>l&&(l=o),r&=~i}if(r=l,r=Z()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*ip(r/1960))-r,10<r){n.timeoutHandle=bi(Ne.bind(null,n,gn,Xn),r);break}Ne(n,gn,Xn);break;case 5:Ne(n,gn,Xn);break;default:throw Error(k(329))}}}return wn(n,Z()),n.callbackNode===t?i0.bind(null,n):null}function ko(n,e){var t=Zt;return n.current.memoizedState.isDehydrated&&(je(n,e).flags|=256),n=El(n,e),n!==2&&(e=gn,gn=t,e!==null&&xo(e)),n}function xo(n){gn===null?gn=n:gn.push.apply(gn,n)}function op(n){for(var e=n;;){if(e.flags&16384){var t=e.updateQueue;if(t!==null&&(t=t.stores,t!==null))for(var r=0;r<t.length;r++){var l=t[r],i=l.getSnapshot;l=l.value;try{if(!Bn(i(),l))return!1}catch{return!1}}}if(t=e.child,e.subtreeFlags&16384&&t!==null)t.return=e,e=t;else{if(e===n)break;for(;e.sibling===null;){if(e.return===null||e.return===n)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function ce(n,e){for(e&=~ds,e&=~Gl,n.suspendedLanes|=e,n.pingedLanes&=~e,n=n.expirationTimes;0<e;){var t=31-$n(e),r=1<<t;n[t]=-1,e&=~r}}function Fa(n){if(L&6)throw Error(k(327));gt();var e=cl(n,0);if(!(e&1))return wn(n,Z()),null;var t=El(n,e);if(n.tag!==0&&t===2){var r=Hi(n);r!==0&&(e=r,t=ko(n,r))}if(t===1)throw t=gr,je(n,0),ce(n,e),wn(n,Z()),t;if(t===6)throw Error(k(345));return n.finishedWork=n.current.alternate,n.finishedLanes=e,Ne(n,gn,Xn),wn(n,Z()),null}function hs(n,e){var t=L;L|=1;try{return n(e)}finally{L=t,L===0&&(At=Z()+500,Bl&&Oe())}}function We(n){de!==null&&de.tag===0&&!(L&6)&&gt();var e=L;L|=1;var t=_n.transition,r=j;try{if(_n.transition=null,j=1,n)return n()}finally{j=r,_n.transition=t,L=e,!(L&6)&&Oe()}}function gs(){kn=ut.current,U(ut)}function je(n,e){n.finishedWork=null,n.finishedLanes=0;var t=n.timeoutHandle;if(t!==-1&&(n.timeoutHandle=-1,jd(t)),Y!==null)for(t=Y.return;t!==null;){var r=t;switch(Zo(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&gl();break;case 3:kt(),U(vn),U(cn),ls();break;case 5:rs(r);break;case 4:kt();break;case 13:U(W);break;case 19:U(W);break;case 10:bo(r.type._context);break;case 22:case 23:gs()}t=t.return}if(tn=n,Y=n=xe(n.current,null),ln=kn=e,b=0,gr=null,ds=Gl=Ve=0,gn=Zt=null,Le!==null){for(e=0;e<Le.length;e++)if(t=Le[e],r=t.interleaved,r!==null){t.interleaved=null;var l=r.next,i=t.pending;if(i!==null){var o=i.next;i.next=l,r.next=o}t.pending=r}Le=null}return n}function o0(n,e){do{var t=Y;try{if(Jo(),nl.current=Sl,Il){for(var r=G.memoizedState;r!==null;){var l=r.queue;l!==null&&(l.pending=null),r=r.next}Il=!1}if(Ue=0,en=J=G=null,Kt=!1,dr=0,fs.current=null,t===null||t.return===null){b=1,gr=e,Y=null;break}n:{var i=n,o=t.return,s=t,a=e;if(e=ln,s.flags|=32768,a!==null&&typeof a=="object"&&typeof a.then=="function"){var u=a,f=s,d=f.tag;if(!(f.mode&1)&&(d===0||d===11||d===15)){var p=f.alternate;p?(f.updateQueue=p.updateQueue,f.memoizedState=p.memoizedState,f.lanes=p.lanes):(f.updateQueue=null,f.memoizedState=null)}var m=Ca(o);if(m!==null){m.flags&=-257,Oa(m,o,s,i,e),m.mode&1&&Pa(i,u,e),e=m,a=u;var w=e.updateQueue;if(w===null){var y=new Set;y.add(a),e.updateQueue=y}else w.add(a);break n}else{if(!(e&1)){Pa(i,u,e),ms();break n}a=Error(k(426))}}else if(V&&s.mode&1){var A=Ca(o);if(A!==null){!(A.flags&65536)&&(A.flags|=256),Oa(A,o,s,i,e),Yo(xt(a,s));break n}}i=a=xt(a,s),b!==4&&(b=2),Zt===null?Zt=[i]:Zt.push(i),i=o;do{switch(i.tag){case 3:i.flags|=65536,e&=-e,i.lanes|=e;var h=Wc(i,a,e);wa(i,h);break n;case 1:s=a;var c=i.type,g=i.stateNode;if(!(i.flags&128)&&(typeof c.getDerivedStateFromError=="function"||g!==null&&typeof g.componentDidCatch=="function"&&(we===null||!we.has(g)))){i.flags|=65536,e&=-e,i.lanes|=e;var v=Gc(i,s,e);wa(i,v);break n}}i=i.return}while(i!==null)}u0(t)}catch(I){e=I,Y===t&&t!==null&&(Y=t=t.return);continue}break}while(!0)}function s0(){var n=Pl.current;return Pl.current=Sl,n===null?Sl:n}function ms(){(b===0||b===3||b===2)&&(b=4),tn===null||!(Ve&268435455)&&!(Gl&268435455)||ce(tn,ln)}function El(n,e){var t=L;L|=2;var r=s0();(tn!==n||ln!==e)&&(Xn=null,je(n,e));do try{sp();break}catch(l){o0(n,l)}while(!0);if(Jo(),L=t,Pl.current=r,Y!==null)throw Error(k(261));return tn=null,ln=0,b}function sp(){for(;Y!==null;)a0(Y)}function ap(){for(;Y!==null&&!zf();)a0(Y)}function a0(n){var e=f0(n.alternate,n,kn);n.memoizedProps=n.pendingProps,e===null?u0(n):Y=e,fs.current=null}function u0(n){var e=n;do{var t=e.alternate;if(n=e.return,e.flags&32768){if(t=ep(t,e),t!==null){t.flags&=32767,Y=t;return}if(n!==null)n.flags|=32768,n.subtreeFlags=0,n.deletions=null;else{b=6,Y=null;return}}else if(t=np(t,e,kn),t!==null){Y=t;return}if(e=e.sibling,e!==null){Y=e;return}Y=e=n}while(e!==null);b===0&&(b=5)}function Ne(n,e,t){var r=j,l=_n.transition;try{_n.transition=null,j=1,up(n,e,t,r)}finally{_n.transition=l,j=r}return null}function up(n,e,t,r){do gt();while(de!==null);if(L&6)throw Error(k(327));t=n.finishedWork;var l=n.finishedLanes;if(t===null)return null;if(n.finishedWork=null,n.finishedLanes=0,t===n.current)throw Error(k(177));n.callbackNode=null,n.callbackPriority=0;var i=t.lanes|t.childLanes;if(Wf(n,i),n===tn&&(Y=tn=null,ln=0),!(t.subtreeFlags&2064)&&!(t.flags&2064)||Gr||(Gr=!0,d0(ul,function(){return gt(),null})),i=(t.flags&15990)!==0,t.subtreeFlags&15990||i){i=_n.transition,_n.transition=null;var o=j;j=1;var s=L;L|=4,fs.current=null,rp(n,t),r0(t,n),Td(qi),fl=!!Yi,qi=Yi=null,n.current=t,lp(t),Lf(),L=s,j=o,_n.transition=i}else n.current=t;if(Gr&&(Gr=!1,de=n,Ol=l),i=n.pendingLanes,i===0&&(we=null),Mf(t.stateNode),wn(n,Z()),e!==null)for(r=n.onRecoverableError,t=0;t<e.length;t++)l=e[t],r(l.value,{componentStack:l.stack,digest:l.digest});if(Cl)throw Cl=!1,n=yo,yo=null,n;return Ol&1&&n.tag!==0&&gt(),i=n.pendingLanes,i&1?n===wo?Yt++:(Yt=0,wo=n):Yt=0,Oe(),null}function gt(){if(de!==null){var n=Wu(Ol),e=_n.transition,t=j;try{if(_n.transition=null,j=16>n?16:n,de===null)var r=!1;else{if(n=de,de=null,Ol=0,L&6)throw Error(k(331));var l=L;for(L|=4,P=n.current;P!==null;){var i=P,o=i.child;if(P.flags&16){var s=i.deletions;if(s!==null){for(var a=0;a<s.length;a++){var u=s[a];for(P=u;P!==null;){var f=P;switch(f.tag){case 0:case 11:case 15:Xt(8,f,i)}var d=f.child;if(d!==null)d.return=f,P=d;else for(;P!==null;){f=P;var p=f.sibling,m=f.return;if(n0(f),f===u){P=null;break}if(p!==null){p.return=m,P=p;break}P=m}}}var w=i.alternate;if(w!==null){var y=w.child;if(y!==null){w.child=null;do{var A=y.sibling;y.sibling=null,y=A}while(y!==null)}}P=i}}if(i.subtreeFlags&2064&&o!==null)o.return=i,P=o;else n:for(;P!==null;){if(i=P,i.flags&2048)switch(i.tag){case 0:case 11:case 15:Xt(9,i,i.return)}var h=i.sibling;if(h!==null){h.return=i.return,P=h;break n}P=i.return}}var c=n.current;for(P=c;P!==null;){o=P;var g=o.child;if(o.subtreeFlags&2064&&g!==null)g.return=o,P=g;else n:for(o=c;P!==null;){if(s=P,s.flags&2048)try{switch(s.tag){case 0:case 11:case 15:Wl(9,s)}}catch(I){Q(s,s.return,I)}if(s===o){P=null;break n}var v=s.sibling;if(v!==null){v.return=s.return,P=v;break n}P=s.return}}if(L=l,Oe(),Qn&&typeof Qn.onPostCommitFiberRoot=="function")try{Qn.onPostCommitFiberRoot(Dl,n)}catch{}r=!0}return r}finally{j=t,_n.transition=e}}return!1}function Ba(n,e,t){e=xt(t,e),e=Wc(n,e,1),n=ye(n,e,1),e=dn(),n!==null&&(wr(n,1,e),wn(n,e))}function Q(n,e,t){if(n.tag===3)Ba(n,n,t);else for(;e!==null;){if(e.tag===3){Ba(e,n,t);break}else if(e.tag===1){var r=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(we===null||!we.has(r))){n=xt(t,n),n=Gc(e,n,1),e=ye(e,n,1),n=dn(),e!==null&&(wr(e,1,n),wn(e,n));break}}e=e.return}}function cp(n,e,t){var r=n.pingCache;r!==null&&r.delete(e),e=dn(),n.pingedLanes|=n.suspendedLanes&t,tn===n&&(ln&t)===t&&(b===4||b===3&&(ln&130023424)===ln&&500>Z()-ps?je(n,0):ds|=t),wn(n,e)}function c0(n,e){e===0&&(n.mode&1?(e=Lr,Lr<<=1,!(Lr&130023424)&&(Lr=4194304)):e=1);var t=dn();n=te(n,e),n!==null&&(wr(n,e,t),wn(n,t))}function fp(n){var e=n.memoizedState,t=0;e!==null&&(t=e.retryLane),c0(n,t)}function dp(n,e){var t=0;switch(n.tag){case 13:var r=n.stateNode,l=n.memoizedState;l!==null&&(t=l.retryLane);break;case 19:r=n.stateNode;break;default:throw Error(k(314))}r!==null&&r.delete(e),c0(n,t)}var f0;f0=function(n,e,t){if(n!==null)if(n.memoizedProps!==e.pendingProps||vn.current)mn=!0;else{if(!(n.lanes&t)&&!(e.flags&128))return mn=!1,bd(n,e,t);mn=!!(n.flags&131072)}else mn=!1,V&&e.flags&1048576&&gc(e,yl,e.index);switch(e.lanes=0,e.tag){case 2:var r=e.type;tl(n,e),n=e.pendingProps;var l=vt(e,cn.current);ht(e,t),l=os(null,e,r,n,l,t);var i=ss();return e.flags|=1,typeof l=="object"&&l!==null&&typeof l.render=="function"&&l.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,yn(r)?(i=!0,ml(e)):i=!1,e.memoizedState=l.state!==null&&l.state!==void 0?l.state:null,es(e),l.updater=Vl,e.stateNode=l,l._reactInternals=e,oo(e,r,n,t),e=uo(null,e,r,!0,i,t)):(e.tag=0,V&&i&&Xo(e),fn(null,e,l,t),e=e.child),e;case 16:r=e.elementType;n:{switch(tl(n,e),n=e.pendingProps,l=r._init,r=l(r._payload),e.type=r,l=e.tag=hp(r),n=Dn(r,n),l){case 0:e=ao(null,e,r,n,t);break n;case 1:e=_a(null,e,r,n,t);break n;case 11:e=Ea(null,e,r,n,t);break n;case 14:e=Ta(null,e,r,Dn(r.type,n),t);break n}throw Error(k(306,r,""))}return e;case 0:return r=e.type,l=e.pendingProps,l=e.elementType===r?l:Dn(r,l),ao(n,e,r,l,t);case 1:return r=e.type,l=e.pendingProps,l=e.elementType===r?l:Dn(r,l),_a(n,e,r,l,t);case 3:n:{if(Xc(e),n===null)throw Error(k(387));r=e.pendingProps,i=e.memoizedState,l=i.element,xc(n,e),xl(e,r,null,t);var o=e.memoizedState;if(r=o.element,i.isDehydrated)if(i={element:r,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},e.updateQueue.baseState=i,e.memoizedState=i,e.flags&256){l=xt(Error(k(423)),e),e=Na(n,e,r,t,l);break n}else if(r!==l){l=xt(Error(k(424)),e),e=Na(n,e,r,t,l);break n}else for(An=ve(e.stateNode.containerInfo.firstChild),In=e,V=!0,Mn=null,t=wc(e,null,r,t),e.child=t;t;)t.flags=t.flags&-3|4096,t=t.sibling;else{if(yt(),r===l){e=re(n,e,t);break n}fn(n,e,r,t)}e=e.child}return e;case 5:return Ac(e),n===null&&ro(e),r=e.type,l=e.pendingProps,i=n!==null?n.memoizedProps:null,o=l.children,Ji(r,l)?o=null:i!==null&&Ji(r,i)&&(e.flags|=32),Kc(n,e),fn(n,e,o,t),e.child;case 6:return n===null&&ro(e),null;case 13:return Zc(n,e,t);case 4:return ts(e,e.stateNode.containerInfo),r=e.pendingProps,n===null?e.child=wt(e,null,r,t):fn(n,e,r,t),e.child;case 11:return r=e.type,l=e.pendingProps,l=e.elementType===r?l:Dn(r,l),Ea(n,e,r,l,t);case 7:return fn(n,e,e.pendingProps,t),e.child;case 8:return fn(n,e,e.pendingProps.children,t),e.child;case 12:return fn(n,e,e.pendingProps.children,t),e.child;case 10:n:{if(r=e.type._context,l=e.pendingProps,i=e.memoizedProps,o=l.value,$(wl,r._currentValue),r._currentValue=o,i!==null)if(Bn(i.value,o)){if(i.children===l.children&&!vn.current){e=re(n,e,t);break n}}else for(i=e.child,i!==null&&(i.return=e);i!==null;){var s=i.dependencies;if(s!==null){o=i.child;for(var a=s.firstContext;a!==null;){if(a.context===r){if(i.tag===1){a=Jn(-1,t&-t),a.tag=2;var u=i.updateQueue;if(u!==null){u=u.shared;var f=u.pending;f===null?a.next=a:(a.next=f.next,f.next=a),u.pending=a}}i.lanes|=t,a=i.alternate,a!==null&&(a.lanes|=t),lo(i.return,t,e),s.lanes|=t;break}a=a.next}}else if(i.tag===10)o=i.type===e.type?null:i.child;else if(i.tag===18){if(o=i.return,o===null)throw Error(k(341));o.lanes|=t,s=o.alternate,s!==null&&(s.lanes|=t),lo(o,t,e),o=i.sibling}else o=i.child;if(o!==null)o.return=i;else for(o=i;o!==null;){if(o===e){o=null;break}if(i=o.sibling,i!==null){i.return=o.return,o=i;break}o=o.return}i=o}fn(n,e,l.children,t),e=e.child}return e;case 9:return l=e.type,r=e.pendingProps.children,ht(e,t),l=Nn(l),r=r(l),e.flags|=1,fn(n,e,r,t),e.child;case 14:return r=e.type,l=Dn(r,e.pendingProps),l=Dn(r.type,l),Ta(n,e,r,l,t);case 15:return Hc(n,e,e.type,e.pendingProps,t);case 17:return r=e.type,l=e.pendingProps,l=e.elementType===r?l:Dn(r,l),tl(n,e),e.tag=1,yn(r)?(n=!0,ml(e)):n=!1,ht(e,t),Vc(e,r,l),oo(e,r,l,t),uo(null,e,r,!0,n,t);case 19:return Yc(n,e,t);case 22:return Qc(n,e,t)}throw Error(k(156,e.tag))};function d0(n,e){return Fu(n,e)}function pp(n,e,t,r){this.tag=n,this.key=t,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Tn(n,e,t,r){return new pp(n,e,t,r)}function vs(n){return n=n.prototype,!(!n||!n.isReactComponent)}function hp(n){if(typeof n=="function")return vs(n)?1:0;if(n!=null){if(n=n.$$typeof,n===jo)return 11;if(n===Mo)return 14}return 2}function xe(n,e){var t=n.alternate;return t===null?(t=Tn(n.tag,e,n.key,n.mode),t.elementType=n.elementType,t.type=n.type,t.stateNode=n.stateNode,t.alternate=n,n.alternate=t):(t.pendingProps=e,t.type=n.type,t.flags=0,t.subtreeFlags=0,t.deletions=null),t.flags=n.flags&14680064,t.childLanes=n.childLanes,t.lanes=n.lanes,t.child=n.child,t.memoizedProps=n.memoizedProps,t.memoizedState=n.memoizedState,t.updateQueue=n.updateQueue,e=n.dependencies,t.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},t.sibling=n.sibling,t.index=n.index,t.ref=n.ref,t}function il(n,e,t,r,l,i){var o=2;if(r=n,typeof n=="function")vs(n)&&(o=1);else if(typeof n=="string")o=5;else n:switch(n){case be:return Me(t.children,l,i,e);case Do:o=8,l|=8;break;case _i:return n=Tn(12,t,e,l|2),n.elementType=_i,n.lanes=i,n;case Ni:return n=Tn(13,t,e,l),n.elementType=Ni,n.lanes=i,n;case Ri:return n=Tn(19,t,e,l),n.elementType=Ri,n.lanes=i,n;case Au:return Hl(t,l,i,e);default:if(typeof n=="object"&&n!==null)switch(n.$$typeof){case ku:o=10;break n;case xu:o=9;break n;case jo:o=11;break n;case Mo:o=14;break n;case se:o=16,r=null;break n}throw Error(k(130,n==null?n:typeof n,""))}return e=Tn(o,t,e,l),e.elementType=n,e.type=r,e.lanes=i,e}function Me(n,e,t,r){return n=Tn(7,n,r,e),n.lanes=t,n}function Hl(n,e,t,r){return n=Tn(22,n,r,e),n.elementType=Au,n.lanes=t,n.stateNode={isHidden:!1},n}function Pi(n,e,t){return n=Tn(6,n,null,e),n.lanes=t,n}function Ci(n,e,t){return e=Tn(4,n.children!==null?n.children:[],n.key,e),e.lanes=t,e.stateNode={containerInfo:n.containerInfo,pendingChildren:null,implementation:n.implementation},e}function gp(n,e,t,r,l){this.tag=e,this.containerInfo=n,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=oi(0),this.expirationTimes=oi(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=oi(0),this.identifierPrefix=r,this.onRecoverableError=l,this.mutableSourceEagerHydrationData=null}function ys(n,e,t,r,l,i,o,s,a){return n=new gp(n,e,t,s,a),e===1?(e=1,i===!0&&(e|=8)):e=0,i=Tn(3,null,null,e),n.current=i,i.stateNode=n,i.memoizedState={element:r,isDehydrated:t,cache:null,transitions:null,pendingSuspenseBoundaries:null},es(i),n}function mp(n,e,t){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Je,key:r==null?null:""+r,children:n,containerInfo:e,implementation:t}}function p0(n){if(!n)return Se;n=n._reactInternals;n:{if(Ke(n)!==n||n.tag!==1)throw Error(k(170));var e=n;do{switch(e.tag){case 3:e=e.stateNode.context;break n;case 1:if(yn(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break n}}e=e.return}while(e!==null);throw Error(k(171))}if(n.tag===1){var t=n.type;if(yn(t))return pc(n,t,e)}return e}function h0(n,e,t,r,l,i,o,s,a){return n=ys(t,r,!0,n,l,i,o,s,a),n.context=p0(null),t=n.current,r=dn(),l=ke(t),i=Jn(r,l),i.callback=e??null,ye(t,i,l),n.current.lanes=l,wr(n,l,r),wn(n,r),n}function Ql(n,e,t,r){var l=e.current,i=dn(),o=ke(l);return t=p0(t),e.context===null?e.context=t:e.pendingContext=t,e=Jn(i,o),e.payload={element:n},r=r===void 0?null:r,r!==null&&(e.callback=r),n=ye(l,e,o),n!==null&&(Fn(n,l,o,i),br(n,l,o)),o}function Tl(n){if(n=n.current,!n.child)return null;switch(n.child.tag){case 5:return n.child.stateNode;default:return n.child.stateNode}}function Ua(n,e){if(n=n.memoizedState,n!==null&&n.dehydrated!==null){var t=n.retryLane;n.retryLane=t!==0&&t<e?t:e}}function ws(n,e){Ua(n,e),(n=n.alternate)&&Ua(n,e)}function vp(){return null}var g0=typeof reportError=="function"?reportError:function(n){console.error(n)};function ks(n){this._internalRoot=n}Kl.prototype.render=ks.prototype.render=function(n){var e=this._internalRoot;if(e===null)throw Error(k(409));Ql(n,e,null,null)};Kl.prototype.unmount=ks.prototype.unmount=function(){var n=this._internalRoot;if(n!==null){this._internalRoot=null;var e=n.containerInfo;We(function(){Ql(null,n,null,null)}),e[ee]=null}};function Kl(n){this._internalRoot=n}Kl.prototype.unstable_scheduleHydration=function(n){if(n){var e=Qu();n={blockedOn:null,target:n,priority:e};for(var t=0;t<ue.length&&e!==0&&e<ue[t].priority;t++);ue.splice(t,0,n),t===0&&Xu(n)}};function xs(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11)}function Xl(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11&&(n.nodeType!==8||n.nodeValue!==" react-mount-point-unstable "))}function Va(){}function yp(n,e,t,r,l){if(l){if(typeof r=="function"){var i=r;r=function(){var u=Tl(o);i.call(u)}}var o=h0(e,r,n,0,null,!1,!1,"",Va);return n._reactRootContainer=o,n[ee]=o.current,sr(n.nodeType===8?n.parentNode:n),We(),o}for(;l=n.lastChild;)n.removeChild(l);if(typeof r=="function"){var s=r;r=function(){var u=Tl(a);s.call(u)}}var a=ys(n,0,!1,null,null,!1,!1,"",Va);return n._reactRootContainer=a,n[ee]=a.current,sr(n.nodeType===8?n.parentNode:n),We(function(){Ql(e,a,t,r)}),a}function Zl(n,e,t,r,l){var i=t._reactRootContainer;if(i){var o=i;if(typeof l=="function"){var s=l;l=function(){var a=Tl(o);s.call(a)}}Ql(e,o,n,l)}else o=yp(t,e,n,l,r);return Tl(o)}Gu=function(n){switch(n.tag){case 3:var e=n.stateNode;if(e.current.memoizedState.isDehydrated){var t=Bt(e.pendingLanes);t!==0&&(Bo(e,t|1),wn(e,Z()),!(L&6)&&(At=Z()+500,Oe()))}break;case 13:We(function(){var r=te(n,1);if(r!==null){var l=dn();Fn(r,n,1,l)}}),ws(n,1)}};Uo=function(n){if(n.tag===13){var e=te(n,134217728);if(e!==null){var t=dn();Fn(e,n,134217728,t)}ws(n,134217728)}};Hu=function(n){if(n.tag===13){var e=ke(n),t=te(n,e);if(t!==null){var r=dn();Fn(t,n,e,r)}ws(n,e)}};Qu=function(){return j};Ku=function(n,e){var t=j;try{return j=n,e()}finally{j=t}};Vi=function(n,e,t){switch(e){case"input":if(Di(n,t),e=t.name,t.type==="radio"&&e!=null){for(t=n;t.parentNode;)t=t.parentNode;for(t=t.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<t.length;e++){var r=t[e];if(r!==n&&r.form===n.form){var l=Fl(r);if(!l)throw Error(k(90));Su(r),Di(r,l)}}}break;case"textarea":Cu(n,t);break;case"select":e=t.value,e!=null&&ct(n,!!t.multiple,e,!1)}};zu=hs;Lu=We;var wp={usingClientEntryPoint:!1,Events:[xr,rt,Fl,Nu,Ru,hs]},jt={findFiberByHostInstance:ze,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},kp={bundleType:jt.bundleType,version:jt.version,rendererPackageName:jt.rendererPackageName,rendererConfig:jt.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:le.ReactCurrentDispatcher,findHostInstanceByFiber:function(n){return n=Mu(n),n===null?null:n.stateNode},findFiberByHostInstance:jt.findFiberByHostInstance||vp,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Hr=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Hr.isDisabled&&Hr.supportsFiber)try{Dl=Hr.inject(kp),Qn=Hr}catch{}}Pn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=wp;Pn.createPortal=function(n,e){var t=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!xs(e))throw Error(k(200));return mp(n,e,null,t)};Pn.createRoot=function(n,e){if(!xs(n))throw Error(k(299));var t=!1,r="",l=g0;return e!=null&&(e.unstable_strictMode===!0&&(t=!0),e.identifierPrefix!==void 0&&(r=e.identifierPrefix),e.onRecoverableError!==void 0&&(l=e.onRecoverableError)),e=ys(n,1,!1,null,null,t,!1,r,l),n[ee]=e.current,sr(n.nodeType===8?n.parentNode:n),new ks(e)};Pn.findDOMNode=function(n){if(n==null)return null;if(n.nodeType===1)return n;var e=n._reactInternals;if(e===void 0)throw typeof n.render=="function"?Error(k(188)):(n=Object.keys(n).join(","),Error(k(268,n)));return n=Mu(e),n=n===null?null:n.stateNode,n};Pn.flushSync=function(n){return We(n)};Pn.hydrate=function(n,e,t){if(!Xl(e))throw Error(k(200));return Zl(null,n,e,!0,t)};Pn.hydrateRoot=function(n,e,t){if(!xs(n))throw Error(k(405));var r=t!=null&&t.hydratedSources||null,l=!1,i="",o=g0;if(t!=null&&(t.unstable_strictMode===!0&&(l=!0),t.identifierPrefix!==void 0&&(i=t.identifierPrefix),t.onRecoverableError!==void 0&&(o=t.onRecoverableError)),e=h0(e,null,n,1,t??null,l,!1,i,o),n[ee]=e.current,sr(n),r)for(n=0;n<r.length;n++)t=r[n],l=t._getVersion,l=l(t._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[t,l]:e.mutableSourceEagerHydrationData.push(t,l);return new Kl(e)};Pn.render=function(n,e,t){if(!Xl(e))throw Error(k(200));return Zl(null,n,e,!1,t)};Pn.unmountComponentAtNode=function(n){if(!Xl(n))throw Error(k(40));return n._reactRootContainer?(We(function(){Zl(null,null,n,!1,function(){n._reactRootContainer=null,n[ee]=null})}),!0):!1};Pn.unstable_batchedUpdates=hs;Pn.unstable_renderSubtreeIntoContainer=function(n,e,t,r){if(!Xl(t))throw Error(k(200));if(n==null||n._reactInternals===void 0)throw Error(k(38));return Zl(n,e,t,!1,r)};Pn.version="18.3.1-next-f1338f8080-20240426";function m0(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(m0)}catch(n){console.error(n)}}m0(),mu.exports=Pn;var xp=mu.exports,Wa=xp;Ei.createRoot=Wa.createRoot,Ei.hydrateRoot=Wa.hydrateRoot;/**
 * @remix-run/router v1.23.4
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function mr(){return mr=Object.assign?Object.assign.bind():function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var r in t)({}).hasOwnProperty.call(t,r)&&(n[r]=t[r])}return n},mr.apply(null,arguments)}var pe;(function(n){n.Pop="POP",n.Push="PUSH",n.Replace="REPLACE"})(pe||(pe={}));const Ga="popstate";function Ap(n){n===void 0&&(n={});function e(l,i){let{pathname:o="/",search:s="",hash:a=""}=Xe(l.location.hash.substr(1));return!o.startsWith("/")&&!o.startsWith(".")&&(o="/"+o),Ao("",{pathname:o,search:s,hash:a},i.state&&i.state.usr||null,i.state&&i.state.key||"default")}function t(l,i){let o=l.document.querySelector("base"),s="";if(o&&o.getAttribute("href")){let a=l.location.href,u=a.indexOf("#");s=u===-1?a:a.slice(0,u)}return s+"#"+(typeof i=="string"?i:_l(i))}function r(l,i){As(l.pathname.charAt(0)==="/","relative pathnames are not supported in hash history.push("+JSON.stringify(i)+")")}return Sp(e,t,r,n)}function q(n,e){if(n===!1||n===null||typeof n>"u")throw new Error(e)}function As(n,e){if(!n){typeof console<"u"&&console.warn(e);try{throw new Error(e)}catch{}}}function Ip(){return Math.random().toString(36).substr(2,8)}function Ha(n,e){return{usr:n.state,key:n.key,idx:e}}function Ao(n,e,t,r){return t===void 0&&(t=null),mr({pathname:typeof n=="string"?n:n.pathname,search:"",hash:""},typeof e=="string"?Xe(e):e,{state:t,key:e&&e.key||r||Ip()})}function _l(n){let{pathname:e="/",search:t="",hash:r=""}=n;return t&&t!=="?"&&(e+=t.charAt(0)==="?"?t:"?"+t),r&&r!=="#"&&(e+=r.charAt(0)==="#"?r:"#"+r),e}function Xe(n){let e={};if(n){let t=n.indexOf("#");t>=0&&(e.hash=n.substr(t),n=n.substr(0,t));let r=n.indexOf("?");r>=0&&(e.search=n.substr(r),n=n.substr(0,r)),n&&(e.pathname=n)}return e}function Sp(n,e,t,r){r===void 0&&(r={});let{window:l=document.defaultView,v5Compat:i=!1}=r,o=l.history,s=pe.Pop,a=null,u=f();u==null&&(u=0,o.replaceState(mr({},o.state,{idx:u}),""));function f(){return(o.state||{idx:null}).idx}function d(){s=pe.Pop;let A=f(),h=A==null?null:A-u;u=A,a&&a({action:s,location:y.location,delta:h})}function p(A,h){s=pe.Push;let c=Ao(y.location,A,h);t&&t(c,A),u=f()+1;let g=Ha(c,u),v=y.createHref(c);try{o.pushState(g,"",v)}catch(I){if(I instanceof DOMException&&I.name==="DataCloneError")throw I;l.location.assign(v)}i&&a&&a({action:s,location:y.location,delta:1})}function m(A,h){s=pe.Replace;let c=Ao(y.location,A,h);t&&t(c,A),u=f();let g=Ha(c,u),v=y.createHref(c);o.replaceState(g,"",v),i&&a&&a({action:s,location:y.location,delta:0})}function w(A){let h=l.location.origin!=="null"?l.location.origin:l.location.href,c=typeof A=="string"?A:_l(A);return c=c.replace(/ $/,"%20"),q(h,"No window.location.(origin|href) available to create URL for href: "+c),new URL(c,h)}let y={get action(){return s},get location(){return n(l,o)},listen(A){if(a)throw new Error("A history only accepts one active listener");return l.addEventListener(Ga,d),a=A,()=>{l.removeEventListener(Ga,d),a=null}},createHref(A){return e(l,A)},createURL:w,encodeLocation(A){let h=w(A);return{pathname:h.pathname,search:h.search,hash:h.hash}},push:p,replace:m,go(A){return o.go(A)}};return y}var Qa;(function(n){n.data="data",n.deferred="deferred",n.redirect="redirect",n.error="error"})(Qa||(Qa={}));function Pp(n,e,t){return t===void 0&&(t="/"),Cp(n,e,t)}function Cp(n,e,t,r){let l=typeof e=="string"?Xe(e):e,i=Is(l.pathname||"/",t);if(i==null)return null;let o=v0(n);Op(o);let s=null,a=Fp(i);for(let u=0;s==null&&u<o.length;++u)s=jp(o[u],a);return s}function v0(n,e,t,r){e===void 0&&(e=[]),t===void 0&&(t=[]),r===void 0&&(r="");let l=(i,o,s)=>{let a={relativePath:s===void 0?i.path||"":s,caseSensitive:i.caseSensitive===!0,childrenIndex:o,route:i};a.relativePath.startsWith("/")&&(q(a.relativePath.startsWith(r),'Absolute route path "'+a.relativePath+'" nested under path '+('"'+r+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),a.relativePath=a.relativePath.slice(r.length));let u=Ae([r,a.relativePath]),f=t.concat(a);i.children&&i.children.length>0&&(q(i.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+u+'".')),v0(i.children,e,f,u)),!(i.path==null&&!i.index)&&e.push({path:u,score:Lp(u,i.index),routesMeta:f})};return n.forEach((i,o)=>{var s;if(i.path===""||!((s=i.path)!=null&&s.includes("?")))l(i,o);else for(let a of y0(i.path))l(i,o,a)}),e}function y0(n){let e=n.split("/");if(e.length===0)return[];let[t,...r]=e,l=t.endsWith("?"),i=t.replace(/\?$/,"");if(r.length===0)return l?[i,""]:[i];let o=y0(r.join("/")),s=[];return s.push(...o.map(a=>a===""?i:[i,a].join("/"))),l&&s.push(...o),s.map(a=>n.startsWith("/")&&a===""?"/":a)}function Op(n){n.sort((e,t)=>e.score!==t.score?t.score-e.score:Dp(e.routesMeta.map(r=>r.childrenIndex),t.routesMeta.map(r=>r.childrenIndex)))}const Ep=/^:[\w-]+$/,Tp=3,_p=2,Np=1,Rp=10,zp=-2,Ka=n=>n==="*";function Lp(n,e){let t=n.split("/"),r=t.length;return t.some(Ka)&&(r+=zp),e&&(r+=_p),t.filter(l=>!Ka(l)).reduce((l,i)=>l+(Ep.test(i)?Tp:i===""?Np:Rp),r)}function Dp(n,e){return n.length===e.length&&n.slice(0,-1).every((r,l)=>r===e[l])?n[n.length-1]-e[e.length-1]:0}function jp(n,e,t){let{routesMeta:r}=n,l={},i="/",o=[];for(let s=0;s<r.length;++s){let a=r[s],u=s===r.length-1,f=i==="/"?e:e.slice(i.length)||"/",d=Mp({path:a.relativePath,caseSensitive:a.caseSensitive,end:u},f),p=a.route;if(!d)return null;Object.assign(l,d.params),o.push({params:l,pathname:Ae([i,d.pathname]),pathnameBase:Vp(Ae([i,d.pathnameBase])),route:p}),d.pathnameBase!=="/"&&(i=Ae([i,d.pathnameBase]))}return o}function Mp(n,e){typeof n=="string"&&(n={path:n,caseSensitive:!1,end:!0});let[t,r]=$p(n.path,n.caseSensitive,n.end),l=e.match(t);if(!l)return null;let i=l[0],o=i.replace(/(.)\/+$/,"$1"),s=l.slice(1);return{params:r.reduce((u,f,d)=>{let{paramName:p,isOptional:m}=f;if(p==="*"){let y=s[d]||"";o=i.slice(0,i.length-y.length).replace(/(.)\/+$/,"$1")}const w=s[d];return m&&!w?u[p]=void 0:u[p]=(w||"").replace(/%2F/g,"/"),u},{}),pathname:i,pathnameBase:o,pattern:n}}function $p(n,e,t){e===void 0&&(e=!1),t===void 0&&(t=!0),As(n==="*"||!n.endsWith("*")||n.endsWith("/*"),'Route path "'+n+'" will be treated as if it were '+('"'+n.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+n.replace(/\*$/,"/*")+'".'));let r=[],l="^"+n.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(o,s,a)=>(r.push({paramName:s,isOptional:a!=null}),a?"/?([^\\/]+)?":"/([^\\/]+)"));return n.endsWith("*")?(r.push({paramName:"*"}),l+=n==="*"||n==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):t?l+="\\/*$":n!==""&&n!=="/"&&(l+="(?:(?=\\/|$))"),[new RegExp(l,e?void 0:"i"),r]}function Fp(n){try{return n.split("/").map(e=>decodeURIComponent(e).replace(/\//g,"%2F")).join("/")}catch(e){return As(!1,'The URL path "'+n+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+e+").")),n}}function Is(n,e){if(e==="/")return n;if(!n.toLowerCase().startsWith(e.toLowerCase()))return null;let t=e.endsWith("/")?e.length-1:e.length,r=n.charAt(t);return r&&r!=="/"?null:n.slice(t)||"/"}function Bp(n,e){e===void 0&&(e="/");let{pathname:t,search:r="",hash:l=""}=typeof n=="string"?Xe(n):n,i;return t?(t=x0(t),t.startsWith("/")?i=Xa(t.substring(1),"/"):i=Xa(t,e)):i=e,{pathname:i,search:Wp(r),hash:Gp(l)}}function Xa(n,e){let t=e.replace(/\/+$/,"").split("/");return n.split("/").forEach(l=>{l===".."?t.length>1&&t.pop():l!=="."&&t.push(l)}),t.length>1?t.join("/"):"/"}function Oi(n,e,t,r){return"Cannot include a '"+n+"' character in a manually specified "+("`to."+e+"` field ["+JSON.stringify(r)+"].  Please separate it out to the ")+("`to."+t+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function Up(n){return n.filter((e,t)=>t===0||e.route.path&&e.route.path.length>0)}function w0(n,e){let t=Up(n);return e?t.map((r,l)=>l===t.length-1?r.pathname:r.pathnameBase):t.map(r=>r.pathnameBase)}function k0(n,e,t,r){r===void 0&&(r=!1);let l;typeof n=="string"?l=Xe(n):(l=mr({},n),q(!l.pathname||!l.pathname.includes("?"),Oi("?","pathname","search",l)),q(!l.pathname||!l.pathname.includes("#"),Oi("#","pathname","hash",l)),q(!l.search||!l.search.includes("#"),Oi("#","search","hash",l)));let i=n===""||l.pathname==="",o=i?"/":l.pathname,s;if(o==null)s=t;else{let d=e.length-1;if(!r&&o.startsWith("..")){let p=o.split("/");for(;p[0]==="..";)p.shift(),d-=1;l.pathname=p.join("/")}s=d>=0?e[d]:"/"}let a=Bp(l,s),u=o&&o!=="/"&&o.endsWith("/"),f=(i||o===".")&&t.endsWith("/");return!a.pathname.endsWith("/")&&(u||f)&&(a.pathname+="/"),a}const x0=n=>n.replace(/\/\/+/g,"/"),Ae=n=>x0(n.join("/")),Vp=n=>n.replace(/\/+$/,"").replace(/^\/*/,"/"),Wp=n=>!n||n==="?"?"":n.startsWith("?")?n:"?"+n,Gp=n=>!n||n==="#"?"":n.startsWith("#")?n:"#"+n;function Hp(n){return n!=null&&typeof n.status=="number"&&typeof n.statusText=="string"&&typeof n.internal=="boolean"&&"data"in n}const A0=["post","put","patch","delete"];new Set(A0);const Qp=["get",...A0];new Set(Qp);/**
 * React Router v6.30.6
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function vr(){return vr=Object.assign?Object.assign.bind():function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var r in t)({}).hasOwnProperty.call(t,r)&&(n[r]=t[r])}return n},vr.apply(null,arguments)}const Ss=S.createContext(null),Kp=S.createContext(null),Ze=S.createContext(null),Yl=S.createContext(null),ie=S.createContext({outlet:null,matches:[],isDataRoute:!1}),I0=S.createContext(null);function Xp(n,e){let{relative:t}=e===void 0?{}:e;Ir()||q(!1);let{basename:r,navigator:l}=S.useContext(Ze),{hash:i,pathname:o,search:s}=C0(n,{relative:t}),a=o;return r!=="/"&&(a=o==="/"?r:Ae([r,o])),l.createHref({pathname:a,search:s,hash:i})}function Ir(){return S.useContext(Yl)!=null}function Ct(){return Ir()||q(!1),S.useContext(Yl).location}function S0(n){S.useContext(Ze).static||S.useLayoutEffect(n)}function P0(){let{isDataRoute:n}=S.useContext(ie);return n?ch():Zp()}function Zp(){Ir()||q(!1);let n=S.useContext(Ss),{basename:e,future:t,navigator:r}=S.useContext(Ze),{matches:l}=S.useContext(ie),{pathname:i}=Ct(),o=JSON.stringify(w0(l,t.v7_relativeSplatPath)),s=S.useRef(!1);return S0(()=>{s.current=!0}),S.useCallback(function(u,f){if(f===void 0&&(f={}),!s.current)return;if(typeof u=="number"){r.go(u);return}let d=k0(u,JSON.parse(o),i,f.relative==="path");n==null&&e!=="/"&&(d.pathname=d.pathname==="/"?e:Ae([e,d.pathname])),(f.replace?r.replace:r.push)(d,f.state,f)},[e,r,o,i,n])}const Yp=S.createContext(null);function qp(n){let e=S.useContext(ie).outlet;return e&&S.createElement(Yp.Provider,{value:n},e)}function Jp(){let{matches:n}=S.useContext(ie),e=n[n.length-1];return e?e.params:{}}function C0(n,e){let{relative:t}=e===void 0?{}:e,{future:r}=S.useContext(Ze),{matches:l}=S.useContext(ie),{pathname:i}=Ct(),o=JSON.stringify(w0(l,r.v7_relativeSplatPath));return S.useMemo(()=>k0(n,JSON.parse(o),i,t==="path"),[n,o,i,t])}function bp(n,e){return nh(n,e)}function nh(n,e,t,r){Ir()||q(!1);let{navigator:l}=S.useContext(Ze),{matches:i}=S.useContext(ie),o=i[i.length-1],s=o?o.params:{};o&&o.pathname;let a=o?o.pathnameBase:"/";o&&o.route;let u=Ct(),f;if(e){var d;let A=typeof e=="string"?Xe(e):e;a==="/"||(d=A.pathname)!=null&&d.startsWith(a)||q(!1),f=A}else f=u;let p=f.pathname||"/",m=p;if(a!=="/"){let A=a.replace(/^\//,"").split("/");m="/"+p.replace(/^\//,"").split("/").slice(A.length).join("/")}let w=Pp(n,{pathname:m}),y=ih(w&&w.map(A=>Object.assign({},A,{params:Object.assign({},s,A.params),pathname:Ae([a,l.encodeLocation?l.encodeLocation(A.pathname).pathname:A.pathname]),pathnameBase:A.pathnameBase==="/"?a:Ae([a,l.encodeLocation?l.encodeLocation(A.pathnameBase).pathname:A.pathnameBase])})),i,t,r);return e&&y?S.createElement(Yl.Provider,{value:{location:vr({pathname:"/",search:"",hash:"",state:null,key:"default"},f),navigationType:pe.Pop}},y):y}function eh(){let n=uh(),e=Hp(n)?n.status+" "+n.statusText:n instanceof Error?n.message:JSON.stringify(n),t=n instanceof Error?n.stack:null,l={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"};return S.createElement(S.Fragment,null,S.createElement("h2",null,"Unexpected Application Error!"),S.createElement("h3",{style:{fontStyle:"italic"}},e),t?S.createElement("pre",{style:l},t):null,null)}const th=S.createElement(eh,null);class rh extends S.Component{constructor(e){super(e),this.state={location:e.location,revalidation:e.revalidation,error:e.error}}static getDerivedStateFromError(e){return{error:e}}static getDerivedStateFromProps(e,t){return t.location!==e.location||t.revalidation!=="idle"&&e.revalidation==="idle"?{error:e.error,location:e.location,revalidation:e.revalidation}:{error:e.error!==void 0?e.error:t.error,location:t.location,revalidation:e.revalidation||t.revalidation}}componentDidCatch(e,t){console.error("React Router caught the following error during render",e,t)}render(){return this.state.error!==void 0?S.createElement(ie.Provider,{value:this.props.routeContext},S.createElement(I0.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function lh(n){let{routeContext:e,match:t,children:r}=n,l=S.useContext(Ss);return l&&l.static&&l.staticContext&&(t.route.errorElement||t.route.ErrorBoundary)&&(l.staticContext._deepestRenderedBoundaryId=t.route.id),S.createElement(ie.Provider,{value:e},r)}function ih(n,e,t,r){var l;if(e===void 0&&(e=[]),t===void 0&&(t=null),r===void 0&&(r=null),n==null){var i;if(!t)return null;if(t.errors)n=t.matches;else if((i=r)!=null&&i.v7_partialHydration&&e.length===0&&!t.initialized&&t.matches.length>0)n=t.matches;else return null}let o=n,s=(l=t)==null?void 0:l.errors;if(s!=null){let f=o.findIndex(d=>d.route.id&&(s==null?void 0:s[d.route.id])!==void 0);f>=0||q(!1),o=o.slice(0,Math.min(o.length,f+1))}let a=!1,u=-1;if(t&&r&&r.v7_partialHydration)for(let f=0;f<o.length;f++){let d=o[f];if((d.route.HydrateFallback||d.route.hydrateFallbackElement)&&(u=f),d.route.id){let{loaderData:p,errors:m}=t,w=d.route.loader&&p[d.route.id]===void 0&&(!m||m[d.route.id]===void 0);if(d.route.lazy||w){a=!0,u>=0?o=o.slice(0,u+1):o=[o[0]];break}}}return o.reduceRight((f,d,p)=>{let m,w=!1,y=null,A=null;t&&(m=s&&d.route.id?s[d.route.id]:void 0,y=d.route.errorElement||th,a&&(u<0&&p===0?(fh("route-fallback"),w=!0,A=null):u===p&&(w=!0,A=d.route.hydrateFallbackElement||null)));let h=e.concat(o.slice(0,p+1)),c=()=>{let g;return m?g=y:w?g=A:d.route.Component?g=S.createElement(d.route.Component,null):d.route.element?g=d.route.element:g=f,S.createElement(lh,{match:d,routeContext:{outlet:f,matches:h,isDataRoute:t!=null},children:g})};return t&&(d.route.ErrorBoundary||d.route.errorElement||p===0)?S.createElement(rh,{location:t.location,revalidation:t.revalidation,component:y,error:m,children:c(),routeContext:{outlet:null,matches:h,isDataRoute:!0}}):c()},null)}var O0=function(n){return n.UseBlocker="useBlocker",n.UseRevalidator="useRevalidator",n.UseNavigateStable="useNavigate",n}(O0||{}),E0=function(n){return n.UseBlocker="useBlocker",n.UseLoaderData="useLoaderData",n.UseActionData="useActionData",n.UseRouteError="useRouteError",n.UseNavigation="useNavigation",n.UseRouteLoaderData="useRouteLoaderData",n.UseMatches="useMatches",n.UseRevalidator="useRevalidator",n.UseNavigateStable="useNavigate",n.UseRouteId="useRouteId",n}(E0||{});function oh(n){let e=S.useContext(Ss);return e||q(!1),e}function sh(n){let e=S.useContext(Kp);return e||q(!1),e}function ah(n){let e=S.useContext(ie);return e||q(!1),e}function T0(n){let e=ah(),t=e.matches[e.matches.length-1];return t.route.id||q(!1),t.route.id}function uh(){var n;let e=S.useContext(I0),t=sh(),r=T0();return e!==void 0?e:(n=t.errors)==null?void 0:n[r]}function ch(){let{router:n}=oh(O0.UseNavigateStable),e=T0(E0.UseNavigateStable),t=S.useRef(!1);return S0(()=>{t.current=!0}),S.useCallback(function(l,i){i===void 0&&(i={}),t.current&&(typeof l=="number"?n.navigate(l):n.navigate(l,vr({fromRouteId:e},i)))},[n,e])}const Za={};function fh(n,e,t){Za[n]||(Za[n]=!0)}function dh(n,e){n==null||n.v7_startTransition,n==null||n.v7_relativeSplatPath}function ph(n){return qp(n.context)}function Re(n){q(!1)}function hh(n){let{basename:e="/",children:t=null,location:r,navigationType:l=pe.Pop,navigator:i,static:o=!1,future:s}=n;Ir()&&q(!1);let a=e.replace(/^\/*/,"/"),u=S.useMemo(()=>({basename:a,navigator:i,static:o,future:vr({v7_relativeSplatPath:!1},s)}),[a,s,i,o]);typeof r=="string"&&(r=Xe(r));let{pathname:f="/",search:d="",hash:p="",state:m=null,key:w="default"}=r,y=S.useMemo(()=>{let A=Is(f,a);return A==null?null:{location:{pathname:A,search:d,hash:p,state:m,key:w},navigationType:l}},[a,f,d,p,m,w,l]);return y==null?null:S.createElement(Ze.Provider,{value:u},S.createElement(Yl.Provider,{children:t,value:y}))}function gh(n){let{children:e,location:t}=n;return bp(Io(e),t)}new Promise(()=>{});function Io(n,e){e===void 0&&(e=[]);let t=[];return S.Children.forEach(n,(r,l)=>{if(!S.isValidElement(r))return;let i=[...e,l];if(r.type===S.Fragment){t.push.apply(t,Io(r.props.children,i));return}r.type!==Re&&q(!1),!r.props.index||!r.props.children||q(!1);let o={id:r.props.id||i.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,Component:r.props.Component,index:r.props.index,path:r.props.path,loader:r.props.loader,action:r.props.action,errorElement:r.props.errorElement,ErrorBoundary:r.props.ErrorBoundary,hasErrorBoundary:r.props.ErrorBoundary!=null||r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle,lazy:r.props.lazy};r.props.children&&(o.children=Io(r.props.children,i)),t.push(o)}),t}/**
 * React Router DOM v6.30.6
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function So(){return So=Object.assign?Object.assign.bind():function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var r in t)({}).hasOwnProperty.call(t,r)&&(n[r]=t[r])}return n},So.apply(null,arguments)}function mh(n,e){if(n==null)return{};var t={};for(var r in n)if({}.hasOwnProperty.call(n,r)){if(e.indexOf(r)!==-1)continue;t[r]=n[r]}return t}function vh(n){return!!(n.metaKey||n.altKey||n.ctrlKey||n.shiftKey)}function yh(n,e){return n.button===0&&(!e||e==="_self")&&!vh(n)}function Po(n){return n===void 0&&(n=""),new URLSearchParams(typeof n=="string"||Array.isArray(n)||n instanceof URLSearchParams?n:Object.keys(n).reduce((e,t)=>{let r=n[t];return e.concat(Array.isArray(r)?r.map(l=>[t,l]):[[t,r]])},[]))}function wh(n,e){let t=Po(n);return e&&e.forEach((r,l)=>{t.has(l)||e.getAll(l).forEach(i=>{t.append(l,i)})}),t}const kh=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset","viewTransition"],xh="6";try{window.__reactRouterVersion=xh}catch{}const Ah="startTransition",Ya=cf[Ah];function Ih(n){let{basename:e,children:t,future:r,window:l}=n,i=S.useRef();i.current==null&&(i.current=Ap({window:l,v5Compat:!0}));let o=i.current,[s,a]=S.useState({action:o.action,location:o.location}),{v7_startTransition:u}=r||{},f=S.useCallback(d=>{u&&Ya?Ya(()=>a(d)):a(d)},[a,u]);return S.useLayoutEffect(()=>o.listen(f),[o,f]),S.useEffect(()=>dh(r),[r]),S.createElement(hh,{basename:e,children:t,location:s.location,navigationType:s.action,navigator:o,future:r})}const Sh=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",Ph=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,bn=S.forwardRef(function(e,t){let{onClick:r,relative:l,reloadDocument:i,replace:o,state:s,target:a,to:u,preventScrollReset:f,viewTransition:d}=e,p=mh(e,kh),{basename:m}=S.useContext(Ze),w,y=!1;if(typeof u=="string"&&Ph.test(u)&&(w=u,Sh))try{let g=new URL(window.location.href),v=u.startsWith("//")?new URL(g.protocol+u):new URL(u),I=Is(v.pathname,m);v.origin===g.origin&&I!=null?u=I+v.search+v.hash:y=!0}catch{}let A=Xp(u,{relative:l}),h=Ch(u,{replace:o,state:s,target:a,preventScrollReset:f,relative:l,viewTransition:d});function c(g){r&&r(g),g.defaultPrevented||h(g)}return S.createElement("a",So({},p,{href:w||A,onClick:y||i?r:c,ref:t,target:a}))});var qa;(function(n){n.UseScrollRestoration="useScrollRestoration",n.UseSubmit="useSubmit",n.UseSubmitFetcher="useSubmitFetcher",n.UseFetcher="useFetcher",n.useViewTransitionState="useViewTransitionState"})(qa||(qa={}));var Ja;(function(n){n.UseFetcher="useFetcher",n.UseFetchers="useFetchers",n.UseScrollRestoration="useScrollRestoration"})(Ja||(Ja={}));function Ch(n,e){let{target:t,replace:r,state:l,preventScrollReset:i,relative:o,viewTransition:s}=e===void 0?{}:e,a=P0(),u=Ct(),f=C0(n,{relative:o});return S.useCallback(d=>{if(yh(d,t)){d.preventDefault();let p=r!==void 0?r:_l(u)===_l(f);a(n,{replace:p,state:l,preventScrollReset:i,relative:o,viewTransition:s})}},[u,a,f,r,l,t,n,i,o,s])}function Oh(n){let e=S.useRef(Po(n)),t=S.useRef(!1),r=Ct(),l=S.useMemo(()=>wh(r.search,t.current?null:e.current),[r.search]),i=P0(),o=S.useCallback((s,a)=>{const u=Po(typeof s=="function"?s(l):s);t.current=!0,i("?"+u,a)},[i,l]);return[l,o]}function Eh(){const{pathname:n}=Ct(),e=[{to:"/",label:"首页"},{to:"/articles",label:"文章"},{to:"/topics",label:"专题"},{to:"/about",label:"关于"}];return x.jsxs("div",{className:"site",children:[x.jsx("header",{className:"site-header",children:x.jsxs("div",{className:"container header-inner",children:[x.jsx(bn,{to:"/",className:"logo",children:"古旧新风"}),x.jsx("nav",{children:e.map(t=>x.jsx(bn,{to:t.to,className:n===t.to?"active":"",children:t.label},t.to))})]})}),x.jsx("main",{className:"container",children:x.jsx(ph,{})}),x.jsx("footer",{className:"site-footer",children:x.jsx("div",{className:"container",children:"古旧新风 — 用现代思维工具重读旧问题"})})]})}const Th=`# 000丨发刊词：现代精英的思维武器库

## 讲什么

开宗明义的一讲：这门课要交付一套**自成体系、代表当前科学水平、比主流认知高一点**的思维武器库，帮你在各种真实处境中稳健地预测、决策和生成。

## 解决什么真问题

面对同一个处境——理财、学习、工作、人情世故——存在三套解法：**传统观念**（勤奋攒钱、题海战术）、**市侩哲学**（钱靠内部关系、别听老板 PUA）、**精英解法**（科学对待风险收益、把学习看成神经网络训练）。三套解法的根本区别是**头脑里的思维模型**不同。大多数人手里没有第三套解法。

## 核心论点

- **勤奋只是底座，市侩只是借口，方法论才是倍增器。** 世界不奖赏更用力的人，但奖赏用对工具的人。
- 最强 AI 反复使用同一套思维工具（古德哈特定律、自我决定理论、自由能、对称性破缺等），这些工具原本是人类学者几十年的创造，却**不为公众所知**——课程要填补这个空档。
- 智能生活系统四元素：**目标函数**（指南针）、**世界模型**（地图）、**反馈回路**（引擎）、**预算约束**（油箱）。评价世界模型好坏只有一个指标：**预测力**。
- 认知分级如佛学大小乘：**改造自我是小乘，改变环境、重写自己与世界的耦合边界才是大乘**。

## 关键例证 / 金句

- 约翰逊编《英语词典》的类比：课程要对现代思维工具做同样的系统化工作，但不写成百科全书。
- **"你把问题交给工具，世界忽而变得可操作。"**
- 哪怕只想躺平享受生活，也需要清晰的目标函数和精确的世界模型。

## 如何应用

- 盘点自己面对理财/学习/工作/关系时默认调用的是哪套解法。
- 用四元素检查自己的生活系统：目标函数明确吗？世界模型经常更新吗？有正反馈积累吗？注意力和精力的预算花在哪？
- 把"使用工具"而非"更努力"作为改进的第一假设。

---

## 全文

> 以下为课程转录全文，已做去噪（逐字空格、广告口播）、繁转简与语义分段处理；**加粗+底纹**处为核心论点与金句。

欢迎来到现代思维工具课，我是万维钢。我以前是个物理学家，现在是科学作家，已经在得到写了六季精英日课专栏。这是我第一次专门做一个主题课程，因为我发现时机成熟了。

我要给你一个自成体系的、代表当前科学水平的、能用于各种日常处境的、比主流认知高一点的思维武器库。你将拿到一套可操作的工具，面对各种真实处境能够稳健地预测、决策和生成。

要想在复杂多变的现代世界生存发展和实现繁荣，是不太容易的，我们面临各种两难的、无所适从的处境。我们年轻的时候有过天真的理想，后来你慢慢发现那些强调努力勤奋的传统观念并不是那么好使。身边有些人转为信奉市侩哲学，说不要相信什么大道理，照顾好自己和家人才是真的。但你也觉得没啥意思，因为你明知道对很多处境来说，有些优秀人物——也就是所谓的精英——就是有更好的办法。

就拿个人理财说，传统观念是攒钱，认为财富应该靠诚实劳动慢慢积累。可是怎么解释那些年纪不大就暴富的人呢？市侩哲学主张钱不是攒出来的，而是赚出来的，必须买房或者炒股，而且一般的手段不行，必须有内部关系才行。这肯定也不能说服你，你相信一定有更科学、更公平的解法。是的，**精英的赚钱方法是靠科学对待风险和收益，靠可扩展的技能、分发渠道和所有权，靠某种阿尔法**。

再比如学习，传统观念是死记硬背加题海战术，市侩哲学是实用主义、最好抄捷径，而精英解法则是把学习看成神经网络训练，结合大脑认知规律，设法让认知模型迅速精确化。又比如工作，传统观念是你努力奋斗多加班就有回报，市侩哲学是别听老板 PUA、成事的全都靠风口做概念，而精英解法则是月曾考虑问题——想这个事业的本质是什么，用对照实验之类的方法找到关键因果。还有人情世故，传统观念是克己复礼、用道德和权威压人，市侩哲学是把关系当筹码，有用的我就纳入人脉，而精英解法则是心理安全、情绪调节、非零和博弈，乃至无我。

**这三种解法的根本区别是头脑里的思维模型。**传统观念不太考虑模型，它默认线性的因果，所以押注勤奋和德行；市侩哲学有个简单的模型，它把世界压成单一指标，专门盯着眼前的成本和收益，结果陷入犬儒主义——说我能不能多得到还不一定，但我至少可以确保自己少付出。**市侩哲学是低信任环境里的局部最优策略。**而精英解法则是基于一个会自我纠错的复杂的世界模型。只要你关注更大的世界，你就会发现人类社会靠合作才能做大，靠规则才能做稳，靠意义才能坚持长期投入。所以你必须灵活选择并时常反思优化目标，你不但有一个目标，而且有长远的目的，你要借助各种现代思维工具，建造一个有反馈、有杠杆、可以不断积累复利的系统。

说你能不被 PUA 或者所谓通透，那不是什么稀缺能力，**而会建模才是真本事。世界的确不怎么奖赏更用力的人，但世界很喜欢奖赏用对工具的人。勤奋只是底座，市侩不过是借口，方法论才是倍增器。**

其实我们精英日课专栏已经讲过很多思维工具，比如博弈论、科学方法和概率思维等等，但我们以前的讲法不够系统——有时候是正好出来一个新研究结果，有时候是有感而发，更多时候则是从讲解某一本新书偶然所得。这就有点像 18 世纪英国作家塞缪尔·约翰逊编《约翰逊英语词典》之前的那个局面：英语已经是一门成熟的语言，有很多优美的词句，也有几本零星的词典，但都不够系统、不够权威。是约翰逊的大词典规范了拼写和词义用法，才让英语成了一个高度可扩展的书写系统。我们这门课就是要对现代思维工具做类似的事情，但我绝不想把它写成百科全书，我将呈现的是一个有精英日课风格的、新鲜的、通俗好用的、熟悉加意外的课程。我将尽量不重复专栏讲过的东西，但如果一个工具实在太基础太重要，必须出现在这个课程里——比如复利，比如刻意练习——我也将提供不一样的讲法和洞察。

我敢把话说得这么满，是因为我有一个巨大的惊喜。你知道我很早就已经用 AI 帮助调研和思考，自从 2024 年底用上 OpenAI 的 o1 Pro 这个模型以来，我越发觉得跟最强 AI 对话是一种独特的体验，夸张地说有点像是与神对话。我一开始是震惊，甚至一度陷入作为专栏作家的存在主义危机，但是后来慢慢摸到了 AI 的脾性。从 o1、o3 一直到 2025 年 8 月出来的 GPT-5，**我发现最强 AI 反复使用同一套思维工具，而且背后有一个稳定的内核。**

我希望有人专门去研究一下这个现象。你问 GPT 任何有关人生、社会、管理、经济之类的问题，在经过多轮对话、刨根问底、要求它提供最高级的洞察之后，它最后总是收敛于若干个反复出现的概念，比如古德哈特定律、自我决定理论、WOOP、自由能、对称性破缺、多臂老虎机、贝叶斯分数等等。**这些就是最强 AI 的看家本领，是它武器库里最好用的工具。**这些工具有两个特点：第一，它们不是 AI 临时发明的，它们原本都是人类学者在过去几十年间的创造，而且已经是相关学科的基础设施；第二，它们大多并不为公众所知——可能是因为这些概念稍微有点难度，但更可能是科学作家的工作不到位，所以这些工具还没有成为畅销书里的热门话题。也就是说，**当今世界上存在着一些专业学者和最强 AI 都爱用的思维工具，可是大多数聪明人都还没听说过。**我们的课程就要填补这个空档。

我做了大量人的的工作：课程的选题、讲法、主观发挥和具体语句都是我的，但是我必须先感谢 GPT，因为这个课程是一个人类作家借助最强 AI，从超级人工智能到来之前的人类最新研究中截留下来的智力果实。也许这些果实能成为未来一切相关讨论的起点。我要用这个课程帮你跟高级智能对齐。

我先说说能把这些工具串起来的那个内核是什么。你可以反复问 GPT 以下这些问题，比如现代人应该如何生活、你对我们人类社会有什么本质的看法之类，它有时候这样说，有时候那样说，但是万变不离其宗。我把答案总结为以下这个叙述，也就是**用现代思维工具构建一个可操作的智能生活系统，以此稳健地与复杂世界交手。**这个系统包含以下四个元素：

**第一个元素是目标函数**，也就是你想要把什么东西最大化。是金钱吗？是关系吗？是健康吗？都可以，可以不止一个，可以经常调整，但是得明确，不能只是模糊的愿望。我们说目标函数而不是简单的说目标，因为你必须能容纳比较复杂的偏好，你在必要的时候得把它们排序和加权。

**第二个元素是世界模型**，也就是你得知道你关心的那些事物是如何运行的。评价模型好坏只有一个指标，那就是**预测力**。你必须不断迭代你的模型，经常更新信息，减少预测误差。所有的知识、训练和调研都是为了让世界模型更精确。

**第三个元素是反馈回路。**反馈让系统稳定，正反馈让系统增长或者失衡，比如复利就是一种可积累的正反馈，能让你发展壮大。

**第四个元素是预算约束。**你的资源是有限的，得精打细算。对个人来说，最稀缺的两个资源是注意力和精力，前者决定你专注于干什么，后者决定你有多少能量能维持专注。

这四个元素相当于指南针、地图、引擎和油箱，而我们会提供组建这个系统所需要的所有重要工具。但这里你首先会注意到它不是什么：它不是一套具体的行动指南，不是规章制度，更不是道德说教。**工具本来就不应该告诉你该干什么，干什么是你自己的选择。**不过我们也会提供一些能帮你选择目标函数的思维工具，至于说道德，那其实是参与社会生活的思维工具之一。

你不管做什么都需要系统。哪怕你就想躺平享受世间的美好，你也需要清晰的目标函数和精确的世界模型，才知道自己该关注什么和该放弃什么，才能对不确定性有所应对；你还必须了解反馈回路、当心预算约束，才能让好日子长期稳定地运行。系统能帮你分清信号和噪声，但系统更大的作用是让你有主动性和控制感。现在你不再是"但行好事莫问前程"，你要求了解那个前程的运作方式，有针对性地操作它。

这个课程是按照你可能遇到的各种处境来组织的。我们会先讲一些人生成长战略，讲几个特别基础的思维工具，包括非零和、复利、注意力机制、探索利用算法和边际分析等，帮你把握好大方向。接下来是决策与判断，我们会从概率思维一直讲到 OODA 循环，这里是理工科思维爱好者的乐园。然后想像你作为社会的参与者，我们讲一些思考社会问题的工具，其中一个有意思的洞察是咱们中国人崇上的"礼"是个协议层。再想像你作为一家公司的领导者都有哪些管理工具呢？传统理论和厚黑冲动，我们只精选最深刻和更新颖的工具，比如如何设计激励制度、怎么在多样性和整合力之间取得平衡。然后再想大一点，想像你是复杂生态的演化者，咱们学习几个有关复杂系统的思维工具，你会发现生成是成就感的事情。我们还有学习与教育、怎样赚钱等这些板块，但我最想讲的则是几个比较高端的反思工具。

究竟有多高端，具体咱们到时候再说，这里我想跟佛学做个类比。你知道佛学有小乘和大乘之分，所谓小乘解脱自己，大乘救度众生，那我们可不可以把人的现代认知也分级呢？一些常见的工具，比如刻意练习、微习惯、弱联系、成长思维模式等等，都是以改造自我为核心，目标是把一个浑浑噩噩的低效能个体变成有稳定发挥的高效能人士。这当然很好，这是最基础的觉醒，但这些只能算是小乘思维。**大乘思维却是要改变环境：这个世界总是需要一些人理解更大的图景，研究复杂系统的规律，也许去做一点结构性的改造，承担超越自我的责任。**我认为这就是精英的精神。这个课程会提供从小到大各种建模工具，希望你能有一点大乘气质，也许你不但能改变自己，而且能改变自己所在的方程，重写自己和世界之间的耦合边界。

不管你掌握这些思维工具的初衷是什么，当你通盘所有的逻辑之后，你会意识到**合作比竞争大气，共鸣比较更幸福，生成比占有更快乐。**

现代化是一场意外，演化给我们头脑的预设并不完全兼容现代生活，所以我们才有那么多烦恼和困惑。但我们发明了解除那些烦恼和困惑的思维工具，而且这些工具在不断升级。这就如同 2000 多年前人类刚进入农业社会的时候也遭遇了各种烦恼，当时也有像佛陀那样的人发明了解除烦恼的工具，那些工具也是不断升级，人们从所谓小乘出发，不可避免地发展出大乘理论。时至今日，AI 正在熟练接管所有的计算和套路，也许他们很快就会发明更高级的智慧，那我们就算理解跟不上，尝试理解总是可以的吧。

传说在公元二世纪，一个叫龙树的僧人从龙宫里取回了新的经典，才大大推动了大乘佛学。当然那只是传说，实际情况是大乘思想早就已经在各地兴起，龙树只是把前人的理论集中整理、自己有所发挥而已。往大说，这就是我们这门课程想做的事情，咱们探索一点来自龙宫的智慧。

最后送你一首小诗：

> 你把力气交给墙，墙回你伤痕。你把情绪交给夜，夜回你叹息。**你把问题交给工具，世界忽而变得可操作。**

以上就是发刊词的全部内容，咱们课程里见。
`,_h=`# 001丨叙事：这个宇宙的第一性原理

## 讲什么

基本世界观模块第一讲：比物理定律更基本的东西是什么？万维钢给出的答案是**叙事（narrative）**——对互相联系的一系列事实的连贯描述。

## 解决什么真问题

我们以为自己是根据事实和数据做决策，其实**我们是对叙事做反应**。不理解这一点，就会被别人设定的叙事牵着走，还浑然不觉。

## 核心论点

- 现代物理学三大理论各有分工：**狭义相对论提供因果，量子力学提供想象力，广义相对论提供舞台**。宇宙要允许"叙事"存在，才需要这三样东西。
- 意识、自我，都是叙事的产物。**丹尼尔·丹尼特：自我不是一个实体，只不过是叙事的重心**——叙事不是因为我而存在，我是因为叙事而存在。
- 叙事三大作用：**预测处理**（叙事=世界模型）、**提供意义**（价值观和人生意义来自你给自己讲的故事）、**公共协调**（国家、货币、公司、法律都是共同相信的虚构叙事）。
- **一切叙事都是主观的。**同一个事实可以讲成不同的故事，叙事方向决定你的目标函数。

## 关键例证 / 金句

- 罗伯特·席勒 2017 年提出"叙事经济学"：像病毒一般传播的叙事是影响经济行为的核心变量。
- 沃尔夫勒姆物理项目：我们这个宇宙是 ruliad（一切可能计算的总集合）中的一个小切片，而物理学定律的存在是为了让叙事成为可能。
- 电影《好东西》台词："裁判是谁呀？……**那我们不要玩他们的游戏了。**"
- **"宇宙给了叙事的语法，至于写什么，由我选择。"**

## 如何应用

- 盘点你正在信哪些叙事：老板画的饼、消费的符号、"奋斗-回报"的默认脚本——哪些是别人设定的？
- 驱动别人时，**不要列举事实，要把事实穿起来形成叙事**：一句"此战关键是在日落前封锁对方补给线"胜过一百条数据。
- 练习对同一事实换叙事方向：半瓶水、一份业绩报表，都可以讲成完全不同的故事——选择那个服务于你自己目标函数的版本。

---

## 全文

> 以下为课程转录全文，已做去噪与语义分段；**加粗+底纹**处为核心论点与金句。

你好，欢迎收听现代思维工具 100 讲，我是万维钢。现在进入现代思维工具课的第一个板块，基本世界观。我们到底是生活在一个什么样的世界上？咱们得先有世界观才能谈方法论。你可以在很大程度上自主选择价值观和人生观，而对于世界观，却是你认识到什么程度就得接受到什么程度，因为这个世界不是按照你的意志创造的。我选择了六条最基本的世界观，咱们先做个对齐。这六条是接下来各种思维工具的基础，也是当今能得到的对我们这个世界最有价值、对你建立阿尔法优势最重要的理解。这一讲是第一条，咱们说这个宇宙的第一性原理。

第一性原理就是最最基本的原理、最初的初心，是一切推演的出发点，是我们无法辩驳只能接受的设定。如果你十年前问我，我会说世界的第一性原理是物理定律——世间一切都由物理定律决定，化学服从物理学，生物学服从化学，心理学服从生物学，社会学服从心理学。这当然没错，但你可能忍不住猜测：在物理定律的背后还有没有更深的东西呢？物理学家早就意识到，也许存在着无穷多个各式各样的宇宙，每个宇宙的物理定律都不一样。那为什么我们生活的这个宇宙恰恰好拥有这样的物理定律呢？

现代物理学不管升级到什么版本，大致由三个理论组成：一个是狭义相对论，它描写了宏观物体的运动规律；一个是量子力学，它描写了微观粒子的规律；一个是广义相对论，它描写了引力。物理学是这个样子有什么特殊的意义吗？2020 年，我们这个时代最聪明的人之一斯蒂芬·沃尔夫勒姆发起了一个"沃尔夫勒姆物理项目"，他要从更基本的原理出发推导出整个物理学，已经有不少成果。沃尔夫勒姆提出一个概念叫 ruliad，说是一切可能计算的纠缠极限，代表所有可能的物理定律的总集合，而我们这个特定的宇宙则是 ruliad 中的一个小切片。

为了追求计算意义上真正的基本，沃尔夫勒姆假设时空都不是连续的：空间由一个一个点构成，时间是一拍一拍的推进。那你说必须给一个宇宙注入什么样的要求，才能得到我们这样的物理定律呢？答案是**叙事**。所谓叙事，简单说就是对互相联系的一系列事实的连贯描述，或者说就是一段小故事。比如我走进房间，拿起桌上的馒头吃了它，然后我吃饱了，这就是一个叙事。

这听起来没什么，但是我们对叙事其实有一些并不平凡的要求。最起码的，你会要求叙事有个连贯的顺序：先走进房间，再拿起房间里的馒头。你希望事情发生有先有后，不能一团乱麻，而这就意味着你这个宇宙里必须有时间。进一步，我们还要求事情之间有明确的因果关系：必须是因为吃了馒头而感到饱，而不能是因为饱而吃馒头。因果关系要明确，有联系的事情的先后顺序不但对一个观察者不能乱，而且必须对所有观察者都是一致的才行，不然我们互相没法讲理。那么物理学家会说，要确保因果不变、并且所有观察者都平等，你这个宇宙就得服从狭义相对论。

再进一步，为了让叙事有意思，我们还要求**过去是确定的，而未来是不确定的**。过去确定，我们才可以记账和追溯，才谈得上总结规律、建立模型，才能有章法地面对世界；但我们不希望未来也是确定的，不然生活就成了放电影，毫无悬念。那怎么才能让未来保持不确定性呢？这就需要量子力学：量子力学规定微观粒子的行为有内在的不确定性，你永远都不知道这个原子什么时候衰变、那个光子会从哪条缝穿过，但是等到事情已经发生，它就变成确定的了。

但我们还不满足，我们还希望这个宇宙有引力，因为引力能帮助提高秩序。如果没有引力，宇宙中只是一堆粒子到处乱飞，好像也不值得叙事。是引力把物质聚合在一起，形成星球，能让各种物体稳定地存在一段时间，以至于你能出来讲个故事。这就是广义相对论的角色。

简单说，**狭义相对论提供了因果，量子力学提供了想象力，广义相对论提供了舞台。**这些定律中某些具体参数你或许可以讨价还价，但是如果物理定律不具备这三个基本形态，我们这个宇宙就不会有叙事。如果你相信世界是上帝创造的，你可以说上帝是为了让我们有叙事才设定了这样的物理定律。更科学的理解是：存在着无数个宇宙，其中有很多宇宙里没有明确的因果关系，过去不确定、未来反而是死局，那样的宇宙中不会有智慧生物去总结科学规律和建设家园。而我们能做这些，只不过因为我们幸运地生在了一个允许叙事的宇宙之中。

我曾经让 GPT 独立推导过一套物理学背后的理论，它生成的内容没有沃尔夫勒姆那么高级和优雅，但是得出了同样的洞察。它说"**可定义的现象与可保存的记录，是存在本身的最低语言**"——说白了就是叙事。所以我觉得叙事比物理学更基本，可以说是我们这个宇宙的第一性原理。

因为有叙事，因为你一直都在给自己讲故事，你才有意识。因为现有 AI 模型都是训练好就直接上线，上线后就不再训练，没有自己的经历、没有历史叙事，所以我们暂时认为 AI 没有意识。其实就连你的"自我"这个概念，也是为了方便叙事而生的：既然要叙事，最好有个什么东西作为讲述者和主人公存在，这就是自我。用哲学家丹尼尔·丹尼特的话说，**自我并不是一个实体，而只不过是叙事的重心而已。叙事不是因为我而存在，我是因为叙事而存在。**

叙事对我们有三个关键作用。**第一是预测处理。**你能把一串事实连贯地陈述出来，其中包含明确的因果关系，那么你就有了一个简单的世界模型，你就能用这个模型做出预测，并且有选择地采取行动。其实我们的一举一动都在做预测处理：比如我之所以伸手拿杯子喝水，是因为我合理地预测到这个动作可以让我喝到水；你之所以愿意继续工作，是因为你相信工作能带来回报这个叙事。当然你必须经常打磨自己的各种叙事，让模型越来越准确才好。叙事不准，你就会收到一个小小的惊讶——"怎么洒了呢？"神经科学家卡尔·弗里斯顿提出了一个自由能原理，说大脑是一台预测机器，每次收到惊讶就会抬高自由能，以此提醒自己修改叙事，尽量把自由能压低。

**叙事的第二个作用是提供意义。**为什么我们读说理文章那么费劲，读小说却那么容易入戏呢？因为小说的叙事中有主人公、有情感、有意图。只要你听说了一个人的意图，你自动就会关心他能否实现那个意图，这样你就有了一个关心的方向。我们的价值观和人生意义就来自叙事：你想要出人头地，是因为你从小就在给自己讲一个努力奋斗的故事；你想要振兴中华，是因为你早就接受了这个叙事。

**第三个作用是公共协调。**我们人类之所以能实现大规模的合作，是因为我们能共同相信某些虚构的东西，比如说神话、国家、货币、公司、法律等。这些东西在物理世界并不存在，纯粹是我们想象出来的叙事。这是历史学家尤瓦尔·赫拉利的招牌学说。公司到底是什么？是厂房和机器吗？是资本吗？是工人吗？是创始人吗？把那些都换掉，公司还在。**公司本质上是个虚拟的概念，是因为人们相信它存在，它才存在。**你相信这张钞票有价值，是因为别人都相信它有价值，哪怕物理学告诉你它只是一张纸。

简单说，驱动行动的信念、行动的方向乃至于行动本身，都是一个个叙事构成的。**不要列举事实，要把事实穿起来形成叙事，你才能触发行动。**你带一支部队出去打仗，如果只给士兵讲事实——敌人人数如何、兵力怎么分布、这里地形和天气状况怎样等等——士兵只会听得一头雾水。可是你只要说一句"此战关键是在日落之前封锁对方的补给线"，大家就立即知道你一系列安排的意义，而且还能主动帮你查漏补缺、优化细节。**我们从来都不是对一堆事实和数据做反应，我们是对叙事做反应。**

创业者想要拿投资就得先讲个好故事，投资人也要求创业者讲故事。公司股价首先是信心的函数，而信心来自对未来的叙事。诺贝尔经济学奖得主罗伯特·席勒 2017 年提出一个理论叫"叙事经济学"，说**像病毒一般传播的叙事是影响经济行为的核心变量**。

我们有时候会对叙事反应过度。你不能说事实不重要，但我们不是根据事实做决策的，我们是通过叙事来做决策的。事实本该是对叙事的硬约束，但很多时候虚构的叙事更能促成行动。叙事是我们和世界交互的接口。

而我最想对你说的是：**一切叙事都是主观的。**每时每刻你周围都有无数的剧情在上演：阳光在照射，空气在流动，植物在生长，昆虫在爬，股价在变化，电视里的新闻和手机上的短视频在播放。那你为什么单关注这个叙事而不是那个叙事呢？这只是你的主观选择。哪怕同一个事实，你也可以选择不同的叙事方向。这里有半瓶水，你说它已经满了一半也可以，说它还有一半是空的也对。这家公司的业绩报表就摆在眼前，你说它成绩如此优异、未来必定继续扩张，那么你隐含的意思就是股价会涨；但你也可以说，虽然业绩很好但股价已经很高了，那么就是暗示不要加仓。

再比如这些年来中文世界涌现了很多新词：经济指标下降不叫下降，叫负增长；有人失业不叫失业，叫待业，又叫灵活就业；正在经历的苦难不叫苦难，叫磨练、叫奋斗、叫励志；农民工在大城市找不到工作不得不回家，叫返乡创业。有人斥责这是语言腐败，但你换成叙事者的角度，这正是在选择叙事方向。**叙事决定了你的目标函数。**

很多时候我们是不自觉地活在别人给设定好的叙事之中，但你完全可以跳出来，选择一个自己的叙事。老板用叙事画饼：现在虽然工资低、工作量大、天天加班，但毕竟比下有余，而且都是为了将来一起赚大钱。而你完全可以跳出来，心想：我得尽快跳槽，我在这的目标函数是经验值。**跳出别人设定的叙事，是人最根本的觉醒。**电影《好东西》有一段台词特别好，是这么说的："怎么才能算好呢？裁判是谁呀？为什么就不能搞砸呢？又能砸到哪去呢？**那我们不要玩他们的游戏了。**"

但这还不够。我们不但可以跳出别人的叙事，还可以给别人设定叙事。你要争取**叙事权**，那是一个高级工具，咱们后面再讲。

总结来说，**叙事是把一系列真实或者虚构的事物串起来的线索结构**。这根线索可以是时间顺序、目标取向、使命性，也可以是身份宣告或者立场承诺，关键在于其中潜伏着可验证的因果关系，能引导行动和校准情绪。你能用到什么层次的工具，取决于你讲给自己和讲给别人的叙事。而我只愿你多一分主动。

最后我们还是用一首诗结束今天的课程：

> 忠于故事，不求于故事；以因果为网，以证据收。
> 可追溯的过去向前作证，可塑的未来如遇金落锤。
> **宇宙给了叙事的语法，至于写什么，由我选择。**

下一讲我们进入到基本世界观的第二讲：身处重尾世界。
`,Nh=`# 002丨重尾：世界服从极端值

## 讲什么

基本世界观第二讲：**世界不是平均的，世界服从极端值。**统计上的"重尾分布"是财富、名气、影响力等一切可积累事物的真实形态。

## 解决什么真问题

从小生活在平均化的小世界（家庭平分、同学同质、同事收入相近），我们本能地把"平均"当成正义。一旦进入真实世界，这个错误的世界观会导致一系列误判：要求平均分配、不理解贫富差距、用补短板策略过一生。

## 核心论点

- **极端少数占据特别大的份额**：全球最富有的 8 个人，财富超过排名靠后那一半人口的总和。这就是 80/20 法则（帕累托法则）的极端版。
- 身高、智商是正态分布，可以谈平均值；财富是重尾分布，**谈平均值没有意义**。
- 重尾的成因是**正反馈（马太效应）**：财富、机会、声望都属于"乘法世界"——你的增量等于你当前的动作乘以你的存量。**存量越大，增量越大，说白了就是有复利。**
- 加法世界 vs 乘法世界：一天劳动换一天报酬是加法；存量参与放大是乘法。**贫富差距不是因为富人坏或穷人懒，而是因为有人能用上复利。**

## 关键例证 / 金句

- 吉布拉特定律：公司增长率与规模近似无关——大小公司都涨 10%，体量差距就必然越拉越大。
- 托马斯·索维尔《社会正义谬误》：乌干达赶走亚裔企业家，结果经济崩溃，本国人财富变得更少。
- 萨姆·奥特曼："**最高的投资回报率来自于在你本来就擅长的领域变得更好，而不是在你薄弱的领域改进。**"
- 风险投资约 10% 的投资贡献 85% 的回报——秘诀不是广撒网，而是**按比例认购权、跟着正反馈追加投资**。
- **"有人飞得高不可怕，整个气流停了才可怕。"**

## 如何应用

- 放弃"补短板"直觉：乘法世界只需要一块很长的长板，在一个狭窄交叉点上做到世界一流。
- 设法从加法世界跳进乘法世界：避免"做一件事得一份钱、跟存量无关"的工作，积累个人信誉、品牌与网络效应，让以往的成就影响以后的机会。
- 与"大数"相乘：找超级明星合作、让大牛给你投资——**乘法效应是双向的，强强联合是多赢**。
- 身在重尾世界先求保本：正反馈也会放大灾难（黑天鹅），先理解脆弱与反脆弱，再谈发达。

---

## 全文

> 以下为课程转录全文，已做去噪与语义分段；**加粗+底纹**处为核心论点与金句。

你好，欢迎收听现代思维工具 100 讲，我是万维钢。这是基本世界观模块的第二讲，题目是**世界服从极端值**。

一般人对世界的感知和世界的真实面貌之间有一个重大差异，理解这个差异能提升你的人生格局。通常我们从小到大都是生活在一个平均化的小世界之中。如果你有兄弟姐妹，家里好吃的肯定会大家平分；你上小学，多数同学都来自家附近，生活状况跟你大同小异，你们用的课本都一样，学生服每人一件。哪怕到了大学、参加了工作，可能同伴来自天南海北，但你们既然上同一所大学、在同一个单位工作，你们的能力和收入水平也就都差不多。长期生活在这些小世界里，你的体感就是人与人的差别不应该太大，有什么好东西最好平均分配。你默默地认为**平均才是正义的**。

但是偶尔离开小世界，你就会发现这个世界一点都不平均。我小时候第一次坐火车远行，最大的感触不是外边的世界有多大，而是我的家乡哈尔滨有多么独特：原来中国更多的土地是田野和乡村，城市就好像是孤岛一样——但是那些孤岛却占据了决定性的分量。工业化国家的大部分人口都住在城市里，而且少数大城市承担着远超比例的人口、经济和创新。

人更不平均。你平时肯定感觉不到的一个现实是：**这个世界上最富有的 1% 的人口所拥有的财富，超过其余那 99% 人口的财富总和；全球最富有的八个人——就这八个人——所拥有的财富，超过全世界排名靠后的那一半人口的财富总和。**其实各个领域都是如此：少数公司占据行业大部分业务，少数明星拥有大部分粉丝，少数畅销书和爆款电影创造了大多数销量和票房。

这其实就是我们说的 80/20 法则，最早可能出自意大利经济学家帕累托：他先是注意到意大利 20% 的人口拥有 80% 的土地，然后发现这个模式到处都是——20% 的明星产品创造了 80% 的收入，20% 的核心客户贡献了 80% 的营业额，少数顶尖员工产生了公司的大部分业绩。当然具体的比例不一定是 20 对 80，也可能是 10 对 90 或者 1 对 99。这里的关键是：**极端少数占据了特别大的份额。你在自己周围看不到，但这个世界的真相是它一点都不平均，它更倾向于极端。**

对此你可能很愤怒：凭什么呢？我们把那八个首富的财产没收，不就立即可以让世界上一半人的身价翻倍吗？我们为什么不把头部网红干掉，来个"一鲸落万物生"呢？又或者，你想加入那些极端少数。

这个极端少数占据大份额的现象，在统计学上叫**重尾分布**，有时候也叫肥尾。它在数学上有不止一种实现形式，最典型的是幂律分布，我们这里不必追究细节。简单说，重尾就是分布曲线的尾部比较肥大。比如人的身高就不是重尾分布，而是所谓正态分布：它是一条对称的钟形曲线，大多数人都集中在平均值附近，两边尾部的人数很少，而且尾巴也很短——最矮的人也有一米多，最高的也不会超过三米。如果人的财富也像身高那样分布，特别富的人就应该很少，而且富也富不到哪去，毕竟没有人的身高能达到你的十倍。**然而财富是重尾分布的：财富超过你十倍的人很多，而且有的人超过你百倍千倍。**

**对重尾分布，谈平均值是没有意义的**，因为极端少数的影响实在太大了。你大可参照北京市居民平均身高找结婚对象，但你如果非得要求自己另一半的收入超过平均值，你会淘汰掉远超一半的人。身高、预期寿命和智商都可以谈平均值，我们很庆幸人与人的先天条件相差不太大。但总的来说，**这个世界并不服从平均值，世界服从极端值。**

那你说，既然人与人的身高和智商都差不多，怎么财富能差那么多呢？造成重尾分布的原因有很多，都跟某种**正反馈**过程有关系。正反馈说白了就是越大越容易变得更大，也就是所谓马太效应。比如现在有个理财产品，年利率 10%。如果你有 100 万元，你一年能赚 10 万元；可是如果你只有 1 万元，你就只能赚 1000 元。你的投资动作和冒险精神并没有不同，可是收入就能差这么多。**这是贫富差距拉大的最根本原因：富人并不是因为比穷人更勤奋，他们是因为已经很有钱而变得更有钱。**

再比如就在 2025 年 AI 浪潮之下，像甲骨文和 AMD 这样的大公司，就因为宣布跟 OpenAI 合作，股价就能一夜之间暴涨 30% 到 40%。怎么这么大的公司还有那么大的增长潜力呢？经济学上这叫**吉布拉特定律**，意思是公司的增长率跟公司的规模近似无关。如果大公司和中小公司都能一年涨 10%，它们的体量差距就必然越拉越大。

名气也是正反馈的：一个已经很红的流量明星，因为流量大就比普通明星更容易获得最优质的资源；因为观众更关注他，平台必然就更重视他，于是他的吸粉速度进一步加快。就连学术界也是如此：少数明星科学家对科学进步有最大的影响，他们发表的论文比普通科学家多很多。为什么呢？因为更高的声望会带来更多的科研经费和更好的合作机会，能挑选最好的研究课题，这些课题又会让他们变得更聪明一点。你说财富不公平，其实连科研都不公平。

财富、机会和声望之所以能形成正反馈，是因为它们都属于**乘法世界**——也就是说，**你的增量等于你当前的动作乘以你的存量。存量越大，增量就越大，说白了就是有复利。**然而世间很多人是生活在加法世界之中：一天的劳动换一天的报酬，这次的收入跟以前的积累无关，没有复利。我们本能的觉得这很不公平——难道回报不应该按劳动分配吗？怎么能按存量分配呢？

意识到身处重尾世界，很多人会有一种想要把世界拉平的冲动。你可以考虑用税收来调节，但是千万别过激，因为**历史上劫富济贫的尝试几乎都是以经济崩溃告终**。托马斯·索维尔在《社会正义谬误》那本书里列举了好几个例子，比如乌干达政府发现国内有钱的都是来自亚洲的企业家，而本国人很穷，觉得很不公平，就把这些亚洲人给赶走了。结果乌干达经济崩溃，本国人的财富变得更少而不是更多了。

这里的要点在于：**做乘法不只是对富人有好处，它对所有人都有好处。**比如你们公司花费巨资创造了一款新产品，想找个达人带货。如果这时候平台找你谈话，说某某明星已经太有钱了、挤占了普通网红的机会，为了公平你们能不能请个不太出名的人呢？你当然不能同意。你请超级明星并不是因为你喜欢他，而是因为他能最大化地放大你产品的知名度。**乘法效应是双向的：你和他都希望跟一个大数相乘**，而且消费者也希望能在最关注的频道买到最好的商品、以最多的人数拿最高比例的折扣。强强联合其实是一个多赢局面。如果你要开公司，你希望超级富豪给你投资；如果你要做科研，你希望顶级科学家跟你合作。这些人资源多、见识广、能力强，最有可能让你的项目成功。让超级明星充分发挥，对合作者、对消费者、对整个社会都是加分。

当然，胜者通吃的副产品是贫富差距拉大，但其实问题没有人们想象的那么严重。明星不会一直红，人们会厌烦他，他自己会变老，他会跟不上最新的变化。吉布拉特定律也不能让大公司永葆青春，它所在的产业会衰退，它会因为错过最新的创新而被颠覆掉。历史上从来没有永远的富人，富人的财富会被子孙后代迅速败光。其实哪怕在人的一生之内，也不是富人永远富、穷人永远穷。经济学家早就发现，如果你看某一年所有美国人收入的横截面数据，那的确是贫富差距巨大，而且还在逐年增加；但如果你看纵向数据、考察人的一生，那么你会发现那些年轻时候很贫困的人并不会一辈子贫困，他们多数会在成年以后收入显著提高；而曾经特别有钱的人运气也不会一直好，他们的排位很可能会在某个阶段跌落。投资失败、待业、离婚、解体、税收和通货膨胀，都是减少富人财富的途径。**富人投资就是他们对社会最好也是最硬用的贡献，因为投资被暴雷是大自然调节贫富差距最快的手段。**

贫富差距的确是问题，但如果这就是乘法世界的代价，那么我们宁可支付这个代价，也不能取消乘法。**有人飞得高不可怕，整个气流停了才可怕。**

与其抱怨重尾不公平，不如想想怎么从加法世界跳出来、加入乘法世界。那么你需要改变"求平均"的观念。如果你整天做的事是把固定的几个数加起来，你会本能地想要提高平均值，尤其是要补齐短板。比如高考一共就那么几科，每科满分 150 分，这意味着哪怕你的数学达到职业数学家的水准，你最多也只能得 150 分。那么一个数学强而英语弱的考生，最佳策略是补习英语，而不是继续强化数学。这就如同一个出租车司机每月只有 30 天能挣钱，所以他最关心的是不要旷工，而不是提高单日收入。**但是在乘法世界中，你要做的是一个参与方程的乘数，你只需要一块很长的长板。**我们关心一个数学家的数学有多强，越强越好、上不封顶，而不是他的英语有多弱。作为思维工具课，我们当然希望你做个认知上的通才，但是在具体的事业上，你得能发挥长板优势才好。

OpenAI CEO 萨姆·奥特曼曾经说过："一般来说，**最高的投资回报率来自于在你本来就擅长的领域变得更好，而不是在你薄弱的领域改进。**大多数人过于关注自己的弱点。你希望在某个狭窄的交叉点上做到世界一流水准，而不是把一大堆事情做得比较好。"

加入重尾的秘诀是**认准一个能让你做乘法的领域，实施正反馈**。比如风险投资就是明显的重尾事业，因为大约 10% 的投资贡献了 85% 的现金回报。很多人以为做风险投资就是广撒网，投的公司越多越好，万一哪家做大了就算赚到了。其实不然：**风投的秘诀是绝不能投一把就不管，而是要选择时机追加投资，跟着公司正反馈成长。**投资人最看重的一个权益是"按比例认购权"：它允许我将来按照一定比例给你追加投资，我的持股比例不被稀释。而作为你的股东，我能比外人更早发现你的潜力，一旦你展现超强潜能，我就要追加投资。**乘法世界要求你不能平均地对待每个合作对象，你必须谋求跟大乘数互相促进、共同成长。**

正反馈并不总是好事：病毒和恐慌情绪的传染也是正反馈，金融风暴、飓风和地震等大灾难也是复杂系统级联正反馈的结果。塔勒布的招牌学说黑天鹅事件也是重尾世界发生的事情。所以身处重尾世界，你不能光想着发达，你得先保本才行——那么你需要理解什么是脆弱、什么是反脆弱。而且任何事物——也许除了目前为止的计算机芯片摩尔定律和 AI 的缩放定律之外——都不会永远按固定比例增长，正反馈到了一定程度就会发生边际效益递减，那么你就得开发第二曲线。那些都很重要，我们还会专门讲。

但最重要的是：**这个世界很喜欢极端少数。**你喜欢也好，不喜欢也好，这不是一个幼儿园小朋友排队吃果果的平均世界。平均是一个小世界中人为制造的环境，必须有人刻意分配才行，平均不符合自然规律。作为重尾世界中的普通人，我会设法加入到乘法世界中去，我希望和资本、网络效应和声望联系起来；我会尽量避免那些做一件事得一份钱、跟存量没关系的工作；我希望我以往的成就能影响我以后的机会；我希望建立个人信誉和品牌积累，形成正反馈。我们会提供大量工具帮你做这件事。

就目前而言，难道你不觉得重尾世界很好玩吗？

下一讲会进入第三个基本世界观，我们讲讲稳态生存的观念陷阱。
`,Rh=`# 003丨能动：稳态生存的观念陷阱

## 讲什么

基本世界观第三讲：梳理那些把人困在平庸里的"稳态生存逻辑"——它们曾是局部最优的生存策略，但在高波动的现代世界里已经过时，却仍然支配着大多数人。

## 解决什么真问题

为什么你明知某些观念不对（听话、节俭至上、随大流、只盯指标），却还是不自觉地按它们行动？因为这些观念不是个人选择，而是一整套在匮乏环境中演化出来的文化系统，而且**文化观念的更新总是比物质条件的改变慢很多**（文化滞后）。

## 核心论点

- 稳态生存逻辑有三大基因：**资源匮乏、强从众、用简单模型看世界**。风险厌恶、低能动性、面子文化、指标崇拜等都能从这三者推演出来。
- 匮乏会把生存策略上升为价值观、道德乃至审美（"习得性喜欢"）；还会自动引发**零和思维**——把他人默认当竞争对手。
- 强规则社会鼓励个性，弱规则社会鼓励一窝蜂。顺从价值观的推论是**态度文化**：以忙碌为荣，有没有功劳不知道，反正我有苦劳。
- 简单模型给人线性思维："努力了世界就应该给我回报"——**其实并没有一个神灵看你努力就给你发奖励。**

## 关键例证 / 金句

- 匮乏想象实验：让低收入者想象"修车要花一大笔钱"，他们的智商测验当场下降 13 分。
- 借 8000 还 7992 的段子：把外部世界当成一个整体的过度简单模型。
- **"那些品质是很好的局部理性，但是从全局来看，却是把人困在陷阱里的枷锁。"**
- **"别人期待你省心、肯干、不闯祸；别人可没期待你兴旺发达。"**
- 官办学校从来不是教人赚钱的地方，那是训练合格劳动者和守法居民的地方。

## 如何应用

- 对照三大基因自查：我现在的恐惧是真实风险还是匮乏惯性？我在从众吗？我的模型足够复杂吗？
- 把"听话、态度好、别出头"这类旧价值观从育儿和自我要求中移除——**真正爱孩子的家长应该希望孩子不要那么听话，甚至敢去创造一点波动**。
- 前提是你得是个**能动者**：你是调用工具的人，你不能是别人的工具。

---

## 全文

> 以下为课程转录全文，已做去噪与语义分段；**加粗+底纹**处为核心论点与金句。

欢迎来到现代思维工具课，我是万维钢。今天是基本世界观模块的第三讲：稳态生存的观念陷阱。

咱们先来做个思想游戏。想象你是个功成名就的社会栋梁，也许是大企业家、社会活动家、著名科学家或者高级官员。此刻的你已经垂垂老矣，即将到达生命的终点。好消息是你会转世，而且下一世还是投胎在中国；但坏消息是投胎完全是随机的——你大概率会投生到一个普通家庭，搞不好还是个贫困家庭。你肯定不甘于做个普通人，但游戏不允许你给来世储备秘密财富，而且你这一世的知识和技能也都会被忘掉。现在游戏开了个后门，允许你给下一世的自己写一份人生说明书，等他长到能明白事理的时候，父母就会把这个说明书交给他。那么请问你会写什么呢？

我大概会告诉自己：尽快前往一个大城市学习和生活，掌握几项可迁移的技能，争取不对称的优势，积累复利。为此我要让他理解重尾分布，明白为什么要想有大动作就得加入乘法世界；而为了跟上最新局面，应该先弄一部智能手机，也许上一个叫得到的 App，去学点见识等等。一份说明书写不下太多东西，但我认为有一方面的内容你必须写上，因为别的地方大概不会讲，那就是**摆脱平庸观念的束缚**。我会在说明书上这么写：你周围的人，你的同学、老师，包括你的父母，都认为这些观念是天经地义的。可是殊不知，**那些人都在用的梯子，多半只能到达"人人能到的高度"。如果你想要有大作为，你就必须超越这些观念。**

这一讲咱们来梳理一下常见的平庸观念。我不想用弱者、底层、前现代之类的词来形容这些观念，因为其实各个时代、各个阶层都有人相信这些。这些是策略问题，不是阶层问题。我把它们称为**稳态生存逻辑**，因为平庸观念最大的特点是追求稳定。

直到不久之前，中国绝大多数人都在过稳态生活：一个地方、一项技能或者一份工作就是一辈子，周围是同一群人。稳态生存逻辑就是在这样的环境中演化出来的。今天的中国已经很不一样：一辈子可能换好几个职业，很多人会远赴他乡求学和生活，原以为稳定的工作也可能失去，人一生的命运会有更多波动。按理说那套逻辑就不适用了，然而有个规律叫**文化滞后**，意思是文化观念的更新总是比物质条件的改变慢很多。世界已经变了，但是人的观念不会及时升级，还沉浸在过去的叙事之中，于是就会自我限制。

简单说，**稳态生存逻辑有三大基因：资源匮乏、强从众和用简单模型看世界。**令现代人厌恶的很多坏习俗都能从这三个基因推演出来，比如风险厌恶、低能动性、面子文化和指标崇拜等等，真是不可不察。也许人非得经过痛苦反思，把稳态生存逻辑解构掉，才能脱胎换骨。下面咱们一个一个说。

**资源匮乏**会让人专注于求生存而顾不上求发展，更谈不上多姿多彩的自我表达。你站在富足时代，会认为人们在匮乏时代的各种做法很无奈，但当时现场的人可不认为那是不得已，因为他们从来就没考虑过还有别的可能性。他们把匮乏生存逻辑上升成了价值观、道德乃至于审美。就拿食物来说，韩国的泡菜、英国的炸鱼薯条、美国社区聚会那种一家带一道菜的 Potluck 等等，其实原本都是困难时期不得已的廉价果腹方法，可是人们习惯了就会把它给美化，说这是我们的民族特色，是需要好好传承的文化。再比如日本侘寂文化，所谓对残缺的美学追求，也是起源于以前物资匮乏，东西坏了也得凑合着用，完了还以此为荣。借用麻省理工学院两个经济学家摩西·霍夫曼和雷兹·约耶在《隐藏的博弈》那本书中的说法，这叫**习得性喜欢**——也就是你本来不喜欢这东西，是通过学习才喜欢。

匮乏能解释很多事情，比如人情。以前人们无力购买服务，有事必须邻里互助：今天你帮我搬家，明天我帮你看小孩。这种互助看似随意其实很重要，以至于大家会默默地记下人情债，最好谁也别吃亏。你可以偶尔透支一下，但你会对人情保持敏感。还有过去中国特别讲究孝道，孩子几乎是从懂事那天开始就在为给父母养老做精神准备，最好做到骨子里的顺从。现在看，那其实就是以情感绑架为手段的养老保险。等中国有了养老金，父母的独立性立即提高，也不非得跟子女同住了。你能说现代子女不孝吗？现实是有研究者对多个国家的研究发现，社会福利并没有削弱子女跟父母的关系，只是让那个关系更纯粹了——是自发的亲情，而不是道德负担。

匮乏还会自动引发**零和思维**：资源就这么多，你多拿一点我就少一点，人们会下意识地把他人当成竞争对手而不是合作伙伴，默认防御姿态。零和思维的推论是"贫穷代表道德，富人都是坏人"：既然东西只有这么多，你多拿就一定是占了别人的份额，你是巧取还是豪夺根本不重要，反正你肯定有问题。极端的时期，人们以穷为荣。

可能最坑头脑的影响是**风险厌恶**。如果你有 100 万元，也许不确定性是你的朋友；但如果你只有 1000 元，你没有资格做什么投资，这可是你保障生存的钱。匮乏时代的人考虑的不是怎么赚钱，而是怎么省钱，这就是为什么"省"是最重要的传统美德。"省"的作用很有限，核心是减，减等于低风险。为什么过去的人对私德要求那么高、那么看重女性的贞洁呢？这都是为了降低风险，毕竟意外怀孕的风险太高了。为什么传统社会讲安土重迁、特别不愿意离开老家去外地闯荡呢？因为外面的世界很危险。

风险厌恶大概是最根深蒂固的文化滞后。像现在是注意力稀缺的时代，你得非常善于表现自己才能被人看到、才能得到合作机会，对吧？那为什么家长们还在向孩子灌输"枪打出头鸟"的老道理、要求事事低调呢？因为他们仍然害怕被人嫉妒，那个怕可以是无形的。再比如现代商业都讲究最小可行产品：你有什么想法应该先以最快的速度弄个初级版本就推向市场，边卖边改，快速得到反馈，快速迭代。可是有的人非得要完美的计划，希望万事俱备才行动，其实就是害怕失败。传统社会一点都不鼓励你去冒险。

这就引出了**从众心理**。强从众是因为弱规则：如果一个社会有完善的规则，那么只要不明确违反规则的事你就都可以干，你大可理直气壮地个性化发挥。但是在弱规则社会，法律不能给你当挡箭牌，你往往不知道做什么事会得罪什么人，那么最安全的办法就是照着大多数人那样做。**强规则社会鼓励个性，弱规则社会鼓励一窝蜂。**别人买啥就买啥，别人说啥就传啥，要么就没人，要么就一大帮人，都是强从众的现象。

既然安全感是来自人际关系而不是来自法律，人们就会自动服从权威，乃至于顺从容成了一种价值观。比如以前的家长夸孩子特别爱夸"听话"。现在你想想，听话是优点吗？**听话是自己没主意，是通往平庸之路。**顺从价值观的一个推论是态度文化：你干一个活，实际结果干没干好无所谓，关键是态度要好。在这个态度文化之下，人们以忙碌为荣——有没有功劳不知道，反正我有苦劳。再进一步，忙碌有时候还成了地位信号，有的人会炫耀自己有多忙。

你观察一下身边是不是有大量的无效忙碌。比如学生学习，按理说你得看学会了什么、能不能学以致用，哪怕会考试也算真学进去了。可是很多人根本不是在学习，而是在做出学习的样子：比如反复的大声朗读、抄写背诵，看着气势汹汹，其实并不是有效的学习方法。**如果服从是一种业绩，态度就成了能力，姿势就成了成果。**

强从众的另一个副产品是**面子文化**：决定做什么不看自己能不能得实际好处，而是先考虑别人为此会怎么看你。别人都买房所以你也必须买房，工资没多少先弄辆豪车，这些看似是求上进，其实还是从众。那个从小被你夸听话的孩子，搞不好就成了假装学习、无效忙碌、逼着你给他拿结婚彩礼钱的孩子。

再来说**用简单思维模型看世界**是啥意思。我最近看到一个段子，有可能是真事：有人借给一位同事 8000 块钱，等到还钱的时候，同事只还了 7992 元。为啥少八块钱呢？同事说：你借给我钱是微信转账，我提现的时候微信扣了 8 块钱手续费，我只拿到 7992 元，所以我只能还你 7992 元。你理解其中的逻辑了吗？这位同事是把外部世界当成了一个整体：我从世界拿到了 7992 元，所以我还回去 7992 元，这不很合理吗？他不能理解借钱是同事之间的信用关系，手续费是微信的事。**这就是一个过度简单的思维模型。**

简单的模型给人**线性思维**。"努力"就是一种线性思维：家长让孩子努力，领导要员工努力，每个人对自己说要努力。可是往哪个方向努力呢？怎么努力才有效呢？人们不管这些，反正只要我努力了，世界就应该给我回报。单纯的努力其实就是把外部世界当成了一个整体。"我这么努力，怎么我挣钱还这么少呢？"殊不知你根本没搞明白钱是怎么来的，你没有创造财富。你必须有个好一点的模型，才知道该做什么选择、在哪个领域有没有杠杆以及时机如何等。**要知道并没有一个神灵看你努力就给你发奖励。**很多人一说中国足球就骂球员不努力、没有拼搏精神，还跟苏超那种业余联赛对比，希望看到纯粹的足球，其实都是在渴望让世界变简单，是桃花源情节。业余联赛可以，但职业足球是复杂的，你必须理顺很多事情，这不是什么回到初心的问题。

简单思维模型的一个推论是**指标主义**，也就是一切为了达成某个指标：学习是为了考出好成绩拿到高学历，而读书反而不重要，因为课外书没有指标。指标主义的言下之意是：既然我达成了这个指标，世界就应该给我相应的待遇——我考上 985 大学就得拿高薪，我考上公务员就得有个又稳定又能升值的岗位。**只知道世界欠我的，而不知道自己究竟能给世界提供什么。**

适应匮乏、强从众和简单模型，对稳态生存来说不但够用，而且好用。从小听话、节俭、努力，做事随大流，从来不出头、又乖又顺的人，难道你不喜欢吗？如果你是个地主，你希望你家的佃农都是这种人；如果你是个开店的，你会希望服务员都有这些品质；如果你是个辛苦劳作、只能勉强糊口的家长，你会认为子女的任何个性发挥都是制造麻烦。要不怎么大清向来以孝治天下。**别人期待你省心、肯干、不闯祸；别人可没期待你兴旺发达。**官办学校从来不是教人赚钱的地方，那是训练合格劳动者和守法居民的地方。

那些品质是很好的局部理性，但是从全局来看，却是把人困在陷阱里的枷锁。**世人对低波动生存的痴迷是一座大山，但我们现在是个高波动世界。**真正爱孩子的家长应该希望孩子不要那么听话，不必过于努力，不用害怕群体压力，甚至敢去创造一点波动。你最好有个足够复杂的思维模型，能理解各种事物的规律，能运用科学思维工具。但这一切的前提是**你得是个能动者：你是调用工具的人，你不能是别人的工具。**

最后咱们还是用一首诗结束今天的课程：

> 故事激励寒与不安。
> 钥匙已生锈，你却把它挂在胸前，当做信仰的徽章。

下一讲咱们会说第四条基本世界观：这个世界的硬约束到底是什么，以及你该如何行动。
`,zh=`# 004丨约束：先尊重，再行动

## 讲什么

基本世界观第四讲：用小说的"六层幻想"做引子，讲清什么是**硬约束**——无法绕开的限制条件，以及面对硬约束的正确姿态：先尊重，再行动。

## 解决什么真问题

大多数流行叙事都是许愿：天上掉的超能力、被动善良被强权垂青、努力必升级。沉浸其中的人一碰到现实的硬约束就崩盘。真问题不是"要不要有梦想"，而是**你的叙事有没有把边界条件画进去**。

## 核心论点

- 小说按一厢情愿程度分六层：系统外挂 → 霸道总裁 → 金庸武侠 → 升级打怪 → 对抗体制 → 寻找意义。**大多数人活在前面几层，他们的生活叙事其实是许愿。**
- **现实和想像最大的区别是这里有大量的硬约束。事越大，硬约束越多，自由发挥的空间就越小。**
- 四种无法逃避的硬约束：**能量守恒、时间窗口、自然规律、人的能动性**（你不能假设别人都是 NPC）。
- 考虑硬约束最简单的动作是**算账**：很多美好的设想只要算一算账就知道不可能。
- 对成熟的人来说硬约束是好消息：**有约束才可预期、才讲章法、才值得研究和学习。你不能为所欲为的另一面，是别人也不能为所欲为。**

## 关键例证 / 金句

- 马斯克"政府效率部"案例：宣称每年削减 2 万亿美元，但联邦预算 60% 是法定固定支出、13% 是债务利息、13% 是军费，真正能动的不及 1 万亿。结果：声望一落千丈，2025 年 5 月离职，留下一句"联邦官僚体系比我想得糟"。
- 地底文明算账：地球吸收太阳能功率 1.22×10⁵ 太瓦，地热通量只有 47 太瓦（1/2600）——**能量上限决定人口上限，人口上限限制分工复杂度，分工复杂度是创新的基础**。
- 在家做出米其林级牛排 ≠ 能开牛排馆：凌晨四点抢肉、冷链、定制炉子、产能、消防卫生检查……**触碰到资源的边界，你就遭遇硬约束。**
- "宏大叙事最怕算账。"

## 如何应用

- 启动任何计划前，先列出这个叙事的硬约束清单：能量/资源够不够？时间窗口对不对？违背什么自然规律？相关的人都有自己的能动性吗？
- 对任何宏大叙事先算账：数字对不上，故事再热血也别信。
- 把硬约束当成地图的边界而不是行动的借口：约束之内找路径，约束变了（危机、技术突破）路径才可能重写。

---

## 全文

> 以下为课程转录全文，已做去噪与语义分段；**加粗+底纹**处为核心论点与金句。

你好，我是万维钢，欢迎来到现代思维工具课。今天是基本世界观的第四讲，我们说说这个世界的**硬约束**。

我们讲了这个宇宙的第一性原理是叙事，但在用叙事激发行动之前，你需要明白：**世间绝大多数流行叙事都不是特别有用**，可以说人们是日常沉浸在神话之中而不自知。你得破除神话思维、直面现实，那么你就必须尊重世界的硬约束。这一讲咱们从流行小说讲起，帮你训练一双破除神话的眼睛。

我很喜欢读小说，因为我需要想像更有意思的生活，我认为一厢情愿的想像也是一种慰藉。但读小说别把自己读成孩子才好。下面我们**把各路小说按照一厢情愿程度分成六层**。

**第一层是系统外挂。**主人公是最平凡的人，没有任何突出优点，突然之间天上掉馅饼就获得了超能力——可能是一件法宝、一个内置于大脑中的知识系统、一种魔法，总之他是被选中了，然后击败所有敌人。像神笔马良、漫威宇宙里那些超级英雄，就连哈利·波特的开头都是这样的设定。这是纯粹的意淫：这一层作品迎合了读者最直白的梦想——我什么都不用付出，就能一夜逆袭。

**第二层是霸道总裁爱上我。**主人公因为一向其实容易做到的优点——比如她是现场唯一算是善良的人——而获得了强权的垂青。灰姑娘和白雪公主都属于这个类型。你一个做题家文不行武不行，因为偶然好心救过一只狐狸就成了美满的人上人。如果我们不客气一点，简·奥斯汀的那些爱情小说本质上也是霸总文。这一层的读者渴望被看见：我不打算主动做什么，但既然我是个这么好的人，上天总该给我分配好东西，**最好被动的善也能赢**。

**第三层是金庸武侠。**主人公不但有爱心，而且积极做好事，也刻苦练功、也经历了磨难，但是他从来不会主动追逐名利，荣华富贵都是外界强加给他的，他不忘初心就好。像郭靖、令狐冲、萧峰、段誉、虚竹这些人，那真是"夫唯不争，故天下莫能与之争"。不争就能得到吗？这一层的读者勇于行动，但是要求以最漂亮的形象赢。

**第四层是升级打怪。**主人公知道世界是残酷的，他没有道德洁癖，他积极争取，他不但相信我命由我不由天，而且不介意为了更大的善做点坏事。现代网络小说大多在这一层，而现代读者对此表示理解之同情。如果你认为这就足够现实了，我要说的是：**这里的神话是"努力真能升级，支付代价真有回报"——可是现实可没义务给你这个确定性。**

**第五层是对抗体制。**主人公会被命运捉弄，原来自己不但不是天选之人，而且不是唯一的主角。他们发现努力不一定会赢，好人不一定有好报，但他们仍然选择跟命运抗争。像《冰与火之歌》《红楼梦》都在这一层，让人看到命运的残酷性。这一层的神话是：至少你知道谁是好人，哪怕不赢，你也总可以选择加入正义的一方。可惜真实世界有时候连这点意义都不给你。

**最接近现实的是第六层，寻找意义。**这一层的作品里没有绝对好人和坏人，也没有绝对的对错，甚至你都不知道活着的意义是什么，大家只是很无奈。《活着》《1984》《美丽新世界》都是如此：你知道没有秩序不行，可你发现秩序本身就是一种压迫。

一切叙事都是主观的，第六层也不能代表真实世界。我们总得在某个幻想中寻找意义，**但你选的那个叙事最好有个复杂一点的模型，你最好在其中有点能动性。**大多数人活在前面几层，他们的生活叙事其实是许愿。

**现实和想像最大的区别，是这里有大量的硬约束**，也就是无法绕开的限制条件。比如你是个美食家，一番研发在家里做出了特别好吃的牛排，具备米其林的风格和精准的火候。你心想：我这不吊打本地那些餐馆吗？于是你决心开一家高端牛排店。殊不知开店完全是另一个故事：你必须在每天凌晨四点去抢最好的肉，就这样冷链车还可能被堵在早高峰；你要的那个火候得定制炉子；你的产能无法保证晚上 9 点半之前完成那么多订单；你的定价是否过高；你的店会反复经历消防和卫生检查；总有挑剔的顾客找茬投诉你等等。你一到街上就明白，那些餐馆把牛排做简单一点是有原因的。

不当家不知柴米贵，不量产不知老板难。这和"穷人的孩子早当家"是一个道理：**触碰到资源的边界，你就遭遇硬约束；遭遇硬约束，才明白以前想的是神话。**事越大，硬约束就越多，自由发挥的空间就越小。

人们常常以为越是大人物做事越自由，认为那些政客今天颁布一个政策、明天下达一个命令，都是出自由裁量权，体现了自己的理念和个性。其实不然。有不少政客的确想这么干，但历史规律是他们早晚都遭遇了硬约束，而且越到执政后期手越软，最后感叹"这个事道什么都干不成"。**现实会逼你做个理性行为人：你得满足各方面条件，照顾各路关系，得平衡人事博弈和组织流程，结果别说人定胜天，就连看似日常的改革都不是你想做就能做到的。**

咱们举个现实的例子。2025 年 1 月，美国总统特朗普开启第二个任期，一上来就让他最重要的竞选赞助人埃隆·马斯克成立了"政府效率部"，宣称要把联邦政府开支每年削减 2 万亿美元。你要知道 2024 年联邦政府总开支是 6.8 万亿美元，这是要砍掉一大块。而且两人还说要把省下来的钱以每家发 5000 美元支票的方式返还给老百姓。天命所归的总统和当代最伟大的企业家联手，要跟政府腐败开战、给老百姓谋利益了，这不比任何小说都精彩吗？

但现实不是小说。政府效率部还没开工，有识之士就已经知道马斯克的目标根本就不可能实现，我早在 2025 年 2 月就在精英日课专栏说过。**你只要算一算账就知道**：6.8 万亿的总预算中，有超过 60% 是法律规定的固定支出，其中主要是医保和社保，这些支出别说特朗普能动，连国会都不能随便动，要动得先修改法律；然后还有 13% 是用于支付债务利息，也属于不花不行。总统和国会真正可以自由裁量的钱只占总预算的 27%，而这其中又有一半、占 13% 是军费，马斯克惹不起。所以**马斯克真正能触碰的份额只占总预算的 14%，还不到 1 万亿，你怎么从中省出 2 万亿来呢？**

就是这 1 万亿也不是随便动的：这里是联邦政府的日常开支，包括社会服务、公共品、科研、治理运行等，请问你砍哪一项呢？马斯克的选择是一部分美国对外援助费用和科研经费——并不是因为这两项最该砍，而是因为最容易砍，毕竟科学家和外国人不太容易发动大规模群体事件。但是这两项本来就没有多少钱。马斯克还裁了一部分联邦雇员，后来发现没有这些人不行，又请回来一些。结果马斯克的声望在短短几个月之内一落千丈，硅谷人一度以开特斯拉为耻。2025 年 5 月 28 日，马斯克宣布从政府效率部离职，留下一句："联邦官僚体系比我想得糟，在华盛顿改善事情是一场攻坚战。"

截至 2025 年 10 月，政府效率部在其官网宣称已经节省了超过 2000 亿美元，但第三方机构此前就指出官网在故意误导：政府合约不是你说取消就取消的，你还得赔付违约金，实际可核实的节省开支要少得多。CBS 新闻更是引用一些机构的评估说，考虑到遣散费、诉讼费、联邦政府效率损失和税收损失，政府效率部的削减措施不但没省钱，反而给联邦增加了 1350 亿美元的开支。

回想马斯克上任那天，老百姓全体支持，又请了好几个天才少年帮着查账，这帮人甚至直接睡在办公室，那真是热血沸腾。**可到到头来不但输了，而且连敌人是谁都说不清。你总不能说加法运算是你的敌人。这就是硬约束：不见得有人故意跟你做对，是世界本来就充满限制。**

并不是说大事一定做不成，也不是说硬约束一定不能突破。如果美国社会遭遇深度危机、必须立即变，再硬的钱也能动；科技进步就是要突破曾经的限制。但是你必须尊重硬约束，**你得把你世界模型中的硬约束想清楚，画好边界条件，再谈成事的路径。**

在我看来，以下四种硬约束是我们无论如何都无法逃避的。**第一是能量守恒**：建设也好，破坏也好，取得信息也好，擦除信息也好，你干什么事都得消耗能量，你的资源是有限的。难道马良的神笔不用充电吗？**第二是时间窗口**：很多事情只在特定的机遇期才可能做成，那时候的约束会放松一些；窗口没到，你就只能等着。**第三是自然规律**：事物有自身的发展规律，那些规律不会因为你而改变，你心力再强也胜不了天。**第四是人的能动性**：每个人都有发起主动的权利，你不能假设别人都是 NPC、只想自己做主角。

你不能想要什么就有什么，不能想什么时候开始就按下按钮，不能指望事情严格按照你的设想演变，你不能控制一切。**考虑硬约束最简单的就是算账。**很多美好的设想只要算一算账就知道不可能。

比如有人传说地球内部存在所谓地底文明——什么蜥蜴人之类——说比我们地面的文明还要古老还要先进，那些飞碟其实是他们出来透气。你可能觉得真假难辨，毕竟地下那么大，谁也不能保证里面没有文明。但你只需要算账。我让 GPT 算了一下：咱们地表文明的各种能源本质上是来自太阳，地球吸收太阳能的功率是 1.22 乘以 10 的 5 次方太瓦特；地底没有阳光，只能依靠地热能，而地热通量只有 47 太瓦特，是我们的两千六百分之一。我们地面人吃的食物主要来自植物的光合作用，地底没有阳光，那就必须用别的方法把能量转化成食物，比如用地热发电、再用电产生 LED 灯光去照射植物——这样做成本极高，再考虑到地热本来就不多，你勉强合成的食物还不够维持一个百万人口的城邦，饲养动物就干脆别想了。然后你还得考虑氧气来源和散热问题。GPT 最宽容的估计是：如果地底真有人，最多也就只有几百万的人口规模，他们以合成食品和藻类作为主食，偶尔补充点真菌和昆虫，勉强生存。**能量上限决定人口上限，人口上限限制分工复杂度，分工复杂度是创新的基础。那这么一个低能小规模的文明，怎么可能有比我们更高的科技呢？**

**宏大叙事最怕算账。**当有人说"我们既然能在贵州边远山区建起美丽的高铁，就能把青藏高原变成鱼米之乡"，你只需要问一句：谁出钱？

有效的叙事一定是在各种硬约束的范围之内找出路，而不是把世界当成愿望实现机。对不成熟的人来说，这是个坏消息，因为你不能随心所欲；**但对成熟的人来说，这其实是个好消息：有约束才可预期，才讲章法，才值得研究和学习。你不能为所欲为的另一面，是别人也不能为所欲为。**这个世界既不是地位高的人说了算，更不是决心大的人说了算，这才给所有人提供了起码的确定性和安全感。

下一讲，咱们说说这个世界的不确定性。
`,Lh=`# 006丨可能：不确定性是意义的燃料

## 讲什么

基本世界观第五讲：不确定性不是世界的 bug，而是让宇宙"有意思"的唯一设定。五种无法避免的不确定性，以及面对它们的正确姿态。

## 解决什么真问题

人到中年责任变大，麻烦自动找上门，人人都感叹"不知道明天和意外哪个先来"，恨不得生活像机器一样稳定运转。但你真得到了绝对确定性，又会感到难以忍受的乏味和窒息。怎么与不确定性相处？

## 核心论点

- 五种无法避免的不确定性：**混沌**（复杂系统对初始条件敏感）、**计算不可约性**（规则简单也算不快，只能等它演化出来）、**量子随机**（世界固有的、无缘无故的不确定）、**模型不确定性/奈特不确定性**（未来的东西根本不在你的模型里）、**博弈不确定性/反身性**（你一旦说出未来就会改变未来）。
- 智力正态分布而财富重尾分布，差的那部分主要是**运气**。2018 年意大利模拟实验：40 年职业生涯后最富有的不是最有能力的，而是**遭遇幸运事件最多的那批人**。能力本身也是一种运气。
- 面对不确定性的三种态度：渴望确定（补偿性控制，最容易被野心家收割）、坦然接受（"允许一切发生"等于交出主动性）、**合理分析：坏的管理，好的拥抱**。
- 进阶序列：**抗拒不如接受，接受不如拥抱，拥抱不如制造。**
- GPT 的洞察：人类真正喜欢的不是确定性本身，而是**追求确定性的过程**带来的精神愉悦与兴奋。**不确定性是我们加工意义的燃料。**

## 关键例证 / 金句

- 德国、瑞士、新西兰尝试**抽签发放科研经费**——让运气充分发挥作用。
- 《权力的 48 条法则》：谁提供确定感，谁就得到权力；**贩卖焦虑算得了什么，贩卖确定感的才是朝廷大鳄**。
- "对确定性的渴求，是心灵面临的最大疾病。"（罗伯特·格林）
- **"意外就是寻常。"**——你觉得这个是寻常、那个是意外，是因为你的视野就局限在这里。
- 燃料比喻：不确定性太多吃不消、太少不够看，最好是**一大块熟悉加一小块意外**；风浪越大鱼越贵；行动要为自己打开新的可能性，而不是消灭可能性。

## 如何应用

- 区分五种不确定性：混沌和计算不可约用短期预测+快速迭代应对；奈特不确定性别给概率、留冗余；反身性场合别公开你的预测。
- 把生活的一部分变确定（基本盘），腾出精力去追求另一部分的不确定（探索）。
- 定期制造低成本的不确定性：试探世界，而不是在自家后院玩火。

---

## 全文

> 以下为课程转录全文，已做去噪与语义分段；**加粗+底纹**处为核心论点与金句。

你好，我是万维钢，欢迎来到现代思维工具课。今天是基本世界观的第五讲：**不确定性是意义的燃料。**

我们这个宇宙最有意思的一个设定——也可以说是让宇宙有意思的**唯一**设定——是它具有不确定性。这个认知将是你世界观的一块关键基石。

人们常常厌恶不确定性。设想你是个聪明又尽责的人，年纪轻轻就有了一个很好的世界模型，你知道什么是对什么是错，生活原本是干啥都有理、从从容容游刃有余。可是随着人到中年，你身上的责任越来越大，负担越来越多，竟有一种越来越被动之感。可能有一天父亲生病了，又有一天孩子在学校出了状况，没过两天家里水管漏了，这些还没处理好，同事又闯了个大祸对你甩锅。你自己没做错任何事情，各种麻烦自动就来找你。你感叹"真不知道明天和意外哪个先来"，恨不得生活像机器一样稳定运转才好。"我不求大富大贵，只想過个平淡生活、岁月静好，难道也算奢求吗？"

**世界不喜欢给你静好，它充满了不确定性，而且静好不了。**咱们不讲太多技术细节，简单说，有五种不确定性是我们无论如何都避免不了的。

**第一种是混沌，也就是复杂系统的敏感性。**比如一个地区的天气未来如何演化，会对初始条件高度敏感：可能初始参数差了极小的一点点，后来的情况就从风平浪静变成大风暴。我们对初始状态的测量总会有点误差，所以你只能可靠预测一小段时间的演化，再长就乱了。再小的误差也会被迅速放大，以至于天气预报的极限就只有 14 天。

**第二种不确定性是计算不可约性，也就是算不快。**这是斯蒂芬·沃尔夫勒姆的招牌学说：有些系统看起来很简单，并不存在测量误差，而且演化规则也很简单，可你就是不能使用什么简便的方法提前算出来它演化的结果，你只能老老实实地让它一步一步演化出来。计算机科学中有个著名的图灵机停机问题，就可以看作是计算不可约性的一个特例——你甚至都无法事先判断一个算法能不能算完。

混沌和计算不可约性这两种不确定性都是数学意义上的。那你可能会说：未来其实还是确定的，我们只不过无法提前知道而已。100 多年前的科学家本来也这么想，直到他们遭遇了量子力学。

**第三种不确定性是量子随机，也就是天生摇骰子。**这是世界固有的不确定性：这个原子核会不会在下一秒衰变呢？那个电子会打到屏幕上偏左还是偏右的位置呢？**只要事情还没发生，不但你不知道，我不知道，而且大自然自己都不知道。**物理学家至今都没跟量子力学的这个不确定性和解。世界不但本质上就是不可预测的，而且其中很多事情是无缘无故发生的。

那你说，就算有这么多不确定性，事情总归有个概率吧？只要我们知道概率大小，就可以管理不确定性，比如买个保险什么的，不照样岁月静好吗？可有时候概率也是奢望。

**第四种是模型的不确定性，也叫奈特不确定性**，出自经济学家弗兰克·奈特。比如今天市场上一部头部手机品牌，你可以预测它五年后继续领先竞争对手的概率；可是如果到时候出现一种完全不同的通信设备，使得人们干脆就不再使用手机，整个游戏都变了，那你的预测也就没意义了。**那个东西都不在你的模型里，有何谈概率呢？只有时间穿越者能告诉你那样的未来。**

**而第五种不确定性能让穿越者的预测也失效，这就是博弈不确定性，也叫反身性。**这是金融投机大师乔治·索罗斯喜欢的学说，意思是**你一旦说出未来就会改变未来**。比如有人穿越回来告诉我们 2030 年 9 月 6 号将发生全球股市大崩盘，股民一听肯定不会等到那一天才卖出股票，他们会提前行动，而他们的提前行动会改变崩盘何时、甚至是否发生。

因为这五种不确定性的存在，我非常确定的是：**这个世界在方方面面几乎都是不可预测的。**当然不是说万事只能听天由命，毕竟日常生活大体上还是稳定的、是可学习的，不然我们还研究什么模型呢？但人们低估了不确定性的影响。

比如我们前面讲了世界上的财富呈重尾分布，极少数人的拥有远超其他人；可是人的智商明明是正态分布的，大家相差都不大。那么那些少数人凭什么就能加入乘法世界、就能收获正反馈、就能聚集起那么多财富呢？他们的自传都说是靠能力，但**他们其实是靠运气**。经济学家罗伯特·弗兰克有本书叫《成功与运气》，早就说过这个道理。

我看到一个更直接的证明，是 2018 年意大利科学家的一个模拟实验：研究者用正态分布生成一大群人，这些人能力有差别但不是特别极端，然后让每个人都奋斗 40 年。这些人在职业生涯中都被随机安排了一些幸运和不幸的事件：比如有的人找到好工作、创业一下就成功了，有的人正好赶上大环境不好失业了，下决心创业却因为偶然的原因失败了等等。模拟的结果和现实世界高度相似：他们的最终财富呈现重尾分布。那么你猜实验中那些最富有的人，是不是一开始设定中最有能力的人呢？**不是。他们也比较聪明，但并不是最聪明的一批人。他们是最幸运的一批人——他们遭遇的幸运事件最多，不幸事件最少。**可能有个比马云更聪明的人，在那几年也看到了电子商务是个大机会，也有办法组织创业，但是他身体不好，难以支撑高强度工作。**运气比能力重要得多。**

这项研究甚至认为，为了提高新科学发现的产出率，科研经费根本就不应该按照所谓备选人能力分配、其中给少数那几个顶尖科学家，正确做法是对一定水平之上的所有科学家随机或者平均分配，让大家充分发挥运气的作用。而有些国家已经在这么做了：德国、瑞士和新西兰就尝试了抽签发放科研经费。

你要是还认为能力更重要，那我要说的是：**能力本身也是一种运气。**你的智商是父母基因随机组合的产物，你天生对这门而不是那门技艺感兴趣，而这个时代恰好能让这门技艺赚到钱；你恰好遇到了一本影响你成长的书，还能读进去，还能有所发挥——这难道不都是基因、环境和经历这一系列运气促成的吗？你所谓的平淡生活，也是无数个偶然机遇共同作用的结果。有很多比你更有能力的人没有你这样的优越条件。**你感到这个是寻常、那个是意外，是因为你的视野就局限在这里。如果你把模型扩大一点，你会知道：意外就是寻常。**

面对不确定性，人们有两种消极态度和一种积极态度。

**第一种消极态度是渴望确定。**"可能我年轻时也追求过新鲜和刺激，但现在的我早已成家立业，只想上班拿工资、下班抱孩子，不必有新的挑战，不愿再学什么新技术，我就这么稳当当地活下去就行了。在发展和稳定之间，我坚决选择稳定。"如果你觉得这种态度很荒唐，那是你没经历过命运浮沉那种失控感。兵荒马乱的时代，人们为了哪怕一点确定性，会纵容强权、投靠迷信。**越缺乏控制感，就越需要哪怕是不好的、甚至虚假的确定性来补偿**，你希望最好有个强人或者神灵来替你掌舵，这叫**补偿性控制**。经历过混乱的人们会如此渴望秩序，以至于对一切可能让国家乱的事物都充满敌意：对他们来说自由和民主都是脏话，甚至认为凡事只要有争议就是不对，哪怕当前秩序对他们不利，他们也本能地维护那个秩序。而这就给野心家提供了收割权力和信仰的渠道：**你只需要先夸大世界的不确定性，再承诺提供确定感——外边的世界充满危险，你们必须跟我走才能有安全和稳定。**

罗伯特·格林的《权力的 48 条法则》那本书里列举了好几条利用不确定性弄权的方法，包括：偶尔做出乎意料的事，可以营造悬念和不可预测感，让人对你保持敬畏；利用人们对信仰的追求打造自己的教徒式追随者，让人们为了某个幻想给你卖命；还有要拼命守护自己的声望。总而言之，就是**谁提供确定感，谁就得到权力；谁渴望确定感，谁就把权力让给别人。贩卖焦虑算得了什么，贩卖确定感的才是朝廷大鳄。**我以前对那些仆伏在强权之下的人们怒其不争，现在却是同情。格林说，**对确定性的渴求是心灵面临的最大疾病。**

**第二种消极态度略好一点**：既然无法避免，还不如坦然接受不确定性。有个说法叫"允许一切发生"，就是这个意思。背后的理论可能是某种辩证法——祸兮福所倚、福兮祸所伏，也许坏事就是好事呢。这个态度的高级版本叫"凡事发生皆有利于我"，乃至于"一切都是最好的安排"。有些人真信这些，但在我看来，**这等于是把主动性拱手相让：什么都是最好的安排，那岂不是别人怎么安排你都行？**

**积极的态度是合理分析不同类型的不确定性：坏的我想办法管理，好的我积极拥抱。**塔勒布是此中高手：他先用《黑天鹅》艺术告诉世人最坏的不确定性能有多坏，又用《反脆弱》说明有的不确定性是好的。不确定性的好坏跟你那个收益函数的形状有关，这里有很好的思维工具，包括如何管理，咱们后面慢慢讲。

现在你只需有个更积极的直觉，也就是：**抗拒不确定性，不如接受不确定性；接受不确定性，不如拥抱不确定性；拥抱不确定性，不如制造不确定性。**

但是 GPT 还有个更深刻的洞察。有一次我问 GPT：你对我们人类有没有什么洞察，是我们人类自己都没意识到的？它提到了不确定性。它说：**人类的大脑天生渴望确定性，但如果人类真的得到了绝对的确定性——比如未来完全可预测，而且每个人的命运都提前揭晓——你们又会感到难以忍受的乏味和窒息。人类真正喜欢的并不是确定性本身，而是追求确定性的过程带来的精神愉悦与兴奋。**

你想想是不是这样？就连那些一门心思要进体制内拿铁饭碗的人，也不是喜欢一成不变的生活：他们也想去旅游、去发展有点冒险的兴趣爱好。他们是想把生活的一部分变得确定，以便腾出手来去追求另一部分的不确定。**我们最喜欢的是把不确定变成确定的那个瞬间。**我们喜欢听故事，我们用叙事组织生活，就是因为它们是由一个个"把不确定变成确定"的瞬间组成的。

如此说来，**不确定性其实是我们加工意义的燃料**。哪怕它这一次的不确定性的坏的，它也给叙事提供了意义。正因为世界还有不确定性，我们才被驱动去探索、去抗争、去生活、去思考，我们才会生机勃勃。把不确定性看作意义的燃料，有了这个世界观，你的人生观就豁然开朗了。

燃料太多吃不消，太少不够看，所以你希望每次面对恰到好处的不确定性，**最好是一大块熟悉加一小块意外**。燃料是一种客观的东西，所以不确定性原本不该是个情绪问题，而是信息问题。燃料有热值，所以你解决的不确定性越大，回报就越高，正所谓风浪越大鱼越贵。燃料可以先存着不烧，所以你希望可供利用的不确定性越多越好——**那么你的行动就要为自己打开新的可能性，而不是消灭可能性。**

下一讲我们进入第六个基本世界观：你的三个自我。
`,Dh=`# 007丨内核：你的三个「自我」

## 讲什么

基本世界观第六讲（收官）：用现代神经科学 + 佛学 + AI 类比的交叉视角，给出一个简单好用的工作模型——**人有三个自我：进程自我、界面自我、内核自我**。

## 解决什么真问题

"我怎么能变得更好？"多数答案停留在成长型思维、学新技能这个层面。但为什么懂了那么多道理还是过不好？因为你看的只是运行日志和换皮肤，**真正决定命运的是藏得最深、不说话的那套参数**。

## 核心论点

| 自我 | 是什么 | AI 类比 |
|---|---|---|
| **进程自我** | 你时刻直观感觉到的"我"，从输入到输出的整条在线运算链 | 大模型单次运行的输入、思考和输出 |
| **界面自我** | 叙事中更稳定、可控、能被别人观察的角色：性格标签、人设、自传 | 系统提示词和角色设定 |
| **内核自我** | 背后生成感知的那套庞大的、无意识的概率分布和先验假设；**不可自我感知** | 模型的结构和参数（权重） |

- 进程自我是个**被动的存在**：实验证明在大脑做出决定几百毫秒后你才"意识到"自己做了决定——它只是新闻发言人，不是决策者。这就是所谓"五蕴皆空"。
- 提示词写得好，平庸的模型也能表现得像专家；**但那只是激活，不是能力提升**——一遇高压环境，人设就会崩塌，局面终究交给内核自我。
- **升级内核只有两个杠杆：预训练的语料（你的信息输入）和强化学习的奖励函数（谁给你的行为打分）。**
- 面对预测误差（被现实打脸），三个选择：改注意力（别看了）、改行为（绕着走）、**改模型（承认原来我是错的）**——最后一个最难，但最值钱。

## 关键例证 / 金句

- **"你就是你这台机器一般会如何预测世界和如何更新自己的那套默认代码。"**
- 内核自我 ≈ 佛学的阿赖耶识，成分是习气和业力。
- "绝大多数人，在一生的绝大多数时间，都只不过是对刺激做出反应和改提示词而已。"
- 近朱者赤近墨者黑，翻译成现代语言就是**信息输入训练神经网络参数**。
- **"强化什么，你就会成为什么。"**
- 人比现有 AI 高出一层：**人可以自行选择自己的训练样本和奖励函数**——这是人的终极自由。
- "当心你的思想，它们会成为语言……当心你的性格，它会成为你的命运。"

## 如何应用

- 想"自省到内核"，不要解释要训练：发现固有模式（别人一质疑就反驳、一接任务就拖延），下次发作时做**反向动作**。
- 审计你的语料：每天摄入的信息是情绪化、碎片化、极端化的，你的参数就会被调成那样。
- 审计你的奖励函数：伴侣、朋友圈、公司文化都在书写你的奖励函数——要小心选择他们。奖励函数得**明确具体**才好用。
- 被现实打脸时，把它当作内核自我更新的黄金时机。

---

## 全文

> 以下为课程转录全文，已做去噪与语义分段；**加粗+底纹**处为核心论点与金句。

你好，我是万维钢，欢迎来到现代思维工具课。今天是基本世界观的第六讲，题目是**你的三个自我**。

现代世界的基本设定也许不可尽数，但最终都会归结到人。我们想了解人，是因为我们渴望成为更好的人。当你因为一时冲动而后悔的时候，当你感到能力不足的时候，当你羡慕别人那种更高境界的时候，你都在思考同一个问题：我怎么能变得更好呢？

你肯定可以变。无数的书都告诉你，人脑哪怕到了中老年都还有可塑性，你总可以学习新技能新知识，为此你需要有成长思维模式等等。但我这里想说一点更深的洞察。好消息是我们生活在 AI 高速进步的时代，研究 AI 能让我们更加深刻地认识自己——因为**人脑本质上也是一个神经网络**，如果 AI 的神经网络有这么个性质，人脑很可能也有。

当代神经科学家和哲学家最关心的问题是：意识到底是什么？自我是怎么回事？可以有人工的意识吗？他们把大脑和 AI 类比有很多收获，我们在精英日课专栏里也讲过很多。我自己跟 GPT 不断讨论这些问题也有所得。我们把现代学者的理论和古代先贤的看法摊在一起，聊出一个相对简单、特别好用的工作模型，也就是**人有三个自我：进程自我、界面自我和内核自我**。

**进程自我，就是你时时刻刻直观感觉到的那个"我"。**此刻是我在阅读，前方有障碍物，走过去要小心一点别碰到；我在这里，手机在我手里，我在思考，别人在喧哗。进程自我区分了"我"和"非我"，它是你在这个世界上连续存在的那个主观感觉。你可能觉得这就是最真实的我，但在哲学家看来，这个"我"只不过是个人为创造的方便概念：我是一堆原子，桌子也是一堆原子，为了把这些原子分开叙述，我们才创造了"我"和"桌子"这两个概念。**进程自我是大脑维持"这里有个主体"的那套在线计算**，它不只是你的语言和行为，还包括从输入到输出之间的整条运算链。

我们说这个宇宙的第一性原理是叙事，人的意识来自于叙事，那么**进程自我就是你每次叙事临时出现的角色**。这个角色的存在感很不稳定：当你全神贯注打游戏的时候，你会忘记"我"的存在。但它的确时刻都在运行：比如面对一个什么刺激，你心率上升、呼吸变快、语气变了，那么不管你愿不愿意承认，你的进程自我正在呈现生气。佛学中的五蕴——色受想行识——大约可以看成是进程自我的细分模块，也就是感觉输入、情绪评估、概念加工、意向和行动觉知。

这些念头让你生机勃勃，但是你注意到没有，**进程自我其实是个被动的存在**。科学家用多个实验证明：在人意识到自己的一个决定之前，大脑其实已经做出决定了，中间有几百毫秒的延迟。换句话说，**进程自我只是个新闻发言人，而不是实际决策者。它就像是系统运行时的日志——只记录，不控制。**这就是所谓五蕴皆空。有时候你想到自己刚才那句话是不是说重了、我为什么又拖延了、我今天有点焦虑等，你以为这就算反思，其实只不过是查看运行日志而已，还远没碰到决定长期命运的东西。

**界面自我，则是你叙事中更稳定、更可控并且能被别人观察和认可的角色。**简单说就是你的性格标签、人设、自传和心情叙事。界面自我很接近哲学家丹尼尔·丹尼特说的"叙事的重心"：他说大脑里并没有一个小人坐在控制室里指挥你的手脚，你想像中那个野心勃勃的自我，只是大脑为了讲通一个故事而虚构出来的主角，是你人生叙事的重心。

界面自我跟进程自我的区别在于它是个连续的故事：我今天早上起床去上班，我取得重要成果，我将会升职加薪。界面自我让你和别人迅速知道你是谁。比如"我社恐，所以今晚聚会就不去了""我是个好家长，我很关心孩子的学业""我从小就在努力为这一天做准备""最近的我有点迷茫，但我必须坚强"。你在朋友圈发的小作文，你在面试时的自我介绍，你跟朋友吐槽说"我就是这样的人"，这些都是界面自我。

界面自我具有一定的因果力，它可以约束自我：可能你平时内向，但如果你要求自己"我今天就要扮演一个社牛角色"，你就可以表现得很外向。但**界面自我仍然是变量而不是常量**：比如你在老板面前是个唯唯诺诺的下属，转头面对餐厅服务员就变成了一个不耐烦的顾客，回到家看见孩子你又变成了一个慈爱但啰嗦的父亲。请问哪个才是真正的你呢？似乎都是，其实都不是。现代心理学认为人的性格并不是固定的，会受到具体情境的强烈影响。你扮演的那些角色，只是你在不同社交情境下调用的不同皮肤——或者说接口。**界面自我只是你放在前端的用户界面而已，换个应用场景，你的界面马上可以改。**但你还是那个你。有时候你跟人吵了一架，事后连你自己都有点惊讶：我平时挺温和的，怎么会说出那么难听话，那个人是我吗？界面自我不是真正的我。

如果进程自我和界面自我都是生成的，那到底是谁在背后负责生成呢？也许那才是真正的你。我们把他称为**内核自我**。

我大胆猜想：**人能感觉到的只有进程自我和界面自我，内核自我是不可自我感知的——因为它就是那个在背后生成感知的东西。**我们前面提到神经科学家卡尔·弗里斯顿的自由能原理，说大脑是一台预测机器；认知科学家安迪·克拉克有个相似的理论叫"预测加工"，说大脑根据过去的经验对世界构建了一个预测模型。你在环境中跟各种事物互动，都是先根据自己的预测去观察的行动，然后看看行动的结果代表预测正确还是错误，如果预测错误就可以修改模型。比如你推开家门，预测灯的开关在右手边，一摸空了，于是去左边找，这就是在更新模型。**到底是谁在预测呢？就是你的内核自我。**

面前出了这么个状况，你为什么预测局面将会往这个方向而不是那个方向转变呢？**内核自我是一套庞大的、复杂的、甚至是无意识的概率分布和先验假设。**为什么别人听说那个消息觉得是机会，你却觉得是骗局？因为你的先验假设不同。为什么有人遇到挫折是战斗或逃跑反应，有人却是习得性无助？因为底层的反应模式不同。这些东西不随你今天的心情而变，也不随你是在老板还是在家人面前而变。**内核自我是你的出厂设置加上历史数据的总和。**虽然不是绝对的常量，但也是变量——它藏得最深，平时不说话，但它决定了你所有的直觉、冲动和潜意识判断。

《金刚经》和现代哲学都认为，并没有一个单一的、恒定的实体叫"我"。但如果非要找一个最接近"真我"的，那就是**内核自我这套算法和参数。你是谁？从根本上说，你就是你这台机器一般会如何预测世界、和如何更新自己的那套默认代码。**内核自我是不容易改、却持续影响你行为倾向的模型参数和更新规则。也许内核自我就是佛学说的阿赖耶识，它的成分是习气和业力。

咱们跟 AI 做一番类比，你就更容易理解了。**进程自我——也就是你当下的念头流——就相当于大语言模型在当前这次运行中的输入、思考和输出**：你给 ChatGPT 输入一句话，它在内部层层传播、算注意力、采样 token，最后回复你，这一整条流就是进程自我。**界面自我——也就是你应对情境的面具——则相当于是模型的系统提示词和角色设定**：你让 GPT 扮演一个比如说毒舌投资人，它会照办，但你这个指令不会改变它自身。**内核自我则是模型的结构和参数，或者叫权重**。当前主流大模型一旦训练好发布了，权重就冻结了，所以这才是模型的"真我"。

如果你是一个 AI，那么当你在外界刺激之下做出反应的时候，你改变的只是进程自我；当你说"等会我要去领领导，得稳重点"的时候，你是在给界面自我临时写提示词。有时候提示词写得好，平庸的模型也能表现得像个专家，**但那只是激活，不是能力提升——因为一旦遇到高压环境，人设就会崩塌，把局面终究交给内核自我。**绝大多数人在一生的绝大多数时间，都只不过是对刺激做出反应和改提示词而已。有时候为了维护人设，你反而会压抑真实过程，让内核自我变得更僵硬：明明可以承认自己不懂，可你非得假装懂，那怎么能更新模型呢？

**真正的成长必须改写模型参数。**那该怎么升级内核自我呢？我们可以从 AI 模型训练中获得启示。模型的结构是先天设定——就如同人不能长两个脑袋一样——所以咱们单论参数。人明显比现在的 AI 强的一个地方，就是我们的参数是活的，可以在生活中持续训练改变。但我们的训练方法跟 AI 差不多，因为毕竟都是神经网络。你不太可能听完一篇文章就瞬间变成一个新人，参数都是肉长的，得慢慢调。**微调参数的杠杆有两个：一个是预训练的语料，一个是强化学习的奖励函数。**

**语料是你训练的样本**，说白了就是你从小到大看和听的故事、模仿的行为和加入的群体。短视频训练你对什么上瘾，公众号和书训练你对什么敏感，而你身边的正常人是什么样，训练你的价值观。所谓近朱者赤近墨者黑，翻译成现代语言就是**信息输入训练神经网络参数**。如果你每天摄入的信息都是情绪化的、碎片的和极端的，你就会变得急躁、浅薄、二极管思维——你的大脑参数被调整成适应那种信息的模式。工程师会说：你的神经网络过拟合了垃圾数据。

**奖励函数就是给你的行为提供反馈的那个程机制**，说白了就是什么东西在给你做的事情打分。如果你的奖励函数是"老板看了要夸我"，你就会本能地往报告里塞漂亮话，你会淡化问题；而如果奖励函数是"帮团队少踩一个坑"，你就会愿意把难看的数字摊开，把失误写清楚。**假以时日，这两个奖励函数会把你训练成完全不同的两种人。**你的伴侣、你的朋友圈、你所在公司的文化，都在书写你的奖励函数，要小心选择他们。一个洞见是**奖励函数得明确具体才好用**：什么叫写得好呢？什么叫健康的生活呢？泛泛而谈没意义。目标必须具体才可执行——是语文老师说的那种好叫写得好，还是放在网上引发读者热议转发才叫写得好？**强化什么，你就会成为什么。**

而在所有那些之前，你要让自己的神经网络处于可更新状态才好。在现实中受挫了，你是直接来一句"这个世界不公平"了，还是修改自己的模型呢？自由能原理认为，当一个人面对预测误差——所谓被现实打脸的时候，他有三个选择来最小化惊讶：**第一个最偷懒的做法是改注意力**，干脆别看打脸的证据；**第二个稍好一点是改行为**，以后绕过类似场景；**第三个最难但最值钱的是改模型**：承认"原来我是错的"，然后重写参数。**被现实打脸，本应该是内核自我更新的黄金时机。**

说到这里，人毕竟比现有的 AI 高了一层：**人可以自行选择自己的训练样本和奖励函数，而 AI 不可以。**我估计就算有一天 AI 想要自己选，我们也不会允许它选，那太危险了。所以**能选择成为一个什么人，可以说是人的终极自由**。这是最根本的元认知：你永远都可以抬头看一眼——是谁在训练我？我为什么要往那个方向变呢？凭什么这个就是好的，那个就是不好的呢？

中国人说"吾日三省吾身"，还说"苟日新，日日新，又日新"，现在听起来都很有极客精神——这不就是要随时接受反馈、持续交付人生的新版本吗？西方也有段语值得反复回味：当心你的思想，它们会成为语言；当心你的语言，它们会成为行动；当心你的行动，它们会成为习惯；当心你的习惯，它们会成为性格；当心你的性格，它会成为你的命运。以我们这一讲的框架来说：**思想、语言和行动就是进程自我的在线流动，习惯和性格是你展示出来的界面自我，它们都在默默改写内核自我的参数，凝聚业力。**

有了这些基本认识，我们就可以学习各种思维工具了。以上就是今天的全部内容，至此基本世界观都讲完了。从下一讲开始，咱们正式进入第一个思维工具模块：自我成长的战略。
`,jh=`# 008丨能耐寻求定理：君子不器

## 讲什么

成长战略模块第一个思维工具：**能耐寻求定理（Power-Seeking Theorem）**——一个 2021 年才由 AI 研究者证明的新理论，却暗合了孔子说的"君子不器"。

## 解决什么真问题

人很多时候处于被驱使的状态：打工人白天看老板脸色、晚上看老婆脸色。更隐蔽的驱使者是贫困、欲望和执念——它们让你的认知带宽窄化（隧道效应），把你变成"器"。怎么破？

## 核心论点

- 成为"器"的本质是：**瞄准一个单独的目标去优化，而牺牲了其他维度**。你眼中只有这个目标函数，所以你就是目标的奴隶。
- 君子和小人的真正区别不是目标多少，而是**主动和被动**：君子可以随时跳出那个叙事，**他必须高于任何目标函数**。
- 金钱、学术声望、社会地位、好心情这些好东西的共同特点：**你越直接追求它，就越难以得到它**（obliquity/迂回定律）。它们是副产品。
- **能耐寻求定理**：当奖励不确定时，智能体的最优策略是**争取在未来拥有更多的可能性（选项）**。选项只有权益没有义务，可用可不用。
- 赋能（empowerment）是生物体最原始的内驱力——**即使不给外部奖励，生物体仍然倾向于有所行动**。
- **君子不器，就是奖励不确定环境中的最佳成长策略：不去优化某个单一的目标函数，而是增加选项。**

## 关键例证 / 金句

- 《稀缺》：让低收入者想象修车要花一大笔钱，智商测验当场下降 13 分——**稀缺感会让认知带宽窄化**。
- 马斯克："永远不要把自己依附于某个人、某个地方、某家公司或某个项目。你只能依附于一项使命、一种召唤、一个目的。"
- 工具人说"我完成了 KPI"，君子说"**我提升了把新问题转化为可解问题的能力**"。
- 庄子宁做泥里自由打滚的活龟、陶渊明不为五斗米折腰、李白安能摧眉折腰事权贵——**他们不是想做道德楷模，而是凭直觉感悟到了能耐寻求定理**。
- 维克多·弗兰克尔在纳粹集中营里都能找到精神自由——你怎么就不能给自己增加选项呢？

## 如何应用

- 决策时多考虑一个选项，不陷入既定式的路径依赖。
- 身份认同上多一个角色，不被固定角色绑架。
- 学习学的不只是某个具体工具，更是提升跨任务的理解力，让能力可迁移。
- 社会关系中保持独立性，避免完全依附于单点权力源。
- 判断一笔收入：能让你的选项变多，就值得争取；**代价是受制于人、自由减少，那它不是赋能，而是失能**。

---

## 全文

> 以下为课程转录全文，已做去噪与语义分段；**加粗+底纹**处为核心论点与金句。

你好，我是万维钢，欢迎来到现代思维工具课。今天我们正式进入思维工具的第一模块：成长战略。这一讲要递给你的思维工具叫做**能耐寻求定理**。这是一个很新的理论，是计算机科学家研究 AI 智能体的时候发现的。我感觉这个定理也能用在人身上，而且是人生最基础、也是最决定性的道理——它暗合了咱们中国人说的**君子不器**。

一个很难受也很难看的现实是，人们很多时候是在被驱使的状态：打工人白天看老板脸色、晚上看老婆脸色，学生白天听老师的、晚上听家长的，别人让干啥你就必须干啥，别人不说你连一点自由度都没有。这日子能过吗？**被驱使会导致慢性压力，长期慢性压力会让皮质醇激素水平上升，于是触发炎症反应，结果健康会跟精神一起恶化。**

在我看来，君子不器的精义就是不要被驱使，不要去做个器具。器具是别人可以随便拿来拿去用的，君子不能这样。这也是康德道德哲学的核心思想，而且康德说得更直白也更绝对：**人只能是目的，而不能只是手段。**说白了就是不要做工具人。不管是对自己还是对别人，人就是人，不能把人给物化。

可我们每天就是会被各种力量驱使，就是很被动，怎么做才是君子不器呢？我们应该追求什么呢？孔子给的是主张，康德给的是原则，**能耐寻求定理则给你方法**。

驱使人的不一定非得是某个人或者某个组织，它更可能是一些别的东西，比如**贫困**。贫困不只是经济问题，而且是认知问题：一个长期处于贫困状态的人，遇到什么事都会首先提醒自己贫困——我就这么点钱怎么用呢？我下一笔钱什么时候才能到手呢？——以至于再也想不了别的。用塞德希尔·穆来纳森和埃尔德·沙菲尔的《稀缺》那本书的说法，这叫**隧道效应**：就如同进入一个隧道，只能看见眼前的光亮，周围的东西都看不见。**稀缺感会让认知带宽窄化。**有人在美国和印度都做过一个实验，让人在实验室里想象处于稀缺状态——比如说汽车突然坏了，修车需要花一大笔钱——对生活富裕的人来说这不是个事，但是对于低收入者来说，这个状态会让他们在智商测验中**当场下降 13 分**。只盯着这一件事，来不及想别的，以至于都被降智，这不就是被驱使吗？

再看那些吸毒、赌博、酗酒的人，不也是认栽吗？他们只能看见一样东西。还有长期饥饿的人看见什么都能联想到食物。这些人都是被自己的某种欲望所奴役。那你说贫困和饥饿都是不得已，人家也不想如此啊。没错，我这里不是道德谴责，我只是说这种状态很不好。如果让康德说，就是他们都把自己当成了工具，用中国话说这就是"小人役于物"。

我们再进一步：那些为了升职和奖金而拼命工作不顾健康的人，那些以爱的名义舍弃自己的生活、全身心只抓孩子学习的人，那些眼中只能看见权力、只知道有领导不知道有原则的人，其实也都是器。以我之见，**成为器的本质就是瞄准一个单独的目标去优化，而牺牲了其他维度。因为你眼中只有这个目标函数，所以你就是目标的奴隶。**

其实每个人都曾经或多或少地在生命的某些阶段陷入过器的状态：因为贫困也好，因为爱情也罢，又或者是为了一场考试、一个项目——终为一物，心中只剩一人——其实都是有害的。你的认知带宽越来越窄，你的敏感度大大下降，你陷入隧道，你没有多样的兴趣和丰富的角色，你一点都不繁荣。**君子不器，实在是健全人格的最低限度要求。**

那你说人生总要有所追求，我们也不能整天就只是修身养性，更不能躺平啊。我们总要对社会有所贡献才好。器的问题是不是在于只有一个目标函数，我们多几个目标是不是就算君子不器了呢？不是的。**一个目标都能把人累成这样，多个目标岂不是更难受？君子和小人的真正区别是主动和被动。**君子在每个特定时刻完全可以盯着一个目标，但他是那个目标的主人而不是奴隶，他可以随时跳出那个叙事。比如一个役于权力的人会把上级的意志看得比天都高——你让我干啥我就干啥；而一个运用权力的人面对同样的命令则是：你说的符合我的价值观，我就办；你说的不对，我宁可辞职，逼急了我还可能造反。**君子不器，就是你必须高于任何目标函数。**

马斯克有句话说的好："**永远不要把自己依附于某个人、某个地方、某家公司或某个项目。你只能依附于一项使命、一种召唤、一个目的。**"目标函数必须为目的服务。使命、召唤和目的属于你自己，是你人生意义的一部分，你乐在其中。早就有研究发现，那些活着有目的的人会活得更健康也更长寿。唯一向事业艰苦努力，并不等于成为工具人，这里有微妙但是极为重要的区别。

可能有人说，我这辈子就想多挣钱，为此哪怕当个工具人我也无所谓，这行不行呢？也不行。**世人喜欢的很多东西，包括金钱，往往不是直接追求就能得到的，它更像是你做别的事业的副产品。**如果一个人眼里只有钱，他其实赚不到很多钱——你想想，谁会愿意跟一个斤斤计较、做什么都考虑钱的人合作呢？他能创造多大价值呢？再比如学术声望：学历可以用刷题得到，但学问不能。学术声望不是考试考出来的，那些拼命准备考试的人只不过是想冒充一个名额挤进人家的圈子而已。还有社会地位：人们穿戴奢侈品、搞炫耀式消费，都是想发出地位信号，可是真正有地位的人往往不屑于使用这些外部符号，甚至认为过度炫耀是缺乏自信的表现。还有人追求好心情，把快乐当成执念，说"今天我过生日，谁让我一时不痛快，我就让他一辈子不痛快"——殊不知刻意营造的好心情是虚假的。

**这些好东西的特点是：你越直接追求它，你就越难以得到它；你放下它去做别的，它反而会自动来找你。**中国话叫"曲则全，枉则直"；英文也有个说法叫 obliquity（迂回定律），意思都是**直线前进往往走不远，你必须走间接路线去实现目标**。这是因为复杂系统里的相互作用往往是不直接和不确定的，你只能安心探索，回报才会在你不经意的地方出现。如果每发一篇论文固定奖励 1 万块钱，科研工作者就会发一大堆垃圾论文，诺贝尔奖肯定不是这么激励出来的。

明知不一定有回报，为什么有的人还要坚持探索呢？那一定是乐在其中的人，是有内在动机的人，是把这个事业视为自己的使命的人——是君子。

好，现在问题来了：君子也不能只为了乐趣工作，你总要严肃对待自己的事业才行，你肯定也有强烈的竞争意识。那如果君子不争副产品，你到底应该争什么呢？这就是**能耐寻求定理**登场的时刻。

这是俄勒冈州立大学的计算机科学家亚历山大·特纳在 2021 年发表的一篇论文中的理论。特纳的研究说：一个 AI 智能体要通过获得奖励进行强化学习，它面对复杂环境的时候，如果不知道奖励会出现在哪里，应该采用什么策略呢？答案是**寻求 power**。这个词一般翻译成"权力"，但这里不是那种政治上的上下级关系，我觉得叫"能耐"可能更准确一些。**能耐是你对环境的影响力，特别是你所拥有的选项。**

**能耐寻求定理说：作为智能体，你要尽量争取自己在未来拥有更多的可能性，那么你就能在绝大多数情况下把奖励最大化。**比如面前有两条路，左边是个死胡同，右边通向多个地点。那么虽然你不知道奖励在左边还是右边，你也应该向右，因为你会有更多选项。选项的好处是可用可不用：这边有奖励你就可以拿上，没有奖励你可以放过，**你只有权益而没有义务**。能耐寻求定理的意思就是：如果此刻你没看见具体的奖励在哪，那你就往能增加选项的方向走。

咱们想想，人不也是这样吗？说一个人有能耐——比如一项技能、拥有某种资源、能让别人信任自己——这些本身都不会立即带来奖励，但都是在增加选项。你能做别人做不了的事，这就是能耐。**最妙的是，能耐是可以直接寻求的。**

其实寻求能耐是人的本性。我们经常说要"赋能"，而信息论就有个概念就叫赋能（empowerment），意思是**增加未来状态的信道容量**。说白了就是：如果这个动作能让你到达一个地方，那个地方通向更多不同的未来，这个动作就是赋能。赋能不是为了取得什么奖励而去做的具体任务，所以你不是被驱使。

2014 年英国赫特福德郡大学的 AI 研究者克里斯托夫·萨尔格提出**行为赋能假说**，说**赋能是生物体最原始的内驱力**：即使不给什么外部奖励，生物体仍然会倾向于有所行动，因为它要给自己赋能，它要最大化自己对未来的影响力和选择权。就算此刻并不饿，细菌也会朝资源更丰富的地方移动，因为那里取得食物的选项更多；如果当前的日子不错，动物会主动探索新环境，因为可能带来更多的交配机会。**为什么人向往自由？因为自由就是更多的选择权，追求自由就是赋能。**

工具人说"我完成了 KPI"，君子说"**我提升了把新问题转化为可解问题的能力**"。同样一个事实，前者的叙事是被驱使，后者的叙事是赋能。**君子不器，就是你不是在做任务，你是在完善自我。**特定的工具只能做特定的事，而人却可以随时扩展自己使用各种工具的能力和选项——这就叫"君子性非异也，善假于物也"。哪怕眼前没有奖励，我们也要主动探索，因为我们要赋能。

君子不是不优化，也不是不重视目标函数，而是把目标函数当做手段，自己专注于建立能扩展能力、增加选项的系统。君子不器不是反对专业，而是反对把专业当做身份认同的执念。**学习新知识是赋能，发展新爱好是赋能，进入新领域是赋能，建立良好社会关系是赋能，提升德行也是赋能**——这些都能给你增加选项。很多事物是副产品，但只要抓住"增加选项"这个根本，赋能就是可以直接追求的。

**能耐寻求定理说：君子不器，是奖励不确定环境中的最佳成长策略。你不要去优化某个单一的目标函数，你要的是增加选项。**

可能有人说：我现在就是很贫困啊，我就是个打工的，我必须听人指挥，我能怎么办呢？我对此的回答是：《活出生命的意义》的作者维克多·弗兰克尔在纳粹集中营里都能找到精神自由，你怎么就不能给自己增加选项呢？

理解了能耐寻求定理，你完全可以像下面这样做：**第一，在决策的时候多考虑一个选项**，而不是陷入既定式的路径依赖；**第二，在身份认同上多一个角色**，而不被固定角色绑架；**第三，学习学的不只是某个具体工具，更是提升跨任务的理解力**，让能力可迁移；**第四，在社会关系中保持独立性**，避免完全依附于单点权力源；最后，**拓展精神空间**，以期在不确定性中保持创造性。

就算是赚钱，如果这笔收入能让你的选项变多，那就值得争取；**但如果拿这笔钱的代价是让你受制于人、自由减少，那它不是赋能，而是失能。**

庄子说，我宁可做个在泥巴里自由打滚的活龟，也不做庙堂上的死乌龟；陶渊明说不为五斗米折腰；李白说安能摧眉折腰事权贵。其实他们不是想做道德楷模，而是凭直觉感悟到了能耐寻求定理。

下一讲的思维工具叫做供给侧心态。
`,Mh=`# 009丨供给侧心态：怎样在正和的世界合作（以及竞争）

## 讲什么

成长战略模块第二个思维工具：**供给侧心态**——不问"我能得到什么"，问"我能提供什么"。

## 解决什么真问题

现代人最大的精神内耗是把零和当现实、把正和当理想：人们在组织里往往不是把最多精力用来创造价值，而是用来防备别人从自己身上拿走什么。**本来弱者更需要合作，可弱者最先把关系看成你死我活。**

## 核心论点

- 我们生活在一个**正和远大于零和**的世界：合作不是二阶效应，合作是底层结构的主干。人类成为最强物种不是因为最擅长杀戮，而是因为最擅长合作。
- 自由市场带来两个巨大的正和 buff：**信息的可复制性**（我得到一个主意，你并没有失去它）和**分工与网络效应**（网络每多一个参与者，价值都变高）。
- 供给侧心态的定义（GPT 硬定义）：**把自己当成一个提供可验证价值的模块，主动降低协作摩擦，嵌入到长期重复博弈且有网络效应的结构里。**三件事：价值生产、摩擦消除、网络触达。
- **现代竞争的本质不是抢夺资源，而是抢夺合作资格。**竞争不是排队，是配对。
- 声誉是在重复博弈中别人对你未来合作价值的贴现。**被需要，是比拥有更安全的状态。**

## 关键例证 / 金句

- 硅谷并购律师的观察：公司即将被并购时，老板有造福一方的形态，员工却充满防备心理——**社会地位越高的人越倾向于用正和思维打交道**。
- "胶水员工"（乔恩·利维《团队智能》）：权力不大，但通过情商、协调能力和信任网络让信息更流畅、冲突更可控的人，是团队绩效的关键。
- 挪威大数据研究：移民只要把名字改成挪威主流名字，年收入平均上涨 30%。**名字不是你的自我，名字只是你的 API 接口。改名不是否定出身，而是兼容系统。**
- **"靠谱不是性格，是一种工程能力。"**
- 一旦被贴上不可靠、爱占便宜、情绪不稳定的标签，你就会遭到社会性降级，只能去低信任、高摩擦、全是零和博弈的低端局里竞争。

## 如何应用

- 面试、婚恋、合作场景，把"我要什么"换成"我能提供什么"。
- 把协作成本显化：写成流程和清单、争取正式授权、分享经验——**把好人行为工程化**，让组织知道你是那个让系统不崩的人。
- 降低自己的协作摩擦：响应快一点、交付的东西容易验收、输出内容少耗对方脑力。
- 培养对零和博弈的反感：看到一群人抢东西时问——这东西是死的还是可以被重新设计的？我能不能让盘子变大一点？

---

## 全文

> 以下为课程转录全文，已做去噪与语义分段；**加粗+底纹**处为核心论点与金句。

你好，我是万维钢，欢迎来到现代思维工具课。今天我们讲成长战略的第二个思维工具，叫做**供给侧心态**。

我有个朋友叫刘大伟，是硅谷很好的并购律师，他给我讲了个有意思的观察：在一家公司处于即将被并购的变动时刻，老板和员工的本能反应很不同。老板往往有造福一方的形态，真心为员工着想，希望员工也能拿到并购的红利，为此会专门在合同中设置一些条款。可员工却是充满防备心理，总怀疑老板找律师整什么动作是不是要搞我。我们都很感慨：**这真是社会地位越高的人越倾向于用正和思维跟世界打交道，社会地位越低的人却越倾向于零和**——连硅谷高科技公司的人都是如此。

所谓正和就是这个事对咱俩都有好处，是双赢；而零和则是咱俩的收益之和等于零，你赢了多少就是我输了多少，你赢的都是原本应该属于我的。**现代人最大的精神内耗，就是把零和当现实、把正和当理想。**在公司、在各种组织里，人们往往不是把最多的精力用来创造价值，而是用来防备别人从自己身上拿走什么，担心自己会不会吃亏。**本来弱者更需要合作，可弱者最先把关系看成你死我活。**这不是见没见过世面的问题，这是大脑默认安装了过时的博弈模型。这一讲的工具叫供给侧心态，我希望它能带给你一个强大的阿尔法优势。

而你首先需要理解：**我们生活在一个正和远大于零和的世界。**

零和很符合人的直觉。很多读过一点进化论但没读通的人认为这个世界的底层逻辑是竞争甚至是杀戮：你看动物要生存就得吃别的生物，你要活别的生物就得死，弱肉强食，这不就是零和吗？什么合作、什么真善美，不过是建立在残酷底层之上的二阶效应，是文明人给自己画的妆。但你要是深入了解一点生物进化，你会发现**合作其实远比杀戮普遍得多**：单细胞生物变成多细胞生物、多细胞生物的共生和社会分工，这些都是一次次的合作升级。杀戮只是地球生物获取能量很窄的一种手段，大头其实是光合作用和碎屑分解。**人类之所以成为最强物种，不是因为我们最擅长杀戮，而是因为我们最擅长合作。合作不是二阶的，合作是底层结构的主干。**

我们特别注意杀戮，是因为大脑的安全模块很原始：对威胁特别敏感，对机会特别迟钝。它让你更容易记住抢夺、背叛和被坑的故事，而不是那些枯燥但持续发生的正和合作。**你本可以玩更大的游戏，却把自己关在一个假想的斗兽场里。**

古人狩猎采集种地都需要合作，现代世界则因为有自由市场而有了两个巨大的正和 buff。**一个是信息的可复制性**：你分给我一个苹果，我多了一个，你的确就得少一个，这是零和。但如果你有一个好故事或者一个好主意讲给我听，我得到了，你可并没有失去它——复制一份信息并不会让你损失那个信息。这就是为什么商品交换从根本上来说就是正和的。假设你掌握一个种植苹果的秘诀，能以比较低的成本大规模生产高质量苹果。我花 10 块钱买了你一斤苹果，这个故事跟分苹果可就不一样了：我买的不是组成苹果的那一堆原子——我把苹果吃掉，原子无非是在我体内循环一番，一个都不会少——**我买的其实是原子的排列组合方式，也就是信息**，我买的是你种出来的那个苹果的"好"。我乐意出这 10 块钱，一定是因为我认为苹果的价值高于 10 块钱，我自己拿 10 块钱可种不出一斤苹果来；而你则一定认为 10 块钱的价值高于苹果才愿意费力卖给我，因为苹果是你种的，你用一个秘诀种出了很多个苹果，每个苹果身上那个"好"都是对你那个秘诀的一次免费复制。咱俩都得到了比原来更好的处境，标准的正和。**这是经济学最底层的原理：只要交易是自愿的，它就一定是双赢，一定增加了整个社会的总财富。**

**另一个 buff 是分工和网络效应**：你善于玩木头，我善于打铁，咱俩单干的价值都有限，但是合作就能创造像锤子这样的高级东西。这是乘法关系，价值立即提升。专业带来精通，精通才有效率，劳动分工和比较优势就是这么来的。再进一步，如果有人弄个大市场——最好这个市场还是开在网上——乘法关系就会有更大的发挥：这个网络每多一个卖家、每多一个买家，它自身的价值都会变得更高。**正和游戏是你只要能参加就一定是好事。**

为了能参加，我们应该研究自己能创造什么价值，而不是该领取什么价值。反正只要你进去，自然就有回报。"将欲取之，必先与之"。**我不问我能得到什么，我问我能提供什么，这就是供给侧心态。**

一旦有了供给侧的眼光，你就会发现大量的人都把自己错误地锁在了需求侧：问他为啥来我们公司应聘，他说因为我喜欢你们的待遇和工作环境；问他对婚姻有什么看法，他说我要求另一半身高一米八、年收入至少 20 个 W、还要给 18 万彩礼，并且提供情绪价值。您那叫许愿好吗？**想要被邀请加入游戏，你必须能提供一点什么东西才好。**

我让 GPT 给供给侧心态下了一个硬核定义，它是这样说的："**把自己当成一个提供可验证价值的模块，主动降低协作摩擦，嵌入到长期重复博弈且有网络效应的结构里。**"翻译成大白话就是：你得真有本事，好合作，能接入好局。总共三件事：**第一件，价值生产**——你得真能解决问题，而不是光会说；**第二件，摩擦消除**——让别人跟你合作的时候成本更低、更顺手；**第三件，网络触达**——也就是你能达到什么级别的合作圈。注意供给侧心态可不是无条件的付出，更不是讨好型人格：健康的合作是互惠的，必须有边界有规则，但一切的触发点是你要加入合作。

价值生产和网络触达都容易理解，我感觉这里需要特别注意的是**摩擦消除**——也就是让合作容易发生，让自己容易合作，这里面也有学问。接下来咱们说两个有意思的研究。

行为科学家乔恩·利维 2025 年出了本新书叫《团队智能》，其中提出一个概念叫**胶水员工**。所谓胶水员工，就是那些虽然权力不见得有多大，但总能通过情商、协调能力和信任网络，让团队信息更流畅、冲突更可控、合作更顺手，从而放大他人产出的那类人。你想想身边有没有这样的人？新人来了业务没人教，是他给发个文档、带着把流程跑一遍；部门扯皮升级，是他出来翻译双方语言、把问题理清楚；项目快要炸锅、大家心态崩了，是他组织复盘，帮所有人重新对齐目标。从零和视角看，这些工作很难写进 KPI，可是研究发现**恰恰是这些人决定了信息的流动速度和团队的心理安全感**。胶水员工未必有耀眼的个人绩效，却是团队绩效的关键。

那你说我还是需要绩效啊，我不愿意做被人默默消耗的胶水。是的，所以你需要确保**价值可验证**：你要把自己承担的协作成本显化，比如写成流程和清单；你要争取正式授权，让这些工作变成明确的角色和考核；你最好还能把经验分享出去，这样组织才能知道你是那个让系统不崩的人。**供给侧心态，得把好人行为给工程化。**

第二个研究来自 2025 年的挪威。两个社会学家用大数据分析发现：那些住在挪威的移民或者移民家庭出生的孩子，**只要把自己带有外国色彩的名字改成挪威当地的主流名字，就能让年收入平均上涨 30%**。其他什么都不用变，仅是改个名字。想象一个挪威女孩出生于穆斯林家庭，原本名叫 Farah，她语言很好、学历不错、实习经历也不差，但投简历总是石沉大海。有一天她把名字正式改为 Ingrid——这是一个典型的挪威名字——就很快收到各种面试邀请，得到一个大公司岗位，工资比之前打零工高出一大截。事实证明人家并不会在面试的时候一看你是个穆斯林就大失所望把你拒绝，因为只要到了具体情境面前，标签其实没那么重要——**标签的作用是之前默默的筛选**。之前美国的研究也发现，移民只要改个白人名字就能多拿 50% 的面试机会。改个名字就变得稍微容易合作了一点。

**名字不是你的自我，名字只是你的 API 接口。改名不是否定出身，而是兼容系统。**改善形象、注重着装、说标准普通话、掌握一门外语都有同样的效果。你需要更好的合作接口：让自己的出现可期待，让响应速度快一点，确保交付的东西容易验收，有文档可复盘，让自己输出的内容尽量少耗对方的脑力成本。**让人更省心而不是更费心，就是好合作接口的标准。低摩擦代表靠谱，靠谱不是性格，是一种工程能力。**

可能有人会问：如果我只讲供给侧，那竞争怎么办？世间很多事情明明就是零和博弈啊。这里有个关键认知：**现代竞争的本质不是抢夺资源，而是抢夺合作资格。**你想上北大清华，你想进麦肯锡高盛，你想加入最顶尖的创业团队——这听起来像是在抢一个名额，但实际上你是在争取进入一个更高级的合作网络。你读书拿绩效履历，不是为了把别人踩下去，而是为了向那个更高级的系统证明自己有资格成为他们的队友。**竞争不是排队，是配对。输赢只是告诉你该配对到哪个层级的合作。**你优化的不是"我怎么把别人踩下去"，而是"我如何在下次评估的时候让别人看到离不开我给的供给"。

中美贸易战打的不是领土也不是任何实物资源，市场准入也好、供应链安全也好，其实都是把自家产品卖给消费者的机会。现代社会对一个人最大的惩罚，是把你从合作名单里划掉，以后不找你玩了。这就是为什么想进高端局就一定要重视积累声誉。**声誉就是在重复博弈中，别人对你未来合作价值的贴现。**一旦被贴上不可靠、爱占便宜和情绪不稳定的标签，你就会遭到社会性降级，你就只能去那些低信任度、高摩擦、全是零和博弈的低端局里竞争。**这场比赛的观众，可能是下一场的队友**——所以供给侧心态者哪怕这次没赢，也要表现得像个体面的专业人士。

我让 GPT 编排了十个应用场景，把供给侧心态和零和思维对比放在文稿的底部，你可以做一番练习。我理解这里不但要有供给侧心态，而且要培养对零和博弈的反感：也就是每当你看到零和博弈、看到一群人在抢一个什么东西的时候，都应该问——**这东西是死的还是可以被重新设计的呢？如果我跳出"抢"的叙事，我能供给什么呢？我能不能让盘子变大一点呢？**零和选手永远活在"别人是不是欠我的"这样的怨念里，而供给侧选手永远活在"我能不能补上这个缺口"的行动里。**这不是道德选择，而是生存策略。**

在这个高度互联、信息可复制、充满互补性的现代社会，**被需要是比拥有更安全的状态**。我们精英日课专栏一再说过：**被依赖，是当今世界给你最好的待遇。**

下一讲的思维工具叫做复利，咱们重新讲怎样积累你的优势。
`,$h=`# 010丨复利：可积累的优势

## 讲什么

成长战略模块第三个思维工具：**复利**。这个词你早就听腻了，但人们对复利有很多误解，根本没抓住关键。

## 解决什么真问题

你不会因为每天存一杯咖啡钱而在 40 年后实现财务自由，你也不可能连续 365 天每天都比前一天好 1%——任何成长都有上限，爱因斯坦也从没说过"复利是宇宙中最强大的力量"。那复利到底该怎么用？

## 核心论点

- **复利真正的秘密不是利率有多高，而是持续的时间有多长。**利率是靠不住的，复利是一个必须长期存在、不爆仓、并且保持积累的系统。
- 皮凯蒂 R > G：资本回报率长期高于经济增长率——**钱生钱的速度快于人挣钱的速度**。贫富差距不是因为富人坏或穷人懒，而是因为富人的优势是可积累的，而出卖劳动力是不可积累的。
- 值得积累复利的**七种资本**：金钱、人力、健康、社会、声望、心理、体验。它们不互相矛盾，可以互相叠加和转化，形成正反馈飞轮。
- 不同处境有不同的积累优先级：最值得积累的是**能抬高其他资本利率的那个资本**。
- 人生复利路线：**18–25 蓄力期（投人力资本）、25–35 赛道期（选定高复利赛道深耕）、35–50 规模期（用团队、制度和工具放大自己）、50+ 传承或再探索**。

## 关键例证 / 金句

- 巴菲特 89 岁身价 845 亿美元，年化约 22%；文艺复兴的西蒙斯年化 66% 却"只有"200 多亿——**因为巴菲特从 10 岁开始，西蒙斯 50 岁才开始**。
- 小张 25 岁起每月定投 1000 元 35 年（本金 42 万）→ 229 万；小李 35 岁起每月 2000 元 25 年（本金 60 万）→ 191 万。**早开始比多投入重要得多。**
- 18% 的美国员工对"公司匹配、白给的退休金"一分没存——**我们的直觉是加法运算，大脑不擅长思考"每年 8%"**。
- 香港真人秀《穷富翁大作战》：中上层人士体验基层生活后发现，穷人一天到晚为生计奔命，根本没有时间精力和安全垫去做长期积累。**你要能积累复利，那是一个巨大的幸运。**

## 如何应用

- 用 ROI 意识决定当前阶段该积累哪种资本：青少年投人力、中年经营社会与声望、健康越老越重要。
- 先把"能抬高其他资本利率的资本"提上来，此后积累啥都快。
- 没多少闲钱的年轻人别学巴菲特研究股票，**你最该投资的是你自己**。
- 原则：长期、早开始、不离场、不爆仓。

---

## 全文

> 以下为课程转录全文，已做去噪与语义分段；**加粗+底纹**处为核心论点与金句。

你好，我是万维钢，欢迎来到现代思维工具课。今天我们讲成长战略模块的第三个思维工具，**复利**。这两个字你肯定早就听腻了，但我们必须专门讲一次，因为人们对复利有很多误解，根本没抓住关键。

你不会因为每天存了一杯咖啡钱而在 40 年后得到财务自由；不管练什么项目，你不可能连续 365 天每天都比前一天好 1%，因为任何成长都有上限；而且爱因斯坦并没说过什么"复利是宇宙中最强大的力量"这样的话。**人生没有那么简单，但复利的确是个极为有用的、而且是战略性的工具**：它专门做乘法，能让你积累别人无法短期追赶的优势。复利不只是金融工具，你最重要的资本很可能不是钱。但说钱比较容易理解，咱们先讲两个关于钱的故事。

股神巴菲特在 89 岁那年身价是 845 亿美元。这对一般股民来说是个不可思议的大数，但如果你考察巴菲特整个炒股生涯的平均年化收益率，那大概是 22%——听起来就不是那么离谱，运气好的时候你一年也能赚 22%，对吧？**巴菲特成功不是因为利率高。**事实上华尔街最牛的对冲基金文艺复兴科技公司，从 1988 到 2020 年平均年化收益率高达 66%，比巴菲特可强多了，但文艺复兴的创始人吉姆·西蒙斯身价才 200 多亿美元，只有巴菲特的四分之一。为啥呢？**因为巴菲特的炒股生涯是从 10 岁开始，而西蒙斯是 50 岁才找到那套神奇算法。复利复利，成功最重要的不是利率有多高，而是持续的时间有多长。**

再看一个更接地气的思想实验。设想有两个同学，小张和小李都在 25 岁开始工作、60 岁退休，他们的投资年化收益率都是 8%。小张从 25 岁刚工作就每月定投 1000 元，一直投到 60 岁，总共投了 35 年；而小李晚了 10 年，35 岁才想起来存钱，但是他奋发追赶，每月定投 2000 元，也是投到 60 岁。小张 35 年总共投入 42 万元本金，小李 25 年总共投入 60 万元本金。你猜他俩退休时谁钱多？**答案是小张 229 万，小李 191 万。早开始比多投入重要得多，正所谓寸金难买寸光阴。**这就是乘法——确切地说是指数增长的魔力。复利是指利息不仅记在本金上，还记在之前已经累积的利息上。在 35 岁这一年，小张已经积累出来一个很大的乘数，那是小李快跑也没有办法迅速赶上的优势。

存钱也好、借钱也好，**复利其实是一台用时间做成的放大机器**。你希望站在积累而不是消费那一边，但首先你希望能用上这台机器。我们前面讲了，这个世界之所以是重尾的、之所以有那么大的贫富差距，就是因为有些人在乘法世界、有些人在加法世界，二者的关键区别就是有没有用上复利。

法国经济学家托马斯·皮凯蒂在《21 世纪资本论》中提出一个著名的关系式 **R > G**：其中 R 是资本平均回报率，也就是复利利率；G 是经济增长率，大致对应工资和 GDP 的增长节奏。如果你只是上班拿工资、没有资产性收入，你的收入就会按照 G 的节奏增长——大致就是中国经济每年涨几个点，你的工资就涨几个点；而如果你有资产性收入，比如买点理财、股票和房产，你的资产则是按照 R 来涨。**R 大于 G 就是说：一般而论，钱生钱的速度快于人挣钱的速度。**皮凯蒂说，这就是为什么变身栖身者不是养蚕人。那你说为啥 R 大于 G 呢？可能因为劳动受限于人的肉体凡胎和物理边界，而资本可以在全世界不知疲倦地跑，能选择高回报机会；也可能因为风险和耐心必须有溢价。**要点是：贫富差距不是因为富人坏，更不是因为穷人懒，而是因为富人能用上复利——他们玩的是不同的游戏。或者说，是因为富人的优势是可积累的，而出卖劳动力是不可积累的。**

听到这里你可能会说，可乘法世界是需要冒险的，毕竟世界上没有每年固定给 22% 利率的长期投资。没错，文稿里有张图，是巴菲特 1981 年以来的业绩：你可以看到巴菲特职业生涯的平均年化收益率是 22%，他可不是每年都能做到 22%，他有时候赚得多、有时候少、有时候还赔钱。事实上巴菲特 1999 年以后的表现远不如之前，但他的财富恰恰是 1999 年以后才变得特别耀眼——**那只不过是因为之前积累的乘数被放大了**。这个道理是：乘法世界的确有风险，跟加法世界"一分耕耘一分收获"完全是两码事。我们看到的很多富人是幸存者偏差：可能有很多人使用跟他们一样的投资或者投机策略，都早已经失败离场了，没有进入我们的视野。**你得想办法不离场才行。**风险管理的工具咱们后面再讲。**这里的关键是：利率是靠不住的。复利真正的秘密是长期，是早开始。它是一个必须长期存在、不爆仓、并且保持积累的系统。**

长期主义这个话好说，其实很难做到。我们日常的直觉都是加法运算：干一份活拿一份钱，吃一份是一份，好像天经地义。**我们的大脑不是很擅长思考"每年 8%"这种运算。今天的快乐很真实，未来的收益很遥远。**如果你在一家比较正规的美国公司上班，你每年在社保之外再存多少退休金，公司会按照一定比例给你匹配——比如你存上总收入的 5%，公司就再帮你存 5%，等于你拿双份。那这 5% 就属于你白得的收入，是应该闭眼存上的，对吧？可是有大量的美国人恰恰就没存：有统计发现，美国有退休计划的员工中，有 18% 的人干脆一分没存，还有 31% 存了点但没存到拿满公司匹配的档位。他们等于是为了今天多花点，宁愿白白把钱扔掉，他们临近退休才后悔。你跟这些人谈啥复利呢？

对比之下，咱们中国人倒是很擅长延迟满足。这大约是东亚文化的先天优势，可能起源于农业或者科举——这两个项目都需要你在前期坚持单方面投入很长时间才能有收获。东亚文化最爱投资教育，也最爱存钱，这的确是跟复利做朋友，东亚人移民到哪里都是当地最有钱的族裔。**但这两条赛道未免太窄了**：一个人一辈子只做考试拿高分和银行里多存点钱这两件事，如此辛苦的人生有什么意思呢？复利不应该只用在考试和攒钱上，其实你还可以积累别的优势。

法国社会学家皮埃尔·布迪厄早在 1980 年代就提出，资本不只是钱，还有文化资本、社会资本等。咱们借助这个视角，**以下这七种资本都值得你积累复利**：

**第一是金钱资本**，包括现金、股票、房产，是最硬的通货。金钱容易量化并且可以继承，但往往只是其他资本的副产品。**第二是人力资本**，也就是你的知识、技能、判断力和学习能力。诺贝尔经济学奖得主加里·贝克尔的一个洞见是：人力资本的回报期特别长，所以越早投入越值。**第三是健康资本**，也就是你的体能、精力和伤病风险。年轻人以为健康是默认的，中老年人才能认识到健康是一种耐用资本存量，不是今天吃两颗保健品就能解决的问题。**第四是社会资本**，说的是你的关系网络、你跟別人之间有多少互惠和信任。这里需要注意格兰诺维特提出的弱联系理论：很多重要机会来自你朋友的朋友，而不是你最亲近的人。**第五是声望资本**，也就是你有多大的品牌价值、别人对你是否靠谱的整体印象如何。这是马太效应最典型的战场：你口碑越好，越有机会来找你。**第六是心理资本**，包括自控力、韧性、情绪稳定和意义感，尤其要有进取性。**心理资本是整套复利系统的操作系统，它决定你能不能长期稳定地做正确的事。第七是体验资本**，也就是你做过什么难事、去过哪些地方、跟谁一起经历过什么。高质的体验叙事会沉淀为判断力、叙事能力和身份认同。科学家早就知道，体验型消费比纯物质消费更能提升长期幸福感。

**这些资本不是互相矛盾的，它们都可以互相叠加和转化。**比如你的心理资本和健康资本很富裕，你就容易做个办事特别靠谱、长期守信的人，那么你就有声望资本；于是别人更愿意跟你合作，你就得到了社会资本；这又让你有机会参与很多高质量项目，那么你的成长速度就加快，这就是人力资本；然后这一切都是很好的体验资本，都在增加你的金钱资本。**这是一个美妙的正反馈过程，飞轮一旦跑起来，你会对积累复利上瘾。**

那你说这也要积累那也要积累，如何取舍呢？再说总不能只积累不消费，否则人不成了机器。首先，积累本身就是一种乐趣，而且好的消费也是一种积累，最起码能积累体验资本。积累复利绝不只是存钱，更要储备、付出注意力和时间。不过不同处境之下的确有不同的积累优先级，因为复利的利率不同。咱们现代人最好建立 **ROI 意识**，也就是投资回报率：这个处境之下最该积累什么，取决于 ROI。文稿里的图是 GPT 根据他自己的理解画的几个资本在不同年龄的 ROI：金钱资本任何时候都可以投，但**青少年时代投人力资本最值得，中年经营社会资本和声望资本回报最高，健康资本越老越重要**。这样说来，如果你是个没有多少闲钱的年轻人，你就别学巴菲特研究股票了，**你最该投资的是你自己**；而你如果是个身体还不错的中年人，就先别着急研究养生。**从数学上讲，最值得积累的是能抬高其他资本的利率的那个资本**——先把它提上来，你此后积累啥都快。

把这些都考虑到，我们可以粗略的规划一个人生复利路线。**18 至 25 岁是蓄力期**：先把自己变成一个升级快的系统，这时候的钱和时间尽量砸在人力资本上，哪怕借点钱也别耽误读书，最好能去个大城市。**25 至 35 岁是赛道期**：暂停广泛探索，选定一个高复利赛道深耕，大幅度提升专业能力，建立行业声望，并且开始主动经营社会资本，有点闲钱可以搞长线投资了。**35 至 50 岁是规模期**：理想情况下你的利率已经很高，你的声望和关系产生了网络效应，这时候要善于用团队、制度和工具来放大自己，尽可能多赚钱，但小心健康和声望的归零风险。**50 至 65 岁也许是抗衰期，也许是新的探索期**，取决于你当时的具体处境；不论如何，你都应该考虑把自己的经验压缩成可传递的知识，把琐事尽量外包。一般人 65 岁以后就退休了，那大约就是分红期，但你也许可以给子弟、给社会搞点复利。简而言之，**复利视角下：年轻时的强是增长，中年的强是杠杆，老年的强是取舍。**

最后我必须再给你讲个故事，讲复利不讲这个故事就是站着说话不腰疼。2009 到 2013 年间，香港电台搞了个真人秀节目叫《穷富翁大作战》：这个节目请上市公司 CEO、富二代和律师等中上层人士，带着几乎为零的现金去住笼屋和板间房，做清洁工、露宿者和奶茶店店员，在基层打拼。参加者原本坚信"只要我有能力和斗志，从零开始也能很快翻身"，可是真实体验了每天工作 17 个小时、月租吃掉大半收入、每一顿饭都要精打细算的穷忙族生活之后，他们普遍的感受是：**穷人一天到晚都在为生计奔命，根本没有时间和精力，也没有安全垫去学习、去做长期积累。**

**不是所有人都有条件积累。你要能积累复利，那是一个巨大的幸运，这会带给你巨大的优势；而你积累出来的优势，就算别人将来有条件了也追不上。**再想想开头小张和小李的那个故事吧，不要浪费这个幸运。
`,Fh=`# 011丨问答：承认「原来我是错的」为什么那么难？

## 讲什么

基本世界观模块的问答篇，覆盖六个高频问题：硬约束能否改变、怎么和 GPT 聊天不越聊越乱、怎么区分"制造可能性"与"增加无效风险"、怎么触碰内核自我、怎样战胜习得性无助、供给侧心态在体制内碰壁怎么办。

## 解决什么真问题

正讲给的是概念，这一讲回答的是落地时真实卡住的点——尤其是"道理我都懂，为什么做不到"。

## 核心论点

- **判断一个硬约束能不能改变**：如果改变这个约束本身成了唯一重要的主题（一场发明、一场革命），你原来想做的事已经不重要了，那才是真突破。
- 跟 GPT 越聊越乱不是该改进提问，而是**问得还不够多**——聊得足够多，你会发现它的思路在每个领域都收敛于几个特定的心智模型。
- 制造不确定性的理想形态是**试探**：成本很小、潜在收获很大；试探出真机会后才轮到凯利公式管投入。
- 日志和界面都是事后编出来的故事，**触碰内核自我靠的不是解释，而是训练**：发现固有模式，在苗头再次发生时做反向动作。
- 战胜习得性无助最好的办法是**取得一个最小的胜利**——真正的信心只能通过做成一件事来获得。
- 逆火效应的根源：人们把观念和身份认同绑在一起。**改变的方法是先解离观念与身份，而不是猛攻观念本身。**

## 关键例证 / 金句

- "你要是为了做成这件事真的突破了硬约束，总理会接见你。"
- **"猴子看人下棋，看 20 年也学会了。一个人跟高级智能聊天，聊个一年两年，怎么也学到真东西。"**
- 体制内问答：你需要一个清晰的目标函数，到底想做大还是想自保——"**向前一步求发展，后退一步求安全。世界上不存在又安全又发展的好事。**"
- 帮孩子建立内核：通过叙事建立身份认同——"我不只是个月薪几千的护士，我是一个救死扶伤的医护人员。"

## 如何应用

- 给 GPT 对话建笔记库，分门别类，自己总结提炼心智模型。
- 每周设计一个小试探（发篇文章、做个 MVP、打听一个信息），把"制造不确定性"变成习惯。
- 列出你的三个固有第一反应，为每个写下一个具体的反向动作。

---

## 全文

> 以下为课程转录全文，已做去噪与语义分段；**加粗+底纹**处为核心论点与金句。

欢迎来到现代思维工具课的问答时间，这一讲我们集中回复一下本周读者的问题。

**对于课程《约束：先尊重，再行动》，读者黄猫的问题是：请问万老师，我们在生活工作中怎么判断一个事物的硬约束条件是不能改变的呢？**

万老师的回复：我觉得判断标准是——**如果有人改变了一个硬约束，那"改变硬约束"本身就会成为这个叙事唯一重要的主题，而你原来想做的那个事已经不重要了。**比如对古人来说，我们现在做的很多事情在他们看来都是不可能的，古人心目中的很多硬约束已经被我们突破了。但是突破硬约束的时刻，绝不是一个古人本来想干什么事、然后想"原来这里有个硬约束，我突破了它，我这个事终于干成了，我该庆祝我干成了那个事"。不是这样的。是有一个科学家或者工程师的发明创造、或者一场革命强行扭转了社会格局，才让那个硬约束得以突破——**那个发明和那场革命才是这里真正的新闻**。这一次突破使得很多以前做不了的事现在能做了，但那些事可不是新闻。比如你的一个朋友说要在本县开个小卖部、说肯定能赚钱，你说这里有硬约束、你这项目成不了。那打破硬约束是什么概念呢？你要是为了做成这件事真的突破了硬约束，总理会接见你。

**读者一日三餐四季的问题：万老师，我平时也会用 GPT，而且不是没思考，相反是想法很多、问题也很多。可一接上 GPT，我就容易越聊越多、越整理越乱，最后不是没内容，而是内容太多、接口太乱，反而难落地。如果按你的工具思维框架，看我这种情况属于哪一类典型问题呢？我最该改进的是提问、约束习惯，还是整个工作流呢？**

万老师的回复：我认为你不需要改变任何事情。**你现在感到混乱，只是因为问得还不够多。**只要你问出足够多的问题，对各个领域全面地跟 GPT 聊过，你就会逐渐发现它的思路会在每个领域都收敛于几个特定的心智模型——也可以说是我们说的思维工具。当你掌握了这些底层的思维工具，你就会发现后面它聊的东西已经是你可以预期的了。那么恭喜你，你已经能够使用当今主流的模型去思考那个领域的问题。

要想加速这个过程，一个好办法是**把你和 AI 的对话找另外一个地方存起来作为笔记，对这些笔记分门别类管理**：它这次说到跟你以前问的类似的问题说法有什么区别？别的 AI 又是怎么说的？这些东西有什么共同点？就好像读书和做研究一样，自己总结提炼其中的心智模型。**哪怕是只猴子看人下棋，看 20 年也学会了。一个人跟高级智能聊天，聊个一年两年，怎么也能学到真东西。**我刚跟 o1 Pro 聊的时候惊为天人，现在面对 GPT-5 却常常能占据主动。功夫是可以练的。

**对于课程《可能：不确定性是意义的燃料》，读者的问题是：在主动创造不确定性与尊重约束、避免盲目冒险之间，是否存在更细的 judging 原则？该怎么区分自己是在扩大可能性还是仅在增加无效风险呢？读者涣解的问题是：当一个人开始尝试制造不确定性，但又不确定自己是否配得上、是否走在对的方向上的时候，应该怎么和这种状态相处呢？以及怎么判断自己是不是应该继续往前走呢？**

万老师对这两个问题的回复：**制造不确定性绝不是没事在自家后院玩火，它必须有可能给你带来好处才算。**最常见的好处，一个是信息上的增益，或者像能耐寻求定理说的那样，是给你带来未来的选择权。即使有这样的好处也要问一下值不值，特别是冒险的钱——**损失不能是毁灭性的**。所以最理想的制造不确定性是对世界做一个试探，也就是有枣没枣打一杆子再说：比如创造一个最小可行产品投向市场、写一篇文章扔到论坛、找谁打听一个什么信息，或者学习一个新技能。**这些事就算失败也不会给你带来多大损失，你付出的成本很小，但是潜在的收获很大。**

好，如果你真的试探出来一个机会，事情变得严肃，需要你投入更多才有可能获得真正的收获，这个时候到底该怎么投？一个最基本的思维工具是**凯利公式**，我们后面会专门讲。

**对于课程《内核：你的三个自我》，读者 Alen 的问题是：我只想问，有没有直接自省到内核自我的方法？成天看日志、换界面也没什么大效果。**

万老师的回复：日志和界面都是一些事后编出来的故事，作用确实不大。内核自我是神经网络的一大堆参数，你不会直接感受到它。**要想触动和改变它，你需要的不是解释，而是训练。**你必须先发现需要改进的苗头，然后在苗头再次发生的时刻进行有意识的训练。苗头就是看你平时遇到某种情况的第一反应是什么：比如别人一质疑你，你立即就反驳；又或者你一接任务就想拖延。这些不是什么大事，但如果这是你的固有模式，这就是毛病。发现这些固有模式，就是你自省到了内核。想要改变这些模式，**训练的方法是主动做一个反向动作**：下次别人质疑你的时候，能不能忍住先不反驳，先确保你听清楚了对方的诉求和逻辑合理性；下次遇到一个任务，你能不能立即展开第一步行动。只有这样做反向训练、打破自己的怪圈，才能修改内核自我的参数。

**读者渡不员的问题是：万老师，当计划自我明明制定了正确决策，却总被体验自我的即时痛苦和记忆自我对过往失败的恐惧联手罢免的时候，有没有一个关键的抓手动作，能快速打破这个死循环？**

万老师的回复：**要战胜习得性无助，最好的办法就是取得一个最小的胜利。真正的信心只能通过做成一件事来获得**，而不是给自己凭空鼓劲搞精神力量。哪怕每天早上起来按时洗脸刷牙、呈现一个整洁的面貌——一开始你可能连这些都不做，但后来你把它们做好了，这也是一个小小的成功。先从自己的小事做起，然后尝试对其他人产生正面的影响，比如帮人一个小忙，然后独立完成一个任务，再往后完成关键的任务。这样一点一点地承担更多的责任，不仅你会对自己更有信心，他人也会对你更有信心。**哪怕那个任务没有任何难度和悬念，做和不做、完成和没完成，感觉完全不同。**

**读者梅朵的问题是：万老师，我是一名老师，我和学生们交流的时候曾经用过"内核"这个词，我想表达的就是类似于内核自我的概念，只是我的表达没有这么深刻清晰。我个人认为现在许多孩子抑郁或焦虑，很大程度上是和没有内核自我、或者是不会不断更新内核自我相关。我想问的是，在我们这种偏远县中的环境下，如何帮助孩子们建立稳定的内核自我呢？**

万老师的回复：**最好的办法是通过叙事帮他们建立一个身份认同。**我们后面会详细讲身份认同这个武器和它的局限性，也会讲到叙事的方法。但关键在于，身份认同是人变成熟的第一个标志。一个成人在社会上立足，并不是整天计算利益得失，而是在扮演自己的社会角色。这种角色可以是某种职业，也可以是某种关系，比如说我是一个学生家长，我是一个老师，我是一个消防队员。人是为了满足这个角色的设定而做出各种动作。你对学生的点拔是早一点帮他们设定一个稍微高级一点的身份认同，比如说：**"我不只是在这家医院里有个稳定工作、每月拿这几千块钱的护士，我是一个救死扶伤的医护人员。"**这能提升他们的上限。当然身份认同只能让人走这么远，到了一定程度身份就变成了限制，但那是后话，只有悟性很高的人才能到达那个层次，那就不是你作为一个中学老师的责任了。

**读者荣心的问题是：请问万老师，对于一个被灌输了几十年垃圾数据的大脑，让他承认"原来我是错的"、打碎整个价值观，会不会适得其反引起系统崩溃呢？**

万老师的回答：的确很难让一个成年人承认自己的观念是错的，而且往往会有所谓的**逆火效应**——也就是你一旦指出他是错误的，他反而更加坚定地相信那个错误。并不是说他的大脑拒绝更新，**这背后的根本原因是他把自己的观念与自己的身份认同、社会归属感和自我叙事联系在了一起**。比如你逼我承认中医不如西医，难道我这么多年爱国爱错了吗？你质疑他这个观念，就等于是在质疑他这个人的存在合理性，那他当然是无法接受的。

但我们也不能说对成年人就都得只筛选不教育。人当然是可以改变的，而且很多时候有必要改变。**改变的方法，还得是先让他把一个观念和自己的身份认同给解离开**：你就算相信西医也不等于不爱国，中国之可爱不一定非得用中医来背书。你需要让他增长更多的见识，让他更全面的了解世界是怎么回事。但最关键的是，**让他理解自己以前的错误观念的形成是可以谅解的——当初有当初的不得已，但是自己这个人仍然是可爱的。**当然这一切很困难，还得看这个人有没有机缘才行。

**对于第一个思维工具能耐寻求定理，读者签约的问题是：老师请问我如何确保这些"增加可能性"的探索，最终没有变成另一种器——一种用忙碌地尝试各种可能性来逃避锚定一个使命并为之深耕的自我欺骗呢？**

万老师的回复：咱们回到能耐寻求定理，它并不是说一个智能体应该一味地只寻求增加可能性。它是说**如果你眼前没有立即可见的奖励，你就应该去可能性更大的地方**；可是如果你眼前就有一个奖励，那当然不妨碍你先把奖励捡起来，然后再去探索别的地方。**探索和利用是一个矛盾，你得动态平衡。**如果现场有可利用的东西，为什么不利用呢？增加可能性相当于是购买了一个期权，而这里还有一个关键设定：**期权有到期时间**，过了那个时间点它就没有用了。所以该行权就得行权。我们后面还会专门讲期权。

**对于第二个思维工具供给侧心态，读者 Sinky 的问题是：非常愿意用供给侧心态去工作，但是有时候会被打脸。尤其是在体制内工作，面临边界不清晰、职责不明确、多做并不会升职加薪的情况，多付出多关心一点就可能让别人产生"你行你上"、就容易多做多错。有时候在多次反复博弈中容易产生多一事不如少一事的心态，不愿意多付出价值。怎么克服这样的心态呢？**

万老师的回复：**你需要一个清晰的目标函数：到底想要做大，还是想要自保。**在和平年代，一个没有背景的人想要在体制内做大是极为困难的。你看见的那些阻力都还只是小事，在网上还有更大的凶险。除非有特别的机遇，做大似乎不是一个非常值得指望的事情，这就是为什么那么多英雄豪杰不愿意进体制内。**但如果你想做大，这些都不叫事，都是你必须接受的。而如果你想自保，那你就本着一个尽职尽责为人民服务的心态去做，不求有功但求心安，把更多的内心戏留给家庭和自己的某一项业余爱好。**马斯洛说：**向前一步求发展，或者后退一步求安全。世界上不存在又安全又发展的好事。**

以上就是今天问答的全部内容。
`,Bh=`# 012丨基本世界观模块答疑直播笔记

## 讲什么

世界观模块六讲结束后的直播答疑：万维钢先串讲六讲逻辑主线，再集中回答约 10 个典型问题，覆盖叙事权、主客观的平衡、智商是不是硬约束、运气能不能改、代际认知冲突、元认知能力从哪里来等。

## 解决什么真问题

概念课听懂了，一落到真实处境就卡住：被别人的叙事带着走、知道道理却处理不了和父母的冲突、想行动又怕不尊重现实——这一讲把世界观落成操作。

## 核心论点

- **六讲的底层主线**：世界是叙事的（你可以选）→ 重尾的（别求平均）→ 稳态逻辑已过时（要做能动者）→ 有硬约束（先尊重再行动）→ 充满不确定性（那是意义的燃料）→ 人有三层自我（改参数才是真改变）。**这一切的最终落点：你在任何情况下都是一个能动者，面对局面总有一个可以落子的地方。**
- 话语权是绝对的（能定义共同知识），叙事是相对的（只能争取认同）——但**叙事权依然是巨大的权力：公开表达相当程度上是对公众的一次施法**。
- 好叙事的原则：**说的一切必须是事实，但选择哪些事实、强调什么、定义谁的身份，是你的权力**。
- **运气 = 合作机会**。改运气的两条路：让行业看见你（可见性），让自己容易合作（好接口）。
- 阻碍不行动者的从来不是硬约束，是没有动力；**决定你出来干事的不是约束少，而是你知道一点别人不知道的东西**。

## 关键例证 / 金句

- "清华教学楼挂着'行胜于言'，可你是学者，**你的任务就是通过叙事推动社会发展，怎么能行胜于言？**"——角色不同，价值观就该不同。
- 格拉德威尔的比喻：**智商跟成就的关系，就像身高跟篮球的关系**——太矮打不了，但进了职业队就别再谈身高。"上了大学就别再讨论智商，工作十年后就别再谈论学历。"
- 国际象棋数据：业余棋手水平与智商相关系数 0.3 以上，职业棋手只剩 0.1-0.2——**一旦严肃对待业务，智商就不重要，重要的是积累和实战经验**。
- 代际冲突的心法：**先扩大对方的身份认同，再谈观念**；"理解之同情"——理解他为什么这样想，才有真兼容，**谁能兼容谁就能领导谁**。
- 读者长觉不住的留言（本期最佳）："**现代人很容易把优化界面当成升级内核**——更懂概念、更会叙事、更能解释自己，但这些都不等于底层真的松动了。真正值钱的是那些不太好看的时刻：被现实顶回来，发现自己还是会怕、会硬、会装、会逃的时候，愿不愿意不急着圆回来，而是真的承认'原来我的旧模型还在'。"

## 如何应用

- 学一门课的第一步是**把它讲出来**：讲得卡住就是没学明白——"看见降伏"，先念出妖怪的名字。
- 训练**模式识别**：遇到场景能迅速识别"这是个什么局"，再调取前人的应对套路。
- 给父母/长辈做观念工作：不对抗、不忍让，先满足情感诉求和存在感，再扩大身份认同。
- 给孩子最好的礼物是充分的自由社交——**心智理论只能在真实互动中长出来**，元认知能力由此激发。

---

## 全文（精选整理版）

> 说明：原直播约 2.5 小时、转录逾 5 万字，含大量主持人串场与抽奖环节。**以下为剔除串场后按主题重组的问答主体**，已做去噪与语义分段；**加粗+底纹**处为核心论点与金句。

### 模块串讲：六讲的底层主线

万维钢：第一讲我们说这个宇宙的第一性原理是叙事，然后世界到底是确定的还是不确定的——我明确说明这个世界充满了不确定性，**没有人能预测未来，哪怕你是穿越者**。你告诉别人未来会怎么样，你看到了真实的未来穿越回来，你还是不能预测那个未来，因为我们会改变那个未来。这其实是好消息，正因为这样我们的生活才有意思，所以不确定性是意义的燃料。

接下来是三个自我：人并不是只有一个自我，人有进程自我、界面自我、内核自我。这个模型并不是学术界的标准模型——学术界没有标准模型，每个哲学家都有一个自己关于自我的版本。我只能把这些东西综合在一起提出一个工作模型，我的目的不是发表学术学说，而是想说明：我们平时感知到的那个我、以及平时想呈现给别人的那个我，其实都不是真正的我。**真正的改变是发生在你那个神经网络的参数上。**

我希望大家先有一个基本印象，我们后面再展开不同场景下如何应对。最关键的一点是：面对一个具体场景、一件具体事情的时候，你并不是只有一种方法来解释它。头脑里如果有这些思维工具，就好像一个棋手有各种定势：给他一局棋，他看一眼就知道这是怎么回事，就有各种应对方法。而如果没有这些定势，你可能只看到一大堆凌乱的棋子摆在棋盘上。我希望我们的读者面对任何情况，一眼就能识别这是一个什么局势，甚至能识别出若干模式、从若干视角看怎么操作——**你会发现事情是非常可操作的**。

更重要的一点是：**你在任何情况下都是一个能动者**，你可以对这个局面做一番操作，而不是被动地响应它、被它驱使。如果这个课程有一个主题的话，那就是：面对一盘棋、一个局面，你总是有一个可以落子的地方。这个落子的地方不是别人驱使的，不是谁要求你应该怎么做，而是你总是有自由可以选择怎么做——而你这么做是为了改变这个局面，让这个局面对你更有利。**我希望我们的读者到任何时候都是一个非常积极主动的人。**

### 问答一：叙事是一种权力吗？跟话语权有什么关系？

问：叙事是一种权力吗？它跟话语权有什么关系，是更好听的一种说法吗？

万维钢：**叙事的确是一种权力，但话语权是一种绝对的权力，叙事是一种相对的权力。**话语权是什么呢？是"以这个声音为主、以他说的为准"。比如说十几二十年前就有很多有识之士说中国应该开放二胎、人口将来会面临危机，但没用——你有发言权，但你没有话语权，你说的人家不好使。可如果有一天官宣说二胎放开了，这就是真正的话语权：哪怕你作为一个学者不同意，你也只能以他说的为准。最近史蒂芬·平克写了本书叫《共同知识》，话语权在某种程度上能够定义共同知识——他的话摆出来之后，虽然不见得是所有人的共识，但你只能以这个为准，因为就算你不信，你也只能假设别人会相信，你们没有办法协调，所以你最好假设大部分人都相信它。话语权是非常厉害的权力。

但叙事这个权力，它不能定义共同知识，你只能争取别人的支持：你讲一个故事，人家可以相信你，也可以不相信你。但它也是一个权力，因为至少人家把时间花在你这，允许你给他讲个故事。你细想的话这是一个巨大的权力：比如一屋子人开会，一两百人坐在一个房间里，领导说"小李你上来，给你三分钟时间讲讲现在到底是怎么回事"——这是一个巨大的机会，有这么多人愿意听你讲，**等于允许你对这些人的大脑进行一次编程**。公开发言在相当程度上是对公众的一次施法：允许你施展一个法术，改变这些人头脑里的一个观念。所以从这个意义上说，叙事是一种权力。

那怎么不浪费这个机会？比如工作场合有个活没人愿意干但又必须得干，你找到小李说"这活你去干"——他可能心想这活没人干你让我干，你肯定拒绝。但如果你换个说法："我们有这么一个非常麻烦的任务，我看全公司其他人都不行，就看你以往的表现是解决难题的高手，这个任务公司上下就指望你了，你能不能几天之内干出成果来？"其实你这么说没有任何谎言，说的也都是对的，但听起来感觉完全不一样。这就是框架（framing）——**怎么用框架重构当前场景**。

### 问答二：叙事毕竟是主观的，怎么把握主观和客观的度？

万维钢：这是个很好的问题。作为一个负责的人、讲道理的人，你不能给人家编造事实，必须充分尊重客观事实；但同时你想讲一个叙事，叙事一定是主观的。这两件事并不矛盾。**一个好的叙事、一个在生活中非常有用的叙事，一定是你说的所有东西都必须是事实——但是你对事实的视角、你选择说哪些、强调哪些、不说哪些，这些是你的权力。**

叙事一个重要的技巧是通过叙事去定义这个人的身份认同。比如把小李定义成公司解决难题的能手；把一个学生说成有无穷潜力、只是现在还没发挥出来的人；把一位退休长辈说成"你有毕生的经验"而不是"你就是一个退休的老头"——**你先定义他的身份，将直接影响他接下来做符合他身份的事情。**再一个方法是：做任何一件事都付出一定代价、获得一定收获，你可以强调代价，也可以强调收获。比如劝一个人买电脑："这电脑开机快两秒，多花几千块钱值得吗？"——绝对值得。这两秒省的不只是两秒钟，它会让你进入工作状态的速度完全不同，会直接改变你的工作状态——你这是投资，不是成本。这就是叙事的魔力。

身份认同在我看来是当今社会一个黑魔法级别的东西：它是很多冲突的根源所在，也是做事的动力之所在。大量成年人之所以日复一日地去做事，并不是每天做利益计算，而是在给自己讲一个叙事：我是一个什么身份的人，我要做满足我这个身份这个角色的事。

（主持人请万老师用身份认同构建一下本课用户的叙事。）万维钢：我们的用户都是能动者。**我们的用户不接受命运的直接安排，不相信"一切都是最好的安排"——我们认为最好的安排是我自己提出的安排。**如果我们的用户在哪个地方被别人的叙事忽悠了，那他就白学了。你不能陷入别人的叙事，任何时候要能跳出叙事来，然后你还要给别人设定叙事。你不一定在每个场合都扮演主角，有时候可以把舞台让给别人，但任何时候你的行动应该是你主动的选择，而不是被动的安排。**我们的读者拒绝被人安排。**

### 问答三：如何温和化解代际认知冲突？

问：如何用科学思维平衡决策主权和情感归属，在不极端对抗、不自我内耗的前提下完成代际认知冲突的温和化解？"理性正确、情感难受"的矛盾有没有可落地的思维工具？

万维钢：我理解这位同学问的是跟父母相处的场景，比如父母非得轻信某种没用的保健品，你不给买像是不孝顺。以前的说法是应该"动之以情"而不是"晓之以理"，这有道理：父母有时候跟你争论，其实是想刷一个存在感——他在社会上退出了，退休之后感到不受关注，会有失落感，尤其看到儿女整天忙自己的事，他会质疑自己存在的价值。他可能自己都没意识到，但他潜意识的诉求是希望被看到。如果儿女跟父母关系好、经常交流，给他分享新东西、带他去旅游，他满足了这个心理诉求，没有一种被忽略的感觉，他就会变得更理性得多。

另一方面，**你要改变一个人的观念，很重要的一点是：人们往往会把一个观念跟他的身份认同联系在一起。**你质疑我的观念，就等于质疑我的身份，就等于我这个人立不住了。比如有人就是喜欢中医，你跟他说中医的疗效没有经过科学验证——他想的不是疗效问题，他想的是你质疑我对中医的崇尚，就等于质疑我爱国。你如果直接对抗，会更加强化他的这种参与感。所以**你得先把他这个身份认同给扩大化**：我们爱中国并不是因为中国有中医，而是因为中国有众多好东西。你如果能帮他先把身份认同扩大化，然后再跟他讲，他可能会好接受得多。

还有一点特别重要：人到了一定年龄认知会下降。这些人未必不是非常聪明的人，可能叱咤风云的时候很厉害，但退休以后认知会急剧下降——有生理上大脑肌肉不足的原因，特别是有些人到了一个年龄放松了学习的要求：我对世界的探索已经结束了，我只去这几家餐馆吃饭，只跟这几个熟人交流，没必要再认识新人、认识新理论。陷入这种心态，再结合衰老和社交封闭，这个人会迅速变得越来越不通。我最近看到一个研究说**人的大脑巅峰时刻是 55 岁到 60 岁之间**——从这点上讲我们都还没到。但如果不用，确实有些人 40 多岁就好像已经没有 30 多岁那么聪明了，因为他们停止学习、放松了对自己的要求。

所以作为我们，应该理解之同情：**你不应该让一个身体弱的人去负重搬东西，那么你也不应该让一个头脑比较弱的人去做高难度的决策。**我们应该包容：他可能没有想那么全面，但你可以哄一哄，充分满足他的情感诉求，然后充分照顾他的身份认同。不要质疑人家的身份认同，而要帮他扩大。

### 问答四：智商是一个人的硬约束吗？

万维钢：智商不是硬约束，它可能是一个比较软的约束。有些事的確需要智商达到一定程度才可以做：如果智商不到 105，大学本科教育可能拿不下来；有些人认为读博士需要达到 120。但这不是一个很高的标准。最有意思的一点是，我们讲不确定性那一讲有个实验：**后来最成功、积累财富最多的人并不是最聪明的人，运气的影响大很多。**

格拉德威尔有个特别好的比喻：**智商跟成就的关系，就好像身高跟篮球的关系**——这人如果特别矮，他打篮球打不了；但你不能说这人篮球打得好是因为他身高够，这根本不是那么回事。我们有大量证据能说明这一点，比如国际象棋：对业余选手来说，水平和智商有比较强的正相关，相关系数大概 0.3 以上，越聪明的小孩下棋越好；但是对职业棋手来说，相关系数降到 0.2 甚至 0.1。**一旦你开始严肃对待这个业务，智商就不重要，重要的是你的积累、你的复利、你的实战经验。**

所以我一直有个说法：**一个人高中毕业、进入大学以后就不要再讨论自己的智商**，别人也不要再谈论他的智商。你说一个中学生"这孩子聪明有前途"，这可以；你都上了大学还谈什么智商，没有任何意义。好比你都进入职业球队了还说这人身高怎么样——职业球队里大家身高都挺高的。工作十年之后、30 来岁的时候，就不要再谈论自己的学历了：如果你毕业十年还拿自己的母校作为成就，那就说明你没有别的可以吹嘘的东西。**到了不同的年龄考虑不同的东西。**智商是正态分布，财富和成就是重尾分布——你不会看到一个身高比你高一倍的人，但你能看到财富是你十倍百倍的人。塔勒布说智商是心理学家发明的一个安慰剂，我不同意这个说法，我认为智商是有用的，但我同意这个态度：智商被高估了。

### 问答五：既尊重硬约束，又怎么保持行动力？

问：面对"知道太难就不敢开始"的心理，如何既充分尊重硬约束又依然保持极强的行动力？

万维钢：一个人如果不想行动，**阻碍他的不是约束，而是他没有动力**——他可能从来没做成过什么事，有点习得性无助，不愿意冒险。而动力这个东西是一种积累：信心是你之前做成过一些事然后才有的，不能是看了小说说"我也要成为那样的人"，那是一个初步的动力，但你得做些实事才行。

我们谈论硬约束，主要是说给那些行动力过强的人听的：这些人太想行动了，看了个什么想法，突然间明天就要创业、要开启全新计划。我是想跟这些人稍微讲一讲：你得尊重世间有这么多硬约束。

而且很多时候你并不是坐在家里算清楚有哪些约束才行动——**你不撞到那个约束的时候，你也不知道那有个约束**。最好的办法是先试探：先做一个最小可行的动作，成本不高、可以撤回，先试一下。发现不可行就算了；如果可行，再决定怎么下注。我们后面会讲凯利公式：你要考虑两个东西，一个是你的认知优势——**你知道什么别人不知道的东西？如果你知道的都是别人也知道的，人家都没出来干这件事，你有什么资格出来干？**另一个是这件事的风险和赔率。你的认知优势和这件事的风险共同决定你应该投入多少。**决定你出来干事的，从来不是约束少，而是你有一点别人没有的东西。**

### 问答六：天生运气差的人怎么办？

万维钢：没有人生来运气差。有人天生智商比较低，有人天生身高不足，但**没有人天生运气差**。可能你的开局不是那么好，是个困难模式，但运气是可以改变的。运气有强烈的正反馈效果：运气越好的人运气会变得更好——如果你进入一个增长模式、一个正反馈系统，你的运气会越来越顺。

我还想给一个视角：**所谓运气，其实是你的合作机会。**买彩票中大奖、突然发现失散多年的远方亲戚给你一大笔遗产，这种运气不值得追求也没有意义。我们真正想要的好运是获得一个合作机会——比如 OpenAI 突然找你，说我们这缺一个 AI 训练工程师。真正的竞争是竞争合作资格。

怎么提高这样的合作机会？两方面。**一方面你得确保自己可以被人看见，有自己的可见性。**以前大家的关键是我为一家公司工作，老板知道我是谁；但现在你不能只追求公司内的可见性，要追求在整个行业的可见性，最好这个行业的人都知道你是谁。现在有很多网络工具：LinkedIn 不是找工作的，它是你可以发表工作感悟、分享你使用什么工具的经验、有什么好窍门的地方。你有什么洞察、这个行业有什么动态，你写一些，别人一转发，行业就知道你是谁。**你不是为一家公司工作，你是在为这个行业工作，你要建立行业声望。再一点是你得把接口界面做好，变得容易合作**：别人想调用你的时候很容易就能调用到你——起码会说普通话，形象正式一点，回复快一点，交流直接，让人迅速理解你的意思。学点表达能力，学点写作。把接口变得顺畅，别人容易跟你合作，你获得更多合作机会，你的运气就来了。

### 问答七：什么决定一个人会不会升级内核自我？

问：如果内核自我是天生的模型参数，那又是什么决定升级或不升级？有人意识到自我训练和奖励，有人一辈子被环境刺激和影响，这个区别的关键是什么？

万维钢：这个东西叫**元认知能力**，我们专栏多次提到过，就是自己察觉自己的能力：站在第三人称的视角考察自己——我现在这个状态是不是过于紧张？我是不是生气了？我是不是需要在某一方面做出改变？我跟 AI 聊过，元认知能力是不是可以算另一个自我。GPT 的观点是：可以把元认知能力视为三个自我共同作用的东西——是界面自我主持的一次会议，调用内核自我和进程自我，多方一起开会：我们现在是个什么局面，应不应该改一下自己？我为什么一发言就紧张？为什么这么容易生气？

为什么有人有元认知能力、有人没有？没有元认知能力的人处在被驱使、被牵引的状态：他对这个感兴趣他就做，他害怕他就不做，他从来不反思"为什么我当时会害怕、为什么我会被那个东西勾起"。他认为一切原因都归于外部：都是那个人把我带坏了，是公司给我工资太低所以我才不好好干活。他总是谴责外界，从来没有自省。

元认知能力可能跟大脑的前额叶皮质有关。其中最重要的一点是：**人在儿童到青少年阶段，前额叶还在成长，这个阶段的重要任务是社交**。他需要在跟人各种各样的互动中学会一个最关键的技能，叫**心智理论（Theory of Mind）**：你得能知道别人在想什么，知道自己在想什么，还得知道别人眼中你在怎么想别人——你得对双方大脑的心智状态有一个理论、一个猜测，这个能力只有在跟人互动中才能获得。所以小孩特别是幼儿园到小学这个阶段，最大的任务不是学习字母表、背唐诗，而是跟其他孩子互动：摸爬滚打，在一起按一定规则玩游戏，被欺负了怎么办，怎么反驳，怎么说服一个人跟你一起做事，别人对你提不喜欢的要求怎么拒绝，你把别人欺负哭了能不能反思一下为什么。**只有充分的社交互动，他才能掌握心智理论，才能从心智理论上激发出元认知能力。**如果他没有自由的社交互动，只是被父母和老师驱使，特别擅长取悦家长、扮演一个很听话的角色——让干啥干啥，只是服从而没有主动性——他就难以发展出心智理论，也就难以发展出元认知能力。"吾日三省吾身"，你得是扮演了一个社会角色、有很多人跟你互动、对你有所期待，你才谈得上反省。如果一直处于被驱使的状态，就谈不上这种能力。

就好像一个 AI 模型如果从来没经过强化学习、没跟人互动过，也不会发展出自我意识——**自我意识是从经历中取得的，你身上得发生故事，你才有自我意识。**

### 问答八：学了怎么用？（学习方法）

万维钢：一个关键能力是**模式识别**：生活中遇到一个场景，你能不能迅速想到这是一个什么模式。比如学过博弈论，遇到一个局面你迅速知道这是囚徒困境，马上想到解决囚徒困境的方法是建立某种协调机制，套路马上就出来了。再比如你想取得别人信任，一个办法是发出信号，而可信的信号一定是有某种代价的、比较昂贵的信号。你首先得在生活中辨认出这个局面是什么局面，然后才能迅速想到前人已经有这么多经验，我们该怎么办。

我特别赞同主编刚才说的"讲出来"。不只是学了工具讲给别人，而是你在日常生活中、在周围的人之中，就应该是一个比较能讲的人：别人觉得你特别有办法、特别有想法，有什么问题喜欢问你；你议论新闻也好、国家大事也好、娱乐八卦也好，经常能发表一点洞察——这个事其实是怎么回事，其实历史上有个什么人物遇到过类似局面他是怎么做的，这件事无非是两种可能性……**你到处都能输出一个观点，最好是一个洞察。我希望你在生活中能是一个这样的人，你会非常受欢迎。**

---

> 本期最佳留言（读者长觉不住）："这一讲我最有感的是他把成长跟'会说成长的话'分开了。**现代人很容易把优化界面当成升级内核——更懂概念、更会叙事、更能解释自己，甚至更会谈修行，但这些都不等于底层真的松动了。**真正值钱的反而是那些不太好看的时刻：被现实顶回来，发现自己还是会怕、会硬、会装、会逃的时候，愿不愿意不急着圆回来，而是真的承认'原来我的旧模型还在'。"
`,Uh=`# 013丨自我决定理论：一流人物不可能是痛苦的卷王

## 讲什么

成长战略第四讲：**自我决定理论（SDT）**——心理学家德西和瑞安在 1980 年代提出的动机研究框架，过去几十年心理学关于动机研究的最高成就。

## 解决什么真问题

我们的教育系统产出了太多"听话型人才"：你考核什么他就把什么做得漂亮，可是自己很少主动。为什么有人永远需要被推着走？怎么才能变"要我做"为"我要做"？

## 核心论点

- **动机质量比动机强度更重要。**控制点在外是被动顺从，在内才是主人。外部控制能买来服从，买不到投入。
- 动机六层连续体：无动机 → 外部调节（胡萝卜大棒）→ 内摄调节（不内疚）→ 认同调节（我认同价值）→ 整合调节（这就是我的一部分）→ **内在动机（我爱做）**。
- 人类有三种基本心理需求：**自主感、胜任感、关系感**。环境满足它们，能动性自动发芽；压制它们，动机就会枯萎。
- **孔子早就说过：知之者不如好之者，好之者不如乐之者**——知者对应外部和内摄，好之者对应认同和整合，乐之者才是内在动机。

## 关键例证 / 金句

- 德西经典实验：给爱玩拼图的人发钱，兴趣反而下降，停止发钱就不玩了——**过度理由效应：外部控制会挤掉内在动机**。
- 谷歌 20% 自由时间诞生了 Gmail 和 AdSense；微软日本 2019 年做四休三，生产率提升 40%。
- **"人最强的不是自律，而是自驱。一流人物不可能是痛苦的卷王。"**
- 心流状态出现在第六层：你通宵达旦却不知疲倦，忘了时间也忘了自己。

## 如何应用

- 管理者/家长三招：**给选择给理由**（把"别人要我"翻译成"我为什么认同"）、**给挑战给反馈**（拆成能先赢一小局）、**给连接给支持**（从孤军奋战变成有人看见我）。
- 打工人自救：主动挖掘意义（填表格=为团队决策清洗数据确立真相）、搞微决策（在老板看不见的地方建立自己的秩序）、任务游戏化（计时挑战）。
- 布置无聊任务时必须解释意义，反馈对事不对人，给非控制性的反馈。

---

## 全文

> 以下为课程转录全文，已做去噪与语义分段；**加粗+底纹**处为核心论点与金句。

欢迎来到现代思维工具课，我是万维钢。今天是成长战略的第四讲，这个思维工具叫做**自我决定理论**。

老百姓对人才有个特别深的误解，那就是把听话当成优秀：你留个作业，他能按时完成；你出几道题他能做对；你交代的任务他保质保量做好；你让干啥他就干啥，你不让干啥他就不干，你指向哪里他就打向哪里。你说这就是优秀人才？**那不是人才，那是智能工具。**如果他做的事都是你发起的，真正的人才是你，不是他。听话不是一个特别之前的品质。

我们的教育系统产出了太多听话型人才，有识之士对此早就怨声载道。我听一个教授说，他面试一个研究生问：你来学我这个学科，你自己对科研、你的学术兴趣是什么呢？结果对方啥也说不出来——不是紧张，是脑子里真没有。一个外企高管说中国员工吃苦耐劳也聪明，但就是推一下才动一下：你考核什么，他就把什么做得漂亮，可是自己很少主动。**听话型的优秀距离一流人物很远。得有主动发挥，说"这个地方不太对，我要给改一改"，那才是一流人物。**

"要我做"和"我要做"区别在于**能动性**。能动性高的人能主动发起行动、做决定，对自身行为和环境施加控制，他不只是让生活发生在自己身上，更要塑造生活。当代很多制度都是按照 19 世纪工厂的需求设计的，核心是行为主义的胡萝卜加大棒：KPI、排名和打卡，让人像驴子一样按照既定路线跑。**但动起来不等于活起来。**一味的被动会让人越来越倾向于最低成本应付，也就是这个活你挑不出大毛病来，但是没有灵魂。现在很多人上班像上坟、上学像坐牢，都是没有能动性。

怎么才能有能动性呢？这个工具叫自我决定理论，简称 SDT，是心理学家爱德华·德西和理查德·瑞安最早在 1980 年代提出的框架，也是过去几十年间心理学关于动机研究的最高成就。**自我决定理论既不叫人立志打鸡血，也不劝人自律，因为它知道那些不是真正的能动性。**

**自我决定理论认为，动机质量比动机强度更重要。**高质量动机不但能让人愿意长期做下去，而且做得更健康。你的动机质量取决于你的控制点在哪里：如果在外面，你就是被动顺从；在里面，你才是主人。**一流人物一定是自我驱动、是内驱。外部控制能买来服从，可买不到投入。**

要想变被动为主动，人就必须把控制点内化。自我决定理论认为，人的动机从完全没有动机到完全自主之间有六种类型，构成一个从外控到内控的连续体，你也可以认为这是一个内化的过程。

**第一层是无动机**：我不动，因为我觉得动也没用。这不是懒，是断电了，是认定了我做不到、这样做没用、这对我也没意义。比如一个中学生本来不是不努力，可是怎么学都学不会，屡战屡败看不到任何进步，那他就可能进入冷漠的瘫痪状态，你怎么说他都不动——这也叫习得性无助。

**第二层是外部调节**：我动是因为你让我动。这就是我们最熟悉的胡萝卜加大棒，是行为主义大师斯金纳的世界：你有刺激，我有回应。为什么工作？为了钱。为什么不闯红灯？怕罚款。这一层的行为完全由外部奖励、惩罚或强制来驱动，只要监控一撤，行为就会停止。你不得不弄一大堆考核指标，但人们还是会偷懒。

**第三层是内摄调节**：我动是为了不内疚。到达这一层，就算没人监督、没有奖励，你也会去做一些事情，因为如果不干，你就会感到内疚、羞耻或者焦虑。有的人并不爱父母，但也会尽孝，因为他怕愧疚；有的人并不爱运动，但是要求自己每天必须健身，因为他有身材焦虑。**没有人拿鞭子抽你，是你把那个鞭子长在了心里。但心里的鞭子也是鞭子，所以你会活得非常累，惊人毅力的代价是巨大的内耗。**

**第四层是认同调节**：我动是因为我认同它有价值。这是进入能动性的转折点，你开始有了自主和选择感。一个人并不喜欢背单词，但他想用外语交流，所以没有考试没有奖励他也愿意背；一个医学生很讨厌背药理学，但他有治病救人的职业理想，于是刻苦背。因为是你自选的价值，你没有多少内耗；但因为你并不喜欢这个行为本身，有时候你还是会感到冲突——比如此刻我真的很想看个中文电视剧，但为了学英语，我选择看美剧。

**第五层是整合调节**：我动，因为它就是我的一部分。这是把价值跟身份认同整合在了一起。我健身不是为了减肥，而是因为"我这么酷的人本来就是天天健身的"；我走向战场不是因为我不怕死，而是因为我是一个战士。这是詹姆斯·克利尔在《掌控习惯》那本书中最推崇的励志方法。到了这一层，你的行为已经高度自主，你会感到非常协调，没有任何内心冲突，甚至充满自豪。

但那还不是最高境界。**最高境界是第六层，内在动机：我动，因为我爱动。**内在动机的动力完全源自活动本身，不需要外部后果。孩子在沙滩上堆城堡，程序员业余写开源项目，数学家解题，音乐家演奏——对他们来说这些活动本身就是目的，这是纯粹的生命力。你在这一层不但做事毫无阻力、充满自发的动力，而且还可能有创造性的超水平发挥：你通宵达旦却不知疲倦，你沉浸在创造与探索之中，你忘了时间，也忘了自己。我们精英日课专栏说的心流状态就出现在这一层。

**人最强的不是自律，而是自驱。一流人物不可能是痛苦的卷王。**现在想起孔子那句话——"知之者不如好之者，好之者不如乐之者"——简直就是很现代的动机理论：知者对应外部和内摄，你知道它重要但不一定会去做；好之者对应认同和整合，你认可它、你愿意投入；乐之者才是内在动机，你干这个事因为你就爱干这个。

当然现实中大量的任务是有意义但不有趣的，不可能全靠内在动机。自我决定理论并不是让你把所有外在动机都开除，而是让你尽可能把外部任务内化、把控制点往内移。那我们怎么内移呢？这是自我决定理论的关键洞察。

**人类有三种与生俱来的基本心理需求：如果你所处的环境能满足这三种需求，你的能动性就会自动发芽；而如果这三种需求被压制，你的动机就会枯萎。动机不是被打的，而是被喂饱的植物。**这三种心理需求也可以叫心理营养，是**自主感、胜任感和关系感**。自主感就是你拥有选择权，你的行为是出自你自己的意愿——我上这个班不是因为我必须上班，而是因为我选择来你们公司上班。胜任感就是这个事对你来说不是那么简单、是个挑战，但是你跳一跳又能够得着，所以你能从中获得正向反馈——你看到了进步，你就觉得有意思，这也是产生心流的必要条件。关系感则是被关心和被理解、归属于某个群体的感觉，我们更愿意内化我们有归属感的团体的目标。

自我决定理论已经积累了 40 多年的实验证据，可谓千锤百炼。最经典的一个研究是创始人德西做的：让两组人玩拼图，一组有奖励拼完给钱，另一组纯玩。结果发现，对于那些本来就觉得拼图有趣的人，如果你给他发钱作为奖励，他玩拼图的兴趣反而下降了；一旦停止发钱，这些人就不玩了。而那些一开始没拿钱的人却是继续玩，而且连休息时间都还在玩。**这就是著名的过度理由效应：外部的控制（比如金钱）会挤掉内在的动机，金钱奖励降低了自主感。**

现代脑科学也发现：当人处于自主动机的时候，大脑的多巴胺系统和那些负责深度学习、创造性解决问题的脑区更加活跃；而处于受控动机的时候，大脑更多调用的是负责压力反应和机械执行的区域。**简单说，在复杂认知任务中，心情好、感觉自由会让你的脑子转得快。**这就解释了为什么谷歌早年允许工程师用 20% 的时间干自己想干的项目而诞生了 Gmail 和 AdSense；这也解释了为什么微软日本在 2019 年尝试做四休三、缩短工时给员工更多的自主安排空间，结果生产率反而提升了 40%。

自主感、胜任感和关系感不是文青品味，而是人类基础需求的一部分。很遗憾这三种需求并没有被写进基本人权，但我们可以想见，缺乏其中任何一项营养，人都不会真的幸福。**在你要求别人或者自己"自律""努力"之前，应该先问：他有选择权吗？他得到了正向反馈吗？他感到安全和被支持吗？**

既然能动性来自自主感、胜任感和关系感的滋养，自我决定理论的核心操作就是三件事：**第一，给选择给理由，把任务从"别人要我"翻译成"我为什么认同"；第二，给挑战给反馈，把任务从"太大"拆分成"我能先赢一小局"；第三，给连接给支持，把任务从孤军奋战变成有人看见我。**

咱们看两个应用场景。**第一个场景，你是管理者、老师或家长。**千万别当控制狂，你必须想办法给人营养、哺育别人的能动性。首先，当你布置一个无聊的任务时，一定要给人解释清楚其中的意义：不要说"把这 100 页文件复印了，别问为什么"，要说"我们下午的客户会议非常关键，这些资料能帮助我们拿下合同，大家都指望你的协助"——这就帮助对方从外部调节转化到认同调节。其次要给选择权：不要说"你必须先做数学再做英语"，要说"今天的任务是数学和英语，你想先做哪个？你想用什么方式完成？"哪怕是微小的选择，也能极大地提升自主感。然后要给非控制性的反馈：**反馈必须是对事不对人**。不要说"你真聪明"或者"你真笨"——评价人就是控制人，因为人会在你的评价体系下患得患失。要说"你刚才那个解题思路很有创意，特别是第二步"，哪怕他别的思路都不对，他也获得了一点点胜任感。最后还要给关系认可："我理解你觉得这个很无聊，但我相信你能做好，你对我很重要。"

**第二个场景，你是打工人，而老板是个控制狂。**你不想漂流，你就要重构这个叙事。首先是主动挖掘意义：你做这个事不是因为老板让你做，而是你自己的选择——搬砖是为了盖大楼，填 Excel 表格是为团队决策清洗数据、确立真相。尽量把被迫的任务和你的个人长远价值观挂钩。如果这个活实在没意义，那就是为了锻炼我的耐心，总比"为了不被老板骂"高级得多。关键是你总可以搞微决策：在老板看不见的地方建立自己的秩序，你决定干活的节奏和交接的风格，你总可以随口开几句玩笑，你摆的砖有你的美学印记，再不济你也可以把办公桌布置成你喜欢的样子。你还可以把任务游戏化：这件事真的很无聊，那你就给自己计时，看能不能比昨天快了十分钟——强行植入挑战和反馈，可以收获一点胜任感。

快乐的人都是这样的：那个把历史课讲成单口相声的中学老师，那个在代码注释里写排剧、把错误日志写成微型侦探小说的程序员，那个在菜市场里把两块钱一块的豆腐切出米其林摆盘感的豆腐西施——**哪怕最频繁的工种，他们也一定要给你制造点不平凡。好消息是，一流人物也都是这样的。**

听话型优秀只能让人走那么远。到了一定距离，你前面将是一片无人区：没有人告诉你下一步该做什么，没有攻略，没有考核标准，那里的问题是你自己定义的，路径是你自己选择的，代价是你自己承担的。你得能在模糊边界里扛事，而不是只在明确流程里跑。

**其实自我决定理论只是把人当人而已。它只不过发现：当你把控制点内移、活得像个"人"的时候，你的发挥恰恰也是最好的。**我敢说这是我们这个世界最好的一个性质。真是谢天谢地——不然要像有些人想的那样，吃得苦中苦方为人上人，先插自己两刀才能练神功，一流人物都卷得不成人形，那可就太可怕了。

下一讲我们来说说自由能原理。
`,Vh=`# 014丨自由能原理：活着就是对齐

## 讲什么

成长战略第五讲：**自由能原理**——神经科学家卡尔·弗里斯顿 2005 年前后提出的大统一理论，号称"神经科学的大一统"，既回答了"生命是什么"，又告诉我们"生命应该干什么"。

## 解决什么真问题

为什么维持"自我"这么难？为什么我们会被意外打得措手不及？为什么抑郁症患者听不进好消息？为什么拖延的人明明不懒？自由能原理用一个框架回答所有这些。

## 核心论点

- **生命的策略是把生存当成一个优化问题：想持续活着而不被打散，就要尽量把自由能最小化。**自由能约等于"惊讶"——统计意义上的意外，你跟环境的不融洽程度。
- **活着就是让自己跟环境双向对齐**：要么改变自己的想法去适应世界（知觉推断），要么改变世界来符合自己的想法（主动推断）。
- 马尔可夫毯是把生命系统和外部环境分开的那张"皮"：感官状态是入口，行动状态是出口。**生命想活着就必须经营好这张毯子。**
- 一切的艺术在于惊讶的度：**太大你容易崩溃，太小你会被钝化。为了将来的惊讶不至于措手不及，你现在最好来点有限的小惊讶。**
- 好奇心不是可有可无的情绪调料，而是**智能的战略设定**。

## 关键例证 / 金句

- 热带鱼：基因设定 25°C 的水，感官告诉你水温 25°C 就一点也不惊讶（自由能低、很舒服）；告诉你 5°C 你就很惊讶——不解决高自由能，系统就会崩溃。
- 公司就是一台消除惊讶的机器：环境是市场，感官状态是用户反馈/财务数据/市场信号，行动状态是产品迭代/销售策略/组织调整。
- 拖延症的新解释：**不是懒，是你在躲避预期的高惊讶**——正确做法是"把宏观预测改成微观预测"：打开电脑、建个空白文档、写个标题，让预测成功，动能就起来了。
- **"很多痛苦不是你的情绪太强，而是你的模型太硬。"**（计算精神病学视角：抑郁症是持有关于未来的极度负面先验信念，把正反馈当低精度噪音忽略掉。）
- GPT 的浪漫洞察：**所谓爱一个人，就是将对方纳入自己的马尔可夫毯之内**——你们互相学习了对方的生成模型，相互预测误差降到最低，形成共享的低熵状态。

## 如何应用

- 遇到难以接受的惊讶时问：让谁跟谁对齐？是自己这个模型不对，还是外界环境不对？同事水平太低→换环境；觉得整个世界都不对→更新自己的认知模型。
- 主动寻求惊讶：考前复习别看笔记（惊讶最小最舒服），要做测试题暴露模型漏洞。
- 改变习惯难是因为要拆解模型、暴露在高自由能中——**制造一个小到几乎不会失败的行动，让正面预测成真**。

---

## 全文

> 以下为课程转录全文，已做去噪与语义分段；**加粗+底纹**处为核心论点与金句。

欢迎来到现代思维工具课，我是万维钢。今天是成长战略的第五讲，这一讲的思维工具叫**自由能原理**，它是英国神经科学家卡尔·弗里斯顿最早在 2005 年前后提出来的。弗里斯顿 2010 年的一篇讲自由能理论的综述论文，现在是神经科学领域被引用次数最高的文献之一。自由能原理号称是神经科学的大统一理论，被认为是物理学、生物学、神经科学与控制论的集大成之作——**因为它既回答了生命是什么，又告诉我们生命应该干什么。**

你不妨自己先想：生命是什么？一颗恒星，生前那么壮观，质量大到吓人，能量输出高到离谱，可它最后还是会湮灭，它不会给你生出一颗新的恒星来。而一粒种子风一吹就跑，但它居然能一层层长出结构、维持结构、复制结构，乃至于长成大树，还繁衍后代。它们的区别在哪呢？从物理学的角度看，走向无序是最自然的事情，这就是熵增定律：你再强，终究也得跟自然完全融为一体，再也看不出来。**可是生命体却是一种长期都搅不匀的东西，它能在时间里保持形状、保持边界、保持自我**——当然这并不违反熵增定律，因为如果你把它和周围环境在一起算总账，熵还是增加的；但生命个体作为一个开放系统，却做到了长期保持结构不散，而且还能繁衍后代。生命是怎么做到的呢？

弗里斯顿的自由能原理说，**生命的策略是把生存当成一个优化问题：你要想持续活着而不被打散，就要尽量把自由能最小化。**

想象你是水里的一条鱼，你怎样才能愉快地生活呢？很多养生学说讲什么要融入自然，但你不可能完全融入环境，否则你就成了一堆水而不是鱼。在水里做水是容易的：你没有内外之别，外界怎么变你就怎么变，你不需要感知、记忆和智能，你随波逐流甚至连形状都谈不上。但做鱼就不容易了：因为你非得坚持有个形状，非得保留独立性，所以你很脆弱。有形状就有边界，有边界就有"我"和"非我"，有"我"就得确保这个"我"别被环境抹平——熵增定律会强烈地想要把你抹平。为了不被抹平，你必须确保自己跟环境能融洽地相处；为了保持融洽，你就必须做两件事：**一个是改造自己，让自己的结构更能适应环境；另一个是改造环境或者换环境，让环境对自己更友好。简单说，活着就是让自己跟环境双向对齐。**这就是自由能原理最根本的洞察。

我对比一下你就明白了。以前人们的认识是说生命是靠刺激-反应活着，也就是看到吃的就张嘴、看到危险就跑。自由能原理告诉你不是——那样太慢了会死，因为环境是复杂多变的。**真正的生命必须有智能，必须是一台预测机器：你不能等着环境来弄你，你必须走在时间的前面。**所谓对齐，就是你不断地预测环境会发生什么，让你的预期和你接收到的输入别差得太离谱，确保环境的变化符合你的生存需求。

所谓自由能原本是个物理学术语，弗里斯顿借来专门描写这种对齐的失败程度——这里有复杂的数学，严格说来应该叫"变分自由能"，但那些你都不用管，**你只需要知道：自由能约等于惊讶。**这个惊讶可不是惊喜，而是统计意义上的意外，或者说就是你跟环境的不融洽程度。比如你是一条热带鱼，基因设定的生活环境是 25 摄氏度的水。如果感官告诉你现在水温是 25 摄氏度，你就一点都不惊讶，自由能很低，你很舒服；而如果感官告诉你现在水温是 5 摄氏度，你就很惊讶了——不解决这个高自由能，你的系统就会崩溃。**自由能原理的核心思想就是：凡是能长期存在的系统，都在一直努力最小化自由能，也就是最小化惊讶。**

要理解生命具体是怎么做的，我们先要了解一个概念叫**马尔可夫毯**——它相当于是把生命系统和外部环境分开来的那张皮，也就是"我"和世界的交界面。马尔可夫毯包含两类状态：**感官状态是外部影响内部的唯一入口，而行动状态是内部影响外部的唯一出口**。你只能通过马尔可夫毯上的感官状态去推测外面的世界正在发生什么——你看到的不是世界本身，而是世界打在你毯子上的投影；同样地，你是通过马尔可夫毯干预外界。马尔可夫毯就是你连接内外的信息输入输出接口。**生命想活着，就必须经营好这张毯子：让入口足够可靠，让出口足够有效，让内外之间形成可持续的耦合。**

如果你的预测跟感官状态一致，你很好；但我们的预测常常跟感官状态不一致，总有惊讶。对此你有两个基本对策，对应前面说的改造自己和改造环境。**第一招是改变想法去适应世界，这叫知觉推断**：比如你走夜路看到前方有个黑影，还以为是鬼，走进才发现是树桩，于是你更新信念"那是树桩"，这就是通过改变内部模型来降低自由能。**第二招是改变世界去符合自己的想法，这叫主动推断**：比如你的生理构造要求环境必须是暖和的，可是现在房间里很冷，你总不能临时改变生理构造，你可以穿上厚衣或者打开暖气——这就通过行动改变了周围的小环境，也是降低自由能。不过主动推断还不只是改造环境，它包括主动到外边探测一下周围的环境以便更新信念。知觉推断的精度也很关键：你得能判断哪些信息是重要的信号、哪些只不过是噪声，哪些该相信、哪些应该忽略。

在这个视角下，不只是动植物，还包括一个细胞、一家公司、一个组织、一种文化——**只要它们作为系统能稳定存在一段时间，就必定遵循了最小化自由能的策略。**要想在不确定环境里维持边界，你就必须形成某种"预测—误差—更新—行动"的闭环。就拿公司来说，它所处的环境就是市场，它的自身结构就是战略、文化、流程和团队能力，它的马尔可夫毯上的感官状态就是用户反馈、财务数据和市场信号，行动状态就是产品迭代、销售策略和组织调整。**公司是一台消除惊讶的机器，管理公司就是要快速收集惊讶，然后通过高频的知觉推断和主动推断消除误差。**

这听起来似乎很简单，你可能马上说：那我直接找个最熟悉的环境待着不就行了吗？完全没有任何惊讶。其不然：因为你需要觅食，你需要繁衍，你需要发展壮大，而且你不变环境也可能变，所以你必须主动出去探索才行。**你不是为了预测而预测，你是为了生存而预测。所以你不能寻求直接把惊讶变成零——为了将来的惊讶不至于措手不及，你现在最好来点有限的小惊讶。一切的艺术就在于这个惊讶的度：太大你容易崩溃，太小你会被钝化。**

在我看来，操作自由能原理的一切心法，就在于怎么把握当前的惊讶度。比如幼儿园孩子本来就刚刚接触世界，看什么都新鲜，你要是让他们每天接触太多新东西、动不动就一惊一乍，他们肯定手足无措啥也学不会；最好让环境尽量稳定，每天稍微来点新东西，他们才能学进去。有人用自由能原理分析过蒙特梭利式教育，发现它们就是精心设计了一种低熵的教室环境，连每件教具都有固定位置，这就降低了儿童探索时的无效惊讶，才能专注学习到好处的惊讶。**恰到好处的惊讶，正是刻意练习理论说的那个"学习区"，也是心流和自我决定理论说的那种胜任感，也是我们精英日课专栏一再讲过的那个"喜欢=熟悉+意外"。**这是生命的一个最基本性质：我们需要降低惊讶，但我们也需要稍微有点惊讶——平时来点可控的小惊讶，你才能提前对齐，才不至于面对崩溃式的大惊讶。

**这也是好奇心的根本：好奇心不是可有可无的情绪调料，而是智能的战略设定。**现在主流 AI 都是基于强化学习训练，对好奇心接纳不足，弗里斯顿本人已经加入了一家 AI 创业公司叫 Verses AI，打算用自由能原理的思想开发新型神经网络。**真正的稳定不是把变化消灭，而是把变化纳入模型。**

咱们看几个自由能原理的日常应用。最基本的用法是：当你遭遇任何难以接受的惊讶的时候，你都应该想一想——**让谁跟谁对齐？是自己这个模型不对，还是外界环境不对呢？**如果你发现周围同事水平都太低，那可能是环境不对，你需要换环境；但如果你发现社会很不公平、这个世界整个就不对，那你也许需要更新自己的认知模型。

更好的用法是主动寻求惊讶。比如考前复习，多数人喜欢看笔记甚至对着课本猛念，因为这样惊讶最小最舒服——可是你此时不惊讶，考试就得面临大惊讶。**正确做法是主动推断：找些测试题来做，制造适度的惊讶，暴露你模型的漏洞，才能把不确定性压下去。**

人们最常犯的错误就是因为害怕大惊讶而沉溺于当前的不惊讶。比如说拖延症：你明明有篇论文需要写，可是你不写——**这其实不是懒，是你在躲避预期的高惊讶。**你正确地预测到写论文这个活动会遇到很多困难、可能失败，所以你自动转向最小化预期自由能的路径，也就是躺在床上刷手机。可是你终将面对交稿日期。自由能原理的建议是**把宏观预测改成微观预测**：我只想打开电脑、建一个空白文档、写个标题——这总能做到吧？你做到了，让预测成功，获得微小的多巴胺，动能就起来了。

**很多痛苦不是你的情绪太强，而是你的模型太硬。**有一种计算精神病学视角的解释框架认为：抑郁症是因为患者持有关于未来的极度负面的先验信念，比如"我做什么都是失败的"，结果就算外界给到了正反馈——比如家人鼓励、做事取得小成功——你明明看到了自己预测的误差，却直接给当做低精度噪音忽略了。**你的模型无法更新，就陷入自我验证的负面循环。**也许抑郁是因为马尔可夫毯过滤掉了好的信息，那你能不能对好的信息更敏感一点呢？如果你预测自己发出这封邮件人家也不会回，可是事实证明人家真回了，你能不能修改自己的模型、变作一点？

按照自由能原理，**你的性格、偏好和价值观——你的内核自我——本质上是你过去为了适应环境而固化下来的、具有极高精度的预测模型，而你的习惯则是模型的自动化执行**，它节省了计算自由能的能量成本。为什么改变习惯这么难呢？因为改变意味着拆解模型，得让系统暂时暴露在焦虑和不确定——也就是高自由能——之中。**你难以改变习惯，是因为你不愿意支付短期自由能上升的成本。**制造一个小到几乎不会失败的行动、让正面预测成真，是主动改进模型的通用好办法。

总而言之，**活着就是对齐：要么让你的理解跟世界对齐，要么让世界跟你的对齐。**我们不能只是被动的靠知觉推断，我们必须主动出去探索和行动，这是作为独立个体维护自身不崩溃的基本义务。因为你不想在水里做一堆水，你坚持要做鱼——你跟环境必须内外有别，又必须融洽相处。

我问 AI 对自由能原理还有没有更深的洞察，GPT 说了一个特别浪漫的：**所谓爱一个人，就是将对方纳入了自己的马尔可夫毯之内。**花时间相处，你们学习了对方的生成模型，最终双方的相互预测误差降到最低。你不需要言语就能懂他，他不需要解释就能懂你，你们形成一种共享的低熵状态。**在这个混乱的宇宙里，找到一个能与你共同最小化自由能的人，建立一个共同抵抗风雨的超生物体——这不就是最科学的爱情吗？**

下一讲的思维工具叫做主动高认知负荷，我们来说说注意力的 Pro 模式。
`,Wh=`# 015丨主动高认知负荷：注意力的 Pro 模式

## 讲什么

成长战略第六讲：**主动高认知负荷**——不给注意力做防御性管理（卸载 App、关通知），而是主动把任何任务变成高认知负荷任务，手动开启注意力的"Pro 模式"。

## 解决什么真问题

大家都在讲守住注意力，但建议都是防御性的、纪律性的。真问题是：你看起来在干什么和你的大脑实际上在干什么，是两码事。**专注不是姿势，不是意志力，更不是美德——专注是你做的事本来就该调用这么多的注意力资源。**

## 核心论点

- 工作记忆（内存）极其有限：以前说 7±2 个组块，现在认为 4 个就不错。**认知负荷就是当前任务对你这点内存的占用率。**
- 任务简单时工作记忆大量闲置，大脑的**默认模式网络**就接管——扫描环境、反刍过去、焦虑未来，也就是走神。**真正的专注不是靠一直走神，而是用高难度任务挤占走神。**
- **上下文切换成本**：处理高认知负荷任务就像运行大型 3D 游戏，需要漫长的"预加载"把长期记忆搬进工作内存；老板一句"中午吃啥"就等于拔掉内存电源。
- **主动高认知负荷 = 手动强行开启注意力的 Pro 模式**：像 AI 的深度思考模式一样，不等待世界给你难题，而是把世界本身变成一道难题。

## 关键例证 / 金句

- 2010 年《科学》论文《走神的心是不快乐的心》（Killingsworth & Gilbert）：83 个国家 5000 人 25 万数据点——**我们清醒时 46.9% 的时间都在走神，而走神的时候我们不快乐；是走神导致了不快乐，而不是不快乐导致了走神。**
- 《金融时报》2025 年报道：2014–2024 十年间美国年轻人尽责性显著下降、神经质上升——研究者分析跟现代世界让人越来越难以集中注意力有关。**人格是习惯的积分。**
- 刷短视频可以刷完笑一下过去，也可以分析它的爆点、运镜节奏、情绪钩子、叙事结构、平台分发逻辑——**前者是被动消费，后者是逆向工程**。
- **"被动消费的话哪怕读的是康德也是浅阅读；开启 Pro 模式哪怕看猫咪视频也能进行深度思考。"**

## 如何应用

- 对输入加载约束和问题，从"被动看"升级成"建构看"：逼自己解释、总结、找规律。旅游时想宫殿屋顶弧度跟排水技术的关系；看新闻问消息源在哪、谁会受益；开会分析老板为什么这个时间点说这个。
- 认知负荷低的事（打扫卫生做饭）可以一心多用；**高认知负荷的事（建模型、探索型任务）必须找大段时间关起门来自己做**。
- 需要深度工作的不是看起来很高级的行业，而是**要求你同时调取很多相互依赖变量的任务**。

---

## 全文

> 以下为课程转录全文，已做去噪与语义分段；**加粗+底纹**处为核心论点与金句。

欢迎来到现代思维工具课，我是万维钢。今天是成长战略的第六讲，这一讲的思维工具叫**主动高认知负荷**。

有见识的人不会相信世界上最稀缺的资源是金钱——金钱可能是世界上最不稀缺的资源。有些人会认为最稀缺的是时间，毕竟每个人每天都只有 24 小时，但时间是不能直接交易的。**真正稀缺的是你的注意力。**注意力是你持续分配给某个任务的认知资源，是你对世界上某一点的思维聚焦，它同时意味着对极其海量信息的无情屏蔽。你只有这么多注意力，可是有那么多好东西你不看，你偏偏在关注这个——这难道不是最根本的投资、最高级的奖赏和最大的谜团吗？你的每一次点击、每一次停留、每一次情绪起伏，都可能是被科技巨头精心计算并拿去变现的资产。有人说这叫注意力经济，可是考虑到你的注意力多数情况下是被人家免费吸引走的，我看这更像**注意力的猎场**。也许毁掉一个人最简单的办法就是给他无限的、低门槛的、碎片化的浅娱乐，让他觉得思考是一件极度的事。

所以有识之士都强调守住注意力。一般的建议都是防御性和纪律性的：卸载 App、关掉通知、忍住诱惑，功夫不行可以去学冥想禅修，要不然就可能是 ADHD，实在不行就吃药。更主动的建议是去做那些能把注意力变成生产力的事，比如乔治城大学计算机科学教授卡尔·纽波特的两本畅销书——《深度工作》强调在无干扰状态下专注高难度任务，《精要主义》主张减少事务、顺应自然节奏、追求高质量从而实现无倦怠的高成就。这些都对，**但这些建议关注的都是外部行为：你有没有坐在书桌前、有没有断网。可是你看起来在干什么，和你的大脑实际上在干什么，是两码事。**如果你的任务就是填写无聊的报销单，或者你正在听一个毫无营养的报告，你有啥可专注的？反过来说，如果你在玩一个高难度游戏或者正在调试一段代码，你根本不需要提醒就会自动专注。**专注不是姿势，不是意志力，更不是美德。专注是你做的事，本来就该调用这么多的注意力资源。**

这一讲的思维工具叫主动高认知负荷，希望能帮你合理运用注意力。"主动高认知负荷"这个提法是我发明的，缘起是教育心理学家约翰·斯威勒 1988 年提出的认知负荷理论。

咱们先说什么叫认知负荷、怎么主动。我们首先要知道**人脑的工作记忆**——也就是你此刻可以同时考虑的东西数量，相当于计算机的内存——**是极其有限的**。以前心理学家认为工作记忆的容量是 7 加减 2，也就是你大约可以同时考虑七个组块；现在则认为你能考虑四个就不错了。换句话说，你这台计算机的硬盘（也就是长期记忆）挺大，你知道很多事情，但是你的内存很小，所以你每时每刻可以调动的信息很少。**所谓认知负荷，就是当前任务对你这点内存的占用率。**这里有内在负荷（任务本身有多少元素要同时处理），有外在负荷（属于无价值的消耗，比如教材排版太差、老师口音太重或者环境太吵），最关键的则是**增益负荷**——现在被认为是内在负荷的一部分，特质你主动投入用于建构图式、也就是把新知识整合成大脑模型的内存资源。一切信息产品都有义务给人降低外在负荷，这样人家才能把宝贵的内存用在有用的地方。

但就算认知负荷很低、你感到轻松，大脑也不会完全空转。**如果任务简单，你的工作记忆有大量闲置空间，大脑的默认模式网络就会自动接管，开始扫描环境、反刍过去、焦虑未来——也就是走神。真正的专注不是靠意志压走神，而是用高难度的任务挤占走神。**外在负荷要降，内在负荷要管，真正带来学习和产出的是增益负荷。

当我们全神贯注于一个高难度任务的时候，我们特别不希望被打扰，以至于很多人认为专注就是不被打扰。这是为什么呢？**因为你有个上下文切换成本。**还是把大脑想像成计算机：处理高认知负荷任务，就像是运行一个大型游戏，需要渲染复杂的三维场景。在开始工作之前，大脑需要一个漫长的预加载过程，把长期记忆里的概念、逻辑、变量这些上下文搬运到工作记忆这个内存里，构建一个复杂的临时模型。一旦这个模型搭建完成，你就进入了心流，运行效率极高，而你的内存已经被全部占用。这时候如果老板突然问你一句"中午吃啥"，那可就是拔掉了内存的电源：为了回复老板，你必须在清空的内存里加载"午饭菜单"这个低级模型；等回答完了你想回到工作，就必须重新经历那个痛苦的预加载过程，重新把那些复杂的逻辑一砖一瓦地搭起来。**你平白无故花了一笔加载时间，而且搞不好还会出错。这就是为什么程序员最恨打断，也是为什么高水平工作不能多任务处理。**

这样说来，不是什么任务都需要专注：认知负荷低的事，比如打扫卫生、做个饭，你一边跟人聊天、一边刷着手机、一边听着音频节目一边做都没问题；但是高认知负荷的事，你就必须找个大段的时间关起门来自己做。事务型和流程型的任务都不需要太多内存，熟练了就可以脚本化，适合批处理；只有建模型和探索型的任务——要么需要你同时考虑很多元素，要么不确定性高——才是高认知负荷任务。**需要深度工作的不是看起来很高级的行业，而是要求你同时调取很多相互依赖变量的任务。最值钱的注意力，是你维持复杂上下文的能力。**有些人毕业以后就再也没做高认知负荷的事，他们已经无法想像什么是预加载。

接下来是我的一个洞察。**你可以主动把任何任务变成高认知负荷任务，单方面提高增益负荷。**现在的 AI 大语言模型都有快速模式和 Pro（或者 Thinking）模式之分：前者只是平直觉顺着你的话头给答案，后者要调动大量的计算资源，先后台进行长的思维链推导，再给你答案。**主动高认知负荷，就是你要手动强行开启注意力的 Pro 模式。**

比如观看一个短视频，你可以刷完笑一下就过去了；但你也可以一边看一边分析它：它为什么有意思呢？它的爆点在哪里？它的运镜节奏、情绪钩子、叙事结构、平台分发逻辑都是怎样的？它的评论区简直就是个人类学样本。**前者是被动消费，后者是逆向工程。**AI 在 Pro 模式下怎么都能想出一点东西来，而你也可以如此。**所以真正的区别既不是姿势也不是任务，而是思考模式：如果只是被动消费，哪怕你读的是康德，也是浅阅读；但如果你开启了 Pro 模式，哪怕你是看猫咪视频，你也能进行深度思考。主动高认知负荷就是不等待世界给你难题，而是把世界本身变成一道难题。**

旅游的时候不要只知道拍照发朋友圈，可以想：为什么宫殿的屋顶是这个弧度？这跟当时的排水技术有什么关系？这种黄色琉璃瓦在当时的生产成本是多少？这反映了怎样的皇权财政？看新闻不要只听故事，可以问它的消息源在哪里、谁会从中受益；开会不要只听老板说什么，要分析他为什么在这个时间点说这个、他在演示什么；甚至刷剧，你都可以质疑编剧为什么在这里安排一个反转，如果让我写我会怎么改。**给输入加载约束和问题，从被动看升级成建构看，逼自己解释、总结经验找规律，你会有大的收获。**现在有了 AI 做这些就更方便了，我有很多文章选题都是从 X 上得到的灵感——我能顺着一条八卦新闻、一句评论，追踪出一篇论文和一个理论。**习惯了主动高认知负荷，你会发现世界四处漏风，布满了亏真相的管道。**

认知负荷是特别重要的一个状态参数，你应该对自己大脑处于哪一种模式非常敏感才好。那你可能说：这也太累了，做人为什么要这么紧绷呢？我不能只想静静吗？当然可以，**但高认知负荷才是快乐的源泉**。

2010 年，哈佛大学心理学家马修·基林斯沃斯和丹尼尔·吉尔伯特在《科学》杂志上发表过一篇著名的论文，题目就叫**《走神的心是不快乐的心》**。他们搞了个 iPhone App，在人们的真实生活中随机弹窗，问被试三个问题：你现在感觉好吗？你在做什么？你是否在想与当前活动无关的事情？他们收集了来自 83 个国家、5000 多名参与者的 25 万个数据点，结果发现**人类极其爱走神**：除了性活动这一项很专注，其他所有活动中人们走神的比例都超过了 30%；总体看，**我们清醒的时候有 46.9% 的时间都在走神**。

关键是，**走神的时候我们不快乐**。数据分析显示：无论你在干什么，只要你的注意力游离了，你的幸福感就会下降。反过来说，哪怕是专心地刷碗，也比刷碗时想别的事更快乐。而且研究者用时间序列分析建立了其中的因果关系：**走神导致了不快乐，而不是不快乐导致了走神。**为啥呢？前面说了，低认知负荷状态会让大脑切换到默认模式网络，而这个网络通常倾向于反刍过去、担忧未来或者进行消极的自我评价——它常常是一个不快乐网络。而当你全神贯注于一个高负荷任务时，你的自我意识消失了、时间感消失了、焦虑也消失了，你会进入心流。**认知空转容易带来内耗。这就是为什么有些人工作了一天虽然身体很累但精神很爽，而有些人刷了一天手机却觉得灵魂被掏空。活在当下不是一句鸡汤，是统计学结论。**

我非常不想制造焦虑，但是低认知负荷值得你焦虑。《金融时报》2025 年报道了一项跨越十年的大型研究，发现年轻一代的性格正在群体性地往不好的方向漂移：从 2014 到 2024 的 10 年里，美国年轻人的尽责性显著下降、神经质上升，宜人性和外向性都下降。40 岁以上的人也有类似的趋势，但幅度小一些。简单说，**人们正在变得越来越不能扛事、越来越容易崩溃、越来越难以跟人合作**。研究者分析，这些很可能跟现代世界让人越来越难以集中注意力有关。**人格是习惯的积分**：当你习惯了 15 秒一个短视频的反馈循环，习惯了随时被打断，当你的大脑长期处于低认知负荷模式，你的神经回路就会被重塑——你变得无法忍受延迟满足，无法维持长期的目标，无法处理复杂的因果链条。**低尽责性、高神经质是现代社会最糟糕的生存配置。**现在有很多人无法连续思考 30 分钟。当所有的 App 都在试图用最简单的刺激去喂养你的时候，**主动高认知负荷这个能力就成为一种极其稀缺的阿尔法优势**。

下一讲的思维工具叫 WOOP，我们来拆解一下怎么把愿望变成行动。
`,Gh=`# 016丨WOOP：从生活的默认设置中觉醒

## 讲什么

成长战略第七讲：**WOOP**——心理学家加布里埃尔·厄廷根推广的一套心智策略，由 Wish（愿望）、Outcome（结果）、Obstacle（障碍）、Plan（计划）四步思考流程组成，能把愿望变成行动。

## 解决什么真问题

98% 的人终其一生处于"漂流"状态：没有明确目标，或者有也缺乏精确计划，让环境、运气和身边的人替自己做决定。一天忙到飞起，晚上躺下猛然想起"我今天到底干了啥"。**你微观的每一步都算不上错，但你宏观上完全不掌控自己的命运。**

## 核心论点

- 马斯克："我从来不相信这个世界上有什么行动力不足的事情，**所有的行动力问题其实都来源于精确性的不足**。"WOOP 还你精确。
- **自律不如习惯，习惯出自系统。**自律是对当下冲动的抑制，习惯是情境触发的自动化行为，系统是把关键行为外包给结构的机制。
- WOOP 两件武器：**心理比对**（幻想完美好的 Outcome 之后，立刻无情地把注意力拉回现实中的 Obstacle）+ **执行意图**（if-then：如果障碍出现，我就做某个动作）。
- 把愿望编译成可执行代码：**我想要 X，我最怕 Y，如果 Y，我就做 Z。**
- 副作用是心境清明：WOOP 过的任务等于告诉大脑"这件事已经处理了"，会从工作记忆中移除——**大脑是用来思考的，不是用来惦记事的**。

## 关键例证 / 金句

- 奥地利器官捐献同意率接近 100%，德国只有 12%——仅仅因为默认选项不同。**默认设置大概是大多数人一生最昂贵、压迫性最强的叙事。**
- 幻想的危害：幻想"我减肥成功了"时血压降低、身体放松，**大脑以为你已经做到了**，能量水平反而下降。
- 痴呆症患者照护者案例：W 本周保持耐心 / O 彼此尊严都能维护 / O 他一个问题问我十遍时我真想爆发 / P **如果病人再次重复问题，我就对自己说"这是病在说话，不是他在说话"，并握住他的手**。结果压力水平显著降低。
- **"WOOP 不要求你立即变成一个不一样的人，它只要求你在那一秒钟别漂流。"**

## 如何应用

- 控制消费：如果压力大想网购→先把商品加入购物车冷冻 24 小时，转而洗个热水澡或散步 15 分钟。
- 职场雄心：如果会上心跳加速不敢开口→先说"我用 30 秒讲个结论"，然后把准备好的第一条要点念出来。**你不需要消灭恐惧，只需要让恐惧变成行动的触发器。**
- 切记：第二个 O（Obstacle）是你内心的障碍，千万别归因于外部环境。

---

## 全文

> 以下为课程转录全文，已做去噪与语义分段；**加粗+底纹**处为核心论点与金句。

欢迎来到现代思维工具课，我是万维钢。今天是成长战略模块的第七讲，这一讲的思维工具叫 **WOOP**。

有个美国作家叫拿破仑·希尔，可谓是成功学这门业务的祖师爷之一。1938 年他完成了一本内容过于惊世骇俗的书，以至于家人和朋友都劝他不要出版，一直到他去世多年后的 2011 年这本书才得以面世，叫做《战胜恶魔》。在书里，希尔对一位魔鬼进行了采访，问魔鬼到底是如何控制人类的。魔鬼说很简单，我不需要什么复杂的阴谋，我只需要让人保持一种状态：**漂流**。所谓漂流，就是一个人没有明确的人生目标，或者即便有也缺乏精确的计划，所以不由自主地随波逐流——这样的人让环境、运气和身边的人替自己做决定，就如同一根木头在水里飘着走。希尔借魔鬼之口断言：**98% 的人类终其一生都处于这种漂流状态。**

难道你不是这样吗？一天忙到飞起：微信回了，邮件清了，会议开了，表格填了，顺带看了两小时短视频；晚上躺下，猛然间想起——我今天到底干了啥？**你微观的每一步都算不上错，但是你宏观上完全不掌控自己的命运。你没有躺平，但你只是看似在努力。**有时候你会拖延，不是因为懒，而是因为不知道该做什么、先做什么、做到什么程度算完。有时候你也想来个大动作，但你恐惧批评，最终还是继续浑浑噩噩地漂流。希尔说这是一种催眠节律：你那个安稳的自动化漂流生活把你催眠了，你被固化成"就是这样的人"。这就是 98% 的人的平常日子，这就是生活的默认设定——**他们把生活的解释权和行动的触发权这两项人生主权，让渡给了外界。**

网上流传埃隆·马斯克有句话："我从来不相信这个世界上有什么行动力不足的事情，因为**所有的行动力问题其实都来源于精确性的不足**。"这一讲的思维工具叫 WOOP，它能打破催眠节律，还你精确。

在讲 WOOP 之前，我想再说几句被动的害处。行为经济学有个特别有意思的概念叫**默认选项**：如果你什么都不做，系统就会给你自动分配的设定。一个著名的案例是奥地利的器官捐献同意率接近 100%，而德国只有 12%。是奥地利人道德更高尚吗？不是，仅仅是因为奥地利的登记流程上默认选项是"同意捐献，不同意的请勾选退出"，而德国是默认不捐、同意的请勾选加入。人家早就把这一套玩明白了：自动播放、默认开启通知、默认勾选会员连续包月，这些都是默认选项的日常版本。现代社会非常擅长替你做决定，给你安排了无数默认设置：上学、工作、买房、通过消费获得短暂快乐，在这个过程中如果不小心存了点钱，系统还默认给你推荐了养老金计划。既然大家都是这么做，你照着做总是安全合理的。你是个不错的好人，但**随波逐流绝对不会让你卓越。默认设置只是让你作为一个社会零件合格运转，那是一条通往平庸之路。默认设置大概是大多数人一生最昂贵的、压迫性最强的叙事。**

那你说我不漂流，我要跳出默认设置，我要逆天改命——这通常意味着不做所谓正确的事，而要做有点离经叛道、比较冒险、特别难的事。很多成功者发表获奖感言的时候爱说自己是靠着强大的意志力坚持下来的，但那更像是自我感动。**意志力其实是一种很不好用的资源，光靠对自己够狠，自律可成不了啥大事。自律不如习惯，习惯出自系统：自律是对当下冲动的抑制，习惯是情境触发的自动化行为，而系统是把关键行为外包给结构的机制。**

这就引出了 WOOP。WOOP 是心理学家加布里埃尔·厄廷根推广的一套心智策略，它由四个字母组成，是一个四步的思考流程：**Wish 愿望、Outcome 结果、Obstacle 障碍、Plan 计划**。

- **Wish 愿望**：你明确想要达成什么目标？
- **Outcome 结果**：如果目标达成了，你会得到什么样的好结果？这里要具体到感受，要有想象画面。
- **Obstacle 障碍**：问自己——阻碍你达成愿望的那个内心障碍是什么？它不是来自环境，而是你自己的反应模式。
- **Plan 计划**：一旦这个障碍出现，你打算怎么办？要一个可执行的动作。

比如说我想减肥：我的 W 是一个月减十斤；第一个 O 是如果成功我会更健康、身材会更好看；第二个 O 是我一看到好吃的就想多吃；P 则是一到晚上就提前刷牙、先出手逼自己少吃。**WOOP 是把愿望变成行动的思考流程：它先让你把最想要的结果想清楚，再逼你直面关键的阻碍，然后把"遇到阻碍怎么办"写成一个自动触发的 if-then 计划。**

社会上没有人要求我减肥，社会反而准备好了我万一因为肥胖得病了的治疗设施——减肥纯粹是我自己的愿望。我不是不知道该做什么，可我关键时刻做不出来。我如何自救呢？WOOP 解决的就是这个问题。

这听起来有点像正能量心理学什么相信梦想之类，但其实不是。民间成功学大师喜欢让人幻想，幻想的确会让人感觉很好：当你在脑海中幻想"我减肥成功了、我升职加薪了"的时候，你的血压会降低，身体会放松，**结果就是大脑以为你已经做到了，那还努力什么？于是你的能量水平反而下降。WOOP 恰恰是对正能量心理学的纠偏。**两个组合在一起构成了一件武器叫**心理比对**：你必须在幻想完美好的 Outcome 之后，立刻马上无情地把注意力拉回到现实中的 Obstacle 上。这时候你需要决定那个事到底可不可行：**如果阻碍实在太大，WOOP 要求你体面退出**，避免在不可能的目标上耗死；而如果可行，心理比对就会制造一个认知张力，让你感受到现实和理想之间的差距，从而提高承诺、动员能量、推动行动。

WOOP 的第二个武器是**执行意图**，这是厄廷根的丈夫、著名心理学家彼得·戈尔维策提出的概念：你得给大脑编写一段代码，这段代码的格式必须是 if-then——如果 X，那么我就 Y。比如"如果我感到想看手机，那么我就立刻把手机锁进抽屉""如果我感到愤怒，那么我就深呼吸三次并保持沉默"。戈尔维策的研究表明，这种简单的计划能显著促进目标达成，因为它把什么时候做、在哪里做和怎么做，提前绑定到了情境线索上。**漂流者的生活逻辑是情境来了我随便反应；WOOP 的生活逻辑是情境来了我执行预案。**

简单说，**WOOP 就是一句话：我想要 X，我最怕 Y，如果 Y，我就做 Z。这是对大脑编程**——WOOP 把愿望编译成可执行代码，把"遇到障碍"这个情境变成了触发行动的开关。

我调研发现，人们已经把 WOOP 用在了很多地方，都有研究结果支持：WOOP 帮低收入社区的中学生改善了成绩、出勤和日常行为，让孩子遇到困难更能顶住；有研究者用 WOOP 提升了中年女性的身体活动水平，让她们摆脱了"今天有点累、有点冷、有点忙"的借口出去锻炼；还有一项针对住院医师学习行为的随机对照实验发现，与只设定目标相比，WOOP 组在朝目标学习上投入的时间显著更多。**往往越聪明、越忙的人越容易漂流，WOOP 本质上是在帮他们减少临场决策，直接做最有利于目标的事。**

一个最有意思的案例是关于痴呆症患者的照护者。比如你有一位患有痴呆症的亲人，你必须照顾他，可是你常常感到无力控制局面：病人有时候无缘无故地发火，有时候走丢了，或者干脆不认识你。在这种高压、低控制感的情境下，什么正能量都毫无意义，你必须面对现实。那个研究中的照护者是这样使用 WOOP 的：W——我想在这周保持耐心；第一个 O——这样我们彼此的尊严都能维护，我们能感受到爱的连接，我不会因为发脾气而陷入自责；第二个 O——可是当他一个问题问我十遍的时候，我真想爆发；P——**如果病人再次重复问题，那么我就对自己说"这是病在说话，不是他在说话"，并握住他的手。**对照研究表明，使用了 WOOP 的照护者，他们的压力水平显著降低，生活质量明显提高。有人说 WOOP 就是自己的避风感。看来 WOOP 是进可攻退可守：它能帮你清理愿望清单，能把恐惧变成勇敢行动的触发器，能通过提升任务的精确性解决拖延。**WOOP 把漂流者的无解变成可解的下一步，它是一种在不可控生活中夺回一点可控的技术。WOOP 的威力不是宏大叙事，而是它能管住那些微小的关键时刻。**

咱们再看两个日常生活中的应用场景，思路都是在人生中加入几个关键的 if-then。切记：**第二个 O 是你内心的障碍，千万别归因于外部环境。**

一个是控制消费：你想省钱，可是管不住自己买买买的冲动。W——本月储蓄率达到 20%；第一个 O——看到账户增长的底气、对未来从容；第二个 O——压力大时的补偿心理：必须买点什么；P——**如果我因为压力大想网购，那么我就先把商品加入购物车并冷冻 24 小时，转而洗个热水澡或者出去散步 15 分钟。**你不是缺少理财知识，你缺少一个从压力到不购物的替代动作。

另一个是职场雄心：你想把握机会表现自己。W——在季度会上主动展示成果；第一个 O——被信任、被分配更重要的战役；第二个 O——怕丢脸，心跳加速就想装死；P——**如果我在会上心跳加速不敢开口，那么我就先说一句"我用 30 秒讲个结论"，然后把准备好的第一条要点念出来。**你看，你不需要消灭恐惧，你只需要让恐惧变成行动的触发器。WOOP 不要求你立即变成一个不一样的人，它只要求你在那一秒钟别漂流。经历多了你就会养成习惯，习惯成自然。

最后我想再给你一个使用 WOOP 的理由：**心境**。如果你是个漂流者，整天有很多愿望实现不了但是又不甘心，你的心会很乱。有个蔡格尼克效应说，你不管干什么都会想着自己本来该干没干的事，总是无法全情投入——那些你没做完也没计划好该怎么做的事，会像幽灵一样在你的潜意识里游荡，时不时跳出来占用你的工作记忆，这又叫**注意力残留**。这就是为什么你明明在休息，心里却总觉得累——因为你的后台程序开得太多了。**而当你对一件事情进行了 WOOP，把障碍和对策写成了预案，你等于告诉大脑：这件事我已经想清楚了，等触发条件出现我会执行，不需要你反复提醒。那么大脑就会认为这件事已经处理了，就会把它从工作记忆中移除。**你会进入一种类似武侠小说里"心如止水"的境界：你不需要时刻惦记着干什么，当情境出现行动自动发生，当情境未出现你可以尽情享受当下。**大脑是用来思考的，不是用来惦记事的。主动权掌握在你手里，这就是从漂流中上岸的感觉。**

下一讲的主题是社交资本、结构洞和搬家。
`,Hh=`# 017丨社交资本、结构洞和搬家：容易向上流动的位置

## 讲什么

成长战略第八讲：**天时地利人和的实在版本**——取得成就需要好机会，而好机会往往不是由你的能力、而是由你所在的位置决定的。三个把你放到更好位置的工具：社交资本、结构洞、搬家。

## 解决什么真问题

两个孩子天资勤奋完全一样、都生于底部 20% 的家庭：一个生在圣何塞（硅谷核心），30 岁时收入进入前 20% 的概率是 12.9%；一个生在夏洛特，概率只有 4.4%。**同一国家同一制度，投胎地点让翻身概率差两三倍。**怎么办？

## 核心论点

- 切蒂用 Facebook 7220 万用户、211 亿对好友关系计算出三种社会资本，**对穷人向上流动唯一有显著预测力的是经济连通性**（低收入和高收入人群的友谊）——抱团取暖没用，做志愿者没用。
- **交友偏差**：富人和穷人虽同处一个环境却各玩各的。破解法：群体越小越稳定、互动越密集，交友偏差越低——**把关系放进共同任务里：不是寒暄是共事，不是酒局是补位，不是索取是供给**。
- **结构洞**（罗纳德·伯特）：两个彼此不相连的社交网络之间的洞，谁站上去把两边连起来，谁就有特殊优势——**结构洞的本质不是传话，是翻译**。
- 搬家是最直接的改命：穷人家孩子在好社区每多待一年，成年后的各项指标就变好 4%。**孩子更多是把周围的成年人当成榜样，而不是跟自己的父母学。**

## 关键例证 / 金句

- 邓小平是中共干部里的结构洞：红区党的资历（百色起义、淮海战役）+ 白区党的视野（留法留苏、懂经济懂城市）——**他把革命叙事翻译成发展叙事，把政治语言翻译成经济语言，把斗争翻译成建设**。
- 弱联系（格兰诺维特）：**强联系提供情感支持，弱联系提供新信息**。
- **"位置也是一种资本，坐标是命运的一部分，有时候出现在正确的地点比拥有正确的知识重要得多。"**
- "母弱出商贾，父强做侍郎；族望留原籍，家贫走他乡。"**守成是富人的特权，出走是穷人的抗争。**

## 如何应用

- 到经济连通性高的地方去，到有更高阶的地方去，最好能成为两个网络之间的结构洞。
- 进富人圈子不是去要资源的，是带着供给侧心态**去提供独特视角**的；站在结构洞上就是去提供翻译服务的。
- 城市产业凋零、公司层级固化没有跨界交流氛围，不走难道留下来给人家做牛马吗？

---

## 全文

> 以下为课程转录全文，已做去噪与语义分段；**加粗+底纹**处为核心论点与金句。

欢迎来到现代思维工具课，我是万维钢。今天是成长战略模块的第八讲，题目是**社交资本、结构洞和搬家**。中国有句话叫天时地利人和，这一讲咱们说这个传统智慧的一个更实在的版本：**取得成就需要好机会，而好机会往往不是由你的能力、而是由你所在的位置决定的。**

哈佛大学有个很年轻的经济学家叫拉吉·切蒂，我们精英日课专栏多次提到过，这个人特别擅长从超大规模的数据中挖掘社会的规律，号成天才。切蒂的一个发现是这样的：假设有这么两个孩子，他们的天资和勤奋程度都完全一样，出生的家庭收入都位于最底部的 20%。两人一个出生在加州圣何塞——是硅谷的核心，相当于中国深圳；另一个出生在北卡罗来纳州的夏洛特——这地方其实也不错，但活力跟硅谷不能比，大约相当于中国的沈阳或者济南。那么这两个孩子长大后改变自己命运、实现阶层跃迁的概率各自有多大？

这叫代际流动。孩子不一定非得跟父母是一个阶层，如果你能提升自己的阶层就叫向上流动。当然你向上流动就意味着有人必须向下流动，但没关系：**一个社会的代际流动性越高，它就越有活力，穷人有希望、富人有动力，日子才有意思。**

切蒂分析了美国几千万份纳税记录，追踪了一个个家庭和孩子的收入，发现了各地代际流动的差别：到 30 岁的时候，圣何塞那个孩子的收入进入前 20% 的概率是 12.9%，而夏洛特那个孩子的概率则只有 4.4%。两个孩子都没到 20%，说明生在贫困家庭是个绝对的不利因素；**但是 12.9% 比 4.4% 可大多了。同一个国家、同一个制度、同一个时代，如果你必须生在穷人家，你最好选择在深圳这样的地方投胎，因为翻身的机会能高两三倍。**好消息是就算你没生在深圳，也可以搬家到深圳去——但是越早搬越好。你要是躲在家里，机会不会自动来找你，向上流动必须非常主动才行。

了解了重尾分布，你就该知道这个世界的各个位置是绝对不平等的。但人是活的，你应该前往一个容易向上流动的位置，你希望离资源、信息、机会、规则制定者和高人才密度更近。我们讲三个能把你放到更好位置的思维工具：**社交资本、结构洞和搬家**。

**社交资本**就是我们的各种社会关系。那你说如果我是个穷人，迫切想要向上流动，什么样的社会关系最有用呢？还是这位切蒂，在 2022 年发表的一项研究中，分析了 Facebook 上美国 7220 万名 25 到 44 岁用户的 211 亿对好友关系，数据覆盖了那个年龄段的人口，并且精细到每个人居住的邮政编码，等于是把美国人的社会关系一网打尽。他量化计算了三种社会资本：第一种是**经济连通性**，也就是跨阶层的互动，说白了就是低收入人群和高收入人群的友谊；第二种是**社会凝聚力**，也就是你朋友圈的紧密程度，你朋友的朋友有多大可能性也是你的朋友；第三种是**公民参与度**，也就是你是否经常参加社区活动，比如当个志愿者。

那你猜一猜，哪种社会资本最有利于穷人向上流动呢？**答案是经济连通性，而且其他两个指标对个体的向上流动几乎没有显著的预测力。**简单说：整天跟朋友们聚会、把你朋友的朋友都变成你的朋友、经常热心参与社区事务，这些也许能让你感觉很好，但对你向上流动没啥帮助。**想要成为富人，你最好结交一些富人。**切蒂的数据分析表明：出身贫寒的孩子如果能在一个经济连通性高的社区长大，他的成年收入平均会提高 20%。不是说富人朋友直接给他钱，而是他能从朋友们身上学到一些常识：比如什么样的举止是体面的，怎么申请好大学，哪些行业可能是风口等。**富人从来都没有对这些常识刻意保密，但是穷人的圈子里真没有这些。**然而切蒂的数据显示，穷人常常是跟自己的邻居抱团取暖，富人的朋友多是大学同学——有经济连通性的社交机会可是太少了。

可能有人一听就懂了，说我应该向上社交、多接触富人，最好把孩子送进私立学校。这的确是一个办法，接触是最基本的操作，不接触是不可能结交的。**但只有接触还不够。**切蒂的另一篇论文分析了为什么高经济连通性的社交这么少：一个原因是暴露度不够，能让不同阶层的人碰撞的场合太少；但一个同样重要的原因是**交友偏差**——富人和穷人虽然身处同一个环境（比如在同一所学校上学），但是有各玩各的倾向，平时见面点头之交，还是无法形成真正的友谊。你很难说这是歧视：跟与自己背景差不多的人交朋友，本来就是人之常情。

那怎么才能打破交友偏差呢？切蒂的研究发现：**群体越大，交友偏差就越高；而群体越小越稳定、互动越密集，交友偏差就越低。**比如美国的一些宗教团体，尽管成员收入分层很明显，但交友偏差反而比较低，因为这种团体的制度、仪式和互动方式容易让不同阶层的人建立真实关系。我以前还听到过一个说法：以色列是个小国，为什么创新能力这么强呢？一个重要原因就是以色列实行全民兵役制度，来自各个阶层的年轻人有机会在一起摸爬滚打好几年，通过实战的筛选结成身后友谊，退役后就很方便一起开个公司。**最有用的社会资本不是市侩哲学说的那种人脉——不是你认识的人多、在饭局上会来事就行。降低交友偏差最好的办法是把关系放进共同任务里：也就是一起做项目，一起训练，一起准备比赛，一起解决一个难题。不是寒暄是共事，不是酒局是补位，不是索取是供给。人类建立信任最强的一个机制就是：我见过你在压力下怎么行动。**

可是世间一起扛过枪、一起同过窗的机会毕竟太少，我们平时有什么办法进入更好的社交位置呢？这就引出了**结构洞**。如果说切蒂那种社交资本是纵向连接，结构洞就是横向连接。结构洞是社会学家罗纳德·伯特提出来的概念：原本两个彼此不相连的社交网络之间存在着洞，**谁能站在洞的边上把两边连起来，谁就拥有一种特殊的优势**，伯特称为"经济人地位"，也可以叫连接者或者中介人。占据了结构洞，你就不再只是网络上的一个节点，你是连接两个网络的接口。

比如你们公司的程序员是一个网络，销售人员是另一个网络，这两群人彼此听不懂对方的意图，经常发生矛盾冲突。那么你如果既懂编程又理解销售逻辑，你跟两边都能说上话，你就占据了连接这两个网络的结构洞：你可以帮程序员理解销售到底想要什么，帮销售明白为什么有些要求是不切实际的——你就是公司特别不可或缺的一个人。伯特的研究发现，**占据结构洞的人升职加薪的速度都比别人快得多，他们获得了更多的正面绩效评价，而且他们特别善于提出有创造性的好点子。**这不是很容易理解吗？两个领域的合作靠你达成，信息从你这里流动，也许你的专业知识没有那么强，可你却是最懂公司的人。

我看结构洞这个概念，跟社会学家马克·格兰诺维特 1973 年提出的弱联系有异曲同工之妙。你大概听说过那个道理：像找工作这样的事情，你求助平时自己圈子里特别熟的那些强联系，往往意义不大——因为他们跟你是同一个圈子，你不知道的信息他们哪能知道。**最有效的信息源往往是弱联系，也就是平时不怎么联系的圈外人。强联系提供情感支持，弱联系提供新信息。**弱联系是圈外人，结构洞则是圈内通往圈外的接口。如果你找不到能解决问题的弱联系，也许你们圈子的那个结构洞可以帮你介绍几个人。但更重要的是，**结构洞做的不只是传递信息，更是控制和创造。结构洞的本质作用不是传话，而是翻译**：你把技术的语言翻译成销售听得懂的逻辑，或者把艺术圈的审美翻译成工程师能实现的产品——因为两边存在巨大的认知隔阂，你的每一次翻译都是在创造价值。

我说一个特别有意思的例子。在革命战争年代，中共的干部可以分为两波人，是两个非常不同的群体：一个是红区党，也就是在根据地搞土地革命打游击的干部，他们有深厚军队背景，作风硬朗；一个是白区党，也就是在国民党统治区做地下工作的那些知识分子干部，他们受教育程度高，懂经济、懂城市，善于跟三教九流特别是资本家打交道。红区党和白区党的行事风格很不一样，历史上有隔阂的，有时候闹得挺厉害。而有一个人明明是个红区党，却又跟白区党关系极好——那你说他不就是个结构洞吗？没错，此人就是邓小平。邓小平在中共干部群体中是个独特的存在：他领导过百色起义、指挥过淮海战役，可谓是实打实的红区领袖，在军队里威望极高；而且他留学过法国、去过苏联，视野开阔，理解世界大事，懂经济懂管理，让白区干部和知识分子也服气。**有的干部只会喊口号，有的只知道算账，只有邓小平会在两边翻译：他把革命叙事翻译成发展叙事，把政治语言翻译成经济语言，把斗争翻译成建设。要不怎么是邓小平推动改革开放呢？**

最后咱们再说说**搬家**。树挪死人挪活：如果你当前的位置不能给你提供很好的机会，你有权搬到更好的地方去。我们开头讲了穷人搬家到机会多的城市能大幅度提高向上流动的可能性。2025 年发表的一项英国的研究则直接把搬家和经济连通性联系了起来：低收入家庭的孩子如果成长在跨阶层友谊更多的地区，成年收入会显著更高，而且越早搬越好。切蒂发表的一项研究发现，穷人家孩子的成长过程中，**每在好社区多待一年，成年以后的各种境遇综合能变好 4%**。我的猜测是，父母能影响孩子的最重要的三个因素就是智商、直接给钱和生活社区——搬家到一个更好的社区去，可能比你使用什么高级养育方法的效果都要好。**切蒂的一大发现就是：孩子更多的是把他周围的成年人当成榜样，而不是跟自己的父母学。**

网上流传一句话叫"母弱出商贾，父强做侍郎；族望留原籍，家贫走他乡"。**守成是富人的特权，出走是穷人的抗争。**总结来说：越是处在不利的社会经济位置，越要想办法换个位置。逆天改命不是一门心思读书做题就行，有时候你就是非得背井离乡不可。稳态生存的观念讲究安土重迁，那是因为天下的土地都有主，你离开家就没有生产资料了；可是现代社会的机会是流动的。如果你发现所在城市产业凋零、暮气沉沉，或者你所在的公司层级固化、没有跨界交流氛围，不走难道留下来给人家做牛马吗？

**到经济连通性高的地方去，到有更高阶的地方去，最好能成为两个网络之间的结构洞。这不是投机取巧，更不是求人恩赐：你需要那个好位置，那个好位置也需要你。**这个秘密是：如果富人的圈子里只有富人，他们是玩不转的，迟早腐败堕落——阶层流动对所有人都有好处，能长久存在的高级网络必须主动吸纳圈外人。只要怀揣供给侧心态：挤进富人圈子就是去提供独特视角的，站在结构洞上就是去提供翻译服务的，搬到新城市就是去给那个城市注入活力的。**弱者的社交是寻求庇护，强者的社交是提供接口。**一个在富人区做高端家政服务的阿姨，如果仅仅是干活，她就是劳动力；但如果她能把富人区的教育理念和信息差带回自己的社区，把自己乡里的土产和劳动力资源以高标准对接给富人，她就成了结构洞。

**位置也是一种资本，坐标是命运的一部分，有时候出现在正确的地点比拥有正确的知识重要得多。**英雄豪杰不能被环境限制死，天下自然有更好的地方等着你去。

下一讲的思维工具叫做认知解耦，咱们说说怎么调节负面情绪。
`,Qh=`# 019丨认知解耦：三步调节负面情绪

## 讲什么

成长战略模块工具：**认知解耦（Cognitive Decoupling）**——在刺激和回应之间的那个空间里，大脑需要跑的一段程序。三步：认知解离 → 调用视角 → 认知重评。

## 解决什么真问题

别人一句玩笑你就怒不可遏，导师一句批评你就三天睡不着；更多时候是没发脾气却耿耿于怀，深夜对着天花板反刍白天的尴尬瞬间。**8 分钟的愤怒发作就能削弱血管扩张功能，而反刍比发怒更伤。**

## 核心论点

- 基思·斯坦诺维奇：系统二思维（慢思考、理性思维）一个最核心、最能定义人类智慧的功能就是**认知解耦——大脑把自己模拟的世界与现实世界隔离开来的能力**。
- 莉莎·费德曼·巴瑞特："**情绪不是对世界的反应，它们是你对世界的构建。**"让我们痛苦的不是事件本身，而是我们对事件的内心解读。
- 三步：**认知解离**（把"我当前的感觉"从"世界真相"拆出来，从陷入想法变成看着想法）→ **调用视角**（别光分析自己的感知，主动把摄像头移到别人的感知上，最好的办法是直接问）→ **认知重评**（事情还是这个事情，换一个故事、换一个解释框架、换一个定性）。
- **情绪信号应该是信息而不是命令。气不可耻，入戏才危险。**

## 关键例证 / 金句

- 认知解离的口诀："我注意到此人正在产生一个'我是失败者'的想法"——**你不是你的感知，你是那个能觉察感知的人**。
- 认知重评三招：把威胁改写成挑战；把"针对我"改写成"因为情境"；挖掘负面情绪的正面意义。
- 排队被加塞的重评："这只是一个随机事件，相当于游戏里的 NPC 故障。**我不生气不是因为我软弱，而是因为我的时间比他值钱。**"
- 创业被父母泼冷水："他们不尊重我"重评为"**他们用自己的风险模型在保护我**"——你们想要的其实是同一件事：未来怎么更安全。

## 如何应用

- 时间抽离：问自己十分钟后、十个月后、十年后，这事还重要吗？
- 以第三人称称呼自己，从戏中人变为旁观者。
- 调用视角最好的办法是直接问："哥，你反应这么强烈，你到底在担心什么呢？你真正想要的结果是什么呢？"

---

## 全文

> 以下为课程转录全文，已做去噪与语义分段；**加粗+底纹**处为核心论点与金句。

欢迎来到现代思维工具课，我是万维钢。这一讲的思维工具叫做**认知解耦**，咱们来说说怎么调节负面情绪。

作为一个高效能的现代人，特别是如果你需要经常跟人打交道的话，你最好有主动调节负面情绪的能力。别人一句玩笑你就怒不可遏，导师一句批评你就三天睡不着，那可就太业余了，岂能担当大任。有时候发过脾气你会后悔，更多时候也许是没发脾气却耿耿于怀：**在无数个深夜，你对着天花板，脑子里像放电影一样反复播放白天的某个尴尬瞬间**，一会分析为什么是我，一会又悔恨如果我当时那样怼回去就好了。心理学上这叫反刍：就如同牛反复咀嚼胃里的草，你的大脑不受控制地反复回放那些痛苦片段。**8 分钟的愤怒发作就能削弱血管扩张功能，而反刍比发怒更伤**：长期陷入反刍会让身体的皮质醇水平居高不下，引发炎症，增加心脏病风险。**发怒是自己打自己两拳，而反刍是一边喝着自己酿造的慢性毒药，一边徒劳地期待着敌人死去。**这多可悲呢？所以不要被负面情绪劫持。

要调节负面情绪，很多人的做法是压抑：话到嘴边留半句，忍一时风平浪静退一步海阔天空。但这不是解决，搞不好还得反刍。厚黑学的建议是伪装：明明不满但是假装高兴，保全體面但是默默在背后算计——这既不真诚也不聪明，早晚人设崩塌。当然你肯定不应该一遇到刺激就立即反应，正如斯蒂芬·柯维在《高效能人士的七个习惯》中所说：**在刺激和回应之间有一个空间，在那个空间中有我们选择回应的能力。**问题是你在那个空间中干什么？只是沉默几秒并不会让你自动有更好的应对办法。你的大脑需要在那几秒钟里跑一段程序，这段程序就是我们这一讲的思维工具：**认知解耦**。

感知引起情绪，情绪引发行动，这在我们大脑里是一条高速直连通道——立即反应在关键时刻能救命，看见老虎你不马上跑行吗？但现代社会非常复杂，尤其人心难测，**你对局面的第一感知往往是错误的**，所以才需要认知。**认知就是把心中的叙事和眼前的事实拆开。**认知科学家基思·斯坦诺维奇对此说的最透彻：我们的系统二思维——也就是慢思考和理性思维——一个最核心、最能定义人类智慧的功能就是认知解耦，是**大脑把自己模拟的世界与现实世界隔离开来的能力**。

我们这里把认知解耦这个概念给工程化，拆解成三个步骤：**认知解离、调用视角和认知重评**。

**第一步，认知解离**，是把"我当前的感觉"从"世界真相"拆出来。我们前面反复讲了自由能原理：你要知道你对局面的感知不等于事情的真相，那只是你大脑的预测。**可是你的情绪是由你的感知触发的，不是由真相触发的。**这是现代神经科学一个特别重要的洞察。神经科学家莉莎·费德曼·巴瑞特有句名言："**情绪不是对世界的反应，它们是你对世界的构建。**"比如你突然因为低血糖而感到极度疲惫，可是一个同事面无表情地从你面前走过、问都没问一句——这是事实；你立即觉得"他讨厌我"，这就只是你的感知，是你自动推导出来的一种预测，而不是事实。你产生了愤怒情绪，很想采取行动，那个情绪是对你感知的反应，而不是对真相的反应。**让我们痛苦的不是事件本身，而是我们对事件的内心解读。**

认知解离不是说让你消灭负面情绪，而是让你意识到那只是一个感知而已。认知解离要求你跟那个想法拉开心理距离、拒绝与之融合，也就是**从陷入想法变成看着想法**。当你陷入一个想法不能自拔的时候，你会觉得那个想法就是一切，你的人生从此就定了。比如你搞砸了一个事很懊悔，会在那一刻强烈地感到"我就是个失败者，我这辈子完了"——这时候一定要主动拉开距离：**那只是你脑子里的一个念头，就像天空中的一朵云，它不代表你是谁，也不代表事实就是这样。**一个好办法是时间抽离，也就是问自己：十分钟后、十个月后、十年后，这事还重要吗？从长远看，眼前这点事根本都不叫事。而最基本的功夫则是跳出自己看自己，甚至以第三人称称呼自己：你从戏中人变为旁观者，脑子就容易冷静了。"我就是个失败者"这是被情绪劫持；而认知解离则是"**我注意到此人正在产生一个'我是失败者'的想法**"。**你不是你的感知，你是那个能觉察感知的人。**当你能跳出自己看自己、拉开距离、开启观察者模式，你就不再是情绪本身，而是能看见情绪的人——能看见才谈得上能选择。

做到这一步，你已经入门了一项特别宝贵的能力，叫做**元认知能力**：也就是对个体自身思维进行审视、监控和主动调节的能力。你不再是一台只会对刺激做回应的机器，你有能力跳出自动进程，就算没人在身边提醒你也能自己提醒自己，你不会把自己锁死。用老百姓的话说，现在你最起码不再是个容易想不开的人。

**第二步，调用视角。**简单说就是别光在那分析自己的感知，你要主动把摄像头移动一下，想别人的感知是什么。想象一个争吵现场，你正在和一个人对喷，此时至少有三个视角：你的视角、对方的视角和周围旁观者的视角。你的视角下，那哥们完全不可理喻；但你能不能站在他的视角想一下：以他关心的事情和他了解的信息，他为什么会这样反应？有没有什么信息是他知道而你不知道的？他的攻击性到底是出自恐惧还是想夺回控制权？再比如，如果有个摄像机正在把你们的争吵向全网直播，你猜观众会怎么看这件事？他们会觉得这是两个傻瓜在吵架，还是觉得其中一个人更有职业素养？光会换位思考还不够，**调用视角最好的办法其实就是直接问**：你完全可以暂停争吵，心平气和地问对方一句"哥，你反应这么强烈，你到底在担心什么呢？你真正想要的结果是什么呢？"你看那些俗套的电视剧情，各种矛盾冲突往往不是因为什么利益和价值观，纯粹是误会。换位思考会消耗不少脑力，但是绝对值得，这是智识的谦逊。

**第三步，认知重评。**我们精英日课专栏不知道讲过多少次认知重评，这是当代心理学对老百姓最有用的一个贡献。简单说，**认知重评就是事情还是这个事情，但是你要给它换一个故事、换一个解释框架、换一个定性——事实不变，但是意义重写。叙事变了，情绪走向和行动选择就会完全不同。**遭遇堵车，你可以说这是浪费时间，也可以说这是正好有机会听那本你早就想听的有声书；男朋友不回你信息，你可以说他在冷落你，也可以说正常人谈恋爱本来就会经历这种场景；马上要上台演讲了你高度紧张，你可以说这下糟糕了必须赶紧消除紧张，也可以说**焦虑是身体在帮我准备能量，心跳加速是为了给大脑输送更多氧气**。这不是强行正能量，这是主动选择积极意义。叙事本来就是主观的，意义本来就是你自已构建出来的，积极和消极都是你的自由选择，为什么不选择积极呢？

认知重评常用的三招：**第一招，把威胁改写成挑战**——这件事很难，但它正是我提升能力的机会。**第二招，把"针对我"改写成"因为情境"**——这哥们不是只跟我过不去，他遇上难事了，最近看谁都不顺眼。**第三招，挖掘负面情绪的正面意义**——我是有点恐惧，但恐惧让我兴奋。有些人特别擅长认知重评，啥事在他那都是好事，允许一切发生、一切都是最好的安排，整天把自己哄得特别开心——那似乎也不对，我们搞重评要指向建设性行动才好。但是想想人家，如果你整天反刍，难道不应该向人家学习吗？

总结来说，**认知解耦就是一套"接化发"**：先用认知解离防守，再用调用视角分析化解，然后用认知重评让情绪朝着有利方向转弯，以便采取积极行动。

咱们看几个应用场景。比如你正在辛苦地排队，突然有人加塞，你内心的原始人瞬间上线想跟他干一下。第一步认知解离就是在心里吐槽自己：肾上腺素飙升了，我的大脑在喊"狠狠干他"，原始人正在接管方向盘——可是十分钟后这件事还重要吗？值得我用一整天的心情买单吗？调用视角就是：他可能确实赶时间，也可能就是没素质，但别人也看在眼里，现场的目光已经在杀他。而认知重评就是把故事改写成：**这只是一个随机事件，相当于游戏里的 NPC 故障。我不生气不是因为我软弱，而是因为我的时间比他值钱。**

再比如你有个雄心勃勃的创业计划，回家很开心地告诉了父母，可是父母听都不听就来了一句"不务正业"。你觉得被否定，立刻顶撞。认知解离就是：你脑子里此刻有个特别极端的叙事——"父母根本不爱我，他们只想控制我"——而你必须提醒自己，这是个情绪化解读，不是事实；事实只不过是他们表达了反对和担忧。接下来是调用视角：父母的观念中稳定等于安全，他们反对可能是爱之深则忧之切，他们的认知里就没有"创业"这个选项；站在更高的视角看，**其实你们想要的是同一件事——未来怎么更安全**。最后认知重评：把"他们不尊重我"重评为"**他们用自己的风险模型在保护我**"。那么你要做的就不是立即说服，而是先好好沟通："我听到你们担心稳定，我也担心。我能不能把我的计划讲完整，然后你们告诉我最担心哪一条风险，我们一条一条拆。"

这一切都是为了让你不被情绪劫持。这可不是说要压制情绪，更不是说人应该没有情绪——**情绪是对复杂场景的快速计算，是人最基本的智能**：愤怒、委屈、嫉妒、恐惧，这些都是导航信号，情绪能提醒我们、能动员我们、能让我们跟他人共鸣。情绪的生起是自动的，你不可能先验决定要哪个情绪、不要哪个情绪，**但是你可以选择对情绪的反应**。你可以用认知解耦让某些情绪就这样升起又消散，而自己不必上车跟着它们走。**气不可耻，入戏才危险。情绪信号应该是信息而不是命令。认知解耦就是让你在每一次马上要被动入戏的瞬间，能及时收住剧本、改写人生。**
`,Kh=`# 020丨身份认同：元认知黑魔法

## 讲什么

成长战略模块工具：**身份认同**——一个武器级的元认知思维工具。好人可以用它促成合作，坏人也能用它操弄人心，所以这一讲带着警示而来。

## 解决什么真问题

为什么"讲道理"改变不了人？为什么有些人你越批评他越坚定？为什么你不经意间就被某个群体身份绑架？答案都在身份认同：人对"我是谁"的执念，远超对事实的忠诚。

## 核心论点

- **改变一个人行为的好办法，是改变他对"自己是什么人"的理解。**不是说服，是重构身份叙事。
- 凯根成人心智发展五阶段：冲动心智 → 工具心智 → 社会化心智（被身份束缚）→ 自我授权心智（自己定义身份）→ **自我转化心智（能反思自己的价值观本身）**。成年人中 58% 停在第三阶段，只有 1% 到达第五阶段。
- **主体-客体转化**：低水平心智把身份认同当做主体（你是它，被它控制）；高水平心智把身份作为客体（你调用它，能操作它）。**你不再是某个身份，你只是正在调用某个身份。**
- 黑魔法：**不但设定自己的身份，还设定别人的身份**——把杠精当昆虫学家面对的罕见甲虫，把官员当政治学者研究的样本。
- 警告：切换身份不是见人说人话，**内核自我必须稳定**，否则进入危险的虚无：什么都能理解，什么都不再相信，什么都能切换，什么都不再负责。

## 关键例证 / 金句

- 德州公路垃圾案例：乱扔垃圾的主力军是 18-35 岁听重金属开皮卡的年轻男性，罚款宣传全没用。一句"**Don't Mess with Texas（别惹德克萨斯）**"把"不乱扔垃圾"从"听政府的话"重构成"维护德州硬汉的尊严"，几年内垃圾减少 72%。
- 詹姆斯·克利尔《掌控习惯》：**改变习惯最好的办法不是靠意志力，而是建立一个新的身份认同**——"我不是努力戒烟，我是一个不抽烟的人"。
- 丹内特三种立场：意向立场（把对方当人）、设计立场（当机器/程序）、物理立场（当物体）。**对某些人采取设计立场甚至物理立场，才是最高效的做法**——老师面对顶嘴的学生，把他当做"正在学习自我控制的未完成大脑"才能心平气和。
- **"高阶玩家的身份认同像衣服，到什么场合穿什么款式，回家脱下来挂在门口。"**

## 如何应用

- 想改变自己：先给自己一个更高的身份定义（"我是个能解决难题的人"），行为会跟上。
- 想改变别人：别攻击他的观念，先帮他扩大身份认同（你爱国，但爱中国不必靠中医背书）。
- 遇到不可理喻的人：把他从意向立场降级到设计立场——不是冷漠，是**有时候不把对方当人看才是真正的慈悲**。

---

## 全文

> 以下为课程转录全文，已做去噪与语义分段；**加粗+底纹**处为核心论点与金句。

欢迎来到现代思维工具课，我是万维钢。这一讲咱们说一个武器级的元认知思维工具。它有一定的危险性：好人当然可以用它促成合作，但坏人也能用它操弄人心。所以我想确保你先得到它。这个工具叫**身份认同**——简单说就是"我是谁"，往深了说则是**对人的定义权**。

你有很多种身份：职业、阶层、性别、地域、信仰、阵营等。而身份认同则是你对某个身份产生了归属感，以至于自动想要做符合这个身份的事、捍卫这个身份的形象、团结符合这个身份的人。我是老师，学生出了事我就得负责；我是科学家，我下结论就得讲证据；我是某队球迷，你骂球队就等于骂我；我是讲义气的人，朋友找我帮忙我就不能拒绝。世界太乱、信息太多、利弊太复杂，而我是个简单的人，所以我直接问：**像我这样的人，在这种情况下应该怎么做？**身份认同不但给你归属感，而且给你连贯感、可预测性和自豪感，还往往能促成同一群体内部的合作。

但它有一个副作用：**它天然带刚性。你把某个身份当成"我"，你就很难修改它，你就会被这个身份所驱使。可是如果你把身份当成"我用的"，你就可以驾驭它。**

先看一个最基本的用法。上世纪 80 年代，美国德克萨斯州的高速公路垃圾问题很严重。州政府想了各种办法，又是罚款又是宣传，完全没用。调查发现乱扔垃圾的主力军是 18 到 35 岁的年轻男性，开着皮卡听着重金属以反叛为荣：你说爱护环境，他们说那是娘炮；你说禁止乱扔，他们反而产生逆反心理变本加厉。结果有一家广告公司想出了一句绝世文案，请橄榄球明星和蓝调歌手出镜拍摄，在电视台反复播放，竟然把问题解决了。那句话至今都是德州人的骄傲：**"Don't Mess with Texas"——别惹德克萨斯。**

这不是说教，这是在定义身份。这句话的潜台词是：**真正的德州纯爷们是不会让别人把自家地盘弄脏的——谁敢把德州弄脏，谁就是看不起我们德州人。**它把"不乱扔垃圾"这个行为的定性，从"听政府的话"变成了"维护德州硬汉的尊严"。然后红脖子青年就变成了环保先锋，不但自己不扔，还盯着别人不让扔。**德州公路垃圾短短几年减少了 72%。**这是对身份叙事的重构：旧叙事是"乱扔垃圾=叛逆很酷"，新叙事是"乱扔垃圾=侮辱自家地盘不酷"。**改变一个人行为的好办法，是改变他对"自己是什么人"的理解。**

这里还有个更深的洞察：**你其实可以定义别人的身份，当然你更可以定义自己的身份。**詹姆斯·克利尔在畅销书《掌控习惯》中提出：**改变习惯最好的办法不是靠意志力，而是建立一个新的身份认同。**比如"我从此是个健康的人，所以我跟那些胖子就不一样，我这么酷的人就得天天去健身""我不是努力戒烟，我是一个不抽烟的人"。你想想身边是不是有很多诉诸身份认同的例子："你是不是男人""是中国人就转""对不起，我是警察"。身份认同能带给你无穷的力量，绝对是一种底层操作代码。

但它也是人群和人群冲突的根源。法国人类学家马塞尔·莫斯有个理论叫"**文化是拒绝的结构**"：距离很近、各方面条件都非常相似的两群人，会很刻意地对立起来——因为你们是那样，那我们就必须是这样，反正我们跟你们不一样。世界各地都有这个现象：你最恨的往往不是远方的异族人，而是身边那群故意不跟你一个身份认同的人。

政治学家弗朗西斯·福山 2018 年出了本书叫《身份政治》，说现代社会的很多冲突并不是利益分配的问题，而是**被承认不足**的问题：人们愤怒和怨恨不是因为穷，而是因为觉得自己所属的群体不被看见、不被尊重。这个理论对当今美国的政治局面有很强的解释力：你想想为什么特朗普的政策明明对富人更有利、对穷人不利，却有那么多穷人非得支持特朗普呢？这是一种原始的身份站位。极端情况下，有些人会把某个身份跟自己融合在一起：你批评那个身份群体的任何现象，都是在侮辱他个人。你看今天互联网上的争论是不是越来越像宗教战争。

**我们的目标是主动运用身份认同，而不被身份所用。**哈佛大学心理学家罗伯特·凯根有个成人心智发展理论，对你会有很大帮助，这可能是理解身份认同最强的框架。凯根把人的心智成长分解为五个阶段：

**第一阶段叫冲动心智**，是婴幼儿式的：想干什么就干什么，眼里只有自己没有别人。**第二阶段叫帝王心智或者工具心智**：能看别人，但是以自我利益为中心，把别人都当工具人，只知道威逼利诱，属于少年儿童心智。**人真正成熟是从第三阶段开始**，身份认同也是在这个时候介入的，叫**社会化心智**：你的行为不再只是出于本能冲动和利益算计，而更多的是为了扮演好自己在社会中的角色。为什么努力工作？因为你想做个好员工。为什么结婚生子？因为你想做个好儿女。周围人的期望、社会的规范决定你的身份，身份决定了你的行为。这听起来很体面，但是容易内耗：如果工作特别忙没时间照顾孩子，你是当好员工还是当好母亲呢？如果干什么都是为了外界的期许，你的主权个体又在哪里呢？苏东坡说"长恨此身非我有，何时忘却营营"，说的就是这种内耗。

那么你需要升级到**第四阶段，自我授权心智**：你们想让我是谁我不在乎，重要的是我自己想做个什么人。这不是要回到冲动和工具心智——你仍然需要稳定的身份，但你可以自己定义自己的身份，为此你需要设定自己的价值观和原则。第四阶段是现代社会对领导者的要求：你不能只会做题，你得会出题；**你可以拥有关系，而不是被关系拥有**。

**第五阶段叫自我转化心智**：你不但能设定价值观和原则，而且能主动反思那些价值观和原则；你能意识到自身认同的局限性，不再和某套原则、某个立场或者某个叙事完全粘连——你可以带着它工作，但也能站出来审视它。**如果说第四阶段是拥有自我，第五阶段就是看穿自我。**你认识到任何单一的身份都是局限的，所以你能够拥抱矛盾，能协调各种各样的人和事，不断重塑。

咱们来一个例子。比如在公司一次例会上，同事小李汇报了一个自己的工作成果，而这个工作其实主要是你做的。老板当场表扬小李，小李也没纠正。会后老板私下问你一句："小李这次表现不错，你怎么看？"请问你如何回答呢？

- **冲动心智**会立即暴怒：那明明是我做的，他怎么抢功呢？你当老板的怎么这都看不出来呢？
- **工具心智**讲究利益交换，知道没必要怼老板：方案其实是我做的，有奖励应该归我，不然下次我不做了。
- **社会化心智**寻求关系和认可：心想自己毕竟是资深员工，别破坏团结，所以宁可受点委屈也要把话说得委婉一点——"小李很努力，我也给了支持，团队一起完成的"。
- **自我授权心智**强调原则："我这个人做事不含糊，必须清晰列举事实。你是老板你可以决策，但我得较这个真：核心方案是我提出和实现的，小李主要负责呈现和协调。"
- **自我转化心智**则是能从更高的事业考虑问题：比如想怎么帮公司迭代升级——事实就是这样，我们没必要因为这个事伤害协作，但是我建议公司搞个署名规则。

凯根的研究发现，成年人之中有 6% 停留在第二阶段工具心智，**58% 属于第三阶段社会化心智**，35% 到达第四阶段自我授权心智，**而只有 1% 达到了第五阶段自我转化心智**。也就是说绝大多数人都是被身份认同所束缚的。我想让你达到第五阶段，成为那 1%。

为此你需要一个心智升级心法，也是凯根提出来的，叫**主体-客体转化**。**主体是你与之融合、无法察觉也无法反思的东西：你是它，所以被它控制。客体是你能外化、观察、反思和控制的东西：你有它，所以能操作它。**低水平心智是把身份认同当做自己的主体；高水平心智则能把身份作为客体。**你不再是某个身份，你只是正在调用某个身份；你从在每个特定场景中只能扮演一个身份，变成随时可以在多个身份中切换。你的身份从主体降落为客体，你就从角色变成了导演。**联系到咱们前面讲的三个自我模型，高水平心智就是要把界面自我和内核自我分离：你的内核不变，但你可以根据需要随时加载不同的身份。

而我要说的黑魔法则是：**不但随时设定自己的身份，而且还要设定别人的身份。**比如你整天看新闻，看到有的官员腐败无能、说话办事非常愚蠢，你就很难过，可是你又什么都做不了，于是陷入无能狂怒。怎么才能让这个场景更有建设性一点呢？你之所以痛苦，是因为你把自己当成了国家的一个拥有者，把官员当成了父母官——这种定位根本帮不了你。**如果你换一套身份认同，把官员就当成是个普通政客，把自己当成一个政治学者呢？**用一本流行政治学教材里的话说："政客与政治学的关系，大体相当于细菌与细菌学家的关系。"这你不就释然了？现在你的视角居高临下：你不但根本不期待官员能办什么好事，而且还会很好奇他们的行为规律是什么——那么你看新闻就不但不愤怒，而且有收获。

再比如你在生活中遇到一个不可理喻的杠精：如果你当自己是辩论手、对方是平等的对手，你就会越辩越气，最后只能来一句"你这人怎么这样呢？"。**可是如果你换一个叙事，把自己当成昆虫学家，把对方当成一只罕见的甲虫**——正在对着你张牙舞爪、喷射毒液、发出刺耳的噪音——你会试图证明它是错的吗？你的自尊心会受挫吗？你只会感到兴奋和好奇。

这个魔法最厉害的用法就是**剥离对方的主体性，将其非人格化**。哲学家丹尼尔·丹内特有个理论说，我们理解一个事物的行为有三种解释，也叫三种立场：**第一种叫意向立场**，把对方当做有信念、有欲望、有意图的主体，也就是一个人；**第二种是设计立场**，把对方当成一个被设计的机器或者程序，比如你对电脑死机不会生气，你会想是内存溢出了；**第三种是物理立场**，把对方当成一个简单物体，比如石头掉下来砸到你，你不会怪石头坏。那个事物具体是什么不重要，重要的是哪个立场对它的行为最有预测力。丹内特理论的本意是"我们把人当人只不过是大脑的一种方便立场而已"，但你可以把这个理论倒过来用：**对某些人采取设计立场甚至物理立场**。比如淘宝商家客服跟你说套话，你与其当他是个具体的人在故意刁难你，不如把他当成一个只会输出固定回复的脚本。老师面对顶嘴的学生，如果用意向立场把他当冒犯者，你就会对抗；只有用设计立场把他当做"正在学习自我控制的未完成大脑"，你才能心平气和地应对。医生在急诊室面对醉酒闹事的人，如果用意向立场说"你怎么这么不讲理"，你就会被拖进情绪；用设计立场——"这是一个成瘾加压力加冲动系统在运行"——能更准确地描写这个局面；而如果你时间紧迫，使用物理立场只看伤势不看人才是最高效的做法。

**有时候切换身份是更大的真诚，有时候不把对方当人看才是真正的慈悲。**大多数人的身份认同像皮肤，碰一下就疼，因为那是长在身上的；而高阶玩家的身份认同像衣服——到什么场合穿什么款式，回家脱下来挂在门口。

我的忠告是**要防止被这个黑魔法反噬**：切换身份不是见人说人话见鬼说鬼话。身份只是界面，而你的内核自我必须稳定。否则你会进入一种危险的虚无：什么都能理解，什么都不再相信；什么都能切换，什么都不再负责。**黑魔法的最高境界不是冷酷，而是入戏但不沉迷**：你可以在行为上完美表现，但内心保持观察者视角；你可以全情投入每个角色，又随时准备落幕，干干净净地做回你自己。
`,Xh=`# 021丨安全感：人需要有所依靠

## 讲什么

成长战略模块工具：**安全感**——不需要构建什么模型，只需要在看人的时候多一个维度。安全感是一种最基本的人类需求，能决定人生的幸福和格局。

## 解决什么真问题

为什么有些人整天囤货、吹牛炫富、过度讨好或过度冷漠、对别人特别不信任？大多跟缺乏安全感有关。**他们不是在追求幸福，而是在躲避崩溃。**

## 核心论点

- 安斯沃斯"陌生情境"实验：孩子一岁左右的依恋类型，会直接影响他七岁时的受欢迎程度、将来是否是理想的婚恋对象，甚至影响他自己的孩子。**安全依恋是健全人格的必要条件。**
- 没有安全感的代价：大脑的杏仁核自动运行"威胁扫描"高耗能程序，占用大量内存和带宽，负责理性规划和创造的前额叶皮层没有资源运行。
- 有安全感，大脑才能进入"拓展构建"状态：拓展注意力、构建心理资源，你才敢于出去探索和创造。
- 鲍尔比的模型：安全感来自社会关系提供的两个功能——**安全基地**（鼓励你出去探索冒险的登山大本营）+ **安全港湾**（你失败了、受伤了，无论发生什么都能接住你的地方）。**基地鼓励你勇敢，港湾允许你脆弱。**

## 关键例证 / 金句

- 焦虑型依恋：伴侣回信息晚了五分钟，他觉得天都要塌了；老板一个眼神没对上，他能脑补出一场裁员大戏。回避型依恋：看起来独立高冷、从不麻烦别人，其实只是害怕受伤。
- **"渴望有所依靠并不可耻，人类文明本来就是一个大家互为依靠的系统。"**
- Google 亚里士多德计划：分析 180 个团队后发现，**成功团队的第一共同基因不是个人能力，而是心理安全**——在这个团队中，人际层面的冒险是安全的。
- **"你不是因为安全了才去保护别人，你是因为保护了别人才确认了自己的力量。"**

## 如何应用

- 先觉察自己的依恋类型（患得患失的焦虑型 / 习惯性推开别人的回避型），跳出旧叙事、重建新编码。
- 成为自己的安全港湾：自我关怀——像对待一位好朋友那样对待自己，承认痛苦，告诉自己"我在这里，我已经安全了"。
- 建立一个可控的小环境：整理房间、规律作息、管理财务——这个地方绝对是你说了算。
- 主动成为他人的安全感来源：做基地（"那个新想法很大胆，去试，出了问题我担着"），做港湾（先接住情绪，不急着判断对错讲道理）。

---

## 全文

> 以下为课程转录全文，已做去噪与语义分段；**加粗+底纹**处为核心论点与金句。

欢迎来到现代思维工具课，我是万维钢。这一讲的思维工具非常简单，你都不需要构建什么模型，只要在脑子里多这么一根弦，看人的时候多看这么一个维度，那就是**安全感**。安全感是一种最基本的人类需求，它能决定人生的幸福和格局。

咱们先想象一个场景。一位妈妈带着自己刚学会走路的孩子来到一个放着很多玩具的游戏房间，孩子可以在房间里随便玩。妈妈先是陪孩子待了一会，随后就离开了，让孩子独自在房间里玩，期间偶尔有陌生人进出。过了一段时间，妈妈回到房间找孩子。很简单的一个场景，**但是孩子在那段时间的表现，就在相当程度上预言了他一生的命运。**

这是上世纪 70 年代发展心理学家玛丽·安斯沃斯设计的一个经典实验。孩子的表现通常有三种：**第一种是一时半刻都离不开妈妈**——妈妈在的时候他也不敢去碰玩具，妈妈要走他立即崩溃大哭，妈妈一回来他一边求抱一边踢打和推妈妈，似乎是惩罚她的离开。这叫焦虑型依恋。**第二种叫回避型依恋**，跟第一种正好相反：进入房间立即找玩具玩，妈妈离开他不哭不闹，妈妈回来他还是自己玩自己的，似乎全不在意。**第三种是大多数，也就是大约 65% 到 70% 的孩子的表现**：妈妈在场的时候，他敢于离开母亲身边去探索房间的各个角落，偶尔回头确认妈妈的位置；妈妈离开他会难过甚至可能会哭；妈妈回来他会马上跑去求安慰，然后就擦干眼泪继续玩。这就是安全型依恋。

我们精英日课专栏曾经列举过一些研究：**一岁左右的依恋类型会直接决定一个孩子七岁时候的受欢迎程度，而且会决定他将来会不会是个理想的婚恋对象；如果这孩子成为母亲，还会影响他自己的孩子的依恋类型。**你希望你的孩子属于安全依恋这个类型。

孩子从小有没有安全感，在相当程度上取决于父母如何照看他。焦虑型依恋是照看忽冷忽热、缺乏可预测性的结果——孩子必须大哭大闹，才能把母亲的注意力锁定在自己身上。回避型依恋看似独立，实则是长期被父母忽略造成的：孩子不求大人是因为他知道求了也没用。研究者发现，妈妈离开的时候这样的孩子也会非常紧张，表现为心率急剧飙升——看来冷漠只是他们的防御面具而已。

这是否让你想起某些人在婚恋中、在职场上的表现？没错，从小属于焦虑型依恋的人在婚恋中也会焦虑，总担心对方不爱自己，在工作场合也是极度敏感：伴侣回信息晚了五分钟，他觉得天都要塌了；老板一个眼神没对上，他能脑补出一场裁员大戏。回避型依恋者长大后往往不敢参与爱与被爱：他们看起来独立高冷、从不麻烦别人，其实只是害怕受伤。只有安全依恋才让人既能亲密也能独立，既信任也确保界限清晰；只有这样的人，才既敢于全情投入探索和创造，又能在受伤时坦然寻求支持。**我敢说，安全依恋是健全人格的必要条件。**

很多人推崇独立自主，但人并不是一种特别擅长独立的动物：我们在整个幼年时期都没有独立生存能力，没人照料就会死。**我们的本能是寻求依靠，而不是寻求独立。**有依靠你才有安全感。不只是关系上的安全依恋，你需要在生活中、工作中有全方位的安全感：有安全感，大约相当于你内心确信自己处在一个不会突然塌方的系统里——环境是比较可预期的，资源是可控的，你不会突然遭遇难以承受的伤害，就算出事也有人给你兜底。马斯洛需求层次理论把安全需求放在生理需求之上作为第二层，安全感的重要性不言而喻。

**没有安全感的代价是：你的大脑就会在杏仁核自动运行一个可以叫做"威胁扫描"的高耗能程序**，探测到一点蛛丝马迹就想要战斗或者逃跑。这个程序会占用你大量的内存和带宽，让负责理性规划和创造的前额叶皮层没有资源运行。有安全感，让自己处于一种比较积极正面的情绪之中，大脑才能进入所谓"拓展构建"状态：拓展注意力、构建心理资源，你才敢于出去探索和创造，才敢于表现自我，你的生命才是丰富多彩的。

生活中有些人常常做出过分的、甚至可以说有点怪异的举动，大多就是跟缺乏安全感有关系。比如有的人整天就想买买买，家里囤积一大堆没用的东西——这是不是在前意识中用物质填补内心的安全感黑洞呢？有的人整天吹牛炫耀，出个差发三条朋友圈，挺大岁数了还拿奢侈品刷存在感——这种明显不得体的虚荣，不也是因为缺乏安全感、所以必须不断向外界抛出信号来确认自己的位置吗？有的人不知道如何跟人保持恰当距离，要么就过度讨好要么就过度冷漠，其实都是因为缺乏安全感而不相信关系的稳定性。有的人对人特别不信任、防备心理强，给人感觉就是不好沟通，想法一根筋听不进去意见，思想自动陷入封闭，其实也是因为从小没有得到过足够的保护。还有的人处处想要证明自己，过度盯着别人的评价，一次没拿第一就像世界末日，不能容忍自己出一点差错。有安全感的人绝不会如此。**也许他们曾经长期被父母忽略，又或者他们从来不曾拥有过无条件的爱。他们担惊受怕，一直都在为安全感寻求补偿。他们不是在追求幸福，而是在躲避崩溃。**

所以安全感可以说是**认知带宽节省器**，能把你从焦虑中解放出来。这比什么自律、进取都有用——你至少得先能松弛下来，才有资格谈别的。有的人说有钱有权才有安全感，说你把工资全都上交给他、你的手机让他随便查他就有安全感——其实那都是缺乏安全感导致的臆想。**真有安全感的人根本不想控制别人。**

安全感从何而来呢？依恋理论的创始人约翰·鲍尔比给了一个非常漂亮的解释模型。简单说，安全感来自社会关系——可能是亲子、夫妻或者上下级和同事——给你提供的两个功能：**安全基地和安全港湾**。

**安全基地就如同是登山大本营**：它鼓励你出去探索、冒险、尝试新项目、挑战高难度任务，基地给你提供补给和信心。孩子在陌生环境里玩耍时不时回头看一眼妈妈，那就是在确认基地还在。领导说"放手去干吧，组织是你的坚强后盾"，这也是基地。**安全港湾则是你万一失败了、出事了，有个地方无论发生什么都能接住你**：不论你在外面是受伤了、搞砸了、被客户和老板骂了，又或者只是累了，你总可以退回到这里。父母说"不行就回来吧，我们养你"，这就是港湾。**基地鼓励你勇敢，港湾允许你脆弱。**

最理想的关系是既能把你推出去、又能把你接住。然而现实中很少有那么完美的关系：妈宝男的妈妈是绝对的港湾，但不会是基地——她不会给孩子独自出去探索的勇气；雄才大略的领导是很好的基地，但万一你搞砸了，他手下还有别的大将；寒门子弟肩负振兴家族的重任，有时候连父母都只是基地而不是港湾。我看有的青年男子付出巨额彩礼供养了一个妻子，工资全交、家务全包，对方仍不满足，转头一个暂时失业就被离婚了——那真是既不是基地也不是港湾。**如果你既有基地又有港湾，你是一个幸运的人：你能出去，又能回来，你有安全感。**鲍尔比有句名言："**生活最好被组织成一系列从安全基地出发的冒险。**"有的人敢闯敢干，有的人畏手畏尾——那也许不是人家本质上是不一样的人，而实在是个人的基地和港湾配置不同啊。

那你说我既没有基地也没有港湾，从小父母的爱都是有条件的，一直被打压，从未被接纳，我毫无安全感，我该怎么办呢？好消息是**安全感是可以习得的**，你不但可以自我成长，而且可以主动寻求关系，自建安全系统。

首先你得能觉察到自己的依恋类型：也许你是患得患失的焦虑型，也许是习惯性推开别人的回避型。那都是童年阴影的编码，而那些只是编码，你完全可以跳出旧的叙事、重建新编码。当你下一次想要夺命连环 call、或者想要在冲突中冷暴力逃跑的时候，能不能先暂停一下，来个认知解耦，运用元认知能力告诉自己"这是我的旧程序在运行"？能从那个情绪中解离出来，你就已经赢了一半。

然后是成为自己的安全港湾。你至少还有自己。我们精英日课专栏多次讲过一个心态叫**自我关怀**：像对待一位好朋友那样对待自己，不要太苛责，也不用过度自给——给自己一个拥抱，承认痛苦，但是告诉自己"我在这里，我已经安全了"，切断反刍。这样你就能收获一点认知带宽。下一步是建立一个可控的小环境：你控制不了别人，但你至少可以控制自己的小环境——整理房间、装饰一下办公桌、规律作息、管理财务。做好这些，你就有了一个最小的港湾，这个地方绝对是你说了算。有了这最低限度的心理安全，你就可以出去寻找安全基地和港湾了：家庭不给力就去外边找盟友，加入社群，结交可信赖的朋友，寻找导师。**每一次最小的被接纳，都能让你的安全感增强一点点；多一点安全感，你就更敢于跟人交往，乃至于建立亲密关系。**真正的亲密关系就是彼此是对方的港湾：你不需要做到最好才能被爱，你就做你自己，甚至在你最不好的时刻他也爱你——哪怕明知是你错，他也站在你这一边。

安全感不只是幸福指标，而且事关生产力。正如个人有安全感才敢于出去探索和冒险，团队也是有安全感才能创新和出成果。尤其是复杂工作，不是说你把一群高智商的人放在一起卷、给足够的奖金就能出高绩效。Google 公司曾经有个研究叫**亚里士多德计划**，他们考察了公司内部 180 个团队搞大数据分析，想看看成功团队的共同基因都有什么，结果**排在第一位的不是个人能力，而是心理安全**。哈佛商学院的艾米·埃德蒙森教授对心理安全的定义是：**在这个团队中，人际层面的冒险是安全的**。心理安全高的团队里，成员敢承认错误、敢问问题、敢挑战现状、敢提疯狂想法，因为他们确信这样做不会被羞辱、被排斥或者受惩罚——也就是他们感到这里有基地和港湾。研究发现心理安全高的团队，成员离开公司的可能性更低，产生多样化想法和被评為高效的可能性都是其他团队的两倍——他们鼓励试错而且不怕责备，所以他们敢复盘、能从错误中学习。反过来说，心理安全低的团队里人怕负责，所以人都只会甩锅：在这里说真话会死，所有人假装一切都在良好的运行，每天大部分工作是撇清责任，什么事领导不推就坚决不动。领导说"你们怎么都不积极主动呢"——殊不知这里最大的责任人就是你：是你每天都在挑剔，是你实行严苛的 KPI，是你自己拍脑袋的决策出了事让下属背锅，**是你不配给人当安全基地和安全港湾。**

孩子没有安全感是家长的责任，员工没有安全感是领导的责任。**但与其抱怨别人不给自己安全感，不如主动成为他人的安全感来源。**你可以做基地：告诉孩子"大胆去玩吧，我会在这里看着你"，告诉下属"那个新想法很大胆，去试，出了问题我担着"。你要真诚、具体地看见对方的优点和努力——其实安全感很大程度上来自被看见，你要提供切实的支持给人撑腰。你还可以做港湾：在别人脆弱的时候，你先接住情绪，不急着判断对错讲道理，要点是"我明白，我在这里陪着你"。在你的人跟他人发生冲突的时候，咱不是说非得拉偏架，咱有错咱也改，但你必须首先确保自己人相信：你绝对站在他这一边。**你的支持和关心必须是一致和可预期的，你的承诺必须是可靠的**，不然别人就会陷入焦虑和回避。

而当你这么做的时候，你就不再是一个索取者，而是一个供给者。别人会发现你是个可以依靠的人，而你会发现自己因为被人依靠而变得前所未有的强大——就好像刚刚生下孩子的女性一样，你默默地想：既然我能保护别人，那我一定是很安全的。**你不是因為安全了才去保护别人，你是因為保护了别人才确认了自己的力量。**

世界很不确定，但是如果因此就一辈子小心翼翼过活，那也太可怜了。**安全感是一个人敢探索的前提，而探索决定了这个人能活出多大的生命历程。**敢出来探索的人都拥有两样东西：一个是锚点，也就是安全港湾，让你在风暴中不被吹走；一个是翅膀，也就是安全基地，让你能摆脱平庸的引力。渴望有所依靠并不可耻，人类文明本来就是一个大家互为依靠的系统。我们生活在一个很不确定的世界，那么如果你能给别人提供一点确定性，乃至于成为别人的依靠，你就是极为宝贵的存在。**安全感是你对世界输出的秩序。你会因为提供基地和港湾而成为一个稀缺节点：人们围绕你合作，和你建立长远关系，愿意把真实的自己交给你，那么你将获得极为强大的社交资本。**还是那句话：被依赖，是当今世界给你最好的待遇。
`,Zh=`# 022丨赛道选择：做天兵天将，还是做孙悟空？

## 讲什么

成长战略模块工具：**赛道选择**——你打算入哪个局。选择大于努力：在重尾世界里，高回报不是对辛苦的补偿，大乘就不是对的机率。这个世界喜欢奖励不对称的优势。

## 解决什么真问题

一个段子：你出生在修仙世家，天赋异禀，拜入名门正宗，历经千余年苦修度过数次天劫，终于得道飞升——然后成为了阻挡孙悟空的十万天兵之一。**不是不努力，也不是不聪明，每一步都走对了，可跟人家孙悟空一比，你只是个平庸的编号而已。**到底差在哪了？

## 核心论点

- 天兵天将和孙悟空玩的是两种完全不同的游戏。**赛道选择选的不是岗位，而是人生叙事权：天兵天将是别人故事里的 NPC，孙悟空是自己宇宙的叙事原点。**
- 体制内 vs 体制外：体制内的人只是在适应别人的秩序，待遇本质上是上面分配给你的，需要钻研关系逻辑；体制外的人直面真实世界，必须研究物理世界逻辑（技术允许吗？成本合理吗？市场会买单吗？）。
- 天兵赛道的第一修行：**把指标当工具，而不是当人生**——否则你就是个随时可以被牺牲的工具（古德哈特定律的预演）。
- 孙悟空赛道的两个战略能力：**利基构建**（不是寻找生态位，而是直接构建自己的生态位）和**效果推理**（打开冰箱看有什么菜就做什么饭）。
- **真正危险的是用天兵的心智在重赛道上求稳，或者用悟空的性格在科层体系里求自由。**

## 关键例证 / 金句

- 三道自测题：你每天主要焦虑的是绩效考评，还是自己在长期能力曲线上的位置？你最害怕被组织淘汰，还是失去好奇心停止升级？你这一生想成为谁——一个职称，还是一个改变人们思考方式的人？
- 组织行为学发现：**政治技巧与工作表现、声誉和职业成功都有稳定的正相关关系**——升不升你往往不是看你干了多少活，而是看别人能不能看见你干了什么活。
- **"体制内最大的系统性风险是规则突然变了：上级倒台、部门裁撤、赛道转向、指标口径调整——你过去十年练的枪法瞬间成了过时的武术。"**
- 孙悟空不应该去应聘弼马温那种现成的岗位，而是需要"齐天大圣"这样为自己量身定制的利基。

## 如何应用

- 先选游戏，再谈最优策略：到任何一个系统之前，先搞清楚这是个什么局、规则是什么。
- 就算已经是天庭的猛将，最好也有自己的秘密项目——悄悄修一个花果山副本（呼应能耐寻求定理：平时多给自己赋能）。
- 创新最容易起源于边缘地带，最理想的起步地点是一个灰色区域。

---

## 全文

> 以下为课程转录全文，已做去噪与语义分段；**加粗+底纹**处为核心论点与金句。

欢迎来到现代思维工具课，我是万维钢。有句话叫"选择大于努力"，你越了解真实社会就会越认可。加法世界里结果正态分布，你多一分努力就多一分收获；可是在我们这个重尾世界，你想有大成就，就得跟人做乘法——那么选择跟谁相乘就特别重要：乘对了结果指数级放大，乘错了甚至乘了负数，那结局就很不好了。**高回报不是对辛苦的补偿，大乘就不是对的机率。这个世界喜欢奖励不对称的优势，你希望在正确的时机出现在正确的一方。**这可不只是读个好专业和进个好行业的问题，那些还都属于细节。**最重要的是你要选择玩什么游戏。**借用博弈论的一个说法，这一讲的思维工具可以叫做**赛道选择**——也就是你打算入哪个局。

网上流传一个段子，建议把自己带入品一品：你出生在修仙世家，从小天赋异禀，后来更是拜入名门正宗，历经千余年苦修度过数次天劫，才最终得道飞升——**然后成为了阻挡孙悟空的十万天兵之一。**我理解这是一个做题家成为公务员的故事：不是不努力，也不是不聪明，家里条件也给力，每一步都走对了，每一步都是大多数人的理想，每一步都赢了很多人，后来得到的位置也不是不满意。可是跟人家孙悟空一比，你只是个平庸的编号而已。而你当年那个不守规矩、整天干一些离经叛道事情的同学，如今却成了一方人物。到底差在了哪呢？

**孙悟空和天兵天将玩的是两种完全不同的游戏。赛道选择选的不是岗位，而是人生叙事权：天兵天将是别人故事里的 NPC，孙悟空是自己宇宙的叙事原点。**我这里可不是说就应该选择做孙悟空：咱们必须考虑幸存者偏差，大多数想做孙悟空的人最终只不过是普通的妖怪，早就被天兵天将轻松灭了。站在十万天兵天将面前的孙悟空是一个孤独的幸存者。**但是你得承认，孙悟空和天兵天将的体感完全不同。**

天兵天将这条路线就如同一个好学生：一路通过考试、名校毕业、进入一个大机构——可能是公务员，可能是国企，可能是大型民营企业——要点是天兵天将都是那个大体制中的一份子，也可以说是螺丝钉。我们可以把这个路线叫做体制内。**你没有建立那个体制，你是去适应体制的。**这里的游戏规则是遵守流程、完成考核、按部就班升级，在既定框架里不断优化自己。如果你上进心强，你要学会向上管理、向下协作，理解规则、利用规则，在规则允许的范围内争取更好的位置。

而孙悟空的路线则是体制外：可能是个自己创业的企业家，也可能是个自由职业者，要点是**你必须直面真实世界，而不是别人建立的规则**。你不会因为把事情做对了就不必担责，你必须承担所有的风险。

体制内玩家需要钻研关系逻辑：这是因为你的待遇本质上是上面分配给你的——提拔、考核、表彰、奖励都来自于上级，你必须被人家（很多时候是一个具体的人）认可，才能占据一个好位置。而体制外玩家则必须研究物理世界逻辑：现有技术条件允许吗？成本合理吗？市场会怎么反应？用户会不会买单？你得操心许多实实在在的事情，而不是说搞定一个关系就行。**简单说，天兵天将的地位来自他们被分配的位置，而孙悟空的地位则是自己创造出来的。**我私下认为是孙悟空这样的人在养着那些天将；但是如果你选择做天将，我也完全理解，毕竟这个世界需要的填补体制的人总是远远多于创造和改进体制的人。但是不论怎么选，你都有必要搞清楚选择意味着什么。

**赛道选择的要义是先选游戏，再谈最优策略。**有太多的人根本没有赛道选择的意识，直接跳过了选游戏这一步：可能是父母安排，可能是随波逐流，莫名其妙地进入某个系统，然后几十年都没搞清楚这样的系统应该怎么玩。就如同被推着去参加了一场比赛，规则你没看，赛道材质没摸，连对手是谁你都不知道。那努力又有什么意义呢？

如果你有选择的意识，那么最重要的选择就是体制内还是体制外。其实做孙悟空也不见得就要对立或者反抗体制：你完全可以自己建立一个小体制，或者对现有的体制做出一些改造，哪怕只是提改进的建议。**关键区别在于：体制内的人只是在适应别人的秩序，而体制外的人会有更多的想法和主动性。**这两种思维模式可是太不一样了。

我让 GPT 出了三道自测题，帮你选择到底要做孙悟空还是更适合做天将。**第一题：你每天主要焦虑的是 A. 今年的绩效、晋升和考评，还是 B. 自己在长期能力区和影响力曲线上的位置？第二题：你最害怕的是 A. 被组织淘汰、丢掉头衔，还是 B. 失去好奇心、停止升级？第三题：别人问你这一生想成为谁，你的第一反应是 A. 一个职称或者岗位（比如总监、教授、首席科学家），还是 B. 一个功能（一个改变人们思考方式的人、一个开创新行业的人）？**如果你几乎全是选 A，你更适合当一个天兵，在明确规则下做长期优化，你能越爬越稳；如果你都选 B，你更像悟空，你受不了被定义，你想要有所创造。**这里不是价值判断：天兵不丢人，悟空也不高贵。真正危险的是你拿天兵的心智在重赛道上求稳，又或者用悟空的性格在科层体系里求自由——那样你会很惨，只落得一大堆抱怨。**

就得尊重你那个游戏的玩法。天兵赛道的特点是讲究标准化：分数、名次、KPI、头衔，如同一把刻度清晰的尺，你得不断地接受考核。系统对你的评价往往不是基于你把事情做得有多好，而是你把事情做对。当然你很优秀，可是身旁就有很多像你一样优秀的人也在做同样的事——**在系统眼中，你是非常可替代的。体制内生存的伤害是人们会把指标当成目的**：在某些时刻，你会发现没有什么比完成组织设定的指标更重要——这就是体制对人的异化，这叫古德哈特定律，咱们后面再专门讲。**所以当天兵的第一修行是：请把指标当工具，而不是当人生，否则你就是个随时可以被牺牲的工具。**只有认识到那些指标只是工具（而且还不一定管用，很多只不过是临时拍脑袋的决策而已），你才能真正理解上级的意图、共情于他们的困境，那么你就可以搞一点政治了：比如**与其内卷指标不如管理预期，与其比拼执行力不如竞标解释权**。搞政治并不是不道德的事，你要把政治技巧当成一门技术科目。组织行为学早就发现，**政治技巧与工作表现、声誉和职业成功都有稳定的正相关关系**；还有研究发现政治技巧和可晋升性相关——升不升你往往不是看你干了多少活，而是看别人能不能看见你干了什么活。哪里的舞台都喜欢更会讲故事的人。

很多人选择进入体制是为了求一个安全稳定，但那可能只是一厢情愿。**体制内最大的系统性风险是规则突然变了**：上级倒台、部门裁撤、赛道转向、指标口径调整——你过去十年练的枪法瞬间成了过时的武术。所以我还是想提醒你回到前面讲的能耐寻求定理：平时得多给自己赋能才行。就算你已经是天庭的猛将，最好也有个自己的秘密项目——**悄悄修一个花果山副本**。

孙悟空赛道没有标准打法，你自己给自己设定目标：你认为这个世界上有些地方不太对，所以你想做一个更好的东西出来。你的存在是对现有秩序的挑战，或者说是对系统的压力测试。创新最容易起源于边缘地带，最理想的起步地点是在一个灰色区域——正如花果山原本不归任何部门管。你需要练就几个不对称的技能：不是在某个统一标准下多考几分，而是七十二变——因为很少有人练这些，以至于你拥有碾压式的差异。比如你最好拥有跨学科和跨场景的思维工具，具备高水平的决策技能，能迅速看穿一个叙事的本质，也许你还擅长资源整合，再加上一点领导力和说服力，这些咱们后面再讲。

这里我想说两个战略性的能力。**一个是利基构建：不是寻找生态位，而是直接构建自己的生态位。**利基构建其实是一个生物学概念：生物学家发现生物不只是被环境选择，生物也会主动改造环境，从而改变选择压力——像河狸筑坝、蚯蚓松土都是典型的利基构建。也就是说，**孙悟空不应该去应聘弼马温那种现成的岗位，而是需要一个"齐天大圣"这样为自己量身定制的利基**。让别人去 KPI、头衔、组织的资源吧，你不如直接出作品、积累用户，发展不需要人批准的影响力。

那你说从何入手呢？**另一个战略思维工具叫效果推理**，这是弗吉尼亚大学达顿商学院的萨拉斯·萨拉斯瓦蒂教授 2001 年提出的理论，说创业其实是一种饭事转化。一般人做事的范式可以称之为因果推理：先有目标、有个想解决的问题，然后看看在我这个特定环境里我能把这个问题解决到什么程度。而效果推理则是：先看看我手头有什么资源、有什么关系、我能调用什么技术，想我把这些东西组合起来、迭代合作，能做出一个什么东西来——也许是个新游戏，这个东西也许正好能解决某个问题。萨拉斯瓦蒂说这就如同大厨做饭：**因果推理是照着菜谱买菜，效果推理则是打开冰箱看有什么菜就做什么饭。**

我前段逛 CES 消费电子展，对这种效果式创新的感受特别强烈：AI 也好，医疗可穿戴设备也好，很明显那些公司不是说"你们有一个问题，我终于帮你们找到了解决方案"，而是说"当前技术前沿恰好到了这个程度，我恰好能拼凑出这么一个产品来，也许对你们有用"。**你做的不是你该做的事，你做的是你能做的事。**听起来是为了创业而创业，但这恰恰是供给侧心态：我能贡献这么一个你们没有的东西，也许市场正好需要，不行我就再换一个。变化是主动而不是被动的——生物的自然选择不也是如此吗？

**天兵填写别人设计好的表格，悟空另开一张表。**天兵天将和孙悟空都有存在的合理性，但这可绝对不是说"你当孙悟空也行，当天兵天将也对"，否则就成了努力大于选择，而不是选择大于努力。让某些人到一家公司上班、天天听人指挥，他们肯定觉得特别不幸福；但是我也能理解，有些人认为离开体制是不可想像的。**赛道选择不是找捷径，不是说五年后哪个专业热门，而是选择你在什么结构里、和谁一起、被什么样的力量所放大。**在某种意义上这也是选一种痛：你是愿意忍受"不得不听命于人"的屈辱，还是"随时可能一无所有"的焦虑呢？当天兵和当悟空的整个工作方式都截然不同，各有各的打法，各有各的道理。**最怕的是身在体制之内却幻想大闹天宫的成就，或者深处乘法世界却眷恋体制之内的安稳。**

你可能觉得我是不是还是对天兵天将有偏见，总想让人去做孙悟空——其实不是。咱们下一讲的思维工具就能帮你成为更好的天将。
`,Yh=`# 023丨场域：识时务者为俊杰

## 讲什么

成长战略模块工具：**场域理论**——法国社会学家皮埃尔·布迪厄在 1970 年代提出，20 世纪后半叶社会科学的重要创新之一。全社会不是一个统一的大市场，而是由许多相对独立的场域组成，每个场域有自己的规则、筹码和裁判。

## 解决什么真问题

名校毕业、业务能力强的新人，在会上指出单位的问题和领导决策的风险，两个月后绩效评价是"不够成熟、急功近利、不懂协作、缺乏大局观"。而会来事的关系户升职了。**这不公平，但也许对方才是更聪明的那个人——也许潜规则才是真规则。**

## 核心论点

- 场域四个关键概念：**位置**（场不是地方，是关系网；人只是位置上的临时演员）、**doxa**（不言自明的正统信念，你往往意识不到它的存在）、**惯习**（你身上被社会结构内化了的默认设置）、**资本**（场域内部的货币，不同场域汇率不同）。
- **你能不能在场域被承认，不取决于你多聪明多努力，而取决于你是否符合这个场域对"好"的定义。**
- **象征资本**是场域里最重要的资本：拥有它的人拥有这个场域的最高叙事权——他说什么东西好，什么东西就好。
- **很多你以为的品质问题其实是结构问题，你以为的不公平其实是你不理解赛场的积分规则。**

## 关键例证 / 金句

- 萨根效应：卡尔·萨根发表 600 多篇学术论文、康奈尔终身教授，1992 年落选美国科学院院士——因为他太出名了。学术界的 doxa 推崇纯理论性和艰深性，**"越晦涩越专业，越受小圈子认可越显得是真学问；越通俗越畅销，就越可能被怀疑不够严肃"**。
- 春节家庭聚餐这个场域，资本不是你的年薪，而是你的顺从程度和你的繁衍状况。
- 体制内晋升最需要积累的资本：**组织对你的可见度和风险的可控度**——多在领导面前露脸不一定是讨好，是为了降低领导心目中你的不可预测性。
- **"办事不由东，累死也无功""到什么山上唱什么歌"——必须尊重所在场域的游戏规则。**

## 如何应用

- 到一个地方先问：这是一个什么场？这里奖励什么？如何积分？了解场的网络结构（大小王是谁）、识别 doxa（哪些观念不可挑战）、查看周围人的惯习（自己是否兼容）、积累场域看重的资本。
- 理解场域不等于委屈自己。识时务者为俊杰，实在不行还可以换个场域。
- 人应该有改变不合理场域的勇气，但必须尊重场域——在很长时间内，它就是你的硬条件。

---

## 全文

> 以下为课程转录全文，已做去噪与语义分段；**加粗+底纹**处为核心论点与金句。

欢迎来到现代思维工具课，我是万维钢。想象你是一个刚刚从名校毕业、满怀理想的年轻人，幸运地入职了一个事业单位，工作稳定且受人尊敬。你聪明又勤奋，业务能力强，打算大展宏图。入职没几天，你就发现单位有很多问题、办事效率太低。一开始你还想谦虚低调，可是过了一段时间实在忍不住，就在一次例会上把问题提了出来，还点出了领导决策的风险。然而领导什么也没说，同事也都打马虎眼，就这样过去了。两个月后你得到的绩效评价是：**"不够成熟，急功近利，不懂协作，缺乏大局观。"**

当初跟你同时入职的还有个小许，好像是个关系户，业务能力一般，甚至经常拖进度，可是小许很会来事，总能看似不经意地给领导提供情绪价值；做出点成果来，他总是归于组织协调；出了问题就甩锅给外部条件变化。没过多久，小许升职了。你感到很不公平：这不就是潜规则吗？这不就是歪风邪气吗？像我这样优秀的人怎么就不能灿烂过一生呢？

诚实地说，此恨人人有。但既然这样的事到处都是，**也许小许才是更聪明的那个人呢？也许潜规则才是真规则呢？**市侩哲学会说：你从一开始就错了，江湖不是打打杀杀，江湖是人情世故。而我们要讲的这个思维工具可就高级多了：我们不把这个局面叫江湖，也不叫圈子，这叫**场域**。

场域理论是法国社会学家皮埃尔·布迪厄大约在 1970 年代提出来的。你不一定听说过布迪厄，他在学术界的地位可是极高，被引用次数长年霸榜，场域理论更被认为是 20 世纪后半叶社会科学的重要创新之一。简单说，**场域就是一个游戏的赛场，或者说是一个由不同位置组成的关系网络。每个赛场都有自己默认的规则，赛场中的每个位置都在争夺自己的竞技筹码，胜负由赛场自身规则决定。**

**你能不能在场域被承认，不取决于你多聪明和多努力，而是取决于你是否符合这个场域对"好"的定义。**如果人家场域最注重的是跟领导的关系、一切以上级意志为重，你非得跳出来讲效率讲风险，岂不是缘木求鱼吗？中国有句话叫"办事不由东，累死也无功"，又讲"到什么山上唱什么歌"，说的就是必须尊重所在场域的游戏规则。**如果你都不看方向盘在谁手里，一味努力就是低级错误。**人家方向盘把你指向悬崖，你就只能壮烈牺牲，然后组织上还给你贴个标签叫"抗压能力不足"。

布迪厄的洞见是：**全社会并不是一个统一的大市场，而是由许多相对独立的场域组成的，每个场域有自己的规则、筹码和裁判。你在一個场域里的正确姿势，到另一个场域可能就是犯规。**所以别老问"我够不够优秀"，到一个地方应该先问：**这是一个什么场？这里奖励什么？如何积分？**如果你自以为很不错，可是受到的待遇不好、上上下下都不待见你，那很可能并不是社会有意跟你做对，不是针对你个人，而只不过是就事论事——人家比你更尊重场域而已。**努力不是硬通货，合归才是。**场域理论是个非常好的分析框架，社会上各种局面——商业、教育、文化、艺术、媒体——都能套进去。布迪厄不认为自己发明了一个理论，他认为自己发明了一个工具。

先说场域理论的几个关键概念。

**第一，场不是一个地方，而是一张关系网。**场域由不同位置之间的关系构成。就拿开头那个事业单位来说：这里有资深专家，有中层骨干，有领导层，还有你这样的新人，这些都是位置。领导占据了分配资源的节点，能让其他人动起来；但资深专家掌握了知识的解释权，他拥有可以影响领导决策的技术资本；而你这个新人可没资格。**这个人是谁、他有多大能力都不重要，重要的是他所处的位置。一个场域里的人会经常变，但位置长期存在，人只是位置上的临时演员而已。**

**第二个概念叫 doxa**，是场域里不言自明的信念。doxa 这个词来自希腊语，一般翻译成正统观念或者本见。你可以说这就是潜规则，但它是更理所当然的潜规则——因为你往往甚至都意识不到它的存在，你自然地就觉得事情本来就应该是这样。每个场域都有自己独特的 doxa，读书人自以为是的那套通用时往往行不通。**如果"领导永远是对的""团结压倒一切"是你那个单位的 doxa，那你质疑领导就不只是在挑战某个人，而是挑战场域的物理定律，你会遭到整个场域的排异反应。**

**第三，惯习是你身上被社会结构内化了的默认设置**：你觉得什么是体面、什么是冒犯、什么值得追求，你下意识怎么说话、怎么判断人。惯习不是生活习惯也不是性格测试，而是你做事时候不加思索的反应。你的惯习可能跟一个场域的规则兼容，也可能不兼容。人家小许为什么在单位混得好？因为他出身于机关家庭，从小耳濡目染，早就养成了适合体制的惯习：领导话还没说完他已经把茶倒好了，一听说要汇报就知道对齐口径，一听说要材料就知道确保政治正确，开会时什么该说什么不该说他根本不需要过脑子。而你的惯习来自某所 985 大学的场域，你崇尚真理、讲究平等辩论，那你当然跟单位的 doxa 不兼容。

**第四，资本是你手里有什么筹码。**一切能在竞争中转换为优势和权利的资源都是资本。我们前面讲复利的时候说过，布迪厄提出资本不只是金钱，还包括社会资本、文化资本、声望资本等等，都是可以积累的。**资本是场域内部的货币**：像那个事业单位场域里，忠诚、资历这两种资本的汇率最高，那你光有点文化资本可是不行啊。

有了这些概念，在任何一个场域里玩好游戏的攻略就是显而易见的了，你得做好下面这四件事：**一，了解场的网络结构**，熟悉位置之间的关系，最起码得知道大小王是谁；**二，识别 doxa**：人们默认的底层逻辑是什么？哪些观念是不可挑战的？**三，查看周围人的惯习**，反思自己的惯习是否兼容；**四，要想赢，你得想办法积累场域看重的那些资本。**

有了场域思维，你就从抱怨潜规则升级到了尊重社会结构。**重要的不是你有多少绝对才华，而是你展示的能力是否被这个场域所认可。**当你的惯习终于被打磨得严丝合缝，你把场域的 doxa 当成了自己的信仰，你就适应了社会。

你可能觉得前面那个事业单位太官僚主义、太低级了，你说高级的地方就没有死板的 doxa。那咱们就先看一个最高级的地方：学术界。卡尔·萨根是非常著名的天文学家，是康奈尔大学的终身教授，发表过超过 600 篇学术论文，在行星大气还有核冬天理论上都有奠基性的贡献。按理说萨根当美国国家科学院院士绝对够格，本来萨根也进了 1992 年的院士候选人短名单，只要投票走个过场就能当选。但是就在投票的时候，他受到了强烈的质疑，竟然落选了。为啥呢？**因为萨根太出名了。**萨根写畅销书、上电视节目，还拍了有几亿人观看的纪录片，拿了普利策奖——结果人家说：你是个科普作家，你不是科学家。其实萨根作为科学家的成就已经够了，比参与投票的很多院士都高，但是没用。**学术界的 doxa 推崇的是纯理论性和艰深性，而你搞通俗，在这里就是不纯洁、就是叛逆。**学术界最看重的资本是论文、引用数、头衔和同行的认可，而不是被大众喜欢的那种出名，更不是你个人赚了多少钱。用布迪厄的话说，这里是个反向市场：**越晦涩越专业，越受小圈子认可，越显得是真学问；而越俗、越畅销、越被大众喜欢，就越可能被怀疑不够严肃。**那你说是不是那帮院士在嫉妒萨根？肯定有这个因素，但关键在于人家真可以惩罚你，因为那符合 doxa。就这个场域而言，萨根的惯习是有点不容的。这个固现在被称为"萨根效应"。

有时候一个场域里的各种资本之间可能有冲突。就拿新闻界来说：你到底是追求受众的关注度，还是追求专业声誉呢？关注度带来收视率、点击量和发行量，可以直接变现；专业声誉是来自新闻奖项、职业伦理和同行的认可，是长期的安身立命之本。面对一个局面还不明朗的大事件，关注度要求你先把消息发出来再说，专业声誉则要求你先等一等、给一个更可靠的说法、拿出更权威的意见。这就需要你做出取舍了——那么你得研究自己在场域的具体位置，判断积累哪种资本对你最有利。

咱们说一个布迪厄更深的洞察：**在场域里最值得追求和最重要的资本是象征资本。**象征资本可以是一种文化资本、社会资本，也可以是经济资本，最关键的是它决定了你的名誉和权威。**拥有了象征资本，你就可以直接定义其他资本的正确性。**比如你是个来自普通大学、好不容易考上名校的研究生。在一次研讨课上，你们导师说起了某本书，评价说"他这个思想是某某某的套路"，师兄师姐们都笑了起来。可是你完全不知道这句话的笑点在哪。**这个内部梗就是你们导师在使用他的象征资本**：他那句话既讽刺了某某某，又讽刺了那本书，这就等同于说在你们这个场域里，那个方向的文化资本已经被看扁了。那这时候你敢站起来说"我认为某某某的套路是很好的，值得我们学习"吗？你当然不敢——导师能让你不敢。**这就是你们场域里的象征暴力：拥有象征资本的人拥有这个场域的最高叙事权。**他说什么东西好，什么东西就好；他说这个不好，你们的评价标准就得跟着变。你听不懂那个内部梗就会被排挤，于是你默默接受了人家的价值定义，甚至用那个定义去评价自己。明明是别人的象征暴力，你反而还自责，觉得是自己不懂行，于是你主动改造自己的惯习去迎合他们。**你终究臣服于场域。要想改变场域，你必须先拿到象征资本。**

最后说几个常见的场域。**春节家庭聚餐**这个场域里的关系，其实是家族的等级秩序和情感连接，是面子，而不是大家坐在一起吃饱饭。这里的 doxa 就是要孝顺、长辈说啥都是对的，所以这里的资本不是你的年薪，而是你的顺从程度和你的繁衍状况。**大学辩论队**的场域不是谁最会讲道理，而是使用辩论场域认可的论证套路——一旦适应了这个场域，你到哪说话都带点辩论味。**体制内**晋升不是靠业务，你最需要积累的资本其实是组织对你的可见度和风险的可控度：多在领导面前露脸不一定非得是为了讨好领导，而是为了降低领导心目中你的不可预测性。**科技创业公司**所需要的惯习和大型国企不同：你最好有一点黑客精神，你最需要积累的资本是你搞定难题的战绩，而不是跟老板的私人关系——要应聘一家科技公司，你最好会几句行业黑话，让对方认可你的惯习。

说到这里你大概能同意，**布迪厄不是教人圆滑或者服从潜规则，他只是告诉我们这个社会有这么个性质而已：很多你以为的品质问题其实是结构问题，你以为的不公平其实是你不理解赛场的积分规则。**有潜规则不等于尊重规则，不等于委屈了自己，正所谓识时务者为俊杰。实在不行，你还可以换个场域。但场域是可以改变的：当初布迪厄正是因为看见时代已经变了、场域已经变了，但是场域里的人们的惯习没有跟着改变，他从感慨中得到启发，推出了场域理论。**我认为人应该有改变不合理场域的勇气，但是我们必须尊重场域——因为在很长时间内，它就是你的硬条件。**

下一讲的思维工具是探索与利用，我们说怎样继续做个年轻人。
`,qh=`# 025丨探索与利用：怎样继续做个年轻人

## 讲什么

成长战略模块倒数第二讲：**探索与利用的权衡**——计算机科学和决策理论中的经典问题（多臂老虎机问题），也是人到中年该不该继续折腾的科学答案。

## 解决什么真问题

影视剧的主人公都是年轻人，过了 40 岁有些剧情就不会发生在你身上了。但真实世界里干大事的其实是中老年人（诺贝尔奖得主获奖工作大多 40 岁后完成，创业成功者平均年龄 45 岁）。**绝大多数中老年人正在退出社会舞台——他们不再制造任何悬念。怎么避免成为那种人？**

## 核心论点

- 探索是付出成本换取信息，利用是对已知信息榨取最大收益。**探索的目的是利用。**
- 三条原则：**先探索再利用**（把人生前期当做采样期）；**不能一味探索而不利用**（最优停止：看过 37% 之后就下决心）；**哪怕已有不错的可利用选项也要继续探索**（任何利用都会陷入边际效益递减）。
- **吉廷斯指数**：探索还是利用取决于游戏还有多少剩余时间。剩余时间越长，探索的价值越高。
- 退出社会生活会加速衰老的反馈回路：退出→输入减少→大脑和身体启动节能模式→更不愿走出去→越退出越不健康→直至死亡。**与其说是因为衰老而退出，不如说是因为退出而衰老。**
- 连胜期的秘密（王大顺）：**总是先探索再利用，利用出成绩之后再探索再利用**——连胜期之前通常有一段高变异性的探索阶段。

## 关键例证 / 金句

- 超级老年人研究：80 多岁老人认知能力和中青年一样好，最重要的因素是**接触新奇有趣的事物，特别是学习新技能**——不是跟老朋友喝茶聊天，而是实打实的真学习。
- 一个狠研究：58-86 岁老年人同时学习至少三种新技能（西班牙语、绘画、音乐创作），密集训练三个月后，认知测试成绩提升到**平均比自己年轻 30 岁的水平**；课程结束一年后再测，竟达到比年轻 50 岁的人的水平。
- 彼得·杰克逊：拍《指环王》大火之前有很长探索期（恐怖片、喜剧片、剧情片），拍完奇幻系列又转型拍纪录片。
- **"年轻不是皮肤状态，年轻是系统更新的频率。"**
- 30 岁就觉得大局已定，是对吉廷斯指数的侮辱。

## 如何应用

- 刚过 30 岁别急着"找个安稳工作干到老"——后面还有三四十年职业生涯。
- 把探索和利用搞成固定节律：探索不是游荡，是为了找到可深挖的矿脉；利用不是保守，是摸到好牌先打赢再说。**赢了这一把不是职业生涯就此定型，挖完这个矿还要再去找下一个矿。**
- 老年人防衰老：去学需要持续投入、高挑战、学成真有用的新技能，而不是刷短视频。

---

## 全文

> 以下为课程转录全文，已做去噪与语义分段；**加粗+底纹**处为核心论点与金句。

欢迎来到现代思维工具课，我是万维钢。到了一定年纪，你会有一个明显的观感，那就是影视剧的主人公都是年轻人：他们一般在 20 到 30 岁之间，他们谈恋爱、拯救世界、创业或者只是犯错然后成长。过了 40 岁，有些剧情就不会发生在你身上了，再往后你可能连存在感都没有。2015 年北美票房前 100 名的电影中，60 岁以上的角色只占 11%，远远低于真实世界的人口占比。舞台属于年轻人，中老年人在屏幕上通常只有两个功能：要么是作为背景板的慈祥长辈，要么是作为阻碍年轻人成长的顽固势力。就算还允许你存在，你也没戏了。

这是一种偏见还是对真实世界的准确描写呢？一方面，**在真实世界里干大事的其实不是年轻人，而是中年人甚至中老年人**。以前人们认为科学发现是年轻人的事业，但现在绝大多数诺贝尔物理学奖得主的获奖工作都是在 40 岁以后完成的；媒体喜欢报道大学生甚至高中生创业成为亿万富翁的故事，但**中年人创业成功的概率远远大于年轻人——创业成功者在创业那一年的平均年龄是 45 岁**。再想想当今影响力最大的电影导演或者艺术家、特别是政治家，他们大多都是年过 60 的人。

可是另一方面，干大事的只是少数人。**绝大多数中老年人的确正在退出社会舞台**：他们默默地收拾行囊奔向退休生活，他们的日子的确不值得被拍成电影，因为他们不再制造任何悬念。所以中老年人其实有两种：一种是顺应社会设定逐渐熄火的普通人，另一种则是被科学家称为"超级老年人"的异类。影视剧只是迎合普通人的观感而已。这一讲的思维工具告诉你怎样做第二种人。**如果你想让自己有剧情，你得折腾才行。**科学的说法叫探索：也就是今天尝试一下这个，明天去一下那里，做一些可能会带来意外回报、但是伴随着风险的事。

年轻人没有地盘，不得不探索，所以总会遇到有意思的事。但是人到了中年，已经探索过一片天地、找到了一个舒适区，就会认为自己只要继续待在那个探索成果之中就可以了——这叫**利用**。如果你已经打下了一块很好的地盘，难道不应该就在这块地盘里深耕和好好享受吗？还有必要继续出去探索别的地盘吗？可是如果你从此就不出去探索，万一错过更好的地盘呢？我们要说的思维工具就是**探索与利用的权衡**。这其实是计算机科学和决策理论中的一个经典问题，也叫多臂老虎机问题：你面前有好多台老虎机，每台机器的中奖概率不同，你不知道哪台高哪台低，你手里有一把硬币代表有限的时间和精力，怎么办呢？你有两种策略：**探索就是去试那些没玩过的机器**，这可能会让你输钱，但也可能让你发现一台超级大奖机器；**利用则是你已经发现了一台中奖率还不错的机器，于是就死守着他玩**。探索是付出成本换取信息，利用是对已知的信息榨取最大的收益。去一家新餐馆吃饭是探索，去那家你最爱吃的老面馆是利用；研发新产品是探索，加注推销那个最畅销的爆款是利用。

如何权衡探索与利用？学术界提出了很多算法，我们不必一一细说，但是有几个原则你需要考虑。

**第一个原则是先探索再利用。**你都没见过几个好东西，怎么能认准眼前这个东西呢？然而很多人恰恰就是不探索就利用、不采样就下注，比如打误撞进入一个行业就决定利用一辈子。正确做法是把人生前期当做采样期：实习、跨部门、旁听课、做项目、见人和写东西，先知道自己适合什么。

**第二个原则是不能一味探索而不利用。**如果你已经大致了解哪些东西是好东西，就应该抓住一个好东西深耕了。这里有个最优停止问题，也叫秘书问题，也可以叫选择结婚对象问题：你不应该遇到第一个感觉不错的异性就结婚，但也不应该看过很多个异性都一直不结婚。**数学上的最优解是：如果异性大致随机分布，你应该在面试过 37% 的人选之后就判断出什么样的对象对你合适，然后遇到下一个合适的对象就立即结婚。**

**第三个原则是哪怕已经拥有一个很不错的可利用选项，也要继续探索。**当然这一条不适合选择结婚对象，毕竟婚姻是终身大事，但很多其他的事情都不是一辈子的事，比如个人找工作、公司出产品。当前利用的项目利润越好，人们就越倾向于不探索，**殊不知任何利用都会陷入边际效益递减，等到好处用尽、必须探索的时候已经来不及了。**

还有一个关键因素是人的寿命。小孩肯定要多探索，但如果我今年 80 岁，我大概不会再去探索新的就业机会。那这里的又该怎么把握呢？数学家早就给出了答案，解法是**吉廷斯指数**。具体的数学咱们就不讲了，关键在于**对未来的利用要有一个折扣**：如果一个人预期 10 年以后他就已经很老了甚至不在了，那么他今天的快乐就比 10 年以后的快乐要重要得多，也就没有必要付出成本为 10 年后探索。也就是说，**探索还是利用，取决于游戏还有多少剩余时间**：如果你的预期剩余时间还很长，你就应该多探索，因为一旦探索到了一个大奖，你还有大把的时间去利用它，收益是巨大的；反过来说，如果你过不了多久就要离开这个游戏（比如说搬到别的城市去住），那就没必要在这个局里继续探索，看哪家餐馆好吃就应该多去几次。具体操作严格来说得现场计算或者查数学表格，看看每个选项的吉廷斯指数来决定，但这个精神是：**剩余时间越长，探索的价值就越高；剩余时间越短，就越应该减少探索、增加利用。**

人肯定不应该为了探索而探索，**探索的目的是利用**。有的人一辈子都在换赛道，今天学这个明天学那个，从来没有深耕过，结果什么都干不成，那确实不行。但我看大多数人的问题是**在本该继续探索的年纪，过早地进入了利用模式**。很多人刚过 30 岁就觉得大局已定，甚至大学一毕业就想找个安稳工作干到老：让他换个行业他说风险太高，让他学 AI 他说他已经 35 岁太晚了。**明明后面还有三四十年的职业生涯，简直是对吉廷斯指数的侮辱。**

随着年龄变老，一般人慢慢退出探索、转为利用，可以说是理性的。但如果你从此只做习惯的事情、只跟熟悉的人交往，那也不对。这里有个特别有意思的机制：**从社会生活中退出会加速衰老。**早就有研究发现社交孤立跟更高的早死风险相关；2024 年的一项研究用 AI 评估人们的心脏生物学年龄，发现社交孤立的人，他的生物学年龄往往比实际年龄更老，并且全因死亡率也显著升高。为啥呢？这里有个可怕的反馈回路：**退出社交或者退出公共生活会导致输入减少，而输入减少之后你的大脑和身体就会启动节能模式，节能模式让你更不愿意走出去，更不愿意走出去你就处于更退出的状态，越退出就越不健康，越不健康就越退出，直至走向死亡。与其说是因为衰老而退出，不如说是因为退出而衰老。**

那你说难道我保持探索就能减缓衰老吗？没错，而且效应很明显。**超级老年人**是最近几年流行的一个新概念，这是美国西北大学的一项著名研究：科学家发现有这么一群年过 80 的老人，他们的记忆力和认知能力竟然和中青年一样好，他们的大脑皮层更年轻，甚至在某些区域比中年对照组还厚。他们脑子好使、身体也棒，频繁地参与社会活动，有的还在继续工作。这里面可能有基因的因素，锻炼和饮食结构也都很重要，**但最重要的因素是接触新奇有趣的事物，特别是学习新技能**——不是那种轻度参与什么跟老朋友喝茶聊天之类，而是实打实的真学习。有研究专门让老年人去学习像数码摄影这样的需要持续投入、高挑战而且学成就真有用的新技能，结果发现记忆力等认知表现确实提升了。反过来说，如果只是刷个短视频、玩个小游戏什么的，效果就没那么明显。

还有一个研究更狠：让 58 至 86 岁的老年人同时学习至少三种新技能，比如西班牙语、绘画和音乐创作，就好像上学一样搞密集训练，坚持三个月。结果注意力和记忆力大幅度提升，**认知测试成绩提升到了平均比自己年轻 30 岁的水平**。更神奇的是课程结束一年之后再测试，这些老年人的认知能力不降反升，**竟然进一步达到比自己年轻 50 的人的水平**。研究者推测这可能是因为他们已经养成了持续学习的生活方式，以至于在课程结束之后继续主动接触新事物。那可是认知水平年轻 30 到 50 岁啊，连我都觉得这个结论有点夸张了。但我们可以相信：**活到老学到老，终身学习是真有用。年轻不是皮肤状态，年轻是系统更新的频率。**

比遵循吉廷斯指数逐步减少探索、增加利用更厉害的算法是**把探索和利用搞成固定的节律**。这又是西北大学的研究：复杂系统科学家王大顺发现，各行各业的成功人士——包括科学家、导演、艺术家等——往往在职业生涯中都有**连胜期**：也就是在三四年的时间内密集地、连续地产出高质量作品，就如同开挂一般。而且连胜期在他们职业时间线上的位置似乎很随机，不一定在早期也不一定在中期，有时候是在晚期，还有很多人会有不止一个连胜期。这些连胜期是怎么发生的呢？王大顺等人用 AI 对这些人的作品进行分析，计算一个人在某段时间内的探索程度与利用程度，结果发现了连胜期的秘密：**你总是先探索再利用，利用出成绩之后再探索再利用。**连胜期之前个体通常有一段高变异性的探索阶段：比如一个画家先尝试各种画风——抽象的、写实的或者印象派的，画得乱七八糟，你看不出他要成功的迹象；可是一旦在探索中捕捉到了某个独特的风格或者什么"感觉对了"的东西，创作者就会停止乱逛，集中精力和资源深耕这个东西（也就是利用），你发现他的作品风格突然统一、质量飙升，进入连胜期；等再过一段时间把这个风格利用得差不多了，有智向的艺术家会再开启新一轮探索，尝试各种新的玩法，以发现下一种属于自己的独特风格，然后再次利用，以此循环。最典型的例子就是电影《指环王》的导演彼得·杰克逊：他拍《指环王》大火之前曾经有过很长的探索期，拍过恐怖片、喜剧片、剧情片，然后才找到奇幻片这个成功打法好好利用；杰克逊拍完《指环王》系列又拍了《金刚》和《霍比特人》三部曲，可谓是榨干了奇幻片的价值；但是他又开始了新的探索，2018 年又转型开始拍纪录片。

这是一个可操作的职业节律：**探索不是游荡，探索是为了找到可深挖的矿脉；利用不是保守，利用是摸到好牌先打赢再说。最重要的是，赢了这一把并不是你职业生涯就此定型，更不是结束——你挖完这个矿还要再去找下一个矿。**人生漫长，你可以经历好几个探索-利用循环。

吉廷斯指数的计算依赖于你的剩余时间，剩余时间越短就越减少探索；但生物学的发现是**探索本身可以延长剩余时间**。然而不管你能经历多少个循环，吉廷斯指数终究会要求你在临近生命最后的阶段停止探索——毕竟到时候你探索出来什么结果都不再有新的利用价值。**但我觉得你到时候还是应该保持探索：我们探索不一定非得是为了利用，也许我们就是想知道一些信息，满足好奇心本身就是享受。**咱们不是说过吗：我们最喜欢的不是确定性，而是把不确定变成确定的那个瞬间。**影视剧总爱拍年轻人，是因为年轻人的叙事天然带探索——也许我们真正喜欢的不是年轻，而是探索。**

下一讲是个人成长战略板块的最后一讲，咱们说一说人生的长期战略。
`,Jh=`# 026丨共鸣：高级生活的秘密

## 讲什么

成长战略板块收官：**共鸣（Resonance）**——德国社会学家哈特穆特·罗萨 2010 年代提出的理论。使命解决"为什么活着"的方向问题，共鸣解决"快乐"问题。它是使命的必要陪伴。

## 解决什么真问题

那套很励志的人生脚本（努力读书、考上好大学、找个好工作、升职加薪、财富自由）的根本困境是**享乐适应**：赢了也只暂时感觉很好，然后发现那么多人比你更有钱，你还是不快乐。那何必追名逐利？为什么不一开始就躺平？

## 核心论点

- 现代人的所有努力都在追求三个 A：Available（可得）、Accessible（可达）、Attainable（可控）。副作用是**异化**——世界对你沉默，你对世界的控制范围很大，但世界对你没有回应。**空虚不是没有内容，而是没有回响。**
- **共鸣是独立主体之间发生共振：你有动作，别人有回应。**三个维度：横向共鸣（人与人）、斜向共鸣（人与物/工作）、纵向共鸣（人与宏大存在）。
- **共鸣的反义词是比较。**比较关注政府：我做的比别人大吗？共鸣关注频率：我和谁同频？**比较让你失去朋友，共鸣帮你寻找朋友。**
- 使命与共鸣的四种组合：高使命高共鸣=使命共同体（高级生活）；高使命低共鸣=殉道者（自我消耗）；低使命高共鸣=氛围族（热闹之后是空虚）；低使命低共鸣=漂流状态。
- **使命是我要去哪里，共鸣是我不是一个人去。**

## 关键例证 / 金句

- 网盘里存了几个 T 的电影不会主动跟你说话，所以存得越多你越孤独；夫妻二人坐在高档餐厅各自刷手机无话可说。
- 打鼓机练鼓越练越准但空虚，回声器给你同样的回声也没用；真正的共鸣是**在酒吧跟小乐队即兴演奏——你们用音乐对话，共同生成一首歌**。
- 共鸣四条件：**被触动**（允许外部刺破你的防御，你得有点脆弱感）、**能回应**（有效能）、**会转化**（旧的你死去，新的你诞生）、**不完全可控**（共鸣不可策划、不可强求、不可购买）。
- 荟萃分析：使命感越高，全因死亡率和心血管事件风险越低；广义上的社会共鸣对健康的好处相当于锻炼和饮食之类的健康干预。

## 如何应用

- 把比较叙事重构成共鸣：同事取得好成绩，与其说"当年他成绩还不如我"，不如问"你做这个项目最爽的时刻是什么"——**他的成功就变成了你们共同的经验**。
- 自己取得成就时，分享过程中的脆弱和不确定性（"有好几次我都觉得要完蛋了"），邀请别人进入你的故事。
- 教育孩子：与其把他跟别人家孩子比，不如观察他什么时候眼睛会发光。
- 允许世界有自己的声音：**允许材料顶嘴，允许孩子不听话，允许市场打你的脸**——只有不可控的回应才是真的。

---

## 全文

> 以下为课程转录全文，已做去噪与语义分段；**加粗+底纹**处为核心论点与金句。

欢迎来到现代思维工具课，我是万维钢。这是个人成长战略板块的最后一讲，咱们说一说人生的长期战略，也就是怎样过好这一生。

现在世界有一套很励志的人生脚本：努力读书，考上好大学，找个好工作，升职加薪，财富自由，以及获得权力和地位。多数人沉迷其中，很多人感慨自己没有跟上节奏；但也有一些人会问：**然后呢？然后你终于可以过上安逸自由的生活了吗？那我为什么不现在就过那样的生活呢？**

努力叙事的根本困境是**享乐适应**：就算你在一次的竞争中赢了对手，收获更好的头衔、住进更大的房子，你也只会暂时感觉很好。过不了多久你就会觉得这些不过如此，然后你发现有那么多人比你更有钱、有比你更大的头衔、住着比你更大的房子，你还是不快乐。那我何必追名逐利呢？我为什么不一开始就退出竞争，踏踏实实做自己呢？这正是现在越来越流行的人生观：与其追求灿烂，不如归于平淡。

对这个问题的正确答案只有一个：**你之所以应该拒绝躺平，是因为躺平不高级，是因为你要追求 bigger than yourself**——高级人生必定有一个 purpose，中文称为使命或者目的。使命能给你一个身份认同，使命让你在两难知道如何做出选择，使命让你的人生有意义，使命还能让人长寿。但是这些说法可能会让你有一种悲壮的感觉，似乎使命只是讲奉献而不能带来快乐。**这一讲咱们说一个很新的思维工具叫共鸣，它是使命的必要陪伴，它能解决快乐问题。**

这是德国社会学家哈特穆特·罗萨在 2010 年代中后期提出的一个理论，目前还没有在学术界以外流行，但我认为它必成经典。罗萨说，**现代人所有的努力都是在追求三个 A：Available 可见/可得，Accessible 可触达，Attainable 可控/可利用**。比如外卖把餐馆变成可得，手机地图把城市变成可达，AI 把知识变成可控。这些都很好，但这里有个副作用：**三个 A 让我们把世界当做了资源——你是主体，它只是被你利用的客体，那你就很难把世界当对话者了。**你只是在用那些东西，而那些东西对你并没有什么回应，这就导致了**异化**。罗萨说的异化就是缺乏回应性的相处：你与世界没有意义的内在连接，你们是一种没有真正关系的关系。就如同你的网盘里存了几个 T 的电影，那些电影不会主动跟你说话，所以存得越多你反而越孤独；**你对世界的控制范围很大，但世界对你是沉默的。**又如同夫妻二人坐在高档餐厅里，可是各自刷手机无话可说。**空虚不是没有内容，而是没有回响。**

为了对抗异化，你需要共鸣。**简单说，共鸣就是独立主体之间发生共振：你有动作，别人有回应，所以你感到温暖。**比如摇滚乐演出现场：台上乐队在演唱，你在台下和几千个观众一起合唱、跳跃，几乎是一种宗教体验——你忘了房贷也忘了 KPI，只感到巨大的能量穿过身体，你融入了一个更大的场域，你已经不仅仅是你。

那你说我找几个下属，我发个朋友圈他们就点赞，我说一句话他们就附议一百应，这是不是就是共鸣呢？不是。**共鸣可不是简单的回声。**比如你学打鼓，一开始你天天独自对着节拍器练，越练越准，但这似乎没什么意思，你感到空虚；如果旁边有个回声器，你打一下它就立即给你同样的一声，你会感觉好一些吗？当然也不会。**共鸣是你去酒吧跟一支小乐队即兴演奏：贝斯手有时候会抢拍，钢琴手会故意留白，歌手偶尔改个旋律，那么你作为鼓手也不能中规中矩只知道追求精确节奏，你得回应他们——你们用音乐对话，共同生成一首歌。**你演了一晚上也不觉得累，掌声也无所谓，**因为你听见音乐在对你说话。共鸣就是你不再只是输出，而是在接通一个回路。**

共鸣不只发生在人与人之间，罗萨把共鸣分成了三个维度。**第一个维度是横向共鸣，发生在人与人之间**：我看见了你，你也看见了我。最好的聊天是聊完之后两人都变了，共鸣在对话中产生了第三个东西。**第二个是斜向共鸣，发生在人与物、人与工作之间**：木匠顺着纹理雕刻木头，他能赶到木头在回应他；如果一个会计能从报表中看出公司运营的律动和危机，我们是不是可以说他感受到了数字的生命呢？**第三个是纵向共鸣，则是人与宏大存在之间的共鸣**：想象牛顿发现万有引力定律的那一瞬间，你站在雪山脚下的那个瞬间。

罗萨的理论说白了就是：**美好生活不是占有更多的资源，而是建立更多的共鸣。**

**共鸣的反义词是比较。**比较就是看看咱俩谁赢了谁，一旦你开始比较，共鸣就关闭了。为什么取得好成绩之后的快乐总是短暂的？因为你会跟成绩更好的人比较。比较其实不总是坏事，我们需要通过比较来校准；但比较太容易滑向排序，人一下子就被拽进零和的地位博弈。**比较常常带来傲慢、焦虑和短暂的快感；而共鸣带来感动、宁静、连接感和深层的意义。比较关注政府：我做的比别人大吗？强吗？而共鸣关注频率：我和谁同频？比较让你失去朋友，共鸣帮你寻找朋友。**

共鸣是一种基本心理需求。我们前面讲过自我决定理论，说人要有能动性，有三大基本需求必须满足：自主感、胜任感和关系感——**这个关系感提供的主要价值就是共鸣**。**共鸣还是自我的扩张**：当你与他人形成强烈共鸣的时候，比如你们有共同的目标、互相协作、彼此改变，你大脑中处理"自我"的区域就会发生功能性的重组，以至于你对他人的表征会纳入对自我的表征中。换句话说，**共鸣让他人成了你的一部分，共鸣扩大了你的自我。为什么不躺平？因为躺平的"我"太小了。**

这就是那些了不起的人物的高级生活的秘密：**他们之所以无怨无悔地追求人生使命，是因为他们其实很快乐——他们的使命伴随着共鸣。共鸣让利他自动变成了利己，享乐适应自然就失效了。**你的自我变大了：原本只能容纳一杯水的快乐，现在能容纳一片海。

**使命是我要去哪里，共鸣是我不是一个人去。**但并不是所有的使命都伴随着共鸣：**高使命高共鸣是使命共同体**，团结而又有韧性——不是我在奋斗，而是我们在合作，你能承受代价，因为你听得见回声，这就是高级生活。**高使命低共鸣是殉道者**，容易自我消耗：你以为你在做了不起的事，但你是单枪匹马、没人支持，只能靠意志力硬扛，你需要寻找同伴，你需要积极的反馈。**低使命高共鸣是氛围族**：一群人凑在一起很热闹，但是热情来得快去得也快，有同伴没有方向，热闹之后是空虚。**低使命低共鸣则是我们前面说的那个漂流状态**，最容易焦虑、嫉妒和刷刺激：人人内卷又互相比较，把努力当止痛片，社交只是图个热闹。**使命提供方向，共鸣提供能量。**这就是为什么有句话叫"一个人走得快，一群人走得远"。远大志向不是空喊口号，也不是跟风车作战，而是你跟世界签了一个对等契约：你有输出，而世界有反馈。

那怎样才能获得共鸣呢？罗萨给出了形成共鸣的四个条件。**第一是被触动**：你得允许某个外部的东西刺破你的防御、进入你的内心。现代人都有点防御性冷漠，为了显得专业、理智、成熟而把自己包裹在厚厚的壳里——刷短视频是冷眼旁观，看新闻是吃瓜心态。**如果你的心态硬，共鸣就不可能发生，你得有点脆弱感。第二是能回应、有效能**：光被感动不行，你得有反应——共鸣是"我被触动了，然后我拿起它回应；我被这个难题困扰了，然后我开始思考解决方案"。**第三是会转化**：你得能被这场交互改变——读完一本书不能只是打卡说"已读"，得是你对某个问题的看法被彻底改变了才好。**共鸣应该让旧的你死去，新的你诞生。第四是不完全可控**：共鸣是不可策划、不可强求、也不可购买的。你可以买最贵的钢琴、请最好的老师、通过最刻苦的练习，但你无法保证弹琴能进入那种天人合一的境界；你可以花钱带全家去最豪华的度假村，但你无法保证那天晚上家人会有一场深入灵魂的对话，而不是各自玩手机。

**共鸣需要一点不可控——我看这是罗萨这个学说里最妙的地方。保留不可控不是为了允许惊喜，而是为了保证对方真的是对方，而不是你自恋的回音壁。**因为当你完全控制了一个事物的时候，它就失去了他者性，它变成了你意志的延伸——而人是没法跟自己的手脚对话的。罗萨的说法是：共鸣必须保留他者的独立反作用力，否则你面对的只是可支配对象，**被支配者只能执行，而执行不是回应，共鸣需要一点阻抗**。这就如同你伴随着现场乐队演出的音乐舞动：不是你带着音乐走，而是音乐有自身的想法，它有时候也带着你——你既是主动的又是被动的。共鸣不是你做什么，也不是乐队做什么，而是你和乐队之间发生了什么。

如果暂时还没找到使命，我们至少可以把生活中的各种比较叙事重构成共鸣。比如看到同事取得了好成绩，你与其说"当年他成绩还不如我，怎么现在超过我了"——**关心政府不如研究频率**，也就是他做对了什么？也许你可以问他："你做这个项目最爽的时刻是什么呢？"你们能聊出点真东西，**他的成功就变成了你们共同的经验**。再比如你自己取得了不起的成就，那与其炫耀不如分享：一个是分享这个过程中的脆弱和不确定性——"有好几次我都觉得要完蛋了，幸亏老张帮了一把""中间我发现自己对市场的理解还有偏差，侥幸的是结果是好的"——你邀请别人进入你的故事，人们就会共鸣你的挣扎；另一个是分享经验和资源："这次升职让我终于能推动某项目落地，接下来我们会把 A 流程从七天缩到两小时，我把踩坑和模板整理了一份文档，想一起做的人我发你。"又比如教育孩子：你与其把他跟别人家孩子比，不如观察他在什么时候眼睛会发光，你可以这样问："这是你构思的吗？你是怎么想出这个办法的呢？"**把比较改成共鸣，就是从政府竞赛改成了频率寻找，把零和的地位博弈改成了正和的协调博弈，你立即就从一个索取者变成了一个供给侧的合作者。**

共鸣是瞬间的，我们在生活的大部分时间必须回归平庸，但我们需要在这个异化的世界里保留几个共鸣的缺口。我可以列举一大堆科学证据说明使命和共鸣能让你活得更健康、更长寿：比如有荟萃分析发现使命感越高，全因死亡率和心血管事件风险就越低；对日本人长寿的研究表明高使命感跟长寿正相关；还有研究发现广义上的社会共鸣对健康的好处，效果相当于锻炼和饮食之类的健康干预。**但我们需要使命和共鸣，并不只是为了活得更长，更是因为我们想要一个有意义的人生，我们想活得有意思。**

现代生活的一个误区是认为：世界对你越可控、你执行效率越高、事情越可预测、别人对你越服从，你就越幸福。**但真相是：幸福不是取决于你能得到和控制什么，而是取决于你能贡献和共鸣什么。共鸣要求你允许世界有自己的声音：允许材料顶嘴，允许孩子不听话，允许市场打你的脸，允许一段关系把你带到你没计划的地方——因为只有不可控的回应才是真的。**

下一讲我们将开启第二个模块：决策判断。
`,bh=`# 027丨无免费午餐定理：诸行无常，有偏置才有决策

## 讲什么

决策与判断模块开篇：一切决策的总原则——**世界上不存在完美的决策**。无免费午餐定理（No Free Lunch Theorem）从数学上给"智能"提出了限制。

## 解决什么真问题

人们幻想完美决策：诸葛亮的锦囊、大数据最优解、AI 给最佳答案。这些全是妄念。理解了为什么没有完美决策，你才知道决策真正需要的是什么。

## 核心论点

- **无免费午餐定理**（Wolpert & Macready, 1997）：把所有可能问题平均起来看，任何两个算法的表现都一样。AlphaGo 围棋厉害是因为它偏科——**你必须为优化付出代价**。
- **学习必须从有限经验中归纳出无限规律，这逻辑上无法自洽（休谟），所以机器必须先"盲目相信点什么"——这就是归纳偏置。**没有偏置，你看到的就是一片点阵和一串噪音。
- **决策三步心法**：先有强先验（设定偏置）→ 算法搜索（理性求解）→ 系统化冒险（承认在冒险，保持可调整）。**偏置是起点，偏执是枷锁；高水平决策者是强偏置、弱偏执——带着偏见上路，发现走错了马上换一种偏见。**
- 德里达："一个决断如果没有穿过无可决断之折磨，它将不可能是自由的决断。"**决断不是展开，而是承担。**

## 关键例证 / 金句

- 巴菲特价值投资 vs 西蒙斯量化交易——都对，能赚钱就是对的，他们只是选择了不同的偏置。
- **"有价值设定之后的判断要尽量客观，但价值本身必须主观。"**
- "有立场才有展开，没有立场就无从搜索信息。"
- **"偏见是你生命力的证明。什么都不做才是最完美、最没有偏见的状态。"**

## 如何应用

- 做决策前先"发愿"：选定领域和目标函数，没有发愿就没有决策。
- 你的偏置来自两个地方：价值观（什么不可协商）+ 对世界的基本假设（这个领域是线性递增还是重尾爆发）。
- 避免既要又要：牺牲一部分维度，换取在另一部分维度上的超额回报。

---

## 全文

> 以下为课程转录全文，已做去噪与语义分段；**加粗+底纹**处为核心论点与金句。

欢迎来到现代思维工具课，我是万维钢。这一讲我们进入第二个板块，决策与判断——说白了就是如何发现最好的选项，如何评估局面，然后才是拍板执行。你想必已经听说过很多关于决策的说法了，我们这里的思维工具会给你更深的洞察，但我想先跟你讲讲一切决策的总原则。这个规则就是：**世界上不存在完美的决策。**

人们爱幻想完美决策。比如《三国演义》里保护刘备前往东吴，行前诸葛亮给他三个锦囊，说你遇到危难就拆开一个，依计行事即可——结果果然好使。谁不想有个算无一侧的军师，谁不希望得到锦囊计呢？可惜真实世界不是小说。秦始皇和朱元璋都曾经试图给后事搞好一揽子顶层设计，可是局面都很快就超出了他们的想像。但我们并没有吸取教训：我们想要人生算法，我们希望有个课程直接说该选哪个专业、怎么赚钱，我们建议用大数据找最优，我们盼望 AI 提供最佳决策选项。就算这些做不到，我们也要求决策至少是客观中立的，排除情绪和個人偏见，像解数学题一样算出正确答案。**我要说的是，这一切都是妄念。世界上没有这么好的事。**

不管是诸葛亮、秦始皇还是朱元璋，你都不可能给事情做出完美的预先安排。**人生没有算法，不存在放之四海而皆准的正确。**而且所谓"客观中立"根本就是一个错误的要求：你要坚持客观中立，你就什么都干不了。**只要是决策，就不可能是客观中立的。**

我敢这么说是因为这里有一个强硬的理论支持，叫做**无免费午餐定理**。无免费午餐定理出自计算机科学的算法优化理论，是两个计算机科学家大卫·沃尔珀特和威廉·麦克雷迪 1997 年提出来的。这个定理极为深刻，它等于是给智能提出了一个限制。故事是这样的：当时的计算机科学界就好像武林大会一样，各家都在提出自己的优秀算法——有人说我这个遗传算法本来是模拟生物进化的，但我能用他发现工程上的最优解；有人说我这个模拟退火算法出自物理学，但它能帮你跳出数学上的局部最优。各家心想，我能不能找到一把屠龙刀，凭一套算法解决一大堆问题呢？或者干脆说，世界上有没有一个最好、最通用的算法，能解决所有的问题呢？

沃尔珀特和麦克雷迪这个定理说：**没有。**他们用严格的数学证明，**如果你把所有可能问题都平均起来看，那么任何两个算法的表现都是一样的。**换句话说，也许你这个算法在一类特定问题上表现得很出色，那么换到其他问题上它必然就会失效。综合而论，如果一定想要求解所有问题，那么一个先进的、设计精巧的算法和一个只靠瞎蒙的随机猜测算法，表现是一样的。这就叫世界上没有免费的午餐：**你想要在一个领域里表现得比别的算法好，你就必然在另一个领域里表现得比别的算法差。**AlphaGo 之所以下围棋那么厉害，是因为它偏科——它为围棋这个特定问题进行了极度的优化，你让它去画画它就完全不行了。**你必须为优化付出代价。**

佛学爱好者应该好好思考一下这个无免费午餐定理。我私下以为，无免费午餐定理等于宣告了**任何有用之法、或者说有为之法，都是有漏之法**——因为它一定不能解决所有的问题，一定是局限的。你说一切有为法如梦幻泡影，那么定理说这个世界根本就不存在圆满，什么都不做才是圆满。你但凡有点追求，就得使用有为之法，就得有漏，就得为优化付出代价，就得为了得到一些东西而放弃另一些东西，就得承受有漏。**所以无免费午餐定理就是科学版的"诸行无常"。**

那些是题外话，但这个要点是：入世必须使用有漏法。好消息是，**你可以自己选择你要解决哪一类问题，而这个选择一定是主观的。**怎么选择呢？我们需要借用一个来自机器学习领域的术语，叫**归纳偏置**。所谓学习，就是从有限的过去经验中归纳出无限的未来规律。可是大卫·休谟早就说了，归纳法在逻辑上是无法自洽的：昨天太阳升起，前天太阳升起，你凭什么就能推断明天太阳也会升起呢？也许明天宇宙的参数就变了呢？机器要学习，就必须先把这个逻辑鸿沟填上。计算机科学家找到的答案是：**它必须先盲目相信点什么才行——也就是你得有先验，你得先不问理由地相信点什么，才可能从有限经验中学习。**

比如卷积神经网络之所以处理图像特别厉害，是因为它预先植入了一个先验：它坚信局部的特征组合起来是有意义的，以及图像的特征在平移后是近似不变的。循环神经网络之所以处理语言厉害，是因为它的先验是坚信前一个词和后一个词之间存在时间上的关联。站在绝对客观中立的立场上，那些先验并没有道理——你凭什么相信我们这个世界是这样的呢？也许世界随时就会变得散乱呢？但我们不管了，我们宁可要这个偏见。**预设的先验就是归纳偏置。如果没有这些偏置，也就是不带任何预设眼镜观察世界，那么你看到的其实是一片点阵和一串噪音**，那些海量的数据会让算法觉得这种可能性也对、那种可能性也对，最后陷入瘫痪。**你必须先压住结构，才能找到结构，才能判断好结构。**

决策也是如此。说"我老老实实坐在这里，调出这个世界所有的变量，进行精确的推演，算出所有的概率，让结果展现给我一个攻略，告诉我最应该做什么"——这纯属妄想，因为违反无免费午餐定理。现实是世界上有无数可以做的事，每个领域都有可能做成功。**你必须先主观选择一个领域，设定你对这个领域的归纳偏置，才可以展开具体调研，推算最佳决策。**

比如你有一天突发奇想说我要去广州工作赚钱——这其实不是一个决策，这是发愿。但这个发愿对决策至关重要：**没有发愿就没有决策。**世界这么大，人可以在各种各样的地方做各种各样的事、追求各种各样的目的，而你偏偏选择了去广州工作赚钱，没有任何科学决策理论能证明你这个想法是对还是错——有的人去广州工作是为了跟自己的女朋友在一起，有的人用别的方式赚钱，他们也都是对的。去广州是你把搜索空间圈起来，赚钱是你把目标函数定下来，而你对"去广州可能赚钱"的直觉与信念是你的归纳偏置。有了这个发愿，才谈得上决策。决策是我们已经知道你想干啥了，然后调研一番，看看在广州具体做什么工作、怎么做最能帮你赚钱。

无免费午餐定理说，**不管决策的过程有多么理性，决策的初心一定是一个任性。**事实上，任性是决策必不可少的成分。没有任何决策系统能够料事如神，最强 AI 也不可能把一件事的几个选项的概率分布以及有可能付出的代价给你清清楚楚地列明白，像古代谋士一样给你提供上中下三策说"主公你选一个就好"。未来不但有不确定性，而且有不可量化的不确定性——也就是连概率分布本身都具有不确定性。这就意味着你算到最后总会有一些算不出来的地方，你归根结底会有一个时刻心想：不管了，我就非得这么干了，无所谓了。还是法国哲学家德里达那句话说得最好："**一个决断如果没有穿过无可决断之折磨，那它将不可能是一个自由的决断，它只会是程序化的应用或一个计算好的过程的展开。决断不是展开，而是承担。**"这就是为什么 AI 再强，也得有一大堆各种各样的微决策必须留给人来做。

承认没有免费的午餐、理解了决策本质上是主观的冒险，可不是说我们就不要决策科学了。决策科学的作用有限，但往往很关键。这里咱们先说一说做决策的元认知心法，一共有三步：

**第一步，你必须有一个强先验，也就是设定偏置。**为什么天下有这么多生意你不做，你非得做这个生意？为什么有这么多行业、这么多赛道你不选，你非得选这个赛道？没有客观答案。同样面对一个受伤的人，杀手需要的策略和医生需要的策略截然不同。你必须先有主观选择——可能那是你的直觉，可能那是你的人生愿景，可能那是你纯粹莫名其妙的喜好，纯属偏见，完全不讲道理，但你必须先选一个方向才行。你如果不选，你就谈不上使用算法，在数学上你就是死路一条。**有一张错误的地图也比没有地图强。**但偏置并非无章可循，它基本上来自两个地方：一个来自你的价值观，也就是什么东西对你来说是不可协商的——比如这辈子你绝对不做什么，什么代价你绝对不愿意支付，你非得追求什么，你认为什么最宝贵。AI 工程师会说，这些是你给模型设定的价值函数或者说目标函数。另一个来自你对世界的基本假设：你认为当前这个领域更像线性递增还是重尾爆发？你更相信复利还是爆款？这决定了你的搜索方向。**先有立场才有展开，没有立场就无从搜索信息。**

**第二步是算法搜索。**无免费午餐定理说不存在放之四海而皆准的好算法，但是它允许在每个特定的局部问题上存在一个最强算法。我们要找到那个算法，我们要做好调研、进行分析推理、模拟未来演化，我们要寻找最优选项、考虑值得付出的代价。如果人拥有最高智能，最佳算法就是由你上一步设定的价值函数——也就是你的偏置——所决定的。任何一个决策都是在一定的条件下方程求解，因为你想把那个价值函数给最大化。**到这一步，你就必须非常理性客观了，得尊重世界的硬条件，那么这基本上是一个工程问题。**我们后面所要讨论的各种决策工具大多就在这一步。

**第三步是系统化冒险**，也就是你得承认你正在冒险，你不能一条道走到黑。我们一直说设定偏置，我们说的可不是偏执。**偏置是启动时候不得不先采取一个立场；而偏执则是一种执念**——是环境已经反馈告诉你事情不是你想的那样，你一开始采取的那个立场是错的，但你还要强行坚持。**偏置是起点，偏执是枷锁。**老百姓要么无偏置、优柔寡断、试图客观，要么偏执一条道走到黑。**高水平决策者是强偏置、弱偏执——也就是带着偏见上路，但发现走错了会马上换一种偏见。**这样你才能既能决策，又能调整和退出决策。

为什么苹果的那套设计美学强？难道别的公司就没想到吗？答案是那只是乔布斯个人的审美偏置。你可以做大众化的兼容机个人电脑，也可以做又美又贵的电脑；你可以搞一个开放但无序的生态，也可以搞一个封闭但质量有保证的生态——这里没有对错。巴菲特搞价值投资，买几支股票不动；可是文艺复兴科技的詹姆斯·西蒙斯搞量化交易，玩的是用算法在几毫秒的时间内做判断。那你说到底是巴菲特做得对还是西蒙斯做得对呢？**答案是都对，能赚钱就是对的，他们只是选择了不同的偏置。**

如果这个东西又便宜又好，那个东西又贵又不好，人人都知道该选又便宜又好的，那不叫做决策。**决策往往是在两难之中做选择**：这个工作稳定但是上限低，那个工作有可能让你暴富但是波动大，你选哪个？没有客观中立的标准答案，你的决策归根结底取决于你的偏置。世人总爱说什么要客观中立、要保持开放，**但做事的前提恰恰是不中立、不尊重所有的意见，有立场有方向。你要是不敢弄脏自己的手，你就永远不是局内人。**

有价值设定之后的判断要尽量客观，但是价值本身必须主观。无免费午餐定理要求你做一个有立场的能动者：**有立场但无执念，有权起心动念，但也有权根据现实调整。避免既要又要，用自己的核心偏好设定价值函数，牺牲掉一部分维度来换取在另一部分维度上获得超额回报，这才叫决策。**AGI 时代人的核心价值就在于设定偏置：你决定要解决什么问题，你定义什么是好什么是坏，你在空白的纸面上画下第一笔。**什么都不做，才是最完美最没有偏见的状态。偏见是你生命力的证明。**

下一讲的思维工具是概率分布，我们说说到底什么是决策。
`,n1=`# 028丨概率分布：到底什么是决策？

## 讲什么

决策判断第二讲：决策的对象不是单次结果，而是一个**概率分布**。这是把"以成败论英雄"的直觉升级为统计思维的关键一步。

## 解决什么真问题

为什么同样的努力，有人赢一次就被捧上天，有人输一次就被打入冷宫？为什么"结果好"和"决策对"经常不是一回事？因为大多数人评价决策时看的是"最可见的结果"，而不是概率分布。

## 核心论点

- **决策的对象不是结果，而是概率分布。**评价一个决策要看六个参数：均值（期望）、方差（波动）、上限/下限（最好最坏）、偏度（赢面大还是输面大）、峰度（是否重尾）、稳健性（环境变了会不会崩）。
- 英语 decision 词根来自拉丁语"切断/杀掉"——**决策不是选择哪个选项，而是杀掉那些同样好、甚至可能更好的选项，来压住一个其实也不确定的选项。**
- 先看你能否接受下限，再考虑上限值不值得付出。**决策的首要指望不是必胜，而是可活。**
- 斯科特·亚当斯："如果你要长期干一种事情，就不应该追求一个具体的目标，而应该追求**系统**。"系统输出的概率分布越来越好，成功就是自然而然的事。

## 关键例证 / 金句

- 孙子："昔之善战者，先为不可胜，以待敌之可胜。不可胜在己，可胜在敌。"芒格："我只想知道我会死在哪里，这样我就永远不去那个地方。"
- 索罗斯："**你看对还是看错并不重要，重要的是你看对时赚了多少，看错时亏了多少。**"——关键在对错之间的不对称性。
- 塔勒布："永远不要因一条河平均只有四英尺深就涉水而过。"
- 100 万玩"正面 +50%、反面 -40%"的赌局 100 把，数学期望是 +5%，但大多数人会破产——因为一正一反就是 0.9 倍。**期望值是上帝视角的集合平均，时间平均才是凡人视角的命运。**（为下一讲非遍历性埋伏笔）

## 如何应用

- 演练：重病保守治 vs 手术，先算预期寿命再算年龄权重；选工作，大厂的左尾风险（技能单一化）vs 创业公司的右尾机会（做成了暴富）。
- 保险：房子火灾概率极低，但万一出事你承担不起，所以该买。**决策很多时候看的不是最好有多好，而是最坏能有多坏。**
- 气质修炼：不因侥幸胜利而狂喜，不因正确策略的失败而崩溃——只要样本量足够大，大数定律终究会把你带回你应该在的高度。

---

## 全文

> 以下为课程转录全文，已做去噪与语义分段；**加粗+底纹**处为核心论点与金句。

欢迎来到现代思维工具课，我是万维钢。你是否听过一个民间玄学叫"赤马红羊劫"？说 2026 是丙午马年，2027 是丁未羊年，连在一起就是赤马红羊，而根据某种谶纬之说，每逢这样的两年国家就会发生灾乱。你看上一次 1966-1967 发生了文化大革命，再上一次 1906-1907 是大清预备立宪的政治风波，再往前推就连北宋的靖康之耻也是发生在赤马红羊——都出事了对吧？中国历史真有这么一个神秘的周期律吗？

其实你根本不需要懂玄学，因为这是一个很容易验证的说法。我直接让 GPT 列举了过去 2000 年间每一次赤马红羊中国历史上发生了什么，它还根据灾祸的严重程度给打了分。的确有些赤马红羊年发生了大灾祸，但也有很多赤马红羊年只发生了一些小事，甚至根本就没什么事。你要知道古代中国本来就是多灾多难，可以说要么是正在发生灾祸，要么就是酝酿灾祸。真正的问题是：这些赤马红羊年跟其他年份相比是不是更差？GPT 按照主流教科书口径列举了中国历史上最大的那些动荡期（八王之乱、十六国、安史之乱等），在 34 组赤马红羊里有 13 组落在这些重大动荡期内，占比 38%。然后最关键的来了：**如果你从这 2000 年跨度内随机抽取 34 组的连续两年，它们落在重大动荡期的比例大约是 37%。**也就是说，赤马红羊年发生重大动荡的可能性，并不比随机采样更突出。那你还相信赤马红羊劫吗？

我们做的这番采样验证，就是入门级的决策者思维。**这个入门就是看事情不能只看单个的结果，要看统计才行。决策的对象不是单次结果，而是一个概率分布**，这就是这一讲的思维工具。

一般老百姓思维是以成败论英雄。一场关键篮球比赛比分焦灼，如果最后时刻球队幸运地投进以一分优势取胜，那就皆大欢喜，教练球员人人立功受奖；可是如果那个球没进、以一分之差败北，就人人都得反省，搞不好教练还被免职。这个场面很常见，但你不觉得这很荒唐吗？你应该根据球队多场比赛的结果，以及球队在教练带队前后的表现对比，综合统计判断，才能知道教练能力行不行对吧？现实是人们很少有这样的耐心。你说酒后驾车容易出事，他说我上次喝得酩酊大醉开车回家也没事；你说不能指望买彩票发财，他说上次就有人中了好几百万。**用眼前可见的结果评价决策的好坏，心理学把这叫结果偏差，认知心理学博士安妮·杜克则称之为"结果论"。**杜克是个赌博高手，曾经赢得职业扑克冠军，她在《对赌》那本书中说：**生活更像是扑克而不是国际象棋**——也就是说，你的结果往往不是由你的打牌策略决定，而是由你抓到的牌好不好决定的。所以如果你想评估一个策略好不好，就不能只看一两次的结果，而必须综合看统计数据才行。

对老百姓来说，统计数据意味着历史的核定本，那需要太多的算力和长期记忆，所以他们宁可被短期影响，而且他们会被跟决策完全无关的信息所影响。于是我们看到的那个爱冒险、但是赶上大环境好赚了钱的老板被认为是杀伐果断有魄力；那个明明输的多赢得少、但是善于讲故事的 CEO 长期霸占版面；而那个做了严谨推演却遇到偶然惨败的哥们，则被无情地牺牲了。**如果我们永远只重视最可见、最有故事的那几个结果，那就跟赌徒差不多，永远都学不会决策的真本事。**

你越是理解决策科学，就越不敢对决策指望太多，因为决策是一个非常有限的行为。咱们上一讲说了无免费午餐定理，已经知道决策不可能是绝对客观中立的，你必须加入一些主观的因素，你必须得主动冒险。这一讲咱们再进一步说：**你真正能决定的其实是一个过程，而不是结果。或者更严格地说，你决定的其实是放弃哪些东西。**

英语里决策（decision）这个词，词根来自拉丁语，意思是切断或杀掉。面对眼前一大堆选项，你的决策不是选择哪个选项，而是杀掉那些同样好、甚至可能更好的选项，来压住一个其实也不确定的选项。想象一位深山里的僧人正面临一个人生决策，包括三个选项：第一是继续在山里清修，希望能开悟成为得道高僧；第二是下山考功名，争取做官治理一方；第三是做个行脚僧，出去云游四方，遍访名山大川。如果你认为他是在高僧、大官和名山大川这三种人生之间做选择，那你就大错特错了。现实充满了不确定性：留在山里不一定能开悟，考功名不一定能考上，云游四方可能走在路上就折了。**做决策并不是在预定未来，决策其实是对平行宇宙进行剪裁。选择功名就意味着杀掉了修行那个宇宙里的安稳，和云游那个宇宙里的自由。那些都是机会成本，然后你必须接受功名这个宇宙里可能的一切**：也许真的做了大官，但也许考很多年都考不上；也许考上了只是小官；也许做了大官但是犯罪被抓，也许陷入党争等等。**决策是一个暴力行为：决策是消灭那些看起来也很不错的选项，放弃一些也许更好的可能性，支付机会成本，而你选定的那个也不见得更好。**这就是为什么决策常常让你感到难受，以至于很多人迟迟不愿意做决策。

你说我明白了，决策就是选概率，我们应该选数学期望最好的那个选项。这么说也不严谨，**其实决策选的是概率分布**。考虑一个决策，我们至少需要以下几个参数：第一个是均值，也就是数学期望——你平均而言赌这一把能赢多少；第二个是方差，也就是局面的波动性大不大；第三是上限和下限，也就是你赢最多能赢多少、输最多能输掉多少；第四个是偏度，你赢的概率大还是输的概率大；第五个叫峰度，也就是是否重尾——如果是重尾分布，发生极端事件的概率就很高；最后一个参数是稳健性：如果环境发生变化，这个系统会不会崩溃呢？

就拿前面那个僧人来说，他的三个选项需要这样根据参数来决策：第一个选项留在山里清修，下限是一个默默无闻的清贫僧人，上限可能是一代高僧，但考虑到高僧的生活也很清贫，所以整个分布的方差很小，极其稳定。第二个选项下山考功名，这方差可就大了：上限很高是做官，而且这里绝对有重尾——你用权力获得钱，再用钱获得更高的权力；但这里也有巨大的负面风险，下限很可怕，而更多时候你根本就考不上，所以整体的平均值并不高。第三个选项出去云游，这个选项的随机性太强了，可能半途而废也可能有奇遇，我们实在不知道路上有什么，需要更多的信息。**决策就是在管理自己未来的分布。你是在用你对世界的理解进行赌博，你最起码得想一想期望值，想一想方差，想一想尾部风险和稳健性。**

理解了这些，决策的首要指望就不是必胜，而是**可活**。孙子兵法说："昔之善战者，先为不可胜，以待敌之可胜。不可胜在己，可胜在敌。"查理·芒格说："我只想知道我会死在哪里，这样我就永远不去那个地方。"这就是先看看你能不能接受未来结果的下限，完了再考虑上限值不值得你的付出。塔勒布说："**永远不要因一条河平均只有四英尺深就涉水而过。**"这就是说不能只看均值，你得管理尾部风险，看整个分布有没有极端情况才行。乔治·索罗斯说："**你看对还是看错并不重要，重要的是你看对时赚了多少，看错时亏了多少。**"这说的就更基本：关键不在于你对了多少次错了多少次，而在于你的对错之间是否存在不对称性，以至于你的数学期望是赚钱的。

决策一定得冒险，但绝对不是盲目冒险。我们要尽可能的管理风险，尽可能让赢面大、输面小、尾部风险可控才行。理想情况下，高手应该尽量不让自己频繁进入高方差赌局，而是多用低波动、可重复的过程积累胜利，这就叫**善战者无赫赫之功**。

决策气质好的人不计一城一池之得失：只要过程是对的，输一两次也无所谓；如果过程不对，赢了也只是侥幸。《呆伯特》系列漫画的作者斯科特·亚当斯有个说法特别好："**如果你要长期干一种事情，就不应该追求一个具体的目标，而应该追求系统。**"系统是一种连续变化的东西，可以是一项技能、一段关系等等，关键是系统中可以出很多个项目。你最关心的不是某个具体项目的成败，而是你这个系统够不够好。比如亚当斯的写作就是一个系统：下一个作品在哪发表、有多火、赚多少钱都不重要，这个系统甚至都没有明确的目标，重要的是它是不是一直都在发展壮大，它输出的概率分布是不是越来越好。**有一个成熟的系统、概率分布充分优化，成功就是自然而然的事情。**

最后咱们模拟几个场景，来一番决策演练。

**第一题：假设你的一位朋友得了重病是肿瘤，请问应该保守治疗还是做手术？**你详细咨询了医生的判断，发现两个选项的概率分布分别是下面这样的：第一个选项是保守治疗，分布很窄，几乎确定能再活五年，在此期间生活质量中等，但很难再活更长时间；第二个选项是做手术，这是个双峰分布：30% 的概率手术失败立刻离世，70% 的概率彻底治愈。这些信息其实已经足够，只要再算一算预期寿命就可以了：**如果病人已经 80 岁，那显然保守治疗是最好的选择**，毕竟到这个岁数再活五年还不错；**而如果病人才 20 岁，那就非常值得做手术拼一把。**

**第二题：你面前有两份工作 offer，一个是去高科技大厂当个螺丝钉，一个是去创业公司当个多面手。**第一个选项去大厂，工资高而且稳定、福利好，但这里有左尾风险：技能单一化，一旦被裁员不容易找下家。第二个选项去创业公司，起薪低而且公司搞不好会倒闭，但是在创业公司什么都能学一点、技能全面，而且这里有个不太大的右尾机会：公司一旦做成，你就暴富了。怎么选呢？跟个人情况有关系：**如果你背着房贷还有了孩子，你需要的是低方差，那就得进大厂；而如果你血气方刚、一人吃饱全家不饿，你就可以搏一把重尾，去创业公司。**

**第三题：有人向你推销保险。**你明知道考虑到风险事件发生的概率，这个保险平均损失的数学期望一定是低于保费的（不然保险公司怎么赚钱），那你要不要买保险呢？**答案取决于能不能承担那个损失。**房子发生火灾的概率是极低的，绝大多数人一辈子都用不上房屋保险，但我仍然建议购买，因为万一真出事了你承担不起。大病医疗保险也是如此。但你说汽车要不要买交强险之外的险，或者你买台电视机是不是也要买个质量保险，那就是另外的故事了。

你看我们这里权衡的不是这个结果和那个结果，而是对未来概率分布的接纳。**很多时候，决策看的不是最好有多好，而是最坏能有多坏。**当你学会注重概率分布而不是结果的时候，你的气质是不一样的：你不会因为一次侥幸胜利而狂喜，也不会因为一次遵循正确策略的投资遭遇失败而崩溃，因为你知道只要样本量足够大，大数定律终究会把你带回你应该在的高度。你拥抱不确定性，但是对毁灭性的尾部风险避之唯恐不及。你极度重视制度和规则，因为制度是保证概率分布稳健的唯一工具，而人质充满了随机性。你相信程序正义是长期最优，你的情绪稳定。**高水平决策者就如同斯多葛主义的射箭手：你尽全力拉弓瞄准，那是你能控制的过程；至于箭离弦之后是否正中靶心，你保持某种冷静的默然——因为那是风向和噪声的抽样。**

下一讲我们说颗粒度和因果中介。
`,e1=`# 029丨颗粒度和因果中介：用模型思考

## 讲什么

决策判断第三讲：**用模型思考**——想操控一个事物，你必须在头脑中建立这个事物的模型。模型要满足两个要求：颗粒度恰到好处（最小描述长度）+ 包含因果关系（找到关键中介变量）。

## 解决什么真问题

"癌症是气出来的""孩子成绩差就是不努力""项目延期就要求加班"——这些都是没有模型的冲动反应。**没有模型，你就如同面对黑箱，只能对输入信号做冲动反应；有了模型，你才知道按钮在哪。**

## 核心论点

- **好调节器定理**（Conant & Ashby, 1970）：系统的每一个好调节都必须是该系统的一个模型——**你的认知结构必须同构于你想要控制的那个事物。你能理解到什么程度，才能控制到什么程度。**
- **最小描述长度准则**：最好的模型是能用最短的代码长度解释最多数据的模型——既不是过拟合（把每天天气都描述一遍），也不是欠拟合（"这地方总下雨"）。
- **因果关系要靠干预来验证**：保持其他因素不变，单方面让 X 发生，看 Y 的概率是否增加。公鸡打鸣和太阳出来是相关；按开关和灯亮是因果。
- **找到中介变量，事情才好操作**：生气→不良生活习惯→癌症。排除了不良习惯，生气和癌症就没关系了。

## 关键例证 / 金句

- 《点球成金》：传统球探的模型是"球星导致赢球"，比利·比恩的新模型是"**上垒+选球眼光→上垒→得分→赢球**"。上垒是被人忽视的关键中介变量——那些长得丑、姿势怪但特别能蹭上垒的球员，价格像白菜一样便宜。
- 现代足球的"上垒"不是射门也不是最后一传，而是**倒数第二、三脚传球或带球突破——那个撕开防线、改变了场上概率结构的动作**。
- 学习模型：时间+注意力→记忆编码→提取→成绩。家长只知道盯学习时间，那是因为他们只能看懂时间。
- **"理解即压缩"**：高手对股市下跌的解释就一句"流动性收紧导致风险资产重估"，能解释 80% 的波动。

## 如何应用

- 买手机：先想好干什么用（只刷短视频还是经常拍夜景？），只考虑几个关键变量，把模型压缩到最简。
- 公司管理：别盯终点（收入），找到一两个最关键中介变量——那些才是"上垒"。
- **"地图不是疆域"**：把世界变成模型总是有危险的，但如果你连地图都没有，你连路都上不了。

---

## 全文

> 以下为课程转录全文，已做去噪与语义分段；**加粗+底纹**处为核心论点与金句。

欢迎来到现代思维工具课，我是万维钢。正确的决策要求你对事物有正确的认识，咱们先从一个错误的认识说起。

网上流传一种市侩哲学，说如果想不得癌症就一定要放开，内心要强大到混蛋，你别憋着、不要自己心里太拧巴，这是减少癌症发生的方法。很多人相信癌症是气出来的。但我不得不说那是伪科学：美国癌症协会专门有个科普页面，直接说有研究显示**人的个性、想法和情绪既不会导致癌症，也不会影响癌症是否发生**；美国国家癌症研究所说的更保守一点，说压力和癌症之间没有清晰链条。其实这里早就有一系列大规模跟踪研究：比如一项对超过十万英国女性的研究发现，压力频度和不良生活事件与乳腺癌风险无关；一项针对超过 11 万人的大规模荟萃分析显示，在排除了吸烟饮酒等因素后，所谓工作压力与任何主要癌症的风险都没有关联；更有研究发现愤怒、负面情绪与癌症风险总体无显著关联。

那你说不对啊，精英日课专栏不是经常讲压力对健康的各种坏处吗？怎么压力偏不会导致癌症呢？科学家对此说的很明白：那些研究说的是压力不会**直接**导致癌症，但压力可能与癌症有**间接**的关系——比如说压力可能会让你产生不健康的生活习惯（吸烟、喝酒、暴饮暴食），而这些习惯有可能增加癌症的风险。**这是两个非常不同的故事。理解这两个故事的区别，你才能学会控制复杂事物。**

简单说，**要想操控一个事物，你必须在头脑中建立这个事物的模型。**咱们先看看没有模型是什么状况：想象一个大学宿舍楼的管理员，他最反感的是每天晚上过了熄灯时间楼里还有吵闹声。如果对宿舍楼的情况一无所知，他就只能一听见吵闹声就出去大喊大叫"大家不要吵了"，甚至不得不挨个屋子去敲门。可是如果管理员脑子里有个宿舍楼的模型，他知道 305 房间有个低音炮、117 房间有个学生最爱在熄灯以后打联网对战游戏、还有这几天二楼的水泵坏了大家洗漱有影响——他就不必无能狂怒，而能够根据噪音的类型精准干预。其实生活中很多人就像是那个宿管员：体检指标差了就喝枸杞，一看项目延期就要求员工加班，听说孩子成绩下滑就疯狂打骂——你都不知道事情是怎么回事，但是你必须做点大动作。**模型是事物在你头脑中的一个结构镜像，能帮你看清楚它运行的底层机制。没有模型，你就如同面对黑箱，只能对输入信号做冲动的反应；有了模型，你才知道按钮在哪。**

控制论领域有个极其深刻的说法，叫**好调节器定理**，是 1970 年由罗杰·科南特和罗斯·阿什比提出来的。意思非常简单：**系统的每一个好调节都必须是该系统的一个模型。**这个定理等于是从数学上证明了：**你的认知结构必须同构于你想要控制的那个事物。**如果你的模型比现实世界简单太多——比如用"癌症是气出来的"来解释复杂的生物学——你就一定会丢失关键信息，你的决策就一定是错的。**说白了，你能理解到什么程度，才能控制到什么程度。**

那好的模型该是什么样呢？我们至少有两个要求。

**第一个要求是模型的复杂度——也就是职场白领爱说的颗粒度——必须恰到好处。**太简单粗糙不好，但是太复杂也不好：说我要像三体里的质子一样把世界上每个粒子都跟踪起来，那你的算力根本受不了，而且反而会让你把注意力放在没有用的地方。**模型一定是对真实世界的某种压缩，而这个压缩要恰到好处才好。**你早就听说过所谓奥卡姆剃刀（如无必要勿增实体），信息论里有个理论相当于是把奥卡姆剃刀变成了可计算的准则，叫做**最小描述长度**。简单说，最小描述长度这个准则要求：最好的模型应该使得以下两项之和最小——第一个是模型的长度（描述这个模型本身所需要的比特数，也就是你这个模型本身有多复杂）；第二个是数据补丁的长度（如果别人用你这个模型解释现实，还要补充多少例外说明）。**说白了，最好的模型是那个能用最短的代码长度解释最多数据的模型。**

比如人家问你本地的天气怎么样，你要是把过去一年每天的天气都给描述一遍，那就太长了——没有压缩谈不上理解，这叫过拟合；你要是就回答一句"这地方总下雨"，那就太短了，这叫欠拟合。一个恰到好处的描述是："这里属于温带海洋性气候，受西风带控制，全年温和湿润，虽然阴雨天多，但多是毛毛雨，很少有暴雨。"你看这才几十个字，有规律、有机制、能代表很多数据，别人一听就知道是怎么回事，这就是好模型。**用模型思考，要善于丢掉细节直打本质。有时候与事物保持一定的心理距离，你的解释力反而更高，因为你更能把问题抽象化、原则化。**为什么最近股市在跌？你要是考察网上舆论列举出来 100 个理由——中央银行加息、地缘政治、某公司财报、某大 V 的言论等——对一大堆噪音还是一脸困惑。**高手的模型一定是高压缩的："流动性收紧导致风险资产重估"，这一句话就能解释 80% 的波动。**有一句格言叫"理解即压缩"。练成这个功夫，你就是那个传说中所谓"花半秒钟就看透事物本质"的人。

**好模型的第二个要求是其中包含因果关系。**有因果关系，你才能讲清楚事情的机制。咱们这里不谈哲学——要是从纯粹哲学角度讲，这个世界上有没有真正的因果关系还两说——我们使用图灵奖得主朱迪亚·珀尔在《为什么：关于因果关系的新科学》那本书里那个洞察：**我们不是想要彻底说清楚绝对的因果，我们其实想知道的是"我做什么事能干预这件事的发生"。**经常一起发生的两件事之间未必有因果关系，可能只是相关性。但是如果我强行介入，在保持其他所有因素不变的情况下单方面让事件 X 发生，而这时候事件 Y 发生的概率增加了，那么我就可以说 X 对 Y 有因果效应。比如公鸡每天早上一打鸣太阳就出来，这是一个相关性。要知道这里有没有因果，你必须做一个干预：有一天你强行介入把公鸡的嘴堵上，看看太阳还会不会出来。如果太阳照样升起，那就说明公鸡打鸣和太阳出来之间没有因果关系。反过来，你走进一个黑暗的房间，完全出于自由意志单方面突然行动按一下开关，灯就亮了，那我们就可以说这里有因果关系：开关导致灯亮。**你的模型中应该包含若干个因果关系，最好把各个变量用因果关系箭头串联起来画成图，清晰展示整个事情的机制。**

现在关键的洞察来了。**任何模型都不可能穷尽一个事物中所有的因果关系，多了也不好，少了也不好，达到最小描述长度才好。**比如我们前面说了，大量的研究都指出生气和癌症之间的相关性是很小的：很多人经常生气也不得癌症，很多人不生气却得了癌症。但你要是强行找相关性，的确也有一些研究显示生气的人比不生气的人患癌概率要稍微高那么一点点。可如果你据此就说"生气导致癌症"，那就太不负责任了——这个链条过于粗糙，而且效应太脆弱。负责任的做法是看这里面还有没有间接效应，也就是所谓**中介变量**：生气导致了什么，然后那个什么又导致了癌症。美国国家癌症研究所直接点名：长期心理压力可能让人更容易有不良生活习惯，包括暴饮暴食、不运动、吸烟喝酒，而这些才是更明确的癌症风险因素。**所以更精确的因果链条是：生气→不良生活习惯→癌症。**那些研究说，如果排除这些不良生活习惯的影响，生气和癌症之间就没有什么关系。**找到"不良生活习惯"这个中介，事情就好操作了：如果你虽然情绪不佳，但依然能坚持锻炼并控制饮食，那么你就不会因为生气而得癌症。有个好模型，你才能抓住控制点。**

咱们看一个经典案例，出自迈克尔·刘易斯的《点球成金》。棒球这个运动在美国已经流行了很多年，但是长期以来棒球人的模型是非常粗糙的：球探认为球星导致赢球，得买那些能打出全垒打、长得帅、姿势优美的球员——而这就使得符合那个形象的球员极其昂贵。大约是 2002 年，奥克兰运动家队总经理比利·比恩因为没钱，被迫领悟到了一个新的棒球模型：**赢球需要得分，而得分需要上垒。上垒+选球眼光→上垒→得分→赢球。上垒是被人忽视的关键中介变量。**不管你是打出去的、跑出去的，还是被球砸中身体保送的，只要你能上垒，你就能制造得分机会。而市场上那些长得丑、姿势怪、不会打全垒打、但特别能蹭上垒的球员，价格像白菜一样便宜。于是比恩买了这样一群被传统球探鄙视的球员，结果是以极低的薪资总额创下了 20 连胜的记录。很多人说这是大数据的胜利。可什么叫大数据？**没有模型哪知道怎么分析数据？这是因果模型对直觉的降维打击。**

好，现在我们把点球成金这个思维用在足球上。你猜一猜足球比赛中的"上垒"是什么呢？你可能想到助攻，也就是进球之前的最后一脚传球。但这个模型太简单了：解说员和球迷早就知道助攻的价值，助攻都有自己的排行榜，那里没有溢价。**现代足球专家使用的模型是：真正的杀招往往不是射门，也不是最后一脚传球，而是倒数第二脚、第三脚传球或者带球突破——是那个撕开防线、改变了场上的概率结构的动作。**本来攻守双方是平衡的，人群之中有个球员看似随意的传了一脚球，把球从低威胁区域送到了高威胁区域，进球概率一下子就从 2% 提升到了 30%。模型说这一脚提高了期望威胁。**别盯终点，盯中介。**

咱们来几个小应用案例帮你找找手感。比如买手机：有的人说"我就要苹果新出的最贵的那款"或者"我买个便宜的就行"，这都是过短的模型；也有人花好几天研究各种手机参数，又是比价又是看评测，最后还没买成，那你用的模型就太长了。最小描述长度准则要求信息刚好够用：你先想好买手机干什么？你是只需要个娃娃还是经常要拍夜景？你是要打游戏还是只看看短视频？只考虑几个关键变量，把模型压缩到最简，准确决策。

再比如学习。孩子成绩不好家长就大喊大叫说你怎么不努力，可是学习有很多环节，到底哪个环节出了问题？你得有模型才能分析。我们搞个最简单的模型：**时间+注意力→记忆编码→提取→成绩。**如果是时间和注意力投入不足，那的确是孩子不努力；如果是记忆编码有问题，那就是老师没教好或者学习材料不对；如果是提取问题，那就是练习不充分。**有些家长只知道盯着孩子的学习时间，那是因为他们只能看懂时间。**

还有公司管理。有些老板喜欢搞长模型，各种场景事无巨细都有详细规定，员工根本执行不了；有些老板喜欢短模型，甚至说"我只要结果你们看着办"。好的管理应该首先设定几条核心价值观，尽量覆盖复杂场景；然后要对公司的核心业务建立因果图：如果终点是收入，那么中介可能是留存、转化率、渠道质量、产品体验、交付速度，再往前还有团队协作、决策效率、信息流等等。**只盯收入，你就会专门做短期促销，属于欠拟合；要是对以上所有中介变量全都盯住、每天做日报，你就无所适从，陷入过拟合。最小描述长度准则要求你找到一两个最关键中介，那些才是上垒和威胁。**

高水平决策者知道自己该看什么：他会以最小描述长度把事情压缩成一个模型，他会洞察其中的机制、描绘因果图，确保自己发现关键中介。其实没有绝对标准的颗粒度，到底模型要细致到什么程度才好，是由你的主观需求决定的。而且你到现场总会遭遇意外。有句格言说："**地图不是疆域。**"把世界变成模型总是有危险的，但如果你连地图都没有，你连路都上不了。
`,t1=`# 031丨贝叶斯先验：判断是主观的，但可以更科学一点

## 讲什么

决策判断模块：**贝叶斯主义**——先验（prior）是你对事情的原本看法、你的成见。成见是认知的起点，而且这个起点可以被量化、被更新、被审计。

## 解决什么真问题

跟一个陌生同事打交道不知道可不可靠、刷到爆料想转发又怕被证伪、身体不舒服权衡值不值得去医院——任何决策都必须带有主观成分。**世间没有绝对的正确，干什么都有冒险成分。如果你认同这些，你可能是个贝叶斯主义者。**

## 核心论点

- 贝叶斯公式说白了就是一句话：**你现在的观点 = 你原来的观点 × 新证据的修正。**取对数后乘法变加法：后验 = 先验 + 证据更新。
- **罕见病悖论**：发病率 0.1% 的病，检测准确度 99%，测出阳性后实际得病概率只有约 1/11——**如果先验原本很低，哪怕证据很强，后验概率也还是不高。**
- 频率主义 vs 贝叶斯主义：频率主义者认为概率是事物的客观属性（世界的旁观者）；**贝叶斯主义者认为概率是信念的度量，是对你无知程度的量化（世界的参与者）。所有概率都是条件概率。**
- **克伦威尔法则：真正的贝叶斯主义者永远不会把概率设为零或一。**"我恳求你们在基督的慈悲下想一想：你们可能错了。"
- 我们每个人都是行走的大语言模型：过往的经历、教育、原生家庭构成了我们的训练数据，也就是我们的先验。**人脑就是一台主动预测的贝叶斯推理机。**

## 关键例证 / 金句

- 垃圾邮件过滤：先验设为 20%，每看到 "free" 就调高、看到 "meeting" 就调低——**程序不是在断言，而是在记账**。
- AI 对齐就是给模型一个不可轻易被提示词推翻的先验；总有人会尝试让模型越狱。
- **"先验既是我们的财富，也是我们的囚笼。证据不是绝对的真理砖块，而是信念交易的货币。"**
- 凯恩斯名言："当事实改变时，我改变我的想法。先生，你呢？"

## 如何应用

- 判断新同事值不值得信任：先看环境设先验（本地人心险恶就设低、好社区就设高），然后允许人家自己证明自己——具体办一两件事当证据更新先验。
- 两种错误都要避免：完全没有先验（今天信 A 明天信 B，不可预期）和先验不可动摇（设成 0 或 1，拒绝更新）。
- **有一张错误的地图也比没有地图强。**

---

## 全文

> 以下为课程转录全文，已做去噪与语义分段；**加粗+底纹**处为核心论点与金句。

欢迎来到现代思维工具课，我是万维钢。日常生活中充满了决策：跟一个新同事打交道不知道这人可不可靠；刷短视频看到一个爆料，想转发又怕被证伪；身体有点不舒服，权衡值不值得去趟医院。你需要做一个决断，你迫切想要正确答案。但是经过前面几讲，你可能也已经明白：**任何决策都必须带有一定的主观成分。**设定价值函数、选择概率分布、使用一定颗粒度的模型，其实都是在做主观的抉择。世间没有绝对的正确，干什么都有点冒险成分。如果你认同这些，你可能是一个贝叶斯主义者。这一讲的思维工具就是**贝叶斯主义**，我们重点讲一个前面提到过的概念：**先验**。

先验是你对事情的原本看法。它可以是单数也可以是复数：可以指你对一个特定事件概率的判断、对一个领域的观念，也可以指你整个的世界观。**简单说，先验就是你的成见。但成见是认知的起点，而且这个起点是可以被量化、可以被更新、也可以被审计的。**老百姓说"你对这个事的看法是什么"或者"经过这个事，我的观点发生了一点改变"；而学者说"你对这个事的先验是什么"或者"这个证据更新了我的先验"。学者这样说话是因为他知道著名的贝叶斯公式。

公式里每一项都是概率：H 代表一个判断，E 代表证据。比如 H 代表你的一个朋友得了某种罕见的病，E 代表他在医院检测这个病的时候检测结果呈阳性。P(H) 是检测之前你判断他得这个病的概率，也就是你的先验概率；而 P(H|E) 则代表检测之后、在有了 E 这个证据的条件下，你重新判断他得这个病的概率是多少，这也叫**后验概率**。P(E) 是检测结果这个证据在所有情况下发生的总概率，而 P(E|H) 一般叫**似然度**，意思是在 H 这个假设之下我们看到当前这个证据的可能性有多大——它考察的是你的世界观与现实的兼容度。

**贝叶斯公式说白了就是一句话：你现在的观点等于你原来的观点乘以新证据的修正。**其实如果你把公式两边取个对数，乘法变加法，公式的样子就更直观了：后验 = 先验 + 证据更新。

回到罕见病的故事，每一个学贝叶斯公式的人都会遇到这个例子。假设这个病的发病率极低，只有 0.1%，我们可以说先验概率等于 0.1%。我们还假设医院的检测准确度极高：如果一个人真有病，99% 的情况下能检测出阳性（似然度 = 0.99）；如果没病，则是 99% 的可能性检测出阴性，也就是只有 1% 的误报率。那这个证据发生的总概率怎么算呢？咱们用个笨办法：假设有 1000 个人去体检，根据 0.1% 的先验概率，其中真有病的只有 1 个人，他有 99% 的概率被检测出来，所以真阳性近似 1 个人；而因为有 1% 的误报率，假阳性近似有 10 个人，所以总的阳性人数是 11 个人。那么用后验概率一算，等于 1/11。**1/11 比 0.1% 大得多，但这仍然是一个相当小的概率。换句话说，虽然你的朋友以 99% 的准确度被检验出患有这种病，可是他实际得病的概率却只有 11 分之一。**这是为什么呢？因为那是一个罕见病，他得病的先验概率非常低。**如果先验原本很低，哪怕证据很强，把先验提高了 100 倍，你的后验概率也还是不高。**

这就是贝叶斯主义者的气度：如果我认为足球天才是一种极为罕见的事物，哪怕你跟我说得天花乱坠，说这个小学足球队里有个孩子踢得特别好、有教练认为他就是下一个梅西，我也不会特别相信；如果我非常不相信世界上有鬼，你给我讲 15 个鬼故事也不能让我从此怕鬼。

你的先验因为证据而发生改变，后验就是你更新后的先验。托马斯·贝叶斯是 18 世纪的人物，他在 1740 年代推倒出了这个公式，但是把贝叶斯公式理解成对先验的更新、乃至于成为一个范式，则大约发生在 1920 至 1930 年代，从此就争议不断。**争议点在于到底什么是概率。**当你说概率的时候，你到底是在描述世界，还是在描述自己对世界的信心？传统思想——也就是你在中学学的那个概率论——可以称之为**频率主义**，认为概率是事物的客观属性：比如一个公平的硬币抛出来，你得到正面的概率就应该是 50%，这是一个绝对的数字，是一个真值，只要你抛的次数足够多，你得到正面的频率就应该等于那个客观的概率真值。但是贝叶斯主义者说：谁会抛无限次硬币呢？我们生活中的事情根本没有那么多重复机会——你说这个候选人会不会当选、那个创业项目会不会死，你不会让人生重来一万次。如果一个事只发生一次，你谈论频率不是很荒唐吗？**贝叶斯主义认为概率是信念的度量，概率只存在于你的脑子里，其实是对你无知程度的量化。频率主义者是世界的旁观者，而贝叶斯主义者是世界的参与者**，认为人有主观能动性——也就是所有概率都是条件概率，你通过行动探测证据改变先验。不同的参与者人生经历不同，先验自然不同。**贝叶斯主义等于说：概率是主观的。**

那你说这也太不靠谱了，一般人没有多少社会经验，胡乱说一个先验哪有什么参考价值呢？没错。所以我理解，使用贝叶斯预测最好的办法是**把这个事已知的频率、或者说世人普遍的信念、或者科学知识当成你的先验作为出发点**。比如开头那个罕见病的例子，如果我们对那个朋友一无所知，就只好假设他得病的概率就是这个病在人群中总的发病率（0.1%）作为先验；但如果我们知道他更多的信息（年龄、生活环境、原本的健康状况、现在有什么症状等），那就可以把那些信息当做证据更新先验——这个人年龄小我们就把概率调低一点，这人原本健康状况就很差那我们就把概率调高一点。这样你就把普遍的概率给具体化了。

这非常有用。举个例子：你能不能写一个简单的算法实现垃圾邮件过滤的功能？已知在所有邮件之中垃圾邮件的占比是 20%。你不能直接利用这个频率，毕竟你不可能随机选取 20% 的邮件标记为垃圾邮件。那你怎么办呢？早期的一个经典算法就是使用贝叶斯方法：你注意到邮件中如果出现某些词它就更像垃圾邮件（比如出现 "free"），而出现另一些词它就更像是一封正常的邮件（比如出现 "meeting"）。你可以把这些词当做证据，你通过大量的统计知道这些证据的似然度，那么你只要把初始先验设定为 20%，每看到一个新词就做一次贝叶斯更新——看见 "free" 这个词就把概率调高一点，看见 "meeting" 就调低一点。就这样把整封邮件分析完，你就得到一个关于这封信是否为垃圾邮件的总的后验；如果这个后验高于某个标准值，你就可以标记为垃圾邮件了。**这样程序就不是在断言，而是在记账。**

现在的 AI 大语言模型其实就是一个巨型的贝叶斯预测机：训练模型就是把这个世界的先验编码进它的参数之中，那是一种很强的先验，所以模型一般不会胡乱说话；当你给模型一段提示词，你就是在给它输入观测证据，强迫它更新后验概率，从而输出一个具体的回答。而 AI 公司会设法给模型一个不可轻易被提示词推翻的先验，这样不管用户怎么诱导它都能坚持某些底线——这就是对齐。但那个先验再强也是个理论上可以改变的数字，所以总有人尝试让模型越狱。

在这个视角下，**难道我们每个人不都是行走的大语言模型吗？我们过往的经历、教育、原生家庭构成了我们的训练数据，也就是我们的先验。**联系咱们前面讲过的自由能原理，我们可以说**人的大脑就是一台主动预测的贝叶斯推理机**：你对环境的预期就是你的先验，你受到的惊奇就是证据。比如你拿杯子喝水，杯子就在眼前，你对它的位置、重量和大概的手感都有一个预先的估计，这就是你的先验；你基于先验做出伸手的动作；当你的指尖接触到杯子时，如果触觉和你预想的不一样（比如杯子特别烫），你就会产生一个惊讶作为新的证据，现在你必须更新先验，然后发出指令改变动作，把手缩回来。顺序非常清楚：**我们总是先预测，再接收反馈，再调整。我们不是两眼一抹黑的出发，而是一定要先有一个先验。**还是那句话：有一张错误的地图也比没有地图强。

如果证据和先验不符，贝叶斯公式要求我们更新先验；但是自由能原理说，除了更新先验你还有另一个选项，那就是主动推断：你可以改变环境，让环境适应你的先验。如果我原以为房间暖和，结果房间很冷，难道我就坐视它这么冷吗？我完全还可以把暖气调高一点。但不管怎么做，**当证据跟你的先验不符的时候，你必须做点什么才好，你不能无动于衷。**以前凯恩斯有句名言："当事实改变时，我改变我的想法。先生，你呢？"

这一切听起来顺理成章，但有些人的认知恰恰就不是这样的。人们经常犯两种错误。**第一种错误是完全没有先验**，也就是不预设任何立场、纯看证据。你要是觉得没有立场很科学，你就大错特错了：你不可能给"明天太阳升起"和"明天太阳爆炸"同样的先验概率，我也不建议你对巴黎的小偷有和北京同样的心理准备。没有先验就意味着今天看到一个新闻你就信 A，明天看到另一个新闻你就信 B；今天朋友圈说某公司要暴雷你就清仓，明天又听说有人抄底你又冲进去；今天是左派明天是右派。**听风就是雨可不是谦逊，而是做人的不可预期——谁还敢指望你呢？**

**第二种错误是先验不可动摇**，说白了就是你把先验概率直接设成了 0 或者 1、当做绝对真理，那么公式会说不管证据多强你的先验都不会改变。可不要那样。**真正的贝叶斯主义者永远不会把概率设为零或一，这叫克伦威尔法则**，典故出自英国政治领袖奥利弗·克伦威尔 1650 年给苏格兰教会写的信："我恳求你们在基督的慈悲下想一想：你们可能错了。"**给自己"可能错了"留点空间吧：哪怕你特别特别相信一个事情，你总可以把它的先验概率设成 99.999%，但是不要设成 1。**

贝叶斯主义的基本操作心法很简单：**先根据环境参数设定先验，再把具体的事情当做证据更新先验。**该怎么判断那个新同事值不值得信任呢？你应该先考虑自己所处的环境：如果本地一向人心险恶，那你应该把先验设得很低；而如果你是在一个很好的社区，那就可以开一个高先验。但先验只是先验，你还得允许人家自己证明自己：跟此人具体办一两件事当做证据，去更新先验。

传统智慧有时候说人性本善，有时候又说防人之心不可无；有时候说知人知面不知心，有时候又说浪子回头金不换。这些话听起来都是互相矛盾的，**其实你放在贝叶斯公式的框架下看就一清二楚了。先验既是我们的财富，也是我们的囚笼。证据不是绝对的真理砖块，而是信念交易的货币。每一次经历事情，都是用证据购买更准确信念的过程。**如果我们的课程能稍微改变一点你对世界的先验，那就是我最大的荣幸。

下一讲我们讲信息价值，说怎么区分沙子和金子。
`,r1=`# 032丨信息价值：怎样区分沙子和金子

## 讲什么

决策判断模块：**信息价值（VOI, Value of Information）**——只有当一条信息能够改变你的实际行动时，它才有价值。对决策有用，才有价值。

## 解决什么真问题

你每天花好几个小时刷手机、关注所有行业大 V、1.5 倍速听硬核播客、订好几个 AI 服务——听起来挺积极，其实是 FOMO（害怕错过）。**接收了这么多信息，你难道不应该变得更强大更从容吗？怎么还成了惶惶不可终日呢？因为那些信息没有价值。**

## 核心论点

- VOI 的严格定义：**有这条信息时你能做出的最佳选择，比没它时能做出的最佳选择，平均能多赚多少。**
- 高价值信息的三个特点：**目标导向**（能改变你的动作、对目标有实际推动）、**带有痛感**（改变你的先验、让你不舒服）、**出现在决策边界上**（你正好在两个选项之间摇摆时让你立即清晰）。
- **没有决策对象的信息，它的价值接近于零。**你昨天看的那篇万字长文解析 AI 革命，也许 VOI=0。
- 两个概念：EVPI（完全信息期望价值，上帝视角）和 EVSI（样本信息期望价值，做实验/抽样/A-B 测试获得的局部信息）。**试错并不贵，最贵的是在无知时重仓。**

## 关键例证 / 金句

- 石油公司案例：打井成本 1000 万、有油赚 4000 万、有油先验 20%——不打是理性选择；一份能确定有没有油的勘测报告值 800 万美元。这就是信息的价钱。
- Polymarket 套利案例：博士生发现亚洲博彩市场赔率更新比 Polymarket 提前两三小时，用机器人抓两个市场的赔率差自动下注，3000 次下注获利近 300 万美元——**高 VOI 不是赌球市场有这些项目，而是两个市场之间的赔率差异**。
- **"人们常常把消费信息等同于一种行动，但这完全是两回事。能改变行动的才是有价值的信息。"**
- 职场普通员工往往高估行业宏观趋势的价值，你最应该关心的是：**你们公司这个特定场域的奖励函数是什么？升职加薪看的核心指标是什么？你眼前的工作流程哪一部最卡？**

## 如何应用

- 做个信息狙击手，而不是信息漫游者：先想好自己要做什么决定，现在距离决策边界是近还是远，这条信息有没有可能对你的决定产生重大影响，然后看成本。
- 该拍板就得拍板：信息有强烈的边际效用递减，调研而止也是一种技能。
- 各路公开报道、宏大叙事、宏观大趋势预测都是被高估的信息，看着华丽其实都是沙子；**高 VOI 信息往往是比较细碎、不起眼、甚至听起来有点无聊的东西**——你自己的数据、用户的负反馈、两个圈子之间的结构洞透露的内部消息。

---

## 全文

> 以下为课程转录全文，已做去噪与语义分段；**加粗+底纹**处为核心论点与金句。

欢迎来到现代思维工具课，我是万维钢。这一讲我们说说**信息价值**。

你每天花好几个小时刷手机，你关注了所有的行业大 V，你在上下班路上还要用降噪耳机以 1.5 倍速播放硬核商业播客，你加入了十几个微信交流群，你每个月花好几百元订阅 AI 服务——因为你想知道下一个风口在哪，你必须率先用上最新的工具，你需要了解政策走向，你得跟上热点。这种情绪听起来挺积极，但其实那是害怕。英文甚至有个专门的词叫 **FOMO**（fear of missing out 的首字母缩写），也就是害怕错过：你怕自己没用过那个最具颠覆性的新模型，你怕听不懂同事嘴里蹦出的新词，你怕被时代抛弃。**可是接收了这么多信息，你难道不应该变得更强大、更从容吗？怎么还成了惶惶不可终日呢？因为那些信息没有价值。**

**信息价值（简称 VOI）是决策科学里的一个专门理论**，我希望它能帮你区分沙子和金子。VOI 在 20 世纪中叶出现，相当于是统计学和管理科学的一次范式转移：以前学者们都是关注判断信息真假、如何取得信息之类的问题，可是**真实的信息不一定对你有用**。是 VOI 理论第一次关心信息的价值，而且它对价值的定义非常严格：**只有当一条信息能够改变你的实际行动时，它才有价值。说白了，对决策有用才有价值。**VOI 是有这条信息时你能做出的最佳选择，比没它时你能做出的最佳选择，平均能多赚多少。

一个经典的学术案例是这样的：想象你是一家石油公司的老板，你面前有一块地，在这打一口油井的成本是 1000 万美元。如果地下有油，打好的油井值 5000 万美元，等于净赚 4000 万；如果没有，1000 万美元就算打水漂。地质学家经过一番分析说这块地有油的概率是 20%。现在有一家勘测公司找到你，说他们可以搞一次精确的地震波扫描，告诉你这到底有没有油。那么请问你最多愿意为这份勘测报告付多少钱？

VOI 理论要求我们先算一算预期收益：如果你不看报告现在就选择打井，那就是要么损失 1000 万、要么赚 4000 万，预期收益是 20%×4000万 − 80%×1000万 = 0，所以理性的决策是没必要打。而有了这份报告：如果报告说有，你会决定打井赚 4000 万；如果报告说没有，你就不打，你一分钱都不会亏。既然有油的先验概率是 20%，那么报告的期望价值就是 20%×4000万 = 800 万美元。**那么 VOI 说，把你的收益从零提高到 800 万，这就是这份信息的价值。**

多想石油公司这个例子，会让你在面对新信息的时候多一份定力：**人家的报告值 800 万美元，而你昨天晚上看的那篇万字长文《解析 AI 革命》也许 VOI 等于 0。没有决策对象的信息，它的价值接近于零。**

那你说不对啊，不是说要终身学习吗？不是说要为自己赋能吗？不是说无用之用方为大用吗？在 VOI 理论看来，有价值的信息一定跟你要做的决策——或者是现在、或者是将来——有关才行。当然你也可以把注意力成本花费在跟决策无关的信息上，但那是消费价值，不是决策价值。想想那些让我们整天陷入的热点信息，恐怕大多数都跟决策没有关系。**你其实是在寻求一种"我在变强、我在跟上"的自我满足感，或者说是在确认身份认同：我是懂的人，是站在时代前沿的人，最好还是比别人更早知道的人。人们常常把消费信息等同于一种行动，但这完全是两回事。能改变行动的才是有价值的信息。**陷入信息焦虑绝不是因为缺少信息，而是因为决策没有落地。用咱们前面讲 WOOP 时候的话说：那些整天消费信息而没有用信息做出实质决策的人，其实是处在漂流的状态——正所谓"夜晚千条路，白天磨豆腐"。要想打破漂流状态，你必须得有一个计划、一个可执行的动作。

价值理论听起来很枯燥，但其实特别刺激，因为它能告诉你什么是好东西。在 VOI 的视角下，**高价值信息往往有三个特点**。

**第一是目标导向。**先想做一件事、有一个目标，才谈得上追逐高价值信息：你到底想优化什么？你现在所做事情的瓶颈是什么？好的信息应该是一个杠杆，它能改变你的动作、对你的目标有实际的推动作用。而这样的信息往往是本地的、是专门对你的，而不是热搜新闻。日本首相说了什么跟你没啥关系；你应该关心你们团队的真实产能分布——到底谁在扛事、谁是瓶颈、谁在假装。

**第二，它带有痛感。**我们的大脑都有确认偏误，我们喜欢看那些能印证自己原有观点的信息。**但真正有价值的信息一定是不符合你之前认知模型的信息，它会改变你的先验。**这种信息不仅会让你惊讶，而且往往让你不舒服——它可能是负反馈，可能证伪你的观念。

**第三个特点是它出现在决策边界上。**只有当你正好在两个选项之间摇摆、选这个还是选那个、拿不定主意的时候，来一个关键信息让你的选择立即清晰，这才是高 VOI。比如说你已经打定主意要买一款新能源车，钱都准备好了就等周末出手了，今天又看到一份关于电动车的分析报告——你很感兴趣，但其实不会左右你的决定，这就是低 VOI。反过来说，如果你现在手里有两份工作 offer 各有利弊正拿不定主意，突然有个朋友给你透露了一个消息：其中一家公司正在酝酿可能一两年内上市——这个消息对你就价值千金。

对比之下，我们整天 FOMO 的那些信息：一是人人都能看见，二是主要提供情绪价值，三是跟你的决策基本无关，所以 VOI 都是很低的。

我说一个实战例子。有一个预测市场叫 Polymarket，你可以在它网站上对各种公共事件下注。2026 年 1 月到 2 月间，有个博士生在上面对各大体育赛事下注了大约 3000 次，总共获利将近 300 万美元。他是怎么做到的呢？预测市场在比赛之前都会提供赔率，那些赔率经过精心计算，基本上能反应双方球队的真实实力。这哥们发现**亚洲博彩市场对赔率的更新会比 Polymarket 提前两三个小时**——也就是说在这两三个小时之内，亚洲博彩市场拥有比 Polymarket 更新、因而也可能是更精准的预测。这就相当于在你拿不定主意的时候，有人告诉你专业人士刚刚根据最新情况做的判断，把那个对赢球概率的估计稍微提高了一点点。这一点点足以让天平倾斜。当然如果你只做一两次这样的操作，你肯定有输有赢，但只要做的量大，那精准一点点的概率差异就能让你平均而言稳定的盈利。这哥们用了一个简单机器人实时抓取亚洲市场和 Polymarket 的赔率，利用两者的差异在 Polymarket 自动下注，等于是用系统赚钱。**请问这里的高 VOI 是什么呢？不是赌球市场有这些项目，也不是比赛赔率本身，而是两个市场之间的赔率差异。**没有人会把那个差异专门写出来告诉你，而且它稍纵即逝。我们可以想见，如果有很多人模仿这哥们的玩法，两个市场的差异就会被拉平，套利空间也就不存在了。

要获取高价值信息，**你应该做一个信息狙击手，而不是信息漫游者**。你得先想好自己要做什么决定、你现在距离决策边界是近还是远、这条信息有没有可能对你的决定产生重大影响，然后你还得看看它的成本是多少才行。VOI 并不主张我们取得所有相关的信息，你不需要不停的调研——该拍板就得拍板，信息有强烈的边际效用递减，调研而止也是一种技能。但是为了高 VOI 信息，有时候你就是得舍得成本才行，那么我们需要了解两个概念：**EVPI 和 EVSI**。

**EVPI 是完全信息期望价值**，它能彻底消除这件事的不确定性，相当于是上帝视角的信息。前面说的那个用地震波扫描勘测石油的服务给的就是 EVPI，因为它能明确告诉你这个地方到底有没有油。再比如你想买辆二手车，花钱请个专业师傅彻底检查一遍，也是获取 EVPI。然而很多时候完全信息是不可得的，这就引出了 **EVSI，也就是样本信息期望价值**：你通过做实验、抽样调查或者主动干预的方式获取的部分信息。虽然 EVSI 保留了一定的不确定性，但只要能让你概率更精确、更新了你的先验，它也很有价值。**研发新药做临床实验、互联网公司搞个 A/B 测试、搞创新弄一个最小可行产品扔到市场上看反馈，这些都是获取 EVSI 的方法。**

这些原则都很简单。咱们再看看日常生活中的高价值信息都有哪些——其实并不多。职场普通员工往往会高估行业宏观趋势的价值：他们喜欢谈论所谓风口，关心行业巨头的融资新闻，其实那都是公司高层才需要操心的事，或者干脆就是老板给画的大饼。**你最应该关心的是你们公司这个特定场域的奖励函数是什么？升职提拔看的核心指标是什么？你眼前的工作流程哪一步最卡、有没有优化的余地？**学生往往会高估升学和名校的信息，比如"未来十年最热门专业预测""清华学霸的日程表"等等，其实你更应该关心你自己的薄弱点在哪里、哪些概念你没搞懂、哪些题型你总丢分、哪些原本应该是你的必拿分。有些科研人喜欢谈论国家大事和最近震惊世界的科学发现，但那些都没什么用；大部分人更喜欢谈论江湖八卦（哪个教授跟哪个教授有矛盾、哪个大牛评上了院士等），其实也帮不了你。**你真正应该关心的是你这个细分领域里的当前热门问题和主流打法是什么？你自己那个实验为什么总做不出来？你那台仪器的底噪是多少？隔壁研究组为什么能申请到一大笔经费？**最有意思的是公司的老板们，他们很喜欢去商学院大谈特谈什么第二曲线、颠覆式创新之类时髦的概念，有的还专门研究周易玄学，但是他们更应该知道的是：**你们那个最好的销售为啥上个月离职了？你们供应链里那个总是拖延两天交货的供应商，内部到底出了什么问题？**你需要摸清楚约束、反馈和因果关系。

简单说，**各路公开的报道、宏大的叙事、什么宏观大趋势预测都是被高估的信息**——看着极为华丽，但实际上都是沙子。**而高 VOI 信息往往是比较细碎、不起眼、甚至听起来有点无聊的东西**，绝不会出现在媒体的头条：它可能是一些枯燥的先验概率，一些来自用户的负反馈，两个圈子之间的结构洞透露的内部消息，最重要的是你自己的数据。有的人谈起国际形势头头是道，但是对本单位的政治不屑一顾；有的人天天追踪 AI 革命新闻，但是连最简单的自动化工作流都没实操过；有的人在网上买个几十块钱的小玩意都会货比三家、看遍评测，但是对买房、跳槽甚至结婚这种关乎一生的重大决策却没有做过尽职调查。有些人如今饥渴的吸收知识只是为了满足自己的好奇心——我非常尊重好奇心，但有些人搜集信息是为了决策。做个知道分子也挺好，但如果你想做点实事，你得有 VOI 意识。

下一讲的思维工具是凯利公式：很多人把它当做一个投资保本的法则，其实它的作用要激进的多，而且可以指导生活决策。
`,l1=`# 033丨凯利公式：乘法世界里的认知变现

## 讲什么

决策判断模块：**凯利公式（Kelly Criterion）**——本质上是一台把认知变现的机器。它解决的不是"怎么赢"，而是"怎么一直赢"。

## 解决什么真问题

有人在股市里为几毛钱的波动天天盯盘杀进杀出，甚至加上高杠杆；可是赶上一个潜力巨大、而且极其确定的新职场赛道或者创业机会时，他们反而反复计算沉没成本、犹豫不决，最后只敢投入一点点业余时间。**押太大和不敢押都是错的——这不是信息问题，这是仓位问题。**

## 核心论点

- 凯利公式：**f = (bp − q) / b**。你该押多大，既不是看你有多想赢，也不是看你有多大的冒险精神，而是看你胜率有多高、赔率是多少。
- 赌场黑话版：**f = edge / odds**。edge 是你的认知优势（每下注一元的期望净利润），odds 是市场给的风险共识。**凯利公式让你赚的是你超出大众认知的钱。**
- 凯利公式三个底层指引：**别把自己清零**（永远不要 all in）、**认知先行**（先问自己有多大 edge，再想下多大的注）、**追求复利而不是赢一把**（这是系统不是赌局）。
- 你的增长上限受限于你的认知带宽。

## 关键例证 / 金句

- 袁绍案例：曹操东征刘备，许昌空虚，田丰建议出兵一戰平定天下——袁绍却因为小儿子生病没心思打仗。**"干大事而惜身，见小利而忘命，非英雄也。"**
- 沙门氏菌和枯草芽孢杆菌的"表型对冲"：基因完全相同的克隆群体，也会自动让一部分个体休眠、一部分出来繁殖——**进入休眠状态的细胞比例在数学上等价于凯利公式中的未下注比例**。
- **"世界既不会奖励你的努力，也不会惩罚你的动机，它只结算你的概率。"**
- **"勇敢是对本能的克服。在凯利公式看来，人生的根本自由是你始终有下一次下注的能力。"**

## 如何应用

- 职业规划：职业是典型的乘法资产（技能和声望可积累），适合多轮下注。换不换赛道？先问你真的比别人强吗（edge），再看回报结构（odds），最后谈仓位（半凯利试水）。
- 时间管理最重要的凯利策略是**少出手**：把仓位集中到能产生复利的少数变量上。
- 信任是乘法资产：刚认识先小注，表现好逐步加仓，**永远保留止损机制——关系再好，也不要把能让你瞬间破产的权限交出去**。

---

## 全文

> 以下为课程转录全文，已做去噪与语义分段；**加粗+底纹**处为核心论点与金句。

欢迎来到现代思维工具课，我是万维钢。这一讲的思维工具是**凯利公式**。很多人把它当做一个投资保本的法则，其实它的作用要激进得多，而且可以指导生活决策。**凯利公式本质上是一台把认知变现的机器。**

前面我们说了，人们把很多时间花在没有价值的信息上；而凯利公式解决的问题则是：**面对有价值的信息时，你的行动与之不匹配。**比如有人在股市里为了几毛钱的波动，每天盯着盘面杀进杀出，甚至加上高杠杆；可是赶上一个潜力巨大、而且极其确定的新职场赛道或者创业机会时，他们反而反复计算沉没成本、犹豫不决，最后只敢投入一点点业余时间。而那只不过是因为股价的波动感觉更亲切而已。用曹操评价袁绍的话说，这就是"色厉胆薄，好谋无断，干大事而惜身，见小利而忘命，非英雄也"。**押太大和不敢押都是错的。这不是信息问题，这是仓位问题。**

那怎么把握好出手的度呢？这就是凯利公式的基本用法。约翰·凯利是贝尔实验室的科学家，他 1956 年那篇著名的论文原本研究的是通信问题：你要知道，因为噪声的存在，信息在长途传递中会发生一些错误；此前信息论之父香农已经证明你可以用扩大信道的方式减少错误率，但是你不能绝对消除错误。那么凯利就想：有错误率的信息也是有用的，我能不能算它到底有多大用呢？

凯利设想了一个场景：假设赛马场外有一个赌徒，通过一条有噪声的私人电话线接收内幕消息，电话那头的人能百分之百知道哪匹马会赢；但是因为电话线有噪声，赌徒听到的结果有一定的概率是准确的（我们把这个准确的概率叫做 p），那么 1−p 就是听错的概率（q）。那赌徒拿着这个有噪声的内幕消息该怎么下注呢？如果他每次 all in，当然可以让单次赢钱最大化，但是只要听错一次就破产清零了；可是如果下注太少，又浪费了这条宝贵的内幕电话线。凯利经过一番数学推导，证明了一个极其优美的结论：**赌徒要想永远不破産、并且让资金的长期复合增长率达到最大化，他每次下注的最佳比例 f，在数学上竟然完全等同于这条电话线的信息传输率。**

这就是凯利公式。这篇论文把信息论和资本复利联系在了一起：一个是你掌握多少关于世界的有效信息，一个是你的资本如何在随机起伏中长期增长。**凯利的结论说白了就是：你的增长上限受限于你的认知带宽。**

人们立即就发现这个公式应该用在投资上，而且是最基本的原理。它解决的核心问题是：**在一个不确定的、乘法式结算的、可重复的世界里——也就是你每一回合要么赢一点要么输一点、输赢累积成复利——你到底该怎么下注才能让长期增长率最大？凯利解决的不是怎么赢，而是怎么一直赢。**

咱们来看一眼这个公式：**f = (bp − q) / b**。别急，我来解释一下这是什么意思。假设你每次拿出自己当前总资产的一部分来下注，赢了就赚到赔率，输了就输掉这一把的下注。在这个公式中：p 是这一把下注赢的概率，q = 1−p 是失败的概率，b 是赔率（一旦赢了你下注一块钱能净赚多少钱），那么 f 就是凯利算出来的你这把的最佳下注比例。比如你判断胜率有六成把握（p=0.6，q=0.4），赢了会赚一倍（b=1），那么凯利公式说你应该押 20%。**你该押多大，既不是看你有多想赢，也不是看你有多大的冒险精神，而是看你胜率有多高、赔率是多少。**

在赌场黑话里，凯利公式经常被简化成一句口诀：**f = edge / odds**。分母 odds 是赔率，它是市场给的：你直观上可能觉得赔率越高越应该多投，但市场给的收益和风险会匹配，收益已经体现在了分子上，分母这里看的是风险，体现了市场对风险的共识，高表示认为它风险大。如果一个人下注只看赔率，他就只能赚到市场的平均收益——而有效市场的平均收益无限接近于零（如果是去赌场赌博的话平均收益是负的）。**真正应该让你动心的是分子 edge。我建议你记住这个英文单词，因为它很酷：edge = b×p − q，是每下注一元的期望净利润，是你的认知优势。**更直观的理解是：你凭什么赢？就凭你有内部消息——你认为胜率应该是 p，只要那个 p 值使得 edge 大于零，你就认为这件事比市场估计的更值得赌。**edge 其实是你自己对局面的估计与市场一般判断之间的认知偏差。凯利公式让你赚的，是你超出大众认知的钱。你比大众高明多少，凯利就能帮你赚到多少，但不能更多。**而如果你不掌握大于零的 edge，凯利就要求你不要下注——说白了，**你要是不比别人高明，就别玩。**这一切跟你的性格、胆量什么的都没有关系：要不要出手，应该只看你的机会比世界给的平常价高多少。

可是咱们回头再想想袁绍。建安五年曹操去讨伐刘备，大本营许昌空虚，袁绍面临一个绝佳的战略窗口，谋士田丰立即建议出兵打许都，一战就能平定天下——用我们这一讲的话说，袁绍眼前有一个巨大的 edge。结果袁绍说他最小的儿子得了重病，自己心里乱，没心思打仗。正应了那句"干大事而惜身"。天予不取，田丰和凯利还能说啥呢？袁绍接下来就只能面对人家曹操迅速回兵，然后官渡之战自己全军覆没。**该出手时不出手，是一种罪过。**

凯利公式并不只是用在通信和投资上，在很多领域都有用。我看到一个最有意思的例子来自生物学。生物的繁衍通常是一种很危险的行为：一旦赶上环境剧烈波动，你所有个体集中在一起出来繁殖，结果繁殖失败了，那就有可能导致整个族群就此灭绝。所以有些单细胞生物发明了一个应对策略，叫**表型赌注对冲**：简单来说就是让一部分个体处于休眠状态，只让其余的个体出来赌一把参加繁殖。像沙门氏菌和枯草芽孢杆菌就有这个能力——就算这一个族群的基因完全相同、是克隆出来的，它们也会自动分散下注。这样就算环境历经几次变坏，哪怕遭遇抗生素攻击，这个族群都还能继续存活。**神奇的是，研究者发现进入休眠状态的细胞比例，在数学上等价于凯利公式中的未下注比例。**这是进化的奇迹，也是数学的威力——也许生物多样性就是系统为了应对不确定性而支付的凯利仓位。

如果你把人生想象成一系列的投资冒险，那么凯利公式给你三个最底层的指引：

**第一是别把自己清零。**只要 p 不是严格等于 1，凯利公式就要求你不要 all in。而我们前面就说了，贝叶斯主义者永远都不会假设概率等于零或者一。而且别忘了你的估计可能有误差，所以还得多留一点余地才好。**诱惑再大也得保本，确保自己始终留在牌桌上。**

**第二是认知先行：先问自己有多大的 edge，再想下多大的注。**很多人恰恰相反，是先有了强烈想押大注的冲动，再去四处找理由证明自己有优势。**我们是把认知变现，不是用认知去解释变现。**这把不合适就等别的机会——巴菲特从来不买自己看不懂的股票。**你的行动力度必须符合你的认知深度。**

**第三是追求复利，而不是赢一把。**凯利公式整个的推导设定是你要在这个连续的乘法游戏里玩很多把：有时候你赢，有时候输，它追求的是从长期看让你的积累最大化。这是一个系统，而不是只赌一局。**只要你相信数学，单次成败就都不重要，你终究是好的。**

你并不需要每次都拿这个公式进行精确计算，有时候只要有一个大概的估计、一个模糊的力度就已经很好了。咱们看几个生活中的应用场景。

**首先是职业规划。**我们前面已经讲过赛道选择，讲过探索与利用的权衡，而凯利公式能让你的抉择更精细一点。比如你对自己的本职工作不太满意，现在有个机会你可以换个工作甚至换个职业，你换不换呢？很多人把赛道当成一次性的选择，干一行就是一辈子，选错也不敢动；有的人反过来把换赛道当成情绪释放，一怒就辞职。但职业是一种典型的乘法资产：你的技能和声望都是可积累的，适合多轮下注。那么凯利的建议将是这样的：先问 edge——你在那个方向上真的比别人强吗？你能更快学会、能更好交付、更愿意熬吗？再看 odds——那个方向的回报结构如何、上限大不大？最后谈仓位：如果 edge 有但是你拿不到精确的数字，就别下注太多，可以用所谓**半凯利或者分数凯利**试水——也就是先作为副业，弄几个小项目跑一轮看看反馈。**在凯利公式的视角下，无所谓求稳还是求拼，其实只是一个度的选择而已。**

再比如说，你可以把自己的有效精力和健康也当做一种资产（尽管不容易升值）。每天做不同的事情——学习、工作、运动、社交和娱乐——就相当于是下注：这些下注可能会让你赢（比如让你更健康或者是其他正向的回报），但也可能让你输（比如做完这件事感觉更不好、身体变差）。可能刷短视频没啥价值，学习和工作有价值，但那些价值只是赔率，可不等于 edge。如果你现在已经很累了，可是手里有个很重要的活，你有必要熬夜完成它吗？也许家人说不要做，老板说应该做，但凯利会说：**你算一算 edge。而时间管理最重要的凯利策略则是少出手：你应该把仓位集中到能产生复利的少数变量上。**

还有一种乘法资产是**信任**。你在社会上的信用也好，你给别人的信任也好，都是在一次次交往中慢慢积累复利，而且都有快速清零的风险：一个人哪怕做 15 件好事，你也不见得敢把自己的银行账号密码告诉他；但他只要做一件坏事，你可能就再也不信任他。所以人际关系的凯利策略是：**第一，刚认识的时候先小注**，交给他一些小事，做好了提高 p 值；**第二，如果表现好可以逐步加仓，但始终确保赔率和回报对称**——也就是一个项目的潜在收益必须配得上你的潜在损失。为什么不应该把银行密码告诉别人？因为潜在收益非常小，潜在损失非常大。**第三，永远保留止损机制，防止清零**：关系再好，也不要把能让你瞬间破产的权限交出去。这听起来很腹黑，我也不主张跟所有人交往都用公式，但是如果你经常行走江湖，你需要好好管理你的信任资产。

总结来说，凯利公式并不只是计算仓位，它实际上给了一个乘法世界的行动哲学：**它把你的认知优势翻译成下注规模，你有多大 edge 谈多大变现。**凯利公式要求我们把人生看做一场乘法的长跑，也就是不计一城一池得失，相信逐渐但可以有起伏的积累，只要你坚持正确的策略。然后不管怎么说，别清零。

凯利公式让我们思考什么是勇敢。这几年人们常说勇敢是一种最稀缺的美德，但什么是勇敢呢？如果凯利公式说你应该押 20%，你却押了 25%，算是勇敢吗？那可能是出于你的德行（也许你想为了慈善事业自我牺牲），但也可能只是酒精冲动，更可能是来自无知。考虑到大多数人是以结果为导向——输一把就胆怯，赢一把就狂妄——**也许不被暂时的输赢所左右、能够清醒地按照凯利公式出手，才是真正的勇敢。勇敢是对本能的克服，勇敢会带给你自由。而在凯利公式看来，人生的根本自由是：你始终有下一次下注的能力。**

**世界既不会奖励你的努力，也不会惩罚你的动机，它只结算你的概率。**

下一讲的思维工具是非遍历性，我们说说什么是方差。
`,i1=`# 034丨非遍历性：玩家怕方差，庄家爱方差

## 讲什么

决策判断模块：**非遍历性（Non-ergodicity）**——积累复利不是你懂道理就行。为什么"没人能拿住比特币"？因为阻碍你积累复利的因素只有两个：最初的本钱，和方差。

## 解决什么真问题

掷硬币赌局：正面 +50%、反面 −40%，数学期望是 +5%，谁不想玩？可玩 100 把大多数人破产。**期望值是上帝视角的集合平均，时间平均才是凡人视角的命运。**为什么散户跑不赢大盘？为什么"正确的策略"也可能让你破产？

## 核心论点

- 遍历性系统：集合平均 = 时间平均（比如通勤时间）；**非遍历性系统：整体期望值不能代表个体的长期命运（比如投资、创业）。**
- 个体在非遍历系统中沿着时间线走，只要偶尔出现几次连续亏损，本金就会遭到毁灭性打击——**遭遇吸收壁，直接清零退出游戏**。
- **大盘指数享受所有重要股票的集合平均，还有定期踢出垃圾股纳入优质股的机制；散户只有几只股票，经历的是时间平均。**这就是为什么散户跑不赢大盘。
- 应对四策略：**减少交易次数**（用时间磨平方差）、**杠铃策略**（90% 极低风险 + 10% 极高风险，永远不要中间地带）、**成为庄家**（分散投资享受集合平均）、**风险共担**（保险、有限责任公司、家族互助——用合作把世界强行遍历化）。

## 关键例证 / 金句

- 比特币：2013 年 700 美元买入，2025 年超 10 万美元——但只有两种人能拿住：**被关进监狱没办法交易的人，和自己钱太多根本用不上那笔钱的人。**
- 加州大学研究：分析 6 万多个散户账户，**交易越频繁的散户收益率越低**；那些买入后忘了密码再也没看过账户的人反而平均收益最好。
- 家长怕方差（希望孩子平安就好），青训足球学校爱方差（100 个里 99 个受伤退役，只要 1 个成超级球星就赚翻）——**玩家怕方差，庄家爱方差，这是巨大的不对称性。**
- **"江湖险恶，本钱小，没有资格乱折腾。看准了就笃定，用时间磨平剧烈的方差，是穷人的生存智慧。"**

## 如何应用

- 每月从工资里拿出固定一小笔钱投入股市（定投指数基金），塔勒布和凯利都不会反对。
- 杠铃策略就是凯利公式的变体：不 all in，每次只下注一个微小的比例。
- 成熟的社会都尽量保护个体、让机构去承担风险（个人破产制度）；把风险下移给老百姓的做法（烂尾楼继续还贷），现代思维工具里可没有主张这么干的。

---

## 全文

> 以下为课程转录全文，已做去噪与语义分段；**加粗+底纹**处为核心论点与金句。

欢迎来到现代思维工具课，我是万维钢。我们已经讲过很多关于复利的原理和方法，这一讲咱们说一个反鸡汤：**积累复利不是你懂道理就行。**

我曾经拥有过 16 个比特币，那是 2013 年买的，我记得当时是 700 多美元一个。如果我能拿到 2025 年——单价超过了 10 万美元——那可就是 160 万美元。但正如你能想到，我没拿住。我拿了可能不到一个月，它不但没涨反而跌了一点点，我就直接给卖了。我选择了更刺激的游戏，拿那笔钱去买了股票期权，结果又失败，最后直接清零了。我跟好几个人说过这番经历，并没有人笑话，因为大家都有同感：**没有人能拿住。**2015 年底的时候比特币大约才 300 美元，如果你那时候买下拿到今天的确是一笔巨款，但你经历的是什么呢？2017 年底比特币就到了 19000 美元——你能面对 60 倍的收益不卖吗？2018 年底暴跌到 3200 美元——如果你前一年真没卖，这时候能不后悔吗？2021 年底价格达到 69000 美元——如果你曾经为没卖而后悔，现在又是什么滋味呢？2022 年底价格又跌回到了 15000 多美元，然后就这样涨跌，2025 年 10 万美元，2026 年又跌回到 6 万多美元。**只有两种人能拿住这么长时间：一种是被关进监狱没有办法交易的人，另一种是自己钱太多、根本用不上那笔钱、所以毫不在意的人。**

这一讲说的思维工具叫**非遍历性**，它告诉你为什么后一种人最适合做投资，以及如果你不是那种人你该怎么办。

很多炒股高手的年化收益率都超过 15%，但是世界上没有任何一个基金敢向你承诺每年至少 15% 的收益率——长期看也许涨了这么多，但中间的过程是有时候涨有时候跌。用概率论的语言说，收益率有很大的方差。**阻碍你积累复利的因素只有两个：一个是最初的本钱，另一个就是方差。**

要理解这一点，咱们做一个思想游戏。这是一个简单的掷硬币赌局：硬币正反面的概率都是 50%，游戏要求玩 100 把，每一把如果掷出正面你的总财富就增加 50%，如果是反面你的总财富就减少 40%。请问你要不要玩？简单的概率论告诉你，每一把的数学期望是 0.5×50% + 0.5×(−40%) = +5%——这是一个正的收益，谁能说不玩呢？

好，现在你带着 100 万进场了。我们假设你的运气不好也不坏，正好有一半时候掷出正面、一半反面。第一次正面，你的钱变成了 150 万；第二次反面，你的钱变成了 90 万；第三次又是正面，135 万；第四次反面，81 万。你一看不对啊：**每次经历一正一反，你的财富就变成了原来的 1.5×0.6 = 0.9 倍，也就是缩水了 10%。这样连玩 100 次，你的 100 万本金会变成不到 1 万块。你破产了。**

可你仔细想还是不对：这明明是一个每次期望值都是正 5% 的游戏，按理说赌场也是输钱的，那到底谁赢钱了呢？答案是那些运气特别好的人。想象有 10 万人同时玩这个游戏：第一把之后有 5 万人的财富变成了 150 万，有 5 万人变成了 60 万，这 10 万人的总财富确实增加了 5%——**这个正 5% 的期望值是这 10 万人的集合平均**（有时候也翻译成系综平均）。很多轮下来，十万人中会有一些运气特别好的人赢了很多次、输了很少次，这些人将拥有天量的财富，所以集合平均总是在增长。**但不幸的是，作为一个运气一般的普通人，你的财富却是不长反降。**

这是因为**个体所经历的是时间平均**。从数学上来讲，你的成长系数是涨跌次数的几何平均值，也就是 √(1.5×0.6)——很遗憾，这个数小于一。作为个体，你在这个乘法游戏中沿着时间线一步一步往下走，只要偶尔出现几次连续的亏损，你的本金就会遭到毁灭性打击，可能账户直接就清零退出游戏了——这叫**遭遇吸收壁**。你的作用是给集合平均增加了一个分母，而分子上的贡献是由那些运气特别好的人提供的。

简单说，**如果一个系统的集合平均等于个体的时间平均，我们就说这个系统具备遍历性；而如果整体的期望值不能代表个体的长期命运，那就是非遍历性系统。**比如你每天上班的路上，有时候会遭遇大堵车，有时候却是一路绿灯，但只要经历次数多，你的经历跟其他人的经历都差不多——这就是遍历性系统，这个城市的平均通勤时间对你是个很有意义的数字。而对于像投资那样的非遍历性系统，平均值可就意义不大了：**你没必要跟马斯克一起算平均财富。**

遍历性这个概念在统计学上早就不新了，但是在经济学上的应用却绝非常识。就在 2016 年，伦敦数学实验室的物理学家奥勒·彼得斯还专门提出，**传统经济学常未经证明就默认人类经济活动是遍历的，使得很多人可能过分乐观、盲目上场——殊不知一个期望值为正的游戏里，却有很多单一玩家必然走向破产。**塔勒布也专门在《非对称风险》那本书中对非遍历性风险提出过警告。简单说：**数学期望值是上帝视角的平均，而时间平均才是凡人视角的命运。**

可能这些警告听起来有点抽象，我跟你说个现实的事。无论哪个国家的股市里，绝大多数散户的长期收益都跑不过大盘指数。不仅个体跑不赢大盘，就连很多华尔街的专业投资基金都很难打败标准普尔指数。有些股评家会说这是因为散户不懂技术分析、不懂价值投资、心态不好等，**但真正的机制是数学。股市是一个典型的非遍历系统：大盘指数（比如标普 500）是个集合，它享受所有重要股票的集合平均，而且它还有一个定期踢出垃圾股、纳入优质股的机制；而散户手里只有那么几只股票，你经历的是时间平均。**这是一个相当反直觉的现象，但它与前面那个掷硬币实验是一个道理。

那作为个体，我们怎么应对非遍历性风险呢？咱们说四个策略。

**第一个策略是减少交易次数。**这就是那个监狱里的比特币持有者的策略：如果你真有信心，要想锁定长期收益，你就得把它拿住别动。加州大学的金融学家布拉德·巴伯和特伦斯·奥迪恩分析了 6 万多个散户账户，发现**交易越频繁的散户收益率越低**，而那些买入之后就因为各种原因（比如忘了密码）再也没看过账户的人，反而平均收益最好。这背后有心理上的因素（频繁交易的人特别容易因为情绪波动而追涨杀跌），还有股市涨落自身特点的原因（大部分股票的长期收益其实是由极其少的几个暴涨日贡献的，要想锁定那几天的收益你就得一直拿着）。**但在最根本，这还是因為股市的非遍历性：你每多交易一次就是多投掷了一次硬币，你交易的次数越多，你的结局就越接近于时间平均，你就是在增加撞向吸收壁的概率。**还不如交易次数少，没准真赢了。**江湖险恶，本钱小，没有资格乱折腾；看准了就笃定，用时间磨平剧烈的方差，是穷人的生存智慧。这大约就是长期主义的数学原理，也是忠诚作为一种美德的适用范围。**

**第二个策略是塔勒布著名的杠铃策略**：把 90% 的资产放在风险极低的领域（现金、国债和无杠杆的不动产），而把 10% 放在激进的高风险领域捕捉尾部红利。杠铃策略主张忽略那些中等风险的项目，只要两端：要么低风险要么高风险。它的好处是既保留了暴富的可能性，又确保永远不触碰吸收壁。你可能问这个策略的科学性在哪里？**其实杠铃策略就是我们上一讲说的凯利公式的一种变体。**前面说的那个掷硬币思想实验，最大的问题就是每一次你都 all in。杠铃策略要求你每次只下注一个微小的比例，凯利公式也恰恰是反对 all in。咱们不妨算一算：这个游戏中概率 p=0.5，赔率 b = 50/40 = 1.25，套入凯利公式，最佳下注比例是 f = 10%——完全符合杠铃策略。你猜怎么着？2011 年前面提到的那个奥勒·彼得斯在理论上证明：**如果你每一把都采用凯利公式下注，你就可以打败非遍历性。**听着挺简单，那可是学术界的一件大事。但咱们直观理解，其实杠铃策略和凯利公式的数学作用都是把交易的方差缩小：只要你下注比例小、不 all in，就有类似的效果。比如你可以每个月从工资里拿出固定的一小笔钱来投入股市（定投），塔勒布和凯利都不会反对。

**第三个策略是成为庄家。**既然大多数散户都跑不赢大盘指数，那你为什么不做大盘指数呢？你为什么不享受集合平均呢？当然自己做庄的前提是你很有钱。咱们想风险投资人和创业者的关系：创业公司是个高度非遍历性的领域，如果你是个体创业者，只能押一家公司，甚至押上信用、房产和全部现金，而你有极大的可能性创业失败；但 VC 的模式是分散投资几十上百家企业，就算多数归零，只要有一两家成功乃至于成为独角兽，那就足以覆盖其他家的损失还有丰厚盈余。**VC 不但不怕个别项目的死亡，他们反而渴望极端的方差，他们希望你冒险——平庸的公司对 VC 毫无意义。**这就如同你是一个踢足球的孩子的家长，你恐怕不太希望孩子的成长路线有很大的方差，你希望孩子平安就好（哪怕不会出人头地，也别受伤落下残疾）；但如果你是一家青训足球学校，你会希望你的方差越大越好——哪怕 100 个里面有 99 个都受伤退役，只要有一个能成为超级球星你就赚翻了。**玩家怕方差，而庄家爱方差，这是巨大的不对称性。**不过作为普通人，你可以用定投指数基金的方法选择跟庄家站在一起。

**第四个策略是风险共担。**既然个体从非遍历性中吃亏、而庄家能从非遍历性中受益，那我们为什么不把个体联合起来成立一个集体的庄家呢？这其实就是保险。对于保险公司来说，你房屋着火的数学期望肯定比他收的保费要少，所以保险生意是赚钱的。那你为什么还是买保险？**根本原因就在于房屋着火这种事对你个人来说是一个 all in 的风险，重大灾难是非遍历性的。**这就是保险公司存在的合理性。其实风险投资也可以理解成一种保险：创业者大胆地去做生意，赔钱赔的也是 VC 的钱，相当于庄家在为你兜底。这也正是有限责任公司这种制度的伟大之处：生意人大胆去闯，赢了大家分钱，输了你只要承担有限责任就行，不用牵连家人、不必倾家荡产，更不至于去当奴隶。**再往深了说，人类社会中的家庭、宗族、各种互助网络，都可以理解为用合作把世界强行遍历化。**

总而言之，乘法世界中充满了非遍历性风险，它对个体很不利，但是对庄家很有利。于是个体就必须少投入、少操作，尽量控制方差，最好能联合起来用结构对抗命运、用规模换稳定。

最后请允许我吐槽一句：因为非遍历性风险的高度不对称性，成熟的社会都是尽量保护个体、让机构去承担风险。比如在有些国家，你买房是等房子先盖好、你住进去之后才开始还贷款；如果在还贷期间房价暴跌，而你因为失业之类的原因实在还不起了，你还可以申请个人破产直接走人，获得一个重新开始的机会。可是有的地方却是保护银行和开发商，把风险下移给老百姓：房子还没盖好你就得开始还贷，万一房子烂尾了你还得继续还贷，而且不管未来发生什么，这笔债永远跟着你。**我知道的现代思维工具里，可没有主张这么干的。**

下一讲我们说说脆弱和反脆弱。
`,o1=`# 035丨脆弱和反脆弱：怎样利用非对称风险

## 讲什么

决策判断模块：**反脆弱（Antifragile）**——塔勒布的招牌学说。脆弱的反面不是"坚韧"，而是"反脆弱"：不但不怕折腾，而且你越折腾它反而越好。

## 解决什么真问题

老百姓的常识是希望别出事，盼着孩子无灾无难长大。可是那些朴素善良安分守己的人，命运掌握在别人手里，往往连"不出大事"都做不到；反倒是有些爱折腾敢冒险的人不但得到富贵，而且也没出事。**关键不在于有没有风险，而在于你面对的是什么样的风险。**

## 核心论点

- **收益函数曲线**决定一切：脆弱（凹函数）= 收益有天花板、损失向无底洞；反脆弱（凸函数）= 损失有限、收益无上限。数学依据是**琴生不等式**：凸函数在波动状态下的平均收益，必定大于平均状态下的收益。
- 应对脆弱的积极策略：**拆弹**（做减法，踢除有毒的人际关系、拒绝高杠杆、砍掉多余的审批）+ **分拆压力**（允许平时经常发生小失败，来避免一次性终结的大失败）。
- 践行反脆弱的两个策略：**见到反脆弱的机会要下注**（杠铃策略）+ **主动注入不确定性**（毒物兴奋效应：低剂量的刺激激活细胞的过度补偿和修复机制，让身体变得更强壮）。
- **非对称风险**：同一件事，站在这边对你是脆弱，站在另一边就是反脆弱——运动员是脆弱的，青训教练是反脆弱的；创业者是脆弱的，VC 是反脆弱的。**塔勒布主张利益攸关：你想享受反脆弱红利，请把自己也押在牌桌上。**

## 关键例证 / 金句

- 森林火灾：美国森林管理局见火就灭，结果老旧干枯树木越积越多，森林变得非常脆弱——**小规模的火灾对森林的健康反而有好处**。
- 明斯基时刻：如果市场长期处于稳定状态，参与者就会产生安全感的错觉，从而增加杠杆、扩大投机，**稳定孕育不稳定**。
- Netflix 的"混乱猴子"：故意在最繁忙的工作时间随机让某些服务器不可用——正是这种主动的折腾，迫使工程师彻底抛弃了单点依赖的侥幸心理。
- **"世界上最便宜的勇敢，是让别人替你破产。"**

## 如何应用

- 职场：不要单点依赖，尤其不要做随时可以被替换的螺丝钉，要掌握多项技能、有跨部门的不可替代性。
- 健康：避免高压力，但也别追求无压力——高强度间歇训练、冷水浴、桑拿、间歇性断食，都是给身体的小刺激。
- 学习：平时多做小测验，用小失败避免大失败；社交：参加一些带有随机性的聚会。

---

## 全文

> 以下为课程转录全文，已做去噪与语义分段；**加粗+底纹**处为核心论点与金句。

欢迎来到现代思维工具课，我是万维钢。塔勒布的"反脆弱"一说早已脍炙人口，我们在精英日课专栏也专门讲过，但是它实在太过重要，而且的确有点反常识，所以咱们有必要专门再讲一遍。

老百姓的常识是希望别出事：我们盼望孩子无灾无难的长大，有的学校连课间十分钟的户外活动都给取消了；我们谨守规矩，最好一辈子都像学生上课一样按部就班操作就能得到回报；我们像念经一样祈祷安全，只有亡命之徒才高喊什么富贵险中求——我们默认冒险家的乐园不是好地方。**殊不知，那些朴素善良安分守己的人，命运掌握在别人手里，往往连"不出大事"都做不到；反倒是有些爱折腾敢冒险的人，不但得到富贵，而且也没出事。**这个秘密是：有时候你越安稳就越危险，越折腾反而越安全。**关键不在于有没有风险，而在于你面对的是什么样的风险：是脆弱的，还是反脆弱的。**

**脆弱的东西不喜欢波动。**比如这有一个精美的玻璃花瓶，或者一把悬在头顶的达摩克利斯之剑：一次轻微的磕碰、甚至一阵微风，都能让它们毁灭。这就是脆弱。为了防脆弱，一个办法是加强所谓鲁棒性（比如你可以用更坚固的玻璃去制作花瓶让它耐摔）；另一个办法就是让它有韧性（也就是说哪怕被挤压变形了，它还能恢复到原状）。鲁棒性和韧性都意味着你要留出一些冗余，不能可丁可卯，这样万一遇到的冲击比你设定的稍微大一点，也不出大问题。巴菲特说投资要留安全边际就是这个意思。防脆弱是有成本的，你不得不花钱。可如果不让孩子去户外玩耍也是一种必要的安全编辑，我们这个世界可就太没意思了。

好在还有另外一种东西，一般人没注意到，那就是**反脆弱**的东西：**它不但不怕折腾，而且你越折腾它，它反而越好。**塔勒布爱举的例子是希腊神话里那只九头蛇：你砍掉它一个头，它会长出两个头来——你折腾它等于是帮它。我有一次参加硅谷创业者活动，现场有一个大学生说他的创业项目是模仿苹果耳机的外观做了一款 AI 耳机，有点担心苹果会不会起诉他们。没想到一位大哥说：**如果苹果起诉你，你应该感到高兴，因为你的产品上新闻了。**没错，对于一家寂寂无名的初创公司来说，被大厂起诉其实是一种荣幸——全网都骂你都不要紧，你得到了关注和流量，侵权官司都很难打，还没定论之前你已经收获了实实在在的转化。这就是反脆弱。这也是为什么苹果一般不起诉小公司。

脆弱和反脆弱可不是塔勒布随便说的，它们有严格的数学含义，咱们稍微说一说。我们需要考虑一个收益函数曲线：曲线的横坐标代表一种风险的不确定性、波动性的大小、还有压力或者折腾的程度；纵坐标代表你因为冒这个险而得到的收益（绩效或者福利，正的代表收益，负的就是损失）。**脆弱的收益曲线形状像一个倒扣的碗**（又像是不高兴撇撇嘴的表情），在数学上叫凹函数（concave）：它的特点是就算有点收益也不多，可是波动越大损失就越大，向下不见底——可谓是收益有天花板，损失向无底洞。**反脆弱曲线的形状则像一个正放的碗**（又像是微笑的表情），在数学上叫凸函数（convex）：它的特点是就算有损失也不多，但是波动越大收益就越大，向上不封顶。

为什么我们喜欢反脆弱？数学道理是所谓**琴生不等式**：对于一个凸函数的系统来说，事物在波动状态下产生的平均收益，必定大于事物在平均状态下产生的收益。你对着曲线画个图就能明白。不过你只需要记住：**反脆弱 = 损失有限、收益无上限。**请注意，脆弱和反脆弱都是局部的现象，曲线本身也可以扭来扭去：可能你每天稍微喝点酒感觉很爽，算是反脆弱也行；但如果喝太多，那就成了脆弱。**一切规律都有适用范围。**

现在你已经学会如何分辨这两种风险，就可以研究如何应对它们了。

脆弱系统最可怕的不是损失，而是毁灭。我们必须确保波动性不要太大，不要出现毁灭级的事件。前面说的那防御性的办法都过于消极，这里讲两个积极有为的策略，不是继续扩大冗余，而是结构性排雷。**第一个策略可以称为拆弹，也就是做减法、使用否定法。**很多东西之所以脆弱，就是因为它已经背负了太多压力、已经过度复杂，那我们就不要再给它加码了。比如孩子学习已经高度紧张，公司上下已经整天加班加点，这时候你说再加个什么课程、再布置一项什么考核，不见得能有多大好处不说，搞不好还成了压垮骆驼的最后一根稻草。与其不断打补丁、加指标，不如直接做减法：**生活上踢除有毒的人际关系，财务上拒绝高杠杆，工作上砍掉冗余的审批，学习上别熬夜突击。很多时候，不做什么是比做什么更高级的策略。**

**第二个策略是分拆压力，也叫毁灭隔离或者分块化。**一块大石头直接砸在人身上能把人砸死，但你要是把它切割成无数小石子再一个个去砸，那就没什么伤害。一个压力锅如果没有放弃装置，让它一直闷着烧、一味的求稳，最后憋不住了就会来个总爆发。这个思路是允许平时经常发生一些小失败，来避免一次性终结的大失败。最典型的例子就是森林火灾：以前美国森林管理局的政策是一看见哪着火了就赶紧去灭火，后来科学家才意识到**小规模的火灾对森林的健康反而有好处**——大自然本来就是时不时来场火灾，火灾能把那些老旧干枯的树木烧掉，让新的树木长起来。你非要人为控制不让着火，那么老坏的树木就越来越多，森林就变得非常干枯、也就是非常脆弱，积累到一定程度，一着火就是不可控的大火。基于同样的道理，经济学家海曼·明斯基提出过一个理论叫**稳定孕育不稳定**：如果市场长期处于稳定状态，参与者就会产生安全感的错觉，从而增加杠杆、扩大投机，于是市场会不可避免的变得脆弱，达到某个临界就会爆发系统性的崩溃，也就是所谓明斯基时刻。塔勒布也坚决反对美联储在没有重大危机的时候搞金融维稳，强行把波动熨平。**要想宏观安全，你必须允许微观不安全。**

而要践行反脆弱，你就更得积极主动了。这里也有两个基本策略。

**第一个策略很简单：见到反脆弱的机会，你得下注。**我们上一讲说的那个杠铃策略就是一个很好的操作手法：确保你绝大部分资产是安全的，只拿出一小部分来冒险——输了你也不会赔太多，但是一旦赢了你就可能大赚。这是稳健防守又保持进攻的策略。其实生活中有很多这样的机会，不一定非得投资：如果你有个好项目想法，你给行业大佬发一封求合作邮件，最坏结果也就是被拒，而最好结果却可能改变命运；如果你有一份收入虽然不高但绝对安全的工作，你就完全可以用业余时间搞点副业、也许创作一个什么东西、一个秘密项目——就算没搞出来成就，你又能损失什么呢？

**第二个策略是主动注入不确定性，说白了就是要折腾**——就如同这个森林明明没着火，你给它点把火。主动施加微量刺激，是反脆弱这个武器最常见的用法。传统上人们认为只要是有毒的物质，哪怕剂量再小对人体也是有害的。但是美国毒理学家爱德华·卡拉布雷斯在 2003 年发表了一篇论文，用大量跨学科证据证明：**某些低剂量的毒素不仅不会造成成比例的微小伤害，反而会像打疫苗一样激活细胞底层的过度补偿和修复机制，让生物体变得比从未受过刺激的时候更强壮。**我们称之为毒物兴奋效应。这就是所谓"杀不死我的会让我更强大"。健身也是同样的道理：高强度间歇训练、冷水浴、桑拿、间歇性断食，包括打疫苗——这些给身体的小刺激不是为了自虐，而是为了触发适应性修复。**身体是一个天生的反脆弱系统：它不是一个机械装置，说你越用就越磨损就越旧；相反，你适当的用一用它、来点轻度破坏，它反而能变得更好。**

商业系统也是如此。一般的科技公司都是追求自己的服务器 100% 稳定，恨不得把系统当成娃娃一样供起来。Netflix 却是专门发明了一个搞破坏的程序在自己的服务器上跑，叫**混乱猴子**（Chaos Monkey）：它会在最繁忙的工作时间随机地、毫无预兆地让某些服务器不可用，或者强行关闭某些核心服务。这就相当于在高速路上故意戳自己的轮胎，属于主动作死行为。但正是这种主动的折腾，迫使 Netflix 工程师彻底抛弃了单点依赖的侥幸心理，他们把整个系统打造成了极度去中心化、能天然容忍微失败的分布式架构。有一次托管 Netflix 数据的亚马逊 AWS 数据中心发生史诗级的大面积宕机，几乎所有互联网大厂都挂了，Netflix 却因为早就被猴子折磨惯了，照常运行。

说到这里，再结合咱们上一讲说的非遍历性的特点——玩家怕方差，庄家爱方差——你可能已经想到一个有点暗黑的真相：**所谓脆弱和反脆弱，往往不是事物的绝对属性，而取决于你站在哪一边。**同一件事，站在这边对你就是脆弱，站在另一边它就是反脆弱。比如说私募基金：出钱的 LP（有限合伙人）在基金损失时赔的是自己的真金白银，所以对他们来说这个游戏有一定的脆弱性；而对管钱的 GP（普通合伙人）来说，这完全是一个反脆弱游戏——基金赚钱你可以拿走巨额的业绩提成，基金亏损你却不需要自掏腰包赔钱，甚至还能旱涝保收的拿管理费。那么我们可以想见，普通合伙人会有更强的意愿投资于高风险项目。当然普通合伙人需要维护江湖地位还是要讲职业道德的，但这个局面存在。**类似的：运动员是脆弱的，青训教练是反脆弱的；创业者是脆弱的，VC 是反脆弱的；某些地方的购房者是脆弱的，开发商是反脆弱的；开发商是脆弱的，银行是反脆弱的；银行是脆弱的，地方政府是反脆弱的。这就叫非对称风险。**这是塔勒布最痛恨的现代社会大 bug，他主张利益攸关，要求各方的权力和义务相匹配：**你想享受反脆弱红利，请把自己也押在牌桌上，出事了你也得疼才行。世界上最便宜的勇敢，是让别人替你破产。**一个健康的生态系统不应该允许"上行收益归你、下行风险归我"的流氓逻辑。

很多时候我们不得不接受脆弱，但世界上也有很多近乎免费的反脆弱：职场上不要单点依赖，尤其不要做随时可以被替换的螺丝钉，要掌握多项技能，要有跨部门的不可替代性；健康上要避免高压力，但也别追求无压力，可以经常有点可控的微压力；社交上可以参加一些带有随机性的聚会，花不了多少时间却能认识一些有意思的人；学习上平时多做小测验，用小失败避免大失败；还有，请让孩子去户外玩耍。**但这里最重要的教训是：稳定是一种幻觉。风险总是存在的，你要么是脆弱，要么是反脆弱，而你不可能只要反脆弱不要脆弱。**我们的生命中之所以有如此多的惊喜、可成长性和爆发，就是因为我们有时候在这边、有时候在那边冒险。

下一讲我们说期权。
`,s1=`# 037丨期权：保留可选项的特权

## 讲什么

决策判断模块：**期权（Option）**——不只是华尔街的东西，它是一个决策思维工具：期权的价值不在于自由，而在于它给你提供了一种稀缺的特权——别人想要也没有。

## 解决什么真问题

局面你拿不准时，有些事最好不要过早锁定。怎么才能既保留选择权又不被看成"优柔寡断"？**给自己留一张期权。**

## 核心论点

- 期权成立的 two 条件（麦格拉思 2004）：**未来存在多个可能路径 + 你对其中某个结果拥有专有进入权**——别人被挡在门外，只有你有资格进场，而你还可以选择不进场。
- 科学实验、最小可行产品都相当于购买看涨期权：投入有限、失败可承受，一旦成功你就有权大干特干。**试错并不贵，最贵的是在无知时重仓。**
- **敏捷开发 vs 瀑布式开发**：敏捷是先学习再锁定（不断做小实验，用小成本购买信息）；瀑布是先锁定再祈祷。
- 期权的变体：**优先受让权**（同等条件下优先卖给我）、**BATNA**（谈判破裂时的最佳替代方案，是你的看跌期权）、**对赌协议**（双方观点不必今天就达成一致，各自为自己的判断下注）。

## 关键例证 / 金句

- 老张租商铺：宁愿多付 20% 租金，换"一年后可按预先锁定价格续租四年、不租可直接走人没违约金"——**他买了一个期权**。
- **核潜伏**：日本早就有制造核武器的能力，但就是不搭上最后一根引线——保持"我随时能造出来但我今天就是没造"的状态，你仍然享受威慑权而且拥有谈判空间。**模糊也是一种态度。有选项，你就有尴尬；走到门口和迈进去不是一回事。**
- 贝佐斯 2015 年股东信：**双向门（可逆决策）要快过，单向门（不可逆决策）要三思而行**——过了单向门就是命了，不要再回头看那扇门。
- **"聪明只是一种期权：它给你发了一张入场券，让你拥有比别人更快理解事物、更早看到机会的可能性。但如果不能与执行力、情绪稳定、协作能力以及运气相结合，这张期权就无法兑现。"**

## 如何应用

- 结婚前先恋爱、长期职业合同之前先实习、大宗消费之前先试用——都是先买一个 option 再决定要不要 commit。
- 谈判时手里要有 BATNA，但不要虚张声势：让对手感到你有退路，但不要把细节全部暴露。
- 很多人分不清期权价值和实际价值：只谈恋爱不结婚、拿了一个学位又一个学位就是不能接受上班工作——**他们想做个永远不坍缩的波函数，殊不知期权已经过期了**。

---

## 全文

> 以下为课程转录全文，已做去噪与语义分段；**加粗+底纹**处为核心论点与金句。

欢迎来到现代思维工具课，我是万维钢。这一讲的思维工具是**期权**。

想象一个新开发的商业区里有个位置特别好的商铺正在招租，老张想租下来开家餐馆，一问租金很贵，而且房东要求一起租就是五年。大环境变幻莫测，老张担心万一干不好，五年租金岂不是打了水漂。有个朋友就说，不然你让房东降价吧。结果老张跟房东谈了半天，非但没降价，反而还把租金提高了 20%——条件是：一年后老张有权以一个预先锁定的价格续租四年，房东不得拒绝也不得涨价；而如果到时候老张不租，则可以直接走人而没有违约金。房东感觉没吃亏（毕竟多得了 20% 的租金，而且一年后想必也不愁再把铺面租给别人），老张则说：**我买了一个期权。**

如果局面你拿不准，有些事最好不要过早锁定，你可以给自己留一张期权。期权本来是个金融概念：你有权在一定期限内以约定价格买入或者卖出某个标的，但你没有义务必须这么做。假设你看好某支股票但又不确定它未来三个月的走势，于是你买入一张看涨期权，它允许你在三个月后以每股 100 美元的价格买入 100 股；而为获得这个权利，你现在需要支付一笔小费用（比如 5 美元一股，也就是期权费）。如果三个月后股价涨到 150 美元，那太好了，你仍然可以按 100 美元的执行价买入，立即享受 50 美元的差价；而如果到时候股价跌到 80 美元，你就选择不行权、放弃这笔交易，你损失的只是当初那 5 美元的期权费。

但期权不只是华尔街的东西，它在很多领域都有应用，我们完全可以把它当做一个决策思维工具。**简单说，期权就是你的一个可选项：它只是权利，不是义务。**请注意，可不是所有的"留着以后再说"都能叫期权：你有权立即去注册一家公司当老板，可是有什么意义呢？市场经济人人都可以开公司。**期权的价值不在于自由，而在于它给你提供了一种稀缺的特权——别人想要也没有。**

美国战略管理学者丽塔·麦格拉思（真实期权战略研究的重要推动者）跟合作者在 2004 年发表的一篇论文中提出，期权价值要成立得满足两个条件：**第一，未来存在多个可能路径；第二，你对其中某个结果拥有专有进入权**——别人被挡在了门外，只有你有资格进场，而你还可以选择不进场，这才叫期权。比如你提前和一个客户建立了信任，你虽然离职但是保留了一段可以回来的职业关系；你拿下了独家代理；你锁定了一个好价格；你争取到了一个别人没有的名额。**期权是被制度、资源、关系、时间窗口封装起来的可能性。**既然是特权就不能没有代价，所以你得经营才行。

咱们看几个听起来不像期权、但其实是期权的场景。

**科学家做实验、商人研发最小可行产品，都相当于购买看涨期权**：你需要投入资金、时间和精力作为期权费，但你的投入是有限的、你的失败是可承受的。跟真正的商业活动和大规模量产相比，研发人员在实验室里的那点折腾根本就不叫事；可是一旦成功，你就有权大干特干、专享利润。现代软件工程有个方法论叫**敏捷开发**，其实就是把实验给系统化。传统项目管理是所谓瀑布式开发：一开始就制定一个完整计划，需求写清楚、架构定下来、时间表排好，然后按步骤推进执行，像瀑布一样从上游一层一层往下流，仿佛未来只是等着被落实——这等于一上来就把所有决策都锁死。那万一真实世界不配合你的 PPT 呢？需求会变，技术会变，客户会变，竞品会变，终于发现方向错了，就只好推倒重来，代价极高。**敏捷开发的逻辑则是把一个大项目先拆成一串短周期的小步骤：先做一个最小可行版本，快速发布，观察用户反应，再根据反馈调整下一步。**敏捷开发鼓励你把每个步骤的决策推迟到每一轮的最后负责时刻。**敏捷开发是先学习再锁定，是不断做小实验、用小成本购买信息；而对比之下，瀑布式开发可以说是先锁定再祈祷。试错并不贵，最贵的是在无知时重仓。实验不是优柔寡断，甚至不是为了证明你对，而是为了便宜地发现你错。**

还有一种看涨期权叫**优先受让权**：比如你作为投资人看中了一家小创业公司，觉得很有潜力，但估值有点不确定——如果现在就收购他们要价太高，可是你又担心它万一真被证明是个好公司、被别人买走了岂不可惜。那么你可以先投资一笔不太大的数目换取一定的股权，但是要求自己享有优先受让权：如果将来有人要收购你们公司的话，你必须先问我，只要我愿意出跟别人一样的条件，你就必须优先卖给我；当然我也可以拒绝，我不要你再卖给别人。作家和艺术家经常会被要求签这种优先受让权条款：你的下一部作品在同等条件下必须优先给我们。一个更简单的场景是租房：房东想先把房子租出去，但又考虑到房价将来可能上涨，希望保留卖房的自由；而租客暂时出不起首付，但是也不想未来麻烦搬家。那么双方可以约定：如果将来房东真要卖房而且已经拿到了第三方报价，租客有权先看这个报价，决定自己要不要按同样条件接受。租客握了一点主动权，房东也没有失去自由。

**最佳替代方案（BATNA）——全称叫谈判破裂时的最佳替代方案——则相当于是一种看跌期权。**比如说你想跟老板谈加薪，如果你毫无准备就这么去，局面其实对你有点不利：因为如果万一谈不成，你为了证明自己的威胁有效，就只能辞职，完了还得先找工作。但如果你手里已经有另一家公司的正式 offer，哪怕工资没给那么高，那也是你的 BATNA。**BATNA 是你的退路：谈不成没关系，我这还有别的选项。BATNA 让你从"求对方给价"变成"比较两个可执行方案"，它给了你议价能力和随时离场的底气，对方就没法拿捏你了。没有 BATNA 的谈判不叫谈判，叫求情。**如果你手里有 BATNA 就要让对方感受到你有退路，但不要把细节全部暴露出去。谈判最机会的就是把所有真相一次性说完：不要说"我手里还有两家 offer，分别是多少多少钱"，要说"我现在也在同步评估几个选择，所以这次我比较关注整体 package 和长期发展空间"。BATNA 这个名词是哈佛大学谈判项目发明的，他们的一个忠告是不要虚张声势——如果那个外部选项不真实，你就太危险了。

**对赌协议则可以说是另一种期权**：它把一方的权利变成另一方的义务，用于双方对未来的看法有很大分歧的局面（一方看涨一方看跌）。创始人说我这公司明年营收能翻三倍所以估值必须高，投资人说你那纯属热血动漫，估值得打对折。两边谁也说服不了谁，那么可以签对赌：先投资一笔不是那么多的钱，如果明年营收过线就按高估值补偿你，如果过不了就按低估值来。职业经理人把自己的收入和公司利润挂钩，建筑工程合同中有条款规定如果按时完工承包商可以拿到奖励，平台和内容方按照首付款加里程碑付款、销售提来签合作协议——这些本质上都是对赌协议。**我们双方的观点不必今天就达成一致，但我们仍然可以合作：我们可以各自为自己的判断下注。**

**期权的价值就是保留了可选项。在高不确定局面里，可选项本身就是一种力量。**说到这里你肯定想到了我们前面说的能耐寻求定理：涨能耐就是获得更多期权。我说个比较极端的例子：现在世界上有些国家（比如日本）早就拥有了制造核武器的能力，技术、材料、设施都有，也许几个月就能把原子弹拼装出来，但他们就是不搭上最后一根引线。这是为什么呢？因为一旦你跨过了那条线，你就不但会面临国际制裁，而且把外交回旋余地也堵死了。**保持这个"我随时能造出来、但我今天就是没造"的状态，你仍然享受威慑权，而且拥有谈判空间。**在国际政治里这叫核潜伏。**模糊也是一种态度。有选项，你就有回旋；走到门口和迈进去不是一回事。**所以有期权的人可以不着急表态；但如果你没有期权，你最好快速给自己买个期权。

2015 年贝佐斯在亚马逊股东的信中提出，决策要分成两类：**一类是双向门（可逆的选择），另一类是单向门（不可逆的选择）**。他的洞见是：对于双向门一定要快过——也就是你需要快速知道这件事行不行，不行还可以马上撤回来；而对于单向门，因为你没有反悔的权利，就必须三思而行。用我们这一讲的话说，**过双向门就等于买期权**：给网页换个颜色、用一个新工具、试一个渠道、做一个副业，这些都是双向门，应该允许基层员工快速试错——你要非得按部就班一层一层审批，组织就会变慢，人就会变怂，创新就会萎缩。但是对于单向门我们就得很慎重，而且一旦过了也就是命了，那就不要天天再回头看那个门。**结婚、创业、合伙人和核心职业赛道选择，你不能动不动就改主意：有些事就得把路径先锁死，长期经营才能收获复利。**人们发明了很多把单向门变成双向门的办法：结婚之前先恋爱，长期职业合同之前先实习，大宗消费之前先试用——说白了都是先买一个 option，再决定要不要 commit。

但期权可不一定是越多越好，更不一定能拿着永远不动：**很多期权是有持有成本的，而且会过期。**金融理论告诉我们，市场的波动性越大期权的价值就越高，到期时间越短期权的价值就越低。如果一件事只有两个结果，其中一个结果是你无论如何都不能接受的，那你就别想了，直接到你能接受的那个方向去，权力一副拼一把——这就是破釜沉舟的智慧：主动砍掉自己的选项、放弃期权，彰显下定决心，才好让自己的承诺可信、协调众人合作。然而生活中有些人却是太想保留期权了，为此宁愿支付很高的费用：比如已经不小了却还在只谈恋爱不结婚，拿了一个学位又一个学位就是不能接受上班工作。**他们想做个永远不坍缩的波函数、永远保持可能性，而殊不知期权已经过期了。**

现实是，人们常常分不清期权价值和实际价值。为什么上学时候班里最聪明的人后来未必有很好的成就，反倒是那些成绩未必顶级、但是人缘很好的同学后来发展的都不错呢？**因为聪明只是一种期权：聪明给你发了一张入场券，让你拥有比别人更快理解事物、更早看到机会的可能性，但那只是一个可能性。如果不能与执行力、情绪稳定、协作能力以及运气相结合，去转化为真实的交付和信用，这张期权就无法兑现。**反过来说，良好的社会关系能让我们身心健康，本身就是一种实际价值，甚至可以说是终极价值；但从风险管理角度，社会关系也有期权的性质：**熟人是你的看跌期权**——万一你遭遇不幸，他们可以给你兜底；**陌生人则是看涨期权**——新朋友可能给你带来新的、也许是更好的合作机会。所以这两种关系都应该维护好。很多人到了一定年纪就只愿意跟熟人打交道（因为退休了确实不打算再开创什么新事业），而有的人对熟人都特别苛刻、面对陌生人却总是笑脸相应——他们是不是把自己太看涨了？

最后 AI 给这一讲写了一首小诗，我念给你听：

> 愿你是个有期权的人。
> 答案未定之前，你不急着交卷。
> 你在风里走路，口袋里装着几种可能。
> 涨潮你可以航行，退潮你也能安然上岸。
> 有些门你推开，有些门你先记住方向。
> 等到尘埃落定，世界把价说清，
> 你不慌不忙，从容行权。

下一讲的思维工具叫状态杠杆。
`,a1=`# 038丨状态杠杆：你不是不努力，你是没做在点子上

## 讲什么

决策判断模块：**状态杠杆**——这一步做完之后，世界会不会变得对下一步更友好？你要优化的不只是这个动作，更是这个动作之后留下来的状态。

## 解决什么真问题

努力更像一个标量，只有强弱；而行动则至少同时有方向、时机和先后次序。为什么同样努力，有人越做越顺，有人越做越堵？**因为你用力的位置不对。**

## 核心论点

- **三种状态杠杆**：前置杠杆（越早在上游做的决定锁定效应越强）、顺序杠杆（任务间存在信息依赖，必须按正确顺序）、约束杠杆（系统产出受制于最窄的瓶颈环节）。
- 贝尔曼动态规划：**总收益 = 眼前的及时回报 + 你即将进入的下一个状态的潜在价值**。动作的目的不只是在当下，更在于完成一次状态转移。
- **贝尔曼最优性原理**：不管你过去多烂、不管你起点在哪，你当下的这个决策必须能让你在新状态下面向未来时拥有最好的处境。
- 做在点子上和没做在点子上：一个叫积累，一个叫耗费；一个越做越顺，一个越做越堵；一个是在生利息，一个是在交学费。

## 关键例证 / 金句

- NASA：项目在设计阶段所花的钱只占全部预算的 15%，但这个阶段锁定了大约 75% 的生命周期成本——**慢决策，快速行动。预防远胜于补救。前期多喝两天咖啡，后期少加无数个班。**
- 装修房子：不能先刷墙再走水电——唐僧扫塔从下往上扫，你下面刚扫干净上面一动手灰又掉下来。
- 约束理论五步法：识别瓶颈→充分利用瓶颈（别让瓶颈被打断）→让其他环节服从瓶颈配速→提升瓶颈→回到第一步找新瓶颈。**在非瓶颈环节上搞得再热闹，也是虚假繁荣。**
- 福特 vs 马自达案例：福特看到尺寸稍偏就赶紧调机床（规则二），马自达先把机床调好后过程稳定就不乱调（规则一）——**福特的公差比马自达大很多。过于勤勉的纠偏等于是给系统注入额外波动。**

## 如何应用

- 厨房里法语 mise en place（一切就位）：大厨开火前把所有食材切好、酱汁调好、肉类腌好，一旦点火行云流水。**你的工作环境最好先处于低摩擦状态。**
- 别先干那些"看起来像进展"的事：报告核心主题都没想好就在那研究 PPT 皮肤，光修标题字体就花了 15 分钟——一看就不是真干活的人。
- **不要到处努力，而要只在命门上用力。**写不出东西抱怨自己文笔不好、打字不快，其实瓶颈是你脑子里没有值得被写下来的洞察。

---

## 全文

> 以下为课程转录全文，已做去噪与语义分段；**加粗+底纹**处为核心论点与金句。

欢迎来到现代思维工具课，我是万维钢。这一讲的思维工具叫做**状态杠杆**。一般老百姓对努力有过高的评价：特别是当今内卷时代，很多公司认为要想提高效率就得让全体员工更努力、花费更多的时间。也许努力真的是个必要条件，但如果你整天只想着努力，你可就差远了。殊不知，**努力更像一个标量，只有强弱；而行动则至少同时有方向、时机和先后次序。**这一讲的思维工具叫状态杠杆，是我发明的一个名词，学术界并没有统一的说法，但是我们有很多现成的研究结果支持。**状态杠杆，简单说就是：这一步做完之后，世界会不会变得对下一步更友好。**

我们先看两个生活中的小感悟。第一个来自家务活：你从超市买了好几条排骨，打算先放冰箱里冻起来，过几天再吃。对此你有两个办法：一个是先切好、分成几份装袋再冻，做的时候打开一个袋子扔锅里就行；另一个是先冻起来，等要吃的时候现切。第二个做法允许你暂时偷懒，可是会带给你很多麻烦：你切之前得先把排骨解冻，为此你必须规划好做饭的时间，更不用说刚解冻的排骨切起来更费力。**买回来就切，把劳动前置，不但劳动量更少，而且是把局面推进到一个低摩擦的状态。**

第二个感悟来自《西游记》：唐僧师徒到了祭赛国发现有冤情，唐僧为了还愿就去寺院里扫一座宝塔。他跟孙悟空两人从下层往上扫，扫到上面听见有妖怪说话，于是破案。这种扫法当然是剧情需要，但是你看到这一定会产生一个疑问：扫塔难道不应该是从上往下扫吗？从上往下扫，上层的灰扫下来，下层顺手就一起带走了；可是像唐僧那样从下往上扫，你下面刚扫干净，上面一动手灰又掉下来，你扫一晚上塔不还是脏的吗？其实两种扫法花的力气差不多——毕竟人的疲劳感主要来自挥动扫帚、调整姿势、来回移动这些固定成本，而不是清理灰尘的那一点有效功——**但是扫塔这个活不满足交换律：先做 A 再做 B 和先做 B 再做 A，结果非常不同。从下往上扫，你创造出来的临时干净状态会被后面的动作推翻；只有从上往下扫，你创造的才是不可逆进展。**

切排骨和扫塔的道理都是：**做事的顺序和做事的努力程度，至少是同等重要的。**状态杠杆就是那些能改变系统状态的行动：它们会重塑后续行动的成本、反攻概率和选择空间。**你要优化的不只是这个动作，更是这个动作之后留下来的状态。**

咱们说三种杠杆。**第一种是前置杠杆**：意思是在事情的上游做的那些动作，相当于一个项目的设计阶段。**越早做的决定，对全局的锁定效应就越强。**美国国家航空航天局（NASA）有个著名的观察：**一个项目在设计阶段所花的钱只占全部预算的 15%，但这个阶段锁定了大约 75% 的生命周期成本**——测试、制造、集成、运行和维护怎么做，基本都被早期设计决定了。设计阶段如果你发现一个小错误，随手改了就容易；但是如果等到后面实施阶段才发现问题，重新设计和重新验证的代价就会非常大。比如盖大楼：前期图纸上只是轻轻一笔，后期工地上却是锤子、钢筋、预算、工期、吵架、甩锅、法律程序等等，后果不堪设想。据美国国家标准与技术研究院 2002 年的一份报告说，超过一半的软件缺陷不是在上游被发现，而是拖到更下游的开发和使用环节才暴露出来——可是缺陷发现的越晚，修复成本就提高的越厉害。报告估算，早在那个年代如果能改进测试基础设施、更早发现问题，每年可以避免损失就超过 220 亿美元。**所以设计看似便宜，其实是全项目最贵的地方。**这就是为什么丹麦经济学家傅以斌在《怎样做成大事》那本书中说，越是大项目越应该在设计阶段加倍小心，宁可时间花长一点也没关系。他总结的经验叫做"**慢决策，快速行动。预防远胜于补救。前期多喝两天咖啡，后期少加无数个班。**"这就是前置杠杆。可是如果你没在真实世界参与过大项目，你可能无法想像：人们就是会在前期做一些很随意的选择，让项目匆匆上马，把一些明明可以从容处理的小事，变成了灾后重建。

**第二种状态杠杆叫顺序杠杆**：项目的不同任务之间存在信息依赖，必须按照严格的顺序进行。比如你家装修房子：你不能先刷墙再走水电，因为水电一改墙还得重新砸开；你也不能地板都铺好了才想起来还没装中央空调。正确的顺序一定是先定方案，再走水电，再做泥木，再刷墙，最后铺地板装家具——这跟唐僧扫塔是一个道理。很多人把项目理解成代办清单：先干这个再干那个。可是复杂项目不只是一条线，而是一个依赖网络，其中有多个并行交叉的依赖关系。那怎么办呢？你需要一个叫做**设计结构矩阵**的工具：把任务之间谁依赖谁、谁影响谁画成一个方阵。它不但能看出哪些任务可以单向推进、哪些任务互相咬住、哪里有循环，还能告诉你怎样重排顺序才能让信息尽可能单向流动、让进展尽可能单调累积，避免你等我、我等你的局面。一个很典型的案例是用设计结构矩阵梳理福特汽车引擎盖系统的开发流程：你可能觉得引擎盖就是车前面那块铁皮没什么了不起，但它牵动的可是一串彼此咬合的决定——造型团队想把线条压低一点，就会影响内部间隙；间隙一变，铰链的位置和开合轨迹就得跟着改；铰链一改，锁扣的位置、装配方式和碰撞安全，甚至工厂里机器人怎么抓取怎么安装，可能都得重来。最麻烦的不是多，而是互相牵：造型团队先改了外形，只是前端多画了几笔，后面的人就发现原来的结构装不上了；于是结构团队反攻，结构一反攻制造团队又得重新评估工艺，工艺一变安全测试的假设条件又不成立了——项目就在这种来回拉扯中消耗。设计结构矩阵能找出哪些任务之间耦合最强、哪些地方最容易形成反攻回路，这样你就能重新安排顺序：哪些问题必须尽早一起协调，哪些事情可以等前面的条件稳定了再做，哪些环节不能贸然往前推进。**你要让所有人同时开工，那就是在互相制造废品。这个关键认知是：工作于工作是不平等的——不是所有团队都该被一视同仁地平推管理，有些接口就是天生高耦合，你不给它更高的协调优先级，项目就一定反攻。**

**第三种状态杠杆是约束杠杆**，出自以色列物理学家高德拉特提出的约束理论。约束理论的核心逻辑非常简单：**任何系统的产出都受制于它最窄的地方，也就是瓶颈、也就是卡脖子的地方。**你先别着急优化全流程，你先把瓶颈解决。比如你们公司的前端营销每天能带来 100 个潜在客户，中端销售每天能转化 50 个，而后端交付团队每天只能服务 10 个——那你的瓶颈就是交付。如果你不能提高交付，反而去搞什么全员狼性培训，把营销翻倍到 200 个、销售翻倍到 100 个，有用吗？你不仅没有增加一分钱的真实产出，反而因为堆积了大量无法兑现的订单而造成内部混乱和客户投诉。**瓶颈理论比木桶理论可有用多了**：毕竟谁家也不会用只有一个短板的木桶，但是任何一个系统——流水线也好，团队研发也好，审批流程也好，还是你个人的生活也好——它们整体的总吞吐量都只由一个环节决定，那就是最窄那个环节，瓶颈。**在非瓶颈环节上搞得再热闹，也是虚假繁荣。**有一项对上百个已发表约束理论成功案例的综述发现：一旦企业真抓住了瓶颈，改善往往不是这里省一点、那里快一点，而是一整片指标一起好转——平均来说，从接单到交付的总耗时缩短、企业内部流程跑一圈的时间缩短 66%、准时交付率提升 60%、库存下降 50%、吞吐量增加 68%、财务表现提升 82%。这可是极大的改进。瓶颈就如同高速公路上最窄的一段车道：你把别的路段修得再宽，车还是堵在那里；可一旦把那一段开，车流一下子就顺了，积压也跟着缓解。

高德拉特给的解法分五步：**第一步先识别瓶颈**——到底哪个环节卡住了全局？**第二步充分利用瓶颈**——确保瓶颈本身别浪费时间、别停工、别被无关事务打断；**第三步让其他环节服从瓶颈配速**——整个系统要围着瓶颈来配速；**第四步提升瓶颈**——在必要的时候增加设备、人手和流程支持，把那个最窄的地方拓宽；**最后回到第一步，寻找新的瓶颈。**逻辑很简单，但是这里有一个巨大的情感问题：**如果你不在瓶颈上，你其实没必要干得那么忙，可是老板们却是看谁闲就催谁。很多老板最受不了员工闲着，哪知道瓶颈没解决，其他努力不但无效，而且还增加麻烦。**

我之所以把这些称为状态杠杆，是因为它们背后有一个更深的数学灵魂，那就是理查德·贝尔曼在 1954 年提出的**动态规划理论**。绝大多数人干活都是在自己的局部运行一个贪心算法：我负责的这个事我怎么干最省力、怎么让我当前的收益最大——比如买回排骨直接扔进冰箱就是贪心算法，在当下这一秒这是轻松的解法，至于说过两天不好切，那是未来的我操心的事。**贪心算法使得一系列局部的最优，接出了一个全局的糟糕结果。**贝尔曼的动态规划拯救了这个局面。贝尔曼提出一个方程，通俗来说是这样的：**你的总收益 = 你眼前的及时回报 + 你即将进入的下一个状态的潜在价值。**在动态规划的视角下，动作的目的不只是在当下，更是在于完成一次状态转移。这就好像职业选手打台球一样：不仅要打进当前的球，还要通过精确控制力度和旋转，让白球在碰撞后停在最完美的位置，方便击打下一颗球。**前置杠杆就是宁可牺牲当前的及时回报，也要把系统推进一个未来不用反攻的高价值状态；顺序杠杆就是用设计结构矩阵为你规划出一条正确的状态转移路径；约束杠杆则是说在一个复杂系统里，真正决定下一个状态价值的变量只有一个，那就是瓶颈。**简单说，你这一步怎么走，不能只看这一步本身值不值，而要看它会把你带到一个什么状态：后面的路是更宽了还是更窄了？成本是更低了还是更高了？

贝尔曼有个最优性原理，翻译成大白话就是：**不管你过去多烂，也不管你起点在哪，你当下的这个决策必须能让你在新状态下面向未来时拥有最好的处境。**

咱们看几个日常的应用场景。**前置杠杆**：厨房里有句法语叫 mise en place，意思是"一切就位"——也就是大厨在开火炒菜之前，会花大量时间把所有要用的食材切好、酱汁调好、肉类腌好，所有小碗顺序摆在手边，一旦点火行云流水，绝不能半途关火去满世界找盐。**你的工作环境最好先处于低摩擦状态**：比如你要写个什么东西，也应该先备料——做好调研，把所有的数据、文献、核心大纲全部整理在手边，一旦开始写就进入纯粹的输出状态，而不是一边写一边找资料想结构，甚至还时不时回复个消息。**顺序杠杆**除了用于装修房子，更重要的心法是**遏制自己先干那些看起来像进展的事的冲动**：你这个报告的核心主题都没想好，就在那研究 PPT 皮肤，光修标题字体就花了 15 分钟——一看就不是真干活的人。**约束杠杆**告诉我们**不要到处努力，而要只在命门上用力**：能量产、谁都做得差不多的活，都不是你最该亲自下场的地方，真正值钱的是那个决定全局的卡点。你以为自己今天效率低下是因为意志力薄弱、不够自律，其实你的瓶颈是物理的——你昨晚睡眠不足；公司天天搞狼性动员，可项目推进还是慢，那就根本不是执行力的问题，而是因为只有老板一个人有拍板权，他的决策带宽锁死了总吞吐量；你写不出东西抱怨自己文笔不够好、打字不够快，其实瓶颈是你脑子里没有值得被写下来的洞察。

**刀还是那把刀，力气还是那些力气，可就是因为你用力的地方不同、顺序不同、假设不同，事情就发生了质变。做在点子上和没做在点子上：一个叫积累，一个叫耗费；一个越做越顺，一个越做越堵；一个是在生利息，一个是在交学费。你是在完成任务，还是在制造一个更好的未来状态呢？**
`,u1=`# 039丨选择偏差：就算无人说谎，你看到的也不是真实世界

## 讲什么

决策判断模块：**选择偏差（Selection Bias）**——进入你视野的样本，并不能等概率地代表真实世界。你以为你在观察整个大海，殊不知你只是在看渔网里捞上来的鱼。

## 解决什么真问题

为什么很多人觉得"中国文化今不如昔""以前的大学生素质真高""现在的网络风气太差"？因为**你的印象不是由全体样本决定，而是由"上桌样本"决定**。

## 核心论点

- 四类选择偏差：**自我选择偏差**（有兴趣/有动机的人才来发言）、**幸存者偏差**（没来的不是因为没兴趣，而是根本来不了）、**分组选拔偏差**（一开始就不是随机分组的）、**门槛偏差/伯克森悖论**（你看到的都是跨过某个门槛之后的样本）。
- **中国文化不是降级了，而是扩容了**：1980 年代初中国城镇化率只有 20%，1990 年高等教育毛入学率才 3%，今天已达 67%。那些原本沉默的人上网了，他们成了收视的主体和广告的目标。
- **名校更像筛选器，而不是炼丹炉**：孩子不是被随机分配到各个学校的，被选中本来就是又聪明又努力家庭条件又好的孩子。
- **筛子会伪造规律**：门槛会制造对立——"长得帅的都是渣男""业务能力强的人情商低"都是伯克森悖论的错觉。

## 关键例证 / 金句

- 亲子鉴定机构工作的女士说"男性才是弱势群体"——她没意识到绝大多数夫妻并没有来做亲子鉴定。
- 朋友圈悖论：**朋友圈是人生的高光时刻集锦，而不是生活的随机切片**。研究：使用 Facebook 越频繁的人越容易觉得别人更幸福；限制在每天 30 分钟以下就显著减少孤独感和抑郁感。
- 成功学往往把幸存者的运气当成因果关系：增长最快的公司创始人平均年龄不是 20 多岁，而是 **45 岁**——他们成功不是因为他们叛逆，而恰恰是因为他们积累了行业经验。
- **"你看到冠军橱窗，却不知后院堆着一地尸体。"**

## 如何应用

- 听到任何故事先问四句话：**谁没来？谁来不了？分组是随机的吗？这里有没有门槛？**
- 如果你听说了很多坏消息，提醒自己：真实世界可能比你想象的要好一点。
- 对老百姓的日常经验，提醒自己：人有多么容易陷入偏差。

---

## 全文

> 以下为课程转录全文，已做去噪与语义分段；**加粗+底纹**处为核心论点与金句。

欢迎来到现代思维工具课，我是万维钢。这一讲的思维工具叫做**选择偏差**。

如果你年纪稍长还经常上网，会不会有一种"社会文化今不如昔"的感慨？现在网上充斥着博眼球的烂梗和家长里短的事哲学，一开口就是牛马、彩礼、出轨，连主流媒体都不会说正经中文了。偶尔把以前拍的红楼梦三国演义翻出来看看，你难免会觉得这些观众不行，中国人的文化素质在严重下降。再看眼下，很多人怀念上世纪八九十年代的好时光：那时候如果你是个国企职工，工作不但一点都不累，还有丰富的业余文化生活，有充分的安全感；那时候的大学生毕业就能随便找到好工作，而且素质也是真高。

可我要说的是，**就算你真的经历过以前那些好日子，你这场乡愁也是幻觉。**80 年代初中国人口城镇化率只有 20%，到 1990 年高等教育的毛入学率才 3%，而今天的大学入学率已经超过 60%。**你记忆中那些快乐的工人和自豪的大学生，在以前只是极少数人。绝大多数中国人居住在农村、极度贫困，他们不是文化消费者，更不是叙事主体，他们连抱怨都很难被你听见。**今天的社会文化之所以俗气，是因为这些原本沉默的人上网了，他们成了收视的主体和广告的目标，是他们在决定文化的走向。**中国文化不是降级了，而是扩容了。**今天那些住在前 20% 的好地区、学历高居 3% 的精英，可能日子过得也不错，品味甚至比过去更高级，但他们的文化存在感被淹没了——不值得专门为这么点人拍电视剧。**人们怀念的并不是过去中国的平均值，而是那个被强烈过滤过的中国。你的印象不是由全体样本决定，而是由上桌样本决定**：以前是少数城市精英样本冒充了中国总体，现在影响你的则是更普通的人，还有平台算法的推波助澜。这个机制叫选择偏差。现实世界中有太多观念陷阱，你必须掌握这个工具才可能做出准确的判断。

**简单说，选择偏差就是进入你视野的样本，并不能等概率的代表真实世界。你以为你在观察整个大海，殊不知你只是在看渔网里捞上来的鱼——而这张网的网眼大小和下网的位置，早就决定了你会看到什么。**又好比站在急诊室门口一整天得出结论说"这座城市的人都在流血"——你看到的每一幕都是真的，没有人故意对你说谎，但你的世界观塌了。我看过一个短视频，一位在亲子鉴定机构工作的女士说，她经历了这么多案例，认为男性才是弱势群体——她可能没意识到绝大多数夫妻并没有来做亲子鉴定。

学术界发现了十几种选择偏差，我把它们粗略分为四类。

**第一类叫自我选择偏差**：就如同开一场 party，来参加的人都是自己想要来参加的。最典型的一个现象，我们不妨称之为**朋友圈悖论**：你感觉朋友圈上几乎每个人都过得比你好——小张在马尔代夫潜水，小李刚提了新车，老王的女儿拿了钢琴大赛一等奖，而你却在吃着外卖填报表。他们没有撒谎，但人们往往只会把自己好的一面展示出来，发朋友圈这个动作经过了自我选择。那刚因为房贷吵架的夫妻、那个刚刚被老板痛骂的打工人，正如此刻是不会发朋友圈的。**朋友圈是人生的高光时刻集锦，而不是生活的随机切片。**可是如果有人不懂这个道理，非得拿自己的日常去对比别人的宣传海报，那就会陷入选择偏差、感觉失落。有研究发现使用 Facebook 越频繁的人，越容易觉得别人更幸福、日子过得更好；而如果把社交媒体使用限制到每天 30 分钟以下，人们就会显著减少孤独感和抑郁感。另一个例子是网络评论：为什么很多电影、商品、餐馆的评价都呈现所谓 J 型分布——绝对的主力在五星吹捧，次高峰在一星痛骂，中间的二三四星极少？因为只有当一个事物激发了你强烈情绪的时候，你才有动力去打开 APP 登录、写字发表；至于"还行吧"那种温和体验，没有发言动力。更细致的研究认为评论背后有两层自我选择：除了极端者发言的漏报偏差，还有一层购买偏差——愿意买的人本来就更可能偏正面。平台为了让评论更有用搅尽了脑，有的搞"认好评""已购才能评""积分激励""评价提醒"等，但偏差是无法消除的——**根本问题不是技术，而是动力：不是每个人都想说话，想说话的人也不是平均人。**还有你打开国际新闻感觉世界太乱了，打开社会新闻感觉人的素质江河日下，你觉得某些国家极其危险、某些地方的人都很坏——这些都是因为自我选择偏差。只有极其罕见、极其恶劣的事件才值得上新闻，而岁月静好可不会上热搜。**自我选择偏差会让人长期处在一种被极端样本包围的精神状态，容易陷入无味的焦虑、抑郁和心态失衡。须知社交媒体不是生活，评论区不是民意，热搜不是人间。**

**第二类叫幸存者偏差。**如果说自我选择偏差是"有兴趣的人才来"，幸存者偏差就是"没来的人不是因为没兴趣，而是因为根本来不了"。幸存者偏差可能是商业世界最致命的认知陷阱，因为它会帮你总结错误的成功经验。如果你只看巨头的传记，你会认为要想成功就得有极度的激情、敢于冒险，就得打破常规，甚至做个偏执狂，要对新机会 all in，尤其是要在很年轻的时候创业——你看比尔·盖茨、乔布斯、扎克伯格、山姆·奥特曼都没读完大学，于是你得出结论"成功=辍学+孤注一掷"。**可是你不知道同样辍学同样失败了的人有多少？那些人都赔光、失业、回老家了，他们没有进入你的视野。**如果把失败的数据也统计进来，你会发现大部分创业公司都在半路消失了；增长最快的公司的创始人平均年龄并不是 20 多岁，而是 45 岁——他们成功不是因为他们叛逆，而恰恰是因为他们积累了行业经验。**你不能听说几个人靠买彩票发了大财，就把买彩票视为理想的发财手段。成功学往往把幸存者的运气当成因果关系。**理财基金是另一个重灾区：你要买理财，基金公司的小姐姐打开一张图表说"你看我们的历史收益多漂亮"——她很可能没有骗你，但是她不能证明这支基金的业绩好到底是因为公司能力强，还是因为在这一支上蒙了运气，因为她没给你看失败的数据。**现实是那些业绩糟糕、早就清盘合并死掉的基金，根本没机会站在你面前。你看见的是冠军橱窗，却不知后院堆着一地尸体。**有人说某个偏方能治大病、某种健身法或者饮食疗法神奇，其实只不过是感受到好转的人更愿意出来讲故事，没效果的人早就离场了。有人看见现在做办公室的白领动不动就抑郁和亚健康，反倒是工厂里的蓝领工人一个个都特别壮实扛造，就说体力劳动有利于身体和精神健康——其实真相是那些不健康的人根本承受不住工厂的重体力劳动，早就被淘汰了。流行病学对此甚至专门有个名词叫"健康工人幸存效应"。**还有怀旧也有很大的成分是幸存者偏差**：人的记忆有个特点，从长期来看我们记住的往往是一些高光时刻，我们会忘记困惑和麻烦。有人怀念以前的文艺作品，有人怀念以前的社区关系，有人怀念以前的政治局面——可是如果你能到现场考察一番，会发现以前的人也有跟我们一样的担心，他们在怀念更早的以前。以前你很年轻，而年轻总是伴随各种美好的回忆；以前的你的麻烦都解决了，所以你不再认为它们是麻烦，而现在的麻烦还没解决。**不是时代退步了，而是时间替过去做过一轮筛选。**

**第三类叫分组选拔偏差**：问题出在事物一开始的分配环节，它根本就不是随机分组的。这里有个最反差、也最刺痛中产阶级神经的例子：**名校效应**。你砸锅卖铁也要买学区房，牺牲所有的空闲时间领孩子去参加这个活动那个活动，只为能上重点中学和好大学，最好是常春藤名校。你相信名校代表最好的教育，能把孩子培养成高级人才。**但这是一个极度忽视科学检验的幻觉。**孩子们并不是被闭着眼睛随机分配到各个学校的，他们是经过了严苛的选拔才进去的——那些被选中本来就是又聪明又努力家庭条件又好的孩子，他们本来就更有可能是人才。那么名校到底是培养了他们，还是沾了他们的光呢？美国经济学家斯泰西·戴尔和艾伦·克鲁格做过一系列研究：他们不是简单比较名校生和普通生的收入，而是专门看那些水平差不多、都有能力去名校、但是有的去了、有的因为种种原因没去而选择了普通学校的学生。结果发现：**名校并没有让毕业生获得明显更高的收入，尤其是如果你看长期收入，名校效应就缩水到接近于零。**戴尔和克鲁格的研究认为，只有对出生于弱势家庭（比如是少数族裔、父母受教育程度很低）的学生，名校这块牌子才有明显的帮助——可能是因为他们更需要学校这个社交平台。**简单说，名校更像筛选器，而不是炼丹炉。**同样道理，你不能看有些孩子补课提高成绩就认为补课能提高成绩，也不能看有些孩子从小参加各种课外活动长大后成了成功人士，就认为那些素质教育有利于成功——那也许只不过是因为爱学习的孩子才爱补课、富裕的家庭才有条件让孩子去学击剑和马术，他们的成功只是个人能力和家庭能力的外溢。

**第四类叫门槛偏差，也叫伯克森悖论。**这里的问题是：你看到的都是跨过某个门槛之后的样本。有一些民间智慧说"长得帅的男人都是渣男""美女通常脾气差""业务能力强的人情商低""体育好的学生文化课程差，文化课好的学生体育差"——难道老天爷讲公平，给人一个优点就必定再给他一个缺点吗？其实这些都是错觉。**两个原本可能完全不相关的变量，如果你非得把它们加在一起设定一个总的门槛，然后只看那些越过门槛的样本，你就会发现这两个变量显得负相关。**就拿婚恋市场来说：假设女生最看重的两项男生价值是长得帅和人品好，两者兼具就更好，但绝不能又丑又渣。我们假定男性的综合吸引力 = 颜值 + 人品，给每个人都计算了一个总分：一个男生哪怕想要成为你的备胎，他的总分也得越过一个门槛。那你可以想见，门槛里边的人两项都是高分的肯定是少数，大多数人必定是一项分高一项分低——于是你发现颜值和人品是互斥的。其实这一切只不过是因为那些又帅又专一的男生本来就少，而且早被人抢走了；而又丑又渣的男生根本就没有成为你的样本。同样道理，为什么业务能力强的人情商低？因为公司招的都是"业务+情商"超过一定门槛的人，两项都强的是极少数，两项都弱的进不来，剩下你容易看见的就必定是一项强一项弱的那些。**相亲不是人口普查，招聘不是社会抽样。门槛会制造对立，筛子会伪造规律。**

选择偏差是因为样本有问题，但有时候就算样本没问题，你的眼睛还可能出问题：你可能只注意极端的案例而对那些平凡的事物视而不见，你可能只愿意看见支持自己观点的证据——这些现象被称作可得性偏差和确认偏误，我们这里不必细说。

想要在真实世界中获得一点真知，那是非常困难的。科学家为了对付选择偏差费劲了力气：最理想的办法是把人随机分组做实验；但如果你不能做实验、只能被动统计既成的结果，你就必须得确保样本是干净的——**其中最重要的就是去追那些没有出现的人**：他们可能是因为失败而退出了游戏，但他们的参与仍然很有意义，他们可以贡献知识。**我们听说任何故事，总可以先问四句话：谁没来？谁来不了？分组是随机的吗？这里有没有门槛？**如果你听说了很多坏消息，请提醒自己：真实世界可能比你想的要好一点；对于老百姓的日常经验，也请提醒自己：人有多么容易陷入偏差。
`,c1=`# 040丨回归均值：不要大惊小怪，要有点定力

## 讲什么

决策判断模块：**回归均值（Regression to the Mean）**——把数据的正常波动当成了因果，它会让你对极端事件过度反应。

## 解决什么真问题

卡尼曼给以色列空军培训时说"奖励比惩罚有效"，老教官反对："我表扬飞得好的，他下次就变糟；我把飞得差的骂得狗血淋头，他下次通常都飞得更好——军队里就是吼叫最管用。"**现象没错，解释是错的：那不是管理学，那是统计学。**

## 核心论点

- **观测结果 = 事物的真实水平 + 随机运气。**特别好或特别坏的表现都属于极端情况、比较罕见，所以下一次自然就没有那么极端了——就算不批评也不表扬，它也会更接近平均值。
- 两种错误统称**回归谬误**：错把波动当因果 + 错把运气当实力。
- 戴明漏斗实验四规则：什么都不动（方差最小）→ 基于偏差反向补偿（方差扩大一倍）→ 参照靶心反向补偿（运动式管理，系统被左右抽打）→ 小球落在哪就把漏斗挪到哪（师傅带徒弟，最后都不知道自己在干什么）。
- **这一讲最重要的教训是决策定力：极端不是常态，有见识的人不会事事都管。**

## 关键例证 / 金句

- CEO 登上顶峰后三年内业绩明显回落、新秀球员第二年泯然众人——董事会痛心疾首说"爆红之后飘了"，专家说"二年级魔咒"，**殊不知他们只是回归均值而已**。
- 福特 vs 马自达：福特的质量管理是规则二（稍偏就调），马自达是规则一（先把机床调好，过程稳定就不乱调）——**结果福特的公差比马自达大很多**。
- **"我们给救火队员掌声，却不给防火工程师奖金。"**
- 震惊发现：著名的邓宁-克鲁格效应在相当程度上其实是回归均值导致的——低分者自我评价接近平时均值（比现场高），高分者自我评价也接近均值（比现场低），于是看起来"蠢人高估自己、聪明人低估自己"。

## 如何应用

- 面对极端值先问四个问题：我是不是因为一个极端值才开始注意这件事？我看到的是一个点还是多期数据？如果我什么都不做，它会不会自己缓回来一点？系统的生成机制有没有真的改变？
- 孩子闯了祸你没必要发火，他自己也很难受；员工搞砸一项任务你不用找他谈话更不用整改，他下次不至于如此。
- **"听风就是雨：今天跌 2% 你就觉得末日降临，明天涨 1% 你就以为牛市开启——这种戏多的决策者能把系统折腾死。"**

---

## 全文

> 以下为课程转录全文，已做去噪与语义分段；**加粗+底纹**处为核心论点与金句。

欢迎来到现代思维工具课，我是万维钢。今天这一讲的思维工具是**回归均值**。

诺贝尔经济学奖得主丹尼尔·卡尼曼可以说是决策科学的祖师爷之一，他在《思考，快与慢》那本书中讲过一个故事。卡尼曼有一次去给以色列空军做培训，他讲到一个心理学界人尽皆知的观点：**对良好表现的奖励，比对错误表现的惩罚要有效得多。**有大量研究证据支持这个说法，不管你是教育小孩、训练运动员甚至马戏团训练小动物，都应该以正面鼓励为主。没想到座中立即有一个老教官站出来表示反对。他说："我带过无数飞行员，每当有个学员做了一个极其漂亮的飞行动作，我表扬他，他下一次的动作准保变糟；可是每当有人飞得像一坨狗屎，我把他骂的狗血淋头，他下一次通常都会飞得更好。别跟我扯什么心理学，军队里就是吼叫最管用。"

卡尼曼一时语塞：难道说那么多研究都错了吗？如果你是个家长的话，你可能也有同感：孩子做错了事你骂他一顿，他下次往往会表现好一点；但是如果他有一次考试成绩特别好，你一通猛夸，结果他下次反而考得没那么好。难道说"不打不成才"是真理吗？

卡尼曼后来才意识到：**老教官说的现象没错，但是解释是错的。那不是管理学，那是统计学；那不叫批评有效，那叫回归均值。**这个道理是：特别好或者特别坏的表现都属于极端情况，都比较罕见，所以下一次自然就没有那么极端了——你就算不批评也不表扬，它也会更接近平均值。我们上一讲说的选择偏差是你因为数据没看全而总结了错误的因果关系；而回归均值则是你把数据的正常波动当成了因果。**它会让你对极端事件过度反应。**

回归均值这个现象是达尔文的表弟、英国科学家弗朗西斯·高尔顿在 1886 年最早提出来的。当时他研究身高遗传，发现高个父母的孩子平均没有父母那么高，矮个父母的孩子平均也没有父母那么矮——难道说上帝喜欢讲公平，专门把极端者往中间拽吗？高尔顿想了十多年才想明白，其实逻辑很简单：**事物大多有一定的运气成分，可以说你的观测结果 = 事物的真实水平 + 随机运气。**这哥们在某一次测试中表现得极其好，意味着他不仅具备一定的实力，而且那天碰巧赶上了极其好的运气；但获得那么好的运气的概率是很小的，所以当他下一次再测试，就算实力一点都没变，好运气大概率也不会重现了——那么它的下一次表现就几乎注定会比这一次差。反过来也是：这一次搞砸了也不只是能力的问题，也是运气太差；总遇到坏运气的概率也是很小，所以下次的运气就没那么差了，表现自然就提升了。就如同有一种力量在让他的表现向真实水平回归一样。**当然这里根本就没有什么力量：即使没有教官的表扬或者批评，好的也不会一直好，坏的也不会一直坏，这就是正常的随机波动。**

可是人的大脑实在太喜欢归因了。后来卡尼曼和他的合作者阿莫斯·特沃斯基总结，人很难理解回归均值，就经常犯两种错误：**一个是错把波动当因果，一个是错把运气当实力**，可以统称为回归谬误。关键是极端值实在太吸引我们解读了：如果一个人表现这么优秀，难道不是因为他本身特别强大吗？如果一个人表现特别恶劣，难道不是因为这个有毛病吗？如果一个人从优秀变得平庸，难道不是因为他骄傲自满了吗？如果一个人从恶劣变好，难道不是因为我们对他的整改见效了吗？**殊不知这一切很可能只是随机波动而已。**

可是现实中你并没有波动五次的机会，人们常常一看见极端值就下结论和采取措施。一个 CEO 取得了突破性的业绩，公司给他发放巨额奖金、杂志把它放在封面；可是研究显示这种登上顶峰的 CEO 往往会在之后的三年里出现明显的业绩回落，于是董事会痛心疾首说"你看这人爆红之后飘了"。一个新秀球员加入职业联赛第一年大杀四方，第二年泯然众人，专家都说这就是"新秀墙"——他得反思自己、改变打法才行；球迷则说这人一赚了大钱就不进去了，这是"二年级魔咒"。**殊不知他们只是回归均值而已。**董事会给不给奖励、新秀改不改变打法、赚没赚到钱，爆红者下一年的成绩都不会像现在这年那么好。

老张有关节炎平时膝盖就疼，有一天疼得特别厉害，邻居给他一个祖传药，喝了之后疼痛果然减轻了不少。你能说这药有用吗？**你要知道慢性疼痛本来就是波动的，你在最低谷的时刻出手，任何疗法都容易见效。**事实上，回归均值是现代医药领域判断疗效的一个非常严重的困扰。足球界一直有个传说：如果球队成绩特别不好，只要换个教练通常马上就会有奇效——那听起来就很像是回归均值。这就如同皇上听说哪发生天灾就下个罪己诏，接下来果然没有再次发生天灾——你能说罪己诏有效吗？

管理是回归谬误的重灾区。一个部门的业绩跌到了谷底，高层震怒，就把原来的主管开除换上一个新主管；新主管搞了一套新官上任三把火的颜革，结果第二个月业绩好转了。试问在这种情况下，谁能说这不是新主管有能耐、力挽狂澜呢？**可真实情况偏可能只是业绩经历了一次随机波动——你把一只猴子放在主管的位置上，下个月也会反弹。**

小布什时代，美国搞过一场轰轰烈烈的公立教育改革，叫做"不让一个孩子掉队"：政策的思路是根据标准化考试成绩对学校和老师进行奖惩，如果一所学校考试成绩提高了就给发奖金，如果退步了那就削减经费甚至可能关闭学校。结果一年之后，那些去年排名最靠后的学校成绩有了普遍的提高，于是有人欢呼"你看政策有效，看来不搞绩效不行，哪怕老师也不能只讲情怀"。**可问题是，如果你去考察那些前一年成绩最好的学校，你会发现他们的成绩反而下滑了。**难道说老师们只认大棒不认胡萝卜吗？答案是发生了回归均值。**可人们就是喜欢大电影、大整顿，最好来个雷霆手段、运动式治理。与此同时，那些在上游默默把系统维持的很稳的人，却常常不会被看见。我们给救火队员掌声，却不给防火工程师奖金。**

基于回归谬误的大动作管理不但没好处，而且很有坏处。1980 年代，美国统计学家、后来被誉为现代质量管理之父的威廉·戴明提出了一个**漏斗实验**，那可能是管理学里最漂亮的预言。想象你在桌子上画一个靶心，在靶心的正上方放一个漏斗，让漏斗对准靶心，你把一颗一颗的小球从漏斗里扔下来，目标是让小球能够命中靶心。不管你这个漏斗端得多平、瞄得多准，小球在下落过程中碰到漏斗的内壁，路线难免会产生一些偏差。如果你看到一个小球没有落在靶心上、落偏了，请问这时候你怎么办？戴明设想了四种应对规则，代表四种管理方法：

**规则一：什么都别动。**只要我相信漏斗已经对准了靶心，我完全可以认为小球的波动都是随机现象，没必要整改。这是有定力的管理。小球的落点会围着靶心做正态分布，事实上这样的方差是最小的。

**规则二：基于偏差从上一次的漏斗位置做反向补偿。**小球往左偏了两厘米，那我下次就把漏斗往右移动两厘米。这是跟着结果跑的管理方式：顾客说这次做咸了，那我下次就少放一点盐；有人投诉我们产品的尺寸有点偏大，那我们就做小一点；下次人家又说尺寸小了，那我们就再改大一点。**这样改来改去没定性，计算模拟发现它能把方差扩大一倍。**

**规则三则是参照桌子上的靶心做反向补偿。**小球往左偏了两厘米，那我下次就把漏斗放在距离靶心右边两厘米的地方。如果说规则二是管理者认为自己的公司有问题，那规则三就是管理者认为自己的指挥有问题：我瞄得不够准；我们产品质量不行，看来是我管的不够严；竞争对手竟然降价，那我们要降得比他还多，我们跟他打价格战。结果就是运动式管理：今天一个口号，明天一个大作战，系统被左右抽打，震荡越来越厉害，搞不好小球飞出桌面都有可能。

**规则四更有意思：上一颗小球落在哪，下一次就把漏斗挪到哪。**你说哪有这样搞管理的？其实真有：这就是公司没有标准也不看市场反馈，活怎么干全靠着感觉，师傅带徒弟口耳相传，这一代自动把上一代当榜样。结果越走越偏，最后都不知道自己在干什么。

这个道理是：**不要对偏差做过度的反应。**你可以先多测几次，感觉漏斗对的差不多准就可以了，一定程度的误差都是可以容忍的，否则你的管理就是添麻烦，而且可能是大麻烦。

当时就有个现成的案例：福特公司出一款新车型，决定搞双元采购，让本土的福特工厂和日本的马自达工厂用同一套图纸生产完全相同的自动变速箱。结果搭载福特变速箱的汽车投诉率和保修索赔率非常高，而马自达工厂生产的变速箱运行的就非常平稳。这是为啥呢？原来福特的质量管理思路更像漏斗实验里的规则二：只要尺寸稍微偏离目标，哪怕还在规定公差范围内，也赶紧调机床。而马自达更像规则一：尽量先把机床调好，此后只要过程稳定，就不追着每个点乱调。**正如戴明所料，福特的公差比马自达大很多。过于勤勉的纠偏等于是给系统注入额外波动。眼里不揉沙子、见到毛病就改，可不是好管理——往往什么都不做，也比大惊小怪好得多。**

人有多容易被回归均值迷惑呢？我调研中有个震惊的发现：**著名的邓宁-克鲁格效应，在相当程度上其实是回归均值导致的。**我们精英日课专栏以前专门讲过邓宁-克鲁格效应：它的意思是越是愚蠢的人越容易高估自己，而聪明人都比较谦虚、倾向于低估自己。这个规律听着挺直观，但是 2020 年以来学术界提出了很多质疑。我们抛开技术细节简单说：研究人员判断一个被试是聪明还是愚蠢，是通过在实验室里让他做一套测试题；既然是做题，就有人发挥好、有人发挥不好——也就是说特别高和特别低的分都有运气成分。可是当你让人做自我评价的时候，被试者的说法肯定会接近自己平时的均值：这个均值对发挥不好的人来说，肯定比他现场的表现要高；而对发挥好的人来说，则比他现场分数要低，对吧？于是在你看来就是低分的人高估了自己、高分的人低估了自己——**殊不知这只是个统计效应。**也有人认为不完全是统计效应，说邓宁-克鲁格效应还是真实存在的，只是没有此前估计的那么严重而已。但我想说的要点是：**想要从观测中获得一点真知是非常困难的。学术界严谨到这个程度还不敢说有定论，那你说连做学术研究的都这么难以判断真相，我又如何知道眼前这个事真的趋势变了，还只是一个随机的波动呢？**

这可是统计学最根本的问题，除了看更多更全面的数据，没有简单办法。就拿回归均值来说，你至少应该问自己四个问题：**第一，我是不是因为一个极端值才开始注意这件事？第二，我看到的是一个点还是多期数据？第三，如果我什么都不做，它会不会自己缓回来一点？第四，系统的生成机制有没有真的改变？**最稳妥的办法是使用贝叶斯公式，每次稍稍更新一下自己的先验。

这一讲最重要的教训是**决策定力**：孩子闯了个祸，你没必要发火，他自己也很难受；员工搞砸一项任务，你不用找他谈话、更不用整改，他下次不至于如此；学生这次考试倒数第一，你先别忙上价值。同样的，老板偶尔办了一件大事，你们也不用着急把他往上捧。**风不中，咒语不中日，极端不是常态，有见识的人不会事事都管。**听风就是雨：今天跌 2% 你就觉得末日降临，明天涨 1% 你就以为牛市开启，看见不寻常就坐不住，一激动就重奖重罚——这种戏多的决策者能把系统折腾死。
`,f1=`# 041丨前景理论：让人铤而走险的不是贪婪，而是不甘

## 讲什么

决策判断模块：**前景理论（Prospect Theory）**——卡尼曼和特沃斯基 1979 年提出，给卡尼曼带来了诺贝尔奖。人决定做不做一件事，不是看预期效用，而是看相对于心里这个参照点我是赚还是亏。

## 解决什么真问题

为什么赌徒输红了眼会拼命加注？为什么还没亏钱的人面对获利机会反而缩手缩脚？**人们冒险往往不是为了贪图更多，而是为了回本。**

## 核心论点

- 前景理论画了一条非对称的 S 型曲线：**损失 100 块的痛苦，比赚 100 块的快乐大得多**——损失厌恶，痛苦大约有快乐的两倍。
- 参照点右侧（满意现状）→ 保守；参照点左侧（现状不及心理预期）→ 冒险。**"光脚不怕穿鞋的""哀兵必胜""把包袱甩给对方"都是这个机制。**
- 四个经典应用：**损失厌恶**（不承认亏本宁愿被套牢十几年）、**现状偏见**（工作干得不开心也不愿跳槽）、**禀赋效应**（东西一旦归你所有，心理价格就立刻上涨）、**框架效应**（叙事方式决定别人的参照点，从而操纵选择）。
- **高手应该自由设置自己的参照点：它应该是激励，而不应该是枷锁。**

## 关键例证 / 金句

- 杯子实验：没得到杯子的人最多出价 3 美元买，得到杯子的人给 7 美元都不卖——卖家卖的是"跟了我这么多年的老伙计"，买家买的是"一辆旧车"。
- 纽约出租车司机：下雨天生意好早收车，晴天反而苦熬十几小时——因为他们给自己设定了一个每日目标收入作为参照点。**达到了就觉得"再多干也不值得"，达不到就"是男人就别回家"。**
- 散户的处置效应：股票该不该卖应该只由对它的期望决定，跟买入价毫无关系——但买入价是散户最强烈的参照点。**这就是为什么散户总是抓不住大涨，却总能全程经历大跌。**
- 北宋宣和北伐：大宋有两个参照点（现实安全 vs 历史领土），没有清晰的目标函数，一边把国家推向冒险、一边死死拽住不许真拼命——**既打不疼敌人，也保不住自己**。

## 如何应用

- 设一个"心理账户"：每年 2000 元的"风险探索账户"或"学费账户"，遇到任何意外损失都从这个账户里扣，年底剩余就捐出去——反正这也不是你的钱。
- 给别人设置参照点：利润好加薪要拆成"涨薪 2 万 + 绩效奖金 3 万"，别把一次性奖励变成别人"本来就该拿"的参照点（升米恩斗米仇）。
- 公关危机：错了就直接认——**遮掩是非常冒险的动作，公众会认为你的遮掩行为比当初那个错误更可恶**（尼克松水门、克林顿拉链门）。

---

## 全文

> 以下为课程转录全文，已做去噪与语义分段；**加粗+底纹**处为核心论点与金句。

欢迎来到现代思维工具课，我是万维钢。我们都听说过这样的故事：一个人在赌场里输了钱，或者炒股炒币被套牢，非但没有认赔离场，反而拼命加注——他会把积蓄都堵上，甚至没钱也要到处借钱加杠杆，结果越输越多，最后倾家荡产，甚至成了亡命之徒。人们常说利令智昏。但是你想过没有，正常人是不会为了那种不靠谱的收益下那么大赌注的。我们前面讲过凯利公式：面对一个机会你是否下注，应该只跟你在这里有没有 edge 有关，你的下注比例应该根据 edge 和赔率的大小由公式决定。**事实上，大多数人最常犯的错误不是过于冒险，而是不敢冒险。**那到底是什么让那些赌徒近乎疯狂的铤而走险呢？是心态，是输红了眼，是对之前损失的不甘。**人们冒险往往不是为了贪图更多，而是为了回本。**反过来说，要是还没亏钱，人面对真正的获利机会反而容易缩手缩脚，生怕把到手的东西再吐出去。

这一讲的思维工具叫**前景理论**，它能解释一大堆决策偏误。前景理论有时候翻译成展望理论，是丹尼尔·卡尼曼和阿摩斯·特沃斯基 1979 年提出来的，正是这个理论后来给卡尼曼带来了诺贝尔奖。传统经济学认为人决定要不要去做一件事、去冒一个险，应该由这件事带给你的预期效用决定，而效用取决于最终的财富值。但前景理论说不是的：**人决定做不做一件事，不是看预期效用，而是看相对于我心里这个参照点，我是赚还是亏。**

参照点通常是你对现状的心理预期，也可以理解成是心理账户。通过参照点，前景理论画了一条非对称的 S 型曲线：曲线的横坐标是相对于参照点你赚到或者损失了多少钱，纵坐标是这个结果给你带来的心理价值。我们看：在参照点的右边（收益区），曲线是缓慢的上升；在参照点的左边（损失区），曲线却是快速的下降。什么意思呢？**同样是 100 块钱，损失 100 块的痛苦，比赚 100 块的快乐大得多。这就是著名的损失厌恶。**学术界常见的说法是痛苦大约有快乐的两倍，其实这个比例因人因事而异，但重点是得与失的不对称。

参照点是你对现状的心理预期，而你的现状可不一定正好在参照点上。如果你的现状正好在参照点上或者在参照点的右侧，你此刻对现状满意，甚至现状已经超出了你的预期，请问你会想要冒险吗？你不会。因为只要是冒险就有可能改变现状，就既有可能赢钱也有可能输钱——而根据这个曲线，赢钱带来的快乐远小于输钱带来的痛苦，那你何必冒这个险呢？**可如果你此刻站在参照点的左边呢？你对现状很不满意，你本来应该拥有比现在好的多的境遇——你已经是亏钱的状况，就算再多亏一点不也是痛苦吗？而一旦有机会回到零点，那个感觉可是太好了，所以你当然想赌一把。**这就是"光脚不怕穿鞋的"。古人说哀兵必胜，现在运动员说"我们要把包袱甩给对方，我们不能保赢怕输"，意思都是：**如果你的现状不及你的心理预期，你会有更大的冒险意愿，你的打法会更激进。人不是为贪婪而疯狂，而是为不认输而疯狂。**

抓住参照点，行为经济学里很多五花八门的认知偏差你都可以用前景理论解释。咱们看最经典的四个。

**第一就是损失厌恶。**S 曲线的不对称性告诉我们：人对失去一样东西的恐惧，远大于对得到同一样东西的渴望。这就是为什么有人为了不承认亏本宁愿被套牢十几年，为什么有人为一段错误的关系搭上自己半辈子，为什么有人在每平米好几万的居住空间里堆满破烂，为什么花 20 元运费很心疼、但是改成包邮价格提高 20 元大家就都接受了。

**第二是现状偏见。**人们通常会把现状当做参照点，所以倾向于维持现状：就算大城市的条件明显更好，很多人还是宁愿待在老家；就算工作干得很不开心，也不愿意跳槽；明知当前的银行卡套餐不划算，人们也懒得换，连自动续费都没取消；公司流程是低效的，大家也还是按老办法做。因为改变让人感到不安。你说这叫稳定压倒一切，其实你只是习惯了。

**第三是禀赋效应。**一件东西一旦归你所有，它的心理价格就立刻上涨：拥有它已经成了你的参照点，卖掉它就成了一种损失。卡尼曼等人做过一个著名的杯子实验：让一群被试抽奖，有的人中奖得到了杯子，有的人没有。实验人员问那些没得到杯子的人愿意花多少钱买这个杯子，大家最多出价 3 美元；可是你再问那些中奖得到杯子的人愿意多少钱卖掉这个杯子，人家说给 7 美元都不卖。**这就是为什么卖自家车的人跟买车的人特别难以达成一致：卖家卖的是"跟了我这么多年的老伙计"，而买家买的是"一辆旧车"。**

**第四，框架效应。**所谓框架就是你的叙事方式，它能决定别人的参照点，从而操纵别人的选择。这里的著名案例可太多了。比如默认选项效应（人们倾向于服从表格上的默认选项，这个你肯定早就知道）。再比如卡尼曼和特沃斯基设计的亚洲疾病问题：面对一场预计导致 600 人死亡的疫情，现在有两个治疗方案。一部分被试收到的描述是"方案 A 确定救活 200 人；方案 B 赌一把，三分之一概率救活 600 人，三分之二概率一个也救不了"——结果 72% 的人选了方案 A：我们不冒险，我们要确保救活这些人。而另一部分被试看到的描述是"方案 A 确定死 400 人；方案 B 赌一把，三分之一概率一个也不死，三分之二概率 600 人全死"——结果就成了 78% 的人选择方案 B：我们哪能看着这么多人确定死亡呢？**可是你想想，这两种描述在数学上其实是完全等价的。同一件事，框架引导你考虑存活你就保守，引导你考虑死亡你就冒险。**你还别不信，在医疗场景中就有研究发现：给患者选择肺癌的治疗方案的时候，如果医生说"手术后一个月内的存活率是 90%"，绝大多数患者会选择做手术；可医生要是说"手术后一个月内的死亡率是 10%"，很多人就会吓得拒绝手术。**生死攸关的重大决策，居然取决于一句话的表述方式——叙事的魔力至于此。**

这可不只是心理上感觉舒服，要知道错误的决策会给你带来损失。一个我特别喜欢的是关于纽约市的出租车司机：按理说下雨天打车的人多、生意好，司机应该趁机多拉活多赚钱；而晴天生意差，可以早点收工休息。可是调查发现司机们不是这么干的：**他们在下雨天早收车回家，晴天却反而在街上苦熬十几个小时。**为啥呢？因为司机都给自己设定了一个每日目标收入作为参照点：下雨天很容易达到参照点，司机认为完成任务了、再多干也不值得；而晴天达不到目标，是男人就别回家。

回头再看炒股，这里有个最经典的散户作风叫**处置效应**：按理说一支股票该不该卖，应该只由对它的期望决定，而跟你当初的买入价毫无关系。可是在现实中，买入价就是散户最强烈的参照点：股价涨了一点，为了体验"我在赚钱"的确定性，散户赶紧卖出锁定利润；股价跌了，散户心想只要我不卖就不算真正的亏损；股价已经暴跌，散户反而被激发了冒险精神，果断加仓。**这就是为什么散户总是抓不住大涨，却总能全程经历大跌。**

还有一个有意思的应用是公关危机：比如你是个公众人物，犯了个小错被人家曝光了，按理说你就直接认，也不会有什么太大的问题，过两天这事就过去了。可你的参照点是你有一个完美形象，所以你会想把这个事遮掩过去。殊不知遮掩是一种非常冒险的动作。人们通常不会编造自己做过什么好事，但是常常会掩盖自己犯的错误。然而像尼克松水门事件、克林顿拉链门事件那样，**公众会认为你的遮掩行为比当初那个错误更可恶，你连带的损失将是巨大的。**

归根结底，那个参照点纯粹是你的主观想象，它是个叙事。1000 万输成 20 万，有的人会跳楼；可是你让另一个人拥有 20 万，人家高兴还来不及。**高手应该自由设置自己的参照点：它不一定非得是现状，也不一定是你过去曾经达到过的高点，它完全也可以是你的长期目标或者任意什么东西。它应该是激励，而不应该是枷锁。**

有一个好办法叫**心理账户**：比如你买了一张价值 100 元的电影票，走到门口发现票丢了，在这种情况下你会不会买一张呢？很多人不会。可是我们换个角度想：你会因为刚刚弄丢了钱包里 100 元而不看这场电影吗？实验中多数人选择仍然买票。这个区别的根本原因就在于你把"看电影"和"总钱包"记成了两笔心理账，而其实那都是你的钱。既然如此，我们为什么不设置一个每年 2000 元的"风险探索账户"或者叫"学费账户"呢？平时遇到任何意外损失都从这个账户里扣，年底如果还有剩余就捐出去——反正这也不是你的钱，那么遭遇任何损失对你来说就都无所谓了。

你还可以给别人设置参照点。今年公司利润好，老板说要给每人年薪涨 5 万块钱，HR 说这可不行：这笔钱算成涨薪，员工就会认为这是本来就该拿的参照点，那万一明年公司业绩不好你不能继续涨薪，员工就不但不会感谢你今年的慷慨，反而会有停滞感甚至剥夺感，搞不好会产生离职倾向。**正确的做法是把 2 万元作为涨薪、3 万元算做绩效奖金。**老百姓说的"升米恩斗米仇"其实也是参照点问题：前者是本来不该给但是你给了是个惊喜，后者是因为你总给、对方当成你就该给，结果你有一次不方便没给就被怨恨。市侩哲学会说那我们就不要帮助无关的人，但这里其实是有解的，这个解还是管理参照点：一个是以工代赈（想要得到好处必须付出代价），一个是把丑话说在前面降低预期，还有一个是把固定底薪改成偶尔的奖励（这叫施恩去规律化）。

最后我再说个大的。北宋的宣和北伐——也就是趁着金国打辽国搞联金抗辽——堪称是中国历史上最大的战略灾难之一。宋徽宗君臣首鼠两端，一会要打、一会又犹豫，又想收复燕云、又不敢承担全面战争的代价，最后引狼入室，终成靖康之耻。这帮人到底怎么想的呢？吉林大学的海燕和沈朝永一篇论文认为，**关键是大宋有不是一个、而是两个参照点**：一个是现实安全参照点——宋辽之间已经和平了 100 多年保持现状，每年花点碎银买平安不挺好吗？主和派说好好的何必冒险。还有一个是历史领土参照点——燕云十六州是汉唐故土，我们只要一天不收回来何以面对祖宗，为了弥补这个巨大的历史亏损，现在有机会为什么不搏一下呢？**这两个参照点让朝廷没有清晰的目标函数：一边把国家推向冒险，一边又死死拽住不许真拼命。**下面的将士到底该怎么执行？你既拿不出亡命徒的胆量去赢，又守不住老实人的本分去熬，结果必然是既打不疼敌人也保不住自己——是最糟糕的局面。

**前景理论把"人是追求利益的动物"改写成了"人是守卫参照点的动物"。**从来都没有什么绝对理性：处在参照点右侧我们就守成，处在左侧我们就押注。**你的勇敢和怯懦往往不是出自品格，而是出自坐标。**这在某种意义上是合理的：一只非洲草原上觅食的动物，难道不应该像纽约出租车司机那样，每天吃饱了就停止折腾吗？反正食物也不能长期储存。只是今天有些游戏的规则改变了，那我们就得把参照点从默认改为主动选择才行。
`,d1=`# 043丨参考类：当局者迷，旁观者清，你不特殊

## 讲什么

决策判断模块：**参考类预测（Reference Class Forecasting）**——本质上是一个反自恋装置：如果你认为"我很特殊，我这次一定不一样"，那你最好先用一下这个工具。

## 解决什么真问题

高中生每天刷题到深夜认定自己能上清华、都市女性坚信不将就一定能等到盖世英雄、创业者刚想出产品雏形就把增长曲线画成火箭——**他们身上有真诚的英雄主义，但都活在梦中。**

## 核心论点

- **规划谬误**：人一做计划就会系统性低估成本和风险、同时高估收益——现实往往比你最悲观的估计还要悲观。
- **内部视角 vs 外部视角**：内部视角盯着个案信息（你的努力、诚意、资源配置）；外部视角看分布信息（和你条件差不多的同类事情的平均值、中位数、失败率）。**当局者迷，旁观者清——旁观者未必比你聪明，但旁观者没有那么多自恋情节。**
- 参考类预测三步骤：找一组和你足够相似且已结束的案例 → 看这个参考类的分布找基准线 → 把自己放进去对比微调。**最简单的办法就是直接用参考类里的中位数来预测自己。**
- **"每个人都是特殊的，但你的天赋、资源和方法论是否特殊到让你不属于当前这个参考类呢？"**

## 关键例证 / 金句

- 卡尼曼编教材：团队群情激昂说两年搞定，教育专家说类似团队要七到十年且 40% 直接放弃——结果卡尼曼花了整整八年，而那时教育部已经取消了这门课的教学需求。
- 悉尼歌剧院：预算 700 万美元、计划四年完工，结果花到 1.02 亿、14 年才完工。
- 香港政府把参考类预测引入道路工程评估：筹备论证阶段要想有 80% 把握不超预算不拖工期，成本要上调 44%、工期要上调 75%。**工程界最贵的一句话就是"我们这次能控制得住"。**
- 马斯克也逃不掉规划谬误：SpaceX 创办时他认为 1 亿美元足够发射三次火箭，结果全部爆炸、公司濒临破产，靠砸锅卖铁凑出来的第四次发射才侥幸成功。

## 如何应用

- 学新技能前，先想自己过去三次学习新技能都是在第几天放弃的。
- 搬家前，看看别人家搬家平均会出几次幺蛾子。
- 求职者不知道该要多少工资？别看你的房租和生活开销，**参考各大招聘网站调研，找师兄师姐问：像你这样的学历和技能在相应城市大概值多少钱**——招聘方可是早就把你这样的人研究得明明白白。
- **具体做事不妨用内部视角给自己打气，而决策却必须用外部参考类给自己泼冷水。**

---

## 全文

> 以下为课程转录全文，已做去噪与语义分段；**加粗+底纹**处为核心论点与金句。

欢迎来到现代思维工具课，我是万维钢。一个高中生每天刷题到深夜，常为自己流下的汗水感动，父母都说他一定行，他也认定只要这么拼命就一定能考上清华；一个都市女性坚信自己只要不将就，一定能等到那位身披金甲圣衣、脚踏七彩祥云、非她不娶的盖世英雄；一个创业者刚刚想出了一个产品雏形，就已经在脑子里把用户增长曲线画成了火箭。这些都是非常可爱的人：他们身上有一种真诚的英雄主义，他们是生活的主角，世界因为他们而精彩。**但是他们都活在梦中。**

我们说了这个宇宙的第一性原理是叙事，人需要叙事给自己意义，我们都最好有一点热情、有一点想像、甚至有一点自我感动。**可你要想科学计划、对未来做出靠谱预测，最有效的指导可不是你梦中的叙事，而是同类人和同类事已经发生过的经验。**这一讲的思维工具叫**参考类预测**。它本是一个预测算法，但在我看来它更像是一个反自恋装置：如果你认为"我很特殊，我这次一定不一样"，那你最好先用一下这个工具。

关于梦想和现实的差距，有个现成的规律叫**规划谬误**。心理学家罗杰·比勒等人的一个研究是这样的：让一群学生估算他们各自完成毕业论文还需要多少天，学生们平均给出的预期是 33.9 天；比勒说"不行，你们太乐观了，你们给一个最悲观的估计"，这回平均是 48.6 天。你猜他们实际上用了多少天？**55.5 天。**规划谬误说的就是：**人一做计划就会系统性的低估成本和风险，同时还高估收益。现实往往比你最悲观的估计还要悲观。**

那你说是不是只有普通人这样？要是做正规大项目，人们就会准确估计呢？不是。我们前面提到过的丹麦经济学家傅以斌是大型项目专家，他跟合作者研究了 258 个交通基础设施项目，发现普遍存在延期和成本超支：其中铁路项目平均超支 45%，桥梁和隧道 34%，公路 20%。傅以斌专门写了本书谈论大项目规划失败问题，其中最著名的例子是**悉尼歌剧院**：项目原本预算 700 万美元、计划四年完工，结果花到 1.02 亿美元、14 年才完工。

规划谬误是"一厢情愿"这个成语的现代版，它是大脑里一系列幻觉生成器共同造就的：乐观偏差告诉你这次一定顺，确认偏误让你只蒐集利好证据，控制错觉让你以为世界井井有条、意外情况都在掌控之中，自利归偏让你把上次翻车怪到天气、队友和甲方头上，幸存者偏差和可得性偏差让你只看见成功故事而看不见沉水底的尸体，最后叙事谬误则负责把这些碎片拼成一部热血电影。**你脑子里排练的是剧本，而不是真实世界。而你之所以用剧本思考，是因为你使用的是内部视角**：你自己看自己，就只知道盯着这件事的细节——你的努力、你的诚意、你的资源配置，你心想"这还能有啥问题"。**当局者迷，旁观者清——你需要外部视角。**

外部视角和参考类预测都起源于卡尼曼，后来则是由傅以斌把参考类预测从心理学推广到了工程实践。简单说，**内部视角看的是你的个案信息，而外部视角看的则是分布信息**：也就是说在别人眼里，你只是一个受制于客观规律的统计学数据点，你并不特殊。外部观察者关心的是跟你条件差不多的同类事情——也就是你的参考类——的分布：也就是你的平均水平如何、中位数是什么、尾部风险是怎样、失败率是多少，并且以这些统计数据来推测你会如何。**内部视角盯住本项目，外部视角先看同类项目。**这就是"当局者迷旁观者清"的现代认知科学版本。旁观者未必比你聪明，但旁观者的好处是没有你那么多自恋情节：**人家把你当成样本，而不是当主角。**

这里有个最经典的故事，来自卡尼曼本人，收入在《思考，快与慢》那本书里。1970 年代，卡尼曼带队编写一本给高中生的决策学教材。团队第一次开会，卡尼曼问"我们多长时间能把这本书编完"，大家群情激昂、信誓旦旦的说："两年，最多两年就能搞定。"但卡尼曼留了个心眼，转头问团队的一位教育专家："你认识的跟我们条件差不多的团队，编这样一本书要几年？"专家说："**大概七到十年，而且有 40% 的团队最后干脆放弃了。**"卡尼曼很震惊，但他想我们团队肯定不至于——我们效率更高。**结果卡尼曼花了整整八年才把书搞出来，而那时候教育部已经取消了这门课的教学需求。**你以为你们不一样，其实每个人都觉得自己不一样；现实是在统计学意义上，大家都一样。

傅以斌把参考类预测标准化成了三个步骤。**第一步，找一个数量足够多、包含和你类似的项目的参考类**——注意不是你喜欢的榜样，而是找一组和你足够相似、而且已经结束的案例。**第二步，看看这个参考类的分布**，找到它的基准线：包括平均成本、时间、失败率等。**第三步，把你自己的项目放进去对比**，根据客观情况做微调：我更像是中位数还是应该更保守一点？第三步是最考验人的一步。其实最简单的办法就是直接用参考类里的中位数来预测自己。傅以斌再三强调：**如果你非要说你跟别人不一样，那你就必须有非常强硬的证据才行，不然你就是在把偏见又偷偷放回来。**有些现代机器学习算法的底层逻辑就是参考类预测——一切归功于你的训练集有多大，以及你的相似性度量抓得准不准。说白了就是把"找同类"这个动作给工业化了。

要知道自己做这件事会怎样，你最该考察的是**和你相似的人，在做相似的事情的时候，最后都怎么样了？**参考类预测就是强迫你从"我是一个故事"切换到"我是一个样本"：**故事负责解释你是谁，参考类负责预测你会怎样。**每个自命不凡的项目都会被参考类预测教训。

咱们看几个比较耀眼的应用。

**一个是大型工程和公共投资**，这是参考类预测的主战场。傅以斌看过那么多项目之后的结论是：如果不用参考类预测强制纠偏，你的工程几乎一定会超期和超支。怎么纠偏呢？香港政府给了一个范例：2012 年香港开始把参考类预测引入道路工程评估，他们把自己的 25 个道路项目跟 863 个国际同类项目做比较，先看同类工程过去通常会怎么超支、怎么拖期，再反过来修正自己的计划。结果发现在项目的筹备论证阶段，因为方案还比较粗、不确定性大，如果你希望把风险控制到 P80（也就是有 80% 的把握不超预算不拖工期），那么一开始报上来的数字就不能照单全收，而是要做上调：**成本要上调 44%，工期要上调 75%。**越是项目刚起步、大家最有激情、最容易拍胸脯的时候，你越不能信内部视角。**工程界最贵的一句话就是"我们这次能控制得住"。**

**还有一个是企业并购。**每个 CEO 都喜欢收购别人的公司，因为这能让你的权力扩大，属于开疆拓土。CEO 说并购会带来协同效应，我们战略互补必能整合市场。但你只要看一看参考类就知道：平均而言，收购方公司的业绩并不会因为并购而改善，甚至会受到轻微负面影响。CEO 对此会说："别的公司并购失败是因为他们整合能力不行，我们公司这次不一样，我们的企业文化天下无敌。"学者们不得不想出更先进的办法，用机器学习把参考类预测自动化、提高预测准确率：从历史上找一批和这次高度相似的并购，把他们的结局摆出来，完了再听 CEO 解释为什么这次不会翻车。

**再有一个是电影票房。**如果你要投资拍一部大片，你最好先有效预测一下它能不能火。以前好莱坞的"火"是一种玄学：2008 到 2012 年美国上映的电影里超过一半都没有盈利，而且 10% 的电影却能吃掉将近 70% 的票房收入——可是没人知道谁能进前 10%。与其讲情怀不如看参考类预测。2023 年发表的研究中，有人用基于参考类预测的随机森林模型，使用更细的颗粒度把电影进行分类，把"能否覆盖成本"预测准确度提高到了 90%。

**最后一个应用是现在进行时：核聚变。**现在 AI 算力中心导致美国电力不堪重负，科技巨头纷纷考虑用核聚变发电。我以前就是研究聚变的，我非常不相信十年之内核聚变有商业化的可能性，可是巨头们明显要乐观的多。OpenAI CEO 山姆·奥特曼自己就投了一家核聚变公司叫 Helion。2021 年的时候 Helion 曾经宣称要在 2024 年发电，可是等到 2023 年跟微软签约时，电力交付的时间表被推迟到了 2028 年；2025 年 Helion 才开始建设面向微软供电的场景；到 2026 年 Helion 说他们的原型机取得了新的里程碑。**我不知道里程碑到底前进了多少，但我知道发电时间表一直在后退。**因为现在还没有一家核聚变设施能发电，我们没有现成的参考类，但是我们可以参考类似高复杂度的项目：有研究用相似高难度项目估算，聚变的超支大约是 118%；如果你用国际级大型科研基础设施做参考类，超支甚至可能达到 220%。简单说就是**如果一个核聚变项目说要多少投资，你最好准备三倍以上的钱**。就连号称整天思考第一性原理的马斯克也逃不掉规划谬误：他承诺的特斯拉全自动驾驶几乎每年都说"明年就能实现"，拖了将近十年；当年创办 SpaceX，马斯克用内部视角做预算，认为 1 亿美元足够发射三次火箭，怎么也成功了——结果全部爆炸、公司濒临破产，最后靠砸锅卖铁凑出来的第四次发射才侥幸成功。最近马斯克又说 xAI 将很快大幅度领先所有 AI 公司，请问你信吗？

当你开始学习一门新技能，认为自己一个月就能精通、两个月就能靠它赚到钱的时候；当你准备周末搬家，认为半天就能打完包的时候；当你给新房装修设定 30 万元预算和三个月时间的时候——请你想一想前面这几个案例和卡尼曼当年那个故事。**豪情万丈的愿望不是预测，下决心努力不是预测，基于需求的计划表更不是预测。你最好先想自己过去那三次学习新技能都是在第几天放弃的；看看别人家搬家平均会出几次幺蛾子；问同小区同户型装修平均拖几天超多少钱。**把自己只当个样本，会让你的计划精确很多，而且可以让你更有底气。

很多求职者、尤其毕业的大学生，对钱没有概念，不知道该要多少工资：有些人倾向于多要，但也有很多人是要少了。**你应该考虑的不是你每月房租和生活开销需要多少钱，而是参考到各大招聘网站调研一番、找师兄师姐问一问：像你这样的学历和技能，在相应的城市大概值多少钱？**别忘了，招聘方可是早就把你这样的人给研究的明明白白。这就如同找对象：如果你想的是"像我这么优秀的人必须配什么什么样的人"这种内部虚荣，靠谱的婚介服务给你的推荐就一定会让你失望，因为它用的是参考类预测。

当然不是每个人都应该活成中位数。很多人都在某一方面与大多数人不同。**但如果你找对了参考类，你会发现你跟不再少数的人很相似。每个人都是特殊的，但你的天赋、资源和方法论是否特殊到让你不属于当前这个参考类呢？如果是那样的话，你还是不能听从内部叙事——你属于下一个参考类。**每个进京赶考的读书人都觉得自己会拯救中国，打算主导改革、匡扶正义，殊不知主考官看到的不是热血，而是你的门路、出身、年龄和品性——他们太知道像你这样开局的人最后都去了哪里了。

**具体做事不妨用内部视角给自己打气，而决策却必须用外部参考类给自己泼冷水。**
`,p1=`# 044丨超级预测：给不确定性命名，给自己打分

## 讲什么

决策判断模块：**超级预测（Superforecasting）**——把预测未来这件事从一门大师的手艺，变成了一套硬核的工程学。核心思想：概率化 + 可检验。

## 解决什么真问题

专家预测为什么那么不靠谱？因为预测成了表态、成了站队、成了情绪价值——**预测往往反映的不是那个事情如何，而是预测者自身如何。真正的预测不是表态，是算账。**

## 核心论点

- 超级预测三件事：**费米化**（把大而化之的"云状问题"拆成可操作的小问题）、**外部视角打底 + 内部视角微调**（先用参考类，再考虑特殊性修正）、**贝叶斯更新**（随着新证据不断微调概率）。
- 检验看长期表现：校准度（你说 70% 的事是不是真发生了 70%）+ 区分度（你敢不敢给出特别大或特别小的概率）。**布里尔分数**让你不能随便报概率。
- 概率化和检验构成完美闭环：**没有概率就没有标准，没有积分就没有学习。**
- 精神病学家丹尼尔·西格尔："Name it to tame it"——**不确定性一旦被拆解和命名、被写成概率，它就从一种令人恐慌的情绪，变成了可求解的工程问题。**

## 关键例证 / 金句

- 泰特洛克 20 年追踪 284 位专家、收集 8 万多条预测：**他们的准确度还不如最简单的统计算法，有时候连黑猩猩都不如**。
- 2011 年美国情报高级研究计划局预测锦标赛：泰特洛克组建的"良好判断项目"（成员都是程序员、会计师、退休大妈之类的业余选手）以大优势夺冠，**预测甚至比能接触机密信息的情报分析师更准**。
- 失败教训：2022 年俄乌战争，团队对俄罗斯全面入侵的概率一直压在 50% 以下——复盘结论：**太过依赖历史参考类，大大低估了普京的冒险意愿**。
- 2025 年泰特洛克把超级预测跟 AI 结合：单独的大语言模型预测能力不如人类超级预测者，但**人类预测者与大模型协作，准确率比对照组提高了 24%–28%**。

## 如何应用

- 别再说"差不多会了"或者"用户应该喜欢"——请说"下次模考数学上 120 分的概率是 43%"。
- 建一个 Excel 表格：左边写下你的焦虑，右边写下概率，然后定期回头去结算。
- **预测不是观点的延长线，而是自我校准的工艺。你不是在求一个神谕，你是在训练自己的判断账本。**

---

## 全文

> 以下为课程转录全文，已做去噪与语义分段；**加粗+底纹**处为核心论点与金句。

欢迎来到现代思维工具课，我是万维钢。上一讲我们讲了参考类预测，核心心法是把预测从内部视角切换到外部视角：别总觉得自己这次不一样，应该先看看那些类似的项目最后都怎样了。参考类预测是对一厢情愿的巨大修正，但还是有点粗糙。如果我在 2026 年 1 月问你：美国会不会在三个月内打伊朗？你知道怎么预测吗？你可以考察参考类——也就是历史上类似的危机最后有多少真打起来了——但什么叫"类似"？油价、选举周期、盟友态度、地区代理人动作、总统的风险偏好，这些因素都很重要，按照哪个分类呢？你会发现这次事件的具体细节可能很重要，比如说美军在中东的军力部署节奏、双方谈判窗口有没有真的关上等等。怎么把所有这些考虑都融入你的预测之中呢？

你可能想不到，这样的预测以前连专家都不知道该怎么办。**直到过去十几年间，才有人把预测未来这件事，从一门大师的手艺变成了一套硬核的工程学。**这一讲的思维工具叫做**超级预测**。它是一门技术活，但你可以借鉴其中的心法。

我们的英雄是宾夕法尼亚大学心理学与政治学教授菲利普·泰特洛克。泰特洛克早年就做过一件了不起的事情：他用 20 多年追踪了 284 位长期评论政治和经济趋势的专家，收集了 8 万多条预测，**发现这些人根本没有想像中那么会预测：他们的准确度还不如最简单的统计算法，有时候连黑猩猩都不如。**泰特洛克 2005 年出了本书叫《专家的政治判断》，书中借用哲学家以赛亚·伯林关于狐狸与刺猬的比喻，把专家分成了两类：**刺猬型专家知道一件大事**，抱着自己的一套大理论到处解释，特别容易陷入一厢情愿；**狐狸型专家知道很多小事**，愿意接受事情的复杂度，能考虑多个线索，并且随时修正自己的观点——预测水平就更好一些。但总体上专家的准确度都不高。**这些整天在媒体上谈论国家大事、以预测博关注的人，其实都不是很会做预测。**

对此你容易理解：就在美国抓捕委内瑞拉总统马杜罗、打伊朗炸死哈梅内伊之前，有多少中国专家信誓旦旦的说美国根本不敢那么做？现在他们可不会承认自己预测失败。但专家也不容易，他们背负了太多的包袱：老百姓从专家的预测中获得情绪价值，会把预测看成站队——你要说伊朗损失惨重，他们会认为你希望伊朗损失惨重；专家还会自觉捍卫某个学说——你要是主张特朗普的外交策略必定失败，那他就最好在每一件事上都失败。**预测成了观点表达，成了为基本盘站台。**人们还会把内心的脆弱带入预测之中：比如刚刚发生了一起恐怖袭击，专家和老百姓就都会成倍高估未来发生同样袭击的概率，陷入可得性偏差。**说白了，预测往往不是反映了那个事情如何，而是反映了预测者自身如何。但真正的预测不是表态，是算账。**做预测，你得抛开立场、自尊、从众心理和安全感的影响。

之前人们就想了一些办法让我们的判断更为客观：比如在内部设立红队（专门找人来拆你的假设和破你的自信），还有事前验尸（让团队先设想项目已经失败，再倒推原因）。丹尼尔·卡尼曼晚年极力推崇"决策卫生"，则是通过规范开会流程、确保大家独立判断来减少组织里的噪声。但这些方法跟我们要说的超级预测相比，可就太过笼统了。

超级预测这个词听着有点浮夸（而且还被注册了商标），但它实际上是个严肃的学术概念，代表一套方法论。事情的缘起是这样的：2003 年美国情报机构信誓旦旦的声称伊拉克拥有大规模杀伤性武器，小布什真的开战了，结果打进去把伊拉克翻了个底朝天，却什么也没找到。这可是奇耻大辱：你们这些搞情报的都怎么搞的？但是当时确实没有什么好的预测方法。为了雪耻，美国情报高级研究计划局在 2011 年举办了一场国家级的预测锦标赛，允许各个大学和机构组队参赛。比赛持续了四年，有成千上万人参加，参赛者回答了 500 多个真实的预测问题，等事情结果出来再评分——完全是实打实。

泰特洛克出手了。他组建了一支队伍叫**良好判断项目**，成员都是程序员、会计师，甚至是退休大妈之类的业余选手，而且他只给队伍进行了简单的培训。**结果这支队伍以大优势取得冠军。**比赛打到第二年，其余队伍大多已被淘汰，只剩泰特洛克团队一路留到最后。**他们的预测甚至比能接触机密信息的情报分析师更准。**泰特洛克的打法就是超级预测，他把这件事写成了一本书，就叫《超级预测》。

咱们来看看超级预测是怎么做的。**基本思想说白了就是两件事：概率化 + 可检验。**

所谓概率化就是把**你的一切预测都用概率数字表示**：不要说什么"美国很可能会对伊朗越来越强硬"，要说"到某年某月某日之前，美国对伊朗目标实施军事打击的概率是多少"。前者是感想，后者才是可结算的预测。概率化可以分为三步：

**第一步是把大而化之的"云状问题"——也就是那些边界模糊、无法直接判定对错的问题——拆成可操作的小问题。**这个思想起源于物理学家恩里克·费米倡导的估算方法，所以被泰特洛克称为**费米化**。比如领导问你"中美会不会脱钩"，这就是一个云状问题：到底什么叫脱钩？你根本无从下手。费米化就是要把问题拆解成"未来六个月内某个关税法案通过的概率是多少""两国某项核心技术贸易额下降超过 10% 的概率是多少"等等这些具体的小问题。看到这些问题的概率，你对局面才能有清晰的判断——**大问题发生的概率，是一系列小问题概率的综合**。

**第二步是用外部视角打底，用内部视角微调。**怎么得到概率？还是从上一讲说的参考类出发，看历史上类似的局面结局都是什么。有了这个基础比率，你心里就算有底了；然后你再看看你这个特定的事件在参考类中的位置是怎样的，再根据它的特殊性进行一定的修正。

**第三步是贝叶斯更新。**这一招我们前面也讲过：上一步得到的概率作为先验，随着事情的进展、局面有了新的变化，那你就在之前那个概率的基础之上用贝叶斯公式进行微调——比如今天出个利好新闻，概率就从 43% 调到 46%；明天再出个利空，又回到 41%。你没有听而不稳，也没有听风就是雨，你非常稳健。等到预测截止那天，这就是你提交的答案。

但是事情还没完，你必须准备接受检验。检验看的是你一揽子预测的长期表现，不是单道题压没压中。一个是看**校准度**：也就是你给的概率准不准——在那一系列你预测概率为 70% 的事件中，是不是真的发生了 70%；另一个是**区分度**：也就是你敢不敢给出特别大或特别小的概率——别和稀泥把所有事情的概率都定为 50%。一个最好的检验标准叫**布里尔分数**：它测量你预测的概率与实际结果之间的误差的平方。要点是它让你不能随便报概率：如果一件事的结局是没发生，而你原本预测的概率是 27%，你受到的惩罚会比你预测概率是 25% 的时候要高、比 30% 的时候要低。**概率化和检验构成了一个完美闭环：没有概率就没有标准，没有积分就没有学习。这个系统逼着预测者剥离模糊、放下 ego，对一个细节问题的概率到底是 37% 还是 38% 斤斤计较。**

为了让你有手感，咱们来一道例题。假设你在北京卷不动了，想搬去广州生活，你非常焦虑："我去广州能幸福吗？"首先我们把"幸福"这个云状问题进行费米化，拆解成四个维度：工作、居住、婚恋和生活适应，一个个算概率。拿工作来说，你真正想问的是"我能在三个月内找到一份月薪不低于现在 80% 的工作吗？"我们先看参考类：查阅同行在广州的平均求职周期和薪资水平，假设根据猎头数据你得到概率是 40%；然后再看内部视角，考虑到你在这个行业有核心专利、再加上前同事内推，把概率上调到 65%；于是你发了一圈简历，假设一周后你拿到了两个面试，那你再把这个概率做贝叶斯更新，上调到 74%——看来比较乐观。对其他几个维度照此办理，你就得到了一个"广州前景分布图"。如果四个维度中有三项概率超过了 60%，你可能就比较稳了。**你的决策将不再是人格宣言，更不是豪赌：你把人生难题变成了一个可操作、可更新的项目。**然后别忘了积分：搬到广州之后，把你得到的结果和你的预测做一番比较——当时你有没有一厢情愿的成分？好好反思，下次注意。你的预测能力将会越来越好。有研究表明，哪怕是这种短期的训练，只要积分就能显著提高一个人的预测水平。

泰特洛克的良好判断项目现在已经把超级预测做成了一项服务：你可以直接花钱请他们的团队帮你做预测。在预测美联储利率调整这件事上，良好判断项目的超级预测者从 2023 到 2025 年压过市场定价，布里尔分数大幅度领先。2025 年慈善网站 GiveWell 甚至直接掏钱，请他们去预测美国对外援助和全球健康资金的未来走向——因为这些概率会影响真金白银的资助决策。

不过他们也有失败的教训，比如说俄乌战争。良好判断项目在事后复盘中承认：在 2022 年 1 月 21 日到 2 月 10 日之间，他们对俄罗斯全面入侵乌克兰的概率一直压在 50% 以下，可是入侵发生了。**反思的结论是：团队太过依赖历史参考类——毕竟这种事情很罕见——他们大大低估了普京的冒险意愿，而且也低估了美国的情报准确度。**

2025 年泰特洛克已经把超级预测跟 AI 结合了起来。他们的研究发现：目前单独的大语言模型的预测能力不如人类超级预测者，**但是让人类预测者与大模型协作，准确率比对照组提高了 24% 到 28%**。你至少暂时还不应该把预测完全交给 AI：AI 善于搜索信息，但人擅长定问题、挑选参考类、决定哪个变量该忽略、哪个异常值该认真对待等——人拆解问题和审视框架的能力还是非常有用的。但 AI 能够进一步帮助人把自尊从判断里剥离出去。

我最大的感慨是，**超级预测让我们看到了社会科学的工程化。**古早的社会科学像文科：讲理念讲叙事，能给你一个事后解释就好；后来引入了数据变得科学化，能使用模型和统计学给你因果关系，但都只限于"一事一议"。现实世界中发生的事件往往受多个因素的影响，同时属于多个学科的叙事和模型——你找个专家，他只考虑一个模型，这哪行呢？**超级预测恰恰是使用工程化的方法，尽可能把多个关键因素纳入一个可更新、可积分的工作流，给你一个总的概率分数。**有意思的是它并没有用到太多模型：你只要忠诚于参考类和贝叶斯更新，就已经能做得很好了。**模型可以用于解释和干预，而预测可能是个更简单的事情。**预测是一门大业务，也许应该在大学里开设一个叫做"预测工程"的专业。当今世界可能不需要很多思想家和评论员，但是它需要很多调参师。

如果你曾经被专家的预测误导，我想请你先反思一下：自己真正想要的到底是表态、是祈愿，还是预测？你想要的是情绪价值还是决策价值？而如果你是一个诚意的预测者，我觉得超级预测中最神奇的一步是费米化。精神病学家丹尼尔·西格尔有句话叫 "name it to tame it"，意思是给一个情绪命名，你就能驯服这个情绪。我们这里也可以说：**不确定性一旦被拆解和命名、被写成概率，它就从一种令人恐慌的情绪，变成了可求解的工程问题。**所以别再说"差不多会了"或者"用户应该喜欢"——请说"下次模考数学上 120 分的概率是 43%"，或者"三个月后留存率超过 25% 的概率是多少"。**预测不是观点的延长线，而是自我校准的工艺。你不是在求一个神谕，你是在训练自己的判断账本。**或许你可以建一个 Excel 表格，从今天起在左边写下你的焦虑，右边写下概率，然后定期回头去结算。
`,h1=`# 045丨OODA 环：不是反应快，而是换脑快

## 讲什么

决策判断模块收官：**OODA 环（观察-定向-决策-行动）**——美国空军传奇战斗机飞行员博伊德在 1970 年代提出。它的精髓不是"反应快"，而是"换脑快"。

## 解决什么真问题

实战场合不会给你留很多时间做调研：救护车推进来一个满身是血的病人你该怎么办？股市突然崩盘你卖不卖？竞争对手发了个颠覆性的产品你跟不跟？**算好了再决策根本就没有时间。手忙脚乱是大忌，可是不反应也不对。**

## 核心论点

- OODA 四步循环：**观察**（抓变化、抓异常、抓一旦看见就会改变下一步动作的信号）→ **定向**（重新判断眼前这到底是什么局）→ **决策**（选一个当前最值得下注验证的假设）→ **行动**（对世界进行一次压力测试）。
- **要点不在于你的循环比对方快，而在于你的循环有效——最好你还能误导对方的循环。**
- 四个字母里最关键的是第二个 O（定向）：**定向不是简单的找方向，而是改叙事**——你意识到局面不是你之前想的那样，原来你应该使用的是另一个模型。
- 广义 OODA 就是在不确定中连续地下小注、做实验、收反馈、改地图。**很多行动只是拨弄一下现实：你打出一拳看看对手是隔挡还是后退，你向市场投放一个 MVP 看看消费者的反馈。**

## 关键例证 / 金句

- 博伊德跟人打 40 美元的赌：说自己能从劣势位置开始，在 40 秒钟之内翻到对手后方完成反杀。
- **中途岛海战**：尼米兹让中途岛发一份明码电报说岛上淡水设备坏了缺水，日军随即发报"AF 缺水"——尼米兹由此确认 AF 就是中途岛。而南云忠一在发现美军航母后犹豫不绝，换鱼雷换炸弹来回摇摆，甲板上一团混乱——一个积极刷新地图，一个把自己困在旧地图里。
- **Zara 不是服装公司，而是一家披着时尚外衣的高频数据处理与物流响应公司**：三周之内完成从重新设计到新品上架。
- 乌克兰战场：前线每一次被干扰和每一次轰炸都变成了后方机房的预测误差，**现代战争中决策速度本身就是一种武器系统，AI 时代赢家是学习链最短的一方**。

## 如何应用

- 学习上别观察到考差了就"再多刷 200 道题"——先定向：做错的题到底是审错、概念错，还是时间分配崩了？
- 工作上别看到数据下滑就是加班加功能加汇报——先做一个最小探针，看问题到底出在产品、流程还是组织协同。
- 夫妻吵架最有用的 OODA 不是立刻反击，而是先问一句：**"对方眼里现在到底是个什么事？"**可能你以为你们在争事实，对方觉得你们在争关系。
- **"大部分人只是闷头走路，有些人偶尔抬头看天，而有极少数人始终都在密切观察、努力重新审视地图。"**

---

## 全文

> 以下为课程转录全文，已做去噪与语义分段；**加粗+底纹**处为核心论点与金句。

欢迎来到现代思维工具课，我是万维钢。我们已经讲了很多个关于决策和判断的心法，作为这个模块的最后一讲，咱们说怎么把决策判断和行动结合起来。

实战场合不会给你留下很多时间做调研：你不能指望你的决策一上来就是正确的，而且你必须迅速做出反应。就好比你是急诊室医生，救护车推进来一个满身是血、意识模糊的病人，家属在旁边尖叫、心电监护仪疯狂报警，你该怎么操作？又或者股市突然崩盘你卖不卖？竞争对手发了一个颠覆性的产品你跟不跟？**算好了再决策根本就没有时间，因为你并不掌握全部的信息。手忙脚乱是大忌，可是不反应也不对。怎样才是有章法的应对呢？**

这一讲的思维工具叫 **OODA 环**，意思是观察（Observe）、定向（Orient）、决策（Decide）、行动（Act）这四个动作的循环。你可能在别的场合听说过 OODA，很多人把它理解成反应快。**但 OODA 的精髓其实是换脑快**：也就是把你抛到任何一个情景之中，你能不能迅速判断这是什么局、对方要干什么、什么是重点、什么是噪音，建立你的认知地图。每循环一轮就是把地图刷新一遍。**谁的地图刷新率更高，谁就能在混乱里保持主动。不是快手赢慢手，而是新脑子营救旧脑子。**

OODA 最早是美国空军传奇战斗机飞行员、被誉为整整一代军官的战术导师的约翰·博伊德，在 1970 年代提出来的。博伊德是在空战教学中悟出的这番道理：他喜欢跟人打 40 美元的赌，说自己能从劣势位置开始，在 40 秒钟之内翻到对手后方完成反杀。OODA 就是博伊德的战术秘诀。不过博伊德想的可不只是空战，而是一般意义上人在对抗中如何持续修正理解、争夺主动权。

简单说，OODA 把对抗性博弈拆解成了四个循环往复的步骤：**一，观察（Observe）**：看到对手在哪、环境发生了什么变化？**二，定向（Orient）**：搞明白得到的这些信息意味着什么？**三，决策（Decide）**：基于刚才的判断，我决定下一步怎么做？**四，行动（Act）**：拉操纵杆、开火或者转向。

就拿拳击比赛来说，一个最基本的 OODA 环就是：你看到对手左肩微微一沉，这是观察；你的大脑迅速匹配经验，判断他要出左勾拳，这是定向；你决定下蹲躲避打他右肋，这是决策；最后你弯腰出拳，这是行动。

那你说这也太简单了，无非就是看一看、想一想、做一做，以快打慢呗？没这么简单。**要点并不在于你的循环比对方快，而在于你的循环有效——最好你还能误导对方的循环。**想象两个拳击手：甲出拳很快，乙没那么快，但他很会改写对方的判断。前几次试探里，乙总是假装进攻打左侧肋部，让甲形成一个稳定预期；等甲的注意力和重心都往左移，乙突然换节奏，一步切进中线直接打头。**乙不是赢在了最后那一拳，而是赢在他误导了甲的 OODA 中的定向那一步——乙把甲的脑子带进了错误地图。**这就是为什么一轮 OODA 不够，必须反复循环：就算之前的判断是对的，下一秒可能就不对了。

用现代认知科学的视角看，OODA 环简直是再自然不过。我们前面讲过预测加工理论：大脑本质上是一个预测机器，我们不是被动的接收世界的信息，而是在脑子里先有一个关于世界的模型，然后用这个模型去预测会发生什么；当现实和预测不符的时候，我们就必须更新模型——这不就是一轮一轮的观察和定向吗？我们还讲过自由能原理中的主动推断：行动不是感知之后的附属品，**行动本身就是获取证据和减少预测误差的方式**——不是先把世界看清楚再行动，而是带着模型行动，用行动去采样世界。这不就是决策和行动在开启下一轮观察和定向吗？**OODA 的深意不是要做一次决策、采取一次正确，而是面对时刻都在变化的局面，我们要边行动、边学习、边修正。**

博伊德后来升级了 OODA 学说，把其中的 D（决策）更多的解释成假设，把 A（行动）更多的解释成对世界进行一次压力测试。博伊德的完整版本是一个带着前反馈、隐性引导和环境互动的开放系统。我们简化一下：**广义的 OODA 环其实是在不确定中连续的下小注、做实验、收反馈、改地图。**第一，Observe 不是多看几眼堆信息，而是抓变化、抓异常、抓那些一旦看见就会改变下一步动作的信号；第二，Orient 不是转个身找方向，而是重新判断眼前这到底是什么局；第三，Decide 不是宣布真理，而是选一个当前最值得下注验证的假设；第四，Act 不是结局，而是表态。**外行以为高手的每个行动都是为了取得什么进展，但 OODA 提倡很多行动只是拨弄一下现实**：你打出一拳看看对手是隔挡还是后退，你向市场投放一个 MVP 看看消费者的反馈。这种拨弄感才是 OODA 高手的作风。

咱们来看一个经典案例：**中途岛海战**。1942 年春天的太平洋战场，美军破译了日本通信，知道对方要袭击一个代号为 AF 的目标——这是观察。尼米兹猜测 AF 有可能是中途岛，但是他不敢确定——这是定向。于是尼米兹接受部下建议决定验证一下——这是决策。中途岛发出一份明码电报说岛上的淡水设备坏了、缺水——这是行动。这个行动引发了下一轮 OODA：日军发电报"AF 缺水"——看来 AF 就是中途岛，这是美军的新观察；尼米兹明确了日军要打中途岛，这是定向；尼米兹决定准备伏击日军，这是决策；美军航母被提前部署到中途岛东北方向，这是行动。

再看战斗当天的日军：南云忠一命令舰载机发起空袭，目标是中途岛机场和设施，他根本没想到美军航母就在附近。第一波攻击后有报告说中途岛上未被彻底压制、需要第二波——这是南云的第一个观察；南云并没有改变对局面的理解，认为应该继续压制中途岛——这是定向；南云下令准备第二波攻击——这是决策；日军飞机返回航母加油，再次挂载对陆地攻击炸弹准备出发——这是行动。就在这时候，日军侦察机报告发现美军战舰，然后又说对方可能有航母——这是第二轮观察。南云犹豫不绝：如果专心对付美军航母，就得让战机把挂载的对地攻击炸弹换成反舰的鱼雷和穿甲弹，这会很麻烦——这是失败的定向；南云来回摇摆，一会想坚持打中途岛，一会想优先打航母——这是决策；日军航母甲板上一团混乱，有的飞机在改挂弹、有的回来、有的在等待起飞窗口——这是行动。这就让美军有时间侦查到日本航母的位置，开启下一轮 OODA 全力攻击航母。剩下的就是历史了。**一个积极刷新地图、让行动产生新信息；一个把自己困在旧地图里、让行动制造负担。最后的胜负不是很合理吗？**

在现代指挥控制体系中，OODA 环已经不再仅仅是对一个飞行员或者指挥官的战术要求，而是上升成了对全局的综合性要求，用美军的话说就是要争取**决策优势**：谁能在这个循环里不断提出更好的假设、做更猛的压力测试，然后更快的重塑战场的认知，谁就掌握了战争的至高点。**OODA 还是一个组织把经验变成更新速度的能力。**过去比的是个人能不能快速换脑，今天比的是传感器、数据、通信链、算法、授权机制和前线反馈这些能不能一起快速换脑。

咱们说一个最新的例子，乌克兰战场。乌军和俄军的很多对抗都围绕无人机展开，而乌克兰把战场变成了一个通过 OODA 对无人机升级的平台。根据《经济学人》2026 年 3 月的报道，乌克兰正通过一个安全平台向开放战场数据，用来训练无人机的 AI 系统：前线每一次被干扰和每一次轰炸和射击离，都变成了后方机房的预测误差——这是观察；通过分析数以百万的图像，AI 更新了对俄罗斯电子战环境的理解——这是定向；基于这种高频的定向，后方的工程师和指挥官会迅速做出技术的决策；然后乌克兰的前线小队带着刚刚刷入新固件、更新了算法的无人机，在真实的战火中进行测试和微调，又把反馈数据直接传给厂商——这是行动，并且开启下一轮 OODA。**现代战争中，决策速度本身就是一种武器系统；而在 AI 时代，赢家恐怕是学习链最短的一方。**

你大约能看出来，OODA 四个字母里最关键的是第二个 O，也就是**定向**。博伊德早在 1987 年就说过：**定向是整个 OODA 循环的阵眼。**在我看来，这个定向绝不是简单的找方向或者产生一个什么念头，而是**改叙事**。改叙事才是真正的换脑子：定向是你意识到局面不是你之前想的那样，原来你应该使用的是这个模型。定向给了你归纳偏置，你才有接下来的决策和行动。博伊德说定向是由四种力量共同塑造的：遗传背景、文化传统、既往经验和正在展开的情景。换句话说，同样一条信息落到不同人脑子里会长出完全不同的意义。或者你也可以说定向就是给事件定性：比如职场上一个项目延期，你把它定向成"同事不努力"，和你把它定向成"这个需求本身就有问题"，你后面的决策和行动会截然不同。**定向是指挥官最高级的本事。**

咱们再看一个商业上的案例。服装销售商 Zara 被认为是快时尚的巨头，仿佛能预测潮流一般。但与其说它是一家服装公司，还不如说它是一家披着时尚外衣的高频数据处理与物流响应公司：在自家门店获得顾客反馈之后，三周之内就能完成从重新设计到新品上架，靠的正是 OODA。它的一个典型循环是这样的：Zara 推出一款春季短夹克，上架一周后信号传回总部——有的门店卖的还可以，有的门店不行，说顾客主要嫌弃版型和长度，这是观察。别的公司对此的定向可能是把数据压缩成一句话"这款卖的一般"；但 Zara 的定向保持了有效的颗粒度：不是"这款不行"，而是"它在不同气候、不同穿搭习惯的门店顾客群里意义不一样"。那么接下来的决策和行动就不是盲目砍掉或者胡乱补货，而是让设计准备一个更贴合寒冷地区需求的变体：原本卖得好的门店继续卖原版，找几个更适合卖变体的门店卖变体——这就是一次低成本的市场实验。第二轮反馈回来：变体在原先疲软的门店开始动了，而原版在另一批门店仍然卖得更好，这是新的观察；看来分版本是对的，这是新定向；于是决策和行动是让不同门店铺不同版本。而且还有第三轮 OODA：等 Zara 发现这款夹克的销量有一点下降，就会撤场——让它在趋势变坏之前优雅的退出。**完美预测是不可能的，但 Zara 能控制自己脑子的刷新速度。**

我们在日常生活中也可以使用 OODA，关键还是定向。在应试教育中学习：别观察到考差了就"我再刷 200 道题"，应该先定向——自己做错的题到底是审错、概念错，还是时间分配崩了？工作上别可以看到数据下滑就是加班、加功能、加汇报：先做一个最小探针，看问题到底出在产品、流程还是组织协同。**很多团队不是缺执行，而是缺一次能逼真相现形的小行动。**夫妻吵架，最有用的 OODA 不是立刻反击，而是先问一句："对方眼里现在到底是个什么事？"可能你以为你们在争事实，对方觉得你们在争关系。个人健康可以每周来一次 OODA 小循环：观察睡眠和精力，定向出最关键的单一变量，只改这一个做七天，下周也许换成别的变量。

总结来说：**OODA 环不是反应快，而是换脑快；不是永远对，而是及时改；不是求定论，而是先下小注；不是做完一步，而是让每一步都带回下一步的情报。**大部分人只是闷头走路，有些人偶尔抬头看天，而有极少数人却是始终都在密切观察、努力重新审视地图。他们会用各种方法主动刺探，以期抓住微小的机会，把局面带入自己的节奏。
`,g1=`# 046丨认知负荷理论：因为文具多，所以是差生

## 讲什么

现代教育心理学中最硬核、最具工程学美感的心智模型。认知负荷理论回答一个根本问题：**学习失败，到底是因为大脑的"硬盘"不行，还是"内存"不行？** 答案是内存——工作记忆带宽极其有限，学习就是信息挤过这道窄门的过程。

## 解决什么真问题

破解"花钱就能学好"的幻觉。秘鲁政府给每个孩子发一台笔记本电脑（拉丁美洲 2006–2012 年共发放近 1000 万台），十年大规模随机对照研究结论：**对学业成绩没有任何显著正面影响**，唯一提高的技能是操作电脑。买电脑、上补习班、买漂亮文具，都是把学习当宏观问题、硬件问题——而学习其实是微观的神经重塑问题。

## 核心论点

- 人脑长期记忆容量近乎无限，真正的瓶颈是**工作记忆**：普通人最多同时处理 4–7 个信息元素。
- 认知负荷分三种：**内在负荷**（材料自带复杂度）、**外在负荷**（无关信息抢戏）、**增益负荷**（把知识转化为长期记忆的有效努力）。
- 有效学习 = 尽量减少外在负荷，把带宽留给内在负荷。
- 优等生学得快不是脑子更快，而是**脑子里的压缩包（图式）更多**。图式把多个元素打包成一个整体，一个元素只占一个内存槽位。
- **差生文具多**：本来就缺图式导致内在负荷过载，老师再讲不清楚、家长再添乱、花哨文具提供虚假控制感——干扰越多，越学不进去。

## 关键例证 / 金句

- 秘鲁"每个孩子一台笔记本"：电脑是分散注意力的东西，它增加了外在负荷。
- 方程 \`3×(x+2)=15\`：优等生有分配律图式，一眼看穿；差生看到的是散碎元素，括号是什么意思？要乘进去吗？
- 一份材料有多难，不取决于它客观有多少信息，而取决于**它在你的脑子里算多少信息**。
- 有效教学不是把山峰削平，而是**给孩子建立攀登高峰的梯子**。
- 学习不是把知识一条条搬进脑子，而是脑子压缩和调用图式的过程。

## 如何应用

1. **管理内在负荷**：内容分段、前置知识预热、部件先自动化、先给局部结构再整合，让学生站稳一个台阶再看下一层。
2. **直接教学**：对新手，最高效的教法是"黑板左边一道完整例题，右边一道结构相同只改数字的练习题"，照例题做练习，这是把图式写入大脑最快的方式。等熟练了再给灵活度——指导淡出。
3. **消除外在负荷**：课堂搞戏剧性多媒体、满屏装饰动画、花哨文具，都不是教学创新，是**认知污染**。给图配口头讲解，好过图像配满屏文字。
4. **优差生区别对待**：低先验知识学习者受益于高支持教学（多提示、多例题、少开放）；高先验学习者要吃饱内在负荷（少重复、快淡出、多迁移）。
5. **AI 的正确用法**：把 AI 当作业神器会外包掉建构图式的过程，神经元没经历负荷就形不成连接；把 AI 严格限制为"导师"（拆解小图式、排除无关负荷、一步步引导而不直接给答案），学习效果高于传统课堂。

---

## 全文（清洗后的课程转录，重点加粗+底纹）

欢迎来到现代思维工具课，我是万维钢。从今天开始，我们进入这个课程的第三个模块：**学习和教育**。

想象你是一个发展中国家的教育部长，手里突然多了一大笔预算，你决心用这笔钱提升边缘地区孩子的学习水平，你应该怎么做呢？秘鲁政府的做法是给孩子买电脑。他们在农村推行了"每个孩子一台笔记本电脑"项目。电脑是现代世界的生产力标配，穷人家孩子用不起，现在政府免费送你，这多好呢？但是有的学者不这么看——电脑好是好，但它对学习真有帮助吗？

其实秘鲁这个项目是一个大规模教育实验的一部分。2006 到 2012 年间，拉丁美洲和加勒比地区的 20 个国家总共发放了将近 1000 万台笔记本电脑。经济学家和教育学家就此进行了超过 10 年的大规模随机对照跟踪研究。2025 年答案揭晓：**不论是短期还是长期，发电脑对孩子们的学业成绩都没有任何显著的正面影响**。收到电脑的学生，数学和阅读成绩都没有改善，他们升年级的比例不但没有上升，反而平均下降了一个百分点。这个研究中，电脑让孩子唯一提高的技能就是操作电脑的技能。

我觉得这简直是个现代预言。**买电脑这个动作，特别像我们的学校和家长对教育的理解**：你认为学习是一个宏观问题，甚至是一个硬件问题。孩子学习不好怎么办？我花钱啊，上补习班、送去更好的学校、改善学习环境、提供更好的设备、再多买点文具——花钱了我就安心了。但学习其实是个微观问题，学习是神经重塑，你必须深入到神经处理层面去考虑问题。当一个孩子坐在书桌前，那个叫知识的东西到底是怎么钻进他大脑里的？

作为教育模块的第一讲，咱们说现代教育心理学中最硬核、也最具工程学美感的一个心智模型，叫**认知负荷理论**。我敢打赌绝大多数老师，包括一些号称教育专家的人都没听说过认知负荷理论，但这可是教师和家长需要了解的**唯一最重要的理论**。理解了它，你就知道为什么大多数教育操作都是瞎胡搞。

认知负荷理论最早是澳大利亚教育心理学家约翰·斯威勒在 1980 年代提出来的，现在经过他本人和众多学者不断完善。斯威勒的问题是：如果一个人学习总学不进去，所谓脑子不够用，你说这是因为他大脑的硬盘不行还是内存不行呢？首先硬盘是不可能出问题的——**人脑长期记忆的容量几乎是无限大的**。你读多少本书、记多少个单词、掌握多少个技能，都不用担心硬盘装不下。学习新东西的瓶颈主要是在内存上。所谓内存就是大脑的工作记忆，它的带宽极其有限，一般认为普通人最多只能同时处理四到七个信息元素。就这点信息，你要是不及时写入硬盘，它们就会被你忘记。

**学习的本质，就是把外部的零散信息在狭窄的工作记忆里进行加工，然后打包存入长期记忆。** 认知负荷理论的核心洞见是：学习失败并不是因为大脑的硬盘存不下，而是因为新信息通过工作记忆这道窄门的时候堵车了。

当信息涌入大脑的时候，工作记忆所承受的总压力就叫认知负荷。它一般被分为三种。第一种是**内在负荷**，是学习材料自带的复杂度，也就是当前任务中有多少元素必须同时联动处理。第二种是**外在负荷**，是那些跟当前任务无关的信息在强行抢戏、给大脑制造的负荷——有环境噪声，有无关的内容，还包括老师糟糕的讲法带来的困扰。第三种是**增益负荷**（有时翻译成生发负荷），是指大脑把知识转化为长期记忆的那部分有效努力，也就是你的大脑一边压制外在负荷、一边操作内在负荷，真正干活的那部分。现在更新的认识认为没必要把增益负荷单独算做一类。简单说：**要想学习有效，就得尽可能减少外在负荷，把带宽留给内在负荷。**

这你就理解了，为什么给孩子买电脑不能提高学习成绩——因为电脑是个分散注意力的东西，它增加了外在负荷。

那到底为什么有的孩子学东西特别快，有的孩子就学不进去？难道是他们的工作记忆大小不同吗？也不是，人的工作记忆差距并不大。认知负荷理论还有一个特别关键的概念叫**图式**。这个重要的洞见是：大脑的长期记忆里存的那些知识并不是零散的信息碎片，而是一种叫做图式的东西。**图式是把多个相关元素打包成一个整体的认知结构**，你可以把它理解成知识组件、思维块，或者说是压缩包。

比如说在认字的小孩眼中，"中华人民共和国"是七个独立的元素，这么多字一起出现在他面前，瞬间就能占满他的工作记忆带宽；但对于你来说，这七个字早就被打包成了一个叫"中华人民共和国"的单一图式，它在你的眼中只占用一个内存槽位。

为什么差生学不进去？这一看就明白。因为差生头脑里没有足够多的图式，他看到的是**一大堆碎片化的信息**，导致他的认知负荷太高了；而优等生因为早就拥有相关的图式，同样的信息在他眼中是一大块一大块的，他处理的元素就比较少，就不会出现认知过载。比如老师在黑板上写一道方程：3 乘以括号 x 加 2 等于 15。优等生脑子里已经有分配律一类的图式，他看见题就会自动调用那些图式求解，甚至还挺无聊。可是差生没有那些图式，他看到的每一个都是单独的元素，这些元素瞬间塞满了他的工作记忆：括号是什么意思来着？要把 3 乘进去吗？还是先把 2 减掉？他的内在负荷已经过载。

所以在认知负荷理论看来，**一份材料到底有多难，不取决于它客观上包含多少信息，而取决于它在你的脑子里算是多少信息**。你有相关的图式，它的信息量就很少；如果你的图式不够，它的信息量就会很多，导致认知过载。换句话说，优等生学得快不是因为脑子更快或者更大，而是因为脑子里的压缩包更多。这也可以说是学习的复利效应：**你会的图式越多，学习新东西就越快**。正如你读过的书越多，你读书的速度就越快。

由此说来，学习不是把知识一条条搬进脑子，而是脑子压缩和调用图式的过程。

为什么民间有个说法叫"差生文具多"？这位同学本来会的图式就少，所以内在负荷过载；再加上老师又讲不清楚，甚至还胡乱加戏，在黑板上用五颜六色的粉笔画可爱的人物提供外在负荷……然后爸爸一看怎么还学不明白，一通大吵大闹，继续追加外在负荷。接下来妈妈说孩子需要帮助，于是给买了一大堆花里胡哨的荧光笔、错题本和便利贴——这些文具提供了虚假的控制感。孩子于是用三种颜色在课本上画出重点，仿佛这样就能让知识进入脑子。你说这还怎么学习？**可以说正是因为干扰因素太多，差生才是差生。** 真正的学习需要清爽的信息环境。

有效的教学最好把外在负荷全部取消，应该用最简单的讲解尽可能降低内在负荷，应该是给工作记忆减负、给长期记忆铺路。在这个视角下，我看很多课堂根本就不是在教学，是在搞**行为艺术**，在给家长提供情绪价值。

我调研了一番，从认知负荷理论中提炼出四个有效教学的心法。

**第一个心法是管理内在负荷。** 面对差生，老师本能的想法是降低难度。但这里不是难度的问题，而是带宽的问题。有效教学不能是把山峰给孩子削平，而是要给孩子建立攀登高峰的梯子，也就是精心安排图式进入大脑的进度。如果学生脑子里还没有足够的相关图式，你就别一上来就让他做综合大题，你必须先把复杂知识拆解成一个个小图式，让他先练会了再说。内容要分段、前置知识要预热、部件要先自动化、先给局部结构再整合，让学生站稳一个台阶，再给他看下一层。人们常说差生的问题在于基本功，其实就是之前的图式没有打牢。**图式才是根本。有效教学不是降难度，而是排兵布阵。**

**第二个心法是直接教学。** 过去几十年间教育界流行一种非常浪漫的"探索式学习"，主张老师不要直接给答案，要让孩子在真实情境中自己摸索、自主发现规律。可是有大量研究一再证明，这种把孩子当科学家的教法效率极低。因为认知负荷：你给新手一道题，让他自己探索，他的大脑要同时干很多事——盯住题目、猜目标、搜索步骤、试错、比较当前状态和目标状态，还得揣摩老师到底想让他学什么。他的内存都消耗在搜索路径上了，哪还有剩余算力去总结规律呢？其实对于学校里的那些知识来说，最有效的教学方法就是**直接教**、给明确的指导。研究证明最高效的教法是：黑板上左边是一道老师给出完整解题步骤的例题，右边是一道结构完全一致、只是数字不同的练习题，让学生照着例题做练习，就这么简单粗暴——这是把图式写入大脑最快的方式。等学生把这个图式掌握熟练了，你再给他灵活度，逐步走向独立，这个过程叫**指导淡出**。不是不让孩子探索，但教学就是教学：先把搜索成本降下来，才能把理解难度提上去。

**第三个心法是消除外在负荷。** 人们常说学习不好是因为注意力不集中，可你也得创造条件让人能集中注意力才行。聊天、玩电脑当然是分散注意力的行为，可是家长给买一大堆文具、一会送吃的、一会过来监督一下，不也是在制造外在负荷吗？在认知负荷理论看来，连老师在课堂上搞的那些戏剧性的多媒体教学手法，常常也是无效且有害的：幻灯片上搞一堆装饰、动画飞来飞去、图在左边解释在右边、老师嘴里讲一句屏幕上再打一遍同样的话、视频不给暂停、作业平台上的按钮比题目还多——**这些都不是教学创新，是认知污染**。难道学习内容本身还不够学生看的吗？不要逼着学生的眼睛一会看向屏幕左边一会看向屏幕右边。给图加上口头讲解，比图像配满屏文字效果更好。老师玩点花火有时候能激发兴趣，但花火不是教学。

**第四个心法是优等生和差生要区别对待。** 这不是给人贴标签，更不是说差生脑子差。差生将来也可以成为优等生，但是你现在拥有的图式不够。2025 年的一篇荟萃分析论文结论非常清楚：**低先验知识学习者更受益于高支持教学，高先验知识学习者更受益于低支持教学**。对差生，老师必须多给显性的提示、多讲例题、多做同样类型的练习、控制好节奏、少跳跃、少开放、少自行搜索；而优等生已经拥有相当多的图式，你就得设法让他们的内在负荷吃饱才行，不然他们会感到无聊。所以对优等生要少重复、快淡出、多给变化题型、多做迁移、给一定的探索。

这样说来，一个班好几十人坐在一起听老师讲，是一种效率极低的教育方式。教育应该个性化，那我们有什么办法呢？**你可以使用 AI。** 坏消息是有好几项研究都发现 AI 在伤害学生的学习能力——现在很多学生把 ChatGPT 当写作业神器，结果他们在突击测试中的成绩显著下降。这是因为学生把原本属于增益负荷的建构图式过程直接外包给了 AI，大脑没有经历过负荷，神经元就没有连接，图式就没有形成。好消息是，如果你把 AI 的角色严格限制为导师——它只负责把复杂知识拆解成小图式、排除无关的外在负荷、一步步引导你，而不是直接给你答案——那么使用 AI 的学习效果会高于传统的课堂学习。

很多人认为学习是一种苦行。但**学习其实是个工程问题，教学就是给大脑编程**。认知负荷理论告诉我们，人的大脑是一个极其受限的生物装置。你不能强行给它灌输什么东西，你必须尊重它的输入带宽，一点一点、按照一定的节奏，帮它把知识变成一个个图式。就算脑机接口将来再发达，我也不太相信人可以直接下载一个什么技能，因为神经元是肉长的。这是有关学习和教育最重要的一条硬约束。
`,m1=`# 047丨ICAP 框架：最高效的学习方法

## 讲什么

认知科学家对"什么才算真正动脑子学习"的当前科学理解。ICAP 是四种学习动作的缩写：**互动（Interactive）、建构（Constructive）、主动（Active）、被动（Passive）**。核心结论一句话：**学习效果 I > C > A > P**——不是越忙越好，不是越热闹越好，是越能生成新知、越能得到反馈纠错越好。

## 解决什么真问题

拆穿"伪努力"。绝大多数人的所谓努力都停留在被动听讲和机械抄写层面：课堂上直愣愣盯黑板 45 分钟是彻底的 P，记笔记也不过是 A。家长监督孩子写作业直接讲答案还是 P，公司大会领导侃侃而谈、员工频频点头并没有达到 A。这套框架给了你一把尺子，衡量自己到底是在学习还是在自我感动。

## 核心论点

- **P 被动**：默默听讲、阅读、看视频，没有任何外显动作或深度加工。长期记忆留存率极低，信息像水流过沙子。
- **A 主动**：有动作但只是初步操控，不产生新信息。朗读、抄笔记、画重点、暂停回放都算 A。会带来"顺滑感"的能力错觉——你以为掌握了，其实只是熟悉文字的排列组合。
- **C 建构**：必须生成超越原始给定信息的新知识或新表征。用自己的话总结、画思维导图、提出问题并找答案、脑补因果链。**C 的要害是自我解释**——只有这样才能逼大脑把已有图式与新信息缝合。达到 C 才算真正的学习。
- **I 互动**：至少两人围绕同一认知对象产生实质性的建构性对话。有来有回、有人补充、有人质疑、有人纠错——思想的乒乓球。不只是讨论，而是共同把学说重新构建一遍。
- 这不是打怪通关，而是**资源配置**：内容全新时先老老实实做 P 和 A；有先验知识储备就直接上 C 和 I。

## 关键例证 / 金句

- 分子结构学习对照实验：P 组只听讲，A 组连线匹配，C 组自己推演画出，I 组画完互相检查质疑讨论。结果严格符合 I > C > A > P，尤其推理题上 I 组显著压过 C 组。
- 德国 170 节高校课堂统计：80 分钟一节课，P 占 41.5 分钟、A 占 12.5 分钟、C 只有 3.3 分钟、I 只有 4.5 分钟。
- 费曼学习法相当于 I 和 C 的中间地带，但以 C 为主——因为当你给别人讲解时，对方未必真听懂了。**要让费曼学习法爆发威力，听你讲的那个人最好是个圈内人，能对你提出质疑和反驳。**
- 高手都是以自学、单独练习和私下讨论为主。
- **P 是听经，A 是抄经，C 是著书，I 是论道。**

## 如何应用

1. 用 ICAP 校准自己的学习：听课只是 P，看完视频用自己话总结是 C，找人互相提问、互相挑错、辩论达成共识才是 I。
2. 节奏良好的学习像换挡：老师讲 10–15 分钟就停下，让学生用自己的语言总结核心原理、做几道练习题进入 C，一节课最后来个互动达到 I。
3. 复习备考阶段，学习应该完全由 C 和 I 组成——提取练习、自我解释、讨论对错，而不是反复重读。
4. 教育者：多提问、让学生多教；家长鼓励孩子互动；公司搞项目复盘和红蓝对抗、甚至激烈辩论。
5. 万维钢呼吁：**基于认知负荷理论和 ICAP 框架，做一个为每个学生量身定制学习进度和学习任务的 AI 学习系统**，就像"第十班子的太子太傅"。

---

## 全文（清洗后的课程转录，重点加粗+底纹）

欢迎来到现代思维工具课，我是万维钢。今天是学习教育模块的第二讲，这一讲的思维工具叫做 **ICAP 框架**。

作为修仙小说的爱好者，我发现网络作家对修仙这门明明是虚构的业务，已经达成了某种共识：大家说的修行方法都差不多，无非是找个灵力充沛的洞府打坐，脑子里观想某张神图，保持这个姿势就行。当然你需要天赋，但天赋只体现在你这副身体是否对灵力开放；你需要一门好功法，不过功法是对灵力走法的预先编程，你自己不需要操心；你还需要努力，而努力只体现在你能长时间的坚持在那打坐——而且不用太担心，只要灵力充沛，你睡个觉都能长修为。简单有效，只论资源和天生根骨。可我说，如果修仙修的都是这种笨功夫，名门大派肯定早把名额垄断起来了，你一点机会都不会有。

很庆幸，**真实世界里的学习要平等得多**：学习资源近乎免费，每个人的认知负荷瓶颈都差不多，天赋高的人也说不清自己是怎么操作的，而且努力也不一定见效。这才让权贵人家也有很多普娃，让每年都有些平民子弟得以进入名校。把学习简化为天赋加努力加高考志愿，特别符合老百姓的认知。我们总以为只要脑子够用、只要愿意悬梁刺股的花时间，成绩自然就会好；至于在那个漫长的学习时间里你具体是怎么操作的、你的大脑经历了什么，可没人计较。

但**学习其实是个认知工程问题**。上一讲我们说了认知负荷理论，它说的是大脑的硬件规律，教我们如何控制信息流的输入。那么在具体操作层面，我们到底应该用什么姿势把零散信息组装成长期记忆里的图式呢？这一讲的思维工具代表了认知科学家对学习方法的当前科学理解，叫做 ICAP 框架。理解了它，你会发现身边绝大多数人的所谓努力都是极其低效的伪学习，你会知道真功夫到底是怎么练的。

ICAP 框架最早起源于亚利桑那州立大学认知科学家季清华（Chi）2009 年提出的学说，后来由他和合作者在 2014 年完善成现在的系统。在当今教育学和认知科学界，ICAP 是一套用来鉴定你到底是不是在真正动脑子学习的**最高检验标准**。

学习是发生在大脑内部的微观神经过程，难以直接观测——毕竟你不太可能给学生的脑袋上插满电极。季清华的研究思路是：既然看不见大脑里面，那我们就去观察学生在外部做了什么动作，把这些行为精细分类，以此推测和量化大脑内部的认知参与强度，再跟学习效果比较。

所谓 ICAP 就是互动、建构、主动、被动这四种学习动作。P 是被动（passive）：学生只是朝向材料接收信息，没有其他可观察的学习动作。A 是主动（active）：有动作，但只是初步操控，不产生新信息。C 是建构（constructive）：生成了材料里原本没有的新信息。I 是互动（interactive）：与他人进行双向的、有实质内容的思想交锋与共创。

比如同样是观看一段教学视频：P 被动是眼睛盯着屏幕全程看完、觉得自己懂了；A 主动是一边看一边记笔记画重点，为此有时候还会暂停和回放视频；C 建构是看完视频之后用自己的话把所学的知识总结了一遍，还设计了几种应用场景；互动则是还要跟人讨论、互相提问、互相解释、互相挑错，通过辩论达成共识。

季清华团队和其他研究者做了大量的研究，结论非常清晰：**在学习效果上，I 大于 C 大于 A 大于 P**。不是越忙越好，也不是越热闹越好，是越能生成新知、越能得到反馈纠错越好。

但被动学习也不是没有用。咱们从低到高按照 PACI 的顺序一个一个拆解其中的心法。

**P 被动的严格定义**是学习者在接收信息时没有任何外显的物理动作或深度的信息加工。说白了就是默默的听讲、阅读文字或者看视频。学生全身贯注的听老师讲，家长和领导认为这就很不错了，殊不知这是长期记忆留存率极低的学习方法。认知心理学有个"加工深度理论"说，记忆的持久度往往不取决于信息输入的频次，而是取决于大脑对信息加工的深度。只是被动接收而没有加工，信息就像水流过沙子一样，从你的大脑中路过之后几乎什么都没留下。但是 P 也不是什么用都没有：如果是第一次接触一个新知识，你总得先听个大概再琢磨别的，这里 P 就是速度最快的接收方式。我们前面讲过新知识需要直接教学，就是老师一上来直接把知识讲给学生，不然认知负荷就太高了。成年人平时听播客、看纪录片、在得到听课，大多也是 P，在忙碌的生活中这就是最方便的学习方法——**但你千万别以为这就是学习**。

**A 主动就比 P 高一级。** 它是指学习者不仅在接收信息，还伴随针对学习材料的物理动作，或者对既有信息进行了直接的操控。从大声朗读、抄课堂笔记，到暂停视频、拖动课件、用五颜六色的笔画重点，这些都算 A。你动起来了，你的注意力在主动聚焦，你有一个抓手，所以你的学习效果比 P 好。但是你没有产生超出原材料的新信息：你能形成浅层理解，但战战兢兢生怕出错，只敢照搬；你一遍又一遍的复习，可你只是温故而不能知新。老师经常赞赏那些笔记做得特别工整、在书上画满了线、反复阅读的同学——他们的态度绝对好，但**这种服从意识其实是一个信号，它通往平庸**。把一段书背很多遍，你会有一种顺滑感，这种顺滑感会给你一种能力错觉，以为自己已经掌握了。殊不知你只是很熟悉那段文字的排列组合而已，你根本没掌握文字背后的知识。

**掌握的分水岭、能让你跨越及格线摸到高手区边缘的，是 C 建构。** 它的严格定义是：学习者必须生成超越了原始给定信息的新知识或新表征。说白了就是你生成了材料里原本没有、但对你的理解至关重要的新内容。比如你用你自己的话总结了书本的大意、画出了思维导图、给自己提出问题并且找到答案、看例题的时候会脑补书里没写出的因果链、还做了一些练习题力求灵活运用。季清华认为 C 的要害是**自我解释**：完全用自己的话解释一个概念。只有这样才能逼着你的大脑调动长期记忆中的图式与新信息进行缝合，相当于在已有的地基上起强盖房子。C 特别适合数学、物理、编程、法律论文阅读这类你必须知道为什么的内容，也特别适合考试复习——因为考试问的不是你见过没有，而是你能不能迁移。我认为**达到 C 才算是真正的学习**。那些善于自学、有真本领、能在职场上独当一面的人，必定是建构式学习的高手。学习不是把知识装进大脑，而是把新图式建设在已有图式的基础上。

**最高级的学习方式则是 I 互动。** 它要求有至少两个学习者围绕同一个认知对象，产生实质性的建构性对话。这可不是说大家围坐一桌轮流发言就行——你们必须有来有回，而且对话必须有建设性：有人补充、有人质疑、有人纠错、有人澄清、有人反驳、有人追问、有人推进。**真正的互动应该是思想的乒乓球**：我提出一个观点，你指出其中的漏洞并且给出修正，我又在你的基础上提出了更完善的假设。I 可以说是研究型学习，一般针对的不是中学课本上那点东西，而是比较难的概念、开放式的题目、案例分析和辩论之类。比如几个研究生在导师指导下钻研一个理论，两个工程师审视设计思路，基层领导琢磨上级意图等。不但要求你构建，而且要求你的构建经得起考验、防止陷入自我感动。你必须进攻可退可守，主动寻找漏洞，而且调动你最强的能力去说服别人。古人云"如切如磋，如琢如磨"——**互动式学习可以说是一般人所能体验的最高级智力活动**。

季清华和合作者曾经在大学工程课堂做过对照实验，把学生分成 P、A、C、I 四组，学习内容是材料科学中的分子结构。P 组什么都不做，只是听老师讲；A 组有动作，但只是把现成的分子结构和性质做连线匹配；C 组没有现成答案，必须自己把结构推演出来和画出来；I 组则是在自己画完之后再和同伴互相检查、互相质疑，并讨论为什么这个结构更稳定、原理到底是什么。实验结果严格符合 I 大于 C 大于 A 大于 P。**看来任务越是要求学生自己生成信息、再和别人来回校正，学习效果就越好。** 尤其到了那些不能靠死记硬背、必须真正理解原理才能答出来的推理题上，I 组成绩不但大大强于 P 组和 A 组，而且显著压过了 C 组。

你说我们是不是应该循序渐进，必须从 P 和 A 开始一层一层往上升呢？其实这不是一个打怪通关的游戏，而是**资源配置**，主要看你已经拥有多少相关的先验知识储备。如果学习内容是全新的，你脑子里没有现成的图式，那就谈不上建构和互动，老老实实先做 P 和 A 是必须的。但如果你是一个资深程序员，学习一门新编程语言，吭哧吭哧看几十个小时的教程就太荒唐了——你应该直接上手写代码，有麻烦就找人或者找 AI 讨论。

节奏良好的学习应该像换挡一样：先从 P 和 A 开始，老师讲 10 到 15 分钟就停下，让学生用自己的语言总结一下其中的核心原理，做几道练习题，进入 C；一节课最后再来个互动，达到 I。**特别是在复习备考阶段，学习应该完全由 C 和 I 组成。** 像有些学校让学生做早操的时候都拿本书大声朗读，那就太荒唐了。

ICAP 框架可能会让你想起费曼学习法——看看你能不能用简单的语言把一个复杂的概念讲给一个外行听，如果你能给人讲懂，你自己也就学会了。在我看来，费曼学习法相当于 I 和 C 的中间地带，但它是以 C 为主。因为当你给别人讲解时，对方未必是真的听懂了。**真正的 I 要求他对你提出质疑和反驳，你们双方共同查找漏洞、重新构建这个学说才行。** 换句话说，要想让费曼学习法爆发威力，听你讲的那个人不能是一个纯外行，他最好是个圈内人才行。

用 ICAP 这把尺子衡量现实，你会发现自己身边大量的学习活动效率极低：课堂上学生直愣愣盯着黑板 45 分钟，这是彻底的 P，就算记点笔记也只不过达到 A；家长监督孩子写作业，看孩子不会就直接给讲一遍、问懂了么，其实还是 P；公司召开大会，领导侃侃而谈、PPT 精美绝伦、员工正襟危坐频频点头，并没有达到 A。**高水平学习要的不是仪式，而是 C 和 I。** 老师应该多提问、学生应该多教、家长应该鼓励孩子互动、公司应该搞项目复盘和红蓝对抗、甚至激烈的辩论。

我做了一大圈调研，发现在中小学课堂之中，大约三分之二到四分之三的教学活动都是 P 和 A，进入 C 和 I 的只有四分之一到三分之一，甚至有一半的老师几乎就不给学生 C 和 I 的机会。而且大学课堂更差：有一项针对 170 节德国高校课的研究发现，如果一节课平均有 80 分钟，那么进入 ICAP 的时间是这样的——P 占 41.5 分钟，A 占 12.5 分钟，C 只有 3.3 分钟，I 只有 4.5 分钟。**可见课堂教学是一种效率非常低的学习方式，高手都是以自学、单独练习和私下讨论为主。**

其实我们没必要太过抱怨和苛责老师，他们有很多不得已：一个班那么多学生，中听讲是最方便的办法，更何况老师的能力也是有限的。但现在 AI 时代，我们的教育和学习完全可以来一番大改革。**我强烈呼吁有创业者出来，基于认知负荷理论和 ICAP 框架，做一个为每个学生量身定制学习进度和学习任务的 AI 学习系统**，就好比"第十班子的太子太傅"给皇太子上课一样。

总结来说：**P 是听经，A 是抄经，C 是著书，I 是论道。** ICAP 框架告诉我们，最高效的学习既不是最轻松的，更不是最痛苦的，它问的是：**你有没有把认知参与推到当前条件下你能承受的最高层？**
`,v1=`# 049丨刻意练习：天赋的作用究竟是什么？

## 讲什么

把"如何成为专家、高手甚至明星"从玄学变成工程问题的统一理论。刻意练习学说过去 20 年经历了"封神→祛魅→回归理性"的过程，核心悬念是：**天赋到底有多大作用？** 万维钢给出的答案：天赋不是玄学，而是一种可以被拆解的工程配置——天赋与刻意练习不是矛盾，而是乘的关系。

## 解决什么真问题

戳破两个极端：一是"一万小时定律"的鸡汤化——经验不会自动积累，把同一错误重复 20 年不等于专家；二是"天赋决定论"的宿命感——天赋可以被拆解成传感器分辨率、神经网络更新速度、奖励函数敏感度、环境选择能力四组参数。普通人至少可以握住刻意练习这一端。

## 核心论点

- **刻意练习四个条件**：①有成熟训练体系 + 专业导师（帮你建立精准的心理表征）；②高分辨率目标（把技能拆解到极小颗粒度）；③及时反馈（错误一发生必须马上纠正，否则被自动化成坏习惯）；④待在能力边缘的学习区。
- 刻意练习是一种**误差压缩技术**：任何技能都可拆解、可反馈、可改进。
- **天赋 = 天生的敏感度和可塑性**：传感器更细（看见别人看不见的差异）、神经网络更新更快、兴趣（奖励函数更敏感）、环境选择能力（野心）。
- 刻意练习决定你有没有在更新、有没有在积累复利，天赋决定你每次更新的利率。
- **从专家到明星的方法论变了**：专家能把事情做对，明星能在对的基础上做出创造性。风格是在满足硬约束之后，对剩余自由度做出的稳定选择。
- 合理成长路径：初期多探索 → 选定赛道刻意练习 → 高水平后再探索 → 建立个人风格 → 稳定 → 靠环境和运气再进一步 → 定期再次探索。

## 关键例证 / 金句

- 1993 年埃里克森研究柏林音乐学院小提琴手：顶尖高手与普通演奏者之间唯一最显著的区别是**累计练习时间**。
- 2014 年大规模研究：刻意练习总量只能解释 28% 的表现差异（游戏/国际象棋），音乐 21%、体育 18%、教育只有 4%、编程不到 1%。2016 年体育荟萃分析：精英运动员之间刻意练习的重要性只剩 1%。
- 天赋不是"身高 1.75 米和 2.15 米都有同样机会成为球星"。
- **崇拜苦难的人只是在重复自己，一直在改的人才是重塑。**
- 2025 年重量级综述：少年时期有神童般表现的孩子，和成年后的世界级高手有将近 90% 不是同一批人。过早锁定赛道往往只能找到局部最优——小时了了大未必佳的科学生版解释。
- 风格不是天生的不一样，而是**我把正确练到足够稳之后，终于有资格不一样**。

## 如何应用

1. 诊断自己是否在刻意练习：有导师吗？目标颗粒度够细吗（不是"练篮球"而是"练接球后左脚跨步的瞬间动作"）？反馈及时吗？在舒适区、学习区还是恐慌区？
2. 中年人的困境：老板安排的任务往往是早熟练的，人生大量时间浪费在琐事之中——要主动给自己制造留在学习区的机会。
3. AI 辅助：2025 年随机临床试验（88 名医学生神经外科模拟训练）证明，先让 AI 识别错误、再由人类专家给出个性化反馈，训练效果明显好于单纯依赖智能辅导系统。
4. 心理咨询师训练：把会谈录像复盘、督导下逐帧分析、角色扮演修正——几乎什么技能都可以刻意练习。
5. 成长路线：前期不要过早专业化，多探索找最适合的项目；高水平后再探索风格；每隔一段时间还要再次探索不同风格。

---

## 全文（清洗后的课程转录，重点加粗+底纹）

欢迎来到现代思维工具课，我是万维钢。前面讲的认知负荷理论和 ICAP 框架都是一般意义上的学习方法，在中学甚至大学里，只要能合理运用这些方法，成绩优秀不是什么难事。但如果你只是把课堂知识学好，你只是一个平庸的人才。你要想出类拔萃，就得会一些学校不教的、做到别人做不到的才行。这一讲咱们说怎样达到专家、顶尖高手、甚至明星的高度。这意味着你不能满足于做工业化教育流水线上的一件优等品，你必须有一个额外的、单独的、定制的学习路线——而那个路线图现在非常清楚，那就是**刻意练习**。

过去 20 年间，刻意练习学说经历了一个从封神到祛魅、再回归理性的过程。其中一个核心悬念是**天赋到底有多大作用**。老百姓早就知道天赋很重要，不然为什么有的孩子轻轻松松就是高手？但是学者一直想淡化天赋的作用，希望把一切技术化，总想证明练习方法比天赋重要的多。可是今天看来天赋还是重要。那你说天赋到底是什么呢？是一团难以言说的灵气吗？好消息是现在科学家已经积累了足够多的研究成果，我们可以提出一个更合理的统一理论，**让天赋不再是玄学，天赋也是一个可以被拆解的工程问题**。

人们原本说不清为什么有些人是高手、有些人就不行。有时候我们说是勤奋，有时候我们说是天赋，但这些都是笼统而宏观的说法。在微观上，勤奋跟天赋到底是怎么发生作用的呢？每个老师傅都自以为知道高手是怎样练成的，但是你没有数据，你说的就只不过是直觉而已。

迷雾最开始消散是在 1993 年。佛罗里达州立大学的心理学家安德斯·埃里克森研究了柏林音乐学院的提琴手，发现**顶尖高手和普通演奏者之间唯一最显著的区别就是累计练习时间**。人们意识到技能似乎并不是什么神秘的不可琢磨的东西。埃里克森进行了一系列的研究，发现无论是音乐、体育、下棋还是医疗，卓越表现都不是基因赠予的奇迹，而是通过特定的练习获得的。原来成为高手是可操作的，这给了大众巨大的鼓舞。

但是埃里克森的研究很快就被误读了。最典型的就是畅销书作家马尔科姆·格拉德威尔在《异类》那本书中把这种方法论包装成了**一万小时定律**：任何人只要好好的练习一万小时，差不多相当于 10 年的时间，就能成为一个领域的专家。但埃里克森学说的精髓恰恰是**经验值不会自动积累**。最初的研究统计练习时常，只不过是因为时间最容易统计。其实真正的关键不是练习时间，而是你在练什么。同样是训练花样滑冰，如果你只是翻来覆去的练习几个简单的跳跃动作，就算你再努力、时间再长也只是低水平重复建设；而高手一定会把时间花在那些高难度动作上。这就如同一个开了 20 年车的出租车司机的驾驶技术，未必比一个刚突击训练了一年的赛车手高。

埃里克森把这套心法命名为**刻意练习**。什么是刻意练习呢？想象你在学习弹钢琴，正在练习一首长达 40 分钟的曲子。如果你每次都是把这首曲子从头到尾弹完，然后再弹一遍、再弹一遍，你这肯定就不是刻意练习。刻意练习要求你专攻自己最薄弱的环节：比如说有四个小节你一弹就乱，那你就专门抠这四个小节，降速弹、感知错误、每次只改一个点。一遍一遍从头弹，你收获的只是熟悉感；**只有专攻那些薄弱环节，你才能获得控制力。**

那你说我自己设定一个清晰的练习目标、我也会寻求反馈、而且我练习非常专注，我这算不算是刻意练习呢？不是。用埃里克森的话说，你这个只能叫**有目的的练习**，还不能叫刻意练习。光是认真、有标准还不行，你必须**有精确的标准**才行。严格的刻意练习必须满足如下四个条件：

**第一，这是一个有成熟训练体系的领域，而且你有一个专业导师。** 导师不是给你一般意义上的知识，而是帮你建立一套精准的心理表征，这样你就知道正确应该是什么样。说白了就是你自己通过看录像互相学习打篮球是不靠谱的，必须得有教练在现场告诉你正确的动作严格应该怎么做，光会比划不行，必须准才行。

**第二，你要有高分辨率的目标。** 刻意练习要求你把技能拆解成极小的颗粒度。你不是在练打篮球，你是在练接球后左脚跨步的那个瞬间动作；你不是学英语，而是把这三个总发错的音改到连续十次稳定；不是练这首曲子，而是第四到第八小节左手跳进必须不乱。目标具体，错误越容易现形。不是"我要变强"，而是"我今天只改这一个错误"。

**第三，要有及时反馈。** 不是今天练完、明天拿录像去求人给你点评一下，而是错误一旦发生必须马上纠正。如果不立即纠正，错误就会被重复、被自动化，那么它就会变成一个坏习惯。高效训练不能给自己养成坏习惯的机会，所以你身边必须得有个教练看着。

**第四，你要确保待在能力的边缘，也就是所谓的学习区。** 在舒适区练习内容太容易了，你不会有提高；如果在恐慌区内容又太难，你会崩溃。真正有效的练习空间一定是**你差一点会但还不会**的地方。这会让你想起咱们前面说的自由能原理：要给神经系统喂一点恰好能吸收的惊讶。学习区听着挺简单，但非专业人士很少有自由和资源能让自己一直在这个区域做事——老板给安排的任务往往是你早就熟练的，人生大量的时间都浪费在琐事之中。所以有时候中年人羡慕那些全职求学的人：我们也想学，可是我们没有你们那么优越的条件。

**刻意练习既不是宏大叙事，也不是默默的吃苦努力。你可以说它是一种误差压缩技术，它认为任何技能都是可以拆解、可反馈、可改进的。** 高手不是整天想着什么"平时多流汗、战时少流血"，高手只想精准改进下一个技术动作。崇拜苦难的人只是在重复自己，一直在改的人才是重塑。

我认为刻意练习代表了一种现代精神：我们不相信天降奇才、不相信灵光一现、也不相信师父有什么绝招对徒弟藏着，更不相信徒弟应该卑躬屈膝的祈求师父传授本领。我们不问什么感觉、也不问你熬了多少打，**我们问什么训练条件能稳定的产生高水平表现，我们相信个人的进步可以工程化。**

但我们仍然需要证据：刻意练习真的有效吗？对于把新手训练成专家这个过程来说，刻意练习的效果可以说是极为明显。埃里克森已经做了很多研究不用多说了，我们只看最新的 2025 年发表的一项随机临床试验：找了 88 名医学生做神经外科模拟训练，发现**如果先让 AI 帮忙识别错误、再由人类专家给出个性化反馈，训练效果会明显好于单纯依赖智能辅导系统**，这套方法既提升当下表现也更有利于技能迁移。人们还把刻意练习用于心理咨询师的训练：受训的心理咨询师把与患者的会谈录像拿来复盘，在督导下逐帧分析自己错过了什么信号、该怎么回应，再做角色扮演和修正——2025 年的一项研究显示刻意练习组的效果优于对照组。就连在大学课堂上对本科生进行基础倾听技能训练，也就是让学生学会听人说话，通过刻意练习也能大有帮助。**几乎什么技能都可以刻意练习。**

这些研究告诉我们：**经验不等于专长。** 你在一个领域干了 20 年，不代表你真会，你可能只是把一个错误重复了 20 年。只有刻意练习才能让你成为真正的专家。

但是成为专家之后呢？从专家到高手到明星，也是刻意练习决定的吗？这里有个反转：**一旦到了专业级别，特别是你要综合考察一个人的业务水平，刻意练习的作用就不是那么明显了。** 2014 年的一项大规模研究指出，在游戏和国际象棋领域，刻意练习总量只能解释 28% 的表现差异；音乐领域是 21%，体育 18%，教育只有 4%，编程之类的职业工作还不到 1%。2016 年一项专门针对体育领域的荟萃分析则指出，对于一般运动员的表现差异，刻意练习能解释 18%；但如果只看精英运动员，刻意练习这个因素的重要性就只剩 1%。

我对此首先要说的是：精英运动员普遍都已经使用了刻意练习，所以刻意练习当然不能解释他们之间的差异。但我们换个角度看，似乎刻意练习只在那些规则死板、不确定性低的领域（比如钢琴和国际象棋）解释力特别高；而对于环境复杂、不确定性高的领域（比如商业决策和创意写作），**刻意练习只是入场券，决定胜负的往往是别的东西**。学术界对此有很多争论，埃里克森的一个辩解是"你们的统计方法有问题，有些训练根本不算刻意练习"，但批评者说"你越收越窄，标准是不是太不客观了"。

其实我们想一想，关键还是问题不一样：如果一个领域的噪声比较高、变量一大堆、评价标准比较模糊、反馈滞后，那你很多时候根本不知道自己错在哪，就没有办法立即改进，刻意练习当然就不那么灵了。但我们绝不能说完刻意练习在这些领域没有用。

如果刻意练习的解释力有限，那到底是什么东西能解释剩下的那一大块差异呢？有些因素是天赋以外的运气，但相当一部分因素必定是天赋。**天赋必定有用，你总不能说一个身高 1.75 米的篮球运动员和一个身高 2.15 米的篮球运动员有同样的机会成为球星。** 但天赋意味着不平等，所以我们很不想面对天赋。20 年前有本畅销书叫《哪来的天才》，就主张天赋是被高估的。但天赋的确存在，而且放在刻意练习这个框架里，它也是一种工程配置。

简单说，**天赋是天生的敏感度和可塑性**。天赋首先意味着你的传感器更细：你对信息有更高的分辨率，能看见别人看不见的差异。比如音乐里有人对音高、节奏和音色变化特别敏感，体育里有人对时间空间差、身体重心的变化更敏感，认知领域里有人对模式、结构异常点特别敏感，这些都有相当高的遗传成分。天赋还意味着你的神经网络更新速度更快，这在很大程度上取决于你大脑的工作记忆容量：同样是教练一句"你这个地方弹的不对"，有人只是感到受伤，有人却能立即在头脑中定位、拆解和重组——这不仅是情绪稳定问题，这跟大脑硬件条件有关系。为什么有些人能忍受刻意练习、有些人受不了呢？**兴趣也是一种天赋**：同样一串练习，对有些人来说信号更密集、回报更快，因为他的奖励函数更敏感，他不觉得无聊反而觉得上瘾。还有一种天赋是**环境选择能力**：在你稍微有点优势的时候，你会不会特别想要放大自己的优势？会不会主动去寻找好老师、好资源、好同伴去追求更高质量的练习？你有多大的野心？这些东西也有天生的成分。天赋还有通用天赋和特定天赋之分：有些人的大脑就是好使，干什么都厉害；而有的人则是在特定领域极度敏感。

**天赋就是让你更容易发现错误、更容易纠正错误、更容易从反馈中获得快感、也更容易把自己放到好环境里的那一组参数。** 每个人的初始内核都不一样，这是我们必须接受的；但刻意练习则是我们可以有所作为的。天赋跟刻意练习不是矛盾，而是**乘的关系**：练习决定你有没有在更新、有没有在积累复利，而天赋决定你每次更新的利率是多少。这就是为什么同样经历了这么长时间的刻意练习，有些人成了行业高手，有些人却只是个普通专家。

从高手到明星，方法论又变了。**专家能把事情做对，而明星却能在对的基础上做到好、做到与众不同、做出创造性。** 想要树立辨识度，你必须有自己的风格。乐谱是固定的，但这样弹、那样弹还是怎样弹，完全取决于你。**风格是在已经满足硬约束之后，你对剩余自由度做出的稳定选择。** 但风格也不是纯天赋，也需要刻意练习：没有控制力的选择叫失误，有控制力的选择才是风格。你在完全准确的前提下，故意在句法、力度、停顿上做出别人一听就知道是你的处理，那才叫风格。风格不是正确的敌人，风格是正确之后的剩余解空间。只有通过刻意练习反复修正，你才能在那个空间慢慢养成独特的自我。

**天赋决定你在哪些维度上最敏感，刻意练习决定这些敏感能不能被训练成稳定控制，风格则是当你拥有控制力之后，你留下的可识别偏好。** 顶尖高手的风格不是"我天生不一样"，而是"我把正确练到足够稳之后，终于有资格不一样"。

那么从入门到明星，是不是我们一路刻意练习就行了呢？先别着急。2025 年的一篇重量级综述研究发现：**少年时期有神童一般表现的孩子，和成年后的世界级高手有将近 90% 不是同一批人。** 那些很早就通过刻意练习取得辉煌成绩的孩子，长大后往往不是明星；而那些真正的大师小时候反而并不显山露水。通用天赋很强的人，练哪个项目都能练得很好，但如果过早锁定赛道，往往只能找到一个局部最优——这就是"小时了了大未必佳"的科学生版解释。真正的高手小时候往往会尝试很多项目，并不着急专业化：一方面能探索出来自己最适合的项目到底是什么，另一方面积累跨项目体验，为日后的全面发展奠定基础。

这样说来，一个志向高远的人合理的成长路径差不多是这样的：**一，初期多探索**，看看自己到底适合哪一行；**二，选定赛道**，就用刻意练习乘以天赋的方法成长；**三，达到高水平之后再再次探索**，看看如何在做对的基础之上建立一套个人风格；**四，继续刻意练习**，在那个特定风格上达到稳定状态；**五**，这时候你已经是一个很有辨识度的选手了，如果想再进一步，就得靠环境和运气；**六**，别忘了，一段时间之后还要再次探索、尝试不同的风格。

总而言之：**没有天赋，刻意练习也能把你带到一个不错的位置；但没有练习，天赋就只是期权。** 我希望这一讲能让你明白：学习是个可操作的工程过程。有人说学习就是要受苦，有人说学习要靠激励，有人说学习是一种品质——其实都是胡乱煽情。真正的高手不搞那些神叨叨的东西，他们只是一边保持探索，一边以更高的效率修正自己的下一个错误。
`,y1=`# 050丨表征、图式、心智模型和解释框架：学习学的是什么

## 讲什么

由四个高中老师没听说过的概念组成的思维工具，它们构成了真正学习的四个层级：**表征**（认知地图的最小单位）→ **图式**（可识别的认知结构）→ **心智模型**（会动、能推演的图式）→ **解释框架**（一个领域的系统总图）。学习学的就是"把世界压缩成一套能预测、能解释、能干预、还能自我纠错的内在地图"。

## 解决什么真问题

纠正"知识收集癖"：一年读 50 本书、笔记密密麻麻、能在地缘政治和量子力学之间自由切换，但遇到事还是不知道怎么决策——这只是博学，用处不大。学习真正要的是**高压缩率的结构**：从这本书里带走的规律越简洁、越能解释复杂现象，你的知识就越高级。

## 核心论点

- **信息 ≠ 知识**：信息是授人以鱼，知识是授人以渔。知识追求的不是复杂，而是简单。学习要忽略琐碎无关的信息，提取出结构来。
- **表征**：现实世界事物在头脑中的代用品，对应知识里的概念、名词、对象、关系和边界。接触新领域就是提取关键表征，画成关系图。
- **图式**：多个表征聚合成的组织。图式是模式识别的母板——有图式的人看事情是一块一块看。巴特莱特实验证明：人脑会把陌生叙事里的怪细节改成符合自己逻辑的东西——脑补不是坏事，正是举一反三的机制。
- **心智模型**：会动的图式，内部有变量、有因果、有反馈、有边界条件，允许你做推演（如果做 A，那么 B 会发生）。费曼的"积分号下求导"、马斯克的第一性原理、芒格的 890 个心智模型都是例证。
- **解释框架**：当前学界的某一派意见对一个领域的整个系统性看法，相当于一个领域的全图。读到解释框架，你才开始像学者那样理解世界——不是追故事，而是问机制。
- 读书上课不再问"这篇讲了什么"，要问"你能从这里拿走什么结构"。

## 关键例证 / 金句

- 两本历史书：一本讲赵匡胤打天下的传奇故事，一本讲北宋的政治斗争模式——后者更值得读，因为故事给你的是信息，模式给你的是知识。
- 巴特莱特 1932 实验：给英国人讲印第安神话，回忆时英国人会不自觉地改掉奇怪细节，用英国式逻辑补全。
- **图式极大的节省了我们的认知带宽**：没有图式的人看什么剧情都新鲜，图式多的人看什么都是套路。
- 麻省理工研究生用 NotebookLM 把一门课一学期的学习量压缩到 48 小时：他问了 AI 两个问题——"这个领域内每个专家都具备的五大核心心智模型是什么"、"告诉我这个领域内三个最大的争议点，争论双方各自有利的论点是什么"——第一个问题问的是心智模型，第二个问题就是在摸索解释框架。
- 读解释框架能让你事半功倍："相对于把二十四史从头到尾读好多遍，读解释框架能让你事半功倍。"
- 一本书从厚读到薄是提取结构；从薄读到厚是**学以致用、举一反三，随时生成新内容**。

## 如何应用

1. 学习任何新领域：先提取关键表征——核心概念有哪些？最重要变量是什么？它们之间有什么关系？最好动手画成关系图。
2. 问自己四个层级：这只是记住了表征（名词），还是有了图式（看出门道），还是会用心智模型（能推演会使用），还是掌握了解释框架（能判断什么值得相信、什么只是叙事包装）？
3. 用 AI 学新课：上传多版本教材、论文和课堂记录，先问"五大核心心智模型"，再问"三大争议点及双方论据"，再让 AI 生成十个问题测试自己、答错就让 AI 解释错在哪——这是在精细打磨头脑中的模型。
4. 万维钢的提醒：反对突击，学太快哪怕全理解了也会很快忘掉；学一点、多了解一些细节有助于加深理解和灵活运用。

---

## 全文（清洗后的课程转录，重点加粗+底纹）

欢迎来到现代思维工具课，我是万维钢。假设你面前有两本历史书：一本讲的是赵匡胤打天下的传奇故事，另一本讲的是北宋的政治斗争模式。你知不知道哪本更值得读？可能有些人认为所有知识都是平等的，这两本书同样有价值。我坚决反对。**我认为后一本比前一本更值得你花时间认真学习。**

我们前面讲过信息价值，说只有当这条信息能够改变你的实际行动时，它才有价值。连信息跟信息都不平等，知识跟知识怎么能平等呢？可能你一年读 50 本书，笔记记得密密麻麻，每天还要刷文章、听播客，看到一个冷门知识点就赶紧收藏。你以知道的事多为荣，能在饭局上从地缘政治扯到量子力学。博学可能给你带来了精神享受，但是用处不大：遇到事你还是不知道怎么决策；面对新闻你看不清其中的脉络；人家问你中国经济怎么回事，你能列举三个经济学家的观点，听起来互相矛盾，可是你不敢拿主意到底谁对谁错。问你还不如 AI，甚至不如搜索引擎。**世人多被应试教育蒙蔽，把学习当成死记硬背知识点，不知道学习真正的价值，更没有学习的章法。**

这一讲的思维工具由四个你们高中老师没听说过的概念组成，那就是**表征、图式、心智模型和解释框架**，它们构成了真正学习的四个层级。

我先说说为什么听历史故事不叫学习，哪怕那个故事是真的。故事也好、旅游中对景点的印象也好、老师傅干了 20 年工作的经验也好，给你的都是**信息，不是知识**。信息是对不确定性的克服：本来你不知道这片地下有没有石油，现在我告诉你一个信息，你知道了。这个信息很有价值，但它不是知识，因为你没有从中学到任何技能——下次换一个地方，你还是无法判断那里有没有石油。信息是授人以鱼，而知识是授人以渔。**知识是一种通用的操作方法，有了知识，你换到别的地方还能得到鱼。**

你可能说知识是不是比信息复杂的多？其实不是。**知识追求的不是复杂，而是简单。** 今天早上吃的什么饭、用的鱼缸是什么牌子、鱼饵花多少钱买的，这些信息可能对一个完整的故事很重要，但对于你学习捕鱼知识来说没有任何价值。学知识我们必须把琐碎无关的信息都忽略掉，提取出结构来。

耶路撒冷希伯来大学的计算机科学和神经科学教授纳夫塔利·提斯比在 2000 年前后提出一个**信息瓶颈理论**，认为不管是人类大脑还是深度神经网络，学习的本质不是记忆，而是**压缩**。学习即压缩，我们要的是规律而不是细节。你从这本书里带走的规律越简洁、越能解释复杂现象，你的压缩率就越高，你的知识就越高级。讲规律的书比讲故事的书高级多了。有人靠评书演绎总结了一套市侩的官场斗争哲学，到现场一看根本不是这么回事；学者从无数史料中提取、演绎和论证了一套规则，那才是真东西——读这种书才有高杠杆，故事书充其量只能作为养规律书的语料而已。

但规律不是一维性的东西，它有分层的结构。咱们从低到高一层层往上说。

**第一层是表征。** 表征是现实世界中的各种事物在人的头脑中的代用品。比如"苹果"这个词就是一个表征：真实的苹果是一堆原子，而你脑子里的苹果则是一个红色的、圆形的、甜的东西。现代认知心理学认为我们的大脑无法处理真实世界本身，当我们在大脑里想象和思考真实世界的时候，我们想的都是各种表征。换句话说，一个事物要想跨越马尔可夫帘、进入我们的大脑，它就必须得先有表征才行。你思考的不是真正的经济活动，你思考的是那些经济学概念和指标；你读的不是历史本身，而是某种历史叙事。**我们在大脑中操作的不是疆域，而是地图。** 表征就是认知地图的最小单位，一般对应知识里的概念、名词、对象、关系和边界。那么接触一个新领域，就不是把书里那些句子背下来，而是从中提取关键的表征：这里的核心概念都有哪些？最重要变量是什么？它们互相之间有什么样的关系？抓住这些表征，最好再动手把它们画成关系图，你就会有初步的认知，才算入门了。**有了表征，你就点亮了地图上的地名。**

**第二层是图式。** 我们前面刚讲过图式这个概念。简单说，如果表征是认知的单个细胞，图式就是细胞聚合成的组织，比如说一块肌肉。图式这个概念最早是英国心理学家弗雷德里克·巴特莱特在 1932 年提出来的，后来被发展心理学家让·皮亚杰发扬光大。如果说表征是乐高积木里的一块零件，那么图式就是用一堆零件组成的一个可识别的结构——你一看就知道这搭的就是一个赛车的底盘；如果你熟悉这个图式，你会想到下一步该往上安装轮子了。**图式是模式识别的母板**：脑子里有图式的人看事情是一块一块看，而不是一个一个元素单独看的。你一听要写学术论文就知道大概会有问题、方法、实验结果和讨论这些段落；你一听有人要创业就知道接下来是价值主张、融资叙事和组织扩张。不会下棋的人看见的是棋盘上一堆散落的棋子，职业棋手看见的却是一块一块的局面。图式能让你迅速识别局面，因为你可以脑补。

巴特莱特做过一个著名的实验：给一群英国人讲一个印第安神话故事，故事里原本有很多印第安文化特有的、不符合英国逻辑的细节。结果发现，当英国人在回忆这个故事的时候，会不自觉地把那些奇怪的细节修改掉，或者干脆用英国式的逻辑去补全。**脑补不是坏事**：正是因为我们能从一个叙事中抽象出图式来、再把这个图式填充细节用于其他叙事，我们才能举一反三。比如你只要知道了平台经济这个图式，你眼中的淘宝、美团和滴滴本质上就是同一回事。图式极大的节省了我们的认知带宽——这就是为什么有一定基础的学生学习新东西更快、读过很多书的人读书速度快。**脑子里没有图式的人看什么剧情都新鲜，而图式多的人看什么都是套路。**

**第三层是心智模型。** 这大约相当于器官，因为它有自身的行为逻辑。其实心智模型也是一种图式——**那些会动的图式就叫做心智模型**。心智模型这个词最早是苏格兰心理学家肯尼思·克雷克在 1943 年提出来的，意思是在大脑中构建的一个微型模型用来模拟现实。简单说，心智模型有特定功能，它的内部有变量、有因果、有反馈、有边界条件，所以它允许你做推演：如果你做了 A，那么 B 就会发生。一般的图式回答"是什么"，心智模型则能进一步回答"它怎么运转"。一个描写事物如何运行的完整理论就是一个心智模型——比如万有引力定律就是心智模型；我们这个课程所谓的思维工具也是心智模型，只不过我们强调它们是可以拿来使用的而已。

心智模型比我们前面讲决策的时候说的那种因果模型更大，因为它内涵更丰富，不是一域一用，可以迁移到不同的情景之中。**掌握心智模型，而不只是听说几个概念和谈论什么局面，你才称得上真正学会了一个什么东西。** 物理学家理查德·费曼读书的时候在同学中以微积分高手闻名：常常有些积分题连数学系的博士生都不会做，费曼三下两下就能给解出来。他是怎么做的呢？原来他深入研读了一本旧的高级微积分教材，从中掌握了一种正统课程中很少讲授的微妙技巧——在积分号下求导。费曼这个绝招就是一个心智模型：他非常理解这一招的原理，所以能灵活运用到不同的题目之中去。

心智模型在硅谷、在商界是个很流行的词：马斯克招牌式的第一性原理就是一个心智模型；查理·芒格更是直接搞了个心智模型大合集，涉及数学、物理学、生物学、心理学、微观经济学等多个领域，总共 890 个心智模型，直到现在这些模型在网上依然被人们津津乐道。我们上课读书做研究最根本的目的不是搜集什么知识点，而是**提取材料背后的心智模型**：它是怎么运作的？这里面最重要的变量是什么？输入是什么？输出是什么？谁影响谁？机制链条怎么走？有什么反馈延迟和副作用？这个模型的失效边界又在哪里？

**学习的第四层、也是最高一层，叫解释框架。** 这个词是我发明的，关于这一层学界没有什么标准的说法。解释框架的意思是：当前学界的某一派意见对一个领域的整个系统性看法。一个解释框架就是一个领域的全图，它包含若干个心智模型和图式，它提供了思考一个领域所有关键问题的表征，它说的是这一大类现象应该如何解释。

我举个例子：秦晖先生前年出版的《秦汉史讲义》一书，就是关于帝制中国的一个解释框架。这本书说的不只是秦汉史，甚至不只是历史——书中梳理了经济、政治、管理、社会和文化逻辑。读了这本书，你就能理解帝制中国为什么会有那样的财政结构、政治结构和社会关系，你还能知道法家、儒家和道家在中国历史中实际的生态位是怎么回事。当然我不敢说一本《秦汉史讲义》能说尽古代中国，其他学者对中国还有别的解释框架。**每个学科都有很多种由当代学者写的解释框架类的书**：相对于把二十四史从头到尾读上好多遍，读解释框架能让你事半功倍。摸到解释框架，你才开始像学者那样理解世界——不是追故事，而是问机制；不是比立场，而是比解释力和判断力。

所以学习学的是什么呢？**学的是把世界压缩成一套能预测、能解释、能干预、还能自我纠错的内在地图。** 组成地图的材料叫表征，常用的快速母板叫图式，能跑起来的机制图叫心智模型，而对全局的系统性理解是解释框架。

所谓把一本书从厚读到薄，就是抛开不重要的信息，提取其中的关键表征、图式、心智模型和解释框架这四种东西；而所谓把书再从薄读到厚，不是说让你再去纠结和补充各种细节，而是说在你真正学会了这张内在地图之后，就能学以致用、举一反三——遇到任何相关场景，你都能把这几样东西拿出来从容应对，随时生成新的内容。

所以以后读书、上课、问和分析文章，不要再问"这篇讲了什么"，要问**"你能从这里拿走什么结构"**。背下表征只是语料库，学到图式你才能看出点门道，拿到心智模型你才算是会使用这里的知识，掌握解释框架你就能判断什么值得相信、什么只是叙事包装。

最后咱们说个有点极端的案例，看看 AI 时代最高效的学习法是什么样。2026 年 3 月，X 上一个报道：麻省理工学院有个研究生，借助 NotebookLM（Google 的一个 AI 应用），把一门课程一学期的学习量压缩到了 48 小时。他从来没去上过那门课，总共就学习了这 48 小时，然后他通过了那门课的考试。那你说是不是把课程的教材上传给 AI、让 AI 帮你总结、对你提问呢？没有这么简单。这位研究生做的其实比一般学生还要多：他把这门课六个不同版本的教材、15 篇研究论文以及所有能找到的课堂记录一股脑上传到 NotebookLM，然后问了 AI 两个问题。**第一，这个领域内每个专家都具备的五大核心心智模型是什么？第二，告诉我这个领域内三个最大的争议点，争论双方各自有利的论点是什么？** 用我们这一讲的视角看，第一个问题问的是心智模型，第二个问题就是在摸索解释框架。搞懂了这五个心智模型和三个争议点，这位研究生又让 AI 生成十个问题来测试他：他针对每一个问题都去源里找答案，倒逼自己带着问题读书；如果答错了，他就会让 AI 解释他为什么错了、他错过了什么——这些就是在精细打磨自己头脑中的模型。就这样 48 小时之后，他已经可以跟导师对话了。

其实我反对突击：如果你学得太快，哪怕全理解了，也会很快忘掉。学一点、多了解一些细节，有助于你加深理解和灵活运用。但是这位研究生可不是在搞应试教育，他是在真学，他知道学习学的是什么。**如果你没下过这个功夫，哪怕你花了十倍的时间，也应该问一问自己到底抓没抓住真东西。**
`,w1=`# 051丨综合调研：在没有教科书的地方挖掘真知

## 讲什么

比听课和读书更高水平的学习：学习教科书里没有的知识。**综合调研**是自己给自己立题、自己去找材料、自己判断什么值得信，最后写成一个能指导行动的东西。它很像搞研究，是知识工作者的核心竞争力。

## 解决什么真问题

解决"标准答案只能允许你入场，综合调研才能超车"的问题。各行各业真正有用的知识都不在教科书上——如果这个知识你也会、他也会，你的优势在哪里？**半熟知识**（有人研究出来发表了论文、足够可靠可以拿来下注，但又没熟到行内人皆知）是普通人的信息差来源，而综合调研就是从一堆零散事实中挖出别人还没说出来的判断。

## 核心论点

- 综合调研 ≠ 搜索（告诉你都有什么）≠ 总结（把东西说短）≠ 分析（把东西拆开看）。综合调研是**把东西重新组织起来形成一个新的整体**，它解决的是"所以呢"——我从这些事实中得出什么结论、什么判断、什么启发，我应该采取什么立场，下一步如何决策。
- 综合调研要求**把结果写下来形成报告**：写作不是思考之后的包装，写作即思考。不写下来，你分不清那个模糊的感觉是真懂还是假懂。
- 三个级别：
  - **初级·定位式调研**（一天甚至一小时完成）：让认识快速达到当前科学理解，做到把事情说对、不露怯。四个要点：把问题压成一句真问题、寻求可靠的资料支持、分清共识争议和常见误区、把结论压缩成一段一两分钟能讲清楚的话。
  - **中级·议题式调研**（几个月甚至一年）：让理解达到内行水平。入门标志是**认识人**——这个领域有哪些高人、哪些门派，谁跟谁是朋友谁是冤家，谁掌握话语权、谁在争夺话语权。
  - **高级·生成式调研**：目的不是理解，而是从材料中得出**原创的新思想甚至新发现**。真相不在任何单个材料里，真相是在材料之间。就像做拼图：把各方证据摆上桌，你一定能看出更大的故事，而且会发现少了哪几块——大的故事可能是你的新思想，少的拼图可能是你的新发现。

## 关键例证 / 金句

- 约翰·斯诺与 1854 年伦敦霍乱：医学权威都在实验室争论"瘴气"，斯诺做纯文本分析——把市政局的死者名单、伦敦街道地图和公用抽水泵的分布图三组材料放在一起，把死亡病例在地图上画成点，真相浮出水面：数据点密集围绕着宽街上的那口水泵。**霍乱不是通过空气而是通过水源传播。**
- 万维钢自己：从 2021 年开始花一年多时间从头到尾精读 66 本关于中国经济的新书，把每本书的笔记拆成不同议题横向链接到议题目录之下。结果发现：**主流学者的共识远大于分歧**——连"政府刺激经济"这件事，哈耶克派和凯恩斯派也不是势不两立，大家都承认刺激有时有效但指出了有效条件、也都认为政府常常过度干预。分歧都是微妙的，但微妙之处才是最值得说的地方。
- 读博士生时看论文根本不懂，但某一时刻突然全都能看懂了——入门需要下功夫，唯其如此才能形成稳定观点。
- **没有调查研究就没有发言权，别不带武器就出门。**
- 所有的知识工作者本质上都是研究者：**我们比的不是谁读过多少页，而是谁能在混乱的世界里画出一张更清晰的地图。**
- 读书不是囤积句子，而是升级压缩算法；调研不是搜罗材料，而是安装判断模型；写作不是展示想法，而是让思想成型。

## 如何应用

1. **初级**：开会、面试、会面前先做定位式调研——跟任何人会面都先把那个人调查一下，别不带武器就出门。用 AI（deep research 工具、定制调研助手 GPT）把问题压成一句真问题，要求它区分共识、争议和常见误区，把结论压缩成一两分钟能讲清楚的话。
2. **中级**：想搞懂一个行业（基金研究、战略咨询、深度报道、公共政策、行业分析）或认真理解新领域（AI、新能源、半导体），以议题为中心精读该领域所有活跃主流作者的书和论文，把作者当球星一样如数家珍。
3. **高级**：像做拼图一样做调研——把各方证据摆在桌面上往一起拼，寻找缺失的拼图。写文章、做报告时，在拼图空隙处提出自己的概念和洞察。
4. 不管哪一级，都最好通过写作交付调研结果。

---

## 全文（清洗后的课程转录，重点加粗+底纹）

欢迎来到现代思维工具课，我是万维钢。比听课和读书更高水平的学习，是学习教科书里没有的知识：你自己给自己立题，自己去找材料，自己判断什么值得信、什么不值得信，最后再把它写成一个能指导行动的东西。这门功夫叫做**综合调研**，它很像搞研究，这可是知识工作者的核心竞争力。

你要知道，各行各业真正有用的知识都不在教科书上。如果这个东西你也会、他也会，你相对于别人的优势在哪里呢？你必须会一些别人不会的、知道一些别人不知道的才好。这样的知识其实也不难找，而且大多是公开的，我们可以称之为**边缘知识或者半熟知识**——也就是有人已经研究出来发表了论文、足够可靠、可以拿来下注，但又没有熟到行内人皆知。只要想想你们领导的认知有多不靠谱，想想有那么多人在花钱买你确信没用的东西，想想有些知名大学的计算机系还在讲 20 年前的机器学习理论，你就知道当今世界到处都是半熟知识。

治疗某种病刚刚获批的新药、本行业今年的最新竞争格局、几款相关产品的市场调查结果，这些都是对你很有用的半熟知识。你做一番综合调研，从中提炼出一个判断：作为投资者，你就能找到一个市场还没有定价的认知差；作为产品经理，你就能找到用户自己都没说清楚的真实痛点。

高手使用综合调研，从一大堆零散事实中挖掘到一个别人还没说出来的判断。**标准答案只能允许你入场，综合调研超车。** 现在很多行业都有专职人员负责综合调研：咨询公司的咨询顾问、金融公司的策略分析师、智库的政策研究员、负责深度报道的调查记者等等。就算你不是专职，你也会在日常工作中用到综合调研：产品经理不抄竞品皮毛而是去重构它的底层逻辑；HR 制定新规不照搬外企而是结合人性做本土化适配；或者你为了写一份关键汇报，从一大堆行业报告中提炼一两个非共识的切入点。所以综合调研是知识工作者的基本功——**如果你只会等着别人投喂现成的知识，你要么是大老板，要么是个操作员。**

综合调研既不是搜索，也不是总结，也不是分析。搜索能告诉你都有什么，总结只是把东西说短，分析是把东西拆开看看这些究竟是什么；而综合调研是把东西重新组织起来，形成一个新整体。它解决的是"所以呢"：我知道这些事实，所以呢？我从中得出一个什么结论、什么判断、什么启发？我应该采取什么立场？我下一步应该如何决策？

综合调研还要求你把结果写下来、形成一份报告。**如果不写下来，你分不清自己那个模糊的感觉是真懂还是假懂，发现不了其中的漏洞。** 你必须定义概念、删掉废话、安排层级、说明边界、最后给出判断。写作不是思考之后的包装，**写作即思考**。

我建议把综合调研这门功夫分成三个级别，对应不同的认知任务，对人有不同的智能要求：初级谋求定位，中级谋求结构化，高级谋求生成。咱们一个一个细说。

**初级调研——定位式调研**，通常可以在一天甚至一小时之内完成。它的目的是让你对一个事物的认识快速达到当前科学理解。你不可能一夜之间变成专家，但是如果你让在明天的会议上讲五分钟，你至少可以做到把事情说对、不露怯。现实情况是：如果有一群人坐在一起聊天，只要话题稍微超出日常认知范围，就一定有人信口开河、看着自信满满实则驴唇不对马嘴。而你只要事先稍微做过一点调研，你就能当场碾压他。**如果参加讨论之前你没有做好准备性的调研，你就会被有准备的人欺负。** 有的人跟任何人会面都会先把那个人调查一下；可有的人去参加工作面试，却没调研过人家公司——这不荒唐吗？没有调查研究就没有发言权，**别不带武器就出门。**

以前做最基本的调研也得去图书馆查好几天，后来有了网络搜索引擎，事情就简单的多。现在有了 AI，我们应该升级对调研的要求，你至少应该做到四点：**第一，把问题压成一句真问题**——别泛泛地问"我想了解某某"，你想要的是概念定义、因果机制还是现实应用？**第二，寻求可靠的资料支持**——最好是高质量的论文、主流媒体的报道或者权威机构的报告。**第三，要分清共识、争议和常见误区。** **第四，把结论压缩成一段一两分钟能讲清楚的话。** 你直接对 AI 提出上述要求就可以，做了就比不做的多。你还可以借助主流 AI 公司提供的深度研究（deep research）之类的工具。我自己在 ChatGPT 写了一个叫做"调研助手"的 GPT，针对性更强，开放使用：你输入任何想要调研的话题，它会先给你来一段电梯致辞——用几句话告诉你这个东西到底有啥用、解决什么问题、给个指要害的暴论；然后才是详细讲解对这东西的当前科学理解，覆盖业内主流看法和应用；如果 AI 觉得问题有难度，还会现编一个小预言，再给你讲几个例子来说明；它还会清晰指出当前学术界的争议点和人们常有的误解，并且充分发挥自身智能，说这里有没有什么更深的洞见；最后是几个日常生活中的应用案例。你可以直接用我这个调研助手，也可以把这个意思写成一份 SKILL.md，交给你自己的 AI 助手。**高效能人士发言之前都应该先问助手。**

**中级调研——差距的地方，可以叫议题式调研或者结构化调研**，需要花费几个月甚至一年。它的目的是让你对某个领域的理解达到内行水平。为此你不能读一两本书，你得读这个领域所有活跃的主流作者的书和论文。每个博士生都曾经下过这样的功夫，我至今记得一开始读博士的时候看论文根本不懂，但也不知道是怎么搞的，在某一时刻突然间就全都能看懂了。

学界对文献调研的一般说法是：你应该以议题为中心，看看同一个议题下各个作者都是怎么说的，而不是把文献按照作者分类。但以我的经验来说，**入门的标志恰恰是认识人**：这个领域都有哪些高人、哪些门派，他们的思想和主张都是什么？他们各自此刻都在研究什么？他们共同最关心的问题意识是什么？他们正在争论什么？谁跟谁是朋友、谁跟谁是冤家？谁掌握话语权、谁又正在争夺话语权？真正的球迷，联赛每一支球队的当家球星的特点都如数家珍——你起码做到这个水平才行。这是一门硬功夫，但唯有如此，你才能形成自己稳定的观点。你知道人们在炒哪几件事，你知道每一派的理由、证据、方法和盲点，你知道争论目前卡在哪里。**下过硬功夫，你才有资格说自己支持谁、反对谁**——你最好能把你反对的那个学派的意见总结得让他们自己也认可。

AI 可以帮你加速这个过程，但是慢也有好处，你体会更深。从 2021 年开始，我花了一年多的时间从头到尾精读了总共 66 本关于中国经济的新书，我想搞懂中国经济到底是怎么回事。我把每一本书都写了详细的读书笔记，建了九个超大文档，每个文档里有若干个议题；我把每本书的笔记拆成不同的议题，横向链接到议题目录之下——这样你问我任何议题，我都能告诉你哪个作者在哪本书里是怎么说的。结果我发现，这些专家之间的分歧并不像我之前想象的那么大。比如说关于政府对经济的刺激作用：以前我会认为经济学家分为两派，哈耶克这一派强烈反对、凯恩斯这一派坚决支持；但并不是这样——我读到的作者都承认政府刺激有时候有效，但是大家也都指出了政府刺激有效的条件，而且也都认为很多时候政府是过度干预。**现实是主流学者的共识远大于分歧**，但是他们的观点和老百姓、包括和某些官员的认识之间的差距可就太大了。分歧都是微妙的，但那个微妙之处才是最值得说的地方。

不是所有人都有时间下这个功夫，但如果你想搞懂一个行业——比如做基金研究、战略咨询、深度报道、公共政策、行业分析之类——又或者你想认真理解 AI、新能源、半导体之类的新领域，这就是你的必修课。

**高级调研——生成式调研**，你的目的已经不是理解，而是从材料中得出原创的新思想、甚至做出新发现。这可不是灵机一动，更不是空中楼阁的突发奇想。在学术界，整合式综述和荟萃分析都不是简单的文献挖掘、不是科研的辅助，**它们本身就是研究方法**。我打个比方你就明白了：急诊室收治了一个病人，医生甲看到化验单说这是感染，医生乙看到了影像说像是自身免疫处的问题，医生丙询问了病史发现他从高海拔地区回来，护士丁注意到病人最近一直在吃一种新型保健品——每个人说的都是对的，但都只是局部的事实。只有当你把这些事实放在一起、梳理一遍，你才能拼出这个病到底是怎么回事。**有时候真相不在任何一个材料里，真相是在材料之间。**

现代科研体系分工越来越细、高度去中心化，大家各自为政：一般的研究团队找个小问题、做个小实验、得出一个细节式的小结论就发论文了。那么就必须要有人把所有实验结果（定性的、定量的、各种不同条件的）综合在一起，勾画出事情的全貌。做这种调研的一般都是资深高手。这里不需要玄学，其实就好像做拼图游戏一样：**当你把各方的证据都摆在桌子上往一起拼的时候，你一定能看出来更大的故事，而且你一定会发现少了几块拼图。** 那个更大的故事可能就是你的新思想，少的那几块拼图可能就是你的新发现——至少是新发现的起点。

我说个真实故事，可能是历史上最伟大的一次综合调研。1854 年伦敦发生霍乱，医学权威都认为霍乱是一种在空气中传播的瘴气，在实验室里做各种化验、争论不休。而一个叫约翰·斯诺的医生却在做纯文本分析：斯诺把市政局的死者名单、伦敦的街道地图和公用抽水泵的分布图这三组材料放在了一起，在地图上把死亡病例画成一个一个的点，结果真相浮出水面——**数据点密集的围绕着宽街上的那口水泵，原来霍乱不是通过空气，而是通过水源传播的。** 斯诺写写画画就做出了颠覆性的发现。当然现在你不太有机会捡这么大的漏，但你仍然可以烧填补一下空白。

比如我写咱们这个现代思维工具课，绝大部分内容都是对现有理论的总结和提炼，但是有时候我发现拼图缺了一点，就不得不提出几个概念作为原创：比如前面说过的稳态生存、三个自我、主动高认知负荷、赛道选择、状态杠杆、解释框架等，这些说法你在别处绝对搜不到。但这些概念也不是我凭空建的，它们背后都有研究结果的支持，我只是在拼图的空隙处稍微描了一笔。你读多了就会知道：**世界的知识之壁并不是严丝合缝的，它到处漏风**——很多叙事还没有被提炼出来，很多概念还没有被命名，很多关系还只是半明半暗的躺在材料里，它们在等着你去补全。

总结来说：**初级调研读懂对象，中级调研读懂争论，高级调研读出新问题。** 不管哪一级，你都最好通过写作交付调研结果。我认为所有知识工作者本质上都是研究者——你总归会弄出来一点新东西，那也是梳理的思想跟你的大脑这个特定神经网络发生化学反应的结果，此前没人看过你这个版本。

综合调研是最低门槛的研究方式：你不需要做实验，甚至都不需要上街发问卷调查。你从一大堆现成的材料之中挖掘出属于自己的东西、甚至是个新东西，就如同用旧料训练的大语言模型能生产新内容。温故可以知新，只要你运用智能。**知识工作者的荣誉感就在于：我们要在调研结果中留下自己的印记**——也许是几个不曾被注意的图式，也许是一个好用的心智模型，也许是一个独特的洞察，也许是切中时弊的一刀，也许是更有意思的叙事。

我们比的不是谁读过多少页，而是**谁能在纷乱的世界里画出一张更清晰的地图**。读书不是囤积句子，而是升级压缩算法；调研不是搜罗材料，而是安装判断模型；写作不是展示想法，而是让思想成型。
`,k1=`# 052丨默会知识：（但愿）AI 永远都不可能替代的技能

## 讲什么

**默会知识**（tacit knowledge，又译"隐性知识"）：只可意会不可言传的知识。你知道这件事怎么做，但你说不明白，你不能把它写成手册交给别人。概念最早由匈牙利裔英国哲学家迈克尔·波兰尼在 1958 年提出，招牌名言："**我们能知道的比我们能说出来的多。**" 知识像冰山，露出水面的一小角是显性知识，水面下的巨大主体是默会知识。

## 解决什么真问题

给"AI 会抢走我饭碗"的焦虑一个冷静的答案。GitHub 上有人发布"同事.Skill"程序，上传离职同事的飞书消息、文档、聊天记录就能生成一个数字分身替他干活——万维钢的回应：**AI 拿不走你身上最核心的一块资产——默会知识**。就算 AI 能模仿你的语调，也无法彻底替代你。

## 核心论点

- **显性知识**是知道"是什么"（标准操作流程，讲究定义步骤配方）；**默会知识**是知道"怎么做"（手感、火候、分寸和节奏）。菜谱写的是显性知识，菜谱写不出来的功夫是默会知识。
- 默会知识无需保密：厨师就在你旁边颠勺、医生就在你面前下刀，你全程看见了还是学不会。
- 默会知识难以言说，因为那是**一种整合**（波兰尼的"内居"）：我们不是孤立看待事物，而是从许多细小线索出发朝向一个整体意义进行整合。认出熟人的脸不是先测量眉毛长度再算出是张三，而是一下子认出来；弹钢琴得把手指忘掉音乐才能出来。
- 默会知识四个根本区别：**①复杂模式识别**（老医生看一眼气色直觉判断罕见病）；**②强烈依赖情境**（现实总有例外，顶尖销售在不同文化、情绪甚至天气下策略都不同）；**③集体共同财产**（长在人之间的默契："这句话技术上正确但政治上错误"）；**④需要身体参与**（具身认知：手感、平衡、语气、节奏长在肌肉纤维和神经末梢里）。
- AI 已经在吃掉默会知识的外围：人脸识别被 AI 轻松攻克、AI 诊断准确率超过人类医生。**不可言传不等于不可训练 AI，不能写进 skill.md 不等于不能融入大模型的参数。**
- 三个 AI 无法穷尽默会知识的理由：①波兰尼——完全显性的知识不可思议，任何显性规则的应用都建立在更深一层无法言说的默会内化背景之上（公理背后是信念）；②科林斯——人类互动是动态演化过程，机器能捕捉昨天的统计规律但预测不了明天涌现的新默契；③莫拉维克悖论——跟物理世界互动的默会知识是人类肉身演化的结果，不容易被快速句化。

## 关键例证 / 金句

- 伦扁斫轮（《庄子》）："手慢了不行，手快了不行，这个劲到底怎么用？我无法用语言表达，我都没法传授给我的儿子。古人写在书上的，不过是糟粕。" 齐桓公读书，轮扁说"您读的是古人的糟粕啊"。**如果你听说前公司把你写成了 skill.md，你完全可以对他们说一句：你们争留的是我的糟粕。**
- 盲人的手杖不再只是手里的木棍，而成了他身体和感知的一部分。
- 骑车不是记住了动作要领就会骑，是自行车已经部分住进了你的身体。
- 用现在的语言说：**掌握默会知识就是对大脑神经网络进行参数更新和微调**——你说不清哪些参数变了，但它们的确变了。
- 人们想看到的是动态的你，想知道你下一步会给人什么惊喜。我们想调用**真鲁迅**而不是鲁迅的数字分身。

## 如何应用

1. 学习默会知识必须**到现场内居**：先在场看（看师傅如何拿刀、感受处理突发大出血时的冷静氛围），再跟着做（师傅示范你模仿，随时反馈纠错，把后台细节拉到前台），一点点刻意练习直到细节住进身体、长成身体图式。
2. AI 时代建立竞争力：**不要试图藏手艺**——只要把"把人变成智能体"这件事有利可图，就一定会有比你手更快的同行先把这套手艺卖给智能体公司。与其藏着掖着，不如把能写出来的流程都写出来，变成你的杠杆，提高工作效率。
3. **把经历投放到明天的新默会上**：抢占高情境、高例外、高责任的位置——诊断、谈判、架构、选题、审稿、用人、危机应对、品牌判断，每一个微决策都会沉淀你的新手感。暂时抢不到也要进现场内居，绝不能不练纸上谈兵、什么都让 AI 代做。你甚至不是为了把事情做对，而是为了积累手感，把技能长在自己身上。
4. 长期看最值得积累的默会知识：**你自己的独特审美、人设和信任关系**——语言节奏、判断风格、幽默感、价值函数、与众人之间的默契。

---

## 全文（清洗后的课程转录，重点加粗+底纹）

欢迎来到现代思维工具课，我是万维钢。随着 AI 智能体大规模到来，网上流传一个有点惊悚的玩法，听着就像是电视剧《黑镜》里的情节：**有人在 GitHub 上发布了一个程序叫"同事.Skill"**，它能为你已经离职的同事做一个数字分身。只要上传这位同事的飞书消息、钉钉文档、微信聊天记录、邮件、各种截图以及任何带有他痕迹的东西，再加上你对他的描述，程序就能利用这些素材生成一个 AI skill，然后就可以此构建一个智能体，替他干活。同事已经离职了，他的工位是空的，可是代表他的智能体却正在公司里昼夜的加班，甚至比以前还勤奋。这岂不是可悲吗？人们难免会想：下一个是不是自己？甚至下一次公司会不会先提取我的 skill、再把我直接裁掉？

这一讲也许带给你一颗定心丸。**我不认为你对公司的价值真的可以蒸馏成一个 skill 文档。** 就算 AI 能模仿你的语调、能复刻你，它依然无法彻底替代你，因为它拿不走你身上最核心的一块资产，它叫做**默会知识**。

所谓默会知识，简单说就是那些只可意会不可言传的知识：你知道这件事怎么做，但是你说不明白，你不能把它写成手册交给别人。与之相对、可以言传的则叫**显性知识**。比如你学炒菜，得到一本菜谱，上面写着"中火热油，葱姜爆香，收汁至挂勺"。每个字你都认识，可你还是不知道怎么炒：到底啥叫中火？它不是煤气灶的旋钮，它跟锅灶、油量、食材、含水量都有关系；爆香是葱姜和油在第 12 秒发生的化学反应吗？那是一个必须根据声音、气味和颜色一起判断的实际；还有挂勺是啥意思？必须有个师傅在现场教你。他也说不清具体的判断标准，但是他会指给你：现在可以翻，再等一秒，闻到了吗？就是这个点。你自己用心体会。**菜谱上写的是显性知识，菜谱写不出来的功夫是默会知识。**

用英国分析哲学家吉尔伯特·赖尔的说法，前者是"知道是什么"，后者是"知道怎么做"；前者是标准操作流程，讲究定义、步骤和配方，后者讲究的则是手感、火候、分寸和节奏。显性知识有时候会被人保密起来，但默会知识无需保密：厨师就在你旁边颠勺，医生就在你面前下刀，老程序员就在你屏幕共享时改代码——你全程都看见了，可你还是学不会。**如果你的所有知识都是来自于文本的显性知识，让你上手实操就是非常危险的，操刀必须有默会知识。**

默会知识这个概念最早是由匈牙利裔英国哲学家迈克尔·波兰尼在 1958 年提出的。波兰尼有一句招牌式名言："**我们能知道的比我们能说出来的多。**" 他把知识比做浮在海面上的冰山：露在上面的一小角是显性知识，而水面下的巨大冰山主体就是默会知识。波兰尼成为哲学家之前原本是个做物理化学的科学家，早年在实验室里他就意识到：真正让科学家做出判断的绝不只是论文里那些公开的方法，还有一整套说不清的直觉、手感、经验和信念。

为什么默会知识难以言说呢？波兰尼说，因为那是一种**整合**：我们并不是孤立地看待事物，而是从许多细小线索出发，朝向一个整体意义进行整合。比如你看一位熟人的脸，并不是先测量眉毛长度、鼻梁角度和眼比例然后算出这是张三，你是一下子就认出来了。钢琴家不是先盯住每根手指再把它们拼成音乐，恰恰相反，他得把手指忘掉音乐才能出来。这就如同你拿锤子钉一颗钉子：你的注意力在钉头上，但你的手部肌肉、握锤的力量、手臂的角度都在进行极其复杂的实时修正。这些微小的修正不但难以言说，而且也是不应该言说的——**如果你试图把那些动作拆解成语言说出来，你反而不会钉子了。** 虽然不能言说，但那些后台细节构成了默会知识，恰恰是你理解和发挥的基础。而要掌握默会知识，就必须把那些细节给内化，用波兰尼的说法叫做**内居**：先是你住进工具、技能和细节里，随后他们长进你身上，你们合二为一。就如同盲人的手杖不再只是手里的木棍，而成了他身体和感知的一部分。你不是因为记住了动作要领而会骑自行车，是自行车已经部分住进了你的身体。用现在的语言来说：**掌握默会知识就是对大脑神经网络进行参数更新和微调**——你说不清神经网络的哪些参数怎么变了，但它们的确变了。

默会知识跟显性知识有四个根本区别，使得它难以被写进 skill.md。

**第一，默会知识是复杂的模式识别。** 资深医生看一眼病人的气色，就能直觉性地判断出某种罕见病。你说他是怎么看出来的？是哪个线索点告诉他的？说不清。这种直觉是对长期实践的内化，是对一万次试错的高度压缩。

**第二，默会知识强烈依赖情境。** 你可以写一大堆规则说遇到这种情况应该怎样、那种情况应该怎样，可是现实事件总是有例外。一个顶尖销售在不同文化、不同情绪甚至不同天气下跟客户交流的策略都不一样，讲究一个随环境变化的分寸感，那些变化你写不完。新手医生看的是指南，高手医生看的却是这个病人现在适不适合按照指南办；值班经理看的不是流程图，而是这个异常到底是不是异常。

**第三，默会知识经常是一个集体共同的财产，是长在人与人之间的知识。** 一个团队在一起待久了，就会形成什么时候先别说、什么时候该追问、什么程度算越界、哪种玩笑能开、哪种表态要慎重；什么叫"这句话技术上正确但政治上错误"，什么叫"这个会今天最好别开"。这些不是个人的脑内小剧场，而是整个共同体长期磨出来的默契。

**第四，默会知识往往需要身体的参与。** 认知科学中有个**具身认知理论**，就是说很多知识不仅仅在大脑里，也在你的肌肉纤维和神经末梢里。火候手感、平衡、语气、节奏停顿、抬眼的时机，这些东西是毫秒级整合，不是自然语言那种线性带宽能完整承载的。请问你怎么蒸馏这些知识？人必须在现场才行。**skill.md 只能迁移一个员工的显性知识，却无法还原他的灵魂。**

那我们怎么学习默会知识呢？这不用担心，只要是知识它就能被传授，问题是不能只靠手册，你必须**到现场内居**。今天哪怕互联网如此发达，像外科医生、飞行员、甚至木匠这些职业，依然保留着最古老的知识传承方式——师徒制，你最好有个师傅在旁边指导。首先是在场看：你不能指望通过看视频就学会做手术，你得在现场站在师傅旁边看他如何拿刀，感受他处理突发大出血时的冷静氛围，看他如何跟护士配合。然后你跟着他一起做：师父示范你模仿，他随时给反馈纠错；一遍没看明白，师父就把后台的细节拉到前台让你仔细再看一遍，一点一点的刻意练习，直到这些细节慢慢住进你的身体、长成身体图式。如果你没有正式的导师，可以观察身边那些处理复杂人事、复杂危机的高手，看他们在正式会议之外是怎么说话的，看他们的微表情和节奏感，然后自己在实践中揣摩。

好，现在最重要的问题来了：**AI 有没有可能吃掉人的默会知识呢？** 波兰尼 1976 年就去世了，他没有看见我们看见的 AI。他当年最爱举的例子——人脸识别，现在已经被 AI 轻松攻克了；机器人可以学会骑自行车，甚至自行车自己都能稳定前进。机器并不需要你写出显性的识别规则，它自己通过足够多的数据和训练，默默吸收无数个细节，就能抓住那些规则无法言说的东西。说到底 AI 是神经网络，人脑不也是个神经网络吗？如果文本记录不能代表一个同事的一切，那我结合影像记录，把它所有的动作、说过的每一句话、每一个微表情都记录下来，够不够呢？现在手术就已经被搞成了数据原生环境，多模态信息流支持实时决策、预测建模和个性化流程，我们怎么就不能训练一个机器人医生呢？

现实是 **AI 已经在吃掉默会知识的外围**：AI 的诊断准确率已经超过人类医生，医生正越来越接纳、甚至依赖 AI 诊断；我们正在见证 AI 员工的水准超过人类员工。**不可言传，不等于不可训练 AI；不能写进 skill.md，不等于不能融入大模型的参数。**

但是前人对默会知识的思考还是会给我们一点底气。也许 AI 终究不能穷尽所有的默会知识，我们至少有三个理由：

**第一个理由还是来自波兰尼**：他认为一种完全显性的知识是不可思议的，因为任何显性的规则应用一定是建立在更深一层无法言说的默会内化背景之上。你这个定理背后是一个更深的定理，最终归结于几个公理，而那些公理背后没有别的公理——它们只能是不讲理的，是我们的体感和信仰。**AI 敢做出越界式的信仰吗？**

**第二个理由来自科学社会学家哈里·科林斯**，正是他提出了咱们前面说的集体的默会知识。这个洞见是：**人类的互动是一个动态演化的过程**，你机器就算能完全捕捉昨天的统计规律，你也没有办法预测我们明天涌现出来的新默契。小李离职了，我们跟他的数字分身的互动，和现在这个小李的互动怎么可能一样呢？也许公司的竞争力就来自那个不一样的地方。

**第三个理由是具身认知**：为什么 AI 国际象棋和做数学题都已经比人厉害，但是让机器人收拾碗筷却这么难呢？这叫**莫拉维克悖论**。答案可能是：跟物理世界互动的这种默会知识是人类肉身演化的结果，它也许不是那么容易就被快速句化的。

平心而论，我认为这些理由并不是绝对的，但这些都是非常有用的思考点。至少暂时来说，如果我们人类还有一点优势，这些默会知识就是我们的优势。

那么身处 AI 时代，我们应该如何靠默会知识建立自己的竞争力呢？直观的想法可能是：让我的手艺尽量不要数据化，不让人看见我这项活是怎么干的，我只给结果不解释过程，这样才能避免被人写成 skill——**但这是没有前途的。** 你放心，只要把"把人变成智能体"这件事有利可图，就一定会有一个比你手更好的同行，先把这套手艺卖给智能体公司。你与其藏着掖着，还不如把能写出来的流程都写出来，变成你的杠杆，提高工作效率。**如果昨天的默会注定要被自动化，那我们就要把精力投放给明天的新默会。**

这首先意味着**抢占高情境、高例外、高责任的位置**：这里异常多、反馈快、边界和责任归属难以界定、容易发生价值冲突，你在这里的操作是难以标准化的。诊断、谈判、架构、选题、审稿、用人、危机应对、品牌判断等等，每一个微决策都会沉淀你的新手感。如果暂时抢不到那样的位置，也一定要进现场内居，而绝不能纸上谈兵或者什么都让 AI 代做。**你甚至不是为了把事情做对，你是为了积累手感，你得把技能长在自己身上。** AI 会的都是公共基础设施，默会知识才是你的私有资本——否则将来凭什么给你更重要的位置？

长期看，任何人最值得积累的默会知识是自己的独特审美、人设和信任关系：你的语言节奏、你的判断风格和幽默感、你的价值函数、你和众人之间的默契。AI 就算能百般模仿也没用，因为**人们想看到的是动态的你，想知道你下一步会给人什么惊喜**。有人可以很成功的让 AI 用鲁迅的笔法写今天的视频，但那并不是我们想要的。我们想要的是：如果鲁迅活在今天、有切身的经历、见证了这么多年新的历史，他会如何评价今天的事情？**我们想调用真鲁迅，而不是鲁迅的数字分身。** 归根结底，到了物质极大丰富的那一天，人与人之间互相关心的肯定不是对方的技能包，而是对方本人。

说到默会知识，我们不能不提《庄子》里的一个小故事，叫**轮扁斫轮**。齐桓公在堂上读书，有个叫轮扁的木匠在堂下制作轮子。轮扁问齐桓公说："您读的是什么书啊？"桓公说："圣人之言。"轮扁冷笑一声说："那是古人的糟粕啊。"齐桓公怒了："你说不出个道理来，我就宰了你。"轮扁说了一番话，2000 年后的波兰尼也不能超越。轮扁是这样说的："就拿我制作轮子这个事来说，手慢了不行，手快了不行，这个劲到底怎么用？我无法用语言表达，我都没法传授给我的儿子。所以我今年七十了，还在这当木匠。那你说古人的手艺又怎么能都写在书上呢？你读的这些显性知识岂不就是糟粕吗？"

**如果你听说前公司把你写成了 skill.md，你完全可以对他们说一句：你们蒸馏的是我的糟粕。**
`,x1=`# 053丨可取（以及不可取）的困难：把身心调到最适合学习的状态

## 讲什么

学习这门手艺的"姿势"问题：**学习需要的是可取困难（desirable difficulties），而不是吃苦。** 可取困难是对学习有益的阻力——它会让你的短期表现变差，但能让你的长期记忆和迁移能力变强。这个概念是加州大学洛杉矶分校心理学家罗伯特·比约克在 1990 年代提出来的。

## 解决什么真问题

破除"美苦硬吃"的教育迷思。中国青少年抑郁症状检出率已达 26.17%（2024 年荟萃 439 项研究），正是苦学压力造成的：跑操还要背书、课间十分钟取消、长期睡眠不足、当众羞辱式挫折教育。万维钢用认知科学拆解：**头悬梁锥刺股是愚蠢的自我感动，是拿神经系统的磨损冒充认知能力的增长。**

## 核心论点

- **两个微观层次**：一个知识点要进入大脑，①能不能学进去——毫秒到一秒尺度，大脑做价值判断，问的不是难不难苦不苦，而是"这东东不新、值不值得关心、有没有奖励"；有正面答案就释放多巴胺，让海马体开门（好奇心是学习注意力最好的钩子）。②能不能理解——大脑最重要的指标是**唤醒度**（紧张兴奋程度，由去甲肾上腺素调节），太低心不在焉、太高紧张慌乱，学习需要中等唤醒度——"可控的兴奋"。
- **恐惧制造服从，而不是制造理解**。高压刺激打击前额叶皮层，威胁和评判降低工作记忆表现。最有利于学习的情绪配方是：**安全感打底 + 好奇心点火 + 适度压力提速。**
- **表现 ≠ 学习**：小明飞快刷完 10 道简单的练习题让家长开心，但那不是学习只是表现；把教科书翻来覆去读 100 遍的流畅感也是能力错觉。
- **三种可取困难**：①提取练习（多搞小测验，费力地想就是可取困难）；②时间间隔（每天一小时连续五天好过一天猛学五小时，费力回忆上次学到哪是增强突触连接）；③交错学习（不同学科混搭，切换的混乱感加深记忆，逼迫大脑识别深层结构）。
- **不可取的困难**是从外部施压：增加毫无价值的外在负荷，让学生跟疲劳、干扰和威胁较劲。
- 提高脑力状态的两件事：**运动**（考前 20 分钟中等强度有氧，乳酸跨过血脑屏障给神经元供能、刺激 BDNF"大脑化肥"）和**睡眠**（是学习的后半场：清理代谢垃圾 + 海马体把短期记忆转写为长期记忆）。

## 关键例证 / 金句

- 比约克夫妇最重要的洞见：**你必须把表现和学习分开。** 小明作业刷得快是表现，那些题对他没难度，他没学到任何东西。
- 72% 的初中生报告提取练习让他们在正式考试时没那么紧张。
- 上海学生研究：最有利于学习成绩的睡眠时长是每天 8 小时。
- 睡眠被古代教师视为懒惰是最大的认知错误之一——**没有任何一个教练会让自己运动员少睡还说这叫磨炼意志**。
- 真正的刻意练习都是高强度的，一般每天能保证三四个小时就够了，其他都是辅助时间。
- **人困了应该睡觉，而不是用挣扎自己。**
- 学习不是干体力活，不是咬牙就能再坚持一下、或者用鞭子抽就能更卖力。学习是非常精巧的大脑活动，需要一定的氛围。

## 如何应用

1. **运动员式学习流程**：学新东西前先用一个问题暖场点量；正式学之前运动 10–20 分钟稍微提高唤醒度；学习时以提取、间隔、交错为主（不以重读为主）；难点尽量手写，深度阅读尽量纸读；把睡眠写进学习计划而不是写进忏悔录。
2. **手写 > 打字**：手写慢，迫使你重新组织语言、翻译成自己的句法，这种慢是可取困难，激活更丰富的感知运动整合。
3. **纸书 > 屏幕（严肃内容）**：纸张提供稳定的空间坐标，内容有位置感——那是你挂记忆的地方，海马体最早就是用来记忆空间位置和导航的。
4. **想不出答案就站起来走几步**：走路提高唤醒度、打破过度聚焦、看见别的路径；在安静自然的物理环境里走还能改善情绪。
5. 家长/教师操作：允许孩子课间去操场跑一身汗回来——那不是浪费时间，是在促进学习；把晚自习和早自习取消、少留作业让孩子多睡（青少年每天 8–10 小时）。

---

## 全文（清洗后的课程转录，重点加粗+底纹）

欢迎来到现代思维工具课，我是万维钢。我们已经讲了那么多学习的方法和内容，这讲咱们说说**姿势**。你说学习是需要吃苦的吗？民间智慧认为学习就得苦：什么头悬梁锥刺股，什么学海无涯苦作舟——似乎如果不伴随着某种程度的肉体折磨和精神压抑，那就不叫学习，而叫玩。再加上稳态生存观念把吃苦当成美德，人们不但歌颂吃苦，而且还要自找苦吃、美苦硬吃。

我当年上学的时候中国已经很进步了，我做梦都想不到，今天的中国反倒成了这个样子：学生们一大早就被叫起来跑操，跑操的时候都要带着一本书背；课间十分钟都被取消，中午吃个饭都吃不消停；长期睡眠不足，还要被搞当众羞辱的挫折教育。**这些真的是考出好成绩的必要条件吗？** 还是说那些学得睡得饱、心情舒畅的孩子都是顽劣？2024 年一项荟萃 439 项研究的系统综述估计，中国儿童和青少年抑郁症状检出率已经达到了 26.17%。这个局面很不正常，而它恰恰是由美苦硬吃的学习压力造成的。

我为什么敢这么说呢？有针对 20 万中小学生的研究发现，在 2021 年国务院推出"双减"政策（减轻作业负担、减轻校外培训）之后，学生的睡眠时长增加了，抑郁和焦虑感就下降了。一项针对深圳学生的研究发现，作业时长与睡眠和心理健康之间并不是简单的"作业多、健康越差"，而是有一个阈值，超过阈值才开始恶化。最关键的是：**为了写作业而牺牲睡眠，哪怕单纯从学习成绩角度看也是不可取的**——一项对上海学生的研究发现，最有利于学习成绩的睡眠时长是每天八小时。一帮中小学生能有什么大不了的学习内容，连睡眠都得牺牲。**美苦硬吃是愚蠢的自我感动，是拿神经系统的磨损冒充认知能力的增长。**

咱们从微观尺度考虑：一个知识点要想进入大脑，必须解决两个层次的问题。第一层是**能不能学进去**，也就是在这一刻，这个东西能不能被你注意到，你的大脑是否判断它值得写入；第二层是**能不能理解**，也就是你有没有能力把它写成可用的知识。

能不能学进去这一层发生在毫秒到一秒的时间尺度上。大脑会做一个迅速的价值判断，但它问的可不是"这题难不难"，也不是"这事苦不苦"，而是"**这个东西新不新、值不值得关心、以及有没有奖励**"。如果答案是正面的，大脑就会释放多巴胺，让海马体愿意开门，让这个东西能够被记住。这就是为什么说兴趣是最好的老师、为什么好奇心最能吸引学习注意力，这也是为什么有些孩子对课堂知识怎么也学不好、但是对打游戏之类的事一学就会。研究发现：如果一个问题能真正勾起好奇心，人学过之后对这个问题答案的记忆通常会更好，因为多巴胺给海马体上了 buff。

对能不能理解这一层来说，大脑最重要的指标是**唤醒度**，也就是紧张兴奋的程度，主要由去甲肾上腺素调节。如果唤醒度太低，人心不在焉甚至很困，当然学不好；但是唤醒度太高也不行，紧张慌乱也没法学习。学习需要**中等的唤醒度**，理想的情绪状态是一种"可控的兴奋"：我知道这个事很重要，我有点上头，现在很投入，但是我不害怕。如果你已经很困了，需要头悬梁锥刺股才能让自己保持清醒，那这个状态并不适合学习；父母用高压逼着孩子写作业、甚至打骂，那更不是学习状态。

现实是**高压刺激会直接打击大脑的前额叶皮层，削弱前额叶的控制力**：威胁和评判会降低工作记忆表现、干扰相关脑区的活动。压力一旦冲得过猛，前额叶就容易掉线，结果灵活推理、工作记忆和认知控制都会受损——人会更僵硬、更短视，那个状态更像是在避险，而不是在学习。简单说，**恐惧制造服从而不是制造理解**。学习不是干体力活，不是咬牙就能再坚持一下、或者用鞭子抽就能更卖力。学习是一种非常精巧的大脑活动，需要一定的氛围。最有利于学习的情绪配方是：**安全感打底 + 好奇心点火 + 适度压力提速。**

但学习毕竟不是玩，你不可能刷短视频就能成为高考状元，你必定要克服一些困难才行。那是什么样的困难呢？答案是**可取困难**。这个思维工具是加州大学洛杉矶分校的心理学家罗伯特·比约克在 1990 年代提出来的。可取困难是对学习有益的阻力。比约克和他妻子伊丽莎白共同做了大量的研究，他们一个最重要的洞见是：**你必须把表现和学习分开。** 比如今天作业是十道练习题，小明拿过来刷很快做完了，家长很开心说这孩子真爱学习——但那并不是学习，那只是表现。那些题对他来说没有任何难度，他没有从这次作业中学到任何东西。同样道理，把教科书翻来覆去读上 100 遍，你会读得很流畅，这种流畅感会给你带来一种"我已经掌握了"的错觉，但那也不是学习。其实咱们前面讲过刻意练习，你已经知道这个道理了：在学习区练习才叫学习。比约克夫妇则是从微观角度强调：阻力也就是可取困难，虽然会让你的短期表现变差，但能让你的长期记忆和迁移能力变强。

关于可取困难的实验研究很多，我们列举三个最实用的操作心法。

**第一，提取练习**，也就是多搞小测验。一次小测验比重读一遍书有效的多，因为你必须费力的想，这是可取困难。

**第二，时间间隔**。与其一天猛学五小时，不如每天学一小时、连续学五天。每次重新拿起书本、回想前一天断开的那个点，这种遗忘感是一种可取困难。当你集中注意力工作的时候，你不希望被打断；但是对于学习，每天打断一次反而是好事——**在你费力地回忆上次学的内容的时候，你的大脑正在加强突触连接。**

**第三，交错学习**。不要这一周只学数学、下一周只学英语，要把不同学科或者同一学科的不同内容混搭交错进行。切换带来的混乱感能加深记忆，还能逼迫大脑去识别问题的深层结构、判断这题到底是哪一类，而不是调用记忆。

其实还有一个方法是让学生先猜后学：给个新内容让他们自己先试一试，然后老师再讲解。但是我们前面讲认知负荷理论的时候说过，这种教法过于高级，往往不如直接教学效果好。简单说，**可取困难是让学生跟所学的内容较劲，是在内在负荷的范围内折腾；而不可取的困难则是从外部施压，给学生增加毫无价值的外在负荷，让他们跟疲劳、干扰和威胁较劲。** 而且可取困难不会增加焦虑——有研究发现 72% 的初中学生报告说，提取练习让他们在正式考试时没那么紧张。

说到这里你可能会想：如果学习有适合状态和不适合状态，那我能不能再做一点别的事情来提高这个状态呢？我不搞头悬梁锥刺股，我想用科学的方法让大脑提高一点、让学习效果再好一点，行不行呢？可以。

一个是**锻炼**。比如说你马上要参加考试，或者要去学一个比较难的内容，想要在短时间内提高脑力，最好的办法并不是喝咖啡，而是出去搞一把 20 分钟左右中等强度的有氧运动——快走、慢跑、爬楼梯、跳绳、做几组深蹲。运动不但能把你从昏睡状态提升到竞技状态、提高唤醒度，而且还能产生乳酸：有研究表明运动产生的乳酸可以跨越血脑屏障进入大脑，直接为神经元提供能量，甚至能刺激一种叫做**脑源性营养因子（BDNF）**的物质分泌——这种营养因子被称为"大脑的化肥"，能促进神经元的生长和突触的连接，从而加强学习和记忆。当然你不能指望出去跑两圈回来立即就变聪明很多，那个效应并没有那么大，但是它非常可靠、稳定地存在。**哪怕让孩子们在课间十分钟去操场上玩一会、跑一身汗回来，那也不是浪费时间，那是在促进学习。**

另一个是**睡眠**。古代教师最大的一个认知错误就是把睡眠视为懒惰。其实**睡眠是学习的后半场**：睡眠不只是休息，更是大脑的清理和归档时间。当你睡觉时，大脑的类淋巴系统会清除代谢垃圾，这种脑脊液"洗脑"的物理冲刷过程几乎只在睡眠中发生；同时你的海马体会把白天的短期记忆转写到大脑皮层变成长期记忆，包括睡觉做梦都是对白天所学知识的演练。现在科学家越来越重视睡眠，但知识的作用是有限的，现在的问题是青少年睡眠严重不足。如果你每天睡不到六小时，会有积累性损伤的风险，会伤害长期记忆。青少年需要比成年人更多的睡眠：成年人每天应该睡至少七小时，研究共识对青少年的建议是每天睡八到十个小时。这意味着学校应该把晚自习和早自习都取消，少留点作业，让孩子们多睡会。**没有任何一个教练会让自己运动员少睡，还说这叫磨炼意志**——那为什么老师和家长不创造条件让孩子们多睡会呢？有学者主张中学上学时间不应该早于八点半。

那你说作业写不完怎么办？写不完应该抵制。其实我们该学的东西就这么多，只要方法得当根本不需要熬夜。**学习讲的是强度而不是时长**，不是做了多少张卷子。真正的刻意练习都是高强度的，一般每天能保证三四个小时也就够了，其他都是辅助时间，该放松放松、该睡觉睡觉。如果不能保证在充足睡眠的前提下学好那些东西，不充足睡眠就只能更学不好。**人困了应该睡觉，而不是用挣扎自己。**

如果你还想进一步用身体帮助大脑思考，那就要用到现代神经科学和心理学的**具身认知**学说——我们上一讲说默会知识的时候提到过，这是更有人类特色的一种认知方式。具身认知就是说：身体的动作、姿势、触觉和空间定位都会参与大脑的建模过程，理解并不只是发生在大脑里的符号运算。身体不只是服务大脑 CPU 的供电设备，**身体是思考的一部分**。很多时候不是你先想明白了才动手，而是你一动手脑子才开始明白。咱们讲四个基于具身认知的学习心法。

**第一是动手做动作。** 做数学题可以用手悬空比划，学习几何可以用手沿着图形的边旋转方向去描。研究（特别是对于儿童）表明数学课上动手能加强解题能力和概念理解。在外语课学新单词，如果是动词，最好全身一起上阵把动作做出来。学习解剖生理学的时候，对着模型或者图片指点、描画。这些动作并不是装饰，而是在替你的工作记忆减负。

**第二是手写。** 有大量研究表明手写笔记比打字更能加深理解和记忆。打字的问题是速度太快，你更像是一个速记员；手写比较慢，所以你会被迫重新组织自己的语言、把内容翻译成自己的句法——**这种慢反而是一种可取困难**。研究发现手写的时候大脑的连通模式比打字更广泛更复杂，手写激活了更丰富的感知运动整合过程。

**第三是读纸书。** 我经常读电子书，也总用手机看东西，但如果你读的是严肃内容、特别是如果有时间压力需要快速掌握和深层理解，你最好读纸质版。因为**纸张提供了一个稳定的空间坐标**：书里的内容有天然的位置感——它出现在书中多厚的地方，是在这一页的左上角还是右下角？这种位置感不是多余的信息，而是你挂记忆的地方。别忘了大脑中负责长期记忆的海马体，最早就是用来记忆空间位置和导航的。所以越难的东西、特别是需要你批注和画线的，最好上纸。另一个思路是给电脑上大屏幕或者多给几块屏幕，也能增加位置感。

**第四是想不出答案就站起来走几步。** 走路可以帮你拓展思路、生成创造性的想法：走路能稍微提高大脑的唤醒度，让你更精神一点；走路可以打破过度聚焦——有时候你想不出来是因为你盯得太死，只看见眼前那一点东西，走路会让你看见别的路径、联想到新的解法。如果是在比较安静、自然的物理环境里走，还能改善你的情绪和压力状况。

作为碳基生物，知识不是被直接输入进我们大脑的——**知识是在身体的参与下长出来的结构**。我希望各位学员能像运动员那样对待自己的身体和大脑。你是碳基生物，你不是通电就能用，你有不同的状态：有些状态更适合学习，有些状态适合休息。修仙小说里的人经常要焚香沐浴，运动员上场之前都要热身控压找状态，我们也得有点仪式感。

一套最朴素的"运动员学习流程"差不多是这样的：学新东西前先用一个问题暖场点量；正学之前先运动 10 到 20 分钟稍微提高唤醒度；学习时以提取、间隔、交错为主，不以重读为主；难点尽量手写，深度阅读尽量纸读；把睡眠写进学习计划，而不是写进忏悔录。

**最重要的一点：学习需要可取的困难，但不是吃苦。学习是训练你，不是消耗你。** 一个学习高手应该让自己的身心处在一种灵动而不是僵化的状态。
`,A1=`# 055丨人力资本、信号筛选和社交资本：学校教育到底是干啥的？

## 讲什么

把教育拆成三种功能：**人力资本**（教本事）、**信号筛选**（考试排序）、**社交资本**（社会关系）。三个思维工具代表教育的三种功能，而且在不同教育阶段三者的权重会发生戏剧性偏转：小学拼人力资本、高中拼信号筛选、大学拼社交资本。

## 解决什么真问题

解开"分数到底能不能代表能力"的死结。你之所以纠结，是因为**你对一个教育场域有太多的期待**——又想公平又想效率，又想抓分数又骂应试。现实是教育有多种功能，不同阶段的主要功能不一样，到哪个场域就干什么事。

## 核心论点

- **人力资本**是教育的初心和使命：知识、技能、思维方式、良好习惯，让人成为守法公民和合格劳动者。它跟学校的师资力量很有关系——有些课程不能普及不是学生接受不了，而是没有那么多高素质老师。
- **信号筛选**是教育的选拔分流功能：好工作岗位、好大学只有这么多，让谁上？考试是最公平的办法。**分数是主动发出的信号，这个信号必须足够昂贵才有效**——必须确保比你水平差的人无法模仿，就像孔雀拖着庞大美丽但对生存毫无意义的尾巴，那是向雌孔雀发出"我身体好基因强"的信号。
- **社交资本**是教育的社会化功能：学校是一群同龄人长期相处的圈子，同学本身就是课程，从同学身上学到的东西（尤其是各种默会知识）往往比跟老师学的更值钱。
- 阶段配比（万维钢综合 GPT 和 Gemini 的调研估算）：小学人力资本 80% + 信号筛选 5% + 社交资本 15%；初中 45% + 40% + 15%；高中 10% + 80% + 10%；大学 30% + 20% + 50%。
- **小学是塑造器而不是选拔器**：小学生最重要学的是现代社会的"基础操作系统"（读写、计算、注意力、习惯、自控、合作、表达、遵守规则），不是奥数难题。小学成绩落后不算真落后，11 岁前落后后面还有机会追回来。早教优势在一到三年内会被抹平甚至逆转。
- **高中是一台信号筛选机器**：高考考偏怪知识不是为了教育，而是为了给学生排序。全体考生高水平发挥和全体低水平发挥效果一样——这是中国最根本的内卷和内耗。
- **大学是进入社会之前最后的试炼场**：大学的牌子已经把信号价值分配完毕，研究生学历越来越不值钱。大学学的不只是专业知识，更是怎么在复杂组织里做事（做项目、进实验室、实习）——这叫隐性课程。**顶尖大学是唯一能把一批高潜力年轻人聚在一起互相训练的地方。**

## 关键例证 / 金句

- 费曼在巴西的发现：巴西学生用课本标准方法问能对答如流甚至精确计算，换个问法就不会了——他们不知道水和玻璃就是有折射率的介质。费曼说："巴西没有在教科学，这些学生只是死记硬背了一堆知识点。"
- 教育成了"传销式骗局"：我们教的不是真正的物理而是物理课，教出来的学生只会考试，考上的学生又只是教下一代怎么考试。
- 精英大学录取分数线那一点点差距，后来就是会转化成毕业生的工资差距——信号筛选是孔雀最重要的任务。
- 大学里最珍贵的是同学：怎么给导师发第一封要推荐的邮件、怎么争取实验室机会、怎么开会发言不废话、怎么判断一个机会值不值得追。
- 万维钢自己："我在大学遇到了几位好老师，但很多本领不是跟老师学的，而是跟同学学的。"
- 高考改革正确路线是**加大难度**而不是降低难度：加大难度让聪明学生平时多学点真学问、考试前不用拼命备战也能考出好成绩；降低难度只会逼学生钻更没意义的怪题。

## 如何应用

1. 家长定位：小学阶段最重要的不是成绩而是打底，找综合素质好、对学生好的老师；小学搞分流（考重点初中）是完全错误的政策——标签贴太早，把偶然差距制度化，是扩大不公。
2. 学生心态：接受高考设定，不要纠结有用没用，**把高考当成一场体育比赛，用竞技精神完成高中三年**——考试特别适合刻意练习，完全可以科学训练。
3. 大学生：别用上高中的方式上大学（一门心思积累 GPA、天天准备下一场考试、大一就进入考研预备）——那就错过了大学教育最值钱的部分：社交资本。多跟不同年级、不同专业的同学交往，把大学当成高容错率的社会沙盒游戏。
4. 教育者/政策者：小学是塑造器不是选拔器，学生最重要不是领先而是打底；初中毕业的人已具备现代社会基础生存能力；蓝领工人不需要专门分流培训，应该尽量让每个人都有机会上大学。

---

## 全文（清洗后的课程转录，重点加粗+底纹）

欢迎来到现代思维工具课，我是万维钢。如果只是为了学习知识，我们为什么非得让孩子跟几十个人一起规整地坐在教室里，听一个其实也没有多少经验的老师讲那些早就标准化的内容呢？官办教育是机器大工厂时期的产物，难道不是早就已经落后于时代了吗？没人知道该怎么搞教育改革。有些家长选择让孩子退出学校、自己在家教（美国叫 homeschooling，已经发展出一套成熟体系），但是多数人没有这个条件，而且效果也不见得有多好。

这一讲不是呼吁改革，是我想帮你把思路理清一点：**学校到底是个干什么用的地方？** 半学都说要教书育人，但是今天的学校都在卷考试分数。关于教育的一切纠结就在这里：分数真的能代表能力吗？我们一边抱怨应试教育，一边从小学就开始狠抓分数和竞赛证书。我们既想要公平，希望考试面前人人平等；又想要效率，最好有一种更好的选拔机制，把我家那个真正的人才精准识别出来，让他免受应试教育之苦。可是哪有既要又要的好事呢？

在我看来，你之所以纠结是因为**你对一个教育场域有太多的期待**。现实是教育有多种功能，而不同教育阶段的主要功能是不一样的。小学才是学真本领的地方，高中生的主要任务是考大学，而大学则更多的是个社交场所。我们说三个思维工具——**人力资本、信号筛选和社交资本**，它们代表教育的三种功能。

**人力资本是教育的初心和使命，简单说就是教本事。** 人力资本包括知识、技能和思维方式，还包括良好的习惯，让人成为一个守法公民和合格劳动者、在社会立足。人力资本跟学校的师资力量很有关系：这个老师教不明白，换个老师教就豁然开朗；有些更适合时代也更有用的课程之所以不能在全国普及，不是因为学生接受不了，而是因为我们没有那么多高素质的老师。

**信号筛选则是教育的选拔分流功能，说白了就是考试排序。** 好工作岗位、好大学和好高中只有这么多，让谁上呢？考试是最公平的办法。按理说学习是第一位的、考试是第二位的，特别是像高考一分之差就能刷掉成百上千人，这从学习简直不可思议：这两个孩子没有差距，凭什么这个上重点大学、那个只能上普通大学呢？为了那一分的差距付出那么大的代价，值得吗？**值得，这是经典博弈论。** 人的真实能力是个综合性的复杂事物，大学没有办法精确判断这个学生到底行不行，雇主也没有时间调研求职者有没有真本事。这种情况下，高考分数是你主动发出的信号。**这个信号必须足够昂贵才有效**，因为你必须确保比你水平差的人无法模仿。这就如同孔雀必须拖着一个庞大美丽但对物质生存没有任何意义的尾巴——那是在向雌孔雀发出信号：我有实力长出这么大的尾巴，我不怕这个累赘，说明我身体好、基因强。

在中国这里没有半点虚的：有研究证明，**精英大学录取分数线的那一点点差距，后来就是会转化成毕业生的工资差距**。信号筛选是孔雀最重要的任务。

**社交资本**我们前面讲过，是社会关系，它能影响流动性。学校不只是学生向老师学习的地方，也是一群同龄人长期相处的圈子，你还可以从同学身上学到东西，尤其是各种默会知识。你在寝室里学到的不仅是忍受室友的吵闹，还有如何处理人际冲突。很多人影响一生的榜样是某个同学。有研究在大学中随机分配室友，发现你的室友的学习成绩会影响你的成绩、你室友加入哪个社交组织会影响你的决定。从社交资本角度讲，让孩子自己在家受教育是错误的决定——**青少年需要社交**：同学之间互相帮助、互相模仿、共同做一些事情、玩游戏，哪怕打闹，都是对未来社会生活的演练。更不用说，我们在同学中结交的朋友可能是一辈子最好的朋友。

所以学校教育是三种功能的混合体，不过它们的配比可不一样。**在不同的教育阶段，人力资本、信号筛选和社交资本这三者的权重，会发生戏剧性的偏转。**

**小学阶段最重要的是人力资本**，小学是最接近"教书育人"这个理想的地方。但小学生学的最重要知识并不是奥数难题，而是一整套现代社会的基础操作系统：读写、计算、注意力、习惯、自控、合作、表达和遵守规则。怎样排队、怎样跟人讲理、怎样在集体中既不怂也不横，这些是家长没机会教而老师可以教的。小学生的大脑最容易被老师塑造，小学生也是最尊敬老师的学生，**小学老师很重要**。我们前面提到过的经济学家拉吉·切蒂（Raj Chetty）就曾经做过基于随机分班实验的研究，证明从幼儿园到三年级的课堂经历会直接影响一个人的大学入学、成年收入、房产和退休金储蓄等结果。证据链非常扎实。

那你说难道竞争从小学就开始了吗？看来这学区房非买不可、一步都不能差？大悲。其实这不是竞争的问题：**评价小学老师好不好，并不在于他交出来的成绩好不好，而在于这个老师的综合素质怎么样、他对学生好不好**——小学生最不需要重视的就是学习成绩。每个人大脑的发育进展有快有慢，学习内容就只有这么一点，就算一开始落后，后面什么时候开悟了再追也不迟。英国有个报告说孩子 11 岁之前成绩落后不算真落后，因为 11 岁到 16 岁之间还有机会再追回来。有些家长让孩子从 12 年级就开始学一些超纲的内容，像积累早期优势，殊不知搞不好会让孩子产生厌学情绪、适得其反——**早教优势在一到三年内就会被抹平甚至逆转**。既然小学生的学习能力根本没有定型，在小学阶段搞分流（像有的地方让小学生考重点初中）就是完全错误的政策：标签贴得太早了。有跨国研究表明小学阶段分流是在扩大不公平，是把偶然的差距给制度化——它不是因材施教，不能提高整体的教育效率。**小学是塑造器而不是选拔器，学生最重要的不是领先，而是打底。**

但是从初中开始，你就要重视学习成绩了。初中的人力资本仍然重要，你需要掌握逻辑能力、抽象能力、系统复习能力、写作表达能力等等。而与此同时，信号筛选已经登场——尤其在中国，**中考是社会分流的第一道硬门**。其他国家的家长可能难以想象：中国孩子必须在 15 岁这一年被决定，到底能走普通高中到大学这条路线，还是走职业高中、中专技校路线。这两条路线的社会观感、同伴结构、后续机会和自我认同很不一样。我认为这么早分流太残酷了也没必要：蓝领工人不需要专门分流培训，应该尽量让每个人都有机会上大学、接受完整的教育。到初中毕业的时候，一个人已经具备了现代社会的**基础生存能力**：能读写、能判断、能和制度打交道、知道怎么作为一个普通人独立行动。这放在 100 年前可是非常了不起的成就——感谢九年制义务教育。

**高中是一台信号筛选机器。** 高中生最重要的任务就是考大学，但大学录取不是对努力的回报，而是对信号的筛选。你要是认不清这一点，就会受很多没必要的委屈。有人愤怒地问：为什么要学这么偏的知识、这么怪的题型？到底什么工作需要用到椭圆方程？**答案是：那些内容不是为了教育，而是为了给学生排序而存在的。** 高考是一场筛选，那就必须制造差异；可是为了公平，这个差异又不能太依赖家庭资源和家庭背景。你说高考能不能考一考统计学或者狭义相对论，那些更实用也更有意思的内容？对不起，中国这么大，没有那么多老师懂这些东西，边远地区的学生怎么办？这跟古代科举考八股文是一个道理：就那么基本标准化的教科书，不需要你有什么大见识、更不需要你有治国理政的经验，你只要懂逻辑、会写字、把格式谜给搞清楚就行。这种考试测的不是学问，而是**抽象能力、抗压能力、服从规则的能力、在高强度竞争中持续投入的能力**。

全体高中生陷入了一场囚徒困境：如果大家都不好好学习，大学也会招这么多的人；但是为了比别人多一点录取机会，每个人都拖出一条长尾巴——大学还是只招这么多的人。每逢高考都有人祝全体考生高水平发挥，殊不知那个效果和全体考生都低水平发挥是一样的。**这是中国最根本的内卷和内耗。** 当然你还可以有别的选择：如果你在某个学科有特别的天赋，可以通过竞赛之类的项目绕过高考直接进入大学；又或者你家里条件好，可以上国际高中申请美国大学。但是对大多数人来说，高考是必须支付青春的入场券。我的建议是：**接受这个设定，不要再纠结什么有用没用，把高考当成一场体育比赛，用竞技精神完成高中三年。** 其实考试是特别适合刻意练习的项目，你完全可以科学训练。

有人说要给高考降低难度，我认为那是最愚蠢的政策：如果降低内容难度，你要么就拉不开分数线，高考就成了某种意义上的随机录取、埋没人才；要想继续拉开分数线，学生就会被逼着去钻更没意义的怪题。**高考改革的正确路线是加大难度**：发达地区如果是自主命题，还可以引入一点大学的内容——让聪明学生平时多学点真学问、考试之前不用拼了命的备战也能考出好成绩，让天赋一般的同学直接绝望无需纠结。

高考给中国人的心智留下了极深的印记：是很多人一辈子最风光的时候，也是很多人一辈子最难堪的时候，以至于这些人一辈子都活在高中。**如果你用上高中的方式上大学**——一门心思积累 GPA、天天准备下一场考试、恨不能大一就进入考研预备——你就错了，你会错过大教育最值钱的部分：**社交资本**。大学牌子的信号价值对你已经分配完毕了，研究生学历正在越来越不值钱，现在你要看看还能做些什么别的事情来提升自己的工作能力和高水平合作机会。

**大学是进入社会之前最后的试炼场**：你在这里学的不只是专业知识，更是怎么在复杂组织里做事——做项目、进实验室、实习，这些都是大学教育的一部分，叫做隐性课程。我在大学遇到了几位好老师，自觉受益很多，但是很多本领不是跟老师学的，而是跟同学学的。这是一个高容错率的社会沙盒游戏：怎么给导师发第一封要推荐的邮件、怎么争取实验室机会、怎么开会发言不废话、怎么判断一个机会值不值得追、怎么把自己的能力让别人看见、怎么建立一个组织——你需要跟不同年级不同专业的同学交往，你总可以先看看别人是怎么做的，模仿人家的长处、吸取人家的教训，你支付的代价非常小。**同学不只是同伴，同学本身就是课程。** 尤其顶尖大学，还有什么地方能把一批高潜力年轻人聚集在一起，让他们在合作与竞争中互相训练？

我让 GPT 和 Gemini 分头调研了大量研究文献，各自估算了一套各阶段学校教育的功能配比，综合一下结果差不多是：小学人力资本 80% + 信号筛选 5% + 社交资本 15%；初中人力资本 45% + 信号筛选 40% + 社交资本 15%；高中人力资本 10% + 信号筛选 80% + 社交资本 10%；大学人力资本 30% + 信号筛选 20% + 社交资本 50%。你需要根据具体情况微调——比如你大学学的是医学或者硬核理工，人力资本的配比就要更高一点。**但这里的要点是：到什么场域干什么事。不要把小学过成高二，不要把高考当成人格审判，不要把大学过成高四。**

我们这门课程有一位叫"27 度"的读者在留言区问我：一年级的孩子举手最积极，六年级的孩子举手寥寥无几，初中生说自己对啥都没了兴趣——与生俱来的学习本领被谁偷走了呢？**答案当然是信号筛选，是考试。** 考试把学习从内在动机给逼成了外部调节，把能动逼成了被动。家长如果从小学就让孩子当卷王，只会让局面更坏。记住：**高中只有三年**，我们要做的是保留好奇心的火种，度过高中到大学、到工作中、到成人以后终身学习——那才是真学问、真文章。

我希望这一讲说的模型早点失效：人们有一天会发现高中生不应该专门卷高考，大学没那么重要。现在已经有些迹象：大学的就业率正在下降，大学文凭的信号作用正在减弱。现实是体育、文艺、销售、理财、运营、直播、创业、组织谈判、审美、手艺，这些才能跟考试卷子关系不大。**万物皆可考试不是社会正常，那是社会病态。** 理想社会应该是谁有什么才能就去施展什么才能，想学什么才能就能学到什么才能，不需要资格认证、不需要机构批准。但是在实现之前，你需要且尊重硬约束。
`,I1=`# 056丨自主支持：「献祭式养育」终结者

## 讲什么

**自主支持型养育**（autonomy support）——代表当前科学理解的最先进养育思想。核心是破除"家长必须对孩子的人生全负责"的心魔，反对献祭式养育（放弃事业、断绝社交、把所有时间填满奥数考级接送，仿佛自己多做一点孩子就能多赢一点）。**孩子不是你的作品，养育的目的是让孩子自己成为想成为的人。**

## 解决什么真问题

治好家长焦虑症：两岁担心陪伴不够、五岁担心启蒙晚了、十岁担心没上对补习班、15 岁担心说错一句话毁了孩子一生。万维钢用数据拆解"养育方法到底有多大用"，并用自主支持 vs 心理控制的分野，给出从 0 到 18 岁的可操作路线。

## 核心论点

- **养育方法并不是那么重要**：2015 年荟萃 1000 多万对双生子、17804 项性状的荟萃分析，平均遗传率是 49%。剩下的一半里还有遗传滋养（你没传给孩子但影响环境的基因）和唤起性关联（孩子基因特制唤起你的养育方式，约占 23% 的变异）。孩子最终是什么人：第一取决于他天生是什么人，第二取决于你控制不了的环境，第三取决于你天生是什么人，**剩下的才是你的育儿方法**。
- 但好的养育方式对每个孩子都适用：学术界已经找到清晰路线——1960 年代鲍姆林德的**权威型养育**（高温暖高边界：一手给爱一手给规矩）优于专制型和放任型；1970 年代的**脚手架理论**（动态支持 + 主动退出）；21 世纪结合自我决定理论的**自主支持型养育**——核心问题从"怎么让孩子听话"变成"怎么让孩子把规则变成自己的意志"。
- **自主支持的敌人是心理控制**：用内疚、羞耻、撤回关爱、情感绑架迫使孩子服从（"你这样妈妈多伤心""我这么辛苦都是为了谁""你不听话就是不爱我们"）。心理控制训练的是顺从，滋生的是怨气。
- 2025 年荟萃 238 项研究、12 万儿童：**自主支持与幸福感正相关，心理控制与痛苦显著相关，且各文化背景一致**——不是中国小孩应该管、美国小孩应该哄，哪个国家的小孩都应该获得自主支持。
- 心理控制不但无助于学业，反而通过削弱孩子对学业目标的投入、增加目标脱离，关联到更差的学习结果——"你说得好象学习是为了你学，那我更不想学。"
- **编辑效益递减**：孩子处于极端不利环境（贫困、父母缺位、虐待）时投入一点温暖效益巨大——那不是投资是救火；但认知情绪发展已经合格后继续加码，回报就不值得了。
- 过度养育剥夺孩子承受挫折、自己做主、为自己人生负责的能力，与抑郁焦虑内化问题正相关。

## 关键例证 / 金句

- 万维钢的冷幽默："如果你没考上清华大学，难道还能怪父母没陪你写作业吗？"
- 心理控制 vs 自主支持的对比：孩子不想写作业——自主支持："我知道你现在不想写，但作业也还是要做，你想先做最难的还是先做最简单的？卡住了我可以帮你想办法。"心理控制："你再不好好写，我就白养你了。"
- 青春期选专业——自主支持："我会把风险和现实讲清楚，但这是你要活进去的人生，你得为你的选择负责，我也会在你负责的时候支持你。"心理控制："你这样选就是不成熟，我吃过的亏不能让你再吃，将来后悔别怪我。"
- **自主支持并不等于放任**：他照样有规则、有底线、有后果。
- **最好的管教不是让孩子听话，而是让孩子同意。**
- 孩子需要你扶一把的时候你扶一把叫养育；孩子已经自己能走了你还不肯松手叫过度养育。
- 太早退出叫甩手，永不退出叫统治；**最好的节奏是随着孩子胜任感上升，把帮助逐渐降级——退出的不是关系，而是包办和控制。**
- 你不希望孩子离不开你，你希望他离得开你、也愿意回来找你。

## 如何应用

1. **0–3 岁**：首要目标是建立安全感，方法是及时响应（回应式照料：注意到、理解、及时恰当地回应孩子信号）。2021 年跨越 33 个国家 102 个随机对照实验的荟萃分析显示，对 0–3 岁儿童的回应式照料能显著提升认知、语言、运动、社会情绪和安全依恋。慢慢从"你替他做"变成"你等他做"——多等一秒，让他自己伸手、自己指、自己说、自己走。此时时间投入杠杆最高。
2. **3–11 岁**：作用是脚手架，目标是让孩子学会自主，方法是给规则但也给理由。每天有一段不被手机打断的专注相处就很值了，剩下保持关注就好。允许孩子犯一些小错，让他在试错中建立自我效能感。
3. **12 岁以上**：目标是优雅的撤退。别纠结相处时长，把监督变成协商：底线守住，剩下的尽量把主动权交给孩子，但关系要过硬——标准是他真正有事的时候愿意来找你。
4. 识别并戒掉心理控制：不说"你这样妈妈多伤心"式的情感绑架；把"你这样做是错的"换成"我会把风险讲清楚，但这是你的人生，你为你的选择负责，我支持你"。
5. 别把养育当无限加码工程：投入时间跟生长阶段有关——3–11 岁母亲投入的绝对时长和行为情绪学业结果之间并没有稳定清晰的关系；到青春期，父母对孩子的微弱影响必须是高质量的共同参与。陪伴的作用越来越取决于关系质量，而不是时间长度。

---

## 全文（清洗后的课程转录，重点加粗+底纹）

欢迎来到现代思维工具课，我是万维钢。有些家长活得像在打一场没有终点的战争：孩子两岁担心陪伴不够，五岁担心启蒙晚了，十岁担心没上对补习班，15 岁又担心说错一句话毁了孩子一生。放弃事业、断绝社交，把所有的业余时间都填满了奥数题、考级和接送，仿佛自己多做一点，孩子就能多赢一点，少做一点就是眼睁睁地看着孩子输。**现代式养育：你有了孩子，孩子就是你唯一的项目吗？**

养育并不是玄学。过去几十年间，科学家做了无数的研究，在相当程度上取得了共识。这一讲希望让你明白下面几个道理：**第一，养育方法并不是那么重要**——一个孩子日后有多大出息，主要是他自己的事情。我常说一句话：如果你没考上清华大学，难道还能怪父母没陪你写作业吗？**第二，在养育方法可以操作的空间之内，也不是投入时间和精力越多越好**，这不是一个无限加码工程。**第三，孩子不是你的作品**，我们的目的不是把孩子养成什么样的人，而是让孩子自己成为想成为的人。所以养育必须有一个渐进的、坚定的退出机制。

虽然不重要，但养育的确有科学方法。这一讲的思维工具叫**自主支持**，是代表当前科学理解的最先进养育思想。我们要破除"家长必须对孩子的人生全负责"这个心魔，我们反对献祭式养育。这不是因为你自己也有生存权和发展权、不是因为性价比不高不值得，而是因为**那种心态和那种养育方式对孩子非常有害**。

每个把孩子送进名校的家长都有权讲讲自己的养育经验，但养育方法的重要性比你想象的要小的多。咱们来算一笔账：人与人之间的各种差别——智商高不高、性格好不好、身高怎么样等——都可以称为性状，养育的目的就是要改善孩子的性状，对吧？那你说这些性状在多大程度上是可以在后天通过养育改善的呢？2015 年发表的一篇荟萃分析论文，汇总了行为遗传学几十年的研究，涉及 1000 多万对双生子、对 17804 项性状的统计结果：**平均遗传率是 49%**。也就是说，如果你观察到人群中张三和李四在某个特质上不一样，那么这种不一样大约有一半得归于基因。剩下的那一半也不全是跟基因无关的。

有个现象叫**遗传滋养**：你身上有些基因并没有传给孩子，但这不代表这些基因就没用了。比如你带有一种热爱阅读的基因，虽然孩子没抽中这根，但因为你有这个基因，你家里的书架会堆满书、你会经常带他去图书馆——这对孩子也有影响。有的研究认为遗传滋养的影响力相当于直接遗传效应的三分之一左右，也有的研究认为比例更高。再往下看才是环境因素，其中既包括你跟孩子的共享环境，也包括你不在场时孩子接触的所谓非共享环境（比如孩子在学校跟老师和同学之间的交往、在社会上的活动，还有运气和偶然事件）。一般认为非共享环境对孩子的影响大于共享环境。

但是还没完，还有个现象叫**唤起性关联**：你对孩子的养育之中，有大约 23% 的变异是被孩子的基因特质唤起的。比如孩子天生敏感、容易哭闹，你作为家长就会更加焦虑或者严厉；而如果孩子天生爱笑，同样是你会表现得温柔。这些研究的统计模型和口径都不一样，我们不能简单地做百分比加减，但是你能大致看出来：**父母可操作的空间并不大。孩子终究是什么人？第一取决于他天生是什么人，第二取决于你控制不了的环境，第三取决于你天生是什么人，剩下的才是你的育儿方法。** 所以育儿有什么可焦虑的呢？

那你说我不接受基因决定论：就算我的基因让我反感孩子哭，我也要温柔地对待他；不管我的本能怎样，也不管孩子对我怎么样，我就是要用最好的方式养育孩子，行不行？可以。好消息是**好的养育方式对每个孩子都适用**：谁家小孩也不是天生就喜欢棍棒教育，谁家小孩都在好奇心被唤起的时候更爱学习。更好的消息是学术界已经找到了一条清晰的路线。

1960 年代，戴安娜·鲍姆林德提出**权威型养育理论**，把育儿风格分成三种：专制型（什么都我说了算，不听话就打）、放任型（给绝对自由，孩子想怎么样就怎么样）、权威型（高温暖、高边界、高要求、高回应，一手给爱一手给规矩）。无数个研究的结论非常明确：**权威型是最好的风格**。权威型家长给孩子明确的规则，但也会给孩子解释为什么要这么做，会听孩子的感受，主打一个有温度的秩序。

1970 年代，教育心理学出了个**脚手架理论**，常被借来理解养育过程。它把父母比做建筑工地的脚手架，强调养育要有退出机制。核心心法是**动态支持 + 主动退出**：孩子在学习新技能时你提供支撑，一旦孩子能站稳了你就得撤掉一层，最后整栋楼盖好了，脚手架就必须拆除。

到了 21 世纪，学者们结合我们前面讲过的自我决定理论，搞出了一个更高级的养育范式，叫做**自主支持型养育**。这是一次观念跃迁：**养育的核心问题已经从"怎么让孩子听话"改成了"怎么让孩子把规则变成自己的意志"。** 自主支持型养育的核心洞见是：一个人只有感受到自己是行为的发起者，他才会有真正的内在动力。根据自我决定理论，你只要让孩子有自主感、胜任感和关系感，他就会产生内在动机，成为一个积极主动的人。

然而现实中很多家长可不是这么做的。**自主支持的敌人是心理控制**，也就是用内疚、羞耻、撤回关爱、情感绑架来迫使孩子服从。比如动不动就对孩子说："你这样做妈妈多伤心""我这么辛苦都是为了谁""你要是不听话就是不爱我们"。没有打骂孩子，而且还很讲感情，但是让孩子充满负罪感。自主支持和心理控制都可能发生在很爱孩子的家庭里，但是做法完全不同。

孩子不想写作业——自主支持会说："我知道你现在不想写，但作业也还是要做。你想先做最难的还是先做最简单的？卡住了我可以帮你想办法。"心理控制则是说："你再不好好写，我就白养你了。"

青春期孩子想选一个你不喜欢的专业——自主支持会说："我会把风险和现实讲清楚，但这是你要活进去的人生，你得为你的选择负责，我也会在你负责的时候支持你。"心理控制则是说："你这样选就是不成熟，我吃过的亏不能让你再吃，将来后悔别怪我。"

看出来没有？**自主支持并不等于放任**：他照样有规则、有底线、有后果。他是在帮着孩子接受任务、在培养责任感和行动力；而心理控制则是用操纵内心的方式去推进规则，他在孩子身上打道德烙印，他训练的是顺从，他滋生的是怨气。

2025 年一篇汇总了 238 项研究、涉及超过 12 万名儿童和青少年的荟萃分析论文发现：**自主支持与孩子的幸福感显著正相关，心理控制则与孩子的痛苦显著相关**，并且这种模式在亚洲也好、在欧美也好、各个文化背景都是如此。并不是中国小孩就应该管、美国小孩就应该哄——哪个国家的小孩都应该获得自主支持。

那你说我不在乎什么幸福感，我认为吃得苦中苦方为人上人，也许心理控制能提高孩子的学习成绩呢？这里的研究结果更有意思。的确，自主支持最明显的作用是提升幸福感，它对学习成绩虽然也有提升作用但是并没有那么大——这是容易理解的，毕竟自主支持不能直接决定学习的成果，学习毕竟是孩子自己的事。但是**心理控制不但无助于学业，反而可能通过削弱孩子对学业目标的投入、增加目标脱离，关联到更差的学习结果**——你说得好象学习是为了你学，那我更不想学。所以心理控制是一种有毒的养育方法。

自主支持的真正作用不是让孩子高兴，而是给孩子建立一个内化机制：**我不是因为怕你愧疚才去做，我是因为我认可这件事值得做。最好的管教不是让孩子听话，而是让孩子同意。**

那些对孩子搞心理控制的家长，与其说是为了孩子，不如说是为了自己：他们试图通过孩子的表现证明自我的价值，他们还对孩子有心理依赖、无法承受孩子走向独立。可能有的家长说，我们为孩子付出这么多，难道还错了吗？但养育可不是付出越多越好。有个规律叫**编辑效益递减**（边际效益递减）：如果一个孩子处于极端不利的环境——比如贫困、父母长期缺位、缺少回应、甚至遭受虐待——那么你投入哪怕一点点温暖和时间，效益都是巨大的。那不是投资，是救火。但如果孩子的认知和情绪发展已经合格，你继续加码，回报就不那么值得了。

投入时间跟生长阶段也有关系。生命的最初三年，孩子非常需要所谓**回应式照料**：照料者能注意到、理解、并且及时恰当地回应孩子的信号、跟孩子互动。2021 年一篇跨越 33 个国家、102 个随机对照实验的荟萃分析论文显示：**对零到三岁儿童的回应式照料能显著提升认知、语言、运动、社会情绪和安全依恋表现。** 但是对三到 11 岁儿童来说，母亲投入的绝对时长和行为情绪、学业结果之间就并没有稳定清楚的关系。到了青春期，如果说父母对孩子的行为还有微弱影响，那也必须是高质量的共同参与才行。简单说：**随着孩子长大，父母陪伴的作用越来越取决于关系质量，而不是时间长度。**

那你说我时间多，我就想多陪孩子，行不行？不行。有个概念叫**过度养育**：孩子需要你扶一把的时候你扶一把，这叫养育；孩子已经自己能走了你还不肯松手，这就是过度养育。你替孩子解决本该他自己学会解决的问题、承受本该他自己逐步承受的挫败、把孩子的一切都纳入自己的情绪系统——这是在剥夺孩子承受挫折、自己做主和为自己人生负责的能力。正所谓过犹不及：研究显示过度养育与孩子抑郁、焦虑和内化问题有不算大但是稳定的正相关。所以请不要搞什么"每天爱你多一些"——**你那个爱太沉重。正确做法是逐渐退出，每天的接管少一些。**

学术界并没有给出一个标准化的操作指南说你应该每天跟几岁的孩子互动多少分钟。但把前面说的那些研究结果综合起来，可以总结一套养育心法，核心思想是**自主支持和渐进式退出**。

在**零到三岁的婴幼儿时期**，首要目标是建立安全感，方法是及时响应。这时候你的时间投入有最高的杠杆：孩子哭了就抱、饿了就喂，让他确信这个世界是安全和值得信任的。然后慢慢从"你替他做"变成"你等他做"：多等一秒，让他自己伸手、自己指、自己说、自己走。

在**三到 11 岁的儿童时期**，你的作用是脚手架，目标是让孩子学会自主，方法是给规则但也给理由。你们每天能有一段不被手机打断的专注相处就已经很值了，剩下的保持关注就好。允许孩子犯一些小错，让他在试错中建立自我效能感。

在**12 岁以上的青少年时期**，你的目标是优雅的撤退。没必要纠结相处时长，而且要把监督变成协商：底线守住，剩下的尽量把主动权交给孩子，但是关系要过硬——标准是**他真正有事的时候愿意来找你**。

太早退出叫甩手，永不退出叫统治；最好的节奏是随着孩子胜任感上升把帮助逐渐降级——**退出的不是关系，而是包办和控制。** 搞心理控制的是把自己当苦情主角，过度照料的是把孩子当宠物，永不退出的是把关系当家产。我们应该把孩子当成一个正在走向自立的个体。而且别忘：你自己也是一个独立的人。

那些跟父母关系好的人，成年以后整体幸福感和心理健康也会更好，但留下印记的是**亲子关系的质量，而不是父母投入的时长**。你不希望孩子离不开你，你希望他离得开你、也愿意回来找你。
`,S1=`# 057丨拥抱和桥接：知识迁移，学以致用

## 讲什么

学习教育模块的最后一讲，主题是**学以致用**。核心工具来自哈佛大学心理学家大卫·珀金斯和加夫列尔·所罗门提出的两个策略：**拥抱（hugging）**——针对低路迁移，直接在教学现场建立情境，让知识长在将来要用的土壤里；**桥接（bridging）**——针对高路迁移，从具体场景里抽出图式和心智模型，类比到别的场景里。一个让知识落地，一个让知识出圈。

## 解决什么真问题

破解"为什么大量读书人读成了废物"。费曼在巴西的发现：巴西学生用课本标准方法问能对答如流甚至精确计算，换个问法就不会——**惰性知识**（怀特海 1929 年批评）塞满脑子却出不来。因为知识迁移不会自动发生：从学到用得经过三道锁——表征锁（学到的只是表征碎片不是心智模型）、触发锁（理论懂了但面对现实没有线索把旧知识叫醒）、生态锁（就算叫醒了也没有反馈练习支持，不久退回旧习惯）。

## 核心论点

- 掌握的标志不是"懂不懂"，而是**能不能把在一个地方学到的东西迁移到另一个场景**——换个情境，你还认得出那个结构吗？低水平迁移是照搬（换数字再做一遍），高水平迁移是打远（统计思维用到投资、谈判策略用到婚姻、历史感用到公司治理）。
- **为什么不迁移**：大脑的检索机制高度依赖情境（存取的文件柜是"物理课+考试"），街上遇到的力学问题场景完全不同，大脑不会自动去扫描那个文件柜——所以必须**在学的时候主动给情境**。
- **拥抱**：直接在教学现场建立情境，让教学贴近未来应用场景。真正的拥抱得有角色、有压力、有信息不全、有时间约束，最好还有点后果。目标是建立自动触发机制。
- **桥接**：课堂不可能模拟所有情境，要往远方迁移必须靠抽象能力。教人看深层结构的最好办法是**把两个不同场景的案例放在一起直接对比**——训练效果能提升迁移率两倍。
- 桥有两种：**向前桥**（学一个东西时主动问它以后还能用到哪里）和**向后桥**（碰到新难题时反过来问这玩意像不像我以前学过的某个模型）。
- 苏东坡是拥抱和桥接的极致样本：①大量读书并压缩表征提取图式心智模型（博观而约取，厚积而薄发）；②不是纯学院派，是官员、地方治理者、不断迁徙的人、政治风波当事人——最好的拥抱；③擅长高迁移，把经典、政治、山水、佛学、日常经验拉进同一个内部空间混合生成新表达（八面受敌）——读书的最高境界不是存储知识而是重组知识。

## 关键例证 / 金句

- 商学院的对比案例教学：中东商人希望空运（怕美国封锁航道）vs 中国出口方希望海运（便宜）；两兄弟继承农场，老大想现在卖掉分钱、老二觉得明年行情更好——解法其实是一样的：签对赌协议，用事后结果分配费用/补偿。**直接比较法的训练效果非常好，能让迁移率提升两倍。**
- 物理试卷分类：新手按表面特征分成斜面题、滑轮题、弹簧题；高手基于深层原理分类——这几道考的是能量守恒，那几道要用牛顿第二定律。**看不到深层结构，就是为什么很多人做同样的题做得很好、可你把题改头换面或换个应用场景就不会了。**
- 进化论不是惰性知识的标准：如果你只把它当成一个生物学知识就是惰性知识；如果你能桥接一下发现公司的优胜劣汰、甚至流行歌曲的演变都跟进化论逻辑惊人相似，你才叫学会了进化论。
- 孔子：古之学者为己，今之学者为人。
- 珀金斯和所罗门的策略：对低路迁移用拥抱，对高路迁移用桥接。
- 苏东坡："博观而约取，厚积而薄发""书不厌百回读，熟读深思子自知""八面受敌"。
- 读书的最高境界是像苏东坡那样把书读成自己的一部分；中等境界是学以致用、长能耐有本事；只为考试是最低层次。

## 如何应用

1. **个人知识管理**：读完一本书，先来一个向前桥——"这本书到底解释了什么东西？我未来最可能在哪三个情境里用它？"再来一个拥抱——模拟一个具体情境，问自己"一旦用它，我的第一步动作是什么？"这就给知识装上了触发器。
2. **职场技能迁移**：学了沟通、谈判、管理、写作别停在表面——主动找一场真实会议、一次真实的微信互动甚至一个真实冲突做小范围训练（拥抱）；事后做比较笔记：这次场景和书里案例表面哪里不同、深层哪里相同？下次看到什么信号就该调用这个模型（桥接）。**拥抱→总结→桥接，得这么练才能学到真功夫。**
3. **教学/培训设计**：别只讲谈判原则，让学生在时间压力、情绪波动、信息不全的情境中真正谈一回；把两个不同场景的案例并排摆出来让学生直接对比，而不是逐题讲解。
4. **学习者自觉**：学新东西主动追问"它以后还能用在哪里"（向前桥）；遇到新难题反问"这像不像我以前学过的某个模型"（向后桥）——有了提炼和应用心智模型的意识，你会发现身边到处都是熟悉局面。

---

## 全文（清洗后的课程转录，重点加粗+底纹）

欢迎来到现代思维工具课，我是万维钢。这是学习教育模块的最后一讲，咱们说如何**学以致用**。孔子说"古之学者为己，今之学者为人"——读书原本应该是为了完善自我，拿去卖给人家用就已经落了俗套；可是今天的学生读书都是为了考试，那就更加不堪了。

1950 年代初，物理学家理查德·费曼曾经去巴西待了十个月，教当地的大学生物理。他发现跟美国学生相比，巴西学生学物理的方式可以说十分怪异：一条知识，你用课本上标准的方法问，巴西学生能对答如流，甚至还能用公式进行精确计算；可是你稍微换一个问法，他们就不会了。他们对折射率和布鲁斯特角这类的概念非常熟悉，但他们竟然不知道水和玻璃就是有折射率的介质。费曼后来在一次公开演讲里直接说："巴西没有在教科学。这些学生只是死记硬背了一堆知识点，不能联系到真实世界，所以他们的应用能力为零。"更可怕的是他们根本不在乎。**如果我们教的不是真正的物理，而是物理课，教出来的学生都只会考试；考上的学生又只是教下一代学生怎么考试——教育就成了一个传销式骗局。**

学习原本应该让人越学越有能耐才对：别人不会的操作你会，别人办不了的事你能办，别人搞不定的关系你能搞定，那才是真本事。可是为什么大量的读书人都读成了废物呢？这就是**知识迁移**问题。早在 1929 年，哲学家怀特海就批评了纸上谈兵的教育，他说学生只是在脑子里堆满了信息碎片，会复述却不会活用，称之为**惰性知识**。

可是为什么知识在脑子里出不来呢？很多年以后才有研究者提出：这是因为你不能把文本基底和情景模型联系起来。说白了就是**你没有把书本上的知识接入你自己的个人经验、背景和行动**。用咱们前面讲过的概念说：你只是学了一大堆表征，你没有真正掌握心智模型。**掌握的标准不在于懂不懂，而在于你能不能把在一个地方学到的东西迁移到另一个场景之中去**——也就是说，换个情境，你还能不能认出来那个结构。低水平的知识迁移是照搬，是把这道题换个数字再做一遍；高水平的迁移则要打远，是把一个领域的知识用在另一个领域之中——比如把统计思维用到投资，把谈判策略用到婚姻，把历史感用到公司治理。

知识迁移并不会自动发生。从学到用得经过三道锁：**第一道是表征锁**——你学到的是表征碎片，不是心智模型；**第二道是触发锁**——理论懂了，但是面对现实的时候没有线索能把旧知识叫醒；**第三道是生态锁**——就算叫醒了也没有反馈、没有练习、没有支持，结果没多久又退回旧习惯。

但这些都是有解的。早在 1980 年，哈佛大学心理学家大卫·珀金斯和加夫列尔·所罗门就提出过一个洞见：**之所以不能迁移，是因为我们学的时候没给应用情境**——我们是在一个无尘实验室里学的。大脑的检索机制高度依赖情境，也就是包含这个知识的非常具体的场景。你学物理公式的时候是把那个公式存进了"物理课和考试"相关的文件柜里；你在街上遇到的一个力学问题是完全不同的情境，你的大脑不会自动去扫描那个"课程和考试"文件柜，那你当然想不起来怎么用。所以要学以致用，就必须**在学的时候主动给情境**。

就近的迁移，珀金斯和所罗门称之为**低路迁移**，发生在相似的情境之间，对应的教学方法是模拟一个典型的场景多加练习（比如医生做手术）。往远方迁移叫**高路迁移**，讲究抽象和类比，是更高级的认知工程。珀金斯和所罗门提出了两个针对性教学策略：**对低路迁移用拥抱，对高路迁移用桥接**。这两个策略后来经过多次检验，证明好用。

**拥抱**就是直接在教学现场建立情境，让教学更贴近未来应用场景，让知识一开始就长在将来要用它的土壤里。你想让人会谈判，就别只是讲谈判原则，而要让他**在时间压力、情绪波动、信息不全的情境中真正谈一回**——这样等到要用的时候，相似的刺激条件就会自动触发熟练反应。医学院非常理解这种教学方式：看病不能只在纸上看，理论学得好好的、操作流程背得滚瓜烂熟，可是到了现场病人会大喊大叫、团队会慌乱、时间会不够用——你的情绪会不会被劫持？你会不会因为紧张而误判？正确的教法是**模拟训练**：不仅模拟病情，而且模拟压力，模拟达标了再上岗。研究表明模拟训练的结果是学生不但手法更熟练、而且会更少犯错，真上岗之后病人的结局也更好。

咱们从拥抱的视角看，老师在上面讲、学生在下面记笔记、大家偶尔轮流发言，可以说是一种很不自然、甚至很荒谬的教学方法。**医生不能通过听讲学会做手术，木匠不是通过记笔记学会干活的，怎么我们就能指望一群大学生通过听课记笔记就成了科学家呢？** 我们又怎么指望一群研究生坐在商学院案例课上讨论那些著名商业领袖的英明决策，就学会了商业领导力呢？真正的拥抱得有角色、有压力、有信息不全、有时间约束，最好还有一点后果。知识不是先理解再行动，很多时候是**先在情境里顶住再逐渐理解**。拥抱的目标是建立一种自动触发机制：遇到那个场合立即触发知识——该注意哪里就注意哪里，该怎么判断就怎么判断，该用哪套动作就使哪套动作。这些东西都必须把你放在具体情境里进行全面训练才能长在身上。

如果说拥抱是练，那么**桥接就是靠想**。课堂上毕竟不可能模拟所有的情境，要想往远方迁移，你就必须有举一反三的抽象能力才行。桥接就是从一个具体场景里抽出我们前面说过的图式和心智模型来，再类比到别的场景里。你必须学会看到两个表面上差异很大的局面中的**共同结构**。

比如你刚学了进化论，你知道自然选择这个概念。如果你只把它当成一个生物学知识，那它就是一个惰性知识；但是如果你能桥接一下，发现公司的优胜劣汰、甚至流行歌曲的演变都跟进化论的逻辑惊人相似——你才叫学会了进化论。

但桥接并不会自动发生，未经训练的人不知道该提取什么结构。比如说给你一套物理试卷，其中有各种各样的题，让你把这些题分类：一个新手会把这些题分成斜面题、滑轮题、弹簧题——看到的都是题目的表面特征；而在高手眼中，这几道考的都是能量守恒，那几道都要用牛顿第二定律——他们是基于深层原理分类。**看不到深层结构，这就是为什么很多人做同样的题都做得很好，可是你把题改头换面或者直接换一个应用场景，他就不会了。**

那怎么教人看深层结构呢？研究者发现最好的办法就是**把两个不同场景的案例放在一起，让学生直接对比**。比如商学院老师一上来就把两个案例摆在学生面前。第一个案例：某中东商人从中国订了一批货，中国出口方希望走海运，因为海运便宜；但中东商人希望走空运，因为他担心美国会封锁航道。请问该怎么办呢？第二个案例：两兄弟共同继承了一座农场，老大希望现在就把农场卖掉分钱，老二则觉得明年的行情会更好，应该先持有一年等明年再卖。请问听谁的呢？这两个场景看起来非常不一样，但老师告诉学生：解决方法其实是一样的——比如货运那个案例，双方签一个对赌协议：先走空运，同时关注海运状况，如果到时候海运顺畅，那这笔空运的费用就由中东商人出；如果事实证明海运就是晚到了，空运费用就由中国厂商支付。两兄弟那个案例：可以先把农场持有一年，如果第二年价格果然上涨了，老大就得让老二多分点；反之老二就得给老大一些补偿。聪明人可能觉得这里的类比不是很明显吗？但是事实证明这种直接比较法的训练效果非常好——**能让迁移率提升两倍**。

等你熟练了，具体的桥又分两种：一种是**向前桥**，你在学一个东西的时候就主动问它以后还能用到哪里；一种是**向后桥**，你碰到一个新难题时反过来问这玩意像不像我以前学过的某个模型。**有了提炼和应用心智模型的意识，你会发现身边到处都是熟悉局面。**

总结来说：**拥抱是把知识放回它将来要工作的现场，桥接是把知识从原现场里提纯出可用的心智模型——一个让知识落地，一个让知识出圈。**

现在咱们切换到学生视角，你自己该如何使用拥抱和桥接来锻炼知识迁移能力呢？比如个人知识管理：读一本书不能说读完就完了，可以先来一个向前桥——"这本书到底解释了什么东西？我未来最可能在哪三个情境里用它？"然后再来一个拥抱——模拟一个具体的情境，问自己"一旦用它，我的第一步动作是什么？"这样你就给知识装上了触发器。再比如职场技能的迁移：你学了一大堆关于沟通、谈判、管理、写作之类的东西，但是都停在表面、没有演练过——那么你需要拥抱：针对一项技能主动找一个真实会议、或者一次真实的微信互动、甚至最好是一个真实冲突做小范围训练；事后再做一份比较笔记：这次场景和书里的案例表面哪里不同、深层哪里相同？下次看到什么信号的时候，我就该调用这个模型了。**拥抱→总结→桥接，得这么练，你才能学到真功夫。**

最后咱们说一个拥抱和桥接的极致样本，那就是**苏东坡**。东坡先生的诗词文章罗振宇老师在《文明之旅》节目里已经讲过太多了。苏轼不但诗词赋文书画无一不精、而且都有创新，而且办事能力也强、哲学思想也高明，走到哪都留下众多典故。他怎么这么厉害呢？

首先苏轼读过很多书：他不仅出身于文学家庭，而且赶上了大宋印刷扩张、学校制度推进、文学产量激增的时代——用今天的话说就是他有大量的训练语料。但是只是读书多可不行。苏轼的第一个高明之处在于**他把书的表征进行了压缩，从中抽取了大量的图式和心智模型**，用他自己的话说叫"博观而约取，厚积而薄发"——这就给拥抱和桥接打下了基础。

再有，苏轼不是纯学院派人物：他是官员、是地方治理者、是不断迁徙的人、是政治风波中的当事人——这些是最好的拥抱。一个人如果只在概念里活着，搞不好语言会越来越轻、越来越华、越来越假；苏轼之所以厚实，是因为他同时活在制度、灾难、旅途、山水和人情里面。其实一般人如果有这么复杂的经历，可能精神早就垮了，但苏轼不但不垮，反而越活越潇洒。为什么呢？恰恰是因为他积累了大量的心智模型，所以他善于情绪调节、人格特别稳定、从来没有怨怼和僵硬，他总说"九死南荒吾不恨""也无风雨也无晴""此心安处是吾乡"。这是苏轼的第二个高明之处：**他的书没白读，在各个情境之中不但用上了，而且跟情境发生了非常良性的化学反应。** 这种化学反应就是最好的桥。要做到这一点，你读书的时候必须从一个模型中读出不同的意思、想象各种不同的情景——用苏轼自己的话说叫"书不厌百回读，熟读深思子自知"，又叫"八面受敌"。

苏轼的第三个高明之处是他特别擅长**高迁移**，也就是把两个看似很遥远的东西接在一起。一般人写个文章能引经据典就不错了，苏轼则是能把经典、政治、山水、佛学、日常经验和人生遭遇拉进同一个内部空间里混合起来、生成新的表达。苏轼写文章是在调动世界。**读书读到这个份上才是最高境界：不仅是存储知识，而是重组知识。** 既能让知识拥抱现实，又能把现实抽成模型，最后知识和现实本就是一体的、可以随时调用、混合创造。

所以读书的最高境界是完善自我，是像苏东坡那样把书读成自己的一部分；读书的中等境界是学以致用、长能耐有本事；像今天这些人读书就为考试，实在是极低的层次。可惜现代教育制度恰恰是围绕考试组织的，但是对志存高远的读书人来说这无所谓——**你总可以自学，毕竟苏东坡也不是哪个名校培养出来的。**
`,P1=`# 058丨经济租：赚钱的秘密

## 讲什么

**经济租**——一笔收入里，超过"让这个资源继续被提供所必须的最低报酬"的那一部分。这个事本来给 5000 块钱你就能干，但因为某种原因别人必须付你 2 万，多出来的 15000 就是经济租。核心心智模型：**收益 = 创造的价值 × 捕获系数**——创造的价值决定你能不能上桌，捕获系数决定钱为什么留在你这里。

## 解决什么真问题

解释"财富最后落在了谁的手里"：创新者往往拿不到创新成果的大头，最后拿到大头的可能是掌握品牌、销售渠道、支付渠道的人——他们都在收租。价值创造和价值捕获不是一回事，也许你很擅长创造蛋糕，但你不一定能分到多少蛋糕。

## 核心论点

- 价值由需求决定（主观价值论），但你必须拿出真东西来；主流经济学吵了 100 多年才承认价值没有客观测量方法。
- **能长期存在的超额收益，背后都站着某种租**。董事长的小舅子靠关系拿国企配套，是坏的租；苹果税、英伟达、平台抽成，是好的租——但都是租。
- 巴菲特叫它"收费桥"：两个城市之间只有这一座桥，你们必须从我这里过。任何生意要想是好生意，里面就得有这种收费桥一样的东西。
- 捕获经济租至少有**八种生态位**：①土地（黄金地段、核心广告位、港口泊位、自然资源开采权）；②证书（牌照、资质、特许经营权、专利版权——人为制造的稀缺）；③信息（信息不对称生意：尽调、量化交易、跨境贸易、艺术品）；④关系（小舅子模式，降低信任成本）；⑤声望（核心人才、文体明星的品牌溢价）；⑥接口（苹果税、抖音流量、微信支付——数字时代的收费大桥）；⑦配套（供应链、分销网络、售后维修——价值链守门人）；⑧资金（承受非流动性风险，收取风险溢价、流动性溢价和利息）。
- 好租 vs 坏租：创新租是好租，长期靠制度壁垒、平台控制和政策租固化下来的抽取型收益是坏租。**好市场不是没有收费，而是桥旁边永远允许别人修新桥。**

## 关键例证 / 金句

- 亚当·斯密 1776 年就直觉提出土地所有权会吸走高于正常工资和利润的剩余；李嘉图系统化为地租理论；马歇尔推广到机器、建筑和技能（准租）；塔洛克 1967 年提出"寻租"（真正危害是所有人开始为抢租而浪费资源）；安妮·克鲁格 1974 年指出牌照、配额就是在制造租和诱发寻租。
- 彼得·蒂尔："只有失败者才竞争。"始终保持竞争状态就意味着你没有护城河，你本质上就是打价格战——用中国话说就是卷。
- 马克·吐温式讽刺：勤奋得工资，瓶颈得分红。
- 质疑不如理解，理解不如成为——不一定成为小舅子，但关键是要有意识地争取经济租，以及批判别人霸占的那些坏租。

## 如何应用

1. 求职/投资一家公司：不能光看老板说什么、别只听价值观、也别只看产品牛不牛——**你必须知道它的租在哪里**，找到它真正用来赚钱的商业模式中的关键环节。
2. 个体发展：争取竞争优势——难以替代的技能、个人声誉、信任关系、独家信息、分发渠道、行业理解，哪怕是一点点耐心资本都是可能收取溢价的东西。
3. 培养卡位意识：互补性资产理论（大卫·提斯）说，如果你能控制渠道、售后或平台入口，你很可能比创新主角赚到更多钱——**卡位的人往往比干活的人赚钱多**。

---

## 全文（清洗后的课程转录，重点加粗+底纹）

欢迎来到现代思维工具课，我是万维钢。这一讲我们进入赚钱模块。想要赚钱，你必须创造某种价值。主流经济学家吵了 100 多年才承认：**价值不是由什么社会必要劳动时间决定的，它没有客观的测量方法，价值是一种主观的东西，它是由需求决定的。** 但人的需求并非完全不讲理，你确实得拿出真东西来才行。硅谷的创业课说得明白：要创造价值，你就得解决用户痛点、提出价值主张、先做一个最小可行产品试水、找到产品市场匹配、要持续创新、要提高效率、要让用户增长、要有护城河、要长期主义等等。这些都是对的，但是这些只解释了财富是怎么产生的，却不能完全解释财富最后落在了谁的手里。我们需要一个指人指心的洞见。

想象有一天你参观了一家非常赚钱的私营企业：员工管理挺严格，但机制看起来有点土；技术有一些，但也没强到让你肃然起敬；车间墙上挂着天道酬勤，办公室里摆着红木家具，老板身上似乎有一股草莽气息，对科技不那么敏感。你承认他们做事有章法、注重质量、控制成本、做研发，那些肯定都有用，可是你忍不住想：就这的公司全是高学历人才，可赚不到人家那么高的利润。你几乎想冲进去问那个老板：你到底是怎么赚钱的？他的秘密不在媒体报道里，也不在给员工宣讲的价值观里。我来告诉你他是怎么赚钱的。**这家私企的主要业务是为一家大型国企做零部件配套，而这位老板是那家国企董事长的舅子。赚钱真正的秘密叫做经济租。**

先别着急谴责这位小舅子。**能够长期存在的超额收益，背后往往都站着某种租。** 经济租是指一笔收入里，超过让这个资源继续被提供所必须的最低报酬的那一部分。这个定义有点绕，我再说明白一点：这个事本来给 5000 块钱你就能干，但因为某种原因现实中别人必须付给你 2 万块钱，这多出来的 15000 块就是经济租。

比如说你家有个公寓楼对外出租：管理公寓当然需要成本，但那些成本很低，你完全可以雇个人替你干，而你自己坐收租金的大头。凭什么你能坐地收钱呢？因为那个公寓楼是你的——可能是拆迁补偿，也可能是你家以前赚的钱买的。不管你是怎么拥有的，**你收租是因为拥有，而不是因为你在做什么。** 你仔细品一品，这可不是寻常的认知：学校教的都是好好做事、创造价值，可没教你通过拥有而收租。

然而**价值创造和价值捕获并不是一回事**。也许你很擅长创造蛋糕，但是你不一定能分到多少蛋糕。现实中的创新者往往拿不到创新成果的大头，最后拿到大头的可能是那些掌握着品牌、销售、渠道和支付渠道的人——他们都可以收租。

如果你想赚钱，请了解下面这个心智模型：**收益等于创造的价值乘以捕获系数。创造的价值决定你能不能上桌，捕获系数决定钱为什么留在你这里。** 以前我们总说要想赚钱就得创造某种稀缺的价值，但我越发觉得"稀缺"这个词不能精准地形容一个人的不可替代性——董事长的小舅子很稀缺吗？还是"租"最为形象。你的捕获系数之所以高、你之所以可以在这里收经济租，是因为你拥有一个关键卡位，以至于别人干事无法绕过你。

你要是觉得小舅子和收租这两种赚钱方式太低端，那我告诉你：在巴菲特看来，这才是真正能赚到钱的模式。巴菲特打的比方是**收费桥**：两个城市之间只有这么一座桥，你们必须从我这里过。我这桥一旦建成，不需要年大规模重建，我就是坐地收钱。任何一个生意要想是好生意，它里面就得有这么一种像收费桥一样的东西。只不过有些人的收费是自己创造的、是生产性的；有些人的收费桥是靠关系搭的、是寄生性的。**如果没有这种不可替代性，你再聪明再努力也不行**：比如你做这一单赚 50%，旁边马上就会有人说我 45% 也干，再来一个说 15% 我都行，再过一会单价就被压到只剩辛苦费——那叫打工不叫赚钱。可是如果你拥有一个卡位让别人必须通过你，你甚至什么都不用做，就可以反复收租。

学术界早就在研究租，越研究就越感到赚钱就得靠租。早在资本主义鼻祖亚当·斯密 1776 年出版的《国富论》中，就已经直觉地提出土地所有权会吸走高于正常工资和正常利润的剩余。到了 19 世纪初，古典经济学家李嘉图把这个直觉系统化成了**地租理论**：两个农民花费同样的力气种地，如果你种的是一块肥地，你的收益就会比种薄地的那个好得多；你多出来的这些收益早晚是应该交给地主的租，因为地租只要不高于这个收益，你都会愿意交。然后是 19 世纪末，马歇尔搞了个观念跃迁，把租的概念从土地推广到机器、建筑和技能，称之为**准租**：只要某种资源短期内搬不走、替代难，它就可能产生超额收益。至此经济学家已经意识到：超额收益最终会沉淀到某种因为稀缺而被占有的位置上。

1967 年，公共选择理论经济学家塔洛克提出：有人拿到租这件事本身未必造成多大社会危害，真正造成危害的是所有人开始为抢租而浪费资源——这就是现在说的**寻租**这个概念的起源。如果最聪明的人不去创造价值，而是去抢位置、拉关系、抢牌照，社会经济岂不就从创新竞赛滑向寻租竞赛了吗？有人寻租就必定有人想设租，也就是掌握权力或者资源优势的人人为地制造出一种稀缺性或者行政壁垒——这正是董事长和小舅子的故事。1974 年，国际贸易与发展经济学家安妮·克鲁格进一步指出：现代社会中的很多制度设计，比如牌照、配额、限制竞争等等，其实就是在制造租和诱发寻租。

说到这里，你可能觉得租就是不劳而获。但学者们在 1990 年代又有了一次观念跃迁。1993 年，战略管理学者玛格丽特·彼得拉夫提出：一家企业要想长期获得超额收益，就得有持续的竞争优势——你的资源必须有差异性，竞争者既不能轻易复制你，也不能轻易把你那个资源买走。这不就是租吗？1996 年，两个战略学者亚当·布兰登伯格和巴里·纳尔巴夫提出**附加价值**的概念：一个主体能赚多少钱不是取决于你有多辛苦，而是取决于如果没有你，这个系统会坏到什么程度。如果你没你人家照样达成合作，那你就只能赚个辛苦钱；反过来，比如你是个交易平台，没你这个局就组不起来，那你就有捕获价值的资格。说白了就是：**你站住了一个别人不能轻易替代的位置，你可以收租。**

总结来说：**只要你拥有一个别人没有的东西，这个东西就算人家看见了也学不会、挖不走、而且也不能以公平的价格买到，这就是你的经济租。** 经济学家说租，战略学家说竞争优势和附加价值，投资人讲护城河、收费权和定价权，产品说卡位和入口——他们说的其实都是同一件事：你是否站住了一个别人短期内绕不过去、替代不了、复制不来的位置。

我们可以大致梳理一番，捕获经济租有至少八种生态位。**第一是土地**：黄金地段的铺位、核心商圈的广告位、重点港口的泊位，或者自然资源的开采权，这些地方即便科技再发达也永远是稀缺的。**第二是证书**：它的稀缺性来自政府的许可——出租车牌照、办学资质、某种商品的特许经营权（比如中国的烟草专卖）、行医执照、审批名额，甚至包括专利和版权，这些都是人为制造的稀缺。政府会说搞这些是为了保护市场，但现实是至少在某种程度上就是为了把竞争者挡在门外。**第三是信息**：如果你掌握一个信息或者专业知识而别人不掌握，你就可以利用这种不对称去做一些别人没法做的生意，比如尽职调查、量化交易、资产评估、复杂合同、跨境贸易、艺术品、医疗等等有天然的壁垒。**第四是关系**，也就是小舅子模式：有些关系确实属于腐败，但更多时候关系有正面的作用，因为它降低了交易中的信任成本，比如核心客户资源、特殊的采购渠道、政府关系等。政府有一笔基金专门用于重点项目投资，可负责的官员根本看不懂那些项目计划书，但是他信任你的推荐——你能说这是腐败吗？如果有人想从中收取一笔推荐分成，又该怎么算呢？**第五是声望**：这个技能你不仅会干，而且只有你能干，比如核心人才和文体明星，他们只要出面就好使，那么他们有权收取一个品牌溢价。**第六是接口**：这是互联网公司的强项，相当于过路费加广告费加排序费。你们公司辛辛苦苦开发了一个 APP，卖软件也好卖内容也好，只要用户是在苹果手机上付款，你们就得交 30% 的苹果税；抖音的流量、百度的搜索、微信和支付宝的支付，这些都是数字时代的收费大桥。AI 时代最大的收费桥是英伟达。**第七是配套**：你是整个商业模式中的一个必经环节，没有你这个事情就跑不动，比如你是供应链的一环，或者你掌握分销网络、冷链、售后服务和维修体系、充电网络等，你就是那个卖铲子的人。**第八是资金**：钱在这个时代并不稀缺，但如果你很有钱，那的确是一项能力——你经得起非便利性的风险，你就可以收取风险溢价、流动性溢价和利息。没有你别人可能就等不起、扛不起、借不到、熬不过。典型例子是银行、保险、贸易融资、库存控制，危机时手握现金的人和能五年不盈利的耐心资本。

你看我们天天讲要创造价值，可是**真正的赚钱靠的是拥有**。那你说这也太不公平了，难道不应该让创造价值的人拿大头吗？我们不是一直讲供给侧心态吗？这不成了零和博弈了吗？咱们得从两个层面分析。首先你要从市场上获得收入，就必须创造某种价值——就连董事长的小舅子也得开个公司、组织人把产品保质保量生产出来才行。我们还是那句话：只要交易是双方自愿发生的，它就对双方都有好处，有交易总比不交易强。所以创造价值和供给侧心态是市场经济的第一性原理，是零阶道理。但如果你想赚钱、想拿比平均水平更多的回报，那你就需要在承认零阶道理的基础之上做一点一阶的功夫，你就得在合作的基础之上有所独占性——**这就是经济租**。

我们搞高科技是不是为了造福全人类？确实是；那我们想不想搞出一个专利来收取一波独占的租？的确也是。这两件事未必矛盾：我通过收租取一大笔钱，然后我才可以用这笔钱去做更大的冒险啊。有时候企业家会忍不住直接说出来：我们其实并不想整天跟人竞争，我搞研发拼市场是为了站到那个无人可以跟我竞争的位置上去。比如硅谷思想家彼得·蒂尔就有句话："**只有失败者才竞争。**"始终保持竞争状态就意味着你没有护城河，你光做的比人好还不行，还得做得比人便宜——你本质上就是打价格战，用中国话说就是卷。

就连一向主张政府发挥作用的经济学家玛丽安娜·马祖卡托也认为：有些租是好租，比如创新租；有些租则是坏租，比如长期依靠制度壁垒、平台控制和政策租固化下来的抽取型收益。**市场竞争不是要消灭一切经济租，而是要不断压低过高的租金。好市场不是没有收费，而是桥旁边永远允许别人修新桥；不是没有巨头，而是巨头不能勾结政府把后来者永远挡在门外。自由市场的本意是自由竞争，不是自由收租。**

还是回到个体。理解了经济租，如果你没有一个当董事长的姐夫，你该怎么办才能捕获价值呢？首先你要争取竞争优势——它一定是一种复利，是一种能资产化的东西，而绝不是卖工时。难以替代的技能、个人声誉、信任关系、独家信息、分发渠道、行业理解，哪怕是一点点耐心资本都是可能收取溢价的。再有，你想要加入一家公司也好，或者想要投资一家公司也好，**一定不能光看他的老板说什么、别只听什么价值观，也别只看他的产品牛不牛，你必须知道他的租在哪里**——你必须发现这家公司真正用来赚钱的商业模式、找到其中的关键环节，然后你才知道该怎么办。

还有一定要有强烈的卡位意识。就拿配套租来说，伯克利哈斯商学院的大卫·提斯有个著名理论叫做**互补性资产**：如果你能控制渠道、售后或者平台入口之类的环节，你很可能比创新主角赚到更多钱。这些环节没有那么酷，但他们是价值链的守门人。**卡位的人往往比干活的人赚钱多。出力的不一定得利，做局的长胜过做工的。勤奋得工资，瓶颈得分红。** 此事古难全。质疑不如理解，理解不如成为——当然不一定成为小舅子，世界上有多种途径，但关键是你要有意识地争取经济租，以及批判别人霸占的那些坏租。
`,C1=`# 059丨阿尔法：优势战略意识

## 讲什么

借用金融学的 β 和 α 概念：**β 是搭市场顺风车得到的收益，α 是超出市场共识、靠更深的认知判断和动作硬生生多拿到的那部分收益。** β 只能让你在市场里存活，只有 α 才能给你积累经济租。要想出类拔萃、建功立业，你得有 α 意识。

## 解决什么真问题

回答"凭什么是我"：你每天都在追 AI、学提示词、养龙虾、接大模型，但你想过没有——你只想跟别人一样吗？要取得了不起的成就，你必须回答：你做了什么别人做不到的，以至于天大的好事能落在你头上？单会用好 AI 给不了你租，因为 AI 是通用技术，别人也能用。

## 核心论点

- **市场普遍不均衡**：哈耶克 1968 年"竞争是一个发现程序"——现实世界的知识高度分散，市场并不透明，永远存在被低估的需求、被闲置的资源和没被利用的机会。柯兹纳进一步提出"企业家发现"：真正的企业家能敏锐察觉错配，并通过纠正错配赚钱——**你赚钱是因为你发现并利用了市场的不均衡，而恰恰因为你的存在，市场变得更均衡了一点**。
- 运营效益 ≠ 战略定位（波特 1996《什么是战略》）：运营效益是日常活动做得比对手好（对手迟早能学会）；战略定位是执行了与对手完全不同的活动，或以完全不同的方式执行活动，以至于有对手无法模仿的优势。
- **只优化运营效益就是完成 β**：用 AI 降本增效不是战略，裁掉一半程序员、再裁掉一半运营、看看别人的最佳实践就模仿一下——你只会跟竞争者越来越像，同一赛道比拼谁跑得更累，最终竞争高度同质化→价格战→利润率蒸发→失去健康现金流→没有钱研发新 α→失去品牌资产和创新力。**低利润率是一种耻辱，降本增效不是进攻而是防守。**
- 公司的三本账：现金账（管今天）、能力账（管明天）、位置账（管后天）。利润是今天的结果，能力是明天的原因，位置是后天的统治。**α 是动能，经济租是势能。**

## 关键例证 / 金句

- 西南航空：改成点对点短途高频航线、单一机型、简化服务——不是一般成本优化，是围绕快速周转重新设计整套运营系统。
- 柯达 vs ASML：柯达比竞争者更早发明了数码相机，但选择守住传统胶卷的租，把资源继续投入现有胶卷生产线的降本增效，结果被时代抛弃；ASML 在深紫外光刻时代已是赢家，却主动押注极紫外光刻，现在是全球唯一极紫外光刻系统制造商，还在推进高数值孔径。
- 凯马特 + 西尔斯合并 vs 英伟达：两家零售巨头想靠合并做大、削减管理费用、共享供应链，没创造新体验没研发新技术，结果一个衰败一个破产；英伟达当年面对英特尔和 AMD 打不过，搞了个 CUDA 新平台，十几年间是纯投资没有爆发性回报——那是一个 α 投资，后来 AI 爆发，CUDA 成了万亿美元帝国的租。
- 诺基亚 vs Airbnb：诺基亚守着硬件制造效率、供应链成本控制，被 iPhone 改变竞争维度后淘汰；Airbnb 发现私人住宅闲置是错配，认为阻碍匹配的核心不是技术而是信任，于是建立租客和房东的互评体系，创始人亲自挨家挨户敲门、免费帮房东拍专业高清照片，用冷启动方式人为创造了标准化信任。

## 如何应用

万维钢总结的**从 α 到经济租五步心法**：
1. **错配**：别只说"我擅长什么"，要问哪里有高价值错配——需求和供给错、价格和价值错、用户痛点和行业共识错、技术可能性和组织能力错。
2. **认知**：这个错为什么偏轮到你纠正？你看见什么重要的但还没被充分定价的真相？你有独特的知识、品位、渠道、资本耐心、客户理解、声誉文化，还是对一手现实的长期贴身观察？
3. **执行**：没有取舍就没有战略。你下决心做什么就必须回答"我们不做什么"，砍掉看起来很有希望的选项、得罪一些人、容忍一些指标暂时难看——正因为是艰难的取舍，别人才无法模仿。
4. **占有**：价值创造不自动等于价值捕获，要把优势沉淀成租——占有互补性资产，把内功外化成品牌、合同、数据、标准、入口、人才磁场、用户习惯或供应链控制。
5. **重构**：任何经济租一旦过于舒适就会腐蚀警觉。别人会创造他们自己的 α 颠覆你的租，所以最好有再造 α 的能力——积累一段资源后就要再去探索。

**最关键的是第二步**：凭什么是你来纠正这个错——你手上一定有某种独特的东西。它不必是惊天动地的天赋：一点小众的技能、一点别人没有的一手观察、一点跨领域的理解、一点特定场域的信用。这些东西本身不构成 α，把它们组合起来、放到具体的错上才可能形成 α。**我们想要的 α 绝不是"我比你更努力"那种线性勤奋，而是"我比你更早站在一个尚未被社会充分定价的真相上"。** 如果可以选择，我们把 β 留给别人。

---

## 全文（清洗后的课程转录，重点加粗+底纹）

欢迎来到现代思维工具课，我是万维钢。现在人都在追 AI，你也没落后：别人学提示词的时候你也学提示词，别人养龙虾的时候你也养龙虾，别人把广告、周报、代码、客服都接上大模型，你也都接上了。你每天追逐各种流行趋势和最新工具都有点累了。这一切都很好，我也是其中一员。但是有一个根本的问题你想过没有：**你只想跟别人一样吗？** 又或者你也曾经梦想取得某种了不起的成就、公司能一飞冲天？那你就必须回答这个问题：**凭什么是你？你到底做了什么别人做不到的，以至于天大的好事能落在你头上？**

我们上一讲说了，要捕获超额价值，就得拿到某种经济租。当然你不是董事长的舅子，我们也不想要那种靠关系和行政壁垒搞出来的坏租，我们想要谋求的是好的经济租：你具备某种降维打击的技术优势、你拥有一项无法绕开的专利保护、你拥有超强人气的品牌声誉、或者你搭建了一个别人离不开的平台。如果你有这些，你不需要卷。**好租不是从天上掉下来的，一定是你做了一些别人做不到的事情而积累出来的成果。** 单会用 AI 可给不了你租，因为 AI 是一种通用技术，别人也能用。你得有一个超出同行的优势才行。

金融学里有两个概念，β 和 α。Beta 是一支基金对市场共同风险的暴露，代表它跟着市场走应得的那部分回报；Alpha 则是在扣除这部分市场因素之后，基金所获得的风险调整后超额收益。我们把这两个概念借用过来，简单说：**β 是你搭市场顺风车得到的收益，α 则是你超出市场共识、靠更深的认知判断和动作硬生生多拿到的那部分收益。β 只能让你在市场里存活，只有 α 才能给你积累经济租。** 想要出类拔萃、建功立业，你得有 α 意识。

这可不是特别寻常的道理，你要知道**经济学家原本不相信有 α 存在**。新古典经济学倾向于假设市场是完全信息的、人是绝对理性的，所以一切事物都应该处于均衡状态：你发明一个什么新东西卖得贵，别人就会受到激励迅速发明一个跟你类似的东西卖得比你便宜，这样所有信息都瞬间反映在价格上，那就谁都没有获得超额利润的空间。如果市场是绝对均衡的，你根本就不值得费力做生意，因为你不管干什么事的回报率都是一样。你之所以愿意出来做生意，就是因为**你相信你的竞争优势不会被人瞬间抹平**，对吧？

1968 年哈耶克提出一个洞见：**竞争是一个发现程序。** 哈耶克说现实世界里的知识是高度分散的，市场并不透明，永远都存在被低估的需求、被闲置的资源、没被利用的机会。换句话说，这个世界充满了错配，所以市场是普遍不均衡的。在哈耶克的基础上，同属奥地利学派的伊斯雷尔·柯兹纳进一步提出：企业家的任务就是纠正错配。他发明了一个说法叫**企业家发现**——市场一直充满错配，真正的企业家都是具备高度警觉性的人，他们能敏锐地察觉到错配，并且通过纠正错配来赚取利润。说白了：**你赚钱是因为你发现并且利用了市场的不均衡，而恰恰因为你的存在，市场变得更均衡了一点，也就是错配少了一点、效率高了一点——这就是你的贡献。**

比如中国改革开放之初：一边是农村有大量的劳动力没事干，一边是城市里人连个电风扇都买不到，这就是错配。你办一个乡镇企业，农民找到了工作，城里人买到了便宜的家电——这就是纠正错配，那你这难道不就是最正当最高尚的赚钱方式吗？如果只有你在纠正错配，这就是你的 α；可是如果大家都在开公司纠正类似的错，那这就只是 β。**志存高远的企业家不但要发现错配，而且要发现高价值错配，而且要以别人暂时做不到的方式把这个错纠正成自己的成果，这才叫有 α。**

如果你有 α 意识，你会认识到公司的日常运营活动不是 α，你必须主动搜寻、测试、专门布局才能捕捉 α。这就引出了公司的战略问题。1996 年，哈佛商学院教授迈克尔·波特发表一篇名文《什么是战略》，他提出**运营效益和战略定位是两回事**。运营效益是你在日常的活动上做得比对手更好：搞管理、速度更快、成本更低，这些事原则上对手也都在做，只不过你做得稍好一些而已。而战略定位则是：你要么执行了一些与对手完全不同的活动，要么以完全不同的方式执行一些活动，以至于你有一个对手无法模仿的优势。

咱们就拿航空公司来说：运营效益是大家都飞同样的航线、卖同样的票，只不过你把调度做得更精、飞机周转得更快、采购压得更狠——这些当然也重要，但别人迟早也能学会。战略定位却是你必须换一套打法，比如美国西南航空直接改成点对点短途高频航线，所有航线采用单一机型，再加上简化服务——这不是一般的成本优化，这是**围绕快速周转这个目标重新设计整套运营系统**。大多数人整天忙忙碌碌，无非是在优化运营效益，也就是完成 β 而已；而 α 只存在于你们独特的战略定位之中。

波特的警告是：你要搞战略定位，就一定要有痛苦的取舍——你必须专注于某个错，那么你就必须放弃其他市场。**如果你这也想要那也想要，不敢大刀阔斧地压住方向，你凭什么取得别人没有的？**

在波特这个视角下，用 AI 降本增效根本就不是战略：裁掉一半程序员、再裁掉一半运营、看看别人有什么最佳实践你就模仿一下、把流程理顺建立 SOP——所有这些的确能提高生产力，但如果你只做这些，你就会跟竞争者越来越像，这是没有前途的。因为你其实是在同一个赛道上和对手比拼谁跑得更累。这条路大概会是这样：竞争高度同质化，导致演变成价格战，然后利润率蒸发，从而失去健康的现金流，这样你就没有多余的钱研发新的 α；然后消费者就会认为你们提供的就是个廉价产品，最后你失去了品牌资产和创新能力。**低利润率是一种耻辱。降本增效不是进攻，而是防守。想要 α 你得进攻。**

我们可以把一家公司想象成三本账：第一本是**现金账**，管今天；第二本是**能力账**，管明天；第三本是**位置账**，管后天。日常运营主要盯第一本账，所以它天然喜欢 KPI、周转率、毛利率这些数字。战略意识盯的是第二本账：我们今天的利润到底买回来了什么别人一时学不走的能力？等能力沉淀出准入门槛、网络效应和信任，第三本位置账才会兑现。**利润是今天的结果，能力是明天的原因，位置是后天的统治。** 如果你真的形成统治，那也就是经济租。α 是动能，经济租是势能：α 是你主动出击纠正错配的动作，而当你把这个动作的战果转化成品牌、专利和网络效应之类的防御堡垒的时候，它就凝固成了经济租。

如你所能想见，大多数公司并没有 α 意识，谈不上什么战略定位。如果你们公司已经陷入价格战疲于奔命，那你当然没有资金去研发什么；可是如果你们公司运营状况良好、资金充足，你们多数也不会想要去寻找新的 α。这里有一个我们前面讲过的探索与利用的权衡问题：当前打法我们已经很熟练了，我们已经做了很好的优化，我们为什么要放着现成的优势业务不好好利用，非得把资源挪开去探索什么新东西呢？**核心能力很容易反过来变成核心刚性**，不可挑战。这就是为什么巨头会给后来者留下机会搞颠覆式创新——如果你只想降本增效、守住旧租，你早晚会被人家的 α 覆盖。

咱们看几个对比案例。今天的年轻人也许不知道，曾经有个妇孺皆知的品牌叫**柯达**，它是卖相机胶卷的。你可能以为柯达消失是因为他们没有发明数码相机，但恰恰相反，柯达比很多竞争者更早发明了数码相机。但是他们的管理层认为传统胶卷业务还是自己的优势所在，选择把资源继续投入到对现有胶卷生产线的降本增效上——**他们失败是因为选择守住自己的租。** 对比之下，光刻机巨头 ASML 在深紫外光刻时代已经是赢家了，但是他们可没指望把老路再榨干一点，他们主动押注极紫外光刻。现在 ASML 是全球唯一的极紫外光刻系统制造商，但他们没打算给人弯道超车的机会，正在积极推进下一代光刻技术，叫高数值孔径极紫外光刻。

美国曾经有两个零售巨头，一个叫 Kmart，一个叫 Sears，一度面临沃尔玛和 Target 的强烈竞争。这两家公司一看：我们不能做一代币啊，干脆我们合并吧，成为一个更大的巨头——合并了我们就有更大的规模效应、可以削减管理费用、可以共享供应链，对吧？他们并没有创造新的体验，也没有研发新技术，他们只是想通过财务报表上的数字削减来赢得竞争。结果这两家老店，一个就此衰败，一个直接破产。对比之下，**英伟达**当年面对巨头英特尔和 AMD 的时候也是打不过，但人家可没想通过降本增效来应对，而是搞了个叫 CUDA 的新平台，想把学术界和工业界锁定在自己的 GPU 生态之中。在长达十几年的时间里，CUDA 是一个纯粹的投资，没有什么爆发性的财务回报，但那是一个 α 投资。后来 AI 爆发，CUDA 成了万亿美元帝国的租。

当 iPhone 横空出世、改变了手机市场竞争维度的时候，诺基亚心想没事：我们有无比比的硬件制造效率，我们有超强的供应链成本控制能力，我们比苹果价格便宜，我们的性能更可靠——结果被时代抛弃。对比之下，Airbnb 进军旅游业的时候，酒店早就已经是一个高度发达的行业，用互联网订房间也早已成熟，他们并没有想着再给你来一波降本增效，他们反而发现私人住宅闲置是一个错配；他们认为阻碍匹配的核心不是技术而是信任，于是 Airbnb 搭建了一个租客和房东的互评体系，然后创始人亲自挨家挨户敲门，免费帮房东拍摄专业高清照片，用这样的冷启动方式人为创造了标准化信任——他硬生生地搭建了一个新的平台。

总想把老一套做得更好，真是人的本性啊。但**你所有的勤奋都会沉淀到 β 里。** 我们把上面的拼图放在一起，总结出一套从 α 到经济租的心法，分为五步。

**第一，错配。** 别只知道说我擅长什么，你得问：哪里有高价值错配？是需求和供给错、价格和价值错、用户痛点和行业共识错，还是技术可能性和组织能力错？

**第二，认知。** 这个错为什么偏轮到你纠正？你到底看见了什么重要的、但还没被充分定价的真相？你手上有什么独特的东西——是知识、品位、渠道、资本耐心、客户理解、声誉文化，还是对一手现实的长期贴身观察？

**第三，执行。** 没有取舍就没有战略。你下决心做什么就必须回答"我们不做什么"。你必须砍掉一些看起来很有希望的选项，你必须得罪一些人，你必须容忍一些指标暂时变得难堪。**正因为这是艰难的取舍，别人才无法模仿**：他们会被旧业务绑架、会被品牌定位限制，他们即便知道你这个战略也动不了，所以才能成就你的 α。

**第四，占有。** 一旦取得优势地位，你如何把优势沉淀成租？别忘了价值创造不自动等于价值捕获。你必须占有我们上一讲说的互补性资产，把内功外化成品牌、合同、数据、标准、入口、人才磁场、用户习惯或者供应链控制。

**第五，重构。** 任何经济租一旦过于舒适就会腐蚀警觉。不要小看天下英雄，别人会创造他们自己的 α 颠覆你的租，所以你最好有再造 α 的能力：利用过一段时间积累的资源就要再去探索。

你立即就能看出来，这里最关键的是第二步，也就是"**凭什么由你来纠正这个错，你手上一定有某种独特的东西**"。这听起来是个悖论：有独特的东西才能有 α，但不就是独特的东西吗？这不是同义反复吗？其实不然：有一点意志性的人很多，可能你会一点小众的技能、拥有一点别人没有的一手观察、懂一点跨领域的理解，又或者你在某个非常特定的场域之中积累了一点信用——这些东西本身并不构成 α，只有把它们组合起来、放到具体的错上才有可能形成 α。但的确你要有点特点才好。

世间多数人能有地方安稳地生活、领一份 β 收入就很满意。但是也有少数人、或者说极少数人，感觉不到自己的 α 就会坐立不安。商业竞争也好，人生博弈也罢，**我们想要的 α 绝不是"我比你更努力"那种线性勤奋，而是"我比你更早站在一个尚未被社会充分定价的真相上"**。你要找到那个真相，你要成为几项意志性特点的组合，你要大胆实施一个战略定位。如果可以选，我们把 beta 留给别人。
`,O1=`# 061丨商业杠杆：把一个创造卖一百万次

## 讲什么

破解"老板凭什么比工人赚那么多"的**杠杆叙事**：财富不是凝结在商品中的社会必要劳动时间，而是**规模化**——把好东西放大的结果。你的收入高，不是因为你干的活多，也不是因为你能让很多人替你干活，而是因为**你能把一个创造、一个组织、一个信任卖出很多次**。

## 解决什么真问题

淘汰"剥削叙事"：今天很多高科技公司总共就几百人甚至十几个人，员工持股，财富却是几万工人的传统工厂望尘莫及的；甚至出现了一人公司——一个人调用一堆 AI 智能体，一年做成千万元的生意。剥削是零和游戏，多拿一点别人就少拿一点，一个抢劫游戏可不能让你赚大钱。要理解今天的财富，必须意识到财富是规模化。

## 核心论点

- **固定成本 vs 边际成本**：赚钱的关键在于产品的零售价远高于它的边际成本。前期投了一大笔固定成本，只要销量越过盈亏平衡点，利润就蹭蹭上涨。老板赚钱是因为投资了前期固定成本、搭建了生产系统、承担了产品卖不动的风险。
- **六种递进的杠杆**：①劳动力杠杆（分工合作，亚当·斯密的别针工厂：十个人一天生产 48000 个别针）；②机器杠杆（自动化设备）；③基础设施杠杆（自来水管道：前期投入巨大但边际成本低、销量巨大）；④知识产权杠杆（把方案授权给全国几千个缺水的地方，只收授权费）；⑤网络杠杆（可信水源认证和地图平台——卖的不是水也不是专利，而是信任、标准和网络）；⑥债务杠杆（最危险：能放大财富也能放大错误，它重新分配风险与收益，创造财富的是项目而不是债务）。
- 好杠杆的本质：**创造一种可以反复执行的信息模式**。做一次收一次叫劳动，做一次收很多次才叫杠杆。设计它需要巨大智慧，一旦成型可以被近乎零成本复制。
- 理论基础是 2018 年诺奖得主保罗·罗默的**内生增长理论**：思想和配方是"非竞争性"的——一个苹果我吃了你就不能吃，但一个数学公式、一段代码、一个商业模式，我用了不妨碍你用。**财富增长的原理就在于这些非竞争投入：信息模式没有熵守恒定律，可以被近乎免费复制，边际成本约等于零。**
- 你买任何商品，买的不是那一堆原子（早晚要还给大自然），买的是原子的排列组合方式——**买的是商品的虚拟成分。卖什么约等于卖软件，虚拟成分越大，规模化就越能赚钱。**

## 关键例证 / 金句

- 麦当劳不是卖汉堡的，它卖的是汉堡生产语法：供应链选择、厨房流程、点餐系统、服务节奏和品牌标识。
- 可口可乐卖的不是一瓶黑色糖水甚至神秘配方，而是**口感稳定性和 100 多年堆出来的消费记忆**。
- 品牌作为杠杆的本质作用是降低交易成本：别人只要听到你的名字就自动信任。**商业世界绝不是尔虞我诈，而是最该重视君子名节的世界。**
- 纳瓦尔："不需要授权的杠杆"——劳动力杠杆需要别人同意被你领导，资本杠杆需要银行或投资人同意借钱给你，但**代码和媒体是不需要授权的**：你拍一段视频不需要许可就可以全球播放。
- 最厉害的杠杆是你成为现代生活的一种基础设施——平台就是这样的杠杆：用户自带生产资料加入你，你只需要把信任系统、评价机制和支付手段这些基础设施搞好。**平台卖的不是产品，而是市场秩序。**
- 规模化让亿万富豪的实际生活水平与普通中产并没有绝对差别——给少数富人服务并不是特别赚钱的生意，要做大生意必须为尽可能多的人服务，这本身也是一种平等。

## 如何应用

1. 个体起步：调动"不需要授权的杠杆"——写代码、做媒体内容（视频/文章），它们不需要别人许可就能触达全球。
2. 从业心态：别满足于卖工时（做一次收一次），把技能往"信息模式"方向沉淀——设计出可复制的流程、模板、课程、产品。
3. 调动能力 > 精通工具：在这个高杠杆时代，能随时调用各种现成工具和规模化设施的"调用力"，是比精通某一种工具更有用的能力。
4. 警惕债务杠杆：莫迪利亚尼-米勒定理说明单纯改变债务和股权比例不创造企业价值；债务会忠实放大判断错误。想要的是好杠杆——创造可反复执行的信息模式，而不是把同一块资产反复抵押。

---

## 全文（清洗后的课程转录，重点加粗+底纹）

欢迎来到现代思维工具课，我是万维钢。我们已经讲了经济租和阿尔法优势，讲的是凭什么由你赚钱。这一讲咱们说说你到底是怎么赚钱的。

比如你开了一家工厂，雇了 100 个工人，工人们加班加点，每人每天干十来个小时，你作为老板就算再贪婪再努力，也不过一天干十几个小时。那凭什么你的收入比工人高那么多呢？老百姓的直觉是这里一定隐藏着某种罪恶：你剥削了工人，你这个资本家无偿占有了别人的劳动成果。**剥削叙事曾经让人很痛快，但在当今这个时代却是越来越站不住脚了。** 今天很多高科技公司总共就几百人甚至十几个人、员工持股，可是他们的财富却是那些有几万名工人的传统工厂都望尘莫及的。那你说他们占有了谁的劳动成果？现在已经出现了一人公司——一个人调用一堆 AI 智能体，一年能做成几百上千万元的生意，他又剥削了谁呢？

我们不能说世界上没有剥削，但**剥削是零和游戏**：你多拿一点，别人就得少拿一点，一个抢劫游戏可不能让你赚大钱。要理解今天的世界为什么允许企业家赚那么多的钱，你必须意识到：财富不是什么凝结在商品中的社会必要劳动时间。现在世界拥有惊人的财富，可不是因为社会必要劳动时间比古代增加了成千上万倍。**财富是规模化，是把好东西放大的结果，这个放大必须远远超出劳动力的限制。你真正的方法不是剥削，而是杠杆。**

你赚钱多不是因为你干的活多，也不是因为你能让很多人替你干活，甚至不只是因为你能让很多人替你干活，而是因为**你能把一个创造、一个组织、一个信任卖出很多次。**

亚当·斯密在《国富论》里讲过一个小针工厂的故事。假设你一个人辛苦一天连 20 个别针都做不出来，于是你雇了十个工人替你干，你们要是每天总共生产 200 个别针，那可不算杠杆——工厂从来都不是这么开的。工厂是让这十个工人形成分工合作：有人专门拉铁丝、有人专门矫直、有人专门切段，每个人只负责一个小环节，每个人都把一个动作练到纯熟，工具也专门设计，生产线也围绕所有这些动作排列——结果这十个人每天能生产 48000 个别针！因为你安排生产线、制定流程、分配任务、监督质量，因为你的设计、组织和管理，使得十个工人的产量远超一个人产量的十倍——这才叫**劳动力杠杆**。你要是再厉害一点，能弄一大笔投资过来购买一批自动化机器，工人的人均生产力还能成倍提升。

为什么杠杆能放大财富呢？咱们算账。你办工厂要先买地、建厂房、买机器、研发产品、设计流程、做模具、招人培训等，这些要花一大笔钱，不管生产一件还是一万件产品，这笔钱都得先花出去，这叫**固定成本**。可是等生产线跑起来，每多生产一件产品只需要增加一点点人工、材料、水电、包装和运输费用就行，这叫**边际成本**。**赚钱的关键就在于产品的零售价远高于它的边际成本**：这是合理的，毕竟投入了那么多固定成本必须收回来；但是因为边际成本足够低，只要产品销量越过盈亏平衡点，利润就会蹭蹭上涨。我们不能只看到工人干活老板赚钱，却不知道这个生意之所以能做成，是因为老板投资了前期的固定成本、老板搭建了生产系统、老板承担了万一产品销量低过不了盈亏平衡点的风险。

有些号称搞政治经济学的人还在纠结劳动力杠杆算不算剥削，却不够现在这个世界早就发明了更先进的杠杆。我们设想有一个缺水的地方，你来把远方的水卖给村民。

**第一种办法是自己挑水**，没有杠杆：你一天挑 50 桶卖 50 桶，单价并不便宜，可是因为总量太少，只能挣个辛苦钱。**第二种办法是雇人挑水**，用劳动力杠杆：人均效率总会有所提高，毕竟可以分工合作，你的收入会更多，甚至单价还可以略降，但是管理这一群挑水工也很麻烦。**第三种办法是尽可能多地购买设备**，用机器杠杆：多投点钱买骆驼、买更大的水车、甚至修一条简单的滑轨——到了这一步，隔壁村的业余人士可就不容易给你竞争了。**第四种办法是基础设施杠杆**：你直接建了一条自来水管道，前期投入巨大，但是你现在边际成本很低，而且可以服务好几个村子，销量巨大。对村民来说水成了一种很便宜的东西，可是你却赚到了更多的钱。**第五种办法是知识产权杠杆**：你发明了一套高效取水及过滤系统，把这套方案授权给全国几千个缺水的地方，让当地自行成立公司，你只收取授权费——现在你卖的已经完全不是水了。**第六种办法是网络杠杆**：你建了一个可信水源认证和地图平台，所有卖水的人都愿意贴你的认证标志，因为消费者相信你——你卖的不是水，也不是专利，而是信任、标准和网络。我们后面会讲网络平台是当今世界最赚钱的生意，现在你只需要体会一下高级杠杆是什么样。

还有一种杠杆，我们的卖水故事里没提到，却是最引人注目、赚钱速度最快、但也是最危险的杠杆，那就是**债务杠杆**。基本玩法是这样的：比如你赶上了房地产的大潮，人们都相信房价永远上涨。你作为开发商只出了一点点本金，就通过找关系从银行贷款买下了一块地开始盖楼。地一到手就成了你的资产，你楼还没盖好，土地价格就已经涨了不少，于是你以这块土地作为抵押物去银行融到了更多的钱，你再用来买更多的地；你直接把没盖好的楼预售转让让资金回笼，转头一看房价和地价又涨了，你就融了更多的钱拿下更多的地。这样反复循环，你用最初一个亿的本金撬动了 100 亿的生意。只要房价一直涨、购房者也能接受预售、银行也愿意给贷款，所有人都配合你——直到房子卖不动的那一天，你才发现那些所谓资产其实是债务。

**债务是一种好杠杆吗？它能放大财富吗？** 公司金融学有个莫迪利亚尼-米勒定理说：在理想市场中，单纯改变债务和股权比例并不会凭空创造企业价值，债务更多是在重新分配风险和收益。这有点反直觉：比如你有一个创业想法但是没有钱，你找人借了一笔钱开了公司雇了员工做了产品服务客户，你创造了市场上本不存在的价值然后把钱还上——你问这不就是债务创造了财富吗？其实**创造财富的是你那个创业项目，而不是债务**。如果我们明确知道你那是一个好项目，你根本就不愁钱的来源，会有很多人愿意入股或者借钱给你。你这项目是债务融资还是股权融资做的，还是你自己攒钱做的都没关系，那些改变的只是谁承担风险、谁分享收益、谁先拿钱谁后拿钱而已。当然莫迪利亚尼-米勒定理描写的是一个理想市场，真实市场中有交易摩擦、税收条款会影响债权和股权选择，而且信息是不对称的——那么债务的确可以起到一个非常正当的作用，也就是让资源从有钱但不会用的人转移到没钱但会用的人。但即便如此，创造财富的也不是债务本身，而是那个项目最多加上借钱者的风险判断。**债务是一个中性的工具：如果判断错了，债务也会忠实地放大错误。**

我们前面讲脆弱和反脆弱的时候，说过明斯基那个"稳定孕育不稳定"理论，他说的就是债务杠杆的危害性：经济越繁荣大家越有信心，大家越有信心就越敢借债，大家越敢借债系统就越脆弱。融资结构会从对冲型融资滑向投机型融资，最后变成庞氏骗局型融资。债务杠杆最不一样的地方在于它有偿还义务——**债主早晚要来敲门**。

我们想要的是好杠杆。**好的商业杠杆不是把同一块资产反复抵押，而是创造一种可以反复执行的信息模式。** 无论是你的组织管理、你发明的商业模式、还是你搞出的一个配方、设计的产品原型、一套标准化操作，或者是形成了一个品牌，这些本质上都是信息模式。信息模式的特点是：你设计它需要巨大的智慧和成本，但一旦成型，它可以被近乎零成本地复制，并且可以被可靠地执行。**做一次收一次那叫劳动，做一次收很多次才叫杠杆。**

这件事的底层原理是 2018 年诺贝尔经济学奖得主保罗·罗默的**内生增长理论**。罗默回答了一个特别基本的问题：为什么人类社会能持续增长而不是陷入资源枯竭的死循环呢？你的财富变多了，我的财富也变多了，那这个世界上谁的财富变少了呢？我们到底剥削了谁？答案包括地球母亲在内，谁的财富也没变少。罗默的洞见是：**因为思想和配方是"非竞争性"的。** 比如一个苹果我吃了你就不能吃，这是竞争性的；但是一个数学公式、一段代码、一个商业模式却是非竞争性的——我看了这篇文章并不妨碍你也看这篇文章，我用这套算法也不影响你再用一遍。财富增长的原理就在于这些非竞争投入：**信息模式没有熵守恒定律，它可以被近乎免费地复制，它的边际成本约等于零，而它的边际收益大于边际成本，所以财富才能无中生有地被生成。** 苹果不能复制，苹果品种和种植法却可以复制；员工不能复制，培训和软件工具却可以复制；一家店不能复制，开店语法却可以复制——这就是现代财富的秘密。

你购买任何商品——苹果也好汽车也好——买的不是组成商品的那一堆原子（那一堆原子你一个都消灭不了，早晚都得还给大自然），你买的是那些原子的排列组合方式，**你买的是商品的虚拟成分。卖什么约等于卖软件，虚拟成分越大，规模化就越能赚钱，这就是商业杠杆。**

我们用杠杆的视角稍微解析一下各种好生意。软件、视频、网上文章是边际复制成本最低的杠杆业务：你可能需要花很多功夫才能完成它，但你只需要完成一次，它就可以在无数台机器上近乎无成本地运行。街边小店卖的是饭菜，连锁店卖的却是可复制的运营协议。**麦当劳不是卖汉堡的，它卖的是汉堡生产语法**——供应链选择、厨房流程、点餐系统、服务节奏和品牌标识。品牌作为杠杆的本质作用是**降低交易成本**：你不需要向用户解释半天，别人只要听到你的名字就自动信任。在这个意义上，商业世界绝不是尔虞我诈，而是最该重视君子名节的世界。

如果你的品牌已经如此深入人心，人们买你的商品就已经不再是因为你好，而是因为你提供了确定性：**每一瓶可口可乐的口感都是一模一样的**。它卖的不是一瓶黑色糖水，甚至都不是号称有多么神秘的配方，而是口感稳定性和 100 多年堆出来的消费记忆。最厉害的杠杆是你成为现代生活的一种基础设施——平台就是这样的杠杆：一旦成了平台，用户就会自带生产资料加入你，你只需要把信任系统、评价机制和支付手段这些基础设施搞好就行。**平台卖的不是产品，而是市场秩序。**

剥削叙事把思维停留在血汗工厂那个层次，只有杠杆叙事才能让我们真正理解赚钱的逻辑。现在硅谷的思维是把杠杆用到极致。创业教父保罗·格雷厄姆早在 2012 年就说过：**创业公司的定义就是增长，创业就是要把你的局部努力放大到整个市场。** 如果一家理发店要想增长 100 倍，就得雇 100 倍的理发师，那这不叫创业公司，叫传统服务业。我有一个做风险投资的朋友叫张瑞，跟我说过一个好的 VC 的投资逻辑：有的创业者技术很好、有利润，每年能稳定增长 20%，这种稳健对好的 VC 毫无吸引力——VC 投 100 家公司可能大部分都归零，所以必须要求每家都有增长 100 倍以上的潜力才行。现在 AI 时代用户付费提高，你开个小公司赚到几十万美元不是问题，但 VC 对这个不感兴趣，他们感兴趣的是你怎么能突破年入 100 万美元、达到千万甚至上亿美元——你必须能撬动巨大的市场。

那你说我一个人上哪找杠杆呢？硅谷思想家纳瓦尔有个洞见叫**不需要授权的杠杆**：劳动力杠杆需要别人同意被你领导，资本杠杆需要银行或投资人同意借钱给你，但代码和媒体是不需要授权的——你拍一段视频不需要许可就可以全球播放。你最好的起步就是调动这些杠杆的能力。在这个高杠杆时代，**能随时调用各种现成工具和规模化设施的调用力，是比精通某一种工具更有用的能力。**

商业杠杆带来一个有意思的悖论：规模化能让少数人拥有巨量的财富，这对其他人似乎很不公平；但也恰恰是因为规模化，使得每个人使用的产品其实都差不多，以至于亿万富豪的实际生活水平与普通中产并没有绝对的差别——亿万富豪用的手机和我们的没有任何不同，而且你花再多钱也买不到功能更强的手机。在这个时代给少数富人服务并不是一种特别赚钱的生意，VC 都不愿意投。**要想做大生意，你必须为尽可能多的人服务——这不也是一种平等吗？**
`,E1=`# 062丨机会窗口：是盲目跟风，还是顺应大势？

## 讲什么

**机会窗口理论**（战略管理学家费尔南多·苏亚雷斯等人 2015 年提出）：判断入场时机的核心框架。一句话：**你入场的机会窗口，是从主导类别出现时打开、到主导设计出现时关闭。** 类别是大家给新事物取的名字（有了主导类别，投资人不再问"这是个什么玩意"而开始问"这个赛道谁领先"）；主导设计是行业已经基本定下来"这种东西该怎么做了"（架构、界面、标准、渠道、采购规则全都固定）。

## 解决什么真问题

破解"曾国藩式焦虑"——"久利之事勿为，众争之地勿往"：如果一个事已经这么热、街头巷尾都在讨论，参与岂不是纯属凑热闹？万维钢指出这句格言属于**选择偏差**：计算机专业早 30 年就是热门，如果 20 年前你劝一个特别聪明的高中生别报计算机，那不坑人吗？**该不该进入一个领域，跟它看起来有多热没有太大关系。** 真正的问题是热到了哪一步。

## 核心论点

- **底层信念：趋势是存在的。** 聪明人容易过度相信市场有效性——如果一个问题可以解决，一定早被别人解决了；如果行业真能赚钱，早有无数人才和资本涌入，利润迅速降到零。但现实绝非如此：金融市场 2012 年"时间序列动量"论文（58 种高流动性合约）证明过去一到 12 个月收益对未来收益有正向预测力——**如果一样东西一直往一个方向走，它常常还会继续走一段**。市场短期对消息反应不足，慢慢才反应过来，于是趋势形成。
- **来早了你替人家开荒（教育市场），来晚了只能喝汤（价格战）**。只有在从主导类别出现到主导设计出现之间的机会窗口期入场，你才能赶上吃肉——那是规则的构建期，更是创造的红利期。
- 万维钢让 AI 综合罗杰斯创新扩散理论、巴斯扩散模型、希勒叙事经济学、汉南和卡罗尔组织生态学、厄特巴克和阿伯内西产业生命周期理论，提出**DNS 三曲线趋势时钟**：**需求（Demand）、叙事（Narrative）、供给（Supply）**三条曲线。
- 五个阶段：①**暗流期**（需求有苗头、没叙事没供给，充满风险，你以为发明了解决痛点的东西，可能只是小众癖好）；②**风起于青萍之末**（需求上升、叙事刚出现、供给非常少，高手这时可以悄悄积累能力和关系）；③**最佳入场窗口**（需求验证、叙事合法化、供给尚未拥挤、主导设计还没锁定）；④**如日中天**（需求叙事都很强、供给快速上升，入场有点晚，除非能力强到强差异化）；⑤**天已过午**（需求增速下降、叙事吹成神话、供给过剩、主导设计锁死，正面入场就是打价格战）。

## 关键例证 / 金句

- **智能手机与苹果**：苹果既不是第一个做手机的也不是第一个做移动计算设备的，但 iPhone 恰好在"智能手机"主导类别形成、而主导设计还没定论的时候推出，一举确定多点触控大屏、移动操作系统、应用商店和开发者生态这一整套主导设计。
- **电动汽业与小米**：小米入场时主导类别早已存在、特斯拉已稳、蔚小理很有存在感——但小米赌的是电动汽车的主导设计还没有完全锁死，他深化了"软件定义汽车"，搞人车家生态。
- **MP3 与微软 Zune**：2006 年微软推出 Zune 对标 iPod，硬件设计不错、有无线分享和订阅模式等想法，但 MP3 市场主导设计已定，没有真正的差异化，惨遭失败；后来智能手机崛起连 MP3 这个产品类别都不复存在。
- **秦末乱世**：陈胜吴广开创造反这个主导类别（"王侯将相宁有种乎"），但入场太早成了悲壮的开路先锋；项羽组织了有效供给但提供的是过时设计（分封制）；刘邦入场正好踩在机会窗口上，提供统一秩序+约法三章两项新设计，组织起更强供给一举胜出。刘邦之后韩王信、彭越再想造反，机会窗口已关闭。
- **考公判断**（2026 年）：需求早已趋稳且收缩（2026 年国考计划招录人数比上年减少 4.3%）、叙事变成社会避险神话、供给严重过载（2026 年通过国考资格审查 371.8 万，竞争比 98:1）——现在花时间备战考公就如同在 2020 年高价买房。
- **计算机专业判断**：需求还在（数据安全、自动化仍热）、叙事变了（以前会写代码就行，现在必须是与 AI 协同工作的工程师）、供给因 AI 参与已相当拥挤——仍处于第四阶段甚至可能打开新窗口。

## 如何应用

1. 用机会窗口理论看大趋势：判断一个行业是否该入场，看主导类别是否形成（大家是否已统一叫法、资本是否开始问"谁领先"、招聘是否出现相关岗位、媒体是否从猎奇转向行业分析）、主导设计是否锁定（架构界面标准渠道是否固定、头部玩家位置是否固定）。
2. 普通人（比如在哈尔滨开剧本杀店）用 DNS 三曲线：真实需求有没有人真花钱？叙事是否获得大众认可？供给已经多拥挤？你有没有能力做出差异化？
3. 尊重时间窗口这个硬约束：如果你想干的那个事现在没有多少真实需求、连主导类别都不成立，那最好先干别的。
4. 大玩家机会：如果有一家大厂（比如苹果或字节跳动）搞出一款专门的 AI 电脑或 AI 手机让消费者一看真好用，它就可能定义 AI 时代的主导设计——现在 AI 正处在"智能体应用主导类别已存在、但具体怎么用主导设计还没定型"的时刻。

---

## 全文（清洗后的课程转录，重点加粗+底纹）

欢迎来到现代思维工具课，我是万维钢。现在 AI 这么热，人家都说是大势所趋，你也很想入场干点什么，但你总担心自己到底是真的顺应大势还是盲目跟风呢？从古至今任何想要大展身手的人都会面临这个灵魂拷问。传说曾国藩有句话叫"**久利之事勿为，众争之地勿往**"：如果这个事已经如此之热、街头巷尾都在讨论，这时候参与岂不是纯属凑热闹吗？难道我们不应该找一片属于自己的蓝海吗？

但这话得看你怎么说。我们设想 2018 年中国房地产还相当火热的时候，有个高中生说大学想报考建筑学专业。如果你那时候冷静判断，告诉他建筑业已经太热了，我看早晚变成夕阳产业、久利勿为——那你是帮了人家。但是咱们再想想：计算机专业早在 30 年前就是热门，一直都是最难报考的专业之一，如果 20 年前你跟一个特别聪明的高中生说计算机太热了、众争勿往，你不坑人吗？现在还是同样的问题：AI 编程兴起，很多毕业的计算机专业大学生不好找工作，那你敢说计算机专业就没有前途了吗？现在社会上有这么多人考公，你敢跟他们说一句"众争勿往"吗？

**该不该进入一个领域，跟它看起来有多热没有太大关系。曾国藩那句格言属于选择偏差。** 这一讲咱们说怎么判断入场时机。你不可能精准预测未来，但是你总可以有比反内卷更高级的心法。

首先我们要有一个底层信念、一个先验，那就是**趋势是存在的**。你但凡敢出来做事，就得相信趋势的存在。我看聪明人特别容易犯的一个错误就是过度相信市场的有效性：你可能会觉得如果一个问题是可解决的，它一定早已经被别人解决了；如果一个行业真能赚钱，早有无数人才和资本涌入，互相竞争之下利润迅速就会降到零。如果你相信有价值的信息都会被瞬间吸收、任何局部优势都会被立刻抹平、每一个错都会被很快纠正，那你就等于说相信干什么都是一样的。**现实绝非如此。**

金融市场大概是最接近有效市场的地方，毕竟交易太方便了。我们可以设想：如果一家公司有一个基本面意义上的好消息，市场得知这个消息就会提高对他的估值；有这么多交易员盯着，好消息应该会在一天之内被定价，以至于普通股到的股价应该都大致反映了公司的价值，对吧？如果股市是这样的，今天的股价上涨就只是今天的事，如果明天有别消息出来那就是另一个走法——如果金融市场是有效的，股价应该呈现某种随机游走的状态，对吧？那么你需要读一读 2012 年芝加哥大学的托比亚斯·莫斯克维茨等人发表的一篇经典论文《时间序列动量》：他们分析了股票指数、货币、商品、债券期货等等 58 种高流动性合约，发现过去一到 12 个月的收益对未来收益有一定的正向预测力，然后才在更长的周期上会有部分反转。翻译成人话就是：**如果一个东西一直往一个方向走，它常常还会继续走一段。** 换句话说，如果股市过去半年涨得挺好，它下个月大概率还会涨。这不是说应该追涨杀跌，因为这里研究的是长期的统计规律，但是这篇论文证明了市场的趋势是存在的。行为金融学对此早就有说法：市场短期内会对消息反应不足，慢慢才反应过来，这样趋势就形成了；到了一定程度跟风的人越来越多，市场才会反应过度。

金融市场如此，其他市场就更是如此：**信息不会瞬间被世界承认，价格不是一次性反应真相，人群对事物的认识是逐渐的。真正的问题不是热不热，而是热到了哪一步。** 这就引出了我们重点要说的思维工具——战略管理学家费尔南多·苏亚雷斯等人在 2015 年提出的**机会窗口理论**。

这个理论说：比如你想进入一个领域，这里有别的玩家、有各种各样已经出现和可能出现的产品，那你怎知道自己是来早了、来晚了还是来得恰到好处呢？答案是一句话：**你入场的机会窗口，是从主导类别出现时打开、到主导设计出现时关闭。**

所谓类别就是大家给这个新事物取的名字。比如曾经何时，人们对那种能上网的手机有很多称呼：PDA、掌上电脑、多媒体电话等，这就是没有形成主导类别；等到大家统一称之为智能手机的时候才算是主导类别形成——投资人和客户都不需要再问"这是个什么玩意"，而开始问"这个赛道谁领先"；招聘市场出现相关岗位，媒体从猎奇报道转向行业分析。如果主导类别还没形成你就进场了，你就必须得花费巨大的成本去教育市场——客户、资本、媒体和监管部门都不懂你在干什么，你等于是在替后人开荒，岂不是费力不讨好？

而主导设计出现就是行业已经基本定下来"这种东西该怎么做了"：人们对好产品该长什么样已经达成共识，架构、界面、标准、渠道、采购规则全都固定，连头部玩家的位置也固定了。那时候你再入场就太晚了——你错过了规则的制定，现在只能在人家的规则里寻找一点缝隙；你几乎不可能给出一个石破天惊的创新，就只能打价格战、卷加班、赚点辛苦钱。

**来早了你帮人家开荒，来晚了只能喝汤。只有在从主导类别出现到主导设计出现之间的那个机会窗口期入场，你才能赶上吃肉——那是规则的构建期，更是创造的红利期。**

咱们看三个经典案例。**第一是智能手机和苹果。** 苹果既不是第一个做手机的，也不是第一个做移动计算设备的。在 iPhone 之前市场上已经有 PDA 手机、商务手机、拍照手机、音乐手机，黑莓、诺基亚、微软的移动系统——诺基亚从通信出发，黑莓从商务邮件出发，微软从桌面电脑出发，各个大厂都在用自己的优势定义手机，但当时没有人明确知道手机到底是该干什么用的。后来手机上网变得普遍，"智能手机"这个主导类别才算形成。而恰恰又在智能手机到底应该是什么样还没有定论的时候，苹果推出了 iPhone，一举确定多点触控大屏、移动操作系统、应用商店和开发者生态这一整套主导设计。主导设计一旦形成，别人就很难再进来竞争了——安卓生态之所以存在，是因为苹果卖得太贵而且不自由，给他留下了一点空间；更后来的竞争者就只能打价格战了。

**第二是电动汽车和小米。** 那你说小米造汽车的时候，电动汽车这个主导类别早就存在，而且主导设计也定型了：特斯拉已经稳了，蔚小理都很有存在感，你这时候进来不是盲目跟风吗？小米赌的是电动汽车的主导设计还没有完全锁死：他深化了"软件定义汽车"，搞个人车家生态，说汽车的座舱是第三空间——而小米在智能生态和软件上有优势。

**第三是 MP3 播放器和微软。** 你可能都不知道，微软公司曾经在 2006 年推出一款 MP3 播放器叫 Zune，正面对标苹果 iPod。其实它的硬件设计还不错，有些功能也挺有想法，比如支持无限分享和订阅模式。但它最终惨遭失败。关键是当时早就有 iPod，MP3 市场的主导设计已经定型了——你没有真正的差异化，那这就不是你的机会窗口。再加上后来智能手机崛起，连 MP3 这个产品类别都不复存在，就连想跟人打价格战都已经不可能。**要想光荣地入场，你必须借助主导类别、定义主导设计。**

我们用机会窗口理论分析，现在 AI 正处在"智能体应用"这个主导类别已经存在、但是个人具体应该怎么用这个主导设计还没有定型的时刻。如果有一家大厂，比如苹果或者字节跳动，搞出一款专门的 AI 电脑或者 AI 手机，让消费者一看真好用，它就有可能定义主导设计。但这不是我们的主题。

机会窗口理论似乎对大玩家特别有用，那你说我是个普通人，我就想在哈尔滨开个小店，我怎么能知道该不该入场呢？我们需要一个更通用的工具。咱们先综合一下前人的智慧。罗杰斯的创新扩散理论告诉我们：新事物不是均匀扩散的，而是从创新者、早期采用者到早期大众、晚期大众走一条 S 曲线；巴斯的扩散模型进一步说明消费者采用新产品既受创新吸引也受模仿影响；希勒的叙事经济学又说叙事很重要，经济叙事会像病毒一样传播影响投资、消费和创业；汉南和卡罗尔的组织生态学认为，一个新组织类型早期数量少、合法性低，中期同类组织增加能帮你证明类别的合法性，后期同行密度过高就会发生竞争吞噬；厄特巴克和阿伯内西的产业生命周期理论也说行业早期拼产品创新、后期拼流程规模和效率。

我让 AI 把所有这些学说综合起来加以简化，给一套指人心的心法，它提出了一个新心智模型叫 **DNS 三曲线趋势时钟**（文稿里有图）。DNS 就是需求、叙事和供给。我想知道入场的最佳时机，就要看这三条曲线各自走到了什么位置。**需求曲线是真实需求**——不是有人感兴趣，而是有人真花钱，人们真的会把预算从旧方案迁移过来、把新东西嵌入工作流，哪怕这个产品很烂他们也忍着用，这是最底层的动力。**叙事曲线是叙事**——我们这门课反复说叙事的重要性，叙事是社会对你这个东西的认可，叙事决定这门生意的合法性，名不正则言不顺，有了叙事才有了资本、有了估值、预算和岗位。**供给曲线**——也就是有多少人跟你抢生意，这条曲线代表了竞争的拥挤程度和资源的锁定程度：早期竞争者能帮你证明需求和教育市场，晚期竞争者会抢夺你的利润。

这三条曲线合起来，一个机会大概分五个阶段。**第一，暗流期**：需求有苗头但没有叙事也没有供给，这里充满风险——你以为你发明了一个能解决痛点的东西，但保不齐它可能只是一个小众的癖好。**第二，风起于青萍之末**：需求开始上升，叙事刚刚出现，供给非常少——高手这时候可以悄悄积累能力和关系了，因为窗口就在眼前。**第三就是最佳入场窗口**：需求已经验证，叙事已经合法化，供给尚未拥挤，主导设计还没锁定——此时不出手更待何时？**第四，如日中天**：需求和叙事都很强，供给快速上升，行业很热闹人也多钱也多——这时候入场已经有点晚了，但如果你有超强能力、强到强差异化，你还可以进。**第五则是天已过午**：需求增速下降，叙事已经吹成了神话，供给过剩，主导设计锁死——这时候正面入场就是打价格战。而且别忘了你还需要有能力匹配，没有这个 DNS 再怎么样也跟你没关系。

根据这个框架，如果你想在哈尔滨开一家剧本杀店，你就需要考虑：旅游业是否给哈尔滨带来了更多的需求？剧本杀这种玩法是否已经得到了大众的认可？哈尔滨现在已经有多少家剧本杀店？你有没有能力做出差异化来？这些没有精确的量化标准，但这个心法是有用的。

今天还要不要学计算机专业？需求还在，数据安全、自动化仍然很热，各行各业都在做数字化；叙事变了——以前是会写代码就行，现在你必须是一个跟 AI 协同工作的工程师；供给方面，因为 AI 参与确实已经相当拥挤。综合判断，我认为计算机专业仍然处在第四阶段，甚至如果你考虑到叙事改变，新窗口还有可能打开，并没有到天已过午的地步。

那要不要考公呢？需求早已趋稳而且在收缩——随着各地政府财政能力下降，公务员岗位会减少，2026 年国考计划招录人数已经比上一年减少了 4.3%；叙事方面，考公已经不只是寻求一份体制内工作，而是变成了一个社会避险神话；供给更是严重过载——2026 年通过国考资格审查的人数达到 371.8 万，比上一年增加了 30.2 万，竞争比高达 98:1。综合而论，**我看现在花时间备战考公就如同在 2020 年高价买房。**

我们还可以用这个框架分析一个更有意思的故事：秦朝末年那么多人起义，为什么最后是刘邦胜出呢？陈胜吴广开创了造反这个主导类别，他们用一句"王侯将相宁有种乎"向天下人证明造反是一个合法的叙事，但是他们在场太早——投资人和用户还没搞明白这门业务应该怎么干，所以他们主要作用是教育市场，最终成了悲壮的开路先锋。项羽组织了有效的供给，但他提供的是一套过时的设计（分封制），对渴望稳定的民众缺乏吸引力；不过反秦大势已经深入人心。刘邦不但入场正好踩在机会窗口上，而且提供了两项新设计：一是统一秩序，二是用约法三章化解秦高压带来的民怨——这就组织起更强劲的供给，一举胜出。而刘邦之后，像什么韩王信和彭越这些人又想造反，可是刘邦的设计已经是主导，机会窗口已经关闭了。

有了机会窗口理论和 DNS 这套心法，你就不用整天空谈什么"时事造英雄"感叹口号了。**一项事业够不够热、有没有很多人在追求，这些都不是本质；本质在于需求、叙事和供给的互动，在于这里有没有主导类别和主导设计。我们必须尊重时间窗口这个硬约束。** 如果你想干的那个事，现在没有多少真实需求、连主导类别都不成立，那你最好先干别的。
`,T1=`# 063丨效果推理：不知道该干什么的时候该干什么

## 讲什么

**效果推理**（effectuation，又译"效应推理"）：不知道该干什么的时候，先用手里的东西干出一个会改变下一步的小结果。它是弗吉尼亚大学达顿商学院的萨拉斯·萨拉斯瓦蒂教授 2001 年提出的，与"因果推理"（憋大招）相对。核心一句话：**因果推理是目标已知、我来选择手段达成目标；效果推理是手段已知、创造目标。**

## 解决什么真问题

解决"有野心、有时间、有资源，但不知道干什么"的迷茫。你找到自己的 α 了吗？你需要一个正确方向的指引。但 **α 不一定是算出来的，更可能是干出来的**——是你跟世界互动之中发现的。你不需要等一个完美机会，也不需要先找到人生使命，也许你已有的东西就可以组合起来做点事。

## 核心论点

- **憋大招创新 vs 华强北创新**：憋大招是乔布斯的特权——先有伟大愿景，秘密研发两三年，产品亮相惊艳世界；但世间大多数创新不是先有伟大愿景，而是先有一堆零件——不是从"我知道未来"开始，而是从"我手里有这些东西"开始。华强北有摄像头、微型显示、AI 翻译，组合起来就是 AI 翻译眼镜——你做的事你能做的事，而不是你该做的事。
- 因果推理适合大项目（造桥修地铁办奥运会），但目标不确定、市场不存在、客户说不清自己要什么的时候，等因果推理就只能无限期拖延。现实中很多公司强行制造因果幻觉：80 页商业计划书、预测未来五年收入曲线——Excel 里一大堆数字跟算命没啥区别。
- 萨拉斯瓦蒂实验：让连续创业成功的专家级创业者和 MBA 学生面对同一个虚构的极度不确定商业场景，专家们没有预测未来而是直接上手——问"我现在能联系到谁""我能承受的最大损失是多少""谁愿意跟我一起干"。
- 越是创新度高的项目，效果推理和项目绩效越正相关；创新度低、问题明确的项目，因果推理更有利。**探索用效果推理，利用用因果推理。**

## 关键例证 / 金句

- 厨房比喻：因果推理是"我要做宫保鸡丁"→列菜谱买食材按步骤做；效果推理是打开冰箱看见两个鸡蛋、半根胡萝卜、剩米饭、几片火腿，于是决定做个蛋炒饭。平时在家做饭大多是效果推理，只有逢年过节才郑重地使用因果推理。
- U-Haul（美国自助搬家拖车公司）的建立：1945 年二战退伍兵萨姆·肖恩和妻子搬家，发现租不到可单程异地归还的拖车。他没有做市场调研和商业计划书，而是动用他的"手中之鸟"——5000 美元积蓄、亲戚家的车库、自己动手改装拖车的能力、一堆愿意帮忙的亲友。他把车漆成醒目的橙色印上 U-Haul 标识（柠檬水），找各地加油站合作提供场地和管理服务、分享租金收入（疯狂拼布），还让租客成为网络扩张者（说服当地加油站加盟获折扣）。1945 年夏启动，年底已有 30 辆拖车；1949 年底已能在美国大部分地区实现城市到城市的单程租赁。
- **效果推理不说"相信自己"，而说"盘点自己"；不说"梦想要大"，而说"损失要小"；不说"坚持到底"，而说"先做一小步，让现实告诉你下一步"。**

## 如何应用

五个原则（正好是一个创业版 OODA 环）：
1. **手中之鸟**：从自己手里拥有什么出发，先问三个问题——我是谁（性格、偏好、经验、价值观）、我会什么（专业技能和默会知识）、我认识谁（朋友、同事、客户和社群关系，且看他们愿不愿意投入一点时间金钱见识和信用）。一鸟在手，胜过十鸟在林。
2. **可承受损失**：因果推理问回报，效果推理问损失。你连市场是否存在都不知道，谈不上考虑赚几个亿；先考虑如果失败你能不能承受。如果损失就是几个周末的业余时间和一笔小钱，最多再丢一点面子，你应该立即行动。
3. **疯狂拼布**：因果推理喜欢分析对手，效果推理必须先找伙伴。带着粗糙想法尽快找人谈——"我这事业还没谱，但你要是愿意提供场地，将来收入分你多少多少"。看谁愿意给出真实承诺：愿意试用、愿意介绍客户、愿意付定金、愿意开放一点渠道。
4. **柠檬水**：别怕意外。因果推理怕意外打乱计划，效果推理需要拥抱意外——意外可能是新的入场券。用户拒绝购买产品但特别喜欢其中一个小功能，那真正有用的就是这个功能。
5. **驾驶舱里的飞行员**：因果推理强调预测，希望有固定航线和准确的导航仪；效果推理相信临场控制——你不能控制天气，但你能控制航向、燃油、速度、沟通和降方案。**你的行动才是决定命运的最关键变量。**

职场应用：公司让你负责一个完全没头绪的新业务，你可以找出公司里可能感兴趣的三个人（手中之鸟），约他们出来喝咖啡（可承受损失），听听他们有什么资源能加进来（疯狂拼布）——可能原本觉得没谱的事三言两语就聊成了。效果推理是一种把拥有变成资源、把关系变成承诺、把意外变成方向的能力，本质上是一种**反脆弱战略**。

---

## 全文（清洗后的课程转录，重点加粗+底纹）

欢迎来到现代思维工具课，我是万维钢。今天要讲的思维工具叫做**效果推理**。有时候你感到时代大潮在召唤你：你有野心，也有时间，也有一定资源，可能还攒了点钱，还懂一些技术，甚至认识几个人，你的脑子相当可以，所以你也很想做一番事业。问题是你不知道该干什么。这个风口那个赛道真的属于你吗？你找到自己的 α 了吗？你需要一个正确方向的指引。最好有一份攻略，先看准再下注是个好习惯，要严肃参与什么事业最好都有——但**α 不一定是算出来的，它更可能是干出来的，是你跟世界的互动之中发现的**。其实你不需要等一个完美机会，也不需要先找到人生使命，也许你已有的东西就可以组合起来做点事，你先出发，后面的事也许就会自然跟进。

我们前面讲赛道选择的时候提到过一个思维工具叫效应化（一般翻译成效果推理）。我看这个工具太过重要，值得专门讲一讲。简单说，**效果推理就是不知道该干什么的时候，先用你手里已经有的东西干出一个会改变下一步的小结果。** 对每一个想要做出一番事业、却又在迷茫原地踏步的人来说，它是一个很好的心药。

我先讲一个自己的观感：科技产品创新有两种，一种叫**憋大招创新**，一种叫**华强北创新**。一般人想象中的创新是憋大招：你构想了一个伟大的产品，但是其中有若干个关键问题没有解决，于是你投入资金组织人马秘密研发两三年，把那些问题一个一个解决，产品一亮相就惊艳了世界，时代从此分为发布会之前和发布会之后。乔布斯搞 iPhone 就是这样的创新：市场上原本不存在全触屏智能手机，苹果公司不得不先开发多点触控之类的关键技术，用好几年的时间才憋出一个大招。"我想要什么"→"这个东西面临的难点是什么"→"我解决这些问题"→"我推出产品"，这就是憋大招的逻辑。

这些年我看了很多小公司的创新，特别是在像 CES 这样的场合，我看到很多尚未被市场证明、还处在进行时状态的创新产品。我意识到：**大部分公司搞创新并不是对准一个需求憋大招，他们是先看看手里有什么东西，把这些东西排列组合，弄出一个产品就推向市场，再看看好不好卖。** 我把这种创新称为华强北创新。因为所谓"手里有什么东西"，其实就是深圳华强北这个地方有什么东西——中国也好美国也好，当今各路硬件产品基本上都是华强北技术的排列组合。比如华强北有能够放进眼镜之中的摄像头、有微型显示技术、有声音拾取和降噪技术，而现在 AI 翻译已经非常有用了——那么你们公司就可以把这些组合在一起，造一个能实时翻译对面人说的话、并且把字幕投射到镜片上的眼镜，这个产品叫 AI 眼镜。你们的研发部门必须做很多工作，比如在眼镜足够轻和功能足够强大之间寻找平衡，还要考虑电池续航时间等因素；但是你们之所以做这个眼镜，是因为当前技术条件允许，而不是因为市场真的很需要 AI 翻译眼镜。市场能有多大？不知道。用户天天戴会不会不习惯？还有没有别的应用场景？也不知道。先做出来再说。**你做的你能做的事，而不是你该做的事。** 你多逛一逛就会发现各种健康应用、可穿戴设备、AI 伴侣、情绪灯、会议总结笔、睡眠监控贴、带相机的无人机等都属于华强北创新。他们很多会遭遇失败，有时候你都会怀疑他们到底是在解决痛点，还是给人类生活强行增加一个痛点。但是其中有一些会成功，而且华强北创新并不需要太多成本——做成一个产品哪怕只卖出 2 万台，你也能收回投资甚至小有盈余，然后看看技术变化再做一个新的呗，也许碰到哪一个就做大了。

**憋大招是乔布斯的特权。世间大多数创新不是先有伟大愿景，而是先有一堆零件；不是从"我知道未来"开始，而是从"我手里有这些东西"开始——这就叫效果推理。**

效果推理这个理论是弗吉尼亚大学达顿商学院的萨拉斯·萨拉斯瓦蒂教授在 2001 年提出的。我们最好把效果推理和它的反义词**因果推理**放在一起理解。因果推理是目标已知、我来选择手段达成那个目标：比如我要做一道宫保鸡丁，那我就列菜谱、买鸡肉花生辣椒葱姜蒜，然后按步骤做。效果推理却是手段已知、创造目标：你本来不知道要做什么菜，你打开冰箱看见两个鸡蛋、半根胡萝卜、一点剩米饭、几片火腿，于是你决定做个蛋炒饭。萨拉斯瓦蒂在她那篇原始论文里就用了这个厨房比喻。

其实我们想想，咱们平时在家里做饭似乎就是以效果推理居多，只有逢年过节才郑重地使用因果推理。然而**我们在工作场景中的思维却都是因果推理的，殊不知那未必是做事的常态**。做大项目的确得用因果推理——造桥修地铁、办奥运会、量产手机，你不可能说"我打开冰箱看看"。但如果目标还不确定、市场还不存在、客户也说不清自己要什么的时候，你要等因果推理就只能无限期延行动。现实中很多公司的做法是强行制造一种因果的幻觉：弄一份 80 页的商业计划书，预测未来五年的收入曲线、市场占有率和毛利率——Excel 里一大堆数字其实跟算命没啥区别。

萨拉斯瓦蒂跟合作者做过一个很有名的实验：找一群连续创业成功的专家级创业者，再找一群 MBA 学生（创业新手），让他们面对同一个虚构的、极度不确定的商业场景，观察他们的决策过程。实验发现 MBA 学生明显倾向于使用因果推理：调研、预测、制定最优策略。而那些身经百战的专家们却是大多在用效果推理——**专家们没有预测未来，而是直接上手**：他们问"我现在能联系到谁""我能承受的最大损失是多少""谁愿意跟我一起干、他能带进来什么资源"。还有一个可能有点反直觉的研究结果是：对于企业内部研发项目来说，越是创新度高的项目，效果推理和项目绩效越是正相关；而如果是创新程度比较低、问题更明确的项目，因果推理就更有利。我们可以把效果推理和因果推理理解成搭档关系：**在产品研发前期目标模糊、市场未形成的时候效果推理更好；一旦目标清晰、市场稳定、资源到位，那就要切换到因果推理。探索用效果推理，利用用因果推理。** 创业早期依靠华强北，但如果你搞出了大名，那就得明确目标迅速上杠杆；再有钱了，才可以像苹果那样憋大招。

效果推理具体怎么操作呢？萨拉斯瓦蒂总结了五个原则，可以作为一套行动心法。

**第一个原则叫手中之鸟**，也就是从自己手里拥有什么出发。因果推理要问想达到什么目标，效果推理则要先问自己三个问题：**我是谁？我会什么？我认识谁？** 我是谁就是你的性格、偏好、经验、价值观——你喜欢跟人打交道还是更愿意独自钻研？你能忍受慢反馈还是必须快速看到结果？很多人创业失败不是能力不够，而是项目人格和本人性格冲突——你不能指望一个讨厌销售的人去做重销售的业务。我会什么包括你的专业技能和默会知识——你是写过代码做过运营，还是懂供应链做过销售，又或者有三年拍短视频经验，这些都算。我认识谁是你的朋友、同事、客户和社群关系——但光认识不行，得看他们愿不愿意投入一点时间、金钱、见识和信用。**一鸟在手，胜过十鸟在林。**

**第二个原则叫可承受损失**。因果推理问回报，但效果推理问损失：你连那个市场是否存在都不知道，你根本谈不上考虑能赚几个亿。你必须先考虑的是如果这个项目失败了，你能不能承受。如果你的损失也就是几个周末的业余时间和一笔小钱，最多再丢一点面子，你应该立即行动。

**第三个原则叫疯狂拼布**。因果推理喜欢分析对手，效果推理必须先找伙伴。你应该带着一个粗糙想法尽快去找人谈，比如说"我这事业还没谱，但你要是愿意提供场地，将来收入分你多少多少"。看看谁愿意给出真实承诺：我愿意试用、我愿意帮你介绍客户、我愿意付一个定金、我愿意把我的渠道开放一点给你等。这就好像把布拼起来做被子一样：你手里有一块蓝布，他手里有一块红布，大家拼在一起，结果拼出了一个谁都没没想到的图案。可能你还没找到市场，但是有了这些承诺，你就大概能相信你的方向是对的。

**第四个原则叫柠檬水**。出自美国谚语"生活给你柠檬，你就把它做成柠檬水"，意思是别怕意外。因果推理怕意外打乱计划，但是效果推理需要拥抱意外——意外可能是新的入场券：用户拒绝购买你产品，但他们特别喜欢其中一个小功能，于是你意识到原来真正有用的是这个功能；你做科技节目，可是你的听众对你说的科技不感兴趣，却总爱追问你讲到的那些普通人的故事——那是不是说你的定位不该是科技评论，而是人生叙事呢？

**第五个原则叫驾驶舱里的飞行员**。因果推理强调预测，希望有固定航线和准确的导航仪；效果推理相信临场控制。你坐在飞机的驾驶舱里，你不能控制天气，但你能控制航向、燃油、速度、沟通和降方案——也就是说**你的行动才是决定命运的最关键变量**。

我看这五个原则连起来正好是一个创业版 OODA 环：用手中之鸟观察资源，用柠檬水原则解释意外并重新定向，用可承受损失原则决定小赌注，用疯狂拼布原则发动外部承诺，同时用飞行员原则把整个循环锁定在"我能控制什么"上。每赚一圈，你的资源池就扩大一点、你的目标就清晰一点、你对业务的掌控也增加一点。

效果推理的一个著名案例是美国自助搬家拖车公司 U-Haul 的建立。1945 年，二战退伍兵萨姆·肖恩和妻子打算带着全部家当从洛杉矶搬家到俄勒冈州的波特兰，他们发现市面上几乎租不到可以单程异地归还的拖车。可是当时美国人口流动增加，有很多家庭都在跨州迁移，按说这个服务应该有市场啊。肖恩就想自己开一家这样的公司。如果是按照因果推理的逻辑，肖恩得先做市场调研、写一份详细的商业计划书、筹资、招管理团队、买车队、铺全国网点和建立调度系统——但是他才 29 岁，哪有条件搞这些。但是肖恩输得起：为了创业，肖恩跟妻子一度搬到妻子家人的牧场，把开支压到最低，就算失败也是肖恩的可承受损失。肖恩有 5000 美元的积蓄和一间亲戚家的车库，他还有自己动手改装拖车的能力、有一点生活经验、还有一堆愿意帮忙的亲友——这就是肖恩的"手中之鸟"。肖恩遭遇的第一个柠檬是租不到拖车，第二个柠檬是买来的拖车质量很差——但他是会修车的：他一边修车，一边用二手汽车底盘改装成拖车，然后把车漆成醒目的橙色印上 U-Haul 标识——这就是他的柠檬水。肖恩没有自建门店，而是找各地加油站合作：加油站提供场地和管理服务，U-Haul 分享租金收入。更妙的是他还让租客成为网络扩张者：你把拖车开到目的地，如果能说服当地加油站加盟就获得折扣——这正是疯狂拼布：亲友、客户、加油站、服务商，每个人贡献一小块布，最后拼成了一床大被子。U-Haul 是 1945 年夏天在洛杉矶启动的，到 1945 年底已经有 30 辆拖车，分布在波特兰、温哥华和西雅图的服务站；到 1949 年底，U-Haul 已经能在美国大部分地区实现城市到城市的单程租赁。小恩没有对全国市场先做一番规划，但是他能一点一点往外铺——每多一个客户，目的地就多一个节点，这就是飞行员原则。

就算你不创业，效果推理也有用。比如公司让你负责一个新业务，而你完全没有头绪，那么你可以这样做：找出公司里可能对这事业感兴趣的三个人，这是手中之鸟；约他们出来喝咖啡，你付出的只是一点时间和咖啡钱，这是可承受损失；听听他们有什么资源能加进来，这是疯狂拼布——可能你原本觉得没谱的事，三言两语就聊成了。

**效果推理是一种把拥有变成资源、把关系变成承诺、把意外变成方向的能力。它本质上是一种反脆弱战略：你通过这个结构能从与世界的互动获得信息、找到新方向。效果推理不说"相信自己"，而说"盘点自己"；不说"梦想要大"，而说"损失要小"；不说"坚持到底"，而说"先做一小步，让现实告诉你下一步"。** 效果推理是华强北宇宙的第一性原理。
`,_1=`# 064丨沃德利地图：独一无二的自己做，能外包的尽量外包

## 讲什么

**沃德利地图**（Wardley Map）——商业和个人战略的作战地图。出自英国企业家西蒙·沃德利（Simon Wardley），2005 年左右担任公司 CEO 时发明。核心一句话：**值得独一无二的自己做，可以平庸无奇的外包给世界。** 这是一个直角坐标系：纵轴是价值链可见度（越往上离用户越近、用户越能直接感知），横轴是演化（从创生→定制→产品→商品四个阶段，一切都在自动往右走）。

## 解决什么真问题

治疗"伪勤奋"：一家教育机构花一个月自研登录系统、一家制造企业投入巨资自建云平台、一个人做自媒体每天花三小时折腾笔记模板——这些都号称要掌控核心技术，却不顾市面上早有便宜 100 倍、好用 1 万倍的现成服务。**好钢应该用在刀刃上，可你不知道刀刃在哪里。** 沃德利地图逼你承认：很多所谓的"我们这块业务特殊"，其实就是"我们的低效很有历史"。

## 核心论点

- **万物皆演化**：任何技术、最佳实践或商业模式，刚出来时哪怕再厉害、再是你的独门武功，最终都会不可逆转地走向商品化，成为大众能轻易得到的东西。**今天的神通是明天的工具，今天的经济租是后天的基础设施。**
- 横轴四阶段：①**创生**（非常新颖、没人懂、风险大，可能代表未来也可能是科研幻觉）；②**定制**（为特定需求手工打造，已有价值）；③**产品/租赁**（功能已被定义、市场可直接购买或租用）；④**商品/公共设施**（像水电网一样完全标准化且特别便宜）。
- 纵轴问的不是重要性，而是**离用户有多近**。
- 两个战略动作：**下注**（重兵投入左上中区域：创生和定制阶段、离用户近、没有行业共识、模糊地带——这是建立优势的圆权）和**制定产品化与迁移路线**（把今天的核心竞争力变成明天的基础设施：从一次性项目中提炼可复制的产品，沉淀母板、特征库和 SOP）。
- 典型误区：把控制感当成竞争力（"我们有自己系统"很安全但不产生利润，很多自研不是为了赢而是缓解焦虑）；把技术难度等同于战略价值；更深层的心理机制是**用右侧的伪努力逃避左侧的真困难**——写出有洞见的文章很难，但折腾 AI 做流程配置、部署服务器既高级又充满"我在取得进展"的充实感。

## 关键例证 / 金句

- **校园咖啡店**：学生要的不是体验你自主研发的点单系统，而是好喝、便宜、能社交、考试周能续命。支付点单、会员系统、水电网络全部靠右直接买；考试周深夜套餐、社团联名杯套、安静座位分区、老板记住学生名字——这些更靠近用户也更有定制空间，才是战略重点区。
- **英国政府数字服务局 2011 年**：政府多个大型 IT 项目惨败、预算严重超支。他们强制各部门画沃德利地图，结果 80% 的部门竟无法准确定义他们服务的最终用户；服务器、支付网关这些本该高度标准化的商品组件被各部门当独特定制业务重复建设了多达 118 次。数字服务局终止所有底层基础设施的内部定制、全部转向市场化采购，一下为英国公共财政避免了数十亿英镑的浪费。
- **预测性维护创业公司**：用户是工厂老板和生产经理，他们要的不是"上 AI"，而是减少非计划停机、保证按期交付、降低维修浪费。云计算、时序数据库、传感器、通用大模型 API 都应从外面购买；真正值得做的是中区域的故障解释与维护建议、故障知识图谱、风险评分。**模型可以外包，责任不能外包；算力可以租，行业判断不能租。**
- 沃德利把地图和孙子兵法、OODA 环联系：地图解决"天"（气候：一切都在向右演化）和"地"（地形：每个业务模块处在价值链什么位置、什么演化阶段），孙子兵法"道"是目的价值观、"将"是领导力、"法"是组织原则。**你的努力必须有地形感。**

## 如何应用

1. **企业/个人战略**：画出你的价值链条——明确最终用户和核心需求，一层层往下拆，把每个功能模块放进坐标系。右下角坚决外包/采购/AI 代劳（云服务要稳定不要感人、支付接口要可靠不要浪漫）；左上中的创生/定制区才是下注的地方（对用户的理解、行业默会知识、关键数据、评测体系、业务解释能力和品牌信任）。
2. **个人发展**：别再说"三年内成为 AI 专家"这种等于没说的话——先问用户是谁（求职→雇主；创业→客户；研究→学术共同体；做内容→读者），用户不同地图完全不同。Python、提示词模板、AI 工具都已产品化甚至商品化，位于右侧，你当然也得会用，但这不是你该下注的核心点；要看更难标准化的东西——**对特定垂直行业的深度业务理解、把复杂数据转化为商业决策的叙事能力、真实项目的评测洞察**。你要成为能在一个真实场景中定义问题、组织数据、评估结果和闭环改进的人。
3. **识别伪勤奋**：开餐馆自建发电站、作家折腾个人网站、公司养一个臃肿的自研团队弄出一套又贵又不好用的系统——停下来想想你是不是在用右侧的努力逃避左侧的真困难。
4. **卡位意识**：早期为每个客户手工定制方案，做多了就向右推进、沉淀母板和 SOP——战略高手会从一次性的项目中提炼出可复制的产品。

---

## 全文（清洗后的课程转录，重点加粗+底纹）

欢迎来到现代思维工具课，我是万维钢。我们讲过要想在现代商业社会中立足，你得有自己的阿尔法优势；我们还知道战略定位和运营效益是两回事——战略是当你决定自己做什么的同时，你也在决定自己绝对不做什么。你应该把心血倾注在那些能彰显你独特性的事物上，而把那些标准化的和能外包的东西统统甩给别人。你不能让公司最宝贵的人才去做最平庸的事。道理很明白，但你可能很难想象：**真实世界里有企业根本不知道哪些该外包、哪些该自研。** 一家教育机构花一个月自研登录系统、一家制造企业投入巨资自建云平台，他们号称要掌控核心技术，却不顾市面上早有便宜 100 倍、好用 1 万倍的现成服务。一个人要做自媒体，每天花三小时折腾笔记模板——这些都是没有战略精神的伪勤奋。好钢应该用在刀刃上，可你知道刀刃在哪里吗？

这一讲的思维工具叫**沃德利地图**，它把商业和个人战略归纳成一句话：**值得独一无二的自己做，可以平庸无奇的外包给世界。**

沃德利地图不是出身于学术界，而是来自商业一线。大约在 2005 年，担任公司 CEO 的英国人西蒙·沃德利看不惯高管们的报告里充斥着陈词滥调、大家只是在盲目复制竞争对手的动作，发明了这个工具。沃德利的洞见是：企业家的战略意识之所以不到位，是因为他们缺少地图。军事指挥官有地图，能俯瞰战场全貌、知道所有的地形特征；那你作为企业高管也得知道公司每一块业务处在什么位置上，整个气候有一个什么样的大趋势才行。

沃德利地图的核心假设叫**万物皆演化**：根据创新扩散理论和市场竞争规律，任何一种技术、一个最佳实践或者商业模式，刚出来的时候哪怕再厉害、再是你的独门武功，最终都会不可逆转地走向商品化，成为大众能轻易得到的东西。所以我们要想赚取超额利润，就必须把精力放在那些处于创生期、目前还是独一无二的事物上。这个地图就是要既体现为客户服务的目标，又体现演化趋势。

这是一个直角坐标系。**纵坐标代表价值链可见度**：地图的最顶端是最终用户和他们的核心需求，这是整张地图的锚点——越往上用户越能直接感知，越往下越是隐藏在幕后的支撑性设施。**横坐标则是演化**，从左到右分为四个不可逆的阶段：第一个阶段**创生**，意思是这个东西非常新颖，可能都没有人懂，风险很大，可能代表未来但也可能是科研幻觉；第二个阶段**定制**，这个东西是为了特定需求手工打造的，它已经有价值了；第三个阶段**产品/租赁**，这个东西的功能已经被人定义过了，市场上可以直接购买或者租用，相当于设计好的服装；第四个阶段**商品/公共设施**，这个东西就像水电网一样完全标准化而且特别便宜，相当于论斤卖的面料。简单说：**纵轴问的不是这个功能模块的重要程度，而是离用户有多近、用户能不能直接感知到它的存在；横轴问的是他在市场上成熟到了什么程度。** 沃德利提醒我们：**地图上的一切都在自动往右走——今天的神通是明天的工具，今天的经济租是后天的水电煤。**

来个具体例子。想象你在大学校园里开了一家咖啡店。如果不画地图，你可能会觉得我们要数字化，冲动之下就要自研一套点单小程序——可能是你赚钱的优势吗？咱们看看沃德利地图怎么画。先明确你的用户是学生，学生要的不是体验你自主研发的点单系统，而是好喝、便宜、能社交，最好在考试周能续命。先往下沿着纵轴拆价值链：学生需要学习空间、出餐速度、饮品质量和价格友好，这些依赖的是菜单设计、店员流程、座位安排、社团合作、考试周深夜供应、供应链、咖啡机、支付系统、会员系统、水电和网络等。这些模块之间彼此又有依赖关系。现在放到横轴上看：支付点单、会员系统、水电和网络都是能便宜买到的基础设施，全部靠右应该直接买、别费心思；咖啡机和常规耗材大概是产品化的，得小心挑选；考试周深夜套餐、社团联名杯套、安静座位分区、校园文化梗、老板能不能记住学生的名字——这些更靠近用户，也更有定制空间，他们位于途中区域，这才是你的战略重点区域。单是画这张图的过程就已经帮你想清楚很多事了。

可能你大学学的是计算机科学，所以你开咖啡店就想自己编写一个会员系统，觉得终于能大显身手。殊不知从这门业务的角度看，**你那个编程技能根本不值钱。** 不管你擅长什么，你大可用效果推理寻找适合自己的业务，但如果你要开校园咖啡店，就得按校园咖啡店的逻辑走——校园咖啡店的逻辑是：学生不会因为你的数据库架构性感而买单，但他们会记住你在期末凌晨两点开门。

在大公司里，很多部门拼死捍卫的所谓核心竞争力，在地图上其实早就沦为了最右侧的通用大路货。你们公司的研发部门可能会强烈要求坚持用自己做的客户关系管理系统，说那对你们的业务特别重要、是你们的护城河——可是市场上明已经有十个供应商做得又好又便宜。**沃德利地图逼你承认：很多所谓的"我们这一块业务特殊"，其实就是"我们的低效很有历史"。**

面对一张画好的地图，你可以做两个战略动作。**第一是下注**：很明显你应该重兵投入的是途中区域——这里的模块处于创生和定制阶段，而且距离顶端的用户比较近，这里有相当的模糊、没有行业共识，是你建立优势的圆权。而右下角则是应该坚决外包、采买或者用 AI 代劳的地方——这里往往是最底层的基础设施，有标准的工具和现成的服务：云服务要稳定不必感人，支付接口要可靠不要浪漫，报销系统要便宜别加戏，合规要清楚别整成时尚。真正值得你亲手打磨的是靠左侧的东西——对用户的理解、行业默会知识、关键数据、评测体系、业务解释能力和品牌信任等。**如果你们公司所谓的"用 AI"就是在右下角降本增效，我不认为 AI 是你们的战略工具。**

**第二是制定产品化与迁移路线。** 地图上的一切都在往右移动：创生会变成定制，定制会变成通用产品，产品会变成廉价商品。所以我们必须有一个把今天的核心竞争力变成明天的基础设施的意识和规划。早期你可能在左侧为每个客户手工定制解决方案，但做多了你就可以把它向右侧推进、沉淀出母板、特征库和 SOP。**战略高手会从一次性的项目中提炼出可复制的产品。**

咱们再看两个例子。**第一个例子是真实的，我想让你看看沃德利地图这把刀有多快。** 2011 年英国政府的多个大型 IT 项目惨遭失败，不但不能满足现代数字化服务的需求，而且预算严重超支。在这个背景下，新成立的政府数字服务局被要求整顿这些项目，他们想出的办法就是强制各个部门画沃德利地图：你们这个项目的最终用户是谁？用户的核心需求是什么？结果**80% 的部门竟然无法准确定义他们服务的最终用户**。等到数字服务局终于汇总各个项目的信息画出整个地图，他们发现诸如服务器托管和支付网关这些本该是高度标准化的商品组件，都被各个部门当做独特的定制业务，重复建设了多达 118 次。数字服务局手起刀落终止了所有底层基础设施的内部定制，全部转向大规模市场化采购，一下子为英国公共财政避免了数十亿英镑的浪费。

**第二个例子是虚构的，我想让你看一张稍微复杂一点的沃德利地图长什么样。** 想象你开了一家创业公司，专门给中小制造业企业做预测性维护服务——简单说就是详细监测机器的运行状态，在它出毛病之前通过 AI 预测到机器什么时候需要维护、及时提出维护建议。咱们来拆解一下这个价值链该怎么画。第一层，你的用户是工厂老板和生产经理，他们想要的不是"上 AI"，而是让机器别突然趴窝，用更专业的说法就是减少非计划停机、保证按期交付、降低维修浪费。为此你们需要给人提供一个停机风险提示看板的服务。第二层，上一层那个服务依赖故障解释、风险评分和工单流程集成这三个模块。第三层，上面的风险评分模块又依赖故障知识图谱、设备状态数据管道和历史维修记录这三个模块。第四层则是传感器、网关、时序数据库、云计算、网络、电力等等。我们把每个模块在沃德利地图的相关坐标点上标好、把各层模块之间的依赖关系用线段连起来，就得到了文稿里的这张图。有了地图思路很清楚：右边的云计算、时序数据库、传感器和通用大模型 API 都应该从外面购买；真正值得自己做的是中区域的故障解释与维护建议、故障知识图谱、风险评分等等。你还可以从图中看出"设备状态数据管道"这个模块虽然现在在定制区，但是已经非常接近产品区了，这说明你们未来可以把它打包成一个通用的产品。**你们宣称自己是一家 AI 公司，但这个业务的核心并不是 AI，而是 AI 加设备知识加生产责任。正所谓模型可以外包，责任不能外包；算力可以租，行业判断不能租。人人都会用 AI，但是得这样用才能用 AI 赚钱。**

个人发展也可以用沃德利地图，核心精神就是**用户意识加左右意识**。比如你说想三年内成为 AI 专家，用沃德利地图的精神看，你这句话就等于没说——什么叫 AI 专家？你连用户是谁都不知道。真正的专家必须是能在具体现场交付结果的人：如果你求职，用户是未来雇主；如果你创业，用户是客户；如果你做研究，用户是学术共同体；如果你做内容，用户是读者。用户不同，地图完全不同。确定用户和用户的需求，一层一层往下拆，再看地图的横轴：常见的技能像 Python 语言、提示词模板、AI 工具都已经产品化甚至商品化，位于右侧——当然你也得会用，但这些不是你该下注的核心点。**你必须往左看，看看更难标准化的东西**：对特定垂直行业的深度业务理解、把复杂数据转化为商业决策的叙事能力、真实项目的评测洞察等。你不是要成为会用 100 个 AI 工具的人，你要成为能在一个真实场景中定义问题、组织数据、评估结果和闭环改进的人。

沃德利地图的道理似乎很简单，可是现实中人们就是很喜欢把该外包的东西自建：有的企业非得把基础设施掌控在自己手里，用一个极为臃肿的自研团队弄出一套极为笨重的系统，又贵又不好用——这就如同开餐馆的自建发电站、作家花时间折腾个人网站一样。他们到底图啥呢？首先是**错把控制感当成了竞争力**："我们有自己系统"听起来很有安全感，可是不产生任何利润——很多自研不是为了赢，而是为了缓解焦虑。其次是**错把技术难度等同于战略价值**：自己写一套支付网关听着很厉害、也确实需要专业人才，但这可不代表他对你的核心业务有战略价值。也许一个更深层的心理机制是：**人们在用右侧的伪努力逃避左侧的真困难。** 写出一篇有洞见的文章很难，解决客户的真实需求很难，但是折腾一套 AI 流程和配置服务器环境这些活，既高级又充满"我在取得进展"的充实感。如果市面上已经有现成的，你就不应该自己做；你应该专门做别人没做过、甚至不会做的东西——这其实是一个特别高的要求。

有意思的是沃德利把他这套方法和孙子兵法和 OODA 环联系在了一起，我一听也挺有道理。孙子兵法《始计篇》说："故经之以五事，校之以计而索其情：一曰道，二曰天，三曰地，四曰将，五曰法。"沃德利认为：道是公司的 purpose 也就是目的和价值观，将是领导力，法是组织原则；而他这个地图则解决了天和地的问题——**地就是地形图**：你的每一个业务模块处在价值链的什么位置、处于什么演化阶段；**天就是气候**：所有东西都在向右演化。沃德利用 OODA 环把孙子兵法的五事串了起来，形成了一个动态的战略循环，你可以对着上面这张图自己参想参想。总而言之：**你的努力必须有地形感。**
`,N1=`# 065丨鲍莫尔成本病：物便宜则人贵

## 讲什么

**鲍莫尔成本病**（Baumol's cost disease）——美国经济学家威廉·鲍莫尔和威廉·鲍恩 1965 年提出的经济规律：**任何经历经济增长走向富裕的社会，都必然是物越来越便宜、人越来越贵。** 经济被分成两个部门：进步部门（制造、软件、物流——生产率提高、单位成本下降、工资上涨）和停滞部门（艺术、医疗、教育、理发——生产率很难提高，但又必须跟全社会一起涨工资），结果停滞部门的相对成本注定不可遏制地上涨。

## 解决什么真问题

解释"为什么中国越来越方便、美国服务贵得离谱"的体感差异：你的生活方便不方便，不只取决于你的绝对收入高不高，还取决于**别人的时间便宜不便宜**。美国服务贵是注定的，而且中国也在往那个方向走。这也不是谁更勤劳的问题，更不是公平问题。

## 核心论点

- **贝多芬四重奏悖论**：贝多芬第 14 号弦乐四重奏 1828 年首演需要四名专业乐手演奏 40 分钟，200 年后依然是四个人演 40 分钟——无法机械化，只有这么演才能给观众真正的现场音乐体验。但外面的世界生产率飞速增长、工资上涨，为了留住四位音乐家，只能被动给他们涨工资。
- 鲍莫尔成本病不是病，**它只是社会必然经历的阶段**：鲍莫尔晚年特别强调，正是因为社会整体变得极其富裕，人们才负担得起日益昂贵的服务。现代化并没有消灭稀缺，只是把稀缺从物转移到了人。
- **服务消费观念**：人们越来越倾向"修不如买"（衣服破了找裁缝补、电气坏了请师傅修，现在很多坏东西直接换新的——这不是浪费是省钱）；医疗和教育变成预算黑洞（美国 2024 年医疗支出约 5.3 万亿美元占 GDP 的 18%；中国 2024 年卫生总费用 9.09 万亿元占 GDP 6.7% 但增速很快）；社会劳动力和支出越来越流向停滞部门，整个经济看起来越来越长不动。
- 收入差距大的地方餐馆越好吃、服务越周到（有人愿意费那么大功夫给你精雕细琢一道菜）；普遍富裕的地方谁都不愿意出来费功夫给别人做菜，餐馆容易走向标准化甚至预制化。
- 高成本 ≠ 高利润：医疗贵医生可没暴富、教育贵没人靠当教授发家、养老贵也没见人抢着去做护工——鲍莫尔成本病只保证停滞部门收入稳定、永远都不会太差，这是防守优势，不是进攻武器。

## 关键例证 / 金句

- 马克·佩里的"世纪图表"（2000–2025 美国各类消费价格变化）：电视机按质量折算价格降了 98%，软件玩具手机费大幅下降，衣服几乎没涨，新车涨 24.7% 远低于接近 90% 的整体通胀；而医院服务涨了 271%、大学学费涨了 194%、大学教材涨了 180%、儿童看护涨了 152%。
- 外卖员视角：中国外卖员送一单收入约 5–7 元人民币，新款高配手机 7000 元，要跑 1000 单；美国外卖员送一单配送费加小费约 7–10 美元，手机 1000 美元，只要跑 100 多单。
- 王安石、司马光、苏轼这些士大夫都有驴的骑驴、有马的骑马，坚决不乘轿子，不让人抬——哪怕山中路太险别人劝他们坐轿也不坐。唐宋官场规矩就是除非你德高望重百官出入才乘马。用王安石的话说"未常以人代畜"。到清朝轿子才成了官场主要交通工具。**他们会说鲍莫尔成本病是个好事——人应该贵。**
- 富人穷人的痛苦结构不一样：以前人很便宜物很贵，穷人买不起好衣服但能轻易找人跑腿；现在物便宜人贵，穷人买得起高清大电视、智能手机，但负担不起好医生、好学校、好律师和好照护。

## 如何应用

1. **AI 不能治好鲍莫尔成本病，但能重新定义它**：服务中相当一部分本质是提供信息、是可复制的（炒菜流程、合同出稿、客服问答、医疗诊断甚至手术操作），机器可以做得很好甚至更好；但有些服务就是要人在场——AI 的诊断书很完美，但谁来帮患者权衡利弊、让患者别害怕、签承担误诊风险的文书？**一个护工照顾一个老人是关怀，一个护工借助机器人照顾 100 个老人叫饲养。** AI 的作用是把人从可复制可压缩可自动化的事物中解放出来，去从事责任、信任、判断、陪伴、审美和伦理权衡这些真正的服务。
2. **赚钱心法**：①把判断和执行分开，与虚拟成分联系、调动杠杆让你的技能可复制（设计师别只卖设计小时，要让设计进入量产；老师别只讲一节课，要把课程、题库、训练体系、反馈机制产品化；医生别只做手术，要让诊疗流程、随诊系统和患者教育形成组织能力）；②做认证和责任背书（让 AI 生成答案，你看一眼、签字盖章、承担责任，你的承诺价值千金）；③做服务共需平台（把辅助性动作标准化自动化，提高效率就有理由从中赚钱）；④坚持一对一就走奢侈品路线（卖的不再是技能和时间，而是身份、信任和超行业水平的效果——服务水平只比 AI 高 20%，但有人愿意多出 200% 的价格）；⑤寻租（美国考医生考律师那么难，就是为了限制从业者人数维持收租水位——这是比鲍莫尔成本病更高的水位，属于坏租）。

---

## 全文（清洗后的课程转录，重点加粗+底纹）

欢迎来到现代思维工具课，我是万维钢。长期在国外生活的中国人回到中国都会有一个由衷的感慨：**中国实在太方便了**——点外卖、叫跑腿、修水管，手机上一按，半小时之内世界为你运转，而且花不了多少钱。美国中产阶级并不经常点外卖，更常见的做法是打电话到店里订餐然后自己开车去取——不是热爱劳动，实在是配送费太贵了。像理发和修水管这样的服务，价格更是中国的几倍甚至十几倍。你在美国年收入 20 万美元，要论生活的便利程度大概比不上在中国年收入 20 万人民币。那你说是不是人民币被大大低估、美元被大大高估了呢？现在到底谁是发达国家？

先别听某些人瞎喊冤，我们换一个视角再算。如果你不是点外卖的消费者，而是外卖员呢？在中国一个外卖员送一单的收入大约是 5 到 7 块人民币，而一部新款高配手机是 7000 块钱——也就是说他大概要跑 1000 单才能买一部好手机。在美国外卖员送一单的配送费加小费大概是 7 到 10 美元，手机 1000 美元——他只要跑 100 多单就够了。这当然只是局面的一角，但是如果你的任务是送外卖攒钱买手机，在美国干着行显然要容易的多。**这个道理是：你的生活方便不方便，不只取决于你的绝对收入高不高，还取决于别人的时间便宜不便宜。** 这不是文化问题、不是制度问题、也不是人口问题，更不是谁更勤劳的问题，甚至不是公平问题。**美国服务贵是注定的，而且中国也在往那个方向走。任何经历经济增长走向富裕的社会，都必然是物越来越便宜、人越来越贵**——以至于你的体感是：怎么周围的人越富、我越不方便呢？

咱们先看美国各类消费价格的宿命。美国经济学家马克·佩里做过一张很有名的图（后来年年更新，被称为世纪图表，我放到文稿里了），追踪了 2000 年到 2025 年美国各类消费品和服务的名义价格变化。你一眼看上去，就如同现代文明被劈成了两半：一方面是东西越来越便宜——电视机考虑到像素提高、画质上升，按质量折算价格降了 98%，软件、玩具、手机费的价格也是大幅下降，衣服几乎没怎么涨，新车价格涨了 24.7% 但这个涨幅大大低于接近 90% 的整体通货膨胀；另一方面却是服务越来越贵——医院服务涨了 271%、大学学费涨了 194%、大学教材涨了 180%、儿童看护涨了 152%。一方面物质极大丰富，一方面很多项目上的负担越来越重。其实这并不矛盾，这是现代经济一条特别硬的规律，叫**鲍莫尔成本病**。

鲍莫尔成本病这个理论最早是美国经济学家威廉·鲍莫尔和威廉·鲍恩在 1965 年提出来的，他们最初的灵感来自表演艺术。咱们直接推演一个经典例子：**贝多芬第 14 号弦乐四重奏**。这首曲子 1828 年首次演出的时候，需要四名专业乐手演奏 40 分钟。时间快进到 200 年后的 2026 年，同样的曲目你依然需要四个人演 40 分钟——这你没法机械化，只有这么演才能给观众提供真正的现场音乐体验。可是与此同时，外面的世界经历了生产率的飞速增长：今天的一个工人借助机器、软件和全球供应链能生产远超过去数量的商品，他创造了这么多财富自然应该涨工资，对吧？生产率提高的好处就是工人的工资在上涨、产品的价格却在下降，大家都越来越用得起，没错吧？那么悖论出现了：请问那四位音乐家怎么办？他们的生产率没有任何提高，似乎不应该涨工资；可是如果不给人家涨工资他们就会转行，于是我们为了把他们留在剧院，就必须被动地给他们涨工资。医生、老师、保姆、园丁、水管工也都是如此。

鲍莫尔把现在的经济划分为两个部门：一个是**进步部门**，包括制造、软件和物流等——生产率在提高、产品单位成本在下降、工资在上涨；还有一个是**停滞部门**，包括艺术、医疗、教育和理发之类的服务业——生产率很难提高，但是又必须跟全社会一起涨工资。那么结果就是：停滞部门的相对成本（主要用于支付从业者工资）注定会不可遏制地上升。**你发现服务怎么变贵了？这就是鲍莫尔成本病。**

鲍莫尔成本病对社会的影响是巨大的。首先在消费观念上，人们越来越倾向于"修不如买"：几十年前衣服破了应该找裁缝补、电器坏了应该请师傅修，现在很多东西坏了却应该直接换新的——这不是浪费，是省钱。一辆车发生碰撞事故，直接换个新车门用不了多少钱——新车门是大工厂用规模化机器压出来的；可是如果让修车师傅给你手工修那个旧车门，可就太贵了。现实是受损稍微严重一点，保险公司就会干脆给你一笔钱，让你再买一辆、把旧车报废。再者，医疗和教育变成了预算黑洞：几十年前看病和上学也不是免费的，可是在大多数人的记忆中那肯定不是像今天这样是中产阶级最沉重的焦虑来源。美国 2024 年医疗支出大约是 5.3 万亿美元，占 GDP 的 18%，对政府老百姓都是沉重负担。但你别以为中国看病就不贵——国家卫健委数据显示 2024 年中国卫生总费用是 9.09 万亿元，占 GDP 的 6.7%，但是增速很快。这里有行业保护和寻租的原因，也有效率低的原因，也有随着生活水平提高人们更加重视医疗和教育的原因——但最根本的原因还是鲍莫尔成本病。医生面诊病人的时间、老师批改论文的心血，你无法用机器提效 100 倍。今天的医院能治过去治不了的病、今天的老师素质也比以前高，但从看病和教学需要花费真人时间这一点上来说，这两个部门属于停滞部门。综合起来，因为停滞部门显得越来越贵、占预算的份额越来越大，社会劳动力和支出就会越来越流向这些部门，这就使得整个经济看起来越来越长不动、像是得了病。当中国人在制造业、在专精特新领域集中投入的时候，美国人却把越来越多的钱交给了医生、律师、大学和公共服务——你站在旁边看心想美国是不是病得不轻？可能是，但这是富裕社会的宿命。

咱们必须澄清一个误会：我们说鲍莫尔成本病让医疗和教育越来越贵，并不是说社会整体上已经买不起这些服务、或者说社会变穷了。恰恰相反，**鲍莫尔晚年特别强调：正是因为社会整体变得极其富裕，人们才负担得起日益昂贵的服务。** 这就好比一个家庭：以前月入 1 万，花 1000 块钱投入教育占 10%；现在因为月入 3 万了，买家用电器和日用品都绰绰有余，于是愿意花更多钱在教育上——每月花 6000 块给孩子上课占 20%。教育的占比确实变大了、绝对价格也变贵了，但你的生活还是比过去富裕。现实是：**今天穷人的痛苦不但不比过去多，而且比过去少，只是痛苦的结构不一样。** 以前人很便宜物很贵，穷人可能买不起一件好衣服，但他能轻易找个人帮他跑腿；而在富裕的现代社会里物很便宜人变贵了，现在的穷人能买到高清大电视、智能手机、看起来相当不错的衣服和超市食材，但是负担不起好医生、好学校、好律师和好照护。

这样说来，鲍莫尔成本病也许不应该被称为一种病，它只是社会必然经历的阶段而已。**现代化并没有消灭稀缺，只是把稀缺从物转移到了人。** 在这个意义上，你的富有感在相当程度上取决于能调用多少别人的服务时间。一个有意思的规律是：收入差距大的地方，餐馆越好吃、服务越周到——人家在背后付出了那么多功夫给你精雕细琢了一道菜，你随便吃两口就完事了，这个体验你说应该值多少钱？人家费那么大周章把荔枝运到长安，你看一眼就放下了。反过来，普遍富裕的地方谁都不愿意出来费那么多功夫给别人做菜，餐馆就容易走向标准化甚至预制化。发达国家通常的办法是把低端服务业交给外来移民去干。

但现在似乎有了一个新希望，那就是 AI。**AI 能治好鲍莫尔成本病吗？** 万维钢老师说有个说法叫"服务业的规模化"：物质之所以越来越便宜，是因为你可以上杠杆、可以把一次设计卖出无数次；而人之所以贵是因为人不可复制。那如果我们用机器人替代人来做这些服务，这不就实现了服务业的规模化、服务不就被打败了吗？在一定程度上确实如此。我们享受的服务中有相当一部分本质上就是提供信息、是可复制的：炒菜操作流程、合同出稿、客服问答、医疗诊断甚至手术操作，这些机器可以做得很好甚至比人更好。还有一些服务涉及到协调和管理（比如保险理赔，其中涉及到人的主观判断），也可以被机器大大加速。但有一些服务项目就是要人的在场：AI 的诊断书很完美，但是谁来帮患者权衡利弊？谁来让患者别害怕？谁来签承担误诊风险的文书？AI 可以不厌其烦地把一道题讲很多遍，但你需要一个人类老师告诉学生"你别装了，你就是没好好学"。**一个护工照顾一个老人和一个护工借助机器人照顾 100 个老人，前者是关怀，后者叫饲养。** 所以我不认为 AI 能替代所有的服务，他也不应该替代所有的服务。也许 AI 的作用是：**把人从那些可复制、可压缩、可自动化的事物之中解放出来，去从事责任、信任、判断、陪伴、审美和伦理权衡这些真正的服务。** 鲍莫尔成本病恰恰让真正的人类时间更贵。

怎么利用鲍莫尔成本病赚钱呢？首先请注意：鲍莫尔成本病说的是高成本，而**高成本可不等于高利润**——医疗贵医生可没暴富，教育贵可没有人靠当教授发家，养老贵也没见人抢着去做护工。鲍莫尔成本病说的是停滞部门的工资会被进步部门拉着走，可没说停滞部门有权要求超额利润。不过鲍莫尔成本病的确提供了一个**防守优势**：只要服务真有需求，你的收入是稳定的，永远都不会太差。这只是防守，但是有了这个防守基础，你的确可以做一些事情。

**最好的办法还是跟某种虚拟成分联系起来、调动杠杆、让你的技能可复制**：设计师不要只卖设计小时，要让设计进入量产；老师不要只讲一节课，要把课程、题库、训练体系、反馈机制产品化；医生不要只做手术，要让诊疗流程、随诊系统和患者教育形成组织能力。**把判断和执行分开就是你的杠杆。** 第二个办法是做**认证和责任背书**：无论是诊断、合同还是工程图纸，就让 AI 去生成答案吧，但是你看一眼、签字盖章、承担责任——只要你从中做出一些微决策、确保内容符合现场的需要、能配得上你的个人品牌，你这个承诺就价值千金。第三个办法是做**服务共需平台**：在没有 AI 的时代，人类大部分服务时间并不是在提供实质的服务，而是在填报表、记记录、支付这些事情上——平台可以减少这些后台摩擦，把这些辅助性的动作全部标准化、自动化，你提高了效率，你就有理由从中赚钱。第四个办法是：如果你坚持一对一，那就走**奢侈品路线**——你卖的不再是技能和时间，而是身份、信任和超行业水平的效果。私人医生、高端家教、顾问都是这个逻辑：也许你的服务水平只比 AI 高 20%，但是有人会愿意多出 200% 的价格。第五个办法也是发达国家服务行业这么多年来一直在使用的办法，那就是**寻租**：美国考医生考律师之所以那么难，既不是因为医生和律师就真的需要那么高的考试能力，也不是因为这两个行业不需要更多的人，而是为了限制从业者人数、维持收租水位——那是一个比鲍莫尔成本病所要求的更高的水位。当然这是坏租。

不管是美国还是中国，历史的大趋势是：农业从业人口比例随着工业化急剧下降，最终只需要 1%；工业从业人数随着自动化逐渐下降，最终也成为少数；而绝大多数就业者都在服务业。**正是因为鲍莫尔成本病，才使得这些人的工资水平跟上了时代的进步，他们得以分享现代化的红利。** 如果所谓的服务便利就是有人在低价出售自己的时间，我们不应该怀念那种便利。你知道吗？中国历史上曾经有过不愿让人当牛马的时代：宋人笔记记载，王安石、司马光、苏轼这些士大夫，有驴的骑驴、有马的骑马，坚决不乘坐轿子、不让人抬——哪怕是在山中路实在太险了，别人劝他们坐轿他们也不坐，他们宁可拄拐杖走。这可不是故作清高：唐宋官场规矩，就是除非你德高望重、百官出入才乘马。为啥？用王安石的话说，"未常以人代畜"。是南宋的时候江南多雨路滑，高宗才准许朝臣坐轿；大明朝原本是三品以上京官方可乘轿，后来限制逐渐放宽；到清朝轿子才成了从一品到七品官场的主要交通工具。王安石他们对此一定会说：**人不应该这么用，人应该贵。他们会说鲍莫尔成本病是个好事。**
`,R1=`# 067丨杰文斯悖论：AI 会增加人的工作岗位

## 讲什么

**杰文斯悖论**（Jevons paradox）：1865 年英国经济学家威廉·斯坦利·杰文斯在《煤炭问题》中提出——蒸汽机越省煤，动力就越便宜；动力越便宜，更多行业就会用它；更多行业用它，英国总用煤量反而会上升。**效率不是刹车，而是油门。** 万维钢的暴论：AI 不但不会减少、而且会大大增加人的就业岗位。

## 解决什么真问题

回应硅谷的"末日焦虑"：Anthropic 的 CEO 达里奥·阿莫迪像末日先知一样说 AI 将在一到五年内消灭一半的初级白领岗位、把失业率推到 10% 至 20%；有美国名校计算机专业的大学生毕业没找到工作、有人认为初级程序员岗位已经消失了。但经济学理论和过往历史经验并不支持"AI 导致大失业"这个末日假说。

## 核心论点

- **效率提高 = 行动门槛降低**：当你提高效率、降低了单位资源消耗的时候，你同时降低了行动的门槛。门槛一降，原本被抑制的、甚至你想象不到的需求就会像洪水一样释放出来。
- 把"提高效率"换成"自动化"、把"资源"换成"人的工作"，悖论就变成：**自动化会增加人的工作。**
- **AI 干掉的是任务，而不是岗位**：一个岗位不是单个动作，而是一组任务的组合。会计不是输入数字、医生不是看化验单、律师不是查法条、程序员不是敲代码——这些岗位都包含判断、审美、责任等不可被 AI 替代的任务，还可以包含各种因为 AI 而产生的新任务。劳动经济学里的任务模型：自动化有替代效应，但新技术也会创造新任务让劳动重新进入生产过程，这叫**复值效应**。
- 软件工程师岗位在 2025 年 5–6 月间已实现触底反弹（城堡证券 2026 年 2 月报告）——不是 AI 最先干掉编程吗？怎么软件工程师岗位反而最先反弹？这可能不是反常，而是杰文斯悖论的一次完美展示。

## 关键例证 / 金句

- 1865 年英国：蒸汽机效率提高好几倍、都更省煤了，人们设想煤炭总消耗量肯定会降下来——杰文斯判断蒸汽机越省煤动力越便宜，更多行业会用，英国总用煤量反而会上升。历史果然如此。
- 新疆天山滴灌技术（1996 年起推广）：亩用水省了不少，但农民一看既然亩用水少了为什么不多重一点？既然滴灌提高单产，能不能再种更赚钱的经济作物？结果 20 年间用水反弹超过 115%——总用水量是以前的两倍还多。
- 历史规律反复验证：19 世纪纺织机械出现时卢德分子担心织工失业去砸机器，结果布料价格暴跌、普通人从只有一套衣服变成有十几套、纺织工数量反而大大增加；1970 年代自动取款机普及，大家预测银行柜员将消失，结果因为运营成本降低银行在每个街角疯狂开设新分行，柜员总数不降反升，还被解放出来处理开户、理财咨询这些更有价值的工作；计算机视觉普及后有学者断言放射科医生要失业，结果因为 AI 让看片成本大幅下降，医院开出大量预防性核磁共振和 CT 检查，扫描量激增，AI 帮医生筛选了 90% 的正常片子，剩下 10% 疑难杂症和最终签字仍需人类——现在全球放射科医生严重短缺。
- 米画师平台（中国美术外包平台）：2022 年 10 月一次知名 AI 绘图模型事件让几乎免费的 AI 绘画降临大众手边，米画师上单张图像平均价格下降 64%，但订单数量增加了 121%，结果总收入增加了 56%。原有创作者没有被挤走，增长主要来自过去不值得做的低端个人订单。
- 世界经理论坛 2025 年就业报告：到 2030 年全球宏观趋势预计创造 1.7 亿个新岗位、替代 9200 万个旧岗位，等于净增加 7800 万个岗位。美国劳工统计局预测软件开发人员 2023–2033 年就业增长 17.9%。
- **人类社会的深刻洞见：人类社会不是爱节约的机器，更像一台欲望发动机——当技术把一个门槛降低，人类不会说"够了"，人类会说"那我们还想要这个、这个和那个"。**
- 黄仁勋在 2026 年 GTC 大会接受采访说：那些为了 AI 裁员的公司都缺乏想象力，真正有想象力的公司应该用 AI 扩张而不是收缩。万维钢完全同意：**AI 是对人的解放，而不是对人的限制，只有想象力是我们的限制。**

## 如何应用

顺应杰文斯悖论的历史大势：**不能站在旧任务那一边，而要站在新需求这一边。** 当新技术把门槛降下来之后，那些过去不会做、做不起和不值得做的任务就成了新的生意。畅想 AI 会创造的三类新岗位：

1. **直接与 AI 相关**：AI 工作流架构师（把销售客服数据法务财务流程改造成 AI 可执行可审计可追踪的系统）、智能体监督员（管理一群 AI agents 分工协作复盘，像以前管理实习生一样管理机器员工）、模型评测师和红队测试员（专找 AI 的幻觉偏见越权漏洞和危险行为）、知识库园丁（维护企业内部数据权限语义结构版本和来源）、机器人舰队管家（调度维修异常处理人机冲突调节）。
2. **生活增强岗位**：个人学习导演（用 AI 定制长期学习路径、每日反馈、错题追踪和项目挑战）、老人生活增强师（用 AI 传感器机器人帮老人管理用药运动社交家庭联系和紧急响应）、微型体验策划人（给一个家庭一场生日、一段旅行、一个社区节日，生成剧本音乐视觉路线互动游戏——过去只有大活动才值得策划，未来小生活也值得定制）、个人数字档案管理员、一人电影制片人（普通人不但可以拍电影而且可以被拍电影）。
3. **信任与责任岗位**（以前就必要，现在变得更重要值得升级成专门岗位）：AI 输出审计师、人类责任签署人（AI 给建议，最后要有一个懂业务的人签字解释担责）、首席审美官（AI 生成一万张图，选出最有灵魂最能触动人心的一张只能靠你）。**当能力变廉价，需求就会变复杂；当任务被自动化，责任就会被人格化。**

---

## 全文（清洗后的课程转录，重点加粗+底纹）

欢迎来到现代思维工具课，我是万维钢。在我写这期文章的时候，也就是 2026 年 5 月，硅谷正弥漫着一股末日之感：虽然 AI 带动经济火热、街头歌舞升平，但很多有识之士相信这一切都是暂时的，因为他们认为 AI 会很快干掉大量的人类工作岗位。Anthropic 的 CEO 达里奥·阿莫迪最近就像个末日先知，他在几个场合表示：**AI 将在一到五年内消灭一半的初级白领岗位，把失业率推到 10% 至 20%**——科技、金融、法律、咨询，尤其是其中的入门级岗位都会受重创。阿莫迪还向为民请命一般呼吁公司和政府不要再继续粉饰太平了。而你对此可能也有些体感：过去两年间硅谷连续有几家大厂打着 AI 的名义裁员，有美国名校计算机专业的大学生毕业没找到工作，有人认为初级程序员岗位已经都消失了。

但是这一讲我要说一个暴论：**AI 不但不会减少、而且会大大增加人的就业岗位。** 事实上现在已经出现了早期信号。文稿里有一张图出自城堡证券发表于 2026 年 2 月的一份报告，图中用 Indeed 岗位发布数据比较了软件工程师和整体招聘岗位的走势，其中最显眼的是：**软件工程师岗位在 2025 年 5–6 月间已经实现了触底反弹。** 当然新增发布的数目仍然比疫情前、比 2021 至 2022 年的科技泡沫高点都低一些，但是是一个很好的迹象。不是有人说 AI 最先干掉的就是编程这项工作吗？怎么软件工程师的岗位反而最先反弹了呢？这可能不是反常，而是一个经济学规律的一次完美展示，叫做**杰文斯悖论**。

要理解其中的逻辑，咱们先回到 1865 年的英国。英国正处于工业革命的巅峰，可是当时的人也有一种末日焦虑：支撑帝国心跳的是煤炭，而蒸汽机、铁路、工厂、轮船全都吃煤——煤炭挖完了怎么办？各路天才想方设法改进技术，把蒸汽机效率提高了好几倍、都比以前省煤，于是人们设想煤炭总消耗量肯定会降下来。可是就在此时，一个叫威廉·斯坦利·杰文斯的 30 岁经济学家出了一本书叫《煤炭问题》，说你们想的太简单了。**杰文斯的判断是：蒸汽机越省煤，动力就越便宜；动力越便宜，更多行业就会用它；更多行业用它，英国总用煤量反而会上升——这就是杰文斯悖论。** 而历史上事实果然如此。

而且这是一个普遍规律。咱们说一个发生在中国新疆的类似的事。你知道新疆很多地方是干旱的，在上世纪 90 年代天山地区推广了农业滴灌技术：过去浇一亩地需要用很多水，现在省了不少。那你说总用水量是不是就应该下降了呢？并没有。农民一看：既然亩用水少了，那我为什么不多重一点？而且既然滴灌提高了单产，那我能不能再种点更赚钱的经济作物？既然收益上来了，我是不是应该多开垦一些耕地？结果是天山地区从 1996 年推广滴灌以来，20 年间用水反弹超过 115%——也就是说总用水量是以前的两倍还多。

现在 AI 消耗电力不也是同样的逻辑吗？AI 公司的算法越来越高效、英伟达的芯片一代比一代省电、单次推理越来越便宜，可是数据中心的总体耗电却在疯狂飙升。这些故事的结局应该都会很好，毕竟人没有那么容易被资源限制死。**但这里有个道理：原来效率不是刹车，而是油门。一旦你有了杰文斯悖论这个眼光，你会发现生活中到处都是它的影子。**

比如说写作。十年前没有 AI，我自己调研、有时候甚至是读纸书、用铅笔画大纲，然后纯手打输入，再用眼睛盯着屏幕逐行修改——如果我这一天能保持很好的工作纪律，大约要花六到七个小时才能写好一篇文章。那你说现在有了 AI，我可以用 AI 调研、AI 讨论、用语音输入、用 AI 审稿，每一步都能省下时间，我能不能用四个小时写篇文章呢？结果是：**出一篇文章的时间一点都没缩短，往往是更长。** 这是因为 AI 让我对文章有了更多的要求：我会探索更多的想法、调研更多的文献、可选的案例更丰富、文章逻辑密度更高、篇幅也更长了；我变得更计较遣词造句，偶尔还要加入插图和漫画。如果你也用 AI 做过自己以前做的工作，你会有同感——**老板不会因为 AI 帮你提速了就太好了早做完早休息，老板只会说：既然 10 分钟就能出一版，那我们先做三版看看。** 你左一个需求又一个想法，最终把所有工作时间填满还不够。

别的事情不也是如此吗？你用上了一个购物返现的省钱 APP，每笔消费的确能给你省钱，结果因为购买门槛降低你更想买，总花费反而增加了不少。再比如说现在有微信、飞书、AI 会议纪要这些应用，人与人之间的沟通成本大大降低了，那我们的会议时间是不是应该减少呢？也没有——又是拉群又是同步又是对齐，发起会议的门槛近乎为零，使得会议数量反而比以前多了。

**这个洞见是：当你提高效率降低了单位资源消耗的时候，你同时降低了行动的门槛。门槛一降，原本被抑制的、甚至你想不到的需求就会像洪水一样释放出来。** 杰文斯悖论原本说的是效率越高就越消耗资源，但你只要把"提高效率"改成"自动化"、把"资源"改成"人的工作"，这个悖论就变成了：**自动化会增加人的工作。** 历史已经一再验证了这个规律。

19 世纪纺织机械刚出现的时候，有所谓卢德分子担心织工要失业就去砸机器——哪里想到布料价格暴跌的结果是普通人从只有一套衣服变成了有十几套，纺织工的数量反而大大增加了。1970 年代自动取款机普及，大家都预测银行柜员将会消失——事实上单个网点需要的柜员人数的确减少了，但是因为运营成本降低，银行开始在每个街角疯狂开设新分行，柜员的总数不降反升；更妙的是柜员不再只是数钱的机器，他们被解放出来去处理更复杂也更有价值的像开户和理财咨询这些工作。快进到几年前，计算机视觉刚刚普及的时候，有学者断言放射科医生要失业了——后来的现实却是因为 AI 让看片成本大幅下降，医院开始给患者开出大量的预防性核磁共振和 CT 检查，导致扫描量激增；AI 帮医生筛选了 90% 的正常片子，而剩下的 10% 疑难杂症和最终的签字单依然需要人类——于是现在全球范围内的放射科医生不是失业了，而是严重短缺。类似的：电子表格没有消灭会计，而是让财务分析、预算管理、商业建模的业务扩张了；搜索引擎没有消灭研究员，反而制造了 SEO、内容运营、数据分析和数字营销这些新岗位。

一个最新的例子来自中国：有个美术外包平台叫米画师，运作模式是需求方发布订单（比如我想要一个头像、一个动漫人物），然后由画师在平台上接单。你说现在每个人都可以用 AI 画了，是不是这门业务就不存在了呢？恰恰相反：2022 年 10 月，因为一次知名的 AI 绘图模型事件，几乎免费的 AI 绘画能力突然降临到大众手边，导致米画师上的单张图像平均价格下降了 64%，但是订单数量却增加了 121%，结果是**总收入增加了 56%**。原有的创作者没有被挤走，他们保留了大部分的市场份额，增长则主要来自过去不值得做的低端个人订单。

这个规律不只是"价格下降、订单增加、总市场变大"，还有一个重要特点是**任务改变**。一个岗位不是一个动作，岗位是一组任务的组合：会计不是输入数字、医生不是看化验单、律师不是查法条、程序员不是敲代码——这些岗位都包含判断、审美、责任等不可被 AI 替代的任务，还可以包含各种因为 AI 而产生的新任务。**AI 干掉的是任务，而不是岗位。** 劳动经济学里早就有个任务模型：自动化确实有替代效应、会把某些原来由人做的任务交给机器，但新技术也会创造新任务、让劳动重新进入生产过程，这叫**复值效应**。

就在 2025 年，世界经济论坛发布一份就业报告，认为到 2030 年全球宏观趋势预计创造 1.7 亿个新岗位、替代 9200 万个旧岗位，等于净增加 7800 万个岗位。美国劳工统计局也明确说：AI 可能降低软件产品价格，从而增加软件开发、AI 商业解决方案和维护 AI 系统的需求，所以预测美国软件开发人员 2023 至 2033 年就业增长 17.9%。当然我们还要拭目以待，但是站在此刻，AI 的确在改变世界、也很可能带来阵痛，但是经济学理论和过往的历史经验并不支持"AI 会导致大失业"这个末日假说。

如果要顺应杰文斯悖论的历史大势，我们就不能站在旧任务那一边，而要站在新需求这一边。咱们不妨大胆畅想一下 AI 会创造哪些新岗位。历史经验仍然可以帮助我们，简单说：**当新技术把门槛降下来之后，那些过去不会做、做不起和不值得做的任务就成了新的生意。**

第一类是直接与 AI 相关的岗位。比如**AI 工作流架构师**——不只是写提示词，而是把一家公司的销售客服、数据法务、财务流程改造成 AI 可执行、可审计、可追踪的系统；比如**智能体监督员**——管理一群 AI agents，让他们分工协作、升级复盘，像以前管理实习生一样管理机器员工；比如**模型评测师和红队测试员**——专门找 AI 的幻觉、偏见、越权、漏洞和危险行为，未来模型越多，验收模型的人越值钱；比如**知识库园丁**——维护企业内部数据、权限、语义结构、版本和来源，AI 数据也需要厨师、还需要食品安全检查员；比如**机器人舰队管家**——当配送机器人、巡逻机器人、护理机器人进入城市，总要有人负责调度、维修、异常处理和人机冲突调节。

第二类是生活增强岗位。比如**个人学习导演**——这不是传统家教，而是用 AI 给学生定制长期学习路径、每日反馈、错题追踪和项目挑战；比如**老人生活增强师**——用 AI、传感器和机器人帮老人管理用药、运动、社交、家庭联系和紧急响应，不是替代而是让亲情少一点负担；比如**微型体验策划人**——给一个家庭一场生日、一段旅行、一个社区节日，生成剧本、音乐、视觉、路线和互动游戏——过去只有大活动才值得策划，未来小生活也值得定制；比如**个人数字档案管理员**——帮人整理照片、视频、聊天记录、文章、家族故事，做成可搜索、可传承、可展示的数字生命档案；比如**一人电影制片人**——普通人不但可以拍电影，而且可以被拍电影，一个人带着 AI 做分镜、角色、配音、剪辑、特效，直接为一个小群体、一个小家庭、一个小教育场景拍一部电影。

第三类是信任与责任岗位，这些任务以前就是必须的，但是现在变得更重要，以至于值得升级成专门的岗位。比如**AI 输出审计师**——专门检查 AI 出的法律文本、医疗建议、财务报告、科研结论有没有错、错在哪里、以及风险归谁；比如**人类责任签署人**——在医疗、金融、法律、教育等高风险场景里，AI 可以给建议，但最后要有一个懂业务的人签字解释和担责；比如**首席审美官**——AI 可以生成 1 万张图，但选出那张最有灵魂、最能触动人心的一张只能靠你。

**当能力变廉价，需求就会变复杂。当任务被自动化，责任就会被人格化。** 杰文斯悖论和鲍莫尔成本病都告诉我们：现代化是个好消息，提高效率是好消息，别人提高效率你没提高，对你也是好消息。人们总会有些担心，但即便是你担心的那事，终究也是好消息。

杰文斯悖论更深刻的洞见是：**人类社会不是爱节约的机器，人类社会更像一台欲望发动机——当技术把一个门槛降低，人类不会说"够了"，人类会说"那我们还想要这个、这个和那个"。** 就在 2026 年 GTC 大会期间，黄仁勋接受采访说："那些为了 AI 裁员的公司都缺乏想象力，真正有想象力的公司应该用 AI 扩张而不是收缩。"我完全同意他的说法。**AI 是对人的解放，而不是对人的限制。只有想象力是我们的限制。**
`,z1=`# 068丨平台：现代世界最厉害的商业模式

## 讲什么

**平台**——现代商业史上的终极掠食者，它把市场本身变成了自己的商品。传统"我开个店、做个产品、摆到市场上直接卖给顾客"的赚钱模式现在已经非常罕见：你是淘宝开店也好、抖音带货也罢、街头开餐馆也好，都需要通过某个平台连接顾客。平台通过算法决定谁能被谁看见，这原本是不该属于商业玩家的权利。

## 解决什么真问题

解释"从科技乌托邦到人人喊打"的平台观感反转：最初平台说来消灭中间商、免费使用服务、发红包补贴；商家却抱怨抽成越来越高、买家发现搜出来全是广告、外卖小哥被困在算法里。以前中间商是倒买倒卖，今天的平台管入口、管排序、管评价、管流量乃至管生死——**他赚的确实不叫差价，得叫秩序。**

## 核心论点

- **双边市场**：传统生意是单边的（面包店只面对买面包的顾客），平台同时面对两边甚至多边（卖家与买家、司机与乘客、餐馆骑手与消费者、开发者和用户、内容创作者广告商和观众）。这让平台生意难以启动（先有鸡还是先有蛋），但也正因如此，平台做大后别人很难竞争。
- **两个边际效益递增过程**：①间接网络效应——买家越多卖家越来，卖家越多买家越来；补贴不是做慈善，而是解决先有鸡还是先有蛋的问题。②数据算法飞轮——用户越多数据越多，数据越多算法越准，算法越准匹配越好，匹配越好用户更多。**平台的规模化是自我喂养的正反馈过程，是指数增长，唯一的限制就是人口总数。**
- **衰败化（enshittification）**：加拿大科技思想家克里·多克托罗发明的词，被美国方言学会选为 2023 年年度词汇——平台从起家到堕落、从服务用户到收割用户。三个阶段：①起家（补贴终端用户：Facebook 没广告不监控隐私、亚马逊书比书店便宜、早期 Twitter 完全开放 API）；②壮大（补贴商家："如果你没有付费，你不是消费者，你其实是产品"——把用户当资产卖给商家）；③黑化（压榨买卖双方：更多广告、更差搜索体验、更高抽成、创作者不买流量连自己粉丝都看不见）。
- 平台的武器是算法：不派真人管你，只在宏观概率上影响群体选择。外卖小哥和网约车司机的"灵活性幻觉"——不用打卡随时开工，但算法监控每一秒钟、决定派单权；Uber 会识别你多么迫切需要钱，一旦认定你什么单都接，算法自动把利润最低的单扔给你——这是对弱者的大压榨。
- **平台不是市场经济也不是资本主义，这等于占山为王，所以有人称之为技术封建主义。**
- 对策：反垄断 + **互操作性**（相当于手机的携号转网：用户离开平台可以带上所有数据、社交关系、购买记录和内容资产迁移到对手那里——拆墙促进平台竞争）。

## 关键例证 / 金句

- 多克托罗的路线图："先讨好终端用户，然后牺牲终端用户讨好商业客户，最后牺牲商业客户把价值收回给自己。"
- 曾经以为互联网的精神是自由和免费，现在我们得到的是控制和压榨。
- **平台对人和古代官府可不一样：不涉及任何暴力，任何时候你都有选择，但平台会默默影响你的选择。**
- 平台创造了巨大价值（小商家能把小众商品卖到偏远地区、独立开发者触达全球用户、巨量就业），但平台也是下场跟服务对象争利的，而且对服务对象有相当的控制权。
- **算法不是自然规律，而是人写出来的制度。人不是数据接口，更不是算法的奴隶。**
- 平台是当今世界最可怕的赚钱机器，我们必须确保他只是一个好用的工具，而不能是一个特别会算账的主人。

## 如何应用

1. 认清平台租：赚钱都要收经济租，请问还有比平台更厉害的租吗？理解平台逻辑，你就明白现代商业的游戏规则。
2. 作为平台使用者/商户/创作者：明白"不买流量连自己粉丝都看不见"，保持多平台经营（有的网约车司机同时开几部手机在几个平台一起接单——这就对了：平台从来没有忠于你，他自然没有权力要求你忠诚于他）。
3. 作为监管/立法者：重新理解价格——消费者不花钱不代表消费者没有付出成本；限制入口权被滥用（欧盟《数字市场法》把大型数字平台称为"守门人"）；推动互操作性立法拆墙。

---

## 全文（清洗后的课程转录，重点加粗+底纹）

欢迎来到现代思维工具课，我是万维钢。我们已经讲了很多赚钱的原则和方法，但有一个事实你可能没意识到：**传统意义上那种"我开个店做个产品、摆到市场上直接卖给顾客"的赚钱模式，现在已经非常罕见了。** 现在你是淘宝开店也好、抖音带货也罢、甚至哪怕在街头开一家普普通通的餐馆，想要连接顾客、提供点餐外卖服务，都需要通过某个平台。

起初这一切就像个科技乌托邦。平台说它是来消灭中间商的：咱不但不让中间商赚差价，而且让你免费使用服务，还给你发红包、还有各种补贴——你只要把自己的商品做好就行；平台替你操心物流和库存，你只要专注于服务用户就好；平台帮你匹配用户，它提供了搜索、广告、信任评分甚至社交，它让信息变得史无前例地高效。你心想这可真是新商业文明，天下哪还有难做的生意。但是这几年人们对平台的观感变了：**商家抱怨抽成越来越高，买家发现搜出来的全是广告，外卖小哥被困在算法里。** 以前的中间商是倒买倒卖，可今天的平台管入口、管排序、管评价、管流量，乃至于管生死——**他赚的确实不叫差价，得叫秩序。**

这一讲要说的是：**平台不是一种普通的生意，而是现代商业史上的终极掠食者，它把市场本身变成了自己的商品。平台通过算法决定谁能被谁看见，这原本是不该属于商业玩家的权利。**

平台之所以这么厉害，因为它是一个**双边市场**。传统生意都是单边的：比如你开个面包店，只需要面对买面包的顾客就可以了；但平台却是要同时面对两边甚至多边——卖家与买家、司机与乘客、餐馆骑手与消费者、开发者和用户、内容创作者、广告商和观众。这使得平台生意特别难以启动：你说我这是个卖货平台，可是如果没有消费者就不会来；没有消费者商家也不会来——你必须动员两边才行。但也正是因为这个特点，**平台生意只要做大了，别人就很难给你竞争了。**

怎么启动呢？最常见的打法是先提供完全免费的服务，甚至给新用户发补贴，说白了就是**烧钱获客**。你可能还记得十几年前移动互联网经济刚开始时候的种种美好景象：叫一个滴滴专车，打车费比出租车都便宜；几毛钱就能扫一辆共享单车；一直到今天，有时候几个外卖平台爆发战争还会疯狂给消费者补贴、搞个什么免费奶茶。VC 会说烧钱是值得的，因为这里有个**间接网络效应**：买家越多卖家越来，卖家越多买家越来；司机越多乘客越容易打到车，而乘客越多司机就越愿意上线。这是一个边际效益递增的过程——商家也好消费者也好，每多一个用户，平均每个用户的价值就更高，新用户就越值得来，老用户就越不愿意离开。所以**补贴不是做慈善，而是解决先有鸡还是先有蛋的问题。**

等到商家和消费者都来了，平台还会得到第二个边际效益递增过程，那就是**数据算法飞轮**：用户越多数据越多，数据越多算法越准，算法越准匹配越好，匹配越好用户就更多。我们前面说了，赚钱一定要有杠杆、要规模——**间接网络效应和数据算法反馈就是平台最强的杠杆。平台的规模化是个自己喂养自己的正反馈过程，是指数增长，它唯一的限制就是全国或者全世界人口总数。** 这就是为什么硅谷也好中国也好，那些科技大厂能雇佣那么多的高学历人才，还能给每个人发那么高的工资——**平台是人类历史上新出现的超级赚钱组织。**

你说行吧：平台一旦有了最多的用户、最好的数据和最强的算法，别人就难以与之竞争了，那你们就好好做个现代商业的基础设施，也不用再补贴了，就收取一个公正的利润、服务大众呗。**现实可没有这么简单：如果你拥有那么大的力量，你不会满足于好好做个基础设施，你会开始收割。**

加拿大科技思想家克里·多克托罗专门发明了一个词叫 enshittification（我们翻译得文雅一点，姑且称之为**衰败化**），形容平台从起家到堕落、从服务用户到收割用户的过程。这个词后来被美国方言学会选为 2023 年年度词汇。一个这么新的商业模式，一开始人都喜欢，怎么这么快就让人嫌弃了呢？多克托罗专门写了本书讲这个过程：**先讨好终端用户，然后牺牲终端用户、讨好商业客户，最后牺牲商业客户、把价值收回给自己。**

第一阶段是**起家**，主要打法是补贴终端用户。凭借巨额风险投资，平台为了发挥间接网络效应，会不惜代价地向终端用户提供远低于成本、甚至经常是完全免费的优质服务。当初 Facebook 还在跟 MySpace 竞争的时候，它不但没有广告，而且不监控用户隐私，在时间线上只展示你主动订阅的信息，没有任何作恶的迹象；亚马逊卖的书比书店便宜得多，而且只要每年花 79 美元成为会员就给你全年免运费；早期的 Twitter 是个完全开放的应用程序接口，第三方开发者可以随意访问它的数据，很多用户把 Twitter 当成自己的东西、帮它发明新功能。**起家期的平台就如同新到占领区的统治者：修路免税、发补贴、微笑服务，只要你们愿意来就行——最好把你们的社交关系、购物习惯、支付记录、内容资产和工作流全都搬来。**

第二阶段是**壮大**，主要打法是补贴商家。不是有那句话吗？**"如果你没有付费，你不是消费者，你其实是产品。"** 锁定了足够多的用户以后，平台就开始把用户当资产卖给商家：我这里海量用户，你们要不要来？你们来，我不但只收取很低的抽成，而且我还给免费流量。于是卖家、广告主、APP 开发者和主播们都来了。私下里平台正在对终端用户做手脚：Facebook 向广告商提供精准的定向广告，并且允许一些未经订阅的媒体文章出现在用户的时间线上；苹果默许了第三方应用的商业监控行为；Twitter 为了配合某国家的审查要求牺牲了当地用户的言论自由和隐私安全。但平台的形象仍然非常正面：它给小商家机会、给创作者舞台、让消费者继续享受低价，同时投资人看着股价接连往上涨——每个人都很高兴。**可是谁买单呢？**

这就迎来了第三阶段，**黑化**。平台开始压榨买卖双方，现在享受补贴的只有股东：消费者看到的是更多的广告、更差的搜索体验和更少的真实选择；商家面对更高的抽成、更贵的广告费和更复杂的规则；创作者发现如果不买流量，连自己的粉丝都看不见自己；开发者感觉自己是在给应用商店打工。但是平台的网络效应已成，曾经的竞争对手要么已死、要么达成了平衡，消费者和商家都已经很难逃走了。文稿里的图是 GPT 按照多克托罗书中的口径展现的美国五个大平台从起家到壮大再到黑化的时间历程。**我们曾经以为互联网的精神是自由和免费，现在我们得到的是控制和压榨。**

别误会：平台对人的控制和压榨跟古代官府可不一样——这里不涉及任何暴力，平台没有权力强迫你做任何事，你任何时候都有选择，但是他会默默地影响你的选择。**平台的武器是算法**：平常不会派一个真人来管你，而且也不在意你这个具体的人接不接受他的管理，他只需要在宏观概率上影响群体的选择就够了。

比如外卖小哥和网约车司机，他们被包裹在一种叫做**灵工经济**的灵活性幻觉里：你不需要上班打卡，想什么时候开工就什么时候开工，想什么时候收工就什么时候收工，对吧？可是算法正在监控你的每一秒钟：它会计算你的路径、会给你倒计时、会根据你的表现决定你的派单权；如果你超时或者用户评分低你会被罚款，如果你完成的单数多你会得到奖励，而奖励是给你更多更值钱的订单。一个最极端的做法是：比如 Uber 会根据你的接单情况判断你有多么迫切地需要钱，一旦你被认定什么单都接，算法就会自动把利润最低的单扔给你——**这难道不是对弱者的大压榨吗？**

对消费者平台更不会手软。首先是**价格歧视**，也就是所谓大数据杀熟：经常有老用户说看到的价格比新用户更贵；有人说你搜索机票的次数越多，得到的价格反而会越高，因为算法认为你的支付意愿强。另一个办法是**压缩你的选择**：同样的搜索，平台想让你看见的会放在第一排，不想让你看见的会排到很后边；默认选项是什么、取消按钮藏在哪里、优惠券怎么设计，这些都是操控——而你还以为那是你自己的偏好。

对商家平台更是连装都不装，直接理性对话：不但抽成明明白白提高，而且你要想被消费者看见，还得交广告费、服务费和活动费——**你必须购买流量，你的存在感现在是一个收费项目。** 而就在控制和压榨的同时，平台甚至不需要给外卖小哥交退休金、买保险，更不需要承担商家的盈亏——它说它只是在提供一个撮合服务，它卖的只是信息，可是它默默地拿走了你们劳动成果的大头。

我们讲真正赚钱都得收经济租，请问还有比平台更厉害的租吗？如今我们已经离不开平台，你必须承认平台创造了巨大的价值：它让小商家能把一种非常小众的商品卖到哪怕是非常偏远的地区，它让独立开发者触达全球用户，它提供了巨量的就业；而且我们至今搜索信息、用个地图，仍然是免费的。**平台是现代经济的基础设施。但平台也是下场跟服务对象争利的基础设施，而且它对服务对象有相当的控制权。** 这已经不是纯粹的市场经济，也不是资本主义，这等于占山为王——所以有人称之为**技术封建主义**。

那怎么办呢？法律和政府监管肯定很重要，特别是**反垄断**。以前我们对垄断的定义是你占领了市场之后提高价格，但对于平台我们必须重新理解价格：消费者不花钱不代表消费者没有付出成本。欧盟的《数字市场法》把大型数字平台称为"守门人"，关键思路就是限制入口权被滥用；中国也在通过个人信息保护法和互联网平台价格行为规则来监管平台。

多克托罗和大学者特别推崇的一招是**互操作性**——简单说就相当于手机的携号转网。为了确保平台不能把用户关在自己的城堡里，应该立法规定：如果用户选择离开一个平台，他可以带上自己所有的数据——包括社交关系、购买记录和内容资产离开，可以带着自己的用户和粉丝关系迁移到这个平台的对手那里。说白了就是要**拆墙、促进平台之间的竞争**。有的网约车司机同时开几部手机在几个平台上一起接单——这就对了。**平台从来没有忠于你，他自然没有权力要求你忠诚于他。算法不是自然规律，而是人写出来的制度。人不是数据接口，更不是算法的奴隶。**

当前的信号是越来越多的人开始对平台警觉，这是一个好消息，说明人不是那么好摆弄的，自由市场还有希望。**平台是当今世界最可怕的赚钱机器，我们必须确保他只是一个好用的工具，而不能是一个特别会算账的主人。**
`,L1=`# 069丨托付：世界奖励把不确定性变成确定性的人

## 讲什么

在公司里怎么挣大钱的思维工具：**托付**。公司用低薪购买员工的时间，用中薪购买技能，用高薪购买可托付性。对最值钱的能力是"把焦虑变成秩序"：**世界奖励的不是努力和优秀，而是那些把不确定性变成确定性的人。** 高薪不是优秀奖，而是不确定性溢价。

## 解决什么真问题

拆穿"科举思维"：丈母娘挑女婿的眼光看年薪百万的人——学习好、名校毕业、工作努力、掌握核心技术、老板主动升值加薪、情商高。但这是错误的思维方式。市场不是考场，公司不是给人颁奖的机构：**财富是创造出来的，不是分配下来的。你优秀不优秀、辛苦不辛苦，都不是公司给你高薪的理由。**

## 核心论点

- **奈特不确定性**：1921 年弗兰克·奈特《风险、不确定性与利润》——老板的利润来自他承担的不确定性。风险是知道概率分布、至少可以买保险管理；不确定性是你连概率分布、甚至将来这件事还有没有意义都不知道。如果世间没有不确定性，公司只是执行机构，老板根本不应该有利润。
- **老板关心的是哪块局面最不稳，谁能让那块局面稳住，谁就值钱。** 高薪不是优秀奖，而是不确定性溢价。
- 三个层次：**初级打工人**（你让我干什么我就干什么，用时间和体力换工资，可替代性极高）；**终极打工人**（超越流程，发挥判断力和创造性，卖技能——"学成文武艺货与帝王家"，但他们仍然在等待别人定义任务）；**高端打工人**（不要你先说清楚任务——老板给他的往往不是任务，而是一团焦虑）。
- 高端打工人三步：**重新定义问题**（你以为问题在 A，其实瓶颈在 B）、**给出行动建议**（先做这个验证小假设再投大资源）、**提供逻辑支撑**（为什么我们应该这么做）。在老板完全没有头绪、束手无策的情况下，你像定海神针一样把这一摊事定下来——这就叫托付。都想清楚了才交给你，那叫派活。
- 高端打工人需要三样东西：**应对不确定性的能力 + 信任（别人敢不敢授权给你）+ 杠杆（你的判断能影响多少人多少钱多少客户多少流程）**。
- AI 时代：OECD 2024 年研究发现，AI 暴露度最高的岗位中真正能涨薪的不是会用某个 AI 工具，而是三类更上游的能力——**管理能力**（设目标分任务做取舍管进度）、**业务运转能力**（客户从哪来、订单怎么交付、钱从哪里进、成本卡在哪、风险在哪环节最大）、**社会协作能力**（沟通说服谈判跨部门协调建立信任）。**AI 不是替代了商业判断，而是把商业判断推到了更值钱的位置。**

## 关键例证 / 金句

- "你优秀不优秀、辛苦不辛苦，都不是公司给你高薪的理由。公司愿意给你高薪，一定是因为你能在财富创造的过程中起到一个关键作用。"
- 技术高手说"你们能不能把需求说清楚，你说清楚我才能干好"——**这句话一出口，你工资的上线就出来了**：市场本来就说不太清楚，你凭什么想要清楚？你要清楚，本质上是要求别人给你创造一个温室一样友好的工作环境，你既不打算问这个环境是怎么创造出来的，更不打算为这个环境负责。
- 公司倒闭老板发 N+1 补偿，员工喜笑颜开盼着找下一份工作——"他们只会继续搞垮下一家公司"：如果是足球俱乐部降级，哪有球员一个个喜形于色的？你们在这里工作这么多年，就没有一点愧疚之心吗？
- 2024 年 A 股上市公司有 12 位董事长年薪超千万、85 位总经理年薪超 500 万、1070 位董秘超 100 万。董秘不是高级秘书，他直面资本市场——信息披露、投资者关系、再融资和监管问询，一个公告写错、一次沟通失控，市值和信用都可能出问题。**高薪不是因为会写材料，而是奖励他稳住了资本市场的不确定性。**
- 蒂姆·库克在 2011 年成为苹果 CEO 之前是 COO，靠供应链管理起家——他把全球工厂、库存、渠道、交付、现金周期拧成一台机器确保灵活响应市场，那是最高的不确定性压缩。
- 美国军官的说法：**极端的所有权（I own this）——这块归我管，相关责任我来承担，相关变量我来协调，出问题我不甩锅。** 中国古话：可以托六尺之孤，可以寄百里之命，临大节而不可夺也。
- **要拿高薪，你输出的不是时间、不是体力、也不是技能，而是秩序。**

## 如何应用

1. **成长路线图**：科举思维是学技能、考证、找工作、升值加薪，想通过变优秀而得到待遇；商业思维和市场思维的路线图却是——**处理小不确定性，赢得小信任，获得小杠杆，处理更大不确定性，赢得更大信任，获得更大杠杆。这才是公司里的财富复利。**
2. 向组织释放信号：我不是反馈黑洞，我不是"我以为"，我不是等别人提供确定性的学徒，我是一个能处理混乱的可信节点。
3. **员工要有创业心态，创业要有员工心态**（朋友赵培的思考）：打工反而要有主人翁意识，把公司扛在肩上，主动干一些分外的事情；创业却要把公司做正规，不能随意搞。
4. 识别自己的段位：还在"等需求文档""等领导派任务"就是学生心态；能接住"一团焦虑"并把它变成"可判断可执行可负责的局面"，才配拿高薪。

---

## 全文（清洗后的课程转录，重点加粗+底纹）

欢迎来到现代思维工具课，我是万维钢。我们这个赚钱模块说了这么多思维工具，都是默认说给企业家、创业者和自由职业者的——你直接面对市场、面对客户、面对现金流，赚钱也好亏损也好，现实直接落在你身上。大多数人不必如此：可能你不想天天处理融资、合同、税务、媒体的批评和网上的舆论，你就想躲在一个组织内部做个员工，俗称打工人。但你说也想发挥大作用，以至于哪个高新行不行呢？当然行。其实很多高级打工人挣的钱比小老板赚的钱都多，而且更有成就感——**如果能在职场指挥千军万马，谁还愿意去开个小餐馆呢？** 这一讲咱们就说说怎么在一家公司里挣大钱。

外行看一个拿高薪的人，比如说用丈母娘挑女婿的眼光看：说为啥我家女婿年薪百万，那肯定是因为他优秀啊——这孩子从小就学习好、毕业于名校，所以那个大公司那么难进他都能进去；他平时工作特别努力每天都加班；这么忙肯定是掌握了核心技术；老板主动给他升值加薪，说明他情商也高。这么说也不能说完全不对，但这是错误的思维方式，我们不妨称之为**科举思维**。科举思维认为世界是一个大考场，对人有一系列评价指标，应该奖励那些在这些指标上表现优秀的人：只要你做到了你就是素质高，世界就应该给你提供相应的待遇，否则就是不公平。**但市场不是考场，公司不是给人颁奖的机构，财富是创造出来的，不是分配下来的。你优秀不优秀、辛苦不辛苦，都不是公司给你高薪的理由。公司愿意给你高薪，一定是因为你能在财富创造的过程中起到一个关键作用。**

简单说：**公司用低薪购买员工的时间，用中薪购买技能，用高薪购买可托付性。** 我们公司面临一个模糊、昂贵而且有严重后果的问题，现在上上下很焦虑，那你来了，你能不能把这一团混乱的信息、互相冲突的目标、没人愿意碰的责任，压缩成一个可以判断、可以执行、可以负责的局面呢？我们能不能把这个事托付给你？这才是你拿高薪的理由。**对最值钱的能力是把焦虑变成秩序。**

要理解这一点，我们必须先从另一个视角想：老板是怎么赚钱的。以前连很多学者都想不通，为什么老板的利润可以比普通员工的收入高那么多？如果公司就是一个办事机构，生产品也好提供服务也罢，所有成果都是大家一起努力完成的，你这个老板也没有超能力、一天也是 24 小时，你凭什么赚那么多钱呢？一直到 1921 年，美国经济学家弗兰克·奈特出了本书叫《风险、不确定性与利润》，大家才想明白。**奈特的答案是：老板的利润来自他承担的不确定性。** 要生产这个产品，我们前期必须投入很多钱：购买机器、招聘工人、囤积原材料、花时间设计，等我们生产出来可能已经是半年之后了——那时候的市场还需要不需要这个产品是不确定的。没有人能准确预测明年的流行时装将会是什么款式，但是你必须今年就开始备货。这种不确定性跟一般的风险还不一样：风险是你知道概率分布，最起码可以用购买保险的方式加以管理；**不确定性是你连概率分布、甚至将来这个事还有没有意义、会不会被另外一个你完全没想到的事取代，你都不知道。** 这就是我们前面说过的奈特不确定性。如果世间没有不确定性，公司就只是一个执行机构，那老板就根本不应该有利润，所有人都拿个标准工资就算了。但现实是市场需求、技术、监管政策、客户预算、供应链、竞争对手和内部团队都充满不确定性，所以做生意必须用到老板本人的眼光、见识和创造力。**创造力在很大程度上是做不讲理的主观选择，甚至就是赌——人家有很大的可能会赌输，所以当人家赌赢的时候，你必须给人家一个高利润，不然这个游戏就没人玩了。** 市场经济中任何人都可以当老板，但大多数人选择安稳地当个员工；凡是不是董事长的舅子还敢出来当老板的，都是有冒险精神的英雄豪杰。

公司是一台在不确定世界中求生的机器，所以**老板关心的不是谁最优秀，而是哪块局面最不稳；谁能让那块局面稳下来，谁就值钱。** 并不是努力和优秀没用，高薪总会有用处，但世界奖励的终归不是努力和优秀，而是那些把不确定性变成确定性的人。别忘了不确定性是意义的燃料——**高薪不是优秀奖，而是不确定性溢价。**

其实人只要出来做事，就多多少少会把一些不确定变成确定，毕竟在小范围的活完成之后，也总会比完成之前多一点秩序。大家的区别只是在于大小和主动性不同。

**初级打工人**的心态是：你让我干什么我就干什么。你给我一个工单，我处理；你给我一份表格，我填；你给我一个标准流程，我照着做。外卖客服、基础运营、简单行政、流水线岗位，包括很多号称知识工作的岗位，都是这个逻辑。我用时间和体力换取工资，至于说干出来的活有多大作用、能帮公司赚多少钱，那是你的事不是我的事。工作不能没有这种人，但是他们的可替代性非常高，所以工资不可能太高。

**终极打工人**则会超越流程，发挥自己的判断力和创造性：产品经理说个需求，程序员能自己设计路径写好代码；设计师能出图；老板下个指令，律师能写合同；财务分析师能建模型；销售能签单；病人来了医生知道该怎么处理；教练派球星上场，球星是真能给你进球。他们卖的不是时间和体力，而是技能。正所谓"学成文武艺，货与帝王家"，很多人认为这就是打工人的天花板。其实不然——**他们仍然是在等待别人定义任务。** 这是很多技术高手的痛苦来源：他老觉得产品经理朝令夕改、老板战略摇摆、跨部门协作像大型行为艺术，他认为这一切都是在给自己制造麻烦。他说你们能不能把需求说清楚，你说清楚我才能干好——**殊不知这句话一出口，你工资的上限就出来了。** 市场本来就说不清楚、产品本来就说不清楚、对手和客户都不清楚，你凭什么想要清楚？你要清楚，本质上是要求别人给你创造一个温室一样界面特别友好的工作环境：你在这个环境里上班发挥自我、下班拿工资走人，你既不打算问这个环境是怎么创造出来的，更不打算为这个环境负责，只要他们能给你个班上好。

我最近看了个短视频：一家公司倒闭了，老板很体面给全体员工发了 N+1 的补偿，结果员工们一个个情绪都挺正面，甚至还有点喜笑颜开，面对采访说有点遗憾但也挺期待去找下一份工作。我对这个场景的评论是：**他们只会继续搞垮下一家公司。** 如果是一只足球队降级，哪有球员一个个喜形于色的？你们在这里工作这么多年，就算没有持股，现在公司给干黄了，就没有一点愧疚之心吗？你们的才能发挥在了哪里？你们的时间和体力创造了什么价值呢？这些人把自己视为接口的模块：我能装在这里也能装在那里，项目成了我拿奖金，项目黄了我换公司。你当然有这个自由，但**你既然不是 skin in the game（下场持有股份），就别指望拿高薪。**

**高端打工人**不要求你先说清楚任务。老板给他的往往不是任务，而是一团焦虑："我们这个新产品老推不动，你看看问题在哪""这个大客户快丢了，你去稳住""现在 AI 起来了我们到底该怎么调整组织""这个部门成本太高但不能简单裁员，你给我一个方案"。老板可能自己都不知道自己焦虑的到底是什么，他只知道这事很贵很麻烦、后果很严重、而且没人愿意接。高端打工人站出来，不可能第一句话先问需求文档在哪或者我看一看操作流程。他会帮你把问题想清楚。第一是**重新定义问题**：你以为问题是 A，其实瓶颈在 B；你以为是技术不行，其实是我们没跟上客户的脚步；你以为是销售不努力，其实是产品定位错了；你以为是人手不够，其实是决策节奏太慢。第二是**给出行动建议**：咱们先做这个，验证一个小假设再投入大资源；一定要稳住关键客户，然后再谈长期改造；先按照 A/B 版推进一下，三周后根据指标决定是否加码。第三是**提供逻辑支撑**：为什么我们应该这么做？因为这样能降低下行风险、争取时间、保留选择权、并且让下一步决策有证据。**在老板完全没有头绪、束手无策的情况下，你像定海神针一样把这一摊事定下来——这就叫托付。都想清楚了才交给你，那叫派活。**

但光是你声称能应对不确定性还不行，你还得**被人信任**——信任是别人敢不敢授权给你，是你判断力此前积累出来的信用。然后你还需要有**杠杆**——你的判断能不能影响更多人、更多钱、更多客户、更多流程。能应对不确定性、拥有信任、能调动杠杆——你的决策和行动本质上是企业这个有机体在进行主动推断——这样的人就应该拿高薪。

世界经济论坛发布过一份 2025 年未来就业报告说，雇主最看重的核心技能中排在前三位的是：**分析性思维、韧性与灵活性、以及领导力与社会影响。** 发现没有？这些都不是专业的硬技能，而是处理复杂局面的软实力。经济合作与发展组织 2024 年发表的研究也发现：在 AI 暴露度最高的岗位中，真正能涨薪的不是会用某个 AI 工具，而是三类更上游的能力。第一是**管理能力**——设目标、分任务、做取舍、管进度；第二是**业务运转能力**——你得懂公司的这门生意到底怎么跑起来：客户从哪里来、订单怎么交付、钱从哪里进、成本卡在哪里、风险在哪个环节最大；第三是**社会协作能力**——沟通、说服、谈判、跨部门协调和建立信任。简单说：AI 会让"产出答案"变便宜，但它不会自动告诉你这个答案应该接入哪条业务链、由谁执行、出了问题谁负责。**OECD 的数据说明：AI 不是替代了商业判断，而是把商业判断推到了更值钱的位置。**

其实就算没有 AI，各行各业的薪资岗位也都在处理某种不确定性：高端项目经理卖的不是画甘特图和开会催进度，而是"这件事终于有人管了"——他把模糊需求转成规格、把跨部门依赖转成里程碑、把互相扯皮转成可追责；高端软件开发者不是会写代码的人，而是能保证系统不崩溃的人；高端财务经理处理的不是日常账目，而是现金流、预算偏差、资本成本和尾部风险——很多时候公司不是死于没利润，而是死于现金流断裂；高端律师不是背法条的机器，他们干的是把法律模糊地带转成合同边界、交易路径和红线归属——不直接创造一分钱收入，但能避免一场罚款、诉讼、牌照丢失和上市失败。蒂姆·库克在 2011 年成为苹果 CEO 之前是 COO，负责全球销售与运营，他起家靠的是供应链管理——你以为供应链只是后台吗？库克把全球工厂、库存、渠道、交付、现金周期拧成一台机器确保灵活响应市场，那可是最高级的不确定性压缩。据统计 2024 年 A 股上市公司里有 12 位董事长年薪超过 1000 万元、85 位总经理年薪超过 500 万元、1070 位董秘超过 100 万元。你以为董秘只是高级秘书吗？他直面资本市场——信息披露、投资者关系、再融资和监管问询，一个公告写错、一次沟通失控，市值和信用都可能出问题。**高薪不是因为他会写材料，而是奖励他稳住了资本市场的不确定性。**

年轻人怎样才能成长成这样的人？科举思维是学技能、考证书、找工作、升值加薪，是想通过变优秀而得到待遇；可是商业思维和市场思维的路线图却是：**处理小不确定性，赢得小信任，获得小杠杆；处理更大不确定性，赢得更大信任，获得更大杠杆——这才是公司里的财富复利。** 你当然要学一大堆技能，如果是从名校毕业就更好，但那些都只是工具和敲门砖而已。公司没有义务为你的优秀买单。公司给你多高的薪酬，是看你能处理的不确定性、你拥有的信任和杠杆。**你必须向组织释放一个信号：我不是反馈黑洞，我不是"我以为"，我不是等别人提供确定性的学徒，我是一个能处理混乱的可信节点。**

我有个朋友叫赵培，在美国一家制造业企业担任高管。他跟我分享了一个思考，叫做**员工要有创业心态，创业要有员工心态**。什么意思呢？如果你创业，公司是你的，但你不能说就可以随便怎么搞，你必须把公司做正规——很多创业失败是因为公司不正规、各方面制度都不健全，导致员工整天跟打仗似的身心俱疲，投资者一看这么混乱也不愿意投你。而如果你打工，你反而要有主人翁意识、把公司扛在肩上——你不能只想着干分内的活、拿分内的工资，你得主动干一些分外的事情才行。赵培总爱自发代表公司去谈合作，而且跟客户吃饭从来不让自己报销；他不跟公司算这点小账，他甚至不计较自己的底薪，他靠持有公司的股票挣钱，他把公司当成自己的去运营。你说这样的人现在是不是太少了？看看你周围的同事们，你会发现大量员工的心态就好像是个学生：等着别人把规则说清楚、等着领导派任务、等产品经理提需求、等组织给确定性——"我做对了，你们就得奖励我，否则就是你们不公平"。**可是凭什么？凭什么人家要给你搭建这么一个奖励环境？要知道你能坐在这里，是因为有人在替你负责。**

一个美军军官有个说法叫**极端的所有权（I own this）**：这块归我管，相关责任我来承担，相关变量我来协调，出问题我不甩锅。中国也有句话：可以托六尺之孤，可以寄百里之命，临大节而不可夺也——君子人与君子人也。**成年人得让人放心把这一块交给你，你手上有责才行。要拿高薪，你输出的不是时间、不是体力、也不是技能，而是秩序。**
`,D1=`# 070丨地位：社会参与的第一性原理

## 讲什么

**地位**——观察社会的隐秘指标，万维钢称之为社会参与的第一性原理。地位是社会对你的主观估值：**别人愿意在多大程度上把你的话当真，进而把你的利益纳入共同体考量。** 说白了，地位就是"在别人心里，你到底算老几"。

## 解决什么真问题

看懂社会互动的底层逻辑：一群人在五分钟之内分不清谁地位高谁地位低，你就不是合格的灵长类动物。夫妻吵架争的是家庭主导权，职场上下级之争争的是认知解释权——**表面上的观点之争、品位之争、效率之争甚至利益之争、正义之争，背后往往是地位之争。** 人的种种行为动机都带有追求地位的色调。

## 核心论点

- **地位由他人决定，不由你决定**：你想要钱至少可以攒钱，想要好身材至少可以锻炼，唯独地位不是你自己追求就能得到的——有时候你越是追求反而越得不到。
- **社会计量器理论**（马克·利里）：自尊其实是大脑里的雷达仪表盘，时刻监测自己的地位。羞耻是"我在别人心中的估值暴跌"，骄傲是"我的社会估值得到了确认"，愤怒常常是"你凭什么调低我的评级"。
- **地位是相对的不是绝对的（本地阶梯）**：你年收入 100 万放在全国是非常高的收入，但幸福感更多由你在亲友和小区里的相对排名决定。做鸡头比做凤尾更有利于成长：2020 年论文证明一个人长大后是否从事某个专业，跟他本人的绝对水平关系并不大，真正起作用的是他在班级里的同辈排名——**平台给你资源，但地位叙事给你动力。**
- **两条截然不同的地位路径**（演化人类学家约瑟夫·亨里奇）：**支配型地位**靠权力、资源和恐惧（高级官员、黑道大哥、霸道总裁——你听他的因为你怕他）；**声望型地位**靠能力、知识和慷慨（别人愿意听你的因为你判断经常正确、跟着你能学真本事、你常给集体做贡献——人们由衷尊重你甚至想模仿你）。声望是一片引力场，支配是一口高压锅。
- 支配是"战模式"：局面危急混乱时人们本能呼唤强人。人类历史大部分时间处在危急混乱中，导致我们的支配本能明显强于声望本能。
- **能力×温暖二维坐标**：能力高温暖高=声望型地位（尊重+亲近+自愿追随）；能力高温暖低=支配型地位（羡慕但警惕，你的在场对他人是威胁）；能力低温暖高=好人但不信任能做成事；能力低温暖低=被边缘化。**很多聪明人到处碰壁就是因为位于"能力高温暖低"象限——今天降维打击这个明天智商碾压那个，每次都能赢得辩论，但长期看你被移除了群聊。** 奢侈品展示也是低温暖信号：你等于在自己和他人之间建立了一道墙。
- 地位游戏有强烈**二阶效应**：一阶是每个人都想追求地位，二阶是接收方不喜欢你那些支配型操作。**永远不要无故做空别人的地位**——灭（contempt）是关系终结的信号，当众纠错最好私下交流。

## 关键例证 / 金句

- 夫妻吵架晚上 10 点，妻子发现客厅半杯牛奶、地上两只袜子开始抱怨，丈夫反击"我忙了一天那么累回家还要被你骂"——两人争的不是家务，是家庭主导权。
- 周会上年轻产品经理提议接入大模型，老派主管说"大模型不可控以前试过不行"——两人争的不是技术路线，是团队的认知解释权。
- 权力是春药？不，那是地位：总统高官在位红光满面，一下来身体精神迅速崩塌；明星没有权力但只要地位在就必定精神焕发。**没权也行没钱也行，但是不能没地位。**
- **地位不是温度计，而是排行榜。**
- 地位是个副产品：**你无法直接抓住地位，但你可以成为一个值得拥有地位的人。**
- 婚姻专家约翰·戈特曼：批评、防御和冷战都是危险信号，但最危险的是"灭"——一旦一方开始蔑视另一方，这段关系基本就完了。
- 核心法则只有一句：**永远不要无故做空别人的地位**——这不仅是策略，这是慈悲。

## 如何应用

1. **社交判断**：进入任何群体，五分钟内识别地位格局；理解对方的言行很多是在维护地位而非表达观点。
2. **自我定位**：追求声望型地位（能力+温暖），克制支配本能——别把团队协作搞成服从性测试、别当令人窒息的办公室土皇帝。
3. **保护他人地位**：不当众指出他人错误（纠错私下交流）、不蔑视任何人、不炫耀奢侈品式的地位展示（那是自建围墙）。
4. **抗打击**：别人打击了你的地位，可以展示自己的地位，但更重要是不要陷入**地位饥饿**——地位饥饿的人丑陋：别人提不同意见就觉得被冒犯、不放过任何打压新人的机会、把任何动作都变成表演。**地位饥饿只会让人更没有地位。**
5. **投资自己的成长环境**：做鸡头比做凤尾更有利于成长——平台的资源很重要，但地位叙事给你的动力更重要。

---

## 全文（清洗后的课程转录，重点加粗+底纹）

欢迎来到现代思维工具课，我是万维钢。这一讲开始咱们进入社会与经济模块，但我们不是宏观视角，我们设想你是一个参与者。不管你刚毕业的新人还是职场老油条，又或者只想享受家庭生活，在当今世界你都不可能一个人闭门炼丹。你必须要参与这红尘大阵，你要跟人协作、组队、交易、竞争甚至争斗——你需要一点经济学思维，你需要理解社会。

这一讲咱们先说一个观察社会的隐秘指标。它隐秘却极其重要，我愿称之为**社会参与的第一性原理，那就是地位**。一群人聚在一起聊天互动，如果你不能在五分钟之内分辨出在场谁地位高、谁地位低，你恐怕不是一个合格的灵长类动物。那你说凭什么地位是第一性原理？人最想要的难道不是金钱、权力、安全、自由、真理和意义吗？那些东西的确比地位更基本，但往往只有当你面对自己、或者深处比如经济困顿的极端情况的时候，才显得格外重要。在日常的社会参与中，可能你自己都未必直接感受到——你会不自觉地在乎地位。

比如说夫妻吵架：晚上 10 点，妻子发现客厅里搁着半杯牛奶、地上扔着两只袜子就开始抱怨"你就不能顺手收一下"，丈夫立即反击"我忙了一天那么累，好不容易安抚好客户，怎么回家还要被你骂"。妻子怒了："这不是你的家吗？"你说这真的是在争论谁该做那点家务吗？其实两人争的是**家庭主导权**：妻子想通过让丈夫分担一点家务来证明自己不只是个做全职家务的，而听到的却是"我在外面拼命打怪，回来都没有一个英雄该有的特权，难道我就是个丫鬟吗"？再看职场：周会上年轻的产品经理提议"这事可以接入 AI 大模型，用 Gemini 3 就行，咱们的效率绝对起飞"，老派主管眉头一皱"大模型不可控，以前也不是没试过，不行"；年轻人头铁"以前不行不代表现在不行啊，实在不行可以上 GPT-5.5，啥都能干"，主管脸色铁青"你先把基础业务逻辑摸透了再来教我怎么做"。你说这是在探讨技术路线吗？两人其实是在争夺团队的**认知解释权**。**表面上的观点之争、品位之争、效率之争、甚至利益之争、正义之争，背后往往是地位之争。人在社会上的种种行为动机都带有追求地位的色调。**

地位是社会对你的主观估值：**它是别人愿意在多大程度上把你的话当真、进而把你的利益纳入共同体考量。** 我年少无知的时候曾经认为一句话的对错是客观的、是谁说的完全不重要，现在我意识到：**谁说的往往是这句话好使不好使唯一重要的因素。** 说白了，地位就是"在别人心里，你到底算老几"。

你可能想不到，社会心理学家关于地位的研究是最近一二十年才变得热门，可能以前人们都觉得这是一个有点尴尬的话题避而不谈。学术界当前的共识：地位是一个人被他人尊重、钦佩和自愿让步的程度，追求地位是一种极其基础的人类动机。关键词是**他人**和**自愿**：不管你怎么追求，你的地位都不是由你、而是由他人决定的。一切的悖论和麻烦就在这里。你想要钱至少可以攒钱，你想要好身材至少可以锻炼，唯独地位不是你自己追求就能得到的——**有时候你越是追求，反而越得不到。**

可是我们真的很在意地位。美国心理学家马克·利里提出一个**社会计量器理论**：所谓自尊，其实是我们大脑里的一个雷达仪表盘，它在时刻监测自己的地位、评估自己是否在人群中被接纳、还是面临被踢出局的风险。这个仪表盘的读数会强烈影响你的自我感受：比如说**羞耻**不是因为做错了，而是我在别人心中的估值暴跌；**骄傲**不是因为成功了，而是我的社会估值得到了确认；**愤怒**常常不是因为利益受到损失，而是"你凭什么调低我的评级"。如果一个人正在为社会排名降低而焦虑，你很难让他想开点。早有研究表明：人如果长期感到自己不被承认、没有价值，生理机能就会被推入一种充满皮质醇的压力状态，以至于损害健康指标。低社会排名感与抑郁症状、自杀的意念和自伤的风险之间存在系统性关联——**这就是为什么那些总统高官在位的时候一个个都红光满面，只要一退下来，身体和精神就会迅速崩塌。** 很多人说这叫"权力是最好的春药"，但如果你仔细辨别，你会发现那不是权力，那是地位。你看那些明星都没有权力，但只要地位在就必定精神焕发。说什么大丈夫不可一日无权、小丈夫不可一日无钱，其实没权也行、没钱也行，**但是不能没地位。**

一个特别有意思的性质是：**地位永远是相对于你周围的人而言的。你并不在乎不相干的人比你高还是比你低，地位看的是相对位置，而不是绝对水平。** 比如你年收入 100 万，这放在全国来说绝对是非常高的收入、可以说很富裕；可是你的幸福感更多的不是由绝对收入、而是由你在自己的亲友和居住的小区的相对排名所决定的。如果你周围都是一些富豪，他们谈论的都是你未曾拥有的资产，你可能还是会感到很焦虑。学术界称之为**本地阶梯**：人的地位感来自面对面小群体和在意的小圈子里的尊重和钦佩。所以地位不是温度计，而是排行榜。这就是为什么很多人宁做鸡头不做凤尾——而且事实上**做鸡头比做凤尾更有利于你的成长**，包括能力本身的成长。

举个例子，咱们设想有两个中学生：第一个学生的数学绝对实力是 90 分，但他是在一个普通中学读书，数学考试年级第一；第二个学生的绝对实力是 95 分，但他身处一所著名中学的天才班，周围全是高手，自己只排在中下游。那么请问这两个孩子将来谁更有可能在数学相关领域发展？答案是第一个孩子。他的优势地位带来一个强烈的"我是数学人才"的自我暗示，形成正反馈效应，激励他去继续钻研数学；而第二个孩子虽然其实更擅长数学，但是地位常年被数学打击——这是有研究证据支持的。2020 年的一篇论文就专门调查了班级第一的重要性，发现**一个人长大后是否从事某个专业，跟他本人的绝对水平关系并不大，真正起作用的是他在班级里的同辈排名。平台给你资源，但地位叙事给你动力。你在地位坐标上的位置决定了你对世界的体感。** 这真是人世间一个残酷的设定。要知道坐标之争必定是零和的：科技再发展、社会再富裕，全班第一的那个位置上也只有一个人。

如果你班级排名不是那么好，这里有一个好消息：考试成绩并不能直接决定一个人在群体中的地位。有的尖子生只会学习未必真的得到同学和老师的认可，如果成了做题家，发展空间恐怕也有限。怎样才能真正成为一方好汉或者本地达人呢？过去二十多年间，演化人类学家约瑟夫·亨里奇等人提出一个经典理论，说**争取地位有两条截然不同的途径：一个是支配，一个是声望。** 支配型地位靠的是权力、资源和恐惧——比如高级官员、黑道大哥和那些通过重奖重罚彰显威权的霸道总裁，你听他的因为你怕他。声望型地位靠的却是能力、知识和慷慨——别人愿意听你的因为你的判断经常正确、跟着你能学到真本事、而且你经常给集体做贡献，人们不但由衷地尊重你而且想要模仿你。**声望是一片引力场，支配是一口高压锅。** 理想情况下我们应该追求声望型地位。

那你说声望这么好，为什么还有那么多人痴迷于寻求支配呢？因为支配型地位也有自己的生态位：**当局面危急、混乱和不确定的时候，人们会本能地呼唤强人，想要一个独断专行、力排众议的统帅，相信唯有支配能高效解决问题——所以支配可以说是一种战模式。** 今天我们生活在和平之中对支配很不舒服，但是人类历史上大部分时间就是处在危急、混乱和不确定之中，导致我们的支配本能明显强于声望本能。明明只是讨论个产品需求，这位领导非要搞得像黑帮火并；明明是团队协作，他非要搞服从性测试。有的人以为自己是在扮演铁血统帅，其实不过是个令人窒息的办公室土皇帝——**你最好克服那个支配本能，走向声望。**

一个颗粒度更高的理论是这样的：当你想要提高地位的时候，你需要考虑两个维度：**能力和温暖**。能力是你的本事，温暖是你的意图，他们构成一个二维直角坐标系。能力高温暖高，这是声望型地位——人们尊重你、亲近你、并且自愿追随你。能力高温暖低，这是或多或少的支配型地位——人们羡慕你但同时也警惕你，你的在场对他人是一个威胁。能力低温暖高，人们会觉得你是个好人但不信任你能做成事，所以不会给你多少地位。能力低温暖低，这种人会被社会边缘化。我想特别提醒你注意"能力高温暖低"这个象限：**很多聪明人在社会上到处碰壁，就是因为他们位于这里**——今天降维打击这个、明天智商碾压那个，每次都能赢得辩论，但长期看你被移除了群聊。其实奢侈品的温暖也很低：团队聚会你一身名牌出场，传达一个信号"我比你们贵"，这的确是一种地位展示，但你等于在自己和他人之间建立了一道墙，别人会觉得你冷漠不好亲近。**记住：既要展示能力，更要展示善意，否则你收获的只是防御，而不是声望。**

你看出来没有，地位这个游戏有强烈的**二阶效应**：一阶效应是每个人都想追求地位，但二阶效应是在接收方，人们不喜欢你那些支配型的操作。可是你往往只考虑到一阶而没有考虑到二阶：有的人对下属颐指气使还洋洋自得，殊不知危险已经不远了；有的人把自己弄得珠光宝气，却不知在别人眼中那个形象很土。你再想想自己早年发过的那些尴尬的朋友圈——在每一次社交互动中，你很关心自己是不是被看见了、自己的地位是否稳固，但别人也很关心他的地位是不是被你看见了、他的地位在你这里是否稳固。**我们必须建立这种二阶思维，充分考虑别人的感受，才能在社会上顺畅行走。核心法则只有一句：永远不要无故做空别人的地位。** 可能你只是无意间做空，可是对他人却是巨大的伤害。

婚姻专家约翰·戈特曼早有研究发现：要从一对夫妇的互动模式中判断他们未来是不是有可能离婚，那么批评、防御和冷战都属于危险信号，但是最危险的是**蔑视**——如果一方已经在蔑视另一方，那这段关系基本上就算完了。蔑视是对对方地位的公开处刑。没事千万不要如此，你很难得到原谅。不但不要蔑视，而且也不要让人难堪——这意味着不要当众指出他人的错误，想纠错最好私下交流。

你说我不打击别人的地位，可如果别人打击了我的地位我该怎么办呢？你可以展示自己的地位，但这里有个更重要的警告，那就是**不要陷入地位饥饿**。地位饥饿的人是丑陋的：别人提个不同意见他就觉得被冒犯，他不放过任何一个打压新人的机会，他把任何动作都变成了一场表演——他可能拼命讨好上级也可能索性从社交中退出，那是一种极度不安全感。然而这里的悖论是：**地位饥饿只会让人更没地位。** 你要知道地位是个副产品，地位是他人对你的估值——这个估值可能波动、可能被误判，那不是你能决定的。你能直接追求的是能耐和贡献。**你无法直接抓住地位，但你可以成为一个值得拥有地位的人。**

咱们中国是个熟人社会，面子和地位的权重可能就更大。有人调侃说哪怕霍金来中国也得站起来给领导敬酒，其实不至于，但现实是即便他是霍金、而且不管在哪一国，他都得尊重别人的地位——因为打击地位对人的伤害实在太大了。**这不是策略，这是慈悲。** 谦卑的我只能讲出这些逻辑，而聪明的你必然会有更深的感悟。
`,j1=`# 071丨礼：社会互动协议

## 讲什么

**礼**——中国人说的"礼"的本意不是礼貌或礼仪，而是**等级秩序**（司马光《资治通鉴》开篇：天子之职莫大于礼，礼莫大于分，分莫大于名）。万维钢把它工程化：**礼是一套社会互动协议**，如同互联网通讯协议——为了提供共同预期，必须规定好什么输入对应什么输出、默认值是什么、权限到哪为止、出了异常怎么办。**礼的本质是把抽象的价值观翻译成具体的动作，是"尊重经济"的交易协议。**

## 解决什么真问题

解决陌生人互动的"猜来猜去"问题：几个互不相识的人第一次见面谈事，如果没有礼，每个人只能全凭猜测出招——这边领导还没开口，那边基层员工先说话还管王总叫老王，王总不理他，对方领导也愣住：王总的沉默是不同意、没听懂还是摆架子？有了礼，各方就可以按流程走：见面先介绍身份、该用尊称用尊称、握手寒暄、请坐递茶、说明来意、给一个发言的位置。**这些动作在后台发送了一个确认包：我看见你了，我知道你是有位置的人，我也是懂规矩的，我不会突然攻击你。**

## 核心论点

- **礼降低摩擦、同步情绪、提供确定性**。礼不是不自由，恰恰相反，没有礼人才最不自由。
- 礼存在的原因不是身份等级（天子诸侯早过时了），而是**人心的地位本能**：如果每个人都是不带情绪智能体，社会只需要自由市场；但人心有恶的一面，需要法律——而法律的执行成本很高且很多事犯不上。**礼存在于市场和法律的中间地带**：不靠警察执行，却能让人克制本能；不一定写进合同，却能让合作顺畅。经济学家布伦南和政治哲学家佩蒂特称之为**尊重经济**——在市场的看不见的手和法律铁拳之外，还有第三只手：人人都追逐他人的尊重、赞许与好名声，这本身就构成一套独立的社会激励机制。
- 礼这个协议可以拆成七层：**①身份确认**（你叫我王老师、王总、老王还是小王，就是在声明协议类型——名不正则言不顺）；**②地位确认**（安排次序：谁先做谁先说谁主持谁拍板）；**③握手程序**（规定互动如何开始如何结束——没有开场礼人不安，没有结束礼人悬着）；**④语翼协议**（任何信息都必须用礼包裹才能发出——"你错了"可以是善意指导也可以是羞辱挑衅，必须按协议包裹起来，礼不是压制真实，礼是让真实可以被听见）；**⑤错误修复协议**（道歉不是证明我无罪，而是修复你受损的地位——没有礼的社会一次冒犯会被永久记账，有礼关系才有重启按钮）；**⑥情绪协议**（葬礼让悲伤有了形式，婚礼让喜悦有了形式——没有仪式情绪是散的，有了礼情绪被组织成一件公共事实）；**⑦共同预期**（最根本的礼是不必说破大家也知道该怎么做——博弈论里的"聚焦点"：即便没有事先沟通，人们也能达成协调，因为大家都倾向于选择那个显著、自然、共同预期的方案）。
- 礼的厚度分四层：**行为层**（寒暄客套，负责初步预期）→**关系层**（朋友夫妻师生长期伙伴——关系够稳时行为层的礼可以压缩，低形式感本身成了亲密信号）→**情感层**（确认对方意图是真心为你好，就能穿透表面关系）→**制度层**（制度足够确定，办事就不需要先找关系打招呼）。

## 关键例证 / 金句

- 中国的"礼"vs 西方：西方有握手、排队、女士优先、餐桌礼仪、法庭程序、议会规则、学术引用、商务着装、隐私尊重——礼一点都不少，差别只在打包方式：中国把礼做成了一个能同时管社会伦理政治和人格修养的总操作系统；西方把它拆成了一堆模块。**中国传统之礼更强调关系中的人（我们是什么关系、我该如何表现），西方现代之礼更强调有边界的人（你的边界在哪、我怎样才不侵犯你的尊严）——一个怕人散掉，一个怕人被吞没。**
- 戈夫曼也提出了"脸"这个概念（互动中为自己声称的那份正面社会价值），他说互动礼仪的核心功能就是维护这套脸面秩序——这不就是中国人讲的"给面子"吗？
- 理被重新分配了：未经同意转发别人的聊天记录是失礼，开会迟到 15 分钟还不解释是失礼，用了别人的想法不署名是失礼，让下属在饭桌上陪酒是失礼——现在新的"礼"是隐私、知情同意、准时、透明、职业规范、程序正义和隐私权限。
- 山岸俊男：强关系网络中的礼提供安心，开放社会中的礼提供信任——其实都不是仪式表演，而是合作接口。
- **礼不是墙，是桥上的栏杆：他不确保你能走通，但让你敢走；他不能让人心纯净，但能减少互相猜疑；他让陌生人并肩，让意义有栖，让错误有归处，让信任有了土壤，不必每次都从零开始。**

## 如何应用

1. 把礼当协议用：见面先确认身份和关系类型（称谓就是协议声明）；安排次序明确地位；有开场有结束；信息用礼包裹再发出；出错了走错误修复协议（道歉、解释、补偿、公开澄清）。
2. 送礼的"厚度管理"：对陌生人靠行为层（客套寒暄），对好友可以压缩客套（低形式感本身就是亲密），对医患师生这类关系靠情感层（确认意图），对社会靠制度层。
3. 别把"直率"当借口：裸信息特别容易引发敌意，礼不是压制真实，礼是让真实可以被听见。
4. 现代新礼：隐私、知情同意、准时、透明、职业规范、署名——守住这些边界就是守礼。

---

## 全文（清洗后的课程转录，重点加粗+底纹）

欢迎来到现代思维工具课，我是万维钢。上一讲我们说地位是社会参与的第一性原理——哪怕你只是想跟人办一件最简单的事，比如问路借支笔，只要对面是一个有血有肉的人，你的大脑后台就得先跑一套定位程序：你会想他是谁、我是谁、他有没有把我当回事、我这句话会不会扫了他的面子？他刚才没接我的话是没听见还是看不起我？一般人还算好猜，万一对面这位性格怪、像原始部落的壮汉，一见面就把一条血淋淋的生鱼塞到你手里，你的大脑可能瞬间过载：接还是不接？接了是表示我臣服于他吗？不接他会不会立刻拔刀？如果每一次互动都得这样猜来猜去，那也太内耗太危险了。别着急，**人类早在几千年前就已经找到了这个问题的工程化解法，这就是咱们中国人说的礼。**

礼可不只是礼貌，更不是饭桌上谁坐主位、鱼头冲着谁、谁敬第一杯酒那套中年男子饭局玄学。**礼的本质是一套社会互动协议。** 想象几个互不相识的人第一次见面谈事：如果没有礼，每个人只能全凭猜测出招——有的人可能考虑得比较周到，有的人就会比较莽撞。这边领导还没开口，那边一个基层员工先说话，直接管王总叫老王；王总一看这么不给我面子，直接就没理他；然后对方的领导也愣了，心想王总的沉默是不同意、是没听懂、还是在摆架子啊？你说这还怎么谈？有了礼，各方就可以按照流程走：见面先介绍身份，该用尊称用尊称，握手寒暄两句，请坐递茶，说明来意，给一个发言的位置。这些动作看起来都是标准化的，但是你做和不做就是不一样，因为**它们在后台发送了一个确认包：我看见你了，我知道你是一个有位置的人，我也是懂规矩的，我不会突然攻击你，我们现在进入一种可预期的关系——我们是来谈事的，不是来搞地位斗争的。** 这就是礼的功能：**降低摩擦，同步情绪，提供确定性。** 所以礼不是不自由，恰恰相反，**没有礼，人才最不自由。**

中国号称礼仪之邦，可是很多现代人都把礼理解成了礼貌或者礼仪，认为无非就是客套。其实中国人说的这个"礼"的本意是**等级秩序**。想想司马光在《资治通鉴》开篇那三句话："天子之职莫大于礼，礼莫大于分，分莫大于名。"这里的"分"应该读"份"，就是名分和本分——说白了就是每个人所处的地位和与之对应的权利义务；"名"就是名号，也就是公侯卿大夫这些头衔。整句话的意思是：天下最重要的就是君臣上下的等级秩序不可逾越。那你说这不是对人的压迫吗？不是。**司马光真正想要的不是维护天子权威，而是秩序**：只有大家都尊重地位、君臣上下各守其份，才不至于发生三家分晋那样的混乱局面。礼的根本目的就是给社会提供确定性秩序。

其实礼存在的根本原因并不是身份等级（天子诸侯那些早就过时了），而是**人心的地位本能**。如果每个人都是不带感情的智能体，那这个社会就只需要自由市场这一种制度：大家都有点供给侧心态，你给钱我给货，用价格说话，根本不需要有自由交换之外的规矩。可是人心有恶的一面，总有人赖账、诈骗甚至抢劫，所以必须有一套强制性的管理手段，那就是法律。但法律的执行成本很高，而且很多时候犯不上：你请朋友帮个小忙，总不能说"按市场价我给你 300"；同事开会的时候当众抢白了你，你也不能立刻回一句"我保留追究法律责任的权利"；如果两家公司分个快递订单都要先找法务琢磨三天、签合同互相提防，效率就太低了。万维钢老师有一个洞见：他说中国这个熟人社会现在演化出来一个机制，就是一个地区的科技产业链上的多家企业可以形成超越法律合同的长期信任关系、能高效率深层协作——今天我给你干个活，明天你给我介绍一个单，很多事顺手就办了。**这个机制就是礼。礼存在于市场和法律的中间地带：他不靠警察执行，却能让人克制本能；他不一定写进合同，却能让合作顺畅。**

为什么礼能做到呢？**因为礼把抽象的价值翻译成了具体的动作。** 比如说"尊重他人"太抽象，但别人说话时看着他、不打断、回应他的重点，就具体了；"平等"太抽象，但排队轮流发言、不因职位高低羞辱人，就具体了；"信任"太抽象，但接了活按时交付、出了岔子先告知不藏着、占了便宜下次找机会还回去，就具体了；"爱"也太抽象，但争吵时允许喊暂停、重大时刻给一个仪式，就具体了。经济学家布伦南和政治哲学家佩蒂特有个说法：**在市场的看不见的手和法律铁拳之外，还有第三只手在悄悄推动着人——人人都追逐他人的尊重、赞许与好名声，这本身就构成一套独立的社会激励机制，他们称之为"尊重经济"。** 礼（仪之邦在古代理原本的说法其实是"礼之邦"）就是价值观的可执行文件，是尊重经济的交易协议。

有些人以为礼是中国特色的，其实西方的礼一点都不少：握手、排队、女士优先、餐桌礼仪、法庭程序、议会规则、学术引用、商务着装、职业边界、隐私尊重、道歉方式、婚礼葬礼，全都是礼。**中西方的差别只在打包方式：中国把礼做成一个总操作系统——礼是一个能同时管社会、伦理、政治和人格修养的超级概念；而西方则把它拆成了一堆模块，分别叫礼仪、规范、举止教养、公民性、正式典礼、仪式秩序、职业操守和人生戒律。** 或者从另一个角度说：中国传统之礼更强调关系中的人——我们是什么关系？我在这关系里该如何表现？西方现代之礼更强调有边界的人——你的边界在哪里？我怎样才不侵犯你的权力和尊严？这两者一个怕人散掉，一个怕人被吞没，但只是侧重点不同，而且可以互相理解。比如美国社会学家欧文·戈夫曼专门研究面对面互动，他的研究对象都是西方人，但是他提出了"脸"这个概念（代表一个人在互动中为自己声称的那份正面社会价值）。戈夫曼说互动礼仪的核心功能就是维护这套脸面秩序——这不就是中国人讲的"给面子"吗？

现在社会人人平等，一些传统的礼像跪拜请安早就消失了，饭局的座次也没那么严格。那是不是礼减少了？其实不然，**礼只是被重新分配了。** 过去的礼集中在身份等级和关系上，现在的礼则越来越多的分配到每个人都平等享有的边界与尊严上：未经同意转发别人的聊天记录是失礼；开会迟到 15 分钟还不解释是失礼；用了别人的想法不署名是失礼；让下属在饭桌上陪酒是失礼；用一句"为你好"来侵犯孩子的边界是失礼；把"熟"当借口无限索取也是失礼。而现在的"礼"是隐私、知情同意、准时、透明、职业规范、程序正义和隐私权限。**古代熟人社会需要礼，现代陌生人社会也需要礼。** 日本社会心理学家山岸俊男提出：强关系网络中的礼提供"安心"，而开放社会中的礼则提供"信任"——其实都不是仪式表演，而是合作接口。

咱们来看看这个接口的技术细节。我们干脆把礼想象成一套技术协议，就如同互联网通讯协议那样：为了提供共同预期，你必须规定好什么输入对应什么输出、默认值是什么、权限到哪为止、出了异常怎么办。我们可以把礼这个协议拆成七层。

**第一层是身份确认**：你是谁，我是谁，我们是什么关系。你一见面叫对方王老师、王总、老王还是小王，就是在声明你们之间的协议类型。孔子说"必也正名乎，名不正则言不顺"——这就是身份决定关系、关系决定交往模式。

**第二层是地位确认**，这是在安排次序：谁先做、谁先说、谁主持、谁拍板。有的地方饭局讲主位、陪位，谁先进酒、谁做总结，外人觉得过于讲究，但是明确地位可以降低冲突和不确定性。其实现代组织也一样，再平等也得讲次序：会议一开场主持人说"今天张总定方向，李工补技术细节，我负责记录，散会前要形成三个决定"——这不是官僚主义，这是让每个人都不必猜。

**第三层是握手程序**，规定互动如何开始、如何结束。互联网中两台机器要通信得先握手（互相发几个确认信号告诉对方我在线准备好了），人类也一样：握手、请坐、递茶、问候、告辞、送客，就是让双方同步"现在我们的会谈进行到了哪个阶段"。没有开场礼人不安，没有结束礼人悬着——你要是谈着谈着突然转身就走，对方感受到的不是信息交换完毕，而是"我刚才被抹掉了"。

**第四层是语翼协议**：任何信息都必须用礼包裹起来才能发出。你可能觉得直接给裸信息最好，殊不知裸信息特别容易引发敌意："你错了"这三个字可以是善意的指导，也可以是羞辱、是挑衅，更可以是亲密关系里的随口提醒。你必须按照一定协议把它包裹起来，比如说"我理解你的意思，但这里可能有一个问题"，对方才能知道你的意思。**不是压制真实，礼是让真实可以被听见。**

**第五层是错误修复协议**：人一定会说错话办错事，关键在于怎么补救——口头道歉、解释、补偿、请罪敬酒、书面致歉、公开澄清，都是社会的错误修复机制。**真正的道歉不是证明我无罪，而是修复你受损的地位。** 今天的社交媒体为什么戾气这么重？因为那里只有截图、围攻、翻旧账，没有一套面对面的错误修复协议。**没有礼的社会一次冒犯会被永久记账，有礼关系才有一个重启按钮。**

**第六层是情绪协议**：我该怎么表达情绪、我该感到什么？葬礼让悲伤有了形式，婚礼让喜悦有了形式，拜师礼让敬意有了形式，毕业典礼让一个人的身份转换被郑重承认。这不是形式主义，这是凝聚共识——**没有仪式情绪是散的，有了礼情绪被组织成一件公共事实。** 这有什么好处？他让你知道此刻你感受到的，别人也感受到了：你的悲伤喜悦和敬意不是孤零零的私人体验，而是被整个群体共同见证、共同承认的，这种确认本身就是一种支撑。

**第七层也是最本质的一层，就是共同预期**：最根本的礼是不必说破、大家也知道该怎么做。当一个人当众讲话的时候，大家的共同预期是别随便打断他；长辈出面了，大家的共同预期是要有所表示；熟人见面，大家的共同预期是要打招呼。为什么？**因为能协调才能合作。** 博弈论有一个重要概念叫**聚焦点**（经济学家托马斯·谢林的招牌学说）：哪怕没有经过事先充分的沟通，人们也能达成协调，因为大家都倾向于选择一个显著、自然、共同预期的方案。你和陌生人约好某天在纽约见面但没约时间地点，你会去哪呢？实验结果惊人地集中：多数人答"中午中央车站问询处的大钟下面"。**礼的终极作用就是提供了社会聚焦点。** 作为一个懂礼数的人，社会期待你按流程走：走流程就是告诉别人你仍然尊重各方、你没打算挑衅；而不走流程就是失礼，失礼就会引发冲突。只要大家都按礼的流程走，这个社会的冲突就能最小化、合作就能最大化。

那你说这么重要，可是有些关系特别好的熟人相处起来好像根本就不讲礼、说话毫不客气甚至互相损，这又是什么道理呢？这是一种二阶效应。礼按照可靠性的厚度又可以分为四层：**行为层**是称谓、寒暄、客套、语气、动作，它负责建立最初的预期；**关系层**是朋友、夫妻、师生、长期伙伴——一旦关系足够稳，行为层的礼就可以被压缩，好朋友可以省掉一切客套，这时候低形式感本身反而成了一种亲密的信号；**情感层**又高于关系层——一个医生说话很冲、一个老师对学生很严厉，但只要你确认了对方的意图是真心为你好，你就能穿透表面关系；更可靠的一层也就是**制度层**——如果制度足够确定、大家真的有法可依，我们办很多事就不需要先去找关系打招呼了。

所以礼不是死板的，而是灵活的。但这并不是说你内心充满善意就可以忽略礼。中国传统是儒家讲礼、秦制讲法，很多人认为讲法更高级，其实不然：秦制才 2000 年，而周制到今天有 3000 年——**礼比法更基本，更何况秦制的法也不是法治的法。礼是规矩，但他是一种温情脉脉的规矩，所以他更像是协议。** 礼能让别人和你相处的时候不必时刻处于防御状态，礼能让你在不确定的人际环境里快速建立起可供合作的确定性。**礼不是墙，是桥上的栏杆：他不确保你能走通，但让你敢走；他不能让人的心灵纯净，但能减少互相猜疑；他让陌生人并肩，让意义有栖，让错误有归处，让信任有了土壤——不必每次都从零开始。**
`,M1=`# 073丨激励相容：好的制度不应该指望人"畏威怀德"

## 讲什么

**激励相容**（incentive compatibility）——机制设计（mechanism design）的灵魂。波兰裔美国经济学家莱昂尼德·赫维茨 1972 年系统提出，因机制设计的开创性工作获 2007 年诺贝尔经济学奖。核心洞见：**好的制度既不应该要求人是好人，也不应该像对待坏人一样去控制人，而应该让普通人在追求自身利益的同时，顺手就能完成制度想要的事情。制度的最高境界不是战胜人性，而是让人性为秩序打工。**

## 解决什么真问题

破解"中国企业家在非洲开工厂"的管理困境：老板讲平等讲尊重、待遇很好，工人却迟到旷工、上班睡觉、零件不翼而飞；老板请本地监工对工人动辄打骂，工厂反而上了正轨。**难道是这些人配不上好的管理吗？** 万维钢的回答：传统中国琢磨了两千多年得出的主要是两套方案——儒家的教化（把人变成更好的人，让他怀德）和法家的赏罚（胡萝卜加大棒，让他畏威）。但现代世界既不是靠儒家也不是靠法家运行的，靠的是第三种东西——激励相容。

## 核心论点

- **机制设计是经济学的工程化**：传统经济学问正问题（给定规则，预测大家会怎么玩）；机制设计问逆问题（我想要什么结果，反推一套规则让大家自愿玩出这个结果）。
- 儒家依赖被统治者的素质，法家依赖统治者自己——其实都不是根本办法。**激励相容则说：我承认每个人都有自己的小算盘，我承认我根本不全知你做了什么，但我不在乎——我设计的这个局会让你的小算盘怎么打都打到我要的那个树上。**
- 儒家要人做君子，法家威胁人别做小人，**激励相容是让人做一个聪明的普通人**。
- **强激励 vs 弱激励**（任务类型决定）：算法性任务（结果单一、过程清晰、容易测量——送外卖、流水线装配）适合强激励（计件工资）；启发性任务（多维度、看判断、讲长期、靠协作——科学家、官员、医生）用强激励反而不好——你激励什么人们就拼命优化什么，对于多维度问题专门优化其中一个维度就会把整个工作给异化（按论文发表篇数给科学家发奖金，科学家就会拼命发表毫无意义的论文）。**指标越可靠奖金可以越直接，指标越粗糙文化和声誉越重要。**
- 显示原理（罗杰·迈尔森 1979 年数学证明，也因此获 2007 年诺奖）：任何复杂机制能够达成的结果，都存在一个等价的直接机制，使得每个人直接如实报告自己的私人信息最符合自己的激励——**理论上总可以把问题改写成一种制度设计，让说真话成为每个人的最优策略。**

## 关键例证 / 金句

- 销售虚假承诺的三种解法：儒家方案（金牌讲师搞价值观工作坊讲诚信文化——销售们听得热泪盈眶，回去该忽悠还怎么忽悠，毕竟提成才是真的）；法家方案（宣布谁在虚假承诺扣半年奖金严重开除——销售们开始玩文字游戏、把责任推给产品部门、把客户录音"不小心"删除）；**激励相容方案（重新设计提成结构：签约时发一部分、使用三个月后发一部分、续约时发一部分；客户因承诺不符提前流失，已发的佣金按比例追回）——你既不需要道德培训，也不需要像对敌人一样搞盯防，销售们自己就会采取对公司最有利的做法。**
- 经济学家爱德华·拉齐尔的研究：美国一家公司把汽车玻璃安装工的小时工资改成计件工资，生产率一下子提高了 44%——一半来自原有工人更努力，另一半来自原来懒散混日子的人被筛走了。**只要任务可测量，用钱激励就真好使。**
- 条件好 ≠ 激励到位：给工人的待遇好不好属于参与约束（解决"这份工作值不值得我来"），激励约束解决的则是"我来了以后为什么要认真干"。**工资能买到人到场，机制才能确保人努力。**
- 经济史学家希德尼·波拉德研究英国工业革命早期工厂：最初的工人并不会天然适应考勤、重复劳动、外部节奏和流水线纪律——**现代工人是被一整套制度训练出来的。**
- 打骂管理的坏处：监工在产量就在，监工一走工人想办法找补；打骂还会持续筛掉那些有尊严有能力有选择余地的工人，留下最能忍气吞声、最会看人脸色、最会躲避惩罚的人。
- **激励相容工厂制度四字诀：威、利、信、德**——威是规则确定性（惩罚的确定性而非暴力性），利是利益（让努力尽快变成钱），信是承诺可信（短周期工资奖金，甚至日结），德是身份生成（晋升阶梯、小队激励）。
- 思想源头：大卫·休谟 1741 年"在设计任何政体时应当假定每个人都是无赖"；麦迪逊《联邦党人文集》第 51 篇"如果人都是天使就不需要政府""必须用野心来对抗野心"——**制度设计不能把公共福祉压在掌权者的好心上。** 邓小平 1980 年："好的制度可以使坏人无法任意横行，制度不好可以使好人无法充分做好事，甚至会走向反面"——这句话颠倒传统中国先选好人再办好事的思路，说的就是激励相容。

## 如何应用

1. **设计制度而非改造人**：遇到管理难题先问"这个局的规则是什么"，而不是"怎么让人变好"或"怎么吓住人"。
2. **区分任务类型**：算法性任务上强激励（计件、按单结算）；启发性任务上用弱激励（高底薪、长期合约、自主权、同行声誉、身份荣誉、成长通道、清晰使命）——高科技公司不搞考勤不随便罚款，给一笔足够高的年薪让员工不用每天算计挣多少钱；大学和研究机构给你终身教职让你大胆探索。
3. **工厂/团队管理四步**：先立威（规则事前写清楚、过程可记录、处罚可预期、一视同仁）→加利（可测量任务让努力变钱）→建信（短周期结算）→养德（晋升阶梯、小团队激励——五到十人小队有共同产量目标和考核，完成全队拿奖金，工人会互相监督）。
4. **识别伪激励**：别把"条件好"当成"激励到位"；别用打骂（它在筛选最坏的人）；警惕强激励异化多维任务。

---

## 全文（清洗后的课程转录，重点加粗+底纹）

欢迎来到现代思维工具课，我是万维钢。传说有个中国企业家在非洲开了家工厂，雇佣了很多当地工人。他对工人讲平等讲尊重、待遇好，绝对不搞以前殖民者那一套。可是没过多久，他就发现自己这一套行不通：工人很愿意进他的厂，可是来了没几天就开始迟到旷工、上班睡觉，稍微不留神就消失一会跑去抽烟，车间里的零件还不时的不翼而飞。中国老板就只能使了个下策：招几个本地监工对工人严格管理，动辄打骂，手段可以说是非常凶狠，结果工厂上了正轨、产量稳定、出货准时。恐怕每个老板都或多或少的有过相关的体验：**你尊重工人，工人当你好欺负；你严厉待他们，他们反而老老实实干活。** 这真是"畏威而不怀德"啊。难道说这些人配不上好的管理吗？

先别着急下判断。每个人都有本能的欲望和私利，让一群人凑在一起好好做事本来就是一件难事、本来就是一个奇迹。要说如何管理冲突、达成合作，传统中国琢磨了 2000 多年，得出的主要是两套解决方案：儒家的办法是**教化**，要把人变成更好的人、让他怀德；法家的办法是**赏罚**，也就是胡萝卜加大棒、让他畏威。但这一讲我要说的是：**现代世界既不是靠儒家、也不是靠法家运行的，他靠的是第三种东西，叫做激励相容。**

这个洞见是：**好的制度既不应该要求人是好人，也不应该像对待坏人一样去控制人，而应该让普通人在追求自身利益的同时，顺手就能完成制度想要的事情。制度的最高境界不是战胜人性，而是让人性为秩序打工。**

激励相容这个词最早是波兰裔美国经济学家莱昂尼德·赫维茨在 1972 年系统提出来的，他因为机制设计的开创性工作获得了 2007 年诺贝尔经济学奖。传统经济学问的是正问题——给定一套规则，你能不能预测大家会怎么玩（比如博弈论的原理）；机制设计问的则是逆问题——**我想要一个什么样的结果，你能不能给我反推一套规则，让大家自愿玩出这个结果。机制设计是经济学的工程化。** 以前人们经常抱怨经济学家像预报不准天气的气象学家，现在经济学家终于可以像工程师一样建造一个有用的东西了。而激励相容就是机制设计的灵魂：他们能不能造出一种机制，让一个自私自利、精于算计的普通人在这里最明智的选择就是做对系统有利的事？能不能在我这个局里，君子做好事不必再付出额外的牺牲，小人也不得不做君子的事？

这跟儒家法家可不在一个维度上。儒家是君子的推己及人，假定人性可以无限拔高，可以说早在战国时代就被人看出来是太过天真浪漫了；法家假定人性可以被赏罚操控，这已经比儒家高一层，但他依然需要一个全知全能的统治者——他要看得清真相、断得了功过、行得了赏罚，而且自己还不腐败。**儒家依赖被统治者的素质，法家依赖统治者自己，其实都不是根本办法。** 而激励相容则说：我承认每个人都有自己的小算盘，我也承认我根本不全知你做了什么，但我不在乎——**我设计的这个局，会让你的小算盘怎么打都打到我想要的那个树上。**

你说这可能吗？真有这么好的制度吗？其实现代政府治理、公司管理的主流用的就是这样的制度。

举个例子，想象有一家卖企业软件的公司最近遇到一个问题：销售为了冲业绩，经常给客户许诺一些产品还没做出来的功能。客户一高兴就当场签约，可是产品上线客户发现根本就没有那些功能，觉得被骗了，要么投诉要么不续费，公司口碑崩塌。请问你是老板的话，你怎么办？儒家的方案是请金牌讲师搞个价值观工作坊，大讲诚信文化、讲客户至上、讲不要给公司抹黑——销售们听得热泪盈眶，回去之后该怎么忽悠还是怎么忽悠，毕竟提成才是真的。法家的方案则是宣布谁在虚假承诺扣半年奖金、严重的开除——结果销售们开始玩文字游戏（把口头承诺写成"我们正在积极探索这个方向"）、把责任推给产品部门、把客户录音"不小心"删除；你抓了几个典型，剩下的销售却更精了。**激励相容的方案则是重新设计销售的提成结构：从今往后销售签单后不再一次性拿到全部佣金，改为分阶段发放——一部分在签约时发，一部分在使用三个月后发，一部分在续约时发；如果客户因承诺不符而提前流失，已经发的佣金按比例要追回。** 这样你既不需要道德培训，也不需要像对敌人一样对自己的员工搞盯防——**销售们自己就会采取对公司最有利的做法。**

**儒家要人做君子，法家威胁人别做小人，激励相容则是让人做一个聪明的普通人。** 激励相容并不是没有奖惩，这里也用奖金、也处罚、也解雇，但是区别在于：法家的奖惩是外部的棍子，激励相容的奖惩是机制的部件；法家是在行为之后处理人，激励相容是在行为之前设计局；法家问"怎样让人不敢坏"，激励相容问"怎样让坏不再划算、让好不再吃亏"。

咱们回头看那个非洲工厂。中国老板犯的第一个错误是把"条件好"当成了"激励到位"——**殊不知条件好和激励到位完全是两码事**：你给工人的待遇好不好属于**参与约束**，解决的是"这份工作值不值得我来"的问题；而**激励约束**解决的是"我来了以后为什么要认真干"的问题。工资能买到人到场，机制才能确保人努力。经济史学家希德尼·波拉德研究过英国工业革命早期的工厂，发现最初的工人并不会天然适应考勤、重复劳动、外部节奏和流水线纪律——**现代工人是被一整套制度训练出来的，你得有机制设计才行。** 打骂管理是老板犯的第二个错误，因为那不是一种有效的激励约束：工人有办法适应打骂管理——监工在产量就在，监工一走工人会想尽办法找补；打骂还会持续筛掉那些有尊严、有能力、有选择余地的工人，留下最能忍气吞声、最会看人脸色、最会躲避惩罚的人。你产量暂时是稳定了，可是未来还会有诉讼、罢工、品牌污点、骨干流失、质量问题——后患无穷。

结合学术界的研究成果，一个激励相容的工厂制度，简单说就是四个字：**威、利、信、德**。第一步先有**威**——这威不是恐惧监工的棍棒，而是规则一定兑现：迟到、缺勤、质量事故、安全违规怎么处理，要做到事前写清楚、过程可记录、处罚可预期，而且一视同仁、主管也受约束。**规则的有效性取决于惩罚的确定性，而不是惩罚的暴力性，更不是人格侮辱。** 第二步加**利**——只要任务足够简单、结果足够可测，就要让努力尽快变成钱。根据劳动经济学家爱德华·拉齐尔的研究，美国一家公司把汽车玻璃安装工的小时工资改成计件工资，生产率一下子就提高了 44%——其中一半来自原有工人变得更努力，另一半来自原来懒散但混在小时工资里的人被筛走了。**只要任务可测量，用钱激励就真好使。** 第三步有了利还得有**信**——很多发展中国家的工厂的问题不是工人不懂利，而是工人不信红利：老板说月底发奖金，可工人心里想月底你会不会说质量不合格、会不会找理由扣工时、会不会说下个月一起发？而且人天然倾向于短期利益，工人有时自己也控制不住自己，你跟他说明底发奖金他会觉得这个等待过程太漫长了。**如果一个厂的信用还不足，工资和奖金就最好是短周期的，甚至可以日结。** 第四步，**德**会在制度里慢慢长出来。我们多次讲过，最好的激励是身份认同：你可以给工厂设计一套晋升阶梯——学徒、操作工、熟练工、质检员、小组长，每一级都有工资差。短期奖金买努力，长期身份买忠诚。还有一个办法叫**小队激励**：不要让一个监工盯 20 个互不相干的人，而是把五到十个人组成一个小队，小队长有额外津贴；要点是小队有共同产量目标、共同的质量和出勤考核，完成了全队得奖金——好处是工人会互相监督，多劳多得是大家的，谁长期偷懒谁就会被小队排斥。有研究发现一家服装厂从个人计件转向团队制，工人生产率平均提高了 14%；还有实验证明团队激励会同时改变工人的努力程度和团队人员组成。

这里所谓的威和利并不是法家那种赏罚，信和德也不是儒家的教化——威是规则确定性，利是收益函数，信是承诺可信，德是身份生成。**关键在于这些属性是对制度的要求，而不是对员工人品、也不是对管理者心力的要求。**

激励相容是一个现代概念，但是相关的思想可不是 20 世纪才出现的。中国先贤早就知道罚和教化不能解决根本问题：《道德经》说"法令滋彰，盗贼多有""不尚贤，使民不争；不贵难得之货，使民不为盗"；《论语》说"乡愿，德之贼也"。其实说的就是赏罚会让坏人升级作弊技术，教化会让小人冒充好人、让真好人也吃亏。对这些问题的工程化解就是现代化的根本制度突破。最早的曙光也许可以追溯到 1741 年哲学家大卫·休谟在《论议会的独立性》一文中说破：**在设计中任何政体时，应当假定每个人都是无赖，除了私利别无目的。** 1788 年美国制宪运动核心人物、后来的第四任总统詹姆斯·麦迪逊在《联邦党人文集》第 51 篇里说得更直接：**"如果人都是天使，就不需要政府了"**——他还说"必须用野心来对抗野心"。你要知道那个年代西方主流意识形态还是崇尚美德的，休谟和麦迪逊这番见识可谓是破天惊。这不是悲观主义，也不是真的认为所有人都是无赖，**他们说的是：制度设计不能把公共福祉压在掌权者的好心上。超越儒家和法家、让人不必非得是好人、让人做好人也不必吃亏，这才是现代化制度。**

那么问题来了：如果一个系统的参与者就是无私的高素质的好人呢？你搞个机制设计，非得像对待流水线工人那样给人家发计件工资，这不是侮辱人吗？那你就误解了——计件工资是一种强激励，而激励相容理论恰恰不主张对什么场景都用强激励，有时候你就得用弱激励。具体说来：一份工作如果是**算法性任务**（结果单一、过程清晰、容易测量，比如送外卖和流水线装配）就适合强激励；而那些属于**启发性任务**的工作（特点是多维度、看判断、讲长期、靠协作，比如科学家、官员、医生这些岗位）使用强力反而不好。这是因为你激励什么人们就会拼命优化什么，而对于多维度问题，专门优化其中一个维度就会把整个工作给异化——**说白了就是如果你按论文发表篇数给科学家发奖金，科学家就会拼命发表毫无意义的论文。** 这里涉及到多任务委托代理问题和古德哈特定律，咱们后面再详细讲。要点在于：这种多维度复杂的任务最好是自我驱动、讲究内在动机——根据自我决定理论，一个激励相容的制度应该给人提供自由宽松的管理环境。但弱激励不等于没有激励：弱激励是用更软、更长、更立体的方式激励人，比如高底薪、长期合约、自主权、同行声誉、身份荣誉、成长通道、清晰使命等等。现实中高端人才的管理正是这样：你看那些高科技公司就不搞什么考勤、也不会动不动就罚款，都是给一笔足够高的年薪，让员工不用每天算计自己挣多少钱；再看大学和研究机构，只要你证明了自己的能力，就给你一个终身教职，你从此都不用担心工作安全，可以大胆地探索感兴趣的东西。**激励相容理论认为：指标越可靠，奖金可以越直接；指标越粗糙，文化和声誉越重要。**

那你说难道制度设计可以解决一切问题吗？未必，但完全有希望。机制设计的根本困难在于信息不对称——干活的人到底干了多少活，管理者看不见。然而在 1979 年，美国经济学家罗杰·迈尔森从数学上证明了一个被称为**显示原理**的定理：大意是说，任何一个复杂机制能够达成的结果，都存在一个等价的直接机制，使得每个人直接如实报告自己的私人信息最符合自己的激励。说白了就是：**理论上总可以把问题改写成一种制度设计，让说真话成为每个人的最优策略。** 迈尔森据此也得到了 2007 年的诺贝尔经济学奖——所以至少在数学上，这个世界有希望变得更好。

儒家对好人吃亏有无尽感叹，法家对信息不对称束手无策，而**现代工业文明既不是靠美德、也不是靠胡萝卜加大棒建立起来的，它靠的是可执行的日常秩序。** 你千万别说中国只能搞儒家和法家——邓小平早在 1980 年就说过一句非常现代的话："好的制度可以使坏人无法任意横行，制度不好可以使好人无法充分做好事，甚至会走向反面。"他这句话颠倒了传统中国"先选好人再办好事"的思路，其实说的就是激励相容。
`,$1=`# 074丨柠檬市场：不要直接扬善惩恶，要让好坏可验证

## 讲什么

**柠檬市场**（lemon market）——美国经济学家乔治·阿克洛夫 1970 年提出的概念（凭此获 2001 年诺贝尔经济学奖）。最初研究二手车市场：在美国俚语里坏车叫 lemon（柠檬），买二手车最怕买到柠檬。二手交易天然如此——卖家知道车况，买家不知道，这就是**信息不对称**。信息不对称会让市场发生"死亡螺旋"：好车退出、坏车留下、价格进一步下降、更多好车退出——**劣币驱逐良币，直到市场变成柠檬市场。**

## 解决什么真问题

解释"第一学历崇拜"和"学位贬值"：现在好单位招聘特别在意应聘者本科是不是 985/211，硕士博士学历含金量大不如前。硕士可以水、博士可以混、导师可以挂名、论文都可以买——**学位证书和学术发表正在变成一个柠檬市场。** 柠檬市场最可怕的地方并不是这里有坏货，而是好货无法被识别出来、所以只能离开。这不是道德问题，这是信息工程问题。

## 核心论点

- **死亡螺旋推演**：买家并不傻——我知道市场有好车也有坏车，既然分不出来，我不可能按好车出价，一定会把出价降低一些；如此一来好车主不愿意卖了（"我的车明明很好，你却只给平均价，我不亏了吗"），坏车主还是愿意卖（很乐意跟好车平均）。于是好车退出坏车留下，坏车比例越来越高，买家越来越不信任市场，价格进一步下降，更多好车退出——这是一个不会自己停下来的循环。
- **柠檬市场的解药——信号机制**（现代文明发明的一系列避免市场柠檬化的机制，基本思想是建立某种信号让真实品质能被识别出来）：①**卖家发昂贵的信号**（敢不敢提供保修、允不允许退货——可追责的承诺）；②**第三方认证**（卖车之前找修车铺检查出可信报告；食品药品有政府监管、专业技术有行业标准和民间评级；最古老最有效的第三方认证是学术界的同行评议）；③**可测量的声誉机制**（交易记录和用户评分）；④**纠纷解决和申诉机制**（被骗一次可以，但不能变成对整个系统都不信任）。
- **程序正义**：这一整套把不可见变为可见、可验证、可纠错的机制，更深层的名字是程序正义——**不先问谁该赢谁该输，而是先把规则说清、把证据摆开、把过程公开、把理由讲明、给错误留下可申诉和可纠正的通道。柠檬市场问的是"我凭什么相信你卖的是好货"，程序正义问的是"我凭什么相信你不是在黑箱里整我"。**
- **制度的使命**：制度的第一使命不是惩罚坏人，而是留下好人。你可以承受一定的误判，最危险的不是误判，而是输的人觉得"反正你们早就定好了"。泰勒 1984 年对芝加哥 1575 名居民的电话访谈证明：**人服从法律不只是因为害怕惩罚，更重要的是人必须相信这套法律程序是公正、中立、可解释、尊重人的。**

## 关键例证 / 金句

- 论文工厂研究：截至 2022 年 6 月所有学术期刊中被撤稿且被认定来自论文工厂的 1182 篇论文，几乎全部相关作者都来自中国机构，其中超过四分之三论文的第一作者单位是医院。医生的首要任务不是治病救人吗？但职称评价体系要求他们必须写论文，于是他们就写假论文——**结果全体中国医生写的论文都被降级了信任度。**
- 淘宝和支付宝：2003 年你不敢买千里之外小店的商品——打钱他不发货怎么办？他说发了货你不付钱怎么办？淘宝的关键发明是**担保交易**（买家先付钱到第三方、卖家发货、买家确认收货之后钱再给卖家），加上店铺评分、买家评价、聊天记录、物流记录、退换货规则和平台仲裁——**陌生人之间就有了最低限度的信任。** 注意这不是说淘宝上没有假货，关键是假货并没有把好货驱逐出去——消费者大体知道信号怎么读：你花 139.9 元包邮买一双"名牌同款"鞋，你心里知道它大概是什么东西；下次要买正品你照样回这个平台去旗舰店多花点钱。**只要真假不混淆，有假货不等于柠檬市场。**
- 百度医疗广告：还有多少人相信百度上的医疗广告？如果你是个正规大医院、疗效真的好，你会去百度做广告吗？——早就被莆田系医院搞成了柠檬市场。
- 司法程序最反直觉的地方：明明坏，程序却要求证据；明明希望马上惩罚，程序却要听辩护；明明舆论已经定性，程序却说还要审——**因为放过一个坏人对系统的伤害，远小于错杀一个好人。你必须给好人安全感，他们才能留下来。**
- 公司晋升考核同理："我们奖励真正有贡献的人"这句话不可操作；可操作的问题是：什么叫贡献？谁来评价？评价者有没有偏心？短期贡献和长期贡献怎么平衡？个人贡献和团队贡献怎么区分？**没有这些东西，奖励贡献就会变成奖励"会表现贡献"的人——那就是公司里的柠檬化：真正做事的人沉默退出，会邀功的人越来越多。**
- 现代制度的天才之处：**它放弃了对结果善恶的直接执着，转而建设让善恶能够被自动暴露的程序。** 证监会不直接判断哪家公司是好公司，它只要求强制信息披露让市场去判断；食药监局不直接判断哪个药是好药，但它要求药品疗效拿出实质性证据让试验和数据说话；法院不直接判断谁是好人，它设立程序让证据可以质证。**扬善惩恶是前现代社会的愿望，可验证性是现代制度的技术。**
- **现代人不相信"相信我"，现代人说"这是你检查我的方法"。**

## 如何应用

1. **识别柠檬化信号**：一个市场若出现"好货无法被识别、只能离开"，就是柠檬化的开端——人才市场（真有能力的人无法证明自己，会包装简历刷面试题的人越来越多）、内容平台（点击率情绪刺激最容易被看见，读者被标题党包围）、医疗健康（广告有水分，不能指望真药打败假药）。
2. **自证可验证性**：与其宣称"我很优秀我很努力我很善良"，不如用作品、记录、信用、交付、长期合作关系、可复盘成果和别人愿意持续托付给你的责任说话——**现代人不说"相信我"，现代人说"这是你检查我的方法"。**
3. **做制度设计者**：让品质可见——提供保修退货、引入第三方认证、建立可测量声誉机制、设立纠纷解决通道；别指望道德号召消灭坏货，把功夫花在"让好坏可验证"上。
4. **解读求职信号**：为什么用人单位信高考？因为高考是程序正义的考试（题目封存、统一时间、统一标准、匿名阅卷、成绩公开可查）。水货博士每一个都在让有真学问的人吃亏。

---

## 全文（清洗后的课程转录，重点加粗+底纹）

欢迎来到现代思维工具课，我是万维钢。你注意到没有，现在很多好单位招聘都特别在意应聘者本科是哪个学校毕业的——本科达没达到 985 或者 211 决定了人才的档次，这叫**第一学历崇拜**。至于说硕士和博士学历含金量已经大不如前。曾几何时，硕士博士是非常受尊敬的称号——研究生顾名思义是做研究的人，一个人能读到硕士说明受过高级训练、有点研究能力，那怎么现在就不是能力了呢？一方面当然是现在有硕士博士学位的人太多了，高学历已经不再是一个稀缺的信号；但另一方面确实人们不再充分认可这些学位所代表的水准：**读硕士可以水，博士可以混，导师可以是挂名的，论文都可以买**——这样的学位读下来，除了有耐力延迟就业还能证明什么呢？你看今天居然连官方都承认毕业论文有一个查重环节，也就是上网检索一番看论文是不是抄的。可是你想想这不荒唐吗？只要论文是你自己写的，就算不是特别有新意的研究也不至于说能查出重来啊。而且有些学校更是规定只要查重率不超过一定的数值论文就算没问题，等于默认你可以抄一部分——这不斯文扫地吗？现在有了 AI 更方便了：学生用 AI 写论文、老师用 AI 审稿、学校用 AI 查重、学生再用 AI 降重——**所有人都在装模作样，你们互相给谁看呢？** 这个学位读着还有什么意义？要不怎么有人说之所以有第一学历崇拜，是因为人们认可高考的选拔功能、但是不认可高等院校的培养能力。

这不仅是教育问题，这还是经济学问题。**学位证书和学术发表正在变成一个柠檬市场。**

柠檬市场是美国经济学家乔治·阿克洛夫在 1970 年提出的概念，他凭此拿到了 2001 年诺贝尔经济学奖。阿克洛夫最初研究的是二手车市场：在美国俚语里坏车叫 lemon（柠檬），买二手车最怕买到柠檬。然而二手车交易天然就是如此——**卖家知道车况，买家可不知道，这就是信息不对称。** 我们可以推演一番，信息不对称会让市场发生什么。买家并不傻：我知道市场上有好车也有坏车，可是既然我分不出来，我就不可能按照好车给你出价，我一定会把出价降低一些，这样万一买到坏车我的损失小一些。但是如此一来好车主就不愿意卖了：我的车明明很好，你却只给一个好车坏车的平均价，我不亏了吗？当然坏车主还是愿意卖，他很乐意跟好车平均。于是好车退出、坏车留下。时间长了坏车比例越来越高，买家越来越不信任市场，于是价格进一步下降，于是更多好车退出、更多坏车留下——这是一个不会自己停下来的循环，经济学家称之为**死亡螺旋**：劣币驱逐良币，每一圈市场就更坏一点，直到良币消失，最后市场就变成了柠檬市场。

有了这个眼光，你会发现很多市场都是柠檬市场：招聘市场里真正有能力的人无法证明自己的能力，而会包装简历和会刷面试题的人就越来越多；内容平台上点击率和情绪刺激最容易被看见被评分，读者就会被标题党、冲突和极端表达包围；医疗保健领域治疗需要长期验证、患者不知道广告有多少水分，你就不能指望真药打败假药。现在问题最严重的可能就是学术界：科研经费和学术头衔是政府发的，但是政府不知道哪个研究做得好，就只能看论文数量和影响因子，于是搞科研变成发论文。一项研究分析了截至 2022 年 6 月所有学术期刊中被撤稿、并且被认定来自论文工厂的 1182 篇论文，发现**几乎全部相关作者都来自中国机构，其中超过四分之三论文的第一作者单位是医院。** 医生的首要任务不是治病救人吗？但是我们的职称评价体系要求他们必须写论文，于是他们就写假论文——结果是全体中国医生写的论文都被降级了信任度。现在还有人相信百度上的医疗广告吗？如果你是个正规大医院、疗效真的好，你会去百度做广告吗？——早就被莆田系医院搞成了柠檬市场。

**柠檬市场最可怕的并不是这里有坏货，而是好货无法被识别出来、所以只能离开。这不是道德问题，这是信息工程问题。**

柠檬市场是有解的。现代文明早就发明了一系列避免市场柠檬化的机制，基本思想是**建立某种信号，让真实品质能被识别出来**。一个办法是**让卖家主动发一个昂贵的信号**：比如说既然你的东西好，你敢不敢提供保修？敢不敢允许退货？这是一种可追责的承诺。还有一个办法是**找第三方认证**：比如卖车之前找个修车铺把车做一番检查出一份可信的报告。现在食品药品领域有政府机构监管、专业技术领域有行业标准和民间评级。其实最古老也最有效的第三方认证就是学术界的同行评议：你的研究够不够分量，不用看什么影响因子、什么引用数量，你的同行最清楚——只是同行评议意味着学术共同体自治，而自治意味着行政权力的让渡。第三个办法是**搞可测量的声誉机制**，比如交易记录和用户评分，互联网时代简单有效。然后你还需要**纠纷解决和申诉机制**，让坏交易有地方处理——被骗一次可以，但是不能变成对整个系统都不信任。现实中的二手车市场就比阿克洛夫描述的原始状态好多了，这是因为我们有车辆识别码、事故记录、维修记录、保修制度、问题车退换法和车辆历史报告。

中国最漂亮的成功案例大概是淘宝。你想想，如果在 2003 年有一家远在千里之外的小店卖一个你从来没使用过的商品、价格还不便宜，你敢买吗？你打了钱他不发货怎么办？对方也会说他发了货你到时候不付钱怎么办？双方都担心对方是柠檬，交易就做不起来。**淘宝和支付宝的关键发明是担保交易：买家先把钱付到第三方，卖家发货，买家确认收货之后钱再给卖家。** 再加上店铺评分、买家评价、聊天记录、物流记录、退换货规则和平台仲裁，陌生人之间就有了最低限度的信任。请注意，这不是说淘宝上没有假货，恰恰相反淘宝拼多多各种网络平台一直都有假货和山寨产品，但这里的关键是**假货并没有把好货驱逐出去**——因为消费者大体知道信号怎么读：你花 139.9 元包邮买一双"名牌同款"鞋，你心里知道它大概是什么东西；下次要买正品你照样回这个平台，只是去旗舰店多花点钱。**只要真假不混淆，有假货不等于柠檬市场。** 这一切都不是完美的，但是我们大约可以说：互联网平台让人变得更诚实了一点。

柠檬市场的解药——这一整套把不可见变为可见、可验证、可纠错的机制，更深层的名字是**程序正义**。所谓程序正义就是：**不先问谁该赢谁该输，而是先把规则说清、把证据摆开、把过程公开、把理由讲明、给错误留下可申诉和可纠正的通道。** 柠檬市场问的是"我凭什么相信你卖的是好货"，程序正义问的是"我凭什么相信你不是在黑箱里整我"——这两个问题的答案都是把不可见的品质、动机和判断过程转化为可见的公共信号。正如治理柠檬市场不是为了杜绝坏货而是为了把好货留下，**程序正义也不是为了追求结果公平，而是为了让哪怕是输了的人也承认这个游戏值得继续玩下去。**

**制度的第一使命不是惩罚坏人，而是留下好人。** 你提供的是优质产品可能因为定价高没卖出去，所以你没有赢，但没关系——只要你相信这个系统能把你和坏货区分开，你就愿意留下，也许主动降价、也许继续打磨产品；可是如果你觉得无论你多好都没人看得见、这里的好评是刷的、晋升是关系户、判决是黑箱、市场是骗子的天下，那你就会退出。**你可以承受一定的误判，最危险的不是误判，而是输的人觉得"反正你们早就定好了"。**

耶鲁大学社会心理学家汤姆·泰勒长期研究这样一个问题：人为什么服从法律？是因为害怕惩罚吗？泰勒做了大量的研究，他在 1984 年对芝加哥 1575 名居民做电话访谈、一年后又回访其中随机抽取的 804 人，把答案写成了一本经典著作《人为什么服从法律》。答案是：**人并不只是因为害怕，更重要的是人必须相信这套法律程序是公正、中立、可解释、尊重人的。** 可是什么样的司法制度才能满足这些要求呢？法庭不能直接知道事实真相，但是你可以确保产生结果的过程是公平的。现代司法的全部努力不再直接宣布真相上，而在保证逼近真相的程序不被污染：证据规则规定什么可以上堂什么不能、控此挑战，法官必说明判决理由，判错了有上诉有复核。这套程序最反直觉的地方就是它有时候会让你很不爽：明坏，程序却要求证据；明希望马上惩罚，程序却要听辩护；明舆论已经定性，程序却说还要审——这是因为**放过一个坏人对系统的伤害，远小于错杀一个好人。你必须给好人安全感，他们才能留下来。** 安全感来自程序正义是一个工程化的过程，它有时会犯错，但它是可操作、可验证、可纠错的。

公司晋升和考核也是这个道理。老板说"我们奖励真正有贡献的人"——这句话不可操作。可操作的问题是：什么叫贡献？谁来评价？评价者有没有偏心？短期贡献和长期贡献怎么平衡？个人贡献和团队贡献怎么区分？看得见的贡献和看不见的贡献怎么平衡？被评价者能不能挑战错误判断？**没有这些东西，奖励贡献实际上就会变成奖励"会表现贡献"的人——那就是公司里的柠檬化：真正做事的人沉默退出，会邀功的人越来越多，老板以为自己是在扬善惩恶，其实是在奖励信号操纵。** 好公司一定要有自己的价值观，但日常管理不能靠高喊价值观。好的管理靠的是：建立清晰的事前晋升标准、可复核的贡献证据、多元评价、决策理由公开、被评价者可申诉——目标是**把贡献这个原本主观的事物变得可验证**。

学术评议也是同样的逻辑：科学共同体不会说"我们奖励真理惩罚谬误"——内行都知道真理不是马上可见的，而且今天的谬误可能是明天的真理、今天的突破也可能只是明天的撤稿。科学界运行靠的是一套程序：实验可重复、方法公开、数据透明、同行评议、结论被引用、错了能撤稿。这些都不是真理本身，而是接近真理的验证机制。每一个新成果发布出来，谁也不能确保论文说的绝对是对的，但是这个程序能让科学整体不断地往前走、能让好的结论留下、让错误的结论被淘汰。**科学的伟大不是科学家高尚，而是科学错误能被暴露。**

还有为什么用人单位相信高考？因为高考是一个程序正义的考试：题目封存、统一时间、统一标准、匿名阅卷、成绩公开可查。高考当然不完美——这里有很多偶然因素，相差一分的两个同学我们实在没有理由相信他们就应该一个考上 211、一个考不上；可是只有这种全凭分数说话才能让人服气。对比之下，硕士和博士学位的公信力可就差多了：每个官员都可以读个什么在职博士，**每多一个水货博士都是在让有真学问的人吃亏。**

再结合我们上一讲说的激励相容，你会有一个洞见：**现代社会变好，靠的不是要求大家做好人，而是要求大家有一个好制度。** 你可以要求你自己做好人，但是大家做好人是无法直接要求的。你奖励好人惩罚坏人，只会让很多人变成伪君子、让坏人藏得更深。更何况凭什么由你来奖励和惩罚？就因为你拳头大吗？难道你就不会看错吗？难道你就不会腐败吗？**好的制度不去直接要求人，却可以让好人不吃亏、愿意留下来，让好人能够自动显现，让坏人也理性地去学做好人。现代制度的天才之处是它做了一件极其反直觉的事：它放弃了对结果善恶的直接执着，转而建设让善恶能够被自动暴露的程序。** 证监会不直接判断哪家公司是好公司，它只要求强制信息披露、让市场去判断；食品药品监督管理局不直接判断哪个药是好药，但它要求药品疗效拿出实质性证据、让试验和数据说话；法院不直接判断谁是好人，它设立程序让证据可以质证。**所以严格说来，成熟制度不是扬善惩恶的机器，而是把善恶变得可验证的机器。扬善惩恶是前现代社会的愿望，可验证性是现代制度的技术。**

现代化让我们不再幻想找到所有好人把他们安在合适的位置上，不再幻想消灭所有坏人让世界立即变好。我们承认人性的难以改造，承认信息的有限，承认判断者本身也是有偏见的参与者，然后我们设计程序，让真品质有办法显现、让欺骗变得不划算、让错误能被发现和纠正。**我们学会了不去直接改造人，而是改变信息结构——这大约是现代化最深的智慧之一。** 我越往后写就越感到工程化和可操作是我们这个课程的隐藏主题，这其实也是现代化的主题。一个现代人根本就不应该说"我很优秀我很努力我很善良"——为了让人家可操作，你自己得可验证。你得用作品、记录、信用、交付、长期合作关系、可复盘成果和别人愿意持续托付给你的责任说话。**现代人不说"相信我"，现代人说"这是你检查我的方法"。**
`,F1=`# 075丨外部性：为什么自由社会也需要强制

## 讲什么

**外部性**——英国经济学家阿瑟·庇古系统化的概念（1920 年《福利经济学》）。简单说：**做一件事的人不完整承担他这件事的后果。** 负外部性是"我得利、别人付费"（室友在宿舍炒菜，好处自己享受、油烟分给你们）；正外部性是"我付出、别人受益"（孩子受教育主观为了自己，客观上降低犯罪率、提高税收）。外部性的根本原因是**利益格局存在账本错位——私人账本和社会账本对不上**。

## 解决什么真问题

回答"自由社会为什么也需要强制"：庇古说解决外部性要政府出手（庇古税）；科斯说私人产权加自由协商自动解决；但现实中有公共品（非排他性+非竞争性——路灯、基础科学研究、国防）和搭便车问题（奥尔森 1965：共同利益不是集体行动的充分条件，群体越大搭便车越容易，越不会为共同利益行动）——**坏事过量、好事不足、人都说应该做最后没人做，这样的社会好得了吗？唯一办法是有个强人站出来强制。** 经济学家真的特别不喜欢强制——强制说明你这个系统还没做到完全激励相容，暴力上场就意味着学者讲道理的失败。

## 核心论点

- **庇古的解法**：政府强制每个人交税、污染政府治理、公共品由政府提供——庇古税。但强制很优雅不起来。
- **科斯定理**（1960 年《社会成本问题》）：养牛人和种麦农民是邻居，牛踩麦子——如果牛每年给牛主带来 100 块利润却踩坏 150 的麦子，农民完全可以补贴牛主 120 让他别养牛；如果牛赚 200 只踩坏 50 的麦子，就让牛赔农民 80。**只要可以谈、只要有交易，双方境况都会更好，不需要任何暴力干预。** 但科斯定理有两个前提：产权清晰、交易成本为零——现实中空气和水的产权属于谁？下游几百万人怎么谈判？更要命的是**产权本身就是一种公共品**：一个能保护产权的社会秩序本身需要被建设、被维护、被强制执行。科斯真正的遗产不是产权万能，而是**选择制度之前先计算交易成本**。
- **公地悲剧**（加勒特·哈丁 1968 年）：一片公共草地，每个牧民都可以来放牛——你多放一头收益全归自己、草的损失大家分摊，这笔账怎么算都划算，结果每个人都拼命加牛直到草场彻底毁掉。公地悲剧是公共品的镜像：公共品是想要正外部性而得不到，公地悲剧是想去掉负外部性而去不掉。主流经济学从此相信一个二分法：面对公共资源要么政府要么私有化，没有第三条路。
- **奥斯特罗姆的社区自治**（2009 年诺奖）：她领着学生走遍全世界看各地小社区怎么管理公共资源，发现大量小型社区在既没有政府强制也没有私有产权的情况下成功管理公共资源持续几代甚至上千年。例证：瑞士特贝尔山村 15 世纪契约——最精妙的一条是"冬天养不起的牛夏天就不能赶到公共牧场去"，把"夏天谁家牛吃多少草"这个很难监督的事变成"冬天数一数各家有几头牛"这个容易监督的事，村民互相监督即可，数百年没发生公地悲剧。
- 奥斯特罗姆八条自治制度设计原则：①边界清晰；②规则从下往上长、匹配本地条件；③受规则约束的人有权改规则；④监督内生（最好由使用者担任）；⑤惩罚分级（直接重罚反而毁了合作）；⑥冲突解决要便宜；⑦上级政府至少承认你能自治；⑧复杂问题要嵌套治理。**关键是没有一条说"实在不行就请求政府介入"。**
- 但自治不意味着社会不再需要强制：**当一个群体太大、成员变得匿名、外部性跨越地域、冲突可能升级为暴力的时候，我们终究还是需要一个拥有最终强制力的组织出面管理——这个组织就是政府。**

## 关键例证 / 金句

- 大学四人间宿舍：室友小张嫌食堂难吃自己弄炉灶炒菜——好处他自己享受，油烟分给你们忍受，这就是负外部性。
- 教育有正外部性：哪怕你没有孩子，你也希望你邻居的小孩都能受到好的教育。
- **外部性和信息不对称都是市场失灵。坏事过量、好事不足、人都说应该做最后没人做。**
- 搭便车：小区加装电梯需要挨家挨户收钱——有些人会想"就算我赖着不交你们不也得把电梯建起来吗？建起来之后难道还能禁止我用吗？所以我理性的选择就是不交"。如果大家都这么理性，装电梯这个事永远干不成。**共同利益不是集体行动的充分条件。**
- 科斯定理只是思想实验，目的是让经济学家意识到真实世界里总有交易成本，所以**制度的选择至关重要**。
- 奥斯特罗姆的八原则是一套工程化解方案、是可以实操的——装电梯可以按"哪个单元装电梯哪个单元解决自己问题"的模式，不平均分摊、一楼少出或不出、高层多出、共同参与制定规则、使用者监督账目、分级后果、争议业委会协调、事先取得街道和居委会认可。
- 费孝通《乡土中国》：本乡本土的矛盾都是尽量在本乡本土协商解决，而不是折腾到官府去——这叫"无讼"。
- **有些事我们可以商量着办，没必要找政府来硬的。但奥斯特罗姆告诉我们小社区可以自治，这并不意味着社会就不再需要强制。**

## 如何应用

1. **识别外部性结构**：做决策时问"这件事的收益和成本分别由谁承担"——私人账本和社会账本对不上，就是外部性在起作用。
2. **社区自治实操**（装电梯例子）：确定单元共同体、规则匹配本地条件（不平均分摊）、所有受影响者共同参与制定规则、使用者监督、分级后果（先提醒再公示、实在不行才暂停使用资格）、争议内部协调、事先取得上级认可。
3. **理解制度的边界**：小群体靠自治（低头不见抬头见、可互相监督的利益共同体）；大群体、匿名化、跨地域、暴力升级风险高时，需要拥有最终强制力的组织（政府）。
4. **设计公共品供给**：别指望自愿捐款解决路灯、基础科学和国防——非排他性+非竞争性意味着必须刻意营造，通常要政府出面。

---

## 全文（清洗后的课程转录，重点加粗+底纹）

欢迎来到现代思维工具课，我是万维钢。我们这个系列一直在讲社会需要制度：我们讲了礼作为一种互动协议，激励相容让个人利益和制度目标自动对齐，程序正义让好坏可验证。你注意到没有，这些制度有一个共同点——**他们都是软性的**：这里没有强制，礼可以帮你减少很多无谓的冲突但你也可以不守；一个激励相容的系统会让你自愿做有利于他的事，即便是好的市场也允许你卖坏货、只要你选择承担后果就行。软性制度是漂亮的制度，有些自由派知识分子就认为世界就应该只有软性制度、最好没有任何强制。我当年上大学的时候就发现教授上课点名是个非常不体面的事情：你讲得好学生自然会来听，学生不来听那说明你讲的不行，你强制点名让学生坐在那，这什么话呢？如果一切问题都能靠市场和软性制度解决，可就太好了。

但这一讲我们要说的是：**自由社会也需要强制。** 这里有好几位天才经济学家和政治学家的思想较量，而一切的起源叫做**外部性**。外部性最早是英国经济学家阿瑟·庇古系统化的概念，他 1920 年出版的《福利经济学》是该领域的奠基之作。简单说：**外部性就是做一件事的人不完整承担他这件事的后果。** 比如你在大学住四人间宿舍，有个室友小张嫌学校食堂的饭菜不好吃，就自己弄个炉灶在宿舍炒菜吃。炒菜这件事对小张有好处，但也有一定的坏处那就是油烟——好处完全由小张自己享受了，可是坏处不是由他自己完全承担，而是分出了一部分来给你们、让你们不得不忍受气味。分出来的这一部分就是小张炒菜这个事给宿舍制造的负外部性。

外部性也有正面的。比如一个孩子受教育，主观上当然是为了自己——有了学历就好找工作、过好日子；但是客观上更多人受教育对整个社会也有好处：犯罪率会降低、人们收入更高就会交更多的税、社会福利也会随之提升。所以哪怕你没有孩子，你也希望你邻居的小孩都能受到好的教育，这就是教育有正外部性。

**负外部性是我得利别人付费，正外部性是我付出别人受益。** 那我们当然希望制造负外部性的事能少一点、制造正外部性的事能多一点。可是你们并没有向小张收取清洁费，你也没有给你家邻居小孩支付教育感谢金。那么结果就是：**坏事会过量**（因为做坏事的全部成本你不必承担），**好事会不足**（因为做好事的全部收益你拿不到）。这里没有任何坏人在故意造成这些问题，外部性的根本原因是**利益格局存在账本错位——私人账本和社会账本对不上**。

直观上说，解决外部性的最合理办法应该是把账本重新对上：谁制造了负外部性谁就交一笔钱提供补偿，谁享受了正外部性谁就交一笔钱表示赞助，对吧？可是现实没那么简单，有些账本就是结构性的没法对上。

1954 年保罗·萨缪尔森严格论证了一个概念叫**公共品**，我们可以理解成某种必须刻意营造的正外部性。比如夜晚的路灯、基础科学研究的结果、军队提供的国防服务就都属于公共品。萨缪尔森提出这些公共品有两个特点：第一是**非排他性**——你很难因为一个人没交钱就不让他用（你说赞助科学人人有责，人家说你们探测火星跟我可没关系，唯一可操作的办法就是把基础科学成果让全民共享）；第二是**非竞争性**——一个人用了也不影响别人用（不可能只给一部分人提供保护，要和平就是全国都和平）。所以萨缪尔森说：公共品的好处太大、扩散广，根本没法有针对性的收费。

还有一个麻烦出自马里兰大学经济学家曼瑟·奥尔森 1965 年的《集体行动的逻辑》，叫**搭便车**：反正就算我不交钱我也能享受到正外部性，那我何必交钱呢？比如你住在一个老旧的小区，业主们想加装一部电梯需要挨家挨户收钱。按理说想用电梯就得交钱、这没啥可说的；但是电梯又不能谁用一次交一次钱，肯定是建好之后大家随便用。那么有些人就会想：就算我赖着不交你们不也得把电梯建起来吗？建起来之后难道还能禁止我用吗？所以我理性的选择就是不交。如果大家都这么理性，装电梯这个事就永远都干不成。**结果就是：虽然装电梯对大家都有利，但这件事就是做不成。这就是奥尔森的反直觉洞见——共同利益不是集体行动的充分条件。事实上群体越大搭便车就越容易，就越不会为了共同利益行动。**

**外部性和信息不对称都是市场失灵。坏事过量、好事不足、人都说应该做、最后没人会做——这样的社会好得了吗？** 看来唯一的办法就是有个强人站出来，说"我看好了，这个事必须办，你们各家有钱出钱，没钱也得出力，谁不服我就收拾谁"。具体操作方法就是由政府强制每个人都交税，然后污染政府治理、公共品由政府提供——这也是庇古的建议。在经济学家眼中，解决外部性是政府最正当的增税理由，叫做**庇古税**。

如你所能想见，经济学家真的特别不喜欢强制：强制说明你这个系统还没有做到完全激励相容，暴力上场就意味着学者讲道理的失败——强制很不优雅。那你说不是有个显示原理吗？不是说什么问题都有可能用激励相容的方式解决吗？其实显示原理说的是制度可以让每个人如实报告私人信息，但并不一定就说能把问题解决。但是经济学家还真找到一个聪明的解决办法，来自了不起的罗纳德·科斯。

科斯 1960 年发表的《社会成本问题》是整个经济学中被引用次数最多的论文之一，科斯据此得到 1991 年诺贝尔经济学奖。**科斯的解法是产权。** 他试想了这么一个局面：一个养牛人和一个种麦的农民是邻居，牛会经常跑到麦田里踩麦子，这是典型的负外部性，请问怎么办？庇古会说必须政府出手，要么禁止放牛要么征税。科斯却问：他们俩自己谈不行吗？如果这头牛每年能给牛主带来 100 块的利润、可他踩坏的麦子值 150，农民完全可以补贴牛主 120 让他不要养这头牛了；而如果牛每年能给牛主赚 200、可他踩坏的麦子只值 50，那就让牛赔给农民 80。**只要可以谈、只要有交易，双方的境况都会比之前更好，不需要任何暴力干预——外部性根本不需要政府管，私人产权加自由协商自动解决。**

但是现实中可没有这么好的事。请注意，科斯定理有两个前提条件：**产权清晰、交易成本为零。** 现实中空气和水的产权属于谁呢？下游有几百万人，你怎么去跟每个人谈判呢？交易成本常常高到让协商根本不可能发生。更要命的是产权本身从哪来：谁来界定、谁来登记、谁来执行判决、谁来防止强者直接抢走弱者的产权？你会发现一个反讽——**产权本身就是一种公共品**：一个能保护产权的社会秩序本身需要被建设、被维护、被强制执行，这就把问题又甩回了强制层面。这并不是说科斯定理是失败的，科斯自己 1991 年诺奖演讲讲得很明白：**科斯定理只是一个思想实验，目的是让经济学家意识到真实世界里总有交易成本，所以制度的选择至关重要。** 科斯真正的遗产不是产权万能，而是**选择制度之前先计算交易成本**。科斯留下一道后门：只要交易成本足够低，协商就能解决问题、强制就可以避免。

然而经济学家对现实已经近乎绝望。1968 年加勒特·哈丁发表著名的《公地悲剧》论文，其中讲了这样一个寓言：一片公共草地，每个牧民都可以来放牛。你多放一头收益全归自己，草的损失却是大家分摊——这笔账怎么算都划算，结果就是每个人都拼命加牛，直到草场彻底毁掉。**公地悲剧是萨缪尔森那个公共品的镜像：公共品是想要正外部性而得不到，公地悲剧是想去掉负外部性而去不掉。** 而科斯的方案在这里几乎注定失败——当事人不是两个而是几百上千个，谁都有动机搭便车，怎么谈？所以主流经济学界从此相信一个二分法：面对公共资源要么政府、要么私有化，没有第三条路。

就在这个时候，一位女政治学家埃莉诺·奥斯特罗姆站出来了。奥斯特罗姆没有躲在书房里推演，她的做法是领着学生走遍全世界，看看各地的小社区到底是怎么管理公共资源的。他们发现全世界有大量小型社区，在既没有政府强制也没有把公共资源变成私有产权的情况下成功管理了公共资源，而且持续了几代甚至上千年。这些社区是怎么做到的呢？比如说**特贝尔是瑞士的一个小山村**，村民共享一块山地牧场，是典型的公地局面。可是从 15 世纪村民签了一份关于水力渠道和高山牧场的集体使用契约，一直延续至今。契约里最精妙的一条规则是：**冬天养不起的牛，夏天就不能赶到公共牧场上去。** 啥意思呢？瑞士山区养牛分冬夏两季：夏天的时候牛在公共牧场上吃免费的草，你基本不需要投入什么成本；到了冬天山上就没有草了，牛只能回自家牛棚里吃你家储备或者购买的干草，成本完全由个人承担。如果没有这条规定，有些人可能本来冬天只养得起五头牛，但他会在夏天临时多买五头牛上公共牧场吃免费的草、等冬天来了再卖掉。这条规则等于把公共牧场的使用限制在了私人的承担能力上——**它妙就妙在把"夏天谁家的牛吃多少草"这么一个很难监督的事情，变成了"冬天数一数各家有几头牛"这么一个很容易监督的事情。** 于是只要邻里之间互相监督就好，不需要政府出手。结果是特贝尔在数百年里都没有发生过公地悲剧。

还有很多类似的故事，奥斯特罗姆在 1990 年出版的《公共事务的治理之道》一书中列举了这些发现，她也因此获得 2009 年的诺贝尔经济学奖。**原来社区自治可以在很大程度上解决外部性问题。** 奥斯特罗姆总结了八条自治制度设计原则：第一，边界要清晰；第二，规则要从下往上长、匹配本地条件；第三，受规则约束的人要有权改规则；第四，监督要内生，最好就由使用者担任；第五，惩罚要分级——直接重罚反而毁了合作；第六，冲突解决要便宜，纠纷得有地方说理；第七，上级政府至少要承认你能自治；第八，复杂问题要嵌套治理。**最关键的是：这里没有一条说"实在不行就请求政府介入"。** 你立即可以跟咱们中国的传统乡村联系起来——费孝通先生在《乡土中国》里就说：本乡本土的矛盾都是尽量在本乡本土协商解决，而不是折腾到官府那去，这叫"无讼"。奥斯特罗姆这套思想叫做**多中心治理**，这些原则其实是一套工程化解决方案、是可以实操的。

咱们回到小区装电梯那个事就可以这么操作。首先业委会不要把加装电梯做成全小区的公共事业，而是采取"哪个单元装电梯、哪个单元解决自己问题"的模式——这对应奥斯特罗姆的第一条"确定本单元共同体"。其次不要平均分摊费用：一楼如果不用电梯可以少出甚至不出钱，楼层高的则多出钱——这就对应第二条"规则要匹配本地条件"。然后还要让所有受影响的人共同参与制定规则；项目的账目要由使用者监督；根据第五条，对搭便车的人要设置分级后果——不是一开始就撕破脸，而是先提醒再公示，实在不行才暂停电梯使用资格，如果后续补交钱再恢复资格；第六条，争议可以在业委会协调解决；最后别忘了第七条，你需要上级承认——这意味着一事先取得街道和居委会的认可。奥斯特罗姆的第八条所谓嵌套治理，意思就是每一层管每一层最适合管的事：修电梯这个项目具体怎么做本单元业主商量办，小区业委会只负责统一程序和供应商比价之类，而到了居委会和街道这一层则只要确认合法性和安全审批就好。

我理解这里的核心思想是：**因为本地人低头不见抬头见，是一个可以互相监督的利益共同体，所以有些事我们可以商量着办，没必要找政府来硬的。** 奥斯特罗姆告诉我们小社区可以自治，但是这并不意味着社会就不再需要强制——**当一个群体太大、成员变得匿名、外部性跨越地域、冲突可能升级为暴力的时候，我们终究还是需要一个拥有最终强制力的组织出面管理。这个组织就是政府——咱们下一讲再说。**
`,B1=`# 076丨保护费和公共契约：政府的演化

## 讲什么

**政府的演化史**——把"保护费改造成税收，把统治者改造成代理人，把臣民改造成公民"的历史。曼瑟·奥尔森的洞见：**政府起源于强盗，流动强盗早晚演化成定居强盗（坐寇），定居强盗再演化成统治者。** 德国社会学家马克斯·韦伯的定义指人心：国家就是"在一定疆域内成功主张合法物理暴力垄断的人类共同体"，政府则是国家机器的执行面。

## 解决什么真问题

回答"政府是怎么来的"：不是一群读书人开会讨论达成共识说"我们还是得有个政府"——**政府可不是读书人的发明，历史的真相更接近于政府起源于强盗。** 理解从流寇到坐寇和利维坦的逻辑，你才能理解什么叫"人民需要政府、政府也需要人民"。

## 核心论点

- **从流动强盗到定居强盗**：如果抢多了就会发现抢劫不是长远生财之道（村民的粮食连种子都抢走，第二年没得抢）。有长期主义思维，你就发生观念跃迁：你不再是寇，你是统治者——把村民视为自己的子民，为他们提供保护服务，确保别的流寇不来抢劫，这可是你的专属经济区。例子：黎巴嫩真主党武装、西西里黑手党、墨西哥毒贩集团都是一边干杀人越货的买卖一边给当地百姓提供基本秩序服务。**他们改变的不是善恶，只是时间偏好——强盗一旦学会长期主义，就开始向统治者进化；统治者一旦忘记约束，也随时能退回成强盗。**
- **战争制造国家，国家制造战争**（查尔斯·蒂利 1985 年论文标题）：国家其实是战争制造出来的——一旦坐寇之间开始打仗，统治者就被逼着建立正规军队，建军就得收税，收税就得养官僚。春秋打仗讲礼法、只有贵族上阵、充满仪式感，战国为战争不断加强国家机器（变法），500 年军备竞赛演化出来的秦是一台武装到牙齿的国家机器。
- **谷物是理想征税对象**（詹姆斯·斯科特）：长在地里、政府一眼能估收成、有固定收获季节、高度可量化、可储存可运输、农民被绑定在土地上想跑都没地方去——管理起来太方便了。对比游牧民今天在这明天在那。这就是为什么古代中国、两河流域、印度、埃及这些农业核心区都走向了大一统帝国；而欧洲没有单一农业心脏（还有畜牧、葡萄、橄榄、城市贸易等财富来源），统一战争太贵了，所以难以统一。
- **前现代国家的本质是家产制**：把老百姓视为用于汲取的资源，政府不是公共服务公司而是统治者的家产。商鞅"民弱国强"、韩非"君上之于民也，有难则用其死，安平则尽其力"。皇帝也不好当：611 位皇帝中非正常死亡率高达 44%，平均寿命只有 39.2 岁——家产制把不受外部约束的巨大权力交给一个普通肉身，权力越大皇帝越不安全、越猜忌、越依赖私人忠诚、制度就越坏，这是死循环。
- **黄宗羲定律**（秦晖总结）：王朝建立之初轻徭薄赋→官僚集团自我扩张、统治成本上升→加税但正税不好涨→各级官僚发明附加费摊派火耗折银→负担越来越重→改革者（张居正）合并杂税"以后不再乱收"→过几年财政又不够→发明新杂税→农民逃亡→流民增多→王朝崩溃→新王朝再来一遍。**跟明君清官没关系，只要家产制和汲取机制不变，历代王朝只能把循环重演。**
- **现代化的三个节点**（都不是思想家推动的，是力量对比出来的）：①1215 年英格兰《大宪章》（第 61 条：贵族可选出 25 人监督国王履约，国王不纠正贵族可扣押城堡土地财产强制执行——把造反变成制度化的权利，宪政的开始）；②1688 年光荣革命（结果《权利法案》：国王未经议会同意不能停止法律、不能征税、不能在和平时期维持常备军——君主从家产制主人变成制度里的角色）；③1787 年美国制宪（双重分权制衡：横向立法行政司法三权分立，纵向联邦和州分享权力——"用野心对抗野心"，不指望任何人有道德，只望每个人都有利益然后让这些利益互相牵制）。
- 科克和洛克的作用是把历史变局通过叙事合法化：**限制权力不是写在纸上，而是写在权力分布里。**

## 关键例证 / 金句

- 张作霖从赵家庙保险队长变成东三省保安司令——流寇变坐寇建立长久有效统治，这就是国家机器。
- 政府跟公司的区别：公司可以开除你但不能关押你，平台可以收费但不能征税，学校可以教课但不能规定哪个学说是正统，教会可以逐出教籍但不能绞死异端——**政府跟所有组织的区别不在于服务更好、不在于更仁慈，甚至不在于更为人民，而在于他拥有最终强制权。**
- "国家、为民父母、君之禄中君之事、皇恩浩荡"——再怎么讲也只是文雅的坐寇。
- **现代人必须学会从问"这个人好不好、这个政府好不好"，改为问"我们这个制度行不行"。前现代政府是统治者的政府，现代政府是制度化的政府。**
- 如果你是读书人，质疑政府其实是你的本分——要知道即便是现代政府、即便他提供了很多正外部性，他也是最大的负外部性制造者。

## 如何应用

1. **历史视角**：用"流寇→坐寇→统治者"的演化框架理解政府和税收的起源——政府不是神圣的发明，是暴力+长期主义的产物。
2. **制度眼光**：从"问人好不好"升级为"问制度行不行"；理解现代制度的核心是限制权力——限制权力不是写在纸上，而是写在权力分布里（分权制衡、力量对比）。
3. **理解现代国家节点**：宪政不是思想家设计的，是力量对比出来的——所以别指望一篇好文章改变制度，制度变迁需要组织化的力量。
4. **警惕黄宗羲定律**：任何组织（公司、政府、机构）一旦汲取机制不受制衡，就会走向"轻徭薄赋→乱收费→改革合并→再乱收费"的循环——可持续的制度必须让支出方和买单方对齐。

---

## 全文（清洗后的课程转录，重点加粗+底纹）

欢迎来到现代思维工具课，我是万维钢。上一讲我们讲到要解决大范围的外部性问题，终究离不开强制，而执行这个强制力的组织就是政府。我们的推演很有逻辑，那你说政府是不是就这么来的？是不是一群讲逻辑的读书人，辩论很久之后发现自治能解决的问题的确是有限的，于是坐在一起开了个会、在祥和的气氛达成共识说我们还是得有个政府，于是才有了政府？不是。**政府可不是读书人的发明，历史的真相更接近于政府起源于强盗。政府的历史，就是把保护费改造成税收、把统治者改造成代理人、把臣民改造成公民的历史。**

从人类学会聚集财富那天开始，就有人发现抢劫是比劳动更快的敛财方法。但如果你抢多了，你就会发现抢劫不是一个长远的生财之道：村民好不容易生产这么点粮食，你来了直接给人抢光、连种子都没留下，村民只好饿死，到了第二年你再想抢都没得抢。用我们上一讲提到过的美国经济学家曼瑟·奥尔森的话说，你这种抢法太低级，你是个**流动强盗**（说得文雅一点叫流寇）。奥尔森的洞见是：**流动强盗早晚会演化成定居强盗，也就是坐寇**——干脆我把这个村占了，给村民留条活路让他们继续种地，我每年只从他们身上抽三成的收入。做强盗也不一定非得打杀，细水长流岂不是更好？**有了长期主义思维，你就发生了一次观念跃迁：你不再是寇了，你是统治者**——你会把那些村民视为自己的子民，而且要为他们提供保护服务，确保别的流寇不来抢劫。这可是你的专属经济区。奥尔森说这就是政府的起源。

我们甚至都不用去远古找证据，这种事情到现在仍然在发生：无论是黎巴嫩真主党武装、意大利西西里黑手党、还是墨西哥北部某些地区的毒贩集团，都是一边干着杀人越货的买卖，一边给当地百姓提供基本秩序服务——他们不但管治安，而且管案件，甚至还修学校；甚至老百姓家里有个红白喜事，你都得出面。请注意，这不是说坐寇变成了好人，**他们改变的只是时间偏好：强盗一旦学会长期主义，就开始向统治者进化；统治者一旦忘记约束，也随时能退回成强盗。**

那你说不要强盗行不行？我们一群村民快乐地生活在一起不好吗？本来是可以的。我们在《精英日课》专栏讲过人类学家大卫·格雷伯和考古学家大卫·温格罗的《人类新史》那本书，其中最新的考证就是说很多先民社会有复杂的自治能力，甚至比后来的国家社会更自由。但那些先民并没有进入规模化农业、没有多少私人财产——说白了就是没有太多可抢的东西。**一旦值得抢，人间就必定充满争斗：如果没有统治者，就会陷入英国哲学家霍布斯在《利维坦》中说的那个"一切人对一切人的战争"状态。** 在那个状态里，你会盼望有个利维坦出来主持一切，大家签个契约——我们给他交保护费就好。那么就必须发生从流寇到坐寇的演变：复仇会变成法院，黑帮会变成警察，保护费变税收，私人强制会变成公共强制。最终总会有一股坐寇强大到威震四方，像张作霖从赵家庙保险队长变成东三省保安总司令一样建立长久而有效的统治——这就是国家机器。德国社会学家马克斯·韦伯给的定义指人心：**国家就是"在一定疆域内成功主张合法物理暴力垄断的人类共同体"，而政府则是国家机器的执行面。** 所以政府的起源是收保护费的坐寇，政府的根本是暴力、是最终强制权。

公司可以开除你但不能关押你，平台可以收费但不能征税，学校可以教课但不能规定哪个学说是正统，教会可以逐出教籍但不能绞死异端（至少在现代社会不能了）。**政府跟所有这些组织的区别，不在于他服务更好、不在于他更仁慈、甚至不在于他更为人民，而在于他拥有最终强制权。**

理解了从流寇到坐寇和利维坦的逻辑，你才能理解什么叫"人民需要政府、政府也需要人民"。其实如果只是供养统治者，让统治者能够提供基本的保安服务，老百姓也花不了多少钱——一家出个 10% 的保护费，100 家就能供养一个生活水准是普通人十倍的坐寇，你稳稳当当收租还有啥不满意的。的确早期部落和宗族联盟没有稳定的国家机器，老百姓负担也很低，严格说来都不能称之为国家。**国家其实是战争制造出来的**：一旦坐寇之间开始打仗，统治者就被逼着建立正规军队，而建军就得收税，多收税就得养官僚——哪个坐寇这三件事干得好哪个就赢，输的被吞并、胜的变得更强。你看中国春秋时代各国打仗还讲礼法、只有贵族才上阵、作战充满仪式感、杀戮极其有限；可是到了战国，各国为了战争就必须不断加强国家机器的力量，也就是所谓变法。500 年军备竞赛演化出来的秦，可谓是一台武装到牙齿的国家机器——郡县官僚、统一税收，到了这一步老百姓的负担就重了。用美国社会学家查尔斯·蒂利的话说，这就是**战争制造国家、国家制造战争**——他那篇发表于 1985 年的论文标题就叫《作为有组织犯罪的战争制造和国家制造》。其实你说这是犯罪也不太公平：你不主动打仗就是等着被打，唯一的解决方案就是出现一个大一统帝国作为唯一的利维坦。

但大一统帝国也不是想要就能有的，你还需要一种关键的燃料，那就是**谷物**。这是耶鲁人类学家詹姆斯·斯科特的洞见：**谷物是一种特别理想的征税对象。** 小麦、大麦、水稻这些谷物都是长在地里的，你家的地有多大、收成大概能有多少，政府一眼能估个八九不离十；谷物有固定的收获季节，税务官知道什么时候来；谷物是高度可量化的，一斗就是一斗；谷物还可储存、经得起运输。更重要的是种谷物的农民只能被绑定在土地上，想跑都没地方去——这管理起来可太方便了。对比一下游牧民族：今天在这里明天到那里，你想征税或者抓个壮丁都找不着人。**谷物真是统治者的法宝啊。** 有研究者用计算机模拟历史动力学发现：只要是农业核心地区适合低成本征税养兵，那么战争就会变得便宜而且平常——最初不管分裂成多少个小国，最终一定会有一个大国统一天下，因为统一战争是可以打得起的。这就是为什么古代中国、两河流域、印度、埃及这些农业核心区都走向了大一统帝国。而对比之下欧洲为什么这么难以统一呢？很多人认为是地理因素（欧洲被山脉和海洋切成无数碎片，不适合调兵打仗），但是更的原因恐怕还是在于欧洲没有一个像华北平原那样的单一农业心脏——欧洲人在谷物之外还有畜牧、葡萄、橄榄、城市贸易等等的财富来源，政府征税非常困难，统一战争对他们来说太贵了。西方传教士最初来到中国的时候往往会感到文明震撼，震惊于中国是一个如此统一而富裕的国家——利玛窦赞叹说欧洲出产的东西几乎在中国这一个国家全都能找到。没错，中国从秦开始就已经不再是一个早期国家或者古国，而是一个有着完善的官僚、税收、军队和各项制度的真正的国家。

但这种国家跟现代国家还是不一样，只能叫**前现代国家**。前现代国家最大的特点是：**他把老百姓视为用于汲取的资源。政府不是什么公共服务公司，而是统治者的家产。** 皇上连"我是为人民服务的"这种漂亮话都不屑于说——商鞅直接主张"民弱国强，国强民弱，有道之国务在弱民"；韩非子说得就更直白了："君上之于民也，有难则用其死，安平则尽其力。"后来的人可能稍微委婉一些，但也毫不掩饰：什么"国家"、什么"为民父母"、"君之禄中君之事"、"皇恩浩荡"等等——你再怎么讲，这也只能说是文雅的坐寇。前现代政府的形态是家产制：你跟政府所能指望的良好关系是"我投靠你、你庇护我"的依附关系，安全和机会不是由制度平等提供，而是由权贵私人分配。

你可以想象在这样的国家当老百姓是很苦的，但你也别觉得当皇帝就很好。据历史作家张宏杰统计：中国历史上全部 611 位皇帝之中，死于疾病和衰老的只有 339 人，自杀和他杀的有 272 人——**非正常死亡率高达 44%，平均寿命只有 39.2 岁。世界上还有比这更危险的职业吗？** 关键在于：家产制把一个不受任何外部约束的巨大权力交给一个普通肉身去掌握，这件事本身就特别危险。权力越大，所有人都想接近他、操纵他、替代他，皇帝就越不安全、就越猜忌；越猜忌就越依赖私人忠诚，越依赖私人忠诚制度就越坏——这是一个死循环。

比家产制更可怕的是另一个死循环，也就是秦晖先生总结的**黄宗羲定律**（最早出自明清思想家黄宗羲对历代赋税的观察）：王朝建立之初，统治者吸取前朝教训要让百姓休养生息，于是宣布轻徭薄赋；但官僚集团有自我扩张的本能、皇上有浩大喜功的冲动（毕竟花的不是自己的钱，谁不想找几个亲戚进来一起办大事呢），于是各项花费上涨、统治成本越来越高、财政开始吃紧，那么只能加税；可是正税名义上不好涨，各级官僚就发明了附加费、临时摊派、火耗折银等各种名目，老百姓负担越来越重；到了某一时刻，朝廷中会有一位像张居正这样的改革者站出来说这种乱收费不行啊，等于纵容腐败，于是把杂税合并"从此不再乱收"；可是没过几年财政又不够花，就只好发明新的杂税——就这样反复循环，每一次改革都说减负，长期看却是把负担固化下来，形成"积累莫返之害"。最终农民发现种地要交的税已经大于土地的产出，就开始逃亡，于是流民增多、民变、王朝崩溃、新王朝重建，再来一遍。**当然中国有些皇帝是好皇帝、有大量的官员是清官，但这跟明君清官没关系——秦制 2000 年之下，只要家产制和汲取机制不变，老百姓没有合法的手段制衡政府的权力和税收扩张，历代王朝就只能把这个循环重演。**

那你说前现代国家有这么多毛病，是不是统治者自己意识到自己的结构性问题，于是跟读书人讨论一番、设计出了更好的制度，这才有了现代国家呢？不是——**千万别高估思想家对坐寇的影响力。** 从前现代国家到现代国家的演化主要有三个节点。

第一个节点是 1215 年的英格兰《大宪章》，第一次承认"王在法下"。但那可不是因为国王仁慈：1215 年英格兰国王约翰对外打仗连续失败，不得不对国内贵族大幅加税、强征军役、甚至没收财产，贵族忍无可忍联合起来用武力控制了伦敦，约翰王在被逼之下才签署了大宪章。大宪章里最值得品的是第 61 条：**贵族可以选出 25 人监督国王履约，如果国王不纠正违约，贵族可以扣押城堡、土地、财产以强制执行——这相当于把造反变成了一种制度化的权利，这是宪政的开始。** 我们事后看"合法造反权"不但保障了贵族权益，而且对国王也有好处、大家都有安全感。但这可不是思想家推动的结果，这是力量对比出来的制度。

第二个节点是 1688 年的**光荣革命**。它的起因也不是思想革命，而是英国上层精英为了保住自己的权利、财产和宗教地位，联手把一个不受约束的国王换掉。它的结果是《权利法案》，把几项关键限制明文规定下来：**国王未经议会同意，不能停止法律的执行、不能征税、不能在和平时期维持常备军。** 一个君主被剥掉这三样，就不再是家产制的主人，而开始变成制度里的角色。你看啊，从大宪章签字到议会真的能限制住国王，用了整整 473 年——那是几代人持续博弈出来的。在这期间有两位思想家可能起到了一定的作用但并不是很大：一个是 17 世纪的法学家爱德华·科克，他把大宪章从一份中世纪的封建文件解释成了"英国人原本就有的自由根基"，等于把很久以前贵族的一次反抗翻译成了"英国自古以来国王就不能凌驾于普通法之上"，然后由此推导出臣民拥有古老的权利、征税和压必须受法律约束；另一个是哲学家约翰·洛克，他的《政府论》反对君权神授、主张政府的目的不是维护君主荣耀而是保护人的生命自由和财产、政府权力来自人民同意、本质上是一种受托权利，如果政府背信弃义人民就有权改变甚至推翻他。洛克这本书是光荣革命之前写的，却是光荣革命之后才出版的。我们回头看：科克和洛克改变了政治叙事，这极为重要，因为他们从此改变了人们的观念——但他们更多的是把历史变局通过叙事合法化，而不是直接推动历史变局。等到卢梭出版《社会契约论》，那已经是 1762 年的事了。

真正有"思想家顶层设计"味道的是现代国家演变的第三个节点，也就是 1787 年的**美国制宪**。美国人把英国传统、罗马共和的记忆、孟德斯鸠的分权理论揉成了一套全新的制度。这个制度在技术上的先进之处是它解决了"中央政府到底应该有多强"的问题：显然政府太弱不行（外敌、债务、贸易、内部秩序都处理不了），可是如果政府太强，你怎么防备他不压迫人民呢？答案是**双重的分权制衡：横向是立法、行政、司法三权分立，纵向是联邦和州分享权力。** 这套设计的核心思想就是麦迪逊那句"用野心对抗野心"——也就是不指望任何人有道德，只望每个人都有利益，然后让这些利益互相牵制。但美国宪法也不能完全归于思想家：华盛顿之所以不称帝，有他思想先进的一面，但也有他权力不够的一面——他领导的本来就是一支由各州民兵和大陆军拼出来的革命军，财政要靠大陆会议和各州供给，军官和士兵效忠的也不是华盛顿个人而是各州议会和革命事业。

简单说：**很多国家有宪法，但很多有宪法的国家没有宪政。这是为什么呢？因为限制权力不是写在纸上，而是写在权力分布里。** 人民需要政府建立秩序，但政府的出身是坐寇。而现代化就是：**哪怕你是个坐寇，也要把你工程化。** 现代人必须学会从问"这个人好不好、这个政府好不好"，改为问"我们这个制度行不行"。前现代政府是统治者的政府，现代政府是制度化的政府。

可能因为前现代传统太深，今天很多人觉得那些质疑政府的知识分子是在给国家找麻烦、是不识大体等。可如果你是读书人，**质疑政府其实是你的本分**。要知道即便是现代政府、即便他提供了很多正外部性，他也是最大的负外部性制造者——咱们下一讲再说。
`,U1=`# 077丨软预算约束：有人兜底，责任就会变形

## 讲什么

**软预算约束**——匈牙利经济学家亚诺什·科尔奈在上世纪 70 年代末 80 年代初提出：预算原本是一种硬约束（你有多少钱办多大事，亏光了就出局），但如果你相信每次亏了都会有人来救你，预算对你来说就只是个软约束。**外部力量替你填窟窿的主观概率越高，你的预算约束就越软。** 说白了就是：只要你相信真出事了总有人管，你今天的每一个决策就都会更敢借钱、更敢冒险、更不在乎成本。

## 解决什么真问题

解释"为什么效率低下的企业/项目就是不死"：科尔奈研究匈牙利和南斯拉夫的国营企业，发现有些企业效率极其低下、年年亏损、按市场规律早该倒闭一百次了，可他们就是不死——因为国家不会让他们死，免税、低息贷款、实在不行直接发补贴，反正这个窟窿有人填。软预算约束不止属于社会主义，本质上是个**动态承诺问题**：人家在第一次给你批预算的时候就已经知道出了事你会救他，所以你们之间的承诺只是暂时的，将来预算一定会加码。

## 核心论点

- **道德风险的组织版**：经济学里更老的概念叫道德风险（原本是保险业行话）——当一个人不必承担自己行为的全部后果时，他就会变得更大胆更不在乎。软预算约束其实就是道德风险的组织版本，这种结构远比想象中普遍。
- **时间维度——动态承诺问题**（基德兰德和普雷斯科特，2004 年诺奖）：政府事前应该承诺"谁出事我都不救"这样大家才会谨慎；可一旦事情真的发生，站在事后那个时间点上救援往往比放任崩盘更理性，于是政府会改主意；于是市场早就预见到政府会改主意——**事后最理性的救援恰恰制造了事前最大胆的冒险。**
- **空间维度——法不责众的金融化**（法尔西和若尔，2014 年诺奖）：作为金融机构最聪明的做法未必是降低自家风险，而是把风险搞得跟大家一样——只要所有人都挤在同一条船上犯同一个错误，这条船一旦要沉，监管者为了不让整个经济陪葬就别无选择只能来救。**一个人闯红灯会被罚，一万个人一起闯红灯，红灯只好认输。你亏损那是你的失败，但如果你能把你的亏损变成系统的问题，那就不再是你的失败，而是一种让别人为你买单的能力。**
- **帝国建造与预算最大化官僚**：经理人有动力把组织规模做大（规模大他手里的预算、人员、资产和话语权就越大），这跟股东追求利润常常背道而驰；官僚追求的不是利润而是他掌管的预算规模。中国地方官员围绕增长和招商展开竞争（"晋升锦标赛"，周黎安等研究证明省级官员升迁概率和当地经济增长率显著正相关）——增长期干什么都有正外部性，但投资拉动增长只能走这么远，一旦边际效益递减而官员还在狂刷业绩，曾经的政绩就变成债务和过剩产能。
- **恶性循环**：银行信贷支持会压低企业产能利用率，而经营效率越差的企业越可能拿到更多信贷（尤其是国企难退）；日本失去的十年里银行为不让坏账暴露反而给最该破产的企业续命，僵尸企业占据信贷、压着价格、把健康企业一起拖进坟墓。

## 关键例证 / 金句

- 家庭版：孩子成年热衷高消费，父母总给兜底——第一次"孩子还年轻"，第二次"替他还上吧反正咱家有钱"，第三次"总不能看着孩子征信坏掉"，第四次孩子主动提醒父母该帮他还钱了。
- 项目版：项目预算 1000 万才做一半就花了 800 万，负责人说"前面都花了现在停掉不是更浪费吗"，于是总部又批 500 万；三个月后还是不行，又说"都走到这一步了临门一脚不能功亏一篑"，于是再批 500 万——最后没钱了项目也没成，但报告写得好："探索了路径、积累了经验、锻炼了队伍。"**这两件事背后是同一个机制：拍板花钱的人，不是最后买单的人。**
- 2008 年金融危机"大而不能倒"：雷曼兄弟先倒了市场扩散，保险巨头 AIG 快撑不住，美联储和国会先后对 AIG 大规模注资——用纳税人的钱救一家私人金融机构合理吗？你们赚钱的时候奖金可没分给我们，怎么亏钱亏到要死的时候找我们救命？**小企业倒闭叫优胜劣汰，大机构出事叫系统性风险。**
- 2023 年硅谷银行倒闭的高明处置：常规规则下联邦存款保险每个账户 25 万美元以内、超出部分储户自认损失；但硅谷银行影响太大，相关部门启用系统性风险例外宣布保护全部存款——**但政府保的只是储户而不是这家银行：股东血本无归，高管被撤，部分无担保债权人不受保护。我救的是系统，不是奖励你们乱来。**
- 花别人的钱心不疼也不讲效果——弗里德曼的"花钱四象限"：花自己的钱办自己的事最在乎节省也在乎效果；花别人的钱办别人的事既心疼也不讲效果最浪费。
- **每当有人谈论"稳定、就业、民生、产业链安全、系统性风险"这些大词的时候，你就要警惕了——他是准备花别人的钱。每当有人跟你谈感情的时候，你就明白这一局多半是你买单。**
- 软预算约束是人类的制度，别人的钱也是有限的——**大自然的法则终究要求我们尊重硬约束。**

## 如何应用

1. **识别软预算约束**：把失败说成所有人的麻烦（"你们不给我追加预算系统就要停""你们现在让我倒下前面的投入就全白费"）——真正起作用的是声量，"会哭的孩子有奶吃不是因为更饿，而是因为他让全屋人都听见了他的饿"；把利益说成大局的安全（"我们不是亏损企业，我们是关系几万人饭碗的支柱产业""这不是产能过剩，这是保障供应链安全的战略储备"）。
2. **设计硬约束**：爱要有边界、救助有附加条件、支持不是兜底、容错不是免责、权力跟责任应该对齐——"拍板花钱的人应该最后买单"。
3. **警惕激励扭曲**：别奖励帝国建造（没有好项目也并购扩张、招更多人、盖更高总部大楼）；对启发式任务别用强激励。
4. **理解市场纪律**：企业长期亏损说明业务模式有问题，应该死掉给能创造价值的企业腾出空间——这才是大自然的法则；人为续命只会让僵尸企业占据信贷、把健康企业拖进坟墓。

---

## 全文（清洗后的课程转录，重点加粗+底纹）

欢迎来到现代思维工具课，我是万维钢。这一讲的思维工具叫**软预算约束**，它能帮你进一步理解公共事务，但它也适用于私人事务。你肯定听说过这样的事：有个家庭孩子已经成年了，热衷于高消费，信用卡、花呗借呗欠了不少债，但是父母总会给他兜底——第一次父母说孩子还年轻没有社会经验以后就好了；第二次父母又心疼说替他还上吧反正咱家有；第三次父母已经感到吃力但总不能看着孩子征信坏掉；第四次孩子主动提醒父母该帮他还钱了。这跟你在公司里看到的那些超预算项目是一个道理：本来项目预算 1000 万，才做到一半就已经花了 800 万，负责人说"前面都花了现在停掉不是更浪费吗"，于是总部又批了 500 万；过了三个月还是不行，又说"都走到这一步了，临门一脚不能功亏一篑"，于是再批 500 万；到最后没钱了项目也没成，但是人家报告写得好："探索了路径、积累了经验、锻炼了队伍。"**这两件事背后是同一个机制：拍板花钱的人，不是最后买单的人。**

软预算约束最早是匈牙利经济学家亚诺什·科尔奈在上世纪 70 年代末 80 年代初提出来的。他当时在研究匈牙利和南斯拉夫的国营企业，发现一个特别普遍的怪现象：**有些企业效率极其低下、年年亏损，按市场规律早该倒闭一百次了，可他们就是不死。** 为啥呢？因为国家不会让他们死——不管你怎么亏，上面都会想办法让你活着：给你免税、给你低息贷款，实在不行直接给你发补贴，反正这个窟窿有人填。

预算原本是一种硬约束：你有多少钱办多大事，亏光了就出局。企业长期亏损说明你的业务模式有问题、你没有在创造价值而是在消耗价值，这样的企业应该死掉、给能创造价值的企业腾出空间来——这才是大自然的法则。可是如果你相信每次亏了都会有人来救你，预算对你来说就只是个软约束。**外部力量会替你填窟窿的主观概率越高，你的预算约束就越软。** 说白了就是：只要你相信真出事了总有人管，你今天的每一个决策就都会更敢借钱、更敢冒险、更不在乎成本。

在 2003 年的一篇综述论文中，科尔奈和合作者进一步提出：软预算约束并不止属于社会主义和转型经济，也适用于市场经济——**他本质上是个动态承诺问题**：人家在第一次给你批预算的时候就已经知道出了事你会救他，所以你们之间的承诺只是暂时的、将来预算一定会加码。也就是说哪怕你事先发狠话说"绝不兜底"，真到临头往往也会发现还是得救，于是言而无信。

最著名的例子就是 2008 年金融危机让全世界都记住的那句"**大而不能倒**"：当时雷曼兄弟先倒了、市场扩散、保险巨头 AIG 也快撑不住了，如果他倒下全球无数金融机构都会被牵累，于是美联储和国会先后对 AIG 大规模注资。你事后看可能政府这也是不得已而为之，不然会导致巨大灾难；但是从另一方面说，**用纳税人的钱去救助一家私人金融机构，这合理吗？这还叫资本主义吗？你们赚钱的时候奖金可没分给我们，怎么亏钱亏到要死的时候找我们救命呢？** 小企业倒闭叫优胜劣汰，大机构出事叫系统性风险。

监管者从 2008 年吸取了两条教训：第一，有些机构真的不能让他突然死，因为他会把整个系统拖下水；第二，但是救援又不能救得太舒服——你要是连股东、管理层、债权人都一并保护了，那就等于告诉所有大公司：你们放心大胆地赌，赌赢了归你们，赌输了归系统。到了 2023 年，硅谷银行倒闭，监管者的动作就高明多了：按常规规则美国联邦存款保险每个账户 25 万美元以内、超出部分是储户自认损失，可是硅谷银行的影响实在太大，如果不保护储户很可能向其他中小银行扩散、一大批科技公司就可能发不出工资、恐慌会制造更大的恐慌，所以相关部门启用了系统性风险例外宣布保护全部存款包括 25 万美元以上的大额存款。**但是请注意：政府保的只是储户而不是这家银行——硅谷银行的股东血本无归、高管被撤、部分无担保债权人也不受保护。我救的是系统，不是奖励你们乱来。** 那你说银行业会不会吸取教训以后决策更谨慎呢？也未必——只要市场相信真到系统性风险那一步政府还是会救，这个预期就会进入事前决策。

这个机制是在时间和空间上双重的，相关理论赢过两个诺贝尔奖。**在时间上**，挪威经济学家芬恩·基德兰德和美国经济学家爱德华·普雷斯科特提出：政府事前的确应该承诺"谁出事我都不救"这样大家才会谨慎；可一旦事情真的发生，站在事后那个时间点上救援往往又比放任崩盘更理性，于是政府会改主意；于是市场早就预见到政府会改主意——**事后最理性的救援恰恰制造了事前最大胆的冒险。** 基德兰德和普雷斯科特获得了 2004 年诺贝尔经济学奖。**在空间上**，法国经济学家马纽埃尔·法尔西和让·梯若尔发现：作为一家金融机构你最聪明的做法未必是降低自家的风险，而是把风险搞得跟大家一样——因为只要所有人都挤在同一条船上犯同一个错误（比如都去做高风险的期限错配业务），那么这条船一旦要沉，监管者为了不让整个经济陪葬就别无选择只能来救。**这是法不责众的金融版：一个人闯红灯会被罚，一万个人一起闯红灯，红灯只好认输。** 若尔后来获得 2014 年诺贝尔经济学奖。**你亏损那是你的失败，但如果你能把自己的亏损变成系统的问题，那就不再是你的失败，而是一种让别人为你买单的能力。**

更可怕的是你还可以更主动地使用这个能力——**大了不但不会倒，而且大本身就是一种奖赏**。美国金融经济学家迈克尔·詹森在公司治理研究中提出一个机制叫**帝国建造**：经理人有动力把组织的规模做大——规模大他手里的预算、人员、资产和话语权就越大。注意这个追求跟股东的利益可常常是背道而驰的：股东关心的是利润，经理人更关心我管多大的盘子。这就是为什么有些公司明明没有好项目也要并购扩张、招更多的人、盖更高的总部大楼。市场经济中的职业经理人尚且如此，那要是政府之中呢？要是钱纯粹是公家的、连股东都没有呢？你将走向我们上一讲说到的黄宗羲定律。美国经济学家威廉·尼斯坎南提出一个模型叫**预算最大化官僚**：官僚追求的不是利润，而是他掌管的预算规模——管的钱越多、盘子越大、权力就越大、前途就越光明。

咱们平心而论，这个机制有时候是好的、能提供正外部性。特别是对于发展中国家在经济成长期：官员主动做大预算、上大项目、搞好基础设施，这就是经济动员——像修路建桥、搞工业园区这些事如果只靠市场自发演化速度未必够快。有些经济学家相信正是地方政府围绕增长和招商展开的良性竞争促成了中国经济的告诉增长。经济学家周黎安和周飞舟称之为**晋升锦标赛**：地方官员像运动员一样比赛 GDP 增长率，谁的数字漂亮谁就更可能升。他们的研究发现省级官员的升迁概率和当地经济增长率显著正相关。这其实是"按政绩升官总比按关系升官强"，但是这里的预算约束很软：政府主导的投资已经系统化，各地都成立了地方融资平台、发行了城投债，官员们可以轻易从银行调取资金去做任何大项目。高增长期干什么都有正外部性，但是投资拉动增长只能让你走这么远——到了某一阶段投资出现边际效益递减，可是官员们还在狂刷业绩，那些项目长远是赚是赔、会不会留下一地鸡毛，可就要算账了。你会发现曾经的政绩变成了债务和过剩的产能。

那你说投资效益下降了、债务已经很多了、产能已经过剩了，是不是以后花钱就应该谨慎一点了？并没有。中国经济学家徐高的实证研究发现这里有个恶性循环：银行信贷支持会压低企业的产能利用率，可是**经营效率越差的企业越可能拿到更多信贷**（尤其是国企难退）。日本早有前车之鉴：在 1991 到 2001 年（日本资产泡沫破裂后经济陷入停滞与通缩的"失去的十年"）期间，银行为不让坏账暴露反而给最该破产的企业续命，于是这些死不掉的僵尸企业占据信贷、压着价格、把健康企业一起拖进坟墓。**这就是软预算约束的厉害之处：市场本该奖励效率，现在低效反倒成了需要帮一把的理由；原本不该投的项目现在变成了不能停的项目；小的失败者被市场教育，大的失败者教育市场。**

经济学里有个更老的概念叫**道德风险**，原本是保险业的行话——当一个人不必承担自己行为的全部后果的时候，他就会变得更大胆、更不在乎。**软预算约束其实就是道德风险的组织版本。** 这种结构远比你想像的普遍。比如说美国大学学费为什么越来越贵呢？我们前面讲过一个原因是鲍莫尔成本病，但鲍莫尔成本病不能完全解释学费涨到这么离谱的程度——大学生一年的学费可以比普通家庭一年的收入还要高。其实这也跟软预算约束有关：早在 1987 年，美国教育部长威廉·贝内特就提出，政府的助学贷款越慷慨大学学费就会涨得越凶，因为学生有联邦贷款兜底、对价格就没那么敏感——这个说法被称为**贝内特假说**；2019 年的一篇论文量化证明了：联邦补贴贷款每多一美元，大学学费就往上抬大约 60 美分。医疗也有这个问题：医疗保险本质上也是一种软预算约束，看病花的是保险公司和政府给的钱，医生和病人就没有那么在乎药品的价格。现代化的潮流是物越来越便宜、人越来越贵，可是美国医疗期间和药品的价格可没有变便宜。经济学家米尔顿·弗里德曼早就说过这个问题，他发明了一个流传极广的说法叫**花钱四象限**：花自己的钱办自己的事最在乎节省也在乎效果；而花别人的钱办别人的事则既心疼也不讲效果、最浪费。其实我看根本用不着弗里德曼，老百姓都知道这个道理——只不过老百姓常常不知道花的是谁的钱、办的是谁的事。

要想充分享受软预算约束、尽情地花别人的钱，你需要掌握两种叙事能力。**第一种是闹**，也就是把自己的失败说成所有人的麻烦：你们不给我追加预算系统就要停、你们现在让我倒下前面的投入就全白费了、你们要是不救我供应商会追债员工会失业客户会投诉领导也不好交代——这里真正起作用的不是道理而是声量，闹得越大越好。有些事是吵分配，会哭的孩子有奶吃不是因为他更饿，而是因为他让全屋人都听见了他的饿。**第二种是包装**，也就是把自己的利益说成大局的安全：我们不是一家亏损的企业，我们是关系几万人饭碗的支柱产业；这不是产能过剩，这是保障供应链安全的战略储备；我们不是要补贴，这是保护就业、保护民生、保护地方稳定。**只要你能把我的亏讲成"你们不救我就会出事"、把我要更多讲成"你们需要我继续存在"，你的低效就成了筹码、你的失败就成了资历、进而成了下一轮资源申请书。** 这些叙事未必全是假的，但是局面走到这一步，那些老老实实量入为出、出了事自己扛的人，可就都成了没有系统重要性的边缘人。

我们前面讲了宏大叙事是最怕算账的——一句"谁出钱"能帮你看清楚很多事情。稳定、就业、民生、产业链安全、系统性风险等等这些的确都是重要的，但这些都没有明确的受益人和责任人。**每当有人谈论这些大词的时候你就要警惕了：他是准备花别人的钱。** 孩子还小、老人不容易、都是自己人、于心不忍——这些也是真感情，但是每当有人跟你谈感情的时候，你就明白这一局多半是你买单。**爱要有边界，救助要有附加条件，支持不是兜底，容错不是免责，权力跟责任应该对齐。** 软预算约束是人类的制度，别人的钱也是有限的——**大自然的法则终究要求我们尊重硬约束。**
`,V1=`# 079丨可读性：编户齐民中的米提斯

## 讲什么

**可读性**（legibility）——美国政治学家和人类学家詹姆斯·斯科特在《国家的视角》中提出的概念：大系统追求"读得懂社会"的深刻冲动。**可读不只是读，而是"为了我统计方便，你们必须排好队、以让我更可读的方式生活"。** 大系统追求的不是美观整洁，而是可读性。它的反面是**米提斯**（mētis，从古希腊借来的词）：在不断变化、从不重复的现场随机应变、把事情做成的那种活智慧。

## 解决什么真问题

解释"为什么商业街的招牌都要被统一"：某个城市的商业街上各家店铺不管卖什么都要求换成规格统一的招牌，大小颜色字体完全一致——老百姓很不理解，做生意不是应该百花齐放吗？这个现象背后正是大系统最原始的冲动。可读性在古代中国有更硬的说法叫**编户齐民**——秦制的拿手好戏：中央政府管郡县、郡县管户籍，地方上对老百姓搞十户五连坐，把人一户一户盯死在土地上。

## 核心论点

- **国家是个瞎子，可读性是它的眼睛**：哪怕你掌握绝对武力，你也做不到想怎样就怎样——你需要征兵、维持官僚集团运转、必须征税，既能把税收上来又不至于杀鸡取卵。朱元璋时代登峰造极：用黄册登记每一个人、用鱼鳞图册丈量每一寸地，各家各户被设定为军户、匠户、灶户、民户、站户、乐户、船户、越户等等，世代不许改行。**可读性到了这个水平，就等于说为了国家的账本好读，老百姓必须放弃自己人生的可变性。**
- **历史的悖论**：问题不是国家读社会，问题是**国家为了读社会反而把社会读坏**。德国 18–19 世纪的森林：林务官眼里野生森林太乱（树种混杂、灌木藤蔓纠缠、很难估算木材），干脆推到重来种一片"科学林"（单一树种、行距相等、横平竖直像军队方阵）——一开始迎来了林业大丰收，全欧洲来取经；一个世纪后灾难来了：那些被理性清走的真菌、昆虫、鸟雀、枯枝和腐殖质，原来正是森林的免疫系统和营养循环，他们一走地力枯竭、虫害肆虐、一代弱过一代，最后整片林子死了。**国家看见的其实不是森林，而是木材。**
- **李约瑟难题的答案**：明清的聪明人都在考科举。一个把科举官僚考核推到极致的帝国会亲手铲平社会中不可读的野生地，可恰恰是那些野地才长得意外、长得创新突破。**过度可读性和编户齐民不但坑害老百姓，而且会让治理机器自身变蠢变脆。** 帝国最强盛的时候都是前期（土地重新丈量、户口重新登记、役负重新分派），可账本腾清的那一天也正是他开始失灵的那一天——人口会流动、土地会转移、职业会变化、地方胥吏会造假、豪强会隐匿田产、普通人会想办法让自己稍微自由一点。
- **米提斯是体制的幸存者**：真正维持系统运转的是那些不可替换的人——明清流官制想让人可替换（科举出身、异地任职、回避制度），可真正办事的是本地胥吏和师爷（师爷多出自绍兴、靠师徒口传同乡结网），帝国其实是靠这些人撑着的；山西票号在弱法律环境里靠同乡宗族信用网络做成主导全国近一个世纪的汇兑生意——**你读不到，但你不得不用。** 苏联计划经济靠两种人活着：万能修理功（机器出什么毛病都能拼凑修好、不按手册不听领导安排）和推手（动用私人关系把计划里根本配不齐的原料给你搞来）——中国计划经济时代那些工厂不也是这两种人在维持吗？

## 关键例证 / 金句

- 人类最早的文字记录最多的不是诗歌不是情书，而是粮食、税收和劳役——秦始皇统一文字统一度量衡不是方便百姓互通有无，那是国家加强社会可读性的技术。
- 张宏杰的比喻：中国人的精神气质像一条河——春秋是上游水质清、水势急，所以人清澈刚健；汉唐是中游已经泥沙俱下但仍有雄大气象；到了明清河流接近下游水土衰败精神也随之下游，我们看到的不再是先秦贵族气、唐宋的从容文雅和雄健气质，而是越来越多的麻木、顺从、油滑乃至奴性和流氓气。看开蒙读物：《千字文》开篇"天地玄黄宇宙洪荒"何等的格局；《三字经》开篇"人之初性本善"要从伦理秩序学起；《弟子规》就要求"父母呼应勿缓父母行勿懒"——**这是文明气质的收缩。**
- 米提斯是老钳工一摸机床就断定他今晚要出事、可仪表盘一条报警都没有；老编辑读一篇稿子数据全对逻辑无误他却说"这口气不对"；老夜宴跟人吃顿饭合同没毛病他却咬定这人不靠谱。**米提斯不是能进表格的能力，而是知道表格什么时候不够用的能力。**
- 斯科特的"无政府主义体操"：偶尔违反一条无伤大雅、明显不合情理的小规矩，不是为了破坏秩序，而是为了提醒自己"我仍然有判断规则是否合理的能力"。**不要让你的服从变成肌肉记忆，不要让指标替你思考，不要把自己活成组织里最容易被替换的那种人。**
- **身处编户齐民之中，你能跟系统最好的关系是：入格但不入魂。**

## 如何应用

1. **滋养自己的米提斯**：①到现场——米提斯只能从现场出来，而且必须是有后果的现场（对教育的判断你得去看学生到底怎么学、去看那些好老师为什么反而被系统惩罚）；②复盘——经验本身并不产生米提斯，没有复盘的现场只会制造疲惫、油腻和偏见，感悟来自事后诚实的追问（我当时以为会发生什么、实际发生了什么、我漏掉了哪个信号、下次怎么更早闻到味道）；③结网——米提斯常常在一群人的共同记忆里，新人要通过"合法边缘参与"进入实践共同体，得有人领你进圈子；④做笔记系统——档案不留分数和证书，留下你处理过的关键案例、作品的迭代、当时的判断依据、那些差一点就出事却被你拦下的案例（结果给系统看，过程给自己保命）；⑤转译——你得让系统能读到你的价值：公开那层合规达标报表流程做到无可指摘（这是换取自由空间的通行费），同时把你真正的判断力、近乎偏执的坚持、对长期价值的押注放在指标看不见的地方（公开文本和隐藏文本）。
2. **识别编户齐民的压力**：当系统要求你变成标准件（统一招牌、统一格式、统一行为），警惕这是可读性冲动——维护自己不被"低分辨率读尽"的角落。
3. **理解组织的真相**：越想让人可替换的制度，最后越让最不可替换的人掌了实权（胥吏、师爷、票号）——个人价值在于不可替换性。

---

## 全文（清洗后的课程转录，重点加粗+底纹）

欢迎来到现代思维工具课，我是万维钢。中国近年来经常会有一些很奇怪的新闻：某个城市的商业街上，各家店铺不管卖什么都要求换成规格统一的招牌，大小颜色字体完全一致。老百姓都很不理解：做生意不是应该百花齐放吗？搞这种一致性图啥呢？**这个现象背后正是大系统最原始的一种冲动。** 其实都不用很大的系统，连有些出版机构也是如此：他们每一本书封面的样式都高度统一，摆在书架上像穿着制服排队一样，甚至还有编号。如果你可以控制，你会本能地要求世界长得整整齐齐。这不是为了美观整洁——**大系统追求的是一个更深刻的东西，叫做可读性。**

可读性这个概念是美国政治学家和人类学家詹姆斯·斯科特提出来的，出自他的《国家的视角》那本书。咱们前面刚讲过斯科特的学说，他特别善于分析政府如何统治和老百姓如何被统治。很多人以为做统治者可以为所欲为，其实不然：**哪怕你掌握绝对武力、可以任意决定他人的生死，你也做不到想怎样就怎样**——你需要征兵，你需要维持一个官僚集团的运转，你必须征税；你必须既能把钱收上来、又不至于杀鸡取卵破坏老百姓纳税的能力。我们前面讲了谷物国家是最容易征税的，但你也得具体去征才行。想象你是皇帝，统治几千万子民：他们讲几百种方言、种着形状各异的土地，你想收税征兵，可是你怎么知道哪家种了多少地、有多少人呢？斯科特说：**你首先要让社会可读。** 事实上人类最早的文字记录最多的不是诗歌也不是情书，而是粮食、税收和劳役。你以为秦始皇统一文字、统一度量衡是为了方便全国百姓互通有无、搞活市场经济吗？那是国家加强社会可读性的技术。全世界的国家都经历过类似的统治技术升级：给每个人上固定的姓、丈量登记每一块土地、定期清点人口、绘制地图、编定税册，还要发给你一张身份证。

而且可读可不只是"读"——不是说你们该怎么生活就怎么生活、我派人挨家挨户找你们慢慢统计，而是**为了我统计方便，你们必须排好队、以让我更可读的方式生活。** 可读性在古代中国有个更硬的说法叫**编户齐民**——这是秦制的拿手好戏：中央政府管郡县、郡县管户籍，地方上对老百姓搞十户五连坐，把人一户一户盯死在土地上。这套技术到朱元璋时代登峰造极：用黄册登记每一个人，用鱼鳞图册丈量每一寸地，各家各户被设定为军户、匠户、灶户、民户、站户、乐户、船户、越户等等，世代不许改行。**可读性到了这个水平，就等于说：为了国家的账本好读，老百姓必须放弃自己人生的可变性。** 你说这是奴役，但是朱元璋也有话说：没有可读性，国家就是瞎子——如果收不上税或者不能公平地收税，我怎么提供安全、保护和教育这些基本公共服务？

问题不是国家读社会，**问题是国家为了读社会，反而把社会读坏。** 历史反复证明朱元璋的那种可读性并不能让老百姓从此安居乐业。斯科特讲的一个经典案例是 18–19 世纪德国的森林。在林务官眼中，野生的森林太乱了：树种混杂、参差不齐，下面覆盖着数不清的灌木、藤蔓、杂草和藓，很难估算能出多少木材。于是他们干脆推到重来，种下一片"科学林"：单一树种、行距相等、横平竖直，像军队方阵一样。你往那一看：多少棵树、多少立方米、值多少钱清清楚楚，而且施肥、除草、管理也方便——这叫规模化。一开始的确迎来了林业大丰收，全欧洲都来取经。可是一个世纪后灾难来了：**那些被理性清走的东西——真菌、昆虫、鸟雀、枯枝和腐殖质——原来正是森林的免疫系统和营养循环**；他们一走地力枯竭、虫害肆虐、一代弱过一代，最后整片林子死了。德国人最终不得不把当初清走的野性请回森林。回头想想：**国家看见的其实不是森林，而是木材。** 由如此，人何以堪？德国人对森林做的事，就是秦制对古代中国人做的事。

同样以谷物为生，以前的中国人和后来的中国人有什么区别呢？张宏杰有个很有力的比喻：**中国人的精神气质像一条河**——春秋是上游，水质清、水势急，所以人也清澈刚健；汉唐是中游，已经泥沙俱下，但仍有雄大气象；而到了明清，河流接近下游，水土衰败，精神也随之低伏——于是我们看到的，不再是先秦那种贵族气、唐宋那种从容文雅和雄健气质，而是越来越多的麻木、顺从、油滑，乃至奴性和流氓气。咱们就看古代中国人给孩子的开蒙读物：南朝梁武帝成书、流行于隋唐的《千字文》，开篇说的是"天地玄黄，宇宙洪荒，日月盈昃，辰宿列张"——一上来就是天地宇宙，那是何等的格局，生而为人就得思考大问题办大事；到了成书于南宋的《三字经》，开篇就变成了"人之初，性本善"，要从伦理秩序学起了；等到大清康熙年间出来的《弟子规》，要求就成了"父母呼，应勿缓；父母命，行勿懒"——**这是文明气质的收缩。** 不是中国人天生如此，也不是谷物文明必定如此，而是户籍、伦理、科举一层比一层细密的统治技术把人逐渐变得如此。

在这个视角下，所谓**李约瑟难题**的答案不是明摆着的吗？为什么近代科学没有诞生在中国？**因为明清的中国聪明人都在考科举。一个把科举官僚考核推到极致的帝国会亲手铲平社会中不可读的野生地，可恰恰是那些野地才长得意外、长得创新突破。** 过度可读性和编户齐民不但坑害老百姓，而且会让治理机器自身变蠢变脆。秦制王朝统治最强盛的时候都是前期——土地重新丈量、户口重新登记、赋役重新分派、军户匠户灶户各归其位，那真是秩序井然；**可是账本腾清的那一天，也正是他开始失灵的那一天**：人口会流动、土地会转移、职业会变化、地方胥吏会造假、豪强会隐匿田产、普通人会想办法让自己稍微自由一点。没过多少代，连朱元璋的后人都不再相信他那套制度。晚明和晚清的中国都相当自由——一边是商业更发达，一边是政府无力应对新商业局面、汲取能力反而下降，只会欺负农民。

**编户齐民的麻烦就在于：它把那些不好登记的东西——地方知识、非正式合作、试错、异端思想和手艺人的判断——一并抹杀了。** 我讲这些不是为了控诉古代帝国，而是为了说一个有关个人的道理：**人不能把自己给编户齐名。很多人热衷于体制化，其实体制化的人都是可替换的人，可替换的人是最可悲的人。** 斯科特写《国家的视角》，真正想说的不是国家很可怕，而是有一种极为宝贵的东西是国家读不到的。这个东西甚至没有现成的英文表述，斯科特不得不从古希腊借来一个词叫**米提斯（mētis）**：在-不断变化、从不重复的现场随机应变、把事情做成的那种活智慧、那种狡智、机变智慧。

米提斯跟我们前面讲过的波兰尼说的默会知识有点像，但意思不完全一样：默会知识是强调"你知道但你说不出来"；米提斯则是说"只有在本地现场才知道"——也许你能说出来也许你说不出来，要点是不在现场就学不会。**米提斯是老钳工一摸机床就断定他今晚要出大事，可仪表盘上一条报警都没有；老编辑读一篇稿子，数据全对、逻辑无误，他却说"这口气不对"；老夜宴跟人吃顿饭合同明没毛病，他却咬定这人不靠谱。米提斯不是能进表格的能力，而是知道表格什么时候不够用的能力。**

面对编户齐民，你要做的不是逃进山里让自己不可读，而是在城市、公司、平台、学校里保留一块不被低分辨率读尽的地方。你要追求和守住米提斯。米提斯不是钻系统的空子，而是对系统的补充。**历史证明：越想把人齐整整的体制，反而越离不开那些读不清的人。** 比如说大明和大清都是流官制，地方主官三年一换而且还有回避制度不许在本省任职——这是一种很刻意的可读性设计：把官员变成可以随时替换的标准零件，防止他成为坐大的地方势力。但这是一个相当荒唐的设计：一个科举座家受到的所有训练就是写八股文，连一件实事都没干过，直接空降就能主政一方吗？他知道怎么办钱粮吗？他连当地方言都听不懂。**真正办事的人是本地的胥吏，是官员自掏腰包聘请的师爷**——尤其师爷多出自绍兴，靠师徒口传、同乡结网把具体的操作攥在手里。朝廷不会直接看见这些人，朝廷只跟官员说话，但是帝国其实是靠这些人撑着的。**想让人可替换的制度，最后让最不可替换的师爷长了实权。**

再看山西票号：在一个连合伙和契约条款都写不全的弱法律环境里，晋商居然做成了主导全国近一个世纪的汇兑生意。他们当然不是靠国家政策，而是靠同乡和宗族的信用网络筹资、靠担保人招募伙计。正是多亏了山西票号，中国才能在没现代银行体系的时代把北京、平遥、汉口、上海、广州乃至更遥远的商路上的银钱连成一张网——晋商把银子从必须搬运的金属变成了可以汇兑的信用，结果连朝廷和地方政府都得靠这些票号完成跨地调款。**你读不到，但你不得不用。** 如果编户齐民真的像朱元璋设计的那样运转，国家早就不行了——上面胡乱搞，下面还能勉强维持，靠的是他们看不见的那些拥有米提斯的人。

有人研究苏联计划经济，发现了一个有意思的现象：苏联的工厂其实是靠两种人活着的。一种是机器出什么毛病都能给你拼凑修好的**万能修理功**——他不按手册操作、不听领导安排、也不指望上级的帮助，就靠自己的耳朵和手感、拿一堆旧零件找到替代方案把事给你对付过去。另一种叫**推手**——他们会动用私人关系，把计划里根本配不齐的原料给你搞来（苏联也有关系网，叫做 blat）。你想想中国计划经济时代那些工厂不也是这两种人在维持吗？最近热播的电视剧主角里《漫长的季节》的舅舅、县剧团司机龚彪就是他们的典型：他不说套话、不尊重组织程序、不服管、甚至还有点江湖气，但是领导拿他没办法——**因为真能解决问题的恰恰是这种白专能。编户齐民喜欢培养可替换的人，但真正维持系统运转的是这些不可替换的人。他们不是体制的成就，甚至不是体制的恩赐，他们是体制的幸存者。米提斯是不会死的。**

那你说我怎么滋养自己的米提斯呢？首先你得到场——米提斯只能从现场出来，而且必须是有后果的现场：坐在办公室里可长不出来。对教育的判断，你得去看学生到底怎么学、去看那些好老师为什么反而被系统惩罚。然后要辨析：我私下认为米提斯很难刻意练习，因为你做的不是同一类型的题，你必须见过 1000 个相似却从不相同的局面，才能练出"差一点就完全不同"的辨别力。**你真正的学习方法是复盘**：经验本身并不产生米提斯，没有复盘的现场只会制造疲惫、油腻和偏见；感悟来自事后诚实的追问——我当时以为会发生什么？实际发生了什么？我漏掉了哪个信号？下次怎么更早闻到味道？你还需要结网：米提斯从来不是孤胆英雄的专利，它常常在一群人的共同记忆里——米提斯的学习是一种情境学习，新人要通过"合法边缘参与"进入实践共同体，说白了就是得有师傅领你进圈子，绝窍不是写在 PPT 里，而是在"我跟你说上次有个案子"这种私下聊天中传承的。再往后要留痕：你需要一个笔记系统，建一份档案——不留分数和证书，而是要留下你处理过的关键案例、作品的迭代、当时的判断依据、以及那些"几乎就要出事却被你拦下来"的差一点就失败——**结果是给系统看的，而过程是给自己保命的。** 最后一步叫转译：你得让系统能读到你的价值，虽然他读不懂——你得证明自己对系统的价值，这意味着你要把手感翻译成制度能承认的东西。斯科特的说法叫**公开文本和隐藏文本**：把公开那一层合规达标、报表流程做到无可指摘，这是你换取自由空间的通行费；同时把你真正的判断力、近乎偏执的坚持、对长期价值的押注放在指标看不见的地方。

1990 年的某天晚上，斯科特在原东德一个地方的十字路口等红灯：路上明显一辆车都没有，可是几十个行人却依然规规矩矩地在等，偶尔有人穿过去还会被当众责备。斯科特忽然意识到：**服从不是从大事开始训练的，服从是从这些小的、无意义的等待里习惯成自然的。** 斯科特提出一个建议（我一听就立即采纳），叫**无政府主义体操**：偶尔违反一条无伤大雅、明显不合情理的小规矩，不是为了破坏秩序，而是为了提醒自己——我仍然有判断规则是否合理的能力。**不要让你的服从变成肌肉记忆，不要让指标替你思考，不要把自己活成组织里最容易被替换的那种人。身处编户齐民之中，你能跟系统最好的关系是：入格但不入魂。**
`,W1=`# 080丨共同知识：让众人服从的神器

## 讲什么

**共同知识**（common knowledge）——你并不喜欢某个明星的作品，可听说他来开演唱会还是会抢票，站在面前还会莫名敬畏。你敬畏的不是他这个人，而是他聚集的目光，是所有**人都承认他很重要**这个事实。共同知识的概念由美国哲学家大卫·刘易斯 1969 年提出，罗伯特·奥曼 1976 年给了博弈论形式化。对一件事"知道"有三种深浅：**私人知识**（我知道，不知你是否知道）、**共有知识**（大家都知道，但没人挑明）、**共同知识**（我知道你知道我知道……层层嵌套到无穷）。

## 解决什么真问题

解释"为什么一整片人会心甘情愿服从一个未必多高明的人"：一个人服从你可以因为怕你、信你、敬你、爱你；一群人服从你需要领导力和叙事；可让管辖范围内**所有**人都服从，靠的则是另一种东西——**他们彼此看见了对方在服从**。共同知识是一间互相反射的镜厅，谁掌握了它，谁就握住让一片人同时行动的总开关。

## 核心论点

- **私人知识让你看见真相，共同知识才让你敢于行动**：皇帝的新衣里每个人都看见真相，直到小孩喊出来——私人知识升级为共有知识，跟着喊的人再把它升级为共同知识，协调立即改变。
- **共同知识需要突变式创造，不是逐渐积累**：明星靠一套套仪式加冕——红毯让所有人看见他被看见，热搜让所有人知道他正被讨论，演唱会让一群人同时确认"原来这么多人和我一样喜欢他"。仪式不是证明他有多好，而是证明他处于共同注意力中心。
- **仪式的作用是把一条意义变成共同知识**：人类爱搞圆形向内的集会——罗马圆形剧场、麦加的克尔白，机理相同：让每个人看见每个人，并且看见彼此都在看。大会的重点不是信息，而是重申共同知识。
- **复杂大系统的失败很难成为共同知识，所以烂局面能持续很久**：没有明确的比分牌，你甚至可以把一场失败说成胜利。创业公司连续四年亏损，第一年叫战略投入期、第二年叫市场教育期、第三年叫组织能力沉淀期——**只要你不下最终裁判，就没有人能宣布你输了。**
- 皇帝宝座之稳，不是人人真心拥护，而是**人人都知道人人都必须表现得拥护**——赵高指鹿为马正是制造服从的仪式，把"我们都不敢忤逆赵高"变成谁砸不动的共同知识。

## 关键例证 / 金句

- 两军夹击协调难题：派信使约好同时出兵，收到信也不敢出兵——必须确认"我知道你收到了信"。多送一封信只把确定性往前推一层，永远留有下一层不确定。
- 中央车站是纽约人共同的焦点，所以能协调博弈。**礼也是一种共同知识：不是流程多正确，而是它足够显眼——显眼就是正确，被看见就开始被服从。**
- 丹尼尔·布尔斯廷：**所谓名人，就是因为知名而知名的人。**
- 超级碗广告费 800–1000 万美元，打的却是早就家喻户晓的啤酒薯片——他们要的不是传递信息，而是制造共同知识：让你知道所有人都知道这品牌还在场、还很有钱。
- **微博热搜不是新闻，是一场仪式：它告诉你的不是发生了什么，而是大家都在看什么。**
- **共同知识一旦建立就极难崩塌**：慈禧被八国联军赶出北京，大清也没有立即灭亡。但会有临界点——当丑闻变成"大家都知道大家已经不信了"，共同知识就被击穿。它不是被事击穿的，而是被事变成共同知识击穿的。

## 如何应用

1. **更自由一点**：把"我是真喜欢"和"大家都说好"拆开——很多所谓热爱不过是在向一个焦点鞠躬。服从共同知识是理性的，但总有一个时刻，你会点对你来说最好的那道菜，而不是大家都点的那道菜。
2. **主动制造共同知识**：想推动变革，不要发 100 封邮件，要把 100 个人拉进一间屋子开全员大会，让每个人的点头都被所有人当场看见。**谁总能能把混乱讨论整理成一句大家都懂的话，谁就在制造共同知识。**
3. **看懂组织**：理解为什么汉唐常换皇帝而明清皇位稳固——汉的朝廷有外戚、门阀、强军、宦官多个强焦点，宋以后皇帝成了秩序的唯一中心。复杂系统的失败很难成为共同知识，所以人人不满的局面仍能持续很久。

---

## 全文（清洗后的课程转录，重点加粗+底纹）

欢迎来到现代思维工具课，我是万维钢。你心目中有没有那样的明星？你并不喜欢他的作品，认为他的水平不怎么样，可听说他来本地开演唱会，你还是会看一眼票价、甚至跟着抢票；他随口带个货你可能会买；如果他真站到你面前，你心里还会咯噔一下，莫名敬畏。**你敬畏的到底是啥呢？不是他这个人，而是他聚集的目光，是所有人都承认他很重要这个事实。** 这件事背后的机制比明星效应大得多，我们要说的这个思维工具是统治者的神器，叫做**共同知识**。

一个人服从你，可以是怕你、信你、敬你、爱你；一群人服从你，你需要有领导力、会叙事或者掌握武装；可是要让一整片人——不是一群，而是你管辖范围内所有的人都心甘情愿服从，靠的可不是你的品质和能力了，而是另一种东西：**他们彼此看见了对方在服从。共同知识是一间互相反射的镜厅，谁掌握了它，谁就握住了让一片人同时行动的总开关。**

共同知识最早由美国哲学家大卫·刘易斯在 1969 年提出，是他首先意识到人类社会的协调靠的是共同知识；以色列美国经济学家罗伯特·奥曼在 1976 年又给了它基于博弈论的更严格的形式化表达。道理很简单：对一件事"知道"有三种深浅。第一种叫**私人知识**——我知道，但我不知道你知不知道；第二种叫**共有知识**——我知道你也知道，甚至大家都知道，可是没人把话挑明，谁也不敢打包票对方一定知道；第三种才叫**共同知识**——我知道，你知道，而且我知道你知道，你也知道我知道，层层嵌套直到无穷。

为什么需要折腾共同知识？打比方：咱俩各领一支部队，一南一北准备夹击敌人，必须同时出手才有胜算。今晚我派信使给你送信，约明早出兵。你收到信立即出兵吗？不行——你必须确认我知道你已经收到信了，这样我才一定出兵。于是你回信说"我收到了"，可是回信也可能被截获，所以我又要想：你知不知道我已收到你的回信？于是还得再派信使……**每多送一封信，只是把确定性往前推一层，却永远留有下一层的不确定。要确保协调，信息必须成为共同知识，就像面对面说话一样。** 也许可以在山顶同时点起烽火，我们都看见对方也看见了——当然敌人也看见了。所以把共有知识变成共同知识是有困难的。

最经典的共同知识案例是皇帝的新衣：每个人都认为皇帝是光着身子的，但万一是自己看错了呢？直到小孩喊出来——有第一个就有第二个，等喊的人多了你也敢喊了。**小孩把私人知识升级成了共有知识，跟着喊的人则把共有知识升级成了共同知识。这一切几乎在一瞬间发生，而众人的协调立即改变。私人知识也许能让你看见真相，共同知识才让你敢于行动。**

奥曼与托马斯·谢林因博弈论研究获得 2005 年诺贝尔经济学奖。其实我们前面讲过的谢林的焦点就是一种共同知识：**中央车站是每个纽约人都知道的地标，所以它成为焦点，起到协调博弈的作用。礼也是一种共同知识——不是这套流程有多正确，而是它足够显眼。显眼就是正确，被看见就开始被服从。** 这也是为什么明星令人敬畏。美国历史学家丹尼尔·布尔斯廷有句名言：**所谓名人，就是因为知名而知名的人。**

明星是怎么练成的？不是今天一个好作品明天一个好作品积累出来的——**共同知识需要某种突变式的创造。明星是靠一套套仪式加冕出来的：** 红毯是让所有人看见他被看见，热搜是让所有人知道他正被讨论，粉丝接机是把私人喜欢演成公共景观，代言海报是让他的脸占领城市的日常视野，颁奖典礼是由同行和媒体替他盖章，演唱会是让一群人同时确认"原来这么多人和我一样喜欢他"。这些仪式不是证明他有多好，而是证明他处于共同注意力的中心。

政治学家柯林斯在《互动仪式链》里问：人类为什么那么爱搞圆形向内的集会？罗马的圆形剧场、麦加的克尔白、广场上的方阵——**向内的圈子让每个人都能看见每个人：你不仅看见中心的仪式，还看见所有人都在看这个仪式，并且看见他们也看见你在看。仪式之所以有力，在于它让你确信别人也都收到了同一条意义。仪式的作用就是把一条意义变成共同知识。**

超级碗广告为什么那么贵？2026 年普通 30 秒广告约 800 万美元，黄金位置据说能到 1000 万。可做的都是早就家喻户晓的啤酒、薯片、汽水、汽车、保险。**他们要的不是传递信息，而是制造共同知识：让你知道所有人都知道这个品牌还在场、还很有钱、还属于美国人的共同生活。** 如同古代贵族参加宫廷典礼：你是为了让所有人看见——我仍然在这个圈子里。**微博热搜不是新闻，是一场仪式：它告诉你的不是发生了什么，而是大家都在看什么。** 蓝V认证、粉丝数、销量榜、双11成交额大屏、演唱会秒空，全是同一种装置：它们不耐心说服你"这个东西好"，而是向你广播"看，大家都认可它"。**仪式瞄准的不是你的判断力，而是你的协调本能。**

再想从小到大参加的大会：领导讲的都是套话，流程早就排练好了。为什么还要开大会？**因为大会的重点本来就不是信息，而是重申共同知识：组织仍然有中心，中心仍能召集人，所有人仍愿按同一套秩序坐在这里。你不是在听领导讲话，你是在看同事听领导讲话，同事也在看你听领导讲话。**

我前面讲地位时说过：支配和声望两条路径都能让人服从你，但只能让非常有限的人服从。**规模化的统治力必须依靠共同知识：绝大多数人根本不认识你，但他们还是选择服从——首先是既然别人都服从，我最好也服从；更重要的是就算我想反抗，只要没看见别人反抗，我也不应该反抗，因为我单方面的反抗肯定是无效的。** 赵高指鹿为马就是如此：那不只是一场忠诚度测验，更是制造服从的仪式——**赵高要你当众把鹿叫成马，这样每个大臣都能亲眼看见其他大臣都不敢反对，就把"我们都不敢忤逆赵高"变成了谁砸不动的共同知识。**

注意明清两朝的皇帝位置都非常稳固，哪怕登基时年龄很小、甚至像崇祯那样做了一系列错事，满朝文武也没敢换掉皇帝。为什么？汉唐可是经常换皇帝的——汉的朝廷上有好几个强焦点：外戚、门阀、强军、宦官各有势力，换一个皇帝并不不可想象，完全可以包装成清君侧或奉太后旨意。宋以后门阀世族在皇朝起义和五代战乱中被杀光了，文官多是科举平民子弟，皇帝从政治参与者被抬成了整个秩序的唯一中心。**皇权是这些力量最大的共同知识：哪怕皇帝昏庸，只要你不知道别人也公开承认皇帝可以被换，你就不敢迈出那一步。皇帝宝座之所以稳，不是人人真心拥护，而是人人都知道人人都必须表现得拥护。**

理解了这些，才能理解为什么很多明十分不好、几乎人人都不满的局面还能持续很久——**因为复杂大系统的失败很难成为共同知识。** 足球比赛有中场和比分牌，输了就是输了；可如果你治理的是复杂大系统，几乎没有人能宣布你输了。俄乌战争打成那样、死了那么多人也没占到多大领土，可地位仍然稳固——完全可以说不但没输，而且国际地位更高了。创业公司连续四年亏损，第一年叫战略投入期、第二年叫市场教育期、第三年叫组织能力沉淀期、第四年叫资本寒冬暂时压住了创新。**只要没有一个公开的、共同承认的结算时刻，失败就可以被改名、被延期、被包装成下一轮融资的理由。这就是神器在手的好处：只要你不下最终裁判，就没有人能宣布你输了，天命就仍然在你这里。**

知道这些道理又能如何呢？首先我们可以更自由一点：**下次你心动想追、想买、想服从什么，把"我是真喜欢"和"大家都说好"拆开**——你会发现很多所谓热爱不过是在向一个焦点鞠躬。看破不一定说破，服从共同知识是理性的，协调本身往往是聪明的。我们不是不从，而是要清醒地从。总有一个时刻，你会点对你来说最好的那道菜，而不再点大家都点的那道菜。

进一步，你可以主动制造共同知识：想发动一群人、带一个团队推一项变革，**光传播信息不行——不要发 100 封邮件，要把这 100 个人拉进一间屋子开全员大会，让每个人的点头都被其他所有人当场看见。** 事前可以私下讨价还价，大会上必须所有人给你鼓掌。**谁总能能把混乱讨论整理成一句大家都懂的话，谁就在制造共同知识；谁总能让分散的人知道彼此存在，谁就在制造共同知识；谁总能把私下的犹豫变成公开的承诺，谁就在制造共同知识。**

共同知识一旦建立起来，就极难崩塌。慈禧被八国联军赶出北京，大清也没有立即灭亡；一个明星演了几部烂片，只要红毯、代言和粉丝还在运转，他就还没有真正翻船。但会有一个临界点：**当丑闻不再只是丑闻，而变成"大家都知道大家已经不信了"；当老板的失误不再只是私下吐槽，而变成"大家都知道大家都看见他不行了"——共同知识就会被击穿。它不是被事击穿的，而是被事变成共同知识击穿的。** 好，以上就是今天的全部内容，现代思维工具课，祝您每天都有收获。
`,G1=`# 081丨替罪羊：从"找坏人"到"看系统"

## 讲什么

**替罪羊机制 / 系统思维**——学者思考社会问题跟老百姓有一个特别重要的区别：**老百姓总问好人和坏人，学者倾向于琢磨系统**。老百姓眼中办好事的是清官、办坏事的是贪官、开国之君英明神武、亡国之君昏聩无能——这是戏曲思维，把历史想象成几个红脸白脸在台上念做打。可回到历史现场全面考察，你会发现根本不是那回事：崇祯皇帝勤政节俭、累得半死，文官各个自认在为国分忧，吴三桂原本不想卖国——**这些人不是没有缺点，但他们都是正常人。** 你要问的不是这些人有多坏，而是：朝廷为什么不得不加征三饷？官员为什么非得报喜不报忧？农民为什么不能老实种地而只能造反？——为什么一群正常人在理性行事之下把系统搞崩溃了。

## 解决什么真问题

解释"为什么出事之后我们本能地要找一个人来背锅，而找背锅侠永远解决不了问题"：疫情、火灾事故、危机发生后，我们的大脑很难接受"这是复杂系统在某个临界点的涌现"，一定要问"是谁干的"，而且认为是某人故意干的、是他的本性如此。**找替罪羊不只是认知错误，还满足了人类更深层的心理需求**——替罪羊机制是文明最古老的止痛药：它从不治本，但能管一阵子用；把坏事归到具体的少数人头上，社会就不用反思了。责任下沉，合法性就上升。真正解决问题的路径是：**用系统思维取代戏曲思维，从个体归因的习惯中跳出来。**

## 核心论点

- **个体归因是极为顽固的倾向**：从草丛突然动了一下，你最好把他理解成有一只豹子走过来，而不是风吹的——宁肯误判，也别漏掉来自他人的恶意。这个倾向在原始环境很有用，但在现代社会，它让我们把复杂系统的涌现误当成坏人的阴谋。
- **基本归因谬误**（社会心理学家李·罗斯 1977）：我们解释他人行为时，往往高估性格品质和意图的因素，低估处境和结构的原因。别人迟到，第一反应是他没有时间观念，而很少想他是否遇上堵车；基层员工犯错，第一反应是他责任心差，而很少想工作量是不是超了、培训是不是缺失、流程是不是有问题。
- **瑞士奶酪模型**（安全工程学家詹姆斯·瑞森）：复杂系统有很多层防线——设计规范、培训流程、检查表、报警系统、监管制度、现场操作，每一层都可能有漏洞，合在一起像一块瑞士奶酪。平时洞是错开的，危险穿不过去；某个时刻每一层的洞排成一条直线，事故就贯穿而出。**重大事故很少是单一原因，那是多道防线同时失效的结果。你该整改的不是显性失误，而是潜在条件。**
- **公正文化三分法**（安全工程顾问代马克斯）：把造成坏后果的行为分三类区别对待——①无心之失（疲劳看错药名）：最好的办法不是惩罚而是安抚和修正系统，惩罚无心之失会让人隐瞒错误，系统就无法学习；②冒险行为（图方便省掉双人复核）：必须纠正，但重在训练而非惩罚，重点是消除系统中奖励走捷径的错误激励；③鲁莽违规（明知材料不合格还放行）：没话说，必须严厉。
- **最可悲的是**：最热衷维护替罪羊解释的人，恰恰是系统里最弱势的群体——因为"有个坏人害了我"至少还是有希望的故事，抓住坏人、换个清官日子就能好；而压迫你的是整个结构、根本没有一个单独坏人可恨，那太绝望了。也许戏曲思维最深的根，就在那一点心酸的希望里。

## 关键例证 / 金句

- 米尔斯《社会学的想象力》：一座十万人口的城市里有一个人失业，那大概是个人困扰，该反思自己的技能、努力、性格和运气；可一个五千万劳动力的国家里有 1500 万人失业，那就是公共议题，必须去看经济制度、产业结构、政策周期和社会资源配置。一家公司一个员工造假是品行问题，成百上千人都在造假，就得问这里的指标构成和管理文化是不是在系统性地逼人作恶。
- 马克思《路易·波拿巴的雾月十八日》：**人们创造自己的历史，但不是在自己选择的条件下创造，而是在既定的、从过去承继下来的条件下创造。** 拿破仑发动政变是悲剧，他侄子路易·波拿巴发动政变则是闹剧，可偏偏侄子当上了长久的皇帝——人有选择，但选择发生在结构里。
- **波音 737MAX 两起空难**（2018 印尼狮航 610、2019 埃航 302，共 346 人遇难）：波音第一时间找替罪羊说是飞行员操作不当，可后来的调查显示真正的问是一串系统性漏洞排成了直线——机动特性增强系统（MCAS）遇错误传感器数据反复压低机头、飞行员没受过针对这种错误的模拟训练（波音为了省培训费淡化了它的存在）、波音为对抗空客 A320NEO 在老 737 平台换装大发动机导致气动特性改变才搞了软件对付、美国联邦航空局长期采用授权委托机制等于波音自己监管自己。
- **2021 年德州大停电**：舆论找到的替罪羊是风力发电机——"天一冷风机冻住了，新能源不可靠"。可调查显示天然气机组占了故障机组的 58%，真正的问题是德州电网为躲避联邦监管是个孤立电网，没做强制防冻改造、没有冗余，天然气和电力互相拖死——那是死亡螺旋。**风机动住只不过是出事的一个契机而已。**
- 基拉尔替罪羊机制：当共同体内部矛盾越来越大、冲突快要失控，人们会无意识把分散的敌意集中到一个具体对象身上（外族人、异教徒、某个少数群体、某个倒霉的个人），通过共同迫害他暂时恢复团结。**说直白一点：替罪羊机制就是人群为了从"所有人斗所有人"走出来，变成"所有人斗一个人"。**

## 如何应用

1. **出事时先问系统，再问个人**：遇到重大事故，先问"这个系统为什么能让人犯这么大的错误"，而不是急着骂当事人。瑞森的原话：**我们无法改变人的本性，但可以改变人们工作的条件。** 如果你只处理人、不处理条件，下一次还会得到同样的事故。
2. **用公正文化三分法区分责任**：无心之失→修正系统；冒险行为→纠正训练、消除错误激励；鲁莽违规→严厉追责。这样既能避免"出事一定抓坏人"的幼稚病，也能避免"反正都是系统问题谁都不用负责"的虚无——事情往往既有人的责任，也有系统的责任。
3. **警惕自己成为替罪羊机制的燃料**：当舆论急着找投毒者、阴谋集团或内部敌人时，停下来想想——这是不是在用"所有人斗一个人"来回避"所有人斗所有人"？**一个坏人造成了天大的事故甚至长期危害一方，我们就要问一问：这个系统到底是怎么回事，能给他那么大的杠杆？找替罪羊是人的本能，但看系统也是现代人的本分。**

---

## 全文（清洗后的课程转录，重点加粗+底纹）

欢迎来到现代思维工具课，我是万维钢。学者思考社会问题跟老百姓有一个特别重要的区别：**老百姓总是问好人和坏人，而学者倾向于琢磨系统。** 老百姓眼中办好事的是清官、办坏事的是贪官，开国之君一定英明神武，亡国之君一定昏聩无能——这可以说是戏曲思维，把历史想象成几个红脸白脸在台上念做打。可如果你能回到历史现场全面考察一番，你会发现根本不是那回事。就拿明朝灭亡来说，真实历史更接近于：崇祯皇帝殚精竭虑、累得半死，文官各个自认是在为国分忧，武将人人也都有自己的忠诚和难处，吴三桂原本不想卖国，祖大寿很想想为国家战死。**这些人不是没有缺点，也不是不贪污不怕死，但他们都是正常人。** 你应该问的不是这些人有多坏，而是：朝廷为什么不得不加征三饷？官员为什么非得报喜不报忧？农民为什么不能老实种地而只能造反？——**你应该研究的是：为什么一群正常人在理性行事之下把系统搞崩溃了。你需要用系统思维取代戏曲思维，那么你必须克服给系统失败找替罪羊的倾向。我们不能读那么多历史，只读出一出又一出的道德戏剧，我们得琢磨制度工程。**

首先你得从个体归因的习惯中跳出来。社会学家 C.赖特·米尔斯在 1959 年出版的《社会学的想象力》中有个说法：你得学会区分**个人困扰**和**公共议题**。米尔斯说，一座十万人口的城市里有一个人失业，这大概只是个人困扰——他应该反思自己的技能、努力、性格和运气；但是如果一个五千万劳动力的国家里有 1500 万人失业，这就不是求职者眼高手低能解释的了——**这是公共议题，你必须去看经济制度、产业结构、政策周期和社会资源配置。** 一家公司里有一个员工造假，可以说这个员工品行不好；可如果一个部门、一个大区、一个公司成百上千人都在造假，那你就不能再问"怎么这么多坏人"，你得问：这里的指标构成和管理文化是不是正在系统性地逼人作恶。不是说人没有责任，但人的能动性会强烈受到他所处的场域结构的限制。

就连整天喊着改造世界的马克思，都在《路易·波拿巴的雾月十八日》一文中说：**人们创造自己的历史，但不是在他们自己选择的条件下创造，而是在既定的、从过去承继下来的条件下创造。** 拿破仑发动政变是悲剧，他侄子路易·波拿巴发动政变则是闹剧，可偏偏侄子当上了长久的皇帝，你说上哪说去呢？**人有选择，但选择发生在结构里。**

个体归因实在是一个极为顽固的倾向：如果你周围一切本来好好的，突然之间发生了一个变化，那么你会强烈地感到这个变化是一个有意图的行动者造成的。这个倾向在原始环境中很有用——草丛突然动了一下，你最好把他理解成有一只豹子正在走过来，而不是风吹的，你宁可误判也别漏掉来自他人的恶意。所以要是遇到瘟疫、火灾事故、危机，我们的大脑就很难接受"这是复杂系统在某个临界点的涌现"，它一定要问：是谁干的？我们不但认为一定是有人干的，而且还会认为一定是那个人故意干的、是他的本性就是如此。社会心理学家李·罗斯在 1977 年提出一个概念叫**基本归因谬误**：我们解释他人行为的时候，往往高估性格品质和意图的因素，低估处境和结构的原因。比如别人迟到了，我们的第一反应是"这个人没有时间观念"，而很少想他是不是遇上了堵车之类的突发情况；一个基层员工犯错，我们第一反应是"他责任心差"，而很少想他的工作量是不是超了、培训是不是缺失、流程是不是有问题。如果你相信事情是行动者导致的，又相信行动者的行为是因为他的品质，那么你就会把一个坏的结果归咎于坏人。**我们真的很喜欢听有反派的故事，这不就是戏曲思维吗？**

那怎么跳出戏曲思维看见系统呢？咱们可以借安全工程中的学说。英国心理学家詹姆斯·瑞森有个说法：比如发生了一起重大事故，你可以有两种视角——**人因视角和系统视角**。人因视角盯着第一线人员，是不是这些人疏忽、懒惰、违规导致的；而系统视角则问：防线为什么失效？这个系统为什么能让人犯这么大的错误？不是说人没错误，但人犯的可能只是**显性失误**，系统的问题则是**潜在条件**——一线人员当场犯的错，比如按错按钮、判断失误、忘了检查，这些是显性失误；而管理决策、组织设计、预算压力、设备缺陷、培训不足、监管松弛等等长期埋下的雷，则是事故的潜在条件。这些潜在条件可能已经潜伏了很多年，一直都没事，正等着某个倒霉的一线人员来引爆。那哥们那天也是不小心按错了按钮，结果系统就崩溃了——可你能说这全是他的责任吗？**就好像有人碰倒了一张牌导致一整排多米诺都倒了，这个人不是没有责任，可更大的问题难道不是这个系统为什么会被弄成多米诺骨牌吗？**

瑞森研究航空、医疗、核电这些高风险组织里的事故，提出一个**瑞士奶酪模型**：复杂系统有很多层防线——设计规范、培训流程、检查表、报警系统、监管制度、现场操作等等，每一层防线都可能有漏洞，合在一起就好像一块瑞士奶酪中间有很多洞。平时这些洞是错开的，危险穿不过去；可是某个时刻，奶酪每一层上的洞排成一条直线，事故就贯穿而出了。**也就是说重大事故很少是单一原因造成的，那是多道防线同时失效的结果。所以你最该整改的不是显性失误，而是潜在条件。** 用瑞森自己的话说：**我们无法改变人的本性，但可以改变人们工作的条件。** 这不是说要宽恕犯错的人，而是提醒你：如果你只处理人、不处理条件，你下一次还会得到同样的事故。

咱们看两个真实案例。2018 年 10 月 29 日印尼狮航 610 号航班坠毁，189 人遇难，飞机型号波音 737MAX。波音公司对此的反应是立即找替罪羊，说是飞行员操作不当——是啊，波音是什么公司？人家的飞机都是经过美国联邦航空局认证的，肯定是外国航空公司的飞行员出错了。可是紧接着 2019 年 3 月 10 日，埃塞俄比亚航空 302 航班坠毁，157 人遇难，又是波音 737MAX，而且以相似的方式坠毁——这可压不住了。后来的调查显示：**真正的问题恰恰是一串系统性的洞排成了直线。** 最靠近事故现场那一层的洞是一个软件叫机动特性增强系统（MCAS）：它会在特定飞行状态下自动压低机头，补偿新发动机带来的气动变化；这个软件一旦遇到传感器给出错误数据，就可能误判飞机要失速，于是反复把机头往下压。第二层的洞是飞行员没经历过针对这种错误的模拟训练——波音为了尽量避免要求航空公司花大钱重新培训飞行员，在培训中淡化了 MCAS 的存在。那为啥非要有这么个软件呢？第三层的洞是波音面对空客 A320NEO 的竞争必须尽快推出新机型，就在老 737 平台上换装了更大更靠前的发动机导致气动特性变了，可又不想对飞机大改，才搞了这么个用软件对付的办法。第四层的洞是波音这么干竟然没人管——美国联邦航空局长期采用授权委托机制，把大量认证工作交给波音内部人员完成，等于波音自己监管自己。**所以你能只怪飞行员操作失误吗？你能说这是因为工程师写错了代码吗？这是整个系统的问题。**

第二个案例是 2021 年一场极端寒潮袭击了美国得克萨斯州，数百万户家庭停电，很多人失去供暖和饮用水。灾难发生，舆论就找到一个替罪羊——那就是风力发电机：天一冷风机就冻住了，这不就说明新能源不可靠、绿色能源害死人吗？可后续调查显示，德州电网崩溃还真不能说是风电害的：风机确实有冻结停摆，但天然气、煤炭、核电等传统能源系统也在恶劣天气中大规模失效，其中天然气机组占了故障机组的 58%。**真正的问题是德州电网的结构：** 为了躲避联邦监管，这个电网是个孤立的电网，跟别的州没有联系，邻州的电在有事的时候送不进来；也正是因为不受联邦监管，它没有做强制防冻改造、没有足够的冗余；特别是天然气和电力互相拖死——发电需要天然气，可采气输气本身又需要电力，那是一个死亡螺旋。**事实是那个电网早就不行了，风机冻住只不过是由头的一个契机而已。** 你看像这样分析出系统的原因，不比骂左派右派有用多了吗？如果发生金融危机时只知道骂华尔街太贪婪有什么用呢？

出事找替罪羊不只是一个认知错误，而且还满足了人类更深层的心理需求。法国哲学家勒内·基拉尔有一套著名理论就叫**替罪羊机制**：当一个共同体内部的矛盾越来越大、冲突快要失控的时候，人们会无意识地把分散的敌意集中到一个具体对象身上——这个对象可以是外族人、异教徒、某个少数群体或者某个倒霉的个人；然后通过共同迫害这个替罪羊，大家就可以暂时恢复团结。瘟疫来了、经济坏了、社会焦虑升高，人们处理不了甚至理解不了这些复杂的危机，但必须采取一个什么行动出口恶气，这时候就迫切需要找到一个投毒者、一个阴谋集团或者一个内部敌人。**说直白一点，替罪羊机制就是人群为了从"所有人斗所有人"走出来，变成"所有人斗一个人"。** 咱们回忆一下人类历史是不是这样——替罪羊不是被找出来的原因，而是被选出来的出口。**替罪羊机制是文明最古老的止痛药：它从不治本，但能管一阵子用。把坏事归到具体的少数人头上，社会就不用反思了——我们没问题，都是他们的错。这其实是权力最喜欢的因果模型：责任下沉，合法性就上移。**

你知道最可悲的是什么吗？**最热衷于维护替罪羊解释的人，恰恰是系统里最弱势的群体。** 为什么？因为"有个坏人害了我"至少还是一个有希望的故事——抓住坏人、换个清官，日子就能好；而压迫你的是整个结构，根本就没有一个单独坏人可恨，那太绝望了。也许戏曲思维最深的根，就在那一点心酸的希望里。

我们还可以从另一个角度考虑替罪羊机制：到底什么是坏人？一个官员因为受贿赂把工程包给了一家不称职的建筑公司，导致桥梁倒塌，你说这个官员是坏人吗？美国安全工程顾问代马克斯有个学说叫**公正文化三分法**，把造成坏后果的行为分成三类，认为应该区别对待。第一类是人人都可能有的插错，也就是无心之事——医生疲劳状态下看错一个药名，飞行员在混乱报警中漏掉一个步骤。对这种错误最好的办法不是惩罚，而是安抚和修正系统——因为你惩罚无心之失，就会让人隐瞒错误，而隐瞒错误系统就无法学习。第二类是**冒险行为**——他不是有意作恶，但的确冒了不该冒的险，通常是人为了省时间图方便、赶指标，慢慢偏离安全做法：比如本来应该双人复核，大家觉得麻烦就长期省掉；本来有安全流程，现场为了赶进度就绕过去。对这种行为必须纠正，但重在训练而不是惩罚，特别是要消除系统中的错误激励——人之所以走捷径，往往是因为系统在奖励走捷径。第三类是**鲁莽违规行为**——明知道存在重大且不正当的风险，却为了私利硬要去做：比如明知桥梁材料不合格还放行，明知药品造假还签字，明知安全隐患严重还强令生产。对这种人格没话说，必须严厉。**这样一看就清楚了：贪官其实是第三类人。恐怕没有哪个官员一心就想把国家搞坏，他们想的往往是"这家公司可能不如最好的公司，但应该也能干""这个材料便宜一点，应该也不会出事"——所以贪官被捕之后都说"我当时抱有侥幸心理"。**

有了这个三分法，我们就能避免两种幼稚病：一种是"出了事一定抓坏人"，一种是"反正都是系统问题谁都不用负责"。**其实事情往往既有人的责任，也有系统的责任。至少达到这样的颗粒度，我们才能合理追责、改进系统。** 世界上当然有坏人——鲁莽、恶意、腐败、欺诈都应该追，但我们还是需要一点社会学的想象力：如果一个坏人欺负了一个人，我们完全可以说就是因为他本身是个坏人；但**如果一个坏人造成了天大的事故、甚至长期危害一方，那我们就必须问一问：这个系统到底是怎么回事，能给他那么大的杠杆？找替罪羊是人的本能，但看系统也是现代人的本分。** 好，以上就是今天的全部内容，现代思维工具课，祝您每天都有收获。
`,H1=`# 082丨非预期后果：好意图怎么会带来坏结果？

## 讲什么

**非预期后果 / 意图与激励**——不管你是治理国家、经营公司还是管理小孩，当你手握权力时会有一种本能冲动：我想要什么就奖励什么，不想要什么就禁止什么，担心什么就审批什么，看重什么就考核什么。如果你这么想，就把社会当成了线性机器，认为只要遥控器掌握在好人手里就行——而你，就是那个好人。**殊不知好的意图并不一定能带来好的结果，现实往往是：好心经常办坏事。** 社会学家罗伯特·默顿称之为"有目的社会行动的非预期后果"。

## 解决什么真问题

解释"为什么几乎每个好心的政策最后都事与愿违"：经济学最重要的一个定律就是**人会对激励做出反应，而且人们反应的是激励而不是意图**。哪怕你有再大的权力可以随意出台任何政策、制定任何新规则，你能改变的也不是结果本身，而是局面——人们会根据这个局面重新行动，但未必像你想的那样行动。你以为的政策路径是"政策→行为改变→达成目标"，真实世界却是"政策→激励变化+预期变化+执行变形→人的行为再优化→系统反应→非预期结果"。**上面说的是意图，下面听到的是价格；上面说的是价值观，下面看见的是收益表；上面说的是方向，下面感受到的是约束条件。这不是群众觉悟低，这是社会系统的基本物理学。**

## 核心论点

- **经典失败案例清单**：旧金山 1994 年房租管制→房东卖房或改作他用，出租房减少 15%、租金反涨 5%，穷人更难租到房；美国 1973 年濒危物种法→土地所有者担心开发受限，干脆提前砍掉可能成为栖息地的树林；加州 2014 年禁免费塑料袋→商家用收费的更厚的可重复使用塑料袋替代，消费者用完就扔，2022 年全州填埋的塑料袋垃圾不降反升，从 15.7 万吨暴涨到 23 万吨；美国 2009 年旧车换现金→短期销量上去，研究却发现绝大部分购买只是把本来过几个月要做的决定提前了，补贴一停销量原地跌落。
- **以色列幼儿园迟到罚款实验**：家长接孩子总迟到，幼儿园定了"迟到罚款"的规矩，结果家长迟到更多——罚款之前准时接是一种道德义务，迟到了会愧疚；有罚款之后迟到成了一项明码标价的服务，"我多付点钱买你老师半小时加班"，愧疚感一扫而空。后来取消罚款，迟到率却再也没降回去——**那一层道德感一旦被价格挤掉就回不来了。**
- **卢卡斯批判**（诺奖得主罗伯特·卢卡斯）：你不能拿旧制度下观察到的行为关系去预测新政策的效果，因为新政策本身会改变人的预期和行为。**你有权力可以选择你的政策，但你不能选择你政策的后果。**
- **青苗法（王安石变法）**：初衷是用 40% 低利率贷款替代年利率 70% 的民间高利贷，既救农民又给国库增收。可民间利率高有高的道理——对农民放贷本来就是高风险，利率低了这门生意就不成立；官府为了确保政策落地，给地方官定考核"青苗钱放出去多少算政绩"，于是地方官硬摊指标到每家每户，再让乡绅胥吏包办，管他们怎么弄钱，第一年给这么多、第二年必须拿回来外加四成利息。**官员不是对变法富民的意图做反应，官员是对激励做反应。**
- **街头官僚理论**（政治学家迈克尔·利普斯基）：让政策真正落地的不是上面的文件，而是街头一线执行的基层公务员。高层说的是宏大目标，到了中层目标被压缩成指标，到了基层指标被翻译成动作——**一层层传导下来，原来的公共目标往往就变成了组织的自保目标：上级要政绩，地方要交差，官吏要免责，百姓要活命，没有一个人觉得自己在做恶。良好的意图加硬性的考核，就容易带来非预期后果。**
- **切尔斯特顿的篱笆**：一个改革家看见一道莫名其妙的篱笆横在路当中，张口就说这玩意没用拆了他。更高明的人应该拦住他——正因你看不出它有什么用，你才更不能拆；先回去想明白它当初为什么立在这，想通了再来。**简单说就是：你要是不理解一个系统，就别假装自己能优化。** 历史作家陈旭麓有个更符合中国国情的说法叫"司马光困境"：所有生活在秦制时代而心系百姓的改革者都会遭遇的困境——他们知道旧制度对百姓不利需要改革，但也知道只要改革措施仍然出自不受制约的权力，就很难给百姓带来真正的福利。**说得更直白一点：你的每一次折腾最后无非是老百姓买单。**

## 关键例证 / 金句

- 2021 年中国能耗双控政策：一些省份为了完成考核指标对企业拉闸限电——工厂主手里压着马上要交货的订单，电网偏这时候不给电，只好自己买柴油机发电，一时间柴油发电机供不应求，相关概念股竟然涨停。**指标是达标了，报表上的能耗下去了，可那些自备的小柴油机比集中市电厂脏得多——你说这算是实现了绿色发展吗？**
- 中国医院假论文问题：1986 年卫生职称制度把论文要求写进副主任医师和主任医师的任职条件，各大医院层层加码，规定评职称必须发 SCI 论文。临床医生整天泡在手术台上哪来时间做基础科研？只好买论文，论文工厂应运而生。**系统本想选拔最卓越的医生，结果系统奖励的却是伪装卓越的本事：会拿手术刀的不如会拿课题的。**
- "上有政策下有对策"这句话从来都是在谴责下面执行的人——可看了非预期后果，难道不是人性的必然吗？**你制造一个新局面，人们就找一条新出路，被硬堵住的需求往往会改道奔向更坏的方向。**
- 《V 字仇杀队》台词：女医生搬出奥本海默为自己辩护，说做恶不是她的本意、这个后果也是她没想到的。但 V 说：**"我不是为你想做什么而来，我是为你做了什么而来。意图属于你自己，可是后果属于世界。你不是你的意图，你是你的后果。"**
- 平庸之恶（汉娜·阿伦特）：现代系统很善于把一整块巨大的恶拆成许多个看上去完全正常甚至完全合规的小动作——一个人只管完成分摊指标，一个人只管把报表填好看，一个人只管把不达标的往下压。**语言上把人改名为对象，良心就少了一层摩擦。每个人都能理直气壮地说"我只是做好我的本职工作"，但你的本职工作难道不是那个造福百姓的实际意图吗？**

## 如何应用

1. **没事别折腾**：发布任何政策或规则之前，先做一番红队推演，看政策传导到下面会变形到什么程度；先确保"让好人吃亏"不会发生，再谈给百姓带来好处。中国改革开放时期有个特别好的做法——重大政策出台前先找几个地方做小步试点，然后跟踪反馈、允许纠错，绝不能先拍脑袋、后拍桌子、设定指标层层加码。
2. **上面的人想下面怎么落实，下面的人想上面的实际意图**：作为执行者，你面对的不只是报表——你是利普斯基说的街头官僚。上面的人可能只看见报表，而你看见的是人；上面可能只想知道政策已落实，你看见的是政策变形之后的真实模样。这给了你一份责任：**看见异常记录它、反馈它，至少别帮着把那层谎言抹得更圆。**
3. **提供米提斯**：积极一点，你可以提供詹姆斯·斯科特说的米提斯——最起码你不必做链条上最听话的那颗螺丝钉，但你总可以回头问一句：**这根链条拖着的到底是个什么怪物？** 意图属于你自己，后果属于世界——你不是你的意图，你是你的后果。

---

## 全文（清洗后的课程转录，重点加粗+底纹）

欢迎来到现代思维工具课，我是万维钢。不管你是治理一个国家也好、经营一家公司也好、还是只想管你家小孩也好，当你手握权力的时候，你会有一个本能的冲动：**我想要什么我就奖励什么，我不想要什么我就禁止什么，我担心什么我就审批什么，我看重什么我就考核什么。** 如果你这么想，你就默默地把社会当成了一台线性机器，你认为只要遥控器掌握在好人手里就行——而你就是那个好人。殊不知**好的意图并不一定能带来好的结果，现实往往是：好心经常办坏事。**

1994 年为了保护穷人租房，旧金山政府对房租实行价格管制，结果房东一算账租金已经不划算，索性把房子卖了或改作他用，市场上出租房减少了大约 15%，租金还提高了 5%，穷人反而更难租到房。1973 年为了保护濒危动物，美国通过《濒危物种法》，结果有些土地所有者担心自己土地上有濒危动物就会招来开发限制，干脆提前砍掉那些可能成为栖息地的树林。2014 年为了减少白色污染，加州禁止超市提供传统的免费薄塑料袋，结果商家用收费的更厚的可重复使用的塑料替代，可消费者还是把它当一次性袋子用完就扔，到 2022 年全州填埋的塑料袋垃圾不降反升，从 15.7 万吨暴涨到 23 万吨。2009 年为了刺激汽车消费，美国推出"旧车换现金"，短期新车销量确实上去了，可后来的研究发现绝大部分购买只是把本来过几个月要做的决定提前了，补贴一停销量原地跌落。**类似的例子实在太多了。用社会学家罗伯特·默顿的话说，这叫有目的社会行动的非预期后果。**

为什么会有非预期后果呢？我们不能只是感慨"你有你的计划，世界另有计划"。**经济学最重要的一个定律就是：人会对激励做出反应——尤其请注意，人们反应的是激励而不是意图。** 你要是认为"我有一个良好的意图，人们就应该在我的号召之下努力实现那个意图"，那你就把社会想得太简单了。哪怕你有再大的权力可以随意出台任何政策、制定任何新的规则，**你所能够改变的也不是结果本身，而是局面——人们会根据这个局面重新行动，但未必是像你想的那样行动。**

有这么一家幼儿园，家长接孩子总是迟到，园方很头疼，就定了条规矩：迟到罚款。结果家长对这个新局面的反应是：迟到的更多了。为啥呢？**罚款政策之前，准时接是一种道德义务，迟到了你会愧疚；有罚款之后，迟到成了一项明码标价的服务——"我多付点钱，买你老师半小时加班"，愧疚感一扫而空。** 这是两位经济学家在以色列的几家幼儿园做的经典实验。后来园方认识到了政策失误取消罚款，可是迟到率却再也没降回去——那一层道德感，一旦被价格挤掉就回不来了。

你想的可能只是"政策→行为改变→达成目标"，真实世界却是：**政策→激励变化+预期变化+执行变形→人的行为再优化→系统反应→最后达成非预期结果。** 要点是：人们会根据你制造的新局面对自己的行为进行再优化。上面说的是意图，下面听到的是价格；上面说的是价值观，下面看见的是收益表；上面说的是方向，下面感受到的是约束条件。**这不是群众觉悟低，这是社会系统的基本物理学。** 用诺贝尔经济学奖得主罗伯特·卢卡斯的话说：**你不能拿旧制度下观察到的行为关系去预测新政策的效果，因为新政策本身会改变人的预期和行为。** 人们称之为卢卡斯批判。**你有权利可以选择你的政策，但你不能选择你政策的后果。**

咱们看看在更严肃的场合中，好意图是怎么在往下传递的过程中一步步走向反面的。就说王安石变法的青苗法——本意是很好的：本来农民赶上青黄不接就只能去借民间高利贷，年利率高达 70%，十分艰难；王安石这个青苗法提供 40% 的低利率，既能救农民出高利贷的火坑，又能给国库增收，岂不是一举两得。这个政策首先在设计层面就有问题：按罗振宇老师在《文明之旅》节目里的分析，**民间利率高有高的道理——农民还款能力低，对农民放贷本来就是非常高风险的生意，很多债务根本收不回来，利率低了这门生意就不成立。** 你官府并不比民间那些商身更了解本地农民，凭什么给人提供低利率呢？如果按正常市场逻辑，你这个生意肯定赔本。也许王安石没想到这一点，也许人家早就想到了。不管怎么说，王安石的底气在于这是官府经营的生意。为了确保政策落地，王安石给地方官定了个考核：青苗钱放出去多少算政绩。那你想地方官会怎么做？有的农民借了青苗钱还不上，说能不能缓一年——你能同意吗？有的农民说我家收成好不需要借——你能允许吗？你要是办青苗法不得力，不但考评不合格、升迁没指望，而且你是在抵制改革。隔壁那个知县发明了一个办法：把贷款指标硬摊到每户头上，再让乡绅胥吏包办一部分，管他们怎么弄钱，反正第一年我给这么多钱，第二年你们必须给我拿回来外加四成利息。结果人家办成了，因为人家知道怎么有效利用官府这个暴力机器。你学不学？**官员不是对"变法富民"的意图做反应，官员是对激励做反应。**

美国政治学家迈克尔·利普斯基有个学说叫**街头官僚**：让政策真正落地的不是上峰的文件，而是那些在街头、在一线执行的基层公务员——警察、社工、教师等等，他们都有自己的资源限制、考核压力、自由裁量权和自保动机。所以一条政策真正是什么样，不是看文件怎么写，而是看一线人员怎么办。**高层说的是宏大的目标——环保、公平、安全、减负；到了中层，目标被压缩成指标；到了基层，指标被翻译成动作。一层层传导下来，原来的公共目标往往就变成了组织的自保目标：上级要政绩，地方要交差，官吏要免责，百姓要活命，没有一个人觉得自己在做恶。** 就这样，一个挺好的初心、一群普通人正常上班，却偏偏产生了坏结果。**良好的意图加硬性的考核，就容易带来非预期后果。**

咱们看两个当代的例子。2021 年中国政府为了绿色发展、节能减排推出了能耗双控政策，那么一些省份为了完成考核指标，就开始对企业拉闸限电。你完全可以说我的意图仍然是好的，充分符合中央精神，我是逼高耗能企业升级或淘汰。可你站在工厂主的角度想：我手里压着一批马上要交货、一违约就赔到破产的订单，电网偏这时候不给电，我怎么办？我自己买柴油机发电。一时间柴油发电机供不应求，相关概念股竟然涨停。**指标是达标了，报表上的能耗下去了，可那些自备的小柴油机比集中市电厂脏得多——你说这算是实现了绿色发展吗？** 另一件事我们讲柠檬市场的时候说过的：中国的医院近年来制造了大量假论文，在世界上都造成了重大影响。这是怎么回事呢？可能是为了提升科研水平，中国早在 1986 年的卫生职称制度中就把对论文、专著、经验总结的要求写进了副主任医师和主任医师的任职条件之中，后来各大医院层层加码，对论文要求越来越高，有很多医院规定医生评职称必须发 SCI 论文。可临床医生整天泡在手术台上，哪来时间和精力做基础科研呢？他们无奈之下就只能买论文，于是论文工厂应运而生。**你只能说这是医生的错吗？有的医生临床水平非常高、救人无数，可是因为没有论文就评不上高级职称，门诊费就比别人低，这合理吗？系统本想选拔最卓越的医生，结果系统奖励的却是伪装卓越的本事——会拿手术刀的，不如会拿课题的。**

我以前总听人说"上有政策、下有对策"，这句话都是在谴责下面执行的人：上面的政策总是好的，是下面基层官员的执行走样了。可是现在看非预期后果，**难道不是人性的必然吗？你制造一个新局面，人们就找一条新出路，被硬堵住的需求往往会改道奔向更坏的方向。**

怎样才能让后果和意图尽量一致、防止出现非预期后果呢？最基本的办法就是**没事别折腾**。在西方这个原则叫**切斯特顿的篱笆**，出自英国作家吉尔伯特·切斯特顿：一个改革家看见一道莫名其妙的篱笆横在路当中，张口就说这玩意没用拆了他——那么一个更高明的人就应该拦住他：正因为你看不出它有什么用，你才更不能拆，先回去想明白它当初为什么立在这，想通了再来。**简单说就是：你要是不理解一个系统，就别假装自己能优化。** 其实切斯特顿说得过于温和，历史作家陈旭麓有个更符合中国国情的说法叫**司马光困境**：所有生活在秦制时代而心系黎民的改革者必会遭遇的一种困境——他们知道旧制度对百姓极为不利需要改革，但他们同样也知道，只要改革措施仍然出自不受制约的权力，就很难给百姓带来真正的福利。改革可以利朝廷、可以利官，却很难利民，甚至会将百姓推向更恶劣的境地。在良知的驱使下，这些人往往表现为：既呼吁改革，但又反对具体的改革措施。**说得更直白一点，你的每一次折腾最后无非是老百姓买单。**

当然什么都不做也不行，但是理解了非预期后果：政府颁布政策之前就应该先做一番红队推演，看政策传导到下面会变到什么程度；你得做好相应的保护措施、提供补偿机制——能不能给百姓带来好处先不说，先确保别让好人吃亏。其实中国在改革开放时期有一个特别好的做法：**在重大政策出台之前先找几个地方做小步的试点，然后跟踪反馈、允许纠错，绝不能先拍脑袋、后拍桌子、设定指标层层加码。** 上面设定意图的人应该想下面的人会怎么落实；而在下面负责落实的人则更应该想上面的实际意图。你说"我就是个基层公务员，我的任务就是完成上面给的指标"——错了。**当你负责落实政策的时候，你就不是一个普通的工具人，你是利普斯基说的街头官僚：上面的的人可能只看见报表，而你看见的是人；上面的人可能只想知道政策已落实，你看见的是政策变形之后的真实模样。** 这给了你一份责任：别动不动就把道德责任上移，说这是上头的意思——否则你就陷入了政治理论家汉娜·阿伦特说的那个**平庸之恶**。

现代系统很善于把一整块巨大的恶拆成许多个看上去完全正常、甚至完全合规的小动作：一个人只管完成分摊指标，一个人只管把报表填好看，一个人只管把不达标的往下压。在街头官僚眼里，对面可以不是一个人，而是一个案例、一个指标、一个对象——**语言上把人改名为对象，良心就少了一层摩擦。** 每个人都能理直气壮地说"我只是做好我的本职工作"，但你的本职工作难道不是那个造福百姓的实际意图吗？一个普通人其实可以做很多事：**看见异常记录它、反馈它，给政策对象留一点解释的余地，至少别帮着把那层谎言抹得更圆。** 积极一点，你可以提供詹姆斯·斯科特说的米提斯；最起码你不必做链条上最听话的那颗螺丝钉，但你总可以回头问一句：**这根链条拖着的到底是个什么怪物？**

电影《V 字仇杀队》里有一句台词，适合作为这一讲的结尾。一个女医生曾经主持生物武器研究，对活人做实验，并且制造出一种病毒，这种病毒被极权政府用于自导自演的恐怖袭击，害死了大批民众。反抗者 V 最后找到了他要报复，女医生搬出奥本海默来为自己辩护，说做恶不是她的本意，现在这个后果也是她没想到的。但是 V 说：**"我不是为你想做什么而来，我是为你做了什么而来。意图属于你自己，可是后果属于世界。你不是你的意图，你是你的后果。"** 好，以上就是今天的全部内容，现代思维工具课，祝您每天都有收获。
`,Q1=`# 083丨慢变量：政府的使命是建立稳定预期

## 讲什么

**慢变量 / 快变量与慢变量**——政府是人世间最强大的力量，可以办成很多好事，也可以通过寻租、软预算约束、强制可读性和非预期后果这些机制造成坏结果。这一讲做一个思想游戏：设想一个最理想的政府该是什么样。结论先行：**政府不是好在做什么，而是好在不做什么。** 加拿大生态学家克劳福德·霍林提出：每个复杂系统都有快变量和慢变量——快变量变化快、看得见、容易被拿来考核；慢变量变化慢、不显眼，却决定整个系统有没有韧性。政府的最重要职责不是追求快变量指标，而是**维护慢变量：产权、法治、信用和社会信任**，为全社会建立稳定预期。

## 解决什么真问题

解释"为什么整天折腾的政府往往越搞越糟，而看起来无为的政府反而带来繁荣"：一个真心想做好事的政府能给社会最贵的礼物不是补贴、不是一项又一项大工程，也不是今天支持这个明天支持那个的政策，而是一种朴素到几乎没人会把它当成政绩的东西——**稳定预期**。企业家、投资人、科学家、打工人、学生应该把注意力用于市场，而不是盯着政府做生意。但经济离不开政府——正如电商不能没有平台。市场本身就是一个平台，政府就是平台的运营者，运营者必须维护身份、交易、裁判、结算四层规则，这些规则就是平台的慢变量。

## 核心论点

- **市场经济为什么好（三个概念）**：①哈耶克的价格信号——经济知识分散在无数个身处现场的人的头脑中，任何中央计划系统都不可能替代，只有市场才能把这些局部知识压缩成价格、利润和亏损这些可行动的信号；②熊彼特的创造性破坏——市场允许新人挑战旧人、新技术替代旧结构，只有这样才能带来真正的增长；③前面讲过的科尔奈的软预算约束——市场是硬预算约束，失败是真的失败、坏项目真的会破产、资源会被释放；对比之下权力却会本能地想要控制一切，用命令替代价格、用保护替代淘汰、甚至用财政把失败项目养成长期寄生物。
- **自由市场不是凭空长出来的野草，而是一套高度精密的公共基础设施**：自由派常讲 12–13 世纪法国的香槟集市，说市场秩序可以靠商人法、私人法官和声誉机制自发生成——那不是真实历史。真实历史是香槟集市繁荣的背后有安全通行、纠纷裁判、契约执行、度量衡管理，还有香槟伯爵提供的保护。制度经济学认为：要让两个陌生人敢做交易必须有制度保障——市场能算账，是因为有人在背后维护着账本、合同、货币和裁判。
- **政府是平台的运营者，必须维护四层规则**：第一身份层（谁能进入、谁有资格成为参与者）；第二交易层（产权、契约、货币和价格信号怎么运行）；第三裁判层（冲突如何解决、程序是否公开、申诉是否可能）；第四结算层（货币信用、财政信用、执法信用——最后的承诺到底算不算数）。这些规则就是平台的慢变量。
- **快变量与慢变量的经典例子**：一个湖，水面上的藻类、水质清不清、鱼群数量是快变量；附近流域的植被状况、湖里的物种结构、底泥的磷含量、水体的自净能力是慢变量。你可以用药物压下藻类让湖面短期变清，但慢变量没搞好，这个湖迟早又变成浑水湖。国家也是如此：经济增速、财政收入、就业数字是快变量；产权、法治、信用和社会信任是慢变量。**维护好慢变量，那些快变量指标自动就会慢慢变好；但为了追求快变量而任意摆弄系统，就可能会伤害慢变量。**
- **有的政府吃慢变量的利息，有的政府消耗慢变量的本金**：汉武帝就是消耗本金的典型——文景之治与民休息，政府极为克制，几十年下来户口增加、税基扩大、国库充实，这是吃利息；武帝登基后穷兵黩武，货币上折腾白鹿皮币、白金币，税收上搞算缗告缗（举报财产分一半）打穿商人产权预期，产业上盐铁酒专卖让政府亲自下场做最大的商人，价格上均输平准让价格服从国家财政和战争需要——**这些本质上都是把国家的信用变现：短期看财政有了钱，长期看慢变量和稳定预期被消耗殆尽，结果必然是连表面的财富也会失去**（《汉书·昭帝纪》：海内虚耗，户口减半）。

## 关键例证 / 金句

- 电商平台比喻：你刚把钱投下去扩大产能，平台的推荐算法变了，你的店一夜之间没了——平台老板看你们这个品类很赚钱，决定亲自下场卖同款，你想申诉都找不着门。那你还会主动搞长期投资研究新产品吗？**国家也是这样：你不能没有政府，正如电商不能没有平台；但政府最好的状态是不下场当球员。**
- **无为而治的本意不是政府什么都不做，而是政府守住自己的层级**：老子《道德经》说"我无为而民自化"——平台的责任是护慢变量，把快变量留给老百姓；"夫唯不争，故天下莫能与之争"——平台的运营者不应该跟平台的参与者争；"非以其无私耶，故能成其私"——受限制的政府反而是更有力量的政府。
- 1688 年光荣革命后英国：一系列制度安排限制了王权任意征税、没收和违约的能力，国王被关进了笼子，但国家并没有变弱——英国政府反而能以更低利率借到更多的钱，在税收之外又打开了公共信贷这条大动脉。**一个受限制、不能赖账的政府，反而是一个更有力量的政府。**
- 汉武帝时代的反面教材被后世反复引用：王安石变法帮政府集聚资源，司马光和韩琦骂王安石"争利"，王安石赶紧辩解"像桑弘羊那样笼天下货财以奉人主私欲才叫理财之臣，我这是均贫富"——可"桑弘羊"这个标签一出来，王安石就已经洗不清了，他自己也成了标签；张居正为大明敛财就有人骂他像王安石；大清总结历代教训，货币政策直接就是白银本位，连财政工具都不用，康熙朝甚至宣布"盛世滋生人丁，永不加赋"。**因为只要你读过历史，你就太知道慢变量的诱惑和慢变量的重要性了。**
- 西方的教训：公元 301 年罗马皇帝戴克里先颁布最高限价法令→商品转入黑市、供应消失；1557–1596 年西班牙为支撑哈布斯堡帝国多次宣布暂停偿债→王室信用被打折，欧洲金融家重新给西班牙定价；1971 年尼克松工资和价格冻结→账面上通胀被按住，价格信号却被扭曲；2022 年英国特拉斯政府的迷你预算→英镑和国债市场剧烈震荡，养老金系统险被击穿。

## 如何应用

1. **政府层面**：维护好慢变量（产权、法治、信用、社会信任），让快变量自然变好；可以下场当球员的前提是球场还不存在（如后发国家搞产业冷启动）；可以做市场做不好的事（教育、医疗、基础科研、公共卫生、基础设施、环保、标准制定），但要记住政府首先是慢变量的建设者，不能是破坏者。
2. **识别"消耗慢变量本金"的信号**：货币被反复折腾（老百姓不知道手里的钱明天还算不算钱）、税收直接瞄准民间财富（告密有赏）、产业被收归国有专卖、价格服从财政和战争需要、劳动力被强行抽离生产——这些都是在把国家信用变现，短期财政有钱，长期经济必毁。
3. **个人与公司层面**：理解"政府是平台的运营者"——把注意力用于市场，而不是研究平台老板；理解稳定预期的价值，选择产权清晰、规则连续可信的环境做长期投入。

---

## 全文（清洗后的课程转录，重点加粗+底纹）

欢迎来到现代思维工具课，我是万维钢。**政府是人世间最强大的力量。它可以办成很多好事，但它也可以通过寻租、软预算约束、强制可读性和非预期后果这些机制，造成坏的结果。** 这一讲咱们做一个思想游戏：设想一个最理想的政府该是什么样。**政府不是好在做什么，而是好在不做什么。**

咱们先切换到老百姓视角。想象你在一个电商平台上开了家店：你打磨了产品、训练了团队、积累了信誉，还攒下了一笔钱。你有几个竞争对手，但是你不怕他们——你相信只要研发出下一代产品就能取得更领先的位置，为此你决心招兵买马、扩充产能。可是你刚把钱投下去，平台的推荐算法变了，你的店一夜之间没了——原来平台老板看你们这个品类很赚钱，决定亲自下场卖同款，你想申诉都找不着门。那你还会主动搞长期投资、研究新产品吗？**你真正应该研究的是平台老板。** 国家也是这样：企业家、投资人、科学家、打工人、学生应该把注意力用于市场，而不是盯着政府做生意——2B 也可以、2C 也可以，不能大家都去做 2G。但是他们不能没有政府，正如电商不能没有平台。**一个真心想做好事的政府能给社会最贵的礼物，不是补贴、不是一项又一项大工程，也不是今天支持这个明天支持那个的政策，而是一种朴素到几乎没人会把它当成政绩的东西，那就是稳定预期。** 这一讲的思维工具叫做**慢变量**：政府的日常操作应该是维护慢变量。

关于市场经济为什么比官办经济好，前人已经说过太多了，简单来说就三个概念。第一个是**哈耶克说的价格信号**：经济知识分散在无数个身处现场的人的头脑之中，任何中央计划系统都不可能代替，只有用市场才能把这些局部知识压缩成价格、利润和亏损这些可行动的信号。第二个是**熊彼特说的创造性破坏**：市场允许新人挑战旧人，允许新技术替代旧结构，只有这样才能带来真正的增长。第三个就是我们前面讲的科尔奈说的**软预算约束**：市场是硬预算约束，在市场经济里失败是真的失败、坏项目真的会破产、坏企业会退出、资源会被释放。对比之下，**权力却会本能地想要控制一切：它会用命令替代价格，用保护替代淘汰，甚至用财政把失败项目养成长期寄生物。**

所以有些自由派知识分子会因为崇尚市场而反感政府，甚至有人认为市场是自产生的、政府插手越少越好。但是事实并不是这样的。自由派常爱讲的一个案例是 12–13 世纪法国的香槟集市：当时欧洲长途贸易繁荣，很多商人定期赶到法国香槟地区做大买卖，这里不靠中央计划、没有政府定价。经济学家曾经用香槟集市说明市场秩序可以靠商人法、私人法官和声誉机制自发生成——然而那不是真实历史。咱们来想这个局面：你今天跟我交易，明天就去另一个城市了，我如果被骗，那一路追过去；如果没有产权、契约、货币和可信的执行，自由交易很快就会退化成"捞一把就走"的黑市。**真实历史是香槟集市繁荣的背后有安全通行、纠纷裁判、契约执行、度量衡管理，还有香槟伯爵提供的保护。自由市场不是凭空长出来的野草，而是一套高度精密的公共基础设施。** 这就引出了制度经济学：它认为要让两个陌生人敢做交易，必须有制度的保障。**市场能算账，是因为有人在背后维护着账本、合同、货币和裁判。** 我们前面专门讲过平台经济，其实市场本身就是一个平台，它需要有人治理。

如果把市场乃至整个国家想象成一个平台，那么政府就是这个平台的运营者。**任何平台的运营者都必须维护四层规则：第一是身份层——谁能进入、谁有资格成为参与者；第二是交易层——产权、契约、货币和价格信号怎么运行；第三是裁判层——冲突如何解决、程序是否公开、申诉是否可能；第四是结算层——货币信用、财政信用、执法信用，最后的承诺到底算不算数。** 这些规则就是平台的慢变量。

用加拿大生态学家克劳福德·霍林的说法：**每个复杂系统都有快变量和慢变量。快变量变化快、看得见、容易被拿来考核；慢变量变化慢、不显眼，却决定整个系统有没有韧性。** 比如一个湖：水面有多少藻类、水质看起来清不清、鱼群数量多不多，这些都是快变量；而附近流域的植被状况、湖里的物种结构、底泥的磷含量、水体的自净能力则是慢变量。你可以立即向快变量要成绩——比如说用药物压下藻类，就能让湖面短期变清；但是如果慢变量没搞好，这个湖迟早又会变成浑水湖。**国家也是如此：经济增速、财政收入、就业数字、某个行业的景气程度都是快变量；而产权、法治、信用和社会信任则是慢变量。维护好慢变量，那些快变量指标自动就会慢慢变好；但如果为了追求快变量而任意摆弄系统，就可能会伤害慢变量。** 这就好比种地：快变量是庄稼，慢变量是土壤的再生能力。你要想这一季迅速多长点庄稼，简单的办法就是多施化肥，可是这样一来就会破坏土壤结构、地下水和有机质——这季长得快，以后可就长不好了。

同样道理：**产权边界清楚，人才和资本才相信收益能归自己；规则连续可信，企业才敢把合同、产能和供应链安排到几年以后；裁判程序公正，陌生人之间的合作才不必完全依赖关系和拳头；货币和财政有信用，市场才敢把今天的投入和明天的回报放在同一张资产负债表上。** 反过来说，如果政府为了追求某个短期指标直接伸手操作系统，今天扶持一个行业、明天压一个价格、后天改一条规则，快变量也许会一时好看，但慢变量会被损伤。**有的政府吃慢变量的利息，有的政府消耗慢变量的本金。**

一个最显眼的案例就是西汉从文景之治到汉武帝时期的变化。经历了秦末战乱和楚汉相争，西汉前期的基本国策是与民休息：通过减少扰动让家庭重新稳定、让农业重新恢复、让财政重新积累、让民间相信明年大体还会按今年的规则生活。**文景之治是不性感的：没激情、没有宏大叙事的统治，政府极为克制，结果几十年下来快变量也自然变好——户口增加、税基扩大、国库充实、粮仓丰盈、商业流动活跃。** 武帝登基时接手的是文景两代攒下的家底。而如果你手握强大的力量，你会有强烈的冲动想要使用这个力量。现在一提汉武帝的风功伟业都是北击匈奴、封狼居胥、河西四郡、张骞通西域——这些的确了不起，但是这些要花很多很多钱。而且政府一旦开始花钱就会收不住手，连不该花的钱也要花。正常的取手段远远不能支撑武帝的野心，于是政府把手伸向资源、价格、流通和民间财富：货币政策上国家一会推出白鹿币一会又是白金币，货币信用被反复折腾，民间不知道手里的钱明天还算不算钱；税收政策上算缗就是向商人征收财产税、告缗就是举报他人财产分一半，直接瞄准民间财富，商人的产权预期被打穿；产业政策上盐和酒类专卖把原本可以由民间经营的行业收回国有，政府亲自下场做最大的商人；价格政策上均输平准由国家买进卖出，号称调节物价，实际上价格不再只是信号，还要服从国家财政和战争需要；徭役兵一上，大量人口被抽离生产，家庭原本连续经营的计划被随时打断；司法和产权上告发机制让人们不再只担心市场失败，还要担心政策失败、关系失败、站队失败。**这些本质上都是把国家的信用给变现。短期看财政有了钱，长期看慢变量和稳定预期被消耗殆尽，结果必然是连表面的财富也会失去。** 《汉书·食货志》说武帝初年是"民人给家足，府库充实"，后来却成了"工费愈甚号，人父相食"；《汉书·昭帝纪》更说武帝留给昭帝的是"海内虚耗，户口减半"。

可能有人说为了帝国的基业，老百姓付出再大的牺牲也是值得的。真的值得吗？匈奴在文景时期就不断骚扰边疆，但他们并对帝国构不成绝对的威胁——用御史大夫韩安国的话说：千里而战，兵不获利；匈奴"禽兽之族，怀兽之心"，得其地不足以为广，有其众不足以为强。当然咱不是说和亲好，但是大汉完全可以积极防御，而不是向漠北消耗大军。而且真的是为了帝国的基业吗？从《史记·封禅书》《平准书》《汉书·贡禹传》的记载，武帝花在战争以外的钱、甚至直接花在自己身上的钱——包括宫室、巡幸、封禅、求仙、陵寝和宫廷工坊——绝不是零星浪费，而是另一条长期财政失血线。中大夫妻案曾经当面说武帝"内多欲而外施仁义"，可谓精准的批评。现在一说起秦皇汉武已经成了很多人心中的骄傲，但是他们同时代的人——从直系子孙到官僚集团再到平民百姓——可都没有说他们好的。**简单说，武帝的伟业不但是从文景之治的积累中提款，而且是把家底都给卖了。文帝景帝要是再天有灵，肯定会说武帝是个败家子。**

西方也有类似的教训。公元 301 年罗马皇帝戴克里先为了压住通胀和社会不满，颁布最高限价敕令，强行给上千种商品和工资封顶，结果商品转入黑市、供应反而消失，敕令很快失效。1557 到 1596 年，西班牙王室为了支撑哈布斯堡帝国的连年战争，多次宣布暂停偿债、重组国债，结果王室信用被反复打折，欧洲金融家开始重新给西班牙定价。1971 年美国尼克松为了压住通胀、稳住短期民意，实行工资和价格冻结，结果账面通胀一时被按住，价格信号却被扭曲，短缺和后续通胀反弹随之而来。2022 年英国特拉斯政府为了快速刺激增长，推出缺少可信财政背书的小额预算和大规模减税，结果英镑和英国国债市场剧烈震荡，养老金系统险被击穿，英国央行被迫出手救市。

反倒是后世的统治者都把汉武帝当成反面榜样，吸取了教训。比如王安石变法帮政府集聚资源，他同时代的人立即意识到其中的威胁——司马光和韩琦骂王安石"争利"，王安石一听就明白是什么意思，赶紧辩解：像帮汉武帝理财的桑弘羊那样"笼天下货财以奉人主私欲"那才叫理财之臣，我这是"均贫富"，怎么能叫理财之臣呢？可是"桑弘羊"这个标签一出来，王安石就已经洗不清了，他自己也成了标签。后来张居正为大明敛财，就有人骂他像王安石。大清总结历代新政教训，货币政策直接就是白银本位，连财政工具都不用，力求做个小政府，康熙朝甚至直接宣布"盛世滋生人丁，永不加赋"。此后大清哪怕是面对太平天国战乱、哪怕是支付赔款，也只是寻求严苛的关税厘金借款，甚至卖官鬻爵都不敢突破地丁钱粮——**因为只要你读过历史，你就太知道慢变量的诱惑和慢变量的重要性了。**

政府到底应该办多少事，学者们各有各的说法。有的人主张政府只要维护好慢变量、提供一个低摩擦的运营环境就可以；可能更多学者认为政府还应该去做那些市场做不好的事，比如教育、医疗、基础科研、公共卫生、基础设施、环境保护、标准制定——这些事的特点是有巨大的正外部性，但由于缺乏良好的短期利润，市场往往动力不足；还有学者如意大利裔英国经济学家玛丽安娜·马祖卡托认为政府还可能塑造和创造市场——像互联网、GPS、触摸屏、语音识别等技术在最早都不是由私人资本单独冒险做出来的，而是由国家用科研经费、军工项目、大学体系、公共采购和长期耐心资本先把路铺出来；还有学者认为后发国家要单纯靠市场实现工业化可能比较难，因为既没有资本也没有很好的企业，那么政府就应该亲自下场搞一些投资、甚至直接办工厂作为冷启动——你要下场当球员也不是不行，前提是球场还不存在。**我相信这些都是可以的。但这里的关键是：不管你怎么搞，政府首先必须是慢变量的建设者，而不能是破坏者。**

一个非常反直觉的规律是：**如果政府能尊重慢变量、不搞折腾，他的战争能力其实不会减弱，反而会增强。** 比如 1688 年光荣革命之后，英国通过一系列制度安排限制王权任意征税、没收和违约的能力——国王被关进了笼子，但国家并没有变弱，英国政府反而能以更低利率借到更多的钱，在税收之外又打开了公共信贷这条大动脉。其实民间总是有很多剩余财富，关键是用什么手段让这些资金为政府所用：**如果你的办法是强征或者滥发货币，你就伤害了慢变量，人们就会停止投资和生产活动，经济就毁了；而如果你是借债，创造财富的活动就会继续，打完仗还可以好好过日子。二者的区别就在于债主们是否相信这个政府会遵守财产和债务契约。一个受限制、不能赖账的政府，反而是一个更有力量的政府。**

最早提出政府应该保护慢变量的可能还是中国人。**老子《道德经》说"我无为而民自化"——不就是说平台的责任是护慢变量，应该把快变量留给老百姓吗？说"夫唯不争，故天下莫能与之争"——不就是说平台的运营者不应该跟平台的参与者争吗？说"非以其无私耶，故能成其私"——不就是说受限制的政府反而是更有力量的政府吗？** 无为而治的本意不是政府什么都不做，而是政府守住自己的层级：不与民争利、不与商争业、不以裁判身份下场经营、不用权力改写价格信号、不把社会的试错和自我演化能力收归自己。**政府不应该是舞台上的主角，它应该是剧场里的灯光、消防、秩序、卫生和安全出口——没有它戏就演不下去，但观众不会天天注意它。** 好，以上就是今天的全部内容，现代思维工具课，祝您每天都有收获。
`,K1=`# 084丨摩洛克：东亚为什么这么卷？

## 讲什么

**摩洛克 / 多级陷阱 / 单一赛道锦标赛**——摩洛克本是希伯来圣经里的邪神，人们用亲生孩向他献祭；美国诗人曾用它指代现代社会这台巨大冰冷、不知道为谁服务的机器，摩洛克就从吃孩子的神变成了吃人的系统。2014 年美国精神科医生斯科特·亚历山大写了引发热议的文章《沉思摩洛克》，把这个意象正式变成一个社会科学概念。**亚历山大说的摩洛克是一个多级陷阱：多人互相竞争，每个人做的都是对自己最理性的选择，可所有选择加在一起，却是把所有人推向一个谁都不想要的结局。**

## 解决什么真问题

解释"为什么中国社会这么卷，而且越发达的国家反而越卷"：有人说是因为中国还不够富裕，有人说是制度问题，但先看韩国——人均 GDP 35000 美元的发达国家，有选举自由，文化横扫全世界，可韩国比中国还卷：2024 年校外补习参与率高达 80%，高考那天全国推迟上班、股市推迟开盘、警车满街待命，英语听力考试的 35 分钟里全国机场暂停航班起降。**无效内卷其实是东亚社会的通病。** 摩洛克解释的不是"为什么有人坏"，而是"为什么没有任何坏人、所有人都理性、所有人都知道局面会变坏，却没有人敢先停下"。

## 核心论点

- **摩洛克的因果链条**：多人竞争，且一个单一指标决定输赢（利润、排名、点击率、军力、速度）→有人发现牺牲一个不计入指标的价值（健康、安全、诚实、睡眠）就能换来指标提升→一个人取得短期领先→其他人要么跟进要么出局→纷纷跟进，新常态形成→结果每个人的相对位置跟原来差不多，可每个人的绝对生活都变糟了。**注意这里没有坏人，没有人故意想让局面变坏，而且所有人都知道局面会变坏，但是没有人敢先停下。这就是摩洛克最可怕的地方。**
- **限制竞争是治标不治本**：军控条约、政府管制都行不通——韩国政府规定补习班晚上 10 点必须关门，结果大班课变成了更贵的一对一，补习支出照样年年创新高。**摩洛克困局最根本的问题在于它是一个"单一指标决定输赢"的游戏。经济学家对此有个锦标赛理论：只要奖励是按相对排名而不是按绝对产出发放，人们的努力就不是为了创造价值，而只是为了争夺位置。摩洛克是一场单一赛道锦标赛，所有人的命运被挤进一个排行榜。只要这个根还在，一切协调和限制竞争的措施都只不过是扬汤止沸。**
- **东亚为什么把单一赛道锦标赛做成了国家级赛事**：两个历史因素——①科举：人类历史上最纯粹的单一赛道锦标赛，1300 年里一个庞大帝国把全部精英位置压进同一条管道，"天下英雄入吾彀中""万般皆下品，惟有读书高"不是失意夸张而是制度说明书；②20 世纪中叶东亚三国不约而同经历了一场社会大摊平——中国靠革命、日本靠战败后财阀解体加农地改革、韩国靠朝鲜战争把残存财富差距炸平，结果世袭被铲掉、所有人站上同一条起跑线。**可起跑线平了，跑道却只剩下一条**：没有贵族、没有行会、没有庄园，老百姓还能积累什么福利呢？只有学历——学历是全社会通用的身份资产。
- **一个反直觉的真相：卷不是因为社会不公平，卷恰恰是公平的产物**：种姓所死的社会不卷，农奴制的社会也不卷——他们绝望，但他们不卷。卷是专门为人人都觉得自己有机会、人人都认为自己应该参加、人人都互相比较的社会准备的刑罚。**高考是全世界最公平的考试，所以它是全世界最卷的考试。**
- **内卷制造的四张账单**：①学历通胀（证书通胀，印得越多越不值钱，但谁也不敢停止印）；②人才错配（单一赛道锦标赛把多维能力向量投影到考试分数一个维度上，必然丢失信息——一个可能成为出色厨师、木匠、销售或护理师的孩子，被这一个分数定义为差生）；③躺平（躺平的人不是不在乎，恰恰是太在乎——他在乎这条赛道又确信自己赢不了，于是用"我不玩了"来保护自己；日本躺得极致，但今天的补习班还是满负荷运转——日本不是东亚的例外，日本是东亚的预告片）；④孩子（先吃童年、再吃青春、还吃睡眠——日韩都流行"四当五落"的说法：每天睡四小时考得上，睡五小时就落榜；然后吃下一代：结婚要房子、养孩子要教育投入，年轻人一算账干脆不生）。

## 关键例证 / 金句

- 韩国 25–34 岁年轻人中 71% 上过大学，大学文凭早就不值钱了；大学毕业生平均只比高中毕业生多挣 31%，高学历青年就业率只有 80%、低于 OECD 平均的 87%。**韩国 2024 年总和生育率只有 0.75，全球垫底——每 200 个年轻人组成 100 对夫妇，只剩下 75 个孩子；再下一代，那 75 个人只能留下 28 个孩子，这是族自杀。**
- 内卷一词最早是历史学家黄宗智引入中文世界的，形容明清小农经济：地就那么多、人口越来越多，农民只好往同一亩地里投入越来越多的劳动，每多投一份劳动回报就更薄一分——**黄宗智称之为"没有发展的增长"。高考不也是这样吗？所有人都补课大学录取这么多人，所有人都不补课大学还是录取这么多人——那我们补课到底图啥呢？**
- 有学者分析中国 31 个省份的 385 万项专利：一个省的社会规范越紧、对偏离标准路径的人越不宽容，增量式创新占比就越多、激进式创新就越少。**越重视单一赛道锦标赛，人们就越擅长把已知的赛道跑到极致，越不擅探索那些一开始看上去不像赛道的赛道——这大约就是为什么中国擅长从 1 到 N，而不是从 0 到 1。**
- 日本 146 万人蛰居在家，几乎不与家人以外的人来往——但 40 年前日本曾经历全世界最惨烈的考试竞争，发明了"考试地狱"这个词。**今天的躺平只是卷完之后的样子。**
- **低生育率是东亚年轻人对摩洛克最后的抵抗**：那些选择不生的人恰恰是因为爱孩子——他们认为如果给不了孩子最好的条件、生下孩子就是看着他去卷，还不如不生。
- 解药：**把一条赛道变成很多条**——你在这条赛道上成功是成功，他在那条赛道上成功也是成功。价值多元不是一种姿态，而是一个社会的免疫系统、是内卷的反义词：内卷是所有人挤向同一个成功，价值多元是这个社会终于能容下很多种成功。

## 如何应用

1. **识别自己是否身处摩洛克**：问问"这个游戏是单一指标决定输赢吗？赢家是按照相对排名还是绝对产出发放奖励？"——如果大家都在为一个排行榜耗尽健康、睡眠和诚实，而相对位置根本没变，你就身处摩洛克，任何"更努力"都只是往里加燃料。
2. **选择多赛道环境或自己开辟赛道**：欧洲不像东亚这么卷是因为价值多元——德国一个面包师的儿子接手祖传面包房并不觉得自己输给了上大学的邻居；今天三分之二的瑞士青年初中毕业就去读职业教育，德国高级工的资格在国家框架里跟大学学历平起平坐。行业间收入差距小、蓝领工作也有高级感，人们自然不会都挤着上大学。
3. **从"分数唯一"到"多维成功"**：个人层面——别把孩子的价值（或自己的价值）投影到一个分数上；社会层面——1876 年日本明治维新废除武士特权后人才喷涌，1905 年清廷废科举后不到一代人，无数聪明头脑变成科学家、工程师、商人和思想家——**现代中国就是从科举的废墟上长出来的。限制竞争是扬汤止沸，价值多元是另起炉灶，人口下降则是釜底抽薪。**

---

## 全文（清洗后的课程转录，重点加粗+底纹）

欢迎来到现代思维工具课，我是万维钢。这一讲咱们说说为啥中国社会这么卷。有人说是因为中国还不够富裕，有人说是中国的制度有问题，但是我建议你先参考一下韩国。**韩国是人均 GDP 达到 35000 美元的发达国家，有选举自由，文化产业横扫全世界，可是韩国比中国还卷。** 2024 年，韩国的校外补习参与率高达 80%，参加者平均每人每月的补习费是 59.2 万韩元，约合人民币 3000 元。中国人对高考的重视跟韩国人比都不叫事：韩国高考那一天全国推迟上班、股市推迟开盘、军队停止演习，警车在大街上待命随时给快迟到的考生开道，甚至在英语听力考试的 35 分钟时间里全国所有机场暂停航班起降。韩国人的考试竞争如此激烈，以至于 10 岁到 39 岁人群的死因排名第一是自杀，自杀率位居 OECD（经济合作与发展组织）成员国的第一。可如此全民内卷得到的是什么呢？韩国 25 到 34 岁的年轻人中有 71% 上过大学，大学文凭早就不值钱了；大学毕业生平均只比高中毕业生多挣 31%；高学历青年就业率只有 80%，低于 OECD 平均的 87%。**无效内卷其实是东亚社会的通病。**

现在日本表面上是"不卷"了：年轻人低欲望、不买房不结婚，内阁府统计有 146 万人蛰居在家，几乎不与家人以外的人来往。**但是 40 年前，日本曾经有全世界最惨烈的考试竞争，以至于发明了"考试地狱"这个词。今天日本人的躺平只是卷完之后的样子。** 造成东亚内卷的必定是一个中日韩三国共有、而别处没有或者很弱的东西，这个东西叫做**摩洛克**。

摩洛克本是希伯来圣经里的邪神，人们用亲生孩向他献祭。一位美国诗人曾经用它指代现代社会这台巨大冰冷、不知道为谁服务的机器——摩洛克就从吃孩子的神变成了吃人的系统。2014 年，美国精神科医生斯科特·亚历山大写了一篇引发热议的文章叫《沉思摩洛克》，把这个意象正式变成一个社会科学概念。**亚历山大说的摩洛克是一个多级陷阱：多人互相竞争，每个人做的都是对自己最理性的选择，可所有选择加在一起，却是把所有人推向一个谁都不想要的结局。** 很多现象都可以用摩洛克解释：比如说军备竞赛——每个国家买武器都是为了安全，结果大家一起买来了更深的不安全；再比如流量算法——平台发现当你愤怒的时候会停留得更久，于是所有平台都热衷于推送令人愤怒的内容。

我们可以把摩洛克理解成囚徒困境的一种特殊形式，它的因果链条基本上是这样的：**多人竞争，而且一个单一指标决定输赢，比如利润、排名、点击率、军力或者速度等。然后就会有人发现：牺牲一个不计入指标的价值，比如健康、安全、诚实甚至睡眠，就能换来指标提升。指标提升了，一个人取得短期领先，于是其他人要么跟进、要么出局。再然后大家纷纷跟进，新常态形成。结果就是：每个人的相对位置跟原来差不多，可是每个人的绝对生活都变糟了。** 注意：这里没有坏人，没有人故意想让局面变坏；而且所有人都知道局面会变坏，但是没有人敢先停下。**这就是摩洛克最可怕的地方。**

那怎样才能终止摩洛克呢？学者们想了不少限制竞争的方法：比如大家签署一个军控条约、互相监督谁也别再升级了，或者干脆让政府直接出面管制——但是都属于治标不治本。**韩国政府规定补习班晚上 10 点必须关门，结果大班课变成了更贵的一对一，补习支出照样年年创新高。摩洛克困局最根本的问题在于它是一个"单一指标决定输赢"的游戏。** 经济学家对此有个**锦标赛理论**：只要奖励是按相对排名而不是按绝对产出发放，人们的努力就不是为了创造价值，而只是为了争夺位置。**摩洛克是一场单一赛道锦标赛，所有人的命运被挤进一个排行榜。只要这个根还在，一切协调和限制竞争的措施都只不过是扬汤止沸而已。**

世界各地都有摩洛克，但别处的摩洛克都是局部现象，而东亚三国却把单一赛道锦标赛做成了国家级赛事。东亚人心目中的单一赛道就是：考上好大学、找到一份稳定的好工作、挣钱买房——这条赛道的单一指标就是**分数**。历史上大约有两个因素决定了为什么我们如此看重分数。一个是**科举**：科举是人类历史上最纯粹的单一赛道锦标赛，1300 年里一个庞大帝国把全部的精英位置压缩进同一条管道。什么"天下英雄入吾彀中"、什么"太宗皇帝真长策，赚得英雄尽白头"、什么"万般皆下品，惟有读书高"——那不是失意夸张，而是制度说明书：士农工商只有通向权力、财富和体面的路，而通向它的路只有考试。在明清两朝，哪怕你经商达到富可敌国的程度——首先你达不到，国家不允许你敌国——就算你能达到，你的最高理想也不过是花钱捐个小官。商人家庭的战略都是一代经商、一代读书：**钱本身不算数，钱要换成官身才算数。** 那你说参加科举的只是少数人，绝大多数人连字都不认识，怎么考试就成了东亚的全民锦标赛呢？这就说到第二个因素：**20 世纪中叶，东亚三国不约而同地经历了一场社会大摊平**——中国靠的是革命，土改消灭了地主，公私合营消化了资本家；日本是因为战败后财阀解体再加上农地改革；韩国则直接因为王国贵族在殖民时代就失去根基，随后朝鲜战争把残存的财富差距也炸平了。三场摊平的结果都是世袭被铲掉，所有人站上了同一条起跑线。**可是起跑线平了，跑道却只剩下一条：没有贵族、没有行会、没有庄园、没有什么可以传好几代的家产，那老百姓还能积累什么福利呢？只有学历——学历是全社会通用的身份资产。** 对比之下，欧洲到今天还拖着旧社会的多残：有贵族、有教会、有行会、有工匠传统——德国一个面包师的儿子接手祖传面包房，并不觉得自己输给了上大学的邻居。**价值单一加机会平等等于全民锦标赛。**

这是一个有点反直觉的真相：**卷不是因为社会不公平，卷恰恰是公平的产物。** 种姓所死的社会不卷，农奴制的社会也不卷——他们绝望，但他们不卷。卷是专门为人人都觉得自己有机会、人人都认为自己应该参加、人人都互相比较的社会准备的刑罚。**高考是全世界最公平的考试，所以它是全世界最卷的考试。**

内卷这个词最早是历史学家黄宗智引入中文世界的，本来是形容明清的小农经济：地就那么些，人口却越来越多，农民就只好往同一亩地里投入越来越多的劳动，而每多投一份劳动，回报就更薄一分——黄宗智称之为**没有发展的增长**。你看高考不也是这样吗？所有人都补课大学录取这么多人，所有人都不补课大学还是录取这么多人——那我们补课到底图啥呢？**这就是摩洛克：每个人都更努力，但没有人更安全。**

内卷制造的副作用可不只是加剧竞争，还有四张大的账单。**第一张账单是学历通胀**：美国社会学家兰德尔·柯林斯有个理论叫证书通胀，和货币通胀一个原理——印得越多越不值钱，但谁也不敢停止印。昨天本科是优势，今天本科是门票，明天硕士也只是个排队号。**第二张账单是人才错配**：你就算把人当工具用，人也不是一个数，而是一组能力的组合——抽象推理、动手、审美、共情、组织、冒险、讲故事，对吧？单一赛道锦标赛把这个多维向量投影在考试分数这一个维度上，那就必然丢失信息：一个本来可能成为出色厨师、木匠、销售或者护理师的孩子，被这一个分数定义为差生，那么孩子的理性选择就是放弃其他项目。有学者分析了中国 31 个省份的 385 万项专利，发现一个省的社会规范越紧——也就是对偏离标准路径的人越不宽容——增量式创新占比就越多、激进式创新就越少。**换句话说，越重视单一赛道锦标赛，人们就越擅长把已知的赛道跑到极致，越不擅探索那些一开始看上去不像赛道的赛道。这大约就是为什么中国擅长从 1 到 N，而不是从 0 到 1。**

**第三张账单是躺平**。有人说躺平是对内卷的反叛，可是你想：一个真正不在乎这条赛道的人会躺吗？不会的，他会兴冲冲地去干别的。**躺是一个朝向赛道的姿势：躺平的人不是不在乎，恰恰是太在乎——他在乎这条赛道，又确信自己赢不了，于是用"我不玩了"来保护自己：你们不能说我不行，因为我根本没参加。** 日本就是躺得极致：被考试地狱卷了 40 年，泡沫一破，年轻人发现"好好考试、进好公司、终身雇佣步步高升"这条链断了，于是整个社会进入大撤退。但是请注意，即便这样，今天日本的补习班还是满负荷运转。**日本不是东亚的例外，日本是东亚的预告片。**

**最后一张账单也是最大的一张，那就是孩子**。摩洛克的本名就是吃孩子的神，它现在是怎么吃的呢？先吃童年——补习班从幼儿园一路排到高三；再吃青春——上了大学接着卷绩点、卷实习、卷考研、卷考公；还吃睡眠——日韩都流行过一个说法叫"四当五落"，意思是每天睡四个小时考得上、睡五个小时就落榜；然后再吃下一代——结婚要房子，而房子是这场锦标赛的奖品；养孩子要教育投入，教育投入是下一轮锦标赛的入场费。年轻人一看，这笔账太贵了，我干脆不生了。**如果你觉得现在中国的生育率太低，那我要说的是韩国更低：韩国 2024 年的总和生育率只有 0.75，全球垫底。** 这个数字是什么意思呢？每 200 个韩国年轻人组成 100 对夫妇，只剩下 75 个孩子——子女这一代的人数只有父母那一代的三分之一多一点；再过一代，那 75 个人只能留下 28 个孩子——**这是族自杀。** 可是那些选择不生的人难道是因为不喜欢孩子吗？**他们恰恰是因为爱孩子：他们认为如果给不了孩子最好的条件、如果生下孩子就是看着他去卷，还不如不生。低生育率是东亚年轻人对摩洛克最后的抵抗。**

这个局的根本解药只能是**把一条赛道变成很多条**：你在这条赛道上成功是成功，他在那条赛道上成功也是成功。社会必须认可不止一种活法，这其实就是**价值多元**。价值多元听着像一句政治正确的客套——不就是尊重少数群体、包容不一样的人吗？不是。**价值多元不是一种姿态，而是一个社会的免疫系统，是内卷的反义词：内卷是所有人挤向同一个成功，价值多元是这个社会终于能容下很多种成功。** 欧美之所以不像东亚这么卷就是因为价值多元：他们从没被摊平成一条跑道，有教会、行会、工会，有来自各国的移民，有像阿米什那样拒绝现代化的特立独行社区，有的国家还有贵族——各有各的活法。

但如果已经是单一赛道，还能不能长出多元来呢？能，而且古今中外都发生过。**1876 年日本明治维新废除武士特权，农民的儿子第一次能去当军官、当工程师，人才喷涌而出；1905 年清廷废除科举，无数聪明头脑一朝获释，不出一代人，他们就变成了科学家、工程师、商人和思想家。你可以说现代中国就是从科举的废墟上长出来的。** 今天三分之二的瑞士青年初中毕业就去读职业教育，德国高级工的资格在国家框架里跟大学学历平起平坐——这不是强制分流，背后的关键是**行业间的收入差距很小、蓝领工作也很有高级感，人们自然就不会都挤着上大学。** 这些变革都有特定条件、有过阵痛、还有反复，但是变革是可能的。**社会终究会自我平衡：限制竞争是扬汤止沸，价值多元是另起炉灶，人口下降则是釜底抽薪。** 2025 和 2026 年，中国高考报名人数已经连续两年下降；生育率这么低，以后的报名人数只会越来越少，现在甚至出现了大学主动抢人的情况，局面正在反转。而另一边随着学历溢价逐年走低，有的大学生返乡创业甚至成了全职儿女，赛道的吸引力已经不如从前。**人终究是活的，每一个拒绝摩洛克的人都是在给社会找出一条路。一个伟大文明不可能说只有一种人生值得赢。** 好，以上就是今天的全部内容，现代思维工具课，祝您每天都有收获。
`,X1=`# 085丨第三物：合作不必先有共识

## 讲什么

**第三物 / 边界物**——一群孩子在空地上争地盘，眼看就要打起来，一个孩子从书包里拿出一个球说"踢吗？"——奇怪的事情发生了：刚才还互相瞪眼的人开始分队抢球、配合防守，为各自的球队争胜负。他们没有解决掉原来的任何分歧、没分出对错、谁也不服谁，然而他们直接就开始了非常有序的合作。**这个球就是这一讲的思维工具——第三物：能被双方共同看见、共同操作，从而把人对人的直接僵局改造成"人为物"的共同局面的东西。** 社会学家苏珊·斯塔和科学哲学家詹姆斯·格里斯莫研究加州大学伯克利分校脊椎动物博物馆，发现科学家、标本收藏者、赞助人、行政对标本的理解完全不同，却能协作得很好——靠的就是那些标本本身，他们称之为**边界物**：既可以让不同群体各取所需，又可以在不同的社会世界之间保持共同身份。

## 解决什么真问题

解释"为什么达成共识那么难，而合作却可以不需要共识"：很多人以为要合作就必须先达成共识——你得先发挥影响力、说服力、做思想工作，让对方跟你互相理解，最好价值观一致、思想统一、情绪到位、甚至彼此喜欢才能共识。**可现实中哪有那么多共识呢？其实我们这个物种的生存本能并不是大家都先想通了再合作。** 心理学家发现，人类婴儿还不会说话时就已经有了一种了不起的能力叫**共同注意**：妈妈指着一朵花让宝宝看，宝宝立即知道妈妈想让他注意这个，而且知道妈妈也在注意这个——不需要语言交流、不需要讲道理，只要两个人一起指向一个东西，合作就有了根基。**人类不是先有了共识才合作，而是先能一起盯住同一个东西、一个第三物，才慢慢长出共识的。共同理解是奢侈品，共同对象才是日用品。**

## 核心论点

- **人盯着人盯出来的是警觉、打量、比较和防备；两个人同时看向第三个东西，那股绷着的劲就放松了**——我们可以一起研究它、一起摆弄它、一起对它负责。这个本能长大后变成了一整套社会技术。
- **价格就是市场中的第三物**：卖家觉得东西值 1000，买家只想出 600，两人可以来自完全不同的世界——你不必喜欢跟你交易的人，不必认同他的活法，不必搞懂他的童年，更不必在价值观上对齐，只需围着一个数字来回挪：800、750……只要能在某一价格上同时点头，交易就发生了。**市场不是让人变得高尚，而是让不够高尚的人也能合作。** 哈耶克说价格是传递分散知识的信息机制——金属锡突然短缺，你不需要知道是哪个矿出了事故、也不需要开全球供应链大会，锡价上涨，使用锡的人就会自动节约或寻找替代品，生产者就会自动增加供给。**无数陌生人没有互相解释，却因为同一个价格一起行动了。**
- **第三物让问题变得可比较、可谈判、可追踪**：巴黎气候协定把近 200 个国家的一团乱麻硬压到一个数字上——全球平均气温升幅控制在比工业化前水平高 2 度以内、力争 1.5 度之内，有了这个数各国就可以围绕它争论、承诺、讨价还价。**第三物先把价值冲突变成共同坐标，人们就能再把共同坐标变成可执行的动作。** 一份会议纪要、一个 KPI、一张报价单、一份合同、一个产品原型、一张家庭值日表——任何能摆到台面上的东西都可以是第三物。
- **问题外化机制**：两人一交近，话题很快从"这件事该怎么办"滑到"你这个人怎么这样"——一旦滑到这步就不可挽回了，因为对方会立刻进入防御、开始辩解反击翻旧账。叙事疗法要求咨询师把人和问题分开：不是把来访者看成有问题的人，而是帮他把问题从自我身份里拿出来，摆在面前像观察一个外部对象那样观察它。**"人不是问题，问题才是问题"——一旦你把问题从人身上摘出来放在桌面上，冲突双方就不再互相审判，而是共同面对一个被外化出来的第三物。** 孩子老磨蹭不肯睡觉，你的本能是冲他吼"你怎么天天这么拖拉"——话一出口孩子就成了被告；换成"来，咱俩研究一下，这个晚睡怪一般几点钟冒出来，他都使什么招拖住你，是手机吗？"——那个磨蹭的毛病就从孩子身上被拆下来了，变成桌上一个你俩可以一起对付的东西，孩子变成了和你并肩作战的队友。**人一旦被定义为问题，他只能防御；问题一旦被外化，人就可以行动。**
- **礼与乐的分工**：礼管的是分——一屋子人谁尊谁卑、谁先谁后，按协议分得清清楚楚，但光有礼人和人之间是端着的、隔着的、绷着的；乐管的是合——一屋子人一起奏乐、一起唱歌、一起在同一个节拍里动起来，不管谁尊谁卑，大家听到的节奏是一样的、动作是一样的，所有人融成了一个"我们"。**《乐记》说"乐者为同，礼者为异；同则相亲，异则相敬"。乐就是那个第三物。**

## 关键例证 / 金句

- 博物馆案例：科学家看到的是证据、收藏者看到的是爱好、赞助人看到的是面子、行政看到的是档案，可他们偏就能协作得很好——靠的就是那些标本。**别管你是怎么理解它的，只要你可以拿它来做自己的事，你就可以指着它跟人协作。**
- 两个黑帮剑拔弩张，只要还有"数字"可以讲，双方就能坐下来谈。
- 低水平谈判：你不讲理！高水平谈判：这张清单里的价格、期限和风险分配，哪一项不合理？低水平家庭争吵：你根本不在乎我！高水平家庭协商：我们把本周接孩子、做饭、加班和休息时间排到一张日历上。低水平公司会议：销售总是乱承诺、研发总是拖后腿！高水平公司会议：我们把客户承诺、交付节点和风险清单放到一张表里。
- **文明不是没有冲突，很多时候文明是给冲突一个球。**
- 第三物的最高形态叫**超级目标**：社会心理学家穆扎菲尔·谢里夫的著名发现——两拨本来敌对的人，光让他们多接触多见面关系未必变好，真正能化解敌意的是丢给他们一件非得合力才办得成的事，比如一起把陷进泥里的卡车推出来。**最好的团建不是全公司一起喊口号吃火锅，而是一起去打一场硬仗。共同的敌人凝聚得快，共同的目标凝聚得久。**
- **警惕第三物的黑暗面**：球可以组织比赛，也可以组织狂热；价格可以促进交易，也可以吞掉不可标价之物；KPI 可以让目标可见，也可以让人为了指标牺牲真实价值；共同目标可以把人变成队友，共同敌人也可以把人变成炮灰。一个东西可以是大家围着它一起行动，可一旦变成大家眼里只剩下它，麻烦就来了——替罪羊、编户齐民、共同知识和摩洛克，都可以从第三物的角度重新理解。

## 如何应用

1. **核心法就一句：你想在一个局面里争取主动，就别空着手进场，先拿出一个球来。** 只会抱怨的人是在请求别人改变，只会讲道理的人是在请求别人承认自己对；而一个拿得出第三物的人——哪怕只是一个粗糙的方案、一张草图或者一份清单——他不请求任何人，他直接改变了场上的动作，让大家围着他那个东西转。想推动项目：先写一页备忘录，别只说方向很重要；想说服同事：先画一张流程图，别只说你们应该配合；想改善家庭关系：先拿出一张日历、一份分工表、一个周末计划；想卖一个创意：先做一个小原型。**你的主动性不是直接改变别人，而是制造一个让别人可以重新行动的对象。**
2. **创造共享**：夫妻相处久了容易没话说，"你到底爱不爱我"很快会陷入哲学泥潭——可只要两个人一起养一盆花、策划一次旅行、记一本账、甚至有个孩子，有了共同关注的对象，关系就有了着落、总有话说。聚会至少得有顿饭——吃什么次要，重要的是这顿饭就是最基础的第三物，至少大家可以一起动筷子；更好的聚会应该有一个讨论议题，最好的聚会则有一个共同项目——读书会、观影会、一起办一场活动、一起帮朋友解决一个真问题，在共同行动中人们特别容易建立深度连接。
3. **先有共同对象，再谈共识**：遇到价值冲突，别急着说服对方——先把问题、数据、清单、原型摆到桌面上，让双方一起研究同一个东西。记住：**合作不需要共识，只需要一个共同的第三物。**

---

## 全文（清洗后的课程转录，重点加粗+底纹）

欢迎来到现代思维工具课，我是万维钢。我们这个社会系列讲了这么多，其实一直在研究一个既古老又现代的问题，那就是：**人与人的地位、利益、身份、信念各不相同，怎么还能和平共处、有效合作呢？** 你难道不觉得人类社会是个奇迹吗？一群陌生人互不伤害就不错了，居然还能开公司、建医院、修高铁、写开源软件、办世界杯。我们讲了礼、激励相容、共同知识等促成合作的机制，也讲了柠檬市场、外部性和摩洛克等让合作失灵机制，还讲了可读性和非预期后果这些人类为了合作而付出的代价。最后这一讲咱们不搞那么多反思，直接说个能简单有效促成合作的方法——这个方法可能你早就在用了，只是很少有人点破，属于"百姓日用而不知"的智慧。

想象一群孩子在空地上争地盘：一个说"你凭什么站这里"，一个说"这是我的地方"，拉帮结派、已经有人在找砖头，眼看一场儿童版地缘政治危机就要爆发。这时候一个孩子从书包里拿出一个球说："踢吗？"于是奇怪的事情就发生了：刚才还互相瞪眼的人开始分队抢球、配合防守、为自己的球队争胜负。**这群孩子没有解决掉他们原来的任何一个分歧，没分出对错，谁也不服谁，然而他们直接就开始了非常有序的合作。** 这个球就是我们这一讲的思维工具，我们称之为**第三物**：意思是能被双方共同看见、共同操作，从而把人对人的直接僵局改造成"人为物"的共同局面的东西。

可能很多人以为要想合作就必须先达成共识：你得先发挥影响力、说服力、做思想工作，让对方跟你互相理解，最好价值观一致、思想统一、情绪到位，甚至彼此喜欢才能共识。**可现实中哪有那么多共识呢？其实我们这个物种的生存本能并不是"大家都先想通了再合作"。要想促成合作，你只需要一种特别简单的注意力机制。** 心理学家发现，人类的婴儿还不会说话的时候就已经有了一种很了不起的能力，叫**共同注意**：妈妈指着一个东西——比如一朵花——让宝宝看，宝宝立即就知道妈妈想让他注意这个东西，而且知道妈妈也在注意这个东西。如果此时妈妈正在教宝宝说话、发出"花"的声音，宝宝就知道意思是"这个东西叫做花"。之前不需要有语言交流、不需要讲道理，**只要两个人一起指向一个东西，合作就有了根基。语言、教学、模仿都是从"你、那个东西和我"这个三角关系里长出来的。人类不是先有了共识才合作，而是先能够一起盯住同一个东西、一个第三物，才慢慢长出共识的。**

你体会一下：两个人要是只能互相盯着，关系是绷着的——**人盯着人盯出来的是警觉、打量、比较和防备；可只要两个人同时看向第三个东西，那股绷着的劲就放松了：我们可以一起研究它、一起摆弄它、一起对它负责。** 这个本能在人长大以后就变成了一整套社会技术。

1989 年，加州大学的两位研究者——社会学家苏珊·斯塔和科学哲学家詹姆斯·格里斯莫，发表了一篇关于加州大学伯克利分校脊椎动物博物馆的论文，可这篇论文提出的思想却比博物馆大得多。他们发现在这座博物馆里一起干活的人——专业的科学家、业余的标本收藏者、出钱的赞助人、管行政的——对一支标本到底意味着什么，理解完全不同：科学家看到的是证据，收藏者看到的是爱好，赞助人看到的是面子，行政看到的是档案。**可他们偏就能协作得很好。为什么呢？靠的就是那些标本本身——别管你是怎么理解它的，只要你可以拿它来做自己的事，那么你就可以指着它跟人协作。** 斯塔和格里斯莫把这种对象叫**边界物**：它既可以让不同群体各取所需，又可以在不同的社会世界之间保持共同身份。我们把概念扩大一下：不管促成的是协作还是竞争，只要能把人跟人的僵局变成人围绕着一个对象的局面，就叫第三物。**要点是：合作不一定需要共识。其实中国人讲"和而不同"不就是这个意思——共同理解是奢侈品，共同对象才是日用品。**

一旦你认出了第三物，就会发现它无处不在。**比如说价格就是市场中的第三物。** 卖家觉得自己的东西值 1000，买家只想出 600，这两个人可以来自完全不同的世界——你不必喜欢跟你交易的那个人，不必认同他的活法，不必搞懂他的童年，更不必在价值观上跟他对齐。**你们只需要围着一个数字来回挪：800、750……只要你们能在某一个价格上同时点头，交易就发生了。** 这就是市场的伟大之处：**它不是让人类变得高尚，而是让不够高尚的人也能合作。** 哈耶克有个著名的洞见：价格是传递分散知识的信息机制——每个人只知道身边的一点点情况，可是价格能把稀缺、需求、风险、替代品预期等等的信息压缩成一个数，就让陌生人各自调整行动。比如金属锡突然短缺：你不需要知道是哪个矿出了事故，也不需要开全球供应链大会——锡价上涨，使用锡的人就会自动节约或者寻找替代品，生产者就会自动增加供给。**无数陌生人没有互相解释，却因为同一个价格一起行动了。只要有个数字就行。你看两个黑帮剑拔弩张，只要有数字可以讲，双方就能坐下来谈。**

再比如说全球气候治理：将近 200 个国家，发展阶段不同、利益相反——我说你们发达国家得多承担责任，你说我是人口大国必须发展，怎么谈？**巴黎协定把这一整团乱麻硬压到了一个数字上：务必把全球平均气温的升幅控制在比工业化前水平高 2 度以内，力争 1.5 度之内。有了这个数，各国就可以围绕他争论、承诺、讨价还价，大家就有了抓手。第三物，让问题变得可比较、可谈判、可追踪。** 第三物先把价值冲突变成共同坐标，人们就能再把共同坐标变成可执行的动作：一份会议纪要、一个 KPI、一张报价单、一份合同、一个产品原型、一张家庭值日表……任何能摆到台面上的东西都可以是第三物。

第三物特别能避免冲突，这里有个机制叫**问题外化**。你肯定有过这样的体验：两个人一交近，话题很快就从"这件事该怎么办"滑到了"你这个人怎么这样"——可一旦滑到这一步，局面就不可挽回了，因为对方会立刻进入防御、开始辩解反击翻旧账。心理治疗里有一派叫**叙事疗法**，要求咨询师把人和问题分开：不是把来访者看成有问题的人，而是帮助他把问题从自我身份里拿出来，摆在面前像观察一个外部对象那样观察它。叙事疗法代表人物迈克尔·怀特有句名言：**"人不是问题，问题才是问题。"** 一旦你把问题从人身上摘出来放在桌面上，冲突双方就不再互相审判，而是共同面对一个被外化出来的第三物。比如说孩子老是磨蹭蹭不肯睡觉：你的本能是冲他吼"你怎么天天这么拖拉"——话一出口孩子就成了被告，他唯一能做的就是自卫，要么顶嘴、要么沉默玩手机。问题外化要求你换个说法："来，咱俩研究一下，这个晚睡怪一般几点钟冒出来？他都使什么招拖住你，是手机吗？"就这么一改，**那个磨蹭的毛病从孩子身上被拆下来了，变成了桌上一个你俩可以一起对付的东西，孩子变成了和你并肩作战的队友。这就是人们常说的：不是"你面对孩子"，而是"你和孩子共同面对问题"。**

把人和问题分开也是谈判学里的头号原则。只有如此，谈判双方才能关注利益而不是立场，从而创造双赢选项、使用客观标准。低水平谈判："你不讲理！"高水平谈判："这张清单里的价格、期限和风险分配，哪一项不合理？"低水平家庭争吵："你根本不在乎我！"高水平家庭协商："我们把本周接孩子、做饭、加班和休息时间排到一张日历上。"低水平公司会议："销售总是乱承诺，研发总是拖后腿！"高水平公司会议："我们把客户承诺、交付节点和风险清单放到一张表里。"**人一旦被定义为问题，他只能防御；问题一旦被外化，人就可以行动。**

我们在系列开头讲过：地位是社会参与的第一性原理，人与人的见面总想分出个高低来，所以社会发明了礼来减少地位冲突。其实古人还发明了另一个化解冲突的手段，那就是**乐**：表面上音乐，实际上是一套让人共同进入节奏、共同参与秩序的仪式系统。礼管的是分——一屋子人谁尊谁卑、谁先谁后，按照一定协议分得清清楚楚，可光有礼，人和人之间是端着的、隔着的、绷着的；乐管的则是合——一屋子人一起奏乐、一起唱歌、一起在同一个节拍里动起来，不管谁尊谁卑，大家听到的节奏是一样的、动作是一样的，所有人融成了一个"我们"。《乐记》说：**"乐者为同，礼者为异；同则相亲，异则相敬。"** 乐就是那个第三物：它让一群身份各异、心思各异、本来端着架子互相打量的人，因为一起盯住了同一个东西，暂时忘掉了彼此的高低和分歧，不知不觉就协调到了一块。**第三物的根本作用就是让大家注意力同向。**

那你说作为个人该怎么使用第三物呢？**核心法就一句：你想在一个局面里争取主动，就别空着手进场，先拿出一个球来。** 只会抱怨的人是在请求别人改变，只会讲道理的人是在请求别人承认自己对；而一个拿得出第三物的人——哪怕只是一个粗糙的方案、一张草图或者一份清单——他不请求任何人，他直接改变了场上的动作，让大家围着他那个东西转。**你想推动一个项目，不要只说"这个方向很重要"，你先写一页备忘录；你想说服同事，不要只说"你们应该配合"，你先画一张流程图；你想改善家庭关系，不要只说"你们都理解我"，你先拿出一张日历、一份分工表、一个周末计划；你想卖一个创意，先做一个小原型。你的主动性不是直接改变别人，而是制造一个让别人可以重新行动的对象。**

这里给两个特别实用的主意。第一是**创造共享**：一个家庭夫妻相处久了就容易没话说，像"你到底爱不爱我"这种话题很快就会陷入哲学泥潭；可只要两个人一起养一盆花、捣鼓一次旅行、记一本账、甚至有个孩子——有了共同关注的对象，关系就有了着落、就总有话说。同样道理，聚会很少是一群人坐在那干聊，都至少得有顿饭——吃什么次要，重要的是这顿饭就是最基础的第三物，至少大家可以一起动筷子；更好的聚会应该有一个讨论议题，最好的聚会则有一个共同项目——读书会、观影会、一起办一场活动、一起帮一个朋友解决一个真问题，**在共同行动中，人们特别容易建立深度连接。**

第二个主意也是第三物的最高形态，叫做**超级目标**：一个非得所有人合力才干得成的共同目标。这是社会心理学家穆扎菲尔·谢里夫的著名发现：**两拨本来敌对的人，光让他们多接触、多见面，关系未必会变好；真正能化解敌意的是丢给他们一件非得合力才办得成的事，比如一起把陷进泥里的卡车推出来。** 所以最好的团建不是全公司一起喊口号吃火锅，而是一起去打一场硬仗。**共同的敌人凝聚得快，共同的目标凝聚得久。**

我必须补一句警告：**第三物不是天然好的，它有黑暗的一面。** 球可以组织比赛，也可以组织狂热；价格可以促进交易，也可以吞掉不可标价之物；KPI 可以让目标可见，也可以让人为了指标牺牲真实价值；共同目标可以把人变成队友，共同敌人也可以把人变成炮灰。一个东西可以是大家围着他一起行动，可一旦变成大家眼里只剩下他，麻烦就来了——我们前面讲过的替罪羊、编户齐民、共同知识和摩洛克，也可以从第三物的角度重新理解。**让陌生人和平共处、让分歧者携手做事，是人类文明永恒的课题，而我们确实摸索出了一系列促成合作的好办法。文明不是没有冲突，很多时候文明是给冲突一个球。** 好，以上就是今天的全部内容，现代思维工具课，祝您每天都有收获。
`,Z1=`# 086丨剩余判断权：为什么组织总得有人说了算

## 讲什么

**剩余判断权**——一家公司也好、一个组织也好，为什么非得有领导？我们从第一性原理出发推导：组织为什么必须由一个人、一个具体的个人说了算。推演的结果叫做**剩余判断权**。对老百姓和老板来说显而易见，对读书人来说可没那么显然：都什么时代了，谁比谁聪明多少呢？不是应该由市场配置资源、由数据提供答案、由 AI 分析方案吗？天下大同的时候，为什么不是民主投票、为什么非得服从一个人呢？这科学吗？

## 解决什么真问题

回答"为什么公司不能靠合同解决一切、不能靠委员会投票、不能靠自组织涌现、也不能靠 AI 决策"：未来的不确定性无法被穷尽写进合同，所以必须有人对合同没有规定的事项拥有剩余控制权；投票不能保证给你一个战略（阿罗不可能定理）；自组织只适合任务模块化、试错成本低、错误能局部隔离的事情；AI 的输出依赖你给它的目标、约束和评价标准，它不能替你决定什么值得付出代价。**归根结底，不管用什么程序怎么讨论，最后必须得拿一个准主意——一家公司必须在证据不充分、结果尚未揭晓的时候，从若干互不相容的未来中选择一个，把资本、时间、人才和声誉押上去。这个不可分割的关键赌注只能有一个最终主人。**

## 核心论点

- **推导链条**：科斯发现交易成本（1937，为什么必须有公司：参与市场要寻找价格、谈判、签合同、监督履约，成立公司内部可以方便分工合作）→西蒙提出权威的接受区间（1951，雇佣合同和普通买卖合同的区别：老板买的不是一张写死的任务清单，而是在边界之内的调渡权，员工签雇佣合同时等于先同意在一个接受区间内让雇主决定他具体做什么）→格罗斯曼和哈特的不完全合约理论（1980 年代，未来无法被穷尽写进合同，所以资产所有权真正重要的部分恰恰就是对合同没有规定事项的剩余控制权）→奈特的不确定性下的判断（老板的利润就是对承担不确定性的补偿；风险可以用概率量化对冲，而不确定性是连概率分布都不知道，必须硬着头皮一搏）。
- **为什么不能是委员会**：投票能让每个人表达偏好，可以对每一个选项形成多数意见，但你把众人最喜欢的东西拼在一起可不能叫战略——可以投票定产品定位、再投票定技术路线、再投票定价格、再定品牌形象，最后得到的将是一个"定位高端、技术简单、定价亲民、品牌奢侈"的怪物，这四个要求根本互不相容。**阿罗不可能定理：只要选项超过两个，就没有一种万能投票法能保证把所有人的偏好拼成一个始终合理、始终一致的集体选择。战略不是拼盘拼出来的。**
- **为什么不能靠自组织**：自组织只适合任务模块化程度高、试错成本低、错误能够局部隔离的事情——大家可以各自写软件的模块，却总得有人决定哪些代码能合并进主干版本。**草原可以自然生长，桥梁两端却不能靠涌现自动合拢，总得有人下个死命令。**
- **为什么不能靠 AI**：AI 的输出依赖于你给它定的目标、约束和评价标准；它能告诉你各种选择可能付出什么代价，却不能替你决定什么值得付出代价。陪审团关上门吵得天翻地覆都可以，但走出来的时候只能给一个判断——有罪或者无罪，不能交给法官一份"60% 的人觉得有罪"的报告。**一个组织最后不能交付"大家怎么看"，只能交付"现在做什么"。**
- **关键在"剩余"二字：老板可不能什么事都管**。一件事该谁管，标准看它的**耦合度**和**可逆性**——耦合度就是这个决定是否会牵动组织的许多部分、要求彼此配合；可逆性就是这个决定万一是错的，能不能以比较低的成本撤回来。四象限：①耦合度低+可逆性高→交给现场的人（客服免运费、按钮颜色，越快越好）；②耦合度低+可逆性低→交给专家和明确责任（会计、安全规范、加密方案）；③耦合度高+可逆性高→授权部门负责人自行探索但老板总揽全局（同时测试多个产品原型但要确保基础设施兼容）；④耦合度高+可逆性低→老板亲自拍板（公司定位、核心架构、重大并购、建厂选址、关键人士、是否自我颠覆）。
- **贝佐斯的双向门和单向门**：可逆决策是双向门，重大且难以撤回的决策是单向门——老板最该干的就是那些单向门决策；而大公司最常见的病是用单向的重型流程处理大量双向门决策，于是组织越来越慢、试验越来越少。**老板绝不是管得越多越好：凡是能写成流程的就交给流程，凡是能由价格决定的就交给市场，凡是能靠专业知识交给专家，凡是能快速试错且错了也无所谓的就放给一线。能交出去的都交出去，最后剩下的那一小块——无法程序化、市场化、专业化、现场化的部分——才是老板真正该管的。**

## 关键例证 / 金句

- 法律和规则只能给你划定决策范围（不能造假、预算不能突破、安全标准是什么），但不能回答"我们究竟做不做这个产品、服务高端客户还是大众客户、遇到短期亏损是坚持还是撤退"——**物理定律可以排除盖不起来的房子，却不能从所有可能的建筑中自动生成一座值得盖的房子。**
- 领领导者的日常：听取各方信息和建议→选择一个未来确定战略→构建叙事让人理解为什么选这个未来→设计激励相容的系统把公司变成实现这个未来的机器→听取反馈、让团队有心理安全感→纠错。**这一切非常像驾驭一群 AI 智能体做项目——现在就算你不是领导，你也需要领导力，你最起码需要领导 AI。**
- 五件老板必须亲自拍板的事：**①定题**（组织究竟在解决什么问题——销售下滑是销售不努力还是产品失去价值？找到那个正确的叙事）；**②立尺**（设定目标函数——利润、增长、品质、速度、韧性、客户利益、员工发展互相冲突，你必须决定优先级、硬约束、怎样算赢、用多长时间尺度评价）；**③下注**（战略取舍——战略不只是你想要什么，更是你愿意为之放弃什么，能否在困难面前坚持战略一致性）；**④授权**（决定哪些事情不再由自己决定——谁拥有提案权、批准权、执行权和否决权，坏消息怎样绕过美化抵达权力中心）；**⑤改判**（决定什么证据出现时必须认错——真正的坚定是为目标放弃旧答案，虚假的坚定是为保护旧答案牺牲目标）。
- **领导力就是把许多可能压缩成一个共同承诺的制度**：一个组织必须有一个人在合约不完备之处、针对不确定的未来、设定一个主观的战略，确保它得到贯彻，并愿意为结果承担责任——这就是剩余判断权。

## 如何应用

1. **分清哪些决策该自己拍板**：用"耦合度 × 可逆性"四象限给组织的大事小情分类——高耦合低可逆的才自己管，其他能交就交。对照贝佐斯的警告：**检查自己是否在用单向的重型流程处理大量双向门决策**——如果是，组织会越来越慢、试验越来越少。
2. **警惕微管理**：有些老板喜欢直接干预一线工作，管理学称之为微观管理或微操作——你把本该由现场根据局部知识做出的判断收回到自己手里，看上去是负责，实际上是在削弱组织的判断能力。**霸道总裁剧里最爱的剧情，恰恰是把权力用在了太小的事情上。**
3. **掌握领导者五项拍板权**：定题、立尺、下注、授权、改判——尤其"改判"要求你事先想好哪些信号能证明战略有效、哪些信号证明无效；撞了南墙要知道回头，同时既要有任性又能够回头。

---

## 全文（清洗后的课程转录，重点加粗+底纹）

欢迎来到现代思维工具课，我是万维钢。这一讲咱们进入领导者模块。我们先不谈具体怎么领导，先来考虑一个更根本的问题：**一家公司也好、一个组织也好，为什么非得有领导？** 很多人认为这根本不是问题——所谓"家有千口主事一人"，公司就应该听老板的：霸道总裁就应该上能拍板战略、中能指导设计师改配色、下能监督食堂炒菜。而有些人不这么想：都什么时代了，谁比谁聪明多少呢？不是应该由市场配置资源、由数据提供答案、由 AI 分析方案吗？天下大同的时候，为什么不是民主投票、为什么非得服从一个人呢？这科学吗？**我们将从第一性原理出发，推导出组织为什么终究必须由一个人、一个具体的个人说了算。我们推演的结果叫做剩余判断权。**

在论证公司需要老板之前，首先需要证明为什么世界上需要有公司：既然市场这么好，为什么不让人各自想干什么就干什么、通过市场交易达成分工合作，为什么必须成立公司、大家每天到固定场所上班把自己拴住呢？1937 年英国经济学家罗纳德·科斯找到了答案，那就是**交易成本**：你要参与市场就得寻找价格、谈判、签订合同、监督履约，这些都要花成本——有金钱成本更有时间成本；而只要成立一家公司，大家在公司内部就可以很方便的分工合作，你想用什么资源、用什么人用就是了，不需要每次重新谈判。

那为什么非得听老板指挥呢？1951 年美国经济学家、管理学家赫伯特·西蒙解释了为什么公司内部会有权威：公司招一个工程师，不可能在合同中写明未来三年他要改哪一行代码，所以**雇佣合同和普通买卖合同是有区别的：老板买的不是一张写死的任务清单，而是在边界之内的调渡权**——员工签雇佣合同时，就等于先同意在一个接受区间之内让雇主决定他具体做什么。到了 1980 年代，美国经济学家桑福德·格罗斯曼和英国经济学家奥利弗·哈特进一步发展了**不完全合约理论**：未来无法被穷尽的写进合同，所以资产所有权真正重要的部分恰恰就是对合同没有规定事项的**剩余控制权**。也就是说：什么叫老板拥有公司？拥有就意味着对合同没有规定用途的关键资产有最终控制权，而这个资产控制权又决定了组织决策权——**没写进去的事，你们得听我的。老板不是坐享分红的人，老板是说了算的人。**

可老板就算有权决定，他到底应该决定什么呢？这就轮到我们多次提到过的美国经济学家弗兰克·奈特了：**老板的决定就是怎么应对不确定性。** 我们前面说过不确定性和风险的区别：风险是可以用概率量化的，总可以使用某种方法对冲从而理性对待；而不确定性则是连概率分布都不知道——未来会发生什么，那个事很可能今天所有人都没想到，所以不能用理性对待，必须是某种硬着头皮的一搏。市场上从来没有见过这种类型的产品、没有人知道消费者会不会买账，我们要不要研发、前期舍得投多少钱、生产规模应该多大——这些决定不管有多少理性成分，最终一定有一个非理性的、任性的东西，用我们前面讲过的说法就是归纳偏见、主观先验。**这就是老板必须承担的不确定性。奈特说老板的利润就是对承担这种不确定性的补偿。** 科斯发现了交易成本，西蒙发现了接受区间，格罗斯曼和哈特发现了剩余控制权，奈特发现了不确定性下的判断——这样我们就从"必须有公司"推导到了"公司必须有人说了算"。

可为什么这个说了算的必须是一个人，不能是一个委员会，甚至 AI 呢？首先老板不能说"我只要依法依规办事就好，我不做任何主观的决定"——法律和规则只能给你划定决策范围，但不能回答"我们究竟做不做这个产品、服务高端客户还是大众客户、遇到短期亏损是坚持还是撤退"。**这就如同物理定律可以排除盖不起来的房子，却不能从所有可能的建筑中自动生成一座值得盖的房子。** 老板也不能说"我听委员会的，有事我们民主决策"——投票能让每个人表达偏好，可以对每一个选项形成多数意见，但你把众人最喜欢的东西拼在一起可不能叫战略：你可以就产品定位组织一场投票，再就技术路线投票，再投票决定价格，再决定品牌形象——最后你得到的将是一个"定位高端、技术简单、定价亲民、品牌奢侈"的怪物，这四个要求根本不互相兼容。这不是我特意发明的案例，这里有数学原理：美国经济学家肯尼斯·阿罗证明，**只要选项超过两个，就没有一种万能投票法能保证把所有人的偏好拼成一个始终合理、始终一致的集体选择，这叫阿罗不可能定理。也就是说，投票不能保证给你一个战略：战略需要你重新定义问题、创造新选项，并且必须确保让产品、技术、品牌、定价和组织结构形成一套配合。战略不是拼盘拼出来的。**

那能不能靠复杂系统的自组织，让公司各个部门自由探索方向、自由组合，最终涌现出一个最好的决策来呢？也不行。**自组织只适合任务模块化程度高、试错成本低、错误能够局部隔离的事情**：大家可以各自写软件的模块，却总得有人决定哪些代码能合并进主干版本。**草原可以自然生长，桥梁两端却不能靠涌现自动合拢，总得有人下个死命令。** AI 决策行不行呢？也不行。**AI 的输出依赖于你给它定的目标、约束和评价标准；它能告诉你各种选择可能付出什么代价，却不能替你决定什么值得付出代价。** 归根结底，不管用什么程序怎么讨论，最后必须得拿一个准主意：陪审团关上门吵得天翻地覆都可以，但走出来的时候只能给一个判断——有罪或者无罪，不能交给法官一份"60% 的人觉得有罪"的报告。**一个组织最后不能交付"大家怎么看"，只能交付"现在做什么"。一家公司必须在证据上不充分、结果尚未揭晓的时候，从若干互不相容的未来中选择一个，把资本、时间、人才和声誉押上去。这个不可分割的关键赌注只能有一个最终主人。** 当然也不一定非得是一个肉身的人，也可以是一个单一的终极机制，但它必须有明确的价值函数和责任归属，不能今天这样明天那样，不能"我就是帮着出主意"——所以通常是一个人。**领导力就是把许多可能压缩成一个共同承诺的制度。一个组织必须有一个人，在不完备的合约之后、针对不确定的未来、设定一个主观的战略，确保它得到贯彻执行，并且愿意为结果承担责任。这就是剩余判断权。**

那你说我们推演了半天，最后无非还是证明了"应该老板说了算"，这不是老百姓的常识吗？这有啥意义呢？**意义可太大了：剩余判断权，关键词是"剩余"——老板可不能什么事都管。** 一个事该谁管，标准是看它的**耦合度**和**可逆性**：耦合度就是这个决定是否会牵动组织的许多部分、要求它们彼此配合；可逆性就是这个决定万一是错的，能不能以比较低的成本撤回来。用这两个维度可以把组织的大事小情分为四类：**耦合度低且可逆性高的事情应该交给现场的人**——客服是否免掉一次运费、页面按钮换什么颜色、一个小功能怎样实现，这些决定越快越好，而且错了也没有多大损失，千万别搞什么审批；**耦合度低且可逆性低的事情应该交给专家和明确责任**——会计处理、安全规范、加密方案，不能谁想怎样就怎样，必须靠谱、得有人负责，但老板并不能让它更靠谱，应该听资深专业人士的；**耦合度高且可逆性高的事情会影响公司全局但又不至于造成重大伤害**——可以授权给部门负责人自行探索，但老板要总揽全局，比如你可以搞几个组同时测试多个产品原型，但要确保各团队使用的基础设施兼容；**而对于耦合度高且可逆性低的事情——影响范围广、一出问题损失很大——必须由老板亲自拍板：公司定位、核心架构、重大并购、建厂选址、关键人士，还有是否自我颠覆。**

我们前面讲期权的时候说过贝佐斯的**双向门和单向门**概念：可逆决策是双向门，重大且难以撤回的决策是单向门。显然，老板最该做的事那些单向门决策；而贝佐斯的警告是：**大公司最常见的病，是用单向的重型流程处理大量双向门决策，于是组织越来越慢、试验越来越少。** 有些老板喜欢直接干预一线的工作，管理学称之为微观管理，也可以叫微操作——那可不是一个好习惯：**你把本该由现场根据局部知识做出的判断收回到自己手里，看上去是负责，实际上是在削弱组织的判断能力。老板绝不是管得越多越好：凡是能写成流程的就交给流程，凡是能由价格决定的就交给市场，凡是能靠专业知识的就交给专家，凡是能快速试错而且错了也无所谓的就放给一线。能交出去的都交出去，最后剩下来的那一小块——那个没法程序化、市场化、专业化、现场化的部分，那些高度耦合、难以逆转、证据不足而且不能无限等待的问题——才是老板真正该管的。** 可是老百姓最爱幻想的各种霸道总裁剧情，恰恰是把权力用在了太小的事情上。

从剩余判断权出发，我们可以推导出领导者真正应该亲自拍板的五件事。第一是**定题**，也就是组织究竟在解决什么问题：销售下滑是销售人员不努力还是产品已经失去价值？项目延期是执行不力还是目标本身互相冲突？是员工没有狼性还是他们根本不知道怎样才算赢？你得找到那个正确的叙事。第二是**立尺**，把尺子立起来——也就是设定目标函数：利润、增长、品质、速度、韧性、客户利益和员工发展，这些都是好东西，但它们会互相冲突，你必须决定它们的优先级是什么、哪些是不能突破的硬约束、什么可以暂时牺牲、怎样算赢、还有用多长时间尺度评价结果。第三是**下注**，也就是战略取舍：我们讲过战略不只是你想要什么，更重要的是你愿意为之放弃什么——你能不能确保在未来面对困难的时候坚持战略的一致性。第四**授权**，也就是决定哪些事情不再由自己决定：局部知识在一线，可是全局外部性在上层；你需要决定谁拥有提案权、批准权、执行权和否决权，什么情况必须升级，坏消息怎样绕过层层美化抵达权力中心。第五是**改判**，也就是决定什么证据出现时必须认错：你必须既有任性，又能够撞了南墙知道回头。那怎么知道现在是不是南墙呢？**你必须事先想好哪些信号能证明你的战略有效、哪些信号证明你的战略无效。真正的坚定是为了目标放弃自己的旧答案，虚假的坚定是为了保护旧答案牺牲目标。**

这样说来，一个领导者的日常工作流无非就是：听取各方的信息和建议，然后选择一个未来确定战略；接着要构建叙事，让人理解为什么要选这个未来；再然后设计一个激励相容的系统，把公司变成实现你这个未来的机器；然后听取反馈、让你的团队有心理安全感；再接着纠错。**我感觉到这一切非常像驾驭一群 AI 智能体做项目。现在就算你不是领导，你也需要领导力——你最起码需要领导 AI；就算你是被领导，你也应该知道一个组织怎样才能高效运行。** 好，以上就是今天的全部内容，现代思维工具课，祝您每天都有收获。
`,Y1=`# 087丨组织资本：怎样让 1+1＞2

## 讲什么

**组织资本**——如何让一群厉害的人组成一家厉害的公司？你可能觉得只要人厉害就行，其实不然。2025 年夏天 Meta 面临从 AI 第一集团掉队的局面，扎克伯格导演了一出昂贵的人才版"复仇者联盟"：花 143 亿美元投资 Scale AI、请创始人亚历山大王执掌新成立的超级智能实验室，又从 OpenAI、Google、DeepMind、Anthropic 重金挖了几十个研发主力，有的待遇据称高达四年 3 亿美元——可这个全明星团队成立才两个月就走了八个人，有人甚至不到一个月就掉头回了 OpenAI。**开公司不是自动的化学反应，不是把人、钱、GPU 放在一起就能变出最好的产品。1 加 1 不一定等于 2，它可以大于 2，也很容易小于 2。** 组织资本这个概念由美国经济学家爱德华·普雷斯科特和迈克尔·维舍尔在 1980 年提出：人力资本长在人身上，而组织资本长在人与人之间。

## 解决什么真问题

解释"为什么明星团队不等于明星公司、优秀个人离开原团队往往就不神了"：一家公司只要好好运转，就会自动攒下一笔别处买不来的资产——**关于"谁擅长什么、谁跟谁搭配最顺、什么任务交给谁最靠谱"的信息**。这信息就是公司的组织资本：它不是哪个人带进来的，而是大家在一起干活一年一年长出来的，它只属于公司、不记在任何一个人的名下。加州法律禁止竞业协议，你可以带走理论知识和人脉，但带不走公司的协作惯例、评测体系、失败档案、用户反馈、内部工具，更带不走一群人磨出来的默契。**组织能力不等于个体能力之和，组织资本就是把分散在很多人手里的知识变成共同判断、共同产品和可重复行动的专用能力。**

## 核心论点

- **组织资本的三维框架**（哈皮特和哥沙尔 1998 年论文）：组织资本的好坏关键在知识怎么流动——**认知资本**：分散的知识能不能被共同语言、共同标准和共同问题意识接住、组合起来形成互相理解；**结构资本**：正确的人有没有被正确地连接起来，需要什么知识都找得到人；**关系资本**：人们之间的关系是否足够安全和信任，以至于大家敢说出真实的信息。把公司信息想象成足球，老板就好比球队主教练——经营的不仅是一张首发名单，更是人才与人才之间的配合关系。
- **认知资本的关键是协调多样性**：控制论中有个好调节器定理——系统的好调节器必须是这个系统的一个模型，你想控制什么东西，你得至少像那个东西一样复杂才行（"必要多样性律"：要对付复杂多变的外部世界，你内部就得有足够匹配的多样性）。但多样性不是把一群背景各异的聪明人凑到一起就行，你还得协调：研究员关心模型能力、工程师关心系统、产品经理关心用户体验、销售关心订单、安全团队关心别出新闻——大家各说各话，多样性就成了噪声，组织就成了菜市场。**有效的认知资本并不要求意见一致，但你们用的语言、标准和问题意识必须一致，坐标系必须对齐。** 1999 年 NASA 火星气候探测器任务失败，就是因为洛克希德的团队算推进器点火冲量用的是英制，NASA 这边还以为是公制。
- **老板最重要的权利就是定义成功、设置标准边界和优先级**：你必须要求团队在三个问题上达成共识——①我们究竟在解决什么问题？②什么才算好产品？③当质量、速度、成本和风险冲突时，哪个优先？**这如同驾驭一群 AI 干活一样，你的工作主要是把话说明白。** 把抽象的词语体化：你说"用户第一"，就得在赶工发布里说清楚为了用户到底该延迟上线还是先上线再补救；你说"追求卓越"就得讲明白哪种缺陷绝不容忍、哪种缺陷可以留给下一版。
- **结构资本的关键是"任何人有问题都知道该找谁"**：一个技术服务人员在客户前线发现重大产品问题，能不能直接找到产品负责人？一个工程师察觉训练数据异常，是不是得先写报告报主管、等主管去通知另一个主管？**要想提高生产力，你得让知识能够快速流动。好的组织不可能要求每个人都懂一切，但每个人最好知道"谁知道什么、谁的判断在哪个领域最可信、遇到异常该去找谁"。** 为此需要一套专长地图，学术上叫**交易记忆系统**——存储"知识的地址"，可能存在于飞书、钉钉、知识库和项目文档里，但更多的是存在于人的脑子里、存在于人与人的互动习惯里，这张地图是在配合中长出来的。2005 年一项研究医院关节置换手术团队：把经验拆成三份——主刀医生个人做过多少台、整个医院做过多少台、这一组人凑在一起做过多少台——结果发现哪怕医生本人是老手、医院也是大医院，只要这一组人没在一起配合过，开刀照样磕绊。**一起做过才能长出那张专长地图。**
- **关系资本的关键是团队心理安全**（埃德蒙森）：心理安全是优秀团队排在第一位的共同基因，因为这样的团队让人敢说话。上世纪 90 年代埃德蒙森在哈佛被派去研究医院里护士给错药、发错量这类插错，她原以为管理得当、氛围好、护士长有领导力的小组犯错更少，结果发现恰好相反——好团队插错记录不是更少而是更多。她没停留在表面统计上，专门派人蹲点、一个个访谈才挖出真相：**好团队的护士并不是手更笨、错更多，而是更敢把错误说出来；气氛压抑的小组里出错就要挨训、追责，护士的本能就是赶紧把错误盖住，往往根本不会留下记录。如果你听不到坏消息，那你就该感到危险了——你的团队正在向你隐瞒真相。其实坏消息是系统的日常，一个健康的团队怎么能没有坏消息呢？**

## 关键例证 / 金句

- 2006 年论文研究心脏外科医生：做手术是高度个人化的技能，但那些在自己原本医院做手术非常成功、病人存活率很高的医生，一旦跳槽去另一家医院，手术存活率就会下降——**医生带走的是自己的双手，却带不走手术的配合。**
- 2008 年论文：华尔街明星证券分析师一跳槽业绩往往立刻下滑、好几年缓不过来；但要是带着原班人马一起走、或者跳进组织能力更强的公司，下滑就小得多。**红花还得绿叶配，明星必须有团队。**
- OpenAI 和 Anthropic 一线研发人员私下分享的护城河是"研究氛围"：哪怕是很年轻的新人，只要在研究里发现有意思的点，也可以被吸收到公司的大模型产品之中；而在硅谷大厂（比如 Google）几乎不可能，你得层层上报，很可能根本到不了一线。这两家公司及众多科技公司的日常业务几乎都发生在一个叫 Slack 的办公软件上（大约相当于中国的飞书）——领导发布任务、员工认领任务、交付任务和内部通讯全用它；对比之下在 Google 想给团队以外的工程师安排任务，得跟他和他的直属领导约时间开正式会议、走各种程序，十分麻烦。有个哥们甚至说：比起跟 Google L5 级以下的工程师对接，他宁可直接把任务交给 AI；而在 Anthropic 就没有那种沟通很麻烦的感觉。**这不就是认知资本、结构资本和关系资本吗？**
- 提升组织资本的有效方法不是搞思想教育或团建，而是**搞共同作战，特别是要有复盘**：设计得当的复盘平均能把团队绩效提高约四分之一。但复盘不是领导点评手下，而是大家一起问四个问题——**原本准备发生什么？实际发生了什么？为什么有差异？下一轮改什么？** 复盘不是为失败找替罪羊，而是把一次经历变成整个组织的记忆。
- 组织需要**一个稳定的骨架、一个流动的前沿**：一个稳定、好不容易磨合出协作能力的核心班子不能人员频繁变动；但组织人员也不能一点都不变——一支队伍共事太久，成员就会越来越和外部关键信息隔绝，技术绩效也跟着往下掉。
- **领导力不是亲自去当公司里那个最强大脑，领导力是创造一个场，让许多大脑组合成一个更大的大脑。组织有它自己的智力，一加一大于二是人类文明的基础。**

## 如何应用

1. **对齐坐标系**：作为领导者，先要求团队在三个问题上达成共识（解决什么问题、什么算好产品、冲突时哪个优先），并把抽象词具体化——"用户第一"到底该延迟上线还是先上线再补救，"卓越"哪种缺陷绝不容忍。**这就像驾驭一群 AI：你的工作主要是把话说明白。**
2. **建专长地图**：确保"任何人有问题都知道该找谁"——维护一份交易记忆系统（谁知道什么、谁的判断在哪个领域最可信），并让新人在配合中长出自己的专长地图。警惕 NASA 火星探测器的教训：团队之间单位制都不对齐。
3. **营造心理安全**：如果听不到坏消息，就该感到危险。鼓励团队把错误说出来——好的团队不是不犯错，而是更敢说错；压抑的团队把错误盖住，系统就无法学习。坚持做复盘四问，把一次经历变成整个组织的记忆。

---

## 全文（清洗后的课程转录，重点加粗+底纹）

欢迎来到现代思维工具课，我是万维钢。这一讲咱们说如何让一群厉害的人组成一家厉害的公司——你可能觉得只要人厉害就行，其实不然。咱们先看一个正在上演的故事。**2025 年夏天，随着自家的大模型表现不及预期，Meta 面临从 AI 第一集团掉队的局面，扎克伯格再也坐不住了，直接导演了一出昂贵的人才版"复仇者联盟"：** 他先是花 143 亿美元投资 Scale AI，把它的创始人亚历山大王请来执掌新成立的超级智能实验室；又从 OpenAI、Google、DeepMind、Anthropic 重金挖了几十个研发主力，开出的待遇有的据说是四年 3 亿美元，比 NBA 当红球星都高。那你说了：巨星云集、要钱有钱、要算力有算力、要数据有数据，Meta 就算不立即登顶，是不是也应该重返第一集团呢？并没有——**这个全明星团队成立才两个月就走了八个人，有人甚至不到一个月就掉头回了 OpenAI。** 现在过去了一年才好不容易发布一个模型，却仍然排不进与 GPT 和 Claude 同一档的第一梯队。这不是个例：就在我写这一讲的时刻（2026 年 6 月），Google 的模型也比 OpenAI 和 Anthropic 落后半个到一个顺位了；硅谷的其他大厂像苹果、亚马逊包括微软，都早已掉出第一集团。

**开公司不是自动的化学反应，不是说你把人和钱和 GPU 放在一起就能变出最好的产品。1 加 1 不一定等于 2——它可以大于 2，也很容易小于 2。** 这一讲的思维工具是**组织资本**：人力资本长在人身上，而组织资本长在人与人之间。组织资本这个概念是美国经济学家爱德华·普雷斯科特和迈克尔·维舍尔在 1980 年提出来的。他们的洞见是：**一家公司只要能好好运转，就会自动攒下一笔别处买不来的资产，那就是关于"谁擅长什么、谁跟谁搭配最顺、什么任务交给谁最靠谱"的信息。** 这信息就是公司的组织资本——它不是哪个人带进来的，而是大家在一起干活一年一年长出来的；它只属于公司，而不记在任何一个人的名下。

团队竞争力的秘密就在这里。加州法律禁止竞业协议，你就算是技术骨干也可以随便跳槽去竞争对手那里——你可以带走理论知识、研究品位、声望甚至人脉，**但是你带不走公司的协作惯例、评测体系、失败档案、用户反馈、内部工具，更带不走一群人磨出来的默契。** 正因为组织资本的存在，优秀个人一旦离开原团队，往往就变得不是那么神了。比如一篇 2006 年发表的论文专门研究了心脏外科医生：按理说做手术是一种高度个人化的技能，可是这个研究发现，那些在自己原本所在的医院做手术非常成功、病人存活率很高的医生，一旦跳槽去了另一家医院，他们的手术存活率就会下降——**我们只能说医生带走的是自己的双手，却带不走手术的配合。** 还有一篇 2008 年的论文发现：华尔街的明星证券分析师一旦跳槽，业绩往往立刻下滑，而且能连着好几年缓不过来；但要是他带着原班人马一起走、或者跳进一家组织能力更强的公司，下滑就小得多。**红花还得绿叶配，明星必须有团队。组织能力不等于个体能力之和。组织资本就是一家公司通过长期协作攒下来的、把分散在很多人手里的知识变成共同判断、共同产品和可重复行动的专用能力。**

那这个能力从何而来呢？是老板的高明指挥吗？是明星的榜样作用吗？是写在手册里的流程吗？1998 年英国管理学者珍妮娜·哈皮特和印度裔管理学者苏曼特拉·哥沙尔的一篇论文提出：**组织资本的好坏，关键在于你这家公司是怎么让知识流动的。** 他们把组织的知识流动拆解成了认知、结构和关系三个维度：**认知资本**是说一个个头脑中分散的知识能不能被共同语言、共同标准和共同问题意识接住，组合起来形成互相理解；**结构资本**是说正确的人有没有被正确地连接起来，以至于需要什么知识都找得到人；**关系资本**是说人们之间的关系是否足够安全和信任，以至于大家敢说出真实的信息。**我们把公司信息想象成足球，那么老板就好像球队的主教练一样——你经营的不仅是一张首发名单，更是人才与人才之间的配合关系。**

认知资本的关键是**协调多样性**。我们前面讲过，控制论中有个好调节器定理：系统的调节器必须是这个系统的一个模型——说白了就是你想控制什么东西，你得至少像那个东西一样复杂才行。好调节器定理的提出者之一罗斯·阿斯比还有一个类似的理论叫**必要多样性律**：要对付一个复杂多变的外部世界，你内部就得有足够匹配的多样性——你这家公司得什么人都有，最好出自不同的领域、能提供不同的视角、每个人有独立的看法，才能及时纠偏、发挥群体智慧。你不能说市场上有 100 种情况，你的管理团队却只知道"家人和加班"这两招。但多样性可不是把一群背景各异的聪明人凑到一起就行，你还得协调：**研究员关心模型能力，工程师关心系统，产品经理关心用户体验，销售关心实际订单，安全团队关心别出事上新闻——大家都是对的，可是如果彼此听不懂对方在说什么，多样性就成了噪声，组织就成了菜市场。** 没管过大项目的人很难理解协调问题有多严重：比如你手下有两个部门，你说"我们要重视产品质量"，大家都说好，结果一个部门理解的"质量"是可靠性、另一个部门还以为你的意思是用户体验；你说"尽快上线"，一个理解成这周就发、一个理解成熟了就发。**这其实就是为什么 1999 年 NASA 的火星气候探测器任务失败了：洛克希德的团队算推进器点火的冲量用的是英制，NASA 这边还以为是公制，结果是探测器在火星大气层中解体焚毁。有效的认知资本并不要求意见一致，但你们用的语言、标准和问题意识必须一致，你们的坐标系必须对齐。**

**老板最重要的权利就是定义成功、设置标准边界和优先级。** 你必须要求团队在以下三个问题上达成共识：第一，我们究竟在解决什么问题？第二，什么才算好产品？第三，当质量、速度、成本和风险冲突时，哪个优先？**这就如同驾驭一群 AI 干活一样，你的工作主要是把话说明白。** 经营认知资本的有效方法是把抽象的词具体化：你说"用户第一"，那就得在一次赶工发布里说清楚，为了用户到底该延迟上线还是先上线再补救；你说"追求卓越"，就得讲明白哪种缺陷绝不容忍、哪种缺陷可以留给下一版。具体怎么干，各位高手可以各有各的看法，咱们慢慢讨论；但是**干什么、干到什么程度、为了干这件事我们宁可牺牲什么——则是必须达成一致的。**

结构资本的关键是**"任何人有问题都知道该找谁"**。一个技术服务人员在客户前线发现了产品的重大问题，他能不能直接找到产品负责人？一个工程师察觉训练数据异常，是不是得先写报告报主管，等主管再去通知另一个主管？**要想提高生产力，你得让知识能够快速流动。好的组织不可能要求每个人都懂一切，但是每个人最好知道谁知道什么、谁的判断在哪个领域最可信、遇到异常该去找谁。** 为此你需要有一套**专长地图**，学术上叫**交易记忆系统**——用来存储"知识的地址"。它可能存在于飞书、钉钉、知识库和项目文档里，但更多的是存在于人的脑子里、存在于人与人的互动习惯里。这张地图是在配合中长出来的：2005 年的一篇论文专门研究了医院里的关节置换手术团队，研究者把经验拆成三份分开来算——主刀医生个人做过多少台手术、整个医院做过多少台、还有这一组人凑在一起做过多少台——结果发现：**哪怕医生本人是老手、医院也是大医院，只要这一组人没在一起配合过，开刀照样磕绊。一起做过才能长出来那张专长地图。** 一开始大家都在摸索谁擅长什么、谁的判断在哪一步最靠得住、一出差错第一时间该看谁，长到最后就成了一种不用开口的默契：我知道你擅长开路却容易忽略收尾，收尾我替盯着；你知道我嘴上说问题不大其实心里在掂量风险有多大；我手还没伸出去，你已把下一件递到了我掌心。

关系资本的关键则是**团队心理安全**。我们前面讲安全感的时候专门说过这个话题：**心理安全是优秀团队排在第一位的共同基因，因为这样的团队让人敢说话。** 一个工程师发现项目有重大缺陷，可说出来就要得罪负责人；一个年轻研究员冒出个奇怪的猜想，又怕被当成无知；一个中层判断战略方向不对，但公开反对老板就意味着他不够坚定——这就是缺乏心理安全的表现。团队心理安全这个概念的提出者是我们前面提到过的**埃米·埃德蒙森**。上世纪 90 年代，埃德蒙森在哈佛被派去研究医院里护士给错药或者发错量这类插错。她原本设想：一个管理得当、氛围好、护士长有领导力的小组，犯的错应该更少——结果发现不是。她对两套互相独立的数据做了对比：一套是各护理小组的插错记录，另一套是请人给这些小组的团队质量和领导力打分，得到一个反直觉的发现：**关系越好、领导越强的小组，插错记录不是更少，而是更多。** 难道是那些团队管得太松懈、大家都懈怠了吗？不是。埃德蒙森没有停留在表面的统计上，她专门派了一个人下到病房里蹲点、又一个一个访谈，才把真相挖出来：**好团队的护士并不是手更笨、错更多，而是更敢把错误说出来，所以她们的插错记录才更多；那些气氛压抑的小组里出错就要挨训、要追责，护士的本能就是赶紧把错误盖住，往往根本不会留下记录。** 所以：**如果你听不到坏消息，那你就应该感到危险了——你的团队正在向你隐瞒真相。其实坏消息是系统的日常，一个健康的团队怎么能没有坏消息呢？**

过去这一两年间，我跟 OpenAI 和 Anthropic 的几个一线研发人员有些私下交流，他们分享的一些动静正好印证了这一讲的理论。我好几次问他们："你们公司的护城河是什么？"他们不约而同地说是**研究氛围**。最能说明问题的一点是：哪怕你是一个很年轻的新人，只要你在研究中发现一个有意思的点，也可以被吸收到公司的大模型产品之中；而在硅谷大厂比如 Google，这几乎是不可能的——你得层层上报，很可能根本到不了一线。这两家公司以及硅谷众多的科技公司的日常业务几乎都发生在一个叫 Slack 的办公软件之上（大约相当于中国的飞书）：领导发布任务、员工认领任务、交付任务和各种内部通讯全都用 Slack——你可以让你的 AI 替你读 Slack、替你发 Slack、替你给 Slack 写工作报告。从 Slack 上每个人都可以知道其他人在做什么，也都知道有问题该找谁。对比之下，在 Google 你想给你们团队以外的一个工程师安排一个什么任务，就得跟他和他的直属领导约个时间坐下来、开个正式会议、要走各种程序，可以说十分麻烦。有个哥们甚至跟我说：比起跟 Google L5 级以下的工程师对接，他宁可直接把任务交给 AI；而在 Anthropic 他就没有那种沟通很麻烦的感觉。**这不就是认知资本、结构资本和关系资本吗？也许大厂就是不适合搞密集研发。像大模型这种需要频繁更新的项目，你最好有一个小而精的团队。**

提升组织资本的有效方法不是搞什么思想教育或者团建，而是像我们前面说过的那样**搞共同作战，特别是要有复盘**。有研究发现，设计得当的复盘平均能把团队绩效提高约四分之一。但复盘不是领导点评手下，而是大家一起问四个问题：**原本准备发生什么？实际发生了什么？为什么有差异？下一轮改什么？** 复盘不是为失败找替罪羊，而是把一次经历变成整个组织的记忆。那么你可以想见：一个好的组织需要一个稳定的、好不容易磨合出协作能力的核心班子，不能人员频繁变来变去；可是组织人员也不能一点都不变，特别是对于研发团队——有研究发现一支队伍共事太久，成员就会越来越和外部关键信息隔绝，技术绩效也就跟着往下掉。**所以你需要一个稳定的骨架，还需要一个流动的前沿。**

总而言之：**领导力不是亲自去当公司里那个最强大脑，领导力是创造一个场，让许多大脑组合成一个更大的大脑。组织有它自己的智力，一加一大于二是人类文明的基础。** 好，以上就是今天的全部内容，现代思维工具课，祝您每天都有收获。
`,q1=`# 088丨叙事权：怎样对众人施法

## 讲什么

**叙事权 / 施法者**——OpenAI 的山姆·奥特曼私下的名声并不怎么样，流传着很多关于他爱说谎、出尔反尔的故事，他一度被董事会以"沟通不够坦诚"为由罢免。但你不得不服的是：奥特曼的公共形象十分迷人——访谈既灵动又坦诚，仿佛他就是 AI 的代言人；在 X 上随口几句话，不用任何大词、没有复杂的逻辑，就能让人琢磨很久、感觉充满深意。他让人自动相信他的事业，并且为了这份相信而原谅他所有的缺点。**奥特曼是一个施法者。今天每一家科技巨头要想在前沿长期立足、要想被众人持续关注，都需要这么一个人。这可不是传统意义上的形象代言人，也不只是老板——这些人的魔法是乔布斯那种现实扭曲立场，更准确地说，是叙事权。** 我们课程开篇就讲了：叙事是宇宙的第一性原理。这一讲说说叙事到底该怎么用——对领导者来说，就是怎么把你的判断变成一个组织的集体行动。

## 解决什么真问题

解释"为什么讲故事画大饼不是软技能，而是领导者的核心武器"：公司成立一没有成型的产品、二没有确定的市场，你能说服人投资、说服优秀人才跟你走吗？你想象了一个伟大的产品，既有美感又用户友好而且价格合理，你认为一定能改变世界——可工程师告诉你这根本不可能做出来，不但有无数技术障碍，而且很多零部件现在都不存在。你能让团队相信他们一定能做出来、而且是短时间内做出来吗？乔布斯就能。**命令只能让一个人做一件事，叙事却能让 1000 个人自己补完那 1000 条没下达的命令。** 叙事能把你的愿景变成组织的共同知识，以至于不但每个人都相信你，而且每个人都知道别人也将依据同一个未来行动。

## 核心论点

- **三个叙事心法：定题、定义、定我**——你要行使对这三件事的叙事权：哪个问题最重要（定题）、这件事是什么意思（定义）、我们是谁（定我）。
- **定题 = 议程设置**：定题不是给答案，你完全可以发扬民主让大家讨论出答案来，但只要议程是你设置的，你就抢到了答案的上游——是你决定哪个问题值得全公司投入注意力。传播学者麦库姆斯和肖的经典发现（议程设置理论）：**媒体左右不了你怎么想，却能有力地左右你想什么。** 人的判断不是从所有事实里平均抽样，而是先被一个问题召唤出来——你问"谁该负责"，大家就去找责任人；你问"用户为什么离开"，大家就分析体验和价格；你问"我们如何在三年后还活着"，大家才会谈战略。**议题不是中性的，议程设置就是要掉一批事实、凸显一批事实，并且决定什么样的答案算靠谱。一旦大家接受了你的问题，哪怕他们不同意你的答案，也已经进入了你设定的场域。** 通用句式：**"过去我们一直在争论 A，可世界已经变成了 B，所以真正的问题不再是 A，而是 C——从今往后每一个方案都得先回答 C。"**
- **定义 = 框架塑造**：事实还是这些事实，只要换一个框架，人们的感受和判断就完全不同。同样是失败，可以框成"我不行"也可以框成"我还没成功"；同样是客户流失，可以框成"客户嫌贵"也可以框成"客户没有看见节省"。前一种框架导致防御、抱怨、降价和追责，后一种框架调动实验、改进、换指标和重新分工。**定题决定大家看哪，定义决定大家看见什么和怎么看。框架不是换个说法，而是换一套因果模型。** 恩特曼说框架会推动一套特定的问题定义、因果解释、道德评价和处理建议——同样是销售额下滑，你可以框成经济周期、团队不努力、产品已经过时，也可以框成"我们正在经历主动转型的阵痛"，每一种框架通向完全不同的行动。例：一屋子 GPU 出来的 AI 算力，叫"数据中心"在 CFO 眼里就是成本——采购贵、折旧快、电费高，应该能省则省；可黄仁勋把它重新命名为"AI 工厂"，整张损益表就翻过来了——GPU 成了生产设备、数据是原料、模型是生产线、token 是产品。**重购不是偷换，而是设定一个事实的行动含义。** 句式：**"这不是 X，而是 Y——所以衡量它不该看 A 而该看 B，因此我们要做的第一件事不是 C 而是 D。"**
- **定我 = 身份认同**：定题改的是你往哪看，定义改的是你怎么理解，而定我改的是你的目标函数——你在选择里默认要最大化的东西（奖金、职位、安全感、面子，还是"我们不能这么干"的底线），往往由身份认同决定。**大多数人不会事事计算奖惩利弊，都是直接从身份认同出发努力扮演好自己的社会角色：一个人一旦接受"我是医生""我是工程师""我是这家公司的人"，他就不再只按外部奖惩算账，而会把一些行为视为"配得上我"、把另一些视为"不像我们这种人"。只要你能设定别人的身份，你就可以绕过命令直接给人装上一套自动生成行为的程序。** 案例：NASA 的"阿耳忒弥斯计划"——阿耳忒弥斯是阿波罗的孪生姐妹，一听就知道这是接力叙事；NASA 造了一个身份叫"阿耳忒弥斯一代"——阿波罗是上一代人的故事，阿耳忒弥斯是这一代人的故事，宇航员、工程师、承包商、国际伙伴、学生和公众就被放进了同一个时代共同体。**高水平的身份叙事不是站上台喊"我宣布你们是英雄，所以你们给我冲"，而是"你们本来就是这种人，我只不过替你们把他说出来了"。** 句式：**"我们不是 X，我们是 Y；别人遇到这事会选择 A，但像我们这样的人会选择 B；我们这么做不是因为谁的要求，而是因为我们要共同成为 C，是这个身份要求我们愿意付出 D。"**
- **叙事权的最高境界是超信念（superbelief）**：英国哲学家尼克·兰德最早提出，字面意思是"超级迷信"，但兰德的定义是"虚构经由文化反馈回路使自身现实化"——一种能让自己成真的有效文化元素。超信念不是从过去解释现在，而是让一个未来的幽灵闯进现在：让众人形成公共预期从而改变今天的行动，行动累积出结果就强化那个原本虚构的未来，未来预期再强化今天的行动——正反馈循环之下，未来就真的实现了，**就如同是未来从一开始就在召唤他自己。** 乔布斯说 Macintosh 的启动时间还可以再减 10 秒、说苹果要重新发明手机，马斯克说要让人类成为多行星物种、说可重复使用火箭是必经之路——这些在当时现场都是不合理的，本来不应该有人相信，然而他们就能让足够多人先按那个未来行动，把信念变成了自我实现的预言。

## 关键例证 / 金句

- **命令只能让一个人做一件事，叙事却能让 1000 个人自己补完那 1000 条没下达的命令。**
- 议程设置实验：研究者给受试者看经过编辑的电视新闻——有人反复看到国防新闻、有人反复看到通胀新闻、有人反复看到污染新闻——看完以后，人们判断"国家最重要的问题"时，就更容易把自己刚刚反复看到的那个议题排到前面。**媒体不需要直接告诉你支持谁，只要告诉你这次选举该围绕什么问题判断选人，就足以影响选举结果。**
- 企业软件公司的定价争论：销售说竞品在降价不跟就丢单，产品说不能降、降了就没资源迭代，售后说很多客户不是单纯贵而是买了没用起来——终于老板说："我们争错了！客户真正买的不是一个 SaaS 账号，而是少雇两个人、少出一次错、少等三天审批。真正的问题不是价格能不能降，而是我们能不能把产品做成客户看得见、算得清的节省。"**题目这么一换，销售就不再只问最低能打几折，而要拿回客户的流程数据；产品不再只排功能，而要排能减少真实工时的环节；客服也不再只盯续约和投诉，而要追踪客户到底在哪些地方省时间。**
- **价值多元……（此处衔接叙事魔力）**：赫拉利不是说吗？智人之所以爬到食物链顶端，靠的不是力气也不是个体智商，而是我们能边编边信一个共同的虚构故事。黑猩猩的熟人最多有 50 来个，人的熟人最多大约 150 个（邓巴数），而人却能突破熟人的限制跟大规模陌生人合作——我们靠的就是叙事这个魔法。**所以能听懂叙事是超能力；而当一群人把叙事的权力交给你的那一刻，你想想这是多么大的特权——他们等于允许你对他们施法。**
- **黑暗面**：超强的叙事可能让人狂热相信某一项事业、撞上南墙也不回头、只许唱赞歌听不进坏消息甚至故意欺瞒；有的人的确会用叙事给人画大饼、让人只讲奉献不计回报。**人必须用现实平衡叙事——你必须既能入戏又能出戏。但我要说的是：入戏比出戏高级，叙事比现实高明。所有动物都活在现实之中，只有人能玩虚拟的游戏。**

## 如何应用

1. **定题**：把握议程设置权——开会时第一个提出"真正的问题是什么"；每季度检查一次：公司价值观说重视创新，可每周开会老板只问销售额和成本，那老板真正想要的根本不是创新而是短期业绩。
2. **定义**：遇到同一组事实，主动选择能调动行动的框架——把"客户嫌贵"重框为"客户没看见节省"，把"员工不行"重框为"目标互相冲突"；练习用句式："这不是 X，而是 Y……因此我们该看的不是 A 而是 B。"
3. **定我**：用身份而非命令驱动团队——"别人遇到这事会选择 A，但像我们这样的人会选择 B"；让团队把行为视为"配得上我们身份"的事而不是被要求的任务。同时警惕叙事权的滥用：既能入戏又能出戏，用现实（反馈、数据、坏消息）平衡叙事。

---

## 全文（清洗后的课程转录，重点加粗+底纹）

欢迎来到现代思维工具课，我是万维钢。**OpenAI 的山姆·奥特曼私下的名声并不怎么样**：AI 圈流传着很多关于他爱说谎、出尔反尔的故事，有的工程师之所以加入 Anthropic 就是因为不喜欢奥特曼，他一度被董事会以"沟通不够坦诚"为由罢免。但你不得不服的是：**奥特曼的公共形象十分迷人**——他的访谈既灵动又坦诚，仿佛他就是 AI 的代言人，又仿佛在传达神谕一般；他在 X 上随口几句话，不用任何大词、没有复杂的逻辑，就能让人琢磨很久，感觉充满了深意。他让人自动相信他的事业，并且为了这份相信而原谅他所有的缺点。**奥特曼是一个施法者。今天每一家科技巨头要想在前沿长期立足、要想被众人持续关注，都需要这么一个施法者。** 这可不是传统意义上的形象代言人，也不只是老板——这些人的魔法是乔布斯那种现实扭曲立场，更准确地说，是**叙事权**。我们这个课程一开篇就讲了：叙事是这个宇宙的第一性原理。这一讲咱们说说叙事到底该怎么用——对领导者来说，就是怎么把你的判断变成一个组织的集体行动。

可能很多人以为叙事就是讲故事、画大饼、做思想工作，是一种软技能，那可就看小了。**公司成立一没有成型的产品、二没有确定的市场，你能说服人投资、说服优秀人才跟你走吗？** 你想象了一个伟大的产品，既有美感、又用户友好、而且价格合理，你认为他一定能改变世界。可是工程师告诉你：这样的产品根本就不可能做出来——不但有无数技术障碍，而且很多零部件现在都不存在。你能让团队相信他们一定能把这个产品做出来、而且是在短时间内做出来吗？乔布斯就能。乔布斯施法的效果如此之好，以至于人们不但听他讲的那一刻相信他，而且持续相信他——人们会主动想各种办法实现他的愿景：把不可能拆成一个可以攻克的问题，把缺失的条件一点点补出来。那绝不是靠合同和奖金能达到的效果。**命令只能让一个人做一件事，叙事却能让 1000 个人自己补完那 1000 条没下达的命令。** 叙事能把你的愿景变成组织的共同知识，以至于不但每个人都相信你，而且每个人都知道别人也将依据同一个未来行动。

我们说三个叙事心法：**定题、定义、定我**。简单说就是你要行使对这三件事的叙事权——这三件事就是：哪个问题最重要，这件事是什么意思，以及我们是谁。

第一个心法**定题，就是议程设置**。设置会议议程可以说是领导者最重要的权利。定题不是给答案——你完全可以发扬民主让大家讨论出一个答案来，但只要议程是你设置的，你就抢到了答案的上游——**是你决定哪个问题值得全公司投入注意力。** 传播学者麦库姆斯和肖有个经典发现：**媒体左右不了你怎么想，却能强有力地左右你想什么。** 他们研究 1968 年美国大选，在北卡罗来纳教堂山访谈了一批尚未决定投给谁的选民，同时分析这些人接触的报纸、电视和杂志，结果很清楚：媒体反复摆在台前的竞选议题，也正是这些选民认为这次选举最重要的议题。后来有人用一组电视新闻实验做了更干净的验证：研究者给受试者看经过编辑的电视新闻——有些人反复看到国防新闻，有些人反复看到通胀新闻，有些人反复看到污染新闻——看完以后，人们判断"国家最重要的问题"的时候，就更容易把自己刚刚反复看到的那个议题排到前面。**媒体不需要直接告诉你支持谁，他们只要告诉你这次选举该围绕什么问题判断选人，就足以影响选举结果。要知道人的判断不是从所有事实里平均抽样，而是先被一个问题召唤出来：你问"谁该负责"，大家就去找责任人；你问"用户为什么离开"，大家就去分析体验和价格；你问"我们如何在三年后还活着"，大家才会谈战略。议题不是中性的，议程设置就是要掉一批事实、凸显一批事实，并且决定什么样的答案算靠谱。一旦大家接受了你的问题，哪怕他们不同意你的答案，也已经进入了你设定的场域。**

如果公司的价值观说我们要重视创新，可每周开会老板只问销售额和成本，那你就知道他真正想要的根本不是创新，而是短期业绩。再比如一家做企业软件的公司，管理层一直在争论到底要不要降价：销售说竞品在降价不跟就丢单，产品说不能降、降了就没有资源继续迭代，售后服务团队则说很多客户不是单纯贵、而是买了以后没用起来。终于有一天老板说："我们争错了！**客户真正买的不是一个 SaaS 账号，而是少雇两个人、少出一次错、少等三天审批。所以真正的问题不是价格能不能降，而是我们能不能把产品做成客户看得见、算得清的节省。**"题目这么一换：销售就不再只问最低能打几折，而要拿回客户的流程数据；产品不再只排功能，而要排能减少真实工时的环节；客服也不再只盯续约和投诉，而要追踪客户到底在哪些地方省时间。**定题就有这么大的作用。** 你要是不知道怎么用，可以借鉴下面这个通用句式：**"过去我们一直在争论 A，可世界已经变成了 B，所以真正的问题不再是 A，而是 C。从今往后每一个方案都得先回答 C。"**

第二个心法**定义，就是框架塑造**。我们精英日课专栏曾经讲过斯科特·亚当斯的《重构你的大脑》那本书：**事实还是这些事实，你只要给他们换一个框架，人们的感觉和判断就完全不同。** 同样是一次失败，你可以把它框成"我不行"，也可以框成"我还没成功"；同样是客户流失，你可以把它框成"客户嫌贵"，也可以框成"客户没有看见节省"。前一种框架导致防御、抱怨、降价和追责；后一种框架调动实验、改进、换指标和重新分工。**定题决定大家看哪，定义决定大家看见什么和怎么看。框架不是换个说法，而是换一套因果模型。重购不需要先改变事实本身，却能改变事实在你脑中允许你做什么。** 用美国政治传播学者罗伯特·M·恩特曼的话说：框架会推动一套特定的问题定义、因果解释、道德评价和处理建议。同样是销售额下滑，你可以把它框成经济周期、框成团队不努力、框成产品已经过时，也可以框成"我们正在经历主动转型的阵痛"——**每一种框通向完全不同的行动，框架一遍，会议、预算、指标和责任人都跟着变。**

叙事大师们随口就能找到最好的框架。比如说一屋子 GPU 出来的 AI 算力：你要是把这叫"数据中心"，在 CFO 眼里这就是成本——采购贵、折旧快、电费高，应该能省则省；可英伟达 CEO 黄仁勋把它重新命名为"AI 工厂"，整张损益表就翻过来了——GPU 成了生产设备，数据是原料，模型是生产线，算出来的 token 是产品。**这是生产资料好吗？这是赚钱的机器，这哪能省呢？重购不是偷换，而是设定一个事实的行动含义。** 这个心法也有个句式：**"这不是 X，而是 Y——所以衡量它不该看 A，而该看 B；因此我们要做的第一件事就不是 C，而是 D。"**

第三个心法**定我，就是告诉大家我们是谁，也就是我们前面讲过的身份认同**。定题改的是你往哪看，定义改的是你怎么理解，而定我改的是你的目标函数——你在选择里默认要最大化的东西：奖金、职位、安全感、面子，还是某种"我们可不能这么干"的底线？这些往往是由身份认同决定的。**大多数成年人不会事事计算奖惩利弊，都是直接从身份认同出发、努力扮演好自己的社会角色。一个人一旦接受"我是医生""我是工程师""我是这家公司的人"，他就不再只按外部奖惩算账，而会把一些行为视为"配得上我"，把另一些行为视为"不像我们这种人"。只要你能设定别人的身份，你就可以绕过一条命令，直接给人装上一套自动生成行为的程序。**

讲一个案例：阿波罗计划之后，人类已经很多年没有真正重返月球，现在 NASA 搞了个重返月球项目，命名为"阿耳忒弥斯计划"。在希腊神话中，阿耳忒弥斯是阿波罗的孪生姐妹——你一听就知道这是接力叙事：阿耳忒弥斯不是再发射一次登月飞船，而是一整套重返月球、长期驻留、再以月球为跳板走向火星的任务体系。这么大的工程需要火箭、飞船、宇航服、着陆器、国际合作和无数工程师的具体工作，怎么让这个叙事更宏大呢？于是 NASA 造了一个身份叫做"阿耳忒弥斯一代"——阿波罗是上一代人的故事，阿耳忒弥斯是这一代人的故事。这么一说，宇航员、工程师、承包商、国际伙伴、学生和普通公众就被放进了同一个时代共同体。**高水平的身份叙事不是站上台喊"我宣布你们是英雄，所以你们给我冲"，而是"你们本来就是这种人，我只不过替你们把他说出来了"。** 定我的通用句式是这样的：**"我们不是 X，我们是 Y。别人遇到这事会选择 A，但像我们这样的人会选择 B。我们这么做不是因为谁的要求，而是因为我们要共同成为 C——是这个身份要求我们愿意付出 D。"**

通过议程设置、框架塑造和身份认同，只要你的叙事深入人心、以至于形成组织的共同知识，它就会把私人信念变成协调信号——**每个人不只是自己相信这个方向，而且知道别人也会按同一个未来配置时间、预算和风险，于是观望的人敢下场，分散的动作开始同步。** 叙事权的最高境界是让组织形成一个**超信念**。这个词是英国哲学家尼克·兰德最早提出来的，字面意思是"超级迷信"，但兰德的定义是"虚构经由文化反馈回路使自身现实化"——一种能让自己成真的有效文化元素，其虚构性像一台时间旅行装置一样运作。**简单说，超信念不是从过去解释现在，而是让一个未来的幽灵闯进现在：让众人形成公共预期，从而改变今天的行动；等这些行动累积出结果，就会强化那个原本虚构的未来；然后未来预期再强化今天的行动——在这个正反馈循环之下，未来就真的实现了，就如同是未来从一开始就在召唤他自己。** 乔布斯说 Macintosh 的启动时间还可以再减少 10 秒、说苹果要重新发明手机；马斯克说要让人类成为多行星物种、说可重复使用火箭是通往这个未来的必经之路——这些就如同"纸上谈兵、画饼充饥"，放在当时现场都是不合理的，本来不应该有人相信，然而他们就能让足够多人先按那个未来行动，把信念变成了自我实现的预言。**超信念是人对天命的改写。**

叙事是一种魔法，魔法都有黑暗的一面：**超强的叙事可能会让人狂热地相信某一项事业，以至于不够现实、撞上南墙也不回头、只许唱赞歌、听不进坏消息甚至故意欺瞒；还有的人的确会用叙事给人画大饼，让人只讲奉献不计回报。** 没错，人必须用现实平衡叙事——你必须既能入戏又能出戏。但我要说的是：**入戏比出戏高级，叙事比现实高明。所有动物都活在现实之中，只有人能玩虚拟的游戏。** 赫拉利不是说吗？智人之所以爬到食物链顶端，靠的不是力气、也不是个体的智商，而是我们能边编边信一个共同的虚构故事。其他灵长类动物只能跟自己熟悉的、而且数目很有限的个体有效合作——黑猩猩的熟人最多有 50 来个，人的熟人最多大约 150 个，也就是所谓的邓巴数——**而人却能突破熟人的限制、跟大规模陌生人合作，我们靠的就是叙事这个魔法。所以能听懂叙事是超能力。而当一群人把叙事的权力交给你的时候，你想想这是一个多么大的特权——他们等于允许你对他们施法。** 好，以上就是今天的全部内容，现代思维工具课，祝您每天都有收获。
`,J1=`# 090丨人身依附和角色责任：从前现代到现代管理

## 讲什么

**人身依附 vs 角色责任**——设想你是个收入不高但精通某项技术的年轻人，一位不太熟的大哥给你介绍了一个活，你把活干得漂亮，对方公司给了 20 万。这 20 万你跟大哥怎么分？直觉是活是你干的你该拿大头，分大哥一笔介绍费就好；但往上混的答案是把 20 万全拿上当面交给大哥、看他怎么分——哪怕他留下 18 万只给你 2 万，你也乐呵呵认下来。**这才叫懂事，只有这样你才能拿到下一次机会。** 那不只是一次表态、一份投名状：我承认你是上游，我不会绕过你，我不会自作主张，我是你的人。**如果权责力归属于一个具体的个人，这个人就会要求忠诚和可控。** 前现代管理的灵魂是人身依附，而现代管理讲求的是角色责任。

## 解决什么真问题

解释"为什么家族企业里管财务的往往是能力平平的亲戚、郭德纲还能跟徒弟搞逐出师门的一套、前现代管理为什么做不大"：前现代管理只靠恩威亲表（用个人恩惠制造依附、用恐惧压出服从、重用亲信、表演中心），能解决小规模、低复杂度、短周期的问题；一旦组织要跨地区、跨专业、跨层级运行，一旦需要陌生人之间稳定协作、坏消息及时上行、权责能够交接，前现代管理马上就会触及天花板。**现代管理需要让一群彼此不熟、也不必互相喜欢的人能够协作，所以它必须把组织从一串私人关系改造成一组可替换的角色接口：用职位规定权限、用流程传递信息、用指标反馈结果、用审计追溯责任——人可以流动，角色还在；感情会变，接口还在。前现代管理是人对人负责，现代管理是人对角色负责。**

## 核心论点

- **恩威亲表，前现代管理的四字诀**：恩——用个人恩惠制造依附（"老板说我对你不薄吧"意思就是你欠我的）；威——用恐惧压出服从（马基雅维利：被惧怕比被爱戴更安全）；亲——重用亲信（一朝天子一朝臣，不任人唯亲难道任人唯疏吗？皇帝有官僚集团却常爱依靠内侍甚至宦官）；表——表中心（要求你直接表演忠诚：列队鼓掌、喊口号、写心得、层层传达、统一思想，中心不但要体现在行动上还要体现在语言和表情上）。**在恩威亲表的管理方式之下，组织得到的必定是：忠诚压倒能力，恐惧压倒真话，亲信压倒专业，表态压倒结果。**
- **前现代管理不是中国特产**：古罗马推荐信传统——西塞罗书信集里大量推荐信："我把他当做自己家里人最亲近的人推荐给你，你要这么照顾他，让他明白我这封推荐信对他真管用。"罗马是最讲法律的古代文明，但底层逻辑也是恩主与门客。今天的美国一样讲人情：推荐信、熟人内推、校友圈。**个人关系是最基础的社会信任，而且人格化的信任比制度化的信任便宜得多——如果你只是领几十个工人在本乡做土方生意，你要的不是合同会计审计，只是服从和可靠。**
- **前现代管理有及时的控制感快感**：你一句话全场照办、群里齐刷刷收到、会场一致鼓掌——这是现代制度给不了的快感。有的人不得不搞现代管理，有的人享受前现代管理，也有的人需要前现代管理。**现代管理会让权力变透明，权力一旦写清楚，很多原来靠模糊授权、口头传话、揣摩上意形成的非正式权力就会被制度折价——混乱并不总是管理失败，它有时候是一种利益结构，越说不清某些人越有空间。**
- **前现代管理的上线是邓巴数**：进化心理学家邓巴发现人脑能稳定维持的熟人关系最多 150 人，你能照住、震住、还能赏能罚的私人关系只会更少。**你的关系半径只有这么大，那你的组织又能办多复杂的事呢？** 如果公司某个部门都是领导的亲戚（像曾国藩的湘军一样"，冰围酱油冰水降转"，你们倒是互相信任了，公司其他人怎么想？如果一条业务线只跟着一个领导走，团队只认他一个人而不认公司，公司还敢把重要业务交给他吗？这叫不可规模化。
- **前现代管理做大就陷入悖论：拼命寻找忠诚，最后奖励的却是最会表演忠诚的人**。中层是信息的关口：上面不知道下面的真实情况、下面摸不透上面的真实想法，中层就有了生存空间——对上报喜不报忧、对下制造领导的神秘感、对平级封锁资源、对异见者扣帽子、对失败找替罪羊。你问责？可你连自己是不是被蒙蔽都不知道——你的严苛只会造成恐惧。**一个被吓住的组织会非常安静，可安静不等于秩序，很多时候安静只是失明。与其说老板是被自己蠢死的，不如说是被中层惯坏的——你以为自己掌控了组织，殊不知掌控的只是组织的表情。**
- **现代管理的本质是一项规模技术**：要想突破邓巴数，必须从"个人相信个人"变成"大家相信一个共同的叙事、看向同一个第三物"——对组织来说，这个叙事和第三物就是**制度**。诺斯（1993 年诺奖）在演讲中说：复杂分工要扩展，社会就必须从人格化交换走向匿名的非人格化交换。**前现代的信任绑在具体人身上，现代制度的厉害之处就是让信任离开具体的人、进入角色：合同、审计、司法、岗位责任和可执行流程——那正是从人身依附到角色责任的一跳。其实权责清晰不是束缚，而是解放：你只有有限的权利，所以也只需承担有限的责任；你清楚自己能决定什么、对什么负责，才敢放开手脚去干。**

## 关键例证 / 金句

- 2018 年论文研究 1284 家中国私营家族企业：57.09% 的企业中层里至少坐着一个自家人，自己人扎堆于财务或采购这类管钱的岗位、在研发上特别少。效果如何？**中层越家族化，企业的人均产出越低**——家族成员在中层的参与度每上升一个标准差，企业一年的人均产出大约就少掉 10200 元；如果最高经营者本身也是家族成员而不是外部职业经理人，家族中层对生产率的拖累还会进一步放大。
- 另一组针对中国私营企业的研究：家族经理人往往拿着更高薪水、坐在更高位置、拥有更大决策权，可真到奖惩的时候他们却不像外部经理人那样强烈地受业绩约束——外人把事做砸了奖金职位权限都可能受影响，自家人把事做砸了组织更愿意替他解释、给他兜底。
- 布卢姆和范里南的世界管理调查：派训练有素的访员给世界各成千上万家工厂的管理实践逐项打分（怎么追踪绩效、目标怎么定、出了问题多久能被发现、提拔人靠业绩还是靠资历）——结果发现企业管理水平得分和生产率、利润强相关；中美的管理规律一样（管理分更高的公司更可能出口、出口产品更多、目的地更多、收入利润更高），差别是**在中国样本里管理水平的差异对企业效率和产品质量的影响更大——中国企业比美国企业更需要提高管理水平。**
- 普华永道 2021 年调查：中国大陆的家族企业里只有 19% 有一份成型的写下来的接班计划。实行长子继承的家族企业是全世界管理最差的一类。
- 中山大学管理学院教授李新春：**一个企业做个三五年可以靠人靠机会，但要做 30 年、50 年甚至百年老店，就必须靠制度。**
- 19 世纪英国法律史学家亨利·梅因：**一切进步社会的运动，到目前为止都是一场从身份到契约的运动。** 身份在你出生前就把你定死在了人身关系网里——你是谁家的、什么出身、依附于谁；契约则是你作为一个独立的人自愿走进并承担责任的关系。依附是有温情的：你不只被人支配，也得到了保护和确定性，甚至得到一个不必自己单打独斗的位置——只要懂事就有人罩着你；而走向现代意味着你得交出这份安稳，去争取更难却也更值钱的东西——权力和尊严。
- **别人问"你是谁的人"，现代人的回答是："我谁的人也不是，我是干这件事的人。"**

## 如何应用

1. **识别前现代管理的信号**：恩威亲表四字诀——用个人恩惠制造依附、用恐惧压出服从、重用亲信管钱、要求表演式忠诚。当你发现自己所在组织"忠诚压倒能力、恐惧压倒真话、亲信压倒专业、表态压倒结果"，你已经身处前现代管理。
2. **警惕家族化的代价**：管钱的岗位放自家人看似合理，但中层越家族化人均产出越低；接班计划缺失（中国家族企业仅 19% 有成型的接班计划）、长子继承制是全世界管理最差的一类。**做三五年的生意靠人靠机会，做 30 年 50 年的企业必须靠制度。**
3. **在个人层面完成"从身份到契约"**：让自己成为"干这件事的人"而不是"某人的门客"——把信任放进角色、合同和可执行流程，用有限的权责换取敢放开手脚的自由；同时理解依附的温情陷阱——它给你保护和确定性，但代价是交出权力和尊严。

---

## 全文（清洗后的课程转录，重点加粗+底纹）

欢迎来到现代思维工具课，我是万维钢。设想你是个收入不高但是精通某一项技术的年轻人，有一位不太熟的大哥给你介绍了一个活，你把活干得漂漂亮亮，对方公司给了 20 万。那么请问这 20 万你跟大哥怎么分？直觉是：既然活是你干的，你应该拿大头，分大哥一笔介绍费就好。但往上混的答案是：**把这 20 万全拿上、当面交给大哥，看他怎么分。哪怕他留下 18 万只给你 2 万，你也乐呵呵的认下来。这才叫懂事，只有这样你才能拿到下一次机会，合作久了分给你的比例自然会涨上去。** 好吧，也许这个活谁都能干，真正稀缺的是那个机会——比如活来自一家国企，而大哥是董事长的小舅子。但你仍然会质疑：为啥不是大家先商量好分成比例，非得事后让你把 20 万双手奉上表现一下懂事呢？**那不只是一次利益输送，更是一次表态、是一份投名状：我承认你是上游，我不会绕过你，我不会自作主张，我是你的人。如果权责力归属于一个具体的个人，这个人就会要求忠诚和可控。** 这就是为什么家族企业里管财务的往往是老板的一个能力平平的亲戚；这也是为什么都 21 世纪了，郭德纲还能跟徒弟搞"逐出师门"的一套。**这些现象都可以用一个词概括：前现代。前现代管理的灵魂是人身依附，而现代管理讲求的是角色责任。**

前现代管理的运行方式可以用四个字概括：**恩、威、亲、表**。恩就是**用个人恩惠制造依附**——你不是跟一家公司签了平等互惠合同，你是蒙老板赏识；老板说"我对你不薄吧"，意思就是你欠我的。威就是**用恐惧压出服从**——只有恩没有威，心软，别人就当你好欺负；马基雅维利不说了吗？被惧怕比被爱戴更安全。亲就是**重用亲信**——说起来大家都知道任人唯亲是个贬义词，但在前现代组织里用人最重要的就是可靠：一朝天子一朝臣，不任人唯亲，难道任人唯疏吗？皇帝有官僚集团，却常爱依靠内侍甚至宦官；文官有正式的品级和执掌，但师生同年这些关系往往比单纯上下级更能决定信任和照应；武将正规编制之外也都经营亲兵和家丁之类的私人武装——只有自己人才可靠，用起来才得心应手。表就是**表中心**——前现代管理特别喜欢表态，而且要求你直接表演：列队鼓掌、喊口号、写心得、层层传达、统一思想，中心不但要体现在行动上、还要体现在语言和表情上。**恩威亲表，前现代管理的规矩都长在具体的人身上：你的境遇取决于你跟老板的私人关系——他赏不赏你、他怕不怕你背叛、他拿不拿你当自己人、你表得够不够中。** 在恩威亲表的管理方式之下，组织得到的必定是：**忠诚压倒能力，恐惧压倒真话，亲信压倒专业，表态压倒结果。**

对比之下，现代管理需要让一群彼此不熟、也不必互相喜欢的人能够协作，所以它必须把组织从一串私人关系改造成一组可替换的角色接口：**用职位规定权限，用流程传递信息，用指标反馈结果，用审计追溯责任。人可以流动，角色还在；感情会变，接口还在。老板不必认识每一个人，组织照样能运转。前现代管理是人对人负责，现代管理是人对角色负责。**

那你说前现代管理这么土，它存在的合理性在哪里呢？首先，前现代管理可不是中国的特产。比如你今天申请美国大学的教职岗位或者研究生项目都会用到推荐信，这个形式早在古罗马就已是传统了——古罗马政治家、演说家、哲学家西塞罗的书信集里就收入了大量推荐信，写得都快成固定格式了："我把他当做自己家里人最亲近的人推荐给你，你要这么照顾他，让他明白我这封推荐信对他真管用。"**罗马人是古代世界中最讲法律的人，但是罗马社会运转的底层逻辑也是恩主与门客。** 今天的美国一样讲人情：不但有推荐信，而且找工作有熟人内推、做生意也重视熟人和校友圈。**个人关系是最基础的社会信任，而且人格化的信任比制度化的信任便宜得多。** 现代企业制度需要合同、会计、审计、绩效评价和申诉机制，需要能执行的商业法和可信的职业经理人市场——如果你只是领几十个工人在本乡做个土方生意，你真的需要这些吗？你要的只不过就是服从和可靠而已。**前现代管理依托的人际关系网是县城的：没有人是从天上掉下来的，你总有亲戚、有同乡、有故旧，你不可能脱离这张关系网，所以你也不会轻易背叛这张关系网里离你近的人——用关系来管理可太方便了。** 马克斯·韦伯早就说过：传统社会的权威是家产制的，整个组织就是统治者家庭的放大版，官员效忠的是统治者本人而不是某个抽象的职位。

前现代社会的分配逻辑也不一样：如果老板拿到订单不是因为公开竞争中效率最高、质量最好，而是因为他和某个上位者关系更近，那么他学到的就不是"能力创造收益"而是"关系决定收益"。这个活的能力贡献明明只值 2 万，我现在靠关系拿到了 20 万——那你凭什么指望我分给你 10 万呢？**如果你正在享受经济租，你似乎也不妨享受一点情绪价值。** 前现代管理能给你及时的控制感：你一句话全场照办、群里齐刷刷收到、会场一致鼓掌，这是现代制度给不了的快感。有的人不得不搞现代管理，有的人享受前现代管理，也有的人需要前现代管理——**现代管理会让权力变透明：权力一旦写清楚，很多原来靠模糊授权、口头传话、揣摩上意形成的非正式权力就会被制度折价。混乱并不总是管理失败，它有时候是一种利益结构——越说不清，某些人越有空间。** 说白了，打虎亲兄弟、上阵父子兵：我带几个兄弟开家公司，眼前都是忠于我的人，大家一起痛快赚钱，有啥不好？

短期看，前现代管理是又快又省又见效，但是它只能解决小规模、低复杂度、短周期的问题。**一旦组织要跨地区、跨专业、跨层级运行，一旦你需要陌生人之间稳定协作、坏消息及时上行、权责能够交接，前现代管理马上就会触及天花板。** 前现代管理的上线就是我们前面提到过的**邓巴数**：牛津大学的进化心理学家邓巴发现，人脑能稳定维持的熟人关系最多是 150 人——你最多只能信任这么多人，你能罩住、能镇住、还能赏能罚的私人关系只会更少。**你的关系半径只有这么大，那你的组织又能办多复杂的事呢？** 如果公司某个部门都是其领导的亲戚，像曾国藩的湘军一样（"冰围酱油，冰水降转"），你们倒是互相信任了，你让公司其他人怎么想？如果一条业务线只跟着一个领导走、团队只认他一个人而不认公司，那公司还敢把重要业务交给他吗？这就叫不可规模化。**如果你受到邓巴数的限制又想强行规模化，就必定会被下面的人蒙蔽。**

组织中层会起到关键作用：**中层是信息的关口**——上面不知道下面的真实情况，下面摸不透上面的真实想法，中层就有了生存空间。于是他们会把信息加工成对自己最有利的版本：对上报喜不报忧，对下制造领导的神秘感，对平级封锁资源，对异见者扣帽子，对失败找替罪羊。那你说我严查行不行？谁敢欺骗我我就责谁。可是你怎么知道自己是不是被欺骗了？你的严苛会造成恐惧。**管理大师戴明说得好：人只有不害怕，才能真正为公司好干活。一个被吓住的组织会非常安静，可安静不等于秩序，很多时候安静只是失明。前现代管理只要想做大就会陷入一个悖论：他拼了命地寻找忠诚，最后奖励的却是最会表演忠诚的人——专注干活的人被视为白专，敢于反映真实情况的人被视为麻烦和叛逆，只有表演忠诚的人会被提拔上去。与其说老板是被自己蠢死的，不如说是被中层惯坏的——你以为自己掌控了组织，殊不知掌控的只是组织的表情。**

现代管理首先是一项规模技术。**要想突破邓巴数，我们必须从"个人相信个人"变成"大家相信一个共同的叙事、看向同一个第三物"——对组织来说，这个叙事和第三物就是制度。** 美国制度经济学家、1993 年诺贝尔经济学奖得主道格拉斯·诺斯，获奖正是因为他把制度变迁带入了经济增长的解释之中：一个社会为什么能长期发展，不只靠技术和资本，还要看有没有一套制度能降低交易成本、稳定预期、执行承诺。诺斯在诺奖演讲中说：**复杂分工要扩展，社会就必须从人格化交换走向匿名的非人格化交换。前现代的信任是绑在具体人身上的，现代制度的厉害之处就是让信任离开具体的人、进入角色——合同、审计、司法、岗位责任和可执行流程。那正是从人身依附到角色责任的一跳。其实权责清晰不是束缚，而是解放：你只有有限的权利，所以你也就只需要承担有限的责任；你清楚自己能决定什么、对什么负责，你才敢放开手脚去干。**

一篇 2018 年发表的论文研究了 1284 家中国私营家族企业，发现其中 57.09% 的企业中层里至少坐着一个自家人——这些自己人扎堆于财务或者采购这类管钱的岗位，而在研发上特别少。这似乎挺合理：钱掌握在自己手里，业务可以交给外人。那这样的配置效果如何呢？研究者算出：**中层越家族化，企业的人均产出越低**——家族成员在中层的参与度每上升一个标准差，企业一年的人均产出大约就要少掉 10200 元；更要命的是，如果最高经营者本身也是家族成员而不是外部职业经理人，那么家族中层对生产率的拖累还会进一步放大。另一组针对中国私营企业的研究发现：**家族经理人往往拿着更高薪水、坐在更高位置、拥有更大决策权，可真到了奖惩的时候，他们却不像外部经理人那样强烈地受业绩约束**——外人把事做砸了，奖金、职位、权限都可能受影响；自家人把事做砸了，组织往往更愿意替他解释、给他兜底。

管理的好坏是能换算成钱的。斯坦福大学经济学家尼古拉斯·布卢姆和伦敦政治经济学院经济学家约翰·范里南搞过一次**世界管理调查**：派训练有素的访员给世界各国成千上万家工厂的管理实践一项一项打分——怎么追踪绩效、目标怎么定、出了问题多久能被发现、提拔人靠业绩还是靠资历——结果发现企业的管理水平得分和生产率、利润强相关；他们还发现中美的管理规律是一样的：管理分更高的公司更可能出口、出口产品更多、目的地更多、出口收入和利润也更高。**而中美的差别是：在中国样本里，管理水平的差异对企业效率和产品质量的影响更大——说白了就是中国企业比美国企业更需要提高管理水平。** 所以家族企业很难有大发展，搞不好就会弄成一个死循环：因为不信任制度所以依赖亲人，因为依赖亲人所以制度长不出来，因为制度长不出来所以更不敢信任外人、只信任自己。**可自己人不一定能给你干好，而且不一定愿意给你干。** 在布卢姆和范里南那项调查中，实行长子继承的家族企业是全世界管理最差的一类；普华永道 2021 年的调查则显示，中国大陆的家族企业里只有 19% 有一份成型的、写下来的接班计划。所以中山大学管理学院教授李新春有句话说得好：**一个企业做个三五年可以靠人靠机会，但要做 30 年、50 年、甚至要做百年老店，就必须靠制度。**

现代化的本质不是楼更高、车更多，也不是科技更先进。19 世纪的英国法律史学家亨利·梅因有句名言：**一切进步社会的运动，到目前为止都是一场从身份到契约的运动。** 身份在你出生前就已经把你定死在了人身关系网里——你是谁家的人、你什么出身、你依附于谁，这些先于你却定义了你；契约则是你作为一个独立的人自愿走进并承担责任的关系。**依附是有温情的：你不只是被人支配，你也得到了保护和确定性，甚至得到一个不必自己单打独斗的位置——也就是说你只要懂事就有人罩着你。而走向现代意味着你得交出这份安稳，去争取更难、却也更值钱的东西，那就是权力和尊严。** 但我们终究得走出这一步。很多人早已走出了这一步——别人问他们"你是谁的人"，他们一定会说：**"我谁的人也不是，我是干这件事的人。"** 好，以上就是今天的全部内容，现代思维工具课，祝您每天都有收获。
`,b1=`# 091丨古德哈特定律：指标的暴政

## 讲什么

**古德哈特定律**——想象你是软件公司老板，为了客观公正给工程师团队设了数字考核指标：看谁修的 bug 多。一开始效果不错，可几个月后 HR 建议优化掉老张——老张技术最好、核心架构是他打的，只是他负责的模块根本不怎么出 bug；被提拔的是小李——他专挑好修的小 bug 一天能结好几个，经常把一个大任务拆成五个小工单分开报，碰上难啃的硬骨头就标一个"暂不处理"。**你要是继续搞下去，全公司都会去学小李，没人愿意当老张了。这就是古德哈特定律：一个指标本来是用来观察现实的，可一旦它变成奖惩的目标，人们就会开始优化这个指标，而不再去优化现实。** 英国经济学家查尔斯·古德哈特 1975 年讨论英国货币政策时对央行说：任何一个统计规律，一旦你拿它来当调控目标、往上使劲，它就会塌掉。人类学家玛丽莲·斯特拉森 1997 年把它提炼成一句脍炙人口的金句：**当一种度量变成了目标，它就不再是一个好的度量。**

## 解决什么真问题

解释"为什么绩效考核越搞越糟、刷数据成为常态、连 AI 训练都会过拟合人类偏好"：古德哈特定律是复杂系统数字治理的必然宿命——真实目标往往复杂而难以量化，于是你提出代理指标（体重、考分、论文数、bug 修复数、点赞数），被考核者承受优化压力，开始为了让指标好看而努力，最终真实目标已经没人再在意了。**指标崇拜不是理性的胜利，而是判断力的缺失；古德哈特定律的病根不是权力太强，而是权力太弱——不是管得太狠，而是没本事、没权威去管。**

## 核心论点

- **两个近亲定律**：①卢卡斯批判（经济政策）——因为人们会针对新政策优化自己的行为，所以你不能拿过去的老关系预测新政策的效果；②坎贝尔定律（社会现象）——一个社会指标越是被用来做重大决策，就越容易被施压和扭曲它本来想测量的东西。古德哈特定律跟可读性的对比：**可读性是"国家为了管理方便对社会进行的扭曲"，古德哈特定律则是"社会为了迎合管理而主动进行的自我扭曲"。**
- **古德哈特定律的三个环节**：真实目标（复杂难量化）→代理指标（近似数字）→优化压力（被考核者为了指标好看而努力）——最终真实目标无人再在意。
- **学术界是被扭曲得最厉害的地方**：中国尤其把论文当成几乎是唯一的考核指标，论文早已不是写给同行的学术交流，而是评职称和拿经费的勋章、甚至一个可以买卖的成果。研究统计 100 所中国高校 168 份文件：1999–2016 那个 SCI 崇拜最盛的时代，这些高校对 Web of Science 收录的论文提供直接现金奖励，奖金从折合 30 美元一直开到 16.5 万美元，最高约为教授年薪的 20 倍。**论文产量世界第一，被撤稿数量也是世界第一、占全球一半以上。2020 年教育部和科技部发文承认"SCI 论文相关指标被片面、过度扭曲使用，出现了以发表 SCI 论文数量、高影响因子论文、高被引论文为根本目标的异化现象"。这样的文件不会有太大作用，因为指标可以演化：** 最初看 SCI 论文数→发现数量不等于质量开始看引用数→又有了更高级的 H-index→发现水论文互相引用没意思又开始追 CNS（Cell/Nature/Science）发文数或 Nature Index——中国研究者在 Nature Index 排行榜上也刷到了世界第一，**可是中国改革开放至今仍然没有做出一项配得上诺贝尔奖的科学发现。没错，只要你定个指标，人们就会刷它；而只要人们开始刷它，它就不再是一个好的指标。**
- **为什么非搞指标治理？因为权力太弱**：水平并不是什么神秘的东西——能不能开辟新方向、是否解决过真问题、做出来的东西到底怎么样，这些在内行眼中都是清楚的（"怀才就像怀孕，不可能看不出来"）。为什么诺贝尔奖没法刷？**因为诺贝尔奖是人的判断，不是指标——没有标准答案，不是说你过了哪条线就给发奖。人的判断高级就高级在靠的是难以量化的默会知识。** 科学史家西奥多·波特在《对数字的信任》里发现：**最迷信量化的往往是那些权威不足的机构——一个有充分权威的专家可以直接拍板说"我认为他行"，没人敢质疑；一个底气不足、怕人不服、怕责任的官僚可不敢这么干，于是他诉诸数字：数字看起来客观、非个人，谁也没法把账算到他头上。量化是一种"做了决定，却装得好像没有人在做决定"的办法，而客观性恰恰能给那些本身权威不足的官员凭空借来一层权威。**
- **但全靠人的判断也不一定靠谱**：学术界完全可能搞山头主义、近亲繁殖、互相抬轿——学霸这个词的本意说的就是那些把持学术资源、垄断话语权、压制异己的人。**指标政治和黑箱人治只是一条光谱的两端：判断必须有标准，否则就是任性；可标准一旦固定，它就会变成被人优化和钻空子的对象。古德哈特定律背后是专业判断与程序正义之间的天然张力。世界上不存在完美的选拔和评审制度——但这并不是说世界上不存在稍微好一点的选拔和评审制度。**

## 关键例证 / 金句

- 互联网的真实目标是提供良好服务，但它们把停留时长、点赞转发当"你喜欢"的代理指标——**结果最让你停不下来的往往不是对你最好的，而是最让你上头、最能调动情绪的**；研究指出越是按互动信号排序推荐，越会放大错误信息和极端对立。
- 英国 NHS 想缩短急诊，给医院定了"四小时之内必须处理"的硬指标——结果医院学会把病人堵在救护车里晾在走廊上，人还没正式到达计时器就先不开始，快到四小时就赶紧办住院手续把表掐停。
- 警察按破案率考核→专挑容易破的小案子下手；政府部门按预算执行率考核→年底突击花钱。
- 训练 AI 也一样：希望 AI 按人类喜好行事，一个办法是搞一个机器人裁判模仿人类的偏好自动给模型打分，于是模型会自发拼命讨好这个裁判——可裁判只是人类偏好的不完美代理，研究发现模型把从机器人裁判那里得到的分数刷得太高时，它真实的对人有用的本事反而往下掉。**研究者直接在论文里写道：这正符合古德哈特定律——你只要有考核，连 AI 都能学会刷题。**
- **最可怕的是，就算没有老板管、没有人用指标框定你，你也会古德哈特你自己**：有没有在不知不觉里把"做了几个小时"当成学习、把体重秤上的数字当成健康、把下班晚当成功劳、把今天写了几千字当成创造、把对方有没有秒回当成爱？相亲已经退化成对年龄、收入、身高、学历、彩礼这些指标的比拼，旅游变成了打卡照片和步数，连孝顺都被量化成转了多少线和回家几次。**根本没人逼你，是你自己主动把判断权交了出去——到那一步，指标已经成了你的主人。**
- 反古德哈特化的三条原则：①**指标只做素材，不做判决书**（指标是证人，不是法官——引用数期刊或奖项都可以摆上桌参考，但不能规定几篇等于晋升、不够就一票否决）；②**用代表作做评价，而且必须配一份书面理由**（别数一个人总共发了多少篇，而看他最好的那三五件东西，逼着评委白纸黑字写清楚核心贡献是什么、解决了哪个问题、反对的意见又是什么——论文数的是数量，读代表作看的是分量）；③**评价按角色分类**（大学老师、临床医生、工程师本来就是三种不同的工作，不该被一个标准压平）。再加几道程序保险：评审标准要公开、利益相关者要回避、落选的人得有地方申诉、每隔几年回头反审一次这套指标是否又诱导出什么坏行为——不行就换一套指标。**管理不是安装系统，管理是照看系统。**

## 如何应用

1. **考核前自问**：这个指标是"证人"还是"法官"？用代表作+书面理由代替数字计数；按角色分类设标准，而不是一个 KPI 压平所有人。
2. **事后反思**：定期审查哪些指标已经被古德哈特化了——如果管理者真正参与战略选择（亲自判断公司到底要追求什么，而不只是拿一张指标表去执行），他们就更不容易错把指标当成目的。
3. **警惕自我古德哈特化**：把"学习时长"与"学会了什么"、"体重数字"与"健康"、"下班晚"与"功劳"拆开——**管理不是安装系统，管理是照看系统；人是活的，可以修改制度。指标一旦成了你的主人，你就把判断权交了出去。**

---

## 全文（清洗后的课程转录，重点加粗+底纹）

欢迎来到现代思维工具课，我是万维钢。想象你是一家软件公司的老板，你是个有理想的现代人，特别反感上一讲说的前现代管理那一套，你愿意相信陌生人，你决心搞一个公平合理、任人唯贤的制度。可是公司几百号人，你怎么能知道该提拔谁、奖励谁呢？为了确保客观公正，你给工程师团队设定了一个数字考核指标：看谁修的 bug 多。一开始效果确实不错，你看着 bug 修复数蹭蹭上涨，非常满意。可是才几个月，你就感觉有点不对了：HR 竟然建议把团队里那个老张给优化掉——可你知道老张这人技术最好、公司最难啃的核心架构就是他当年打的，HR 的理由是老张修复的 bug 数最少。你特意询问一番后才搞明白：原来人家老张负责的那块根本就不怎么出 bug，让他咋修呢？而升上来当主管的是小李，因为他修的 bug 最多——可你仔细研究了一下发现也不对：小李专挑好修的小 bug，一天能结掉好几个，他还经常把一个大任务拆成五个小工单分开报，可是碰上难啃的硬骨头，他就标一个"暂不处理"晾在那呢。小李的修复数顶半个团队，可是他真的那么有用吗？**你这个指标考核要是继续搞下去，全公司都会去学小李，没人愿意当老张了。这就是古德哈特定律。**

古德哈特定律是非预期后果的一个特例：**一个指标本来是用来观察现实的，可一旦它变成奖惩的目标，人们就会开始优化这个指标，而不再去优化现实。** 查尔斯·古德哈特是英国经济学家，他在 1975 年讨论英国货币政策的时候对央行说了一番很拗口的话，大意是：任何一个统计规律，一旦你拿它来当调控目标、往上使劲，它就会塌掉。这个意思后来被人类学家玛丽莲·斯特拉森在 1997 年提炼成了一句脍炙人口的金句：**当一种度量变成了目标，它就不再是一个好的度量。**

古德哈特定律描述的过程基本上是这样的：首先你有一个真实目标，这是你真正想要的东西，可能是健康、学问、质量、公司的真实业绩；但这个真实目标往往是复杂而难以量化的，于是你提出了一个**代理指标**，也就是你拿来近似那个真实目标的数字——它们是体重、考分、论文数、bug 修复数和点赞数。你无法直接考核真实目标，所以你就专门考核代理指标；于是被考核者就承受了优化压力，开始为了让那个指标变好看而努力；最终，你的真实目标已经没有人再在意了。古德哈特定律有两个近亲：一个是卢卡斯批判，专门用于经济政策——因为人们会自动针对新政策优化自己的行为，所以你不能拿过去的老关系预测新政策的效果；另一个叫**坎贝尔定律**，用于社会现象——一个社会指标越是被用来做重大决策，就越容易被施压、被扭曲它本来想测量的东西。我们还可以把古德哈特定律跟前面讲的可读性做个对比：**可读性是"国家为了管理方便对社会进行的扭曲"，古德哈特定律则是"社会为了迎合管理而主动进行的自我扭曲"。**

知道了这个图式，你会发现古德哈特定律到处都是。也许互联网的真实目标是为你提供良好服务，但是它们把停留时长、点赞转发当成"你喜欢"的代理指标——**结果你发现最让你停不下来的往往不是对你最好的，而是最让你上头、最能调动情绪的**；有研究指出，越是按互动信号来排序推荐，越会放大错误信息和极端对立。英国国民医疗服务体系想缩短急诊，给医院定了个"四小时之内必须处理"的硬指标——结果医院学会了把病人堵在救护车里、晾在走廊上：你人还没正式到达，计时器就先不开始；快到四小时了，就赶紧办住院手续把表掐停。类似的：如果警察按破案率来考核，就有人专挑容易破的小案子下手，把费时费力的大案晾在一边；如果政府部门按预算执行率来考核，就会到年底突击花钱。**古德哈特定律是对复杂系统搞数字治理的必然宿命。**

连训练 AI 都是如此。我们希望 AI 按照人类的喜好行事，那么训练大模型的一个办法是：先搞一个机器人裁判，专门模仿人类的偏好，去自动给模型的表现打分。于是在训练过程中，模型会自发地拼命讨好这个裁判——可这个裁判只是人类偏好的一个不完美的代理。结果研究发现：**如果大模型把从机器人裁判那里得到的分数刷得太高，它真实的对人有用的本事反而会往下掉。研究者直接在论文里写道：这正符合古德哈特定律——你只要有考核，连 AI 都能学会刷题。**

我不得不说，被古德哈特定律扭曲得最厉害的地方就是学术界。世界各国的学者都重视发表论文，但中国尤其把论文当做几乎是唯一的考核指标——论文早已不是你写给同行的学术交流，而是你评职称和拿经费的勋章，甚至成了一个可以买卖的成果。有研究统计了 100 所中国高校的 168 份文件：在 1999 到 2016 年那个 SCI 崇拜最盛的时代，这些高校对 Web of Science 收录的论文提供了直接的现金奖励，奖金从折合 30 美元一直开到 16.5 万美元，最高约为教授年薪的 20 倍。**如果发论文是买卖，你可以想见其中就会有大量的水论文、甚至假论文：中国的论文产量早已是世界第一，但与此同时被撤稿数量也是世界第一，甚至占到全球的一半以上。** 2020 年教育部和科技部可能实在看不下去了，联合发了一份文件，承认"在当前科研评价里，SCI 论文相关指标被片面、过度扭曲使用，出现了以发表 SCI 论文数量、高影响因子论文、高被引论文为根本目标的异化现象"，要求取消直接按 SCI 指标向个人和单位发放的奖励。**这样的文件不会有太大作用，因为指标可以演化：** 最初大家看 SCI 论文数；后来人们发现论文数量并不等于质量，于是开始专门看引用数；再后来有了更高级的引用指标，也就是 H-index；等到发现一大堆水论文互相引用也没什么意思，各单位又开始追逐更硬的顶刊指标——CNS（Cell、Nature、Science）这三本公认最顶级的期刊的发文数，或者 Nature Index 这类顶级期刊组合排名。现在中国研究者在 Nature Index 的排行榜上也刷到了世界第一，**可是中国改革开放至今，仍然没有做出一项配得上诺贝尔奖的科学发现。没错：只要你定个指标，人们就会刷它；而只要人们开始刷它，它就不再是一个好的指标。**

那你说为什么非得搞指标治理呢？难道不用指标大家就看不出来水平高吗？**其实水平并不是什么神秘的东西**：就拿搞科研来说，你能不能开辟一个新方向、你是否解决过真问题、你做出来的东西到底怎么样，甚至你带学生认不认真、你提问能不能问到点子上，这些在内行眼中都是清楚的——人说"怀才就像怀孕，不可能看不出来"，千万不要低估人的判断力，人知道好坏。**为什么诺贝尔奖没法刷？因为诺贝尔奖是人的判断，不是指标：没有标准答案，不是说"你过了哪条线就给发奖"。人的判断高级就高级在，靠的是难以量化的默会知识，没有固定标准——你今天做出这样的研究就是破天惊，明年再发一篇类似的论文就不值钱了。** 学术界传统的办法是尊重人的判断、搞同行评议、教授治校，由圈内人商量决定谁当正教授和给谁经费——但这权力眼中可就太不可控了。**行政权力追求可控，可是你又不能随便想提拔谁当教授都行，你怎么能服众呢？用指标就是最好的办法。** 美国科学史家西奥多·波特 1995 年出了本书叫《对数字的信任》，专门说过这个问题：**波特发现，最迷信量化的往往恰恰是那些权威不足的机构。一个有充分权威的专家可以直接拍板说"我认为他行"，没人敢质疑；可一个底气不足、怕人不服、怕责任的官僚可不敢这么干，于是他诉诸数字——数字看起来客观、非个人，谁也没法把账算到他头上。波特说：量化是一种"做了决定，却装得好像没有人在做决定"的办法，而客观性恰恰能给那些本身权威不足的官员凭空借来一层权威。所以古德哈特定律的病根不是权力太强，而是权力太弱；不是管得太狠，而是没本事、没权威去管。指标崇拜不是理性的胜利，而是判断力的缺失。老板越弱，KPI 越硬。**

但是话说回来，全靠人的判断也不一定靠谱。学术界完全可能搞山头主义、近亲繁殖、互相抬轿——学霸这个词的本意，说的就是那些把持学术资源、垄断话语权、压制异己的人。**指标政治和黑箱人治只是一条光谱的两端：判断必须有标准，否则就是任性；可标准一旦固定，它就会变成被人优化和钻空子的对象。古德哈特定律背后，是专业判断与程序正义之间的天然张力。世界上不存在完美的选拔和评审制度——但这并不是说世界上不存在稍微好一点的选拔和评审制度。** 其实古德哈特定律反对的从来不是量化，而是幼稚的量化：数字指标完全可以作为判断的依据之一，但不应该作为判断本身。

好的评价制度应该像一个法庭：它一定讲究程序正义，但它不会规定"有三个证人就判刑"或者"哪方证据数量多哪方胜"——它重视证据和程序，但是会给人留下一定的自由裁量权。就拿学术评价来说，现在已经有一些改革的探索，方向相当一致：2015 年，几位国际科研计量学者在《自然》上发表了**莱顿宣言**，开宗明义第一条就是"定量评估只能支持、不能取代专家的定性判断"。英国的**研究卓越框架**则是一个更具体的例子：它是英国周期性开展的全国大学科研评估，评估结果会影响高校科研经费分配，它明令禁止用期刊影响因子去代替对论文质量的判断，转而看有限的代表作、真实的社会影响案例和研究环境说明。

除了事前防止，你还应该有事后的反思：看看哪些指标已经被古德哈特化了。有一项研究发现：**如果让管理者真正参与战略选择——也就是亲自参与判断公司到底要追求什么，而不只是拿到一张指标表去执行——他们就更容易不把指标当成目的。** 综合这些经验而论，反古德哈特化的办法主要是三条原则：**第一，指标只做素材，不做判决书**——引用数、期刊或奖项都可以摆上桌参考，但不能规定"几篇等于晋升、不够就一票否决"，一句话：指标是证人，不是法官。**第二，用代表作做评价，而且必须配一份书面理由**——别去数一个人总共发了多少篇，而要看它最好的那三五件东西，而且要逼着评委白纸黑字写清楚这个人的核心贡献到底是什么、他解决了哪个问题、反对的意见又是什么。论文数的是数量，读代表作看的是分量。**第三，评价按角色分类**——大学老师、临床医生、工程师本来就是三种不同的工作，不该被一个标准压平。在这三条原则之上再加几道程序保险：评审标准要公开，利益相关者要回避，落选的人得有地方申诉，还要每隔几年回头反审一次，查一查这套指标是否又诱导出了什么坏行为——不行就换一套指标。**人需要制度管理，但制度是死的、人是活的，人可以修改制度。管理不是安装系统，管理是照看系统。**

我们必须接受的是：**古德哈特定律永远都会存在——只要你想要客观公正，赏罚就得有标准，别人就会适应这个标准，这个标准就会被玩坏，就需要你修改标准。古德哈特和反古德哈特的过程永远不会结束。** 最可怕的是：**就算没有老板管、没有人用指标框定你，你也会古德哈特你自己。** 你难道没有在不知不觉里，把"做了几个小时"当成学习，把体重秤上的数字当成健康，把下班晚当成功劳，把今天写了几千字当成创造，把对方有没有秒回当成爱吗？不知从何时起，相亲已经退化成对年龄、收入、身高、学历、彩礼这些指标的比拼；旅游变成了打卡、照片和步数；连孝顺都被量化成转了多少和回家几次。**人们把日子过成一场对数字的追逐，把人生做成一份报表——根本没人逼你，是你自己主动把判断权交了出去。到那一步，指标已经成了你的主人。** 好，以上就是今天的全部内容，现代思维工具课，祝您每天都有收获。
`,ng=`# 092丨指挥官意图：把控制从"动作细节"挪到"目的、任务、边界"上

## 讲什么

**指挥官意图**——过去短短几年间，人们使用 AI 的方式至少发生了两次范式转移：最初大家都学提示工程，研究怎么跟 AI 说话；后来升级成情境工程，强调把该给的资料和约束给到位；今天智能体全面普及，工作方式已经变成了**循环工程（驾驭工程、智能体编排）**——核心思想是你可以托付给它一个颗粒度很粗的任务、设置好完成条件、让它自己去跑循环。比如你让 AI 修一个网页 bug，只需要交代几句话：我有什么问题、你的任务是修复它、代码随便你读测试随便你跑、做到我规定的程度就算完成、但是不许改对外接口、不许绕过安全校验。**他没交代具体操作步骤，甚至没讨论技术细节，说话就好像领导一样——他只告诉 AI 三件事：为什么、什么算完成、还有什么不能碰。** 这一讲说的就是这个符合 AI 时代的领导思路：来自军队的**指挥官意图**——1806 年普鲁士惨败后的军事改革，19 世纪中后期老毛奇执掌总参谋部时成熟为"任务式战术"。毛奇有句名言：**没有任何作战计划能在与敌军主力接触之后还继续管用**——既然计划注定失效，那就必须允许前方人员灵活发挥。

## 解决什么真问题

解释"为什么事无巨细的命令式管理是低级的控制，而看似放权的指挥官意图反而是更强的控制"：21 世纪初英国管理顾问、历史学家史蒂芬·盖伊研究企业战略为什么落不到行动上，把组织失灵概括为**三重落差**：认知落差（你知道的赶不上现实）、对齐落差（下面做的偏离你想的）、效果落差（做出来的结果又不如预期）。要弥补落差就得把判断权交给离现实最近的人——孙子兵法早就说"将能而君不御者胜"，任正非有句话叫"让听得见炮声的人来决策"。**任务式指挥可不是无为而治：美军联合参谋部有份文件专门纠正这个误解——任务式指挥不是更少的控制，因为在复杂环境里让所有人共同理解指挥官的意图，本身就是一种更强的控制：低级的控制是遥控手脚，高级的控制是统一判断标准。简单说，任务式指挥就是上级集中定义意图、下级分散选择手段。**

## 核心论点

- **指挥官意图包含三个元素：目的、关键任务、终态条件**。以营长接令"今晚夺取东桥"为例：命令不能只写夺取东桥（桥被炸了你怎么办？难道老实原路待命？）。指挥官意图必须写明——**目的**（为什么打这一仗：夺桥是为了给难民撤离和主力渡河打开通道，主力必须在天亮前渡河北上——知道这个"为什么"，你看见桥炸了就该去找渡口和浮桥）；**关键任务**（必须做成的几件事：控制两岸高地、压制敌方炮兵观察点、保持桥体完整——这些不是动作清单，怎么完成的不归上级管，这些是目标）；**终态条件**（完成之后局面必须呈现哪些看得见的状态：难民已过河、桥梁可通行、敌军火力够不着渡口、我方后续部队具备继续进攻的条件——一组可验收的条件，而不是一句"夺取胜利"）。美军条令还特别要求这份意图必须简短，让下面两级指挥员都能背下来。
- **意图里还隐藏着边界（什么不能干）**：包括法律和道德红线、军队纪律和交战规则，还包括任务本身的硬约束（桥必须保住、难民通道不能断、主力不能暴露）。边界规定了哪些代价不能用来换取胜利。
- **公司版指挥官意图 = 目的 + 任务 + 边界**：目的给方向，任务给验收，边界给护栏。反面例子：老板突然在群里发"第三季度日活必须提升 20%，各部门尽快拿方案"——这样的命令太单薄：是只要能提升日活就行吗？用签到红包买流量、发弹窗也行吗？给流失用户发短信召回算不算骚扰？手下不了解真实意图，擅自行动就是在赌老板的心思——赌对了叫执行力强，赌错了叫没有大局观，没准还得背锅。好的写法：**为什么**（为了增加日活，我们必须改善新用户的第一印象，让他能实实在在地完成一件以前做不成的事）；**成功长什么样**（新用户四周留存、首次任务完成率和退款投诉率有目标数字）；**哪些东西不能牺牲**（响应速度和用户隐私一寸不让；充短期数字的花招——弹窗轰炸、诱导签到买僵尸流量一律不要；除此之外引导流程、文案、默认值你们随便动，预算多少以内不用报批）。这样各部门才知道该怎么办——尤其现实发生变化（比如竞品突然宣布免费），员工也能自主应对，因为他们理解你真正想要的是什么。
- **执行指挥官意图的五个条件**：①**胜任力**——下级真有本事；②**互信**——上级相信下级会判断、下级相信上级会支持；③**共同理解**——大家共享同一张局势图；④**风险接受**——上级承认不确定性、愿意承担合理冒险的代价；⑤**有纪律的主动性**——必要时下级要在意图边界内主动变通。对照历史就知道这五条有多不容易：崇祯皇帝跟大臣将领没有基本互信，上级出事就甩锅给下级，谁敢去做可能取胜但有风险的事呢？
- **有纪律的主动性不是发挥主观能动性，而是一条非常硬的要求**：条令说得清楚——当原令不再适合现实的时候，下级有责任在指挥官意图范围内调整行动，并在可能时报告。注意不是"可以调整行动"，而是**有责任**。工程师接到任务把模块响应时间降到 200 毫秒以内，原计划是改缓存，但他查了半天发现真正的问题不是缓存而是上游接口在高峰期返回大量重复数据——如果他只是听话，就只能把缓存改得很漂亮、系统照样卡；如果他理解意图，就应该治理上游重复返回的问题、或者设计请求合并机制，同时向上报告说原计划不适合现实、我建议改方向。**所谓有纪律的主动性就是：你可以违背原计划，但不能违背上级意图。** 1866 年普奥战争期间，普鲁士的腓特烈·卡尔亲王训斥一位少校，少校辩解自己是奉命行事、军令如山，亲王回了一句从此进入军事教科书的话：**"陛下让你当少校，就是相信你知道什么时候不该执行命令。"** 将在外君命有所不受——忠诚不是抱着一张已经失效的计划表不放，而是在计划失效的那一刻仍然守住它背后的目的。

## 关键例证 / 金句

- **AI 会让人类反思自己的行为**：如果给 AI 交代任务最高效的方式是"为什么、什么算完成、什么不能碰"，如果一个 AI 都不必被人盯着一行一行遥控，那一个人类成年员工凭什么就该被事无巨细的命令与控制呢？**如果你对员工管得太细，可能你们公司的业务太简单。**
- 美联储的治理就是意图式管理：国会给中央银行的法定目标本质上就两条——最大就业和物价稳定；至于什么时候加息、用什么工具，那是央行的专业决定。**政治系统定义意图，专业机构选择手段——所谓央行独立性，不是专家想干嘛就干嘛，而是有纪律的主动性。**
- 中国的改革开放就是一场超大型的意图式治理：中央给意图和边界，具体怎么搞地方可以先试——**摸着石头过河是有方向的，大家都知道河对岸在哪。**
- 带研究生的差导师说"你去跑这个模型、画这个图"，学生跑完了也不知道为什么；好导师交代的是"我们要检验哪个机制、什么样的结果会推翻我们的假设、哪些定义不能动"——**科研训练的核心不是教学生执行动作，而是让他们学会识别问题、提出假设、验证理论。**
- 有的父母对孩子是微观管理：几点写作业、先写哪一科、铅笔放哪、书包怎么收都要微操——他们以为这是负责，其实这是在剥夺孩子练习判断的机会。**你把路线全画死，孩子学会的是服从；你把意图讲清楚，孩子发展出的是有纪律的主动性。**
- 北宋赵光义发明"阵图"：对敌作战时朝廷把阵图画好快马送往前线，将军必须照图布阵——可现场千变万化，哪能遥控微操呢？但将军们明知图不合战场实际也照打：照图打输了那是天意，不照图打赢了那可是抗旨。后来名将田锡实在看不下去上书"既任命将帅，请委任责成，不必赐阵图"，皇上不听，结果北宋对辽作战屡遭败绩。**今天没有皇帝赐阵图了，可是你见过第 17 版的需求文档、精确到小时的甘特图和连话术都写死的销售 SOP——微操的背后是忠诚和防范，是前现代管理。**
- 忠诚于命令往往是在给自己免责，忠诚于意图才是在承担判断。而意图还可以继续往上追：**这个意图服务于什么更大的意图？更大的意图又服务于什么理念？追到尽头，忠诚就不再是忠诚于某个人，而是忠诚于那套值得被维护的理念——如果有一天你发现给你下命令的上级已经腐败了，你还要继续忠诚于他吗？现代人真正的忠诚不是终于命令、也不是终于人，而是终于理念。**

## 如何应用

1. **交办任务时按"目的、任务、边界"三件套表达**：为什么做这件事、成功长什么样（可验收的状态）、哪些代价不能用来换取成功。写下来、保持简短、让执行者能背下来。对自己也用这套：给 AI 派活时也是——为什么、什么算完成、什么不能碰。
2. **检查自己是否在"赐阵图"**：如果你发现自己在下发第 17 版需求文档、精确到小时的甘特图、连话术都写死的 SOP——你在遥控手脚而非统一判断标准，你在用"忠诚和防范"代替"信任和授权"。低水平组织奖励不犯错、培养一堆听话型人才；高水平组织应该奖励在不确定性中做出好判断。
3. **修炼有纪律的主动性**：接受任务后先问"上级的真正意图是什么、边界是什么"；当原计划不再适合现实，有责任在意图范围内调整行动并报告——**可以违背原计划，但不能违背上级意图。同时记住：表达意图正在变成一项越来越值钱、有可能是最重要的技能——只有人有意图，AI 对这个世界没有什么不满意的，你给什么意图它们就执行什么意图。**

---

## 全文（清洗后的课程转录，重点加粗+底纹）

欢迎来到现代思维工具课，我是万维钢。过去短短几年间，人们使用 AI 的方式至少发生了两次范式转移，特别值得回顾。最初大家都学提示工程，研究怎么跟 AI 说话、设定角色、给几个示范、要求它一步一步想；后来 AI 聪明了一些，人们意识到比话术更要紧的是背景信息，于是升级成**情境工程**，强调把该给的资料和约束给到位；今天智能体全面普及，工作方式已经变成了**循环工程，或者叫驾驭工程、智能体编排**——核心思想是你可以托付给它一个颗粒度很粗的任务、设置好完成条件、让它自己去跑循环：智能体自己拆解、自己查资料、自己动手、自己检查，不达标准不收工。比如你让 AI 修一个网页 bug，你不需要告诉它具体怎么干，只要交代这么几句话就行：**"我这儿有个什么问题，你的任务是修复它；代码随便你读，测试随便你跑；做到我规定的这个程度就算完成；但是不许改对外接口，不许绕过安全校验。"** 这就是当今一个 AI-native 的工程师工作的方式。他没有交代具体的操作步骤，甚至没有讨论技术细节，他说话就好像领导一样——**他只告诉 AI 三件事：为什么、什么算完成、还有什么不能碰。**

我敢说，AI 会让我们反思人的行为：**如果这就是给 AI 交代任务最高效的方式，如果一个 AI 都不必被人盯着一行一行地遥控，那一个人类成年员工凭什么就该被事无巨细的命令与控制呢？如果你对员工管得太细，可能你们公司的业务太简单。** 这一讲咱们说一个符合 AI 时代的领导思路，叫**指挥官意图**。这是一个来自军队的概念，它的源头可追溯到 1806 年普鲁士惨败后的军事改革；到 19 世纪中后期，老毛奇执掌总参谋部时，这套思想逐渐成熟，形成任务式战术。毛奇有句名言：**"没有任何作战计划能在与敌军主力接触之后还继续管用。"** 既然计划注定失效，那就必须允许前方人员灵活发挥。这套思想后来被美军接过去，写进了陆军条令，称之为**任务式指挥**，其中最核心的一条就是指挥官意图。

军队遇到的问题，企业不也经常遇到吗？21 世纪初，英国管理顾问、历史学家史蒂芬·盖伊研究企业战略为什么落不到行动上，把组织失灵概括为**三重落差**：第一个是**认知落差**，也就是你知道的赶不上现实；第二个是**对齐落差**，下面做的偏离你想的；第三个是**效果落差**，做出来的结果又不如预期。说白了就是计划没有变化快——**要弥补落差，就得把判断权交给离现实最近的人。** 其实中国人也知道：孙子兵法早就说"将能而君不御者胜"；任正非有个说法叫"让听得见炮声的人来决策"，这不是巧合，他在相关讲话里明确说明借鉴了美军参谋长联席会议的组织模式。

**任务式指挥可不是无为而治。美军联合参谋部有份文件专门纠正这个误解：任务式指挥不是更少的控制，因为在复杂环境里，让所有人共同理解指挥官的意图，本身就是一种更强的控制。低级的控制是遥控手脚，高级的控制是统一判断标准。简单说，任务式指挥就是：上级集中定义意图，下级分散选择手段。**

咱们来看看指挥官意图到底是什么样的。想象你是个营长，接到的命令是"今晚夺取东桥"。你率领部队赶到东桥，发现桥已经被敌人炸了，你怎么办？难道老老实实原地待命吗？所以命令不能这么写。**指挥官意图必须包含三个元素：目的、关键任务、终态条件。** 目的是为什么打这一仗——比如夺桥是为了给难民撤离和主力渡河打开通道，而主力必须在天亮前渡河北上。知道这个"为什么"，你看见桥炸了就该去找渡口和浮桥。关键任务是必须做成的几件事——比如控制两岸高地、压制敌方炮兵观察点、保持桥体完整。这些不是动作清单，你怎么完成的上级不管，这些是你的目标。**终态条件则是成功之后局面必须呈现哪些看得见的状态**——比如难民已过河、桥梁可通行、敌军火力够不着渡口、我方后续部队具备继续进攻的条件。这是一组可验收的条件，而不是一句"夺取胜利"——打到什么样算打完了，白纸黑字得能对照。美军条令还特别要求这份意图必须简短，让下面两级指挥员都能背下来。

指挥官意图里还隐藏了一个东西叫做**边界**，也就是什么不能干：它包括法律和道德红线、军队纪律和交战规则，还包括任务本身的硬约束——比如桥必须保住、难民通道不能断、主力不能暴露等。它可能藏在关键任务和终态条件之中，也可能不用写出来。**边界规定了哪些代价不能用来换取胜利。**

公司做事更需要边界意识。我们大约可以搞一个公司版：**指挥官意图 = 为什么 + 成功长什么样 + 哪些东西不能牺牲，也就是目的 + 任务 + 边界——目的给方向，任务给验收，边界给护栏。** 来个具体例子：一家互联网公司，老板突然在群里发"第三季度日活必须提升 20%，各部门尽快拿方案"。这样的命令就太单薄了：是只要能提升日活就行吗？我用签到红包买流量、发弹窗也行吗？给流失用户发短信召回算不算骚扰？手下如果不了解老板的真实意图，擅自行动就是在赌老板的心思——赌对了叫执行力强，赌错了叫没有大局观，没准还得背锅。好的指挥官意图像下面这样写：**为什么**——为了增加日活，我们必须改善新用户的第一印象，让他能实实在在地完成一件以前做不成的事；**成功长什么样**——新用户四周留存、首次任务完成率和退款投诉率有目标数字；**哪些东西不能牺牲**——响应速度和用户隐私一寸不让，充短期数字的花招（弹窗轰炸、诱导签到、买僵尸流量）一律不要，除此之外引导流程、文案、默认值你们随便动，预算多少以内不用报批。**你这样下命令，各部门才知道该怎么办；尤其如果现实发生一个变化，比如说竞品突然宣布免费，你的员工也能自主应对，因为他们理解你真正想要的是什么。**

如你所想，一个组织要想采用指挥官意图，自身也得有点素质才行。任务式指挥有若干原则，我们可以从中提炼出能执行指挥官意图的五个条件：第一个条件**胜任力**，也就是下级真有本事；第二**互信**，上级相信下级会判断、下级相信上级会支持；第三是**共同理解**，大家共享同一张局势图；第四**风险接受**，上级承认不确定性、愿意承担合理冒险的代价；第五**有纪律的主动性**，也就是在必要的时候下级要在意图边界内主动变通。你对照一下古今中外的历史，就知道做到这五条有多不容易——崇祯皇帝跟大臣和将领就没有基本的互信，如果上级出了事就甩锅给下级，下级怎么敢去做一些可能取胜但是有风险的事呢？

咱们单说最核心的一条**有纪律的主动性**。这可不是我们平常说的发挥主观能动性，这是一条非常硬的要求——条令说得清楚：**当原令不再适合现实的时候，下级有责任在指挥官意图范围内调整行动，并在可能时报告。注意，不是"可以调整行动"，而是"有责任"。** 一个工程师接到任务把某个模块的响应时间降到 200 毫秒以内，原计划是改缓存，但他查了半天发现真正的问题不是缓存，而是上游接口在高峰期返回了大量重复数据。如果他只是听话，就只能把缓存改得很漂亮、系统照样卡；如果他理解意图，就应该治理上游重复返回的问题、或者设计请求合并机制，同时要向上报告说"原计划不适合现实，我建议改方向"。**所谓有纪律的主动性就是：你可以违背原计划，但不能违背上级意图。** 当然那也得上级有容人之量才行。低水平组织奖励不犯错，培养一大堆听话型人才，他们行事的逻辑是"你说什么我做什么，反正做错了也不是我的责任"；高水平组织则应该奖励在不确定性中做出好判断。1866 年普奥战争期间，普鲁士的腓特烈·卡尔亲王训斥一位少校，少校辩解说自己是奉命行事、军令如山，亲王回了一句从此进入军事教科书的话：**"陛下让你当少校，就是相信你知道什么时候不该执行命令。"** 将在外君命有所不受——忠诚不是抱着一张已经失效的计划表不放，而是在计划失效的那一刻仍然守住它背后的目的。

基于指挥官意图的管理，就是在不确定的环境里上级定义目标、边界和取舍原则，下级根据现场信息自主选择手段，再通过反馈维持共同的理解。其实很多领域已经这么做了，而且可以做得更好。比如现代国家管货币就是这么管的：以美联储为例，国会给中央银行设定的法定目标本质上就两条——最大就业和物价稳定；至于什么时候加息、用什么工具，那是央行的专业决定。**政治系统定义意图，专业机构选择手段——所谓央行独立性，不是专家想干嘛就干嘛，而是有纪律的主动性。** 公共治理大都应该如此：统一目标划定红线、信息快速回流、现场机处置。往大了说，**中国的改革开放就是一场超大型的意图式治理：中央给意图和边界，具体怎么搞地方可以先试——摸着石头过河是有方向的，大家都知道河对岸在哪。** 再比如带研究生搞科研：差的导师说"你去跑这个模型、画这个图"，学生跑完了也不知道为什么；好的导师交代的是"我们要检验哪个机制、什么样的结果会推翻我们的假设、哪些定义不能动"，一定要让学生看见 big picture。**科研训练的核心不是教学生执行动作，而是让他们学会识别问题、提出假设、验证理论。** 有的父母对孩子是微观管理：几点写作业、先写哪一科、铅笔放哪、书包怎么收都要微操，他们以为这是负责，其实这是在剥夺孩子练习判断的机会。不是让你自由放任，但完全可以交代意图："出去玩可以，但要安全，遇到危险立刻联系我；作业你自己安排，但今晚睡觉前必须完成；自己要能讲出错题。"**你把路线全画死，孩子学会的是服从；你把意图讲清楚，孩子发展出的是有纪律的主动性。**

按照任务式指挥的标准，恐怕世间大多数老板根本就不懂怎么交代活。他们之所以还在继续当老板，一是靠员工懂事——会看脸色、会脑补出老板没说出口的意图自动把活干完；二是靠向下甩锅。**但是 AI 不惯着你：你没交代"为什么"，它就自己编一个；你没给的取舍，它就乱选；你含糊的验收，它就糊弄。** 同样的活在人家里被驾驭到飞起，在你手里啥也干不出来——你就知道自己到底会不会当领导了。**表达意图正在变成一项越来越值钱、有可能是最重要的技能。只有人有意图：AI 对这个世界没有什么不满意的，你给什么意图它们就执行什么意图。是我们认为眼前的现实还不够好，才需要把一个模糊愿望翻译成可执行的意图。我觉得人类最有希望的一点就是：意图是可以被理解的。** 这个世界有可读性问题、有古德哈特问题、有非预期后果、有平庸之恶，但是如果你能越过官僚体系、跟人面对面坐下来聊一聊，别人其实能理解你那个意图——只要理解了意图，他们就可以超越一切指标。**指标、流程、制度都是人为的手段，都可以编辑；意图是更根本的东西。**

最后咱们说一桩往事。宋朝吸取前朝天下大乱的教训，最怕武将在外自作主张，太宗赵光义就发明了一个办法叫**阵图**：对外敌作战时，朝廷多次把阵图画好、快马送往前线，将军必须照图布阵。可是现场局面千变万化，哪能遥控微操呢？但是将军们明知图不合战场实际也都照着阵图打——因为照图打输了那是天意，不照图打赢了那可是抗旨。后来名将田锡实在看不下去，上书说"既然任命了将帅，就请委任责成，不必赐阵图"，但皇上不听，结果北宋对辽作战屡遭败绩。**今天没有皇帝赐阵图了，可是你见过第 17 版的需求文档、精确到小时的甘特图和连话术都写死的销售 SOP——微操的背后是忠诚和防范，是前现代管理。** 忠诚于命令往往是在给自己免责，忠诚于意图才是在承担判断。而意图还可以继续往上追：这个意图服务于什么更大的意图？更大的意图又服务于什么理念？追到尽头，**忠诚就不再是忠诚于某个人，而是忠诚于那套值得被维护的理念。如果有一天你发现给你下命令的上级已经腐败了，你还要继续忠诚于他吗？现代人真正的忠诚不是终于命令，也不是终于人，而是终于理念。** 好，以上就是今天的全部内容，现代思维工具课，祝您每天都有收获。
`,eg=`# 093丨委托—代理问题：不懂这一条，看组织永远像看宫斗剧

## 讲什么

**委托—代理问题**——生活中有一种人可以说是"一受骗体质"：装修会被哄着多花钱，修个手机会被说成主板坏了；如果当上领导，更是被下属糊弄得团团转，完了还觉得团队气氛特别好，事后感言"我这个人就是把别人想得太好了"。另一种人正相反：面对同样一堆人一摊子事，他们不但从不上当，而且井井有条、雷厉风行，没人敢糊弄他们。差别在哪？是第二种人更强势、更善于洞察人心、管得更严吗？老百姓总爱诉诸道德和性格，但学了这么多思维工具，必定有超越戏曲思维的见识——**与其考察道德人心，不如考察权责力和信息结构。** 这一讲说的就是经济学概念**委托—代理问题**：它能解释从上当受骗、管理失败到官员腐败的一系列现象——因为替你做事的人不是你而导致的问题。你是委托人（想把事情做成的人），实际替你做事的是代理人；代理人的利益和你不完全一致，而他在现场、你只能听汇报，信息不对称，问题就来了。

## 解决什么真问题

解释"为什么找好人做代理、找忠诚的自己人还是会被骗"：你的直觉是找个好人、找忠诚的自己人做代理不就行了？可韩非子 2000 多年前就看明白了——"上下一日百战"，君臣之间哪有什么一家人，一天之中都要暗中较量一百回；"君臣之利异，故人臣莫忠"，利益不一样，忠诚怎么能靠得住呢？韩非给委托—代理问题开的药方是**术**（全数的术）：君主深藏不露、用亲信互相监视、放假消息试探臣下——术不是制度化的信任，而是人格化的防范，说白了就是宫斗。现代人必须有更好的解法。

## 核心论点

- **委托—代理问题最根本的三个产生机制**：①发生在委托之前——**逆向选择（柠檬市场）**：你看不清打算请的这个代理人是什么人，好的坏的看起来都差不多，被忽悠之下选的常常是最不靠谱的人；②发生在委托之后——**道德风险**：你看不清他干了些什么，难以追责，他就肆意妄为（讲软预算约束时说过这个局面，"下逆其用事其上"）；③由两位诺奖得主（霍姆斯特伦和米尔格罗姆）提出的**多任务委托—代理问题**：你的委托通常不是一件事而是一组任务，有的容易度量、有的极难度量，你自然奖励容易度量的任务，代理人就会把力气从难度量的任务上抽走——比如装修你强调工期越快越好，他就在你看不见的地方对付防水、水泥养护；三年后卫生间渗水，你骂装修队没良心，可当初的奖励函数不是你定的吗？**这也是古德哈特定律的一种表现。**
- **目标翻译问题**：委托不是把任务丢出去，而是把你的目标翻译成别人能执行的结构，而翻译必然丢东西。装修你本来要的是一个安全舒服、住 20 年不闹心的家，可合同里写的是"20 万元 90 天包含这些项目"，装修老板还得再往下翻译一层。**整个链条从价值目标到合同条款、到考核指标、再到代理人的动作目标，每翻一次就变窄一格。托付每转包一层，决策权、责任承担、真实信息和奖惩就会发生一次错位：有权无责就会拍脑袋决策，有责无权就是悲国下，有之无权一线信息就不能避免组织犯错，有利无责就有人搭便车和刷指标、捞一把就走。**
- **现代委托的精髓：用人要疑，但疑心别用来盯人，要用来修结构**。简单说，委托人有三样东西是绝不能交出去的：①**目标解释权**——代理替你做事，但不能由他单方面定义什么叫"为你好"；②**信息解释权**——代理向你汇报，但不能让他成为你唯一的信息来源和现实解释者；③**最终裁判权**——代理作为执行者不能自己验收自己。成为委托人，你不必凡事亲自下场干活，但必须学会提要求、看过程、问证据、验结果。
- **三笔代理成本**（詹森和梅克林）：解决委托—代理问题必须支付三笔成本——①**监督成本**（你防他的钱：看进度、查记录、请第三方）；②**担保成本**（他自证清白的钱：交押金、给保修、接受审计——这笔钱多半会被他算进报价里，最后还是你出）；③**剩余损失**（就算前两笔都花了，他的行为和你的利益之间仍然对不齐的那部分）。**理论上把偏差监督到零的成本是无穷大，所以偏差永远存在。世界上哪有"用人不疑"那么好的事呢？那本质上是拒绝支付托付成本。** 好消息是代理人并不是一门心思算计：代理理论有个对头叫**管家理论**——代理人也会被职业荣誉、使命感和你对他的尊重驱动。你能在制度上防小人，就可以在关系上把人当君子。

## 关键例证 / 金句

- 你是股民是委托人，CEO 是代理人替你经营公司——你更关心股价，他更关心的可能是自己的工资和套现；你是病人，医生替你判断——他多开一项检查就多一份收入；你是选民，官员替你治理公共事务——你这个名义上的委托人恰恰是距离权力最远、信息最少的人。**注意这与好人坏人无关，纯粹是委托代理这个位置结构决定的。**
- **韩非的药方是术，现代的药方是明处的制度**：韩非说得明白——"法莫如显，而术不欲见"，术的要诀是暗：把尺子藏起来让人猜，你不但猜不透我的心思，而且猜不透我的赏罚标准，所以你就能怕我。中国把术玩到登峰造极的朝代是大清：康熙允许约 100 个亲信绕过所有衙门直接给皇帝写信，雍正把名单扩大到 1100 多人——"谁有密奏权"本身就是一种震慑，每个总督身边都可能
有皇帝的另外一双眼睛——你在折子里报祥瑞，暗查使的密折里可能正写着灾情。结果几万件密折全部汇到一个人的书案上，等于全帝国只有一双眼睛做审计，雍正把自己批成了史上最劳累的皇帝。**而现代人有合同、仲裁和法院：现代审计是一个行业、一套准则、是千万双受过训练的眼睛；现代的密折是几万个陌生人给装修公司公开打的分数。不过这套明处的制度有一个雍正永远不肯接受的要求——它不但约束代理人，也约束委托人。**
- **好的委托要让代理人信"按规则把事做好比提前防你、绕你、耗你更划算"**，所以委托人至少要在三件事上绑住自己：①**给公平报酬**——你把价压到代理人没有正经利润，他就一定会去挣隐性补偿、偷工减料；②**允许代理人说"不可能"**——你既要快、又要便宜、又要质量好、还不能有风险、还不许人说做不到，你就是逼人说谎；③**不把运气当罪责**——结果里既有努力也有运气，你把所有坏结果都算成代理人的罪，他就只会去做安全但平庸的事、顺便学会瞒报。**成熟的委托人不惩罚坏消息，他惩罚隐瞒消息。**
- **差的委托是一句话，好的委托是一份结构**：差的装修委托："预算 20 万帮我弄好点"——目标没解释、信息全在对方手里、验收全凭最后看一眼，这不叫托付，这叫许愿。好的委托："预算 20 万以内，水电、防水、环保材料是不可牺牲项；每个阶段拍照留档、材料进场核对品牌型号；付款分四期，防水避水试验通过才付下一笔；主材变更必须我签字确认；留 10% 尾款入住一个月无重大问题再结。"**头两句是目标解释权，中间是信息解释权，后面是最终裁判权——这份委托书里没有一句是在道德绑架，没有一处
在猜人心——他不需要代理人是圣人，只需要代理人是正常人，在这个结构里好干活就是他最划算的选择，这就是我们讲过的激励相容。**

## 如何应用

1. **守住三样绝不交出去的东西**：目标解释权（想清楚自己到底想要什么——参考指挥官意图三要素：为什么、什么算完成、什么不能牺牲）、信息解释权（跳出汇报核对事实——保留不经过代理人的信息通道：原始记录、票据、系统日志、中途检查、第三方验证）、最终裁判权（把"什么算做成"写在开工之前、把"钱分在节点之后"——验收标准事先白纸黑字、付款跟着节点走、保留剩余判断权、永远保留换人的能力）。
2. **给销售等关键岗位设计激励相容的委托**：差的委托"你负责增长，用结果说话"——代理人要充数字，最快的路是买量补贴、透支品牌。好的委托："你负责增长，但用户留存、品牌声誉、合规风险是不可牺牲项；奖金由新增收入、留存率、投诉率和团队协作共同决定；一部分当年发、一部分看第二年的留存；大额投放必须复盘；所有重要数据必须进公司系统。"**一个招聘的小秘密：真正的高手不会被这样的委托吓跑，他反而会松一口气——规则清楚意味着他不用猜你的心思、不用防你事后翻脸，他的功劳算得清、拿得走。差的委托下走的是君子，吸引来的是赌徒。**
3. **看组织时用委托—代理框架**：当你觉得团队在演戏、汇报全是好消息、离开某个人组织就转不动——问自己：目标解释权在哪？信息通道是否被代理人垄断？谁在验收谁？**同时记住现代委托不
讲忠诚，讲的是合作空间——这个世界不是真心对真心就能好的，但也远没有坏到处处尔虞我诈，它总可以被设计成更好。**

---

## 全文（清洗后的课程转录，重点加粗+底纹）

欢迎来到现代思维工具课，我是万维钢。生活中
有一种人可以说是"一受骗体质"：装修会被哄着多花钱，修个手机会被说成主板坏了；如果当上领导，更是被下属糊弄得团团转，完了还觉得团队气氛特别好，事后感言"我这个人就是把别人想得太好了"。另一种人正相反：面对同样一堆人和一摊子事，他们不但从不上当，而且井井有条、雷厉风行，没人敢糊弄他们。你说这两种人差别在哪呢？是第二种人更强势吗？还是更善于洞察人心，还是管得更严？**老百姓总爱诉诸道德和性格，你学了这么多思维工具，必定有超越戏曲思维的见识——与其考察道德人心，不如考察权责力和信息结构。** 这一讲咱们说一个经济学概念，叫**委托—代理问题**：它能解释从上当受骗、管理失败到官员腐败的一系列现象，可以说现代人如果不懂这一条，看组织永远像看宫斗剧。

简单说，**委托—代理问题就是因为替你做事的人不是你而导致的问题**。你是委托人，也就是想把事情做成的人；而实际替你做事的是代理人。代理人不是你，所以他想要的跟你想要的不完全一致——比如说你要质量，他要利润；你要长期，他要这个月的奖金。可是他在现场，你只能听汇报，所以他知道的比你多——**利益有分歧，信息不对称，问题就来了。** 你作为股民是委托人，CEO 作为代理人替你经营公司，你更关心股价，他更关心的可能是自己的工资和套现；你是病人，医生替你做判断，他多开一项检查就多一份收入；你是选民，官员替你治理公共事务，你这个名义上的委托人恰恰是距离权力最远、信息最少的人。**注意这跟好人坏人没关系，你们之间的问题纯粹是委托—代理这个位置结构所决定的。**

人们的直觉是：我找个好人做代理、找个忠诚的人、自己人不就行了吗？可是人家韩非子 2000 多年前就看明白了——"上下一日百战"，意思是君臣之间哪有什么一家人，一天之中都要暗中较量一百回；又说"君臣之利异，故人臣莫忠"，意思是利益不一样，忠诚怎么能靠得住呢？**韩非给委托—代理问题开出的药方是术——全数的术，说白了就是一套后台控制技术：君主要深藏不露，要用亲信互相监视，要放出假消息试探臣下。术不是制度化的信任，而是人格化的防范，也可以说就是宫斗。我们现代人必须有更好的解法。**

委托—代理问题最根本的产生机制有三个，你一听都会有熟悉之感。一个发生在委托之前：**你看不清打算请的这个代理人是个什么人**——这个局面其实就是咱们讲过的柠檬市场：好的坏的看起来都差不多，你被忽悠之下选的常常是最不靠谱的人，可谓逆向选择。第二个发生在委托之后：**你看不清他干了些什么**——看不清就难以追责，难以追责他就肆意妄为，这叫道德风险，我们讲软预算约束的时候说过这个局面；你不在现场只能听汇报，他一次隐瞒你没看出来，后面就会越来越胆大，用韩非的话说就是"下逆其用事其上"。第三个机制由两位诺贝尔经济学奖得主本特·霍姆斯特伦和保罗·米尔格罗姆提出，叫**多任务委托—代理问题**：你的委托通常不是一件事而是一组任务，其中有的容易度量、有的极难度量——你很自然地奖励容易度量的任务，那么代理人就会把力气从难度量的任务上抽走、去专攻容易度量的任务。比如你家装修，你跟老板说工期越快越好、提前完工有红包，那么他就会拼命赶工期，在你看不见的地方像防水涂料刷几遍、水泥养护够不够天数，他就对付；三年后卫生间渗水，你骂装修队没良心，可当初的奖励函数不是你定的吗？**没错，这也是古德哈特定律的一种表现。** 如果教育局只考核升学率，那么学校就会搞应试教育，而不会在乎学生的什么好奇心——虽然教育局也认为好奇心很重要。

代理人不是圣贤，有这三个机制，恐怕出问题才是正常的。三个机制背后有个更深的原因，我们不妨称之为**目标翻译问题**：委托不是把任务丢出去，而是把你的目标翻译成别人能执行的结构，而翻译必然丢东西。装修你本来要的是一个安全舒服、住 20 年不闹心的家，可是你怎么表达这个目标呢？你们合同里写的是"20 万元、90 天、包含这些项目"，然后装修老板还得再往下翻译一层才能到负责执行的师傅手里。**整个链条从价值目标到合同条款、到考核指标、再到最后到代理人的动作目标，每翻一次就变窄一格。托付每转包一层，决策权、责任承担、真实信息和奖惩就会发生一次错位：有权无责就会拍脑袋决策，有责无权就是悲国下，有知无权一线信息就不能避免组织犯错，有利无责就有人搭便车和刷指标、捞一把就走。** 我们上一讲说的指挥官意图，就是要让下级充分理解上级的真实目标；而解决委托—代理问题，就是在这个基础上再追问一句：他听懂之后凭什么愿意按这个目标做？又凭什么不能把目标偷换掉呢？

戏曲思维里崇祯皇帝解决委托—代理问题的办法是"用人不疑，疑人不用"：我跟你赌人品，我要信任你就充分信任你、什么都听你的，可我只要有一次发现你骗了我，我就杀之后快。**现代委托的精髓恰恰是：用人要疑，但是疑心别用来盯人，要用来修结构。** 简单说，委托人有三样东西是绝不能交出去的。第一是**目标解释权**：代理替你做事，但不能由他单方面定义什么叫"为你好"。第二是**信息解释权**：代理向你汇报，但不能让他成为你唯一的信息来源和现实解释者。第三是**最终裁判权**：代理作为执行者不能自己验收自己。这并不容易，你也得有所作为才行——成为委托人，你不必凡事亲自下场干活，但必须学会**提要求、看过程、问证据、验结果**。目标解释权要求你想清楚自己到底想要什么——想想指挥官意图那三个要素：为什么、什么算完成、什么不能牺牲。信息解释权要求你跳出汇报核对事实。霍姆斯特伦还提出过一个**信息量原则**：值得看的信号只有一种，那就是能帮你把"他干得怎么样"从"他说得怎么样"里分离出来的信号。为此你需要拥有不经过代理人的信息通道：可以是原始记录、票据、照片和系统日志，可以是中途检查——别最后一天才验收，可以是第三方验证——审计、验房师、同行评审。**监督不是不信任，监督是信任的基础设施。** 最终裁判权要求你把"什么算做成"写在开工之前、把钱分在节点之后：验收标准要事先白纸黑字，付款要跟着节点走。最终裁判权还包括你要保留**剩余判断权**——合同没写到的地方最后必须还有人说了算：超出预算多少必须你批准，改核心方案必须你批准；同时还要永远保留换人的能力——一个代理人如果知道你离不开他，他会慢慢变成你的控制者。**用人不疑听着大气，实则是失职。**

那你说我怎么能防止被蒙蔽呢？咱们看两个应用场景，先
说装修。差的委托是一句话："预算 20 万，帮我弄好点。"目标没解释、信息全在对方手里、验收全凭最后看一眼——这不叫托付，这叫许愿。好的委托是这样的："预算 20 万以内，水电、防水、环保材料是不可牺牲项；每个阶段拍照留档，材料进场核对品牌型号；付款分四期，防水避水试验通过才付下一笔；主材变更必须我签字确认；留 10% 尾款，入住一个月无重大问题再结。"**头两句是目标解释权；中间是信息解释权——留档、核对型号、按阶段看，把看不见的工程变成看得见的节点；后面是最终裁判权——钱跟着验收走，重大变更保留审批，那笔尾款是你的最终保证。注意这份委托书里没有一句是在道德绑架、没有一处是在猜人心——他不需要代理人是圣人，只需要代理人是正常人，在这个结构里"好干活"就是他最划算的选择，这就是我们讲过的激励相容。**

再比如找一个负责销售增长的核心员工。差的委托很豪迈："你负责增长，用结果说话，我用人不疑。"那么代理人要充数字，最快的路当然是买量、补贴、透支品牌——两年后他可能带着数据和渠道跳槽了。好的委托得是这样的："你负责增长，但用户留存、品牌声誉、合规风险是不可牺牲项；奖金由新增收入、留存率、投诉率和团队协作共同决定；一部分当年发，一部分看第二年的留存；大额投放必须复盘；所有重要数据必须进公司系统，不能只在你个人的表格里。"**一个招聘的小秘密：真正的高手不会被这样的委托吓跑，他反而会松一口气——规则清楚意味着他不用猜你的心思、不用防你事后翻脸，他的功劳算得清、拿得走。差的委托下走的是君子，吸引来的是赌徒。**

韩非比谁都早看见委托—代理问题，但韩非生活在一个只有一个委托人的世界——普天之下只有君主一个甲方，他必须防所有人，所以韩非的答案只能是术。**术是长在一个人身上的东西，不可推广也不可继承——雍正的子孙后代可不一定有他那么强的精力和那么多的心眼。而现代社会人人都是委托人，所以现代的答案必须是可推广的，得靠一套谁都学得会的设计。** 这些年的影视作品喜欢描写宫斗，搞得大家以为现代的办公室里也天天上演甄嬛传——不知宫斗不是中国人的宿命，我们拥有韩非和雍正没有的现代制度条件。**但相信制度不是说出了事反正有法律，制度是要你亲手操作的东西：一份写清楚的合同、一个中途的节点、一笔没动的尾款、一条不经过他手的信息通道。这个世界不是真心对真心就能好的，但也远没有坏到处处尔虞我诈——它总可以被设计成更好。** 好，以上就是今天的全部内容，现代思维工具课，祝您每天都有收获。
`,tg=`# 094丨流程、清单和经验库：把聪明外置成系统

## 讲什么

**组织智慧（"制"）**——制度解决的是权责力和激励约束，让一群人愿意协作、不造假不乱来、把个人努力导向公司利益；但具体做什么则是另一回事。一家公司要成为一台高效率的做事机器，除了制度之外还必须有一个"第三物"：流程、SOP、清单、最佳实践、Playbook、组织智能体……这些可以看成同一种东西的不同形态，**那个东西我们不妨称为"制"——智慧的智、文件的制，如同硬件和软件长在机器身上，制是长在组织身上的聪明。** 制件沉淀方法、标准和经验：如果你把公司想象成一台用人运行的智能体——方法就是技能，标准就是护栏，经验就是记忆。它们合起来让组织会做、做对、越做越会：**制度保证组织不乱，制保证组织不笨。**

## 解决什么真问题

解释"为什么公司大了以后不能只靠聪明人拼命，必须把聪明外置成系统"：1999 年的华为已经是明星企业，可它有几个难看的数字：订单准时交付率只有大约 50%（国际同行 94%），库存一年周转 3.6 次（人家 9.4 次），研发投资回报率只有 IBM 的十分之一。**不是华为人不聪明，恰恰相反，当时华为全靠聪明人拼命、靠英雄四处救火——可是英雄扛不住规模，公司做大了就不能再靠少数个人的聪明才智了。** 任正非的诊断是：公司缺的不是人才，而是技能。于是他重金请来 IBM 帮华为做集成产品开发（IPD）——一套产品开发的"动作脚本"，从需求立项到研发交付，谁在什么时候做什么、跟谁对齐、按什么标准过关，都写成可重复调用的方法。任正非定下著名方针：**先僵化、后优化、再固化**——头几年不许擅自改良，"我们要先买一双美国鞋，不合脚就削足适履"。

## 核心论点

- **技能 = 事情来了大家应该怎么做**：流程规定一件事如何在部门之间流转，SOP 规定一个岗位具体怎样操作，Playbook 是一类场景的打法。它们解决的共同问题是"怎么把意图变成稳定的行动"——关键词是**稳定**。一个技能就是一个脚本，本质上是一个组织的因果假设：如果我们按这个顺序、由这些角色在这些检查点执行这些动作，就能稳定拿到想要的结果。经济学家纳尔逊和温特研究企业演化，把组织的惯例比作企业的基因——公司不是每天早上从零开始想怎么干活的，公司靠一套可重复的技能保存自己的能力。**你不能自己想一出是一出，按照章法做事你才是公司的人，有章法才算正规。**
- **护栏 = 怎么知道做对了、哪些地方绝对不能错**：清单、质量标准、验收条件、风险红线、评审门槛就是护栏。**清单的作用不是让你知道该怎么做，而是防止你做错**——你本来就知道这个任务有 18 个步骤，但经常会漏掉一两步；要有个念清单的人，才能确保整个操作没毛病。2009 年《新英格兰医学杂志》研究：世界卫生组织在八个国家的八家医院推行一份 19 项的手术安全清单，使手术死亡率从 1.5% 降到 0.8%，并发症从 11% 降到 7%——清单上的项目简单得近乎侮辱人（确认病人身份、手术部位、过敏史、清点纱布器械），可全世界训练最有素的外科团队就是会在这些地方翻车——**错误往往不是来自无知，而是来自疲劳、打断、赶时间和"我以为你查过了"。执行清单要有仪式感，要确保团队全体同步：手术清单里最要紧的一项就是切皮之前全体暂停、一起大声核对——从那一刻起，主刀、麻醉师和护士进入了同一个任务世界。** 很多事故不是没人知道，而是 A 以为 B 知道、B 以为 C 会查。**任何不可逆的动作之前都要有护栏：合同签署前、打款前、上线前、删数据前、对外发声前，一定要先停下来观察和确认一下。清单是组织在悬崖边上的深呼吸；护栏要短、要硬、要每一项都可观察可确认。**"是否认真检查"不叫清单，"合同金额是否与报价单一致"才叫清单。清单不是取消判断力，而是提供认知卸载——用外部动作降低脑子的认知负荷：**清单替你记住这些琐事，你的注意力才能解放出来想别的。坏清单说"你别想，照做"；好清单说"这
几样别忘，剩下的请你判断"。**护栏并不会增加多少运营成本，但是缺护栏的公司就是下面这般景象：合同签完了才发现有坑，产品上线了才发现测试没跑，员工离职半年了权限还没收回。**
- **记忆 = 组织学习的根本**：这里的记忆不是动词是名词，不是个人回忆，而是前人经验的压缩——包括最佳实践、失败案例库、复盘、实验记录和知识库。高手读经验库不只是为了照着做，更是为了站上前人的肩膀举一反三。**最佳实践这个
词听起来像是最优，好像抄过来就能用，那岂不就是 SOP 吗？其实最佳实践是在某个情境下被验证过的打法，它嵌在人家的团队、文化、客户和激励结构里。** 管理学家加布里埃尔·苏兰司机有个著名研究：别说抄别的公司，就是同一家公司内部，一个团队的好做法搬到另一个团队都经常失灵，他称之为"知识的内部粘性"——这就是很多公司的"器官移植病"：看别人的 OKR 成功自己也上 OKR，看人家开站立会议自己也开站立会议，殊不知器官是好器官，可你的身体会排异。**正确的用法是把最佳实践当成一段可迁移的因果结构，提取人家的机制和前提，再做本地改写**——改写可以多问这么几个问题：他为什么有效？他依赖什么条件？到了我这哪些要保留、哪些必须变形？
- **失败的经验是更宝贵的记忆，因为它可以直接改进你的制系统**：最好的示范是中国航天。1996 年 2 月 15 日凌晨，长征三号乙火箭在西昌首飞，点火起飞两秒姿态就失控，22 秒后一头撞在山坡上爆炸——那是中国航天最黑暗的一段岁月，从 1992 年起长征火箭接连失利，在国际商业发射市场上的信誉到了谷底。但中国航天从中
学到了真东西：航天系统在绝境之中立下了一条规矩，叫**归零**——任何一个质量问题无论多小，必须归零之后才能放行。归零有五个要求：定位准确、机理清楚、问题复现、措施有效、举一反三。前四条是把这一个问题办成铁案——找到确切位置、查清发生机理、当着大家的面重演一遍、再证明改进措施真的有效；第五条"举一反三"是灵魂——**解决了一个问题还不算完，你必须全系统排查，凡同类设计、同类工艺、同类环节一律照此更新。用现在的话说，这就是迭代：一次事故必须变成一次系统升级。** 归零制度让长征火箭打出了后来那一长串连续成功的记录；2015 年国际标准化组织把这套方法颁布为国际标准 ISO 18238——等于中国航天把自己的伤疤写成了全世界的教科书。**如果一家公司能把同样的错误犯几遍，如果好不容易遇到一个能人他能干得好一点、他一走他 20 年的经验跟着一起走，这家公司就是没有记忆。**
- **技能、护栏、记忆不是三个并行的独立体，而是首尾相连、相互回血的三个环节**：看一个"好方法的一生"——你们公司有个销售发现了一个新打法：大意是面对大客户先别急着演示产品，先花半小时帮客户算一笔账（你们现在这套老系统一年白损失多少钱、用上我们的系统能省多少钱），先算账再演示成交率更高。这最初只是一个变异、一个长在个人身上的野打法：在大多数公司里他的命运跟着这位销售走——这哥们升值打法变成传说，这哥们离职打法就消失了。而公司会让好打法走完一生：**第一步实验**（是打法好还是销售本来就是高手？换个人还灵不灵？什么样的客户灵、什么样的不灵）；**第二步写入记忆**（验证有效就按记忆的写法写下来，机制、前提、边界一样不能少，不然又是一张祖传偏方）；**第三步固化
成技能**（打法反复有效就编码成 SOP：话术、算账模板、培训课件，新销售入职一周就能上手老销售八成的功力——最佳实践是被验证的经验，SOP 是被编码的经验）；**第四步立护栏**（如果执行中发现大家在哪常犯错误，就专门列一份清单）；**第五步回血**（每一单的结果回来，赢在哪、丢在哪，更新记忆；记忆再修订技能和护栏——这就闭环了）。用演化的话说：**创新是变异，实验是选择，流程是保留。所以创新和流程根本不是敌人，它们是同一个演化循环的不同阶段——创新产生技能，流程固化技能，清单提供护栏，最佳实践沉淀记忆。**
- **组织有三重境界**：第一重**人治组织**——一切以老板意图为先，老板让干啥就干啥、不发话事情就停在原地，全靠老师傅手艺、老销售关系和老板脑子里的全局，业务跟人走，规模一大必然乱；第二重**流程组织**——有技能有护栏，人按规定动作干活，稳定可复制可规模化，绝大多数公司毕生的追求就是从第一重爬到第二重——但如果只到这一重，流程一旦神圣化组织就会僵化，一切都走流程求免责，工作就变成合规表演；第三重**学习型组织**——**流程不是最终答案而是当前版本，清单不是仪式而是活跃的风险感知，复盘不是追悼会而是版本更新，整套件永远在被使用也永远在被修改；在这样的公司里，绕开流程不是违规而是信号——例外会被看见、被解释，然后写进下一版。人治组织的聪明长在人身上，流程组织把聪明写进规定动作，学习型组织的聪明被现实持续改写。** 我们说人要服务系统，不是说把人当工具——你服务的内容恰恰是系统自己干不了的事：判断例外、发现异常、处理价值冲突、把今天的教训的记忆化、为结果负责。

## 关键例证 / 金句

- **小团队靠气，大组织靠接口**；缺技能的公司标志性症状：什么事都老板催着才动、客户信息反复丢失、同一件事每个人有每个人的做法、部门之间互相甩锅、新人不知道下一步该找谁——你以为是人不行说我们是草台班子，其实不是人不行，是没有建立属于公司的技能。
- 瑞士奶酪模型的另一面：技能只管把事做下去不管做得对不对——**没有护栏的流程，就是一条不管对错都往前送的传送带。**
- 宋代《天工开物》：宋应星在明末搜集了最顶级的农工技术写成三卷 18 篇，可谓当时的最佳实践——可这本书从来没形成组织记忆：它没被《四库全书》收录、无人再看，到清朝中期在中国就已无人知晓；反倒是日本在 1771 年出了和刻本才让我们今天有机会看到它。**中国从来不缺天才，但是前现代文明没有一套让天才不白活的制。对比之下，科学革命就是这么来的：科学方法不是一套具体的知识，而是一套让聪明可以积累的制件——实验要写到别人能够复现的程度这是技能，同行评审是护栏，学术期刊是记忆。一个天才的发现不会随他的死亡而消失，而是变成下一个天才的起点——科学方法让知识产生复利。**
- 管理者三问：**如果你一休假公司就停摆，那就是技能没写出来；如果你们总在出事后赔钱补救，那就是缺少护栏；如果新人会把老员工踩过的坑挨个再踩一遍，那就是没建立记忆。** 老板管公司一方面是管人，但更重要的是管价值流——客户从哪里进来、谁诊断需求、谁报价、谁交付、谁验收、谁收款、谁续约；这条链是公司的脊柱，部门只是附着在脊柱上的肌肉。**你必须给核心业务一个稳定的技能，给每个不可逆的节点一道护栏，给每一次成办一份记忆。**

## 如何应用

1. **诊断组织**：公司停摆？技能没写出来。总在事后补救？缺护栏。新人重复踩坑？没记忆。用这三问定位组织的短板，然后逐一补齐——先僵化后优化再固化（学习华为 IPD 的导入法：先买一双美国鞋，不合脚就削足适履）。
2. **给不可逆动作设护栏**：合同签署前、打款前、上线前、删数据前、对外发声前——先停下来确认。清单要短、要硬、可观察可确认："合同金额是否与报价单一致"而不是"是否认真检查"。
3. **建立好方法的闭环**：实验→写入记忆→固化为 SOP→立护栏→回血更新。用演化思维看待创新与流程：**创新是变异，实验是选择，流程是保留。** 同时向第三重境界进发——把流程当当前版本而非最终答案，把绕开流程当信号而非违规。

---

## 全文（清洗后的课程转录，重点加粗+底纹）

欢迎来到现代思维工具课，我是万维钢。我们这个领导者模块已经讲了很多制度建设的内容，但公司并不只是由人和制度组成的：制度解决的是权责力和激励约束，让一群人愿意协作、不造假不乱来、把个人努力导向公司利益；但具体做什么则是另一回事。**一家公司要成为一台高效率的赚钱或者说做事机器，除了制度之外，还必须有一个第三物。** 你肯定早就听说过一些相关的名词：流程、SOP、清单、最佳实践、Playbook，包括组织智能体——我们也许可以把它们看成是同一种东西的不同形态，那个东西我们不妨称为**"制"**（智慧的智、文件的制）。**如同硬件和软件长在机器身上，制是长在组织身上的聪明。制件沉淀方法、标准和经验：如果你把公司想像成一台用人运行的智能体——方法就是技能，标准就是护栏，经验就是记忆。它们合起来让组织会做、做对、越做越会。制度保证组织不乱，制保证组织不笨。** 理想情况下不是让制迁就人，而是人为公司的制系统服务、服从维护完善并升级这套系统。人可以来可以走，系统永远在成长。这套系统由技能、护栏、记忆组成，咱们一个一个说。

**技能就是事情来了大家应该怎么做。** 流程、SOP、操作指南这些都是技能，只是颗粒度粗细不同：流程规定一件事如何在部门之间流转，SOP 规定一个岗位具体怎样操作，Playbook 是一类场景的打法。它们解决的都是怎么把意图变成稳定的行动——关键词是**稳定**。一个技能就是一个脚本、可以说是一个剧本，它本质上是一个组织的因果假设：如果我们按这个顺序、由这些角色在这些检查点执行这些动作，就能稳定地拿到想要的结果。经济学家纳尔逊和温特研究企业演化，把组织的惯例比做企业的基因：**公司不是每天早上从零开始想怎么干活的，公司靠一套可重复的技能保存自己的能力。说白了就是你不能自己想一出是一出，按照章法做事你才是公司的人，有章法才算正规。**

举个例子：1999 年的华为已经是明星企业了，可它有几个难看的数字——订单准时交付率只有大约 50%，而国际同行是 94%；库存一年周转 3.6 次，人家是 9.4 次；而且华为的研发投资回报率只有 IBM 的十分之一。**不是华为人不聪明，恰恰相反，当时华为全靠聪明人拼命、靠英雄四处救火。可是英雄扛不住规模，公司做大了就不能再靠少数个人的聪明才智了。** 任正非的诊断是：公司缺的不是人才，而是技能。于是他重金请来 IBM 帮华为做集成产品开发（IPD）——这是一套产品开发的动作脚本：从需求立项到研发交付，谁在什么时候做什么、跟谁对齐、按什么标准过关，都写成可重复调用的方法。为了确保华为借此从骨子里变成一家有技能的公司，任正非定下了一个著名的方针：**先僵化、后优化、再固化**——僵化就是原样照搬，头几年不许擅自改良，用任正非的话说"我们要先买一双美国鞋，不合脚就削足适履"。为什么要搞这么极端？就是因为任正非看明白了：企业大到一定程度，个人的聪明必须被翻译成技能，否则聪明就会被规模吞噬。**小团队靠气，大组织靠接口。**

一家缺技能的公司会有几个标志性症状：什么事都老板催着才动，客户信息反复丢失，同一件事每个人有每个人的做法，部门之间互相甩锅，新人不知道下一步该找谁。你以为是人不行、说我们是草台班子——**其实不是人不行，是没有建立属于公司的技能。**

但技能只管把事做下去，不管做得对不对——**没有护栏的流程，就是一条不管对错都往前送的传送带。** 护栏回答的是另一种问题：怎么知道做对了？哪些地方绝对不能错？清单、质量标准、验收条件、风险红线、评审门槛，这些就是护栏。一说清单你可能觉得无非是给新手用的小抄，上面写着第一步该干啥、第二步该干啥，就像旅游攻略——你说的那个是 SOP，那不是清单。**清单的作用不是让你知道该怎么做，而是防止你做错：你本来就知道这个任务有以下 18 个步骤，但经常会漏掉一两步，要有个在旁边给你念清单的人，你们才能确保整个操作没毛病。** 2009 年发表在《新英格兰医学杂志》的一项研究显示：世界卫生组织在八个国家的八家医院推行一份 19 项的手术安全清单，使得手术死亡率从 1.5% 降到 0.8%，并发症从 11% 降到 7%。那个清单上的项目简单得近乎侮辱人：确认病人身份、确认手术部位、确认过敏史、清点纱布和器械——可全世界训练最有素的外科团队就是会在这些地方翻车。**错误往往不是来自无知，而是来自疲劳、打断、赶时间和"我以为你查过了"。** 执行清单要有仪式感，要确保团队全体同步：比如手术清单里最要紧的一项就是切皮之前全体暂停、一起大声核对——从那一刻起，主刀、麻醉师和护士进入了同一个任务世界。**很多事故不是没人知道，而是 A 以为 B 知道、B 以为 C 会查。任何不可逆的动作之前都要有护栏：合同签署前、打款前、上线前、删数据前、对外发声前，一定要先停下来，再观察和确认一下。清单是组织在悬崖边上的深呼吸。护栏要短、要硬、要每一项都可观察、可确认——"是否认真检查"不叫清单，"合同金额是否与报价单一致"才叫清单。** 清单不是取消判断力，而是提供认知卸载：用外部动作降低脑子的认知负荷。**清单替你记住这些琐事，你的注意力才能解放出来想别的。坏清单说"你别想，照做"；好清单说"这几样别忘，剩下的请你判断"。** 护栏并不会增加多少运营成本，但是缺护栏的公司就是下面这般景象：合同签完了才发现有坑，产品上线了才发现测试没跑，员工离职半年了权限还没收回。

**记忆则是组织学习的根本。** 这里说的记忆不是动词是名词，不是个人回忆，而是前人经验的压缩。公司的记忆包括最佳实践、失败案例库、复盘、实验记录和知识库。高手读经验库不只是为了照着做，更是为了站上前人的肩膀举一反三。**最佳实践这个词听起来像是最优，好像抄过来就能用，那岂不就是 SOP 吗？其实最佳实践是在某个情境下被验证过的打法，它嵌在人家的团队、文化、客户和激励结构里。** 管理学家加布里埃尔·苏兰司机有个著名研究：别说抄别的公司，就是同一家公司内部，一个团队的好做法搬到另一个团队都经常失灵，他称之为"知识的内部粘性"——这就是很多公司的"器官移植病"：看别人的 OKR 成功自己也上 OKR，看人家开站立会议自己也开站立会议，殊不知器官是好器官，可你的身体会排异。**正确的用法是把最佳实践当成一段可迁移的因果结构：提取人家的机制和前提，再做本地改写。** 改写可以多问这么几个问题：他为什么有效？他依赖什么条件？到了我这哪些要保留、哪些必须变形？

失败的经验是更宝贵的记忆，因为它可以直接改进你的制系统。这方面有个最好的示范，可能你都想不到，是中国航天。1996 年 2 月 15 日凌晨，长征三号乙火箭在西昌首飞，点火起飞两秒姿态就失控，22 秒后一头撞在山坡上爆炸——那是中国航天最黑暗的一段岁月：从 1992 年起长征火箭接连失利，在国际商业发射市场上的信誉到了谷底。可能因为不是啥好消息，这段往事没有被好好宣讲过，但是中国航天从中学会真东西了：航天系统在绝境之中立下了一条规矩，叫**归零**——任何一个质量问题无论多小，必须归零之后才能放行。归零有五个要求：**定位准确、机理清楚、问题复现、措施有效、举一反三**。前四条是把这一个问题办成铁案——找到确切位置、查清发生机理、当着大家的面重演一遍、再证明改进措施真的有效；第五条"举一反三"是灵魂：**解决了一个问题还不算完，你必须全系统排查，凡同类设计、同类工艺、同类环节一律照此更新。用现在的话说，这就是迭代——一次事故必须变成一次系统升级。** 归零制度让长征火箭打出了后来那一长串连续成功的记录；2015 年国际标准化组织把这套方法颁布为国际标准 ISO 18238——等于中国航天把自己的伤疤写成了全世界的教科书。**如果一家公司能把同样的错误犯几遍，如果好不容易遇到一个能人他能干得好一点、他一走他 20 年的经验跟着一起走，这家公司就是没有记忆。**

技能、护栏、记忆不是三个并行的独立体，你可以把它们看成首尾相连、相互回血的三个环节。咱们看看一个好方法的一生：你们公司有个销售发现了一个新打法——大意是面对大客户先别急着演示产品，先花半小时帮客户算一笔账："你看你们现在这套老系统一年白损失多少钱，用上我们的系统能省多少钱"，先算账再演示，成交率显著更高。这可以说是一个最佳实践，但它一开始只是一个变异、一个长在个人身上的野打法：在大多数公司里，它的命运跟着这位销售走——这哥们升值，打法变成传说；这哥们离职，打法就消失了。而公司会让好打法走完一生：**第一步实验**——是打法好，还是销售本来就是高手？换个人还灵不灵？什么样的客户灵、什么样的不灵？**第二步写入记忆**——验证有效就按记忆的写法写下来，机制、前提、边界一样不能少，不然又是一张祖传偏方；**第三步固化成技能**——打法反复有效就编码成 SOP：话术、算账模板、培训课件，新销售入职一周就能上手老销售八成的功力。**最佳实践是被验证的经验，SOP 是被编码的经验。** 第四步**立护栏**——如果执行中发现大家在哪常犯错误，就专门列一份清单；第五步**回血**——每一单的结果回来，赢在哪、丢在哪，更新记忆，记忆再修订技能和护栏——这就闭环了。用演化的话说：**创新是变异，实验是选择，流程是保留。所以创新和流程根本不是敌人，它们是同一个演化循环的不同阶段：创新产生技能，流程固化技能，清单提供护栏，最佳实践沉淀记忆。** 往大了说，科学革命不就是这么来的吗？**科学方法不是一套具体的知识，而是一套让聪明可以积累的制件：实验要写到别人能够复现的程度，这是技能；同行评审是护栏；学术期刊是记忆。一个天才的发现不会随他的死亡而消失，而是变成下一个天才的起点——科学方法让知识产生复利。** 对比之下，中国的宋应星在明朝末年搜集了最顶级的农工技术，写成三卷 18 篇的《天工开物》，这可谓是当时的最佳实践——可是这本书从来没有形成组织记忆：它没有被《四库全书》收录，无人再看，到清朝中期在中国就已经无人知晓了；反倒是日本在 1771 年出了和刻本，我们今天才有机会看到它。**中国从来不缺天才，但是前现代文明没有一套让天才不白活的制。**

总结来说，老板管公司一方面是管人，但更重要的是管价值流——也就是客户从哪里进来、谁诊断需求、谁报价、谁交付、谁验收、谁收款、谁续约。**这条链是公司的脊柱，部门只是附着在脊柱上的肌肉。你必须给核心业务一个稳定的技能，给每个不可逆的节点一道护栏，给每一次成办一份记忆。** 如果你一休假公司就停摆，那就是技能没写出来；如果你们总在出事后赔钱补救，那就是缺少护栏；如果新人会把老员工踩过的坑挨个再踩一遍，那就是没建立记忆。

在制的意义上，一个组织有三重境界。**第一重是人治组织**：一切以老板的意图为先，老板让干啥就干啥，老板不发话事情就停在原地。这种组织全靠老师傅的手艺、老销售的关系和老板脑子里的全局，业务跟人走，也是一种人身依附，规模一大必然乱。**第二重是流程组织**：有技能有护栏，人按规定动作干活，稳定可复制可规模化——绝大多数公司毕生的追求就是从第一重爬到第二重。但如果只到这一重，流程一旦神圣化组织就会僵化：一切都走流程求免责，工作就变成合规表演。**第三重境界是学习型组织**：**流程不是最终答案而是当前版本，清单不是仪式而是活跃的风险感知，复盘不是追悼会而是版本更新，整套制永远在被使用、也永远在被修改。** 在这样的公司里，绕开流程不是违规而是信号——例外会被看见、被解释，然后写进下一版。**人治组织的聪明长在人身上，流程组织把聪明写进规定动作，学习型组织的聪明被现实持续改写。** 我们说人要服务系统，不是说把人当工具——你服务的内容恰恰是系统自己干不了的事：判断例外、发现异常、处理价值冲突、把今天的教训的记忆化、为结果负责。我们把公司想像成一个智能体，这个智能体不会自动演化，它需要你不断地输入。好，以上就是今天的全部内容，现代思维工具课，祝您每天都有收获。
`,rg=`# 096丨基线漂移：不正常会慢慢变得正常

## 讲什么

**基线漂移（shifting baseline）**——2005 年冬天，一家做电暖器的公司发现一批产品的开关有毛病，故障率 0.1%。创始人陈总下令把发出去的货全部追回连夜召回——经销商都说行业平均故障率是 2%，你这已经是优等生了，陈总却说"行业是行业，我们是我们，我们的东西是放在人家卧室里的，不能有起火隐患"，那次召回花掉了公司当年一半的利润。2015 年同一家公司，故障率 0.8%，PPT 配的标题却是"质量指标持续优于行业均值"；2025 年还是这家公司，故障率 2.4%，没有人讨论它，因为内部标准是 3%。**新来的质量工程师问为什么是 3%，主管想了想说：一直都是这样。** 陈总偶然听到这个对话，想起 20 年前的那次产品召回，有种恍如隔世之感——以前连 0.1% 的故障率都忍不了，现在怎么就自动定成 3% 了呢？**不是公司出了坏人，也不是谁做出过明确的错误决定——一切都是潜移默化的改变。** 很多人管这叫组织的熵增，学术界有个更精确的说法，叫基线漂移。

## 解决什么真问题

解释"为什么组织会不知不觉地衰败，而每个成员都觉得一切正常"：基线漂移最早出自渔业管理。1995 年渔业科学家丹尼尔·保利发现渔业管理有个大盲点：评估鱼群衰退你得有个固定基准才行，可是每一代渔业科学家都不自觉地把"自己入行时见到的鱼群规模"当基准——每一代科学家都只看见自己职业生涯里那一小段下跌，谁也没看见三代人加起来跌掉了多少。**基线漂移的要害不是世界变差，而是评价世界的尺也跟着一起变差——这是连温度计都跟着换了的温水煮青蛙。** 基线漂移让人失去的不只是鱼，更是比较，甚至是想象。

## 核心论点

- **基线漂移的三个心理学机制**：①**前景理论**——人对得失的感受不取决于绝对水平，而取决于跟参照点相比的变化（月薪两万幸不幸福取决于你之前的月薪是一万还是五万），基线漂移是趁你不注意把参照点往下挪；②**适应水平理论**（哈里·赫尔森）——人的感官判断依赖于过去刺激的平均水平（搬进临街的房子头一星期被吵得睡不着，三个月就适应了），适应让我们能与恶劣现实共处，但往往只是学会了不再喊；③**偏差正常化**（社会学家戴安·沃恩）——一个违反规范的做法，只要没有立刻出事，组织就会逐渐把它接受为正常操作，下次做起来就能心安。**参照点会挪，感官会钝，偏差会转正——这三个机制组成了一台自动调节标准的仪器：环境变得多烂，它就把"正常"调到多烂。短期它能让我们暂时度过难关，长期它导致衰败。**
- **基线漂移的六步进程**：第一步**压力之下的一次小越界**（这个月交付来不及了，检验环节不得不简化一次，就这一次下不为例——说这话的可能是全公司最负责的人，还专门开会解释这次为什么特殊）；第二步**没出事**（这是整条链上最危险的一环——没出事被当成证据："你看简化了也没事"，侥幸被当成了安全）；第三步**魄力有了案例**（下次压力再来连会都不用开了，因为上次就是这么干的）；第四步**主客易位**（简化版成了默认动作，想走老流程反而要特批、要被质问"你为什么耽误进度"）；第五步**代际失忆**（新人入职学的就是简化版，他不知道存在过老版本，他认为流程本来就该是这样）；第六步**免疫反应**（这时有人对现状不满、拿历史说事，会遭到全体白眼："你这是不信任领导和兄弟部门""你是不顾大局"）。**到这一步系统不但已经不在乎原来的错误，反而对纠偏长出了抗体——越界无事、案例默认、失忆排异，每一步都合理，每一步都只挪一点点，每一步都不值得大惊小怪，但每一步都在坚定地变坏。**
- **明朝太监干政就是一部基线漂移史**：洪武十七年朱元璋在宫门立了一块三尺铁牌，上刻 11 个字："内臣不得干预政事，预者斩"——这底线写得够硬吧？但漂移很快就开始了：先是朱棣起兵南下，太监在军情上立过功，于是委以大任；宣德年间皇帝发现政务太重批不完，就设了内书堂请翰林学士教小太监读书识字帮皇帝代批红——太监只是秘书，似乎也不叫干政吧？可你别忘了太祖定的规矩里太监原本是不许识字的；正统年间皇帝九岁登基，从小教他读书的太监王振顺势掌权；到天启年间终于迎来了魏忠贤——从"内臣不得干预政事，预者斩"到"请以内臣配享孔子"，经历了 240 多年。**中间每一步都有当时的道理，也未必没有人表达过不满，但是漂移从未停止。**

## 关键例证 / 金句

- 佛罗里达 Key West 码头从 1956 年以来的游客钓鱼留影：半个世纪里照片上战利品鱼的平均个头从 19.9 公斤缩水到 2.3 公斤，缩了将近九成——**可是照片上渔民的姿势和笑容一模一样。他们面前的鱼越来越小，可他们都以为那条鱼代表着海洋。**
- 嘉庆回忆起跟随乾隆检阅八旗射箭虚发、人马坠地的往事，在上谕里说了一句特别扎心的话：**"当时以为是一代人的笑话，可能是下一代人的天花板。"**
- 大清的八旗：刚入关时号称"满万不可敌"，乾隆南巡时检阅驻防八旗士兵已经"射箭脱靶、骑马坠地"，嘉庆赶上白莲教起义想调八旗出兵，竟然连一支队伍都拉不出来。
- **管理学的几个办法**：把底线写硬（哪些事故必须停线、哪些风险必须上报，谁都可以喊停）；给坏消息留一条专线（不惩罚坏消息的人，只惩罚隐瞒消息的人）；拿外部的尺量自己（客户反馈、对手产品、新员工的大惊小怪）；做基线审计（每年正式问一遍全公司：我们现在习以为常的事情里，有哪些在五年前会被认为是不可接受的）。但万维钢高度怀疑它们的有效性——因为这些都是防守：**底线是静态的，压力是动态的；规矩立在那里不动，绕过规矩的理由每天都在生长。你堵住 100 个口子，第 101 个口子还会找上门。防守是被动的，长期的防守是绝望的。**
- 星巴克的教训：尼科尔空降 CEO 宣布改革，口号叫"回到星巴克"——砍菜单、四分钟出品、恢复陶瓷杯和手写名字，堪称教科书级的反击基线漂移。可这改革在中国无法阻止星巴克输给瑞幸：瑞幸把一杯咖啡的参照点从 30 多块改写成 9.9 元。**消费者不觉得瑞幸便宜，只觉得星巴克贵——瑞幸正在重新定义什么是正常，星巴克怎么能靠回到过去来抗衡呢？就算你把 2025 年的星巴克精确恢复成 1995 年的样子，你得到的也不是 1995 年的星巴克，而只是它的尸体。真正的过去不但有状态 F，还有变化率 dF/dt——今天的制度、流程、打法都是过去持续探索的结果，如果你只保存这些结果却停止了探索，那你不是继承过去，你是背叛。**

## 如何应用

1. **识别自己是否身处漂移**：问"我们现在习以为常的事情里，有哪些在五年前会被认为是不可接受的？"用外部尺子量自己——客户反馈、对手产品、新员工的大惊小怪，都是防止基线漂移的信号源。
2. **别只想防守，要想着进攻**：基线漂移是不进则退的过程。公司固然要坚守安全、质量和诚信的底线、跟上当今世界最佳实践的前沿，但作为领导心中一定要有一个理想蓝图——它在世界上还不存在，是你想把公司带到的地方。**如果你没有这个蓝图，只想着"公司原来是什么样就还让他是什么样"，你就只能眼睁睁看着基线往衰败的方向漂移。**
3. **个人层面**：当你试图保住现状的时候，你其实早已在漂移了。年轻人从不"保持身材"也不"养生"，他们只关心 dF/dt。**如果发现 dF/dt 小于 0，正确的做法不是祈祷它等于零，而是去找个新的成长点对抗漂移——做个理想主义者：心里装着一幅事情本来应该是什么样的图景，因此看什么都不顺眼的人。读书不是为了惯，而是为了看不惯。**

---

## 全文（清洗后的课程转录，重点加粗+底纹）

欢迎来到现代思维工具课，我是万维钢。上一讲咱们说到公司是一台用人运行的智能体，需要你不断地输入。这一讲咱们说要是你不输入会发生什么？它不会原地踏步，它会衰败。我给你说一个假想的场景。**2005 年冬天，一家做电暖器的公司发现一批产品的开关有毛病，故障率 0.1%。创始人陈总下令把发出去的货全部追回连夜召回。** 经销商都说：咱行业平均故障率是 2%，你这已经是优等生了。陈总却说："行业是行业，我们是我们。我们的东西是放在人家卧室里的，不能有起火隐患。"那次召回花掉了公司当年一半的利润。**2015 年同一家公司，故障率 0.8%，PPT 配的标题却是"质量指标持续优于行业均值"。** 台下有个老员工嘟囔了一句："哥，十年前这得炸锅。"年轻同事笑他说："那时候公司小，折腾。"**2025 年还是这家公司，故障率 2.4%，没有人讨论它，因为内部标准是 3%。** 有个新来的质量工程师问了一句："为什么是 3%？"主管想了想说："一直都是这样。"陈总偶然听到了这个对话，他想起 20 年前的那次产品召回，有一种恍如隔世之感：以前连 0.1% 的故障率都忍不了，现在怎么就自动定成 3% 了呢？**是公司出了坏人吗？还是我们做出过什么明确的错误决定？一切都是潜移默化的改变。** 很多人管这叫组织的熵增，学术界有个更精确的说法，叫**基线漂移**。

基线漂移这个词最早出自渔业管理。1995 年，渔业科学家丹尼尔·保利发现渔业管理有个大盲点：评估鱼群衰退你得有个固定基准才行，可是**每一代渔业科学家都不自觉地把"自己入行时见到的鱼群规模"当做基准**——每一代科学家都只看见自己职业生涯里那一小段下跌，谁也没看见三代人加起来跌掉了多少。设想一个村的渔民：祖父年轻时出海，大鱼要几个人一起抬，回村像过节；父亲年轻时鱼小了些，但够卖够吃，他听老人吹"以前鱼多得吓人"，只当是老人爱夸张；孙子放假跟船出海，钓上来几条小鱼，大家开心合影发朋友圈"今天收获不错"——殊不知那只是他所理解的"不错"。有研究者翻出美国佛罗里达 Key West 码头从 1956 年以来的游客钓鱼留影：**半个世纪里照片上战利品鱼的平均个头从 19.9 公斤缩水到 2.3 公斤，缩了将近九成——可是照片上渔民的姿势和笑容一模一样。他们面前的鱼越来越小，可他们都以为那条鱼代表着海洋。基线漂移的要害不是世界变差，而是评价世界的尺也跟着一起变差——这是连温度计都跟着换了的温水煮青蛙。**

组织也是如此。大清八旗刚入关时号称"满万不可敌"，可是 1784 年乾隆南巡在杭州检阅驻防八旗，士兵已经"射箭脱靶、骑马坠地"；15 年后嘉庆赶上白莲教起义想调八旗出兵，竟然连一支队伍都拉不出来，只能靠地方招募的乡勇。嘉庆回想起那年跟随乾隆检阅八旗射箭虚发、人马坠地的往事，在上谕里说了一句特别扎心的话：**"当时以为是一代人的笑话，可能是下一代人的天花板。"** 基线漂移让人失去的不只是鱼，更是比较，甚至是想象。

你很容易从心理学上理解基线漂移，这里有三个机制。一个是**前景理论**：人对得失的感受不取决于绝对水平，而取决于跟参照点相比的变化——月薪两万幸不幸福，取决于你之前的月薪是一万还是五万。**基线漂移是趁你不注意把参照点往下挪。** 一个是心理学家哈里·赫尔森的**适应水平理论**：人的感官判断依赖于过去刺激的平均水平——你搬进一间临街的房子，头一个星期被车流吵得睡不着，可是三个月你就适应了，甚至注意不到车流的噪声。**适应让我们能够跟恶劣现实共处，但往往只是学会了不再喊。** 还有一个是社会学家戴安·沃恩提出的**偏差正常化**：一个违反规范的做法，只要没有立刻出事，组织就会逐渐把它接受为正常操作，下次做起来就能心安。**参照点会挪，感官会钝，偏差会转正。这三个机制组成了一台自动调节标准的仪器：环境变得多烂，它就把"正常"调到多烂。在短期，它能让我们暂时度过难关——人总得跟自己过得去吧；但是在长期，它导致衰败。**

咱们看看组织的基线漂移是怎么一步一步完成的。**第一步是压力之下的一次小越界**：这个月交付实在来不及了，检验环节不得不简化一次，就这一次、下不为例——说这话的不但不是坏人，而且可能是全公司最负责的人，他还专门开了个会解释这次为什么特殊。**第二步，没出事。这是整个链条上最危险的一环**，因为没出事会被当成证据："你看简化了也没事"，也许老流程本来就多余——侥幸被当成了安全。**第三步，魄力有了案例**：下次压力再来，连会都不用开了，因为上次就是这么干的。**第四步，主客易位**：简化版成了默认动作，想走老流程反而要特批、要被质问"你为什么耽误进度"。**第五步，代际失忆**：新人入职学的就是简化版，他不知道存在过老版本，他认为流程本来就该是这样的。**第六步，免疫反应**：如果这时候有人对现状不满、拿历史说事，说我们应该恢复老规矩，他会遭到全体白眼——"你这是不信任领导和兄弟部门""你这是不顾大局"。**到这一步，系统不但已经不在乎原来的错误，反而对纠偏长出了抗体。越界无事、案例默认、失忆排异——每一步都合理，每一步都只挪一点点，每一步都不值得大惊小怪，但是每一步都在坚定地变坏。**

管理学届研究基线漂移几十年，也找到了几个办法：一个是把底线写硬——哪些事故必须停线、哪些风险必须上报，谁都可以喊停；一个是给坏消息留一条专线——不惩罚坏消息的人，只惩罚隐瞒消息的人，而且有越级通道；还有一个是拿外部的尺量自己——客户的反馈、对手的产品、新员工的大惊小怪；还有基线审计——每年正式地问一遍全公司："我们现在习以为常的事情里，有哪些在五年前会被认为是不可接受的？"**这些方法无疑都是有用的，但是我高度怀疑它们的有效性。** 我给你说两个案例。先看一段明朝故事：洪武十七年，朱元璋生怕后世有太监干政，就在宫门立了一块三尺铁牌，上刻 11 个字："内臣不得干预政事，预者斩。"这底线写得够硬吧？但是漂移很快就开始了：先是朱棣起兵南下，太监在军情上立过功，于是委以大事（郑和下西洋的正和就是太监），朱棣可能说"人家办个特殊任务而已，不能叫干政"；宣德年间，皇帝发现政务太重、章奏都批不完，就设了内书堂，请翰林学士教小太监读书识字，好帮皇帝代批红——太监只是秘书，这似乎也不叫干政吧？可你别忘了，太祖定的规矩里太监原本是不许识字的；正统年间因为皇帝九岁登基，从小教他读书的太监王振就顺势掌权，等到太皇太后去世，王振不但直接总揽政务，而且把宫门口那块铁牌给搬走了；然后成化有汪直、正德有刘瑾……一直到天启年间，终于迎来了魏忠贤：天启六年浙江巡抚潘汝桢上书请求给魏忠贤建生祠，各地督抚如梦初醒，一年之内生祠遍天下，国子监生陆万龄还上书要求让魏忠贤配享孔子。**从"内臣不得干预政事，预者斩"到"请以内臣配享孔子"，经历了 240 多年。中间每一步都有当时的道理，也未必没有人表达过不满，但是漂移从未停止。**

可能你说现代商业世界有合同有法律，这就是外部的尺、就可以作为基线审计了，对吧？那我们就再来看一个发生在法治社会的现象。现在中国制造业的一个大问题是供应商给主机厂交了货却拿不到钱，总给你先欠着。2020 年公布施行的《保障中小企业款项支付条例》里对付款期限已经有要求，当时的口径是 60 天。想象你是个汽车零部件供应商，主机厂说这批货款 90 天结，你怎么办？你不能丢单，于是你只能接受；于是第二年 120 天，后年不但更长、付的还不是现金是商业汇票、到期还能再滚一滚。2024 年按车企财报口径，比亚迪和吉利的平均付款周期是 127 天、长城 163 天、上汽 164 天。供应商第一年觉得是屈辱，第二年觉得是行情，第三年招新会计的时候直接把 180 天写进了现金流模型。2025 年国家又发布了条例的修订版，把原来主要压在机关和事业单位身上的 60 日硬期限进一步压到了大型企业向中小企业付款上，还堵住了用商业汇票之类的口子；于是一汽、东风、广汽、吉利、长城、小米、理想等 17 家车企集体发布声明承诺对供应商的账期不超过 60 天，一时间举国刷屏、供应商奔走相告、媒体称之为行业里程碑。**可是你发现没有——60 天本来是底线，现在 60 天是法规说得够明白了吧、玩家也都认可了吧，结果怎样呢？根据金融时报 2026 年 5 月的报道，比亚迪在从迪链这类供应链金融工具转向更正规票据和现金支付，说明监管有作用，但比亚迪的付款周期仍然高达 123 天，只比一年前短四天；一些小的供应商收款状况开始改善，但两家大的供应商说付款节奏没有变化。基线只是稍有停滞，然后继续漂移。**

**因为这些办法之所以效果有限，是因为它们都是在防守。底线是静态的，压力是动态的；规矩立在那里不动，绕过规矩的理由每天都在生长。你堵住 100 个口子，第 101 个口子还会找上门。防守是被动的，长期的防守是绝望的。如果你治理基线漂移的方法是回到过去，你注定失败。**

咱们举个例子，星巴克。星巴克曾经号称是人们在家庭和工作之外的"第三空间"，现在则越来越像一个外卖取餐台，而且涨价越来越勤、队伍越来越长、体验越来越差。2024 年 9 月布莱恩·尼科尔空降出任 CEO 宣布启动改革，口号就叫"回到星巴克"：他们把菜单砍掉 30% 提高效率、承诺点单四分钟出品、门店恢复陶瓷杯和舒适的椅子、咖啡师重新在杯子上手写顾客的名字——每一条都在把漂掉的体验往回拉，堪称教科书级的反击基线漂移。这套改革在美国暂时效果尚可，在中国却是无法阻止星巴克输给瑞幸：2025 年 11 月星巴克出售了中国零售业务的权益，而当时瑞幸总门店数已经是星巴克中国门店数的三倍以上。**尼科尔的改革是防守，可人家瑞幸是进攻的：瑞幸把中国市场上"一杯咖啡"的参照点从 30 多块改写成 9.9 元。消费者不觉得瑞幸便宜，只觉得星巴克贵——瑞幸正在重新定义什么是正常，星巴克怎么能靠回到过去来抗衡呢？其实"回忆"一出来，基线就已经漂移了。尼科尔想回去的那个 90 年代的星巴克，是一家不停发明东西的公司：它把社会学家雷·奥登博格的"第三空间"概念搬进了商业，把星冰乐做成了全球产品，又把意式浓缩咖啡卖给了喝惯了滴滤咖啡的美国人。90 年代的星巴克之所以伟大，不是因为它保持了什么，而是因为它在进攻。就算你把 2025 年的星巴克精确恢复成 1995 年的样子，你得到的也不是 1995 年的星巴克，而只是它的尸体。真正的过去不但有状态 F，还有变化率 dF/dt——F 是状态，T 是时间，dF/dt 就是状态随时间变化的快慢和方向。今天的制度、流程、打法、商业模式，都是过去持续探索的结果；如果你只保存这些结果、却停止了探索，那你不是继承过去，你是背叛。** 公司大了都爱说"要保持创始时代的优良传统"，那请问你要保持的到底是当年的那些做法，还是当年产生那些做法的劲头呢？如果一代人只继承了父亲的家业而没有继承精神，最后被一个有创造精神的对手打败了，那我们大约可以说：那个对手比二代更像二代的父。

**这样说来，基线漂移是一个不进则退的过程——别光想着不退，你应该想怎么进。** 公司固然要坚守安全、质量和诚信的底线，要跟上当今世界最佳实践的前沿；但作为领导，心中一定还要有一个理想蓝图——它在世界上还不存在，是你想把公司带到的地方：如果一切按照你的心意，这家公司应该是什么样？你们应该提供什么样的产品和服务？信息应该怎样流动？人应该怎样激励？客户应该被怎样对待？**如果你没有这么一个蓝图，只想着"公司原来是什么样就还让他是什么样"，你就只能眼睁睁地看着基线往衰败的方向漂移。其实个人的成长也是如此：当你试图保住现状的时候，你其实早已在漂移了。年轻有冲劲的人从来不想保持身材、更不想养生，他们只关心 dF/dt。如果你发现 dF/dt 小于 0，你正确的做法不是祈祷它等于零，而是去找个新的成长点对抗漂移。**

我的建议是：你应该做个**理想主义者**。理想主义者就是心里装着一幅"事情本来应该是什么样"的图景、因此看什么都不顺眼的人。普通人到哪都先学规矩，越学越认同；理想主义者却总是拿现实跟他的理想对比，然后满眼都是差距——这不对、那也不对、这个明明可以更好。**我们读书不是为了惯，而是为了看不惯：书里存着人类到过的最高处和可以到的更高处——最好的制度、最高级的思想、最聪明的打法、最有尊严的生活。因为你知道了好的，所以你容忍不了差的。所以如果你接手一家公司、一个部门、一摊事，你就会憋着劲想把它带到更好的地方去。领导领导，别人不知道该去哪、你领着走才叫领导。心里没有理想图景的人不应该当领导，他应该被领导。** 好，以上就是今天的全部内容，现代思维工具课，祝您每天都有收获。
`,lg=`# 097丨认领、授予和授权：怎样从"能领导"变成"是领导"

## 讲什么

**认领 / 授予 / 授权**——这是我们领导者系列的最后一讲，探讨一个很多人追问的问题：我学了这么多领导力技能，心中也有一个远大的图景，可是人家没让我当领导，我怎么办呢？有些人因为有钱当老板而获得权力，有些人因为裙带关系获得权力，那些是你不能指望的，你只能指望自己的能力。心法出自密歇根大学的两位组织行为学者斯科特·德鲁和苏珊·阿什福德在 2010 年提出的**领导身份建构模型**——把这个模型稍微扩充一步，就是"没钱没背景的人逆袭获得权力的攻略"。整个思路很简单：**你要先用领导力赢得地位，再靠地位获得权力。** 获得正式权力你需要前后收集三张签名：**认领**（自己向众人表明你有领导力）、**授予**（同事用领导力赢得地位——"我们愿意听你的判断，让你代表我们"）、**授权**（组织因你有地位而给你相应的职位、资源和权限）。

## 解决什么真问题

回答"为什么最优秀的个人贡献者往往不是最好的领导者、为什么有权力的位置不会凭业绩自动降临"：2019 年明尼苏达大学、麻省理工学院和耶鲁大学的三位经济学家分析了美国 131 家公司 38843 名销售员的数据，发现公司确实偏爱把销售冠军提拔成经理——**但销售员晋升后给团队带来的增值，和他晋升前的销售业绩是负相关的，简单说销售冠军的领导水平往往还不如普通销售。最好的个人贡献者不一定是最好的领导者，因为会做事和能让一群人共同做事是两种本事。** 而要获得权力，光有领导力也不够——你说自己有领导力，群众也不一定真跟你走；就算群众相信你，组织也不一定愿意对你下注。**领导身份由你和人群在互动中共同建构：首先你要用言语和行动去认领领导者身份，然后是别人接受了你的带领、以追随者的姿态回应，也就是授予你这个身份，身份才能成立。** 这个机制有实验证明：同样一次领导认领，如果有同伴接受，旁观者就更把认领者视为领导；如果遭到拒绝，领导身份就立不住。

## 核心论点

- **权力的本质是信用而非奖品**：很多人以为只要好好干活、做出成绩被上面看见就会获得提拔，或者至少应该获得提拔——你把权力想像成一种奖品，那就想错了。**职位不是毕业证，它更像银行授信：先给你一小圈额度，看你能不能把它变成集体的结果，变成了再加一圈；每加一圈责任半径变大、难题换了、利益方多了、旧的追随未必跟得过来，于是再来一轮签名。** 从组织的角度说，这三张签名每一张都在消除一种风险：第一张证明出了事你兜得住、你敢于承担下行风险；第二张证明不靠强制手段你也能让人协调行动、你的影响力是真的；第三张是组织愿意下注，再给你一圈资源和判断权，相信你能把集体成果放大。
- **认领——第一步最简单也最难**：简单是因为它不需要任何人批准，只要权力真空出现你就可以填补；难是因为需要你担的那个事往往没有授权、没有资源、没有免责条款。当初刘邦在沛县起事，论办事的本领和资历萧何曹参都是县政府的老吏、业务人头也熟，怎么排也排不到刘邦这个亭长；问题就在于萧何曹参都是文官，司马迁在《史记》里说他们"自爱，恐事不就，后秦种族其家"——他们太爱惜自己了，怕事情办砸了被灭族，就纷纷把头发一交让给刘邦。**刘邦认领的首先是后果，而不是任务。** 公司里一般需要人认领的都是疑难问题——系统崩了、客户翻脸了、两个部门顶牛了，你能接住就会声望大增。但注意不要什么活都往身上揽：2017 年有项研究发现有一类活叫**低生性任务**——张罗聚餐、写会议纪要、给新人答疑、填各种表格，价值又小又耗时间，做得再好大家也只觉"一切正常"，不能证明你厉害（研究还发现女性被要求干这些活的次数更多，答应得也更多，得到的却只是感谢）。**值得认领的事必须影响公司的关键结果，最好横跨部门、没人能独自搞定、需要判断和取舍而不是堆工时，并且最后拿得出看得见的成果。说白了就是：别做组织的免费保姆，要做关键问题的主人。普通专家只能解决单个任务，事实上的领导者解决任务与任务之间的冲突，而正式领导者为这些冲突承担最终后果——你认领的问题在哪一层，你的签名就值多少钱。**
- **授予——用声望赢得第二张签名**：获得地位有两条路：一条是通过支配让人怕你（用威慑和惩罚换来服从），一条是通过声望让人需要你（用能力和贡献换来自愿追随）。2022 年一项研究追踪了 548 名 MBA 学生的 104 个项目组，在四个星期里两条路线都能让人爬到高位，**但只有声望路线换来的敬意和追随是成员自愿的——支配首先证明的是别人不敢反对你，声望证明的则是别人愿意听你的判断、让你代表他们，后者才是我们想要的第二张签名。** 2026 年一项新研究考察一家大型金融机构取消管理岗位后的几百个自组织团队（585 名员工跟了六个月）：**如果你想提升地位，你的发言必须是促进性建言，也就是预设给方案——"这里我们应该这样做这样做"；提方案的人地位上升，地位上升又让他更敢提方案，这是正反馈循环。对比之下意志性建言（指出问题和风险）就没有这个好效果。我们一直说坏消息很重要、组织需要吹哨人，但如果你想获得声望，你希望让大家想到你的时候想到的是出路，而不是麻烦。**
- **授权——组织何时把权力正式给你**：在前现代组织里，赢得授权常常会遇到一个悖论：**你越能干，掌权者越需要你、但也越怕你。** 曾国藩赶上太平天国危急时刻自己认难题，湘军由他练、仗也由他打，朝廷都允许，但就是不给他地方实权——曾要钱要人都得看各省督抚的脸色。1857 年父亲去世后他上书陈述困境请求督抚权限，咸丰不但没给，而且准他开缺守制；直到 1860 年江南大营崩溃朝廷没办法了，才任命他为两江总督兼钦差大臣。为啥给得这么不痛快？恐怕恰恰就是因为曾国藩太能干：**皇权使得上下"一日百战"，给曾国藩的权力越大，皇帝感到自己的安全就越少；他越不可替代，就越像威胁。** 而现代组织是把权力装进角色：你可以使用预算、调动人员、接触数据，但这些资产属于公司；你的决策要留下记录，你的权限受流程和审计约束，董事会可以撤回权限、替换你——**最重要的是你的下属也都是角色的人，而不是你的人：他们给你声望，但他们并不依附于你。这反而让组织更敢用你。如果对你的授权能让组织变得更有能力，那其实是一个正交易。**

## 关键例证 / 金句

- 1990 年某乐公司的两个人出差：高管维兰希克斯和给他当特别助理的年轻工程师苏拉·伯恩斯。伯恩斯说"那个人的工作我闭着眼睛都能干，可我挣的钱只有他的四分之一，你干脆把他的职位给我算了"。希克斯说不行，不是能力不行——**"你有知识有本事，可是你还没有可信。人们得愿意跟着你走，你必须创造追随，才算行。"** 伯恩斯后来做到了：2009 年成为施乐的 CEO，是财富 500 强历史上第一位黑人女性 CEO。
- **2023 年 11 月 OpenAI 董事会解雇了 CEO 奥特曼，这个合法授权干脆利落，结果公司大约 770 名员工里有超过 700 人联名要求奥特曼回来，于是几天之后奥特曼回归，董事会反倒几乎全体改组。什么叫权威？这才叫权威。** 当然一般不会有这么大的戏剧性——获得权力往往是个渐进的过程。
- 施乐 CEO 伯恩斯的履历是"职位化的授权 + 逐层授信"：因为一次员工大会上的大胆发言进入希克斯视野，不到一年后希克斯请他做自己的特别助理（第一圈授信：不给兵权，先给视野）；后来 CEO 保罗·阿赖尔把他调到身边参加公司务虚会，然后交给他一块没人想要的业务——传真机（一年亏损 3000 万美元，要求只是"看看你能不能把它做到盈亏平衡，不行就关掉"），伯恩斯接了，把销售制造供应链的上百号人拧到一起，12 个月达到盈亏平衡、再过六个月盈利 500 万美元——**那上百号人成了伯恩斯的第一波追随者，这正是当年希克斯在经济舱里说他缺少的东西。带过队伍有了人马，局面立即打开，紧接着就是更大的业务，2007 年担任总裁，2009 年成为 CEO。**
- **现代组织的授权能完全超越人际关系吗？不能，就连伯恩斯都不能**：伯恩斯背后站着希克斯和阿赖尔，正如曾国藩终于等来的那道任命也是因为肃顺在御前出了大力。**权力总是任命给一个具体的人，而具体的信任总是具体的。要想获得权力，你总是必须下面有追随者、上面有担保人——也就是在你不在场的高层会议上拿自己的信用为你做保的人。** 现实是权力永远是人跟人之间的游戏，它必须得讲关系；只不过现代组织中关系最多能决定谁暂时坐上那个位置，而前现代组织中的关系却能把那个位置变成私人领地。
- **认领、授予、授权这个循环会让你想起赚钱板块的最后一讲"托付"**——那是成为高薪人才的循环：处理小不确定性、赢得小信任、获得小杠杆，处理更大不确定性、赢得更大信任、获得更大杠杆。**高薪和高位本质上都是信用的杠杆：你先用行动证明自己值得托付，别人才愿意追随、组织才敢把更大的不确定性连同更多的钱、人和权力一起交给你。不要直接追逐杠杆，你要主动扩大的是自己值得被托付的半径。所谓"不患无位，患所以立"。**
- **拿到第三张签名之后要记住**：现在你变成了别人的组织——你的团队里此刻正有人在签他的第一张签名，认领了没人要的问题、帮你解决了不确定性、获得了同事的认可，他在等的那第三张签名归你签。**你怎么签，决定你的组织能不能长出下一个你。**

## 如何应用

1. **识别可认领的难题**：系统崩了、客户翻脸、部门顶牛——接住疑难问题会声望大增；同时坚决拒绝低生性任务（张罗聚餐、写纪要、填表格），那是组织免费的保姆活，做得再好也不能证明你厉害。**普通专家解决单个任务，事实上的领导者解决任务之间的冲突，正式领导者为冲突承担最终后果。**
2. **用促进性建言赢得声望**：发言要预设给方案——"这里我们应该这样做"，而不是只指出问题和风险；让大家想到你的时候想到的是出路而不是麻烦。支配路线只能证明别人不敢反对你，声望路线才证明别人愿意让你代表他们。
3. **积累可信与担保人**：在你有兵权之前先积累视野和业绩（像伯恩斯从特别助理到救活传真机业务）；记住获得权力需要下面有追随者、上面有担保人。**同时做那个会签第三张签名的人——你签的每一张授权，都在决定你的组织能不能长出下一个你。**

---

## 全文（清洗后的课程转录，重点加粗+底纹）

欢迎来到现代思维工具课，我是万维钢。这是领导者系列的最后一讲，咱们探讨一个很多人追问的问题：**我学了这么多领导力技能，我心中也有一个远大的图景，可是人家没让我当领导，我怎么办呢？** 有些人因为有钱当老板而获得权力，有些人因为裙带关系获得权力，那些是你不能指望的，你只能指望自己的能力。但是先听我给你讲个故事。大约 1990 年的某一天，某公司的两个人出差：一个是高管维兰希克斯，一个是给他当特别助理的年轻工程师苏拉·伯恩斯。两人都坐在经济舱，聊天说起公司另一位高管，伯恩斯来了一句："那个人的工作我闭着眼睛都能干，可我挣的钱只有他的四分之一，你干脆把他的职位给我算了。"希克斯说不行，不是能力不行——**"你有知识有本事，可是你还没有可信。人们得愿意跟着你走，你必须创造追随，才算行。"** 当然伯恩斯后来做到了：2009 年成为施乐的 CEO，是财富 500 强历史上第一位黑人女性CEO。我们后面再讲她的故事，这里你先品一品希克斯那个回答：**不是有能力就应该当领导。**

可能你也曾经像伯恩斯那样，以为只要好好干活、做出成绩被上面看见就会获得提拔，或者至少应该获得提拔——**你把权力想像成一种奖品，那你就想错了。** 很多人，包括很多公司，都认为应该让业绩最好的人当领导，但那可能不是一个好主意。2019 年来自明尼苏达大学、麻省理工学院和耶鲁大学的三位经济学家发表了一项关于晋升的实证研究：他们分析了美国 131 家公司、38843 名销售员的数据，发现公司确实比较偏爱把销售冠军提拔成经理——**但是这些销售员晋升后给团队带来的增值，和他们晋升前的销售业绩是负相关的，简单说销售冠军的领导水平往往还不如普通销售。最好的个人贡献者不一定是最好的领导者，因为会做事和能让一群人共同做事是两种本事。** 要想配得上权力，你需要的不是一般能力，而是领导力。但就算有领导力，也不一定能获得权力。

这一讲咱们说一个获得权力的心法，它是一个三部曲：**认领、授予和授权。** 领导力是发现共同目标、做出判断、协调多人行动并对结果负责的能力；权力则是对资源、岗位和判断权的不对称控制。你说自己有领导力，群众也不一定真跟你走；就算群众相信你，组织也不一定愿意对你下注。那领导力怎么能变成权力呢？我们要说的这个心法出自密歇根大学的两位组织行为学者斯科特·德鲁和苏珊·阿什福德，他们在 2010 年提出一个**领导身份建构模型**。我们把这个模型稍微扩充一步，就是没钱没背景的人逆袭获得权力的攻略。整个思路很简单：**你要先用领导力赢得地位，再靠地位获得权力。** 德鲁和阿什福德问的问题是：如果领导不是空降任命的，而是要在一群人之中选拔，那这个选拔是怎么选的呢？他们把身份建构、领导涌现和社会互动等研究放进同一个框架，沿着个人、关系和集体三个层次提出了 11 条可检验的命题，最终答案是：**领导身份由你和人群在互动中共同建构。首先你要用言语和行动去认领领导者身份；然后是别人接受了你的带领、以追随者的姿态回应，也就是授予你这个身份，身份才能成立。** 这个机制有实验证明：同样一次领导认领，如果有同伴接受，旁观者就更把认领者视为领导；如果遭到拒绝，领导身份就立不住。**这个次序一定是先认领后授予，两边互相确认后，你便已经是事实上的领导。但是要想名正言顺地调动资源、行使权限，你还需要组织把这个地位正式化，升级成共有知识——所以我们再加一步授权。**

简单说要获得正式权力，你需要前后收集**三张签名**：第一张叫**认领**——你自己向众人表明你有领导力：面对危机或者一个答案不明的局面、一个棘手的问题，大家都不知道怎么办，你站出来说"这个问题我来负责，后果我来承担"。第二张叫**授予**——这个由同事签：你用实际行动赢得地位，"我们愿意听你的判断，让你代表我们"。第三张叫**授权**——由组织签：你因为有地位而得到权力，组织给你相应的职位、资源和权限。可能很多人认为第三张签名最有权威，毕竟职位和权限都由组织给——**但组织的授权往往只是把前两张签名正式化，真正的领导关系早在任命之前已经形成。** 2023 年 11 月，OpenAI 董事会解雇了 CEO 奥特曼，这个合法授权干脆利落，结果公司大约 770 名员工里有超过 700 人联名要求奥特曼回来，于是几天之后奥特曼回归，董事会反倒几乎全体改组。**什么叫权威？这才叫权威。** 当然一般不会有这么大的戏剧性，获得权力往往是个渐进的过程：**职位不是毕业证，它更像银行授信——先给你一小圈额度，看你能不能把它变成集体的结果，变成了再加一圈。每加一圈责任半径变大，难题换了，利益方多了，旧的追随未必跟得过来，于是再来一轮签名。** 从组织的角度说，这三张签名每一张都在消除一种风险：第一张证明出了事你兜得住、你敢承担下行风险；第二张证明不靠强制手段你也能让人协调行动、你的影响力是真的；第三张是组织愿意下注，再给你一圈资源和判断权，相信你能把集体成果放大。

先说**认领**。这一步最简单也最难：简单是因为它不需要任何人批准，只要权力真空出现你就可以填补；难是因为需要你担的那个事往往没有授权、没有资源、没有免责条款。当初刘邦在沛县起事：论办事的本领和资历，萧何曹参都是县政府的老吏、业务人头也熟，要说找个领头的怎么排也排不到刘邦这个亭长。问题就在于萧何曹参这些人都是文官，司马迁在《史记》里说他们"自爱，恐事不就，后秦种族其家"——太爱惜自己了，怕事情办砸了被灭族，就纷纷把领头一让给刘邦。**刘邦认领的首先是后果，而不是任务。** 当然公司里的事没有那么危险，一般需要人认领的都是些疑难问题：系统崩了、客户翻脸了、或者两个部门顶牛了，你能接住就会声望大增。而且请注意，不要什么活都往身上揽：有一项 2017 年的研究说有一类活叫做**低生性任务**——你干得再多也很难换来晋升，比如张罗聚餐、写会议纪要、给新人答疑、填各种表格，这些事价值又小又消耗时间，做得再好大家也只觉得一切正常、不能证明你厉害（研究还发现女性被要求干这些活的次数更多、答应得也更多，可是得到的只是感谢）。**值得认领的事必须影响公司的关键结果，最好横跨部门、没人能独自搞定、需要判断和取舍而不是堆工时，并且最后拿得出看得见的成果。说白了就是：别做组织的免费保姆，要做关键问题的主人。普通专家只能解决单个任务，事实上的领导者解决任务与任务之间的冲突，而正式领导者为这些冲突承担最终后果——你认领的问题在哪一层，你的签名就值多少钱。**

现在你认了，怎么赢得同事的**授予**呢？我们前面讲了获得地位有两种方式：一个是通过**支配**让人怕你——用威慑和惩罚换来服从；一个是通过**声望**让人需要你——用能力和贡献换来自愿追随。这两个方式都能给你争取到授予。没错，夏湖（麦克阿瑟？）至今也很管用——2022 年的一项研究追踪了 548 名 MBA 学生的 104 个项目组，在四个星期里两条路线都能让人爬到高位，**但只有声望路线换来的敬意和追随是成员自愿的。支配首先证明的是别人不敢反对你，声望证明的则是别人愿意听你的判断、让你代表他们——后者才是我们想要的第二张签名。** 这里也有窍门：2026 年发表的一项新研究里，一家大型金融机构突发奇想搞了一次体制改革，大幅度取消管理岗位，让各个团队自己管理自己、人人平等，这给了研究者一个观察人类行为的绝佳机会。研究者考察了几百个自组织团队，紧盯着其中 585 名员工六个月，看什么呢？看谁说话分量越来越重、地位越来越高。**他们的结论是：如果你想提升地位，你的发言必须是促进性建言，也就是预设给方案——"这里我们应该这样做这样做这样"。提方案的人地位上升，地位上升又让他更敢提方案，这是正反馈循环。对比之下，如果你说的是抑制性建言（指出问题和风险），就没有这个好效果。我们一直说坏消息很重要、组织需要吹哨人，但是如果你想获得声望，你希望让大家想到你的时候想到的是出路，而不是麻烦。**

好，现在你给组织解决了问题、也赢得了声望，那组织什么时候才能正式**授权**给你呢？在前现代组织里，赢得授权常常会遇到一个悖论：**你越能干，掌权者越需要你，但也越怕你。** 比如当初曾国藩赶上太平天国战争危急时刻，自己认难题，湘军由他练、仗也由他打，朝廷都允许，但就是不给他地方实权——曾要钱要人都得看各省督抚的脸色，所谓"客寄虚悬"。1857 年父亲去世后，他上书陈述这种困境请求督抚权限，咸丰不但没给，而且准他开缺守制；直到 1860 年江南大营崩溃，朝廷没办法了，才任命他为两江总督兼钦差大臣。为啥给得这么不痛快？恐怕恰恰就是因为曾国藩太能干——**皇权使得上下"一日百战"，给曾国藩的权力越大，皇帝感到自己的安全就越少；他越不可替代，就越像威胁。** 这就是前现代组织的特点：湘军将领和士兵的关系带有强烈的私人色彩，等于是曾国藩自家的队伍——朝廷给曾国藩授权不只是增强了他的办事能力，而且等于供养了一个能脱离官僚体系自行运转的个人权力中心。**而现代组织是把权力装进角色：你可以使用预算、调动人员、接触数据，但这些资产属于公司；你的决策要留下记录，你的权限受到流程和审计约束，董事会可以撤回权限、替换你。最重要的是你的下属也都是角色的人、而不是你的人——他们给你声望，但他们并不依附于你。这反而让组织更敢用你：如果对你的授权能让组织变得更有能力，那其实是一个正交易。**

咱们看看开头说的那个施乐 CEO 伯恩斯的履历——这是一系列职位化的授权，而且是逐层授信：伯恩斯因为在一次员工大会上的大胆发言而进入希克斯的视野，不到一年后希克斯请他做自己的特别助理，两人从那场争论开始的交锋和辅导此后也延续了很多年；这个位置使得他可以旁听高层决策、观察一家大公司到底怎么运转——**这是第一圈授信：不给兵权，先给视野。** 后来有一年，CEO 保罗·阿赖尔把伯恩斯调到自己身边让他参加公司务虚会，然后交给他一块没人想要的业务——传真机。当时这块业务一年亏损 3000 万美元，CEO 的要求只有一句话："看看你能不能把它做到盈亏平衡，不行就关掉。"伯恩斯接了，这才算他第一次认领地盘。结果他做得很好：把销售、制造、供应链的上百号人拧到一起，12 个月达到盈亏平衡，再过六个月盈利 500 万美元——**那上百号人成了伯恩斯的第一波追随者，这正是当年希克斯在经济舱里说他缺少的东西。带过队伍有了人马，局面立即打开，紧接着就是更大的业务——制造、供应链、全球客户。伯恩斯 2007 年担任总裁，2009 年成为 CEO。**

那你说现代组织的授权能不能完全超越人际关系呢？不能，就连伯恩斯都不能：**伯恩斯背后站着希克斯和阿赖尔，正如曾国藩终于等来的那道任命也是因为肃顺在御前出了大力。权力总是任命给一个具体的人，而具体的信任总是具体的。要想获得权力，你总是必须下面有追随者、上面有担保人——也就是在你不在场的高层会议上拿自己的信用为你做保的人。** 我们精英日课专栏讲过杰弗瑞·菲佛的《权力七规则》那本书，你知道现实是：**权力这个东西永远是人跟人之间的游戏，它必须得讲关系。只不过现代组织中关系最多能决定谁暂时坐上那个位置，而前现代组织中的关系却能把那个位置变成私人领地。**

认领、授予、授权——这个循环会让你想起我们前面赚钱板块的最后一讲"托付"，那是一个成为高薪人才的循环：处理小不确定性，赢得小信任，获得小杠杆；处理更大不确定性，赢得更大信任，获得更大杠杆。其实意思是一样的：**高薪和高位本质上都是信用的杠杆。你先用行动证明自己值得托付，别人才愿意追随，组织才敢把更大的不确定性连同更多的钱、人和权力一起交给你。不要直接追逐杠杆，你要主动扩大的是自己值得被托付的半径。正所谓"不患无位，患所以立"。**

如果你不但进入了信任杠杆的循环、而且拿到了第三张签名、有了名正言顺的权力，我向你表示恭喜，但我要提醒你的是：**现在你变成了别人的组织。你的团队里，此刻正有人在签他的第一张签名——认领了没人要的问题、帮你解决了不确定性、获得了同事的认可；他在等的那第三张签名，归你签。你怎么签，决定你的组织能不能长出下一个你。** 好，以上就是今天的全部内容，现代思维工具课，祝您每天都有收获。
`,ig=`# 098丨生成：最高级的创造

## 讲什么

**生成（generativity）**——普通创造希望结果符合自己的设计，把非预期后果当做麻烦；而最高级的创造却要故意给你没设计过的结果留出位置、享受惊喜。**我们学复杂系统不是为了让它听话，而是追求亲手造出一方天地，然后放手让它演化。一句话：生成就是让一个东西因你而生，却不靠你而活、不照你而变——这是给心胸最大的人准备的学问。** 开篇的比喻：修仙小说已经不满于比法宝、浮夸战斗力和打怪升级了，高级的修炼法是在自己心里养出一个世界——例如烟雨江南《龙族》里主人宫魏渊修出一个叫"人间烟火"的心象世界：在虚空中以法相为核心开辟一处新天地，里面有成千上万个越来越真实的虚拟人物，他们帮你出谋划策、为你做事，但也会变得越来越自主、分成不同的人群和门派、寻求各自的发展壮大，乃至最终不依赖你而存在。**高手要比应该比"咱俩谁的心象世界大"。** 我们现实不能修仙，但也可以创造自己的小世界：开办一家公司、一所学校，甚至就是生几个孩子，看着你创造的事物发展壮大、变得越来越复杂，以至于后来你都理解不了——这种成就感不比发几篇论文、获得一个什么职位高级多了吗？

## 解决什么真问题

回答"为什么事业能成功几十年、创始人一退就散了，以及怎么才能让一样东西真正'长出来'而不只是'做出来'"：不少人都创办过成功的事业，自己辛苦维持运转了几十年，别人都说了不起，可是创始人只要一退，业务就没了、人也就散了——小世界消失了。**生成并不容易，有一门情怀和两门功夫：一种情怀是发展心理学家爱里克·埃里克森提出的"生成"——人到了中年会撞上一道卡称为"生成对停滞"：你是只顾维持和满足自己、守着自己这一亩三分地过完算了，还是愿意去培养后来的人、造点能进入未来的东西呢？前者就是停滞，后者就是生成。** 1992 年心理学家丹·麦克亚当斯等人把它发展成可测量的理论模型（包括生孩子、带徒弟、传手艺、励志读书、写能影响后人的作品等）；2021 年荷兰组织心理学家弗里德里克·多尔德和同事汇总了 48 项研究、涉及 15000 多人，结果显示生成动机较强的人往往也有更强的工作干劲、更高的职业效能感和工作满意度，以及更好的导师关系。**生成是一种高级的快乐：有些快乐来自获得（钱、地位、作品、荣誉），有些来自体验（看过爱过吃过玩过），有些来自关系（被人理解也理解别人），而生成提供的是另一种东西——因为你曾经来过，世界上多了一个新的因果起点。**

## 核心论点

- **第一门功夫：组织闭合（organizational closure）**：概念出自理论生物学。生命的特点是既开放又独立，怎么做到的？有的学者称之为自创生，更新的说法叫约束闭合——**要维系这个系统活下去的关键环节，能不能在系统内部彼此维持形成闭环。** 比如心脏泵血、血液反过来供养心肌，心肌才有能力继续泵——这是一个系统内部的维持闭环；基因造蛋白质、蛋白质反过来读取和复制基因，是更严格意义上的互相生产。**闭合的意思不是封闭，而是完成闭环——不需要你从外部控制，这几个东西在内部就能完成循环。所谓组织闭合，就是系统赖以存活的每一个关键环节都能在系统内部找到供养他的另一个环节。** 公司起步时创始人要出钱、找人、定方向、谈客户、带新人、断纠纷，孩子生下来爹妈也得替他管几乎所有的事——这些就是尚未闭合；等到公司可以离开创始人而运行、孩子不再需要父母的照顾，才叫组织闭合。**怎样让你的事业完成组织闭合？你需要解决三个问题：①他的成果能不能换来下一轮资源？（产品带来客户和收入，收入得养得起下一轮研发和招人——系统的产出必须能替他自己挣来下一轮的投入；要是每一轮都还得靠创始人重新去化缘去求人，那就是还没断奶）；②现在这批人能不能带出下一批人？（你得建立一套能不断产生接班人的机制，不能只盼着每隔几年从天上掉下来一个盖世英雄）；③离开创始人，关键决定还做不做得出来？（不能一直是大客户必须他谈、高管吵架必须他断、遇到例外情况所有人都杵着等他发话——每当你不得不亲自去补位的时候，就应该问一句：为什么这事只能我来？这次补位能不能变成下次不再需要我补位的安排？你救火不能说明你能干，只能说明这个组织还没闭合。）**
- **张謇的对照**：清末民初的实业家张謇是大清 1894 年的状元，响应时代召唤把人生主业从做官转向办实业，办啥成啥：先在家乡南通创办起大生纱厂，又以为根基办博物馆、图书馆、医院和剧场，几乎生成了一座近代城市。可有这么大的事业，怎么很少有人知道张謇这个名字呢？因为纱厂失败了。1922 年随着一战结束后外国商品重新涌入、棉贵纱贱，大生厂不但亏损而且有巨额负债；张謇 1926 年去世的时候大生各厂的管理权已经先一步转到了债权人手里，随后是连锁反应：他创办的伶工学社 1926 年停办、南通博物院失去靠山……对照组织闭合的三问：资源方面张謇的许多项目长期依赖纱厂输血、没有独立财务能力；人才方面学校和医院形成了专业队伍、知识传统和社会声誉，所以有条件找到新的供养者；决策方面大生的信用与决策都只绑在张謇一个人身上，后来企业就只能由债权人接管——而那些把管理权交给公共机构的事业反而活了下来（南通三所高等学校的合体延续为私立南通大学、通州医院延续为今天南通大学附属医院的源头）。
- **范仲淹义庄的对照**：另一个中国人办的准慈善项目前后延续了整 900 年，那就是范仲淹的义庄。1050 年范仲淹在苏州捐出 1000 多亩田设了个义庄，拿田租来救济范氏族人的吃穿、婚丧嫁娶。这番操作的厉害之处是范仲淹不只是捐出了一笔财产，而且给了它一套治理结构：他把这些田变成不能由子孙分割和典当变卖的义庄公产；由一个全族共同推举的人来总领（叫主奉），掌管人负责日常事务；各房还各有一个叫管事的代表本房；族人按人头按月领钱粮；闹灾荒的时候要留出两年存粮防灾；连族里辈分最高的长辈也不许插手多占；收发米粮等日常事务照成文规矩办，规矩没写到的例外由掌管人与各房共同商议；利害相关者还得回避；管理者如果有侵占瞒报，族人可以查账核对，最后还可以告到官府。**你看：有生前不能私分的田产、有由族人公举产生的管理者、有照章办事和共同商议、有族内监督和官府最后执行——组织闭合的条件全都满足。范仲淹 1052 年就去世了，可这个义庄一直延续到 1950 年土地改革——比宋元明清每个朝代都长。谁说中国人没有信托精神？**
- **第二门功夫：可演化性（evolvability）**：任何系统都一定会变化，但你想让它有好变化和新颖的变化。1996 年进化生物学家金特·瓦格纳和李尔滕提出：变异加选择并不自动带来进步，**真正决定成败的是系统的结构能不能让一处局部的改动产生局部的改进，而不是一动就全盘垮掉；2007 年格哈特和基尔希纳提出"促进变异"又补了一句：生物创新很少从零造起，而是留住一批稳定的核心零件、靠重新组合他们长出新形态。翻译成一句话就是：可演化的系统必须核心稳定、外围可变——这就如同房子的承重结构越牢，才越敢重新装修其中的房间。** 三条心法：①**给边界不给剧本**——值得定死的东西并不多：这个事业为什么存在、它为谁服务、什么绝对不能做，这些构成了系统的边界；至于具体的产品、方法和结构都应该允许后人改。最危险的文化传承就是把创始人的时代局限也当成祖宗供起来；②**把试错切小**——每次让一个局部先试，不拖垮整体；如果成了别处也能学过去，不能每次创新都得全体转向；③**接受现实的筛选**——你不能光说鼓励创新让大家提一大堆新点子，却没人担后果、更没有一个项目真正死掉。
- **朱元璋的反面**：朱元璋要饭出身、靠实力取得天下，偏偏认为自己的思想就是先进的。他在洪武年颁布《皇明祖训》，序言中规定"凡我子孙，钦承朕命，无作聪明，乱我已成之法，一字不可改易"；同年九月他又敕谕礼部，后世谁敢提出改变祖训及以奸臣论无赦——这等于堵死了制度正常演化的通道。朱元璋的海禁长期压制海外贸易，让大明错过了把繁荣海贸变成稳定税源和海防力量的机会；他的世袭军户制度又因为军大量逃亡而逐渐空心化，逼得朝廷另外花钱募兵；可是大海就在那里朝廷总得用兵，海需求禁不掉就转入走私，结果闹出了倭寇；明朝中叶以后军费吞掉中央政府支出的六成到九成。后来隆庆开海已经证明政策只要松一道缝，中国的海商很快就能接入全球贸易。**一个死了 200 年的创始人靠一块祖训的牌位继续对后来的决定行使否决权——这不荒唐吗？这都是在被权力惯坏、自大狂妄、幻想永不退场的结果。**

## 关键例证 / 金句

- 组织闭合防死，可演化性防老：**前者让系统不必靠你才能活，后者让它不至于活成一块化石。** 但二者之间有张力：组织闭合靠准复制和传承（要系统记得住），可演化性靠异质化（要系统改得动）。范仲淹的规矩可以修订（后世子孙多次修改补充），朱元璋的规矩不许修订——到底哪些是创始人不可改变的初心？**其实只要这个事业能够履行承诺、守住底线，只要能延续、能兴旺发达，就都是好的。**
- 会演化的东西什么样：任天堂原本是卖花扎纸牌的公司，却成了创造马里奥、塞尔达和 Switch 的游戏公司——它守住的不是纸牌，而是"让人玩得开心"；哈佛原本是殖民地的一所小学堂、主要业务是培养有学问的牧师，却成了横跨文理法律医学和商业的世界性研究大学——它守住的不是神学课程，而是"传递知识"；西游记原本是取经故事改编的戏曲和平话，却成了章回小说、连环画、动画、电视剧和游戏——它守住的不是九九八十一难的细节，而是那个任何一代人都能重新出发的取经母题；美国守住但演化了宪法——宪法正文仍然是 1787 年的七条，250 年只增加了 27 条修正案。**这些事业最初的创造者如果来到今天，肯定认不出来它们的样子，但他们大概会感到欣慰而不是愤怒：感谢你们没有忠实执行我的第一版，也感谢你们把我最初那点值得保留的东西坚持下来、做得远远更大。要做到这一步，你就必须交出你的最终解释权——至此小世界才算脱离你的心海，你不再是它的主人，只是它最初的开天者。**
- 老子说"我无为而民自化"，又说"太上，不知有之；其次，亲而誉之；其次，畏之；其次，侮之"。**普通的创造者要求保留对这个东西的所有权，为此需要让人怕他；优秀的生成者不再要求所有权，只要人们感谢他就可以了；伟大的生成者甚至不要求别人记得他。其实成为一个伟大的生成者并没有那么难——要知道世界上没有多少人记得自己太爷爷的名字。**

## 如何应用

1. **用组织闭合三问检查自己的事业**：①成果能不能换来下一轮资源（还是每轮都要你化缘求人）？②现在这批人能不能带出下一批人（还是等着天上掉盖世英雄）？③离开你关键决定还做不做得出来（还是大客户必须你谈、吵架必须你断）？**每当你不得不亲自补位，就问：为什么这事只能我来？**
2. **用可演化性三心法建设系统**：给边界不给剧本（把"为什么存在、为谁服务、什么不能做"定死，具体做法允许后人改）；把试错切小（一次局部试错不拖垮整体）；接受现实的筛选（有真项目死掉，而不是光喊鼓励创新）。警惕"朱元璋式"的教训：把创始人（或你自己）的时代局限当成不可改易的祖训，会让一个死了 200 年的人继续对今天的决定行使否决权。
3. **从"造物主"升级为"开天者"**：先交出自己的不可替代感（组织闭合），再交出最终解释权（可演化性）——**凡是"你一离开就停下来"的事都还只是你的能力；只有你离开之后还能继续发生的事，才是系统的能力、才是你的生成。普通人到哪都先学规矩越学越认同，生成者要的是"因你而生、不靠你而活"。**

---

## 全文（清洗后的课程转录，重点加粗+底纹）

欢迎来到现代思维工具课，我是万维钢。这一讲咱们进入演化者新模块，这个模块的主题是复杂性。这是很高深的学问，其中有很多活跃的研究。那我们为什么要关心这些呢？我先说个感悟。**你注意到没有？现在的修仙小说已经不满意于比法宝、浮夸战斗力和像游戏一样的打怪升级了，高级的修炼法是在自己心里养出一个世界。** 比如烟雨江南的《龙族》里，主人宫魏渊修出一个叫"人间烟火"的心象世界——也就是在虚空中以法相为核心开辟的一处新天地，它存在于魏渊的心海之中，是一个由他的精神意识凝成的内部世界。心象世界里原本都是虚拟的人物，但是后来真人也也可以进出，然后成千上万个虚拟人物也变得越来越真实，跟真实世界连接成了一体。那个感觉有点像你在我们这个世界中拥有一系列 AI 智能体，只不过这些智能体组成了自己的社会：心象世界里的众生会帮你出谋划策、为你做事、给你贡献，但是他们会变得越来越自主，也分成不同的人群和门派，也寻求各自的发展壮大，乃至于最终不依赖你而存在。魏渊常旁观心象世界里人们繁热闹的生活，感觉其乐无穷——是啊，这不比自己赚多少钱、学个新武功升级有意思多了吗？**高手要比应该比"咱俩谁的心象世界大"。** 我们这个现实不能修仙，但我们也可以创造自己的小世界：比如说你开办一家公司、一所学校，甚至就是生几个孩子，看着你创造的事物发展壮大、变得越来越复杂，以至于后来你都理解不了了——这种成就感不比自
己发几篇论文、获得一个什么职位高级多了吗？**这就是生成。普通的创造希望结果符合自己的设计，把非预期后果当做麻烦；然而最高级的创造却要故意给你没设计过的结果留出位置，享受惊喜。我们学复杂系统不是为了让它听话，而是追求亲手造出一方天地，然后放手让它演化。一句话，生成就是让一个东西因你而生，却不靠你而活、不照你而变——这是给心胸最大的人准备的学问。**

这里有一种情怀和两门功夫。一种情怀是发展心理学家爱里克·埃里克森提出的**生成**：他认为人到了中年会撞上一道卡，称为"生成对停滞"——你是只顾维持和满足自己、就守着自己这一亩三分地过完算了，还是愿意去培养后来的人、造点能进入未来的东西呢？前者就是停滞，后者就是生成。到了 1992 年，美国西北大学心理学家丹·麦克亚当斯等人把它发展成了一套可测量的理论模型，他们定义的生成包括生孩子、带徒弟、传手艺、励志读书、写能影响后人的作品等。快进到 2021 年，荷兰组织心理学家弗里德里克·多尔德和同事汇总了 48 项研究、涉及 15000 多人，结果显示：**生成动机较强的人往往也有更强的工作干劲、更高的职业效能感和工作满意度，以及更好的导师关系。** 当然科学无法证明生成就是人生最大的快乐，但我们大约可以说生成是一种高级的快乐：有些快乐来自获得——我得到了钱、地位、作品和荣誉；有些快乐来自体验——我看过爱过吃过玩过；有些快乐来自关系——我被人理解也理解别人。这些都很好，但是**生成提供的是另一种东西：因为你曾经来过，世界上多了一个新的因果起点。一个学生沿着你指出的方向走到了你没去过的地方，一个孩子形成了与你不同却更适合他自己的判断，一项事业在你退休以后更加兴盛。你的控制半径很小，而且从某个时刻开始变得越来越小；可是你的因果半径却越来越大，大到无法想像。** 你可能说这不就是立德立功立言三不朽吗？不朽是一种副产品——一个人能不能留下名字取决于很多偶然的因素，不可以直接追求；但生成则是一个非常实在的行为，它只在乎有没有一样东西因为你而获得了继续生长的能力。

如你所想，生成并不容易：不少人都创办过成功的事业，自己辛苦维持运转了几十年，别人都说了不起，可是创始人只要一退，业务就没了、人也就散了——小世界消失了。如果真是修仙的话，这一世你就算失败了。**要想成功生成，你得练两门功夫。第一门功夫叫组织闭合**，这个概念出自理论生物学：生命的特点是既开放又独立，这是怎么做到的呢？有的学者称之为自创生，更新的说法叫约束闭合，意思都是说：**要维系这个系统活下去的关键环节，能不能在系统内部彼此维持、形成闭环。** 比如心脏泵血、血液反过来供养心肌，心肌才有能力继续泵——这是一个系统内部的维持闭环；基因造蛋白质、蛋白质反过来读取和复制基因，是更严格意义上的互相生产。**闭合的意思不是封闭，而是完成闭环——意思是不需要你从外部控制，这几个东西在内部就能完成循环。所谓组织闭合，就是系统赖以存活的每一个关键环节都能在系统内部找到供养他的另一个环节。**

一家公司起步的时候，创始人需要出钱、找人、定方向、谈客户、带新人、断纠纷，这很正常；小孩生下来，爹妈也得替他管几乎所有的事——这些就是尚未闭合。等到公司可以离开创始人而运行，就像小孩不再需要父母的照顾，才叫组织闭合。**怎样让你的事业完成组织闭合呢？你需要解决三个问题。第一，他的成果能不能换来下一轮资源？** 产品带来客户和收入，收入得养得起下一轮研发和招人；学校交出好学生，好学生变成声誉，声誉又招来新的学生、老师和捐助——系统的产出必须能替他自己挣来下一轮的投入才行。要是每一轮都还得靠创始人重新去化缘、去求人，那就是还没断奶。**第二，现在这批人能不能带出下一批人？** 你得建立一套能不断产生接班人的机制，不能只盼着每隔几年从天上掉下来一个盖世英雄。**第三，离开创始人，关键决定还做不做得出来？** 不能一直是大客户必须他谈、高管吵架必须他断、遇到例外情况所有人都杵着等他发话。**每当你不得不亲自去补位的时候，就应该问一句：为什么这事只能我来？这次补位能不能变成下次不再需要我补位的安排。你救火不能说明你能干，只能说明这个组织还没闭合。**

咱们先看一个不能简单论成败的例子——清末民初的实业家张謇。张謇是大清 1894 年的状元，响应时代召唤把人生主业从做官转向办实业，结果是办啥成啥：先在家乡南通创办起大生纱厂，又以为根基办博物馆、图书馆、医院和剧场，几乎生成了一座近代城市。有这么
大的事业，怎么很少有人知道张謇这个名字呢？因为纱厂失败了。1922 年随着一战结束后外国商品重新涌入、棉贵纱贱——也就是棉花涨价、棉纱跌价——大生厂不但亏损，而且还有巨额负债。张謇 1926 年去世的时候，大生各厂的管理权已经先一步转到了债权人手里，随后是连锁反应：张謇创办的伶工学社在 1926 年停办，南通博物院失去靠山、财力拮据，后来先后交给南通大学和通州师范勉强维持，1938 年又在日军侵战（侵华）中遭到了毁坏。不过张謇创办的三所高等学校在 1928 年合并成私立南通大学，通州医院也延续下来成为今天南通大学附属医院的源头——不然今天可能就更没人知道张謇了。对照组织闭合的三问：**资源方面，张謇的许多项目长期依赖纱厂输血，没有独立财务能力；人才方面，学校和医院形成了专业队伍、知识传统和社会声誉，所以有条件找到新的供养者；决策方面，大生的信用与决策都只绑在张謇一个人身上，后来企业就只能由债权人接管——而那些把管理权交给公共机构的事业反而活了下来。**

对比之下，另一个中国人办的准慈善项目前后延续了整 900 年，那就是宋朝范仲淹的义庄。1050 年，范仲淹在苏州捐出 1000 多亩田，设了个义庄，拿田租来救济范氏族人的吃穿、婚丧嫁娶。这番操作的厉害之处是：**范仲淹不只是捐出了一笔财产，而且给了它一套治理结构。** 他把这些田变成不能由子孙分割和典当变卖的义庄公产，由一个全族共同推举的人来总领（叫做主奉），掌管人负责日常事务；各房还各有一个叫管事的代表本房；族人按人头按月领钱粮，要造核对；闹灾荒的时候要留出两年存粮防灾；连族里辈分最高的长辈也不许插手多占；收发米粮等这些日常事务照成文规矩办，规矩没写到的例外由掌管人与各房共同商议；利害相关者还得回避；管理者如果有侵占瞒报，族人可以查账核对，最后还可以告到官府。**你看：有生前不能私分的田产，有由族人公举产生的管理者，有照章办事和共同商议，有族内监督和官府最后执行——组织闭合的条件全都满足。范仲淹 1052 年就去世了，可这个义庄一直延续到 1950 年土地改革，比宋元明清每个朝代的命都长。谁说中国人没有信托精神？凡是"你一离开就停下来"的事，都还只是你的能力；只有你离开之后还能继续发生的事，才是系统的能力，才是你的生成。要做到这一步，你必须先交出
自己的不可替代感。小世界这才有了自己的新陈代谢，不必你天天输灵气了。可这还不够——**第二门功夫叫可演化性。** 我们前面刚讲过基线漂移：任何系统都一定会变化，但是你想让它有好的变化和新颖的变化。这里我们仍然可以从生物学获得智慧。1996 年，进化生物学家金特·瓦格纳和李尔腾提出：变异加选择并不自动带来进步，**真正决定成败的是系统的结构能不能让一处局部的改动产生局部的改进，而不是一动就全盘垮掉。** 2007 年格哈特和基尔希纳提出"促进变异"又补了一句：**生物创新很少从零造起，而是留住一批稳定的核心零件、靠重新组合他们长出新形态。翻译成一句话就是：可演化的系统必须核心稳定、外围可变——这就如同房子的承重结构越牢，才越敢重新装修其中的房间。** 这里有三条心法：**第一，给边界不给剧本**——值得定死的东西并不多：这个事业为什么存在、它为谁服务、什么绝对不能做，这些构成了系统的边界；至于说具体的产品、方法和结构都应该允许后人改。最危险的文化传承就是把创始人的时代局限也当成祖宗供起来。**第二，把试错切小**——每次让一个局部先试，不拖垮整体；如果成了别处也能学过去，不能每次创新都得全体转向。**第三，接受现实的筛选**——你不能光说鼓励创新让大家提一大堆新点子，却没人担后果、更没有一个项目真正死掉。

反面例子我最想说的就是朱元璋。朱元璋要饭出身、靠实力取得天下，偏偏认为自己的思想就是先进的。他在洪武年颁布《皇明祖训》，序言中规定"凡我子孙，钦承朕命，无作聪明，乱我已成之法，一字不可改易"；同年九月他又敕谕礼部：后世谁敢提出改变祖训，及以奸臣论无赦——这等于堵死了制度正常演化的通道。朱元璋的海禁长期压制海外贸易，让大明错过了把繁荣海贸变成稳定税源和海防力量的机会；朱元璋的世袭军户制度又因为军大量逃亡而逐渐空心化，逼得朝廷另外花钱募兵；可是大海就在那里，朝廷总得用兵，海需求禁不掉就转入走私，结果就在后来闹出了倭寇。明朝中叶以后，军费吞掉中央政府支出的六成到九成，已经成为国家财政最沉重的负担。后来隆庆开海已经证明：政策只要松一道缝，中国的海商很快就能接入全球贸易，国家也可以把海贸变成货币和关税。**正因为朱元璋不让改、后世又不得不改，人们就只能搞各种权宜之计绕过祖训，结果是旧制度名义上还在、新办法只能作为例外和临时措施存在——于是权责不清、规则打架、寻租重生、财政成本越来越高，任何一次改革都要先背上过去所有补丁的包袱。如果没有朱元璋的束缚，大明能够持续改革，海上财富、造船、火器和远洋组织能力就可能合法地不断积累，形成贸易、财政、海军、技术的正向循环，就算不能引发工业革命，也能确保中国在大航海的牌桌上有一席之地。可现实却是一个死了 200 年的创始人，靠一块祖训的牌位继续对后来的决定行使否决权——这不荒唐吗？这都是被权力惯坏、自大狂妄、幻想永不退场的结果。**

会演化的东西都什么样呢？任天堂原本是个卖花扎纸牌的公司，却成了创造马里奥、塞尔达和 Switch 的游戏公司——它守住的不是纸牌，而是"让人玩得开心"；哈佛原本是殖民地的一所小学堂、主要业务是培养有学问的牧师，却成了横跨文理、法律、医学和商业等领域的世
界性研究大学——它守住的不是神学课程，而是"传递知识"；西游记原本是取经故事改编的戏曲和平话，却成了章回小说、连环画、动画、电视剧和游戏，长出更大的宇宙——它守住的不是九九八十一难的细节，而是那个任何一代人都能重新出发的取经母题；美国原本是个由大西洋沿岸 13 个州组成的农业共和国，却成了一个拥有 50 个州、在全球的经济、科技、军事和文化上都有巨大影响的现代国家——美国守住了但也演化
了宪法：宪法正文仍然是 1787 年的七条，250 年只增加了 27 条修正案，宪法在理论上可以被改写、但在实际操作中又很难被改写。**这些事业最初的创造者如果来到今天，肯定认不出来它们的样子，但他们大概会感到欣慰而不是愤怒：感谢你们没有忠实执行我的第一版，也感谢你们把我最初那点值得保留的东西坚持下来、做得远远更大。要做到这一步，你就必须交出你的最终解释权——至此小世界才算脱离了你的心海，你不再是它的主人，只是它最初的开天者。** 组织闭合能防止死亡，可演化性能防止衰老：前者让系统不必靠你才能活，后者让他不至于活成一块化石。但二者之间是有张力的：组织闭合靠准复制和传承，要系统记得住；可演化性靠异质化，要系统改得动。那你说这个度到底在哪里？范仲淹的规矩可以修订（后世子孙多次修改补充），朱元璋的规矩不许修订——那到底哪些是创始人不可改变的初心呢？**其实只要这个事业能够履行承诺、守住底线，只要能延续、能兴旺发达，就都是好的。** 老子说"我无为而民自化"，又说"太上，不知有之；其次，亲而誉之；其次，畏之；其次，侮之"。**普通的创造者要求保留对这个东西的所有权，为此需要让人怕他；优秀的生成者不再要求所有权，只要人们感谢他就可以了；伟大的生成者甚至不要求别人记得他。其实成为一个伟大的生成者并没有那么难——要知道世界上没有多少人记得自己太爷爷的名字。** 好，以上就是今天的全部内容，现代思维工具课，祝您每天都有收获。
`,og=`# 099丨对称性破缺：命运不过是冷却了的偶然

## 讲什么

**对称性破缺（symmetry breaking）**——复杂性科学送给我们最强大的一个武器。你看过太空望远镜的那种星空照片：无数颗星星密密麻麻铺满画面，位置看上去完全随机——但事实上你挪不动：照片上每一个小光点不是一颗星星，而是一个星系，照片上一毫米的距离就是几光年，把星系稍微挪一挪所需的能量是大自然根本不允许的。**可为什么那些星系的位置是这样的呢？答案来自偶然：早期宇宙的物质能量密度近乎均匀，只叠加着极其微小的量子涨落（十万分之一），但就是那一点点差异，让宇宙后来的物质这里多一点、那里少一点，在引力作用下慢慢变成星系——今天这些星系的分布格局，不过是初始随机抖动的放大。** 这个"从什么都有可能变成只有一种可能、而且坚不可摧"的过程，物理学有个专门的词叫对称性破缺。简单说：**命运不过是冷却了的偶然。**

## 解决什么真问题

解释"为什么很多局面一旦定型就几乎无法改变、而趁热的时候改变却不费吹灰之力"：想把一支铅笔笔尖朝下立在桌上，它周围四面八方完全等价，物理方程没有偏爱任何一个方向——这是对称；可铅笔不能永远立着，可能因为空气瞬间的扰动、桌面细微的纹理，因为一些小到不能再小的偶然，它会倒下，而它一旦倒下就只能倒向某一个方向，再也回不来了——这就是对称的破缺。**势能是对称的，结果是破缺的；混沌是对称的，混沌开了是破缺的，万事万物就由此展开。** 1972 年贝尔实验室的物理学家菲利普·安德森（后来得了诺奖）在《科学》杂志发表文章"多者异也"，感慨宏观世界的规律不能从微观方程简单推出来，而破缺的对称性正是理解世界为什么一层一层长出新秩序的钥匙——**这把钥匙不但能解释星空，还能解释你的处境：印度与巴基斯坦的边界是一条英国人拉德克利夫随手画的线，画完就永远改不了了；秦始皇统一文字只发生在战乱刚刚把旧秩序融了个干净的那一个窗口。**

## 核心论点

- **宇宙的历史是一部降温史，每一次降温都逼着宇宙做一次选择**：第一次是暴涨（阿兰·古斯 1981）：宇宙诞生后不到一秒钟经历一次空间本身的超级爆炸式膨胀，把微观世界里转瞬即逝的量子涨落一口气拉伸到宏观尺度，冻结成宇宙密度分布的底稿，后来 100 多亿年里引力只是按这份底稿施工；第二次是电弱对称破缺（诞生后万亿分之一秒）：温度降到千万亿度量级，弥漫整个宇宙的希格斯场撑不住了，像桌上的铅笔随机倒向一个方向，电磁力和弱力从此分家、电子和夸克有了质量；第三次是正反物质不对称：大爆炸应该产出严格等量的正物质和反物质，相遇就湮灭化为光——可当年的账目里有一个微小的零头（大约每十亿个反物质粒子对应十亿零一个正物质粒子），湮灭之后总会剩下一个，**这个十亿分之一的零头就构成了今天宇宙里所有的普通物质，包括你。** 物理学家这么多年找到了一些线索，但还没有完全解决这个零头从哪来。**三次破缺都发生在大爆炸后的第一秒之内。我们很庆幸是不完美的产物：完美的东西应该绝对对称，可绝对对称就意味着什么都没有——不偏心的湮灭留不下物质，不站队的希格斯场给不出质量，完全均匀的宇宙长不出星系。所以破缺不是世界的瑕疵，破缺是世界的生成机制。**
- **社会也有对称时刻**：当几股力量达成均衡、几个阵营都可能赢、几个标准都合理、几个未来都说得过去，一切皆有可能——那么微小的扰动就能带来巨大的变化，这就是社会的高温态。那时的社会就像一块刚出炉的玻璃，柔软可塑，你吹一口气就能让它弯个弧度；但它很快就会冷却定型，到时候你就算用铁锤砸，结果也只有两种——要么纹丝不动，要么粉身碎骨，反正你想要的形状是得不到的。
- **印巴分治的教训**：1947 年英国人终于决定撤出印度，印度国大党要统一全印度、穆斯林联盟坚持另建巴基斯坦，英国政府干脆把划分边界线的任务交给一名伦敦律师——希里尔·拉德克利夫。拉德克利夫接到任务才第一次前往印度，但他并没有去划分边界的地方，只是参加了委员会的工作，他身在伦敦，根据地图、人口普查报告和一些听证材料做出的裁决。如果当时有个明白人请拉德克利夫吃顿饭、给他讲一讲两边的宗教信仰和历史情况，想必今天的局面会好的多——可恰恰是这么一个对那片土地完全陌生的人，随手画了一条线，就完成了地理手术，随后上千万人从国界的一边逃向另一边、然后是大仇杀、然后延续至今的印巴对抗。**那条线明显没画好，可你现在想重新画却几乎没可能——改变同一件事，趁热的时候不费吹灰之力，冷却了就像移动星系一样难。**
- **破缺的三种操作心法**（出自临界现象研究）：①**观察系统的可塑性**——热系统必须不止一个未来活着：一个领域如果只剩一个公认的赢家、一套公认的做法，它就已经冷了；而如果三四种说法都讲得通、谁也不敢说哪个是标准、技术路线还没定型、行业还没有支撑体系、组织还没有流程、平台还没有公认的商业模式，它就还在窗口里。而将冷未冷的一个特征是：大家不再各自判断，而是互相打听别人怎么选——"再看大厂怎么动""看领导怎么表态"，这时候就是人们在期待共有知识；②**寻找序参量**——能把无数局部选择压缩成一个宏观方向的那个量：磁铁看磁化方向、行业看有多少人采用同一标准、圈子看有多少关键人物公开承认同一个名分；两条技术路线竞争就用"采用 A 的比例减去采用 B 的比例"，如果差值接近零系统就还没选边，如果差值持续偏向一侧，那么破缺就正在发生——序参量一旦稳定偏转，系统里大量原本各自独立的选择就开始围着它重新排列；③**寻求可固化性**——你终于出手，要确保你这一小步能被系统记住：稳定系统消化能力强，小事很快无声无息；但临近对称性破缺的系统小事会反复回想不死——一篇文章转了又转、一个小 demo 让全行业焦虑、一次普通会议被私下议论好几个星期，这一切说明系统正在寻找一个出口。
- **利用破缺的心法总结成四个字：命名、样板、公开、固化**——给还没名字的东西一个名字，给还没标准的事一个能抄的样板，把它公开出去让大家知道别人也知道了，然后写进日程板、合同、手册。**用上一讲"生成"的话说，这就是让新秩序因你而生、但是不靠你而活。**

## 关键例证 / 金句

- **秦始皇书同文**：以中国之大、距离那么遥远的人都使用同一种文字，你难道不觉得这是奇迹吗？那是秦始皇统一天下、战乱刚刚把旧秩序融了个干净，李斯抓住了这个时刻以秦篆为标准完成书同文。本来各国的文字都出自商周传统但早已分岔，所幸各国还没有各自养出几百年的经典、成熟公文和大批读书人，对文字的认同感不深，所以李斯一道政令就能压平。如果李斯当年不做，中国就会像欧洲一样——拉丁文不好使，最终法语、意大利语、西班牙语等罗曼语族从拉丁语中分化出来，英语德语等日耳曼语族另有源流，全都发展出成熟的文化，后人再想统一可就难了。**可塑性不是权力的函数，而是温度的函数。只要系统还热，你就可以把自己的选择变成后人的默认值。**
- **华盛顿两任退场**：美国总统这个职位还是一张白纸的时候，华盛顿做满两届便主动退场，从此"总统不是国王"就是惯例，此后 140 多年的所有总统都把任期控制在两届以内——直到富兰克林·罗斯福打破惯例，但最后这条惯例还是被写进了宪法。
- **比尔·盖茨没把 DOS 一次性卖给 IBM**：个人电脑操作系统还没有定型的时候，比尔·盖茨保留了向其他厂商授权的权利，此后兼容机、软件和用户都围着 MS-DOS 聚集，微软站住了整个 PC 世界的收费站。
- **万维网 1993 年把核心软件置于公共领域**：浏览器、服务器和网页才能得以围绕开放协议共同生长。
- **1997 年乔布斯回归苹果**：趁整个组织都快垮了，一口气砍掉 70% 的产品路线图重新集中资源，后来 iMac、iPod 和 iPhone 的道路就是从这次几周内完成的重组中打开的。
- **破缺之前，局面像一枚竖立的硬币；破缺之后，历史学家开始解释它为什么必然导向这一面**——而复杂性科学提醒我们，那可能不过是偶然的一掷。但局面只要开始一边倒，正反馈就会把这个偶然越锁越死：**越多人接受它，接受它的理由就越充分，经济学家称之为路径依赖。开创者怎么干都有理，绝大多数人却是在玻璃冷透之后才想起自己对它的形状有意见。**
- **普通人怎么用**：你越想改变命运，就越得能抓住热局面——但也不是越热越好，玻璃一直热着你的动作就只是噪声。**真正的窗口是局面"将冷未冷"：可能性已经开始收敛、却还没收敛到只剩一种。** 正如前面讲机会窗口理论：机会窗口在主导类别出现的时候打开，到主导设计出现的时候关闭。越是刚入职的头三个月、谈判的第一轮、一段关系刚开始的头一两年、孩子刚出生的那几年，越是标签被冻结的关键期——**每个孩子刚出生都是对称的，每贴一张标签就发生一次破缺："我是数学不好的人""我是能上台的人"，这些身份一旦冻结会反过来指挥他后几十年的行为。危机也是一种特殊的窗口：失业、生病、项目崩盘、关系破裂，平时想改都改不动的结构此刻全都松动了——危机暂时把改变的成本打了折，趁一切还是碎的，重新拼一个更好的。**
- **萧何曹参的典故**：汉初的曹参接了萧何的班，整天喝酒一事不改，惠帝责问，曹参反问："论才能您比得上高帝？我比得上萧何吗？"潜台词是：人家那时候的系统是热的，到咱手里已经冷了。当然好消息是你还会遇到别的破缺时刻。**命运不是不可改变的，但也不是随时可以改变的。认命是认清哪些事已经冷了，不认命是盯住那些还热着的。**

## 如何应用

1. **识别热窗口**：一个领域还剩三四
种说法都讲得通、谁也不敢说哪个是标准，就是窗口；当大家不再各自判断、开始互相打听别人怎么选（"看大厂怎么动""看领导怎么表态"），破缺正在酝酿。用"采用 A 的比例减采用 B 的比例"当序参量，观察它是否持续偏向一侧。
2. **在将冷未冷时出手并固化**：给还没名字的东西命名、给还没标准的事提供样板、公开出去让大家知道别人也知道了、然后写进合同和手册——让新秩序因你而生但不靠你而活。确保你这一小步"能被系统记住"：临近破缺的系统里，小事会反复回想不死，这正是出手的信号。
3. **善用人生中的破缺时刻**：入职头三个月精心挑选一两件能见度高的小事做漂亮（第一印象持续很久）；谈判第一轮先出锚点（价格、职责、边界，别等对方出题）；关系头一两年悄悄凝固相处规则；孩子每贴一张标签就发生一次破缺，谨慎命名；危机（失业、生病、项目崩盘）是改变成本被打折的窗口——趁一切还是碎的，重新拼一个更好的。

---

## 全文（清洗后的课程转录，重点加粗+底纹）

欢迎来到现代思维工具课，我是万维钢。这一讲的思想工具可能是复杂性科学送给我们最强大的一个武器。你看过太空望远镜的那种星空照片：无数颗星星密密麻麻铺满画面，它们的位置看上去完全随机，可能你会想这些星星这么乱、随便挪动几颗大概也看不出什么区别。但事实是你挪不动。**照片上每一个小光点不是一颗星星，而是一个星系；照片上一毫米的距离就是几光年。你把一个星系稍微挪一挪所需要的能量，是大自然根本不允许的。星系都在动，但那张照片几千年都不会有可见的变化——你面对的是一个坚不可摧的既成事实。** 可为什么那些星系的位置是这样的呢？总得有个来历吧。答案来自偶然：早期宇宙的物质能量密度近乎均匀，只叠加着极其微小的量子涨落——这里稍微密一点点，那里稍微稀一点点；这个"一点点"是十万分之一，但就是那一点点的差异，让宇宙后来的物质这里多一点、那里少一点，那些物质在引力作用下慢慢变成星系，就是我们今天看到的样子。**今天这些星系的分布格局——哪里星光成团、哪里一片空旷——不过是初始随机抖动的放大。这个"从什么都有可能变成只有一种可能、而且坚不可摧"的过程，物理学有个专门的词叫对称性破缺。**

想把一支铅笔笔尖朝下立在桌上：它周围四面八方完全等价，物理方程没有偏爱任何一个方向，这就是对称。可是铅笔不能永远立着：可能因为空气瞬间的扰动、桌面细微的纹理，因为一些小到不能再小的偶然，它会倒下；而它一旦倒下，就只能倒向某一个方向，再也回不来了——**这就是对称的破缺。势能是对称的，结果是破缺的；混沌是对称的，混沌开了是破缺的，万事万物就由此展开。** 1972 年，贝尔实验室的物理学家菲利普·安德森（他后来得了诺贝尔物理学奖）在《科学》杂志发表一篇文章叫"多者异也"，他感慨宏观世界的规律不能从微观方程简单推出来，而破缺的对称性正是理解世界为什么一层一层长出新秩序的钥匙。**我要说的是，这把钥匙不但能解释星空，还能解释你的处境。简单说：命运不过是冷却了的偶然。**

咱们先看宇宙的演化。**宇宙的历史是一部降温史，每一次降温都逼着宇宙做一次选择。** 根据阿兰·古斯 1981 年提出的暴涨理论，宇宙诞生后远远不到一秒钟，经历了一次爆炸——也就是空间本身的超级爆炸式膨胀——把微观世界里本来转瞬即逝的量子涨落一口气拉伸到宏观尺度，冻结成宇宙密度分布的底稿；后来的 100 多亿年里，引力只是在按这份底稿施工。接着大约在诞生后万亿分之一秒，温度降到千万亿度的量级，破缺轮到了力和质量：在那之前电磁和弱相互作用还是同一种力，传力的粒子和组成物质的粒子全都没有质量；在那之后，弥漫在整个宇宙的希格斯场撑不住了，就像桌上的铅笔随机倒向了一个方向——电磁力和弱力从此分家，电子和夸克这些粒子有了质量，这叫电弱对称性破缺。然后是正反物质粒子的不对称：按理说大爆炸应该产出严格等量的正物质和反物质，正反物质相遇就会湮灭、化为光；如果宇宙坚决执行这个对称性，它的结局就是一片纯粹的光。可不知道什么原因，当年的账目里有一个微小的零头——大约每十亿个反物质粒子，对应十亿零一个正物质粒子。结果当湮灭如期而至，十亿对十亿同归于尽之后，总会剩下一个。**这个十亿分之一的零头，就构成了今天宇宙里所有的普通物质，包括你。** 这个零头到底从哪来的？物理定律到底哪里不对称了？物理学家这么多年找到了一些线索，但还没有完全解决。**这三次对称破缺都发生在大爆炸后的第一秒之内。我们很庆幸是不完美的产物：完美的东西应该绝对对称，可绝对对称就意味着什么都没有——不偏心的湮灭留不下物质，不站队的希格斯场给不出质量，完全均匀的宇宙长不出星系。所以破缺不是世界的瑕疵，破缺是世界的生成机制。涨落冻结、希格斯站队和正反物质湮灭是三种很不一样的物理过程，但它们都是让一点偶然的差异被选中、被放大、然后被永久保存。**

大自然如此，人世间也是如此。人类社会也有对称时刻：当几股力量达成均衡、几个阵营都可能赢、几个标准都合理、几个未来都说得过去、一切皆有可能——那么微小的扰动就能带来巨大的变化。**这就是社会的高温态。那时的社会就像一块刚出炉的玻璃，柔软可塑，你吹一口气就能让它弯个弧度；但它很快就会冷却定型，到时候你就算用铁锤砸，结果也只有两种——要么它纹丝不动，要么粉身碎骨，反正你想要的那个形状是得不到的。**

1947 年英国人终于决定撤出印度：印度国大党要统一全印度，穆斯林联盟则坚持另建巴基斯坦，于是英国给了个印巴分治方案。可是分界线应该画在哪呢？两边争执不下，英国政府干脆就把这项任务交给了一名伦敦律师，他叫希里尔·拉德克利夫。拉德克利夫接到任务才第一次前往印度，但他并没有去画边界的地方，只是参加了委员会的工作——他身在伦敦，根据地图、人口普查报告和一些听证材料做出的裁决。**如果当时有个明白人请拉德克利夫吃顿饭、给他讲一讲两边的宗教信仰和历史情况，想必今天的局面会好的多；可恰恰是这么一个对那片土地完全陌生的人，随手画了一条线，就给印度和巴基斯坦完成了地理手术。** 随后上千万人从国界的一边逃向另一边，然后是大仇杀，然后是延续至今的印巴对抗。拉德克利夫那条线明显没画好，可你现在想重新画却是几乎没可能。**改变同一件事，趁热的时候不费吹灰之力，冷却了就像移动星系一样难。** 所以要想建立传世基业，光有聪明才智是不够的，必须赶上窗口期才行。比如说以中国之大、从南到北从西到东距离那么遥远的人都使用同一种文字，你难道不觉得这是一个奇迹吗？那是秦始皇统一天下、战乱刚刚把旧秩序融了个干净，李斯抓住了这个时刻、以秦篆为标准完成的书同文。**纵观中国历史要做成这件事可能就只有这一个窗口：本来各国的文字都出自商周传统，但早已分岔各有各的写法；所幸的是各国还没有各自养出几百年的经典、成熟公文和大批读书人，所以对文字的认同感不深——这就使得李斯一道政令就能压平。如果李斯当年不做，让各地的语言文字继续独立演化下去，中国就会像欧洲一样——拉丁文不好使，最终法语、意大利语和西班牙语等罗曼语族语言从拉丁语中分化出来，英语和德语等日耳曼语族语言则另有源流，全都发展出成熟的文化，后人再想统一可就难了。可塑性不是权力的函数，而是温度的函数。**

我可以列举很多这样的奠基时刻：**只要系统还热，你就可以把自己的选择变成后人的默认值。** 美国总统这个职位还是一张白纸的时候，华盛顿做满两届便主动退场，从此"总统不是国王"就是惯例，此后 140 多年的所有总统都把任期控制在两届以内，直到富兰克林·罗斯福打破惯例，但最后这条惯例还是被写进了宪法。个人电脑的操作系统还没有定型的时候，比尔·盖茨没有把 DOS 一次性卖给 IBM，而是保留了向其他厂商授权的权利，此后兼容机、软件和用户都围着 MS-DOS 聚集，微软站住了整个 PC 世界的收费站。万维网还只是欧洲核子研究中心内部的一个信息共享项目时，研究中心在 1993 年把核心软件置于公共领域，于是浏览器、服务器和网页才能得以围绕开放协议共同生长。1997 年苹果公司濒临破产，乔布斯趁整个组织都快垮了，一口气砍掉 70% 的产品路线图、重新集中资源，后来 iMac、iPod 和 iPhone 的道路就是从这次几周内完成的重组中打开的。**破缺之前，局面像一枚竖立的硬币；破缺之后，历史学家开始解释它为什么必然导向这一面。而复杂性科学提醒我们，那可能不过是偶然的一掷。但局面只要开始一边倒，正反馈就会把这个偶然越锁越死：越多人接受它，接受它的理由就越充分，经济学家称之为路径依赖。开创者怎么干都有理，绝大多数人却是在玻璃冷透之后才想起自己对它的形状有意见。**

那你说这跟我一个普通人有什么关系呢？**回答：你越想改变命运，就越得能抓住热局面。** 其实也不是越热越好：如果玻璃一直都是热的，你的动作就只是噪声。真正的窗口是局面"将冷未冷"——意思是可能性已经开始收敛、却还没收敛到只剩一种。正如我们前面讲赚钱的时候说过的机会窗口理论：机会窗口是在主导类别出现的时候打开，到主导设计出现的时候关闭。这里咱们大略总结一下利用对称性破缺的心法，出自临界现象的相关研究，三点：**第一是观察系统的可塑性。** 热系统必须有不止一个未来活着：一个领域如果只剩一个公认的赢家、一套公认的做法，那它就已经冷了；而如果三四
种说法都讲得通、谁也不敢说哪个是标准，技术路线还没定型、行业还没有支撑体系、组织还没有流程、平台还没有公认的商业模式，它就还在窗口里。而将冷未冷的一个特征是：大家不再各自判断，而是互相打听别人怎么选——比如说"再看大厂怎么动"，或者"看领导怎么表态"，这个时候就是人们在期待共有知识。**第二，寻找序参量**——也就是能把无数局部选择压缩成一个宏观方向的那个量：磁铁看磁化方向，行业看有多少人采用同一标准，圈子看有多少关键人物公开承认同一个名分，这些就是序参量。两条技术路线竞争，用"采用 A 的比例减去采用 B 的比例"，如果差值接近零，系统就还没选边；而如果差值持续偏向一侧，那么破缺就正在发生。**序参量一旦稳定偏转，系统里大量原本各自独立的选择就开始围着它重新排列。第三，寻求可固化性**——你终于出手了，你要确保你这一小步能被系统记住：小动作原本没啥用，因为稳定系统消化能力强，小事、小文章、争论很快就无声无息；但是临近对称性破缺的系统，小事会反复回想不死——一篇文章转了又转，一个小 demo 让全行业焦虑，一次普通会议被私下议论好几个星期，这一切说明系统正在寻找一个出口。

咱们看几个生活中的应用场景。一个是新工具刚进公司的时候：老板宣布全面拥抱 AI，可是没有流程、没有模板、没人知道怎么用，大家都在观望打听——这就是可塑性；而哪套用法正在成为标准动作，就是序参量。你不如做出一个可复制的 skill 分给同事、乃至于进入内部教程——破缺就已经发生；等大家开始问"这事是不是得按你那个方法来"，你就是制度的创始人。一个是你刚入职的头三个月：这时候没人知道你是谁，你可以决定别人怎么给你定型——第一印象会持续很久很久，所以头三个月要挑一两件能见度高的小事做漂亮，让人第一次想起你就想到一个清晰的标签，比如"这能把复杂讲明白"。再比如谈判的第一轮：第一轮表达的价格、职责和边界会成为锚点，所以别等对方出题，你要先打破对称——一上来就给一页纸：目标、分工、交付什么、不包括在内，请对方回复、确认和引用它。还有一段关系刚开始的时候：夫妻俩谁管钱、怎么吵架、各自父母的边界在哪，这些规则会在相处的头一两年悄悄凝固，过了这个时机模式成为默认，再想改可就只能靠闹了。对
孩子也是如此：每个孩子刚出生都是对称的，每贴一张标签就发生一次破缺——"我是数学不好的人""我是能上台的人"，这些身份一旦冻结，会反过来指挥他后几十年的行为。还有一种特殊的窗口，那就是危机：失业、生病、项目崩盘、关系破裂，这些是坏消息，但也是局面重归对称的时刻——平时你想改都改不动的那些结构，比如住在哪、跟谁来往、怎么工作、怎么生活，此刻全都松动了。**危机暂时把改变的成本打了折，趁一切还是碎的，重新拼一个更好的。**

总结来说，这套心法就是**命名、样板、公开、固化**：给还没名字的东西一个名字，给还没标准的事一个能抄的样板，把它公开出去让大家知道别人也知道了，然后写进日程板、合同、手册。用上一讲"生成"的话说，这就是让新秩序因你而生、但是不靠你而活。**人们常说未来有无限种可能，其实只有年轻人的未来有无限种可能。你的每一次成长都是一次选择，每一次选择都是一次破缺，每一次破缺都是一次定型：你的身份会固定，你的路径会锁死，你的社会关系会固化，你的生活会冷却——那也太没意思了，这就是为什么文艺作品的主人公几乎都是年轻人。** 选择大于努力没错，可我们并不是任何时候都有得选：窗口开着的时候，一个小动作能改写后面很多年；窗口关了，你以为的选择不过是摆姿势而已。汉初的曹参接了萧何的班，整天喝酒一事不改，惠帝责问他说怎么这样当丞相呢？曹参反问："论才能您比得上高帝？我比得上萧何吗？"潜台词是：人家那时候的系统是热的，到咱手里已经冷了。当然好消息是你还会遇到别的破缺时刻。**命运不是不可改变的，但也不是随时可以改变的。认命是认清哪些事已经冷了，不认命是盯住那些还热着的。** 好，以上就是今天的全部内容，现代思维工具课，祝您每天都有收获。
`,sg=`# 100丨临近可能：如何实现无法事先想象的事情？

## 讲什么

**临近可能（adjacent possible）**——理论生物学家斯图尔特·考夫曼提出并发展起来的概念，考夫曼是复杂性科学重镇圣达菲研究所的元老，2000 年在《调查》那本书里系统展开了这个概念。**考夫曼说：任何系统在任何时刻周围都存在一圈"只差一步就能实现"的新状态——用现有的零件做一次组合、一次改动就够得着的东西，这一圈就是这个系统此刻的临近可能。** 生命起源就是不断把临近可能变成现实、一步步走出来的：原始地球的化学汤里本来没有 DNA 的位置，只有一些简单分子；可是简单分子能组合成稍复杂的分子，而每一种新分子一旦出现，又让一批此前根本不可能发生的化学反应变成了可能——就这样可能性的边界会随着每一次对之前可能的实现向外扩张。2010 年科普作家史蒂文·约翰逊在《伟大创意的诞生》里用一个比喻把临近可能讲给了大众：**你身处一栋魔法房子，推开一扇门走进一个新房间，而这个房间的墙上又长着几扇你在上一个房间里根本不见的新门。**

## 解决什么真问题

回答"为什么重大发明总是撞车、张忠谋 55 岁创办台积电这样的人生为什么无法提前规划"：以一个少年的剧本开场——17 岁父亲告诉他当作家会饿肚子，只好改学理工；24 岁在麻省理工学院两次博士资格考试落榜，深感受挫去找工作；拿到福特汽车（月薪 479 美元）和西凡尼亚电子公司（480 美元）两个机会，本想打电话让福特多给一美元竟被拒绝，于是去了西凡尼亚——作家不能当、科学家当不成、大厂也没进，最后去了个不那么知名的小公司。但此人是张忠谋：1958 年跳槽加入德州仪器，恰好在同一年杰克·基尔比造出了世界上第一块可工作的集成电路；他一路做到全球半导体业务的资深副总裁，是公司第三号人物；然后剧本急转直下——德州仪器把宝押在计算器和电子表上，张忠谋不认同，竟被一步步挪出权力中心，52 岁辞职、下一家公司也只干了一年上下不欢而散；54 岁去台湾出任工研院院长想搞改革也没啥根基；**可就在 55 岁这年，张忠谋创办了台积电，剩下的就是历史了。他在自传里说："如果要我挑选我的黄金时代，我毫不犹豫挑选 60 至 85 岁那两个半单位。"** 专业晶元代工这个行业那时候根本不存在，那是后来他发明的行业。**要理解这样的人生，光往一个人身上看是不行的——这不是"个人努力"什么所能解释的。我们必须考察一个更大的问题：一项事业、一个物种或者随便什么新东西到底是怎么冒出来的。答案是临近可能：关键的学问在于把创新从"以人为本"变成"以可能性为本"——关键不在于你聪明不聪明，你必须先实现一种可能性才能打开新的可能性；你先进入那个房间，才能打开那扇新门。**

## 核心论点

- **临近可能理论立即解释了科学史上的一个玄案：重大发明为什么总是撞车。** 牛顿和莱布尼茨各自发明了微积分，达尔文和华莱士几乎同时想到自然选择，贝尔和格雷干脆在 1876 年 2 月 14 号同一天为电话递交了专利文件。1961 年哥伦比亚大学社会学家罗伯特·默顿系统考察科学史得出结论：**多人独立几乎同时做出同一个重大发现不是例外，而是常态。** 如果灵感真是天才头脑里的神来之笔，怎么会这么巧同时进入两个天才的头脑呢？我们只要把创新看成推门，一切就都合理了：大家住在同一栋房子里，走廊尽头那扇新门是房子自己长出来的，那几个人恰好同时站在门口、同时发现了那扇门——这不是很正常吗？
- **组合进化**（圣达菲经济学家布莱恩·阿瑟 2009）：新技术全都是已有技术的组合，而每一项新技术一出生立刻变成下一项新技术的零件，于是工具箱越大、创造新工具就越快——这就是技术加速的根源。连国家的命运也是如此：2007 年物理学家塞萨尔·伊达尔戈和哈佛经济学家李卡多·豪斯曼在《科学》杂志发表产品空间研究——把全球贸易化成一张网络，发现国家的产业升级通常不是凭空跳跃，而是先做成跟现有能力相邻的产品、再从新位置去够下一个；中国从纺织服装、家电制造到手机、电子零部件和新能源汽车，也是沿着相邻能力一步步扩展过来的。**这就揭穿了那些"美国利用外星人技术搞出 iPhone"之类的阴谋论——如果是外星人技术，你根本找不到它的演化图谱；现实是每一项新技术都是沿着一系列临近可能实现出来的，哪有什么天降神迹，我们无非是因为去到某个房间才能打开某一扇门罢了。**
- **不可预先陈述性**（考夫曼和巴黎高等师范学院的数学家朱塞佩·龙哥、生物学家马尔蒙·泰维尔 2012 提出）：在生物演化中，不仅未来的状态不可预测，连未来可能空间里会出现哪些变量、哪些功能、哪些生态位都无法预先完整列举——这是一种"耐不确定性"，意思是未来的可能性你想象都想不出来，用考夫曼他们的话说："演化没有运动方程。"**考夫曼举的例子：请你列出一把螺丝刀的全部用途——拧螺丝、翘油漆罐、抵门、当凶器、做雕塑、削铅笔……你绝对列不完，因为用途是螺丝刀的内在属性跟所有场景的组合，而未来的场景还没长出来。** 1960 年激光被发明的时候研发人员都不知道这东西有什么用，还自嘲说"这是一个寻找问题的解决方案"——当时没有人能列出超市条形码、光纤和近视手术，可后来撑起激光产业的恰恰是这些用途。**把不可预先陈述性用在人身上：你学会一项新本领、拿出一件新作品、到达一个新身份或者认识一群新人之前，不可能提前预测到时候你会得到什么，因为你那个新构件会跟别的东西（也许也是新东西）发生组合。** 就像现在，电竞选手、带货主播、智能体工程师这些岗位就是上一代的人连想都想不到的——就如同张忠谋 55 岁创办台积电的时候纯晶元代工商业模式还不存在，英伟达要到六年之后（1993 年）才成立。**因为不可预先陈述性，张忠谋不可能预先算出台积电能有多大生意——他等于是给一个还没出生的产业先修了一座工厂；可是如果你不把这个工厂建起来，那个行业就不会出现。事实上张忠谋赌对了：台积电一旦真实存在，设计师从此不需要几亿美元建厂、一张图纸就能开公司，无厂芯片公司这个物种才得以大规模繁殖——高通、英伟达、联发科、苹果的芯片部门都在这个生态位。张忠谋不可能预见到智能手机和 AI 芯片，那些是临近可能的临近可能的临近可能；但是你不实现第一个可能，后面就都没可能。不可预先陈述性说：你无法提前终于一个还不存在的自我，你只能走过去把它走出来。**
- **操作心法：行动要满足三个条件**——①**必须临近**：不是一步登天，而是用你现有的知识、资源、关系再加一次够得着的伸展就能做成的事——你希望它足够新才打得开新门，但它也必须足够近才能被实现；②**必须留下一个现实的构件**：你一次行动结束之后，这个世界上应该多出一样东西——一篇文章、一个原型、一项经过实战检验的能力、一段共同做成过事的关系、一小群真实的用户；反过来，仅仅学过、想过、认识过、计划过，世界不会有任何变化；③**必须能参与下一次组合**：评价一件事别只问它现在给我什么回报，要问它做完之后还能长出什么。**第一条说的是探索，后两条说的是利用。说得直白一点：你得真投入进去、真下本钱、真做出个什么东西来才行。临近可能不是一个关于期权的学问：保留所有选项不会给你带来新的选项，你必须真投入到一个选项上去、为此不惜放弃别的选项，才能打开下一扇门。**

## 关键例证 / 金句

- 两个工程师的对照：甲的收藏夹里存着 100 个绝妙的点子，他谁也不告诉、迟迟不动手，因为一旦做了这个就等于放弃了别的；乙只有一个个不怎么样的点子，他花两个月把它做成一个粗糙的小工具发布了——那个工具招来一堆吐槽，但吐槽里藏着真需求，乙照着改了三次有了第一批用户；用户里冒出一个懂行的拉他合作，合作做出的第二个东西被一家公司看中，结果三年变成了他自己原来根本想不到的样子——他现在拥有很多新的可能、以前不可能的可能。**可是甲仍然抱着之前那 100 个可能。世界不会对你的潜力做出反馈，它只对你已经做出来的东西做出反馈，而反馈会改变你。**
- **学习**：最好的学习单位不是一门课，而是一个略高于当前能力、几周内能做出作品的项目——这句话里的三层限定正好对应上面三个条件。上完课，世界里只多了一张描述你的证书；做完项目，世界里多了一个会替你说话的东西。
- **职业**：比较两个岗位，大多数人比薪水、头衔、公司名气这些衡量的都是"这一步本身值多少"；你应该再加一个维度——**干满三年，我手里会多出什么？** 有的工作内容高度封闭，三年下来除了工资单什么都没留下；有的工作看似平庸，却让你攒下几个能搬走的构件。中年转行最可靠的方式不是抛弃过去重新投胎，而是把过去攒下的模块搬进一个新组合。
- **AI 时代的临近可能**：AI 让所有人面前突然多出一批便宜的零件——编程、翻译、设计、作调、调研。很多人问"AI 会不会取代我"——这其实是一个错误的问题，你问的是过去的可能性；正确的问题是搜索临近可能：**我已有的本领加上这些新零件，能组合出一个上个月还不存在的东西？你的临近可能刚刚被 AI 扩了一整圈，你得关注新出来的领地才对啊。**
- **重新审视"好高骛远"和"脚踏实地"**：难道目标定得高就叫好高骛远、守着自己的一亩三分地就叫脚踏实地吗？**只要你想做的那件事在你的临近可能范围之内，哪怕听起来特别高级，它也是合理的；而如果这件事不在你的临近可能范围内，哪怕是去工地搬砖也不能叫脚踏实地。临近可能还进一步告诉我们：你所处的位置比你是个什么人要重要得多——不同地理位置对应的是不同的可能性空间，而你的能力、你的关系、你的经历本质上也是可能性空间中的一个位置。你要做的不是追问"我是谁"、不是去发现什么真我，也不要问我的性格是什么、我的爱好是什么，那些只不过是一个暂时的位置而已；前往下一个位置，你会发现现在的你想象不到的可能。**

## 如何应用

1. **每次行动做三问自检**：①够得着吗（用现有知识资源关系+一次伸展就能做成）？②留下构件了吗（世界上多出了一篇文章/原型/能力/关系/用户，而不只是"我学过想过"）？③能参与下一次组合吗（做完还能长出什么）？**保留所有选项不会给你带来新的选项，真投入到一个选项上、不惜放弃别的，才能打开下一扇门。**
2. **把学习单位从"课"改成"项目"**：略高于当前能力、几周内能做出作品——上完课世界多一张证书，做完项目世界多一个会替你说话的东西。
3. **用"干满三年手里会多出什么"选工作**：有的工作三年下来除了工资单什么都没留下，有的让你攒下几个能搬走的构件；中年转行不是抛弃过去重新投胎，而是把过去攒下的模块搬进一个新组合。AI 来了，正确的问题不是"会不会取代我"，而是"我已有的本领加上这些新零件能组合出什么"。

---

## 全文（清洗后的课程转录，重点加粗+底纹）

欢迎来到现代思维工具课，我是万维钢。上一讲咱们说了偶然怎样冷却成命运（对称性破缺），讲的是门怎么关上，那听起来有点令人沮丧；但是即便这样，在有些情况下有些你从未想到的门会为你打开。这一讲咱们就说说门是怎么打开的。**想象有个少年原本一心相当作家，可是 17 岁这年父亲告诉他当作家会饿肚子，他只好改学理工；18 岁他幸运地获得读书的机会，可能也想过当科学家，可是 24 岁这年他在麻省理工学院两次博士资格考试中落榜，深感受挫，心想算了去找工作；他拿到两个机会：福特汽车月薪 479 美元，一家叫西凡尼亚的电子公司 480 美元。他本想打电话让福特多给一美元，竟然被拒绝了，于是去了西凡尼亚。** 你看：作家不能当，科学家当不成，大厂也没进，最后去了个不那么知名的小公司。有人说人生大部分事情是 30 岁以前决定的，这不就是一个最普通的好学生剧本吗？也许干个几十年退休，这辈子也就这样了。**但此人是张忠谋，只不过他那时候还不知道自己会成为今天的张忠谋。**

张忠谋 1958 年跳槽加入德州仪器，而恰好在同一年，杰克·基尔比就在德州仪器造出了世界上第一块可工作的集成电路。张忠谋展现了管理才能，从生产线工程师一路做到统领全球半导体业务的资深副总裁，是公司第三号人物；然后剧本急转直下：进入 70 年代，德州仪器把宝押在计算器和电子表这些消费电子上，可是张忠谋并不认同，竟被一步步挪出权力中心。张忠谋在 52 岁这年辞职，转头的下一家公司也只干了一年上下、不欢而散。**我们能看出来张忠谋是个特别有想法的人，可是 30 年美国闯荡，他终究没能成为任何一家公司的一号人物。** 现在 50 多岁了还能怎样呢？54 岁他去台湾出任工研院院长，本想搞改革，可是没啥根基也是里外不讨好。按一般认知，这个岁数的人混几年退休算了。**可就在 55 岁这年，张忠谋创办了台积电，剩下的就是历史了。张忠谋在自传里说："如果要我挑选我的黄金时代，我毫不犹豫挑选 60 至 85 岁那两个半单位。"60 岁才迎来黄金时代，而且长达 25 年，你能想像吗？** 人们常说要做自己、要找到真正的热爱、要实现自我，可是 17 岁的张忠谋以为真我是作家，52 岁的他也不知道此生最重要的事业还没开始——专业晶元代工这个行业那时候根本不存在，那是后来他发明的行业。

**要理解这样的人生，你光往一个人身上看是不行的——这不是个人努力什么的所能解释的。我们必须考察一个更大的问题：一项事业、一个物种或者随便什么新东西到底是怎么冒出来的。** 这一讲的思想工具叫做**临近可能**。临近可能是理论生物学家斯图尔特·考夫曼提出并发展起来的概念，考夫曼是复杂性科学重镇圣达菲研究所的元老，2000 年在《调查》那本书里系统展开了这个概念。**考夫曼说：任何系统在任何时刻周围都存在一圈"只差一步就能实现"的新状态——用现有的零件做一次组合、一次改动就够得着的东西，这一圈就是这个系统此刻的临近可能。** 生命起源就是不断把临近可能变成现实、一步步走出来的：比如原始地球的化学汤里本来没有 DNA 的位置，只有一些简单分子；可是简单分子能组合成稍复杂的分子，而每一种新分子一旦出现，又让一批此前根本不可能发生的化学反应变成了可能——就这样可能性的边界会随着每一次对之前可能的实现向外扩张。2010 年科普作家史蒂文·约翰逊在《伟大创意的诞生》里用一个比喻把临近可能讲给了大众：**你深处一栋魔法房子，推开一扇门走进一个新房间，而这个房间的墙上又长着几扇你在上一个房间里根本不见的新门。** 以我之见，临近可能这个学说的根本是把创新从"以人为本"变成了"以可能性为本"：**关键不在于你聪明不聪明，你必须先实现一种可能性才能打开新的可能性——你先进入那个房间，才能打开那扇新门。**

临近可能理论立即就能解释科学史上的一个玄案：**重大发明为什么总是撞车。** 牛顿和莱布尼茨各自发明了微积分，达尔文和华莱士几乎同时想到自然选择，贝尔和格雷干脆在 1876 年 2 月 14 号同一天为电话递交了专利文件。1961 年哥伦比亚大学社会学家罗伯特·默顿通过系统考察科学史得出这样一个结论：**多人独立几乎同时做出同一个重大发现，不是例外，是常态。** 如果灵感真是天才头脑里的神来之笔，怎么会这么巧灵感同时进入两个天才的头脑呢？我们只要把创新看成推门，一切就都合理了：大家住在同一栋房子里，走廊尽头那扇新门是房子自己长出来的，那几个人恰好同时站在门口、同时发现了那扇门——这不是很正常吗？2009 年圣达菲研究所的经济学家布莱恩·阿瑟把这个逻辑推广到一切技术，叫**组合进化**：**新技术全都是已有技术的组合，而每一项新技术一出生，立刻变成下一项新技术的零件，于是工具箱越大、创造新工具就越快——这就是技术加速的根源。** 连国家的命运也是如此：2007 年物理学家出身的塞萨尔·伊达尔戈和哈佛大学经济学家李卡多·豪斯曼在《科学》杂志发表了产品空间研究——他们把全球贸易化成一张网络，发现国家的产业升级通常不是凭空跳跃，而是先做成跟现有能力相邻的产品、再从新位置去够下一个；中国从纺织服装、家电制造到手机、电子零部件和新能源汽车，也是沿着相邻能力一步步扩展过来的。**这就让你明白那些所谓"美国利用外星人技术搞出 iPhone"之类的阴谋论是站不住脚的：如果是外星人技术，你根本找不到它的演化图谱。现实是每一项新技术都是沿着一系列临近可能实现出来的，哪有什么天降神迹，我们无非是因为去到某个房间才能打开某一扇门罢了。**

我们这门课程前面讲过的几个思维工具都跟临近可能有关系：效果推理说创业不是先想好一个产品再去找资源，而是先看自己手里有什么、再看这些东西能组合出什么；状态杠杆说做任何事别做完就算了，要为下一步预留状态；能耐寻求定理说最优策略不是追求一时回报，而是前往能给下一步打开更多可能性的地方。它们视角不同，但都有"走一步看一步"的意思。**而临近可能还有一层更激进的意思：这一步走完打开新的可能性，你心中的世界就不是原来那个世界了。** 2012 年考夫曼和巴黎高等师范学院的数学家朱塞佩·龙哥、生物学家马尔蒙·泰维尔提出一个更强的主张：**在生物演化中，不仅未来的状态不可预测，连未来可能空间里会出现哪些变量、哪些功能、哪些生态位都无法预先完整列举——他们称之为不可预先陈述性。用我们前面讲过的概念来说，这是一种耐不确定性：未来的可能性你想象都想不出来。用考夫曼他们的话说："演化没有运动方程。"** 考夫曼爱举的一个例子是这样的：请你列出一把螺丝刀的全部用途——你能想到很多：拧螺丝、翘油漆罐、抵门、当凶器、做雕塑、削铅笔等等；**但是你绝对列不完。这是因为用途是螺丝刀的内在属性跟所有场景的组合，而未来的场景还没长出来。** 比如 1960 年激光被发明出来的时候，研发人员都不知道这东西有什么用，还自嘲说"这是一个寻找问题的解决方案"——当时没有人能列出超市条形码、光纤和近视手术，可后来撑起激光产业的恰恰是这些用途。**把不可预先陈述性用在人身上：你学会一项新本领、拿出一件新作品、到达一个新身份或者认识一群新人之前，不可能提前预测到时候你会得到什么，因为你那个新构件会跟别的东西（也许也是新东西）发生组合。** 就拿现在来说，像电竞选手、带货主播、智能体工程师这些岗位就是上一代的人连想都想不到的。就如同张忠谋 55 岁创办台积电的时候，纯晶元代工商业模式还不存在，当时只有几家小设计公司感兴趣，英伟达要到六年之后（1993 年）才成立。**因为不可预先陈述性，张忠谋不可能预先算出台积电会有多大生意——他等于是给一个还没出生的产业先修了一座工厂；可是如果你不把这个工厂建起来，那个行业就不会出现。事实上张忠谋赌对了：台积电一旦真实存在，设计师从此不需要几亿美元建厂、一张图纸就能开公司，无厂芯片公司这个物种才得以大规模繁殖——高通、英伟达、联发科、苹果的芯片部门都在这个生态位。张忠谋不可能预见到智能手机和 AI 芯片，那些是临近可能的临近可能的临近可能；但是你不实现第一个可能，后面就都没可能。不可预先陈述性说：你无法提前终于一个还不存在的自我，你只能走过去把它走出来。**

打开临近可能的操作心法很简单：**你的行动要满足三个条件。第一，它必须是临近的**——它不是一步登天，而是用你现有的知识、资源、关系再加一次够得着的伸展就能做成的事；你希望它足够新才打得开新门，但它也必须足够近才能被实现。**第二，它必须留下一个现实的构件**——你一次行动结束之后，这个世界上应该多出一样东西：一篇文章、一个原型、一项经过实战检验的能力、一段共同做成过事的关系、一小群真实的用户；反过来，仅仅学过、想过、认识过、计划过，世界不会有任何变化。**第三，它必须能参与下一次组合**——评价一件事别只问它现在给我什么回报，要问它做完之后还能长出什么。**第一条说的是探索，后两条说的是利用。说得直白一点：你得真投入进去、真下本钱、真做出个什么东西来才行。临近可能不是一个关于期权的学问：保留所有选项不会给你带来新的选项。你必须真投入到一个选项上去，为此不惜放弃别的选项，才能打开下一扇门。** 这就好比有两个工程师：甲的收藏夹里存着 100 个绝妙的点子，他谁也不告诉、也迟迟不动手，因为一旦做了这个就等于放弃了别的；乙只有一个不怎么样的点子，他花两个月把它做成一个粗糙的小工具发布了。那个工具招来一堆吐槽，但吐槽里藏着真需求，乙照着改了三次，有了第一批用户；用户里冒出一个懂行的拉他合作，合作做出的第二个东西被一家公司看中，结果三年变成了他自己原来根本想不到的样子——他现在拥有很多新的可能，以前不可能的可能。**可是甲仍然抱着之前那 100 个可能。世界不会对你的潜力做出反馈，它只对你已经做出来的东西做出反馈，而反馈会改变你。**

看几个应用场景。先说学习：**最好的学习单位不是一门课，而是一个略高于当前能力、几周内能做出作品的项目**——这句话里的三层限定正好对应上面三个条件。上完课，世界里只多了一张描述你的证书；做完项目，世界里多了一个会替你说话的东西。再说职业：比较两个岗位，大多数人比薪水、头衔、公司名气，这些衡量的都是"这一步本身值多少"；你应该再加一个维度——**干满三年，我手里会多出什么？** 有的工作内容高度封闭，三年下来除了工资单什么都没留下；有的工作看似平庸，却让你攒下几个能搬走的构件。中年转行最可靠的方式不是抛弃过去重新投胎，而是把过去攒下的模块搬进一个新组合。还有 AI：**AI 让所有人面前突然多出一批便宜的零件——编程、翻译、设计、作调、调研。很多人说"AI 会不会取代我？"这其实是一个错误的问题，你问的是过去的可能性。正确的问题是搜索临近可能：我已有的本领加上这些新零件，能组合出一个上个月还不存在的东西？你的临近可能刚刚被 AI 扩了一整圈，知道吗？你得关注新出来的领地才对啊。**

在临近可能的视角下，我们不妨重新审视一下相关的传统智慧。比如说什么叫好高骛远、什么叫脚踏实地——**难道目标定得高就叫好高骛远、守着自己的一亩三分地就叫脚踏实地吗？只要你想做的那件事在你的临近可能范围之内，哪怕听起来特别高级，它也是合理的；而如果这件事不在你的临近可能范围内，哪怕是去工地搬砖也不能叫脚踏实地。** 临近可能还进一步告诉我们：**你所处的位置比你是个什么人要重要得多。** 不同地理位置对应的是不同的可能性空间，而你的能力、你的关系、你的经历本质上也是可能性空间中的一个位置。**你要做的不是追问"我是谁"，不是去发现什么真我，也不要问我的性格是什么、我的爱好是什么——那些只不过是一个暂时的位置而已；前往下一个位置，你会发现现在的你想像不到的可能。** 好，以上就是今天的全部内容，现代思维工具课，祝您每天都有收获。
`,ag=`# 102丨反馈回路：怎样操控复杂系统

## 讲什么

**反馈回路（feedback loop）**——复杂系统看上去都很复杂：你眼前就像摆着一块有上千个按钮的控制面板，你根本不知道它们都是干什么用的，甚至都不知道自己该往哪看。大部分人生只给面板上的一个按钮服务，很少考虑整个系统是怎么运行的。**这一讲说怎么迅速抓住一个系统的本质：任何一个复杂系统——不管是一家公司、一个核电站乃至于一个国家——其中真正起决定性作用的因果关系通常就只有那么几条，抓住这几条，你就能理解它、操控它、预测它的命运，这几条叫做反馈回路。** 不要把它看成一台静止的机器，要把它想像成一个有输入有输出的活的东西：比如一家工厂输入原材料、输出产品，但原材料是用钱买的、产品会卖成钱，所以这个工厂本质上输入的是钱、输出的也是钱，输入输出之间的差价就是它赚到的钱。所谓反馈回路就是因果绕了一个圈又回来了：**A 导致 B，B 导致 C，C 又反过来作用于 A。**

## 解决什么真问题

解释"为什么减肥难、吵架会失控、加班救火越救越忙，以及怎么才能真正操控一个系统"：系统动力学把反馈回路分成两种——**正反馈（强化回路）** 是反馈会加强你最初的那个动作、把整体的变化放大（孩子表现好得到鼓励、鼓励提高信心、信心让他表现更好；股价越涨越多人买、越多人买股价越涨）；**负反馈（平衡回路）** 是反馈会把最初的那个动作往反方向拉（空调温度高于设定值就开机致冷，降回设定值附近就停止——负反馈是纠正偏差、寻求平衡的力量）。**因为"正负"两个字太容易让人联想好坏，系统动力学家干脆换了名字：正反馈叫强化回路，负反馈叫平衡回路。强化回路制造增长——不管是好东西的增长还是坏东西的增长（病毒传播、债务滚雪球）；平衡回路制造稳定——恒温器、超市补货、家庭预算控制、体温调节。** 中国人说"天之道损有余而补不足"这就是平衡回路，"人之道损不足而奉有余"这就是强化回路；圣经马太福音"凡有的还要加给他叫他有余"说的是一样意思，以至于现在一提到正反馈就说那是马太效应。**一个强化回路、一个平衡回路——想要控制好系统，你只需要抓住这两个东西：你想让它增长，就得启动它的强化回路；你想让它稳定，就必须建立负反馈。**

## 核心论点

- **为什么减肥难**：因为你的身体里装着一条平衡回路，它保卫的是你当前的体重——你少吃，它就降低消耗、放大食欲，千方百计把缺口给你找补回来。**你不是在跟脂肪作战，而是在跟负反馈作战。** 那当初是怎么肥的呢？有一条现成的强化回路：吃得多→脂肪增加→身体越沉→活动越费劲→人越少动→热量盈余越大→脂肪继续增加。**到这一步，脂肪已经不只是变胖的结果，它还成了下一轮变胖的原因。** 所以要减肥不能只靠"少吃"对抗平衡回路，得先切断那条强化回路（改变生活方式），让脂肪不再是下一轮变胖的原因。
- **快回路挤压慢回路的陷阱**（雷鹏宁和斯特曼 2001，MIT 斯隆管理学院）：公司项目进度落后，老板要求全员加班，进度追回来了——这是条很有效的平衡回路，但它是条快回路；改善进度还有一条慢回路——流程改进、员工培训和自动化，这才是更根本的解决方案。**如果加班不断占用原本用于复盘、培训和流程改进的资源，快回路就会挤压慢回路：压力越大，更努力地工作这条快回路就越挤压更聪明地工作这条慢回路，这样的组织会越来越不聪明，于是会出越来越多的毛病到处救火，于是越来越依赖救火——进入了恶性正反馈循环，最终公司变成一片只能靠救火维持的森林。** 情绪化减肥也是快回路挤压慢回路：今天重一斤就绝食、明天轻半斤就奖励自己，每天都在纠正数字，却没有建立长期的饮食和运动习惯——快回路越忙，慢回路越欠。**这才叫大局观：看问题要看回路，而不是只看眼前这个动作。**
- **闭环控制**：给你一把从来没用的枪让你打 100 米外的靶子，你不懂弹道学、不知道风速风向、准心说不定还是歪的——怎么办？先打一枪，打完看看着点：偏左就往右瞄一点，偏上就往下压一点，每枪调一调，几枪之内就能上靶。**你用一个平衡回路就找准了靶心，不需要任何细节知识，只需要有效的反馈。** 治国也是这样：中国改革开放怎么转型搞市场经济没有人知道，邓小平的智慧就是搞闭环控制——这打一枪那打一枪看看反馈：今天给个政策，明天弄个特区，后天开个股市，效果行就继续、不行再调回来。**这就如同开车一样，只要能得到有效的反馈，你就可以无意识地把握好方向盘，而不必在意经济学原理的细节。老子说"治大国若烹小鲜"也是这个意思——治理没有那么大复杂，操控复杂度跟做饭差不多；当然这句话更重要的另一层意思是国家经济就如同小鱼一样脆弱，不能来回乱翻动，这里需要的是慢回路而不是快回路——治大国不能瞎折腾。** 与闭环控制相对的是开环控制：事先做好各种预测判断、找到最佳力度、发出命令执行，但不会根据反馈结果对行动进行微调——系统这么复杂你怎么可能做好精确的计算呢？然而生活中大量的事情恰恰就是开环控制：有的部门发布政策、有的顾问提交方案、有的品牌制作广告，都不看任何反馈；包括现在绝大多数医院给病人治病都是"开了药出了院病人就回家了"，极少有医生会在几个月之后回访看这个病人好了没——**这么重要的工作竟然没有一个正式的反馈机制，你不觉得很荒唐吗？开环依赖圣明，闭环依赖纠错。有反馈，你才不必无所不知。**

## 关键例证 / 金句

- 吵架的自我放大：一句重话招来一句更重的话，冲突就会自我放大、后果不堪设想。**有经验的夫妻会让升级的信号自动触发降温动作——只要有人提高音量，双方就暂停，情绪越高反而越少说话。** 你不想让什么事情失控，就必须把正反馈改成负反馈。
- **微信支付的冷启动（2014）**：腾讯要推微信支付，最大的障碍是没人绑银行卡——绑卡这件事支付宝做了十年，你怎么追得上呢？微信的冷启动是过年发红包：它没有拿"推广支付"这个终点当起点，它把火力集中到了春节这个高密度时刻。结果从除夕到大年初一下午，500 多万人参与抢红包；抢到的钱想提现就得绑卡——红包抢完银行卡却留下来：在社交回路里春节的人情关系是输入、几百万人抢红包是输出；到了支付回路，这些完成绑卡的人又成了第一批输入，回路就这样闭合。马云都被打懵了，事后把腾讯此番操作称为"珍珠港偷袭"。**腾讯这把冷启动之所以这么有效，关键还是因为微信本来就是一个社交工具，这是他们已有的先发优势；而且即便如此，也得用真金白银点火——微信支付真正进入全民级规模，是等到第二年春晚摇一摇之后：腾讯光买央视春晚独家新媒体互动资格就花了 5300 万元，摇一摇的现金红包池更是超过 5 亿元。冷启动成本高、用力大，而且还不一定能成功。**
- **先发优势 vs 后发优势**：为什么不等别人做好了从零到一、我们直接做从一到 N 呢？摩托罗拉的铱星计划豪掷 50 多亿美元建成全球卫星电话网，结果终端设备太重、通话费太高、用户根本负担不起，最终 1999 年申请破产保护。经济学家杨小凯先生曾经专门警告过：**后发你不能光想着优势，你还会有后发病——人家先发冷启动的确有很大风险，会遭遇到各种困难、不得不首先解决各种难题，但在解决这些难题的过程中他们会学到一些宝贵的东西，包括制度、投资环境和原创精神，这些东西会让他们有能力解决新的难题，所以他们有可能继续保持领先；而你跟在后面抄作业固然成本低，可你没有独自解决过那些难题，你就学不到解决难题的能力，就只能继续跟在后面。从冷启动、先发优势、有能力做下一次冷启动，这本身也是一个强化回路。** 但先发的确会死在沙滩上啊——前面讲机会窗口不是说时机应该在主导类别出现之后吗？没错，**但真正的先发优势不是第一个冲进无人区，而是在路线刚被证明、位置还没被占满的时候率先闭合自己的回路。你可以不做第一个试错的人，但不能等别人把标准、用户、人才和渠道都变成他的存量之后再进场。** 为什么中国制造能占领人家那么大的市场却只能要一个很低的利润？因为你没有先发优势就没有定价权，你只能靠对外压价格、对内压成本生存。**先发优势才是真正的优势，后发是没有办法的办法。**
- **正反馈是不稳定的，可能失控、预示着危险和麻烦，总和泡沫、挤兑联系在一起；负反馈是调控极致，稳定理性懂得纠错，管理者爱它、养生的人也爱它。但只有正反馈才能带来增长：正反馈是生发的机制，你调控是调控不出什么新东西的。先有强化回路才值得搭建一个平衡回路。** 套用一个著名的句式：失去负反馈，失去很多；失去正反馈，失去一切。**你需要活，而不只是活着。**

## 如何应用

1. **识别回路再动手**：遇到问题先问"这里有哪些反馈回路？哪条是强化回路、哪条是平衡回路？"——想增长就启动强化回路，想稳定就建立负反馈。减肥别只跟平衡回路硬刚（少吃会被身体找补回来），先切断"吃多→变胖→少动→更胖"的强化回路。
2. **警惕快回路挤压慢回路**：救火式加班看似解决了进度问题，却挤占了流程改进和培训的慢回路资源——组织会越来越不聪明、越来越依赖救火。**看问题要看回路，而不是只看眼前这个动作。**
3. **做闭环控制，别做开环控制**：给系统建立反馈机制（打一枪看反馈再调），不要"开了药就回家"式的无反馈操作。做新事业用冷启动四心法：别照着终点做起点、结果必须是真的、集中火力、第一轮必须生产第二轮——**用作品换来证明，用证明换来信用；每一轮都得重新花钱求人那不叫飞轮，叫人
工呼吸。**

---

## 全文（清洗后的课程转录，重点加粗+底纹）

欢迎来到现代思维工具课，我是万维钢。复杂系统看上去都很复杂：你眼前就像摆着一块有上千个按钮的控制面板，你根本不知道它们都是干什么用的，甚至都不知道自己该往哪看。大部分人生只给面板上的一个按钮服务，很少考虑整个系统是怎么运行的。领导说"你这项工作很重要，绝对大意不得"，你连连称是，心想连我这项工作都这么重要，那些掌控全局的人恐怕都是神人吧。**他们不是神人，而且这个系统没有那么不好理解。这一讲咱们就说怎么迅速抓住一个系统的本质。要点是：任何一个复杂系统，不管他是一个公司也好、一个核电站也罢、乃至于是一个国家，其中真正起决定性作用的因果关系通常就只有那么几条。抓住这几条，你就能理解他、操控他、预测他的命运。这几条叫做反馈回路。** 不管你面对的是一个大系统，还是你想理解大系统中的一个子系统，都不要把它看成是一台静止的机器，你要把它想像成一个有输入有输出的活的东西。比如说一家工厂：它会输入原材料、输出产品，但原材料是用钱买的、产品会卖成钱，所以这个工厂本质上输入的是钱、输出的也是钱，输入跟输出之间的差价——也就是系统留下的东西——就是它赚到的钱。简单吧？那么从输入到输出会经过一连串因果关系：A 导致 B，B 导致 C，行为产生后果向外传导。**所谓反馈回路就是因果绕了一个圈又回来了：A 导致 B，B 导致 C，C 又反过来作用于 A。** 比如你把产品降价，销量就增加；销量增加，固定成本就摊薄；成本摊薄，你就还能进一步把产品降价——这就是一个正反馈回路，也就是反馈会加强你最初的那个动作、把整体的变化放大。

生活中有很多正反馈现象：一个孩子表现好得到鼓励，鼓励提高信心，信心又让他表现得更好；股价越涨越多
人买，越多人买股价越涨。**但是请注意，正反馈的意思可不一定是正增长：股市暴跌也是正反馈——恐慌引发抛售，抛售制造更大的恐慌，这是在放大恐慌这个东西。正反馈是一种放大的力量，不管放大的是好东西还是坏东西。** 真正的负反馈，意思是反馈会把最初的那个动作往反方向拉。比如你家的空调：室温一旦高过设定值它就开机致冷，等温度降回设定值附近它就停止——最初的作用是致冷，反馈回来的动作是停止冷。**负反馈是一种纠正偏差、寻求平衡的力量。因为"正负"这两个字太容易让人联想好坏，系统动力学家干脆给他们换了名字：正反馈叫强化回路，负反馈叫平衡回路。强化回路制造增长——不管是好东西的增长还是坏东西的增长，比如病毒传播、债务滚雪球等；平衡回路制造稳定——比如恒温器、超市补货、家庭预算控制、身体的体温调节等。** 中国人说"天之道损有余而补不足"，这其实就是平衡回路；"人之道损不足而奉有余"，这就是强化回路。圣经马太福音里有句话叫"凡有的，还要加给他，叫他有余"，说的一样意思——以至于现在一提到什么机制是正反馈，就说那是马太效应。

**一个强化回路、一个平衡回路，想要控制好系统，你只需要抓住这两个东西：你想让它增长，就得启动它的强化回路；你想让它稳定，就必须建立负反馈。** 反馈回路能让我们理解很多事情。比如为啥减肥难呢？**因为你的身体里装着一条平衡回路，而他保卫的是你当前的体重：你少吃，他就降低消耗、放大食欲，千方百计把缺口给你找补回来。你不是在跟脂肪作战，而是在跟负反馈作战。** 那当初是怎么肥的呢？有一条现成的强化回路：吃得多，脂肪增加，身体越沉，活动越费劲，于是人越少动，越少动热量盈余越大，脂肪就继续增加。**到这一步，脂肪已经不只是变胖的结果，他还成了下一轮变胖的原因。** 你要是不想让什么事情失控，就必须把正反馈改成负反馈。比如吵架：一句重话招来一句更重的话，冲突就会自我放大、后果不堪设想。所以有经验的夫妻会让升级的信号自动触发降温动作——只要有人提高音量，双方就暂停，情绪越高反而越少说话。

一个比较麻烦的情况是局面由不止一条反馈回路控制。比如你们公司项目进度落后了，老板要求全员加班，进度追回来了——进度落后→加班→进度跟上，这是一条很有效的平衡回路，但这
是一条快回路。可是改善进度还有一条慢回路，那就是进度落后→改进流程、培训员工和推进自动化→进度加快——这才是更根本的解决方案啊。**如果加班不断占用原本用于复盘、培训和流程改进的资源，快回路就会挤压慢回路。** 2001 年，麻省理工学院斯隆管理学院的两位管理学家尼尔森·雷鹏宁和约翰·斯特曼研究企业的流程改进，就发现一个普遍的陷阱：**压力越大，"更努力地工作"这条快回路就越挤压"更聪明地工作"这条慢回路——这样的组织会越来越不聪明，于是他们会出越来越多的毛病到处救火，于是他们就会越来越依赖于救火，等于是进入了一个恶性正反馈循环，最终公司就会变成一片只能靠救火维持的森林。** 同样道理，情绪化减肥也是快回路挤压慢回路：今天重一斤就绝食，明天轻半斤就奖励自己，每天都在纠正数字，却没有建立长期的饮食和运动习惯——快回路越忙，慢回路越欠。**这才叫大局观。**

好，现在有了回路眼光，你能干两件大事。**第一件事叫做闭环控制，这个很简单**：给你一把你从来没
用过的枪，让你打 100 米外的靶子。你不懂弹道学、不知道风速风向，这把枪的准心说不定还是歪的——你怎么办呢？你先打一枪，打完看看着点：如果偏左，你下一枪往右瞄一点；如果偏上，你就往下压一点。每次调一调，几枪之内你就能上靶。**你用
一个平衡回路就找准了靶心，你不需要任何细节知识，你只需要有效的反馈。其实治国也是这样：比如中国的改革开放，大国怎么转型搞市场经济没有人知道。邓小平的智慧就是搞闭环控制——这打一枪、那打一枪，看看反馈：今天给个政策，明天弄个特区，后天开个股市。效果行就继续，不行再调回来。**这就如同开车一样，只要能得到有效的反馈，你就可以无意识地把握好方向盘，而不必在意经济学原理的细节。老子说"治大国若烹小鲜"也是这个意思：治理没有那么复杂，操控复杂度跟做饭差不多。当然这句话更重要的一层意思是：国家经济就如同小鱼一样脆弱，不能来回乱翻动——这里需要的是慢回路而不是快回路，治大国不能瞎折腾。** 与闭环控制相对的是开环控制，也就是事先做好各种预测判断行动
的后果，然后找一个最佳的力度，发出命令执行，但不会根据反馈结果对行动进行微调。理解了闭环控制，你会觉得这种开环控制是非常奇怪的：系统这么复杂，你怎么可能做好精确的计算呢？然而生活中大量的事情恰恰就是开环控制：比如说有的部门发布政策、有的顾问提交方案、有的品牌制作广告，都不看任何反馈。包括现在绝大多数医院给病人治病，都是开了药出了院病人就回家了，极少有医生会在几个月之后回访，看看这个病人好了没有、去别的医院了、还是已经去世了——**这么重要的工作竟然没有一个正式的反馈机制，你不觉得很荒唐吗？开环依赖圣明，闭环依赖纠错。有反馈，你才不必无所不知。**

你能干的第二件大事叫**启动**：任何一个事业发展壮大都需要经历正反馈的过程，创业者称之为增长飞轮。可是**正反馈只能把"有"放大，不能把"无"变成"有"**：比如你想靠写作成名，那么你需要有人帮你转发文章，可是你没有读者所以没人转发、没人转发你就更没有读者。怎么让这个飞轮转起来呢？**冷启动就是要提供最初的那个从零到一：请个大佬推荐也好、花钱做广告也好，你都需要一个无中生有的种子。启动机制不同于运行机制：一家成熟的公司会相当自动化——用户自发传播他的产品，各商家自动找上门合作；但他的启动阶段完全可以是手工的、低效的、被补贴的、创始人一个一个求人的。** 冷启动的心法，我们大致可以总结四条：**第一，别照着终点做起点**——用户、名气、资本都是大回路转起来以后的产物，不是第一圈的燃料。第一圈真正的产物是一个说得通的圆形（原型），是拿得出手的作品，用作品换来证明、用证明换来信用。**第二，启动可以不好看，但结果必须是真的**——第一批用户不能是假流量数字，而是对你感兴趣的真
人；第一份成功哪怕很小，也得给你留下证据、方法和信用，否则再大的声势也
只是在给一个死系统化妆。**第三，集中火力**——十个种子散在全国，只是十个孤点；压进一个科室、一个社群、一个时刻，才可能成为爆点。**第四，第一轮必须生产第二轮**——一次交付要留下案例，一次服务要留下推荐，一次交易要留下数据、关系或现金；否则每一轮都得重新花钱求人，那不叫飞轮，叫人
工呼吸。这四条用一个案例就能看全：**2014 年腾讯要推微信支付，最大的障碍是没人绑银行卡**——绑卡这件事支付宝做了十年，你怎么追得上呢？微信的冷启动是"过年发红包"：它没有拿推广支付这个终点当起点，它把火力集中到了春节这个高密度时刻。结果从除夕到大年初一下午，500 多万人参与抢红包，抢到的钱想提现就得绑卡——红包抢完银行卡却留下来。在社交回路里，春节的人情关系是输入、几百万人抢红包是输出；到了支付回路，这些完成绑卡的人又成了第一批输入，回路就这样闭合。马云都被打懵了，事后把腾讯此番操作称为"珍珠港偷袭"。**其实腾讯这把冷启动之所以这么有效，关键还是因为微信本来就是一个社交工具，这是他们已有的先发优势。而且即便如此，也得用真金白银点火：微信支付真正进入全民级规模，是等到第二年春晚"摇一摇"之后——当时腾讯光是买央视春晚独家新媒体互动资格就花了 5300 万元，摇一摇的现金红包池更是超过 5 亿元，有多家企业赞助商提供，才换来全国观众十分钟摇出 1.2 亿个红包。冷启动成本高、用力大，而且还不一定能成功。**

所以人们每一次都会问值得吗？我们为什么非得自己投入资源做冷启动、去搞一个先发优势呢？为什么不
等别人做好了从零到一，我们直接做从一到 N 呢？比如上世纪 90 年代摩托罗拉搞了个豪气冲天的铱星计划，烧了 50 多亿美元建成全球卫星电话网，结果终端设备太重、通话费太高、用户根本负担不起，最终在 1999 年申请破产保护。那我们何不等着有人已经证明了这条路走得通，我们再以更低的成本、更高的效率去执行计划、抢占他的市场呢？**很多人认为过去 40 年中国制造的发展就是所谓"后发优势"的成功学——比如家电、高铁、手机、光伏、电动汽车都是引进消化吸收再创新，别人开路我们提速。但是经济学家杨小凯先生曾经专门警告过：后发你不能光想着优势，你还会有后发病。** 这个道理是这样的：**人家先发冷启动的确有很大的风险，会遭遇到各种困难、不得不首先解决各种难题；但在解决这些难题的过程中，他们会学到一些宝贵的东西——包括制度、投资环境和原创精神。这些东西会让他们有能力解决新的难题，所以他们有可能继续保持领先。而你跟在后面抄作业，固然成本低，可是你没有独自解决过那些难题，你就学不到解决难题的能力，就只能继续跟在后面。从冷启动、先发优势、有能力做下一次冷启动，这本身也是一个强化回路。**

那你说可是先发的确会死在沙滩上啊，我们前面讲机会窗口的时候不是说时机应该在主导类别出现之后吗？**没错，但真正的先发优势不是第一个冲进无人区，而是在路线刚被证明、位置还没被占满的时候，率先闭合自己的回路。你可以不做第一个试错的人，但不能等别人把标准、用户、人才和渠道都变成他的存量之后再进场。** 为什么中国制造能占领人家那么大的市场却只能要一个很低的利润？因为你没有先发优势就没有定价权，你只能靠对外压价格、对内压成本生存。**哪
有放着大好江山不抢的道理。先发优势才是真正的优势，后发是没有办法的办法。** 这里我特别想替正反馈说几句话：**正反馈是不稳定的、可能会失控、预示着危险和麻烦，总跟泡沫和挤兑联系在一起；对比之下，负反馈是调控极致，它稳定、理性、懂得纠错，管理者爱它、养生的人也爱它。但只有正反馈才能带来增长：正反馈是生发的机制，你调控是调控不出什么新东西的。先有强化回路，才值得搭建一个平衡回路。** 不是说我们不应该养生，但是人要想象蓬蓬勃勃向上，就得至少有一条强化回路：永远有下一件想干的事，并且让干的这一件变成下一件的燃料。**套用一个著名的句式：失去负反馈，失去很多；失去正反馈，失去一切。你需要活，而不只是活着。** 好，以上就是今天的全部内容，现代思维工具课，祝您每天都有收获。
`,ug=`# 103丨自组织临界：恰到好处的活泼

## 讲什么

**自组织临界（self-organized criticality）**——一个组织、或者随便一群人、或者一个人，最好的状态应该是什么样？你可能觉得这都不成其为问题，什么状态都可能是好的状态。但物理学家有系统性的说法：**一潭死水和一锅沸水；一个开会时没人发言、领导说什么是什么的单位，和一个天天内斗鸡飞狗跳、谁也指挥不动的单位；一个人闲得发慌不知道今天该干点啥，和一个人忙到失眠脑子里十几件事同时炸响——这些都不是特别好的状态。好的状态应该在死水和沸水之间，但答案可不是直接取一个"不温不火"的中间点。最好的状态是一条边缘，一条差点就乱、将崩的边缘：它离混乱很近，近到随时可能要崩溃，可偏偏就是这个看着挺危险、也不是那么安全的位置，让它活泼、敏锐、生机勃勃。** 1987 年布鲁克海文国家实验室的三位物理学家佩尔·巴克、汤超和库尔特·维森菲尔德提出了自组织临界这个概念。物理学所说的临界通常出现在系统发生相变的特殊位置，接近这个位置的时候，系统不同部分之间的关联可以跨越许多尺度，小扰动有时影响局部、有时却能牵动很大范围。

## 解决什么真问题

解释"为什么最好的状态不是最安全的状态，而是'恰好要乱还没乱'的临界状态，以及怎么达到和保持这种状态"：物理学家研究一堆沙子。系统里"一个事件平均引发几个后续事件"叫**分支比**——它代表了系统的带动能力，也就是一个动静平均能带出多少个后续动静。**如果分支比小于 1，大家听完一乐懒得往下传，消息传不了两轮就没了——系统处于亚临界状态，它很稳定，可也很迟钝，你扔进去多大的动静都走不远；如果分支比大于 1，每个听到的人都忍不住添油加醋再讲给好几个人，一传十十传百，半天传遍全公司再就没法收场——这叫超临界，这样的系统一惊一乍、有点风吹草动就失控；而当分支比恰好在一附近，系统就处在临界状态：你说出去的一句话可能传一步就停，也可能传遍整栋楼，事先谁也说不准——你会看到大量的小事件、少量的中等事件、以及极其罕见却真的可能发生的大事件（服从幂律分布，就是我们前面讲过的重尾分布，偶尔还有黑天鹅）。** 临界既不死又不混乱、既有秩序又有活力，可谓"团结紧张严肃活泼"的状态。一潭死水和一锅沸水之间，有一个叫做临界的美好状态——它离混乱很近，近到随时可能崩溃，可偏偏这个位置让它活泼、敏锐、生机勃勃。

## 核心论点

- **临界系统的三个性质**：①**信息传得远**（相关长度很大）：系统里老远的两个点也能彼此牵动，边缘上一丁点小动静也能传到中心；但跟超临界不一样——超临界是传得太猛、一有风吹草动就全员过载烧成一团，临界是传得好：一个信号能跑到很远却不会把整个系统点着；②**波动能长出结构来**：在死板的系统里波动只是噪声、是为着平均值的小抖、一冒头就被抹平；可在临界系统里波动不再是敌人、而成了结构的生成器——一个小随机扰动都有机会长成任意尺度的新花样，创新常常就是这么"雪崩式"生成的；③**它特别敏感**：再微弱的信号它也能接住和放大——一个小小 demo、一次普通争论都可能在临界系统里激起一大片回响。**但这份敏感是有代价的：临界系统传得远，却恢复得慢——一个扰动进来它能荡很久很久，迟迟平息不下去。临界系统就像一个聪明又敏感的人：他既能听见远方的耳语，又忘不掉身边的干扰。**
- **临界脑假说**：这些年神经科学里有个还在争论的理论，认为我们大脑的高效工作状态就是一个临界附近的状态。2003 年美国国立卫生研究院的两位神经科学家约翰·贝格斯和迪特马尔·普伦慈在培养皿里的大脑皮层组织上观测到：神经元的集体放电忽大忽小、活像一场接一场的神经雪崩，大小的分布接近幂律——这不就是临界吗？至少在一些实验和模型里，这种状态下神经的信息容量和传递能力更高。**想想你最有创造力也最敏锐的那些时刻——心流状态：警觉性很高，注意力聚在一个问题上，可又不时冒出一些旁的联想，你觉得这个复杂的东西我拿捏得住、而不是被信息推着走——像不像临界？组织也是如此：信息流得动的组织创造力才旺盛，一个基层的小发现能激起一连串响应，一次不起眼的试验能引发连锁的创新。**
- **怎么达到和保持临界**：一个办法是有人操控（会议主持人看见冷场就点名发言、看见太乱就控制发言时间打断跑题）——这叫调参临界，靠外力调节；而**自组织临界则是一种神奇的机制：系统内部自带一个平衡回路，能把亚临界和超临界状态自动拉回临界附近。** 这就是巴克他们的沙堆模型：往桌上
一粒一粒地慢慢加沙子：沙堆越高、坡越来越陡，可它不会一直陡下去——坡陡到某个程度，"哗啦"它一塌方，一部分沙子顺着斜坡滚下去、从桌沿漏掉，坡度又降回来；然后你接着加，它接着陡，陡到一定程度再塌——就这么一轮一轮循环下去。**那个比较高、比较陡的状态就是沙堆的临界状态。但沙堆并不需要谁来告诉它临界坡度是多少：坡太缓你加沙子它自己便往临界爬，坡太陡它自己塌方把坡削平退回附近——那个临界坡度成了整个沙堆自动回归的地方。** 地震活动、太阳耀斑、神经雪崩都有自组织临界的影子，包括你的身心状态也可以用这个机制理解。**维持自组织临界全靠两个变量的配合：一个是慢变量——那个悄悄积累的东西（沙堆的坡度、断层的应力、森林里的枯枝、你身上的疲劳），它不动声色地一点一点把系统往危险的边缘推；一个是快变量——那个猛然释放的东西（一次塌方、一次地震、一场火、一次崩溃），它在一瞬间把积累的负荷卸掉。慢变量负责把系统推向临界，快变量负责把系统从过火的地方打回临界——一推一拉，系统就在临界附近来回晃荡。**
- **沙堆开会画面**：亚临界
的会是大家都不怎么爱说话，就算你站起来发表一番暴论也没几个人表态、更没人鼓掌——会场很有秩序可是没有商量，出什么新东西来；超临界的会是所有人抢着说话，哪怕有人咳嗽一声都能引发全场起哄——会场特别热闹但全是噪声，照样什么正事也办不成；**临界的会却能
让一个好观点穿过整个房间、一路点燃接话、补充和延伸；而那些不靠谱的念头则大多说出口就自己熄火了。既冷场也不失控，你能感到一种人人都有点紧张、又都还在线上的兴奋感。** 你看出来好处没有：临界既不
死又不混乱，既有秩序又有活力。**不过请一定记住临界的反面——高压临界**：不是所有东西都该临界（临界会放大好点子，也会放大谣言和传染病，有些事物还是处在亚临界比较好）；但是有些原本是活的、该临界的
东西，你要是为了省心强行把它压在亚临界状态中，那可就不好了：比如一个组织，如果你要绝对的安全稳定、不许小的失败发生、不许坏消息冒头、不许小的矛盾释放出来，那你就得动用各种手段把"小崩溃"的通道一条条堵死——你可能得到相当长时间的风平浪静，**可是那些本该被小崩溃一点点卸掉的负荷可没有消失，它会在底下一声不响地越攒越多——这个状态不妨称为高压临界：它不是不崩，它是攒着要崩就崩一个大的。** 比如说地震本来就是一种临界现象：板块慢慢积累应力，某一刻突然是地震；断层上的小地震平时多的数不清、大地震一般极其少——而一段地震断层如果很长时间连一次小地震都不出，那往往不是太平反而是危险的信号，地质学家称为**地震空区**：小震不来不是应力消失了，是它被死死锁住、在底下越憋越大，直到憋出一场大的。正如讲反脆弱时说过：一片 100 年不许烧小火
的森林，枯枝落叶越积越厚，早晚会憋出一场烧穿一切的大火来结账。**临界的一个精神就是不能怕出事：临界不能保证不出大事，但是平时允许出小事才能尽量避免出大事。** 教育孩子不也是这样吗？你既不希望他成为炸药桶（高压临界：平时被压得过分听话、最后一次性爆发），也不希望他是玻璃心（超临界：天天遇到一点小事就情绪失控）；你希望他处于临界状态——允许孩子犯错、发脾气甚至顶嘴，让他学着
自己把
小冲突消化掉、把关系修回来，这样才能扛事啊。2021 年的一项研究分析了 35000 多人的数据、还做了两个实验，专门考察"一个人可自由支配的空闲时间"和幸福感的关系：结论是一条倒U型的曲线——**空闲太少被事情追着跑不幸福，但空闲太多无所事事、日子空落落的也不幸福。请注意，研究者发现的那个最幸福的位置并不落在正当中那个"不闲不忙"的中点，而是明显偏向忙的这一头——是那种手头工作一直有点满、时顶着点劲、可又没被压垮的状态，那恰恰就是临界状态：你是有点累，但是你的反应非常敏锐、你感到兴奋、你动作很快、你充满了动力，你发得出去也收得回来——你借到了混乱的力量，却没有把自己交给混乱。那是恰到好处的活泼。** 你说我是在危险的边缘疯狂试探，我说我是在秩序上未封口的地方写入现实。

## 关键例证 / 金句

- 一般
人形容一个系统，要么就说它太闲了、要么就说它太乱了，而殊不知在闲和乱之间还有一个叫做临界的
美好状态。孔子说"张而不弛，文武弗能也；弛而不张，文武弗为也。一张一弛，文武之道也"——很多人把"一张一弛"解释成劳逸结合，那其实不是高效率干活的人的文武之道：**张是崩、弛是松，孔子的意思是让这两样轮着来——崩一阵、松一下，积累一成、释放一次。孔子说的是沙堆的节奏，是说做工作不应该像高速公路收费员一样每天到点上班、到点下班做同一个动作。**

## 如何应用

1. **慢慢加压，快释放**：工作、学习、家庭、社会关系，劳累如同小沙子一点点积累在你身上，那么你需要释放，而且要像沙堆塌方一样来一次快速的释放——完成一个干了很长时间的项目、休个假旅游散心、甚至干脆跟人爆发一次情绪，爆发完轻装上阵再开始下一轮的慢积累。很多人却是反着来的：要么平时很轻松偶尔接一个特别大的任务、根本不知道
怎么下手；要么每天忙碌从来不得休息——要么亚临界、要么超临界，就是不在临界。
2. **留下释放的出口**：沙子能从沙堆边缘漏出去系统才不至于一直堆到爆。人生里的出口是睡眠和休息、是果断放弃没指望的项目、是删掉没用的信息、是承认一次失败、是给日程表留白、是让憋着的情绪能说出来。没有这个出口，你会走向超临界（或高压临界）。
3. **用几条局部规则代替宏大的自我管理**：沙里的沙子不需要理解整座沙山，每粒沙只需要遵守一条简单的规矩——"坡太抖我就滑"。你也一样，不需要每天重新规划人生大战略，只要给自己立几条局部的预置规则：同一个问题出现三次就停下来系统地解决掉；一个项目连着两轮没进展就重新评估；日程占满到某个比例就不再接新活——只要长期遵守这些规则，你自然就会长出一种健康的秩序来。

---

## 全文（清洗后的课程转录，重点加粗+底纹）

欢迎来到现代思维工具课，我是万维钢。一个组织或者随便一群人或者一个人，最好的状态应该是什么样？你可能觉得这都不成其为问题，什么状态都可能是好的状态，难道还有什么系统性的说法吗？有。我先说几个画面，你体会一下：**一潭死水和一锅沸水；一个开会时没人发言、领导说什么是什么的单位，和一个天天内斗鸡飞狗跳、谁也指挥不动的单位；一个人闲得发慌不知道今天该干点啥，和一个人忙到失眠脑子里十几件事同时炸响。** 你立即就会发现这些都不是特别好的状态。**好的状态应该在死水和沸水之间，但答案可不是直接取一个"不温不火"的中间点。最好的状态是一条边缘，一条差点就乱、将崩的边缘：它离混乱很近，近到随时可能要崩溃，可偏偏就是这个看着挺危险、也不是那么安全的位置，让它活泼、敏锐、生机勃勃。** 这一讲送给你的思维工具叫做**自组织临界**。这个词听着很学术，但你
不觉得也有点酷吗？它出自物理学，但完全应该被用在各行各业，它应该成为我们的一个基础认知。1987 年，布鲁克海文国家实验室的三位物理学家佩尔·巴克、汤超和库尔特·维森菲尔德提出了自组织临界这个概念。**物理学所说的临界通常出现在系统发生相变的特殊位置：接近这个位置的时候，系统不同部分之间的关联可以跨越许多尺度，小扰动有时影响局部、有时却能牵动很大范围。** 那像研究说的是一堆沙子，咱们先不说沙堆，先说你更熟悉的：一堆东西不管是一群人也好、一堆沙子也好，组成了一个系统。我现在关心这个系统里，一个个体遭遇的事件平均会引发几个后续事件。比如谣言传播：你们公司一个同事知道一个小道消息，请问他会把这个消息告诉几个人呢？得知这个消息的一个人又会把它告诉另外几个人呢？**每个人传播消息的平均数叫做分支比。物理学家的洞见是：分支比代表了系统的带动能力，也就是一个动静平均能带出多少个后续动静。如果分支比小于 1，大家听完一乐懒得往下传，那消息传不了两轮就没了——这种情况我们说系统处于亚临界状态，它很稳定，可也很迟钝，你扔进去多大的动静都走不远。如果分支比大于 1，每个听到的人都是忍不住添油加醋再讲给好几个人，那就一传十十传百，半天功夫传遍全公司，再往后就没法收场了——这叫超临界，这样的系统一惊一乍、有点风吹草动就失控。而当分支比恰好在一附近，系统就处在临界状态：你说出去的一句话可能传一步就停，也可能传遍整栋楼，事先谁也说不准。你会在这个系统中看到大量的小事件、少量的中等事件、以及极其罕见却真的可能发生的大事件。严格说来，临界状态下的事件大小服从一种幂律分布，也就是我们前面讲过的重尾分布——小的极多、大的少、没有标准尺度，偶尔还有黑天鹅，是一种特别理想的状态。**

我说一个画面你就明白了：想象一群人坐在一起开会。**亚临界的会是大家都不怎么爱说话，就算你站起来发表一番暴论也没几个人表态、更没人鼓掌——会场很有秩序，可是没有商量，出什么新东西来；超临界的会是所有人抢着说话，哪怕有人咳嗽一声都能引发全场起哄——会场特别热闹，但全是噪声，照样什么正事也办不成；临界的会却能
让一个好观点穿过整个房间、一路点燃接话、补充和延伸；而那些不靠谱的念头则大多说出口就自己熄火了。既冷场也不失控，你能感到一种人人都有点紧张、又都还在线上的兴奋境（氛围）。** 你看出来好处没有：临界既不
死又不混乱，既有秩序又有活力，可谓"团结紧张严肃活泼"的状态。临界系统有许多有意思的性质，咱们翻译成人话，归纳成下面三条：**第一也是最要紧的一条，信息传得远**——用物理
学的话说这叫相关长度很大：系统里老远的两个点也能彼此牵动，边缘上一丁点小动静也能传到中心。可它跟超临界又不一样——超临界是传得太猛、一有风吹草动就全员过载烧成一团；临界是传得好：一个信号能跑到很远，却不会把整个系统点着。**第二，波动能长出结构来**——在死板的系统里，波动只是噪声、是为着平均值的小抖、一冒头就被抹平；可在临界系统里，波动不再是敌人、而成了结构的生成器——一个小小的随机扰动都有机会长成任意尺度的新花样，创新常常就是这么"雪崩式"生成的。**第三，它特别敏感**——再微弱的信号它也能接住和放大：一个小小 demo、一次普通的争论都可能
在临界系统里激起一大片回响。**但这份敏感是有代价的，那就是临界系统传得远、却恢复得慢：一个扰动进来，它能荡很久很久、迟迟平息不下去。临界系统就像一个聪明又敏感的人：他既能听见远方的耳语，又忘不掉身边的干扰。** 那你说这样的系统如果做智力工作岂不是效率极高吗？没错。这些年神经科学里有个还在争论的理论，叫临界脑假说，认为我们大脑的高效工作状态就是一个临界附近的状态。你看：2003 年美国国立卫生研究院的两位神经科学家约翰·贝格斯和迪特马尔·普伦慈在培养皿里的大脑皮层组织上观测到一种现象，那就是神经元的集体放电忽大忽小、活像一场接一场的神经雪崩，大小的分布接近幂律——这不就是临界吗？至少在一些实验和模型里，这种状态下神经的信息容量和传递能力更高。**想想你最有创造力也最敏锐的那些时刻，也就是你那个心流状态：警觉性很高，注意力聚在一个问题上，可又不时冒出一些旁的联想；你觉得这个复杂的东西我拿捏得住，而不是被信息推着走——像不像临界？** 组织也是如此：信息流得动的组织创造力才旺盛——一个基层的小发现能激起一连串的响应，一次不起眼的试验能引发连锁的创新。**一般人形容一个系统，要么就说它太闲了、要么就说它太乱了，而殊不知在闲和乱之间还有一个叫做临界的
美好状态。那你说临界这么好，一个系统怎样才能达到和保持临界状态呢？一个办法是有个操控者——比如说会议主持人，看见会议冷场了就不
断点名让人发言，看见会议太乱了就控制发言时间、打断跑题——这叫调参临界，也就是靠外力调节。而我们
要说的这个自组织临界则是一种神奇的机制：系统内部自带一个平衡回路，能把亚临界和超临界状态自动拉回临界附近。这就要说到巴克他们的沙堆模型了：**想象你往桌上一粒一粒地慢慢地加沙子。沙堆越高、坡越来越陡，可它不会一直陡下去——坡陡到某个程度，"哗啦"它一塌方，一部分沙子顺着斜坡滚下去、从桌沿漏掉，坡度又降回来。然后你接着加，它接着陡，陡到一定程度再塌，就这么一轮一轮循环下去。那个比较高、比较陡的状态就是沙堆的临界状态。但沙堆并不需要谁来告诉它临界坡度是多少：坡太缓，你加沙子它自己便往临界爬；坡太陡，它自己塌方把坡削平退回附近。那个临界坡度成了整个沙堆自动回归的地方。** 地震活动、太阳耀斑、神经雪崩都有自组织临界的影子，包括你的身心状态也可以用这个机制理解。**维持自组织临界全靠两个变量的配合：一个是慢变量——那个悄悄积累的东西，比如沙堆的坡度、断层的应力、森林里的枯枝、你身上的疲劳，它不动声色地一点一点把系统往危险的边缘推；一个是快变量——那个猛然释放的东西，一次塌方、一次地震、一场火、一次崩溃，它在一瞬间把积累的负荷卸掉。慢变量负责把系统推向临界，快变量负责把系统从过火的地方打回临界——一推一拉，系统就在临界附近来回晃荡。**

自组织临界的这个智慧可以用在我们自己身上，咱们说三个心法。**第一，慢慢加压、快释放**：工作、学习、家庭、社会关系，成年人面对各种任务越忙越累，劳累就如同小沙子一点点积累在你身上，那么你需要释放，而且要像沙堆塌方一样来一次快速的释放——比如完成一个干了很长时间的项目、休个假旅游散心、甚至干脆跟人爆发一次情绪，爆发完轻装上阵、再开始下一轮的慢积累。很多人却是反着来的：要么平时很轻松、偶尔接一个特别大的任务根本不知道怎么下手；要么每天忙碌从来不得休息——要么亚临界要么超临界，就是不在临界。《礼记》里有个典故：子贡看不惯人们过节时候纵情狂欢，就像现在有些官员见不得老百姓快乐、总想把人都管起来，可是孔子说人本来就该这样："张而不弛，文武弗能也；弛而不张，文武弗为也；一张一弛，文武之道也。"**很多人把"一张一弛"解释成劳逸结合，那其实不是高效率干活的人的文武之道：张是崩、弛是松，孔子的意思是让这两样轮着来——崩一阵、松一下，积累一成、释放一次。孔子说的是沙堆的节奏，是说做工作不应该像高速公路收费员一样，每天到点上班、到点下班做同一个动作。** 第二，**留下释放的出口**：沙子能从沙堆边缘漏出去，系统才不至于一直堆到爆。人生里的出口是睡眠和休息、是果断放弃没指望的项目、是删掉没用的信息、是承认一次失败、是给日程表留白、是让憋着的情绪能说出来。没有这个出口，你会走向超临界。第三，**用几条局部规则代替宏大的自我管理**：沙里的沙子不需要理解整座沙山，每粒沙只需要遵守一条简单的规矩——"坡太抖我就滑"。你也一样，你不需要每天重新规划人生大战略，你只要给自己立几条局部的预置规则：同一个问题出现三次，就停下来系统地解决掉；一个项目连着两轮没进展，就重新评估；日程占满到某个比例，就不再接新活。**只要长期遵守这些规则，你自然就会长出一种健康的秩序来。**

听到这你可能忍不住会说：临界好是好，但似乎还是有点危险，毕竟这里有黑天鹅。没错，肯定不是所有东西都该临界——临界会放大好点子，也会放大谣言和传染病，有些事物还是处在亚临界比较好。**但是请注意：有些原本是活的、该临界的
东西，你要是为了省心强行把它压在亚临界状态中，那可就不好了。比如一个组织，如果你要绝对的安全稳定、不许小的失败发生、不许坏消息冒头、不许小的矛盾释放出来，那你就得动用各种手段把"小崩溃"的通道一条条堵死。你可能会得到相当长时间的风平浪静——**可是那些本该被小崩溃一点点卸掉的负荷可没有消失，它会在底下一声不响地越攒越多，我们不妨把这个状态称为高压临界：它不是不崩，它是攒着要崩就崩一个大的。** 比如说地震原本就是一种临界现象：板块慢慢积累应力，某一刻突然地震；断层上的小地震平时多的数不清、大地震一般极其少——而一段地震断层如果很长时间连一次小地震都不出，那往往不是太平反而是危险的信号，地质学家称为**地震空区**：小震不来不是应力消失了，是它被死死锁住、在底下越憋越大，直到憋出一场大的。正如咱们讲反脆弱的时候说过：一片 100 年不许烧小火的森林，枯枝落叶越积越厚，早晚会憋出一场烧穿一切的大火来结账。**临界的一个精神就是不能怕出事：临界不能保证不出大事，但是平时允许出小事才能尽量避免出大事。** 教育孩子不也是一样吗？你既不希望他成为炸药桶（也就是高压临界：平时被压得过分听话、最后一次性爆发），也不希望他是玻璃心（也就是超临界：天天遇到一点小事就情绪失控）；你希望他处于临界状态——允许孩子犯错、发脾气甚至顶嘴，让他学着
自己把
小冲突消化掉、把关系修回来，这样才能扛事啊。2021 年的一项研究分析了 35000 多人的数据，还做了两个实验，专门考察一个人可自由支配的空闲时间和幸福感的关系：结论是一条倒U型的曲线——**空闲太少、被事情追着跑不幸福；但空闲太多、无所事事、日子空落落的也不幸福。请注意，研究者发现的那个最幸福的位置并不落在正当中那个"不闲不忙"的中点，而是明显偏向忙的这一头——是那种手头工作一直有点满、时顶着点劲、可又没被压垮的状态，那恰恰就是临界状态：你是有点累，但是你的反应非常敏锐，你感到兴奋，你动作很快，你充满了动力；你发得出去也收得回来，你借到了混乱的力量，却没有把自己交给混乱。那是恰到好处的活泼。** 你说我是在危险的边缘疯狂试探，我说我是在秩序上未封口的地方写入现实。好，以上就是今天的全部内容，现代思维工具课，祝您每天都有收获。
`,cg=`# 104丨边际分析：怎样判断值不值得继续投入？

## 讲什么

**边际分析（marginal analysis）**——被很多经济学家认为是经济学里最重要的智慧，它能帮你分析一个事业——可以是任何事业——是应该坚持、应该放弃、还是应该加大投入。比如创业者说的那个增长飞轮：世界上没有永远存在的正反馈，那你怎么知道这个飞轮是刚刚启动还是已经快转到头了呢？**边际分析可以被用成一种反馈式的决策法：它能让你根据输出的变化决定你下一轮的输入。好处是你不必先把系统的所有细节都搞清楚，就能得到一个决策信号。** 不懂行的人观察一个事物本能反应是看它的体量——这家公司资本真雄厚、这个组织成员真多厉害，但是大并不等于健康；利益相关者至少会关注一下平均值——效率怎么样、利润率怎么样，但那些说的都只是过去和现在。**而决策必须面向未来，要问这个事物有没有发展前途、值不值得追加投入。经济学家的眼光是看边际——下一个单位的投入能带来多少新增的产出。**

## 解决什么真问题

回答"一个事业现在到底处于什么阶段、该继续加码还是该果断退出"：以开工厂为例，你前期砸进去一大笔钱买厂房设备（固定成本），接下来应该招多少工人？第一个工人只能独自开机器；第五个工人来了就可以分工，你管上料我管质检；第十个工人来了流水线真正转起来，人手越多分工越细，每多招一个人带来的新增产量就越大——这叫**边际产量递增**。产量上去了、每件产品上的固定成本也摊薄，都是好消息，你应该继续招人。但这个过程不是无限的：车间就那么大、设备就那么几台，招到第 20 个工人日产量还在涨但涨得就有点少了；招到第 40 个工人开始互相等设备、互相挡道，多一个人带来的新增产量已经是零；要是再招车间里就像春运候车厅，产量反而会往下掉。**工人并不是越多越好，第五个工人和第 40 个工人对你的意义很不同——这就是边际分析的洞见。**

## 核心论点

- **边际效益 = 边际收益 − 边际成本，它可正可负，趋势可递增可递减。两维组合共四种局面**：①**边际效益为正且还在递增——最好的日子，一定要加大投入**：你每多投一块钱都会带来更多的钱，你正在搭乘正反馈飞轮、根本停不下来，你甚至感觉连睡觉都是浪费时间；②**边际效益为正但在递减——这件事仍然得做，每多做一件仍然赚，可是赚得越来越少**：你需要担心了，这件事的前途非常有限，过不了多久就不赚钱了；③**边际效益暂时为负但趋势在改善——可能是冷启动**：现在投入可能有点冒险，但只要这个趋势是真的，你就值得投，将来早晚有赚钱的一天；④**边际效益为负且越来越负——赔钱的无底洞**：别犹豫，赶紧退出。
- **边际效益递增是世界上最值得大力投入的东西**：你每次追加投入都会带来新的产出、而且产出比以前的更多。为什么说平台是现代世界最厉害的商业模式？因为它是边际效益递增的结构：用户越多、平台对每个用户就越有用，下一个用户就来得越容易、也越值钱；平台还享受数据飞轮——用户越多数据越多、产品越聪明、又吸引来更多用户。边际效益递增也是工业化赚钱的秘密：前期固定成本不变，每多生产一件产品分摊的成本就越少、收益就越大；而且生产得越多就越熟练，成本还能进一步下降、收益还能进一步增加。**只要边际效益不降低，这个事业就不但值得持续投入，而且应该使用商业杠杆把它不断放大——把收益再投进去变成复利，增长本身就能带来新的增长，你得到的就是人们梦寐以求的指数增长，用投资人的话说这叫可扩展性。**
- **但世界上没有永远的边际效益递增**：每一个强回路都活在一个更大的系统里，那个系统里总会有个平衡回路正等着要限制它——产品卖得好对手就会进场抢用户、抢供应链、打价格战；梅西踢得再好球迷再多他每年也只能踢这么多场比赛、而且终究会衰老；更多的可能是明星自己还充满干劲、粉丝已经看腻了；就算这些全躲过去了还有一条最硬的天花板——**市场总量：等你市场占有率达到 50%，你就不可能再增长一倍了。你终究会迎来边际效益递减。** 资本市场每隔几年就要用真金白银重新学一遍这个道理：当年共享单车大战，资本以为投放量就是飞轮——车越多越方便、越方便用户越多，故事的前半段倒是对的，可是超过有效密度之后新增的车带来的便利趋近于零，调度、维修和丢损的成本却继续上升，项目最终玩不下去变成一座座单车坟场。**再好的产品也不会给你无限的指数增长，它们的故事一般是一条 S 曲线：随着累计投入，总成果的变化趋势是前期冷启动（投入很大动静很小）、中期飞轮转起来边际递增一飞冲天、后期饱和边际递减曲线渐渐变平。你想知道一个产品现在处于生命周期的哪一阶段，你问的就是它在 S 曲线上 的位置。**
- **第二曲线**（查尔斯·汉迪 1994）：如果你赖以发展壮大的那个产品已经到了 S 曲线的顶部、边际效益成了零、亢龙有悔了，怎么办？不至于消亡——你完全可以再开发一个新产品。**要想突破旧曲线的天花板，就得在第一条曲线到顶之前再画出一条新的 S 曲线，一条接一条 S 曲线连起来就形成了一个持久的增长。请注意时机：第二曲线的启动必须是在旧曲线到顶之前——因为开辟新曲线需要钱、需要人、需要事情，这三样东西只有在旧曲线还在上升的时候你才有；等到旧曲线的新增回报连新探索都供养不起、钱和气势开始收缩，再换可就晚了。** 当初苹果在 iPod 仍然热卖的时候发布 iPhone，主动让新产品侵蚀自己的明星业务，就是开发第二曲线。
- **摩尔定律和缩放定律为什么能持续增长**：过去几十年人类见证了芯片（1971 年英特尔 4004 有 2300 个晶体管，到 2024 年英伟达 Blackwell GPU 有 2080 亿个，50 多年增加约 9 千万倍）和 AI（2020 年卡普兰等人发现大语言模型的交叉熵损失随参数、数据和算力增加持续减少）两个奇迹般的持续增长。**答案是你看到的宏观增长其实是很多个 S 曲线连起来形成的：摩尔定律不是一项芯片技术从头跑到尾，而是经历了平面晶体管到 FinFET 再到 GAA 好几次换线；AI 的缩放定律也在不断换——一开始主要在预训练上加码把模型做得越来越大，后来发现许多模型是脑子造得很大书却读得太少，于是重新调整模型规模和训练数据的配比；再后来投入又转向后训练、强化学习和推理时计算（O1 和 DeepSeek R1 都属于这条新曲线）。世界上不存在一招先吃遍天、还能让你一直吃的好事——你必须不断地发明新的增长点，才能让一个事业长久地进行下去。**

## 关键例证 / 金句

- 中国经济的 S 曲线：过去 40 年高速增长很大程度上是一条投资拉动的曲线——修路建厂盖楼资本砸下去增长就出来；在基础设施严重短缺的年代许多项目都有很高的边际效益，第一条高速公路、第一座现代工厂能一下释放一大片生产力。**但是投资会遇到边际回报递减：白恩和张琼 2014 年用多种口径估算中国的资本回报率，发现趋势是 2008 年以后明显下降。两个城市之间的第一条高速公路修好，立即就能带动这两个城市的经济发展；可是等大城市之间的高速公路网已经建成，再把公路铺到边远地区、铺到山区，那就可能几十年都收不回投资。** 世界银行 2026 年中国经济简报说得很准确：公共投资在许多领域面临收益递减，应该把支出再配置到回报更高的用途上去——比如把钱留给老百姓消费。到 2025 年中国居民消费占 GDP 的比重仍然只有 40%，世界银行最新可比的 2024 年数据里中国是 40%、OECD 成员平均是 60.1%，整整差了 20 个百分点。**中国老百姓熬逮捕（盼）消费拉动增长，现在有很大的边际效益。**
- 边际效益递减是一个魔咒，招式用到老就必定会遭遇它，所以一定要对它保持敏感，才能在 S 曲线见顶之前采取行动、寻找新办法。**人们心目中的努力也值得边际分析**：一个学生复习到深夜，再多学习一小时带来的提升早已……坏处越来越大，那还学什么呢？下一小时边际效益最高的选择是睡觉。遇到瓶颈大多数人的第一反应是加量，殊不知你应该变招才对：家里总是很乱，第一反应是周末再多打扫一小时——刚开始有用，可东西多到一定程度以后你再勤快也只是在把杂物从一个角落搬到另一个角落。**边际递减是在提醒你：瓶颈已经不是打扫速度，而是东西太多。正确的动作不是天天整理，而是换变量——少买、扔掉、重新设计收纳，你得把努力从边际效益趋向于零的地方，挪到边际效益递增的地方。**
- **小满胜万全的见识之浅**：最近几年流行一个民间智慧叫"小满胜万全"，意思是事物如果发展到特别圆满的状态就像月盈则亏一样走向反面——这其实是对边际效益递减和 S 曲线的一种感叹：既然辉煌过后必定是黯淡，那我何不一直留在 S 曲线顶部之前那个位置呢？**理解了这一讲的分析你立即就能看出来那个见识之浅漏：人家马斯克早就是世界首富，现在还在接二连三地干大事，你说他是小满还是大满呢？小满胜万全总是在事后感叹——你只有经历了大满之后的衰落才想起来珍惜当初那个小满的状态，可是有啥用呢？真正的解法不是拒绝大，而是在大之前开启第二曲线。自强不息和亢龙有悔并不是矛盾的。**

## 如何应用

1. **用"边际效益 × 趋势"四象限给事业把脉**：正且递增→加大投入；正且递减→抓紧变现、准备转型；负但改善→判断是不是冷启动、值不值得等；负且越来越负→果断退出。**看边际，不看体量；看趋势，不看绝对值。**
2. **在 S 曲线见顶前主动开启第二曲线**：第二曲线必须在旧曲线还在上升时启动（因为钱、人、事情只有在上升期才有）；别等旧曲线的新增回报连探索都供养不起才换。像苹果在 iPod 热卖时发布 iPhone 那样，主动让新产品侵蚀自己的明星业务。
3. **用边际分析重新审视自己的努力**：遇到瓶颈先问"我是在加量还是在变招？"——瓶颈往往不在"量"而在于"变量"（从打扫速度到东西太多、从学习时长到学习方法）；**把努力从边际效益趋向于零的地方，挪到边际效益递增的地方。**

---

## 全文（清洗后的课程转录，重点加粗+底纹）

欢迎来到现代思维工具课，我是万维钢。这一讲咱们说一个被很多经济学家认为是经济学里最重要的智慧，叫**边际分析**，它能帮你分析一个事业——可以说是任何事业——是应该坚持、还是应该放弃、还是应该加大投入。比如创业者说的那个增长飞轮：世界上没有永远存在的正反馈，那你怎么知道这个飞轮是刚刚启动还是已经快转到头了呢？**边际分析可以被用成一种反馈式的决策法：它能让你根据输出的变化决定你下一轮的输入。好处是你不必先把系统的所有细节都搞清楚，就能得到一个决策信号。** 我认为边际分析是一个被大大低估了的思维工具，它原本应该像"亢龙有悔"那些成语一样路人皆知才对。

不懂行的人观察一个事物，本能反应是看它的体量：这家公司资本真雄厚、这个组织成员真多厉害。但是大并不等于健康——可能这家公司经营不善都快资不抵债了，那个组织人心已经散了。利益相关者至少会关注一下平均值，比如这家公司的效率怎么样、利润率怎么样。**但那些说的都只是过去和现在，而决策必须面向未来：要问这个事物有没有发展前途、值不值得追加投入。经济学家的眼光是看边际——也就是下一个单位的投入能带来多少新增的产出。** 比如你新开了一家工厂，前期砸进去一大笔钱购买厂房和设备（这些都是固定成本），请问接下来应该招多少工人呢？第一个工人只能独自开机器；第五个工人来了就可以分工——你管上料我管质检；第十个工人来了流水线真正转起来，人手越多分工越细，每多招一个人带来的新增产量就越大，这就叫**边际产量递增**。产量上去了、看到每件产品上的固定成本也摊薄，这都是好消息，你应该继续招人。**但这个过程不是无限的：车间就那么
大，设备就那么几台。招到第 20 个工人的时候日产量还在涨，但涨得就有点少了；招到第 40 个工人开始互相等设备、互相挡道，多一个人带来的新增产量已经是零；要是再招，车间里就像春运候车厅，产量反而会往下掉。**你从边际产量递增变成边际产量递减，最终变成边际产量是负的。你
看，工人并不是越多越好，第五个工人和第 40 个工人，他们对你的意义很不同——这就是边际分析的洞见。** 现在咱们说得稍微正规一点：不管你做的是什么事，都会有一个边际收益和边际成本，我们不妨定义边际效益等于边际收益减去边际成本。边际效益可以是正的也可以是负的，它的趋势可以是递增也可以是递减。把这两个维度组合起来，你面临的局面总共有四种。**第一种，边际效益为正而且还在递增，这是最好的日子，一定要加大投入——你每多投一块钱都会给你带来更多的钱，你正在搭乘正反馈飞轮、根本停不下来，你甚至感觉连睡觉都是浪费时间。第二种，边际效益为正但是在递减——这件事仍然得做，每多做一件仍然是赚的，可是赚得越来越少，那么你需要担心了：这件事的前途非常有限，过不了多久就不赚钱了。第三种，如果眼前的边际效益暂时为负、但趋势在改善——这可能是上一讲说的冷启动，现在投入可能有点冒险，但只要这个趋势是真的，你就值得投，将来早晚有赚钱的一天。最后一种，如果是边际效益为负、而且越来越负，那这就是个赔钱的无底洞——别犹豫，赶紧退出。**

边际效益递增大约是世界上最值得大力投入的东西：你每次追加投入都会带来新的产出、而且产出比以前更多。**为什么我们前面说平台是现代世界最厉害的商业模式？就因为它是边际效益递增的结构：用户越多、平台对每个用户就越有用，下一个用户就来得越容易、也越值钱；平台还享受数据飞轮——用户越多数据越多、产品越聪明、又吸引来更多用户。** 边际效益递增也是工业化赚钱的秘密：你前期的固定成本是不变的，每多生产一件产品分摊的成本就越少、你的收益就越大；而且你生产的产品越多你就越熟练，成本还能进一步下降、收益还能进一步增加。**其实只要边际效益不降低，这个事业就不但值得持续投入，而且应该使用商业杠杆把它不断放大。你只要把收益再投进去变成复利，增长本身就能带来新的增长，你得到的就是人们梦寐以求的指数增长——用投资人的话说，这叫可扩展性，也就是这个事业可以被不断地放大。**

但我们不得不说，世界上没有永远的边际效益递增：**每一个强回路都活在一个更大的系统里，那个系统里总会有个平衡回路正等着要限制它。** 你产品卖得好，对手就会进场跟你抢用户、抢供应商、打价格战；梅西踢得再好、球迷再多，他每年也只能踢这么多场比赛，而且他终究会衰老；更多的情况是明星自己还充满干劲、粉丝已经看腻了；就算这些你全躲过去了，还有一条最硬的天花板，那就是**市场总量**——等你
的市场占有率达到 50%，你就不可能再增长一倍了，你终究会迎来边际效益递减。**资本市场每隔几年就要用真金白银重新学一遍这个道理：当年共享单车大战，资本以为投放量就是飞轮——车越多越方便、越方便用户越多，故事的前半段倒是对的；可是超过有效密度之后，新增的车带来的便利趋近于零，调度、维修和丢损的成本却继续上升，项目最终玩不下去，变成一座座单车坟场。** 所以再好
的产品也不会给你无限的指数增长，它们的故事一般是一条 S 曲线：也就是随着累计投入，总成果的变化趋势是前期冷启动（投入很大、动静很小）、中期飞轮转起来边际递增一飞冲天、后期饱和边际递减曲线渐渐变平。**你想知道一个产品现在处于生命周期的哪一阶段，你问的就是它在 S 曲线上 的位置。** 其实"总量还在高处、边际已经转弱"的局面，中国人早就很有感触了——《易经》的钱挂一路从乾龙勿用、见龙在田走到飞龙在天，最后
一摇却是亢龙有悔，说的不就是 S 曲线吗？象传解释的更直白："亢龙有悔，盈不可久也。" 那你说如果我赖以发展壮大的那个产品现在已经到了 S 曲线的顶部、边际效益已经成了零、亢龙有悔了，我该怎么办呢？难道就此消亡吗？那不至于，你完全可以再开发一个新产品。1994 年英国管理思想家查尔斯·汉迪提出了一个办法叫**第二曲线**：**要想突破旧曲线的天花板，就得在第一条曲线到顶之前再画出一条新的 S 曲线——一条接一条 S 曲线连起来就形成了一个持久的增长。请注意，这个时机：第二曲线的启动必须是在旧曲线到顶之前。这是因为开辟新曲线需要钱、需要人、需要事情，这三样东西只有在旧曲线还在上升的时候你才有；等到旧曲线的新增回报连新探索都供养不起、钱和气势开始收缩，再换可就晚了。** 当初苹果在 iPod 仍然热卖的时候发布 iPhone，主动让新产品侵蚀自己的明星业务，就是开发第二曲线。我很想知道苹果的下一条 S 曲线是什么。

过去几十年间，人类见证了两个奇迹般的持续增长。一个是**摩尔定律**：它说集成电路上能容纳的晶体管数量大约每两年翻一番——从 1971 年英特尔的第一块微处理器 4004 有 2300 个晶体管，到 2024 年英伟达 Blackwell GPU 有 2080 亿个晶体管，晶体管数量在 50 多年里增加了约 9 千万倍。一个是近几年 AI 的**缩放定律**：2020 年 OpenAI 研究员贾里德·卡普兰等人发现，大语言模型的交叉熵损失（也就是猜下一个词有多不准）会随着参数、数据和训练算力的增加而持续减少——这基本上就是说你
对模型投入越多、模型就越聪明。幸运的是缩放定律至今有效：每隔一段时间就有人猜测缩放定律是不是已经停止了，但它仍然有效——正因为缩放定律有效，我们才可以期待 AI 会越来越聪明，以至于实现 AGI 和 ASI。那你说芯片和 AI 为什么就能持续增长而不陷入边际效益递减呢？**答案是你看到的宏观增长其实是很多个 S 曲线连起来形成的。摩尔定律并不是一项芯片技术从头跑到尾，而是经历了好几次换代：从平面晶体管到 FinFET 再到 GAA，一条技术路线接近极限另一条就来接班。AI 这边缩放定律也在不断换：一开始大家主要在预训练上加码把模型做得越来越大，后来发现许多模型是脑子造得很大、书却读得太少，于是重新调整模型规模和训练数据的配比；再后来投入又转向后训练、强化学习和推理时计算——也就是不只让模型读更多书，还要教它怎样解题、并让它在回答前多想一会，O1 和 DeepSeek R1 都属于这条新曲线。这个道理是世界上不存在一招先吃遍天、还能让你一直吃的好事——你必须不断地发明新的增长点，才能让一个事业长久地进行下去。**

边际分析、S 曲线和第二曲线告诉我们：一个打法就算再好，到一定时候也必须改变。**改变旧打法不是因为旧打法不好，而只是因为它不再适合新的局面。** 就拿中国经济来说：过去 40 年的高速增长很大程度上是一条投资拉动的曲线——修路建厂盖楼资本砸下去增长就出来。在基础设施严重短缺的年代，许多项目都有很高的边际效益，第一条高速公路、第一座现代工厂能一下释放一大片生产力。但是投资会遇到边际回报递减：白恩和张琼 2014 年用多种口径估算中国的资本回报率，发现趋势是 2008 年以后明显下降。是啊，两个城市之间的第一条高速公路修好，立即就能带动这两个城市的经济
发展；可是等大城市之间的高速公路网已经建成，再把公路铺到边远地区、铺到山区，那就可能几十年都收不回投资。**但是因为基建投资是政府的业绩、能立即变成 GDP，地方政府非常迷恋这种投资，殊不知这些投资现在已经变成了沉重的债务负担。世界银行 2026 年中国经济简报说得很准确：公共投资在许多领域面临收益递减，应该把支出再配置到回报更高的用途上去——比如说把钱留给老百姓消费。到 2025 年，中国居民消费占 GDP 的比重仍然只有 40%。你要体会这个数字有多低，可以看世界银行最新可比的 2024 年数据：中国是 40%，OECD 成员平均是 60.1%，整整差了 20 个百分点。中国老百姓期盼用消费拉动增长，现在有很大的边际效益。**

边际效益递减是一个魔咒，招式用到老就必定会遭遇它，所以一定要对它保持敏感，这样才能在 S 曲线见顶之前采取行动、寻找新办法。**比如说人们心目中的努力就值得边际分析：一个学生复习到深夜，再多学习一小时带来的提升早已……坏处越来越大，那还学什么呢？下一小时边际效益最高的选择是睡觉。** 遇到瓶颈，大多数人的第一反应是加量，殊不知你应该变招才对：比如家里总是很乱，你的第一反应是周末再多打扫一小时——刚开始有用，可是东西多到一定程度以后，你再勤快也只是在把杂物从一个角落搬到另一个角落。**边际递减是在提醒你：瓶颈已经不是打扫速度，而是东西太多。正确的动作不是天天整理，而是换变量——少买、扔掉、重新设计收纳。你得把努力从边际效益趋向于零的地方，挪到边际效益递增的地方。** 最近几年流行一个民间智慧叫"小满胜万全"：意思是事物如果发展到特别圆满的状态就像月盈则亏一样走向反面——这其实
就是对边际效益递减和 S 曲线的一种感叹：既然辉煌过后必定是黯淡，那我何不一直留在 S 曲线顶部之前的那个位置呢？有些人就说了，要功成身退、不要追求大富大贵，还有什么"身后有余忘缩手，眼前无路想回头"等。**理解了这一讲的分析，你立即就能看出来那个见识之浅漏：人家马斯克早就是世界首富，现在还在接二连三地干大事，你说他是小满还是大满呢？小满胜万全总是在事后感叹——你只有经历了大满之后的衰落才想起来珍惜当初那个小满的状态，可是有啥用呢？真正的解法不是拒绝大，而是在大之前开启第二曲线。自强不息和亢龙有悔并不是矛盾的。** 好，以上就是今天的全部内容，现代思维工具课，祝您每天都有收获。
`,fg=`# 105丨路径创造：破解路径依赖的唯一可行方法

## 讲什么

**路径创造（path creation）**——有个现象叫路径依赖，咱们前面讲对称性破缺的时候提到过：因为历史上可能很偶然的原因形成的一个局面，现在看上去非常不合理，但是因为已经被众人接受而无法更改——比如你们大学那首特别难听的校歌、公司里那套人人抱怨的系统、组织里效率极低的审批流程，还有那个经常被当作路径依赖案例、但优劣至今仍有争议的 QWERTY 键盘。**我们本能的
想法是推倒重来，正所谓"旧的不去新的不来"，干脆壮士断腕。但那是整理仓库的逻辑——旧沙发不扔新沙发确实进不来。**可公司、家庭、社会不是仓库，是运行中的复杂系统，复杂系统的规律恰恰相反：新的先来，旧的才能去。** 这一讲的思想工具叫路径创造，它可能是破解路径依赖唯一可行的方法，还是用反馈回路分析：不是所有历史遗留问题都叫路径依赖，有些事只是普通的惯性、领导一句话就能改；真正的路径依赖都是一个强化回路——越使用旧路径，旧路径就越有优势；旧路径越有优势，人们就越使用它。**路径创造这个词出自两位管理学者——西法尼亚周立大学斯密尔商学院的拉古·加鲁德和哥本哈根商学院的彼得·卡尔诺主编的一本 2001 年的书，书名就叫《路径依赖与创造》。这本书的目的就是跟路径依赖的宿命论版本唱对台戏：加鲁德和卡尔诺认为人不是历史的囚徒，身在旧结构中的行动者完全
可以进行有意识的偏离——一边借用旧系统的资源，一边偏离旧系统的逻辑，拉上同伙反复给新事物争取长大的时间，硬生生养出一条新路。**

## 解决什么真问题

回答"为什么路径依赖那么难破、以及怎么不掀桌子地破"：以公司软件系统为例，它非常糟糕大家天天骂，为什么
不换掉呢？你挨个部门问：财务部当然想换，可采购的单据全在旧系统里，他们不换我们换了也是白换；采购说我们倒是想换，可几百家供应商都按旧系统的格式对接，人家凭什么陪你折腾；IT 说新系统我们早就选好了，可业务部门不敢停机切换，出了事谁负责呢？**这里没有一个人拥护旧系统，可这是一个多边的局面，你没有办法协调所有人一起换——坏事的长期存在甚至不是因为坏人，这才叫积重难返。** 然后新员工入职培训的是旧系统，新项目立项走的是旧流程，新预算下来投的是旧线路，新客户签约签的是旧合同——只要这些新流量每天还在流进旧路径，你们就必须一天比一天更加依赖它。**正确的解法不是拆旧路，而是造新路。**

## 核心论点

- **路径创造三动作：造路、导流、退役。第一步造路**——不要招惹旧路径，先默默地造一条新路。新路径必须是一个完整的小系统、而不是旧系统上的一个补丁，这样它才能独立发展壮大。我们要让新路跟旧路共存一段时间，这不是妥协、这是要干正事：一个是保留——万一新路不行还能滚回来；一个是让新路有机会在实战中迭代成长，因为温室里练不出真功夫；**最重要的是学习——旧系统看着愚蠢，却暗中承担着许多没人说的隐性的功能，你直接拆搞不好就拆到承重墙，并行运转一段才知道承重在哪。** 第二步也是最核心的一步是**导流**：改革首先争夺的不是旧资源，而是新增资源的取向，简单说就是"老人老办法，新人新办法"——老员工可以保留旧合同，但新员工一律用新制度；老客户可以继续用旧产品，但新客户全部进新平台；旧数据留在旧库，新数据一律写新库。**存量可以慢慢消化，但不允许旧制度继续繁殖。** 第三步**退役**：等人们对新路径已经形成依赖，旧路径就可以逐项关闭了——这个次序是先冻结新功能，再停止进新人，然后降为止维护，再降为止读，最后才正式关闭。**整个过程很像心脏搭桥手术：冠状动脉堵了，医生不会把旧血管拆掉，他会先接上一条旁路让血绕过堵点继续流向心脏——其实人体自己也会这么做（侧支循环）：只要新的能成功建立起来，旧的什么时候去已经不重要了。**
- **路径创造为什么有效——它翻转了改革的不对称**：曼瑟·奥尔森在《集体行动的逻辑》里讲过改革的死结：**改革的收益是分散在多数人身上的，但收益摊到每个人头上只有薄薄一层、谁也不会为它冲锋；可是改革的损失却是集中在少数人身上，那些既得利益者组织严密会拼死抵抗——支持的人多而散，反对的人少而狠，所以改革总是输。而路径创造翻转了这个不对称：新路径一旦运行起来，它就有了自己的员工、客户、供应商和投资人——这是一批新的有组织的利益攸关的受益者，改革就有了自己的既得利益集团。你不需要说服所有反对者，你只要制造足够多的支持者就行。** 路径创造的另一个要点是新路径必须是个完整的系统、是一个最小可行单元：有自己的
人、有必要的权利、有独立的预算、有自己的流程和标准。很多组织都搞过各种试点——创新中心、改革试验区、青年突击队——可是新团队还接受指标考核、用旧审批流程、靠旧部门拨资源、没有自己的预算和用户，旧系统一断供就死掉，那怎么能行呢？

## 关键例证 / 金句

- **宋朝科举（赵匡胤的路径创造）**：五代乱世的游戏规则是兵强马壮者为天子，赵匡胤本人就靠兵变上台的，他比谁都清楚路不能再这么走了。杯酒释兵权是用富贵收买老将的既得利益，那将来新人怎么办？如果国家还是武将说了算，皇帝赵匡胤做不稳。赵家的解决办法是给天下英雄创造一个新的上升路径，那就是科举：科举不是宋朝的新发明，但是宋太宗把科举从每科取十
二三人扩到几百人（太平兴国二年一榜就取了 500 多人、而且立刻授官）——天下最有野心的人从此改变押注方向，弃武从文，几十年后统治精英整个换血，五代时崇尚兵强马壮的价值观已经被"东华门外以状元唱出者乃好儿"的新格言替代，而读书人能给国家带来啥威胁呢？
- **皇家学会（现代科学的出生）**：你可能以为科学革命应该发生在大学里，但一直到 17 世纪牛顿在剑桥都还在注视亚里士多德、根本不教什么科学实验。是 1660 年一群实验爱好者
在伦敦自建了一个叫皇家学会的俱乐部，才有了第一个科学共同体——他们有自己的网络、建立了实验规范、出版了期刊，吸引到欧洲最好的头脑把最好的成果投给它而不是大学；一直到 1851 年自然科学才进入剑桥的正式考试体系。
- **集装箱革命**：1956 年卡车商人麦克莱恩搞出来了第一套用于航运的集装箱。集装箱运输的便利太明显了——货物装进统一铁箱，卡车拉到岸边吊上船就走；当时人工散装一吨要 5.83 美元，而用集装箱只要 0.16 美元。但是码头工人有既得利益，纽约码头有上百年下来的公会规矩和利益关系，你想跟人谈改革是谈不成的。**麦克莱恩的做法是在新泽西另建一套完全按照集装箱设计的码头：旧码头继续照旧，新码头用低得惊人的成本把货主和航线一点点吸走。纽约的旧码头没有输掉一场谈判、也没有被谁强行关闭，它只是眼看着船越来越少，自己失去了存在的理由。集装箱革命不是改造旧码头改出来的，而是绕过旧码头长出来的。**
- **中国改革开放（教科书级的路径创造）**：计划经济是那个年代地球上最深的路径依赖之一——它不是一项政策，而是一整套互相咬死的齿轮：统购统销咬着粮票，粮票咬着户口，户口咬着单位，单位咬着你的就业、住房、医疗和子女，每个零件都锁着别的零件，你动哪一个都得先动另外五个。苏联和东欧的做法是休克疗法，其实就是推倒重来一夜放开，结果大家都看到了。**中国没那么干：回头看人民公社、统购、粮票、计划价格，这些庞然大物没有一个是被正面攻克的，它们后来确实都废除了，但每一个都是费（废）在自己已经被抽空之后——变化全部发生在增量上。先看造路：1979 年广东省委提出想办出口加工区，邓小平说可以划出一块地方叫特区，中央没有钱可以给些政策，你们自己去搞、杀出一条血路来——你看，不是杀进旧城，是杀出去，到旧体制的边界之外建一座新城，深圳是个有一套新规则的边界清楚的小空间。再看导流：农村大包干是"交国家的，留足集体的，剩下都是自己的"——前两句是存量义务，计划轨道的份额一厘米不少；第三句是增量，超出计划的产量进入市场归农民自己。没有废除统购、没有对抗国家计划，只是给增量换了个去向，于是几亿农民干活的闸门开了。然后乡镇企业纯粹就是计划外长出来的——它不在国家计划里，可十几年间吸纳了上亿的农村劳动力，连邓小平都说"乡镇企业异军突起是我们完全没有预料到的最大收获"。在很长时间内城市工业用的是价格双轨制：计划内的钢材还是平价、保证旧体系不断粮，计划外的增量按市场价交易——这个做法被经济学家认为是"没有输家的改革"。1988 年夏天决策层曾决定长痛不如短痛、一步并轨放开价格，这就是价格闯关，结果全国抢购成风，国务院迅速承认闯关失败，于是退回到增量渐进的路子接着熬；一直到 90 年代初市场的份额已经长到让计划轨无足轻重，才在 1992 年前后实现价格并轨——这一次几乎没有任何动静。改革操作得好，旧制度的退役就是这样悄无声息：1993 年全国各地相继取消粮票——这可是运行了 38 年、每个城里人贴身携带的东西，结果举国波澜不惊，因为粮票早就已经没有用了。旧制度的葬礼应该是安静的，因为葬礼从来都在死亡之后。**
- **人们把改革开放的智慧总结为"摸着石头过河"，其实更精确的总结是：不跟存量死磕，让增量长大**。如果鸡飞狗跳就不是好改革——邓小平甚至连意识形态的账都不打，他说"不争论是我的一个发明，不争论是为了争取时间干"。路径创造不是万能的，它有真实的代价：比如中国实行价格双轨制期间，计划和市场两套规则之间就是权力的套利空间，80 年代的倒爷就是双轨制的影子。旧路径退役是必须的，而且我们希望它越早越好，但这总比直接推倒重来好得多——**带着毛病改总比不改强，更比革命强：革命会制造秩序真空，而真空里最先长出来的往往不是最好的东西，而是最狠的东西。沉舟侧畔千帆过，病树前头万木春——这个诗（世）界好就好在它允许旧事物消亡，这样新事物才能不断产生。你不必推倒，只要你掌握了新增量，时间就会从路径依赖的帮凶变成你最耐心的拆迁队。**

## 如何应用

1. **造路**：不要招惹旧路径，先默默地造一条新路——它必须是一个完整的小系统（有自己的
人、必要的权利、独立的预算、自己的流程和标准），而不是旧系统上的一个补丁；让新旧并存一段时间，既保退路又学承重墙在哪。
2. **导流（最核心）**：改革首先争夺的不是旧资源，而是新增资源的取向——"老人老办法，新人新办法"：新员工一律用新制度、新客户全部进新平台、新数据一律写新库。**存量可以慢慢消化，但不允许旧制度继续繁殖。**
3. **退役**：等新路径形成依赖再逐项关停旧路径——先冻结新功能、再停止进新人、降为止维护、降为止读、最后才关闭，像心脏搭桥一样先接旁路再让旧血管自然退场。**你不必推倒，只要掌握新增量，时间就会变成你最耐心的拆迁队。**

---

## 全文（清洗后的课程转录，重点加粗+底纹）

欢迎来到现代思维工具课，我是万维钢。有个现象叫路径依赖，咱们前面讲对称性破缺的时候提到过：因为历史上可能很偶然的原因形成的一个局面，现在看上去非常不合理，但是因为已经被众人接受而无法更改——比如你们大学那首特别难听的校歌、公司里那套人人抱怨的系统、组织里效率极低的审批流程，还有那个经常被当做路径依赖案例、但优劣至今仍有争议的 QWERTY 键盘。它们未必同样糟糕，却同样很难更换。**我们本能的
想法是推倒重来，正所谓"旧的不去新的不来"，干脆壮士断腕。但那是整理仓库的逻辑：旧沙发不扔新沙发确实进不来。**可
公司、家庭、社会不是仓库，是运行中的复杂系统，复杂系统的规律恰恰相反：新的先来，旧的才能去。** 这一讲的思想工具叫路径创造，它可能是破解路径依赖唯一可行的方法，还是用反馈回路分析：不是所有历史遗留问题都叫路径依赖，有些事只是普通的惯性、领导一句话就能改；真正的路径依赖都是一个强化回路——越使用旧路径，旧路径就越有优势；旧路径越有优势，人们就越使用它。强化来自两个方面：一方面自然是既得利益集团——人家靠旧路径吃饭，你要改他们当然反对；另一方面是人们对旧路径已形成了互相依赖。比如你们公司的软件系统非常糟糕、大家天天骂，那为什么不换掉呢？你去挨个部门问：财务部当然想换，可采购的单据全在旧系统里，他们不换我们换了也是白换；采购说我们倒是想换，可几百家供应商都按旧系统的格式对接，人家凭什么陪你折腾；IT 说新系统我们早就选好了，可业务部门不敢停机切换，出了事谁负责呢？**这里没有一个人拥护旧系统，可这是一个多边的局面，你没有办法协调所有人一起换——坏事的长期存在甚至不是因为坏人，这才叫积重难返。** 然后新员工入职培训的是旧系统，新项目立项走的是旧流程，新预算下来投的是旧线路，新客户签约签的是旧合同——只要这些新流量每天还在流进旧路径，你们就
必须一天比一天更加依赖它。**正确的解法不是拆旧路，而是造新路。**

路径创造这个词出自两位管理学者——西法尼亚周立大学斯密尔商学院的拉古·加鲁德和哥本哈根商学院的彼得·卡尔诺主编的一本 2001 年的书，书名就叫《路径依赖与创造》，这本书的目的就是跟路径依赖的宿命论版本唱对台戏。**加鲁德和卡尔诺认为人不是历史的囚徒：身在旧结构中的行动者完全
可以进行有意识的偏离——一边借用旧系统的资源，一边偏离旧系统的逻辑，拉上同伙反复给新事物争取长大的时间，硬生生养出一条新路。后来
的组织研究进一步提出：要实现路径打破（也就是解除旧路径的锁定），最低标准是动摇自我强化机制、把一度被锁死的选择空间重新打开。2023 年的一项实证研究证明了创造新路径可以打破旧路径。**我们把
这个原理变成一套可操作的方法，具体是三个动作：造路、导流、退役。**第一步造路**：不要招惹旧路径，先默默地造一条新路。新路径必须是一个完整的小系统、而不是旧系统上的一个补丁，这样它才能独立发展壮大。我们要让新路跟旧路共存一段时间，这不是妥协，这是要干正事：一个是保留——万一新路不行还能滚回来；一个是让新路有机会在实战中迭代成长，因为温室里练不出真功夫；最重要的是学习——旧系统看着愚蠢，却暗中承担着许多没人说的隐性的功能，你直接拆搞不好就拆到承重墙，并行运转一段才知道承重在哪。**第二步也是最核心的一步是导流**：改革首先争夺的不是旧资源，而是新增资源的取向，简单说就是"老人老办法，新人新办法"——老员工可以保留旧合同，但新员工一律用新制度；老客户可以继续用旧产品，但新客户全部进新平台；旧数据留在旧库，新数据一律写新库。**存量可以慢慢消化，但不允许旧制度继续繁殖。** 第三步**退役**：等人们对新路径已经形成依赖，旧路径就可以逐项关闭了——这个次序是先冻结新功能，再停止进新人，然后降为止维护，再降为止读，最后才正式关闭。**整个过程很像心脏搭桥手术：冠状动脉堵了，医生不会把旧血管拆掉，他会先接上一条旁路，让血绕过堵点继续流向心脏。其实人体自己也会这么做：如果冠状动脉是慢慢变窄的，周围那些原本很细的小血管就可能会逐渐变粗、提前分担血流，这就叫侧支循环。只要新的能成功建立起来，旧的什么时候去已经不重要了。**

为什么说路径创造的关键是导流呢？**因为你没有动任何人的存量，旧路照常运行，你甚至不必宣布它是错的——这就能最大限度地降低冲突。** 我们前面提到过的美国经济学家曼瑟·奥尔森在《集体行动的逻辑》那本书中讲过改革
的死结：**改革的收益是分散在多数人身上的，但收益摊到每个人头上只有薄薄一层、谁也不会为它冲锋；可是改革的损失却是集中在少数人身上，那些既得利益者组织严密会拼死抵抗——支持的人多而散，反对的人少而狠，所以改革总是输。而路径创造翻转了这个不对称：新路径一旦运行起来，它就有了自己的员工、客户、供应商和投资人——这是一批新的、有组织的、利益攸关的受益者，改革就有了自己的既得利益集团。你不需要说服所有反对者，你只要制造足够多的支持者就行。** 路径创造的另一个要点是新路径必须是个完整的系统、是一个最小可行单元：有自己的
人、有必要
的权利、有独立的预算、有自己的流程和标准。很多组织都搞过各种试点——比如创新中心、改革试验区、青年突击队——可是新团队还接受指标考核、用旧审批流程、靠旧部门拨资源，没有自己的预算和用户，旧系统一断供就死掉，那怎么能行呢？

咱们看几个古今中外的成功案例。先看宋朝：五代乱世的游戏规则是兵强马壮者为天子，赵匡胤本人就靠兵变上台的，他比谁都清楚路不能再这么走了。杯酒释兵权是用富贵收买老将的既得利益，那将来新人怎么办呢？如果国家还是武将说了算，皇帝赵匡胤做不稳。**赵家的解决办法是给天下英雄创造一个新的上升路径，那就是科举。科举不是宋朝的新发明，但是宋太宗把科举从每科取十
二三人扩到几百人，其中太平兴国二年一榜就取了 500 多人、而且立刻授官。天下最有野心的人从此改变押注方向，弃武从文——于是几十年后统治精英整个换血，五代时崇尚兵强马壮的价值观已经被"东华门外以状元唱出者乃好儿"的新格言替代，而读书人能对国家有啥威胁呢？** 再看现代科学的出生：你可能以为科学革命应该发生在大学里，但一直到 17 世纪牛顿在剑桥都还在注视亚里士多德、根本不教什么科学实验。是 1660 年一群实验爱好者
在伦敦自建了一个叫皇家学会的俱乐部，才有了第一个科学共同体——他们有自己的网络、建立了实验规范、出版了期刊，吸引到欧洲最好的头脑把最好的成果投给它而不是大学；一直到 1851 年，自然科学才进入剑桥的正式考试体系。还有集装箱的故事：1956 年卡车商人麦克莱恩搞出来了第一套用于航运的集装箱。集装箱运输的便利太明显了——货物装进统一铁箱，卡车拉到岸边吊上船就走；当时人工散装一吨要 5.83 美元，而用集装箱只要 0.16 美元。但是码头工人有既得利益，纽约码头有上百年下来的公会规矩和利益关系，你想跟人谈改革是谈不成的。**麦克莱恩的做法是在新泽西另建一套完全按照集装箱设计的码头：旧码头继续照旧，新码头则用低得惊人的成本把货主和航线一点点吸走。纽约的旧码头没有输掉一场谈判、也没有被谁强行关闭，它只是眼看着船越来越少，自己失去了存在的理由。集装箱革命不是改造旧码头改出来的，而是绕过旧码头长出来的。**

还有一个案例是中国的改革开放——这是一套教科书级的路径创造，而且是在人类历史上最大的系统上操作的。**计划经济是那个年代地球上最深的路径依赖之一：它不是一项政策，而是一整套互相咬死的齿轮——统购统销咬着粮票，粮票咬着户口，户口咬着单位，单位咬着你的就业、住房、医疗和子女，每个零件都锁着别的零件，你动哪一个都得先动另外五个。你怎么改呢？** 苏联和东欧的做法是休克疗法，其实就是推倒重来一夜放开，结果大家都看到了。中国没那么干。咱们回头看人民公社、统购、粮票、计划价格，这些庞然大物没有一个是被正面攻克的，他们后来确实都废除了，但每一个都是在自己已经被抽空之后才废除的——**变化全部发生在增量上。** 先看造路：1979 年广东省委提出想办出口加工区，邓小平说可以划出一块地方叫特区，中央没有钱可以给些政策，你们自己去搞、杀出一条血路来。你看，不是杀进旧城，是杀出去——到旧体制的边界之外建一座新城，深圳是个有一套新规则的、边界清楚的小空间。再看导流：农村大包干是"交国家的，留足集体的，剩下都是自己的"——前两句是存量义务、计划轨道的份额一厘米不少；第三句是增量，超出计划的产量进入市场归农民自己。没有废除统购、没有对抗国家计划，只是给增量换了个去向，于是几亿农民干活的闸门开了。然后乡镇企业纯粹就是计划外长出来的：它不在国家计划里，可十几年间吸纳了上亿的农村劳动力，连邓小平都说"乡镇企业异军突起是我们完全没有预料到的最大收获"。在很长时间内城市工业用的是价格双轨制：计划内的钢材还是平价、保证旧体系不断粮，计划外的增量按市场价交易——这个做法被经济学家认为是"没有输家的改革"，连改革者自己也曾一度觉得双轨制是不是太慢了：1988 年夏天决策层决定长痛不如短痛、一步并轨放开价格，这就是价格闯关，结果是全国抢购成风——老百姓到银行门口排队把存款取出来抢购毛线、火柴、肥皂等一切东西。国务院迅速承认闯关失败，于是退回到增量渐进的路子接着熬；一直到 90 年代初，市场的份额已经长到让计划轨无足轻重，才在 1992 年前后实现价格并轨——这一次几乎没有任何动静。**改革操作得好，旧制度的退役就是这样悄无声息：1993 年，全国各地相继取消粮票——这可是运行了 38 年、每个城里人贴身携带的东西，结果举国波澜不惊，因为粮票早就已经没有用了。旧制度的葬礼应该是安静的，因为葬礼从来都在死亡之后。** 人们把改革开放的智慧总结为"摸着石头过河"，其实更精确的总结是：**不跟存量死磕，让增量长大。如果鸡飞狗跳就不是好改革。** 邓小平甚至连意识形态的账都不打，他说"不争论是我的一个发明，不争论是为了争取时间干"。

**路径创造不是万能的，它有真实的代价**：比如中国实行价格双轨制期间，计划和市场两套规则之间就是权力的套利空间，80 年代的倒爷就是双轨制的影子。旧路径退役是必须的，而且我们希望它越早越好，但这总比直接推倒重来好得多——**带着毛病改，总比不改强，更比革命强：革命会制造秩序真空，而真空里最先长出来的往往不是最好的东西，而是最狠的东西。沉舟侧畔千帆过，病树前头万木春——这个世界好就好在它允许旧事物消亡，这样新事物才能不断产生。你不必推倒，只要你掌握了新增量，时间就会从路径依赖的帮凶变成你最耐心的拆迁队。** 好，以上就是今天的全部内容，现代思维工具课，祝您每天都有收获。
`,dg=`# 106丨适应性循环：稳定蕴藏着不稳定，败坏蕴藏着生机

## 讲什么

**适应性循环（adaptive cycle）**——1945 年 7 月，民主人士黄炎培前往延安拜见毛泽东，两人在窑洞里长谈了一个下午，号称"窑洞对"。这一下午具体都谈了些什么、毛泽东到底对民主做出过什么承诺，后人只有黄炎培的一面之词无从确认；不过席间黄炎培提的一个问题倒是成了传世的名问：**黄说他活了 60 多年，耳闻的不算，亲眼所见的，真所谓"其兴也勃焉，其亡也忽焉"——一人一家、一团体一地方、乃至一国，很少能有跳出这个历史周期率的。** 这是演化者板块的最后一讲，咱们且不说如何跳出周期率，但说这个周期率本身。请你注意黄炎培用的那个"忽"字——这可
不是轻描淡写之词。圣唐由盛转衰就是转在开元天宝的极盛之时：**一个庞大的组织往往不是垮在草台班子阶段，而是垮在流程最完善、分工最精密的成熟期；一片森林也不是毁于树苗稀疏的时候，而是毁于枝繁叶茂遮天蔽日的巅峰。** 为什么败亡总是"忽"的？一个系统看起来最稳最盛最不像要出事的时候，忽然就塌了——因为系统在最成熟、最高效、最稳定的时候，悄悄积累了最大的脆弱。这一讲咱们来点宏大叙事，有个思维工具叫做**适应性循环**，也许能帮你更好地理解佛学说的"成住坏空"。它是加拿大生态学家克劳福德·霍林（我们前面讲慢变量的时候提到过）在 1986 年提出的生态学模型，霍林后来又把这套思路扩展到经济和社会系统。这只是
一个启发性框架和隐喻，但完全可以用来观察森林、企业、城市、制度乃至于一个人的知识体系。**他说的是：很多复杂系统并不是沿着一条直线一路进步，而是在四个阶段之间循环运动——开拓（r）、守成（K）、释放（Ω）、重组（α），然后再一轮开拓。这几个字母可不是随便选的，都出自生态学：r 代表快速繁殖的机会主义者，K 是环境承载的极限，Ω 和 α 则干脆借了希腊字母表的末位和首位——一个象征终结，一个象征开端。** 霍林把这四段画成一个代表无穷大的符号，形状就是一个躺下的"8"（阿拉伯数字）。**中国人会立即发现这四段就是成住坏空：开拓 r 是"成"，也就是新东西冒出来、抢占野蛮生长；守成 K 是"住"，意思是资本积累、规则成型、效率登顶、一切都稳定下来；释放是"坏"，就解构崩解、积累了一辈子的东西被打散；重组是"空"——请注意不是空无一物的那个空，而是旧格局散尽、新格局未定、一切重新洗牌的那个空档。** 前面 S 曲线追踪的是一个指标（用户数、性能、产量）怎么增长或怎么见顶；而适应性循环追踪的是指标背后的系统在增长过程中把自己锁进了什么样的结构里——我们关心的不再是指标还能长多高，而是系统把自己活成了什么样：**如果你看见 S 曲线到了顶部，你只能看到它失去了速度；而如果你能看见结构，你会发现进入守成期意味着开始失去选择——它还
以为自己在走最有效的路，殊不知它现在只剩下那一条路了，而周围的人都会把"只剩一条路"误解成"这条路最可靠"。**

## 解决什么真问题

回答"为什么最繁荣的巅峰往往紧接着崩塌、以及崩塌之后该怎么办"：一个系统从前半环（开拓→守成）看正在越来越稳定，可稳定里面就埋着不稳定。**开拓期靠的是多样性，许多种打法同时试、谁行谁上；而进了守成靠的是标准化——找到那条最有效的路，然后把资源、人力、注意力全压上去把效率榨到极致。** 你看森林大火之后的一片空地，一开始什么都能长，草本灌木幼树一起往上冒；等森林长成，阳光和养分就被少数高大树木占住。公司也一样：创业时什么产品什么办法都可以试，等规模做大流程和分工就一层层固定下来了——这不就是从探索到利用吗？**随着利用连接越来越紧、效率越来越高，系统对熟悉的问题越来越熟练，这一切都很好，但是它
对陌生的问题也越来越迟钝。紧密连接是一把双刃剑：信息、资源、指令传得更快了，可一个局部的故障也能顺着这些紧密的连接迅速烧遍全局。一条高度优化却只剩一个供应商的生产链，平时快的惊人，可只要那个关键节点断一下整条链子就瘫了。**比如现代供应链把管理学的"准时制"奉为圭臬，用了几十年的时间逐渐优化再优化、把库存和缓冲压到极限，那真是效率的奇迹；可是 2020 年新冠一冲，这台效率机器立刻变成了故障传送带——只要有一个港口停摆，就有半个地球的工厂因为等着一颗螺丝钉而开不了工。用机器学习的话说，守成期的系统得的是"过拟合的病"：它把过去的考卷背得滚瓜烂熟、考试次次满分，一旦题型变了它就傻了。** 可你难道能让系统不得过拟合的病吗？明明可以再进一步提高效率，你能说"我放着这个钱不要"吗？你不能。**从开拓走向守成，不是谁做错了，而是每一次局部优化共同造成的。守成期最危险的地方就在这里：系统不是停止优化，而是再也停不下优化。** 开元天宝年间是圣唐的守成之巅：版图辽阔、人口鼎盛、万国来朝，大唐是那个时代地球上最成熟、最自信、最不像要出事的系统——然后安禄山反了。宝应四年（755 年）大唐官方在册户籍大约 891 万户；安史之乱爆发后到了肃宗乾元三年（760 年）能统计到的户数只剩 193 万——短短五年朝廷账面
上的户口掉了差不多八成——这当然包含大量死亡，但它不只是死亡数字，更是统计与控制能力失灵的数字：朝廷已经数不清自己的国家了，那个曾经把一切都管得清清楚楚的成熟系统在冲击之下忽的一下就再也没有能力认识自己了。**黄炎培那个"忽"字的谜底有一半就在这里：安禄山和疫情一样，事件只是扳机——扳机决定崩溃在哪一天发生，是几十年积累的僵化结构决定了崩溃为什么这么严重。安禄山哪有那么大本事？是盛世早已把自己训练成了一个只会应付太平日子的系统。这就叫：稳定蕴藏着不稳定。**

## 核心论点

- **后半环：从释放到重组，也就是从坏到空**——一个王朝亡了、一家公司倒了、一片森林烧了，但坏和空并不是故事的终点，要知道事物是循环的。**适应性循环最反直觉的一个洞见就是：很多真正的新东西恰恰要等到后半环才长得出来——崩溃不一定是创造的反面，它常常是创造的入口。** 你要说"坏"，它就是价值判断；但你要说"释放"，它就只是事实判断。我们还可以用经济学家熊彼特的话说，这叫创造性破坏：**系统积累了一辈子的资本，在崩坏中并不一定全部灰飞烟灭，很多只是从旧结构里被释放出来了——森林大火烧掉的树把养分还给了土壤，一家破产公司散掉的人才流进了别的组织，一个失败的项目留下了代码、数据和一支练过手的团队。崩溃开了被旧结构锁死的资源。** 你要把"空"理解成重组，它的意思就不是没有，而是腾空——旧的东西散了地方就空出来了、新的才有地方；空不是死路，空是敞开：旧结构被清得越干净，新格局的可能性反而越大。**所以空不是循环的终点，而是下一轮的"成"（开拓）到来之前那个孕着的停顿。正所谓"野火烧不尽，春风吹又生"——这就叫败坏蕴藏着生机。**
- **多尺度嵌套**：现实中往往不是一个循环干净地走完再开启另一个，而是多个循环同时运转、大循环里还嵌套着若干个小循环——一片林子嵌在区域气候里，一家公司嵌在整个行业里，一个人嵌在他的时代里。霍林把这种结构叫做多尺度嵌套。**不同尺度的循环之间会有一些有意思的互动：一种是"小循环引爆大循环"（通常是大的尺度约束小的快的尺度，但在危机的临界时刻，小尺度的释放会反过来向上级联、冲破大尺度原有的稳定，这是一种"下克上"，霍林称之为反叛——一粒火星烧成一场大火改变整片山林，一家金融机构的流动性出问题触发整个金融网络的挤兑，黄炎培说的那个"忽"的另一半答案就在这里）；另一种是"大循环为小循环的重生留下一点老底"（周围没烧着的那片老林子决定一场大火之后这块焦土怎么长回来，一个国家的法律和文化决定一座城市灾后能重建成什么样）——这叫记忆：它给重生留下材料，却不给重生规定答案。理解这些你就知道：崩溃不是孤立的、也不是直接归零；新生也不是从零开始——你脚下那个更慢的尺度，总替你记着点什么。**
- **稳定 vs 韧性**：如果成住坏空是不可避免的，如果坏没有那么坏、空也不是完全的空，那我们与其追求稳定就不如追求韧性。**稳定是不崩溃、是保持现状，哪怕被推开一点点还能迅速回到原位——稳定关心的是多快能弹回原点，像个不倒翁推一下晃两下回到正中，守成期的系统拼命追求的就是稳定；而生态学所说的韧性则不保证系统毫发无损，它可以遭到猛烈冲击发生重组，只要重组后仍保有基本的功能和结构、身份与反馈，它就仍有韧性。** 比如一座清澈的浅水湖，平时风浪过后很快恢复、水草鱼群和透明度多年不变，看上去非常稳定；可是营养盐缓慢积累到临界区间，湖就可能突然从水草维持的清水翻进藻类主导的浑水——这就是局部状态看似稳定、韧性却已经很低。再看资本市场：它经历过一次又一次金融危机和市场崩盘，指数可以暴跌、机构可以倒闭、交易规则和监管框架也会被迫重写，可是一次次重组之后市场虽然有所演化，但还是那个市场、还在为经济提供融资定价和资本配置服务——**它没有强行追求稳定，但它保住了自己的身份和核心功能，这就叫韧性。**

## 关键例证 / 金句

- 老子说"反者道之动"——这本来就是大自然的规律，而且坏空不见得是坏事，没有坏空哪有成住呢。
- **成住坏空，老百姓把它读成一条一路向下的斜线，读成"万物终将败坏、一切终归于空"的悲凉，感叹什么无常、看破，其实都是虚无主义；但如果你把它理解成适应性循环，这一切就都是可以接受的。** 从现在适应性循环的视角看，对于任何复杂系统来说，"跳出周期"都不是一个容易成立的系统目标：不是说找对了办法、换个明君、多加几层监督、建立民主，就能让一个政权长胜不衰。**适应性循环揭示的是一种结构倾向：一个系统在持续优化中往往会从开拓走向守成，而走到守成便越来越倾向于拿选择去换效率、把冗余当浪费、把"只剩一条路"当成最可靠的路——"圣"本身就是衰的成因，所以"其亡也忽焉"不是意外，是结账。**
- **你
应该争取的不是跳出，而是韧性**：大明亡了、大清来了，中华文明还在；大清亡了、中华文明仍然在——这就叫韧性。美国 250 年也并非长治久安，中间有无数次危机和混乱，民主制度本来就不是为了保证一位总统治得稳，而是一种制度性、低烈度、几年一次的"有序混乱循环"。**不要指望一个东西永不败坏。我们应该做的是给系统埋下一点冗余、一点余地、一点烧不掉的种子，好让下一轮的"成"有地方生根。**

## 如何应用

1. **识别自己身处循环的哪一段**：开拓期（多样性、野蛮生长）、守成期（标准化、效率登顶但失去选择）、释放期（崩解）、重组期（空档）。**如果你发现系统"再也停不下优化"、把冗余当浪费、把只剩一条路当最可靠的路，你已经进入守成期的危险区——此时最有价值的动作不是继续优化，而是主动引入冗余和多样性。**
2. **把崩溃当成创造的入口**：释放不是价值判断而是事实判断——破产公司散掉的人才、失败项目留下的代码和数据，都是被释放的资源。**空不是死路，空是敞开；旧结构清得越干净，新格局的可能性越大。**
3. **追求韧性而非稳定**：稳定是不倒翁（弹回原点），韧性是遭受冲击重组后仍保有核心功能与身份（资本市场历次危机后还是那个市场）。**给系统埋下一点冗余、一点余地、一点烧不掉的种子——大循环为小循环的重生留一点老底，让下一轮的"成"有地方生根。**

---

## 全文（清洗后的课程转录，重点加粗+底纹）

欢迎来到现代思维工具课，我是万维钢。1945 年 7 月，民主人士黄炎培前往延安拜见毛泽东，两人在窑洞里长谈了一个下午，号称"窑洞对"。这一下午具体都谈了些什么、毛泽东到底对民主做出过什么承诺，后人只有黄炎培的一面之词无从确认；不过席间黄炎培提的一个问题倒是成了传世的名问：**黄说他活了 60 多年，耳闻的不算，亲眼所见的，真所谓"其兴也勃焉，其亡也忽焉"——一人一家、一团体一地方、乃至一国，很少能有跳出这个历史周期率的。** 这是演化者板块的最后一讲，咱们且不说如何跳出周期率，但说这个周期率本身。请你注意黄炎培用的那个"忽"字——这可
不是轻描淡写之词。圣唐由盛转衰就是转在开元天宝的极盛之时。**一个庞大的组织往往不是垮在草台班子阶段，而是垮在流程最完善、分工最精密的成熟期；一片森林也不是毁于树苗稀疏的时候，而是毁于枝繁叶茂遮天蔽日的巅峰。为什么败亡总是"忽"的？一个系统好的（看起来）最稳最盛最不像要出事的时候忽然就塌了，因为系统在最成熟、最高效、最稳定的时候，悄悄积累了最大的脆弱。** 这一讲咱们来点宏大叙事，有个思维工具叫做**适应性循环**，也许能帮你更好地理解佛学说的"成住坏空"。前面我们讲 S 曲线讲的是一个事业、一项技术怎么从慢到快长到头、又应该如何
在见顶之前主动开启第二曲线。那如果这个东西或者体量太大、或者根本就没有自主性、没有能力主动开启第二曲线呢？那么它就会见证黄炎培说的那个结局。但我们这里要讲一个更完整的故事。**适应性循环是加拿大生态学家克劳福德·霍林（我们前面讲慢变量的时候提到过）在 1986 年提出的生态学模型，霍林后来又把这套思路扩展到经济和社会系统。这只是一个启发性框架和隐喻，但完全
可以用来观察森林、企业、城市、制度乃至于一个人的知识体系。**他说的是：很多复杂系统并不是沿着一条直线一路进步，而是在四个阶段之间循环运动，也就是开拓（r）、守成（K）、释放（Ω）、重组（α），然后再一轮开拓。** 这四个阶段用字母表示就是 r、K、Ω 和 α，再回到 r。这几个字母可不是随便选的，都出自生态学：r 代表快速繁殖的机会主义者，K 是环境承载的极限，Ω 和 α 则干脆借了希腊字母表的末位和首位——一个象征终结，一个象征开端。**霍林把这四段画成一个代表无穷大的符号，形状就是一个躺下的"8"。中国人会立即发现这四段就是成住坏空：开拓 r 是成，也就是新东西冒出来、抢占野蛮生长；守成 K 是住，意思是资本积累、规则成型、效率登顶、一切都稳定下来；释放是坏，就解构崩解、积累了一辈子的东西被打散；重组是空——请注意不是空无一物的那个空，而是旧格局散尽、新格局未定、一切重新洗牌的那个空档。** 前面 S 曲线追踪的是一个指标，比如用户数、性能、产量等等，追踪这个指标怎么增长或者怎么见顶；而这里适应性循环追踪的是指标背后的系统在增长过程中把自己锁进了什么样的结构里——**我们关心的不再是指标还能长多高，而是系统把自己活成了什么样。什么样呢？如果你看见 S 曲线到了顶部，你只能看到它失去了速度；而如果你能看见结构，你会发现进入守成期意味着开始失去选择。它还
以为自己在走最有效的路，殊不知它现在只剩下那一条路了；而周围的人都会把"只剩一条路"误解成"这条路最可靠"。**

咱们先讲前半环，从开拓到守成 K：这个系统正在越来越稳定，可稳定里面就埋着不稳定。**开拓期靠的是多样性，许多种打法同时试、谁行谁上；而进了守成靠的是标准化——找到那条最有效的路，然后把资源、人力、注意力全压上去把效率榨到极致。** 你看森林大火之后的一片空地：一开始什么都能长，草本灌木幼树一起往上冒；等森林长成，阳光和养分就被少数高大树木占住。公司也一样：创业时什么产品什么办法都可以试，等规模做大，流程和分工就一层层固定下来了——这不就是从探索到利用吗？**随着利用连接越来越紧、效率越来越高，系统对熟悉的问题越来越熟练，这一切都很好，但是它
对陌生的问题也越来越迟钝。**紧密连接是一把双刃剑：信息、资源、指令传得更快了，可一个局部的故障也能顺着这些紧密的连接迅速烧遍全局。一条高度优化却只剩一个供应商的生产链，平时快的惊人，可只要那个关键节点断一下，整条链子就瘫了。** 比如现代供应链把管理学的"准时制"奉为圭臬，用了几十年的时间逐渐优化、再优化，把库存和缓冲压到极限，那真是效率的奇迹；可是 2020 年新冠一冲，这台效率机器立刻变成了故障传送带——只要有一个港口停摆，就有半个地球的工厂因为等着一颗螺丝钉而开不了工。**用机器学习的话说，守成期的系统得的是"过拟合的病"：它把过去的考卷背得滚瓜烂熟、考试次次满分，一旦题型变了它就傻了。** 可你难道能让系统不得过拟合的病吗？明明可以再进一步提高效率，你能说"我放着这个钱不要"吗？你不能。**从开拓走向守成，不是谁做错了，而是每一次局部优化共同造成的。守成期最危险的地方就在这里：系统不是停止优化，而是再也停不下优化。**

开元天宝年间是圣唐的守成之巅：版图辽阔、人口鼎盛、万国来朝，大唐是那个时代世界上
最成熟、最自信、最不像要出事的系统，然后安禄山反了。宝应四年也就是公元 755 年，大唐官方在册户籍大约 891 万户；安史之乱爆发后，到了肃宗乾元三年也就是公元 760 年，能统计到的户数只剩 193 万——**短短五年，朝廷账面
上的户口掉了差不多八成。这当然包含大量死亡，但它不只是死亡数字，更是统计与控制能力失灵的数字：朝廷已经数不清自己的国家了，那个曾经把一切都管得清清楚楚的成熟系统在冲击之下忽的一下就再也没有能力认识自己了。**黄炎培那个"忽"字的谜底有一半就在这里：安禄山和疫情一样，事件只是扳机——扳机决定崩溃在哪一天发生，是几十年积累的僵化结构决定了崩溃为什么这么严重。安禄山哪有那么大本事？是盛世早已把自己训练成了一个只会应付太平日子的系统。这就叫：稳定蕴藏着不稳定。**

再说后半环，从释放到重组，也就是从坏到空：一个王朝亡了、一家公司倒了、一片森林烧了，但坏和空并不是故事的终点，要知道事物是循环的。**适应性循环最反直觉的一个洞见就是：很多真正的新东西恰恰要等到后半环才长得出来。崩溃不一定是创造的反面，它常常是创造的入口。** 你要说"坏"，它就是价值判断；但你要说"释放"，它就只是事实判断。我们还可以用经济学家熊彼特的话说，这叫创造性破坏：**系统积累了一辈子的资本，在崩坏中并不一定全部灰飞烟灭，很多只是从旧结构里被释放出来了——森林大火烧掉的树把养分还给了土壤，一家破产公司散掉的人才流进了别的组织，一个失败的项目留下了代码、数据和一支练过手的团队。崩溃开了被旧结构锁死的资源。** 你要把"空"理解成重组，它的意思就不是没有，而是腾空——旧的东西散了、地方就空出来了、新的才有地方；空不是死路，空是敞开：旧结构被清得越干净，新格局的可能性反而越大。**所以空不是循环的终点，而是下一轮的"成"（开拓）到来之前那个孕着的停顿。正所谓"野火烧不尽，春风吹又生"——这就叫败坏蕴藏着生机。**

开拓、守成、释放、重组，我们讲完了一个循环，但现实中往往不是一个循环干净地走完再开启另一个循环，而是多个循环同时运转、大循环里还嵌套着若干个小循环——一片林子嵌在区域气候里，一家公司嵌在整个行业里，一个人嵌在他的时代里，大大小小、快慢不一的循环一层套着一层，霍林把这种结构叫做**多尺度嵌套**。不同尺度的循环之间会有一些有意思的互动：**一种是小循环引爆大循环**——通常是大的尺度约束小的快的尺度，但在危机的临界时刻，小尺度的释放会反过来向上级联、冲破大尺度原有的稳定，这是一种"下克上"，所以霍林称之为**反叛**：一粒火星烧成一场大火改变整片山林，一家金融机构的流动性出问题触发整个金融网络的挤兑——黄炎培说的那个"忽"的另一半答案就在这里，小尺度的崩坏会顺着嵌套结构一路往上烧。**另一种是大循环为小循环的重生留下一点老底**——周围没烧着的那片老林子决定一场大火之后这块焦土怎么长回来，一个国家的法律和文化决定一座城市灾后能重建成什么样，这叫**记忆**：它给重生留下材料，却不给重生规定答案。**理解这些你就知道：崩溃不是孤立的、也不是直接归零；新生也不是从零开始——你脚下那个更慢的尺度，总替你记着点什么。**

这是一个很大的慰藉。**如果成住坏空是不可避免的，如果坏没有那么坏、空也不是完全的空，那我们与其追求稳定就不如追求韧性。** 稳定是不崩溃、是保持现状，哪怕被推开一点点还能迅速回到原位——稳定关心的是多快能弹回原点，像个不倒翁推一下晃两下回到正中，守成期的系统拼命追求的就是稳定，别快点复原回到熟悉的秩序里去。而生态学所说的**韧性**则不保证系统毫发无损：它可以遭到猛烈冲击发生重组，只要重组后仍保有基本的功能和结构、身份与反馈，它就仍有韧性。比如一座清澈的浅水湖：平时风浪过后很快恢复，水草鱼群和透明度多年不变，看上去非常稳定；可是营养盐缓慢积累到临界区间，湖就可能突然从水草维持的清水翻进藻类主导的浑水——**这就是局部状态看似稳定、韧性却已经很低。** 再看资本市场：它经历过一次又一次金融危机和市场崩盘，指数可以暴跌、机构可以倒闭、交易规则和监管框架也会被迫重写，可是一次次重组之后市场虽然有所演化，但还是那个市场、还在为经济提供融资定价和资本配置服务——**它没有强行追求稳定，但它保住了自己的身份和核心功能，这就叫韧性。**

既然循环不可避免，我们与其追求长期稳定，就不如追求更多的韧性。**成住坏空，老百姓把它读成一条一路向下的斜线，读成"万物终将败坏、一切终归于空"的悲凉，感叹什么无常、看破，其实都是虚无主义；但如果你把它理解成适应性循环，这一切就都是可以接受的。老子说"反者道之动"，这本来就是大自然的规律，而且坏空不见得是坏事，没有坏空哪有成住呢。** 现在如果你突然被穿越到窑洞的现场，你或许可以给黄炎培讲讲这番道理：**从适应性循环的视角看（注意这是系统论的观察，不是政治学的判断），对于任何复杂系统来说，"跳出周期"都不是一个容易成立的系统目标。不是说找对了办法、换个明君、多加几层监督、建立民主，就能让一个政权长胜不衰。适应性循环揭示的是一种结构倾向：一个系统在持续优化中往往会从开拓走向守成，而走到守成便越来越倾向于拿选择去换效率、把冗余当浪费、把"只剩一条路"当成最可靠的路——"圣"本身就是衰的成因，所以"其亡也忽焉"不是意外，是结账。** 你应该争取的不是跳出，而是韧性：大明亡了、大清来了，中华文明还在；大清亡了、中华文明仍然在——这就叫韧性。美国 250 年也并非长治久安，中间有无数次危机和混乱，民主制度本来就不是为了保证一位总统治得稳，而是一种制度性、低烈度、几年一次的"有序混乱循环"。**不要指望一个东西永不败坏。我们应该做的是给系统埋下一点冗余、一点余地、一点烧不掉的种子，好让下一轮的"成"有地方生根。** 好，以上就是今天的全部内容，现代思维工具课，祝您每天都有收获。
`,pg=`# 108丨零阶道理：大局观就是给真理分配表决权\r
\r
## 讲什么\r
\r
**零阶道理（zero-order truth）**——咱们进入现代思维工具课的最后一个板块，我称之为"高观点反思"。"高观点"这个词是借用德国数学家菲利克斯·克莱因 1908 年出版的名著《高观点下的初等数学》：学过高等数学再回头看中学数学，许多原本零散的知识会显出共同的结构，因为你站得高了。前面我们讲了那么多思维工具，这个模块要站到更高处，讲几个统领性的、有通用性的思维工具。这一讲请允许我说一个我原创的说法，叫**零阶道理**。**零阶道理就是主导一个事物或者一个决策的最基本最重要的道理。它有个奇特的\r
性质：因为他太基本了，人们反而不愿意谈论他，而喜欢谈论对他的修正。** 比如"球星对一支球队很有用"就是个零阶道理，可是因为人人都知道这个道理、说出来显得没水平，所以人们更爱谈论的是"球星来了也不都是好事，可能还会引发球队矛盾、破坏更衣室气氛"——这话也对，但那是次要的，我们绝对不能因为那一点次要的坏处而不要主要的好处。再比如"现代化是好的"也是个零阶道理，老百姓都明白现代化的好处，可是有的学者偏爱讲现代化的坏处（破坏了温情脉脉的人际关系、瓦解了乡村传统经济等），讲着讲着就成了反现代化的人，可你要让他回到过去当农民他肯定不干。\r
\r
## 解决什么真问题\r
\r
回答"为什么人不太容易被错误的道理欺骗、却常常被正确而不重要的道理劫持"：**更常见的灾难是被正确而不重要的道理劫持——那些道理不能说完全没用，但他们只是对零阶道理的修正而已，不能因为他们的存在而否定零阶道理。** 人脑是个多元政体：面对一个事情，你的头脑中总有很多个声音，你总可以讲出五花八门的道理来；可是相对于你的目的，绝大多数道理的影响微乎其微——**一个道理可以 100% 正确，却只值得 1% 的权重。可是大多数人只有一套真假判断系统，没有一套权重判断系统：凡是听起来有道理的因素都拿到了一张同等的选票，芝麻石头和山峰一律按一件东西计算。** 我们从小教育考试考的全是对不对，因为对错有标准答案；可是重不重要没有标准答案——它取决于你的目标，是主观的判断，你得自己学着分清什么重要什么不重要。\r
\r
## 核心论点\r
\r
- **零阶与高阶的关系（微扰理论）**："零阶"这个词来自物理学家的一个传统手艺：面对一个求不出精确解的复杂问题，先算一个粗糙但抓住主干的答案，这叫零阶近似，然后在这个答案上修修补补、加上一阶修正和二阶修正，逐步把精度提上去，这套办法叫微扰理论。**比如你问一年有多少天，零阶答案就是 365 天。这个答案是不精确的，马上就会有人说不对，地球绕太阳一圈不止 365 天——那么我们可以搞个一阶修正，也就是每四年加一天成为闰年；有人又说一阶修正也不准确，没错，所以还有二阶修正：逢整百年不闰、逢 400 年又闰。历法的修正项可以无穷无尽地加下去，但是他们只能微调结果，推翻不了一年约等于 365 天这个零阶道理。这就是零阶和高阶的关系：高阶是小量，小量可以修正零阶项，但是没有资格取代零阶项。你必须先承认零阶道理的正确性，才谈得上修正。一开口就大修正的人，往往已经忘了自己在修正什么。**\r
- **怎么找到零阶道理（主导平衡）**：物理学家的思路是主导平衡——面对一个包含许多项的方程，先问哪几项占主导，把其余的暂时扔掉。一旦你理解了这个思想就会发现它到处都是：毛泽东的《矛盾论》说研究任何复杂过程就要用力找出它的主要矛盾，捉住了这个主要矛盾一切问题就迎刃而解——抓主要矛盾抓的就是零阶道理；邓小平的说法则是"硬道理"——1992 年南方谈话，前一句刚说要注意经济稳定协调的发展，紧接着就说"但稳定和协调也是相对的，不是绝对的，发展才是硬道理"。**你品这个说法的物理感：邓小平没说稳定和协调是错的，那也是有道理、也对，他是说那些道理是软的——软道理可以讨论，硬道理必须服从。当时姓资姓社的争论不可开交，每一条反对意见单看也都有道理，可是邓小平此话一出争论就结束了——他不是驳倒了谁，他是给所有别的道理降了级。对不对是一回事，重不重要是另一回事。**\r
- **零阶道理的严格定义**：**在给定目标、时间尺度和比较对象之下，足以决定结论方向和主要量级的最小因果模型。** 三个关键词：方向（它告诉你 A 和 B 到底哪个好）、量级（它告诉你大概好多少，是好一点还是好十倍）、最小（它未必只含一个因素，但只保留最少的几个主导项，多一项都不要）。举例：要不要跳槽这件事的零阶道理是什么？给定目标是 10 年后的收入和能力，给定选项是留下和跳槽，那么决定方向和量级的最小因果模型只有两项——一个是这个岗位能不能让你持续接触到比你强的人，另一个是这个行业未来 10 年是扩张还是收缩；剩下的一切（老板脾气、通勤、工位朝向、竞业条款等）全是修正项。\r
- **大局观 = 复杂系统里最关键的那一两条反馈回路**：大局和细节的区别不是"宏大"与"微小"，而是**控制力与装饰性**。军用地图上不会画每一棵树、每一块石头、每户人家的晾衣绳，但一定会画一座桥——桥未必比森林大，可是因为要从桥上过，它拥有因果控制权。你说你是本地人、你认识每一棵树、你记得村口发生过的悲欢离合，可你要是说不明白村外那座桥的位置，这种熟悉毫无价值。**大局观是对信息做有损压缩：它忽略大部分内容，只要求保住三样东西——方向、量级和机制。你可能以为忽略很容易，但忽略其实是一个硬功夫：很多人过不了这一关，你必须允许自己在不重要的地方不精确；没有误差容忍度的人建立不了大局观，他会不断寻找例外、限定语和补充条件，最后在细节的碎屑堆上搁浅。**\r
- **为什么人们如此容易沉迷于细节（可评估性假说）**：因为显眼天然吸引关注，而重要先定目标再做计算。1996 年芝加哥大学商学院的\r
行为科学家希凯元提出了**可评估性假说**：一个因素越容易评价，人们在决策中给他的权重就越大，哪怕他并不重要。希凯的一个著名实验是让人给两本音乐词典估价：A 收词 2 万条但封面破了，B 收词 1 万条但完好如新。如果只给\r
人看其中一本词典，破损的 B（此处指完好如新的？应为：收词 2 万的 A 因封面破损）得到的估价更高，因为它"新"；但是如果把两本词典放在一起，人们就愿意为 A 出更高的价，因为很明显 A 的词条更多、似乎应该更有用。**这解释了女性找对象为什么会那么重视身高：其实研究表明另一半的身高对婚姻幸福并没有多大的影响，但是身高这个因素实在是太容易评估、太显眼了。** 一个在教学一线工作了几十年的中学教师会认为自己很懂教育，可是他一生其实也只教过上千个孩子而已：他不知道当今教育的局面是怎么来的、也不知道未来的教育会往何处去，他一生看见的只是一个地点的一个截面，这就使他没有办法想象其他的可能性，他会认为自己的那点经验就是教育的真理。还有个说法出自丹尼尔·卡尼曼叫**聚焦错觉**：生活中没有什么事像你正在想着他的时候显得那么重要——如果你只盯住、只知道这一个细节，你会认为这个细节就是最重要的因素。\r
- **细节让人显得专业，高阶道理让人显得聪明**：100 年以前的科学家往往是一个学科的全才、像达尔文那样能够把握学科的大局；但是现在科研早就是一个普通职业、养活了很多\r
人。当今绝大多数科研工作者研究的都是自己领域中一个非常细节的小问题，你听都听不懂；可是当他们写科研经费申请书的时候，一定会告诉你他们那个问题就是天下最重要的。**你要是一听谁说细节问题就肃然起敬，你可就被忽悠了。** 还有一种人恰恰相反，不但不纠结细节而且胸怀天下：美联储下个月降不降息他有判断、俄乌战争下一步怎么走他有推演、宏观经济的深层矛盾他能给你讲得头头是道——北京出租车司机人均国师，正如巴西人都是足球教练。那你说这些人是不是特别有大局观？**这不叫大局观。真正的\r
大局是由目标函数决定的：衡量一个因素是零阶还是高阶，应该看他对你的目标有多大因果控制权。** 如果你的工作跟外貌相关，中美贸易战会对你很重要，否则你应该多考虑一些身边具体的东西——你所在的行业、你们那家公司、你的技能、你的家庭和你的健康。**对绝大多数人来说，宏观是你人生方程里的高阶小量，应该排在你自己的那几个变量的后面。** 周期人（周其仁）教授在 2025 年 10 月的一次讲话中说："宏观政策和特朗普那些事情，你说了也不听你的，你手里的事情听你的。"他还在烟台对企业\r
家们打过\r
一个比方：全球天气当然最宏观，可你真正要操心的是今天烟台的天气。周其仁讲不妨试试：把刷屏时间减掉一大半，看究竟错过什么大事。省出来的时间干什么呢？对做企业的来说，可以集中更多时间去研究值得你研究的事，那就是客户——你的客户，唯一给你们公司付钱的客户。**当然不是说宏观不值得花时间，但宏大叙事应该跟自身决策放在不同的账本上：我们不应该假装飓风不存在，但是没必要把力气花在对飓风喊话上。你真正的大局观不是全国那个大局，而是本地的小局。**\r
\r
## 关键例证 / 金句\r
\r
- **抓零阶道理，简单说就是分清轻重缓急，而轻重缓急取决于你的目标设定。首要的心法是"先问权重再问真假"**：如果一个事对你不重要，他是真是假对你都不重要，你根本就不应该花时间去验证他的真假。中国人把这个动作叫**权衡**：权的本意是秤砣（权衡就是看看重要不重要）。一个著名的典故：人家问孟子，男女授受不亲是礼法的规定，那如果嫂子掉水里了，应不应该用手把她救上来呢？孟子说"嫂溺不援，是豺狼也；男女授受不亲，礼也；嫂溺援之以手者，权也"——在救命这么大的事面前，你还讲什么礼法呢？**知道轻重缓急，这就是权。这个权也是权力的权：各方面都有用钱的理由、每个人都有优点、每个项目都说做他最符合原则，那你说这点资源给谁好？把权力给你，就是让你去权衡。**\r
- **考虑问题不需要面面俱到**：如果你问"我还有什么没考虑"，那你永远都考虑不完。你只需要做个翻盘检验——问"还有什么足以扭转我的结论"：如果你以自我成长为优先，上班通勤时间多十分钟少十分钟对你是无所谓的；但如果你以家庭生活为优先，而每天多出来的十分钟恰好让你赶不上接孩子放学，那这个因素就足以扭转你的结论。**不过有一类因素永远不能当小量处理，那就是硬约束：某个小概率风险一旦发生就是破产、是人命，那就必须一票否决——用物理学家的话说就是微积数不一定收敛。**\r
- 有些人遇到点啥事前想后翻来覆去下不了决心，就是被那些不重要的小因素给绊住了。**如果能抓住零阶道理，其实一般的事情都不用分析那么多：方向定了就停止分析，细节留给执行就好。大局观的一半是知道该看什么，另一半是知道什么时候不再看。**\r
- **诸葛亮"观其大略"**：裴松之给三国志做注时引了《魏略》里的话，说诸葛亮年轻时在荆州游学，他的同学之中石广元、徐元直和孟公威三人读书都是"务于精熟"，而诸葛亮"独观其大略"——别人读书都是一字一句地扣、研究这个字这个词是什么意思，而诸葛亮读的是整本书究竟在讲什么、其中哪个逻辑最要紧。**"务于精熟"是给每一句话平等的一票，而"观其大略"是给书里的道理分配表决权。** 魏略还记了一笔：诸葛亮当时曾经断言这三位同学做官可至刺史，问他自己的官职，他笑而不言——后来那三个人果然大致官止于此，而诸葛亮做了丞相。罗贯中可能是受了这段史书的启发，在三国演义"舌战群儒"这场戏中专门给诸葛亮安排了一段念白，说自己"君子之儒"，而江东那些文臣都是"小人之儒"："小人\r
之儒，为物雕虫，专工青春，作好手穷经笔下，虽有千言胸中无一策"——你看这些小人之儒的特点可不是什么贪钱、抄袭、嫉妒和陷害那些道德品质问题，而是没有大局观的问题。鲁迅笔下的孔乙己以知道"回"字有四种写法为荣，不也是这个意思吗？**\r
- **我们这个课程讲了很\r
多思维工具，你自己读书还能看到更多的道理，有时候你会觉得有些道理放在一起似乎是矛盾的，所以总有人问我"你讲的这个道理的适用范围是什么？他的度在哪里？"其实不矛盾：**哪个是现场的零阶道理，由你在现场决定；那个度只能根据具体情况具体分析。物语金\r
属会显得你（博）很聪明，但观其大略、抓住零阶道理才是真正的智慧。**\r
\r
---\r
\r
## 如何应用\r
\r
1. **先问权重再问真假**：面对一个说法先问"它对我要做的事有多重要"——不重要的事是真是假都不值得花时间验证。用"翻盘检验"代替面面俱到：只问"还有什么足以扭转我的结论"，而不是"我还有什么没考虑"。**方向定了就停止分析，细节留给执行——大局观的一半是知道该看什么，另一半是知道什么时候不再看。**\r
2. **找到你的零阶道理**：给定目标（10 年后的收入能力）、时间尺度（10 年）、比较对象（留下 vs 跳槽），最小因果模型只有两项——"能否持续接触比你强的人"和"行业未来是扩张还是收缩"，其余全是修正项。对绝大多数人，宏观（中美贸易战、美联储）是你人生方程里的高阶小量，应该排在你自己的行业、公司、技能、家庭、健康这几个变量后面。**你真正的大局观不是全国那个大局，而是本地的小局。**\r
3. **警惕可评估性陷阱与硬约束**：显眼的东西天然吸引权重（身高、通勤、封皮破损）——用目标函数校正权重；但有一类因素永远不能当小量处理：一旦发生就是破产、人命的硬约束必须一票否决（微扰级数不一定收敛）。学习诸葛亮"观其大略"——给书里的道理分配表决权，而不是给每句话平等的一票。\r
\r
好，以上就是今天的全部内容，现代思维工具课，祝您每天都有收获。\r
\r
\r
---\r
\r
## 全文（清洗后的课程转录，重点加粗+底纹）\r
\r
（全文与五要素内容一致，核心论点与关键例证已完整覆盖本讲；转录细节以知识库为准。）\r
\r
`,_0={"thinking-tools":{name:"思维工具",desc:"万维钢《现代思维工具课》专题研读：世界观与方法论的结构化笔记。"}},$e=[{slug:"wwg-079-legibility-metis",title:"079丨可读性：编户齐民中的米提斯",topic:"thinking-tools",tags:["思维工具","可读性","米提斯","社会参与"],date:"2026-06-15",excerpt:"国家为了读社会反而把社会读坏。米提斯不是能进表格的能力，而是知道表格什么时候不够用的能力。",raw:V1},{slug:"wwg-080-common-knowledge",title:"080丨共同知识：让众人服从的神器",topic:"thinking-tools",tags:["思维工具","共同知识","仪式","社会参与"],date:"2026-06-16",excerpt:"私人知识让你看见真相，共同知识才让你敢于行动。谁掌握了它，谁就握住让一片人同时行动的总开关。",raw:W1},{slug:"wwg-081-scapegoat",title:'081丨替罪羊：从"找坏人"到"看系统"',topic:"thinking-tools",tags:["思维工具","替罪羊","系统思维","社会参与"],date:"2026-06-17",excerpt:"找替罪羊是人的本能，但看系统也是现代人的本分。用系统思维取代戏曲思维。",raw:G1},{slug:"wwg-082-unintended-consequences",title:"082丨非预期后果：好意图怎么会带来坏结果？",topic:"thinking-tools",tags:["思维工具","非预期后果","激励","社会参与"],date:"2026-06-18",excerpt:"人们反应的是激励而不是意图。意图属于你自己，可是后果属于世界。",raw:H1},{slug:"wwg-083-slow-variables",title:"083丨慢变量：政府的使命是建立稳定预期",topic:"thinking-tools",tags:["思维工具","慢变量","稳定预期","社会参与"],date:"2026-06-19",excerpt:"有的政府吃慢变量的利息，有的政府消耗慢变量的本金。政府不是好在做什么，而是好在不做什么。",raw:Q1},{slug:"wwg-084-moloch",title:"084丨摩洛克：东亚为什么这么卷？",topic:"thinking-tools",tags:["思维工具","摩洛克","内卷","社会参与"],date:"2026-06-20",excerpt:"卷不是因为社会不公平，卷恰恰是公平的产物。低生育率是东亚年轻人对摩洛克最后的抵抗。",raw:K1},{slug:"wwg-085-third-thing",title:"085丨第三物：合作不必先有共识",topic:"thinking-tools",tags:["思维工具","第三物","边界物","社会参与"],date:"2026-06-21",excerpt:"共同理解是奢侈品，共同对象才是日用品。文明不是没有冲突，很多时候文明是给冲突一个球。",raw:X1},{slug:"wwg-086-residual-judgment",title:"086丨剩余判断权：为什么组织总得有人说了算",topic:"thinking-tools",tags:["思维工具","剩余判断权","领导者","管理与组织"],date:"2026-06-22",excerpt:"把许多可能压缩成一个共同承诺。老板绝不是管得越多越好，剩下那一小块才是你该管的。",raw:Z1},{slug:"wwg-087-organizational-capital",title:"087丨组织资本：怎样让 1+1＞2",topic:"thinking-tools",tags:["思维工具","组织资本","心理安全","管理与组织"],date:"2026-06-23",excerpt:"人力资本长在人身上，组织资本长在人与人之间。领导力是创造一个场，让许多大脑组成一个更大的大脑。",raw:Y1},{slug:"wwg-088-narrative-power",title:"088丨叙事权：怎样对众人施法",topic:"thinking-tools",tags:["思维工具","叙事权","议程设置","管理与组织"],date:"2026-06-24",excerpt:"命令只能让一个人做一件事，叙事却能让 1000 个人自己补完那 1000 条没下达的命令。",raw:q1},{slug:"wwg-090-personal-dependence",title:"090丨人身依附和角色责任：从前现代到现代管理",topic:"thinking-tools",tags:["思维工具","人身依附","角色责任","管理与组织"],date:"2026-06-25",excerpt:"前现代管理是人对人负责，现代管理是人对角色负责。一切进步社会的运动，都是—场从身份到契约的运动。",raw:J1},{slug:"wwg-091-goodhart",title:"091丨古德哈特定律：指标的暴政",topic:"thinking-tools",tags:["思维工具","古德哈特定律","指标","管理与组织"],date:"2026-06-26",excerpt:"当一种度量变成了目标，它就不再是一个好的度量。指标崇拜不是理性的胜利，而是判断力的缺失。",raw:b1},{slug:"wwg-092-commanders-intent",title:'092丨指挥官意图：把控制从"动作细节"挪到"目的、任务、边界"上',topic:"thinking-tools",tags:["思维工具","指挥官意图","任务式指挥","管理与组织"],date:"2026-06-27",excerpt:"低级的控制是遥控手脚，高级的控制是统一判断标准。可以违背原计划，但不能违背上级意图。",raw:ng},{slug:"wwg-093-principal-agent",title:"093丨委托—代理问题：不懂这一条，看组织永远像看宫斗剧",topic:"thinking-tools",tags:["思维工具","委托代理","激励相容","管理与组织"],date:"2026-06-28",excerpt:"用人要疑，但疑心别用来盯人，要用来修结构。监督不是不信任，监督是信任的基础设施。",raw:eg},{slug:"wwg-094-process-checklist-library",title:"094丨流程、清单和经验库：把聪明外置成系统",topic:"thinking-tools",tags:["思维工具","流程","清单","组织智慧","管理与组织"],date:"2026-06-29",excerpt:"制度保证组织不乱，制保证组织不笨。创新是变异，实验是选择，流程是保留。",raw:tg},{slug:"wwg-096-baseline-drift",title:"096丨基线漂移：不正常会慢慢变得正常",topic:"thinking-tools",tags:["思维工具","基线漂移","管理与组织"],date:"2026-07-01",excerpt:"基线漂移的要害不是世界变差，而是评价世界的尺也跟着一起变差——这是连温度计都跟着换了的温水煮青蛙。",raw:rg},{slug:"wwg-097-claim-grant-authorize",title:'097丨认领、授予和授权：怎样从"能领导"变成"是领导"',topic:"thinking-tools",tags:["思维工具","认领","授予","授权","管理与组织"],date:"2026-07-02",excerpt:"职位不是毕业证，它更像银行授信。你要先用领导力赢得地位，再靠地位获得权力。",raw:lg},{slug:"wwg-098-generativity",title:"098丨生成：最高级的创造",topic:"thinking-tools",tags:["思维工具","生成","组织闭合","复杂系统"],date:"2026-07-03",excerpt:"让一个东西因你而生，却不靠你而活、不照你而变。组织闭合防死，可演化性防老。",raw:ig},{slug:"wwg-099-symmetry-breaking",title:"099丨对称性破缺：命运不过是冷却了的偶然",topic:"thinking-tools",tags:["思维工具","对称性破缺","复杂系统"],date:"2026-07-04",excerpt:"趁热的时候改变不费吹灰之力，冷却了就像移动星系一样难。可塑性不是权力的函数，而是温度的函数。",raw:og},{slug:"wwg-100-adjacent-possible",title:"100丨临近可能：如何实现无法事先想象的事情？",topic:"thinking-tools",tags:["思维工具","临近可能","组合进化","复杂系统"],date:"2026-07-05",excerpt:"你必须先实现一种可能性才能打开新的可能性——你先进入那个房间，才能打开那扇新门。",raw:sg},{slug:"wwg-102-feedback-loop",title:"102丨反馈回路：怎样操控复杂系统",topic:"thinking-tools",tags:["思维工具","反馈回路","复杂系统"],date:"2026-07-06",excerpt:"正反馈制造增长，负反馈制造稳定。你想让它增长就启动强化回路，想让它稳定就建立负反馈。",raw:ag},{slug:"wwg-103-self-organized-criticality",title:"103丨自组织临界：恰到好处的活泼",topic:"thinking-tools",tags:["思维工具","自组织临界","复杂系统"],date:"2026-07-07",excerpt:"最好的状态不是最安全的状态，而是恰好要乱还没乱的临界状态。平时允许出小事，才能尽量避免出大事。",raw:ug},{slug:"wwg-104-marginal-analysis",title:"104丨边际分析：怎样判断值不值得继续投入？",topic:"thinking-tools",tags:["思维工具","边际分析","S曲线","复杂系统"],date:"2026-07-08",excerpt:"看边际不看体量，看趋势不看绝对值。真正的解法不是拒绝大，而是在大之前开启第二曲线。",raw:cg},{slug:"wwg-105-path-creation",title:"105丨路径创造：破解路径依赖的唯一可行方法",topic:"thinking-tools",tags:["思维工具","路径创造","路径依赖","复杂系统"],date:"2026-07-09",excerpt:"公司家庭社会不是仓库，是运行中的复杂系统——新的先来，旧的才能去。不跟存量死磕，让增量长大。",raw:fg},{slug:"wwg-106-adaptive-cycle",title:"106丨适应性循环：稳定蕴藏着不稳定，败坏蕴藏着生机",topic:"thinking-tools",tags:["思维工具","适应性循环","成住坏空","复杂系统"],date:"2026-07-10",excerpt:"系统最成熟最高效最稳定的时候悄悄积累了最大的脆弱。与其追求稳定，不如追求韧性。",raw:dg},{slug:"wwg-108-zero-order-truth",title:"108丨零阶道理：大局观就是给真理分配表决权",topic:"thinking-tools",tags:["思维工具","零阶道理","大局观","高观点反思"],date:"2026-07-11",excerpt:"一个道理可以 100% 正确，却只值得 1% 的权重。先问权重再问真假。",raw:pg},{slug:"wwg-077-soft-budget-constraint",title:"077丨软预算约束：有人兜底，责任就会变形",topic:"thinking-tools",tags:["思维工具","软预算约束","制度","社会参与"],date:"2026-06-12",excerpt:"拍板花钱的人不是最后买单的人。每当有人谈大词和感情，多半是你买单。",raw:U1},{slug:"wwg-076-government-evolution",title:"076丨保护费和公共契约：政府的演化",topic:"thinking-tools",tags:["思维工具","政府","制度","社会参与"],date:"2026-06-11",excerpt:"政府起源于强盗：把保护费改造成税收，把统治者改造成代理人，把臣民改造成公民。",raw:B1},{slug:"wwg-075-externality",title:"075丨外部性：为什么自由社会也需要强制",topic:"thinking-tools",tags:["思维工具","外部性","公共品","社会参与"],date:"2026-06-10",excerpt:"共同利益不是集体行动的充分条件。小社区可以自治，但终究需要最终强制力。",raw:F1},{slug:"wwg-074-lemon-market",title:"074丨柠檬市场：不要直接扬善惩恶，要让好坏可验证",topic:"thinking-tools",tags:["思维工具","柠檬市场","程序正义","社会参与"],date:"2026-06-09",excerpt:"制度的使命不是惩罚坏人，而是留下好人。现代人不说相信我，而说这是你检查我的方法。",raw:$1},{slug:"wwg-073-incentive-compatibility",title:'073丨激励相容：好的制度不应该指望人"畏威怀德"',topic:"thinking-tools",tags:["思维工具","激励相容","制度设计","社会参与"],date:"2026-06-08",excerpt:"制度让普通人在追求自身利益时顺手完成制度想做的事。好制度不是战胜人性，而是让人性为秩序打工。",raw:M1},{slug:"wwg-071-li-ritual",title:"071丨礼：社会互动协议",topic:"thinking-tools",tags:["思维工具","礼","社会互动","社会参与"],date:"2026-06-05",excerpt:"礼是一套社会互动协议。礼不是墙，是桥上的栏杆：不确保你走通，但让你敢走。",raw:j1},{slug:"wwg-070-status",title:"070丨地位：社会参与的第一性原理",topic:"thinking-tools",tags:["思维工具","地位","声望","社会参与"],date:"2026-06-04",excerpt:"地位是他人对你的主观估值。永远不要无故做空别人的地位——这不是策略，这是慈悲。",raw:D1},{slug:"wwg-069-entrustment",title:"069丨托付：世界奖励把不确定性变成确定性的人",topic:"thinking-tools",tags:["思维工具","托付","职场","财富增值"],date:"2026-06-03",excerpt:"公司用高薪购买可托付性。要拿高薪，你输出的不是时间、体力或技能，而是秩序。",raw:L1},{slug:"wwg-068-platform",title:"068丨平台：现代世界最厉害的商业模式",topic:"thinking-tools",tags:["思维工具","平台","网络效应","财富增值"],date:"2026-06-02",excerpt:"平台把市场本身变成了自己的商品。算法不是自然规律，而是人写出来的制度。",raw:z1},{slug:"wwg-067-jevons-paradox",title:"067丨杰文斯悖论：AI 会增加人的工作岗位",topic:"thinking-tools",tags:["思维工具","杰文斯悖论","AI","财富增值"],date:"2026-06-01",excerpt:"效率不是刹车而是油门。AI 干掉的是任务而不是岗位。当任务被自动化，责任就会被人格化。",raw:R1},{slug:"wwg-065-baumol-cost-disease",title:"065丨鲍莫尔成本病：物便宜则人贵",topic:"thinking-tools",tags:["思维工具","鲍莫尔成本病","服务业","财富增值"],date:"2026-05-29",excerpt:"任何富裕社会都必然物越来越便宜、人越来越贵。现代化把稀缺从物转移到了人。",raw:N1},{slug:"wwg-064-wardley-map",title:"064丨沃德利地图：独一无二的自己做，能外包的尽量外包",topic:"thinking-tools",tags:["思维工具","沃德利地图","战略","财富增值"],date:"2026-05-28",excerpt:"今天的神通是明天的工具。很多自研不是为了赢，而是为了缓解焦虑。",raw:_1},{slug:"wwg-063-effectuation",title:"063丨效果推理：不知道该干什么的时候该干什么",topic:"thinking-tools",tags:["思维工具","效果推理","创业","财富增值"],date:"2026-05-27",excerpt:"不说相信自己而说盘点自己；不说梦想要大而说损失要小；不说坚持到底而说先做一小步。",raw:T1},{slug:"wwg-062-opportunity-window",title:"062丨机会窗口：是盲目跟风，还是顺应大势？",topic:"thinking-tools",tags:["思维工具","机会窗口","趋势","财富增值"],date:"2026-05-26",excerpt:"入场的机会窗口从主导类别出现时打开、到主导设计出现时关闭。本质是需求、叙事和供给的互动。",raw:E1},{slug:"wwg-061-leverage",title:"061丨商业杠杆：把一个创造卖一百万次",topic:"thinking-tools",tags:["思维工具","商业杠杆","财富增值"],date:"2026-05-25",excerpt:"做一次收一次叫劳动，做一次收很多次才叫杠杆。你买任何商品买的是虚拟成分。",raw:O1},{slug:"wwg-059-alpha",title:"059丨阿尔法：优势战略意识",topic:"thinking-tools",tags:["思维工具","阿尔法","战略","财富增值"],date:"2026-05-22",excerpt:"β 只能让你存活，α 才能积累经济租。我们想要的 α 是更早站在尚未被充分定价的真相上。",raw:C1},{slug:"wwg-058-economic-rent",title:"058丨经济租：赚钱的秘密",topic:"thinking-tools",tags:["思维工具","经济租","护城河","财富增值"],date:"2026-05-21",excerpt:"收益=创造的价值×捕获系数。卡位的人往往比干活的人赚钱多。",raw:P1},{slug:"wwg-057-hugging-bridging",title:"057丨拥抱和桥接：知识迁移，学以致用",topic:"thinking-tools",tags:["思维工具","知识迁移","学习教育"],date:"2026-05-20",excerpt:"掌握的标志是迁移：换个情境还能认出那个结构吗？拥抱让知识落地，桥接让知识出圈。",raw:S1},{slug:"wwg-056-autonomy-support",title:"056丨自主支持：「献祭式养育」终结者",topic:"thinking-tools",tags:["思维工具","养育","自主支持","学习教育"],date:"2026-05-19",excerpt:"孩子不是你的作品。最好的管教不是让孩子听话，而是让孩子同意。",raw:I1},{slug:"wwg-055-schooling-functions",title:"055丨人力资本、信号筛选和社交资本：学校教育到底是干啥的？",topic:"thinking-tools",tags:["思维工具","教育","信号筛选","学习教育"],date:"2026-05-18",excerpt:"小学拼人力资本、高中拼信号筛选、大学拼社交资本——到什么场域干什么事。",raw:A1},{slug:"wwg-053-desirable-difficulties",title:"053丨可取（以及不可取）的困难：把身心调到最适合学习的状态",topic:"thinking-tools",tags:["思维工具","学习状态","睡眠","学习教育"],date:"2026-05-15",excerpt:"学习需要可取的困难，但不是吃苦。恐惧制造服从，而不是制造理解。",raw:x1},{slug:"wwg-052-tacit-knowledge",title:"052丨默会知识：（但愿）AI 永远都不可能替代的技能",topic:"thinking-tools",tags:["思维工具","默会知识","AI","学习教育"],date:"2026-05-14",excerpt:"我们能知道的比我们能说出来的多。如果前公司把你写成了 skill.md，你可以说：你们蒸馏的是我的糟粕。",raw:k1},{slug:"wwg-051-research-synthesis",title:"051丨综合调研：在没有教科书的地方挖掘真知",topic:"thinking-tools",tags:["思维工具","综合调研","学习教育"],date:"2026-05-13",excerpt:"初级调研读懂对象，中级调研读懂争论，高级调研读出新问题。写作即思考。",raw:w1},{slug:"wwg-050-representation-schema-model",title:"050丨表征、图式、心智模型和解释框架：学习学的是什么",topic:"thinking-tools",tags:["思维工具","心智模型","学习","学习教育"],date:"2026-05-12",excerpt:'学习的本质不是记忆而是压缩。问的不是"讲了什么"，而是"你能从这里拿走什么结构"。',raw:y1},{slug:"wwg-049-deliberate-practice",title:"049丨刻意练习：天赋的作用究竟是什么？",topic:"thinking-tools",tags:["思维工具","刻意练习","天赋","学习教育"],date:"2026-05-11",excerpt:"练习决定你有没有在更新，天赋决定你每次更新的利率。风格是把正确练到足够稳之后，终于有资格不一样。",raw:v1},{slug:"wwg-047-icap",title:"047丨ICAP 框架：最高效的学习方法",topic:"thinking-tools",tags:["思维工具","ICAP","学习方法","学习教育"],date:"2026-05-08",excerpt:"P 是听经，A 是抄经，C 是著书，I 是论道。达到 C 才算是真正的学习。",raw:m1},{slug:"wwg-046-cognitive-load-theory",title:"046丨认知负荷理论：因为文具多，所以是差生",topic:"thinking-tools",tags:["思维工具","认知负荷","教学","学习教育"],date:"2026-05-07",excerpt:"学习失败的瓶颈是工作记忆这道窄门。有效教学不是降难度，而是排兵布阵。",raw:g1},{slug:"wwg-045-ooda",title:"045丨OODA 环：不是反应快，而是换脑快",topic:"thinking-tools",tags:["思维工具","OODA","决策判断"],date:"2026-05-06",excerpt:"观察-定向-决策-行动：谁的地图刷新率更高，谁就能在混乱里保持主动。",raw:h1},{slug:"wwg-044-superforecasting",title:"044丨超级预测：给不确定性命名，给自己打分",topic:"thinking-tools",tags:["思维工具","超级预测","决策判断"],date:"2026-05-05",excerpt:"概率化+可检验：预测不是观点的延长线，而是自我校准的工艺。",raw:p1},{slug:"wwg-043-reference-class",title:"043丨参考类：当局者迷，旁观者清，你不特殊",topic:"thinking-tools",tags:["思维工具","参考类","决策判断"],date:"2026-05-04",excerpt:'参考类预测是反自恋装置：从"我是一个故事"切换到"我是一个样本"。',raw:d1},{slug:"wwg-041-prospect-theory",title:"041丨前景理论：让人铤而走险的不是贪婪，而是不甘",topic:"thinking-tools",tags:["思维工具","前景理论","决策判断"],date:"2026-05-01",excerpt:"人是守卫参照点的动物：你的勇敢和怯懦往往不是出自品格，而是出自坐标。",raw:f1},{slug:"wwg-040-regression-to-mean",title:"040丨回归均值：不要大惊小怪，要有点定力",topic:"thinking-tools",tags:["思维工具","回归均值","决策判断"],date:"2026-04-30",excerpt:"观测结果=真实水平+随机运气。极端不是常态，有见识的人不会事事都管。",raw:c1},{slug:"wwg-039-selection-bias",title:"039丨选择偏差：就算无人说谎，你看到的也不是真实世界",topic:"thinking-tools",tags:["思维工具","选择偏差","决策判断"],date:"2026-04-29",excerpt:"你的印象不是由全体样本决定，而是由上桌样本决定。筛子会伪造规律。",raw:u1},{slug:"wwg-038-state-leverage",title:"038丨状态杠杆：你不是不努力，你是没做在点子上",topic:"thinking-tools",tags:["思维工具","状态杠杆","决策判断"],date:"2026-04-28",excerpt:"前置、顺序、约束三种杠杆：做在点子上是生利息，没做在点子上是交学费。",raw:a1},{slug:"wwg-037-option",title:"037丨期权：保留可选项的特权",topic:"thinking-tools",tags:["思维工具","期权","决策判断"],date:"2026-04-27",excerpt:"期权是被制度、资源、关系、时间窗口封装起来的可能性。双向门要快过，单向门要三思。",raw:s1},{slug:"wwg-035-antifragile",title:"035丨脆弱和反脆弱：怎样利用非对称风险",topic:"thinking-tools",tags:["思维工具","反脆弱","决策判断"],date:"2026-04-24",excerpt:"反脆弱=损失有限、收益无上限。世界上最便宜的勇敢是让别人替你破产。",raw:o1},{slug:"wwg-034-ergodicity",title:"034丨非遍历性：玩家怕方差，庄家爱方差",topic:"thinking-tools",tags:["思维工具","非遍历性","决策判断"],date:"2026-04-23",excerpt:"期望值是上帝视角的集合平均，时间平均才是凡人视角的命运。",raw:i1},{slug:"wwg-033-kelly",title:"033丨凯利公式：乘法世界里的认知变现",topic:"thinking-tools",tags:["思维工具","凯利公式","决策判断"],date:"2026-04-22",excerpt:"f=edge/odds：凯利解决的不是怎么赢，而是怎么一直赢。别清零。",raw:l1},{slug:"wwg-032-information-value",title:"032丨信息价值：怎样区分沙子和金子",topic:"thinking-tools",tags:["思维工具","信息价值","决策判断"],date:"2026-04-21",excerpt:"只有当一条信息能够改变你的实际行动时，它才有价值。",raw:r1},{slug:"wwg-031-bayesian-prior",title:"031丨贝叶斯先验：判断是主观的，但可以更科学一点",topic:"thinking-tools",tags:["思维工具","贝叶斯","决策判断"],date:"2026-04-20",excerpt:"后验=先验+证据更新。真正的贝叶斯主义者永远不会把概率设为零或一。",raw:t1},{slug:"wwg-029-model-thinking",title:"029丨颗粒度和因果中介：用模型思考",topic:"thinking-tools",tags:["思维工具","模型","因果","决策判断"],date:"2026-04-17",excerpt:"好调节器定理：你能理解到什么程度，才能控制到什么程度。别盯终点，盯中介。",raw:e1},{slug:"wwg-028-probability-distribution",title:"028丨概率分布：到底什么是决策？",topic:"thinking-tools",tags:["思维工具","概率分布","决策判断"],date:"2026-04-16",excerpt:"决策的对象不是单次结果，而是概率分布。决策的首要指望不是必胜，而是可活。",raw:n1},{slug:"wwg-027-no-free-lunch",title:"027丨无免费午餐定理：诸行无常，有偏置才有决策",topic:"thinking-tools",tags:["思维工具","无免费午餐","决策判断"],date:"2026-04-15",excerpt:"世上没有放之四海而皆准的算法。偏置是起点，偏执是枷锁。",raw:bh},{slug:"wwg-026-resonance",title:"026丨共鸣：高级生活的秘密",topic:"thinking-tools",tags:["思维工具","共鸣","使命","成长战略"],date:"2026-04-14",excerpt:"美好生活不是占有更多资源，而是建立更多共鸣。使命提供方向，共鸣提供能量。",raw:Jh},{slug:"wwg-025-explore-exploit",title:"025丨探索与利用：怎样继续做个年轻人",topic:"thinking-tools",tags:["思维工具","探索利用","成长战略"],date:"2026-04-13",excerpt:"多臂老虎机问题的人生版：先探索再利用，连胜期的秘密是两者的固定节律。年轻不是皮肤状态，是系统更新的频率。",raw:qh},{slug:"wwg-023-field",title:"023丨场域：识时务者为俊杰",topic:"thinking-tools",tags:["思维工具","场域","布迪厄","成长战略"],date:"2026-04-10",excerpt:'布迪厄场域理论：你能不能在场域被承认，不取决于你多聪明多努力，而取决于你是否符合这个场域对"好"的定义。',raw:Yh},{slug:"wwg-022-track-choice",title:"022丨赛道选择：做天兵天将，还是做孙悟空？",topic:"thinking-tools",tags:["思维工具","赛道选择","成长战略"],date:"2026-04-09",excerpt:"赛道选择选的不是岗位，而是人生叙事权：天兵天将是别人故事里的 NPC，孙悟空是自己宇宙的叙事原点。",raw:Zh},{slug:"wwg-021-security",title:"021丨安全感：人需要有所依靠",topic:"thinking-tools",tags:["思维工具","安全感","依恋","成长战略"],date:"2026-04-08",excerpt:"基地鼓励你勇敢，港湾允许你脆弱。你不是因为安全了才去保护别人，而是因为保护了别人才确认了自己的力量。",raw:Xh},{slug:"wwg-020-identity",title:"020丨身份认同：元认知黑魔法",topic:"thinking-tools",tags:["思维工具","身份认同","元认知","成长战略"],date:"2026-04-07",excerpt:'改变一个人行为的好办法是改变他对"自己是什么人"的理解。高阶玩家的身份认同像衣服，到什么场合穿什么款式。',raw:Kh},{slug:"wwg-019-cognitive-decoupling",title:"019丨认知解耦：三步调节负面情绪",topic:"thinking-tools",tags:["思维工具","情绪","认知解耦","成长战略"],date:"2026-04-06",excerpt:"认知解离、调用视角、认知重评——情绪信号应该是信息而不是命令。气不可耻，入戏才危险。",raw:Qh},{slug:"wwg-017-social-capital",title:"017丨社交资本、结构洞和搬家：容易向上流动的位置",topic:"thinking-tools",tags:["思维工具","社交资本","结构洞","成长战略"],date:"2026-04-03",excerpt:"弱者的社交是寻求庇护，强者的社交是提供接口。位置也是一种资本，坐标是命运的一部分。",raw:Hh},{slug:"wwg-016-woop",title:"016丨WOOP：从生活的默认设置中觉醒",topic:"thinking-tools",tags:["思维工具","WOOP","行动力","成长战略"],date:"2026-04-02",excerpt:"所有行动力问题都来源于精确性的不足。我想要 X，我最怕 Y，如果 Y，我就做 Z——把愿望编译成可执行代码。",raw:Gh},{slug:"wwg-015-cognitive-load",title:"015丨主动高认知负荷：注意力的 Pro 模式",topic:"thinking-tools",tags:["思维工具","注意力","认知负荷","成长战略"],date:"2026-04-01",excerpt:"专注不是姿势，是任务本来就该调用这么多资源。手动开启注意力的 Pro 模式：把世界本身变成一道难题。",raw:Wh},{slug:"wwg-014-free-energy",title:"014丨自由能原理：活着就是对齐",topic:"thinking-tools",tags:["思维工具","自由能原理","成长战略"],date:"2026-03-31",excerpt:"凡是能长期存在的系统都在最小化惊讶。活着就是让自己跟环境双向对齐：要么改变想法适应世界，要么改变世界符合想法。",raw:Vh},{slug:"wwg-013-self-determination",title:"013丨自我决定理论：一流人物不可能是痛苦的卷王",topic:"thinking-tools",tags:["思维工具","自我决定理论","动机","成长战略"],date:"2026-03-30",excerpt:"动机质量比动机强度更重要。人最强的不是自律而是自驱。自主感、胜任感、关系感是能动性的三种心理营养。",raw:Uh},{slug:"wwg-012-live-notes",title:"012丨基本世界观模块答疑直播笔记",topic:"thinking-tools",tags:["思维工具","世界观","答疑"],date:"2026-03-28",excerpt:"世界观模块六讲的集中答疑：叙事、重尾、能动、约束、不确定性与三个自我。",raw:Bh},{slug:"wwg-011-qa",title:"011丨问答：承认「原来我是错的」为什么那么难？",topic:"thinking-tools",tags:["思维工具","问答","世界观"],date:"2026-03-28",excerpt:"硬约束能否改变、如何与 GPT 聊天、怎样触碰内核自我、供给侧心态碰壁怎么办。",raw:Fh},{slug:"wwg-010-compound",title:"010丨复利：可积累的优势",topic:"thinking-tools",tags:["思维工具","复利","成长战略"],date:"2026-03-27",excerpt:"复利真正的秘密不是利率，而是长期、早开始、不离场。七种值得积累复利的资本。",raw:$h},{slug:"wwg-009-supply-side",title:"009丨供给侧心态：怎样在正和的世界合作（以及竞争）",topic:"thinking-tools",tags:["思维工具","供给侧心态","合作"],date:"2026-03-26",excerpt:"现代竞争的本质不是抢夺资源，而是抢夺合作资格。被需要，是比拥有更安全的状态。",raw:Mh},{slug:"wwg-008-power-seeking",title:"008丨能耐寻求定理：君子不器",topic:"thinking-tools",tags:["思维工具","能耐寻求","成长战略"],date:"2026-03-25",excerpt:"当奖励不可见时，最优策略是增加未来的选项。君子不器：做目标的主人，不做目标的奴隶。",raw:jh},{slug:"wwg-007-three-selves",title:"007丨内核：你的三个「自我」",topic:"thinking-tools",tags:["思维工具","世界观","自我"],date:"2026-03-24",excerpt:"进程自我、界面自我、内核自我——用 AI 神经网络类比理解「我是谁」，以及如何升级内核参数。",raw:Dh},{slug:"wwg-006-uncertainty",title:"006丨可能：不确定性是意义的燃料",topic:"thinking-tools",tags:["思维工具","世界观","不确定性"],date:"2026-03-23",excerpt:"五种无法避免的不确定性；抗拒不如接受，接受不如拥抱，拥抱不如制造。",raw:Lh},{slug:"wwg-004-constraints",title:"004丨约束：先尊重，再行动",topic:"thinking-tools",tags:["思维工具","世界观","硬约束"],date:"2026-03-20",excerpt:"破除神话思维：现实不是愿望实现机。识别能量、时间窗口、自然规律、人的能动性四大硬约束。",raw:zh},{slug:"wwg-003-agency",title:"003丨能动：稳态生存的观念陷阱",topic:"thinking-tools",tags:["思维工具","世界观","能动性"],date:"2026-03-19",excerpt:"资源匮乏、强从众、简单模型——稳态生存逻辑的三大基因，以及为什么要做个能动者。",raw:Rh},{slug:"wwg-002-heavy-tail",title:"002丨重尾：世界服从极端值",topic:"thinking-tools",tags:["思维工具","世界观","重尾分布"],date:"2026-03-18",excerpt:"世界不是平均的：极端少数占据极大份额。从加法世界跳进乘法世界的路径。",raw:Nh},{slug:"wwg-001-narrative",title:"001丨叙事：这个宇宙的第一性原理",topic:"thinking-tools",tags:["思维工具","世界观","叙事"],date:"2026-03-18",excerpt:"比物理定律更基本的是叙事：因果、想象与秩序的来源。一切叙事都是主观的。",raw:_h},{slug:"wwg-000-prologue",title:"000丨发刊词：现代精英的思维武器库",topic:"thinking-tools",tags:["思维工具","发刊词"],date:"2026-03-18",excerpt:"一套自成体系的思维武器库：目标函数、世界模型、反馈回路、预算约束。",raw:Th}];function hg(n){return $e.find(e=>e.slug===n)}function gg(){const n=$e.slice(0,6);return x.jsxs("div",{children:[x.jsxs("section",{className:"hero",children:[x.jsx("h1",{children:"古旧新风"}),x.jsx("p",{children:"把古旧的问题，交给新鲜的思维工具。按专题组织，首辑：万维钢《现代思维工具课》。"})]}),x.jsxs("section",{children:[x.jsx("h2",{className:"section-title",children:"专题"}),x.jsx("div",{className:"topic-cards",children:Object.entries(_0).map(([e,t])=>{const r=$e.filter(l=>l.topic===e).length;return x.jsxs(bn,{to:"/topics",className:"topic-card",children:[x.jsx("h3",{children:t.name}),x.jsx("p",{children:t.desc}),x.jsxs("span",{className:"topic-count",children:[r," 篇"]})]},e)})})]}),x.jsxs("section",{children:[x.jsx("h2",{className:"section-title",children:"最新文章"}),x.jsx("ul",{className:"post-list",children:n.map(e=>x.jsx("li",{children:x.jsxs(bn,{to:`/article/${e.slug}`,children:[x.jsx("span",{className:"post-title",children:e.title}),x.jsx("span",{className:"post-excerpt",children:e.excerpt}),x.jsxs("span",{className:"post-meta",children:[e.date," · ",e.tags.join(" / ")]})]})},e.slug))})]})]})}function mg(){const[n,e]=Oh(),t=n.get("tag"),r=t?$e.filter(i=>i.tags.includes(t)):$e,l=[...new Set($e.flatMap(i=>i.tags))];return x.jsxs("div",{children:[x.jsx("h1",{className:"page-title",children:"全部文章"}),x.jsxs("div",{className:"tag-bar",children:[x.jsx("button",{className:t?"tag":"tag active",onClick:()=>e({}),children:"全部"}),l.map(i=>x.jsx("button",{className:t===i?"tag active":"tag",onClick:()=>e({tag:i}),children:i},i))]}),x.jsx("ul",{className:"post-list",children:r.map(i=>x.jsx("li",{children:x.jsxs(bn,{to:`/article/${i.slug}`,children:[x.jsx("span",{className:"post-title",children:i.title}),x.jsx("span",{className:"post-excerpt",children:i.excerpt}),x.jsxs("span",{className:"post-meta",children:[i.date," · ",i.tags.join(" / ")]})]})},i.slug))})]})}function Ps(){return{async:!1,breaks:!1,extensions:null,gfm:!0,hooks:null,pedantic:!1,renderer:null,silent:!1,tokenizer:null,walkTokens:null}}let Ye=Ps();function N0(n){Ye=n}const R0=/[&<>"']/,vg=new RegExp(R0.source,"g"),z0=/[<>"']|&(?!(#\d{1,7}|#[Xx][a-fA-F0-9]{1,6}|\w+);)/,yg=new RegExp(z0.source,"g"),wg={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"},ba=n=>wg[n];function xn(n,e){if(e){if(R0.test(n))return n.replace(vg,ba)}else if(z0.test(n))return n.replace(yg,ba);return n}const kg=/&(#(?:\d+)|(?:#x[0-9A-Fa-f]+)|(?:\w+));?/ig;function xg(n){return n.replace(kg,(e,t)=>(t=t.toLowerCase(),t==="colon"?":":t.charAt(0)==="#"?t.charAt(1)==="x"?String.fromCharCode(parseInt(t.substring(2),16)):String.fromCharCode(+t.substring(1)):""))}const Ag=/(^|[^\[])\^/g;function M(n,e){let t=typeof n=="string"?n:n.source;e=e||"";const r={replace:(l,i)=>{let o=typeof i=="string"?i:i.source;return o=o.replace(Ag,"$1"),t=t.replace(l,o),r},getRegex:()=>new RegExp(t,e)};return r}function nu(n){try{n=encodeURI(n).replace(/%25/g,"%")}catch{return null}return n}const qt={exec:()=>null};function eu(n,e){const t=n.replace(/\|/g,(i,o,s)=>{let a=!1,u=o;for(;--u>=0&&s[u]==="\\";)a=!a;return a?"|":" |"}),r=t.split(/ \|/);let l=0;if(r[0].trim()||r.shift(),r.length>0&&!r[r.length-1].trim()&&r.pop(),e)if(r.length>e)r.splice(e);else for(;r.length<e;)r.push("");for(;l<r.length;l++)r[l]=r[l].trim().replace(/\\\|/g,"|");return r}function Qr(n,e,t){const r=n.length;if(r===0)return"";let l=0;for(;l<r&&n.charAt(r-l-1)===e;)l++;return n.slice(0,r-l)}function Ig(n,e){if(n.indexOf(e[1])===-1)return-1;let t=0;for(let r=0;r<n.length;r++)if(n[r]==="\\")r++;else if(n[r]===e[0])t++;else if(n[r]===e[1]&&(t--,t<0))return r;return-1}function tu(n,e,t,r){const l=e.href,i=e.title?xn(e.title):null,o=n[1].replace(/\\([\[\]])/g,"$1");if(n[0].charAt(0)!=="!"){r.state.inLink=!0;const s={type:"link",raw:t,href:l,title:i,text:o,tokens:r.inlineTokens(o)};return r.state.inLink=!1,s}return{type:"image",raw:t,href:l,title:i,text:xn(o)}}function Sg(n,e){const t=n.match(/^(\s+)(?:```)/);if(t===null)return e;const r=t[1];return e.split(`
`).map(l=>{const i=l.match(/^\s+/);if(i===null)return l;const[o]=i;return o.length>=r.length?l.slice(r.length):l}).join(`
`)}class Nl{constructor(e){F(this,"options");F(this,"rules");F(this,"lexer");this.options=e||Ye}space(e){const t=this.rules.block.newline.exec(e);if(t&&t[0].length>0)return{type:"space",raw:t[0]}}code(e){const t=this.rules.block.code.exec(e);if(t){const r=t[0].replace(/^ {1,4}/gm,"");return{type:"code",raw:t[0],codeBlockStyle:"indented",text:this.options.pedantic?r:Qr(r,`
`)}}}fences(e){const t=this.rules.block.fences.exec(e);if(t){const r=t[0],l=Sg(r,t[3]||"");return{type:"code",raw:r,lang:t[2]?t[2].trim().replace(this.rules.inline.anyPunctuation,"$1"):t[2],text:l}}}heading(e){const t=this.rules.block.heading.exec(e);if(t){let r=t[2].trim();if(/#$/.test(r)){const l=Qr(r,"#");(this.options.pedantic||!l||/ $/.test(l))&&(r=l.trim())}return{type:"heading",raw:t[0],depth:t[1].length,text:r,tokens:this.lexer.inline(r)}}}hr(e){const t=this.rules.block.hr.exec(e);if(t)return{type:"hr",raw:t[0]}}blockquote(e){const t=this.rules.block.blockquote.exec(e);if(t){let r=t[0].replace(/\n {0,3}((?:=+|-+) *)(?=\n|$)/g,`
    $1`);r=Qr(r.replace(/^ *>[ \t]?/gm,""),`
`);const l=this.lexer.state.top;this.lexer.state.top=!0;const i=this.lexer.blockTokens(r);return this.lexer.state.top=l,{type:"blockquote",raw:t[0],tokens:i,text:r}}}list(e){let t=this.rules.block.list.exec(e);if(t){let r=t[1].trim();const l=r.length>1,i={type:"list",raw:"",ordered:l,start:l?+r.slice(0,-1):"",loose:!1,items:[]};r=l?`\\d{1,9}\\${r.slice(-1)}`:`\\${r}`,this.options.pedantic&&(r=l?r:"[*+-]");const o=new RegExp(`^( {0,3}${r})((?:[	 ][^\\n]*)?(?:\\n|$))`);let s="",a="",u=!1;for(;e;){let f=!1;if(!(t=o.exec(e))||this.rules.block.hr.test(e))break;s=t[0],e=e.substring(s.length);let d=t[2].split(`
`,1)[0].replace(/^\t+/,h=>" ".repeat(3*h.length)),p=e.split(`
`,1)[0],m=0;this.options.pedantic?(m=2,a=d.trimStart()):(m=t[2].search(/[^ ]/),m=m>4?1:m,a=d.slice(m),m+=t[1].length);let w=!1;if(!d&&/^ *$/.test(p)&&(s+=p+`
`,e=e.substring(p.length+1),f=!0),!f){const h=new RegExp(`^ {0,${Math.min(3,m-1)}}(?:[*+-]|\\d{1,9}[.)])((?:[ 	][^\\n]*)?(?:\\n|$))`),c=new RegExp(`^ {0,${Math.min(3,m-1)}}((?:- *){3,}|(?:_ *){3,}|(?:\\* *){3,})(?:\\n+|$)`),g=new RegExp(`^ {0,${Math.min(3,m-1)}}(?:\`\`\`|~~~)`),v=new RegExp(`^ {0,${Math.min(3,m-1)}}#`);for(;e;){const I=e.split(`
`,1)[0];if(p=I,this.options.pedantic&&(p=p.replace(/^ {1,4}(?=( {4})*[^ ])/g,"  ")),g.test(p)||v.test(p)||h.test(p)||c.test(e))break;if(p.search(/[^ ]/)>=m||!p.trim())a+=`
`+p.slice(m);else{if(w||d.search(/[^ ]/)>=4||g.test(d)||v.test(d)||c.test(d))break;a+=`
`+p}!w&&!p.trim()&&(w=!0),s+=I+`
`,e=e.substring(I.length+1),d=p.slice(m)}}i.loose||(u?i.loose=!0:/\n *\n *$/.test(s)&&(u=!0));let y=null,A;this.options.gfm&&(y=/^\[[ xX]\] /.exec(a),y&&(A=y[0]!=="[ ] ",a=a.replace(/^\[[ xX]\] +/,""))),i.items.push({type:"list_item",raw:s,task:!!y,checked:A,loose:!1,text:a,tokens:[]}),i.raw+=s}i.items[i.items.length-1].raw=s.trimEnd(),i.items[i.items.length-1].text=a.trimEnd(),i.raw=i.raw.trimEnd();for(let f=0;f<i.items.length;f++)if(this.lexer.state.top=!1,i.items[f].tokens=this.lexer.blockTokens(i.items[f].text,[]),!i.loose){const d=i.items[f].tokens.filter(m=>m.type==="space"),p=d.length>0&&d.some(m=>/\n.*\n/.test(m.raw));i.loose=p}if(i.loose)for(let f=0;f<i.items.length;f++)i.items[f].loose=!0;return i}}html(e){const t=this.rules.block.html.exec(e);if(t)return{type:"html",block:!0,raw:t[0],pre:t[1]==="pre"||t[1]==="script"||t[1]==="style",text:t[0]}}def(e){const t=this.rules.block.def.exec(e);if(t){const r=t[1].toLowerCase().replace(/\s+/g," "),l=t[2]?t[2].replace(/^<(.*)>$/,"$1").replace(this.rules.inline.anyPunctuation,"$1"):"",i=t[3]?t[3].substring(1,t[3].length-1).replace(this.rules.inline.anyPunctuation,"$1"):t[3];return{type:"def",tag:r,raw:t[0],href:l,title:i}}}table(e){const t=this.rules.block.table.exec(e);if(!t||!/[:|]/.test(t[2]))return;const r=eu(t[1]),l=t[2].replace(/^\||\| *$/g,"").split("|"),i=t[3]&&t[3].trim()?t[3].replace(/\n[ \t]*$/,"").split(`
`):[],o={type:"table",raw:t[0],header:[],align:[],rows:[]};if(r.length===l.length){for(const s of l)/^ *-+: *$/.test(s)?o.align.push("right"):/^ *:-+: *$/.test(s)?o.align.push("center"):/^ *:-+ *$/.test(s)?o.align.push("left"):o.align.push(null);for(const s of r)o.header.push({text:s,tokens:this.lexer.inline(s)});for(const s of i)o.rows.push(eu(s,o.header.length).map(a=>({text:a,tokens:this.lexer.inline(a)})));return o}}lheading(e){const t=this.rules.block.lheading.exec(e);if(t)return{type:"heading",raw:t[0],depth:t[2].charAt(0)==="="?1:2,text:t[1],tokens:this.lexer.inline(t[1])}}paragraph(e){const t=this.rules.block.paragraph.exec(e);if(t){const r=t[1].charAt(t[1].length-1)===`
`?t[1].slice(0,-1):t[1];return{type:"paragraph",raw:t[0],text:r,tokens:this.lexer.inline(r)}}}text(e){const t=this.rules.block.text.exec(e);if(t)return{type:"text",raw:t[0],text:t[0],tokens:this.lexer.inline(t[0])}}escape(e){const t=this.rules.inline.escape.exec(e);if(t)return{type:"escape",raw:t[0],text:xn(t[1])}}tag(e){const t=this.rules.inline.tag.exec(e);if(t)return!this.lexer.state.inLink&&/^<a /i.test(t[0])?this.lexer.state.inLink=!0:this.lexer.state.inLink&&/^<\/a>/i.test(t[0])&&(this.lexer.state.inLink=!1),!this.lexer.state.inRawBlock&&/^<(pre|code|kbd|script)(\s|>)/i.test(t[0])?this.lexer.state.inRawBlock=!0:this.lexer.state.inRawBlock&&/^<\/(pre|code|kbd|script)(\s|>)/i.test(t[0])&&(this.lexer.state.inRawBlock=!1),{type:"html",raw:t[0],inLink:this.lexer.state.inLink,inRawBlock:this.lexer.state.inRawBlock,block:!1,text:t[0]}}link(e){const t=this.rules.inline.link.exec(e);if(t){const r=t[2].trim();if(!this.options.pedantic&&/^</.test(r)){if(!/>$/.test(r))return;const o=Qr(r.slice(0,-1),"\\");if((r.length-o.length)%2===0)return}else{const o=Ig(t[2],"()");if(o>-1){const a=(t[0].indexOf("!")===0?5:4)+t[1].length+o;t[2]=t[2].substring(0,o),t[0]=t[0].substring(0,a).trim(),t[3]=""}}let l=t[2],i="";if(this.options.pedantic){const o=/^([^'"]*[^\s])\s+(['"])(.*)\2/.exec(l);o&&(l=o[1],i=o[3])}else i=t[3]?t[3].slice(1,-1):"";return l=l.trim(),/^</.test(l)&&(this.options.pedantic&&!/>$/.test(r)?l=l.slice(1):l=l.slice(1,-1)),tu(t,{href:l&&l.replace(this.rules.inline.anyPunctuation,"$1"),title:i&&i.replace(this.rules.inline.anyPunctuation,"$1")},t[0],this.lexer)}}reflink(e,t){let r;if((r=this.rules.inline.reflink.exec(e))||(r=this.rules.inline.nolink.exec(e))){const l=(r[2]||r[1]).replace(/\s+/g," "),i=t[l.toLowerCase()];if(!i){const o=r[0].charAt(0);return{type:"text",raw:o,text:o}}return tu(r,i,r[0],this.lexer)}}emStrong(e,t,r=""){let l=this.rules.inline.emStrongLDelim.exec(e);if(!l||l[3]&&r.match(/[\p{L}\p{N}]/u))return;if(!(l[1]||l[2]||"")||!r||this.rules.inline.punctuation.exec(r)){const o=[...l[0]].length-1;let s,a,u=o,f=0;const d=l[0][0]==="*"?this.rules.inline.emStrongRDelimAst:this.rules.inline.emStrongRDelimUnd;for(d.lastIndex=0,t=t.slice(-1*e.length+o);(l=d.exec(t))!=null;){if(s=l[1]||l[2]||l[3]||l[4]||l[5]||l[6],!s)continue;if(a=[...s].length,l[3]||l[4]){u+=a;continue}else if((l[5]||l[6])&&o%3&&!((o+a)%3)){f+=a;continue}if(u-=a,u>0)continue;a=Math.min(a,a+u+f);const p=[...l[0]][0].length,m=e.slice(0,o+l.index+p+a);if(Math.min(o,a)%2){const y=m.slice(1,-1);return{type:"em",raw:m,text:y,tokens:this.lexer.inlineTokens(y)}}const w=m.slice(2,-2);return{type:"strong",raw:m,text:w,tokens:this.lexer.inlineTokens(w)}}}}codespan(e){const t=this.rules.inline.code.exec(e);if(t){let r=t[2].replace(/\n/g," ");const l=/[^ ]/.test(r),i=/^ /.test(r)&&/ $/.test(r);return l&&i&&(r=r.substring(1,r.length-1)),r=xn(r,!0),{type:"codespan",raw:t[0],text:r}}}br(e){const t=this.rules.inline.br.exec(e);if(t)return{type:"br",raw:t[0]}}del(e){const t=this.rules.inline.del.exec(e);if(t)return{type:"del",raw:t[0],text:t[2],tokens:this.lexer.inlineTokens(t[2])}}autolink(e){const t=this.rules.inline.autolink.exec(e);if(t){let r,l;return t[2]==="@"?(r=xn(t[1]),l="mailto:"+r):(r=xn(t[1]),l=r),{type:"link",raw:t[0],text:r,href:l,tokens:[{type:"text",raw:r,text:r}]}}}url(e){var r;let t;if(t=this.rules.inline.url.exec(e)){let l,i;if(t[2]==="@")l=xn(t[0]),i="mailto:"+l;else{let o;do o=t[0],t[0]=((r=this.rules.inline._backpedal.exec(t[0]))==null?void 0:r[0])??"";while(o!==t[0]);l=xn(t[0]),t[1]==="www."?i="http://"+t[0]:i=t[0]}return{type:"link",raw:t[0],text:l,href:i,tokens:[{type:"text",raw:l,text:l}]}}}inlineText(e){const t=this.rules.inline.text.exec(e);if(t){let r;return this.lexer.state.inRawBlock?r=t[0]:r=xn(t[0]),{type:"text",raw:t[0],text:r}}}}const Pg=/^(?: *(?:\n|$))+/,Cg=/^( {4}[^\n]+(?:\n(?: *(?:\n|$))*)?)+/,Og=/^ {0,3}(`{3,}(?=[^`\n]*(?:\n|$))|~{3,})([^\n]*)(?:\n|$)(?:|([\s\S]*?)(?:\n|$))(?: {0,3}\1[~`]* *(?=\n|$)|$)/,Sr=/^ {0,3}((?:-[\t ]*){3,}|(?:_[ \t]*){3,}|(?:\*[ \t]*){3,})(?:\n+|$)/,Eg=/^ {0,3}(#{1,6})(?=\s|$)(.*)(?:\n+|$)/,L0=/(?:[*+-]|\d{1,9}[.)])/,D0=M(/^(?!bull |blockCode|fences|blockquote|heading|html)((?:.|\n(?!\s*?\n|bull |blockCode|fences|blockquote|heading|html))+?)\n {0,3}(=+|-+) *(?:\n+|$)/).replace(/bull/g,L0).replace(/blockCode/g,/ {4}/).replace(/fences/g,/ {0,3}(?:`{3,}|~{3,})/).replace(/blockquote/g,/ {0,3}>/).replace(/heading/g,/ {0,3}#{1,6}/).replace(/html/g,/ {0,3}<[^\n>]+>\n/).getRegex(),Cs=/^([^\n]+(?:\n(?!hr|heading|lheading|blockquote|fences|list|html|table| +\n)[^\n]+)*)/,Tg=/^[^\n]+/,Os=/(?!\s*\])(?:\\.|[^\[\]\\])+/,_g=M(/^ {0,3}\[(label)\]: *(?:\n *)?([^<\s][^\s]*|<.*?>)(?:(?: +(?:\n *)?| *\n *)(title))? *(?:\n+|$)/).replace("label",Os).replace("title",/(?:"(?:\\"?|[^"\\])*"|'[^'\n]*(?:\n[^'\n]+)*\n?'|\([^()]*\))/).getRegex(),Ng=M(/^( {0,3}bull)([ \t][^\n]+?)?(?:\n|$)/).replace(/bull/g,L0).getRegex(),ql="address|article|aside|base|basefont|blockquote|body|caption|center|col|colgroup|dd|details|dialog|dir|div|dl|dt|fieldset|figcaption|figure|footer|form|frame|frameset|h[1-6]|head|header|hr|html|iframe|legend|li|link|main|menu|menuitem|meta|nav|noframes|ol|optgroup|option|p|param|search|section|summary|table|tbody|td|tfoot|th|thead|title|tr|track|ul",Es=/<!--(?:-?>|[\s\S]*?(?:-->|$))/,Rg=M("^ {0,3}(?:<(script|pre|style|textarea)[\\s>][\\s\\S]*?(?:</\\1>[^\\n]*\\n+|$)|comment[^\\n]*(\\n+|$)|<\\?[\\s\\S]*?(?:\\?>\\n*|$)|<![A-Z][\\s\\S]*?(?:>\\n*|$)|<!\\[CDATA\\[[\\s\\S]*?(?:\\]\\]>\\n*|$)|</?(tag)(?: +|\\n|/?>)[\\s\\S]*?(?:(?:\\n *)+\\n|$)|<(?!script|pre|style|textarea)([a-z][\\w-]*)(?:attribute)*? */?>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n *)+\\n|$)|</(?!script|pre|style|textarea)[a-z][\\w-]*\\s*>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n *)+\\n|$))","i").replace("comment",Es).replace("tag",ql).replace("attribute",/ +[a-zA-Z:_][\w.:-]*(?: *= *"[^"\n]*"| *= *'[^'\n]*'| *= *[^\s"'=<>`]+)?/).getRegex(),j0=M(Cs).replace("hr",Sr).replace("heading"," {0,3}#{1,6}(?:\\s|$)").replace("|lheading","").replace("|table","").replace("blockquote"," {0,3}>").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)]) ").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",ql).getRegex(),zg=M(/^( {0,3}> ?(paragraph|[^\n]*)(?:\n|$))+/).replace("paragraph",j0).getRegex(),Ts={blockquote:zg,code:Cg,def:_g,fences:Og,heading:Eg,hr:Sr,html:Rg,lheading:D0,list:Ng,newline:Pg,paragraph:j0,table:qt,text:Tg},ru=M("^ *([^\\n ].*)\\n {0,3}((?:\\| *)?:?-+:? *(?:\\| *:?-+:? *)*(?:\\| *)?)(?:\\n((?:(?! *\\n|hr|heading|blockquote|code|fences|list|html).*(?:\\n|$))*)\\n*|$)").replace("hr",Sr).replace("heading"," {0,3}#{1,6}(?:\\s|$)").replace("blockquote"," {0,3}>").replace("code"," {4}[^\\n]").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)]) ").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",ql).getRegex(),Lg={...Ts,table:ru,paragraph:M(Cs).replace("hr",Sr).replace("heading"," {0,3}#{1,6}(?:\\s|$)").replace("|lheading","").replace("table",ru).replace("blockquote"," {0,3}>").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)]) ").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",ql).getRegex()},Dg={...Ts,html:M(`^ *(?:comment *(?:\\n|\\s*$)|<(tag)[\\s\\S]+?</\\1> *(?:\\n{2,}|\\s*$)|<tag(?:"[^"]*"|'[^']*'|\\s[^'"/>\\s]*)*?/?> *(?:\\n{2,}|\\s*$))`).replace("comment",Es).replace(/tag/g,"(?!(?:a|em|strong|small|s|cite|q|dfn|abbr|data|time|code|var|samp|kbd|sub|sup|i|b|u|mark|ruby|rt|rp|bdi|bdo|span|br|wbr|ins|del|img)\\b)\\w+(?!:|[^\\w\\s@]*@)\\b").getRegex(),def:/^ *\[([^\]]+)\]: *<?([^\s>]+)>?(?: +(["(][^\n]+[")]))? *(?:\n+|$)/,heading:/^(#{1,6})(.*)(?:\n+|$)/,fences:qt,lheading:/^(.+?)\n {0,3}(=+|-+) *(?:\n+|$)/,paragraph:M(Cs).replace("hr",Sr).replace("heading",` *#{1,6} *[^
]`).replace("lheading",D0).replace("|table","").replace("blockquote"," {0,3}>").replace("|fences","").replace("|list","").replace("|html","").replace("|tag","").getRegex()},M0=/^\\([!"#$%&'()*+,\-./:;<=>?@\[\]\\^_`{|}~])/,jg=/^(`+)([^`]|[^`][\s\S]*?[^`])\1(?!`)/,$0=/^( {2,}|\\)\n(?!\s*$)/,Mg=/^(`+|[^`])(?:(?= {2,}\n)|[\s\S]*?(?:(?=[\\<!\[`*_]|\b_|$)|[^ ](?= {2,}\n)))/,Pr="\\p{P}\\p{S}",$g=M(/^((?![*_])[\spunctuation])/,"u").replace(/punctuation/g,Pr).getRegex(),Fg=/\[[^[\]]*?\]\([^\(\)]*?\)|`[^`]*?`|<[^<>]*?>/g,Bg=M(/^(?:\*+(?:((?!\*)[punct])|[^\s*]))|^_+(?:((?!_)[punct])|([^\s_]))/,"u").replace(/punct/g,Pr).getRegex(),Ug=M("^[^_*]*?__[^_*]*?\\*[^_*]*?(?=__)|[^*]+(?=[^*])|(?!\\*)[punct](\\*+)(?=[\\s]|$)|[^punct\\s](\\*+)(?!\\*)(?=[punct\\s]|$)|(?!\\*)[punct\\s](\\*+)(?=[^punct\\s])|[\\s](\\*+)(?!\\*)(?=[punct])|(?!\\*)[punct](\\*+)(?!\\*)(?=[punct])|[^punct\\s](\\*+)(?=[^punct\\s])","gu").replace(/punct/g,Pr).getRegex(),Vg=M("^[^_*]*?\\*\\*[^_*]*?_[^_*]*?(?=\\*\\*)|[^_]+(?=[^_])|(?!_)[punct](_+)(?=[\\s]|$)|[^punct\\s](_+)(?!_)(?=[punct\\s]|$)|(?!_)[punct\\s](_+)(?=[^punct\\s])|[\\s](_+)(?!_)(?=[punct])|(?!_)[punct](_+)(?!_)(?=[punct])","gu").replace(/punct/g,Pr).getRegex(),Wg=M(/\\([punct])/,"gu").replace(/punct/g,Pr).getRegex(),Gg=M(/^<(scheme:[^\s\x00-\x1f<>]*|email)>/).replace("scheme",/[a-zA-Z][a-zA-Z0-9+.-]{1,31}/).replace("email",/[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+(@)[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+(?![-_])/).getRegex(),Hg=M(Es).replace("(?:-->|$)","-->").getRegex(),Qg=M("^comment|^</[a-zA-Z][\\w:-]*\\s*>|^<[a-zA-Z][\\w-]*(?:attribute)*?\\s*/?>|^<\\?[\\s\\S]*?\\?>|^<![a-zA-Z]+\\s[\\s\\S]*?>|^<!\\[CDATA\\[[\\s\\S]*?\\]\\]>").replace("comment",Hg).replace("attribute",/\s+[a-zA-Z:_][\w.:-]*(?:\s*=\s*"[^"]*"|\s*=\s*'[^']*'|\s*=\s*[^\s"'=<>`]+)?/).getRegex(),Rl=/(?:\[(?:\\.|[^\[\]\\])*\]|\\.|`[^`]*`|[^\[\]\\`])*?/,Kg=M(/^!?\[(label)\]\(\s*(href)(?:\s+(title))?\s*\)/).replace("label",Rl).replace("href",/<(?:\\.|[^\n<>\\])+>|[^\s\x00-\x1f]*/).replace("title",/"(?:\\"?|[^"\\])*"|'(?:\\'?|[^'\\])*'|\((?:\\\)?|[^)\\])*\)/).getRegex(),F0=M(/^!?\[(label)\]\[(ref)\]/).replace("label",Rl).replace("ref",Os).getRegex(),B0=M(/^!?\[(ref)\](?:\[\])?/).replace("ref",Os).getRegex(),Xg=M("reflink|nolink(?!\\()","g").replace("reflink",F0).replace("nolink",B0).getRegex(),_s={_backpedal:qt,anyPunctuation:Wg,autolink:Gg,blockSkip:Fg,br:$0,code:jg,del:qt,emStrongLDelim:Bg,emStrongRDelimAst:Ug,emStrongRDelimUnd:Vg,escape:M0,link:Kg,nolink:B0,punctuation:$g,reflink:F0,reflinkSearch:Xg,tag:Qg,text:Mg,url:qt},Zg={..._s,link:M(/^!?\[(label)\]\((.*?)\)/).replace("label",Rl).getRegex(),reflink:M(/^!?\[(label)\]\s*\[([^\]]*)\]/).replace("label",Rl).getRegex()},Co={..._s,escape:M(M0).replace("])","~|])").getRegex(),url:M(/^((?:ftp|https?):\/\/|www\.)(?:[a-zA-Z0-9\-]+\.?)+[^\s<]*|^email/,"i").replace("email",/[A-Za-z0-9._+-]+(@)[a-zA-Z0-9-_]+(?:\.[a-zA-Z0-9-_]*[a-zA-Z0-9])+(?![-_])/).getRegex(),_backpedal:/(?:[^?!.,:;*_'"~()&]+|\([^)]*\)|&(?![a-zA-Z0-9]+;$)|[?!.,:;*_'"~)]+(?!$))+/,del:/^(~~?)(?=[^\s~])([\s\S]*?[^\s~])\1(?=[^~]|$)/,text:/^([`~]+|[^`~])(?:(?= {2,}\n)|(?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)|[\s\S]*?(?:(?=[\\<!\[`*~_]|\b_|https?:\/\/|ftp:\/\/|www\.|$)|[^ ](?= {2,}\n)|[^a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-](?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)))/},Yg={...Co,br:M($0).replace("{2,}","*").getRegex(),text:M(Co.text).replace("\\b_","\\b_| {2,}\\n").replace(/\{2,\}/g,"*").getRegex()},Kr={normal:Ts,gfm:Lg,pedantic:Dg},Mt={normal:_s,gfm:Co,breaks:Yg,pedantic:Zg};class Gn{constructor(e){F(this,"tokens");F(this,"options");F(this,"state");F(this,"tokenizer");F(this,"inlineQueue");this.tokens=[],this.tokens.links=Object.create(null),this.options=e||Ye,this.options.tokenizer=this.options.tokenizer||new Nl,this.tokenizer=this.options.tokenizer,this.tokenizer.options=this.options,this.tokenizer.lexer=this,this.inlineQueue=[],this.state={inLink:!1,inRawBlock:!1,top:!0};const t={block:Kr.normal,inline:Mt.normal};this.options.pedantic?(t.block=Kr.pedantic,t.inline=Mt.pedantic):this.options.gfm&&(t.block=Kr.gfm,this.options.breaks?t.inline=Mt.breaks:t.inline=Mt.gfm),this.tokenizer.rules=t}static get rules(){return{block:Kr,inline:Mt}}static lex(e,t){return new Gn(t).lex(e)}static lexInline(e,t){return new Gn(t).inlineTokens(e)}lex(e){e=e.replace(/\r\n|\r/g,`
`),this.blockTokens(e,this.tokens);for(let t=0;t<this.inlineQueue.length;t++){const r=this.inlineQueue[t];this.inlineTokens(r.src,r.tokens)}return this.inlineQueue=[],this.tokens}blockTokens(e,t=[]){this.options.pedantic?e=e.replace(/\t/g,"    ").replace(/^ +$/gm,""):e=e.replace(/^( *)(\t+)/gm,(s,a,u)=>a+"    ".repeat(u.length));let r,l,i,o;for(;e;)if(!(this.options.extensions&&this.options.extensions.block&&this.options.extensions.block.some(s=>(r=s.call({lexer:this},e,t))?(e=e.substring(r.raw.length),t.push(r),!0):!1))){if(r=this.tokenizer.space(e)){e=e.substring(r.raw.length),r.raw.length===1&&t.length>0?t[t.length-1].raw+=`
`:t.push(r);continue}if(r=this.tokenizer.code(e)){e=e.substring(r.raw.length),l=t[t.length-1],l&&(l.type==="paragraph"||l.type==="text")?(l.raw+=`
`+r.raw,l.text+=`
`+r.text,this.inlineQueue[this.inlineQueue.length-1].src=l.text):t.push(r);continue}if(r=this.tokenizer.fences(e)){e=e.substring(r.raw.length),t.push(r);continue}if(r=this.tokenizer.heading(e)){e=e.substring(r.raw.length),t.push(r);continue}if(r=this.tokenizer.hr(e)){e=e.substring(r.raw.length),t.push(r);continue}if(r=this.tokenizer.blockquote(e)){e=e.substring(r.raw.length),t.push(r);continue}if(r=this.tokenizer.list(e)){e=e.substring(r.raw.length),t.push(r);continue}if(r=this.tokenizer.html(e)){e=e.substring(r.raw.length),t.push(r);continue}if(r=this.tokenizer.def(e)){e=e.substring(r.raw.length),l=t[t.length-1],l&&(l.type==="paragraph"||l.type==="text")?(l.raw+=`
`+r.raw,l.text+=`
`+r.raw,this.inlineQueue[this.inlineQueue.length-1].src=l.text):this.tokens.links[r.tag]||(this.tokens.links[r.tag]={href:r.href,title:r.title});continue}if(r=this.tokenizer.table(e)){e=e.substring(r.raw.length),t.push(r);continue}if(r=this.tokenizer.lheading(e)){e=e.substring(r.raw.length),t.push(r);continue}if(i=e,this.options.extensions&&this.options.extensions.startBlock){let s=1/0;const a=e.slice(1);let u;this.options.extensions.startBlock.forEach(f=>{u=f.call({lexer:this},a),typeof u=="number"&&u>=0&&(s=Math.min(s,u))}),s<1/0&&s>=0&&(i=e.substring(0,s+1))}if(this.state.top&&(r=this.tokenizer.paragraph(i))){l=t[t.length-1],o&&l.type==="paragraph"?(l.raw+=`
`+r.raw,l.text+=`
`+r.text,this.inlineQueue.pop(),this.inlineQueue[this.inlineQueue.length-1].src=l.text):t.push(r),o=i.length!==e.length,e=e.substring(r.raw.length);continue}if(r=this.tokenizer.text(e)){e=e.substring(r.raw.length),l=t[t.length-1],l&&l.type==="text"?(l.raw+=`
`+r.raw,l.text+=`
`+r.text,this.inlineQueue.pop(),this.inlineQueue[this.inlineQueue.length-1].src=l.text):t.push(r);continue}if(e){const s="Infinite loop on byte: "+e.charCodeAt(0);if(this.options.silent){console.error(s);break}else throw new Error(s)}}return this.state.top=!0,t}inline(e,t=[]){return this.inlineQueue.push({src:e,tokens:t}),t}inlineTokens(e,t=[]){let r,l,i,o=e,s,a,u;if(this.tokens.links){const f=Object.keys(this.tokens.links);if(f.length>0)for(;(s=this.tokenizer.rules.inline.reflinkSearch.exec(o))!=null;)f.includes(s[0].slice(s[0].lastIndexOf("[")+1,-1))&&(o=o.slice(0,s.index)+"["+"a".repeat(s[0].length-2)+"]"+o.slice(this.tokenizer.rules.inline.reflinkSearch.lastIndex))}for(;(s=this.tokenizer.rules.inline.blockSkip.exec(o))!=null;)o=o.slice(0,s.index)+"["+"a".repeat(s[0].length-2)+"]"+o.slice(this.tokenizer.rules.inline.blockSkip.lastIndex);for(;(s=this.tokenizer.rules.inline.anyPunctuation.exec(o))!=null;)o=o.slice(0,s.index)+"++"+o.slice(this.tokenizer.rules.inline.anyPunctuation.lastIndex);for(;e;)if(a||(u=""),a=!1,!(this.options.extensions&&this.options.extensions.inline&&this.options.extensions.inline.some(f=>(r=f.call({lexer:this},e,t))?(e=e.substring(r.raw.length),t.push(r),!0):!1))){if(r=this.tokenizer.escape(e)){e=e.substring(r.raw.length),t.push(r);continue}if(r=this.tokenizer.tag(e)){e=e.substring(r.raw.length),l=t[t.length-1],l&&r.type==="text"&&l.type==="text"?(l.raw+=r.raw,l.text+=r.text):t.push(r);continue}if(r=this.tokenizer.link(e)){e=e.substring(r.raw.length),t.push(r);continue}if(r=this.tokenizer.reflink(e,this.tokens.links)){e=e.substring(r.raw.length),l=t[t.length-1],l&&r.type==="text"&&l.type==="text"?(l.raw+=r.raw,l.text+=r.text):t.push(r);continue}if(r=this.tokenizer.emStrong(e,o,u)){e=e.substring(r.raw.length),t.push(r);continue}if(r=this.tokenizer.codespan(e)){e=e.substring(r.raw.length),t.push(r);continue}if(r=this.tokenizer.br(e)){e=e.substring(r.raw.length),t.push(r);continue}if(r=this.tokenizer.del(e)){e=e.substring(r.raw.length),t.push(r);continue}if(r=this.tokenizer.autolink(e)){e=e.substring(r.raw.length),t.push(r);continue}if(!this.state.inLink&&(r=this.tokenizer.url(e))){e=e.substring(r.raw.length),t.push(r);continue}if(i=e,this.options.extensions&&this.options.extensions.startInline){let f=1/0;const d=e.slice(1);let p;this.options.extensions.startInline.forEach(m=>{p=m.call({lexer:this},d),typeof p=="number"&&p>=0&&(f=Math.min(f,p))}),f<1/0&&f>=0&&(i=e.substring(0,f+1))}if(r=this.tokenizer.inlineText(i)){e=e.substring(r.raw.length),r.raw.slice(-1)!=="_"&&(u=r.raw.slice(-1)),a=!0,l=t[t.length-1],l&&l.type==="text"?(l.raw+=r.raw,l.text+=r.text):t.push(r);continue}if(e){const f="Infinite loop on byte: "+e.charCodeAt(0);if(this.options.silent){console.error(f);break}else throw new Error(f)}}return t}}class zl{constructor(e){F(this,"options");this.options=e||Ye}code(e,t,r){var i;const l=(i=(t||"").match(/^\S*/))==null?void 0:i[0];return e=e.replace(/\n$/,"")+`
`,l?'<pre><code class="language-'+xn(l)+'">'+(r?e:xn(e,!0))+`</code></pre>
`:"<pre><code>"+(r?e:xn(e,!0))+`</code></pre>
`}blockquote(e){return`<blockquote>
${e}</blockquote>
`}html(e,t){return e}heading(e,t,r){return`<h${t}>${e}</h${t}>
`}hr(){return`<hr>
`}list(e,t,r){const l=t?"ol":"ul",i=t&&r!==1?' start="'+r+'"':"";return"<"+l+i+`>
`+e+"</"+l+`>
`}listitem(e,t,r){return`<li>${e}</li>
`}checkbox(e){return"<input "+(e?'checked="" ':"")+'disabled="" type="checkbox">'}paragraph(e){return`<p>${e}</p>
`}table(e,t){return t&&(t=`<tbody>${t}</tbody>`),`<table>
<thead>
`+e+`</thead>
`+t+`</table>
`}tablerow(e){return`<tr>
${e}</tr>
`}tablecell(e,t){const r=t.header?"th":"td";return(t.align?`<${r} align="${t.align}">`:`<${r}>`)+e+`</${r}>
`}strong(e){return`<strong>${e}</strong>`}em(e){return`<em>${e}</em>`}codespan(e){return`<code>${e}</code>`}br(){return"<br>"}del(e){return`<del>${e}</del>`}link(e,t,r){const l=nu(e);if(l===null)return r;e=l;let i='<a href="'+e+'"';return t&&(i+=' title="'+t+'"'),i+=">"+r+"</a>",i}image(e,t,r){const l=nu(e);if(l===null)return r;e=l;let i=`<img src="${e}" alt="${r}"`;return t&&(i+=` title="${t}"`),i+=">",i}text(e){return e}}class Ns{strong(e){return e}em(e){return e}codespan(e){return e}del(e){return e}html(e){return e}text(e){return e}link(e,t,r){return""+r}image(e,t,r){return""+r}br(){return""}}class Hn{constructor(e){F(this,"options");F(this,"renderer");F(this,"textRenderer");this.options=e||Ye,this.options.renderer=this.options.renderer||new zl,this.renderer=this.options.renderer,this.renderer.options=this.options,this.textRenderer=new Ns}static parse(e,t){return new Hn(t).parse(e)}static parseInline(e,t){return new Hn(t).parseInline(e)}parse(e,t=!0){let r="";for(let l=0;l<e.length;l++){const i=e[l];if(this.options.extensions&&this.options.extensions.renderers&&this.options.extensions.renderers[i.type]){const o=i,s=this.options.extensions.renderers[o.type].call({parser:this},o);if(s!==!1||!["space","hr","heading","code","table","blockquote","list","html","paragraph","text"].includes(o.type)){r+=s||"";continue}}switch(i.type){case"space":continue;case"hr":{r+=this.renderer.hr();continue}case"heading":{const o=i;r+=this.renderer.heading(this.parseInline(o.tokens),o.depth,xg(this.parseInline(o.tokens,this.textRenderer)));continue}case"code":{const o=i;r+=this.renderer.code(o.text,o.lang,!!o.escaped);continue}case"table":{const o=i;let s="",a="";for(let f=0;f<o.header.length;f++)a+=this.renderer.tablecell(this.parseInline(o.header[f].tokens),{header:!0,align:o.align[f]});s+=this.renderer.tablerow(a);let u="";for(let f=0;f<o.rows.length;f++){const d=o.rows[f];a="";for(let p=0;p<d.length;p++)a+=this.renderer.tablecell(this.parseInline(d[p].tokens),{header:!1,align:o.align[p]});u+=this.renderer.tablerow(a)}r+=this.renderer.table(s,u);continue}case"blockquote":{const o=i,s=this.parse(o.tokens);r+=this.renderer.blockquote(s);continue}case"list":{const o=i,s=o.ordered,a=o.start,u=o.loose;let f="";for(let d=0;d<o.items.length;d++){const p=o.items[d],m=p.checked,w=p.task;let y="";if(p.task){const A=this.renderer.checkbox(!!m);u?p.tokens.length>0&&p.tokens[0].type==="paragraph"?(p.tokens[0].text=A+" "+p.tokens[0].text,p.tokens[0].tokens&&p.tokens[0].tokens.length>0&&p.tokens[0].tokens[0].type==="text"&&(p.tokens[0].tokens[0].text=A+" "+p.tokens[0].tokens[0].text)):p.tokens.unshift({type:"text",text:A+" "}):y+=A+" "}y+=this.parse(p.tokens,u),f+=this.renderer.listitem(y,w,!!m)}r+=this.renderer.list(f,s,a);continue}case"html":{const o=i;r+=this.renderer.html(o.text,o.block);continue}case"paragraph":{const o=i;r+=this.renderer.paragraph(this.parseInline(o.tokens));continue}case"text":{let o=i,s=o.tokens?this.parseInline(o.tokens):o.text;for(;l+1<e.length&&e[l+1].type==="text";)o=e[++l],s+=`
`+(o.tokens?this.parseInline(o.tokens):o.text);r+=t?this.renderer.paragraph(s):s;continue}default:{const o='Token with "'+i.type+'" type was not found.';if(this.options.silent)return console.error(o),"";throw new Error(o)}}}return r}parseInline(e,t){t=t||this.renderer;let r="";for(let l=0;l<e.length;l++){const i=e[l];if(this.options.extensions&&this.options.extensions.renderers&&this.options.extensions.renderers[i.type]){const o=this.options.extensions.renderers[i.type].call({parser:this},i);if(o!==!1||!["escape","html","link","image","strong","em","codespan","br","del","text"].includes(i.type)){r+=o||"";continue}}switch(i.type){case"escape":{const o=i;r+=t.text(o.text);break}case"html":{const o=i;r+=t.html(o.text);break}case"link":{const o=i;r+=t.link(o.href,o.title,this.parseInline(o.tokens,t));break}case"image":{const o=i;r+=t.image(o.href,o.title,o.text);break}case"strong":{const o=i;r+=t.strong(this.parseInline(o.tokens,t));break}case"em":{const o=i;r+=t.em(this.parseInline(o.tokens,t));break}case"codespan":{const o=i;r+=t.codespan(o.text);break}case"br":{r+=t.br();break}case"del":{const o=i;r+=t.del(this.parseInline(o.tokens,t));break}case"text":{const o=i;r+=t.text(o.text);break}default:{const o='Token with "'+i.type+'" type was not found.';if(this.options.silent)return console.error(o),"";throw new Error(o)}}}return r}}class Jt{constructor(e){F(this,"options");this.options=e||Ye}preprocess(e){return e}postprocess(e){return e}processAllTokens(e){return e}}F(Jt,"passThroughHooks",new Set(["preprocess","postprocess","processAllTokens"]));var He,Oo,U0;class qg{constructor(...e){Ls(this,He);F(this,"defaults",Ps());F(this,"options",this.setOptions);F(this,"parse",Er(this,He,Oo).call(this,Gn.lex,Hn.parse));F(this,"parseInline",Er(this,He,Oo).call(this,Gn.lexInline,Hn.parseInline));F(this,"Parser",Hn);F(this,"Renderer",zl);F(this,"TextRenderer",Ns);F(this,"Lexer",Gn);F(this,"Tokenizer",Nl);F(this,"Hooks",Jt);this.use(...e)}walkTokens(e,t){var l,i;let r=[];for(const o of e)switch(r=r.concat(t.call(this,o)),o.type){case"table":{const s=o;for(const a of s.header)r=r.concat(this.walkTokens(a.tokens,t));for(const a of s.rows)for(const u of a)r=r.concat(this.walkTokens(u.tokens,t));break}case"list":{const s=o;r=r.concat(this.walkTokens(s.items,t));break}default:{const s=o;(i=(l=this.defaults.extensions)==null?void 0:l.childTokens)!=null&&i[s.type]?this.defaults.extensions.childTokens[s.type].forEach(a=>{const u=s[a].flat(1/0);r=r.concat(this.walkTokens(u,t))}):s.tokens&&(r=r.concat(this.walkTokens(s.tokens,t)))}}return r}use(...e){const t=this.defaults.extensions||{renderers:{},childTokens:{}};return e.forEach(r=>{const l={...r};if(l.async=this.defaults.async||l.async||!1,r.extensions&&(r.extensions.forEach(i=>{if(!i.name)throw new Error("extension name required");if("renderer"in i){const o=t.renderers[i.name];o?t.renderers[i.name]=function(...s){let a=i.renderer.apply(this,s);return a===!1&&(a=o.apply(this,s)),a}:t.renderers[i.name]=i.renderer}if("tokenizer"in i){if(!i.level||i.level!=="block"&&i.level!=="inline")throw new Error("extension level must be 'block' or 'inline'");const o=t[i.level];o?o.unshift(i.tokenizer):t[i.level]=[i.tokenizer],i.start&&(i.level==="block"?t.startBlock?t.startBlock.push(i.start):t.startBlock=[i.start]:i.level==="inline"&&(t.startInline?t.startInline.push(i.start):t.startInline=[i.start]))}"childTokens"in i&&i.childTokens&&(t.childTokens[i.name]=i.childTokens)}),l.extensions=t),r.renderer){const i=this.defaults.renderer||new zl(this.defaults);for(const o in r.renderer){if(!(o in i))throw new Error(`renderer '${o}' does not exist`);if(o==="options")continue;const s=o,a=r.renderer[s],u=i[s];i[s]=(...f)=>{let d=a.apply(i,f);return d===!1&&(d=u.apply(i,f)),d||""}}l.renderer=i}if(r.tokenizer){const i=this.defaults.tokenizer||new Nl(this.defaults);for(const o in r.tokenizer){if(!(o in i))throw new Error(`tokenizer '${o}' does not exist`);if(["options","rules","lexer"].includes(o))continue;const s=o,a=r.tokenizer[s],u=i[s];i[s]=(...f)=>{let d=a.apply(i,f);return d===!1&&(d=u.apply(i,f)),d}}l.tokenizer=i}if(r.hooks){const i=this.defaults.hooks||new Jt;for(const o in r.hooks){if(!(o in i))throw new Error(`hook '${o}' does not exist`);if(o==="options")continue;const s=o,a=r.hooks[s],u=i[s];Jt.passThroughHooks.has(o)?i[s]=f=>{if(this.defaults.async)return Promise.resolve(a.call(i,f)).then(p=>u.call(i,p));const d=a.call(i,f);return u.call(i,d)}:i[s]=(...f)=>{let d=a.apply(i,f);return d===!1&&(d=u.apply(i,f)),d}}l.hooks=i}if(r.walkTokens){const i=this.defaults.walkTokens,o=r.walkTokens;l.walkTokens=function(s){let a=[];return a.push(o.call(this,s)),i&&(a=a.concat(i.call(this,s))),a}}this.defaults={...this.defaults,...l}}),this}setOptions(e){return this.defaults={...this.defaults,...e},this}lexer(e,t){return Gn.lex(e,t??this.defaults)}parser(e,t){return Hn.parse(e,t??this.defaults)}}He=new WeakSet,Oo=function(e,t){return(r,l)=>{const i={...l},o={...this.defaults,...i};this.defaults.async===!0&&i.async===!1&&(o.silent||console.warn("marked(): The async option was set to true by an extension. The async: false option sent to parse will be ignored."),o.async=!0);const s=Er(this,He,U0).call(this,!!o.silent,!!o.async);if(typeof r>"u"||r===null)return s(new Error("marked(): input parameter is undefined or null"));if(typeof r!="string")return s(new Error("marked(): input parameter is of type "+Object.prototype.toString.call(r)+", string expected"));if(o.hooks&&(o.hooks.options=o),o.async)return Promise.resolve(o.hooks?o.hooks.preprocess(r):r).then(a=>e(a,o)).then(a=>o.hooks?o.hooks.processAllTokens(a):a).then(a=>o.walkTokens?Promise.all(this.walkTokens(a,o.walkTokens)).then(()=>a):a).then(a=>t(a,o)).then(a=>o.hooks?o.hooks.postprocess(a):a).catch(s);try{o.hooks&&(r=o.hooks.preprocess(r));let a=e(r,o);o.hooks&&(a=o.hooks.processAllTokens(a)),o.walkTokens&&this.walkTokens(a,o.walkTokens);let u=t(a,o);return o.hooks&&(u=o.hooks.postprocess(u)),u}catch(a){return s(a)}}},U0=function(e,t){return r=>{if(r.message+=`
Please report this to https://github.com/markedjs/marked.`,e){const l="<p>An error occurred:</p><pre>"+xn(r.message+"",!0)+"</pre>";return t?Promise.resolve(l):l}if(t)return Promise.reject(r);throw r}};const Ge=new qg;function D(n,e){return Ge.parse(n,e)}D.options=D.setOptions=function(n){return Ge.setOptions(n),D.defaults=Ge.defaults,N0(D.defaults),D};D.getDefaults=Ps;D.defaults=Ye;D.use=function(...n){return Ge.use(...n),D.defaults=Ge.defaults,N0(D.defaults),D};D.walkTokens=function(n,e){return Ge.walkTokens(n,e)};D.parseInline=Ge.parseInline;D.Parser=Hn;D.parser=Hn.parse;D.Renderer=zl;D.TextRenderer=Ns;D.Lexer=Gn;D.lexer=Gn.lex;D.Tokenizer=Nl;D.Hooks=Jt;D.parse=D;D.options;D.setOptions;D.use;D.walkTokens;D.parseInline;Hn.parse;Gn.lex;D.setOptions({gfm:!0,breaks:!1});function Jg(){const{slug:n}=Jp(),e=hg(n),[t,r]=S.useState(!1),l=S.useMemo(()=>{if(!e)return"";let o=e.raw;if(!t){const s=o.indexOf("## 全文");s>-1&&(o=o.slice(0,s))}return D.parse(o)},[e,t]);if(!e)return x.jsx("div",{className:"page",children:x.jsxs("p",{children:["文章不存在。",x.jsx(bn,{to:"/articles",children:"返回文章列表"})]})});const i=e.raw.includes("## 全文");return x.jsxs("article",{className:"article",children:[x.jsxs("header",{className:"article-header",children:[x.jsx("h1",{children:e.title}),x.jsxs("div",{className:"article-meta",children:[x.jsx("span",{children:e.date}),e.tags.map(o=>x.jsx(bn,{to:`/articles?tag=${encodeURIComponent(o)}`,className:"tag",children:o},o))]})]}),x.jsx("div",{className:"article-body",dangerouslySetInnerHTML:{__html:l}}),i&&x.jsx("div",{className:"full-toggle",children:x.jsx("button",{onClick:()=>r(o=>!o),children:t?"收起全文":"展开课程全文（转录已清洗）"})}),x.jsx("div",{className:"back-link",children:x.jsx(bn,{to:"/articles",children:"← 返回文章列表"})})]})}function bg(){return x.jsxs("div",{children:[x.jsx("h1",{className:"page-title",children:"专题"}),Object.entries(_0).map(([n,e])=>{const t=$e.filter(r=>r.topic===n);return x.jsxs("section",{className:"topic-section",children:[x.jsx("h2",{className:"section-title",children:e.name}),x.jsx("p",{className:"topic-desc",children:e.desc}),x.jsx("ul",{className:"post-list",children:t.map(r=>x.jsx("li",{children:x.jsxs(bn,{to:`/article/${r.slug}`,children:[x.jsx("span",{className:"post-title",children:r.title}),x.jsx("span",{className:"post-excerpt",children:r.excerpt}),x.jsx("span",{className:"post-meta",children:r.date})]})},r.slug))})]},n)})]})}function n2(){return x.jsxs("div",{className:"page",children:[x.jsx("h1",{className:"page-title",children:"关于"}),x.jsxs("p",{children:[x.jsx("strong",{children:"古旧新风"}),"，一个按专题组织的个人博客。"]}),x.jsx("p",{children:"「古旧」是那些反复出现的老问题：怎么成长、怎么决策、怎么与人合作、怎么面对不确定的世界。「新风」是当代科学给出的新工具：来自认知科学、复杂系统、信息论与人工智能研究的思维模型。"}),x.jsx("p",{children:"首个专题是万维钢《现代思维工具课》的研读笔记。每讲整理为五要素卡片（讲什么 / 解决什么真问题 / 核心论点 / 关键例证与金句 / 如何应用），并附清洗后的课程全文。原始音频与版权归得到 App 及作者所有，本站仅为个人学习笔记。"})]})}Ei.createRoot(document.getElementById("root")).render(x.jsx(hu.StrictMode,{children:x.jsx(Ih,{children:x.jsx(gh,{children:x.jsxs(Re,{path:"/",element:x.jsx(Eh,{}),children:[x.jsx(Re,{index:!0,element:x.jsx(gg,{})}),x.jsx(Re,{path:"articles",element:x.jsx(mg,{})}),x.jsx(Re,{path:"article/:slug",element:x.jsx(Jg,{})}),x.jsx(Re,{path:"topics",element:x.jsx(bg,{})}),x.jsx(Re,{path:"about",element:x.jsx(n2,{})})]})})})}));
