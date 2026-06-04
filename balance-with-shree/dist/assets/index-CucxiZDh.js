function e(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}!function(){const e=document.createElement("link").relList;if(!(e&&e.supports&&e.supports("modulepreload"))){for(const e of document.querySelectorAll('link[rel="modulepreload"]'))t(e);new MutationObserver(e=>{for(const n of e)if("childList"===n.type)for(const e of n.addedNodes)"LINK"===e.tagName&&"modulepreload"===e.rel&&t(e)}).observe(document,{childList:!0,subtree:!0})}function t(e){if(e.ep)return;e.ep=!0;const t=function(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),"use-credentials"===e.crossOrigin?t.credentials="include":"anonymous"===e.crossOrigin?t.credentials="omit":t.credentials="same-origin",t}(e);fetch(e.href,t)}}();var t,n,r,i,a={exports:{}},o={},s={exports:{}},l={};function u(){if(t)return l;t=1;var e=Symbol.for("react.element"),n=Symbol.for("react.portal"),r=Symbol.for("react.fragment"),i=Symbol.for("react.strict_mode"),a=Symbol.for("react.profiler"),o=Symbol.for("react.provider"),s=Symbol.for("react.context"),u=Symbol.for("react.forward_ref"),c=Symbol.for("react.suspense"),d=Symbol.for("react.memo"),h=Symbol.for("react.lazy"),p=Symbol.iterator;var f={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},m=Object.assign,g={};function y(e,t,n){this.props=e,this.context=t,this.refs=g,this.updater=n||f}function x(){}function v(e,t,n){this.props=e,this.context=t,this.refs=g,this.updater=n||f}y.prototype.isReactComponent={},y.prototype.setState=function(e,t){if("object"!=typeof e&&"function"!=typeof e&&null!=e)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")},y.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},x.prototype=y.prototype;var b=v.prototype=new x;b.constructor=v,m(b,y.prototype),b.isPureReactComponent=!0;var w=Array.isArray,k=Object.prototype.hasOwnProperty,_={current:null},S={key:!0,ref:!0,__self:!0,__source:!0};function j(t,n,r){var i,a={},o=null,s=null;if(null!=n)for(i in void 0!==n.ref&&(s=n.ref),void 0!==n.key&&(o=""+n.key),n)k.call(n,i)&&!S.hasOwnProperty(i)&&(a[i]=n[i]);var l=arguments.length-2;if(1===l)a.children=r;else if(1<l){for(var u=Array(l),c=0;c<l;c++)u[c]=arguments[c+2];a.children=u}if(t&&t.defaultProps)for(i in l=t.defaultProps)void 0===a[i]&&(a[i]=l[i]);return{$$typeof:e,type:t,key:o,ref:s,props:a,_owner:_.current}}function C(t){return"object"==typeof t&&null!==t&&t.$$typeof===e}var T=/\/+/g;function P(e,t){return"object"==typeof e&&null!==e&&null!=e.key?function(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(e){return t[e]})}(""+e.key):t.toString(36)}function E(t,r,i,a,o){var s=typeof t;"undefined"!==s&&"boolean"!==s||(t=null);var l=!1;if(null===t)l=!0;else switch(s){case"string":case"number":l=!0;break;case"object":switch(t.$$typeof){case e:case n:l=!0}}if(l)return o=o(l=t),t=""===a?"."+P(l,0):a,w(o)?(i="",null!=t&&(i=t.replace(T,"$&/")+"/"),E(o,r,i,"",function(e){return e})):null!=o&&(C(o)&&(o=function(t,n){return{$$typeof:e,type:t.type,key:n,ref:t.ref,props:t.props,_owner:t._owner}}(o,i+(!o.key||l&&l.key===o.key?"":(""+o.key).replace(T,"$&/")+"/")+t)),r.push(o)),1;if(l=0,a=""===a?".":a+":",w(t))for(var u=0;u<t.length;u++){var c=a+P(s=t[u],u);l+=E(s,r,i,c,o)}else if(c=function(e){return null===e||"object"!=typeof e?null:"function"==typeof(e=p&&e[p]||e["@@iterator"])?e:null}(t),"function"==typeof c)for(t=c.call(t),u=0;!(s=t.next()).done;)l+=E(s=s.value,r,i,c=a+P(s,u++),o);else if("object"===s)throw r=String(t),Error("Objects are not valid as a React child (found: "+("[object Object]"===r?"object with keys {"+Object.keys(t).join(", ")+"}":r)+"). If you meant to render a collection of children, use an array instead.");return l}function M(e,t,n){if(null==e)return e;var r=[],i=0;return E(e,r,"","",function(e){return t.call(n,e,i++)}),r}function z(e){if(-1===e._status){var t=e._result;(t=t()).then(function(t){0!==e._status&&-1!==e._status||(e._status=1,e._result=t)},function(t){0!==e._status&&-1!==e._status||(e._status=2,e._result=t)}),-1===e._status&&(e._status=0,e._result=t)}if(1===e._status)return e._result.default;throw e._result}var A={current:null},R={transition:null},$={ReactCurrentDispatcher:A,ReactCurrentBatchConfig:R,ReactCurrentOwner:_};function D(){throw Error("act(...) is not supported in production builds of React.")}return l.Children={map:M,forEach:function(e,t,n){M(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return M(e,function(){t++}),t},toArray:function(e){return M(e,function(e){return e})||[]},only:function(e){if(!C(e))throw Error("React.Children.only expected to receive a single React element child.");return e}},l.Component=y,l.Fragment=r,l.Profiler=a,l.PureComponent=v,l.StrictMode=i,l.Suspense=c,l.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=$,l.act=D,l.cloneElement=function(t,n,r){if(null==t)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var i=m({},t.props),a=t.key,o=t.ref,s=t._owner;if(null!=n){if(void 0!==n.ref&&(o=n.ref,s=_.current),void 0!==n.key&&(a=""+n.key),t.type&&t.type.defaultProps)var l=t.type.defaultProps;for(u in n)k.call(n,u)&&!S.hasOwnProperty(u)&&(i[u]=void 0===n[u]&&void 0!==l?l[u]:n[u])}var u=arguments.length-2;if(1===u)i.children=r;else if(1<u){l=Array(u);for(var c=0;c<u;c++)l[c]=arguments[c+2];i.children=l}return{$$typeof:e,type:t.type,key:a,ref:o,props:i,_owner:s}},l.createContext=function(e){return(e={$$typeof:s,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null}).Provider={$$typeof:o,_context:e},e.Consumer=e},l.createElement=j,l.createFactory=function(e){var t=j.bind(null,e);return t.type=e,t},l.createRef=function(){return{current:null}},l.forwardRef=function(e){return{$$typeof:u,render:e}},l.isValidElement=C,l.lazy=function(e){return{$$typeof:h,_payload:{_status:-1,_result:e},_init:z}},l.memo=function(e,t){return{$$typeof:d,type:e,compare:void 0===t?null:t}},l.startTransition=function(e){var t=R.transition;R.transition={};try{e()}finally{R.transition=t}},l.unstable_act=D,l.useCallback=function(e,t){return A.current.useCallback(e,t)},l.useContext=function(e){return A.current.useContext(e)},l.useDebugValue=function(){},l.useDeferredValue=function(e){return A.current.useDeferredValue(e)},l.useEffect=function(e,t){return A.current.useEffect(e,t)},l.useId=function(){return A.current.useId()},l.useImperativeHandle=function(e,t,n){return A.current.useImperativeHandle(e,t,n)},l.useInsertionEffect=function(e,t){return A.current.useInsertionEffect(e,t)},l.useLayoutEffect=function(e,t){return A.current.useLayoutEffect(e,t)},l.useMemo=function(e,t){return A.current.useMemo(e,t)},l.useReducer=function(e,t,n){return A.current.useReducer(e,t,n)},l.useRef=function(e){return A.current.useRef(e)},l.useState=function(e){return A.current.useState(e)},l.useSyncExternalStore=function(e,t,n){return A.current.useSyncExternalStore(e,t,n)},l.useTransition=function(){return A.current.useTransition()},l.version="18.3.1",l}function c(){return n||(n=1,s.exports=u()),s.exports}var d=(i||(i=1,a.exports=function(){if(r)return o;r=1;var e=c(),t=Symbol.for("react.element"),n=Symbol.for("react.fragment"),i=Object.prototype.hasOwnProperty,a=e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,s={key:!0,ref:!0,__self:!0,__source:!0};function l(e,n,r){var o,l={},u=null,c=null;for(o in void 0!==r&&(u=""+r),void 0!==n.key&&(u=""+n.key),void 0!==n.ref&&(c=n.ref),n)i.call(n,o)&&!s.hasOwnProperty(o)&&(l[o]=n[o]);if(e&&e.defaultProps)for(o in n=e.defaultProps)void 0===l[o]&&(l[o]=n[o]);return{$$typeof:t,type:e,key:u,ref:c,props:l,_owner:a.current}}return o.Fragment=n,o.jsx=l,o.jsxs=l,o}()),a.exports),h=c();const p=e(h);var f,m,g,y,x,v={},b={exports:{}},w={},k={exports:{}},_={};function S(){return m||(m=1,k.exports=(f||(f=1,function(e){function t(e,t){var n=e.length;e.push(t);e:for(;0<n;){var r=n-1>>>1,a=e[r];if(!(0<i(a,t)))break e;e[r]=t,e[n]=a,n=r}}function n(e){return 0===e.length?null:e[0]}function r(e){if(0===e.length)return null;var t=e[0],n=e.pop();if(n!==t){e[0]=n;e:for(var r=0,a=e.length,o=a>>>1;r<o;){var s=2*(r+1)-1,l=e[s],u=s+1,c=e[u];if(0>i(l,n))u<a&&0>i(c,l)?(e[r]=c,e[u]=n,r=u):(e[r]=l,e[s]=n,r=s);else{if(!(u<a&&0>i(c,n)))break e;e[r]=c,e[u]=n,r=u}}}return t}function i(e,t){var n=e.sortIndex-t.sortIndex;return 0!==n?n:e.id-t.id}if("object"==typeof performance&&"function"==typeof performance.now){var a=performance;e.unstable_now=function(){return a.now()}}else{var o=Date,s=o.now();e.unstable_now=function(){return o.now()-s}}var l=[],u=[],c=1,d=null,h=3,p=!1,f=!1,m=!1,g="function"==typeof setTimeout?setTimeout:null,y="function"==typeof clearTimeout?clearTimeout:null,x="undefined"!=typeof setImmediate?setImmediate:null;function v(e){for(var i=n(u);null!==i;){if(null===i.callback)r(u);else{if(!(i.startTime<=e))break;r(u),i.sortIndex=i.expirationTime,t(l,i)}i=n(u)}}function b(e){if(m=!1,v(e),!f)if(null!==n(l))f=!0,A(w);else{var t=n(u);null!==t&&R(b,t.startTime-e)}}function w(t,i){f=!1,m&&(m=!1,y(j),j=-1),p=!0;var a=h;try{for(v(i),d=n(l);null!==d&&(!(d.expirationTime>i)||t&&!P());){var o=d.callback;if("function"==typeof o){d.callback=null,h=d.priorityLevel;var s=o(d.expirationTime<=i);i=e.unstable_now(),"function"==typeof s?d.callback=s:d===n(l)&&r(l),v(i)}else r(l);d=n(l)}if(null!==d)var c=!0;else{var g=n(u);null!==g&&R(b,g.startTime-i),c=!1}return c}finally{d=null,h=a,p=!1}}"undefined"!=typeof navigator&&void 0!==navigator.scheduling&&void 0!==navigator.scheduling.isInputPending&&navigator.scheduling.isInputPending.bind(navigator.scheduling);var k,_=!1,S=null,j=-1,C=5,T=-1;function P(){return!(e.unstable_now()-T<C)}function E(){if(null!==S){var t=e.unstable_now();T=t;var n=!0;try{n=S(!0,t)}finally{n?k():(_=!1,S=null)}}else _=!1}if("function"==typeof x)k=function(){x(E)};else if("undefined"!=typeof MessageChannel){var M=new MessageChannel,z=M.port2;M.port1.onmessage=E,k=function(){z.postMessage(null)}}else k=function(){g(E,0)};function A(e){S=e,_||(_=!0,k())}function R(t,n){j=g(function(){t(e.unstable_now())},n)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(e){e.callback=null},e.unstable_continueExecution=function(){f||p||(f=!0,A(w))},e.unstable_forceFrameRate=function(e){0>e||125<e?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):C=0<e?Math.floor(1e3/e):5},e.unstable_getCurrentPriorityLevel=function(){return h},e.unstable_getFirstCallbackNode=function(){return n(l)},e.unstable_next=function(e){switch(h){case 1:case 2:case 3:var t=3;break;default:t=h}var n=h;h=t;try{return e()}finally{h=n}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(e,t){switch(e){case 1:case 2:case 3:case 4:case 5:break;default:e=3}var n=h;h=e;try{return t()}finally{h=n}},e.unstable_scheduleCallback=function(r,i,a){var o=e.unstable_now();switch(a="object"==typeof a&&null!==a&&"number"==typeof(a=a.delay)&&0<a?o+a:o,r){case 1:var s=-1;break;case 2:s=250;break;case 5:s=1073741823;break;case 4:s=1e4;break;default:s=5e3}return r={id:c++,callback:i,priorityLevel:r,startTime:a,expirationTime:s=a+s,sortIndex:-1},a>o?(r.sortIndex=a,t(u,r),null===n(l)&&r===n(u)&&(m?(y(j),j=-1):m=!0,R(b,a-o))):(r.sortIndex=s,t(l,r),f||p||(f=!0,A(w))),r},e.unstable_shouldYield=P,e.unstable_wrapCallback=function(e){var t=h;return function(){var n=h;h=t;try{return e.apply(this,arguments)}finally{h=n}}}}(_)),_)),k.exports}function j(){if(g)return w;g=1;var e=c(),t=S();function n(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var r=new Set,i={};function a(e,t){o(e,t),o(e+"Capture",t)}function o(e,t){for(i[e]=t,e=0;e<t.length;e++)r.add(t[e])}var s=!("undefined"==typeof window||void 0===window.document||void 0===window.document.createElement),l=Object.prototype.hasOwnProperty,u=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,d={},h={};function p(e,t,n,r,i,a,o){this.acceptsBooleans=2===t||3===t||4===t,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=a,this.removeEmptyString=o}var f={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){f[e]=new p(e,0,!1,e,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];f[t]=new p(t,1,!1,e[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(e){f[e]=new p(e,2,!1,e.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){f[e]=new p(e,2,!1,e,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){f[e]=new p(e,3,!1,e.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(e){f[e]=new p(e,3,!0,e,null,!1,!1)}),["capture","download"].forEach(function(e){f[e]=new p(e,4,!1,e,null,!1,!1)}),["cols","rows","size","span"].forEach(function(e){f[e]=new p(e,6,!1,e,null,!1,!1)}),["rowSpan","start"].forEach(function(e){f[e]=new p(e,5,!1,e.toLowerCase(),null,!1,!1)});var m=/[\-:]([a-z])/g;function y(e){return e[1].toUpperCase()}function x(e,t,n,r){var i=f.hasOwnProperty(t)?f[t]:null;(null!==i?0!==i.type:r||!(2<t.length)||"o"!==t[0]&&"O"!==t[0]||"n"!==t[1]&&"N"!==t[1])&&(function(e,t,n,r){if(null==t||function(e,t,n,r){if(null!==n&&0===n.type)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return!r&&(null!==n?!n.acceptsBooleans:"data-"!==(e=e.toLowerCase().slice(0,5))&&"aria-"!==e);default:return!1}}(e,t,n,r))return!0;if(r)return!1;if(null!==n)switch(n.type){case 3:return!t;case 4:return!1===t;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}(t,n,i,r)&&(n=null),r||null===i?function(e){return!!l.call(h,e)||!l.call(d,e)&&(u.test(e)?h[e]=!0:(d[e]=!0,!1))}(t)&&(null===n?e.removeAttribute(t):e.setAttribute(t,""+n)):i.mustUseProperty?e[i.propertyName]=null===n?3!==i.type&&"":n:(t=i.attributeName,r=i.attributeNamespace,null===n?e.removeAttribute(t):(n=3===(i=i.type)||4===i&&!0===n?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(m,y);f[t]=new p(t,1,!1,e,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(m,y);f[t]=new p(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(m,y);f[t]=new p(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(e){f[e]=new p(e,1,!1,e.toLowerCase(),null,!1,!1)}),f.xlinkHref=new p("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(e){f[e]=new p(e,1,!1,e.toLowerCase(),null,!0,!0)});var v=e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,b=Symbol.for("react.element"),k=Symbol.for("react.portal"),_=Symbol.for("react.fragment"),j=Symbol.for("react.strict_mode"),C=Symbol.for("react.profiler"),T=Symbol.for("react.provider"),P=Symbol.for("react.context"),E=Symbol.for("react.forward_ref"),M=Symbol.for("react.suspense"),z=Symbol.for("react.suspense_list"),A=Symbol.for("react.memo"),R=Symbol.for("react.lazy"),$=Symbol.for("react.offscreen"),D=Symbol.iterator;function O(e){return null===e||"object"!=typeof e?null:"function"==typeof(e=D&&e[D]||e["@@iterator"])?e:null}var L,N=Object.assign;function I(e){if(void 0===L)try{throw Error()}catch(Yv){var t=Yv.stack.trim().match(/\n( *(at )?)/);L=t&&t[1]||""}return"\n"+L+e}var F=!1;function V(e,t){if(!e||F)return"";F=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),"object"==typeof Reflect&&Reflect.construct){try{Reflect.construct(t,[])}catch(u){var r=u}Reflect.construct(e,[],t)}else{try{t.call()}catch(u){r=u}e.call(t.prototype)}else{try{throw Error()}catch(u){r=u}e()}}catch(u){if(u&&r&&"string"==typeof u.stack){for(var i=u.stack.split("\n"),a=r.stack.split("\n"),o=i.length-1,s=a.length-1;1<=o&&0<=s&&i[o]!==a[s];)s--;for(;1<=o&&0<=s;o--,s--)if(i[o]!==a[s]){if(1!==o||1!==s)do{if(o--,0>--s||i[o]!==a[s]){var l="\n"+i[o].replace(" at new "," at ");return e.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",e.displayName)),l}}while(1<=o&&0<=s);break}}}finally{F=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?I(e):""}function B(e){switch(e.tag){case 5:return I(e.type);case 16:return I("Lazy");case 13:return I("Suspense");case 19:return I("SuspenseList");case 0:case 2:case 15:return e=V(e.type,!1);case 11:return e=V(e.type.render,!1);case 1:return e=V(e.type,!0);default:return""}}function W(e){if(null==e)return null;if("function"==typeof e)return e.displayName||e.name||null;if("string"==typeof e)return e;switch(e){case _:return"Fragment";case k:return"Portal";case C:return"Profiler";case j:return"StrictMode";case M:return"Suspense";case z:return"SuspenseList"}if("object"==typeof e)switch(e.$$typeof){case P:return(e.displayName||"Context")+".Consumer";case T:return(e._context.displayName||"Context")+".Provider";case E:var t=e.render;return(e=e.displayName)||(e=""!==(e=t.displayName||t.name||"")?"ForwardRef("+e+")":"ForwardRef"),e;case A:return null!==(t=e.displayName||null)?t:W(e.type)||"Memo";case R:t=e._payload,e=e._init;try{return W(e(t))}catch(Yv){}}return null}function U(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=(e=t.render).displayName||e.name||"",t.displayName||(""!==e?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return W(t);case 8:return t===j?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if("function"==typeof t)return t.displayName||t.name||null;if("string"==typeof t)return t}return null}function Y(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":case"object":return e;default:return""}}function H(e){var t=e.type;return(e=e.nodeName)&&"input"===e.toLowerCase()&&("checkbox"===t||"radio"===t)}function q(e){e._valueTracker||(e._valueTracker=function(e){var t=H(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&void 0!==n&&"function"==typeof n.get&&"function"==typeof n.set){var i=n.get,a=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return i.call(this)},set:function(e){r=""+e,a.call(this,e)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(e){r=""+e},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}(e))}function X(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=H(e)?e.checked?"true":"false":e.value),(e=r)!==n&&(t.setValue(e),!0)}function G(e){if(void 0===(e=e||("undefined"!=typeof document?document:void 0)))return null;try{return e.activeElement||e.body}catch(t){return e.body}}function K(e,t){var n=t.checked;return N({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:null!=n?n:e._wrapperState.initialChecked})}function Q(e,t){var n=null==t.defaultValue?"":t.defaultValue,r=null!=t.checked?t.checked:t.defaultChecked;n=Y(null!=t.value?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:"checkbox"===t.type||"radio"===t.type?null!=t.checked:null!=t.value}}function Z(e,t){null!=(t=t.checked)&&x(e,"checked",t,!1)}function J(e,t){Z(e,t);var n=Y(t.value),r=t.type;if(null!=n)"number"===r?(0===n&&""===e.value||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if("submit"===r||"reset"===r)return void e.removeAttribute("value");t.hasOwnProperty("value")?te(e,t.type,n):t.hasOwnProperty("defaultValue")&&te(e,t.type,Y(t.defaultValue)),null==t.checked&&null!=t.defaultChecked&&(e.defaultChecked=!!t.defaultChecked)}function ee(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!("submit"!==r&&"reset"!==r||void 0!==t.value&&null!==t.value))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}""!==(n=e.name)&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,""!==n&&(e.name=n)}function te(e,t,n){"number"===t&&G(e.ownerDocument)===e||(null==n?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var ne=Array.isArray;function re(e,t,n,r){if(e=e.options,t){t={};for(var i=0;i<n.length;i++)t["$"+n[i]]=!0;for(n=0;n<e.length;n++)i=t.hasOwnProperty("$"+e[n].value),e[n].selected!==i&&(e[n].selected=i),i&&r&&(e[n].defaultSelected=!0)}else{for(n=""+Y(n),t=null,i=0;i<e.length;i++){if(e[i].value===n)return e[i].selected=!0,void(r&&(e[i].defaultSelected=!0));null!==t||e[i].disabled||(t=e[i])}null!==t&&(t.selected=!0)}}function ie(e,t){if(null!=t.dangerouslySetInnerHTML)throw Error(n(91));return N({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function ae(e,t){var r=t.value;if(null==r){if(r=t.children,t=t.defaultValue,null!=r){if(null!=t)throw Error(n(92));if(ne(r)){if(1<r.length)throw Error(n(93));r=r[0]}t=r}null==t&&(t=""),r=t}e._wrapperState={initialValue:Y(r)}}function oe(e,t){var n=Y(t.value),r=Y(t.defaultValue);null!=n&&((n=""+n)!==e.value&&(e.value=n),null==t.defaultValue&&e.defaultValue!==n&&(e.defaultValue=n)),null!=r&&(e.defaultValue=""+r)}function se(e){var t=e.textContent;t===e._wrapperState.initialValue&&""!==t&&null!==t&&(e.value=t)}function le(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function ue(e,t){return null==e||"http://www.w3.org/1999/xhtml"===e?le(t):"http://www.w3.org/2000/svg"===e&&"foreignObject"===t?"http://www.w3.org/1999/xhtml":e}var ce,de,he=(de=function(e,t){if("http://www.w3.org/2000/svg"!==e.namespaceURI||"innerHTML"in e)e.innerHTML=t;else{for((ce=ce||document.createElement("div")).innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=ce.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}},"undefined"!=typeof MSApp&&MSApp.execUnsafeLocalFunction?function(e,t,n,r){MSApp.execUnsafeLocalFunction(function(){return de(e,t)})}:de);function pe(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&3===n.nodeType)return void(n.nodeValue=t)}e.textContent=t}var fe={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},me=["Webkit","ms","Moz","O"];function ge(e,t,n){return null==t||"boolean"==typeof t||""===t?"":n||"number"!=typeof t||0===t||fe.hasOwnProperty(e)&&fe[e]?(""+t).trim():t+"px"}function ye(e,t){for(var n in e=e.style,t)if(t.hasOwnProperty(n)){var r=0===n.indexOf("--"),i=ge(n,t[n],r);"float"===n&&(n="cssFloat"),r?e.setProperty(n,i):e[n]=i}}Object.keys(fe).forEach(function(e){me.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),fe[t]=fe[e]})});var xe=N({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function ve(e,t){if(t){if(xe[e]&&(null!=t.children||null!=t.dangerouslySetInnerHTML))throw Error(n(137,e));if(null!=t.dangerouslySetInnerHTML){if(null!=t.children)throw Error(n(60));if("object"!=typeof t.dangerouslySetInnerHTML||!("__html"in t.dangerouslySetInnerHTML))throw Error(n(61))}if(null!=t.style&&"object"!=typeof t.style)throw Error(n(62))}}function be(e,t){if(-1===e.indexOf("-"))return"string"==typeof t.is;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var we=null;function ke(e){return(e=e.target||e.srcElement||window).correspondingUseElement&&(e=e.correspondingUseElement),3===e.nodeType?e.parentNode:e}var _e=null,Se=null,je=null;function Ce(e){if(e=bi(e)){if("function"!=typeof _e)throw Error(n(280));var t=e.stateNode;t&&(t=ki(t),_e(e.stateNode,e.type,t))}}function Te(e){Se?je?je.push(e):je=[e]:Se=e}function Pe(){if(Se){var e=Se,t=je;if(je=Se=null,Ce(e),t)for(e=0;e<t.length;e++)Ce(t[e])}}function Ee(e,t){return e(t)}function Me(){}var ze=!1;function Ae(e,t,n){if(ze)return e(t,n);ze=!0;try{return Ee(e,t,n)}finally{ze=!1,(null!==Se||null!==je)&&(Me(),Pe())}}function Re(e,t){var r=e.stateNode;if(null===r)return null;var i=ki(r);if(null===i)return null;r=i[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(i=!i.disabled)||(i=!("button"===(e=e.type)||"input"===e||"select"===e||"textarea"===e)),e=!i;break e;default:e=!1}if(e)return null;if(r&&"function"!=typeof r)throw Error(n(231,t,typeof r));return r}var $e=!1;if(s)try{var De={};Object.defineProperty(De,"passive",{get:function(){$e=!0}}),window.addEventListener("test",De,De),window.removeEventListener("test",De,De)}catch(de){$e=!1}function Oe(e,t,n,r,i,a,o,s,l){var u=Array.prototype.slice.call(arguments,3);try{t.apply(n,u)}catch(c){this.onError(c)}}var Le=!1,Ne=null,Ie=!1,Fe=null,Ve={onError:function(e){Le=!0,Ne=e}};function Be(e,t,n,r,i,a,o,s,l){Le=!1,Ne=null,Oe.apply(Ve,arguments)}function We(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do{!!(4098&(t=e).flags)&&(n=t.return),e=t.return}while(e)}return 3===t.tag?n:null}function Ue(e){if(13===e.tag){var t=e.memoizedState;if(null===t&&(null!==(e=e.alternate)&&(t=e.memoizedState)),null!==t)return t.dehydrated}return null}function Ye(e){if(We(e)!==e)throw Error(n(188))}function He(e){return null!==(e=function(e){var t=e.alternate;if(!t){if(null===(t=We(e)))throw Error(n(188));return t!==e?null:e}for(var r=e,i=t;;){var a=r.return;if(null===a)break;var o=a.alternate;if(null===o){if(null!==(i=a.return)){r=i;continue}break}if(a.child===o.child){for(o=a.child;o;){if(o===r)return Ye(a),e;if(o===i)return Ye(a),t;o=o.sibling}throw Error(n(188))}if(r.return!==i.return)r=a,i=o;else{for(var s=!1,l=a.child;l;){if(l===r){s=!0,r=a,i=o;break}if(l===i){s=!0,i=a,r=o;break}l=l.sibling}if(!s){for(l=o.child;l;){if(l===r){s=!0,r=o,i=a;break}if(l===i){s=!0,i=o,r=a;break}l=l.sibling}if(!s)throw Error(n(189))}}if(r.alternate!==i)throw Error(n(190))}if(3!==r.tag)throw Error(n(188));return r.stateNode.current===r?e:t}(e))?qe(e):null}function qe(e){if(5===e.tag||6===e.tag)return e;for(e=e.child;null!==e;){var t=qe(e);if(null!==t)return t;e=e.sibling}return null}var Xe=t.unstable_scheduleCallback,Ge=t.unstable_cancelCallback,Ke=t.unstable_shouldYield,Qe=t.unstable_requestPaint,Ze=t.unstable_now,Je=t.unstable_getCurrentPriorityLevel,et=t.unstable_ImmediatePriority,tt=t.unstable_UserBlockingPriority,nt=t.unstable_NormalPriority,rt=t.unstable_LowPriority,it=t.unstable_IdlePriority,at=null,ot=null;var st=Math.clz32?Math.clz32:function(e){return e>>>=0,0===e?32:31-(lt(e)/ut|0)|0},lt=Math.log,ut=Math.LN2;var ct=64,dt=4194304;function ht(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return 4194240&e;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return 130023424&e;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function pt(e,t){var n=e.pendingLanes;if(0===n)return 0;var r=0,i=e.suspendedLanes,a=e.pingedLanes,o=268435455&n;if(0!==o){var s=o&~i;0!==s?r=ht(s):0!==(a&=o)&&(r=ht(a))}else 0!==(o=n&~i)?r=ht(o):0!==a&&(r=ht(a));if(0===r)return 0;if(0!==t&&t!==r&&0===(t&i)&&((i=r&-r)>=(a=t&-t)||16===i&&4194240&a))return t;if(4&r&&(r|=16&n),0!==(t=e.entangledLanes))for(e=e.entanglements,t&=r;0<t;)i=1<<(n=31-st(t)),r|=e[n],t&=~i;return r}function ft(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;default:return-1}}function mt(e){return 0!==(e=-1073741825&e.pendingLanes)?e:1073741824&e?1073741824:0}function gt(){var e=ct;return!(4194240&(ct<<=1))&&(ct=64),e}function yt(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function xt(e,t,n){e.pendingLanes|=t,536870912!==t&&(e.suspendedLanes=0,e.pingedLanes=0),(e=e.eventTimes)[t=31-st(t)]=n}function vt(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-st(n),i=1<<r;i&t|e[r]&t&&(e[r]|=t),n&=~i}}var bt=0;function wt(e){return 1<(e&=-e)?4<e?268435455&e?16:536870912:4:1}var kt,_t,St,jt,Ct,Tt=!1,Pt=[],Et=null,Mt=null,zt=null,At=new Map,Rt=new Map,$t=[],Dt="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Ot(e,t){switch(e){case"focusin":case"focusout":Et=null;break;case"dragenter":case"dragleave":Mt=null;break;case"mouseover":case"mouseout":zt=null;break;case"pointerover":case"pointerout":At.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":Rt.delete(t.pointerId)}}function Lt(e,t,n,r,i,a){return null===e||e.nativeEvent!==a?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:a,targetContainers:[i]},null!==t&&(null!==(t=bi(t))&&_t(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,null!==i&&-1===t.indexOf(i)&&t.push(i),e)}function Nt(e){var t=vi(e.target);if(null!==t){var n=We(t);if(null!==n)if(13===(t=n.tag)){if(null!==(t=Ue(n)))return e.blockedOn=t,void Ct(e.priority,function(){St(n)})}else if(3===t&&n.stateNode.current.memoizedState.isDehydrated)return void(e.blockedOn=3===n.tag?n.stateNode.containerInfo:null)}e.blockedOn=null}function It(e){if(null!==e.blockedOn)return!1;for(var t=e.targetContainers;0<t.length;){var n=Kt(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(null!==n)return null!==(t=bi(n))&&_t(t),e.blockedOn=n,!1;var r=new(n=e.nativeEvent).constructor(n.type,n);we=r,n.target.dispatchEvent(r),we=null,t.shift()}return!0}function Ft(e,t,n){It(e)&&n.delete(t)}function Vt(){Tt=!1,null!==Et&&It(Et)&&(Et=null),null!==Mt&&It(Mt)&&(Mt=null),null!==zt&&It(zt)&&(zt=null),At.forEach(Ft),Rt.forEach(Ft)}function Bt(e,n){e.blockedOn===n&&(e.blockedOn=null,Tt||(Tt=!0,t.unstable_scheduleCallback(t.unstable_NormalPriority,Vt)))}function Wt(e){function t(t){return Bt(t,e)}if(0<Pt.length){Bt(Pt[0],e);for(var n=1;n<Pt.length;n++){var r=Pt[n];r.blockedOn===e&&(r.blockedOn=null)}}for(null!==Et&&Bt(Et,e),null!==Mt&&Bt(Mt,e),null!==zt&&Bt(zt,e),At.forEach(t),Rt.forEach(t),n=0;n<$t.length;n++)(r=$t[n]).blockedOn===e&&(r.blockedOn=null);for(;0<$t.length&&null===(n=$t[0]).blockedOn;)Nt(n),null===n.blockedOn&&$t.shift()}var Ut=v.ReactCurrentBatchConfig,Yt=!0;function Ht(e,t,n,r){var i=bt,a=Ut.transition;Ut.transition=null;try{bt=1,Xt(e,t,n,r)}finally{bt=i,Ut.transition=a}}function qt(e,t,n,r){var i=bt,a=Ut.transition;Ut.transition=null;try{bt=4,Xt(e,t,n,r)}finally{bt=i,Ut.transition=a}}function Xt(e,t,n,r){if(Yt){var i=Kt(e,t,n,r);if(null===i)Yr(e,t,r,Gt,n),Ot(e,r);else if(function(e,t,n,r,i){switch(t){case"focusin":return Et=Lt(Et,e,t,n,r,i),!0;case"dragenter":return Mt=Lt(Mt,e,t,n,r,i),!0;case"mouseover":return zt=Lt(zt,e,t,n,r,i),!0;case"pointerover":var a=i.pointerId;return At.set(a,Lt(At.get(a)||null,e,t,n,r,i)),!0;case"gotpointercapture":return a=i.pointerId,Rt.set(a,Lt(Rt.get(a)||null,e,t,n,r,i)),!0}return!1}(i,e,t,n,r))r.stopPropagation();else if(Ot(e,r),4&t&&-1<Dt.indexOf(e)){for(;null!==i;){var a=bi(i);if(null!==a&&kt(a),null===(a=Kt(e,t,n,r))&&Yr(e,t,r,Gt,n),a===i)break;i=a}null!==i&&r.stopPropagation()}else Yr(e,t,r,null,n)}}var Gt=null;function Kt(e,t,n,r){if(Gt=null,null!==(e=vi(e=ke(r))))if(null===(t=We(e)))e=null;else if(13===(n=t.tag)){if(null!==(e=Ue(t)))return e;e=null}else if(3===n){if(t.stateNode.current.memoizedState.isDehydrated)return 3===t.tag?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return Gt=e,null}function Qt(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Je()){case et:return 1;case tt:return 4;case nt:case rt:return 16;case it:return 536870912;default:return 16}default:return 16}}var Zt=null,Jt=null,en=null;function tn(){if(en)return en;var e,t,n=Jt,r=n.length,i="value"in Zt?Zt.value:Zt.textContent,a=i.length;for(e=0;e<r&&n[e]===i[e];e++);var o=r-e;for(t=1;t<=o&&n[r-t]===i[a-t];t++);return en=i.slice(e,1<t?1-t:void 0)}function nn(e){var t=e.keyCode;return"charCode"in e?0===(e=e.charCode)&&13===t&&(e=13):e=t,10===e&&(e=13),32<=e||13===e?e:0}function rn(){return!0}function an(){return!1}function on(e){function t(t,n,r,i,a){for(var o in this._reactName=t,this._targetInst=r,this.type=n,this.nativeEvent=i,this.target=a,this.currentTarget=null,e)e.hasOwnProperty(o)&&(t=e[o],this[o]=t?t(i):i[o]);return this.isDefaultPrevented=(null!=i.defaultPrevented?i.defaultPrevented:!1===i.returnValue)?rn:an,this.isPropagationStopped=an,this}return N(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var e=this.nativeEvent;e&&(e.preventDefault?e.preventDefault():"unknown"!=typeof e.returnValue&&(e.returnValue=!1),this.isDefaultPrevented=rn)},stopPropagation:function(){var e=this.nativeEvent;e&&(e.stopPropagation?e.stopPropagation():"unknown"!=typeof e.cancelBubble&&(e.cancelBubble=!0),this.isPropagationStopped=rn)},persist:function(){},isPersistent:rn}),t}var sn,ln,un,cn={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},dn=on(cn),hn=N({},cn,{view:0,detail:0}),pn=on(hn),fn=N({},hn,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Cn,button:0,buttons:0,relatedTarget:function(e){return void 0===e.relatedTarget?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==un&&(un&&"mousemove"===e.type?(sn=e.screenX-un.screenX,ln=e.screenY-un.screenY):ln=sn=0,un=e),sn)},movementY:function(e){return"movementY"in e?e.movementY:ln}}),mn=on(fn),gn=on(N({},fn,{dataTransfer:0})),yn=on(N({},hn,{relatedTarget:0})),xn=on(N({},cn,{animationName:0,elapsedTime:0,pseudoElement:0})),vn=N({},cn,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),bn=on(vn),wn=on(N({},cn,{data:0})),kn={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},_n={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Sn={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function jn(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):!!(e=Sn[e])&&!!t[e]}function Cn(){return jn}var Tn=N({},hn,{key:function(e){if(e.key){var t=kn[e.key]||e.key;if("Unidentified"!==t)return t}return"keypress"===e.type?13===(e=nn(e))?"Enter":String.fromCharCode(e):"keydown"===e.type||"keyup"===e.type?_n[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Cn,charCode:function(e){return"keypress"===e.type?nn(e):0},keyCode:function(e){return"keydown"===e.type||"keyup"===e.type?e.keyCode:0},which:function(e){return"keypress"===e.type?nn(e):"keydown"===e.type||"keyup"===e.type?e.keyCode:0}}),Pn=on(Tn),En=on(N({},fn,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0})),Mn=on(N({},hn,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Cn})),zn=on(N({},cn,{propertyName:0,elapsedTime:0,pseudoElement:0})),An=N({},fn,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Rn=on(An),$n=[9,13,27,32],Dn=s&&"CompositionEvent"in window,On=null;s&&"documentMode"in document&&(On=document.documentMode);var Ln=s&&"TextEvent"in window&&!On,Nn=s&&(!Dn||On&&8<On&&11>=On),In=String.fromCharCode(32),Fn=!1;function Vn(e,t){switch(e){case"keyup":return-1!==$n.indexOf(t.keyCode);case"keydown":return 229!==t.keyCode;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Bn(e){return"object"==typeof(e=e.detail)&&"data"in e?e.data:null}var Wn=!1;var Un={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Yn(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return"input"===t?!!Un[e.type]:"textarea"===t}function Hn(e,t,n,r){Te(r),0<(t=qr(t,"onChange")).length&&(n=new dn("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var qn=null,Xn=null;function Gn(e){Ir(e,0)}function Kn(e){if(X(wi(e)))return e}function Qn(e,t){if("change"===e)return t}var Zn=!1;if(s){var Jn;if(s){var er="oninput"in document;if(!er){var tr=document.createElement("div");tr.setAttribute("oninput","return;"),er="function"==typeof tr.oninput}Jn=er}else Jn=!1;Zn=Jn&&(!document.documentMode||9<document.documentMode)}function nr(){qn&&(qn.detachEvent("onpropertychange",rr),Xn=qn=null)}function rr(e){if("value"===e.propertyName&&Kn(Xn)){var t=[];Hn(t,Xn,e,ke(e)),Ae(Gn,t)}}function ir(e,t,n){"focusin"===e?(nr(),Xn=n,(qn=t).attachEvent("onpropertychange",rr)):"focusout"===e&&nr()}function ar(e){if("selectionchange"===e||"keyup"===e||"keydown"===e)return Kn(Xn)}function or(e,t){if("click"===e)return Kn(t)}function sr(e,t){if("input"===e||"change"===e)return Kn(t)}var lr="function"==typeof Object.is?Object.is:function(e,t){return e===t&&(0!==e||1/e==1/t)||e!=e&&t!=t};function ur(e,t){if(lr(e,t))return!0;if("object"!=typeof e||null===e||"object"!=typeof t||null===t)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!l.call(t,i)||!lr(e[i],t[i]))return!1}return!0}function cr(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function dr(e,t){var n,r=cr(e);for(e=0;r;){if(3===r.nodeType){if(n=e+r.textContent.length,e<=t&&n>=t)return{node:r,offset:t-e};e=n}e:{for(;r;){if(r.nextSibling){r=r.nextSibling;break e}r=r.parentNode}r=void 0}r=cr(r)}}function hr(e,t){return!(!e||!t)&&(e===t||(!e||3!==e.nodeType)&&(t&&3===t.nodeType?hr(e,t.parentNode):"contains"in e?e.contains(t):!!e.compareDocumentPosition&&!!(16&e.compareDocumentPosition(t))))}function pr(){for(var e=window,t=G();t instanceof e.HTMLIFrameElement;){try{var n="string"==typeof t.contentWindow.location.href}catch(r){n=!1}if(!n)break;t=G((e=t.contentWindow).document)}return t}function fr(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&("input"===t&&("text"===e.type||"search"===e.type||"tel"===e.type||"url"===e.type||"password"===e.type)||"textarea"===t||"true"===e.contentEditable)}function mr(e){var t=pr(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&hr(n.ownerDocument.documentElement,n)){if(null!==r&&fr(n))if(t=r.start,void 0===(e=r.end)&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if((e=(t=n.ownerDocument||document)&&t.defaultView||window).getSelection){e=e.getSelection();var i=n.textContent.length,a=Math.min(r.start,i);r=void 0===r.end?a:Math.min(r.end,i),!e.extend&&a>r&&(i=r,r=a,a=i),i=dr(n,a);var o=dr(n,r);i&&o&&(1!==e.rangeCount||e.anchorNode!==i.node||e.anchorOffset!==i.offset||e.focusNode!==o.node||e.focusOffset!==o.offset)&&((t=t.createRange()).setStart(i.node,i.offset),e.removeAllRanges(),a>r?(e.addRange(t),e.extend(o.node,o.offset)):(t.setEnd(o.node,o.offset),e.addRange(t)))}for(t=[],e=n;e=e.parentNode;)1===e.nodeType&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for("function"==typeof n.focus&&n.focus(),n=0;n<t.length;n++)(e=t[n]).element.scrollLeft=e.left,e.element.scrollTop=e.top}}var gr=s&&"documentMode"in document&&11>=document.documentMode,yr=null,xr=null,vr=null,br=!1;function wr(e,t,n){var r=n.window===n?n.document:9===n.nodeType?n:n.ownerDocument;br||null==yr||yr!==G(r)||("selectionStart"in(r=yr)&&fr(r)?r={start:r.selectionStart,end:r.selectionEnd}:r={anchorNode:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection()).anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset},vr&&ur(vr,r)||(vr=r,0<(r=qr(xr,"onSelect")).length&&(t=new dn("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=yr)))}function kr(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var _r={animationend:kr("Animation","AnimationEnd"),animationiteration:kr("Animation","AnimationIteration"),animationstart:kr("Animation","AnimationStart"),transitionend:kr("Transition","TransitionEnd")},Sr={},jr={};function Cr(e){if(Sr[e])return Sr[e];if(!_r[e])return e;var t,n=_r[e];for(t in n)if(n.hasOwnProperty(t)&&t in jr)return Sr[e]=n[t];return e}s&&(jr=document.createElement("div").style,"AnimationEvent"in window||(delete _r.animationend.animation,delete _r.animationiteration.animation,delete _r.animationstart.animation),"TransitionEvent"in window||delete _r.transitionend.transition);var Tr=Cr("animationend"),Pr=Cr("animationiteration"),Er=Cr("animationstart"),Mr=Cr("transitionend"),zr=new Map,Ar="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Rr(e,t){zr.set(e,t),a(t,[e])}for(var $r=0;$r<Ar.length;$r++){var Dr=Ar[$r];Rr(Dr.toLowerCase(),"on"+(Dr[0].toUpperCase()+Dr.slice(1)))}Rr(Tr,"onAnimationEnd"),Rr(Pr,"onAnimationIteration"),Rr(Er,"onAnimationStart"),Rr("dblclick","onDoubleClick"),Rr("focusin","onFocus"),Rr("focusout","onBlur"),Rr(Mr,"onTransitionEnd"),o("onMouseEnter",["mouseout","mouseover"]),o("onMouseLeave",["mouseout","mouseover"]),o("onPointerEnter",["pointerout","pointerover"]),o("onPointerLeave",["pointerout","pointerover"]),a("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),a("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),a("onBeforeInput",["compositionend","keypress","textInput","paste"]),a("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),a("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),a("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Or="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Lr=new Set("cancel close invalid load scroll toggle".split(" ").concat(Or));function Nr(e,t,r){var i=e.type||"unknown-event";e.currentTarget=r,function(e,t,r,i,a,o,s,l,u){if(Be.apply(this,arguments),Le){if(!Le)throw Error(n(198));var c=Ne;Le=!1,Ne=null,Ie||(Ie=!0,Fe=c)}}(i,t,void 0,e),e.currentTarget=null}function Ir(e,t){t=!!(4&t);for(var n=0;n<e.length;n++){var r=e[n],i=r.event;r=r.listeners;e:{var a=void 0;if(t)for(var o=r.length-1;0<=o;o--){var s=r[o],l=s.instance,u=s.currentTarget;if(s=s.listener,l!==a&&i.isPropagationStopped())break e;Nr(i,s,u),a=l}else for(o=0;o<r.length;o++){if(l=(s=r[o]).instance,u=s.currentTarget,s=s.listener,l!==a&&i.isPropagationStopped())break e;Nr(i,s,u),a=l}}}if(Ie)throw e=Fe,Ie=!1,Fe=null,e}function Fr(e,t){var n=t[gi];void 0===n&&(n=t[gi]=new Set);var r=e+"__bubble";n.has(r)||(Ur(t,e,2,!1),n.add(r))}function Vr(e,t,n){var r=0;t&&(r|=4),Ur(n,e,r,t)}var Br="_reactListening"+Math.random().toString(36).slice(2);function Wr(e){if(!e[Br]){e[Br]=!0,r.forEach(function(t){"selectionchange"!==t&&(Lr.has(t)||Vr(t,!1,e),Vr(t,!0,e))});var t=9===e.nodeType?e:e.ownerDocument;null===t||t[Br]||(t[Br]=!0,Vr("selectionchange",!1,t))}}function Ur(e,t,n,r){switch(Qt(t)){case 1:var i=Ht;break;case 4:i=qt;break;default:i=Xt}n=i.bind(null,t,n,e),i=void 0,!$e||"touchstart"!==t&&"touchmove"!==t&&"wheel"!==t||(i=!0),r?void 0!==i?e.addEventListener(t,n,{capture:!0,passive:i}):e.addEventListener(t,n,!0):void 0!==i?e.addEventListener(t,n,{passive:i}):e.addEventListener(t,n,!1)}function Yr(e,t,n,r,i){var a=r;if(!(1&t||2&t||null===r))e:for(;;){if(null===r)return;var o=r.tag;if(3===o||4===o){var s=r.stateNode.containerInfo;if(s===i||8===s.nodeType&&s.parentNode===i)break;if(4===o)for(o=r.return;null!==o;){var l=o.tag;if((3===l||4===l)&&((l=o.stateNode.containerInfo)===i||8===l.nodeType&&l.parentNode===i))return;o=o.return}for(;null!==s;){if(null===(o=vi(s)))return;if(5===(l=o.tag)||6===l){r=a=o;continue e}s=s.parentNode}}r=r.return}Ae(function(){var r=a,i=ke(n),o=[];e:{var s=zr.get(e);if(void 0!==s){var l=dn,u=e;switch(e){case"keypress":if(0===nn(n))break e;case"keydown":case"keyup":l=Pn;break;case"focusin":u="focus",l=yn;break;case"focusout":u="blur",l=yn;break;case"beforeblur":case"afterblur":l=yn;break;case"click":if(2===n.button)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":l=mn;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":l=gn;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":l=Mn;break;case Tr:case Pr:case Er:l=xn;break;case Mr:l=zn;break;case"scroll":l=pn;break;case"wheel":l=Rn;break;case"copy":case"cut":case"paste":l=bn;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":l=En}var c=!!(4&t),d=!c&&"scroll"===e,h=c?null!==s?s+"Capture":null:s;c=[];for(var p,f=r;null!==f;){var m=(p=f).stateNode;if(5===p.tag&&null!==m&&(p=m,null!==h&&(null!=(m=Re(f,h))&&c.push(Hr(f,m,p)))),d)break;f=f.return}0<c.length&&(s=new l(s,u,null,n,i),o.push({event:s,listeners:c}))}}if(!(7&t)){if(l="mouseout"===e||"pointerout"===e,(!(s="mouseover"===e||"pointerover"===e)||n===we||!(u=n.relatedTarget||n.fromElement)||!vi(u)&&!u[mi])&&(l||s)&&(s=i.window===i?i:(s=i.ownerDocument)?s.defaultView||s.parentWindow:window,l?(l=r,null!==(u=(u=n.relatedTarget||n.toElement)?vi(u):null)&&(u!==(d=We(u))||5!==u.tag&&6!==u.tag)&&(u=null)):(l=null,u=r),l!==u)){if(c=mn,m="onMouseLeave",h="onMouseEnter",f="mouse","pointerout"!==e&&"pointerover"!==e||(c=En,m="onPointerLeave",h="onPointerEnter",f="pointer"),d=null==l?s:wi(l),p=null==u?s:wi(u),(s=new c(m,f+"leave",l,n,i)).target=d,s.relatedTarget=p,m=null,vi(i)===r&&((c=new c(h,f+"enter",u,n,i)).target=p,c.relatedTarget=d,m=c),d=m,l&&u)e:{for(h=u,f=0,p=c=l;p;p=Xr(p))f++;for(p=0,m=h;m;m=Xr(m))p++;for(;0<f-p;)c=Xr(c),f--;for(;0<p-f;)h=Xr(h),p--;for(;f--;){if(c===h||null!==h&&c===h.alternate)break e;c=Xr(c),h=Xr(h)}c=null}else c=null;null!==l&&Gr(o,s,l,c,!1),null!==u&&null!==d&&Gr(o,d,u,c,!0)}if("select"===(l=(s=r?wi(r):window).nodeName&&s.nodeName.toLowerCase())||"input"===l&&"file"===s.type)var g=Qn;else if(Yn(s))if(Zn)g=sr;else{g=ar;var y=ir}else(l=s.nodeName)&&"input"===l.toLowerCase()&&("checkbox"===s.type||"radio"===s.type)&&(g=or);switch(g&&(g=g(e,r))?Hn(o,g,n,i):(y&&y(e,s,r),"focusout"===e&&(y=s._wrapperState)&&y.controlled&&"number"===s.type&&te(s,"number",s.value)),y=r?wi(r):window,e){case"focusin":(Yn(y)||"true"===y.contentEditable)&&(yr=y,xr=r,vr=null);break;case"focusout":vr=xr=yr=null;break;case"mousedown":br=!0;break;case"contextmenu":case"mouseup":case"dragend":br=!1,wr(o,n,i);break;case"selectionchange":if(gr)break;case"keydown":case"keyup":wr(o,n,i)}var x;if(Dn)e:{switch(e){case"compositionstart":var v="onCompositionStart";break e;case"compositionend":v="onCompositionEnd";break e;case"compositionupdate":v="onCompositionUpdate";break e}v=void 0}else Wn?Vn(e,n)&&(v="onCompositionEnd"):"keydown"===e&&229===n.keyCode&&(v="onCompositionStart");v&&(Nn&&"ko"!==n.locale&&(Wn||"onCompositionStart"!==v?"onCompositionEnd"===v&&Wn&&(x=tn()):(Jt="value"in(Zt=i)?Zt.value:Zt.textContent,Wn=!0)),0<(y=qr(r,v)).length&&(v=new wn(v,e,null,n,i),o.push({event:v,listeners:y}),x?v.data=x:null!==(x=Bn(n))&&(v.data=x))),(x=Ln?function(e,t){switch(e){case"compositionend":return Bn(t);case"keypress":return 32!==t.which?null:(Fn=!0,In);case"textInput":return(e=t.data)===In&&Fn?null:e;default:return null}}(e,n):function(e,t){if(Wn)return"compositionend"===e||!Dn&&Vn(e,t)?(e=tn(),en=Jt=Zt=null,Wn=!1,e):null;switch(e){case"paste":default:return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return Nn&&"ko"!==t.locale?null:t.data}}(e,n))&&(0<(r=qr(r,"onBeforeInput")).length&&(i=new wn("onBeforeInput","beforeinput",null,n,i),o.push({event:i,listeners:r}),i.data=x))}Ir(o,t)})}function Hr(e,t,n){return{instance:e,listener:t,currentTarget:n}}function qr(e,t){for(var n=t+"Capture",r=[];null!==e;){var i=e,a=i.stateNode;5===i.tag&&null!==a&&(i=a,null!=(a=Re(e,n))&&r.unshift(Hr(e,a,i)),null!=(a=Re(e,t))&&r.push(Hr(e,a,i))),e=e.return}return r}function Xr(e){if(null===e)return null;do{e=e.return}while(e&&5!==e.tag);return e||null}function Gr(e,t,n,r,i){for(var a=t._reactName,o=[];null!==n&&n!==r;){var s=n,l=s.alternate,u=s.stateNode;if(null!==l&&l===r)break;5===s.tag&&null!==u&&(s=u,i?null!=(l=Re(n,a))&&o.unshift(Hr(n,l,s)):i||null!=(l=Re(n,a))&&o.push(Hr(n,l,s))),n=n.return}0!==o.length&&e.push({event:t,listeners:o})}var Kr=/\r\n?/g,Qr=/\u0000|\uFFFD/g;function Zr(e){return("string"==typeof e?e:""+e).replace(Kr,"\n").replace(Qr,"")}function Jr(e,t,r){if(t=Zr(t),Zr(e)!==t&&r)throw Error(n(425))}function ei(){}var ti=null,ni=null;function ri(e,t){return"textarea"===e||"noscript"===e||"string"==typeof t.children||"number"==typeof t.children||"object"==typeof t.dangerouslySetInnerHTML&&null!==t.dangerouslySetInnerHTML&&null!=t.dangerouslySetInnerHTML.__html}var ii="function"==typeof setTimeout?setTimeout:void 0,ai="function"==typeof clearTimeout?clearTimeout:void 0,oi="function"==typeof Promise?Promise:void 0,si="function"==typeof queueMicrotask?queueMicrotask:void 0!==oi?function(e){return oi.resolve(null).then(e).catch(li)}:ii;function li(e){setTimeout(function(){throw e})}function ui(e,t){var n=t,r=0;do{var i=n.nextSibling;if(e.removeChild(n),i&&8===i.nodeType)if("/$"===(n=i.data)){if(0===r)return e.removeChild(i),void Wt(t);r--}else"$"!==n&&"$?"!==n&&"$!"!==n||r++;n=i}while(n);Wt(t)}function ci(e){for(;null!=e;e=e.nextSibling){var t=e.nodeType;if(1===t||3===t)break;if(8===t){if("$"===(t=e.data)||"$!"===t||"$?"===t)break;if("/$"===t)return null}}return e}function di(e){e=e.previousSibling;for(var t=0;e;){if(8===e.nodeType){var n=e.data;if("$"===n||"$!"===n||"$?"===n){if(0===t)return e;t--}else"/$"===n&&t++}e=e.previousSibling}return null}var hi=Math.random().toString(36).slice(2),pi="__reactFiber$"+hi,fi="__reactProps$"+hi,mi="__reactContainer$"+hi,gi="__reactEvents$"+hi,yi="__reactListeners$"+hi,xi="__reactHandles$"+hi;function vi(e){var t=e[pi];if(t)return t;for(var n=e.parentNode;n;){if(t=n[mi]||n[pi]){if(n=t.alternate,null!==t.child||null!==n&&null!==n.child)for(e=di(e);null!==e;){if(n=e[pi])return n;e=di(e)}return t}n=(e=n).parentNode}return null}function bi(e){return!(e=e[pi]||e[mi])||5!==e.tag&&6!==e.tag&&13!==e.tag&&3!==e.tag?null:e}function wi(e){if(5===e.tag||6===e.tag)return e.stateNode;throw Error(n(33))}function ki(e){return e[fi]||null}var _i=[],Si=-1;function ji(e){return{current:e}}function Ci(e){0>Si||(e.current=_i[Si],_i[Si]=null,Si--)}function Ti(e,t){Si++,_i[Si]=e.current,e.current=t}var Pi={},Ei=ji(Pi),Mi=ji(!1),zi=Pi;function Ai(e,t){var n=e.type.contextTypes;if(!n)return Pi;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var i,a={};for(i in n)a[i]=t[i];return r&&((e=e.stateNode).__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=a),a}function Ri(e){return null!=(e=e.childContextTypes)}function $i(){Ci(Mi),Ci(Ei)}function Di(e,t,r){if(Ei.current!==Pi)throw Error(n(168));Ti(Ei,t),Ti(Mi,r)}function Oi(e,t,r){var i=e.stateNode;if(t=t.childContextTypes,"function"!=typeof i.getChildContext)return r;for(var a in i=i.getChildContext())if(!(a in t))throw Error(n(108,U(e)||"Unknown",a));return N({},r,i)}function Li(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||Pi,zi=Ei.current,Ti(Ei,e),Ti(Mi,Mi.current),!0}function Ni(e,t,r){var i=e.stateNode;if(!i)throw Error(n(169));r?(e=Oi(e,t,zi),i.__reactInternalMemoizedMergedChildContext=e,Ci(Mi),Ci(Ei),Ti(Ei,e)):Ci(Mi),Ti(Mi,r)}var Ii=null,Fi=!1,Vi=!1;function Bi(e){null===Ii?Ii=[e]:Ii.push(e)}function Wi(){if(!Vi&&null!==Ii){Vi=!0;var e=0,t=bt;try{var n=Ii;for(bt=1;e<n.length;e++){var r=n[e];do{r=r(!0)}while(null!==r)}Ii=null,Fi=!1}catch(i){throw null!==Ii&&(Ii=Ii.slice(e+1)),Xe(et,Wi),i}finally{bt=t,Vi=!1}}return null}var Ui=[],Yi=0,Hi=null,qi=0,Xi=[],Gi=0,Ki=null,Qi=1,Zi="";function Ji(e,t){Ui[Yi++]=qi,Ui[Yi++]=Hi,Hi=e,qi=t}function ea(e,t,n){Xi[Gi++]=Qi,Xi[Gi++]=Zi,Xi[Gi++]=Ki,Ki=e;var r=Qi;e=Zi;var i=32-st(r)-1;r&=~(1<<i),n+=1;var a=32-st(t)+i;if(30<a){var o=i-i%5;a=(r&(1<<o)-1).toString(32),r>>=o,i-=o,Qi=1<<32-st(t)+i|n<<i|r,Zi=a+e}else Qi=1<<a|n<<i|r,Zi=e}function ta(e){null!==e.return&&(Ji(e,1),ea(e,1,0))}function na(e){for(;e===Hi;)Hi=Ui[--Yi],Ui[Yi]=null,qi=Ui[--Yi],Ui[Yi]=null;for(;e===Ki;)Ki=Xi[--Gi],Xi[Gi]=null,Zi=Xi[--Gi],Xi[Gi]=null,Qi=Xi[--Gi],Xi[Gi]=null}var ra=null,ia=null,aa=!1,oa=null;function sa(e,t){var n=Au(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,null===(t=e.deletions)?(e.deletions=[n],e.flags|=16):t.push(n)}function la(e,t){switch(e.tag){case 5:var n=e.type;return null!==(t=1!==t.nodeType||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t)&&(e.stateNode=t,ra=e,ia=ci(t.firstChild),!0);case 6:return null!==(t=""===e.pendingProps||3!==t.nodeType?null:t)&&(e.stateNode=t,ra=e,ia=null,!0);case 13:return null!==(t=8!==t.nodeType?null:t)&&(n=null!==Ki?{id:Qi,overflow:Zi}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},(n=Au(18,null,null,0)).stateNode=t,n.return=e,e.child=n,ra=e,ia=null,!0);default:return!1}}function ua(e){return!(!(1&e.mode)||128&e.flags)}function ca(e){if(aa){var t=ia;if(t){var r=t;if(!la(e,t)){if(ua(e))throw Error(n(418));t=ci(r.nextSibling);var i=ra;t&&la(e,t)?sa(i,r):(e.flags=-4097&e.flags|2,aa=!1,ra=e)}}else{if(ua(e))throw Error(n(418));e.flags=-4097&e.flags|2,aa=!1,ra=e}}}function da(e){for(e=e.return;null!==e&&5!==e.tag&&3!==e.tag&&13!==e.tag;)e=e.return;ra=e}function ha(e){if(e!==ra)return!1;if(!aa)return da(e),aa=!0,!1;var t;if((t=3!==e.tag)&&!(t=5!==e.tag)&&(t="head"!==(t=e.type)&&"body"!==t&&!ri(e.type,e.memoizedProps)),t&&(t=ia)){if(ua(e))throw pa(),Error(n(418));for(;t;)sa(e,t),t=ci(t.nextSibling)}if(da(e),13===e.tag){if(!(e=null!==(e=e.memoizedState)?e.dehydrated:null))throw Error(n(317));e:{for(e=e.nextSibling,t=0;e;){if(8===e.nodeType){var r=e.data;if("/$"===r){if(0===t){ia=ci(e.nextSibling);break e}t--}else"$"!==r&&"$!"!==r&&"$?"!==r||t++}e=e.nextSibling}ia=null}}else ia=ra?ci(e.stateNode.nextSibling):null;return!0}function pa(){for(var e=ia;e;)e=ci(e.nextSibling)}function fa(){ia=ra=null,aa=!1}function ma(e){null===oa?oa=[e]:oa.push(e)}var ga=v.ReactCurrentBatchConfig;function ya(e,t,r){if(null!==(e=r.ref)&&"function"!=typeof e&&"object"!=typeof e){if(r._owner){if(r=r._owner){if(1!==r.tag)throw Error(n(309));var i=r.stateNode}if(!i)throw Error(n(147,e));var a=i,o=""+e;return null!==t&&null!==t.ref&&"function"==typeof t.ref&&t.ref._stringRef===o?t.ref:((t=function(e){var t=a.refs;null===e?delete t[o]:t[o]=e})._stringRef=o,t)}if("string"!=typeof e)throw Error(n(284));if(!r._owner)throw Error(n(290,e))}return e}function xa(e,t){throw e=Object.prototype.toString.call(t),Error(n(31,"[object Object]"===e?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function va(e){return(0,e._init)(e._payload)}function ba(e){function t(t,n){if(e){var r=t.deletions;null===r?(t.deletions=[n],t.flags|=16):r.push(n)}}function r(n,r){if(!e)return null;for(;null!==r;)t(n,r),r=r.sibling;return null}function i(e,t){for(e=new Map;null!==t;)null!==t.key?e.set(t.key,t):e.set(t.index,t),t=t.sibling;return e}function a(e,t){return(e=$u(e,t)).index=0,e.sibling=null,e}function o(t,n,r){return t.index=r,e?null!==(r=t.alternate)?(r=r.index)<n?(t.flags|=2,n):r:(t.flags|=2,n):(t.flags|=1048576,n)}function s(t){return e&&null===t.alternate&&(t.flags|=2),t}function l(e,t,n,r){return null===t||6!==t.tag?((t=Nu(n,e.mode,r)).return=e,t):((t=a(t,n)).return=e,t)}function u(e,t,n,r){var i=n.type;return i===_?d(e,t,n.props.children,r,n.key):null!==t&&(t.elementType===i||"object"==typeof i&&null!==i&&i.$$typeof===R&&va(i)===t.type)?((r=a(t,n.props)).ref=ya(e,t,n),r.return=e,r):((r=Du(n.type,n.key,n.props,null,e.mode,r)).ref=ya(e,t,n),r.return=e,r)}function c(e,t,n,r){return null===t||4!==t.tag||t.stateNode.containerInfo!==n.containerInfo||t.stateNode.implementation!==n.implementation?((t=Iu(n,e.mode,r)).return=e,t):((t=a(t,n.children||[])).return=e,t)}function d(e,t,n,r,i){return null===t||7!==t.tag?((t=Ou(n,e.mode,r,i)).return=e,t):((t=a(t,n)).return=e,t)}function h(e,t,n){if("string"==typeof t&&""!==t||"number"==typeof t)return(t=Nu(""+t,e.mode,n)).return=e,t;if("object"==typeof t&&null!==t){switch(t.$$typeof){case b:return(n=Du(t.type,t.key,t.props,null,e.mode,n)).ref=ya(e,null,t),n.return=e,n;case k:return(t=Iu(t,e.mode,n)).return=e,t;case R:return h(e,(0,t._init)(t._payload),n)}if(ne(t)||O(t))return(t=Ou(t,e.mode,n,null)).return=e,t;xa(e,t)}return null}function p(e,t,n,r){var i=null!==t?t.key:null;if("string"==typeof n&&""!==n||"number"==typeof n)return null!==i?null:l(e,t,""+n,r);if("object"==typeof n&&null!==n){switch(n.$$typeof){case b:return n.key===i?u(e,t,n,r):null;case k:return n.key===i?c(e,t,n,r):null;case R:return p(e,t,(i=n._init)(n._payload),r)}if(ne(n)||O(n))return null!==i?null:d(e,t,n,r,null);xa(e,n)}return null}function f(e,t,n,r,i){if("string"==typeof r&&""!==r||"number"==typeof r)return l(t,e=e.get(n)||null,""+r,i);if("object"==typeof r&&null!==r){switch(r.$$typeof){case b:return u(t,e=e.get(null===r.key?n:r.key)||null,r,i);case k:return c(t,e=e.get(null===r.key?n:r.key)||null,r,i);case R:return f(e,t,n,(0,r._init)(r._payload),i)}if(ne(r)||O(r))return d(t,e=e.get(n)||null,r,i,null);xa(t,r)}return null}return function l(u,c,d,m){if("object"==typeof d&&null!==d&&d.type===_&&null===d.key&&(d=d.props.children),"object"==typeof d&&null!==d){switch(d.$$typeof){case b:e:{for(var g=d.key,y=c;null!==y;){if(y.key===g){if((g=d.type)===_){if(7===y.tag){r(u,y.sibling),(c=a(y,d.props.children)).return=u,u=c;break e}}else if(y.elementType===g||"object"==typeof g&&null!==g&&g.$$typeof===R&&va(g)===y.type){r(u,y.sibling),(c=a(y,d.props)).ref=ya(u,y,d),c.return=u,u=c;break e}r(u,y);break}t(u,y),y=y.sibling}d.type===_?((c=Ou(d.props.children,u.mode,m,d.key)).return=u,u=c):((m=Du(d.type,d.key,d.props,null,u.mode,m)).ref=ya(u,c,d),m.return=u,u=m)}return s(u);case k:e:{for(y=d.key;null!==c;){if(c.key===y){if(4===c.tag&&c.stateNode.containerInfo===d.containerInfo&&c.stateNode.implementation===d.implementation){r(u,c.sibling),(c=a(c,d.children||[])).return=u,u=c;break e}r(u,c);break}t(u,c),c=c.sibling}(c=Iu(d,u.mode,m)).return=u,u=c}return s(u);case R:return l(u,c,(y=d._init)(d._payload),m)}if(ne(d))return function(n,a,s,l){for(var u=null,c=null,d=a,m=a=0,g=null;null!==d&&m<s.length;m++){d.index>m?(g=d,d=null):g=d.sibling;var y=p(n,d,s[m],l);if(null===y){null===d&&(d=g);break}e&&d&&null===y.alternate&&t(n,d),a=o(y,a,m),null===c?u=y:c.sibling=y,c=y,d=g}if(m===s.length)return r(n,d),aa&&Ji(n,m),u;if(null===d){for(;m<s.length;m++)null!==(d=h(n,s[m],l))&&(a=o(d,a,m),null===c?u=d:c.sibling=d,c=d);return aa&&Ji(n,m),u}for(d=i(n,d);m<s.length;m++)null!==(g=f(d,n,m,s[m],l))&&(e&&null!==g.alternate&&d.delete(null===g.key?m:g.key),a=o(g,a,m),null===c?u=g:c.sibling=g,c=g);return e&&d.forEach(function(e){return t(n,e)}),aa&&Ji(n,m),u}(u,c,d,m);if(O(d))return function(a,s,l,u){var c=O(l);if("function"!=typeof c)throw Error(n(150));if(null==(l=c.call(l)))throw Error(n(151));for(var d=c=null,m=s,g=s=0,y=null,x=l.next();null!==m&&!x.done;g++,x=l.next()){m.index>g?(y=m,m=null):y=m.sibling;var v=p(a,m,x.value,u);if(null===v){null===m&&(m=y);break}e&&m&&null===v.alternate&&t(a,m),s=o(v,s,g),null===d?c=v:d.sibling=v,d=v,m=y}if(x.done)return r(a,m),aa&&Ji(a,g),c;if(null===m){for(;!x.done;g++,x=l.next())null!==(x=h(a,x.value,u))&&(s=o(x,s,g),null===d?c=x:d.sibling=x,d=x);return aa&&Ji(a,g),c}for(m=i(a,m);!x.done;g++,x=l.next())null!==(x=f(m,a,g,x.value,u))&&(e&&null!==x.alternate&&m.delete(null===x.key?g:x.key),s=o(x,s,g),null===d?c=x:d.sibling=x,d=x);return e&&m.forEach(function(e){return t(a,e)}),aa&&Ji(a,g),c}(u,c,d,m);xa(u,d)}return"string"==typeof d&&""!==d||"number"==typeof d?(d=""+d,null!==c&&6===c.tag?(r(u,c.sibling),(c=a(c,d)).return=u,u=c):(r(u,c),(c=Nu(d,u.mode,m)).return=u,u=c),s(u)):r(u,c)}}var wa=ba(!0),ka=ba(!1),_a=ji(null),Sa=null,ja=null,Ca=null;function Ta(){Ca=ja=Sa=null}function Pa(e){var t=_a.current;Ci(_a),e._currentValue=t}function Ea(e,t,n){for(;null!==e;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,null!==r&&(r.childLanes|=t)):null!==r&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function Ma(e,t){Sa=e,Ca=ja=null,null!==(e=e.dependencies)&&null!==e.firstContext&&(0!==(e.lanes&t)&&(bs=!0),e.firstContext=null)}function za(e){var t=e._currentValue;if(Ca!==e)if(e={context:e,memoizedValue:t,next:null},null===ja){if(null===Sa)throw Error(n(308));ja=e,Sa.dependencies={lanes:0,firstContext:e}}else ja=ja.next=e;return t}var Aa=null;function Ra(e){null===Aa?Aa=[e]:Aa.push(e)}function $a(e,t,n,r){var i=t.interleaved;return null===i?(n.next=n,Ra(t)):(n.next=i.next,i.next=n),t.interleaved=n,Da(e,r)}function Da(e,t){e.lanes|=t;var n=e.alternate;for(null!==n&&(n.lanes|=t),n=e,e=e.return;null!==e;)e.childLanes|=t,null!==(n=e.alternate)&&(n.childLanes|=t),n=e,e=e.return;return 3===n.tag?n.stateNode:null}var Oa=!1;function La(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Na(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function Ia(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function Fa(e,t,n){var r=e.updateQueue;if(null===r)return null;if(r=r.shared,2&El){var i=r.pending;return null===i?t.next=t:(t.next=i.next,i.next=t),r.pending=t,Da(e,n)}return null===(i=r.interleaved)?(t.next=t,Ra(r)):(t.next=i.next,i.next=t),r.interleaved=t,Da(e,n)}function Va(e,t,n){if(null!==(t=t.updateQueue)&&(t=t.shared,4194240&n)){var r=t.lanes;n|=r&=e.pendingLanes,t.lanes=n,vt(e,n)}}function Ba(e,t){var n=e.updateQueue,r=e.alternate;if(null!==r&&n===(r=r.updateQueue)){var i=null,a=null;if(null!==(n=n.firstBaseUpdate)){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};null===a?i=a=o:a=a.next=o,n=n.next}while(null!==n);null===a?i=a=t:a=a.next=t}else i=a=t;return n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:a,shared:r.shared,effects:r.effects},void(e.updateQueue=n)}null===(e=n.lastBaseUpdate)?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function Wa(e,t,n,r){var i=e.updateQueue;Oa=!1;var a=i.firstBaseUpdate,o=i.lastBaseUpdate,s=i.shared.pending;if(null!==s){i.shared.pending=null;var l=s,u=l.next;l.next=null,null===o?a=u:o.next=u,o=l;var c=e.alternate;null!==c&&((s=(c=c.updateQueue).lastBaseUpdate)!==o&&(null===s?c.firstBaseUpdate=u:s.next=u,c.lastBaseUpdate=l))}if(null!==a){var d=i.baseState;for(o=0,c=u=l=null,s=a;;){var h=s.lane,p=s.eventTime;if((r&h)===h){null!==c&&(c=c.next={eventTime:p,lane:0,tag:s.tag,payload:s.payload,callback:s.callback,next:null});e:{var f=e,m=s;switch(h=t,p=n,m.tag){case 1:if("function"==typeof(f=m.payload)){d=f.call(p,d,h);break e}d=f;break e;case 3:f.flags=-65537&f.flags|128;case 0:if(null==(h="function"==typeof(f=m.payload)?f.call(p,d,h):f))break e;d=N({},d,h);break e;case 2:Oa=!0}}null!==s.callback&&0!==s.lane&&(e.flags|=64,null===(h=i.effects)?i.effects=[s]:h.push(s))}else p={eventTime:p,lane:h,tag:s.tag,payload:s.payload,callback:s.callback,next:null},null===c?(u=c=p,l=d):c=c.next=p,o|=h;if(null===(s=s.next)){if(null===(s=i.shared.pending))break;s=(h=s).next,h.next=null,i.lastBaseUpdate=h,i.shared.pending=null}}if(null===c&&(l=d),i.baseState=l,i.firstBaseUpdate=u,i.lastBaseUpdate=c,null!==(t=i.shared.interleaved)){i=t;do{o|=i.lane,i=i.next}while(i!==t)}else null===a&&(i.shared.lanes=0);Ll|=o,e.lanes=o,e.memoizedState=d}}function Ua(e,t,r){if(e=t.effects,t.effects=null,null!==e)for(t=0;t<e.length;t++){var i=e[t],a=i.callback;if(null!==a){if(i.callback=null,i=r,"function"!=typeof a)throw Error(n(191,a));a.call(i)}}}var Ya={},Ha=ji(Ya),qa=ji(Ya),Xa=ji(Ya);function Ga(e){if(e===Ya)throw Error(n(174));return e}function Ka(e,t){switch(Ti(Xa,t),Ti(qa,e),Ti(Ha,Ya),e=t.nodeType){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:ue(null,"");break;default:t=ue(t=(e=8===e?t.parentNode:t).namespaceURI||null,e=e.tagName)}Ci(Ha),Ti(Ha,t)}function Qa(){Ci(Ha),Ci(qa),Ci(Xa)}function Za(e){Ga(Xa.current);var t=Ga(Ha.current),n=ue(t,e.type);t!==n&&(Ti(qa,e),Ti(Ha,n))}function Ja(e){qa.current===e&&(Ci(Ha),Ci(qa))}var eo=ji(0);function to(e){for(var t=e;null!==t;){if(13===t.tag){var n=t.memoizedState;if(null!==n&&(null===(n=n.dehydrated)||"$?"===n.data||"$!"===n.data))return t}else if(19===t.tag&&void 0!==t.memoizedProps.revealOrder){if(128&t.flags)return t}else if(null!==t.child){t.child.return=t,t=t.child;continue}if(t===e)break;for(;null===t.sibling;){if(null===t.return||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var no=[];function ro(){for(var e=0;e<no.length;e++)no[e]._workInProgressVersionPrimary=null;no.length=0}var io=v.ReactCurrentDispatcher,ao=v.ReactCurrentBatchConfig,oo=0,so=null,lo=null,uo=null,co=!1,ho=!1,po=0,fo=0;function mo(){throw Error(n(321))}function go(e,t){if(null===t)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!lr(e[n],t[n]))return!1;return!0}function yo(e,t,r,i,a,o){if(oo=o,so=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,io.current=null===e||null===e.memoizedState?es:ts,e=r(i,a),ho){o=0;do{if(ho=!1,po=0,25<=o)throw Error(n(301));o+=1,uo=lo=null,t.updateQueue=null,io.current=ns,e=r(i,a)}while(ho)}if(io.current=Jo,t=null!==lo&&null!==lo.next,oo=0,uo=lo=so=null,co=!1,t)throw Error(n(300));return e}function xo(){var e=0!==po;return po=0,e}function vo(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return null===uo?so.memoizedState=uo=e:uo=uo.next=e,uo}function bo(){if(null===lo){var e=so.alternate;e=null!==e?e.memoizedState:null}else e=lo.next;var t=null===uo?so.memoizedState:uo.next;if(null!==t)uo=t,lo=e;else{if(null===e)throw Error(n(310));e={memoizedState:(lo=e).memoizedState,baseState:lo.baseState,baseQueue:lo.baseQueue,queue:lo.queue,next:null},null===uo?so.memoizedState=uo=e:uo=uo.next=e}return uo}function wo(e,t){return"function"==typeof t?t(e):t}function ko(e){var t=bo(),r=t.queue;if(null===r)throw Error(n(311));r.lastRenderedReducer=e;var i=lo,a=i.baseQueue,o=r.pending;if(null!==o){if(null!==a){var s=a.next;a.next=o.next,o.next=s}i.baseQueue=a=o,r.pending=null}if(null!==a){o=a.next,i=i.baseState;var l=s=null,u=null,c=o;do{var d=c.lane;if((oo&d)===d)null!==u&&(u=u.next={lane:0,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),i=c.hasEagerState?c.eagerState:e(i,c.action);else{var h={lane:d,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null};null===u?(l=u=h,s=i):u=u.next=h,so.lanes|=d,Ll|=d}c=c.next}while(null!==c&&c!==o);null===u?s=i:u.next=l,lr(i,t.memoizedState)||(bs=!0),t.memoizedState=i,t.baseState=s,t.baseQueue=u,r.lastRenderedState=i}if(null!==(e=r.interleaved)){a=e;do{o=a.lane,so.lanes|=o,Ll|=o,a=a.next}while(a!==e)}else null===a&&(r.lanes=0);return[t.memoizedState,r.dispatch]}function _o(e){var t=bo(),r=t.queue;if(null===r)throw Error(n(311));r.lastRenderedReducer=e;var i=r.dispatch,a=r.pending,o=t.memoizedState;if(null!==a){r.pending=null;var s=a=a.next;do{o=e(o,s.action),s=s.next}while(s!==a);lr(o,t.memoizedState)||(bs=!0),t.memoizedState=o,null===t.baseQueue&&(t.baseState=o),r.lastRenderedState=o}return[o,i]}function So(){}function jo(e,t){var r=so,i=bo(),a=t(),o=!lr(i.memoizedState,a);if(o&&(i.memoizedState=a,bs=!0),i=i.queue,Lo(Po.bind(null,r,i,e),[e]),i.getSnapshot!==t||o||null!==uo&&1&uo.memoizedState.tag){if(r.flags|=2048,Ao(9,To.bind(null,r,i,a,t),void 0,null),null===Ml)throw Error(n(349));30&oo||Co(r,t,a)}return a}function Co(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},null===(t=so.updateQueue)?(t={lastEffect:null,stores:null},so.updateQueue=t,t.stores=[e]):null===(n=t.stores)?t.stores=[e]:n.push(e)}function To(e,t,n,r){t.value=n,t.getSnapshot=r,Eo(t)&&Mo(e)}function Po(e,t,n){return n(function(){Eo(t)&&Mo(e)})}function Eo(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!lr(e,n)}catch(r){return!0}}function Mo(e){var t=Da(e,1);null!==t&&ru(t,e,1,-1)}function zo(e){var t=vo();return"function"==typeof e&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:wo,lastRenderedState:e},t.queue=e,e=e.dispatch=Go.bind(null,so,e),[t.memoizedState,e]}function Ao(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},null===(t=so.updateQueue)?(t={lastEffect:null,stores:null},so.updateQueue=t,t.lastEffect=e.next=e):null===(n=t.lastEffect)?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e),e}function Ro(){return bo().memoizedState}function $o(e,t,n,r){var i=vo();so.flags|=e,i.memoizedState=Ao(1|t,n,void 0,void 0===r?null:r)}function Do(e,t,n,r){var i=bo();r=void 0===r?null:r;var a=void 0;if(null!==lo){var o=lo.memoizedState;if(a=o.destroy,null!==r&&go(r,o.deps))return void(i.memoizedState=Ao(t,n,a,r))}so.flags|=e,i.memoizedState=Ao(1|t,n,a,r)}function Oo(e,t){return $o(8390656,8,e,t)}function Lo(e,t){return Do(2048,8,e,t)}function No(e,t){return Do(4,2,e,t)}function Io(e,t){return Do(4,4,e,t)}function Fo(e,t){return"function"==typeof t?(e=e(),t(e),function(){t(null)}):null!=t?(e=e(),t.current=e,function(){t.current=null}):void 0}function Vo(e,t,n){return n=null!=n?n.concat([e]):null,Do(4,4,Fo.bind(null,t,e),n)}function Bo(){}function Wo(e,t){var n=bo();t=void 0===t?null:t;var r=n.memoizedState;return null!==r&&null!==t&&go(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function Uo(e,t){var n=bo();t=void 0===t?null:t;var r=n.memoizedState;return null!==r&&null!==t&&go(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function Yo(e,t,n){return 21&oo?(lr(n,t)||(n=gt(),so.lanes|=n,Ll|=n,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,bs=!0),e.memoizedState=n)}function Ho(e,t){var n=bt;bt=0!==n&&4>n?n:4,e(!0);var r=ao.transition;ao.transition={};try{e(!1),t()}finally{bt=n,ao.transition=r}}function qo(){return bo().memoizedState}function Xo(e,t,n){var r=nu(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},Ko(e))Qo(t,n);else if(null!==(n=$a(e,t,n,r))){ru(n,e,r,tu()),Zo(n,t,r)}}function Go(e,t,n){var r=nu(e),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(Ko(e))Qo(t,i);else{var a=e.alternate;if(0===e.lanes&&(null===a||0===a.lanes)&&null!==(a=t.lastRenderedReducer))try{var o=t.lastRenderedState,s=a(o,n);if(i.hasEagerState=!0,i.eagerState=s,lr(s,o)){var l=t.interleaved;return null===l?(i.next=i,Ra(t)):(i.next=l.next,l.next=i),void(t.interleaved=i)}}catch(u){}null!==(n=$a(e,t,i,r))&&(ru(n,e,r,i=tu()),Zo(n,t,r))}}function Ko(e){var t=e.alternate;return e===so||null!==t&&t===so}function Qo(e,t){ho=co=!0;var n=e.pending;null===n?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function Zo(e,t,n){if(4194240&n){var r=t.lanes;n|=r&=e.pendingLanes,t.lanes=n,vt(e,n)}}var Jo={readContext:za,useCallback:mo,useContext:mo,useEffect:mo,useImperativeHandle:mo,useInsertionEffect:mo,useLayoutEffect:mo,useMemo:mo,useReducer:mo,useRef:mo,useState:mo,useDebugValue:mo,useDeferredValue:mo,useTransition:mo,useMutableSource:mo,useSyncExternalStore:mo,useId:mo,unstable_isNewReconciler:!1},es={readContext:za,useCallback:function(e,t){return vo().memoizedState=[e,void 0===t?null:t],e},useContext:za,useEffect:Oo,useImperativeHandle:function(e,t,n){return n=null!=n?n.concat([e]):null,$o(4194308,4,Fo.bind(null,t,e),n)},useLayoutEffect:function(e,t){return $o(4194308,4,e,t)},useInsertionEffect:function(e,t){return $o(4,2,e,t)},useMemo:function(e,t){var n=vo();return t=void 0===t?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=vo();return t=void 0!==n?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=Xo.bind(null,so,e),[r.memoizedState,e]},useRef:function(e){return e={current:e},vo().memoizedState=e},useState:zo,useDebugValue:Bo,useDeferredValue:function(e){return vo().memoizedState=e},useTransition:function(){var e=zo(!1),t=e[0];return e=Ho.bind(null,e[1]),vo().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,r){var i=so,a=vo();if(aa){if(void 0===r)throw Error(n(407));r=r()}else{if(r=t(),null===Ml)throw Error(n(349));30&oo||Co(i,t,r)}a.memoizedState=r;var o={value:r,getSnapshot:t};return a.queue=o,Oo(Po.bind(null,i,o,e),[e]),i.flags|=2048,Ao(9,To.bind(null,i,o,r,t),void 0,null),r},useId:function(){var e=vo(),t=Ml.identifierPrefix;if(aa){var n=Zi;t=":"+t+"R"+(n=(Qi&~(1<<32-st(Qi)-1)).toString(32)+n),0<(n=po++)&&(t+="H"+n.toString(32)),t+=":"}else t=":"+t+"r"+(n=fo++).toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},ts={readContext:za,useCallback:Wo,useContext:za,useEffect:Lo,useImperativeHandle:Vo,useInsertionEffect:No,useLayoutEffect:Io,useMemo:Uo,useReducer:ko,useRef:Ro,useState:function(){return ko(wo)},useDebugValue:Bo,useDeferredValue:function(e){return Yo(bo(),lo.memoizedState,e)},useTransition:function(){return[ko(wo)[0],bo().memoizedState]},useMutableSource:So,useSyncExternalStore:jo,useId:qo,unstable_isNewReconciler:!1},ns={readContext:za,useCallback:Wo,useContext:za,useEffect:Lo,useImperativeHandle:Vo,useInsertionEffect:No,useLayoutEffect:Io,useMemo:Uo,useReducer:_o,useRef:Ro,useState:function(){return _o(wo)},useDebugValue:Bo,useDeferredValue:function(e){var t=bo();return null===lo?t.memoizedState=e:Yo(t,lo.memoizedState,e)},useTransition:function(){return[_o(wo)[0],bo().memoizedState]},useMutableSource:So,useSyncExternalStore:jo,useId:qo,unstable_isNewReconciler:!1};function rs(e,t){if(e&&e.defaultProps){for(var n in t=N({},t),e=e.defaultProps)void 0===t[n]&&(t[n]=e[n]);return t}return t}function is(e,t,n,r){n=null==(n=n(r,t=e.memoizedState))?t:N({},t,n),e.memoizedState=n,0===e.lanes&&(e.updateQueue.baseState=n)}var as={isMounted:function(e){return!!(e=e._reactInternals)&&We(e)===e},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=tu(),i=nu(e),a=Ia(r,i);a.payload=t,null!=n&&(a.callback=n),null!==(t=Fa(e,a,i))&&(ru(t,e,i,r),Va(t,e,i))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=tu(),i=nu(e),a=Ia(r,i);a.tag=1,a.payload=t,null!=n&&(a.callback=n),null!==(t=Fa(e,a,i))&&(ru(t,e,i,r),Va(t,e,i))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=tu(),r=nu(e),i=Ia(n,r);i.tag=2,null!=t&&(i.callback=t),null!==(t=Fa(e,i,r))&&(ru(t,e,r,n),Va(t,e,r))}};function os(e,t,n,r,i,a,o){return"function"==typeof(e=e.stateNode).shouldComponentUpdate?e.shouldComponentUpdate(r,a,o):!t.prototype||!t.prototype.isPureReactComponent||(!ur(n,r)||!ur(i,a))}function ss(e,t,n){var r=!1,i=Pi,a=t.contextType;return"object"==typeof a&&null!==a?a=za(a):(i=Ri(t)?zi:Ei.current,a=(r=null!=(r=t.contextTypes))?Ai(e,i):Pi),t=new t(n,a),e.memoizedState=null!==t.state&&void 0!==t.state?t.state:null,t.updater=as,e.stateNode=t,t._reactInternals=e,r&&((e=e.stateNode).__reactInternalMemoizedUnmaskedChildContext=i,e.__reactInternalMemoizedMaskedChildContext=a),t}function ls(e,t,n,r){e=t.state,"function"==typeof t.componentWillReceiveProps&&t.componentWillReceiveProps(n,r),"function"==typeof t.UNSAFE_componentWillReceiveProps&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&as.enqueueReplaceState(t,t.state,null)}function us(e,t,n,r){var i=e.stateNode;i.props=n,i.state=e.memoizedState,i.refs={},La(e);var a=t.contextType;"object"==typeof a&&null!==a?i.context=za(a):(a=Ri(t)?zi:Ei.current,i.context=Ai(e,a)),i.state=e.memoizedState,"function"==typeof(a=t.getDerivedStateFromProps)&&(is(e,t,a,n),i.state=e.memoizedState),"function"==typeof t.getDerivedStateFromProps||"function"==typeof i.getSnapshotBeforeUpdate||"function"!=typeof i.UNSAFE_componentWillMount&&"function"!=typeof i.componentWillMount||(t=i.state,"function"==typeof i.componentWillMount&&i.componentWillMount(),"function"==typeof i.UNSAFE_componentWillMount&&i.UNSAFE_componentWillMount(),t!==i.state&&as.enqueueReplaceState(i,i.state,null),Wa(e,n,i,r),i.state=e.memoizedState),"function"==typeof i.componentDidMount&&(e.flags|=4194308)}function cs(e,t){try{var n="",r=t;do{n+=B(r),r=r.return}while(r);var i=n}catch(a){i="\nError generating stack: "+a.message+"\n"+a.stack}return{value:e,source:t,stack:i,digest:null}}function ds(e,t,n){return{value:e,source:null,stack:null!=n?n:null,digest:null!=t?t:null}}function hs(e,t){try{console.error(t.value)}catch(Yv){setTimeout(function(){throw Yv})}}var ps="function"==typeof WeakMap?WeakMap:Map;function fs(e,t,n){(n=Ia(-1,n)).tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){Yl||(Yl=!0,Hl=r),hs(0,t)},n}function ms(e,t,n){(n=Ia(-1,n)).tag=3;var r=e.type.getDerivedStateFromError;if("function"==typeof r){var i=t.value;n.payload=function(){return r(i)},n.callback=function(){hs(0,t)}}var a=e.stateNode;return null!==a&&"function"==typeof a.componentDidCatch&&(n.callback=function(){hs(0,t),"function"!=typeof r&&(null===ql?ql=new Set([this]):ql.add(this));var e=t.stack;this.componentDidCatch(t.value,{componentStack:null!==e?e:""})}),n}function gs(e,t,n){var r=e.pingCache;if(null===r){r=e.pingCache=new ps;var i=new Set;r.set(t,i)}else void 0===(i=r.get(t))&&(i=new Set,r.set(t,i));i.has(n)||(i.add(n),e=Cu.bind(null,e,t,n),t.then(e,e))}function ys(e){do{var t;if((t=13===e.tag)&&(t=null===(t=e.memoizedState)||null!==t.dehydrated),t)return e;e=e.return}while(null!==e);return null}function xs(e,t,n,r,i){return 1&e.mode?(e.flags|=65536,e.lanes=i,e):(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,1===n.tag&&(null===n.alternate?n.tag=17:((t=Ia(-1,1)).tag=2,Fa(n,t,1))),n.lanes|=1),e)}var vs=v.ReactCurrentOwner,bs=!1;function ws(e,t,n,r){t.child=null===e?ka(t,null,n,r):wa(t,e.child,n,r)}function ks(e,t,n,r,i){n=n.render;var a=t.ref;return Ma(t,i),r=yo(e,t,n,r,a,i),n=xo(),null===e||bs?(aa&&n&&ta(t),t.flags|=1,ws(e,t,r,i),t.child):(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,Ys(e,t,i))}function _s(e,t,n,r,i){if(null===e){var a=n.type;return"function"!=typeof a||Ru(a)||void 0!==a.defaultProps||null!==n.compare||void 0!==n.defaultProps?((e=Du(n.type,null,r,t,t.mode,i)).ref=t.ref,e.return=t,t.child=e):(t.tag=15,t.type=a,Ss(e,t,a,r,i))}if(a=e.child,0===(e.lanes&i)){var o=a.memoizedProps;if((n=null!==(n=n.compare)?n:ur)(o,r)&&e.ref===t.ref)return Ys(e,t,i)}return t.flags|=1,(e=$u(a,r)).ref=t.ref,e.return=t,t.child=e}function Ss(e,t,n,r,i){if(null!==e){var a=e.memoizedProps;if(ur(a,r)&&e.ref===t.ref){if(bs=!1,t.pendingProps=r=a,0===(e.lanes&i))return t.lanes=e.lanes,Ys(e,t,i);131072&e.flags&&(bs=!0)}}return Ts(e,t,n,r,i)}function js(e,t,n){var r=t.pendingProps,i=r.children,a=null!==e?e.memoizedState:null;if("hidden"===r.mode)if(1&t.mode){if(!(1073741824&n))return e=null!==a?a.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,Ti($l,Rl),Rl|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=null!==a?a.baseLanes:n,Ti($l,Rl),Rl|=r}else t.memoizedState={baseLanes:0,cachePool:null,transitions:null},Ti($l,Rl),Rl|=n;else null!==a?(r=a.baseLanes|n,t.memoizedState=null):r=n,Ti($l,Rl),Rl|=r;return ws(e,t,i,n),t.child}function Cs(e,t){var n=t.ref;(null===e&&null!==n||null!==e&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function Ts(e,t,n,r,i){var a=Ri(n)?zi:Ei.current;return a=Ai(t,a),Ma(t,i),n=yo(e,t,n,r,a,i),r=xo(),null===e||bs?(aa&&r&&ta(t),t.flags|=1,ws(e,t,n,i),t.child):(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,Ys(e,t,i))}function Ps(e,t,n,r,i){if(Ri(n)){var a=!0;Li(t)}else a=!1;if(Ma(t,i),null===t.stateNode)Us(e,t),ss(t,n,r),us(t,n,r,i),r=!0;else if(null===e){var o=t.stateNode,s=t.memoizedProps;o.props=s;var l=o.context,u=n.contextType;"object"==typeof u&&null!==u?u=za(u):u=Ai(t,u=Ri(n)?zi:Ei.current);var c=n.getDerivedStateFromProps,d="function"==typeof c||"function"==typeof o.getSnapshotBeforeUpdate;d||"function"!=typeof o.UNSAFE_componentWillReceiveProps&&"function"!=typeof o.componentWillReceiveProps||(s!==r||l!==u)&&ls(t,o,r,u),Oa=!1;var h=t.memoizedState;o.state=h,Wa(t,r,o,i),l=t.memoizedState,s!==r||h!==l||Mi.current||Oa?("function"==typeof c&&(is(t,n,c,r),l=t.memoizedState),(s=Oa||os(t,n,s,r,h,l,u))?(d||"function"!=typeof o.UNSAFE_componentWillMount&&"function"!=typeof o.componentWillMount||("function"==typeof o.componentWillMount&&o.componentWillMount(),"function"==typeof o.UNSAFE_componentWillMount&&o.UNSAFE_componentWillMount()),"function"==typeof o.componentDidMount&&(t.flags|=4194308)):("function"==typeof o.componentDidMount&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=l),o.props=r,o.state=l,o.context=u,r=s):("function"==typeof o.componentDidMount&&(t.flags|=4194308),r=!1)}else{o=t.stateNode,Na(e,t),s=t.memoizedProps,u=t.type===t.elementType?s:rs(t.type,s),o.props=u,d=t.pendingProps,h=o.context,"object"==typeof(l=n.contextType)&&null!==l?l=za(l):l=Ai(t,l=Ri(n)?zi:Ei.current);var p=n.getDerivedStateFromProps;(c="function"==typeof p||"function"==typeof o.getSnapshotBeforeUpdate)||"function"!=typeof o.UNSAFE_componentWillReceiveProps&&"function"!=typeof o.componentWillReceiveProps||(s!==d||h!==l)&&ls(t,o,r,l),Oa=!1,h=t.memoizedState,o.state=h,Wa(t,r,o,i);var f=t.memoizedState;s!==d||h!==f||Mi.current||Oa?("function"==typeof p&&(is(t,n,p,r),f=t.memoizedState),(u=Oa||os(t,n,u,r,h,f,l)||!1)?(c||"function"!=typeof o.UNSAFE_componentWillUpdate&&"function"!=typeof o.componentWillUpdate||("function"==typeof o.componentWillUpdate&&o.componentWillUpdate(r,f,l),"function"==typeof o.UNSAFE_componentWillUpdate&&o.UNSAFE_componentWillUpdate(r,f,l)),"function"==typeof o.componentDidUpdate&&(t.flags|=4),"function"==typeof o.getSnapshotBeforeUpdate&&(t.flags|=1024)):("function"!=typeof o.componentDidUpdate||s===e.memoizedProps&&h===e.memoizedState||(t.flags|=4),"function"!=typeof o.getSnapshotBeforeUpdate||s===e.memoizedProps&&h===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=f),o.props=r,o.state=f,o.context=l,r=u):("function"!=typeof o.componentDidUpdate||s===e.memoizedProps&&h===e.memoizedState||(t.flags|=4),"function"!=typeof o.getSnapshotBeforeUpdate||s===e.memoizedProps&&h===e.memoizedState||(t.flags|=1024),r=!1)}return Es(e,t,n,r,a,i)}function Es(e,t,n,r,i,a){Cs(e,t);var o=!!(128&t.flags);if(!r&&!o)return i&&Ni(t,n,!1),Ys(e,t,a);r=t.stateNode,vs.current=t;var s=o&&"function"!=typeof n.getDerivedStateFromError?null:r.render();return t.flags|=1,null!==e&&o?(t.child=wa(t,e.child,null,a),t.child=wa(t,null,s,a)):ws(e,t,s,a),t.memoizedState=r.state,i&&Ni(t,n,!0),t.child}function Ms(e){var t=e.stateNode;t.pendingContext?Di(0,t.pendingContext,t.pendingContext!==t.context):t.context&&Di(0,t.context,!1),Ka(e,t.containerInfo)}function zs(e,t,n,r,i){return fa(),ma(i),t.flags|=256,ws(e,t,n,r),t.child}var As,Rs,$s,Ds,Os={dehydrated:null,treeContext:null,retryLane:0};function Ls(e){return{baseLanes:e,cachePool:null,transitions:null}}function Ns(e,t,r){var i,a=t.pendingProps,o=eo.current,s=!1,l=!!(128&t.flags);if((i=l)||(i=(null===e||null!==e.memoizedState)&&!!(2&o)),i?(s=!0,t.flags&=-129):null!==e&&null===e.memoizedState||(o|=1),Ti(eo,1&o),null===e)return ca(t),null!==(e=t.memoizedState)&&null!==(e=e.dehydrated)?(1&t.mode?"$!"===e.data?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(l=a.children,e=a.fallback,s?(a=t.mode,s=t.child,l={mode:"hidden",children:l},1&a||null===s?s=Lu(l,a,0,null):(s.childLanes=0,s.pendingProps=l),e=Ou(e,a,r,null),s.return=t,e.return=t,s.sibling=e,t.child=s,t.child.memoizedState=Ls(r),t.memoizedState=Os,e):Is(t,l));if(null!==(o=e.memoizedState)&&null!==(i=o.dehydrated))return function(e,t,r,i,a,o,s){if(r)return 256&t.flags?(t.flags&=-257,Fs(e,t,s,i=ds(Error(n(422))))):null!==t.memoizedState?(t.child=e.child,t.flags|=128,null):(o=i.fallback,a=t.mode,i=Lu({mode:"visible",children:i.children},a,0,null),(o=Ou(o,a,s,null)).flags|=2,i.return=t,o.return=t,i.sibling=o,t.child=i,1&t.mode&&wa(t,e.child,null,s),t.child.memoizedState=Ls(s),t.memoizedState=Os,o);if(!(1&t.mode))return Fs(e,t,s,null);if("$!"===a.data){if(i=a.nextSibling&&a.nextSibling.dataset)var l=i.dgst;return i=l,Fs(e,t,s,i=ds(o=Error(n(419)),i,void 0))}if(l=0!==(s&e.childLanes),bs||l){if(null!==(i=Ml)){switch(s&-s){case 4:a=2;break;case 16:a=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:a=32;break;case 536870912:a=268435456;break;default:a=0}0!==(a=0!==(a&(i.suspendedLanes|s))?0:a)&&a!==o.retryLane&&(o.retryLane=a,Da(e,a),ru(i,e,a,-1))}return gu(),Fs(e,t,s,i=ds(Error(n(421))))}return"$?"===a.data?(t.flags|=128,t.child=e.child,t=Pu.bind(null,e),a._reactRetry=t,null):(e=o.treeContext,ia=ci(a.nextSibling),ra=t,aa=!0,oa=null,null!==e&&(Xi[Gi++]=Qi,Xi[Gi++]=Zi,Xi[Gi++]=Ki,Qi=e.id,Zi=e.overflow,Ki=t),t=Is(t,i.children),t.flags|=4096,t)}(e,t,l,a,i,o,r);if(s){s=a.fallback,l=t.mode,i=(o=e.child).sibling;var u={mode:"hidden",children:a.children};return 1&l||t.child===o?(a=$u(o,u)).subtreeFlags=14680064&o.subtreeFlags:((a=t.child).childLanes=0,a.pendingProps=u,t.deletions=null),null!==i?s=$u(i,s):(s=Ou(s,l,r,null)).flags|=2,s.return=t,a.return=t,a.sibling=s,t.child=a,a=s,s=t.child,l=null===(l=e.child.memoizedState)?Ls(r):{baseLanes:l.baseLanes|r,cachePool:null,transitions:l.transitions},s.memoizedState=l,s.childLanes=e.childLanes&~r,t.memoizedState=Os,a}return e=(s=e.child).sibling,a=$u(s,{mode:"visible",children:a.children}),!(1&t.mode)&&(a.lanes=r),a.return=t,a.sibling=null,null!==e&&(null===(r=t.deletions)?(t.deletions=[e],t.flags|=16):r.push(e)),t.child=a,t.memoizedState=null,a}function Is(e,t){return(t=Lu({mode:"visible",children:t},e.mode,0,null)).return=e,e.child=t}function Fs(e,t,n,r){return null!==r&&ma(r),wa(t,e.child,null,n),(e=Is(t,t.pendingProps.children)).flags|=2,t.memoizedState=null,e}function Vs(e,t,n){e.lanes|=t;var r=e.alternate;null!==r&&(r.lanes|=t),Ea(e.return,t,n)}function Bs(e,t,n,r,i){var a=e.memoizedState;null===a?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(a.isBackwards=t,a.rendering=null,a.renderingStartTime=0,a.last=r,a.tail=n,a.tailMode=i)}function Ws(e,t,n){var r=t.pendingProps,i=r.revealOrder,a=r.tail;if(ws(e,t,r.children,n),2&(r=eo.current))r=1&r|2,t.flags|=128;else{if(null!==e&&128&e.flags)e:for(e=t.child;null!==e;){if(13===e.tag)null!==e.memoizedState&&Vs(e,n,t);else if(19===e.tag)Vs(e,n,t);else if(null!==e.child){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;null===e.sibling;){if(null===e.return||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(Ti(eo,r),1&t.mode)switch(i){case"forwards":for(n=t.child,i=null;null!==n;)null!==(e=n.alternate)&&null===to(e)&&(i=n),n=n.sibling;null===(n=i)?(i=t.child,t.child=null):(i=n.sibling,n.sibling=null),Bs(t,!1,i,n,a);break;case"backwards":for(n=null,i=t.child,t.child=null;null!==i;){if(null!==(e=i.alternate)&&null===to(e)){t.child=i;break}e=i.sibling,i.sibling=n,n=i,i=e}Bs(t,!0,n,null,a);break;case"together":Bs(t,!1,null,null,void 0);break;default:t.memoizedState=null}else t.memoizedState=null;return t.child}function Us(e,t){!(1&t.mode)&&null!==e&&(e.alternate=null,t.alternate=null,t.flags|=2)}function Ys(e,t,r){if(null!==e&&(t.dependencies=e.dependencies),Ll|=t.lanes,0===(r&t.childLanes))return null;if(null!==e&&t.child!==e.child)throw Error(n(153));if(null!==t.child){for(r=$u(e=t.child,e.pendingProps),t.child=r,r.return=t;null!==e.sibling;)e=e.sibling,(r=r.sibling=$u(e,e.pendingProps)).return=t;r.sibling=null}return t.child}function Hs(e,t){if(!aa)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;null!==t;)null!==t.alternate&&(n=t),t=t.sibling;null===n?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;null!==n;)null!==n.alternate&&(r=n),n=n.sibling;null===r?t||null===e.tail?e.tail=null:e.tail.sibling=null:r.sibling=null}}function qs(e){var t=null!==e.alternate&&e.alternate.child===e.child,n=0,r=0;if(t)for(var i=e.child;null!==i;)n|=i.lanes|i.childLanes,r|=14680064&i.subtreeFlags,r|=14680064&i.flags,i.return=e,i=i.sibling;else for(i=e.child;null!==i;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=e,i=i.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function Xs(e,t,r){var a=t.pendingProps;switch(na(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return qs(t),null;case 1:case 17:return Ri(t.type)&&$i(),qs(t),null;case 3:return a=t.stateNode,Qa(),Ci(Mi),Ci(Ei),ro(),a.pendingContext&&(a.context=a.pendingContext,a.pendingContext=null),null!==e&&null!==e.child||(ha(t)?t.flags|=4:null===e||e.memoizedState.isDehydrated&&!(256&t.flags)||(t.flags|=1024,null!==oa&&(su(oa),oa=null))),Rs(e,t),qs(t),null;case 5:Ja(t);var o=Ga(Xa.current);if(r=t.type,null!==e&&null!=t.stateNode)$s(e,t,r,a,o),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!a){if(null===t.stateNode)throw Error(n(166));return qs(t),null}if(e=Ga(Ha.current),ha(t)){a=t.stateNode,r=t.type;var s=t.memoizedProps;switch(a[pi]=t,a[fi]=s,e=!!(1&t.mode),r){case"dialog":Fr("cancel",a),Fr("close",a);break;case"iframe":case"object":case"embed":Fr("load",a);break;case"video":case"audio":for(o=0;o<Or.length;o++)Fr(Or[o],a);break;case"source":Fr("error",a);break;case"img":case"image":case"link":Fr("error",a),Fr("load",a);break;case"details":Fr("toggle",a);break;case"input":Q(a,s),Fr("invalid",a);break;case"select":a._wrapperState={wasMultiple:!!s.multiple},Fr("invalid",a);break;case"textarea":ae(a,s),Fr("invalid",a)}for(var l in ve(r,s),o=null,s)if(s.hasOwnProperty(l)){var u=s[l];"children"===l?"string"==typeof u?a.textContent!==u&&(!0!==s.suppressHydrationWarning&&Jr(a.textContent,u,e),o=["children",u]):"number"==typeof u&&a.textContent!==""+u&&(!0!==s.suppressHydrationWarning&&Jr(a.textContent,u,e),o=["children",""+u]):i.hasOwnProperty(l)&&null!=u&&"onScroll"===l&&Fr("scroll",a)}switch(r){case"input":q(a),ee(a,s,!0);break;case"textarea":q(a),se(a);break;case"select":case"option":break;default:"function"==typeof s.onClick&&(a.onclick=ei)}a=o,t.updateQueue=a,null!==a&&(t.flags|=4)}else{l=9===o.nodeType?o:o.ownerDocument,"http://www.w3.org/1999/xhtml"===e&&(e=le(r)),"http://www.w3.org/1999/xhtml"===e?"script"===r?((e=l.createElement("div")).innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):"string"==typeof a.is?e=l.createElement(r,{is:a.is}):(e=l.createElement(r),"select"===r&&(l=e,a.multiple?l.multiple=!0:a.size&&(l.size=a.size))):e=l.createElementNS(e,r),e[pi]=t,e[fi]=a,As(e,t,!1,!1),t.stateNode=e;e:{switch(l=be(r,a),r){case"dialog":Fr("cancel",e),Fr("close",e),o=a;break;case"iframe":case"object":case"embed":Fr("load",e),o=a;break;case"video":case"audio":for(o=0;o<Or.length;o++)Fr(Or[o],e);o=a;break;case"source":Fr("error",e),o=a;break;case"img":case"image":case"link":Fr("error",e),Fr("load",e),o=a;break;case"details":Fr("toggle",e),o=a;break;case"input":Q(e,a),o=K(e,a),Fr("invalid",e);break;case"option":default:o=a;break;case"select":e._wrapperState={wasMultiple:!!a.multiple},o=N({},a,{value:void 0}),Fr("invalid",e);break;case"textarea":ae(e,a),o=ie(e,a),Fr("invalid",e)}for(s in ve(r,o),u=o)if(u.hasOwnProperty(s)){var c=u[s];"style"===s?ye(e,c):"dangerouslySetInnerHTML"===s?null!=(c=c?c.__html:void 0)&&he(e,c):"children"===s?"string"==typeof c?("textarea"!==r||""!==c)&&pe(e,c):"number"==typeof c&&pe(e,""+c):"suppressContentEditableWarning"!==s&&"suppressHydrationWarning"!==s&&"autoFocus"!==s&&(i.hasOwnProperty(s)?null!=c&&"onScroll"===s&&Fr("scroll",e):null!=c&&x(e,s,c,l))}switch(r){case"input":q(e),ee(e,a,!1);break;case"textarea":q(e),se(e);break;case"option":null!=a.value&&e.setAttribute("value",""+Y(a.value));break;case"select":e.multiple=!!a.multiple,null!=(s=a.value)?re(e,!!a.multiple,s,!1):null!=a.defaultValue&&re(e,!!a.multiple,a.defaultValue,!0);break;default:"function"==typeof o.onClick&&(e.onclick=ei)}switch(r){case"button":case"input":case"select":case"textarea":a=!!a.autoFocus;break e;case"img":a=!0;break e;default:a=!1}}a&&(t.flags|=4)}null!==t.ref&&(t.flags|=512,t.flags|=2097152)}return qs(t),null;case 6:if(e&&null!=t.stateNode)Ds(e,t,e.memoizedProps,a);else{if("string"!=typeof a&&null===t.stateNode)throw Error(n(166));if(r=Ga(Xa.current),Ga(Ha.current),ha(t)){if(a=t.stateNode,r=t.memoizedProps,a[pi]=t,(s=a.nodeValue!==r)&&null!==(e=ra))switch(e.tag){case 3:Jr(a.nodeValue,r,!!(1&e.mode));break;case 5:!0!==e.memoizedProps.suppressHydrationWarning&&Jr(a.nodeValue,r,!!(1&e.mode))}s&&(t.flags|=4)}else(a=(9===r.nodeType?r:r.ownerDocument).createTextNode(a))[pi]=t,t.stateNode=a}return qs(t),null;case 13:if(Ci(eo),a=t.memoizedState,null===e||null!==e.memoizedState&&null!==e.memoizedState.dehydrated){if(aa&&null!==ia&&1&t.mode&&!(128&t.flags))pa(),fa(),t.flags|=98560,s=!1;else if(s=ha(t),null!==a&&null!==a.dehydrated){if(null===e){if(!s)throw Error(n(318));if(!(s=null!==(s=t.memoizedState)?s.dehydrated:null))throw Error(n(317));s[pi]=t}else fa(),!(128&t.flags)&&(t.memoizedState=null),t.flags|=4;qs(t),s=!1}else null!==oa&&(su(oa),oa=null),s=!0;if(!s)return 65536&t.flags?t:null}return 128&t.flags?(t.lanes=r,t):((a=null!==a)!==(null!==e&&null!==e.memoizedState)&&a&&(t.child.flags|=8192,1&t.mode&&(null===e||1&eo.current?0===Dl&&(Dl=3):gu())),null!==t.updateQueue&&(t.flags|=4),qs(t),null);case 4:return Qa(),Rs(e,t),null===e&&Wr(t.stateNode.containerInfo),qs(t),null;case 10:return Pa(t.type._context),qs(t),null;case 19:if(Ci(eo),null===(s=t.memoizedState))return qs(t),null;if(a=!!(128&t.flags),null===(l=s.rendering))if(a)Hs(s,!1);else{if(0!==Dl||null!==e&&128&e.flags)for(e=t.child;null!==e;){if(null!==(l=to(e))){for(t.flags|=128,Hs(s,!1),null!==(a=l.updateQueue)&&(t.updateQueue=a,t.flags|=4),t.subtreeFlags=0,a=r,r=t.child;null!==r;)e=a,(s=r).flags&=14680066,null===(l=s.alternate)?(s.childLanes=0,s.lanes=e,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=l.childLanes,s.lanes=l.lanes,s.child=l.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=l.memoizedProps,s.memoizedState=l.memoizedState,s.updateQueue=l.updateQueue,s.type=l.type,e=l.dependencies,s.dependencies=null===e?null:{lanes:e.lanes,firstContext:e.firstContext}),r=r.sibling;return Ti(eo,1&eo.current|2),t.child}e=e.sibling}null!==s.tail&&Ze()>Wl&&(t.flags|=128,a=!0,Hs(s,!1),t.lanes=4194304)}else{if(!a)if(null!==(e=to(l))){if(t.flags|=128,a=!0,null!==(r=e.updateQueue)&&(t.updateQueue=r,t.flags|=4),Hs(s,!0),null===s.tail&&"hidden"===s.tailMode&&!l.alternate&&!aa)return qs(t),null}else 2*Ze()-s.renderingStartTime>Wl&&1073741824!==r&&(t.flags|=128,a=!0,Hs(s,!1),t.lanes=4194304);s.isBackwards?(l.sibling=t.child,t.child=l):(null!==(r=s.last)?r.sibling=l:t.child=l,s.last=l)}return null!==s.tail?(t=s.tail,s.rendering=t,s.tail=t.sibling,s.renderingStartTime=Ze(),t.sibling=null,r=eo.current,Ti(eo,a?1&r|2:1&r),t):(qs(t),null);case 22:case 23:return hu(),a=null!==t.memoizedState,null!==e&&null!==e.memoizedState!==a&&(t.flags|=8192),a&&1&t.mode?!!(1073741824&Rl)&&(qs(t),6&t.subtreeFlags&&(t.flags|=8192)):qs(t),null;case 24:case 25:return null}throw Error(n(156,t.tag))}function Gs(e,t){switch(na(t),t.tag){case 1:return Ri(t.type)&&$i(),65536&(e=t.flags)?(t.flags=-65537&e|128,t):null;case 3:return Qa(),Ci(Mi),Ci(Ei),ro(),65536&(e=t.flags)&&!(128&e)?(t.flags=-65537&e|128,t):null;case 5:return Ja(t),null;case 13:if(Ci(eo),null!==(e=t.memoizedState)&&null!==e.dehydrated){if(null===t.alternate)throw Error(n(340));fa()}return 65536&(e=t.flags)?(t.flags=-65537&e|128,t):null;case 19:return Ci(eo),null;case 4:return Qa(),null;case 10:return Pa(t.type._context),null;case 22:case 23:return hu(),null;default:return null}}As=function(e,t){for(var n=t.child;null!==n;){if(5===n.tag||6===n.tag)e.appendChild(n.stateNode);else if(4!==n.tag&&null!==n.child){n.child.return=n,n=n.child;continue}if(n===t)break;for(;null===n.sibling;){if(null===n.return||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}},Rs=function(){},$s=function(e,t,n,r){var a=e.memoizedProps;if(a!==r){e=t.stateNode,Ga(Ha.current);var o,s=null;switch(n){case"input":a=K(e,a),r=K(e,r),s=[];break;case"select":a=N({},a,{value:void 0}),r=N({},r,{value:void 0}),s=[];break;case"textarea":a=ie(e,a),r=ie(e,r),s=[];break;default:"function"!=typeof a.onClick&&"function"==typeof r.onClick&&(e.onclick=ei)}for(c in ve(n,r),n=null,a)if(!r.hasOwnProperty(c)&&a.hasOwnProperty(c)&&null!=a[c])if("style"===c){var l=a[c];for(o in l)l.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else"dangerouslySetInnerHTML"!==c&&"children"!==c&&"suppressContentEditableWarning"!==c&&"suppressHydrationWarning"!==c&&"autoFocus"!==c&&(i.hasOwnProperty(c)?s||(s=[]):(s=s||[]).push(c,null));for(c in r){var u=r[c];if(l=null!=a?a[c]:void 0,r.hasOwnProperty(c)&&u!==l&&(null!=u||null!=l))if("style"===c)if(l){for(o in l)!l.hasOwnProperty(o)||u&&u.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in u)u.hasOwnProperty(o)&&l[o]!==u[o]&&(n||(n={}),n[o]=u[o])}else n||(s||(s=[]),s.push(c,n)),n=u;else"dangerouslySetInnerHTML"===c?(u=u?u.__html:void 0,l=l?l.__html:void 0,null!=u&&l!==u&&(s=s||[]).push(c,u)):"children"===c?"string"!=typeof u&&"number"!=typeof u||(s=s||[]).push(c,""+u):"suppressContentEditableWarning"!==c&&"suppressHydrationWarning"!==c&&(i.hasOwnProperty(c)?(null!=u&&"onScroll"===c&&Fr("scroll",e),s||l===u||(s=[])):(s=s||[]).push(c,u))}n&&(s=s||[]).push("style",n);var c=s;(t.updateQueue=c)&&(t.flags|=4)}},Ds=function(e,t,n,r){n!==r&&(t.flags|=4)};var Ks=!1,Qs=!1,Zs="function"==typeof WeakSet?WeakSet:Set,Js=null;function el(e,t){var n=e.ref;if(null!==n)if("function"==typeof n)try{n(null)}catch(r){ju(e,t,r)}else n.current=null}function tl(e,t,n){try{n()}catch(r){ju(e,t,r)}}var nl=!1;function rl(e,t,n){var r=t.updateQueue;if(null!==(r=null!==r?r.lastEffect:null)){var i=r=r.next;do{if((i.tag&e)===e){var a=i.destroy;i.destroy=void 0,void 0!==a&&tl(t,n,a)}i=i.next}while(i!==r)}}function il(e,t){if(null!==(t=null!==(t=t.updateQueue)?t.lastEffect:null)){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function al(e){var t=e.ref;if(null!==t){var n=e.stateNode;e.tag,e=n,"function"==typeof t?t(e):t.current=e}}function ol(e){var t=e.alternate;null!==t&&(e.alternate=null,ol(t)),e.child=null,e.deletions=null,e.sibling=null,5===e.tag&&(null!==(t=e.stateNode)&&(delete t[pi],delete t[fi],delete t[gi],delete t[yi],delete t[xi])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function sl(e){return 5===e.tag||3===e.tag||4===e.tag}function ll(e){e:for(;;){for(;null===e.sibling;){if(null===e.return||sl(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;5!==e.tag&&6!==e.tag&&18!==e.tag;){if(2&e.flags)continue e;if(null===e.child||4===e.tag)continue e;e.child.return=e,e=e.child}if(!(2&e.flags))return e.stateNode}}function ul(e,t,n){var r=e.tag;if(5===r||6===r)e=e.stateNode,t?8===n.nodeType?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(8===n.nodeType?(t=n.parentNode).insertBefore(e,n):(t=n).appendChild(e),null!=(n=n._reactRootContainer)||null!==t.onclick||(t.onclick=ei));else if(4!==r&&null!==(e=e.child))for(ul(e,t,n),e=e.sibling;null!==e;)ul(e,t,n),e=e.sibling}function cl(e,t,n){var r=e.tag;if(5===r||6===r)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(4!==r&&null!==(e=e.child))for(cl(e,t,n),e=e.sibling;null!==e;)cl(e,t,n),e=e.sibling}var dl=null,hl=!1;function pl(e,t,n){for(n=n.child;null!==n;)fl(e,t,n),n=n.sibling}function fl(e,t,n){if(ot&&"function"==typeof ot.onCommitFiberUnmount)try{ot.onCommitFiberUnmount(at,n)}catch(s){}switch(n.tag){case 5:Qs||el(n,t);case 6:var r=dl,i=hl;dl=null,pl(e,t,n),hl=i,null!==(dl=r)&&(hl?(e=dl,n=n.stateNode,8===e.nodeType?e.parentNode.removeChild(n):e.removeChild(n)):dl.removeChild(n.stateNode));break;case 18:null!==dl&&(hl?(e=dl,n=n.stateNode,8===e.nodeType?ui(e.parentNode,n):1===e.nodeType&&ui(e,n),Wt(e)):ui(dl,n.stateNode));break;case 4:r=dl,i=hl,dl=n.stateNode.containerInfo,hl=!0,pl(e,t,n),dl=r,hl=i;break;case 0:case 11:case 14:case 15:if(!Qs&&(null!==(r=n.updateQueue)&&null!==(r=r.lastEffect))){i=r=r.next;do{var a=i,o=a.destroy;a=a.tag,void 0!==o&&(2&a||4&a)&&tl(n,t,o),i=i.next}while(i!==r)}pl(e,t,n);break;case 1:if(!Qs&&(el(n,t),"function"==typeof(r=n.stateNode).componentWillUnmount))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(s){ju(n,t,s)}pl(e,t,n);break;case 21:pl(e,t,n);break;case 22:1&n.mode?(Qs=(r=Qs)||null!==n.memoizedState,pl(e,t,n),Qs=r):pl(e,t,n);break;default:pl(e,t,n)}}function ml(e){var t=e.updateQueue;if(null!==t){e.updateQueue=null;var n=e.stateNode;null===n&&(n=e.stateNode=new Zs),t.forEach(function(t){var r=Eu.bind(null,e,t);n.has(t)||(n.add(t),t.then(r,r))})}}function gl(e,t){var r=t.deletions;if(null!==r)for(var i=0;i<r.length;i++){var a=r[i];try{var o=e,s=t,l=s;e:for(;null!==l;){switch(l.tag){case 5:dl=l.stateNode,hl=!1;break e;case 3:case 4:dl=l.stateNode.containerInfo,hl=!0;break e}l=l.return}if(null===dl)throw Error(n(160));fl(o,s,a),dl=null,hl=!1;var u=a.alternate;null!==u&&(u.return=null),a.return=null}catch(c){ju(a,t,c)}}if(12854&t.subtreeFlags)for(t=t.child;null!==t;)yl(t,e),t=t.sibling}function yl(e,t){var r=e.alternate,i=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(gl(t,e),xl(e),4&i){try{rl(3,e,e.return),il(3,e)}catch(g){ju(e,e.return,g)}try{rl(5,e,e.return)}catch(g){ju(e,e.return,g)}}break;case 1:gl(t,e),xl(e),512&i&&null!==r&&el(r,r.return);break;case 5:if(gl(t,e),xl(e),512&i&&null!==r&&el(r,r.return),32&e.flags){var a=e.stateNode;try{pe(a,"")}catch(g){ju(e,e.return,g)}}if(4&i&&null!=(a=e.stateNode)){var o=e.memoizedProps,s=null!==r?r.memoizedProps:o,l=e.type,u=e.updateQueue;if(e.updateQueue=null,null!==u)try{"input"===l&&"radio"===o.type&&null!=o.name&&Z(a,o),be(l,s);var c=be(l,o);for(s=0;s<u.length;s+=2){var d=u[s],h=u[s+1];"style"===d?ye(a,h):"dangerouslySetInnerHTML"===d?he(a,h):"children"===d?pe(a,h):x(a,d,h,c)}switch(l){case"input":J(a,o);break;case"textarea":oe(a,o);break;case"select":var p=a._wrapperState.wasMultiple;a._wrapperState.wasMultiple=!!o.multiple;var f=o.value;null!=f?re(a,!!o.multiple,f,!1):p!==!!o.multiple&&(null!=o.defaultValue?re(a,!!o.multiple,o.defaultValue,!0):re(a,!!o.multiple,o.multiple?[]:"",!1))}a[fi]=o}catch(g){ju(e,e.return,g)}}break;case 6:if(gl(t,e),xl(e),4&i){if(null===e.stateNode)throw Error(n(162));a=e.stateNode,o=e.memoizedProps;try{a.nodeValue=o}catch(g){ju(e,e.return,g)}}break;case 3:if(gl(t,e),xl(e),4&i&&null!==r&&r.memoizedState.isDehydrated)try{Wt(t.containerInfo)}catch(g){ju(e,e.return,g)}break;case 4:default:gl(t,e),xl(e);break;case 13:gl(t,e),xl(e),8192&(a=e.child).flags&&(o=null!==a.memoizedState,a.stateNode.isHidden=o,!o||null!==a.alternate&&null!==a.alternate.memoizedState||(Bl=Ze())),4&i&&ml(e);break;case 22:if(d=null!==r&&null!==r.memoizedState,1&e.mode?(Qs=(c=Qs)||d,gl(t,e),Qs=c):gl(t,e),xl(e),8192&i){if(c=null!==e.memoizedState,(e.stateNode.isHidden=c)&&!d&&1&e.mode)for(Js=e,d=e.child;null!==d;){for(h=Js=d;null!==Js;){switch(f=(p=Js).child,p.tag){case 0:case 11:case 14:case 15:rl(4,p,p.return);break;case 1:el(p,p.return);var m=p.stateNode;if("function"==typeof m.componentWillUnmount){i=p,r=p.return;try{t=i,m.props=t.memoizedProps,m.state=t.memoizedState,m.componentWillUnmount()}catch(g){ju(i,r,g)}}break;case 5:el(p,p.return);break;case 22:if(null!==p.memoizedState){kl(h);continue}}null!==f?(f.return=p,Js=f):kl(h)}d=d.sibling}e:for(d=null,h=e;;){if(5===h.tag){if(null===d){d=h;try{a=h.stateNode,c?"function"==typeof(o=a.style).setProperty?o.setProperty("display","none","important"):o.display="none":(l=h.stateNode,s=null!=(u=h.memoizedProps.style)&&u.hasOwnProperty("display")?u.display:null,l.style.display=ge("display",s))}catch(g){ju(e,e.return,g)}}}else if(6===h.tag){if(null===d)try{h.stateNode.nodeValue=c?"":h.memoizedProps}catch(g){ju(e,e.return,g)}}else if((22!==h.tag&&23!==h.tag||null===h.memoizedState||h===e)&&null!==h.child){h.child.return=h,h=h.child;continue}if(h===e)break e;for(;null===h.sibling;){if(null===h.return||h.return===e)break e;d===h&&(d=null),h=h.return}d===h&&(d=null),h.sibling.return=h.return,h=h.sibling}}break;case 19:gl(t,e),xl(e),4&i&&ml(e);case 21:}}function xl(e){var t=e.flags;if(2&t){try{e:{for(var r=e.return;null!==r;){if(sl(r)){var i=r;break e}r=r.return}throw Error(n(160))}switch(i.tag){case 5:var a=i.stateNode;32&i.flags&&(pe(a,""),i.flags&=-33),cl(e,ll(e),a);break;case 3:case 4:var o=i.stateNode.containerInfo;ul(e,ll(e),o);break;default:throw Error(n(161))}}catch(s){ju(e,e.return,s)}e.flags&=-3}4096&t&&(e.flags&=-4097)}function vl(e,t,n){Js=e,bl(e)}function bl(e,t,n){for(var r=!!(1&e.mode);null!==Js;){var i=Js,a=i.child;if(22===i.tag&&r){var o=null!==i.memoizedState||Ks;if(!o){var s=i.alternate,l=null!==s&&null!==s.memoizedState||Qs;s=Ks;var u=Qs;if(Ks=o,(Qs=l)&&!u)for(Js=i;null!==Js;)l=(o=Js).child,22===o.tag&&null!==o.memoizedState?_l(i):null!==l?(l.return=o,Js=l):_l(i);for(;null!==a;)Js=a,bl(a),a=a.sibling;Js=i,Ks=s,Qs=u}wl(e)}else 8772&i.subtreeFlags&&null!==a?(a.return=i,Js=a):wl(e)}}function wl(e){for(;null!==Js;){var t=Js;if(8772&t.flags){var r=t.alternate;try{if(8772&t.flags)switch(t.tag){case 0:case 11:case 15:Qs||il(5,t);break;case 1:var i=t.stateNode;if(4&t.flags&&!Qs)if(null===r)i.componentDidMount();else{var a=t.elementType===t.type?r.memoizedProps:rs(t.type,r.memoizedProps);i.componentDidUpdate(a,r.memoizedState,i.__reactInternalSnapshotBeforeUpdate)}var o=t.updateQueue;null!==o&&Ua(t,o,i);break;case 3:var s=t.updateQueue;if(null!==s){if(r=null,null!==t.child)switch(t.child.tag){case 5:case 1:r=t.child.stateNode}Ua(t,s,r)}break;case 5:var l=t.stateNode;if(null===r&&4&t.flags){r=l;var u=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":u.autoFocus&&r.focus();break;case"img":u.src&&(r.src=u.src)}}break;case 6:case 4:case 12:case 19:case 17:case 21:case 22:case 23:case 25:break;case 13:if(null===t.memoizedState){var c=t.alternate;if(null!==c){var d=c.memoizedState;if(null!==d){var h=d.dehydrated;null!==h&&Wt(h)}}}break;default:throw Error(n(163))}Qs||512&t.flags&&al(t)}catch(p){ju(t,t.return,p)}}if(t===e){Js=null;break}if(null!==(r=t.sibling)){r.return=t.return,Js=r;break}Js=t.return}}function kl(e){for(;null!==Js;){var t=Js;if(t===e){Js=null;break}var n=t.sibling;if(null!==n){n.return=t.return,Js=n;break}Js=t.return}}function _l(e){for(;null!==Js;){var t=Js;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{il(4,t)}catch(l){ju(t,n,l)}break;case 1:var r=t.stateNode;if("function"==typeof r.componentDidMount){var i=t.return;try{r.componentDidMount()}catch(l){ju(t,i,l)}}var a=t.return;try{al(t)}catch(l){ju(t,a,l)}break;case 5:var o=t.return;try{al(t)}catch(l){ju(t,o,l)}}}catch(l){ju(t,t.return,l)}if(t===e){Js=null;break}var s=t.sibling;if(null!==s){s.return=t.return,Js=s;break}Js=t.return}}var Sl,jl=Math.ceil,Cl=v.ReactCurrentDispatcher,Tl=v.ReactCurrentOwner,Pl=v.ReactCurrentBatchConfig,El=0,Ml=null,zl=null,Al=0,Rl=0,$l=ji(0),Dl=0,Ol=null,Ll=0,Nl=0,Il=0,Fl=null,Vl=null,Bl=0,Wl=1/0,Ul=null,Yl=!1,Hl=null,ql=null,Xl=!1,Gl=null,Kl=0,Ql=0,Zl=null,Jl=-1,eu=0;function tu(){return 6&El?Ze():-1!==Jl?Jl:Jl=Ze()}function nu(e){return 1&e.mode?2&El&&0!==Al?Al&-Al:null!==ga.transition?(0===eu&&(eu=gt()),eu):0!==(e=bt)?e:e=void 0===(e=window.event)?16:Qt(e.type):1}function ru(e,t,r,i){if(50<Ql)throw Ql=0,Zl=null,Error(n(185));xt(e,r,i),2&El&&e===Ml||(e===Ml&&(!(2&El)&&(Nl|=r),4===Dl&&lu(e,Al)),iu(e,i),1===r&&0===El&&!(1&t.mode)&&(Wl=Ze()+500,Fi&&Wi()))}function iu(e,t){var n=e.callbackNode;!function(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,i=e.expirationTimes,a=e.pendingLanes;0<a;){var o=31-st(a),s=1<<o,l=i[o];-1===l?0!==(s&n)&&0===(s&r)||(i[o]=ft(s,t)):l<=t&&(e.expiredLanes|=s),a&=~s}}(e,t);var r=pt(e,e===Ml?Al:0);if(0===r)null!==n&&Ge(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(null!=n&&Ge(n),1===t)0===e.tag?function(e){Fi=!0,Bi(e)}(uu.bind(null,e)):Bi(uu.bind(null,e)),si(function(){!(6&El)&&Wi()}),n=null;else{switch(wt(r)){case 1:n=et;break;case 4:n=tt;break;case 16:default:n=nt;break;case 536870912:n=it}n=Mu(n,au.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function au(e,t){if(Jl=-1,eu=0,6&El)throw Error(n(327));var r=e.callbackNode;if(_u()&&e.callbackNode!==r)return null;var i=pt(e,e===Ml?Al:0);if(0===i)return null;if(30&i||0!==(i&e.expiredLanes)||t)t=yu(e,i);else{t=i;var a=El;El|=2;var o=mu();for(Ml===e&&Al===t||(Ul=null,Wl=Ze()+500,pu(e,t));;)try{vu();break}catch(l){fu(e,l)}Ta(),Cl.current=o,El=a,null!==zl?t=0:(Ml=null,Al=0,t=Dl)}if(0!==t){if(2===t&&(0!==(a=mt(e))&&(i=a,t=ou(e,a))),1===t)throw r=Ol,pu(e,0),lu(e,i),iu(e,Ze()),r;if(6===t)lu(e,i);else{if(a=e.current.alternate,!(30&i||function(e){for(var t=e;;){if(16384&t.flags){var n=t.updateQueue;if(null!==n&&null!==(n=n.stores))for(var r=0;r<n.length;r++){var i=n[r],a=i.getSnapshot;i=i.value;try{if(!lr(a(),i))return!1}catch(s){return!1}}}if(n=t.child,16384&t.subtreeFlags&&null!==n)n.return=t,t=n;else{if(t===e)break;for(;null===t.sibling;){if(null===t.return||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}(a)||(t=yu(e,i),2===t&&(o=mt(e),0!==o&&(i=o,t=ou(e,o))),1!==t)))throw r=Ol,pu(e,0),lu(e,i),iu(e,Ze()),r;switch(e.finishedWork=a,e.finishedLanes=i,t){case 0:case 1:throw Error(n(345));case 2:case 5:ku(e,Vl,Ul);break;case 3:if(lu(e,i),(130023424&i)===i&&10<(t=Bl+500-Ze())){if(0!==pt(e,0))break;if(((a=e.suspendedLanes)&i)!==i){tu(),e.pingedLanes|=e.suspendedLanes&a;break}e.timeoutHandle=ii(ku.bind(null,e,Vl,Ul),t);break}ku(e,Vl,Ul);break;case 4:if(lu(e,i),(4194240&i)===i)break;for(t=e.eventTimes,a=-1;0<i;){var s=31-st(i);o=1<<s,(s=t[s])>a&&(a=s),i&=~o}if(i=a,10<(i=(120>(i=Ze()-i)?120:480>i?480:1080>i?1080:1920>i?1920:3e3>i?3e3:4320>i?4320:1960*jl(i/1960))-i)){e.timeoutHandle=ii(ku.bind(null,e,Vl,Ul),i);break}ku(e,Vl,Ul);break;default:throw Error(n(329))}}}return iu(e,Ze()),e.callbackNode===r?au.bind(null,e):null}function ou(e,t){var n=Fl;return e.current.memoizedState.isDehydrated&&(pu(e,t).flags|=256),2!==(e=yu(e,t))&&(t=Vl,Vl=n,null!==t&&su(t)),e}function su(e){null===Vl?Vl=e:Vl.push.apply(Vl,e)}function lu(e,t){for(t&=~Il,t&=~Nl,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-st(t),r=1<<n;e[n]=-1,t&=~r}}function uu(e){if(6&El)throw Error(n(327));_u();var t=pt(e,0);if(!(1&t))return iu(e,Ze()),null;var r=yu(e,t);if(0!==e.tag&&2===r){var i=mt(e);0!==i&&(t=i,r=ou(e,i))}if(1===r)throw r=Ol,pu(e,0),lu(e,t),iu(e,Ze()),r;if(6===r)throw Error(n(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,ku(e,Vl,Ul),iu(e,Ze()),null}function cu(e,t){var n=El;El|=1;try{return e(t)}finally{0===(El=n)&&(Wl=Ze()+500,Fi&&Wi())}}function du(e){null!==Gl&&0===Gl.tag&&!(6&El)&&_u();var t=El;El|=1;var n=Pl.transition,r=bt;try{if(Pl.transition=null,bt=1,e)return e()}finally{bt=r,Pl.transition=n,!(6&(El=t))&&Wi()}}function hu(){Rl=$l.current,Ci($l)}function pu(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(-1!==n&&(e.timeoutHandle=-1,ai(n)),null!==zl)for(n=zl.return;null!==n;){var r=n;switch(na(r),r.tag){case 1:null!=(r=r.type.childContextTypes)&&$i();break;case 3:Qa(),Ci(Mi),Ci(Ei),ro();break;case 5:Ja(r);break;case 4:Qa();break;case 13:case 19:Ci(eo);break;case 10:Pa(r.type._context);break;case 22:case 23:hu()}n=n.return}if(Ml=e,zl=e=$u(e.current,null),Al=Rl=t,Dl=0,Ol=null,Il=Nl=Ll=0,Vl=Fl=null,null!==Aa){for(t=0;t<Aa.length;t++)if(null!==(r=(n=Aa[t]).interleaved)){n.interleaved=null;var i=r.next,a=n.pending;if(null!==a){var o=a.next;a.next=i,r.next=o}n.pending=r}Aa=null}return e}function fu(e,t){for(;;){var r=zl;try{if(Ta(),io.current=Jo,co){for(var i=so.memoizedState;null!==i;){var a=i.queue;null!==a&&(a.pending=null),i=i.next}co=!1}if(oo=0,uo=lo=so=null,ho=!1,po=0,Tl.current=null,null===r||null===r.return){Dl=1,Ol=t,zl=null;break}e:{var o=e,s=r.return,l=r,u=t;if(t=Al,l.flags|=32768,null!==u&&"object"==typeof u&&"function"==typeof u.then){var c=u,d=l,h=d.tag;if(!(1&d.mode||0!==h&&11!==h&&15!==h)){var p=d.alternate;p?(d.updateQueue=p.updateQueue,d.memoizedState=p.memoizedState,d.lanes=p.lanes):(d.updateQueue=null,d.memoizedState=null)}var f=ys(s);if(null!==f){f.flags&=-257,xs(f,s,l,0,t),1&f.mode&&gs(o,c,t),u=c;var m=(t=f).updateQueue;if(null===m){var g=new Set;g.add(u),t.updateQueue=g}else m.add(u);break e}if(!(1&t)){gs(o,c,t),gu();break e}u=Error(n(426))}else if(aa&&1&l.mode){var y=ys(s);if(null!==y){!(65536&y.flags)&&(y.flags|=256),xs(y,s,l,0,t),ma(cs(u,l));break e}}o=u=cs(u,l),4!==Dl&&(Dl=2),null===Fl?Fl=[o]:Fl.push(o),o=s;do{switch(o.tag){case 3:o.flags|=65536,t&=-t,o.lanes|=t,Ba(o,fs(0,u,t));break e;case 1:l=u;var x=o.type,v=o.stateNode;if(!(128&o.flags||"function"!=typeof x.getDerivedStateFromError&&(null===v||"function"!=typeof v.componentDidCatch||null!==ql&&ql.has(v)))){o.flags|=65536,t&=-t,o.lanes|=t,Ba(o,ms(o,l,t));break e}}o=o.return}while(null!==o)}wu(r)}catch(b){t=b,zl===r&&null!==r&&(zl=r=r.return);continue}break}}function mu(){var e=Cl.current;return Cl.current=Jo,null===e?Jo:e}function gu(){0!==Dl&&3!==Dl&&2!==Dl||(Dl=4),null===Ml||!(268435455&Ll)&&!(268435455&Nl)||lu(Ml,Al)}function yu(e,t){var r=El;El|=2;var i=mu();for(Ml===e&&Al===t||(Ul=null,pu(e,t));;)try{xu();break}catch(a){fu(e,a)}if(Ta(),El=r,Cl.current=i,null!==zl)throw Error(n(261));return Ml=null,Al=0,Dl}function xu(){for(;null!==zl;)bu(zl)}function vu(){for(;null!==zl&&!Ke();)bu(zl)}function bu(e){var t=Sl(e.alternate,e,Rl);e.memoizedProps=e.pendingProps,null===t?wu(e):zl=t,Tl.current=null}function wu(e){var t=e;do{var n=t.alternate;if(e=t.return,32768&t.flags){if(null!==(n=Gs(n,t)))return n.flags&=32767,void(zl=n);if(null===e)return Dl=6,void(zl=null);e.flags|=32768,e.subtreeFlags=0,e.deletions=null}else if(null!==(n=Xs(n,t,Rl)))return void(zl=n);if(null!==(t=t.sibling))return void(zl=t);zl=t=e}while(null!==t);0===Dl&&(Dl=5)}function ku(e,t,r){var i=bt,a=Pl.transition;try{Pl.transition=null,bt=1,function(e,t,r,i){do{_u()}while(null!==Gl);if(6&El)throw Error(n(327));r=e.finishedWork;var a=e.finishedLanes;if(null===r)return null;if(e.finishedWork=null,e.finishedLanes=0,r===e.current)throw Error(n(177));e.callbackNode=null,e.callbackPriority=0;var o=r.lanes|r.childLanes;if(function(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var i=31-st(n),a=1<<i;t[i]=0,r[i]=-1,e[i]=-1,n&=~a}}(e,o),e===Ml&&(zl=Ml=null,Al=0),!(2064&r.subtreeFlags)&&!(2064&r.flags)||Xl||(Xl=!0,Mu(nt,function(){return _u(),null})),o=!!(15990&r.flags),!!(15990&r.subtreeFlags)||o){o=Pl.transition,Pl.transition=null;var s=bt;bt=1;var l=El;El|=4,Tl.current=null,function(e,t){if(ti=Yt,fr(e=pr())){if("selectionStart"in e)var r={start:e.selectionStart,end:e.selectionEnd};else e:{var i=(r=(r=e.ownerDocument)&&r.defaultView||window).getSelection&&r.getSelection();if(i&&0!==i.rangeCount){r=i.anchorNode;var a=i.anchorOffset,o=i.focusNode;i=i.focusOffset;try{r.nodeType,o.nodeType}catch(w){r=null;break e}var s=0,l=-1,u=-1,c=0,d=0,h=e,p=null;t:for(;;){for(var f;h!==r||0!==a&&3!==h.nodeType||(l=s+a),h!==o||0!==i&&3!==h.nodeType||(u=s+i),3===h.nodeType&&(s+=h.nodeValue.length),null!==(f=h.firstChild);)p=h,h=f;for(;;){if(h===e)break t;if(p===r&&++c===a&&(l=s),p===o&&++d===i&&(u=s),null!==(f=h.nextSibling))break;p=(h=p).parentNode}h=f}r=-1===l||-1===u?null:{start:l,end:u}}else r=null}r=r||{start:0,end:0}}else r=null;for(ni={focusedElem:e,selectionRange:r},Yt=!1,Js=t;null!==Js;)if(e=(t=Js).child,1028&t.subtreeFlags&&null!==e)e.return=t,Js=e;else for(;null!==Js;){t=Js;try{var m=t.alternate;if(1024&t.flags)switch(t.tag){case 0:case 11:case 15:case 5:case 6:case 4:case 17:break;case 1:if(null!==m){var g=m.memoizedProps,y=m.memoizedState,x=t.stateNode,v=x.getSnapshotBeforeUpdate(t.elementType===t.type?g:rs(t.type,g),y);x.__reactInternalSnapshotBeforeUpdate=v}break;case 3:var b=t.stateNode.containerInfo;1===b.nodeType?b.textContent="":9===b.nodeType&&b.documentElement&&b.removeChild(b.documentElement);break;default:throw Error(n(163))}}catch(w){ju(t,t.return,w)}if(null!==(e=t.sibling)){e.return=t.return,Js=e;break}Js=t.return}m=nl,nl=!1}(e,r),yl(r,e),mr(ni),Yt=!!ti,ni=ti=null,e.current=r,vl(r),Qe(),El=l,bt=s,Pl.transition=o}else e.current=r;if(Xl&&(Xl=!1,Gl=e,Kl=a),o=e.pendingLanes,0===o&&(ql=null),function(e){if(ot&&"function"==typeof ot.onCommitFiberRoot)try{ot.onCommitFiberRoot(at,e,void 0,!(128&~e.current.flags))}catch(t){}}(r.stateNode),iu(e,Ze()),null!==t)for(i=e.onRecoverableError,r=0;r<t.length;r++)a=t[r],i(a.value,{componentStack:a.stack,digest:a.digest});if(Yl)throw Yl=!1,e=Hl,Hl=null,e;!!(1&Kl)&&0!==e.tag&&_u(),o=e.pendingLanes,1&o?e===Zl?Ql++:(Ql=0,Zl=e):Ql=0,Wi()}(e,t,r,i)}finally{Pl.transition=a,bt=i}return null}function _u(){if(null!==Gl){var e=wt(Kl),t=Pl.transition,r=bt;try{if(Pl.transition=null,bt=16>e?16:e,null===Gl)var i=!1;else{if(e=Gl,Gl=null,Kl=0,6&El)throw Error(n(331));var a=El;for(El|=4,Js=e.current;null!==Js;){var o=Js,s=o.child;if(16&Js.flags){var l=o.deletions;if(null!==l){for(var u=0;u<l.length;u++){var c=l[u];for(Js=c;null!==Js;){var d=Js;switch(d.tag){case 0:case 11:case 15:rl(8,d,o)}var h=d.child;if(null!==h)h.return=d,Js=h;else for(;null!==Js;){var p=(d=Js).sibling,f=d.return;if(ol(d),d===c){Js=null;break}if(null!==p){p.return=f,Js=p;break}Js=f}}}var m=o.alternate;if(null!==m){var g=m.child;if(null!==g){m.child=null;do{var y=g.sibling;g.sibling=null,g=y}while(null!==g)}}Js=o}}if(2064&o.subtreeFlags&&null!==s)s.return=o,Js=s;else e:for(;null!==Js;){if(2048&(o=Js).flags)switch(o.tag){case 0:case 11:case 15:rl(9,o,o.return)}var x=o.sibling;if(null!==x){x.return=o.return,Js=x;break e}Js=o.return}}var v=e.current;for(Js=v;null!==Js;){var b=(s=Js).child;if(2064&s.subtreeFlags&&null!==b)b.return=s,Js=b;else e:for(s=v;null!==Js;){if(2048&(l=Js).flags)try{switch(l.tag){case 0:case 11:case 15:il(9,l)}}catch(k){ju(l,l.return,k)}if(l===s){Js=null;break e}var w=l.sibling;if(null!==w){w.return=l.return,Js=w;break e}Js=l.return}}if(El=a,Wi(),ot&&"function"==typeof ot.onPostCommitFiberRoot)try{ot.onPostCommitFiberRoot(at,e)}catch(k){}i=!0}return i}finally{bt=r,Pl.transition=t}}return!1}function Su(e,t,n){e=Fa(e,t=fs(0,t=cs(n,t),1),1),t=tu(),null!==e&&(xt(e,1,t),iu(e,t))}function ju(e,t,n){if(3===e.tag)Su(e,e,n);else for(;null!==t;){if(3===t.tag){Su(t,e,n);break}if(1===t.tag){var r=t.stateNode;if("function"==typeof t.type.getDerivedStateFromError||"function"==typeof r.componentDidCatch&&(null===ql||!ql.has(r))){t=Fa(t,e=ms(t,e=cs(n,e),1),1),e=tu(),null!==t&&(xt(t,1,e),iu(t,e));break}}t=t.return}}function Cu(e,t,n){var r=e.pingCache;null!==r&&r.delete(t),t=tu(),e.pingedLanes|=e.suspendedLanes&n,Ml===e&&(Al&n)===n&&(4===Dl||3===Dl&&(130023424&Al)===Al&&500>Ze()-Bl?pu(e,0):Il|=n),iu(e,t)}function Tu(e,t){0===t&&(1&e.mode?(t=dt,!(130023424&(dt<<=1))&&(dt=4194304)):t=1);var n=tu();null!==(e=Da(e,t))&&(xt(e,t,n),iu(e,n))}function Pu(e){var t=e.memoizedState,n=0;null!==t&&(n=t.retryLane),Tu(e,n)}function Eu(e,t){var r=0;switch(e.tag){case 13:var i=e.stateNode,a=e.memoizedState;null!==a&&(r=a.retryLane);break;case 19:i=e.stateNode;break;default:throw Error(n(314))}null!==i&&i.delete(t),Tu(e,r)}function Mu(e,t){return Xe(e,t)}function zu(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Au(e,t,n,r){return new zu(e,t,n,r)}function Ru(e){return!(!(e=e.prototype)||!e.isReactComponent)}function $u(e,t){var n=e.alternate;return null===n?((n=Au(e.tag,t,e.key,e.mode)).elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=14680064&e.flags,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=null===t?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function Du(e,t,r,i,a,o){var s=2;if(i=e,"function"==typeof e)Ru(e)&&(s=1);else if("string"==typeof e)s=5;else e:switch(e){case _:return Ou(r.children,a,o,t);case j:s=8,a|=8;break;case C:return(e=Au(12,r,t,2|a)).elementType=C,e.lanes=o,e;case M:return(e=Au(13,r,t,a)).elementType=M,e.lanes=o,e;case z:return(e=Au(19,r,t,a)).elementType=z,e.lanes=o,e;case $:return Lu(r,a,o,t);default:if("object"==typeof e&&null!==e)switch(e.$$typeof){case T:s=10;break e;case P:s=9;break e;case E:s=11;break e;case A:s=14;break e;case R:s=16,i=null;break e}throw Error(n(130,null==e?e:typeof e,""))}return(t=Au(s,r,t,a)).elementType=e,t.type=i,t.lanes=o,t}function Ou(e,t,n,r){return(e=Au(7,e,r,t)).lanes=n,e}function Lu(e,t,n,r){return(e=Au(22,e,r,t)).elementType=$,e.lanes=n,e.stateNode={isHidden:!1},e}function Nu(e,t,n){return(e=Au(6,e,null,t)).lanes=n,e}function Iu(e,t,n){return(t=Au(4,null!==e.children?e.children:[],e.key,t)).lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function Fu(e,t,n,r,i){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=yt(0),this.expirationTimes=yt(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=yt(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function Vu(e,t,n,r,i,a,o,s,l){return e=new Fu(e,t,n,s,l),1===t?(t=1,!0===a&&(t|=8)):t=0,a=Au(3,null,null,t),e.current=a,a.stateNode=e,a.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},La(a),e}function Bu(e){if(!e)return Pi;e:{if(We(e=e._reactInternals)!==e||1!==e.tag)throw Error(n(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(Ri(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(null!==t);throw Error(n(171))}if(1===e.tag){var r=e.type;if(Ri(r))return Oi(e,r,t)}return t}function Wu(e,t,n,r,i,a,o,s,l){return(e=Vu(n,r,!0,e,0,a,0,s,l)).context=Bu(null),n=e.current,(a=Ia(r=tu(),i=nu(n))).callback=null!=t?t:null,Fa(n,a,i),e.current.lanes=i,xt(e,i,r),iu(e,r),e}function Uu(e,t,n,r){var i=t.current,a=tu(),o=nu(i);return n=Bu(n),null===t.context?t.context=n:t.pendingContext=n,(t=Ia(a,o)).payload={element:e},null!==(r=void 0===r?null:r)&&(t.callback=r),null!==(e=Fa(i,t,o))&&(ru(e,i,o,a),Va(e,i,o)),o}function Yu(e){return(e=e.current).child?(e.child.tag,e.child.stateNode):null}function Hu(e,t){if(null!==(e=e.memoizedState)&&null!==e.dehydrated){var n=e.retryLane;e.retryLane=0!==n&&n<t?n:t}}function qu(e,t){Hu(e,t),(e=e.alternate)&&Hu(e,t)}Sl=function(e,t,r){if(null!==e)if(e.memoizedProps!==t.pendingProps||Mi.current)bs=!0;else{if(0===(e.lanes&r)&&!(128&t.flags))return bs=!1,function(e,t,n){switch(t.tag){case 3:Ms(t),fa();break;case 5:Za(t);break;case 1:Ri(t.type)&&Li(t);break;case 4:Ka(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,i=t.memoizedProps.value;Ti(_a,r._currentValue),r._currentValue=i;break;case 13:if(null!==(r=t.memoizedState))return null!==r.dehydrated?(Ti(eo,1&eo.current),t.flags|=128,null):0!==(n&t.child.childLanes)?Ns(e,t,n):(Ti(eo,1&eo.current),null!==(e=Ys(e,t,n))?e.sibling:null);Ti(eo,1&eo.current);break;case 19:if(r=0!==(n&t.childLanes),128&e.flags){if(r)return Ws(e,t,n);t.flags|=128}if(null!==(i=t.memoizedState)&&(i.rendering=null,i.tail=null,i.lastEffect=null),Ti(eo,eo.current),r)break;return null;case 22:case 23:return t.lanes=0,js(e,t,n)}return Ys(e,t,n)}(e,t,r);bs=!!(131072&e.flags)}else bs=!1,aa&&1048576&t.flags&&ea(t,qi,t.index);switch(t.lanes=0,t.tag){case 2:var i=t.type;Us(e,t),e=t.pendingProps;var a=Ai(t,Ei.current);Ma(t,r),a=yo(null,t,i,e,a,r);var o=xo();return t.flags|=1,"object"==typeof a&&null!==a&&"function"==typeof a.render&&void 0===a.$$typeof?(t.tag=1,t.memoizedState=null,t.updateQueue=null,Ri(i)?(o=!0,Li(t)):o=!1,t.memoizedState=null!==a.state&&void 0!==a.state?a.state:null,La(t),a.updater=as,t.stateNode=a,a._reactInternals=t,us(t,i,e,r),t=Es(null,t,i,!0,o,r)):(t.tag=0,aa&&o&&ta(t),ws(null,t,a,r),t=t.child),t;case 16:i=t.elementType;e:{switch(Us(e,t),e=t.pendingProps,i=(a=i._init)(i._payload),t.type=i,a=t.tag=function(e){if("function"==typeof e)return Ru(e)?1:0;if(null!=e){if((e=e.$$typeof)===E)return 11;if(e===A)return 14}return 2}(i),e=rs(i,e),a){case 0:t=Ts(null,t,i,e,r);break e;case 1:t=Ps(null,t,i,e,r);break e;case 11:t=ks(null,t,i,e,r);break e;case 14:t=_s(null,t,i,rs(i.type,e),r);break e}throw Error(n(306,i,""))}return t;case 0:return i=t.type,a=t.pendingProps,Ts(e,t,i,a=t.elementType===i?a:rs(i,a),r);case 1:return i=t.type,a=t.pendingProps,Ps(e,t,i,a=t.elementType===i?a:rs(i,a),r);case 3:e:{if(Ms(t),null===e)throw Error(n(387));i=t.pendingProps,a=(o=t.memoizedState).element,Na(e,t),Wa(t,i,null,r);var s=t.memoizedState;if(i=s.element,o.isDehydrated){if(o={element:i,isDehydrated:!1,cache:s.cache,pendingSuspenseBoundaries:s.pendingSuspenseBoundaries,transitions:s.transitions},t.updateQueue.baseState=o,t.memoizedState=o,256&t.flags){t=zs(e,t,i,r,a=cs(Error(n(423)),t));break e}if(i!==a){t=zs(e,t,i,r,a=cs(Error(n(424)),t));break e}for(ia=ci(t.stateNode.containerInfo.firstChild),ra=t,aa=!0,oa=null,r=ka(t,null,i,r),t.child=r;r;)r.flags=-3&r.flags|4096,r=r.sibling}else{if(fa(),i===a){t=Ys(e,t,r);break e}ws(e,t,i,r)}t=t.child}return t;case 5:return Za(t),null===e&&ca(t),i=t.type,a=t.pendingProps,o=null!==e?e.memoizedProps:null,s=a.children,ri(i,a)?s=null:null!==o&&ri(i,o)&&(t.flags|=32),Cs(e,t),ws(e,t,s,r),t.child;case 6:return null===e&&ca(t),null;case 13:return Ns(e,t,r);case 4:return Ka(t,t.stateNode.containerInfo),i=t.pendingProps,null===e?t.child=wa(t,null,i,r):ws(e,t,i,r),t.child;case 11:return i=t.type,a=t.pendingProps,ks(e,t,i,a=t.elementType===i?a:rs(i,a),r);case 7:return ws(e,t,t.pendingProps,r),t.child;case 8:case 12:return ws(e,t,t.pendingProps.children,r),t.child;case 10:e:{if(i=t.type._context,a=t.pendingProps,o=t.memoizedProps,s=a.value,Ti(_a,i._currentValue),i._currentValue=s,null!==o)if(lr(o.value,s)){if(o.children===a.children&&!Mi.current){t=Ys(e,t,r);break e}}else for(null!==(o=t.child)&&(o.return=t);null!==o;){var l=o.dependencies;if(null!==l){s=o.child;for(var u=l.firstContext;null!==u;){if(u.context===i){if(1===o.tag){(u=Ia(-1,r&-r)).tag=2;var c=o.updateQueue;if(null!==c){var d=(c=c.shared).pending;null===d?u.next=u:(u.next=d.next,d.next=u),c.pending=u}}o.lanes|=r,null!==(u=o.alternate)&&(u.lanes|=r),Ea(o.return,r,t),l.lanes|=r;break}u=u.next}}else if(10===o.tag)s=o.type===t.type?null:o.child;else if(18===o.tag){if(null===(s=o.return))throw Error(n(341));s.lanes|=r,null!==(l=s.alternate)&&(l.lanes|=r),Ea(s,r,t),s=o.sibling}else s=o.child;if(null!==s)s.return=o;else for(s=o;null!==s;){if(s===t){s=null;break}if(null!==(o=s.sibling)){o.return=s.return,s=o;break}s=s.return}o=s}ws(e,t,a.children,r),t=t.child}return t;case 9:return a=t.type,i=t.pendingProps.children,Ma(t,r),i=i(a=za(a)),t.flags|=1,ws(e,t,i,r),t.child;case 14:return a=rs(i=t.type,t.pendingProps),_s(e,t,i,a=rs(i.type,a),r);case 15:return Ss(e,t,t.type,t.pendingProps,r);case 17:return i=t.type,a=t.pendingProps,a=t.elementType===i?a:rs(i,a),Us(e,t),t.tag=1,Ri(i)?(e=!0,Li(t)):e=!1,Ma(t,r),ss(t,i,a),us(t,i,a,r),Es(null,t,i,!0,e,r);case 19:return Ws(e,t,r);case 22:return js(e,t,r)}throw Error(n(156,t.tag))};var Xu="function"==typeof reportError?reportError:function(e){console.error(e)};function Gu(e){this._internalRoot=e}function Ku(e){this._internalRoot=e}function Qu(e){return!(!e||1!==e.nodeType&&9!==e.nodeType&&11!==e.nodeType)}function Zu(e){return!(!e||1!==e.nodeType&&9!==e.nodeType&&11!==e.nodeType&&(8!==e.nodeType||" react-mount-point-unstable "!==e.nodeValue))}function Ju(){}function ec(e,t,n,r,i){var a=n._reactRootContainer;if(a){var o=a;if("function"==typeof i){var s=i;i=function(){var e=Yu(o);s.call(e)}}Uu(t,o,e,i)}else o=function(e,t,n,r,i){if(i){if("function"==typeof r){var a=r;r=function(){var e=Yu(o);a.call(e)}}var o=Wu(t,r,e,0,null,!1,0,"",Ju);return e._reactRootContainer=o,e[mi]=o.current,Wr(8===e.nodeType?e.parentNode:e),du(),o}for(;i=e.lastChild;)e.removeChild(i);if("function"==typeof r){var s=r;r=function(){var e=Yu(l);s.call(e)}}var l=Vu(e,0,!1,null,0,!1,0,"",Ju);return e._reactRootContainer=l,e[mi]=l.current,Wr(8===e.nodeType?e.parentNode:e),du(function(){Uu(t,l,n,r)}),l}(n,t,e,i,r);return Yu(o)}Ku.prototype.render=Gu.prototype.render=function(e){var t=this._internalRoot;if(null===t)throw Error(n(409));Uu(e,t,null,null)},Ku.prototype.unmount=Gu.prototype.unmount=function(){var e=this._internalRoot;if(null!==e){this._internalRoot=null;var t=e.containerInfo;du(function(){Uu(null,e,null,null)}),t[mi]=null}},Ku.prototype.unstable_scheduleHydration=function(e){if(e){var t=jt();e={blockedOn:null,target:e,priority:t};for(var n=0;n<$t.length&&0!==t&&t<$t[n].priority;n++);$t.splice(n,0,e),0===n&&Nt(e)}},kt=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=ht(t.pendingLanes);0!==n&&(vt(t,1|n),iu(t,Ze()),!(6&El)&&(Wl=Ze()+500,Wi()))}break;case 13:du(function(){var t=Da(e,1);if(null!==t){var n=tu();ru(t,e,1,n)}}),qu(e,1)}},_t=function(e){if(13===e.tag){var t=Da(e,134217728);if(null!==t)ru(t,e,134217728,tu());qu(e,134217728)}},St=function(e){if(13===e.tag){var t=nu(e),n=Da(e,t);if(null!==n)ru(n,e,t,tu());qu(e,t)}},jt=function(){return bt},Ct=function(e,t){var n=bt;try{return bt=e,t()}finally{bt=n}},_e=function(e,t,r){switch(t){case"input":if(J(e,r),t=r.name,"radio"===r.type&&null!=t){for(r=e;r.parentNode;)r=r.parentNode;for(r=r.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<r.length;t++){var i=r[t];if(i!==e&&i.form===e.form){var a=ki(i);if(!a)throw Error(n(90));X(i),J(i,a)}}}break;case"textarea":oe(e,r);break;case"select":null!=(t=r.value)&&re(e,!!r.multiple,t,!1)}},Ee=cu,Me=du;var tc={usingClientEntryPoint:!1,Events:[bi,wi,ki,Te,Pe,cu]},nc={findFiberByHostInstance:vi,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},rc={bundleType:nc.bundleType,version:nc.version,rendererPackageName:nc.rendererPackageName,rendererConfig:nc.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:v.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return null===(e=He(e))?null:e.stateNode},findFiberByHostInstance:nc.findFiberByHostInstance||function(){return null},findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if("undefined"!=typeof __REACT_DEVTOOLS_GLOBAL_HOOK__){var ic=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!ic.isDisabled&&ic.supportsFiber)try{at=ic.inject(rc),ot=ic}catch(de){}}return w.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=tc,w.createPortal=function(e,t){var r=2<arguments.length&&void 0!==arguments[2]?arguments[2]:null;if(!Qu(t))throw Error(n(200));return function(e,t,n){var r=3<arguments.length&&void 0!==arguments[3]?arguments[3]:null;return{$$typeof:k,key:null==r?null:""+r,children:e,containerInfo:t,implementation:n}}(e,t,null,r)},w.createRoot=function(e,t){if(!Qu(e))throw Error(n(299));var r=!1,i="",a=Xu;return null!=t&&(!0===t.unstable_strictMode&&(r=!0),void 0!==t.identifierPrefix&&(i=t.identifierPrefix),void 0!==t.onRecoverableError&&(a=t.onRecoverableError)),t=Vu(e,1,!1,null,0,r,0,i,a),e[mi]=t.current,Wr(8===e.nodeType?e.parentNode:e),new Gu(t)},w.findDOMNode=function(e){if(null==e)return null;if(1===e.nodeType)return e;var t=e._reactInternals;if(void 0===t){if("function"==typeof e.render)throw Error(n(188));throw e=Object.keys(e).join(","),Error(n(268,e))}return e=null===(e=He(t))?null:e.stateNode},w.flushSync=function(e){return du(e)},w.hydrate=function(e,t,r){if(!Zu(t))throw Error(n(200));return ec(null,e,t,!0,r)},w.hydrateRoot=function(e,t,r){if(!Qu(e))throw Error(n(405));var i=null!=r&&r.hydratedSources||null,a=!1,o="",s=Xu;if(null!=r&&(!0===r.unstable_strictMode&&(a=!0),void 0!==r.identifierPrefix&&(o=r.identifierPrefix),void 0!==r.onRecoverableError&&(s=r.onRecoverableError)),t=Wu(t,null,e,1,null!=r?r:null,a,0,o,s),e[mi]=t.current,Wr(e),i)for(e=0;e<i.length;e++)a=(a=(r=i[e])._getVersion)(r._source),null==t.mutableSourceEagerHydrationData?t.mutableSourceEagerHydrationData=[r,a]:t.mutableSourceEagerHydrationData.push(r,a);return new Ku(t)},w.render=function(e,t,r){if(!Zu(t))throw Error(n(200));return ec(null,e,t,!1,r)},w.unmountComponentAtNode=function(e){if(!Zu(e))throw Error(n(40));return!!e._reactRootContainer&&(du(function(){ec(null,null,e,!1,function(){e._reactRootContainer=null,e[mi]=null})}),!0)},w.unstable_batchedUpdates=cu,w.unstable_renderSubtreeIntoContainer=function(e,t,r,i){if(!Zu(r))throw Error(n(200));if(null==e||void 0===e._reactInternals)throw Error(n(38));return ec(e,t,r,!1,i)},w.version="18.3.1-next-f1338f8080-20240426",w}function C(){if(y)return b.exports;return y=1,function e(){if("undefined"!=typeof __REACT_DEVTOOLS_GLOBAL_HOOK__&&"function"==typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE)try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(e)}catch(t){console.error(t)}}(),b.exports=j(),b.exports}const T=e(function(){if(x)return v;x=1;var e=C();return v.createRoot=e.createRoot,v.hydrateRoot=e.hydrateRoot,v}());var P="-ms-",E="-moz-",M="-webkit-",z="comm",A="rule",R="decl",$="@keyframes",D=Math.abs,O=String.fromCharCode,L=Object.assign;function N(e){return e.trim()}function I(e,t){return(e=t.exec(e))?e[0]:e}function F(e,t,n){return e.replace(t,n)}function V(e,t,n){return e.indexOf(t,n)}function B(e,t){return 0|e.charCodeAt(t)}function W(e,t,n){return e.slice(t,n)}function U(e){return e.length}function Y(e){return e.length}function H(e,t){return t.push(e),e}function q(e,t){return e.filter(function(e){return!I(e,t)})}var X=1,G=1,K=0,Q=0,Z=0,J="";function ee(e,t,n,r,i,a,o,s){return{value:e,root:t,parent:n,type:r,props:i,children:a,line:X,column:G,length:o,return:"",siblings:s}}function te(e,t){return L(ee("",null,null,"",null,null,0,e.siblings),e,{length:-e.length},t)}function ne(e){for(;e.root;)e=te(e.root,{children:[e]});H(e,e.siblings)}function re(){return Z=Q>0?B(J,--Q):0,G--,10===Z&&(G=1,X--),Z}function ie(){return Z=Q<K?B(J,Q++):0,G++,10===Z&&(G=1,X++),Z}function ae(){return B(J,Q)}function oe(){return Q}function se(e,t){return W(J,e,t)}function le(e){switch(e){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function ue(e){return N(se(Q-1,he(91===e?e+2:40===e?e+1:e)))}function ce(e){for(;(Z=ae())&&Z<33;)ie();return le(e)>2||le(Z)>3?"":" "}function de(e,t){for(;--t&&ie()&&!(Z<48||Z>102||Z>57&&Z<65||Z>70&&Z<97););return se(e,oe()+(t<6&&32==ae()&&32==ie()))}function he(e){for(;ie();)switch(Z){case e:return Q;case 34:case 39:34!==e&&39!==e&&he(Z);break;case 40:41===e&&he(e);break;case 92:ie()}return Q}function pe(e,t){for(;ie()&&e+Z!==57&&(e+Z!==84||47!==ae()););return"/*"+se(t,Q-1)+"*"+O(47===e?e:ie())}function fe(e){for(;!le(ae());)ie();return se(e,Q)}function me(e){return function(e){return J="",e}(ge("",null,null,null,[""],e=function(e){return X=G=1,K=U(J=e),Q=0,[]}(e),0,[0],e))}function ge(e,t,n,r,i,a,o,s,l){for(var u=0,c=0,d=o,h=0,p=0,f=0,m=1,g=1,y=1,x=0,v="",b=i,w=a,k=r,_=v;g;)switch(f=x,x=ie()){case 40:if(108!=f&&58==B(_,d-1)){-1!=V(_+=F(ue(x),"&","&\f"),"&\f",D(u?s[u-1]:0))&&(y=-1);break}case 34:case 39:case 91:_+=ue(x);break;case 9:case 10:case 13:case 32:_+=ce(f);break;case 92:_+=de(oe()-1,7);continue;case 47:switch(ae()){case 42:case 47:H(xe(pe(ie(),oe()),t,n,l),l),5!=le(f||1)&&5!=le(ae()||1)||!U(_)||" "===W(_,-1,void 0)||(_+=" ");break;default:_+="/"}break;case 123*m:s[u++]=U(_)*y;case 125*m:case 59:case 0:switch(x){case 0:case 125:g=0;case 59+c:-1==y&&(_=F(_,/\f/g,"")),p>0&&(U(_)-d||0===m&&47===f)&&H(p>32?ve(_+";",r,n,d-1,l):ve(F(_," ","")+";",r,n,d-2,l),l);break;case 59:_+=";";default:if(H(k=ye(_,t,n,u,c,i,s,v,b=[],w=[],d,a),a),123===x)if(0===c)ge(_,t,k,k,b,a,d,s,w);else{switch(h){case 99:if(110===B(_,3))break;case 108:if(97===B(_,2))break;default:c=0;case 100:case 109:case 115:}c?ge(e,k,k,r&&H(ye(e,k,k,0,0,i,s,v,i,b=[],d,w),w),i,w,d,s,r?b:w):ge(_,k,k,k,[""],w,0,s,w)}}u=c=p=0,m=y=1,v=_="",d=o;break;case 58:d=1+U(_),p=f;default:if(m<1)if(123==x)--m;else if(125==x&&0==m++&&125==re())continue;switch(_+=O(x),x*m){case 38:y=c>0?1:(_+="\f",-1);break;case 44:s[u++]=(U(_)-1)*y,y=1;break;case 64:45===ae()&&(_+=ue(ie())),h=ae(),c=d=U(v=_+=fe(oe())),x++;break;case 45:45===f&&2==U(_)&&(m=0)}}return a}function ye(e,t,n,r,i,a,o,s,l,u,c,d){for(var h=i-1,p=0===i?a:[""],f=Y(p),m=0,g=0,y=0;m<r;++m)for(var x=0,v=W(e,h+1,h=D(g=o[m])),b=e;x<f;++x)(b=N(g>0?p[x]+" "+v:F(v,/&\f/g,p[x])))&&(l[y++]=b);return ee(e,t,n,0===i?A:s,l,u,c,d)}function xe(e,t,n,r){return ee(e,t,n,z,O(Z),W(e,2,-2),0,r)}function ve(e,t,n,r,i){return ee(e,t,n,R,W(e,0,r),W(e,r+1,-1),r,i)}function be(e,t,n){switch(function(e,t){return 45^B(e,0)?(((t<<2^B(e,0))<<2^B(e,1))<<2^B(e,2))<<2^B(e,3):0}(e,t)){case 5103:return M+"print-"+e+e;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:case 6391:case 5879:case 5623:case 6135:case 4599:return M+e+e;case 4855:return M+e.replace("add","source-over").replace("substract","source-out").replace("intersect","source-in").replace("exclude","xor")+e;case 4789:return E+e+e;case 5349:case 4246:case 4810:case 6968:case 2756:return M+e+E+e+P+e+e;case 5936:switch(B(e,t+11)){case 114:return M+e+P+F(e,/[svh]\w+-[tblr]{2}/,"tb")+e;case 108:return M+e+P+F(e,/[svh]\w+-[tblr]{2}/,"tb-rl")+e;case 45:return M+e+P+F(e,/[svh]\w+-[tblr]{2}/,"lr")+e}case 6828:case 4268:case 2903:return M+e+P+e+e;case 6165:return M+e+P+"flex-"+e+e;case 5187:return M+e+F(e,/(\w+).+(:[^]+)/,M+"box-$1$2"+P+"flex-$1$2")+e;case 5443:return M+e+P+"flex-item-"+F(e,/flex-|-self/g,"")+(I(e,/flex-|baseline/)?"":P+"grid-row-"+F(e,/flex-|-self/g,""))+e;case 4675:return M+e+P+"flex-line-pack"+F(e,/align-content|flex-|-self/g,"")+e;case 5548:return M+e+P+F(e,"shrink","negative")+e;case 5292:return M+e+P+F(e,"basis","preferred-size")+e;case 6060:return M+"box-"+F(e,"-grow","")+M+e+P+F(e,"grow","positive")+e;case 4554:return M+F(e,/([^-])(transform)/g,"$1"+M+"$2")+e;case 6187:return F(F(F(e,/(zoom-|grab)/,M+"$1"),/(image-set)/,M+"$1"),e,"")+e;case 5495:case 3959:return F(e,/(image-set\([^]*)/,M+"$1$`$1");case 4968:return F(F(e,/(.+:)(flex-)?(.*)/,M+"box-pack:$3"+P+"flex-pack:$3"),/space-between/,"justify")+M+e+e;case 4200:if(!I(e,/flex-|baseline/))return P+"grid-column-align"+W(e,t)+e;break;case 2592:case 3360:return P+F(e,"template-","")+e;case 4384:case 3616:return n&&n.some(function(e,n){return t=n,I(e.props,/grid-\w+-end/)})?~V(e+(n=n[t].value),"span",0)?e:P+F(e,"-start","")+e+P+"grid-row-span:"+(~V(n,"span",0)?I(n,/\d+/):+I(n,/\d+/)-+I(e,/\d+/))+";":P+F(e,"-start","")+e;case 4896:case 4128:return n&&n.some(function(e){return I(e.props,/grid-\w+-start/)})?e:P+F(F(e,"-end","-span"),"span ","")+e;case 4095:case 3583:case 4068:case 2532:return F(e,/(.+)-inline(.+)/,M+"$1$2")+e;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(U(e)-1-t>6)switch(B(e,t+1)){case 109:if(45!==B(e,t+4))break;case 102:return F(e,/(.+:)(.+)-([^]+)/,"$1"+M+"$2-$3$1"+E+(108==B(e,t+3)?"$3":"$2-$3"))+e;case 115:return~V(e,"stretch",0)?be(F(e,"stretch","fill-available"),t,n)+e:e}break;case 5152:case 5920:return F(e,/(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/,function(t,n,r,i,a,o,s){return P+n+":"+r+s+(i?P+n+"-span:"+(a?o:+o-+r)+s:"")+e});case 4949:if(121===B(e,t+6))return F(e,":",":"+M)+e;break;case 6444:switch(B(e,45===B(e,14)?18:11)){case 120:return F(e,/(.+:)([^;\s!]+)(;|(\s+)?!.+)?/,"$1"+M+(45===B(e,14)?"inline-":"")+"box$3$1"+M+"$2$3$1"+P+"$2box$3")+e;case 100:return F(e,":",":"+P)+e}break;case 5719:case 2647:case 2135:case 3927:case 2391:return F(e,"scroll-","scroll-snap-")+e}return e}function we(e,t){for(var n="",r=0;r<e.length;r++)n+=t(e[r],r,e,t)||"";return n}function ke(e,t,n,r){switch(e.type){case"@layer":if(e.children.length)break;case"@import":case"@namespace":case R:return e.return=e.return||e.value;case z:return"";case $:return e.return=e.value+"{"+we(e.children,r)+"}";case A:if(!U(e.value=e.props.join(",")))return""}return U(n=we(e.children,r))?e.return=e.value+"{"+n+"}":""}function _e(e,t,n,r){if(e.length>-1&&!e.return)switch(e.type){case R:return void(e.return=be(e.value,e.length,n));case $:return we([te(e,{value:F(e.value,"@","@"+M)})],r);case A:if(e.length)return function(e,t){return e.map(t).join("")}(n=e.props,function(t){switch(I(t,r=/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":ne(te(e,{props:[F(t,/:(read-\w+)/,":-moz-$1")]})),ne(te(e,{props:[t]})),L(e,{props:q(n,r)});break;case"::placeholder":ne(te(e,{props:[F(t,/:(plac\w+)/,":"+M+"input-$1")]})),ne(te(e,{props:[F(t,/:(plac\w+)/,":-moz-$1")]})),ne(te(e,{props:[F(t,/:(plac\w+)/,P+"input-$1")]})),ne(te(e,{props:[t]})),L(e,{props:q(n,r)})}return""})}}var Se,je,Ce={};const Te="undefined"!=typeof process&&void 0!==Ce&&(Ce.REACT_APP_SC_ATTR||Ce.SC_ATTR)||"data-styled",Pe="active",Ee="data-styled-version",Me="6.4.2",ze="/*!sc*/\n",Ae="undefined"!=typeof window&&"undefined"!=typeof document;function Re(e){if("undefined"!=typeof process&&void 0!==Ce){const t=Ce[e];if(void 0!==t&&""!==t)return"false"!==t}}const $e=Boolean("boolean"==typeof SC_DISABLE_SPEEDY?SC_DISABLE_SPEEDY:null!==(je=null!==(Se=Re("REACT_APP_SC_DISABLE_SPEEDY"))&&void 0!==Se?Se:Re("SC_DISABLE_SPEEDY"))&&void 0!==je?je:"undefined"!=typeof process&&void 0!==Ce&&!1),De="sc-keyframes-",Oe={};function Le(e,...t){return new Error(`An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#${e} for more information.${t.length>0?` Args: ${t.join(", ")}`:""}`)}let Ne=new Map,Ie=new Map,Fe=1;const Ve=e=>{if(Ne.has(e))return Ne.get(e);for(;Ie.has(Fe);)Fe++;const t=Fe++;return Ne.set(e,t),Ie.set(t,e),t},Be=e=>Ie.get(e),We=(e,t)=>{Fe=t+1,Ne.set(e,t),Ie.set(t,e)},Ue=Object.freeze([]),Ye=Object.freeze({});function He(e,t,n=Ye){return e.theme!==n.theme&&e.theme||t||n.theme}const qe=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,Xe=/(^-|-$)/g;function Ge(e){return e.replace(qe,"-").replace(Xe,"")}const Ke=/(a)(d)/gi,Qe=e=>String.fromCharCode(e+(e>25?39:97));function Ze(e){let t,n="";for(t=Math.abs(e);t>52;t=t/52|0)n=Qe(t%52)+n;return(Qe(t%52)+n).replace(Ke,"$1-$2")}const Je=5381,et=(e,t)=>{let n=t.length;for(;n;)e=33*e^t.charCodeAt(--n);return e},tt=e=>et(Je,e);function nt(e){return Ze(tt(e)>>>0)}function rt(e){return"string"==typeof e&&!0}function it(e){return rt(e)?`styled.${e}`:`Styled(${function(e){return e.displayName||e.name||"Component"}(e)})`}const at=Symbol.for("react.memo"),ot=Symbol.for("react.forward_ref"),st={contextType:!0,defaultProps:!0,displayName:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,propTypes:!0,type:!0},lt={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},ut={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},ct={[ot]:{$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},[at]:ut};function dt(e){return("type"in(t=e)&&t.type.$$typeof)===at?ut:"$$typeof"in e?ct[e.$$typeof]:st;var t}const ht=Object.defineProperty,pt=Object.getOwnPropertyNames,ft=Object.getOwnPropertySymbols,mt=Object.getOwnPropertyDescriptor,gt=Object.getPrototypeOf,yt=Object.prototype;function xt(e,t,n){if("string"!=typeof t){const i=gt(t);i&&i!==yt&&xt(e,i,n);const a=pt(t).concat(ft(t)),o=dt(e),s=dt(t);for(let l=0;l<a.length;++l){const i=a[l];if(!(i in lt||n&&n[i]||s&&i in s||o&&i in o)){const n=mt(t,i);try{ht(e,i,n)}catch(r){}}}}return e}function vt(e){return"function"==typeof e}const bt=Symbol.for("react.forward_ref");function wt(e){return null!=e&&("object"==typeof e||"function"==typeof e)&&e.$$typeof===bt&&"styledComponentId"in e}function kt(e,t){return e&&t?e+" "+t:e||t||""}function _t(e,t){return e.join("")}function St(e){return null!==e&&"object"==typeof e&&e.constructor.name===Object.name&&!("props"in e&&e.$$typeof)}function jt(e,t,n=!1){if(!n&&!St(e)&&!Array.isArray(e))return t;if(Array.isArray(t))for(let r=0;r<t.length;r++)e[r]=jt(e[r],t[r]);else if(St(t))for(const r in t)e[r]=jt(e[r],t[r]);return e}function Ct(e,t){Object.defineProperty(e,"toString",{value:t})}const Tt=class{constructor(e){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=e,this._cGroup=0,this._cIndex=0}indexOfGroup(e){if(e===this._cGroup)return this._cIndex;let t=this._cIndex;if(e>this._cGroup)for(let n=this._cGroup;n<e;n++)t+=this.groupSizes[n];else for(let n=this._cGroup-1;n>=e;n--)t-=this.groupSizes[n];return this._cGroup=e,this._cIndex=t,t}insertRules(e,t){if(e>=this.groupSizes.length){const t=this.groupSizes,n=t.length;let r=n;for(;e>=r;)if(r<<=1,r<0)throw Le(16,`${e}`);this.groupSizes=new Uint32Array(r),this.groupSizes.set(t),this.length=r;for(let e=n;e<r;e++)this.groupSizes[e]=0}let n=this.indexOfGroup(e+1),r=0;for(let i=0,a=t.length;i<a;i++)this.tag.insertRule(n,t[i])&&(this.groupSizes[e]++,n++,r++);r>0&&this._cGroup>e&&(this._cIndex+=r)}clearGroup(e){if(e<this.length){const t=this.groupSizes[e],n=this.indexOfGroup(e),r=n+t;this.groupSizes[e]=0;for(let e=n;e<r;e++)this.tag.deleteRule(n);t>0&&this._cGroup>e&&(this._cIndex-=t)}}getGroup(e){let t="";if(e>=this.length||0===this.groupSizes[e])return t;const n=this.groupSizes[e],r=this.indexOfGroup(e),i=r+n;for(let a=r;a<i;a++)t+=this.tag.getRule(a)+ze;return t}},Pt=`style[${Te}][${Ee}="${Me}"]`,Et=new RegExp(`^${Te}\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)`),Mt=e=>"undefined"!=typeof ShadowRoot&&e instanceof ShadowRoot||"host"in e&&11===e.nodeType,zt=e=>{if(!e)return document;if(Mt(e))return e;if("getRootNode"in e){const t=e.getRootNode();if(Mt(t))return t}return document},At=(e,t,n)=>{const r=n.split(",");let i;for(let a=0,o=r.length;a<o;a++)(i=r[a])&&e.registerName(t,i)},Rt=(e,t)=>{var n;const r=(null!==(n=t.textContent)&&void 0!==n?n:"").split(ze),i=[];for(let a=0,o=r.length;a<o;a++){const t=r[a].trim();if(!t)continue;const n=t.match(Et);if(n){const t=0|parseInt(n[1],10),r=n[2];0!==t&&(We(r,t),At(e,r,n[3]),e.getTag().insertRules(t,i)),i.length=0}else i.push(t)}},$t=e=>{const t=zt(e.options.target).querySelectorAll(Pt);for(let n=0,r=t.length;n<r;n++){const r=t[n];r&&r.getAttribute(Te)!==Pe&&(Rt(e,r),r.parentNode&&r.parentNode.removeChild(r))}};let Dt=!1;const Ot=(e,t)=>{const n=document.head,r=e||n,i=document.createElement("style"),a=(e=>{const t=Array.from(e.querySelectorAll(`style[${Te}]`));return t[t.length-1]})(r),o=void 0!==a?a.nextSibling:null;i.setAttribute(Te,Pe),i.setAttribute(Ee,Me);const s=t||function(){if(!1!==Dt)return Dt;if("undefined"!=typeof document){const e=document.head.querySelector('meta[property="csp-nonce"]');if(e)return Dt=e.nonce||e.getAttribute("content")||void 0;const t=document.head.querySelector('meta[name="sc-nonce"]');if(t)return Dt=t.getAttribute("content")||void 0}return Dt="undefined"!=typeof __webpack_nonce__?__webpack_nonce__:void 0}();return s&&i.setAttribute("nonce",s),r.insertBefore(i,o),i},Lt=class{constructor(e,t){this.element=Ot(e,t),this.element.appendChild(document.createTextNode("")),this.sheet=(e=>{var t;if(e.sheet)return e.sheet;const n=null!==(t=e.getRootNode().styleSheets)&&void 0!==t?t:document.styleSheets;for(let r=0,i=n.length;r<i;r++){const t=n[r];if(t.ownerNode===e)return t}throw Le(17)})(this.element),this.length=0}insertRule(e,t){try{return this.sheet.insertRule(t,e),this.length++,!0}catch(n){return!1}}deleteRule(e){this.sheet.deleteRule(e),this.length--}getRule(e){const t=this.sheet.cssRules[e];return t&&t.cssText?t.cssText:""}},Nt=class{constructor(e,t){this.element=Ot(e,t),this.nodes=this.element.childNodes,this.length=0}insertRule(e,t){if(e<=this.length&&e>=0){const n=document.createTextNode(t);return this.element.insertBefore(n,this.nodes[e]||null),this.length++,!0}return!1}deleteRule(e){this.element.removeChild(this.nodes[e]),this.length--}getRule(e){return e<this.length?this.nodes[e].textContent:""}};let It=Ae;const Ft={isServer:!Ae,useCSSOMInjection:!$e};class Vt{static registerId(e){return Ve(e)}constructor(e=Ye,t={},n){this.options=Object.assign(Object.assign({},Ft),e),this.gs=t,this.keyframeIds=new Set,this.names=new Map(n),this.server=!!e.isServer,!this.server&&Ae&&It&&(It=!1,$t(this)),Ct(this,()=>(e=>{const t=e.getTag(),{length:n}=t;let r="";for(let i=0;i<n;i++){const n=Be(i);if(void 0===n)continue;const a=e.names.get(n);if(void 0===a||!a.size)continue;const o=t.getGroup(i);if(0===o.length)continue;const s=Te+".g"+i+'[id="'+n+'"]';let l="";for(const e of a)e.length>0&&(l+=e+",");r+=o+s+'{content:"'+l+'"}'+ze}return r})(this))}rehydrate(){!this.server&&Ae&&$t(this)}reconstructWithOptions(e,t=!0){const n=new Vt(Object.assign(Object.assign({},this.options),e),this.gs,t&&this.names||void 0);return n.keyframeIds=new Set(this.keyframeIds),!this.server&&Ae&&e.target!==this.options.target&&zt(this.options.target)!==zt(e.target)&&$t(n),n}allocateGSInstance(e){return this.gs[e]=(this.gs[e]||0)+1}getTag(){return this.tag||(this.tag=(e=(({useCSSOMInjection:e,target:t,nonce:n})=>e?new Lt(t,n):new Nt(t,n))(this.options),new Tt(e)));var e}hasNameForId(e,t){var n,r;return null!==(r=null===(n=this.names.get(e))||void 0===n?void 0:n.has(t))&&void 0!==r&&r}registerName(e,t){Ve(e),e.startsWith(De)&&this.keyframeIds.add(e);const n=this.names.get(e);n?n.add(t):this.names.set(e,new Set([t]))}insertRules(e,t,n){this.registerName(e,t),this.getTag().insertRules(Ve(e),n)}clearNames(e){this.names.has(e)&&this.names.get(e).clear()}clearRules(e){this.getTag().clearGroup(Ve(e)),this.clearNames(e)}clearTag(){this.tag=void 0}}const Bt=new WeakSet,Wt={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexShrink:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,scale:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1};function Ut(e,t){return null==t||"boolean"==typeof t||""===t?"":"number"!=typeof t||0===t||e in Wt||e.startsWith("--")?String(t).trim():t+"px"}const Yt=47;function Ht(e){if(45===e.charCodeAt(0)&&45===e.charCodeAt(1))return e;let t="";for(let n=0;n<e.length;n++){const r=e.charCodeAt(n);t+=r>=65&&r<=90?"-"+String.fromCharCode(r+32):e[n]}return t.startsWith("ms-")?"-"+t:t}const qt=Symbol.for("sc-keyframes");function Xt(e){return vt(e)&&!(e.prototype&&e.prototype.isReactComponent)}const Gt=e=>null==e||!1===e||""===e,Kt=Symbol.for("react.client.reference");function Qt(e){return e.$$typeof===Kt}function Zt(e,t){for(const n in e){const r=e[n];e.hasOwnProperty(n)&&!Gt(r)&&(Array.isArray(r)&&Bt.has(r)||vt(r)?t.push(Ht(n)+":",r,";"):St(r)?(t.push(n+" {"),Zt(r,t),t.push("}")):t.push(Ht(n)+": "+Ut(n,r)+";"))}}function Jt(e,t,n,r,i=[]){if(Gt(e))return i;const a=typeof e;if("string"===a)return i.push(e),i;if("function"===a){if(Qt(e))return i;if(Xt(e)&&t){return Jt(e(t),t,n,r,i)}return i.push(e),i}if(Array.isArray(e)){for(let a=0;a<e.length;a++)Jt(e[a],t,n,r,i);return i}return wt(e)?(i.push(`.${e.styledComponentId}`),i):function(e){return"object"==typeof e&&null!==e&&qt in e}(e)?(n?(e.inject(n,r),i.push(e.getName(r))):i.push(e),i):Qt(e)?i:St(e)?e.toString!==Object.prototype.toString?(i.push(e.toString()),i):(Zt(e,i),i):(i.push(e.toString()),i)}const en=tt(Me);class tn{constructor(e,t,n){this.rules=e,this.componentId=t,this.baseHash=et(en,t),this.baseStyle=n,Vt.registerId(t)}generateAndInjectStyles(e,t,n){let r=this.baseStyle?this.baseStyle.generateAndInjectStyles(e,t,n):"";{let i="";for(let r=0;r<this.rules.length;r++){const a=this.rules[r];if("string"==typeof a)i+=a;else if(a)if(Xt(a)){const r=a(e);"string"==typeof r?i+=r:null!=r&&!1!==r&&(i+=_t(Jt(r,e,t,n)))}else i+=_t(Jt(a,e,t,n))}if(i){this.dynamicNameCache||(this.dynamicNameCache=new Map);const e=n.hash?n.hash+i:i;let a=this.dynamicNameCache.get(e);if(!a){if(a=Ze(et(et(this.baseHash,n.hash),i)>>>0),this.dynamicNameCache.size>=200){const e=this.dynamicNameCache.keys().next().value;void 0!==e&&this.dynamicNameCache.delete(e)}this.dynamicNameCache.set(e,a)}if(!t.hasNameForId(this.componentId,a)){const e=n(i,"."+a,void 0,this.componentId);t.insertRules(this.componentId,a,e)}r=kt(r,a)}}return r}}const nn=/&/g;function rn(e,t){let n=0;for(;--t>=0&&92===e.charCodeAt(t);)n++;return!(1&~n)}function an(e){const t=e.length;let n="",r=0,i=0,a=0,o=!1,s=!1;for(let l=0;l<t;l++){const u=e.charCodeAt(l);if(0!==a||o||u!==Yt||42!==e.charCodeAt(l+1))if(o)42===u&&e.charCodeAt(l+1)===Yt&&(o=!1,l++);else if(34!==u&&39!==u||rn(e,l)){if(0===a)if(123===u)i++;else if(125===u){if(i--,i<0){s=!0;let n=l+1;for(;n<t;){const t=e.charCodeAt(n);if(59===t||10===t)break;n++}n<t&&59===e.charCodeAt(n)&&n++,i=0,l=n-1,r=n;continue}0===i&&(n+=e.substring(r,l+1),r=l+1)}else 59===u&&0===i&&(n+=e.substring(r,l+1),r=l+1)}else 0===a?a=u:a===u&&(a=0);else o=!0,l++}return s||0!==i||0!==a?(r<t&&0===i&&0===a&&(n+=e.substring(r)),n):e}function on(e,t){const n=t+" ",r=","+n;for(let i=0;i<e.length;i++){const a=e[i];if("rule"===a.type){a.value=(n+a.value).replaceAll(",",r);const e=a.props,t=[];for(let r=0;r<e.length;r++)t[r]=n+e[r];a.props=t}Array.isArray(a.children)&&"@keyframes"!==a.type&&on(a.children,t)}return e}const sn=new Vt,ln=function({options:e=Ye,plugins:t=Ue}=Ye){let n,r,i;const a=(e,t,i)=>i.startsWith(r)&&i.endsWith(r)&&i.replaceAll(r,"").length>0?`.${n}`:e,o=t.slice();o.push(e=>{e.type===A&&e.value.includes("&")&&(i||(i=new RegExp(`\\${r}\\b`,"g")),e.props[0]=e.props[0].replace(nn,r).replace(i,a))}),e.prefix&&o.push(_e),o.push(ke);let s=[];const l=(d=o.concat((p=e=>s.push(e),function(e){e.root||(e=e.return)&&p(e)})),h=Y(d),function(e,t,n,r){for(var i="",a=0;a<h;a++)i+=d[a](e,t,n,r)||"";return i}),u=(t,a="",o="",u="&")=>{n=u,r=a,i=void 0;const c=function(e){const t=-1!==e.indexOf("//"),n=-1!==e.indexOf("}");if(!t&&!n)return e;if(!t)return an(e);const r=e.length;let i="",a=0,o=0,s=0,l=0,u=0,c=!1;for(;o<r;){const t=e.charCodeAt(o);if(34!==t&&39!==t||rn(e,o))if(0===s)if(t===Yt&&o+1<r&&42===e.charCodeAt(o+1)){for(o+=2;o+1<r&&(42!==e.charCodeAt(o)||e.charCodeAt(o+1)!==Yt);)o++;o+=2}else if(40!==t)if(41!==t)if(l>0)o++;else if(42===t&&o+1<r&&e.charCodeAt(o+1)===Yt)i+=e.substring(a,o),o+=2,a=o,c=!0;else if(t===Yt&&o+1<r&&e.charCodeAt(o+1)===Yt){for(i+=e.substring(a,o);o<r&&10!==e.charCodeAt(o);)o++;a=o,c=!0}else 123===t?u++:125===t&&u--,o++;else l>0&&l--,o++;else l++,o++;else o++;else 0===s?s=t:s===t&&(s=0),o++}return c?(a<r&&(i+=e.substring(a)),0===u?i:an(i)):0===u?e:an(e)}(t);let d=me(o||a?o+" "+a+" { "+c+" }":c);return e.namespace&&(d=on(d,e.namespace)),s=[],we(d,l),s},c=e;var d,h,p;let f=Je;for(let m=0;m<t.length;m++)t[m].name||Le(15),f=et(f,t[m].name);return(null==c?void 0:c.namespace)&&(f=et(f,c.namespace)),(null==c?void 0:c.prefix)&&(f=et(f,"p")),u.hash=f!==Je?f.toString():"",u}(),un=p.createContext({shouldForwardProp:void 0,styleSheet:sn,stylis:ln,stylisPlugins:void 0});function cn(){return p.useContext(un)}un.Consumer;const dn=p.createContext(void 0);function hn(e){const t=p.useContext(dn),n=p.useMemo(()=>function(e,t){if(!e)throw Le(14);if(vt(e)){return e(t)}if(Array.isArray(e)||"object"!=typeof e)throw Le(8);return t?Object.assign(Object.assign({},t),e):e}(e.theme,t),[e.theme,t]);return e.children?p.createElement(dn.Provider,{value:n},e.children):null}dn.Consumer;const pn=Object.prototype.hasOwnProperty,fn={};function mn(e,t){const n="string"!=typeof e?"sc":Ge(e);fn[n]=(fn[n]||0)+1;const r=n+"-"+nt(Me+n+fn[n]);return t?t+"-"+r:r}function gn(e,t,n){const r=wt(e),i=e,a=!rt(e),{attrs:o=Ue,componentId:s=mn(t.displayName,t.parentComponentId),displayName:l=it(e)}=t,u=t.displayName&&t.componentId?Ge(t.displayName)+"-"+t.componentId:t.componentId||s,c=r&&i.attrs?i.attrs.concat(o).filter(Boolean):o;let{shouldForwardProp:d}=t;if(r&&i.shouldForwardProp){const e=i.shouldForwardProp;if(t.shouldForwardProp){const n=t.shouldForwardProp;d=(t,r)=>e(t,r)&&n(t,r)}else d=e}const f=new tn(n,u,r?i.componentStyle:void 0);function m(e,t){return function(e,t,n){const{attrs:r,componentStyle:i,defaultProps:a,foldedComponentIds:o,styledComponentId:s,target:l}=e,u=p.useContext(dn),c=cn(),d=e.shouldForwardProp||c.shouldForwardProp,f=He(t,u,a)||Ye;let m,g;{const e=p.useRef(null),n=e.current;if(null!==n&&n[1]===f&&n[2]===c.styleSheet&&n[3]===c.stylis&&n[7]===i&&function(e,t,n){const r=e,i=t;let a=0;for(const o in i)if(pn.call(i,o)&&(a++,r[o]!==i[o]))return!1;return a===n}(n[0],t,n[4]))m=n[5],g=n[6];else{m=function(e,t,n){const r=Object.assign(Object.assign({},t),{className:void 0,theme:n}),i=e.length>1;for(let a=0;a<e.length;a++){const n=e[a],o=vt(n)?n(i?Object.assign({},r):r):n;for(const e in o)"className"===e?r.className=kt(r.className,o[e]):"style"===e?r.style=Object.assign(Object.assign({},r.style),o[e]):e in t&&void 0===t[e]||(r[e]=o[e])}return"className"in t&&"string"==typeof t.className&&(r.className=kt(r.className,t.className)),r}(r,t,f),y=i,x=m,v=c.styleSheet,b=c.stylis,g=y.generateAndInjectStyles(x,v,b);let n=0;for(const e in t)pn.call(t,e)&&n++;e.current=[t,f,c.styleSheet,c.stylis,n,m,g,i]}}var y,x,v,b;const w=m.as||l,k=function(e,t,n,r){const i={};for(const a in e)void 0===e[a]||"$"===a[0]||"as"===a||"theme"===a&&e.theme===n||("forwardedAs"===a?i.as=e.forwardedAs:r&&!r(a,t)||(i[a]=e[a]));return i}(m,w,f,d);let _=kt(o,s);return g&&(_+=" "+g),m.className&&(_+=" "+m.className),k[rt(w)&&w.includes("-")?"class":"className"]=_,n&&(k.ref=n),h.createElement(w,k)}(g,e,t)}m.displayName=l;let g=p.forwardRef(m);return g.attrs=c,g.componentStyle=f,g.displayName=l,g.shouldForwardProp=d,g.foldedComponentIds=r?kt(i.foldedComponentIds,i.styledComponentId):"",g.styledComponentId=u,g.target=r?i.target:e,Object.defineProperty(g,"defaultProps",{get(){return this._foldedDefaultProps},set(e){this._foldedDefaultProps=r?function(e,...t){for(const n of t)jt(e,n,!0);return e}({},i.defaultProps,e):e}}),Ct(g,()=>`.${g.styledComponentId}`),a&&xt(g,e,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0}),g}function yn(e,t){const n=[e[0]];for(let r=0,i=t.length;r<i;r+=1)n.push(t[r],e[r+1]);return n}const xn=e=>(Bt.add(e),e);function vn(e,...t){if(vt(e)||St(e))return xn(Jt(yn(Ue,[e,...t])));const n=e;return 0===t.length&&1===n.length&&"string"==typeof n[0]?Jt(n):xn(Jt(yn(n,t)))}function bn(e,t,n=Ye){if(!t)throw Le(1,t);const r=(r,...i)=>e(t,n,vn(r,...i));return r.attrs=r=>bn(e,t,Object.assign(Object.assign({},n),{attrs:Array.prototype.concat(n.attrs,r).filter(Boolean)})),r.withConfig=r=>bn(e,t,Object.assign(Object.assign({},n),r)),r}const wn=e=>bn(gn,e),kn=wn;new Set(["a","abbr","address","area","article","aside","audio","b","bdi","bdo","blockquote","body","button","br","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","label","legend","li","main","map","mark","menu","meter","nav","object","ol","optgroup","option","output","p","picture","pre","progress","q","rp","rt","ruby","s","samp","search","section","select","slot","small","span","strong","sub","summary","sup","table","tbody","td","template","textarea","tfoot","th","thead","time","tr","u","ul","var","video","wbr","circle","clipPath","defs","ellipse","feBlend","feColorMatrix","feComponentTransfer","feComposite","feConvolveMatrix","feDiffuseLighting","feDisplacementMap","feDistantLight","feDropShadow","feFlood","feFuncA","feFuncB","feFuncG","feFuncR","feGaussianBlur","feImage","feMerge","feMergeNode","feMorphology","feOffset","fePointLight","feSpecularLighting","feSpotLight","feTile","feTurbulence","filter","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","switch","symbol","text","textPath","tspan","use"]).forEach(e=>{kn[e]=wn(e)});class _n{constructor(e,t){this.instanceRules=new Map,this.rules=e,this.componentId=t,this.isStatic=function(e){for(let t=0;t<e.length;t+=1){const n=e[t];if(vt(n)&&!wt(n))return!1}return!0}(e),Vt.registerId(this.componentId)}removeStyles(e,t){this.instanceRules.delete(e),this.rebuildGroup(t)}renderStyles(e,t,n,r){const i=this.componentId;if(this.isStatic){if(n.hasNameForId(i,i+e))this.instanceRules.has(e)||this.computeRules(e,t,n,r);else{const a=this.computeRules(e,t,n,r);n.insertRules(i,a.name,a.rules)}return}const a=this.instanceRules.get(e);if(this.computeRules(e,t,n,r),!n.server&&a){const t=a.rules,n=this.instanceRules.get(e).rules;if(t.length===n.length){let e=!0;for(let r=0;r<t.length;r++)if(t[r]!==n[r]){e=!1;break}if(e)return}}this.rebuildGroup(n)}computeRules(e,t,n,r){const i=_t(Jt(this.rules,t,n,r)),a={name:this.componentId+e,rules:r(i,"")};return this.instanceRules.set(e,a),a}rebuildGroup(e){const t=this.componentId;e.clearRules(t);for(const n of this.instanceRules.values())e.insertRules(t,n.name,n.rules)}}function Sn(e,...t){const n=vn(e,...t),r=`sc-global-${nt(JSON.stringify(n))}`,i=new _n(n,r),a=e=>{const t=cn(),n=p.useContext(dn);let a;{const e=p.useRef(null);null===e.current&&(e.current=t.styleSheet.allocateGSInstance(r)),a=e.current}t.styleSheet.server&&o(a,e,t.styleSheet,n,t.stylis);{const s=i.isStatic?[a,t.styleSheet,i]:[a,e,t.styleSheet,n,t.stylis,i],l=p.useRef(i);p.useLayoutEffect(()=>{t.styleSheet.server||(l.current!==i&&(t.styleSheet.clearRules(r),l.current=i),o(a,e,t.styleSheet,n,t.stylis))},s),p.useLayoutEffect(()=>()=>{t.styleSheet.server||i.removeStyles(a,t.styleSheet)},[a,t.styleSheet,i])}return t.styleSheet.server&&i.instanceRules.delete(a),null};function o(e,t,n,r,o){if(i.isStatic)i.renderStyles(e,Oe,n,o);else{const s=Object.assign(Object.assign({},t),{theme:He(t,r,a.defaultProps)});i.renderStyles(e,s,n,o)}}return p.memo(a)}var jn;class Cn{constructor(e,t){this[jn]=!0,this.inject=(e,t=ln)=>{const n=this.getName(t);if(!e.hasNameForId(this.id,n)){const r=t(this.rules,n,"@keyframes");e.insertRules(this.id,n,r)}},this.name=e,this.id=De+e,this.rules=t,Ve(this.id),Ct(this,()=>{throw Le(12,String(this.name))})}getName(e=ln){return e.hash?this.name+Ze(+e.hash>>>0):this.name}}function Tn(e,...t){const n=_t(vn(e,...t)),r=nt(n);return new Cn(r,n)}jn=qt;const Pn=Sn`
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

`;class En extends h.Component{state={hasError:!1};static getDerivedStateFromError(e){return{hasError:!0,error:e}}componentDidCatch(e,t){console.error("Error caught in ErrorBoundary:",e),console.error("Component stack:",t.componentStack)}render(){return this.state.hasError?d.jsxs("div",{style:{padding:"2rem",color:"red"},children:[d.jsx("h1",{children:"Something went wrong."}),d.jsx("pre",{children:this.state.error?.message})]}):this.props.children}}var Mn="popstate";function zn(e){return"object"==typeof e&&null!=e&&"pathname"in e&&"search"in e&&"hash"in e&&"state"in e&&"key"in e}function An(e={}){return function(e,t,n,r={}){let{window:i=document.defaultView,v5Compat:a=!1}=r,o=i.history,s="POP",l=null,u=c();null==u&&(u=0,o.replaceState({...o.state,idx:u},""));function c(){return(o.state||{idx:null}).idx}function d(){s="POP";let e=c(),t=null==e?null:e-u;u=e,l&&l({action:s,location:m.location,delta:t})}function h(e,t){s="PUSH";let n=zn(e)?e:On(m.location,e,t);u=c()+1;let r=Dn(n,u),d=m.createHref(n.mask||n);try{o.pushState(r,"",d)}catch(h){if(h instanceof DOMException&&"DataCloneError"===h.name)throw h;i.location.assign(d)}a&&l&&l({action:s,location:m.location,delta:1})}function p(e,t){s="REPLACE";let n=zn(e)?e:On(m.location,e,t);u=c();let r=Dn(n,u),i=m.createHref(n.mask||n);o.replaceState(r,"",i),a&&l&&l({action:s,location:m.location,delta:0})}function f(e){return function(e,t,n=!1){let r="http://localhost";e&&(r="null"!==e.location.origin?e.location.origin:e.location.href);Rn(r,"No window.location.(origin|href) available to create URL");let i="string"==typeof t?t:Ln(t);i=i.replace(/ $/,"%20"),!n&&i.startsWith("//")&&(i=r+i);return new URL(i,r)}(i,e)}let m={get action(){return s},get location(){return e(i,o)},listen(e){if(l)throw new Error("A history only accepts one active listener");return i.addEventListener(Mn,d),l=e,()=>{i.removeEventListener(Mn,d),l=null}},createHref:e=>t(i,e),createURL:f,encodeLocation(e){let t=f(e);return{pathname:t.pathname,search:t.search,hash:t.hash}},push:h,replace:p,go:e=>o.go(e)};return m}(function(e,t){let n=t.state?.masked,{pathname:r,search:i,hash:a}=n||e.location;return On("",{pathname:r,search:i,hash:a},t.state&&t.state.usr||null,t.state&&t.state.key||"default",n?{pathname:e.location.pathname,search:e.location.search,hash:e.location.hash}:void 0)},function(e,t){return"string"==typeof t?t:Ln(t)},0,e)}function Rn(e,t){if(!1===e||null==e)throw new Error(t)}function $n(e,t){if(!e){"undefined"!=typeof console&&console.warn(t);try{throw new Error(t)}catch(n){}}}function Dn(e,t){return{usr:e.state,key:e.key,idx:t,masked:e.mask?{pathname:e.pathname,search:e.search,hash:e.hash}:void 0}}function On(e,t,n=null,r,i){return{pathname:"string"==typeof e?e:e.pathname,search:"",hash:"",..."string"==typeof t?Nn(t):t,state:n,key:t&&t.key||r||Math.random().toString(36).substring(2,10),mask:i}}function Ln({pathname:e="/",search:t="",hash:n=""}){return t&&"?"!==t&&(e+="?"===t.charAt(0)?t:"?"+t),n&&"#"!==n&&(e+="#"===n.charAt(0)?n:"#"+n),e}function Nn(e){let t={};if(e){let n=e.indexOf("#");n>=0&&(t.hash=e.substring(n),e=e.substring(0,n));let r=e.indexOf("?");r>=0&&(t.search=e.substring(r),e=e.substring(0,r)),e&&(t.pathname=e)}return t}function In(e,t,n="/"){return function(e,t,n,r){let i="string"==typeof t?Nn(t):t,a=Zn(i.pathname||"/",n);if(null==a)return null;let o=function(e){let t=Fn(e);return function(e){e.sort((e,t)=>e.score!==t.score?t.score-e.score:function(e,t){let n=e.length===t.length&&e.slice(0,-1).every((e,n)=>e===t[n]);return n?e[e.length-1]-t[t.length-1]:0}(e.routesMeta.map(e=>e.childrenIndex),t.routesMeta.map(e=>e.childrenIndex)))}(t),t}(e),s=null,l=function(e){try{return e.split("/").map(e=>decodeURIComponent(e).replace(/\//g,"%2F")).join("/")}catch(t){return $n(!1,`The URL path "${e}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${t}).`),e}}(a);for(let u=0;null==s&&u<o.length;++u)s=Kn(o[u],l,r);return s}(e,t,n,!1)}function Fn(e,t=[],n=[],r="",i=!1){let a=(e,a,o=i,s)=>{let l={relativePath:void 0===s?e.path||"":s,caseSensitive:!0===e.caseSensitive,childrenIndex:a,route:e};if(l.relativePath.startsWith("/")){if(!l.relativePath.startsWith(r)&&o)return;Rn(l.relativePath.startsWith(r),`Absolute route path "${l.relativePath}" nested under path "${r}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`),l.relativePath=l.relativePath.slice(r.length)}let u=ar([r,l.relativePath]),c=n.concat(l);e.children&&e.children.length>0&&(Rn(!0!==e.index,`Index routes must not have child routes. Please remove all child routes from route path "${u}".`),Fn(e.children,t,c,u,o)),(null!=e.path||e.index)&&t.push({path:u,score:Gn(u,e.index),routesMeta:c})};return e.forEach((e,t)=>{if(""!==e.path&&e.path?.includes("?"))for(let n of Vn(e.path))a(e,t,!0,n);else a(e,t)}),t}function Vn(e){let t=e.split("/");if(0===t.length)return[];let[n,...r]=t,i=n.endsWith("?"),a=n.replace(/\?$/,"");if(0===r.length)return i?[a,""]:[a];let o=Vn(r.join("/")),s=[];return s.push(...o.map(e=>""===e?a:[a,e].join("/"))),i&&s.push(...o),s.map(t=>e.startsWith("/")&&""===t?"/":t)}var Bn=/^:[\w-]+$/,Wn=3,Un=2,Yn=1,Hn=10,qn=-2,Xn=e=>"*"===e;function Gn(e,t){let n=e.split("/"),r=n.length;return n.some(Xn)&&(r+=qn),t&&(r+=Un),n.filter(e=>!Xn(e)).reduce((e,t)=>e+(Bn.test(t)?Wn:""===t?Yn:Hn),r)}function Kn(e,t,n=!1){let{routesMeta:r}=e,i={},a="/",o=[];for(let s=0;s<r.length;++s){let e=r[s],l=s===r.length-1,u="/"===a?t:t.slice(a.length)||"/",c=Qn({path:e.relativePath,caseSensitive:e.caseSensitive,end:l},u),d=e.route;if(!c&&l&&n&&!r[r.length-1].route.index&&(c=Qn({path:e.relativePath,caseSensitive:e.caseSensitive,end:!1},u)),!c)return null;Object.assign(i,c.params),o.push({params:i,pathname:ar([a,c.pathname]),pathnameBase:sr(ar([a,c.pathnameBase])),route:d}),"/"!==c.pathnameBase&&(a=ar([a,c.pathnameBase]))}return o}function Qn(e,t){"string"==typeof e&&(e={path:e,caseSensitive:!1,end:!0});let[n,r]=function(e,t=!1,n=!0){$n("*"===e||!e.endsWith("*")||e.endsWith("/*"),`Route path "${e}" will be treated as if it were "${e.replace(/\*$/,"/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${e.replace(/\*$/,"/*")}".`);let r=[],i="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(e,t,n,i,a)=>{if(r.push({paramName:t,isOptional:null!=n}),n){let t=a.charAt(i+e.length);return t&&"/"!==t?"/([^\\/]*)":"(?:/([^\\/]*))?"}return"/([^\\/]+)"}).replace(/\/([\w-]+)\?(\/|$)/g,"(/$1)?$2");e.endsWith("*")?(r.push({paramName:"*"}),i+="*"===e||"/*"===e?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?i+="\\/*$":""!==e&&"/"!==e&&(i+="(?:(?=\\/|$))");let a=new RegExp(i,t?void 0:"i");return[a,r]}(e.path,e.caseSensitive,e.end),i=t.match(n);if(!i)return null;let a=i[0],o=a.replace(/(.)\/+$/,"$1"),s=i.slice(1);return{params:r.reduce((e,{paramName:t,isOptional:n},r)=>{if("*"===t){let e=s[r]||"";o=a.slice(0,a.length-e.length).replace(/(.)\/+$/,"$1")}const i=s[r];return e[t]=n&&!i?void 0:(i||"").replace(/%2F/g,"/"),e},{}),pathname:a,pathnameBase:o,pattern:e}}function Zn(e,t){if("/"===t)return e;if(!e.toLowerCase().startsWith(t.toLowerCase()))return null;let n=t.endsWith("/")?t.length-1:t.length,r=e.charAt(n);return r&&"/"!==r?null:e.slice(n)||"/"}var Jn=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i;function er(e,t){let n=or(t).split("/");return e.split("/").forEach(e=>{".."===e?n.length>1&&n.pop():"."!==e&&n.push(e)}),n.length>1?n.join("/"):"/"}function tr(e,t,n,r){return`Cannot include a '${e}' character in a manually specified \`to.${t}\` field [${JSON.stringify(r)}].  Please separate it out to the \`to.${n}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`}function nr(e){let t=function(e){return e.filter((e,t)=>0===t||e.route.path&&e.route.path.length>0)}(e);return t.map((e,n)=>n===t.length-1?e.pathname:e.pathnameBase)}function rr(e,t,n,r=!1){let i;"string"==typeof e?i=Nn(e):(i={...e},Rn(!i.pathname||!i.pathname.includes("?"),tr("?","pathname","search",i)),Rn(!i.pathname||!i.pathname.includes("#"),tr("#","pathname","hash",i)),Rn(!i.search||!i.search.includes("#"),tr("#","search","hash",i)));let a,o=""===e||""===i.pathname,s=o?"/":i.pathname;if(null==s)a=n;else{let e=t.length-1;if(!r&&s.startsWith("..")){let t=s.split("/");for(;".."===t[0];)t.shift(),e-=1;i.pathname=t.join("/")}a=e>=0?t[e]:"/"}let l=function(e,t="/"){let n,{pathname:r,search:i="",hash:a=""}="string"==typeof e?Nn(e):e;return r?(r=ir(r),n=r.startsWith("/")?er(r.substring(1),"/"):er(r,t)):n=t,{pathname:n,search:lr(i),hash:ur(a)}}(i,a),u=s&&"/"!==s&&s.endsWith("/"),c=(o||"."===s)&&n.endsWith("/");return l.pathname.endsWith("/")||!u&&!c||(l.pathname+="/"),l}var ir=e=>e.replace(/\/\/+/g,"/"),ar=e=>ir(e.join("/")),or=e=>e.replace(/\/+$/,""),sr=e=>or(e).replace(/^\/*/,"/"),lr=e=>e&&"?"!==e?e.startsWith("?")?e:"?"+e:"",ur=e=>e&&"#"!==e?e.startsWith("#")?e:"#"+e:"",cr=class{constructor(e,t,n,r=!1){this.status=e,this.statusText=t||"",this.internal=r,n instanceof Error?(this.data=n.toString(),this.error=n):this.data=n}};function dr(e){let t=e.map(e=>e.route.path).filter(Boolean);return ar(t)||"/"}var hr="undefined"!=typeof window&&void 0!==window.document&&void 0!==window.document.createElement;function pr(e,t){let n=e;if("string"!=typeof n||!Jn.test(n))return{absoluteURL:void 0,isExternal:!1,to:n};let r=n,i=!1;if(hr)try{let e=new URL(window.location.href),r=n.startsWith("//")?new URL(e.protocol+n):new URL(n),a=Zn(r.pathname,t);r.origin===e.origin&&null!=a?n=a+r.search+r.hash:i=!0}catch(a){$n(!1,`<Link to="${n}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`)}return{absoluteURL:r,isExternal:i,to:n}}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");var fr=["POST","PUT","PATCH","DELETE"];new Set(fr);var mr=["GET",...fr];new Set(mr);var gr=h.createContext(null);gr.displayName="DataRouter";var yr=h.createContext(null);yr.displayName="DataRouterState";var xr=h.createContext(!1);var vr=h.createContext({isTransitioning:!1});vr.displayName="ViewTransition",h.createContext(new Map).displayName="Fetchers",h.createContext(null).displayName="Await";var br=h.createContext(null);br.displayName="Navigation";var wr=h.createContext(null);wr.displayName="Location";var kr=h.createContext({outlet:null,matches:[],isDataRoute:!1});kr.displayName="Route";var _r=h.createContext(null);_r.displayName="RouteError";var Sr="REACT_ROUTER_ERROR";function jr(){return null!=h.useContext(wr)}function Cr(){return Rn(jr(),"useLocation() may be used only in the context of a <Router> component."),h.useContext(wr).location}var Tr="You should call navigate() in a React.useEffect(), not when your component is first rendered.";function Pr(e){h.useContext(br).static||h.useLayoutEffect(e)}function Er(){let{isDataRoute:e}=h.useContext(kr);return e?function(){let{router:e}=function(e){let t=h.useContext(gr);return Rn(t,Nr(e)),t}("useNavigate"),t=Ir("useNavigate"),n=h.useRef(!1);return Pr(()=>{n.current=!0}),h.useCallback(async(r,i={})=>{$n(n.current,Tr),n.current&&("number"==typeof r?await e.navigate(r):await e.navigate(r,{fromRouteId:t,...i}))},[e,t])}():function(){Rn(jr(),"useNavigate() may be used only in the context of a <Router> component.");let e=h.useContext(gr),{basename:t,navigator:n}=h.useContext(br),{matches:r}=h.useContext(kr),{pathname:i}=Cr(),a=JSON.stringify(nr(r)),o=h.useRef(!1);return Pr(()=>{o.current=!0}),h.useCallback((r,s={})=>{if($n(o.current,Tr),!o.current)return;if("number"==typeof r)return void n.go(r);let l=rr(r,JSON.parse(a),i,"path"===s.relative);null==e&&"/"!==t&&(l.pathname="/"===l.pathname?t:ar([t,l.pathname])),(s.replace?n.replace:n.push)(l,s.state,s)},[t,n,a,i,e])}()}function Mr(e,{relative:t}={}){let{matches:n}=h.useContext(kr),{pathname:r}=Cr(),i=JSON.stringify(nr(n));return h.useMemo(()=>rr(e,JSON.parse(i),r,"path"===t),[e,i,r,t])}function zr(e,t,n){Rn(jr(),"useRoutes() may be used only in the context of a <Router> component.");let{navigator:r}=h.useContext(br),{matches:i}=h.useContext(kr),a=i[i.length-1],o=a?a.params:{},s=a?a.pathname:"/",l=a?a.pathnameBase:"/",u=a&&a.route;{let e=u&&u.path||"";Vr(s,!u||e.endsWith("*")||e.endsWith("*?"),`You rendered descendant <Routes> (or called \`useRoutes()\`) at "${s}" (under <Route path="${e}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.\n\nPlease change the parent <Route path="${e}"> to <Route path="${"/"===e?"*":`${e}/*`}">.`)}let c,d=Cr();if(t){let e="string"==typeof t?Nn(t):t;Rn("/"===l||e.pathname?.startsWith(l),`When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${l}" but pathname "${e.pathname}" was given in the \`location\` prop.`),c=e}else c=d;let p=c.pathname||"/",f=p;if("/"!==l){let e=l.replace(/^\//,"").split("/");f="/"+p.replace(/^\//,"").split("/").slice(e.length).join("/")}let m=n&&n.state.matches.length?n.state.matches.map(e=>Object.assign(e,{route:n.manifest[e.route.id]||e.route})):In(e,{pathname:f});$n(u||null!=m,`No routes matched location "${c.pathname}${c.search}${c.hash}" `),$n(null==m||void 0!==m[m.length-1].route.element||void 0!==m[m.length-1].route.Component||void 0!==m[m.length-1].route.lazy,`Matched leaf route at location "${c.pathname}${c.search}${c.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`);let g=function(e,t=[],n){let r=n?.state;if(null==e){if(!r)return null;if(r.errors)e=r.matches;else{if(0!==t.length||r.initialized||!(r.matches.length>0))return null;e=r.matches}}let i=e,a=r?.errors;if(null!=a){let e=i.findIndex(e=>e.route.id&&void 0!==a?.[e.route.id]);Rn(e>=0,`Could not find a matching route for errors on route IDs: ${Object.keys(a).join(",")}`),i=i.slice(0,Math.min(i.length,e+1))}let o=!1,s=-1;if(n&&r){o=r.renderFallback;for(let e=0;e<i.length;e++){let t=i[e];if((t.route.HydrateFallback||t.route.hydrateFallbackElement)&&(s=e),t.route.id){let{loaderData:e,errors:a}=r,l=t.route.loader&&!e.hasOwnProperty(t.route.id)&&(!a||void 0===a[t.route.id]);if(t.route.lazy||l){n.isStatic&&(o=!0),i=s>=0?i.slice(0,s+1):[i[0]];break}}}}let l=n?.onError,u=r&&l?(e,t)=>{l(e,{location:r.location,params:r.matches?.[0]?.params??{},pattern:dr(r.matches),errorInfo:t})}:void 0;return i.reduceRight((e,n,l)=>{let c,d=!1,p=null,f=null;r&&(c=a&&n.route.id?a[n.route.id]:void 0,p=n.route.errorElement||Rr,o&&(s<0&&0===l?(Vr("route-fallback",!1,"No `HydrateFallback` element provided to render during initial hydration"),d=!0,f=null):s===l&&(d=!0,f=n.route.hydrateFallbackElement||null)));let m=t.concat(i.slice(0,l+1)),g=()=>{let t;return t=c?p:d?f:n.route.Component?h.createElement(n.route.Component,null):n.route.element?n.route.element:e,h.createElement(Lr,{match:n,routeContext:{outlet:e,matches:m,isDataRoute:null!=r},children:t})};return r&&(n.route.ErrorBoundary||n.route.errorElement||0===l)?h.createElement($r,{location:r.location,revalidation:r.revalidation,component:p,error:c,children:g(),routeContext:{outlet:null,matches:m,isDataRoute:!0},onError:u}):g()},null)}(m&&m.map(e=>Object.assign({},e,{params:Object.assign({},o,e.params),pathname:ar([l,r.encodeLocation?r.encodeLocation(e.pathname.replace(/%/g,"%25").replace(/\?/g,"%3F").replace(/#/g,"%23")).pathname:e.pathname]),pathnameBase:"/"===e.pathnameBase?l:ar([l,r.encodeLocation?r.encodeLocation(e.pathnameBase.replace(/%/g,"%25").replace(/\?/g,"%3F").replace(/#/g,"%23")).pathname:e.pathnameBase])})),i,n);return t&&g?h.createElement(wr.Provider,{value:{location:{pathname:"/",search:"",hash:"",state:null,key:"default",mask:void 0,...c},navigationType:"POP"}},g):g}function Ar(){let e=function(){let e=h.useContext(_r),t=function(e){let t=h.useContext(yr);return Rn(t,Nr(e)),t}("useRouteError"),n=Ir("useRouteError");if(void 0!==e)return e;return t.errors?.[n]}(),t=function(e){return null!=e&&"number"==typeof e.status&&"string"==typeof e.statusText&&"boolean"==typeof e.internal&&"data"in e}(e)?`${e.status} ${e.statusText}`:e instanceof Error?e.message:JSON.stringify(e),n=e instanceof Error?e.stack:null,r="rgba(200,200,200, 0.5)",i={padding:"0.5rem",backgroundColor:r},a={padding:"2px 4px",backgroundColor:r},o=null;return console.error("Error handled by React Router default ErrorBoundary:",e),o=h.createElement(h.Fragment,null,h.createElement("p",null,"💿 Hey developer 👋"),h.createElement("p",null,"You can provide a way better UX than this when your app throws errors by providing your own ",h.createElement("code",{style:a},"ErrorBoundary")," or"," ",h.createElement("code",{style:a},"errorElement")," prop on your route.")),h.createElement(h.Fragment,null,h.createElement("h2",null,"Unexpected Application Error!"),h.createElement("h3",{style:{fontStyle:"italic"}},t),n?h.createElement("pre",{style:i},n):null,o)}h.createContext(null);var Rr=h.createElement(Ar,null),$r=class extends h.Component{constructor(e){super(e),this.state={location:e.location,revalidation:e.revalidation,error:e.error}}static getDerivedStateFromError(e){return{error:e}}static getDerivedStateFromProps(e,t){return t.location!==e.location||"idle"!==t.revalidation&&"idle"===e.revalidation?{error:e.error,location:e.location,revalidation:e.revalidation}:{error:void 0!==e.error?e.error:t.error,location:t.location,revalidation:e.revalidation||t.revalidation}}componentDidCatch(e,t){this.props.onError?this.props.onError(e,t):console.error("React Router caught the following error during render",e)}render(){let e=this.state.error;if(this.context&&"object"==typeof e&&e&&"digest"in e&&"string"==typeof e.digest){const t=function(e){if(e.startsWith(`${Sr}:ROUTE_ERROR_RESPONSE:{`))try{let t=JSON.parse(e.slice(40));if("object"==typeof t&&t&&"number"==typeof t.status&&"string"==typeof t.statusText)return new cr(t.status,t.statusText,t.data)}catch{}}(e.digest);t&&(e=t)}let t=void 0!==e?h.createElement(kr.Provider,{value:this.props.routeContext},h.createElement(_r.Provider,{value:e,children:this.props.component})):this.props.children;return this.context?h.createElement(Or,{error:e},t):t}};$r.contextType=xr;var Dr=new WeakMap;function Or({children:e,error:t}){let{basename:n}=h.useContext(br);if("object"==typeof t&&t&&"digest"in t&&"string"==typeof t.digest){let e=function(e){if(e.startsWith(`${Sr}:REDIRECT:{`))try{let t=JSON.parse(e.slice(28));if("object"==typeof t&&t&&"number"==typeof t.status&&"string"==typeof t.statusText&&"string"==typeof t.location&&"boolean"==typeof t.reloadDocument&&"boolean"==typeof t.replace)return t}catch{}}(t.digest);if(e){let r=Dr.get(t);if(r)throw r;let i=pr(e.location,n);if(hr&&!Dr.get(t)){if(!i.isExternal&&!e.reloadDocument){const n=Promise.resolve().then(()=>window.__reactRouterDataRouter.navigate(i.to,{replace:e.replace}));throw Dr.set(t,n),n}window.location.href=i.absoluteURL||i.to}return h.createElement("meta",{httpEquiv:"refresh",content:`0;url=${i.absoluteURL||i.to}`})}}return e}function Lr({routeContext:e,match:t,children:n}){let r=h.useContext(gr);return r&&r.static&&r.staticContext&&(t.route.errorElement||t.route.ErrorBoundary)&&(r.staticContext._deepestRenderedBoundaryId=t.route.id),h.createElement(kr.Provider,{value:e},n)}function Nr(e){return`${e} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function Ir(e){let t=function(e){let t=h.useContext(kr);return Rn(t,Nr(e)),t}(e),n=t.matches[t.matches.length-1];return Rn(n.route.id,`${e} can only be used on routes that contain a unique "id"`),n.route.id}var Fr={};function Vr(e,t,n){t||Fr[e]||(Fr[e]=!0,$n(!1,n))}function Br({to:e,replace:t,state:n,relative:r}){Rn(jr(),"<Navigate> may be used only in the context of a <Router> component.");let{static:i}=h.useContext(br);$n(!i,"<Navigate> must not be used on the initial render in a <StaticRouter>. This is a no-op, but you should modify your code so the <Navigate> is only ever rendered in response to some user interaction or state change.");let{matches:a}=h.useContext(kr),{pathname:o}=Cr(),s=Er(),l=rr(e,nr(a),o,"path"===r),u=JSON.stringify(l);return h.useEffect(()=>{s(JSON.parse(u),{replace:t,state:n,relative:r})},[s,u,r,t,n]),null}function Wr(e){Rn(!1,"A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>.")}function Ur({basename:e="/",children:t=null,location:n,navigationType:r="POP",navigator:i,static:a=!1,useTransitions:o}){Rn(!jr(),"You cannot render a <Router> inside another <Router>. You should never have more than one in your app.");let s=e.replace(/^\/*/,"/"),l=h.useMemo(()=>({basename:s,navigator:i,static:a,useTransitions:o,future:{}}),[s,i,a,o]);"string"==typeof n&&(n=Nn(n));let{pathname:u="/",search:c="",hash:d="",state:p=null,key:f="default",mask:m}=n,g=h.useMemo(()=>{let e=Zn(u,s);return null==e?null:{location:{pathname:e,search:c,hash:d,state:p,key:f,mask:m},navigationType:r}},[s,u,c,d,p,f,r,m]);return $n(null!=g,`<Router basename="${s}"> is not able to match the URL "${u}${c}${d}" because it does not start with the basename, so the <Router> won't render anything.`),null==g?null:h.createElement(br.Provider,{value:l},h.createElement(wr.Provider,{children:t,value:g}))}function Yr({children:e,location:t}){return zr(Hr(e),t)}function Hr(e,t=[]){let n=[];return h.Children.forEach(e,(e,r)=>{if(!h.isValidElement(e))return;let i=[...t,r];if(e.type===h.Fragment)return void n.push.apply(n,Hr(e.props.children,i));Rn(e.type===Wr,`[${"string"==typeof e.type?e.type:e.type.name}] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`),Rn(!e.props.index||!e.props.children,"An index route cannot have child routes.");let a={id:e.props.id||i.join("-"),caseSensitive:e.props.caseSensitive,element:e.props.element,Component:e.props.Component,index:e.props.index,path:e.props.path,middleware:e.props.middleware,loader:e.props.loader,action:e.props.action,hydrateFallbackElement:e.props.hydrateFallbackElement,HydrateFallback:e.props.HydrateFallback,errorElement:e.props.errorElement,ErrorBoundary:e.props.ErrorBoundary,hasErrorBoundary:!0===e.props.hasErrorBoundary||null!=e.props.ErrorBoundary||null!=e.props.errorElement,shouldRevalidate:e.props.shouldRevalidate,handle:e.props.handle,lazy:e.props.lazy};e.props.children&&(a.children=Hr(e.props.children,i)),n.push(a)}),n}h.memo(function({routes:e,manifest:t,future:n,state:r,isStatic:i,onError:a}){return zr(e,void 0,{manifest:t,state:r,isStatic:i,onError:a})});var qr="get",Xr="application/x-www-form-urlencoded";function Gr(e){return"undefined"!=typeof HTMLElement&&e instanceof HTMLElement}var Kr=null;var Qr=new Set(["application/x-www-form-urlencoded","multipart/form-data","text/plain"]);function Zr(e){return null==e||Qr.has(e)?e:($n(!1,`"${e}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${Xr}"`),null)}function Jr(e,t){let n,r,i,a,o;if(Gr(s=e)&&"form"===s.tagName.toLowerCase()){let o=e.getAttribute("action");r=o?Zn(o,t):null,n=e.getAttribute("method")||qr,i=Zr(e.getAttribute("enctype"))||Xr,a=new FormData(e)}else if(function(e){return Gr(e)&&"button"===e.tagName.toLowerCase()}(e)||function(e){return Gr(e)&&"input"===e.tagName.toLowerCase()}(e)&&("submit"===e.type||"image"===e.type)){let o=e.form;if(null==o)throw new Error('Cannot submit a <button> or <input type="submit"> without a <form>');let s=e.getAttribute("formaction")||o.getAttribute("action");if(r=s?Zn(s,t):null,n=e.getAttribute("formmethod")||o.getAttribute("method")||qr,i=Zr(e.getAttribute("formenctype"))||Zr(o.getAttribute("enctype"))||Xr,a=new FormData(o,e),!function(){if(null===Kr)try{new FormData(document.createElement("form"),0),Kr=!1}catch(e){Kr=!0}return Kr}()){let{name:t,type:n,value:r}=e;if("image"===n){let e=t?`${t}.`:"";a.append(`${e}x`,"0"),a.append(`${e}y`,"0")}else t&&a.append(t,r)}}else{if(Gr(e))throw new Error('Cannot submit element that is not <form>, <button>, or <input type="submit|image">');n=qr,r=null,i=Xr,o=e}var s;return a&&"text/plain"===i&&(o=a,a=void 0),{action:r,method:n.toLowerCase(),encType:i,formData:a,body:o}}function ei(e,t){if(!1===e||null==e)throw new Error(t)}function ti(e,t,n,r){let i="string"==typeof e?new URL(e,"undefined"==typeof window?"server://singlefetch/":window.location.origin):e;return n?i.pathname.endsWith("/")?i.pathname=`${i.pathname}_.${r}`:i.pathname=`${i.pathname}.${r}`:"/"===i.pathname?i.pathname=`_root.${r}`:t&&"/"===Zn(i.pathname,t)?i.pathname=`${or(t)}/_root.${r}`:i.pathname=`${or(i.pathname)}.${r}`,i}function ni(e){return null!=e&&(null==e.href?"preload"===e.rel&&"string"==typeof e.imageSrcSet&&"string"==typeof e.imageSizes:"string"==typeof e.rel&&"string"==typeof e.href)}async function ri(e,t,n){return function(e,t){let n=new Set;return new Set(t),e.reduce((e,t)=>{let r=JSON.stringify(function(e){let t={},n=Object.keys(e).sort();for(let r of n)t[r]=e[r];return t}(t));return n.has(r)||(n.add(r),e.push({key:r,link:t})),e},[])}((await Promise.all(e.map(async e=>{let r=t.routes[e.route.id];if(r){let e=await async function(e,t){if(e.id in t)return t[e.id];try{let n=await import(e.module);return t[e.id]=n,n}catch(n){return console.error(`Error loading route module \`${e.module}\`, reloading page...`),console.error(n),window.__reactRouterContext&&window.__reactRouterContext.isSpaMode,window.location.reload(),new Promise(()=>{})}}(r,n);return e.links?e.links():[]}return[]}))).flat(1).filter(ni).filter(e=>"stylesheet"===e.rel||"preload"===e.rel).map(e=>"stylesheet"===e.rel?{...e,rel:"prefetch",as:"style"}:{...e,rel:"prefetch"}))}function ii(e,t,n,r,i,a){let o=(e,t)=>!n[t]||e.route.id!==n[t].route.id,s=(e,t)=>n[t].pathname!==e.pathname||n[t].route.path?.endsWith("*")&&n[t].params["*"]!==e.params["*"];return"assets"===a?t.filter((e,t)=>o(e,t)||s(e,t)):"data"===a?t.filter((t,a)=>{let l=r.routes[t.route.id];if(!l||!l.hasLoader)return!1;if(o(t,a)||s(t,a))return!0;if(t.route.shouldRevalidate){let r=t.route.shouldRevalidate({currentUrl:new URL(i.pathname+i.search+i.hash,window.origin),currentParams:n[0]?.params||{},nextUrl:new URL(e,window.origin),nextParams:t.params,defaultShouldRevalidate:!0});if("boolean"==typeof r)return r}return!0}):[]}function ai(e,t,{includeHydrateFallback:n}={}){return r=e.map(e=>{let r=t.routes[e.route.id];if(!r)return[];let i=[r.module];return r.clientActionModule&&(i=i.concat(r.clientActionModule)),r.clientLoaderModule&&(i=i.concat(r.clientLoaderModule)),n&&r.hydrateFallbackModule&&(i=i.concat(r.hydrateFallbackModule)),r.imports&&(i=i.concat(r.imports)),i}).flat(1),[...new Set(r)];var r}function oi(){let e=h.useContext(gr);return ei(e,"You must render this element inside a <DataRouterContext.Provider> element"),e}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");var si=h.createContext(void 0);function li(){let e=h.useContext(si);return ei(e,"You must render this element inside a <HydratedRouter> element"),e}function ui(e,t){return n=>{e&&e(n),n.defaultPrevented||t(n)}}function ci({page:e,...t}){let n=h.useContext(xr),{router:r}=oi(),i=h.useMemo(()=>In(r.routes,e,r.basename),[r.routes,e,r.basename]);return i?n?h.createElement(di,{page:e,matches:i,...t}):h.createElement(hi,{page:e,matches:i,...t}):null}function di({page:e,matches:t,...n}){let r=Cr(),{future:i}=li(),{basename:a}=oi(),o=h.useMemo(()=>{if(e===r.pathname+r.search+r.hash)return[];let n=ti(e,a,i.v8_trailingSlashAwareDataRequests,"rsc"),o=!1,s=[];for(let e of t)"function"==typeof e.route.shouldRevalidate?o=!0:s.push(e.route.id);return o&&s.length>0&&n.searchParams.set("_routes",s.join(",")),[n.pathname+n.search]},[a,i.v8_trailingSlashAwareDataRequests,e,r,t]);return h.createElement(h.Fragment,null,o.map(e=>h.createElement("link",{key:e,rel:"prefetch",as:"fetch",href:e,...n})))}function hi({page:e,matches:t,...n}){let r=Cr(),{future:i,manifest:a,routeModules:o}=li(),{basename:s}=oi(),{loaderData:l,matches:u}=function(){let e=h.useContext(yr);return ei(e,"You must render this element inside a <DataRouterStateContext.Provider> element"),e}(),c=h.useMemo(()=>ii(e,t,u,a,r,"data"),[e,t,u,a,r]),d=h.useMemo(()=>ii(e,t,u,a,r,"assets"),[e,t,u,a,r]),p=h.useMemo(()=>{if(e===r.pathname+r.search+r.hash)return[];let n=new Set,u=!1;if(t.forEach(e=>{let t=a.routes[e.route.id];t&&t.hasLoader&&(!c.some(t=>t.route.id===e.route.id)&&e.route.id in l&&o[e.route.id]?.shouldRevalidate||t.hasClientLoader?u=!0:n.add(e.route.id))}),0===n.size)return[];let d=ti(e,s,i.v8_trailingSlashAwareDataRequests,"data");return u&&n.size>0&&d.searchParams.set("_routes",t.filter(e=>n.has(e.route.id)).map(e=>e.route.id).join(",")),[d.pathname+d.search]},[s,i.v8_trailingSlashAwareDataRequests,l,r,a,c,t,e,o]),f=h.useMemo(()=>ai(d,a),[d,a]),m=function(e){let{manifest:t,routeModules:n}=li(),[r,i]=h.useState([]);return h.useEffect(()=>{let r=!1;return ri(e,t,n).then(e=>{r||i(e)}),()=>{r=!0}},[e,t,n]),r}(d);return h.createElement(h.Fragment,null,p.map(e=>h.createElement("link",{key:e,rel:"prefetch",as:"fetch",href:e,...n})),f.map(e=>h.createElement("link",{key:e,rel:"modulepreload",href:e,...n})),m.map(({key:e,link:t})=>h.createElement("link",{key:e,nonce:n.nonce,...t,crossOrigin:t.crossOrigin??n.crossOrigin})))}function pi(...e){return t=>{e.forEach(e=>{"function"==typeof e?e(t):null!=e&&(e.current=t)})}}si.displayName="FrameworkContext";var fi="undefined"!=typeof window&&void 0!==window.document&&void 0!==window.document.createElement;try{fi&&(window.__reactRouterVersion="7.16.0")}catch(rj){}function mi({basename:e,children:t,useTransitions:n,window:r}){let i=h.useRef();null==i.current&&(i.current=An({window:r,v5Compat:!0}));let a=i.current,[o,s]=h.useState({action:a.action,location:a.location}),l=h.useCallback(e=>{!1===n?s(e):h.startTransition(()=>s(e))},[n]);return h.useLayoutEffect(()=>a.listen(l),[a,l]),h.createElement(Ur,{basename:e,children:t,location:o.location,navigationType:o.action,navigator:a,useTransitions:n})}var gi=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,yi=h.forwardRef(function({onClick:e,discover:t="render",prefetch:n="none",relative:r,reloadDocument:i,replace:a,mask:o,state:s,target:l,to:u,preventScrollReset:c,viewTransition:d,defaultShouldRevalidate:p,...f},m){let{basename:g,navigator:y,useTransitions:x}=h.useContext(br),v="string"==typeof u&&gi.test(u),b=pr(u,g),w=function(e,{relative:t}={}){Rn(jr(),"useHref() may be used only in the context of a <Router> component.");let{basename:n,navigator:r}=h.useContext(br),{hash:i,pathname:a,search:o}=Mr(e,{relative:t}),s=a;return"/"!==n&&(s="/"===a?n:ar([n,a])),r.createHref({pathname:s,search:o,hash:i})}(u=b.to,{relative:r}),k=Cr(),_=null;if(o){let e=rr(o,[],k.mask?k.mask.pathname:"/",!0);"/"!==g&&(e.pathname="/"===e.pathname?g:ar([g,e.pathname])),_=y.createHref(e)}let[S,j,C]=function(e,t){let n=h.useContext(si),[r,i]=h.useState(!1),[a,o]=h.useState(!1),{onFocus:s,onBlur:l,onMouseEnter:u,onMouseLeave:c,onTouchStart:d}=t,p=h.useRef(null);h.useEffect(()=>{if("render"===e&&o(!0),"viewport"===e){let e=new IntersectionObserver(e=>{e.forEach(e=>{o(e.isIntersecting)})},{threshold:.5});return p.current&&e.observe(p.current),()=>{e.disconnect()}}},[e]),h.useEffect(()=>{if(r){let e=setTimeout(()=>{o(!0)},100);return()=>{clearTimeout(e)}}},[r]);let f=()=>{i(!0)},m=()=>{i(!1),o(!1)};return n?"intent"!==e?[a,p,{}]:[a,p,{onFocus:ui(s,f),onBlur:ui(l,m),onMouseEnter:ui(u,f),onMouseLeave:ui(c,m),onTouchStart:ui(d,f)}]:[!1,p,{}]}(n,f),T=function(e,{target:t,replace:n,mask:r,state:i,preventScrollReset:a,relative:o,viewTransition:s,defaultShouldRevalidate:l,useTransitions:u}={}){let c=Er(),d=Cr(),p=Mr(e,{relative:o});return h.useCallback(f=>{if(function(e,t){return!(0!==e.button||t&&"_self"!==t||function(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}(e))}(f,t)){f.preventDefault();let t=void 0!==n?n:Ln(d)===Ln(p),m=()=>c(e,{replace:t,mask:r,state:i,preventScrollReset:a,relative:o,viewTransition:s,defaultShouldRevalidate:l});u?h.startTransition(()=>m()):m()}},[d,c,p,n,r,i,t,e,a,o,s,l,u])}(u,{replace:a,mask:o,state:s,target:l,preventScrollReset:c,relative:r,viewTransition:d,defaultShouldRevalidate:p,useTransitions:x});let P=!(b.isExternal||i),E=h.createElement("a",{...f,...C,href:(P?_:void 0)||b.absoluteURL||w,onClick:P?function(t){e&&e(t),t.defaultPrevented||T(t)}:e,ref:pi(m,j),target:l,"data-discover":v||"render"!==t?void 0:"true"});return S&&!v?h.createElement(h.Fragment,null,E,h.createElement(ci,{page:w})):E});yi.displayName="Link";var xi=h.forwardRef(function({"aria-current":e="page",caseSensitive:t=!1,className:n="",end:r=!1,style:i,to:a,viewTransition:o,children:s,...l},u){let c=Mr(a,{relative:l.relative}),d=Cr(),p=h.useContext(yr),{navigator:f,basename:m}=h.useContext(br),g=null!=p&&function(e,{relative:t}={}){let n=h.useContext(vr);Rn(null!=n,"`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?");let{basename:r}=vi("useViewTransitionState"),i=Mr(e,{relative:t});if(!n.isTransitioning)return!1;let a=Zn(n.currentLocation.pathname,r)||n.currentLocation.pathname,o=Zn(n.nextLocation.pathname,r)||n.nextLocation.pathname;return null!=Qn(i.pathname,o)||null!=Qn(i.pathname,a)}(c)&&!0===o,y=f.encodeLocation?f.encodeLocation(c).pathname:c.pathname,x=d.pathname,v=p&&p.navigation&&p.navigation.location?p.navigation.location.pathname:null;t||(x=x.toLowerCase(),v=v?v.toLowerCase():null,y=y.toLowerCase()),v&&m&&(v=Zn(v,m)||v);const b="/"!==y&&y.endsWith("/")?y.length-1:y.length;let w,k=x===y||!r&&x.startsWith(y)&&"/"===x.charAt(b),_=null!=v&&(v===y||!r&&v.startsWith(y)&&"/"===v.charAt(y.length)),S={isActive:k,isPending:_,isTransitioning:g},j=k?e:void 0;w="function"==typeof n?n(S):[n,k?"active":null,_?"pending":null,g?"transitioning":null].filter(Boolean).join(" ");let C="function"==typeof i?i(S):i;return h.createElement(yi,{...l,"aria-current":j,className:w,ref:u,style:C,to:a,viewTransition:o},"function"==typeof s?s(S):s)});function vi(e){let t=h.useContext(gr);return Rn(t,function(e){return`${e} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}(e)),t}xi.displayName="NavLink",h.forwardRef(({discover:e="render",fetcherKey:t,navigate:n,reloadDocument:r,replace:i,state:a,method:o=qr,action:s,onSubmit:l,relative:u,preventScrollReset:c,viewTransition:d,defaultShouldRevalidate:p,...f},m)=>{let{useTransitions:g}=h.useContext(br),y=function(){let{router:e}=vi("useSubmit"),{basename:t}=h.useContext(br),n=Ir("useRouteId"),r=e.fetch,i=e.navigate;return h.useCallback(async(e,a={})=>{let{action:o,method:s,encType:l,formData:u,body:c}=Jr(e,t);if(!1===a.navigate){let e=a.fetcherKey||wi();await r(e,n,a.action||o,{defaultShouldRevalidate:a.defaultShouldRevalidate,preventScrollReset:a.preventScrollReset,formData:u,body:c,formMethod:a.method||s,formEncType:a.encType||l,flushSync:a.flushSync})}else await i(a.action||o,{defaultShouldRevalidate:a.defaultShouldRevalidate,preventScrollReset:a.preventScrollReset,formData:u,body:c,formMethod:a.method||s,formEncType:a.encType||l,replace:a.replace,state:a.state,fromRouteId:n,flushSync:a.flushSync,viewTransition:a.viewTransition})},[r,i,t,n])}(),x=function(e,{relative:t}={}){let{basename:n}=h.useContext(br),r=h.useContext(kr);Rn(r,"useFormAction must be used inside a RouteContext");let[i]=r.matches.slice(-1),a={...Mr(e||".",{relative:t})},o=Cr();if(null==e){a.search=o.search;let e=new URLSearchParams(a.search),t=e.getAll("index");if(t.some(e=>""===e)){e.delete("index"),t.filter(e=>e).forEach(t=>e.append("index",t));let n=e.toString();a.search=n?`?${n}`:""}}e&&"."!==e||!i.route.index||(a.search=a.search?a.search.replace(/^\?/,"?index&"):"?index");"/"!==n&&(a.pathname="/"===a.pathname?n:ar([n,a.pathname]));return Ln(a)}(s,{relative:u}),v="get"===o.toLowerCase()?"get":"post",b="string"==typeof s&&gi.test(s);return h.createElement("form",{ref:m,method:v,action:x,onSubmit:r?l:e=>{if(l&&l(e),e.defaultPrevented)return;e.preventDefault();let r=e.nativeEvent.submitter,s=r?.getAttribute("formmethod")||o,f=()=>y(r||e.currentTarget,{fetcherKey:t,method:s,navigate:n,replace:i,state:a,relative:u,preventScrollReset:c,viewTransition:d,defaultShouldRevalidate:p});g&&!1!==n?h.startTransition(()=>f()):f()},...f,"data-discover":b||"render"!==e?void 0:"true"})}).displayName="Form";var bi=0,wi=()=>`__${String(++bi)}__`;var ki=C();const _i={sm:vn`
    min-height: 42px;
    padding: 10px 18px;
    font-size: 13px;
  `,md:vn`
    min-height: 46px;
    padding: 12px 24px;
    font-size: 14px;
  `,lg:vn`
    min-height: 52px;
    padding: 14px 28px;
    font-size: 15px;
  `},Si={primary:vn`
    background: ${({theme:e})=>e.colors.primary};
    color: ${({theme:e})=>e.colors.textWhite};
    border-color: ${({theme:e})=>e.colors.primary};
    box-shadow: ${({theme:e})=>e.shadows.button};

    &:hover {
      background: #184d3b;
      border-color: #184d3b;
      box-shadow: 0 20px 42px rgba(31, 95, 74, 0.3);
    }
  `,secondary:vn`
    background: rgba(255, 255, 255, 0.88);
    color: ${({theme:e})=>e.colors.textPrimary};
    border-color: rgba(122, 160, 143, 0.42);
    box-shadow: ${({theme:e})=>e.shadows.soft};

    &:hover {
      background: ${({theme:e})=>e.colors.ivory};
      border-color: rgba(122, 160, 143, 0.58);
    }
  `,outline:vn`
    background: rgba(255, 255, 255, 0.18);
    color: ${({theme:e})=>e.colors.primary};
    border-color: rgba(31, 95, 74, 0.28);

    &:hover {
      background: rgba(255, 255, 255, 0.7);
      border-color: rgba(31, 95, 74, 0.46);
    }
  `},ji=vn`
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

  ${({$size:e})=>_i[e]};
  ${({$variant:e})=>Si[e]};

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
`,Ci=kn.button`
  ${ji}
`,Ti=kn.a`
  ${ji}
`,Pi=kn.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  order: ${({$position:e})=>"right"===e?2:0};
`,Ei=({children:e,icon:t,iconPosition:n="left"})=>d.jsxs(d.Fragment,{children:[t?d.jsx(Pi,{$position:n,children:t}):null,d.jsx("span",{children:e})]}),Mi=({variant:e="primary",size:t="md",fullWidth:n=!1,icon:r,iconPosition:i="left",children:a,...o})=>"to"in o&&o.to?d.jsx(Ti,{as:yi,to:o.to,$variant:e,$size:t,$fullWidth:n,...o,children:d.jsx(Ei,{icon:r,iconPosition:i,children:a})}):"href"in o&&o.href?d.jsx(Ti,{$variant:e,$size:t,$fullWidth:n,...o,children:d.jsx(Ei,{icon:r,iconPosition:i,children:a})}):d.jsx(Ci,{type:o.type??"button",$variant:e,$size:t,$fullWidth:n,...o,children:d.jsx(Ei,{icon:r,iconPosition:i,children:a})}),zi=[{label:"HOME",to:"/"},{label:"NUTRITION",to:"/nutrition"},{label:"YOGA",to:"/yoga"},{label:"AYURVEDA",to:"/ayurveda"},{label:"CONTACT",to:"/contact"},{label:"ABOUT",to:"/about"}],Ai="Book Consultation",Ri="/contact",$i="/assets/home-about-dhanashree-BBuNg-hz.png",Di={brand:{logo:"https://res.cloudinary.com/drjzugsyo/image/upload/v1771263278/logo_aiaixs.png"},home:{homeHeroWatercolorIllustration:{mobile:"/assets/home-hero-watercolor-mobile-Ck-YmqH3.png",desktop:"/assets/home-hero-watercolor-desktop-BKSE5Tkb.png",alt:"Watercolor illustration of a woman meditating in front of mountains and a glowing moon"},homeAboutDhanashree:{src:$i,alt:"Dhanashree seated in meditation outdoors"},homeYogaServiceWatercolor:{src:"/assets/home-yoga-service-watercolor-2-DLDsVyc0.png",alt:"Watercolor illustration representing yoga practice in nature"},homeNutritionBowlWatercolor:{src:"/assets/home-nutrition-bowl-watercolor-DP3EBmKk.png",alt:"Watercolor illustration of a nourishing bowl with fresh vegetables and grains"},homeAyurvedaMortarWatercolor:{src:"/assets/home-ayurveda-mortar-watercolor-BZ2-y_Zq.png",alt:"Watercolor illustration of Ayurvedic herbs, oil, and mortar and pestle"},heroSlides:["https://res.cloudinary.com/drjzugsyo/image/upload/f_auto,q_auto,w_1200/shree5_doyho6.webp","https://res.cloudinary.com/drjzugsyo/image/upload/f_auto,q_auto,w_1200/shree4_rnpdvt.webp"]},about:{aboutHeroDhanashree:{src:$i,alt:"Dhanashree seated in meditation outdoors"},journeyBeginning:{src:"/assets/about-journey-beginning-watercolor-BAyl4Bgh.png"},journeyWakeup:{src:"/assets/about-journey-wakeup-watercolor-BS5qJEc0.png"},journeyHealing:{src:"/assets/about-journey-healing-watercolor-BF2Wpw4j.png"},journeyAwareness:{src:"/assets/about-journey-awareness-watercolor-BlJRYU0Z.png"},journeyPurpose:{src:"/assets/about-journey-purpose-watercolor-Dljh8lsX.png"},journeyTimeline:{step1:"https://res.cloudinary.com/drjzugsyo/image/upload/f_auto,q_auto,w_600/self1_uguqlb.jpg",step2:"https://res.cloudinary.com/drjzugsyo/image/upload/f_auto,q_auto,w_600/self2_e2xknl.jpg",step3:"https://res.cloudinary.com/drjzugsyo/image/upload/f_auto,q_auto,w_600/self3_ml3idz.jpg"},certifications:["https://res.cloudinary.com/drjzugsyo/image/upload/v1771263583/certificate_carousel_1_bsfcoq.jpg","https://res.cloudinary.com/drjzugsyo/image/upload/v1771263574/certificate2_wl3vy9.jpg","https://res.cloudinary.com/drjzugsyo/image/upload/v1771263573/certificate3_lkbzmr.jpg"]},yoga:{heroWatercolor:{mobile:"/assets/yoga-hero-watercolor-mobile-CKSf9WeY.png",desktop:"/assets/yoga-hero-watercolor-desktop-BH5Wie-M.png",alt:"Watercolor illustration of a woman practicing yoga in a calm natural setting"},gallery:["https://res.cloudinary.com/drjzugsyo/image/upload/v1771263837/yogaimage1_t1hgpj.jpg","https://res.cloudinary.com/drjzugsyo/image/upload/v1771264338/shree2_i3c9mu.jpg","https://res.cloudinary.com/drjzugsyo/image/upload/v1771263548/shree3_gveuvh.jpg"],transformations:["https://res.cloudinary.com/drjzugsyo/image/upload/v1771263544/transform4_uqtnrd.jpg","https://res.cloudinary.com/drjzugsyo/image/upload/v1771263547/transform2_zlouig.jpg","https://res.cloudinary.com/drjzugsyo/image/upload/v1771263573/transform3_bzxtx8.jpg"],videos:["https://res.cloudinary.com/drjzugsyo/video/upload/v1770745584/IMG_7633_1_qooflf.mp4","https://res.cloudinary.com/drjzugsyo/video/upload/v1770745298/IMG_7634_kapmzh.mp4"]},nutrition:{hero:"https://res.cloudinary.com/drjzugsyo/image/upload/v1771263545/shree1_bxjnwa.jpg"}},Oi=kn.header`
  width: 100%;
  padding: 22px 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;

  @media (max-width: 767px) {
    display: none;
  }
`,Li=kn.img`
  width: 82px;
  height: 82px;
  border-radius: 50%;
  object-fit: contain;
  box-shadow: 0 14px 30px rgba(0, 0, 0, 0.22),
    0 0 0 4px rgba(244, 255, 252, 0.9);
`,Ni=kn.nav`
  padding: 10px 40px;
  border-radius: 999px;
  background: rgba(248, 255, 252, 0.9);
  backdrop-filter: blur(18px);
  box-shadow: 0 20px 45px rgba(0, 0, 0, 0.08);
  display: flex;
  gap: 36px;
`,Ii=kn.div`
  display: flex;
  justify-content: center;
`;kn(xi)`
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
`;const Fi=kn.header`
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
`,Vi=kn.img`
  width: 46px;
  height: 46px;
  border-radius: 50%;
  object-fit: contain;
  box-shadow: 0 14px 30px rgba(0, 0, 0, 0.22),
    0 0 0 4px rgba(244, 255, 252, 0.9);
`,Bi=kn.button`
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
`,Wi=kn.span`
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
`,Ui=kn.div`
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
`,Yi=kn.aside`
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
`,Hi=kn.div`
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
`,qi=kn.button`
  border: none;
  background: transparent;
  font-size: 22px;
  cursor: pointer;
  color: #264139;
`,Xi=kn.nav`
  display: flex;
  flex-direction: column;
  gap: 18px;
`,Gi=kn.span`
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
`,Ki=kn.span`
  border: none;
  background: transparent;
  text-align: left;
  font-size: 15px;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: #264139;
  padding: 8px 0;
  cursor: pointer;
`,Qi=kn.div`
  margin-top: 28px;
`,Zi=kn.div`
  a {
    text-decoration: none;
    color: inherit;
  }

  a.active ${Gi} {
    color: #1f6b57;
    opacity: 1;
  }

  a.active ${Gi}::after {
    width: 70%;
  }

  a.active ${Ki} {
    color: #1f6b57;
    font-weight: 600;
  }
  @media (max-width: 768px) {
    position: sticky;
    top: 0;
    z-index: 120;
  }
`,Ji=()=>{const[e,t]=h.useState(!1);return h.useEffect(()=>{if(!e)return;const n=e=>{"Escape"===e.key&&t(!1)};return window.addEventListener("keydown",n),()=>window.removeEventListener("keydown",n)},[e]),d.jsx(d.Fragment,{children:d.jsxs(Zi,{children:[d.jsxs(Oi,{children:[d.jsx(Li,{src:Di.brand.logo,alt:"Logo"}),d.jsx(Ni,{children:zi.map(e=>d.jsx(xi,{to:e.to,end:"/"===e.to,children:d.jsx(Gi,{children:e.label})},e.to))}),d.jsx(Ii,{children:d.jsx(Mi,{to:Ri,size:"sm",variant:"secondary",children:Ai})})]}),d.jsxs(Fi,{children:[d.jsx(Vi,{src:Di.brand.logo,alt:"Logo"}),d.jsx(Bi,{onClick:()=>t(!0),"aria-label":"Open menu","aria-expanded":e,"aria-controls":"mobile-site-drawer",children:d.jsx(Wi,{})})]}),d.jsx(Ui,{$open:e,onClick:()=>t(!1),children:d.jsxs(Yi,{id:"mobile-site-drawer",$open:e,"aria-label":"Mobile navigation",onClick:e=>e.stopPropagation(),children:[d.jsxs(Hi,{children:[d.jsx(Vi,{src:Di.brand.logo,alt:"Logo"}),d.jsx("p",{children:"Balance with Shree"}),d.jsx(qi,{onClick:()=>t(!1),"aria-label":"Close menu",children:"✕"})]}),d.jsx(Xi,{children:zi.map(e=>d.jsx(xi,{to:e.to,end:"/"===e.to,onClick:()=>t(!1),children:d.jsx(Ki,{children:e.label})},e.to))}),d.jsx(Qi,{children:d.jsx(Mi,{to:Ri,fullWidth:!0,onClick:()=>t(!1),children:Ai})})]})})]})})},ea=e=>{const t=(e=>e.replace(/^([A-Z])|[\s-_]+(\w)/g,(e,t,n)=>n?n.toUpperCase():t.toLowerCase()))(e);return t.charAt(0).toUpperCase()+t.slice(1)},ta=(...e)=>e.filter((e,t,n)=>Boolean(e)&&""!==e.trim()&&n.indexOf(e)===t).join(" ").trim(),na=e=>{for(const t in e)if(t.startsWith("aria-")||"role"===t||"title"===t)return!0};var ra={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};const ia=h.forwardRef(({color:e="currentColor",size:t=24,strokeWidth:n=2,absoluteStrokeWidth:r,className:i="",children:a,iconNode:o,...s},l)=>h.createElement("svg",{ref:l,...ra,width:t,height:t,stroke:e,strokeWidth:r?24*Number(n)/Number(t):n,className:ta("lucide",i),...!a&&!na(s)&&{"aria-hidden":"true"},...s},[...o.map(([e,t])=>h.createElement(e,t)),...Array.isArray(a)?a:[a]])),aa=(e,t)=>{const n=h.forwardRef(({className:n,...r},i)=>{return h.createElement(ia,{ref:i,iconNode:t,className:ta(`lucide-${a=ea(e),a.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase()}`,`lucide-${e}`,n),...r});var a});return n.displayName=ea(e),n},oa=aa("apple",[["path",{d:"M12 6.528V3a1 1 0 0 1 1-1h0",key:"11qiee"}],["path",{d:"M18.237 21A15 15 0 0 0 22 11a6 6 0 0 0-10-4.472A6 6 0 0 0 2 11a15.1 15.1 0 0 0 3.763 10 3 3 0 0 0 3.648.648 5.5 5.5 0 0 1 5.178 0A3 3 0 0 0 18.237 21",key:"110c12"}]]),sa=aa("arrow-right",[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"m12 5 7 7-7 7",key:"xquz4c"}]]),la=aa("calendar-days",[["path",{d:"M8 2v4",key:"1cmpym"}],["path",{d:"M16 2v4",key:"4m81vk"}],["rect",{width:"18",height:"18",x:"3",y:"4",rx:"2",key:"1hopcy"}],["path",{d:"M3 10h18",key:"8toen8"}],["path",{d:"M8 14h.01",key:"6423bh"}],["path",{d:"M12 14h.01",key:"1etili"}],["path",{d:"M16 14h.01",key:"1gbofw"}],["path",{d:"M8 18h.01",key:"lrp35t"}],["path",{d:"M12 18h.01",key:"mhygvu"}],["path",{d:"M16 18h.01",key:"kzsmim"}]]),ua=aa("check",[["path",{d:"M20 6 9 17l-5-5",key:"1gmf2c"}]]),ca=aa("chevron-left",[["path",{d:"m15 18-6-6 6-6",key:"1wnfg3"}]]),da=aa("chevron-right",[["path",{d:"m9 18 6-6-6-6",key:"mthhwq"}]]),ha=aa("flower-2",[["path",{d:"M12 5a3 3 0 1 1 3 3m-3-3a3 3 0 1 0-3 3m3-3v1M9 8a3 3 0 1 0 3 3M9 8h1m5 0a3 3 0 1 1-3 3m3-3h-1m-2 3v-1",key:"3pnvol"}],["circle",{cx:"12",cy:"8",r:"2",key:"1822b1"}],["path",{d:"M12 10v12",key:"6ubwww"}],["path",{d:"M12 22c4.2 0 7-1.667 7-5-4.2 0-7 1.667-7 5Z",key:"9hd38g"}],["path",{d:"M12 22c-4.2 0-7-1.667-7-5 4.2 0 7 1.667 7 5Z",key:"ufn41s"}]]),pa=aa("heart-handshake",[["path",{d:"M19.414 14.414C21 12.828 22 11.5 22 9.5a5.5 5.5 0 0 0-9.591-3.676.6.6 0 0 1-.818.001A5.5 5.5 0 0 0 2 9.5c0 2.3 1.5 4 3 5.5l5.535 5.362a2 2 0 0 0 2.879.052 2.12 2.12 0 0 0-.004-3 2.124 2.124 0 1 0 3-3 2.124 2.124 0 0 0 3.004 0 2 2 0 0 0 0-2.828l-1.881-1.882a2.41 2.41 0 0 0-3.409 0l-1.71 1.71a2 2 0 0 1-2.828 0 2 2 0 0 1 0-2.828l2.823-2.762",key:"17lmqv"}]]),fa=aa("heart-pulse",[["path",{d:"M2 9.5a5.5 5.5 0 0 1 9.591-3.676.56.56 0 0 0 .818 0A5.49 5.49 0 0 1 22 9.5c0 2.29-1.5 4-3 5.5l-5.492 5.313a2 2 0 0 1-3 .019L5 15c-1.5-1.5-3-3.2-3-5.5",key:"mvr1a0"}],["path",{d:"M3.22 13H9.5l.5-1 2 4.5 2-7 1.5 3.5h5.27",key:"auskq0"}]]),ma=aa("heart",[["path",{d:"M2 9.5a5.5 5.5 0 0 1 9.591-3.676.56.56 0 0 0 .818 0A5.49 5.49 0 0 1 22 9.5c0 2.29-1.5 4-3 5.5l-5.492 5.313a2 2 0 0 1-3 .019L5 15c-1.5-1.5-3-3.2-3-5.5",key:"mvr1a0"}]]),ga=aa("instagram",[["rect",{width:"20",height:"20",x:"2",y:"2",rx:"5",ry:"5",key:"2e1cvw"}],["path",{d:"M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z",key:"9exkf1"}],["line",{x1:"17.5",x2:"17.51",y1:"6.5",y2:"6.5",key:"r4j83e"}]]),ya=aa("leaf",[["path",{d:"M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z",key:"nnexq3"}],["path",{d:"M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12",key:"mt58a7"}]]),xa=aa("mail",[["path",{d:"m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7",key:"132q7q"}],["rect",{x:"2",y:"4",width:"20",height:"16",rx:"2",key:"izxlao"}]]),va=aa("message-circle-more",[["path",{d:"M2.992 16.342a2 2 0 0 1 .094 1.167l-1.065 3.29a1 1 0 0 0 1.236 1.168l3.413-.998a2 2 0 0 1 1.099.092 10 10 0 1 0-4.777-4.719",key:"1sd12s"}],["path",{d:"M8 12h.01",key:"czm47f"}],["path",{d:"M12 12h.01",key:"1mp3jc"}],["path",{d:"M16 12h.01",key:"1l6xoz"}]]),ba=aa("message-circle",[["path",{d:"M2.992 16.342a2 2 0 0 1 .094 1.167l-1.065 3.29a1 1 0 0 0 1.236 1.168l3.413-.998a2 2 0 0 1 1.099.092 10 10 0 1 0-4.777-4.719",key:"1sd12s"}]]),wa=aa("moon-star",[["path",{d:"M18 5h4",key:"1lhgn2"}],["path",{d:"M20 3v4",key:"1olli1"}],["path",{d:"M20.985 12.486a9 9 0 1 1-9.473-9.472c.405-.022.617.46.402.803a6 6 0 0 0 8.268 8.268c.344-.215.825-.004.803.401",key:"kfwtm"}]]),ka=aa("scale",[["path",{d:"M12 3v18",key:"108xh3"}],["path",{d:"m19 8 3 8a5 5 0 0 1-6 0zV7",key:"zcdpyk"}],["path",{d:"M3 7h1a17 17 0 0 0 8-2 17 17 0 0 0 8 2h1",key:"1yorad"}],["path",{d:"m5 8 3 8a5 5 0 0 1-6 0zV7",key:"eua70x"}],["path",{d:"M7 21h10",key:"1b0cd5"}]]),_a=aa("sparkles",[["path",{d:"M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z",key:"1s2grr"}],["path",{d:"M20 2v4",key:"1rf3ol"}],["path",{d:"M22 4h-4",key:"gwowj6"}],["circle",{cx:"4",cy:"20",r:"2",key:"6kqj1y"}]]),Sa=aa("sun-medium",[["circle",{cx:"12",cy:"12",r:"4",key:"4exip2"}],["path",{d:"M12 3v1",key:"1asbbs"}],["path",{d:"M12 20v1",key:"1wcdkc"}],["path",{d:"M3 12h1",key:"lp3yf2"}],["path",{d:"M20 12h1",key:"1vloll"}],["path",{d:"m18.364 5.636-.707.707",key:"1hakh0"}],["path",{d:"m6.343 17.657-.707.707",key:"18m9nf"}],["path",{d:"m5.636 5.636.707.707",key:"1xv1c5"}],["path",{d:"m17.657 17.657.707.707",key:"vl76zb"}]]),ja=aa("sun",[["circle",{cx:"12",cy:"12",r:"4",key:"4exip2"}],["path",{d:"M12 2v2",key:"tus03m"}],["path",{d:"M12 20v2",key:"1lh1kg"}],["path",{d:"m4.93 4.93 1.41 1.41",key:"149t6j"}],["path",{d:"m17.66 17.66 1.41 1.41",key:"ptbguv"}],["path",{d:"M2 12h2",key:"1t8f8n"}],["path",{d:"M20 12h2",key:"1q8mjw"}],["path",{d:"m6.34 17.66-1.41 1.41",key:"1m8zz5"}],["path",{d:"m19.07 4.93-1.41 1.41",key:"1shlcs"}]]),Ca=aa("waves",[["path",{d:"M2 6c.6.5 1.2 1 2.5 1C7 7 7 5 9.5 5c2.6 0 2.4 2 5 2 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1",key:"knzxuh"}],["path",{d:"M2 12c.6.5 1.2 1 2.5 1 2.5 0 2.5-2 5-2 2.6 0 2.4 2 5 2 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1",key:"2jd2cc"}],["path",{d:"M2 18c.6.5 1.2 1 2.5 1 2.5 0 2.5-2 5-2 2.6 0 2.4 2 5 2 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1",key:"rd2r6e"}]]),Ta=Tn`
  from {
    opacity: 0;
    transform: perspective(1200px) rotateX(-12deg) scale(0.94) translateY(40px);
  }
  to {
    opacity: 1;
    transform: perspective(1200px) rotateX(0deg) scale(1) translateY(0);
  }
`,Pa=Tn`
  from {
    opacity: 1;
    transform: perspective(1200px) rotateX(0deg) scale(1) translateY(0);
  }
  to {
    opacity: 0;
    transform: perspective(1200px) rotateX(-10deg) scale(0.95) translateY(40px);
  }
`,Ea=kn.div`
  position: fixed;
  inset: 0;
  background: rgba(14, 22, 18, 0.55);
  backdrop-filter: blur(8px);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
  padding: 24px;
`,Ma=kn.div`
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

  animation: ${({$closing:e})=>e?vn`
          ${Pa} 0.45s cubic-bezier(0.22, 0.61, 0.36, 1)
        `:vn`
          ${Ta} 0.55s cubic-bezier(0.22, 0.61, 0.36, 1)
        `};

  @media (max-width: 768px) {
    align-self: flex-end;
    transform-origin: center bottom;
  }
`,za=kn.button`
  position: absolute;
  top: 18px;
  right: 18px;
  border: none;
  background: #eef4f1;
  width: 36px;
  height: 36px;
  border-radius: 50%;
  cursor: pointer;
`,Aa=({isOpen:e,onClose:t,children:n})=>{const[r,i]=h.useState(!1),a=h.useCallback(()=>{r||(document.body.style.overflow="auto",i(!0),window.setTimeout(()=>{i(!1),t()},450))},[r,t]);return h.useEffect(()=>{if(!e)return;document.body.style.overflow="hidden";const t=e=>{"Escape"===e.key&&a()};return window.addEventListener("keydown",t),()=>{window.removeEventListener("keydown",t),document.body.style.overflow="auto"}},[a,e]),e?ki.createPortal(d.jsx(Ea,{onClick:a,children:d.jsxs(Ma,{$closing:r,role:"dialog","aria-modal":"true",onClick:e=>e.stopPropagation(),children:[d.jsx(za,{onClick:a,"aria-label":"Close dialog",children:"✕"}),n]})}),document.body):null},Ra=kn.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`,$a=kn.h2`
  font-size: 26px;
  font-weight: 600;
  color: #1f3d2b;
`,Da=kn.div`
  padding-left: 4px;
`,Oa=kn.h4`
  font-size: 17px;
  font-weight: 600;
  color: #24312d;
  margin-bottom: 6px;
`,La=kn.p`
  font-size: 14.5px;
  color: #2b2a29;
  opacity: 0.8;
`,Na=kn.button`
  padding: 16px 36px;
  border-radius: 999px;
  border: none;

  background: linear-gradient(135deg, #7fb6a1 0%, #5f9f86 100%);

  color: #ffffff;
`,Ia=({title:e,packages:t,cta:n})=>{const r=Er();return d.jsxs(Ra,{children:[d.jsx($a,{children:e}),t.map(e=>d.jsxs(Da,{children:[d.jsx(Oa,{children:e.title}),d.jsx(La,{children:e.note})]},e.title)),d.jsx(Na,{onClick:()=>{r("/yoga")},children:n})]})},Fa=kn.div`
  display: flex;
  flex-direction: column;
  gap: 28px;
`,Va=kn.h2`
  font-size: 26px;
  font-weight: 600;
  color: #1f3d2b;
`,Ba=kn.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`,Wa=kn.button`
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
`,Ua=({onSelect:e})=>{const t=Er(),n=n=>{e?.(),t(n)};return d.jsxs(Fa,{children:[d.jsx(Va,{children:"Book a Session"}),d.jsxs(Ba,{children:[d.jsxs(Wa,{onClick:()=>n("/yoga"),children:[d.jsx("h4",{children:"Yoga"}),d.jsx("p",{children:"Personal & therapeutic yoga sessions"})]}),d.jsxs(Wa,{onClick:()=>n("/ayurveda"),children:[d.jsx("h4",{children:"Ayurveda"}),d.jsx("p",{children:"Holistic healing & lifestyle guidance"})]}),d.jsxs(Wa,{onClick:()=>n("/nutrition"),children:[d.jsx("h4",{children:"Nutrition"}),d.jsx("p",{children:"Mindful & clinical nutrition support"})]})]})]})},Ya="Hi Shree, I’d love to connect regarding your wellness offerings.",Ha="Hi Shree, I feel drawn to your work and would love to begin my wellness journey with you.",qa="Hi! I’d like to book a Discovery Call session.",Xa="Hi Shree, I’d like to book an Ayurveda Discovery Call for ₹300. Please let me know the next steps.",Ga="balancewithshree@gmail.com",Ka="balancewithshree@gmail.com",Qa="+91 80870 48659",Za="tel:+918087048659",Ja="918087048659",eo="https://www.instagram.com/balancewithshree",to="Online • One-on-One • Worldwide",no=(e=Ya)=>`https://wa.me/${Ja}?text=${encodeURIComponent(e)}`,ro=vn`
  background: linear-gradient(180deg, rgba(255, 255, 255, 0.95), rgba(251, 249, 243, 0.98));
  border: 1px solid rgba(122, 160, 143, 0.12);
  box-shadow: 0 20px 48px rgba(15, 60, 40, 0.08);
  border-radius: 28px;

  @media (max-width: 768px) {
    border-radius: 24px;
  }
`,io=kn.div`
  width: 100%;
  overflow-x: hidden;
  padding: 0 0 24px;
`,ao=kn.div`
  width: min(calc(100% - 22px), 1200px);
  margin: 0 auto;

  @media (max-width: 768px) {
    width: min(calc(100% - 18px), 430px);
  }
`,oo=kn.div`
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
`,so=kn.section`
  position: relative;
`,lo=kn.div`
  position: relative;
  overflow: hidden;
  border-radius: 0 0 24px 24px;
  background: #edf6f1;
  min-height: 358px;
  box-shadow: 0 18px 40px rgba(15, 60, 40, 0.08);

  @media (min-width: 769px) {
    ${ro};
    min-height: 600px;
    border-radius: 30px;
  }

  @media (max-width: 420px) {
    min-height: 348px;
  }
`,uo=kn.picture`
  display: block;
  width: 100%;
  height: 100%;
  min-height: inherit;
`,co=kn.img`
  display: block;
  width: 100%;
  height: 100%;
  min-height: inherit;
  object-fit: cover;
  object-position: center 58%;

  @media (min-width: 769px) {
    object-position: center 54%;
  }
`,ho=kn.div`
  position: absolute;
  inset: 0;
  pointer-events: none;
  background:
    linear-gradient(180deg, rgba(255, 250, 242, 0.03) 0%, rgba(18, 30, 26, 0.02) 48%, rgba(19, 33, 28, 0.18) 100%),
    radial-gradient(circle at top center, rgba(255, 255, 255, 0.14), transparent 34%);
`,po=kn.div`
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
`,fo=kn.button`
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
`,mo=kn.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  opacity: 0.96;
`,go=kn.section`
  ${ro};
  overflow: hidden;
  position: relative;
  padding: 16px;

  @media (min-width: 769px) {
    padding: 24px;
  }
`,yo=kn.span`
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
`,xo=kn.h2`
  margin: 10px 0 0;
  color: ${({theme:e})=>e.colors.textPrimary};
  font-size: clamp(2rem, 5.5vw, 3.25rem);
  line-height: 1.06;

  @media (max-width: 768px) {
    font-size: clamp(1.72rem, 8vw, 2.18rem);
  }
`,vo=kn.p`
  margin: 14px auto 0;
  max-width: 34ch;
  color: ${({theme:e})=>e.colors.textMuted};
  font-size: 15px;
  line-height: 1.7;

  @media (max-width: 768px) {
    font-size: 14px;
    line-height: 1.6;
  }
`,bo=kn(go)`
  text-align: center;
`,wo=kn.div`
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
`,ko=kn.div`
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
`,_o=kn.div`
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
`,So=kn.span`
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
`,jo=kn.span`
  color: ${({theme:e})=>e.colors.textPrimary};
  font-size: 13px;
  font-weight: 600;
  line-height: 1.3;
  text-align: left;
`,Co=kn.section`
  display: flex;
  flex-direction: column;
  gap: 12px;
`,To=kn.div`
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
`,Eo=kn(go)`
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
`,zo=kn.img`
  width: 100%;
  max-width: 248px;
  max-height: 188px;
  object-fit: contain;
  object-position: center center;
  display: block;
`,Ao=kn.h3`
  margin: 0;
  color: ${({theme:e})=>e.colors.textPrimary};
  font-size: 1.66rem;
  line-height: 1.05;

  @media (min-width: 769px) {
    font-size: 2rem;
  }
`,Ro=kn.p`
  margin: 0;
  color: ${({theme:e})=>e.colors.textMuted};
  font-size: 14px;
  line-height: 1.58;

  @media (min-width: 769px) {
    font-size: 15px;
    line-height: 1.62;
  }
`,$o=kn.div`
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
`,Oo=kn.span`
  width: 28px;
  height: 28px;
  border-radius: 10px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  background: rgba(244, 250, 246, 0.98);
  color: ${({theme:e})=>e.colors.primary};
`,Lo=kn.span`
  color: ${({theme:e})=>e.colors.textPrimary};
  font-size: 13px;
  font-weight: 600;
  line-height: 1.35;

  @media (min-width: 769px) {
    font-size: 14px;
  }
`,No=kn(yi)`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  margin-top: 2px;
  color: ${({theme:e})=>e.colors.primary};
  text-decoration: none;
  font-size: 15px;
  font-weight: 600;
`,Io=kn(go)`
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
`,Fo=kn.div`
  border-radius: 20px;
  overflow: hidden;
  min-height: 228px;
  background: #e8f1eb;
  position: relative;
  z-index: 1;

  @media (min-width: 769px) {
    min-height: 266px;
  }
`,Vo=kn.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center 36%;
  display: block;
`,Bo=kn.div`
  position: relative;
  z-index: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
`,Wo=kn.h2`
  margin: 0;
  color: ${({theme:e})=>e.colors.textPrimary};
  font-size: clamp(2rem, 5vw, 2.8rem);
  line-height: 1.06;

  @media (max-width: 768px) {
    font-size: clamp(1.82rem, 8vw, 2.26rem);
  }
`,Uo=kn.p`
  margin: 0 0 12px;
  color: ${({theme:e})=>e.colors.textMuted};
  font-size: 14px;
  line-height: 1.58;

  &:last-of-type {
    margin-bottom: 0;
  }
`,Yo=kn(yi)`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  margin-top: 12px;
  color: ${({theme:e})=>e.colors.primary};
  text-decoration: none;
  font-size: 15px;
  font-weight: 600;
`,Ho=kn.section`
  ${ro};
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 0;
  overflow: hidden;
  background: linear-gradient(180deg, rgba(250, 251, 246, 0.96), rgba(245, 248, 239, 0.96));

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`,qo=kn.div`
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
`,Go=kn.span`
  color: ${({theme:e})=>e.colors.textPrimary};
  font-size: 14px;
  font-weight: 600;
  line-height: 1.35;

  @media (max-width: 768px) {
    font-size: 13px;
  }
`,Ko=kn.section`
  ${ro};
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
`,Qo=kn.h2`
  margin: 0;
  color: ${({theme:e})=>e.colors.textPrimary};
  font-size: clamp(1.9rem, 5vw, 2.6rem);
  line-height: 1.08;

  @media (max-width: 768px) {
    font-size: clamp(1.72rem, 8vw, 2.15rem);
  }
`,Zo=kn.p`
  margin: 12px auto 0;
  max-width: 28ch;
  color: ${({theme:e})=>e.colors.textSecondary};
  font-size: 14px;
  line-height: 1.6;

  @media (min-width: 769px) {
    font-size: 15px;
    line-height: 1.65;
  }
`,Jo=kn.div`
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
`,es=[{label:"Group Yoga",icon:ha},{label:"Private Yoga",icon:pa},{label:"Prenatal Yoga",icon:_a}],ts=[{label:"Therapeutic Yoga",icon:fa},{label:"Group Yoga",icon:ha},{label:"Prenatal & Postnatal Yoga",icon:_a}],ns=[{label:"Gut Health & Digestion",icon:oa},{label:"Hormonal & Metabolic Balance",icon:fa},{label:"Sustainable Food Habits",icon:ya}],rs=[{label:"Dosha Awareness & Body Constitution",icon:ya},{label:"Daily Routine (Dinacharya)",icon:Sa},{label:"Digestive & Metabolic Balance",icon:Ca},{label:"Stress & Hormonal Regulation",icon:wa}],is=[{label:"Holistic Approach",icon:ya},{label:"Personalized Guidance",icon:fa},{label:"Sustainable Wellness",icon:_a}],as=()=>{const[e,t]=h.useState(!1),[n,r]=h.useState(!1),[i,a]=h.useState(!1),o=Di.home.homeHeroWatercolorIllustration,s=o?.alt,l=!i&&o?o.mobile:Di.home.heroSlides[0],u=!i&&o?o.desktop:Di.home.heroSlides[0];return d.jsxs(io,{children:[d.jsx(ao,{children:d.jsxs(oo,{children:[d.jsx(so,{children:d.jsxs(lo,{children:[d.jsxs(uo,{children:[!i&&o?d.jsx("source",{media:"(min-width: 768px)",srcSet:u}):null,d.jsx(co,{src:l,alt:s,loading:"eager",decoding:"async",fetchPriority:"high",onError:()=>a(!0)})]}),d.jsx(ho,{}),d.jsxs(po,{children:[d.jsxs(fo,{onClick:()=>t(!0),children:[d.jsx(mo,{children:d.jsx(_a,{size:18,strokeWidth:1.9})}),d.jsx("span",{children:"Explore Packages"})]}),d.jsxs(fo,{onClick:()=>r(!0),children:[d.jsx(mo,{children:d.jsx(la,{size:18,strokeWidth:1.9})}),d.jsx("span",{children:"Book a Session"})]})]})]})}),d.jsxs(bo,{children:[d.jsx(xo,{as:"h2",children:"Yoga Packages"}),d.jsx(wo,{children:d.jsx("span",{children:"✦"})}),d.jsx(vo,{children:"Yoga packages available as group sessions, personalised private training, and specialised prenatal support — with guidance tailored to individual needs and consultation."}),d.jsx(ko,{children:es.map(({label:e,icon:t})=>d.jsxs(_o,{children:[d.jsx(So,{children:d.jsx(t,{size:17,strokeWidth:1.9})}),d.jsx(jo,{children:e})]},e))})]}),d.jsxs(Co,{children:[d.jsxs(To,{children:[d.jsx(yo,{children:"What I Offer"}),d.jsx(xo,{as:"h2",children:"Yoga, Nutrition & Ayurveda"})]}),d.jsxs(Po,{children:[d.jsxs(Eo,{children:[d.jsx(Mo,{children:d.jsx(zo,{src:Di.home.homeYogaServiceWatercolor.src,alt:Di.home.homeYogaServiceWatercolor.alt,loading:"lazy",decoding:"async"})}),d.jsx(Ao,{children:"Yoga that supports your body & life"}),d.jsx(Ro,{children:"Yoga at Balance with Shree is therapeutic, mindful, and deeply personalised. The focus is not on flexibility or intensity, but on creating strength, stability, awareness, and calm — in a way that supports your daily life."}),d.jsx($o,{children:ts.map(({label:e,icon:t})=>d.jsxs(Do,{children:[d.jsx(Oo,{children:d.jsx(t,{size:15,strokeWidth:1.9})}),d.jsx(Lo,{children:e})]},e))}),d.jsxs(No,{to:"/yoga",children:["Explore Yoga ",d.jsx(sa,{size:16})]})]}),d.jsxs(Eo,{children:[d.jsx(Mo,{children:d.jsx(zo,{src:Di.home.homeNutritionBowlWatercolor.src,alt:Di.home.homeNutritionBowlWatercolor.alt,loading:"lazy",decoding:"async"})}),d.jsx(Ao,{children:"Nourish with Awareness"}),d.jsx(Ro,{children:"Personalised nutrition that supports digestion, hormones, and energy — rooted in mindful eating, lifestyle balance, and Indian home food."}),d.jsx($o,{children:ns.map(({label:e,icon:t})=>d.jsxs(Do,{children:[d.jsx(Oo,{children:d.jsx(t,{size:15,strokeWidth:1.9})}),d.jsx(Lo,{children:e})]},e))}),d.jsxs(No,{to:"/nutrition",children:["Explore Nutrition ",d.jsx(sa,{size:16})]})]}),d.jsxs(Eo,{children:[d.jsx(Mo,{children:d.jsx(zo,{src:Di.home.homeAyurvedaMortarWatercolor.src,alt:Di.home.homeAyurvedaMortarWatercolor.alt,loading:"lazy",decoding:"async"})}),d.jsx(Ao,{children:"Ayurveda & Lifestyle Balance"}),d.jsx(Ro,{children:"Ancient Ayurvedic wisdom adapted for modern life — helping you understand your body’s constitution, improve digestion, regulate stress, and build supportive daily routines in a gentle, sustainable way."}),d.jsx($o,{children:rs.map(({label:e,icon:t})=>d.jsxs(Do,{children:[d.jsx(Oo,{children:d.jsx(t,{size:15,strokeWidth:1.9})}),d.jsx(Lo,{children:e})]},e))}),d.jsxs(No,{to:"/ayurveda",children:["Explore Ayurveda ",d.jsx(sa,{size:16})]})]})]})]}),d.jsxs(Io,{children:[d.jsx(Fo,{children:d.jsx(Vo,{src:Di.home.homeAboutDhanashree.src,alt:Di.home.homeAboutDhanashree.alt,loading:"lazy",decoding:"async"})}),d.jsxs(Bo,{children:[d.jsx(yo,{children:"Clinical Nutritionist & Yoga Therapist"}),d.jsx(Wo,{children:"Hi, I am Dhanashree"}),d.jsx(wo,{children:d.jsx("span",{children:"✦"})}),d.jsx(Uo,{children:"a Clinical Nutritionist & Yoga Therapist, and the founder of Balance with Shree. I help people build a healthy relationship with food, movement, and their bodies — not through extreme diets or quick fixes, but through simple, sustainable, and mindful lifestyle changes."}),d.jsx(Uo,{children:"Through yoga, nutrition, and mindful living, I help you find balance that feels calm, sustainable, and deeply personal."}),d.jsxs(Yo,{to:"/about",children:["Read more ",d.jsx(sa,{size:16})]})]})]}),d.jsx(Ho,{children:is.map(({label:e,icon:t})=>d.jsxs(qo,{children:[d.jsx(Xo,{children:d.jsx(t,{size:18,strokeWidth:1.9})}),d.jsx(Go,{children:e})]},e))}),d.jsxs(Ko,{children:[d.jsx(Qo,{children:"Ready to begin your wellness journey?"}),d.jsx(Zo,{children:"Start with a simple conversation and explore the support that feels right for you."}),d.jsxs(Jo,{children:[d.jsx(Mi,{variant:"secondary",size:"lg",onClick:()=>r(!0),children:"Book a Session"}),d.jsx(Mi,{href:no(Ha),target:"_blank",rel:"noopener noreferrer",variant:"outline",size:"lg",icon:d.jsx(va,{size:18,strokeWidth:1.9}),children:"Chat on WhatsApp"})]})]})]})}),d.jsx(Aa,{isOpen:e,onClose:()=>t(!1),children:d.jsx(Ia,{title:"Wellness Packages",packages:[{title:"Group Yoga (Online / Offline)",note:"✔ Fees for group sessions are fixed."},{title:"Private Yoga (Personal Training)",note:"✔ Private sessions are customised based on individual needs."},{title:"Prenatal Yoga (Private)",note:"✔ Special cases are discussed after consultation."}],cta:"Start Your Journey"})}),d.jsx(Aa,{isOpen:n,onClose:()=>r(!1),children:d.jsx(Ua,{onSelect:()=>r(!1)})})]})},os=()=>d.jsx(as,{}),ss=[{id:1,side:"left",label:"The Beginning — Ignoring My Health",image:Di.about.journeyTimeline.step1,illustration:Di.about.journeyBeginning.src,alt:"Where it all began (2019–2020)",paragraphs:["Back in 2019–20, I was severely underweight, weighing just 39 kg. I was into fitness or dance, and I wasn't mindful about what or how I was eating. My immunity was low, my digestion was constantly disturbed, and I ignored my body's signals for a long time."]},{id:2,side:"right",label:"The Wake-Up Call — COVID & Hyperacidity",image:Di.about.journeyTimeline.step2,illustration:Di.about.journeyWakeup.src,alt:"The turning point – COVID & health breakdown",paragraphs:["During the COVID phase, my health worsened. I suffered from frequent stomach issues, acid reflux, and was eventually diagnosed with hyperacidity. At one point, even breathing felt difficult. Doctors clearly told me that my eating habits, sleep cycle, and lifestyle were the root cause."]},{id:3,side:"left",label:"Choosing Awareness Over Neglect",image:Di.about.journeyTimeline.step3,illustration:Di.about.journeyAwareness.src,alt:"Awareness → Action",paragraphs:["Interestingly, I was already studying Nutrition & Dietetics, but this experience made everything real. I realized that knowing nutrition is one thing, but living it mindfully is another."]},{id:4,side:"right",label:"Healing Through Food, Yoga & Belief",image:Di.about.journeyTimeline.step1,illustration:Di.about.journeyHealing.src,alt:"Healing through belief, food & movement",paragraphs:["I began making small, consistent changes — eating with awareness, restoring my sleep cycle, introducing yoga and gentle movement, and practicing kinder self-talk and body awareness. Slowly, I shifted from fighting my body to trusting it. Over time, my weight increased from 39 kg to 45 kg, my digestion improved, and my energy returned — something years of random eating and irregular living had never given me."]},{id:5,side:"left",label:"Turning My Journey into My Purpose",image:Di.about.journeyTimeline.step2,illustration:Di.about.journeyPurpose.src,alt:"From self-healing to serving others",paragraphs:["What began as self-healing gradually became my purpose. This journey taught me that health is not created through extremes, punishment, or quick fixes — but through consistency, awareness, and compassion. Today, I help others build a balanced relationship with food, movement, and their bodies, in a way that feels sustainable and deeply personal."]}],ls=vn`
  background: linear-gradient(180deg, rgba(255, 255, 255, 0.95), rgba(251, 249, 243, 0.98));
  border: 1px solid rgba(122, 160, 143, 0.12);
  box-shadow: 0 20px 48px rgba(15, 60, 40, 0.08);
  border-radius: 28px;

  @media (max-width: 768px) {
    border-radius: 24px;
  }
`,us=kn.div`
  width: 100%;
  overflow-x: hidden;
  padding: 0 0 24px;
`,cs=kn.div`
  width: min(calc(100% - 20px), 1120px);
  margin: 0 auto;

  @media (max-width: 768px) {
    width: min(calc(100% - 18px), 430px);
  }
`,ds=kn.div`
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
`,hs=kn.section`
  ${ls};
  position: relative;
  overflow: hidden;
  padding: 18px;

  @media (min-width: 769px) {
    padding: 28px;
  }
`,ps=kn.span`
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
`,fs=kn.h2`
  margin: 10px 0 0;
  color: ${({theme:e})=>e.colors.textPrimary};
  font-size: clamp(1.82rem, 7vw, 3.1rem);
  line-height: 1.06;
`,ms=kn.p`
  margin: 14px 0 0;
  color: ${({theme:e})=>e.colors.textMuted};
  font-size: 14px;
  line-height: 1.62;

  @media (min-width: 769px) {
    font-size: 15px;
    line-height: 1.68;
  }
`,gs=kn.div`
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
`,ys=kn(hs)`
  background:
    radial-gradient(circle at top right, rgba(221, 234, 225, 0.82), transparent 34%),
    radial-gradient(circle at left bottom, rgba(201, 218, 189, 0.34), transparent 28%),
    linear-gradient(180deg, rgba(255, 255, 255, 0.96), rgba(244, 250, 246, 0.96));
`,xs=kn.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 16px;
  align-items: center;

  @media (min-width: 900px) {
    grid-template-columns: minmax(0, 360px) minmax(0, 1fr);
    gap: 28px;
  }
`,vs=kn.div`
  position: relative;
  border-radius: 24px;
  overflow: hidden;
  min-height: 254px;
  background: #e8f1eb;
  box-shadow: 0 16px 36px rgba(15, 60, 40, 0.08);

  @media (min-width: 900px) {
    min-height: 410px;
  }
`,bs=kn.img`
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center 36%;
`,ws=kn.div`
  position: relative;
  z-index: 1;
`,ks=kn.p`
  margin: 10px 0 0;
  color: ${({theme:e})=>e.colors.textSecondary};
  font-size: 13px;
  font-weight: 600;
  line-height: 1.5;

  @media (min-width: 769px) {
    font-size: 14px;
  }
`,_s=kn.div`
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
`,Ss=kn(hs)`
  background:
    radial-gradient(circle at right top, rgba(229, 239, 229, 0.9), transparent 28%),
    linear-gradient(180deg, rgba(255, 255, 255, 0.96), rgba(247, 250, 245, 0.96));
`,js=kn.div`
  display: grid;
  gap: 16px;

  @media (min-width: 900px) {
    grid-template-columns: minmax(0, 0.9fr) minmax(0, 1.1fr);
    gap: 28px;
    align-items: start;
  }
`,Cs=kn.div`
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 10px;

  @media (min-width: 900px) {
    grid-template-columns: 1fr;
  }
`,Ts=kn.div`
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
`,Ps=kn.div`
  display: flex;
  flex-direction: column;
`,Es=kn(hs)`
  padding-bottom: 22px;
`,Ms=kn.div`
  max-width: 680px;
  margin: 0 auto 18px;
  text-align: center;
`,zs=kn.div`
  position: relative;
  padding: 8px 0 0;

  @media (min-width: 900px) {
    padding-top: 12px;
  }
`,As=kn.div`
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
`,Rs=kn.div`
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
`,$s=kn.div`
  display: flex;
  flex-direction: column;
  gap: 18px;

  @media (min-width: 900px) {
    gap: 24px;
  }
`,Ds=kn.article`
  position: relative;
  padding-left: 56px;

  @media (min-width: 900px) {
    display: grid;
    grid-template-columns: minmax(0, 1fr) 72px minmax(0, 1fr);
    align-items: center;
    padding-left: 0;
  }
`,Os=kn.div`
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
`,Ls=kn.div`
  ${ls};
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
`,Ns=kn.div`
  @media (min-width: 900px) {
    grid-column: ${({$side:e})=>"left"===e?"1":"3"};
  }
`,Is=kn.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 14px;

  @media (min-width: 640px) {
    grid-template-columns: 116px 1fr;
    align-items: center;
  }
`,Fs=kn.div`
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
`,Vs=kn.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
  object-position: center;
  display: block;
`,Bs=kn.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`,Ws=kn.h3`
  margin: 0;
  color: ${({theme:e})=>e.colors.textPrimary};
  font-size: 1.34rem;
  line-height: 1.15;

  @media (min-width: 769px) {
    font-size: 1.56rem;
  }
`,Us=kn.p`
  margin: 0;
  color: ${({theme:e})=>e.colors.textMuted};
  font-size: 14px;
  line-height: 1.6;
`,Ys=kn(hs)`
  background:
    radial-gradient(circle at right top, rgba(221, 234, 225, 0.66), transparent 28%),
    linear-gradient(180deg, rgba(255, 255, 255, 0.96), rgba(244, 250, 246, 0.96));
`,Hs=kn.div`
  text-align: center;
  max-width: 640px;
  margin: 0 auto 18px;
`,qs=kn.div`
  overflow: hidden;
  border-radius: 24px;
`,Xs=kn.div`
  display: flex;
  transform: translateX(${({$index:e})=>`-${100*e}%`});
  transition: transform 320ms ease;
`,Gs=kn.div`
  min-width: 100%;
`,Ks=kn.div`
  ${ls};
  padding: 14px;
  border-radius: 24px;

  @media (min-width: 769px) {
    padding: 18px;
  }
`,Qs=kn.div`
  position: relative;
  width: 100%;
  aspect-ratio: 0.78;
  overflow: hidden;
  border-radius: 18px;
  background: linear-gradient(180deg, rgba(240, 245, 239, 0.92), rgba(255, 255, 255, 0.96));
`,Zs=kn.img`
  display: block;
  width: 100%;
  height: 100%;
  object-fit: contain;
  background: #ffffff;
`,Js=kn.p`
  margin: 12px 2px 0;
  color: ${({theme:e})=>e.colors.textPrimary};
  font-size: 14px;
  font-weight: 600;
  line-height: 1.45;
  text-align: center;
`,el=kn.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  margin-top: 14px;
`,tl=kn.button`
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
`,nl=kn.div`
  display: flex;
  align-items: center;
  gap: 8px;
`,rl=kn.button`
  width: ${({$active:e})=>e?"18px":"8px"};
  height: 8px;
  border-radius: 999px;
  border: none;
  background: ${({theme:e,$active:t})=>t?e.colors.primary:"rgba(122, 160, 143, 0.28)"};
  transition: width 180ms ease, background 180ms ease;
  cursor: pointer;
`,il=kn(hs)`
  background:
    radial-gradient(circle at left bottom, rgba(201, 218, 189, 0.54), transparent 24%),
    radial-gradient(circle at right top, rgba(212, 227, 208, 0.42), transparent 28%),
    linear-gradient(180deg, rgba(237, 246, 241, 0.96), rgba(221, 237, 213, 0.96));
  text-align: center;
`,al=kn.h2`
  margin: 0;
  color: ${({theme:e})=>e.colors.textPrimary};
  font-size: clamp(1.72rem, 7vw, 2.6rem);
  line-height: 1.08;
`,ol=kn.p`
  margin: 12px auto 0;
  max-width: 30ch;
  color: ${({theme:e})=>e.colors.textSecondary};
  font-size: 14px;
  line-height: 1.6;

  @media (min-width: 769px) {
    font-size: 15px;
  }
`,sl=kn.div`
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
`,ll=[{image:Di.about.certifications[0],title:"Medical Yoga Teacher Certification"},{image:Di.about.certifications[1],title:"Parental Yoga Certification"},{image:Di.about.certifications[2],title:"Hatha and Ashtanga Yoga Certification"}],ul=[{title:"Balance, not perfection",body:"Health is not about extremes or rigid rules."},{title:"Nourishment, not restriction",body:"Food, movement, and care should feel supportive."},{title:"Sustainable choices",body:"Small, consistent changes create real wellbeing."},{title:"Mind, body, and soul",body:"A holistic approach matters just as much as routine."}],cl=()=>{const[e,t]=h.useState(!1),[n,r]=h.useState(0),[i,a]=h.useState(!1),[o,s]=h.useState(0),[l,u]=h.useState([0]),c=h.useRef(null),p=h.useRef(null),f=h.useRef([]);h.useEffect(()=>{if("undefined"==typeof window)return;const e=window.matchMedia("(prefers-reduced-motion: reduce)"),t=()=>a(e.matches);return t(),e.addEventListener("change",t),()=>e.removeEventListener("change",t)},[]),h.useEffect(()=>{if(i)return;const e=p.current;if(!e)return;let t=0;const n=()=>{const n=e.getBoundingClientRect(),r=window.innerHeight,i=.28*r,a=n.height+.38*r,o=(i-n.top)/a;var l,u,c;s((l=o,u=0,c=1,Math.min(Math.max(l,u),c))),t=0},r=()=>{t||(t=window.requestAnimationFrame(n))};return n(),window.addEventListener("scroll",r,{passive:!0}),window.addEventListener("resize",r),()=>{window.removeEventListener("scroll",r),window.removeEventListener("resize",r),t&&window.cancelAnimationFrame(t)}},[i]),h.useEffect(()=>{const e=f.current.filter(Boolean);if(!e.length)return;const t=new IntersectionObserver(e=>{u(t=>{const n=new Set(t);return e.forEach(e=>{const t=Number(e.target.dataset.timelineIndex??"-1");t<0||(e.isIntersecting?n.add(t):n.delete(t))}),Array.from(n).sort((e,t)=>e-t)})},{rootMargin:"-20% 0px -20% 0px",threshold:.35});return e.forEach(e=>t.observe(e)),()=>t.disconnect()},[]);const m=l.length?l[l.length-1]:0,g=i?1:o,y=Di.about.aboutHeroDhanashree,x=ss;return d.jsxs(us,{children:[d.jsx(cs,{children:d.jsxs(ds,{children:[d.jsx(ys,{children:d.jsxs(xs,{children:[d.jsx(vs,{children:d.jsx(bs,{src:y.src,alt:y.alt,loading:"eager",decoding:"async",fetchPriority:"high"})}),d.jsxs(ws,{children:[d.jsx(ps,{children:"About Balance with Shree"}),d.jsx(fs,{as:"h1",children:"Hi, I am Dhanashree"}),d.jsx(ks,{children:"a Clinical Nutritionist & Yoga Therapist, and the founder of Balance with Shree."}),d.jsx(gs,{children:d.jsx("span",{children:"✦"})}),d.jsx(ms,{children:"I help people build a healthy relationship with food, movement, and their bodies — not through extreme diets or quick fixes, but through simple, sustainable, and mindful lifestyle changes."}),d.jsx(ms,{children:"From dance and acrobatics to yoga and mindful living, movement has always been my way of connecting with myself. During a pause in life, I found clarity through yoga and nutrition—building strength, balance, and discipline from within."}),d.jsx(ms,{children:"Balance with Shree was born from this personal transformation—a space where yoga, nutrition, and mindful living come together in a practical, sustainable way."}),d.jsxs(_s,{children:[d.jsx(Mi,{size:"lg",onClick:()=>{c.current?.scrollIntoView({behavior:i?"auto":"smooth"})},children:"My Approach"}),d.jsx(Mi,{variant:"secondary",size:"lg",onClick:()=>t(!0),children:"Book a Session"})]})]})]})}),d.jsx(Ss,{ref:c,id:"about-philosophy",children:d.jsxs(js,{children:[d.jsxs(Ps,{children:[d.jsx(ps,{children:"My Philosophy"}),d.jsx(fs,{children:"Wellness, Without Extremes"}),d.jsx(gs,{children:d.jsx("span",{children:"✦"})}),d.jsx(ms,{children:"Yoga is not just exercise. Nutrition is not just calories. Health is not just physical."}),d.jsx(ms,{children:"I follow a holistic approach — working with the mind, body, and soul."}),d.jsx(ms,{children:"No crash diets. No temporary fixes. No fear around food."}),d.jsx(ms,{children:"Just sustainable habits, mindful eating, and movement that feels good — for life."}),d.jsx(ms,{children:"My goal is to help you feel comfortable in your body, confident in your food choices, and connected to your health — naturally and mindfully."})]}),d.jsx(Cs,{children:ul.map(e=>d.jsxs(Ts,{children:[d.jsx("strong",{children:e.title}),d.jsx("span",{children:e.body})]},e.title))})]})}),d.jsxs(Es,{ref:p,children:[d.jsxs(Ms,{children:[d.jsx(ps,{children:"My Journey"}),d.jsx(fs,{children:"The journey through a timeline:"}),d.jsx(ms,{children:"A personal story of awareness, healing, and purpose — told through the real moments that shaped Balance with Shree."})]}),d.jsxs(zs,{children:[d.jsx(As,{"aria-hidden":"true",children:d.jsx(Rs,{$progress:g,$reducedMotion:i})}),d.jsx($s,{children:x.map((e,t)=>{const n=m>=t,r=e.illustration??e.image;return d.jsxs(Ds,{ref:e=>{f.current[t]=e},"data-timeline-index":t,$side:e.side,$active:n,children:[d.jsx(Os,{$active:n}),d.jsx(Ns,{$side:e.side,children:d.jsx(Ls,{$active:n,children:d.jsxs(Is,{children:[d.jsx(Fs,{children:d.jsx(Vs,{src:r,alt:e.alt,loading:"lazy",decoding:"async"})}),d.jsxs(Bs,{children:[d.jsx(Ws,{children:e.label}),e.paragraphs.map(e=>d.jsx(Us,{children:e},e))]})]})})})]},e.id)})})]})]}),d.jsxs(Ys,{children:[d.jsxs(Hs,{children:[d.jsx(ps,{children:"Experience & Learning"}),d.jsx(fs,{children:"Professional Certifications"}),d.jsx(ms,{children:"Real certificates from Dhanashree's professional learning, presented in a cleaner, easier-to-view format."})]}),d.jsx(qs,{children:d.jsx(Xs,{$index:n,children:ll.map(e=>d.jsx(Gs,{children:d.jsxs(Ks,{children:[d.jsx(Qs,{children:d.jsx(Zs,{src:e.image,alt:e.title,loading:"lazy",decoding:"async"})}),d.jsx(Js,{children:e.title})]})},e.title))})}),d.jsxs(el,{children:[d.jsx(tl,{type:"button",onClick:()=>r(e=>0===e?ll.length-1:e-1),"aria-label":"Show previous certificate",children:d.jsx(ca,{size:18})}),d.jsx(nl,{children:ll.map((e,t)=>d.jsx(rl,{type:"button",onClick:()=>r(t),"aria-label":`Show certificate ${t+1}`,$active:t===n},e.title))}),d.jsx(tl,{type:"button",onClick:()=>r(e=>e===ll.length-1?0:e+1),"aria-label":"Show next certificate",children:d.jsx(da,{size:18})})]})]}),d.jsxs(il,{children:[d.jsx(al,{children:"Ready to begin your wellness journey?"}),d.jsx(ol,{children:"Start with a simple conversation and explore the support that feels right for you."}),d.jsxs(sl,{children:[d.jsx(Mi,{size:"lg",onClick:()=>t(!0),children:"Book a Session"}),d.jsx(Mi,{href:no(Ha),target:"_blank",rel:"noopener noreferrer",variant:"outline",size:"lg",icon:d.jsx(va,{size:18,strokeWidth:1.9}),children:"Chat on WhatsApp"})]})]})]})}),d.jsx(Aa,{isOpen:e,onClose:()=>t(!1),children:d.jsx(Ua,{onSelect:()=>t(!1)})})]})};function dl(){return d.jsx(cl,{})}class hl{constructor(e=0,t="Network Error"){this.status=e,this.text=t}}const pl={origin:"https://api.emailjs.com",blockHeadless:!1,storageProvider:(()=>{if("undefined"!=typeof localStorage)return{get:e=>Promise.resolve(localStorage.getItem(e)),set:(e,t)=>Promise.resolve(localStorage.setItem(e,t)),remove:e=>Promise.resolve(localStorage.removeItem(e))}})()},fl=e=>e?"string"==typeof e?{publicKey:e}:"[object Object]"===e.toString()?e:{}:{},ml=async(e,t,n={})=>{const r=await fetch(pl.origin+e,{method:"POST",headers:n,body:t}),i=await r.text(),a=new hl(r.status,i);if(r.ok)return a;throw a},gl=(e,t,n)=>{if(!e||"string"!=typeof e)throw"The public key is required. Visit https://dashboard.emailjs.com/admin/account";if(!t||"string"!=typeof t)throw"The service ID is required. Visit https://dashboard.emailjs.com/admin";if(!n||"string"!=typeof n)throw"The template ID is required. Visit https://dashboard.emailjs.com/admin/templates"},yl=e=>e.webdriver||!e.languages||0===e.languages.length,xl=()=>new hl(451,"Unavailable For Headless Browser"),vl=(e,t)=>{if((e=>!e.list?.length||!e.watchVariable)(e))return!1;((e,t)=>{if(!Array.isArray(e))throw"The BlockList list has to be an array";if("string"!=typeof t)throw"The BlockList watchVariable has to be a string"})(e.list,e.watchVariable);const n=(r=t,i=e.watchVariable,r instanceof FormData?r.get(i):r[i]);var r,i;return"string"==typeof n&&e.list.includes(n)},bl=()=>new hl(403,"Forbidden"),wl=async(e,t,n)=>{if(!t.throttle||!n)return!1;((e,t)=>{if("number"!=typeof e||e<0)throw"The LimitRate throttle has to be a positive number";if(t&&"string"!=typeof t)throw"The LimitRate ID has to be a non-empty string"})(t.throttle,t.id);const r=t.id||e,i=await(async(e,t,n)=>{const r=Number(await n.get(e)||0);return t-Date.now()+r})(r,t.throttle,n);return i>0||(await n.set(r,Date.now().toString()),!1)},kl=()=>new hl(429,"Too Many Requests"),_l=(e,t="https://api.emailjs.com")=>{if(!e)return;const n=fl(e);pl.publicKey=n.publicKey,pl.blockHeadless=n.blockHeadless,pl.storageProvider=n.storageProvider,pl.blockList=n.blockList,pl.limitRate=n.limitRate,pl.origin=n.origin||t},Sl=async(e,t,n,r)=>{const i=fl(r),a=i.publicKey||pl.publicKey,o=i.blockHeadless||pl.blockHeadless,s=i.storageProvider||pl.storageProvider,l={...pl.blockList,...i.blockList},u={...pl.limitRate,...i.limitRate};if(o&&yl(navigator))return Promise.reject(xl());if(gl(a,e,t),(e=>{if(e&&"[object Object]"!==e.toString())throw"The template params have to be the object. Visit https://www.emailjs.com/docs/sdk/send/"})(n),n&&vl(l,n))return Promise.reject(bl());if(await wl(location.pathname,u,s))return Promise.reject(kl());const c={lib_version:"4.4.1",user_id:a,service_id:e,template_id:t,template_params:n};return ml("/api/v1.0/email/send",JSON.stringify(c),{"Content-type":"application/json"})},jl=h.createContext({});const Cl="undefined"!=typeof window,Tl=Cl?h.useLayoutEffect:h.useEffect,Pl=h.createContext(null);function El(e,t){-1===e.indexOf(t)&&e.push(t)}function Ml(e,t){const n=e.indexOf(t);n>-1&&e.splice(n,1)}const zl=(e,t,n)=>n>t?t:n<e?e:n;const Al={},Rl=e=>/^-?(?:\d+(?:\.\d+)?|\.\d+)$/u.test(e);function $l(e){return"object"==typeof e&&null!==e}const Dl=e=>/^0[^.\s]+$/u.test(e);function Ol(e){let t;return()=>(void 0===t&&(t=e()),t)}const Ll=e=>e,Nl=(e,t)=>n=>t(e(n)),Il=(...e)=>e.reduce(Nl),Fl=(e,t,n)=>{const r=t-e;return 0===r?1:(n-e)/r};class Vl{constructor(){this.subscriptions=[]}add(e){return El(this.subscriptions,e),()=>Ml(this.subscriptions,e)}notify(e,t,n){const r=this.subscriptions.length;if(r)if(1===r)this.subscriptions[0](e,t,n);else for(let i=0;i<r;i++){const r=this.subscriptions[i];r&&r(e,t,n)}}getSize(){return this.subscriptions.length}clear(){this.subscriptions.length=0}}const Bl=e=>1e3*e,Wl=e=>e/1e3;function Ul(e,t){return t?e*(1e3/t):0}const Yl=(e,t,n)=>(((1-3*n+3*t)*e+(3*n-6*t))*e+3*t)*e;function Hl(e,t,n,r){if(e===t&&n===r)return Ll;const i=t=>function(e,t,n,r,i){let a,o,s=0;do{o=t+(n-t)/2,a=Yl(o,r,i)-e,a>0?n=o:t=o}while(Math.abs(a)>1e-7&&++s<12);return o}(t,0,1,e,n);return e=>0===e||1===e?e:Yl(i(e),t,r)}const ql=e=>t=>t<=.5?e(2*t)/2:(2-e(2*(1-t)))/2,Xl=e=>t=>1-e(1-t),Gl=Hl(.33,1.53,.69,.99),Kl=Xl(Gl),Ql=ql(Kl),Zl=e=>(e*=2)<1?.5*Kl(e):.5*(2-Math.pow(2,-10*(e-1))),Jl=e=>1-Math.sin(Math.acos(e)),eu=Xl(Jl),tu=ql(Jl),nu=Hl(.42,0,1,1),ru=Hl(0,0,.58,1),iu=Hl(.42,0,.58,1),au=e=>Array.isArray(e)&&"number"==typeof e[0],ou={linear:Ll,easeIn:nu,easeInOut:iu,easeOut:ru,circIn:Jl,circInOut:tu,circOut:eu,backIn:Kl,backInOut:Ql,backOut:Gl,anticipate:Zl},su=e=>{if(au(e)){e.length;const[t,n,r,i]=e;return Hl(t,n,r,i)}return"string"==typeof e?ou[e]:e},lu=["setup","read","resolveKeyframes","preUpdate","update","preRender","render","postRender"];function uu(e,t){let n=!1,r=!0;const i={delta:0,timestamp:0,isProcessing:!1},a=()=>n=!0,o=lu.reduce((e,t)=>(e[t]=function(e){let t=new Set,n=new Set,r=!1,i=!1;const a=new WeakSet;let o={delta:0,timestamp:0,isProcessing:!1};function s(t){a.has(t)&&(l.schedule(t),e()),t(o)}const l={schedule:(e,i=!1,o=!1)=>{const s=o&&r?t:n;return i&&a.add(e),s.has(e)||s.add(e),e},cancel:e=>{n.delete(e),a.delete(e)},process:e=>{o=e,r?i=!0:(r=!0,[t,n]=[n,t],t.forEach(s),t.clear(),r=!1,i&&(i=!1,l.process(e)))}};return l}(a),e),{}),{setup:s,read:l,resolveKeyframes:u,preUpdate:c,update:d,preRender:h,render:p,postRender:f}=o,m=()=>{const a=Al.useManualTiming?i.timestamp:performance.now();n=!1,Al.useManualTiming||(i.delta=r?1e3/60:Math.max(Math.min(a-i.timestamp,40),1)),i.timestamp=a,i.isProcessing=!0,s.process(i),l.process(i),u.process(i),c.process(i),d.process(i),h.process(i),p.process(i),f.process(i),i.isProcessing=!1,n&&t&&(r=!1,e(m))};return{schedule:lu.reduce((t,a)=>{const s=o[a];return t[a]=(t,a=!1,o=!1)=>(n||(n=!0,r=!0,i.isProcessing||e(m)),s.schedule(t,a,o)),t},{}),cancel:e=>{for(let t=0;t<lu.length;t++)o[lu[t]].cancel(e)},state:i,steps:o}}const{schedule:cu,cancel:du,state:hu,steps:pu}=uu("undefined"!=typeof requestAnimationFrame?requestAnimationFrame:Ll,!0);let fu;function mu(){fu=void 0}const gu={now:()=>(void 0===fu&&gu.set(hu.isProcessing||Al.useManualTiming?hu.timestamp:performance.now()),fu),set:e=>{fu=e,queueMicrotask(mu)}},yu=e=>t=>"string"==typeof t&&t.startsWith(e),xu=yu("--"),vu=yu("var(--"),bu=e=>!!vu(e)&&wu.test(e.split("/*")[0].trim()),wu=/var\(--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)$/iu,ku={test:e=>"number"==typeof e,parse:parseFloat,transform:e=>e},_u={...ku,transform:e=>zl(0,1,e)},Su={...ku,default:1},ju=e=>Math.round(1e5*e)/1e5,Cu=/-?(?:\d+(?:\.\d+)?|\.\d+)/gu;const Tu=/^(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))$/iu,Pu=(e,t)=>n=>Boolean("string"==typeof n&&Tu.test(n)&&n.startsWith(e)||t&&!function(e){return null==e}(n)&&Object.prototype.hasOwnProperty.call(n,t)),Eu=(e,t,n)=>r=>{if("string"!=typeof r)return r;const[i,a,o,s]=r.match(Cu);return{[e]:parseFloat(i),[t]:parseFloat(a),[n]:parseFloat(o),alpha:void 0!==s?parseFloat(s):1}},Mu={...ku,transform:e=>Math.round((e=>zl(0,255,e))(e))},zu={test:Pu("rgb","red"),parse:Eu("red","green","blue"),transform:({red:e,green:t,blue:n,alpha:r=1})=>"rgba("+Mu.transform(e)+", "+Mu.transform(t)+", "+Mu.transform(n)+", "+ju(_u.transform(r))+")"};const Au={test:Pu("#"),parse:function(e){let t="",n="",r="",i="";return e.length>5?(t=e.substring(1,3),n=e.substring(3,5),r=e.substring(5,7),i=e.substring(7,9)):(t=e.substring(1,2),n=e.substring(2,3),r=e.substring(3,4),i=e.substring(4,5),t+=t,n+=n,r+=r,i+=i),{red:parseInt(t,16),green:parseInt(n,16),blue:parseInt(r,16),alpha:i?parseInt(i,16)/255:1}},transform:zu.transform},Ru=e=>({test:t=>"string"==typeof t&&t.endsWith(e)&&1===t.split(" ").length,parse:parseFloat,transform:t=>`${t}${e}`}),$u=Ru("deg"),Du=Ru("%"),Ou=Ru("px"),Lu=Ru("vh"),Nu=Ru("vw"),Iu=(()=>({...Du,parse:e=>Du.parse(e)/100,transform:e=>Du.transform(100*e)}))(),Fu={test:Pu("hsl","hue"),parse:Eu("hue","saturation","lightness"),transform:({hue:e,saturation:t,lightness:n,alpha:r=1})=>"hsla("+Math.round(e)+", "+Du.transform(ju(t))+", "+Du.transform(ju(n))+", "+ju(_u.transform(r))+")"},Vu={test:e=>zu.test(e)||Au.test(e)||Fu.test(e),parse:e=>zu.test(e)?zu.parse(e):Fu.test(e)?Fu.parse(e):Au.parse(e),transform:e=>"string"==typeof e?e:e.hasOwnProperty("red")?zu.transform(e):Fu.transform(e),getAnimatableNone:e=>{const t=Vu.parse(e);return t.alpha=0,Vu.transform(t)}},Bu=/(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))/giu;const Wu="number",Uu="color",Yu=/var\s*\(\s*--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)|#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\)|-?(?:\d+(?:\.\d+)?|\.\d+)/giu;function Hu(e){const t=e.toString(),n=[],r={color:[],number:[],var:[]},i=[];let a=0;const o=t.replace(Yu,e=>(Vu.test(e)?(r.color.push(a),i.push(Uu),n.push(Vu.parse(e))):e.startsWith("var(")?(r.var.push(a),i.push("var"),n.push(e)):(r.number.push(a),i.push(Wu),n.push(parseFloat(e))),++a,"${}")).split("${}");return{values:n,split:o,indexes:r,types:i}}function qu(e){return Hu(e).values}function Xu(e){const{split:t,types:n}=Hu(e),r=t.length;return e=>{let i="";for(let a=0;a<r;a++)if(i+=t[a],void 0!==e[a]){const t=n[a];i+=t===Wu?ju(e[a]):t===Uu?Vu.transform(e[a]):e[a]}return i}}const Gu=e=>"number"==typeof e?0:Vu.test(e)?Vu.getAnimatableNone(e):e;const Ku={test:function(e){return isNaN(e)&&"string"==typeof e&&(e.match(Cu)?.length||0)+(e.match(Bu)?.length||0)>0},parse:qu,createTransformer:Xu,getAnimatableNone:function(e){const t=qu(e);return Xu(e)(t.map(Gu))}};function Qu(e,t,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?e+6*(t-e)*n:n<.5?t:n<2/3?e+(t-e)*(2/3-n)*6:e}function Zu(e,t){return n=>n>0?t:e}const Ju=(e,t,n)=>e+(t-e)*n,ec=(e,t,n)=>{const r=e*e,i=n*(t*t-r)+r;return i<0?0:Math.sqrt(i)},tc=[Au,zu,Fu];function nc(e){const t=(n=e,tc.find(e=>e.test(n)));var n;if(!Boolean(t))return!1;let r=t.parse(e);return t===Fu&&(r=function({hue:e,saturation:t,lightness:n,alpha:r}){e/=360,n/=100;let i=0,a=0,o=0;if(t/=100){const r=n<.5?n*(1+t):n+t-n*t,s=2*n-r;i=Qu(s,r,e+1/3),a=Qu(s,r,e),o=Qu(s,r,e-1/3)}else i=a=o=n;return{red:Math.round(255*i),green:Math.round(255*a),blue:Math.round(255*o),alpha:r}}(r)),r}const rc=(e,t)=>{const n=nc(e),r=nc(t);if(!n||!r)return Zu(e,t);const i={...n};return e=>(i.red=ec(n.red,r.red,e),i.green=ec(n.green,r.green,e),i.blue=ec(n.blue,r.blue,e),i.alpha=Ju(n.alpha,r.alpha,e),zu.transform(i))},ic=new Set(["none","hidden"]);function ac(e,t){return n=>Ju(e,t,n)}function oc(e){return"number"==typeof e?ac:"string"==typeof e?bu(e)?Zu:Vu.test(e)?rc:uc:Array.isArray(e)?sc:"object"==typeof e?Vu.test(e)?rc:lc:Zu}function sc(e,t){const n=[...e],r=n.length,i=e.map((e,n)=>oc(e)(e,t[n]));return e=>{for(let t=0;t<r;t++)n[t]=i[t](e);return n}}function lc(e,t){const n={...e,...t},r={};for(const i in n)void 0!==e[i]&&void 0!==t[i]&&(r[i]=oc(e[i])(e[i],t[i]));return e=>{for(const t in r)n[t]=r[t](e);return n}}const uc=(e,t)=>{const n=Ku.createTransformer(t),r=Hu(e),i=Hu(t);return r.indexes.var.length===i.indexes.var.length&&r.indexes.color.length===i.indexes.color.length&&r.indexes.number.length>=i.indexes.number.length?ic.has(e)&&!i.values.length||ic.has(t)&&!r.values.length?function(e,t){return ic.has(e)?n=>n<=0?e:t:n=>n>=1?t:e}(e,t):Il(sc(function(e,t){const n=[],r={color:0,var:0,number:0};for(let i=0;i<t.values.length;i++){const a=t.types[i],o=e.indexes[a][r[a]],s=e.values[o]??0;n[i]=s,r[a]++}return n}(r,i),i.values),n):Zu(e,t)};function cc(e,t,n){if("number"==typeof e&&"number"==typeof t&&"number"==typeof n)return Ju(e,t,n);return oc(e)(e,t)}const dc=e=>{const t=({timestamp:t})=>e(t);return{start:(e=!0)=>cu.update(t,e),stop:()=>du(t),now:()=>hu.isProcessing?hu.timestamp:gu.now()}},hc=(e,t,n=10)=>{let r="";const i=Math.max(Math.round(t/n),2);for(let a=0;a<i;a++)r+=Math.round(1e4*e(a/(i-1)))/1e4+", ";return`linear(${r.substring(0,r.length-2)})`},pc=2e4;function fc(e){let t=0;let n=e.next(t);for(;!n.done&&t<pc;)t+=50,n=e.next(t);return t>=pc?1/0:t}function mc(e,t,n){const r=Math.max(t-5,0);return Ul(n-e(r),t-r)}const gc=100,yc=10,xc=1,vc=0,bc=800,wc=.3,kc=.3,_c={granular:.01,default:2},Sc={granular:.005,default:.5},jc=.01,Cc=10,Tc=.05,Pc=1,Ec=.001;function Mc({duration:e=bc,bounce:t=wc,velocity:n=vc,mass:r=xc}){let i,a,o=1-t;o=zl(Tc,Pc,o),e=zl(jc,Cc,Wl(e)),o<1?(i=t=>{const r=t*o,i=r*e,a=r-n,s=Ac(t,o),l=Math.exp(-i);return Ec-a/s*l},a=t=>{const r=t*o*e,a=r*n+n,s=Math.pow(o,2)*Math.pow(t,2)*e,l=Math.exp(-r),u=Ac(Math.pow(t,2),o);return(-i(t)+Ec>0?-1:1)*((a-s)*l)/u}):(i=t=>Math.exp(-t*e)*((t-n)*e+1)-.001,a=t=>Math.exp(-t*e)*(e*e*(n-t)));const s=function(e,t,n){let r=n;for(let i=1;i<zc;i++)r-=e(r)/t(r);return r}(i,a,5/e);if(e=Bl(e),isNaN(s))return{stiffness:gc,damping:yc,duration:e};{const t=Math.pow(s,2)*r;return{stiffness:t,damping:2*o*Math.sqrt(r*t),duration:e}}}const zc=12;function Ac(e,t){return e*Math.sqrt(1-t*t)}const Rc=["duration","bounce"],$c=["stiffness","damping","mass"];function Dc(e,t){return t.some(t=>void 0!==e[t])}function Oc(e=kc,t=wc){const n="object"!=typeof e?{visualDuration:e,keyframes:[0,1],bounce:t}:e;let{restSpeed:r,restDelta:i}=n;const a=n.keyframes[0],o=n.keyframes[n.keyframes.length-1],s={done:!1,value:a},{stiffness:l,damping:u,mass:c,duration:d,velocity:h,isResolvedFromDuration:p}=function(e){let t={velocity:vc,stiffness:gc,damping:yc,mass:xc,isResolvedFromDuration:!1,...e};if(!Dc(e,$c)&&Dc(e,Rc))if(e.visualDuration){const n=e.visualDuration,r=2*Math.PI/(1.2*n),i=r*r,a=2*zl(.05,1,1-(e.bounce||0))*Math.sqrt(i);t={...t,mass:xc,stiffness:i,damping:a}}else{const n=Mc(e);t={...t,...n,mass:xc},t.isResolvedFromDuration=!0}return t}({...n,velocity:-Wl(n.velocity||0)}),f=h||0,m=u/(2*Math.sqrt(l*c)),g=o-a,y=Wl(Math.sqrt(l/c)),x=Math.abs(g)<5;let v;if(r||(r=x?_c.granular:_c.default),i||(i=x?Sc.granular:Sc.default),m<1){const e=Ac(y,m);v=t=>{const n=Math.exp(-m*y*t);return o-n*((f+m*y*g)/e*Math.sin(e*t)+g*Math.cos(e*t))}}else if(1===m)v=e=>o-Math.exp(-y*e)*(g+(f+y*g)*e);else{const e=y*Math.sqrt(m*m-1);v=t=>{const n=Math.exp(-m*y*t),r=Math.min(e*t,300);return o-n*((f+m*y*g)*Math.sinh(r)+e*g*Math.cosh(r))/e}}const b={calculatedDuration:p&&d||null,next:e=>{const t=v(e);if(p)s.done=e>=d;else{let n=0===e?f:0;m<1&&(n=0===e?Bl(f):mc(v,e,t));const a=Math.abs(n)<=r,l=Math.abs(o-t)<=i;s.done=a&&l}return s.value=s.done?o:t,s},toString:()=>{const e=Math.min(fc(b),pc),t=hc(t=>b.next(e*t).value,e,30);return e+"ms "+t},toTransition:()=>{}};return b}function Lc({keyframes:e,velocity:t=0,power:n=.8,timeConstant:r=325,bounceDamping:i=10,bounceStiffness:a=500,modifyTarget:o,min:s,max:l,restDelta:u=.5,restSpeed:c}){const d=e[0],h={done:!1,value:d},p=e=>void 0===s?l:void 0===l||Math.abs(s-e)<Math.abs(l-e)?s:l;let f=n*t;const m=d+f,g=void 0===o?m:o(m);g!==m&&(f=g-d);const y=e=>-f*Math.exp(-e/r),x=e=>g+y(e),v=e=>{const t=y(e),n=x(e);h.done=Math.abs(t)<=u,h.value=h.done?g:n};let b,w;const k=e=>{var t;(t=h.value,void 0!==s&&t<s||void 0!==l&&t>l)&&(b=e,w=Oc({keyframes:[h.value,p(h.value)],velocity:mc(x,e,h.value),damping:i,stiffness:a,restDelta:u,restSpeed:c}))};return k(0),{calculatedDuration:null,next:e=>{let t=!1;return w||void 0!==b||(t=!0,v(e),k(e)),void 0!==b&&e>=b?w.next(e-b):(!t&&v(e),h)}}}function Nc(e,t,{clamp:n=!0,ease:r,mixer:i}={}){const a=e.length;if(t.length,1===a)return()=>t[0];if(2===a&&t[0]===t[1])return()=>t[1];const o=e[0]===e[1];e[0]>e[a-1]&&(e=[...e].reverse(),t=[...t].reverse());const s=function(e,t,n){const r=[],i=n||Al.mix||cc,a=e.length-1;for(let o=0;o<a;o++){let n=i(e[o],e[o+1]);if(t){const e=Array.isArray(t)?t[o]||Ll:t;n=Il(e,n)}r.push(n)}return r}(t,r,i),l=s.length,u=n=>{if(o&&n<e[0])return t[0];let r=0;if(l>1)for(;r<e.length-2&&!(n<e[r+1]);r++);const i=Fl(e[r],e[r+1],n);return s[r](i)};return n?t=>u(zl(e[0],e[a-1],t)):u}function Ic(e){const t=[0];return function(e,t){const n=e[e.length-1];for(let r=1;r<=t;r++){const i=Fl(0,t,r);e.push(Ju(n,1,i))}}(t,e.length-1),t}function Fc({duration:e=300,keyframes:t,times:n,ease:r="easeInOut"}){const i=(e=>Array.isArray(e)&&"number"!=typeof e[0])(r)?r.map(su):su(r),a={done:!1,value:t[0]},o=function(e,t){return e.map(e=>e*t)}(n&&n.length===t.length?n:Ic(t),e),s=Nc(o,t,{ease:Array.isArray(i)?i:(l=t,u=i,l.map(()=>u||iu).splice(0,l.length-1))});var l,u;return{calculatedDuration:e,next:t=>(a.value=s(t),a.done=t>=e,a)}}Oc.applyToOptions=e=>{const t=function(e,t=100,n){const r=n({...e,keyframes:[0,t]}),i=Math.min(fc(r),pc);return{type:"keyframes",ease:e=>r.next(i*e).value/t,duration:Wl(i)}}(e,100,Oc);return e.ease=t.ease,e.duration=Bl(t.duration),e.type="keyframes",e};const Vc=e=>null!==e;function Bc(e,{repeat:t,repeatType:n="loop"},r,i=1){const a=e.filter(Vc),o=i<0||t&&"loop"!==n&&t%2==1?0:a.length-1;return o&&void 0!==r?r:a[o]}const Wc={decay:Lc,inertia:Lc,tween:Fc,keyframes:Fc,spring:Oc};function Uc(e){"string"==typeof e.type&&(e.type=Wc[e.type])}class Yc{constructor(){this.updateFinished()}get finished(){return this._finished}updateFinished(){this._finished=new Promise(e=>{this.resolve=e})}notifyFinished(){this.resolve()}then(e,t){return this.finished.then(e,t)}}const Hc=e=>e/100;class qc extends Yc{constructor(e){super(),this.state="idle",this.startTime=null,this.isStopped=!1,this.currentTime=0,this.holdTime=null,this.playbackSpeed=1,this.stop=()=>{const{motionValue:e}=this.options;e&&e.updatedAt!==gu.now()&&this.tick(gu.now()),this.isStopped=!0,"idle"!==this.state&&(this.teardown(),this.options.onStop?.())},this.options=e,this.initAnimation(),this.play(),!1===e.autoplay&&this.pause()}initAnimation(){const{options:e}=this;Uc(e);const{type:t=Fc,repeat:n=0,repeatDelay:r=0,repeatType:i,velocity:a=0}=e;let{keyframes:o}=e;const s=t||Fc;s!==Fc&&"number"!=typeof o[0]&&(this.mixKeyframes=Il(Hc,cc(o[0],o[1])),o=[0,100]);const l=s({...e,keyframes:o});"mirror"===i&&(this.mirroredGenerator=s({...e,keyframes:[...o].reverse(),velocity:-a})),null===l.calculatedDuration&&(l.calculatedDuration=fc(l));const{calculatedDuration:u}=l;this.calculatedDuration=u,this.resolvedDuration=u+r,this.totalDuration=this.resolvedDuration*(n+1)-r,this.generator=l}updateTime(e){const t=Math.round(e-this.startTime)*this.playbackSpeed;null!==this.holdTime?this.currentTime=this.holdTime:this.currentTime=t}tick(e,t=!1){const{generator:n,totalDuration:r,mixKeyframes:i,mirroredGenerator:a,resolvedDuration:o,calculatedDuration:s}=this;if(null===this.startTime)return n.next(0);const{delay:l=0,keyframes:u,repeat:c,repeatType:d,repeatDelay:h,type:p,onUpdate:f,finalKeyframe:m}=this.options;this.speed>0?this.startTime=Math.min(this.startTime,e):this.speed<0&&(this.startTime=Math.min(e-r/this.speed,this.startTime)),t?this.currentTime=e:this.updateTime(e);const g=this.currentTime-l*(this.playbackSpeed>=0?1:-1),y=this.playbackSpeed>=0?g<0:g>r;this.currentTime=Math.max(g,0),"finished"===this.state&&null===this.holdTime&&(this.currentTime=r);let x=this.currentTime,v=n;if(c){const e=Math.min(this.currentTime,r)/o;let t=Math.floor(e),n=e%1;!n&&e>=1&&(n=1),1===n&&t--,t=Math.min(t,c+1);Boolean(t%2)&&("reverse"===d?(n=1-n,h&&(n-=h/o)):"mirror"===d&&(v=a)),x=zl(0,1,n)*o}const b=y?{done:!1,value:u[0]}:v.next(x);i&&(b.value=i(b.value));let{done:w}=b;y||null===s||(w=this.playbackSpeed>=0?this.currentTime>=r:this.currentTime<=0);const k=null===this.holdTime&&("finished"===this.state||"running"===this.state&&w);return k&&p!==Lc&&(b.value=Bc(u,this.options,m,this.speed)),f&&f(b.value),k&&this.finish(),b}then(e,t){return this.finished.then(e,t)}get duration(){return Wl(this.calculatedDuration)}get iterationDuration(){const{delay:e=0}=this.options||{};return this.duration+Wl(e)}get time(){return Wl(this.currentTime)}set time(e){e=Bl(e),this.currentTime=e,null===this.startTime||null!==this.holdTime||0===this.playbackSpeed?this.holdTime=e:this.driver&&(this.startTime=this.driver.now()-e/this.playbackSpeed),this.driver?.start(!1)}get speed(){return this.playbackSpeed}set speed(e){this.updateTime(gu.now());const t=this.playbackSpeed!==e;this.playbackSpeed=e,t&&(this.time=Wl(this.currentTime))}play(){if(this.isStopped)return;const{driver:e=dc,startTime:t}=this.options;this.driver||(this.driver=e(e=>this.tick(e))),this.options.onPlay?.();const n=this.driver.now();"finished"===this.state?(this.updateFinished(),this.startTime=n):null!==this.holdTime?this.startTime=n-this.holdTime:this.startTime||(this.startTime=t??n),"finished"===this.state&&this.speed<0&&(this.startTime+=this.calculatedDuration),this.holdTime=null,this.state="running",this.driver.start()}pause(){this.state="paused",this.updateTime(gu.now()),this.holdTime=this.currentTime}complete(){"running"!==this.state&&this.play(),this.state="finished",this.holdTime=null}finish(){this.notifyFinished(),this.teardown(),this.state="finished",this.options.onComplete?.()}cancel(){this.holdTime=null,this.startTime=0,this.tick(0),this.teardown(),this.options.onCancel?.()}teardown(){this.state="idle",this.stopDriver(),this.startTime=this.holdTime=null}stopDriver(){this.driver&&(this.driver.stop(),this.driver=void 0)}sample(e){return this.startTime=0,this.tick(e,!0)}attachTimeline(e){return this.options.allowFlatten&&(this.options.type="keyframes",this.options.ease="linear",this.initAnimation()),this.driver?.stop(),e.observe(this)}}const Xc=e=>180*e/Math.PI,Gc=e=>{const t=Xc(Math.atan2(e[1],e[0]));return Qc(t)},Kc={x:4,y:5,translateX:4,translateY:5,scaleX:0,scaleY:3,scale:e=>(Math.abs(e[0])+Math.abs(e[3]))/2,rotate:Gc,rotateZ:Gc,skewX:e=>Xc(Math.atan(e[1])),skewY:e=>Xc(Math.atan(e[2])),skew:e=>(Math.abs(e[1])+Math.abs(e[2]))/2},Qc=e=>((e%=360)<0&&(e+=360),e),Zc=e=>Math.sqrt(e[0]*e[0]+e[1]*e[1]),Jc=e=>Math.sqrt(e[4]*e[4]+e[5]*e[5]),ed={x:12,y:13,z:14,translateX:12,translateY:13,translateZ:14,scaleX:Zc,scaleY:Jc,scale:e=>(Zc(e)+Jc(e))/2,rotateX:e=>Qc(Xc(Math.atan2(e[6],e[5]))),rotateY:e=>Qc(Xc(Math.atan2(-e[2],e[0]))),rotateZ:Gc,rotate:Gc,skewX:e=>Xc(Math.atan(e[4])),skewY:e=>Xc(Math.atan(e[1])),skew:e=>(Math.abs(e[1])+Math.abs(e[4]))/2};function td(e){return e.includes("scale")?1:0}function nd(e,t){if(!e||"none"===e)return td(t);const n=e.match(/^matrix3d\(([-\d.e\s,]+)\)$/u);let r,i;if(n)r=ed,i=n;else{const t=e.match(/^matrix\(([-\d.e\s,]+)\)$/u);r=Kc,i=t}if(!i)return td(t);const a=r[t],o=i[1].split(",").map(rd);return"function"==typeof a?a(o):o[a]}function rd(e){return parseFloat(e.trim())}const id=["transformPerspective","x","y","z","translateX","translateY","translateZ","scale","scaleX","scaleY","rotate","rotateX","rotateY","rotateZ","skew","skewX","skewY"],ad=(()=>new Set(id))(),od=e=>e===ku||e===Ou,sd=new Set(["x","y","z"]),ld=id.filter(e=>!sd.has(e));const ud={width:({x:e},{paddingLeft:t="0",paddingRight:n="0"})=>e.max-e.min-parseFloat(t)-parseFloat(n),height:({y:e},{paddingTop:t="0",paddingBottom:n="0"})=>e.max-e.min-parseFloat(t)-parseFloat(n),top:(e,{top:t})=>parseFloat(t),left:(e,{left:t})=>parseFloat(t),bottom:({y:e},{top:t})=>parseFloat(t)+(e.max-e.min),right:({x:e},{left:t})=>parseFloat(t)+(e.max-e.min),x:(e,{transform:t})=>nd(t,"x"),y:(e,{transform:t})=>nd(t,"y")};ud.translateX=ud.x,ud.translateY=ud.y;const cd=new Set;let dd=!1,hd=!1,pd=!1;function fd(){if(hd){const e=Array.from(cd).filter(e=>e.needsMeasurement),t=new Set(e.map(e=>e.element)),n=new Map;t.forEach(e=>{const t=function(e){const t=[];return ld.forEach(n=>{const r=e.getValue(n);void 0!==r&&(t.push([n,r.get()]),r.set(n.startsWith("scale")?1:0))}),t}(e);t.length&&(n.set(e,t),e.render())}),e.forEach(e=>e.measureInitialState()),t.forEach(e=>{e.render();const t=n.get(e);t&&t.forEach(([t,n])=>{e.getValue(t)?.set(n)})}),e.forEach(e=>e.measureEndState()),e.forEach(e=>{void 0!==e.suspendedScrollY&&window.scrollTo(0,e.suspendedScrollY)})}hd=!1,dd=!1,cd.forEach(e=>e.complete(pd)),cd.clear()}function md(){cd.forEach(e=>{e.readKeyframes(),e.needsMeasurement&&(hd=!0)})}class gd{constructor(e,t,n,r,i,a=!1){this.state="pending",this.isAsync=!1,this.needsMeasurement=!1,this.unresolvedKeyframes=[...e],this.onComplete=t,this.name=n,this.motionValue=r,this.element=i,this.isAsync=a}scheduleResolve(){this.state="scheduled",this.isAsync?(cd.add(this),dd||(dd=!0,cu.read(md),cu.resolveKeyframes(fd))):(this.readKeyframes(),this.complete())}readKeyframes(){const{unresolvedKeyframes:e,name:t,element:n,motionValue:r}=this;if(null===e[0]){const i=r?.get(),a=e[e.length-1];if(void 0!==i)e[0]=i;else if(n&&t){const r=n.readValue(t,a);null!=r&&(e[0]=r)}void 0===e[0]&&(e[0]=a),r&&void 0===i&&r.set(e[0])}!function(e){for(let t=1;t<e.length;t++)e[t]??(e[t]=e[t-1])}(e)}setFinalKeyframe(){}measureInitialState(){}renderEndStyles(){}measureEndState(){}complete(e=!1){this.state="complete",this.onComplete(this.unresolvedKeyframes,this.finalKeyframe,e),cd.delete(this)}cancel(){"scheduled"===this.state&&(cd.delete(this),this.state="pending")}resume(){"pending"===this.state&&this.scheduleResolve()}}const yd=Ol(()=>void 0!==window.ScrollTimeline),xd={};function vd(e,t){const n=Ol(e);return()=>xd[t]??n()}const bd=vd(()=>{try{document.createElement("div").animate({opacity:0},{easing:"linear(0, 1)"})}catch(rj){return!1}return!0},"linearEasing"),wd=([e,t,n,r])=>`cubic-bezier(${e}, ${t}, ${n}, ${r})`,kd={linear:"linear",ease:"ease",easeIn:"ease-in",easeOut:"ease-out",easeInOut:"ease-in-out",circIn:wd([0,.65,.55,1]),circOut:wd([.55,0,1,.45]),backIn:wd([.31,.01,.66,-.59]),backOut:wd([.33,1.53,.69,.99])};function _d(e,t){return e?"function"==typeof e?bd()?hc(e,t):"ease-out":au(e)?wd(e):Array.isArray(e)?e.map(e=>_d(e,t)||kd.easeOut):kd[e]:void 0}function Sd(e,t,n,{delay:r=0,duration:i=300,repeat:a=0,repeatType:o="loop",ease:s="easeOut",times:l}={},u=void 0){const c={[t]:n};l&&(c.offset=l);const d=_d(s,i);Array.isArray(d)&&(c.easing=d);const h={delay:r,duration:i,easing:Array.isArray(d)?"linear":d,fill:"both",iterations:a+1,direction:"reverse"===o?"alternate":"normal"};u&&(h.pseudoElement=u);return e.animate(c,h)}function jd(e){return"function"==typeof e&&"applyToOptions"in e}class Cd extends Yc{constructor(e){if(super(),this.finishedTime=null,this.isStopped=!1,!e)return;const{element:t,name:n,keyframes:r,pseudoElement:i,allowFlatten:a=!1,finalKeyframe:o,onComplete:s}=e;this.isPseudoElement=Boolean(i),this.allowFlatten=a,this.options=e,e.type;const l=function({type:e,...t}){return jd(e)&&bd()?e.applyToOptions(t):(t.duration??(t.duration=300),t.ease??(t.ease="easeOut"),t)}(e);this.animation=Sd(t,n,r,l,i),!1===l.autoplay&&this.animation.pause(),this.animation.onfinish=()=>{if(this.finishedTime=this.time,!i){const e=Bc(r,this.options,o,this.speed);this.updateMotionValue?this.updateMotionValue(e):function(e,t,n){(e=>e.startsWith("--"))(t)?e.style.setProperty(t,n):e.style[t]=n}(t,n,e),this.animation.cancel()}s?.(),this.notifyFinished()}}play(){this.isStopped||(this.animation.play(),"finished"===this.state&&this.updateFinished())}pause(){this.animation.pause()}complete(){this.animation.finish?.()}cancel(){try{this.animation.cancel()}catch(rj){}}stop(){if(this.isStopped)return;this.isStopped=!0;const{state:e}=this;"idle"!==e&&"finished"!==e&&(this.updateMotionValue?this.updateMotionValue():this.commitStyles(),this.isPseudoElement||this.cancel())}commitStyles(){this.isPseudoElement||this.animation.commitStyles?.()}get duration(){const e=this.animation.effect?.getComputedTiming?.().duration||0;return Wl(Number(e))}get iterationDuration(){const{delay:e=0}=this.options||{};return this.duration+Wl(e)}get time(){return Wl(Number(this.animation.currentTime)||0)}set time(e){this.finishedTime=null,this.animation.currentTime=Bl(e)}get speed(){return this.animation.playbackRate}set speed(e){e<0&&(this.finishedTime=null),this.animation.playbackRate=e}get state(){return null!==this.finishedTime?"finished":this.animation.playState}get startTime(){return Number(this.animation.startTime)}set startTime(e){this.animation.startTime=e}attachTimeline({timeline:e,observe:t}){return this.allowFlatten&&this.animation.effect?.updateTiming({easing:"linear"}),this.animation.onfinish=null,e&&yd()?(this.animation.timeline=e,Ll):t(this)}}const Td={anticipate:Zl,backInOut:Ql,circInOut:tu};function Pd(e){"string"==typeof e.ease&&e.ease in Td&&(e.ease=Td[e.ease])}class Ed extends Cd{constructor(e){Pd(e),Uc(e),super(e),e.startTime&&(this.startTime=e.startTime),this.options=e}updateMotionValue(e){const{motionValue:t,onUpdate:n,onComplete:r,element:i,...a}=this.options;if(!t)return;if(void 0!==e)return void t.set(e);const o=new qc({...a,autoplay:!1}),s=Bl(this.finishedTime??this.time);t.setWithVelocity(o.sample(s-10).value,o.sample(s).value,10),o.stop()}}const Md=(e,t)=>"zIndex"!==t&&(!("number"!=typeof e&&!Array.isArray(e))||!("string"!=typeof e||!Ku.test(e)&&"0"!==e||e.startsWith("url(")));function zd(e){e.duration=0,e.type="keyframes"}const Ad=new Set(["opacity","clipPath","filter","transform"]),Rd=Ol(()=>Object.hasOwnProperty.call(Element.prototype,"animate"));class $d extends Yc{constructor({autoplay:e=!0,delay:t=0,type:n="keyframes",repeat:r=0,repeatDelay:i=0,repeatType:a="loop",keyframes:o,name:s,motionValue:l,element:u,...c}){super(),this.stop=()=>{this._animation&&(this._animation.stop(),this.stopTimeline?.()),this.keyframeResolver?.cancel()},this.createdAt=gu.now();const d={autoplay:e,delay:t,type:n,repeat:r,repeatDelay:i,repeatType:a,name:s,motionValue:l,element:u,...c},h=u?.KeyframeResolver||gd;this.keyframeResolver=new h(o,(e,t,n)=>this.onKeyframesResolved(e,t,d,!n),s,l,u),this.keyframeResolver?.scheduleResolve()}onKeyframesResolved(e,t,n,r){this.keyframeResolver=void 0;const{name:i,type:a,velocity:o,delay:s,isHandoff:l,onUpdate:u}=n;this.resolvedAt=gu.now(),function(e,t,n,r){const i=e[0];if(null===i)return!1;if("display"===t||"visibility"===t)return!0;const a=e[e.length-1],o=Md(i,t),s=Md(a,t);return!(!o||!s)&&(function(e){const t=e[0];if(1===e.length)return!0;for(let n=0;n<e.length;n++)if(e[n]!==t)return!0}(e)||("spring"===n||jd(n))&&r)}(e,i,a,o)||(!Al.instantAnimations&&s||u?.(Bc(e,n,t)),e[0]=e[e.length-1],zd(n),n.repeat=0);const c={startTime:r?this.resolvedAt&&this.resolvedAt-this.createdAt>40?this.resolvedAt:this.createdAt:void 0,finalKeyframe:t,...n,keyframes:e},d=!l&&function(e){const{motionValue:t,name:n,repeatDelay:r,repeatType:i,damping:a,type:o}=e,s=t?.owner?.current;if(!(s instanceof HTMLElement))return!1;const{onUpdate:l,transformTemplate:u}=t.owner.getProps();return Rd()&&n&&Ad.has(n)&&("transform"!==n||!u)&&!l&&!r&&"mirror"!==i&&0!==a&&"inertia"!==o}(c)?new Ed({...c,element:c.motionValue.owner.current}):new qc(c);d.finished.then(()=>this.notifyFinished()).catch(Ll),this.pendingTimeline&&(this.stopTimeline=d.attachTimeline(this.pendingTimeline),this.pendingTimeline=void 0),this._animation=d}get finished(){return this._animation?this.animation.finished:this._finished}then(e,t){return this.finished.finally(e).then(()=>{})}get animation(){return this._animation||(this.keyframeResolver?.resume(),pd=!0,md(),fd(),pd=!1),this._animation}get duration(){return this.animation.duration}get iterationDuration(){return this.animation.iterationDuration}get time(){return this.animation.time}set time(e){this.animation.time=e}get speed(){return this.animation.speed}get state(){return this.animation.state}set speed(e){this.animation.speed=e}get startTime(){return this.animation.startTime}attachTimeline(e){return this._animation?this.stopTimeline=this.animation.attachTimeline(e):this.pendingTimeline=e,()=>this.stop()}play(){this.animation.play()}pause(){this.animation.pause()}complete(){this.animation.complete()}cancel(){this._animation&&this.animation.cancel(),this.keyframeResolver?.cancel()}}const Dd=/^var\(--(?:([\w-]+)|([\w-]+), ?([a-zA-Z\d ()%#.,-]+))\)/u;function Od(e,t,n=1){const[r,i]=function(e){const t=Dd.exec(e);if(!t)return[,];const[,n,r,i]=t;return[`--${n??r}`,i]}(e);if(!r)return;const a=window.getComputedStyle(t).getPropertyValue(r);if(a){const e=a.trim();return Rl(e)?parseFloat(e):e}return bu(i)?Od(i,t,n+1):i}function Ld(e,t){return e?.[t]??e?.default??e}const Nd=new Set(["width","height","top","left","right","bottom",...id]),Id=e=>t=>t.test(e),Fd=[ku,Ou,Du,$u,Nu,Lu,{test:e=>"auto"===e,parse:e=>e}],Vd=e=>Fd.find(Id(e));function Bd(e){return"number"==typeof e?0===e:null===e||("none"===e||"0"===e||Dl(e))}const Wd=new Set(["brightness","contrast","saturate","opacity"]);function Ud(e){const[t,n]=e.slice(0,-1).split("(");if("drop-shadow"===t)return e;const[r]=n.match(Cu)||[];if(!r)return e;const i=n.replace(r,"");let a=Wd.has(t)?1:0;return r!==n&&(a*=100),t+"("+a+i+")"}const Yd=/\b([a-z-]*)\(.*?\)/gu,Hd={...Ku,getAnimatableNone:e=>{const t=e.match(Yd);return t?t.map(Ud).join(" "):e}},qd={...ku,transform:Math.round},Xd={borderWidth:Ou,borderTopWidth:Ou,borderRightWidth:Ou,borderBottomWidth:Ou,borderLeftWidth:Ou,borderRadius:Ou,radius:Ou,borderTopLeftRadius:Ou,borderTopRightRadius:Ou,borderBottomRightRadius:Ou,borderBottomLeftRadius:Ou,width:Ou,maxWidth:Ou,height:Ou,maxHeight:Ou,top:Ou,right:Ou,bottom:Ou,left:Ou,padding:Ou,paddingTop:Ou,paddingRight:Ou,paddingBottom:Ou,paddingLeft:Ou,margin:Ou,marginTop:Ou,marginRight:Ou,marginBottom:Ou,marginLeft:Ou,backgroundPositionX:Ou,backgroundPositionY:Ou,...{rotate:$u,rotateX:$u,rotateY:$u,rotateZ:$u,scale:Su,scaleX:Su,scaleY:Su,scaleZ:Su,skew:$u,skewX:$u,skewY:$u,distance:Ou,translateX:Ou,translateY:Ou,translateZ:Ou,x:Ou,y:Ou,z:Ou,perspective:Ou,transformPerspective:Ou,opacity:_u,originX:Iu,originY:Iu,originZ:Ou},zIndex:qd,fillOpacity:_u,strokeOpacity:_u,numOctaves:qd},Gd={...Xd,color:Vu,backgroundColor:Vu,outlineColor:Vu,fill:Vu,stroke:Vu,borderColor:Vu,borderTopColor:Vu,borderRightColor:Vu,borderBottomColor:Vu,borderLeftColor:Vu,filter:Hd,WebkitFilter:Hd},Kd=e=>Gd[e];function Qd(e,t){let n=Kd(e);return n!==Hd&&(n=Ku),n.getAnimatableNone?n.getAnimatableNone(t):void 0}const Zd=new Set(["auto","none","0"]);class Jd extends gd{constructor(e,t,n,r,i){super(e,t,n,r,i,!0)}readKeyframes(){const{unresolvedKeyframes:e,element:t,name:n}=this;if(!t||!t.current)return;super.readKeyframes();for(let s=0;s<e.length;s++){let n=e[s];if("string"==typeof n&&(n=n.trim(),bu(n))){const r=Od(n,t.current);void 0!==r&&(e[s]=r),s===e.length-1&&(this.finalKeyframe=n)}}if(this.resolveNoneKeyframes(),!Nd.has(n)||2!==e.length)return;const[r,i]=e,a=Vd(r),o=Vd(i);if(a!==o)if(od(a)&&od(o))for(let s=0;s<e.length;s++){const t=e[s];"string"==typeof t&&(e[s]=parseFloat(t))}else ud[n]&&(this.needsMeasurement=!0)}resolveNoneKeyframes(){const{unresolvedKeyframes:e,name:t}=this,n=[];for(let r=0;r<e.length;r++)(null===e[r]||Bd(e[r]))&&n.push(r);n.length&&function(e,t,n){let r,i=0;for(;i<e.length&&!r;){const t=e[i];"string"==typeof t&&!Zd.has(t)&&Hu(t).values.length&&(r=e[i]),i++}if(r&&n)for(const a of t)e[a]=Qd(n,r)}(e,n,t)}measureInitialState(){const{element:e,unresolvedKeyframes:t,name:n}=this;if(!e||!e.current)return;"height"===n&&(this.suspendedScrollY=window.pageYOffset),this.measuredOrigin=ud[n](e.measureViewportBox(),window.getComputedStyle(e.current)),t[0]=this.measuredOrigin;const r=t[t.length-1];void 0!==r&&e.getValue(n,r).jump(r,!1)}measureEndState(){const{element:e,name:t,unresolvedKeyframes:n}=this;if(!e||!e.current)return;const r=e.getValue(t);r&&r.jump(this.measuredOrigin,!1);const i=n.length-1,a=n[i];n[i]=ud[t](e.measureViewportBox(),window.getComputedStyle(e.current)),null!==a&&void 0===this.finalKeyframe&&(this.finalKeyframe=a),this.removedTransforms?.length&&this.removedTransforms.forEach(([t,n])=>{e.getValue(t).set(n)}),this.resolveNoneKeyframes()}}const eh=(e,t)=>t&&"number"==typeof e?t.transform(e):e;class th{constructor(e,t={}){this.canTrackVelocity=null,this.events={},this.updateAndNotify=e=>{const t=gu.now();if(this.updatedAt!==t&&this.setPrevFrameValue(),this.prev=this.current,this.setCurrent(e),this.current!==this.prev&&(this.events.change?.notify(this.current),this.dependents))for(const n of this.dependents)n.dirty()},this.hasAnimated=!1,this.setCurrent(e),this.owner=t.owner}setCurrent(e){var t;this.current=e,this.updatedAt=gu.now(),null===this.canTrackVelocity&&void 0!==e&&(this.canTrackVelocity=(t=this.current,!isNaN(parseFloat(t))))}setPrevFrameValue(e=this.current){this.prevFrameValue=e,this.prevUpdatedAt=this.updatedAt}onChange(e){return this.on("change",e)}on(e,t){this.events[e]||(this.events[e]=new Vl);const n=this.events[e].add(t);return"change"===e?()=>{n(),cu.read(()=>{this.events.change.getSize()||this.stop()})}:n}clearListeners(){for(const e in this.events)this.events[e].clear()}attach(e,t){this.passiveEffect=e,this.stopPassiveEffect=t}set(e){this.passiveEffect?this.passiveEffect(e,this.updateAndNotify):this.updateAndNotify(e)}setWithVelocity(e,t,n){this.set(t),this.prev=void 0,this.prevFrameValue=e,this.prevUpdatedAt=this.updatedAt-n}jump(e,t=!0){this.updateAndNotify(e),this.prev=e,this.prevUpdatedAt=this.prevFrameValue=void 0,t&&this.stop(),this.stopPassiveEffect&&this.stopPassiveEffect()}dirty(){this.events.change?.notify(this.current)}addDependent(e){this.dependents||(this.dependents=new Set),this.dependents.add(e)}removeDependent(e){this.dependents&&this.dependents.delete(e)}get(){return this.current}getPrevious(){return this.prev}getVelocity(){const e=gu.now();if(!this.canTrackVelocity||void 0===this.prevFrameValue||e-this.updatedAt>30)return 0;const t=Math.min(this.updatedAt-this.prevUpdatedAt,30);return Ul(parseFloat(this.current)-parseFloat(this.prevFrameValue),t)}start(e){return this.stop(),new Promise(t=>{this.hasAnimated=!0,this.animation=e(t),this.events.animationStart&&this.events.animationStart.notify()}).then(()=>{this.events.animationComplete&&this.events.animationComplete.notify(),this.clearAnimation()})}stop(){this.animation&&(this.animation.stop(),this.events.animationCancel&&this.events.animationCancel.notify()),this.clearAnimation()}isAnimating(){return!!this.animation}clearAnimation(){delete this.animation}destroy(){this.dependents?.clear(),this.events.destroy?.notify(),this.clearListeners(),this.stop(),this.stopPassiveEffect&&this.stopPassiveEffect()}}function nh(e,t){return new th(e,t)}const{schedule:rh}=uu(queueMicrotask,!1),ih={x:!1,y:!1};function ah(){return ih.x||ih.y}function oh(e,t){const n=function(e,t,n){if(e instanceof EventTarget)return[e];if("string"==typeof e){let t=document;const r=n?.[e]??t.querySelectorAll(e);return r?Array.from(r):[]}return Array.from(e)}(e),r=new AbortController;return[n,{passive:!0,...t,signal:r.signal},()=>r.abort()]}function sh(e){return!("touch"===e.pointerType||ah())}const lh=(e,t)=>!!t&&(e===t||lh(e,t.parentElement)),uh=e=>"mouse"===e.pointerType?"number"!=typeof e.button||e.button<=0:!1!==e.isPrimary,ch=new Set(["BUTTON","INPUT","SELECT","TEXTAREA","A"]);const dh=new WeakSet;function hh(e){return t=>{"Enter"===t.key&&e(t)}}function ph(e,t){e.dispatchEvent(new PointerEvent("pointer"+t,{isPrimary:!0,bubbles:!0}))}function fh(e){return uh(e)&&!ah()}function mh(e,t,n={}){const[r,i,a]=oh(e,n),o=e=>{const r=e.currentTarget;if(!fh(e))return;dh.add(r);const a=t(r,e),o=(e,t)=>{window.removeEventListener("pointerup",s),window.removeEventListener("pointercancel",l),dh.has(r)&&dh.delete(r),fh(e)&&"function"==typeof a&&a(e,{success:t})},s=e=>{o(e,r===window||r===document||n.useGlobalTarget||lh(r,e.target))},l=e=>{o(e,!1)};window.addEventListener("pointerup",s,i),window.addEventListener("pointercancel",l,i)};return r.forEach(e=>{var t;(n.useGlobalTarget?window:e).addEventListener("pointerdown",o,i),$l(t=e)&&"offsetHeight"in t&&(e.addEventListener("focus",e=>((e,t)=>{const n=e.currentTarget;if(!n)return;const r=hh(()=>{if(dh.has(n))return;ph(n,"down");const e=hh(()=>{ph(n,"up")});n.addEventListener("keyup",e,t),n.addEventListener("blur",()=>ph(n,"cancel"),t)});n.addEventListener("keydown",r,t),n.addEventListener("blur",()=>n.removeEventListener("keydown",r),t)})(e,i)),function(e){return ch.has(e.tagName)||-1!==e.tabIndex}(e)||e.hasAttribute("tabindex")||(e.tabIndex=0))}),a}function gh(e){return $l(e)&&"ownerSVGElement"in e}const yh=e=>Boolean(e&&e.getVelocity),xh=[...Fd,Vu,Ku],vh=h.createContext({transformPagePoint:e=>e,isStatic:!1,reducedMotion:"never"});const bh=h.createContext({strict:!1}),wh={animation:["animate","variants","whileHover","whileTap","exit","whileInView","whileFocus","whileDrag"],exit:["exit"],drag:["drag","dragControls"],focus:["whileFocus"],hover:["whileHover","onHoverStart","onHoverEnd"],tap:["whileTap","onTap","onTapStart","onTapCancel"],pan:["onPan","onPanStart","onPanSessionStart","onPanEnd"],inView:["whileInView","onViewportEnter","onViewportLeave"],layout:["layout","layoutId"]},kh={};for(const ij in wh)kh[ij]={isEnabled:e=>wh[ij].some(t=>!!e[t])};const _h=new Set(["animate","exit","variants","initial","style","values","variants","transition","transformTemplate","custom","inherit","onBeforeLayoutMeasure","onAnimationStart","onAnimationComplete","onUpdate","onDragStart","onDrag","onDragEnd","onMeasureDragConstraints","onDirectionLock","onDragTransitionEnd","_dragX","_dragY","onHoverStart","onHoverEnd","onViewportEnter","onViewportLeave","globalTapTarget","ignoreStrict","viewport"]);function Sh(e){return e.startsWith("while")||e.startsWith("drag")&&"draggable"!==e||e.startsWith("layout")||e.startsWith("onTap")||e.startsWith("onPan")||e.startsWith("onLayout")||_h.has(e)}let jh=e=>!Sh(e);try{"function"==typeof(Ch=require("@emotion/is-prop-valid").default)&&(jh=e=>e.startsWith("on")?!Sh(e):Ch(e))}catch{}var Ch;const Th=h.createContext({});function Ph(e){return null!==e&&"object"==typeof e&&"function"==typeof e.start}function Eh(e){return"string"==typeof e||Array.isArray(e)}const Mh=["animate","whileInView","whileFocus","whileHover","whileTap","whileDrag","exit"],zh=["initial",...Mh];function Ah(e){return Ph(e.animate)||zh.some(t=>Eh(e[t]))}function Rh(e){return Boolean(Ah(e)||e.variants)}function $h(e){const{initial:t,animate:n}=function(e,t){if(Ah(e)){const{initial:t,animate:n}=e;return{initial:!1===t||Eh(t)?t:void 0,animate:Eh(n)?n:void 0}}return!1!==e.inherit?t:{}}(e,h.useContext(Th));return h.useMemo(()=>({initial:t,animate:n}),[Dh(t),Dh(n)])}function Dh(e){return Array.isArray(e)?e.join(" "):e}function Oh(e,t){return t.max===t.min?0:e/(t.max-t.min)*100}const Lh={correct:(e,t)=>{if(!t.target)return e;if("string"==typeof e){if(!Ou.test(e))return e;e=parseFloat(e)}return`${Oh(e,t.target.x)}% ${Oh(e,t.target.y)}%`}},Nh={correct:(e,{treeScale:t,projectionDelta:n})=>{const r=e,i=Ku.parse(e);if(i.length>5)return r;const a=Ku.createTransformer(e),o="number"!=typeof i[0]?1:0,s=n.x.scale*t.x,l=n.y.scale*t.y;i[0+o]/=s,i[1+o]/=l;const u=Ju(s,l,.5);return"number"==typeof i[2+o]&&(i[2+o]/=u),"number"==typeof i[3+o]&&(i[3+o]/=u),a(i)}},Ih={borderRadius:{...Lh,applyTo:["borderTopLeftRadius","borderTopRightRadius","borderBottomLeftRadius","borderBottomRightRadius"]},borderTopLeftRadius:Lh,borderTopRightRadius:Lh,borderBottomLeftRadius:Lh,borderBottomRightRadius:Lh,boxShadow:Nh};function Fh(e,{layout:t,layoutId:n}){return ad.has(e)||e.startsWith("origin")||(t||void 0!==n)&&(!!Ih[e]||"opacity"===e)}const Vh={x:"translateX",y:"translateY",z:"translateZ",transformPerspective:"perspective"},Bh=id.length;function Wh(e,t,n){const{style:r,vars:i,transformOrigin:a}=e;let o=!1,s=!1;for(const l in t){const e=t[l];if(ad.has(l))o=!0;else if(xu(l))i[l]=e;else{const t=eh(e,Xd[l]);l.startsWith("origin")?(s=!0,a[l]=t):r[l]=t}}if(t.transform||(o||n?r.transform=function(e,t,n){let r="",i=!0;for(let a=0;a<Bh;a++){const o=id[a],s=e[o];if(void 0===s)continue;let l=!0;if(l="number"==typeof s?s===(o.startsWith("scale")?1:0):0===parseFloat(s),!l||n){const e=eh(s,Xd[o]);l||(i=!1,r+=`${Vh[o]||o}(${e}) `),n&&(t[o]=e)}}return r=r.trim(),n?r=n(t,i?"":r):i&&(r="none"),r}(t,e.transform,n):r.transform&&(r.transform="none")),s){const{originX:e="50%",originY:t="50%",originZ:n=0}=a;r.transformOrigin=`${e} ${t} ${n}`}}const Uh=()=>({style:{},transform:{},transformOrigin:{},vars:{}});function Yh(e,t,n){for(const r in t)yh(t[r])||Fh(r,n)||(e[r]=t[r])}function Hh(e,t){const n={};return Yh(n,e.style||{},e),Object.assign(n,function({transformTemplate:e},t){return h.useMemo(()=>{const n={style:{},transform:{},transformOrigin:{},vars:{}};return Wh(n,t,e),Object.assign({},n.vars,n.style)},[t])}(e,t)),n}function qh(e,t){const n={},r=Hh(e,t);return e.drag&&!1!==e.dragListener&&(n.draggable=!1,r.userSelect=r.WebkitUserSelect=r.WebkitTouchCallout="none",r.touchAction=!0===e.drag?"none":"pan-"+("x"===e.drag?"y":"x")),void 0===e.tabIndex&&(e.onTap||e.onTapStart||e.whileTap)&&(n.tabIndex=0),n.style=r,n}const Xh={offset:"stroke-dashoffset",array:"stroke-dasharray"},Gh={offset:"strokeDashoffset",array:"strokeDasharray"};function Kh(e,{attrX:t,attrY:n,attrScale:r,pathLength:i,pathSpacing:a=1,pathOffset:o=0,...s},l,u,c){if(Wh(e,s,u),l)return void(e.style.viewBox&&(e.attrs.viewBox=e.style.viewBox));e.attrs=e.style,e.style={};const{attrs:d,style:h}=e;d.transform&&(h.transform=d.transform,delete d.transform),(h.transform||d.transformOrigin)&&(h.transformOrigin=d.transformOrigin??"50% 50%",delete d.transformOrigin),h.transform&&(h.transformBox=c?.transformBox??"fill-box",delete d.transformBox),void 0!==t&&(d.x=t),void 0!==n&&(d.y=n),void 0!==r&&(d.scale=r),void 0!==i&&function(e,t,n=1,r=0,i=!0){e.pathLength=1;const a=i?Xh:Gh;e[a.offset]=Ou.transform(-r);const o=Ou.transform(t),s=Ou.transform(n);e[a.array]=`${o} ${s}`}(d,i,a,o,!1)}const Qh=()=>({style:{},transform:{},transformOrigin:{},vars:{},attrs:{}}),Zh=e=>"string"==typeof e&&"svg"===e.toLowerCase();function Jh(e,t,n,r){const i=h.useMemo(()=>{const n={style:{},transform:{},transformOrigin:{},vars:{},attrs:{}};return Kh(n,t,Zh(r),e.transformTemplate,e.style),{...n.attrs,style:{...n.style}}},[t]);if(e.style){const t={};Yh(t,e.style,e),i.style={...t,...i.style}}return i}const ep=["animate","circle","defs","desc","ellipse","g","image","line","filter","marker","mask","metadata","path","pattern","polygon","polyline","rect","stop","switch","symbol","svg","text","tspan","use","view"];function tp(e){return"string"==typeof e&&!e.includes("-")&&!!(ep.indexOf(e)>-1||/[A-Z]/u.test(e))}function np(e,t,n,{latestValues:r},i,a=!1){const o=(tp(e)?Jh:qh)(t,r,i,e),s=function(e,t,n){const r={};for(const i in e)"values"===i&&"object"==typeof e.values||(jh(i)||!0===n&&Sh(i)||!t&&!Sh(i)||e.draggable&&i.startsWith("onDrag"))&&(r[i]=e[i]);return r}(t,"string"==typeof e,a),l=e!==h.Fragment?{...s,...o,ref:n}:{},{children:u}=t,c=h.useMemo(()=>yh(u)?u.get():u,[u]);return h.createElement(e,{...l,children:c})}function rp(e){const t=[{},{}];return e?.values.forEach((e,n)=>{t[0][n]=e.get(),t[1][n]=e.getVelocity()}),t}function ip(e,t,n,r){if("function"==typeof t){const[i,a]=rp(r);t=t(void 0!==n?n:e.custom,i,a)}if("string"==typeof t&&(t=e.variants&&e.variants[t]),"function"==typeof t){const[i,a]=rp(r);t=t(void 0!==n?n:e.custom,i,a)}return t}function ap(e){return yh(e)?e.get():e}function op(e,t,n,r){const i={},a=r(e,{});for(const h in a)i[h]=ap(a[h]);let{initial:o,animate:s}=e;const l=Ah(e),u=Rh(e);t&&u&&!l&&!1!==e.inherit&&(void 0===o&&(o=t.initial),void 0===s&&(s=t.animate));let c=!!n&&!1===n.initial;c=c||!1===o;const d=c?s:o;if(d&&"boolean"!=typeof d&&!Ph(d)){const t=Array.isArray(d)?d:[d];for(let n=0;n<t.length;n++){const r=ip(e,t[n]);if(r){const{transitionEnd:e,transition:t,...n}=r;for(const r in n){let e=n[r];if(Array.isArray(e)){e=e[c?e.length-1:0]}null!==e&&(i[r]=e)}for(const r in e)i[r]=e[r]}}}return i}const sp=e=>(t,n)=>{const r=h.useContext(Th),i=h.useContext(Pl),a=()=>function({scrapeMotionValuesFromProps:e,createRenderState:t},n,r,i){return{latestValues:op(n,r,i,e),renderState:t()}}(e,t,r,i);return n?a():function(e){const t=h.useRef(null);return null===t.current&&(t.current=e()),t.current}(a)};function lp(e,t,n){const{style:r}=e,i={};for(const a in r)(yh(r[a])||t.style&&yh(t.style[a])||Fh(a,e)||void 0!==n?.getValue(a)?.liveStyle)&&(i[a]=r[a]);return i}const up=sp({scrapeMotionValuesFromProps:lp,createRenderState:Uh});function cp(e,t,n){const r=lp(e,t,n);for(const i in e)if(yh(e[i])||yh(t[i])){r[-1!==id.indexOf(i)?"attr"+i.charAt(0).toUpperCase()+i.substring(1):i]=e[i]}return r}const dp=sp({scrapeMotionValuesFromProps:cp,createRenderState:Qh}),hp=Symbol.for("motionComponentSymbol");function pp(e){return e&&"object"==typeof e&&Object.prototype.hasOwnProperty.call(e,"current")}function fp(e,t,n){return h.useCallback(r=>{r&&e.onMount&&e.onMount(r),t&&(r?t.mount(r):t.unmount()),n&&("function"==typeof n?n(r):pp(n)&&(n.current=r))},[t])}const mp=e=>e.replace(/([a-z])([A-Z])/gu,"$1-$2").toLowerCase(),gp="data-"+mp("framerAppearId"),yp=h.createContext({});function xp(e,t,n,r,i){const{visualElement:a}=h.useContext(Th),o=h.useContext(bh),s=h.useContext(Pl),l=h.useContext(vh).reducedMotion,u=h.useRef(null);r=r||o.renderer,!u.current&&r&&(u.current=r(e,{visualState:t,parent:a,props:n,presenceContext:s,blockInitialAnimation:!!s&&!1===s.initial,reducedMotionConfig:l}));const c=u.current,d=h.useContext(yp);!c||c.projection||!i||"html"!==c.type&&"svg"!==c.type||function(e,t,n,r){const{layoutId:i,layout:a,drag:o,dragConstraints:s,layoutScroll:l,layoutRoot:u,layoutCrossfade:c}=t;e.projection=new n(e.latestValues,t["data-framer-portal-id"]?void 0:vp(e.parent)),e.projection.setOptions({layoutId:i,layout:a,alwaysMeasureLayout:Boolean(o)||s&&pp(s),visualElement:e,animationType:"string"==typeof a?a:"both",initialPromotionConfig:r,crossfade:c,layoutScroll:l,layoutRoot:u})}(u.current,n,i,d);const p=h.useRef(!1);h.useInsertionEffect(()=>{c&&p.current&&c.update(n,s)});const f=n[gp],m=h.useRef(Boolean(f)&&!window.MotionHandoffIsComplete?.(f)&&window.MotionHasOptimisedAnimation?.(f));return Tl(()=>{c&&(p.current=!0,window.MotionIsMounted=!0,c.updateFeatures(),c.scheduleRenderMicrotask(),m.current&&c.animationState&&c.animationState.animateChanges())}),h.useEffect(()=>{c&&(!m.current&&c.animationState&&c.animationState.animateChanges(),m.current&&(queueMicrotask(()=>{window.MotionHandoffMarkAsComplete?.(f)}),m.current=!1),c.enteringChildren=void 0)}),c}function vp(e){if(e)return!1!==e.options.allowProjection?e.projection:vp(e.parent)}function bp(e,{forwardMotionProps:t=!1}={},n,r){n&&function(e){for(const t in e)kh[t]={...kh[t],...e[t]}}(n);const i=tp(e)?dp:up;function a(n,a){let o;const s={...h.useContext(vh),...n,layoutId:wp(n)},{isStatic:l}=s,u=$h(n),c=i(n,l);if(!l&&Cl){h.useContext(bh).strict;const t=function(e){const{drag:t,layout:n}=kh;if(!t&&!n)return{};const r={...t,...n};return{MeasureLayout:t?.isEnabled(e)||n?.isEnabled(e)?r.MeasureLayout:void 0,ProjectionNode:r.ProjectionNode}}(s);o=t.MeasureLayout,u.visualElement=xp(e,c,s,r,t.ProjectionNode)}return d.jsxs(Th.Provider,{value:u,children:[o&&u.visualElement?d.jsx(o,{visualElement:u.visualElement,...s}):null,np(e,n,fp(c,u.visualElement,a),c,l,t)]})}a.displayName=`motion.${"string"==typeof e?e:`create(${e.displayName??e.name??""})`}`;const o=h.forwardRef(a);return o[hp]=e,o}function wp({layoutId:e}){const t=h.useContext(jl).id;return t&&void 0!==e?t+"-"+e:e}function kp(e,t){if("undefined"==typeof Proxy)return bp;const n=new Map,r=(n,r)=>bp(n,r,e,t);return new Proxy((e,t)=>r(e,t),{get:(i,a)=>"create"===a?r:(n.has(a)||n.set(a,bp(a,void 0,e,t)),n.get(a))})}function _p({top:e,left:t,right:n,bottom:r}){return{x:{min:t,max:n},y:{min:e,max:r}}}function Sp(e){return void 0===e||1===e}function jp({scale:e,scaleX:t,scaleY:n}){return!Sp(e)||!Sp(t)||!Sp(n)}function Cp(e){return jp(e)||Tp(e)||e.z||e.rotate||e.rotateX||e.rotateY||e.skewX||e.skewY}function Tp(e){return Pp(e.x)||Pp(e.y)}function Pp(e){return e&&"0%"!==e}function Ep(e,t,n){return n+t*(e-n)}function Mp(e,t,n,r,i){return void 0!==i&&(e=Ep(e,i,r)),Ep(e,n,r)+t}function zp(e,t=0,n=1,r,i){e.min=Mp(e.min,t,n,r,i),e.max=Mp(e.max,t,n,r,i)}function Ap(e,{x:t,y:n}){zp(e.x,t.translate,t.scale,t.originPoint),zp(e.y,n.translate,n.scale,n.originPoint)}const Rp=.999999999999,$p=1.0000000000001;function Dp(e,t){e.min=e.min+t,e.max=e.max+t}function Op(e,t,n,r,i=.5){zp(e,t,n,Ju(e.min,e.max,i),r)}function Lp(e,t){Op(e.x,t.x,t.scaleX,t.scale,t.originX),Op(e.y,t.y,t.scaleY,t.scale,t.originY)}function Np(e,t){return _p(function(e,t){if(!t)return e;const n=t({x:e.left,y:e.top}),r=t({x:e.right,y:e.bottom});return{top:n.y,left:n.x,bottom:r.y,right:r.x}}(e.getBoundingClientRect(),t))}const Ip=()=>({x:{min:0,max:0},y:{min:0,max:0}}),Fp={current:null},Vp={current:!1};const Bp=new WeakMap;const Wp=["AnimationStart","AnimationComplete","Update","BeforeLayoutMeasure","LayoutMeasure","LayoutAnimationStart","LayoutAnimationComplete"];class Up{scrapeMotionValuesFromProps(e,t,n){return{}}constructor({parent:e,props:t,presenceContext:n,reducedMotionConfig:r,blockInitialAnimation:i,visualState:a},o={}){this.current=null,this.children=new Set,this.isVariantNode=!1,this.isControllingVariants=!1,this.shouldReduceMotion=null,this.values=new Map,this.KeyframeResolver=gd,this.features={},this.valueSubscriptions=new Map,this.prevMotionValues={},this.events={},this.propEventSubscriptions={},this.notifyUpdate=()=>this.notify("Update",this.latestValues),this.render=()=>{this.current&&(this.triggerBuild(),this.renderInstance(this.current,this.renderState,this.props.style,this.projection))},this.renderScheduledAt=0,this.scheduleRender=()=>{const e=gu.now();this.renderScheduledAt<e&&(this.renderScheduledAt=e,cu.render(this.render,!1,!0))};const{latestValues:s,renderState:l}=a;this.latestValues=s,this.baseTarget={...s},this.initialValues=t.initial?{...s}:{},this.renderState=l,this.parent=e,this.props=t,this.presenceContext=n,this.depth=e?e.depth+1:0,this.reducedMotionConfig=r,this.options=o,this.blockInitialAnimation=Boolean(i),this.isControllingVariants=Ah(t),this.isVariantNode=Rh(t),this.isVariantNode&&(this.variantChildren=new Set),this.manuallyAnimateOnMount=Boolean(e&&e.current);const{willChange:u,...c}=this.scrapeMotionValuesFromProps(t,{},this);for(const d in c){const e=c[d];void 0!==s[d]&&yh(e)&&e.set(s[d])}}mount(e){this.current=e,Bp.set(e,this),this.projection&&!this.projection.instance&&this.projection.mount(e),this.parent&&this.isVariantNode&&!this.isControllingVariants&&(this.removeFromVariantTree=this.parent.addVariantChild(this)),this.values.forEach((e,t)=>this.bindToMotionValue(t,e)),Vp.current||function(){if(Vp.current=!0,Cl)if(window.matchMedia){const e=window.matchMedia("(prefers-reduced-motion)"),t=()=>Fp.current=e.matches;e.addEventListener("change",t),t()}else Fp.current=!1}(),this.shouldReduceMotion="never"!==this.reducedMotionConfig&&("always"===this.reducedMotionConfig||Fp.current),this.parent?.addChild(this),this.update(this.props,this.presenceContext)}unmount(){this.projection&&this.projection.unmount(),du(this.notifyUpdate),du(this.render),this.valueSubscriptions.forEach(e=>e()),this.valueSubscriptions.clear(),this.removeFromVariantTree&&this.removeFromVariantTree(),this.parent?.removeChild(this);for(const e in this.events)this.events[e].clear();for(const e in this.features){const t=this.features[e];t&&(t.unmount(),t.isMounted=!1)}this.current=null}addChild(e){this.children.add(e),this.enteringChildren??(this.enteringChildren=new Set),this.enteringChildren.add(e)}removeChild(e){this.children.delete(e),this.enteringChildren&&this.enteringChildren.delete(e)}bindToMotionValue(e,t){this.valueSubscriptions.has(e)&&this.valueSubscriptions.get(e)();const n=ad.has(e);n&&this.onBindTransform&&this.onBindTransform();const r=t.on("change",t=>{this.latestValues[e]=t,this.props.onUpdate&&cu.preRender(this.notifyUpdate),n&&this.projection&&(this.projection.isTransformDirty=!0),this.scheduleRender()});let i;window.MotionCheckAppearSync&&(i=window.MotionCheckAppearSync(this,e,t)),this.valueSubscriptions.set(e,()=>{r(),i&&i(),t.owner&&t.stop()})}sortNodePosition(e){return this.current&&this.sortInstanceNodePosition&&this.type===e.type?this.sortInstanceNodePosition(this.current,e.current):0}updateFeatures(){let e="animation";for(e in kh){const t=kh[e];if(!t)continue;const{isEnabled:n,Feature:r}=t;if(!this.features[e]&&r&&n(this.props)&&(this.features[e]=new r(this)),this.features[e]){const t=this.features[e];t.isMounted?t.update():(t.mount(),t.isMounted=!0)}}}triggerBuild(){this.build(this.renderState,this.latestValues,this.props)}measureViewportBox(){return this.current?this.measureInstanceViewportBox(this.current,this.props):{x:{min:0,max:0},y:{min:0,max:0}}}getStaticValue(e){return this.latestValues[e]}setStaticValue(e,t){this.latestValues[e]=t}update(e,t){(e.transformTemplate||this.props.transformTemplate)&&this.scheduleRender(),this.prevProps=this.props,this.props=e,this.prevPresenceContext=this.presenceContext,this.presenceContext=t;for(let n=0;n<Wp.length;n++){const t=Wp[n];this.propEventSubscriptions[t]&&(this.propEventSubscriptions[t](),delete this.propEventSubscriptions[t]);const r=e["on"+t];r&&(this.propEventSubscriptions[t]=this.on(t,r))}this.prevMotionValues=function(e,t,n){for(const r in t){const i=t[r],a=n[r];if(yh(i))e.addValue(r,i);else if(yh(a))e.addValue(r,nh(i,{owner:e}));else if(a!==i)if(e.hasValue(r)){const t=e.getValue(r);!0===t.liveStyle?t.jump(i):t.hasAnimated||t.set(i)}else{const t=e.getStaticValue(r);e.addValue(r,nh(void 0!==t?t:i,{owner:e}))}}for(const r in n)void 0===t[r]&&e.removeValue(r);return t}(this,this.scrapeMotionValuesFromProps(e,this.prevProps,this),this.prevMotionValues),this.handleChildMotionValue&&this.handleChildMotionValue()}getProps(){return this.props}getVariant(e){return this.props.variants?this.props.variants[e]:void 0}getDefaultTransition(){return this.props.transition}getTransformPagePoint(){return this.props.transformPagePoint}getClosestVariantNode(){return this.isVariantNode?this:this.parent?this.parent.getClosestVariantNode():void 0}addVariantChild(e){const t=this.getClosestVariantNode();if(t)return t.variantChildren&&t.variantChildren.add(e),()=>t.variantChildren.delete(e)}addValue(e,t){const n=this.values.get(e);t!==n&&(n&&this.removeValue(e),this.bindToMotionValue(e,t),this.values.set(e,t),this.latestValues[e]=t.get())}removeValue(e){this.values.delete(e);const t=this.valueSubscriptions.get(e);t&&(t(),this.valueSubscriptions.delete(e)),delete this.latestValues[e],this.removeValueFromRenderState(e,this.renderState)}hasValue(e){return this.values.has(e)}getValue(e,t){if(this.props.values&&this.props.values[e])return this.props.values[e];let n=this.values.get(e);return void 0===n&&void 0!==t&&(n=nh(null===t?void 0:t,{owner:this}),this.addValue(e,n)),n}readValue(e,t){let n=void 0===this.latestValues[e]&&this.current?this.getBaseTargetFromProps(this.props,e)??this.readValueFromInstance(this.current,e,this.options):this.latestValues[e];var r;return null!=n&&("string"==typeof n&&(Rl(n)||Dl(n))?n=parseFloat(n):(r=n,!xh.find(Id(r))&&Ku.test(t)&&(n=Qd(e,t))),this.setBaseTarget(e,yh(n)?n.get():n)),yh(n)?n.get():n}setBaseTarget(e,t){this.baseTarget[e]=t}getBaseTarget(e){const{initial:t}=this.props;let n;if("string"==typeof t||"object"==typeof t){const r=ip(this.props,t,this.presenceContext?.custom);r&&(n=r[e])}if(t&&void 0!==n)return n;const r=this.getBaseTargetFromProps(this.props,e);return void 0===r||yh(r)?void 0!==this.initialValues[e]&&void 0===n?void 0:this.baseTarget[e]:r}on(e,t){return this.events[e]||(this.events[e]=new Vl),this.events[e].add(t)}notify(e,...t){this.events[e]&&this.events[e].notify(...t)}scheduleRenderMicrotask(){rh.render(this.render)}}class Yp extends Up{constructor(){super(...arguments),this.KeyframeResolver=Jd}sortInstanceNodePosition(e,t){return 2&e.compareDocumentPosition(t)?1:-1}getBaseTargetFromProps(e,t){return e.style?e.style[t]:void 0}removeValueFromRenderState(e,{vars:t,style:n}){delete t[e],delete n[e]}handleChildMotionValue(){this.childSubscription&&(this.childSubscription(),delete this.childSubscription);const{children:e}=this.props;yh(e)&&(this.childSubscription=e.on("change",e=>{this.current&&(this.current.textContent=`${e}`)}))}}function Hp(e,{style:t,vars:n},r,i){const a=e.style;let o;for(o in t)a[o]=t[o];for(o in i?.applyProjectionStyles(a,r),n)a.setProperty(o,n[o])}class qp extends Yp{constructor(){super(...arguments),this.type="html",this.renderInstance=Hp}readValueFromInstance(e,t){if(ad.has(t))return this.projection?.isProjecting?td(t):((e,t)=>{const{transform:n="none"}=getComputedStyle(e);return nd(n,t)})(e,t);{const r=(n=e,window.getComputedStyle(n)),i=(xu(t)?r.getPropertyValue(t):r[t])||0;return"string"==typeof i?i.trim():i}var n}measureInstanceViewportBox(e,{transformPagePoint:t}){return Np(e,t)}build(e,t,n){Wh(e,t,n.transformTemplate)}scrapeMotionValuesFromProps(e,t,n){return lp(e,t,n)}}const Xp=new Set(["baseFrequency","diffuseConstant","kernelMatrix","kernelUnitLength","keySplines","keyTimes","limitingConeAngle","markerHeight","markerWidth","numOctaves","targetX","targetY","surfaceScale","specularConstant","specularExponent","stdDeviation","tableValues","viewBox","gradientTransform","pathLength","startOffset","textLength","lengthAdjust"]);class Gp extends Yp{constructor(){super(...arguments),this.type="svg",this.isSVGTag=!1,this.measureInstanceViewportBox=Ip}getBaseTargetFromProps(e,t){return e[t]}readValueFromInstance(e,t){if(ad.has(t)){const e=Kd(t);return e&&e.default||0}return t=Xp.has(t)?t:mp(t),e.getAttribute(t)}scrapeMotionValuesFromProps(e,t,n){return cp(e,t,n)}build(e,t,n){Kh(e,t,this.isSVGTag,n.transformTemplate,n.style)}renderInstance(e,t,n,r){!function(e,t,n,r){Hp(e,t,void 0,r);for(const i in t.attrs)e.setAttribute(Xp.has(i)?i:mp(i),t.attrs[i])}(e,t,0,r)}mount(e){this.isSVGTag=Zh(e.tagName),super.mount(e)}}const Kp=(e,t)=>tp(e)?new Gp(t):new qp(t,{allowProjection:e!==h.Fragment});function Qp(e,t,n){const r=e.getProps();return ip(r,t,void 0!==n?n:r.custom,e)}const Zp=e=>Array.isArray(e);function Jp(e,t,n){e.hasValue(t)?e.getValue(t).set(n):e.addValue(t,nh(n))}function ef(e){return Zp(e)?e[e.length-1]||0:e}function tf(e,t){const n=e.getValue("willChange");if(r=n,Boolean(yh(r)&&r.add))return n.add(t);if(!n&&Al.WillChange){const n=new Al.WillChange("auto");e.addValue("willChange",n),n.add(t)}var r}function nf(e){return e.props[gp]}const rf=e=>null!==e;const af={type:"spring",stiffness:500,damping:25,restSpeed:10},of={type:"keyframes",duration:.8},sf={type:"keyframes",ease:[.25,.1,.35,1],duration:.3},lf=(e,{keyframes:t})=>t.length>2?of:ad.has(e)?e.startsWith("scale")?{type:"spring",stiffness:550,damping:0===t[1]?2*Math.sqrt(550):30,restSpeed:10}:af:sf;const uf=(e,t,n,r={},i,a)=>o=>{const s=Ld(r,e)||{},l=s.delay||r.delay||0;let{elapsed:u=0}=r;u-=Bl(l);const c={keyframes:Array.isArray(n)?n:[null,n],ease:"easeOut",velocity:t.getVelocity(),...s,delay:-u,onUpdate:e=>{t.set(e),s.onUpdate&&s.onUpdate(e)},onComplete:()=>{o(),s.onComplete&&s.onComplete()},name:e,motionValue:t,element:a?void 0:i};(function({when:e,delay:t,delayChildren:n,staggerChildren:r,staggerDirection:i,repeat:a,repeatType:o,repeatDelay:s,from:l,elapsed:u,...c}){return!!Object.keys(c).length})(s)||Object.assign(c,lf(e,c)),c.duration&&(c.duration=Bl(c.duration)),c.repeatDelay&&(c.repeatDelay=Bl(c.repeatDelay)),void 0!==c.from&&(c.keyframes[0]=c.from);let d=!1;if((!1===c.type||0===c.duration&&!c.repeatDelay)&&(zd(c),0===c.delay&&(d=!0)),(Al.instantAnimations||Al.skipAnimations)&&(d=!0,zd(c),c.delay=0),c.allowFlatten=!s.type&&!s.ease,d&&!a&&void 0!==t.get()){const e=function(e,{repeat:t,repeatType:n="loop"}){const r=e.filter(rf);return r[t&&"loop"!==n&&t%2==1?0:r.length-1]}(c.keyframes,s);if(void 0!==e)return void cu.update(()=>{c.onUpdate(e),c.onComplete()})}return s.isSync?new qc(c):new $d(c)};function cf({protectedKeys:e,needsAnimating:t},n){const r=e.hasOwnProperty(n)&&!0!==t[n];return t[n]=!1,r}function df(e,t,{delay:n=0,transitionOverride:r,type:i}={}){let{transition:a=e.getDefaultTransition(),transitionEnd:o,...s}=t;r&&(a=r);const l=[],u=i&&e.animationState&&e.animationState.getState()[i];for(const c in s){const t=e.getValue(c,e.latestValues[c]??null),r=s[c];if(void 0===r||u&&cf(u,c))continue;const i={delay:n,...Ld(a||{},c)},o=t.get();if(void 0!==o&&!t.isAnimating&&!Array.isArray(r)&&r===o&&!i.velocity)continue;let d=!1;if(window.MotionHandoffAnimation){const t=nf(e);if(t){const e=window.MotionHandoffAnimation(t,c,cu);null!==e&&(i.startTime=e,d=!0)}}tf(e,c),t.start(uf(c,t,r,e.shouldReduceMotion&&Nd.has(c)?{type:!1}:i,e,d));const h=t.animation;h&&l.push(h)}return o&&Promise.all(l).then(()=>{cu.update(()=>{o&&function(e,t){const n=Qp(e,t);let{transitionEnd:r={},transition:i={},...a}=n||{};a={...a,...r};for(const o in a)Jp(e,o,ef(a[o]))}(e,o)})}),l}function hf(e,t,n,r=0,i=1){const a=Array.from(e).sort((e,t)=>e.sortNodePosition(t)).indexOf(t),o=e.size,s=(o-1)*r;return"function"==typeof n?n(a,o):1===i?a*r:s-a*r}function pf(e,t,n={}){const r=Qp(e,t,"exit"===n.type?e.presenceContext?.custom:void 0);let{transition:i=e.getDefaultTransition()||{}}=r||{};n.transitionOverride&&(i=n.transitionOverride);const a=r?()=>Promise.all(df(e,r,n)):()=>Promise.resolve(),o=e.variantChildren&&e.variantChildren.size?(r=0)=>{const{delayChildren:a=0,staggerChildren:o,staggerDirection:s}=i;return function(e,t,n=0,r=0,i=0,a=1,o){const s=[];for(const l of e.variantChildren)l.notify("AnimationStart",t),s.push(pf(l,t,{...o,delay:n+("function"==typeof r?0:r)+hf(e.variantChildren,l,r,i,a)}).then(()=>l.notify("AnimationComplete",t)));return Promise.all(s)}(e,t,r,a,o,s,n)}:()=>Promise.resolve(),{when:s}=i;if(s){const[e,t]="beforeChildren"===s?[a,o]:[o,a];return e().then(()=>t())}return Promise.all([a(),o(n.delay)])}function ff(e,t){if(!Array.isArray(t))return!1;const n=t.length;if(n!==e.length)return!1;for(let r=0;r<n;r++)if(t[r]!==e[r])return!1;return!0}const mf=zh.length;function gf(e){if(!e)return;if(!e.isControllingVariants){const t=e.parent&&gf(e.parent)||{};return void 0!==e.props.initial&&(t.initial=e.props.initial),t}const t={};for(let n=0;n<mf;n++){const r=zh[n],i=e.props[r];(Eh(i)||!1===i)&&(t[r]=i)}return t}const yf=[...Mh].reverse(),xf=Mh.length;function vf(e){return t=>Promise.all(t.map(({animation:t,options:n})=>function(e,t,n={}){let r;if(e.notify("AnimationStart",t),Array.isArray(t)){const i=t.map(t=>pf(e,t,n));r=Promise.all(i)}else if("string"==typeof t)r=pf(e,t,n);else{const i="function"==typeof t?Qp(e,t,n.custom):t;r=Promise.all(df(e,i,n))}return r.then(()=>{e.notify("AnimationComplete",t)})}(e,t,n)))}function bf(e){let t=vf(e),n=_f(),r=!0;const i=t=>(n,r)=>{const i=Qp(e,r,"exit"===t?e.presenceContext?.custom:void 0);if(i){const{transition:e,transitionEnd:t,...r}=i;n={...n,...r,...t}}return n};function a(a){const{props:o}=e,s=gf(e.parent)||{},l=[],u=new Set;let c={},d=1/0;for(let t=0;t<xf;t++){const h=yf[t],p=n[h],f=void 0!==o[h]?o[h]:s[h],m=Eh(f),g=h===a?p.isActive:null;!1===g&&(d=t);let y=f===s[h]&&f!==o[h]&&m;if(y&&r&&e.manuallyAnimateOnMount&&(y=!1),p.protectedKeys={...c},!p.isActive&&null===g||!f&&!p.prevProp||Ph(f)||"boolean"==typeof f)continue;const x=wf(p.prevProp,f);let v=x||h===a&&p.isActive&&!y&&m||t>d&&m,b=!1;const w=Array.isArray(f)?f:[f];let k=w.reduce(i(h),{});!1===g&&(k={});const{prevResolvedValues:_={}}=p,S={..._,...k},j=t=>{v=!0,u.has(t)&&(b=!0,u.delete(t)),p.needsAnimating[t]=!0;const n=e.getValue(t);n&&(n.liveStyle=!1)};for(const e in S){const t=k[e],n=_[e];if(c.hasOwnProperty(e))continue;let r=!1;r=Zp(t)&&Zp(n)?!ff(t,n):t!==n,r?null!=t?j(e):u.add(e):void 0!==t&&u.has(e)?j(e):p.protectedKeys[e]=!0}p.prevProp=f,p.prevResolvedValues=k,p.isActive&&(c={...c,...k}),r&&e.blockInitialAnimation&&(v=!1);const C=y&&x;v&&(!C||b)&&l.push(...w.map(t=>{const n={type:h};if("string"==typeof t&&r&&!C&&e.manuallyAnimateOnMount&&e.parent){const{parent:r}=e,i=Qp(r,t);if(r.enteringChildren&&i){const{delayChildren:t}=i.transition||{};n.delay=hf(r.enteringChildren,e,t)}}return{animation:t,options:n}}))}if(u.size){const t={};if("boolean"!=typeof o.initial){const n=Qp(e,Array.isArray(o.initial)?o.initial[0]:o.initial);n&&n.transition&&(t.transition=n.transition)}u.forEach(n=>{const r=e.getBaseTarget(n),i=e.getValue(n);i&&(i.liveStyle=!0),t[n]=r??null}),l.push({animation:t})}let h=Boolean(l.length);return!r||!1!==o.initial&&o.initial!==o.animate||e.manuallyAnimateOnMount||(h=!1),r=!1,h?t(l):Promise.resolve()}return{animateChanges:a,setActive:function(t,r){if(n[t].isActive===r)return Promise.resolve();e.variantChildren?.forEach(e=>e.animationState?.setActive(t,r)),n[t].isActive=r;const i=a(t);for(const e in n)n[e].protectedKeys={};return i},setAnimateFunction:function(n){t=n(e)},getState:()=>n,reset:()=>{n=_f()}}}function wf(e,t){return"string"==typeof t?t!==e:!!Array.isArray(t)&&!ff(t,e)}function kf(e=!1){return{isActive:e,protectedKeys:{},needsAnimating:{},prevResolvedValues:{}}}function _f(){return{animate:kf(!0),whileInView:kf(),whileHover:kf(),whileTap:kf(),whileDrag:kf(),whileFocus:kf(),exit:kf()}}class Sf{constructor(e){this.isMounted=!1,this.node=e}update(){}}let jf=0;const Cf={animation:{Feature:class extends Sf{constructor(e){super(e),e.animationState||(e.animationState=bf(e))}updateAnimationControlsSubscription(){const{animate:e}=this.node.getProps();Ph(e)&&(this.unmountControls=e.subscribe(this.node))}mount(){this.updateAnimationControlsSubscription()}update(){const{animate:e}=this.node.getProps(),{animate:t}=this.node.prevProps||{};e!==t&&this.updateAnimationControlsSubscription()}unmount(){this.node.animationState.reset(),this.unmountControls?.()}}},exit:{Feature:class extends Sf{constructor(){super(...arguments),this.id=jf++}update(){if(!this.node.presenceContext)return;const{isPresent:e,onExitComplete:t}=this.node.presenceContext,{isPresent:n}=this.node.prevPresenceContext||{};if(!this.node.animationState||e===n)return;const r=this.node.animationState.setActive("exit",!e);t&&!e&&r.then(()=>{t(this.id)})}mount(){const{register:e,onExitComplete:t}=this.node.presenceContext||{};t&&t(this.id),e&&(this.unmount=e(this.id))}unmount(){}}}};function Tf(e,t,n,r={passive:!0}){return e.addEventListener(t,n,r),()=>e.removeEventListener(t,n)}function Pf(e){return{point:{x:e.pageX,y:e.pageY}}}function Ef(e,t,n,r){return Tf(e,t,(e=>t=>uh(t)&&e(t,Pf(t)))(n),r)}function Mf(e){return e.max-e.min}function zf(e,t,n,r=.5){e.origin=r,e.originPoint=Ju(t.min,t.max,e.origin),e.scale=Mf(n)/Mf(t),e.translate=Ju(n.min,n.max,e.origin)-e.originPoint,(e.scale>=.9999&&e.scale<=1.0001||isNaN(e.scale))&&(e.scale=1),(e.translate>=-.01&&e.translate<=.01||isNaN(e.translate))&&(e.translate=0)}function Af(e,t,n,r){zf(e.x,t.x,n.x,r?r.originX:void 0),zf(e.y,t.y,n.y,r?r.originY:void 0)}function Rf(e,t,n){e.min=n.min+t.min,e.max=e.min+Mf(t)}function $f(e,t,n){e.min=t.min-n.min,e.max=e.min+Mf(t)}function Df(e,t,n){$f(e.x,t.x,n.x),$f(e.y,t.y,n.y)}function Of(e){return[e("x"),e("y")]}const Lf=({current:e})=>e?e.ownerDocument.defaultView:null,Nf=(e,t)=>Math.abs(e-t);class If{constructor(e,t,{transformPagePoint:n,contextWindow:r=window,dragSnapToOrigin:i=!1,distanceThreshold:a=3}={}){if(this.startEvent=null,this.lastMoveEvent=null,this.lastMoveEventInfo=null,this.handlers={},this.contextWindow=window,this.updatePoint=()=>{if(!this.lastMoveEvent||!this.lastMoveEventInfo)return;const e=Bf(this.lastMoveEventInfo,this.history),t=null!==this.startEvent,n=function(e,t){const n=Nf(e.x,t.x),r=Nf(e.y,t.y);return Math.sqrt(n**2+r**2)}(e.offset,{x:0,y:0})>=this.distanceThreshold;if(!t&&!n)return;const{point:r}=e,{timestamp:i}=hu;this.history.push({...r,timestamp:i});const{onStart:a,onMove:o}=this.handlers;t||(a&&a(this.lastMoveEvent,e),this.startEvent=this.lastMoveEvent),o&&o(this.lastMoveEvent,e)},this.handlePointerMove=(e,t)=>{this.lastMoveEvent=e,this.lastMoveEventInfo=Ff(t,this.transformPagePoint),cu.update(this.updatePoint,!0)},this.handlePointerUp=(e,t)=>{this.end();const{onEnd:n,onSessionEnd:r,resumeAnimation:i}=this.handlers;if(this.dragSnapToOrigin&&i&&i(),!this.lastMoveEvent||!this.lastMoveEventInfo)return;const a=Bf("pointercancel"===e.type?this.lastMoveEventInfo:Ff(t,this.transformPagePoint),this.history);this.startEvent&&n&&n(e,a),r&&r(e,a)},!uh(e))return;this.dragSnapToOrigin=i,this.handlers=t,this.transformPagePoint=n,this.distanceThreshold=a,this.contextWindow=r||window;const o=Ff(Pf(e),this.transformPagePoint),{point:s}=o,{timestamp:l}=hu;this.history=[{...s,timestamp:l}];const{onSessionStart:u}=t;u&&u(e,Bf(o,this.history)),this.removeListeners=Il(Ef(this.contextWindow,"pointermove",this.handlePointerMove),Ef(this.contextWindow,"pointerup",this.handlePointerUp),Ef(this.contextWindow,"pointercancel",this.handlePointerUp))}updateHandlers(e){this.handlers=e}end(){this.removeListeners&&this.removeListeners(),du(this.updatePoint)}}function Ff(e,t){return t?{point:t(e.point)}:e}function Vf(e,t){return{x:e.x-t.x,y:e.y-t.y}}function Bf({point:e},t){return{point:e,delta:Vf(e,Uf(t)),offset:Vf(e,Wf(t)),velocity:Yf(t,.1)}}function Wf(e){return e[0]}function Uf(e){return e[e.length-1]}function Yf(e,t){if(e.length<2)return{x:0,y:0};let n=e.length-1,r=null;const i=Uf(e);for(;n>=0&&(r=e[n],!(i.timestamp-r.timestamp>Bl(t)));)n--;if(!r)return{x:0,y:0};const a=Wl(i.timestamp-r.timestamp);if(0===a)return{x:0,y:0};const o={x:(i.x-r.x)/a,y:(i.y-r.y)/a};return o.x===1/0&&(o.x=0),o.y===1/0&&(o.y=0),o}function Hf(e,t,n){return{min:void 0!==t?e.min+t:void 0,max:void 0!==n?e.max+n-(e.max-e.min):void 0}}function qf(e,t){let n=t.min-e.min,r=t.max-e.max;return t.max-t.min<e.max-e.min&&([n,r]=[r,n]),{min:n,max:r}}const Xf=.35;function Gf(e,t,n){return{min:Kf(e,t),max:Kf(e,n)}}function Kf(e,t){return"number"==typeof e?e:e[t]||0}const Qf=new WeakMap;class Zf{constructor(e){this.openDragLock=null,this.isDragging=!1,this.currentDirection=null,this.originPoint={x:0,y:0},this.constraints=!1,this.hasMutatedConstraints=!1,this.elastic={x:{min:0,max:0},y:{min:0,max:0}},this.latestPointerEvent=null,this.latestPanInfo=null,this.visualElement=e}start(e,{snapToCursor:t=!1,distanceThreshold:n}={}){const{presenceContext:r}=this.visualElement;if(r&&!1===r.isPresent)return;const{dragSnapToOrigin:i}=this.getProps();this.panSession=new If(e,{onSessionStart:e=>{const{dragSnapToOrigin:n}=this.getProps();n?this.pauseAnimation():this.stopAnimation(),t&&this.snapToCursor(Pf(e).point)},onStart:(e,t)=>{const{drag:n,dragPropagation:r,onDragStart:i}=this.getProps();if(n&&!r&&(this.openDragLock&&this.openDragLock(),this.openDragLock="x"===(a=n)||"y"===a?ih[a]?null:(ih[a]=!0,()=>{ih[a]=!1}):ih.x||ih.y?null:(ih.x=ih.y=!0,()=>{ih.x=ih.y=!1}),!this.openDragLock))return;var a;this.latestPointerEvent=e,this.latestPanInfo=t,this.isDragging=!0,this.currentDirection=null,this.resolveConstraints(),this.visualElement.projection&&(this.visualElement.projection.isAnimationBlocked=!0,this.visualElement.projection.target=void 0),Of(e=>{let t=this.getAxisMotionValue(e).get()||0;if(Du.test(t)){const{projection:n}=this.visualElement;if(n&&n.layout){const r=n.layout.layoutBox[e];if(r){t=Mf(r)*(parseFloat(t)/100)}}}this.originPoint[e]=t}),i&&cu.postRender(()=>i(e,t)),tf(this.visualElement,"transform");const{animationState:o}=this.visualElement;o&&o.setActive("whileDrag",!0)},onMove:(e,t)=>{this.latestPointerEvent=e,this.latestPanInfo=t;const{dragPropagation:n,dragDirectionLock:r,onDirectionLock:i,onDrag:a}=this.getProps();if(!n&&!this.openDragLock)return;const{offset:o}=t;if(r&&null===this.currentDirection)return this.currentDirection=function(e,t=10){let n=null;Math.abs(e.y)>t?n="y":Math.abs(e.x)>t&&(n="x");return n}(o),void(null!==this.currentDirection&&i&&i(this.currentDirection));this.updateAxis("x",t.point,o),this.updateAxis("y",t.point,o),this.visualElement.render(),a&&a(e,t)},onSessionEnd:(e,t)=>{this.latestPointerEvent=e,this.latestPanInfo=t,this.stop(e,t),this.latestPointerEvent=null,this.latestPanInfo=null},resumeAnimation:()=>Of(e=>"paused"===this.getAnimationState(e)&&this.getAxisMotionValue(e).animation?.play())},{transformPagePoint:this.visualElement.getTransformPagePoint(),dragSnapToOrigin:i,distanceThreshold:n,contextWindow:Lf(this.visualElement)})}stop(e,t){const n=e||this.latestPointerEvent,r=t||this.latestPanInfo,i=this.isDragging;if(this.cancel(),!i||!r||!n)return;const{velocity:a}=r;this.startAnimation(a);const{onDragEnd:o}=this.getProps();o&&cu.postRender(()=>o(n,r))}cancel(){this.isDragging=!1;const{projection:e,animationState:t}=this.visualElement;e&&(e.isAnimationBlocked=!1),this.panSession&&this.panSession.end(),this.panSession=void 0;const{dragPropagation:n}=this.getProps();!n&&this.openDragLock&&(this.openDragLock(),this.openDragLock=null),t&&t.setActive("whileDrag",!1)}updateAxis(e,t,n){const{drag:r}=this.getProps();if(!n||!Jf(e,r,this.currentDirection))return;const i=this.getAxisMotionValue(e);let a=this.originPoint[e]+n[e];this.constraints&&this.constraints[e]&&(a=function(e,{min:t,max:n},r){return void 0!==t&&e<t?e=r?Ju(t,e,r.min):Math.max(e,t):void 0!==n&&e>n&&(e=r?Ju(n,e,r.max):Math.min(e,n)),e}(a,this.constraints[e],this.elastic[e])),i.set(a)}resolveConstraints(){const{dragConstraints:e,dragElastic:t}=this.getProps(),n=this.visualElement.projection&&!this.visualElement.projection.layout?this.visualElement.projection.measure(!1):this.visualElement.projection?.layout,r=this.constraints;e&&pp(e)?this.constraints||(this.constraints=this.resolveRefConstraints()):this.constraints=!(!e||!n)&&function(e,{top:t,left:n,bottom:r,right:i}){return{x:Hf(e.x,n,i),y:Hf(e.y,t,r)}}(n.layoutBox,e),this.elastic=function(e=Xf){return!1===e?e=0:!0===e&&(e=Xf),{x:Gf(e,"left","right"),y:Gf(e,"top","bottom")}}(t),r!==this.constraints&&n&&this.constraints&&!this.hasMutatedConstraints&&Of(e=>{!1!==this.constraints&&this.getAxisMotionValue(e)&&(this.constraints[e]=function(e,t){const n={};return void 0!==t.min&&(n.min=t.min-e.min),void 0!==t.max&&(n.max=t.max-e.min),n}(n.layoutBox[e],this.constraints[e]))})}resolveRefConstraints(){const{dragConstraints:e,onMeasureDragConstraints:t}=this.getProps();if(!e||!pp(e))return!1;const n=e.current,{projection:r}=this.visualElement;if(!r||!r.layout)return!1;const i=function(e,t,n){const r=Np(e,n),{scroll:i}=t;return i&&(Dp(r.x,i.offset.x),Dp(r.y,i.offset.y)),r}(n,r.root,this.visualElement.getTransformPagePoint());let a=function(e,t){return{x:qf(e.x,t.x),y:qf(e.y,t.y)}}(r.layout.layoutBox,i);if(t){const e=t(function({x:e,y:t}){return{top:t.min,right:e.max,bottom:t.max,left:e.min}}(a));this.hasMutatedConstraints=!!e,e&&(a=_p(e))}return a}startAnimation(e){const{drag:t,dragMomentum:n,dragElastic:r,dragTransition:i,dragSnapToOrigin:a,onDragTransitionEnd:o}=this.getProps(),s=this.constraints||{},l=Of(o=>{if(!Jf(o,t,this.currentDirection))return;let l=s&&s[o]||{};a&&(l={min:0,max:0});const u=r?200:1e6,c=r?40:1e7,d={type:"inertia",velocity:n?e[o]:0,bounceStiffness:u,bounceDamping:c,timeConstant:750,restDelta:1,restSpeed:10,...i,...l};return this.startAxisValueAnimation(o,d)});return Promise.all(l).then(o)}startAxisValueAnimation(e,t){const n=this.getAxisMotionValue(e);return tf(this.visualElement,e),n.start(uf(e,n,0,t,this.visualElement,!1))}stopAnimation(){Of(e=>this.getAxisMotionValue(e).stop())}pauseAnimation(){Of(e=>this.getAxisMotionValue(e).animation?.pause())}getAnimationState(e){return this.getAxisMotionValue(e).animation?.state}getAxisMotionValue(e){const t=`_drag${e.toUpperCase()}`,n=this.visualElement.getProps(),r=n[t];return r||this.visualElement.getValue(e,(n.initial?n.initial[e]:void 0)||0)}snapToCursor(e){Of(t=>{const{drag:n}=this.getProps();if(!Jf(t,n,this.currentDirection))return;const{projection:r}=this.visualElement,i=this.getAxisMotionValue(t);if(r&&r.layout){const{min:n,max:a}=r.layout.layoutBox[t];i.set(e[t]-Ju(n,a,.5))}})}scalePositionWithinConstraints(){if(!this.visualElement.current)return;const{drag:e,dragConstraints:t}=this.getProps(),{projection:n}=this.visualElement;if(!pp(t)||!n||!this.constraints)return;this.stopAnimation();const r={x:0,y:0};Of(e=>{const t=this.getAxisMotionValue(e);if(t&&!1!==this.constraints){const n=t.get();r[e]=function(e,t){let n=.5;const r=Mf(e),i=Mf(t);return i>r?n=Fl(t.min,t.max-r,e.min):r>i&&(n=Fl(e.min,e.max-i,t.min)),zl(0,1,n)}({min:n,max:n},this.constraints[e])}});const{transformTemplate:i}=this.visualElement.getProps();this.visualElement.current.style.transform=i?i({},""):"none",n.root&&n.root.updateScroll(),n.updateLayout(),this.resolveConstraints(),Of(t=>{if(!Jf(t,e,null))return;const n=this.getAxisMotionValue(t),{min:i,max:a}=this.constraints[t];n.set(Ju(i,a,r[t]))})}addListeners(){if(!this.visualElement.current)return;Qf.set(this.visualElement,this);const e=Ef(this.visualElement.current,"pointerdown",e=>{const{drag:t,dragListener:n=!0}=this.getProps();t&&n&&this.start(e)}),t=()=>{const{dragConstraints:e}=this.getProps();pp(e)&&e.current&&(this.constraints=this.resolveRefConstraints())},{projection:n}=this.visualElement,r=n.addEventListener("measure",t);n&&!n.layout&&(n.root&&n.root.updateScroll(),n.updateLayout()),cu.read(t);const i=Tf(window,"resize",()=>this.scalePositionWithinConstraints()),a=n.addEventListener("didUpdate",({delta:e,hasLayoutChanged:t})=>{this.isDragging&&t&&(Of(t=>{const n=this.getAxisMotionValue(t);n&&(this.originPoint[t]+=e[t].translate,n.set(n.get()+e[t].translate))}),this.visualElement.render())});return()=>{i(),e(),r(),a&&a()}}getProps(){const e=this.visualElement.getProps(),{drag:t=!1,dragDirectionLock:n=!1,dragPropagation:r=!1,dragConstraints:i=!1,dragElastic:a=Xf,dragMomentum:o=!0}=e;return{...e,drag:t,dragDirectionLock:n,dragPropagation:r,dragConstraints:i,dragElastic:a,dragMomentum:o}}}function Jf(e,t,n){return!(!0!==t&&t!==e||null!==n&&n!==e)}const em=e=>(t,n)=>{e&&cu.postRender(()=>e(t,n))};const tm={hasAnimatedSinceResize:!0,hasEverUpdated:!1};let nm=!1;class rm extends h.Component{componentDidMount(){const{visualElement:e,layoutGroup:t,switchLayoutGroup:n,layoutId:r}=this.props,{projection:i}=e;i&&(t.group&&t.group.add(i),n&&n.register&&r&&n.register(i),nm&&i.root.didUpdate(),i.addEventListener("animationComplete",()=>{this.safeToRemove()}),i.setOptions({...i.options,onExitComplete:()=>this.safeToRemove()})),tm.hasEverUpdated=!0}getSnapshotBeforeUpdate(e){const{layoutDependency:t,visualElement:n,drag:r,isPresent:i}=this.props,{projection:a}=n;return a?(a.isPresent=i,nm=!0,r||e.layoutDependency!==t||void 0===t||e.isPresent!==i?a.willUpdate():this.safeToRemove(),e.isPresent!==i&&(i?a.promote():a.relegate()||cu.postRender(()=>{const e=a.getStack();e&&e.members.length||this.safeToRemove()})),null):null}componentDidUpdate(){const{projection:e}=this.props.visualElement;e&&(e.root.didUpdate(),rh.postRender(()=>{!e.currentAnimation&&e.isLead()&&this.safeToRemove()}))}componentWillUnmount(){const{visualElement:e,layoutGroup:t,switchLayoutGroup:n}=this.props,{projection:r}=e;nm=!0,r&&(r.scheduleCheckAfterUnmount(),t&&t.group&&t.group.remove(r),n&&n.deregister&&n.deregister(r))}safeToRemove(){const{safeToRemove:e}=this.props;e&&e()}render(){return null}}function im(e){const[t,n]=function(e=!0){const t=h.useContext(Pl);if(null===t)return[!0,null];const{isPresent:n,onExitComplete:r,register:i}=t,a=h.useId();h.useEffect(()=>{if(e)return i(a)},[e]);const o=h.useCallback(()=>e&&r&&r(a),[a,r,e]);return!n&&r?[!1,o]:[!0]}(),r=h.useContext(jl);return d.jsx(rm,{...e,layoutGroup:r,switchLayoutGroup:h.useContext(yp),isPresent:t,safeToRemove:n})}const am=(e,t)=>e.depth-t.depth;class om{constructor(){this.children=[],this.isDirty=!1}add(e){El(this.children,e),this.isDirty=!0}remove(e){Ml(this.children,e),this.isDirty=!0}forEach(e){this.isDirty&&this.children.sort(am),this.isDirty=!1,this.children.forEach(e)}}const sm=["TopLeft","TopRight","BottomLeft","BottomRight"],lm=sm.length,um=e=>"string"==typeof e?parseFloat(e):e,cm=e=>"number"==typeof e||Ou.test(e);function dm(e,t){return void 0!==e[t]?e[t]:e.borderRadius}const hm=fm(0,.5,eu),pm=fm(.5,.95,Ll);function fm(e,t,n){return r=>r<e?0:r>t?1:n(Fl(e,t,r))}function mm(e,t){e.min=t.min,e.max=t.max}function gm(e,t){mm(e.x,t.x),mm(e.y,t.y)}function ym(e,t){e.translate=t.translate,e.scale=t.scale,e.originPoint=t.originPoint,e.origin=t.origin}function xm(e,t,n,r,i){return e=Ep(e-=t,1/n,r),void 0!==i&&(e=Ep(e,1/i,r)),e}function vm(e,t,[n,r,i],a,o){!function(e,t=0,n=1,r=.5,i,a=e,o=e){Du.test(t)&&(t=parseFloat(t),t=Ju(o.min,o.max,t/100)-o.min);if("number"!=typeof t)return;let s=Ju(a.min,a.max,r);e===a&&(s-=t),e.min=xm(e.min,t,n,s,i),e.max=xm(e.max,t,n,s,i)}(e,t[n],t[r],t[i],t.scale,a,o)}const bm=["x","scaleX","originX"],wm=["y","scaleY","originY"];function km(e,t,n,r){vm(e.x,t,bm,n?n.x:void 0,r?r.x:void 0),vm(e.y,t,wm,n?n.y:void 0,r?r.y:void 0)}function _m(e){return 0===e.translate&&1===e.scale}function Sm(e){return _m(e.x)&&_m(e.y)}function jm(e,t){return e.min===t.min&&e.max===t.max}function Cm(e,t){return Math.round(e.min)===Math.round(t.min)&&Math.round(e.max)===Math.round(t.max)}function Tm(e,t){return Cm(e.x,t.x)&&Cm(e.y,t.y)}function Pm(e){return Mf(e.x)/Mf(e.y)}function Em(e,t){return e.translate===t.translate&&e.scale===t.scale&&e.originPoint===t.originPoint}class Mm{constructor(){this.members=[]}add(e){El(this.members,e),e.scheduleRender()}remove(e){if(Ml(this.members,e),e===this.prevLead&&(this.prevLead=void 0),e===this.lead){const e=this.members[this.members.length-1];e&&this.promote(e)}}relegate(e){const t=this.members.findIndex(t=>e===t);if(0===t)return!1;let n;for(let r=t;r>=0;r--){const e=this.members[r];if(!1!==e.isPresent){n=e;break}}return!!n&&(this.promote(n),!0)}promote(e,t){const n=this.lead;if(e!==n&&(this.prevLead=n,this.lead=e,e.show(),n)){n.instance&&n.scheduleRender(),e.scheduleRender(),e.resumeFrom=n,t&&(e.resumeFrom.preserveOpacity=!0),n.snapshot&&(e.snapshot=n.snapshot,e.snapshot.latestValues=n.animationValues||n.latestValues),e.root&&e.root.isUpdating&&(e.isLayoutDirty=!0);const{crossfade:r}=e.options;!1===r&&n.hide()}}exitAnimationComplete(){this.members.forEach(e=>{const{options:t,resumingFrom:n}=e;t.onExitComplete&&t.onExitComplete(),n&&n.options.onExitComplete&&n.options.onExitComplete()})}scheduleRender(){this.members.forEach(e=>{e.instance&&e.scheduleRender(!1)})}removeLeadSnapshot(){this.lead&&this.lead.snapshot&&(this.lead.snapshot=void 0)}}const zm=["","X","Y","Z"];let Am=0;function Rm(e,t,n,r){const{latestValues:i}=t;i[e]&&(n[e]=i[e],t.setStaticValue(e,0),r&&(r[e]=0))}function $m(e){if(e.hasCheckedOptimisedAppear=!0,e.root===e)return;const{visualElement:t}=e.options;if(!t)return;const n=nf(t);if(window.MotionHasOptimisedAnimation(n,"transform")){const{layout:t,layoutId:r}=e.options;window.MotionCancelOptimisedAnimation(n,"transform",cu,!(t||r))}const{parent:r}=e;r&&!r.hasCheckedOptimisedAppear&&$m(r)}function Dm({attachResizeListener:e,defaultParent:t,measureScroll:n,checkIsScrollRoot:r,resetTransform:i}){return class{constructor(e={},n=t?.()){this.id=Am++,this.animationId=0,this.animationCommitId=0,this.children=new Set,this.options={},this.isTreeAnimating=!1,this.isAnimationBlocked=!1,this.isLayoutDirty=!1,this.isProjectionDirty=!1,this.isSharedProjectionDirty=!1,this.isTransformDirty=!1,this.updateManuallyBlocked=!1,this.updateBlockedByResize=!1,this.isUpdating=!1,this.isSVG=!1,this.needsReset=!1,this.shouldResetTransform=!1,this.hasCheckedOptimisedAppear=!1,this.treeScale={x:1,y:1},this.eventHandlers=new Map,this.hasTreeAnimated=!1,this.layoutVersion=0,this.updateScheduled=!1,this.scheduleUpdate=()=>this.update(),this.projectionUpdateScheduled=!1,this.checkUpdateFailed=()=>{this.isUpdating&&(this.isUpdating=!1,this.clearAllSnapshots())},this.updateProjection=()=>{this.projectionUpdateScheduled=!1,this.nodes.forEach(Nm),this.nodes.forEach(Ym),this.nodes.forEach(Hm),this.nodes.forEach(Im)},this.resolvedRelativeTargetAt=0,this.linkedParentVersion=0,this.hasProjected=!1,this.isVisible=!0,this.animationProgress=0,this.sharedNodes=new Map,this.latestValues=e,this.root=n?n.root||n:this,this.path=n?[...n.path,n]:[],this.parent=n,this.depth=n?n.depth+1:0;for(let t=0;t<this.path.length;t++)this.path[t].shouldResetTransform=!0;this.root===this&&(this.nodes=new om)}addEventListener(e,t){return this.eventHandlers.has(e)||this.eventHandlers.set(e,new Vl),this.eventHandlers.get(e).add(t)}notifyListeners(e,...t){const n=this.eventHandlers.get(e);n&&n.notify(...t)}hasListeners(e){return this.eventHandlers.has(e)}mount(t){if(this.instance)return;var n;this.isSVG=gh(t)&&!(gh(n=t)&&"svg"===n.tagName),this.instance=t;const{layoutId:r,layout:i,visualElement:a}=this.options;if(a&&!a.current&&a.mount(t),this.root.nodes.add(this),this.parent&&this.parent.children.add(this),this.root.hasTreeAnimated&&(i||r)&&(this.isLayoutDirty=!0),e){let n,r=0;const i=()=>this.root.updateBlockedByResize=!1;cu.read(()=>{r=window.innerWidth}),e(t,()=>{const e=window.innerWidth;e!==r&&(r=e,this.root.updateBlockedByResize=!0,n&&n(),n=function(e,t){const n=gu.now(),r=({timestamp:i})=>{const a=i-n;a>=t&&(du(r),e(a-t))};return cu.setup(r,!0),()=>du(r)}(i,250),tm.hasAnimatedSinceResize&&(tm.hasAnimatedSinceResize=!1,this.nodes.forEach(Um)))})}r&&this.root.registerSharedNode(r,this),!1!==this.options.animate&&a&&(r||i)&&this.addEventListener("didUpdate",({delta:e,hasLayoutChanged:t,hasRelativeLayoutChanged:n,layout:r})=>{if(this.isTreeAnimationBlocked())return this.target=void 0,void(this.relativeTarget=void 0);const i=this.options.transition||a.getDefaultTransition()||Zm,{onLayoutAnimationStart:o,onLayoutAnimationComplete:s}=a.getProps(),l=!this.targetLayout||!Tm(this.targetLayout,r),u=!t&&n;if(this.options.layoutRoot||this.resumeFrom||u||t&&(l||!this.currentAnimation)){this.resumeFrom&&(this.resumingFrom=this.resumeFrom,this.resumingFrom.resumingFrom=void 0);const t={...Ld(i,"layout"),onPlay:o,onComplete:s};(a.shouldReduceMotion||this.options.layoutRoot)&&(t.delay=0,t.type=!1),this.startAnimation(t),this.setAnimationOrigin(e,u)}else t||Um(this),this.isLead()&&this.options.onExitComplete&&this.options.onExitComplete();this.targetLayout=r})}unmount(){this.options.layoutId&&this.willUpdate(),this.root.nodes.remove(this);const e=this.getStack();e&&e.remove(this),this.parent&&this.parent.children.delete(this),this.instance=void 0,this.eventHandlers.clear(),du(this.updateProjection)}blockUpdate(){this.updateManuallyBlocked=!0}unblockUpdate(){this.updateManuallyBlocked=!1}isUpdateBlocked(){return this.updateManuallyBlocked||this.updateBlockedByResize}isTreeAnimationBlocked(){return this.isAnimationBlocked||this.parent&&this.parent.isTreeAnimationBlocked()||!1}startUpdate(){this.isUpdateBlocked()||(this.isUpdating=!0,this.nodes&&this.nodes.forEach(qm),this.animationId++)}getTransformTemplate(){const{visualElement:e}=this.options;return e&&e.getProps().transformTemplate}willUpdate(e=!0){if(this.root.hasTreeAnimated=!0,this.root.isUpdateBlocked())return void(this.options.onExitComplete&&this.options.onExitComplete());if(window.MotionCancelOptimisedAnimation&&!this.hasCheckedOptimisedAppear&&$m(this),!this.root.isUpdating&&this.root.startUpdate(),this.isLayoutDirty)return;this.isLayoutDirty=!0;for(let i=0;i<this.path.length;i++){const e=this.path[i];e.shouldResetTransform=!0,e.updateScroll("snapshot"),e.options.layoutRoot&&e.willUpdate(!1)}const{layoutId:t,layout:n}=this.options;if(void 0===t&&!n)return;const r=this.getTransformTemplate();this.prevTransformTemplateValue=r?r(this.latestValues,""):void 0,this.updateSnapshot(),e&&this.notifyListeners("willUpdate")}update(){this.updateScheduled=!1;if(this.isUpdateBlocked())return this.unblockUpdate(),this.clearAllSnapshots(),void this.nodes.forEach(Vm);if(this.animationId<=this.animationCommitId)return void this.nodes.forEach(Bm);this.animationCommitId=this.animationId,this.isUpdating?(this.isUpdating=!1,this.nodes.forEach(Wm),this.nodes.forEach(Om),this.nodes.forEach(Lm)):this.nodes.forEach(Bm),this.clearAllSnapshots();const e=gu.now();hu.delta=zl(0,1e3/60,e-hu.timestamp),hu.timestamp=e,hu.isProcessing=!0,pu.update.process(hu),pu.preRender.process(hu),pu.render.process(hu),hu.isProcessing=!1}didUpdate(){this.updateScheduled||(this.updateScheduled=!0,rh.read(this.scheduleUpdate))}clearAllSnapshots(){this.nodes.forEach(Fm),this.sharedNodes.forEach(Xm)}scheduleUpdateProjection(){this.projectionUpdateScheduled||(this.projectionUpdateScheduled=!0,cu.preRender(this.updateProjection,!1,!0))}scheduleCheckAfterUnmount(){cu.postRender(()=>{this.isLayoutDirty?this.root.didUpdate():this.root.checkUpdateFailed()})}updateSnapshot(){!this.snapshot&&this.instance&&(this.snapshot=this.measure(),!this.snapshot||Mf(this.snapshot.measuredBox.x)||Mf(this.snapshot.measuredBox.y)||(this.snapshot=void 0))}updateLayout(){if(!this.instance)return;if(this.updateScroll(),!(this.options.alwaysMeasureLayout&&this.isLead()||this.isLayoutDirty))return;if(this.resumeFrom&&!this.resumeFrom.instance)for(let n=0;n<this.path.length;n++){this.path[n].updateScroll()}const e=this.layout;this.layout=this.measure(!1),this.layoutVersion++,this.layoutCorrected={x:{min:0,max:0},y:{min:0,max:0}},this.isLayoutDirty=!1,this.projectionDelta=void 0,this.notifyListeners("measure",this.layout.layoutBox);const{visualElement:t}=this.options;t&&t.notify("LayoutMeasure",this.layout.layoutBox,e?e.layoutBox:void 0)}updateScroll(e="measure"){let t=Boolean(this.options.layoutScroll&&this.instance);if(this.scroll&&this.scroll.animationId===this.root.animationId&&this.scroll.phase===e&&(t=!1),t&&this.instance){const t=r(this.instance);this.scroll={animationId:this.root.animationId,phase:e,isRoot:t,offset:n(this.instance),wasRoot:this.scroll?this.scroll.isRoot:t}}}resetTransform(){if(!i)return;const e=this.isLayoutDirty||this.shouldResetTransform||this.options.alwaysMeasureLayout,t=this.projectionDelta&&!Sm(this.projectionDelta),n=this.getTransformTemplate(),r=n?n(this.latestValues,""):void 0,a=r!==this.prevTransformTemplateValue;e&&this.instance&&(t||Cp(this.latestValues)||a)&&(i(this.instance,r),this.shouldResetTransform=!1,this.scheduleRender())}measure(e=!0){const t=this.measurePageBox();let n=this.removeElementScroll(t);var r;return e&&(n=this.removeTransform(n)),tg((r=n).x),tg(r.y),{animationId:this.root.animationId,measuredBox:t,layoutBox:n,latestValues:{},source:this.id}}measurePageBox(){const{visualElement:e}=this.options;if(!e)return{x:{min:0,max:0},y:{min:0,max:0}};const t=e.measureViewportBox();if(!(this.scroll?.wasRoot||this.path.some(rg))){const{scroll:e}=this.root;e&&(Dp(t.x,e.offset.x),Dp(t.y,e.offset.y))}return t}removeElementScroll(e){const t={x:{min:0,max:0},y:{min:0,max:0}};if(gm(t,e),this.scroll?.wasRoot)return t;for(let n=0;n<this.path.length;n++){const r=this.path[n],{scroll:i,options:a}=r;r!==this.root&&i&&a.layoutScroll&&(i.wasRoot&&gm(t,e),Dp(t.x,i.offset.x),Dp(t.y,i.offset.y))}return t}applyTransform(e,t=!1){const n={x:{min:0,max:0},y:{min:0,max:0}};gm(n,e);for(let r=0;r<this.path.length;r++){const e=this.path[r];!t&&e.options.layoutScroll&&e.scroll&&e!==e.root&&Lp(n,{x:-e.scroll.offset.x,y:-e.scroll.offset.y}),Cp(e.latestValues)&&Lp(n,e.latestValues)}return Cp(this.latestValues)&&Lp(n,this.latestValues),n}removeTransform(e){const t={x:{min:0,max:0},y:{min:0,max:0}};gm(t,e);for(let n=0;n<this.path.length;n++){const e=this.path[n];if(!e.instance)continue;if(!Cp(e.latestValues))continue;jp(e.latestValues)&&e.updateSnapshot();const r=Ip();gm(r,e.measurePageBox()),km(t,e.latestValues,e.snapshot?e.snapshot.layoutBox:void 0,r)}return Cp(this.latestValues)&&km(t,this.latestValues),t}setTargetDelta(e){this.targetDelta=e,this.root.scheduleUpdateProjection(),this.isProjectionDirty=!0}setOptions(e){this.options={...this.options,...e,crossfade:void 0===e.crossfade||e.crossfade}}clearMeasurements(){this.scroll=void 0,this.layout=void 0,this.snapshot=void 0,this.prevTransformTemplateValue=void 0,this.targetDelta=void 0,this.target=void 0,this.isLayoutDirty=!1}forceRelativeParentToResolveTarget(){this.relativeParent&&this.relativeParent.resolvedRelativeTargetAt!==hu.timestamp&&this.relativeParent.resolveTargetDelta(!0)}resolveTargetDelta(e=!1){const t=this.getLead();this.isProjectionDirty||(this.isProjectionDirty=t.isProjectionDirty),this.isTransformDirty||(this.isTransformDirty=t.isTransformDirty),this.isSharedProjectionDirty||(this.isSharedProjectionDirty=t.isSharedProjectionDirty);const n=Boolean(this.resumingFrom)||this!==t;if(!(e||n&&this.isSharedProjectionDirty||this.isProjectionDirty||this.parent?.isProjectionDirty||this.attemptToResolveRelativeTarget||this.root.updateBlockedByResize))return;const{layout:r,layoutId:i}=this.options;if(!this.layout||!r&&!i)return;this.resolvedRelativeTargetAt=hu.timestamp;const a=this.getClosestProjectingParent();var o,s,l;(a&&this.linkedParentVersion!==a.layoutVersion&&!a.options.layoutRoot&&this.removeRelativeTarget(),this.targetDelta||this.relativeTarget||(a&&a.layout?this.createRelativeTarget(a,this.layout.layoutBox,a.layout.layoutBox):this.removeRelativeTarget()),this.relativeTarget||this.targetDelta)&&(this.target||(this.target={x:{min:0,max:0},y:{min:0,max:0}},this.targetWithTransforms={x:{min:0,max:0},y:{min:0,max:0}}),this.relativeTarget&&this.relativeTargetOrigin&&this.relativeParent&&this.relativeParent.target?(this.forceRelativeParentToResolveTarget(),o=this.target,s=this.relativeTarget,l=this.relativeParent.target,Rf(o.x,s.x,l.x),Rf(o.y,s.y,l.y)):this.targetDelta?(Boolean(this.resumingFrom)?this.target=this.applyTransform(this.layout.layoutBox):gm(this.target,this.layout.layoutBox),Ap(this.target,this.targetDelta)):gm(this.target,this.layout.layoutBox),this.attemptToResolveRelativeTarget&&(this.attemptToResolveRelativeTarget=!1,a&&Boolean(a.resumingFrom)===Boolean(this.resumingFrom)&&!a.options.layoutScroll&&a.target&&1!==this.animationProgress?this.createRelativeTarget(a,this.target,a.target):this.relativeParent=this.relativeTarget=void 0))}getClosestProjectingParent(){if(this.parent&&!jp(this.parent.latestValues)&&!Tp(this.parent.latestValues))return this.parent.isProjecting()?this.parent:this.parent.getClosestProjectingParent()}isProjecting(){return Boolean((this.relativeTarget||this.targetDelta||this.options.layoutRoot)&&this.layout)}createRelativeTarget(e,t,n){this.relativeParent=e,this.linkedParentVersion=e.layoutVersion,this.forceRelativeParentToResolveTarget(),this.relativeTarget={x:{min:0,max:0},y:{min:0,max:0}},this.relativeTargetOrigin={x:{min:0,max:0},y:{min:0,max:0}},Df(this.relativeTargetOrigin,t,n),gm(this.relativeTarget,this.relativeTargetOrigin)}removeRelativeTarget(){this.relativeParent=this.relativeTarget=void 0}calcProjection(){const e=this.getLead(),t=Boolean(this.resumingFrom)||this!==e;let n=!0;if((this.isProjectionDirty||this.parent?.isProjectionDirty)&&(n=!1),t&&(this.isSharedProjectionDirty||this.isTransformDirty)&&(n=!1),this.resolvedRelativeTargetAt===hu.timestamp&&(n=!1),n)return;const{layout:r,layoutId:i}=this.options;if(this.isTreeAnimating=Boolean(this.parent&&this.parent.isTreeAnimating||this.currentAnimation||this.pendingAnimation),this.isTreeAnimating||(this.targetDelta=this.relativeTarget=void 0),!this.layout||!r&&!i)return;gm(this.layoutCorrected,this.layout.layoutBox);const a=this.treeScale.x,o=this.treeScale.y;!function(e,t,n,r=!1){const i=n.length;if(!i)return;let a,o;t.x=t.y=1;for(let s=0;s<i;s++){a=n[s],o=a.projectionDelta;const{visualElement:i}=a.options;i&&i.props.style&&"contents"===i.props.style.display||(r&&a.options.layoutScroll&&a.scroll&&a!==a.root&&Lp(e,{x:-a.scroll.offset.x,y:-a.scroll.offset.y}),o&&(t.x*=o.x.scale,t.y*=o.y.scale,Ap(e,o)),r&&Cp(a.latestValues)&&Lp(e,a.latestValues))}t.x<$p&&t.x>Rp&&(t.x=1),t.y<$p&&t.y>Rp&&(t.y=1)}(this.layoutCorrected,this.treeScale,this.path,t),!e.layout||e.target||1===this.treeScale.x&&1===this.treeScale.y||(e.target=e.layout.layoutBox,e.targetWithTransforms={x:{min:0,max:0},y:{min:0,max:0}});const{target:s}=e;s?(this.projectionDelta&&this.prevProjectionDelta?(ym(this.prevProjectionDelta.x,this.projectionDelta.x),ym(this.prevProjectionDelta.y,this.projectionDelta.y)):this.createProjectionDeltas(),Af(this.projectionDelta,this.layoutCorrected,s,this.latestValues),this.treeScale.x===a&&this.treeScale.y===o&&Em(this.projectionDelta.x,this.prevProjectionDelta.x)&&Em(this.projectionDelta.y,this.prevProjectionDelta.y)||(this.hasProjected=!0,this.scheduleRender(),this.notifyListeners("projectionUpdate",s))):this.prevProjectionDelta&&(this.createProjectionDeltas(),this.scheduleRender())}hide(){this.isVisible=!1}show(){this.isVisible=!0}scheduleRender(e=!0){if(this.options.visualElement?.scheduleRender(),e){const e=this.getStack();e&&e.scheduleRender()}this.resumingFrom&&!this.resumingFrom.instance&&(this.resumingFrom=void 0)}createProjectionDeltas(){this.prevProjectionDelta={x:{translate:0,scale:1,origin:0,originPoint:0},y:{translate:0,scale:1,origin:0,originPoint:0}},this.projectionDelta={x:{translate:0,scale:1,origin:0,originPoint:0},y:{translate:0,scale:1,origin:0,originPoint:0}},this.projectionDeltaWithTransform={x:{translate:0,scale:1,origin:0,originPoint:0},y:{translate:0,scale:1,origin:0,originPoint:0}}}setAnimationOrigin(e,t=!1){const n=this.snapshot,r=n?n.latestValues:{},i={...this.latestValues},a={x:{translate:0,scale:1,origin:0,originPoint:0},y:{translate:0,scale:1,origin:0,originPoint:0}};this.relativeParent&&this.relativeParent.options.layoutRoot||(this.relativeTarget=this.relativeTargetOrigin=void 0),this.attemptToResolveRelativeTarget=!t;const o={x:{min:0,max:0},y:{min:0,max:0}},s=(n?n.source:void 0)!==(this.layout?this.layout.source:void 0),l=this.getStack(),u=!l||l.members.length<=1,c=Boolean(s&&!u&&!0===this.options.crossfade&&!this.path.some(Qm));let d;this.animationProgress=0,this.mixTargetDelta=t=>{const n=t/1e3;var l,h,p,f,m,g;Gm(a.x,e.x,n),Gm(a.y,e.y,n),this.setTargetDelta(a),this.relativeTarget&&this.relativeTargetOrigin&&this.layout&&this.relativeParent&&this.relativeParent.layout&&(Df(o,this.layout.layoutBox,this.relativeParent.layout.layoutBox),p=this.relativeTarget,f=this.relativeTargetOrigin,m=o,g=n,Km(p.x,f.x,m.x,g),Km(p.y,f.y,m.y,g),d&&(l=this.relativeTarget,h=d,jm(l.x,h.x)&&jm(l.y,h.y))&&(this.isProjectionDirty=!1),d||(d={x:{min:0,max:0},y:{min:0,max:0}}),gm(d,this.relativeTarget)),s&&(this.animationValues=i,function(e,t,n,r,i,a){i?(e.opacity=Ju(0,n.opacity??1,hm(r)),e.opacityExit=Ju(t.opacity??1,0,pm(r))):a&&(e.opacity=Ju(t.opacity??1,n.opacity??1,r));for(let o=0;o<lm;o++){const i=`border${sm[o]}Radius`;let a=dm(t,i),s=dm(n,i);void 0===a&&void 0===s||(a||(a=0),s||(s=0),0===a||0===s||cm(a)===cm(s)?(e[i]=Math.max(Ju(um(a),um(s),r),0),(Du.test(s)||Du.test(a))&&(e[i]+="%")):e[i]=s)}(t.rotate||n.rotate)&&(e.rotate=Ju(t.rotate||0,n.rotate||0,r))}(i,r,this.latestValues,n,c,u)),this.root.scheduleUpdateProjection(),this.scheduleRender(),this.animationProgress=n},this.mixTargetDelta(this.options.layoutRoot?1e3:0)}startAnimation(e){this.notifyListeners("animationStart"),this.currentAnimation?.stop(),this.resumingFrom?.currentAnimation?.stop(),this.pendingAnimation&&(du(this.pendingAnimation),this.pendingAnimation=void 0),this.pendingAnimation=cu.update(()=>{tm.hasAnimatedSinceResize=!0,this.motionValue||(this.motionValue=nh(0)),this.currentAnimation=function(e,t,n){const r=yh(e)?e:nh(e);return r.start(uf("",r,t,n)),r.animation}(this.motionValue,[0,1e3],{...e,velocity:0,isSync:!0,onUpdate:t=>{this.mixTargetDelta(t),e.onUpdate&&e.onUpdate(t)},onStop:()=>{},onComplete:()=>{e.onComplete&&e.onComplete(),this.completeAnimation()}}),this.resumingFrom&&(this.resumingFrom.currentAnimation=this.currentAnimation),this.pendingAnimation=void 0})}completeAnimation(){this.resumingFrom&&(this.resumingFrom.currentAnimation=void 0,this.resumingFrom.preserveOpacity=void 0);const e=this.getStack();e&&e.exitAnimationComplete(),this.resumingFrom=this.currentAnimation=this.animationValues=void 0,this.notifyListeners("animationComplete")}finishAnimation(){this.currentAnimation&&(this.mixTargetDelta&&this.mixTargetDelta(1e3),this.currentAnimation.stop()),this.completeAnimation()}applyTransformsToTarget(){const e=this.getLead();let{targetWithTransforms:t,target:n,layout:r,latestValues:i}=e;if(t&&n&&r){if(this!==e&&this.layout&&r&&ng(this.options.animationType,this.layout.layoutBox,r.layoutBox)){n=this.target||{x:{min:0,max:0},y:{min:0,max:0}};const t=Mf(this.layout.layoutBox.x);n.x.min=e.target.x.min,n.x.max=n.x.min+t;const r=Mf(this.layout.layoutBox.y);n.y.min=e.target.y.min,n.y.max=n.y.min+r}gm(t,n),Lp(t,i),Af(this.projectionDeltaWithTransform,this.layoutCorrected,t,i)}}registerSharedNode(e,t){this.sharedNodes.has(e)||this.sharedNodes.set(e,new Mm);this.sharedNodes.get(e).add(t);const n=t.options.initialPromotionConfig;t.promote({transition:n?n.transition:void 0,preserveFollowOpacity:n&&n.shouldPreserveFollowOpacity?n.shouldPreserveFollowOpacity(t):void 0})}isLead(){const e=this.getStack();return!e||e.lead===this}getLead(){const{layoutId:e}=this.options;return e&&this.getStack()?.lead||this}getPrevLead(){const{layoutId:e}=this.options;return e?this.getStack()?.prevLead:void 0}getStack(){const{layoutId:e}=this.options;if(e)return this.root.sharedNodes.get(e)}promote({needsReset:e,transition:t,preserveFollowOpacity:n}={}){const r=this.getStack();r&&r.promote(this,n),e&&(this.projectionDelta=void 0,this.needsReset=!0),t&&this.setOptions({transition:t})}relegate(){const e=this.getStack();return!!e&&e.relegate(this)}resetSkewAndRotation(){const{visualElement:e}=this.options;if(!e)return;let t=!1;const{latestValues:n}=e;if((n.z||n.rotate||n.rotateX||n.rotateY||n.rotateZ||n.skewX||n.skewY)&&(t=!0),!t)return;const r={};n.z&&Rm("z",e,r,this.animationValues);for(let i=0;i<zm.length;i++)Rm(`rotate${zm[i]}`,e,r,this.animationValues),Rm(`skew${zm[i]}`,e,r,this.animationValues);e.render();for(const i in r)e.setStaticValue(i,r[i]),this.animationValues&&(this.animationValues[i]=r[i]);e.scheduleRender()}applyProjectionStyles(e,t){if(!this.instance||this.isSVG)return;if(!this.isVisible)return void(e.visibility="hidden");const n=this.getTransformTemplate();if(this.needsReset)return this.needsReset=!1,e.visibility="",e.opacity="",e.pointerEvents=ap(t?.pointerEvents)||"",void(e.transform=n?n(this.latestValues,""):"none");const r=this.getLead();if(!this.projectionDelta||!this.layout||!r.target)return this.options.layoutId&&(e.opacity=void 0!==this.latestValues.opacity?this.latestValues.opacity:1,e.pointerEvents=ap(t?.pointerEvents)||""),void(this.hasProjected&&!Cp(this.latestValues)&&(e.transform=n?n({},""):"none",this.hasProjected=!1));e.visibility="";const i=r.animationValues||r.latestValues;this.applyTransformsToTarget();let a=function(e,t,n){let r="";const i=e.x.translate/t.x,a=e.y.translate/t.y,o=n?.z||0;if((i||a||o)&&(r=`translate3d(${i}px, ${a}px, ${o}px) `),1===t.x&&1===t.y||(r+=`scale(${1/t.x}, ${1/t.y}) `),n){const{transformPerspective:e,rotate:t,rotateX:i,rotateY:a,skewX:o,skewY:s}=n;e&&(r=`perspective(${e}px) ${r}`),t&&(r+=`rotate(${t}deg) `),i&&(r+=`rotateX(${i}deg) `),a&&(r+=`rotateY(${a}deg) `),o&&(r+=`skewX(${o}deg) `),s&&(r+=`skewY(${s}deg) `)}const s=e.x.scale*t.x,l=e.y.scale*t.y;return 1===s&&1===l||(r+=`scale(${s}, ${l})`),r||"none"}(this.projectionDeltaWithTransform,this.treeScale,i);n&&(a=n(i,a)),e.transform=a;const{x:o,y:s}=this.projectionDelta;e.transformOrigin=`${100*o.origin}% ${100*s.origin}% 0`,r.animationValues?e.opacity=r===this?i.opacity??this.latestValues.opacity??1:this.preserveOpacity?this.latestValues.opacity:i.opacityExit:e.opacity=r===this?void 0!==i.opacity?i.opacity:"":void 0!==i.opacityExit?i.opacityExit:0;for(const l in Ih){if(void 0===i[l])continue;const{correct:t,applyTo:n,isCSSVariable:o}=Ih[l],s="none"===a?i[l]:t(i[l],r);if(n){const t=n.length;for(let r=0;r<t;r++)e[n[r]]=s}else o?this.options.visualElement.renderState.vars[l]=s:e[l]=s}this.options.layoutId&&(e.pointerEvents=r===this?ap(t?.pointerEvents)||"":"none")}clearSnapshot(){this.resumeFrom=this.snapshot=void 0}resetTree(){this.root.nodes.forEach(e=>e.currentAnimation?.stop()),this.root.nodes.forEach(Vm),this.root.sharedNodes.clear()}}}function Om(e){e.updateLayout()}function Lm(e){const t=e.resumeFrom?.snapshot||e.snapshot;if(e.isLead()&&e.layout&&t&&e.hasListeners("didUpdate")){const{layoutBox:n,measuredBox:r}=e.layout,{animationType:i}=e.options,a=t.source!==e.layout.source;"size"===i?Of(e=>{const r=a?t.measuredBox[e]:t.layoutBox[e],i=Mf(r);r.min=n[e].min,r.max=r.min+i}):ng(i,t.layoutBox,n)&&Of(r=>{const i=a?t.measuredBox[r]:t.layoutBox[r],o=Mf(n[r]);i.max=i.min+o,e.relativeTarget&&!e.currentAnimation&&(e.isProjectionDirty=!0,e.relativeTarget[r].max=e.relativeTarget[r].min+o)});const o={x:{translate:0,scale:1,origin:0,originPoint:0},y:{translate:0,scale:1,origin:0,originPoint:0}};Af(o,n,t.layoutBox);const s={x:{translate:0,scale:1,origin:0,originPoint:0},y:{translate:0,scale:1,origin:0,originPoint:0}};a?Af(s,e.applyTransform(r,!0),t.measuredBox):Af(s,n,t.layoutBox);const l=!Sm(o);let u=!1;if(!e.resumeFrom){const r=e.getClosestProjectingParent();if(r&&!r.resumeFrom){const{snapshot:i,layout:a}=r;if(i&&a){const o={x:{min:0,max:0},y:{min:0,max:0}};Df(o,t.layoutBox,i.layoutBox);const s={x:{min:0,max:0},y:{min:0,max:0}};Df(s,n,a.layoutBox),Tm(o,s)||(u=!0),r.options.layoutRoot&&(e.relativeTarget=s,e.relativeTargetOrigin=o,e.relativeParent=r)}}}e.notifyListeners("didUpdate",{layout:n,snapshot:t,delta:s,layoutDelta:o,hasLayoutChanged:l,hasRelativeLayoutChanged:u})}else if(e.isLead()){const{onExitComplete:t}=e.options;t&&t()}e.options.transition=void 0}function Nm(e){e.parent&&(e.isProjecting()||(e.isProjectionDirty=e.parent.isProjectionDirty),e.isSharedProjectionDirty||(e.isSharedProjectionDirty=Boolean(e.isProjectionDirty||e.parent.isProjectionDirty||e.parent.isSharedProjectionDirty)),e.isTransformDirty||(e.isTransformDirty=e.parent.isTransformDirty))}function Im(e){e.isProjectionDirty=e.isSharedProjectionDirty=e.isTransformDirty=!1}function Fm(e){e.clearSnapshot()}function Vm(e){e.clearMeasurements()}function Bm(e){e.isLayoutDirty=!1}function Wm(e){const{visualElement:t}=e.options;t&&t.getProps().onBeforeLayoutMeasure&&t.notify("BeforeLayoutMeasure"),e.resetTransform()}function Um(e){e.finishAnimation(),e.targetDelta=e.relativeTarget=e.target=void 0,e.isProjectionDirty=!0}function Ym(e){e.resolveTargetDelta()}function Hm(e){e.calcProjection()}function qm(e){e.resetSkewAndRotation()}function Xm(e){e.removeLeadSnapshot()}function Gm(e,t,n){e.translate=Ju(t.translate,0,n),e.scale=Ju(t.scale,1,n),e.origin=t.origin,e.originPoint=t.originPoint}function Km(e,t,n,r){e.min=Ju(t.min,n.min,r),e.max=Ju(t.max,n.max,r)}function Qm(e){return e.animationValues&&void 0!==e.animationValues.opacityExit}const Zm={duration:.45,ease:[.4,0,.1,1]},Jm=e=>"undefined"!=typeof navigator&&navigator.userAgent&&navigator.userAgent.toLowerCase().includes(e),eg=Jm("applewebkit/")&&!Jm("chrome/")?Math.round:Ll;function tg(e){e.min=eg(e.min),e.max=eg(e.max)}function ng(e,t,n){return"position"===e||"preserve-aspect"===e&&(r=Pm(t),i=Pm(n),a=.2,!(Math.abs(r-i)<=a));var r,i,a}function rg(e){return e!==e.root&&e.scroll?.wasRoot}const ig=Dm({attachResizeListener:(e,t)=>Tf(e,"resize",t),measureScroll:()=>({x:document.documentElement.scrollLeft||document.body.scrollLeft,y:document.documentElement.scrollTop||document.body.scrollTop}),checkIsScrollRoot:()=>!0}),ag={current:void 0},og=Dm({measureScroll:e=>({x:e.scrollLeft,y:e.scrollTop}),defaultParent:()=>{if(!ag.current){const e=new ig({});e.mount(window),e.setOptions({layoutScroll:!0}),ag.current=e}return ag.current},resetTransform:(e,t)=>{e.style.transform=void 0!==t?t:"none"},checkIsScrollRoot:e=>Boolean("fixed"===window.getComputedStyle(e).position)}),sg={pan:{Feature:class extends Sf{constructor(){super(...arguments),this.removePointerDownListener=Ll}onPointerDown(e){this.session=new If(e,this.createPanHandlers(),{transformPagePoint:this.node.getTransformPagePoint(),contextWindow:Lf(this.node)})}createPanHandlers(){const{onPanSessionStart:e,onPanStart:t,onPan:n,onPanEnd:r}=this.node.getProps();return{onSessionStart:em(e),onStart:em(t),onMove:n,onEnd:(e,t)=>{delete this.session,r&&cu.postRender(()=>r(e,t))}}}mount(){this.removePointerDownListener=Ef(this.node.current,"pointerdown",e=>this.onPointerDown(e))}update(){this.session&&this.session.updateHandlers(this.createPanHandlers())}unmount(){this.removePointerDownListener(),this.session&&this.session.end()}}},drag:{Feature:class extends Sf{constructor(e){super(e),this.removeGroupControls=Ll,this.removeListeners=Ll,this.controls=new Zf(e)}mount(){const{dragControls:e}=this.node.getProps();e&&(this.removeGroupControls=e.subscribe(this.controls)),this.removeListeners=this.controls.addListeners()||Ll}unmount(){this.removeGroupControls(),this.removeListeners()}},ProjectionNode:og,MeasureLayout:im}};function lg(e,t,n){const{props:r}=e;e.animationState&&r.whileHover&&e.animationState.setActive("whileHover","Start"===n);const i=r["onHover"+n];i&&cu.postRender(()=>i(t,Pf(t)))}function ug(e,t,n){const{props:r}=e;if(e.current instanceof HTMLButtonElement&&e.current.disabled)return;e.animationState&&r.whileTap&&e.animationState.setActive("whileTap","Start"===n);const i=r["onTap"+("End"===n?"":n)];i&&cu.postRender(()=>i(t,Pf(t)))}const cg=new WeakMap,dg=new WeakMap,hg=e=>{const t=cg.get(e.target);t&&t(e)},pg=e=>{e.forEach(hg)};function fg(e,t,n){const r=function({root:e,...t}){const n=e||document;dg.has(n)||dg.set(n,{});const r=dg.get(n),i=JSON.stringify(t);return r[i]||(r[i]=new IntersectionObserver(pg,{root:e,...t})),r[i]}(t);return cg.set(e,n),r.observe(e),()=>{cg.delete(e),r.unobserve(e)}}const mg={some:0,all:1};const gg=kp({...Cf,...{inView:{Feature:class extends Sf{constructor(){super(...arguments),this.hasEnteredView=!1,this.isInView=!1}startObserver(){this.unmount();const{viewport:e={}}=this.node.getProps(),{root:t,margin:n,amount:r="some",once:i}=e,a={root:t?t.current:void 0,rootMargin:n,threshold:"number"==typeof r?r:mg[r]};return fg(this.node.current,a,e=>{const{isIntersecting:t}=e;if(this.isInView===t)return;if(this.isInView=t,i&&!t&&this.hasEnteredView)return;t&&(this.hasEnteredView=!0),this.node.animationState&&this.node.animationState.setActive("whileInView",t);const{onViewportEnter:n,onViewportLeave:r}=this.node.getProps(),a=t?n:r;a&&a(e)})}mount(){this.startObserver()}update(){if("undefined"==typeof IntersectionObserver)return;const{props:e,prevProps:t}=this.node;["amount","margin","root"].some(function({viewport:e={}},{viewport:t={}}={}){return n=>e[n]!==t[n]}(e,t))&&this.startObserver()}unmount(){}}},tap:{Feature:class extends Sf{mount(){const{current:e}=this.node;e&&(this.unmount=mh(e,(e,t)=>(ug(this.node,t,"Start"),(e,{success:t})=>ug(this.node,e,t?"End":"Cancel")),{useGlobalTarget:this.node.props.globalTapTarget}))}unmount(){}}},focus:{Feature:class extends Sf{constructor(){super(...arguments),this.isActive=!1}onFocus(){let e=!1;try{e=this.node.current.matches(":focus-visible")}catch(rj){e=!0}e&&this.node.animationState&&(this.node.animationState.setActive("whileFocus",!0),this.isActive=!0)}onBlur(){this.isActive&&this.node.animationState&&(this.node.animationState.setActive("whileFocus",!1),this.isActive=!1)}mount(){this.unmount=Il(Tf(this.node.current,"focus",()=>this.onFocus()),Tf(this.node.current,"blur",()=>this.onBlur()))}unmount(){}}},hover:{Feature:class extends Sf{mount(){const{current:e}=this.node;e&&(this.unmount=function(e,t,n={}){const[r,i,a]=oh(e,n),o=e=>{if(!sh(e))return;const{target:n}=e,r=t(n,e);if("function"!=typeof r||!n)return;const a=e=>{sh(e)&&(r(e),n.removeEventListener("pointerleave",a))};n.addEventListener("pointerleave",a,i)};return r.forEach(e=>{e.addEventListener("pointerenter",o,i)}),a}(e,(e,t)=>(lg(this.node,t,"Start"),e=>lg(this.node,e,"End"))))}unmount(){}}}},...sg,...{layout:{ProjectionNode:og,MeasureLayout:im}}},Kp),yg="service_mg1unlr",xg="template_vf01kx9",vg="PCVUv4yz6HvUQu8fE";kn.div`
  margin: 0 20px;
`;const bg=kn.section`
  ${({$tone:e="transparent",theme:t})=>"soft"===e?vn`
        background: linear-gradient(180deg, ${t.colors.bgPrimary} 0%, ${t.colors.bgSecondary} 100%);
        border: 1px solid ${t.colors.borderLight};
        border-radius: ${t.radius.xl};
      `:"ivory"===e?vn`
        background: rgba(255, 255, 255, 0.86);
        border: 1px solid rgba(255, 255, 255, 0.72);
        border-radius: ${t.radius.xl};
      `:vn``}
`,wg=kn.div`
  width: min(100%, ${({$narrow:e})=>e?"840px":"1100px"});
  margin: 0 auto;
`,kg=kn.div`
  ${({theme:e,$tone:t="default",$padding:n="lg"})=>vn`
    background: ${"soft"===t?"linear-gradient(180deg, rgba(255,255,255,0.82), rgba(244,250,246,0.92))":"rgba(255, 255, 255, 0.92)"};
    border: 1px solid ${e.colors.borderLight};
    border-radius: ${e.radius.xl};
    padding: ${"lg"===n?"32px":"24px"};
    box-shadow: ${e.shadows.card};
    backdrop-filter: blur(10px);
    -webkit-backdrop-filter: blur(10px);
  `}
`;kn(kg)``,kn(kg)``,kn(kg)``,kn(kg)``,kn(kg)``,kn(kg)`
  position: relative;
  overflow: hidden;

  &::after {
    content: "";
    position: absolute;
    inset: 0;
    pointer-events: none;
    background: radial-gradient(circle at top right, rgba(122, 160, 143, 0.12), transparent 42%);
  }
`,kn.div`
  text-align: ${({$align:e="left"})=>e};
  max-width: 720px;
  margin: ${({$align:e="left"})=>"center"===e?"0 auto":"0"};
`,kn.span`
  display: inline-block;
  margin-bottom: 12px;
  font-family: ${({theme:e})=>e.fonts.body};
  font-size: 12px;
  font-weight: 600;
  letter-spacing: 0.18em;
  text-transform: uppercase;
  color: ${({theme:e})=>e.colors.textSecondary};
`,kn.h2`
  margin: 0;
  color: ${({theme:e})=>e.colors.textPrimary};
  font-size: clamp(2rem, 3vw, 3rem);
  line-height: 1.08;
`,kn.p`
  margin-top: 16px;
  font-size: 16px;
  line-height: 1.75;
  color: ${({theme:e})=>e.colors.textMuted};
`;const _g=kn(bg)`
  padding: 120px 20px;
  background: linear-gradient(180deg, #f4faf6 0%, #eef6f1 100%);
  opacity: 0.9;
  margin: 0 16px 16px 16px;
  border-radius: 24px;
`,Sg=kn(wg)`
  width: min(100%, 1100px);
`,jg=kn.div`
  max-width: 700px;
  margin-bottom: 70px;
`,Cg=kn.h1`
  font-size: 48px;
  font-weight: 600;
  color: #183c2f;

  span {
    font-style: italic;
    color: #2e6b55;
  }

  @media (max-width: 768px) {
    font-size: 36px;
  }
`,Tg=kn.p`
  font-size: 18px;
  color: #4f6f63;
  margin-top: 16px;
  line-height: 1.7;
`,Pg=kn.div`
  display: grid;
  grid-template-columns: 1.1fr 0.9fr;
  gap: 40px;

  @media (max-width: 900px) {
    grid-template-columns: 1fr;
  }
`,Eg=kn(kg)`
  padding: 36px;
`,Mg=kn.h3`
  font-size: 22px;
  font-weight: 500;
  color: #183c2f;
  margin-bottom: 12px;
`,zg=kn.p`
  font-size: 16px;
  color: #5a746a;
  line-height: 1.6;
  margin-bottom: 16px;
`,Ag=kn.div`
  height: 1px;
  background: linear-gradient(
    to right,
    transparent,
    rgba(0, 0, 0, 0.15),
    transparent
  );
  margin: 24px 0;
`;kn.a`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  margin-top: 28px;

  background: #1f5f4a;
  color: white;
  padding: 16px 32px;
  border-radius: 999px;
  font-size: 16px;
  font-weight: 500;
  text-decoration: none;

  box-shadow: 0 16px 40px rgba(31, 95, 74, 0.35);
  transition: transform 0.25s ease;

  &:hover {
    transform: translateY(-2px);
  }
`;const Rg=kn.form`
  display: flex;
  flex-direction: column;
  gap: 14px;
`,$g=kn.input`
  padding: 14px 18px;
  border-radius: 12px;
  border: 1px solid #d6e3dc;
  font-size: 15px;
  color: black;

  &:focus-visible {
    border-color: #1f5f4a;
    box-shadow: 0 0 0 3px rgba(31, 95, 74, 0.08);
    outline: none;
  }
`,Dg=kn.textarea`
  padding: 14px 18px;
  border-radius: 12px;
  border: 1px solid #d6e3dc;
  font-size: 15px;
  min-height: 120px;
  resize: vertical;
  color: black;

  &:focus-visible {
    border-color: #1f5f4a;
    box-shadow: 0 0 0 3px rgba(31, 95, 74, 0.08);
    outline: none;
  }
`;kn.button`
  margin-top: 12px;
  padding: 14px;
  background: transparent;
  border: 1px solid #1f5f4a;
  color: #1f5f4a;
  border-radius: 999px;
  font-size: 15px;
  cursor: pointer;
  transition: all 0.2s ease;

  &:hover {
    background: #1f5f4a;
    color: white;
  }

  &:disabled {
    opacity: 0.7;
    cursor: not-allowed;
    background: #f0f0f0;
    border-color: #ddd;
    color: #999;
  }
`;const Og=kn.div`
  margin: 10px 0;
  padding: 12px 16px;
  background-color: #e8f5e9;
  color: #2e7d32;
  border-radius: 8px;
  font-size: 14px;
  border-left: 4px solid #4caf50;
  animation: fadeIn 0.3s ease-in-out;
`,Lg=kn.div`
  margin: 10px 0;
  padding: 12px 16px;
  background-color: #ffebee;
  color: #c62828;
  border-radius: 8px;
  font-size: 14px;
  border-left: 4px solid #f44336;
  animation: fadeIn 0.3s ease-in-out;
`,Ng=Sn`${"\n  @keyframes fadeIn {\n    from { opacity: 0; transform: translateY(-10px); }\n    to { opacity: 1; transform: translateY(0); }\n  }\n"}`;function Ig(){h.useEffect(()=>{_l(vg)},[]);const[e,t]=h.useState({name:"",email:"",message:""}),[n,r]=h.useState(!1),[i,a]=h.useState(!1),[o,s]=h.useState(""),l=e=>{const{name:n,value:r}=e.target;t(e=>({...e,[n]:r}))};return d.jsxs(d.Fragment,{children:[d.jsx(Ng,{}),d.jsx(_g,{children:d.jsxs(Sg,{children:[d.jsx(gg.div,{initial:{opacity:0,y:24},animate:{opacity:1,y:0},transition:{duration:1.2,ease:"easeOut"},children:d.jsxs(jg,{children:[d.jsxs(Cg,{children:["Begin a ",d.jsx("span",{children:"Gentler"})," Journey"]}),d.jsx(Tg,{children:"Wellness is personal. If you’re feeling called to slow down, heal, and reconnect with your body — let’s start with a conversation."})]})}),d.jsxs(Pg,{children:[d.jsx(gg.div,{initial:{opacity:0,y:24},animate:{opacity:1,y:0},transition:{duration:1.2,delay:.15,ease:"easeOut"},children:d.jsxs(Eg,{children:[d.jsx(Mg,{children:"Connect Personally"}),d.jsx(zg,{children:"I work closely with a limited number of clients to ensure deep, mindful guidance. The best way to begin is through a personal conversation."}),d.jsx(Ag,{}),d.jsxs(zg,{children:["📧 ",d.jsx("strong",{children:"Email"}),d.jsx("br",{}),d.jsx("a",{href:`mailto:${Ga}`,style:{color:"inherit"},children:Ga})]}),d.jsxs(zg,{children:["📞 ",d.jsx("strong",{children:"Call"}),d.jsx("br",{}),d.jsx("a",{href:Za,style:{color:"inherit"},children:Qa})]}),d.jsxs(zg,{children:["📍 ",d.jsx("strong",{children:"Sessions"}),d.jsx("br",{}),to]}),d.jsxs(zg,{style:{background:"#f4faf6",padding:"14px 18px",borderRadius:"14px",fontSize:"14px",color:"#2e6b55",marginTop:"20px"},children:["✨"," ",d.jsx("strong",{children:"Currently accepting a limited number of new clients"}),d.jsx("br",{}),"to ensure deeply personalised guidance."]}),d.jsx(zg,{style:{fontStyle:"italic",marginTop:"16px"},children:"Prefer speaking instead of typing?"}),d.jsx(Mi,{href:no(Ha),target:"_blank",rel:"noopener noreferrer nofollow",variant:"outline",size:"lg",style:{marginTop:"12px"},children:"🎙️ Send a Voice Note on WhatsApp"})]})}),d.jsx(gg.div,{initial:{opacity:0,y:24},animate:{opacity:1,y:0},transition:{duration:1.2,delay:.3,ease:"easeOut"},children:d.jsxs(Eg,{children:[d.jsx(Mg,{children:"Or Leave a Message"}),d.jsx(zg,{children:"Prefer writing? Share a few words and I’ll personally get back to you."}),d.jsxs(Rg,{onSubmit:async n=>{if(n.preventDefault(),s(""),a(!1),e.name&&e.email&&e.message)if(/\S+@\S+\.\S+/.test(e.email))try{r(!0);const n={from_name:e.name,from_email:e.email,to_email:Ka,message:e.message,reply_to:e.email};await Sl(yg,xg,n),a(!0),t({name:"",email:"",message:""}),window.setTimeout(()=>{a(!1)},5e3)}catch(i){console.error("Failed to send email:",i),s("Failed to send message. Please try again later.")}finally{r(!1)}else s("Please enter a valid email address");else s("Please fill in all fields")},children:[d.jsx($g,{name:"name",value:e.name,onChange:l,placeholder:"Your name","aria-label":"Your name",autoComplete:"name",disabled:n}),d.jsx($g,{name:"email",type:"email",value:e.email,onChange:l,placeholder:"Email address","aria-label":"Email address",autoComplete:"email",disabled:n}),d.jsx(Dg,{name:"message",value:e.message,onChange:l,placeholder:"What are you seeking support with?","aria-label":"What are you seeking support with?",disabled:n}),o&&d.jsx(Lg,{children:o}),i&&d.jsx(Og,{children:"Thank you! Your message has been sent successfully."}),d.jsx(Mi,{type:"submit",disabled:n,variant:"primary",fullWidth:!0,size:"lg",children:n?"Sending...":"Send Message"})]})]})})]})]})})]})}function Fg(){return d.jsx(Ig,{})}kn.div`
  background: ${({theme:e})=>e.colors.white};
  max-width: 1100px;
  margin: 40px auto;
  border-radius: 20px;
  overflow: hidden;
  position: relative;

  box-shadow:
    0 26px 50px rgba(15, 40, 35, 0.22),
    0 0 0 1px rgba(255, 255, 255, 0.9);
`;const Vg=kn.section`
  height: 85vh;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  color: white;
  position: relative;

  background-image: url(${"https://res.cloudinary.com/drjzugsyo/image/upload/v1771263545/shree1_bxjnwa.jpg"});
  background-size: cover;
  background-position: center;
  max-width: 1100px;
  margin: 40px 20px;
  border-radius: 20px;
  overflow: hidden;
  box-shadow:
    0 26px 50px rgba(15, 40, 35, 0.22),
    0 0 0 1px rgba(255, 255, 255, 0.9);
  transform: translateY(-4px);
  &::before {
    content: "";
    position: absolute;
    inset: 0;
    background: rgba(0, 0, 0, 0.45);
  }
`,Bg=kn.div`
  position: relative;
  z-index: 2;
  max-width: 800px;
  padding: 0 20px;
  color: #ffff;

  h1 {
    font-family: "Cormorant Garamond", serif;
    font-size: 3.5rem;
  }

  p {
    margin: 24px 0;
    color: #ffff;
  }
`,Wg=kn.button`
  background: #1f2a24;
  border: 2px solid #1f2a24;
  padding: 12px 32px;
  border-radius: 50px;
  cursor: pointer;
  font-weight: 600;
  color: #ffffff;
  transition: all 0.25s ease;
  text-decoration: none;
  &:hover {
    background: #4a6741;
    border-color: #4a6741;
    transform: translateY(-2px);
  }
`,Ug=kn.section`
  padding: 80px 20px;
  background: ${({$bg:e})=>e||"transparent"};
  text-align: center;
`,Yg=kn.h2`
  font-size: 2.5rem;
`,Hg=kn.p`
  max-width: 600px;
  margin: 16px auto 60px;
`,qg=kn.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 40px;

  @media (max-width: 900px) {
    grid-template-columns: 1fr;
  }
`,Xg=kn.div`
  background: #3f5f58;
  padding: 40px;
  border-radius: 16px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.05);
  color: white;
  p {
    color: #ffff;
  }
`,Gg=kn.div`
  display: flex;
  align-items: center;
  gap: 60px;
  max-width: 1200px;
  margin: 0 auto;

  @media (max-width: 900px) {
    flex-direction: column;
    text-align: center;
  }
`,Kg=kn.div`
  flex: 1;
  height: 500px;
  border-radius: 20px;
  overflow: hidden;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);

  img {
    // width: 100%;
    // height: 100%;
    object-fit: cover;
  }
`,Qg=kn.div`
  flex: 1;
  margin: 0 20px;
  background: rgba(255, 255, 255, 0.75);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);

  border-radius: 24px;
  padding: 48px;

  box-shadow:
    0 10px 40px rgba(15, 40, 35, 0.12),
    inset 0 0 0 1px rgba(255, 255, 255, 0.6);

  h3 {
    color: #4a6741;
    text-transform: uppercase;
    letter-spacing: 2px;
    font-size: 0.85rem;
    margin-bottom: 12px;
  }

  h2 {
    font-family: "Playfair Display", serif;
    font-size: 3rem;
    margin-bottom: 20px;
    line-height: 1.2;
  }

  p {
    color: #444;
    margin-bottom: 20px;
    line-height: 1.8;
  }

  ul {
    list-style: none;
    padding: 0;

    li {
      margin-bottom: 12px;
      font-weight: 600;
      display: flex;
      align-items: center;
      gap: 12px;

      @media (max-width: 900px) {
        justify-content: center;
      }
    }
  }

  @media (max-width: 900px) {
    padding: 32px;
  }
`,Zg=kn.div`
  background: rgba(255, 255, 255, 0.72);
  backdrop-filter: blur(14px);
  -webkit-backdrop-filter: blur(14px);

  border-radius: 28px;
  padding: 56px 48px;
  text-align: center;

  max-width: 520px;
  margin: 0 auto;

  box-shadow:
    0 24px 60px rgba(15, 60, 40, 0.12),
    inset 0 0 0 1px rgba(255, 255, 255, 0.7);

  h3 {
    font-size: 2rem;
    font-family: "Playfair Display", serif;
    color: #1f2a24;
  }

  .price {
    font-size: 3.2rem;
    font-family: "Playfair Display", serif;
    margin: 22px 0;
    color: #4a6741;

    span {
      font-size: 1.4rem;
      vertical-align: top;
      margin-right: 5px;
    }
  }

  ul {
    text-align: left;
    margin: 30px auto;
    max-width: 320px;
    color: #4f5c56;

    li {
      margin-bottom: 12px;
      display: flex;
      align-items: center;
      gap: 10px;
    }
  }
`;kn.div`
  background: #fff;
  padding: 40px;
  border-radius: 16px;
  text-align: center;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.05);
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-5px);
  }

  h3 {
    font-family: "Playfair Display", serif;
    margin: 20px 0 10px;
    font-size: 1.5rem;
  }

  p {
    color: #666;
    line-height: 1.6;
  }
`;const Jg=Tn`
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(-50%);
  }
`;kn.div`
  overflow: hidden;
  width: 100%;
  margin-top: 40px;

  &:hover div {
    animation-play-state: paused;
  }
`,kn.div`
  display: flex;
  gap: 24px;
  // width: max-content;
  max-width: 100%;

  animation: ${Jg} 30s linear infinite;
  will-change: transform;
`;const ey=()=>d.jsxs(Ug,{children:[d.jsx(Yg,{children:"More Than Just a Diet"}),d.jsx(Hg,{children:"I believe food should support both your practice and your lifestyle. My approach blends clinical nutrition, Ayurvedic wisdom, and mindful eating to help you build sustainable habits and lasting balance — without extreme dieting."}),d.jsxs(qg,{children:[d.jsxs(Xg,{children:[d.jsx(ya,{size:36}),d.jsx("h3",{children:"Gut Health & Digestion"}),d.jsx("p",{children:"Support digestion, reduce bloating and improve immunity."})]}),d.jsxs(Xg,{children:[d.jsx(ja,{size:36}),d.jsx("h3",{children:"Sustained Energy"}),d.jsx("p",{children:"Feel steady, balanced energy throughout the day — no crashes."})]}),d.jsxs(Xg,{children:[d.jsx(ka,{size:36}),d.jsx("h3",{children:"Weight Balance"}),d.jsx("p",{children:"Healthy weight loss or weight gain through personalised planning."})]}),d.jsxs(Xg,{children:[d.jsx(ma,{size:36}),d.jsx("h3",{children:"Mindful Eating"}),d.jsx("p",{children:"Develop a calm, positive relationship with food — without guilt."})]})]})]});kn.section`
  width: 100%;
  padding: ${({$compact:e})=>e?"48px 0 0":"120px 0"};
  display: flex;
  justify-content: center;

  @media (max-width: 768px) {
    padding: ${({$compact:e})=>e?"36px 0 0":"80px 0"};
  }
`,kn.div`
  max-width: 1100px;
  width: 100%;
  display: grid;
  grid-template-columns: ${({$compact:e})=>e?"1.04fr 0.96fr":"1.2fr 1fr"};
  background: ${({$compact:e})=>e?"linear-gradient(180deg, rgba(255,255,255,0.9), rgba(247,250,246,0.96))":"#f7f3f7"};
  border-radius: ${({$compact:e})=>e?"36px":"24px"};
  overflow: hidden;
  border: ${({$compact:e})=>e?"1px solid rgba(122, 160, 143, 0.14)":"none"};
  box-shadow: ${({$compact:e})=>e?"0 22px 54px rgba(15, 60, 40, 0.09)":"none"};

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;const ty=kn.div`
  padding: ${({$compact:e})=>e?"42px 34px 36px":"72px 80px"};
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 14px;

  h3 {
    font-size: ${({$compact:e})=>e?"2.2rem":"32px"};
    letter-spacing: ${({$compact:e})=>e?"0":"0.06em"};
  }

  p {
    font-size: 15px;
    line-height: 1.7;
    max-width: ${({$compact:e})=>e?"520px":"460px"};
  }

  button {
    border: none;
    background: none;
    color: #1f5f4a;
    letter-spacing: ${({$compact:e})=>e?"0.02em":"0.18em"};
    cursor: pointer;
    font-size: 14px;
    width: max-content;
    padding: 0;
  }

  @media (max-width: 768px) {
    order: 2;
    padding: 28px 22px 26px;
    text-align: left;

    h3 {
      font-size: 27px;
    }

    p {
      max-width: none;
    }
  }
`,ny=Tn`
  from { opacity: 0; transform: translateX(-40px); }
  to   { opacity: 1; transform: translateX(0); }
`;kn(ty)`
  opacity: ${({$visible:e})=>e?1:0};
  transform: ${({$visible:e})=>e?"translateX(0)":"translateX(-40px)"};
  animation: ${({$visible:e})=>e?ny:"none"} 0.8s
    cubic-bezier(0.22, 0.61, 0.36, 1) forwards;
  transition: opacity 0.6s ease-out, transform 0.6s ease-out;
`;const ry=kn.img`
  width: 100%;
  height: ${({$compact:e})=>"100%"};
  object-fit: cover;
  object-position: center 34%;
  min-height: ${({$compact:e})=>e?"440px":"unset"};

  @media (max-width: 768px) {
    order: 1;
    height: ${({$compact:e})=>e?"296px":"260px"};
    object-fit: ${({$compact:e})=>e?"cover":"contain"};
    object-position: center 22%;
    min-height: unset;
  }
`,iy=()=>d.jsxs(Gg,{children:[d.jsx(Kg,{children:d.jsx(ry,{src:"https://res.cloudinary.com/drjzugsyo/image/upload/v1771263597/journey_jcc4im.jpg",alt:"Personalised Nutrition Plans"})}),d.jsxs(Qg,{children:[d.jsx("h3",{children:"Nutrition Approach"}),d.jsx("h2",{children:"Types of Diet Plans I Offer"}),d.jsx("p",{children:"I create personalised clinical nutrition plans based on your health condition, body needs and lifestyle — never one-size-fits-all diets."}),d.jsxs("ul",{children:[d.jsxs("li",{children:[d.jsx(ua,{size:18,color:"#4A6741"}),"Weight loss, weight gain & body recomposition"]}),d.jsxs("li",{children:[d.jsx(ua,{size:18,color:"#4A6741"}),"PCOS / PCOD & hormonal balance"]}),d.jsxs("li",{children:[d.jsx(ua,{size:18,color:"#4A6741"}),"Diabetes, thyroid & metabolic health"]}),d.jsxs("li",{children:[d.jsx(ua,{size:18,color:"#4A6741"}),"Pregnancy & women’s nutrition support"]}),d.jsxs("li",{children:[d.jsx(ua,{size:18,color:"#4A6741"}),"Gut health, digestion & immunity"]}),d.jsxs("li",{children:[d.jsx(ua,{size:18,color:"#4A6741"}),"Lifestyle & habit-based nutrition"]}),d.jsxs("li",{children:[d.jsx(ua,{size:18,color:"#4A6741"}),"Vegetarian & egg-based meal planning"]}),d.jsxs("li",{children:[d.jsx(ua,{size:18,color:"#4A6741"}),"Indian home-food focused diets (no exotic foods)"]})]}),d.jsx("p",{style:{marginTop:"24px",fontStyle:"italic"},children:"Each plan is designed to be practical, culturally appropriate and easy to follow — supporting healing from within."})]})]}),ay=()=>d.jsx(Vg,{style:{backgroundImage:`url(${Di.nutrition.hero})`},children:d.jsxs(Bg,{children:[d.jsxs("h1",{children:["Nourish Your Body,",d.jsx("br",{}),"Fuel Your Soul"]}),d.jsx("p",{style:{fontWeight:500},children:"Holistic nutrition aligned with yoga, lifestyle & Ayurveda."}),d.jsx("p",{style:{maxWidth:"680px",margin:"20px auto 32px"},children:"At Balance with Shree, nutrition is not about restriction or calorie obsession. It’s about nourishing your body in a way that supports your energy, digestion, hormones and everyday life — on and off the mat."}),d.jsx(Wg,{$primary:!0,as:"a",href:"#pricing-section",children:"Start Your Journey"})]})}),oy=()=>d.jsxs(Ug,{id:"pricing-section",children:[d.jsx(Yg,{children:"Start Your Journey"}),d.jsx(Hg,{children:"A simple first step towards balanced, sustainable health."}),d.jsxs(Zg,{children:[d.jsx("h3",{children:"Discovery Call"}),d.jsx("p",{style:{color:"#aaa",marginTop:"8px"},children:"30 Minutes • Online via Zoom / WhatsApp"}),d.jsxs("div",{className:"price",children:[d.jsx("span",{children:"₹"}),"299"]}),d.jsxs("ul",{children:[d.jsxs("li",{children:[d.jsx(ua,{size:16,color:"#4A6741"}),"Dietary pattern analysis"]}),d.jsxs("li",{children:[d.jsx(ua,{size:16,color:"#4A6741"}),"Goal-setting strategy"]}),d.jsxs("li",{children:[d.jsx(ua,{size:16,color:"#4A6741"}),"Personal Q&A session"]})]}),d.jsx(Mi,{href:no(qa),target:"_blank",rel:"noopener noreferrer",fullWidth:!0,size:"lg",style:{marginTop:"16px"},children:"Book My Session"})]})]}),sy=[{name:"Mandar Athavale",handle:"@athavalemandar",image:"/reviews/mander.jpeg",text:"Everyday yoga practice for the last 03 months has improved my body flexibility and concentration. Dhanashree guides well and helps improve each asana. I highly recommend her yoga sessions."},{name:"Harshada Deo",handle:"@deoharshada",image:"/reviews/mander.jpeg",text:"Practicing yoga with Dhanashree has been an incredible experience. She ensures every asana is done comfortably and perfectly. Her sessions have helped me balance my PCOD problem and spondylitis."},{name:"Mohini Sonak",handle:"@mohinisonak",image:"/reviews/mander.jpeg",text:"Daily yoga sessions have relieved my back pain and improved my flexibility. After yoga, my body feels energetic and I stay mentally fit throughout the day."},{name:"Kavita Patel",handle:"",image:"/reviews/mander.jpeg",text:"Grateful for the incredible transformation in my health. After struggling with PCOD and medication, her personalized diet and yoga sessions worked wonders. In just 3 months, my cycle is back on track."}],ly=[...sy,...sy];function uy(){return d.jsxs(cy,{children:[d.jsx(dy,{children:"Client Love"}),d.jsx(hy,{children:"Real stories. Real transformations."}),d.jsx(fy,{children:d.jsx(my,{children:ly.map((e,t)=>d.jsxs(gy,{children:[d.jsx(xy,{children:d.jsx("img",{src:e.image,alt:e.name})}),d.jsxs(yy,{children:[d.jsx(vy,{children:"“"}),d.jsx(wy,{children:e.text}),d.jsx(ky,{children:e.name}),e.handle&&d.jsx(_y,{children:e.handle}),d.jsx(by,{children:"”"})]})]},t))})})]})}const cy=kn.section`
  padding: 100px 20px;
  text-align: center;
`,dy=kn.h2`
  font-size: 2.6rem;
  font-family: "Playfair Display", serif;
`,hy=kn.p`
  max-width: 600px;
  margin: 16px auto 70px;
  color: #666;
`,py=Tn`
  0% { transform: translateX(0); }
  100% { transform: translateX(-50%); }
`,fy=kn.div`
  overflow: hidden;
  width: 100%;

  @media (max-width: 768px) {
    overflow-x: auto;
    scroll-snap-type: x mandatory;
    -webkit-overflow-scrolling: touch;
  }
`,my=kn.div`
  display: flex;
  gap: 60px;
  width: max-content;
  animation: ${py} 40s linear infinite;

  &:hover {
    animation-play-state: paused;
  }

  @media (max-width: 768px) {
    animation: none;
    padding: 10px 20px;
  }
`,gy=kn.div`
  position: relative;
  padding-top: 55px;
  overflow: visible;

  @media (max-width: 768px) {
    scroll-snap-align: center;
  }
`,yy=kn.div`
  background: #ffffff;
  width: 360px;
  min-height: 520px;

  @media (max-width: 768px) {
    width: 280px;
    min-height: 460px;
  }

  padding: 100px 40px 70px;
  border-radius: 28px;
  position: relative;
  text-align: center;

  box-shadow:
    0 24px 50px rgba(0, 0, 0, 0.12),
    inset 0 0 0 1px rgba(255, 255, 255, 0.9);

  display: flex;
  flex-direction: column;
  justify-content: space-between;
`,xy=kn.div`
  position: absolute;
  top: 0; /* sits on card edge */
  left: 50%;
  transform: translateX(-50%);
  z-index: 10;

  width: 110px;
  height: 110px;
  border-radius: 50%;
  background: #ffffff;
  padding: 8px;

  box-shadow: 0 12px 30px rgba(0, 0, 0, 0.25);

  img {
    width: 100%;
    height: 100%;
    border-radius: 50%;
    object-fit: cover;
  }
`,vy=kn.span`
  position: absolute;
  top: 24px;
  left: 28px;
  font-size: 64px;
  color: #d4af37;
  font-family: serif;
  line-height: 1;
`,by=kn.span`
  position: absolute;
  bottom: 20px;
  right: 28px;
  font-size: 64px;
  color: #d4af37;
  font-family: serif;
  line-height: 1;
`,wy=kn.p`
  font-family: "Cormorant Garamond", serif;
  font-size: 1.18rem;
  line-height: 1.8;
  color: #555;
  margin-bottom: 36px;
`,ky=kn.h4`
  font-weight: 600;
  font-size: 1.05rem;
  margin-bottom: 6px;
`,_y=kn.p`
  font-size: 0.9rem;
  color: #999;
`,Sy=()=>d.jsxs(d.Fragment,{children:[d.jsx(ay,{}),d.jsx(ey,{}),d.jsx(iy,{}),d.jsx(uy,{}),d.jsx(oy,{})]}),jy=vn`
  background: linear-gradient(180deg, rgba(255, 255, 255, 0.95), rgba(251, 249, 243, 0.98));
  border: 1px solid rgba(122, 160, 143, 0.12);
  box-shadow: 0 20px 48px rgba(15, 60, 40, 0.08);
  border-radius: 28px;

  @media (max-width: 768px) {
    border-radius: 24px;
  }
`,Cy=kn.div`
  width: 100%;
  overflow-x: hidden;
  padding: 0 0 24px;
`,Ty=kn.div`
  width: min(calc(100% - 20px), 1120px);
  margin: 0 auto;

  @media (max-width: 768px) {
    width: min(calc(100% - 18px), 430px);
  }
`,Py=kn.div`
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
`,Ey=kn.section`
  ${jy};
  position: relative;
  overflow: hidden;
  padding: 18px;

  @media (min-width: 769px) {
    padding: 28px;
  }
`,My=kn.span`
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
`,zy=kn.h2`
  margin: 10px 0 0;
  color: ${({theme:e})=>e.colors.textPrimary};
  font-size: clamp(1.78rem, 6.8vw, 3rem);
  line-height: 1.08;
`,Ay=kn.p`
  margin: 14px 0 0;
  color: ${({theme:e})=>e.colors.textMuted};
  font-size: 14px;
  line-height: 1.62;

  @media (min-width: 769px) {
    font-size: 15px;
    line-height: 1.68;
  }
`,Ry=kn.div`
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
`,$y=kn.section`
  position: relative;
`,Dy=kn.div`
  position: relative;
  overflow: hidden;
  border-radius: 0 0 24px 24px;
  background: #edf6f1;
  min-height: 364px;
  box-shadow: 0 18px 40px rgba(15, 60, 40, 0.08);

  @media (min-width: 769px) {
    ${jy};
    min-height: 620px;
    border-radius: 30px;
  }

  @media (max-width: 420px) {
    min-height: 350px;
  }
`,Oy=kn.picture`
  display: block;
  width: 100%;
  height: 100%;
  min-height: inherit;
`,Ly=kn.img`
  display: block;
  width: 100%;
  height: 100%;
  min-height: inherit;
  object-fit: cover;
  object-position: center 54%;

  @media (min-width: 769px) {
    object-position: center 52%;
  }
`,Ny=kn.div`
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
`;const Iy=kn(Ey)`
  background:
    radial-gradient(circle at right top, rgba(229, 239, 229, 0.9), transparent 28%),
    linear-gradient(180deg, rgba(255, 255, 255, 0.96), rgba(247, 250, 245, 0.96));
  text-align: center;
`,Fy=kn.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 10px;

  @media (min-width: 560px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  @media (min-width: 960px) {
    grid-template-columns: repeat(5, minmax(0, 1fr));
  }
`,Vy=kn.div`
  ${jy};
  padding: 14px;
  display: flex;
  flex-direction: column;
  gap: 8px;
  min-height: 118px;
  box-shadow: 0 12px 28px rgba(15, 60, 40, 0.06);
`,By=kn.span`
  width: 34px;
  height: 34px;
  border-radius: 12px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  background: rgba(244, 250, 246, 0.98);
  color: ${({theme:e})=>e.colors.primary};
  border: 1px solid rgba(122, 160, 143, 0.16);
`,Wy=kn.h3`
  margin: 0;
  color: ${({theme:e})=>e.colors.textPrimary};
  font-size: 15px;
  line-height: 1.3;
`,Uy=kn.p`
  margin: 0;
  color: ${({theme:e})=>e.colors.textMuted};
  font-size: 13px;
  line-height: 1.5;
`,Yy=kn(Ey)`
  background:
    radial-gradient(circle at left top, rgba(221, 234, 225, 0.64), transparent 26%),
    linear-gradient(180deg, rgba(255, 255, 255, 0.96), rgba(244, 250, 246, 0.96));
`,Hy=kn.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-top: 18px;
`,qy=kn.div`
  display: grid;
  grid-template-columns: auto 1fr;
  gap: 10px;
  align-items: start;
  padding: 12px 14px;
  border-radius: 18px;
  background: rgba(249, 251, 247, 0.92);
  border: 1px solid rgba(122, 160, 143, 0.1);
`,Xy=kn.span`
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
`,Gy=kn.p`
  margin: 0;
  color: ${({theme:e})=>e.colors.textPrimary};
  font-size: 14px;
  line-height: 1.55;
`,Ky=kn(Ey)`
  background:
    radial-gradient(circle at top center, rgba(217, 184, 137, 0.08), transparent 38%),
    linear-gradient(180deg, rgba(255, 255, 255, 0.96), rgba(246, 250, 246, 0.96));
`,Qy=kn.div`
  text-align: center;
  max-width: 700px;
  margin: 0 auto 18px;
`,Zy=kn.div`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 6px;
  margin-top: 16px;
  border-radius: 999px;
  background: rgba(244, 250, 246, 0.92);
  border: 1px solid rgba(122, 160, 143, 0.16);
`,Jy=kn.button`
  border: none;
  border-radius: 999px;
  padding: 10px 14px;
  background: ${({theme:e,$active:t})=>t?e.colors.primary:"transparent"};
  color: ${({theme:e,$active:t})=>t?e.colors.textWhite:e.colors.textPrimary};
  font-size: 13px;
  font-weight: 600;
  cursor: pointer;
`,ex=kn.span`
  display: inline-flex;
  align-items: center;
  border-radius: 999px;
  padding: 2px 8px;
  background: rgba(31, 95, 74, 0.08);
  color: ${({theme:e})=>e.colors.primary};
  font-size: 11px;
  font-weight: 600;
  margin-left: 6px;
`,tx=kn.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 16px;

  @media (min-width: 960px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
`,nx=kn.div`
  ${jy};
  padding: 18px;
  display: flex;
  flex-direction: column;
  gap: 14px;
  box-shadow: ${({$highlight:e})=>e?"0 22px 42px rgba(15, 60, 40, 0.12)":"0 14px 28px rgba(15, 60, 40, 0.07)"};
  border-color: ${({$highlight:e})=>e?"rgba(31, 95, 74, 0.2)":"rgba(122, 160, 143, 0.12)"};
`,rx=kn.h3`
  margin: 0;
  color: ${({theme:e})=>e.colors.textPrimary};
  font-size: 1.16rem;
  line-height: 1.3;
`,ix=kn.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`,ax=kn.div`
  color: ${({theme:e})=>e.colors.textMuted};
  font-size: 13px;
  text-decoration: line-through;
`,ox=kn.div`
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
`,sx=kn.p`
  margin: -2px 0 0;
  color: ${({theme:e})=>e.colors.textMuted};
  font-size: 13px;
  line-height: 1.45;
`,lx=kn.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
`,ux=kn.button`
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
`,cx=kn.div`
  margin-top: 2px;
`,dx=kn.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 10px;
`,hx=kn.li`
  display: grid;
  grid-template-columns: auto 1fr;
  gap: 10px;
  align-items: start;
  color: ${({theme:e})=>e.colors.textSecondary};
  font-size: 14px;
  line-height: 1.52;
`,px=kn.span`
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
`,fx=kn(Ey)`
  background:
    radial-gradient(circle at right top, rgba(221, 234, 225, 0.52), transparent 28%),
    linear-gradient(180deg, rgba(255, 255, 255, 0.96), rgba(244, 250, 246, 0.96));
`,mx=kn.div`
  text-align: center;
  max-width: 660px;
  margin: 0 auto 18px;
`,gx=kn.div`
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
`,yx=kn.div`
  ${jy};
  padding: 10px;
  scroll-snap-align: start;
`,xx=kn.img`
  display: block;
  width: 100%;
  aspect-ratio: 0.88;
  object-fit: cover;
  object-position: center;
  border-radius: 18px;
  background: #eef2ef;
`,vx=kn.div`
  overflow: hidden;
  border-radius: 24px;
`,bx=kn.div`
  display: flex;
  transform: translateX(${({$index:e})=>`-${100*e}%`});
  transition: transform 320ms ease;
`,wx=kn.div`
  min-width: 100%;
`,kx=kn.div`
  ${jy};
  padding: 10px;
`,_x=kn.img`
  display: block;
  width: 100%;
  aspect-ratio: 0.92;
  object-fit: contain;
  object-position: center;
  border-radius: 18px;
  background: #eef2ef;
`,Sx=kn.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  margin-top: 14px;
`,jx=kn.button`
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
`,Cx=kn.div`
  display: flex;
  align-items: center;
  gap: 8px;
`,Tx=kn.button`
  width: ${({$active:e})=>e?"18px":"8px"};
  height: 8px;
  border-radius: 999px;
  border: none;
  background: ${({theme:e,$active:t})=>t?e.colors.primary:"rgba(122, 160, 143, 0.28)"};
  transition: width 180ms ease, background 180ms ease;
  cursor: pointer;
`,Px=kn.div`
  overflow: hidden;
  border-radius: 24px;
`,Ex=kn.div`
  display: flex;
  transform: translateX(${({$index:e})=>`-${100*e}%`});
  transition: transform 320ms ease;
`,Mx=kn.div`
  min-width: 100%;
`,zx=kn.div`
  ${jy};
  padding: 10px;
`,Ax=kn.video`
  display: block;
  width: 100%;
  aspect-ratio: 0.68;
  object-fit: cover;
  border-radius: 18px;
  background: #dbe7df;
`,Rx=kn.div`
  overflow: hidden;
  border-radius: 24px;
`,$x=kn.div`
  display: flex;
  transform: translateX(${({$index:e})=>`-${100*e}%`});
  transition: transform 320ms ease;
`,Dx=kn.div`
  min-width: 100%;
`,Ox=kn.div`
  ${jy};
  padding: 14px;
  border-radius: 24px;
`,Lx=kn.div`
  width: 100%;
  aspect-ratio: 0.78;
  overflow: hidden;
  border-radius: 18px;
  background: linear-gradient(180deg, rgba(240, 245, 239, 0.92), rgba(255, 255, 255, 0.96));
`,Nx=kn.img`
  display: block;
  width: 100%;
  height: 100%;
  object-fit: contain;
  background: #ffffff;
`,Ix=kn(Ey)`
  background:
    radial-gradient(circle at left bottom, rgba(201, 218, 189, 0.54), transparent 24%),
    radial-gradient(circle at right top, rgba(212, 227, 208, 0.42), transparent 28%),
    linear-gradient(180deg, rgba(237, 246, 241, 0.96), rgba(221, 237, 213, 0.96));
  text-align: center;
`,Fx=kn.h2`
  margin: 0;
  color: ${({theme:e})=>e.colors.textPrimary};
  font-size: clamp(1.72rem, 7vw, 2.6rem);
  line-height: 1.08;
`,Vx=kn.p`
  margin: 12px auto 0;
  max-width: 30ch;
  color: ${({theme:e})=>e.colors.textSecondary};
  font-size: 14px;
  line-height: 1.6;

  @media (min-width: 769px) {
    font-size: 15px;
  }
`,Bx=kn.div`
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
`,Wx=[{title:"Mindful Movement",text:"Yoga practiced with awareness, breath connection, and respect for your body’s limits.",icon:ya},{title:"Strength & Stability",text:"Build functional strength and joint stability through safe alignment and gradual progress.",icon:fa},{title:"Posture & Pain Care",text:"Support posture correction and manage back, neck, and joint discomfort mindfully.",icon:Ca},{title:"Breath & Mindfulness",text:"Calm the nervous system and improve focus through conscious breath awareness.",icon:ha},{title:"Progressive & Safe Practice",text:"Each session is designed to be sustainable, adaptive, and supportive of long-term wellbeing.",icon:_a}],Ux=["Hatha & Vinyasa Yoga","Strength & flexibility-focused flows","Therapeutic yoga for pain management","Prenatal & postnatal yoga","Beginners & lifestyle-based yoga"],Yx=[{id:"foundation",name:"Group Session Plan",monthly:1500,quarterly:4500,highlight:!1,meta:{monthly:"Mon–Fri • Online / Offline",quarterly:"Mon–Fri • Online / Offline"},features:["Hatha, Ashtanga & Vinyasa Flow Yoga","Pranayama, Meditation & Breathwork","Face Yoga (selected days)","Weight loss or weight gain support","Improved flexibility & strength","Daily energy & overall wellness"]},{id:"holistic",name:"Private Session",monthly:6999,quarterly:20997,highlight:!0,features:["One-on-one private sessions with complete personal attention","Hatha, Ashtanga & Vinyasa Flow Yoga (customized for you)","Pranayama, meditation & breathing techniques","Face yoga on selected days","Posture correction & proper movement guidance","Goal-focused training","Therapeutic / medical yoga support","Optional nutrition guidance","Continuous progress tracking"]},{id:"prenatal",name:"Prenatal & Postnatal Care – Personalized One-on-One Support",monthly:8e3,quarterly:24e3,highlight:!1,features:["Trimester-wise yoga practices","Safe posture correction & body alignment","Pranayama & breathwork for relaxation & stamina","Garbhasanskar (mantras, bonding & mindfulness)","Nutritional guidance (optional detailed plans)","Emotional wellness & stress support","Postnatal recovery & core strengthening","Fully personalized sessions","Continuous progress tracking"]},{id:"prenatal-group",name:"Prenatal & Postnatal Group Care",monthly:2800,quarterly:8400,highlight:!1,meta:{monthly:"Small groups (2–3 mothers)",quarterly:"Small groups (2–3 mothers)"},features:["Trimester-wise safe yoga practices","Gentle posture & body alignment support","Pranayama & breathing techniques for relaxation & stamina","Garbhasanskar (mantras, bonding & mindfulness)","Basic nutritional guidance for pregnancy & recovery","Emotional well-being & stress management","Postnatal recovery & core strengthening","Personal attention within small groups"]}],Hx=[{sessions:12,price:6e3},{sessions:16,price:8e3},{sessions:20,price:1e4}],qx=[{sessions:12,price:5e3},{sessions:16,price:6500},{sessions:20,price:8e3}],Xx=Di.about.certifications,Gx=()=>{const[e,t]=h.useState("monthly"),[n,r]=h.useState(12),[i,a]=h.useState(12),[o,s]=h.useState(!1),[l,u]=h.useState(0),[c,p]=h.useState(0),[f,m]=h.useState(0),g=Di.yoga.heroWatercolor,y=t=>{let r="",a=0;if("holistic"===t.id){const e=Hx.find(e=>e.sessions===n);a=e?.price||0,r=`Hi! I'm interested in the ${t.name}.\nSessions: ${n}\nPrice: ₹${a}`}else if("prenatal"===t.id){const e=qx.find(e=>e.sessions===i);a=e?.price||0,r=`Hi! I'm interested in the ${t.name}.\nSessions: ${i}\nPrice: ₹${a}`}else{const n=t.monthly,i=3*n,o=Math.round(.9*i);a="monthly"===e?n:o,r=`Hi! I'm interested in the ${t.name}.\nBilling: ${e}\nPrice: ₹${a}`}window.open(no(r),"_blank")};return d.jsxs(Cy,{children:[d.jsx(Ty,{children:d.jsxs(Py,{children:[d.jsx($y,{children:d.jsxs(Dy,{children:[d.jsxs(Oy,{children:[d.jsx("source",{media:"(min-width: 768px)",srcSet:g.desktop}),d.jsx(Ly,{src:g.mobile,alt:g.alt,loading:"eager",decoding:"async",fetchPriority:"high"})]}),d.jsx(Ny,{})]})}),d.jsxs(Iy,{children:[d.jsx(My,{children:"Yoga with Balance"}),d.jsx(zy,{children:"A Practice Beyond Asanas"}),d.jsx(Ry,{children:d.jsx("span",{children:"✦"})}),d.jsx(Ay,{children:"Yoga is a tool for balance, healing, and self-awareness. My sessions are thoughtfully designed to support mobility, strength, posture, breath, and mental clarity — while respecting your body’s limitations and needs."})]}),d.jsx(Ey,{children:d.jsx(Fy,{children:Wx.map(({title:e,text:t,icon:n})=>d.jsxs(Vy,{children:[d.jsx(By,{children:d.jsx(n,{size:18,strokeWidth:1.9})}),d.jsx(Wy,{children:e}),d.jsx(Uy,{children:t})]},e))})}),d.jsxs(Yy,{children:[d.jsx(My,{children:"Types of Yoga"}),d.jsx(zy,{children:"Types of Yoga I Offer"}),d.jsx(Ay,{children:"Yoga sessions are customised based on your body, goals and health conditions."}),d.jsx(Hy,{children:Ux.map(e=>d.jsxs(qy,{children:[d.jsx(Xy,{children:d.jsx(ya,{size:14,strokeWidth:1.9})}),d.jsx(Gy,{children:e})]},e))})]}),d.jsxs(Ky,{children:[d.jsxs(Qy,{children:[d.jsx(My,{children:"Choose Your Wellness Path"}),d.jsx(zy,{children:"Choose Your Wellness Path"}),d.jsx(Ay,{children:"Simple, transparent pricing — switch to quarterly and save more."}),d.jsxs(Zy,{children:[d.jsx(Jy,{type:"button",$active:"monthly"===e,onClick:()=>t("monthly"),children:"Monthly"}),d.jsxs(Jy,{type:"button",$active:"quarterly"===e,onClick:()=>t("quarterly"),children:["Quarterly",d.jsx(ex,{children:"Save 10%"})]})]})]}),d.jsx(tx,{children:Yx.map(t=>{if("holistic"===t.id){const i=Hx.find(e=>e.sessions===n),a=i?.price||0,o=3*a,s=Math.round(.9*o),l="monthly"===e?a:s;return d.jsxs(nx,{$highlight:t.highlight,children:[d.jsx(rx,{children:t.name}),d.jsxs(ix,{children:["quarterly"===e?d.jsxs(ax,{children:["₹",o.toLocaleString("en-IN")]}):null,d.jsxs(ox,{children:["₹",l.toLocaleString("en-IN"),d.jsx("span",{children:"monthly"===e?`${n} sessions`:`Total ${3*n} sessions`})]})]}),d.jsx(lx,{role:"radiogroup","aria-label":"Private session options",children:Hx.map(e=>d.jsxs(ux,{type:"button",role:"radio","aria-checked":n===e.sessions,$active:n===e.sessions,onClick:()=>r(e.sessions),children:[e.sessions," Sessions"]},e.sessions))}),d.jsx(cx,{children:d.jsx(Mi,{fullWidth:!0,size:"lg",onClick:()=>y(t),children:"Begin Your Journey"})}),d.jsx(dx,{children:t.features.map(e=>d.jsxs(hx,{children:[d.jsx(px,{children:d.jsx(ua,{size:12,strokeWidth:2.4})}),d.jsx("span",{children:e})]},e))})]},t.id)}if("prenatal"===t.id){const n=qx.find(e=>e.sessions===i),r=n?.price||0,o=3*r,s=Math.round(.9*o),l="monthly"===e?r:s;return d.jsxs(nx,{$highlight:t.highlight,children:[d.jsx(rx,{children:t.name}),d.jsxs(ix,{children:["quarterly"===e?d.jsxs(ax,{children:["₹",o.toLocaleString("en-IN")]}):null,d.jsxs(ox,{children:["₹",l.toLocaleString("en-IN"),d.jsx("span",{children:"monthly"===e?`${i} sessions`:`Total ${3*i} sessions`})]})]}),d.jsx(lx,{role:"radiogroup","aria-label":"Prenatal session options",children:qx.map(e=>d.jsxs(ux,{type:"button",role:"radio","aria-checked":i===e.sessions,$active:i===e.sessions,onClick:()=>a(e.sessions),children:[e.sessions," Sessions"]},e.sessions))}),d.jsx(cx,{children:d.jsx(Mi,{fullWidth:!0,size:"lg",onClick:()=>y(t),children:"Begin Your Journey"})}),d.jsx(dx,{children:t.features.map(e=>d.jsxs(hx,{children:[d.jsx(px,{children:d.jsx(ua,{size:12,strokeWidth:2.4})}),d.jsx("span",{children:e})]},e))})]},t.id)}const o=t.monthly,s=3*o,l=Math.round(.9*s),u="monthly"===e?o:l,c=t.meta?.[e]??("monthly"===e?"per month":"per quarter");return d.jsxs(nx,{$highlight:t.highlight,children:[d.jsx(rx,{children:t.name}),d.jsxs(ix,{children:["quarterly"===e?d.jsxs(ax,{children:["₹",s.toLocaleString("en-IN")]}):null,d.jsxs(ox,{children:["₹",u.toLocaleString("en-IN"),d.jsx("span",{children:"monthly"===e?"per month":"per quarter"})]})]}),d.jsx(sx,{children:c}),d.jsx(cx,{children:d.jsx(Mi,{fullWidth:!0,size:"lg",onClick:()=>y(t),children:"Begin Your Journey"})}),d.jsx(dx,{children:t.features.map(e=>d.jsxs(hx,{children:[d.jsx(px,{children:d.jsx(ua,{size:12,strokeWidth:2.4})}),d.jsx("span",{children:e})]},e))})]},t.id)})})]}),d.jsxs(fx,{children:[d.jsxs(mx,{children:[d.jsx(My,{children:"Practice Gallery"}),d.jsx(zy,{children:"Practice Gallery"})]}),d.jsx(gx,{children:Di.yoga.gallery.map((e,t)=>d.jsx(yx,{children:d.jsx(xx,{src:e,alt:0===t?"Yoga practice in calm indoor space":1===t?"Woman practicing yoga mindfully":"Holistic yoga and wellness session",loading:"lazy",decoding:"async"})},e))})]}),d.jsxs(fx,{children:[d.jsxs(mx,{children:[d.jsx(My,{children:"Real Proof"}),d.jsx(zy,{children:"Real Transformations"})]}),d.jsx(vx,{children:d.jsx(bx,{$index:l,children:Di.yoga.transformations.map((e,t)=>d.jsx(wx,{children:d.jsx(kx,{children:d.jsx(_x,{src:e,alt:0===t?"Yoga journey before transformation":1===t?"Yoga practice after transformation":"Mind body balance through yoga",loading:"lazy",decoding:"async"})})},e))})}),d.jsxs(Sx,{children:[d.jsx(jx,{type:"button",onClick:()=>u(e=>0===e?Di.yoga.transformations.length-1:e-1),"aria-label":"Show previous transformation",children:d.jsx(ca,{size:18})}),d.jsx(Cx,{children:Di.yoga.transformations.map((e,t)=>d.jsx(Tx,{type:"button",onClick:()=>u(t),"aria-label":`Show transformation ${t+1}`,$active:t===l},e))}),d.jsx(jx,{type:"button",onClick:()=>u(e=>e===Di.yoga.transformations.length-1?0:e+1),"aria-label":"Show next transformation",children:d.jsx(da,{size:18})})]})]}),d.jsxs(fx,{children:[d.jsxs(mx,{children:[d.jsx(My,{children:"Client Stories"}),d.jsx(zy,{children:"Client Stories"})]}),d.jsx(Px,{children:d.jsx(Ex,{$index:c,children:Di.yoga.videos.map(e=>d.jsx(Mx,{children:d.jsx(zx,{children:d.jsx(Ax,{src:e,controls:!0,playsInline:!0,preload:"metadata"})})},e))})}),d.jsxs(Sx,{children:[d.jsx(jx,{type:"button",onClick:()=>p(e=>0===e?Di.yoga.videos.length-1:e-1),"aria-label":"Show previous client story",children:d.jsx(ca,{size:18})}),d.jsx(Cx,{children:Di.yoga.videos.map((e,t)=>d.jsx(Tx,{type:"button",onClick:()=>p(t),"aria-label":`Show client story ${t+1}`,$active:t===c},e))}),d.jsx(jx,{type:"button",onClick:()=>p(e=>e===Di.yoga.videos.length-1?0:e+1),"aria-label":"Show next client story",children:d.jsx(da,{size:18})})]})]}),d.jsxs(fx,{children:[d.jsxs(mx,{children:[d.jsx(My,{children:"Professional Certifications"}),d.jsx(zy,{children:"Professional Certifications"})]}),d.jsx(Rx,{children:d.jsx($x,{$index:f,children:Xx.map((e,t)=>d.jsx(Dx,{children:d.jsx(Ox,{children:d.jsx(Lx,{children:d.jsx(Nx,{src:e,alt:`Professional yoga certificate ${t+1}`,loading:"lazy",decoding:"async"})})})},e))})}),d.jsxs(Sx,{children:[d.jsx(jx,{type:"button",onClick:()=>m(e=>0===e?Xx.length-1:e-1),"aria-label":"Show previous certificate",children:d.jsx(ca,{size:18})}),d.jsx(Cx,{children:Xx.map((e,t)=>d.jsx(Tx,{type:"button",onClick:()=>m(t),"aria-label":`Show certificate ${t+1}`,$active:t===f},e))}),d.jsx(jx,{type:"button",onClick:()=>m(e=>e===Xx.length-1?0:e+1),"aria-label":"Show next certificate",children:d.jsx(da,{size:18})})]})]}),d.jsxs(Ix,{children:[d.jsx(Fx,{children:"Ready to begin your yoga journey?"}),d.jsx(Vx,{children:"Start with a simple conversation and explore the support that feels right for you."}),d.jsxs(Bx,{children:[d.jsx(Mi,{size:"lg",onClick:()=>s(!0),children:"Book a Session"}),d.jsx(Mi,{href:no(Ha),target:"_blank",rel:"noopener noreferrer",variant:"outline",size:"lg",icon:d.jsx(va,{size:18,strokeWidth:1.9}),children:"Chat on WhatsApp"})]})]})]})}),d.jsx(Aa,{isOpen:o,onClose:()=>s(!1),children:d.jsx(Ua,{onSelect:()=>s(!1)})})]})};function Kx(){return d.jsx(Gx,{})}const Qx=kn.section`
  padding: 120px 20px;
  background: linear-gradient(180deg, #f6fbf8, #eef6f1);
  opacity: 0.9;
  margin: 0 16px 16px 16px;
  border-radius: 24px;
`,Zx=kn.div`
  max-width: 1100px;
  margin: auto;
`,Jx=kn.div`
  max-width: 720px;
  margin-bottom: 60px;
`,ev=kn.h1`
  font-size: 44px;
  font-weight: 600;
  color: #183c2f;

  span {
    color: #2e6b55;
    font-style: italic;
  }

  @media (max-width: 768px) {
    font-size: 34px;
  }
`,tv=kn.p`
  font-size: 18px;
  color: #4f6f63;
  margin-top: 16px;
  line-height: 1.7;
`,nv=kn.div`
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  gap: 32px;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`,rv=kn.div`
  background: #ffffff;
  padding: 32px;
  border-radius: 26px;
  box-shadow: 0 18px 48px rgba(0, 0, 0, 0.08);
`,iv=kn.h3`
  font-size: 20px;
  font-weight: 500;
  color: #183c2f;
  margin-bottom: 12px;
`,av=kn.span`
  display: inline-block;
  margin-top: 2px;
  margin-bottom: 14px;
  padding: 6px 12px;
  border-radius: 999px;
  font-size: 12px;
  font-weight: 600;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  background: #eef6f1;
  color: #2e6b55;
`,ov=kn.p`
  font-size: 16px;
  color: #5a746a;
  line-height: 1.6;
`,sv=kn.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 28px;
  margin-top: 60px;

  @media (max-width: 900px) {
    grid-template-columns: 1fr;
  }
`,lv=kn.div`
  background: #ffffff;
  padding: 28px;
  border-radius: 22px;
  text-align: center;
  box-shadow: 0 14px 40px rgba(0, 0, 0, 0.08);
`,uv=kn.div`
  font-size: 22px;
  font-weight: 600;
  color: #2e6b55;
  margin-bottom: 12px;
`;kn.a`
  display: inline-block;
  margin-top: 80px;
  padding: 18px 40px;
  border-radius: 999px;
  background: #1f5f4a;
  color: white;
  text-decoration: none;
  font-size: 16px;
  font-weight: 500;
  box-shadow: 0 18px 45px rgba(31, 95, 74, 0.4);
  transition: transform 0.2s ease;

  &:hover {
    transform: translateY(-2px);
  }
`;const cv=kn.div`
  max-width: 720px;
`,dv=kn.div`
  margin-top: 28px;
  background: #ffffff;
  border-radius: 26px;
  padding: 32px;
  box-shadow: 0 20px 52px rgba(0, 0, 0, 0.08);

  h3 {
    font-size: 22px;
    font-weight: 600;
    color: #183c2f;
    margin-bottom: 4px;
  }

  .price {
    margin: 20px 0 16px;
    font-size: 32px;
    font-weight: 600;
    color: #1f5f4a;
    display: flex;
    align-items: baseline;
    gap: 4px;

    span {
      font-size: 20px;
    }
  }

  ul {
    list-style: none;
    padding: 0;
    margin: 0 0 24px;
  }

  li {
    font-size: 15px;
    color: #4f6f63;
    margin-bottom: 8px;
  }
`;function hv(){return d.jsx(Qx,{children:d.jsxs(Zx,{children:[d.jsxs(Jx,{children:[d.jsxs(ev,{children:["Ayurveda for ",d.jsx("span",{children:"Natural Balance"})]}),d.jsx(tv,{children:"Ayurveda helps you understand your body’s unique constitution and lifestyle patterns to restore balance in a gentle and sustainable way."})]}),d.jsx(Jx,{as:"div",style:{marginTop:"100px"},children:d.jsxs(ev,{as:"h2",children:["What This ",d.jsx("span",{children:"Includes"})]})}),d.jsxs(nv,{children:[d.jsxs(rv,{children:[d.jsx(iv,{children:"Ayurvedic Assessment"}),d.jsxs(ov,{children:["• Prakriti (body constitution) & Vikriti (current imbalance) understanding",d.jsx("br",{}),"• Dosha evaluation: Vata, Pitta & Kapha",d.jsx("br",{}),"• Basic review of digestion, routine & stress patterns"]})]}),d.jsxs(rv,{children:[d.jsx(iv,{children:"Dosha-Based Diet & Lifestyle Guidance"}),d.jsxs(ov,{children:["• Simple food suggestions according to dosha tendencies",d.jsx("br",{}),"• Daily routine (Dinacharya) guidance for better digestion, sleep & energy",d.jsx("br",{}),"• Practical, easy-to-follow habits"]})]}),d.jsxs(rv,{children:[d.jsx(iv,{children:"Ayurvedic Therapies"}),d.jsx(av,{children:"Coming soon"}),d.jsxs(ov,{children:["In-person Ayurvedic therapies will be introduced soon, including:",d.jsx("br",{}),"• Abhyanga – full body oil massage for relaxation & circulation",d.jsx("br",{}),"• Potli Abhyanga – herbal bolus therapy for muscle & joint comfort",d.jsx("br",{}),"• Shirodhara – calming therapy to support mental relaxation & sleep",d.jsx("br",{}),"• Panchakarma awareness & guidance (referral where appropriate)"]})]})]}),d.jsx(Jx,{style:{marginTop:"100px"},children:d.jsxs(ev,{as:"h2",children:["Who It’s ",d.jsx("span",{children:"For"})]})}),d.jsxs(nv,{children:[d.jsx(rv,{children:d.jsx(ov,{children:"Digestive discomfort & lifestyle-related issues"})}),d.jsx(rv,{children:d.jsx(ov,{children:"Stress, anxiety & disturbed sleep"})}),d.jsx(rv,{children:d.jsx(ov,{children:"Hormonal imbalance support (PCOS, menstrual health)"})}),d.jsx(rv,{children:d.jsx(ov,{children:"Fatigue, stiffness & general wellbeing"})}),d.jsx(rv,{children:d.jsx(ov,{children:"Preventive care & holistic balance"})})]}),d.jsx(Jx,{style:{marginTop:"100px"},children:d.jsxs(ev,{as:"h2",children:["The Consultation ",d.jsx("span",{children:"Approach"})]})}),d.jsxs(sv,{children:[d.jsxs(lv,{children:[d.jsx(uv,{children:"01"}),d.jsx(ov,{children:"One-on-one personalised consultation"})]}),d.jsxs(lv,{children:[d.jsx(uv,{children:"02"}),d.jsx(ov,{children:"Clear explanation in simple language"})]}),d.jsxs(lv,{children:[d.jsx(uv,{children:"03"}),d.jsx(ov,{children:"Gentle, sustainable recommendations"})]})]}),d.jsxs(cv,{style:{marginTop:"100px"},children:[d.jsxs(ev,{as:"h2",children:["Book a ",d.jsx("span",{children:"Discovery Call"})]}),d.jsx(tv,{children:"Not sure where to begin? Start with a short call to understand what you need."}),d.jsxs(dv,{children:[d.jsx("h3",{children:"Ayurveda Discovery Call"}),d.jsx("p",{style:{color:"#aaa",marginTop:"6px"},children:"20 Minutes • Online via Zoom/WhatsApp"}),d.jsxs("div",{className:"price",children:[d.jsx("span",{children:"₹"}),"300"]}),d.jsxs("ul",{children:[d.jsx("li",{children:"Brief dosha & lifestyle overview"}),d.jsx("li",{children:"Clarity on your main concerns"}),d.jsx("li",{children:"Recommendations on next best steps"})]}),d.jsx(Mi,{href:no(Xa),target:"_blank",rel:"noopener noreferrer",fullWidth:!0,size:"lg",children:"Book My Ayurveda Discovery Call"})]})]}),d.jsx(Jx,{style:{marginTop:"100px"},children:d.jsxs(tv,{style:{maxWidth:"800px"},children:[d.jsx("strong",{children:"Disclaimer:"})," Ayurvedic consultations and therapies are offered as supportive wellness practices and do not replace medical diagnosis or treatment. Panchakarma procedures are advised or referred only where clinically appropriate."]})})]})})}function pv(){return d.jsx(hv,{})}kn.a`
  display: inline-block;
  width: 100%;
  text-align: center;
  color: black;
  padding: 14px 18px;
  border-radius: 999px;
  border: none;
  outline: none;
  cursor: pointer;

  background: #1f5f4a;
  color: white;
  text-decoration: none;
  font-size: 15px;
  font-weight: 500;

  box-shadow: 0 16px 40px rgba(31, 95, 74, 0.4);
  transition:
    transform 0.18s ease,
    box-shadow 0.18s ease;

  &:hover {
    transform: translateY(-1px);
    box-shadow: 0 20px 48px rgba(31, 95, 74, 0.5);
  }

  &:active {
    transform: translateY(0);
    box-shadow: 0 12px 30px rgba(31, 95, 74, 0.35);
  }
`;const fv=()=>{const{pathname:e}=Cr();return h.useEffect(()=>{window.scrollTo(0,0)},[e]),null};function mv(){return d.jsxs(d.Fragment,{children:[d.jsx(fv,{}),d.jsxs(Yr,{children:[d.jsx(Wr,{path:"/",element:d.jsx(os,{})}),d.jsx(Wr,{path:"/about",element:d.jsx(dl,{})}),d.jsx(Wr,{path:"/yoga",element:d.jsx(Kx,{})}),d.jsx(Wr,{path:"/ayurveda",element:d.jsx(pv,{})}),d.jsx(Wr,{path:"/nutrition",element:d.jsx(Sy,{})}),d.jsx(Wr,{path:"/contact",element:d.jsx(Fg,{})}),d.jsx(Wr,{path:"*",element:d.jsx(Br,{to:"/",replace:!0})})]})]})}function gv(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function yv(e,t){e.prototype=Object.create(t.prototype),e.prototype.constructor=e,e.__proto__=t}var xv,vv,bv,wv,kv,_v,Sv,jv,Cv,Tv,Pv,Ev,Mv,zv,Av,Rv,$v,Dv,Ov,Lv,Nv,Iv,Fv,Vv,Bv,Wv,Uv,Yv,Hv,qv,Xv,Gv,Kv={autoSleep:120,force3D:"auto",nullTargetWarn:1,units:{lineHeight:""}},Qv={duration:.5,overwrite:!1,delay:0},Zv=1e8,Jv=1e-8,eb=2*Math.PI,tb=eb/4,nb=0,rb=Math.sqrt,ib=Math.cos,ab=Math.sin,ob=function(e){return"string"==typeof e},sb=function(e){return"function"==typeof e},lb=function(e){return"number"==typeof e},ub=function(e){return void 0===e},cb=function(e){return"object"==typeof e},db=function(e){return!1!==e},hb=function(){return"undefined"!=typeof window},pb=function(e){return sb(e)||ob(e)},fb="function"==typeof ArrayBuffer&&ArrayBuffer.isView||function(){},mb=Array.isArray,gb=/random\([^)]+\)/g,yb=/,\s*/g,xb=/(?:-?\.?\d|\.)+/gi,vb=/[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,bb=/[-+=.]*\d+[.e-]*\d*[a-z%]*/g,wb=/[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,kb=/[+-]=-?[.\d]+/,_b=/[^,'"\[\]\s]+/gi,Sb=/^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,jb={},Cb={},Tb=function(e){return(Cb=rw(e,jb))&&r_},Pb=function(e,t){return console.warn("Invalid property",e,"set to",t,"Missing plugin? gsap.registerPlugin()")},Eb=function(e,t){return!t&&console.warn(e)},Mb=function(e,t){return e&&(jb[e]=t)&&Cb&&(Cb[e]=t)||jb},zb=function(){return 0},Ab={suppressEvents:!0,isStart:!0,kill:!1},Rb={suppressEvents:!0,kill:!1},$b={suppressEvents:!0},Db={},Ob=[],Lb={},Nb={},Ib={},Fb=30,Vb=[],Bb="",Wb=function(e){var t,n,r=e[0];if(cb(r)||sb(r)||(e=[e]),!(t=(r._gsap||{}).harness)){for(n=Vb.length;n--&&!Vb[n].targetTest(r););t=Vb[n]}for(n=e.length;n--;)e[n]&&(e[n]._gsap||(e[n]._gsap=new yk(e[n],t)))||e.splice(n,1);return e},Ub=function(e){return e._gsap||Wb($w(e))[0]._gsap},Yb=function(e,t,n){return(n=e[t])&&sb(n)?e[t]():ub(n)&&e.getAttribute&&e.getAttribute(t)||n},Hb=function(e,t){return(e=e.split(",")).forEach(t)||e},qb=function(e){return Math.round(1e5*e)/1e5||0},Xb=function(e){return Math.round(1e7*e)/1e7||0},Gb=function(e,t){var n=t.charAt(0),r=parseFloat(t.substr(2));return e=parseFloat(e),"+"===n?e+r:"-"===n?e-r:"*"===n?e*r:e/r},Kb=function(e,t){for(var n=t.length,r=0;e.indexOf(t[r])<0&&++r<n;);return r<n},Qb=function(){var e,t,n=Ob.length,r=Ob.slice(0);for(Lb={},Ob.length=0,e=0;e<n;e++)(t=r[e])&&t._lazy&&(t.render(t._lazy[0],t._lazy[1],!0)._lazy=0)},Zb=function(e){return!!(e._initted||e._startAt||e.add)},Jb=function(e,t,n,r){Ob.length&&!vv&&Qb(),e.render(t,n,!!(vv&&t<0&&Zb(e))),Ob.length&&!vv&&Qb()},ew=function(e){var t=parseFloat(e);return(t||0===t)&&(e+"").match(_b).length<2?t:ob(e)?e.trim():e},tw=function(e){return e},nw=function(e,t){for(var n in t)n in e||(e[n]=t[n]);return e},rw=function(e,t){for(var n in t)e[n]=t[n];return e},iw=function e(t,n){for(var r in n)"__proto__"!==r&&"constructor"!==r&&"prototype"!==r&&(t[r]=cb(n[r])?e(t[r]||(t[r]={}),n[r]):n[r]);return t},aw=function(e,t){var n,r={};for(n in e)n in t||(r[n]=e[n]);return r},ow=function(e){var t,n=e.parent||wv,r=e.keyframes?(t=mb(e.keyframes),function(e,n){for(var r in n)r in e||"duration"===r&&t||"ease"===r||(e[r]=n[r])}):nw;if(db(e.inherit))for(;n;)r(e,n.vars.defaults),n=n.parent||n._dp;return e},sw=function(e,t,n,r,i){var a,o=e[r];if(i)for(a=t[i];o&&o[i]>a;)o=o._prev;return o?(t._next=o._next,o._next=t):(t._next=e[n],e[n]=t),t._next?t._next._prev=t:e[r]=t,t._prev=o,t.parent=t._dp=e,t},lw=function(e,t,n,r){void 0===n&&(n="_first"),void 0===r&&(r="_last");var i=t._prev,a=t._next;i?i._next=a:e[n]===t&&(e[n]=a),a?a._prev=i:e[r]===t&&(e[r]=i),t._next=t._prev=t.parent=null},uw=function(e,t){e.parent&&(!t||e.parent.autoRemoveChildren)&&e.parent.remove&&e.parent.remove(e),e._act=0},cw=function(e,t){if(e&&(!t||t._end>e._dur||t._start<0))for(var n=e;n;)n._dirty=1,n=n.parent;return e},dw=function(e,t,n,r){return e._startAt&&(vv?e._startAt.revert(Rb):e.vars.immediateRender&&!e.vars.autoRevert||e._startAt.render(t,!0,r))},hw=function e(t){return!t||t._ts&&e(t.parent)},pw=function(e){return e._repeat?fw(e._tTime,e=e.duration()+e._rDelay)*e:0},fw=function(e,t){var n=Math.floor(e=Xb(e/t));return e&&n===e?n-1:n},mw=function(e,t){return(e-t._start)*t._ts+(t._ts>=0?0:t._dirty?t.totalDuration():t._tDur)},gw=function(e){return e._end=Xb(e._start+(e._tDur/Math.abs(e._ts||e._rts||Jv)||0))},yw=function(e,t){var n=e._dp;return n&&n.smoothChildTiming&&e._ts&&(e._start=Xb(n._time-(e._ts>0?t/e._ts:((e._dirty?e.totalDuration():e._tDur)-t)/-e._ts)),gw(e),n._dirty||cw(n,e)),e},xw=function(e,t){var n;if((t._time||!t._dur&&t._initted||t._start<e._time&&(t._dur||!t.add))&&(n=mw(e.rawTime(),t),(!t._dur||Mw(0,t.totalDuration(),n)-t._tTime>Jv)&&t.render(n,!0)),cw(e,t)._dp&&e._initted&&e._time>=e._dur&&e._ts){if(e._dur<e.duration())for(n=e;n._dp;)n.rawTime()>=0&&n.totalTime(n._tTime),n=n._dp;e._zTime=-1e-8}},vw=function(e,t,n,r){return t.parent&&uw(t),t._start=Xb((lb(n)?n:n||e!==wv?Tw(e,n,t):e._time)+t._delay),t._end=Xb(t._start+(t.totalDuration()/Math.abs(t.timeScale())||0)),sw(e,t,"_first","_last",e._sort?"_start":0),_w(t)||(e._recent=t),r||xw(e,t),e._ts<0&&yw(e,e._tTime),e},bw=function(e,t){return(jb.ScrollTrigger||Pb("scrollTrigger",t))&&jb.ScrollTrigger.create(t,e)},ww=function(e,t,n,r,i){return jk(e,t,i),e._initted?!n&&e._pt&&!vv&&(e._dur&&!1!==e.vars.lazy||!e._dur&&e.vars.lazy)&&Cv!==ik.frame?(Ob.push(e),e._lazy=[i,r],1):void 0:1},kw=function e(t){var n=t.parent;return n&&n._ts&&n._initted&&!n._lock&&(n.rawTime()<0||e(n))},_w=function(e){var t=e.data;return"isFromStart"===t||"isStart"===t},Sw=function(e,t,n,r){var i=e._repeat,a=Xb(t)||0,o=e._tTime/e._tDur;return o&&!r&&(e._time*=a/e._dur),e._dur=a,e._tDur=i?i<0?1e10:Xb(a*(i+1)+e._rDelay*i):a,o>0&&!r&&yw(e,e._tTime=e._tDur*o),e.parent&&gw(e),n||cw(e.parent,e),e},jw=function(e){return e instanceof vk?cw(e):Sw(e,e._dur)},Cw={_start:0,endTime:zb,totalDuration:zb},Tw=function e(t,n,r){var i,a,o,s=t.labels,l=t._recent||Cw,u=t.duration()>=Zv?l.endTime(!1):t._dur;return ob(n)&&(isNaN(n)||n in s)?(a=n.charAt(0),o="%"===n.substr(-1),i=n.indexOf("="),"<"===a||">"===a?(i>=0&&(n=n.replace(/=/,"")),("<"===a?l._start:l.endTime(l._repeat>=0))+(parseFloat(n.substr(1))||0)*(o?(i<0?l:r).totalDuration()/100:1)):i<0?(n in s||(s[n]=u),s[n]):(a=parseFloat(n.charAt(i-1)+n.substr(i+1)),o&&r&&(a=a/100*(mb(r)?r[0]:r).totalDuration()),i>1?e(t,n.substr(0,i-1),r)+a:u+a)):null==n?u:+n},Pw=function(e,t,n){var r,i,a=lb(t[1]),o=(a?2:1)+(e<2?0:1),s=t[o];if(a&&(s.duration=t[1]),s.parent=n,e){for(r=s,i=n;i&&!("immediateRender"in r);)r=i.vars.defaults||{},i=db(i.vars.inherit)&&i.parent;s.immediateRender=db(r.immediateRender),e<2?s.runBackwards=1:s.startAt=t[o-1]}return new Mk(t[0],s,t[o+1])},Ew=function(e,t){return e||0===e?t(e):t},Mw=function(e,t,n){return n<e?e:n>t?t:n},zw=function(e,t){return ob(e)&&(t=Sb.exec(e))?t[1]:""},Aw=[].slice,Rw=function(e,t){return e&&cb(e)&&"length"in e&&(!t&&!e.length||e.length-1 in e&&cb(e[0]))&&!e.nodeType&&e!==kv},$w=function(e,t,n){return bv&&!t&&bv.selector?bv.selector(e):!ob(e)||n||!_v&&ak()?mb(e)?function(e,t,n){return void 0===n&&(n=[]),e.forEach(function(e){var r;return ob(e)&&!t||Rw(e,1)?(r=n).push.apply(r,$w(e)):n.push(e)})||n}(e,n):Rw(e)?Aw.call(e,0):e?[e]:[]:Aw.call((t||Sv).querySelectorAll(e),0)},Dw=function(e){return e=$w(e)[0]||Eb("Invalid scope")||{},function(t){var n=e.current||e.nativeElement||e;return $w(t,n.querySelectorAll?n:n===e?Eb("Invalid scope")||Sv.createElement("div"):e)}},Ow=function(e){return e.sort(function(){return.5-Math.random()})},Lw=function(e){if(sb(e))return e;var t=cb(e)?e:{each:e},n=hk(t.ease),r=t.from||0,i=parseFloat(t.base)||0,a={},o=r>0&&r<1,s=isNaN(r)||o,l=t.axis,u=r,c=r;return ob(r)?u=c={center:.5,edges:.5,end:1}[r]||0:!o&&s&&(u=r[0],c=r[1]),function(e,o,d){var h,p,f,m,g,y,x,v,b,w=(d||t).length,k=a[w];if(!k){if(!(b="auto"===t.grid?0:(t.grid||[1,Zv])[1])){for(x=-1e8;x<(x=d[b++].getBoundingClientRect().left)&&b<w;);b<w&&b--}for(k=a[w]=[],h=s?Math.min(b,w)*u-.5:r%b,p=b===Zv?0:s?w*c/b-.5:r/b|0,x=0,v=Zv,y=0;y<w;y++)f=y%b-h,m=p-(y/b|0),k[y]=g=l?Math.abs("y"===l?m:f):rb(f*f+m*m),g>x&&(x=g),g<v&&(v=g);"random"===r&&Ow(k),k.max=x-v,k.min=v,k.v=w=(parseFloat(t.amount)||parseFloat(t.each)*(b>w?w-1:l?"y"===l?w/b:b:Math.max(b,w/b))||0)*("edges"===r?-1:1),k.b=w<0?i-w:i,k.u=zw(t.amount||t.each)||0,n=n&&w<0?ck(n):n}return w=(k[e]-k.min)/k.max||0,Xb(k.b+(n?n(w):w)*k.v)+k.u}},Nw=function(e){var t=Math.pow(10,((e+"").split(".")[1]||"").length);return function(n){var r=Xb(Math.round(parseFloat(n)/e)*e*t);return(r-r%1)/t+(lb(n)?0:zw(n))}},Iw=function(e,t){var n,r,i=mb(e);return!i&&cb(e)&&(n=i=e.radius||Zv,e.values?(e=$w(e.values),(r=!lb(e[0]))&&(n*=n)):e=Nw(e.increment)),Ew(t,i?sb(e)?function(t){return r=e(t),Math.abs(r-t)<=n?r:t}:function(t){for(var i,a,o=parseFloat(r?t.x:t),s=parseFloat(r?t.y:0),l=Zv,u=0,c=e.length;c--;)(i=r?(i=e[c].x-o)*i+(a=e[c].y-s)*a:Math.abs(e[c]-o))<l&&(l=i,u=c);return u=!n||l<=n?e[u]:t,r||u===t||lb(t)?u:u+zw(t)}:Nw(e))},Fw=function(e,t,n,r){return Ew(mb(e)?!t:!0===n?!!(n=0):!r,function(){return mb(e)?e[~~(Math.random()*e.length)]:(n=n||1e-5)&&(r=n<1?Math.pow(10,(n+"").length-2):1)&&Math.floor(Math.round((e-n/2+Math.random()*(t-e+.99*n))/n)*n*r)/r})},Vw=function(e,t,n){return Ew(n,function(n){return e[~~t(n)]})},Bw=function(e){return e.replace(gb,function(e){var t=e.indexOf("[")+1,n=e.substring(t||7,t?e.indexOf("]"):e.length-1).split(yb);return Fw(t?n:+n[0],t?0:+n[1],+n[2]||1e-5)})},Ww=function(e,t,n,r,i){var a=t-e,o=r-n;return Ew(i,function(t){return n+((t-e)/a*o||0)})},Uw=function(e,t,n){var r,i,a,o=e.labels,s=Zv;for(r in o)(i=o[r]-t)<0==!!n&&i&&s>(i=Math.abs(i))&&(a=r,s=i);return a},Yw=function(e,t,n){var r,i,a,o=e.vars,s=o[t],l=bv,u=e._ctx;if(s)return r=o[t+"Params"],i=o.callbackScope||e,n&&Ob.length&&Qb(),u&&(bv=u),a=r?s.apply(i,r):s.call(i),bv=l,a},Hw=function(e){return uw(e),e.scrollTrigger&&e.scrollTrigger.kill(!!vv),e.progress()<1&&Yw(e,"onInterrupt"),e},qw=[],Xw=function(e){if(e)if(e=!e.name&&e.default||e,hb()||e.headless){var t=e.name,n=sb(e),r=t&&!n&&e.init?function(){this._props=[]}:e,i={init:zb,render:Ik,add:_k,kill:Vk,modifier:Fk,rawVars:0},a={targetTest:0,get:0,getSetter:Dk,aliases:{},register:0};if(ak(),e!==r){if(Nb[t])return;nw(r,nw(aw(e,i),a)),rw(r.prototype,rw(i,aw(e,a))),Nb[r.prop=t]=r,e.targetTest&&(Vb.push(r),Db[t]=1),t=("css"===t?"CSS":t.charAt(0).toUpperCase()+t.substr(1))+"Plugin"}Mb(t,r),e.register&&e.register(r_,r,Uk)}else qw.push(e)},Gw=255,Kw={aqua:[0,Gw,Gw],lime:[0,Gw,0],silver:[192,192,192],black:[0,0,0],maroon:[128,0,0],teal:[0,128,128],blue:[0,0,Gw],navy:[0,0,128],white:[Gw,Gw,Gw],olive:[128,128,0],yellow:[Gw,Gw,0],orange:[Gw,165,0],gray:[128,128,128],purple:[128,0,128],green:[0,128,0],red:[Gw,0,0],pink:[Gw,192,203],cyan:[0,Gw,Gw],transparent:[Gw,Gw,Gw,0]},Qw=function(e,t,n){return(6*(e+=e<0?1:e>1?-1:0)<1?t+(n-t)*e*6:e<.5?n:3*e<2?t+(n-t)*(2/3-e)*6:t)*Gw+.5|0},Zw=function(e,t,n){var r,i,a,o,s,l,u,c,d,h,p=e?lb(e)?[e>>16,e>>8&Gw,e&Gw]:0:Kw.black;if(!p){if(","===e.substr(-1)&&(e=e.substr(0,e.length-1)),Kw[e])p=Kw[e];else if("#"===e.charAt(0)){if(e.length<6&&(r=e.charAt(1),i=e.charAt(2),a=e.charAt(3),e="#"+r+r+i+i+a+a+(5===e.length?e.charAt(4)+e.charAt(4):"")),9===e.length)return[(p=parseInt(e.substr(1,6),16))>>16,p>>8&Gw,p&Gw,parseInt(e.substr(7),16)/255];p=[(e=parseInt(e.substr(1),16))>>16,e>>8&Gw,e&Gw]}else if("hsl"===e.substr(0,3))if(p=h=e.match(xb),t){if(~e.indexOf("="))return p=e.match(vb),n&&p.length<4&&(p[3]=1),p}else o=+p[0]%360/360,s=+p[1]/100,r=2*(l=+p[2]/100)-(i=l<=.5?l*(s+1):l+s-l*s),p.length>3&&(p[3]*=1),p[0]=Qw(o+1/3,r,i),p[1]=Qw(o,r,i),p[2]=Qw(o-1/3,r,i);else p=e.match(xb)||Kw.transparent;p=p.map(Number)}return t&&!h&&(r=p[0]/Gw,i=p[1]/Gw,a=p[2]/Gw,l=((u=Math.max(r,i,a))+(c=Math.min(r,i,a)))/2,u===c?o=s=0:(d=u-c,s=l>.5?d/(2-u-c):d/(u+c),o=u===r?(i-a)/d+(i<a?6:0):u===i?(a-r)/d+2:(r-i)/d+4,o*=60),p[0]=~~(o+.5),p[1]=~~(100*s+.5),p[2]=~~(100*l+.5)),n&&p.length<4&&(p[3]=1),p},Jw=function(e){var t=[],n=[],r=-1;return e.split(tk).forEach(function(e){var i=e.match(bb)||[];t.push.apply(t,i),n.push(r+=i.length+1)}),t.c=n,t},ek=function(e,t,n){var r,i,a,o,s="",l=(e+s).match(tk),u=t?"hsla(":"rgba(",c=0;if(!l)return e;if(l=l.map(function(e){return(e=Zw(e,t,1))&&u+(t?e[0]+","+e[1]+"%,"+e[2]+"%,"+e[3]:e.join(","))+")"}),n&&(a=Jw(e),(r=n.c).join(s)!==a.c.join(s)))for(o=(i=e.replace(tk,"1").split(bb)).length-1;c<o;c++)s+=i[c]+(~r.indexOf(c)?l.shift()||u+"0,0,0,0)":(a.length?a:l.length?l:n).shift());if(!i)for(o=(i=e.split(tk)).length-1;c<o;c++)s+=i[c]+l[c];return s+i[o]},tk=function(){var e,t="(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b";for(e in Kw)t+="|"+e+"\\b";return new RegExp(t+")","gi")}(),nk=/hsl[a]?\(/,rk=function(e){var t,n=e.join(" ");if(tk.lastIndex=0,tk.test(n))return t=nk.test(n),e[1]=ek(e[1],t),e[0]=ek(e[0],t,Jw(e[1])),!0},ik=(Dv=Date.now,Ov=500,Lv=33,Nv=Dv(),Iv=Nv,Vv=Fv=1e3/240,Wv=function e(t){var n,r,i,a,o=Dv()-Iv,s=!0===t;if((o>Ov||o<0)&&(Nv+=o-Lv),((n=(i=(Iv+=o)-Nv)-Vv)>0||s)&&(a=++Av.frame,Rv=i-1e3*Av.time,Av.time=i/=1e3,Vv+=n+(n>=Fv?4:Fv-n),r=1),s||(Ev=Mv(e)),r)for($v=0;$v<Bv.length;$v++)Bv[$v](i,Rv,a,t)},Av={time:0,frame:0,tick:function(){Wv(!0)},deltaRatio:function(e){return Rv/(1e3/(e||60))},wake:function(){jv&&(!_v&&hb()&&(kv=_v=window,Sv=kv.document||{},jb.gsap=r_,(kv.gsapVersions||(kv.gsapVersions=[])).push(r_.version),Tb(Cb||kv.GreenSockGlobals||!kv.gsap&&kv||{}),qw.forEach(Xw)),zv="undefined"!=typeof requestAnimationFrame&&requestAnimationFrame,Ev&&Av.sleep(),Mv=zv||function(e){return setTimeout(e,Vv-1e3*Av.time+1|0)},Pv=1,Wv(2))},sleep:function(){(zv?cancelAnimationFrame:clearTimeout)(Ev),Pv=0,Mv=zb},lagSmoothing:function(e,t){Ov=e||1/0,Lv=Math.min(t||33,Ov)},fps:function(e){Fv=1e3/(e||240),Vv=1e3*Av.time+Fv},add:function(e,t,n){var r=t?function(t,n,i,a){e(t,n,i,a),Av.remove(r)}:e;return Av.remove(e),Bv[n?"unshift":"push"](r),ak(),r},remove:function(e,t){~(t=Bv.indexOf(e))&&Bv.splice(t,1)&&$v>=t&&$v--},_listeners:Bv=[]}),ak=function(){return!Pv&&ik.wake()},ok={},sk=/^[\d.\-M][\d.\-,\s]/,lk=/["']/g,uk=function(e){for(var t,n,r,i={},a=e.substr(1,e.length-3).split(":"),o=a[0],s=1,l=a.length;s<l;s++)n=a[s],t=s!==l-1?n.lastIndexOf(","):n.length,r=n.substr(0,t),i[o]=isNaN(r)?r.replace(lk,"").trim():+r,o=n.substr(t+1).trim();return i},ck=function(e){return function(t){return 1-e(1-t)}},dk=function e(t,n){for(var r,i=t._first;i;)i instanceof vk?e(i,n):!i.vars.yoyoEase||i._yoyo&&i._repeat||i._yoyo===n||(i.timeline?e(i.timeline,n):(r=i._ease,i._ease=i._yEase,i._yEase=r,i._yoyo=n)),i=i._next},hk=function(e,t){return e&&(sb(e)?e:ok[e]||function(e){var t,n,r,i,a=(e+"").split("("),o=ok[a[0]];return o&&a.length>1&&o.config?o.config.apply(null,~e.indexOf("{")?[uk(a[1])]:(t=e,n=t.indexOf("(")+1,r=t.indexOf(")"),i=t.indexOf("(",n),t.substring(n,~i&&i<r?t.indexOf(")",r+1):r)).split(",").map(ew)):ok._CE&&sk.test(e)?ok._CE("",e):o}(e))||t},pk=function(e,t,n,r){void 0===n&&(n=function(e){return 1-t(1-e)}),void 0===r&&(r=function(e){return e<.5?t(2*e)/2:1-t(2*(1-e))/2});var i,a={easeIn:t,easeOut:n,easeInOut:r};return Hb(e,function(e){for(var t in ok[e]=jb[e]=a,ok[i=e.toLowerCase()]=n,a)ok[i+("easeIn"===t?".in":"easeOut"===t?".out":".inOut")]=ok[e+"."+t]=a[t]}),a},fk=function(e){return function(t){return t<.5?(1-e(1-2*t))/2:.5+e(2*(t-.5))/2}},mk=function e(t,n,r){var i=n>=1?n:1,a=(r||(t?.3:.45))/(n<1?n:1),o=a/eb*(Math.asin(1/i)||0),s=function(e){return 1===e?1:i*Math.pow(2,-10*e)*ab((e-o)*a)+1},l="out"===t?s:"in"===t?function(e){return 1-s(1-e)}:fk(s);return a=eb/a,l.config=function(n,r){return e(t,n,r)},l},gk=function e(t,n){void 0===n&&(n=1.70158);var r=function(e){return e?--e*e*((n+1)*e+n)+1:0},i="out"===t?r:"in"===t?function(e){return 1-r(1-e)}:fk(r);return i.config=function(n){return e(t,n)},i};Hb("Linear,Quad,Cubic,Quart,Quint,Strong",function(e,t){var n=t<5?t+1:t;pk(e+",Power"+(n-1),t?function(e){return Math.pow(e,n)}:function(e){return e},function(e){return 1-Math.pow(1-e,n)},function(e){return e<.5?Math.pow(2*e,n)/2:1-Math.pow(2*(1-e),n)/2})}),ok.Linear.easeNone=ok.none=ok.Linear.easeIn,pk("Elastic",mk("in"),mk("out"),mk()),Uv=7.5625,qv=2*(Hv=1/(Yv=2.75)),Xv=2.5*Hv,pk("Bounce",function(e){return 1-Gv(1-e)},Gv=function(e){return e<Hv?Uv*e*e:e<qv?Uv*Math.pow(e-1.5/Yv,2)+.75:e<Xv?Uv*(e-=2.25/Yv)*e+.9375:Uv*Math.pow(e-2.625/Yv,2)+.984375}),pk("Expo",function(e){return Math.pow(2,10*(e-1))*e+e*e*e*e*e*e*(1-e)}),pk("Circ",function(e){return-(rb(1-e*e)-1)}),pk("Sine",function(e){return 1===e?1:1-ib(e*tb)}),pk("Back",gk("in"),gk("out"),gk()),ok.SteppedEase=ok.steps=jb.SteppedEase={config:function(e,t){void 0===e&&(e=1);var n=1/e,r=e+(t?0:1),i=t?1:0;return function(e){return((r*Mw(0,.99999999,e)|0)+i)*n}}},Qv.ease=ok["quad.out"],Hb("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt",function(e){return Bb+=e+","+e+"Params,"});var yk=function(e,t){this.id=nb++,e._gsap=this,this.target=e,this.harness=t,this.get=t?t.get:Yb,this.set=t?t.getSetter:Dk},xk=function(){function e(e){this.vars=e,this._delay=+e.delay||0,(this._repeat=e.repeat===1/0?-2:e.repeat||0)&&(this._rDelay=e.repeatDelay||0,this._yoyo=!!e.yoyo||!!e.yoyoEase),this._ts=1,Sw(this,+e.duration,1,1),this.data=e.data,bv&&(this._ctx=bv,bv.data.push(this)),Pv||ik.wake()}var t=e.prototype;return t.delay=function(e){return e||0===e?(this.parent&&this.parent.smoothChildTiming&&this.startTime(this._start+e-this._delay),this._delay=e,this):this._delay},t.duration=function(e){return arguments.length?this.totalDuration(this._repeat>0?e+(e+this._rDelay)*this._repeat:e):this.totalDuration()&&this._dur},t.totalDuration=function(e){return arguments.length?(this._dirty=0,Sw(this,this._repeat<0?e:(e-this._repeat*this._rDelay)/(this._repeat+1))):this._tDur},t.totalTime=function(e,t){if(ak(),!arguments.length)return this._tTime;var n=this._dp;if(n&&n.smoothChildTiming&&this._ts){for(yw(this,e),!n._dp||n.parent||xw(n,this);n&&n.parent;)n.parent._time!==n._start+(n._ts>=0?n._tTime/n._ts:(n.totalDuration()-n._tTime)/-n._ts)&&n.totalTime(n._tTime,!0),n=n.parent;!this.parent&&this._dp.autoRemoveChildren&&(this._ts>0&&e<this._tDur||this._ts<0&&e>0||!this._tDur&&!e)&&vw(this._dp,this,this._start-this._delay)}return(this._tTime!==e||!this._dur&&!t||this._initted&&Math.abs(this._zTime)===Jv||!this._initted&&this._dur&&e||!e&&!this._initted&&(this.add||this._ptLookup))&&(this._ts||(this._pTime=e),Jb(this,e,t)),this},t.time=function(e,t){return arguments.length?this.totalTime(Math.min(this.totalDuration(),e+pw(this))%(this._dur+this._rDelay)||(e?this._dur:0),t):this._time},t.totalProgress=function(e,t){return arguments.length?this.totalTime(this.totalDuration()*e,t):this.totalDuration()?Math.min(1,this._tTime/this._tDur):this.rawTime()>=0&&this._initted?1:0},t.progress=function(e,t){return arguments.length?this.totalTime(this.duration()*(!this._yoyo||1&this.iteration()?e:1-e)+pw(this),t):this.duration()?Math.min(1,this._time/this._dur):this.rawTime()>0?1:0},t.iteration=function(e,t){var n=this.duration()+this._rDelay;return arguments.length?this.totalTime(this._time+(e-1)*n,t):this._repeat?fw(this._tTime,n)+1:1},t.timeScale=function(e,t){if(!arguments.length)return-1e-8===this._rts?0:this._rts;if(this._rts===e)return this;var n=this.parent&&this._ts?mw(this.parent._time,this):this._tTime;return this._rts=+e||0,this._ts=this._ps||-1e-8===e?0:this._rts,this.totalTime(Mw(-Math.abs(this._delay),this.totalDuration(),n),!1!==t),gw(this),function(e){for(var t=e.parent;t&&t.parent;)t._dirty=1,t.totalDuration(),t=t.parent;return e}(this)},t.paused=function(e){return arguments.length?(this._ps!==e&&(this._ps=e,e?(this._pTime=this._tTime||Math.max(-this._delay,this.rawTime()),this._ts=this._act=0):(ak(),this._ts=this._rts,this.totalTime(this.parent&&!this.parent.smoothChildTiming?this.rawTime():this._tTime||this._pTime,1===this.progress()&&Math.abs(this._zTime)!==Jv&&(this._tTime-=Jv)))),this):this._ps},t.startTime=function(e){if(arguments.length){this._start=Xb(e);var t=this.parent||this._dp;return t&&(t._sort||!this.parent)&&vw(t,this,this._start-this._delay),this}return this._start},t.endTime=function(e){return this._start+(db(e)?this.totalDuration():this.duration())/Math.abs(this._ts||1)},t.rawTime=function(e){var t=this.parent||this._dp;return t?e&&(!this._ts||this._repeat&&this._time&&this.totalProgress()<1)?this._tTime%(this._dur+this._rDelay):this._ts?mw(t.rawTime(e),this):this._tTime:this._tTime},t.revert=function(e){void 0===e&&(e=$b);var t=vv;return vv=e,Zb(this)&&(this.timeline&&this.timeline.revert(e),this.totalTime(-.01,e.suppressEvents)),"nested"!==this.data&&!1!==e.kill&&this.kill(),vv=t,this},t.globalTime=function(e){for(var t=this,n=arguments.length?e:t.rawTime();t;)n=t._start+n/(Math.abs(t._ts)||1),t=t._dp;return!this.parent&&this._sat?this._sat.globalTime(e):n},t.repeat=function(e){return arguments.length?(this._repeat=e===1/0?-2:e,jw(this)):-2===this._repeat?1/0:this._repeat},t.repeatDelay=function(e){if(arguments.length){var t=this._time;return this._rDelay=e,jw(this),t?this.time(t):this}return this._rDelay},t.yoyo=function(e){return arguments.length?(this._yoyo=e,this):this._yoyo},t.seek=function(e,t){return this.totalTime(Tw(this,e),db(t))},t.restart=function(e,t){return this.play().totalTime(e?-this._delay:0,db(t)),this._dur||(this._zTime=-1e-8),this},t.play=function(e,t){return null!=e&&this.seek(e,t),this.reversed(!1).paused(!1)},t.reverse=function(e,t){return null!=e&&this.seek(e||this.totalDuration(),t),this.reversed(!0).paused(!1)},t.pause=function(e,t){return null!=e&&this.seek(e,t),this.paused(!0)},t.resume=function(){return this.paused(!1)},t.reversed=function(e){return arguments.length?(!!e!==this.reversed()&&this.timeScale(-this._rts||(e?-1e-8:0)),this):this._rts<0},t.invalidate=function(){return this._initted=this._act=0,this._zTime=-1e-8,this},t.isActive=function(){var e,t=this.parent||this._dp,n=this._start;return!(t&&!(this._ts&&this._initted&&t.isActive()&&(e=t.rawTime(!0))>=n&&e<this.endTime(!0)-Jv))},t.eventCallback=function(e,t,n){var r=this.vars;return arguments.length>1?(t?(r[e]=t,n&&(r[e+"Params"]=n),"onUpdate"===e&&(this._onUpdate=t)):delete r[e],this):r[e]},t.then=function(e){var t=this,n=t._prom;return new Promise(function(r){var i=sb(e)?e:tw,a=function(){var e=t.then;t.then=null,n&&n(),sb(i)&&(i=i(t))&&(i.then||i===t)&&(t.then=e),r(i),t.then=e};t._initted&&1===t.totalProgress()&&t._ts>=0||!t._tTime&&t._ts<0?a():t._prom=a})},t.kill=function(){Hw(this)},e}();nw(xk.prototype,{_time:0,_start:0,_end:0,_tTime:0,_tDur:0,_dirty:0,_repeat:0,_yoyo:!1,parent:null,_initted:!1,_rDelay:0,_ts:1,_dp:0,ratio:0,_zTime:-1e-8,_prom:0,_ps:!1,_rts:1});var vk=function(e){function t(t,n){var r;return void 0===t&&(t={}),(r=e.call(this,t)||this).labels={},r.smoothChildTiming=!!t.smoothChildTiming,r.autoRemoveChildren=!!t.autoRemoveChildren,r._sort=db(t.sortChildren),wv&&vw(t.parent||wv,gv(r),n),t.reversed&&r.reverse(),t.paused&&r.paused(!0),t.scrollTrigger&&bw(gv(r),t.scrollTrigger),r}yv(t,e);var n=t.prototype;return n.to=function(e,t,n){return Pw(0,arguments,this),this},n.from=function(e,t,n){return Pw(1,arguments,this),this},n.fromTo=function(e,t,n,r){return Pw(2,arguments,this),this},n.set=function(e,t,n){return t.duration=0,t.parent=this,ow(t).repeatDelay||(t.repeat=0),t.immediateRender=!!t.immediateRender,new Mk(e,t,Tw(this,n),1),this},n.call=function(e,t,n){return vw(this,Mk.delayedCall(0,e,t),n)},n.staggerTo=function(e,t,n,r,i,a,o){return n.duration=t,n.stagger=n.stagger||r,n.onComplete=a,n.onCompleteParams=o,n.parent=this,new Mk(e,n,Tw(this,i)),this},n.staggerFrom=function(e,t,n,r,i,a,o){return n.runBackwards=1,ow(n).immediateRender=db(n.immediateRender),this.staggerTo(e,t,n,r,i,a,o)},n.staggerFromTo=function(e,t,n,r,i,a,o,s){return r.startAt=n,ow(r).immediateRender=db(r.immediateRender),this.staggerTo(e,t,r,i,a,o,s)},n.render=function(e,t,n){var r,i,a,o,s,l,u,c,d,h,p,f,m=this._time,g=this._dirty?this.totalDuration():this._tDur,y=this._dur,x=e<=0?0:Xb(e),v=this._zTime<0!=e<0&&(this._initted||!y);if(this!==wv&&x>g&&e>=0&&(x=g),x!==this._tTime||n||v){if(m!==this._time&&y&&(x+=this._time-m,e+=this._time-m),r=x,d=this._start,l=!(c=this._ts),v&&(y||(m=this._zTime),(e||!t)&&(this._zTime=e)),this._repeat){if(p=this._yoyo,s=y+this._rDelay,this._repeat<-1&&e<0)return this.totalTime(100*s+e,t,n);if(r=Xb(x%s),x===g?(o=this._repeat,r=y):((o=~~(h=Xb(x/s)))&&o===h&&(r=y,o--),r>y&&(r=y)),h=fw(this._tTime,s),!m&&this._tTime&&h!==o&&this._tTime-h*s-this._dur<=0&&(h=o),p&&1&o&&(r=y-r,f=1),o!==h&&!this._lock){var b=p&&1&h,w=b===(p&&1&o);if(o<h&&(b=!b),m=b?0:x%y?y:x,this._lock=1,this.render(m||(f?0:Xb(o*s)),t,!y)._lock=0,this._tTime=x,!t&&this.parent&&Yw(this,"onRepeat"),this.vars.repeatRefresh&&!f&&(this.invalidate()._lock=1,h=o),m&&m!==this._time||l!==!this._ts||this.vars.onRepeat&&!this.parent&&!this._act)return this;if(y=this._dur,g=this._tDur,w&&(this._lock=2,m=b?y:-1e-4,this.render(m,!0),this.vars.repeatRefresh&&!f&&this.invalidate()),this._lock=0,!this._ts&&!l)return this;dk(this,f)}}if(this._hasPause&&!this._forcing&&this._lock<2&&(u=function(e,t,n){var r;if(n>t)for(r=e._first;r&&r._start<=n;){if("isPause"===r.data&&r._start>t)return r;r=r._next}else for(r=e._last;r&&r._start>=n;){if("isPause"===r.data&&r._start<t)return r;r=r._prev}}(this,Xb(m),Xb(r)),u&&(x-=r-(r=u._start))),this._tTime=x,this._time=r,this._act=!c,this._initted||(this._onUpdate=this.vars.onUpdate,this._initted=1,this._zTime=e,m=0),!m&&x&&y&&!t&&!h&&(Yw(this,"onStart"),this._tTime!==x))return this;if(r>=m&&e>=0)for(i=this._first;i;){if(a=i._next,(i._act||r>=i._start)&&i._ts&&u!==i){if(i.parent!==this)return this.render(e,t,n);if(i.render(i._ts>0?(r-i._start)*i._ts:(i._dirty?i.totalDuration():i._tDur)+(r-i._start)*i._ts,t,n),r!==this._time||!this._ts&&!l){u=0,a&&(x+=this._zTime=-1e-8);break}}i=a}else{i=this._last;for(var k=e<0?e:r;i;){if(a=i._prev,(i._act||k<=i._end)&&i._ts&&u!==i){if(i.parent!==this)return this.render(e,t,n);if(i.render(i._ts>0?(k-i._start)*i._ts:(i._dirty?i.totalDuration():i._tDur)+(k-i._start)*i._ts,t,n||vv&&Zb(i)),r!==this._time||!this._ts&&!l){u=0,a&&(x+=this._zTime=k?-1e-8:Jv);break}}i=a}}if(u&&!t&&(this.pause(),u.render(r>=m?0:-1e-8)._zTime=r>=m?1:-1,this._ts))return this._start=d,gw(this),this.render(e,t,n);this._onUpdate&&!t&&Yw(this,"onUpdate",!0),(x===g&&this._tTime>=this.totalDuration()||!x&&m)&&(d!==this._start&&Math.abs(c)===Math.abs(this._ts)||this._lock||((e||!y)&&(x===g&&this._ts>0||!x&&this._ts<0)&&uw(this,1),t||e<0&&!m||!x&&!m&&g||(Yw(this,x===g&&e>=0?"onComplete":"onReverseComplete",!0),this._prom&&!(x<g&&this.timeScale()>0)&&this._prom())))}return this},n.add=function(e,t){var n=this;if(lb(t)||(t=Tw(this,t,e)),!(e instanceof xk)){if(mb(e))return e.forEach(function(e){return n.add(e,t)}),this;if(ob(e))return this.addLabel(e,t);if(!sb(e))return this;e=Mk.delayedCall(0,e)}return this!==e?vw(this,e,t):this},n.getChildren=function(e,t,n,r){void 0===e&&(e=!0),void 0===t&&(t=!0),void 0===n&&(n=!0),void 0===r&&(r=-1e8);for(var i=[],a=this._first;a;)a._start>=r&&(a instanceof Mk?t&&i.push(a):(n&&i.push(a),e&&i.push.apply(i,a.getChildren(!0,t,n)))),a=a._next;return i},n.getById=function(e){for(var t=this.getChildren(1,1,1),n=t.length;n--;)if(t[n].vars.id===e)return t[n]},n.remove=function(e){return ob(e)?this.removeLabel(e):sb(e)?this.killTweensOf(e):(e.parent===this&&lw(this,e),e===this._recent&&(this._recent=this._last),cw(this))},n.totalTime=function(t,n){return arguments.length?(this._forcing=1,!this._dp&&this._ts&&(this._start=Xb(ik.time-(this._ts>0?t/this._ts:(this.totalDuration()-t)/-this._ts))),e.prototype.totalTime.call(this,t,n),this._forcing=0,this):this._tTime},n.addLabel=function(e,t){return this.labels[e]=Tw(this,t),this},n.removeLabel=function(e){return delete this.labels[e],this},n.addPause=function(e,t,n){var r=Mk.delayedCall(0,t||zb,n);return r.data="isPause",this._hasPause=1,vw(this,r,Tw(this,e))},n.removePause=function(e){var t=this._first;for(e=Tw(this,e);t;)t._start===e&&"isPause"===t.data&&uw(t),t=t._next},n.killTweensOf=function(e,t,n){for(var r=this.getTweensOf(e,n),i=r.length;i--;)bk!==r[i]&&r[i].kill(e,t);return this},n.getTweensOf=function(e,t){for(var n,r=[],i=$w(e),a=this._first,o=lb(t);a;)a instanceof Mk?Kb(a._targets,i)&&(o?(!bk||a._initted&&a._ts)&&a.globalTime(0)<=t&&a.globalTime(a.totalDuration())>t:!t||a.isActive())&&r.push(a):(n=a.getTweensOf(i,t)).length&&r.push.apply(r,n),a=a._next;return r},n.tweenTo=function(e,t){t=t||{};var n,r=this,i=Tw(r,e),a=t,o=a.startAt,s=a.onStart,l=a.onStartParams,u=a.immediateRender,c=Mk.to(r,nw({ease:t.ease||"none",lazy:!1,immediateRender:!1,time:i,overwrite:"auto",duration:t.duration||Math.abs((i-(o&&"time"in o?o.time:r._time))/r.timeScale())||Jv,onStart:function(){if(r.pause(),!n){var e=t.duration||Math.abs((i-(o&&"time"in o?o.time:r._time))/r.timeScale());c._dur!==e&&Sw(c,e,0,1).render(c._time,!0,!0),n=1}s&&s.apply(c,l||[])}},t));return u?c.render(0):c},n.tweenFromTo=function(e,t,n){return this.tweenTo(t,nw({startAt:{time:Tw(this,e)}},n))},n.recent=function(){return this._recent},n.nextLabel=function(e){return void 0===e&&(e=this._time),Uw(this,Tw(this,e))},n.previousLabel=function(e){return void 0===e&&(e=this._time),Uw(this,Tw(this,e),1)},n.currentLabel=function(e){return arguments.length?this.seek(e,!0):this.previousLabel(this._time+Jv)},n.shiftChildren=function(e,t,n){void 0===n&&(n=0);var r,i=this._first,a=this.labels;for(e=Xb(e);i;)i._start>=n&&(i._start+=e,i._end+=e),i=i._next;if(t)for(r in a)a[r]>=n&&(a[r]+=e);return cw(this)},n.invalidate=function(t){var n=this._first;for(this._lock=0;n;)n.invalidate(t),n=n._next;return e.prototype.invalidate.call(this,t)},n.clear=function(e){void 0===e&&(e=!0);for(var t,n=this._first;n;)t=n._next,this.remove(n),n=t;return this._dp&&(this._time=this._tTime=this._pTime=0),e&&(this.labels={}),cw(this)},n.totalDuration=function(e){var t,n,r,i=0,a=this,o=a._last,s=Zv;if(arguments.length)return a.timeScale((a._repeat<0?a.duration():a.totalDuration())/(a.reversed()?-e:e));if(a._dirty){for(r=a.parent;o;)t=o._prev,o._dirty&&o.totalDuration(),(n=o._start)>s&&a._sort&&o._ts&&!a._lock?(a._lock=1,vw(a,o,n-o._delay,1)._lock=0):s=n,n<0&&o._ts&&(i-=n,(!r&&!a._dp||r&&r.smoothChildTiming)&&(a._start+=Xb(n/a._ts),a._time-=n,a._tTime-=n),a.shiftChildren(-n,!1,-1/0),s=0),o._end>i&&o._ts&&(i=o._end),o=t;Sw(a,a===wv&&a._time>i?a._time:i,1,1),a._dirty=0}return a._tDur},t.updateRoot=function(e){if(wv._ts&&(Jb(wv,mw(e,wv)),Cv=ik.frame),ik.frame>=Fb){Fb+=Kv.autoSleep||120;var t=wv._first;if((!t||!t._ts)&&Kv.autoSleep&&ik._listeners.length<2){for(;t&&!t._ts;)t=t._next;t||ik.sleep()}}},t}(xk);nw(vk.prototype,{_lock:0,_hasPause:0,_forcing:0});var bk,wk,kk=function(e,t,n,r,i,a,o){var s,l,u,c,d,h,p,f,m=new Uk(this._pt,e,t,0,1,Nk,null,i),g=0,y=0;for(m.b=n,m.e=r,n+="",(p=~(r+="").indexOf("random("))&&(r=Bw(r)),a&&(a(f=[n,r],e,t),n=f[0],r=f[1]),l=n.match(wb)||[];s=wb.exec(r);)c=s[0],d=r.substring(g,s.index),u?u=(u+1)%5:"rgba("===d.substr(-5)&&(u=1),c!==l[y++]&&(h=parseFloat(l[y-1])||0,m._pt={_next:m._pt,p:d||1===y?d:",",s:h,c:"="===c.charAt(1)?Gb(h,c)-h:parseFloat(c)-h,m:u&&u<4?Math.round:0},g=wb.lastIndex);return m.c=g<r.length?r.substring(g,r.length):"",m.fp=o,(kb.test(r)||p)&&(m.e=0),this._pt=m,m},_k=function(e,t,n,r,i,a,o,s,l,u){sb(r)&&(r=r(i||0,e,a));var c,d=e[t],h="get"!==n?n:sb(d)?l?e[t.indexOf("set")||!sb(e["get"+t.substr(3)])?t:"get"+t.substr(3)](l):e[t]():d,p=sb(d)?l?Rk:Ak:zk;if(ob(r)&&(~r.indexOf("random(")&&(r=Bw(r)),"="===r.charAt(1)&&((c=Gb(h,r)+(zw(h)||0))||0===c)&&(r=c)),!u||h!==r||wk)return isNaN(h*r)||""===r?(!d&&!(t in e)&&Pb(t,r),kk.call(this,e,t,h,r,p,s||Kv.stringFilter,l)):(c=new Uk(this._pt,e,t,+h||0,r-(h||0),"boolean"==typeof d?Lk:Ok,0,p),l&&(c.fp=l),o&&c.modifier(o,this,e),this._pt=c)},Sk=function(e,t,n,r,i,a){var o,s,l,u;if(Nb[e]&&!1!==(o=new Nb[e]).init(i,o.rawVars?t[e]:function(e,t,n,r,i){if(sb(e)&&(e=Tk(e,i,t,n,r)),!cb(e)||e.style&&e.nodeType||mb(e)||fb(e))return ob(e)?Tk(e,i,t,n,r):e;var a,o={};for(a in e)o[a]=Tk(e[a],i,t,n,r);return o}(t[e],r,i,a,n),n,r,a)&&(n._pt=s=new Uk(n._pt,i,e,0,1,o.render,o,0,o.priority),n!==Tv))for(l=n._ptLookup[n._targets.indexOf(i)],u=o._props.length;u--;)l[o._props[u]]=s;return o},jk=function e(t,n,r){var i,a,o,s,l,u,c,d,h,p,f,m,g,y=t.vars,x=y.ease,v=y.startAt,b=y.immediateRender,w=y.lazy,k=y.onUpdate,_=y.runBackwards,S=y.yoyoEase,j=y.keyframes,C=y.autoRevert,T=t._dur,P=t._startAt,E=t._targets,M=t.parent,z=M&&"nested"===M.data?M.vars.targets:E,A="auto"===t._overwrite&&!xv,R=t.timeline;if(R&&(!j||!x)&&(x="none"),t._ease=hk(x,Qv.ease),t._yEase=S?ck(hk(!0===S?x:S,Qv.ease)):0,S&&t._yoyo&&!t._repeat&&(S=t._yEase,t._yEase=t._ease,t._ease=S),t._from=!R&&!!y.runBackwards,!R||j&&!y.stagger){if(m=(d=E[0]?Ub(E[0]).harness:0)&&y[d.prop],i=aw(y,Db),P&&(P._zTime<0&&P.progress(1),n<0&&_&&b&&!C?P.render(-1,!0):P.revert(_&&T?Rb:Ab),P._lazy=0),v){if(uw(t._startAt=Mk.set(E,nw({data:"isStart",overwrite:!1,parent:M,immediateRender:!0,lazy:!P&&db(w),startAt:null,delay:0,onUpdate:k&&function(){return Yw(t,"onUpdate")},stagger:0},v))),t._startAt._dp=0,t._startAt._sat=t,n<0&&(vv||!b&&!C)&&t._startAt.revert(Rb),b&&T&&n<=0&&r<=0)return void(n&&(t._zTime=n))}else if(_&&T&&!P)if(n&&(b=!1),o=nw({overwrite:!1,data:"isFromStart",lazy:b&&!P&&db(w),immediateRender:b,stagger:0,parent:M},i),m&&(o[d.prop]=m),uw(t._startAt=Mk.set(E,o)),t._startAt._dp=0,t._startAt._sat=t,n<0&&(vv?t._startAt.revert(Rb):t._startAt.render(-1,!0)),t._zTime=n,b){if(!n)return}else e(t._startAt,Jv,Jv);for(t._pt=t._ptCache=0,w=T&&db(w)||w&&!T,a=0;a<E.length;a++){if(c=(l=E[a])._gsap||Wb(E)[a]._gsap,t._ptLookup[a]=p={},Lb[c.id]&&Ob.length&&Qb(),f=z===E?a:z.indexOf(l),d&&!1!==(h=new d).init(l,m||i,t,f,z)&&(t._pt=s=new Uk(t._pt,l,h.name,0,1,h.render,h,0,h.priority),h._props.forEach(function(e){p[e]=s}),h.priority&&(u=1)),!d||m)for(o in i)Nb[o]&&(h=Sk(o,i,t,f,l,z))?h.priority&&(u=1):p[o]=s=_k.call(t,l,o,"get",i[o],f,z,0,y.stringFilter);t._op&&t._op[a]&&t.kill(l,t._op[a]),A&&t._pt&&(bk=t,wv.killTweensOf(l,p,t.globalTime(n)),g=!t.parent,bk=0),t._pt&&w&&(Lb[c.id]=1)}u&&Wk(t),t._onInit&&t._onInit(t)}t._onUpdate=k,t._initted=(!t._op||t._pt)&&!g,j&&n<=0&&R.render(Zv,!0,!0)},Ck=function(e,t,n,r){var i,a,o=t.ease||r||"power1.inOut";if(mb(t))a=n[e]||(n[e]=[]),t.forEach(function(e,n){return a.push({t:n/(t.length-1)*100,v:e,e:o})});else for(i in t)a=n[i]||(n[i]=[]),"ease"===i||a.push({t:parseFloat(e),v:t[i],e:o})},Tk=function(e,t,n,r,i){return sb(e)?e.call(t,n,r,i):ob(e)&&~e.indexOf("random(")?Bw(e):e},Pk=Bb+"repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,autoRevert",Ek={};Hb(Pk+",id,stagger,delay,duration,paused,scrollTrigger",function(e){return Ek[e]=1});var Mk=function(e){function t(t,n,r,i){var a;"number"==typeof n&&(r.duration=n,n=r,r=null);var o,s,l,u,c,d,h,p,f=(a=e.call(this,i?n:ow(n))||this).vars,m=f.duration,g=f.delay,y=f.immediateRender,x=f.stagger,v=f.overwrite,b=f.keyframes,w=f.defaults,k=f.scrollTrigger,_=f.yoyoEase,S=n.parent||wv,j=(mb(t)||fb(t)?lb(t[0]):"length"in n)?[t]:$w(t);if(a._targets=j.length?Wb(j):Eb("GSAP target "+t+" not found. https://gsap.com",!Kv.nullTargetWarn)||[],a._ptLookup=[],a._overwrite=v,b||x||pb(m)||pb(g)){if(n=a.vars,(o=a.timeline=new vk({data:"nested",defaults:w||{},targets:S&&"nested"===S.data?S.vars.targets:j})).kill(),o.parent=o._dp=gv(a),o._start=0,x||pb(m)||pb(g)){if(u=j.length,h=x&&Lw(x),cb(x))for(c in x)~Pk.indexOf(c)&&(p||(p={}),p[c]=x[c]);for(s=0;s<u;s++)(l=aw(n,Ek)).stagger=0,_&&(l.yoyoEase=_),p&&rw(l,p),d=j[s],l.duration=+Tk(m,gv(a),s,d,j),l.delay=(+Tk(g,gv(a),s,d,j)||0)-a._delay,!x&&1===u&&l.delay&&(a._delay=g=l.delay,a._start+=g,l.delay=0),o.to(d,l,h?h(s,d,j):0),o._ease=ok.none;o.duration()?m=g=0:a.timeline=0}else if(b){ow(nw(o.vars.defaults,{ease:"none"})),o._ease=hk(b.ease||n.ease||"none");var C,T,P,E=0;if(mb(b))b.forEach(function(e){return o.to(j,e,">")}),o.duration();else{for(c in l={},b)"ease"===c||"easeEach"===c||Ck(c,b[c],l,b.easeEach);for(c in l)for(C=l[c].sort(function(e,t){return e.t-t.t}),E=0,s=0;s<C.length;s++)(P={ease:(T=C[s]).e,duration:(T.t-(s?C[s-1].t:0))/100*m})[c]=T.v,o.to(j,P,E),E+=P.duration;o.duration()<m&&o.to({},{duration:m-o.duration()})}}m||a.duration(m=o.duration())}else a.timeline=0;return!0!==v||xv||(bk=gv(a),wv.killTweensOf(j),bk=0),vw(S,gv(a),r),n.reversed&&a.reverse(),n.paused&&a.paused(!0),(y||!m&&!b&&a._start===Xb(S._time)&&db(y)&&hw(gv(a))&&"nested"!==S.data)&&(a._tTime=-1e-8,a.render(Math.max(0,-g)||0)),k&&bw(gv(a),k),a}yv(t,e);var n=t.prototype;return n.render=function(e,t,n){var r,i,a,o,s,l,u,c,d,h=this._time,p=this._tDur,f=this._dur,m=e<0,g=e>p-Jv&&!m?p:e<Jv?0:e;if(f){if(g!==this._tTime||!e||n||!this._initted&&this._tTime||this._startAt&&this._zTime<0!==m||this._lazy){if(r=g,c=this.timeline,this._repeat){if(o=f+this._rDelay,this._repeat<-1&&m)return this.totalTime(100*o+e,t,n);if(r=Xb(g%o),g===p?(a=this._repeat,r=f):(a=~~(s=Xb(g/o)))&&a===s?(r=f,a--):r>f&&(r=f),(l=this._yoyo&&1&a)&&(d=this._yEase,r=f-r),s=fw(this._tTime,o),r===h&&!n&&this._initted&&a===s)return this._tTime=g,this;a!==s&&(c&&this._yEase&&dk(c,l),this.vars.repeatRefresh&&!l&&!this._lock&&r!==o&&this._initted&&(this._lock=n=1,this.render(Xb(o*a),!0).invalidate()._lock=0))}if(!this._initted){if(ww(this,m?e:r,n,t,g))return this._tTime=0,this;if(!(h===this._time||n&&this.vars.repeatRefresh&&a!==s))return this;if(f!==this._dur)return this.render(e,t,n)}if(this._tTime=g,this._time=r,!this._act&&this._ts&&(this._act=1,this._lazy=0),this.ratio=u=(d||this._ease)(r/f),this._from&&(this.ratio=u=1-u),!h&&g&&!t&&!s&&(Yw(this,"onStart"),this._tTime!==g))return this;for(i=this._pt;i;)i.r(u,i.d),i=i._next;c&&c.render(e<0?e:c._dur*c._ease(r/this._dur),t,n)||this._startAt&&(this._zTime=e),this._onUpdate&&!t&&(m&&dw(this,e,0,n),Yw(this,"onUpdate")),this._repeat&&a!==s&&this.vars.onRepeat&&!t&&this.parent&&Yw(this,"onRepeat"),g!==this._tDur&&g||this._tTime!==g||(m&&!this._onUpdate&&dw(this,e,0,!0),(e||!f)&&(g===this._tDur&&this._ts>0||!g&&this._ts<0)&&uw(this,1),t||m&&!h||!(g||h||l)||(Yw(this,g===p?"onComplete":"onReverseComplete",!0),this._prom&&!(g<p&&this.timeScale()>0)&&this._prom()))}}else!function(e,t,n,r){var i,a,o,s=e.ratio,l=t<0||!t&&(!e._start&&kw(e)&&(e._initted||!_w(e))||(e._ts<0||e._dp._ts<0)&&!_w(e))?0:1,u=e._rDelay,c=0;if(u&&e._repeat&&(c=Mw(0,e._tDur,t),a=fw(c,u),e._yoyo&&1&a&&(l=1-l),a!==fw(e._tTime,u)&&(s=1-l,e.vars.repeatRefresh&&e._initted&&e.invalidate())),l!==s||vv||r||e._zTime===Jv||!t&&e._zTime){if(!e._initted&&ww(e,t,r,n,c))return;for(o=e._zTime,e._zTime=t||(n?Jv:0),n||(n=t&&!o),e.ratio=l,e._from&&(l=1-l),e._time=0,e._tTime=c,i=e._pt;i;)i.r(l,i.d),i=i._next;t<0&&dw(e,t,0,!0),e._onUpdate&&!n&&Yw(e,"onUpdate"),c&&e._repeat&&!n&&e.parent&&Yw(e,"onRepeat"),(t>=e._tDur||t<0)&&e.ratio===l&&(l&&uw(e,1),n||vv||(Yw(e,l?"onComplete":"onReverseComplete",!0),e._prom&&e._prom()))}else e._zTime||(e._zTime=t)}(this,e,t,n);return this},n.targets=function(){return this._targets},n.invalidate=function(t){return(!t||!this.vars.runBackwards)&&(this._startAt=0),this._pt=this._op=this._onUpdate=this._lazy=this.ratio=0,this._ptLookup=[],this.timeline&&this.timeline.invalidate(t),e.prototype.invalidate.call(this,t)},n.resetTo=function(e,t,n,r,i){Pv||ik.wake(),this._ts||this.play();var a=Math.min(this._dur,(this._dp._time-this._start)*this._ts);return this._initted||jk(this,a),function(e,t,n,r,i,a,o,s){var l,u,c,d,h=(e._pt&&e._ptCache||(e._ptCache={}))[t];if(!h)for(h=e._ptCache[t]=[],c=e._ptLookup,d=e._targets.length;d--;){if((l=c[d][t])&&l.d&&l.d._pt)for(l=l.d._pt;l&&l.p!==t&&l.fp!==t;)l=l._next;if(!l)return wk=1,e.vars[t]="+=0",jk(e,o),wk=0,s?Eb(t+" not eligible for reset"):1;h.push(l)}for(d=h.length;d--;)(l=(u=h[d])._pt||u).s=!r&&0!==r||i?l.s+(r||0)+a*l.c:r,l.c=n-l.s,u.e&&(u.e=qb(n)+zw(u.e)),u.b&&(u.b=l.s+zw(u.b))}(this,e,t,n,r,this._ease(a/this._dur),a,i)?this.resetTo(e,t,n,r,1):(yw(this,0),this.parent||sw(this._dp,this,"_first","_last",this._dp._sort?"_start":0),this.render(0))},n.kill=function(e,t){if(void 0===t&&(t="all"),!(e||t&&"all"!==t))return this._lazy=this._pt=0,this.parent?Hw(this):this.scrollTrigger&&this.scrollTrigger.kill(!!vv),this;if(this.timeline){var n=this.timeline.totalDuration();return this.timeline.killTweensOf(e,t,bk&&!0!==bk.vars.overwrite)._first||Hw(this),this.parent&&n!==this.timeline.totalDuration()&&Sw(this,this._dur*this.timeline._tDur/n,0,1),this}var r,i,a,o,s,l,u,c=this._targets,d=e?$w(e):c,h=this._ptLookup,p=this._pt;if((!t||"all"===t)&&function(e,t){for(var n=e.length,r=n===t.length;r&&n--&&e[n]===t[n];);return n<0}(c,d))return"all"===t&&(this._pt=0),Hw(this);for(r=this._op=this._op||[],"all"!==t&&(ob(t)&&(s={},Hb(t,function(e){return s[e]=1}),t=s),t=function(e,t){var n,r,i,a,o=e[0]?Ub(e[0]).harness:0,s=o&&o.aliases;if(!s)return t;for(r in n=rw({},t),s)if(r in n)for(i=(a=s[r].split(",")).length;i--;)n[a[i]]=n[r];return n}(c,t)),u=c.length;u--;)if(~d.indexOf(c[u]))for(s in i=h[u],"all"===t?(r[u]=t,o=i,a={}):(a=r[u]=r[u]||{},o=t),o)(l=i&&i[s])&&("kill"in l.d&&!0!==l.d.kill(s)||lw(this,l,"_pt"),delete i[s]),"all"!==a&&(a[s]=1);return this._initted&&!this._pt&&p&&Hw(this),this},t.to=function(e,n){return new t(e,n,arguments[2])},t.from=function(e,t){return Pw(1,arguments)},t.delayedCall=function(e,n,r,i){return new t(n,0,{immediateRender:!1,lazy:!1,overwrite:!1,delay:e,onComplete:n,onReverseComplete:n,onCompleteParams:r,onReverseCompleteParams:r,callbackScope:i})},t.fromTo=function(e,t,n){return Pw(2,arguments)},t.set=function(e,n){return n.duration=0,n.repeatDelay||(n.repeat=0),new t(e,n)},t.killTweensOf=function(e,t,n){return wv.killTweensOf(e,t,n)},t}(xk);nw(Mk.prototype,{_targets:[],_lazy:0,_startAt:0,_op:0,_onInit:0}),Hb("staggerTo,staggerFrom,staggerFromTo",function(e){Mk[e]=function(){var t=new vk,n=Aw.call(arguments,0);return n.splice("staggerFromTo"===e?5:4,0,0),t[e].apply(t,n)}});var zk=function(e,t,n){return e[t]=n},Ak=function(e,t,n){return e[t](n)},Rk=function(e,t,n,r){return e[t](r.fp,n)},$k=function(e,t,n){return e.setAttribute(t,n)},Dk=function(e,t){return sb(e[t])?Ak:ub(e[t])&&e.setAttribute?$k:zk},Ok=function(e,t){return t.set(t.t,t.p,Math.round(1e6*(t.s+t.c*e))/1e6,t)},Lk=function(e,t){return t.set(t.t,t.p,!!(t.s+t.c*e),t)},Nk=function(e,t){var n=t._pt,r="";if(!e&&t.b)r=t.b;else if(1===e&&t.e)r=t.e;else{for(;n;)r=n.p+(n.m?n.m(n.s+n.c*e):Math.round(1e4*(n.s+n.c*e))/1e4)+r,n=n._next;r+=t.c}t.set(t.t,t.p,r,t)},Ik=function(e,t){for(var n=t._pt;n;)n.r(e,n.d),n=n._next},Fk=function(e,t,n,r){for(var i,a=this._pt;a;)i=a._next,a.p===r&&a.modifier(e,t,n),a=i},Vk=function(e){for(var t,n,r=this._pt;r;)n=r._next,r.p===e&&!r.op||r.op===e?lw(this,r,"_pt"):r.dep||(t=1),r=n;return!t},Bk=function(e,t,n,r){r.mSet(e,t,r.m.call(r.tween,n,r.mt),r)},Wk=function(e){for(var t,n,r,i,a=e._pt;a;){for(t=a._next,n=r;n&&n.pr>a.pr;)n=n._next;(a._prev=n?n._prev:i)?a._prev._next=a:r=a,(a._next=n)?n._prev=a:i=a,a=t}e._pt=r},Uk=function(){function e(e,t,n,r,i,a,o,s,l){this.t=t,this.s=r,this.c=i,this.p=n,this.r=a||Ok,this.d=o||this,this.set=s||zk,this.pr=l||0,this._next=e,e&&(e._prev=this)}return e.prototype.modifier=function(e,t,n){this.mSet=this.mSet||this.set,this.set=Bk,this.m=e,this.mt=n,this.tween=t},e}();Hb(Bb+"parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger",function(e){return Db[e]=1}),jb.TweenMax=jb.TweenLite=Mk,jb.TimelineLite=jb.TimelineMax=vk,wv=new vk({sortChildren:!1,defaults:Qv,autoRemoveChildren:!0,id:"root",smoothChildTiming:!0}),Kv.stringFilter=rk;var Yk=[],Hk={},qk=[],Xk=0,Gk=0,Kk=function(e){return(Hk[e]||qk).map(function(e){return e()})},Qk=function(){var e=Date.now(),t=[];e-Xk>2&&(Kk("matchMediaInit"),Yk.forEach(function(e){var n,r,i,a,o=e.queries,s=e.conditions;for(r in o)(n=kv.matchMedia(o[r]).matches)&&(i=1),n!==s[r]&&(s[r]=n,a=1);a&&(e.revert(),i&&t.push(e))}),Kk("matchMediaRevert"),t.forEach(function(e){return e.onMatch(e,function(t){return e.add(null,t)})}),Xk=e,Kk("matchMedia"))},Zk=function(){function e(e,t){this.selector=t&&Dw(t),this.data=[],this._r=[],this.isReverted=!1,this.id=Gk++,e&&this.add(e)}var t=e.prototype;return t.add=function(e,t,n){sb(e)&&(n=t,t=e,e=sb);var r=this,i=function(){var e,i=bv,a=r.selector;return i&&i!==r&&i.data.push(r),n&&(r.selector=Dw(n)),bv=r,e=t.apply(r,arguments),sb(e)&&r._r.push(e),bv=i,r.selector=a,r.isReverted=!1,e};return r.last=i,e===sb?i(r,function(e){return r.add(null,e)}):e?r[e]=i:i},t.ignore=function(e){var t=bv;bv=null,e(this),bv=t},t.getTweens=function(){var t=[];return this.data.forEach(function(n){return n instanceof e?t.push.apply(t,n.getTweens()):n instanceof Mk&&!(n.parent&&"nested"===n.parent.data)&&t.push(n)}),t},t.clear=function(){this._r.length=this.data.length=0},t.kill=function(e,t){var n=this;if(e?function(){for(var t,r=n.getTweens(),i=n.data.length;i--;)"isFlip"===(t=n.data[i]).data&&(t.revert(),t.getChildren(!0,!0,!1).forEach(function(e){return r.splice(r.indexOf(e),1)}));for(r.map(function(e){return{g:e._dur||e._delay||e._sat&&!e._sat.vars.immediateRender?e.globalTime(0):-1/0,t:e}}).sort(function(e,t){return t.g-e.g||-1/0}).forEach(function(t){return t.t.revert(e)}),i=n.data.length;i--;)(t=n.data[i])instanceof vk?"nested"!==t.data&&(t.scrollTrigger&&t.scrollTrigger.revert(),t.kill()):!(t instanceof Mk)&&t.revert&&t.revert(e);n._r.forEach(function(t){return t(e,n)}),n.isReverted=!0}():this.data.forEach(function(e){return e.kill&&e.kill()}),this.clear(),t)for(var r=Yk.length;r--;)Yk[r].id===this.id&&Yk.splice(r,1)},t.revert=function(e){this.kill(e||{})},e}(),Jk=function(){function e(e){this.contexts=[],this.scope=e,bv&&bv.data.push(this)}var t=e.prototype;return t.add=function(e,t,n){cb(e)||(e={matches:e});var r,i,a,o=new Zk(0,n||this.scope),s=o.conditions={};for(i in bv&&!o.selector&&(o.selector=bv.selector),this.contexts.push(o),t=o.add("onMatch",t),o.queries=e,e)"all"===i?a=1:(r=kv.matchMedia(e[i]))&&(Yk.indexOf(o)<0&&Yk.push(o),(s[i]=r.matches)&&(a=1),r.addListener?r.addListener(Qk):r.addEventListener("change",Qk));return a&&t(o,function(e){return o.add(null,e)}),this},t.revert=function(e){this.kill(e||{})},t.kill=function(e){this.contexts.forEach(function(t){return t.kill(e,!0)})},e}(),e_={registerPlugin:function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];t.forEach(function(e){return Xw(e)})},timeline:function(e){return new vk(e)},getTweensOf:function(e,t){return wv.getTweensOf(e,t)},getProperty:function(e,t,n,r){ob(e)&&(e=$w(e)[0]);var i=Ub(e||{}).get,a=n?tw:ew;return"native"===n&&(n=""),e?t?a((Nb[t]&&Nb[t].get||i)(e,t,n,r)):function(t,n,r){return a((Nb[t]&&Nb[t].get||i)(e,t,n,r))}:e},quickSetter:function(e,t,n){if((e=$w(e)).length>1){var r=e.map(function(e){return r_.quickSetter(e,t,n)}),i=r.length;return function(e){for(var t=i;t--;)r[t](e)}}e=e[0]||{};var a=Nb[t],o=Ub(e),s=o.harness&&(o.harness.aliases||{})[t]||t,l=a?function(t){var r=new a;Tv._pt=0,r.init(e,n?t+n:t,Tv,0,[e]),r.render(1,r),Tv._pt&&Ik(1,Tv)}:o.set(e,s);return a?l:function(t){return l(e,s,n?t+n:t,o,1)}},quickTo:function(e,t,n){var r,i=r_.to(e,nw(((r={})[t]="+=0.1",r.paused=!0,r.stagger=0,r),n||{})),a=function(e,n,r){return i.resetTo(t,e,n,r)};return a.tween=i,a},isTweening:function(e){return wv.getTweensOf(e,!0).length>0},defaults:function(e){return e&&e.ease&&(e.ease=hk(e.ease,Qv.ease)),iw(Qv,e||{})},config:function(e){return iw(Kv,e||{})},registerEffect:function(e){var t=e.name,n=e.effect,r=e.plugins,i=e.defaults,a=e.extendTimeline;(r||"").split(",").forEach(function(e){return e&&!Nb[e]&&!jb[e]&&Eb(t+" effect requires "+e+" plugin.")}),Ib[t]=function(e,t,r){return n($w(e),nw(t||{},i),r)},a&&(vk.prototype[t]=function(e,n,r){return this.add(Ib[t](e,cb(n)?n:(r=n)&&{},this),r)})},registerEase:function(e,t){ok[e]=hk(t)},parseEase:function(e,t){return arguments.length?hk(e,t):ok},getById:function(e){return wv.getById(e)},exportRoot:function(e,t){void 0===e&&(e={});var n,r,i=new vk(e);for(i.smoothChildTiming=db(e.smoothChildTiming),wv.remove(i),i._dp=0,i._time=i._tTime=wv._time,n=wv._first;n;)r=n._next,!t&&!n._dur&&n instanceof Mk&&n.vars.onComplete===n._targets[0]||vw(i,n,n._start-n._delay),n=r;return vw(wv,i,0),i},context:function(e,t){return e?new Zk(e,t):bv},matchMedia:function(e){return new Jk(e)},matchMediaRefresh:function(){return Yk.forEach(function(e){var t,n,r=e.conditions;for(n in r)r[n]&&(r[n]=!1,t=1);t&&e.revert()})||Qk()},addEventListener:function(e,t){var n=Hk[e]||(Hk[e]=[]);~n.indexOf(t)||n.push(t)},removeEventListener:function(e,t){var n=Hk[e],r=n&&n.indexOf(t);r>=0&&n.splice(r,1)},utils:{wrap:function e(t,n,r){var i=n-t;return mb(t)?Vw(t,e(0,t.length),n):Ew(r,function(e){return(i+(e-t)%i)%i+t})},wrapYoyo:function e(t,n,r){var i=n-t,a=2*i;return mb(t)?Vw(t,e(0,t.length-1),n):Ew(r,function(e){return t+((e=(a+(e-t)%a)%a||0)>i?a-e:e)})},distribute:Lw,random:Fw,snap:Iw,normalize:function(e,t,n){return Ww(e,t,0,1,n)},getUnit:zw,clamp:function(e,t,n){return Ew(n,function(n){return Mw(e,t,n)})},splitColor:Zw,toArray:$w,selector:Dw,mapRange:Ww,pipe:function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return function(e){return t.reduce(function(e,t){return t(e)},e)}},unitize:function(e,t){return function(n){return e(parseFloat(n))+(t||zw(n))}},interpolate:function e(t,n,r,i){var a=isNaN(t+n)?0:function(e){return(1-e)*t+e*n};if(!a){var o,s,l,u,c,d=ob(t),h={};if(!0===r&&(i=1)&&(r=null),d)t={p:t},n={p:n};else if(mb(t)&&!mb(n)){for(l=[],u=t.length,c=u-2,s=1;s<u;s++)l.push(e(t[s-1],t[s]));u--,a=function(e){e*=u;var t=Math.min(c,~~e);return l[t](e-t)},r=n}else i||(t=rw(mb(t)?[]:{},t));if(!l){for(o in n)_k.call(h,t,o,"get",n[o]);a=function(e){return Ik(e,h)||(d?t.p:t)}}}return Ew(r,a)},shuffle:Ow},install:Tb,effects:Ib,ticker:ik,updateRoot:vk.updateRoot,plugins:Nb,globalTimeline:wv,core:{PropTween:Uk,globals:Mb,Tween:Mk,Timeline:vk,Animation:xk,getCache:Ub,_removeLinkedListItem:lw,reverting:function(){return vv},context:function(e){return e&&bv&&(bv.data.push(e),e._ctx=bv),bv},suppressOverwrites:function(e){return xv=e}}};Hb("to,from,fromTo,delayedCall,set,killTweensOf",function(e){return e_[e]=Mk[e]}),ik.add(vk.updateRoot),Tv=e_.to({},{duration:0});var t_=function(e,t){for(var n=e._pt;n&&n.p!==t&&n.op!==t&&n.fp!==t;)n=n._next;return n},n_=function(e,t){return{name:e,headless:1,rawVars:1,init:function(e,n,r){r._onInit=function(e){var r,i;if(ob(n)&&(r={},Hb(n,function(e){return r[e]=1}),n=r),t){for(i in r={},n)r[i]=t(n[i]);n=r}!function(e,t){var n,r,i,a=e._targets;for(n in t)for(r=a.length;r--;)(i=e._ptLookup[r][n])&&(i=i.d)&&(i._pt&&(i=t_(i,n)),i&&i.modifier&&i.modifier(t[n],e,a[r],n))}(e,n)}}}},r_=e_.registerPlugin({name:"attr",init:function(e,t,n,r,i){var a,o,s;for(a in this.tween=n,t)s=e.getAttribute(a)||"",(o=this.add(e,"setAttribute",(s||0)+"",t[a],r,i,0,0,a)).op=a,o.b=s,this._props.push(a)},render:function(e,t){for(var n=t._pt;n;)vv?n.set(n.t,n.p,n.b,n):n.r(e,n.d),n=n._next}},{name:"endArray",headless:1,init:function(e,t){for(var n=t.length;n--;)this.add(e,n,e[n]||0,t[n],0,0,0,0,0,1)}},n_("roundProps",Nw),n_("modifiers"),n_("snap",Iw))||e_;Mk.version=vk.version=r_.version="3.14.2",jv=1,hb()&&ak(),ok.Power0,ok.Power1,ok.Power2,ok.Power3,ok.Power4,ok.Linear,ok.Quad,ok.Cubic,ok.Quart,ok.Quint,ok.Strong,ok.Elastic,ok.Back,ok.SteppedEase,ok.Bounce,ok.Sine,ok.Expo,ok.Circ;var i_,a_,o_,s_,l_,u_,c_,d_,h_={},p_=180/Math.PI,f_=Math.PI/180,m_=Math.atan2,g_=/([A-Z])/g,y_=/(left|right|width|margin|padding|x)/i,x_=/[\s,\(]\S/,v_={autoAlpha:"opacity,visibility",scale:"scaleX,scaleY",alpha:"opacity"},b_=function(e,t){return t.set(t.t,t.p,Math.round(1e4*(t.s+t.c*e))/1e4+t.u,t)},w_=function(e,t){return t.set(t.t,t.p,1===e?t.e:Math.round(1e4*(t.s+t.c*e))/1e4+t.u,t)},k_=function(e,t){return t.set(t.t,t.p,e?Math.round(1e4*(t.s+t.c*e))/1e4+t.u:t.b,t)},__=function(e,t){return t.set(t.t,t.p,1===e?t.e:e?Math.round(1e4*(t.s+t.c*e))/1e4+t.u:t.b,t)},S_=function(e,t){var n=t.s+t.c*e;t.set(t.t,t.p,~~(n+(n<0?-.5:.5))+t.u,t)},j_=function(e,t){return t.set(t.t,t.p,e?t.e:t.b,t)},C_=function(e,t){return t.set(t.t,t.p,1!==e?t.b:t.e,t)},T_=function(e,t,n){return e.style[t]=n},P_=function(e,t,n){return e.style.setProperty(t,n)},E_=function(e,t,n){return e._gsap[t]=n},M_=function(e,t,n){return e._gsap.scaleX=e._gsap.scaleY=n},z_=function(e,t,n,r,i){var a=e._gsap;a.scaleX=a.scaleY=n,a.renderTransform(i,a)},A_=function(e,t,n,r,i){var a=e._gsap;a[t]=n,a.renderTransform(i,a)},R_="transform",$_=R_+"Origin",D_=function e(t,n){var r=this,i=this.target,a=i.style,o=i._gsap;if(t in h_&&a){if(this.tfm=this.tfm||{},"transform"===t)return v_.transform.split(",").forEach(function(t){return e.call(r,t,n)});if(~(t=v_[t]||t).indexOf(",")?t.split(",").forEach(function(e){return r.tfm[e]=J_(i,e)}):this.tfm[t]=o.x?o[t]:J_(i,t),t===$_&&(this.tfm.zOrigin=o.zOrigin),this.props.indexOf(R_)>=0)return;o.svg&&(this.svgo=i.getAttribute("data-svg-origin"),this.props.push($_,n,"")),t=R_}(a||n)&&this.props.push(t,n,a[t])},O_=function(e){e.translate&&(e.removeProperty("translate"),e.removeProperty("scale"),e.removeProperty("rotate"))},L_=function(){var e,t,n=this.props,r=this.target,i=r.style,a=r._gsap;for(e=0;e<n.length;e+=3)n[e+1]?2===n[e+1]?r[n[e]](n[e+2]):r[n[e]]=n[e+2]:n[e+2]?i[n[e]]=n[e+2]:i.removeProperty("--"===n[e].substr(0,2)?n[e]:n[e].replace(g_,"-$1").toLowerCase());if(this.tfm){for(t in this.tfm)a[t]=this.tfm[t];a.svg&&(a.renderTransform(),r.setAttribute("data-svg-origin",this.svgo||"")),(e=c_())&&e.isStart||i[R_]||(O_(i),a.zOrigin&&i[$_]&&(i[$_]+=" "+a.zOrigin+"px",a.zOrigin=0,a.renderTransform()),a.uncache=1)}},N_=function(e,t){var n={target:e,props:[],revert:L_,save:D_};return e._gsap||r_.core.getCache(e),t&&e.style&&e.nodeType&&t.split(",").forEach(function(e){return n.save(e)}),n},I_=function(e,t){var n=a_.createElementNS?a_.createElementNS((t||"http://www.w3.org/1999/xhtml").replace(/^https/,"http"),e):a_.createElement(e);return n&&n.style?n:a_.createElement(e)},F_=function e(t,n,r){var i=getComputedStyle(t);return i[n]||i.getPropertyValue(n.replace(g_,"-$1").toLowerCase())||i.getPropertyValue(n)||!r&&e(t,B_(n)||n,1)||""},V_="O,Moz,ms,Ms,Webkit".split(","),B_=function(e,t,n){var r=(t||l_).style,i=5;if(e in r&&!n)return e;for(e=e.charAt(0).toUpperCase()+e.substr(1);i--&&!(V_[i]+e in r););return i<0?null:(3===i?"ms":i>=0?V_[i]:"")+e},W_=function(){"undefined"!=typeof window&&window.document&&(i_=window,a_=i_.document,o_=a_.documentElement,l_=I_("div")||{style:{}},I_("div"),R_=B_(R_),$_=R_+"Origin",l_.style.cssText="border-width:0;line-height:0;position:absolute;padding:0",d_=!!B_("perspective"),c_=r_.core.reverting,s_=1)},U_=function(e){var t,n=e.ownerSVGElement,r=I_("svg",n&&n.getAttribute("xmlns")||"http://www.w3.org/2000/svg"),i=e.cloneNode(!0);i.style.display="block",r.appendChild(i),o_.appendChild(r);try{t=i.getBBox()}catch(rj){}return r.removeChild(i),o_.removeChild(r),t},Y_=function(e,t){for(var n=t.length;n--;)if(e.hasAttribute(t[n]))return e.getAttribute(t[n])},H_=function(e){var t,n;try{t=e.getBBox()}catch(r){t=U_(e),n=1}return t&&(t.width||t.height)||n||(t=U_(e)),!t||t.width||t.x||t.y?t:{x:+Y_(e,["x","cx","x1"])||0,y:+Y_(e,["y","cy","y1"])||0,width:0,height:0}},q_=function(e){return!(!e.getCTM||e.parentNode&&!e.ownerSVGElement||!H_(e))},X_=function(e,t){if(t){var n,r=e.style;t in h_&&t!==$_&&(t=R_),r.removeProperty?("ms"!==(n=t.substr(0,2))&&"webkit"!==t.substr(0,6)||(t="-"+t),r.removeProperty("--"===n?t:t.replace(g_,"-$1").toLowerCase())):r.removeAttribute(t)}},G_=function(e,t,n,r,i,a){var o=new Uk(e._pt,t,n,0,1,a?C_:j_);return e._pt=o,o.b=r,o.e=i,e._props.push(n),o},K_={deg:1,rad:1,turn:1},Q_={grid:1,flex:1},Z_=function e(t,n,r,i){var a,o,s,l,u=parseFloat(r)||0,c=(r+"").trim().substr((u+"").length)||"px",d=l_.style,h=y_.test(n),p="svg"===t.tagName.toLowerCase(),f=(p?"client":"offset")+(h?"Width":"Height"),m=100,g="px"===i,y="%"===i;if(i===c||!u||K_[i]||K_[c])return u;if("px"!==c&&!g&&(u=e(t,n,r,"px")),l=t.getCTM&&q_(t),(y||"%"===c)&&(h_[n]||~n.indexOf("adius")))return a=l?t.getBBox()[h?"width":"height"]:t[f],qb(y?u/a*m:u/100*a);if(d[h?"width":"height"]=m+(g?c:i),o="rem"!==i&&~n.indexOf("adius")||"em"===i&&t.appendChild&&!p?t:t.parentNode,l&&(o=(t.ownerSVGElement||{}).parentNode),o&&o!==a_&&o.appendChild||(o=a_.body),(s=o._gsap)&&y&&s.width&&h&&s.time===ik.time&&!s.uncache)return qb(u/s.width*m);if(!y||"height"!==n&&"width"!==n)(y||"%"===c)&&!Q_[F_(o,"display")]&&(d.position=F_(t,"position")),o===t&&(d.position="static"),o.appendChild(l_),a=l_[f],o.removeChild(l_),d.position="absolute";else{var x=t.style[n];t.style[n]=m+i,a=t[f],x?t.style[n]=x:X_(t,n)}return h&&y&&((s=Ub(o)).time=ik.time,s.width=o[f]),qb(g?a*u/m:a&&u?m/a*u:0)},J_=function(e,t,n,r){var i;return s_||W_(),t in v_&&"transform"!==t&&~(t=v_[t]).indexOf(",")&&(t=t.split(",")[0]),h_[t]&&"transform"!==t?(i=dS(e,r),i="transformOrigin"!==t?i[t]:i.svg?i.origin:hS(F_(e,$_))+" "+i.zOrigin+"px"):(!(i=e.style[t])||"auto"===i||r||~(i+"").indexOf("calc("))&&(i=iS[t]&&iS[t](e,t,n)||F_(e,t)||Yb(e,t)||("opacity"===t?1:0)),n&&!~(i+"").trim().indexOf(" ")?Z_(e,t,i,n)+n:i},eS=function(e,t,n,r){if(!n||"none"===n){var i=B_(t,e,1),a=i&&F_(e,i,1);a&&a!==n?(t=i,n=a):"borderColor"===t&&(n=F_(e,"borderTopColor"))}var o,s,l,u,c,d,h,p,f,m,g,y=new Uk(this._pt,e.style,t,0,1,Nk),x=0,v=0;if(y.b=n,y.e=r,n+="","var(--"===(r+="").substring(0,6)&&(r=F_(e,r.substring(4,r.indexOf(")")))),"auto"===r&&(d=e.style[t],e.style[t]=r,r=F_(e,t)||r,d?e.style[t]=d:X_(e,t)),rk(o=[n,r]),r=o[1],l=(n=o[0]).match(bb)||[],(r.match(bb)||[]).length){for(;s=bb.exec(r);)h=s[0],f=r.substring(x,s.index),c?c=(c+1)%5:"rgba("!==f.substr(-5)&&"hsla("!==f.substr(-5)||(c=1),h!==(d=l[v++]||"")&&(u=parseFloat(d)||0,g=d.substr((u+"").length),"="===h.charAt(1)&&(h=Gb(u,h)+g),p=parseFloat(h),m=h.substr((p+"").length),x=bb.lastIndex-m.length,m||(m=m||Kv.units[t]||g,x===r.length&&(r+=m,y.e+=m)),g!==m&&(u=Z_(e,t,d,m)||0),y._pt={_next:y._pt,p:f||1===v?f:",",s:u,c:p-u,m:c&&c<4||"zIndex"===t?Math.round:0});y.c=x<r.length?r.substring(x,r.length):""}else y.r="display"===t&&"none"===r?C_:j_;return kb.test(r)&&(y.e=0),this._pt=y,y},tS={top:"0%",bottom:"100%",left:"0%",right:"100%",center:"50%"},nS=function(e){var t=e.split(" "),n=t[0],r=t[1]||"50%";return"top"!==n&&"bottom"!==n&&"left"!==r&&"right"!==r||(e=n,n=r,r=e),t[0]=tS[n]||n,t[1]=tS[r]||r,t.join(" ")},rS=function(e,t){if(t.tween&&t.tween._time===t.tween._dur){var n,r,i,a=t.t,o=a.style,s=t.u,l=a._gsap;if("all"===s||!0===s)o.cssText="",r=1;else for(i=(s=s.split(",")).length;--i>-1;)n=s[i],h_[n]&&(r=1,n="transformOrigin"===n?$_:R_),X_(a,n);r&&(X_(a,R_),l&&(l.svg&&a.removeAttribute("transform"),o.scale=o.rotate=o.translate="none",dS(a,1),l.uncache=1,O_(o)))}},iS={clearProps:function(e,t,n,r,i){if("isFromStart"!==i.data){var a=e._pt=new Uk(e._pt,t,n,0,0,rS);return a.u=r,a.pr=-10,a.tween=i,e._props.push(n),1}}},aS=[1,0,0,1,0,0],oS={},sS=function(e){return"matrix(1, 0, 0, 1, 0, 0)"===e||"none"===e||!e},lS=function(e){var t=F_(e,R_);return sS(t)?aS:t.substr(7).match(vb).map(qb)},uS=function(e,t){var n,r,i,a,o=e._gsap||Ub(e),s=e.style,l=lS(e);return o.svg&&e.getAttribute("transform")?"1,0,0,1,0,0"===(l=[(i=e.transform.baseVal.consolidate().matrix).a,i.b,i.c,i.d,i.e,i.f]).join(",")?aS:l:(l!==aS||e.offsetParent||e===o_||o.svg||(i=s.display,s.display="block",(n=e.parentNode)&&(e.offsetParent||e.getBoundingClientRect().width)||(a=1,r=e.nextElementSibling,o_.appendChild(e)),l=lS(e),i?s.display=i:X_(e,"display"),a&&(r?n.insertBefore(e,r):n?n.appendChild(e):o_.removeChild(e))),t&&l.length>6?[l[0],l[1],l[4],l[5],l[12],l[13]]:l)},cS=function(e,t,n,r,i,a){var o,s,l,u=e._gsap,c=i||uS(e,!0),d=u.xOrigin||0,h=u.yOrigin||0,p=u.xOffset||0,f=u.yOffset||0,m=c[0],g=c[1],y=c[2],x=c[3],v=c[4],b=c[5],w=t.split(" "),k=parseFloat(w[0])||0,_=parseFloat(w[1])||0;n?c!==aS&&(s=m*x-g*y)&&(l=k*(-g/s)+_*(m/s)-(m*b-g*v)/s,k=k*(x/s)+_*(-y/s)+(y*b-x*v)/s,_=l):(k=(o=H_(e)).x+(~w[0].indexOf("%")?k/100*o.width:k),_=o.y+(~(w[1]||w[0]).indexOf("%")?_/100*o.height:_)),r||!1!==r&&u.smooth?(v=k-d,b=_-h,u.xOffset=p+(v*m+b*y)-v,u.yOffset=f+(v*g+b*x)-b):u.xOffset=u.yOffset=0,u.xOrigin=k,u.yOrigin=_,u.smooth=!!r,u.origin=t,u.originIsAbsolute=!!n,e.style[$_]="0px 0px",a&&(G_(a,u,"xOrigin",d,k),G_(a,u,"yOrigin",h,_),G_(a,u,"xOffset",p,u.xOffset),G_(a,u,"yOffset",f,u.yOffset)),e.setAttribute("data-svg-origin",k+" "+_)},dS=function(e,t){var n=e._gsap||new yk(e);if("x"in n&&!t&&!n.uncache)return n;var r,i,a,o,s,l,u,c,d,h,p,f,m,g,y,x,v,b,w,k,_,S,j,C,T,P,E,M,z,A,R,$,D=e.style,O=n.scaleX<0,L="px",N="deg",I=getComputedStyle(e),F=F_(e,$_)||"0";return r=i=a=l=u=c=d=h=p=0,o=s=1,n.svg=!(!e.getCTM||!q_(e)),I.translate&&("none"===I.translate&&"none"===I.scale&&"none"===I.rotate||(D[R_]=("none"!==I.translate?"translate3d("+(I.translate+" 0 0").split(" ").slice(0,3).join(", ")+") ":"")+("none"!==I.rotate?"rotate("+I.rotate+") ":"")+("none"!==I.scale?"scale("+I.scale.split(" ").join(",")+") ":"")+("none"!==I[R_]?I[R_]:"")),D.scale=D.rotate=D.translate="none"),g=uS(e,n.svg),n.svg&&(n.uncache?(T=e.getBBox(),F=n.xOrigin-T.x+"px "+(n.yOrigin-T.y)+"px",C=""):C=!t&&e.getAttribute("data-svg-origin"),cS(e,C||F,!!C||n.originIsAbsolute,!1!==n.smooth,g)),f=n.xOrigin||0,m=n.yOrigin||0,g!==aS&&(b=g[0],w=g[1],k=g[2],_=g[3],r=S=g[4],i=j=g[5],6===g.length?(o=Math.sqrt(b*b+w*w),s=Math.sqrt(_*_+k*k),l=b||w?m_(w,b)*p_:0,(d=k||_?m_(k,_)*p_+l:0)&&(s*=Math.abs(Math.cos(d*f_))),n.svg&&(r-=f-(f*b+m*k),i-=m-(f*w+m*_))):($=g[6],A=g[7],E=g[8],M=g[9],z=g[10],R=g[11],r=g[12],i=g[13],a=g[14],u=(y=m_($,z))*p_,y&&(C=S*(x=Math.cos(-y))+E*(v=Math.sin(-y)),T=j*x+M*v,P=$*x+z*v,E=S*-v+E*x,M=j*-v+M*x,z=$*-v+z*x,R=A*-v+R*x,S=C,j=T,$=P),c=(y=m_(-k,z))*p_,y&&(x=Math.cos(-y),R=_*(v=Math.sin(-y))+R*x,b=C=b*x-E*v,w=T=w*x-M*v,k=P=k*x-z*v),l=(y=m_(w,b))*p_,y&&(C=b*(x=Math.cos(y))+w*(v=Math.sin(y)),T=S*x+j*v,w=w*x-b*v,j=j*x-S*v,b=C,S=T),u&&Math.abs(u)+Math.abs(l)>359.9&&(u=l=0,c=180-c),o=qb(Math.sqrt(b*b+w*w+k*k)),s=qb(Math.sqrt(j*j+$*$)),y=m_(S,j),d=Math.abs(y)>2e-4?y*p_:0,p=R?1/(R<0?-R:R):0),n.svg&&(C=e.getAttribute("transform"),n.forceCSS=e.setAttribute("transform","")||!sS(F_(e,R_)),C&&e.setAttribute("transform",C))),Math.abs(d)>90&&Math.abs(d)<270&&(O?(o*=-1,d+=l<=0?180:-180,l+=l<=0?180:-180):(s*=-1,d+=d<=0?180:-180)),t=t||n.uncache,n.x=r-((n.xPercent=r&&(!t&&n.xPercent||(Math.round(e.offsetWidth/2)===Math.round(-r)?-50:0)))?e.offsetWidth*n.xPercent/100:0)+L,n.y=i-((n.yPercent=i&&(!t&&n.yPercent||(Math.round(e.offsetHeight/2)===Math.round(-i)?-50:0)))?e.offsetHeight*n.yPercent/100:0)+L,n.z=a+L,n.scaleX=qb(o),n.scaleY=qb(s),n.rotation=qb(l)+N,n.rotationX=qb(u)+N,n.rotationY=qb(c)+N,n.skewX=d+N,n.skewY=h+N,n.transformPerspective=p+L,(n.zOrigin=parseFloat(F.split(" ")[2])||!t&&n.zOrigin||0)&&(D[$_]=hS(F)),n.xOffset=n.yOffset=0,n.force3D=Kv.force3D,n.renderTransform=n.svg?vS:d_?xS:fS,n.uncache=0,n},hS=function(e){return(e=e.split(" "))[0]+" "+e[1]},pS=function(e,t,n){var r=zw(t);return qb(parseFloat(t)+parseFloat(Z_(e,"x",n+"px",r)))+r},fS=function(e,t){t.z="0px",t.rotationY=t.rotationX="0deg",t.force3D=0,xS(e,t)},mS="0deg",gS="0px",yS=") ",xS=function(e,t){var n=t||this,r=n.xPercent,i=n.yPercent,a=n.x,o=n.y,s=n.z,l=n.rotation,u=n.rotationY,c=n.rotationX,d=n.skewX,h=n.skewY,p=n.scaleX,f=n.scaleY,m=n.transformPerspective,g=n.force3D,y=n.target,x=n.zOrigin,v="",b="auto"===g&&e&&1!==e||!0===g;if(x&&(c!==mS||u!==mS)){var w,k=parseFloat(u)*f_,_=Math.sin(k),S=Math.cos(k);k=parseFloat(c)*f_,w=Math.cos(k),a=pS(y,a,_*w*-x),o=pS(y,o,-Math.sin(k)*-x),s=pS(y,s,S*w*-x+x)}m!==gS&&(v+="perspective("+m+yS),(r||i)&&(v+="translate("+r+"%, "+i+"%) "),(b||a!==gS||o!==gS||s!==gS)&&(v+=s!==gS||b?"translate3d("+a+", "+o+", "+s+") ":"translate("+a+", "+o+yS),l!==mS&&(v+="rotate("+l+yS),u!==mS&&(v+="rotateY("+u+yS),c!==mS&&(v+="rotateX("+c+yS),d===mS&&h===mS||(v+="skew("+d+", "+h+yS),1===p&&1===f||(v+="scale("+p+", "+f+yS),y.style[R_]=v||"translate(0, 0)"},vS=function(e,t){var n,r,i,a,o,s=t||this,l=s.xPercent,u=s.yPercent,c=s.x,d=s.y,h=s.rotation,p=s.skewX,f=s.skewY,m=s.scaleX,g=s.scaleY,y=s.target,x=s.xOrigin,v=s.yOrigin,b=s.xOffset,w=s.yOffset,k=s.forceCSS,_=parseFloat(c),S=parseFloat(d);h=parseFloat(h),p=parseFloat(p),(f=parseFloat(f))&&(p+=f=parseFloat(f),h+=f),h||p?(h*=f_,p*=f_,n=Math.cos(h)*m,r=Math.sin(h)*m,i=Math.sin(h-p)*-g,a=Math.cos(h-p)*g,p&&(f*=f_,o=Math.tan(p-f),i*=o=Math.sqrt(1+o*o),a*=o,f&&(o=Math.tan(f),n*=o=Math.sqrt(1+o*o),r*=o)),n=qb(n),r=qb(r),i=qb(i),a=qb(a)):(n=m,a=g,r=i=0),(_&&!~(c+"").indexOf("px")||S&&!~(d+"").indexOf("px"))&&(_=Z_(y,"x",c,"px"),S=Z_(y,"y",d,"px")),(x||v||b||w)&&(_=qb(_+x-(x*n+v*i)+b),S=qb(S+v-(x*r+v*a)+w)),(l||u)&&(o=y.getBBox(),_=qb(_+l/100*o.width),S=qb(S+u/100*o.height)),o="matrix("+n+","+r+","+i+","+a+","+_+","+S+")",y.setAttribute("transform",o),k&&(y.style[R_]=o)},bS=function(e,t,n,r,i){var a,o,s=360,l=ob(i),u=parseFloat(i)*(l&&~i.indexOf("rad")?p_:1)-r,c=r+u+"deg";return l&&("short"===(a=i.split("_")[1])&&(u%=s)!==u%180&&(u+=u<0?s:-360),"cw"===a&&u<0?u=(u+36e9)%s-~~(u/s)*s:"ccw"===a&&u>0&&(u=(u-36e9)%s-~~(u/s)*s)),e._pt=o=new Uk(e._pt,t,n,r,u,w_),o.e=c,o.u="deg",e._props.push(n),o},wS=function(e,t){for(var n in t)e[n]=t[n];return e},kS=function(e,t,n){var r,i,a,o,s,l,u,c=wS({},n._gsap),d=n.style;for(i in c.svg?(a=n.getAttribute("transform"),n.setAttribute("transform",""),d[R_]=t,r=dS(n,1),X_(n,R_),n.setAttribute("transform",a)):(a=getComputedStyle(n)[R_],d[R_]=t,r=dS(n,1),d[R_]=a),h_)(a=c[i])!==(o=r[i])&&"perspective,force3D,transformOrigin,svgOrigin".indexOf(i)<0&&(s=zw(a)!==(u=zw(o))?Z_(n,i,a,u):parseFloat(a),l=parseFloat(o),e._pt=new Uk(e._pt,r,i,s,l-s,b_),e._pt.u=u||0,e._props.push(i));wS(r,c)};Hb("padding,margin,Width,Radius",function(e,t){var n="Top",r="Right",i="Bottom",a="Left",o=(t<3?[n,r,i,a]:[n+a,n+r,i+r,i+a]).map(function(n){return t<2?e+n:"border"+n+e});iS[t>1?"border"+e:e]=function(e,t,n,r,i){var a,s;if(arguments.length<4)return a=o.map(function(t){return J_(e,t,n)}),5===(s=a.join(" ")).split(a[0]).length?a[0]:s;a=(r+"").split(" "),s={},o.forEach(function(e,t){return s[e]=a[t]=a[t]||a[(t-1)/2|0]}),e.init(t,s,i)}});var _S,SS,jS,CS={name:"css",register:W_,targetTest:function(e){return e.style&&e.nodeType},init:function(e,t,n,r,i){var a,o,s,l,u,c,d,h,p,f,m,g,y,x,v,b,w,k=this._props,_=e.style,S=n.vars.startAt;for(d in s_||W_(),this.styles=this.styles||N_(e),b=this.styles.props,this.tween=n,t)if("autoRound"!==d&&(o=t[d],!Nb[d]||!Sk(d,t,n,r,e,i)))if(u=typeof o,c=iS[d],"function"===u&&(u=typeof(o=o.call(n,r,e,i))),"string"===u&&~o.indexOf("random(")&&(o=Bw(o)),c)c(this,e,d,o,n)&&(v=1);else if("--"===d.substr(0,2))a=(getComputedStyle(e).getPropertyValue(d)+"").trim(),o+="",tk.lastIndex=0,tk.test(a)||(h=zw(a),(p=zw(o))?h!==p&&(a=Z_(e,d,a,p)+p):h&&(o+=h)),this.add(_,"setProperty",a,o,r,i,0,0,d),k.push(d),b.push(d,0,_[d]);else if("undefined"!==u){if(S&&d in S?(a="function"==typeof S[d]?S[d].call(n,r,e,i):S[d],ob(a)&&~a.indexOf("random(")&&(a=Bw(a)),zw(a+"")||"auto"===a||(a+=Kv.units[d]||zw(J_(e,d))||""),"="===(a+"").charAt(1)&&(a=J_(e,d))):a=J_(e,d),l=parseFloat(a),(f="string"===u&&"="===o.charAt(1)&&o.substr(0,2))&&(o=o.substr(2)),s=parseFloat(o),d in v_&&("autoAlpha"===d&&(1===l&&"hidden"===J_(e,"visibility")&&s&&(l=0),b.push("visibility",0,_.visibility),G_(this,_,"visibility",l?"inherit":"hidden",s?"inherit":"hidden",!s)),"scale"!==d&&"transform"!==d&&~(d=v_[d]).indexOf(",")&&(d=d.split(",")[0])),m=d in h_){if(this.styles.save(d),w=o,"string"===u&&"var(--"===o.substring(0,6)){if("calc("===(o=F_(e,o.substring(4,o.indexOf(")")))).substring(0,5)){var j=e.style.perspective;e.style.perspective=o,o=F_(e,"perspective"),j?e.style.perspective=j:X_(e,"perspective")}s=parseFloat(o)}if(g||((y=e._gsap).renderTransform&&!t.parseTransform||dS(e,t.parseTransform),x=!1!==t.smoothOrigin&&y.smooth,(g=this._pt=new Uk(this._pt,_,R_,0,1,y.renderTransform,y,0,-1)).dep=1),"scale"===d)this._pt=new Uk(this._pt,y,"scaleY",y.scaleY,(f?Gb(y.scaleY,f+s):s)-y.scaleY||0,b_),this._pt.u=0,k.push("scaleY",d),d+="X";else{if("transformOrigin"===d){b.push($_,0,_[$_]),o=nS(o),y.svg?cS(e,o,0,x,0,this):((p=parseFloat(o.split(" ")[2])||0)!==y.zOrigin&&G_(this,y,"zOrigin",y.zOrigin,p),G_(this,_,d,hS(a),hS(o)));continue}if("svgOrigin"===d){cS(e,o,1,x,0,this);continue}if(d in oS){bS(this,y,d,l,f?Gb(l,f+o):o);continue}if("smoothOrigin"===d){G_(this,y,"smooth",y.smooth,o);continue}if("force3D"===d){y[d]=o;continue}if("transform"===d){kS(this,o,e);continue}}}else d in _||(d=B_(d)||d);if(m||(s||0===s)&&(l||0===l)&&!x_.test(o)&&d in _)s||(s=0),(h=(a+"").substr((l+"").length))!==(p=zw(o)||(d in Kv.units?Kv.units[d]:h))&&(l=Z_(e,d,a,p)),this._pt=new Uk(this._pt,m?y:_,d,l,(f?Gb(l,f+s):s)-l,m||"px"!==p&&"zIndex"!==d||!1===t.autoRound?b_:S_),this._pt.u=p||0,m&&w!==o?(this._pt.b=a,this._pt.e=w,this._pt.r=__):h!==p&&"%"!==p&&(this._pt.b=a,this._pt.r=k_);else if(d in _)eS.call(this,e,d,a,f?f+o:o);else if(d in e)this.add(e,d,a||e[d],f?f+o:o,r,i);else if("parseTransform"!==d){Pb(d,o);continue}m||(d in _?b.push(d,0,_[d]):"function"==typeof e[d]?b.push(d,2,e[d]()):b.push(d,1,a||e[d])),k.push(d)}v&&Wk(this)},render:function(e,t){if(t.tween._time||!c_())for(var n=t._pt;n;)n.r(e,n.d),n=n._next;else t.styles.revert()},get:J_,aliases:v_,getSetter:function(e,t,n){var r=v_[t];return r&&r.indexOf(",")<0&&(t=r),t in h_&&t!==$_&&(e._gsap.x||J_(e,"x"))?n&&u_===n?"scale"===t?M_:E_:(u_=n||{})&&("scale"===t?z_:A_):e.style&&!ub(e.style[t])?T_:~t.indexOf("-")?P_:Dk(e,t)},core:{_removeProperty:X_,_getMatrix:uS}};r_.utils.checkPrefix=B_,r_.core.getStyleSaver=N_,jS=Hb((_S="x,y,z,scale,scaleX,scaleY,xPercent,yPercent")+","+(SS="rotation,rotationX,rotationY,skewX,skewY")+",transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective",function(e){h_[e]=1}),Hb(SS,function(e){Kv.units[e]="deg",oS[e]=1}),v_[jS[13]]=_S+","+SS,Hb("0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY",function(e){var t=e.split(":");v_[t[1]]=jS[t[0]]}),Hb("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective",function(e){Kv.units[e]="px"}),r_.registerPlugin(CS);var TS=r_.registerPlugin(CS)||r_;TS.core.Tween;const PS=kn.footer`
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
`,ES=kn.div`
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
`,MS=kn.div`
  display: flex;
  flex-direction: column;

  @media (max-width: 768px) {
    align-items: center;
  }
`,zS=kn.div`
  font-size: 18px;
  font-weight: 600;
  color: #2a3a32;
`,AS=kn.div`
  font-size: 13px;
  color: #6c7c73;
`,RS=kn.div`
  display: flex;
  justify-content: center;
  gap: 24px;
`,$S=kn.a`
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
`,DS=kn.div`
  display: flex;
  justify-content: flex-end;
  gap: 14px;

  @media (max-width: 768px) {
    justify-content: center;
  }
`,OS=kn.a`
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
`,LS=kn.div`
  padding: 2rem;
  background: white;
  border-radius: 12px;
  max-height: 80vh;
  overflow-y: auto;
`,NS=kn.h2`
  font-size: 1.8rem;
  font-weight: 600;
  color: #2c3e50;
  margin-bottom: 1.5rem;
  text-align: center;
`,IS=kn.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`,FS=kn.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`,VS=kn.h3`
  font-size: 1.2rem;
  font-weight: 600;
  color: #34495e;
  margin-bottom: 0.5rem;
`,BS=kn.p`
  font-size: 1rem;
  line-height: 1.6;
  color: #555;
  margin: 0;
`,WS=()=>d.jsxs(LS,{children:[d.jsx(NS,{children:"Privacy Policy"}),d.jsxs(IS,{children:[d.jsx(FS,{children:d.jsx(BS,{children:"We respect your privacy and are committed to protecting your personal information."})}),d.jsxs(FS,{children:[d.jsx(VS,{children:"Information We Collect"}),d.jsx(BS,{children:"Any details shared through this website (such as name, contact number, email, health-related information for sessions, or inquiries) are used only for communication, service delivery, and appointment purposes."})]}),d.jsxs(FS,{children:[d.jsx(VS,{children:"How We Use Your Information"}),d.jsx(BS,{children:"Your personal information is used solely for:"}),d.jsxs(BS,{children:["• Communication regarding services and appointments",d.jsx("br",{}),"• Service delivery and session coordination",d.jsx("br",{}),"• Responding to your inquiries"]})]}),d.jsxs(FS,{children:[d.jsx(VS,{children:"Data Protection"}),d.jsx(BS,{children:"We do not sell, share, or distribute your personal data to third parties. Your information is kept secure and confidential."})]}),d.jsxs(FS,{children:[d.jsx(VS,{children:"Your Consent"}),d.jsx(BS,{children:"By using this website, you agree to this privacy policy."})]})]})]}),US=kn.div`
  padding: 2rem;
  background: white;
  border-radius: 12px;
  max-height: 80vh;
  overflow-y: auto;
`,YS=kn.h2`
  font-size: 1.8rem;
  font-weight: 600;
  color: #2c3e50;
  margin-bottom: 1.5rem;
  text-align: center;
`,HS=kn.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`,qS=kn.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`,XS=kn.p`
  font-size: 1rem;
  line-height: 1.6;
  color: #555;
  margin: 0;
`,GS=()=>d.jsxs(US,{children:[d.jsx(YS,{children:"Terms & Conditions"}),d.jsxs(HS,{children:[d.jsxs(qS,{children:[d.jsx(XS,{children:"• All yoga sessions and wellness services are provided for general health and well-being purposes."}),d.jsx(XS,{children:"• Clients should inform about any medical conditions, injuries, or pregnancy before starting sessions."}),d.jsx(XS,{children:"• Results may vary from person to person."}),d.jsx(XS,{children:"• Payments once made are non-refundable unless stated otherwise."}),d.jsx(XS,{children:"• Session schedules are subject to availability and prior booking."}),d.jsx(XS,{children:"• The instructor is not responsible for injuries caused due to incorrect practice outside guided sessions."})]}),d.jsx(qS,{children:d.jsx(XS,{children:"By booking or using our services, you agree to these terms and conditions."})})]})]});function KS(){const[e,t]=h.useState(!1),[n,r]=h.useState(!1);return d.jsxs(PS,{children:[d.jsxs(ES,{children:[d.jsxs(MS,{children:[d.jsx(zS,{children:"Balance with Shree"}),d.jsx(AS,{children:"Yoga • Nutrition • Ayurveda"})]}),d.jsxs(RS,{children:[d.jsx($S,{as:"button",onClick:()=>t(!0),children:"Privacy Policy"}),d.jsx($S,{as:"button",onClick:()=>r(!0),children:"Terms of Service"})]}),d.jsxs(DS,{children:[d.jsx(OS,{href:eo,target:"_blank",rel:"noopener noreferrer","aria-label":"Visit Balance with Shree on Instagram",children:d.jsx(ga,{size:16})}),d.jsx(OS,{href:no(),target:"_blank",rel:"noopener noreferrer","aria-label":"Chat with Balance with Shree on WhatsApp",children:d.jsx(ba,{size:16})}),d.jsx(OS,{href:`mailto:${Ga}`,"aria-label":"Send an email to Balance with Shree",children:d.jsx(xa,{size:16})})]})]}),d.jsx(Aa,{isOpen:e,onClose:()=>t(!1),children:d.jsx(WS,{})}),d.jsx(Aa,{isOpen:n,onClose:()=>r(!1),children:d.jsx(GS,{})})]})}const QS=kn.a`
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
`,ZS=kn.span`
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
`;function JS(){return d.jsxs(QS,{href:no(Ya),target:"_blank",rel:"noopener noreferrer","aria-label":"Chat on WhatsApp",children:[d.jsx(va,{size:24,strokeWidth:1.9}),d.jsx(ZS,{children:"Chat on WhatsApp"})]})}const ej={entranceDistance:120,leftOpacity:.22,rightOpacity:.18,leftParallaxIntensity:.036,rightParallaxIntensity:.06},tj={entranceDistance:56,opacity:.16,leftParallaxIntensity:.022,rightParallaxIntensity:.03},nj=()=>{const e=h.useRef(null),t=h.useRef(null);return h.useEffect(()=>{if(window.matchMedia("(prefers-reduced-motion: reduce)").matches)return;const n=e.current,r=t.current;if(!n||!r)return;const i=window.innerWidth<768,a=i?tj.entranceDistance:ej.entranceDistance,o=i?tj.opacity:ej.rightOpacity,s=i?tj.opacity:ej.leftOpacity,l=i?tj.rightParallaxIntensity:ej.rightParallaxIntensity,u=i?tj.leftParallaxIntensity:ej.leftParallaxIntensity,c=i?1.1:1.4,d=i?1.6:2.2;TS.set(n,{x:a,opacity:0}),TS.set(r,{x:-a,opacity:0});const h=TS.timeline({delay:.6});h.to(n,{x:0,opacity:o,duration:c,ease:"power3.out"},0).to(r,{x:0,opacity:s,duration:c,ease:"power3.out"},.08);const p=TS.quickTo(n,"y",{duration:d,ease:"power3.out"}),f=TS.quickTo(r,"y",{duration:d,ease:"power3.out"}),m=()=>{p(window.scrollY*l),f(window.scrollY*u)};return m(),window.addEventListener("scroll",m,{passive:!0}),()=>{window.removeEventListener("scroll",m),h.kill()}},[]),d.jsxs("div",{className:"site-wrapper",children:[d.jsx("div",{ref:e,className:"leaf-background leaf-right",children:d.jsx("div",{className:"leaf-inner"})}),d.jsx("div",{ref:t,className:"leaf-background leaf-left",children:d.jsx("div",{className:"leaf-inner"})}),d.jsxs("div",{className:"content",children:[d.jsx(Ji,{}),d.jsx(mv,{}),d.jsx(KS,{}),d.jsx(JS,{})]})]})};T.createRoot(document.getElementById("root")).render(d.jsx(p.StrictMode,{children:d.jsx(En,{children:d.jsxs(hn,{theme:{colors:{primary:"#1f5f4a",secondary:"#7aa08f",bg:"#E1F1EB",dark:"#1f2a24",muted:"#5f6f66",white:"#ffffff",ivory:"#fbf9f3",textPrimary:"#1f2a24",textSecondary:"#2e6b55",textMuted:"#5f6f66",textWhite:"#ffffff",backgroundSoft:"#f4faf6",backgroundLight:"#ffffff",bgPrimary:"#f5fbf7",bgSecondary:"#edf6f1",borderLight:"rgba(31, 95, 74, 0.12)",primaryActive:"#1f5f4a",primaryActiveLight:"rgba(31, 95, 74, 0.14)",primaryActiveLightest:"rgba(31, 95, 74, 0.08)",warmAccent:"#d9b889"},fonts:{heading:"'Cormorant Garamond', serif",body:"'Inter', sans-serif",accent:"'Playfair Display', serif"},spacing:{xsmall:"4px",small:"8px",base:"12px",medium:"16px",large:"24px",xlarge:"32px",section:"120px"},radius:{small:"4px",medium:"8px",large:"12px",xl:"24px",pill:"999px"},shadows:{card:"0 18px 48px rgba(15, 60, 40, 0.12)",soft:"0 12px 28px rgba(15, 60, 40, 0.08)",button:"0 16px 36px rgba(31, 95, 74, 0.24)"}},children:[d.jsx(Pn,{}),d.jsx(mi,{children:d.jsx(nj,{})})]})})}));
