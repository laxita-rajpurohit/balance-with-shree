function e(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}!function(){const e=document.createElement("link").relList;if(!(e&&e.supports&&e.supports("modulepreload"))){for(const e of document.querySelectorAll('link[rel="modulepreload"]'))t(e);new MutationObserver(e=>{for(const n of e)if("childList"===n.type)for(const e of n.addedNodes)"LINK"===e.tagName&&"modulepreload"===e.rel&&t(e)}).observe(document,{childList:!0,subtree:!0})}function t(e){if(e.ep)return;e.ep=!0;const t=function(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),"use-credentials"===e.crossOrigin?t.credentials="include":"anonymous"===e.crossOrigin?t.credentials="omit":t.credentials="same-origin",t}(e);fetch(e.href,t)}}();var t,n,r,i,a={exports:{}},o={},s={exports:{}},l={};function u(){if(t)return l;t=1;var e=Symbol.for("react.element"),n=Symbol.for("react.portal"),r=Symbol.for("react.fragment"),i=Symbol.for("react.strict_mode"),a=Symbol.for("react.profiler"),o=Symbol.for("react.provider"),s=Symbol.for("react.context"),u=Symbol.for("react.forward_ref"),c=Symbol.for("react.suspense"),d=Symbol.for("react.memo"),p=Symbol.for("react.lazy"),h=Symbol.iterator;var f={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},m=Object.assign,g={};function x(e,t,n){this.props=e,this.context=t,this.refs=g,this.updater=n||f}function y(){}function b(e,t,n){this.props=e,this.context=t,this.refs=g,this.updater=n||f}x.prototype.isReactComponent={},x.prototype.setState=function(e,t){if("object"!=typeof e&&"function"!=typeof e&&null!=e)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")},x.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},y.prototype=x.prototype;var v=b.prototype=new y;v.constructor=b,m(v,x.prototype),v.isPureReactComponent=!0;var w=Array.isArray,k=Object.prototype.hasOwnProperty,_={current:null},j={key:!0,ref:!0,__self:!0,__source:!0};function S(t,n,r){var i,a={},o=null,s=null;if(null!=n)for(i in void 0!==n.ref&&(s=n.ref),void 0!==n.key&&(o=""+n.key),n)k.call(n,i)&&!j.hasOwnProperty(i)&&(a[i]=n[i]);var l=arguments.length-2;if(1===l)a.children=r;else if(1<l){for(var u=Array(l),c=0;c<l;c++)u[c]=arguments[c+2];a.children=u}if(t&&t.defaultProps)for(i in l=t.defaultProps)void 0===a[i]&&(a[i]=l[i]);return{$$typeof:e,type:t,key:o,ref:s,props:a,_owner:_.current}}function C(t){return"object"==typeof t&&null!==t&&t.$$typeof===e}var z=/\/+/g;function E(e,t){return"object"==typeof e&&null!==e&&null!=e.key?function(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(e){return t[e]})}(""+e.key):t.toString(36)}function $(t,r,i,a,o){var s=typeof t;"undefined"!==s&&"boolean"!==s||(t=null);var l=!1;if(null===t)l=!0;else switch(s){case"string":case"number":l=!0;break;case"object":switch(t.$$typeof){case e:case n:l=!0}}if(l)return o=o(l=t),t=""===a?"."+E(l,0):a,w(o)?(i="",null!=t&&(i=t.replace(z,"$&/")+"/"),$(o,r,i,"",function(e){return e})):null!=o&&(C(o)&&(o=function(t,n){return{$$typeof:e,type:t.type,key:n,ref:t.ref,props:t.props,_owner:t._owner}}(o,i+(!o.key||l&&l.key===o.key?"":(""+o.key).replace(z,"$&/")+"/")+t)),r.push(o)),1;if(l=0,a=""===a?".":a+":",w(t))for(var u=0;u<t.length;u++){var c=a+E(s=t[u],u);l+=$(s,r,i,c,o)}else if(c=function(e){return null===e||"object"!=typeof e?null:"function"==typeof(e=h&&e[h]||e["@@iterator"])?e:null}(t),"function"==typeof c)for(t=c.call(t),u=0;!(s=t.next()).done;)l+=$(s=s.value,r,i,c=a+E(s,u++),o);else if("object"===s)throw r=String(t),Error("Objects are not valid as a React child (found: "+("[object Object]"===r?"object with keys {"+Object.keys(t).join(", ")+"}":r)+"). If you meant to render a collection of children, use an array instead.");return l}function P(e,t,n){if(null==e)return e;var r=[],i=0;return $(e,r,"","",function(e){return t.call(n,e,i++)}),r}function T(e){if(-1===e._status){var t=e._result;(t=t()).then(function(t){0!==e._status&&-1!==e._status||(e._status=1,e._result=t)},function(t){0!==e._status&&-1!==e._status||(e._status=2,e._result=t)}),-1===e._status&&(e._status=0,e._result=t)}if(1===e._status)return e._result.default;throw e._result}var M={current:null},R={transition:null},O={ReactCurrentDispatcher:M,ReactCurrentBatchConfig:R,ReactCurrentOwner:_};function N(){throw Error("act(...) is not supported in production builds of React.")}return l.Children={map:P,forEach:function(e,t,n){P(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return P(e,function(){t++}),t},toArray:function(e){return P(e,function(e){return e})||[]},only:function(e){if(!C(e))throw Error("React.Children.only expected to receive a single React element child.");return e}},l.Component=x,l.Fragment=r,l.Profiler=a,l.PureComponent=b,l.StrictMode=i,l.Suspense=c,l.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=O,l.act=N,l.cloneElement=function(t,n,r){if(null==t)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var i=m({},t.props),a=t.key,o=t.ref,s=t._owner;if(null!=n){if(void 0!==n.ref&&(o=n.ref,s=_.current),void 0!==n.key&&(a=""+n.key),t.type&&t.type.defaultProps)var l=t.type.defaultProps;for(u in n)k.call(n,u)&&!j.hasOwnProperty(u)&&(i[u]=void 0===n[u]&&void 0!==l?l[u]:n[u])}var u=arguments.length-2;if(1===u)i.children=r;else if(1<u){l=Array(u);for(var c=0;c<u;c++)l[c]=arguments[c+2];i.children=l}return{$$typeof:e,type:t.type,key:a,ref:o,props:i,_owner:s}},l.createContext=function(e){return(e={$$typeof:s,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null}).Provider={$$typeof:o,_context:e},e.Consumer=e},l.createElement=S,l.createFactory=function(e){var t=S.bind(null,e);return t.type=e,t},l.createRef=function(){return{current:null}},l.forwardRef=function(e){return{$$typeof:u,render:e}},l.isValidElement=C,l.lazy=function(e){return{$$typeof:p,_payload:{_status:-1,_result:e},_init:T}},l.memo=function(e,t){return{$$typeof:d,type:e,compare:void 0===t?null:t}},l.startTransition=function(e){var t=R.transition;R.transition={};try{e()}finally{R.transition=t}},l.unstable_act=N,l.useCallback=function(e,t){return M.current.useCallback(e,t)},l.useContext=function(e){return M.current.useContext(e)},l.useDebugValue=function(){},l.useDeferredValue=function(e){return M.current.useDeferredValue(e)},l.useEffect=function(e,t){return M.current.useEffect(e,t)},l.useId=function(){return M.current.useId()},l.useImperativeHandle=function(e,t,n){return M.current.useImperativeHandle(e,t,n)},l.useInsertionEffect=function(e,t){return M.current.useInsertionEffect(e,t)},l.useLayoutEffect=function(e,t){return M.current.useLayoutEffect(e,t)},l.useMemo=function(e,t){return M.current.useMemo(e,t)},l.useReducer=function(e,t,n){return M.current.useReducer(e,t,n)},l.useRef=function(e){return M.current.useRef(e)},l.useState=function(e){return M.current.useState(e)},l.useSyncExternalStore=function(e,t,n){return M.current.useSyncExternalStore(e,t,n)},l.useTransition=function(){return M.current.useTransition()},l.version="18.3.1",l}function c(){return n||(n=1,s.exports=u()),s.exports}var d=(i||(i=1,a.exports=function(){if(r)return o;r=1;var e=c(),t=Symbol.for("react.element"),n=Symbol.for("react.fragment"),i=Object.prototype.hasOwnProperty,a=e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,s={key:!0,ref:!0,__self:!0,__source:!0};function l(e,n,r){var o,l={},u=null,c=null;for(o in void 0!==r&&(u=""+r),void 0!==n.key&&(u=""+n.key),void 0!==n.ref&&(c=n.ref),n)i.call(n,o)&&!s.hasOwnProperty(o)&&(l[o]=n[o]);if(e&&e.defaultProps)for(o in n=e.defaultProps)void 0===l[o]&&(l[o]=n[o]);return{$$typeof:t,type:e,key:u,ref:c,props:l,_owner:a.current}}return o.Fragment=n,o.jsx=l,o.jsxs=l,o}()),a.exports),p=c();const h=e(p);var f,m,g,x,y,b={},v={exports:{}},w={},k={exports:{}},_={};function j(){return m||(m=1,k.exports=(f||(f=1,function(e){function t(e,t){var n=e.length;e.push(t);e:for(;0<n;){var r=n-1>>>1,a=e[r];if(!(0<i(a,t)))break e;e[r]=t,e[n]=a,n=r}}function n(e){return 0===e.length?null:e[0]}function r(e){if(0===e.length)return null;var t=e[0],n=e.pop();if(n!==t){e[0]=n;e:for(var r=0,a=e.length,o=a>>>1;r<o;){var s=2*(r+1)-1,l=e[s],u=s+1,c=e[u];if(0>i(l,n))u<a&&0>i(c,l)?(e[r]=c,e[u]=n,r=u):(e[r]=l,e[s]=n,r=s);else{if(!(u<a&&0>i(c,n)))break e;e[r]=c,e[u]=n,r=u}}}return t}function i(e,t){var n=e.sortIndex-t.sortIndex;return 0!==n?n:e.id-t.id}if("object"==typeof performance&&"function"==typeof performance.now){var a=performance;e.unstable_now=function(){return a.now()}}else{var o=Date,s=o.now();e.unstable_now=function(){return o.now()-s}}var l=[],u=[],c=1,d=null,p=3,h=!1,f=!1,m=!1,g="function"==typeof setTimeout?setTimeout:null,x="function"==typeof clearTimeout?clearTimeout:null,y="undefined"!=typeof setImmediate?setImmediate:null;function b(e){for(var i=n(u);null!==i;){if(null===i.callback)r(u);else{if(!(i.startTime<=e))break;r(u),i.sortIndex=i.expirationTime,t(l,i)}i=n(u)}}function v(e){if(m=!1,b(e),!f)if(null!==n(l))f=!0,M(w);else{var t=n(u);null!==t&&R(v,t.startTime-e)}}function w(t,i){f=!1,m&&(m=!1,x(S),S=-1),h=!0;var a=p;try{for(b(i),d=n(l);null!==d&&(!(d.expirationTime>i)||t&&!E());){var o=d.callback;if("function"==typeof o){d.callback=null,p=d.priorityLevel;var s=o(d.expirationTime<=i);i=e.unstable_now(),"function"==typeof s?d.callback=s:d===n(l)&&r(l),b(i)}else r(l);d=n(l)}if(null!==d)var c=!0;else{var g=n(u);null!==g&&R(v,g.startTime-i),c=!1}return c}finally{d=null,p=a,h=!1}}"undefined"!=typeof navigator&&void 0!==navigator.scheduling&&void 0!==navigator.scheduling.isInputPending&&navigator.scheduling.isInputPending.bind(navigator.scheduling);var k,_=!1,j=null,S=-1,C=5,z=-1;function E(){return!(e.unstable_now()-z<C)}function $(){if(null!==j){var t=e.unstable_now();z=t;var n=!0;try{n=j(!0,t)}finally{n?k():(_=!1,j=null)}}else _=!1}if("function"==typeof y)k=function(){y($)};else if("undefined"!=typeof MessageChannel){var P=new MessageChannel,T=P.port2;P.port1.onmessage=$,k=function(){T.postMessage(null)}}else k=function(){g($,0)};function M(e){j=e,_||(_=!0,k())}function R(t,n){S=g(function(){t(e.unstable_now())},n)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(e){e.callback=null},e.unstable_continueExecution=function(){f||h||(f=!0,M(w))},e.unstable_forceFrameRate=function(e){0>e||125<e?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):C=0<e?Math.floor(1e3/e):5},e.unstable_getCurrentPriorityLevel=function(){return p},e.unstable_getFirstCallbackNode=function(){return n(l)},e.unstable_next=function(e){switch(p){case 1:case 2:case 3:var t=3;break;default:t=p}var n=p;p=t;try{return e()}finally{p=n}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(e,t){switch(e){case 1:case 2:case 3:case 4:case 5:break;default:e=3}var n=p;p=e;try{return t()}finally{p=n}},e.unstable_scheduleCallback=function(r,i,a){var o=e.unstable_now();switch(a="object"==typeof a&&null!==a&&"number"==typeof(a=a.delay)&&0<a?o+a:o,r){case 1:var s=-1;break;case 2:s=250;break;case 5:s=1073741823;break;case 4:s=1e4;break;default:s=5e3}return r={id:c++,callback:i,priorityLevel:r,startTime:a,expirationTime:s=a+s,sortIndex:-1},a>o?(r.sortIndex=a,t(u,r),null===n(l)&&r===n(u)&&(m?(x(S),S=-1):m=!0,R(v,a-o))):(r.sortIndex=s,t(l,r),f||h||(f=!0,M(w))),r},e.unstable_shouldYield=E,e.unstable_wrapCallback=function(e){var t=p;return function(){var n=p;p=t;try{return e.apply(this,arguments)}finally{p=n}}}}(_)),_)),k.exports}function S(){if(g)return w;g=1;var e=c(),t=j();function n(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var r=new Set,i={};function a(e,t){o(e,t),o(e+"Capture",t)}function o(e,t){for(i[e]=t,e=0;e<t.length;e++)r.add(t[e])}var s=!("undefined"==typeof window||void 0===window.document||void 0===window.document.createElement),l=Object.prototype.hasOwnProperty,u=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,d={},p={};function h(e,t,n,r,i,a,o){this.acceptsBooleans=2===t||3===t||4===t,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=a,this.removeEmptyString=o}var f={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){f[e]=new h(e,0,!1,e,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];f[t]=new h(t,1,!1,e[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(e){f[e]=new h(e,2,!1,e.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){f[e]=new h(e,2,!1,e,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){f[e]=new h(e,3,!1,e.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(e){f[e]=new h(e,3,!0,e,null,!1,!1)}),["capture","download"].forEach(function(e){f[e]=new h(e,4,!1,e,null,!1,!1)}),["cols","rows","size","span"].forEach(function(e){f[e]=new h(e,6,!1,e,null,!1,!1)}),["rowSpan","start"].forEach(function(e){f[e]=new h(e,5,!1,e.toLowerCase(),null,!1,!1)});var m=/[\-:]([a-z])/g;function x(e){return e[1].toUpperCase()}function y(e,t,n,r){var i=f.hasOwnProperty(t)?f[t]:null;(null!==i?0!==i.type:r||!(2<t.length)||"o"!==t[0]&&"O"!==t[0]||"n"!==t[1]&&"N"!==t[1])&&(function(e,t,n,r){if(null==t||function(e,t,n,r){if(null!==n&&0===n.type)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return!r&&(null!==n?!n.acceptsBooleans:"data-"!==(e=e.toLowerCase().slice(0,5))&&"aria-"!==e);default:return!1}}(e,t,n,r))return!0;if(r)return!1;if(null!==n)switch(n.type){case 3:return!t;case 4:return!1===t;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}(t,n,i,r)&&(n=null),r||null===i?function(e){return!!l.call(p,e)||!l.call(d,e)&&(u.test(e)?p[e]=!0:(d[e]=!0,!1))}(t)&&(null===n?e.removeAttribute(t):e.setAttribute(t,""+n)):i.mustUseProperty?e[i.propertyName]=null===n?3!==i.type&&"":n:(t=i.attributeName,r=i.attributeNamespace,null===n?e.removeAttribute(t):(n=3===(i=i.type)||4===i&&!0===n?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(m,x);f[t]=new h(t,1,!1,e,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(m,x);f[t]=new h(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(m,x);f[t]=new h(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(e){f[e]=new h(e,1,!1,e.toLowerCase(),null,!1,!1)}),f.xlinkHref=new h("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(e){f[e]=new h(e,1,!1,e.toLowerCase(),null,!0,!0)});var b=e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,v=Symbol.for("react.element"),k=Symbol.for("react.portal"),_=Symbol.for("react.fragment"),S=Symbol.for("react.strict_mode"),C=Symbol.for("react.profiler"),z=Symbol.for("react.provider"),E=Symbol.for("react.context"),$=Symbol.for("react.forward_ref"),P=Symbol.for("react.suspense"),T=Symbol.for("react.suspense_list"),M=Symbol.for("react.memo"),R=Symbol.for("react.lazy"),O=Symbol.for("react.offscreen"),N=Symbol.iterator;function A(e){return null===e||"object"!=typeof e?null:"function"==typeof(e=N&&e[N]||e["@@iterator"])?e:null}var D,L=Object.assign;function I(e){if(void 0===D)try{throw Error()}catch(Ch){var t=Ch.stack.trim().match(/\n( *(at )?)/);D=t&&t[1]||""}return"\n"+D+e}var F=!1;function W(e,t){if(!e||F)return"";F=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),"object"==typeof Reflect&&Reflect.construct){try{Reflect.construct(t,[])}catch(u){var r=u}Reflect.construct(e,[],t)}else{try{t.call()}catch(u){r=u}e.call(t.prototype)}else{try{throw Error()}catch(u){r=u}e()}}catch(u){if(u&&r&&"string"==typeof u.stack){for(var i=u.stack.split("\n"),a=r.stack.split("\n"),o=i.length-1,s=a.length-1;1<=o&&0<=s&&i[o]!==a[s];)s--;for(;1<=o&&0<=s;o--,s--)if(i[o]!==a[s]){if(1!==o||1!==s)do{if(o--,0>--s||i[o]!==a[s]){var l="\n"+i[o].replace(" at new "," at ");return e.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",e.displayName)),l}}while(1<=o&&0<=s);break}}}finally{F=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?I(e):""}function B(e){switch(e.tag){case 5:return I(e.type);case 16:return I("Lazy");case 13:return I("Suspense");case 19:return I("SuspenseList");case 0:case 2:case 15:return e=W(e.type,!1);case 11:return e=W(e.type.render,!1);case 1:return e=W(e.type,!0);default:return""}}function U(e){if(null==e)return null;if("function"==typeof e)return e.displayName||e.name||null;if("string"==typeof e)return e;switch(e){case _:return"Fragment";case k:return"Portal";case C:return"Profiler";case S:return"StrictMode";case P:return"Suspense";case T:return"SuspenseList"}if("object"==typeof e)switch(e.$$typeof){case E:return(e.displayName||"Context")+".Consumer";case z:return(e._context.displayName||"Context")+".Provider";case $:var t=e.render;return(e=e.displayName)||(e=""!==(e=t.displayName||t.name||"")?"ForwardRef("+e+")":"ForwardRef"),e;case M:return null!==(t=e.displayName||null)?t:U(e.type)||"Memo";case R:t=e._payload,e=e._init;try{return U(e(t))}catch(Ch){}}return null}function Y(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=(e=t.render).displayName||e.name||"",t.displayName||(""!==e?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return U(t);case 8:return t===S?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if("function"==typeof t)return t.displayName||t.name||null;if("string"==typeof t)return t}return null}function H(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":case"object":return e;default:return""}}function V(e){var t=e.type;return(e=e.nodeName)&&"input"===e.toLowerCase()&&("checkbox"===t||"radio"===t)}function q(e){e._valueTracker||(e._valueTracker=function(e){var t=V(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&void 0!==n&&"function"==typeof n.get&&"function"==typeof n.set){var i=n.get,a=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return i.call(this)},set:function(e){r=""+e,a.call(this,e)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(e){r=""+e},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}(e))}function Q(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=V(e)?e.checked?"true":"false":e.value),(e=r)!==n&&(t.setValue(e),!0)}function G(e){if(void 0===(e=e||("undefined"!=typeof document?document:void 0)))return null;try{return e.activeElement||e.body}catch(t){return e.body}}function X(e,t){var n=t.checked;return L({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:null!=n?n:e._wrapperState.initialChecked})}function K(e,t){var n=null==t.defaultValue?"":t.defaultValue,r=null!=t.checked?t.checked:t.defaultChecked;n=H(null!=t.value?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:"checkbox"===t.type||"radio"===t.type?null!=t.checked:null!=t.value}}function J(e,t){null!=(t=t.checked)&&y(e,"checked",t,!1)}function Z(e,t){J(e,t);var n=H(t.value),r=t.type;if(null!=n)"number"===r?(0===n&&""===e.value||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if("submit"===r||"reset"===r)return void e.removeAttribute("value");t.hasOwnProperty("value")?te(e,t.type,n):t.hasOwnProperty("defaultValue")&&te(e,t.type,H(t.defaultValue)),null==t.checked&&null!=t.defaultChecked&&(e.defaultChecked=!!t.defaultChecked)}function ee(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!("submit"!==r&&"reset"!==r||void 0!==t.value&&null!==t.value))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}""!==(n=e.name)&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,""!==n&&(e.name=n)}function te(e,t,n){"number"===t&&G(e.ownerDocument)===e||(null==n?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var ne=Array.isArray;function re(e,t,n,r){if(e=e.options,t){t={};for(var i=0;i<n.length;i++)t["$"+n[i]]=!0;for(n=0;n<e.length;n++)i=t.hasOwnProperty("$"+e[n].value),e[n].selected!==i&&(e[n].selected=i),i&&r&&(e[n].defaultSelected=!0)}else{for(n=""+H(n),t=null,i=0;i<e.length;i++){if(e[i].value===n)return e[i].selected=!0,void(r&&(e[i].defaultSelected=!0));null!==t||e[i].disabled||(t=e[i])}null!==t&&(t.selected=!0)}}function ie(e,t){if(null!=t.dangerouslySetInnerHTML)throw Error(n(91));return L({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function ae(e,t){var r=t.value;if(null==r){if(r=t.children,t=t.defaultValue,null!=r){if(null!=t)throw Error(n(92));if(ne(r)){if(1<r.length)throw Error(n(93));r=r[0]}t=r}null==t&&(t=""),r=t}e._wrapperState={initialValue:H(r)}}function oe(e,t){var n=H(t.value),r=H(t.defaultValue);null!=n&&((n=""+n)!==e.value&&(e.value=n),null==t.defaultValue&&e.defaultValue!==n&&(e.defaultValue=n)),null!=r&&(e.defaultValue=""+r)}function se(e){var t=e.textContent;t===e._wrapperState.initialValue&&""!==t&&null!==t&&(e.value=t)}function le(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function ue(e,t){return null==e||"http://www.w3.org/1999/xhtml"===e?le(t):"http://www.w3.org/2000/svg"===e&&"foreignObject"===t?"http://www.w3.org/1999/xhtml":e}var ce,de,pe=(de=function(e,t){if("http://www.w3.org/2000/svg"!==e.namespaceURI||"innerHTML"in e)e.innerHTML=t;else{for((ce=ce||document.createElement("div")).innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=ce.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}},"undefined"!=typeof MSApp&&MSApp.execUnsafeLocalFunction?function(e,t,n,r){MSApp.execUnsafeLocalFunction(function(){return de(e,t)})}:de);function he(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&3===n.nodeType)return void(n.nodeValue=t)}e.textContent=t}var fe={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},me=["Webkit","ms","Moz","O"];function ge(e,t,n){return null==t||"boolean"==typeof t||""===t?"":n||"number"!=typeof t||0===t||fe.hasOwnProperty(e)&&fe[e]?(""+t).trim():t+"px"}function xe(e,t){for(var n in e=e.style,t)if(t.hasOwnProperty(n)){var r=0===n.indexOf("--"),i=ge(n,t[n],r);"float"===n&&(n="cssFloat"),r?e.setProperty(n,i):e[n]=i}}Object.keys(fe).forEach(function(e){me.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),fe[t]=fe[e]})});var ye=L({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function be(e,t){if(t){if(ye[e]&&(null!=t.children||null!=t.dangerouslySetInnerHTML))throw Error(n(137,e));if(null!=t.dangerouslySetInnerHTML){if(null!=t.children)throw Error(n(60));if("object"!=typeof t.dangerouslySetInnerHTML||!("__html"in t.dangerouslySetInnerHTML))throw Error(n(61))}if(null!=t.style&&"object"!=typeof t.style)throw Error(n(62))}}function ve(e,t){if(-1===e.indexOf("-"))return"string"==typeof t.is;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var we=null;function ke(e){return(e=e.target||e.srcElement||window).correspondingUseElement&&(e=e.correspondingUseElement),3===e.nodeType?e.parentNode:e}var _e=null,je=null,Se=null;function Ce(e){if(e=vi(e)){if("function"!=typeof _e)throw Error(n(280));var t=e.stateNode;t&&(t=ki(t),_e(e.stateNode,e.type,t))}}function ze(e){je?Se?Se.push(e):Se=[e]:je=e}function Ee(){if(je){var e=je,t=Se;if(Se=je=null,Ce(e),t)for(e=0;e<t.length;e++)Ce(t[e])}}function $e(e,t){return e(t)}function Pe(){}var Te=!1;function Me(e,t,n){if(Te)return e(t,n);Te=!0;try{return $e(e,t,n)}finally{Te=!1,(null!==je||null!==Se)&&(Pe(),Ee())}}function Re(e,t){var r=e.stateNode;if(null===r)return null;var i=ki(r);if(null===i)return null;r=i[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(i=!i.disabled)||(i=!("button"===(e=e.type)||"input"===e||"select"===e||"textarea"===e)),e=!i;break e;default:e=!1}if(e)return null;if(r&&"function"!=typeof r)throw Error(n(231,t,typeof r));return r}var Oe=!1;if(s)try{var Ne={};Object.defineProperty(Ne,"passive",{get:function(){Oe=!0}}),window.addEventListener("test",Ne,Ne),window.removeEventListener("test",Ne,Ne)}catch(de){Oe=!1}function Ae(e,t,n,r,i,a,o,s,l){var u=Array.prototype.slice.call(arguments,3);try{t.apply(n,u)}catch(c){this.onError(c)}}var De=!1,Le=null,Ie=!1,Fe=null,We={onError:function(e){De=!0,Le=e}};function Be(e,t,n,r,i,a,o,s,l){De=!1,Le=null,Ae.apply(We,arguments)}function Ue(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do{!!(4098&(t=e).flags)&&(n=t.return),e=t.return}while(e)}return 3===t.tag?n:null}function Ye(e){if(13===e.tag){var t=e.memoizedState;if(null===t&&(null!==(e=e.alternate)&&(t=e.memoizedState)),null!==t)return t.dehydrated}return null}function He(e){if(Ue(e)!==e)throw Error(n(188))}function Ve(e){return null!==(e=function(e){var t=e.alternate;if(!t){if(null===(t=Ue(e)))throw Error(n(188));return t!==e?null:e}for(var r=e,i=t;;){var a=r.return;if(null===a)break;var o=a.alternate;if(null===o){if(null!==(i=a.return)){r=i;continue}break}if(a.child===o.child){for(o=a.child;o;){if(o===r)return He(a),e;if(o===i)return He(a),t;o=o.sibling}throw Error(n(188))}if(r.return!==i.return)r=a,i=o;else{for(var s=!1,l=a.child;l;){if(l===r){s=!0,r=a,i=o;break}if(l===i){s=!0,i=a,r=o;break}l=l.sibling}if(!s){for(l=o.child;l;){if(l===r){s=!0,r=o,i=a;break}if(l===i){s=!0,i=o,r=a;break}l=l.sibling}if(!s)throw Error(n(189))}}if(r.alternate!==i)throw Error(n(190))}if(3!==r.tag)throw Error(n(188));return r.stateNode.current===r?e:t}(e))?qe(e):null}function qe(e){if(5===e.tag||6===e.tag)return e;for(e=e.child;null!==e;){var t=qe(e);if(null!==t)return t;e=e.sibling}return null}var Qe=t.unstable_scheduleCallback,Ge=t.unstable_cancelCallback,Xe=t.unstable_shouldYield,Ke=t.unstable_requestPaint,Je=t.unstable_now,Ze=t.unstable_getCurrentPriorityLevel,et=t.unstable_ImmediatePriority,tt=t.unstable_UserBlockingPriority,nt=t.unstable_NormalPriority,rt=t.unstable_LowPriority,it=t.unstable_IdlePriority,at=null,ot=null;var st=Math.clz32?Math.clz32:function(e){return e>>>=0,0===e?32:31-(lt(e)/ut|0)|0},lt=Math.log,ut=Math.LN2;var ct=64,dt=4194304;function pt(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return 4194240&e;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return 130023424&e;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function ht(e,t){var n=e.pendingLanes;if(0===n)return 0;var r=0,i=e.suspendedLanes,a=e.pingedLanes,o=268435455&n;if(0!==o){var s=o&~i;0!==s?r=pt(s):0!==(a&=o)&&(r=pt(a))}else 0!==(o=n&~i)?r=pt(o):0!==a&&(r=pt(a));if(0===r)return 0;if(0!==t&&t!==r&&0===(t&i)&&((i=r&-r)>=(a=t&-t)||16===i&&4194240&a))return t;if(4&r&&(r|=16&n),0!==(t=e.entangledLanes))for(e=e.entanglements,t&=r;0<t;)i=1<<(n=31-st(t)),r|=e[n],t&=~i;return r}function ft(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;default:return-1}}function mt(e){return 0!==(e=-1073741825&e.pendingLanes)?e:1073741824&e?1073741824:0}function gt(){var e=ct;return!(4194240&(ct<<=1))&&(ct=64),e}function xt(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function yt(e,t,n){e.pendingLanes|=t,536870912!==t&&(e.suspendedLanes=0,e.pingedLanes=0),(e=e.eventTimes)[t=31-st(t)]=n}function bt(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-st(n),i=1<<r;i&t|e[r]&t&&(e[r]|=t),n&=~i}}var vt=0;function wt(e){return 1<(e&=-e)?4<e?268435455&e?16:536870912:4:1}var kt,_t,jt,St,Ct,zt=!1,Et=[],$t=null,Pt=null,Tt=null,Mt=new Map,Rt=new Map,Ot=[],Nt="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function At(e,t){switch(e){case"focusin":case"focusout":$t=null;break;case"dragenter":case"dragleave":Pt=null;break;case"mouseover":case"mouseout":Tt=null;break;case"pointerover":case"pointerout":Mt.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":Rt.delete(t.pointerId)}}function Dt(e,t,n,r,i,a){return null===e||e.nativeEvent!==a?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:a,targetContainers:[i]},null!==t&&(null!==(t=vi(t))&&_t(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,null!==i&&-1===t.indexOf(i)&&t.push(i),e)}function Lt(e){var t=bi(e.target);if(null!==t){var n=Ue(t);if(null!==n)if(13===(t=n.tag)){if(null!==(t=Ye(n)))return e.blockedOn=t,void Ct(e.priority,function(){jt(n)})}else if(3===t&&n.stateNode.current.memoizedState.isDehydrated)return void(e.blockedOn=3===n.tag?n.stateNode.containerInfo:null)}e.blockedOn=null}function It(e){if(null!==e.blockedOn)return!1;for(var t=e.targetContainers;0<t.length;){var n=Xt(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(null!==n)return null!==(t=vi(n))&&_t(t),e.blockedOn=n,!1;var r=new(n=e.nativeEvent).constructor(n.type,n);we=r,n.target.dispatchEvent(r),we=null,t.shift()}return!0}function Ft(e,t,n){It(e)&&n.delete(t)}function Wt(){zt=!1,null!==$t&&It($t)&&($t=null),null!==Pt&&It(Pt)&&(Pt=null),null!==Tt&&It(Tt)&&(Tt=null),Mt.forEach(Ft),Rt.forEach(Ft)}function Bt(e,n){e.blockedOn===n&&(e.blockedOn=null,zt||(zt=!0,t.unstable_scheduleCallback(t.unstable_NormalPriority,Wt)))}function Ut(e){function t(t){return Bt(t,e)}if(0<Et.length){Bt(Et[0],e);for(var n=1;n<Et.length;n++){var r=Et[n];r.blockedOn===e&&(r.blockedOn=null)}}for(null!==$t&&Bt($t,e),null!==Pt&&Bt(Pt,e),null!==Tt&&Bt(Tt,e),Mt.forEach(t),Rt.forEach(t),n=0;n<Ot.length;n++)(r=Ot[n]).blockedOn===e&&(r.blockedOn=null);for(;0<Ot.length&&null===(n=Ot[0]).blockedOn;)Lt(n),null===n.blockedOn&&Ot.shift()}var Yt=b.ReactCurrentBatchConfig,Ht=!0;function Vt(e,t,n,r){var i=vt,a=Yt.transition;Yt.transition=null;try{vt=1,Qt(e,t,n,r)}finally{vt=i,Yt.transition=a}}function qt(e,t,n,r){var i=vt,a=Yt.transition;Yt.transition=null;try{vt=4,Qt(e,t,n,r)}finally{vt=i,Yt.transition=a}}function Qt(e,t,n,r){if(Ht){var i=Xt(e,t,n,r);if(null===i)Hr(e,t,r,Gt,n),At(e,r);else if(function(e,t,n,r,i){switch(t){case"focusin":return $t=Dt($t,e,t,n,r,i),!0;case"dragenter":return Pt=Dt(Pt,e,t,n,r,i),!0;case"mouseover":return Tt=Dt(Tt,e,t,n,r,i),!0;case"pointerover":var a=i.pointerId;return Mt.set(a,Dt(Mt.get(a)||null,e,t,n,r,i)),!0;case"gotpointercapture":return a=i.pointerId,Rt.set(a,Dt(Rt.get(a)||null,e,t,n,r,i)),!0}return!1}(i,e,t,n,r))r.stopPropagation();else if(At(e,r),4&t&&-1<Nt.indexOf(e)){for(;null!==i;){var a=vi(i);if(null!==a&&kt(a),null===(a=Xt(e,t,n,r))&&Hr(e,t,r,Gt,n),a===i)break;i=a}null!==i&&r.stopPropagation()}else Hr(e,t,r,null,n)}}var Gt=null;function Xt(e,t,n,r){if(Gt=null,null!==(e=bi(e=ke(r))))if(null===(t=Ue(e)))e=null;else if(13===(n=t.tag)){if(null!==(e=Ye(t)))return e;e=null}else if(3===n){if(t.stateNode.current.memoizedState.isDehydrated)return 3===t.tag?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return Gt=e,null}function Kt(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Ze()){case et:return 1;case tt:return 4;case nt:case rt:return 16;case it:return 536870912;default:return 16}default:return 16}}var Jt=null,Zt=null,en=null;function tn(){if(en)return en;var e,t,n=Zt,r=n.length,i="value"in Jt?Jt.value:Jt.textContent,a=i.length;for(e=0;e<r&&n[e]===i[e];e++);var o=r-e;for(t=1;t<=o&&n[r-t]===i[a-t];t++);return en=i.slice(e,1<t?1-t:void 0)}function nn(e){var t=e.keyCode;return"charCode"in e?0===(e=e.charCode)&&13===t&&(e=13):e=t,10===e&&(e=13),32<=e||13===e?e:0}function rn(){return!0}function an(){return!1}function on(e){function t(t,n,r,i,a){for(var o in this._reactName=t,this._targetInst=r,this.type=n,this.nativeEvent=i,this.target=a,this.currentTarget=null,e)e.hasOwnProperty(o)&&(t=e[o],this[o]=t?t(i):i[o]);return this.isDefaultPrevented=(null!=i.defaultPrevented?i.defaultPrevented:!1===i.returnValue)?rn:an,this.isPropagationStopped=an,this}return L(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var e=this.nativeEvent;e&&(e.preventDefault?e.preventDefault():"unknown"!=typeof e.returnValue&&(e.returnValue=!1),this.isDefaultPrevented=rn)},stopPropagation:function(){var e=this.nativeEvent;e&&(e.stopPropagation?e.stopPropagation():"unknown"!=typeof e.cancelBubble&&(e.cancelBubble=!0),this.isPropagationStopped=rn)},persist:function(){},isPersistent:rn}),t}var sn,ln,un,cn={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},dn=on(cn),pn=L({},cn,{view:0,detail:0}),hn=on(pn),fn=L({},pn,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Cn,button:0,buttons:0,relatedTarget:function(e){return void 0===e.relatedTarget?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==un&&(un&&"mousemove"===e.type?(sn=e.screenX-un.screenX,ln=e.screenY-un.screenY):ln=sn=0,un=e),sn)},movementY:function(e){return"movementY"in e?e.movementY:ln}}),mn=on(fn),gn=on(L({},fn,{dataTransfer:0})),xn=on(L({},pn,{relatedTarget:0})),yn=on(L({},cn,{animationName:0,elapsedTime:0,pseudoElement:0})),bn=L({},cn,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),vn=on(bn),wn=on(L({},cn,{data:0})),kn={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},_n={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},jn={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Sn(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):!!(e=jn[e])&&!!t[e]}function Cn(){return Sn}var zn=L({},pn,{key:function(e){if(e.key){var t=kn[e.key]||e.key;if("Unidentified"!==t)return t}return"keypress"===e.type?13===(e=nn(e))?"Enter":String.fromCharCode(e):"keydown"===e.type||"keyup"===e.type?_n[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Cn,charCode:function(e){return"keypress"===e.type?nn(e):0},keyCode:function(e){return"keydown"===e.type||"keyup"===e.type?e.keyCode:0},which:function(e){return"keypress"===e.type?nn(e):"keydown"===e.type||"keyup"===e.type?e.keyCode:0}}),En=on(zn),$n=on(L({},fn,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0})),Pn=on(L({},pn,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Cn})),Tn=on(L({},cn,{propertyName:0,elapsedTime:0,pseudoElement:0})),Mn=L({},fn,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Rn=on(Mn),On=[9,13,27,32],Nn=s&&"CompositionEvent"in window,An=null;s&&"documentMode"in document&&(An=document.documentMode);var Dn=s&&"TextEvent"in window&&!An,Ln=s&&(!Nn||An&&8<An&&11>=An),In=String.fromCharCode(32),Fn=!1;function Wn(e,t){switch(e){case"keyup":return-1!==On.indexOf(t.keyCode);case"keydown":return 229!==t.keyCode;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Bn(e){return"object"==typeof(e=e.detail)&&"data"in e?e.data:null}var Un=!1;var Yn={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Hn(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return"input"===t?!!Yn[e.type]:"textarea"===t}function Vn(e,t,n,r){ze(r),0<(t=qr(t,"onChange")).length&&(n=new dn("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var qn=null,Qn=null;function Gn(e){Ir(e,0)}function Xn(e){if(Q(wi(e)))return e}function Kn(e,t){if("change"===e)return t}var Jn=!1;if(s){var Zn;if(s){var er="oninput"in document;if(!er){var tr=document.createElement("div");tr.setAttribute("oninput","return;"),er="function"==typeof tr.oninput}Zn=er}else Zn=!1;Jn=Zn&&(!document.documentMode||9<document.documentMode)}function nr(){qn&&(qn.detachEvent("onpropertychange",rr),Qn=qn=null)}function rr(e){if("value"===e.propertyName&&Xn(Qn)){var t=[];Vn(t,Qn,e,ke(e)),Me(Gn,t)}}function ir(e,t,n){"focusin"===e?(nr(),Qn=n,(qn=t).attachEvent("onpropertychange",rr)):"focusout"===e&&nr()}function ar(e){if("selectionchange"===e||"keyup"===e||"keydown"===e)return Xn(Qn)}function or(e,t){if("click"===e)return Xn(t)}function sr(e,t){if("input"===e||"change"===e)return Xn(t)}var lr="function"==typeof Object.is?Object.is:function(e,t){return e===t&&(0!==e||1/e==1/t)||e!=e&&t!=t};function ur(e,t){if(lr(e,t))return!0;if("object"!=typeof e||null===e||"object"!=typeof t||null===t)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!l.call(t,i)||!lr(e[i],t[i]))return!1}return!0}function cr(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function dr(e,t){var n,r=cr(e);for(e=0;r;){if(3===r.nodeType){if(n=e+r.textContent.length,e<=t&&n>=t)return{node:r,offset:t-e};e=n}e:{for(;r;){if(r.nextSibling){r=r.nextSibling;break e}r=r.parentNode}r=void 0}r=cr(r)}}function pr(e,t){return!(!e||!t)&&(e===t||(!e||3!==e.nodeType)&&(t&&3===t.nodeType?pr(e,t.parentNode):"contains"in e?e.contains(t):!!e.compareDocumentPosition&&!!(16&e.compareDocumentPosition(t))))}function hr(){for(var e=window,t=G();t instanceof e.HTMLIFrameElement;){try{var n="string"==typeof t.contentWindow.location.href}catch(r){n=!1}if(!n)break;t=G((e=t.contentWindow).document)}return t}function fr(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&("input"===t&&("text"===e.type||"search"===e.type||"tel"===e.type||"url"===e.type||"password"===e.type)||"textarea"===t||"true"===e.contentEditable)}function mr(e){var t=hr(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&pr(n.ownerDocument.documentElement,n)){if(null!==r&&fr(n))if(t=r.start,void 0===(e=r.end)&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if((e=(t=n.ownerDocument||document)&&t.defaultView||window).getSelection){e=e.getSelection();var i=n.textContent.length,a=Math.min(r.start,i);r=void 0===r.end?a:Math.min(r.end,i),!e.extend&&a>r&&(i=r,r=a,a=i),i=dr(n,a);var o=dr(n,r);i&&o&&(1!==e.rangeCount||e.anchorNode!==i.node||e.anchorOffset!==i.offset||e.focusNode!==o.node||e.focusOffset!==o.offset)&&((t=t.createRange()).setStart(i.node,i.offset),e.removeAllRanges(),a>r?(e.addRange(t),e.extend(o.node,o.offset)):(t.setEnd(o.node,o.offset),e.addRange(t)))}for(t=[],e=n;e=e.parentNode;)1===e.nodeType&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for("function"==typeof n.focus&&n.focus(),n=0;n<t.length;n++)(e=t[n]).element.scrollLeft=e.left,e.element.scrollTop=e.top}}var gr=s&&"documentMode"in document&&11>=document.documentMode,xr=null,yr=null,br=null,vr=!1;function wr(e,t,n){var r=n.window===n?n.document:9===n.nodeType?n:n.ownerDocument;vr||null==xr||xr!==G(r)||("selectionStart"in(r=xr)&&fr(r)?r={start:r.selectionStart,end:r.selectionEnd}:r={anchorNode:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection()).anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset},br&&ur(br,r)||(br=r,0<(r=qr(yr,"onSelect")).length&&(t=new dn("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=xr)))}function kr(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var _r={animationend:kr("Animation","AnimationEnd"),animationiteration:kr("Animation","AnimationIteration"),animationstart:kr("Animation","AnimationStart"),transitionend:kr("Transition","TransitionEnd")},jr={},Sr={};function Cr(e){if(jr[e])return jr[e];if(!_r[e])return e;var t,n=_r[e];for(t in n)if(n.hasOwnProperty(t)&&t in Sr)return jr[e]=n[t];return e}s&&(Sr=document.createElement("div").style,"AnimationEvent"in window||(delete _r.animationend.animation,delete _r.animationiteration.animation,delete _r.animationstart.animation),"TransitionEvent"in window||delete _r.transitionend.transition);var zr=Cr("animationend"),Er=Cr("animationiteration"),$r=Cr("animationstart"),Pr=Cr("transitionend"),Tr=new Map,Mr="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Rr(e,t){Tr.set(e,t),a(t,[e])}for(var Or=0;Or<Mr.length;Or++){var Nr=Mr[Or];Rr(Nr.toLowerCase(),"on"+(Nr[0].toUpperCase()+Nr.slice(1)))}Rr(zr,"onAnimationEnd"),Rr(Er,"onAnimationIteration"),Rr($r,"onAnimationStart"),Rr("dblclick","onDoubleClick"),Rr("focusin","onFocus"),Rr("focusout","onBlur"),Rr(Pr,"onTransitionEnd"),o("onMouseEnter",["mouseout","mouseover"]),o("onMouseLeave",["mouseout","mouseover"]),o("onPointerEnter",["pointerout","pointerover"]),o("onPointerLeave",["pointerout","pointerover"]),a("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),a("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),a("onBeforeInput",["compositionend","keypress","textInput","paste"]),a("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),a("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),a("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Ar="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Dr=new Set("cancel close invalid load scroll toggle".split(" ").concat(Ar));function Lr(e,t,r){var i=e.type||"unknown-event";e.currentTarget=r,function(e,t,r,i,a,o,s,l,u){if(Be.apply(this,arguments),De){if(!De)throw Error(n(198));var c=Le;De=!1,Le=null,Ie||(Ie=!0,Fe=c)}}(i,t,void 0,e),e.currentTarget=null}function Ir(e,t){t=!!(4&t);for(var n=0;n<e.length;n++){var r=e[n],i=r.event;r=r.listeners;e:{var a=void 0;if(t)for(var o=r.length-1;0<=o;o--){var s=r[o],l=s.instance,u=s.currentTarget;if(s=s.listener,l!==a&&i.isPropagationStopped())break e;Lr(i,s,u),a=l}else for(o=0;o<r.length;o++){if(l=(s=r[o]).instance,u=s.currentTarget,s=s.listener,l!==a&&i.isPropagationStopped())break e;Lr(i,s,u),a=l}}}if(Ie)throw e=Fe,Ie=!1,Fe=null,e}function Fr(e,t){var n=t[gi];void 0===n&&(n=t[gi]=new Set);var r=e+"__bubble";n.has(r)||(Yr(t,e,2,!1),n.add(r))}function Wr(e,t,n){var r=0;t&&(r|=4),Yr(n,e,r,t)}var Br="_reactListening"+Math.random().toString(36).slice(2);function Ur(e){if(!e[Br]){e[Br]=!0,r.forEach(function(t){"selectionchange"!==t&&(Dr.has(t)||Wr(t,!1,e),Wr(t,!0,e))});var t=9===e.nodeType?e:e.ownerDocument;null===t||t[Br]||(t[Br]=!0,Wr("selectionchange",!1,t))}}function Yr(e,t,n,r){switch(Kt(t)){case 1:var i=Vt;break;case 4:i=qt;break;default:i=Qt}n=i.bind(null,t,n,e),i=void 0,!Oe||"touchstart"!==t&&"touchmove"!==t&&"wheel"!==t||(i=!0),r?void 0!==i?e.addEventListener(t,n,{capture:!0,passive:i}):e.addEventListener(t,n,!0):void 0!==i?e.addEventListener(t,n,{passive:i}):e.addEventListener(t,n,!1)}function Hr(e,t,n,r,i){var a=r;if(!(1&t||2&t||null===r))e:for(;;){if(null===r)return;var o=r.tag;if(3===o||4===o){var s=r.stateNode.containerInfo;if(s===i||8===s.nodeType&&s.parentNode===i)break;if(4===o)for(o=r.return;null!==o;){var l=o.tag;if((3===l||4===l)&&((l=o.stateNode.containerInfo)===i||8===l.nodeType&&l.parentNode===i))return;o=o.return}for(;null!==s;){if(null===(o=bi(s)))return;if(5===(l=o.tag)||6===l){r=a=o;continue e}s=s.parentNode}}r=r.return}Me(function(){var r=a,i=ke(n),o=[];e:{var s=Tr.get(e);if(void 0!==s){var l=dn,u=e;switch(e){case"keypress":if(0===nn(n))break e;case"keydown":case"keyup":l=En;break;case"focusin":u="focus",l=xn;break;case"focusout":u="blur",l=xn;break;case"beforeblur":case"afterblur":l=xn;break;case"click":if(2===n.button)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":l=mn;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":l=gn;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":l=Pn;break;case zr:case Er:case $r:l=yn;break;case Pr:l=Tn;break;case"scroll":l=hn;break;case"wheel":l=Rn;break;case"copy":case"cut":case"paste":l=vn;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":l=$n}var c=!!(4&t),d=!c&&"scroll"===e,p=c?null!==s?s+"Capture":null:s;c=[];for(var h,f=r;null!==f;){var m=(h=f).stateNode;if(5===h.tag&&null!==m&&(h=m,null!==p&&(null!=(m=Re(f,p))&&c.push(Vr(f,m,h)))),d)break;f=f.return}0<c.length&&(s=new l(s,u,null,n,i),o.push({event:s,listeners:c}))}}if(!(7&t)){if(l="mouseout"===e||"pointerout"===e,(!(s="mouseover"===e||"pointerover"===e)||n===we||!(u=n.relatedTarget||n.fromElement)||!bi(u)&&!u[mi])&&(l||s)&&(s=i.window===i?i:(s=i.ownerDocument)?s.defaultView||s.parentWindow:window,l?(l=r,null!==(u=(u=n.relatedTarget||n.toElement)?bi(u):null)&&(u!==(d=Ue(u))||5!==u.tag&&6!==u.tag)&&(u=null)):(l=null,u=r),l!==u)){if(c=mn,m="onMouseLeave",p="onMouseEnter",f="mouse","pointerout"!==e&&"pointerover"!==e||(c=$n,m="onPointerLeave",p="onPointerEnter",f="pointer"),d=null==l?s:wi(l),h=null==u?s:wi(u),(s=new c(m,f+"leave",l,n,i)).target=d,s.relatedTarget=h,m=null,bi(i)===r&&((c=new c(p,f+"enter",u,n,i)).target=h,c.relatedTarget=d,m=c),d=m,l&&u)e:{for(p=u,f=0,h=c=l;h;h=Qr(h))f++;for(h=0,m=p;m;m=Qr(m))h++;for(;0<f-h;)c=Qr(c),f--;for(;0<h-f;)p=Qr(p),h--;for(;f--;){if(c===p||null!==p&&c===p.alternate)break e;c=Qr(c),p=Qr(p)}c=null}else c=null;null!==l&&Gr(o,s,l,c,!1),null!==u&&null!==d&&Gr(o,d,u,c,!0)}if("select"===(l=(s=r?wi(r):window).nodeName&&s.nodeName.toLowerCase())||"input"===l&&"file"===s.type)var g=Kn;else if(Hn(s))if(Jn)g=sr;else{g=ar;var x=ir}else(l=s.nodeName)&&"input"===l.toLowerCase()&&("checkbox"===s.type||"radio"===s.type)&&(g=or);switch(g&&(g=g(e,r))?Vn(o,g,n,i):(x&&x(e,s,r),"focusout"===e&&(x=s._wrapperState)&&x.controlled&&"number"===s.type&&te(s,"number",s.value)),x=r?wi(r):window,e){case"focusin":(Hn(x)||"true"===x.contentEditable)&&(xr=x,yr=r,br=null);break;case"focusout":br=yr=xr=null;break;case"mousedown":vr=!0;break;case"contextmenu":case"mouseup":case"dragend":vr=!1,wr(o,n,i);break;case"selectionchange":if(gr)break;case"keydown":case"keyup":wr(o,n,i)}var y;if(Nn)e:{switch(e){case"compositionstart":var b="onCompositionStart";break e;case"compositionend":b="onCompositionEnd";break e;case"compositionupdate":b="onCompositionUpdate";break e}b=void 0}else Un?Wn(e,n)&&(b="onCompositionEnd"):"keydown"===e&&229===n.keyCode&&(b="onCompositionStart");b&&(Ln&&"ko"!==n.locale&&(Un||"onCompositionStart"!==b?"onCompositionEnd"===b&&Un&&(y=tn()):(Zt="value"in(Jt=i)?Jt.value:Jt.textContent,Un=!0)),0<(x=qr(r,b)).length&&(b=new wn(b,e,null,n,i),o.push({event:b,listeners:x}),y?b.data=y:null!==(y=Bn(n))&&(b.data=y))),(y=Dn?function(e,t){switch(e){case"compositionend":return Bn(t);case"keypress":return 32!==t.which?null:(Fn=!0,In);case"textInput":return(e=t.data)===In&&Fn?null:e;default:return null}}(e,n):function(e,t){if(Un)return"compositionend"===e||!Nn&&Wn(e,t)?(e=tn(),en=Zt=Jt=null,Un=!1,e):null;switch(e){case"paste":default:return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return Ln&&"ko"!==t.locale?null:t.data}}(e,n))&&(0<(r=qr(r,"onBeforeInput")).length&&(i=new wn("onBeforeInput","beforeinput",null,n,i),o.push({event:i,listeners:r}),i.data=y))}Ir(o,t)})}function Vr(e,t,n){return{instance:e,listener:t,currentTarget:n}}function qr(e,t){for(var n=t+"Capture",r=[];null!==e;){var i=e,a=i.stateNode;5===i.tag&&null!==a&&(i=a,null!=(a=Re(e,n))&&r.unshift(Vr(e,a,i)),null!=(a=Re(e,t))&&r.push(Vr(e,a,i))),e=e.return}return r}function Qr(e){if(null===e)return null;do{e=e.return}while(e&&5!==e.tag);return e||null}function Gr(e,t,n,r,i){for(var a=t._reactName,o=[];null!==n&&n!==r;){var s=n,l=s.alternate,u=s.stateNode;if(null!==l&&l===r)break;5===s.tag&&null!==u&&(s=u,i?null!=(l=Re(n,a))&&o.unshift(Vr(n,l,s)):i||null!=(l=Re(n,a))&&o.push(Vr(n,l,s))),n=n.return}0!==o.length&&e.push({event:t,listeners:o})}var Xr=/\r\n?/g,Kr=/\u0000|\uFFFD/g;function Jr(e){return("string"==typeof e?e:""+e).replace(Xr,"\n").replace(Kr,"")}function Zr(e,t,r){if(t=Jr(t),Jr(e)!==t&&r)throw Error(n(425))}function ei(){}var ti=null,ni=null;function ri(e,t){return"textarea"===e||"noscript"===e||"string"==typeof t.children||"number"==typeof t.children||"object"==typeof t.dangerouslySetInnerHTML&&null!==t.dangerouslySetInnerHTML&&null!=t.dangerouslySetInnerHTML.__html}var ii="function"==typeof setTimeout?setTimeout:void 0,ai="function"==typeof clearTimeout?clearTimeout:void 0,oi="function"==typeof Promise?Promise:void 0,si="function"==typeof queueMicrotask?queueMicrotask:void 0!==oi?function(e){return oi.resolve(null).then(e).catch(li)}:ii;function li(e){setTimeout(function(){throw e})}function ui(e,t){var n=t,r=0;do{var i=n.nextSibling;if(e.removeChild(n),i&&8===i.nodeType)if("/$"===(n=i.data)){if(0===r)return e.removeChild(i),void Ut(t);r--}else"$"!==n&&"$?"!==n&&"$!"!==n||r++;n=i}while(n);Ut(t)}function ci(e){for(;null!=e;e=e.nextSibling){var t=e.nodeType;if(1===t||3===t)break;if(8===t){if("$"===(t=e.data)||"$!"===t||"$?"===t)break;if("/$"===t)return null}}return e}function di(e){e=e.previousSibling;for(var t=0;e;){if(8===e.nodeType){var n=e.data;if("$"===n||"$!"===n||"$?"===n){if(0===t)return e;t--}else"/$"===n&&t++}e=e.previousSibling}return null}var pi=Math.random().toString(36).slice(2),hi="__reactFiber$"+pi,fi="__reactProps$"+pi,mi="__reactContainer$"+pi,gi="__reactEvents$"+pi,xi="__reactListeners$"+pi,yi="__reactHandles$"+pi;function bi(e){var t=e[hi];if(t)return t;for(var n=e.parentNode;n;){if(t=n[mi]||n[hi]){if(n=t.alternate,null!==t.child||null!==n&&null!==n.child)for(e=di(e);null!==e;){if(n=e[hi])return n;e=di(e)}return t}n=(e=n).parentNode}return null}function vi(e){return!(e=e[hi]||e[mi])||5!==e.tag&&6!==e.tag&&13!==e.tag&&3!==e.tag?null:e}function wi(e){if(5===e.tag||6===e.tag)return e.stateNode;throw Error(n(33))}function ki(e){return e[fi]||null}var _i=[],ji=-1;function Si(e){return{current:e}}function Ci(e){0>ji||(e.current=_i[ji],_i[ji]=null,ji--)}function zi(e,t){ji++,_i[ji]=e.current,e.current=t}var Ei={},$i=Si(Ei),Pi=Si(!1),Ti=Ei;function Mi(e,t){var n=e.type.contextTypes;if(!n)return Ei;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var i,a={};for(i in n)a[i]=t[i];return r&&((e=e.stateNode).__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=a),a}function Ri(e){return null!=(e=e.childContextTypes)}function Oi(){Ci(Pi),Ci($i)}function Ni(e,t,r){if($i.current!==Ei)throw Error(n(168));zi($i,t),zi(Pi,r)}function Ai(e,t,r){var i=e.stateNode;if(t=t.childContextTypes,"function"!=typeof i.getChildContext)return r;for(var a in i=i.getChildContext())if(!(a in t))throw Error(n(108,Y(e)||"Unknown",a));return L({},r,i)}function Di(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||Ei,Ti=$i.current,zi($i,e),zi(Pi,Pi.current),!0}function Li(e,t,r){var i=e.stateNode;if(!i)throw Error(n(169));r?(e=Ai(e,t,Ti),i.__reactInternalMemoizedMergedChildContext=e,Ci(Pi),Ci($i),zi($i,e)):Ci(Pi),zi(Pi,r)}var Ii=null,Fi=!1,Wi=!1;function Bi(e){null===Ii?Ii=[e]:Ii.push(e)}function Ui(){if(!Wi&&null!==Ii){Wi=!0;var e=0,t=vt;try{var n=Ii;for(vt=1;e<n.length;e++){var r=n[e];do{r=r(!0)}while(null!==r)}Ii=null,Fi=!1}catch(i){throw null!==Ii&&(Ii=Ii.slice(e+1)),Qe(et,Ui),i}finally{vt=t,Wi=!1}}return null}var Yi=[],Hi=0,Vi=null,qi=0,Qi=[],Gi=0,Xi=null,Ki=1,Ji="";function Zi(e,t){Yi[Hi++]=qi,Yi[Hi++]=Vi,Vi=e,qi=t}function ea(e,t,n){Qi[Gi++]=Ki,Qi[Gi++]=Ji,Qi[Gi++]=Xi,Xi=e;var r=Ki;e=Ji;var i=32-st(r)-1;r&=~(1<<i),n+=1;var a=32-st(t)+i;if(30<a){var o=i-i%5;a=(r&(1<<o)-1).toString(32),r>>=o,i-=o,Ki=1<<32-st(t)+i|n<<i|r,Ji=a+e}else Ki=1<<a|n<<i|r,Ji=e}function ta(e){null!==e.return&&(Zi(e,1),ea(e,1,0))}function na(e){for(;e===Vi;)Vi=Yi[--Hi],Yi[Hi]=null,qi=Yi[--Hi],Yi[Hi]=null;for(;e===Xi;)Xi=Qi[--Gi],Qi[Gi]=null,Ji=Qi[--Gi],Qi[Gi]=null,Ki=Qi[--Gi],Qi[Gi]=null}var ra=null,ia=null,aa=!1,oa=null;function sa(e,t){var n=Mu(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,null===(t=e.deletions)?(e.deletions=[n],e.flags|=16):t.push(n)}function la(e,t){switch(e.tag){case 5:var n=e.type;return null!==(t=1!==t.nodeType||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t)&&(e.stateNode=t,ra=e,ia=ci(t.firstChild),!0);case 6:return null!==(t=""===e.pendingProps||3!==t.nodeType?null:t)&&(e.stateNode=t,ra=e,ia=null,!0);case 13:return null!==(t=8!==t.nodeType?null:t)&&(n=null!==Xi?{id:Ki,overflow:Ji}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},(n=Mu(18,null,null,0)).stateNode=t,n.return=e,e.child=n,ra=e,ia=null,!0);default:return!1}}function ua(e){return!(!(1&e.mode)||128&e.flags)}function ca(e){if(aa){var t=ia;if(t){var r=t;if(!la(e,t)){if(ua(e))throw Error(n(418));t=ci(r.nextSibling);var i=ra;t&&la(e,t)?sa(i,r):(e.flags=-4097&e.flags|2,aa=!1,ra=e)}}else{if(ua(e))throw Error(n(418));e.flags=-4097&e.flags|2,aa=!1,ra=e}}}function da(e){for(e=e.return;null!==e&&5!==e.tag&&3!==e.tag&&13!==e.tag;)e=e.return;ra=e}function pa(e){if(e!==ra)return!1;if(!aa)return da(e),aa=!0,!1;var t;if((t=3!==e.tag)&&!(t=5!==e.tag)&&(t="head"!==(t=e.type)&&"body"!==t&&!ri(e.type,e.memoizedProps)),t&&(t=ia)){if(ua(e))throw ha(),Error(n(418));for(;t;)sa(e,t),t=ci(t.nextSibling)}if(da(e),13===e.tag){if(!(e=null!==(e=e.memoizedState)?e.dehydrated:null))throw Error(n(317));e:{for(e=e.nextSibling,t=0;e;){if(8===e.nodeType){var r=e.data;if("/$"===r){if(0===t){ia=ci(e.nextSibling);break e}t--}else"$"!==r&&"$!"!==r&&"$?"!==r||t++}e=e.nextSibling}ia=null}}else ia=ra?ci(e.stateNode.nextSibling):null;return!0}function ha(){for(var e=ia;e;)e=ci(e.nextSibling)}function fa(){ia=ra=null,aa=!1}function ma(e){null===oa?oa=[e]:oa.push(e)}var ga=b.ReactCurrentBatchConfig;function xa(e,t,r){if(null!==(e=r.ref)&&"function"!=typeof e&&"object"!=typeof e){if(r._owner){if(r=r._owner){if(1!==r.tag)throw Error(n(309));var i=r.stateNode}if(!i)throw Error(n(147,e));var a=i,o=""+e;return null!==t&&null!==t.ref&&"function"==typeof t.ref&&t.ref._stringRef===o?t.ref:((t=function(e){var t=a.refs;null===e?delete t[o]:t[o]=e})._stringRef=o,t)}if("string"!=typeof e)throw Error(n(284));if(!r._owner)throw Error(n(290,e))}return e}function ya(e,t){throw e=Object.prototype.toString.call(t),Error(n(31,"[object Object]"===e?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function ba(e){return(0,e._init)(e._payload)}function va(e){function t(t,n){if(e){var r=t.deletions;null===r?(t.deletions=[n],t.flags|=16):r.push(n)}}function r(n,r){if(!e)return null;for(;null!==r;)t(n,r),r=r.sibling;return null}function i(e,t){for(e=new Map;null!==t;)null!==t.key?e.set(t.key,t):e.set(t.index,t),t=t.sibling;return e}function a(e,t){return(e=Ou(e,t)).index=0,e.sibling=null,e}function o(t,n,r){return t.index=r,e?null!==(r=t.alternate)?(r=r.index)<n?(t.flags|=2,n):r:(t.flags|=2,n):(t.flags|=1048576,n)}function s(t){return e&&null===t.alternate&&(t.flags|=2),t}function l(e,t,n,r){return null===t||6!==t.tag?((t=Lu(n,e.mode,r)).return=e,t):((t=a(t,n)).return=e,t)}function u(e,t,n,r){var i=n.type;return i===_?d(e,t,n.props.children,r,n.key):null!==t&&(t.elementType===i||"object"==typeof i&&null!==i&&i.$$typeof===R&&ba(i)===t.type)?((r=a(t,n.props)).ref=xa(e,t,n),r.return=e,r):((r=Nu(n.type,n.key,n.props,null,e.mode,r)).ref=xa(e,t,n),r.return=e,r)}function c(e,t,n,r){return null===t||4!==t.tag||t.stateNode.containerInfo!==n.containerInfo||t.stateNode.implementation!==n.implementation?((t=Iu(n,e.mode,r)).return=e,t):((t=a(t,n.children||[])).return=e,t)}function d(e,t,n,r,i){return null===t||7!==t.tag?((t=Au(n,e.mode,r,i)).return=e,t):((t=a(t,n)).return=e,t)}function p(e,t,n){if("string"==typeof t&&""!==t||"number"==typeof t)return(t=Lu(""+t,e.mode,n)).return=e,t;if("object"==typeof t&&null!==t){switch(t.$$typeof){case v:return(n=Nu(t.type,t.key,t.props,null,e.mode,n)).ref=xa(e,null,t),n.return=e,n;case k:return(t=Iu(t,e.mode,n)).return=e,t;case R:return p(e,(0,t._init)(t._payload),n)}if(ne(t)||A(t))return(t=Au(t,e.mode,n,null)).return=e,t;ya(e,t)}return null}function h(e,t,n,r){var i=null!==t?t.key:null;if("string"==typeof n&&""!==n||"number"==typeof n)return null!==i?null:l(e,t,""+n,r);if("object"==typeof n&&null!==n){switch(n.$$typeof){case v:return n.key===i?u(e,t,n,r):null;case k:return n.key===i?c(e,t,n,r):null;case R:return h(e,t,(i=n._init)(n._payload),r)}if(ne(n)||A(n))return null!==i?null:d(e,t,n,r,null);ya(e,n)}return null}function f(e,t,n,r,i){if("string"==typeof r&&""!==r||"number"==typeof r)return l(t,e=e.get(n)||null,""+r,i);if("object"==typeof r&&null!==r){switch(r.$$typeof){case v:return u(t,e=e.get(null===r.key?n:r.key)||null,r,i);case k:return c(t,e=e.get(null===r.key?n:r.key)||null,r,i);case R:return f(e,t,n,(0,r._init)(r._payload),i)}if(ne(r)||A(r))return d(t,e=e.get(n)||null,r,i,null);ya(t,r)}return null}return function l(u,c,d,m){if("object"==typeof d&&null!==d&&d.type===_&&null===d.key&&(d=d.props.children),"object"==typeof d&&null!==d){switch(d.$$typeof){case v:e:{for(var g=d.key,x=c;null!==x;){if(x.key===g){if((g=d.type)===_){if(7===x.tag){r(u,x.sibling),(c=a(x,d.props.children)).return=u,u=c;break e}}else if(x.elementType===g||"object"==typeof g&&null!==g&&g.$$typeof===R&&ba(g)===x.type){r(u,x.sibling),(c=a(x,d.props)).ref=xa(u,x,d),c.return=u,u=c;break e}r(u,x);break}t(u,x),x=x.sibling}d.type===_?((c=Au(d.props.children,u.mode,m,d.key)).return=u,u=c):((m=Nu(d.type,d.key,d.props,null,u.mode,m)).ref=xa(u,c,d),m.return=u,u=m)}return s(u);case k:e:{for(x=d.key;null!==c;){if(c.key===x){if(4===c.tag&&c.stateNode.containerInfo===d.containerInfo&&c.stateNode.implementation===d.implementation){r(u,c.sibling),(c=a(c,d.children||[])).return=u,u=c;break e}r(u,c);break}t(u,c),c=c.sibling}(c=Iu(d,u.mode,m)).return=u,u=c}return s(u);case R:return l(u,c,(x=d._init)(d._payload),m)}if(ne(d))return function(n,a,s,l){for(var u=null,c=null,d=a,m=a=0,g=null;null!==d&&m<s.length;m++){d.index>m?(g=d,d=null):g=d.sibling;var x=h(n,d,s[m],l);if(null===x){null===d&&(d=g);break}e&&d&&null===x.alternate&&t(n,d),a=o(x,a,m),null===c?u=x:c.sibling=x,c=x,d=g}if(m===s.length)return r(n,d),aa&&Zi(n,m),u;if(null===d){for(;m<s.length;m++)null!==(d=p(n,s[m],l))&&(a=o(d,a,m),null===c?u=d:c.sibling=d,c=d);return aa&&Zi(n,m),u}for(d=i(n,d);m<s.length;m++)null!==(g=f(d,n,m,s[m],l))&&(e&&null!==g.alternate&&d.delete(null===g.key?m:g.key),a=o(g,a,m),null===c?u=g:c.sibling=g,c=g);return e&&d.forEach(function(e){return t(n,e)}),aa&&Zi(n,m),u}(u,c,d,m);if(A(d))return function(a,s,l,u){var c=A(l);if("function"!=typeof c)throw Error(n(150));if(null==(l=c.call(l)))throw Error(n(151));for(var d=c=null,m=s,g=s=0,x=null,y=l.next();null!==m&&!y.done;g++,y=l.next()){m.index>g?(x=m,m=null):x=m.sibling;var b=h(a,m,y.value,u);if(null===b){null===m&&(m=x);break}e&&m&&null===b.alternate&&t(a,m),s=o(b,s,g),null===d?c=b:d.sibling=b,d=b,m=x}if(y.done)return r(a,m),aa&&Zi(a,g),c;if(null===m){for(;!y.done;g++,y=l.next())null!==(y=p(a,y.value,u))&&(s=o(y,s,g),null===d?c=y:d.sibling=y,d=y);return aa&&Zi(a,g),c}for(m=i(a,m);!y.done;g++,y=l.next())null!==(y=f(m,a,g,y.value,u))&&(e&&null!==y.alternate&&m.delete(null===y.key?g:y.key),s=o(y,s,g),null===d?c=y:d.sibling=y,d=y);return e&&m.forEach(function(e){return t(a,e)}),aa&&Zi(a,g),c}(u,c,d,m);ya(u,d)}return"string"==typeof d&&""!==d||"number"==typeof d?(d=""+d,null!==c&&6===c.tag?(r(u,c.sibling),(c=a(c,d)).return=u,u=c):(r(u,c),(c=Lu(d,u.mode,m)).return=u,u=c),s(u)):r(u,c)}}var wa=va(!0),ka=va(!1),_a=Si(null),ja=null,Sa=null,Ca=null;function za(){Ca=Sa=ja=null}function Ea(e){var t=_a.current;Ci(_a),e._currentValue=t}function $a(e,t,n){for(;null!==e;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,null!==r&&(r.childLanes|=t)):null!==r&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function Pa(e,t){ja=e,Ca=Sa=null,null!==(e=e.dependencies)&&null!==e.firstContext&&(0!==(e.lanes&t)&&(vs=!0),e.firstContext=null)}function Ta(e){var t=e._currentValue;if(Ca!==e)if(e={context:e,memoizedValue:t,next:null},null===Sa){if(null===ja)throw Error(n(308));Sa=e,ja.dependencies={lanes:0,firstContext:e}}else Sa=Sa.next=e;return t}var Ma=null;function Ra(e){null===Ma?Ma=[e]:Ma.push(e)}function Oa(e,t,n,r){var i=t.interleaved;return null===i?(n.next=n,Ra(t)):(n.next=i.next,i.next=n),t.interleaved=n,Na(e,r)}function Na(e,t){e.lanes|=t;var n=e.alternate;for(null!==n&&(n.lanes|=t),n=e,e=e.return;null!==e;)e.childLanes|=t,null!==(n=e.alternate)&&(n.childLanes|=t),n=e,e=e.return;return 3===n.tag?n.stateNode:null}var Aa=!1;function Da(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function La(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function Ia(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function Fa(e,t,n){var r=e.updateQueue;if(null===r)return null;if(r=r.shared,2&$l){var i=r.pending;return null===i?t.next=t:(t.next=i.next,i.next=t),r.pending=t,Na(e,n)}return null===(i=r.interleaved)?(t.next=t,Ra(r)):(t.next=i.next,i.next=t),r.interleaved=t,Na(e,n)}function Wa(e,t,n){if(null!==(t=t.updateQueue)&&(t=t.shared,4194240&n)){var r=t.lanes;n|=r&=e.pendingLanes,t.lanes=n,bt(e,n)}}function Ba(e,t){var n=e.updateQueue,r=e.alternate;if(null!==r&&n===(r=r.updateQueue)){var i=null,a=null;if(null!==(n=n.firstBaseUpdate)){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};null===a?i=a=o:a=a.next=o,n=n.next}while(null!==n);null===a?i=a=t:a=a.next=t}else i=a=t;return n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:a,shared:r.shared,effects:r.effects},void(e.updateQueue=n)}null===(e=n.lastBaseUpdate)?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function Ua(e,t,n,r){var i=e.updateQueue;Aa=!1;var a=i.firstBaseUpdate,o=i.lastBaseUpdate,s=i.shared.pending;if(null!==s){i.shared.pending=null;var l=s,u=l.next;l.next=null,null===o?a=u:o.next=u,o=l;var c=e.alternate;null!==c&&((s=(c=c.updateQueue).lastBaseUpdate)!==o&&(null===s?c.firstBaseUpdate=u:s.next=u,c.lastBaseUpdate=l))}if(null!==a){var d=i.baseState;for(o=0,c=u=l=null,s=a;;){var p=s.lane,h=s.eventTime;if((r&p)===p){null!==c&&(c=c.next={eventTime:h,lane:0,tag:s.tag,payload:s.payload,callback:s.callback,next:null});e:{var f=e,m=s;switch(p=t,h=n,m.tag){case 1:if("function"==typeof(f=m.payload)){d=f.call(h,d,p);break e}d=f;break e;case 3:f.flags=-65537&f.flags|128;case 0:if(null==(p="function"==typeof(f=m.payload)?f.call(h,d,p):f))break e;d=L({},d,p);break e;case 2:Aa=!0}}null!==s.callback&&0!==s.lane&&(e.flags|=64,null===(p=i.effects)?i.effects=[s]:p.push(s))}else h={eventTime:h,lane:p,tag:s.tag,payload:s.payload,callback:s.callback,next:null},null===c?(u=c=h,l=d):c=c.next=h,o|=p;if(null===(s=s.next)){if(null===(s=i.shared.pending))break;s=(p=s).next,p.next=null,i.lastBaseUpdate=p,i.shared.pending=null}}if(null===c&&(l=d),i.baseState=l,i.firstBaseUpdate=u,i.lastBaseUpdate=c,null!==(t=i.shared.interleaved)){i=t;do{o|=i.lane,i=i.next}while(i!==t)}else null===a&&(i.shared.lanes=0);Dl|=o,e.lanes=o,e.memoizedState=d}}function Ya(e,t,r){if(e=t.effects,t.effects=null,null!==e)for(t=0;t<e.length;t++){var i=e[t],a=i.callback;if(null!==a){if(i.callback=null,i=r,"function"!=typeof a)throw Error(n(191,a));a.call(i)}}}var Ha={},Va=Si(Ha),qa=Si(Ha),Qa=Si(Ha);function Ga(e){if(e===Ha)throw Error(n(174));return e}function Xa(e,t){switch(zi(Qa,t),zi(qa,e),zi(Va,Ha),e=t.nodeType){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:ue(null,"");break;default:t=ue(t=(e=8===e?t.parentNode:t).namespaceURI||null,e=e.tagName)}Ci(Va),zi(Va,t)}function Ka(){Ci(Va),Ci(qa),Ci(Qa)}function Ja(e){Ga(Qa.current);var t=Ga(Va.current),n=ue(t,e.type);t!==n&&(zi(qa,e),zi(Va,n))}function Za(e){qa.current===e&&(Ci(Va),Ci(qa))}var eo=Si(0);function to(e){for(var t=e;null!==t;){if(13===t.tag){var n=t.memoizedState;if(null!==n&&(null===(n=n.dehydrated)||"$?"===n.data||"$!"===n.data))return t}else if(19===t.tag&&void 0!==t.memoizedProps.revealOrder){if(128&t.flags)return t}else if(null!==t.child){t.child.return=t,t=t.child;continue}if(t===e)break;for(;null===t.sibling;){if(null===t.return||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var no=[];function ro(){for(var e=0;e<no.length;e++)no[e]._workInProgressVersionPrimary=null;no.length=0}var io=b.ReactCurrentDispatcher,ao=b.ReactCurrentBatchConfig,oo=0,so=null,lo=null,uo=null,co=!1,po=!1,ho=0,fo=0;function mo(){throw Error(n(321))}function go(e,t){if(null===t)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!lr(e[n],t[n]))return!1;return!0}function xo(e,t,r,i,a,o){if(oo=o,so=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,io.current=null===e||null===e.memoizedState?es:ts,e=r(i,a),po){o=0;do{if(po=!1,ho=0,25<=o)throw Error(n(301));o+=1,uo=lo=null,t.updateQueue=null,io.current=ns,e=r(i,a)}while(po)}if(io.current=Zo,t=null!==lo&&null!==lo.next,oo=0,uo=lo=so=null,co=!1,t)throw Error(n(300));return e}function yo(){var e=0!==ho;return ho=0,e}function bo(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return null===uo?so.memoizedState=uo=e:uo=uo.next=e,uo}function vo(){if(null===lo){var e=so.alternate;e=null!==e?e.memoizedState:null}else e=lo.next;var t=null===uo?so.memoizedState:uo.next;if(null!==t)uo=t,lo=e;else{if(null===e)throw Error(n(310));e={memoizedState:(lo=e).memoizedState,baseState:lo.baseState,baseQueue:lo.baseQueue,queue:lo.queue,next:null},null===uo?so.memoizedState=uo=e:uo=uo.next=e}return uo}function wo(e,t){return"function"==typeof t?t(e):t}function ko(e){var t=vo(),r=t.queue;if(null===r)throw Error(n(311));r.lastRenderedReducer=e;var i=lo,a=i.baseQueue,o=r.pending;if(null!==o){if(null!==a){var s=a.next;a.next=o.next,o.next=s}i.baseQueue=a=o,r.pending=null}if(null!==a){o=a.next,i=i.baseState;var l=s=null,u=null,c=o;do{var d=c.lane;if((oo&d)===d)null!==u&&(u=u.next={lane:0,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),i=c.hasEagerState?c.eagerState:e(i,c.action);else{var p={lane:d,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null};null===u?(l=u=p,s=i):u=u.next=p,so.lanes|=d,Dl|=d}c=c.next}while(null!==c&&c!==o);null===u?s=i:u.next=l,lr(i,t.memoizedState)||(vs=!0),t.memoizedState=i,t.baseState=s,t.baseQueue=u,r.lastRenderedState=i}if(null!==(e=r.interleaved)){a=e;do{o=a.lane,so.lanes|=o,Dl|=o,a=a.next}while(a!==e)}else null===a&&(r.lanes=0);return[t.memoizedState,r.dispatch]}function _o(e){var t=vo(),r=t.queue;if(null===r)throw Error(n(311));r.lastRenderedReducer=e;var i=r.dispatch,a=r.pending,o=t.memoizedState;if(null!==a){r.pending=null;var s=a=a.next;do{o=e(o,s.action),s=s.next}while(s!==a);lr(o,t.memoizedState)||(vs=!0),t.memoizedState=o,null===t.baseQueue&&(t.baseState=o),r.lastRenderedState=o}return[o,i]}function jo(){}function So(e,t){var r=so,i=vo(),a=t(),o=!lr(i.memoizedState,a);if(o&&(i.memoizedState=a,vs=!0),i=i.queue,Do(Eo.bind(null,r,i,e),[e]),i.getSnapshot!==t||o||null!==uo&&1&uo.memoizedState.tag){if(r.flags|=2048,Mo(9,zo.bind(null,r,i,a,t),void 0,null),null===Pl)throw Error(n(349));30&oo||Co(r,t,a)}return a}function Co(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},null===(t=so.updateQueue)?(t={lastEffect:null,stores:null},so.updateQueue=t,t.stores=[e]):null===(n=t.stores)?t.stores=[e]:n.push(e)}function zo(e,t,n,r){t.value=n,t.getSnapshot=r,$o(t)&&Po(e)}function Eo(e,t,n){return n(function(){$o(t)&&Po(e)})}function $o(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!lr(e,n)}catch(r){return!0}}function Po(e){var t=Na(e,1);null!==t&&ru(t,e,1,-1)}function To(e){var t=bo();return"function"==typeof e&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:wo,lastRenderedState:e},t.queue=e,e=e.dispatch=Go.bind(null,so,e),[t.memoizedState,e]}function Mo(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},null===(t=so.updateQueue)?(t={lastEffect:null,stores:null},so.updateQueue=t,t.lastEffect=e.next=e):null===(n=t.lastEffect)?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e),e}function Ro(){return vo().memoizedState}function Oo(e,t,n,r){var i=bo();so.flags|=e,i.memoizedState=Mo(1|t,n,void 0,void 0===r?null:r)}function No(e,t,n,r){var i=vo();r=void 0===r?null:r;var a=void 0;if(null!==lo){var o=lo.memoizedState;if(a=o.destroy,null!==r&&go(r,o.deps))return void(i.memoizedState=Mo(t,n,a,r))}so.flags|=e,i.memoizedState=Mo(1|t,n,a,r)}function Ao(e,t){return Oo(8390656,8,e,t)}function Do(e,t){return No(2048,8,e,t)}function Lo(e,t){return No(4,2,e,t)}function Io(e,t){return No(4,4,e,t)}function Fo(e,t){return"function"==typeof t?(e=e(),t(e),function(){t(null)}):null!=t?(e=e(),t.current=e,function(){t.current=null}):void 0}function Wo(e,t,n){return n=null!=n?n.concat([e]):null,No(4,4,Fo.bind(null,t,e),n)}function Bo(){}function Uo(e,t){var n=vo();t=void 0===t?null:t;var r=n.memoizedState;return null!==r&&null!==t&&go(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function Yo(e,t){var n=vo();t=void 0===t?null:t;var r=n.memoizedState;return null!==r&&null!==t&&go(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function Ho(e,t,n){return 21&oo?(lr(n,t)||(n=gt(),so.lanes|=n,Dl|=n,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,vs=!0),e.memoizedState=n)}function Vo(e,t){var n=vt;vt=0!==n&&4>n?n:4,e(!0);var r=ao.transition;ao.transition={};try{e(!1),t()}finally{vt=n,ao.transition=r}}function qo(){return vo().memoizedState}function Qo(e,t,n){var r=nu(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},Xo(e))Ko(t,n);else if(null!==(n=Oa(e,t,n,r))){ru(n,e,r,tu()),Jo(n,t,r)}}function Go(e,t,n){var r=nu(e),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(Xo(e))Ko(t,i);else{var a=e.alternate;if(0===e.lanes&&(null===a||0===a.lanes)&&null!==(a=t.lastRenderedReducer))try{var o=t.lastRenderedState,s=a(o,n);if(i.hasEagerState=!0,i.eagerState=s,lr(s,o)){var l=t.interleaved;return null===l?(i.next=i,Ra(t)):(i.next=l.next,l.next=i),void(t.interleaved=i)}}catch(u){}null!==(n=Oa(e,t,i,r))&&(ru(n,e,r,i=tu()),Jo(n,t,r))}}function Xo(e){var t=e.alternate;return e===so||null!==t&&t===so}function Ko(e,t){po=co=!0;var n=e.pending;null===n?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function Jo(e,t,n){if(4194240&n){var r=t.lanes;n|=r&=e.pendingLanes,t.lanes=n,bt(e,n)}}var Zo={readContext:Ta,useCallback:mo,useContext:mo,useEffect:mo,useImperativeHandle:mo,useInsertionEffect:mo,useLayoutEffect:mo,useMemo:mo,useReducer:mo,useRef:mo,useState:mo,useDebugValue:mo,useDeferredValue:mo,useTransition:mo,useMutableSource:mo,useSyncExternalStore:mo,useId:mo,unstable_isNewReconciler:!1},es={readContext:Ta,useCallback:function(e,t){return bo().memoizedState=[e,void 0===t?null:t],e},useContext:Ta,useEffect:Ao,useImperativeHandle:function(e,t,n){return n=null!=n?n.concat([e]):null,Oo(4194308,4,Fo.bind(null,t,e),n)},useLayoutEffect:function(e,t){return Oo(4194308,4,e,t)},useInsertionEffect:function(e,t){return Oo(4,2,e,t)},useMemo:function(e,t){var n=bo();return t=void 0===t?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=bo();return t=void 0!==n?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=Qo.bind(null,so,e),[r.memoizedState,e]},useRef:function(e){return e={current:e},bo().memoizedState=e},useState:To,useDebugValue:Bo,useDeferredValue:function(e){return bo().memoizedState=e},useTransition:function(){var e=To(!1),t=e[0];return e=Vo.bind(null,e[1]),bo().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,r){var i=so,a=bo();if(aa){if(void 0===r)throw Error(n(407));r=r()}else{if(r=t(),null===Pl)throw Error(n(349));30&oo||Co(i,t,r)}a.memoizedState=r;var o={value:r,getSnapshot:t};return a.queue=o,Ao(Eo.bind(null,i,o,e),[e]),i.flags|=2048,Mo(9,zo.bind(null,i,o,r,t),void 0,null),r},useId:function(){var e=bo(),t=Pl.identifierPrefix;if(aa){var n=Ji;t=":"+t+"R"+(n=(Ki&~(1<<32-st(Ki)-1)).toString(32)+n),0<(n=ho++)&&(t+="H"+n.toString(32)),t+=":"}else t=":"+t+"r"+(n=fo++).toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},ts={readContext:Ta,useCallback:Uo,useContext:Ta,useEffect:Do,useImperativeHandle:Wo,useInsertionEffect:Lo,useLayoutEffect:Io,useMemo:Yo,useReducer:ko,useRef:Ro,useState:function(){return ko(wo)},useDebugValue:Bo,useDeferredValue:function(e){return Ho(vo(),lo.memoizedState,e)},useTransition:function(){return[ko(wo)[0],vo().memoizedState]},useMutableSource:jo,useSyncExternalStore:So,useId:qo,unstable_isNewReconciler:!1},ns={readContext:Ta,useCallback:Uo,useContext:Ta,useEffect:Do,useImperativeHandle:Wo,useInsertionEffect:Lo,useLayoutEffect:Io,useMemo:Yo,useReducer:_o,useRef:Ro,useState:function(){return _o(wo)},useDebugValue:Bo,useDeferredValue:function(e){var t=vo();return null===lo?t.memoizedState=e:Ho(t,lo.memoizedState,e)},useTransition:function(){return[_o(wo)[0],vo().memoizedState]},useMutableSource:jo,useSyncExternalStore:So,useId:qo,unstable_isNewReconciler:!1};function rs(e,t){if(e&&e.defaultProps){for(var n in t=L({},t),e=e.defaultProps)void 0===t[n]&&(t[n]=e[n]);return t}return t}function is(e,t,n,r){n=null==(n=n(r,t=e.memoizedState))?t:L({},t,n),e.memoizedState=n,0===e.lanes&&(e.updateQueue.baseState=n)}var as={isMounted:function(e){return!!(e=e._reactInternals)&&Ue(e)===e},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=tu(),i=nu(e),a=Ia(r,i);a.payload=t,null!=n&&(a.callback=n),null!==(t=Fa(e,a,i))&&(ru(t,e,i,r),Wa(t,e,i))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=tu(),i=nu(e),a=Ia(r,i);a.tag=1,a.payload=t,null!=n&&(a.callback=n),null!==(t=Fa(e,a,i))&&(ru(t,e,i,r),Wa(t,e,i))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=tu(),r=nu(e),i=Ia(n,r);i.tag=2,null!=t&&(i.callback=t),null!==(t=Fa(e,i,r))&&(ru(t,e,r,n),Wa(t,e,r))}};function os(e,t,n,r,i,a,o){return"function"==typeof(e=e.stateNode).shouldComponentUpdate?e.shouldComponentUpdate(r,a,o):!t.prototype||!t.prototype.isPureReactComponent||(!ur(n,r)||!ur(i,a))}function ss(e,t,n){var r=!1,i=Ei,a=t.contextType;return"object"==typeof a&&null!==a?a=Ta(a):(i=Ri(t)?Ti:$i.current,a=(r=null!=(r=t.contextTypes))?Mi(e,i):Ei),t=new t(n,a),e.memoizedState=null!==t.state&&void 0!==t.state?t.state:null,t.updater=as,e.stateNode=t,t._reactInternals=e,r&&((e=e.stateNode).__reactInternalMemoizedUnmaskedChildContext=i,e.__reactInternalMemoizedMaskedChildContext=a),t}function ls(e,t,n,r){e=t.state,"function"==typeof t.componentWillReceiveProps&&t.componentWillReceiveProps(n,r),"function"==typeof t.UNSAFE_componentWillReceiveProps&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&as.enqueueReplaceState(t,t.state,null)}function us(e,t,n,r){var i=e.stateNode;i.props=n,i.state=e.memoizedState,i.refs={},Da(e);var a=t.contextType;"object"==typeof a&&null!==a?i.context=Ta(a):(a=Ri(t)?Ti:$i.current,i.context=Mi(e,a)),i.state=e.memoizedState,"function"==typeof(a=t.getDerivedStateFromProps)&&(is(e,t,a,n),i.state=e.memoizedState),"function"==typeof t.getDerivedStateFromProps||"function"==typeof i.getSnapshotBeforeUpdate||"function"!=typeof i.UNSAFE_componentWillMount&&"function"!=typeof i.componentWillMount||(t=i.state,"function"==typeof i.componentWillMount&&i.componentWillMount(),"function"==typeof i.UNSAFE_componentWillMount&&i.UNSAFE_componentWillMount(),t!==i.state&&as.enqueueReplaceState(i,i.state,null),Ua(e,n,i,r),i.state=e.memoizedState),"function"==typeof i.componentDidMount&&(e.flags|=4194308)}function cs(e,t){try{var n="",r=t;do{n+=B(r),r=r.return}while(r);var i=n}catch(a){i="\nError generating stack: "+a.message+"\n"+a.stack}return{value:e,source:t,stack:i,digest:null}}function ds(e,t,n){return{value:e,source:null,stack:null!=n?n:null,digest:null!=t?t:null}}function ps(e,t){try{console.error(t.value)}catch(Ch){setTimeout(function(){throw Ch})}}var hs="function"==typeof WeakMap?WeakMap:Map;function fs(e,t,n){(n=Ia(-1,n)).tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){Hl||(Hl=!0,Vl=r),ps(0,t)},n}function ms(e,t,n){(n=Ia(-1,n)).tag=3;var r=e.type.getDerivedStateFromError;if("function"==typeof r){var i=t.value;n.payload=function(){return r(i)},n.callback=function(){ps(0,t)}}var a=e.stateNode;return null!==a&&"function"==typeof a.componentDidCatch&&(n.callback=function(){ps(0,t),"function"!=typeof r&&(null===ql?ql=new Set([this]):ql.add(this));var e=t.stack;this.componentDidCatch(t.value,{componentStack:null!==e?e:""})}),n}function gs(e,t,n){var r=e.pingCache;if(null===r){r=e.pingCache=new hs;var i=new Set;r.set(t,i)}else void 0===(i=r.get(t))&&(i=new Set,r.set(t,i));i.has(n)||(i.add(n),e=Cu.bind(null,e,t,n),t.then(e,e))}function xs(e){do{var t;if((t=13===e.tag)&&(t=null===(t=e.memoizedState)||null!==t.dehydrated),t)return e;e=e.return}while(null!==e);return null}function ys(e,t,n,r,i){return 1&e.mode?(e.flags|=65536,e.lanes=i,e):(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,1===n.tag&&(null===n.alternate?n.tag=17:((t=Ia(-1,1)).tag=2,Fa(n,t,1))),n.lanes|=1),e)}var bs=b.ReactCurrentOwner,vs=!1;function ws(e,t,n,r){t.child=null===e?ka(t,null,n,r):wa(t,e.child,n,r)}function ks(e,t,n,r,i){n=n.render;var a=t.ref;return Pa(t,i),r=xo(e,t,n,r,a,i),n=yo(),null===e||vs?(aa&&n&&ta(t),t.flags|=1,ws(e,t,r,i),t.child):(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,Hs(e,t,i))}function _s(e,t,n,r,i){if(null===e){var a=n.type;return"function"!=typeof a||Ru(a)||void 0!==a.defaultProps||null!==n.compare||void 0!==n.defaultProps?((e=Nu(n.type,null,r,t,t.mode,i)).ref=t.ref,e.return=t,t.child=e):(t.tag=15,t.type=a,js(e,t,a,r,i))}if(a=e.child,0===(e.lanes&i)){var o=a.memoizedProps;if((n=null!==(n=n.compare)?n:ur)(o,r)&&e.ref===t.ref)return Hs(e,t,i)}return t.flags|=1,(e=Ou(a,r)).ref=t.ref,e.return=t,t.child=e}function js(e,t,n,r,i){if(null!==e){var a=e.memoizedProps;if(ur(a,r)&&e.ref===t.ref){if(vs=!1,t.pendingProps=r=a,0===(e.lanes&i))return t.lanes=e.lanes,Hs(e,t,i);131072&e.flags&&(vs=!0)}}return zs(e,t,n,r,i)}function Ss(e,t,n){var r=t.pendingProps,i=r.children,a=null!==e?e.memoizedState:null;if("hidden"===r.mode)if(1&t.mode){if(!(1073741824&n))return e=null!==a?a.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,zi(Ol,Rl),Rl|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=null!==a?a.baseLanes:n,zi(Ol,Rl),Rl|=r}else t.memoizedState={baseLanes:0,cachePool:null,transitions:null},zi(Ol,Rl),Rl|=n;else null!==a?(r=a.baseLanes|n,t.memoizedState=null):r=n,zi(Ol,Rl),Rl|=r;return ws(e,t,i,n),t.child}function Cs(e,t){var n=t.ref;(null===e&&null!==n||null!==e&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function zs(e,t,n,r,i){var a=Ri(n)?Ti:$i.current;return a=Mi(t,a),Pa(t,i),n=xo(e,t,n,r,a,i),r=yo(),null===e||vs?(aa&&r&&ta(t),t.flags|=1,ws(e,t,n,i),t.child):(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,Hs(e,t,i))}function Es(e,t,n,r,i){if(Ri(n)){var a=!0;Di(t)}else a=!1;if(Pa(t,i),null===t.stateNode)Ys(e,t),ss(t,n,r),us(t,n,r,i),r=!0;else if(null===e){var o=t.stateNode,s=t.memoizedProps;o.props=s;var l=o.context,u=n.contextType;"object"==typeof u&&null!==u?u=Ta(u):u=Mi(t,u=Ri(n)?Ti:$i.current);var c=n.getDerivedStateFromProps,d="function"==typeof c||"function"==typeof o.getSnapshotBeforeUpdate;d||"function"!=typeof o.UNSAFE_componentWillReceiveProps&&"function"!=typeof o.componentWillReceiveProps||(s!==r||l!==u)&&ls(t,o,r,u),Aa=!1;var p=t.memoizedState;o.state=p,Ua(t,r,o,i),l=t.memoizedState,s!==r||p!==l||Pi.current||Aa?("function"==typeof c&&(is(t,n,c,r),l=t.memoizedState),(s=Aa||os(t,n,s,r,p,l,u))?(d||"function"!=typeof o.UNSAFE_componentWillMount&&"function"!=typeof o.componentWillMount||("function"==typeof o.componentWillMount&&o.componentWillMount(),"function"==typeof o.UNSAFE_componentWillMount&&o.UNSAFE_componentWillMount()),"function"==typeof o.componentDidMount&&(t.flags|=4194308)):("function"==typeof o.componentDidMount&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=l),o.props=r,o.state=l,o.context=u,r=s):("function"==typeof o.componentDidMount&&(t.flags|=4194308),r=!1)}else{o=t.stateNode,La(e,t),s=t.memoizedProps,u=t.type===t.elementType?s:rs(t.type,s),o.props=u,d=t.pendingProps,p=o.context,"object"==typeof(l=n.contextType)&&null!==l?l=Ta(l):l=Mi(t,l=Ri(n)?Ti:$i.current);var h=n.getDerivedStateFromProps;(c="function"==typeof h||"function"==typeof o.getSnapshotBeforeUpdate)||"function"!=typeof o.UNSAFE_componentWillReceiveProps&&"function"!=typeof o.componentWillReceiveProps||(s!==d||p!==l)&&ls(t,o,r,l),Aa=!1,p=t.memoizedState,o.state=p,Ua(t,r,o,i);var f=t.memoizedState;s!==d||p!==f||Pi.current||Aa?("function"==typeof h&&(is(t,n,h,r),f=t.memoizedState),(u=Aa||os(t,n,u,r,p,f,l)||!1)?(c||"function"!=typeof o.UNSAFE_componentWillUpdate&&"function"!=typeof o.componentWillUpdate||("function"==typeof o.componentWillUpdate&&o.componentWillUpdate(r,f,l),"function"==typeof o.UNSAFE_componentWillUpdate&&o.UNSAFE_componentWillUpdate(r,f,l)),"function"==typeof o.componentDidUpdate&&(t.flags|=4),"function"==typeof o.getSnapshotBeforeUpdate&&(t.flags|=1024)):("function"!=typeof o.componentDidUpdate||s===e.memoizedProps&&p===e.memoizedState||(t.flags|=4),"function"!=typeof o.getSnapshotBeforeUpdate||s===e.memoizedProps&&p===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=f),o.props=r,o.state=f,o.context=l,r=u):("function"!=typeof o.componentDidUpdate||s===e.memoizedProps&&p===e.memoizedState||(t.flags|=4),"function"!=typeof o.getSnapshotBeforeUpdate||s===e.memoizedProps&&p===e.memoizedState||(t.flags|=1024),r=!1)}return $s(e,t,n,r,a,i)}function $s(e,t,n,r,i,a){Cs(e,t);var o=!!(128&t.flags);if(!r&&!o)return i&&Li(t,n,!1),Hs(e,t,a);r=t.stateNode,bs.current=t;var s=o&&"function"!=typeof n.getDerivedStateFromError?null:r.render();return t.flags|=1,null!==e&&o?(t.child=wa(t,e.child,null,a),t.child=wa(t,null,s,a)):ws(e,t,s,a),t.memoizedState=r.state,i&&Li(t,n,!0),t.child}function Ps(e){var t=e.stateNode;t.pendingContext?Ni(0,t.pendingContext,t.pendingContext!==t.context):t.context&&Ni(0,t.context,!1),Xa(e,t.containerInfo)}function Ts(e,t,n,r,i){return fa(),ma(i),t.flags|=256,ws(e,t,n,r),t.child}var Ms,Rs,Os,Ns,As={dehydrated:null,treeContext:null,retryLane:0};function Ds(e){return{baseLanes:e,cachePool:null,transitions:null}}function Ls(e,t,r){var i,a=t.pendingProps,o=eo.current,s=!1,l=!!(128&t.flags);if((i=l)||(i=(null===e||null!==e.memoizedState)&&!!(2&o)),i?(s=!0,t.flags&=-129):null!==e&&null===e.memoizedState||(o|=1),zi(eo,1&o),null===e)return ca(t),null!==(e=t.memoizedState)&&null!==(e=e.dehydrated)?(1&t.mode?"$!"===e.data?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(l=a.children,e=a.fallback,s?(a=t.mode,s=t.child,l={mode:"hidden",children:l},1&a||null===s?s=Du(l,a,0,null):(s.childLanes=0,s.pendingProps=l),e=Au(e,a,r,null),s.return=t,e.return=t,s.sibling=e,t.child=s,t.child.memoizedState=Ds(r),t.memoizedState=As,e):Is(t,l));if(null!==(o=e.memoizedState)&&null!==(i=o.dehydrated))return function(e,t,r,i,a,o,s){if(r)return 256&t.flags?(t.flags&=-257,Fs(e,t,s,i=ds(Error(n(422))))):null!==t.memoizedState?(t.child=e.child,t.flags|=128,null):(o=i.fallback,a=t.mode,i=Du({mode:"visible",children:i.children},a,0,null),(o=Au(o,a,s,null)).flags|=2,i.return=t,o.return=t,i.sibling=o,t.child=i,1&t.mode&&wa(t,e.child,null,s),t.child.memoizedState=Ds(s),t.memoizedState=As,o);if(!(1&t.mode))return Fs(e,t,s,null);if("$!"===a.data){if(i=a.nextSibling&&a.nextSibling.dataset)var l=i.dgst;return i=l,Fs(e,t,s,i=ds(o=Error(n(419)),i,void 0))}if(l=0!==(s&e.childLanes),vs||l){if(null!==(i=Pl)){switch(s&-s){case 4:a=2;break;case 16:a=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:a=32;break;case 536870912:a=268435456;break;default:a=0}0!==(a=0!==(a&(i.suspendedLanes|s))?0:a)&&a!==o.retryLane&&(o.retryLane=a,Na(e,a),ru(i,e,a,-1))}return gu(),Fs(e,t,s,i=ds(Error(n(421))))}return"$?"===a.data?(t.flags|=128,t.child=e.child,t=Eu.bind(null,e),a._reactRetry=t,null):(e=o.treeContext,ia=ci(a.nextSibling),ra=t,aa=!0,oa=null,null!==e&&(Qi[Gi++]=Ki,Qi[Gi++]=Ji,Qi[Gi++]=Xi,Ki=e.id,Ji=e.overflow,Xi=t),t=Is(t,i.children),t.flags|=4096,t)}(e,t,l,a,i,o,r);if(s){s=a.fallback,l=t.mode,i=(o=e.child).sibling;var u={mode:"hidden",children:a.children};return 1&l||t.child===o?(a=Ou(o,u)).subtreeFlags=14680064&o.subtreeFlags:((a=t.child).childLanes=0,a.pendingProps=u,t.deletions=null),null!==i?s=Ou(i,s):(s=Au(s,l,r,null)).flags|=2,s.return=t,a.return=t,a.sibling=s,t.child=a,a=s,s=t.child,l=null===(l=e.child.memoizedState)?Ds(r):{baseLanes:l.baseLanes|r,cachePool:null,transitions:l.transitions},s.memoizedState=l,s.childLanes=e.childLanes&~r,t.memoizedState=As,a}return e=(s=e.child).sibling,a=Ou(s,{mode:"visible",children:a.children}),!(1&t.mode)&&(a.lanes=r),a.return=t,a.sibling=null,null!==e&&(null===(r=t.deletions)?(t.deletions=[e],t.flags|=16):r.push(e)),t.child=a,t.memoizedState=null,a}function Is(e,t){return(t=Du({mode:"visible",children:t},e.mode,0,null)).return=e,e.child=t}function Fs(e,t,n,r){return null!==r&&ma(r),wa(t,e.child,null,n),(e=Is(t,t.pendingProps.children)).flags|=2,t.memoizedState=null,e}function Ws(e,t,n){e.lanes|=t;var r=e.alternate;null!==r&&(r.lanes|=t),$a(e.return,t,n)}function Bs(e,t,n,r,i){var a=e.memoizedState;null===a?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(a.isBackwards=t,a.rendering=null,a.renderingStartTime=0,a.last=r,a.tail=n,a.tailMode=i)}function Us(e,t,n){var r=t.pendingProps,i=r.revealOrder,a=r.tail;if(ws(e,t,r.children,n),2&(r=eo.current))r=1&r|2,t.flags|=128;else{if(null!==e&&128&e.flags)e:for(e=t.child;null!==e;){if(13===e.tag)null!==e.memoizedState&&Ws(e,n,t);else if(19===e.tag)Ws(e,n,t);else if(null!==e.child){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;null===e.sibling;){if(null===e.return||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(zi(eo,r),1&t.mode)switch(i){case"forwards":for(n=t.child,i=null;null!==n;)null!==(e=n.alternate)&&null===to(e)&&(i=n),n=n.sibling;null===(n=i)?(i=t.child,t.child=null):(i=n.sibling,n.sibling=null),Bs(t,!1,i,n,a);break;case"backwards":for(n=null,i=t.child,t.child=null;null!==i;){if(null!==(e=i.alternate)&&null===to(e)){t.child=i;break}e=i.sibling,i.sibling=n,n=i,i=e}Bs(t,!0,n,null,a);break;case"together":Bs(t,!1,null,null,void 0);break;default:t.memoizedState=null}else t.memoizedState=null;return t.child}function Ys(e,t){!(1&t.mode)&&null!==e&&(e.alternate=null,t.alternate=null,t.flags|=2)}function Hs(e,t,r){if(null!==e&&(t.dependencies=e.dependencies),Dl|=t.lanes,0===(r&t.childLanes))return null;if(null!==e&&t.child!==e.child)throw Error(n(153));if(null!==t.child){for(r=Ou(e=t.child,e.pendingProps),t.child=r,r.return=t;null!==e.sibling;)e=e.sibling,(r=r.sibling=Ou(e,e.pendingProps)).return=t;r.sibling=null}return t.child}function Vs(e,t){if(!aa)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;null!==t;)null!==t.alternate&&(n=t),t=t.sibling;null===n?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;null!==n;)null!==n.alternate&&(r=n),n=n.sibling;null===r?t||null===e.tail?e.tail=null:e.tail.sibling=null:r.sibling=null}}function qs(e){var t=null!==e.alternate&&e.alternate.child===e.child,n=0,r=0;if(t)for(var i=e.child;null!==i;)n|=i.lanes|i.childLanes,r|=14680064&i.subtreeFlags,r|=14680064&i.flags,i.return=e,i=i.sibling;else for(i=e.child;null!==i;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=e,i=i.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function Qs(e,t,r){var a=t.pendingProps;switch(na(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return qs(t),null;case 1:case 17:return Ri(t.type)&&Oi(),qs(t),null;case 3:return a=t.stateNode,Ka(),Ci(Pi),Ci($i),ro(),a.pendingContext&&(a.context=a.pendingContext,a.pendingContext=null),null!==e&&null!==e.child||(pa(t)?t.flags|=4:null===e||e.memoizedState.isDehydrated&&!(256&t.flags)||(t.flags|=1024,null!==oa&&(su(oa),oa=null))),Rs(e,t),qs(t),null;case 5:Za(t);var o=Ga(Qa.current);if(r=t.type,null!==e&&null!=t.stateNode)Os(e,t,r,a,o),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!a){if(null===t.stateNode)throw Error(n(166));return qs(t),null}if(e=Ga(Va.current),pa(t)){a=t.stateNode,r=t.type;var s=t.memoizedProps;switch(a[hi]=t,a[fi]=s,e=!!(1&t.mode),r){case"dialog":Fr("cancel",a),Fr("close",a);break;case"iframe":case"object":case"embed":Fr("load",a);break;case"video":case"audio":for(o=0;o<Ar.length;o++)Fr(Ar[o],a);break;case"source":Fr("error",a);break;case"img":case"image":case"link":Fr("error",a),Fr("load",a);break;case"details":Fr("toggle",a);break;case"input":K(a,s),Fr("invalid",a);break;case"select":a._wrapperState={wasMultiple:!!s.multiple},Fr("invalid",a);break;case"textarea":ae(a,s),Fr("invalid",a)}for(var l in be(r,s),o=null,s)if(s.hasOwnProperty(l)){var u=s[l];"children"===l?"string"==typeof u?a.textContent!==u&&(!0!==s.suppressHydrationWarning&&Zr(a.textContent,u,e),o=["children",u]):"number"==typeof u&&a.textContent!==""+u&&(!0!==s.suppressHydrationWarning&&Zr(a.textContent,u,e),o=["children",""+u]):i.hasOwnProperty(l)&&null!=u&&"onScroll"===l&&Fr("scroll",a)}switch(r){case"input":q(a),ee(a,s,!0);break;case"textarea":q(a),se(a);break;case"select":case"option":break;default:"function"==typeof s.onClick&&(a.onclick=ei)}a=o,t.updateQueue=a,null!==a&&(t.flags|=4)}else{l=9===o.nodeType?o:o.ownerDocument,"http://www.w3.org/1999/xhtml"===e&&(e=le(r)),"http://www.w3.org/1999/xhtml"===e?"script"===r?((e=l.createElement("div")).innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):"string"==typeof a.is?e=l.createElement(r,{is:a.is}):(e=l.createElement(r),"select"===r&&(l=e,a.multiple?l.multiple=!0:a.size&&(l.size=a.size))):e=l.createElementNS(e,r),e[hi]=t,e[fi]=a,Ms(e,t,!1,!1),t.stateNode=e;e:{switch(l=ve(r,a),r){case"dialog":Fr("cancel",e),Fr("close",e),o=a;break;case"iframe":case"object":case"embed":Fr("load",e),o=a;break;case"video":case"audio":for(o=0;o<Ar.length;o++)Fr(Ar[o],e);o=a;break;case"source":Fr("error",e),o=a;break;case"img":case"image":case"link":Fr("error",e),Fr("load",e),o=a;break;case"details":Fr("toggle",e),o=a;break;case"input":K(e,a),o=X(e,a),Fr("invalid",e);break;case"option":default:o=a;break;case"select":e._wrapperState={wasMultiple:!!a.multiple},o=L({},a,{value:void 0}),Fr("invalid",e);break;case"textarea":ae(e,a),o=ie(e,a),Fr("invalid",e)}for(s in be(r,o),u=o)if(u.hasOwnProperty(s)){var c=u[s];"style"===s?xe(e,c):"dangerouslySetInnerHTML"===s?null!=(c=c?c.__html:void 0)&&pe(e,c):"children"===s?"string"==typeof c?("textarea"!==r||""!==c)&&he(e,c):"number"==typeof c&&he(e,""+c):"suppressContentEditableWarning"!==s&&"suppressHydrationWarning"!==s&&"autoFocus"!==s&&(i.hasOwnProperty(s)?null!=c&&"onScroll"===s&&Fr("scroll",e):null!=c&&y(e,s,c,l))}switch(r){case"input":q(e),ee(e,a,!1);break;case"textarea":q(e),se(e);break;case"option":null!=a.value&&e.setAttribute("value",""+H(a.value));break;case"select":e.multiple=!!a.multiple,null!=(s=a.value)?re(e,!!a.multiple,s,!1):null!=a.defaultValue&&re(e,!!a.multiple,a.defaultValue,!0);break;default:"function"==typeof o.onClick&&(e.onclick=ei)}switch(r){case"button":case"input":case"select":case"textarea":a=!!a.autoFocus;break e;case"img":a=!0;break e;default:a=!1}}a&&(t.flags|=4)}null!==t.ref&&(t.flags|=512,t.flags|=2097152)}return qs(t),null;case 6:if(e&&null!=t.stateNode)Ns(e,t,e.memoizedProps,a);else{if("string"!=typeof a&&null===t.stateNode)throw Error(n(166));if(r=Ga(Qa.current),Ga(Va.current),pa(t)){if(a=t.stateNode,r=t.memoizedProps,a[hi]=t,(s=a.nodeValue!==r)&&null!==(e=ra))switch(e.tag){case 3:Zr(a.nodeValue,r,!!(1&e.mode));break;case 5:!0!==e.memoizedProps.suppressHydrationWarning&&Zr(a.nodeValue,r,!!(1&e.mode))}s&&(t.flags|=4)}else(a=(9===r.nodeType?r:r.ownerDocument).createTextNode(a))[hi]=t,t.stateNode=a}return qs(t),null;case 13:if(Ci(eo),a=t.memoizedState,null===e||null!==e.memoizedState&&null!==e.memoizedState.dehydrated){if(aa&&null!==ia&&1&t.mode&&!(128&t.flags))ha(),fa(),t.flags|=98560,s=!1;else if(s=pa(t),null!==a&&null!==a.dehydrated){if(null===e){if(!s)throw Error(n(318));if(!(s=null!==(s=t.memoizedState)?s.dehydrated:null))throw Error(n(317));s[hi]=t}else fa(),!(128&t.flags)&&(t.memoizedState=null),t.flags|=4;qs(t),s=!1}else null!==oa&&(su(oa),oa=null),s=!0;if(!s)return 65536&t.flags?t:null}return 128&t.flags?(t.lanes=r,t):((a=null!==a)!==(null!==e&&null!==e.memoizedState)&&a&&(t.child.flags|=8192,1&t.mode&&(null===e||1&eo.current?0===Nl&&(Nl=3):gu())),null!==t.updateQueue&&(t.flags|=4),qs(t),null);case 4:return Ka(),Rs(e,t),null===e&&Ur(t.stateNode.containerInfo),qs(t),null;case 10:return Ea(t.type._context),qs(t),null;case 19:if(Ci(eo),null===(s=t.memoizedState))return qs(t),null;if(a=!!(128&t.flags),null===(l=s.rendering))if(a)Vs(s,!1);else{if(0!==Nl||null!==e&&128&e.flags)for(e=t.child;null!==e;){if(null!==(l=to(e))){for(t.flags|=128,Vs(s,!1),null!==(a=l.updateQueue)&&(t.updateQueue=a,t.flags|=4),t.subtreeFlags=0,a=r,r=t.child;null!==r;)e=a,(s=r).flags&=14680066,null===(l=s.alternate)?(s.childLanes=0,s.lanes=e,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=l.childLanes,s.lanes=l.lanes,s.child=l.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=l.memoizedProps,s.memoizedState=l.memoizedState,s.updateQueue=l.updateQueue,s.type=l.type,e=l.dependencies,s.dependencies=null===e?null:{lanes:e.lanes,firstContext:e.firstContext}),r=r.sibling;return zi(eo,1&eo.current|2),t.child}e=e.sibling}null!==s.tail&&Je()>Ul&&(t.flags|=128,a=!0,Vs(s,!1),t.lanes=4194304)}else{if(!a)if(null!==(e=to(l))){if(t.flags|=128,a=!0,null!==(r=e.updateQueue)&&(t.updateQueue=r,t.flags|=4),Vs(s,!0),null===s.tail&&"hidden"===s.tailMode&&!l.alternate&&!aa)return qs(t),null}else 2*Je()-s.renderingStartTime>Ul&&1073741824!==r&&(t.flags|=128,a=!0,Vs(s,!1),t.lanes=4194304);s.isBackwards?(l.sibling=t.child,t.child=l):(null!==(r=s.last)?r.sibling=l:t.child=l,s.last=l)}return null!==s.tail?(t=s.tail,s.rendering=t,s.tail=t.sibling,s.renderingStartTime=Je(),t.sibling=null,r=eo.current,zi(eo,a?1&r|2:1&r),t):(qs(t),null);case 22:case 23:return pu(),a=null!==t.memoizedState,null!==e&&null!==e.memoizedState!==a&&(t.flags|=8192),a&&1&t.mode?!!(1073741824&Rl)&&(qs(t),6&t.subtreeFlags&&(t.flags|=8192)):qs(t),null;case 24:case 25:return null}throw Error(n(156,t.tag))}function Gs(e,t){switch(na(t),t.tag){case 1:return Ri(t.type)&&Oi(),65536&(e=t.flags)?(t.flags=-65537&e|128,t):null;case 3:return Ka(),Ci(Pi),Ci($i),ro(),65536&(e=t.flags)&&!(128&e)?(t.flags=-65537&e|128,t):null;case 5:return Za(t),null;case 13:if(Ci(eo),null!==(e=t.memoizedState)&&null!==e.dehydrated){if(null===t.alternate)throw Error(n(340));fa()}return 65536&(e=t.flags)?(t.flags=-65537&e|128,t):null;case 19:return Ci(eo),null;case 4:return Ka(),null;case 10:return Ea(t.type._context),null;case 22:case 23:return pu(),null;default:return null}}Ms=function(e,t){for(var n=t.child;null!==n;){if(5===n.tag||6===n.tag)e.appendChild(n.stateNode);else if(4!==n.tag&&null!==n.child){n.child.return=n,n=n.child;continue}if(n===t)break;for(;null===n.sibling;){if(null===n.return||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}},Rs=function(){},Os=function(e,t,n,r){var a=e.memoizedProps;if(a!==r){e=t.stateNode,Ga(Va.current);var o,s=null;switch(n){case"input":a=X(e,a),r=X(e,r),s=[];break;case"select":a=L({},a,{value:void 0}),r=L({},r,{value:void 0}),s=[];break;case"textarea":a=ie(e,a),r=ie(e,r),s=[];break;default:"function"!=typeof a.onClick&&"function"==typeof r.onClick&&(e.onclick=ei)}for(c in be(n,r),n=null,a)if(!r.hasOwnProperty(c)&&a.hasOwnProperty(c)&&null!=a[c])if("style"===c){var l=a[c];for(o in l)l.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else"dangerouslySetInnerHTML"!==c&&"children"!==c&&"suppressContentEditableWarning"!==c&&"suppressHydrationWarning"!==c&&"autoFocus"!==c&&(i.hasOwnProperty(c)?s||(s=[]):(s=s||[]).push(c,null));for(c in r){var u=r[c];if(l=null!=a?a[c]:void 0,r.hasOwnProperty(c)&&u!==l&&(null!=u||null!=l))if("style"===c)if(l){for(o in l)!l.hasOwnProperty(o)||u&&u.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in u)u.hasOwnProperty(o)&&l[o]!==u[o]&&(n||(n={}),n[o]=u[o])}else n||(s||(s=[]),s.push(c,n)),n=u;else"dangerouslySetInnerHTML"===c?(u=u?u.__html:void 0,l=l?l.__html:void 0,null!=u&&l!==u&&(s=s||[]).push(c,u)):"children"===c?"string"!=typeof u&&"number"!=typeof u||(s=s||[]).push(c,""+u):"suppressContentEditableWarning"!==c&&"suppressHydrationWarning"!==c&&(i.hasOwnProperty(c)?(null!=u&&"onScroll"===c&&Fr("scroll",e),s||l===u||(s=[])):(s=s||[]).push(c,u))}n&&(s=s||[]).push("style",n);var c=s;(t.updateQueue=c)&&(t.flags|=4)}},Ns=function(e,t,n,r){n!==r&&(t.flags|=4)};var Xs=!1,Ks=!1,Js="function"==typeof WeakSet?WeakSet:Set,Zs=null;function el(e,t){var n=e.ref;if(null!==n)if("function"==typeof n)try{n(null)}catch(r){Su(e,t,r)}else n.current=null}function tl(e,t,n){try{n()}catch(r){Su(e,t,r)}}var nl=!1;function rl(e,t,n){var r=t.updateQueue;if(null!==(r=null!==r?r.lastEffect:null)){var i=r=r.next;do{if((i.tag&e)===e){var a=i.destroy;i.destroy=void 0,void 0!==a&&tl(t,n,a)}i=i.next}while(i!==r)}}function il(e,t){if(null!==(t=null!==(t=t.updateQueue)?t.lastEffect:null)){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function al(e){var t=e.ref;if(null!==t){var n=e.stateNode;e.tag,e=n,"function"==typeof t?t(e):t.current=e}}function ol(e){var t=e.alternate;null!==t&&(e.alternate=null,ol(t)),e.child=null,e.deletions=null,e.sibling=null,5===e.tag&&(null!==(t=e.stateNode)&&(delete t[hi],delete t[fi],delete t[gi],delete t[xi],delete t[yi])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function sl(e){return 5===e.tag||3===e.tag||4===e.tag}function ll(e){e:for(;;){for(;null===e.sibling;){if(null===e.return||sl(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;5!==e.tag&&6!==e.tag&&18!==e.tag;){if(2&e.flags)continue e;if(null===e.child||4===e.tag)continue e;e.child.return=e,e=e.child}if(!(2&e.flags))return e.stateNode}}function ul(e,t,n){var r=e.tag;if(5===r||6===r)e=e.stateNode,t?8===n.nodeType?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(8===n.nodeType?(t=n.parentNode).insertBefore(e,n):(t=n).appendChild(e),null!=(n=n._reactRootContainer)||null!==t.onclick||(t.onclick=ei));else if(4!==r&&null!==(e=e.child))for(ul(e,t,n),e=e.sibling;null!==e;)ul(e,t,n),e=e.sibling}function cl(e,t,n){var r=e.tag;if(5===r||6===r)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(4!==r&&null!==(e=e.child))for(cl(e,t,n),e=e.sibling;null!==e;)cl(e,t,n),e=e.sibling}var dl=null,pl=!1;function hl(e,t,n){for(n=n.child;null!==n;)fl(e,t,n),n=n.sibling}function fl(e,t,n){if(ot&&"function"==typeof ot.onCommitFiberUnmount)try{ot.onCommitFiberUnmount(at,n)}catch(s){}switch(n.tag){case 5:Ks||el(n,t);case 6:var r=dl,i=pl;dl=null,hl(e,t,n),pl=i,null!==(dl=r)&&(pl?(e=dl,n=n.stateNode,8===e.nodeType?e.parentNode.removeChild(n):e.removeChild(n)):dl.removeChild(n.stateNode));break;case 18:null!==dl&&(pl?(e=dl,n=n.stateNode,8===e.nodeType?ui(e.parentNode,n):1===e.nodeType&&ui(e,n),Ut(e)):ui(dl,n.stateNode));break;case 4:r=dl,i=pl,dl=n.stateNode.containerInfo,pl=!0,hl(e,t,n),dl=r,pl=i;break;case 0:case 11:case 14:case 15:if(!Ks&&(null!==(r=n.updateQueue)&&null!==(r=r.lastEffect))){i=r=r.next;do{var a=i,o=a.destroy;a=a.tag,void 0!==o&&(2&a||4&a)&&tl(n,t,o),i=i.next}while(i!==r)}hl(e,t,n);break;case 1:if(!Ks&&(el(n,t),"function"==typeof(r=n.stateNode).componentWillUnmount))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(s){Su(n,t,s)}hl(e,t,n);break;case 21:hl(e,t,n);break;case 22:1&n.mode?(Ks=(r=Ks)||null!==n.memoizedState,hl(e,t,n),Ks=r):hl(e,t,n);break;default:hl(e,t,n)}}function ml(e){var t=e.updateQueue;if(null!==t){e.updateQueue=null;var n=e.stateNode;null===n&&(n=e.stateNode=new Js),t.forEach(function(t){var r=$u.bind(null,e,t);n.has(t)||(n.add(t),t.then(r,r))})}}function gl(e,t){var r=t.deletions;if(null!==r)for(var i=0;i<r.length;i++){var a=r[i];try{var o=e,s=t,l=s;e:for(;null!==l;){switch(l.tag){case 5:dl=l.stateNode,pl=!1;break e;case 3:case 4:dl=l.stateNode.containerInfo,pl=!0;break e}l=l.return}if(null===dl)throw Error(n(160));fl(o,s,a),dl=null,pl=!1;var u=a.alternate;null!==u&&(u.return=null),a.return=null}catch(c){Su(a,t,c)}}if(12854&t.subtreeFlags)for(t=t.child;null!==t;)xl(t,e),t=t.sibling}function xl(e,t){var r=e.alternate,i=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(gl(t,e),yl(e),4&i){try{rl(3,e,e.return),il(3,e)}catch(g){Su(e,e.return,g)}try{rl(5,e,e.return)}catch(g){Su(e,e.return,g)}}break;case 1:gl(t,e),yl(e),512&i&&null!==r&&el(r,r.return);break;case 5:if(gl(t,e),yl(e),512&i&&null!==r&&el(r,r.return),32&e.flags){var a=e.stateNode;try{he(a,"")}catch(g){Su(e,e.return,g)}}if(4&i&&null!=(a=e.stateNode)){var o=e.memoizedProps,s=null!==r?r.memoizedProps:o,l=e.type,u=e.updateQueue;if(e.updateQueue=null,null!==u)try{"input"===l&&"radio"===o.type&&null!=o.name&&J(a,o),ve(l,s);var c=ve(l,o);for(s=0;s<u.length;s+=2){var d=u[s],p=u[s+1];"style"===d?xe(a,p):"dangerouslySetInnerHTML"===d?pe(a,p):"children"===d?he(a,p):y(a,d,p,c)}switch(l){case"input":Z(a,o);break;case"textarea":oe(a,o);break;case"select":var h=a._wrapperState.wasMultiple;a._wrapperState.wasMultiple=!!o.multiple;var f=o.value;null!=f?re(a,!!o.multiple,f,!1):h!==!!o.multiple&&(null!=o.defaultValue?re(a,!!o.multiple,o.defaultValue,!0):re(a,!!o.multiple,o.multiple?[]:"",!1))}a[fi]=o}catch(g){Su(e,e.return,g)}}break;case 6:if(gl(t,e),yl(e),4&i){if(null===e.stateNode)throw Error(n(162));a=e.stateNode,o=e.memoizedProps;try{a.nodeValue=o}catch(g){Su(e,e.return,g)}}break;case 3:if(gl(t,e),yl(e),4&i&&null!==r&&r.memoizedState.isDehydrated)try{Ut(t.containerInfo)}catch(g){Su(e,e.return,g)}break;case 4:default:gl(t,e),yl(e);break;case 13:gl(t,e),yl(e),8192&(a=e.child).flags&&(o=null!==a.memoizedState,a.stateNode.isHidden=o,!o||null!==a.alternate&&null!==a.alternate.memoizedState||(Bl=Je())),4&i&&ml(e);break;case 22:if(d=null!==r&&null!==r.memoizedState,1&e.mode?(Ks=(c=Ks)||d,gl(t,e),Ks=c):gl(t,e),yl(e),8192&i){if(c=null!==e.memoizedState,(e.stateNode.isHidden=c)&&!d&&1&e.mode)for(Zs=e,d=e.child;null!==d;){for(p=Zs=d;null!==Zs;){switch(f=(h=Zs).child,h.tag){case 0:case 11:case 14:case 15:rl(4,h,h.return);break;case 1:el(h,h.return);var m=h.stateNode;if("function"==typeof m.componentWillUnmount){i=h,r=h.return;try{t=i,m.props=t.memoizedProps,m.state=t.memoizedState,m.componentWillUnmount()}catch(g){Su(i,r,g)}}break;case 5:el(h,h.return);break;case 22:if(null!==h.memoizedState){kl(p);continue}}null!==f?(f.return=h,Zs=f):kl(p)}d=d.sibling}e:for(d=null,p=e;;){if(5===p.tag){if(null===d){d=p;try{a=p.stateNode,c?"function"==typeof(o=a.style).setProperty?o.setProperty("display","none","important"):o.display="none":(l=p.stateNode,s=null!=(u=p.memoizedProps.style)&&u.hasOwnProperty("display")?u.display:null,l.style.display=ge("display",s))}catch(g){Su(e,e.return,g)}}}else if(6===p.tag){if(null===d)try{p.stateNode.nodeValue=c?"":p.memoizedProps}catch(g){Su(e,e.return,g)}}else if((22!==p.tag&&23!==p.tag||null===p.memoizedState||p===e)&&null!==p.child){p.child.return=p,p=p.child;continue}if(p===e)break e;for(;null===p.sibling;){if(null===p.return||p.return===e)break e;d===p&&(d=null),p=p.return}d===p&&(d=null),p.sibling.return=p.return,p=p.sibling}}break;case 19:gl(t,e),yl(e),4&i&&ml(e);case 21:}}function yl(e){var t=e.flags;if(2&t){try{e:{for(var r=e.return;null!==r;){if(sl(r)){var i=r;break e}r=r.return}throw Error(n(160))}switch(i.tag){case 5:var a=i.stateNode;32&i.flags&&(he(a,""),i.flags&=-33),cl(e,ll(e),a);break;case 3:case 4:var o=i.stateNode.containerInfo;ul(e,ll(e),o);break;default:throw Error(n(161))}}catch(s){Su(e,e.return,s)}e.flags&=-3}4096&t&&(e.flags&=-4097)}function bl(e,t,n){Zs=e,vl(e)}function vl(e,t,n){for(var r=!!(1&e.mode);null!==Zs;){var i=Zs,a=i.child;if(22===i.tag&&r){var o=null!==i.memoizedState||Xs;if(!o){var s=i.alternate,l=null!==s&&null!==s.memoizedState||Ks;s=Xs;var u=Ks;if(Xs=o,(Ks=l)&&!u)for(Zs=i;null!==Zs;)l=(o=Zs).child,22===o.tag&&null!==o.memoizedState?_l(i):null!==l?(l.return=o,Zs=l):_l(i);for(;null!==a;)Zs=a,vl(a),a=a.sibling;Zs=i,Xs=s,Ks=u}wl(e)}else 8772&i.subtreeFlags&&null!==a?(a.return=i,Zs=a):wl(e)}}function wl(e){for(;null!==Zs;){var t=Zs;if(8772&t.flags){var r=t.alternate;try{if(8772&t.flags)switch(t.tag){case 0:case 11:case 15:Ks||il(5,t);break;case 1:var i=t.stateNode;if(4&t.flags&&!Ks)if(null===r)i.componentDidMount();else{var a=t.elementType===t.type?r.memoizedProps:rs(t.type,r.memoizedProps);i.componentDidUpdate(a,r.memoizedState,i.__reactInternalSnapshotBeforeUpdate)}var o=t.updateQueue;null!==o&&Ya(t,o,i);break;case 3:var s=t.updateQueue;if(null!==s){if(r=null,null!==t.child)switch(t.child.tag){case 5:case 1:r=t.child.stateNode}Ya(t,s,r)}break;case 5:var l=t.stateNode;if(null===r&&4&t.flags){r=l;var u=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":u.autoFocus&&r.focus();break;case"img":u.src&&(r.src=u.src)}}break;case 6:case 4:case 12:case 19:case 17:case 21:case 22:case 23:case 25:break;case 13:if(null===t.memoizedState){var c=t.alternate;if(null!==c){var d=c.memoizedState;if(null!==d){var p=d.dehydrated;null!==p&&Ut(p)}}}break;default:throw Error(n(163))}Ks||512&t.flags&&al(t)}catch(h){Su(t,t.return,h)}}if(t===e){Zs=null;break}if(null!==(r=t.sibling)){r.return=t.return,Zs=r;break}Zs=t.return}}function kl(e){for(;null!==Zs;){var t=Zs;if(t===e){Zs=null;break}var n=t.sibling;if(null!==n){n.return=t.return,Zs=n;break}Zs=t.return}}function _l(e){for(;null!==Zs;){var t=Zs;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{il(4,t)}catch(l){Su(t,n,l)}break;case 1:var r=t.stateNode;if("function"==typeof r.componentDidMount){var i=t.return;try{r.componentDidMount()}catch(l){Su(t,i,l)}}var a=t.return;try{al(t)}catch(l){Su(t,a,l)}break;case 5:var o=t.return;try{al(t)}catch(l){Su(t,o,l)}}}catch(l){Su(t,t.return,l)}if(t===e){Zs=null;break}var s=t.sibling;if(null!==s){s.return=t.return,Zs=s;break}Zs=t.return}}var jl,Sl=Math.ceil,Cl=b.ReactCurrentDispatcher,zl=b.ReactCurrentOwner,El=b.ReactCurrentBatchConfig,$l=0,Pl=null,Tl=null,Ml=0,Rl=0,Ol=Si(0),Nl=0,Al=null,Dl=0,Ll=0,Il=0,Fl=null,Wl=null,Bl=0,Ul=1/0,Yl=null,Hl=!1,Vl=null,ql=null,Ql=!1,Gl=null,Xl=0,Kl=0,Jl=null,Zl=-1,eu=0;function tu(){return 6&$l?Je():-1!==Zl?Zl:Zl=Je()}function nu(e){return 1&e.mode?2&$l&&0!==Ml?Ml&-Ml:null!==ga.transition?(0===eu&&(eu=gt()),eu):0!==(e=vt)?e:e=void 0===(e=window.event)?16:Kt(e.type):1}function ru(e,t,r,i){if(50<Kl)throw Kl=0,Jl=null,Error(n(185));yt(e,r,i),2&$l&&e===Pl||(e===Pl&&(!(2&$l)&&(Ll|=r),4===Nl&&lu(e,Ml)),iu(e,i),1===r&&0===$l&&!(1&t.mode)&&(Ul=Je()+500,Fi&&Ui()))}function iu(e,t){var n=e.callbackNode;!function(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,i=e.expirationTimes,a=e.pendingLanes;0<a;){var o=31-st(a),s=1<<o,l=i[o];-1===l?0!==(s&n)&&0===(s&r)||(i[o]=ft(s,t)):l<=t&&(e.expiredLanes|=s),a&=~s}}(e,t);var r=ht(e,e===Pl?Ml:0);if(0===r)null!==n&&Ge(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(null!=n&&Ge(n),1===t)0===e.tag?function(e){Fi=!0,Bi(e)}(uu.bind(null,e)):Bi(uu.bind(null,e)),si(function(){!(6&$l)&&Ui()}),n=null;else{switch(wt(r)){case 1:n=et;break;case 4:n=tt;break;case 16:default:n=nt;break;case 536870912:n=it}n=Pu(n,au.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function au(e,t){if(Zl=-1,eu=0,6&$l)throw Error(n(327));var r=e.callbackNode;if(_u()&&e.callbackNode!==r)return null;var i=ht(e,e===Pl?Ml:0);if(0===i)return null;if(30&i||0!==(i&e.expiredLanes)||t)t=xu(e,i);else{t=i;var a=$l;$l|=2;var o=mu();for(Pl===e&&Ml===t||(Yl=null,Ul=Je()+500,hu(e,t));;)try{bu();break}catch(l){fu(e,l)}za(),Cl.current=o,$l=a,null!==Tl?t=0:(Pl=null,Ml=0,t=Nl)}if(0!==t){if(2===t&&(0!==(a=mt(e))&&(i=a,t=ou(e,a))),1===t)throw r=Al,hu(e,0),lu(e,i),iu(e,Je()),r;if(6===t)lu(e,i);else{if(a=e.current.alternate,!(30&i||function(e){for(var t=e;;){if(16384&t.flags){var n=t.updateQueue;if(null!==n&&null!==(n=n.stores))for(var r=0;r<n.length;r++){var i=n[r],a=i.getSnapshot;i=i.value;try{if(!lr(a(),i))return!1}catch(s){return!1}}}if(n=t.child,16384&t.subtreeFlags&&null!==n)n.return=t,t=n;else{if(t===e)break;for(;null===t.sibling;){if(null===t.return||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}(a)||(t=xu(e,i),2===t&&(o=mt(e),0!==o&&(i=o,t=ou(e,o))),1!==t)))throw r=Al,hu(e,0),lu(e,i),iu(e,Je()),r;switch(e.finishedWork=a,e.finishedLanes=i,t){case 0:case 1:throw Error(n(345));case 2:case 5:ku(e,Wl,Yl);break;case 3:if(lu(e,i),(130023424&i)===i&&10<(t=Bl+500-Je())){if(0!==ht(e,0))break;if(((a=e.suspendedLanes)&i)!==i){tu(),e.pingedLanes|=e.suspendedLanes&a;break}e.timeoutHandle=ii(ku.bind(null,e,Wl,Yl),t);break}ku(e,Wl,Yl);break;case 4:if(lu(e,i),(4194240&i)===i)break;for(t=e.eventTimes,a=-1;0<i;){var s=31-st(i);o=1<<s,(s=t[s])>a&&(a=s),i&=~o}if(i=a,10<(i=(120>(i=Je()-i)?120:480>i?480:1080>i?1080:1920>i?1920:3e3>i?3e3:4320>i?4320:1960*Sl(i/1960))-i)){e.timeoutHandle=ii(ku.bind(null,e,Wl,Yl),i);break}ku(e,Wl,Yl);break;default:throw Error(n(329))}}}return iu(e,Je()),e.callbackNode===r?au.bind(null,e):null}function ou(e,t){var n=Fl;return e.current.memoizedState.isDehydrated&&(hu(e,t).flags|=256),2!==(e=xu(e,t))&&(t=Wl,Wl=n,null!==t&&su(t)),e}function su(e){null===Wl?Wl=e:Wl.push.apply(Wl,e)}function lu(e,t){for(t&=~Il,t&=~Ll,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-st(t),r=1<<n;e[n]=-1,t&=~r}}function uu(e){if(6&$l)throw Error(n(327));_u();var t=ht(e,0);if(!(1&t))return iu(e,Je()),null;var r=xu(e,t);if(0!==e.tag&&2===r){var i=mt(e);0!==i&&(t=i,r=ou(e,i))}if(1===r)throw r=Al,hu(e,0),lu(e,t),iu(e,Je()),r;if(6===r)throw Error(n(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,ku(e,Wl,Yl),iu(e,Je()),null}function cu(e,t){var n=$l;$l|=1;try{return e(t)}finally{0===($l=n)&&(Ul=Je()+500,Fi&&Ui())}}function du(e){null!==Gl&&0===Gl.tag&&!(6&$l)&&_u();var t=$l;$l|=1;var n=El.transition,r=vt;try{if(El.transition=null,vt=1,e)return e()}finally{vt=r,El.transition=n,!(6&($l=t))&&Ui()}}function pu(){Rl=Ol.current,Ci(Ol)}function hu(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(-1!==n&&(e.timeoutHandle=-1,ai(n)),null!==Tl)for(n=Tl.return;null!==n;){var r=n;switch(na(r),r.tag){case 1:null!=(r=r.type.childContextTypes)&&Oi();break;case 3:Ka(),Ci(Pi),Ci($i),ro();break;case 5:Za(r);break;case 4:Ka();break;case 13:case 19:Ci(eo);break;case 10:Ea(r.type._context);break;case 22:case 23:pu()}n=n.return}if(Pl=e,Tl=e=Ou(e.current,null),Ml=Rl=t,Nl=0,Al=null,Il=Ll=Dl=0,Wl=Fl=null,null!==Ma){for(t=0;t<Ma.length;t++)if(null!==(r=(n=Ma[t]).interleaved)){n.interleaved=null;var i=r.next,a=n.pending;if(null!==a){var o=a.next;a.next=i,r.next=o}n.pending=r}Ma=null}return e}function fu(e,t){for(;;){var r=Tl;try{if(za(),io.current=Zo,co){for(var i=so.memoizedState;null!==i;){var a=i.queue;null!==a&&(a.pending=null),i=i.next}co=!1}if(oo=0,uo=lo=so=null,po=!1,ho=0,zl.current=null,null===r||null===r.return){Nl=1,Al=t,Tl=null;break}e:{var o=e,s=r.return,l=r,u=t;if(t=Ml,l.flags|=32768,null!==u&&"object"==typeof u&&"function"==typeof u.then){var c=u,d=l,p=d.tag;if(!(1&d.mode||0!==p&&11!==p&&15!==p)){var h=d.alternate;h?(d.updateQueue=h.updateQueue,d.memoizedState=h.memoizedState,d.lanes=h.lanes):(d.updateQueue=null,d.memoizedState=null)}var f=xs(s);if(null!==f){f.flags&=-257,ys(f,s,l,0,t),1&f.mode&&gs(o,c,t),u=c;var m=(t=f).updateQueue;if(null===m){var g=new Set;g.add(u),t.updateQueue=g}else m.add(u);break e}if(!(1&t)){gs(o,c,t),gu();break e}u=Error(n(426))}else if(aa&&1&l.mode){var x=xs(s);if(null!==x){!(65536&x.flags)&&(x.flags|=256),ys(x,s,l,0,t),ma(cs(u,l));break e}}o=u=cs(u,l),4!==Nl&&(Nl=2),null===Fl?Fl=[o]:Fl.push(o),o=s;do{switch(o.tag){case 3:o.flags|=65536,t&=-t,o.lanes|=t,Ba(o,fs(0,u,t));break e;case 1:l=u;var y=o.type,b=o.stateNode;if(!(128&o.flags||"function"!=typeof y.getDerivedStateFromError&&(null===b||"function"!=typeof b.componentDidCatch||null!==ql&&ql.has(b)))){o.flags|=65536,t&=-t,o.lanes|=t,Ba(o,ms(o,l,t));break e}}o=o.return}while(null!==o)}wu(r)}catch(v){t=v,Tl===r&&null!==r&&(Tl=r=r.return);continue}break}}function mu(){var e=Cl.current;return Cl.current=Zo,null===e?Zo:e}function gu(){0!==Nl&&3!==Nl&&2!==Nl||(Nl=4),null===Pl||!(268435455&Dl)&&!(268435455&Ll)||lu(Pl,Ml)}function xu(e,t){var r=$l;$l|=2;var i=mu();for(Pl===e&&Ml===t||(Yl=null,hu(e,t));;)try{yu();break}catch(a){fu(e,a)}if(za(),$l=r,Cl.current=i,null!==Tl)throw Error(n(261));return Pl=null,Ml=0,Nl}function yu(){for(;null!==Tl;)vu(Tl)}function bu(){for(;null!==Tl&&!Xe();)vu(Tl)}function vu(e){var t=jl(e.alternate,e,Rl);e.memoizedProps=e.pendingProps,null===t?wu(e):Tl=t,zl.current=null}function wu(e){var t=e;do{var n=t.alternate;if(e=t.return,32768&t.flags){if(null!==(n=Gs(n,t)))return n.flags&=32767,void(Tl=n);if(null===e)return Nl=6,void(Tl=null);e.flags|=32768,e.subtreeFlags=0,e.deletions=null}else if(null!==(n=Qs(n,t,Rl)))return void(Tl=n);if(null!==(t=t.sibling))return void(Tl=t);Tl=t=e}while(null!==t);0===Nl&&(Nl=5)}function ku(e,t,r){var i=vt,a=El.transition;try{El.transition=null,vt=1,function(e,t,r,i){do{_u()}while(null!==Gl);if(6&$l)throw Error(n(327));r=e.finishedWork;var a=e.finishedLanes;if(null===r)return null;if(e.finishedWork=null,e.finishedLanes=0,r===e.current)throw Error(n(177));e.callbackNode=null,e.callbackPriority=0;var o=r.lanes|r.childLanes;if(function(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var i=31-st(n),a=1<<i;t[i]=0,r[i]=-1,e[i]=-1,n&=~a}}(e,o),e===Pl&&(Tl=Pl=null,Ml=0),!(2064&r.subtreeFlags)&&!(2064&r.flags)||Ql||(Ql=!0,Pu(nt,function(){return _u(),null})),o=!!(15990&r.flags),!!(15990&r.subtreeFlags)||o){o=El.transition,El.transition=null;var s=vt;vt=1;var l=$l;$l|=4,zl.current=null,function(e,t){if(ti=Ht,fr(e=hr())){if("selectionStart"in e)var r={start:e.selectionStart,end:e.selectionEnd};else e:{var i=(r=(r=e.ownerDocument)&&r.defaultView||window).getSelection&&r.getSelection();if(i&&0!==i.rangeCount){r=i.anchorNode;var a=i.anchorOffset,o=i.focusNode;i=i.focusOffset;try{r.nodeType,o.nodeType}catch(w){r=null;break e}var s=0,l=-1,u=-1,c=0,d=0,p=e,h=null;t:for(;;){for(var f;p!==r||0!==a&&3!==p.nodeType||(l=s+a),p!==o||0!==i&&3!==p.nodeType||(u=s+i),3===p.nodeType&&(s+=p.nodeValue.length),null!==(f=p.firstChild);)h=p,p=f;for(;;){if(p===e)break t;if(h===r&&++c===a&&(l=s),h===o&&++d===i&&(u=s),null!==(f=p.nextSibling))break;h=(p=h).parentNode}p=f}r=-1===l||-1===u?null:{start:l,end:u}}else r=null}r=r||{start:0,end:0}}else r=null;for(ni={focusedElem:e,selectionRange:r},Ht=!1,Zs=t;null!==Zs;)if(e=(t=Zs).child,1028&t.subtreeFlags&&null!==e)e.return=t,Zs=e;else for(;null!==Zs;){t=Zs;try{var m=t.alternate;if(1024&t.flags)switch(t.tag){case 0:case 11:case 15:case 5:case 6:case 4:case 17:break;case 1:if(null!==m){var g=m.memoizedProps,x=m.memoizedState,y=t.stateNode,b=y.getSnapshotBeforeUpdate(t.elementType===t.type?g:rs(t.type,g),x);y.__reactInternalSnapshotBeforeUpdate=b}break;case 3:var v=t.stateNode.containerInfo;1===v.nodeType?v.textContent="":9===v.nodeType&&v.documentElement&&v.removeChild(v.documentElement);break;default:throw Error(n(163))}}catch(w){Su(t,t.return,w)}if(null!==(e=t.sibling)){e.return=t.return,Zs=e;break}Zs=t.return}m=nl,nl=!1}(e,r),xl(r,e),mr(ni),Ht=!!ti,ni=ti=null,e.current=r,bl(r),Ke(),$l=l,vt=s,El.transition=o}else e.current=r;if(Ql&&(Ql=!1,Gl=e,Xl=a),o=e.pendingLanes,0===o&&(ql=null),function(e){if(ot&&"function"==typeof ot.onCommitFiberRoot)try{ot.onCommitFiberRoot(at,e,void 0,!(128&~e.current.flags))}catch(t){}}(r.stateNode),iu(e,Je()),null!==t)for(i=e.onRecoverableError,r=0;r<t.length;r++)a=t[r],i(a.value,{componentStack:a.stack,digest:a.digest});if(Hl)throw Hl=!1,e=Vl,Vl=null,e;!!(1&Xl)&&0!==e.tag&&_u(),o=e.pendingLanes,1&o?e===Jl?Kl++:(Kl=0,Jl=e):Kl=0,Ui()}(e,t,r,i)}finally{El.transition=a,vt=i}return null}function _u(){if(null!==Gl){var e=wt(Xl),t=El.transition,r=vt;try{if(El.transition=null,vt=16>e?16:e,null===Gl)var i=!1;else{if(e=Gl,Gl=null,Xl=0,6&$l)throw Error(n(331));var a=$l;for($l|=4,Zs=e.current;null!==Zs;){var o=Zs,s=o.child;if(16&Zs.flags){var l=o.deletions;if(null!==l){for(var u=0;u<l.length;u++){var c=l[u];for(Zs=c;null!==Zs;){var d=Zs;switch(d.tag){case 0:case 11:case 15:rl(8,d,o)}var p=d.child;if(null!==p)p.return=d,Zs=p;else for(;null!==Zs;){var h=(d=Zs).sibling,f=d.return;if(ol(d),d===c){Zs=null;break}if(null!==h){h.return=f,Zs=h;break}Zs=f}}}var m=o.alternate;if(null!==m){var g=m.child;if(null!==g){m.child=null;do{var x=g.sibling;g.sibling=null,g=x}while(null!==g)}}Zs=o}}if(2064&o.subtreeFlags&&null!==s)s.return=o,Zs=s;else e:for(;null!==Zs;){if(2048&(o=Zs).flags)switch(o.tag){case 0:case 11:case 15:rl(9,o,o.return)}var y=o.sibling;if(null!==y){y.return=o.return,Zs=y;break e}Zs=o.return}}var b=e.current;for(Zs=b;null!==Zs;){var v=(s=Zs).child;if(2064&s.subtreeFlags&&null!==v)v.return=s,Zs=v;else e:for(s=b;null!==Zs;){if(2048&(l=Zs).flags)try{switch(l.tag){case 0:case 11:case 15:il(9,l)}}catch(k){Su(l,l.return,k)}if(l===s){Zs=null;break e}var w=l.sibling;if(null!==w){w.return=l.return,Zs=w;break e}Zs=l.return}}if($l=a,Ui(),ot&&"function"==typeof ot.onPostCommitFiberRoot)try{ot.onPostCommitFiberRoot(at,e)}catch(k){}i=!0}return i}finally{vt=r,El.transition=t}}return!1}function ju(e,t,n){e=Fa(e,t=fs(0,t=cs(n,t),1),1),t=tu(),null!==e&&(yt(e,1,t),iu(e,t))}function Su(e,t,n){if(3===e.tag)ju(e,e,n);else for(;null!==t;){if(3===t.tag){ju(t,e,n);break}if(1===t.tag){var r=t.stateNode;if("function"==typeof t.type.getDerivedStateFromError||"function"==typeof r.componentDidCatch&&(null===ql||!ql.has(r))){t=Fa(t,e=ms(t,e=cs(n,e),1),1),e=tu(),null!==t&&(yt(t,1,e),iu(t,e));break}}t=t.return}}function Cu(e,t,n){var r=e.pingCache;null!==r&&r.delete(t),t=tu(),e.pingedLanes|=e.suspendedLanes&n,Pl===e&&(Ml&n)===n&&(4===Nl||3===Nl&&(130023424&Ml)===Ml&&500>Je()-Bl?hu(e,0):Il|=n),iu(e,t)}function zu(e,t){0===t&&(1&e.mode?(t=dt,!(130023424&(dt<<=1))&&(dt=4194304)):t=1);var n=tu();null!==(e=Na(e,t))&&(yt(e,t,n),iu(e,n))}function Eu(e){var t=e.memoizedState,n=0;null!==t&&(n=t.retryLane),zu(e,n)}function $u(e,t){var r=0;switch(e.tag){case 13:var i=e.stateNode,a=e.memoizedState;null!==a&&(r=a.retryLane);break;case 19:i=e.stateNode;break;default:throw Error(n(314))}null!==i&&i.delete(t),zu(e,r)}function Pu(e,t){return Qe(e,t)}function Tu(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Mu(e,t,n,r){return new Tu(e,t,n,r)}function Ru(e){return!(!(e=e.prototype)||!e.isReactComponent)}function Ou(e,t){var n=e.alternate;return null===n?((n=Mu(e.tag,t,e.key,e.mode)).elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=14680064&e.flags,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=null===t?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function Nu(e,t,r,i,a,o){var s=2;if(i=e,"function"==typeof e)Ru(e)&&(s=1);else if("string"==typeof e)s=5;else e:switch(e){case _:return Au(r.children,a,o,t);case S:s=8,a|=8;break;case C:return(e=Mu(12,r,t,2|a)).elementType=C,e.lanes=o,e;case P:return(e=Mu(13,r,t,a)).elementType=P,e.lanes=o,e;case T:return(e=Mu(19,r,t,a)).elementType=T,e.lanes=o,e;case O:return Du(r,a,o,t);default:if("object"==typeof e&&null!==e)switch(e.$$typeof){case z:s=10;break e;case E:s=9;break e;case $:s=11;break e;case M:s=14;break e;case R:s=16,i=null;break e}throw Error(n(130,null==e?e:typeof e,""))}return(t=Mu(s,r,t,a)).elementType=e,t.type=i,t.lanes=o,t}function Au(e,t,n,r){return(e=Mu(7,e,r,t)).lanes=n,e}function Du(e,t,n,r){return(e=Mu(22,e,r,t)).elementType=O,e.lanes=n,e.stateNode={isHidden:!1},e}function Lu(e,t,n){return(e=Mu(6,e,null,t)).lanes=n,e}function Iu(e,t,n){return(t=Mu(4,null!==e.children?e.children:[],e.key,t)).lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function Fu(e,t,n,r,i){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=xt(0),this.expirationTimes=xt(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=xt(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function Wu(e,t,n,r,i,a,o,s,l){return e=new Fu(e,t,n,s,l),1===t?(t=1,!0===a&&(t|=8)):t=0,a=Mu(3,null,null,t),e.current=a,a.stateNode=e,a.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Da(a),e}function Bu(e){if(!e)return Ei;e:{if(Ue(e=e._reactInternals)!==e||1!==e.tag)throw Error(n(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(Ri(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(null!==t);throw Error(n(171))}if(1===e.tag){var r=e.type;if(Ri(r))return Ai(e,r,t)}return t}function Uu(e,t,n,r,i,a,o,s,l){return(e=Wu(n,r,!0,e,0,a,0,s,l)).context=Bu(null),n=e.current,(a=Ia(r=tu(),i=nu(n))).callback=null!=t?t:null,Fa(n,a,i),e.current.lanes=i,yt(e,i,r),iu(e,r),e}function Yu(e,t,n,r){var i=t.current,a=tu(),o=nu(i);return n=Bu(n),null===t.context?t.context=n:t.pendingContext=n,(t=Ia(a,o)).payload={element:e},null!==(r=void 0===r?null:r)&&(t.callback=r),null!==(e=Fa(i,t,o))&&(ru(e,i,o,a),Wa(e,i,o)),o}function Hu(e){return(e=e.current).child?(e.child.tag,e.child.stateNode):null}function Vu(e,t){if(null!==(e=e.memoizedState)&&null!==e.dehydrated){var n=e.retryLane;e.retryLane=0!==n&&n<t?n:t}}function qu(e,t){Vu(e,t),(e=e.alternate)&&Vu(e,t)}jl=function(e,t,r){if(null!==e)if(e.memoizedProps!==t.pendingProps||Pi.current)vs=!0;else{if(0===(e.lanes&r)&&!(128&t.flags))return vs=!1,function(e,t,n){switch(t.tag){case 3:Ps(t),fa();break;case 5:Ja(t);break;case 1:Ri(t.type)&&Di(t);break;case 4:Xa(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,i=t.memoizedProps.value;zi(_a,r._currentValue),r._currentValue=i;break;case 13:if(null!==(r=t.memoizedState))return null!==r.dehydrated?(zi(eo,1&eo.current),t.flags|=128,null):0!==(n&t.child.childLanes)?Ls(e,t,n):(zi(eo,1&eo.current),null!==(e=Hs(e,t,n))?e.sibling:null);zi(eo,1&eo.current);break;case 19:if(r=0!==(n&t.childLanes),128&e.flags){if(r)return Us(e,t,n);t.flags|=128}if(null!==(i=t.memoizedState)&&(i.rendering=null,i.tail=null,i.lastEffect=null),zi(eo,eo.current),r)break;return null;case 22:case 23:return t.lanes=0,Ss(e,t,n)}return Hs(e,t,n)}(e,t,r);vs=!!(131072&e.flags)}else vs=!1,aa&&1048576&t.flags&&ea(t,qi,t.index);switch(t.lanes=0,t.tag){case 2:var i=t.type;Ys(e,t),e=t.pendingProps;var a=Mi(t,$i.current);Pa(t,r),a=xo(null,t,i,e,a,r);var o=yo();return t.flags|=1,"object"==typeof a&&null!==a&&"function"==typeof a.render&&void 0===a.$$typeof?(t.tag=1,t.memoizedState=null,t.updateQueue=null,Ri(i)?(o=!0,Di(t)):o=!1,t.memoizedState=null!==a.state&&void 0!==a.state?a.state:null,Da(t),a.updater=as,t.stateNode=a,a._reactInternals=t,us(t,i,e,r),t=$s(null,t,i,!0,o,r)):(t.tag=0,aa&&o&&ta(t),ws(null,t,a,r),t=t.child),t;case 16:i=t.elementType;e:{switch(Ys(e,t),e=t.pendingProps,i=(a=i._init)(i._payload),t.type=i,a=t.tag=function(e){if("function"==typeof e)return Ru(e)?1:0;if(null!=e){if((e=e.$$typeof)===$)return 11;if(e===M)return 14}return 2}(i),e=rs(i,e),a){case 0:t=zs(null,t,i,e,r);break e;case 1:t=Es(null,t,i,e,r);break e;case 11:t=ks(null,t,i,e,r);break e;case 14:t=_s(null,t,i,rs(i.type,e),r);break e}throw Error(n(306,i,""))}return t;case 0:return i=t.type,a=t.pendingProps,zs(e,t,i,a=t.elementType===i?a:rs(i,a),r);case 1:return i=t.type,a=t.pendingProps,Es(e,t,i,a=t.elementType===i?a:rs(i,a),r);case 3:e:{if(Ps(t),null===e)throw Error(n(387));i=t.pendingProps,a=(o=t.memoizedState).element,La(e,t),Ua(t,i,null,r);var s=t.memoizedState;if(i=s.element,o.isDehydrated){if(o={element:i,isDehydrated:!1,cache:s.cache,pendingSuspenseBoundaries:s.pendingSuspenseBoundaries,transitions:s.transitions},t.updateQueue.baseState=o,t.memoizedState=o,256&t.flags){t=Ts(e,t,i,r,a=cs(Error(n(423)),t));break e}if(i!==a){t=Ts(e,t,i,r,a=cs(Error(n(424)),t));break e}for(ia=ci(t.stateNode.containerInfo.firstChild),ra=t,aa=!0,oa=null,r=ka(t,null,i,r),t.child=r;r;)r.flags=-3&r.flags|4096,r=r.sibling}else{if(fa(),i===a){t=Hs(e,t,r);break e}ws(e,t,i,r)}t=t.child}return t;case 5:return Ja(t),null===e&&ca(t),i=t.type,a=t.pendingProps,o=null!==e?e.memoizedProps:null,s=a.children,ri(i,a)?s=null:null!==o&&ri(i,o)&&(t.flags|=32),Cs(e,t),ws(e,t,s,r),t.child;case 6:return null===e&&ca(t),null;case 13:return Ls(e,t,r);case 4:return Xa(t,t.stateNode.containerInfo),i=t.pendingProps,null===e?t.child=wa(t,null,i,r):ws(e,t,i,r),t.child;case 11:return i=t.type,a=t.pendingProps,ks(e,t,i,a=t.elementType===i?a:rs(i,a),r);case 7:return ws(e,t,t.pendingProps,r),t.child;case 8:case 12:return ws(e,t,t.pendingProps.children,r),t.child;case 10:e:{if(i=t.type._context,a=t.pendingProps,o=t.memoizedProps,s=a.value,zi(_a,i._currentValue),i._currentValue=s,null!==o)if(lr(o.value,s)){if(o.children===a.children&&!Pi.current){t=Hs(e,t,r);break e}}else for(null!==(o=t.child)&&(o.return=t);null!==o;){var l=o.dependencies;if(null!==l){s=o.child;for(var u=l.firstContext;null!==u;){if(u.context===i){if(1===o.tag){(u=Ia(-1,r&-r)).tag=2;var c=o.updateQueue;if(null!==c){var d=(c=c.shared).pending;null===d?u.next=u:(u.next=d.next,d.next=u),c.pending=u}}o.lanes|=r,null!==(u=o.alternate)&&(u.lanes|=r),$a(o.return,r,t),l.lanes|=r;break}u=u.next}}else if(10===o.tag)s=o.type===t.type?null:o.child;else if(18===o.tag){if(null===(s=o.return))throw Error(n(341));s.lanes|=r,null!==(l=s.alternate)&&(l.lanes|=r),$a(s,r,t),s=o.sibling}else s=o.child;if(null!==s)s.return=o;else for(s=o;null!==s;){if(s===t){s=null;break}if(null!==(o=s.sibling)){o.return=s.return,s=o;break}s=s.return}o=s}ws(e,t,a.children,r),t=t.child}return t;case 9:return a=t.type,i=t.pendingProps.children,Pa(t,r),i=i(a=Ta(a)),t.flags|=1,ws(e,t,i,r),t.child;case 14:return a=rs(i=t.type,t.pendingProps),_s(e,t,i,a=rs(i.type,a),r);case 15:return js(e,t,t.type,t.pendingProps,r);case 17:return i=t.type,a=t.pendingProps,a=t.elementType===i?a:rs(i,a),Ys(e,t),t.tag=1,Ri(i)?(e=!0,Di(t)):e=!1,Pa(t,r),ss(t,i,a),us(t,i,a,r),$s(null,t,i,!0,e,r);case 19:return Us(e,t,r);case 22:return Ss(e,t,r)}throw Error(n(156,t.tag))};var Qu="function"==typeof reportError?reportError:function(e){console.error(e)};function Gu(e){this._internalRoot=e}function Xu(e){this._internalRoot=e}function Ku(e){return!(!e||1!==e.nodeType&&9!==e.nodeType&&11!==e.nodeType)}function Ju(e){return!(!e||1!==e.nodeType&&9!==e.nodeType&&11!==e.nodeType&&(8!==e.nodeType||" react-mount-point-unstable "!==e.nodeValue))}function Zu(){}function ec(e,t,n,r,i){var a=n._reactRootContainer;if(a){var o=a;if("function"==typeof i){var s=i;i=function(){var e=Hu(o);s.call(e)}}Yu(t,o,e,i)}else o=function(e,t,n,r,i){if(i){if("function"==typeof r){var a=r;r=function(){var e=Hu(o);a.call(e)}}var o=Uu(t,r,e,0,null,!1,0,"",Zu);return e._reactRootContainer=o,e[mi]=o.current,Ur(8===e.nodeType?e.parentNode:e),du(),o}for(;i=e.lastChild;)e.removeChild(i);if("function"==typeof r){var s=r;r=function(){var e=Hu(l);s.call(e)}}var l=Wu(e,0,!1,null,0,!1,0,"",Zu);return e._reactRootContainer=l,e[mi]=l.current,Ur(8===e.nodeType?e.parentNode:e),du(function(){Yu(t,l,n,r)}),l}(n,t,e,i,r);return Hu(o)}Xu.prototype.render=Gu.prototype.render=function(e){var t=this._internalRoot;if(null===t)throw Error(n(409));Yu(e,t,null,null)},Xu.prototype.unmount=Gu.prototype.unmount=function(){var e=this._internalRoot;if(null!==e){this._internalRoot=null;var t=e.containerInfo;du(function(){Yu(null,e,null,null)}),t[mi]=null}},Xu.prototype.unstable_scheduleHydration=function(e){if(e){var t=St();e={blockedOn:null,target:e,priority:t};for(var n=0;n<Ot.length&&0!==t&&t<Ot[n].priority;n++);Ot.splice(n,0,e),0===n&&Lt(e)}},kt=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=pt(t.pendingLanes);0!==n&&(bt(t,1|n),iu(t,Je()),!(6&$l)&&(Ul=Je()+500,Ui()))}break;case 13:du(function(){var t=Na(e,1);if(null!==t){var n=tu();ru(t,e,1,n)}}),qu(e,1)}},_t=function(e){if(13===e.tag){var t=Na(e,134217728);if(null!==t)ru(t,e,134217728,tu());qu(e,134217728)}},jt=function(e){if(13===e.tag){var t=nu(e),n=Na(e,t);if(null!==n)ru(n,e,t,tu());qu(e,t)}},St=function(){return vt},Ct=function(e,t){var n=vt;try{return vt=e,t()}finally{vt=n}},_e=function(e,t,r){switch(t){case"input":if(Z(e,r),t=r.name,"radio"===r.type&&null!=t){for(r=e;r.parentNode;)r=r.parentNode;for(r=r.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<r.length;t++){var i=r[t];if(i!==e&&i.form===e.form){var a=ki(i);if(!a)throw Error(n(90));Q(i),Z(i,a)}}}break;case"textarea":oe(e,r);break;case"select":null!=(t=r.value)&&re(e,!!r.multiple,t,!1)}},$e=cu,Pe=du;var tc={usingClientEntryPoint:!1,Events:[vi,wi,ki,ze,Ee,cu]},nc={findFiberByHostInstance:bi,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},rc={bundleType:nc.bundleType,version:nc.version,rendererPackageName:nc.rendererPackageName,rendererConfig:nc.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:b.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return null===(e=Ve(e))?null:e.stateNode},findFiberByHostInstance:nc.findFiberByHostInstance||function(){return null},findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if("undefined"!=typeof __REACT_DEVTOOLS_GLOBAL_HOOK__){var ic=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!ic.isDisabled&&ic.supportsFiber)try{at=ic.inject(rc),ot=ic}catch(de){}}return w.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=tc,w.createPortal=function(e,t){var r=2<arguments.length&&void 0!==arguments[2]?arguments[2]:null;if(!Ku(t))throw Error(n(200));return function(e,t,n){var r=3<arguments.length&&void 0!==arguments[3]?arguments[3]:null;return{$$typeof:k,key:null==r?null:""+r,children:e,containerInfo:t,implementation:n}}(e,t,null,r)},w.createRoot=function(e,t){if(!Ku(e))throw Error(n(299));var r=!1,i="",a=Qu;return null!=t&&(!0===t.unstable_strictMode&&(r=!0),void 0!==t.identifierPrefix&&(i=t.identifierPrefix),void 0!==t.onRecoverableError&&(a=t.onRecoverableError)),t=Wu(e,1,!1,null,0,r,0,i,a),e[mi]=t.current,Ur(8===e.nodeType?e.parentNode:e),new Gu(t)},w.findDOMNode=function(e){if(null==e)return null;if(1===e.nodeType)return e;var t=e._reactInternals;if(void 0===t){if("function"==typeof e.render)throw Error(n(188));throw e=Object.keys(e).join(","),Error(n(268,e))}return e=null===(e=Ve(t))?null:e.stateNode},w.flushSync=function(e){return du(e)},w.hydrate=function(e,t,r){if(!Ju(t))throw Error(n(200));return ec(null,e,t,!0,r)},w.hydrateRoot=function(e,t,r){if(!Ku(e))throw Error(n(405));var i=null!=r&&r.hydratedSources||null,a=!1,o="",s=Qu;if(null!=r&&(!0===r.unstable_strictMode&&(a=!0),void 0!==r.identifierPrefix&&(o=r.identifierPrefix),void 0!==r.onRecoverableError&&(s=r.onRecoverableError)),t=Uu(t,null,e,1,null!=r?r:null,a,0,o,s),e[mi]=t.current,Ur(e),i)for(e=0;e<i.length;e++)a=(a=(r=i[e])._getVersion)(r._source),null==t.mutableSourceEagerHydrationData?t.mutableSourceEagerHydrationData=[r,a]:t.mutableSourceEagerHydrationData.push(r,a);return new Xu(t)},w.render=function(e,t,r){if(!Ju(t))throw Error(n(200));return ec(null,e,t,!1,r)},w.unmountComponentAtNode=function(e){if(!Ju(e))throw Error(n(40));return!!e._reactRootContainer&&(du(function(){ec(null,null,e,!1,function(){e._reactRootContainer=null,e[mi]=null})}),!0)},w.unstable_batchedUpdates=cu,w.unstable_renderSubtreeIntoContainer=function(e,t,r,i){if(!Ju(r))throw Error(n(200));if(null==e||void 0===e._reactInternals)throw Error(n(38));return ec(e,t,r,!1,i)},w.version="18.3.1-next-f1338f8080-20240426",w}function C(){if(x)return v.exports;return x=1,function e(){if("undefined"!=typeof __REACT_DEVTOOLS_GLOBAL_HOOK__&&"function"==typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE)try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(e)}catch(t){console.error(t)}}(),v.exports=S(),v.exports}const z=e(function(){if(y)return b;y=1;var e=C();return b.createRoot=e.createRoot,b.hydrateRoot=e.hydrateRoot,b}());var E="-ms-",$="-moz-",P="-webkit-",T="comm",M="rule",R="decl",O="@keyframes",N=Math.abs,A=String.fromCharCode,D=Object.assign;function L(e){return e.trim()}function I(e,t){return(e=t.exec(e))?e[0]:e}function F(e,t,n){return e.replace(t,n)}function W(e,t,n){return e.indexOf(t,n)}function B(e,t){return 0|e.charCodeAt(t)}function U(e,t,n){return e.slice(t,n)}function Y(e){return e.length}function H(e){return e.length}function V(e,t){return t.push(e),e}function q(e,t){return e.filter(function(e){return!I(e,t)})}var Q=1,G=1,X=0,K=0,J=0,Z="";function ee(e,t,n,r,i,a,o,s){return{value:e,root:t,parent:n,type:r,props:i,children:a,line:Q,column:G,length:o,return:"",siblings:s}}function te(e,t){return D(ee("",null,null,"",null,null,0,e.siblings),e,{length:-e.length},t)}function ne(e){for(;e.root;)e=te(e.root,{children:[e]});V(e,e.siblings)}function re(){return J=K>0?B(Z,--K):0,G--,10===J&&(G=1,Q--),J}function ie(){return J=K<X?B(Z,K++):0,G++,10===J&&(G=1,Q++),J}function ae(){return B(Z,K)}function oe(){return K}function se(e,t){return U(Z,e,t)}function le(e){switch(e){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function ue(e){return L(se(K-1,pe(91===e?e+2:40===e?e+1:e)))}function ce(e){for(;(J=ae())&&J<33;)ie();return le(e)>2||le(J)>3?"":" "}function de(e,t){for(;--t&&ie()&&!(J<48||J>102||J>57&&J<65||J>70&&J<97););return se(e,oe()+(t<6&&32==ae()&&32==ie()))}function pe(e){for(;ie();)switch(J){case e:return K;case 34:case 39:34!==e&&39!==e&&pe(J);break;case 40:41===e&&pe(e);break;case 92:ie()}return K}function he(e,t){for(;ie()&&e+J!==57&&(e+J!==84||47!==ae()););return"/*"+se(t,K-1)+"*"+A(47===e?e:ie())}function fe(e){for(;!le(ae());)ie();return se(e,K)}function me(e){return function(e){return Z="",e}(ge("",null,null,null,[""],e=function(e){return Q=G=1,X=Y(Z=e),K=0,[]}(e),0,[0],e))}function ge(e,t,n,r,i,a,o,s,l){for(var u=0,c=0,d=o,p=0,h=0,f=0,m=1,g=1,x=1,y=0,b="",v=i,w=a,k=r,_=b;g;)switch(f=y,y=ie()){case 40:if(108!=f&&58==B(_,d-1)){-1!=W(_+=F(ue(y),"&","&\f"),"&\f",N(u?s[u-1]:0))&&(x=-1);break}case 34:case 39:case 91:_+=ue(y);break;case 9:case 10:case 13:case 32:_+=ce(f);break;case 92:_+=de(oe()-1,7);continue;case 47:switch(ae()){case 42:case 47:V(ye(he(ie(),oe()),t,n,l),l),5!=le(f||1)&&5!=le(ae()||1)||!Y(_)||" "===U(_,-1,void 0)||(_+=" ");break;default:_+="/"}break;case 123*m:s[u++]=Y(_)*x;case 125*m:case 59:case 0:switch(y){case 0:case 125:g=0;case 59+c:-1==x&&(_=F(_,/\f/g,"")),h>0&&(Y(_)-d||0===m&&47===f)&&V(h>32?be(_+";",r,n,d-1,l):be(F(_," ","")+";",r,n,d-2,l),l);break;case 59:_+=";";default:if(V(k=xe(_,t,n,u,c,i,s,b,v=[],w=[],d,a),a),123===y)if(0===c)ge(_,t,k,k,v,a,d,s,w);else{switch(p){case 99:if(110===B(_,3))break;case 108:if(97===B(_,2))break;default:c=0;case 100:case 109:case 115:}c?ge(e,k,k,r&&V(xe(e,k,k,0,0,i,s,b,i,v=[],d,w),w),i,w,d,s,r?v:w):ge(_,k,k,k,[""],w,0,s,w)}}u=c=h=0,m=x=1,b=_="",d=o;break;case 58:d=1+Y(_),h=f;default:if(m<1)if(123==y)--m;else if(125==y&&0==m++&&125==re())continue;switch(_+=A(y),y*m){case 38:x=c>0?1:(_+="\f",-1);break;case 44:s[u++]=(Y(_)-1)*x,x=1;break;case 64:45===ae()&&(_+=ue(ie())),p=ae(),c=d=Y(b=_+=fe(oe())),y++;break;case 45:45===f&&2==Y(_)&&(m=0)}}return a}function xe(e,t,n,r,i,a,o,s,l,u,c,d){for(var p=i-1,h=0===i?a:[""],f=H(h),m=0,g=0,x=0;m<r;++m)for(var y=0,b=U(e,p+1,p=N(g=o[m])),v=e;y<f;++y)(v=L(g>0?h[y]+" "+b:F(b,/&\f/g,h[y])))&&(l[x++]=v);return ee(e,t,n,0===i?M:s,l,u,c,d)}function ye(e,t,n,r){return ee(e,t,n,T,A(J),U(e,2,-2),0,r)}function be(e,t,n,r,i){return ee(e,t,n,R,U(e,0,r),U(e,r+1,-1),r,i)}function ve(e,t,n){switch(function(e,t){return 45^B(e,0)?(((t<<2^B(e,0))<<2^B(e,1))<<2^B(e,2))<<2^B(e,3):0}(e,t)){case 5103:return P+"print-"+e+e;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:case 6391:case 5879:case 5623:case 6135:case 4599:return P+e+e;case 4855:return P+e.replace("add","source-over").replace("substract","source-out").replace("intersect","source-in").replace("exclude","xor")+e;case 4789:return $+e+e;case 5349:case 4246:case 4810:case 6968:case 2756:return P+e+$+e+E+e+e;case 5936:switch(B(e,t+11)){case 114:return P+e+E+F(e,/[svh]\w+-[tblr]{2}/,"tb")+e;case 108:return P+e+E+F(e,/[svh]\w+-[tblr]{2}/,"tb-rl")+e;case 45:return P+e+E+F(e,/[svh]\w+-[tblr]{2}/,"lr")+e}case 6828:case 4268:case 2903:return P+e+E+e+e;case 6165:return P+e+E+"flex-"+e+e;case 5187:return P+e+F(e,/(\w+).+(:[^]+)/,P+"box-$1$2"+E+"flex-$1$2")+e;case 5443:return P+e+E+"flex-item-"+F(e,/flex-|-self/g,"")+(I(e,/flex-|baseline/)?"":E+"grid-row-"+F(e,/flex-|-self/g,""))+e;case 4675:return P+e+E+"flex-line-pack"+F(e,/align-content|flex-|-self/g,"")+e;case 5548:return P+e+E+F(e,"shrink","negative")+e;case 5292:return P+e+E+F(e,"basis","preferred-size")+e;case 6060:return P+"box-"+F(e,"-grow","")+P+e+E+F(e,"grow","positive")+e;case 4554:return P+F(e,/([^-])(transform)/g,"$1"+P+"$2")+e;case 6187:return F(F(F(e,/(zoom-|grab)/,P+"$1"),/(image-set)/,P+"$1"),e,"")+e;case 5495:case 3959:return F(e,/(image-set\([^]*)/,P+"$1$`$1");case 4968:return F(F(e,/(.+:)(flex-)?(.*)/,P+"box-pack:$3"+E+"flex-pack:$3"),/space-between/,"justify")+P+e+e;case 4200:if(!I(e,/flex-|baseline/))return E+"grid-column-align"+U(e,t)+e;break;case 2592:case 3360:return E+F(e,"template-","")+e;case 4384:case 3616:return n&&n.some(function(e,n){return t=n,I(e.props,/grid-\w+-end/)})?~W(e+(n=n[t].value),"span",0)?e:E+F(e,"-start","")+e+E+"grid-row-span:"+(~W(n,"span",0)?I(n,/\d+/):+I(n,/\d+/)-+I(e,/\d+/))+";":E+F(e,"-start","")+e;case 4896:case 4128:return n&&n.some(function(e){return I(e.props,/grid-\w+-start/)})?e:E+F(F(e,"-end","-span"),"span ","")+e;case 4095:case 3583:case 4068:case 2532:return F(e,/(.+)-inline(.+)/,P+"$1$2")+e;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(Y(e)-1-t>6)switch(B(e,t+1)){case 109:if(45!==B(e,t+4))break;case 102:return F(e,/(.+:)(.+)-([^]+)/,"$1"+P+"$2-$3$1"+$+(108==B(e,t+3)?"$3":"$2-$3"))+e;case 115:return~W(e,"stretch",0)?ve(F(e,"stretch","fill-available"),t,n)+e:e}break;case 5152:case 5920:return F(e,/(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/,function(t,n,r,i,a,o,s){return E+n+":"+r+s+(i?E+n+"-span:"+(a?o:+o-+r)+s:"")+e});case 4949:if(121===B(e,t+6))return F(e,":",":"+P)+e;break;case 6444:switch(B(e,45===B(e,14)?18:11)){case 120:return F(e,/(.+:)([^;\s!]+)(;|(\s+)?!.+)?/,"$1"+P+(45===B(e,14)?"inline-":"")+"box$3$1"+P+"$2$3$1"+E+"$2box$3")+e;case 100:return F(e,":",":"+E)+e}break;case 5719:case 2647:case 2135:case 3927:case 2391:return F(e,"scroll-","scroll-snap-")+e}return e}function we(e,t){for(var n="",r=0;r<e.length;r++)n+=t(e[r],r,e,t)||"";return n}function ke(e,t,n,r){switch(e.type){case"@layer":if(e.children.length)break;case"@import":case"@namespace":case R:return e.return=e.return||e.value;case T:return"";case O:return e.return=e.value+"{"+we(e.children,r)+"}";case M:if(!Y(e.value=e.props.join(",")))return""}return Y(n=we(e.children,r))?e.return=e.value+"{"+n+"}":""}function _e(e,t,n,r){if(e.length>-1&&!e.return)switch(e.type){case R:return void(e.return=ve(e.value,e.length,n));case O:return we([te(e,{value:F(e.value,"@","@"+P)})],r);case M:if(e.length)return function(e,t){return e.map(t).join("")}(n=e.props,function(t){switch(I(t,r=/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":ne(te(e,{props:[F(t,/:(read-\w+)/,":-moz-$1")]})),ne(te(e,{props:[t]})),D(e,{props:q(n,r)});break;case"::placeholder":ne(te(e,{props:[F(t,/:(plac\w+)/,":"+P+"input-$1")]})),ne(te(e,{props:[F(t,/:(plac\w+)/,":-moz-$1")]})),ne(te(e,{props:[F(t,/:(plac\w+)/,E+"input-$1")]})),ne(te(e,{props:[t]})),D(e,{props:q(n,r)})}return""})}}var je,Se,Ce={};const ze="undefined"!=typeof process&&void 0!==Ce&&(Ce.REACT_APP_SC_ATTR||Ce.SC_ATTR)||"data-styled",Ee="active",$e="data-styled-version",Pe="6.4.2",Te="/*!sc*/\n",Me="undefined"!=typeof window&&"undefined"!=typeof document;function Re(e){if("undefined"!=typeof process&&void 0!==Ce){const t=Ce[e];if(void 0!==t&&""!==t)return"false"!==t}}const Oe=Boolean("boolean"==typeof SC_DISABLE_SPEEDY?SC_DISABLE_SPEEDY:null!==(Se=null!==(je=Re("REACT_APP_SC_DISABLE_SPEEDY"))&&void 0!==je?je:Re("SC_DISABLE_SPEEDY"))&&void 0!==Se?Se:"undefined"!=typeof process&&void 0!==Ce&&!1),Ne="sc-keyframes-",Ae={};function De(e,...t){return new Error(`An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#${e} for more information.${t.length>0?` Args: ${t.join(", ")}`:""}`)}let Le=new Map,Ie=new Map,Fe=1;const We=e=>{if(Le.has(e))return Le.get(e);for(;Ie.has(Fe);)Fe++;const t=Fe++;return Le.set(e,t),Ie.set(t,e),t},Be=e=>Ie.get(e),Ue=(e,t)=>{Fe=t+1,Le.set(e,t),Ie.set(t,e)},Ye=Object.freeze([]),He=Object.freeze({});function Ve(e,t,n=He){return e.theme!==n.theme&&e.theme||t||n.theme}const qe=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,Qe=/(^-|-$)/g;function Ge(e){return e.replace(qe,"-").replace(Qe,"")}const Xe=/(a)(d)/gi,Ke=e=>String.fromCharCode(e+(e>25?39:97));function Je(e){let t,n="";for(t=Math.abs(e);t>52;t=t/52|0)n=Ke(t%52)+n;return(Ke(t%52)+n).replace(Xe,"$1-$2")}const Ze=5381,et=(e,t)=>{let n=t.length;for(;n;)e=33*e^t.charCodeAt(--n);return e},tt=e=>et(Ze,e);function nt(e){return Je(tt(e)>>>0)}function rt(e){return"string"==typeof e&&!0}function it(e){return rt(e)?`styled.${e}`:`Styled(${function(e){return e.displayName||e.name||"Component"}(e)})`}const at=Symbol.for("react.memo"),ot=Symbol.for("react.forward_ref"),st={contextType:!0,defaultProps:!0,displayName:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,propTypes:!0,type:!0},lt={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},ut={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},ct={[ot]:{$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},[at]:ut};function dt(e){return("type"in(t=e)&&t.type.$$typeof)===at?ut:"$$typeof"in e?ct[e.$$typeof]:st;var t}const pt=Object.defineProperty,ht=Object.getOwnPropertyNames,ft=Object.getOwnPropertySymbols,mt=Object.getOwnPropertyDescriptor,gt=Object.getPrototypeOf,xt=Object.prototype;function yt(e,t,n){if("string"!=typeof t){const i=gt(t);i&&i!==xt&&yt(e,i,n);const a=ht(t).concat(ft(t)),o=dt(e),s=dt(t);for(let l=0;l<a.length;++l){const i=a[l];if(!(i in lt||n&&n[i]||s&&i in s||o&&i in o)){const n=mt(t,i);try{pt(e,i,n)}catch(r){}}}}return e}function bt(e){return"function"==typeof e}const vt=Symbol.for("react.forward_ref");function wt(e){return null!=e&&("object"==typeof e||"function"==typeof e)&&e.$$typeof===vt&&"styledComponentId"in e}function kt(e,t){return e&&t?e+" "+t:e||t||""}function _t(e,t){return e.join("")}function jt(e){return null!==e&&"object"==typeof e&&e.constructor.name===Object.name&&!("props"in e&&e.$$typeof)}function St(e,t,n=!1){if(!n&&!jt(e)&&!Array.isArray(e))return t;if(Array.isArray(t))for(let r=0;r<t.length;r++)e[r]=St(e[r],t[r]);else if(jt(t))for(const r in t)e[r]=St(e[r],t[r]);return e}function Ct(e,t){Object.defineProperty(e,"toString",{value:t})}const zt=class{constructor(e){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=e,this._cGroup=0,this._cIndex=0}indexOfGroup(e){if(e===this._cGroup)return this._cIndex;let t=this._cIndex;if(e>this._cGroup)for(let n=this._cGroup;n<e;n++)t+=this.groupSizes[n];else for(let n=this._cGroup-1;n>=e;n--)t-=this.groupSizes[n];return this._cGroup=e,this._cIndex=t,t}insertRules(e,t){if(e>=this.groupSizes.length){const t=this.groupSizes,n=t.length;let r=n;for(;e>=r;)if(r<<=1,r<0)throw De(16,`${e}`);this.groupSizes=new Uint32Array(r),this.groupSizes.set(t),this.length=r;for(let e=n;e<r;e++)this.groupSizes[e]=0}let n=this.indexOfGroup(e+1),r=0;for(let i=0,a=t.length;i<a;i++)this.tag.insertRule(n,t[i])&&(this.groupSizes[e]++,n++,r++);r>0&&this._cGroup>e&&(this._cIndex+=r)}clearGroup(e){if(e<this.length){const t=this.groupSizes[e],n=this.indexOfGroup(e),r=n+t;this.groupSizes[e]=0;for(let e=n;e<r;e++)this.tag.deleteRule(n);t>0&&this._cGroup>e&&(this._cIndex-=t)}}getGroup(e){let t="";if(e>=this.length||0===this.groupSizes[e])return t;const n=this.groupSizes[e],r=this.indexOfGroup(e),i=r+n;for(let a=r;a<i;a++)t+=this.tag.getRule(a)+Te;return t}},Et=`style[${ze}][${$e}="${Pe}"]`,$t=new RegExp(`^${ze}\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)`),Pt=e=>"undefined"!=typeof ShadowRoot&&e instanceof ShadowRoot||"host"in e&&11===e.nodeType,Tt=e=>{if(!e)return document;if(Pt(e))return e;if("getRootNode"in e){const t=e.getRootNode();if(Pt(t))return t}return document},Mt=(e,t,n)=>{const r=n.split(",");let i;for(let a=0,o=r.length;a<o;a++)(i=r[a])&&e.registerName(t,i)},Rt=(e,t)=>{var n;const r=(null!==(n=t.textContent)&&void 0!==n?n:"").split(Te),i=[];for(let a=0,o=r.length;a<o;a++){const t=r[a].trim();if(!t)continue;const n=t.match($t);if(n){const t=0|parseInt(n[1],10),r=n[2];0!==t&&(Ue(r,t),Mt(e,r,n[3]),e.getTag().insertRules(t,i)),i.length=0}else i.push(t)}},Ot=e=>{const t=Tt(e.options.target).querySelectorAll(Et);for(let n=0,r=t.length;n<r;n++){const r=t[n];r&&r.getAttribute(ze)!==Ee&&(Rt(e,r),r.parentNode&&r.parentNode.removeChild(r))}};let Nt=!1;const At=(e,t)=>{const n=document.head,r=e||n,i=document.createElement("style"),a=(e=>{const t=Array.from(e.querySelectorAll(`style[${ze}]`));return t[t.length-1]})(r),o=void 0!==a?a.nextSibling:null;i.setAttribute(ze,Ee),i.setAttribute($e,Pe);const s=t||function(){if(!1!==Nt)return Nt;if("undefined"!=typeof document){const e=document.head.querySelector('meta[property="csp-nonce"]');if(e)return Nt=e.nonce||e.getAttribute("content")||void 0;const t=document.head.querySelector('meta[name="sc-nonce"]');if(t)return Nt=t.getAttribute("content")||void 0}return Nt="undefined"!=typeof __webpack_nonce__?__webpack_nonce__:void 0}();return s&&i.setAttribute("nonce",s),r.insertBefore(i,o),i},Dt=class{constructor(e,t){this.element=At(e,t),this.element.appendChild(document.createTextNode("")),this.sheet=(e=>{var t;if(e.sheet)return e.sheet;const n=null!==(t=e.getRootNode().styleSheets)&&void 0!==t?t:document.styleSheets;for(let r=0,i=n.length;r<i;r++){const t=n[r];if(t.ownerNode===e)return t}throw De(17)})(this.element),this.length=0}insertRule(e,t){try{return this.sheet.insertRule(t,e),this.length++,!0}catch(n){return!1}}deleteRule(e){this.sheet.deleteRule(e),this.length--}getRule(e){const t=this.sheet.cssRules[e];return t&&t.cssText?t.cssText:""}},Lt=class{constructor(e,t){this.element=At(e,t),this.nodes=this.element.childNodes,this.length=0}insertRule(e,t){if(e<=this.length&&e>=0){const n=document.createTextNode(t);return this.element.insertBefore(n,this.nodes[e]||null),this.length++,!0}return!1}deleteRule(e){this.element.removeChild(this.nodes[e]),this.length--}getRule(e){return e<this.length?this.nodes[e].textContent:""}};let It=Me;const Ft={isServer:!Me,useCSSOMInjection:!Oe};class Wt{static registerId(e){return We(e)}constructor(e=He,t={},n){this.options=Object.assign(Object.assign({},Ft),e),this.gs=t,this.keyframeIds=new Set,this.names=new Map(n),this.server=!!e.isServer,!this.server&&Me&&It&&(It=!1,Ot(this)),Ct(this,()=>(e=>{const t=e.getTag(),{length:n}=t;let r="";for(let i=0;i<n;i++){const n=Be(i);if(void 0===n)continue;const a=e.names.get(n);if(void 0===a||!a.size)continue;const o=t.getGroup(i);if(0===o.length)continue;const s=ze+".g"+i+'[id="'+n+'"]';let l="";for(const e of a)e.length>0&&(l+=e+",");r+=o+s+'{content:"'+l+'"}'+Te}return r})(this))}rehydrate(){!this.server&&Me&&Ot(this)}reconstructWithOptions(e,t=!0){const n=new Wt(Object.assign(Object.assign({},this.options),e),this.gs,t&&this.names||void 0);return n.keyframeIds=new Set(this.keyframeIds),!this.server&&Me&&e.target!==this.options.target&&Tt(this.options.target)!==Tt(e.target)&&Ot(n),n}allocateGSInstance(e){return this.gs[e]=(this.gs[e]||0)+1}getTag(){return this.tag||(this.tag=(e=(({useCSSOMInjection:e,target:t,nonce:n})=>e?new Dt(t,n):new Lt(t,n))(this.options),new zt(e)));var e}hasNameForId(e,t){var n,r;return null!==(r=null===(n=this.names.get(e))||void 0===n?void 0:n.has(t))&&void 0!==r&&r}registerName(e,t){We(e),e.startsWith(Ne)&&this.keyframeIds.add(e);const n=this.names.get(e);n?n.add(t):this.names.set(e,new Set([t]))}insertRules(e,t,n){this.registerName(e,t),this.getTag().insertRules(We(e),n)}clearNames(e){this.names.has(e)&&this.names.get(e).clear()}clearRules(e){this.getTag().clearGroup(We(e)),this.clearNames(e)}clearTag(){this.tag=void 0}}const Bt=new WeakSet,Ut={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexShrink:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,scale:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1};function Yt(e,t){return null==t||"boolean"==typeof t||""===t?"":"number"!=typeof t||0===t||e in Ut||e.startsWith("--")?String(t).trim():t+"px"}const Ht=47;function Vt(e){if(45===e.charCodeAt(0)&&45===e.charCodeAt(1))return e;let t="";for(let n=0;n<e.length;n++){const r=e.charCodeAt(n);t+=r>=65&&r<=90?"-"+String.fromCharCode(r+32):e[n]}return t.startsWith("ms-")?"-"+t:t}const qt=Symbol.for("sc-keyframes");function Qt(e){return bt(e)&&!(e.prototype&&e.prototype.isReactComponent)}const Gt=e=>null==e||!1===e||""===e,Xt=Symbol.for("react.client.reference");function Kt(e){return e.$$typeof===Xt}function Jt(e,t){for(const n in e){const r=e[n];e.hasOwnProperty(n)&&!Gt(r)&&(Array.isArray(r)&&Bt.has(r)||bt(r)?t.push(Vt(n)+":",r,";"):jt(r)?(t.push(n+" {"),Jt(r,t),t.push("}")):t.push(Vt(n)+": "+Yt(n,r)+";"))}}function Zt(e,t,n,r,i=[]){if(Gt(e))return i;const a=typeof e;if("string"===a)return i.push(e),i;if("function"===a){if(Kt(e))return i;if(Qt(e)&&t){return Zt(e(t),t,n,r,i)}return i.push(e),i}if(Array.isArray(e)){for(let a=0;a<e.length;a++)Zt(e[a],t,n,r,i);return i}return wt(e)?(i.push(`.${e.styledComponentId}`),i):function(e){return"object"==typeof e&&null!==e&&qt in e}(e)?(n?(e.inject(n,r),i.push(e.getName(r))):i.push(e),i):Kt(e)?i:jt(e)?e.toString!==Object.prototype.toString?(i.push(e.toString()),i):(Jt(e,i),i):(i.push(e.toString()),i)}const en=tt(Pe);class tn{constructor(e,t,n){this.rules=e,this.componentId=t,this.baseHash=et(en,t),this.baseStyle=n,Wt.registerId(t)}generateAndInjectStyles(e,t,n){let r=this.baseStyle?this.baseStyle.generateAndInjectStyles(e,t,n):"";{let i="";for(let r=0;r<this.rules.length;r++){const a=this.rules[r];if("string"==typeof a)i+=a;else if(a)if(Qt(a)){const r=a(e);"string"==typeof r?i+=r:null!=r&&!1!==r&&(i+=_t(Zt(r,e,t,n)))}else i+=_t(Zt(a,e,t,n))}if(i){this.dynamicNameCache||(this.dynamicNameCache=new Map);const e=n.hash?n.hash+i:i;let a=this.dynamicNameCache.get(e);if(!a){if(a=Je(et(et(this.baseHash,n.hash),i)>>>0),this.dynamicNameCache.size>=200){const e=this.dynamicNameCache.keys().next().value;void 0!==e&&this.dynamicNameCache.delete(e)}this.dynamicNameCache.set(e,a)}if(!t.hasNameForId(this.componentId,a)){const e=n(i,"."+a,void 0,this.componentId);t.insertRules(this.componentId,a,e)}r=kt(r,a)}}return r}}const nn=/&/g;function rn(e,t){let n=0;for(;--t>=0&&92===e.charCodeAt(t);)n++;return!(1&~n)}function an(e){const t=e.length;let n="",r=0,i=0,a=0,o=!1,s=!1;for(let l=0;l<t;l++){const u=e.charCodeAt(l);if(0!==a||o||u!==Ht||42!==e.charCodeAt(l+1))if(o)42===u&&e.charCodeAt(l+1)===Ht&&(o=!1,l++);else if(34!==u&&39!==u||rn(e,l)){if(0===a)if(123===u)i++;else if(125===u){if(i--,i<0){s=!0;let n=l+1;for(;n<t;){const t=e.charCodeAt(n);if(59===t||10===t)break;n++}n<t&&59===e.charCodeAt(n)&&n++,i=0,l=n-1,r=n;continue}0===i&&(n+=e.substring(r,l+1),r=l+1)}else 59===u&&0===i&&(n+=e.substring(r,l+1),r=l+1)}else 0===a?a=u:a===u&&(a=0);else o=!0,l++}return s||0!==i||0!==a?(r<t&&0===i&&0===a&&(n+=e.substring(r)),n):e}function on(e,t){const n=t+" ",r=","+n;for(let i=0;i<e.length;i++){const a=e[i];if("rule"===a.type){a.value=(n+a.value).replaceAll(",",r);const e=a.props,t=[];for(let r=0;r<e.length;r++)t[r]=n+e[r];a.props=t}Array.isArray(a.children)&&"@keyframes"!==a.type&&on(a.children,t)}return e}const sn=new Wt,ln=function({options:e=He,plugins:t=Ye}=He){let n,r,i;const a=(e,t,i)=>i.startsWith(r)&&i.endsWith(r)&&i.replaceAll(r,"").length>0?`.${n}`:e,o=t.slice();o.push(e=>{e.type===M&&e.value.includes("&")&&(i||(i=new RegExp(`\\${r}\\b`,"g")),e.props[0]=e.props[0].replace(nn,r).replace(i,a))}),e.prefix&&o.push(_e),o.push(ke);let s=[];const l=(d=o.concat((h=e=>s.push(e),function(e){e.root||(e=e.return)&&h(e)})),p=H(d),function(e,t,n,r){for(var i="",a=0;a<p;a++)i+=d[a](e,t,n,r)||"";return i}),u=(t,a="",o="",u="&")=>{n=u,r=a,i=void 0;const c=function(e){const t=-1!==e.indexOf("//"),n=-1!==e.indexOf("}");if(!t&&!n)return e;if(!t)return an(e);const r=e.length;let i="",a=0,o=0,s=0,l=0,u=0,c=!1;for(;o<r;){const t=e.charCodeAt(o);if(34!==t&&39!==t||rn(e,o))if(0===s)if(t===Ht&&o+1<r&&42===e.charCodeAt(o+1)){for(o+=2;o+1<r&&(42!==e.charCodeAt(o)||e.charCodeAt(o+1)!==Ht);)o++;o+=2}else if(40!==t)if(41!==t)if(l>0)o++;else if(42===t&&o+1<r&&e.charCodeAt(o+1)===Ht)i+=e.substring(a,o),o+=2,a=o,c=!0;else if(t===Ht&&o+1<r&&e.charCodeAt(o+1)===Ht){for(i+=e.substring(a,o);o<r&&10!==e.charCodeAt(o);)o++;a=o,c=!0}else 123===t?u++:125===t&&u--,o++;else l>0&&l--,o++;else l++,o++;else o++;else 0===s?s=t:s===t&&(s=0),o++}return c?(a<r&&(i+=e.substring(a)),0===u?i:an(i)):0===u?e:an(e)}(t);let d=me(o||a?o+" "+a+" { "+c+" }":c);return e.namespace&&(d=on(d,e.namespace)),s=[],we(d,l),s},c=e;var d,p,h;let f=Ze;for(let m=0;m<t.length;m++)t[m].name||De(15),f=et(f,t[m].name);return(null==c?void 0:c.namespace)&&(f=et(f,c.namespace)),(null==c?void 0:c.prefix)&&(f=et(f,"p")),u.hash=f!==Ze?f.toString():"",u}(),un=h.createContext({shouldForwardProp:void 0,styleSheet:sn,stylis:ln,stylisPlugins:void 0});function cn(){return h.useContext(un)}un.Consumer;const dn=h.createContext(void 0);function pn(e){const t=h.useContext(dn),n=h.useMemo(()=>function(e,t){if(!e)throw De(14);if(bt(e)){return e(t)}if(Array.isArray(e)||"object"!=typeof e)throw De(8);return t?Object.assign(Object.assign({},t),e):e}(e.theme,t),[e.theme,t]);return e.children?h.createElement(dn.Provider,{value:n},e.children):null}dn.Consumer;const hn=Object.prototype.hasOwnProperty,fn={};function mn(e,t){const n="string"!=typeof e?"sc":Ge(e);fn[n]=(fn[n]||0)+1;const r=n+"-"+nt(Pe+n+fn[n]);return t?t+"-"+r:r}function gn(e,t,n){const r=wt(e),i=e,a=!rt(e),{attrs:o=Ye,componentId:s=mn(t.displayName,t.parentComponentId),displayName:l=it(e)}=t,u=t.displayName&&t.componentId?Ge(t.displayName)+"-"+t.componentId:t.componentId||s,c=r&&i.attrs?i.attrs.concat(o).filter(Boolean):o;let{shouldForwardProp:d}=t;if(r&&i.shouldForwardProp){const e=i.shouldForwardProp;if(t.shouldForwardProp){const n=t.shouldForwardProp;d=(t,r)=>e(t,r)&&n(t,r)}else d=e}const f=new tn(n,u,r?i.componentStyle:void 0);function m(e,t){return function(e,t,n){const{attrs:r,componentStyle:i,defaultProps:a,foldedComponentIds:o,styledComponentId:s,target:l}=e,u=h.useContext(dn),c=cn(),d=e.shouldForwardProp||c.shouldForwardProp,f=Ve(t,u,a)||He;let m,g;{const e=h.useRef(null),n=e.current;if(null!==n&&n[1]===f&&n[2]===c.styleSheet&&n[3]===c.stylis&&n[7]===i&&function(e,t,n){const r=e,i=t;let a=0;for(const o in i)if(hn.call(i,o)&&(a++,r[o]!==i[o]))return!1;return a===n}(n[0],t,n[4]))m=n[5],g=n[6];else{m=function(e,t,n){const r=Object.assign(Object.assign({},t),{className:void 0,theme:n}),i=e.length>1;for(let a=0;a<e.length;a++){const n=e[a],o=bt(n)?n(i?Object.assign({},r):r):n;for(const e in o)"className"===e?r.className=kt(r.className,o[e]):"style"===e?r.style=Object.assign(Object.assign({},r.style),o[e]):e in t&&void 0===t[e]||(r[e]=o[e])}return"className"in t&&"string"==typeof t.className&&(r.className=kt(r.className,t.className)),r}(r,t,f),x=i,y=m,b=c.styleSheet,v=c.stylis,g=x.generateAndInjectStyles(y,b,v);let n=0;for(const e in t)hn.call(t,e)&&n++;e.current=[t,f,c.styleSheet,c.stylis,n,m,g,i]}}var x,y,b,v;const w=m.as||l,k=function(e,t,n,r){const i={};for(const a in e)void 0===e[a]||"$"===a[0]||"as"===a||"theme"===a&&e.theme===n||("forwardedAs"===a?i.as=e.forwardedAs:r&&!r(a,t)||(i[a]=e[a]));return i}(m,w,f,d);let _=kt(o,s);return g&&(_+=" "+g),m.className&&(_+=" "+m.className),k[rt(w)&&w.includes("-")?"class":"className"]=_,n&&(k.ref=n),p.createElement(w,k)}(g,e,t)}m.displayName=l;let g=h.forwardRef(m);return g.attrs=c,g.componentStyle=f,g.displayName=l,g.shouldForwardProp=d,g.foldedComponentIds=r?kt(i.foldedComponentIds,i.styledComponentId):"",g.styledComponentId=u,g.target=r?i.target:e,Object.defineProperty(g,"defaultProps",{get(){return this._foldedDefaultProps},set(e){this._foldedDefaultProps=r?function(e,...t){for(const n of t)St(e,n,!0);return e}({},i.defaultProps,e):e}}),Ct(g,()=>`.${g.styledComponentId}`),a&&yt(g,e,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0}),g}function xn(e,t){const n=[e[0]];for(let r=0,i=t.length;r<i;r+=1)n.push(t[r],e[r+1]);return n}const yn=e=>(Bt.add(e),e);function bn(e,...t){if(bt(e)||jt(e))return yn(Zt(xn(Ye,[e,...t])));const n=e;return 0===t.length&&1===n.length&&"string"==typeof n[0]?Zt(n):yn(Zt(xn(n,t)))}function vn(e,t,n=He){if(!t)throw De(1,t);const r=(r,...i)=>e(t,n,bn(r,...i));return r.attrs=r=>vn(e,t,Object.assign(Object.assign({},n),{attrs:Array.prototype.concat(n.attrs,r).filter(Boolean)})),r.withConfig=r=>vn(e,t,Object.assign(Object.assign({},n),r)),r}const wn=e=>vn(gn,e),kn=wn;new Set(["a","abbr","address","area","article","aside","audio","b","bdi","bdo","blockquote","body","button","br","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","label","legend","li","main","map","mark","menu","meter","nav","object","ol","optgroup","option","output","p","picture","pre","progress","q","rp","rt","ruby","s","samp","search","section","select","slot","small","span","strong","sub","summary","sup","table","tbody","td","template","textarea","tfoot","th","thead","time","tr","u","ul","var","video","wbr","circle","clipPath","defs","ellipse","feBlend","feColorMatrix","feComponentTransfer","feComposite","feConvolveMatrix","feDiffuseLighting","feDisplacementMap","feDistantLight","feDropShadow","feFlood","feFuncA","feFuncB","feFuncG","feFuncR","feGaussianBlur","feImage","feMerge","feMergeNode","feMorphology","feOffset","fePointLight","feSpecularLighting","feSpotLight","feTile","feTurbulence","filter","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","switch","symbol","text","textPath","tspan","use"]).forEach(e=>{kn[e]=wn(e)});class _n{constructor(e,t){this.instanceRules=new Map,this.rules=e,this.componentId=t,this.isStatic=function(e){for(let t=0;t<e.length;t+=1){const n=e[t];if(bt(n)&&!wt(n))return!1}return!0}(e),Wt.registerId(this.componentId)}removeStyles(e,t){this.instanceRules.delete(e),this.rebuildGroup(t)}renderStyles(e,t,n,r){const i=this.componentId;if(this.isStatic){if(n.hasNameForId(i,i+e))this.instanceRules.has(e)||this.computeRules(e,t,n,r);else{const a=this.computeRules(e,t,n,r);n.insertRules(i,a.name,a.rules)}return}const a=this.instanceRules.get(e);if(this.computeRules(e,t,n,r),!n.server&&a){const t=a.rules,n=this.instanceRules.get(e).rules;if(t.length===n.length){let e=!0;for(let r=0;r<t.length;r++)if(t[r]!==n[r]){e=!1;break}if(e)return}}this.rebuildGroup(n)}computeRules(e,t,n,r){const i=_t(Zt(this.rules,t,n,r)),a={name:this.componentId+e,rules:r(i,"")};return this.instanceRules.set(e,a),a}rebuildGroup(e){const t=this.componentId;e.clearRules(t);for(const n of this.instanceRules.values())e.insertRules(t,n.name,n.rules)}}function jn(e,...t){const n=bn(e,...t),r=`sc-global-${nt(JSON.stringify(n))}`,i=new _n(n,r),a=e=>{const t=cn(),n=h.useContext(dn);let a;{const e=h.useRef(null);null===e.current&&(e.current=t.styleSheet.allocateGSInstance(r)),a=e.current}t.styleSheet.server&&o(a,e,t.styleSheet,n,t.stylis);{const s=i.isStatic?[a,t.styleSheet,i]:[a,e,t.styleSheet,n,t.stylis,i],l=h.useRef(i);h.useLayoutEffect(()=>{t.styleSheet.server||(l.current!==i&&(t.styleSheet.clearRules(r),l.current=i),o(a,e,t.styleSheet,n,t.stylis))},s),h.useLayoutEffect(()=>()=>{t.styleSheet.server||i.removeStyles(a,t.styleSheet)},[a,t.styleSheet,i])}return t.styleSheet.server&&i.instanceRules.delete(a),null};function o(e,t,n,r,o){if(i.isStatic)i.renderStyles(e,Ae,n,o);else{const s=Object.assign(Object.assign({},t),{theme:Ve(t,r,a.defaultProps)});i.renderStyles(e,s,n,o)}}return h.memo(a)}var Sn;class Cn{constructor(e,t){this[Sn]=!0,this.inject=(e,t=ln)=>{const n=this.getName(t);if(!e.hasNameForId(this.id,n)){const r=t(this.rules,n,"@keyframes");e.insertRules(this.id,n,r)}},this.name=e,this.id=Ne+e,this.rules=t,We(this.id),Ct(this,()=>{throw De(12,String(this.name))})}getName(e=ln){return e.hash?this.name+Je(+e.hash>>>0):this.name}}function zn(e,...t){const n=_t(bn(e,...t)),r=nt(n);return new Cn(r,n)}Sn=qt;const En=jn`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: ${({theme:e})=>e.fonts.body};
    background: ${({theme:e})=>e.colors.bg};
    color: ${({theme:e})=>e.colors.dark};
    line-height: 1.5;
    text-rendering: optimizeLegibility;
  }

  p {
    font-family: ${({theme:e})=>e.fonts.body};
    color: ${({theme:e})=>e.colors.muted};
  }

  h1, h2, h3, h4, h5, h6 {
    font-family: ${({theme:e})=>e.fonts.heading};
    color: ${({theme:e})=>e.colors.textPrimary};
    letter-spacing: 0;
  }

  button,
  input,
  textarea,
  select {
    font: inherit;
  }

  a {
    color: inherit;
  }

  img,
  video {
    display: block;
    max-width: 100%;
  }

  *:focus-visible {
    outline: 2px solid ${({theme:e})=>e.colors.primaryActive};
    outline-offset: 2px;
  }
  .page {
    position: relative;
  }

  .site-wrapper {
    min-height: 100vh;
  }

  .leaf-background {
    position: fixed;
    top: 0;
    width: 100%;
    height: 100vh;
    background-repeat: no-repeat;
    background-size: min(36vw, 520px) auto;
    opacity: var(--leaf-opacity, 0.32);
    pointer-events: none;
    z-index: 0;
    will-change: transform;
  }

  .leaf-right {
    left: 0;
    background-image: url(${"/assets/left%20leaf-BZaagBvC.svg"});
    background-position: right -10px center;
  }

  .leaf-left {
    left: 0;
    background-image: url(${"/assets/right%20leaf-2mRidra7.svg"});
    background-position: left -10px center;
  }

  .content {
    position: relative;
    z-index: 1;
  }

  @media (max-width: 768px) {
    .leaf-background {
      height: 100vh;
      background-size: min(82vw, 420px) auto;
      opacity: var(--leaf-mobile-opacity, 0.22);
    }

    .leaf-right {
      background-position: right -40px top 120px;
      top: -8%;
    }

    .leaf-left {
      background-position: left -40px bottom 160px;
      top: 21%;
    }
  }

`;class $n extends p.Component{state={hasError:!1};static getDerivedStateFromError(e){return{hasError:!0,error:e}}componentDidCatch(e,t){console.error("Error caught in ErrorBoundary:",e),console.error("Component stack:",t.componentStack)}render(){return this.state.hasError?d.jsxs("div",{style:{padding:"2rem",color:"red"},children:[d.jsx("h1",{children:"Something went wrong."}),d.jsx("pre",{children:this.state.error?.message})]}):this.props.children}}var Pn="popstate";function Tn(e){return"object"==typeof e&&null!=e&&"pathname"in e&&"search"in e&&"hash"in e&&"state"in e&&"key"in e}function Mn(e={}){return function(e,t,n,r={}){let{window:i=document.defaultView,v5Compat:a=!1}=r,o=i.history,s="POP",l=null,u=c();null==u&&(u=0,o.replaceState({...o.state,idx:u},""));function c(){return(o.state||{idx:null}).idx}function d(){s="POP";let e=c(),t=null==e?null:e-u;u=e,l&&l({action:s,location:m.location,delta:t})}function p(e,t){s="PUSH";let n=Tn(e)?e:An(m.location,e,t);u=c()+1;let r=Nn(n,u),d=m.createHref(n.mask||n);try{o.pushState(r,"",d)}catch(p){if(p instanceof DOMException&&"DataCloneError"===p.name)throw p;i.location.assign(d)}a&&l&&l({action:s,location:m.location,delta:1})}function h(e,t){s="REPLACE";let n=Tn(e)?e:An(m.location,e,t);u=c();let r=Nn(n,u),i=m.createHref(n.mask||n);o.replaceState(r,"",i),a&&l&&l({action:s,location:m.location,delta:0})}function f(e){return function(e,t,n=!1){let r="http://localhost";e&&(r="null"!==e.location.origin?e.location.origin:e.location.href);Rn(r,"No window.location.(origin|href) available to create URL");let i="string"==typeof t?t:Dn(t);i=i.replace(/ $/,"%20"),!n&&i.startsWith("//")&&(i=r+i);return new URL(i,r)}(i,e)}let m={get action(){return s},get location(){return e(i,o)},listen(e){if(l)throw new Error("A history only accepts one active listener");return i.addEventListener(Pn,d),l=e,()=>{i.removeEventListener(Pn,d),l=null}},createHref:e=>t(i,e),createURL:f,encodeLocation(e){let t=f(e);return{pathname:t.pathname,search:t.search,hash:t.hash}},push:p,replace:h,go:e=>o.go(e)};return m}(function(e,t){let n=t.state?.masked,{pathname:r,search:i,hash:a}=n||e.location;return An("",{pathname:r,search:i,hash:a},t.state&&t.state.usr||null,t.state&&t.state.key||"default",n?{pathname:e.location.pathname,search:e.location.search,hash:e.location.hash}:void 0)},function(e,t){return"string"==typeof t?t:Dn(t)},0,e)}function Rn(e,t){if(!1===e||null==e)throw new Error(t)}function On(e,t){if(!e){"undefined"!=typeof console&&console.warn(t);try{throw new Error(t)}catch(n){}}}function Nn(e,t){return{usr:e.state,key:e.key,idx:t,masked:e.mask?{pathname:e.pathname,search:e.search,hash:e.hash}:void 0}}function An(e,t,n=null,r,i){return{pathname:"string"==typeof e?e:e.pathname,search:"",hash:"",..."string"==typeof t?Ln(t):t,state:n,key:t&&t.key||r||Math.random().toString(36).substring(2,10),mask:i}}function Dn({pathname:e="/",search:t="",hash:n=""}){return t&&"?"!==t&&(e+="?"===t.charAt(0)?t:"?"+t),n&&"#"!==n&&(e+="#"===n.charAt(0)?n:"#"+n),e}function Ln(e){let t={};if(e){let n=e.indexOf("#");n>=0&&(t.hash=e.substring(n),e=e.substring(0,n));let r=e.indexOf("?");r>=0&&(t.search=e.substring(r),e=e.substring(0,r)),e&&(t.pathname=e)}return t}function In(e,t,n="/"){return function(e,t,n,r){let i="string"==typeof t?Ln(t):t,a=Jn(i.pathname||"/",n);if(null==a)return null;let o=function(e){let t=Fn(e);return function(e){e.sort((e,t)=>e.score!==t.score?t.score-e.score:function(e,t){let n=e.length===t.length&&e.slice(0,-1).every((e,n)=>e===t[n]);return n?e[e.length-1]-t[t.length-1]:0}(e.routesMeta.map(e=>e.childrenIndex),t.routesMeta.map(e=>e.childrenIndex)))}(t),t}(e),s=null,l=function(e){try{return e.split("/").map(e=>decodeURIComponent(e).replace(/\//g,"%2F")).join("/")}catch(t){return On(!1,`The URL path "${e}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${t}).`),e}}(a);for(let u=0;null==s&&u<o.length;++u)s=Xn(o[u],l,r);return s}(e,t,n,!1)}function Fn(e,t=[],n=[],r="",i=!1){let a=(e,a,o=i,s)=>{let l={relativePath:void 0===s?e.path||"":s,caseSensitive:!0===e.caseSensitive,childrenIndex:a,route:e};if(l.relativePath.startsWith("/")){if(!l.relativePath.startsWith(r)&&o)return;Rn(l.relativePath.startsWith(r),`Absolute route path "${l.relativePath}" nested under path "${r}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`),l.relativePath=l.relativePath.slice(r.length)}let u=ar([r,l.relativePath]),c=n.concat(l);e.children&&e.children.length>0&&(Rn(!0!==e.index,`Index routes must not have child routes. Please remove all child routes from route path "${u}".`),Fn(e.children,t,c,u,o)),(null!=e.path||e.index)&&t.push({path:u,score:Gn(u,e.index),routesMeta:c})};return e.forEach((e,t)=>{if(""!==e.path&&e.path?.includes("?"))for(let n of Wn(e.path))a(e,t,!0,n);else a(e,t)}),t}function Wn(e){let t=e.split("/");if(0===t.length)return[];let[n,...r]=t,i=n.endsWith("?"),a=n.replace(/\?$/,"");if(0===r.length)return i?[a,""]:[a];let o=Wn(r.join("/")),s=[];return s.push(...o.map(e=>""===e?a:[a,e].join("/"))),i&&s.push(...o),s.map(t=>e.startsWith("/")&&""===t?"/":t)}var Bn=/^:[\w-]+$/,Un=3,Yn=2,Hn=1,Vn=10,qn=-2,Qn=e=>"*"===e;function Gn(e,t){let n=e.split("/"),r=n.length;return n.some(Qn)&&(r+=qn),t&&(r+=Yn),n.filter(e=>!Qn(e)).reduce((e,t)=>e+(Bn.test(t)?Un:""===t?Hn:Vn),r)}function Xn(e,t,n=!1){let{routesMeta:r}=e,i={},a="/",o=[];for(let s=0;s<r.length;++s){let e=r[s],l=s===r.length-1,u="/"===a?t:t.slice(a.length)||"/",c=Kn({path:e.relativePath,caseSensitive:e.caseSensitive,end:l},u),d=e.route;if(!c&&l&&n&&!r[r.length-1].route.index&&(c=Kn({path:e.relativePath,caseSensitive:e.caseSensitive,end:!1},u)),!c)return null;Object.assign(i,c.params),o.push({params:i,pathname:ar([a,c.pathname]),pathnameBase:sr(ar([a,c.pathnameBase])),route:d}),"/"!==c.pathnameBase&&(a=ar([a,c.pathnameBase]))}return o}function Kn(e,t){"string"==typeof e&&(e={path:e,caseSensitive:!1,end:!0});let[n,r]=function(e,t=!1,n=!0){On("*"===e||!e.endsWith("*")||e.endsWith("/*"),`Route path "${e}" will be treated as if it were "${e.replace(/\*$/,"/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${e.replace(/\*$/,"/*")}".`);let r=[],i="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(e,t,n,i,a)=>{if(r.push({paramName:t,isOptional:null!=n}),n){let t=a.charAt(i+e.length);return t&&"/"!==t?"/([^\\/]*)":"(?:/([^\\/]*))?"}return"/([^\\/]+)"}).replace(/\/([\w-]+)\?(\/|$)/g,"(/$1)?$2");e.endsWith("*")?(r.push({paramName:"*"}),i+="*"===e||"/*"===e?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?i+="\\/*$":""!==e&&"/"!==e&&(i+="(?:(?=\\/|$))");let a=new RegExp(i,t?void 0:"i");return[a,r]}(e.path,e.caseSensitive,e.end),i=t.match(n);if(!i)return null;let a=i[0],o=a.replace(/(.)\/+$/,"$1"),s=i.slice(1);return{params:r.reduce((e,{paramName:t,isOptional:n},r)=>{if("*"===t){let e=s[r]||"";o=a.slice(0,a.length-e.length).replace(/(.)\/+$/,"$1")}const i=s[r];return e[t]=n&&!i?void 0:(i||"").replace(/%2F/g,"/"),e},{}),pathname:a,pathnameBase:o,pattern:e}}function Jn(e,t){if("/"===t)return e;if(!e.toLowerCase().startsWith(t.toLowerCase()))return null;let n=t.endsWith("/")?t.length-1:t.length,r=e.charAt(n);return r&&"/"!==r?null:e.slice(n)||"/"}var Zn=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i;function er(e,t){let n=or(t).split("/");return e.split("/").forEach(e=>{".."===e?n.length>1&&n.pop():"."!==e&&n.push(e)}),n.length>1?n.join("/"):"/"}function tr(e,t,n,r){return`Cannot include a '${e}' character in a manually specified \`to.${t}\` field [${JSON.stringify(r)}].  Please separate it out to the \`to.${n}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`}function nr(e){let t=function(e){return e.filter((e,t)=>0===t||e.route.path&&e.route.path.length>0)}(e);return t.map((e,n)=>n===t.length-1?e.pathname:e.pathnameBase)}function rr(e,t,n,r=!1){let i;"string"==typeof e?i=Ln(e):(i={...e},Rn(!i.pathname||!i.pathname.includes("?"),tr("?","pathname","search",i)),Rn(!i.pathname||!i.pathname.includes("#"),tr("#","pathname","hash",i)),Rn(!i.search||!i.search.includes("#"),tr("#","search","hash",i)));let a,o=""===e||""===i.pathname,s=o?"/":i.pathname;if(null==s)a=n;else{let e=t.length-1;if(!r&&s.startsWith("..")){let t=s.split("/");for(;".."===t[0];)t.shift(),e-=1;i.pathname=t.join("/")}a=e>=0?t[e]:"/"}let l=function(e,t="/"){let n,{pathname:r,search:i="",hash:a=""}="string"==typeof e?Ln(e):e;return r?(r=ir(r),n=r.startsWith("/")?er(r.substring(1),"/"):er(r,t)):n=t,{pathname:n,search:lr(i),hash:ur(a)}}(i,a),u=s&&"/"!==s&&s.endsWith("/"),c=(o||"."===s)&&n.endsWith("/");return l.pathname.endsWith("/")||!u&&!c||(l.pathname+="/"),l}var ir=e=>e.replace(/\/\/+/g,"/"),ar=e=>ir(e.join("/")),or=e=>e.replace(/\/+$/,""),sr=e=>or(e).replace(/^\/*/,"/"),lr=e=>e&&"?"!==e?e.startsWith("?")?e:"?"+e:"",ur=e=>e&&"#"!==e?e.startsWith("#")?e:"#"+e:"",cr=class{constructor(e,t,n,r=!1){this.status=e,this.statusText=t||"",this.internal=r,n instanceof Error?(this.data=n.toString(),this.error=n):this.data=n}};function dr(e){let t=e.map(e=>e.route.path).filter(Boolean);return ar(t)||"/"}var pr="undefined"!=typeof window&&void 0!==window.document&&void 0!==window.document.createElement;function hr(e,t){let n=e;if("string"!=typeof n||!Zn.test(n))return{absoluteURL:void 0,isExternal:!1,to:n};let r=n,i=!1;if(pr)try{let e=new URL(window.location.href),r=n.startsWith("//")?new URL(e.protocol+n):new URL(n),a=Jn(r.pathname,t);r.origin===e.origin&&null!=a?n=a+r.search+r.hash:i=!0}catch(a){On(!1,`<Link to="${n}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`)}return{absoluteURL:r,isExternal:i,to:n}}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");var fr=["POST","PUT","PATCH","DELETE"];new Set(fr);var mr=["GET",...fr];new Set(mr);var gr=p.createContext(null);gr.displayName="DataRouter";var xr=p.createContext(null);xr.displayName="DataRouterState";var yr=p.createContext(!1);var br=p.createContext({isTransitioning:!1});br.displayName="ViewTransition",p.createContext(new Map).displayName="Fetchers",p.createContext(null).displayName="Await";var vr=p.createContext(null);vr.displayName="Navigation";var wr=p.createContext(null);wr.displayName="Location";var kr=p.createContext({outlet:null,matches:[],isDataRoute:!1});kr.displayName="Route";var _r=p.createContext(null);_r.displayName="RouteError";var jr="REACT_ROUTER_ERROR";function Sr(){return null!=p.useContext(wr)}function Cr(){return Rn(Sr(),"useLocation() may be used only in the context of a <Router> component."),p.useContext(wr).location}var zr="You should call navigate() in a React.useEffect(), not when your component is first rendered.";function Er(e){p.useContext(vr).static||p.useLayoutEffect(e)}function $r(){let{isDataRoute:e}=p.useContext(kr);return e?function(){let{router:e}=function(e){let t=p.useContext(gr);return Rn(t,Lr(e)),t}("useNavigate"),t=Ir("useNavigate"),n=p.useRef(!1);return Er(()=>{n.current=!0}),p.useCallback(async(r,i={})=>{On(n.current,zr),n.current&&("number"==typeof r?await e.navigate(r):await e.navigate(r,{fromRouteId:t,...i}))},[e,t])}():function(){Rn(Sr(),"useNavigate() may be used only in the context of a <Router> component.");let e=p.useContext(gr),{basename:t,navigator:n}=p.useContext(vr),{matches:r}=p.useContext(kr),{pathname:i}=Cr(),a=JSON.stringify(nr(r)),o=p.useRef(!1);return Er(()=>{o.current=!0}),p.useCallback((r,s={})=>{if(On(o.current,zr),!o.current)return;if("number"==typeof r)return void n.go(r);let l=rr(r,JSON.parse(a),i,"path"===s.relative);null==e&&"/"!==t&&(l.pathname="/"===l.pathname?t:ar([t,l.pathname])),(s.replace?n.replace:n.push)(l,s.state,s)},[t,n,a,i,e])}()}function Pr(e,{relative:t}={}){let{matches:n}=p.useContext(kr),{pathname:r}=Cr(),i=JSON.stringify(nr(n));return p.useMemo(()=>rr(e,JSON.parse(i),r,"path"===t),[e,i,r,t])}function Tr(e,t,n){Rn(Sr(),"useRoutes() may be used only in the context of a <Router> component.");let{navigator:r}=p.useContext(vr),{matches:i}=p.useContext(kr),a=i[i.length-1],o=a?a.params:{},s=a?a.pathname:"/",l=a?a.pathnameBase:"/",u=a&&a.route;{let e=u&&u.path||"";Wr(s,!u||e.endsWith("*")||e.endsWith("*?"),`You rendered descendant <Routes> (or called \`useRoutes()\`) at "${s}" (under <Route path="${e}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.\n\nPlease change the parent <Route path="${e}"> to <Route path="${"/"===e?"*":`${e}/*`}">.`)}let c,d=Cr();if(t){let e="string"==typeof t?Ln(t):t;Rn("/"===l||e.pathname?.startsWith(l),`When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${l}" but pathname "${e.pathname}" was given in the \`location\` prop.`),c=e}else c=d;let h=c.pathname||"/",f=h;if("/"!==l){let e=l.replace(/^\//,"").split("/");f="/"+h.replace(/^\//,"").split("/").slice(e.length).join("/")}let m=n&&n.state.matches.length?n.state.matches.map(e=>Object.assign(e,{route:n.manifest[e.route.id]||e.route})):In(e,{pathname:f});On(u||null!=m,`No routes matched location "${c.pathname}${c.search}${c.hash}" `),On(null==m||void 0!==m[m.length-1].route.element||void 0!==m[m.length-1].route.Component||void 0!==m[m.length-1].route.lazy,`Matched leaf route at location "${c.pathname}${c.search}${c.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`);let g=function(e,t=[],n){let r=n?.state;if(null==e){if(!r)return null;if(r.errors)e=r.matches;else{if(0!==t.length||r.initialized||!(r.matches.length>0))return null;e=r.matches}}let i=e,a=r?.errors;if(null!=a){let e=i.findIndex(e=>e.route.id&&void 0!==a?.[e.route.id]);Rn(e>=0,`Could not find a matching route for errors on route IDs: ${Object.keys(a).join(",")}`),i=i.slice(0,Math.min(i.length,e+1))}let o=!1,s=-1;if(n&&r){o=r.renderFallback;for(let e=0;e<i.length;e++){let t=i[e];if((t.route.HydrateFallback||t.route.hydrateFallbackElement)&&(s=e),t.route.id){let{loaderData:e,errors:a}=r,l=t.route.loader&&!e.hasOwnProperty(t.route.id)&&(!a||void 0===a[t.route.id]);if(t.route.lazy||l){n.isStatic&&(o=!0),i=s>=0?i.slice(0,s+1):[i[0]];break}}}}let l=n?.onError,u=r&&l?(e,t)=>{l(e,{location:r.location,params:r.matches?.[0]?.params??{},pattern:dr(r.matches),errorInfo:t})}:void 0;return i.reduceRight((e,n,l)=>{let c,d=!1,h=null,f=null;r&&(c=a&&n.route.id?a[n.route.id]:void 0,h=n.route.errorElement||Rr,o&&(s<0&&0===l?(Wr("route-fallback",!1,"No `HydrateFallback` element provided to render during initial hydration"),d=!0,f=null):s===l&&(d=!0,f=n.route.hydrateFallbackElement||null)));let m=t.concat(i.slice(0,l+1)),g=()=>{let t;return t=c?h:d?f:n.route.Component?p.createElement(n.route.Component,null):n.route.element?n.route.element:e,p.createElement(Dr,{match:n,routeContext:{outlet:e,matches:m,isDataRoute:null!=r},children:t})};return r&&(n.route.ErrorBoundary||n.route.errorElement||0===l)?p.createElement(Or,{location:r.location,revalidation:r.revalidation,component:h,error:c,children:g(),routeContext:{outlet:null,matches:m,isDataRoute:!0},onError:u}):g()},null)}(m&&m.map(e=>Object.assign({},e,{params:Object.assign({},o,e.params),pathname:ar([l,r.encodeLocation?r.encodeLocation(e.pathname.replace(/%/g,"%25").replace(/\?/g,"%3F").replace(/#/g,"%23")).pathname:e.pathname]),pathnameBase:"/"===e.pathnameBase?l:ar([l,r.encodeLocation?r.encodeLocation(e.pathnameBase.replace(/%/g,"%25").replace(/\?/g,"%3F").replace(/#/g,"%23")).pathname:e.pathnameBase])})),i,n);return t&&g?p.createElement(wr.Provider,{value:{location:{pathname:"/",search:"",hash:"",state:null,key:"default",mask:void 0,...c},navigationType:"POP"}},g):g}function Mr(){let e=function(){let e=p.useContext(_r),t=function(e){let t=p.useContext(xr);return Rn(t,Lr(e)),t}("useRouteError"),n=Ir("useRouteError");if(void 0!==e)return e;return t.errors?.[n]}(),t=function(e){return null!=e&&"number"==typeof e.status&&"string"==typeof e.statusText&&"boolean"==typeof e.internal&&"data"in e}(e)?`${e.status} ${e.statusText}`:e instanceof Error?e.message:JSON.stringify(e),n=e instanceof Error?e.stack:null,r="rgba(200,200,200, 0.5)",i={padding:"0.5rem",backgroundColor:r},a={padding:"2px 4px",backgroundColor:r},o=null;return console.error("Error handled by React Router default ErrorBoundary:",e),o=p.createElement(p.Fragment,null,p.createElement("p",null,"💿 Hey developer 👋"),p.createElement("p",null,"You can provide a way better UX than this when your app throws errors by providing your own ",p.createElement("code",{style:a},"ErrorBoundary")," or"," ",p.createElement("code",{style:a},"errorElement")," prop on your route.")),p.createElement(p.Fragment,null,p.createElement("h2",null,"Unexpected Application Error!"),p.createElement("h3",{style:{fontStyle:"italic"}},t),n?p.createElement("pre",{style:i},n):null,o)}p.createContext(null);var Rr=p.createElement(Mr,null),Or=class extends p.Component{constructor(e){super(e),this.state={location:e.location,revalidation:e.revalidation,error:e.error}}static getDerivedStateFromError(e){return{error:e}}static getDerivedStateFromProps(e,t){return t.location!==e.location||"idle"!==t.revalidation&&"idle"===e.revalidation?{error:e.error,location:e.location,revalidation:e.revalidation}:{error:void 0!==e.error?e.error:t.error,location:t.location,revalidation:e.revalidation||t.revalidation}}componentDidCatch(e,t){this.props.onError?this.props.onError(e,t):console.error("React Router caught the following error during render",e)}render(){let e=this.state.error;if(this.context&&"object"==typeof e&&e&&"digest"in e&&"string"==typeof e.digest){const t=function(e){if(e.startsWith(`${jr}:ROUTE_ERROR_RESPONSE:{`))try{let t=JSON.parse(e.slice(40));if("object"==typeof t&&t&&"number"==typeof t.status&&"string"==typeof t.statusText)return new cr(t.status,t.statusText,t.data)}catch{}}(e.digest);t&&(e=t)}let t=void 0!==e?p.createElement(kr.Provider,{value:this.props.routeContext},p.createElement(_r.Provider,{value:e,children:this.props.component})):this.props.children;return this.context?p.createElement(Ar,{error:e},t):t}};Or.contextType=yr;var Nr=new WeakMap;function Ar({children:e,error:t}){let{basename:n}=p.useContext(vr);if("object"==typeof t&&t&&"digest"in t&&"string"==typeof t.digest){let e=function(e){if(e.startsWith(`${jr}:REDIRECT:{`))try{let t=JSON.parse(e.slice(28));if("object"==typeof t&&t&&"number"==typeof t.status&&"string"==typeof t.statusText&&"string"==typeof t.location&&"boolean"==typeof t.reloadDocument&&"boolean"==typeof t.replace)return t}catch{}}(t.digest);if(e){let r=Nr.get(t);if(r)throw r;let i=hr(e.location,n);if(pr&&!Nr.get(t)){if(!i.isExternal&&!e.reloadDocument){const n=Promise.resolve().then(()=>window.__reactRouterDataRouter.navigate(i.to,{replace:e.replace}));throw Nr.set(t,n),n}window.location.href=i.absoluteURL||i.to}return p.createElement("meta",{httpEquiv:"refresh",content:`0;url=${i.absoluteURL||i.to}`})}}return e}function Dr({routeContext:e,match:t,children:n}){let r=p.useContext(gr);return r&&r.static&&r.staticContext&&(t.route.errorElement||t.route.ErrorBoundary)&&(r.staticContext._deepestRenderedBoundaryId=t.route.id),p.createElement(kr.Provider,{value:e},n)}function Lr(e){return`${e} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function Ir(e){let t=function(e){let t=p.useContext(kr);return Rn(t,Lr(e)),t}(e),n=t.matches[t.matches.length-1];return Rn(n.route.id,`${e} can only be used on routes that contain a unique "id"`),n.route.id}var Fr={};function Wr(e,t,n){t||Fr[e]||(Fr[e]=!0,On(!1,n))}function Br({to:e,replace:t,state:n,relative:r}){Rn(Sr(),"<Navigate> may be used only in the context of a <Router> component.");let{static:i}=p.useContext(vr);On(!i,"<Navigate> must not be used on the initial render in a <StaticRouter>. This is a no-op, but you should modify your code so the <Navigate> is only ever rendered in response to some user interaction or state change.");let{matches:a}=p.useContext(kr),{pathname:o}=Cr(),s=$r(),l=rr(e,nr(a),o,"path"===r),u=JSON.stringify(l);return p.useEffect(()=>{s(JSON.parse(u),{replace:t,state:n,relative:r})},[s,u,r,t,n]),null}function Ur(e){Rn(!1,"A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>.")}function Yr({basename:e="/",children:t=null,location:n,navigationType:r="POP",navigator:i,static:a=!1,useTransitions:o}){Rn(!Sr(),"You cannot render a <Router> inside another <Router>. You should never have more than one in your app.");let s=e.replace(/^\/*/,"/"),l=p.useMemo(()=>({basename:s,navigator:i,static:a,useTransitions:o,future:{}}),[s,i,a,o]);"string"==typeof n&&(n=Ln(n));let{pathname:u="/",search:c="",hash:d="",state:h=null,key:f="default",mask:m}=n,g=p.useMemo(()=>{let e=Jn(u,s);return null==e?null:{location:{pathname:e,search:c,hash:d,state:h,key:f,mask:m},navigationType:r}},[s,u,c,d,h,f,r,m]);return On(null!=g,`<Router basename="${s}"> is not able to match the URL "${u}${c}${d}" because it does not start with the basename, so the <Router> won't render anything.`),null==g?null:p.createElement(vr.Provider,{value:l},p.createElement(wr.Provider,{children:t,value:g}))}function Hr({children:e,location:t}){return Tr(Vr(e),t)}function Vr(e,t=[]){let n=[];return p.Children.forEach(e,(e,r)=>{if(!p.isValidElement(e))return;let i=[...t,r];if(e.type===p.Fragment)return void n.push.apply(n,Vr(e.props.children,i));Rn(e.type===Ur,`[${"string"==typeof e.type?e.type:e.type.name}] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`),Rn(!e.props.index||!e.props.children,"An index route cannot have child routes.");let a={id:e.props.id||i.join("-"),caseSensitive:e.props.caseSensitive,element:e.props.element,Component:e.props.Component,index:e.props.index,path:e.props.path,middleware:e.props.middleware,loader:e.props.loader,action:e.props.action,hydrateFallbackElement:e.props.hydrateFallbackElement,HydrateFallback:e.props.HydrateFallback,errorElement:e.props.errorElement,ErrorBoundary:e.props.ErrorBoundary,hasErrorBoundary:!0===e.props.hasErrorBoundary||null!=e.props.ErrorBoundary||null!=e.props.errorElement,shouldRevalidate:e.props.shouldRevalidate,handle:e.props.handle,lazy:e.props.lazy};e.props.children&&(a.children=Vr(e.props.children,i)),n.push(a)}),n}p.memo(function({routes:e,manifest:t,future:n,state:r,isStatic:i,onError:a}){return Tr(e,void 0,{manifest:t,state:r,isStatic:i,onError:a})});var qr="get",Qr="application/x-www-form-urlencoded";function Gr(e){return"undefined"!=typeof HTMLElement&&e instanceof HTMLElement}var Xr=null;var Kr=new Set(["application/x-www-form-urlencoded","multipart/form-data","text/plain"]);function Jr(e){return null==e||Kr.has(e)?e:(On(!1,`"${e}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${Qr}"`),null)}function Zr(e,t){let n,r,i,a,o;if(Gr(s=e)&&"form"===s.tagName.toLowerCase()){let o=e.getAttribute("action");r=o?Jn(o,t):null,n=e.getAttribute("method")||qr,i=Jr(e.getAttribute("enctype"))||Qr,a=new FormData(e)}else if(function(e){return Gr(e)&&"button"===e.tagName.toLowerCase()}(e)||function(e){return Gr(e)&&"input"===e.tagName.toLowerCase()}(e)&&("submit"===e.type||"image"===e.type)){let o=e.form;if(null==o)throw new Error('Cannot submit a <button> or <input type="submit"> without a <form>');let s=e.getAttribute("formaction")||o.getAttribute("action");if(r=s?Jn(s,t):null,n=e.getAttribute("formmethod")||o.getAttribute("method")||qr,i=Jr(e.getAttribute("formenctype"))||Jr(o.getAttribute("enctype"))||Qr,a=new FormData(o,e),!function(){if(null===Xr)try{new FormData(document.createElement("form"),0),Xr=!1}catch(e){Xr=!0}return Xr}()){let{name:t,type:n,value:r}=e;if("image"===n){let e=t?`${t}.`:"";a.append(`${e}x`,"0"),a.append(`${e}y`,"0")}else t&&a.append(t,r)}}else{if(Gr(e))throw new Error('Cannot submit element that is not <form>, <button>, or <input type="submit|image">');n=qr,r=null,i=Qr,o=e}var s;return a&&"text/plain"===i&&(o=a,a=void 0),{action:r,method:n.toLowerCase(),encType:i,formData:a,body:o}}function ei(e,t){if(!1===e||null==e)throw new Error(t)}function ti(e,t,n,r){let i="string"==typeof e?new URL(e,"undefined"==typeof window?"server://singlefetch/":window.location.origin):e;return n?i.pathname.endsWith("/")?i.pathname=`${i.pathname}_.${r}`:i.pathname=`${i.pathname}.${r}`:"/"===i.pathname?i.pathname=`_root.${r}`:t&&"/"===Jn(i.pathname,t)?i.pathname=`${or(t)}/_root.${r}`:i.pathname=`${or(i.pathname)}.${r}`,i}function ni(e){return null!=e&&(null==e.href?"preload"===e.rel&&"string"==typeof e.imageSrcSet&&"string"==typeof e.imageSizes:"string"==typeof e.rel&&"string"==typeof e.href)}async function ri(e,t,n){return function(e,t){let n=new Set;return new Set(t),e.reduce((e,t)=>{let r=JSON.stringify(function(e){let t={},n=Object.keys(e).sort();for(let r of n)t[r]=e[r];return t}(t));return n.has(r)||(n.add(r),e.push({key:r,link:t})),e},[])}((await Promise.all(e.map(async e=>{let r=t.routes[e.route.id];if(r){let e=await async function(e,t){if(e.id in t)return t[e.id];try{let n=await import(e.module);return t[e.id]=n,n}catch(n){return console.error(`Error loading route module \`${e.module}\`, reloading page...`),console.error(n),window.__reactRouterContext&&window.__reactRouterContext.isSpaMode,window.location.reload(),new Promise(()=>{})}}(r,n);return e.links?e.links():[]}return[]}))).flat(1).filter(ni).filter(e=>"stylesheet"===e.rel||"preload"===e.rel).map(e=>"stylesheet"===e.rel?{...e,rel:"prefetch",as:"style"}:{...e,rel:"prefetch"}))}function ii(e,t,n,r,i,a){let o=(e,t)=>!n[t]||e.route.id!==n[t].route.id,s=(e,t)=>n[t].pathname!==e.pathname||n[t].route.path?.endsWith("*")&&n[t].params["*"]!==e.params["*"];return"assets"===a?t.filter((e,t)=>o(e,t)||s(e,t)):"data"===a?t.filter((t,a)=>{let l=r.routes[t.route.id];if(!l||!l.hasLoader)return!1;if(o(t,a)||s(t,a))return!0;if(t.route.shouldRevalidate){let r=t.route.shouldRevalidate({currentUrl:new URL(i.pathname+i.search+i.hash,window.origin),currentParams:n[0]?.params||{},nextUrl:new URL(e,window.origin),nextParams:t.params,defaultShouldRevalidate:!0});if("boolean"==typeof r)return r}return!0}):[]}function ai(e,t,{includeHydrateFallback:n}={}){return r=e.map(e=>{let r=t.routes[e.route.id];if(!r)return[];let i=[r.module];return r.clientActionModule&&(i=i.concat(r.clientActionModule)),r.clientLoaderModule&&(i=i.concat(r.clientLoaderModule)),n&&r.hydrateFallbackModule&&(i=i.concat(r.hydrateFallbackModule)),r.imports&&(i=i.concat(r.imports)),i}).flat(1),[...new Set(r)];var r}function oi(){let e=p.useContext(gr);return ei(e,"You must render this element inside a <DataRouterContext.Provider> element"),e}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");var si=p.createContext(void 0);function li(){let e=p.useContext(si);return ei(e,"You must render this element inside a <HydratedRouter> element"),e}function ui(e,t){return n=>{e&&e(n),n.defaultPrevented||t(n)}}function ci({page:e,...t}){let n=p.useContext(yr),{router:r}=oi(),i=p.useMemo(()=>In(r.routes,e,r.basename),[r.routes,e,r.basename]);return i?n?p.createElement(di,{page:e,matches:i,...t}):p.createElement(pi,{page:e,matches:i,...t}):null}function di({page:e,matches:t,...n}){let r=Cr(),{future:i}=li(),{basename:a}=oi(),o=p.useMemo(()=>{if(e===r.pathname+r.search+r.hash)return[];let n=ti(e,a,i.v8_trailingSlashAwareDataRequests,"rsc"),o=!1,s=[];for(let e of t)"function"==typeof e.route.shouldRevalidate?o=!0:s.push(e.route.id);return o&&s.length>0&&n.searchParams.set("_routes",s.join(",")),[n.pathname+n.search]},[a,i.v8_trailingSlashAwareDataRequests,e,r,t]);return p.createElement(p.Fragment,null,o.map(e=>p.createElement("link",{key:e,rel:"prefetch",as:"fetch",href:e,...n})))}function pi({page:e,matches:t,...n}){let r=Cr(),{future:i,manifest:a,routeModules:o}=li(),{basename:s}=oi(),{loaderData:l,matches:u}=function(){let e=p.useContext(xr);return ei(e,"You must render this element inside a <DataRouterStateContext.Provider> element"),e}(),c=p.useMemo(()=>ii(e,t,u,a,r,"data"),[e,t,u,a,r]),d=p.useMemo(()=>ii(e,t,u,a,r,"assets"),[e,t,u,a,r]),h=p.useMemo(()=>{if(e===r.pathname+r.search+r.hash)return[];let n=new Set,u=!1;if(t.forEach(e=>{let t=a.routes[e.route.id];t&&t.hasLoader&&(!c.some(t=>t.route.id===e.route.id)&&e.route.id in l&&o[e.route.id]?.shouldRevalidate||t.hasClientLoader?u=!0:n.add(e.route.id))}),0===n.size)return[];let d=ti(e,s,i.v8_trailingSlashAwareDataRequests,"data");return u&&n.size>0&&d.searchParams.set("_routes",t.filter(e=>n.has(e.route.id)).map(e=>e.route.id).join(",")),[d.pathname+d.search]},[s,i.v8_trailingSlashAwareDataRequests,l,r,a,c,t,e,o]),f=p.useMemo(()=>ai(d,a),[d,a]),m=function(e){let{manifest:t,routeModules:n}=li(),[r,i]=p.useState([]);return p.useEffect(()=>{let r=!1;return ri(e,t,n).then(e=>{r||i(e)}),()=>{r=!0}},[e,t,n]),r}(d);return p.createElement(p.Fragment,null,h.map(e=>p.createElement("link",{key:e,rel:"prefetch",as:"fetch",href:e,...n})),f.map(e=>p.createElement("link",{key:e,rel:"modulepreload",href:e,...n})),m.map(({key:e,link:t})=>p.createElement("link",{key:e,nonce:n.nonce,...t,crossOrigin:t.crossOrigin??n.crossOrigin})))}function hi(...e){return t=>{e.forEach(e=>{"function"==typeof e?e(t):null!=e&&(e.current=t)})}}si.displayName="FrameworkContext";var fi="undefined"!=typeof window&&void 0!==window.document&&void 0!==window.document.createElement;try{fi&&(window.__reactRouterVersion="7.16.0")}catch(Iy){}function mi({basename:e,children:t,useTransitions:n,window:r}){let i=p.useRef();null==i.current&&(i.current=Mn({window:r,v5Compat:!0}));let a=i.current,[o,s]=p.useState({action:a.action,location:a.location}),l=p.useCallback(e=>{!1===n?s(e):p.startTransition(()=>s(e))},[n]);return p.useLayoutEffect(()=>a.listen(l),[a,l]),p.createElement(Yr,{basename:e,children:t,location:o.location,navigationType:o.action,navigator:a,useTransitions:n})}var gi=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,xi=p.forwardRef(function({onClick:e,discover:t="render",prefetch:n="none",relative:r,reloadDocument:i,replace:a,mask:o,state:s,target:l,to:u,preventScrollReset:c,viewTransition:d,defaultShouldRevalidate:h,...f},m){let{basename:g,navigator:x,useTransitions:y}=p.useContext(vr),b="string"==typeof u&&gi.test(u),v=hr(u,g),w=function(e,{relative:t}={}){Rn(Sr(),"useHref() may be used only in the context of a <Router> component.");let{basename:n,navigator:r}=p.useContext(vr),{hash:i,pathname:a,search:o}=Pr(e,{relative:t}),s=a;return"/"!==n&&(s="/"===a?n:ar([n,a])),r.createHref({pathname:s,search:o,hash:i})}(u=v.to,{relative:r}),k=Cr(),_=null;if(o){let e=rr(o,[],k.mask?k.mask.pathname:"/",!0);"/"!==g&&(e.pathname="/"===e.pathname?g:ar([g,e.pathname])),_=x.createHref(e)}let[j,S,C]=function(e,t){let n=p.useContext(si),[r,i]=p.useState(!1),[a,o]=p.useState(!1),{onFocus:s,onBlur:l,onMouseEnter:u,onMouseLeave:c,onTouchStart:d}=t,h=p.useRef(null);p.useEffect(()=>{if("render"===e&&o(!0),"viewport"===e){let e=new IntersectionObserver(e=>{e.forEach(e=>{o(e.isIntersecting)})},{threshold:.5});return h.current&&e.observe(h.current),()=>{e.disconnect()}}},[e]),p.useEffect(()=>{if(r){let e=setTimeout(()=>{o(!0)},100);return()=>{clearTimeout(e)}}},[r]);let f=()=>{i(!0)},m=()=>{i(!1),o(!1)};return n?"intent"!==e?[a,h,{}]:[a,h,{onFocus:ui(s,f),onBlur:ui(l,m),onMouseEnter:ui(u,f),onMouseLeave:ui(c,m),onTouchStart:ui(d,f)}]:[!1,h,{}]}(n,f),z=function(e,{target:t,replace:n,mask:r,state:i,preventScrollReset:a,relative:o,viewTransition:s,defaultShouldRevalidate:l,useTransitions:u}={}){let c=$r(),d=Cr(),h=Pr(e,{relative:o});return p.useCallback(f=>{if(function(e,t){return!(0!==e.button||t&&"_self"!==t||function(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}(e))}(f,t)){f.preventDefault();let t=void 0!==n?n:Dn(d)===Dn(h),m=()=>c(e,{replace:t,mask:r,state:i,preventScrollReset:a,relative:o,viewTransition:s,defaultShouldRevalidate:l});u?p.startTransition(()=>m()):m()}},[d,c,h,n,r,i,t,e,a,o,s,l,u])}(u,{replace:a,mask:o,state:s,target:l,preventScrollReset:c,relative:r,viewTransition:d,defaultShouldRevalidate:h,useTransitions:y});let E=!(v.isExternal||i),$=p.createElement("a",{...f,...C,href:(E?_:void 0)||v.absoluteURL||w,onClick:E?function(t){e&&e(t),t.defaultPrevented||z(t)}:e,ref:hi(m,S),target:l,"data-discover":b||"render"!==t?void 0:"true"});return j&&!b?p.createElement(p.Fragment,null,$,p.createElement(ci,{page:w})):$});xi.displayName="Link";var yi=p.forwardRef(function({"aria-current":e="page",caseSensitive:t=!1,className:n="",end:r=!1,style:i,to:a,viewTransition:o,children:s,...l},u){let c=Pr(a,{relative:l.relative}),d=Cr(),h=p.useContext(xr),{navigator:f,basename:m}=p.useContext(vr),g=null!=h&&function(e,{relative:t}={}){let n=p.useContext(br);Rn(null!=n,"`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?");let{basename:r}=bi("useViewTransitionState"),i=Pr(e,{relative:t});if(!n.isTransitioning)return!1;let a=Jn(n.currentLocation.pathname,r)||n.currentLocation.pathname,o=Jn(n.nextLocation.pathname,r)||n.nextLocation.pathname;return null!=Kn(i.pathname,o)||null!=Kn(i.pathname,a)}(c)&&!0===o,x=f.encodeLocation?f.encodeLocation(c).pathname:c.pathname,y=d.pathname,b=h&&h.navigation&&h.navigation.location?h.navigation.location.pathname:null;t||(y=y.toLowerCase(),b=b?b.toLowerCase():null,x=x.toLowerCase()),b&&m&&(b=Jn(b,m)||b);const v="/"!==x&&x.endsWith("/")?x.length-1:x.length;let w,k=y===x||!r&&y.startsWith(x)&&"/"===y.charAt(v),_=null!=b&&(b===x||!r&&b.startsWith(x)&&"/"===b.charAt(x.length)),j={isActive:k,isPending:_,isTransitioning:g},S=k?e:void 0;w="function"==typeof n?n(j):[n,k?"active":null,_?"pending":null,g?"transitioning":null].filter(Boolean).join(" ");let C="function"==typeof i?i(j):i;return p.createElement(xi,{...l,"aria-current":S,className:w,ref:u,style:C,to:a,viewTransition:o},"function"==typeof s?s(j):s)});function bi(e){let t=p.useContext(gr);return Rn(t,function(e){return`${e} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}(e)),t}yi.displayName="NavLink",p.forwardRef(({discover:e="render",fetcherKey:t,navigate:n,reloadDocument:r,replace:i,state:a,method:o=qr,action:s,onSubmit:l,relative:u,preventScrollReset:c,viewTransition:d,defaultShouldRevalidate:h,...f},m)=>{let{useTransitions:g}=p.useContext(vr),x=function(){let{router:e}=bi("useSubmit"),{basename:t}=p.useContext(vr),n=Ir("useRouteId"),r=e.fetch,i=e.navigate;return p.useCallback(async(e,a={})=>{let{action:o,method:s,encType:l,formData:u,body:c}=Zr(e,t);if(!1===a.navigate){let e=a.fetcherKey||wi();await r(e,n,a.action||o,{defaultShouldRevalidate:a.defaultShouldRevalidate,preventScrollReset:a.preventScrollReset,formData:u,body:c,formMethod:a.method||s,formEncType:a.encType||l,flushSync:a.flushSync})}else await i(a.action||o,{defaultShouldRevalidate:a.defaultShouldRevalidate,preventScrollReset:a.preventScrollReset,formData:u,body:c,formMethod:a.method||s,formEncType:a.encType||l,replace:a.replace,state:a.state,fromRouteId:n,flushSync:a.flushSync,viewTransition:a.viewTransition})},[r,i,t,n])}(),y=function(e,{relative:t}={}){let{basename:n}=p.useContext(vr),r=p.useContext(kr);Rn(r,"useFormAction must be used inside a RouteContext");let[i]=r.matches.slice(-1),a={...Pr(e||".",{relative:t})},o=Cr();if(null==e){a.search=o.search;let e=new URLSearchParams(a.search),t=e.getAll("index");if(t.some(e=>""===e)){e.delete("index"),t.filter(e=>e).forEach(t=>e.append("index",t));let n=e.toString();a.search=n?`?${n}`:""}}e&&"."!==e||!i.route.index||(a.search=a.search?a.search.replace(/^\?/,"?index&"):"?index");"/"!==n&&(a.pathname="/"===a.pathname?n:ar([n,a.pathname]));return Dn(a)}(s,{relative:u}),b="get"===o.toLowerCase()?"get":"post",v="string"==typeof s&&gi.test(s);return p.createElement("form",{ref:m,method:b,action:y,onSubmit:r?l:e=>{if(l&&l(e),e.defaultPrevented)return;e.preventDefault();let r=e.nativeEvent.submitter,s=r?.getAttribute("formmethod")||o,f=()=>x(r||e.currentTarget,{fetcherKey:t,method:s,navigate:n,replace:i,state:a,relative:u,preventScrollReset:c,viewTransition:d,defaultShouldRevalidate:h});g&&!1!==n?p.startTransition(()=>f()):f()},...f,"data-discover":v||"render"!==e?void 0:"true"})}).displayName="Form";var vi=0,wi=()=>`__${String(++vi)}__`;var ki=C();const _i=[{label:"HOME",to:"/"},{label:"NUTRITION",to:"/nutrition"},{label:"YOGA",to:"/yoga"},{label:"AYURVEDA",to:"/ayurveda"},{label:"CONTACT",to:"/contact"},{label:"ABOUT",to:"/about"}],ji="/assets/home-about-dhanashree-CHPW8T-Q.webp",Si={brand:{logo:"https://res.cloudinary.com/drjzugsyo/image/upload/v1771263278/logo_aiaixs.png"},home:{homeHeroWatercolorIllustration:{mobile:"/assets/home-hero-watercolor-mobile-zuuxqceD.webp",desktop:"/assets/home-hero-watercolor-desktop-CTWWdH3U.webp",alt:"Watercolor illustration of a woman meditating in front of mountains and a glowing moon"},homeAboutDhanashree:{src:ji,alt:"Dhanashree seated in meditation outdoors"},homeYogaServiceWatercolor:{src:"/assets/home-yoga-service-watercolor-2-CVXKIc-X.webp",alt:"Watercolor illustration representing yoga practice in nature"},homeNutritionBowlWatercolor:{src:"/assets/home-nutrition-bowl-watercolor-DjF8JSb5.webp",alt:"Watercolor illustration of a nourishing bowl with fresh vegetables and grains"},homeAyurvedaMortarWatercolor:{src:"/assets/home-ayurveda-mortar-watercolor-DSqNm_Pi.webp",alt:"Watercolor illustration of Ayurvedic herbs, oil, and mortar and pestle"},heroSlides:["https://res.cloudinary.com/drjzugsyo/image/upload/f_auto,q_auto,w_1200/shree5_doyho6.webp","https://res.cloudinary.com/drjzugsyo/image/upload/f_auto,q_auto,w_1200/shree4_rnpdvt.webp"]},about:{aboutHeroDhanashree:{src:ji,alt:"Dhanashree seated in meditation outdoors"},journeyBeginning:{src:"/assets/about-journey-beginning-watercolor-kcpNV4e5.webp"},journeyWakeup:{src:"/assets/about-journey-wakeup-watercolor-DGea2g4r.webp"},journeyHealing:{src:"/assets/about-journey-healing-watercolor-BmwIzCjH.webp"},journeyAwareness:{src:"/assets/about-journey-awareness-watercolor-4Y1THyEa.webp"},journeyPurpose:{src:"/assets/about-journey-purpose-watercolor-C4t_bXbV.webp"},journeyTimeline:{step1:"https://res.cloudinary.com/drjzugsyo/image/upload/f_auto,q_auto,w_600/self1_uguqlb.jpg",step2:"https://res.cloudinary.com/drjzugsyo/image/upload/f_auto,q_auto,w_600/self2_e2xknl.jpg",step3:"https://res.cloudinary.com/drjzugsyo/image/upload/f_auto,q_auto,w_600/self3_ml3idz.jpg"},certifications:[{src:"https://res.cloudinary.com/drjzugsyo/image/upload/v1771263583/certificate_carousel_1_bsfcoq.jpg",title:"Medical Yoga Teacher Certification",alt:"Medical yoga teacher certification for Balance with Shree"},{src:"https://res.cloudinary.com/drjzugsyo/image/upload/v1771263574/certificate2_wl3vy9.jpg",title:"Parental Yoga Certification",alt:"Parental yoga certification for Balance with Shree"},{src:"https://res.cloudinary.com/drjzugsyo/image/upload/v1771263573/certificate3_lkbzmr.jpg",title:"Hatha and Ashtanga Yoga Certification",alt:"Hatha and Ashtanga Yoga certification for Balance with Shree"},{src:"/assets/degree-certificate-dhanashree-DcL9HL8-.webp",title:"Master of Science in Nutrition and Dietetics",alt:"Degree certificate for Master of Science in Nutrition and Dietetics"}]},yoga:{heroWatercolor:{mobile:"/assets/yoga-hero-watercolor-mobile-DZ3opBsL.webp",desktop:"/assets/yoga-hero-watercolor-desktop-Sl7ocSbA.webp",alt:"Watercolor illustration of a woman practicing yoga in a calm natural setting"},gallery:["https://res.cloudinary.com/drjzugsyo/image/upload/v1771263837/yogaimage1_t1hgpj.jpg","https://res.cloudinary.com/drjzugsyo/image/upload/v1771264338/shree2_i3c9mu.jpg","https://res.cloudinary.com/drjzugsyo/image/upload/v1771263548/shree3_gveuvh.jpg"],transformations:["https://res.cloudinary.com/drjzugsyo/image/upload/v1771263544/transform4_uqtnrd.jpg","https://res.cloudinary.com/drjzugsyo/image/upload/v1771263547/transform2_zlouig.jpg","https://res.cloudinary.com/drjzugsyo/image/upload/v1771263573/transform3_bzxtx8.jpg"],videos:[{id:"client-review-video-1",title:"Client Review",type:"video",src:"https://res.cloudinary.com/drjzugsyo/video/upload/v1780652409/new_client-review-video-1_c24p5j.mp4",poster:"https://res.cloudinary.com/drjzugsyo/video/upload/so_0/v1780652409/new_client-review-video-1_c24p5j.jpg",alt:"Client video review for Balance with Shree"},{id:"client-review-video-2",title:"Client Story",type:"video",src:"https://res.cloudinary.com/drjzugsyo/video/upload/v1770745584/IMG_7633_1_qooflf.mp4",poster:"https://res.cloudinary.com/drjzugsyo/video/upload/so_0/v1770745584/IMG_7633_1_qooflf.jpg",alt:"Client story video for Balance with Shree"},{id:"client-review-video-3",title:"Client Story",type:"video",src:"https://res.cloudinary.com/drjzugsyo/video/upload/v1770745298/IMG_7634_kapmzh.mp4",poster:"https://res.cloudinary.com/drjzugsyo/video/upload/so_0/v1770745298/IMG_7634_kapmzh.jpg",alt:"Client story video for Balance with Shree"}]},nutrition:{heroWatercolor:{mobile:"/assets/nutrition-hero-watercolor-mobile-CpCEVQFg.webp",desktop:"/assets/nutrition-hero-watercolor-desktop-DNUpJSvP.webp",alt:"Watercolor illustration of mindful nutrition with a food bowl and meditative figure"},bio:"https://res.cloudinary.com/drjzugsyo/image/upload/v1771263597/journey_jcc4im.jpg"},ayurveda:{heroWatercolor:{mobile:"/assets/ayurveda-hero-watercolor-mobile-D71ue0bf.webp",desktop:"/assets/ayurveda-hero-watercolor-desktop-lCbId4SJ.webp",alt:"Watercolor illustration of Ayurvedic herbs, oils, and traditional wellness elements in a calm natural setting"}},reviews:{clientPhotos:{harshadaDeo:{src:"/assets/review-harshada-deo-Cw1Z5Isc.JPG",alt:"Client review photo of Harshada Deo"},kavitaPatel:{src:"/assets/review-kavita-patel-FzYxYEQv.JPG",alt:"Client review photo of Kavita Patel"},mohiniSonak:{src:"/assets/review-mohini-sonak-D0GuE0Ex.JPG",alt:"Client review photo of Mohini Sonak"}}},testimonials:{defaultProfile:"/reviews/mander.jpeg"}},Ci=kn.header`
  width: 100%;
  padding: 22px 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;

  @media (max-width: 767px) {
    display: none;
  }
`,zi=kn.img`
  width: 82px;
  height: 82px;
  border-radius: 50%;
  object-fit: contain;
  box-shadow: 0 14px 30px rgba(0, 0, 0, 0.22),
    0 0 0 4px rgba(244, 255, 252, 0.9);
`,Ei=kn.nav`
  padding: 10px 40px;
  border-radius: 999px;
  background: rgba(248, 255, 252, 0.9);
  backdrop-filter: blur(18px);
  box-shadow: 0 20px 45px rgba(0, 0, 0, 0.08);
  display: flex;
  gap: 36px;
`;kn.div`
  display: flex;
  justify-content: center;
`,kn(yi)`
  position: relative;
  font-size: 13px;
  letter-spacing: 0.26em;
  text-transform: uppercase;
  cursor: pointer;
  color: #264139;
  padding-bottom: 6px;
  transition: color 200ms ease, transform 200ms ease, opacity 200ms ease;
  opacity: 0.8;
  text-decoration: none;

  &::after {
    content: "";
    position: absolute;
    left: 50%;
    bottom: 0;
    width: 0;
    height: 2px;
    border-radius: 999px;
    background: linear-gradient(90deg, #1f6b57, #52a08a);
    transform: translateX(-50%);
    transition: width 220ms ease;
  }

  &:hover {
    color: #1f6b57;
    opacity: 1;
    transform: translateY(-2px);
  }

  &:hover::after {
    width: 70%;
  }

  /* active route */
  &.active {
    color: #1f6b57;
    opacity: 1;
  }

  &.active::after {
    width: 70%;
  }
`;const $i=kn.header`
  width: 100%;
  padding: calc(env(safe-area-inset-top) + 8px) 16px 8px;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 60px;
  background: rgba(236, 245, 240, 0.9);
  backdrop-filter: blur(10px);
  border-bottom: 1px solid rgba(31, 95, 74, 0.08);
  box-shadow: 0 8px 20px rgba(15, 60, 40, 0.05);

  @media (min-width: 768px) {
    display: none;
  }
`,Pi=kn.img`
  width: 46px;
  height: 46px;
  border-radius: 50%;
  object-fit: contain;
  box-shadow: 0 14px 30px rgba(0, 0, 0, 0.22),
    0 0 0 4px rgba(244, 255, 252, 0.9);
`,Ti=kn.button`
  position: absolute;
  right: 16px;
  top: 50%;
  transform: translateY(-50%);
  width: 34px;
  height: 34px;
  border-radius: 999px;
  border: none;
  background: rgba(248, 255, 252, 0.95);
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 10px 24px rgba(0, 0, 0, 0.2);
  cursor: pointer;
  transition: transform 180ms ease, box-shadow 180ms ease;

  &:hover {
    transform: translateY(-50%) translateY(-1px);
    box-shadow: 0 14px 28px rgba(0, 0, 0, 0.18);
  }
`,Mi=kn.span`
  position: relative;
  width: 18px;
  height: 2px;
  background: #264139;

  &::before,
  &::after {
    content: "";
    position: absolute;
    left: 0;
    width: 18px;
    height: 2px;
    background: #264139;
  }

  &::before {
    top: -5px;
  }
  &::after {
    top: 5px;
  }
`,Ri=kn.div`
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.35);
  backdrop-filter: blur(4px);
  z-index: 80;
  display: flex;
  opacity: ${({$open:e})=>e?1:0};
  pointer-events: ${({$open:e})=>e?"auto":"none"};
  transition: opacity 600ms ease-out;

  @media (min-width: 768px) {
    display: none;
  }
`,Oi=kn.aside`
  width: 78%;
  max-width: 320px;
  height: 100%;
  background: linear-gradient(180deg, rgba(248, 255, 252, 0.98), rgba(238, 246, 241, 0.98));
  box-shadow: 12px 0 40px rgba(0, 0, 0, 0.25);
  padding: 22px 22px 28px;
  display: flex;
  flex-direction: column;
  transform: translateX(${({$open:e})=>e?"0":"-100%"});
  transition: transform 600ms cubic-bezier(0.16, 1, 0.3, 1);
`,Ni=kn.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 32px;

  p {
    font-size: 18px;
    line-height: 1.05;
    margin-right: 35px;
    color: #264139;
  }
`,Ai=kn.button`
  border: none;
  background: transparent;
  font-size: 22px;
  cursor: pointer;
  color: #264139;
`,Di=kn.nav`
  display: flex;
  flex-direction: column;
  gap: 18px;
`,Li=kn.span`
  position: relative;
  font-size: 13px;
  letter-spacing: 0.26em;
  text-transform: uppercase;
  cursor: pointer;
  color: #264139;
  padding-bottom: 6px;
  transition: color 200ms ease, transform 200ms ease, opacity 200ms ease;
  opacity: 0.8;
  &::after {
    content: "";
    position: absolute;
    left: 50%;
    bottom: 0;
    width: 0;
    height: 2px;
    border-radius: 999px;
    background: linear-gradient(90deg, #1f6b57, #52a08a);
    transform: translateX(-50%);
    transition: width 220ms ease;
  }
  &:hover {
    color: #1f6b57;
    opacity: 1;
    transform: translateY(-2px);
  }
  &:hover::after {
    width: 70%;
  }
`,Ii=kn.span`
  border: none;
  background: transparent;
  text-align: left;
  font-size: 15px;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: #264139;
  padding: 8px 0;
  cursor: pointer;
`;kn.div`
  margin-top: 28px;
`;const Fi=kn.div`
  a {
    text-decoration: none;
    color: inherit;
  }

  a.active ${Li} {
    color: #1f6b57;
    opacity: 1;
  }

  a.active ${Li}::after {
    width: 70%;
  }

  a.active ${Ii} {
    color: #1f6b57;
    font-weight: 600;
  }
  @media (max-width: 768px) {
    position: sticky;
    top: 0;
    z-index: 120;
  }
`,Wi=()=>{const[e,t]=p.useState(!1);return p.useEffect(()=>{if(!e)return;const n=e=>{"Escape"===e.key&&t(!1)};return window.addEventListener("keydown",n),()=>window.removeEventListener("keydown",n)},[e]),d.jsx(d.Fragment,{children:d.jsxs(Fi,{children:[d.jsxs(Ci,{children:[d.jsx(zi,{src:Si.brand.logo,alt:"Logo"}),d.jsx(Ei,{children:_i.map(e=>d.jsx(yi,{to:e.to,end:"/"===e.to,children:d.jsx(Li,{children:e.label})},e.to))})]}),d.jsxs($i,{children:[d.jsx(Pi,{src:Si.brand.logo,alt:"Logo"}),d.jsx(Ti,{onClick:()=>t(!0),"aria-label":"Open menu","aria-expanded":e,"aria-controls":"mobile-site-drawer",children:d.jsx(Mi,{})})]}),d.jsx(Ri,{$open:e,onClick:()=>t(!1),children:d.jsxs(Oi,{id:"mobile-site-drawer",$open:e,"aria-label":"Mobile navigation",onClick:e=>e.stopPropagation(),children:[d.jsxs(Ni,{children:[d.jsx(Pi,{src:Si.brand.logo,alt:"Logo"}),d.jsx("p",{children:"Balance with Shree"}),d.jsx(Ai,{onClick:()=>t(!1),"aria-label":"Close menu",children:"✕"})]}),d.jsx(Di,{children:_i.map(e=>d.jsx(yi,{to:e.to,end:"/"===e.to,onClick:()=>t(!1),children:d.jsx(Ii,{children:e.label})},e.to))})]})})]})})},Bi=e=>{const t=(e=>e.replace(/^([A-Z])|[\s-_]+(\w)/g,(e,t,n)=>n?n.toUpperCase():t.toLowerCase()))(e);return t.charAt(0).toUpperCase()+t.slice(1)},Ui=(...e)=>e.filter((e,t,n)=>Boolean(e)&&""!==e.trim()&&n.indexOf(e)===t).join(" ").trim(),Yi=e=>{for(const t in e)if(t.startsWith("aria-")||"role"===t||"title"===t)return!0};var Hi={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};const Vi=p.forwardRef(({color:e="currentColor",size:t=24,strokeWidth:n=2,absoluteStrokeWidth:r,className:i="",children:a,iconNode:o,...s},l)=>p.createElement("svg",{ref:l,...Hi,width:t,height:t,stroke:e,strokeWidth:r?24*Number(n)/Number(t):n,className:Ui("lucide",i),...!a&&!Yi(s)&&{"aria-hidden":"true"},...s},[...o.map(([e,t])=>p.createElement(e,t)),...Array.isArray(a)?a:[a]])),qi=(e,t)=>{const n=p.forwardRef(({className:n,...r},i)=>{return p.createElement(Vi,{ref:i,iconNode:t,className:Ui(`lucide-${a=Bi(e),a.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase()}`,`lucide-${e}`,n),...r});var a});return n.displayName=Bi(e),n},Qi=qi("apple",[["path",{d:"M12 6.528V3a1 1 0 0 1 1-1h0",key:"11qiee"}],["path",{d:"M18.237 21A15 15 0 0 0 22 11a6 6 0 0 0-10-4.472A6 6 0 0 0 2 11a15.1 15.1 0 0 0 3.763 10 3 3 0 0 0 3.648.648 5.5 5.5 0 0 1 5.178 0A3 3 0 0 0 18.237 21",key:"110c12"}]]),Gi=qi("arrow-right",[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"m12 5 7 7-7 7",key:"xquz4c"}]]),Xi=qi("audio-lines",[["path",{d:"M2 10v3",key:"1fnikh"}],["path",{d:"M6 6v11",key:"11sgs0"}],["path",{d:"M10 3v18",key:"yhl04a"}],["path",{d:"M14 8v7",key:"3a1oy3"}],["path",{d:"M18 5v13",key:"123xd1"}],["path",{d:"M22 10v3",key:"154ddg"}]]),Ki=qi("calendar-days",[["path",{d:"M8 2v4",key:"1cmpym"}],["path",{d:"M16 2v4",key:"4m81vk"}],["rect",{width:"18",height:"18",x:"3",y:"4",rx:"2",key:"1hopcy"}],["path",{d:"M3 10h18",key:"8toen8"}],["path",{d:"M8 14h.01",key:"6423bh"}],["path",{d:"M12 14h.01",key:"1etili"}],["path",{d:"M16 14h.01",key:"1gbofw"}],["path",{d:"M8 18h.01",key:"lrp35t"}],["path",{d:"M12 18h.01",key:"mhygvu"}],["path",{d:"M16 18h.01",key:"kzsmim"}]]),Ji=qi("check",[["path",{d:"M20 6 9 17l-5-5",key:"1gmf2c"}]]),Zi=qi("chevron-left",[["path",{d:"m15 18-6-6 6-6",key:"1wnfg3"}]]),ea=qi("chevron-right",[["path",{d:"m9 18 6-6-6-6",key:"mthhwq"}]]),ta=qi("earth",[["path",{d:"M21.54 15H17a2 2 0 0 0-2 2v4.54",key:"1djwo0"}],["path",{d:"M7 3.34V5a3 3 0 0 0 3 3a2 2 0 0 1 2 2c0 1.1.9 2 2 2a2 2 0 0 0 2-2c0-1.1.9-2 2-2h3.17",key:"1tzkfa"}],["path",{d:"M11 21.95V18a2 2 0 0 0-2-2a2 2 0 0 1-2-2v-1a2 2 0 0 0-2-2H2.05",key:"14pb5j"}],["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}]]),na=qi("flower-2",[["path",{d:"M12 5a3 3 0 1 1 3 3m-3-3a3 3 0 1 0-3 3m3-3v1M9 8a3 3 0 1 0 3 3M9 8h1m5 0a3 3 0 1 1-3 3m3-3h-1m-2 3v-1",key:"3pnvol"}],["circle",{cx:"12",cy:"8",r:"2",key:"1822b1"}],["path",{d:"M12 10v12",key:"6ubwww"}],["path",{d:"M12 22c4.2 0 7-1.667 7-5-4.2 0-7 1.667-7 5Z",key:"9hd38g"}],["path",{d:"M12 22c-4.2 0-7-1.667-7-5 4.2 0 7 1.667 7 5Z",key:"ufn41s"}]]),ra=qi("heart-handshake",[["path",{d:"M19.414 14.414C21 12.828 22 11.5 22 9.5a5.5 5.5 0 0 0-9.591-3.676.6.6 0 0 1-.818.001A5.5 5.5 0 0 0 2 9.5c0 2.3 1.5 4 3 5.5l5.535 5.362a2 2 0 0 0 2.879.052 2.12 2.12 0 0 0-.004-3 2.124 2.124 0 1 0 3-3 2.124 2.124 0 0 0 3.004 0 2 2 0 0 0 0-2.828l-1.881-1.882a2.41 2.41 0 0 0-3.409 0l-1.71 1.71a2 2 0 0 1-2.828 0 2 2 0 0 1 0-2.828l2.823-2.762",key:"17lmqv"}]]),ia=qi("heart-pulse",[["path",{d:"M2 9.5a5.5 5.5 0 0 1 9.591-3.676.56.56 0 0 0 .818 0A5.49 5.49 0 0 1 22 9.5c0 2.29-1.5 4-3 5.5l-5.492 5.313a2 2 0 0 1-3 .019L5 15c-1.5-1.5-3-3.2-3-5.5",key:"mvr1a0"}],["path",{d:"M3.22 13H9.5l.5-1 2 4.5 2-7 1.5 3.5h5.27",key:"auskq0"}]]),aa=qi("heart",[["path",{d:"M2 9.5a5.5 5.5 0 0 1 9.591-3.676.56.56 0 0 0 .818 0A5.49 5.49 0 0 1 22 9.5c0 2.29-1.5 4-3 5.5l-5.492 5.313a2 2 0 0 1-3 .019L5 15c-1.5-1.5-3-3.2-3-5.5",key:"mvr1a0"}]]),oa=qi("instagram",[["rect",{width:"20",height:"20",x:"2",y:"2",rx:"5",ry:"5",key:"2e1cvw"}],["path",{d:"M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z",key:"9exkf1"}],["line",{x1:"17.5",x2:"17.51",y1:"6.5",y2:"6.5",key:"r4j83e"}]]),sa=qi("leaf",[["path",{d:"M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z",key:"nnexq3"}],["path",{d:"M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12",key:"mt58a7"}]]),la=qi("mail",[["path",{d:"m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7",key:"132q7q"}],["rect",{x:"2",y:"4",width:"20",height:"16",rx:"2",key:"izxlao"}]]),ua=qi("message-circle-more",[["path",{d:"M2.992 16.342a2 2 0 0 1 .094 1.167l-1.065 3.29a1 1 0 0 0 1.236 1.168l3.413-.998a2 2 0 0 1 1.099.092 10 10 0 1 0-4.777-4.719",key:"1sd12s"}],["path",{d:"M8 12h.01",key:"czm47f"}],["path",{d:"M12 12h.01",key:"1mp3jc"}],["path",{d:"M16 12h.01",key:"1l6xoz"}]]),ca=qi("message-circle",[["path",{d:"M2.992 16.342a2 2 0 0 1 .094 1.167l-1.065 3.29a1 1 0 0 0 1.236 1.168l3.413-.998a2 2 0 0 1 1.099.092 10 10 0 1 0-4.777-4.719",key:"1sd12s"}]]),da=qi("moon-star",[["path",{d:"M18 5h4",key:"1lhgn2"}],["path",{d:"M20 3v4",key:"1olli1"}],["path",{d:"M20.985 12.486a9 9 0 1 1-9.473-9.472c.405-.022.617.46.402.803a6 6 0 0 0 8.268 8.268c.344-.215.825-.004.803.401",key:"kfwtm"}]]),pa=qi("phone-call",[["path",{d:"M13 2a9 9 0 0 1 9 9",key:"1itnx2"}],["path",{d:"M13 6a5 5 0 0 1 5 5",key:"11nki7"}],["path",{d:"M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384",key:"9njp5v"}]]),ha=qi("scale",[["path",{d:"M12 3v18",key:"108xh3"}],["path",{d:"m19 8 3 8a5 5 0 0 1-6 0zV7",key:"zcdpyk"}],["path",{d:"M3 7h1a17 17 0 0 0 8-2 17 17 0 0 0 8 2h1",key:"1yorad"}],["path",{d:"m5 8 3 8a5 5 0 0 1-6 0zV7",key:"eua70x"}],["path",{d:"M7 21h10",key:"1b0cd5"}]]),fa=qi("sparkles",[["path",{d:"M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z",key:"1s2grr"}],["path",{d:"M20 2v4",key:"1rf3ol"}],["path",{d:"M22 4h-4",key:"gwowj6"}],["circle",{cx:"4",cy:"20",r:"2",key:"6kqj1y"}]]),ma=qi("sun-medium",[["circle",{cx:"12",cy:"12",r:"4",key:"4exip2"}],["path",{d:"M12 3v1",key:"1asbbs"}],["path",{d:"M12 20v1",key:"1wcdkc"}],["path",{d:"M3 12h1",key:"lp3yf2"}],["path",{d:"M20 12h1",key:"1vloll"}],["path",{d:"m18.364 5.636-.707.707",key:"1hakh0"}],["path",{d:"m6.343 17.657-.707.707",key:"18m9nf"}],["path",{d:"m5.636 5.636.707.707",key:"1xv1c5"}],["path",{d:"m17.657 17.657.707.707",key:"vl76zb"}]]),ga=qi("sun",[["circle",{cx:"12",cy:"12",r:"4",key:"4exip2"}],["path",{d:"M12 2v2",key:"tus03m"}],["path",{d:"M12 20v2",key:"1lh1kg"}],["path",{d:"m4.93 4.93 1.41 1.41",key:"149t6j"}],["path",{d:"m17.66 17.66 1.41 1.41",key:"ptbguv"}],["path",{d:"M2 12h2",key:"1t8f8n"}],["path",{d:"M20 12h2",key:"1q8mjw"}],["path",{d:"m6.34 17.66-1.41 1.41",key:"1m8zz5"}],["path",{d:"m19.07 4.93-1.41 1.41",key:"1shlcs"}]]),xa=qi("waves",[["path",{d:"M2 6c.6.5 1.2 1 2.5 1C7 7 7 5 9.5 5c2.6 0 2.4 2 5 2 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1",key:"knzxuh"}],["path",{d:"M2 12c.6.5 1.2 1 2.5 1 2.5 0 2.5-2 5-2 2.6 0 2.4 2 5 2 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1",key:"2jd2cc"}],["path",{d:"M2 18c.6.5 1.2 1 2.5 1 2.5 0 2.5-2 5-2 2.6 0 2.4 2 5 2 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1",key:"rd2r6e"}]]),ya=qi("zoom-in",[["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}],["line",{x1:"21",x2:"16.65",y1:"21",y2:"16.65",key:"13gj7c"}],["line",{x1:"11",x2:"11",y1:"8",y2:"14",key:"1vmskp"}],["line",{x1:"8",x2:"14",y1:"11",y2:"11",key:"durymu"}]]),ba=qi("zoom-out",[["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}],["line",{x1:"21",x2:"16.65",y1:"21",y2:"16.65",key:"13gj7c"}],["line",{x1:"8",x2:"14",y1:"11",y2:"11",key:"durymu"}]]),va={sm:bn`
    min-height: 42px;
    padding: 10px 18px;
    font-size: 13px;
  `,md:bn`
    min-height: 46px;
    padding: 12px 24px;
    font-size: 14px;
  `,lg:bn`
    min-height: 52px;
    padding: 14px 28px;
    font-size: 15px;
  `},wa={primary:bn`
    background: ${({theme:e})=>e.colors.primary};
    color: ${({theme:e})=>e.colors.textWhite};
    border-color: ${({theme:e})=>e.colors.primary};
    box-shadow: ${({theme:e})=>e.shadows.button};

    &:hover {
      background: #184d3b;
      border-color: #184d3b;
      box-shadow: 0 20px 42px rgba(31, 95, 74, 0.3);
    }
  `,secondary:bn`
    background: rgba(255, 255, 255, 0.88);
    color: ${({theme:e})=>e.colors.textPrimary};
    border-color: rgba(122, 160, 143, 0.42);
    box-shadow: ${({theme:e})=>e.shadows.soft};

    &:hover {
      background: ${({theme:e})=>e.colors.ivory};
      border-color: rgba(122, 160, 143, 0.58);
    }
  `,outline:bn`
    background: rgba(255, 255, 255, 0.18);
    color: ${({theme:e})=>e.colors.primary};
    border-color: rgba(31, 95, 74, 0.28);

    &:hover {
      background: rgba(255, 255, 255, 0.7);
      border-color: rgba(31, 95, 74, 0.46);
    }
  `},ka=bn`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  width: ${({$fullWidth:e})=>e?"100%":"auto"};
  border-radius: ${({theme:e})=>e.radius.pill};
  border: 1px solid transparent;
  font-family: ${({theme:e})=>e.fonts.body};
  font-weight: 600;
  letter-spacing: 0.04em;
  text-transform: none;
  text-decoration: none;
  cursor: pointer;
  transition:
    background 180ms ease,
    color 180ms ease,
    border-color 180ms ease,
    box-shadow 180ms ease,
    transform 160ms ease;
  -webkit-tap-highlight-color: transparent;

  ${({$size:e})=>va[e]};
  ${({$variant:e})=>wa[e]};

  &:hover {
    transform: translateY(-1px);
  }

  &:active {
    transform: translateY(0);
  }

  &:focus-visible {
    outline: none;
    box-shadow:
      0 0 0 3px ${({theme:e})=>e.colors.primaryActiveLightest},
      0 0 0 1px ${({theme:e})=>e.colors.primaryActive};
  }

  &:disabled {
    opacity: 0.68;
    cursor: not-allowed;
    transform: none;
    box-shadow: none;
  }
`,_a=kn.button`
  ${ka}
`,ja=kn.a`
  ${ka}
`,Sa=kn.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  order: ${({$position:e})=>"right"===e?2:0};
`,Ca=({children:e,icon:t,iconPosition:n="left"})=>d.jsxs(d.Fragment,{children:[t?d.jsx(Sa,{$position:n,children:t}):null,d.jsx("span",{children:e})]}),za=({variant:e="primary",size:t="md",fullWidth:n=!1,icon:r,iconPosition:i="left",children:a,...o})=>"to"in o&&o.to?d.jsx(ja,{as:xi,to:o.to,$variant:e,$size:t,$fullWidth:n,...o,children:d.jsx(Ca,{icon:r,iconPosition:i,children:a})}):"href"in o&&o.href?d.jsx(ja,{$variant:e,$size:t,$fullWidth:n,...o,children:d.jsx(Ca,{icon:r,iconPosition:i,children:a})}):d.jsx(_a,{type:o.type??"button",$variant:e,$size:t,$fullWidth:n,...o,children:d.jsx(Ca,{icon:r,iconPosition:i,children:a})}),Ea=zn`
  from {
    opacity: 0;
    transform: perspective(1200px) rotateX(-12deg) scale(0.94) translateY(40px);
  }
  to {
    opacity: 1;
    transform: perspective(1200px) rotateX(0deg) scale(1) translateY(0);
  }
`,$a=zn`
  from {
    opacity: 1;
    transform: perspective(1200px) rotateX(0deg) scale(1) translateY(0);
  }
  to {
    opacity: 0;
    transform: perspective(1200px) rotateX(-10deg) scale(0.95) translateY(40px);
  }
`,Pa=kn.div`
  position: fixed;
  inset: 0;
  background: rgba(14, 22, 18, 0.55);
  backdrop-filter: blur(8px);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
  padding: 24px;
`,Ta=kn.div`
  background: linear-gradient(180deg, #ffffff 0%, #fbfdfc 100%);
  border-radius: 28px;
  width: 100%;
  max-width: 900px;
  overflow-y: auto;
  padding: 40px 36px;
  position: relative;
  border-radius: 24px;
  box-shadow:
    0px 40px 80px rgba(15, 60, 40, 0.25),
    0px 2px 8px rgba(15, 60, 40, 0.08);

  transform-origin: center top;

  animation: ${({$closing:e})=>e?bn`
          ${$a} 0.45s cubic-bezier(0.22, 0.61, 0.36, 1)
        `:bn`
          ${Ea} 0.55s cubic-bezier(0.22, 0.61, 0.36, 1)
        `};

  @media (max-width: 768px) {
    align-self: flex-end;
    transform-origin: center bottom;
  }
`,Ma=kn.button`
  position: absolute;
  top: 18px;
  right: 18px;
  border: none;
  background: #eef4f1;
  width: 36px;
  height: 36px;
  border-radius: 50%;
  cursor: pointer;
`,Ra=({isOpen:e,onClose:t,children:n})=>{const[r,i]=p.useState(!1),a=p.useCallback(()=>{r||(document.body.style.overflow="auto",i(!0),window.setTimeout(()=>{i(!1),t()},450))},[r,t]);return p.useEffect(()=>{if(!e)return;document.body.style.overflow="hidden";const t=e=>{"Escape"===e.key&&a()};return window.addEventListener("keydown",t),()=>{window.removeEventListener("keydown",t),document.body.style.overflow="auto"}},[a,e]),e?ki.createPortal(d.jsx(Pa,{onClick:a,children:d.jsxs(Ta,{$closing:r,role:"dialog","aria-modal":"true",onClick:e=>e.stopPropagation(),children:[d.jsx(Ma,{onClick:a,"aria-label":"Close dialog",children:"✕"}),n]})}),document.body):null},Oa=kn.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`,Na=kn.h2`
  font-size: 26px;
  font-weight: 600;
  color: #1f3d2b;
`,Aa=kn.div`
  padding-left: 4px;
`,Da=kn.h4`
  font-size: 17px;
  font-weight: 600;
  color: #24312d;
  margin-bottom: 6px;
`,La=kn.p`
  font-size: 14.5px;
  color: #2b2a29;
  opacity: 0.8;
`,Ia=kn.button`
  padding: 16px 36px;
  border-radius: 999px;
  border: none;

  background: linear-gradient(135deg, #7fb6a1 0%, #5f9f86 100%);

  color: #ffffff;
`,Fa=({title:e,packages:t,cta:n})=>{const r=$r();return d.jsxs(Oa,{children:[d.jsx(Na,{children:e}),t.map(e=>d.jsxs(Aa,{children:[d.jsx(Da,{children:e.title}),d.jsx(La,{children:e.note})]},e.title)),d.jsx(Ia,{onClick:()=>{r("/yoga")},children:n})]})},Wa=kn.div`
  display: flex;
  flex-direction: column;
  gap: 28px;
`,Ba=kn.h2`
  font-size: 26px;
  font-weight: 600;
  color: #1f3d2b;
`,Ua=kn.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`,Ya=kn.button`
  background: linear-gradient(180deg, #ffffff 0%, #f7fbf9 100%);
  border: 1px solid rgba(15, 60, 40, 0.08);
  border-radius: 20px;
  padding: 26px 22px;
  text-align: left;
  cursor: pointer;

  box-shadow: 0px 12px 30px rgba(15, 60, 40, 0.12);

  transition: all 0.25s ease;

  h4 {
    font-size: 18px;
    font-weight: 600;
    color: #24312d;
    margin-bottom: 6px;
  }

  p {
    font-size: 14.5px;
    color: #2b2a29;
    opacity: 0.8;
  }

  &:hover {
    transform: translateY(-4px);
    box-shadow: 0px 18px 40px rgba(15, 60, 40, 0.18);
    border-color: rgba(15, 60, 40, 0.18);
  }
`,Ha=({onSelect:e})=>{const t=$r(),n=n=>{e?.(),t(n)};return d.jsxs(Wa,{children:[d.jsx(Ba,{children:"Book a Session"}),d.jsxs(Ua,{children:[d.jsxs(Ya,{onClick:()=>n("/yoga"),children:[d.jsx("h4",{children:"Yoga"}),d.jsx("p",{children:"Personal & therapeutic yoga sessions"})]}),d.jsxs(Ya,{onClick:()=>n("/ayurveda"),children:[d.jsx("h4",{children:"Ayurveda"}),d.jsx("p",{children:"Holistic healing & lifestyle guidance"})]}),d.jsxs(Ya,{onClick:()=>n("/nutrition"),children:[d.jsx("h4",{children:"Nutrition"}),d.jsx("p",{children:"Mindful & clinical nutrition support"})]})]})]})},Va="Hi Shree, I’d love to connect regarding your wellness offerings.",qa="Hi Shree, I feel drawn to your work and would love to begin my wellness journey with you.",Qa="Hi! I’d like to book a Discovery Call session.",Ga="Hi Shree, I’d like to book an Ayurveda Discovery Call for ₹300. Please let me know the next steps.",Xa="balancewithshree@gmail.com",Ka="balancewithshree@gmail.com",Ja="+91 80870 48659",Za="tel:+918087048659",eo="918087048659",to="https://www.instagram.com/balancewithshree",no="Online • One-on-One • Worldwide",ro=(e=Va)=>`https://wa.me/${eo}?text=${encodeURIComponent(e)}`,io=[{name:"Harshada Deo",handle:"",image:Si.reviews.clientPhotos.harshadaDeo.src,alt:Si.reviews.clientPhotos.harshadaDeo.alt,text:"Dhanashree’s sessions feel very calm and personal. She explains everything in a simple way and helped me become more consistent with my yoga practice."},{name:"Mohini Sonak",handle:"",image:Si.reviews.clientPhotos.mohiniSonak.src,alt:Si.reviews.clientPhotos.mohiniSonak.alt,text:"Her approach is gentle, patient, and very supportive. I felt comfortable asking questions and slowly building healthier habits."},{name:"Kavita Patel",handle:"",image:Si.reviews.clientPhotos.kavitaPatel.src,alt:Si.reviews.clientPhotos.kavitaPatel.alt,text:"I really liked how practical her guidance was. The yoga and lifestyle suggestions felt easy to follow and suited my daily routine."},{name:"Mandar Athavale",handle:"@athavalemandar",image:Si.testimonials.defaultProfile,alt:"Client review photo of Mandar Athavale",text:"Everyday yoga practice for the last 03 months has improved my body flexibility and concentration. Dhanashree guides well and helps improve each asana. I highly recommend her yoga sessions."}],ao=bn`
  background: linear-gradient(180deg, rgba(255, 255, 255, 0.95), rgba(251, 249, 243, 0.98));
  border: 1px solid rgba(122, 160, 143, 0.12);
  box-shadow: 0 20px 48px rgba(15, 60, 40, 0.08);
  border-radius: 28px;

  @media (max-width: 768px) {
    border-radius: 24px;
  }
`,oo=kn.div`
  width: 100%;
  overflow-x: hidden;
  padding: 0 0 24px;
`,so=kn.div`
  width: min(calc(100% - 22px), 1200px);
  margin: 0 auto;

  @media (max-width: 768px) {
    width: min(calc(100% - 18px), 430px);
  }
`,lo=kn.div`
  display: flex;
  flex-direction: column;
  gap: 18px;

  > * {
    scroll-margin-top: 76px;
  }

  @media (min-width: 769px) {
    > * {
      scroll-margin-top: 108px;
    }
  }
`,uo=kn.section`
  position: relative;
`,co=kn.div`
  position: relative;
  overflow: hidden;
  border-radius: 0 0 24px 24px;
  background: #edf6f1;
  aspect-ratio: 0.8;
  box-shadow: 0 18px 40px rgba(15, 60, 40, 0.08);

  @media (min-width: 769px) {
    ${ao};
    aspect-ratio: auto;
    min-height: 560px;
    border-radius: 30px;
  }

  @media (max-width: 420px) {
    aspect-ratio: 0.79;
  }
`,po=kn.picture`
  display: block;
  width: 100%;
  height: 100%;
  min-height: inherit;
`,ho=kn.img`
  display: block;
  width: 100%;
  height: 100%;
  min-height: inherit;
  object-fit: cover;
  object-position: center 54%;

  @media (min-width: 769px) {
    object-position: center 54%;
  }
`,fo=kn.div`
  position: absolute;
  inset: 0;
  pointer-events: none;
  background:
    linear-gradient(180deg, rgba(255, 250, 242, 0.03) 0%, rgba(18, 30, 26, 0.02) 48%, rgba(19, 33, 28, 0.18) 100%),
    radial-gradient(circle at top center, rgba(255, 255, 255, 0.14), transparent 34%);
`,mo=kn.div`
  position: absolute;
  left: 14px;
  right: 14px;
  bottom: 20px;
  display: flex;
  gap: 8px;
  z-index: 2;

  @media (max-width: 360px) {
    flex-wrap: wrap;
  }

  @media (min-width: 769px) {
    left: 24px;
    right: auto;
    width: min(100% - 48px, 520px);
    bottom: 22px;
  }
`,go=kn.button`
  flex: 1 1 0;
  min-height: 48px;
  border-radius: 999px;
  border: 1px solid rgba(255, 255, 255, 0.44);
  background: linear-gradient(180deg, rgba(97, 103, 49, 0.54), rgba(121, 126, 63, 0.6));
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  color: #ffffff;
  box-shadow:
    inset 0 1px 0 rgba(255, 255, 255, 0.28),
    0 14px 28px rgba(52, 65, 35, 0.2);
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  padding: 0 14px;
  font-family: ${({theme:e})=>e.fonts.body};
  font-size: 13px;
  font-weight: 600;
  letter-spacing: 0.01em;
  cursor: pointer;
  transition:
    transform 180ms ease,
    box-shadow 180ms ease,
    background 180ms ease;

  &:hover {
    transform: translateY(-1px);
    box-shadow:
      inset 0 1px 0 rgba(255, 255, 255, 0.28),
      0 18px 34px rgba(52, 65, 35, 0.24);
  }

  &:focus-visible {
    outline: 2px solid rgba(255, 255, 255, 0.82);
    outline-offset: 2px;
  }

  @media (max-width: 360px) {
    width: 100%;
    flex-basis: 100%;
  }
`,xo=kn.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  opacity: 0.96;
`,yo=kn.section`
  ${ao};
  overflow: hidden;
  position: relative;
  padding: 16px;

  @media (min-width: 769px) {
    padding: 24px;
  }
`,bo=kn.span`
  display: inline-flex;
  align-items: center;
  gap: 10px;
  color: ${({theme:e})=>e.colors.textSecondary};
  font-size: 13px;
  font-weight: 600;
  letter-spacing: 0.08em;
  text-transform: uppercase;

  &::before,
  &::after {
    content: "✦";
    color: ${({theme:e})=>e.colors.warmAccent};
    font-size: 12px;
    line-height: 1;
  }
`,vo=kn.h2`
  margin: 10px 0 0;
  color: ${({theme:e})=>e.colors.textPrimary};
  font-size: clamp(2rem, 5.5vw, 3.25rem);
  line-height: 1.06;

  @media (max-width: 768px) {
    font-size: clamp(1.72rem, 8vw, 2.18rem);
  }
`,wo=kn.p`
  margin: 14px auto 0;
  max-width: 34ch;
  color: ${({theme:e})=>e.colors.textMuted};
  font-size: 15px;
  line-height: 1.7;

  @media (max-width: 768px) {
    font-size: 14px;
    line-height: 1.6;
  }
`,ko=kn(yo)`
  text-align: center;
`,_o=kn.div`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  color: ${({theme:e})=>e.colors.warmAccent};
  margin: 12px 0 0;

  &::before,
  &::after {
    content: "";
    display: block;
    width: 34px;
    height: 1.5px;
    background: currentColor;
  }

  span {
    font-size: 13px;
    line-height: 1;
  }
`,jo=kn.div`
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 10px;
  margin-top: 20px;

  @media (max-width: 420px) {
    grid-template-columns: 1fr;
  }

  @media (min-width: 769px) {
    gap: 14px;
  }
`,So=kn.div`
  display: flex;
  align-items: center;
  gap: 10px;
  min-height: 66px;
  padding: 12px 12px 12px 10px;
  border-radius: 18px;
  background: rgba(255, 255, 255, 0.88);
  border: 1px solid rgba(122, 160, 143, 0.12);
  box-shadow: 0 10px 24px rgba(15, 60, 40, 0.05);

  @media (max-width: 420px) {
    min-height: 56px;
  }
`,Co=kn.span`
  width: 36px;
  height: 36px;
  border-radius: 50%;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  background: rgba(244, 250, 246, 0.96);
  color: ${({theme:e})=>e.colors.primary};
  border: 1px solid rgba(122, 160, 143, 0.16);
  flex-shrink: 0;
`,zo=kn.span`
  color: ${({theme:e})=>e.colors.textPrimary};
  font-size: 13px;
  font-weight: 600;
  line-height: 1.3;
  text-align: left;
`,Eo=kn.section`
  display: flex;
  flex-direction: column;
  gap: 12px;
`,$o=kn.div`
  text-align: center;
  padding: 4px 0 2px;
  max-width: 340px;
  margin: 0 auto;
`,Po=kn.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 16px;

  @media (min-width: 900px) {
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }
`,To=kn(yo)`
  display: flex;
  flex-direction: column;
  gap: 12px;
`,Mo=kn.div`
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 188px;
  padding: 14px;
  border-radius: 22px;
  background:
    radial-gradient(circle at top center, rgba(239, 246, 238, 0.92), rgba(248, 251, 246, 0.76) 54%, rgba(255, 255, 255, 0.18)),
    linear-gradient(180deg, rgba(253, 252, 249, 0.92), rgba(244, 250, 246, 0.9));
  border: 1px solid rgba(122, 160, 143, 0.08);
`,Ro=kn.img`
  width: 100%;
  max-width: 248px;
  max-height: 188px;
  object-fit: contain;
  object-position: center center;
  display: block;
`,Oo=kn.h3`
  margin: 0;
  color: ${({theme:e})=>e.colors.textPrimary};
  font-size: 1.66rem;
  line-height: 1.05;

  @media (min-width: 769px) {
    font-size: 2rem;
  }
`,No=kn.p`
  margin: 0;
  color: ${({theme:e})=>e.colors.textMuted};
  font-size: 14px;
  line-height: 1.58;

  @media (min-width: 769px) {
    font-size: 15px;
    line-height: 1.62;
  }
`,Ao=kn.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`,Do=kn.div`
  display: grid;
  grid-template-columns: auto 1fr;
  gap: 9px;
  align-items: center;
  min-height: 42px;
  padding: 8px 10px;
  border-radius: 16px;
  background: rgba(249, 251, 247, 0.92);
  border: 1px solid rgba(122, 160, 143, 0.1);
`,Lo=kn.span`
  width: 28px;
  height: 28px;
  border-radius: 10px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  background: rgba(244, 250, 246, 0.98);
  color: ${({theme:e})=>e.colors.primary};
`,Io=kn.span`
  color: ${({theme:e})=>e.colors.textPrimary};
  font-size: 13px;
  font-weight: 600;
  line-height: 1.35;

  @media (min-width: 769px) {
    font-size: 14px;
  }
`,Fo=kn(xi)`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  margin-top: 2px;
  color: ${({theme:e})=>e.colors.primary};
  text-decoration: none;
  font-size: 15px;
  font-weight: 600;
`,Wo=kn(yo)`
  display: grid;
  grid-template-columns: 1fr;
  gap: 14px;
  align-items: center;

  &::after {
    content: "";
    position: absolute;
    right: 8px;
    top: 18px;
    width: 96px;
    height: 150px;
    border-radius: 56% 44% 58% 42%;
    background:
      radial-gradient(circle at 28% 16%, rgba(199, 218, 197, 0.82), transparent 28%),
      linear-gradient(180deg, rgba(232, 241, 229, 0.74), rgba(255, 255, 255, 0));
    opacity: 0.82;
    pointer-events: none;
  }

  @media (min-width: 769px) {
    grid-template-columns: 320px 1fr;
    gap: 24px;
  }
`,Bo=kn.div`
  border-radius: 20px;
  overflow: hidden;
  min-height: 228px;
  background: #e8f1eb;
  position: relative;
  z-index: 1;

  @media (min-width: 769px) {
    min-height: 266px;
  }
`,Uo=kn.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center 36%;
  display: block;
`,Yo=kn.div`
  position: relative;
  z-index: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
`,Ho=kn.h2`
  margin: 0;
  color: ${({theme:e})=>e.colors.textPrimary};
  font-size: clamp(2rem, 5vw, 2.8rem);
  line-height: 1.06;

  @media (max-width: 768px) {
    font-size: clamp(1.82rem, 8vw, 2.26rem);
  }
`,Vo=kn.p`
  margin: 0 0 12px;
  color: ${({theme:e})=>e.colors.textMuted};
  font-size: 14px;
  line-height: 1.58;

  &:last-of-type {
    margin-bottom: 0;
  }
`,qo=kn(xi)`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  margin-top: 12px;
  color: ${({theme:e})=>e.colors.primary};
  text-decoration: none;
  font-size: 15px;
  font-weight: 600;
`,Qo=kn.section`
  ${ao};
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 0;
  overflow: hidden;
  background: linear-gradient(180deg, rgba(250, 251, 246, 0.96), rgba(245, 248, 239, 0.96));

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`,Go=kn.div`
  min-height: 82px;
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 14px 12px;
  position: relative;

  &:not(:last-child)::after {
    content: "";
    position: absolute;
    right: 0;
    top: 18px;
    bottom: 18px;
    width: 1px;
    background: rgba(122, 160, 143, 0.16);
  }

  @media (max-width: 768px) {
    min-height: 64px;
    padding: 12px 14px;

    &:not(:last-child)::after {
      right: 14px;
      left: 14px;
      top: auto;
      bottom: 0;
      width: auto;
      height: 1px;
    }
  }
`,Xo=kn.span`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  background: rgba(244, 250, 246, 0.98);
  color: ${({theme:e})=>e.colors.primary};
  border: 1px solid rgba(122, 160, 143, 0.16);
  flex-shrink: 0;
`,Ko=kn.span`
  color: ${({theme:e})=>e.colors.textPrimary};
  font-size: 14px;
  font-weight: 600;
  line-height: 1.35;

  @media (max-width: 768px) {
    font-size: 13px;
  }
`,Jo=kn.section`
  ${ao};
  padding: 18px 16px;
  background:
    radial-gradient(circle at right top, rgba(221, 234, 225, 0.52), transparent 26%),
    linear-gradient(180deg, rgba(255, 255, 255, 0.96), rgba(244, 250, 246, 0.96));

  @media (min-width: 769px) {
    padding: 24px;
  }
`,Zo=kn.div`
  text-align: center;
  max-width: 560px;
  margin: 0 auto 18px;
`,es=kn.div`
  ${ao};
  display: grid;
  grid-template-columns: 1fr;
  gap: 14px;
  padding: 16px;
  background: rgba(255, 255, 255, 0.92);
  box-shadow: 0 14px 28px rgba(15, 60, 40, 0.06);
  touch-action: pan-y;
  -webkit-user-select: none;
  user-select: none;

  @media (min-width: 640px) {
    grid-template-columns: 112px 1fr;
    align-items: start;
  }
`,ts=kn.div`
  width: 112px;
  height: 132px;
  border-radius: 24px;
  overflow: hidden;
  background: #edf3ed;
  justify-self: center;

  img {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center top;
  }
`,ns=kn.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`,rs=kn.span`
  color: ${({theme:e})=>e.colors.primary};
  font-size: 2.75rem;
  line-height: 0.9;
  opacity: 0.24;
`,is=kn.p`
  margin: 2px 0 0;
  color: ${({theme:e})=>e.colors.textSecondary};
  font-size: 15px;
  line-height: 1.65;
`,as=kn.h3`
  margin: 14px 0 0;
  color: ${({theme:e})=>e.colors.textPrimary};
  font-size: 1rem;
  line-height: 1.3;
`,os=kn.p`
  margin: 4px 0 0;
  color: ${({theme:e})=>e.colors.textMuted};
  font-size: 13px;
  line-height: 1.4;
`,ss=kn.section`
  ${ao};
  padding: 18px 16px;
  background:
    radial-gradient(circle at right top, rgba(221, 234, 225, 0.52), transparent 26%),
    linear-gradient(180deg, rgba(255, 255, 255, 0.96), rgba(244, 250, 246, 0.96));

  @media (min-width: 769px) {
    padding: 24px;
  }
`,ls=kn.div`
  text-align: center;
  max-width: 620px;
  margin: 0 auto 18px;
`,us=kn.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  margin-top: 14px;
`,cs=kn.button`
  width: 38px;
  height: 38px;
  border-radius: 50%;
  border: 1px solid rgba(122, 160, 143, 0.18);
  background: rgba(255, 255, 255, 0.88);
  color: ${({theme:e})=>e.colors.primary};
  display: inline-flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  box-shadow: 0 10px 24px rgba(15, 60, 40, 0.06);
`,ds=kn.div`
  display: flex;
  align-items: center;
  gap: 8px;
`,ps=kn.button`
  width: ${({$active:e})=>e?"18px":"8px"};
  height: 8px;
  border-radius: 999px;
  border: none;
  background: ${({theme:e,$active:t})=>t?e.colors.primary:"rgba(122, 160, 143, 0.28)"};
  transition: width 180ms ease, background 180ms ease;
  cursor: pointer;
`,hs=kn.div`
  overflow: hidden;
  border-radius: 24px;
`,fs=kn.div`
  display: flex;
  transform: translateX(${({$index:e})=>`-${100*e}%`});
  transition: transform 320ms ease;
`,ms=kn.div`
  min-width: 100%;
`,gs=kn.div`
  ${ao};
  padding: 10px;
  touch-action: pan-y;
`,xs=kn.video`
  display: block;
  width: 100%;
  aspect-ratio: 0.68;
  object-fit: cover;
  border-radius: 18px;
  background:
    radial-gradient(circle at top center, rgba(240, 245, 239, 0.92), rgba(217, 231, 223, 0.84)),
    #dbe7df;
`,ys=kn.div`
  overflow: hidden;
  border-radius: 24px;
`,bs=kn.div`
  display: flex;
  transform: translateX(${({$index:e})=>`-${100*e}%`});
  transition: transform 320ms ease;
`,vs=kn.div`
  min-width: 100%;
`,ws=kn.div`
  ${ao};
  padding: 14px;
  border-radius: 24px;
  cursor: pointer;

  &:focus-visible {
    outline: 2px solid rgba(31, 95, 74, 0.72);
    outline-offset: 3px;
  }
`,ks=kn.div`
  width: 100%;
  aspect-ratio: ${({$preview:e})=>e?"auto":"0.78"};
  max-height: ${({$preview:e})=>e?"72vh":"none"};
  overflow: hidden;
  border-radius: 18px;
  background: linear-gradient(180deg, rgba(240, 245, 239, 0.92), rgba(255, 255, 255, 0.96));
  display: flex;
  align-items: center;
  justify-content: center;

  ${({$preview:e})=>e?bn`
          overflow: auto;
          padding: 10px;
          touch-action: pan-x pan-y;
        `:""}
`,_s=kn.img`
  display: block;
  width: ${({$zoom:e=1})=>100*e+"%"};
  height: auto;
  object-fit: contain;
  background: #ffffff;
  transition: width 180ms ease;

  ${({$zoom:e=1})=>e>1?bn`
          max-width: none;
        `:""}
`,js=kn.p`
  margin: 12px 0 0;
  color: ${({theme:e})=>e.colors.textPrimary};
  font-size: 15px;
  font-weight: 600;
  line-height: 1.45;
  text-align: center;
`,Ss=kn.section`
  ${ao};
  position: relative;
  overflow: hidden;
  padding: 24px 18px 22px;
  background:
    radial-gradient(circle at left bottom, rgba(201, 218, 189, 0.6), transparent 24%),
    radial-gradient(circle at right top, rgba(212, 227, 208, 0.42), transparent 28%),
    linear-gradient(180deg, rgba(221, 237, 213, 0.92), rgba(206, 225, 194, 0.94));
  text-align: center;

  @media (min-width: 769px) {
    padding: 32px 24px 28px;
  }
`,Cs=kn.h2`
  margin: 0;
  color: ${({theme:e})=>e.colors.textPrimary};
  font-size: clamp(1.9rem, 5vw, 2.6rem);
  line-height: 1.08;

  @media (max-width: 768px) {
    font-size: clamp(1.72rem, 8vw, 2.15rem);
  }
`,zs=kn.p`
  margin: 12px auto 0;
  max-width: 28ch;
  color: ${({theme:e})=>e.colors.textSecondary};
  font-size: 14px;
  line-height: 1.6;

  @media (min-width: 769px) {
    font-size: 15px;
    line-height: 1.65;
  }
`,Es=kn.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  margin-top: 18px;
  align-items: center;

  > * {
    width: 100%;
  }

  @media (min-width: 769px) {
    flex-direction: row;
    justify-content: center;

    > * {
      width: auto;
    }
  }
`,$s=[{label:"Group Yoga",icon:na},{label:"Private Yoga",icon:ra},{label:"Prenatal Yoga",icon:fa}],Ps=[{label:"Therapeutic Yoga",icon:ia},{label:"Group Yoga",icon:na},{label:"Prenatal & Postnatal Yoga",icon:fa}],Ts=[{label:"Gut Health & Digestion",icon:Qi},{label:"Hormonal & Metabolic Balance",icon:ia},{label:"Sustainable Food Habits",icon:sa}],Ms=[{label:"Dosha Awareness & Body Constitution",icon:sa},{label:"Daily Routine (Dinacharya)",icon:ma},{label:"Digestive & Metabolic Balance",icon:xa},{label:"Stress & Hormonal Regulation",icon:da}],Rs=[{label:"Holistic Approach",icon:sa},{label:"Personalized Guidance",icon:ia},{label:"Sustainable Wellness",icon:fa}],Os=()=>{const[e,t]=p.useState(!1),[n,r]=p.useState(!1),[i,a]=p.useState(!1),[o,s]=p.useState(0),[l,u]=p.useState(0),[c,h]=p.useState(0),[f,m]=p.useState(null),[g,x]=p.useState(1),y=Si.home.homeHeroWatercolorIllustration,b=io,v=Si.about.certifications,w=p.useRef(null),k=p.useRef(null),_=p.useRef(null),j=p.useRef(null),S=p.useRef(null),C=p.useRef(null),z=p.useRef(!1),E=y?.alt,$=!i&&y?y.mobile:Si.home.heroSlides[0],P=!i&&y?y.desktop:Si.home.heroSlides[0],T=()=>s(e=>0===e?b.length-1:e-1),M=()=>s(e=>e===b.length-1?0:e+1),R=()=>u(e=>0===e?Si.yoga.videos.length-1:e-1),O=()=>u(e=>e===Si.yoga.videos.length-1?0:e+1),N=e=>{const t=e.touches[0];_.current=t.clientX,j.current=t.clientY},A=e=>{if(null===_.current||null===j.current)return;const t=e.changedTouches[0],n=t.clientX-_.current,r=t.clientY-j.current;_.current=null,j.current=null,Math.abs(n)<42||Math.abs(n)<=Math.abs(r)||(n>0?R():O())},D=()=>h(e=>0===e?v.length-1:e-1),L=()=>h(e=>e===v.length-1?0:e+1),I=e=>{m(e),x(1)},F=e=>{const t=e.touches[0];S.current=t.clientX,C.current=t.clientY,z.current=!1},W=e=>{if(null===S.current||null===C.current)return;const t=e.changedTouches[0],n=t.clientX-S.current,r=t.clientY-C.current;S.current=null,C.current=null,Math.abs(n)<42||Math.abs(n)<=Math.abs(r)||(z.current=!0,n>0?D():L())};return d.jsxs(oo,{children:[d.jsx(so,{children:d.jsxs(lo,{children:[d.jsx(uo,{children:d.jsxs(co,{children:[d.jsxs(po,{children:[!i&&y?d.jsx("source",{media:"(min-width: 768px)",srcSet:P}):null,d.jsx(ho,{src:$,alt:E,loading:"eager",decoding:"async",onError:()=>a(!0)})]}),d.jsx(fo,{}),d.jsxs(mo,{children:[d.jsxs(go,{onClick:()=>t(!0),children:[d.jsx(xo,{children:d.jsx(fa,{size:18,strokeWidth:1.9})}),d.jsx("span",{children:"Explore Packages"})]}),d.jsxs(go,{onClick:()=>r(!0),children:[d.jsx(xo,{children:d.jsx(Ki,{size:18,strokeWidth:1.9})}),d.jsx("span",{children:"Book a Session"})]})]})]})}),d.jsxs(ko,{children:[d.jsx(vo,{as:"h2",children:"Yoga Packages"}),d.jsx(_o,{children:d.jsx("span",{children:"✦"})}),d.jsx(wo,{children:"Yoga packages available as group sessions, personalised private training, and specialised prenatal support — with guidance tailored to individual needs and consultation."}),d.jsx(jo,{children:$s.map(({label:e,icon:t})=>d.jsxs(So,{children:[d.jsx(Co,{children:d.jsx(t,{size:17,strokeWidth:1.9})}),d.jsx(zo,{children:e})]},e))})]}),d.jsxs(Eo,{children:[d.jsxs($o,{children:[d.jsx(bo,{children:"What I Offer"}),d.jsx(vo,{as:"h2",children:"Yoga, Nutrition & Ayurveda"})]}),d.jsxs(Po,{children:[d.jsxs(To,{children:[d.jsx(Mo,{children:d.jsx(Ro,{src:Si.home.homeYogaServiceWatercolor.src,alt:Si.home.homeYogaServiceWatercolor.alt,loading:"lazy",decoding:"async"})}),d.jsx(Oo,{children:"Yoga that supports your body & life"}),d.jsx(No,{children:"Yoga at Balance with Shree is therapeutic, mindful, and deeply personalised. The focus is not on flexibility or intensity, but on creating strength, stability, awareness, and calm — in a way that supports your daily life."}),d.jsx(Ao,{children:Ps.map(({label:e,icon:t})=>d.jsxs(Do,{children:[d.jsx(Lo,{children:d.jsx(t,{size:15,strokeWidth:1.9})}),d.jsx(Io,{children:e})]},e))}),d.jsxs(Fo,{to:"/yoga",children:["Explore Yoga ",d.jsx(Gi,{size:16})]})]}),d.jsxs(To,{children:[d.jsx(Mo,{children:d.jsx(Ro,{src:Si.home.homeNutritionBowlWatercolor.src,alt:Si.home.homeNutritionBowlWatercolor.alt,loading:"lazy",decoding:"async"})}),d.jsx(Oo,{children:"Nourish with Awareness"}),d.jsx(No,{children:"Personalised nutrition that supports digestion, hormones, and energy — rooted in mindful eating, lifestyle balance, and Indian home food."}),d.jsx(Ao,{children:Ts.map(({label:e,icon:t})=>d.jsxs(Do,{children:[d.jsx(Lo,{children:d.jsx(t,{size:15,strokeWidth:1.9})}),d.jsx(Io,{children:e})]},e))}),d.jsxs(Fo,{to:"/nutrition",children:["Explore Nutrition ",d.jsx(Gi,{size:16})]})]}),d.jsxs(To,{children:[d.jsx(Mo,{children:d.jsx(Ro,{src:Si.home.homeAyurvedaMortarWatercolor.src,alt:Si.home.homeAyurvedaMortarWatercolor.alt,loading:"lazy",decoding:"async"})}),d.jsx(Oo,{children:"Ayurveda & Lifestyle Balance"}),d.jsx(No,{children:"Ancient Ayurvedic wisdom adapted for modern life — helping you understand your body’s constitution, improve digestion, regulate stress, and build supportive daily routines in a gentle, sustainable way."}),d.jsx(Ao,{children:Ms.map(({label:e,icon:t})=>d.jsxs(Do,{children:[d.jsx(Lo,{children:d.jsx(t,{size:15,strokeWidth:1.9})}),d.jsx(Io,{children:e})]},e))}),d.jsxs(Fo,{to:"/ayurveda",children:["Explore Ayurveda ",d.jsx(Gi,{size:16})]})]})]})]}),d.jsxs(Wo,{children:[d.jsx(Bo,{children:d.jsx(Uo,{src:Si.home.homeAboutDhanashree.src,alt:Si.home.homeAboutDhanashree.alt,loading:"lazy",decoding:"async"})}),d.jsxs(Yo,{children:[d.jsx(bo,{children:"Clinical Nutritionist & Yoga Therapist"}),d.jsx(Ho,{children:"Hi, I am Dhanashree"}),d.jsx(_o,{children:d.jsx("span",{children:"✦"})}),d.jsx(Vo,{children:"a Clinical Nutritionist & Yoga Therapist, and the founder of Balance with Shree. I help people build a healthy relationship with food, movement, and their bodies — not through extreme diets or quick fixes, but through simple, sustainable, and mindful lifestyle changes."}),d.jsx(Vo,{children:"Through yoga, nutrition, and mindful living, I help you find balance that feels calm, sustainable, and deeply personal."}),d.jsxs(qo,{to:"/about",children:["Read more ",d.jsx(Gi,{size:16})]})]})]}),d.jsx(Qo,{children:Rs.map(({label:e,icon:t})=>d.jsxs(Go,{children:[d.jsx(Xo,{children:d.jsx(t,{size:18,strokeWidth:1.9})}),d.jsx(Ko,{children:e})]},e))}),d.jsxs(Jo,{children:[d.jsxs(Zo,{children:[d.jsx(bo,{children:"Client Love"}),d.jsx(vo,{as:"h2",children:"Real stories. Real support."})]}),d.jsxs(es,{onTouchStart:e=>{const t=e.touches[0];w.current=t.clientX,k.current=t.clientY},onTouchEnd:e=>{if(null===w.current||null===k.current)return;const t=e.changedTouches[0],n=t.clientX-w.current,r=t.clientY-k.current;w.current=null,k.current=null,Math.abs(n)<42||Math.abs(n)<=Math.abs(r)||(n>0?T():M())},children:[d.jsx(ts,{children:d.jsx("img",{src:b[o].image,alt:b[o].alt,loading:"lazy",decoding:"async"})}),d.jsxs(ns,{children:[d.jsx(rs,{children:"“"}),d.jsx(is,{children:b[o].text}),d.jsx(as,{children:b[o].name}),b[o].handle?d.jsx(os,{children:b[o].handle}):null]})]}),d.jsxs(us,{children:[d.jsx(cs,{type:"button",onClick:T,"aria-label":"Show previous testimonial",children:d.jsx(Zi,{size:18})}),d.jsx(ds,{children:b.map((e,t)=>d.jsx(ps,{type:"button",onClick:()=>s(t),"aria-label":`Show home testimonial ${t+1}`,$active:o===t},e.name))}),d.jsx(cs,{type:"button",onClick:M,"aria-label":"Show next testimonial",children:d.jsx(ea,{size:18})})]})]}),d.jsxs(ss,{children:[d.jsxs(ls,{children:[d.jsx(bo,{children:"Client Stories"}),d.jsx(vo,{as:"h2",children:"Video reviews from real clients"})]}),d.jsx(hs,{children:d.jsx(fs,{$index:l,children:Si.yoga.videos.map(e=>d.jsx(ms,{children:d.jsx(gs,{onTouchStart:N,onTouchEnd:A,children:d.jsxs(xs,{controls:!0,playsInline:!0,preload:"metadata",poster:e.poster,"aria-label":e.alt,children:[d.jsx("source",{src:e.src,type:"video/mp4"}),"Your browser does not support the video tag."]})})},e.id))})}),d.jsxs(us,{children:[d.jsx(cs,{type:"button",onClick:R,"aria-label":"Show previous video review",children:d.jsx(Zi,{size:18})}),d.jsx(ds,{children:Si.yoga.videos.map((e,t)=>d.jsx(ps,{type:"button",onClick:()=>u(t),"aria-label":`Show home video review ${t+1}`,$active:l===t},e.id))}),d.jsx(cs,{type:"button",onClick:O,"aria-label":"Show next video review",children:d.jsx(ea,{size:18})})]})]}),d.jsxs(ss,{children:[d.jsxs(ls,{children:[d.jsx(bo,{children:"Experience & Learning"}),d.jsx(vo,{as:"h2",children:"Professional Certifications"})]}),d.jsx(ys,{children:d.jsx(bs,{$index:c,children:v.map((e,t)=>d.jsx(vs,{children:d.jsxs(ws,{role:"button",tabIndex:0,onClick:e=>((e,t)=>{if(z.current)return z.current=!1,void e.preventDefault();I(t)})(e,t),onTouchStart:F,onTouchEnd:W,onKeyDown:e=>{"Enter"!==e.key&&" "!==e.key||(e.preventDefault(),I(t))},"aria-label":`Preview ${e.title}`,children:[d.jsx(ks,{children:d.jsx(_s,{src:e.src,alt:e.alt,loading:"lazy",decoding:"async"})}),d.jsx(js,{children:e.title})]})},e.title))})}),d.jsxs(us,{children:[d.jsx(cs,{type:"button",onClick:D,"aria-label":"Show previous home certificate",children:d.jsx(Zi,{size:18})}),d.jsx(ds,{children:v.map((e,t)=>d.jsx(ps,{type:"button",onClick:()=>h(t),"aria-label":`Show home certificate ${t+1}`,$active:c===t},e.title))}),d.jsx(cs,{type:"button",onClick:L,"aria-label":"Show next home certificate",children:d.jsx(ea,{size:18})})]})]}),d.jsxs(Ss,{children:[d.jsx(Cs,{children:"Ready to begin your wellness journey?"}),d.jsx(zs,{children:"Start with a simple conversation and explore the support that feels right for you."}),d.jsxs(Es,{children:[d.jsx(za,{variant:"secondary",size:"lg",onClick:()=>r(!0),children:"Book a Session"}),d.jsx(za,{href:ro(qa),target:"_blank",rel:"noopener noreferrer",variant:"outline",size:"lg",icon:d.jsx(ua,{size:18,strokeWidth:1.9}),children:"Chat on WhatsApp"})]})]})]})}),d.jsx(Ra,{isOpen:e,onClose:()=>t(!1),children:d.jsx(Fa,{title:"Wellness Packages",packages:[{title:"Group Yoga (Online / Offline)",note:"✔ Fees for group sessions are fixed."},{title:"Private Yoga (Personal Training)",note:"✔ Private sessions are customised based on individual needs."},{title:"Prenatal Yoga (Private)",note:"✔ Special cases are discussed after consultation."}],cta:"Start Your Journey"})}),d.jsx(Ra,{isOpen:n,onClose:()=>r(!1),children:d.jsx(Ha,{onSelect:()=>r(!1)})}),d.jsx(Ra,{isOpen:null!==f,onClose:()=>{m(null),x(1)},children:null!==f?d.jsxs(d.Fragment,{children:[d.jsx(vo,{as:"h2",children:v[f].title}),d.jsxs(us,{children:[d.jsx(cs,{type:"button",onClick:()=>{x(e=>Math.max(1,Number((e-.25).toFixed(2))))},"aria-label":"Zoom out certificate",children:d.jsx(ba,{size:18})}),d.jsxs(wo,{children:["Zoom ",Math.round(100*g),"%"]}),d.jsx(cs,{type:"button",onClick:()=>{x(e=>Math.min(3,Number((e+.25).toFixed(2))))},"aria-label":"Zoom in certificate",children:d.jsx(ya,{size:18})})]}),d.jsx(ys,{children:d.jsx(ws,{children:d.jsx(ks,{$preview:!0,onDoubleClick:()=>x(e=>e>1?1:2),children:d.jsx(_s,{src:v[f].src,alt:v[f].alt,$zoom:g})})})})]}):null})]})},Ns=()=>d.jsx(Os,{}),As=[{id:1,side:"left",label:"The Beginning — Ignoring My Health",image:Si.about.journeyTimeline.step1,illustration:Si.about.journeyBeginning.src,alt:"Where it all began (2019–2020)",paragraphs:["Back in 2019–20, I was severely underweight, weighing just 39 kg. I was into fitness or dance, and I wasn't mindful about what or how I was eating. My immunity was low, my digestion was constantly disturbed, and I ignored my body's signals for a long time."]},{id:2,side:"right",label:"The Wake-Up Call — COVID & Hyperacidity",image:Si.about.journeyTimeline.step2,illustration:Si.about.journeyWakeup.src,alt:"The turning point – COVID & health breakdown",paragraphs:["During the COVID phase, my health worsened. I suffered from frequent stomach issues, acid reflux, and was eventually diagnosed with hyperacidity. At one point, even breathing felt difficult. Doctors clearly told me that my eating habits, sleep cycle, and lifestyle were the root cause."]},{id:3,side:"left",label:"Choosing Awareness Over Neglect",image:Si.about.journeyTimeline.step3,illustration:Si.about.journeyAwareness.src,alt:"Awareness → Action",paragraphs:["Interestingly, I was already studying Nutrition & Dietetics, but this experience made everything real. I realized that knowing nutrition is one thing, but living it mindfully is another."]},{id:4,side:"right",label:"Healing Through Food, Yoga & Belief",image:Si.about.journeyTimeline.step1,illustration:Si.about.journeyHealing.src,alt:"Healing through belief, food & movement",paragraphs:["I began making small, consistent changes — eating with awareness, restoring my sleep cycle, introducing yoga and gentle movement, and practicing kinder self-talk and body awareness. Slowly, I shifted from fighting my body to trusting it. Over time, my weight increased from 39 kg to 45 kg, my digestion improved, and my energy returned — something years of random eating and irregular living had never given me."]},{id:5,side:"left",label:"Turning My Journey into My Purpose",image:Si.about.journeyTimeline.step2,illustration:Si.about.journeyPurpose.src,alt:"From self-healing to serving others",paragraphs:["What began as self-healing gradually became my purpose. This journey taught me that health is not created through extremes, punishment, or quick fixes — but through consistency, awareness, and compassion. Today, I help others build a balanced relationship with food, movement, and their bodies, in a way that feels sustainable and deeply personal."]}],Ds=bn`
  background: linear-gradient(180deg, rgba(255, 255, 255, 0.95), rgba(251, 249, 243, 0.98));
  border: 1px solid rgba(122, 160, 143, 0.12);
  box-shadow: 0 20px 48px rgba(15, 60, 40, 0.08);
  border-radius: 28px;

  @media (max-width: 768px) {
    border-radius: 24px;
  }
`,Ls=kn.div`
  width: 100%;
  overflow-x: hidden;
  padding: 0 0 24px;
`,Is=kn.div`
  width: min(calc(100% - 20px), 1120px);
  margin: 0 auto;

  @media (max-width: 768px) {
    width: min(calc(100% - 18px), 430px);
  }
`,Fs=kn.div`
  display: flex;
  flex-direction: column;
  gap: 20px;

  > * {
    scroll-margin-top: 76px;
  }

  @media (min-width: 769px) {
    gap: 26px;

    > * {
      scroll-margin-top: 110px;
    }
  }
`,Ws=kn.section`
  ${Ds};
  position: relative;
  overflow: hidden;
  padding: 18px;

  @media (min-width: 769px) {
    padding: 28px;
  }
`,Bs=kn.span`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  color: ${({theme:e})=>e.colors.textSecondary};
  font-size: 12px;
  font-weight: 700;
  letter-spacing: 0.12em;
  text-transform: uppercase;

  &::before,
  &::after {
    content: "✦";
    color: ${({theme:e})=>e.colors.warmAccent};
    font-size: 11px;
    line-height: 1;
  }
`,Us=kn.h2`
  margin: 10px 0 0;
  color: ${({theme:e})=>e.colors.textPrimary};
  font-size: clamp(1.82rem, 7vw, 3.1rem);
  line-height: 1.06;
`,Ys=kn.p`
  margin: 14px 0 0;
  color: ${({theme:e})=>e.colors.textMuted};
  font-size: 14px;
  line-height: 1.62;

  @media (min-width: 769px) {
    font-size: 15px;
    line-height: 1.68;
  }
`,Hs=kn.div`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  color: ${({theme:e})=>e.colors.warmAccent};
  margin: 14px 0 2px;

  &::before,
  &::after {
    content: "";
    display: block;
    width: 34px;
    height: 1.5px;
    background: currentColor;
  }

  span {
    font-size: 12px;
    line-height: 1;
  }
`,Vs=kn(Ws)`
  background:
    radial-gradient(circle at top right, rgba(221, 234, 225, 0.82), transparent 34%),
    radial-gradient(circle at left bottom, rgba(201, 218, 189, 0.34), transparent 28%),
    linear-gradient(180deg, rgba(255, 255, 255, 0.96), rgba(244, 250, 246, 0.96));
`,qs=kn.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 16px;
  align-items: center;

  @media (min-width: 900px) {
    grid-template-columns: minmax(0, 360px) minmax(0, 1fr);
    gap: 28px;
  }
`,Qs=kn.div`
  position: relative;
  border-radius: 24px;
  overflow: hidden;
  min-height: 254px;
  background: #e8f1eb;
  box-shadow: 0 16px 36px rgba(15, 60, 40, 0.08);

  @media (min-width: 900px) {
    min-height: 410px;
  }
`,Gs=kn.img`
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center 36%;
`,Xs=kn.div`
  position: relative;
  z-index: 1;
`,Ks=kn.p`
  margin: 10px 0 0;
  color: ${({theme:e})=>e.colors.textSecondary};
  font-size: 13px;
  font-weight: 600;
  line-height: 1.5;

  @media (min-width: 769px) {
    font-size: 14px;
  }
`,Js=kn.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-top: 18px;

  > * {
    width: 100%;
  }

  @media (min-width: 769px) {
    flex-direction: row;
    flex-wrap: wrap;

    > * {
      width: auto;
    }
  }
`,Zs=kn(Ws)`
  background:
    radial-gradient(circle at right top, rgba(229, 239, 229, 0.9), transparent 28%),
    linear-gradient(180deg, rgba(255, 255, 255, 0.96), rgba(247, 250, 245, 0.96));
`,el=kn.div`
  display: grid;
  gap: 16px;

  @media (min-width: 900px) {
    grid-template-columns: minmax(0, 0.9fr) minmax(0, 1.1fr);
    gap: 28px;
    align-items: start;
  }
`,tl=kn.div`
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 10px;

  @media (min-width: 900px) {
    grid-template-columns: 1fr;
  }
`,nl=kn.div`
  min-height: 74px;
  border-radius: 18px;
  background: rgba(244, 250, 246, 0.92);
  border: 1px solid rgba(122, 160, 143, 0.1);
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 14px;
  gap: 6px;

  strong {
    color: ${({theme:e})=>e.colors.textPrimary};
    font-size: 14px;
    line-height: 1.3;
  }

  span {
    color: ${({theme:e})=>e.colors.textMuted};
    font-size: 13px;
    line-height: 1.45;
  }
`,rl=kn.div`
  display: flex;
  flex-direction: column;
`,il=kn(Ws)`
  padding-bottom: 22px;
`,al=kn.div`
  max-width: 680px;
  margin: 0 auto 18px;
  text-align: center;
`,ol=kn.div`
  position: relative;
  padding: 8px 0 0;

  @media (min-width: 900px) {
    padding-top: 12px;
  }
`,sl=kn.div`
  position: absolute;
  left: 27px;
  top: 0;
  bottom: 0;
  width: 3px;
  border-radius: 999px;
  background: linear-gradient(180deg, rgba(122, 160, 143, 0.18), rgba(217, 184, 137, 0.16));
  overflow: hidden;

  @media (min-width: 900px) {
    left: 50%;
    transform: translateX(-50%);
  }
`,ll=kn.div`
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(180deg, rgba(122, 160, 143, 0.72), rgba(31, 95, 74, 0.96));
  border-radius: inherit;
  transform-origin: bottom center;
  transform: scaleY(${({$progress:e})=>e});
  transition: ${({$reducedMotion:e})=>e?"none":"transform 180ms ease-out"};
  height: 100%;
`,ul=kn.div`
  display: flex;
  flex-direction: column;
  gap: 18px;

  @media (min-width: 900px) {
    gap: 24px;
  }
`,cl=kn.article`
  position: relative;
  padding-left: 56px;

  @media (min-width: 900px) {
    display: grid;
    grid-template-columns: minmax(0, 1fr) 72px minmax(0, 1fr);
    align-items: center;
    padding-left: 0;
  }
`,dl=kn.div`
  position: absolute;
  left: 14px;
  top: 28px;
  width: 26px;
  height: 26px;
  border-radius: 50%;
  border: 2px solid ${({theme:e,$active:t})=>t?e.colors.primary:"rgba(122, 160, 143, 0.34)"};
  background: ${({$active:e})=>e?"linear-gradient(180deg, rgba(244, 250, 246, 1), rgba(225, 241, 235, 1))":"rgba(255, 255, 255, 0.92)"};
  box-shadow: ${({$active:e})=>e?"0 10px 24px rgba(31, 95, 74, 0.16)":"0 6px 18px rgba(15, 60, 40, 0.08)"};
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 2;

  &::after {
    content: "";
    width: 10px;
    height: 10px;
    border-radius: 50%;
    background: ${({theme:e,$active:t})=>t?e.colors.primary:"rgba(122, 160, 143, 0.3)"};
  }

  @media (min-width: 900px) {
    position: relative;
    left: auto;
    top: auto;
    margin: 0 auto;
    grid-column: 2;
  }
`,pl=kn.div`
  ${Ds};
  padding: 16px;
  display: flex;
  flex-direction: column;
  gap: 14px;
  transform: translateY(${({$active:e})=>e?"0":"6px"});
  opacity: ${({$active:e})=>e?1:.92};
  transition:
    transform 220ms ease,
    box-shadow 220ms ease,
    opacity 220ms ease;
  box-shadow: ${({$active:e})=>e?"0 22px 42px rgba(15, 60, 40, 0.12)":"0 14px 28px rgba(15, 60, 40, 0.07)"};

  @media (min-width: 900px) {
    grid-column: ${({$active:e})=>"auto"};
    padding: 18px;
  }
`,hl=kn.div`
  @media (min-width: 900px) {
    grid-column: ${({$side:e})=>"left"===e?"1":"3"};
  }
`,fl=kn.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 14px;

  @media (min-width: 640px) {
    grid-template-columns: 116px 1fr;
    align-items: center;
  }
`,ml=kn.div`
  width: 100%;
  max-width: 116px;
  aspect-ratio: 1;
  border-radius: 50%;
  overflow: hidden;
  background:
    radial-gradient(circle at top center, rgba(239, 246, 238, 0.92), rgba(248, 251, 246, 0.76) 54%, rgba(255, 255, 255, 0.18)),
    linear-gradient(180deg, rgba(253, 252, 249, 0.92), rgba(244, 250, 246, 0.9));
  border: 1px solid rgba(122, 160, 143, 0.1);
  padding: 10px;
  display: flex;
  align-items: center;
  justify-content: center;

  @media (max-width: 639px) {
    margin: 0 auto;
  }
`,gl=kn.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
  object-position: center;
  display: block;
`,xl=kn.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`,yl=kn.h3`
  margin: 0;
  color: ${({theme:e})=>e.colors.textPrimary};
  font-size: 1.34rem;
  line-height: 1.15;

  @media (min-width: 769px) {
    font-size: 1.56rem;
  }
`,bl=kn.p`
  margin: 0;
  color: ${({theme:e})=>e.colors.textMuted};
  font-size: 14px;
  line-height: 1.6;
`,vl=kn(Ws)`
  background:
    radial-gradient(circle at right top, rgba(221, 234, 225, 0.66), transparent 28%),
    linear-gradient(180deg, rgba(255, 255, 255, 0.96), rgba(244, 250, 246, 0.96));
`,wl=kn.div`
  text-align: center;
  max-width: 640px;
  margin: 0 auto 18px;
`,kl=kn.div`
  overflow: hidden;
  border-radius: 24px;
`,_l=kn.div`
  display: flex;
  transform: translateX(${({$index:e})=>`-${100*e}%`});
  transition: transform 320ms ease;
`,jl=kn.div`
  min-width: 100%;
`,Sl=kn.div`
  ${Ds};
  padding: 14px;
  border-radius: 24px;
  cursor: pointer;

  @media (min-width: 769px) {
    padding: 18px;
  }

  &:focus-visible {
    outline: 2px solid rgba(31, 95, 74, 0.72);
    outline-offset: 3px;
  }
`,Cl=kn.div`
  position: relative;
  width: 100%;
  aspect-ratio: ${({$preview:e})=>e?"auto":"0.78"};
  max-height: ${({$preview:e})=>e?"72vh":"none"};
  overflow: hidden;
  border-radius: 18px;
  background: linear-gradient(180deg, rgba(240, 245, 239, 0.92), rgba(255, 255, 255, 0.96));
  display: flex;
  align-items: center;
  justify-content: center;

  ${({$preview:e})=>e?bn`
          overflow: auto;
          padding: 10px;
          touch-action: pan-x pan-y;
        `:""}
`,zl=kn.img`
  display: block;
  width: ${({$zoom:e=1})=>100*e+"%"};
  height: auto;
  object-fit: contain;
  background: #ffffff;
  transition: width 180ms ease;

  ${({$zoom:e=1})=>e>1?bn`
          max-width: none;
        `:""}
`,El=kn.p`
  margin: 12px 2px 0;
  color: ${({theme:e})=>e.colors.textPrimary};
  font-size: 14px;
  font-weight: 600;
  line-height: 1.45;
  text-align: center;
`,$l=kn.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  margin-top: 14px;
`,Pl=kn.button`
  width: 38px;
  height: 38px;
  border-radius: 50%;
  border: 1px solid rgba(122, 160, 143, 0.18);
  background: rgba(255, 255, 255, 0.88);
  color: ${({theme:e})=>e.colors.primary};
  display: inline-flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  box-shadow: 0 10px 24px rgba(15, 60, 40, 0.06);

  &:focus-visible {
    outline: none;
    box-shadow:
      0 0 0 3px rgba(31, 95, 74, 0.12),
      0 0 0 1px rgba(31, 95, 74, 0.68);
  }
`,Tl=kn.div`
  display: flex;
  align-items: center;
  gap: 8px;
`,Ml=kn.button`
  width: ${({$active:e})=>e?"18px":"8px"};
  height: 8px;
  border-radius: 999px;
  border: none;
  background: ${({theme:e,$active:t})=>t?e.colors.primary:"rgba(122, 160, 143, 0.28)"};
  transition: width 180ms ease, background 180ms ease;
  cursor: pointer;
`,Rl=kn(Ws)`
  background:
    radial-gradient(circle at left bottom, rgba(201, 218, 189, 0.54), transparent 24%),
    radial-gradient(circle at right top, rgba(212, 227, 208, 0.42), transparent 28%),
    linear-gradient(180deg, rgba(237, 246, 241, 0.96), rgba(221, 237, 213, 0.96));
  text-align: center;
`,Ol=kn.h2`
  margin: 0;
  color: ${({theme:e})=>e.colors.textPrimary};
  font-size: clamp(1.72rem, 7vw, 2.6rem);
  line-height: 1.08;
`,Nl=kn.p`
  margin: 12px auto 0;
  max-width: 30ch;
  color: ${({theme:e})=>e.colors.textSecondary};
  font-size: 14px;
  line-height: 1.6;

  @media (min-width: 769px) {
    font-size: 15px;
  }
`,Al=kn.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-top: 18px;

  > * {
    width: 100%;
  }

  @media (min-width: 769px) {
    flex-direction: row;
    justify-content: center;

    > * {
      width: auto;
    }
  }
`,Dl=Si.about.certifications,Ll=[{title:"Balance, not perfection",body:"Health is not about extremes or rigid rules."},{title:"Nourishment, not restriction",body:"Food, movement, and care should feel supportive."},{title:"Sustainable choices",body:"Small, consistent changes create real wellbeing."},{title:"Mind, body, and soul",body:"A holistic approach matters just as much as routine."}],Il=()=>{const[e,t]=p.useState(!1),[n,r]=p.useState(0),[i,a]=p.useState(null),[o,s]=p.useState(1),[l,u]=p.useState(!1),[c,h]=p.useState(0),[f,m]=p.useState([0]),g=p.useRef(null),x=p.useRef(null),y=p.useRef([]),b=p.useRef(null),v=p.useRef(null),w=p.useRef(!1);p.useEffect(()=>{if("undefined"==typeof window)return;const e=window.matchMedia("(prefers-reduced-motion: reduce)"),t=()=>u(e.matches);return t(),e.addEventListener("change",t),()=>e.removeEventListener("change",t)},[]),p.useEffect(()=>{if(l)return;const e=x.current;if(!e)return;let t=0;const n=()=>{const n=e.getBoundingClientRect(),r=window.innerHeight,i=.28*r,a=n.height+.38*r,o=(i-n.top)/a;var s,l,u;h((s=o,l=0,u=1,Math.min(Math.max(s,l),u))),t=0},r=()=>{t||(t=window.requestAnimationFrame(n))};return n(),window.addEventListener("scroll",r,{passive:!0}),window.addEventListener("resize",r),()=>{window.removeEventListener("scroll",r),window.removeEventListener("resize",r),t&&window.cancelAnimationFrame(t)}},[l]),p.useEffect(()=>{const e=y.current.filter(Boolean);if(!e.length)return;const t=new IntersectionObserver(e=>{m(t=>{const n=new Set(t);return e.forEach(e=>{const t=Number(e.target.dataset.timelineIndex??"-1");t<0||(e.isIntersecting?n.add(t):n.delete(t))}),Array.from(n).sort((e,t)=>e-t)})},{rootMargin:"-20% 0px -20% 0px",threshold:.35});return e.forEach(e=>t.observe(e)),()=>t.disconnect()},[]);const k=f.length?f[f.length-1]:0,_=l?1:c,j=Si.about.aboutHeroDhanashree,S=As,C=()=>r(e=>0===e?Dl.length-1:e-1),z=()=>r(e=>e===Dl.length-1?0:e+1),E=e=>{a(e),s(1)},$=e=>{const t=e.touches[0];b.current=t.clientX,v.current=t.clientY,w.current=!1},P=e=>{if(null===b.current||null===v.current)return;const t=e.changedTouches[0],n=t.clientX-b.current,r=t.clientY-v.current;b.current=null,v.current=null,Math.abs(n)<42||Math.abs(n)<=Math.abs(r)||(w.current=!0,n>0?C():z())};return d.jsxs(Ls,{children:[d.jsx(Is,{children:d.jsxs(Fs,{children:[d.jsx(Vs,{children:d.jsxs(qs,{children:[d.jsx(Qs,{children:d.jsx(Gs,{src:j.src,alt:j.alt,loading:"eager",decoding:"async"})}),d.jsxs(Xs,{children:[d.jsx(Bs,{children:"About Balance with Shree"}),d.jsx(Us,{as:"h1",children:"Hi, I am Dhanashree"}),d.jsx(Ks,{children:"a Clinical Nutritionist & Yoga Therapist, and the founder of Balance with Shree."}),d.jsx(Hs,{children:d.jsx("span",{children:"✦"})}),d.jsx(Ys,{children:"I help people build a healthy relationship with food, movement, and their bodies — not through extreme diets or quick fixes, but through simple, sustainable, and mindful lifestyle changes."}),d.jsx(Ys,{children:"From dance and acrobatics to yoga and mindful living, movement has always been my way of connecting with myself. During a pause in life, I found clarity through yoga and nutrition—building strength, balance, and discipline from within."}),d.jsx(Ys,{children:"Balance with Shree was born from this personal transformation—a space where yoga, nutrition, and mindful living come together in a practical, sustainable way."}),d.jsxs(Js,{children:[d.jsx(za,{size:"lg",onClick:()=>{g.current?.scrollIntoView({behavior:l?"auto":"smooth"})},children:"My Approach"}),d.jsx(za,{variant:"secondary",size:"lg",onClick:()=>t(!0),children:"Book a Session"})]})]})]})}),d.jsx(Zs,{ref:g,id:"about-philosophy",children:d.jsxs(el,{children:[d.jsxs(rl,{children:[d.jsx(Bs,{children:"My Philosophy"}),d.jsx(Us,{children:"Wellness, Without Extremes"}),d.jsx(Hs,{children:d.jsx("span",{children:"✦"})}),d.jsx(Ys,{children:"Yoga is not just exercise. Nutrition is not just calories. Health is not just physical."}),d.jsx(Ys,{children:"I follow a holistic approach — working with the mind, body, and soul."}),d.jsx(Ys,{children:"No crash diets. No temporary fixes. No fear around food."}),d.jsx(Ys,{children:"Just sustainable habits, mindful eating, and movement that feels good — for life."}),d.jsx(Ys,{children:"My goal is to help you feel comfortable in your body, confident in your food choices, and connected to your health — naturally and mindfully."})]}),d.jsx(tl,{children:Ll.map(e=>d.jsxs(nl,{children:[d.jsx("strong",{children:e.title}),d.jsx("span",{children:e.body})]},e.title))})]})}),d.jsxs(il,{ref:x,children:[d.jsxs(al,{children:[d.jsx(Bs,{children:"My Journey"}),d.jsx(Us,{children:"The journey through a timeline:"}),d.jsx(Ys,{children:"A personal story of awareness, healing, and purpose — told through the real moments that shaped Balance with Shree."})]}),d.jsxs(ol,{children:[d.jsx(sl,{"aria-hidden":"true",children:d.jsx(ll,{$progress:_,$reducedMotion:l})}),d.jsx(ul,{children:S.map((e,t)=>{const n=k>=t,r=e.illustration??e.image;return d.jsxs(cl,{ref:e=>{y.current[t]=e},"data-timeline-index":t,$side:e.side,$active:n,children:[d.jsx(dl,{$active:n}),d.jsx(hl,{$side:e.side,children:d.jsx(pl,{$active:n,children:d.jsxs(fl,{children:[d.jsx(ml,{children:d.jsx(gl,{src:r,alt:e.alt,loading:"lazy",decoding:"async"})}),d.jsxs(xl,{children:[d.jsx(yl,{children:e.label}),e.paragraphs.map(e=>d.jsx(bl,{children:e},e))]})]})})})]},e.id)})})]})]}),d.jsxs(vl,{children:[d.jsxs(wl,{children:[d.jsx(Bs,{children:"Experience & Learning"}),d.jsx(Us,{children:"Professional Certifications"}),d.jsx(Ys,{children:"Real certificates from Dhanashree's professional learning, presented in a cleaner, easier-to-view format."})]}),d.jsx(kl,{children:d.jsx(_l,{$index:n,children:Dl.map((e,t)=>d.jsx(jl,{children:d.jsxs(Sl,{role:"button",tabIndex:0,onClick:e=>((e,t)=>{if(w.current)return w.current=!1,void e.preventDefault();E(t)})(e,t),onTouchStart:$,onTouchEnd:P,onKeyDown:e=>{"Enter"!==e.key&&" "!==e.key||(e.preventDefault(),E(t))},"aria-label":`Preview ${e.title}`,children:[d.jsx(Cl,{children:d.jsx(zl,{src:e.src,alt:e.alt,loading:"lazy",decoding:"async"})}),d.jsx(El,{children:e.title})]})},e.title))})}),d.jsxs($l,{children:[d.jsx(Pl,{type:"button",onClick:C,"aria-label":"Show previous certificate",children:d.jsx(Zi,{size:18})}),d.jsx(Tl,{children:Dl.map((e,t)=>d.jsx(Ml,{type:"button",onClick:()=>r(t),"aria-label":`Show certificate ${t+1}`,$active:t===n},e.title))}),d.jsx(Pl,{type:"button",onClick:z,"aria-label":"Show next certificate",children:d.jsx(ea,{size:18})})]})]}),d.jsxs(Rl,{children:[d.jsx(Ol,{children:"Ready to begin your wellness journey?"}),d.jsx(Nl,{children:"Start with a simple conversation and explore the support that feels right for you."}),d.jsxs(Al,{children:[d.jsx(za,{size:"lg",onClick:()=>t(!0),children:"Book a Session"}),d.jsx(za,{href:ro(qa),target:"_blank",rel:"noopener noreferrer",variant:"outline",size:"lg",icon:d.jsx(ua,{size:18,strokeWidth:1.9}),children:"Chat on WhatsApp"})]})]})]})}),d.jsx(Ra,{isOpen:e,onClose:()=>t(!1),children:d.jsx(Ha,{onSelect:()=>t(!1)})}),d.jsx(Ra,{isOpen:null!==i,onClose:()=>{a(null),s(1)},children:null!==i?d.jsxs(d.Fragment,{children:[d.jsx(Us,{as:"h2",children:Dl[i].title}),d.jsxs($l,{children:[d.jsx(Pl,{type:"button",onClick:()=>{s(e=>Math.max(1,Number((e-.25).toFixed(2))))},"aria-label":"Zoom out certificate",children:d.jsx(ba,{size:18})}),d.jsxs(Ys,{children:["Zoom ",Math.round(100*o),"%"]}),d.jsx(Pl,{type:"button",onClick:()=>{s(e=>Math.min(3,Number((e+.25).toFixed(2))))},"aria-label":"Zoom in certificate",children:d.jsx(ya,{size:18})})]}),d.jsx(kl,{children:d.jsx(Sl,{children:d.jsx(Cl,{$preview:!0,onDoubleClick:()=>s(e=>e>1?1:2),children:d.jsx(zl,{src:Dl[i].src,alt:Dl[i].alt,$zoom:o})})})})]}):null})]})};function Fl(){return d.jsx(Il,{})}class Wl{constructor(e=0,t="Network Error"){this.status=e,this.text=t}}const Bl={origin:"https://api.emailjs.com",blockHeadless:!1,storageProvider:(()=>{if("undefined"!=typeof localStorage)return{get:e=>Promise.resolve(localStorage.getItem(e)),set:(e,t)=>Promise.resolve(localStorage.setItem(e,t)),remove:e=>Promise.resolve(localStorage.removeItem(e))}})()},Ul=e=>e?"string"==typeof e?{publicKey:e}:"[object Object]"===e.toString()?e:{}:{},Yl=async(e,t,n={})=>{const r=await fetch(Bl.origin+e,{method:"POST",headers:n,body:t}),i=await r.text(),a=new Wl(r.status,i);if(r.ok)return a;throw a},Hl=(e,t,n)=>{if(!e||"string"!=typeof e)throw"The public key is required. Visit https://dashboard.emailjs.com/admin/account";if(!t||"string"!=typeof t)throw"The service ID is required. Visit https://dashboard.emailjs.com/admin";if(!n||"string"!=typeof n)throw"The template ID is required. Visit https://dashboard.emailjs.com/admin/templates"},Vl=e=>e.webdriver||!e.languages||0===e.languages.length,ql=()=>new Wl(451,"Unavailable For Headless Browser"),Ql=(e,t)=>{if((e=>!e.list?.length||!e.watchVariable)(e))return!1;((e,t)=>{if(!Array.isArray(e))throw"The BlockList list has to be an array";if("string"!=typeof t)throw"The BlockList watchVariable has to be a string"})(e.list,e.watchVariable);const n=(r=t,i=e.watchVariable,r instanceof FormData?r.get(i):r[i]);var r,i;return"string"==typeof n&&e.list.includes(n)},Gl=()=>new Wl(403,"Forbidden"),Xl=async(e,t,n)=>{if(!t.throttle||!n)return!1;((e,t)=>{if("number"!=typeof e||e<0)throw"The LimitRate throttle has to be a positive number";if(t&&"string"!=typeof t)throw"The LimitRate ID has to be a non-empty string"})(t.throttle,t.id);const r=t.id||e,i=await(async(e,t,n)=>{const r=Number(await n.get(e)||0);return t-Date.now()+r})(r,t.throttle,n);return i>0||(await n.set(r,Date.now().toString()),!1)},Kl=()=>new Wl(429,"Too Many Requests"),Jl=(e,t="https://api.emailjs.com")=>{if(!e)return;const n=Ul(e);Bl.publicKey=n.publicKey,Bl.blockHeadless=n.blockHeadless,Bl.storageProvider=n.storageProvider,Bl.blockList=n.blockList,Bl.limitRate=n.limitRate,Bl.origin=n.origin||t},Zl=async(e,t,n,r)=>{const i=Ul(r),a=i.publicKey||Bl.publicKey,o=i.blockHeadless||Bl.blockHeadless,s=i.storageProvider||Bl.storageProvider,l={...Bl.blockList,...i.blockList},u={...Bl.limitRate,...i.limitRate};if(o&&Vl(navigator))return Promise.reject(ql());if(Hl(a,e,t),(e=>{if(e&&"[object Object]"!==e.toString())throw"The template params have to be the object. Visit https://www.emailjs.com/docs/sdk/send/"})(n),n&&Ql(l,n))return Promise.reject(Gl());if(await Xl(location.pathname,u,s))return Promise.reject(Kl());const c={lib_version:"4.4.1",user_id:a,service_id:e,template_id:t,template_params:n};return Yl("/api/v1.0/email/send",JSON.stringify(c),{"Content-type":"application/json"})},eu="service_mg1unlr",tu="template_vf01kx9",nu="PCVUv4yz6HvUQu8fE",ru=bn`
  background: linear-gradient(180deg, rgba(255, 255, 255, 0.96), rgba(251, 249, 243, 0.98));
  border: 1px solid rgba(122, 160, 143, 0.12);
  box-shadow: 0 20px 48px rgba(15, 60, 40, 0.08);
  border-radius: 28px;

  @media (max-width: 768px) {
    border-radius: 24px;
  }
`,iu=jn`${"\n  @keyframes contactFadeIn {\n    from { opacity: 0; transform: translateY(-10px); }\n    to { opacity: 1; transform: translateY(0); }\n  }\n"}`,au=kn.div`
  width: 100%;
  overflow-x: hidden;
  padding: 0 0 88px;

  @media (min-width: 769px) {
    padding-bottom: 32px;
  }
`,ou=kn.div`
  width: min(calc(100% - 20px), 1120px);
  margin: 0 auto;

  @media (max-width: 768px) {
    width: min(calc(100% - 18px), 430px);
  }
`,su=kn.div`
  display: flex;
  flex-direction: column;
  gap: 18px;

  > * {
    scroll-margin-top: 80px;
  }

  @media (min-width: 769px) {
    gap: 24px;

    > * {
      scroll-margin-top: 112px;
    }
  }
`,lu=kn.section`
  ${ru};
  position: relative;
  overflow: hidden;
  padding: 18px;

  @media (min-width: 769px) {
    padding: 28px;
  }
`;kn.span`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  color: ${({theme:e})=>e.colors.textSecondary};
  font-size: 12px;
  font-weight: 700;
  letter-spacing: 0.12em;
  text-transform: uppercase;

  &::before,
  &::after {
    content: "✦";
    color: ${({theme:e})=>e.colors.warmAccent};
    font-size: 11px;
    line-height: 1;
  }
`;const uu=kn.h1`
  margin: 10px 0 0;
  color: ${({theme:e})=>e.colors.textPrimary};
  font-size: clamp(1.8rem, 6.5vw, 3rem);
  line-height: 1.08;
`,cu=kn.p`
  margin: 14px 0 0;
  color: ${({theme:e})=>e.colors.textMuted};
  font-size: 14px;
  line-height: 1.66;

  @media (min-width: 769px) {
    font-size: 15px;
    line-height: 1.72;
  }
`,du=kn.div`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  color: ${({theme:e})=>e.colors.warmAccent};
  margin: 14px 0 2px;

  &::before,
  &::after {
    content: "";
    display: block;
    width: 34px;
    height: 1.5px;
    background: currentColor;
  }

  span {
    font-size: 12px;
    line-height: 1;
  }
`,pu=kn(lu)`
  background:
    radial-gradient(circle at right top, rgba(229, 239, 229, 0.84), transparent 28%),
    radial-gradient(circle at left bottom, rgba(220, 232, 223, 0.42), transparent 28%),
    linear-gradient(180deg, rgba(255, 255, 255, 0.96), rgba(244, 250, 246, 0.97));
  text-align: center;
`,hu=kn.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-top: 18px;

  > * {
    width: 100%;
  }

  @media (min-width: 640px) {
    flex-direction: row;
    justify-content: center;

    > * {
      width: auto;
      min-width: 184px;
    }
  }
`,fu=kn.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 16px;

  @media (min-width: 960px) {
    grid-template-columns: minmax(0, 0.95fr) minmax(0, 1.05fr);
  }
`,mu=kn.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`,gu=kn.div`
  display: flex;
  flex-direction: column;
`,xu=kn(lu)`
  background:
    radial-gradient(circle at right top, rgba(226, 235, 224, 0.4), transparent 24%),
    linear-gradient(180deg, rgba(255, 255, 255, 0.98), rgba(249, 247, 241, 0.98));
`,yu=kn.h2`
  margin: 0;
  color: ${({theme:e})=>e.colors.textPrimary};
  font-size: clamp(1.46rem, 5.4vw, 2.1rem);
  line-height: 1.14;
`,bu=kn.p`
  margin: 12px 0 0;
  color: ${({theme:e})=>e.colors.textMuted};
  font-size: 14px;
  line-height: 1.66;
`,vu=kn.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-top: 18px;
`,wu=kn.a`
  display: grid;
  grid-template-columns: auto 1fr auto;
  gap: 12px;
  align-items: center;
  padding: 14px 14px;
  border-radius: 18px;
  background: rgba(249, 251, 247, 0.94);
  border: 1px solid rgba(122, 160, 143, 0.1);
  color: inherit;
  text-decoration: none;
  box-shadow: 0 10px 22px rgba(15, 60, 40, 0.05);

  &:focus-visible {
    outline: none;
    box-shadow:
      0 0 0 3px rgba(31, 95, 74, 0.08),
      0 0 0 1px rgba(31, 95, 74, 0.42);
  }
`,ku=kn.div`
  display: grid;
  grid-template-columns: auto 1fr;
  gap: 12px;
  align-items: center;
  padding: 14px 14px;
  border-radius: 18px;
  background: rgba(249, 251, 247, 0.94);
  border: 1px solid rgba(122, 160, 143, 0.1);
  box-shadow: 0 10px 22px rgba(15, 60, 40, 0.05);
  margin-top: 10px;
`,_u=kn.span`
  width: 38px;
  height: 38px;
  border-radius: 14px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  background: rgba(244, 250, 246, 0.98);
  color: ${({theme:e})=>e.colors.primary};
  border: 1px solid rgba(122, 160, 143, 0.16);
  flex-shrink: 0;
`,ju=kn.div`
  min-width: 0;
`,Su=kn.p`
  margin: 0;
  color: ${({theme:e})=>e.colors.textSecondary};
  font-size: 11px;
  font-weight: 700;
  letter-spacing: 0.12em;
  text-transform: uppercase;
`,Cu=kn.p`
  margin: 4px 0 0;
  color: ${({theme:e})=>e.colors.textPrimary};
  font-size: 14px;
  line-height: 1.5;
  word-break: break-word;
`,zu=kn.span`
  color: ${({theme:e})=>e.colors.textSecondary};
  font-size: 18px;
  line-height: 1;
`,Eu=kn.div`
  margin-top: 16px;
  padding: 14px 16px;
  border-radius: 18px;
  background: rgba(244, 250, 246, 0.96);
  border: 1px solid rgba(122, 160, 143, 0.16);
  color: ${({theme:e})=>e.colors.textSecondary};
  font-size: 14px;
  line-height: 1.58;
`,$u=kn(lu)`
  background:
    radial-gradient(circle at left bottom, rgba(201, 218, 189, 0.52), transparent 24%),
    radial-gradient(circle at right top, rgba(221, 234, 225, 0.38), transparent 26%),
    linear-gradient(180deg, rgba(237, 246, 241, 0.97), rgba(228, 238, 221, 0.97));
`,Pu=kn.div`
  margin-top: 16px;

  > * {
    width: 100%;
  }
`,Tu=kn(lu)`
  background:
    radial-gradient(circle at right top, rgba(229, 239, 229, 0.42), transparent 26%),
    linear-gradient(180deg, rgba(255, 255, 255, 0.98), rgba(248, 250, 244, 0.98));
`,Mu=kn.form`
  display: flex;
  flex-direction: column;
  gap: 14px;
  margin-top: 18px;
`,Ru=kn.div`
  display: flex;
  flex-direction: column;
  gap: 7px;
`,Ou=kn.label`
  color: ${({theme:e})=>e.colors.textPrimary};
  font-size: 13px;
  font-weight: 600;
  line-height: 1.35;
`,Nu=bn`
  width: 100%;
  padding: 14px 16px;
  border-radius: 16px;
  border: 1px solid rgba(122, 160, 143, 0.22);
  background: rgba(255, 255, 255, 0.94);
  color: ${({theme:e})=>e.colors.textPrimary};
  font-family: ${({theme:e})=>e.fonts.body};
  font-size: 15px;
  line-height: 1.5;
  transition:
    border-color 180ms ease,
    box-shadow 180ms ease,
    background 180ms ease;

  &::placeholder {
    color: rgba(95, 111, 102, 0.88);
  }

  &:focus-visible {
    outline: none;
    border-color: ${({theme:e})=>e.colors.primary};
    box-shadow: 0 0 0 3px rgba(31, 95, 74, 0.08);
    background: #ffffff;
  }

  &:disabled {
    opacity: 0.72;
    cursor: not-allowed;
  }
`,Au=kn.input`
  ${Nu}
`,Du=kn.textarea`
  ${Nu}
  min-height: 136px;
  resize: vertical;
`,Lu=kn.div`
  padding: 12px 14px;
  background-color: #e8f5e9;
  color: #2e7d32;
  border-radius: 12px;
  font-size: 14px;
  line-height: 1.5;
  border-left: 4px solid #4caf50;
  animation: contactFadeIn 0.3s ease-in-out;
`,Iu=kn.div`
  padding: 12px 14px;
  background-color: #ffebee;
  color: #c62828;
  border-radius: 12px;
  font-size: 14px;
  line-height: 1.5;
  border-left: 4px solid #f44336;
  animation: contactFadeIn 0.3s ease-in-out;
`,Fu=()=>{const[e,t]=p.useState({name:"",email:"",message:""}),[n,r]=p.useState(!1),[i,a]=p.useState(!1),[o,s]=p.useState("");p.useEffect(()=>{Jl(nu)},[]);const l=e=>{const{name:n,value:r}=e.target;t(e=>({...e,[n]:r}))};return d.jsxs(d.Fragment,{children:[d.jsx(iu,{}),d.jsx(au,{children:d.jsx(ou,{children:d.jsxs(su,{children:[d.jsxs(pu,{children:[d.jsx(uu,{children:"Begin a Gentler Journey"}),d.jsx(du,{children:d.jsx("span",{children:"✦"})}),d.jsx(cu,{children:"Wellness is personal. If you're feeling called to slow down, heal, and reconnect with your body — let's start with a conversation."}),d.jsxs(hu,{children:[d.jsx(za,{href:ro(qa),target:"_blank",rel:"noopener noreferrer nofollow",icon:d.jsx(ua,{size:18,strokeWidth:1.9}),size:"lg",children:"Chat on WhatsApp"}),d.jsx(za,{href:Za,icon:d.jsx(pa,{size:18,strokeWidth:1.9}),variant:"outline",size:"lg",children:"Call Now"})]})]}),d.jsxs(fu,{children:[d.jsxs(mu,{children:[d.jsxs(xu,{children:[d.jsx(yu,{children:"Connect Personally"}),d.jsx(bu,{children:"I work closely with a limited number of clients to ensure deep, mindful guidance. The best way to begin is through a personal conversation."}),d.jsxs(vu,{children:[d.jsxs(wu,{href:`mailto:${Xa}`,children:[d.jsx(_u,{children:d.jsx(la,{size:18,strokeWidth:1.9})}),d.jsxs(ju,{children:[d.jsx(Su,{children:"Email"}),d.jsx(Cu,{children:Xa})]}),d.jsx(zu,{"aria-hidden":"true",children:"↗"})]}),d.jsxs(wu,{href:Za,children:[d.jsx(_u,{children:d.jsx(pa,{size:18,strokeWidth:1.9})}),d.jsxs(ju,{children:[d.jsx(Su,{children:"Call"}),d.jsx(Cu,{children:Ja})]}),d.jsx(zu,{"aria-hidden":"true",children:"↗"})]})]}),d.jsxs(ku,{children:[d.jsx(_u,{children:d.jsx(ta,{size:18,strokeWidth:1.9})}),d.jsxs(ju,{children:[d.jsx(Su,{children:"Sessions"}),d.jsx(Cu,{children:no})]})]}),d.jsxs(Eu,{children:[d.jsx("strong",{children:"Currently accepting a limited number of new clients"}),d.jsx("br",{}),"to ensure deeply personalised guidance."]})]}),d.jsxs($u,{children:[d.jsx(yu,{children:"Prefer speaking instead of typing?"}),d.jsx(Pu,{children:d.jsx(za,{href:ro(qa),target:"_blank",rel:"noopener noreferrer nofollow",fullWidth:!0,size:"lg",icon:d.jsx(Xi,{size:18,strokeWidth:1.9}),children:"Send a Voice Note on WhatsApp"})})]})]}),d.jsx(gu,{children:d.jsxs(Tu,{children:[d.jsx(yu,{children:"Or Leave a Message"}),d.jsx(bu,{children:"Prefer writing? Share a few words and I'll personally get back to you."}),d.jsxs(Mu,{onSubmit:async n=>{if(n.preventDefault(),s(""),a(!1),e.name&&e.email&&e.message)if(/\S+@\S+\.\S+/.test(e.email))try{r(!0);const n={from_name:e.name,from_email:e.email,to_email:Ka,message:e.message,reply_to:e.email};await Zl(eu,tu,n),a(!0),t({name:"",email:"",message:""}),window.setTimeout(()=>{a(!1)},5e3)}catch(i){console.error("Failed to send email:",i),s("Failed to send message. Please try again later.")}finally{r(!1)}else s("Please enter a valid email address");else s("Please fill in all fields")},children:[d.jsxs(Ru,{children:[d.jsx(Ou,{htmlFor:"contact-name",children:"Your name"}),d.jsx(Au,{id:"contact-name",name:"name",value:e.name,onChange:l,placeholder:"Your name",autoComplete:"name",disabled:n})]}),d.jsxs(Ru,{children:[d.jsx(Ou,{htmlFor:"contact-email",children:"Email address"}),d.jsx(Au,{id:"contact-email",name:"email",type:"email",value:e.email,onChange:l,placeholder:"Email address",autoComplete:"email",disabled:n})]}),d.jsxs(Ru,{children:[d.jsx(Ou,{htmlFor:"contact-message",children:"What are you seeking support with?"}),d.jsx(Du,{id:"contact-message",name:"message",value:e.message,onChange:l,placeholder:"What are you seeking support with?",disabled:n})]}),o?d.jsx(Iu,{children:o}):null,i?d.jsx(Lu,{children:"Thank you! Your message has been sent successfully."}):null,d.jsx(za,{type:"submit",disabled:n,variant:"primary",fullWidth:!0,size:"lg",icon:d.jsx(Gi,{size:18,strokeWidth:1.9}),iconPosition:"right",children:n?"Sending...":"Send Message"})]})]})})]})]})})})]})};function Wu(){return d.jsx(Fu,{})}const Bu=bn`
  background: linear-gradient(180deg, rgba(255, 255, 255, 0.95), rgba(251, 249, 243, 0.98));
  border: 1px solid rgba(122, 160, 143, 0.12);
  box-shadow: 0 20px 48px rgba(15, 60, 40, 0.08);
  border-radius: 28px;

  @media (max-width: 768px) {
    border-radius: 24px;
  }
`,Uu=kn.div`
  width: 100%;
  overflow-x: hidden;
  padding: 0 0 24px;
`,Yu=kn.div`
  width: min(calc(100% - 20px), 1120px);
  margin: 0 auto;

  @media (max-width: 768px) {
    width: min(calc(100% - 18px), 430px);
  }
`,Hu=kn.div`
  display: flex;
  flex-direction: column;
  gap: 20px;

  > * {
    scroll-margin-top: 76px;
  }

  @media (min-width: 769px) {
    gap: 26px;

    > * {
      scroll-margin-top: 110px;
    }
  }
`,Vu=kn.section`
  ${Bu};
  position: relative;
  overflow: hidden;
  padding: 18px;

  @media (min-width: 769px) {
    padding: 28px;
  }
`,qu=kn.span`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  color: ${({theme:e})=>e.colors.textSecondary};
  font-size: 12px;
  font-weight: 700;
  letter-spacing: 0.12em;
  text-transform: uppercase;

  &::before,
  &::after {
    content: "✦";
    color: ${({theme:e})=>e.colors.warmAccent};
    font-size: 11px;
    line-height: 1;
  }
`,Qu=kn.h2`
  margin: 10px 0 0;
  color: ${({theme:e})=>e.colors.textPrimary};
  font-size: clamp(1.78rem, 6.8vw, 3rem);
  line-height: 1.08;
`,Gu=kn.p`
  margin: 14px 0 0;
  color: ${({theme:e})=>e.colors.textMuted};
  font-size: 14px;
  line-height: 1.62;

  @media (min-width: 769px) {
    font-size: 15px;
    line-height: 1.68;
  }
`,Xu=kn.div`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  color: ${({theme:e})=>e.colors.warmAccent};
  margin: 14px 0 2px;

  &::before,
  &::after {
    content: "";
    display: block;
    width: 34px;
    height: 1.5px;
    background: currentColor;
  }

  span {
    font-size: 12px;
    line-height: 1;
  }
`,Ku=kn.section`
  position: relative;
`,Ju=kn.div`
  position: relative;
  overflow: hidden;
  border-radius: 0 0 24px 24px;
  background: #edf6f1;
  min-height: 404px;
  box-shadow: 0 18px 40px rgba(15, 60, 40, 0.08);

  @media (min-width: 769px) {
    ${Bu};
    min-height: 620px;
    border-radius: 30px;
  }

  @media (max-width: 420px) {
    min-height: 390px;
  }
`,Zu=kn.picture`
  display: block;
  width: 100%;
  height: 100%;
  min-height: inherit;
`,ec=kn.img`
  display: block;
  width: 100%;
  height: 100%;
  min-height: inherit;
  object-fit: cover;
  object-position: center 52%;

  @media (min-width: 769px) {
    object-position: center 50%;
  }
`,tc=kn.div`
  position: absolute;
  inset: 0;
  pointer-events: none;
  background:
    linear-gradient(180deg, rgba(255, 250, 242, 0.03) 0%, rgba(18, 30, 26, 0.02) 58%, rgba(19, 33, 28, 0.12) 100%),
    radial-gradient(circle at top center, rgba(255, 255, 255, 0.16), transparent 34%);
`;kn.div`
  position: absolute;
  left: 14px;
  right: 14px;
  bottom: 18px;
  display: flex;
  gap: 8px;
  z-index: 2;

  @media (max-width: 360px) {
    flex-wrap: wrap;
  }

  @media (min-width: 769px) {
    left: 24px;
    right: auto;
    width: min(100% - 48px, 520px);
    bottom: 22px;
  }
`,kn.button`
  flex: 1 1 0;
  min-height: 48px;
  border-radius: 999px;
  border: 1px solid rgba(255, 255, 255, 0.44);
  background: linear-gradient(180deg, rgba(97, 103, 49, 0.54), rgba(121, 126, 63, 0.6));
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  color: #ffffff;
  box-shadow:
    inset 0 1px 0 rgba(255, 255, 255, 0.28),
    0 14px 28px rgba(52, 65, 35, 0.2);
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  padding: 0 14px;
  font-family: ${({theme:e})=>e.fonts.body};
  font-size: 13px;
  font-weight: 600;
  letter-spacing: 0.01em;
  cursor: pointer;

  &:focus-visible {
    outline: 2px solid rgba(255, 255, 255, 0.82);
    outline-offset: 2px;
  }

  @media (max-width: 360px) {
    width: 100%;
    flex-basis: 100%;
  }
`,kn.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
`;const nc=kn(Vu)`
  background:
    radial-gradient(circle at right top, rgba(229, 239, 229, 0.9), transparent 28%),
    linear-gradient(180deg, rgba(255, 255, 255, 0.96), rgba(247, 250, 245, 0.96));
  text-align: center;
`,rc=kn.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 10px;

  @media (min-width: 560px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
`,ic=kn.div`
  ${Bu};
  padding: 16px;
  display: flex;
  flex-direction: column;
  gap: 8px;
  min-height: 116px;
  box-shadow: 0 12px 28px rgba(15, 60, 40, 0.06);
`,ac=kn.span`
  width: 34px;
  height: 34px;
  border-radius: 12px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  background: rgba(244, 250, 246, 0.98);
  color: ${({theme:e})=>e.colors.primary};
  border: 1px solid rgba(122, 160, 143, 0.16);
`,oc=kn.h3`
  margin: 0;
  color: ${({theme:e})=>e.colors.textPrimary};
  font-size: 15px;
  line-height: 1.3;
`,sc=kn.p`
  margin: 0;
  color: ${({theme:e})=>e.colors.textMuted};
  font-size: 13px;
  line-height: 1.5;
`,lc=kn(Vu)`
  background:
    radial-gradient(circle at left top, rgba(221, 234, 225, 0.64), transparent 26%),
    linear-gradient(180deg, rgba(255, 255, 255, 0.96), rgba(244, 250, 246, 0.96));
`,uc=kn.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 16px;

  @media (min-width: 900px) {
    grid-template-columns: minmax(0, 320px) minmax(0, 1fr);
    gap: 24px;
    align-items: start;
  }
`,cc=kn.div`
  border-radius: 24px;
  overflow: hidden;
  min-height: 254px;
  background: #e8f1eb;

  @media (min-width: 900px) {
    min-height: 100%;
  }
`,dc=kn.img`
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
`,pc=kn.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-top: 18px;
`,hc=kn.div`
  display: grid;
  grid-template-columns: auto 1fr;
  gap: 10px;
  align-items: start;
  padding: 11px 12px;
  border-radius: 16px;
  background: rgba(249, 251, 247, 0.92);
  border: 1px solid rgba(122, 160, 143, 0.1);
  color: ${({theme:e})=>e.colors.textPrimary};
  font-size: 14px;
  line-height: 1.5;
`,fc=kn.span`
  width: 22px;
  height: 22px;
  border-radius: 50%;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  background: rgba(244, 250, 246, 0.98);
  color: ${({theme:e})=>e.colors.primary};
  border: 1px solid rgba(122, 160, 143, 0.16);
  margin-top: 1px;
`,mc=kn.p`
  margin: 18px 0 0;
  color: ${({theme:e})=>e.colors.textMuted};
  font-size: 14px;
  line-height: 1.58;
  font-style: italic;
`;kn(Vu)`
  background:
    radial-gradient(circle at right top, rgba(221, 234, 225, 0.52), transparent 28%),
    linear-gradient(180deg, rgba(255, 255, 255, 0.96), rgba(244, 250, 246, 0.96));
`,kn.div`
  text-align: center;
  max-width: 660px;
  margin: 0 auto 18px;
`,kn.div`
  ${Bu};
  padding: 18px;
  display: grid;
  grid-template-columns: 1fr;
  gap: 16px;
  box-shadow: 0 14px 28px rgba(15, 60, 40, 0.07);

  @media (min-width: 640px) {
    grid-template-columns: 112px 1fr;
    align-items: start;
  }
`,kn.div`
  width: 112px;
  height: 132px;
  border-radius: 24px;
  padding: 6px;
  background: #ffffff;
  box-shadow: 0 12px 24px rgba(15, 60, 40, 0.1);
  margin: 0 auto;

  img {
    width: 100%;
    height: 100%;
    border-radius: 18px;
    object-fit: cover;
    object-position: center top;
    display: block;
  }

  @media (min-width: 640px) {
    margin: 0;
  }
`,kn.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`,kn.span`
  color: ${({theme:e})=>e.colors.warmAccent};
  font-size: 32px;
  line-height: 1;
`,kn.p`
  margin: 0;
  color: ${({theme:e})=>e.colors.textMuted};
  font-size: 14px;
  line-height: 1.62;
`,kn.h3`
  margin: 0;
  color: ${({theme:e})=>e.colors.textPrimary};
  font-size: 15px;
  line-height: 1.35;
`,kn.p`
  margin: 0;
  color: ${({theme:e})=>e.colors.textSecondary};
  font-size: 13px;
  line-height: 1.4;
`,kn.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  margin-top: 14px;
`,kn.button`
  width: 38px;
  height: 38px;
  border-radius: 50%;
  border: 1px solid rgba(122, 160, 143, 0.18);
  background: rgba(255, 255, 255, 0.88);
  color: ${({theme:e})=>e.colors.primary};
  display: inline-flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  box-shadow: 0 10px 24px rgba(15, 60, 40, 0.06);
`,kn.div`
  display: flex;
  align-items: center;
  gap: 8px;
`,kn.button`
  width: ${({$active:e})=>e?"18px":"8px"};
  height: 8px;
  border-radius: 999px;
  border: none;
  background: ${({theme:e,$active:t})=>t?e.colors.primary:"rgba(122, 160, 143, 0.28)"};
  transition: width 180ms ease, background 180ms ease;
  cursor: pointer;
`;const gc=kn(Vu)`
  background:
    radial-gradient(circle at left bottom, rgba(201, 218, 189, 0.54), transparent 24%),
    radial-gradient(circle at right top, rgba(212, 227, 208, 0.42), transparent 28%),
    linear-gradient(180deg, rgba(237, 246, 241, 0.96), rgba(221, 237, 213, 0.96));
  text-align: center;
`,xc=kn.div`
  ${Bu};
  max-width: 520px;
  margin: 18px auto 0;
  padding: 18px;
  box-shadow: 0 16px 30px rgba(15, 60, 40, 0.08);
`,yc=kn.h3`
  margin: 0;
  color: ${({theme:e})=>e.colors.textPrimary};
  font-size: 1.26rem;
  line-height: 1.3;
`,bc=kn.p`
  margin: 10px 0 0;
  color: ${({theme:e})=>e.colors.textMuted};
  font-size: 13px;
  line-height: 1.45;
`,vc=kn.div`
  margin-top: 14px;
  color: ${({theme:e})=>e.colors.textPrimary};
  font-size: 2.2rem;
  font-weight: 700;
  line-height: 1;

  span {
    font-size: 1rem;
    vertical-align: top;
    margin-right: 4px;
  }
`,wc=kn.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-top: 18px;
  text-align: left;
`,kc=kn.div`
  display: grid;
  grid-template-columns: auto 1fr;
  gap: 10px;
  align-items: start;
  padding: 11px 12px;
  border-radius: 16px;
  background: rgba(249, 251, 247, 0.92);
  border: 1px solid rgba(122, 160, 143, 0.1);
  color: ${({theme:e})=>e.colors.textPrimary};
  font-size: 14px;
  line-height: 1.5;
`,_c=kn.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-top: 16px;

  > * {
    width: 100%;
  }
`,jc=[{title:"Gut Health & Digestion",text:"Support digestion, reduce bloating and improve immunity.",icon:sa},{title:"Sustained Energy",text:"Feel steady, balanced energy throughout the day — no crashes.",icon:ga},{title:"Weight Balance",text:"Healthy weight loss or weight gain through personalised planning.",icon:ha},{title:"Mindful Eating",text:"Develop a calm, positive relationship with food — without guilt.",icon:aa}],Sc=["Weight loss, weight gain & body recomposition","PCOS / PCOD & hormonal balance","Diabetes, thyroid & metabolic health","Pregnancy & women’s nutrition support","Gut health, digestion & immunity","Lifestyle & habit-based nutrition","Vegetarian & egg-based meal planning","Indian home-food focused diets (no exotic foods)"],Cc=()=>{const e=Si.nutrition.heroWatercolor;return d.jsx(Uu,{children:d.jsx(Yu,{children:d.jsxs(Hu,{children:[d.jsx(Ku,{children:d.jsxs(Ju,{children:[d.jsxs(Zu,{children:[d.jsx("source",{media:"(min-width: 768px)",srcSet:e.desktop}),d.jsx(ec,{src:e.mobile,alt:e.alt,loading:"eager",decoding:"async"})]}),d.jsx(tc,{})]})}),d.jsxs(nc,{children:[d.jsx(qu,{children:"Nutrition with Balance"}),d.jsx(Qu,{children:"More Than Just a Diet"}),d.jsx(Xu,{children:d.jsx("span",{children:"✦"})}),d.jsx(Gu,{children:"I believe food should support both your practice and your lifestyle. My approach blends clinical nutrition, Ayurvedic wisdom, and mindful eating to help you build sustainable habits and lasting balance — without extreme dieting."})]}),d.jsx(rc,{children:jc.map(({title:e,text:t,icon:n})=>d.jsxs(ic,{children:[d.jsx(ac,{children:d.jsx(n,{size:18,strokeWidth:1.9})}),d.jsx(oc,{children:e}),d.jsx(sc,{children:t})]},e))}),d.jsx(lc,{id:"nutrition-approach",children:d.jsxs(uc,{children:[d.jsx(cc,{children:d.jsx(dc,{src:Si.nutrition.bio,alt:"Personalised Nutrition Plans",loading:"lazy",decoding:"async"})}),d.jsxs("div",{children:[d.jsx(qu,{children:"Nutrition Approach"}),d.jsx(Qu,{children:"Types of Diet Plans I Offer"}),d.jsx(Gu,{children:"I create personalised clinical nutrition plans based on your health condition, body needs and lifestyle — never one-size-fits-all diets."}),d.jsx(pc,{children:Sc.map(e=>d.jsxs(hc,{children:[d.jsx(fc,{children:d.jsx(Ji,{size:12,strokeWidth:2.6})}),d.jsx("span",{children:e})]},e))}),d.jsx(mc,{children:"Each plan is designed to be practical, culturally appropriate and easy to follow — supporting healing from within."})]})]})}),d.jsxs(gc,{id:"pricing-section",children:[d.jsx(Qu,{children:"Start Your Journey"}),d.jsx(Gu,{children:"A simple first step towards balanced, sustainable health."}),d.jsxs(xc,{children:[d.jsx(yc,{children:"Discovery Call"}),d.jsx(bc,{children:"30 Minutes • Online via Zoom / WhatsApp"}),d.jsxs(vc,{children:[d.jsx("span",{children:"₹"}),"299"]}),d.jsxs(wc,{children:[d.jsxs(kc,{children:[d.jsx(fc,{children:d.jsx(Ji,{size:12,strokeWidth:2.6})}),d.jsx("span",{children:"Dietary pattern analysis"})]}),d.jsxs(kc,{children:[d.jsx(fc,{children:d.jsx(Ji,{size:12,strokeWidth:2.6})}),d.jsx("span",{children:"Goal-setting strategy"})]}),d.jsxs(kc,{children:[d.jsx(fc,{children:d.jsx(Ji,{size:12,strokeWidth:2.6})}),d.jsx("span",{children:"Personal Q&A session"})]})]}),d.jsxs(_c,{children:[d.jsx(za,{href:ro(Qa),target:"_blank",rel:"noopener noreferrer",fullWidth:!0,size:"lg",children:"Book My Session"}),d.jsx(za,{href:ro(qa),target:"_blank",rel:"noopener noreferrer",variant:"outline",size:"lg",fullWidth:!0,icon:d.jsx(ua,{size:18,strokeWidth:1.9}),children:"Chat on WhatsApp"})]})]})]})]})})})},zc=()=>d.jsx(Cc,{}),Ec=bn`
  background: linear-gradient(180deg, rgba(255, 255, 255, 0.95), rgba(251, 249, 243, 0.98));
  border: 1px solid rgba(122, 160, 143, 0.12);
  box-shadow: 0 20px 48px rgba(15, 60, 40, 0.08);
  border-radius: 28px;

  @media (max-width: 768px) {
    border-radius: 24px;
  }
`,$c=kn.div`
  width: 100%;
  overflow-x: hidden;
  padding: 0 0 24px;
`,Pc=kn.div`
  width: min(calc(100% - 20px), 1120px);
  margin: 0 auto;

  @media (max-width: 768px) {
    width: min(calc(100% - 18px), 430px);
  }
`,Tc=kn.div`
  display: flex;
  flex-direction: column;
  gap: 20px;

  > * {
    scroll-margin-top: 76px;
  }

  @media (min-width: 769px) {
    gap: 26px;

    > * {
      scroll-margin-top: 110px;
    }
  }
`,Mc=kn.section`
  ${Ec};
  position: relative;
  overflow: hidden;
  padding: 18px;

  @media (min-width: 769px) {
    padding: 28px;
  }
`,Rc=kn.span`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  color: ${({theme:e})=>e.colors.textSecondary};
  font-size: 12px;
  font-weight: 700;
  letter-spacing: 0.12em;
  text-transform: uppercase;

  &::before,
  &::after {
    content: "✦";
    color: ${({theme:e})=>e.colors.warmAccent};
    font-size: 11px;
    line-height: 1;
  }
`,Oc=kn.h2`
  margin: 10px 0 0;
  color: ${({theme:e})=>e.colors.textPrimary};
  font-size: clamp(1.78rem, 6.8vw, 3rem);
  line-height: 1.08;
`,Nc=kn.p`
  margin: 14px 0 0;
  color: ${({theme:e})=>e.colors.textMuted};
  font-size: 14px;
  line-height: 1.62;

  @media (min-width: 769px) {
    font-size: 15px;
    line-height: 1.68;
  }
`,Ac=kn.div`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  color: ${({theme:e})=>e.colors.warmAccent};
  margin: 14px 0 2px;

  &::before,
  &::after {
    content: "";
    display: block;
    width: 34px;
    height: 1.5px;
    background: currentColor;
  }

  span {
    font-size: 12px;
    line-height: 1;
  }
`,Dc=kn.section`
  position: relative;
`,Lc=kn.div`
  position: relative;
  overflow: hidden;
  border-radius: 0 0 24px 24px;
  background: #edf6f1;
  min-height: 364px;
  box-shadow: 0 18px 40px rgba(15, 60, 40, 0.08);

  @media (min-width: 769px) {
    ${Ec};
    min-height: 620px;
    border-radius: 30px;
  }

  @media (max-width: 420px) {
    min-height: 350px;
  }
`,Ic=kn.picture`
  display: block;
  width: 100%;
  height: 100%;
  min-height: inherit;
`,Fc=kn.img`
  display: block;
  width: 100%;
  height: 100%;
  min-height: inherit;
  object-fit: cover;
  object-position: center 54%;

  @media (min-width: 769px) {
    object-position: center 52%;
  }
`,Wc=kn.div`
  position: absolute;
  inset: 0;
  pointer-events: none;
  background:
    linear-gradient(180deg, rgba(255, 250, 242, 0.04) 0%, rgba(18, 30, 26, 0.02) 54%, rgba(19, 33, 28, 0.12) 100%),
    radial-gradient(circle at top center, rgba(255, 255, 255, 0.16), transparent 34%);
`;kn.div`
  position: absolute;
  left: 14px;
  right: 14px;
  bottom: 18px;
  display: flex;
  gap: 8px;
  z-index: 2;

  @media (max-width: 360px) {
    flex-wrap: wrap;
  }

  @media (min-width: 769px) {
    left: 24px;
    right: auto;
    width: min(100% - 48px, 520px);
    bottom: 22px;
  }
`,kn.button`
  flex: 1 1 0;
  min-height: 48px;
  border-radius: 999px;
  border: 1px solid rgba(255, 255, 255, 0.44);
  background: linear-gradient(180deg, rgba(97, 103, 49, 0.54), rgba(121, 126, 63, 0.6));
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  color: #ffffff;
  box-shadow:
    inset 0 1px 0 rgba(255, 255, 255, 0.28),
    0 14px 28px rgba(52, 65, 35, 0.2);
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  padding: 0 14px;
  font-family: ${({theme:e})=>e.fonts.body};
  font-size: 13px;
  font-weight: 600;
  letter-spacing: 0.01em;
  cursor: pointer;
  transition:
    transform 180ms ease,
    box-shadow 180ms ease,
    background 180ms ease;

  &:hover {
    transform: translateY(-1px);
  }

  &:focus-visible {
    outline: 2px solid rgba(255, 255, 255, 0.82);
    outline-offset: 2px;
  }

  @media (max-width: 360px) {
    width: 100%;
    flex-basis: 100%;
  }
`,kn.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
`;const Bc=kn(Mc)`
  background:
    radial-gradient(circle at right top, rgba(229, 239, 229, 0.9), transparent 28%),
    linear-gradient(180deg, rgba(255, 255, 255, 0.96), rgba(247, 250, 245, 0.96));
  text-align: center;
`,Uc=kn.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 10px;

  @media (min-width: 560px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  @media (min-width: 960px) {
    grid-template-columns: repeat(5, minmax(0, 1fr));
  }
`,Yc=kn.div`
  ${Ec};
  padding: 14px;
  display: flex;
  flex-direction: column;
  gap: 8px;
  min-height: 118px;
  box-shadow: 0 12px 28px rgba(15, 60, 40, 0.06);
`,Hc=kn.span`
  width: 34px;
  height: 34px;
  border-radius: 12px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  background: rgba(244, 250, 246, 0.98);
  color: ${({theme:e})=>e.colors.primary};
  border: 1px solid rgba(122, 160, 143, 0.16);
`,Vc=kn.h3`
  margin: 0;
  color: ${({theme:e})=>e.colors.textPrimary};
  font-size: 15px;
  line-height: 1.3;
`,qc=kn.p`
  margin: 0;
  color: ${({theme:e})=>e.colors.textMuted};
  font-size: 13px;
  line-height: 1.5;
`,Qc=kn(Mc)`
  background:
    radial-gradient(circle at left top, rgba(221, 234, 225, 0.64), transparent 26%),
    linear-gradient(180deg, rgba(255, 255, 255, 0.96), rgba(244, 250, 246, 0.96));
`,Gc=kn.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-top: 18px;
`,Xc=kn.div`
  display: grid;
  grid-template-columns: auto 1fr;
  gap: 10px;
  align-items: start;
  padding: 12px 14px;
  border-radius: 18px;
  background: rgba(249, 251, 247, 0.92);
  border: 1px solid rgba(122, 160, 143, 0.1);
`,Kc=kn.span`
  width: 26px;
  height: 26px;
  border-radius: 10px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  color: ${({theme:e})=>e.colors.primary};
  background: rgba(244, 250, 246, 0.98);
  border: 1px solid rgba(122, 160, 143, 0.16);
  flex-shrink: 0;
`,Jc=kn.p`
  margin: 0;
  color: ${({theme:e})=>e.colors.textPrimary};
  font-size: 14px;
  line-height: 1.55;
`,Zc=kn(Mc)`
  background:
    radial-gradient(circle at top center, rgba(217, 184, 137, 0.08), transparent 38%),
    linear-gradient(180deg, rgba(255, 255, 255, 0.96), rgba(246, 250, 246, 0.96));
`,ed=kn.div`
  text-align: center;
  max-width: 700px;
  margin: 0 auto 18px;
`,td=kn.div`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 6px;
  margin-top: 16px;
  border-radius: 999px;
  background: rgba(244, 250, 246, 0.92);
  border: 1px solid rgba(122, 160, 143, 0.16);
`,nd=kn.button`
  border: none;
  border-radius: 999px;
  padding: 10px 14px;
  background: ${({theme:e,$active:t})=>t?e.colors.primary:"transparent"};
  color: ${({theme:e,$active:t})=>t?e.colors.textWhite:e.colors.textPrimary};
  font-size: 13px;
  font-weight: 600;
  cursor: pointer;
`,rd=kn.span`
  display: inline-flex;
  align-items: center;
  border-radius: 999px;
  padding: 2px 8px;
  background: rgba(31, 95, 74, 0.08);
  color: ${({theme:e})=>e.colors.primary};
  font-size: 11px;
  font-weight: 600;
  margin-left: 6px;
`,id=kn.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 16px;

  @media (min-width: 960px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
`,ad=kn.div`
  ${Ec};
  padding: 18px;
  display: flex;
  flex-direction: column;
  gap: 14px;
  box-shadow: ${({$highlight:e})=>e?"0 22px 42px rgba(15, 60, 40, 0.12)":"0 14px 28px rgba(15, 60, 40, 0.07)"};
  border-color: ${({$highlight:e})=>e?"rgba(31, 95, 74, 0.2)":"rgba(122, 160, 143, 0.12)"};
`,od=kn.h3`
  margin: 0;
  color: ${({theme:e})=>e.colors.textPrimary};
  font-size: 1.16rem;
  line-height: 1.3;
`,sd=kn.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`,ld=kn.div`
  color: ${({theme:e})=>e.colors.textMuted};
  font-size: 13px;
  text-decoration: line-through;
`,ud=kn.div`
  color: ${({theme:e})=>e.colors.textPrimary};
  font-size: 2rem;
  font-weight: 700;
  line-height: 1;

  span {
    display: block;
    margin-top: 6px;
    color: ${({theme:e})=>e.colors.textMuted};
    font-size: 13px;
    font-weight: 500;
    line-height: 1.4;
  }
`,cd=kn.p`
  margin: -2px 0 0;
  color: ${({theme:e})=>e.colors.textMuted};
  font-size: 13px;
  line-height: 1.45;
`,dd=kn.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
`,pd=kn.button`
  border-radius: 999px;
  border: 1px solid ${({theme:e,$active:t})=>t?e.colors.primary:"rgba(122, 160, 143, 0.18)"};
  background: ${({theme:e,$active:t})=>t?e.colors.primaryActiveLightest:"rgba(255, 255, 255, 0.92)"};
  color: ${({theme:e})=>e.colors.textPrimary};
  padding: 9px 14px;
  font-size: 13px;
  font-weight: 600;
  cursor: pointer;
  transition:
    border-color 180ms ease,
    background 180ms ease,
    box-shadow 180ms ease;

  &:focus-visible {
    outline: none;
    box-shadow:
      0 0 0 3px rgba(31, 95, 74, 0.12),
      0 0 0 1px rgba(31, 95, 74, 0.68);
  }
`,hd=kn.div`
  margin-top: 2px;
`,fd=kn.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 10px;
`,md=kn.li`
  display: grid;
  grid-template-columns: auto 1fr;
  gap: 10px;
  align-items: start;
  color: ${({theme:e})=>e.colors.textSecondary};
  font-size: 14px;
  line-height: 1.52;
`,gd=kn.span`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  background: rgba(244, 250, 246, 0.98);
  color: ${({theme:e})=>e.colors.primary};
  border: 1px solid rgba(122, 160, 143, 0.16);
  margin-top: 1px;
`,xd=kn(Mc)`
  background:
    radial-gradient(circle at right top, rgba(221, 234, 225, 0.52), transparent 28%),
    linear-gradient(180deg, rgba(255, 255, 255, 0.96), rgba(244, 250, 246, 0.96));
`,yd=kn.div`
  text-align: center;
  max-width: 660px;
  margin: 0 auto 18px;
`,bd=kn.div`
  display: grid;
  grid-auto-flow: column;
  grid-auto-columns: minmax(78%, 1fr);
  gap: 12px;
  overflow-x: auto;
  padding-bottom: 6px;
  scroll-snap-type: x proximity;

  &::-webkit-scrollbar {
    height: 8px;
  }

  &::-webkit-scrollbar-thumb {
    background: rgba(122, 160, 143, 0.28);
    border-radius: 999px;
  }

  @media (min-width: 769px) {
    grid-auto-flow: initial;
    grid-auto-columns: auto;
    grid-template-columns: repeat(3, minmax(0, 1fr));
    overflow: visible;
  }
`,vd=kn.div`
  ${Ec};
  padding: 10px;
  scroll-snap-align: start;
`,wd=kn.img`
  display: block;
  width: 100%;
  aspect-ratio: 0.88;
  object-fit: cover;
  object-position: center;
  border-radius: 18px;
  background: #eef2ef;
`,kd=kn.div`
  overflow: hidden;
  border-radius: 24px;
  touch-action: pan-y;
`,_d=kn.div`
  display: flex;
  transform: translateX(${({$index:e})=>`-${100*e}%`});
  transition: transform 320ms ease;
`,jd=kn.div`
  min-width: 100%;
`,Sd=kn.div`
  ${Ec};
  padding: 10px;
`,Cd=kn.img`
  display: block;
  width: 100%;
  aspect-ratio: 0.92;
  object-fit: contain;
  object-position: center;
  border-radius: 18px;
  background: #eef2ef;
`,zd=kn.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  margin-top: 14px;
`,Ed=kn.button`
  width: 38px;
  height: 38px;
  border-radius: 50%;
  border: 1px solid rgba(122, 160, 143, 0.18);
  background: rgba(255, 255, 255, 0.88);
  color: ${({theme:e})=>e.colors.primary};
  display: inline-flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  box-shadow: 0 10px 24px rgba(15, 60, 40, 0.06);
`,$d=kn.div`
  display: flex;
  align-items: center;
  gap: 8px;
`,Pd=kn.button`
  width: ${({$active:e})=>e?"18px":"8px"};
  height: 8px;
  border-radius: 999px;
  border: none;
  background: ${({theme:e,$active:t})=>t?e.colors.primary:"rgba(122, 160, 143, 0.28)"};
  transition: width 180ms ease, background 180ms ease;
  cursor: pointer;
`,Td=kn.div`
  overflow: hidden;
  border-radius: 24px;
`,Md=kn.div`
  display: flex;
  transform: translateX(${({$index:e})=>`-${100*e}%`});
  transition: transform 320ms ease;
`,Rd=kn.div`
  min-width: 100%;
`,Od=kn.div`
  ${Ec};
  padding: 10px;
  touch-action: pan-y;
`,Nd=kn.video`
  display: block;
  width: 100%;
  aspect-ratio: 0.68;
  object-fit: cover;
  border-radius: 18px;
  background:
    radial-gradient(circle at top center, rgba(240, 245, 239, 0.92), rgba(217, 231, 223, 0.84)),
    #dbe7df;
`,Ad=kn.div`
  overflow: hidden;
  border-radius: 24px;
`,Dd=kn.div`
  display: flex;
  transform: translateX(${({$index:e})=>`-${100*e}%`});
  transition: transform 320ms ease;
`,Ld=kn.div`
  min-width: 100%;
`,Id=kn.div`
  ${Ec};
  padding: 14px;
  border-radius: 24px;
  cursor: pointer;

  &:focus-visible {
    outline: 2px solid rgba(31, 95, 74, 0.72);
    outline-offset: 3px;
  }
`,Fd=kn.div`
  width: 100%;
  aspect-ratio: ${({$preview:e})=>e?"auto":"0.78"};
  max-height: ${({$preview:e})=>e?"72vh":"none"};
  overflow: hidden;
  border-radius: 18px;
  background: linear-gradient(180deg, rgba(240, 245, 239, 0.92), rgba(255, 255, 255, 0.96));
  display: flex;
  align-items: center;
  justify-content: center;

  ${({$preview:e})=>e?bn`
          overflow: auto;
          padding: 10px;
          touch-action: pan-x pan-y;
        `:""}
`,Wd=kn.img`
  display: block;
  width: ${({$zoom:e=1})=>100*e+"%"};
  height: auto;
  object-fit: contain;
  background: #ffffff;
  transition: width 180ms ease;

  ${({$zoom:e=1})=>e>1?bn`
          max-width: none;
        `:""}
`,Bd=kn(Mc)`
  background:
    radial-gradient(circle at left bottom, rgba(201, 218, 189, 0.54), transparent 24%),
    radial-gradient(circle at right top, rgba(212, 227, 208, 0.42), transparent 28%),
    linear-gradient(180deg, rgba(237, 246, 241, 0.96), rgba(221, 237, 213, 0.96));
  text-align: center;
`,Ud=kn.h2`
  margin: 0;
  color: ${({theme:e})=>e.colors.textPrimary};
  font-size: clamp(1.72rem, 7vw, 2.6rem);
  line-height: 1.08;
`,Yd=kn.p`
  margin: 12px auto 0;
  max-width: 30ch;
  color: ${({theme:e})=>e.colors.textSecondary};
  font-size: 14px;
  line-height: 1.6;

  @media (min-width: 769px) {
    font-size: 15px;
  }
`,Hd=kn.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-top: 18px;

  > * {
    width: 100%;
  }

  @media (min-width: 769px) {
    flex-direction: row;
    justify-content: center;

    > * {
      width: auto;
    }
  }
`,Vd=[{title:"Mindful Movement",text:"Yoga practiced with awareness, breath connection, and respect for your body’s limits.",icon:sa},{title:"Strength & Stability",text:"Build functional strength and joint stability through safe alignment and gradual progress.",icon:ia},{title:"Posture & Pain Care",text:"Support posture correction and manage back, neck, and joint discomfort mindfully.",icon:xa},{title:"Breath & Mindfulness",text:"Calm the nervous system and improve focus through conscious breath awareness.",icon:na},{title:"Progressive & Safe Practice",text:"Each session is designed to be sustainable, adaptive, and supportive of long-term wellbeing.",icon:fa}],qd=["Hatha & Vinyasa Yoga","Strength & flexibility-focused flows","Therapeutic yoga for pain management","Prenatal & postnatal yoga","Beginners & lifestyle-based yoga"],Qd=[{id:"foundation",name:"Group Session Plan",monthly:1500,quarterly:4500,highlight:!1,meta:{monthly:"Mon–Fri • Online / Offline",quarterly:"Mon–Fri • Online / Offline"},features:["Hatha, Ashtanga & Vinyasa Flow Yoga","Pranayama, Meditation & Breathwork","Face Yoga (selected days)","Weight loss or weight gain support","Improved flexibility & strength","Daily energy & overall wellness"]},{id:"holistic",name:"Private Session",monthly:6999,quarterly:20997,highlight:!0,features:["One-on-one private sessions with complete personal attention","Hatha, Ashtanga & Vinyasa Flow Yoga (customized for you)","Pranayama, meditation & breathing techniques","Face yoga on selected days","Posture correction & proper movement guidance","Goal-focused training","Therapeutic / medical yoga support","Optional nutrition guidance","Continuous progress tracking"]},{id:"prenatal",name:"Prenatal & Postnatal Care – Personalized One-on-One Support",monthly:8e3,quarterly:24e3,highlight:!1,features:["Trimester-wise yoga practices","Safe posture correction & body alignment","Pranayama & breathwork for relaxation & stamina","Garbhasanskar (mantras, bonding & mindfulness)","Nutritional guidance (optional detailed plans)","Emotional wellness & stress support","Postnatal recovery & core strengthening","Fully personalized sessions","Continuous progress tracking"]},{id:"prenatal-group",name:"Prenatal & Postnatal Group Care",monthly:2800,quarterly:8400,highlight:!1,meta:{monthly:"Small groups (2–3 mothers)",quarterly:"Small groups (2–3 mothers)"},features:["Trimester-wise safe yoga practices","Gentle posture & body alignment support","Pranayama & breathing techniques for relaxation & stamina","Garbhasanskar (mantras, bonding & mindfulness)","Basic nutritional guidance for pregnancy & recovery","Emotional well-being & stress management","Postnatal recovery & core strengthening","Personal attention within small groups"]}],Gd=[{sessions:12,price:6e3},{sessions:16,price:8e3},{sessions:20,price:1e4}],Xd=[{sessions:12,price:5e3},{sessions:16,price:6500},{sessions:20,price:8e3}],Kd=Si.about.certifications,Jd=()=>{const[e,t]=p.useState("monthly"),[n,r]=p.useState(12),[i,a]=p.useState(12),[o,s]=p.useState(!1),[l,u]=p.useState(0),[c,h]=p.useState(0),[f,m]=p.useState(0),[g,x]=p.useState(null),[y,b]=p.useState(1),v=p.useRef(null),w=p.useRef(null),k=p.useRef(null),_=p.useRef(null),j=p.useRef(null),S=p.useRef(null),C=p.useRef(!1),z=Si.yoga.heroWatercolor,E=t=>{let r="",a=0;if("holistic"===t.id){const e=Gd.find(e=>e.sessions===n);a=e?.price||0,r=`Hi! I'm interested in the ${t.name}.\nSessions: ${n}\nPrice: ₹${a}`}else if("prenatal"===t.id){const e=Xd.find(e=>e.sessions===i);a=e?.price||0,r=`Hi! I'm interested in the ${t.name}.\nSessions: ${i}\nPrice: ₹${a}`}else{const n=t.monthly,i=3*n,o=Math.round(.9*i);a="monthly"===e?n:o,r=`Hi! I'm interested in the ${t.name}.\nBilling: ${e}\nPrice: ₹${a}`}window.open(ro(r),"_blank")},$=()=>u(e=>0===e?Si.yoga.transformations.length-1:e-1),P=()=>u(e=>e===Si.yoga.transformations.length-1?0:e+1),T=()=>h(e=>0===e?Si.yoga.videos.length-1:e-1),M=()=>h(e=>e===Si.yoga.videos.length-1?0:e+1),R=e=>{const t=e.touches[0];k.current=t.clientX,_.current=t.clientY},O=e=>{if(null===k.current||null===_.current)return;const t=e.changedTouches[0],n=t.clientX-k.current,r=t.clientY-_.current;k.current=null,_.current=null,Math.abs(n)<42||Math.abs(n)<=Math.abs(r)||(n>0?T():M())},N=()=>m(e=>0===e?Kd.length-1:e-1),A=()=>m(e=>e===Kd.length-1?0:e+1),D=e=>{x(e),b(1)},L=e=>{const t=e.touches[0];j.current=t.clientX,S.current=t.clientY,C.current=!1},I=e=>{if(null===j.current||null===S.current)return;const t=e.changedTouches[0],n=t.clientX-j.current,r=t.clientY-S.current;j.current=null,S.current=null,Math.abs(n)<42||Math.abs(n)<=Math.abs(r)||(C.current=!0,n>0?N():A())};return d.jsxs($c,{children:[d.jsx(Pc,{children:d.jsxs(Tc,{children:[d.jsx(Dc,{children:d.jsxs(Lc,{children:[d.jsxs(Ic,{children:[d.jsx("source",{media:"(min-width: 768px)",srcSet:z.desktop}),d.jsx(Fc,{src:z.mobile,alt:z.alt,loading:"eager",decoding:"async"})]}),d.jsx(Wc,{})]})}),d.jsxs(Bc,{children:[d.jsx(Rc,{children:"Yoga with Balance"}),d.jsx(Oc,{children:"A Practice Beyond Asanas"}),d.jsx(Ac,{children:d.jsx("span",{children:"✦"})}),d.jsx(Nc,{children:"Yoga is a tool for balance, healing, and self-awareness. My sessions are thoughtfully designed to support mobility, strength, posture, breath, and mental clarity — while respecting your body’s limitations and needs."})]}),d.jsx(Mc,{children:d.jsx(Uc,{children:Vd.map(({title:e,text:t,icon:n})=>d.jsxs(Yc,{children:[d.jsx(Hc,{children:d.jsx(n,{size:18,strokeWidth:1.9})}),d.jsx(Vc,{children:e}),d.jsx(qc,{children:t})]},e))})}),d.jsxs(Qc,{children:[d.jsx(Rc,{children:"Types of Yoga"}),d.jsx(Oc,{children:"Types of Yoga I Offer"}),d.jsx(Nc,{children:"Yoga sessions are customised based on your body, goals and health conditions."}),d.jsx(Gc,{children:qd.map(e=>d.jsxs(Xc,{children:[d.jsx(Kc,{children:d.jsx(sa,{size:14,strokeWidth:1.9})}),d.jsx(Jc,{children:e})]},e))})]}),d.jsxs(Zc,{children:[d.jsxs(ed,{children:[d.jsx(Oc,{children:"Choose Your Wellness Path"}),d.jsx(Nc,{children:"Simple, transparent pricing — switch to quarterly and save more."}),d.jsxs(td,{children:[d.jsx(nd,{type:"button",$active:"monthly"===e,onClick:()=>t("monthly"),children:"Monthly"}),d.jsxs(nd,{type:"button",$active:"quarterly"===e,onClick:()=>t("quarterly"),children:["Quarterly",d.jsx(rd,{children:"Save 10%"})]})]})]}),d.jsx(id,{children:Qd.map(t=>{if("holistic"===t.id){const i=Gd.find(e=>e.sessions===n),a=i?.price||0,o=3*a,s=Math.round(.9*o),l="monthly"===e?a:s;return d.jsxs(ad,{$highlight:t.highlight,children:[d.jsx(od,{children:t.name}),d.jsxs(sd,{children:["quarterly"===e?d.jsxs(ld,{children:["₹",o.toLocaleString("en-IN")]}):null,d.jsxs(ud,{children:["₹",l.toLocaleString("en-IN"),d.jsx("span",{children:"monthly"===e?`${n} sessions`:`Total ${3*n} sessions`})]})]}),d.jsx(dd,{role:"radiogroup","aria-label":"Private session options",children:Gd.map(e=>d.jsxs(pd,{type:"button",role:"radio","aria-checked":n===e.sessions,$active:n===e.sessions,onClick:()=>r(e.sessions),children:[e.sessions," Sessions"]},e.sessions))}),d.jsx(hd,{children:d.jsx(za,{fullWidth:!0,size:"lg",onClick:()=>E(t),children:"Begin Your Journey"})}),d.jsx(fd,{children:t.features.map(e=>d.jsxs(md,{children:[d.jsx(gd,{children:d.jsx(Ji,{size:12,strokeWidth:2.4})}),d.jsx("span",{children:e})]},e))})]},t.id)}if("prenatal"===t.id){const n=Xd.find(e=>e.sessions===i),r=n?.price||0,o=3*r,s=Math.round(.9*o),l="monthly"===e?r:s;return d.jsxs(ad,{$highlight:t.highlight,children:[d.jsx(od,{children:t.name}),d.jsxs(sd,{children:["quarterly"===e?d.jsxs(ld,{children:["₹",o.toLocaleString("en-IN")]}):null,d.jsxs(ud,{children:["₹",l.toLocaleString("en-IN"),d.jsx("span",{children:"monthly"===e?`${i} sessions`:`Total ${3*i} sessions`})]})]}),d.jsx(dd,{role:"radiogroup","aria-label":"Prenatal session options",children:Xd.map(e=>d.jsxs(pd,{type:"button",role:"radio","aria-checked":i===e.sessions,$active:i===e.sessions,onClick:()=>a(e.sessions),children:[e.sessions," Sessions"]},e.sessions))}),d.jsx(hd,{children:d.jsx(za,{fullWidth:!0,size:"lg",onClick:()=>E(t),children:"Begin Your Journey"})}),d.jsx(fd,{children:t.features.map(e=>d.jsxs(md,{children:[d.jsx(gd,{children:d.jsx(Ji,{size:12,strokeWidth:2.4})}),d.jsx("span",{children:e})]},e))})]},t.id)}const o=t.monthly,s=3*o,l=Math.round(.9*s),u="monthly"===e?o:l,c=t.meta?.[e]??("monthly"===e?"per month":"per quarter");return d.jsxs(ad,{$highlight:t.highlight,children:[d.jsx(od,{children:t.name}),d.jsxs(sd,{children:["quarterly"===e?d.jsxs(ld,{children:["₹",s.toLocaleString("en-IN")]}):null,d.jsxs(ud,{children:["₹",u.toLocaleString("en-IN"),d.jsx("span",{children:"monthly"===e?"per month":"per quarter"})]})]}),d.jsx(cd,{children:c}),d.jsx(hd,{children:d.jsx(za,{fullWidth:!0,size:"lg",onClick:()=>E(t),children:"Begin Your Journey"})}),d.jsx(fd,{children:t.features.map(e=>d.jsxs(md,{children:[d.jsx(gd,{children:d.jsx(Ji,{size:12,strokeWidth:2.4})}),d.jsx("span",{children:e})]},e))})]},t.id)})})]}),d.jsxs(xd,{children:[d.jsx(yd,{children:d.jsx(Oc,{children:"Practice Gallery"})}),d.jsx(bd,{children:Si.yoga.gallery.map((e,t)=>d.jsx(vd,{children:d.jsx(wd,{src:e,alt:0===t?"Yoga practice in calm indoor space":1===t?"Woman practicing yoga mindfully":"Holistic yoga and wellness session",loading:"lazy",decoding:"async"})},e))})]}),d.jsxs(xd,{children:[d.jsxs(yd,{children:[d.jsx(Rc,{children:"Real Proof"}),d.jsx(Oc,{children:"Real Transformations"})]}),d.jsx(kd,{onTouchStart:e=>{const t=e.touches[0];v.current=t.clientX,w.current=t.clientY},onTouchEnd:e=>{if(null===v.current||null===w.current)return;const t=e.changedTouches[0],n=t.clientX-v.current,r=t.clientY-w.current;v.current=null,w.current=null,Math.abs(n)<42||Math.abs(n)<=Math.abs(r)||(n>0?$():P())},children:d.jsx(_d,{$index:l,children:Si.yoga.transformations.map((e,t)=>d.jsx(jd,{children:d.jsx(Sd,{children:d.jsx(Cd,{src:e,alt:0===t?"Yoga journey before transformation":1===t?"Yoga practice after transformation":"Mind body balance through yoga",loading:"lazy",decoding:"async"})})},e))})}),d.jsxs(zd,{children:[d.jsx(Ed,{type:"button",onClick:$,"aria-label":"Show previous transformation",children:d.jsx(Zi,{size:18})}),d.jsx($d,{children:Si.yoga.transformations.map((e,t)=>d.jsx(Pd,{type:"button",onClick:()=>u(t),"aria-label":`Show transformation ${t+1}`,$active:t===l},e))}),d.jsx(Ed,{type:"button",onClick:P,"aria-label":"Show next transformation",children:d.jsx(ea,{size:18})})]})]}),d.jsxs(xd,{children:[d.jsx(yd,{children:d.jsx(Oc,{children:"Client Stories"})}),d.jsx(Td,{children:d.jsx(Md,{$index:c,children:Si.yoga.videos.map(e=>d.jsx(Rd,{children:d.jsx(Od,{onTouchStart:R,onTouchEnd:O,children:d.jsxs(Nd,{controls:!0,playsInline:!0,preload:"metadata",poster:e.poster,"aria-label":e.alt,children:[d.jsx("source",{src:e.src,type:"video/mp4"}),"Your browser does not support the video tag."]})})},e.id))})}),d.jsxs(zd,{children:[d.jsx(Ed,{type:"button",onClick:T,"aria-label":"Show previous client story",children:d.jsx(Zi,{size:18})}),d.jsx($d,{children:Si.yoga.videos.map((e,t)=>d.jsx(Pd,{type:"button",onClick:()=>h(t),"aria-label":`Show client story ${t+1}`,$active:t===c},e.id))}),d.jsx(Ed,{type:"button",onClick:M,"aria-label":"Show next client story",children:d.jsx(ea,{size:18})})]})]}),d.jsxs(xd,{children:[d.jsx(yd,{children:d.jsx(Oc,{children:"Professional Certifications"})}),d.jsx(Ad,{children:d.jsx(Dd,{$index:f,children:Kd.map((e,t)=>d.jsx(Ld,{children:d.jsx(Id,{role:"button",tabIndex:0,onClick:e=>((e,t)=>{if(C.current)return C.current=!1,void e.preventDefault();D(t)})(e,t),onTouchStart:L,onTouchEnd:I,onKeyDown:e=>{"Enter"!==e.key&&" "!==e.key||(e.preventDefault(),D(t))},"aria-label":`Preview ${e.title}`,children:d.jsx(Fd,{children:d.jsx(Wd,{src:e.src,alt:e.alt,loading:"lazy",decoding:"async"})})})},e.src))})}),d.jsxs(zd,{children:[d.jsx(Ed,{type:"button",onClick:N,"aria-label":"Show previous certificate",children:d.jsx(Zi,{size:18})}),d.jsx($d,{children:Kd.map((e,t)=>d.jsx(Pd,{type:"button",onClick:()=>m(t),"aria-label":`Show certificate ${t+1}`,$active:t===f},e.src))}),d.jsx(Ed,{type:"button",onClick:A,"aria-label":"Show next certificate",children:d.jsx(ea,{size:18})})]})]}),d.jsxs(Bd,{children:[d.jsx(Ud,{children:"Ready to begin your yoga journey?"}),d.jsx(Yd,{children:"Start with a simple conversation and explore the support that feels right for you."}),d.jsxs(Hd,{children:[d.jsx(za,{size:"lg",onClick:()=>s(!0),children:"Book a Session"}),d.jsx(za,{href:ro(qa),target:"_blank",rel:"noopener noreferrer",variant:"outline",size:"lg",icon:d.jsx(ua,{size:18,strokeWidth:1.9}),children:"Chat on WhatsApp"})]})]})]})}),d.jsx(Ra,{isOpen:o,onClose:()=>s(!1),children:d.jsx(Ha,{onSelect:()=>s(!1)})}),d.jsx(Ra,{isOpen:null!==g,onClose:()=>{x(null),b(1)},children:null!==g?d.jsxs(d.Fragment,{children:[d.jsx(Oc,{as:"h2",children:Kd[g].title}),d.jsxs(zd,{children:[d.jsx(Ed,{type:"button",onClick:()=>{b(e=>Math.max(1,Number((e-.25).toFixed(2))))},"aria-label":"Zoom out certificate",children:d.jsx(ba,{size:18})}),d.jsxs(Nc,{children:["Zoom ",Math.round(100*y),"%"]}),d.jsx(Ed,{type:"button",onClick:()=>{b(e=>Math.min(3,Number((e+.25).toFixed(2))))},"aria-label":"Zoom in certificate",children:d.jsx(ya,{size:18})})]}),d.jsx(Ad,{children:d.jsx(Id,{children:d.jsx(Fd,{$preview:!0,onDoubleClick:()=>b(e=>e>1?1:2),children:d.jsx(Wd,{src:Kd[g].src,alt:Kd[g].alt,$zoom:y})})})})]}):null})]})};function Zd(){return d.jsx(Jd,{})}const ep=bn`
  background: linear-gradient(180deg, rgba(255, 255, 255, 0.96), rgba(251, 249, 243, 0.98));
  border: 1px solid rgba(122, 160, 143, 0.12);
  box-shadow: 0 20px 48px rgba(15, 60, 40, 0.08);
  border-radius: 28px;

  @media (max-width: 768px) {
    border-radius: 24px;
  }
`,tp=kn.div`
  width: 100%;
  overflow-x: hidden;
  padding: 0 0 82px;

  @media (min-width: 769px) {
    padding-bottom: 32px;
  }
`,np=kn.div`
  width: min(calc(100% - 20px), 1120px);
  margin: 0 auto;

  @media (max-width: 768px) {
    width: min(calc(100% - 18px), 430px);
  }
`,rp=kn.div`
  display: flex;
  flex-direction: column;
  gap: 18px;

  > * {
    scroll-margin-top: 80px;
  }

  @media (min-width: 769px) {
    gap: 24px;

    > * {
      scroll-margin-top: 112px;
    }
  }
`,ip=kn.section`
  ${ep};
  position: relative;
  overflow: hidden;
  padding: 18px;

  @media (min-width: 769px) {
    padding: 28px;
  }
`;kn.span`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  color: ${({theme:e})=>e.colors.textSecondary};
  font-size: 12px;
  font-weight: 700;
  letter-spacing: 0.12em;
  text-transform: uppercase;

  &::before,
  &::after {
    content: "✦";
    color: ${({theme:e})=>e.colors.warmAccent};
    font-size: 11px;
    line-height: 1;
  }
`;const ap=kn.h2`
  margin: 10px 0 0;
  color: ${({theme:e})=>e.colors.textPrimary};
  font-size: clamp(1.72rem, 6.4vw, 3rem);
  line-height: 1.08;
`,op=kn.p`
  margin: 14px 0 0;
  color: ${({theme:e})=>e.colors.textMuted};
  font-size: 14px;
  line-height: 1.64;

  @media (min-width: 769px) {
    font-size: 15px;
    line-height: 1.7;
  }
`,sp=kn.div`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  color: ${({theme:e})=>e.colors.warmAccent};
  margin: 14px 0 2px;

  &::before,
  &::after {
    content: "";
    display: block;
    width: 34px;
    height: 1.5px;
    background: currentColor;
  }

  span {
    font-size: 12px;
    line-height: 1;
  }
`,lp=kn.section`
  position: relative;
`,up=kn.div`
  ${ep};
  position: relative;
  overflow: hidden;
  border-radius: 0 0 24px 24px;
  background: #eef5ee;
  aspect-ratio: 4 / 5;
  min-height: 396px;

  @media (max-width: 420px) {
    min-height: 382px;
  }

  @media (min-width: 769px) {
    border-radius: 30px;
    aspect-ratio: 16 / 10;
    min-height: 540px;
  }
`,cp=kn.picture`
  display: block;
  width: 100%;
  height: 100%;
`,dp=kn.img`
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center 56%;

  @media (min-width: 769px) {
    object-position: center 52%;
  }
`,pp=kn.div`
  position: absolute;
  inset: 0;
  pointer-events: none;
  background:
    linear-gradient(180deg, rgba(255, 255, 255, 0.01) 0%, rgba(255, 252, 247, 0.08) 84%, rgba(255, 250, 244, 0.18) 100%),
    radial-gradient(circle at top center, rgba(255, 255, 255, 0.12), transparent 35%);
`,hp=kn(ip)`
  background:
    radial-gradient(circle at right top, rgba(229, 239, 229, 0.84), transparent 28%),
    linear-gradient(180deg, rgba(255, 255, 255, 0.96), rgba(248, 250, 244, 0.97));
  text-align: center;
`,fp=kn.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 12px;

  @media (min-width: 940px) {
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }
`,mp=kn(ip)`
  padding: 18px;
  box-shadow: 0 12px 28px rgba(15, 60, 40, 0.06);
  background:
    radial-gradient(circle at right top, rgba(226, 235, 224, 0.38), transparent 24%),
    linear-gradient(180deg, rgba(255, 255, 255, 0.98), rgba(249, 247, 241, 0.98));
`,gp=kn.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 12px;
`,xp=kn.span`
  width: 38px;
  height: 38px;
  border-radius: 14px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  background: ${({$warm:e})=>e?"rgba(217, 184, 137, 0.14)":"rgba(244, 250, 246, 0.98)"};
  color: ${({theme:e,$warm:t})=>t?e.colors.warmAccent:e.colors.primary};
  border: 1px solid
    ${({$warm:e})=>e?"rgba(217, 184, 137, 0.28)":"rgba(122, 160, 143, 0.16)"};
  flex-shrink: 0;
`,yp=kn.h3`
  margin: 0;
  color: ${({theme:e})=>e.colors.textPrimary};
  font-size: 1.06rem;
  line-height: 1.3;
`,bp=kn.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  align-self: flex-start;
  padding: 6px 10px;
  border-radius: 999px;
  background: rgba(217, 184, 137, 0.14);
  color: #8b6736;
  border: 1px solid rgba(217, 184, 137, 0.28);
  font-size: 11px;
  font-weight: 700;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  white-space: nowrap;
`,vp=kn.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-top: 16px;
`,wp=kn.div`
  display: grid;
  grid-template-columns: auto 1fr;
  gap: 10px;
  align-items: start;
  padding: 10px 12px;
  border-radius: 16px;
  background: rgba(249, 251, 247, 0.94);
  border: 1px solid rgba(122, 160, 143, 0.1);
  color: ${({theme:e})=>e.colors.textPrimary};
  font-size: 14px;
  line-height: 1.5;
`,kp=kn.span`
  width: 22px;
  height: 22px;
  border-radius: 50%;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  background: ${({$warm:e})=>e?"rgba(217, 184, 137, 0.14)":"rgba(244, 250, 246, 0.98)"};
  color: ${({theme:e,$warm:t})=>t?e.colors.warmAccent:e.colors.primary};
  border: 1px solid
    ${({$warm:e})=>e?"rgba(217, 184, 137, 0.28)":"rgba(122, 160, 143, 0.16)"};
  margin-top: 1px;
`,_p=kn.p`
  margin: 14px 0 0;
  color: ${({theme:e})=>e.colors.textMuted};
  font-size: 14px;
  line-height: 1.58;
`,jp=kn(ip)`
  background:
    radial-gradient(circle at left top, rgba(221, 234, 225, 0.58), transparent 24%),
    linear-gradient(180deg, rgba(255, 255, 255, 0.97), rgba(246, 250, 244, 0.97));
`,Sp=kn.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 10px;
  margin-top: 16px;

  @media (min-width: 700px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
`,Cp=kn.div`
  display: grid;
  grid-template-columns: auto 1fr;
  gap: 10px;
  align-items: center;
  padding: 14px 14px;
  border-radius: 18px;
  background: rgba(255, 255, 255, 0.92);
  border: 1px solid rgba(122, 160, 143, 0.1);
  box-shadow: 0 10px 22px rgba(15, 60, 40, 0.05);
  color: ${({theme:e})=>e.colors.textPrimary};
  font-size: 14px;
  line-height: 1.45;
`,zp=kn.span`
  width: 30px;
  height: 30px;
  border-radius: 12px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  background: rgba(244, 250, 246, 0.98);
  color: ${({theme:e})=>e.colors.primary};
  border: 1px solid rgba(122, 160, 143, 0.16);
`,Ep=kn(ip)`
  background:
    radial-gradient(circle at right top, rgba(221, 234, 225, 0.48), transparent 26%),
    linear-gradient(180deg, rgba(255, 255, 255, 0.97), rgba(247, 249, 243, 0.98));
`,$p=kn.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 12px;
  margin-top: 18px;

  @media (min-width: 900px) {
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }
`,Pp=kn.div`
  ${ep};
  padding: 16px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  box-shadow: 0 12px 28px rgba(15, 60, 40, 0.06);
  min-height: 142px;
`,Tp=kn.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 46px;
  height: 46px;
  border-radius: 16px;
  background: rgba(217, 184, 137, 0.14);
  border: 1px solid rgba(217, 184, 137, 0.28);
  color: #8b6736;
  font-size: 14px;
  font-weight: 700;
  letter-spacing: 0.08em;
`,Mp=kn.p`
  margin: 0;
  color: ${({theme:e})=>e.colors.textPrimary};
  font-size: 14px;
  line-height: 1.56;
`,Rp=kn(ip)`
  background:
    radial-gradient(circle at left bottom, rgba(201, 218, 189, 0.54), transparent 24%),
    radial-gradient(circle at right top, rgba(234, 226, 214, 0.42), transparent 28%),
    linear-gradient(180deg, rgba(237, 246, 241, 0.97), rgba(228, 238, 221, 0.97));
  text-align: center;
`,Op=kn.div`
  ${ep};
  max-width: 540px;
  margin: 18px auto 0;
  padding: 18px;
  box-shadow: 0 16px 30px rgba(15, 60, 40, 0.08);
`,Np=kn.h3`
  margin: 0;
  color: ${({theme:e})=>e.colors.textPrimary};
  font-size: 1.24rem;
  line-height: 1.3;
`,Ap=kn.p`
  margin: 10px 0 0;
  color: ${({theme:e})=>e.colors.textMuted};
  font-size: 13px;
  line-height: 1.45;
`,Dp=kn.div`
  margin-top: 14px;
  color: ${({theme:e})=>e.colors.textPrimary};
  font-size: 2.2rem;
  font-weight: 700;
  line-height: 1;

  span {
    font-size: 1rem;
    vertical-align: top;
    margin-right: 4px;
  }
`,Lp=kn.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-top: 18px;
  text-align: left;
`,Ip=kn.div`
  display: grid;
  grid-template-columns: auto 1fr;
  gap: 10px;
  align-items: start;
  padding: 11px 12px;
  border-radius: 16px;
  background: rgba(249, 251, 247, 0.92);
  border: 1px solid rgba(122, 160, 143, 0.1);
  color: ${({theme:e})=>e.colors.textPrimary};
  font-size: 14px;
  line-height: 1.5;
`,Fp=kn.div`
  margin-top: 16px;

  > * {
    width: 100%;
  }
`,Wp=kn(ip)`
  background:
    radial-gradient(circle at right top, rgba(234, 226, 214, 0.32), transparent 26%),
    linear-gradient(180deg, rgba(255, 255, 255, 0.98), rgba(248, 247, 242, 0.98));
  padding-bottom: 26px;
`,Bp=kn.span`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 7px 12px;
  border-radius: 999px;
  background: rgba(217, 184, 137, 0.14);
  color: #8b6736;
  border: 1px solid rgba(217, 184, 137, 0.28);
  font-size: 11px;
  font-weight: 700;
  letter-spacing: 0.1em;
  text-transform: uppercase;
`,Up=kn.p`
  margin: 14px 0 0;
  color: ${({theme:e})=>e.colors.textMuted};
  font-size: 13px;
  line-height: 1.62;

  @media (min-width: 769px) {
    font-size: 14px;
  }
`,Yp=[{title:"Ayurvedic Assessment",icon:sa,items:["Prakriti (body constitution) & Vikriti (current imbalance) understanding","Dosha evaluation: Vata, Pitta & Kapha","Basic review of digestion, routine & stress patterns"]},{title:"Dosha-Based Diet & Lifestyle Guidance",icon:fa,items:["Simple food suggestions according to dosha tendencies","Daily routine (Dinacharya) guidance for better digestion, sleep & energy","Practical, easy-to-follow habits"]},{title:"Ayurvedic Therapies",icon:na,items:["Abhyanga","Potli Abhyanga","Shirodhara","Panchakarma awareness & guidance (referral where appropriate)"],note:"In-person Ayurvedic therapies will be introduced soon, including:",comingSoon:!0}],Hp=["Digestive discomfort & lifestyle-related issues","Stress, anxiety & disturbed sleep","Hormonal imbalance support (PCOS, menstrual health)","Fatigue, stiffness & general wellbeing","Preventive care & holistic balance"],Vp=["One-on-one personalised consultation","Clear explanation in simple language","Gentle, sustainable recommendations"],qp=()=>{const e=Si.ayurveda.heroWatercolor;return d.jsx(tp,{children:d.jsx(np,{children:d.jsxs(rp,{children:[d.jsx(lp,{children:d.jsxs(up,{children:[d.jsxs(cp,{children:[d.jsx("source",{media:"(min-width: 768px)",srcSet:e.desktop}),d.jsx(dp,{src:e.mobile,alt:e.alt,loading:"eager",decoding:"async"})]}),d.jsx(pp,{})]})}),d.jsxs(hp,{children:[d.jsx(ap,{children:"Ayurveda for Natural Balance"}),d.jsx(sp,{children:d.jsx("span",{children:"✦"})}),d.jsx(op,{children:"Ayurveda helps you understand your body's unique constitution and lifestyle patterns to restore balance in a gentle and sustainable way."})]}),d.jsxs(ip,{children:[d.jsx(ap,{children:"What This Includes"}),d.jsx(fp,{children:Yp.map(({title:e,icon:t,items:n,note:r,comingSoon:i})=>d.jsxs(mp,{children:[d.jsxs(gp,{children:[d.jsx(xp,{$warm:i,children:d.jsx(t,{size:18,strokeWidth:1.9})}),i?d.jsx(bp,{children:"Coming Soon"}):null]}),d.jsx(yp,{children:e}),r?d.jsx(_p,{children:r}):null,d.jsx(vp,{children:n.map(e=>d.jsxs(wp,{children:[d.jsx(kp,{$warm:i,children:d.jsx(Ji,{size:12,strokeWidth:2.6})}),d.jsx("span",{children:e})]},e))})]},e))})]}),d.jsxs(jp,{children:[d.jsx(ap,{children:"Who It's For"}),d.jsx(Sp,{children:Hp.map(e=>d.jsxs(Cp,{children:[d.jsx(zp,{children:d.jsx(Ji,{size:15,strokeWidth:2.4})}),d.jsx("span",{children:e})]},e))})]}),d.jsxs(Ep,{id:"consultation-approach",children:[d.jsx(ap,{children:"The Consultation Approach"}),d.jsx($p,{children:Vp.map((e,t)=>d.jsxs(Pp,{children:[d.jsx(Tp,{children:String(t+1).padStart(2,"0")}),d.jsx(Mp,{children:e})]},e))})]}),d.jsxs(Rp,{id:"ayurveda-discovery",children:[d.jsx(ap,{children:"Book a Discovery Call"}),d.jsx(op,{children:"Not sure where to begin? Start with a short call to understand what you need."}),d.jsxs(Op,{children:[d.jsx(Np,{children:"Ayurveda Discovery Call"}),d.jsx(Ap,{children:"20 Minutes • Online via Zoom/WhatsApp"}),d.jsxs(Dp,{children:[d.jsx("span",{children:"₹"}),"300"]}),d.jsxs(Lp,{children:[d.jsxs(Ip,{children:[d.jsx(kp,{$warm:!0,children:d.jsx(Ji,{size:12,strokeWidth:2.6})}),d.jsx("span",{children:"Brief dosha & lifestyle overview"})]}),d.jsxs(Ip,{children:[d.jsx(kp,{$warm:!0,children:d.jsx(Ji,{size:12,strokeWidth:2.6})}),d.jsx("span",{children:"Clarity on your main concerns"})]}),d.jsxs(Ip,{children:[d.jsx(kp,{$warm:!0,children:d.jsx(Ji,{size:12,strokeWidth:2.6})}),d.jsx("span",{children:"Recommendations on next best steps"})]})]}),d.jsx(Fp,{children:d.jsx(za,{href:ro(Ga),target:"_blank",rel:"noopener noreferrer",fullWidth:!0,size:"lg",children:"Book My Ayurveda Discovery Call"})})]})]}),d.jsxs(Wp,{children:[d.jsx(Bp,{children:"Disclaimer"}),d.jsx(Up,{children:"Ayurvedic consultations and therapies are offered as supportive wellness practices and do not replace medical diagnosis or treatment. Panchakarma procedures are advised or referred only where clinically appropriate."})]})]})})})};function Qp(){return d.jsx(qp,{})}const Gp=()=>{const{pathname:e}=Cr();return p.useEffect(()=>{window.scrollTo(0,0)},[e]),null};function Xp(){return d.jsxs(d.Fragment,{children:[d.jsx(Gp,{}),d.jsxs(Hr,{children:[d.jsx(Ur,{path:"/",element:d.jsx(Ns,{})}),d.jsx(Ur,{path:"/about",element:d.jsx(Fl,{})}),d.jsx(Ur,{path:"/yoga",element:d.jsx(Zd,{})}),d.jsx(Ur,{path:"/ayurveda",element:d.jsx(Qp,{})}),d.jsx(Ur,{path:"/nutrition",element:d.jsx(zc,{})}),d.jsx(Ur,{path:"/contact",element:d.jsx(Wu,{})}),d.jsx(Ur,{path:"*",element:d.jsx(Br,{to:"/",replace:!0})})]})]})}function Kp(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function Jp(e,t){e.prototype=Object.create(t.prototype),e.prototype.constructor=e,e.__proto__=t}var Zp,eh,th,nh,rh,ih,ah,oh,sh,lh,uh,ch,dh,ph,hh,fh,mh,gh,xh,yh,bh,vh,wh,kh,_h,jh,Sh,Ch,zh,Eh,$h,Ph,Th={autoSleep:120,force3D:"auto",nullTargetWarn:1,units:{lineHeight:""}},Mh={duration:.5,overwrite:!1,delay:0},Rh=1e8,Oh=1e-8,Nh=2*Math.PI,Ah=Nh/4,Dh=0,Lh=Math.sqrt,Ih=Math.cos,Fh=Math.sin,Wh=function(e){return"string"==typeof e},Bh=function(e){return"function"==typeof e},Uh=function(e){return"number"==typeof e},Yh=function(e){return void 0===e},Hh=function(e){return"object"==typeof e},Vh=function(e){return!1!==e},qh=function(){return"undefined"!=typeof window},Qh=function(e){return Bh(e)||Wh(e)},Gh="function"==typeof ArrayBuffer&&ArrayBuffer.isView||function(){},Xh=Array.isArray,Kh=/random\([^)]+\)/g,Jh=/,\s*/g,Zh=/(?:-?\.?\d|\.)+/gi,ef=/[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,tf=/[-+=.]*\d+[.e-]*\d*[a-z%]*/g,nf=/[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,rf=/[+-]=-?[.\d]+/,af=/[^,'"\[\]\s]+/gi,of=/^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,sf={},lf={},uf=function(e){return(lf=If(e,sf))&&Ig},cf=function(e,t){return console.warn("Invalid property",e,"set to",t,"Missing plugin? gsap.registerPlugin()")},df=function(e,t){return!t&&console.warn(e)},pf=function(e,t){return e&&(sf[e]=t)&&lf&&(lf[e]=t)||sf},hf=function(){return 0},ff={suppressEvents:!0,isStart:!0,kill:!1},mf={suppressEvents:!0,kill:!1},gf={suppressEvents:!0},xf={},yf=[],bf={},vf={},wf={},kf=30,_f=[],jf="",Sf=function(e){var t,n,r=e[0];if(Hh(r)||Bh(r)||(e=[e]),!(t=(r._gsap||{}).harness)){for(n=_f.length;n--&&!_f[n].targetTest(r););t=_f[n]}for(n=e.length;n--;)e[n]&&(e[n]._gsap||(e[n]._gsap=new Zm(e[n],t)))||e.splice(n,1);return e},Cf=function(e){return e._gsap||Sf(gm(e))[0]._gsap},zf=function(e,t,n){return(n=e[t])&&Bh(n)?e[t]():Yh(n)&&e.getAttribute&&e.getAttribute(t)||n},Ef=function(e,t){return(e=e.split(",")).forEach(t)||e},$f=function(e){return Math.round(1e5*e)/1e5||0},Pf=function(e){return Math.round(1e7*e)/1e7||0},Tf=function(e,t){var n=t.charAt(0),r=parseFloat(t.substr(2));return e=parseFloat(e),"+"===n?e+r:"-"===n?e-r:"*"===n?e*r:e/r},Mf=function(e,t){for(var n=t.length,r=0;e.indexOf(t[r])<0&&++r<n;);return r<n},Rf=function(){var e,t,n=yf.length,r=yf.slice(0);for(bf={},yf.length=0,e=0;e<n;e++)(t=r[e])&&t._lazy&&(t.render(t._lazy[0],t._lazy[1],!0)._lazy=0)},Of=function(e){return!!(e._initted||e._startAt||e.add)},Nf=function(e,t,n,r){yf.length&&!eh&&Rf(),e.render(t,n,!!(eh&&t<0&&Of(e))),yf.length&&!eh&&Rf()},Af=function(e){var t=parseFloat(e);return(t||0===t)&&(e+"").match(af).length<2?t:Wh(e)?e.trim():e},Df=function(e){return e},Lf=function(e,t){for(var n in t)n in e||(e[n]=t[n]);return e},If=function(e,t){for(var n in t)e[n]=t[n];return e},Ff=function e(t,n){for(var r in n)"__proto__"!==r&&"constructor"!==r&&"prototype"!==r&&(t[r]=Hh(n[r])?e(t[r]||(t[r]={}),n[r]):n[r]);return t},Wf=function(e,t){var n,r={};for(n in e)n in t||(r[n]=e[n]);return r},Bf=function(e){var t,n=e.parent||nh,r=e.keyframes?(t=Xh(e.keyframes),function(e,n){for(var r in n)r in e||"duration"===r&&t||"ease"===r||(e[r]=n[r])}):Lf;if(Vh(e.inherit))for(;n;)r(e,n.vars.defaults),n=n.parent||n._dp;return e},Uf=function(e,t,n,r,i){var a,o=e[r];if(i)for(a=t[i];o&&o[i]>a;)o=o._prev;return o?(t._next=o._next,o._next=t):(t._next=e[n],e[n]=t),t._next?t._next._prev=t:e[r]=t,t._prev=o,t.parent=t._dp=e,t},Yf=function(e,t,n,r){void 0===n&&(n="_first"),void 0===r&&(r="_last");var i=t._prev,a=t._next;i?i._next=a:e[n]===t&&(e[n]=a),a?a._prev=i:e[r]===t&&(e[r]=i),t._next=t._prev=t.parent=null},Hf=function(e,t){e.parent&&(!t||e.parent.autoRemoveChildren)&&e.parent.remove&&e.parent.remove(e),e._act=0},Vf=function(e,t){if(e&&(!t||t._end>e._dur||t._start<0))for(var n=e;n;)n._dirty=1,n=n.parent;return e},qf=function(e,t,n,r){return e._startAt&&(eh?e._startAt.revert(mf):e.vars.immediateRender&&!e.vars.autoRevert||e._startAt.render(t,!0,r))},Qf=function e(t){return!t||t._ts&&e(t.parent)},Gf=function(e){return e._repeat?Xf(e._tTime,e=e.duration()+e._rDelay)*e:0},Xf=function(e,t){var n=Math.floor(e=Pf(e/t));return e&&n===e?n-1:n},Kf=function(e,t){return(e-t._start)*t._ts+(t._ts>=0?0:t._dirty?t.totalDuration():t._tDur)},Jf=function(e){return e._end=Pf(e._start+(e._tDur/Math.abs(e._ts||e._rts||Oh)||0))},Zf=function(e,t){var n=e._dp;return n&&n.smoothChildTiming&&e._ts&&(e._start=Pf(n._time-(e._ts>0?t/e._ts:((e._dirty?e.totalDuration():e._tDur)-t)/-e._ts)),Jf(e),n._dirty||Vf(n,e)),e},em=function(e,t){var n;if((t._time||!t._dur&&t._initted||t._start<e._time&&(t._dur||!t.add))&&(n=Kf(e.rawTime(),t),(!t._dur||pm(0,t.totalDuration(),n)-t._tTime>Oh)&&t.render(n,!0)),Vf(e,t)._dp&&e._initted&&e._time>=e._dur&&e._ts){if(e._dur<e.duration())for(n=e;n._dp;)n.rawTime()>=0&&n.totalTime(n._tTime),n=n._dp;e._zTime=-1e-8}},tm=function(e,t,n,r){return t.parent&&Hf(t),t._start=Pf((Uh(n)?n:n||e!==nh?um(e,n,t):e._time)+t._delay),t._end=Pf(t._start+(t.totalDuration()/Math.abs(t.timeScale())||0)),Uf(e,t,"_first","_last",e._sort?"_start":0),am(t)||(e._recent=t),r||em(e,t),e._ts<0&&Zf(e,e._tTime),e},nm=function(e,t){return(sf.ScrollTrigger||cf("scrollTrigger",t))&&sf.ScrollTrigger.create(t,e)},rm=function(e,t,n,r,i){return sg(e,t,i),e._initted?!n&&e._pt&&!eh&&(e._dur&&!1!==e.vars.lazy||!e._dur&&e.vars.lazy)&&sh!==Fm.frame?(yf.push(e),e._lazy=[i,r],1):void 0:1},im=function e(t){var n=t.parent;return n&&n._ts&&n._initted&&!n._lock&&(n.rawTime()<0||e(n))},am=function(e){var t=e.data;return"isFromStart"===t||"isStart"===t},om=function(e,t,n,r){var i=e._repeat,a=Pf(t)||0,o=e._tTime/e._tDur;return o&&!r&&(e._time*=a/e._dur),e._dur=a,e._tDur=i?i<0?1e10:Pf(a*(i+1)+e._rDelay*i):a,o>0&&!r&&Zf(e,e._tTime=e._tDur*o),e.parent&&Jf(e),n||Vf(e.parent,e),e},sm=function(e){return e instanceof tg?Vf(e):om(e,e._dur)},lm={_start:0,endTime:hf,totalDuration:hf},um=function e(t,n,r){var i,a,o,s=t.labels,l=t._recent||lm,u=t.duration()>=Rh?l.endTime(!1):t._dur;return Wh(n)&&(isNaN(n)||n in s)?(a=n.charAt(0),o="%"===n.substr(-1),i=n.indexOf("="),"<"===a||">"===a?(i>=0&&(n=n.replace(/=/,"")),("<"===a?l._start:l.endTime(l._repeat>=0))+(parseFloat(n.substr(1))||0)*(o?(i<0?l:r).totalDuration()/100:1)):i<0?(n in s||(s[n]=u),s[n]):(a=parseFloat(n.charAt(i-1)+n.substr(i+1)),o&&r&&(a=a/100*(Xh(r)?r[0]:r).totalDuration()),i>1?e(t,n.substr(0,i-1),r)+a:u+a)):null==n?u:+n},cm=function(e,t,n){var r,i,a=Uh(t[1]),o=(a?2:1)+(e<2?0:1),s=t[o];if(a&&(s.duration=t[1]),s.parent=n,e){for(r=s,i=n;i&&!("immediateRender"in r);)r=i.vars.defaults||{},i=Vh(i.vars.inherit)&&i.parent;s.immediateRender=Vh(r.immediateRender),e<2?s.runBackwards=1:s.startAt=t[o-1]}return new pg(t[0],s,t[o+1])},dm=function(e,t){return e||0===e?t(e):t},pm=function(e,t,n){return n<e?e:n>t?t:n},hm=function(e,t){return Wh(e)&&(t=of.exec(e))?t[1]:""},fm=[].slice,mm=function(e,t){return e&&Hh(e)&&"length"in e&&(!t&&!e.length||e.length-1 in e&&Hh(e[0]))&&!e.nodeType&&e!==rh},gm=function(e,t,n){return th&&!t&&th.selector?th.selector(e):!Wh(e)||n||!ih&&Wm()?Xh(e)?function(e,t,n){return void 0===n&&(n=[]),e.forEach(function(e){var r;return Wh(e)&&!t||mm(e,1)?(r=n).push.apply(r,gm(e)):n.push(e)})||n}(e,n):mm(e)?fm.call(e,0):e?[e]:[]:fm.call((t||ah).querySelectorAll(e),0)},xm=function(e){return e=gm(e)[0]||df("Invalid scope")||{},function(t){var n=e.current||e.nativeElement||e;return gm(t,n.querySelectorAll?n:n===e?df("Invalid scope")||ah.createElement("div"):e)}},ym=function(e){return e.sort(function(){return.5-Math.random()})},bm=function(e){if(Bh(e))return e;var t=Hh(e)?e:{each:e},n=Qm(t.ease),r=t.from||0,i=parseFloat(t.base)||0,a={},o=r>0&&r<1,s=isNaN(r)||o,l=t.axis,u=r,c=r;return Wh(r)?u=c={center:.5,edges:.5,end:1}[r]||0:!o&&s&&(u=r[0],c=r[1]),function(e,o,d){var p,h,f,m,g,x,y,b,v,w=(d||t).length,k=a[w];if(!k){if(!(v="auto"===t.grid?0:(t.grid||[1,Rh])[1])){for(y=-1e8;y<(y=d[v++].getBoundingClientRect().left)&&v<w;);v<w&&v--}for(k=a[w]=[],p=s?Math.min(v,w)*u-.5:r%v,h=v===Rh?0:s?w*c/v-.5:r/v|0,y=0,b=Rh,x=0;x<w;x++)f=x%v-p,m=h-(x/v|0),k[x]=g=l?Math.abs("y"===l?m:f):Lh(f*f+m*m),g>y&&(y=g),g<b&&(b=g);"random"===r&&ym(k),k.max=y-b,k.min=b,k.v=w=(parseFloat(t.amount)||parseFloat(t.each)*(v>w?w-1:l?"y"===l?w/v:v:Math.max(v,w/v))||0)*("edges"===r?-1:1),k.b=w<0?i-w:i,k.u=hm(t.amount||t.each)||0,n=n&&w<0?Vm(n):n}return w=(k[e]-k.min)/k.max||0,Pf(k.b+(n?n(w):w)*k.v)+k.u}},vm=function(e){var t=Math.pow(10,((e+"").split(".")[1]||"").length);return function(n){var r=Pf(Math.round(parseFloat(n)/e)*e*t);return(r-r%1)/t+(Uh(n)?0:hm(n))}},wm=function(e,t){var n,r,i=Xh(e);return!i&&Hh(e)&&(n=i=e.radius||Rh,e.values?(e=gm(e.values),(r=!Uh(e[0]))&&(n*=n)):e=vm(e.increment)),dm(t,i?Bh(e)?function(t){return r=e(t),Math.abs(r-t)<=n?r:t}:function(t){for(var i,a,o=parseFloat(r?t.x:t),s=parseFloat(r?t.y:0),l=Rh,u=0,c=e.length;c--;)(i=r?(i=e[c].x-o)*i+(a=e[c].y-s)*a:Math.abs(e[c]-o))<l&&(l=i,u=c);return u=!n||l<=n?e[u]:t,r||u===t||Uh(t)?u:u+hm(t)}:vm(e))},km=function(e,t,n,r){return dm(Xh(e)?!t:!0===n?!!(n=0):!r,function(){return Xh(e)?e[~~(Math.random()*e.length)]:(n=n||1e-5)&&(r=n<1?Math.pow(10,(n+"").length-2):1)&&Math.floor(Math.round((e-n/2+Math.random()*(t-e+.99*n))/n)*n*r)/r})},_m=function(e,t,n){return dm(n,function(n){return e[~~t(n)]})},jm=function(e){return e.replace(Kh,function(e){var t=e.indexOf("[")+1,n=e.substring(t||7,t?e.indexOf("]"):e.length-1).split(Jh);return km(t?n:+n[0],t?0:+n[1],+n[2]||1e-5)})},Sm=function(e,t,n,r,i){var a=t-e,o=r-n;return dm(i,function(t){return n+((t-e)/a*o||0)})},Cm=function(e,t,n){var r,i,a,o=e.labels,s=Rh;for(r in o)(i=o[r]-t)<0==!!n&&i&&s>(i=Math.abs(i))&&(a=r,s=i);return a},zm=function(e,t,n){var r,i,a,o=e.vars,s=o[t],l=th,u=e._ctx;if(s)return r=o[t+"Params"],i=o.callbackScope||e,n&&yf.length&&Rf(),u&&(th=u),a=r?s.apply(i,r):s.call(i),th=l,a},Em=function(e){return Hf(e),e.scrollTrigger&&e.scrollTrigger.kill(!!eh),e.progress()<1&&zm(e,"onInterrupt"),e},$m=[],Pm=function(e){if(e)if(e=!e.name&&e.default||e,qh()||e.headless){var t=e.name,n=Bh(e),r=t&&!n&&e.init?function(){this._props=[]}:e,i={init:hf,render:wg,add:ag,kill:_g,modifier:kg,rawVars:0},a={targetTest:0,get:0,getSetter:xg,aliases:{},register:0};if(Wm(),e!==r){if(vf[t])return;Lf(r,Lf(Wf(e,i),a)),If(r.prototype,If(i,Wf(e,a))),vf[r.prop=t]=r,e.targetTest&&(_f.push(r),xf[t]=1),t=("css"===t?"CSS":t.charAt(0).toUpperCase()+t.substr(1))+"Plugin"}pf(t,r),e.register&&e.register(Ig,r,Cg)}else $m.push(e)},Tm=255,Mm={aqua:[0,Tm,Tm],lime:[0,Tm,0],silver:[192,192,192],black:[0,0,0],maroon:[128,0,0],teal:[0,128,128],blue:[0,0,Tm],navy:[0,0,128],white:[Tm,Tm,Tm],olive:[128,128,0],yellow:[Tm,Tm,0],orange:[Tm,165,0],gray:[128,128,128],purple:[128,0,128],green:[0,128,0],red:[Tm,0,0],pink:[Tm,192,203],cyan:[0,Tm,Tm],transparent:[Tm,Tm,Tm,0]},Rm=function(e,t,n){return(6*(e+=e<0?1:e>1?-1:0)<1?t+(n-t)*e*6:e<.5?n:3*e<2?t+(n-t)*(2/3-e)*6:t)*Tm+.5|0},Om=function(e,t,n){var r,i,a,o,s,l,u,c,d,p,h=e?Uh(e)?[e>>16,e>>8&Tm,e&Tm]:0:Mm.black;if(!h){if(","===e.substr(-1)&&(e=e.substr(0,e.length-1)),Mm[e])h=Mm[e];else if("#"===e.charAt(0)){if(e.length<6&&(r=e.charAt(1),i=e.charAt(2),a=e.charAt(3),e="#"+r+r+i+i+a+a+(5===e.length?e.charAt(4)+e.charAt(4):"")),9===e.length)return[(h=parseInt(e.substr(1,6),16))>>16,h>>8&Tm,h&Tm,parseInt(e.substr(7),16)/255];h=[(e=parseInt(e.substr(1),16))>>16,e>>8&Tm,e&Tm]}else if("hsl"===e.substr(0,3))if(h=p=e.match(Zh),t){if(~e.indexOf("="))return h=e.match(ef),n&&h.length<4&&(h[3]=1),h}else o=+h[0]%360/360,s=+h[1]/100,r=2*(l=+h[2]/100)-(i=l<=.5?l*(s+1):l+s-l*s),h.length>3&&(h[3]*=1),h[0]=Rm(o+1/3,r,i),h[1]=Rm(o,r,i),h[2]=Rm(o-1/3,r,i);else h=e.match(Zh)||Mm.transparent;h=h.map(Number)}return t&&!p&&(r=h[0]/Tm,i=h[1]/Tm,a=h[2]/Tm,l=((u=Math.max(r,i,a))+(c=Math.min(r,i,a)))/2,u===c?o=s=0:(d=u-c,s=l>.5?d/(2-u-c):d/(u+c),o=u===r?(i-a)/d+(i<a?6:0):u===i?(a-r)/d+2:(r-i)/d+4,o*=60),h[0]=~~(o+.5),h[1]=~~(100*s+.5),h[2]=~~(100*l+.5)),n&&h.length<4&&(h[3]=1),h},Nm=function(e){var t=[],n=[],r=-1;return e.split(Dm).forEach(function(e){var i=e.match(tf)||[];t.push.apply(t,i),n.push(r+=i.length+1)}),t.c=n,t},Am=function(e,t,n){var r,i,a,o,s="",l=(e+s).match(Dm),u=t?"hsla(":"rgba(",c=0;if(!l)return e;if(l=l.map(function(e){return(e=Om(e,t,1))&&u+(t?e[0]+","+e[1]+"%,"+e[2]+"%,"+e[3]:e.join(","))+")"}),n&&(a=Nm(e),(r=n.c).join(s)!==a.c.join(s)))for(o=(i=e.replace(Dm,"1").split(tf)).length-1;c<o;c++)s+=i[c]+(~r.indexOf(c)?l.shift()||u+"0,0,0,0)":(a.length?a:l.length?l:n).shift());if(!i)for(o=(i=e.split(Dm)).length-1;c<o;c++)s+=i[c]+l[c];return s+i[o]},Dm=function(){var e,t="(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b";for(e in Mm)t+="|"+e+"\\b";return new RegExp(t+")","gi")}(),Lm=/hsl[a]?\(/,Im=function(e){var t,n=e.join(" ");if(Dm.lastIndex=0,Dm.test(n))return t=Lm.test(n),e[1]=Am(e[1],t),e[0]=Am(e[0],t,Nm(e[1])),!0},Fm=(gh=Date.now,xh=500,yh=33,bh=gh(),vh=bh,kh=wh=1e3/240,jh=function e(t){var n,r,i,a,o=gh()-vh,s=!0===t;if((o>xh||o<0)&&(bh+=o-yh),((n=(i=(vh+=o)-bh)-kh)>0||s)&&(a=++hh.frame,fh=i-1e3*hh.time,hh.time=i/=1e3,kh+=n+(n>=wh?4:wh-n),r=1),s||(ch=dh(e)),r)for(mh=0;mh<_h.length;mh++)_h[mh](i,fh,a,t)},hh={time:0,frame:0,tick:function(){jh(!0)},deltaRatio:function(e){return fh/(1e3/(e||60))},wake:function(){oh&&(!ih&&qh()&&(rh=ih=window,ah=rh.document||{},sf.gsap=Ig,(rh.gsapVersions||(rh.gsapVersions=[])).push(Ig.version),uf(lf||rh.GreenSockGlobals||!rh.gsap&&rh||{}),$m.forEach(Pm)),ph="undefined"!=typeof requestAnimationFrame&&requestAnimationFrame,ch&&hh.sleep(),dh=ph||function(e){return setTimeout(e,kh-1e3*hh.time+1|0)},uh=1,jh(2))},sleep:function(){(ph?cancelAnimationFrame:clearTimeout)(ch),uh=0,dh=hf},lagSmoothing:function(e,t){xh=e||1/0,yh=Math.min(t||33,xh)},fps:function(e){wh=1e3/(e||240),kh=1e3*hh.time+wh},add:function(e,t,n){var r=t?function(t,n,i,a){e(t,n,i,a),hh.remove(r)}:e;return hh.remove(e),_h[n?"unshift":"push"](r),Wm(),r},remove:function(e,t){~(t=_h.indexOf(e))&&_h.splice(t,1)&&mh>=t&&mh--},_listeners:_h=[]}),Wm=function(){return!uh&&Fm.wake()},Bm={},Um=/^[\d.\-M][\d.\-,\s]/,Ym=/["']/g,Hm=function(e){for(var t,n,r,i={},a=e.substr(1,e.length-3).split(":"),o=a[0],s=1,l=a.length;s<l;s++)n=a[s],t=s!==l-1?n.lastIndexOf(","):n.length,r=n.substr(0,t),i[o]=isNaN(r)?r.replace(Ym,"").trim():+r,o=n.substr(t+1).trim();return i},Vm=function(e){return function(t){return 1-e(1-t)}},qm=function e(t,n){for(var r,i=t._first;i;)i instanceof tg?e(i,n):!i.vars.yoyoEase||i._yoyo&&i._repeat||i._yoyo===n||(i.timeline?e(i.timeline,n):(r=i._ease,i._ease=i._yEase,i._yEase=r,i._yoyo=n)),i=i._next},Qm=function(e,t){return e&&(Bh(e)?e:Bm[e]||function(e){var t,n,r,i,a=(e+"").split("("),o=Bm[a[0]];return o&&a.length>1&&o.config?o.config.apply(null,~e.indexOf("{")?[Hm(a[1])]:(t=e,n=t.indexOf("(")+1,r=t.indexOf(")"),i=t.indexOf("(",n),t.substring(n,~i&&i<r?t.indexOf(")",r+1):r)).split(",").map(Af)):Bm._CE&&Um.test(e)?Bm._CE("",e):o}(e))||t},Gm=function(e,t,n,r){void 0===n&&(n=function(e){return 1-t(1-e)}),void 0===r&&(r=function(e){return e<.5?t(2*e)/2:1-t(2*(1-e))/2});var i,a={easeIn:t,easeOut:n,easeInOut:r};return Ef(e,function(e){for(var t in Bm[e]=sf[e]=a,Bm[i=e.toLowerCase()]=n,a)Bm[i+("easeIn"===t?".in":"easeOut"===t?".out":".inOut")]=Bm[e+"."+t]=a[t]}),a},Xm=function(e){return function(t){return t<.5?(1-e(1-2*t))/2:.5+e(2*(t-.5))/2}},Km=function e(t,n,r){var i=n>=1?n:1,a=(r||(t?.3:.45))/(n<1?n:1),o=a/Nh*(Math.asin(1/i)||0),s=function(e){return 1===e?1:i*Math.pow(2,-10*e)*Fh((e-o)*a)+1},l="out"===t?s:"in"===t?function(e){return 1-s(1-e)}:Xm(s);return a=Nh/a,l.config=function(n,r){return e(t,n,r)},l},Jm=function e(t,n){void 0===n&&(n=1.70158);var r=function(e){return e?--e*e*((n+1)*e+n)+1:0},i="out"===t?r:"in"===t?function(e){return 1-r(1-e)}:Xm(r);return i.config=function(n){return e(t,n)},i};Ef("Linear,Quad,Cubic,Quart,Quint,Strong",function(e,t){var n=t<5?t+1:t;Gm(e+",Power"+(n-1),t?function(e){return Math.pow(e,n)}:function(e){return e},function(e){return 1-Math.pow(1-e,n)},function(e){return e<.5?Math.pow(2*e,n)/2:1-Math.pow(2*(1-e),n)/2})}),Bm.Linear.easeNone=Bm.none=Bm.Linear.easeIn,Gm("Elastic",Km("in"),Km("out"),Km()),Sh=7.5625,Eh=2*(zh=1/(Ch=2.75)),$h=2.5*zh,Gm("Bounce",function(e){return 1-Ph(1-e)},Ph=function(e){return e<zh?Sh*e*e:e<Eh?Sh*Math.pow(e-1.5/Ch,2)+.75:e<$h?Sh*(e-=2.25/Ch)*e+.9375:Sh*Math.pow(e-2.625/Ch,2)+.984375}),Gm("Expo",function(e){return Math.pow(2,10*(e-1))*e+e*e*e*e*e*e*(1-e)}),Gm("Circ",function(e){return-(Lh(1-e*e)-1)}),Gm("Sine",function(e){return 1===e?1:1-Ih(e*Ah)}),Gm("Back",Jm("in"),Jm("out"),Jm()),Bm.SteppedEase=Bm.steps=sf.SteppedEase={config:function(e,t){void 0===e&&(e=1);var n=1/e,r=e+(t?0:1),i=t?1:0;return function(e){return((r*pm(0,.99999999,e)|0)+i)*n}}},Mh.ease=Bm["quad.out"],Ef("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt",function(e){return jf+=e+","+e+"Params,"});var Zm=function(e,t){this.id=Dh++,e._gsap=this,this.target=e,this.harness=t,this.get=t?t.get:zf,this.set=t?t.getSetter:xg},eg=function(){function e(e){this.vars=e,this._delay=+e.delay||0,(this._repeat=e.repeat===1/0?-2:e.repeat||0)&&(this._rDelay=e.repeatDelay||0,this._yoyo=!!e.yoyo||!!e.yoyoEase),this._ts=1,om(this,+e.duration,1,1),this.data=e.data,th&&(this._ctx=th,th.data.push(this)),uh||Fm.wake()}var t=e.prototype;return t.delay=function(e){return e||0===e?(this.parent&&this.parent.smoothChildTiming&&this.startTime(this._start+e-this._delay),this._delay=e,this):this._delay},t.duration=function(e){return arguments.length?this.totalDuration(this._repeat>0?e+(e+this._rDelay)*this._repeat:e):this.totalDuration()&&this._dur},t.totalDuration=function(e){return arguments.length?(this._dirty=0,om(this,this._repeat<0?e:(e-this._repeat*this._rDelay)/(this._repeat+1))):this._tDur},t.totalTime=function(e,t){if(Wm(),!arguments.length)return this._tTime;var n=this._dp;if(n&&n.smoothChildTiming&&this._ts){for(Zf(this,e),!n._dp||n.parent||em(n,this);n&&n.parent;)n.parent._time!==n._start+(n._ts>=0?n._tTime/n._ts:(n.totalDuration()-n._tTime)/-n._ts)&&n.totalTime(n._tTime,!0),n=n.parent;!this.parent&&this._dp.autoRemoveChildren&&(this._ts>0&&e<this._tDur||this._ts<0&&e>0||!this._tDur&&!e)&&tm(this._dp,this,this._start-this._delay)}return(this._tTime!==e||!this._dur&&!t||this._initted&&Math.abs(this._zTime)===Oh||!this._initted&&this._dur&&e||!e&&!this._initted&&(this.add||this._ptLookup))&&(this._ts||(this._pTime=e),Nf(this,e,t)),this},t.time=function(e,t){return arguments.length?this.totalTime(Math.min(this.totalDuration(),e+Gf(this))%(this._dur+this._rDelay)||(e?this._dur:0),t):this._time},t.totalProgress=function(e,t){return arguments.length?this.totalTime(this.totalDuration()*e,t):this.totalDuration()?Math.min(1,this._tTime/this._tDur):this.rawTime()>=0&&this._initted?1:0},t.progress=function(e,t){return arguments.length?this.totalTime(this.duration()*(!this._yoyo||1&this.iteration()?e:1-e)+Gf(this),t):this.duration()?Math.min(1,this._time/this._dur):this.rawTime()>0?1:0},t.iteration=function(e,t){var n=this.duration()+this._rDelay;return arguments.length?this.totalTime(this._time+(e-1)*n,t):this._repeat?Xf(this._tTime,n)+1:1},t.timeScale=function(e,t){if(!arguments.length)return-1e-8===this._rts?0:this._rts;if(this._rts===e)return this;var n=this.parent&&this._ts?Kf(this.parent._time,this):this._tTime;return this._rts=+e||0,this._ts=this._ps||-1e-8===e?0:this._rts,this.totalTime(pm(-Math.abs(this._delay),this.totalDuration(),n),!1!==t),Jf(this),function(e){for(var t=e.parent;t&&t.parent;)t._dirty=1,t.totalDuration(),t=t.parent;return e}(this)},t.paused=function(e){return arguments.length?(this._ps!==e&&(this._ps=e,e?(this._pTime=this._tTime||Math.max(-this._delay,this.rawTime()),this._ts=this._act=0):(Wm(),this._ts=this._rts,this.totalTime(this.parent&&!this.parent.smoothChildTiming?this.rawTime():this._tTime||this._pTime,1===this.progress()&&Math.abs(this._zTime)!==Oh&&(this._tTime-=Oh)))),this):this._ps},t.startTime=function(e){if(arguments.length){this._start=Pf(e);var t=this.parent||this._dp;return t&&(t._sort||!this.parent)&&tm(t,this,this._start-this._delay),this}return this._start},t.endTime=function(e){return this._start+(Vh(e)?this.totalDuration():this.duration())/Math.abs(this._ts||1)},t.rawTime=function(e){var t=this.parent||this._dp;return t?e&&(!this._ts||this._repeat&&this._time&&this.totalProgress()<1)?this._tTime%(this._dur+this._rDelay):this._ts?Kf(t.rawTime(e),this):this._tTime:this._tTime},t.revert=function(e){void 0===e&&(e=gf);var t=eh;return eh=e,Of(this)&&(this.timeline&&this.timeline.revert(e),this.totalTime(-.01,e.suppressEvents)),"nested"!==this.data&&!1!==e.kill&&this.kill(),eh=t,this},t.globalTime=function(e){for(var t=this,n=arguments.length?e:t.rawTime();t;)n=t._start+n/(Math.abs(t._ts)||1),t=t._dp;return!this.parent&&this._sat?this._sat.globalTime(e):n},t.repeat=function(e){return arguments.length?(this._repeat=e===1/0?-2:e,sm(this)):-2===this._repeat?1/0:this._repeat},t.repeatDelay=function(e){if(arguments.length){var t=this._time;return this._rDelay=e,sm(this),t?this.time(t):this}return this._rDelay},t.yoyo=function(e){return arguments.length?(this._yoyo=e,this):this._yoyo},t.seek=function(e,t){return this.totalTime(um(this,e),Vh(t))},t.restart=function(e,t){return this.play().totalTime(e?-this._delay:0,Vh(t)),this._dur||(this._zTime=-1e-8),this},t.play=function(e,t){return null!=e&&this.seek(e,t),this.reversed(!1).paused(!1)},t.reverse=function(e,t){return null!=e&&this.seek(e||this.totalDuration(),t),this.reversed(!0).paused(!1)},t.pause=function(e,t){return null!=e&&this.seek(e,t),this.paused(!0)},t.resume=function(){return this.paused(!1)},t.reversed=function(e){return arguments.length?(!!e!==this.reversed()&&this.timeScale(-this._rts||(e?-1e-8:0)),this):this._rts<0},t.invalidate=function(){return this._initted=this._act=0,this._zTime=-1e-8,this},t.isActive=function(){var e,t=this.parent||this._dp,n=this._start;return!(t&&!(this._ts&&this._initted&&t.isActive()&&(e=t.rawTime(!0))>=n&&e<this.endTime(!0)-Oh))},t.eventCallback=function(e,t,n){var r=this.vars;return arguments.length>1?(t?(r[e]=t,n&&(r[e+"Params"]=n),"onUpdate"===e&&(this._onUpdate=t)):delete r[e],this):r[e]},t.then=function(e){var t=this,n=t._prom;return new Promise(function(r){var i=Bh(e)?e:Df,a=function(){var e=t.then;t.then=null,n&&n(),Bh(i)&&(i=i(t))&&(i.then||i===t)&&(t.then=e),r(i),t.then=e};t._initted&&1===t.totalProgress()&&t._ts>=0||!t._tTime&&t._ts<0?a():t._prom=a})},t.kill=function(){Em(this)},e}();Lf(eg.prototype,{_time:0,_start:0,_end:0,_tTime:0,_tDur:0,_dirty:0,_repeat:0,_yoyo:!1,parent:null,_initted:!1,_rDelay:0,_ts:1,_dp:0,ratio:0,_zTime:-1e-8,_prom:0,_ps:!1,_rts:1});var tg=function(e){function t(t,n){var r;return void 0===t&&(t={}),(r=e.call(this,t)||this).labels={},r.smoothChildTiming=!!t.smoothChildTiming,r.autoRemoveChildren=!!t.autoRemoveChildren,r._sort=Vh(t.sortChildren),nh&&tm(t.parent||nh,Kp(r),n),t.reversed&&r.reverse(),t.paused&&r.paused(!0),t.scrollTrigger&&nm(Kp(r),t.scrollTrigger),r}Jp(t,e);var n=t.prototype;return n.to=function(e,t,n){return cm(0,arguments,this),this},n.from=function(e,t,n){return cm(1,arguments,this),this},n.fromTo=function(e,t,n,r){return cm(2,arguments,this),this},n.set=function(e,t,n){return t.duration=0,t.parent=this,Bf(t).repeatDelay||(t.repeat=0),t.immediateRender=!!t.immediateRender,new pg(e,t,um(this,n),1),this},n.call=function(e,t,n){return tm(this,pg.delayedCall(0,e,t),n)},n.staggerTo=function(e,t,n,r,i,a,o){return n.duration=t,n.stagger=n.stagger||r,n.onComplete=a,n.onCompleteParams=o,n.parent=this,new pg(e,n,um(this,i)),this},n.staggerFrom=function(e,t,n,r,i,a,o){return n.runBackwards=1,Bf(n).immediateRender=Vh(n.immediateRender),this.staggerTo(e,t,n,r,i,a,o)},n.staggerFromTo=function(e,t,n,r,i,a,o,s){return r.startAt=n,Bf(r).immediateRender=Vh(r.immediateRender),this.staggerTo(e,t,r,i,a,o,s)},n.render=function(e,t,n){var r,i,a,o,s,l,u,c,d,p,h,f,m=this._time,g=this._dirty?this.totalDuration():this._tDur,x=this._dur,y=e<=0?0:Pf(e),b=this._zTime<0!=e<0&&(this._initted||!x);if(this!==nh&&y>g&&e>=0&&(y=g),y!==this._tTime||n||b){if(m!==this._time&&x&&(y+=this._time-m,e+=this._time-m),r=y,d=this._start,l=!(c=this._ts),b&&(x||(m=this._zTime),(e||!t)&&(this._zTime=e)),this._repeat){if(h=this._yoyo,s=x+this._rDelay,this._repeat<-1&&e<0)return this.totalTime(100*s+e,t,n);if(r=Pf(y%s),y===g?(o=this._repeat,r=x):((o=~~(p=Pf(y/s)))&&o===p&&(r=x,o--),r>x&&(r=x)),p=Xf(this._tTime,s),!m&&this._tTime&&p!==o&&this._tTime-p*s-this._dur<=0&&(p=o),h&&1&o&&(r=x-r,f=1),o!==p&&!this._lock){var v=h&&1&p,w=v===(h&&1&o);if(o<p&&(v=!v),m=v?0:y%x?x:y,this._lock=1,this.render(m||(f?0:Pf(o*s)),t,!x)._lock=0,this._tTime=y,!t&&this.parent&&zm(this,"onRepeat"),this.vars.repeatRefresh&&!f&&(this.invalidate()._lock=1,p=o),m&&m!==this._time||l!==!this._ts||this.vars.onRepeat&&!this.parent&&!this._act)return this;if(x=this._dur,g=this._tDur,w&&(this._lock=2,m=v?x:-1e-4,this.render(m,!0),this.vars.repeatRefresh&&!f&&this.invalidate()),this._lock=0,!this._ts&&!l)return this;qm(this,f)}}if(this._hasPause&&!this._forcing&&this._lock<2&&(u=function(e,t,n){var r;if(n>t)for(r=e._first;r&&r._start<=n;){if("isPause"===r.data&&r._start>t)return r;r=r._next}else for(r=e._last;r&&r._start>=n;){if("isPause"===r.data&&r._start<t)return r;r=r._prev}}(this,Pf(m),Pf(r)),u&&(y-=r-(r=u._start))),this._tTime=y,this._time=r,this._act=!c,this._initted||(this._onUpdate=this.vars.onUpdate,this._initted=1,this._zTime=e,m=0),!m&&y&&x&&!t&&!p&&(zm(this,"onStart"),this._tTime!==y))return this;if(r>=m&&e>=0)for(i=this._first;i;){if(a=i._next,(i._act||r>=i._start)&&i._ts&&u!==i){if(i.parent!==this)return this.render(e,t,n);if(i.render(i._ts>0?(r-i._start)*i._ts:(i._dirty?i.totalDuration():i._tDur)+(r-i._start)*i._ts,t,n),r!==this._time||!this._ts&&!l){u=0,a&&(y+=this._zTime=-1e-8);break}}i=a}else{i=this._last;for(var k=e<0?e:r;i;){if(a=i._prev,(i._act||k<=i._end)&&i._ts&&u!==i){if(i.parent!==this)return this.render(e,t,n);if(i.render(i._ts>0?(k-i._start)*i._ts:(i._dirty?i.totalDuration():i._tDur)+(k-i._start)*i._ts,t,n||eh&&Of(i)),r!==this._time||!this._ts&&!l){u=0,a&&(y+=this._zTime=k?-1e-8:Oh);break}}i=a}}if(u&&!t&&(this.pause(),u.render(r>=m?0:-1e-8)._zTime=r>=m?1:-1,this._ts))return this._start=d,Jf(this),this.render(e,t,n);this._onUpdate&&!t&&zm(this,"onUpdate",!0),(y===g&&this._tTime>=this.totalDuration()||!y&&m)&&(d!==this._start&&Math.abs(c)===Math.abs(this._ts)||this._lock||((e||!x)&&(y===g&&this._ts>0||!y&&this._ts<0)&&Hf(this,1),t||e<0&&!m||!y&&!m&&g||(zm(this,y===g&&e>=0?"onComplete":"onReverseComplete",!0),this._prom&&!(y<g&&this.timeScale()>0)&&this._prom())))}return this},n.add=function(e,t){var n=this;if(Uh(t)||(t=um(this,t,e)),!(e instanceof eg)){if(Xh(e))return e.forEach(function(e){return n.add(e,t)}),this;if(Wh(e))return this.addLabel(e,t);if(!Bh(e))return this;e=pg.delayedCall(0,e)}return this!==e?tm(this,e,t):this},n.getChildren=function(e,t,n,r){void 0===e&&(e=!0),void 0===t&&(t=!0),void 0===n&&(n=!0),void 0===r&&(r=-1e8);for(var i=[],a=this._first;a;)a._start>=r&&(a instanceof pg?t&&i.push(a):(n&&i.push(a),e&&i.push.apply(i,a.getChildren(!0,t,n)))),a=a._next;return i},n.getById=function(e){for(var t=this.getChildren(1,1,1),n=t.length;n--;)if(t[n].vars.id===e)return t[n]},n.remove=function(e){return Wh(e)?this.removeLabel(e):Bh(e)?this.killTweensOf(e):(e.parent===this&&Yf(this,e),e===this._recent&&(this._recent=this._last),Vf(this))},n.totalTime=function(t,n){return arguments.length?(this._forcing=1,!this._dp&&this._ts&&(this._start=Pf(Fm.time-(this._ts>0?t/this._ts:(this.totalDuration()-t)/-this._ts))),e.prototype.totalTime.call(this,t,n),this._forcing=0,this):this._tTime},n.addLabel=function(e,t){return this.labels[e]=um(this,t),this},n.removeLabel=function(e){return delete this.labels[e],this},n.addPause=function(e,t,n){var r=pg.delayedCall(0,t||hf,n);return r.data="isPause",this._hasPause=1,tm(this,r,um(this,e))},n.removePause=function(e){var t=this._first;for(e=um(this,e);t;)t._start===e&&"isPause"===t.data&&Hf(t),t=t._next},n.killTweensOf=function(e,t,n){for(var r=this.getTweensOf(e,n),i=r.length;i--;)ng!==r[i]&&r[i].kill(e,t);return this},n.getTweensOf=function(e,t){for(var n,r=[],i=gm(e),a=this._first,o=Uh(t);a;)a instanceof pg?Mf(a._targets,i)&&(o?(!ng||a._initted&&a._ts)&&a.globalTime(0)<=t&&a.globalTime(a.totalDuration())>t:!t||a.isActive())&&r.push(a):(n=a.getTweensOf(i,t)).length&&r.push.apply(r,n),a=a._next;return r},n.tweenTo=function(e,t){t=t||{};var n,r=this,i=um(r,e),a=t,o=a.startAt,s=a.onStart,l=a.onStartParams,u=a.immediateRender,c=pg.to(r,Lf({ease:t.ease||"none",lazy:!1,immediateRender:!1,time:i,overwrite:"auto",duration:t.duration||Math.abs((i-(o&&"time"in o?o.time:r._time))/r.timeScale())||Oh,onStart:function(){if(r.pause(),!n){var e=t.duration||Math.abs((i-(o&&"time"in o?o.time:r._time))/r.timeScale());c._dur!==e&&om(c,e,0,1).render(c._time,!0,!0),n=1}s&&s.apply(c,l||[])}},t));return u?c.render(0):c},n.tweenFromTo=function(e,t,n){return this.tweenTo(t,Lf({startAt:{time:um(this,e)}},n))},n.recent=function(){return this._recent},n.nextLabel=function(e){return void 0===e&&(e=this._time),Cm(this,um(this,e))},n.previousLabel=function(e){return void 0===e&&(e=this._time),Cm(this,um(this,e),1)},n.currentLabel=function(e){return arguments.length?this.seek(e,!0):this.previousLabel(this._time+Oh)},n.shiftChildren=function(e,t,n){void 0===n&&(n=0);var r,i=this._first,a=this.labels;for(e=Pf(e);i;)i._start>=n&&(i._start+=e,i._end+=e),i=i._next;if(t)for(r in a)a[r]>=n&&(a[r]+=e);return Vf(this)},n.invalidate=function(t){var n=this._first;for(this._lock=0;n;)n.invalidate(t),n=n._next;return e.prototype.invalidate.call(this,t)},n.clear=function(e){void 0===e&&(e=!0);for(var t,n=this._first;n;)t=n._next,this.remove(n),n=t;return this._dp&&(this._time=this._tTime=this._pTime=0),e&&(this.labels={}),Vf(this)},n.totalDuration=function(e){var t,n,r,i=0,a=this,o=a._last,s=Rh;if(arguments.length)return a.timeScale((a._repeat<0?a.duration():a.totalDuration())/(a.reversed()?-e:e));if(a._dirty){for(r=a.parent;o;)t=o._prev,o._dirty&&o.totalDuration(),(n=o._start)>s&&a._sort&&o._ts&&!a._lock?(a._lock=1,tm(a,o,n-o._delay,1)._lock=0):s=n,n<0&&o._ts&&(i-=n,(!r&&!a._dp||r&&r.smoothChildTiming)&&(a._start+=Pf(n/a._ts),a._time-=n,a._tTime-=n),a.shiftChildren(-n,!1,-1/0),s=0),o._end>i&&o._ts&&(i=o._end),o=t;om(a,a===nh&&a._time>i?a._time:i,1,1),a._dirty=0}return a._tDur},t.updateRoot=function(e){if(nh._ts&&(Nf(nh,Kf(e,nh)),sh=Fm.frame),Fm.frame>=kf){kf+=Th.autoSleep||120;var t=nh._first;if((!t||!t._ts)&&Th.autoSleep&&Fm._listeners.length<2){for(;t&&!t._ts;)t=t._next;t||Fm.sleep()}}},t}(eg);Lf(tg.prototype,{_lock:0,_hasPause:0,_forcing:0});var ng,rg,ig=function(e,t,n,r,i,a,o){var s,l,u,c,d,p,h,f,m=new Cg(this._pt,e,t,0,1,vg,null,i),g=0,x=0;for(m.b=n,m.e=r,n+="",(h=~(r+="").indexOf("random("))&&(r=jm(r)),a&&(a(f=[n,r],e,t),n=f[0],r=f[1]),l=n.match(nf)||[];s=nf.exec(r);)c=s[0],d=r.substring(g,s.index),u?u=(u+1)%5:"rgba("===d.substr(-5)&&(u=1),c!==l[x++]&&(p=parseFloat(l[x-1])||0,m._pt={_next:m._pt,p:d||1===x?d:",",s:p,c:"="===c.charAt(1)?Tf(p,c)-p:parseFloat(c)-p,m:u&&u<4?Math.round:0},g=nf.lastIndex);return m.c=g<r.length?r.substring(g,r.length):"",m.fp=o,(rf.test(r)||h)&&(m.e=0),this._pt=m,m},ag=function(e,t,n,r,i,a,o,s,l,u){Bh(r)&&(r=r(i||0,e,a));var c,d=e[t],p="get"!==n?n:Bh(d)?l?e[t.indexOf("set")||!Bh(e["get"+t.substr(3)])?t:"get"+t.substr(3)](l):e[t]():d,h=Bh(d)?l?mg:fg:hg;if(Wh(r)&&(~r.indexOf("random(")&&(r=jm(r)),"="===r.charAt(1)&&((c=Tf(p,r)+(hm(p)||0))||0===c)&&(r=c)),!u||p!==r||rg)return isNaN(p*r)||""===r?(!d&&!(t in e)&&cf(t,r),ig.call(this,e,t,p,r,h,s||Th.stringFilter,l)):(c=new Cg(this._pt,e,t,+p||0,r-(p||0),"boolean"==typeof d?bg:yg,0,h),l&&(c.fp=l),o&&c.modifier(o,this,e),this._pt=c)},og=function(e,t,n,r,i,a){var o,s,l,u;if(vf[e]&&!1!==(o=new vf[e]).init(i,o.rawVars?t[e]:function(e,t,n,r,i){if(Bh(e)&&(e=ug(e,i,t,n,r)),!Hh(e)||e.style&&e.nodeType||Xh(e)||Gh(e))return Wh(e)?ug(e,i,t,n,r):e;var a,o={};for(a in e)o[a]=ug(e[a],i,t,n,r);return o}(t[e],r,i,a,n),n,r,a)&&(n._pt=s=new Cg(n._pt,i,e,0,1,o.render,o,0,o.priority),n!==lh))for(l=n._ptLookup[n._targets.indexOf(i)],u=o._props.length;u--;)l[o._props[u]]=s;return o},sg=function e(t,n,r){var i,a,o,s,l,u,c,d,p,h,f,m,g,x=t.vars,y=x.ease,b=x.startAt,v=x.immediateRender,w=x.lazy,k=x.onUpdate,_=x.runBackwards,j=x.yoyoEase,S=x.keyframes,C=x.autoRevert,z=t._dur,E=t._startAt,$=t._targets,P=t.parent,T=P&&"nested"===P.data?P.vars.targets:$,M="auto"===t._overwrite&&!Zp,R=t.timeline;if(R&&(!S||!y)&&(y="none"),t._ease=Qm(y,Mh.ease),t._yEase=j?Vm(Qm(!0===j?y:j,Mh.ease)):0,j&&t._yoyo&&!t._repeat&&(j=t._yEase,t._yEase=t._ease,t._ease=j),t._from=!R&&!!x.runBackwards,!R||S&&!x.stagger){if(m=(d=$[0]?Cf($[0]).harness:0)&&x[d.prop],i=Wf(x,xf),E&&(E._zTime<0&&E.progress(1),n<0&&_&&v&&!C?E.render(-1,!0):E.revert(_&&z?mf:ff),E._lazy=0),b){if(Hf(t._startAt=pg.set($,Lf({data:"isStart",overwrite:!1,parent:P,immediateRender:!0,lazy:!E&&Vh(w),startAt:null,delay:0,onUpdate:k&&function(){return zm(t,"onUpdate")},stagger:0},b))),t._startAt._dp=0,t._startAt._sat=t,n<0&&(eh||!v&&!C)&&t._startAt.revert(mf),v&&z&&n<=0&&r<=0)return void(n&&(t._zTime=n))}else if(_&&z&&!E)if(n&&(v=!1),o=Lf({overwrite:!1,data:"isFromStart",lazy:v&&!E&&Vh(w),immediateRender:v,stagger:0,parent:P},i),m&&(o[d.prop]=m),Hf(t._startAt=pg.set($,o)),t._startAt._dp=0,t._startAt._sat=t,n<0&&(eh?t._startAt.revert(mf):t._startAt.render(-1,!0)),t._zTime=n,v){if(!n)return}else e(t._startAt,Oh,Oh);for(t._pt=t._ptCache=0,w=z&&Vh(w)||w&&!z,a=0;a<$.length;a++){if(c=(l=$[a])._gsap||Sf($)[a]._gsap,t._ptLookup[a]=h={},bf[c.id]&&yf.length&&Rf(),f=T===$?a:T.indexOf(l),d&&!1!==(p=new d).init(l,m||i,t,f,T)&&(t._pt=s=new Cg(t._pt,l,p.name,0,1,p.render,p,0,p.priority),p._props.forEach(function(e){h[e]=s}),p.priority&&(u=1)),!d||m)for(o in i)vf[o]&&(p=og(o,i,t,f,l,T))?p.priority&&(u=1):h[o]=s=ag.call(t,l,o,"get",i[o],f,T,0,x.stringFilter);t._op&&t._op[a]&&t.kill(l,t._op[a]),M&&t._pt&&(ng=t,nh.killTweensOf(l,h,t.globalTime(n)),g=!t.parent,ng=0),t._pt&&w&&(bf[c.id]=1)}u&&Sg(t),t._onInit&&t._onInit(t)}t._onUpdate=k,t._initted=(!t._op||t._pt)&&!g,S&&n<=0&&R.render(Rh,!0,!0)},lg=function(e,t,n,r){var i,a,o=t.ease||r||"power1.inOut";if(Xh(t))a=n[e]||(n[e]=[]),t.forEach(function(e,n){return a.push({t:n/(t.length-1)*100,v:e,e:o})});else for(i in t)a=n[i]||(n[i]=[]),"ease"===i||a.push({t:parseFloat(e),v:t[i],e:o})},ug=function(e,t,n,r,i){return Bh(e)?e.call(t,n,r,i):Wh(e)&&~e.indexOf("random(")?jm(e):e},cg=jf+"repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,autoRevert",dg={};Ef(cg+",id,stagger,delay,duration,paused,scrollTrigger",function(e){return dg[e]=1});var pg=function(e){function t(t,n,r,i){var a;"number"==typeof n&&(r.duration=n,n=r,r=null);var o,s,l,u,c,d,p,h,f=(a=e.call(this,i?n:Bf(n))||this).vars,m=f.duration,g=f.delay,x=f.immediateRender,y=f.stagger,b=f.overwrite,v=f.keyframes,w=f.defaults,k=f.scrollTrigger,_=f.yoyoEase,j=n.parent||nh,S=(Xh(t)||Gh(t)?Uh(t[0]):"length"in n)?[t]:gm(t);if(a._targets=S.length?Sf(S):df("GSAP target "+t+" not found. https://gsap.com",!Th.nullTargetWarn)||[],a._ptLookup=[],a._overwrite=b,v||y||Qh(m)||Qh(g)){if(n=a.vars,(o=a.timeline=new tg({data:"nested",defaults:w||{},targets:j&&"nested"===j.data?j.vars.targets:S})).kill(),o.parent=o._dp=Kp(a),o._start=0,y||Qh(m)||Qh(g)){if(u=S.length,p=y&&bm(y),Hh(y))for(c in y)~cg.indexOf(c)&&(h||(h={}),h[c]=y[c]);for(s=0;s<u;s++)(l=Wf(n,dg)).stagger=0,_&&(l.yoyoEase=_),h&&If(l,h),d=S[s],l.duration=+ug(m,Kp(a),s,d,S),l.delay=(+ug(g,Kp(a),s,d,S)||0)-a._delay,!y&&1===u&&l.delay&&(a._delay=g=l.delay,a._start+=g,l.delay=0),o.to(d,l,p?p(s,d,S):0),o._ease=Bm.none;o.duration()?m=g=0:a.timeline=0}else if(v){Bf(Lf(o.vars.defaults,{ease:"none"})),o._ease=Qm(v.ease||n.ease||"none");var C,z,E,$=0;if(Xh(v))v.forEach(function(e){return o.to(S,e,">")}),o.duration();else{for(c in l={},v)"ease"===c||"easeEach"===c||lg(c,v[c],l,v.easeEach);for(c in l)for(C=l[c].sort(function(e,t){return e.t-t.t}),$=0,s=0;s<C.length;s++)(E={ease:(z=C[s]).e,duration:(z.t-(s?C[s-1].t:0))/100*m})[c]=z.v,o.to(S,E,$),$+=E.duration;o.duration()<m&&o.to({},{duration:m-o.duration()})}}m||a.duration(m=o.duration())}else a.timeline=0;return!0!==b||Zp||(ng=Kp(a),nh.killTweensOf(S),ng=0),tm(j,Kp(a),r),n.reversed&&a.reverse(),n.paused&&a.paused(!0),(x||!m&&!v&&a._start===Pf(j._time)&&Vh(x)&&Qf(Kp(a))&&"nested"!==j.data)&&(a._tTime=-1e-8,a.render(Math.max(0,-g)||0)),k&&nm(Kp(a),k),a}Jp(t,e);var n=t.prototype;return n.render=function(e,t,n){var r,i,a,o,s,l,u,c,d,p=this._time,h=this._tDur,f=this._dur,m=e<0,g=e>h-Oh&&!m?h:e<Oh?0:e;if(f){if(g!==this._tTime||!e||n||!this._initted&&this._tTime||this._startAt&&this._zTime<0!==m||this._lazy){if(r=g,c=this.timeline,this._repeat){if(o=f+this._rDelay,this._repeat<-1&&m)return this.totalTime(100*o+e,t,n);if(r=Pf(g%o),g===h?(a=this._repeat,r=f):(a=~~(s=Pf(g/o)))&&a===s?(r=f,a--):r>f&&(r=f),(l=this._yoyo&&1&a)&&(d=this._yEase,r=f-r),s=Xf(this._tTime,o),r===p&&!n&&this._initted&&a===s)return this._tTime=g,this;a!==s&&(c&&this._yEase&&qm(c,l),this.vars.repeatRefresh&&!l&&!this._lock&&r!==o&&this._initted&&(this._lock=n=1,this.render(Pf(o*a),!0).invalidate()._lock=0))}if(!this._initted){if(rm(this,m?e:r,n,t,g))return this._tTime=0,this;if(!(p===this._time||n&&this.vars.repeatRefresh&&a!==s))return this;if(f!==this._dur)return this.render(e,t,n)}if(this._tTime=g,this._time=r,!this._act&&this._ts&&(this._act=1,this._lazy=0),this.ratio=u=(d||this._ease)(r/f),this._from&&(this.ratio=u=1-u),!p&&g&&!t&&!s&&(zm(this,"onStart"),this._tTime!==g))return this;for(i=this._pt;i;)i.r(u,i.d),i=i._next;c&&c.render(e<0?e:c._dur*c._ease(r/this._dur),t,n)||this._startAt&&(this._zTime=e),this._onUpdate&&!t&&(m&&qf(this,e,0,n),zm(this,"onUpdate")),this._repeat&&a!==s&&this.vars.onRepeat&&!t&&this.parent&&zm(this,"onRepeat"),g!==this._tDur&&g||this._tTime!==g||(m&&!this._onUpdate&&qf(this,e,0,!0),(e||!f)&&(g===this._tDur&&this._ts>0||!g&&this._ts<0)&&Hf(this,1),t||m&&!p||!(g||p||l)||(zm(this,g===h?"onComplete":"onReverseComplete",!0),this._prom&&!(g<h&&this.timeScale()>0)&&this._prom()))}}else!function(e,t,n,r){var i,a,o,s=e.ratio,l=t<0||!t&&(!e._start&&im(e)&&(e._initted||!am(e))||(e._ts<0||e._dp._ts<0)&&!am(e))?0:1,u=e._rDelay,c=0;if(u&&e._repeat&&(c=pm(0,e._tDur,t),a=Xf(c,u),e._yoyo&&1&a&&(l=1-l),a!==Xf(e._tTime,u)&&(s=1-l,e.vars.repeatRefresh&&e._initted&&e.invalidate())),l!==s||eh||r||e._zTime===Oh||!t&&e._zTime){if(!e._initted&&rm(e,t,r,n,c))return;for(o=e._zTime,e._zTime=t||(n?Oh:0),n||(n=t&&!o),e.ratio=l,e._from&&(l=1-l),e._time=0,e._tTime=c,i=e._pt;i;)i.r(l,i.d),i=i._next;t<0&&qf(e,t,0,!0),e._onUpdate&&!n&&zm(e,"onUpdate"),c&&e._repeat&&!n&&e.parent&&zm(e,"onRepeat"),(t>=e._tDur||t<0)&&e.ratio===l&&(l&&Hf(e,1),n||eh||(zm(e,l?"onComplete":"onReverseComplete",!0),e._prom&&e._prom()))}else e._zTime||(e._zTime=t)}(this,e,t,n);return this},n.targets=function(){return this._targets},n.invalidate=function(t){return(!t||!this.vars.runBackwards)&&(this._startAt=0),this._pt=this._op=this._onUpdate=this._lazy=this.ratio=0,this._ptLookup=[],this.timeline&&this.timeline.invalidate(t),e.prototype.invalidate.call(this,t)},n.resetTo=function(e,t,n,r,i){uh||Fm.wake(),this._ts||this.play();var a=Math.min(this._dur,(this._dp._time-this._start)*this._ts);return this._initted||sg(this,a),function(e,t,n,r,i,a,o,s){var l,u,c,d,p=(e._pt&&e._ptCache||(e._ptCache={}))[t];if(!p)for(p=e._ptCache[t]=[],c=e._ptLookup,d=e._targets.length;d--;){if((l=c[d][t])&&l.d&&l.d._pt)for(l=l.d._pt;l&&l.p!==t&&l.fp!==t;)l=l._next;if(!l)return rg=1,e.vars[t]="+=0",sg(e,o),rg=0,s?df(t+" not eligible for reset"):1;p.push(l)}for(d=p.length;d--;)(l=(u=p[d])._pt||u).s=!r&&0!==r||i?l.s+(r||0)+a*l.c:r,l.c=n-l.s,u.e&&(u.e=$f(n)+hm(u.e)),u.b&&(u.b=l.s+hm(u.b))}(this,e,t,n,r,this._ease(a/this._dur),a,i)?this.resetTo(e,t,n,r,1):(Zf(this,0),this.parent||Uf(this._dp,this,"_first","_last",this._dp._sort?"_start":0),this.render(0))},n.kill=function(e,t){if(void 0===t&&(t="all"),!(e||t&&"all"!==t))return this._lazy=this._pt=0,this.parent?Em(this):this.scrollTrigger&&this.scrollTrigger.kill(!!eh),this;if(this.timeline){var n=this.timeline.totalDuration();return this.timeline.killTweensOf(e,t,ng&&!0!==ng.vars.overwrite)._first||Em(this),this.parent&&n!==this.timeline.totalDuration()&&om(this,this._dur*this.timeline._tDur/n,0,1),this}var r,i,a,o,s,l,u,c=this._targets,d=e?gm(e):c,p=this._ptLookup,h=this._pt;if((!t||"all"===t)&&function(e,t){for(var n=e.length,r=n===t.length;r&&n--&&e[n]===t[n];);return n<0}(c,d))return"all"===t&&(this._pt=0),Em(this);for(r=this._op=this._op||[],"all"!==t&&(Wh(t)&&(s={},Ef(t,function(e){return s[e]=1}),t=s),t=function(e,t){var n,r,i,a,o=e[0]?Cf(e[0]).harness:0,s=o&&o.aliases;if(!s)return t;for(r in n=If({},t),s)if(r in n)for(i=(a=s[r].split(",")).length;i--;)n[a[i]]=n[r];return n}(c,t)),u=c.length;u--;)if(~d.indexOf(c[u]))for(s in i=p[u],"all"===t?(r[u]=t,o=i,a={}):(a=r[u]=r[u]||{},o=t),o)(l=i&&i[s])&&("kill"in l.d&&!0!==l.d.kill(s)||Yf(this,l,"_pt"),delete i[s]),"all"!==a&&(a[s]=1);return this._initted&&!this._pt&&h&&Em(this),this},t.to=function(e,n){return new t(e,n,arguments[2])},t.from=function(e,t){return cm(1,arguments)},t.delayedCall=function(e,n,r,i){return new t(n,0,{immediateRender:!1,lazy:!1,overwrite:!1,delay:e,onComplete:n,onReverseComplete:n,onCompleteParams:r,onReverseCompleteParams:r,callbackScope:i})},t.fromTo=function(e,t,n){return cm(2,arguments)},t.set=function(e,n){return n.duration=0,n.repeatDelay||(n.repeat=0),new t(e,n)},t.killTweensOf=function(e,t,n){return nh.killTweensOf(e,t,n)},t}(eg);Lf(pg.prototype,{_targets:[],_lazy:0,_startAt:0,_op:0,_onInit:0}),Ef("staggerTo,staggerFrom,staggerFromTo",function(e){pg[e]=function(){var t=new tg,n=fm.call(arguments,0);return n.splice("staggerFromTo"===e?5:4,0,0),t[e].apply(t,n)}});var hg=function(e,t,n){return e[t]=n},fg=function(e,t,n){return e[t](n)},mg=function(e,t,n,r){return e[t](r.fp,n)},gg=function(e,t,n){return e.setAttribute(t,n)},xg=function(e,t){return Bh(e[t])?fg:Yh(e[t])&&e.setAttribute?gg:hg},yg=function(e,t){return t.set(t.t,t.p,Math.round(1e6*(t.s+t.c*e))/1e6,t)},bg=function(e,t){return t.set(t.t,t.p,!!(t.s+t.c*e),t)},vg=function(e,t){var n=t._pt,r="";if(!e&&t.b)r=t.b;else if(1===e&&t.e)r=t.e;else{for(;n;)r=n.p+(n.m?n.m(n.s+n.c*e):Math.round(1e4*(n.s+n.c*e))/1e4)+r,n=n._next;r+=t.c}t.set(t.t,t.p,r,t)},wg=function(e,t){for(var n=t._pt;n;)n.r(e,n.d),n=n._next},kg=function(e,t,n,r){for(var i,a=this._pt;a;)i=a._next,a.p===r&&a.modifier(e,t,n),a=i},_g=function(e){for(var t,n,r=this._pt;r;)n=r._next,r.p===e&&!r.op||r.op===e?Yf(this,r,"_pt"):r.dep||(t=1),r=n;return!t},jg=function(e,t,n,r){r.mSet(e,t,r.m.call(r.tween,n,r.mt),r)},Sg=function(e){for(var t,n,r,i,a=e._pt;a;){for(t=a._next,n=r;n&&n.pr>a.pr;)n=n._next;(a._prev=n?n._prev:i)?a._prev._next=a:r=a,(a._next=n)?n._prev=a:i=a,a=t}e._pt=r},Cg=function(){function e(e,t,n,r,i,a,o,s,l){this.t=t,this.s=r,this.c=i,this.p=n,this.r=a||yg,this.d=o||this,this.set=s||hg,this.pr=l||0,this._next=e,e&&(e._prev=this)}return e.prototype.modifier=function(e,t,n){this.mSet=this.mSet||this.set,this.set=jg,this.m=e,this.mt=n,this.tween=t},e}();Ef(jf+"parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger",function(e){return xf[e]=1}),sf.TweenMax=sf.TweenLite=pg,sf.TimelineLite=sf.TimelineMax=tg,nh=new tg({sortChildren:!1,defaults:Mh,autoRemoveChildren:!0,id:"root",smoothChildTiming:!0}),Th.stringFilter=Im;var zg=[],Eg={},$g=[],Pg=0,Tg=0,Mg=function(e){return(Eg[e]||$g).map(function(e){return e()})},Rg=function(){var e=Date.now(),t=[];e-Pg>2&&(Mg("matchMediaInit"),zg.forEach(function(e){var n,r,i,a,o=e.queries,s=e.conditions;for(r in o)(n=rh.matchMedia(o[r]).matches)&&(i=1),n!==s[r]&&(s[r]=n,a=1);a&&(e.revert(),i&&t.push(e))}),Mg("matchMediaRevert"),t.forEach(function(e){return e.onMatch(e,function(t){return e.add(null,t)})}),Pg=e,Mg("matchMedia"))},Og=function(){function e(e,t){this.selector=t&&xm(t),this.data=[],this._r=[],this.isReverted=!1,this.id=Tg++,e&&this.add(e)}var t=e.prototype;return t.add=function(e,t,n){Bh(e)&&(n=t,t=e,e=Bh);var r=this,i=function(){var e,i=th,a=r.selector;return i&&i!==r&&i.data.push(r),n&&(r.selector=xm(n)),th=r,e=t.apply(r,arguments),Bh(e)&&r._r.push(e),th=i,r.selector=a,r.isReverted=!1,e};return r.last=i,e===Bh?i(r,function(e){return r.add(null,e)}):e?r[e]=i:i},t.ignore=function(e){var t=th;th=null,e(this),th=t},t.getTweens=function(){var t=[];return this.data.forEach(function(n){return n instanceof e?t.push.apply(t,n.getTweens()):n instanceof pg&&!(n.parent&&"nested"===n.parent.data)&&t.push(n)}),t},t.clear=function(){this._r.length=this.data.length=0},t.kill=function(e,t){var n=this;if(e?function(){for(var t,r=n.getTweens(),i=n.data.length;i--;)"isFlip"===(t=n.data[i]).data&&(t.revert(),t.getChildren(!0,!0,!1).forEach(function(e){return r.splice(r.indexOf(e),1)}));for(r.map(function(e){return{g:e._dur||e._delay||e._sat&&!e._sat.vars.immediateRender?e.globalTime(0):-1/0,t:e}}).sort(function(e,t){return t.g-e.g||-1/0}).forEach(function(t){return t.t.revert(e)}),i=n.data.length;i--;)(t=n.data[i])instanceof tg?"nested"!==t.data&&(t.scrollTrigger&&t.scrollTrigger.revert(),t.kill()):!(t instanceof pg)&&t.revert&&t.revert(e);n._r.forEach(function(t){return t(e,n)}),n.isReverted=!0}():this.data.forEach(function(e){return e.kill&&e.kill()}),this.clear(),t)for(var r=zg.length;r--;)zg[r].id===this.id&&zg.splice(r,1)},t.revert=function(e){this.kill(e||{})},e}(),Ng=function(){function e(e){this.contexts=[],this.scope=e,th&&th.data.push(this)}var t=e.prototype;return t.add=function(e,t,n){Hh(e)||(e={matches:e});var r,i,a,o=new Og(0,n||this.scope),s=o.conditions={};for(i in th&&!o.selector&&(o.selector=th.selector),this.contexts.push(o),t=o.add("onMatch",t),o.queries=e,e)"all"===i?a=1:(r=rh.matchMedia(e[i]))&&(zg.indexOf(o)<0&&zg.push(o),(s[i]=r.matches)&&(a=1),r.addListener?r.addListener(Rg):r.addEventListener("change",Rg));return a&&t(o,function(e){return o.add(null,e)}),this},t.revert=function(e){this.kill(e||{})},t.kill=function(e){this.contexts.forEach(function(t){return t.kill(e,!0)})},e}(),Ag={registerPlugin:function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];t.forEach(function(e){return Pm(e)})},timeline:function(e){return new tg(e)},getTweensOf:function(e,t){return nh.getTweensOf(e,t)},getProperty:function(e,t,n,r){Wh(e)&&(e=gm(e)[0]);var i=Cf(e||{}).get,a=n?Df:Af;return"native"===n&&(n=""),e?t?a((vf[t]&&vf[t].get||i)(e,t,n,r)):function(t,n,r){return a((vf[t]&&vf[t].get||i)(e,t,n,r))}:e},quickSetter:function(e,t,n){if((e=gm(e)).length>1){var r=e.map(function(e){return Ig.quickSetter(e,t,n)}),i=r.length;return function(e){for(var t=i;t--;)r[t](e)}}e=e[0]||{};var a=vf[t],o=Cf(e),s=o.harness&&(o.harness.aliases||{})[t]||t,l=a?function(t){var r=new a;lh._pt=0,r.init(e,n?t+n:t,lh,0,[e]),r.render(1,r),lh._pt&&wg(1,lh)}:o.set(e,s);return a?l:function(t){return l(e,s,n?t+n:t,o,1)}},quickTo:function(e,t,n){var r,i=Ig.to(e,Lf(((r={})[t]="+=0.1",r.paused=!0,r.stagger=0,r),n||{})),a=function(e,n,r){return i.resetTo(t,e,n,r)};return a.tween=i,a},isTweening:function(e){return nh.getTweensOf(e,!0).length>0},defaults:function(e){return e&&e.ease&&(e.ease=Qm(e.ease,Mh.ease)),Ff(Mh,e||{})},config:function(e){return Ff(Th,e||{})},registerEffect:function(e){var t=e.name,n=e.effect,r=e.plugins,i=e.defaults,a=e.extendTimeline;(r||"").split(",").forEach(function(e){return e&&!vf[e]&&!sf[e]&&df(t+" effect requires "+e+" plugin.")}),wf[t]=function(e,t,r){return n(gm(e),Lf(t||{},i),r)},a&&(tg.prototype[t]=function(e,n,r){return this.add(wf[t](e,Hh(n)?n:(r=n)&&{},this),r)})},registerEase:function(e,t){Bm[e]=Qm(t)},parseEase:function(e,t){return arguments.length?Qm(e,t):Bm},getById:function(e){return nh.getById(e)},exportRoot:function(e,t){void 0===e&&(e={});var n,r,i=new tg(e);for(i.smoothChildTiming=Vh(e.smoothChildTiming),nh.remove(i),i._dp=0,i._time=i._tTime=nh._time,n=nh._first;n;)r=n._next,!t&&!n._dur&&n instanceof pg&&n.vars.onComplete===n._targets[0]||tm(i,n,n._start-n._delay),n=r;return tm(nh,i,0),i},context:function(e,t){return e?new Og(e,t):th},matchMedia:function(e){return new Ng(e)},matchMediaRefresh:function(){return zg.forEach(function(e){var t,n,r=e.conditions;for(n in r)r[n]&&(r[n]=!1,t=1);t&&e.revert()})||Rg()},addEventListener:function(e,t){var n=Eg[e]||(Eg[e]=[]);~n.indexOf(t)||n.push(t)},removeEventListener:function(e,t){var n=Eg[e],r=n&&n.indexOf(t);r>=0&&n.splice(r,1)},utils:{wrap:function e(t,n,r){var i=n-t;return Xh(t)?_m(t,e(0,t.length),n):dm(r,function(e){return(i+(e-t)%i)%i+t})},wrapYoyo:function e(t,n,r){var i=n-t,a=2*i;return Xh(t)?_m(t,e(0,t.length-1),n):dm(r,function(e){return t+((e=(a+(e-t)%a)%a||0)>i?a-e:e)})},distribute:bm,random:km,snap:wm,normalize:function(e,t,n){return Sm(e,t,0,1,n)},getUnit:hm,clamp:function(e,t,n){return dm(n,function(n){return pm(e,t,n)})},splitColor:Om,toArray:gm,selector:xm,mapRange:Sm,pipe:function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return function(e){return t.reduce(function(e,t){return t(e)},e)}},unitize:function(e,t){return function(n){return e(parseFloat(n))+(t||hm(n))}},interpolate:function e(t,n,r,i){var a=isNaN(t+n)?0:function(e){return(1-e)*t+e*n};if(!a){var o,s,l,u,c,d=Wh(t),p={};if(!0===r&&(i=1)&&(r=null),d)t={p:t},n={p:n};else if(Xh(t)&&!Xh(n)){for(l=[],u=t.length,c=u-2,s=1;s<u;s++)l.push(e(t[s-1],t[s]));u--,a=function(e){e*=u;var t=Math.min(c,~~e);return l[t](e-t)},r=n}else i||(t=If(Xh(t)?[]:{},t));if(!l){for(o in n)ag.call(p,t,o,"get",n[o]);a=function(e){return wg(e,p)||(d?t.p:t)}}}return dm(r,a)},shuffle:ym},install:uf,effects:wf,ticker:Fm,updateRoot:tg.updateRoot,plugins:vf,globalTimeline:nh,core:{PropTween:Cg,globals:pf,Tween:pg,Timeline:tg,Animation:eg,getCache:Cf,_removeLinkedListItem:Yf,reverting:function(){return eh},context:function(e){return e&&th&&(th.data.push(e),e._ctx=th),th},suppressOverwrites:function(e){return Zp=e}}};Ef("to,from,fromTo,delayedCall,set,killTweensOf",function(e){return Ag[e]=pg[e]}),Fm.add(tg.updateRoot),lh=Ag.to({},{duration:0});var Dg=function(e,t){for(var n=e._pt;n&&n.p!==t&&n.op!==t&&n.fp!==t;)n=n._next;return n},Lg=function(e,t){return{name:e,headless:1,rawVars:1,init:function(e,n,r){r._onInit=function(e){var r,i;if(Wh(n)&&(r={},Ef(n,function(e){return r[e]=1}),n=r),t){for(i in r={},n)r[i]=t(n[i]);n=r}!function(e,t){var n,r,i,a=e._targets;for(n in t)for(r=a.length;r--;)(i=e._ptLookup[r][n])&&(i=i.d)&&(i._pt&&(i=Dg(i,n)),i&&i.modifier&&i.modifier(t[n],e,a[r],n))}(e,n)}}}},Ig=Ag.registerPlugin({name:"attr",init:function(e,t,n,r,i){var a,o,s;for(a in this.tween=n,t)s=e.getAttribute(a)||"",(o=this.add(e,"setAttribute",(s||0)+"",t[a],r,i,0,0,a)).op=a,o.b=s,this._props.push(a)},render:function(e,t){for(var n=t._pt;n;)eh?n.set(n.t,n.p,n.b,n):n.r(e,n.d),n=n._next}},{name:"endArray",headless:1,init:function(e,t){for(var n=t.length;n--;)this.add(e,n,e[n]||0,t[n],0,0,0,0,0,1)}},Lg("roundProps",vm),Lg("modifiers"),Lg("snap",wm))||Ag;pg.version=tg.version=Ig.version="3.14.2",oh=1,qh()&&Wm(),Bm.Power0,Bm.Power1,Bm.Power2,Bm.Power3,Bm.Power4,Bm.Linear,Bm.Quad,Bm.Cubic,Bm.Quart,Bm.Quint,Bm.Strong,Bm.Elastic,Bm.Back,Bm.SteppedEase,Bm.Bounce,Bm.Sine,Bm.Expo,Bm.Circ;var Fg,Wg,Bg,Ug,Yg,Hg,Vg,qg,Qg={},Gg=180/Math.PI,Xg=Math.PI/180,Kg=Math.atan2,Jg=/([A-Z])/g,Zg=/(left|right|width|margin|padding|x)/i,ex=/[\s,\(]\S/,tx={autoAlpha:"opacity,visibility",scale:"scaleX,scaleY",alpha:"opacity"},nx=function(e,t){return t.set(t.t,t.p,Math.round(1e4*(t.s+t.c*e))/1e4+t.u,t)},rx=function(e,t){return t.set(t.t,t.p,1===e?t.e:Math.round(1e4*(t.s+t.c*e))/1e4+t.u,t)},ix=function(e,t){return t.set(t.t,t.p,e?Math.round(1e4*(t.s+t.c*e))/1e4+t.u:t.b,t)},ax=function(e,t){return t.set(t.t,t.p,1===e?t.e:e?Math.round(1e4*(t.s+t.c*e))/1e4+t.u:t.b,t)},ox=function(e,t){var n=t.s+t.c*e;t.set(t.t,t.p,~~(n+(n<0?-.5:.5))+t.u,t)},sx=function(e,t){return t.set(t.t,t.p,e?t.e:t.b,t)},lx=function(e,t){return t.set(t.t,t.p,1!==e?t.b:t.e,t)},ux=function(e,t,n){return e.style[t]=n},cx=function(e,t,n){return e.style.setProperty(t,n)},dx=function(e,t,n){return e._gsap[t]=n},px=function(e,t,n){return e._gsap.scaleX=e._gsap.scaleY=n},hx=function(e,t,n,r,i){var a=e._gsap;a.scaleX=a.scaleY=n,a.renderTransform(i,a)},fx=function(e,t,n,r,i){var a=e._gsap;a[t]=n,a.renderTransform(i,a)},mx="transform",gx=mx+"Origin",xx=function e(t,n){var r=this,i=this.target,a=i.style,o=i._gsap;if(t in Qg&&a){if(this.tfm=this.tfm||{},"transform"===t)return tx.transform.split(",").forEach(function(t){return e.call(r,t,n)});if(~(t=tx[t]||t).indexOf(",")?t.split(",").forEach(function(e){return r.tfm[e]=Nx(i,e)}):this.tfm[t]=o.x?o[t]:Nx(i,t),t===gx&&(this.tfm.zOrigin=o.zOrigin),this.props.indexOf(mx)>=0)return;o.svg&&(this.svgo=i.getAttribute("data-svg-origin"),this.props.push(gx,n,"")),t=mx}(a||n)&&this.props.push(t,n,a[t])},yx=function(e){e.translate&&(e.removeProperty("translate"),e.removeProperty("scale"),e.removeProperty("rotate"))},bx=function(){var e,t,n=this.props,r=this.target,i=r.style,a=r._gsap;for(e=0;e<n.length;e+=3)n[e+1]?2===n[e+1]?r[n[e]](n[e+2]):r[n[e]]=n[e+2]:n[e+2]?i[n[e]]=n[e+2]:i.removeProperty("--"===n[e].substr(0,2)?n[e]:n[e].replace(Jg,"-$1").toLowerCase());if(this.tfm){for(t in this.tfm)a[t]=this.tfm[t];a.svg&&(a.renderTransform(),r.setAttribute("data-svg-origin",this.svgo||"")),(e=Vg())&&e.isStart||i[mx]||(yx(i),a.zOrigin&&i[gx]&&(i[gx]+=" "+a.zOrigin+"px",a.zOrigin=0,a.renderTransform()),a.uncache=1)}},vx=function(e,t){var n={target:e,props:[],revert:bx,save:xx};return e._gsap||Ig.core.getCache(e),t&&e.style&&e.nodeType&&t.split(",").forEach(function(e){return n.save(e)}),n},wx=function(e,t){var n=Wg.createElementNS?Wg.createElementNS((t||"http://www.w3.org/1999/xhtml").replace(/^https/,"http"),e):Wg.createElement(e);return n&&n.style?n:Wg.createElement(e)},kx=function e(t,n,r){var i=getComputedStyle(t);return i[n]||i.getPropertyValue(n.replace(Jg,"-$1").toLowerCase())||i.getPropertyValue(n)||!r&&e(t,jx(n)||n,1)||""},_x="O,Moz,ms,Ms,Webkit".split(","),jx=function(e,t,n){var r=(t||Yg).style,i=5;if(e in r&&!n)return e;for(e=e.charAt(0).toUpperCase()+e.substr(1);i--&&!(_x[i]+e in r););return i<0?null:(3===i?"ms":i>=0?_x[i]:"")+e},Sx=function(){"undefined"!=typeof window&&window.document&&(Fg=window,Wg=Fg.document,Bg=Wg.documentElement,Yg=wx("div")||{style:{}},wx("div"),mx=jx(mx),gx=mx+"Origin",Yg.style.cssText="border-width:0;line-height:0;position:absolute;padding:0",qg=!!jx("perspective"),Vg=Ig.core.reverting,Ug=1)},Cx=function(e){var t,n=e.ownerSVGElement,r=wx("svg",n&&n.getAttribute("xmlns")||"http://www.w3.org/2000/svg"),i=e.cloneNode(!0);i.style.display="block",r.appendChild(i),Bg.appendChild(r);try{t=i.getBBox()}catch(Iy){}return r.removeChild(i),Bg.removeChild(r),t},zx=function(e,t){for(var n=t.length;n--;)if(e.hasAttribute(t[n]))return e.getAttribute(t[n])},Ex=function(e){var t,n;try{t=e.getBBox()}catch(r){t=Cx(e),n=1}return t&&(t.width||t.height)||n||(t=Cx(e)),!t||t.width||t.x||t.y?t:{x:+zx(e,["x","cx","x1"])||0,y:+zx(e,["y","cy","y1"])||0,width:0,height:0}},$x=function(e){return!(!e.getCTM||e.parentNode&&!e.ownerSVGElement||!Ex(e))},Px=function(e,t){if(t){var n,r=e.style;t in Qg&&t!==gx&&(t=mx),r.removeProperty?("ms"!==(n=t.substr(0,2))&&"webkit"!==t.substr(0,6)||(t="-"+t),r.removeProperty("--"===n?t:t.replace(Jg,"-$1").toLowerCase())):r.removeAttribute(t)}},Tx=function(e,t,n,r,i,a){var o=new Cg(e._pt,t,n,0,1,a?lx:sx);return e._pt=o,o.b=r,o.e=i,e._props.push(n),o},Mx={deg:1,rad:1,turn:1},Rx={grid:1,flex:1},Ox=function e(t,n,r,i){var a,o,s,l,u=parseFloat(r)||0,c=(r+"").trim().substr((u+"").length)||"px",d=Yg.style,p=Zg.test(n),h="svg"===t.tagName.toLowerCase(),f=(h?"client":"offset")+(p?"Width":"Height"),m=100,g="px"===i,x="%"===i;if(i===c||!u||Mx[i]||Mx[c])return u;if("px"!==c&&!g&&(u=e(t,n,r,"px")),l=t.getCTM&&$x(t),(x||"%"===c)&&(Qg[n]||~n.indexOf("adius")))return a=l?t.getBBox()[p?"width":"height"]:t[f],$f(x?u/a*m:u/100*a);if(d[p?"width":"height"]=m+(g?c:i),o="rem"!==i&&~n.indexOf("adius")||"em"===i&&t.appendChild&&!h?t:t.parentNode,l&&(o=(t.ownerSVGElement||{}).parentNode),o&&o!==Wg&&o.appendChild||(o=Wg.body),(s=o._gsap)&&x&&s.width&&p&&s.time===Fm.time&&!s.uncache)return $f(u/s.width*m);if(!x||"height"!==n&&"width"!==n)(x||"%"===c)&&!Rx[kx(o,"display")]&&(d.position=kx(t,"position")),o===t&&(d.position="static"),o.appendChild(Yg),a=Yg[f],o.removeChild(Yg),d.position="absolute";else{var y=t.style[n];t.style[n]=m+i,a=t[f],y?t.style[n]=y:Px(t,n)}return p&&x&&((s=Cf(o)).time=Fm.time,s.width=o[f]),$f(g?a*u/m:a&&u?m/a*u:0)},Nx=function(e,t,n,r){var i;return Ug||Sx(),t in tx&&"transform"!==t&&~(t=tx[t]).indexOf(",")&&(t=t.split(",")[0]),Qg[t]&&"transform"!==t?(i=qx(e,r),i="transformOrigin"!==t?i[t]:i.svg?i.origin:Qx(kx(e,gx))+" "+i.zOrigin+"px"):(!(i=e.style[t])||"auto"===i||r||~(i+"").indexOf("calc("))&&(i=Fx[t]&&Fx[t](e,t,n)||kx(e,t)||zf(e,t)||("opacity"===t?1:0)),n&&!~(i+"").trim().indexOf(" ")?Ox(e,t,i,n)+n:i},Ax=function(e,t,n,r){if(!n||"none"===n){var i=jx(t,e,1),a=i&&kx(e,i,1);a&&a!==n?(t=i,n=a):"borderColor"===t&&(n=kx(e,"borderTopColor"))}var o,s,l,u,c,d,p,h,f,m,g,x=new Cg(this._pt,e.style,t,0,1,vg),y=0,b=0;if(x.b=n,x.e=r,n+="","var(--"===(r+="").substring(0,6)&&(r=kx(e,r.substring(4,r.indexOf(")")))),"auto"===r&&(d=e.style[t],e.style[t]=r,r=kx(e,t)||r,d?e.style[t]=d:Px(e,t)),Im(o=[n,r]),r=o[1],l=(n=o[0]).match(tf)||[],(r.match(tf)||[]).length){for(;s=tf.exec(r);)p=s[0],f=r.substring(y,s.index),c?c=(c+1)%5:"rgba("!==f.substr(-5)&&"hsla("!==f.substr(-5)||(c=1),p!==(d=l[b++]||"")&&(u=parseFloat(d)||0,g=d.substr((u+"").length),"="===p.charAt(1)&&(p=Tf(u,p)+g),h=parseFloat(p),m=p.substr((h+"").length),y=tf.lastIndex-m.length,m||(m=m||Th.units[t]||g,y===r.length&&(r+=m,x.e+=m)),g!==m&&(u=Ox(e,t,d,m)||0),x._pt={_next:x._pt,p:f||1===b?f:",",s:u,c:h-u,m:c&&c<4||"zIndex"===t?Math.round:0});x.c=y<r.length?r.substring(y,r.length):""}else x.r="display"===t&&"none"===r?lx:sx;return rf.test(r)&&(x.e=0),this._pt=x,x},Dx={top:"0%",bottom:"100%",left:"0%",right:"100%",center:"50%"},Lx=function(e){var t=e.split(" "),n=t[0],r=t[1]||"50%";return"top"!==n&&"bottom"!==n&&"left"!==r&&"right"!==r||(e=n,n=r,r=e),t[0]=Dx[n]||n,t[1]=Dx[r]||r,t.join(" ")},Ix=function(e,t){if(t.tween&&t.tween._time===t.tween._dur){var n,r,i,a=t.t,o=a.style,s=t.u,l=a._gsap;if("all"===s||!0===s)o.cssText="",r=1;else for(i=(s=s.split(",")).length;--i>-1;)n=s[i],Qg[n]&&(r=1,n="transformOrigin"===n?gx:mx),Px(a,n);r&&(Px(a,mx),l&&(l.svg&&a.removeAttribute("transform"),o.scale=o.rotate=o.translate="none",qx(a,1),l.uncache=1,yx(o)))}},Fx={clearProps:function(e,t,n,r,i){if("isFromStart"!==i.data){var a=e._pt=new Cg(e._pt,t,n,0,0,Ix);return a.u=r,a.pr=-10,a.tween=i,e._props.push(n),1}}},Wx=[1,0,0,1,0,0],Bx={},Ux=function(e){return"matrix(1, 0, 0, 1, 0, 0)"===e||"none"===e||!e},Yx=function(e){var t=kx(e,mx);return Ux(t)?Wx:t.substr(7).match(ef).map($f)},Hx=function(e,t){var n,r,i,a,o=e._gsap||Cf(e),s=e.style,l=Yx(e);return o.svg&&e.getAttribute("transform")?"1,0,0,1,0,0"===(l=[(i=e.transform.baseVal.consolidate().matrix).a,i.b,i.c,i.d,i.e,i.f]).join(",")?Wx:l:(l!==Wx||e.offsetParent||e===Bg||o.svg||(i=s.display,s.display="block",(n=e.parentNode)&&(e.offsetParent||e.getBoundingClientRect().width)||(a=1,r=e.nextElementSibling,Bg.appendChild(e)),l=Yx(e),i?s.display=i:Px(e,"display"),a&&(r?n.insertBefore(e,r):n?n.appendChild(e):Bg.removeChild(e))),t&&l.length>6?[l[0],l[1],l[4],l[5],l[12],l[13]]:l)},Vx=function(e,t,n,r,i,a){var o,s,l,u=e._gsap,c=i||Hx(e,!0),d=u.xOrigin||0,p=u.yOrigin||0,h=u.xOffset||0,f=u.yOffset||0,m=c[0],g=c[1],x=c[2],y=c[3],b=c[4],v=c[5],w=t.split(" "),k=parseFloat(w[0])||0,_=parseFloat(w[1])||0;n?c!==Wx&&(s=m*y-g*x)&&(l=k*(-g/s)+_*(m/s)-(m*v-g*b)/s,k=k*(y/s)+_*(-x/s)+(x*v-y*b)/s,_=l):(k=(o=Ex(e)).x+(~w[0].indexOf("%")?k/100*o.width:k),_=o.y+(~(w[1]||w[0]).indexOf("%")?_/100*o.height:_)),r||!1!==r&&u.smooth?(b=k-d,v=_-p,u.xOffset=h+(b*m+v*x)-b,u.yOffset=f+(b*g+v*y)-v):u.xOffset=u.yOffset=0,u.xOrigin=k,u.yOrigin=_,u.smooth=!!r,u.origin=t,u.originIsAbsolute=!!n,e.style[gx]="0px 0px",a&&(Tx(a,u,"xOrigin",d,k),Tx(a,u,"yOrigin",p,_),Tx(a,u,"xOffset",h,u.xOffset),Tx(a,u,"yOffset",f,u.yOffset)),e.setAttribute("data-svg-origin",k+" "+_)},qx=function(e,t){var n=e._gsap||new Zm(e);if("x"in n&&!t&&!n.uncache)return n;var r,i,a,o,s,l,u,c,d,p,h,f,m,g,x,y,b,v,w,k,_,j,S,C,z,E,$,P,T,M,R,O,N=e.style,A=n.scaleX<0,D="px",L="deg",I=getComputedStyle(e),F=kx(e,gx)||"0";return r=i=a=l=u=c=d=p=h=0,o=s=1,n.svg=!(!e.getCTM||!$x(e)),I.translate&&("none"===I.translate&&"none"===I.scale&&"none"===I.rotate||(N[mx]=("none"!==I.translate?"translate3d("+(I.translate+" 0 0").split(" ").slice(0,3).join(", ")+") ":"")+("none"!==I.rotate?"rotate("+I.rotate+") ":"")+("none"!==I.scale?"scale("+I.scale.split(" ").join(",")+") ":"")+("none"!==I[mx]?I[mx]:"")),N.scale=N.rotate=N.translate="none"),g=Hx(e,n.svg),n.svg&&(n.uncache?(z=e.getBBox(),F=n.xOrigin-z.x+"px "+(n.yOrigin-z.y)+"px",C=""):C=!t&&e.getAttribute("data-svg-origin"),Vx(e,C||F,!!C||n.originIsAbsolute,!1!==n.smooth,g)),f=n.xOrigin||0,m=n.yOrigin||0,g!==Wx&&(v=g[0],w=g[1],k=g[2],_=g[3],r=j=g[4],i=S=g[5],6===g.length?(o=Math.sqrt(v*v+w*w),s=Math.sqrt(_*_+k*k),l=v||w?Kg(w,v)*Gg:0,(d=k||_?Kg(k,_)*Gg+l:0)&&(s*=Math.abs(Math.cos(d*Xg))),n.svg&&(r-=f-(f*v+m*k),i-=m-(f*w+m*_))):(O=g[6],M=g[7],$=g[8],P=g[9],T=g[10],R=g[11],r=g[12],i=g[13],a=g[14],u=(x=Kg(O,T))*Gg,x&&(C=j*(y=Math.cos(-x))+$*(b=Math.sin(-x)),z=S*y+P*b,E=O*y+T*b,$=j*-b+$*y,P=S*-b+P*y,T=O*-b+T*y,R=M*-b+R*y,j=C,S=z,O=E),c=(x=Kg(-k,T))*Gg,x&&(y=Math.cos(-x),R=_*(b=Math.sin(-x))+R*y,v=C=v*y-$*b,w=z=w*y-P*b,k=E=k*y-T*b),l=(x=Kg(w,v))*Gg,x&&(C=v*(y=Math.cos(x))+w*(b=Math.sin(x)),z=j*y+S*b,w=w*y-v*b,S=S*y-j*b,v=C,j=z),u&&Math.abs(u)+Math.abs(l)>359.9&&(u=l=0,c=180-c),o=$f(Math.sqrt(v*v+w*w+k*k)),s=$f(Math.sqrt(S*S+O*O)),x=Kg(j,S),d=Math.abs(x)>2e-4?x*Gg:0,h=R?1/(R<0?-R:R):0),n.svg&&(C=e.getAttribute("transform"),n.forceCSS=e.setAttribute("transform","")||!Ux(kx(e,mx)),C&&e.setAttribute("transform",C))),Math.abs(d)>90&&Math.abs(d)<270&&(A?(o*=-1,d+=l<=0?180:-180,l+=l<=0?180:-180):(s*=-1,d+=d<=0?180:-180)),t=t||n.uncache,n.x=r-((n.xPercent=r&&(!t&&n.xPercent||(Math.round(e.offsetWidth/2)===Math.round(-r)?-50:0)))?e.offsetWidth*n.xPercent/100:0)+D,n.y=i-((n.yPercent=i&&(!t&&n.yPercent||(Math.round(e.offsetHeight/2)===Math.round(-i)?-50:0)))?e.offsetHeight*n.yPercent/100:0)+D,n.z=a+D,n.scaleX=$f(o),n.scaleY=$f(s),n.rotation=$f(l)+L,n.rotationX=$f(u)+L,n.rotationY=$f(c)+L,n.skewX=d+L,n.skewY=p+L,n.transformPerspective=h+D,(n.zOrigin=parseFloat(F.split(" ")[2])||!t&&n.zOrigin||0)&&(N[gx]=Qx(F)),n.xOffset=n.yOffset=0,n.force3D=Th.force3D,n.renderTransform=n.svg?ty:qg?ey:Xx,n.uncache=0,n},Qx=function(e){return(e=e.split(" "))[0]+" "+e[1]},Gx=function(e,t,n){var r=hm(t);return $f(parseFloat(t)+parseFloat(Ox(e,"x",n+"px",r)))+r},Xx=function(e,t){t.z="0px",t.rotationY=t.rotationX="0deg",t.force3D=0,ey(e,t)},Kx="0deg",Jx="0px",Zx=") ",ey=function(e,t){var n=t||this,r=n.xPercent,i=n.yPercent,a=n.x,o=n.y,s=n.z,l=n.rotation,u=n.rotationY,c=n.rotationX,d=n.skewX,p=n.skewY,h=n.scaleX,f=n.scaleY,m=n.transformPerspective,g=n.force3D,x=n.target,y=n.zOrigin,b="",v="auto"===g&&e&&1!==e||!0===g;if(y&&(c!==Kx||u!==Kx)){var w,k=parseFloat(u)*Xg,_=Math.sin(k),j=Math.cos(k);k=parseFloat(c)*Xg,w=Math.cos(k),a=Gx(x,a,_*w*-y),o=Gx(x,o,-Math.sin(k)*-y),s=Gx(x,s,j*w*-y+y)}m!==Jx&&(b+="perspective("+m+Zx),(r||i)&&(b+="translate("+r+"%, "+i+"%) "),(v||a!==Jx||o!==Jx||s!==Jx)&&(b+=s!==Jx||v?"translate3d("+a+", "+o+", "+s+") ":"translate("+a+", "+o+Zx),l!==Kx&&(b+="rotate("+l+Zx),u!==Kx&&(b+="rotateY("+u+Zx),c!==Kx&&(b+="rotateX("+c+Zx),d===Kx&&p===Kx||(b+="skew("+d+", "+p+Zx),1===h&&1===f||(b+="scale("+h+", "+f+Zx),x.style[mx]=b||"translate(0, 0)"},ty=function(e,t){var n,r,i,a,o,s=t||this,l=s.xPercent,u=s.yPercent,c=s.x,d=s.y,p=s.rotation,h=s.skewX,f=s.skewY,m=s.scaleX,g=s.scaleY,x=s.target,y=s.xOrigin,b=s.yOrigin,v=s.xOffset,w=s.yOffset,k=s.forceCSS,_=parseFloat(c),j=parseFloat(d);p=parseFloat(p),h=parseFloat(h),(f=parseFloat(f))&&(h+=f=parseFloat(f),p+=f),p||h?(p*=Xg,h*=Xg,n=Math.cos(p)*m,r=Math.sin(p)*m,i=Math.sin(p-h)*-g,a=Math.cos(p-h)*g,h&&(f*=Xg,o=Math.tan(h-f),i*=o=Math.sqrt(1+o*o),a*=o,f&&(o=Math.tan(f),n*=o=Math.sqrt(1+o*o),r*=o)),n=$f(n),r=$f(r),i=$f(i),a=$f(a)):(n=m,a=g,r=i=0),(_&&!~(c+"").indexOf("px")||j&&!~(d+"").indexOf("px"))&&(_=Ox(x,"x",c,"px"),j=Ox(x,"y",d,"px")),(y||b||v||w)&&(_=$f(_+y-(y*n+b*i)+v),j=$f(j+b-(y*r+b*a)+w)),(l||u)&&(o=x.getBBox(),_=$f(_+l/100*o.width),j=$f(j+u/100*o.height)),o="matrix("+n+","+r+","+i+","+a+","+_+","+j+")",x.setAttribute("transform",o),k&&(x.style[mx]=o)},ny=function(e,t,n,r,i){var a,o,s=360,l=Wh(i),u=parseFloat(i)*(l&&~i.indexOf("rad")?Gg:1)-r,c=r+u+"deg";return l&&("short"===(a=i.split("_")[1])&&(u%=s)!==u%180&&(u+=u<0?s:-360),"cw"===a&&u<0?u=(u+36e9)%s-~~(u/s)*s:"ccw"===a&&u>0&&(u=(u-36e9)%s-~~(u/s)*s)),e._pt=o=new Cg(e._pt,t,n,r,u,rx),o.e=c,o.u="deg",e._props.push(n),o},ry=function(e,t){for(var n in t)e[n]=t[n];return e},iy=function(e,t,n){var r,i,a,o,s,l,u,c=ry({},n._gsap),d=n.style;for(i in c.svg?(a=n.getAttribute("transform"),n.setAttribute("transform",""),d[mx]=t,r=qx(n,1),Px(n,mx),n.setAttribute("transform",a)):(a=getComputedStyle(n)[mx],d[mx]=t,r=qx(n,1),d[mx]=a),Qg)(a=c[i])!==(o=r[i])&&"perspective,force3D,transformOrigin,svgOrigin".indexOf(i)<0&&(s=hm(a)!==(u=hm(o))?Ox(n,i,a,u):parseFloat(a),l=parseFloat(o),e._pt=new Cg(e._pt,r,i,s,l-s,nx),e._pt.u=u||0,e._props.push(i));ry(r,c)};Ef("padding,margin,Width,Radius",function(e,t){var n="Top",r="Right",i="Bottom",a="Left",o=(t<3?[n,r,i,a]:[n+a,n+r,i+r,i+a]).map(function(n){return t<2?e+n:"border"+n+e});Fx[t>1?"border"+e:e]=function(e,t,n,r,i){var a,s;if(arguments.length<4)return a=o.map(function(t){return Nx(e,t,n)}),5===(s=a.join(" ")).split(a[0]).length?a[0]:s;a=(r+"").split(" "),s={},o.forEach(function(e,t){return s[e]=a[t]=a[t]||a[(t-1)/2|0]}),e.init(t,s,i)}});var ay,oy,sy,ly={name:"css",register:Sx,targetTest:function(e){return e.style&&e.nodeType},init:function(e,t,n,r,i){var a,o,s,l,u,c,d,p,h,f,m,g,x,y,b,v,w,k=this._props,_=e.style,j=n.vars.startAt;for(d in Ug||Sx(),this.styles=this.styles||vx(e),v=this.styles.props,this.tween=n,t)if("autoRound"!==d&&(o=t[d],!vf[d]||!og(d,t,n,r,e,i)))if(u=typeof o,c=Fx[d],"function"===u&&(u=typeof(o=o.call(n,r,e,i))),"string"===u&&~o.indexOf("random(")&&(o=jm(o)),c)c(this,e,d,o,n)&&(b=1);else if("--"===d.substr(0,2))a=(getComputedStyle(e).getPropertyValue(d)+"").trim(),o+="",Dm.lastIndex=0,Dm.test(a)||(p=hm(a),(h=hm(o))?p!==h&&(a=Ox(e,d,a,h)+h):p&&(o+=p)),this.add(_,"setProperty",a,o,r,i,0,0,d),k.push(d),v.push(d,0,_[d]);else if("undefined"!==u){if(j&&d in j?(a="function"==typeof j[d]?j[d].call(n,r,e,i):j[d],Wh(a)&&~a.indexOf("random(")&&(a=jm(a)),hm(a+"")||"auto"===a||(a+=Th.units[d]||hm(Nx(e,d))||""),"="===(a+"").charAt(1)&&(a=Nx(e,d))):a=Nx(e,d),l=parseFloat(a),(f="string"===u&&"="===o.charAt(1)&&o.substr(0,2))&&(o=o.substr(2)),s=parseFloat(o),d in tx&&("autoAlpha"===d&&(1===l&&"hidden"===Nx(e,"visibility")&&s&&(l=0),v.push("visibility",0,_.visibility),Tx(this,_,"visibility",l?"inherit":"hidden",s?"inherit":"hidden",!s)),"scale"!==d&&"transform"!==d&&~(d=tx[d]).indexOf(",")&&(d=d.split(",")[0])),m=d in Qg){if(this.styles.save(d),w=o,"string"===u&&"var(--"===o.substring(0,6)){if("calc("===(o=kx(e,o.substring(4,o.indexOf(")")))).substring(0,5)){var S=e.style.perspective;e.style.perspective=o,o=kx(e,"perspective"),S?e.style.perspective=S:Px(e,"perspective")}s=parseFloat(o)}if(g||((x=e._gsap).renderTransform&&!t.parseTransform||qx(e,t.parseTransform),y=!1!==t.smoothOrigin&&x.smooth,(g=this._pt=new Cg(this._pt,_,mx,0,1,x.renderTransform,x,0,-1)).dep=1),"scale"===d)this._pt=new Cg(this._pt,x,"scaleY",x.scaleY,(f?Tf(x.scaleY,f+s):s)-x.scaleY||0,nx),this._pt.u=0,k.push("scaleY",d),d+="X";else{if("transformOrigin"===d){v.push(gx,0,_[gx]),o=Lx(o),x.svg?Vx(e,o,0,y,0,this):((h=parseFloat(o.split(" ")[2])||0)!==x.zOrigin&&Tx(this,x,"zOrigin",x.zOrigin,h),Tx(this,_,d,Qx(a),Qx(o)));continue}if("svgOrigin"===d){Vx(e,o,1,y,0,this);continue}if(d in Bx){ny(this,x,d,l,f?Tf(l,f+o):o);continue}if("smoothOrigin"===d){Tx(this,x,"smooth",x.smooth,o);continue}if("force3D"===d){x[d]=o;continue}if("transform"===d){iy(this,o,e);continue}}}else d in _||(d=jx(d)||d);if(m||(s||0===s)&&(l||0===l)&&!ex.test(o)&&d in _)s||(s=0),(p=(a+"").substr((l+"").length))!==(h=hm(o)||(d in Th.units?Th.units[d]:p))&&(l=Ox(e,d,a,h)),this._pt=new Cg(this._pt,m?x:_,d,l,(f?Tf(l,f+s):s)-l,m||"px"!==h&&"zIndex"!==d||!1===t.autoRound?nx:ox),this._pt.u=h||0,m&&w!==o?(this._pt.b=a,this._pt.e=w,this._pt.r=ax):p!==h&&"%"!==h&&(this._pt.b=a,this._pt.r=ix);else if(d in _)Ax.call(this,e,d,a,f?f+o:o);else if(d in e)this.add(e,d,a||e[d],f?f+o:o,r,i);else if("parseTransform"!==d){cf(d,o);continue}m||(d in _?v.push(d,0,_[d]):"function"==typeof e[d]?v.push(d,2,e[d]()):v.push(d,1,a||e[d])),k.push(d)}b&&Sg(this)},render:function(e,t){if(t.tween._time||!Vg())for(var n=t._pt;n;)n.r(e,n.d),n=n._next;else t.styles.revert()},get:Nx,aliases:tx,getSetter:function(e,t,n){var r=tx[t];return r&&r.indexOf(",")<0&&(t=r),t in Qg&&t!==gx&&(e._gsap.x||Nx(e,"x"))?n&&Hg===n?"scale"===t?px:dx:(Hg=n||{})&&("scale"===t?hx:fx):e.style&&!Yh(e.style[t])?ux:~t.indexOf("-")?cx:xg(e,t)},core:{_removeProperty:Px,_getMatrix:Hx}};Ig.utils.checkPrefix=jx,Ig.core.getStyleSaver=vx,sy=Ef((ay="x,y,z,scale,scaleX,scaleY,xPercent,yPercent")+","+(oy="rotation,rotationX,rotationY,skewX,skewY")+",transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective",function(e){Qg[e]=1}),Ef(oy,function(e){Th.units[e]="deg",Bx[e]=1}),tx[sy[13]]=ay+","+oy,Ef("0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY",function(e){var t=e.split(":");tx[t[1]]=sy[t[0]]}),Ef("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective",function(e){Th.units[e]="px"}),Ig.registerPlugin(ly);var uy=Ig.registerPlugin(ly)||Ig;uy.core.Tween;const cy=kn.footer`
  margin-top: 48px;
  padding: 48px 28px 36px;
  background: linear-gradient(
    to bottom,
    rgba(245, 251, 247, 0.45),
    rgba(238, 244, 241, 0.92)
  );
  border-top: 1px solid rgba(20, 60, 40, 0.06);

  @media (max-width: 768px) {
    margin-top: 32px;
    padding: 36px 20px 28px;
  }
`,dy=kn.div`
  max-width: 1100px;
  margin: 0 auto;

  display: grid;
  grid-template-columns: 1fr auto 1fr;
  align-items: center;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 18px;
    text-align: center;
  }
`,py=kn.div`
  display: flex;
  flex-direction: column;

  @media (max-width: 768px) {
    align-items: center;
  }
`,hy=kn.div`
  font-size: 18px;
  font-weight: 600;
  color: #2a3a32;
`,fy=kn.div`
  font-size: 13px;
  color: #6c7c73;
`,my=kn.div`
  display: flex;
  justify-content: center;
  gap: 24px;
`,gy=kn.a`
  font-size: 13px;
  color: #6c7c73;
  text-decoration: none;
  background: none;
  border: none;
  cursor: pointer;
  padding: 0;
  font-family: inherit;

  &:hover {
    text-decoration: underline;
  }

  &:focus-visible {
    outline: 2px solid rgba(31, 95, 74, 0.28);
    outline-offset: 4px;
    border-radius: 6px;
  }
`,xy=kn.div`
  display: flex;
  justify-content: flex-end;
  gap: 14px;

  @media (max-width: 768px) {
    justify-content: center;
  }
`,yy=kn.a`
  width: 38px;
  height: 38px;
  border-radius: 50%;

  display: flex;
  align-items: center;
  justify-content: center;

  background: rgba(255, 255, 255, 0.7);
  backdrop-filter: blur(6px);

  border: 1px solid rgba(20, 60, 40, 0.06);
  color: #2a3a32;

  transition: 0.25s ease;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 8px 18px rgba(0, 0, 0, 0.08);
  }

  &:focus-visible {
    outline: 2px solid rgba(31, 95, 74, 0.28);
    outline-offset: 3px;
  }
`,by=kn.div`
  padding: 2rem;
  background: white;
  border-radius: 12px;
  max-height: 80vh;
  overflow-y: auto;
`,vy=kn.h2`
  font-size: 1.8rem;
  font-weight: 600;
  color: #2c3e50;
  margin-bottom: 1.5rem;
  text-align: center;
`,wy=kn.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`,ky=kn.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`,_y=kn.h3`
  font-size: 1.2rem;
  font-weight: 600;
  color: #34495e;
  margin-bottom: 0.5rem;
`,jy=kn.p`
  font-size: 1rem;
  line-height: 1.6;
  color: #555;
  margin: 0;
`,Sy=()=>d.jsxs(by,{children:[d.jsx(vy,{children:"Privacy Policy"}),d.jsxs(wy,{children:[d.jsx(ky,{children:d.jsx(jy,{children:"We respect your privacy and are committed to protecting your personal information."})}),d.jsxs(ky,{children:[d.jsx(_y,{children:"Information We Collect"}),d.jsx(jy,{children:"Any details shared through this website (such as name, contact number, email, health-related information for sessions, or inquiries) are used only for communication, service delivery, and appointment purposes."})]}),d.jsxs(ky,{children:[d.jsx(_y,{children:"How We Use Your Information"}),d.jsx(jy,{children:"Your personal information is used solely for:"}),d.jsxs(jy,{children:["• Communication regarding services and appointments",d.jsx("br",{}),"• Service delivery and session coordination",d.jsx("br",{}),"• Responding to your inquiries"]})]}),d.jsxs(ky,{children:[d.jsx(_y,{children:"Data Protection"}),d.jsx(jy,{children:"We do not sell, share, or distribute your personal data to third parties. Your information is kept secure and confidential."})]}),d.jsxs(ky,{children:[d.jsx(_y,{children:"Your Consent"}),d.jsx(jy,{children:"By using this website, you agree to this privacy policy."})]})]})]}),Cy=kn.div`
  padding: 2rem;
  background: white;
  border-radius: 12px;
  max-height: 80vh;
  overflow-y: auto;
`,zy=kn.h2`
  font-size: 1.8rem;
  font-weight: 600;
  color: #2c3e50;
  margin-bottom: 1.5rem;
  text-align: center;
`,Ey=kn.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`,$y=kn.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`,Py=kn.p`
  font-size: 1rem;
  line-height: 1.6;
  color: #555;
  margin: 0;
`,Ty=()=>d.jsxs(Cy,{children:[d.jsx(zy,{children:"Terms & Conditions"}),d.jsxs(Ey,{children:[d.jsxs($y,{children:[d.jsx(Py,{children:"• All yoga sessions and wellness services are provided for general health and well-being purposes."}),d.jsx(Py,{children:"• Clients should inform about any medical conditions, injuries, or pregnancy before starting sessions."}),d.jsx(Py,{children:"• Results may vary from person to person."}),d.jsx(Py,{children:"• Payments once made are non-refundable unless stated otherwise."}),d.jsx(Py,{children:"• Session schedules are subject to availability and prior booking."}),d.jsx(Py,{children:"• The instructor is not responsible for injuries caused due to incorrect practice outside guided sessions."})]}),d.jsx($y,{children:d.jsx(Py,{children:"By booking or using our services, you agree to these terms and conditions."})})]})]});function My(){const[e,t]=p.useState(!1),[n,r]=p.useState(!1);return d.jsxs(cy,{children:[d.jsxs(dy,{children:[d.jsxs(py,{children:[d.jsx(hy,{children:"Balance with Shree"}),d.jsx(fy,{children:"Yoga • Nutrition • Ayurveda"})]}),d.jsxs(my,{children:[d.jsx(gy,{as:"button",onClick:()=>t(!0),children:"Privacy Policy"}),d.jsx(gy,{as:"button",onClick:()=>r(!0),children:"Terms of Service"})]}),d.jsxs(xy,{children:[d.jsx(yy,{href:to,target:"_blank",rel:"noopener noreferrer","aria-label":"Visit Balance with Shree on Instagram",children:d.jsx(oa,{size:16})}),d.jsx(yy,{href:ro(),target:"_blank",rel:"noopener noreferrer","aria-label":"Chat with Balance with Shree on WhatsApp",children:d.jsx(ca,{size:16})}),d.jsx(yy,{href:`mailto:${Xa}`,"aria-label":"Send an email to Balance with Shree",children:d.jsx(la,{size:16})})]})]}),d.jsx(Ra,{isOpen:e,onClose:()=>t(!1),children:d.jsx(Sy,{})}),d.jsx(Ra,{isOpen:n,onClose:()=>r(!1),children:d.jsx(Ty,{})})]})}const Ry=kn.a`
  position: fixed;
  right: 18px;
  bottom: max(14px, env(safe-area-inset-bottom));
  width: 58px;
  height: 58px;
  background: linear-gradient(180deg, #1f5f4a 0%, #1a513f 100%);
  color: white;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  z-index: 1000;
  border: 1px solid rgba(255, 255, 255, 0.68);
  box-shadow: 0 18px 36px rgba(31, 95, 74, 0.28);
  transition:
    transform 0.3s ease,
    box-shadow 0.3s ease;

  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 22px 40px rgba(31, 95, 74, 0.34);
  }

  &:hover span {
    opacity: 1;
    transform: translateX(0);
  }

  &:focus-visible {
    outline: none;
    box-shadow:
      0 0 0 3px rgba(31, 95, 74, 0.14),
      0 0 0 1px rgba(31, 95, 74, 0.68);
  }

  @media (max-width: 768px) {
    right: 10px;
    bottom: max(18px, calc(env(safe-area-inset-bottom) + 8px));
    width: 50px;
    height: 50px;
    box-shadow: 0 14px 24px rgba(31, 95, 74, 0.22);
  }
`,Oy=kn.span`
  position: absolute;
  right: 74px;
  background: #ffffff;
  color: #1f5f4a;
  padding: 8px 14px;
  border-radius: 999px;
  font-size: 13px;
  white-space: nowrap;

  opacity: 0;
  transform: translateX(6px);
  transition: all 0.3s ease;

  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.12);

  @media (max-width: 768px) {
    display: none;
  }
`;function Ny(){return d.jsxs(Ry,{href:ro(Va),target:"_blank",rel:"noopener noreferrer","aria-label":"Chat on WhatsApp",children:[d.jsx(ua,{size:24,strokeWidth:1.9}),d.jsx(Oy,{children:"Chat on WhatsApp"})]})}const Ay={entranceDistance:120,leftOpacity:.22,rightOpacity:.18,leftParallaxIntensity:.036,rightParallaxIntensity:.06},Dy={entranceDistance:56,opacity:.16,leftParallaxIntensity:.022,rightParallaxIntensity:.03},Ly=()=>{const e=p.useRef(null),t=p.useRef(null);return p.useEffect(()=>{if(window.matchMedia("(prefers-reduced-motion: reduce)").matches)return;const n=e.current,r=t.current;if(!n||!r)return;const i=window.innerWidth<768,a=i?Dy.entranceDistance:Ay.entranceDistance,o=i?Dy.opacity:Ay.rightOpacity,s=i?Dy.opacity:Ay.leftOpacity,l=i?Dy.rightParallaxIntensity:Ay.rightParallaxIntensity,u=i?Dy.leftParallaxIntensity:Ay.leftParallaxIntensity,c=i?1.1:1.4,d=i?1.6:2.2;uy.set(n,{x:a,opacity:0}),uy.set(r,{x:-a,opacity:0});const p=uy.timeline({delay:.6});p.to(n,{x:0,opacity:o,duration:c,ease:"power3.out"},0).to(r,{x:0,opacity:s,duration:c,ease:"power3.out"},.08);const h=uy.quickTo(n,"y",{duration:d,ease:"power3.out"}),f=uy.quickTo(r,"y",{duration:d,ease:"power3.out"}),m=()=>{h(window.scrollY*l),f(window.scrollY*u)};return m(),window.addEventListener("scroll",m,{passive:!0}),()=>{window.removeEventListener("scroll",m),p.kill()}},[]),d.jsxs("div",{className:"site-wrapper",children:[d.jsx("div",{ref:e,className:"leaf-background leaf-right",children:d.jsx("div",{className:"leaf-inner"})}),d.jsx("div",{ref:t,className:"leaf-background leaf-left",children:d.jsx("div",{className:"leaf-inner"})}),d.jsxs("div",{className:"content",children:[d.jsx(Wi,{}),d.jsx(Xp,{}),d.jsx(My,{}),d.jsx(Ny,{})]})]})};z.createRoot(document.getElementById("root")).render(d.jsx(h.StrictMode,{children:d.jsx($n,{children:d.jsxs(pn,{theme:{colors:{primary:"#1f5f4a",secondary:"#7aa08f",bg:"#E1F1EB",dark:"#1f2a24",muted:"#5f6f66",white:"#ffffff",ivory:"#fbf9f3",textPrimary:"#1f2a24",textSecondary:"#2e6b55",textMuted:"#5f6f66",textWhite:"#ffffff",backgroundSoft:"#f4faf6",backgroundLight:"#ffffff",bgPrimary:"#f5fbf7",bgSecondary:"#edf6f1",borderLight:"rgba(31, 95, 74, 0.12)",primaryActive:"#1f5f4a",primaryActiveLight:"rgba(31, 95, 74, 0.14)",primaryActiveLightest:"rgba(31, 95, 74, 0.08)",warmAccent:"#d9b889"},fonts:{heading:"'Cormorant Garamond', serif",body:"'Inter', sans-serif",accent:"'Playfair Display', serif"},spacing:{xsmall:"4px",small:"8px",base:"12px",medium:"16px",large:"24px",xlarge:"32px",section:"120px"},radius:{small:"4px",medium:"8px",large:"12px",xl:"24px",pill:"999px"},shadows:{card:"0 18px 48px rgba(15, 60, 40, 0.12)",soft:"0 12px 28px rgba(15, 60, 40, 0.08)",button:"0 16px 36px rgba(31, 95, 74, 0.24)"}},children:[d.jsx(En,{}),d.jsx(mi,{children:d.jsx(Ly,{})})]})})}));
