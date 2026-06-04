function e(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}!function(){const e=document.createElement("link").relList;if(!(e&&e.supports&&e.supports("modulepreload"))){for(const e of document.querySelectorAll('link[rel="modulepreload"]'))t(e);new MutationObserver(e=>{for(const n of e)if("childList"===n.type)for(const e of n.addedNodes)"LINK"===e.tagName&&"modulepreload"===e.rel&&t(e)}).observe(document,{childList:!0,subtree:!0})}function t(e){if(e.ep)return;e.ep=!0;const t=function(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),"use-credentials"===e.crossOrigin?t.credentials="include":"anonymous"===e.crossOrigin?t.credentials="omit":t.credentials="same-origin",t}(e);fetch(e.href,t)}}();var t,n,r,i,a={exports:{}},o={},s={exports:{}},l={};function u(){if(t)return l;t=1;var e=Symbol.for("react.element"),n=Symbol.for("react.portal"),r=Symbol.for("react.fragment"),i=Symbol.for("react.strict_mode"),a=Symbol.for("react.profiler"),o=Symbol.for("react.provider"),s=Symbol.for("react.context"),u=Symbol.for("react.forward_ref"),c=Symbol.for("react.suspense"),d=Symbol.for("react.memo"),h=Symbol.for("react.lazy"),p=Symbol.iterator;var f={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},m=Object.assign,g={};function y(e,t,n){this.props=e,this.context=t,this.refs=g,this.updater=n||f}function v(){}function x(e,t,n){this.props=e,this.context=t,this.refs=g,this.updater=n||f}y.prototype.isReactComponent={},y.prototype.setState=function(e,t){if("object"!=typeof e&&"function"!=typeof e&&null!=e)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")},y.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},v.prototype=y.prototype;var b=x.prototype=new v;b.constructor=x,m(b,y.prototype),b.isPureReactComponent=!0;var w=Array.isArray,k=Object.prototype.hasOwnProperty,_={current:null},S={key:!0,ref:!0,__self:!0,__source:!0};function j(t,n,r){var i,a={},o=null,s=null;if(null!=n)for(i in void 0!==n.ref&&(s=n.ref),void 0!==n.key&&(o=""+n.key),n)k.call(n,i)&&!S.hasOwnProperty(i)&&(a[i]=n[i]);var l=arguments.length-2;if(1===l)a.children=r;else if(1<l){for(var u=Array(l),c=0;c<l;c++)u[c]=arguments[c+2];a.children=u}if(t&&t.defaultProps)for(i in l=t.defaultProps)void 0===a[i]&&(a[i]=l[i]);return{$$typeof:e,type:t,key:o,ref:s,props:a,_owner:_.current}}function T(t){return"object"==typeof t&&null!==t&&t.$$typeof===e}var C=/\/+/g;function E(e,t){return"object"==typeof e&&null!==e&&null!=e.key?function(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(e){return t[e]})}(""+e.key):t.toString(36)}function P(t,r,i,a,o){var s=typeof t;"undefined"!==s&&"boolean"!==s||(t=null);var l=!1;if(null===t)l=!0;else switch(s){case"string":case"number":l=!0;break;case"object":switch(t.$$typeof){case e:case n:l=!0}}if(l)return o=o(l=t),t=""===a?"."+E(l,0):a,w(o)?(i="",null!=t&&(i=t.replace(C,"$&/")+"/"),P(o,r,i,"",function(e){return e})):null!=o&&(T(o)&&(o=function(t,n){return{$$typeof:e,type:t.type,key:n,ref:t.ref,props:t.props,_owner:t._owner}}(o,i+(!o.key||l&&l.key===o.key?"":(""+o.key).replace(C,"$&/")+"/")+t)),r.push(o)),1;if(l=0,a=""===a?".":a+":",w(t))for(var u=0;u<t.length;u++){var c=a+E(s=t[u],u);l+=P(s,r,i,c,o)}else if(c=function(e){return null===e||"object"!=typeof e?null:"function"==typeof(e=p&&e[p]||e["@@iterator"])?e:null}(t),"function"==typeof c)for(t=c.call(t),u=0;!(s=t.next()).done;)l+=P(s=s.value,r,i,c=a+E(s,u++),o);else if("object"===s)throw r=String(t),Error("Objects are not valid as a React child (found: "+("[object Object]"===r?"object with keys {"+Object.keys(t).join(", ")+"}":r)+"). If you meant to render a collection of children, use an array instead.");return l}function M(e,t,n){if(null==e)return e;var r=[],i=0;return P(e,r,"","",function(e){return t.call(n,e,i++)}),r}function A(e){if(-1===e._status){var t=e._result;(t=t()).then(function(t){0!==e._status&&-1!==e._status||(e._status=1,e._result=t)},function(t){0!==e._status&&-1!==e._status||(e._status=2,e._result=t)}),-1===e._status&&(e._status=0,e._result=t)}if(1===e._status)return e._result.default;throw e._result}var R={current:null},z={transition:null},D={ReactCurrentDispatcher:R,ReactCurrentBatchConfig:z,ReactCurrentOwner:_};function $(){throw Error("act(...) is not supported in production builds of React.")}return l.Children={map:M,forEach:function(e,t,n){M(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return M(e,function(){t++}),t},toArray:function(e){return M(e,function(e){return e})||[]},only:function(e){if(!T(e))throw Error("React.Children.only expected to receive a single React element child.");return e}},l.Component=y,l.Fragment=r,l.Profiler=a,l.PureComponent=x,l.StrictMode=i,l.Suspense=c,l.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=D,l.act=$,l.cloneElement=function(t,n,r){if(null==t)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var i=m({},t.props),a=t.key,o=t.ref,s=t._owner;if(null!=n){if(void 0!==n.ref&&(o=n.ref,s=_.current),void 0!==n.key&&(a=""+n.key),t.type&&t.type.defaultProps)var l=t.type.defaultProps;for(u in n)k.call(n,u)&&!S.hasOwnProperty(u)&&(i[u]=void 0===n[u]&&void 0!==l?l[u]:n[u])}var u=arguments.length-2;if(1===u)i.children=r;else if(1<u){l=Array(u);for(var c=0;c<u;c++)l[c]=arguments[c+2];i.children=l}return{$$typeof:e,type:t.type,key:a,ref:o,props:i,_owner:s}},l.createContext=function(e){return(e={$$typeof:s,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null}).Provider={$$typeof:o,_context:e},e.Consumer=e},l.createElement=j,l.createFactory=function(e){var t=j.bind(null,e);return t.type=e,t},l.createRef=function(){return{current:null}},l.forwardRef=function(e){return{$$typeof:u,render:e}},l.isValidElement=T,l.lazy=function(e){return{$$typeof:h,_payload:{_status:-1,_result:e},_init:A}},l.memo=function(e,t){return{$$typeof:d,type:e,compare:void 0===t?null:t}},l.startTransition=function(e){var t=z.transition;z.transition={};try{e()}finally{z.transition=t}},l.unstable_act=$,l.useCallback=function(e,t){return R.current.useCallback(e,t)},l.useContext=function(e){return R.current.useContext(e)},l.useDebugValue=function(){},l.useDeferredValue=function(e){return R.current.useDeferredValue(e)},l.useEffect=function(e,t){return R.current.useEffect(e,t)},l.useId=function(){return R.current.useId()},l.useImperativeHandle=function(e,t,n){return R.current.useImperativeHandle(e,t,n)},l.useInsertionEffect=function(e,t){return R.current.useInsertionEffect(e,t)},l.useLayoutEffect=function(e,t){return R.current.useLayoutEffect(e,t)},l.useMemo=function(e,t){return R.current.useMemo(e,t)},l.useReducer=function(e,t,n){return R.current.useReducer(e,t,n)},l.useRef=function(e){return R.current.useRef(e)},l.useState=function(e){return R.current.useState(e)},l.useSyncExternalStore=function(e,t,n){return R.current.useSyncExternalStore(e,t,n)},l.useTransition=function(){return R.current.useTransition()},l.version="18.3.1",l}function c(){return n||(n=1,s.exports=u()),s.exports}var d=(i||(i=1,a.exports=function(){if(r)return o;r=1;var e=c(),t=Symbol.for("react.element"),n=Symbol.for("react.fragment"),i=Object.prototype.hasOwnProperty,a=e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,s={key:!0,ref:!0,__self:!0,__source:!0};function l(e,n,r){var o,l={},u=null,c=null;for(o in void 0!==r&&(u=""+r),void 0!==n.key&&(u=""+n.key),void 0!==n.ref&&(c=n.ref),n)i.call(n,o)&&!s.hasOwnProperty(o)&&(l[o]=n[o]);if(e&&e.defaultProps)for(o in n=e.defaultProps)void 0===l[o]&&(l[o]=n[o]);return{$$typeof:t,type:e,key:u,ref:c,props:l,_owner:a.current}}return o.Fragment=n,o.jsx=l,o.jsxs=l,o}()),a.exports),h=c();const p=e(h);var f,m,g,y,v,x={},b={exports:{}},w={},k={exports:{}},_={};function S(){return m||(m=1,k.exports=(f||(f=1,function(e){function t(e,t){var n=e.length;e.push(t);e:for(;0<n;){var r=n-1>>>1,a=e[r];if(!(0<i(a,t)))break e;e[r]=t,e[n]=a,n=r}}function n(e){return 0===e.length?null:e[0]}function r(e){if(0===e.length)return null;var t=e[0],n=e.pop();if(n!==t){e[0]=n;e:for(var r=0,a=e.length,o=a>>>1;r<o;){var s=2*(r+1)-1,l=e[s],u=s+1,c=e[u];if(0>i(l,n))u<a&&0>i(c,l)?(e[r]=c,e[u]=n,r=u):(e[r]=l,e[s]=n,r=s);else{if(!(u<a&&0>i(c,n)))break e;e[r]=c,e[u]=n,r=u}}}return t}function i(e,t){var n=e.sortIndex-t.sortIndex;return 0!==n?n:e.id-t.id}if("object"==typeof performance&&"function"==typeof performance.now){var a=performance;e.unstable_now=function(){return a.now()}}else{var o=Date,s=o.now();e.unstable_now=function(){return o.now()-s}}var l=[],u=[],c=1,d=null,h=3,p=!1,f=!1,m=!1,g="function"==typeof setTimeout?setTimeout:null,y="function"==typeof clearTimeout?clearTimeout:null,v="undefined"!=typeof setImmediate?setImmediate:null;function x(e){for(var i=n(u);null!==i;){if(null===i.callback)r(u);else{if(!(i.startTime<=e))break;r(u),i.sortIndex=i.expirationTime,t(l,i)}i=n(u)}}function b(e){if(m=!1,x(e),!f)if(null!==n(l))f=!0,R(w);else{var t=n(u);null!==t&&z(b,t.startTime-e)}}function w(t,i){f=!1,m&&(m=!1,y(j),j=-1),p=!0;var a=h;try{for(x(i),d=n(l);null!==d&&(!(d.expirationTime>i)||t&&!E());){var o=d.callback;if("function"==typeof o){d.callback=null,h=d.priorityLevel;var s=o(d.expirationTime<=i);i=e.unstable_now(),"function"==typeof s?d.callback=s:d===n(l)&&r(l),x(i)}else r(l);d=n(l)}if(null!==d)var c=!0;else{var g=n(u);null!==g&&z(b,g.startTime-i),c=!1}return c}finally{d=null,h=a,p=!1}}"undefined"!=typeof navigator&&void 0!==navigator.scheduling&&void 0!==navigator.scheduling.isInputPending&&navigator.scheduling.isInputPending.bind(navigator.scheduling);var k,_=!1,S=null,j=-1,T=5,C=-1;function E(){return!(e.unstable_now()-C<T)}function P(){if(null!==S){var t=e.unstable_now();C=t;var n=!0;try{n=S(!0,t)}finally{n?k():(_=!1,S=null)}}else _=!1}if("function"==typeof v)k=function(){v(P)};else if("undefined"!=typeof MessageChannel){var M=new MessageChannel,A=M.port2;M.port1.onmessage=P,k=function(){A.postMessage(null)}}else k=function(){g(P,0)};function R(e){S=e,_||(_=!0,k())}function z(t,n){j=g(function(){t(e.unstable_now())},n)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(e){e.callback=null},e.unstable_continueExecution=function(){f||p||(f=!0,R(w))},e.unstable_forceFrameRate=function(e){0>e||125<e?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):T=0<e?Math.floor(1e3/e):5},e.unstable_getCurrentPriorityLevel=function(){return h},e.unstable_getFirstCallbackNode=function(){return n(l)},e.unstable_next=function(e){switch(h){case 1:case 2:case 3:var t=3;break;default:t=h}var n=h;h=t;try{return e()}finally{h=n}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(e,t){switch(e){case 1:case 2:case 3:case 4:case 5:break;default:e=3}var n=h;h=e;try{return t()}finally{h=n}},e.unstable_scheduleCallback=function(r,i,a){var o=e.unstable_now();switch(a="object"==typeof a&&null!==a&&"number"==typeof(a=a.delay)&&0<a?o+a:o,r){case 1:var s=-1;break;case 2:s=250;break;case 5:s=1073741823;break;case 4:s=1e4;break;default:s=5e3}return r={id:c++,callback:i,priorityLevel:r,startTime:a,expirationTime:s=a+s,sortIndex:-1},a>o?(r.sortIndex=a,t(u,r),null===n(l)&&r===n(u)&&(m?(y(j),j=-1):m=!0,z(b,a-o))):(r.sortIndex=s,t(l,r),f||p||(f=!0,R(w))),r},e.unstable_shouldYield=E,e.unstable_wrapCallback=function(e){var t=h;return function(){var n=h;h=t;try{return e.apply(this,arguments)}finally{h=n}}}}(_)),_)),k.exports}function j(){if(g)return w;g=1;var e=c(),t=S();function n(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var r=new Set,i={};function a(e,t){o(e,t),o(e+"Capture",t)}function o(e,t){for(i[e]=t,e=0;e<t.length;e++)r.add(t[e])}var s=!("undefined"==typeof window||void 0===window.document||void 0===window.document.createElement),l=Object.prototype.hasOwnProperty,u=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,d={},h={};function p(e,t,n,r,i,a,o){this.acceptsBooleans=2===t||3===t||4===t,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=a,this.removeEmptyString=o}var f={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){f[e]=new p(e,0,!1,e,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];f[t]=new p(t,1,!1,e[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(e){f[e]=new p(e,2,!1,e.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){f[e]=new p(e,2,!1,e,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){f[e]=new p(e,3,!1,e.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(e){f[e]=new p(e,3,!0,e,null,!1,!1)}),["capture","download"].forEach(function(e){f[e]=new p(e,4,!1,e,null,!1,!1)}),["cols","rows","size","span"].forEach(function(e){f[e]=new p(e,6,!1,e,null,!1,!1)}),["rowSpan","start"].forEach(function(e){f[e]=new p(e,5,!1,e.toLowerCase(),null,!1,!1)});var m=/[\-:]([a-z])/g;function y(e){return e[1].toUpperCase()}function v(e,t,n,r){var i=f.hasOwnProperty(t)?f[t]:null;(null!==i?0!==i.type:r||!(2<t.length)||"o"!==t[0]&&"O"!==t[0]||"n"!==t[1]&&"N"!==t[1])&&(function(e,t,n,r){if(null==t||function(e,t,n,r){if(null!==n&&0===n.type)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return!r&&(null!==n?!n.acceptsBooleans:"data-"!==(e=e.toLowerCase().slice(0,5))&&"aria-"!==e);default:return!1}}(e,t,n,r))return!0;if(r)return!1;if(null!==n)switch(n.type){case 3:return!t;case 4:return!1===t;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}(t,n,i,r)&&(n=null),r||null===i?function(e){return!!l.call(h,e)||!l.call(d,e)&&(u.test(e)?h[e]=!0:(d[e]=!0,!1))}(t)&&(null===n?e.removeAttribute(t):e.setAttribute(t,""+n)):i.mustUseProperty?e[i.propertyName]=null===n?3!==i.type&&"":n:(t=i.attributeName,r=i.attributeNamespace,null===n?e.removeAttribute(t):(n=3===(i=i.type)||4===i&&!0===n?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(m,y);f[t]=new p(t,1,!1,e,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(m,y);f[t]=new p(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(m,y);f[t]=new p(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(e){f[e]=new p(e,1,!1,e.toLowerCase(),null,!1,!1)}),f.xlinkHref=new p("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(e){f[e]=new p(e,1,!1,e.toLowerCase(),null,!0,!0)});var x=e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,b=Symbol.for("react.element"),k=Symbol.for("react.portal"),_=Symbol.for("react.fragment"),j=Symbol.for("react.strict_mode"),T=Symbol.for("react.profiler"),C=Symbol.for("react.provider"),E=Symbol.for("react.context"),P=Symbol.for("react.forward_ref"),M=Symbol.for("react.suspense"),A=Symbol.for("react.suspense_list"),R=Symbol.for("react.memo"),z=Symbol.for("react.lazy"),D=Symbol.for("react.offscreen"),$=Symbol.iterator;function L(e){return null===e||"object"!=typeof e?null:"function"==typeof(e=$&&e[$]||e["@@iterator"])?e:null}var O,I=Object.assign;function N(e){if(void 0===O)try{throw Error()}catch(Ix){var t=Ix.stack.trim().match(/\n( *(at )?)/);O=t&&t[1]||""}return"\n"+O+e}var F=!1;function V(e,t){if(!e||F)return"";F=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),"object"==typeof Reflect&&Reflect.construct){try{Reflect.construct(t,[])}catch(u){var r=u}Reflect.construct(e,[],t)}else{try{t.call()}catch(u){r=u}e.call(t.prototype)}else{try{throw Error()}catch(u){r=u}e()}}catch(u){if(u&&r&&"string"==typeof u.stack){for(var i=u.stack.split("\n"),a=r.stack.split("\n"),o=i.length-1,s=a.length-1;1<=o&&0<=s&&i[o]!==a[s];)s--;for(;1<=o&&0<=s;o--,s--)if(i[o]!==a[s]){if(1!==o||1!==s)do{if(o--,0>--s||i[o]!==a[s]){var l="\n"+i[o].replace(" at new "," at ");return e.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",e.displayName)),l}}while(1<=o&&0<=s);break}}}finally{F=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?N(e):""}function B(e){switch(e.tag){case 5:return N(e.type);case 16:return N("Lazy");case 13:return N("Suspense");case 19:return N("SuspenseList");case 0:case 2:case 15:return e=V(e.type,!1);case 11:return e=V(e.type.render,!1);case 1:return e=V(e.type,!0);default:return""}}function U(e){if(null==e)return null;if("function"==typeof e)return e.displayName||e.name||null;if("string"==typeof e)return e;switch(e){case _:return"Fragment";case k:return"Portal";case T:return"Profiler";case j:return"StrictMode";case M:return"Suspense";case A:return"SuspenseList"}if("object"==typeof e)switch(e.$$typeof){case E:return(e.displayName||"Context")+".Consumer";case C:return(e._context.displayName||"Context")+".Provider";case P:var t=e.render;return(e=e.displayName)||(e=""!==(e=t.displayName||t.name||"")?"ForwardRef("+e+")":"ForwardRef"),e;case R:return null!==(t=e.displayName||null)?t:U(e.type)||"Memo";case z:t=e._payload,e=e._init;try{return U(e(t))}catch(Ix){}}return null}function W(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=(e=t.render).displayName||e.name||"",t.displayName||(""!==e?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return U(t);case 8:return t===j?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if("function"==typeof t)return t.displayName||t.name||null;if("string"==typeof t)return t}return null}function Y(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":case"object":return e;default:return""}}function H(e){var t=e.type;return(e=e.nodeName)&&"input"===e.toLowerCase()&&("checkbox"===t||"radio"===t)}function q(e){e._valueTracker||(e._valueTracker=function(e){var t=H(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&void 0!==n&&"function"==typeof n.get&&"function"==typeof n.set){var i=n.get,a=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return i.call(this)},set:function(e){r=""+e,a.call(this,e)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(e){r=""+e},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}(e))}function X(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=H(e)?e.checked?"true":"false":e.value),(e=r)!==n&&(t.setValue(e),!0)}function G(e){if(void 0===(e=e||("undefined"!=typeof document?document:void 0)))return null;try{return e.activeElement||e.body}catch(t){return e.body}}function K(e,t){var n=t.checked;return I({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:null!=n?n:e._wrapperState.initialChecked})}function Q(e,t){var n=null==t.defaultValue?"":t.defaultValue,r=null!=t.checked?t.checked:t.defaultChecked;n=Y(null!=t.value?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:"checkbox"===t.type||"radio"===t.type?null!=t.checked:null!=t.value}}function Z(e,t){null!=(t=t.checked)&&v(e,"checked",t,!1)}function J(e,t){Z(e,t);var n=Y(t.value),r=t.type;if(null!=n)"number"===r?(0===n&&""===e.value||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if("submit"===r||"reset"===r)return void e.removeAttribute("value");t.hasOwnProperty("value")?te(e,t.type,n):t.hasOwnProperty("defaultValue")&&te(e,t.type,Y(t.defaultValue)),null==t.checked&&null!=t.defaultChecked&&(e.defaultChecked=!!t.defaultChecked)}function ee(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!("submit"!==r&&"reset"!==r||void 0!==t.value&&null!==t.value))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}""!==(n=e.name)&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,""!==n&&(e.name=n)}function te(e,t,n){"number"===t&&G(e.ownerDocument)===e||(null==n?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var ne=Array.isArray;function re(e,t,n,r){if(e=e.options,t){t={};for(var i=0;i<n.length;i++)t["$"+n[i]]=!0;for(n=0;n<e.length;n++)i=t.hasOwnProperty("$"+e[n].value),e[n].selected!==i&&(e[n].selected=i),i&&r&&(e[n].defaultSelected=!0)}else{for(n=""+Y(n),t=null,i=0;i<e.length;i++){if(e[i].value===n)return e[i].selected=!0,void(r&&(e[i].defaultSelected=!0));null!==t||e[i].disabled||(t=e[i])}null!==t&&(t.selected=!0)}}function ie(e,t){if(null!=t.dangerouslySetInnerHTML)throw Error(n(91));return I({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function ae(e,t){var r=t.value;if(null==r){if(r=t.children,t=t.defaultValue,null!=r){if(null!=t)throw Error(n(92));if(ne(r)){if(1<r.length)throw Error(n(93));r=r[0]}t=r}null==t&&(t=""),r=t}e._wrapperState={initialValue:Y(r)}}function oe(e,t){var n=Y(t.value),r=Y(t.defaultValue);null!=n&&((n=""+n)!==e.value&&(e.value=n),null==t.defaultValue&&e.defaultValue!==n&&(e.defaultValue=n)),null!=r&&(e.defaultValue=""+r)}function se(e){var t=e.textContent;t===e._wrapperState.initialValue&&""!==t&&null!==t&&(e.value=t)}function le(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function ue(e,t){return null==e||"http://www.w3.org/1999/xhtml"===e?le(t):"http://www.w3.org/2000/svg"===e&&"foreignObject"===t?"http://www.w3.org/1999/xhtml":e}var ce,de,he=(de=function(e,t){if("http://www.w3.org/2000/svg"!==e.namespaceURI||"innerHTML"in e)e.innerHTML=t;else{for((ce=ce||document.createElement("div")).innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=ce.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}},"undefined"!=typeof MSApp&&MSApp.execUnsafeLocalFunction?function(e,t,n,r){MSApp.execUnsafeLocalFunction(function(){return de(e,t)})}:de);function pe(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&3===n.nodeType)return void(n.nodeValue=t)}e.textContent=t}var fe={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},me=["Webkit","ms","Moz","O"];function ge(e,t,n){return null==t||"boolean"==typeof t||""===t?"":n||"number"!=typeof t||0===t||fe.hasOwnProperty(e)&&fe[e]?(""+t).trim():t+"px"}function ye(e,t){for(var n in e=e.style,t)if(t.hasOwnProperty(n)){var r=0===n.indexOf("--"),i=ge(n,t[n],r);"float"===n&&(n="cssFloat"),r?e.setProperty(n,i):e[n]=i}}Object.keys(fe).forEach(function(e){me.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),fe[t]=fe[e]})});var ve=I({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function xe(e,t){if(t){if(ve[e]&&(null!=t.children||null!=t.dangerouslySetInnerHTML))throw Error(n(137,e));if(null!=t.dangerouslySetInnerHTML){if(null!=t.children)throw Error(n(60));if("object"!=typeof t.dangerouslySetInnerHTML||!("__html"in t.dangerouslySetInnerHTML))throw Error(n(61))}if(null!=t.style&&"object"!=typeof t.style)throw Error(n(62))}}function be(e,t){if(-1===e.indexOf("-"))return"string"==typeof t.is;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var we=null;function ke(e){return(e=e.target||e.srcElement||window).correspondingUseElement&&(e=e.correspondingUseElement),3===e.nodeType?e.parentNode:e}var _e=null,Se=null,je=null;function Te(e){if(e=bi(e)){if("function"!=typeof _e)throw Error(n(280));var t=e.stateNode;t&&(t=ki(t),_e(e.stateNode,e.type,t))}}function Ce(e){Se?je?je.push(e):je=[e]:Se=e}function Ee(){if(Se){var e=Se,t=je;if(je=Se=null,Te(e),t)for(e=0;e<t.length;e++)Te(t[e])}}function Pe(e,t){return e(t)}function Me(){}var Ae=!1;function Re(e,t,n){if(Ae)return e(t,n);Ae=!0;try{return Pe(e,t,n)}finally{Ae=!1,(null!==Se||null!==je)&&(Me(),Ee())}}function ze(e,t){var r=e.stateNode;if(null===r)return null;var i=ki(r);if(null===i)return null;r=i[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(i=!i.disabled)||(i=!("button"===(e=e.type)||"input"===e||"select"===e||"textarea"===e)),e=!i;break e;default:e=!1}if(e)return null;if(r&&"function"!=typeof r)throw Error(n(231,t,typeof r));return r}var De=!1;if(s)try{var $e={};Object.defineProperty($e,"passive",{get:function(){De=!0}}),window.addEventListener("test",$e,$e),window.removeEventListener("test",$e,$e)}catch(de){De=!1}function Le(e,t,n,r,i,a,o,s,l){var u=Array.prototype.slice.call(arguments,3);try{t.apply(n,u)}catch(c){this.onError(c)}}var Oe=!1,Ie=null,Ne=!1,Fe=null,Ve={onError:function(e){Oe=!0,Ie=e}};function Be(e,t,n,r,i,a,o,s,l){Oe=!1,Ie=null,Le.apply(Ve,arguments)}function Ue(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do{!!(4098&(t=e).flags)&&(n=t.return),e=t.return}while(e)}return 3===t.tag?n:null}function We(e){if(13===e.tag){var t=e.memoizedState;if(null===t&&(null!==(e=e.alternate)&&(t=e.memoizedState)),null!==t)return t.dehydrated}return null}function Ye(e){if(Ue(e)!==e)throw Error(n(188))}function He(e){return null!==(e=function(e){var t=e.alternate;if(!t){if(null===(t=Ue(e)))throw Error(n(188));return t!==e?null:e}for(var r=e,i=t;;){var a=r.return;if(null===a)break;var o=a.alternate;if(null===o){if(null!==(i=a.return)){r=i;continue}break}if(a.child===o.child){for(o=a.child;o;){if(o===r)return Ye(a),e;if(o===i)return Ye(a),t;o=o.sibling}throw Error(n(188))}if(r.return!==i.return)r=a,i=o;else{for(var s=!1,l=a.child;l;){if(l===r){s=!0,r=a,i=o;break}if(l===i){s=!0,i=a,r=o;break}l=l.sibling}if(!s){for(l=o.child;l;){if(l===r){s=!0,r=o,i=a;break}if(l===i){s=!0,i=o,r=a;break}l=l.sibling}if(!s)throw Error(n(189))}}if(r.alternate!==i)throw Error(n(190))}if(3!==r.tag)throw Error(n(188));return r.stateNode.current===r?e:t}(e))?qe(e):null}function qe(e){if(5===e.tag||6===e.tag)return e;for(e=e.child;null!==e;){var t=qe(e);if(null!==t)return t;e=e.sibling}return null}var Xe=t.unstable_scheduleCallback,Ge=t.unstable_cancelCallback,Ke=t.unstable_shouldYield,Qe=t.unstable_requestPaint,Ze=t.unstable_now,Je=t.unstable_getCurrentPriorityLevel,et=t.unstable_ImmediatePriority,tt=t.unstable_UserBlockingPriority,nt=t.unstable_NormalPriority,rt=t.unstable_LowPriority,it=t.unstable_IdlePriority,at=null,ot=null;var st=Math.clz32?Math.clz32:function(e){return e>>>=0,0===e?32:31-(lt(e)/ut|0)|0},lt=Math.log,ut=Math.LN2;var ct=64,dt=4194304;function ht(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return 4194240&e;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return 130023424&e;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function pt(e,t){var n=e.pendingLanes;if(0===n)return 0;var r=0,i=e.suspendedLanes,a=e.pingedLanes,o=268435455&n;if(0!==o){var s=o&~i;0!==s?r=ht(s):0!==(a&=o)&&(r=ht(a))}else 0!==(o=n&~i)?r=ht(o):0!==a&&(r=ht(a));if(0===r)return 0;if(0!==t&&t!==r&&0===(t&i)&&((i=r&-r)>=(a=t&-t)||16===i&&4194240&a))return t;if(4&r&&(r|=16&n),0!==(t=e.entangledLanes))for(e=e.entanglements,t&=r;0<t;)i=1<<(n=31-st(t)),r|=e[n],t&=~i;return r}function ft(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;default:return-1}}function mt(e){return 0!==(e=-1073741825&e.pendingLanes)?e:1073741824&e?1073741824:0}function gt(){var e=ct;return!(4194240&(ct<<=1))&&(ct=64),e}function yt(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function vt(e,t,n){e.pendingLanes|=t,536870912!==t&&(e.suspendedLanes=0,e.pingedLanes=0),(e=e.eventTimes)[t=31-st(t)]=n}function xt(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-st(n),i=1<<r;i&t|e[r]&t&&(e[r]|=t),n&=~i}}var bt=0;function wt(e){return 1<(e&=-e)?4<e?268435455&e?16:536870912:4:1}var kt,_t,St,jt,Tt,Ct=!1,Et=[],Pt=null,Mt=null,At=null,Rt=new Map,zt=new Map,Dt=[],$t="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Lt(e,t){switch(e){case"focusin":case"focusout":Pt=null;break;case"dragenter":case"dragleave":Mt=null;break;case"mouseover":case"mouseout":At=null;break;case"pointerover":case"pointerout":Rt.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":zt.delete(t.pointerId)}}function Ot(e,t,n,r,i,a){return null===e||e.nativeEvent!==a?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:a,targetContainers:[i]},null!==t&&(null!==(t=bi(t))&&_t(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,null!==i&&-1===t.indexOf(i)&&t.push(i),e)}function It(e){var t=xi(e.target);if(null!==t){var n=Ue(t);if(null!==n)if(13===(t=n.tag)){if(null!==(t=We(n)))return e.blockedOn=t,void Tt(e.priority,function(){St(n)})}else if(3===t&&n.stateNode.current.memoizedState.isDehydrated)return void(e.blockedOn=3===n.tag?n.stateNode.containerInfo:null)}e.blockedOn=null}function Nt(e){if(null!==e.blockedOn)return!1;for(var t=e.targetContainers;0<t.length;){var n=Kt(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(null!==n)return null!==(t=bi(n))&&_t(t),e.blockedOn=n,!1;var r=new(n=e.nativeEvent).constructor(n.type,n);we=r,n.target.dispatchEvent(r),we=null,t.shift()}return!0}function Ft(e,t,n){Nt(e)&&n.delete(t)}function Vt(){Ct=!1,null!==Pt&&Nt(Pt)&&(Pt=null),null!==Mt&&Nt(Mt)&&(Mt=null),null!==At&&Nt(At)&&(At=null),Rt.forEach(Ft),zt.forEach(Ft)}function Bt(e,n){e.blockedOn===n&&(e.blockedOn=null,Ct||(Ct=!0,t.unstable_scheduleCallback(t.unstable_NormalPriority,Vt)))}function Ut(e){function t(t){return Bt(t,e)}if(0<Et.length){Bt(Et[0],e);for(var n=1;n<Et.length;n++){var r=Et[n];r.blockedOn===e&&(r.blockedOn=null)}}for(null!==Pt&&Bt(Pt,e),null!==Mt&&Bt(Mt,e),null!==At&&Bt(At,e),Rt.forEach(t),zt.forEach(t),n=0;n<Dt.length;n++)(r=Dt[n]).blockedOn===e&&(r.blockedOn=null);for(;0<Dt.length&&null===(n=Dt[0]).blockedOn;)It(n),null===n.blockedOn&&Dt.shift()}var Wt=x.ReactCurrentBatchConfig,Yt=!0;function Ht(e,t,n,r){var i=bt,a=Wt.transition;Wt.transition=null;try{bt=1,Xt(e,t,n,r)}finally{bt=i,Wt.transition=a}}function qt(e,t,n,r){var i=bt,a=Wt.transition;Wt.transition=null;try{bt=4,Xt(e,t,n,r)}finally{bt=i,Wt.transition=a}}function Xt(e,t,n,r){if(Yt){var i=Kt(e,t,n,r);if(null===i)Yr(e,t,r,Gt,n),Lt(e,r);else if(function(e,t,n,r,i){switch(t){case"focusin":return Pt=Ot(Pt,e,t,n,r,i),!0;case"dragenter":return Mt=Ot(Mt,e,t,n,r,i),!0;case"mouseover":return At=Ot(At,e,t,n,r,i),!0;case"pointerover":var a=i.pointerId;return Rt.set(a,Ot(Rt.get(a)||null,e,t,n,r,i)),!0;case"gotpointercapture":return a=i.pointerId,zt.set(a,Ot(zt.get(a)||null,e,t,n,r,i)),!0}return!1}(i,e,t,n,r))r.stopPropagation();else if(Lt(e,r),4&t&&-1<$t.indexOf(e)){for(;null!==i;){var a=bi(i);if(null!==a&&kt(a),null===(a=Kt(e,t,n,r))&&Yr(e,t,r,Gt,n),a===i)break;i=a}null!==i&&r.stopPropagation()}else Yr(e,t,r,null,n)}}var Gt=null;function Kt(e,t,n,r){if(Gt=null,null!==(e=xi(e=ke(r))))if(null===(t=Ue(e)))e=null;else if(13===(n=t.tag)){if(null!==(e=We(t)))return e;e=null}else if(3===n){if(t.stateNode.current.memoizedState.isDehydrated)return 3===t.tag?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return Gt=e,null}function Qt(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Je()){case et:return 1;case tt:return 4;case nt:case rt:return 16;case it:return 536870912;default:return 16}default:return 16}}var Zt=null,Jt=null,en=null;function tn(){if(en)return en;var e,t,n=Jt,r=n.length,i="value"in Zt?Zt.value:Zt.textContent,a=i.length;for(e=0;e<r&&n[e]===i[e];e++);var o=r-e;for(t=1;t<=o&&n[r-t]===i[a-t];t++);return en=i.slice(e,1<t?1-t:void 0)}function nn(e){var t=e.keyCode;return"charCode"in e?0===(e=e.charCode)&&13===t&&(e=13):e=t,10===e&&(e=13),32<=e||13===e?e:0}function rn(){return!0}function an(){return!1}function on(e){function t(t,n,r,i,a){for(var o in this._reactName=t,this._targetInst=r,this.type=n,this.nativeEvent=i,this.target=a,this.currentTarget=null,e)e.hasOwnProperty(o)&&(t=e[o],this[o]=t?t(i):i[o]);return this.isDefaultPrevented=(null!=i.defaultPrevented?i.defaultPrevented:!1===i.returnValue)?rn:an,this.isPropagationStopped=an,this}return I(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var e=this.nativeEvent;e&&(e.preventDefault?e.preventDefault():"unknown"!=typeof e.returnValue&&(e.returnValue=!1),this.isDefaultPrevented=rn)},stopPropagation:function(){var e=this.nativeEvent;e&&(e.stopPropagation?e.stopPropagation():"unknown"!=typeof e.cancelBubble&&(e.cancelBubble=!0),this.isPropagationStopped=rn)},persist:function(){},isPersistent:rn}),t}var sn,ln,un,cn={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},dn=on(cn),hn=I({},cn,{view:0,detail:0}),pn=on(hn),fn=I({},hn,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Tn,button:0,buttons:0,relatedTarget:function(e){return void 0===e.relatedTarget?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==un&&(un&&"mousemove"===e.type?(sn=e.screenX-un.screenX,ln=e.screenY-un.screenY):ln=sn=0,un=e),sn)},movementY:function(e){return"movementY"in e?e.movementY:ln}}),mn=on(fn),gn=on(I({},fn,{dataTransfer:0})),yn=on(I({},hn,{relatedTarget:0})),vn=on(I({},cn,{animationName:0,elapsedTime:0,pseudoElement:0})),xn=I({},cn,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),bn=on(xn),wn=on(I({},cn,{data:0})),kn={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},_n={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Sn={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function jn(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):!!(e=Sn[e])&&!!t[e]}function Tn(){return jn}var Cn=I({},hn,{key:function(e){if(e.key){var t=kn[e.key]||e.key;if("Unidentified"!==t)return t}return"keypress"===e.type?13===(e=nn(e))?"Enter":String.fromCharCode(e):"keydown"===e.type||"keyup"===e.type?_n[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Tn,charCode:function(e){return"keypress"===e.type?nn(e):0},keyCode:function(e){return"keydown"===e.type||"keyup"===e.type?e.keyCode:0},which:function(e){return"keypress"===e.type?nn(e):"keydown"===e.type||"keyup"===e.type?e.keyCode:0}}),En=on(Cn),Pn=on(I({},fn,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0})),Mn=on(I({},hn,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Tn})),An=on(I({},cn,{propertyName:0,elapsedTime:0,pseudoElement:0})),Rn=I({},fn,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),zn=on(Rn),Dn=[9,13,27,32],$n=s&&"CompositionEvent"in window,Ln=null;s&&"documentMode"in document&&(Ln=document.documentMode);var On=s&&"TextEvent"in window&&!Ln,In=s&&(!$n||Ln&&8<Ln&&11>=Ln),Nn=String.fromCharCode(32),Fn=!1;function Vn(e,t){switch(e){case"keyup":return-1!==Dn.indexOf(t.keyCode);case"keydown":return 229!==t.keyCode;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Bn(e){return"object"==typeof(e=e.detail)&&"data"in e?e.data:null}var Un=!1;var Wn={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Yn(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return"input"===t?!!Wn[e.type]:"textarea"===t}function Hn(e,t,n,r){Ce(r),0<(t=qr(t,"onChange")).length&&(n=new dn("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var qn=null,Xn=null;function Gn(e){Nr(e,0)}function Kn(e){if(X(wi(e)))return e}function Qn(e,t){if("change"===e)return t}var Zn=!1;if(s){var Jn;if(s){var er="oninput"in document;if(!er){var tr=document.createElement("div");tr.setAttribute("oninput","return;"),er="function"==typeof tr.oninput}Jn=er}else Jn=!1;Zn=Jn&&(!document.documentMode||9<document.documentMode)}function nr(){qn&&(qn.detachEvent("onpropertychange",rr),Xn=qn=null)}function rr(e){if("value"===e.propertyName&&Kn(Xn)){var t=[];Hn(t,Xn,e,ke(e)),Re(Gn,t)}}function ir(e,t,n){"focusin"===e?(nr(),Xn=n,(qn=t).attachEvent("onpropertychange",rr)):"focusout"===e&&nr()}function ar(e){if("selectionchange"===e||"keyup"===e||"keydown"===e)return Kn(Xn)}function or(e,t){if("click"===e)return Kn(t)}function sr(e,t){if("input"===e||"change"===e)return Kn(t)}var lr="function"==typeof Object.is?Object.is:function(e,t){return e===t&&(0!==e||1/e==1/t)||e!=e&&t!=t};function ur(e,t){if(lr(e,t))return!0;if("object"!=typeof e||null===e||"object"!=typeof t||null===t)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!l.call(t,i)||!lr(e[i],t[i]))return!1}return!0}function cr(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function dr(e,t){var n,r=cr(e);for(e=0;r;){if(3===r.nodeType){if(n=e+r.textContent.length,e<=t&&n>=t)return{node:r,offset:t-e};e=n}e:{for(;r;){if(r.nextSibling){r=r.nextSibling;break e}r=r.parentNode}r=void 0}r=cr(r)}}function hr(e,t){return!(!e||!t)&&(e===t||(!e||3!==e.nodeType)&&(t&&3===t.nodeType?hr(e,t.parentNode):"contains"in e?e.contains(t):!!e.compareDocumentPosition&&!!(16&e.compareDocumentPosition(t))))}function pr(){for(var e=window,t=G();t instanceof e.HTMLIFrameElement;){try{var n="string"==typeof t.contentWindow.location.href}catch(r){n=!1}if(!n)break;t=G((e=t.contentWindow).document)}return t}function fr(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&("input"===t&&("text"===e.type||"search"===e.type||"tel"===e.type||"url"===e.type||"password"===e.type)||"textarea"===t||"true"===e.contentEditable)}function mr(e){var t=pr(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&hr(n.ownerDocument.documentElement,n)){if(null!==r&&fr(n))if(t=r.start,void 0===(e=r.end)&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if((e=(t=n.ownerDocument||document)&&t.defaultView||window).getSelection){e=e.getSelection();var i=n.textContent.length,a=Math.min(r.start,i);r=void 0===r.end?a:Math.min(r.end,i),!e.extend&&a>r&&(i=r,r=a,a=i),i=dr(n,a);var o=dr(n,r);i&&o&&(1!==e.rangeCount||e.anchorNode!==i.node||e.anchorOffset!==i.offset||e.focusNode!==o.node||e.focusOffset!==o.offset)&&((t=t.createRange()).setStart(i.node,i.offset),e.removeAllRanges(),a>r?(e.addRange(t),e.extend(o.node,o.offset)):(t.setEnd(o.node,o.offset),e.addRange(t)))}for(t=[],e=n;e=e.parentNode;)1===e.nodeType&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for("function"==typeof n.focus&&n.focus(),n=0;n<t.length;n++)(e=t[n]).element.scrollLeft=e.left,e.element.scrollTop=e.top}}var gr=s&&"documentMode"in document&&11>=document.documentMode,yr=null,vr=null,xr=null,br=!1;function wr(e,t,n){var r=n.window===n?n.document:9===n.nodeType?n:n.ownerDocument;br||null==yr||yr!==G(r)||("selectionStart"in(r=yr)&&fr(r)?r={start:r.selectionStart,end:r.selectionEnd}:r={anchorNode:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection()).anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset},xr&&ur(xr,r)||(xr=r,0<(r=qr(vr,"onSelect")).length&&(t=new dn("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=yr)))}function kr(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var _r={animationend:kr("Animation","AnimationEnd"),animationiteration:kr("Animation","AnimationIteration"),animationstart:kr("Animation","AnimationStart"),transitionend:kr("Transition","TransitionEnd")},Sr={},jr={};function Tr(e){if(Sr[e])return Sr[e];if(!_r[e])return e;var t,n=_r[e];for(t in n)if(n.hasOwnProperty(t)&&t in jr)return Sr[e]=n[t];return e}s&&(jr=document.createElement("div").style,"AnimationEvent"in window||(delete _r.animationend.animation,delete _r.animationiteration.animation,delete _r.animationstart.animation),"TransitionEvent"in window||delete _r.transitionend.transition);var Cr=Tr("animationend"),Er=Tr("animationiteration"),Pr=Tr("animationstart"),Mr=Tr("transitionend"),Ar=new Map,Rr="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function zr(e,t){Ar.set(e,t),a(t,[e])}for(var Dr=0;Dr<Rr.length;Dr++){var $r=Rr[Dr];zr($r.toLowerCase(),"on"+($r[0].toUpperCase()+$r.slice(1)))}zr(Cr,"onAnimationEnd"),zr(Er,"onAnimationIteration"),zr(Pr,"onAnimationStart"),zr("dblclick","onDoubleClick"),zr("focusin","onFocus"),zr("focusout","onBlur"),zr(Mr,"onTransitionEnd"),o("onMouseEnter",["mouseout","mouseover"]),o("onMouseLeave",["mouseout","mouseover"]),o("onPointerEnter",["pointerout","pointerover"]),o("onPointerLeave",["pointerout","pointerover"]),a("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),a("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),a("onBeforeInput",["compositionend","keypress","textInput","paste"]),a("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),a("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),a("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Lr="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Or=new Set("cancel close invalid load scroll toggle".split(" ").concat(Lr));function Ir(e,t,r){var i=e.type||"unknown-event";e.currentTarget=r,function(e,t,r,i,a,o,s,l,u){if(Be.apply(this,arguments),Oe){if(!Oe)throw Error(n(198));var c=Ie;Oe=!1,Ie=null,Ne||(Ne=!0,Fe=c)}}(i,t,void 0,e),e.currentTarget=null}function Nr(e,t){t=!!(4&t);for(var n=0;n<e.length;n++){var r=e[n],i=r.event;r=r.listeners;e:{var a=void 0;if(t)for(var o=r.length-1;0<=o;o--){var s=r[o],l=s.instance,u=s.currentTarget;if(s=s.listener,l!==a&&i.isPropagationStopped())break e;Ir(i,s,u),a=l}else for(o=0;o<r.length;o++){if(l=(s=r[o]).instance,u=s.currentTarget,s=s.listener,l!==a&&i.isPropagationStopped())break e;Ir(i,s,u),a=l}}}if(Ne)throw e=Fe,Ne=!1,Fe=null,e}function Fr(e,t){var n=t[gi];void 0===n&&(n=t[gi]=new Set);var r=e+"__bubble";n.has(r)||(Wr(t,e,2,!1),n.add(r))}function Vr(e,t,n){var r=0;t&&(r|=4),Wr(n,e,r,t)}var Br="_reactListening"+Math.random().toString(36).slice(2);function Ur(e){if(!e[Br]){e[Br]=!0,r.forEach(function(t){"selectionchange"!==t&&(Or.has(t)||Vr(t,!1,e),Vr(t,!0,e))});var t=9===e.nodeType?e:e.ownerDocument;null===t||t[Br]||(t[Br]=!0,Vr("selectionchange",!1,t))}}function Wr(e,t,n,r){switch(Qt(t)){case 1:var i=Ht;break;case 4:i=qt;break;default:i=Xt}n=i.bind(null,t,n,e),i=void 0,!De||"touchstart"!==t&&"touchmove"!==t&&"wheel"!==t||(i=!0),r?void 0!==i?e.addEventListener(t,n,{capture:!0,passive:i}):e.addEventListener(t,n,!0):void 0!==i?e.addEventListener(t,n,{passive:i}):e.addEventListener(t,n,!1)}function Yr(e,t,n,r,i){var a=r;if(!(1&t||2&t||null===r))e:for(;;){if(null===r)return;var o=r.tag;if(3===o||4===o){var s=r.stateNode.containerInfo;if(s===i||8===s.nodeType&&s.parentNode===i)break;if(4===o)for(o=r.return;null!==o;){var l=o.tag;if((3===l||4===l)&&((l=o.stateNode.containerInfo)===i||8===l.nodeType&&l.parentNode===i))return;o=o.return}for(;null!==s;){if(null===(o=xi(s)))return;if(5===(l=o.tag)||6===l){r=a=o;continue e}s=s.parentNode}}r=r.return}Re(function(){var r=a,i=ke(n),o=[];e:{var s=Ar.get(e);if(void 0!==s){var l=dn,u=e;switch(e){case"keypress":if(0===nn(n))break e;case"keydown":case"keyup":l=En;break;case"focusin":u="focus",l=yn;break;case"focusout":u="blur",l=yn;break;case"beforeblur":case"afterblur":l=yn;break;case"click":if(2===n.button)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":l=mn;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":l=gn;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":l=Mn;break;case Cr:case Er:case Pr:l=vn;break;case Mr:l=An;break;case"scroll":l=pn;break;case"wheel":l=zn;break;case"copy":case"cut":case"paste":l=bn;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":l=Pn}var c=!!(4&t),d=!c&&"scroll"===e,h=c?null!==s?s+"Capture":null:s;c=[];for(var p,f=r;null!==f;){var m=(p=f).stateNode;if(5===p.tag&&null!==m&&(p=m,null!==h&&(null!=(m=ze(f,h))&&c.push(Hr(f,m,p)))),d)break;f=f.return}0<c.length&&(s=new l(s,u,null,n,i),o.push({event:s,listeners:c}))}}if(!(7&t)){if(l="mouseout"===e||"pointerout"===e,(!(s="mouseover"===e||"pointerover"===e)||n===we||!(u=n.relatedTarget||n.fromElement)||!xi(u)&&!u[mi])&&(l||s)&&(s=i.window===i?i:(s=i.ownerDocument)?s.defaultView||s.parentWindow:window,l?(l=r,null!==(u=(u=n.relatedTarget||n.toElement)?xi(u):null)&&(u!==(d=Ue(u))||5!==u.tag&&6!==u.tag)&&(u=null)):(l=null,u=r),l!==u)){if(c=mn,m="onMouseLeave",h="onMouseEnter",f="mouse","pointerout"!==e&&"pointerover"!==e||(c=Pn,m="onPointerLeave",h="onPointerEnter",f="pointer"),d=null==l?s:wi(l),p=null==u?s:wi(u),(s=new c(m,f+"leave",l,n,i)).target=d,s.relatedTarget=p,m=null,xi(i)===r&&((c=new c(h,f+"enter",u,n,i)).target=p,c.relatedTarget=d,m=c),d=m,l&&u)e:{for(h=u,f=0,p=c=l;p;p=Xr(p))f++;for(p=0,m=h;m;m=Xr(m))p++;for(;0<f-p;)c=Xr(c),f--;for(;0<p-f;)h=Xr(h),p--;for(;f--;){if(c===h||null!==h&&c===h.alternate)break e;c=Xr(c),h=Xr(h)}c=null}else c=null;null!==l&&Gr(o,s,l,c,!1),null!==u&&null!==d&&Gr(o,d,u,c,!0)}if("select"===(l=(s=r?wi(r):window).nodeName&&s.nodeName.toLowerCase())||"input"===l&&"file"===s.type)var g=Qn;else if(Yn(s))if(Zn)g=sr;else{g=ar;var y=ir}else(l=s.nodeName)&&"input"===l.toLowerCase()&&("checkbox"===s.type||"radio"===s.type)&&(g=or);switch(g&&(g=g(e,r))?Hn(o,g,n,i):(y&&y(e,s,r),"focusout"===e&&(y=s._wrapperState)&&y.controlled&&"number"===s.type&&te(s,"number",s.value)),y=r?wi(r):window,e){case"focusin":(Yn(y)||"true"===y.contentEditable)&&(yr=y,vr=r,xr=null);break;case"focusout":xr=vr=yr=null;break;case"mousedown":br=!0;break;case"contextmenu":case"mouseup":case"dragend":br=!1,wr(o,n,i);break;case"selectionchange":if(gr)break;case"keydown":case"keyup":wr(o,n,i)}var v;if($n)e:{switch(e){case"compositionstart":var x="onCompositionStart";break e;case"compositionend":x="onCompositionEnd";break e;case"compositionupdate":x="onCompositionUpdate";break e}x=void 0}else Un?Vn(e,n)&&(x="onCompositionEnd"):"keydown"===e&&229===n.keyCode&&(x="onCompositionStart");x&&(In&&"ko"!==n.locale&&(Un||"onCompositionStart"!==x?"onCompositionEnd"===x&&Un&&(v=tn()):(Jt="value"in(Zt=i)?Zt.value:Zt.textContent,Un=!0)),0<(y=qr(r,x)).length&&(x=new wn(x,e,null,n,i),o.push({event:x,listeners:y}),v?x.data=v:null!==(v=Bn(n))&&(x.data=v))),(v=On?function(e,t){switch(e){case"compositionend":return Bn(t);case"keypress":return 32!==t.which?null:(Fn=!0,Nn);case"textInput":return(e=t.data)===Nn&&Fn?null:e;default:return null}}(e,n):function(e,t){if(Un)return"compositionend"===e||!$n&&Vn(e,t)?(e=tn(),en=Jt=Zt=null,Un=!1,e):null;switch(e){case"paste":default:return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return In&&"ko"!==t.locale?null:t.data}}(e,n))&&(0<(r=qr(r,"onBeforeInput")).length&&(i=new wn("onBeforeInput","beforeinput",null,n,i),o.push({event:i,listeners:r}),i.data=v))}Nr(o,t)})}function Hr(e,t,n){return{instance:e,listener:t,currentTarget:n}}function qr(e,t){for(var n=t+"Capture",r=[];null!==e;){var i=e,a=i.stateNode;5===i.tag&&null!==a&&(i=a,null!=(a=ze(e,n))&&r.unshift(Hr(e,a,i)),null!=(a=ze(e,t))&&r.push(Hr(e,a,i))),e=e.return}return r}function Xr(e){if(null===e)return null;do{e=e.return}while(e&&5!==e.tag);return e||null}function Gr(e,t,n,r,i){for(var a=t._reactName,o=[];null!==n&&n!==r;){var s=n,l=s.alternate,u=s.stateNode;if(null!==l&&l===r)break;5===s.tag&&null!==u&&(s=u,i?null!=(l=ze(n,a))&&o.unshift(Hr(n,l,s)):i||null!=(l=ze(n,a))&&o.push(Hr(n,l,s))),n=n.return}0!==o.length&&e.push({event:t,listeners:o})}var Kr=/\r\n?/g,Qr=/\u0000|\uFFFD/g;function Zr(e){return("string"==typeof e?e:""+e).replace(Kr,"\n").replace(Qr,"")}function Jr(e,t,r){if(t=Zr(t),Zr(e)!==t&&r)throw Error(n(425))}function ei(){}var ti=null,ni=null;function ri(e,t){return"textarea"===e||"noscript"===e||"string"==typeof t.children||"number"==typeof t.children||"object"==typeof t.dangerouslySetInnerHTML&&null!==t.dangerouslySetInnerHTML&&null!=t.dangerouslySetInnerHTML.__html}var ii="function"==typeof setTimeout?setTimeout:void 0,ai="function"==typeof clearTimeout?clearTimeout:void 0,oi="function"==typeof Promise?Promise:void 0,si="function"==typeof queueMicrotask?queueMicrotask:void 0!==oi?function(e){return oi.resolve(null).then(e).catch(li)}:ii;function li(e){setTimeout(function(){throw e})}function ui(e,t){var n=t,r=0;do{var i=n.nextSibling;if(e.removeChild(n),i&&8===i.nodeType)if("/$"===(n=i.data)){if(0===r)return e.removeChild(i),void Ut(t);r--}else"$"!==n&&"$?"!==n&&"$!"!==n||r++;n=i}while(n);Ut(t)}function ci(e){for(;null!=e;e=e.nextSibling){var t=e.nodeType;if(1===t||3===t)break;if(8===t){if("$"===(t=e.data)||"$!"===t||"$?"===t)break;if("/$"===t)return null}}return e}function di(e){e=e.previousSibling;for(var t=0;e;){if(8===e.nodeType){var n=e.data;if("$"===n||"$!"===n||"$?"===n){if(0===t)return e;t--}else"/$"===n&&t++}e=e.previousSibling}return null}var hi=Math.random().toString(36).slice(2),pi="__reactFiber$"+hi,fi="__reactProps$"+hi,mi="__reactContainer$"+hi,gi="__reactEvents$"+hi,yi="__reactListeners$"+hi,vi="__reactHandles$"+hi;function xi(e){var t=e[pi];if(t)return t;for(var n=e.parentNode;n;){if(t=n[mi]||n[pi]){if(n=t.alternate,null!==t.child||null!==n&&null!==n.child)for(e=di(e);null!==e;){if(n=e[pi])return n;e=di(e)}return t}n=(e=n).parentNode}return null}function bi(e){return!(e=e[pi]||e[mi])||5!==e.tag&&6!==e.tag&&13!==e.tag&&3!==e.tag?null:e}function wi(e){if(5===e.tag||6===e.tag)return e.stateNode;throw Error(n(33))}function ki(e){return e[fi]||null}var _i=[],Si=-1;function ji(e){return{current:e}}function Ti(e){0>Si||(e.current=_i[Si],_i[Si]=null,Si--)}function Ci(e,t){Si++,_i[Si]=e.current,e.current=t}var Ei={},Pi=ji(Ei),Mi=ji(!1),Ai=Ei;function Ri(e,t){var n=e.type.contextTypes;if(!n)return Ei;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var i,a={};for(i in n)a[i]=t[i];return r&&((e=e.stateNode).__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=a),a}function zi(e){return null!=(e=e.childContextTypes)}function Di(){Ti(Mi),Ti(Pi)}function $i(e,t,r){if(Pi.current!==Ei)throw Error(n(168));Ci(Pi,t),Ci(Mi,r)}function Li(e,t,r){var i=e.stateNode;if(t=t.childContextTypes,"function"!=typeof i.getChildContext)return r;for(var a in i=i.getChildContext())if(!(a in t))throw Error(n(108,W(e)||"Unknown",a));return I({},r,i)}function Oi(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||Ei,Ai=Pi.current,Ci(Pi,e),Ci(Mi,Mi.current),!0}function Ii(e,t,r){var i=e.stateNode;if(!i)throw Error(n(169));r?(e=Li(e,t,Ai),i.__reactInternalMemoizedMergedChildContext=e,Ti(Mi),Ti(Pi),Ci(Pi,e)):Ti(Mi),Ci(Mi,r)}var Ni=null,Fi=!1,Vi=!1;function Bi(e){null===Ni?Ni=[e]:Ni.push(e)}function Ui(){if(!Vi&&null!==Ni){Vi=!0;var e=0,t=bt;try{var n=Ni;for(bt=1;e<n.length;e++){var r=n[e];do{r=r(!0)}while(null!==r)}Ni=null,Fi=!1}catch(i){throw null!==Ni&&(Ni=Ni.slice(e+1)),Xe(et,Ui),i}finally{bt=t,Vi=!1}}return null}var Wi=[],Yi=0,Hi=null,qi=0,Xi=[],Gi=0,Ki=null,Qi=1,Zi="";function Ji(e,t){Wi[Yi++]=qi,Wi[Yi++]=Hi,Hi=e,qi=t}function ea(e,t,n){Xi[Gi++]=Qi,Xi[Gi++]=Zi,Xi[Gi++]=Ki,Ki=e;var r=Qi;e=Zi;var i=32-st(r)-1;r&=~(1<<i),n+=1;var a=32-st(t)+i;if(30<a){var o=i-i%5;a=(r&(1<<o)-1).toString(32),r>>=o,i-=o,Qi=1<<32-st(t)+i|n<<i|r,Zi=a+e}else Qi=1<<a|n<<i|r,Zi=e}function ta(e){null!==e.return&&(Ji(e,1),ea(e,1,0))}function na(e){for(;e===Hi;)Hi=Wi[--Yi],Wi[Yi]=null,qi=Wi[--Yi],Wi[Yi]=null;for(;e===Ki;)Ki=Xi[--Gi],Xi[Gi]=null,Zi=Xi[--Gi],Xi[Gi]=null,Qi=Xi[--Gi],Xi[Gi]=null}var ra=null,ia=null,aa=!1,oa=null;function sa(e,t){var n=Ru(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,null===(t=e.deletions)?(e.deletions=[n],e.flags|=16):t.push(n)}function la(e,t){switch(e.tag){case 5:var n=e.type;return null!==(t=1!==t.nodeType||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t)&&(e.stateNode=t,ra=e,ia=ci(t.firstChild),!0);case 6:return null!==(t=""===e.pendingProps||3!==t.nodeType?null:t)&&(e.stateNode=t,ra=e,ia=null,!0);case 13:return null!==(t=8!==t.nodeType?null:t)&&(n=null!==Ki?{id:Qi,overflow:Zi}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},(n=Ru(18,null,null,0)).stateNode=t,n.return=e,e.child=n,ra=e,ia=null,!0);default:return!1}}function ua(e){return!(!(1&e.mode)||128&e.flags)}function ca(e){if(aa){var t=ia;if(t){var r=t;if(!la(e,t)){if(ua(e))throw Error(n(418));t=ci(r.nextSibling);var i=ra;t&&la(e,t)?sa(i,r):(e.flags=-4097&e.flags|2,aa=!1,ra=e)}}else{if(ua(e))throw Error(n(418));e.flags=-4097&e.flags|2,aa=!1,ra=e}}}function da(e){for(e=e.return;null!==e&&5!==e.tag&&3!==e.tag&&13!==e.tag;)e=e.return;ra=e}function ha(e){if(e!==ra)return!1;if(!aa)return da(e),aa=!0,!1;var t;if((t=3!==e.tag)&&!(t=5!==e.tag)&&(t="head"!==(t=e.type)&&"body"!==t&&!ri(e.type,e.memoizedProps)),t&&(t=ia)){if(ua(e))throw pa(),Error(n(418));for(;t;)sa(e,t),t=ci(t.nextSibling)}if(da(e),13===e.tag){if(!(e=null!==(e=e.memoizedState)?e.dehydrated:null))throw Error(n(317));e:{for(e=e.nextSibling,t=0;e;){if(8===e.nodeType){var r=e.data;if("/$"===r){if(0===t){ia=ci(e.nextSibling);break e}t--}else"$"!==r&&"$!"!==r&&"$?"!==r||t++}e=e.nextSibling}ia=null}}else ia=ra?ci(e.stateNode.nextSibling):null;return!0}function pa(){for(var e=ia;e;)e=ci(e.nextSibling)}function fa(){ia=ra=null,aa=!1}function ma(e){null===oa?oa=[e]:oa.push(e)}var ga=x.ReactCurrentBatchConfig;function ya(e,t,r){if(null!==(e=r.ref)&&"function"!=typeof e&&"object"!=typeof e){if(r._owner){if(r=r._owner){if(1!==r.tag)throw Error(n(309));var i=r.stateNode}if(!i)throw Error(n(147,e));var a=i,o=""+e;return null!==t&&null!==t.ref&&"function"==typeof t.ref&&t.ref._stringRef===o?t.ref:((t=function(e){var t=a.refs;null===e?delete t[o]:t[o]=e})._stringRef=o,t)}if("string"!=typeof e)throw Error(n(284));if(!r._owner)throw Error(n(290,e))}return e}function va(e,t){throw e=Object.prototype.toString.call(t),Error(n(31,"[object Object]"===e?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function xa(e){return(0,e._init)(e._payload)}function ba(e){function t(t,n){if(e){var r=t.deletions;null===r?(t.deletions=[n],t.flags|=16):r.push(n)}}function r(n,r){if(!e)return null;for(;null!==r;)t(n,r),r=r.sibling;return null}function i(e,t){for(e=new Map;null!==t;)null!==t.key?e.set(t.key,t):e.set(t.index,t),t=t.sibling;return e}function a(e,t){return(e=Du(e,t)).index=0,e.sibling=null,e}function o(t,n,r){return t.index=r,e?null!==(r=t.alternate)?(r=r.index)<n?(t.flags|=2,n):r:(t.flags|=2,n):(t.flags|=1048576,n)}function s(t){return e&&null===t.alternate&&(t.flags|=2),t}function l(e,t,n,r){return null===t||6!==t.tag?((t=Iu(n,e.mode,r)).return=e,t):((t=a(t,n)).return=e,t)}function u(e,t,n,r){var i=n.type;return i===_?d(e,t,n.props.children,r,n.key):null!==t&&(t.elementType===i||"object"==typeof i&&null!==i&&i.$$typeof===z&&xa(i)===t.type)?((r=a(t,n.props)).ref=ya(e,t,n),r.return=e,r):((r=$u(n.type,n.key,n.props,null,e.mode,r)).ref=ya(e,t,n),r.return=e,r)}function c(e,t,n,r){return null===t||4!==t.tag||t.stateNode.containerInfo!==n.containerInfo||t.stateNode.implementation!==n.implementation?((t=Nu(n,e.mode,r)).return=e,t):((t=a(t,n.children||[])).return=e,t)}function d(e,t,n,r,i){return null===t||7!==t.tag?((t=Lu(n,e.mode,r,i)).return=e,t):((t=a(t,n)).return=e,t)}function h(e,t,n){if("string"==typeof t&&""!==t||"number"==typeof t)return(t=Iu(""+t,e.mode,n)).return=e,t;if("object"==typeof t&&null!==t){switch(t.$$typeof){case b:return(n=$u(t.type,t.key,t.props,null,e.mode,n)).ref=ya(e,null,t),n.return=e,n;case k:return(t=Nu(t,e.mode,n)).return=e,t;case z:return h(e,(0,t._init)(t._payload),n)}if(ne(t)||L(t))return(t=Lu(t,e.mode,n,null)).return=e,t;va(e,t)}return null}function p(e,t,n,r){var i=null!==t?t.key:null;if("string"==typeof n&&""!==n||"number"==typeof n)return null!==i?null:l(e,t,""+n,r);if("object"==typeof n&&null!==n){switch(n.$$typeof){case b:return n.key===i?u(e,t,n,r):null;case k:return n.key===i?c(e,t,n,r):null;case z:return p(e,t,(i=n._init)(n._payload),r)}if(ne(n)||L(n))return null!==i?null:d(e,t,n,r,null);va(e,n)}return null}function f(e,t,n,r,i){if("string"==typeof r&&""!==r||"number"==typeof r)return l(t,e=e.get(n)||null,""+r,i);if("object"==typeof r&&null!==r){switch(r.$$typeof){case b:return u(t,e=e.get(null===r.key?n:r.key)||null,r,i);case k:return c(t,e=e.get(null===r.key?n:r.key)||null,r,i);case z:return f(e,t,n,(0,r._init)(r._payload),i)}if(ne(r)||L(r))return d(t,e=e.get(n)||null,r,i,null);va(t,r)}return null}return function l(u,c,d,m){if("object"==typeof d&&null!==d&&d.type===_&&null===d.key&&(d=d.props.children),"object"==typeof d&&null!==d){switch(d.$$typeof){case b:e:{for(var g=d.key,y=c;null!==y;){if(y.key===g){if((g=d.type)===_){if(7===y.tag){r(u,y.sibling),(c=a(y,d.props.children)).return=u,u=c;break e}}else if(y.elementType===g||"object"==typeof g&&null!==g&&g.$$typeof===z&&xa(g)===y.type){r(u,y.sibling),(c=a(y,d.props)).ref=ya(u,y,d),c.return=u,u=c;break e}r(u,y);break}t(u,y),y=y.sibling}d.type===_?((c=Lu(d.props.children,u.mode,m,d.key)).return=u,u=c):((m=$u(d.type,d.key,d.props,null,u.mode,m)).ref=ya(u,c,d),m.return=u,u=m)}return s(u);case k:e:{for(y=d.key;null!==c;){if(c.key===y){if(4===c.tag&&c.stateNode.containerInfo===d.containerInfo&&c.stateNode.implementation===d.implementation){r(u,c.sibling),(c=a(c,d.children||[])).return=u,u=c;break e}r(u,c);break}t(u,c),c=c.sibling}(c=Nu(d,u.mode,m)).return=u,u=c}return s(u);case z:return l(u,c,(y=d._init)(d._payload),m)}if(ne(d))return function(n,a,s,l){for(var u=null,c=null,d=a,m=a=0,g=null;null!==d&&m<s.length;m++){d.index>m?(g=d,d=null):g=d.sibling;var y=p(n,d,s[m],l);if(null===y){null===d&&(d=g);break}e&&d&&null===y.alternate&&t(n,d),a=o(y,a,m),null===c?u=y:c.sibling=y,c=y,d=g}if(m===s.length)return r(n,d),aa&&Ji(n,m),u;if(null===d){for(;m<s.length;m++)null!==(d=h(n,s[m],l))&&(a=o(d,a,m),null===c?u=d:c.sibling=d,c=d);return aa&&Ji(n,m),u}for(d=i(n,d);m<s.length;m++)null!==(g=f(d,n,m,s[m],l))&&(e&&null!==g.alternate&&d.delete(null===g.key?m:g.key),a=o(g,a,m),null===c?u=g:c.sibling=g,c=g);return e&&d.forEach(function(e){return t(n,e)}),aa&&Ji(n,m),u}(u,c,d,m);if(L(d))return function(a,s,l,u){var c=L(l);if("function"!=typeof c)throw Error(n(150));if(null==(l=c.call(l)))throw Error(n(151));for(var d=c=null,m=s,g=s=0,y=null,v=l.next();null!==m&&!v.done;g++,v=l.next()){m.index>g?(y=m,m=null):y=m.sibling;var x=p(a,m,v.value,u);if(null===x){null===m&&(m=y);break}e&&m&&null===x.alternate&&t(a,m),s=o(x,s,g),null===d?c=x:d.sibling=x,d=x,m=y}if(v.done)return r(a,m),aa&&Ji(a,g),c;if(null===m){for(;!v.done;g++,v=l.next())null!==(v=h(a,v.value,u))&&(s=o(v,s,g),null===d?c=v:d.sibling=v,d=v);return aa&&Ji(a,g),c}for(m=i(a,m);!v.done;g++,v=l.next())null!==(v=f(m,a,g,v.value,u))&&(e&&null!==v.alternate&&m.delete(null===v.key?g:v.key),s=o(v,s,g),null===d?c=v:d.sibling=v,d=v);return e&&m.forEach(function(e){return t(a,e)}),aa&&Ji(a,g),c}(u,c,d,m);va(u,d)}return"string"==typeof d&&""!==d||"number"==typeof d?(d=""+d,null!==c&&6===c.tag?(r(u,c.sibling),(c=a(c,d)).return=u,u=c):(r(u,c),(c=Iu(d,u.mode,m)).return=u,u=c),s(u)):r(u,c)}}var wa=ba(!0),ka=ba(!1),_a=ji(null),Sa=null,ja=null,Ta=null;function Ca(){Ta=ja=Sa=null}function Ea(e){var t=_a.current;Ti(_a),e._currentValue=t}function Pa(e,t,n){for(;null!==e;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,null!==r&&(r.childLanes|=t)):null!==r&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function Ma(e,t){Sa=e,Ta=ja=null,null!==(e=e.dependencies)&&null!==e.firstContext&&(0!==(e.lanes&t)&&(bs=!0),e.firstContext=null)}function Aa(e){var t=e._currentValue;if(Ta!==e)if(e={context:e,memoizedValue:t,next:null},null===ja){if(null===Sa)throw Error(n(308));ja=e,Sa.dependencies={lanes:0,firstContext:e}}else ja=ja.next=e;return t}var Ra=null;function za(e){null===Ra?Ra=[e]:Ra.push(e)}function Da(e,t,n,r){var i=t.interleaved;return null===i?(n.next=n,za(t)):(n.next=i.next,i.next=n),t.interleaved=n,$a(e,r)}function $a(e,t){e.lanes|=t;var n=e.alternate;for(null!==n&&(n.lanes|=t),n=e,e=e.return;null!==e;)e.childLanes|=t,null!==(n=e.alternate)&&(n.childLanes|=t),n=e,e=e.return;return 3===n.tag?n.stateNode:null}var La=!1;function Oa(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Ia(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function Na(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function Fa(e,t,n){var r=e.updateQueue;if(null===r)return null;if(r=r.shared,2&Pl){var i=r.pending;return null===i?t.next=t:(t.next=i.next,i.next=t),r.pending=t,$a(e,n)}return null===(i=r.interleaved)?(t.next=t,za(r)):(t.next=i.next,i.next=t),r.interleaved=t,$a(e,n)}function Va(e,t,n){if(null!==(t=t.updateQueue)&&(t=t.shared,4194240&n)){var r=t.lanes;n|=r&=e.pendingLanes,t.lanes=n,xt(e,n)}}function Ba(e,t){var n=e.updateQueue,r=e.alternate;if(null!==r&&n===(r=r.updateQueue)){var i=null,a=null;if(null!==(n=n.firstBaseUpdate)){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};null===a?i=a=o:a=a.next=o,n=n.next}while(null!==n);null===a?i=a=t:a=a.next=t}else i=a=t;return n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:a,shared:r.shared,effects:r.effects},void(e.updateQueue=n)}null===(e=n.lastBaseUpdate)?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function Ua(e,t,n,r){var i=e.updateQueue;La=!1;var a=i.firstBaseUpdate,o=i.lastBaseUpdate,s=i.shared.pending;if(null!==s){i.shared.pending=null;var l=s,u=l.next;l.next=null,null===o?a=u:o.next=u,o=l;var c=e.alternate;null!==c&&((s=(c=c.updateQueue).lastBaseUpdate)!==o&&(null===s?c.firstBaseUpdate=u:s.next=u,c.lastBaseUpdate=l))}if(null!==a){var d=i.baseState;for(o=0,c=u=l=null,s=a;;){var h=s.lane,p=s.eventTime;if((r&h)===h){null!==c&&(c=c.next={eventTime:p,lane:0,tag:s.tag,payload:s.payload,callback:s.callback,next:null});e:{var f=e,m=s;switch(h=t,p=n,m.tag){case 1:if("function"==typeof(f=m.payload)){d=f.call(p,d,h);break e}d=f;break e;case 3:f.flags=-65537&f.flags|128;case 0:if(null==(h="function"==typeof(f=m.payload)?f.call(p,d,h):f))break e;d=I({},d,h);break e;case 2:La=!0}}null!==s.callback&&0!==s.lane&&(e.flags|=64,null===(h=i.effects)?i.effects=[s]:h.push(s))}else p={eventTime:p,lane:h,tag:s.tag,payload:s.payload,callback:s.callback,next:null},null===c?(u=c=p,l=d):c=c.next=p,o|=h;if(null===(s=s.next)){if(null===(s=i.shared.pending))break;s=(h=s).next,h.next=null,i.lastBaseUpdate=h,i.shared.pending=null}}if(null===c&&(l=d),i.baseState=l,i.firstBaseUpdate=u,i.lastBaseUpdate=c,null!==(t=i.shared.interleaved)){i=t;do{o|=i.lane,i=i.next}while(i!==t)}else null===a&&(i.shared.lanes=0);Ol|=o,e.lanes=o,e.memoizedState=d}}function Wa(e,t,r){if(e=t.effects,t.effects=null,null!==e)for(t=0;t<e.length;t++){var i=e[t],a=i.callback;if(null!==a){if(i.callback=null,i=r,"function"!=typeof a)throw Error(n(191,a));a.call(i)}}}var Ya={},Ha=ji(Ya),qa=ji(Ya),Xa=ji(Ya);function Ga(e){if(e===Ya)throw Error(n(174));return e}function Ka(e,t){switch(Ci(Xa,t),Ci(qa,e),Ci(Ha,Ya),e=t.nodeType){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:ue(null,"");break;default:t=ue(t=(e=8===e?t.parentNode:t).namespaceURI||null,e=e.tagName)}Ti(Ha),Ci(Ha,t)}function Qa(){Ti(Ha),Ti(qa),Ti(Xa)}function Za(e){Ga(Xa.current);var t=Ga(Ha.current),n=ue(t,e.type);t!==n&&(Ci(qa,e),Ci(Ha,n))}function Ja(e){qa.current===e&&(Ti(Ha),Ti(qa))}var eo=ji(0);function to(e){for(var t=e;null!==t;){if(13===t.tag){var n=t.memoizedState;if(null!==n&&(null===(n=n.dehydrated)||"$?"===n.data||"$!"===n.data))return t}else if(19===t.tag&&void 0!==t.memoizedProps.revealOrder){if(128&t.flags)return t}else if(null!==t.child){t.child.return=t,t=t.child;continue}if(t===e)break;for(;null===t.sibling;){if(null===t.return||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var no=[];function ro(){for(var e=0;e<no.length;e++)no[e]._workInProgressVersionPrimary=null;no.length=0}var io=x.ReactCurrentDispatcher,ao=x.ReactCurrentBatchConfig,oo=0,so=null,lo=null,uo=null,co=!1,ho=!1,po=0,fo=0;function mo(){throw Error(n(321))}function go(e,t){if(null===t)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!lr(e[n],t[n]))return!1;return!0}function yo(e,t,r,i,a,o){if(oo=o,so=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,io.current=null===e||null===e.memoizedState?es:ts,e=r(i,a),ho){o=0;do{if(ho=!1,po=0,25<=o)throw Error(n(301));o+=1,uo=lo=null,t.updateQueue=null,io.current=ns,e=r(i,a)}while(ho)}if(io.current=Jo,t=null!==lo&&null!==lo.next,oo=0,uo=lo=so=null,co=!1,t)throw Error(n(300));return e}function vo(){var e=0!==po;return po=0,e}function xo(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return null===uo?so.memoizedState=uo=e:uo=uo.next=e,uo}function bo(){if(null===lo){var e=so.alternate;e=null!==e?e.memoizedState:null}else e=lo.next;var t=null===uo?so.memoizedState:uo.next;if(null!==t)uo=t,lo=e;else{if(null===e)throw Error(n(310));e={memoizedState:(lo=e).memoizedState,baseState:lo.baseState,baseQueue:lo.baseQueue,queue:lo.queue,next:null},null===uo?so.memoizedState=uo=e:uo=uo.next=e}return uo}function wo(e,t){return"function"==typeof t?t(e):t}function ko(e){var t=bo(),r=t.queue;if(null===r)throw Error(n(311));r.lastRenderedReducer=e;var i=lo,a=i.baseQueue,o=r.pending;if(null!==o){if(null!==a){var s=a.next;a.next=o.next,o.next=s}i.baseQueue=a=o,r.pending=null}if(null!==a){o=a.next,i=i.baseState;var l=s=null,u=null,c=o;do{var d=c.lane;if((oo&d)===d)null!==u&&(u=u.next={lane:0,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),i=c.hasEagerState?c.eagerState:e(i,c.action);else{var h={lane:d,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null};null===u?(l=u=h,s=i):u=u.next=h,so.lanes|=d,Ol|=d}c=c.next}while(null!==c&&c!==o);null===u?s=i:u.next=l,lr(i,t.memoizedState)||(bs=!0),t.memoizedState=i,t.baseState=s,t.baseQueue=u,r.lastRenderedState=i}if(null!==(e=r.interleaved)){a=e;do{o=a.lane,so.lanes|=o,Ol|=o,a=a.next}while(a!==e)}else null===a&&(r.lanes=0);return[t.memoizedState,r.dispatch]}function _o(e){var t=bo(),r=t.queue;if(null===r)throw Error(n(311));r.lastRenderedReducer=e;var i=r.dispatch,a=r.pending,o=t.memoizedState;if(null!==a){r.pending=null;var s=a=a.next;do{o=e(o,s.action),s=s.next}while(s!==a);lr(o,t.memoizedState)||(bs=!0),t.memoizedState=o,null===t.baseQueue&&(t.baseState=o),r.lastRenderedState=o}return[o,i]}function So(){}function jo(e,t){var r=so,i=bo(),a=t(),o=!lr(i.memoizedState,a);if(o&&(i.memoizedState=a,bs=!0),i=i.queue,Oo(Eo.bind(null,r,i,e),[e]),i.getSnapshot!==t||o||null!==uo&&1&uo.memoizedState.tag){if(r.flags|=2048,Ro(9,Co.bind(null,r,i,a,t),void 0,null),null===Ml)throw Error(n(349));30&oo||To(r,t,a)}return a}function To(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},null===(t=so.updateQueue)?(t={lastEffect:null,stores:null},so.updateQueue=t,t.stores=[e]):null===(n=t.stores)?t.stores=[e]:n.push(e)}function Co(e,t,n,r){t.value=n,t.getSnapshot=r,Po(t)&&Mo(e)}function Eo(e,t,n){return n(function(){Po(t)&&Mo(e)})}function Po(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!lr(e,n)}catch(r){return!0}}function Mo(e){var t=$a(e,1);null!==t&&ru(t,e,1,-1)}function Ao(e){var t=xo();return"function"==typeof e&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:wo,lastRenderedState:e},t.queue=e,e=e.dispatch=Go.bind(null,so,e),[t.memoizedState,e]}function Ro(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},null===(t=so.updateQueue)?(t={lastEffect:null,stores:null},so.updateQueue=t,t.lastEffect=e.next=e):null===(n=t.lastEffect)?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e),e}function zo(){return bo().memoizedState}function Do(e,t,n,r){var i=xo();so.flags|=e,i.memoizedState=Ro(1|t,n,void 0,void 0===r?null:r)}function $o(e,t,n,r){var i=bo();r=void 0===r?null:r;var a=void 0;if(null!==lo){var o=lo.memoizedState;if(a=o.destroy,null!==r&&go(r,o.deps))return void(i.memoizedState=Ro(t,n,a,r))}so.flags|=e,i.memoizedState=Ro(1|t,n,a,r)}function Lo(e,t){return Do(8390656,8,e,t)}function Oo(e,t){return $o(2048,8,e,t)}function Io(e,t){return $o(4,2,e,t)}function No(e,t){return $o(4,4,e,t)}function Fo(e,t){return"function"==typeof t?(e=e(),t(e),function(){t(null)}):null!=t?(e=e(),t.current=e,function(){t.current=null}):void 0}function Vo(e,t,n){return n=null!=n?n.concat([e]):null,$o(4,4,Fo.bind(null,t,e),n)}function Bo(){}function Uo(e,t){var n=bo();t=void 0===t?null:t;var r=n.memoizedState;return null!==r&&null!==t&&go(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function Wo(e,t){var n=bo();t=void 0===t?null:t;var r=n.memoizedState;return null!==r&&null!==t&&go(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function Yo(e,t,n){return 21&oo?(lr(n,t)||(n=gt(),so.lanes|=n,Ol|=n,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,bs=!0),e.memoizedState=n)}function Ho(e,t){var n=bt;bt=0!==n&&4>n?n:4,e(!0);var r=ao.transition;ao.transition={};try{e(!1),t()}finally{bt=n,ao.transition=r}}function qo(){return bo().memoizedState}function Xo(e,t,n){var r=nu(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},Ko(e))Qo(t,n);else if(null!==(n=Da(e,t,n,r))){ru(n,e,r,tu()),Zo(n,t,r)}}function Go(e,t,n){var r=nu(e),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(Ko(e))Qo(t,i);else{var a=e.alternate;if(0===e.lanes&&(null===a||0===a.lanes)&&null!==(a=t.lastRenderedReducer))try{var o=t.lastRenderedState,s=a(o,n);if(i.hasEagerState=!0,i.eagerState=s,lr(s,o)){var l=t.interleaved;return null===l?(i.next=i,za(t)):(i.next=l.next,l.next=i),void(t.interleaved=i)}}catch(u){}null!==(n=Da(e,t,i,r))&&(ru(n,e,r,i=tu()),Zo(n,t,r))}}function Ko(e){var t=e.alternate;return e===so||null!==t&&t===so}function Qo(e,t){ho=co=!0;var n=e.pending;null===n?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function Zo(e,t,n){if(4194240&n){var r=t.lanes;n|=r&=e.pendingLanes,t.lanes=n,xt(e,n)}}var Jo={readContext:Aa,useCallback:mo,useContext:mo,useEffect:mo,useImperativeHandle:mo,useInsertionEffect:mo,useLayoutEffect:mo,useMemo:mo,useReducer:mo,useRef:mo,useState:mo,useDebugValue:mo,useDeferredValue:mo,useTransition:mo,useMutableSource:mo,useSyncExternalStore:mo,useId:mo,unstable_isNewReconciler:!1},es={readContext:Aa,useCallback:function(e,t){return xo().memoizedState=[e,void 0===t?null:t],e},useContext:Aa,useEffect:Lo,useImperativeHandle:function(e,t,n){return n=null!=n?n.concat([e]):null,Do(4194308,4,Fo.bind(null,t,e),n)},useLayoutEffect:function(e,t){return Do(4194308,4,e,t)},useInsertionEffect:function(e,t){return Do(4,2,e,t)},useMemo:function(e,t){var n=xo();return t=void 0===t?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=xo();return t=void 0!==n?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=Xo.bind(null,so,e),[r.memoizedState,e]},useRef:function(e){return e={current:e},xo().memoizedState=e},useState:Ao,useDebugValue:Bo,useDeferredValue:function(e){return xo().memoizedState=e},useTransition:function(){var e=Ao(!1),t=e[0];return e=Ho.bind(null,e[1]),xo().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,r){var i=so,a=xo();if(aa){if(void 0===r)throw Error(n(407));r=r()}else{if(r=t(),null===Ml)throw Error(n(349));30&oo||To(i,t,r)}a.memoizedState=r;var o={value:r,getSnapshot:t};return a.queue=o,Lo(Eo.bind(null,i,o,e),[e]),i.flags|=2048,Ro(9,Co.bind(null,i,o,r,t),void 0,null),r},useId:function(){var e=xo(),t=Ml.identifierPrefix;if(aa){var n=Zi;t=":"+t+"R"+(n=(Qi&~(1<<32-st(Qi)-1)).toString(32)+n),0<(n=po++)&&(t+="H"+n.toString(32)),t+=":"}else t=":"+t+"r"+(n=fo++).toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},ts={readContext:Aa,useCallback:Uo,useContext:Aa,useEffect:Oo,useImperativeHandle:Vo,useInsertionEffect:Io,useLayoutEffect:No,useMemo:Wo,useReducer:ko,useRef:zo,useState:function(){return ko(wo)},useDebugValue:Bo,useDeferredValue:function(e){return Yo(bo(),lo.memoizedState,e)},useTransition:function(){return[ko(wo)[0],bo().memoizedState]},useMutableSource:So,useSyncExternalStore:jo,useId:qo,unstable_isNewReconciler:!1},ns={readContext:Aa,useCallback:Uo,useContext:Aa,useEffect:Oo,useImperativeHandle:Vo,useInsertionEffect:Io,useLayoutEffect:No,useMemo:Wo,useReducer:_o,useRef:zo,useState:function(){return _o(wo)},useDebugValue:Bo,useDeferredValue:function(e){var t=bo();return null===lo?t.memoizedState=e:Yo(t,lo.memoizedState,e)},useTransition:function(){return[_o(wo)[0],bo().memoizedState]},useMutableSource:So,useSyncExternalStore:jo,useId:qo,unstable_isNewReconciler:!1};function rs(e,t){if(e&&e.defaultProps){for(var n in t=I({},t),e=e.defaultProps)void 0===t[n]&&(t[n]=e[n]);return t}return t}function is(e,t,n,r){n=null==(n=n(r,t=e.memoizedState))?t:I({},t,n),e.memoizedState=n,0===e.lanes&&(e.updateQueue.baseState=n)}var as={isMounted:function(e){return!!(e=e._reactInternals)&&Ue(e)===e},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=tu(),i=nu(e),a=Na(r,i);a.payload=t,null!=n&&(a.callback=n),null!==(t=Fa(e,a,i))&&(ru(t,e,i,r),Va(t,e,i))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=tu(),i=nu(e),a=Na(r,i);a.tag=1,a.payload=t,null!=n&&(a.callback=n),null!==(t=Fa(e,a,i))&&(ru(t,e,i,r),Va(t,e,i))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=tu(),r=nu(e),i=Na(n,r);i.tag=2,null!=t&&(i.callback=t),null!==(t=Fa(e,i,r))&&(ru(t,e,r,n),Va(t,e,r))}};function os(e,t,n,r,i,a,o){return"function"==typeof(e=e.stateNode).shouldComponentUpdate?e.shouldComponentUpdate(r,a,o):!t.prototype||!t.prototype.isPureReactComponent||(!ur(n,r)||!ur(i,a))}function ss(e,t,n){var r=!1,i=Ei,a=t.contextType;return"object"==typeof a&&null!==a?a=Aa(a):(i=zi(t)?Ai:Pi.current,a=(r=null!=(r=t.contextTypes))?Ri(e,i):Ei),t=new t(n,a),e.memoizedState=null!==t.state&&void 0!==t.state?t.state:null,t.updater=as,e.stateNode=t,t._reactInternals=e,r&&((e=e.stateNode).__reactInternalMemoizedUnmaskedChildContext=i,e.__reactInternalMemoizedMaskedChildContext=a),t}function ls(e,t,n,r){e=t.state,"function"==typeof t.componentWillReceiveProps&&t.componentWillReceiveProps(n,r),"function"==typeof t.UNSAFE_componentWillReceiveProps&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&as.enqueueReplaceState(t,t.state,null)}function us(e,t,n,r){var i=e.stateNode;i.props=n,i.state=e.memoizedState,i.refs={},Oa(e);var a=t.contextType;"object"==typeof a&&null!==a?i.context=Aa(a):(a=zi(t)?Ai:Pi.current,i.context=Ri(e,a)),i.state=e.memoizedState,"function"==typeof(a=t.getDerivedStateFromProps)&&(is(e,t,a,n),i.state=e.memoizedState),"function"==typeof t.getDerivedStateFromProps||"function"==typeof i.getSnapshotBeforeUpdate||"function"!=typeof i.UNSAFE_componentWillMount&&"function"!=typeof i.componentWillMount||(t=i.state,"function"==typeof i.componentWillMount&&i.componentWillMount(),"function"==typeof i.UNSAFE_componentWillMount&&i.UNSAFE_componentWillMount(),t!==i.state&&as.enqueueReplaceState(i,i.state,null),Ua(e,n,i,r),i.state=e.memoizedState),"function"==typeof i.componentDidMount&&(e.flags|=4194308)}function cs(e,t){try{var n="",r=t;do{n+=B(r),r=r.return}while(r);var i=n}catch(a){i="\nError generating stack: "+a.message+"\n"+a.stack}return{value:e,source:t,stack:i,digest:null}}function ds(e,t,n){return{value:e,source:null,stack:null!=n?n:null,digest:null!=t?t:null}}function hs(e,t){try{console.error(t.value)}catch(Ix){setTimeout(function(){throw Ix})}}var ps="function"==typeof WeakMap?WeakMap:Map;function fs(e,t,n){(n=Na(-1,n)).tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){Yl||(Yl=!0,Hl=r),hs(0,t)},n}function ms(e,t,n){(n=Na(-1,n)).tag=3;var r=e.type.getDerivedStateFromError;if("function"==typeof r){var i=t.value;n.payload=function(){return r(i)},n.callback=function(){hs(0,t)}}var a=e.stateNode;return null!==a&&"function"==typeof a.componentDidCatch&&(n.callback=function(){hs(0,t),"function"!=typeof r&&(null===ql?ql=new Set([this]):ql.add(this));var e=t.stack;this.componentDidCatch(t.value,{componentStack:null!==e?e:""})}),n}function gs(e,t,n){var r=e.pingCache;if(null===r){r=e.pingCache=new ps;var i=new Set;r.set(t,i)}else void 0===(i=r.get(t))&&(i=new Set,r.set(t,i));i.has(n)||(i.add(n),e=Tu.bind(null,e,t,n),t.then(e,e))}function ys(e){do{var t;if((t=13===e.tag)&&(t=null===(t=e.memoizedState)||null!==t.dehydrated),t)return e;e=e.return}while(null!==e);return null}function vs(e,t,n,r,i){return 1&e.mode?(e.flags|=65536,e.lanes=i,e):(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,1===n.tag&&(null===n.alternate?n.tag=17:((t=Na(-1,1)).tag=2,Fa(n,t,1))),n.lanes|=1),e)}var xs=x.ReactCurrentOwner,bs=!1;function ws(e,t,n,r){t.child=null===e?ka(t,null,n,r):wa(t,e.child,n,r)}function ks(e,t,n,r,i){n=n.render;var a=t.ref;return Ma(t,i),r=yo(e,t,n,r,a,i),n=vo(),null===e||bs?(aa&&n&&ta(t),t.flags|=1,ws(e,t,r,i),t.child):(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,Ys(e,t,i))}function _s(e,t,n,r,i){if(null===e){var a=n.type;return"function"!=typeof a||zu(a)||void 0!==a.defaultProps||null!==n.compare||void 0!==n.defaultProps?((e=$u(n.type,null,r,t,t.mode,i)).ref=t.ref,e.return=t,t.child=e):(t.tag=15,t.type=a,Ss(e,t,a,r,i))}if(a=e.child,0===(e.lanes&i)){var o=a.memoizedProps;if((n=null!==(n=n.compare)?n:ur)(o,r)&&e.ref===t.ref)return Ys(e,t,i)}return t.flags|=1,(e=Du(a,r)).ref=t.ref,e.return=t,t.child=e}function Ss(e,t,n,r,i){if(null!==e){var a=e.memoizedProps;if(ur(a,r)&&e.ref===t.ref){if(bs=!1,t.pendingProps=r=a,0===(e.lanes&i))return t.lanes=e.lanes,Ys(e,t,i);131072&e.flags&&(bs=!0)}}return Cs(e,t,n,r,i)}function js(e,t,n){var r=t.pendingProps,i=r.children,a=null!==e?e.memoizedState:null;if("hidden"===r.mode)if(1&t.mode){if(!(1073741824&n))return e=null!==a?a.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,Ci(Dl,zl),zl|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=null!==a?a.baseLanes:n,Ci(Dl,zl),zl|=r}else t.memoizedState={baseLanes:0,cachePool:null,transitions:null},Ci(Dl,zl),zl|=n;else null!==a?(r=a.baseLanes|n,t.memoizedState=null):r=n,Ci(Dl,zl),zl|=r;return ws(e,t,i,n),t.child}function Ts(e,t){var n=t.ref;(null===e&&null!==n||null!==e&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function Cs(e,t,n,r,i){var a=zi(n)?Ai:Pi.current;return a=Ri(t,a),Ma(t,i),n=yo(e,t,n,r,a,i),r=vo(),null===e||bs?(aa&&r&&ta(t),t.flags|=1,ws(e,t,n,i),t.child):(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,Ys(e,t,i))}function Es(e,t,n,r,i){if(zi(n)){var a=!0;Oi(t)}else a=!1;if(Ma(t,i),null===t.stateNode)Ws(e,t),ss(t,n,r),us(t,n,r,i),r=!0;else if(null===e){var o=t.stateNode,s=t.memoizedProps;o.props=s;var l=o.context,u=n.contextType;"object"==typeof u&&null!==u?u=Aa(u):u=Ri(t,u=zi(n)?Ai:Pi.current);var c=n.getDerivedStateFromProps,d="function"==typeof c||"function"==typeof o.getSnapshotBeforeUpdate;d||"function"!=typeof o.UNSAFE_componentWillReceiveProps&&"function"!=typeof o.componentWillReceiveProps||(s!==r||l!==u)&&ls(t,o,r,u),La=!1;var h=t.memoizedState;o.state=h,Ua(t,r,o,i),l=t.memoizedState,s!==r||h!==l||Mi.current||La?("function"==typeof c&&(is(t,n,c,r),l=t.memoizedState),(s=La||os(t,n,s,r,h,l,u))?(d||"function"!=typeof o.UNSAFE_componentWillMount&&"function"!=typeof o.componentWillMount||("function"==typeof o.componentWillMount&&o.componentWillMount(),"function"==typeof o.UNSAFE_componentWillMount&&o.UNSAFE_componentWillMount()),"function"==typeof o.componentDidMount&&(t.flags|=4194308)):("function"==typeof o.componentDidMount&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=l),o.props=r,o.state=l,o.context=u,r=s):("function"==typeof o.componentDidMount&&(t.flags|=4194308),r=!1)}else{o=t.stateNode,Ia(e,t),s=t.memoizedProps,u=t.type===t.elementType?s:rs(t.type,s),o.props=u,d=t.pendingProps,h=o.context,"object"==typeof(l=n.contextType)&&null!==l?l=Aa(l):l=Ri(t,l=zi(n)?Ai:Pi.current);var p=n.getDerivedStateFromProps;(c="function"==typeof p||"function"==typeof o.getSnapshotBeforeUpdate)||"function"!=typeof o.UNSAFE_componentWillReceiveProps&&"function"!=typeof o.componentWillReceiveProps||(s!==d||h!==l)&&ls(t,o,r,l),La=!1,h=t.memoizedState,o.state=h,Ua(t,r,o,i);var f=t.memoizedState;s!==d||h!==f||Mi.current||La?("function"==typeof p&&(is(t,n,p,r),f=t.memoizedState),(u=La||os(t,n,u,r,h,f,l)||!1)?(c||"function"!=typeof o.UNSAFE_componentWillUpdate&&"function"!=typeof o.componentWillUpdate||("function"==typeof o.componentWillUpdate&&o.componentWillUpdate(r,f,l),"function"==typeof o.UNSAFE_componentWillUpdate&&o.UNSAFE_componentWillUpdate(r,f,l)),"function"==typeof o.componentDidUpdate&&(t.flags|=4),"function"==typeof o.getSnapshotBeforeUpdate&&(t.flags|=1024)):("function"!=typeof o.componentDidUpdate||s===e.memoizedProps&&h===e.memoizedState||(t.flags|=4),"function"!=typeof o.getSnapshotBeforeUpdate||s===e.memoizedProps&&h===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=f),o.props=r,o.state=f,o.context=l,r=u):("function"!=typeof o.componentDidUpdate||s===e.memoizedProps&&h===e.memoizedState||(t.flags|=4),"function"!=typeof o.getSnapshotBeforeUpdate||s===e.memoizedProps&&h===e.memoizedState||(t.flags|=1024),r=!1)}return Ps(e,t,n,r,a,i)}function Ps(e,t,n,r,i,a){Ts(e,t);var o=!!(128&t.flags);if(!r&&!o)return i&&Ii(t,n,!1),Ys(e,t,a);r=t.stateNode,xs.current=t;var s=o&&"function"!=typeof n.getDerivedStateFromError?null:r.render();return t.flags|=1,null!==e&&o?(t.child=wa(t,e.child,null,a),t.child=wa(t,null,s,a)):ws(e,t,s,a),t.memoizedState=r.state,i&&Ii(t,n,!0),t.child}function Ms(e){var t=e.stateNode;t.pendingContext?$i(0,t.pendingContext,t.pendingContext!==t.context):t.context&&$i(0,t.context,!1),Ka(e,t.containerInfo)}function As(e,t,n,r,i){return fa(),ma(i),t.flags|=256,ws(e,t,n,r),t.child}var Rs,zs,Ds,$s,Ls={dehydrated:null,treeContext:null,retryLane:0};function Os(e){return{baseLanes:e,cachePool:null,transitions:null}}function Is(e,t,r){var i,a=t.pendingProps,o=eo.current,s=!1,l=!!(128&t.flags);if((i=l)||(i=(null===e||null!==e.memoizedState)&&!!(2&o)),i?(s=!0,t.flags&=-129):null!==e&&null===e.memoizedState||(o|=1),Ci(eo,1&o),null===e)return ca(t),null!==(e=t.memoizedState)&&null!==(e=e.dehydrated)?(1&t.mode?"$!"===e.data?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(l=a.children,e=a.fallback,s?(a=t.mode,s=t.child,l={mode:"hidden",children:l},1&a||null===s?s=Ou(l,a,0,null):(s.childLanes=0,s.pendingProps=l),e=Lu(e,a,r,null),s.return=t,e.return=t,s.sibling=e,t.child=s,t.child.memoizedState=Os(r),t.memoizedState=Ls,e):Ns(t,l));if(null!==(o=e.memoizedState)&&null!==(i=o.dehydrated))return function(e,t,r,i,a,o,s){if(r)return 256&t.flags?(t.flags&=-257,Fs(e,t,s,i=ds(Error(n(422))))):null!==t.memoizedState?(t.child=e.child,t.flags|=128,null):(o=i.fallback,a=t.mode,i=Ou({mode:"visible",children:i.children},a,0,null),(o=Lu(o,a,s,null)).flags|=2,i.return=t,o.return=t,i.sibling=o,t.child=i,1&t.mode&&wa(t,e.child,null,s),t.child.memoizedState=Os(s),t.memoizedState=Ls,o);if(!(1&t.mode))return Fs(e,t,s,null);if("$!"===a.data){if(i=a.nextSibling&&a.nextSibling.dataset)var l=i.dgst;return i=l,Fs(e,t,s,i=ds(o=Error(n(419)),i,void 0))}if(l=0!==(s&e.childLanes),bs||l){if(null!==(i=Ml)){switch(s&-s){case 4:a=2;break;case 16:a=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:a=32;break;case 536870912:a=268435456;break;default:a=0}0!==(a=0!==(a&(i.suspendedLanes|s))?0:a)&&a!==o.retryLane&&(o.retryLane=a,$a(e,a),ru(i,e,a,-1))}return gu(),Fs(e,t,s,i=ds(Error(n(421))))}return"$?"===a.data?(t.flags|=128,t.child=e.child,t=Eu.bind(null,e),a._reactRetry=t,null):(e=o.treeContext,ia=ci(a.nextSibling),ra=t,aa=!0,oa=null,null!==e&&(Xi[Gi++]=Qi,Xi[Gi++]=Zi,Xi[Gi++]=Ki,Qi=e.id,Zi=e.overflow,Ki=t),t=Ns(t,i.children),t.flags|=4096,t)}(e,t,l,a,i,o,r);if(s){s=a.fallback,l=t.mode,i=(o=e.child).sibling;var u={mode:"hidden",children:a.children};return 1&l||t.child===o?(a=Du(o,u)).subtreeFlags=14680064&o.subtreeFlags:((a=t.child).childLanes=0,a.pendingProps=u,t.deletions=null),null!==i?s=Du(i,s):(s=Lu(s,l,r,null)).flags|=2,s.return=t,a.return=t,a.sibling=s,t.child=a,a=s,s=t.child,l=null===(l=e.child.memoizedState)?Os(r):{baseLanes:l.baseLanes|r,cachePool:null,transitions:l.transitions},s.memoizedState=l,s.childLanes=e.childLanes&~r,t.memoizedState=Ls,a}return e=(s=e.child).sibling,a=Du(s,{mode:"visible",children:a.children}),!(1&t.mode)&&(a.lanes=r),a.return=t,a.sibling=null,null!==e&&(null===(r=t.deletions)?(t.deletions=[e],t.flags|=16):r.push(e)),t.child=a,t.memoizedState=null,a}function Ns(e,t){return(t=Ou({mode:"visible",children:t},e.mode,0,null)).return=e,e.child=t}function Fs(e,t,n,r){return null!==r&&ma(r),wa(t,e.child,null,n),(e=Ns(t,t.pendingProps.children)).flags|=2,t.memoizedState=null,e}function Vs(e,t,n){e.lanes|=t;var r=e.alternate;null!==r&&(r.lanes|=t),Pa(e.return,t,n)}function Bs(e,t,n,r,i){var a=e.memoizedState;null===a?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(a.isBackwards=t,a.rendering=null,a.renderingStartTime=0,a.last=r,a.tail=n,a.tailMode=i)}function Us(e,t,n){var r=t.pendingProps,i=r.revealOrder,a=r.tail;if(ws(e,t,r.children,n),2&(r=eo.current))r=1&r|2,t.flags|=128;else{if(null!==e&&128&e.flags)e:for(e=t.child;null!==e;){if(13===e.tag)null!==e.memoizedState&&Vs(e,n,t);else if(19===e.tag)Vs(e,n,t);else if(null!==e.child){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;null===e.sibling;){if(null===e.return||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(Ci(eo,r),1&t.mode)switch(i){case"forwards":for(n=t.child,i=null;null!==n;)null!==(e=n.alternate)&&null===to(e)&&(i=n),n=n.sibling;null===(n=i)?(i=t.child,t.child=null):(i=n.sibling,n.sibling=null),Bs(t,!1,i,n,a);break;case"backwards":for(n=null,i=t.child,t.child=null;null!==i;){if(null!==(e=i.alternate)&&null===to(e)){t.child=i;break}e=i.sibling,i.sibling=n,n=i,i=e}Bs(t,!0,n,null,a);break;case"together":Bs(t,!1,null,null,void 0);break;default:t.memoizedState=null}else t.memoizedState=null;return t.child}function Ws(e,t){!(1&t.mode)&&null!==e&&(e.alternate=null,t.alternate=null,t.flags|=2)}function Ys(e,t,r){if(null!==e&&(t.dependencies=e.dependencies),Ol|=t.lanes,0===(r&t.childLanes))return null;if(null!==e&&t.child!==e.child)throw Error(n(153));if(null!==t.child){for(r=Du(e=t.child,e.pendingProps),t.child=r,r.return=t;null!==e.sibling;)e=e.sibling,(r=r.sibling=Du(e,e.pendingProps)).return=t;r.sibling=null}return t.child}function Hs(e,t){if(!aa)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;null!==t;)null!==t.alternate&&(n=t),t=t.sibling;null===n?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;null!==n;)null!==n.alternate&&(r=n),n=n.sibling;null===r?t||null===e.tail?e.tail=null:e.tail.sibling=null:r.sibling=null}}function qs(e){var t=null!==e.alternate&&e.alternate.child===e.child,n=0,r=0;if(t)for(var i=e.child;null!==i;)n|=i.lanes|i.childLanes,r|=14680064&i.subtreeFlags,r|=14680064&i.flags,i.return=e,i=i.sibling;else for(i=e.child;null!==i;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=e,i=i.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function Xs(e,t,r){var a=t.pendingProps;switch(na(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return qs(t),null;case 1:case 17:return zi(t.type)&&Di(),qs(t),null;case 3:return a=t.stateNode,Qa(),Ti(Mi),Ti(Pi),ro(),a.pendingContext&&(a.context=a.pendingContext,a.pendingContext=null),null!==e&&null!==e.child||(ha(t)?t.flags|=4:null===e||e.memoizedState.isDehydrated&&!(256&t.flags)||(t.flags|=1024,null!==oa&&(su(oa),oa=null))),zs(e,t),qs(t),null;case 5:Ja(t);var o=Ga(Xa.current);if(r=t.type,null!==e&&null!=t.stateNode)Ds(e,t,r,a,o),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!a){if(null===t.stateNode)throw Error(n(166));return qs(t),null}if(e=Ga(Ha.current),ha(t)){a=t.stateNode,r=t.type;var s=t.memoizedProps;switch(a[pi]=t,a[fi]=s,e=!!(1&t.mode),r){case"dialog":Fr("cancel",a),Fr("close",a);break;case"iframe":case"object":case"embed":Fr("load",a);break;case"video":case"audio":for(o=0;o<Lr.length;o++)Fr(Lr[o],a);break;case"source":Fr("error",a);break;case"img":case"image":case"link":Fr("error",a),Fr("load",a);break;case"details":Fr("toggle",a);break;case"input":Q(a,s),Fr("invalid",a);break;case"select":a._wrapperState={wasMultiple:!!s.multiple},Fr("invalid",a);break;case"textarea":ae(a,s),Fr("invalid",a)}for(var l in xe(r,s),o=null,s)if(s.hasOwnProperty(l)){var u=s[l];"children"===l?"string"==typeof u?a.textContent!==u&&(!0!==s.suppressHydrationWarning&&Jr(a.textContent,u,e),o=["children",u]):"number"==typeof u&&a.textContent!==""+u&&(!0!==s.suppressHydrationWarning&&Jr(a.textContent,u,e),o=["children",""+u]):i.hasOwnProperty(l)&&null!=u&&"onScroll"===l&&Fr("scroll",a)}switch(r){case"input":q(a),ee(a,s,!0);break;case"textarea":q(a),se(a);break;case"select":case"option":break;default:"function"==typeof s.onClick&&(a.onclick=ei)}a=o,t.updateQueue=a,null!==a&&(t.flags|=4)}else{l=9===o.nodeType?o:o.ownerDocument,"http://www.w3.org/1999/xhtml"===e&&(e=le(r)),"http://www.w3.org/1999/xhtml"===e?"script"===r?((e=l.createElement("div")).innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):"string"==typeof a.is?e=l.createElement(r,{is:a.is}):(e=l.createElement(r),"select"===r&&(l=e,a.multiple?l.multiple=!0:a.size&&(l.size=a.size))):e=l.createElementNS(e,r),e[pi]=t,e[fi]=a,Rs(e,t,!1,!1),t.stateNode=e;e:{switch(l=be(r,a),r){case"dialog":Fr("cancel",e),Fr("close",e),o=a;break;case"iframe":case"object":case"embed":Fr("load",e),o=a;break;case"video":case"audio":for(o=0;o<Lr.length;o++)Fr(Lr[o],e);o=a;break;case"source":Fr("error",e),o=a;break;case"img":case"image":case"link":Fr("error",e),Fr("load",e),o=a;break;case"details":Fr("toggle",e),o=a;break;case"input":Q(e,a),o=K(e,a),Fr("invalid",e);break;case"option":default:o=a;break;case"select":e._wrapperState={wasMultiple:!!a.multiple},o=I({},a,{value:void 0}),Fr("invalid",e);break;case"textarea":ae(e,a),o=ie(e,a),Fr("invalid",e)}for(s in xe(r,o),u=o)if(u.hasOwnProperty(s)){var c=u[s];"style"===s?ye(e,c):"dangerouslySetInnerHTML"===s?null!=(c=c?c.__html:void 0)&&he(e,c):"children"===s?"string"==typeof c?("textarea"!==r||""!==c)&&pe(e,c):"number"==typeof c&&pe(e,""+c):"suppressContentEditableWarning"!==s&&"suppressHydrationWarning"!==s&&"autoFocus"!==s&&(i.hasOwnProperty(s)?null!=c&&"onScroll"===s&&Fr("scroll",e):null!=c&&v(e,s,c,l))}switch(r){case"input":q(e),ee(e,a,!1);break;case"textarea":q(e),se(e);break;case"option":null!=a.value&&e.setAttribute("value",""+Y(a.value));break;case"select":e.multiple=!!a.multiple,null!=(s=a.value)?re(e,!!a.multiple,s,!1):null!=a.defaultValue&&re(e,!!a.multiple,a.defaultValue,!0);break;default:"function"==typeof o.onClick&&(e.onclick=ei)}switch(r){case"button":case"input":case"select":case"textarea":a=!!a.autoFocus;break e;case"img":a=!0;break e;default:a=!1}}a&&(t.flags|=4)}null!==t.ref&&(t.flags|=512,t.flags|=2097152)}return qs(t),null;case 6:if(e&&null!=t.stateNode)$s(e,t,e.memoizedProps,a);else{if("string"!=typeof a&&null===t.stateNode)throw Error(n(166));if(r=Ga(Xa.current),Ga(Ha.current),ha(t)){if(a=t.stateNode,r=t.memoizedProps,a[pi]=t,(s=a.nodeValue!==r)&&null!==(e=ra))switch(e.tag){case 3:Jr(a.nodeValue,r,!!(1&e.mode));break;case 5:!0!==e.memoizedProps.suppressHydrationWarning&&Jr(a.nodeValue,r,!!(1&e.mode))}s&&(t.flags|=4)}else(a=(9===r.nodeType?r:r.ownerDocument).createTextNode(a))[pi]=t,t.stateNode=a}return qs(t),null;case 13:if(Ti(eo),a=t.memoizedState,null===e||null!==e.memoizedState&&null!==e.memoizedState.dehydrated){if(aa&&null!==ia&&1&t.mode&&!(128&t.flags))pa(),fa(),t.flags|=98560,s=!1;else if(s=ha(t),null!==a&&null!==a.dehydrated){if(null===e){if(!s)throw Error(n(318));if(!(s=null!==(s=t.memoizedState)?s.dehydrated:null))throw Error(n(317));s[pi]=t}else fa(),!(128&t.flags)&&(t.memoizedState=null),t.flags|=4;qs(t),s=!1}else null!==oa&&(su(oa),oa=null),s=!0;if(!s)return 65536&t.flags?t:null}return 128&t.flags?(t.lanes=r,t):((a=null!==a)!==(null!==e&&null!==e.memoizedState)&&a&&(t.child.flags|=8192,1&t.mode&&(null===e||1&eo.current?0===$l&&($l=3):gu())),null!==t.updateQueue&&(t.flags|=4),qs(t),null);case 4:return Qa(),zs(e,t),null===e&&Ur(t.stateNode.containerInfo),qs(t),null;case 10:return Ea(t.type._context),qs(t),null;case 19:if(Ti(eo),null===(s=t.memoizedState))return qs(t),null;if(a=!!(128&t.flags),null===(l=s.rendering))if(a)Hs(s,!1);else{if(0!==$l||null!==e&&128&e.flags)for(e=t.child;null!==e;){if(null!==(l=to(e))){for(t.flags|=128,Hs(s,!1),null!==(a=l.updateQueue)&&(t.updateQueue=a,t.flags|=4),t.subtreeFlags=0,a=r,r=t.child;null!==r;)e=a,(s=r).flags&=14680066,null===(l=s.alternate)?(s.childLanes=0,s.lanes=e,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=l.childLanes,s.lanes=l.lanes,s.child=l.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=l.memoizedProps,s.memoizedState=l.memoizedState,s.updateQueue=l.updateQueue,s.type=l.type,e=l.dependencies,s.dependencies=null===e?null:{lanes:e.lanes,firstContext:e.firstContext}),r=r.sibling;return Ci(eo,1&eo.current|2),t.child}e=e.sibling}null!==s.tail&&Ze()>Ul&&(t.flags|=128,a=!0,Hs(s,!1),t.lanes=4194304)}else{if(!a)if(null!==(e=to(l))){if(t.flags|=128,a=!0,null!==(r=e.updateQueue)&&(t.updateQueue=r,t.flags|=4),Hs(s,!0),null===s.tail&&"hidden"===s.tailMode&&!l.alternate&&!aa)return qs(t),null}else 2*Ze()-s.renderingStartTime>Ul&&1073741824!==r&&(t.flags|=128,a=!0,Hs(s,!1),t.lanes=4194304);s.isBackwards?(l.sibling=t.child,t.child=l):(null!==(r=s.last)?r.sibling=l:t.child=l,s.last=l)}return null!==s.tail?(t=s.tail,s.rendering=t,s.tail=t.sibling,s.renderingStartTime=Ze(),t.sibling=null,r=eo.current,Ci(eo,a?1&r|2:1&r),t):(qs(t),null);case 22:case 23:return hu(),a=null!==t.memoizedState,null!==e&&null!==e.memoizedState!==a&&(t.flags|=8192),a&&1&t.mode?!!(1073741824&zl)&&(qs(t),6&t.subtreeFlags&&(t.flags|=8192)):qs(t),null;case 24:case 25:return null}throw Error(n(156,t.tag))}function Gs(e,t){switch(na(t),t.tag){case 1:return zi(t.type)&&Di(),65536&(e=t.flags)?(t.flags=-65537&e|128,t):null;case 3:return Qa(),Ti(Mi),Ti(Pi),ro(),65536&(e=t.flags)&&!(128&e)?(t.flags=-65537&e|128,t):null;case 5:return Ja(t),null;case 13:if(Ti(eo),null!==(e=t.memoizedState)&&null!==e.dehydrated){if(null===t.alternate)throw Error(n(340));fa()}return 65536&(e=t.flags)?(t.flags=-65537&e|128,t):null;case 19:return Ti(eo),null;case 4:return Qa(),null;case 10:return Ea(t.type._context),null;case 22:case 23:return hu(),null;default:return null}}Rs=function(e,t){for(var n=t.child;null!==n;){if(5===n.tag||6===n.tag)e.appendChild(n.stateNode);else if(4!==n.tag&&null!==n.child){n.child.return=n,n=n.child;continue}if(n===t)break;for(;null===n.sibling;){if(null===n.return||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}},zs=function(){},Ds=function(e,t,n,r){var a=e.memoizedProps;if(a!==r){e=t.stateNode,Ga(Ha.current);var o,s=null;switch(n){case"input":a=K(e,a),r=K(e,r),s=[];break;case"select":a=I({},a,{value:void 0}),r=I({},r,{value:void 0}),s=[];break;case"textarea":a=ie(e,a),r=ie(e,r),s=[];break;default:"function"!=typeof a.onClick&&"function"==typeof r.onClick&&(e.onclick=ei)}for(c in xe(n,r),n=null,a)if(!r.hasOwnProperty(c)&&a.hasOwnProperty(c)&&null!=a[c])if("style"===c){var l=a[c];for(o in l)l.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else"dangerouslySetInnerHTML"!==c&&"children"!==c&&"suppressContentEditableWarning"!==c&&"suppressHydrationWarning"!==c&&"autoFocus"!==c&&(i.hasOwnProperty(c)?s||(s=[]):(s=s||[]).push(c,null));for(c in r){var u=r[c];if(l=null!=a?a[c]:void 0,r.hasOwnProperty(c)&&u!==l&&(null!=u||null!=l))if("style"===c)if(l){for(o in l)!l.hasOwnProperty(o)||u&&u.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in u)u.hasOwnProperty(o)&&l[o]!==u[o]&&(n||(n={}),n[o]=u[o])}else n||(s||(s=[]),s.push(c,n)),n=u;else"dangerouslySetInnerHTML"===c?(u=u?u.__html:void 0,l=l?l.__html:void 0,null!=u&&l!==u&&(s=s||[]).push(c,u)):"children"===c?"string"!=typeof u&&"number"!=typeof u||(s=s||[]).push(c,""+u):"suppressContentEditableWarning"!==c&&"suppressHydrationWarning"!==c&&(i.hasOwnProperty(c)?(null!=u&&"onScroll"===c&&Fr("scroll",e),s||l===u||(s=[])):(s=s||[]).push(c,u))}n&&(s=s||[]).push("style",n);var c=s;(t.updateQueue=c)&&(t.flags|=4)}},$s=function(e,t,n,r){n!==r&&(t.flags|=4)};var Ks=!1,Qs=!1,Zs="function"==typeof WeakSet?WeakSet:Set,Js=null;function el(e,t){var n=e.ref;if(null!==n)if("function"==typeof n)try{n(null)}catch(r){ju(e,t,r)}else n.current=null}function tl(e,t,n){try{n()}catch(r){ju(e,t,r)}}var nl=!1;function rl(e,t,n){var r=t.updateQueue;if(null!==(r=null!==r?r.lastEffect:null)){var i=r=r.next;do{if((i.tag&e)===e){var a=i.destroy;i.destroy=void 0,void 0!==a&&tl(t,n,a)}i=i.next}while(i!==r)}}function il(e,t){if(null!==(t=null!==(t=t.updateQueue)?t.lastEffect:null)){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function al(e){var t=e.ref;if(null!==t){var n=e.stateNode;e.tag,e=n,"function"==typeof t?t(e):t.current=e}}function ol(e){var t=e.alternate;null!==t&&(e.alternate=null,ol(t)),e.child=null,e.deletions=null,e.sibling=null,5===e.tag&&(null!==(t=e.stateNode)&&(delete t[pi],delete t[fi],delete t[gi],delete t[yi],delete t[vi])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function sl(e){return 5===e.tag||3===e.tag||4===e.tag}function ll(e){e:for(;;){for(;null===e.sibling;){if(null===e.return||sl(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;5!==e.tag&&6!==e.tag&&18!==e.tag;){if(2&e.flags)continue e;if(null===e.child||4===e.tag)continue e;e.child.return=e,e=e.child}if(!(2&e.flags))return e.stateNode}}function ul(e,t,n){var r=e.tag;if(5===r||6===r)e=e.stateNode,t?8===n.nodeType?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(8===n.nodeType?(t=n.parentNode).insertBefore(e,n):(t=n).appendChild(e),null!=(n=n._reactRootContainer)||null!==t.onclick||(t.onclick=ei));else if(4!==r&&null!==(e=e.child))for(ul(e,t,n),e=e.sibling;null!==e;)ul(e,t,n),e=e.sibling}function cl(e,t,n){var r=e.tag;if(5===r||6===r)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(4!==r&&null!==(e=e.child))for(cl(e,t,n),e=e.sibling;null!==e;)cl(e,t,n),e=e.sibling}var dl=null,hl=!1;function pl(e,t,n){for(n=n.child;null!==n;)fl(e,t,n),n=n.sibling}function fl(e,t,n){if(ot&&"function"==typeof ot.onCommitFiberUnmount)try{ot.onCommitFiberUnmount(at,n)}catch(s){}switch(n.tag){case 5:Qs||el(n,t);case 6:var r=dl,i=hl;dl=null,pl(e,t,n),hl=i,null!==(dl=r)&&(hl?(e=dl,n=n.stateNode,8===e.nodeType?e.parentNode.removeChild(n):e.removeChild(n)):dl.removeChild(n.stateNode));break;case 18:null!==dl&&(hl?(e=dl,n=n.stateNode,8===e.nodeType?ui(e.parentNode,n):1===e.nodeType&&ui(e,n),Ut(e)):ui(dl,n.stateNode));break;case 4:r=dl,i=hl,dl=n.stateNode.containerInfo,hl=!0,pl(e,t,n),dl=r,hl=i;break;case 0:case 11:case 14:case 15:if(!Qs&&(null!==(r=n.updateQueue)&&null!==(r=r.lastEffect))){i=r=r.next;do{var a=i,o=a.destroy;a=a.tag,void 0!==o&&(2&a||4&a)&&tl(n,t,o),i=i.next}while(i!==r)}pl(e,t,n);break;case 1:if(!Qs&&(el(n,t),"function"==typeof(r=n.stateNode).componentWillUnmount))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(s){ju(n,t,s)}pl(e,t,n);break;case 21:pl(e,t,n);break;case 22:1&n.mode?(Qs=(r=Qs)||null!==n.memoizedState,pl(e,t,n),Qs=r):pl(e,t,n);break;default:pl(e,t,n)}}function ml(e){var t=e.updateQueue;if(null!==t){e.updateQueue=null;var n=e.stateNode;null===n&&(n=e.stateNode=new Zs),t.forEach(function(t){var r=Pu.bind(null,e,t);n.has(t)||(n.add(t),t.then(r,r))})}}function gl(e,t){var r=t.deletions;if(null!==r)for(var i=0;i<r.length;i++){var a=r[i];try{var o=e,s=t,l=s;e:for(;null!==l;){switch(l.tag){case 5:dl=l.stateNode,hl=!1;break e;case 3:case 4:dl=l.stateNode.containerInfo,hl=!0;break e}l=l.return}if(null===dl)throw Error(n(160));fl(o,s,a),dl=null,hl=!1;var u=a.alternate;null!==u&&(u.return=null),a.return=null}catch(c){ju(a,t,c)}}if(12854&t.subtreeFlags)for(t=t.child;null!==t;)yl(t,e),t=t.sibling}function yl(e,t){var r=e.alternate,i=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(gl(t,e),vl(e),4&i){try{rl(3,e,e.return),il(3,e)}catch(g){ju(e,e.return,g)}try{rl(5,e,e.return)}catch(g){ju(e,e.return,g)}}break;case 1:gl(t,e),vl(e),512&i&&null!==r&&el(r,r.return);break;case 5:if(gl(t,e),vl(e),512&i&&null!==r&&el(r,r.return),32&e.flags){var a=e.stateNode;try{pe(a,"")}catch(g){ju(e,e.return,g)}}if(4&i&&null!=(a=e.stateNode)){var o=e.memoizedProps,s=null!==r?r.memoizedProps:o,l=e.type,u=e.updateQueue;if(e.updateQueue=null,null!==u)try{"input"===l&&"radio"===o.type&&null!=o.name&&Z(a,o),be(l,s);var c=be(l,o);for(s=0;s<u.length;s+=2){var d=u[s],h=u[s+1];"style"===d?ye(a,h):"dangerouslySetInnerHTML"===d?he(a,h):"children"===d?pe(a,h):v(a,d,h,c)}switch(l){case"input":J(a,o);break;case"textarea":oe(a,o);break;case"select":var p=a._wrapperState.wasMultiple;a._wrapperState.wasMultiple=!!o.multiple;var f=o.value;null!=f?re(a,!!o.multiple,f,!1):p!==!!o.multiple&&(null!=o.defaultValue?re(a,!!o.multiple,o.defaultValue,!0):re(a,!!o.multiple,o.multiple?[]:"",!1))}a[fi]=o}catch(g){ju(e,e.return,g)}}break;case 6:if(gl(t,e),vl(e),4&i){if(null===e.stateNode)throw Error(n(162));a=e.stateNode,o=e.memoizedProps;try{a.nodeValue=o}catch(g){ju(e,e.return,g)}}break;case 3:if(gl(t,e),vl(e),4&i&&null!==r&&r.memoizedState.isDehydrated)try{Ut(t.containerInfo)}catch(g){ju(e,e.return,g)}break;case 4:default:gl(t,e),vl(e);break;case 13:gl(t,e),vl(e),8192&(a=e.child).flags&&(o=null!==a.memoizedState,a.stateNode.isHidden=o,!o||null!==a.alternate&&null!==a.alternate.memoizedState||(Bl=Ze())),4&i&&ml(e);break;case 22:if(d=null!==r&&null!==r.memoizedState,1&e.mode?(Qs=(c=Qs)||d,gl(t,e),Qs=c):gl(t,e),vl(e),8192&i){if(c=null!==e.memoizedState,(e.stateNode.isHidden=c)&&!d&&1&e.mode)for(Js=e,d=e.child;null!==d;){for(h=Js=d;null!==Js;){switch(f=(p=Js).child,p.tag){case 0:case 11:case 14:case 15:rl(4,p,p.return);break;case 1:el(p,p.return);var m=p.stateNode;if("function"==typeof m.componentWillUnmount){i=p,r=p.return;try{t=i,m.props=t.memoizedProps,m.state=t.memoizedState,m.componentWillUnmount()}catch(g){ju(i,r,g)}}break;case 5:el(p,p.return);break;case 22:if(null!==p.memoizedState){kl(h);continue}}null!==f?(f.return=p,Js=f):kl(h)}d=d.sibling}e:for(d=null,h=e;;){if(5===h.tag){if(null===d){d=h;try{a=h.stateNode,c?"function"==typeof(o=a.style).setProperty?o.setProperty("display","none","important"):o.display="none":(l=h.stateNode,s=null!=(u=h.memoizedProps.style)&&u.hasOwnProperty("display")?u.display:null,l.style.display=ge("display",s))}catch(g){ju(e,e.return,g)}}}else if(6===h.tag){if(null===d)try{h.stateNode.nodeValue=c?"":h.memoizedProps}catch(g){ju(e,e.return,g)}}else if((22!==h.tag&&23!==h.tag||null===h.memoizedState||h===e)&&null!==h.child){h.child.return=h,h=h.child;continue}if(h===e)break e;for(;null===h.sibling;){if(null===h.return||h.return===e)break e;d===h&&(d=null),h=h.return}d===h&&(d=null),h.sibling.return=h.return,h=h.sibling}}break;case 19:gl(t,e),vl(e),4&i&&ml(e);case 21:}}function vl(e){var t=e.flags;if(2&t){try{e:{for(var r=e.return;null!==r;){if(sl(r)){var i=r;break e}r=r.return}throw Error(n(160))}switch(i.tag){case 5:var a=i.stateNode;32&i.flags&&(pe(a,""),i.flags&=-33),cl(e,ll(e),a);break;case 3:case 4:var o=i.stateNode.containerInfo;ul(e,ll(e),o);break;default:throw Error(n(161))}}catch(s){ju(e,e.return,s)}e.flags&=-3}4096&t&&(e.flags&=-4097)}function xl(e,t,n){Js=e,bl(e)}function bl(e,t,n){for(var r=!!(1&e.mode);null!==Js;){var i=Js,a=i.child;if(22===i.tag&&r){var o=null!==i.memoizedState||Ks;if(!o){var s=i.alternate,l=null!==s&&null!==s.memoizedState||Qs;s=Ks;var u=Qs;if(Ks=o,(Qs=l)&&!u)for(Js=i;null!==Js;)l=(o=Js).child,22===o.tag&&null!==o.memoizedState?_l(i):null!==l?(l.return=o,Js=l):_l(i);for(;null!==a;)Js=a,bl(a),a=a.sibling;Js=i,Ks=s,Qs=u}wl(e)}else 8772&i.subtreeFlags&&null!==a?(a.return=i,Js=a):wl(e)}}function wl(e){for(;null!==Js;){var t=Js;if(8772&t.flags){var r=t.alternate;try{if(8772&t.flags)switch(t.tag){case 0:case 11:case 15:Qs||il(5,t);break;case 1:var i=t.stateNode;if(4&t.flags&&!Qs)if(null===r)i.componentDidMount();else{var a=t.elementType===t.type?r.memoizedProps:rs(t.type,r.memoizedProps);i.componentDidUpdate(a,r.memoizedState,i.__reactInternalSnapshotBeforeUpdate)}var o=t.updateQueue;null!==o&&Wa(t,o,i);break;case 3:var s=t.updateQueue;if(null!==s){if(r=null,null!==t.child)switch(t.child.tag){case 5:case 1:r=t.child.stateNode}Wa(t,s,r)}break;case 5:var l=t.stateNode;if(null===r&&4&t.flags){r=l;var u=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":u.autoFocus&&r.focus();break;case"img":u.src&&(r.src=u.src)}}break;case 6:case 4:case 12:case 19:case 17:case 21:case 22:case 23:case 25:break;case 13:if(null===t.memoizedState){var c=t.alternate;if(null!==c){var d=c.memoizedState;if(null!==d){var h=d.dehydrated;null!==h&&Ut(h)}}}break;default:throw Error(n(163))}Qs||512&t.flags&&al(t)}catch(p){ju(t,t.return,p)}}if(t===e){Js=null;break}if(null!==(r=t.sibling)){r.return=t.return,Js=r;break}Js=t.return}}function kl(e){for(;null!==Js;){var t=Js;if(t===e){Js=null;break}var n=t.sibling;if(null!==n){n.return=t.return,Js=n;break}Js=t.return}}function _l(e){for(;null!==Js;){var t=Js;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{il(4,t)}catch(l){ju(t,n,l)}break;case 1:var r=t.stateNode;if("function"==typeof r.componentDidMount){var i=t.return;try{r.componentDidMount()}catch(l){ju(t,i,l)}}var a=t.return;try{al(t)}catch(l){ju(t,a,l)}break;case 5:var o=t.return;try{al(t)}catch(l){ju(t,o,l)}}}catch(l){ju(t,t.return,l)}if(t===e){Js=null;break}var s=t.sibling;if(null!==s){s.return=t.return,Js=s;break}Js=t.return}}var Sl,jl=Math.ceil,Tl=x.ReactCurrentDispatcher,Cl=x.ReactCurrentOwner,El=x.ReactCurrentBatchConfig,Pl=0,Ml=null,Al=null,Rl=0,zl=0,Dl=ji(0),$l=0,Ll=null,Ol=0,Il=0,Nl=0,Fl=null,Vl=null,Bl=0,Ul=1/0,Wl=null,Yl=!1,Hl=null,ql=null,Xl=!1,Gl=null,Kl=0,Ql=0,Zl=null,Jl=-1,eu=0;function tu(){return 6&Pl?Ze():-1!==Jl?Jl:Jl=Ze()}function nu(e){return 1&e.mode?2&Pl&&0!==Rl?Rl&-Rl:null!==ga.transition?(0===eu&&(eu=gt()),eu):0!==(e=bt)?e:e=void 0===(e=window.event)?16:Qt(e.type):1}function ru(e,t,r,i){if(50<Ql)throw Ql=0,Zl=null,Error(n(185));vt(e,r,i),2&Pl&&e===Ml||(e===Ml&&(!(2&Pl)&&(Il|=r),4===$l&&lu(e,Rl)),iu(e,i),1===r&&0===Pl&&!(1&t.mode)&&(Ul=Ze()+500,Fi&&Ui()))}function iu(e,t){var n=e.callbackNode;!function(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,i=e.expirationTimes,a=e.pendingLanes;0<a;){var o=31-st(a),s=1<<o,l=i[o];-1===l?0!==(s&n)&&0===(s&r)||(i[o]=ft(s,t)):l<=t&&(e.expiredLanes|=s),a&=~s}}(e,t);var r=pt(e,e===Ml?Rl:0);if(0===r)null!==n&&Ge(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(null!=n&&Ge(n),1===t)0===e.tag?function(e){Fi=!0,Bi(e)}(uu.bind(null,e)):Bi(uu.bind(null,e)),si(function(){!(6&Pl)&&Ui()}),n=null;else{switch(wt(r)){case 1:n=et;break;case 4:n=tt;break;case 16:default:n=nt;break;case 536870912:n=it}n=Mu(n,au.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function au(e,t){if(Jl=-1,eu=0,6&Pl)throw Error(n(327));var r=e.callbackNode;if(_u()&&e.callbackNode!==r)return null;var i=pt(e,e===Ml?Rl:0);if(0===i)return null;if(30&i||0!==(i&e.expiredLanes)||t)t=yu(e,i);else{t=i;var a=Pl;Pl|=2;var o=mu();for(Ml===e&&Rl===t||(Wl=null,Ul=Ze()+500,pu(e,t));;)try{xu();break}catch(l){fu(e,l)}Ca(),Tl.current=o,Pl=a,null!==Al?t=0:(Ml=null,Rl=0,t=$l)}if(0!==t){if(2===t&&(0!==(a=mt(e))&&(i=a,t=ou(e,a))),1===t)throw r=Ll,pu(e,0),lu(e,i),iu(e,Ze()),r;if(6===t)lu(e,i);else{if(a=e.current.alternate,!(30&i||function(e){for(var t=e;;){if(16384&t.flags){var n=t.updateQueue;if(null!==n&&null!==(n=n.stores))for(var r=0;r<n.length;r++){var i=n[r],a=i.getSnapshot;i=i.value;try{if(!lr(a(),i))return!1}catch(s){return!1}}}if(n=t.child,16384&t.subtreeFlags&&null!==n)n.return=t,t=n;else{if(t===e)break;for(;null===t.sibling;){if(null===t.return||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}(a)||(t=yu(e,i),2===t&&(o=mt(e),0!==o&&(i=o,t=ou(e,o))),1!==t)))throw r=Ll,pu(e,0),lu(e,i),iu(e,Ze()),r;switch(e.finishedWork=a,e.finishedLanes=i,t){case 0:case 1:throw Error(n(345));case 2:case 5:ku(e,Vl,Wl);break;case 3:if(lu(e,i),(130023424&i)===i&&10<(t=Bl+500-Ze())){if(0!==pt(e,0))break;if(((a=e.suspendedLanes)&i)!==i){tu(),e.pingedLanes|=e.suspendedLanes&a;break}e.timeoutHandle=ii(ku.bind(null,e,Vl,Wl),t);break}ku(e,Vl,Wl);break;case 4:if(lu(e,i),(4194240&i)===i)break;for(t=e.eventTimes,a=-1;0<i;){var s=31-st(i);o=1<<s,(s=t[s])>a&&(a=s),i&=~o}if(i=a,10<(i=(120>(i=Ze()-i)?120:480>i?480:1080>i?1080:1920>i?1920:3e3>i?3e3:4320>i?4320:1960*jl(i/1960))-i)){e.timeoutHandle=ii(ku.bind(null,e,Vl,Wl),i);break}ku(e,Vl,Wl);break;default:throw Error(n(329))}}}return iu(e,Ze()),e.callbackNode===r?au.bind(null,e):null}function ou(e,t){var n=Fl;return e.current.memoizedState.isDehydrated&&(pu(e,t).flags|=256),2!==(e=yu(e,t))&&(t=Vl,Vl=n,null!==t&&su(t)),e}function su(e){null===Vl?Vl=e:Vl.push.apply(Vl,e)}function lu(e,t){for(t&=~Nl,t&=~Il,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-st(t),r=1<<n;e[n]=-1,t&=~r}}function uu(e){if(6&Pl)throw Error(n(327));_u();var t=pt(e,0);if(!(1&t))return iu(e,Ze()),null;var r=yu(e,t);if(0!==e.tag&&2===r){var i=mt(e);0!==i&&(t=i,r=ou(e,i))}if(1===r)throw r=Ll,pu(e,0),lu(e,t),iu(e,Ze()),r;if(6===r)throw Error(n(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,ku(e,Vl,Wl),iu(e,Ze()),null}function cu(e,t){var n=Pl;Pl|=1;try{return e(t)}finally{0===(Pl=n)&&(Ul=Ze()+500,Fi&&Ui())}}function du(e){null!==Gl&&0===Gl.tag&&!(6&Pl)&&_u();var t=Pl;Pl|=1;var n=El.transition,r=bt;try{if(El.transition=null,bt=1,e)return e()}finally{bt=r,El.transition=n,!(6&(Pl=t))&&Ui()}}function hu(){zl=Dl.current,Ti(Dl)}function pu(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(-1!==n&&(e.timeoutHandle=-1,ai(n)),null!==Al)for(n=Al.return;null!==n;){var r=n;switch(na(r),r.tag){case 1:null!=(r=r.type.childContextTypes)&&Di();break;case 3:Qa(),Ti(Mi),Ti(Pi),ro();break;case 5:Ja(r);break;case 4:Qa();break;case 13:case 19:Ti(eo);break;case 10:Ea(r.type._context);break;case 22:case 23:hu()}n=n.return}if(Ml=e,Al=e=Du(e.current,null),Rl=zl=t,$l=0,Ll=null,Nl=Il=Ol=0,Vl=Fl=null,null!==Ra){for(t=0;t<Ra.length;t++)if(null!==(r=(n=Ra[t]).interleaved)){n.interleaved=null;var i=r.next,a=n.pending;if(null!==a){var o=a.next;a.next=i,r.next=o}n.pending=r}Ra=null}return e}function fu(e,t){for(;;){var r=Al;try{if(Ca(),io.current=Jo,co){for(var i=so.memoizedState;null!==i;){var a=i.queue;null!==a&&(a.pending=null),i=i.next}co=!1}if(oo=0,uo=lo=so=null,ho=!1,po=0,Cl.current=null,null===r||null===r.return){$l=1,Ll=t,Al=null;break}e:{var o=e,s=r.return,l=r,u=t;if(t=Rl,l.flags|=32768,null!==u&&"object"==typeof u&&"function"==typeof u.then){var c=u,d=l,h=d.tag;if(!(1&d.mode||0!==h&&11!==h&&15!==h)){var p=d.alternate;p?(d.updateQueue=p.updateQueue,d.memoizedState=p.memoizedState,d.lanes=p.lanes):(d.updateQueue=null,d.memoizedState=null)}var f=ys(s);if(null!==f){f.flags&=-257,vs(f,s,l,0,t),1&f.mode&&gs(o,c,t),u=c;var m=(t=f).updateQueue;if(null===m){var g=new Set;g.add(u),t.updateQueue=g}else m.add(u);break e}if(!(1&t)){gs(o,c,t),gu();break e}u=Error(n(426))}else if(aa&&1&l.mode){var y=ys(s);if(null!==y){!(65536&y.flags)&&(y.flags|=256),vs(y,s,l,0,t),ma(cs(u,l));break e}}o=u=cs(u,l),4!==$l&&($l=2),null===Fl?Fl=[o]:Fl.push(o),o=s;do{switch(o.tag){case 3:o.flags|=65536,t&=-t,o.lanes|=t,Ba(o,fs(0,u,t));break e;case 1:l=u;var v=o.type,x=o.stateNode;if(!(128&o.flags||"function"!=typeof v.getDerivedStateFromError&&(null===x||"function"!=typeof x.componentDidCatch||null!==ql&&ql.has(x)))){o.flags|=65536,t&=-t,o.lanes|=t,Ba(o,ms(o,l,t));break e}}o=o.return}while(null!==o)}wu(r)}catch(b){t=b,Al===r&&null!==r&&(Al=r=r.return);continue}break}}function mu(){var e=Tl.current;return Tl.current=Jo,null===e?Jo:e}function gu(){0!==$l&&3!==$l&&2!==$l||($l=4),null===Ml||!(268435455&Ol)&&!(268435455&Il)||lu(Ml,Rl)}function yu(e,t){var r=Pl;Pl|=2;var i=mu();for(Ml===e&&Rl===t||(Wl=null,pu(e,t));;)try{vu();break}catch(a){fu(e,a)}if(Ca(),Pl=r,Tl.current=i,null!==Al)throw Error(n(261));return Ml=null,Rl=0,$l}function vu(){for(;null!==Al;)bu(Al)}function xu(){for(;null!==Al&&!Ke();)bu(Al)}function bu(e){var t=Sl(e.alternate,e,zl);e.memoizedProps=e.pendingProps,null===t?wu(e):Al=t,Cl.current=null}function wu(e){var t=e;do{var n=t.alternate;if(e=t.return,32768&t.flags){if(null!==(n=Gs(n,t)))return n.flags&=32767,void(Al=n);if(null===e)return $l=6,void(Al=null);e.flags|=32768,e.subtreeFlags=0,e.deletions=null}else if(null!==(n=Xs(n,t,zl)))return void(Al=n);if(null!==(t=t.sibling))return void(Al=t);Al=t=e}while(null!==t);0===$l&&($l=5)}function ku(e,t,r){var i=bt,a=El.transition;try{El.transition=null,bt=1,function(e,t,r,i){do{_u()}while(null!==Gl);if(6&Pl)throw Error(n(327));r=e.finishedWork;var a=e.finishedLanes;if(null===r)return null;if(e.finishedWork=null,e.finishedLanes=0,r===e.current)throw Error(n(177));e.callbackNode=null,e.callbackPriority=0;var o=r.lanes|r.childLanes;if(function(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var i=31-st(n),a=1<<i;t[i]=0,r[i]=-1,e[i]=-1,n&=~a}}(e,o),e===Ml&&(Al=Ml=null,Rl=0),!(2064&r.subtreeFlags)&&!(2064&r.flags)||Xl||(Xl=!0,Mu(nt,function(){return _u(),null})),o=!!(15990&r.flags),!!(15990&r.subtreeFlags)||o){o=El.transition,El.transition=null;var s=bt;bt=1;var l=Pl;Pl|=4,Cl.current=null,function(e,t){if(ti=Yt,fr(e=pr())){if("selectionStart"in e)var r={start:e.selectionStart,end:e.selectionEnd};else e:{var i=(r=(r=e.ownerDocument)&&r.defaultView||window).getSelection&&r.getSelection();if(i&&0!==i.rangeCount){r=i.anchorNode;var a=i.anchorOffset,o=i.focusNode;i=i.focusOffset;try{r.nodeType,o.nodeType}catch(w){r=null;break e}var s=0,l=-1,u=-1,c=0,d=0,h=e,p=null;t:for(;;){for(var f;h!==r||0!==a&&3!==h.nodeType||(l=s+a),h!==o||0!==i&&3!==h.nodeType||(u=s+i),3===h.nodeType&&(s+=h.nodeValue.length),null!==(f=h.firstChild);)p=h,h=f;for(;;){if(h===e)break t;if(p===r&&++c===a&&(l=s),p===o&&++d===i&&(u=s),null!==(f=h.nextSibling))break;p=(h=p).parentNode}h=f}r=-1===l||-1===u?null:{start:l,end:u}}else r=null}r=r||{start:0,end:0}}else r=null;for(ni={focusedElem:e,selectionRange:r},Yt=!1,Js=t;null!==Js;)if(e=(t=Js).child,1028&t.subtreeFlags&&null!==e)e.return=t,Js=e;else for(;null!==Js;){t=Js;try{var m=t.alternate;if(1024&t.flags)switch(t.tag){case 0:case 11:case 15:case 5:case 6:case 4:case 17:break;case 1:if(null!==m){var g=m.memoizedProps,y=m.memoizedState,v=t.stateNode,x=v.getSnapshotBeforeUpdate(t.elementType===t.type?g:rs(t.type,g),y);v.__reactInternalSnapshotBeforeUpdate=x}break;case 3:var b=t.stateNode.containerInfo;1===b.nodeType?b.textContent="":9===b.nodeType&&b.documentElement&&b.removeChild(b.documentElement);break;default:throw Error(n(163))}}catch(w){ju(t,t.return,w)}if(null!==(e=t.sibling)){e.return=t.return,Js=e;break}Js=t.return}m=nl,nl=!1}(e,r),yl(r,e),mr(ni),Yt=!!ti,ni=ti=null,e.current=r,xl(r),Qe(),Pl=l,bt=s,El.transition=o}else e.current=r;if(Xl&&(Xl=!1,Gl=e,Kl=a),o=e.pendingLanes,0===o&&(ql=null),function(e){if(ot&&"function"==typeof ot.onCommitFiberRoot)try{ot.onCommitFiberRoot(at,e,void 0,!(128&~e.current.flags))}catch(t){}}(r.stateNode),iu(e,Ze()),null!==t)for(i=e.onRecoverableError,r=0;r<t.length;r++)a=t[r],i(a.value,{componentStack:a.stack,digest:a.digest});if(Yl)throw Yl=!1,e=Hl,Hl=null,e;!!(1&Kl)&&0!==e.tag&&_u(),o=e.pendingLanes,1&o?e===Zl?Ql++:(Ql=0,Zl=e):Ql=0,Ui()}(e,t,r,i)}finally{El.transition=a,bt=i}return null}function _u(){if(null!==Gl){var e=wt(Kl),t=El.transition,r=bt;try{if(El.transition=null,bt=16>e?16:e,null===Gl)var i=!1;else{if(e=Gl,Gl=null,Kl=0,6&Pl)throw Error(n(331));var a=Pl;for(Pl|=4,Js=e.current;null!==Js;){var o=Js,s=o.child;if(16&Js.flags){var l=o.deletions;if(null!==l){for(var u=0;u<l.length;u++){var c=l[u];for(Js=c;null!==Js;){var d=Js;switch(d.tag){case 0:case 11:case 15:rl(8,d,o)}var h=d.child;if(null!==h)h.return=d,Js=h;else for(;null!==Js;){var p=(d=Js).sibling,f=d.return;if(ol(d),d===c){Js=null;break}if(null!==p){p.return=f,Js=p;break}Js=f}}}var m=o.alternate;if(null!==m){var g=m.child;if(null!==g){m.child=null;do{var y=g.sibling;g.sibling=null,g=y}while(null!==g)}}Js=o}}if(2064&o.subtreeFlags&&null!==s)s.return=o,Js=s;else e:for(;null!==Js;){if(2048&(o=Js).flags)switch(o.tag){case 0:case 11:case 15:rl(9,o,o.return)}var v=o.sibling;if(null!==v){v.return=o.return,Js=v;break e}Js=o.return}}var x=e.current;for(Js=x;null!==Js;){var b=(s=Js).child;if(2064&s.subtreeFlags&&null!==b)b.return=s,Js=b;else e:for(s=x;null!==Js;){if(2048&(l=Js).flags)try{switch(l.tag){case 0:case 11:case 15:il(9,l)}}catch(k){ju(l,l.return,k)}if(l===s){Js=null;break e}var w=l.sibling;if(null!==w){w.return=l.return,Js=w;break e}Js=l.return}}if(Pl=a,Ui(),ot&&"function"==typeof ot.onPostCommitFiberRoot)try{ot.onPostCommitFiberRoot(at,e)}catch(k){}i=!0}return i}finally{bt=r,El.transition=t}}return!1}function Su(e,t,n){e=Fa(e,t=fs(0,t=cs(n,t),1),1),t=tu(),null!==e&&(vt(e,1,t),iu(e,t))}function ju(e,t,n){if(3===e.tag)Su(e,e,n);else for(;null!==t;){if(3===t.tag){Su(t,e,n);break}if(1===t.tag){var r=t.stateNode;if("function"==typeof t.type.getDerivedStateFromError||"function"==typeof r.componentDidCatch&&(null===ql||!ql.has(r))){t=Fa(t,e=ms(t,e=cs(n,e),1),1),e=tu(),null!==t&&(vt(t,1,e),iu(t,e));break}}t=t.return}}function Tu(e,t,n){var r=e.pingCache;null!==r&&r.delete(t),t=tu(),e.pingedLanes|=e.suspendedLanes&n,Ml===e&&(Rl&n)===n&&(4===$l||3===$l&&(130023424&Rl)===Rl&&500>Ze()-Bl?pu(e,0):Nl|=n),iu(e,t)}function Cu(e,t){0===t&&(1&e.mode?(t=dt,!(130023424&(dt<<=1))&&(dt=4194304)):t=1);var n=tu();null!==(e=$a(e,t))&&(vt(e,t,n),iu(e,n))}function Eu(e){var t=e.memoizedState,n=0;null!==t&&(n=t.retryLane),Cu(e,n)}function Pu(e,t){var r=0;switch(e.tag){case 13:var i=e.stateNode,a=e.memoizedState;null!==a&&(r=a.retryLane);break;case 19:i=e.stateNode;break;default:throw Error(n(314))}null!==i&&i.delete(t),Cu(e,r)}function Mu(e,t){return Xe(e,t)}function Au(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Ru(e,t,n,r){return new Au(e,t,n,r)}function zu(e){return!(!(e=e.prototype)||!e.isReactComponent)}function Du(e,t){var n=e.alternate;return null===n?((n=Ru(e.tag,t,e.key,e.mode)).elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=14680064&e.flags,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=null===t?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function $u(e,t,r,i,a,o){var s=2;if(i=e,"function"==typeof e)zu(e)&&(s=1);else if("string"==typeof e)s=5;else e:switch(e){case _:return Lu(r.children,a,o,t);case j:s=8,a|=8;break;case T:return(e=Ru(12,r,t,2|a)).elementType=T,e.lanes=o,e;case M:return(e=Ru(13,r,t,a)).elementType=M,e.lanes=o,e;case A:return(e=Ru(19,r,t,a)).elementType=A,e.lanes=o,e;case D:return Ou(r,a,o,t);default:if("object"==typeof e&&null!==e)switch(e.$$typeof){case C:s=10;break e;case E:s=9;break e;case P:s=11;break e;case R:s=14;break e;case z:s=16,i=null;break e}throw Error(n(130,null==e?e:typeof e,""))}return(t=Ru(s,r,t,a)).elementType=e,t.type=i,t.lanes=o,t}function Lu(e,t,n,r){return(e=Ru(7,e,r,t)).lanes=n,e}function Ou(e,t,n,r){return(e=Ru(22,e,r,t)).elementType=D,e.lanes=n,e.stateNode={isHidden:!1},e}function Iu(e,t,n){return(e=Ru(6,e,null,t)).lanes=n,e}function Nu(e,t,n){return(t=Ru(4,null!==e.children?e.children:[],e.key,t)).lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function Fu(e,t,n,r,i){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=yt(0),this.expirationTimes=yt(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=yt(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function Vu(e,t,n,r,i,a,o,s,l){return e=new Fu(e,t,n,s,l),1===t?(t=1,!0===a&&(t|=8)):t=0,a=Ru(3,null,null,t),e.current=a,a.stateNode=e,a.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Oa(a),e}function Bu(e){if(!e)return Ei;e:{if(Ue(e=e._reactInternals)!==e||1!==e.tag)throw Error(n(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(zi(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(null!==t);throw Error(n(171))}if(1===e.tag){var r=e.type;if(zi(r))return Li(e,r,t)}return t}function Uu(e,t,n,r,i,a,o,s,l){return(e=Vu(n,r,!0,e,0,a,0,s,l)).context=Bu(null),n=e.current,(a=Na(r=tu(),i=nu(n))).callback=null!=t?t:null,Fa(n,a,i),e.current.lanes=i,vt(e,i,r),iu(e,r),e}function Wu(e,t,n,r){var i=t.current,a=tu(),o=nu(i);return n=Bu(n),null===t.context?t.context=n:t.pendingContext=n,(t=Na(a,o)).payload={element:e},null!==(r=void 0===r?null:r)&&(t.callback=r),null!==(e=Fa(i,t,o))&&(ru(e,i,o,a),Va(e,i,o)),o}function Yu(e){return(e=e.current).child?(e.child.tag,e.child.stateNode):null}function Hu(e,t){if(null!==(e=e.memoizedState)&&null!==e.dehydrated){var n=e.retryLane;e.retryLane=0!==n&&n<t?n:t}}function qu(e,t){Hu(e,t),(e=e.alternate)&&Hu(e,t)}Sl=function(e,t,r){if(null!==e)if(e.memoizedProps!==t.pendingProps||Mi.current)bs=!0;else{if(0===(e.lanes&r)&&!(128&t.flags))return bs=!1,function(e,t,n){switch(t.tag){case 3:Ms(t),fa();break;case 5:Za(t);break;case 1:zi(t.type)&&Oi(t);break;case 4:Ka(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,i=t.memoizedProps.value;Ci(_a,r._currentValue),r._currentValue=i;break;case 13:if(null!==(r=t.memoizedState))return null!==r.dehydrated?(Ci(eo,1&eo.current),t.flags|=128,null):0!==(n&t.child.childLanes)?Is(e,t,n):(Ci(eo,1&eo.current),null!==(e=Ys(e,t,n))?e.sibling:null);Ci(eo,1&eo.current);break;case 19:if(r=0!==(n&t.childLanes),128&e.flags){if(r)return Us(e,t,n);t.flags|=128}if(null!==(i=t.memoizedState)&&(i.rendering=null,i.tail=null,i.lastEffect=null),Ci(eo,eo.current),r)break;return null;case 22:case 23:return t.lanes=0,js(e,t,n)}return Ys(e,t,n)}(e,t,r);bs=!!(131072&e.flags)}else bs=!1,aa&&1048576&t.flags&&ea(t,qi,t.index);switch(t.lanes=0,t.tag){case 2:var i=t.type;Ws(e,t),e=t.pendingProps;var a=Ri(t,Pi.current);Ma(t,r),a=yo(null,t,i,e,a,r);var o=vo();return t.flags|=1,"object"==typeof a&&null!==a&&"function"==typeof a.render&&void 0===a.$$typeof?(t.tag=1,t.memoizedState=null,t.updateQueue=null,zi(i)?(o=!0,Oi(t)):o=!1,t.memoizedState=null!==a.state&&void 0!==a.state?a.state:null,Oa(t),a.updater=as,t.stateNode=a,a._reactInternals=t,us(t,i,e,r),t=Ps(null,t,i,!0,o,r)):(t.tag=0,aa&&o&&ta(t),ws(null,t,a,r),t=t.child),t;case 16:i=t.elementType;e:{switch(Ws(e,t),e=t.pendingProps,i=(a=i._init)(i._payload),t.type=i,a=t.tag=function(e){if("function"==typeof e)return zu(e)?1:0;if(null!=e){if((e=e.$$typeof)===P)return 11;if(e===R)return 14}return 2}(i),e=rs(i,e),a){case 0:t=Cs(null,t,i,e,r);break e;case 1:t=Es(null,t,i,e,r);break e;case 11:t=ks(null,t,i,e,r);break e;case 14:t=_s(null,t,i,rs(i.type,e),r);break e}throw Error(n(306,i,""))}return t;case 0:return i=t.type,a=t.pendingProps,Cs(e,t,i,a=t.elementType===i?a:rs(i,a),r);case 1:return i=t.type,a=t.pendingProps,Es(e,t,i,a=t.elementType===i?a:rs(i,a),r);case 3:e:{if(Ms(t),null===e)throw Error(n(387));i=t.pendingProps,a=(o=t.memoizedState).element,Ia(e,t),Ua(t,i,null,r);var s=t.memoizedState;if(i=s.element,o.isDehydrated){if(o={element:i,isDehydrated:!1,cache:s.cache,pendingSuspenseBoundaries:s.pendingSuspenseBoundaries,transitions:s.transitions},t.updateQueue.baseState=o,t.memoizedState=o,256&t.flags){t=As(e,t,i,r,a=cs(Error(n(423)),t));break e}if(i!==a){t=As(e,t,i,r,a=cs(Error(n(424)),t));break e}for(ia=ci(t.stateNode.containerInfo.firstChild),ra=t,aa=!0,oa=null,r=ka(t,null,i,r),t.child=r;r;)r.flags=-3&r.flags|4096,r=r.sibling}else{if(fa(),i===a){t=Ys(e,t,r);break e}ws(e,t,i,r)}t=t.child}return t;case 5:return Za(t),null===e&&ca(t),i=t.type,a=t.pendingProps,o=null!==e?e.memoizedProps:null,s=a.children,ri(i,a)?s=null:null!==o&&ri(i,o)&&(t.flags|=32),Ts(e,t),ws(e,t,s,r),t.child;case 6:return null===e&&ca(t),null;case 13:return Is(e,t,r);case 4:return Ka(t,t.stateNode.containerInfo),i=t.pendingProps,null===e?t.child=wa(t,null,i,r):ws(e,t,i,r),t.child;case 11:return i=t.type,a=t.pendingProps,ks(e,t,i,a=t.elementType===i?a:rs(i,a),r);case 7:return ws(e,t,t.pendingProps,r),t.child;case 8:case 12:return ws(e,t,t.pendingProps.children,r),t.child;case 10:e:{if(i=t.type._context,a=t.pendingProps,o=t.memoizedProps,s=a.value,Ci(_a,i._currentValue),i._currentValue=s,null!==o)if(lr(o.value,s)){if(o.children===a.children&&!Mi.current){t=Ys(e,t,r);break e}}else for(null!==(o=t.child)&&(o.return=t);null!==o;){var l=o.dependencies;if(null!==l){s=o.child;for(var u=l.firstContext;null!==u;){if(u.context===i){if(1===o.tag){(u=Na(-1,r&-r)).tag=2;var c=o.updateQueue;if(null!==c){var d=(c=c.shared).pending;null===d?u.next=u:(u.next=d.next,d.next=u),c.pending=u}}o.lanes|=r,null!==(u=o.alternate)&&(u.lanes|=r),Pa(o.return,r,t),l.lanes|=r;break}u=u.next}}else if(10===o.tag)s=o.type===t.type?null:o.child;else if(18===o.tag){if(null===(s=o.return))throw Error(n(341));s.lanes|=r,null!==(l=s.alternate)&&(l.lanes|=r),Pa(s,r,t),s=o.sibling}else s=o.child;if(null!==s)s.return=o;else for(s=o;null!==s;){if(s===t){s=null;break}if(null!==(o=s.sibling)){o.return=s.return,s=o;break}s=s.return}o=s}ws(e,t,a.children,r),t=t.child}return t;case 9:return a=t.type,i=t.pendingProps.children,Ma(t,r),i=i(a=Aa(a)),t.flags|=1,ws(e,t,i,r),t.child;case 14:return a=rs(i=t.type,t.pendingProps),_s(e,t,i,a=rs(i.type,a),r);case 15:return Ss(e,t,t.type,t.pendingProps,r);case 17:return i=t.type,a=t.pendingProps,a=t.elementType===i?a:rs(i,a),Ws(e,t),t.tag=1,zi(i)?(e=!0,Oi(t)):e=!1,Ma(t,r),ss(t,i,a),us(t,i,a,r),Ps(null,t,i,!0,e,r);case 19:return Us(e,t,r);case 22:return js(e,t,r)}throw Error(n(156,t.tag))};var Xu="function"==typeof reportError?reportError:function(e){console.error(e)};function Gu(e){this._internalRoot=e}function Ku(e){this._internalRoot=e}function Qu(e){return!(!e||1!==e.nodeType&&9!==e.nodeType&&11!==e.nodeType)}function Zu(e){return!(!e||1!==e.nodeType&&9!==e.nodeType&&11!==e.nodeType&&(8!==e.nodeType||" react-mount-point-unstable "!==e.nodeValue))}function Ju(){}function ec(e,t,n,r,i){var a=n._reactRootContainer;if(a){var o=a;if("function"==typeof i){var s=i;i=function(){var e=Yu(o);s.call(e)}}Wu(t,o,e,i)}else o=function(e,t,n,r,i){if(i){if("function"==typeof r){var a=r;r=function(){var e=Yu(o);a.call(e)}}var o=Uu(t,r,e,0,null,!1,0,"",Ju);return e._reactRootContainer=o,e[mi]=o.current,Ur(8===e.nodeType?e.parentNode:e),du(),o}for(;i=e.lastChild;)e.removeChild(i);if("function"==typeof r){var s=r;r=function(){var e=Yu(l);s.call(e)}}var l=Vu(e,0,!1,null,0,!1,0,"",Ju);return e._reactRootContainer=l,e[mi]=l.current,Ur(8===e.nodeType?e.parentNode:e),du(function(){Wu(t,l,n,r)}),l}(n,t,e,i,r);return Yu(o)}Ku.prototype.render=Gu.prototype.render=function(e){var t=this._internalRoot;if(null===t)throw Error(n(409));Wu(e,t,null,null)},Ku.prototype.unmount=Gu.prototype.unmount=function(){var e=this._internalRoot;if(null!==e){this._internalRoot=null;var t=e.containerInfo;du(function(){Wu(null,e,null,null)}),t[mi]=null}},Ku.prototype.unstable_scheduleHydration=function(e){if(e){var t=jt();e={blockedOn:null,target:e,priority:t};for(var n=0;n<Dt.length&&0!==t&&t<Dt[n].priority;n++);Dt.splice(n,0,e),0===n&&It(e)}},kt=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=ht(t.pendingLanes);0!==n&&(xt(t,1|n),iu(t,Ze()),!(6&Pl)&&(Ul=Ze()+500,Ui()))}break;case 13:du(function(){var t=$a(e,1);if(null!==t){var n=tu();ru(t,e,1,n)}}),qu(e,1)}},_t=function(e){if(13===e.tag){var t=$a(e,134217728);if(null!==t)ru(t,e,134217728,tu());qu(e,134217728)}},St=function(e){if(13===e.tag){var t=nu(e),n=$a(e,t);if(null!==n)ru(n,e,t,tu());qu(e,t)}},jt=function(){return bt},Tt=function(e,t){var n=bt;try{return bt=e,t()}finally{bt=n}},_e=function(e,t,r){switch(t){case"input":if(J(e,r),t=r.name,"radio"===r.type&&null!=t){for(r=e;r.parentNode;)r=r.parentNode;for(r=r.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<r.length;t++){var i=r[t];if(i!==e&&i.form===e.form){var a=ki(i);if(!a)throw Error(n(90));X(i),J(i,a)}}}break;case"textarea":oe(e,r);break;case"select":null!=(t=r.value)&&re(e,!!r.multiple,t,!1)}},Pe=cu,Me=du;var tc={usingClientEntryPoint:!1,Events:[bi,wi,ki,Ce,Ee,cu]},nc={findFiberByHostInstance:xi,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},rc={bundleType:nc.bundleType,version:nc.version,rendererPackageName:nc.rendererPackageName,rendererConfig:nc.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:x.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return null===(e=He(e))?null:e.stateNode},findFiberByHostInstance:nc.findFiberByHostInstance||function(){return null},findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if("undefined"!=typeof __REACT_DEVTOOLS_GLOBAL_HOOK__){var ic=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!ic.isDisabled&&ic.supportsFiber)try{at=ic.inject(rc),ot=ic}catch(de){}}return w.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=tc,w.createPortal=function(e,t){var r=2<arguments.length&&void 0!==arguments[2]?arguments[2]:null;if(!Qu(t))throw Error(n(200));return function(e,t,n){var r=3<arguments.length&&void 0!==arguments[3]?arguments[3]:null;return{$$typeof:k,key:null==r?null:""+r,children:e,containerInfo:t,implementation:n}}(e,t,null,r)},w.createRoot=function(e,t){if(!Qu(e))throw Error(n(299));var r=!1,i="",a=Xu;return null!=t&&(!0===t.unstable_strictMode&&(r=!0),void 0!==t.identifierPrefix&&(i=t.identifierPrefix),void 0!==t.onRecoverableError&&(a=t.onRecoverableError)),t=Vu(e,1,!1,null,0,r,0,i,a),e[mi]=t.current,Ur(8===e.nodeType?e.parentNode:e),new Gu(t)},w.findDOMNode=function(e){if(null==e)return null;if(1===e.nodeType)return e;var t=e._reactInternals;if(void 0===t){if("function"==typeof e.render)throw Error(n(188));throw e=Object.keys(e).join(","),Error(n(268,e))}return e=null===(e=He(t))?null:e.stateNode},w.flushSync=function(e){return du(e)},w.hydrate=function(e,t,r){if(!Zu(t))throw Error(n(200));return ec(null,e,t,!0,r)},w.hydrateRoot=function(e,t,r){if(!Qu(e))throw Error(n(405));var i=null!=r&&r.hydratedSources||null,a=!1,o="",s=Xu;if(null!=r&&(!0===r.unstable_strictMode&&(a=!0),void 0!==r.identifierPrefix&&(o=r.identifierPrefix),void 0!==r.onRecoverableError&&(s=r.onRecoverableError)),t=Uu(t,null,e,1,null!=r?r:null,a,0,o,s),e[mi]=t.current,Ur(e),i)for(e=0;e<i.length;e++)a=(a=(r=i[e])._getVersion)(r._source),null==t.mutableSourceEagerHydrationData?t.mutableSourceEagerHydrationData=[r,a]:t.mutableSourceEagerHydrationData.push(r,a);return new Ku(t)},w.render=function(e,t,r){if(!Zu(t))throw Error(n(200));return ec(null,e,t,!1,r)},w.unmountComponentAtNode=function(e){if(!Zu(e))throw Error(n(40));return!!e._reactRootContainer&&(du(function(){ec(null,null,e,!1,function(){e._reactRootContainer=null,e[mi]=null})}),!0)},w.unstable_batchedUpdates=cu,w.unstable_renderSubtreeIntoContainer=function(e,t,r,i){if(!Zu(r))throw Error(n(200));if(null==e||void 0===e._reactInternals)throw Error(n(38));return ec(e,t,r,!1,i)},w.version="18.3.1-next-f1338f8080-20240426",w}function T(){if(y)return b.exports;return y=1,function e(){if("undefined"!=typeof __REACT_DEVTOOLS_GLOBAL_HOOK__&&"function"==typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE)try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(e)}catch(t){console.error(t)}}(),b.exports=j(),b.exports}const C=e(function(){if(v)return x;v=1;var e=T();return x.createRoot=e.createRoot,x.hydrateRoot=e.hydrateRoot,x}());var E=function(){return E=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var i in t=arguments[n])Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i]);return e},E.apply(this,arguments)};function P(e,t,n){if(n||2===arguments.length)for(var r,i=0,a=t.length;i<a;i++)!r&&i in t||(r||(r=Array.prototype.slice.call(t,0,i)),r[i]=t[i]);return e.concat(r||Array.prototype.slice.call(t))}"function"==typeof SuppressedError&&SuppressedError;var M="-ms-",A="-moz-",R="-webkit-",z="comm",D="rule",$="decl",L="@keyframes",O=Math.abs,I=String.fromCharCode,N=Object.assign;function F(e){return e.trim()}function V(e,t){return(e=t.exec(e))?e[0]:e}function B(e,t,n){return e.replace(t,n)}function U(e,t,n){return e.indexOf(t,n)}function W(e,t){return 0|e.charCodeAt(t)}function Y(e,t,n){return e.slice(t,n)}function H(e){return e.length}function q(e){return e.length}function X(e,t){return t.push(e),e}function G(e,t){return e.filter(function(e){return!V(e,t)})}var K=1,Q=1,Z=0,J=0,ee=0,te="";function ne(e,t,n,r,i,a,o,s){return{value:e,root:t,parent:n,type:r,props:i,children:a,line:K,column:Q,length:o,return:"",siblings:s}}function re(e,t){return N(ne("",null,null,"",null,null,0,e.siblings),e,{length:-e.length},t)}function ie(e){for(;e.root;)e=re(e.root,{children:[e]});X(e,e.siblings)}function ae(){return ee=J>0?W(te,--J):0,Q--,10===ee&&(Q=1,K--),ee}function oe(){return ee=J<Z?W(te,J++):0,Q++,10===ee&&(Q=1,K++),ee}function se(){return W(te,J)}function le(){return J}function ue(e,t){return Y(te,e,t)}function ce(e){switch(e){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function de(e){return F(ue(J-1,fe(91===e?e+2:40===e?e+1:e)))}function he(e){for(;(ee=se())&&ee<33;)oe();return ce(e)>2||ce(ee)>3?"":" "}function pe(e,t){for(;--t&&oe()&&!(ee<48||ee>102||ee>57&&ee<65||ee>70&&ee<97););return ue(e,le()+(t<6&&32==se()&&32==oe()))}function fe(e){for(;oe();)switch(ee){case e:return J;case 34:case 39:34!==e&&39!==e&&fe(ee);break;case 40:41===e&&fe(e);break;case 92:oe()}return J}function me(e,t){for(;oe()&&e+ee!==57&&(e+ee!==84||47!==se()););return"/*"+ue(t,J-1)+"*"+I(47===e?e:oe())}function ge(e){for(;!ce(se());)oe();return ue(e,J)}function ye(e){return function(e){return te="",e}(ve("",null,null,null,[""],e=function(e){return K=Q=1,Z=H(te=e),J=0,[]}(e),0,[0],e))}function ve(e,t,n,r,i,a,o,s,l){for(var u=0,c=0,d=o,h=0,p=0,f=0,m=1,g=1,y=1,v=0,x="",b=i,w=a,k=r,_=x;g;)switch(f=v,v=oe()){case 40:if(108!=f&&58==W(_,d-1)){-1!=U(_+=B(de(v),"&","&\f"),"&\f",O(u?s[u-1]:0))&&(y=-1);break}case 34:case 39:case 91:_+=de(v);break;case 9:case 10:case 13:case 32:_+=he(f);break;case 92:_+=pe(le()-1,7);continue;case 47:switch(se()){case 42:case 47:X(be(me(oe(),le()),t,n,l),l);break;default:_+="/"}break;case 123*m:s[u++]=H(_)*y;case 125*m:case 59:case 0:switch(v){case 0:case 125:g=0;case 59+c:-1==y&&(_=B(_,/\f/g,"")),p>0&&H(_)-d&&X(p>32?we(_+";",r,n,d-1,l):we(B(_," ","")+";",r,n,d-2,l),l);break;case 59:_+=";";default:if(X(k=xe(_,t,n,u,c,i,s,x,b=[],w=[],d,a),a),123===v)if(0===c)ve(_,t,k,k,b,a,d,s,w);else switch(99===h&&110===W(_,3)?100:h){case 100:case 108:case 109:case 115:ve(e,k,k,r&&X(xe(e,k,k,0,0,i,s,x,i,b=[],d,w),w),i,w,d,s,r?b:w);break;default:ve(_,k,k,k,[""],w,0,s,w)}}u=c=p=0,m=y=1,x=_="",d=o;break;case 58:d=1+H(_),p=f;default:if(m<1)if(123==v)--m;else if(125==v&&0==m++&&125==ae())continue;switch(_+=I(v),v*m){case 38:y=c>0?1:(_+="\f",-1);break;case 44:s[u++]=(H(_)-1)*y,y=1;break;case 64:45===se()&&(_+=de(oe())),h=se(),c=d=H(x=_+=ge(le())),v++;break;case 45:45===f&&2==H(_)&&(m=0)}}return a}function xe(e,t,n,r,i,a,o,s,l,u,c,d){for(var h=i-1,p=0===i?a:[""],f=q(p),m=0,g=0,y=0;m<r;++m)for(var v=0,x=Y(e,h+1,h=O(g=o[m])),b=e;v<f;++v)(b=F(g>0?p[v]+" "+x:B(x,/&\f/g,p[v])))&&(l[y++]=b);return ne(e,t,n,0===i?D:s,l,u,c,d)}function be(e,t,n,r){return ne(e,t,n,z,I(ee),Y(e,2,-2),0,r)}function we(e,t,n,r,i){return ne(e,t,n,$,Y(e,0,r),Y(e,r+1,-1),r,i)}function ke(e,t,n){switch(function(e,t){return 45^W(e,0)?(((t<<2^W(e,0))<<2^W(e,1))<<2^W(e,2))<<2^W(e,3):0}(e,t)){case 5103:return R+"print-"+e+e;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return R+e+e;case 4789:return A+e+e;case 5349:case 4246:case 4810:case 6968:case 2756:return R+e+A+e+M+e+e;case 5936:switch(W(e,t+11)){case 114:return R+e+M+B(e,/[svh]\w+-[tblr]{2}/,"tb")+e;case 108:return R+e+M+B(e,/[svh]\w+-[tblr]{2}/,"tb-rl")+e;case 45:return R+e+M+B(e,/[svh]\w+-[tblr]{2}/,"lr")+e}case 6828:case 4268:case 2903:return R+e+M+e+e;case 6165:return R+e+M+"flex-"+e+e;case 5187:return R+e+B(e,/(\w+).+(:[^]+)/,R+"box-$1$2"+M+"flex-$1$2")+e;case 5443:return R+e+M+"flex-item-"+B(e,/flex-|-self/g,"")+(V(e,/flex-|baseline/)?"":M+"grid-row-"+B(e,/flex-|-self/g,""))+e;case 4675:return R+e+M+"flex-line-pack"+B(e,/align-content|flex-|-self/g,"")+e;case 5548:return R+e+M+B(e,"shrink","negative")+e;case 5292:return R+e+M+B(e,"basis","preferred-size")+e;case 6060:return R+"box-"+B(e,"-grow","")+R+e+M+B(e,"grow","positive")+e;case 4554:return R+B(e,/([^-])(transform)/g,"$1"+R+"$2")+e;case 6187:return B(B(B(e,/(zoom-|grab)/,R+"$1"),/(image-set)/,R+"$1"),e,"")+e;case 5495:case 3959:return B(e,/(image-set\([^]*)/,R+"$1$`$1");case 4968:return B(B(e,/(.+:)(flex-)?(.*)/,R+"box-pack:$3"+M+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+R+e+e;case 4200:if(!V(e,/flex-|baseline/))return M+"grid-column-align"+Y(e,t)+e;break;case 2592:case 3360:return M+B(e,"template-","")+e;case 4384:case 3616:return n&&n.some(function(e,n){return t=n,V(e.props,/grid-\w+-end/)})?~U(e+(n=n[t].value),"span",0)?e:M+B(e,"-start","")+e+M+"grid-row-span:"+(~U(n,"span",0)?V(n,/\d+/):+V(n,/\d+/)-+V(e,/\d+/))+";":M+B(e,"-start","")+e;case 4896:case 4128:return n&&n.some(function(e){return V(e.props,/grid-\w+-start/)})?e:M+B(B(e,"-end","-span"),"span ","")+e;case 4095:case 3583:case 4068:case 2532:return B(e,/(.+)-inline(.+)/,R+"$1$2")+e;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(H(e)-1-t>6)switch(W(e,t+1)){case 109:if(45!==W(e,t+4))break;case 102:return B(e,/(.+:)(.+)-([^]+)/,"$1"+R+"$2-$3$1"+A+(108==W(e,t+3)?"$3":"$2-$3"))+e;case 115:return~U(e,"stretch",0)?ke(B(e,"stretch","fill-available"),t,n)+e:e}break;case 5152:case 5920:return B(e,/(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/,function(t,n,r,i,a,o,s){return M+n+":"+r+s+(i?M+n+"-span:"+(a?o:+o-+r)+s:"")+e});case 4949:if(121===W(e,t+6))return B(e,":",":"+R)+e;break;case 6444:switch(W(e,45===W(e,14)?18:11)){case 120:return B(e,/(.+:)([^;\s!]+)(;|(\s+)?!.+)?/,"$1"+R+(45===W(e,14)?"inline-":"")+"box$3$1"+R+"$2$3$1"+M+"$2box$3")+e;case 100:return B(e,":",":"+M)+e}break;case 5719:case 2647:case 2135:case 3927:case 2391:return B(e,"scroll-","scroll-snap-")+e}return e}function _e(e,t){for(var n="",r=0;r<e.length;r++)n+=t(e[r],r,e,t)||"";return n}function Se(e,t,n,r){switch(e.type){case"@layer":if(e.children.length)break;case"@import":case $:return e.return=e.return||e.value;case z:return"";case L:return e.return=e.value+"{"+_e(e.children,r)+"}";case D:if(!H(e.value=e.props.join(",")))return""}return H(n=_e(e.children,r))?e.return=e.value+"{"+n+"}":""}function je(e,t,n,r){if(e.length>-1&&!e.return)switch(e.type){case $:return void(e.return=ke(e.value,e.length,n));case L:return _e([re(e,{value:B(e.value,"@","@"+R)})],r);case D:if(e.length)return function(e,t){return e.map(t).join("")}(n=e.props,function(t){switch(V(t,r=/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":ie(re(e,{props:[B(t,/:(read-\w+)/,":-moz-$1")]})),ie(re(e,{props:[t]})),N(e,{props:G(n,r)});break;case"::placeholder":ie(re(e,{props:[B(t,/:(plac\w+)/,":"+R+"input-$1")]})),ie(re(e,{props:[B(t,/:(plac\w+)/,":-moz-$1")]})),ie(re(e,{props:[B(t,/:(plac\w+)/,M+"input-$1")]})),ie(re(e,{props:[t]})),N(e,{props:G(n,r)})}return""})}}var Te={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},Ce={},Ee="undefined"!=typeof process&&void 0!==Ce&&(Ce.REACT_APP_SC_ATTR||Ce.SC_ATTR)||"data-styled",Pe="active",Me="data-styled-version",Ae="6.1.19",Re="/*!sc*/\n",ze="undefined"!=typeof window&&"undefined"!=typeof document,De=Boolean("boolean"==typeof SC_DISABLE_SPEEDY?SC_DISABLE_SPEEDY:"undefined"!=typeof process&&void 0!==Ce&&void 0!==Ce.REACT_APP_SC_DISABLE_SPEEDY&&""!==Ce.REACT_APP_SC_DISABLE_SPEEDY?"false"!==Ce.REACT_APP_SC_DISABLE_SPEEDY&&Ce.REACT_APP_SC_DISABLE_SPEEDY:"undefined"!=typeof process&&void 0!==Ce&&void 0!==Ce.SC_DISABLE_SPEEDY&&""!==Ce.SC_DISABLE_SPEEDY&&("false"!==Ce.SC_DISABLE_SPEEDY&&Ce.SC_DISABLE_SPEEDY)),$e={},Le=Object.freeze([]),Oe=Object.freeze({});function Ie(e,t,n){return void 0===n&&(n=Oe),e.theme!==n.theme&&e.theme||t||n.theme}var Ne=new Set(["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","tr","track","u","ul","use","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"]),Fe=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,Ve=/(^-|-$)/g;function Be(e){return e.replace(Fe,"-").replace(Ve,"")}var Ue=/(a)(d)/gi,We=function(e){return String.fromCharCode(e+(e>25?39:97))};function Ye(e){var t,n="";for(t=Math.abs(e);t>52;t=t/52|0)n=We(t%52)+n;return(We(t%52)+n).replace(Ue,"$1-$2")}var He,qe=function(e,t){for(var n=t.length;n;)e=33*e^t.charCodeAt(--n);return e},Xe=function(e){return qe(5381,e)};function Ge(e){return Ye(Xe(e)>>>0)}function Ke(e){return"string"==typeof e&&!0}var Qe="function"==typeof Symbol&&Symbol.for,Ze=Qe?Symbol.for("react.memo"):60115,Je=Qe?Symbol.for("react.forward_ref"):60112,et={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},tt={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},nt={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},rt=((He={})[Je]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},He[Ze]=nt,He);function it(e){return("type"in(t=e)&&t.type.$$typeof)===Ze?nt:"$$typeof"in e?rt[e.$$typeof]:et;var t}var at=Object.defineProperty,ot=Object.getOwnPropertyNames,st=Object.getOwnPropertySymbols,lt=Object.getOwnPropertyDescriptor,ut=Object.getPrototypeOf,ct=Object.prototype;function dt(e,t,n){if("string"!=typeof t){if(ct){var r=ut(t);r&&r!==ct&&dt(e,r,n)}var i=ot(t);st&&(i=i.concat(st(t)));for(var a=it(e),o=it(t),s=0;s<i.length;++s){var l=i[s];if(!(l in tt||n&&n[l]||o&&l in o||a&&l in a)){var u=lt(t,l);try{at(e,l,u)}catch(c){}}}}return e}function ht(e){return"function"==typeof e}function pt(e){return"object"==typeof e&&"styledComponentId"in e}function ft(e,t){return e&&t?"".concat(e," ").concat(t):e||t||""}function mt(e,t){if(0===e.length)return"";for(var n=e[0],r=1;r<e.length;r++)n+=e[r];return n}function gt(e){return null!==e&&"object"==typeof e&&e.constructor.name===Object.name&&!("props"in e&&e.$$typeof)}function yt(e,t,n){if(void 0===n&&(n=!1),!n&&!gt(e)&&!Array.isArray(e))return t;if(Array.isArray(t))for(var r=0;r<t.length;r++)e[r]=yt(e[r],t[r]);else if(gt(t))for(var r in t)e[r]=yt(e[r],t[r]);return e}function vt(e,t){Object.defineProperty(e,"toString",{value:t})}function xt(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];return new Error("An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#".concat(e," for more information.").concat(t.length>0?" Args: ".concat(t.join(", ")):""))}var bt=function(){function e(e){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=e}return e.prototype.indexOfGroup=function(e){for(var t=0,n=0;n<e;n++)t+=this.groupSizes[n];return t},e.prototype.insertRules=function(e,t){if(e>=this.groupSizes.length){for(var n=this.groupSizes,r=n.length,i=r;e>=i;)if((i<<=1)<0)throw xt(16,"".concat(e));this.groupSizes=new Uint32Array(i),this.groupSizes.set(n),this.length=i;for(var a=r;a<i;a++)this.groupSizes[a]=0}for(var o=this.indexOfGroup(e+1),s=(a=0,t.length);a<s;a++)this.tag.insertRule(o,t[a])&&(this.groupSizes[e]++,o++)},e.prototype.clearGroup=function(e){if(e<this.length){var t=this.groupSizes[e],n=this.indexOfGroup(e),r=n+t;this.groupSizes[e]=0;for(var i=n;i<r;i++)this.tag.deleteRule(n)}},e.prototype.getGroup=function(e){var t="";if(e>=this.length||0===this.groupSizes[e])return t;for(var n=this.groupSizes[e],r=this.indexOfGroup(e),i=r+n,a=r;a<i;a++)t+="".concat(this.tag.getRule(a)).concat(Re);return t},e}(),wt=new Map,kt=new Map,_t=1,St=function(e){if(wt.has(e))return wt.get(e);for(;kt.has(_t);)_t++;var t=_t++;return wt.set(e,t),kt.set(t,e),t},jt=function(e,t){_t=t+1,wt.set(e,t),kt.set(t,e)},Tt="style[".concat(Ee,"][").concat(Me,'="').concat(Ae,'"]'),Ct=new RegExp("^".concat(Ee,'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')),Et=function(e,t,n){for(var r,i=n.split(","),a=0,o=i.length;a<o;a++)(r=i[a])&&e.registerName(t,r)},Pt=function(e,t){for(var n,r=(null!==(n=t.textContent)&&void 0!==n?n:"").split(Re),i=[],a=0,o=r.length;a<o;a++){var s=r[a].trim();if(s){var l=s.match(Ct);if(l){var u=0|parseInt(l[1],10),c=l[2];0!==u&&(jt(c,u),Et(e,c,l[3]),e.getTag().insertRules(u,i)),i.length=0}else i.push(s)}}},Mt=function(e){for(var t=document.querySelectorAll(Tt),n=0,r=t.length;n<r;n++){var i=t[n];i&&i.getAttribute(Ee)!==Pe&&(Pt(e,i),i.parentNode&&i.parentNode.removeChild(i))}};var At=function(e){var t,n,r=document.head,i=e||r,a=document.createElement("style"),o=(t=i,(n=Array.from(t.querySelectorAll("style[".concat(Ee,"]"))))[n.length-1]),s=void 0!==o?o.nextSibling:null;a.setAttribute(Ee,Pe),a.setAttribute(Me,Ae);var l="undefined"!=typeof __webpack_nonce__?__webpack_nonce__:null;return l&&a.setAttribute("nonce",l),i.insertBefore(a,s),a},Rt=function(){function e(e){this.element=At(e),this.element.appendChild(document.createTextNode("")),this.sheet=function(e){if(e.sheet)return e.sheet;for(var t=document.styleSheets,n=0,r=t.length;n<r;n++){var i=t[n];if(i.ownerNode===e)return i}throw xt(17)}(this.element),this.length=0}return e.prototype.insertRule=function(e,t){try{return this.sheet.insertRule(t,e),this.length++,!0}catch(n){return!1}},e.prototype.deleteRule=function(e){this.sheet.deleteRule(e),this.length--},e.prototype.getRule=function(e){var t=this.sheet.cssRules[e];return t&&t.cssText?t.cssText:""},e}(),zt=function(){function e(e){this.element=At(e),this.nodes=this.element.childNodes,this.length=0}return e.prototype.insertRule=function(e,t){if(e<=this.length&&e>=0){var n=document.createTextNode(t);return this.element.insertBefore(n,this.nodes[e]||null),this.length++,!0}return!1},e.prototype.deleteRule=function(e){this.element.removeChild(this.nodes[e]),this.length--},e.prototype.getRule=function(e){return e<this.length?this.nodes[e].textContent:""},e}(),Dt=function(){function e(e){this.rules=[],this.length=0}return e.prototype.insertRule=function(e,t){return e<=this.length&&(this.rules.splice(e,0,t),this.length++,!0)},e.prototype.deleteRule=function(e){this.rules.splice(e,1),this.length--},e.prototype.getRule=function(e){return e<this.length?this.rules[e]:""},e}(),$t=ze,Lt={isServer:!ze,useCSSOMInjection:!De},Ot=function(){function e(e,t,n){void 0===e&&(e=Oe),void 0===t&&(t={});var r=this;this.options=E(E({},Lt),e),this.gs=t,this.names=new Map(n),this.server=!!e.isServer,!this.server&&ze&&$t&&($t=!1,Mt(this)),vt(this,function(){return function(e){for(var t=e.getTag(),n=t.length,r="",i=function(n){var i,a=(i=n,kt.get(i));if(void 0===a)return"continue";var o=e.names.get(a),s=t.getGroup(n);if(void 0===o||!o.size||0===s.length)return"continue";var l="".concat(Ee,".g").concat(n,'[id="').concat(a,'"]'),u="";void 0!==o&&o.forEach(function(e){e.length>0&&(u+="".concat(e,","))}),r+="".concat(s).concat(l,'{content:"').concat(u,'"}').concat(Re)},a=0;a<n;a++)i(a);return r}(r)})}return e.registerId=function(e){return St(e)},e.prototype.rehydrate=function(){!this.server&&ze&&Mt(this)},e.prototype.reconstructWithOptions=function(t,n){return void 0===n&&(n=!0),new e(E(E({},this.options),t),this.gs,n&&this.names||void 0)},e.prototype.allocateGSInstance=function(e){return this.gs[e]=(this.gs[e]||0)+1},e.prototype.getTag=function(){return this.tag||(this.tag=(e=this.options,t=e.useCSSOMInjection,n=e.target,r=e.isServer?new Dt(n):t?new Rt(n):new zt(n),new bt(r)));var e,t,n,r},e.prototype.hasNameForId=function(e,t){return this.names.has(e)&&this.names.get(e).has(t)},e.prototype.registerName=function(e,t){if(St(e),this.names.has(e))this.names.get(e).add(t);else{var n=new Set;n.add(t),this.names.set(e,n)}},e.prototype.insertRules=function(e,t,n){this.registerName(e,t),this.getTag().insertRules(St(e),n)},e.prototype.clearNames=function(e){this.names.has(e)&&this.names.get(e).clear()},e.prototype.clearRules=function(e){this.getTag().clearGroup(St(e)),this.clearNames(e)},e.prototype.clearTag=function(){this.tag=void 0},e}(),It=/&/g,Nt=/^\s*\/\/.*$/gm;function Ft(e,t){return e.map(function(e){return"rule"===e.type&&(e.value="".concat(t," ").concat(e.value),e.value=e.value.replaceAll(",",",".concat(t," ")),e.props=e.props.map(function(e){return"".concat(t," ").concat(e)})),Array.isArray(e.children)&&"@keyframes"!==e.type&&(e.children=Ft(e.children,t)),e})}var Vt=new Ot,Bt=function(){var e,t,n,r=Oe,i=r.options,a=void 0===i?Oe:i,o=r.plugins,s=void 0===o?Le:o,l=function(n,r,i){return i.startsWith(t)&&i.endsWith(t)&&i.replaceAll(t,"").length>0?".".concat(e):n},u=s.slice();u.push(function(e){e.type===D&&e.value.includes("&")&&(e.props[0]=e.props[0].replace(It,t).replace(n,l))}),a.prefix&&u.push(je),u.push(Se);var c=function(r,i,o,s){void 0===i&&(i=""),void 0===o&&(o=""),void 0===s&&(s="&"),e=s,t=i,n=new RegExp("\\".concat(t,"\\b"),"g");var l=r.replace(Nt,""),c=ye(o||i?"".concat(o," ").concat(i," { ").concat(l," }"):l);a.namespace&&(c=Ft(c,a.namespace));var d,h,p,f=[];return _e(c,(d=u.concat((p=function(e){return f.push(e)},function(e){e.root||(e=e.return)&&p(e)})),h=q(d),function(e,t,n,r){for(var i="",a=0;a<h;a++)i+=d[a](e,t,n,r)||"";return i})),f};return c.hash=s.length?s.reduce(function(e,t){return t.name||xt(15),qe(e,t.name)},5381).toString():"",c}(),Ut=p.createContext({shouldForwardProp:void 0,styleSheet:Vt,stylis:Bt});function Wt(){return h.useContext(Ut)}Ut.Consumer,p.createContext(void 0);var Yt=function(){function e(e,t){var n=this;this.inject=function(e,t){void 0===t&&(t=Bt);var r=n.name+t.hash;e.hasNameForId(n.id,r)||e.insertRules(n.id,r,t(n.rules,r,"@keyframes"))},this.name=e,this.id="sc-keyframes-".concat(e),this.rules=t,vt(this,function(){throw xt(12,String(n.name))})}return e.prototype.getName=function(e){return void 0===e&&(e=Bt),this.name+e.hash},e}(),Ht=function(e){return e>="A"&&e<="Z"};function qt(e){for(var t="",n=0;n<e.length;n++){var r=e[n];if(1===n&&"-"===r&&"-"===e[0])return e;Ht(r)?t+="-"+r.toLowerCase():t+=r}return t.startsWith("ms-")?"-"+t:t}var Xt=function(e){return null==e||!1===e||""===e},Gt=function(e){var t,n,r=[];for(var i in e){var a=e[i];e.hasOwnProperty(i)&&!Xt(a)&&(Array.isArray(a)&&a.isCss||ht(a)?r.push("".concat(qt(i),":"),a,";"):gt(a)?r.push.apply(r,P(P(["".concat(i," {")],Gt(a),!1),["}"],!1)):r.push("".concat(qt(i),": ").concat((t=i,null==(n=a)||"boolean"==typeof n||""===n?"":"number"!=typeof n||0===n||t in Te||t.startsWith("--")?String(n).trim():"".concat(n,"px")),";")))}return r};function Kt(e,t,n,r){return Xt(e)?[]:pt(e)?[".".concat(e.styledComponentId)]:ht(e)?!ht(i=e)||i.prototype&&i.prototype.isReactComponent||!t?[e]:Kt(e(t),t,n,r):e instanceof Yt?n?(e.inject(n,r),[e.getName(r)]):[e]:gt(e)?Gt(e):Array.isArray(e)?Array.prototype.concat.apply(Le,e.map(function(e){return Kt(e,t,n,r)})):[e.toString()];var i}function Qt(e){for(var t=0;t<e.length;t+=1){var n=e[t];if(ht(n)&&!pt(n))return!1}return!0}var Zt=Xe(Ae),Jt=function(){function e(e,t,n){this.rules=e,this.staticRulesId="",this.isStatic=(void 0===n||n.isStatic)&&Qt(e),this.componentId=t,this.baseHash=qe(Zt,t),this.baseStyle=n,Ot.registerId(t)}return e.prototype.generateAndInjectStyles=function(e,t,n){var r=this.baseStyle?this.baseStyle.generateAndInjectStyles(e,t,n):"";if(this.isStatic&&!n.hash)if(this.staticRulesId&&t.hasNameForId(this.componentId,this.staticRulesId))r=ft(r,this.staticRulesId);else{var i=mt(Kt(this.rules,e,t,n)),a=Ye(qe(this.baseHash,i)>>>0);if(!t.hasNameForId(this.componentId,a)){var o=n(i,".".concat(a),void 0,this.componentId);t.insertRules(this.componentId,a,o)}r=ft(r,a),this.staticRulesId=a}else{for(var s=qe(this.baseHash,n.hash),l="",u=0;u<this.rules.length;u++){var c=this.rules[u];if("string"==typeof c)l+=c;else if(c){var d=mt(Kt(c,e,t,n));s=qe(s,d+u),l+=d}}if(l){var h=Ye(s>>>0);t.hasNameForId(this.componentId,h)||t.insertRules(this.componentId,h,n(l,".".concat(h),void 0,this.componentId)),r=ft(r,h)}}return r},e}(),en=p.createContext(void 0);function tn(e){var t=p.useContext(en),n=h.useMemo(function(){return function(e,t){if(!e)throw xt(14);if(ht(e))return e(t);if(Array.isArray(e)||"object"!=typeof e)throw xt(8);return t?E(E({},t),e):e}(e.theme,t)},[e.theme,t]);return e.children?p.createElement(en.Provider,{value:n},e.children):null}en.Consumer;var nn={};function rn(e,t,n){var r,i=pt(e),a=e,o=!Ke(e),s=t.attrs,l=void 0===s?Le:s,u=t.componentId,c=void 0===u?function(e,t){var n="string"!=typeof e?"sc":Be(e);nn[n]=(nn[n]||0)+1;var r="".concat(n,"-").concat(Ge(Ae+n+nn[n]));return t?"".concat(t,"-").concat(r):r}(t.displayName,t.parentComponentId):u,d=t.displayName,f=void 0===d?Ke(r=e)?"styled.".concat(r):"Styled(".concat(function(e){return e.displayName||e.name||"Component"}(r),")"):d,m=t.displayName&&t.componentId?"".concat(Be(t.displayName),"-").concat(t.componentId):t.componentId||c,g=i&&a.attrs?a.attrs.concat(l).filter(Boolean):l,y=t.shouldForwardProp;if(i&&a.shouldForwardProp){var v=a.shouldForwardProp;if(t.shouldForwardProp){var x=t.shouldForwardProp;y=function(e,t){return v(e,t)&&x(e,t)}}else y=v}var b=new Jt(n,m,i?a.componentStyle:void 0);function w(e,t){return function(e,t,n){var r=e.attrs,i=e.componentStyle,a=e.defaultProps,o=e.foldedComponentIds,s=e.styledComponentId,l=e.target,u=p.useContext(en),c=Wt(),d=e.shouldForwardProp||c.shouldForwardProp,f=Ie(t,u,a)||Oe,m=function(e,t,n){for(var r,i=E(E({},t),{className:void 0,theme:n}),a=0;a<e.length;a+=1){var o=ht(r=e[a])?r(i):r;for(var s in o)i[s]="className"===s?ft(i[s],o[s]):"style"===s?E(E({},i[s]),o[s]):o[s]}return t.className&&(i.className=ft(i.className,t.className)),i}(r,t,f),g=m.as||l,y={};for(var v in m)void 0===m[v]||"$"===v[0]||"as"===v||"theme"===v&&m.theme===f||("forwardedAs"===v?y.as=m.forwardedAs:d&&!d(v,g)||(y[v]=m[v]));var x,b,w,k=(x=i,b=m,w=Wt(),x.generateAndInjectStyles(b,w.styleSheet,w.stylis)),_=ft(o,s);return k&&(_+=" "+k),m.className&&(_+=" "+m.className),y[Ke(g)&&!Ne.has(g)?"class":"className"]=_,n&&(y.ref=n),h.createElement(g,y)}(k,e,t)}w.displayName=f;var k=p.forwardRef(w);return k.attrs=g,k.componentStyle=b,k.displayName=f,k.shouldForwardProp=y,k.foldedComponentIds=i?ft(a.foldedComponentIds,a.styledComponentId):"",k.styledComponentId=m,k.target=i?a.target:e,Object.defineProperty(k,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(e){this._foldedDefaultProps=i?function(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];for(var r=0,i=t;r<i.length;r++)yt(e,i[r],!0);return e}({},a.defaultProps,e):e}}),vt(k,function(){return".".concat(k.styledComponentId)}),o&&dt(k,e,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0}),k}function an(e,t){for(var n=[e[0]],r=0,i=t.length;r<i;r+=1)n.push(t[r],e[r+1]);return n}var on=function(e){return Object.assign(e,{isCss:!0})};function sn(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];if(ht(e)||gt(e))return on(Kt(an(Le,P([e],t,!0))));var r=e;return 0===t.length&&1===r.length&&"string"==typeof r[0]?Kt(r):on(Kt(an(r,t)))}function ln(e,t,n){if(void 0===n&&(n=Oe),!t)throw xt(1,t);var r=function(r){for(var i=[],a=1;a<arguments.length;a++)i[a-1]=arguments[a];return e(t,n,sn.apply(void 0,P([r],i,!1)))};return r.attrs=function(r){return ln(e,t,E(E({},n),{attrs:Array.prototype.concat(n.attrs,r).filter(Boolean)}))},r.withConfig=function(r){return ln(e,t,E(E({},n),r))},r}var un=function(e){return ln(rn,e)},cn=un;Ne.forEach(function(e){cn[e]=un(e)});var dn=function(){function e(e,t){this.rules=e,this.componentId=t,this.isStatic=Qt(e),Ot.registerId(this.componentId+1)}return e.prototype.createStyles=function(e,t,n,r){var i=r(mt(Kt(this.rules,t,n,r)),""),a=this.componentId+e;n.insertRules(a,a,i)},e.prototype.removeStyles=function(e,t){t.clearRules(this.componentId+e)},e.prototype.renderStyles=function(e,t,n,r){e>2&&Ot.registerId(this.componentId+e),this.removeStyles(e,n),this.createStyles(e,t,n,r)},e}();function hn(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];var r=sn.apply(void 0,P([e],t,!1)),i="sc-global-".concat(Ge(JSON.stringify(r))),a=new dn(r,i),o=function(e){var t=Wt(),n=p.useContext(en),r=p.useRef(t.styleSheet.allocateGSInstance(i)).current;return t.styleSheet.server&&s(r,e,t.styleSheet,n,t.stylis),p.useLayoutEffect(function(){if(!t.styleSheet.server)return s(r,e,t.styleSheet,n,t.stylis),function(){return a.removeStyles(r,t.styleSheet)}},[r,e,t.styleSheet,n,t.stylis]),null};function s(e,t,n,r,i){if(a.isStatic)a.renderStyles(e,$e,n,i);else{var s=E(E({},t),{theme:Ie(t,r,o.defaultProps)});a.renderStyles(e,s,n,i)}}return p.memo(o)}function pn(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];var r=mt(sn.apply(void 0,P([e],t,!1))),i=Ge(r);return new Yt(i,r)}const fn=hn`
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

`;class mn extends h.Component{state={hasError:!1};static getDerivedStateFromError(e){return{hasError:!0,error:e}}componentDidCatch(e,t){console.error("Error caught in ErrorBoundary:",e),console.error("Component stack:",t.componentStack)}render(){return this.state.hasError?d.jsxs("div",{style:{padding:"2rem",color:"red"},children:[d.jsx("h1",{children:"Something went wrong."}),d.jsx("pre",{children:this.state.error?.message})]}):this.props.children}}var gn="popstate";function yn(e={}){return function(e,t,n,r={}){let{window:i=document.defaultView,v5Compat:a=!1}=r,o=i.history,s="POP",l=null,u=c();null==u&&(u=0,o.replaceState({...o.state,idx:u},""));function c(){return(o.state||{idx:null}).idx}function d(){s="POP";let e=c(),t=null==e?null:e-u;u=e,l&&l({action:s,location:m.location,delta:t})}function h(e,t){s="PUSH";let n=wn(m.location,e,t);u=c()+1;let r=bn(n,u),d=m.createHref(n);try{o.pushState(r,"",d)}catch(h){if(h instanceof DOMException&&"DataCloneError"===h.name)throw h;i.location.assign(d)}a&&l&&l({action:s,location:m.location,delta:1})}function p(e,t){s="REPLACE";let n=wn(m.location,e,t);u=c();let r=bn(n,u),i=m.createHref(n);o.replaceState(r,"",i),a&&l&&l({action:s,location:m.location,delta:0})}function f(e){return function(e,t=!1){let n="http://localhost";"undefined"!=typeof window&&(n="null"!==window.location.origin?window.location.origin:window.location.href);vn(n,"No window.location.(origin|href) available to create URL");let r="string"==typeof e?e:kn(e);r=r.replace(/ $/,"%20"),!t&&r.startsWith("//")&&(r=n+r);return new URL(r,n)}(e)}let m={get action(){return s},get location(){return e(i,o)},listen(e){if(l)throw new Error("A history only accepts one active listener");return i.addEventListener(gn,d),l=e,()=>{i.removeEventListener(gn,d),l=null}},createHref:e=>t(i,e),createURL:f,encodeLocation(e){let t=f(e);return{pathname:t.pathname,search:t.search,hash:t.hash}},push:h,replace:p,go:e=>o.go(e)};return m}(function(e,t){let{pathname:n,search:r,hash:i}=e.location;return wn("",{pathname:n,search:r,hash:i},t.state&&t.state.usr||null,t.state&&t.state.key||"default")},function(e,t){return"string"==typeof t?t:kn(t)},0,e)}function vn(e,t){if(!1===e||null==e)throw new Error(t)}function xn(e,t){if(!e){"undefined"!=typeof console&&console.warn(t);try{throw new Error(t)}catch(n){}}}function bn(e,t){return{usr:e.state,key:e.key,idx:t}}function wn(e,t,n=null,r){return{pathname:"string"==typeof e?e:e.pathname,search:"",hash:"",..."string"==typeof t?_n(t):t,state:n,key:t&&t.key||r||Math.random().toString(36).substring(2,10)}}function kn({pathname:e="/",search:t="",hash:n=""}){return t&&"?"!==t&&(e+="?"===t.charAt(0)?t:"?"+t),n&&"#"!==n&&(e+="#"===n.charAt(0)?n:"#"+n),e}function _n(e){let t={};if(e){let n=e.indexOf("#");n>=0&&(t.hash=e.substring(n),e=e.substring(0,n));let r=e.indexOf("?");r>=0&&(t.search=e.substring(r),e=e.substring(0,r)),e&&(t.pathname=e)}return t}function Sn(e,t,n="/"){return function(e,t,n,r){let i="string"==typeof t?_n(t):t,a=In(i.pathname||"/",n);if(null==a)return null;let o=jn(e);!function(e){e.sort((e,t)=>e.score!==t.score?t.score-e.score:function(e,t){let n=e.length===t.length&&e.slice(0,-1).every((e,n)=>e===t[n]);return n?e[e.length-1]-t[t.length-1]:0}(e.routesMeta.map(e=>e.childrenIndex),t.routesMeta.map(e=>e.childrenIndex)))}(o);let s=null;for(let l=0;null==s&&l<o.length;++l){let e=On(a);s=$n(o[l],e,r)}return s}(e,t,n,!1)}function jn(e,t=[],n=[],r="",i=!1){let a=(e,a,o=i,s)=>{let l={relativePath:void 0===s?e.path||"":s,caseSensitive:!0===e.caseSensitive,childrenIndex:a,route:e};if(l.relativePath.startsWith("/")){if(!l.relativePath.startsWith(r)&&o)return;vn(l.relativePath.startsWith(r),`Absolute route path "${l.relativePath}" nested under path "${r}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`),l.relativePath=l.relativePath.slice(r.length)}let u=Yn([r,l.relativePath]),c=n.concat(l);e.children&&e.children.length>0&&(vn(!0!==e.index,`Index routes must not have child routes. Please remove all child routes from route path "${u}".`),jn(e.children,t,c,u,o)),(null!=e.path||e.index)&&t.push({path:u,score:Dn(u,e.index),routesMeta:c})};return e.forEach((e,t)=>{if(""!==e.path&&e.path?.includes("?"))for(let n of Tn(e.path))a(e,t,!0,n);else a(e,t)}),t}function Tn(e){let t=e.split("/");if(0===t.length)return[];let[n,...r]=t,i=n.endsWith("?"),a=n.replace(/\?$/,"");if(0===r.length)return i?[a,""]:[a];let o=Tn(r.join("/")),s=[];return s.push(...o.map(e=>""===e?a:[a,e].join("/"))),i&&s.push(...o),s.map(t=>e.startsWith("/")&&""===t?"/":t)}var Cn=/^:[\w-]+$/,En=3,Pn=2,Mn=1,An=10,Rn=-2,zn=e=>"*"===e;function Dn(e,t){let n=e.split("/"),r=n.length;return n.some(zn)&&(r+=Rn),t&&(r+=Pn),n.filter(e=>!zn(e)).reduce((e,t)=>e+(Cn.test(t)?En:""===t?Mn:An),r)}function $n(e,t,n=!1){let{routesMeta:r}=e,i={},a="/",o=[];for(let s=0;s<r.length;++s){let e=r[s],l=s===r.length-1,u="/"===a?t:t.slice(a.length)||"/",c=Ln({path:e.relativePath,caseSensitive:e.caseSensitive,end:l},u),d=e.route;if(!c&&l&&n&&!r[r.length-1].route.index&&(c=Ln({path:e.relativePath,caseSensitive:e.caseSensitive,end:!1},u)),!c)return null;Object.assign(i,c.params),o.push({params:i,pathname:Yn([a,c.pathname]),pathnameBase:Hn(Yn([a,c.pathnameBase])),route:d}),"/"!==c.pathnameBase&&(a=Yn([a,c.pathnameBase]))}return o}function Ln(e,t){"string"==typeof e&&(e={path:e,caseSensitive:!1,end:!0});let[n,r]=function(e,t=!1,n=!0){xn("*"===e||!e.endsWith("*")||e.endsWith("/*"),`Route path "${e}" will be treated as if it were "${e.replace(/\*$/,"/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${e.replace(/\*$/,"/*")}".`);let r=[],i="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(e,t,n)=>(r.push({paramName:t,isOptional:null!=n}),n?"/?([^\\/]+)?":"/([^\\/]+)")).replace(/\/([\w-]+)\?(\/|$)/g,"(/$1)?$2");e.endsWith("*")?(r.push({paramName:"*"}),i+="*"===e||"/*"===e?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?i+="\\/*$":""!==e&&"/"!==e&&(i+="(?:(?=\\/|$))");let a=new RegExp(i,t?void 0:"i");return[a,r]}(e.path,e.caseSensitive,e.end),i=t.match(n);if(!i)return null;let a=i[0],o=a.replace(/(.)\/+$/,"$1"),s=i.slice(1);return{params:r.reduce((e,{paramName:t,isOptional:n},r)=>{if("*"===t){let e=s[r]||"";o=a.slice(0,a.length-e.length).replace(/(.)\/+$/,"$1")}const i=s[r];return e[t]=n&&!i?void 0:(i||"").replace(/%2F/g,"/"),e},{}),pathname:a,pathnameBase:o,pattern:e}}function On(e){try{return e.split("/").map(e=>decodeURIComponent(e).replace(/\//g,"%2F")).join("/")}catch(t){return xn(!1,`The URL path "${e}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${t}).`),e}}function In(e,t){if("/"===t)return e;if(!e.toLowerCase().startsWith(t.toLowerCase()))return null;let n=t.endsWith("/")?t.length-1:t.length,r=e.charAt(n);return r&&"/"!==r?null:e.slice(n)||"/"}var Nn=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i;function Fn(e,t="/"){let n,{pathname:r,search:i="",hash:a=""}="string"==typeof e?_n(e):e;if(r)if(o=r,Nn.test(o))n=r;else{if(r.includes("//")){let e=r;r=r.replace(/\/\/+/g,"/"),xn(!1,`Pathnames cannot have embedded double slashes - normalizing ${e} -> ${r}`)}n=r.startsWith("/")?Vn(r.substring(1),"/"):Vn(r,t)}else n=t;var o;return{pathname:n,search:qn(i),hash:Xn(a)}}function Vn(e,t){let n=t.replace(/\/+$/,"").split("/");return e.split("/").forEach(e=>{".."===e?n.length>1&&n.pop():"."!==e&&n.push(e)}),n.length>1?n.join("/"):"/"}function Bn(e,t,n,r){return`Cannot include a '${e}' character in a manually specified \`to.${t}\` field [${JSON.stringify(r)}].  Please separate it out to the \`to.${n}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`}function Un(e){let t=function(e){return e.filter((e,t)=>0===t||e.route.path&&e.route.path.length>0)}(e);return t.map((e,n)=>n===t.length-1?e.pathname:e.pathnameBase)}function Wn(e,t,n,r=!1){let i;"string"==typeof e?i=_n(e):(i={...e},vn(!i.pathname||!i.pathname.includes("?"),Bn("?","pathname","search",i)),vn(!i.pathname||!i.pathname.includes("#"),Bn("#","pathname","hash",i)),vn(!i.search||!i.search.includes("#"),Bn("#","search","hash",i)));let a,o=""===e||""===i.pathname,s=o?"/":i.pathname;if(null==s)a=n;else{let e=t.length-1;if(!r&&s.startsWith("..")){let t=s.split("/");for(;".."===t[0];)t.shift(),e-=1;i.pathname=t.join("/")}a=e>=0?t[e]:"/"}let l=Fn(i,a),u=s&&"/"!==s&&s.endsWith("/"),c=(o||"."===s)&&n.endsWith("/");return l.pathname.endsWith("/")||!u&&!c||(l.pathname+="/"),l}var Yn=e=>e.join("/").replace(/\/\/+/g,"/"),Hn=e=>e.replace(/\/+$/,"").replace(/^\/*/,"/"),qn=e=>e&&"?"!==e?e.startsWith("?")?e:"?"+e:"",Xn=e=>e&&"#"!==e?e.startsWith("#")?e:"#"+e:"";function Gn(e){return e.map(e=>e.route.path).filter(Boolean).join("/").replace(/\/\/*/g,"/")||"/"}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");var Kn=["POST","PUT","PATCH","DELETE"];new Set(Kn);var Qn=["GET",...Kn];new Set(Qn);var Zn=h.createContext(null);Zn.displayName="DataRouter";var Jn=h.createContext(null);Jn.displayName="DataRouterState",h.createContext(!1);var er=h.createContext({isTransitioning:!1});er.displayName="ViewTransition",h.createContext(new Map).displayName="Fetchers",h.createContext(null).displayName="Await";var tr=h.createContext(null);tr.displayName="Navigation";var nr=h.createContext(null);nr.displayName="Location";var rr=h.createContext({outlet:null,matches:[],isDataRoute:!1});rr.displayName="Route";var ir=h.createContext(null);function ar(){return null!=h.useContext(nr)}function or(){return vn(ar(),"useLocation() may be used only in the context of a <Router> component."),h.useContext(nr).location}ir.displayName="RouteError";var sr="You should call navigate() in a React.useEffect(), not when your component is first rendered.";function lr(e){h.useContext(tr).static||h.useLayoutEffect(e)}function ur(){let{isDataRoute:e}=h.useContext(rr);return e?function(){let{router:e}=function(e){let t=h.useContext(Zn);return vn(t,gr(e)),t}("useNavigate"),t=yr("useNavigate"),n=h.useRef(!1);return lr(()=>{n.current=!0}),h.useCallback(async(r,i={})=>{xn(n.current,sr),n.current&&("number"==typeof r?await e.navigate(r):await e.navigate(r,{fromRouteId:t,...i}))},[e,t])}():function(){vn(ar(),"useNavigate() may be used only in the context of a <Router> component.");let e=h.useContext(Zn),{basename:t,navigator:n}=h.useContext(tr),{matches:r}=h.useContext(rr),{pathname:i}=or(),a=JSON.stringify(Un(r)),o=h.useRef(!1);return lr(()=>{o.current=!0}),h.useCallback((r,s={})=>{if(xn(o.current,sr),!o.current)return;if("number"==typeof r)return void n.go(r);let l=Wn(r,JSON.parse(a),i,"path"===s.relative);null==e&&"/"!==t&&(l.pathname="/"===l.pathname?t:Yn([t,l.pathname])),(s.replace?n.replace:n.push)(l,s.state,s)},[t,n,a,i,e])}()}function cr(e,{relative:t}={}){let{matches:n}=h.useContext(rr),{pathname:r}=or(),i=JSON.stringify(Un(n));return h.useMemo(()=>Wn(e,JSON.parse(i),r,"path"===t),[e,i,r,t])}function dr(e,t,n,r,i){vn(ar(),"useRoutes() may be used only in the context of a <Router> component.");let{navigator:a}=h.useContext(tr),{matches:o}=h.useContext(rr),s=o[o.length-1],l=s?s.params:{},u=s?s.pathname:"/",c=s?s.pathnameBase:"/",d=s&&s.route;{let e=d&&d.path||"";xr(u,!d||e.endsWith("*")||e.endsWith("*?"),`You rendered descendant <Routes> (or called \`useRoutes()\`) at "${u}" (under <Route path="${e}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.\n\nPlease change the parent <Route path="${e}"> to <Route path="${"/"===e?"*":`${e}/*`}">.`)}let p,f=or();if(t){let e="string"==typeof t?_n(t):t;vn("/"===c||e.pathname?.startsWith(c),`When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${c}" but pathname "${e.pathname}" was given in the \`location\` prop.`),p=e}else p=f;let m=p.pathname||"/",g=m;if("/"!==c){let e=c.replace(/^\//,"").split("/");g="/"+m.replace(/^\//,"").split("/").slice(e.length).join("/")}let y=Sn(e,{pathname:g});xn(d||null!=y,`No routes matched location "${p.pathname}${p.search}${p.hash}" `),xn(null==y||void 0!==y[y.length-1].route.element||void 0!==y[y.length-1].route.Component||void 0!==y[y.length-1].route.lazy,`Matched leaf route at location "${p.pathname}${p.search}${p.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`);let v=function(e,t=[],n=null,r=null){if(null==e){if(!n)return null;if(n.errors)e=n.matches;else{if(0!==t.length||n.initialized||!(n.matches.length>0))return null;e=n.matches}}let i=e,a=n?.errors;if(null!=a){let e=i.findIndex(e=>e.route.id&&void 0!==a?.[e.route.id]);vn(e>=0,`Could not find a matching route for errors on route IDs: ${Object.keys(a).join(",")}`),i=i.slice(0,Math.min(i.length,e+1))}let o=!1,s=-1;if(n)for(let u=0;u<i.length;u++){let e=i[u];if((e.route.HydrateFallback||e.route.hydrateFallbackElement)&&(s=u),e.route.id){let{loaderData:t,errors:r}=n,a=e.route.loader&&!t.hasOwnProperty(e.route.id)&&(!r||void 0===r[e.route.id]);if(e.route.lazy||a){o=!0,i=s>=0?i.slice(0,s+1):[i[0]];break}}}let l=n&&r?(e,t)=>{r(e,{location:n.location,params:n.matches?.[0]?.params??{},unstable_pattern:Gn(n.matches),errorInfo:t})}:void 0;return i.reduceRight((e,r,u)=>{let c,d=!1,p=null,f=null;n&&(c=a&&r.route.id?a[r.route.id]:void 0,p=r.route.errorElement||pr,o&&(s<0&&0===u?(xr("route-fallback",!1,"No `HydrateFallback` element provided to render during initial hydration"),d=!0,f=null):s===u&&(d=!0,f=r.route.hydrateFallbackElement||null)));let m=t.concat(i.slice(0,u+1)),g=()=>{let t;return t=c?p:d?f:r.route.Component?h.createElement(r.route.Component,null):r.route.element?r.route.element:e,h.createElement(mr,{match:r,routeContext:{outlet:e,matches:m,isDataRoute:null!=n},children:t})};return n&&(r.route.ErrorBoundary||r.route.errorElement||0===u)?h.createElement(fr,{location:n.location,revalidation:n.revalidation,component:p,error:c,children:g(),routeContext:{outlet:null,matches:m,isDataRoute:!0},onError:l}):g()},null)}(y&&y.map(e=>Object.assign({},e,{params:Object.assign({},l,e.params),pathname:Yn([c,a.encodeLocation?a.encodeLocation(e.pathname.replace(/\?/g,"%3F").replace(/#/g,"%23")).pathname:e.pathname]),pathnameBase:"/"===e.pathnameBase?c:Yn([c,a.encodeLocation?a.encodeLocation(e.pathnameBase.replace(/\?/g,"%3F").replace(/#/g,"%23")).pathname:e.pathnameBase])})),o,n,r,i);return t&&v?h.createElement(nr.Provider,{value:{location:{pathname:"/",search:"",hash:"",state:null,key:"default",...p},navigationType:"POP"}},v):v}function hr(){let e=function(){let e=h.useContext(ir),t=function(e){let t=h.useContext(Jn);return vn(t,gr(e)),t}("useRouteError"),n=yr("useRouteError");if(void 0!==e)return e;return t.errors?.[n]}(),t=function(e){return null!=e&&"number"==typeof e.status&&"string"==typeof e.statusText&&"boolean"==typeof e.internal&&"data"in e}(e)?`${e.status} ${e.statusText}`:e instanceof Error?e.message:JSON.stringify(e),n=e instanceof Error?e.stack:null,r="rgba(200,200,200, 0.5)",i={padding:"0.5rem",backgroundColor:r},a={padding:"2px 4px",backgroundColor:r},o=null;return console.error("Error handled by React Router default ErrorBoundary:",e),o=h.createElement(h.Fragment,null,h.createElement("p",null,"💿 Hey developer 👋"),h.createElement("p",null,"You can provide a way better UX than this when your app throws errors by providing your own ",h.createElement("code",{style:a},"ErrorBoundary")," or"," ",h.createElement("code",{style:a},"errorElement")," prop on your route.")),h.createElement(h.Fragment,null,h.createElement("h2",null,"Unexpected Application Error!"),h.createElement("h3",{style:{fontStyle:"italic"}},t),n?h.createElement("pre",{style:i},n):null,o)}h.createContext(null);var pr=h.createElement(hr,null),fr=class extends h.Component{constructor(e){super(e),this.state={location:e.location,revalidation:e.revalidation,error:e.error}}static getDerivedStateFromError(e){return{error:e}}static getDerivedStateFromProps(e,t){return t.location!==e.location||"idle"!==t.revalidation&&"idle"===e.revalidation?{error:e.error,location:e.location,revalidation:e.revalidation}:{error:void 0!==e.error?e.error:t.error,location:t.location,revalidation:e.revalidation||t.revalidation}}componentDidCatch(e,t){this.props.onError?this.props.onError(e,t):console.error("React Router caught the following error during render",e)}render(){return void 0!==this.state.error?h.createElement(rr.Provider,{value:this.props.routeContext},h.createElement(ir.Provider,{value:this.state.error,children:this.props.component})):this.props.children}};function mr({routeContext:e,match:t,children:n}){let r=h.useContext(Zn);return r&&r.static&&r.staticContext&&(t.route.errorElement||t.route.ErrorBoundary)&&(r.staticContext._deepestRenderedBoundaryId=t.route.id),h.createElement(rr.Provider,{value:e},n)}function gr(e){return`${e} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function yr(e){let t=function(e){let t=h.useContext(rr);return vn(t,gr(e)),t}(e),n=t.matches[t.matches.length-1];return vn(n.route.id,`${e} can only be used on routes that contain a unique "id"`),n.route.id}var vr={};function xr(e,t,n){t||vr[e]||(vr[e]=!0,xn(!1,n))}function br({to:e,replace:t,state:n,relative:r}){vn(ar(),"<Navigate> may be used only in the context of a <Router> component.");let{static:i}=h.useContext(tr);xn(!i,"<Navigate> must not be used on the initial render in a <StaticRouter>. This is a no-op, but you should modify your code so the <Navigate> is only ever rendered in response to some user interaction or state change.");let{matches:a}=h.useContext(rr),{pathname:o}=or(),s=ur(),l=Wn(e,Un(a),o,"path"===r),u=JSON.stringify(l);return h.useEffect(()=>{s(JSON.parse(u),{replace:t,state:n,relative:r})},[s,u,r,t,n]),null}function wr(e){vn(!1,"A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>.")}function kr({basename:e="/",children:t=null,location:n,navigationType:r="POP",navigator:i,static:a=!1,unstable_useTransitions:o}){vn(!ar(),"You cannot render a <Router> inside another <Router>. You should never have more than one in your app.");let s=e.replace(/^\/*/,"/"),l=h.useMemo(()=>({basename:s,navigator:i,static:a,unstable_useTransitions:o,future:{}}),[s,i,a,o]);"string"==typeof n&&(n=_n(n));let{pathname:u="/",search:c="",hash:d="",state:p=null,key:f="default"}=n,m=h.useMemo(()=>{let e=In(u,s);return null==e?null:{location:{pathname:e,search:c,hash:d,state:p,key:f},navigationType:r}},[s,u,c,d,p,f,r]);return xn(null!=m,`<Router basename="${s}"> is not able to match the URL "${u}${c}${d}" because it does not start with the basename, so the <Router> won't render anything.`),null==m?null:h.createElement(tr.Provider,{value:l},h.createElement(nr.Provider,{children:t,value:m}))}function _r({children:e,location:t}){return dr(Sr(e),t)}function Sr(e,t=[]){let n=[];return h.Children.forEach(e,(e,r)=>{if(!h.isValidElement(e))return;let i=[...t,r];if(e.type===h.Fragment)return void n.push.apply(n,Sr(e.props.children,i));vn(e.type===wr,`[${"string"==typeof e.type?e.type:e.type.name}] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`),vn(!e.props.index||!e.props.children,"An index route cannot have child routes.");let a={id:e.props.id||i.join("-"),caseSensitive:e.props.caseSensitive,element:e.props.element,Component:e.props.Component,index:e.props.index,path:e.props.path,middleware:e.props.middleware,loader:e.props.loader,action:e.props.action,hydrateFallbackElement:e.props.hydrateFallbackElement,HydrateFallback:e.props.HydrateFallback,errorElement:e.props.errorElement,ErrorBoundary:e.props.ErrorBoundary,hasErrorBoundary:!0===e.props.hasErrorBoundary||null!=e.props.ErrorBoundary||null!=e.props.errorElement,shouldRevalidate:e.props.shouldRevalidate,handle:e.props.handle,lazy:e.props.lazy};e.props.children&&(a.children=Sr(e.props.children,i)),n.push(a)}),n}h.memo(function({routes:e,future:t,state:n,unstable_onError:r}){return dr(e,void 0,n,r,t)});var jr="get",Tr="application/x-www-form-urlencoded";function Cr(e){return"undefined"!=typeof HTMLElement&&e instanceof HTMLElement}var Er=null;var Pr=new Set(["application/x-www-form-urlencoded","multipart/form-data","text/plain"]);function Mr(e){return null==e||Pr.has(e)?e:(xn(!1,`"${e}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${Tr}"`),null)}function Ar(e,t){let n,r,i,a,o;if(Cr(s=e)&&"form"===s.tagName.toLowerCase()){let o=e.getAttribute("action");r=o?In(o,t):null,n=e.getAttribute("method")||jr,i=Mr(e.getAttribute("enctype"))||Tr,a=new FormData(e)}else if(function(e){return Cr(e)&&"button"===e.tagName.toLowerCase()}(e)||function(e){return Cr(e)&&"input"===e.tagName.toLowerCase()}(e)&&("submit"===e.type||"image"===e.type)){let o=e.form;if(null==o)throw new Error('Cannot submit a <button> or <input type="submit"> without a <form>');let s=e.getAttribute("formaction")||o.getAttribute("action");if(r=s?In(s,t):null,n=e.getAttribute("formmethod")||o.getAttribute("method")||jr,i=Mr(e.getAttribute("formenctype"))||Mr(o.getAttribute("enctype"))||Tr,a=new FormData(o,e),!function(){if(null===Er)try{new FormData(document.createElement("form"),0),Er=!1}catch(e){Er=!0}return Er}()){let{name:t,type:n,value:r}=e;if("image"===n){let e=t?`${t}.`:"";a.append(`${e}x`,"0"),a.append(`${e}y`,"0")}else t&&a.append(t,r)}}else{if(Cr(e))throw new Error('Cannot submit element that is not <form>, <button>, or <input type="submit|image">');n=jr,r=null,i=Tr,o=e}var s;return a&&"text/plain"===i&&(o=a,a=void 0),{action:r,method:n.toLowerCase(),encType:i,formData:a,body:o}}function Rr(e,t){if(!1===e||null==e)throw new Error(t)}function zr(e){return null!=e&&(null==e.href?"preload"===e.rel&&"string"==typeof e.imageSrcSet&&"string"==typeof e.imageSizes:"string"==typeof e.rel&&"string"==typeof e.href)}async function Dr(e,t,n){return function(e,t){let n=new Set;return new Set(t),e.reduce((e,t)=>{let r=JSON.stringify(function(e){let t={},n=Object.keys(e).sort();for(let r of n)t[r]=e[r];return t}(t));return n.has(r)||(n.add(r),e.push({key:r,link:t})),e},[])}((await Promise.all(e.map(async e=>{let r=t.routes[e.route.id];if(r){let e=await async function(e,t){if(e.id in t)return t[e.id];try{let n=await import(e.module);return t[e.id]=n,n}catch(n){return console.error(`Error loading route module \`${e.module}\`, reloading page...`),console.error(n),window.__reactRouterContext&&window.__reactRouterContext.isSpaMode,window.location.reload(),new Promise(()=>{})}}(r,n);return e.links?e.links():[]}return[]}))).flat(1).filter(zr).filter(e=>"stylesheet"===e.rel||"preload"===e.rel).map(e=>"stylesheet"===e.rel?{...e,rel:"prefetch",as:"style"}:{...e,rel:"prefetch"}))}function $r(e,t,n,r,i,a){let o=(e,t)=>!n[t]||e.route.id!==n[t].route.id,s=(e,t)=>n[t].pathname!==e.pathname||n[t].route.path?.endsWith("*")&&n[t].params["*"]!==e.params["*"];return"assets"===a?t.filter((e,t)=>o(e,t)||s(e,t)):"data"===a?t.filter((t,a)=>{let l=r.routes[t.route.id];if(!l||!l.hasLoader)return!1;if(o(t,a)||s(t,a))return!0;if(t.route.shouldRevalidate){let r=t.route.shouldRevalidate({currentUrl:new URL(i.pathname+i.search+i.hash,window.origin),currentParams:n[0]?.params||{},nextUrl:new URL(e,window.origin),nextParams:t.params,defaultShouldRevalidate:!0});if("boolean"==typeof r)return r}return!0}):[]}function Lr(e,t,{includeHydrateFallback:n}={}){return r=e.map(e=>{let r=t.routes[e.route.id];if(!r)return[];let i=[r.module];return r.clientActionModule&&(i=i.concat(r.clientActionModule)),r.clientLoaderModule&&(i=i.concat(r.clientLoaderModule)),n&&r.hydrateFallbackModule&&(i=i.concat(r.hydrateFallbackModule)),r.imports&&(i=i.concat(r.imports)),i}).flat(1),[...new Set(r)];var r}function Or(){let e=h.useContext(Zn);return Rr(e,"You must render this element inside a <DataRouterContext.Provider> element"),e}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");var Ir=h.createContext(void 0);function Nr(){let e=h.useContext(Ir);return Rr(e,"You must render this element inside a <HydratedRouter> element"),e}function Fr(e,t){return n=>{e&&e(n),n.defaultPrevented||t(n)}}function Vr({page:e,...t}){let{router:n}=Or(),r=h.useMemo(()=>Sn(n.routes,e,n.basename),[n.routes,e,n.basename]);return r?h.createElement(Br,{page:e,matches:r,...t}):null}function Br({page:e,matches:t,...n}){let r=or(),{manifest:i,routeModules:a}=Nr(),{basename:o}=Or(),{loaderData:s,matches:l}=function(){let e=h.useContext(Jn);return Rr(e,"You must render this element inside a <DataRouterStateContext.Provider> element"),e}(),u=h.useMemo(()=>$r(e,t,l,i,r,"data"),[e,t,l,i,r]),c=h.useMemo(()=>$r(e,t,l,i,r,"assets"),[e,t,l,i,r]),d=h.useMemo(()=>{if(e===r.pathname+r.search+r.hash)return[];let n=new Set,l=!1;if(t.forEach(e=>{let t=i.routes[e.route.id];t&&t.hasLoader&&(!u.some(t=>t.route.id===e.route.id)&&e.route.id in s&&a[e.route.id]?.shouldRevalidate||t.hasClientLoader?l=!0:n.add(e.route.id))}),0===n.size)return[];let c=function(e,t,n){let r="string"==typeof e?new URL(e,"undefined"==typeof window?"server://singlefetch/":window.location.origin):e;return"/"===r.pathname?r.pathname=`_root.${n}`:t&&"/"===In(r.pathname,t)?r.pathname=`${t.replace(/\/$/,"")}/_root.${n}`:r.pathname=`${r.pathname.replace(/\/$/,"")}.${n}`,r}(e,o,"data");return l&&n.size>0&&c.searchParams.set("_routes",t.filter(e=>n.has(e.route.id)).map(e=>e.route.id).join(",")),[c.pathname+c.search]},[o,s,r,i,u,t,e,a]),p=h.useMemo(()=>Lr(c,i),[c,i]),f=function(e){let{manifest:t,routeModules:n}=Nr(),[r,i]=h.useState([]);return h.useEffect(()=>{let r=!1;return Dr(e,t,n).then(e=>{r||i(e)}),()=>{r=!0}},[e,t,n]),r}(c);return h.createElement(h.Fragment,null,d.map(e=>h.createElement("link",{key:e,rel:"prefetch",as:"fetch",href:e,...n})),p.map(e=>h.createElement("link",{key:e,rel:"modulepreload",href:e,...n})),f.map(({key:e,link:t})=>h.createElement("link",{key:e,nonce:n.nonce,...t})))}function Ur(...e){return t=>{e.forEach(e=>{"function"==typeof e?e(t):null!=e&&(e.current=t)})}}Ir.displayName="FrameworkContext";var Wr="undefined"!=typeof window&&void 0!==window.document&&void 0!==window.document.createElement;try{Wr&&(window.__reactRouterVersion="7.10.1")}catch(GS){}function Yr({basename:e,children:t,unstable_useTransitions:n,window:r}){let i=h.useRef();null==i.current&&(i.current=yn({window:r,v5Compat:!0}));let a=i.current,[o,s]=h.useState({action:a.action,location:a.location}),l=h.useCallback(e=>{!1===n?s(e):h.startTransition(()=>s(e))},[n]);return h.useLayoutEffect(()=>a.listen(l),[a,l]),h.createElement(kr,{basename:e,children:t,location:o.location,navigationType:o.action,navigator:a,unstable_useTransitions:!0===n})}var Hr=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,qr=h.forwardRef(function({onClick:e,discover:t="render",prefetch:n="none",relative:r,reloadDocument:i,replace:a,state:o,target:s,to:l,preventScrollReset:u,viewTransition:c,...d},p){let f,{basename:m,unstable_useTransitions:g}=h.useContext(tr),y="string"==typeof l&&Hr.test(l),v=!1;if("string"==typeof l&&y&&(f=l,Wr))try{let e=new URL(window.location.href),t=l.startsWith("//")?new URL(e.protocol+l):new URL(l),n=In(t.pathname,m);t.origin===e.origin&&null!=n?l=n+t.search+t.hash:v=!0}catch(GS){xn(!1,`<Link to="${l}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`)}let x=function(e,{relative:t}={}){vn(ar(),"useHref() may be used only in the context of a <Router> component.");let{basename:n,navigator:r}=h.useContext(tr),{hash:i,pathname:a,search:o}=cr(e,{relative:t}),s=a;return"/"!==n&&(s="/"===a?n:Yn([n,a])),r.createHref({pathname:s,search:o,hash:i})}(l,{relative:r}),[b,w,k]=function(e,t){let n=h.useContext(Ir),[r,i]=h.useState(!1),[a,o]=h.useState(!1),{onFocus:s,onBlur:l,onMouseEnter:u,onMouseLeave:c,onTouchStart:d}=t,p=h.useRef(null);h.useEffect(()=>{if("render"===e&&o(!0),"viewport"===e){let e=new IntersectionObserver(e=>{e.forEach(e=>{o(e.isIntersecting)})},{threshold:.5});return p.current&&e.observe(p.current),()=>{e.disconnect()}}},[e]),h.useEffect(()=>{if(r){let e=setTimeout(()=>{o(!0)},100);return()=>{clearTimeout(e)}}},[r]);let f=()=>{i(!0)},m=()=>{i(!1),o(!1)};return n?"intent"!==e?[a,p,{}]:[a,p,{onFocus:Fr(s,f),onBlur:Fr(l,m),onMouseEnter:Fr(u,f),onMouseLeave:Fr(c,m),onTouchStart:Fr(d,f)}]:[!1,p,{}]}(n,d),_=function(e,{target:t,replace:n,state:r,preventScrollReset:i,relative:a,viewTransition:o,unstable_useTransitions:s}={}){let l=ur(),u=or(),c=cr(e,{relative:a});return h.useCallback(d=>{if(function(e,t){return!(0!==e.button||t&&"_self"!==t||function(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}(e))}(d,t)){d.preventDefault();let t=void 0!==n?n:kn(u)===kn(c),p=()=>l(e,{replace:t,state:r,preventScrollReset:i,relative:a,viewTransition:o});s?h.startTransition(()=>p()):p()}},[u,l,c,n,r,t,e,i,a,o,s])}(l,{replace:a,state:o,target:s,preventScrollReset:u,relative:r,viewTransition:c,unstable_useTransitions:g});let S=h.createElement("a",{...d,...k,href:f||x,onClick:v||i?e:function(t){e&&e(t),t.defaultPrevented||_(t)},ref:Ur(p,w),target:s,"data-discover":y||"render"!==t?void 0:"true"});return b&&!y?h.createElement(h.Fragment,null,S,h.createElement(Vr,{page:x})):S});qr.displayName="Link";var Xr=h.forwardRef(function({"aria-current":e="page",caseSensitive:t=!1,className:n="",end:r=!1,style:i,to:a,viewTransition:o,children:s,...l},u){let c=cr(a,{relative:l.relative}),d=or(),p=h.useContext(Jn),{navigator:f,basename:m}=h.useContext(tr),g=null!=p&&function(e,{relative:t}={}){let n=h.useContext(er);vn(null!=n,"`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?");let{basename:r}=Gr("useViewTransitionState"),i=cr(e,{relative:t});if(!n.isTransitioning)return!1;let a=In(n.currentLocation.pathname,r)||n.currentLocation.pathname,o=In(n.nextLocation.pathname,r)||n.nextLocation.pathname;return null!=Ln(i.pathname,o)||null!=Ln(i.pathname,a)}(c)&&!0===o,y=f.encodeLocation?f.encodeLocation(c).pathname:c.pathname,v=d.pathname,x=p&&p.navigation&&p.navigation.location?p.navigation.location.pathname:null;t||(v=v.toLowerCase(),x=x?x.toLowerCase():null,y=y.toLowerCase()),x&&m&&(x=In(x,m)||x);const b="/"!==y&&y.endsWith("/")?y.length-1:y.length;let w,k=v===y||!r&&v.startsWith(y)&&"/"===v.charAt(b),_=null!=x&&(x===y||!r&&x.startsWith(y)&&"/"===x.charAt(y.length)),S={isActive:k,isPending:_,isTransitioning:g},j=k?e:void 0;w="function"==typeof n?n(S):[n,k?"active":null,_?"pending":null,g?"transitioning":null].filter(Boolean).join(" ");let T="function"==typeof i?i(S):i;return h.createElement(qr,{...l,"aria-current":j,className:w,ref:u,style:T,to:a,viewTransition:o},"function"==typeof s?s(S):s)});function Gr(e){let t=h.useContext(Zn);return vn(t,function(e){return`${e} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}(e)),t}Xr.displayName="NavLink",h.forwardRef(({discover:e="render",fetcherKey:t,navigate:n,reloadDocument:r,replace:i,state:a,method:o=jr,action:s,onSubmit:l,relative:u,preventScrollReset:c,viewTransition:d,...p},f)=>{let{unstable_useTransitions:m}=h.useContext(tr),g=function(){let{router:e}=Gr("useSubmit"),{basename:t}=h.useContext(tr),n=yr("useRouteId"),r=e.fetch,i=e.navigate;return h.useCallback(async(e,a={})=>{let{action:o,method:s,encType:l,formData:u,body:c}=Ar(e,t);if(!1===a.navigate){let e=a.fetcherKey||Qr();await r(e,n,a.action||o,{preventScrollReset:a.preventScrollReset,formData:u,body:c,formMethod:a.method||s,formEncType:a.encType||l,flushSync:a.flushSync})}else await i(a.action||o,{preventScrollReset:a.preventScrollReset,formData:u,body:c,formMethod:a.method||s,formEncType:a.encType||l,replace:a.replace,state:a.state,fromRouteId:n,flushSync:a.flushSync,viewTransition:a.viewTransition})},[r,i,t,n])}(),y=function(e,{relative:t}={}){let{basename:n}=h.useContext(tr),r=h.useContext(rr);vn(r,"useFormAction must be used inside a RouteContext");let[i]=r.matches.slice(-1),a={...cr(e||".",{relative:t})},o=or();if(null==e){a.search=o.search;let e=new URLSearchParams(a.search),t=e.getAll("index");if(t.some(e=>""===e)){e.delete("index"),t.filter(e=>e).forEach(t=>e.append("index",t));let n=e.toString();a.search=n?`?${n}`:""}}e&&"."!==e||!i.route.index||(a.search=a.search?a.search.replace(/^\?/,"?index&"):"?index");"/"!==n&&(a.pathname="/"===a.pathname?n:Yn([n,a.pathname]));return kn(a)}(s,{relative:u}),v="get"===o.toLowerCase()?"get":"post",x="string"==typeof s&&Hr.test(s);return h.createElement("form",{ref:f,method:v,action:y,onSubmit:r?l:e=>{if(l&&l(e),e.defaultPrevented)return;e.preventDefault();let r=e.nativeEvent.submitter,s=r?.getAttribute("formmethod")||o,p=()=>g(r||e.currentTarget,{fetcherKey:t,method:s,navigate:n,replace:i,state:a,relative:u,preventScrollReset:c,viewTransition:d});m&&!1!==n?h.startTransition(()=>p()):p()},...p,"data-discover":x||"render"!==e?void 0:"true"})}).displayName="Form";var Kr=0,Qr=()=>`__${String(++Kr)}__`;var Zr=T();const Jr={sm:sn`
    min-height: 42px;
    padding: 10px 18px;
    font-size: 13px;
  `,md:sn`
    min-height: 46px;
    padding: 12px 24px;
    font-size: 14px;
  `,lg:sn`
    min-height: 52px;
    padding: 14px 28px;
    font-size: 15px;
  `},ei={primary:sn`
    background: ${({theme:e})=>e.colors.primary};
    color: ${({theme:e})=>e.colors.textWhite};
    border-color: ${({theme:e})=>e.colors.primary};
    box-shadow: ${({theme:e})=>e.shadows.button};

    &:hover {
      background: #184d3b;
      border-color: #184d3b;
      box-shadow: 0 20px 42px rgba(31, 95, 74, 0.3);
    }
  `,secondary:sn`
    background: rgba(255, 255, 255, 0.88);
    color: ${({theme:e})=>e.colors.textPrimary};
    border-color: rgba(122, 160, 143, 0.42);
    box-shadow: ${({theme:e})=>e.shadows.soft};

    &:hover {
      background: ${({theme:e})=>e.colors.ivory};
      border-color: rgba(122, 160, 143, 0.58);
    }
  `,outline:sn`
    background: rgba(255, 255, 255, 0.18);
    color: ${({theme:e})=>e.colors.primary};
    border-color: rgba(31, 95, 74, 0.28);

    &:hover {
      background: rgba(255, 255, 255, 0.7);
      border-color: rgba(31, 95, 74, 0.46);
    }
  `},ti=sn`
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

  ${({$size:e})=>Jr[e]};
  ${({$variant:e})=>ei[e]};

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
`,ni=cn.button`
  ${ti}
`,ri=cn.a`
  ${ti}
`,ii=cn.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  order: ${({$position:e})=>"right"===e?2:0};
`,ai=({children:e,icon:t,iconPosition:n="left"})=>d.jsxs(d.Fragment,{children:[t?d.jsx(ii,{$position:n,children:t}):null,d.jsx("span",{children:e})]}),oi=({variant:e="primary",size:t="md",fullWidth:n=!1,icon:r,iconPosition:i="left",children:a,...o})=>"to"in o&&o.to?d.jsx(ri,{as:qr,to:o.to,$variant:e,$size:t,$fullWidth:n,...o,children:d.jsx(ai,{icon:r,iconPosition:i,children:a})}):"href"in o&&o.href?d.jsx(ri,{$variant:e,$size:t,$fullWidth:n,...o,children:d.jsx(ai,{icon:r,iconPosition:i,children:a})}):d.jsx(ni,{type:o.type??"button",$variant:e,$size:t,$fullWidth:n,...o,children:d.jsx(ai,{icon:r,iconPosition:i,children:a})}),si=[{label:"HOME",to:"/"},{label:"NUTRITION",to:"/nutrition"},{label:"YOGA",to:"/yoga"},{label:"AYURVEDA",to:"/ayurveda"},{label:"CONTACT",to:"/contact"},{label:"ABOUT",to:"/about"}],li="Book Consultation",ui="/contact",ci={brand:{logo:"https://res.cloudinary.com/drjzugsyo/image/upload/v1771263278/logo_aiaixs.png"},home:{homeHeroWatercolorIllustration:{mobile:"/assets/home-hero-watercolor-mobile-Ck-YmqH3.png",desktop:"/assets/home-hero-watercolor-desktop-BKSE5Tkb.png",alt:"Watercolor illustration of a woman meditating in front of mountains and a glowing moon"},heroSlides:["https://res.cloudinary.com/drjzugsyo/image/upload/f_auto,q_auto,w_1200/shree5_doyho6.webp","https://res.cloudinary.com/drjzugsyo/image/upload/f_auto,q_auto,w_1200/shree4_rnpdvt.webp"],journeyPortrait:"https://res.cloudinary.com/drjzugsyo/image/upload/v1771263067/shree7_nq8mg9.jpg",yogaPreview:"https://res.cloudinary.com/drjzugsyo/image/upload/v1771263209/shree8_navizo.jpg"},about:{journeyTimeline:{step1:"https://res.cloudinary.com/drjzugsyo/image/upload/f_auto,q_auto,w_600/self1_uguqlb.jpg",step2:"https://res.cloudinary.com/drjzugsyo/image/upload/f_auto,q_auto,w_600/self2_e2xknl.jpg",step3:"https://res.cloudinary.com/drjzugsyo/image/upload/f_auto,q_auto,w_600/self3_ml3idz.jpg"},certifications:["https://res.cloudinary.com/drjzugsyo/image/upload/v1771263583/certificate_carousel_1_bsfcoq.jpg","https://res.cloudinary.com/drjzugsyo/image/upload/v1771263574/certificate2_wl3vy9.jpg","https://res.cloudinary.com/drjzugsyo/image/upload/v1771263573/certificate3_lkbzmr.jpg"]},yoga:{hero:"https://res.cloudinary.com/drjzugsyo/image/upload/v1771264109/yogaimage2_vid0yc.jpg",gallery:["https://res.cloudinary.com/drjzugsyo/image/upload/v1771263837/yogaimage1_t1hgpj.jpg","https://res.cloudinary.com/drjzugsyo/image/upload/v1771264338/shree2_i3c9mu.jpg","https://res.cloudinary.com/drjzugsyo/image/upload/v1771263548/shree3_gveuvh.jpg"],transformations:["https://res.cloudinary.com/drjzugsyo/image/upload/v1771263544/transform4_uqtnrd.jpg","https://res.cloudinary.com/drjzugsyo/image/upload/v1771263547/transform2_zlouig.jpg","https://res.cloudinary.com/drjzugsyo/image/upload/v1771263573/transform3_bzxtx8.jpg"],videos:["https://res.cloudinary.com/drjzugsyo/video/upload/v1770745584/IMG_7633_1_qooflf.mp4","https://res.cloudinary.com/drjzugsyo/video/upload/v1770745298/IMG_7634_kapmzh.mp4"]},nutrition:{hero:"https://res.cloudinary.com/drjzugsyo/image/upload/v1771263545/shree1_bxjnwa.jpg"}},di=cn.header`
  width: 100%;
  padding: 22px 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;

  @media (max-width: 767px) {
    display: none;
  }
`,hi=cn.img`
  width: 82px;
  height: 82px;
  border-radius: 50%;
  object-fit: contain;
  box-shadow: 0 14px 30px rgba(0, 0, 0, 0.22),
    0 0 0 4px rgba(244, 255, 252, 0.9);
`,pi=cn.nav`
  padding: 10px 40px;
  border-radius: 999px;
  background: rgba(248, 255, 252, 0.9);
  backdrop-filter: blur(18px);
  box-shadow: 0 20px 45px rgba(0, 0, 0, 0.08);
  display: flex;
  gap: 36px;
`,fi=cn.div`
  display: flex;
  justify-content: center;
`;cn(Xr)`
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
`;const mi=cn.header`
  width: 100%;
  padding: 12px 18px;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(225, 241, 235, 0.92);
  backdrop-filter: blur(10px);
  border-bottom: 1px solid rgba(31, 95, 74, 0.08);

  @media (min-width: 768px) {
    display: none;
  }
`,gi=cn.img`
  width: 52px;
  height: 52px;
  border-radius: 50%;
  object-fit: contain;
  box-shadow: 0 14px 30px rgba(0, 0, 0, 0.22),
    0 0 0 4px rgba(244, 255, 252, 0.9);
`,yi=cn.button`
  position: absolute;
  right: 18px;
  top: 50%;
  transform: translateY(-50%);
  width: 36px;
  height: 36px;
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
`,vi=cn.span`
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
`,xi=cn.div`
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
`,bi=cn.aside`
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
`,wi=cn.div`
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
`,ki=cn.button`
  border: none;
  background: transparent;
  font-size: 22px;
  cursor: pointer;
  color: #264139;
`,_i=cn.nav`
  display: flex;
  flex-direction: column;
  gap: 18px;
`,Si=cn.span`
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
`,ji=cn.span`
  border: none;
  background: transparent;
  text-align: left;
  font-size: 15px;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: #264139;
  padding: 8px 0;
  cursor: pointer;
`,Ti=cn.div`
  margin-top: 28px;
`,Ci=cn.div`
  a {
    text-decoration: none;
    color: inherit;
  }

  a.active ${Si} {
    color: #1f6b57;
    opacity: 1;
  }

  a.active ${Si}::after {
    width: 70%;
  }

  a.active ${ji} {
    color: #1f6b57;
    font-weight: 600;
  }
  @media (max-width: 768px) {
    position: sticky;
    top: 0;
    z-index: 1;
  }
`,Ei=()=>{const[e,t]=h.useState(!1);return h.useEffect(()=>{if(!e)return;const n=e=>{"Escape"===e.key&&t(!1)};return window.addEventListener("keydown",n),()=>window.removeEventListener("keydown",n)},[e]),d.jsx(d.Fragment,{children:d.jsxs(Ci,{children:[d.jsxs(di,{children:[d.jsx(hi,{src:ci.brand.logo,alt:"Logo"}),d.jsx(pi,{children:si.map(e=>d.jsx(Xr,{to:e.to,end:"/"===e.to,children:d.jsx(Si,{children:e.label})},e.to))}),d.jsx(fi,{children:d.jsx(oi,{to:ui,size:"sm",variant:"secondary",children:li})})]}),d.jsxs(mi,{children:[d.jsx(gi,{src:ci.brand.logo,alt:"Logo"}),d.jsx(yi,{onClick:()=>t(!0),"aria-label":"Open menu","aria-expanded":e,"aria-controls":"mobile-site-drawer",children:d.jsx(vi,{})})]}),d.jsx(xi,{$open:e,onClick:()=>t(!1),children:d.jsxs(bi,{id:"mobile-site-drawer",$open:e,"aria-label":"Mobile navigation",onClick:e=>e.stopPropagation(),children:[d.jsxs(wi,{children:[d.jsx(gi,{src:ci.brand.logo,alt:"Logo"}),d.jsx("p",{children:"Balance with Shree"}),d.jsx(ki,{onClick:()=>t(!1),"aria-label":"Close menu",children:"✕"})]}),d.jsx(_i,{children:si.map(e=>d.jsx(Xr,{to:e.to,end:"/"===e.to,onClick:()=>t(!1),children:d.jsx(ji,{children:e.label})},e.to))}),d.jsx(Ti,{children:d.jsx(oi,{to:ui,fullWidth:!0,onClick:()=>t(!1),children:li})})]})})]})})},Pi=e=>{const t=(e=>e.replace(/^([A-Z])|[\s-_]+(\w)/g,(e,t,n)=>n?n.toUpperCase():t.toLowerCase()))(e);return t.charAt(0).toUpperCase()+t.slice(1)},Mi=(...e)=>e.filter((e,t,n)=>Boolean(e)&&""!==e.trim()&&n.indexOf(e)===t).join(" ").trim(),Ai=e=>{for(const t in e)if(t.startsWith("aria-")||"role"===t||"title"===t)return!0};var Ri={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};const zi=h.forwardRef(({color:e="currentColor",size:t=24,strokeWidth:n=2,absoluteStrokeWidth:r,className:i="",children:a,iconNode:o,...s},l)=>h.createElement("svg",{ref:l,...Ri,width:t,height:t,stroke:e,strokeWidth:r?24*Number(n)/Number(t):n,className:Mi("lucide",i),...!a&&!Ai(s)&&{"aria-hidden":"true"},...s},[...o.map(([e,t])=>h.createElement(e,t)),...Array.isArray(a)?a:[a]])),Di=(e,t)=>{const n=h.forwardRef(({className:n,...r},i)=>{return h.createElement(zi,{ref:i,iconNode:t,className:Mi(`lucide-${a=Pi(e),a.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase()}`,`lucide-${e}`,n),...r});var a});return n.displayName=Pi(e),n},$i=Di("apple",[["path",{d:"M12 6.528V3a1 1 0 0 1 1-1h0",key:"11qiee"}],["path",{d:"M18.237 21A15 15 0 0 0 22 11a6 6 0 0 0-10-4.472A6 6 0 0 0 2 11a15.1 15.1 0 0 0 3.763 10 3 3 0 0 0 3.648.648 5.5 5.5 0 0 1 5.178 0A3 3 0 0 0 18.237 21",key:"110c12"}]]),Li=Di("check",[["path",{d:"M20 6 9 17l-5-5",key:"1gmf2c"}]]),Oi=Di("flower-2",[["path",{d:"M12 5a3 3 0 1 1 3 3m-3-3a3 3 0 1 0-3 3m3-3v1M9 8a3 3 0 1 0 3 3M9 8h1m5 0a3 3 0 1 1-3 3m3-3h-1m-2 3v-1",key:"3pnvol"}],["circle",{cx:"12",cy:"8",r:"2",key:"1822b1"}],["path",{d:"M12 10v12",key:"6ubwww"}],["path",{d:"M12 22c4.2 0 7-1.667 7-5-4.2 0-7 1.667-7 5Z",key:"9hd38g"}],["path",{d:"M12 22c-4.2 0-7-1.667-7-5 4.2 0 7 1.667 7 5Z",key:"ufn41s"}]]),Ii=Di("heart-handshake",[["path",{d:"M19.414 14.414C21 12.828 22 11.5 22 9.5a5.5 5.5 0 0 0-9.591-3.676.6.6 0 0 1-.818.001A5.5 5.5 0 0 0 2 9.5c0 2.3 1.5 4 3 5.5l5.535 5.362a2 2 0 0 0 2.879.052 2.12 2.12 0 0 0-.004-3 2.124 2.124 0 1 0 3-3 2.124 2.124 0 0 0 3.004 0 2 2 0 0 0 0-2.828l-1.881-1.882a2.41 2.41 0 0 0-3.409 0l-1.71 1.71a2 2 0 0 1-2.828 0 2 2 0 0 1 0-2.828l2.823-2.762",key:"17lmqv"}]]),Ni=Di("heart-pulse",[["path",{d:"M2 9.5a5.5 5.5 0 0 1 9.591-3.676.56.56 0 0 0 .818 0A5.49 5.49 0 0 1 22 9.5c0 2.29-1.5 4-3 5.5l-5.492 5.313a2 2 0 0 1-3 .019L5 15c-1.5-1.5-3-3.2-3-5.5",key:"mvr1a0"}],["path",{d:"M3.22 13H9.5l.5-1 2 4.5 2-7 1.5 3.5h5.27",key:"auskq0"}]]),Fi=Di("heart",[["path",{d:"M2 9.5a5.5 5.5 0 0 1 9.591-3.676.56.56 0 0 0 .818 0A5.49 5.49 0 0 1 22 9.5c0 2.29-1.5 4-3 5.5l-5.492 5.313a2 2 0 0 1-3 .019L5 15c-1.5-1.5-3-3.2-3-5.5",key:"mvr1a0"}]]),Vi=Di("instagram",[["rect",{width:"20",height:"20",x:"2",y:"2",rx:"5",ry:"5",key:"2e1cvw"}],["path",{d:"M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z",key:"9exkf1"}],["line",{x1:"17.5",x2:"17.51",y1:"6.5",y2:"6.5",key:"r4j83e"}]]),Bi=Di("leaf",[["path",{d:"M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z",key:"nnexq3"}],["path",{d:"M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12",key:"mt58a7"}]]),Ui=Di("mail",[["path",{d:"m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7",key:"132q7q"}],["rect",{x:"2",y:"4",width:"20",height:"16",rx:"2",key:"izxlao"}]]),Wi=Di("message-circle-more",[["path",{d:"M2.992 16.342a2 2 0 0 1 .094 1.167l-1.065 3.29a1 1 0 0 0 1.236 1.168l3.413-.998a2 2 0 0 1 1.099.092 10 10 0 1 0-4.777-4.719",key:"1sd12s"}],["path",{d:"M8 12h.01",key:"czm47f"}],["path",{d:"M12 12h.01",key:"1mp3jc"}],["path",{d:"M16 12h.01",key:"1l6xoz"}]]),Yi=Di("message-circle",[["path",{d:"M2.992 16.342a2 2 0 0 1 .094 1.167l-1.065 3.29a1 1 0 0 0 1.236 1.168l3.413-.998a2 2 0 0 1 1.099.092 10 10 0 1 0-4.777-4.719",key:"1sd12s"}]]),Hi=Di("moon-star",[["path",{d:"M18 5h4",key:"1lhgn2"}],["path",{d:"M20 3v4",key:"1olli1"}],["path",{d:"M20.985 12.486a9 9 0 1 1-9.473-9.472c.405-.022.617.46.402.803a6 6 0 0 0 8.268 8.268c.344-.215.825-.004.803.401",key:"kfwtm"}]]),qi=Di("scale",[["path",{d:"M12 3v18",key:"108xh3"}],["path",{d:"m19 8 3 8a5 5 0 0 1-6 0zV7",key:"zcdpyk"}],["path",{d:"M3 7h1a17 17 0 0 0 8-2 17 17 0 0 0 8 2h1",key:"1yorad"}],["path",{d:"m5 8 3 8a5 5 0 0 1-6 0zV7",key:"eua70x"}],["path",{d:"M7 21h10",key:"1b0cd5"}]]),Xi=Di("sparkles",[["path",{d:"M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z",key:"1s2grr"}],["path",{d:"M20 2v4",key:"1rf3ol"}],["path",{d:"M22 4h-4",key:"gwowj6"}],["circle",{cx:"4",cy:"20",r:"2",key:"6kqj1y"}]]),Gi=Di("sun-medium",[["circle",{cx:"12",cy:"12",r:"4",key:"4exip2"}],["path",{d:"M12 3v1",key:"1asbbs"}],["path",{d:"M12 20v1",key:"1wcdkc"}],["path",{d:"M3 12h1",key:"lp3yf2"}],["path",{d:"M20 12h1",key:"1vloll"}],["path",{d:"m18.364 5.636-.707.707",key:"1hakh0"}],["path",{d:"m6.343 17.657-.707.707",key:"18m9nf"}],["path",{d:"m5.636 5.636.707.707",key:"1xv1c5"}],["path",{d:"m17.657 17.657.707.707",key:"vl76zb"}]]),Ki=Di("sun",[["circle",{cx:"12",cy:"12",r:"4",key:"4exip2"}],["path",{d:"M12 2v2",key:"tus03m"}],["path",{d:"M12 20v2",key:"1lh1kg"}],["path",{d:"m4.93 4.93 1.41 1.41",key:"149t6j"}],["path",{d:"m17.66 17.66 1.41 1.41",key:"ptbguv"}],["path",{d:"M2 12h2",key:"1t8f8n"}],["path",{d:"M20 12h2",key:"1q8mjw"}],["path",{d:"m6.34 17.66-1.41 1.41",key:"1m8zz5"}],["path",{d:"m19.07 4.93-1.41 1.41",key:"1shlcs"}]]),Qi=Di("waves",[["path",{d:"M2 6c.6.5 1.2 1 2.5 1C7 7 7 5 9.5 5c2.6 0 2.4 2 5 2 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1",key:"knzxuh"}],["path",{d:"M2 12c.6.5 1.2 1 2.5 1 2.5 0 2.5-2 5-2 2.6 0 2.4 2 5 2 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1",key:"2jd2cc"}],["path",{d:"M2 18c.6.5 1.2 1 2.5 1 2.5 0 2.5-2 5-2 2.6 0 2.4 2 5 2 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1",key:"rd2r6e"}]]),Zi=cn.section`
  padding: 0;
`,Ji=cn.div`
  width: 100%;
  max-width: 1100px;
  margin: 0 auto;
  text-align: left;
  padding: 32px;
  background: linear-gradient(
    180deg,
    rgba(255, 255, 255, 0.92),
    rgba(251, 249, 243, 0.94)
  );
  border-radius: 34px;
  border: 1px solid rgba(122, 160, 143, 0.14);
  box-shadow: 0 24px 60px rgba(15, 60, 40, 0.1);

  @media (max-width: 768px) {
    padding: 24px 20px;
    border-radius: 28px;
  }
`,ea=cn.h2`
  font-size: 34px;
  font-weight: 600;
  letter-spacing: -0.4px;
  color: ${({theme:e})=>e.colors.textPrimary};

  @media (max-width: 768px) {
    font-size: 26px;
  }
`,ta=cn.p`
  max-width: 640px;
  margin: 18px 0 28px;
  font-size: 16px;
  line-height: 28px;
  color: ${({theme:e})=>e.colors.textMuted};

  @media (max-width: 768px) {
    margin-bottom: 44px;
    font-size: 15px;
  }
`,na=cn.div`
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 16px;
  margin-bottom: 28px;

  @media (max-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 640px) {
    grid-template-columns: 1fr;
  }
`,ra=cn.div`
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 18px;
  border-radius: 22px;
  background: rgba(255, 255, 255, 0.78);
  border: 1px solid ${({theme:e})=>e.colors.borderLight};
  box-shadow: 0 12px 26px rgba(0, 0, 0, 0.06);

  transition:
    transform 0.25s ease,
    box-shadow 0.25s ease;

  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 26px 52px rgba(0, 0, 0, 0.1);
  }
`,ia=cn.span`
  width: 36px;
  height: 36px;
  border-radius: 14px;
  background: rgba(31, 95, 74, 0.08);
  color: ${({theme:e})=>e.colors.primary};
  display: inline-flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
`,aa=cn.span`
  font-family: ${({theme:e})=>e.fonts.body};
  font-size: 15px;
  font-weight: 600;
  color: ${({theme:e})=>e.colors.textSecondary};
`,oa=[{label:"Dosha Awareness & Body Constitution",icon:Bi},{label:"Daily Routines (Dinacharya)",icon:Gi},{label:"Digestive & Metabolic Balance",icon:Qi},{label:"Stress & Hormonal Regulation",icon:Hi}],sa=()=>d.jsx(Zi,{children:d.jsxs(Ji,{children:[d.jsx(ea,{children:"Ayurveda & Lifestyle Balance"}),d.jsx(ta,{children:"Ancient Ayurvedic wisdom adapted for modern life — helping you understand your body’s constitution, improve digestion, regulate stress, and build supportive daily routines in a gentle, sustainable way."}),d.jsx(na,{children:oa.map(({label:e,icon:t})=>d.jsxs(ra,{children:[d.jsx(ia,{children:d.jsx(t,{size:16,strokeWidth:1.9})}),d.jsx(aa,{children:e})]},e))}),d.jsx(oi,{to:"/ayurveda",variant:"outline",style:{marginTop:"32px"},children:"Explore Ayurveda"})]})}),la=pn`
  from { opacity: 0; transform: translateY(40px); }
  to   { opacity: 1; transform: translateY(0); }
`,ua=cn.section`
  background: linear-gradient(180deg, rgba(251, 249, 243, 0.96), rgba(244, 250, 246, 0.98));
  margin-top: 28px;
  border-radius: 36px;
  overflow: hidden;
  position: relative;
  min-height: 720px;
  box-shadow:
    0 30px 70px rgba(15, 40, 35, 0.14),
    0 0 0 1px rgba(255, 255, 255, 0.9);

  @media (max-width: 768px) {
    max-width: 100%;
    min-height: 640px;
    border-radius: 28px;
  }
`,ca=cn.div`
  position: relative;
  width: 100%;
  height: 720px;
  border-radius: 36px;

  @media (max-width: 768px) {
    height: 640px;
  }

  @media (max-width: 480px) {
    height: 600px;
  }
`,da=cn.picture`
  display: block;
  width: 100%;
  height: 100%;
`,ha=cn.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center top;
`,pa=cn.div`
  position: absolute;
  inset: 0;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  pointer-events: none;
  padding: 24px;
`,fa=cn.div`
  position: relative;
  z-index: 2;
  width: min(100%, 540px);
  margin: auto auto 72px 32px;
  padding: 28px 24px 24px;
  border-radius: 28px;
  background: linear-gradient(
    180deg,
    rgba(255, 255, 255, 0.86),
    rgba(251, 249, 243, 0.94)
  );
  box-shadow:
    0 24px 52px rgba(15, 60, 40, 0.16),
    inset 0 0 0 1px rgba(255, 255, 255, 0.7);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  pointer-events: auto;

  @media (max-width: 768px) {
    width: 100%;
    margin: auto 0 70px;
    padding: 22px 18px 18px;
    border-radius: 24px;
  }
`,ma=cn.span`
  display: inline-flex;
  align-items: center;
  padding: 8px 14px;
  border-radius: 999px;
  background: rgba(244, 250, 246, 0.92);
  border: 1px solid rgba(122, 160, 143, 0.22);
  font-family: ${({theme:e})=>e.fonts.body};
  font-size: 12px;
  font-weight: 600;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: ${({theme:e})=>e.colors.textSecondary};
`,ga=cn.div`
  position: relative;
  margin-top: 18px;
  text-align: left;
  color: #24312d;

  h1 {
    font-size: clamp(2.5rem, 5vw, 4.5rem);
    line-height: 0.95;
    margin: 0;
  }

  @media (max-width: 768px) {
    text-align: left;

    h1 {
      font-size: 2.6rem;
    }
  }

  @media (max-width: 480px) {
    h1 {
      font-size: 2.2rem;
    }
  }
`,ya=cn.div`
  display: flex;
  gap: 12px;
  margin-top: 24px;
  pointer-events: auto;
  flex-wrap: wrap;

  @media (max-width: 768px) {
    width: 100%;
    flex-direction: column;
  }
`,va=cn.div`
  position: absolute;
  inset: 0;
  background:
    linear-gradient(180deg, rgba(244, 250, 246, 0.08), rgba(18, 33, 27, 0.38)),
    radial-gradient(circle at top center, rgba(255, 255, 255, 0.24), transparent 40%);
  pointer-events: none;
`,xa=cn(pa)`
  opacity: ${({$visible:e})=>e?1:0};
  transform: ${({$visible:e})=>e?"translateY(0)":"translateY(40px)"};
  animation: ${({$visible:e})=>e?la:"none"} 0.8s
    cubic-bezier(0.22, 0.61, 0.36, 1) forwards;
  transition:
    opacity 0.6s ease-out,
    transform 0.6s ease-out;
`;var ba=new Map,wa=new WeakMap,ka=0;function _a(e){return Object.keys(e).sort().filter(t=>void 0!==e[t]).map(t=>{return`${t}_${"root"===t?(n=e.root,n?(wa.has(n)||(ka+=1,wa.set(n,ka.toString())),wa.get(n)):"0"):e[t]}`;var n}).toString()}function Sa(e,t,n={},r=void 0){if(void 0===window.IntersectionObserver&&void 0!==r){const i=e.getBoundingClientRect();return t(r,{isIntersecting:r,target:e,intersectionRatio:"number"==typeof n.threshold?n.threshold:0,time:0,boundingClientRect:i,intersectionRect:i,rootBounds:i}),()=>{}}const{id:i,observer:a,elements:o}=function(e){const t=_a(e);let n=ba.get(t);if(!n){const r=new Map;let i;const a=new IntersectionObserver(t=>{t.forEach(t=>{var n;const a=t.isIntersecting&&i.some(e=>t.intersectionRatio>=e);e.trackVisibility&&void 0===t.isVisible&&(t.isVisible=a),[...null!=(n=r.get(t.target))?n:[]].forEach(e=>{e(a,t)})})},e);i=a.thresholds||(Array.isArray(e.threshold)?e.threshold:[e.threshold||0]),n={id:t,observer:a,elements:r},ba.set(t,n)}return n}(n),s=o.get(e)||[];return o.has(e)||o.set(e,s),s.push(t),a.observe(e),function(){s.splice(s.indexOf(t),1),0===s.length&&(o.delete(e),a.unobserve(e)),0===o.size&&(a.disconnect(),ba.delete(i))}}function ja({threshold:e,delay:t,trackVisibility:n,rootMargin:r,root:i,triggerOnce:a,skip:o,initialInView:s,fallbackInView:l,onChange:u}={}){var c;const[d,p]=h.useState(null),f=h.useRef(u),m=h.useRef(s),[g,y]=h.useState({inView:!!s,entry:void 0});f.current=u,h.useEffect(()=>{if(void 0===m.current&&(m.current=s),o||!d)return;let u;return u=Sa(d,(e,t)=>{const n=m.current;m.current=e,(void 0!==n||e)&&(y({inView:e,entry:t}),f.current&&f.current(e,t),t.isIntersecting&&a&&u&&(u(),u=void 0))},{root:i,rootMargin:r,threshold:e,trackVisibility:n,delay:t},l),()=>{u&&u()}},[Array.isArray(e)?e.toString():e,d,i,r,a,o,n,l,t]);const v=null==(c=g.entry)?void 0:c.target,x=h.useRef(void 0);d||!v||a||o||x.current===v||(x.current=v,y({inView:!!s,entry:void 0}),m.current=s);const b=[p,g.inView,g.entry];return b.ref=b[0],b.inView=b[1],b.entry=b[2],b}const Ta=pn`
  from {
    opacity: 0;
    transform: perspective(1200px) rotateX(-12deg) scale(0.94) translateY(40px);
  }
  to {
    opacity: 1;
    transform: perspective(1200px) rotateX(0deg) scale(1) translateY(0);
  }
`,Ca=pn`
  from {
    opacity: 1;
    transform: perspective(1200px) rotateX(0deg) scale(1) translateY(0);
  }
  to {
    opacity: 0;
    transform: perspective(1200px) rotateX(-10deg) scale(0.95) translateY(40px);
  }
`,Ea=cn.div`
  position: fixed;
  inset: 0;
  background: rgba(14, 22, 18, 0.55);
  backdrop-filter: blur(8px);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
  padding: 24px;
`,Pa=cn.div`
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

  animation: ${({$closing:e})=>e?sn`
          ${Ca} 0.45s cubic-bezier(0.22, 0.61, 0.36, 1)
        `:sn`
          ${Ta} 0.55s cubic-bezier(0.22, 0.61, 0.36, 1)
        `};

  @media (max-width: 768px) {
    align-self: flex-end;
    transform-origin: center bottom;
  }
`,Ma=cn.button`
  position: absolute;
  top: 18px;
  right: 18px;
  border: none;
  background: #eef4f1;
  width: 36px;
  height: 36px;
  border-radius: 50%;
  cursor: pointer;
`,Aa=({isOpen:e,onClose:t,children:n})=>{const[r,i]=h.useState(!1),a=h.useCallback(()=>{r||(document.body.style.overflow="auto",i(!0),window.setTimeout(()=>{i(!1),t()},450))},[r,t]);return h.useEffect(()=>{if(!e)return;document.body.style.overflow="hidden";const t=e=>{"Escape"===e.key&&a()};return window.addEventListener("keydown",t),()=>{window.removeEventListener("keydown",t),document.body.style.overflow="auto"}},[a,e]),e?Zr.createPortal(d.jsx(Ea,{onClick:a,children:d.jsxs(Pa,{$closing:r,role:"dialog","aria-modal":"true",onClick:e=>e.stopPropagation(),children:[d.jsx(Ma,{onClick:a,"aria-label":"Close dialog",children:"✕"}),n]})}),document.body):null},Ra=cn.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`,za=cn.h2`
  font-size: 26px;
  font-weight: 600;
  color: #1f3d2b;
`,Da=cn.div`
  padding-left: 4px;
`,$a=cn.h4`
  font-size: 17px;
  font-weight: 600;
  color: #24312d;
  margin-bottom: 6px;
`,La=cn.p`
  font-size: 14.5px;
  color: #2b2a29;
  opacity: 0.8;
`,Oa=cn.button`
  padding: 16px 36px;
  border-radius: 999px;
  border: none;

  background: linear-gradient(135deg, #7fb6a1 0%, #5f9f86 100%);

  color: #ffffff;
`,Ia=({title:e,packages:t,cta:n})=>{const r=ur();return d.jsxs(Ra,{children:[d.jsx(za,{children:e}),t.map(e=>d.jsxs(Da,{children:[d.jsx($a,{children:e.title}),d.jsx(La,{children:e.note})]},e.title)),d.jsx(Oa,{onClick:()=>{r("/yoga")},children:n})]})},Na=cn.div`
  display: flex;
  flex-direction: column;
  gap: 28px;
`,Fa=cn.h2`
  font-size: 26px;
  font-weight: 600;
  color: #1f3d2b;
`,Va=cn.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`,Ba=cn.button`
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
`,Ua=({onSelect:e})=>{const t=ur(),n=n=>{e?.(),t(n)};return d.jsxs(Na,{children:[d.jsx(Fa,{children:"Book a Session"}),d.jsxs(Va,{children:[d.jsxs(Ba,{onClick:()=>n("/yoga"),children:[d.jsx("h4",{children:"Yoga"}),d.jsx("p",{children:"Personal & therapeutic yoga sessions"})]}),d.jsxs(Ba,{onClick:()=>n("/ayurveda"),children:[d.jsx("h4",{children:"Ayurveda"}),d.jsx("p",{children:"Holistic healing & lifestyle guidance"})]}),d.jsxs(Ba,{onClick:()=>n("/nutrition"),children:[d.jsx("h4",{children:"Nutrition"}),d.jsx("p",{children:"Mindful & clinical nutrition support"})]})]})]})},Wa=ci.home.heroSlides[0],Ya=()=>{const{ref:e,inView:t}=ja({triggerOnce:!0,threshold:.3}),[n,r]=h.useState(!1),[i,a]=h.useState(!1),[o,s]=h.useState(!1),l=ci.home.homeHeroWatercolorIllustration,u=l?.alt,c=!o&&l?l.mobile:Wa,p=!o&&l?l.desktop:Wa;return d.jsxs(ua,{ref:e,children:[d.jsx(ca,{children:d.jsxs(da,{children:[!o&&l?d.jsx("source",{media:"(min-width: 768px)",srcSet:p}):null,d.jsx(ha,{src:c,alt:u,loading:"eager",decoding:"async",fetchPriority:"high",onError:()=>s(!0)})]})}),d.jsxs(xa,{$visible:t,children:[d.jsxs(fa,{children:[d.jsx(ma,{children:"Balance with Shree"}),d.jsx(ga,{children:d.jsxs("h1",{children:["BALANCE",d.jsx("br",{}),"WITH SHREE"]})}),d.jsxs(ya,{children:[d.jsx(oi,{variant:"primary",size:"lg",onClick:()=>r(!0),children:"Explore Packages"}),d.jsx(oi,{variant:"secondary",size:"lg",onClick:()=>a(!0),children:"Book a Session"}),d.jsx(Aa,{isOpen:n,onClose:()=>r(!1),children:d.jsx(Ia,{title:"Wellness Packages",packages:[{title:"Group Yoga (Online / Offline)",note:"✔ Fees for group sessions are fixed."},{title:"Private Yoga (Personal Training)",note:"✔ Private sessions are customised based on individual needs."},{title:"Prenatal Yoga (Private)",note:"✔ Special cases are discussed after consultation."}],cta:"Start Your Journey"})}),d.jsx(Aa,{isOpen:i,onClose:()=>a(!1),children:d.jsx(Ua,{onSelect:()=>a(!1)})})]})]}),d.jsx(va,{})]})]})},Ha=cn.section`
  padding: 0 0 96px;
  @media (max-width: 768px) {
    padding: 0 0 72px;
  }
`,qa=cn.div`
  max-width: 1100px;
  margin: 0 auto;
`,Xa=cn.div`
  display: grid;
  grid-template-columns: 1.1fr 0.9fr;
  gap: 32px;
  padding: 32px;
  background: linear-gradient(
    180deg,
    rgba(255, 255, 255, 0.92),
    rgba(251, 249, 243, 0.94)
  );
  border-radius: 34px;
  border: 1px solid rgba(122, 160, 143, 0.14);
  box-shadow: 0 24px 60px rgba(15, 60, 40, 0.1);

  @media (max-width: 900px) {
    grid-template-columns: 1fr;
    padding: 22px;
  }
`,Ga=cn.div`
  display: flex;
  flex-direction: column;
`,Ka=cn.div`
  border-radius: 26px;
  overflow: hidden;
  align-self: stretch;
  min-height: 100%;
  background: linear-gradient(180deg, rgba(244, 250, 246, 0.9), rgba(238, 246, 241, 0.94));
`,Qa=cn.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  min-height: 420px;

  @media (max-width: 900px) {
    min-height: 320px;
  }
`,Za=cn.span`
  font-size: 12px;
  letter-spacing: 2.4px;
  font-weight: 600;
  color: ${({theme:e})=>e.colors.textMuted};
  margin-bottom: 14px;
`,Ja=cn.h2`
  font-size: 38px;
  line-height: 1.15;
  font-weight: 600;
  color: ${({theme:e})=>e.colors.textPrimary};
  margin-bottom: 20px;

  @media (max-width: 768px) {
    font-size: 28px;
  }
`,eo=cn.p`
  font-size: 15.8px;
  line-height: 1.75;
  color: ${({theme:e})=>e.colors.textMuted};
  margin-bottom: 28px;
  max-width: 520px;
`,to=cn.div`
  display: flex;
  flex-direction: column;
  gap: 14px;
  margin-bottom: 30px;
`,no=cn.div`
  display: grid;
  grid-template-columns: auto 1fr;
  gap: 14px;
  align-items: start;
  padding: 18px;
  border-radius: 22px;
  background: rgba(255, 255, 255, 0.72);
  border: 1px solid rgba(122, 160, 143, 0.12);
  box-shadow: 0 12px 28px rgba(15, 60, 40, 0.06);
`,ro=cn.span`
  width: 40px;
  height: 40px;
  border-radius: 14px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  background: rgba(31, 95, 74, 0.08);
  color: ${({theme:e})=>e.colors.primary};
`,io=cn.h4`
  font-size: 17px;
  font-weight: 600;
  color: ${({theme:e})=>e.colors.textPrimary};
  margin-bottom: 6px;
`,ao=cn.p`
  font-size: 14.6px;
  line-height: 1.6;
  color: ${({theme:e})=>e.colors.textMuted};
`,oo=[{title:"Therapeutic Yoga",text:"Address posture, pain, stress, digestion, and nervous system balance through personalised movement and breath.",icon:Ni},{title:"Group Yoga",text:"Structured sessions focused on consistency, strength, flexibility, and mindful movement — online or offline.",icon:Oi},{title:"Prenatal & Postnatal Yoga",text:"Gentle, supportive practices designed for pregnancy recovery and postnatal healing, guided with care.",icon:Xi}],so=()=>d.jsx(Ha,{children:d.jsx(qa,{children:d.jsxs(Xa,{children:[d.jsxs(Ga,{children:[d.jsx(Za,{children:"YOGA"}),d.jsxs(Ja,{children:["Yoga that supports",d.jsx("br",{}),"your body & life"]}),d.jsx(eo,{children:"Yoga at Balance with Shree is therapeutic, mindful, and deeply personalised. The focus is not on flexibility or intensity, but on creating strength, stability, awareness, and calm — in a way that supports your daily life."}),d.jsx(to,{children:oo.map(({title:e,text:t,icon:n})=>d.jsxs(no,{children:[d.jsx(ro,{children:d.jsx(n,{size:18,strokeWidth:1.9})}),d.jsxs("div",{children:[d.jsx(io,{children:e}),d.jsx(ao,{children:t})]})]},e))}),d.jsxs(oi,{to:"/yoga",variant:"secondary",size:"lg",children:["Explore Yoga ",d.jsx("span",{children:"→"})]})]}),d.jsx(Ka,{children:d.jsx(Qa,{src:ci.home.yogaPreview,alt:"Yoga with Shree",loading:"lazy",decoding:"async"})})]})})}),lo=cn.section`
  width: 100%;
  padding: ${({$compact:e})=>e?"72px 0 0":"120px 0"};
  display: flex;
  justify-content: center;

  @media (max-width: 768px) {
    padding: ${({$compact:e})=>e?"56px 0 0":"80px 0"};
  }
`,uo=cn.div`
  max-width: 1100px;
  width: 100%;
  display: grid;
  grid-template-columns: ${({$compact:e})=>e?"1.05fr 0.95fr":"1.2fr 1fr"};
  background: ${({$compact:e})=>e?"linear-gradient(180deg, rgba(255,255,255,0.92), rgba(251,249,243,0.96))":"#f7f3f7"};
  border-radius: ${({$compact:e})=>e?"34px":"24px"};
  overflow: hidden;
  border: ${({$compact:e})=>e?"1px solid rgba(122, 160, 143, 0.14)":"none"};
  box-shadow: ${({$compact:e})=>e?"0 24px 60px rgba(15, 60, 40, 0.1)":"none"};

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`,co=cn.div`
  padding: ${({$compact:e})=>e?"40px 32px":"72px 80px"};
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 16px;

  h3 {
    font-size: ${({$compact:e})=>e?"2.25rem":"32px"};
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
    color: #18775e;
    letter-spacing: ${({$compact:e})=>e?"0.04em":"0.18em"};
    cursor: pointer;
    font-size: 14px;
    width: max-content;
    padding: 0;
  }

  @media (max-width: 768px) {
    padding: 32px 24px 28px;
    text-align: left;

    h3 {
      font-size: 24px;
    }

    p {
      max-width: none;
    }
  }
`,ho=pn`
  from { opacity: 0; transform: translateX(-40px); }
  to   { opacity: 1; transform: translateX(0); }
`,po=cn(co)`
  opacity: ${({$visible:e})=>e?1:0};
  transform: ${({$visible:e})=>e?"translateX(0)":"translateX(-40px)"};
  animation: ${({$visible:e})=>e?ho:"none"} 0.8s
    cubic-bezier(0.22, 0.61, 0.36, 1) forwards;
  transition: opacity 0.6s ease-out, transform 0.6s ease-out;
`,fo=cn.img`
  width: 100%;
  height: ${({$compact:e})=>"100%"};
  object-fit: cover;
  min-height: ${({$compact:e})=>e?"440px":"unset"};

  @media (max-width: 768px) {
    height: ${({$compact:e})=>e?"320px":"260px"};
    object-fit: ${({$compact:e})=>e?"cover":"contain"};
    min-height: unset;
  }
`,mo=({showFull:e=!1})=>{const{ref:t,inView:n}=ja({triggerOnce:!0,threshold:.25}),r=ur();return d.jsx(lo,{ref:t,$compact:!e,children:d.jsxs(uo,{$compact:!e,children:[d.jsxs(po,{$visible:n,$compact:!e,children:[d.jsx("h3",{children:"Hi, I am Dhanashree"}),d.jsx("p",{children:"a Clinical Nutritionist & Yoga Therapist, and the founder of Balance with Shree. I help people build a healthy relationship with food, movement, and their bodies — not through extreme diets or quick fixes, but through simple, sustainable, and mindful lifestyle changes."}),e?d.jsxs(d.Fragment,{children:[d.jsx("p",{children:"From dance and acrobatics to yoga and mindful living, movement has always been my way of connecting with myself. During a pause in life, I found clarity through yoga and nutrition—building strength, balance, and discipline from within."}),d.jsx("p",{children:"Balance with Shree was born from this personal transformation—a space where yoga, nutrition, and mindful living come together in a practical, sustainable way."})]}):d.jsxs(d.Fragment,{children:[d.jsx("p",{children:"Through yoga, nutrition, and mindful living, I help you find balance that feels calm, sustainable, and deeply personal."}),d.jsx("button",{onClick:()=>r("/about"),children:"...Read more"})]})]}),d.jsx(fo,{src:ci.home.journeyPortrait,alt:"Yoga teacher",loading:"lazy",decoding:"async",$compact:!e})]})})},go=cn.section`
  padding: 0 0 72px;
`,yo=cn.div`
  width: 100%;
  max-width: 1100px;
  margin: 0 auto;

  text-align: left;
  padding: 32px;
  background: linear-gradient(
    180deg,
    rgba(255, 255, 255, 0.92),
    rgba(244, 250, 246, 0.94)
  );
  border-radius: 34px;
  border: 1px solid rgba(122, 160, 143, 0.14);
  box-shadow: 0 24px 60px rgba(15, 60, 40, 0.1);

  @media (max-width: 768px) {
    padding: 24px 20px;
    border-radius: 28px;
  }
`,vo=cn.h2`
  font-size: 34px;
  font-weight: 600;
  letter-spacing: -0.4px;
  color: ${({theme:e})=>e.colors.textPrimary};

  @media (max-width: 768px) {
    font-size: 26px;
  }
`,xo=cn.p`
  max-width: 640px;
  margin: 18px 0 28px;
  font-size: 16px;
  line-height: 28px;
  color: ${({theme:e})=>e.colors.textMuted};

  @media (max-width: 768px) {
    margin-bottom: 44px;
    font-size: 15px;
  }
`,bo=cn.div`
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 16px;
  margin-bottom: 28px;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`,wo=cn.div`
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 18px;
  border-radius: 22px;
  background: rgba(255, 255, 255, 0.78);
  border: 1px solid rgba(122, 160, 143, 0.14);
  box-shadow: 0 12px 26px rgba(15, 60, 40, 0.08);

  transition:
    transform 0.25s ease,
    box-shadow 0.25s ease;

  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 18px 40px rgba(15, 60, 40, 0.12);
  }
`,ko=cn.span`
  width: 36px;
  height: 36px;
  border-radius: 14px;
  background: rgba(31, 95, 74, 0.08);
  color: ${({theme:e})=>e.colors.primary};
  display: inline-flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
`,_o=cn.span`
  font-family: ${({theme:e})=>e.fonts.body};
  font-size: 15px;
  font-weight: 600;
  color: ${({theme:e})=>e.colors.textSecondary};
`,So=[{label:"Gut Health & Digestion",icon:$i},{label:"Hormonal & Metabolic Balance",icon:Ni},{label:"Sustainable Food Habits",icon:Bi}];function jo(){return d.jsx(go,{children:d.jsxs(yo,{children:[d.jsx(vo,{children:"Nourish with Awareness"}),d.jsx(xo,{children:"Personalised nutrition that supports digestion, hormones, and energy — rooted in mindful eating, lifestyle balance, and Indian home food."}),d.jsx(bo,{children:So.map(({label:e,icon:t})=>d.jsxs(wo,{children:[d.jsx(ko,{children:d.jsx(t,{size:16,strokeWidth:1.9})}),d.jsx(_o,{children:e})]},e))}),d.jsx(oi,{to:"/nutrition",variant:"outline",style:{marginTop:"30px"},children:"Explore Nutrition"})]})})}const To=cn.div`
  margin: 0 20px;
`,Co=cn.section`
  ${({$tone:e="transparent",theme:t})=>"soft"===e?sn`
        background: linear-gradient(180deg, ${t.colors.bgPrimary} 0%, ${t.colors.bgSecondary} 100%);
        border: 1px solid ${t.colors.borderLight};
        border-radius: ${t.radius.xl};
      `:"ivory"===e?sn`
        background: rgba(255, 255, 255, 0.86);
        border: 1px solid rgba(255, 255, 255, 0.72);
        border-radius: ${t.radius.xl};
      `:sn``}
`,Eo=cn.div`
  width: min(100%, ${({$narrow:e})=>e?"840px":"1100px"});
  margin: 0 auto;
`,Po=cn.div`
  ${({theme:e,$tone:t="default",$padding:n="lg"})=>sn`
    background: ${"soft"===t?"linear-gradient(180deg, rgba(255,255,255,0.82), rgba(244,250,246,0.92))":"rgba(255, 255, 255, 0.92)"};
    border: 1px solid ${e.colors.borderLight};
    border-radius: ${e.radius.xl};
    padding: ${"lg"===n?"32px":"24px"};
    box-shadow: ${e.shadows.card};
    backdrop-filter: blur(10px);
    -webkit-backdrop-filter: blur(10px);
  `}
`;cn(Po)``;const Mo=cn(Po)``;cn(Po)``,cn(Po)``,cn(Po)``,cn(Po)`
  position: relative;
  overflow: hidden;

  &::after {
    content: "";
    position: absolute;
    inset: 0;
    pointer-events: none;
    background: radial-gradient(circle at top right, rgba(122, 160, 143, 0.12), transparent 42%);
  }
`;const Ao=cn.div`
  text-align: ${({$align:e="left"})=>e};
  max-width: 720px;
  margin: ${({$align:e="left"})=>"center"===e?"0 auto":"0"};
`,Ro=cn.span`
  display: inline-block;
  margin-bottom: 12px;
  font-family: ${({theme:e})=>e.fonts.body};
  font-size: 12px;
  font-weight: 600;
  letter-spacing: 0.18em;
  text-transform: uppercase;
  color: ${({theme:e})=>e.colors.textSecondary};
`,zo=cn.h2`
  margin: 0;
  color: ${({theme:e})=>e.colors.textPrimary};
  font-size: clamp(2rem, 3vw, 3rem);
  line-height: 1.08;
`,Do=cn.p`
  margin-top: 16px;
  font-size: 16px;
  line-height: 1.75;
  color: ${({theme:e})=>e.colors.textMuted};
`,$o=({eyebrow:e,title:t,description:n,align:r="left",as:i="h2"})=>d.jsxs(Ao,{$align:r,children:[e?d.jsx(Ro,{children:e}):null,d.jsx(zo,{as:i,children:t}),n?d.jsx(Do,{children:n}):null]}),Lo=cn.section`
  padding: 56px 0 96px;
  @media (max-width: 768px) {
    padding: 40px 0 72px;
  }
`,Oo=cn.div`
  max-width: 1100px;
  margin: 0 auto;
  display: flex;
  justify-content: center;
`,Io=cn.div`
  width: 100%;
  max-width: 980px;
  text-align: center;
  padding: 36px 0 0;

  @media (max-width: 768px) {
    padding: 20px 0 0;
  }
`,No=cn.div`
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 18px;
  margin-top: 32px;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`,Fo=cn(Mo)`
  display: flex;
  align-items: center;
  gap: 14px;
  min-height: 92px;
  padding: 22px;
  text-align: left;
`,Vo=cn.span`
  width: 42px;
  height: 42px;
  border-radius: 16px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  background: rgba(31, 95, 74, 0.08);
  color: ${({theme:e})=>e.colors.primary};
  flex-shrink: 0;
`,Bo=cn.span`
  font-family: ${({theme:e})=>e.fonts.body};
  font-size: 15px;
  font-weight: 600;
  color: ${({theme:e})=>e.colors.textPrimary};
`,Uo=[{label:"Group Yoga",icon:Oi},{label:"Private Yoga",icon:Ii},{label:"Prenatal Yoga",icon:Xi}],Wo=()=>d.jsx(Lo,{children:d.jsx(Oo,{children:d.jsxs(Io,{children:[d.jsx($o,{align:"center",title:"Yoga Packages",description:"Yoga packages available as group sessions, personalised private training, and specialised prenatal support — with guidance tailored to individual needs and consultation."}),d.jsx(No,{children:Uo.map(({label:e,icon:t})=>d.jsxs(Fo,{children:[d.jsx(Vo,{children:d.jsx(t,{size:18,strokeWidth:1.9})}),d.jsx(Bo,{children:e})]},e))})]})})}),Yo=cn.div`
  width: 100%;
  overflow-x: hidden;
`,Ho=cn.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 20px;
  padding-bottom: 24px;

  @media (min-width: 992px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
    align-items: start;
  }
`,qo=()=>d.jsx(Yo,{children:d.jsxs(To,{children:[d.jsx(Ya,{}),d.jsx(mo,{}),d.jsx(Wo,{}),d.jsx(so,{}),d.jsxs(Ho,{children:[d.jsx(jo,{}),d.jsx(sa,{})]})]})}),Xo=cn.section`
  padding: 120px 20px;
  background: #faf9f6;
  margin-bottom: 125px;
  border-radius: 24px;

  // opacity: 0;
  transform: translateY(40px);
  transition: all 0.8s ease;

  &.visible {
    opacity: 1;
    transform: translateY(0);
  }
`,Go=cn.div`
  max-width: 1200px;
  margin: 0 auto;
  text-align: center;
  display: flex;
  flex-direction: column;
  gap: 32px;
`,Ko=cn.span`
  font-size: 13px;
  letter-spacing: 0.18em;
  text-transform: uppercase;
  color: #9bb7a5;
`,Qo=cn.h2`
  font-size: 36px;
  font-weight: 500;
  color: #1f2a24;

  @media (max-width: 768px) {
    font-size: 28px;
  }
`,Zo=cn.div`
  width: 48px;
  height: 2px;
  background: #9bb7a5;
  margin: 12px auto 32px;
`,Jo=cn.div`
  overflow: hidden;
  perspective: 2000px;
  width: 100%;
  position: relative;

  touch-action: pan-y;
`,es=cn.div`
  display: flex;
  will-change: transform;

  transform: translate3d(${({$x:e})=>e}px, 0, 0);
  transition: ${({$animate:e})=>e?"transform 850ms cubic-bezier(0.22, 1, 0.36, 1)":"none"};
`,ts=cn.div`
  position: relative;
  flex: 0 0 100%;
  height: 360px;
  border-radius: 36px;
  padding: 28px;

  display: flex;
  flex-direction: column;
  justify-content: center;

  overflow: hidden;

  /* inactive */
  transform: translateZ(-260px) scale(0.82) rotateY(-12deg);
  filter: blur(10px);
  opacity: 0.25;

  transition:
    transform 0.85s cubic-bezier(0.22, 1, 0.36, 1),
    filter 0.85s cubic-bezier(0.22, 1, 0.36, 1),
    opacity 0.85s cubic-bezier(0.22, 1, 0.36, 1);

  &::before {
    content: "";
    position: absolute;
    inset: 0;
    border-radius: inherit;
    padding: 2px;

    background: conic-gradient(
      from 180deg,
      rgba(155, 183, 165, 0.95),
      rgba(255, 255, 255, 0.4),
      rgba(155, 183, 165, 0.95)
    );

    -webkit-mask:
      linear-gradient(#000 0 0) content-box,
      linear-gradient(#000 0 0);
    -webkit-mask-composite: xor;
    mask-composite: exclude;

    opacity: 0.25;
    transform: rotate(-2deg);
    transition:
      opacity 0.6s ease,
      transform 0.85s cubic-bezier(0.22, 1, 0.36, 1);
    pointer-events: none;
  }

  &.active {
    transform: translateZ(0) scale(1) rotateY(0deg);
    filter: blur(0);
    opacity: 1;
    z-index: 3;

    &::before {
      opacity: 1;
      transform: rotate(0deg);
    }
  }

  &.yoga {
    background: linear-gradient(180deg, #ffffff, #f6faf8);
    box-shadow: 0px 60px 120px rgba(150, 199, 181, 0.35);
  }
  &.nutrition {
    background: linear-gradient(180deg, #ffffff, #f3f6fa);
    box-shadow: 0px 60px 120px rgba(10, 74, 166, 0.25);
  }
  &.ayurveda {
    background: linear-gradient(180deg, #fffaf3, #f5efe3);
    box-shadow: 0px 60px 120px rgba(217, 154, 66, 0.35);
  }
  &.training {
    background: linear-gradient(180deg, #ffffff, #f7f7f7);
    box-shadow: 0px 60px 120px rgba(54, 54, 54, 0.35);
  }

  &.yoga::before {
    background: conic-gradient(from 180deg, #9bb7a5, #f6faf8, #9bb7a5);
  }
  &.nutrition::before {
    background: conic-gradient(from 180deg, #0a4aa6, #f3f6fa, #0a4aa6);
  }
  &.ayurveda::before {
    background: conic-gradient(from 180deg, #d99a42, #fffaf3, #d99a42);
  }
  &.training::before {
    background: conic-gradient(from 180deg, #363636, #f7f7f7, #363636);
  }

  @media (max-width: 768px) {
    height: 300px;
  }
`,ns=cn.img`
  width: 100%;
  height: 240px; /* ⬆ slightly taller = more width visible */
  object-fit: contain; /* ✅ no crop */
  object-position: center;

  border-radius: 20px;
  padding: 10px 12px; /* ⬅ MUCH LESS padding (this is key) */

  background: transparent;

  &.yoga {
    background: #f6faf8;
  }
  &.nutrition {
    background: #f3f6fa;
  }
  &.ayurveda {
    background: #f5efe3;
  }
  &.training {
    background: #f7f7f7;
  }

  @media (max-width: 768px) {
    height: 210px;
    padding: 8px 10px;
  }
`,rs=cn.p`
  margin-top: 18px;
  font-size: 16px;
  font-weight: 500;
  color: #1f2a24;
`,is=cn.div`
  display: flex;
  justify-content: center;
  gap: 10px;
  margin-top: 24px;
`,as=cn.div`
  width: ${({$active:e})=>e?"28px":"8px"};
  height: 8px;
  border-radius: 999px;
  background: ${({$active:e})=>e?"#9bb7a5":"#d8e2da"};
  cursor: pointer;
  transition: all 0.4s ease;
`;cn.div`
  position: fixed;
  inset: 0;
  z-index: 99999;

  // background: rgba(15, 20, 18, 0.85);
  backdrop-filter: blur(6px);

  display: flex;
  align-items: center;
  justify-content: center;

  overscroll-behavior: contain;
`,cn.div`
  max-width: 92vw;
  max-height: 92vh;

  display: flex;
  align-items: center;
  justify-content: center;

  padding: 20px;
  background: transparent;
`;const os=cn.div`
  position: fixed;
  inset: 0;
  z-index: 99999;

  // background: rgba(14, 18, 16, 0.9);
  backdrop-filter: blur(8px);

  display: flex;
  align-items: center;
  justify-content: center;
  padding: 24px;
`,ss=cn.div`
  position: relative;
  width: 100%;
  max-width: 1100px;
  max-height: 90vh;

  background: #ffffff;
  border-radius: 20px;
  padding: 24px;

  display: flex;
  align-items: center;
  justify-content: center;

  box-shadow: 0 60px 140px rgba(0, 0, 0, 0.45);

  @media (max-width: 768px) {
    padding: 16px;
    border-radius: 16px;
  }
`,ls=cn.img`
  width: 100%;
  height: auto;
  max-height: calc(90vh - 48px);

  object-fit: contain;
  display: block;
`,us=cn.button`
  position: absolute;
  top: 14px;
  right: 14px;

  width: 36px;
  height: 36px;
  border-radius: 50%;

  border: none;
  background: rgba(0, 0, 0, 0.05);
  color: #1f2a24;

  font-size: 18px;
  cursor: pointer;

  display: flex;
  align-items: center;
  justify-content: center;

  transition: background 0.25s ease;

  &:hover {
    background: rgba(0, 0, 0, 0.1);
  }
`,cs=[{image:ci.about.certifications[0],title:"Medical Yoga Teacher Certification",variant:"yoga"},{image:ci.about.certifications[1],title:"Parental Yoga Certification",variant:"nutrition"},{image:ci.about.certifications[2],title:"Hatha and Ashtanga Yoga Certification",variant:"ayurveda"}];function ds(){const e=h.useRef(null),t=cs.length,n=h.useMemo(()=>[...cs,...cs,...cs],[]),r=t,[i,a]=h.useState(r),[o,s]=h.useState(!0),[l,u]=h.useState(0),[c,p]=h.useState(null),f=h.useRef(null);h.useLayoutEffect(()=>{const t=e.current;if(!t)return;const n=()=>u(t.clientWidth);n();const r=new ResizeObserver(n);return r.observe(t),()=>r.disconnect()},[]),h.useEffect(()=>(f.current=setInterval(()=>{a(e=>e+1)},4e3),()=>{f.current&&clearInterval(f.current)}),[]);const m=h.useRef(0),g=-i*(l||1);return t?d.jsxs(Xo,{children:[d.jsxs(Go,{children:[d.jsx(Ko,{children:"Experience & Learning"}),d.jsx(Qo,{children:"Professional Certifications"}),d.jsx(Zo,{}),d.jsx(Jo,{ref:e,onPointerDown:e=>{m.current=e.clientX},onPointerUp:e=>{const t=m.current-e.clientX;Math.abs(t)<40||a(e=>t>0?e+1:e-1)},children:d.jsx(es,{$animate:o,$x:g,onTransitionEnd:()=>{if(i>=2*t)return s(!1),a(e=>e-t),void requestAnimationFrame(()=>s(!0));i<t&&(s(!1),a(e=>e+t),requestAnimationFrame(()=>s(!0)))},children:n.map((e,t)=>d.jsxs(ts,{className:`${e.variant} ${t===i?"active":""}`,children:[d.jsx(ns,{src:e.image,alt:e.title,loading:"lazy",decoding:"async",className:e.variant,onClick:()=>p({src:e.image,title:e.title})}),d.jsx(rs,{children:e.title})]},t))})}),d.jsx(is,{children:cs.map((e,n)=>d.jsx(as,{$active:n===i%t,onClick:()=>a(r+n)},n))})]}),c&&d.jsx(os,{onClick:()=>p(null),children:d.jsxs(ss,{onClick:e=>e.stopPropagation(),children:[d.jsx(us,{onClick:()=>p(null),children:"✕"}),d.jsx(ls,{src:c.src,alt:c.title})]})})]}):null}const hs=[{id:1,side:"left",label:"The Beginning — Ignoring My Health",image:ci.about.journeyTimeline.step1,illustration:null,alt:"Where it all began (2019–2020)",paragraphs:["Back in 2019–20, I was severely underweight, weighing just 39 kg. I was into fitness or dance, and I wasn't mindful about what or how I was eating. My immunity was low, my digestion was constantly disturbed, and I ignored my body's signals for a long time."]},{id:2,side:"right",label:"The Wake-Up Call — COVID & Hyperacidity",image:ci.about.journeyTimeline.step2,illustration:null,alt:"The turning point – COVID & health breakdown",paragraphs:["During the COVID phase, my health worsened. I suffered from frequent stomach issues, acid reflux, and was eventually diagnosed with hyperacidity. At one point, even breathing felt difficult. Doctors clearly told me that my eating habits, sleep cycle, and lifestyle were the root cause."]},{id:3,side:"left",label:"Choosing Awareness Over Neglect",image:ci.about.journeyTimeline.step3,illustration:null,alt:"Awareness → Action",paragraphs:["Interestingly, I was already studying Nutrition & Dietetics, but this experience made everything real. I realized that knowing nutrition is one thing, but living it mindfully is another."]},{id:4,side:"right",label:"Healing Through Food, Yoga & Belief",image:ci.about.journeyTimeline.step1,illustration:null,alt:"Healing through belief, food & movement",paragraphs:["I began making small, consistent changes — eating with awareness, restoring my sleep cycle, introducing yoga and gentle movement, and practicing kinder self-talk and body awareness. Slowly, I shifted from fighting my body to trusting it. Over time, my weight increased from 39 kg to 45 kg, my digestion improved, and my energy returned — something years of random eating and irregular living had never given me."]},{id:5,side:"left",label:"Turning My Journey into My Purpose",image:ci.about.journeyTimeline.step2,illustration:null,alt:"From self-healing to serving others",paragraphs:["What began as self-healing gradually became my purpose. This journey taught me that health is not created through extremes, punishment, or quick fixes — but through consistency, awareness, and compassion. Today, I help others build a balanced relationship with food, movement, and their bodies, in a way that feels sustainable and deeply personal."]}],ps=cn.section`
  width: 100%;
  max-width: 1100px;
  margin: 80px auto;
  padding: 0 24px;
`,fs=cn.h2`
  text-align: center;
  font-size: 28px;
  font-weight: 700;
  margin-bottom: 56px;
`,ms=cn.div`
  position: relative;
`,gs=cn.div`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  border-left: 2px dashed #96c7b5;

  @media (max-width: 768px) {
    left: 24px;
    transform: none;
  }
`,ys=cn.div`
  position: absolute;
  left: 50%;
  transform: translate(-50%, ${({$y:e})=>e}px);
  z-index: 10;

  @media (max-width: 768px) {
    left: 24px;
  }
`,vs=cn.div`
  width: 18px;
  height: 18px;
  border-radius: 50%;
  background: #ffffff;
  border: 2px solid #96c7b5;
  box-shadow: 0 0 0 6px rgba(150, 199, 181, 0.25);
  .active {
    animation: pulse 1.2s ease-out;
  }

  @keyframes pulse {
    0% {
      transform: scale(1);
      opacity: 1;
    }
    50% {
      transform: scale(1.4);
      opacity: 0.6;
    }
    100% {
      transform: scale(1);
      opacity: 1;
    }
  }
`,xs=cn.div`
  position: relative;
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 40px;
  margin-bottom: 80px;
  align-items: center;

  & > div:nth-child(1) {
    order: ${({$align:e})=>"left"===e?1:2};
    margin-left: ${({$align:e})=>"left"===e?"25%":0};
    margin-right: ${({$align:e})=>"left"===e?"0":"25%"};
  }

  & > div:nth-child(2) {
    order: ${({$align:e})=>"left"===e?2:1};
    // margin-right: ${({align:e})=>"0"};
  }

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 16px;
    padding-left: 64px;
    div:nth-child(1) {
      margin: 0;
    }
    & > div {
      order: unset;
      margin: 0;
    }
  }
`,bs=cn.div`
  // width: 360px;
  height: 240px;
  border-radius: 18px;
  overflow: hidden;
  box-shadow: 0 16px 40px rgba(0, 0, 0, 0.18);

  @media (max-width: 768px) {
    width: 100%;
    height: 200px;
  }
`,ws=cn.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`,ks=cn.div`
  // max-width: 420px;
  color: black;
  line-height: 1.6;
  background: white;
  box-shadow: 0 14px 26px rgba(0, 0, 0, 0.2);
  border-radius: 24px 0px 24px 24px;
  padding: 10px;
  text-align: justify;
  &:nth-child(2) {
  }
  &:nth-child(1) {
    border-radius: 0px 24px 24px 24px;
  }
  .timeline-label {
    display: inline-block;
    margin-bottom: 12px;

    font-size: 13px;
    font-weight: 600;
    letter-spacing: 0.04em;
    text-transform: uppercase;

    color: #0a2e65; /* your primary text color */

    position: relative;
  }

  .timeline-label::before {
    content: "";
    position: absolute;
    left: -32px;
    top: 50%;
    width: 20px;
    height: 1px;
    background: rgba(10, 46, 101, 0.25);
    transform: translateY(-50%);
  }

  p {
    margin: 0;
  }

  @media (max-width: 768px) {
    max-width: 100%;
    text-align: justify;
  }
`;cn.span`
  font-weight: 700;
`;const _s=pn`
  from { opacity: 0; transform: translateX(-40px); }
  to   { opacity: 1; transform: translateX(0); }
`,Ss=pn`
  from { opacity: 0; transform: translateX(40px); }
  to   { opacity: 1; transform: translateX(0); }
`,js=cn.div`
  opacity: ${({$visible:e})=>e?1:0};
  animation: ${({$visible:e,$side:t})=>e?"left"===t?_s:Ss:"none"}
    700ms ease-out both;

  @media (max-width: 768px) {
    animation: none;
    transform: ${({$visible:e})=>e?"translateY(0)":"translateY(24px)"};
    transition: transform 0.6s ease-out;
  }
`,Ts=({step:e})=>{const{ref:t,inView:n}=ja({threshold:.2});return d.jsxs(xs,{ref:t,$align:e.side,children:[d.jsx(js,{$side:e.side,$visible:n,children:d.jsx(bs,{children:d.jsx(ws,{src:e.image,alt:e.alt,loading:"lazy",decoding:"async"})})}),d.jsx(js,{$side:"left"===e.side?"right":"left",$visible:n,children:d.jsxs(ks,{children:[d.jsx("div",{className:"timeline-label",children:e.label}),d.jsx("div",{children:e.paragraphs.map(e=>d.jsx("p",{children:e},e))})]})})]})},Cs=()=>{const e=p.useRef(null),t=p.useRef([]),[n]=p.useState(0),r=p.useRef(0),i=p.useRef(0),a=p.useRef(null),[o,s]=p.useState(0);return p.useEffect(()=>{const n=new IntersectionObserver(n=>{n.forEach(n=>{if(n.isIntersecting){const r=Number(n.target.getAttribute("data-index")),a=t.current[r],o=e.current;if(!a||!o)return;const s=a.getBoundingClientRect(),l=o.getBoundingClientRect();i.current=s.top-l.top+s.height/2}})},{threshold:.5});return t.current.forEach(e=>{e&&n.observe(e)}),()=>n.disconnect()},[]),p.useEffect(()=>{const e=()=>{r.current+=.08*(i.current-r.current),s(r.current),a.current=requestAnimationFrame(e)};return a.current=requestAnimationFrame(e),()=>{null!==a.current&&cancelAnimationFrame(a.current)}},[]),d.jsxs(ps,{children:[d.jsx(fs,{children:"The journey through a timeline:"}),d.jsxs(ms,{ref:e,children:[d.jsx(gs,{}),d.jsx(ys,{$y:o,children:d.jsx(vs,{className:void 0===n?"":0===n?"active":""})}),hs.map((e,n)=>d.jsx("div",{ref:e=>t.current[n]=e,"data-index":n,children:d.jsx(Ts,{step:e})},e.id))]})]})},Es=cn.section`
  padding: 120px 20px;
  background: #faf9f6;
  border-radius: 24px;
  opacity: 0;
  transform: translateY(40px);
  transition: all 0.8s ease;

  &.visible {
    opacity: 1;
    transform: translateY(0);
  }
`,Ps=cn.div`
  max-width: 720px;
  margin: 0 auto;
  text-align: center;

  display: flex;
  flex-direction: column;
  gap: 24px;
`,Ms=cn.span`
  font-size: 13px;
  letter-spacing: 0.18em;
  text-transform: uppercase;
  color: #9bb7a5;
`,As=cn.h2`
  font-size: 36px;
  font-weight: 500;
  letter-spacing: -0.02em;
  color: #1f2a24;

  @media (max-width: 768px) {
    font-size: 28px;
  }
`,Rs=cn.div`
  width: 48px;
  height: 2px;
  background: #9bb7a5;
  margin: 12px auto;
`,zs=cn.p`
  font-size: 16px;
  line-height: 1.9;
  color: #5f6f66;

  &.bold {
    font-weight: 600;
  }
`,Ds=()=>{const{ref:e,inView:t}=ja({threshold:.25,triggerOnce:!0});return d.jsx(Es,{ref:e,className:t?"visible":"",children:d.jsxs(Ps,{children:[d.jsx(Ms,{children:"My Philosophy"}),d.jsx(As,{children:"Wellness, Without Extremes"}),d.jsx(Rs,{}),d.jsx(zs,{children:"Yoga is not just exercise. Nutrition is not just calories. Health is not just physical."}),d.jsx(zs,{children:"I follow a holistic approach — working with the mind, body, and soul."}),d.jsx(zs,{children:"No crash diets. No temporary fixes. No fear around food."}),d.jsx(zs,{children:"Just sustainable habits, mindful eating, and movement that feels good — for life."}),d.jsx(zs,{className:"bold",children:"My goal is to help you feel comfortable in your body, confident in your food choices, and connected to your health — naturally and mindfully."})]})})},$s=cn.section`
  padding: 140px 20px;
  //   background: linear-gradient(180deg, #faf9f6 0%, #ffffff 100%);
  background: linear-gradient(180deg, #9bb7a5 0%, #9bb7a5 100%);
  border-radius: 24px;
  opacity: 0;
  transform: translateY(50px);
  transition: all 0.9s ease;
  margin-bottom: 30px;

  &.visible {
    opacity: 1;
    transform: translateY(0);
  }
`,Ls=cn.div`
  max-width: 760px;
  margin: 0 auto;
  text-align: center;

  display: flex;
  flex-direction: column;
  gap: 28px;
`,Os=cn.h2`
  font-size: 38px;
  font-weight: 500;
  color: #1f2a24;

  @media (max-width: 768px) {
    font-size: 28px;
  }
`,Is=cn.p`
  font-size: 16px;
  line-height: 1.9;
  color: #5f6f66;
`,Ns=cn.button`
  margin: 24px auto 0;
  padding: 16px 44px;
  border-radius: 999px;

  background: #1f2a24;
  color: #ffffff;

  font-size: 13px;
  letter-spacing: 0.18em;
  text-transform: uppercase;

  border: none;
  cursor: pointer;
  transition: all 0.4s ease;

  &:hover {
    background: #0f1713;
    transform: translateY(-3px);
    box-shadow: 0 18px 36px rgba(0, 0, 0, 0.18);
  }
`,Fs=()=>{const e=ur(),{ref:t,inView:n}=ja({threshold:.3,triggerOnce:!0});return d.jsx($s,{ref:t,className:n?"visible":"",children:d.jsxs(Ls,{children:[d.jsx(Os,{children:"Ready to Begin Your Journey?"}),d.jsx(Is,{children:"Balance is not about extremes. It’s about learning to listen to your body, nourish it with care, and move with intention."}),d.jsx(Is,{children:"If you’re ready to feel stronger, calmer, and more connected—I’d love to guide you."}),d.jsx(Ns,{onClick:()=>e("/contact"),children:"Work With Me"})]})})};function Vs(){return d.jsxs(To,{children:[d.jsx(mo,{showFull:!0}),d.jsx(Ds,{}),d.jsx(Cs,{}),d.jsx(ds,{}),d.jsx(Fs,{})]})}class Bs{constructor(e=0,t="Network Error"){this.status=e,this.text=t}}const Us={origin:"https://api.emailjs.com",blockHeadless:!1,storageProvider:(()=>{if("undefined"!=typeof localStorage)return{get:e=>Promise.resolve(localStorage.getItem(e)),set:(e,t)=>Promise.resolve(localStorage.setItem(e,t)),remove:e=>Promise.resolve(localStorage.removeItem(e))}})()},Ws=e=>e?"string"==typeof e?{publicKey:e}:"[object Object]"===e.toString()?e:{}:{},Ys=async(e,t,n={})=>{const r=await fetch(Us.origin+e,{method:"POST",headers:n,body:t}),i=await r.text(),a=new Bs(r.status,i);if(r.ok)return a;throw a},Hs=(e,t,n)=>{if(!e||"string"!=typeof e)throw"The public key is required. Visit https://dashboard.emailjs.com/admin/account";if(!t||"string"!=typeof t)throw"The service ID is required. Visit https://dashboard.emailjs.com/admin";if(!n||"string"!=typeof n)throw"The template ID is required. Visit https://dashboard.emailjs.com/admin/templates"},qs=e=>e.webdriver||!e.languages||0===e.languages.length,Xs=()=>new Bs(451,"Unavailable For Headless Browser"),Gs=(e,t)=>{if((e=>!e.list?.length||!e.watchVariable)(e))return!1;((e,t)=>{if(!Array.isArray(e))throw"The BlockList list has to be an array";if("string"!=typeof t)throw"The BlockList watchVariable has to be a string"})(e.list,e.watchVariable);const n=(r=t,i=e.watchVariable,r instanceof FormData?r.get(i):r[i]);var r,i;return"string"==typeof n&&e.list.includes(n)},Ks=()=>new Bs(403,"Forbidden"),Qs=async(e,t,n)=>{if(!t.throttle||!n)return!1;((e,t)=>{if("number"!=typeof e||e<0)throw"The LimitRate throttle has to be a positive number";if(t&&"string"!=typeof t)throw"The LimitRate ID has to be a non-empty string"})(t.throttle,t.id);const r=t.id||e,i=await(async(e,t,n)=>{const r=Number(await n.get(e)||0);return t-Date.now()+r})(r,t.throttle,n);return i>0||(await n.set(r,Date.now().toString()),!1)},Zs=()=>new Bs(429,"Too Many Requests"),Js=(e,t="https://api.emailjs.com")=>{if(!e)return;const n=Ws(e);Us.publicKey=n.publicKey,Us.blockHeadless=n.blockHeadless,Us.storageProvider=n.storageProvider,Us.blockList=n.blockList,Us.limitRate=n.limitRate,Us.origin=n.origin||t},el=async(e,t,n,r)=>{const i=Ws(r),a=i.publicKey||Us.publicKey,o=i.blockHeadless||Us.blockHeadless,s=i.storageProvider||Us.storageProvider,l={...Us.blockList,...i.blockList},u={...Us.limitRate,...i.limitRate};if(o&&qs(navigator))return Promise.reject(Xs());if(Hs(a,e,t),(e=>{if(e&&"[object Object]"!==e.toString())throw"The template params have to be the object. Visit https://www.emailjs.com/docs/sdk/send/"})(n),n&&Gs(l,n))return Promise.reject(Ks());if(await Qs(location.pathname,u,s))return Promise.reject(Zs());const c={lib_version:"4.4.1",user_id:a,service_id:e,template_id:t,template_params:n};return Ys("/api/v1.0/email/send",JSON.stringify(c),{"Content-type":"application/json"})},tl=h.createContext({});const nl="undefined"!=typeof window?h.useLayoutEffect:h.useEffect,rl=h.createContext(null);function il(e,t){-1===e.indexOf(t)&&e.push(t)}function al(e,t){const n=e.indexOf(t);n>-1&&e.splice(n,1)}const ol=(e,t,n)=>n>t?t:n<e?e:n;const sl={},ll=e=>/^-?(?:\d+(?:\.\d+)?|\.\d+)$/u.test(e),ul=e=>"object"==typeof e&&null!==e,cl=e=>/^0[^.\s]+$/u.test(e);function dl(e){let t;return()=>(void 0===t&&(t=e()),t)}const hl=e=>e,pl=(...e)=>e.reduce((e,t)=>n=>t(e(n))),fl=(e,t,n)=>{const r=t-e;return r?(n-e)/r:1};class ml{constructor(){this.subscriptions=[]}add(e){return il(this.subscriptions,e),()=>al(this.subscriptions,e)}notify(e,t,n){const r=this.subscriptions.length;if(r)if(1===r)this.subscriptions[0](e,t,n);else for(let i=0;i<r;i++){const r=this.subscriptions[i];r&&r(e,t,n)}}getSize(){return this.subscriptions.length}clear(){this.subscriptions.length=0}}const gl=e=>1e3*e,yl=e=>e/1e3,vl=(e,t)=>t?e*(1e3/t):0,xl=(e,t,n)=>(((1-3*n+3*t)*e+(3*n-6*t))*e+3*t)*e;function bl(e,t,n,r){if(e===t&&n===r)return hl;const i=t=>function(e,t,n,r,i){let a,o,s=0;do{o=t+(n-t)/2,a=xl(o,r,i)-e,a>0?n=o:t=o}while(Math.abs(a)>1e-7&&++s<12);return o}(t,0,1,e,n);return e=>0===e||1===e?e:xl(i(e),t,r)}const wl=e=>t=>t<=.5?e(2*t)/2:(2-e(2*(1-t)))/2,kl=e=>t=>1-e(1-t),_l=bl(.33,1.53,.69,.99),Sl=kl(_l),jl=wl(Sl),Tl=e=>e>=1?1:(e*=2)<1?.5*Sl(e):.5*(2-Math.pow(2,-10*(e-1))),Cl=e=>1-Math.sin(Math.acos(e)),El=kl(Cl),Pl=wl(Cl),Ml=bl(.42,0,1,1),Al=bl(0,0,.58,1),Rl=bl(.42,0,.58,1),zl=e=>Array.isArray(e)&&"number"!=typeof e[0],Dl=e=>Array.isArray(e)&&"number"==typeof e[0],$l={linear:hl,easeIn:Ml,easeInOut:Rl,easeOut:Al,circIn:Cl,circInOut:Pl,circOut:El,backIn:Sl,backInOut:jl,backOut:_l,anticipate:Tl},Ll=e=>{if(Dl(e)){e.length;const[t,n,r,i]=e;return bl(t,n,r,i)}return"string"==typeof e?$l[e]:e},Ol=["setup","read","resolveKeyframes","preUpdate","update","preRender","render","postRender"];function Il(e,t){let n=!1,r=!0;const i={delta:0,timestamp:0,isProcessing:!1},a=()=>n=!0,o=Ol.reduce((e,t)=>(e[t]=function(e){let t=new Set,n=new Set,r=!1,i=!1;const a=new WeakSet;let o={delta:0,timestamp:0,isProcessing:!1};function s(t){a.has(t)&&(l.schedule(t),e()),t(o)}const l={schedule:(e,i=!1,o=!1)=>{const s=o&&r?t:n;return i&&a.add(e),s.add(e),e},cancel:e=>{n.delete(e),a.delete(e)},process:e=>{if(o=e,r)return void(i=!0);r=!0;const a=t;t=n,n=a,t.forEach(s),t.clear(),r=!1,i&&(i=!1,l.process(e))}};return l}(a),e),{}),{setup:s,read:l,resolveKeyframes:u,preUpdate:c,update:d,preRender:h,render:p,postRender:f}=o,m=()=>{const a=sl.useManualTiming,o=a?i.timestamp:performance.now();n=!1,a||(i.delta=r?1e3/60:Math.max(Math.min(o-i.timestamp,40),1)),i.timestamp=o,i.isProcessing=!0,s.process(i),l.process(i),u.process(i),c.process(i),d.process(i),h.process(i),p.process(i),f.process(i),i.isProcessing=!1,n&&t&&(r=!1,e(m))};return{schedule:Ol.reduce((t,a)=>{const s=o[a];return t[a]=(t,a=!1,o=!1)=>(n||(n=!0,r=!0,i.isProcessing||e(m)),s.schedule(t,a,o)),t},{}),cancel:e=>{for(let t=0;t<Ol.length;t++)o[Ol[t]].cancel(e)},state:i,steps:o}}const{schedule:Nl,cancel:Fl,state:Vl,steps:Bl}=Il("undefined"!=typeof requestAnimationFrame?requestAnimationFrame:hl,!0);let Ul;function Wl(){Ul=void 0}const Yl={now:()=>(void 0===Ul&&Yl.set(Vl.isProcessing||sl.useManualTiming?Vl.timestamp:performance.now()),Ul),set:e=>{Ul=e,queueMicrotask(Wl)}},Hl=e=>t=>"string"==typeof t&&t.startsWith(e),ql=Hl("--"),Xl=Hl("var(--"),Gl=e=>!!Xl(e)&&Kl.test(e.split("/*")[0].trim()),Kl=/var\(--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)$/iu;function Ql(e){return"string"==typeof e&&e.split("/*")[0].includes("var(--")}const Zl={test:e=>"number"==typeof e,parse:parseFloat,transform:e=>e},Jl={...Zl,transform:e=>ol(0,1,e)},eu={...Zl,default:1},tu=e=>Math.round(1e5*e)/1e5,nu=/-?(?:\d+(?:\.\d+)?|\.\d+)/gu;const ru=/^(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))$/iu,iu=(e,t)=>n=>Boolean("string"==typeof n&&ru.test(n)&&n.startsWith(e)||t&&!function(e){return null==e}(n)&&Object.prototype.hasOwnProperty.call(n,t)),au=(e,t,n)=>r=>{if("string"!=typeof r)return r;const[i,a,o,s]=r.match(nu);return{[e]:parseFloat(i),[t]:parseFloat(a),[n]:parseFloat(o),alpha:void 0!==s?parseFloat(s):1}},ou={...Zl,transform:e=>Math.round((e=>ol(0,255,e))(e))},su={test:iu("rgb","red"),parse:au("red","green","blue"),transform:({red:e,green:t,blue:n,alpha:r=1})=>"rgba("+ou.transform(e)+", "+ou.transform(t)+", "+ou.transform(n)+", "+tu(Jl.transform(r))+")"};const lu={test:iu("#"),parse:function(e){let t="",n="",r="",i="";return e.length>5?(t=e.substring(1,3),n=e.substring(3,5),r=e.substring(5,7),i=e.substring(7,9)):(t=e.substring(1,2),n=e.substring(2,3),r=e.substring(3,4),i=e.substring(4,5),t+=t,n+=n,r+=r,i+=i),{red:parseInt(t,16),green:parseInt(n,16),blue:parseInt(r,16),alpha:i?parseInt(i,16)/255:1}},transform:su.transform},uu=e=>({test:t=>"string"==typeof t&&t.endsWith(e)&&1===t.split(" ").length,parse:parseFloat,transform:t=>`${t}${e}`}),cu=uu("deg"),du=uu("%"),hu=uu("px"),pu=uu("vh"),fu=uu("vw"),mu=(()=>({...du,parse:e=>du.parse(e)/100,transform:e=>du.transform(100*e)}))(),gu={test:iu("hsl","hue"),parse:au("hue","saturation","lightness"),transform:({hue:e,saturation:t,lightness:n,alpha:r=1})=>"hsla("+Math.round(e)+", "+du.transform(tu(t))+", "+du.transform(tu(n))+", "+tu(Jl.transform(r))+")"},yu={test:e=>su.test(e)||lu.test(e)||gu.test(e),parse:e=>su.test(e)?su.parse(e):gu.test(e)?gu.parse(e):lu.parse(e),transform:e=>"string"==typeof e?e:e.hasOwnProperty("red")?su.transform(e):gu.transform(e),getAnimatableNone:e=>{const t=yu.parse(e);return t.alpha=0,yu.transform(t)}},vu=/(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))/giu;const xu="number",bu="color",wu=/var\s*\(\s*--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)|#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\)|-?(?:\d+(?:\.\d+)?|\.\d+)/giu;function ku(e){const t=e.toString(),n=[],r={color:[],number:[],var:[]},i=[];let a=0;const o=t.replace(wu,e=>(yu.test(e)?(r.color.push(a),i.push(bu),n.push(yu.parse(e))):e.startsWith("var(")?(r.var.push(a),i.push("var"),n.push(e)):(r.number.push(a),i.push(xu),n.push(parseFloat(e))),++a,"${}")).split("${}");return{values:n,split:o,indexes:r,types:i}}function _u({split:e,types:t}){const n=e.length;return r=>{let i="";for(let a=0;a<n;a++)if(i+=e[a],void 0!==r[a]){const e=t[a];i+=e===xu?tu(r[a]):e===bu?yu.transform(r[a]):r[a]}return i}}const Su=(e,t)=>{return"number"==typeof e?t?.trim().endsWith("/")?e:0:"number"==typeof(n=e)?0:yu.test(n)?yu.getAnimatableNone(n):n;var n};const ju={test:function(e){return isNaN(e)&&"string"==typeof e&&(e.match(nu)?.length||0)+(e.match(vu)?.length||0)>0},parse:function(e){return ku(e).values},createTransformer:function(e){return _u(ku(e))},getAnimatableNone:function(e){const t=ku(e);return _u(t)(t.values.map((e,n)=>Su(e,t.split[n])))}};function Tu(e,t,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?e+6*(t-e)*n:n<.5?t:n<2/3?e+(t-e)*(2/3-n)*6:e}function Cu(e,t){return n=>n>0?t:e}const Eu=(e,t,n)=>e+(t-e)*n,Pu=(e,t,n)=>{const r=e*e,i=n*(t*t-r)+r;return i<0?0:Math.sqrt(i)},Mu=[lu,su,gu];function Au(e){const t=(n=e,Mu.find(e=>e.test(n)));var n;if(!Boolean(t))return!1;let r=t.parse(e);return t===gu&&(r=function({hue:e,saturation:t,lightness:n,alpha:r}){e/=360,n/=100;let i=0,a=0,o=0;if(t/=100){const r=n<.5?n*(1+t):n+t-n*t,s=2*n-r;i=Tu(s,r,e+1/3),a=Tu(s,r,e),o=Tu(s,r,e-1/3)}else i=a=o=n;return{red:Math.round(255*i),green:Math.round(255*a),blue:Math.round(255*o),alpha:r}}(r)),r}const Ru=(e,t)=>{const n=Au(e),r=Au(t);if(!n||!r)return Cu(e,t);const i={...n};return e=>(i.red=Pu(n.red,r.red,e),i.green=Pu(n.green,r.green,e),i.blue=Pu(n.blue,r.blue,e),i.alpha=Eu(n.alpha,r.alpha,e),su.transform(i))},zu=new Set(["none","hidden"]);function Du(e,t){return n=>Eu(e,t,n)}function $u(e){return"number"==typeof e?Du:"string"==typeof e?Gl(e)?Cu:yu.test(e)?Ru:Iu:Array.isArray(e)?Lu:"object"==typeof e?yu.test(e)?Ru:Ou:Cu}function Lu(e,t){const n=[...e],r=n.length,i=e.map((e,n)=>$u(e)(e,t[n]));return e=>{for(let t=0;t<r;t++)n[t]=i[t](e);return n}}function Ou(e,t){const n={...e,...t},r={};for(const i in n)void 0!==e[i]&&void 0!==t[i]&&(r[i]=$u(e[i])(e[i],t[i]));return e=>{for(const t in r)n[t]=r[t](e);return n}}const Iu=(e,t)=>{const n=ju.createTransformer(t),r=ku(e),i=ku(t);return r.indexes.var.length===i.indexes.var.length&&r.indexes.color.length===i.indexes.color.length&&r.indexes.number.length>=i.indexes.number.length?zu.has(e)&&!i.values.length||zu.has(t)&&!r.values.length?function(e,t){return zu.has(e)?n=>n<=0?e:t:n=>n>=1?t:e}(e,t):pl(Lu(function(e,t){const n=[],r={color:0,var:0,number:0};for(let i=0;i<t.values.length;i++){const a=t.types[i],o=e.indexes[a][r[a]],s=e.values[o]??0;n[i]=s,r[a]++}return n}(r,i),i.values),n):Cu(e,t)};function Nu(e,t,n){if("number"==typeof e&&"number"==typeof t&&"number"==typeof n)return Eu(e,t,n);return $u(e)(e,t)}const Fu=e=>{const t=({timestamp:t})=>e(t);return{start:(e=!0)=>Nl.update(t,e),stop:()=>Fl(t),now:()=>Vl.isProcessing?Vl.timestamp:Yl.now()}},Vu=(e,t,n=10)=>{let r="";const i=Math.max(Math.round(t/n),2);for(let a=0;a<i;a++)r+=Math.round(1e4*e(a/(i-1)))/1e4+", ";return`linear(${r.substring(0,r.length-2)})`},Bu=2e4;function Uu(e){let t=0;let n=e.next(t);for(;!n.done&&t<Bu;)t+=50,n=e.next(t);return t>=Bu?1/0:t}const Wu=100,Yu=10,Hu=1,qu=0,Xu=800,Gu=.3,Ku=.3,Qu={granular:.01,default:2},Zu={granular:.005,default:.5},Ju=.01,ec=10,tc=.05,nc=1;function rc(e,t){return e*Math.sqrt(1-t*t)}const ic=.001;const ac=["duration","bounce"],oc=["stiffness","damping","mass"];function sc(e,t){return t.some(t=>void 0!==e[t])}function lc(e){let t={velocity:qu,stiffness:Wu,damping:Yu,mass:Hu,isResolvedFromDuration:!1,...e};if(!sc(e,oc)&&sc(e,ac))if(t.velocity=0,e.visualDuration){const n=e.visualDuration,r=2*Math.PI/(1.2*n),i=r*r,a=2*ol(.05,1,1-(e.bounce||0))*Math.sqrt(i);t={...t,mass:Hu,stiffness:i,damping:a}}else{const n=function({duration:e=Xu,bounce:t=Gu,velocity:n=qu,mass:r=Hu}){let i,a,o=1-t;o=ol(tc,nc,o),e=ol(Ju,ec,yl(e)),o<1?(i=t=>{const r=t*o,i=r*e,a=r-n,s=rc(t,o),l=Math.exp(-i);return ic-a/s*l},a=t=>{const r=t*o*e,a=r*n+n,s=Math.pow(o,2)*Math.pow(t,2)*e,l=Math.exp(-r),u=rc(Math.pow(t,2),o);return(-i(t)+ic>0?-1:1)*((a-s)*l)/u}):(i=t=>Math.exp(-t*e)*((t-n)*e+1)-.001,a=t=>Math.exp(-t*e)*(e*e*(n-t)));const s=function(e,t,n){let r=n;for(let i=1;i<12;i++)r-=e(r)/t(r);return r}(i,a,5/e);if(e=gl(e),isNaN(s))return{stiffness:Wu,damping:Yu,duration:e};{const t=Math.pow(s,2)*r;return{stiffness:t,damping:2*o*Math.sqrt(r*t),duration:e}}}({...e,velocity:0});t={...t,...n,mass:Hu},t.isResolvedFromDuration=!0}return t}function uc(e=Ku,t=Gu){const n="object"!=typeof e?{visualDuration:e,keyframes:[0,1],bounce:t}:e;let{restSpeed:r,restDelta:i}=n;const a=n.keyframes[0],o=n.keyframes[n.keyframes.length-1],s={done:!1,value:a},{stiffness:l,damping:u,mass:c,duration:d,velocity:h,isResolvedFromDuration:p}=lc({...n,velocity:-yl(n.velocity||0)}),f=h||0,m=u/(2*Math.sqrt(l*c)),g=o-a,y=yl(Math.sqrt(l/c)),v=Math.abs(g)<5;let x,b,w,k,_,S;if(r||(r=v?Qu.granular:Qu.default),i||(i=v?Zu.granular:Zu.default),m<1)w=rc(y,m),k=(f+m*y*g)/w,x=e=>{const t=Math.exp(-m*y*e);return o-t*(k*Math.sin(w*e)+g*Math.cos(w*e))},_=m*y*k+g*w,S=m*y*g-k*w,b=e=>Math.exp(-m*y*e)*(_*Math.sin(w*e)+S*Math.cos(w*e));else if(1===m){x=e=>o-Math.exp(-y*e)*(g+(f+y*g)*e);const e=f+y*g;b=t=>Math.exp(-y*t)*(y*e*t-f)}else{const e=y*Math.sqrt(m*m-1);x=t=>{const n=Math.exp(-m*y*t),r=Math.min(e*t,300);return o-n*((f+m*y*g)*Math.sinh(r)+e*g*Math.cosh(r))/e};const t=(f+m*y*g)/e,n=m*y*t-g*e,r=m*y*g-t*e;b=t=>{const i=Math.exp(-m*y*t),a=Math.min(e*t,300);return i*(n*Math.sinh(a)+r*Math.cosh(a))}}const j={calculatedDuration:p&&d||null,velocity:e=>gl(b(e)),next:e=>{if(!p&&m<1){const t=Math.exp(-m*y*e),n=Math.sin(w*e),a=Math.cos(w*e),l=o-t*(k*n+g*a),u=gl(t*(_*n+S*a));return s.done=Math.abs(u)<=r&&Math.abs(o-l)<=i,s.value=s.done?o:l,s}const t=x(e);if(p)s.done=e>=d;else{const n=gl(b(e));s.done=Math.abs(n)<=r&&Math.abs(o-t)<=i}return s.value=s.done?o:t,s},toString:()=>{const e=Math.min(Uu(j),Bu),t=Vu(t=>j.next(e*t).value,e,30);return e+"ms "+t},toTransition:()=>{}};return j}uc.applyToOptions=e=>{const t=function(e,t=100,n){const r=n({...e,keyframes:[0,t]}),i=Math.min(Uu(r),Bu);return{type:"keyframes",ease:e=>r.next(i*e).value/t,duration:yl(i)}}(e,100,uc);return e.ease=t.ease,e.duration=gl(t.duration),e.type="keyframes",e};function cc(e,t,n){const r=Math.max(t-5,0);return vl(n-e(r),t-r)}function dc({keyframes:e,velocity:t=0,power:n=.8,timeConstant:r=325,bounceDamping:i=10,bounceStiffness:a=500,modifyTarget:o,min:s,max:l,restDelta:u=.5,restSpeed:c}){const d=e[0],h={done:!1,value:d},p=e=>void 0===s?l:void 0===l||Math.abs(s-e)<Math.abs(l-e)?s:l;let f=n*t;const m=d+f,g=void 0===o?m:o(m);g!==m&&(f=g-d);const y=e=>-f*Math.exp(-e/r),v=e=>g+y(e),x=e=>{const t=y(e),n=v(e);h.done=Math.abs(t)<=u,h.value=h.done?g:n};let b,w;const k=e=>{var t;(t=h.value,void 0!==s&&t<s||void 0!==l&&t>l)&&(b=e,w=uc({keyframes:[h.value,p(h.value)],velocity:cc(v,e,h.value),damping:i,stiffness:a,restDelta:u,restSpeed:c}))};return k(0),{calculatedDuration:null,next:e=>{let t=!1;return w||void 0!==b||(t=!0,x(e),k(e)),void 0!==b&&e>=b?w.next(e-b):(!t&&x(e),h)}}}function hc(e,t,{clamp:n=!0,ease:r,mixer:i}={}){const a=e.length;if(t.length,1===a)return()=>t[0];if(2===a&&t[0]===t[1])return()=>t[1];const o=e[0]===e[1];e[0]>e[a-1]&&(e=[...e].reverse(),t=[...t].reverse());const s=function(e,t,n){const r=[],i=n||sl.mix||Nu,a=e.length-1;for(let o=0;o<a;o++){let n=i(e[o],e[o+1]);if(t){const e=Array.isArray(t)?t[o]||hl:t;n=pl(e,n)}r.push(n)}return r}(t,r,i),l=s.length,u=n=>{if(o&&n<e[0])return t[0];let r=0;if(l>1)for(;r<e.length-2&&!(n<e[r+1]);r++);const i=fl(e[r],e[r+1],n);return s[r](i)};return n?t=>u(ol(e[0],e[a-1],t)):u}function pc(e){const t=[0];return function(e,t){const n=e[e.length-1];for(let r=1;r<=t;r++){const i=fl(0,t,r);e.push(Eu(n,1,i))}}(t,e.length-1),t}function fc({duration:e=300,keyframes:t,times:n,ease:r="easeInOut"}){const i=zl(r)?r.map(Ll):Ll(r),a={done:!1,value:t[0]},o=function(e,t){return e.map(e=>e*t)}(n&&n.length===t.length?n:pc(t),e),s=hc(o,t,{ease:Array.isArray(i)?i:(l=t,u=i,l.map(()=>u||Rl).splice(0,l.length-1))});var l,u;return{calculatedDuration:e,next:t=>(a.value=s(t),a.done=t>=e,a)}}const mc=e=>null!==e;function gc(e,{repeat:t,repeatType:n="loop"},r,i=1){const a=e.filter(mc),o=i<0||t&&"loop"!==n&&t%2==1?0:a.length-1;return o&&void 0!==r?r:a[o]}const yc={decay:dc,inertia:dc,tween:fc,keyframes:fc,spring:uc};function vc(e){"string"==typeof e.type&&(e.type=yc[e.type])}class xc{constructor(){this.updateFinished()}get finished(){return this._finished}updateFinished(){this._finished=new Promise(e=>{this.resolve=e})}notifyFinished(){this.resolve()}then(e,t){return this.finished.then(e,t)}}const bc=e=>e/100;class wc extends xc{constructor(e){super(),this.state="idle",this.startTime=null,this.isStopped=!1,this.currentTime=0,this.holdTime=null,this.playbackSpeed=1,this.delayState={done:!1,value:void 0},this.stop=()=>{const{motionValue:e}=this.options;e&&e.updatedAt!==Yl.now()&&this.tick(Yl.now()),this.isStopped=!0,"idle"!==this.state&&(this.teardown(),this.options.onStop?.())},this.options=e,this.initAnimation(),this.play(),!1===e.autoplay&&this.pause()}initAnimation(){const{options:e}=this;vc(e);const{type:t=fc,repeat:n=0,repeatDelay:r=0,repeatType:i,velocity:a=0}=e;let{keyframes:o}=e;const s=t||fc;s!==fc&&"number"!=typeof o[0]&&(this.mixKeyframes=pl(bc,Nu(o[0],o[1])),o=[0,100]);const l=s({...e,keyframes:o});"mirror"===i&&(this.mirroredGenerator=s({...e,keyframes:[...o].reverse(),velocity:-a})),null===l.calculatedDuration&&(l.calculatedDuration=Uu(l));const{calculatedDuration:u}=l;this.calculatedDuration=u,this.resolvedDuration=u+r,this.totalDuration=this.resolvedDuration*(n+1)-r,this.generator=l}updateTime(e){const t=Math.round(e-this.startTime)*this.playbackSpeed;null!==this.holdTime?this.currentTime=this.holdTime:this.currentTime=t}tick(e,t=!1){const{generator:n,totalDuration:r,mixKeyframes:i,mirroredGenerator:a,resolvedDuration:o,calculatedDuration:s}=this;if(null===this.startTime)return n.next(0);const{delay:l=0,keyframes:u,repeat:c,repeatType:d,repeatDelay:h,type:p,onUpdate:f,finalKeyframe:m}=this.options;this.speed>0?this.startTime=Math.min(this.startTime,e):this.speed<0&&(this.startTime=Math.min(e-r/this.speed,this.startTime)),t?this.currentTime=e:this.updateTime(e);const g=this.currentTime-l*(this.playbackSpeed>=0?1:-1),y=this.playbackSpeed>=0?g<0:g>r;this.currentTime=Math.max(g,0),"finished"===this.state&&null===this.holdTime&&(this.currentTime=r);let v,x=this.currentTime,b=n;if(c){const e=Math.min(this.currentTime,r)/o;let t=Math.floor(e),n=e%1;!n&&e>=1&&(n=1),1===n&&t--,t=Math.min(t,c+1);Boolean(t%2)&&("reverse"===d?(n=1-n,h&&(n-=h/o)):"mirror"===d&&(b=a)),x=ol(0,1,n)*o}y?(this.delayState.value=u[0],v=this.delayState):v=b.next(x),i&&!y&&(v.value=i(v.value));let{done:w}=v;y||null===s||(w=this.playbackSpeed>=0?this.currentTime>=r:this.currentTime<=0);const k=null===this.holdTime&&("finished"===this.state||"running"===this.state&&w);return k&&p!==dc&&(v.value=gc(u,this.options,m,this.speed)),f&&f(v.value),k&&this.finish(),v}then(e,t){return this.finished.then(e,t)}get duration(){return yl(this.calculatedDuration)}get iterationDuration(){const{delay:e=0}=this.options||{};return this.duration+yl(e)}get time(){return yl(this.currentTime)}set time(e){e=gl(e),this.currentTime=e,null===this.startTime||null!==this.holdTime||0===this.playbackSpeed?this.holdTime=e:this.driver&&(this.startTime=this.driver.now()-e/this.playbackSpeed),this.driver?this.driver.start(!1):(this.startTime=0,this.state="paused",this.holdTime=e,this.tick(e))}getGeneratorVelocity(){const e=this.currentTime;if(e<=0)return this.options.velocity||0;if(this.generator.velocity)return this.generator.velocity(e);return cc(e=>this.generator.next(e).value,e,this.generator.next(e).value)}get speed(){return this.playbackSpeed}set speed(e){const t=this.playbackSpeed!==e;t&&this.driver&&this.updateTime(Yl.now()),this.playbackSpeed=e,t&&this.driver&&(this.time=yl(this.currentTime))}play(){if(this.isStopped)return;const{driver:e=Fu,startTime:t}=this.options;this.driver||(this.driver=e(e=>this.tick(e))),this.options.onPlay?.();const n=this.driver.now();"finished"===this.state?(this.updateFinished(),this.startTime=n):null!==this.holdTime?this.startTime=n-this.holdTime:this.startTime||(this.startTime=t??n),"finished"===this.state&&this.speed<0&&(this.startTime+=this.calculatedDuration),this.holdTime=null,this.state="running",this.driver.start()}pause(){this.state="paused",this.updateTime(Yl.now()),this.holdTime=this.currentTime}complete(){"running"!==this.state&&this.play(),this.state="finished",this.holdTime=null}finish(){this.notifyFinished(),this.teardown(),this.state="finished",this.options.onComplete?.()}cancel(){this.holdTime=null,this.startTime=0,this.tick(0),this.teardown(),this.options.onCancel?.()}teardown(){this.state="idle",this.stopDriver(),this.startTime=this.holdTime=null}stopDriver(){this.driver&&(this.driver.stop(),this.driver=void 0)}sample(e){return this.startTime=0,this.tick(e,!0)}attachTimeline(e){return this.options.allowFlatten&&(this.options.type="keyframes",this.options.ease="linear",this.initAnimation()),this.driver?.stop(),e.observe(this)}}const kc=e=>180*e/Math.PI,_c=e=>{const t=kc(Math.atan2(e[1],e[0]));return jc(t)},Sc={x:4,y:5,translateX:4,translateY:5,scaleX:0,scaleY:3,scale:e=>(Math.abs(e[0])+Math.abs(e[3]))/2,rotate:_c,rotateZ:_c,skewX:e=>kc(Math.atan(e[1])),skewY:e=>kc(Math.atan(e[2])),skew:e=>(Math.abs(e[1])+Math.abs(e[2]))/2},jc=e=>((e%=360)<0&&(e+=360),e),Tc=e=>Math.sqrt(e[0]*e[0]+e[1]*e[1]),Cc=e=>Math.sqrt(e[4]*e[4]+e[5]*e[5]),Ec={x:12,y:13,z:14,translateX:12,translateY:13,translateZ:14,scaleX:Tc,scaleY:Cc,scale:e=>(Tc(e)+Cc(e))/2,rotateX:e=>jc(kc(Math.atan2(e[6],e[5]))),rotateY:e=>jc(kc(Math.atan2(-e[2],e[0]))),rotateZ:_c,rotate:_c,skewX:e=>kc(Math.atan(e[4])),skewY:e=>kc(Math.atan(e[1])),skew:e=>(Math.abs(e[1])+Math.abs(e[4]))/2};function Pc(e){return e.includes("scale")?1:0}function Mc(e,t){if(!e||"none"===e)return Pc(t);const n=e.match(/^matrix3d\(([-\d.e\s,]+)\)$/u);let r,i;if(n)r=Ec,i=n;else{const t=e.match(/^matrix\(([-\d.e\s,]+)\)$/u);r=Sc,i=t}if(!i)return Pc(t);const a=r[t],o=i[1].split(",").map(Ac);return"function"==typeof a?a(o):o[a]}function Ac(e){return parseFloat(e.trim())}const Rc=["transformPerspective","x","y","z","translateX","translateY","translateZ","scale","scaleX","scaleY","rotate","rotateX","rotateY","rotateZ","skew","skewX","skewY"],zc=(()=>new Set([...Rc,"pathRotation"]))(),Dc=e=>e===Zl||e===hu,$c=new Set(["x","y","z"]),Lc=Rc.filter(e=>!$c.has(e));const Oc={width:({x:e},{paddingLeft:t="0",paddingRight:n="0",boxSizing:r})=>{const i=e.max-e.min;return"border-box"===r?i:i-parseFloat(t)-parseFloat(n)},height:({y:e},{paddingTop:t="0",paddingBottom:n="0",boxSizing:r})=>{const i=e.max-e.min;return"border-box"===r?i:i-parseFloat(t)-parseFloat(n)},top:(e,{top:t})=>parseFloat(t),left:(e,{left:t})=>parseFloat(t),bottom:({y:e},{top:t})=>parseFloat(t)+(e.max-e.min),right:({x:e},{left:t})=>parseFloat(t)+(e.max-e.min),x:(e,{transform:t})=>Mc(t,"x"),y:(e,{transform:t})=>Mc(t,"y")};Oc.translateX=Oc.x,Oc.translateY=Oc.y;const Ic=new Set;let Nc=!1,Fc=!1,Vc=!1;function Bc(){if(Fc){const e=Array.from(Ic).filter(e=>e.needsMeasurement),t=new Set(e.map(e=>e.element)),n=new Map;t.forEach(e=>{const t=function(e){const t=[];return Lc.forEach(n=>{const r=e.getValue(n);void 0!==r&&(t.push([n,r.get()]),r.set(n.startsWith("scale")?1:0))}),t}(e);t.length&&(n.set(e,t),e.render())}),e.forEach(e=>e.measureInitialState()),t.forEach(e=>{e.render();const t=n.get(e);t&&t.forEach(([t,n])=>{e.getValue(t)?.set(n)})}),e.forEach(e=>e.measureEndState()),e.forEach(e=>{void 0!==e.suspendedScrollY&&window.scrollTo(0,e.suspendedScrollY)})}Fc=!1,Nc=!1,Ic.forEach(e=>e.complete(Vc)),Ic.clear()}function Uc(){Ic.forEach(e=>{e.readKeyframes(),e.needsMeasurement&&(Fc=!0)})}class Wc{constructor(e,t,n,r,i,a=!1){this.state="pending",this.isAsync=!1,this.needsMeasurement=!1,this.unresolvedKeyframes=[...e],this.onComplete=t,this.name=n,this.motionValue=r,this.element=i,this.isAsync=a}scheduleResolve(){this.state="scheduled",this.isAsync?(Ic.add(this),Nc||(Nc=!0,Nl.read(Uc),Nl.resolveKeyframes(Bc))):(this.readKeyframes(),this.complete())}readKeyframes(){const{unresolvedKeyframes:e,name:t,element:n,motionValue:r}=this;if(null===e[0]){const i=r?.get(),a=e[e.length-1];if(void 0!==i)e[0]=i;else if(n&&t){const r=n.readValue(t,a);null!=r&&(e[0]=r)}void 0===e[0]&&(e[0]=a),r&&void 0===i&&r.set(e[0])}!function(e){for(let t=1;t<e.length;t++)e[t]??(e[t]=e[t-1])}(e)}setFinalKeyframe(){}measureInitialState(){}renderEndStyles(){}measureEndState(){}complete(e=!1){this.state="complete",this.onComplete(this.unresolvedKeyframes,this.finalKeyframe,e),Ic.delete(this)}cancel(){"scheduled"===this.state&&(Ic.delete(this),this.state="pending")}resume(){"pending"===this.state&&this.scheduleResolve()}}function Yc(e,t,n){(e=>e.startsWith("--"))(t)?e.style.setProperty(t,n):e.style[t]=n}const Hc={};function qc(e,t){const n=dl(e);return()=>Hc[t]??n()}const Xc=qc(()=>void 0!==window.ScrollTimeline,"scrollTimeline"),Gc=qc(()=>{try{document.createElement("div").animate({opacity:0},{easing:"linear(0, 1)"})}catch(GS){return!1}return!0},"linearEasing"),Kc=([e,t,n,r])=>`cubic-bezier(${e}, ${t}, ${n}, ${r})`,Qc={linear:"linear",ease:"ease",easeIn:"ease-in",easeOut:"ease-out",easeInOut:"ease-in-out",circIn:Kc([0,.65,.55,1]),circOut:Kc([.55,0,1,.45]),backIn:Kc([.31,.01,.66,-.59]),backOut:Kc([.33,1.53,.69,.99])};function Zc(e,t){return e?"function"==typeof e?Gc()?Vu(e,t):"ease-out":Dl(e)?Kc(e):Array.isArray(e)?e.map(e=>Zc(e,t)||Qc.easeOut):Qc[e]:void 0}function Jc(e,t,n,{delay:r=0,duration:i=300,repeat:a=0,repeatType:o="loop",ease:s="easeOut",times:l}={},u=void 0){const c={[t]:n};l&&(c.offset=l);const d=Zc(s,i);Array.isArray(d)&&(c.easing=d);const h={delay:r,duration:i,easing:Array.isArray(d)?"linear":d,fill:"both",iterations:a+1,direction:"reverse"===o?"alternate":"normal"};u&&(h.pseudoElement=u);return e.animate(c,h)}function ed(e){return"function"==typeof e&&"applyToOptions"in e}class td extends xc{constructor(e){if(super(),this.finishedTime=null,this.isStopped=!1,this.manualStartTime=null,!e)return;const{element:t,name:n,keyframes:r,pseudoElement:i,allowFlatten:a=!1,finalKeyframe:o,onComplete:s}=e;this.isPseudoElement=Boolean(i),this.allowFlatten=a,this.options=e,e.type;const l=function({type:e,...t}){return ed(e)&&Gc()?e.applyToOptions(t):(t.duration??(t.duration=300),t.ease??(t.ease="easeOut"),t)}(e);this.animation=Jc(t,n,r,l,i),!1===l.autoplay&&this.animation.pause(),this.animation.onfinish=()=>{if(this.finishedTime=this.time,!i){const e=gc(r,this.options,o,this.speed);this.updateMotionValue&&this.updateMotionValue(e),Yc(t,n,e),this.animation.cancel()}s?.(),this.notifyFinished()}}play(){this.isStopped||(this.manualStartTime=null,this.animation.play(),"finished"===this.state&&this.updateFinished())}pause(){this.animation.pause()}complete(){this.animation.finish?.()}cancel(){try{this.animation.cancel()}catch(GS){}}stop(){if(this.isStopped)return;this.isStopped=!0;const{state:e}=this;"idle"!==e&&"finished"!==e&&(this.updateMotionValue?this.updateMotionValue():this.commitStyles(),this.isPseudoElement||this.cancel())}commitStyles(){const e=this.options?.element;!this.isPseudoElement&&e?.isConnected&&this.animation.commitStyles?.()}get duration(){const e=this.animation.effect?.getComputedTiming?.().duration||0;return yl(Number(e))}get iterationDuration(){const{delay:e=0}=this.options||{};return this.duration+yl(e)}get time(){return yl(Number(this.animation.currentTime)||0)}set time(e){const t=null!==this.finishedTime;this.manualStartTime=null,this.finishedTime=null,this.animation.currentTime=gl(e),t&&this.animation.pause()}get speed(){return this.animation.playbackRate}set speed(e){e<0&&(this.finishedTime=null),this.animation.playbackRate=e}get state(){return null!==this.finishedTime?"finished":this.animation.playState}get startTime(){return this.manualStartTime??Number(this.animation.startTime)}set startTime(e){this.manualStartTime=this.animation.startTime=e}attachTimeline({timeline:e,rangeStart:t,rangeEnd:n,observe:r}){return this.allowFlatten&&this.animation.effect?.updateTiming({easing:"linear"}),this.animation.onfinish=null,e&&Xc()?(this.animation.timeline=e,t&&(this.animation.rangeStart=t),n&&(this.animation.rangeEnd=n),hl):r(this)}}const nd={anticipate:Tl,backInOut:jl,circInOut:Pl};function rd(e){"string"==typeof e.ease&&e.ease in nd&&(e.ease=nd[e.ease])}class id extends td{constructor(e){rd(e),vc(e),super(e),void 0!==e.startTime&&!1!==e.autoplay&&(this.startTime=e.startTime),this.options=e}updateMotionValue(e){const{motionValue:t,onUpdate:n,onComplete:r,element:i,...a}=this.options;if(!t)return;if(void 0!==e)return void t.set(e);const o=new wc({...a,autoplay:!1}),s=Math.max(10,Yl.now()-this.startTime),l=ol(0,10,s-10),u=o.sample(s).value,{name:c}=this.options;i&&c&&Yc(i,c,u),t.setWithVelocity(o.sample(Math.max(0,s-l)).value,u,l),o.stop()}}const ad=(e,t)=>"zIndex"!==t&&(!("number"!=typeof e&&!Array.isArray(e))||!("string"!=typeof e||!ju.test(e)&&"0"!==e||e.startsWith("url(")));function od(e){e.duration=0,e.type="keyframes"}const sd=new Set(["opacity","clipPath","filter","transform"]),ld=/^(?:oklch|oklab|lab|lch|color|color-mix|light-dark)\(/;const ud=new Set(["color","backgroundColor","outlineColor","fill","stroke","borderColor","borderTopColor","borderRightColor","borderBottomColor","borderLeftColor"]),cd=dl(()=>Object.hasOwnProperty.call(Element.prototype,"animate"));function dd(e){const{motionValue:t,name:n,repeatDelay:r,repeatType:i,damping:a,type:o,keyframes:s}=e,l=t?.owner?.current;if(!(l instanceof HTMLElement))return!1;const{onUpdate:u,transformTemplate:c}=t.owner.getProps();return cd()&&n&&(sd.has(n)||ud.has(n)&&function(e){for(let t=0;t<e.length;t++)if("string"==typeof e[t]&&ld.test(e[t]))return!0;return!1}(s))&&("transform"!==n||!c)&&!u&&!r&&"mirror"!==i&&0!==a&&"inertia"!==o}class hd extends xc{constructor({autoplay:e=!0,delay:t=0,type:n="keyframes",repeat:r=0,repeatDelay:i=0,repeatType:a="loop",keyframes:o,name:s,motionValue:l,element:u,...c}){super(),this.stop=()=>{this._animation&&(this._animation.stop(),this.stopTimeline?.()),this.keyframeResolver?.cancel()},this.createdAt=Yl.now();const d={autoplay:e,delay:t,type:n,repeat:r,repeatDelay:i,repeatType:a,name:s,motionValue:l,element:u,...c},h=u?.KeyframeResolver||Wc;this.keyframeResolver=new h(o,(e,t,n)=>this.onKeyframesResolved(e,t,d,!n),s,l,u),this.keyframeResolver?.scheduleResolve()}onKeyframesResolved(e,t,n,r){this.keyframeResolver=void 0;const{name:i,type:a,velocity:o,delay:s,isHandoff:l,onUpdate:u}=n;this.resolvedAt=Yl.now();let c=!0;(function(e,t,n,r){const i=e[0];if(null===i)return!1;if("display"===t||"visibility"===t)return!0;const a=e[e.length-1],o=ad(i,t),s=ad(a,t);return!(!o||!s)&&(function(e){const t=e[0];if(1===e.length)return!0;for(let n=0;n<e.length;n++)if(e[n]!==t)return!0}(e)||("spring"===n||ed(n))&&r)})(e,i,a,o)||(c=!1,!sl.instantAnimations&&s||u?.(gc(e,n,t)),e[0]=e[e.length-1],od(n),n.repeat=0);const d={startTime:r?this.resolvedAt&&this.resolvedAt-this.createdAt>40?this.resolvedAt:this.createdAt:void 0,finalKeyframe:t,...n,keyframes:e},h=c&&!l&&dd(d),p=d.motionValue?.owner?.current;let f;if(h)try{f=new id({...d,element:p})}catch{f=new wc(d)}else f=new wc(d);f.finished.then(()=>{this.notifyFinished()}).catch(hl),this.pendingTimeline&&(this.stopTimeline=f.attachTimeline(this.pendingTimeline),this.pendingTimeline=void 0),this._animation=f}get finished(){return this._animation?this.animation.finished:this._finished}then(e,t){return this.finished.finally(e).then(()=>{})}get animation(){return this._animation||(this.keyframeResolver?.resume(),Vc=!0,Uc(),Bc(),Vc=!1),this._animation}get duration(){return this.animation.duration}get iterationDuration(){return this.animation.iterationDuration}get time(){return this.animation.time}set time(e){this.animation.time=e}get speed(){return this.animation.speed}get state(){return this.animation.state}set speed(e){this.animation.speed=e}get startTime(){return this.animation.startTime}attachTimeline(e){return this._animation?this.stopTimeline=this.animation.attachTimeline(e):this.pendingTimeline=e,()=>this.stop()}play(){this.animation.play()}pause(){this.animation.pause()}complete(){this.animation.complete()}cancel(){this._animation&&this.animation.cancel(),this.keyframeResolver?.cancel()}}function pd(e,t,n,r=0,i=1){const a=Array.from(e).sort((e,t)=>e.sortNodePosition(t)).indexOf(t),o=e.size,s=(o-1)*r;return"function"==typeof n?n(a,o):1===i?a*r:s-a*r}class fd{constructor(e,t={}){this.canTrackVelocity=null,this.events={},this.updateAndNotify=e=>{const t=Yl.now();if(this.updatedAt!==t&&this.setPrevFrameValue(),this.prev=this.current,this.setCurrent(e),this.current!==this.prev&&(this.events.change?.notify(this.current),this.dependents))for(const n of this.dependents)n.dirty()},this.hasAnimated=!1,this.setCurrent(e),this.owner=t.owner}setCurrent(e){var t;this.current=e,this.updatedAt=Yl.now(),null===this.canTrackVelocity&&void 0!==e&&(this.canTrackVelocity=(t=this.current,!isNaN(parseFloat(t))))}setPrevFrameValue(e=this.current){this.prevFrameValue=e,this.prevUpdatedAt=this.updatedAt}onChange(e){return this.on("change",e)}on(e,t){this.events[e]||(this.events[e]=new ml);const n=this.events[e].add(t);return"change"===e?()=>{n(),Nl.read(()=>{this.events.change.getSize()||this.stop()})}:n}clearListeners(){for(const e in this.events)this.events[e].clear()}attach(e,t){this.passiveEffect=e,this.stopPassiveEffect=t}set(e){this.passiveEffect?this.passiveEffect(e,this.updateAndNotify):this.updateAndNotify(e)}setWithVelocity(e,t,n){this.set(t),this.prev=void 0,this.prevFrameValue=e,this.prevUpdatedAt=this.updatedAt-n}jump(e,t=!0){this.updateAndNotify(e),this.prev=e,this.prevUpdatedAt=this.prevFrameValue=void 0,t&&this.stop(),this.stopPassiveEffect&&this.stopPassiveEffect()}dirty(){this.events.change?.notify(this.current)}addDependent(e){this.dependents||(this.dependents=new Set),this.dependents.add(e)}removeDependent(e){this.dependents&&this.dependents.delete(e)}get(){return this.current}getPrevious(){return this.prev}getVelocity(){const e=Yl.now();if(!this.canTrackVelocity||void 0===this.prevFrameValue||e-this.updatedAt>30)return 0;const t=Math.min(this.updatedAt-this.prevUpdatedAt,30);return vl(parseFloat(this.current)-parseFloat(this.prevFrameValue),t)}start(e){return this.stop(),new Promise(t=>{this.hasAnimated=!0,this.animation=e(t),this.events.animationStart&&this.events.animationStart.notify()}).then(()=>{this.events.animationComplete&&this.events.animationComplete.notify(),this.clearAnimation()})}stop(){this.animation&&(this.animation.stop(),this.events.animationCancel&&this.events.animationCancel.notify()),this.clearAnimation()}isAnimating(){return!!this.animation}clearAnimation(){delete this.animation}destroy(){this.dependents?.clear(),this.events.destroy?.notify(),this.clearListeners(),this.stop(),this.stopPassiveEffect&&this.stopPassiveEffect()}}function md(e,t){return new fd(e,t)}function gd(e,t){if(e?.inherit&&t){const{inherit:n,...r}=e;return{...t,...r}}return e}function yd(e,t){const n=e?.[t]??e?.default??e;return n!==e?gd(n,e):n}const vd={type:"spring",stiffness:500,damping:25,restSpeed:10},xd={type:"keyframes",duration:.8},bd={type:"keyframes",ease:[.25,.1,.35,1],duration:.3},wd=(e,{keyframes:t})=>t.length>2?xd:zc.has(e)?e.startsWith("scale")?{type:"spring",stiffness:550,damping:0===t[1]?2*Math.sqrt(550):30,restSpeed:10}:vd:bd,kd=new Set(["when","delay","delayChildren","staggerChildren","staggerDirection","repeat","repeatType","repeatDelay","from","elapsed"]);const _d=(e,t,n,r={},i,a)=>o=>{const s=yd(r,e)||{},l=s.delay||r.delay||0;let{elapsed:u=0}=r;u-=gl(l);const c={keyframes:Array.isArray(n)?n:[null,n],ease:"easeOut",velocity:t.getVelocity(),...s,delay:-u,onUpdate:e=>{t.set(e),s.onUpdate&&s.onUpdate(e)},onComplete:()=>{o(),s.onComplete&&s.onComplete()},name:e,motionValue:t,element:a?void 0:i};(function(e){for(const t in e)if(!kd.has(t))return!0;return!1})(s)||Object.assign(c,wd(e,c)),c.duration&&(c.duration=gl(c.duration)),c.repeatDelay&&(c.repeatDelay=gl(c.repeatDelay)),void 0!==c.from&&(c.keyframes[0]=c.from);let d=!1;if((!1===c.type||0===c.duration&&!c.repeatDelay)&&(od(c),0===c.delay&&(d=!0)),(sl.instantAnimations||sl.skipAnimations||i?.shouldSkipAnimations||s.skipAnimations)&&(d=!0,od(c),c.delay=0),c.allowFlatten=!s.type&&!s.ease,d&&!a&&void 0!==t.get()){const e=gc(c.keyframes,s);if(void 0!==e)return void Nl.update(()=>{c.onUpdate(e),c.onComplete()})}return s.isSync?new wc(c):new hd(c)},Sd=/^var\(--(?:([\w-]+)|([\w-]+), ?([a-zA-Z\d ()%#.,-]+))\)/u;function jd(e,t,n=1){const[r,i]=function(e){const t=Sd.exec(e);if(!t)return[,];const[,n,r,i]=t;return[`--${n??r}`,i]}(e);if(!r)return;const a=window.getComputedStyle(t).getPropertyValue(r);if(a){const e=a.trim();return ll(e)?parseFloat(e):e}return Gl(i)?jd(i,t,n+1):i}function Td(e){const t=[{},{}];return e?.values.forEach((e,n)=>{t[0][n]=e.get(),t[1][n]=e.getVelocity()}),t}function Cd(e,t,n,r){if("function"==typeof t){const[i,a]=Td(r);t=t(void 0!==n?n:e.custom,i,a)}if("string"==typeof t&&(t=e.variants&&e.variants[t]),"function"==typeof t){const[i,a]=Td(r);t=t(void 0!==n?n:e.custom,i,a)}return t}function Ed(e,t,n){const r=e.getProps();return Cd(r,t,void 0!==n?n:r.custom,e)}const Pd=new Set(["width","height","top","left","right","bottom",...Rc]),Md=e=>Array.isArray(e);function Ad(e,t,n){e.hasValue(t)?e.getValue(t).set(n):e.addValue(t,md(n))}function Rd(e){return Md(e)?e[e.length-1]||0:e}const zd=e=>Boolean(e&&e.getVelocity);function Dd(e,t){const n=e.getValue("willChange");if(r=n,Boolean(zd(r)&&r.add))return n.add(t);if(!n&&sl.WillChange){const n=new sl.WillChange("auto");e.addValue("willChange",n),n.add(t)}var r}function $d(e){return e.replace(/([A-Z])/g,e=>`-${e.toLowerCase()}`)}const Ld="data-"+$d("framerAppearId");function Od(e){return e.props[Ld]}function Id({protectedKeys:e,needsAnimating:t},n){const r=e.hasOwnProperty(n)&&!0!==t[n];return t[n]=!1,r}function Nd(e,t,{delay:n=0,transitionOverride:r,type:i}={}){let{transition:a,transitionEnd:o,...s}=t;const l=e.getDefaultTransition();a=a?gd(a,l):l;const u=a?.reduceMotion,c=a?.skipAnimations;r&&(a=r);const d=[],h=i&&e.animationState&&e.animationState.getState()[i],p=a?.path;p&&p.animateVisualElement(e,s,a,n,d);for(const f in s){const t=e.getValue(f,e.latestValues[f]??null),r=s[f];if(void 0===r||h&&Id(h,f))continue;const i={delay:n,...yd(a||{},f)};c&&(i.skipAnimations=!0);const o=t.get();if(void 0!==o&&!t.isAnimating()&&!Array.isArray(r)&&r===o&&!i.velocity){Nl.update(()=>t.set(r));continue}let l=!1;if(window.MotionHandoffAnimation){const t=Od(e);if(t){const e=window.MotionHandoffAnimation(t,f,Nl);null!==e&&(i.startTime=e,l=!0)}}Dd(e,f);const p=u??e.shouldReduceMotion;t.start(_d(f,t,r,p&&Pd.has(f)?{type:!1}:i,e,l));const m=t.animation;m&&d.push(m)}if(o){const t=()=>Nl.update(()=>{o&&function(e,t){const n=Ed(e,t);let{transitionEnd:r={},transition:i={},...a}=n||{};a={...a,...r};for(const o in a)Ad(e,o,Rd(a[o]))}(e,o)});d.length?Promise.all(d).then(t):t()}return d}function Fd(e,t,n={}){const r=Ed(e,t,"exit"===n.type?e.presenceContext?.custom:void 0);let{transition:i=e.getDefaultTransition()||{}}=r||{};n.transitionOverride&&(i=n.transitionOverride);const a=r?()=>Promise.all(Nd(e,r,n)):()=>Promise.resolve(),o=e.variantChildren&&e.variantChildren.size?(r=0)=>{const{delayChildren:a=0,staggerChildren:o,staggerDirection:s}=i;return function(e,t,n=0,r=0,i=0,a=1,o){const s=[];for(const l of e.variantChildren)l.notify("AnimationStart",t),s.push(Fd(l,t,{...o,delay:n+("function"==typeof r?0:r)+pd(e.variantChildren,l,r,i,a)}).then(()=>l.notify("AnimationComplete",t)));return Promise.all(s)}(e,t,r,a,o,s,n)}:()=>Promise.resolve(),{when:s}=i;if(s){const[e,t]="beforeChildren"===s?[a,o]:[o,a];return e().then(()=>t())}return Promise.all([a(),o(n.delay)])}const Vd=e=>t=>t.test(e),Bd=[Zl,hu,du,cu,fu,pu,{test:e=>"auto"===e,parse:e=>e}],Ud=e=>Bd.find(Vd(e));function Wd(e){return"number"==typeof e?0===e:null===e||("none"===e||"0"===e||cl(e))}const Yd=new Set(["brightness","contrast","saturate","opacity"]);function Hd(e){const[t,n]=e.slice(0,-1).split("(");if("drop-shadow"===t)return e;const[r]=n.match(nu)||[];if(!r)return e;const i=n.replace(r,"");let a=Yd.has(t)?1:0;return r!==n&&(a*=100),t+"("+a+i+")"}const qd=/\b([a-z-]*)\(.*?\)/gu,Xd={...ju,getAnimatableNone:e=>{const t=e.match(qd);return t?t.map(Hd).join(" "):e}},Gd={...ju,getAnimatableNone:e=>{const t=ju.parse(e);return ju.createTransformer(e)(t.map(e=>"number"==typeof e?0:"object"==typeof e?{...e,alpha:1}:e))}},Kd={...Zl,transform:Math.round},Qd={borderWidth:hu,borderTopWidth:hu,borderRightWidth:hu,borderBottomWidth:hu,borderLeftWidth:hu,borderRadius:hu,borderTopLeftRadius:hu,borderTopRightRadius:hu,borderBottomRightRadius:hu,borderBottomLeftRadius:hu,width:hu,maxWidth:hu,height:hu,maxHeight:hu,top:hu,right:hu,bottom:hu,left:hu,inset:hu,insetBlock:hu,insetBlockStart:hu,insetBlockEnd:hu,insetInline:hu,insetInlineStart:hu,insetInlineEnd:hu,padding:hu,paddingTop:hu,paddingRight:hu,paddingBottom:hu,paddingLeft:hu,paddingBlock:hu,paddingBlockStart:hu,paddingBlockEnd:hu,paddingInline:hu,paddingInlineStart:hu,paddingInlineEnd:hu,margin:hu,marginTop:hu,marginRight:hu,marginBottom:hu,marginLeft:hu,marginBlock:hu,marginBlockStart:hu,marginBlockEnd:hu,marginInline:hu,marginInlineStart:hu,marginInlineEnd:hu,fontSize:hu,backgroundPositionX:hu,backgroundPositionY:hu,...{rotate:cu,pathRotation:cu,rotateX:cu,rotateY:cu,rotateZ:cu,scale:eu,scaleX:eu,scaleY:eu,scaleZ:eu,skew:cu,skewX:cu,skewY:cu,distance:hu,translateX:hu,translateY:hu,translateZ:hu,x:hu,y:hu,z:hu,perspective:hu,transformPerspective:hu,opacity:Jl,originX:mu,originY:mu,originZ:hu},zIndex:Kd,fillOpacity:Jl,strokeOpacity:Jl,numOctaves:Kd},Zd={...Qd,color:yu,backgroundColor:yu,outlineColor:yu,fill:yu,stroke:yu,borderColor:yu,borderTopColor:yu,borderRightColor:yu,borderBottomColor:yu,borderLeftColor:yu,filter:Xd,WebkitFilter:Xd,mask:Gd,WebkitMask:Gd},Jd=e=>Zd[e],eh=new Set([Xd,Gd]);function th(e,t){let n=Jd(e);return eh.has(n)||(n=ju),n.getAnimatableNone?n.getAnimatableNone(t):void 0}const nh=new Set(["auto","none","0"]);class rh extends Wc{constructor(e,t,n,r,i){super(e,t,n,r,i,!0)}readKeyframes(){const{unresolvedKeyframes:e,element:t,name:n}=this;if(!t||!t.current)return;super.readKeyframes();for(let s=0;s<e.length;s++){let n=e[s];if("string"==typeof n&&(n=n.trim(),Gl(n))){const r=jd(n,t.current);void 0!==r&&(e[s]=r),s===e.length-1&&(this.finalKeyframe=n)}}if(this.resolveNoneKeyframes(),!Pd.has(n)||2!==e.length)return;const[r,i]=e,a=Ud(r),o=Ud(i);if(Ql(r)!==Ql(i)&&Oc[n])this.needsMeasurement=!0;else if(a!==o)if(Dc(a)&&Dc(o))for(let s=0;s<e.length;s++){const t=e[s];"string"==typeof t&&(e[s]=parseFloat(t))}else Oc[n]&&(this.needsMeasurement=!0)}resolveNoneKeyframes(){const{unresolvedKeyframes:e,name:t}=this,n=[];for(let r=0;r<e.length;r++)(null===e[r]||Wd(e[r]))&&n.push(r);n.length&&function(e,t,n){let r,i=0;for(;i<e.length&&!r;){const t=e[i];"string"==typeof t&&!nh.has(t)&&ku(t).values.length&&(r=e[i]),i++}if(r&&n)for(const a of t)e[a]=th(n,r)}(e,n,t)}measureInitialState(){const{element:e,unresolvedKeyframes:t,name:n}=this;if(!e||!e.current)return;"height"===n&&(this.suspendedScrollY=window.pageYOffset),this.measuredOrigin=Oc[n](e.measureViewportBox(),window.getComputedStyle(e.current)),t[0]=this.measuredOrigin;const r=t[t.length-1];void 0!==r&&e.getValue(n,r).jump(r,!1)}measureEndState(){const{element:e,name:t,unresolvedKeyframes:n}=this;if(!e||!e.current)return;const r=e.getValue(t);r&&r.jump(this.measuredOrigin,!1);const i=n.length-1,a=n[i];n[i]=Oc[t](e.measureViewportBox(),window.getComputedStyle(e.current)),null!==a&&void 0===this.finalKeyframe&&(this.finalKeyframe=a),this.removedTransforms?.length&&this.removedTransforms.forEach(([t,n])=>{e.getValue(t).set(n)}),this.resolveNoneKeyframes()}}function ih(e,t,n){if(null==e)return[];if(e instanceof EventTarget)return[e];if("string"==typeof e){let t=document;const r=n?.[e]??t.querySelectorAll(e);return r?Array.from(r):[]}return Array.from(e).filter(e=>null!=e)}const ah=(e,t)=>t&&"number"==typeof e?t.transform(e):e;const{schedule:oh}=Il(queueMicrotask,!1),sh={x:!1,y:!1};function lh(){return sh.x||sh.y}function uh(e,t){const n=ih(e),r=new AbortController;return[n,{passive:!0,...t,signal:r.signal},()=>r.abort()]}function ch(e,t,n={}){const[r,i,a]=uh(e,n);return r.forEach(e=>{let n,r=!1,a=!1;const o=t=>{n&&(n(t),n=void 0),e.removeEventListener("pointerleave",l)},s=e=>{r=!1,window.removeEventListener("pointerup",s),window.removeEventListener("pointercancel",s),a&&(a=!1,o(e))},l=e=>{"touch"!==e.pointerType&&(r?a=!0:o(e))};e.addEventListener("pointerenter",r=>{if("touch"===r.pointerType||lh())return;a=!1;const o=t(e,r);"function"==typeof o&&(n=o,e.addEventListener("pointerleave",l,i))},i),e.addEventListener("pointerdown",()=>{r=!0,window.addEventListener("pointerup",s,i),window.addEventListener("pointercancel",s,i)},i)}),a}const dh=(e,t)=>!!t&&(e===t||dh(e,t.parentElement)),hh=e=>"mouse"===e.pointerType?"number"!=typeof e.button||e.button<=0:!1!==e.isPrimary,ph=new Set(["BUTTON","INPUT","SELECT","TEXTAREA","A"]);const fh=new Set(["INPUT","SELECT","TEXTAREA"]);const mh=new WeakSet;function gh(e){return t=>{"Enter"===t.key&&e(t)}}function yh(e,t){e.dispatchEvent(new PointerEvent("pointer"+t,{isPrimary:!0,bubbles:!0}))}function vh(e){return hh(e)&&!lh()}const xh=new WeakSet;function bh(e,t,n={}){const[r,i,a]=uh(e,n),o=e=>{const r=e.currentTarget;if(!vh(e))return;if(xh.has(e))return;mh.add(r),n.stopPropagation&&xh.add(e);const a=t(r,e),o=(e,t)=>{window.removeEventListener("pointerup",s),window.removeEventListener("pointercancel",l),mh.has(r)&&mh.delete(r),vh(e)&&"function"==typeof a&&a(e,{success:t})},s=e=>{o(e,r===window||r===document||n.useGlobalTarget||dh(r,e.target))},l=e=>{o(e,!1)};window.addEventListener("pointerup",s,i),window.addEventListener("pointercancel",l,i)};return r.forEach(e=>{var t;(n.useGlobalTarget?window:e).addEventListener("pointerdown",o,i),ul(t=e)&&"offsetHeight"in t&&!("ownerSVGElement"in t)&&(e.addEventListener("focus",e=>((e,t)=>{const n=e.currentTarget;if(!n)return;const r=gh(()=>{if(mh.has(n))return;yh(n,"down");const e=gh(()=>{yh(n,"up")});n.addEventListener("keyup",e,t),n.addEventListener("blur",()=>yh(n,"cancel"),t)});n.addEventListener("keydown",r,t),n.addEventListener("blur",()=>n.removeEventListener("keydown",r),t)})(e,i)),function(e){return ph.has(e.tagName)||!0===e.isContentEditable}(e)||e.hasAttribute("tabindex")||(e.tabIndex=0))}),a}function wh(e){return ul(e)&&"ownerSVGElement"in e}const kh=new WeakMap;let _h;const Sh=(e,t,n)=>(r,i)=>i&&i[0]?i[0][e+"Size"]:wh(r)&&"getBBox"in r?r.getBBox()[t]:r[n],jh=Sh("inline","width","offsetWidth"),Th=Sh("block","height","offsetHeight");function Ch({target:e,borderBoxSize:t}){kh.get(e)?.forEach(n=>{n(e,{get width(){return jh(e,t)},get height(){return Th(e,t)}})})}function Eh(e){e.forEach(Ch)}function Ph(e,t){_h||"undefined"!=typeof ResizeObserver&&(_h=new ResizeObserver(Eh));const n=ih(e);return n.forEach(e=>{let n=kh.get(e);n||(n=new Set,kh.set(e,n)),n.add(t),_h?.observe(e)}),()=>{n.forEach(e=>{const n=kh.get(e);n?.delete(t),n?.size||_h?.unobserve(e)})}}const Mh=new Set;let Ah;function Rh(e){return Mh.add(e),Ah||(Ah=()=>{const e={get width(){return window.innerWidth},get height(){return window.innerHeight}};Mh.forEach(t=>t(e))},window.addEventListener("resize",Ah)),()=>{Mh.delete(e),Mh.size||"function"!=typeof Ah||(window.removeEventListener("resize",Ah),Ah=void 0)}}function zh(e,t){return"function"==typeof e?Rh(e):Ph(e,t)}const Dh=[...Bd,yu,ju],$h=()=>({x:{min:0,max:0},y:{min:0,max:0}}),Lh=new WeakMap;function Oh(e){return null!==e&&"object"==typeof e&&"function"==typeof e.start}function Ih(e){return"string"==typeof e||Array.isArray(e)}const Nh=["animate","whileInView","whileFocus","whileHover","whileTap","whileDrag","exit"],Fh=["initial",...Nh];function Vh(e){return Oh(e.animate)||Fh.some(t=>Ih(e[t]))}function Bh(e){return Boolean(Vh(e)||e.variants)}const Uh={current:null},Wh={current:!1},Yh="undefined"!=typeof window;const Hh=["AnimationStart","AnimationComplete","Update","BeforeLayoutMeasure","LayoutMeasure","LayoutAnimationStart","LayoutAnimationComplete"];let qh={};function Xh(e){qh=e}class Gh{scrapeMotionValuesFromProps(e,t,n){return{}}constructor({parent:e,props:t,presenceContext:n,reducedMotionConfig:r,skipAnimations:i,blockInitialAnimation:a,visualState:o},s={}){this.current=null,this.children=new Set,this.isVariantNode=!1,this.isControllingVariants=!1,this.shouldReduceMotion=null,this.shouldSkipAnimations=!1,this.values=new Map,this.KeyframeResolver=Wc,this.features={},this.valueSubscriptions=new Map,this.prevMotionValues={},this.hasBeenMounted=!1,this.events={},this.propEventSubscriptions={},this.notifyUpdate=()=>this.notify("Update",this.latestValues),this.render=()=>{this.current&&(this.triggerBuild(),this.renderInstance(this.current,this.renderState,this.props.style,this.projection))},this.renderScheduledAt=0,this.scheduleRender=()=>{const e=Yl.now();this.renderScheduledAt<e&&(this.renderScheduledAt=e,Nl.render(this.render,!1,!0))};const{latestValues:l,renderState:u}=o;this.latestValues=l,this.baseTarget={...l},this.initialValues=t.initial?{...l}:{},this.renderState=u,this.parent=e,this.props=t,this.presenceContext=n,this.depth=e?e.depth+1:0,this.reducedMotionConfig=r,this.skipAnimationsConfig=i,this.options=s,this.blockInitialAnimation=Boolean(a),this.isControllingVariants=Vh(t),this.isVariantNode=Bh(t),this.isVariantNode&&(this.variantChildren=new Set),this.manuallyAnimateOnMount=Boolean(e&&e.current);const{willChange:c,...d}=this.scrapeMotionValuesFromProps(t,{},this);for(const h in d){const e=d[h];void 0!==l[h]&&zd(e)&&e.set(l[h])}}mount(e){if(this.hasBeenMounted)for(const t in this.initialValues)this.values.get(t)?.jump(this.initialValues[t]),this.latestValues[t]=this.initialValues[t];this.current=e,Lh.set(e,this),this.projection&&!this.projection.instance&&this.projection.mount(e),this.parent&&this.isVariantNode&&!this.isControllingVariants&&(this.removeFromVariantTree=this.parent.addVariantChild(this)),this.values.forEach((e,t)=>this.bindToMotionValue(t,e)),"never"===this.reducedMotionConfig?this.shouldReduceMotion=!1:"always"===this.reducedMotionConfig?this.shouldReduceMotion=!0:(Wh.current||function(){if(Wh.current=!0,Yh)if(window.matchMedia){const e=window.matchMedia("(prefers-reduced-motion)"),t=()=>Uh.current=e.matches;e.addEventListener("change",t),t()}else Uh.current=!1}(),this.shouldReduceMotion=Uh.current),this.shouldSkipAnimations=this.skipAnimationsConfig??!1,this.parent?.addChild(this),this.update(this.props,this.presenceContext),this.hasBeenMounted=!0}unmount(){this.projection&&this.projection.unmount(),Fl(this.notifyUpdate),Fl(this.render),this.valueSubscriptions.forEach(e=>e()),this.valueSubscriptions.clear(),this.removeFromVariantTree&&this.removeFromVariantTree(),this.parent?.removeChild(this);for(const e in this.events)this.events[e].clear();for(const e in this.features){const t=this.features[e];t&&(t.unmount(),t.isMounted=!1)}this.current=null}addChild(e){this.children.add(e),this.enteringChildren??(this.enteringChildren=new Set),this.enteringChildren.add(e)}removeChild(e){this.children.delete(e),this.enteringChildren&&this.enteringChildren.delete(e)}bindToMotionValue(e,t){if(this.valueSubscriptions.has(e)&&this.valueSubscriptions.get(e)(),t.accelerate&&sd.has(e)&&this.current instanceof HTMLElement){const{factory:n,keyframes:r,times:i,ease:a,duration:o}=t.accelerate,s=new td({element:this.current,name:e,keyframes:r,times:i,ease:a,duration:gl(o)}),l=n(s);return void this.valueSubscriptions.set(e,()=>{l(),s.cancel()})}const n=zc.has(e);n&&this.onBindTransform&&this.onBindTransform();const r=t.on("change",t=>{this.latestValues[e]=t,this.props.onUpdate&&Nl.preRender(this.notifyUpdate),n&&this.projection&&(this.projection.isTransformDirty=!0),this.scheduleRender()});let i;"undefined"!=typeof window&&window.MotionCheckAppearSync&&(i=window.MotionCheckAppearSync(this,e,t)),this.valueSubscriptions.set(e,()=>{r(),i&&i()})}sortNodePosition(e){return this.current&&this.sortInstanceNodePosition&&this.type===e.type?this.sortInstanceNodePosition(this.current,e.current):0}updateFeatures(){let e="animation";for(e in qh){const t=qh[e];if(!t)continue;const{isEnabled:n,Feature:r}=t;if(!this.features[e]&&r&&n(this.props)&&(this.features[e]=new r(this)),this.features[e]){const t=this.features[e];t.isMounted?t.update():(t.mount(),t.isMounted=!0)}}}triggerBuild(){this.build(this.renderState,this.latestValues,this.props)}measureViewportBox(){return this.current?this.measureInstanceViewportBox(this.current,this.props):{x:{min:0,max:0},y:{min:0,max:0}}}getStaticValue(e){return this.latestValues[e]}setStaticValue(e,t){this.latestValues[e]=t}update(e,t){(e.transformTemplate||this.props.transformTemplate)&&this.scheduleRender(),this.prevProps=this.props,this.props=e,this.prevPresenceContext=this.presenceContext,this.presenceContext=t;for(let n=0;n<Hh.length;n++){const t=Hh[n];this.propEventSubscriptions[t]&&(this.propEventSubscriptions[t](),delete this.propEventSubscriptions[t]);const r=e["on"+t];r&&(this.propEventSubscriptions[t]=this.on(t,r))}this.prevMotionValues=function(e,t,n){for(const r in t){const i=t[r],a=n[r];if(zd(i))e.addValue(r,i);else if(zd(a))e.addValue(r,md(i,{owner:e}));else if(a!==i)if(e.hasValue(r)){const t=e.getValue(r);!0===t.liveStyle?t.jump(i):t.hasAnimated||t.set(i)}else{const t=e.getStaticValue(r);e.addValue(r,md(void 0!==t?t:i,{owner:e}))}}for(const r in n)void 0===t[r]&&e.removeValue(r);return t}(this,this.scrapeMotionValuesFromProps(e,this.prevProps||{},this),this.prevMotionValues),this.handleChildMotionValue&&this.handleChildMotionValue()}getProps(){return this.props}getVariant(e){return this.props.variants?this.props.variants[e]:void 0}getDefaultTransition(){return this.props.transition}getTransformPagePoint(){return this.props.transformPagePoint}getClosestVariantNode(){return this.isVariantNode?this:this.parent?this.parent.getClosestVariantNode():void 0}addVariantChild(e){const t=this.getClosestVariantNode();if(t)return t.variantChildren&&t.variantChildren.add(e),()=>t.variantChildren.delete(e)}addValue(e,t){const n=this.values.get(e);t!==n&&(n&&this.removeValue(e),this.bindToMotionValue(e,t),this.values.set(e,t),this.latestValues[e]=t.get())}removeValue(e){this.values.delete(e);const t=this.valueSubscriptions.get(e);t&&(t(),this.valueSubscriptions.delete(e)),delete this.latestValues[e],this.removeValueFromRenderState(e,this.renderState)}hasValue(e){return this.values.has(e)}getValue(e,t){if(this.props.values&&this.props.values[e])return this.props.values[e];let n=this.values.get(e);return void 0===n&&void 0!==t&&(n=md(null===t?void 0:t,{owner:this}),this.addValue(e,n)),n}readValue(e,t){let n=void 0===this.latestValues[e]&&this.current?this.getBaseTargetFromProps(this.props,e)??this.readValueFromInstance(this.current,e,this.options):this.latestValues[e];var r;return null!=n&&("string"==typeof n&&(ll(n)||cl(n))?n=parseFloat(n):(r=n,!Dh.find(Vd(r))&&ju.test(t)&&(n=th(e,t))),this.setBaseTarget(e,zd(n)?n.get():n)),zd(n)?n.get():n}setBaseTarget(e,t){this.baseTarget[e]=t}getBaseTarget(e){const{initial:t}=this.props;let n;if("string"==typeof t||"object"==typeof t){const r=Cd(this.props,t,this.presenceContext?.custom);r&&(n=r[e])}if(t&&void 0!==n)return n;const r=this.getBaseTargetFromProps(this.props,e);return void 0===r||zd(r)?void 0!==this.initialValues[e]&&void 0===n?void 0:this.baseTarget[e]:r}on(e,t){return this.events[e]||(this.events[e]=new ml),this.events[e].add(t)}notify(e,...t){this.events[e]&&this.events[e].notify(...t)}scheduleRenderMicrotask(){oh.render(this.render)}}class Kh extends Gh{constructor(){super(...arguments),this.KeyframeResolver=rh}sortInstanceNodePosition(e,t){return 2&e.compareDocumentPosition(t)?1:-1}getBaseTargetFromProps(e,t){const n=e.style;return n?n[t]:void 0}removeValueFromRenderState(e,{vars:t,style:n}){delete t[e],delete n[e]}handleChildMotionValue(){this.childSubscription&&(this.childSubscription(),delete this.childSubscription);const{children:e}=this.props;zd(e)&&(this.childSubscription=e.on("change",e=>{this.current&&(this.current.textContent=`${e}`)}))}}let Qh=class{constructor(e){this.isMounted=!1,this.node=e}update(){}};function Zh({top:e,left:t,right:n,bottom:r}){return{x:{min:t,max:n},y:{min:e,max:r}}}function Jh(e){return void 0===e||1===e}function ep({scale:e,scaleX:t,scaleY:n}){return!Jh(e)||!Jh(t)||!Jh(n)}function tp(e){return ep(e)||np(e)||e.z||e.rotate||e.rotateX||e.rotateY||e.skewX||e.skewY}function np(e){return rp(e.x)||rp(e.y)}function rp(e){return e&&"0%"!==e}function ip(e,t,n){return n+t*(e-n)}function ap(e,t,n,r,i){return void 0!==i&&(e=ip(e,i,r)),ip(e,n,r)+t}function op(e,t=0,n=1,r,i){e.min=ap(e.min,t,n,r,i),e.max=ap(e.max,t,n,r,i)}function sp(e,{x:t,y:n}){op(e.x,t.translate,t.scale,t.originPoint),op(e.y,n.translate,n.scale,n.originPoint)}const lp=.999999999999,up=1.0000000000001;function cp(e,t){e.min+=t,e.max+=t}function dp(e,t,n,r,i=.5){op(e,t,n,Eu(e.min,e.max,i),r)}function hp(e,t){return"string"==typeof e?parseFloat(e)/100*(t.max-t.min):e}function pp(e,t,n){const r=n??e;dp(e.x,hp(t.x,r.x),t.scaleX,t.scale,t.originX),dp(e.y,hp(t.y,r.y),t.scaleY,t.scale,t.originY)}function fp(e,t){return Zh(function(e,t){if(!t)return e;const n=t({x:e.left,y:e.top}),r=t({x:e.right,y:e.bottom});return{top:n.y,left:n.x,bottom:r.y,right:r.x}}(e.getBoundingClientRect(),t))}const mp={x:"translateX",y:"translateY",z:"translateZ",transformPerspective:"perspective"},gp=Rc.length;function yp(e,t,n){const{style:r,vars:i,transformOrigin:a}=e;let o=!1,s=!1;for(const l in t){const e=t[l];if(zc.has(l))o=!0;else if(ql(l))i[l]=e;else{const t=ah(e,Qd[l]);l.startsWith("origin")?(s=!0,a[l]=t):r[l]=t}}if(t.transform||(o||n?r.transform=function(e,t,n){let r="",i=!0;for(let o=0;o<gp;o++){const a=Rc[o],s=e[a];if(void 0===s)continue;let l=!0;if("number"==typeof s)l=s===(a.startsWith("scale")?1:0);else{const e=parseFloat(s);l=a.startsWith("scale")?1===e:0===e}if(!l||n){const e=ah(s,Qd[a]);l||(i=!1,r+=`${mp[a]||a}(${e}) `),n&&(t[a]=e)}}const a=e.pathRotation;return a&&(i=!1,r+=`rotate(${ah(a,Qd.pathRotation)}) `),r=r.trim(),n?r=n(t,i?"":r):i&&(r="none"),r}(t,e.transform,n):r.transform&&(r.transform="none")),s){const{originX:e="50%",originY:t="50%",originZ:n=0}=a;r.transformOrigin=`${e} ${t} ${n}`}}function vp(e,{style:t,vars:n},r,i){const a=e.style;let o;for(o in t)a[o]=t[o];for(o in i?.applyProjectionStyles(a,r),n)a.setProperty(o,n[o])}function xp(e,t){return t.max===t.min?0:e/(t.max-t.min)*100}const bp={correct:(e,t)=>{if(!t.target)return e;if("string"==typeof e){if(!hu.test(e))return e;e=parseFloat(e)}return`${xp(e,t.target.x)}% ${xp(e,t.target.y)}%`}},wp={correct:(e,{treeScale:t,projectionDelta:n})=>{const r=e,i=ju.parse(e);if(i.length>5)return r;const a=ju.createTransformer(e),o="number"!=typeof i[0]?1:0,s=n.x.scale*t.x,l=n.y.scale*t.y;i[0+o]/=s,i[1+o]/=l;const u=Eu(s,l,.5);return"number"==typeof i[2+o]&&(i[2+o]/=u),"number"==typeof i[3+o]&&(i[3+o]/=u),a(i)}},kp={borderRadius:{...bp,applyTo:["borderTopLeftRadius","borderTopRightRadius","borderBottomLeftRadius","borderBottomRightRadius"]},borderTopLeftRadius:bp,borderTopRightRadius:bp,borderBottomLeftRadius:bp,borderBottomRightRadius:bp,boxShadow:wp};function _p(e,{layout:t,layoutId:n}){return zc.has(e)||e.startsWith("origin")||(t||void 0!==n)&&(!!kp[e]||"opacity"===e)}function Sp(e,t,n){const r=e.style,i=t?.style,a={};if(!r)return a;for(const o in r)(zd(r[o])||i&&zd(i[o])||_p(o,e)||void 0!==n?.getValue(o)?.liveStyle)&&(a[o]=r[o]);return a}class jp extends Kh{constructor(){super(...arguments),this.type="html",this.renderInstance=vp}readValueFromInstance(e,t){if(zc.has(t))return this.projection?.isProjecting?Pc(t):((e,t)=>{const{transform:n="none"}=getComputedStyle(e);return Mc(n,t)})(e,t);{const r=(n=e,window.getComputedStyle(n)),i=(ql(t)?r.getPropertyValue(t):r[t])||0;return"string"==typeof i?i.trim():i}var n}measureInstanceViewportBox(e,{transformPagePoint:t}){return fp(e,t)}build(e,t,n){yp(e,t,n.transformTemplate)}scrapeMotionValuesFromProps(e,t,n){return Sp(e,t,n)}}const Tp={offset:"stroke-dashoffset",array:"stroke-dasharray"},Cp={offset:"strokeDashoffset",array:"strokeDasharray"};const Ep=["offsetDistance","offsetPath","offsetRotate","offsetAnchor"];function Pp(e,{attrX:t,attrY:n,attrScale:r,pathLength:i,pathSpacing:a=1,pathOffset:o=0,...s},l,u,c){if(yp(e,s,u),l)return void(e.style.viewBox&&(e.attrs.viewBox=e.style.viewBox));e.attrs=e.style,e.style={};const{attrs:d,style:h}=e;d.transform&&(h.transform=d.transform,delete d.transform),(h.transform||d.transformOrigin)&&(h.transformOrigin=d.transformOrigin??"50% 50%",delete d.transformOrigin),h.transform&&(h.transformBox=c?.transformBox??"fill-box",delete d.transformBox);for(const p of Ep)void 0!==d[p]&&(h[p]=d[p],delete d[p]);void 0!==t&&(d.x=t),void 0!==n&&(d.y=n),void 0!==r&&(d.scale=r),void 0!==i&&function(e,t,n=1,r=0,i=!0){e.pathLength=1;const a=i?Tp:Cp;e[a.offset]=""+-r,e[a.array]=`${t} ${n}`}(d,i,a,o,!1)}const Mp=new Set(["baseFrequency","diffuseConstant","kernelMatrix","kernelUnitLength","keySplines","keyTimes","limitingConeAngle","markerHeight","markerWidth","numOctaves","targetX","targetY","surfaceScale","specularConstant","specularExponent","stdDeviation","tableValues","viewBox","gradientTransform","pathLength","startOffset","textLength","lengthAdjust"]),Ap=e=>"string"==typeof e&&"svg"===e.toLowerCase();function Rp(e,t,n){const r=Sp(e,t,n);for(const i in e)if(zd(e[i])||zd(t[i])){r[-1!==Rc.indexOf(i)?"attr"+i.charAt(0).toUpperCase()+i.substring(1):i]=e[i]}return r}class zp extends Kh{constructor(){super(...arguments),this.type="svg",this.isSVGTag=!1,this.measureInstanceViewportBox=$h}getBaseTargetFromProps(e,t){return e[t]}readValueFromInstance(e,t){if(zc.has(t)){const e=Jd(t);return e&&e.default||0}return t=Mp.has(t)?t:$d(t),e.getAttribute(t)}scrapeMotionValuesFromProps(e,t,n){return Rp(e,t,n)}build(e,t,n){Pp(e,t,this.isSVGTag,n.transformTemplate,n.style)}renderInstance(e,t,n,r){!function(e,t,n,r){vp(e,t,void 0,r);for(const i in t.attrs)e.setAttribute(Mp.has(i)?i:$d(i),t.attrs[i])}(e,t,0,r)}mount(e){this.isSVGTag=Ap(e.tagName),super.mount(e)}}const Dp=Fh.length;function $p(e){if(!e)return;if(!e.isControllingVariants){const t=e.parent&&$p(e.parent)||{};return void 0!==e.props.initial&&(t.initial=e.props.initial),t}const t={};for(let n=0;n<Dp;n++){const r=Fh[n],i=e.props[r];(Ih(i)||!1===i)&&(t[r]=i)}return t}function Lp(e,t){if(!Array.isArray(t))return!1;const n=t.length;if(n!==e.length)return!1;for(let r=0;r<n;r++)if(t[r]!==e[r])return!1;return!0}const Op=[...Nh].reverse(),Ip=Nh.length;function Np(e){return t=>Promise.all(t.map(({animation:t,options:n})=>function(e,t,n={}){let r;if(e.notify("AnimationStart",t),Array.isArray(t)){const i=t.map(t=>Fd(e,t,n));r=Promise.all(i)}else if("string"==typeof t)r=Fd(e,t,n);else{const i="function"==typeof t?Ed(e,t,n.custom):t;r=Promise.all(Nd(e,i,n))}return r.then(()=>{e.notify("AnimationComplete",t)})}(e,t,n)))}function Fp(e){let t=Np(e),n=Up(),r=!0,i=!1;const a=t=>(n,r)=>{const i=Ed(e,r,"exit"===t?e.presenceContext?.custom:void 0);if(i){const{transition:e,transitionEnd:t,...r}=i;n={...n,...r,...t}}return n};function o(o){const{props:s}=e,l=$p(e.parent)||{},u=[],c=new Set;let d={},h=1/0;for(let t=0;t<Ip;t++){const p=Op[t],f=n[p],m=void 0!==s[p]?s[p]:l[p],g=Ih(m),y=p===o?f.isActive:null;!1===y&&(h=t);let v=m===l[p]&&m!==s[p]&&g;if(v&&(r||i)&&e.manuallyAnimateOnMount&&(v=!1),f.protectedKeys={...d},!f.isActive&&null===y||!m&&!f.prevProp||Oh(m)||"boolean"==typeof m)continue;if("exit"===p&&f.isActive&&!0!==y){f.prevResolvedValues&&(d={...d,...f.prevResolvedValues});continue}const x=Vp(f.prevProp,m);let b=x||p===o&&f.isActive&&!v&&g||t>h&&g,w=!1;const k=Array.isArray(m)?m:[m];let _=k.reduce(a(p),{});!1===y&&(_={});const{prevResolvedValues:S={}}=f,j={...S,..._},T=t=>{b=!0,c.has(t)&&(w=!0,c.delete(t)),f.needsAnimating[t]=!0;const n=e.getValue(t);n&&(n.liveStyle=!1)};for(const e in j){const t=_[e],n=S[e];if(d.hasOwnProperty(e))continue;let r=!1;r=Md(t)&&Md(n)?!Lp(t,n)||x:t!==n,r?null!=t?T(e):c.add(e):void 0!==t&&c.has(e)?T(e):f.protectedKeys[e]=!0}f.prevProp=m,f.prevResolvedValues=_,f.isActive&&(d={...d,..._}),(r||i)&&e.blockInitialAnimation&&(b=!1);const C=v&&x;b&&(!C||w)&&u.push(...k.map(t=>{const n={type:p};if("string"==typeof t&&(r||i)&&!C&&e.manuallyAnimateOnMount&&e.parent){const{parent:r}=e,i=Ed(r,t);if(r.enteringChildren&&i){const{delayChildren:t}=i.transition||{};n.delay=pd(r.enteringChildren,e,t)}}return{animation:t,options:n}}))}if(c.size){const t={};if("boolean"!=typeof s.initial){const n=Ed(e,Array.isArray(s.initial)?s.initial[0]:s.initial);n&&n.transition&&(t.transition=n.transition)}c.forEach(n=>{const r=e.getBaseTarget(n),i=e.getValue(n);i&&(i.liveStyle=!0),t[n]=r??null}),u.push({animation:t})}let p=Boolean(u.length);return!r||!1!==s.initial&&s.initial!==s.animate||e.manuallyAnimateOnMount||(p=!1),r=!1,i=!1,p?t(u):Promise.resolve()}return{animateChanges:o,setActive:function(t,r){if(n[t].isActive===r)return Promise.resolve();e.variantChildren?.forEach(e=>e.animationState?.setActive(t,r)),n[t].isActive=r;const i=o(t);for(const e in n)n[e].protectedKeys={};return i},setAnimateFunction:function(n){t=n(e)},getState:()=>n,reset:()=>{n=Up(),i=!0}}}function Vp(e,t){return"string"==typeof t?t!==e:!!Array.isArray(t)&&!Lp(t,e)}function Bp(e=!1){return{isActive:e,protectedKeys:{},needsAnimating:{},prevResolvedValues:{}}}function Up(){return{animate:Bp(!0),whileInView:Bp(),whileHover:Bp(),whileTap:Bp(),whileDrag:Bp(),whileFocus:Bp(),exit:Bp()}}function Wp(e,t){e.min=t.min,e.max=t.max}function Yp(e,t){Wp(e.x,t.x),Wp(e.y,t.y)}function Hp(e,t){e.translate=t.translate,e.scale=t.scale,e.originPoint=t.originPoint,e.origin=t.origin}function qp(e){return e.max-e.min}function Xp(e,t,n,r=.5){e.origin=r,e.originPoint=Eu(t.min,t.max,e.origin),e.scale=qp(n)/qp(t),e.translate=Eu(n.min,n.max,e.origin)-e.originPoint,(e.scale>=.9999&&e.scale<=1.0001||isNaN(e.scale))&&(e.scale=1),(e.translate>=-.01&&e.translate<=.01||isNaN(e.translate))&&(e.translate=0)}function Gp(e,t,n,r){Xp(e.x,t.x,n.x,r?r.originX:void 0),Xp(e.y,t.y,n.y,r?r.originY:void 0)}function Kp(e,t,n,r=0){const i=r?Eu(n.min,n.max,r):n.min;e.min=i+t.min,e.max=e.min+qp(t)}function Qp(e,t,n,r=0){const i=r?Eu(n.min,n.max,r):n.min;e.min=t.min-i,e.max=e.min+qp(t)}function Zp(e,t,n,r){Qp(e.x,t.x,n.x,r?.x),Qp(e.y,t.y,n.y,r?.y)}function Jp(e,t,n,r,i){return e=ip(e-=t,1/n,r),void 0!==i&&(e=ip(e,1/i,r)),e}function ef(e,t,[n,r,i],a,o){!function(e,t=0,n=1,r=.5,i,a=e,o=e){du.test(t)&&(t=parseFloat(t),t=Eu(o.min,o.max,t/100)-o.min);if("number"!=typeof t)return;let s=Eu(a.min,a.max,r);e===a&&(s-=t),e.min=Jp(e.min,t,n,s,i),e.max=Jp(e.max,t,n,s,i)}(e,t[n],t[r],t[i],t.scale,a,o)}const tf=["x","scaleX","originX"],nf=["y","scaleY","originY"];function rf(e,t,n,r){ef(e.x,t,tf,n?n.x:void 0,r?r.x:void 0),ef(e.y,t,nf,n?n.y:void 0,r?r.y:void 0)}function af(e){return 0===e.translate&&1===e.scale}function of(e){return af(e.x)&&af(e.y)}function sf(e,t){return e.min===t.min&&e.max===t.max}function lf(e,t){return Math.round(e.min)===Math.round(t.min)&&Math.round(e.max)===Math.round(t.max)}function uf(e,t){return lf(e.x,t.x)&&lf(e.y,t.y)}function cf(e){return qp(e.x)/qp(e.y)}function df(e,t){return e.translate===t.translate&&e.scale===t.scale&&e.originPoint===t.originPoint}function hf(e){return[e("x"),e("y")]}const pf=["borderTopLeftRadius","borderTopRightRadius","borderBottomLeftRadius","borderBottomRightRadius"],ff=pf.length,mf=e=>"string"==typeof e?parseFloat(e):e,gf=e=>"number"==typeof e||hu.test(e);function yf(e,t){return void 0!==e[t]?e[t]:e.borderRadius}const vf=bf(0,.5,El),xf=bf(.5,.95,hl);function bf(e,t,n){return r=>r<e?0:r>t?1:n(fl(e,t,r))}function wf(e,t,n,r={passive:!0}){return e.addEventListener(t,n,r),()=>e.removeEventListener(t,n)}const kf=(e,t)=>e.depth-t.depth;class _f{constructor(){this.children=[],this.isDirty=!1}add(e){il(this.children,e),this.isDirty=!0}remove(e){al(this.children,e),this.isDirty=!0}forEach(e){this.isDirty&&this.children.sort(kf),this.isDirty=!1,this.children.forEach(e)}}function Sf(e){return zd(e)?e.get():e}class jf{constructor(){this.members=[]}add(e){il(this.members,e);for(let t=this.members.length-1;t>=0;t--){const n=this.members[t];if(n===e||n===this.lead||n===this.prevLead)continue;const r=n.instance;r&&!1!==r.isConnected||n.snapshot||(al(this.members,n),n.unmount())}e.scheduleRender()}remove(e){if(al(this.members,e),e===this.prevLead&&(this.prevLead=void 0),e===this.lead){const e=this.members[this.members.length-1];e&&this.promote(e)}}relegate(e){for(let t=this.members.indexOf(e)-1;t>=0;t--){const e=this.members[t];if(!1!==e.isPresent&&!1!==e.instance?.isConnected)return this.promote(e),!0}return!1}promote(e,t){const n=this.lead;if(e!==n&&(this.prevLead=n,this.lead=e,e.show(),n)){n.updateSnapshot(),e.scheduleRender();const{layoutDependency:r}=n.options,{layoutDependency:i}=e.options;void 0!==r&&r===i||(e.resumeFrom=n,t&&(n.preserveOpacity=!0),n.snapshot&&(e.snapshot=n.snapshot,e.snapshot.latestValues=n.animationValues||n.latestValues),e.root?.isUpdating&&(e.isLayoutDirty=!0)),!1===e.options.crossfade&&n.hide()}}exitAnimationComplete(){this.members.forEach(e=>{e.options.onExitComplete?.(),e.resumingFrom?.options.onExitComplete?.()})}scheduleRender(){this.members.forEach(e=>e.instance&&e.scheduleRender(!1))}removeLeadSnapshot(){this.lead?.snapshot&&(this.lead.snapshot=void 0)}}const Tf={hasAnimatedSinceResize:!0,hasEverUpdated:!1},Cf=["","X","Y","Z"];let Ef=0;function Pf(e,t,n,r){const{latestValues:i}=t;i[e]&&(n[e]=i[e],t.setStaticValue(e,0),r&&(r[e]=0))}function Mf(e){if(e.hasCheckedOptimisedAppear=!0,e.root===e)return;const{visualElement:t}=e.options;if(!t)return;const n=Od(t);if(window.MotionHasOptimisedAnimation(n,"transform")){const{layout:t,layoutId:r}=e.options;window.MotionCancelOptimisedAnimation(n,"transform",Nl,!(t||r))}const{parent:r}=e;r&&!r.hasCheckedOptimisedAppear&&Mf(r)}function Af({attachResizeListener:e,defaultParent:t,measureScroll:n,checkIsScrollRoot:r,resetTransform:i}){return class{constructor(e={},n=t?.()){this.id=Ef++,this.animationId=0,this.animationCommitId=0,this.children=new Set,this.options={},this.isTreeAnimating=!1,this.isAnimationBlocked=!1,this.isLayoutDirty=!1,this.isProjectionDirty=!1,this.isSharedProjectionDirty=!1,this.isTransformDirty=!1,this.updateManuallyBlocked=!1,this.updateBlockedByResize=!1,this.isUpdating=!1,this.isSVG=!1,this.needsReset=!1,this.shouldResetTransform=!1,this.hasCheckedOptimisedAppear=!1,this.treeScale={x:1,y:1},this.eventHandlers=new Map,this.hasTreeAnimated=!1,this.layoutVersion=0,this.updateScheduled=!1,this.scheduleUpdate=()=>this.update(),this.projectionUpdateScheduled=!1,this.checkUpdateFailed=()=>{this.isUpdating&&(this.isUpdating=!1,this.clearAllSnapshots())},this.updateProjection=()=>{this.projectionUpdateScheduled=!1,this.nodes.forEach(Df),this.nodes.forEach(Uf),this.nodes.forEach(Wf),this.nodes.forEach($f)},this.resolvedRelativeTargetAt=0,this.linkedParentVersion=0,this.hasProjected=!1,this.isVisible=!0,this.animationProgress=0,this.sharedNodes=new Map,this.latestValues=e,this.root=n?n.root||n:this,this.path=n?[...n.path,n]:[],this.parent=n,this.depth=n?n.depth+1:0;for(let t=0;t<this.path.length;t++)this.path[t].shouldResetTransform=!0;this.root===this&&(this.nodes=new _f)}addEventListener(e,t){return this.eventHandlers.has(e)||this.eventHandlers.set(e,new ml),this.eventHandlers.get(e).add(t)}notifyListeners(e,...t){const n=this.eventHandlers.get(e);n&&n.notify(...t)}hasListeners(e){return this.eventHandlers.has(e)}mount(t){if(this.instance)return;var n;this.isSVG=wh(t)&&!(wh(n=t)&&"svg"===n.tagName),this.instance=t;const{layoutId:r,layout:i,visualElement:a}=this.options;if(a&&!a.current&&a.mount(t),this.root.nodes.add(this),this.parent&&this.parent.children.add(this),this.root.hasTreeAnimated&&(i||r)&&(this.isLayoutDirty=!0),e){let n,r=0;const i=()=>this.root.updateBlockedByResize=!1;Nl.read(()=>{r=window.innerWidth}),e(t,()=>{const e=window.innerWidth;e!==r&&(r=e,this.root.updateBlockedByResize=!0,n&&n(),n=function(e,t){const n=Yl.now(),r=({timestamp:i})=>{const a=i-n;a>=t&&(Fl(r),e(a-t))};return Nl.setup(r,!0),()=>Fl(r)}(i,250),Tf.hasAnimatedSinceResize&&(Tf.hasAnimatedSinceResize=!1,this.nodes.forEach(Bf)))})}r&&this.root.registerSharedNode(r,this),!1!==this.options.animate&&a&&(r||i)&&this.addEventListener("didUpdate",({delta:e,hasLayoutChanged:t,hasRelativeLayoutChanged:n,layout:r})=>{if(this.isTreeAnimationBlocked())return this.target=void 0,void(this.relativeTarget=void 0);const i=this.options.transition||a.getDefaultTransition()||Kf,{onLayoutAnimationStart:o,onLayoutAnimationComplete:s}=a.getProps(),l=!this.targetLayout||!uf(this.targetLayout,r),u=!t&&n;if(this.options.layoutRoot||this.resumeFrom||u||t&&(l||!this.currentAnimation)){this.resumeFrom&&(this.resumingFrom=this.resumeFrom,this.resumingFrom.resumingFrom=void 0);const t={...yd(i,"layout"),onPlay:o,onComplete:s};(a.shouldReduceMotion||this.options.layoutRoot)&&(t.delay=0,t.type=!1),this.startAnimation(t),this.setAnimationOrigin(e,u,t.path)}else t||Bf(this),this.isLead()&&this.options.onExitComplete&&this.options.onExitComplete();this.targetLayout=r})}unmount(){this.options.layoutId&&this.willUpdate(),this.root.nodes.remove(this);const e=this.getStack();e&&e.remove(this),this.parent&&this.parent.children.delete(this),this.instance=void 0,this.eventHandlers.clear(),Fl(this.updateProjection)}blockUpdate(){this.updateManuallyBlocked=!0}unblockUpdate(){this.updateManuallyBlocked=!1}isUpdateBlocked(){return this.updateManuallyBlocked||this.updateBlockedByResize}isTreeAnimationBlocked(){return this.isAnimationBlocked||this.parent&&this.parent.isTreeAnimationBlocked()||!1}startUpdate(){this.isUpdateBlocked()||(this.isUpdating=!0,this.nodes&&this.nodes.forEach(Yf),this.animationId++)}getTransformTemplate(){const{visualElement:e}=this.options;return e&&e.getProps().transformTemplate}willUpdate(e=!0){if(this.root.hasTreeAnimated=!0,this.root.isUpdateBlocked())return void(this.options.onExitComplete&&this.options.onExitComplete());if(window.MotionCancelOptimisedAnimation&&!this.hasCheckedOptimisedAppear&&Mf(this),!this.root.isUpdating&&this.root.startUpdate(),this.isLayoutDirty)return;this.isLayoutDirty=!0;for(let i=0;i<this.path.length;i++){const e=this.path[i];e.shouldResetTransform=!0,"string"!=typeof e.latestValues.x&&"string"!=typeof e.latestValues.y||(e.isLayoutDirty=!0),e.updateScroll("snapshot"),e.options.layoutRoot&&e.willUpdate(!1)}const{layoutId:t,layout:n}=this.options;if(void 0===t&&!n)return;const r=this.getTransformTemplate();this.prevTransformTemplateValue=r?r(this.latestValues,""):void 0,this.updateSnapshot(),e&&this.notifyListeners("willUpdate")}update(){this.updateScheduled=!1;if(this.isUpdateBlocked()){const e=this.updateBlockedByResize;return this.unblockUpdate(),this.updateBlockedByResize=!1,this.clearAllSnapshots(),e&&this.nodes.forEach(If),void this.nodes.forEach(Of)}if(this.animationId<=this.animationCommitId)return void this.nodes.forEach(Nf);this.animationCommitId=this.animationId,this.isUpdating?(this.isUpdating=!1,this.nodes.forEach(Ff),this.nodes.forEach(Vf),this.nodes.forEach(Rf),this.nodes.forEach(zf)):this.nodes.forEach(Nf),this.clearAllSnapshots();const e=Yl.now();Vl.delta=ol(0,1e3/60,e-Vl.timestamp),Vl.timestamp=e,Vl.isProcessing=!0,Bl.update.process(Vl),Bl.preRender.process(Vl),Bl.render.process(Vl),Vl.isProcessing=!1}didUpdate(){this.updateScheduled||(this.updateScheduled=!0,oh.read(this.scheduleUpdate))}clearAllSnapshots(){this.nodes.forEach(Lf),this.sharedNodes.forEach(Hf)}scheduleUpdateProjection(){this.projectionUpdateScheduled||(this.projectionUpdateScheduled=!0,Nl.preRender(this.updateProjection,!1,!0))}scheduleCheckAfterUnmount(){Nl.postRender(()=>{this.isLayoutDirty?this.root.didUpdate():this.root.checkUpdateFailed()})}updateSnapshot(){!this.snapshot&&this.instance&&(this.snapshot=this.measure(),!this.snapshot||qp(this.snapshot.measuredBox.x)||qp(this.snapshot.measuredBox.y)||(this.snapshot=void 0))}updateLayout(){if(!this.instance)return;if(this.updateScroll(),!(this.options.alwaysMeasureLayout&&this.isLead()||this.isLayoutDirty))return;if(this.resumeFrom&&!this.resumeFrom.instance)for(let n=0;n<this.path.length;n++){this.path[n].updateScroll()}const e=this.layout;this.layout=this.measure(!1),this.layoutVersion++,this.layoutCorrected||(this.layoutCorrected={x:{min:0,max:0},y:{min:0,max:0}}),this.isLayoutDirty=!1,this.projectionDelta=void 0,this.notifyListeners("measure",this.layout.layoutBox);const{visualElement:t}=this.options;t&&t.notify("LayoutMeasure",this.layout.layoutBox,e?e.layoutBox:void 0)}updateScroll(e="measure"){let t=Boolean(this.options.layoutScroll&&this.instance);if(this.scroll&&this.scroll.animationId===this.root.animationId&&this.scroll.phase===e&&(t=!1),t&&this.instance){const t=r(this.instance);this.scroll={animationId:this.root.animationId,phase:e,isRoot:t,offset:n(this.instance),wasRoot:this.scroll?this.scroll.isRoot:t}}}resetTransform(){if(!i)return;const e=this.isLayoutDirty||this.shouldResetTransform||this.options.alwaysMeasureLayout,t=this.projectionDelta&&!of(this.projectionDelta),n=this.getTransformTemplate(),r=n?n(this.latestValues,""):void 0,a=r!==this.prevTransformTemplateValue;e&&this.instance&&(t||tp(this.latestValues)||a)&&(i(this.instance,r),this.shouldResetTransform=!1,this.scheduleRender())}measure(e=!0){const t=this.measurePageBox();let n=this.removeElementScroll(t);var r;return e&&(n=this.removeTransform(n)),Jf((r=n).x),Jf(r.y),{animationId:this.root.animationId,measuredBox:t,layoutBox:n,latestValues:{},source:this.id}}measurePageBox(){const{visualElement:e}=this.options;if(!e)return{x:{min:0,max:0},y:{min:0,max:0}};const t=e.measureViewportBox();if(!(this.scroll?.wasRoot||this.path.some(tm))){const{scroll:e}=this.root;e&&(cp(t.x,e.offset.x),cp(t.y,e.offset.y))}return t}removeElementScroll(e){const t={x:{min:0,max:0},y:{min:0,max:0}};if(Yp(t,e),this.scroll?.wasRoot)return t;for(let n=0;n<this.path.length;n++){const r=this.path[n],{scroll:i,options:a}=r;r!==this.root&&i&&a.layoutScroll&&(i.wasRoot&&Yp(t,e),cp(t.x,i.offset.x),cp(t.y,i.offset.y))}return t}applyTransform(e,t=!1,n){const r=n||{x:{min:0,max:0},y:{min:0,max:0}};Yp(r,e);for(let i=0;i<this.path.length;i++){const e=this.path[i];!t&&e.options.layoutScroll&&e.scroll&&e!==e.root&&(cp(r.x,-e.scroll.offset.x),cp(r.y,-e.scroll.offset.y)),tp(e.latestValues)&&pp(r,e.latestValues,e.layout?.layoutBox)}return tp(this.latestValues)&&pp(r,this.latestValues,this.layout?.layoutBox),r}removeTransform(e){const t={x:{min:0,max:0},y:{min:0,max:0}};Yp(t,e);for(let n=0;n<this.path.length;n++){const e=this.path[n];if(!tp(e.latestValues))continue;let r;e.instance&&(ep(e.latestValues)&&e.updateSnapshot(),r=$h(),Yp(r,e.measurePageBox())),rf(t,e.latestValues,e.snapshot?.layoutBox,r)}return tp(this.latestValues)&&rf(t,this.latestValues),t}setTargetDelta(e){this.targetDelta=e,this.root.scheduleUpdateProjection(),this.isProjectionDirty=!0}setOptions(e){this.options={...this.options,...e,crossfade:void 0===e.crossfade||e.crossfade}}clearMeasurements(){this.scroll=void 0,this.layout=void 0,this.snapshot=void 0,this.prevTransformTemplateValue=void 0,this.targetDelta=void 0,this.target=void 0,this.isLayoutDirty=!1}forceRelativeParentToResolveTarget(){this.relativeParent&&this.relativeParent.resolvedRelativeTargetAt!==Vl.timestamp&&this.relativeParent.resolveTargetDelta(!0)}resolveTargetDelta(e=!1){const t=this.getLead();this.isProjectionDirty||(this.isProjectionDirty=t.isProjectionDirty),this.isTransformDirty||(this.isTransformDirty=t.isTransformDirty),this.isSharedProjectionDirty||(this.isSharedProjectionDirty=t.isSharedProjectionDirty);const n=Boolean(this.resumingFrom)||this!==t;if(!(e||n&&this.isSharedProjectionDirty||this.isProjectionDirty||this.parent?.isProjectionDirty||this.attemptToResolveRelativeTarget||this.root.updateBlockedByResize))return;const{layout:r,layoutId:i}=this.options;if(!this.layout||!r&&!i)return;this.resolvedRelativeTargetAt=Vl.timestamp;const a=this.getClosestProjectingParent();var o,s,l,u;(a&&this.linkedParentVersion!==a.layoutVersion&&!a.options.layoutRoot&&this.removeRelativeTarget(),this.targetDelta||this.relativeTarget||(!1!==this.options.layoutAnchor&&a&&a.layout?this.createRelativeTarget(a,this.layout.layoutBox,a.layout.layoutBox):this.removeRelativeTarget()),this.relativeTarget||this.targetDelta)&&(this.target||(this.target={x:{min:0,max:0},y:{min:0,max:0}},this.targetWithTransforms={x:{min:0,max:0},y:{min:0,max:0}}),this.relativeTarget&&this.relativeTargetOrigin&&this.relativeParent&&this.relativeParent.target?(this.forceRelativeParentToResolveTarget(),o=this.target,s=this.relativeTarget,l=this.relativeParent.target,u=this.options.layoutAnchor||void 0,Kp(o.x,s.x,l.x,u?.x),Kp(o.y,s.y,l.y,u?.y)):this.targetDelta?(Boolean(this.resumingFrom)?this.applyTransform(this.layout.layoutBox,!1,this.target):Yp(this.target,this.layout.layoutBox),sp(this.target,this.targetDelta)):Yp(this.target,this.layout.layoutBox),this.attemptToResolveRelativeTarget&&(this.attemptToResolveRelativeTarget=!1,!1!==this.options.layoutAnchor&&a&&Boolean(a.resumingFrom)===Boolean(this.resumingFrom)&&!a.options.layoutScroll&&a.target&&1!==this.animationProgress?this.createRelativeTarget(a,this.target,a.target):this.relativeParent=this.relativeTarget=void 0))}getClosestProjectingParent(){if(this.parent&&!ep(this.parent.latestValues)&&!np(this.parent.latestValues))return this.parent.isProjecting()?this.parent:this.parent.getClosestProjectingParent()}isProjecting(){return Boolean((this.relativeTarget||this.targetDelta||this.options.layoutRoot)&&this.layout)}createRelativeTarget(e,t,n){this.relativeParent=e,this.linkedParentVersion=e.layoutVersion,this.forceRelativeParentToResolveTarget(),this.relativeTarget={x:{min:0,max:0},y:{min:0,max:0}},this.relativeTargetOrigin={x:{min:0,max:0},y:{min:0,max:0}},Zp(this.relativeTargetOrigin,t,n,this.options.layoutAnchor||void 0),Yp(this.relativeTarget,this.relativeTargetOrigin)}removeRelativeTarget(){this.relativeParent=this.relativeTarget=void 0}calcProjection(){const e=this.getLead(),t=Boolean(this.resumingFrom)||this!==e;let n=!0;if((this.isProjectionDirty||this.parent?.isProjectionDirty)&&(n=!1),t&&(this.isSharedProjectionDirty||this.isTransformDirty)&&(n=!1),this.resolvedRelativeTargetAt===Vl.timestamp&&(n=!1),n)return;const{layout:r,layoutId:i}=this.options;if(this.isTreeAnimating=Boolean(this.parent&&this.parent.isTreeAnimating||this.currentAnimation||this.pendingAnimation),this.isTreeAnimating||(this.targetDelta=this.relativeTarget=void 0),!this.layout||!r&&!i)return;Yp(this.layoutCorrected,this.layout.layoutBox);const a=this.treeScale.x,o=this.treeScale.y;!function(e,t,n,r=!1){const i=n.length;if(!i)return;let a,o;t.x=t.y=1;for(let s=0;s<i;s++){a=n[s],o=a.projectionDelta;const{visualElement:i}=a.options;i&&i.props.style&&"contents"===i.props.style.display||(r&&a.options.layoutScroll&&a.scroll&&a!==a.root&&(cp(e.x,-a.scroll.offset.x),cp(e.y,-a.scroll.offset.y)),o&&(t.x*=o.x.scale,t.y*=o.y.scale,sp(e,o)),r&&tp(a.latestValues)&&pp(e,a.latestValues,a.layout?.layoutBox))}t.x<up&&t.x>lp&&(t.x=1),t.y<up&&t.y>lp&&(t.y=1)}(this.layoutCorrected,this.treeScale,this.path,t),!e.layout||e.target||1===this.treeScale.x&&1===this.treeScale.y||(e.target=e.layout.layoutBox,e.targetWithTransforms={x:{min:0,max:0},y:{min:0,max:0}});const{target:s}=e;s?(this.projectionDelta&&this.prevProjectionDelta?(Hp(this.prevProjectionDelta.x,this.projectionDelta.x),Hp(this.prevProjectionDelta.y,this.projectionDelta.y)):this.createProjectionDeltas(),Gp(this.projectionDelta,this.layoutCorrected,s,this.latestValues),this.treeScale.x===a&&this.treeScale.y===o&&df(this.projectionDelta.x,this.prevProjectionDelta.x)&&df(this.projectionDelta.y,this.prevProjectionDelta.y)||(this.hasProjected=!0,this.scheduleRender(),this.notifyListeners("projectionUpdate",s))):this.prevProjectionDelta&&(this.createProjectionDeltas(),this.scheduleRender())}hide(){this.isVisible=!1}show(){this.isVisible=!0}scheduleRender(e=!0){if(this.options.visualElement?.scheduleRender(),e){const e=this.getStack();e&&e.scheduleRender()}this.resumingFrom&&!this.resumingFrom.instance&&(this.resumingFrom=void 0)}createProjectionDeltas(){this.prevProjectionDelta={x:{translate:0,scale:1,origin:0,originPoint:0},y:{translate:0,scale:1,origin:0,originPoint:0}},this.projectionDelta={x:{translate:0,scale:1,origin:0,originPoint:0},y:{translate:0,scale:1,origin:0,originPoint:0}},this.projectionDeltaWithTransform={x:{translate:0,scale:1,origin:0,originPoint:0},y:{translate:0,scale:1,origin:0,originPoint:0}}}setAnimationOrigin(e,t=!1,n){const r=this.snapshot,i=r?r.latestValues:{},a={...this.latestValues},o={x:{translate:0,scale:1,origin:0,originPoint:0},y:{translate:0,scale:1,origin:0,originPoint:0}};this.relativeParent&&this.relativeParent.options.layoutRoot||(this.relativeTarget=this.relativeTargetOrigin=void 0),this.attemptToResolveRelativeTarget=!t;const s={x:{min:0,max:0},y:{min:0,max:0}},l=(r?r.source:void 0)!==(this.layout?this.layout.source:void 0),u=this.getStack(),c=!u||u.members.length<=1,d=Boolean(l&&!c&&!0===this.options.crossfade&&!this.path.some(Gf));let h;this.animationProgress=0;const p=n?.interpolateProjection(e);this.mixTargetDelta=t=>{const n=t/1e3,r=p?.(n);var u,f,m,g,y,v;r?(o.x.translate=r.x,o.x.scale=Eu(e.x.scale,1,n),o.x.origin=e.x.origin,o.x.originPoint=e.x.originPoint,o.y.translate=r.y,o.y.scale=Eu(e.y.scale,1,n),o.y.origin=e.y.origin,o.y.originPoint=e.y.originPoint):(qf(o.x,e.x,n),qf(o.y,e.y,n)),this.setTargetDelta(o),this.relativeTarget&&this.relativeTargetOrigin&&this.layout&&this.relativeParent&&this.relativeParent.layout&&(Zp(s,this.layout.layoutBox,this.relativeParent.layout.layoutBox,this.options.layoutAnchor||void 0),m=this.relativeTarget,g=this.relativeTargetOrigin,y=s,v=n,Xf(m.x,g.x,y.x,v),Xf(m.y,g.y,y.y,v),h&&(u=this.relativeTarget,f=h,sf(u.x,f.x)&&sf(u.y,f.y))&&(this.isProjectionDirty=!1),h||(h={x:{min:0,max:0},y:{min:0,max:0}}),Yp(h,this.relativeTarget)),l&&(this.animationValues=a,function(e,t,n,r,i,a){i?(e.opacity=Eu(0,n.opacity??1,vf(r)),e.opacityExit=Eu(t.opacity??1,0,xf(r))):a&&(e.opacity=Eu(t.opacity??1,n.opacity??1,r));for(let o=0;o<ff;o++){const i=pf[o];let a=yf(t,i),s=yf(n,i);void 0===a&&void 0===s||(a||(a=0),s||(s=0),0===a||0===s||gf(a)===gf(s)?(e[i]=Math.max(Eu(mf(a),mf(s),r),0),(du.test(s)||du.test(a))&&(e[i]+="%")):e[i]=s)}(t.rotate||n.rotate)&&(e.rotate=Eu(t.rotate||0,n.rotate||0,r))}(a,i,this.latestValues,n,d,c)),r&&void 0!==r.rotate&&(this.animationValues||(this.animationValues=a),this.animationValues.pathRotation=r.rotate),this.root.scheduleUpdateProjection(),this.scheduleRender(),this.animationProgress=n},this.mixTargetDelta(this.options.layoutRoot?1e3:0)}startAnimation(e){this.notifyListeners("animationStart"),this.currentAnimation?.stop(),this.resumingFrom?.currentAnimation?.stop(),this.pendingAnimation&&(Fl(this.pendingAnimation),this.pendingAnimation=void 0),this.pendingAnimation=Nl.update(()=>{Tf.hasAnimatedSinceResize=!0,this.motionValue||(this.motionValue=md(0)),this.motionValue.jump(0,!1),this.currentAnimation=function(e,t,n){const r=zd(e)?e:md(e);return r.start(_d("",r,t,n)),r.animation}(this.motionValue,[0,1e3],{...e,velocity:0,isSync:!0,onUpdate:t=>{this.mixTargetDelta(t),e.onUpdate&&e.onUpdate(t)},onStop:()=>{},onComplete:()=>{e.onComplete&&e.onComplete(),this.completeAnimation()}}),this.resumingFrom&&(this.resumingFrom.currentAnimation=this.currentAnimation),this.pendingAnimation=void 0})}completeAnimation(){this.resumingFrom&&(this.resumingFrom.currentAnimation=void 0,this.resumingFrom.preserveOpacity=void 0);const e=this.getStack();e&&e.exitAnimationComplete(),this.resumingFrom=this.currentAnimation=this.animationValues=void 0,this.notifyListeners("animationComplete")}finishAnimation(){this.currentAnimation&&(this.mixTargetDelta&&this.mixTargetDelta(1e3),this.currentAnimation.stop()),this.completeAnimation()}applyTransformsToTarget(){const e=this.getLead();let{targetWithTransforms:t,target:n,layout:r,latestValues:i}=e;if(t&&n&&r){if(this!==e&&this.layout&&r&&em(this.options.animationType,this.layout.layoutBox,r.layoutBox)){n=this.target||{x:{min:0,max:0},y:{min:0,max:0}};const t=qp(this.layout.layoutBox.x);n.x.min=e.target.x.min,n.x.max=n.x.min+t;const r=qp(this.layout.layoutBox.y);n.y.min=e.target.y.min,n.y.max=n.y.min+r}Yp(t,n),pp(t,i),Gp(this.projectionDeltaWithTransform,this.layoutCorrected,t,i)}}registerSharedNode(e,t){this.sharedNodes.has(e)||this.sharedNodes.set(e,new jf);this.sharedNodes.get(e).add(t);const n=t.options.initialPromotionConfig;t.promote({transition:n?n.transition:void 0,preserveFollowOpacity:n&&n.shouldPreserveFollowOpacity?n.shouldPreserveFollowOpacity(t):void 0})}isLead(){const e=this.getStack();return!e||e.lead===this}getLead(){const{layoutId:e}=this.options;return e&&this.getStack()?.lead||this}getPrevLead(){const{layoutId:e}=this.options;return e?this.getStack()?.prevLead:void 0}getStack(){const{layoutId:e}=this.options;if(e)return this.root.sharedNodes.get(e)}promote({needsReset:e,transition:t,preserveFollowOpacity:n}={}){const r=this.getStack();r&&r.promote(this,n),e&&(this.projectionDelta=void 0,this.needsReset=!0),t&&this.setOptions({transition:t})}relegate(){const e=this.getStack();return!!e&&e.relegate(this)}resetSkewAndRotation(){const{visualElement:e}=this.options;if(!e)return;let t=!1;const{latestValues:n}=e;if((n.z||n.rotate||n.rotateX||n.rotateY||n.rotateZ||n.skewX||n.skewY)&&(t=!0),!t)return;const r={};n.z&&Pf("z",e,r,this.animationValues);for(let i=0;i<Cf.length;i++)Pf(`rotate${Cf[i]}`,e,r,this.animationValues),Pf(`skew${Cf[i]}`,e,r,this.animationValues);e.render();for(const i in r)e.setStaticValue(i,r[i]),this.animationValues&&(this.animationValues[i]=r[i]);e.scheduleRender()}applyProjectionStyles(e,t){if(!this.instance||this.isSVG)return;if(!this.isVisible)return void(e.visibility="hidden");const n=this.getTransformTemplate();if(this.needsReset)return this.needsReset=!1,e.visibility="",e.opacity="",e.pointerEvents=Sf(t?.pointerEvents)||"",void(e.transform=n?n(this.latestValues,""):"none");const r=this.getLead();if(!this.projectionDelta||!this.layout||!r.target)return this.options.layoutId&&(e.opacity=void 0!==this.latestValues.opacity?this.latestValues.opacity:1,e.pointerEvents=Sf(t?.pointerEvents)||""),void(this.hasProjected&&!tp(this.latestValues)&&(e.transform=n?n({},""):"none",this.hasProjected=!1));e.visibility="";const i=r.animationValues||r.latestValues;this.applyTransformsToTarget();let a=function(e,t,n){let r="";const i=e.x.translate/t.x,a=e.y.translate/t.y,o=n?.z||0;if((i||a||o)&&(r=`translate3d(${i}px, ${a}px, ${o}px) `),1===t.x&&1===t.y||(r+=`scale(${1/t.x}, ${1/t.y}) `),n){const{transformPerspective:e,rotate:t,pathRotation:i,rotateX:a,rotateY:o,skewX:s,skewY:l}=n;e&&(r=`perspective(${e}px) ${r}`),t&&(r+=`rotate(${t}deg) `),i&&(r+=`rotate(${i}deg) `),a&&(r+=`rotateX(${a}deg) `),o&&(r+=`rotateY(${o}deg) `),s&&(r+=`skewX(${s}deg) `),l&&(r+=`skewY(${l}deg) `)}const s=e.x.scale*t.x,l=e.y.scale*t.y;return 1===s&&1===l||(r+=`scale(${s}, ${l})`),r||"none"}(this.projectionDeltaWithTransform,this.treeScale,i);n&&(a=n(i,a)),e.transform=a;const{x:o,y:s}=this.projectionDelta;e.transformOrigin=`${100*o.origin}% ${100*s.origin}% 0`,r.animationValues?e.opacity=r===this?i.opacity??this.latestValues.opacity??1:this.preserveOpacity?this.latestValues.opacity:i.opacityExit:e.opacity=r===this?void 0!==i.opacity?i.opacity:"":void 0!==i.opacityExit?i.opacityExit:0;for(const l in kp){if(void 0===i[l])continue;const{correct:t,applyTo:n,isCSSVariable:o}=kp[l],s="none"===a?i[l]:t(i[l],r);if(n){const t=n.length;for(let r=0;r<t;r++)e[n[r]]=s}else o?this.options.visualElement.renderState.vars[l]=s:e[l]=s}this.options.layoutId&&(e.pointerEvents=r===this?Sf(t?.pointerEvents)||"":"none")}clearSnapshot(){this.resumeFrom=this.snapshot=void 0}resetTree(){this.root.nodes.forEach(e=>e.currentAnimation?.stop()),this.root.nodes.forEach(Of),this.root.sharedNodes.clear()}}}function Rf(e){e.updateLayout()}function zf(e){const t=e.resumeFrom?.snapshot||e.snapshot;if(e.isLead()&&e.layout&&t&&e.hasListeners("didUpdate")){const{layoutBox:n,measuredBox:r}=e.layout,{animationType:i}=e.options,a=t.source!==e.layout.source;if("size"===i)hf(e=>{const r=a?t.measuredBox[e]:t.layoutBox[e],i=qp(r);r.min=n[e].min,r.max=r.min+i});else if("x"===i||"y"===i){const e="x"===i?"y":"x";Wp(a?t.measuredBox[e]:t.layoutBox[e],n[e])}else em(i,t.layoutBox,n)&&hf(r=>{const i=a?t.measuredBox[r]:t.layoutBox[r],o=qp(n[r]);i.max=i.min+o,e.relativeTarget&&!e.currentAnimation&&(e.isProjectionDirty=!0,e.relativeTarget[r].max=e.relativeTarget[r].min+o)});const o={x:{translate:0,scale:1,origin:0,originPoint:0},y:{translate:0,scale:1,origin:0,originPoint:0}};Gp(o,n,t.layoutBox);const s={x:{translate:0,scale:1,origin:0,originPoint:0},y:{translate:0,scale:1,origin:0,originPoint:0}};a?Gp(s,e.applyTransform(r,!0),t.measuredBox):Gp(s,n,t.layoutBox);const l=!of(o);let u=!1;if(!e.resumeFrom){const r=e.getClosestProjectingParent();if(r&&!r.resumeFrom){const{snapshot:i,layout:a}=r;if(i&&a){const o=e.options.layoutAnchor||void 0,s={x:{min:0,max:0},y:{min:0,max:0}};Zp(s,t.layoutBox,i.layoutBox,o);const l={x:{min:0,max:0},y:{min:0,max:0}};Zp(l,n,a.layoutBox,o),uf(s,l)||(u=!0),r.options.layoutRoot&&(e.relativeTarget=l,e.relativeTargetOrigin=s,e.relativeParent=r)}}}e.notifyListeners("didUpdate",{layout:n,snapshot:t,delta:s,layoutDelta:o,hasLayoutChanged:l,hasRelativeLayoutChanged:u})}else if(e.isLead()){const{onExitComplete:t}=e.options;t&&t()}e.options.transition=void 0}function Df(e){e.parent&&(e.isProjecting()||(e.isProjectionDirty=e.parent.isProjectionDirty),e.isSharedProjectionDirty||(e.isSharedProjectionDirty=Boolean(e.isProjectionDirty||e.parent.isProjectionDirty||e.parent.isSharedProjectionDirty)),e.isTransformDirty||(e.isTransformDirty=e.parent.isTransformDirty))}function $f(e){e.isProjectionDirty=e.isSharedProjectionDirty=e.isTransformDirty=!1}function Lf(e){e.clearSnapshot()}function Of(e){e.clearMeasurements()}function If(e){e.isLayoutDirty=!0,e.updateLayout()}function Nf(e){e.isLayoutDirty=!1}function Ff(e){e.isAnimationBlocked&&e.layout&&!e.isLayoutDirty&&(e.snapshot=e.layout,e.isLayoutDirty=!0)}function Vf(e){const{visualElement:t}=e.options;t&&t.getProps().onBeforeLayoutMeasure&&t.notify("BeforeLayoutMeasure"),e.resetTransform()}function Bf(e){e.finishAnimation(),e.targetDelta=e.relativeTarget=e.target=void 0,e.isProjectionDirty=!0}function Uf(e){e.resolveTargetDelta()}function Wf(e){e.calcProjection()}function Yf(e){e.resetSkewAndRotation()}function Hf(e){e.removeLeadSnapshot()}function qf(e,t,n){e.translate=Eu(t.translate,0,n),e.scale=Eu(t.scale,1,n),e.origin=t.origin,e.originPoint=t.originPoint}function Xf(e,t,n,r){e.min=Eu(t.min,n.min,r),e.max=Eu(t.max,n.max,r)}function Gf(e){return e.animationValues&&void 0!==e.animationValues.opacityExit}const Kf={duration:.45,ease:[.4,0,.1,1]},Qf=e=>"undefined"!=typeof navigator&&navigator.userAgent&&navigator.userAgent.toLowerCase().includes(e),Zf=Qf("applewebkit/")&&!Qf("chrome/")?Math.round:hl;function Jf(e){e.min=Zf(e.min),e.max=Zf(e.max)}function em(e,t,n){return"position"===e||"preserve-aspect"===e&&(r=cf(t),i=cf(n),a=.2,!(Math.abs(r-i)<=a));var r,i,a}function tm(e){return e!==e.root&&e.scroll?.wasRoot}const nm=Af({attachResizeListener:(e,t)=>wf(e,"resize",t),measureScroll:()=>({x:document.documentElement.scrollLeft||document.body?.scrollLeft||0,y:document.documentElement.scrollTop||document.body?.scrollTop||0}),checkIsScrollRoot:()=>!0}),rm={current:void 0},im=Af({measureScroll:e=>({x:e.scrollLeft,y:e.scrollTop}),defaultParent:()=>{if(!rm.current){const e=new nm({});e.mount(window),e.setOptions({layoutScroll:!0}),rm.current=e}return rm.current},resetTransform:(e,t)=>{e.style.transform=void 0!==t?t:"none"},checkIsScrollRoot:e=>Boolean("fixed"===window.getComputedStyle(e).position)}),am=h.createContext({transformPagePoint:e=>e,isStatic:!1,reducedMotion:"never"});const om=h.createContext({strict:!1}),sm={animation:["animate","variants","whileHover","whileTap","exit","whileInView","whileFocus","whileDrag"],exit:["exit"],drag:["drag","dragControls"],focus:["whileFocus"],hover:["whileHover","onHoverStart","onHoverEnd"],tap:["whileTap","onTap","onTapStart","onTapCancel"],pan:["onPan","onPanStart","onPanSessionStart","onPanEnd"],inView:["whileInView","onViewportEnter","onViewportLeave"],layout:["layout","layoutId"]};let lm=!1;function um(){return function(){if(lm)return;const e={};for(const t in sm)e[t]={isEnabled:e=>sm[t].some(t=>!!e[t])};Xh(e),lm=!0}(),qh}const cm=new Set(["animate","exit","variants","initial","style","values","variants","transition","transformTemplate","custom","inherit","onBeforeLayoutMeasure","onAnimationStart","onAnimationComplete","onUpdate","onDragStart","onDrag","onDragEnd","onMeasureDragConstraints","onDirectionLock","onDragTransitionEnd","_dragX","_dragY","onHoverStart","onHoverEnd","onViewportEnter","onViewportLeave","globalTapTarget","propagate","ignoreStrict","viewport"]);function dm(e){return e.startsWith("while")||e.startsWith("drag")&&"draggable"!==e||e.startsWith("layout")||e.startsWith("onTap")||e.startsWith("onPan")||e.startsWith("onLayout")||cm.has(e)}let hm=e=>!dm(e);try{"function"==typeof(pm=require("@emotion/is-prop-valid").default)&&(hm=e=>e.startsWith("on")?!dm(e):pm(e))}catch{}var pm;const fm=h.createContext({});function mm(e){const{initial:t,animate:n}=function(e,t){if(Vh(e)){const{initial:t,animate:n}=e;return{initial:!1===t||Ih(t)?t:void 0,animate:Ih(n)?n:void 0}}return!1!==e.inherit?t:{}}(e,h.useContext(fm));return h.useMemo(()=>({initial:t,animate:n}),[gm(t),gm(n)])}function gm(e){return Array.isArray(e)?e.join(" "):e}const ym=()=>({style:{},transform:{},transformOrigin:{},vars:{}});function vm(e,t,n){for(const r in t)zd(t[r])||_p(r,n)||(e[r]=t[r])}function xm(e,t){const n={};return vm(n,e.style||{},e),Object.assign(n,function({transformTemplate:e},t){return h.useMemo(()=>{const n={style:{},transform:{},transformOrigin:{},vars:{}};return yp(n,t,e),Object.assign({},n.vars,n.style)},[t])}(e,t)),n}function bm(e,t){const n={},r=xm(e,t);return e.drag&&!1!==e.dragListener&&(n.draggable=!1,r.userSelect=r.WebkitUserSelect=r.WebkitTouchCallout="none",r.touchAction=!0===e.drag?"none":"pan-"+("x"===e.drag?"y":"x")),void 0===e.tabIndex&&(e.onTap||e.onTapStart||e.whileTap)&&(n.tabIndex=0),n.style=r,n}const wm=()=>({style:{},transform:{},transformOrigin:{},vars:{},attrs:{}});function km(e,t,n,r){const i=h.useMemo(()=>{const n={style:{},transform:{},transformOrigin:{},vars:{},attrs:{}};return Pp(n,t,Ap(r),e.transformTemplate,e.style),{...n.attrs,style:{...n.style}}},[t]);if(e.style){const t={};vm(t,e.style,e),i.style={...t,...i.style}}return i}const _m=["animate","circle","defs","desc","ellipse","g","image","line","filter","marker","mask","metadata","path","pattern","polygon","polyline","rect","stop","switch","symbol","svg","text","tspan","use","view"];function Sm(e){return"string"==typeof e&&!e.includes("-")&&!!(_m.indexOf(e)>-1||/[A-Z]/u.test(e))}function jm(e,t,n,{latestValues:r},i,a=!1,o){const s=(o??Sm(e)?km:bm)(t,r,i,e),l=function(e,t,n){const r={};for(const i in e)"values"===i&&"object"==typeof e.values||zd(e[i])||(hm(i)||!0===n&&dm(i)||!t&&!dm(i)||e.draggable&&i.startsWith("onDrag"))&&(r[i]=e[i]);return r}(t,"string"==typeof e,a),u=e!==h.Fragment?{...l,...s,ref:n}:{},{children:c}=t,d=h.useMemo(()=>zd(c)?c.get():c,[c]);return h.createElement(e,{...u,children:d})}function Tm(e,t,n,r){const i={},a=r(e,{});for(const h in a)i[h]=Sf(a[h]);let{initial:o,animate:s}=e;const l=Vh(e),u=Bh(e);t&&u&&!l&&!1!==e.inherit&&(void 0===o&&(o=t.initial),void 0===s&&(s=t.animate));let c=!!n&&!1===n.initial;c=c||!1===o;const d=c?s:o;if(d&&"boolean"!=typeof d&&!Oh(d)){const t=Array.isArray(d)?d:[d];for(let n=0;n<t.length;n++){const r=Cd(e,t[n]);if(r){const{transitionEnd:e,transition:t,...n}=r;for(const r in n){let e=n[r];if(Array.isArray(e)){e=e[c?e.length-1:0]}null!==e&&(i[r]=e)}for(const r in e)i[r]=e[r]}}}return i}const Cm=e=>(t,n)=>{const r=h.useContext(fm),i=h.useContext(rl),a=()=>function({scrapeMotionValuesFromProps:e,createRenderState:t},n,r,i){return{latestValues:Tm(n,r,i,e),renderState:t()}}(e,t,r,i);return n?a():function(e){const t=h.useRef(null);return null===t.current&&(t.current=e()),t.current}(a)},Em=Cm({scrapeMotionValuesFromProps:Sp,createRenderState:ym}),Pm=Cm({scrapeMotionValuesFromProps:Rp,createRenderState:wm}),Mm=Symbol.for("motionComponentSymbol");function Am(e,t,n){const r=h.useRef(n);h.useInsertionEffect(()=>{r.current=n});const i=h.useRef(null);return h.useCallback(n=>{n&&e.onMount?.(n),t&&(n?t.mount(n):t.unmount());const a=r.current;if("function"==typeof a)if(n){const e=a(n);"function"==typeof e&&(i.current=e)}else i.current?(i.current(),i.current=null):a(n);else a&&(a.current=n)},[t])}const Rm=h.createContext({});function zm(e){return e&&"object"==typeof e&&Object.prototype.hasOwnProperty.call(e,"current")}function Dm(e,t,n,r,i,a){const{visualElement:o}=h.useContext(fm),s=h.useContext(om),l=h.useContext(rl),u=h.useContext(am),c=u.reducedMotion,d=u.skipAnimations,p=h.useRef(null),f=h.useRef(!1);r=r||s.renderer,!p.current&&r&&(p.current=r(e,{visualState:t,parent:o,props:n,presenceContext:l,blockInitialAnimation:!!l&&!1===l.initial,reducedMotionConfig:c,skipAnimations:d,isSVG:a}),f.current&&p.current&&(p.current.manuallyAnimateOnMount=!0));const m=p.current,g=h.useContext(Rm);!m||m.projection||!i||"html"!==m.type&&"svg"!==m.type||function(e,t,n,r){const{layoutId:i,layout:a,drag:o,dragConstraints:s,layoutScroll:l,layoutRoot:u,layoutAnchor:c,layoutCrossfade:d}=t;e.projection=new n(e.latestValues,t["data-framer-portal-id"]?void 0:$m(e.parent)),e.projection.setOptions({layoutId:i,layout:a,alwaysMeasureLayout:Boolean(o)||s&&zm(s),visualElement:e,animationType:"string"==typeof a?a:"both",initialPromotionConfig:r,crossfade:d,layoutScroll:l,layoutRoot:u,layoutAnchor:c})}(p.current,n,i,g);const y=h.useRef(!1);h.useInsertionEffect(()=>{m&&y.current&&m.update(n,l)});const v=n[Ld],x=h.useRef(Boolean(v)&&"undefined"!=typeof window&&!window.MotionHandoffIsComplete?.(v)&&window.MotionHasOptimisedAnimation?.(v));return nl(()=>{f.current=!0,m&&(y.current=!0,window.MotionIsMounted=!0,m.updateFeatures(),m.scheduleRenderMicrotask(),x.current&&m.animationState&&m.animationState.animateChanges())}),h.useEffect(()=>{m&&(!x.current&&m.animationState&&m.animationState.animateChanges(),x.current&&(queueMicrotask(()=>{window.MotionHandoffMarkAsComplete?.(v)}),x.current=!1),m.enteringChildren=void 0)}),m}function $m(e){if(e)return!1!==e.options.allowProjection?e.projection:$m(e.parent)}function Lm(e,{forwardMotionProps:t=!1,type:n}={},r,i){r&&function(e){const t=um();for(const n in e)t[n]={...t[n],...e[n]};Xh(t)}(r);const a=n?"svg"===n:Sm(e),o=a?Pm:Em;function s(n,r){let s;const l={...h.useContext(am),...n,layoutId:Om(n)},{isStatic:u}=l,c=mm(n),p=o(n,u);if(!u&&"undefined"!=typeof window){h.useContext(om).strict;const t=function(e){const t=um(),{drag:n,layout:r}=t;if(!n&&!r)return{};const i={...n,...r};return{MeasureLayout:n?.isEnabled(e)||r?.isEnabled(e)?i.MeasureLayout:void 0,ProjectionNode:i.ProjectionNode}}(l);s=t.MeasureLayout,c.visualElement=Dm(e,p,l,i,t.ProjectionNode,a)}return d.jsxs(fm.Provider,{value:c,children:[s&&c.visualElement?d.jsx(s,{visualElement:c.visualElement,...l}):null,jm(e,n,Am(p,c.visualElement,r),p,u,t,a)]})}s.displayName=`motion.${"string"==typeof e?e:`create(${e.displayName??e.name??""})`}`;const l=h.forwardRef(s);return l[Mm]=e,l}function Om({layoutId:e}){const t=h.useContext(tl).id;return t&&void 0!==e?t+"-"+e:e}function Im(e,t){if("undefined"==typeof Proxy)return Lm;const n=new Map,r=(n,r)=>Lm(n,r,e,t);return new Proxy((e,t)=>r(e,t),{get:(i,a)=>"create"===a?r:(n.has(a)||n.set(a,Lm(a,void 0,e,t)),n.get(a))})}const Nm=(e,t)=>t.isSVG??Sm(e)?new zp(t):new jp(t,{allowProjection:e!==h.Fragment});let Fm=0;const Vm={animation:{Feature:class extends Qh{constructor(e){super(e),e.animationState||(e.animationState=Fp(e))}updateAnimationControlsSubscription(){const{animate:e}=this.node.getProps();Oh(e)&&(this.unmountControls=e.subscribe(this.node))}mount(){this.updateAnimationControlsSubscription()}update(){const{animate:e}=this.node.getProps(),{animate:t}=this.node.prevProps||{};e!==t&&this.updateAnimationControlsSubscription()}unmount(){this.node.animationState.reset(),this.unmountControls?.()}}},exit:{Feature:class extends Qh{constructor(){super(...arguments),this.id=Fm++,this.isExitComplete=!1}update(){if(!this.node.presenceContext)return;const{isPresent:e,onExitComplete:t}=this.node.presenceContext,{isPresent:n}=this.node.prevPresenceContext||{};if(!this.node.animationState||e===n)return;if(e&&!1===n){if(this.isExitComplete){const{initial:e,custom:t}=this.node.getProps();if("string"==typeof e||"object"==typeof e&&null!==e&&!Array.isArray(e)){const n=Ed(this.node,e,t);if(n){const{transition:e,transitionEnd:t,...r}=n;for(const n in r)this.node.getValue(n)?.jump(r[n])}}this.node.animationState.reset(),this.node.animationState.animateChanges()}else this.node.animationState.setActive("exit",!1);return void(this.isExitComplete=!1)}const r=this.node.animationState.setActive("exit",!e);t&&!e&&r.then(()=>{this.isExitComplete=!0,t(this.id)})}mount(){const{register:e,onExitComplete:t}=this.node.presenceContext||{};t&&t(this.id),e&&(this.unmount=e(this.id))}unmount(){}}}};function Bm(e){return{point:{x:e.pageX,y:e.pageY}}}function Um(e,t,n,r){return wf(e,t,(e=>t=>hh(t)&&e(t,Bm(t)))(n),r)}const Wm=({current:e})=>e?e.ownerDocument.defaultView:null,Ym=(e,t)=>Math.abs(e-t);const Hm=new Set(["auto","scroll"]);class qm{constructor(e,t,{transformPagePoint:n,contextWindow:r=window,dragSnapToOrigin:i=!1,distanceThreshold:a=3,element:o}={}){if(this.startEvent=null,this.lastMoveEvent=null,this.lastMoveEventInfo=null,this.lastRawMoveEventInfo=null,this.handlers={},this.contextWindow=window,this.scrollPositions=new Map,this.removeScrollListeners=null,this.onElementScroll=e=>{this.handleScroll(e.target)},this.onWindowScroll=()=>{this.handleScroll(window)},this.updatePoint=()=>{if(!this.lastMoveEvent||!this.lastMoveEventInfo)return;this.lastRawMoveEventInfo&&(this.lastMoveEventInfo=Xm(this.lastRawMoveEventInfo,this.transformPagePoint));const e=Km(this.lastMoveEventInfo,this.history),t=null!==this.startEvent,n=function(e,t){const n=Ym(e.x,t.x),r=Ym(e.y,t.y);return Math.sqrt(n**2+r**2)}(e.offset,{x:0,y:0})>=this.distanceThreshold;if(!t&&!n)return;const{point:r}=e,{timestamp:i}=Vl;this.history.push({...r,timestamp:i});const{onStart:a,onMove:o}=this.handlers;t||(a&&a(this.lastMoveEvent,e),this.startEvent=this.lastMoveEvent),o&&o(this.lastMoveEvent,e)},this.handlePointerMove=(e,t)=>{this.lastMoveEvent=e,this.lastRawMoveEventInfo=t,this.lastMoveEventInfo=Xm(t,this.transformPagePoint),Nl.update(this.updatePoint,!0)},this.handlePointerUp=(e,t)=>{this.end();const{onEnd:n,onSessionEnd:r,resumeAnimation:i}=this.handlers;if(!this.dragSnapToOrigin&&this.startEvent||i&&i(),!this.lastMoveEvent||!this.lastMoveEventInfo)return;const a=Km("pointercancel"===e.type?this.lastMoveEventInfo:Xm(t,this.transformPagePoint),this.history);this.startEvent&&n&&n(e,a),r&&r(e,a)},!hh(e))return;this.dragSnapToOrigin=i,this.handlers=t,this.transformPagePoint=n,this.distanceThreshold=a,this.contextWindow=r||window;const s=Xm(Bm(e),this.transformPagePoint),{point:l}=s,{timestamp:u}=Vl;this.history=[{...l,timestamp:u}];const{onSessionStart:c}=t;c&&c(e,Km(s,this.history)),this.removeListeners=pl(Um(this.contextWindow,"pointermove",this.handlePointerMove),Um(this.contextWindow,"pointerup",this.handlePointerUp),Um(this.contextWindow,"pointercancel",this.handlePointerUp)),o&&this.startScrollTracking(o)}startScrollTracking(e){let t=e.parentElement;for(;t;){const e=getComputedStyle(t);(Hm.has(e.overflowX)||Hm.has(e.overflowY))&&this.scrollPositions.set(t,{x:t.scrollLeft,y:t.scrollTop}),t=t.parentElement}this.scrollPositions.set(window,{x:window.scrollX,y:window.scrollY}),window.addEventListener("scroll",this.onElementScroll,{capture:!0}),window.addEventListener("scroll",this.onWindowScroll),this.removeScrollListeners=()=>{window.removeEventListener("scroll",this.onElementScroll,{capture:!0}),window.removeEventListener("scroll",this.onWindowScroll)}}handleScroll(e){const t=this.scrollPositions.get(e);if(!t)return;const n=e===window,r=n?{x:window.scrollX,y:window.scrollY}:{x:e.scrollLeft,y:e.scrollTop},i=r.x-t.x,a=r.y-t.y;0===i&&0===a||(n?this.lastMoveEventInfo&&(this.lastMoveEventInfo.point.x+=i,this.lastMoveEventInfo.point.y+=a):this.history.length>0&&(this.history[0].x-=i,this.history[0].y-=a),this.scrollPositions.set(e,r),Nl.update(this.updatePoint,!0))}updateHandlers(e){this.handlers=e}end(){this.removeListeners&&this.removeListeners(),this.removeScrollListeners&&this.removeScrollListeners(),this.scrollPositions.clear(),Fl(this.updatePoint)}}function Xm(e,t){return t?{point:t(e.point)}:e}function Gm(e,t){return{x:e.x-t.x,y:e.y-t.y}}function Km({point:e},t){return{point:e,delta:Gm(e,Zm(t)),offset:Gm(e,Qm(t)),velocity:Jm(t,.1)}}function Qm(e){return e[0]}function Zm(e){return e[e.length-1]}function Jm(e,t){if(e.length<2)return{x:0,y:0};let n=e.length-1,r=null;const i=Zm(e);for(;n>=0&&(r=e[n],!(i.timestamp-r.timestamp>gl(t)));)n--;if(!r)return{x:0,y:0};r===e[0]&&e.length>2&&i.timestamp-r.timestamp>2*gl(t)&&(r=e[1]);const a=yl(i.timestamp-r.timestamp);if(0===a)return{x:0,y:0};const o={x:(i.x-r.x)/a,y:(i.y-r.y)/a};return o.x===1/0&&(o.x=0),o.y===1/0&&(o.y=0),o}function eg(e,t,n){return{min:void 0!==t?e.min+t:void 0,max:void 0!==n?e.max+n-(e.max-e.min):void 0}}function tg(e,t){let n=t.min-e.min,r=t.max-e.max;return t.max-t.min<e.max-e.min&&([n,r]=[r,n]),{min:n,max:r}}const ng=.35;function rg(e,t,n){return{min:ig(e,t),max:ig(e,n)}}function ig(e,t){return"number"==typeof e?e:e[t]||0}const ag=new WeakMap;class og{constructor(e){this.openDragLock=null,this.isDragging=!1,this.currentDirection=null,this.originPoint={x:0,y:0},this.constraints=!1,this.hasMutatedConstraints=!1,this.elastic={x:{min:0,max:0},y:{min:0,max:0}},this.latestPointerEvent=null,this.latestPanInfo=null,this.visualElement=e}start(e,{snapToCursor:t=!1,distanceThreshold:n}={}){const{presenceContext:r}=this.visualElement;if(r&&!1===r.isPresent)return;const{dragSnapToOrigin:i}=this.getProps();this.panSession=new qm(e,{onSessionStart:e=>{t&&this.snapToCursor(Bm(e).point),this.stopAnimation()},onStart:(e,t)=>{const{drag:n,dragPropagation:r,onDragStart:i}=this.getProps();if(n&&!r&&(this.openDragLock&&this.openDragLock(),this.openDragLock="x"===(a=n)||"y"===a?sh[a]?null:(sh[a]=!0,()=>{sh[a]=!1}):sh.x||sh.y?null:(sh.x=sh.y=!0,()=>{sh.x=sh.y=!1}),!this.openDragLock))return;var a;this.latestPointerEvent=e,this.latestPanInfo=t,this.isDragging=!0,this.currentDirection=null,this.resolveConstraints(),this.visualElement.projection&&(this.visualElement.projection.isAnimationBlocked=!0,this.visualElement.projection.target=void 0),hf(e=>{let t=this.getAxisMotionValue(e).get()||0;if(du.test(t)){const{projection:n}=this.visualElement;if(n&&n.layout){const r=n.layout.layoutBox[e];if(r){t=qp(r)*(parseFloat(t)/100)}}}this.originPoint[e]=t}),i&&Nl.update(()=>i(e,t),!1,!0),Dd(this.visualElement,"transform");const{animationState:o}=this.visualElement;o&&o.setActive("whileDrag",!0)},onMove:(e,t)=>{this.latestPointerEvent=e,this.latestPanInfo=t;const{dragPropagation:n,dragDirectionLock:r,onDirectionLock:i,onDrag:a}=this.getProps();if(!n&&!this.openDragLock)return;const{offset:o}=t;if(r&&null===this.currentDirection)return this.currentDirection=function(e,t=10){let n=null;Math.abs(e.y)>t?n="y":Math.abs(e.x)>t&&(n="x");return n}(o),void(null!==this.currentDirection&&i&&i(this.currentDirection));this.updateAxis("x",t.point,o),this.updateAxis("y",t.point,o),this.visualElement.render(),a&&Nl.update(()=>a(e,t),!1,!0)},onSessionEnd:(e,t)=>{this.latestPointerEvent=e,this.latestPanInfo=t,this.stop(e,t),this.latestPointerEvent=null,this.latestPanInfo=null},resumeAnimation:()=>{const{dragSnapToOrigin:e}=this.getProps();(e||this.constraints)&&this.startAnimation({x:0,y:0})}},{transformPagePoint:this.visualElement.getTransformPagePoint(),dragSnapToOrigin:i,distanceThreshold:n,contextWindow:Wm(this.visualElement),element:this.visualElement.current})}stop(e,t){const n=e||this.latestPointerEvent,r=t||this.latestPanInfo,i=this.isDragging;if(this.cancel(),!i||!r||!n)return;const{velocity:a}=r;this.startAnimation(a);const{onDragEnd:o}=this.getProps();o&&Nl.postRender(()=>o(n,r))}cancel(){this.isDragging=!1;const{projection:e,animationState:t}=this.visualElement;e&&(e.isAnimationBlocked=!1),this.endPanSession();const{dragPropagation:n}=this.getProps();!n&&this.openDragLock&&(this.openDragLock(),this.openDragLock=null),t&&t.setActive("whileDrag",!1)}endPanSession(){this.panSession&&this.panSession.end(),this.panSession=void 0}updateAxis(e,t,n){const{drag:r}=this.getProps();if(!n||!lg(e,r,this.currentDirection))return;const i=this.getAxisMotionValue(e);let a=this.originPoint[e]+n[e];this.constraints&&this.constraints[e]&&(a=function(e,{min:t,max:n},r){return void 0!==t&&e<t?e=r?Eu(t,e,r.min):Math.max(e,t):void 0!==n&&e>n&&(e=r?Eu(n,e,r.max):Math.min(e,n)),e}(a,this.constraints[e],this.elastic[e])),i.set(a)}resolveConstraints(){const{dragConstraints:e,dragElastic:t}=this.getProps(),n=this.visualElement.projection&&!this.visualElement.projection.layout?this.visualElement.projection.measure(!1):this.visualElement.projection?.layout,r=this.constraints;e&&zm(e)?this.constraints||(this.constraints=this.resolveRefConstraints()):this.constraints=!(!e||!n)&&function(e,{top:t,left:n,bottom:r,right:i}){return{x:eg(e.x,n,i),y:eg(e.y,t,r)}}(n.layoutBox,e),this.elastic=function(e=ng){return!1===e?e=0:!0===e&&(e=ng),{x:rg(e,"left","right"),y:rg(e,"top","bottom")}}(t),r!==this.constraints&&!zm(e)&&n&&this.constraints&&!this.hasMutatedConstraints&&hf(e=>{!1!==this.constraints&&this.getAxisMotionValue(e)&&(this.constraints[e]=function(e,t){const n={};return void 0!==t.min&&(n.min=t.min-e.min),void 0!==t.max&&(n.max=t.max-e.min),n}(n.layoutBox[e],this.constraints[e]))})}resolveRefConstraints(){const{dragConstraints:e,onMeasureDragConstraints:t}=this.getProps();if(!e||!zm(e))return!1;const n=e.current,{projection:r}=this.visualElement;if(!r||!r.layout)return!1;r.root&&(r.root.scroll=void 0,r.root.updateScroll());const i=function(e,t,n){const r=fp(e,n),{scroll:i}=t;return i&&(cp(r.x,i.offset.x),cp(r.y,i.offset.y)),r}(n,r.root,this.visualElement.getTransformPagePoint());let a=function(e,t){return{x:tg(e.x,t.x),y:tg(e.y,t.y)}}(r.layout.layoutBox,i);if(t){const e=t(function({x:e,y:t}){return{top:t.min,right:e.max,bottom:t.max,left:e.min}}(a));this.hasMutatedConstraints=!!e,e&&(a=Zh(e))}return a}startAnimation(e){const{drag:t,dragMomentum:n,dragElastic:r,dragTransition:i,dragSnapToOrigin:a,onDragTransitionEnd:o}=this.getProps(),s=this.constraints||{},l=hf(o=>{if(!lg(o,t,this.currentDirection))return;let l=s&&s[o]||{};!0!==a&&a!==o||(l={min:0,max:0});const u=r?200:1e6,c=r?40:1e7,d={type:"inertia",velocity:n?e[o]:0,bounceStiffness:u,bounceDamping:c,timeConstant:750,restDelta:1,restSpeed:10,...i,...l};return this.startAxisValueAnimation(o,d)});return Promise.all(l).then(o)}startAxisValueAnimation(e,t){const n=this.getAxisMotionValue(e);return Dd(this.visualElement,e),n.start(_d(e,n,0,t,this.visualElement,!1))}stopAnimation(){hf(e=>this.getAxisMotionValue(e).stop())}getAxisMotionValue(e){const t=`_drag${e.toUpperCase()}`,n=this.visualElement.getProps()[t];return n||this.visualElement.getValue(e,this.visualElement.latestValues[e]??0)}snapToCursor(e){hf(t=>{const{drag:n}=this.getProps();if(!lg(t,n,this.currentDirection))return;const{projection:r}=this.visualElement,i=this.getAxisMotionValue(t);if(r&&r.layout){const{min:n,max:a}=r.layout.layoutBox[t],o=i.get()||0;i.set(e[t]-Eu(n,a,.5)+o)}})}scalePositionWithinConstraints(){if(!this.visualElement.current)return;const{drag:e,dragConstraints:t}=this.getProps(),{projection:n}=this.visualElement;if(!zm(t)||!n||!this.constraints)return;this.stopAnimation();const r={x:0,y:0};hf(e=>{const t=this.getAxisMotionValue(e);if(t&&!1!==this.constraints){const n=t.get();r[e]=function(e,t){let n=.5;const r=qp(e),i=qp(t);return i>r?n=fl(t.min,t.max-r,e.min):r>i&&(n=fl(e.min,e.max-i,t.min)),ol(0,1,n)}({min:n,max:n},this.constraints[e])}});const{transformTemplate:i}=this.visualElement.getProps();this.visualElement.current.style.transform=i?i({},""):"none",n.root&&n.root.updateScroll(),n.updateLayout(),this.constraints=!1,this.resolveConstraints(),hf(t=>{if(!lg(t,e,null))return;const n=this.getAxisMotionValue(t),{min:i,max:a}=this.constraints[t];n.set(Eu(i,a,r[t]))}),this.visualElement.render()}addListeners(){if(!this.visualElement.current)return;ag.set(this.visualElement,this);const e=this.visualElement.current,t=Um(e,"pointerdown",t=>{const{drag:n,dragListener:r=!0}=this.getProps(),i=t.target,a=i!==e&&function(e){return fh.has(e.tagName)||!0===e.isContentEditable}(i);n&&r&&!a&&this.start(t)});let n;const r=()=>{const{dragConstraints:t}=this.getProps();zm(t)&&t.current&&(this.constraints=this.resolveRefConstraints(),n||(n=function(e,t,n){const r=zh(e,sg(n)),i=zh(t,sg(n));return()=>{r(),i()}}(e,t.current,()=>this.scalePositionWithinConstraints())))},{projection:i}=this.visualElement,a=i.addEventListener("measure",r);i&&!i.layout&&(i.root&&i.root.updateScroll(),i.updateLayout()),Nl.read(r);const o=wf(window,"resize",()=>this.scalePositionWithinConstraints()),s=i.addEventListener("didUpdate",({delta:e,hasLayoutChanged:t})=>{this.isDragging&&t&&(hf(t=>{const n=this.getAxisMotionValue(t);n&&(this.originPoint[t]+=e[t].translate,n.set(n.get()+e[t].translate))}),this.visualElement.render())});return()=>{o(),t(),a(),s&&s(),n&&n()}}getProps(){const e=this.visualElement.getProps(),{drag:t=!1,dragDirectionLock:n=!1,dragPropagation:r=!1,dragConstraints:i=!1,dragElastic:a=ng,dragMomentum:o=!0}=e;return{...e,drag:t,dragDirectionLock:n,dragPropagation:r,dragConstraints:i,dragElastic:a,dragMomentum:o}}}function sg(e){let t=!0;return()=>{t?t=!1:e()}}function lg(e,t,n){return!(!0!==t&&t!==e||null!==n&&n!==e)}const ug=e=>(t,n)=>{e&&Nl.update(()=>e(t,n),!1,!0)};let cg=!1;class dg extends h.Component{componentDidMount(){const{visualElement:e,layoutGroup:t,switchLayoutGroup:n,layoutId:r}=this.props,{projection:i}=e;i&&(t.group&&t.group.add(i),n&&n.register&&r&&n.register(i),cg&&i.root.didUpdate(),i.addEventListener("animationComplete",()=>{this.safeToRemove()}),i.setOptions({...i.options,layoutDependency:this.props.layoutDependency,onExitComplete:()=>this.safeToRemove()})),Tf.hasEverUpdated=!0}getSnapshotBeforeUpdate(e){const{layoutDependency:t,visualElement:n,drag:r,isPresent:i}=this.props,{projection:a}=n;return a?(a.isPresent=i,e.layoutDependency!==t&&a.setOptions({...a.options,layoutDependency:t}),cg=!0,r||e.layoutDependency!==t||void 0===t||e.isPresent!==i?a.willUpdate():this.safeToRemove(),e.isPresent!==i&&(i?a.promote():a.relegate()||Nl.postRender(()=>{const e=a.getStack();e&&e.members.length||this.safeToRemove()})),null):null}componentDidUpdate(){const{visualElement:e,layoutAnchor:t}=this.props,{projection:n}=e;n&&(n.options.layoutAnchor=t,n.root.didUpdate(),oh.postRender(()=>{!n.currentAnimation&&n.isLead()&&this.safeToRemove()}))}componentWillUnmount(){const{visualElement:e,layoutGroup:t,switchLayoutGroup:n}=this.props,{projection:r}=e;cg=!0,r&&(r.scheduleCheckAfterUnmount(),t&&t.group&&t.group.remove(r),n&&n.deregister&&n.deregister(r))}safeToRemove(){const{safeToRemove:e}=this.props;e&&e()}render(){return null}}function hg(e){const[t,n]=function(e=!0){const t=h.useContext(rl);if(null===t)return[!0,null];const{isPresent:n,onExitComplete:r,register:i}=t,a=h.useId();h.useEffect(()=>{if(e)return i(a)},[e]);const o=h.useCallback(()=>e&&r&&r(a),[a,r,e]);return!n&&r?[!1,o]:[!0]}(),r=h.useContext(tl);return d.jsx(dg,{...e,layoutGroup:r,switchLayoutGroup:h.useContext(Rm),isPresent:t,safeToRemove:n})}const pg={pan:{Feature:class extends Qh{constructor(){super(...arguments),this.removePointerDownListener=hl}onPointerDown(e){this.session=new qm(e,this.createPanHandlers(),{transformPagePoint:this.node.getTransformPagePoint(),contextWindow:Wm(this.node)})}createPanHandlers(){const{onPanSessionStart:e,onPanStart:t,onPan:n,onPanEnd:r}=this.node.getProps();return{onSessionStart:ug(e),onStart:ug(t),onMove:ug(n),onEnd:(e,t)=>{delete this.session,r&&Nl.postRender(()=>r(e,t))}}}mount(){this.removePointerDownListener=Um(this.node.current,"pointerdown",e=>this.onPointerDown(e))}update(){this.session&&this.session.updateHandlers(this.createPanHandlers())}unmount(){this.removePointerDownListener(),this.session&&this.session.end()}}},drag:{Feature:class extends Qh{constructor(e){super(e),this.removeGroupControls=hl,this.removeListeners=hl,this.controls=new og(e)}mount(){const{dragControls:e}=this.node.getProps();e&&(this.removeGroupControls=e.subscribe(this.controls)),this.removeListeners=this.controls.addListeners()||hl}update(){const{dragControls:e}=this.node.getProps(),{dragControls:t}=this.node.prevProps||{};e!==t&&(this.removeGroupControls(),e&&(this.removeGroupControls=e.subscribe(this.controls)))}unmount(){this.removeGroupControls(),this.removeListeners(),this.controls.isDragging||this.controls.endPanSession()}},ProjectionNode:im,MeasureLayout:hg}};function fg(e,t,n){const{props:r}=e;e.animationState&&r.whileHover&&e.animationState.setActive("whileHover","Start"===n);const i=r["onHover"+n];i&&Nl.postRender(()=>i(t,Bm(t)))}function mg(e,t,n){const{props:r}=e;if(e.current instanceof HTMLButtonElement&&e.current.disabled)return;e.animationState&&r.whileTap&&e.animationState.setActive("whileTap","Start"===n);const i=r["onTap"+("End"===n?"":n)];i&&Nl.postRender(()=>i(t,Bm(t)))}const gg=new WeakMap,yg=new WeakMap,vg=e=>{const t=gg.get(e.target);t&&t(e)},xg=e=>{e.forEach(vg)};function bg(e,t,n){const r=function({root:e,...t}){const n=e||document;yg.has(n)||yg.set(n,{});const r=yg.get(n),i=JSON.stringify(t);return r[i]||(r[i]=new IntersectionObserver(xg,{root:e,...t})),r[i]}(t);return gg.set(e,n),r.observe(e),()=>{gg.delete(e),r.unobserve(e)}}const wg={some:0,all:1};const kg=Im({...Vm,...{inView:{Feature:class extends Qh{constructor(){super(...arguments),this.hasEnteredView=!1,this.isInView=!1}startObserver(){this.stopObserver?.();const{viewport:e={}}=this.node.getProps(),{root:t,margin:n,amount:r="some",once:i}=e,a={root:t?t.current:void 0,rootMargin:n,threshold:"number"==typeof r?r:wg[r]};this.stopObserver=bg(this.node.current,a,e=>{const{isIntersecting:t}=e;if(this.isInView===t)return;if(this.isInView=t,i&&!t&&this.hasEnteredView)return;t&&(this.hasEnteredView=!0),this.node.animationState&&this.node.animationState.setActive("whileInView",t);const{onViewportEnter:n,onViewportLeave:r}=this.node.getProps(),a=t?n:r;a&&a(e)})}mount(){this.startObserver()}update(){if("undefined"==typeof IntersectionObserver)return;const{props:e,prevProps:t}=this.node;["amount","margin","root"].some(function({viewport:e={}},{viewport:t={}}={}){return n=>e[n]!==t[n]}(e,t))&&this.startObserver()}unmount(){this.stopObserver?.(),this.hasEnteredView=!1,this.isInView=!1}}},tap:{Feature:class extends Qh{mount(){const{current:e}=this.node;if(!e)return;const{globalTapTarget:t,propagate:n}=this.node.props;this.unmount=bh(e,(e,t)=>(mg(this.node,t,"Start"),(e,{success:t})=>mg(this.node,e,t?"End":"Cancel")),{useGlobalTarget:t,stopPropagation:!1===n?.tap})}unmount(){}}},focus:{Feature:class extends Qh{constructor(){super(...arguments),this.isActive=!1}onFocus(){let e=!1;try{e=this.node.current.matches(":focus-visible")}catch(GS){e=!0}e&&this.node.animationState&&(this.node.animationState.setActive("whileFocus",!0),this.isActive=!0)}onBlur(){this.isActive&&this.node.animationState&&(this.node.animationState.setActive("whileFocus",!1),this.isActive=!1)}mount(){this.unmount=pl(wf(this.node.current,"focus",()=>this.onFocus()),wf(this.node.current,"blur",()=>this.onBlur()))}unmount(){}}},hover:{Feature:class extends Qh{mount(){const{current:e}=this.node;e&&(this.unmount=ch(e,(e,t)=>(fg(this.node,t,"Start"),e=>fg(this.node,e,"End"))))}unmount(){}}}},...pg,...{layout:{ProjectionNode:im,MeasureLayout:hg}}},Nm),_g="service_mg1unlr",Sg="template_vf01kx9",jg="PCVUv4yz6HvUQu8fE",Tg="Hi Shree, I’d love to connect regarding your wellness offerings.",Cg="Hi Shree, I feel drawn to your work and would love to begin my wellness journey with you.",Eg="Hi! I’d like to book a Discovery Call session.",Pg="Hi Shree, I’d like to book an Ayurveda Discovery Call for ₹300. Please let me know the next steps.",Mg="balancewithshree@gmail.com",Ag="balancewithshree@gmail.com",Rg="+91 80870 48659",zg="tel:+918087048659",Dg="918087048659",$g="https://www.instagram.com/balancewithshree",Lg="Online • One-on-One • Worldwide",Og=(e=Tg)=>`https://wa.me/${Dg}?text=${encodeURIComponent(e)}`,Ig=cn(Co)`
  padding: 120px 20px;
  background: linear-gradient(180deg, #f4faf6 0%, #eef6f1 100%);
  opacity: 0.9;
  margin: 0 16px 16px 16px;
  border-radius: 24px;
`,Ng=cn(Eo)`
  width: min(100%, 1100px);
`,Fg=cn.div`
  max-width: 700px;
  margin-bottom: 70px;
`,Vg=cn.h1`
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
`,Bg=cn.p`
  font-size: 18px;
  color: #4f6f63;
  margin-top: 16px;
  line-height: 1.7;
`,Ug=cn.div`
  display: grid;
  grid-template-columns: 1.1fr 0.9fr;
  gap: 40px;

  @media (max-width: 900px) {
    grid-template-columns: 1fr;
  }
`,Wg=cn(Po)`
  padding: 36px;
`,Yg=cn.h3`
  font-size: 22px;
  font-weight: 500;
  color: #183c2f;
  margin-bottom: 12px;
`,Hg=cn.p`
  font-size: 16px;
  color: #5a746a;
  line-height: 1.6;
  margin-bottom: 16px;
`,qg=cn.div`
  height: 1px;
  background: linear-gradient(
    to right,
    transparent,
    rgba(0, 0, 0, 0.15),
    transparent
  );
  margin: 24px 0;
`;cn.a`
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
`;const Xg=cn.form`
  display: flex;
  flex-direction: column;
  gap: 14px;
`,Gg=cn.input`
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
`,Kg=cn.textarea`
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
`;cn.button`
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
`;const Qg=cn.div`
  margin: 10px 0;
  padding: 12px 16px;
  background-color: #e8f5e9;
  color: #2e7d32;
  border-radius: 8px;
  font-size: 14px;
  border-left: 4px solid #4caf50;
  animation: fadeIn 0.3s ease-in-out;
`,Zg=cn.div`
  margin: 10px 0;
  padding: 12px 16px;
  background-color: #ffebee;
  color: #c62828;
  border-radius: 8px;
  font-size: 14px;
  border-left: 4px solid #f44336;
  animation: fadeIn 0.3s ease-in-out;
`,Jg=hn`${"\n  @keyframes fadeIn {\n    from { opacity: 0; transform: translateY(-10px); }\n    to { opacity: 1; transform: translateY(0); }\n  }\n"}`;function ey(){h.useEffect(()=>{Js(jg)},[]);const[e,t]=h.useState({name:"",email:"",message:""}),[n,r]=h.useState(!1),[i,a]=h.useState(!1),[o,s]=h.useState(""),l=e=>{const{name:n,value:r}=e.target;t(e=>({...e,[n]:r}))};return d.jsxs(d.Fragment,{children:[d.jsx(Jg,{}),d.jsx(Ig,{children:d.jsxs(Ng,{children:[d.jsx(kg.div,{initial:{opacity:0,y:24},animate:{opacity:1,y:0},transition:{duration:1.2,ease:"easeOut"},children:d.jsxs(Fg,{children:[d.jsxs(Vg,{children:["Begin a ",d.jsx("span",{children:"Gentler"})," Journey"]}),d.jsx(Bg,{children:"Wellness is personal. If you’re feeling called to slow down, heal, and reconnect with your body — let’s start with a conversation."})]})}),d.jsxs(Ug,{children:[d.jsx(kg.div,{initial:{opacity:0,y:24},animate:{opacity:1,y:0},transition:{duration:1.2,delay:.15,ease:"easeOut"},children:d.jsxs(Wg,{children:[d.jsx(Yg,{children:"Connect Personally"}),d.jsx(Hg,{children:"I work closely with a limited number of clients to ensure deep, mindful guidance. The best way to begin is through a personal conversation."}),d.jsx(qg,{}),d.jsxs(Hg,{children:["📧 ",d.jsx("strong",{children:"Email"}),d.jsx("br",{}),d.jsx("a",{href:`mailto:${Mg}`,style:{color:"inherit"},children:Mg})]}),d.jsxs(Hg,{children:["📞 ",d.jsx("strong",{children:"Call"}),d.jsx("br",{}),d.jsx("a",{href:zg,style:{color:"inherit"},children:Rg})]}),d.jsxs(Hg,{children:["📍 ",d.jsx("strong",{children:"Sessions"}),d.jsx("br",{}),Lg]}),d.jsxs(Hg,{style:{background:"#f4faf6",padding:"14px 18px",borderRadius:"14px",fontSize:"14px",color:"#2e6b55",marginTop:"20px"},children:["✨"," ",d.jsx("strong",{children:"Currently accepting a limited number of new clients"}),d.jsx("br",{}),"to ensure deeply personalised guidance."]}),d.jsx(Hg,{style:{fontStyle:"italic",marginTop:"16px"},children:"Prefer speaking instead of typing?"}),d.jsx(oi,{href:Og(Cg),target:"_blank",rel:"noopener noreferrer nofollow",variant:"outline",size:"lg",style:{marginTop:"12px"},children:"🎙️ Send a Voice Note on WhatsApp"})]})}),d.jsx(kg.div,{initial:{opacity:0,y:24},animate:{opacity:1,y:0},transition:{duration:1.2,delay:.3,ease:"easeOut"},children:d.jsxs(Wg,{children:[d.jsx(Yg,{children:"Or Leave a Message"}),d.jsx(Hg,{children:"Prefer writing? Share a few words and I’ll personally get back to you."}),d.jsxs(Xg,{onSubmit:async n=>{if(n.preventDefault(),s(""),a(!1),e.name&&e.email&&e.message)if(/\S+@\S+\.\S+/.test(e.email))try{r(!0);const n={from_name:e.name,from_email:e.email,to_email:Ag,message:e.message,reply_to:e.email};await el(_g,Sg,n),a(!0),t({name:"",email:"",message:""}),window.setTimeout(()=>{a(!1)},5e3)}catch(i){console.error("Failed to send email:",i),s("Failed to send message. Please try again later.")}finally{r(!1)}else s("Please enter a valid email address");else s("Please fill in all fields")},children:[d.jsx(Gg,{name:"name",value:e.name,onChange:l,placeholder:"Your name","aria-label":"Your name",autoComplete:"name",disabled:n}),d.jsx(Gg,{name:"email",type:"email",value:e.email,onChange:l,placeholder:"Email address","aria-label":"Email address",autoComplete:"email",disabled:n}),d.jsx(Kg,{name:"message",value:e.message,onChange:l,placeholder:"What are you seeking support with?","aria-label":"What are you seeking support with?",disabled:n}),o&&d.jsx(Zg,{children:o}),i&&d.jsx(Qg,{children:"Thank you! Your message has been sent successfully."}),d.jsx(oi,{type:"submit",disabled:n,variant:"primary",fullWidth:!0,size:"lg",children:n?"Sending...":"Send Message"})]})]})})]})]})})]})}function ty(){return d.jsx(ey,{})}cn.div`
  background: ${({theme:e})=>e.colors.white};
  max-width: 1100px;
  margin: 40px auto;
  border-radius: 20px;
  overflow: hidden;
  position: relative;

  box-shadow:
    0 26px 50px rgba(15, 40, 35, 0.22),
    0 0 0 1px rgba(255, 255, 255, 0.9);
`;const ny=cn.section`
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
`,ry=cn.div`
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
`,iy=cn.button`
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
`,ay=cn.section`
  padding: 80px 20px;
  background: ${({$bg:e})=>e||"transparent"};
  text-align: center;
`,oy=cn.h2`
  font-size: 2.5rem;
`,sy=cn.p`
  max-width: 600px;
  margin: 16px auto 60px;
`,ly=cn.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 40px;

  @media (max-width: 900px) {
    grid-template-columns: 1fr;
  }
`,uy=cn.div`
  background: #3f5f58;
  padding: 40px;
  border-radius: 16px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.05);
  color: white;
  p {
    color: #ffff;
  }
`,cy=cn.div`
  display: flex;
  align-items: center;
  gap: 60px;
  max-width: 1200px;
  margin: 0 auto;

  @media (max-width: 900px) {
    flex-direction: column;
    text-align: center;
  }
`,dy=cn.div`
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
`,hy=cn.div`
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
`,py=cn.div`
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
`;cn.div`
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
`;const fy=pn`
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(-50%);
  }
`;cn.div`
  overflow: hidden;
  width: 100%;
  margin-top: 40px;

  &:hover div {
    animation-play-state: paused;
  }
`,cn.div`
  display: flex;
  gap: 24px;
  // width: max-content;
  max-width: 100%;

  animation: ${fy} 30s linear infinite;
  will-change: transform;
`;const my=()=>d.jsxs(ay,{children:[d.jsx(oy,{children:"More Than Just a Diet"}),d.jsx(sy,{children:"I believe food should support both your practice and your lifestyle. My approach blends clinical nutrition, Ayurvedic wisdom, and mindful eating to help you build sustainable habits and lasting balance — without extreme dieting."}),d.jsxs(ly,{children:[d.jsxs(uy,{children:[d.jsx(Bi,{size:36}),d.jsx("h3",{children:"Gut Health & Digestion"}),d.jsx("p",{children:"Support digestion, reduce bloating and improve immunity."})]}),d.jsxs(uy,{children:[d.jsx(Ki,{size:36}),d.jsx("h3",{children:"Sustained Energy"}),d.jsx("p",{children:"Feel steady, balanced energy throughout the day — no crashes."})]}),d.jsxs(uy,{children:[d.jsx(qi,{size:36}),d.jsx("h3",{children:"Weight Balance"}),d.jsx("p",{children:"Healthy weight loss or weight gain through personalised planning."})]}),d.jsxs(uy,{children:[d.jsx(Fi,{size:36}),d.jsx("h3",{children:"Mindful Eating"}),d.jsx("p",{children:"Develop a calm, positive relationship with food — without guilt."})]})]})]}),gy=()=>d.jsxs(cy,{children:[d.jsx(dy,{children:d.jsx(fo,{src:"https://res.cloudinary.com/drjzugsyo/image/upload/v1771263597/journey_jcc4im.jpg",alt:"Personalised Nutrition Plans"})}),d.jsxs(hy,{children:[d.jsx("h3",{children:"Nutrition Approach"}),d.jsx("h2",{children:"Types of Diet Plans I Offer"}),d.jsx("p",{children:"I create personalised clinical nutrition plans based on your health condition, body needs and lifestyle — never one-size-fits-all diets."}),d.jsxs("ul",{children:[d.jsxs("li",{children:[d.jsx(Li,{size:18,color:"#4A6741"}),"Weight loss, weight gain & body recomposition"]}),d.jsxs("li",{children:[d.jsx(Li,{size:18,color:"#4A6741"}),"PCOS / PCOD & hormonal balance"]}),d.jsxs("li",{children:[d.jsx(Li,{size:18,color:"#4A6741"}),"Diabetes, thyroid & metabolic health"]}),d.jsxs("li",{children:[d.jsx(Li,{size:18,color:"#4A6741"}),"Pregnancy & women’s nutrition support"]}),d.jsxs("li",{children:[d.jsx(Li,{size:18,color:"#4A6741"}),"Gut health, digestion & immunity"]}),d.jsxs("li",{children:[d.jsx(Li,{size:18,color:"#4A6741"}),"Lifestyle & habit-based nutrition"]}),d.jsxs("li",{children:[d.jsx(Li,{size:18,color:"#4A6741"}),"Vegetarian & egg-based meal planning"]}),d.jsxs("li",{children:[d.jsx(Li,{size:18,color:"#4A6741"}),"Indian home-food focused diets (no exotic foods)"]})]}),d.jsx("p",{style:{marginTop:"24px",fontStyle:"italic"},children:"Each plan is designed to be practical, culturally appropriate and easy to follow — supporting healing from within."})]})]}),yy=()=>d.jsx(ny,{style:{backgroundImage:`url(${ci.nutrition.hero})`},children:d.jsxs(ry,{children:[d.jsxs("h1",{children:["Nourish Your Body,",d.jsx("br",{}),"Fuel Your Soul"]}),d.jsx("p",{style:{fontWeight:500},children:"Holistic nutrition aligned with yoga, lifestyle & Ayurveda."}),d.jsx("p",{style:{maxWidth:"680px",margin:"20px auto 32px"},children:"At Balance with Shree, nutrition is not about restriction or calorie obsession. It’s about nourishing your body in a way that supports your energy, digestion, hormones and everyday life — on and off the mat."}),d.jsx(iy,{$primary:!0,as:"a",href:"#pricing-section",children:"Start Your Journey"})]})}),vy=()=>d.jsxs(ay,{id:"pricing-section",children:[d.jsx(oy,{children:"Start Your Journey"}),d.jsx(sy,{children:"A simple first step towards balanced, sustainable health."}),d.jsxs(py,{children:[d.jsx("h3",{children:"Discovery Call"}),d.jsx("p",{style:{color:"#aaa",marginTop:"8px"},children:"30 Minutes • Online via Zoom / WhatsApp"}),d.jsxs("div",{className:"price",children:[d.jsx("span",{children:"₹"}),"299"]}),d.jsxs("ul",{children:[d.jsxs("li",{children:[d.jsx(Li,{size:16,color:"#4A6741"}),"Dietary pattern analysis"]}),d.jsxs("li",{children:[d.jsx(Li,{size:16,color:"#4A6741"}),"Goal-setting strategy"]}),d.jsxs("li",{children:[d.jsx(Li,{size:16,color:"#4A6741"}),"Personal Q&A session"]})]}),d.jsx(oi,{href:Og(Eg),target:"_blank",rel:"noopener noreferrer",fullWidth:!0,size:"lg",style:{marginTop:"16px"},children:"Book My Session"})]})]}),xy=[{name:"Mandar Athavale",handle:"@athavalemandar",image:"/reviews/mander.jpeg",text:"Everyday yoga practice for the last 03 months has improved my body flexibility and concentration. Dhanashree guides well and helps improve each asana. I highly recommend her yoga sessions."},{name:"Harshada Deo",handle:"@deoharshada",image:"/reviews/mander.jpeg",text:"Practicing yoga with Dhanashree has been an incredible experience. She ensures every asana is done comfortably and perfectly. Her sessions have helped me balance my PCOD problem and spondylitis."},{name:"Mohini Sonak",handle:"@mohinisonak",image:"/reviews/mander.jpeg",text:"Daily yoga sessions have relieved my back pain and improved my flexibility. After yoga, my body feels energetic and I stay mentally fit throughout the day."},{name:"Kavita Patel",handle:"",image:"/reviews/mander.jpeg",text:"Grateful for the incredible transformation in my health. After struggling with PCOD and medication, her personalized diet and yoga sessions worked wonders. In just 3 months, my cycle is back on track."}],by=[...xy,...xy];function wy(){return d.jsxs(ky,{children:[d.jsx(_y,{children:"Client Love"}),d.jsx(Sy,{children:"Real stories. Real transformations."}),d.jsx(Ty,{children:d.jsx(Cy,{children:by.map((e,t)=>d.jsxs(Ey,{children:[d.jsx(My,{children:d.jsx("img",{src:e.image,alt:e.name})}),d.jsxs(Py,{children:[d.jsx(Ay,{children:"“"}),d.jsx(zy,{children:e.text}),d.jsx(Dy,{children:e.name}),e.handle&&d.jsx($y,{children:e.handle}),d.jsx(Ry,{children:"”"})]})]},t))})})]})}const ky=cn.section`
  padding: 100px 20px;
  text-align: center;
`,_y=cn.h2`
  font-size: 2.6rem;
  font-family: "Playfair Display", serif;
`,Sy=cn.p`
  max-width: 600px;
  margin: 16px auto 70px;
  color: #666;
`,jy=pn`
  0% { transform: translateX(0); }
  100% { transform: translateX(-50%); }
`,Ty=cn.div`
  overflow: hidden;
  width: 100%;

  @media (max-width: 768px) {
    overflow-x: auto;
    scroll-snap-type: x mandatory;
    -webkit-overflow-scrolling: touch;
  }
`,Cy=cn.div`
  display: flex;
  gap: 60px;
  width: max-content;
  animation: ${jy} 40s linear infinite;

  &:hover {
    animation-play-state: paused;
  }

  @media (max-width: 768px) {
    animation: none;
    padding: 10px 20px;
  }
`,Ey=cn.div`
  position: relative;
  padding-top: 55px;
  overflow: visible;

  @media (max-width: 768px) {
    scroll-snap-align: center;
  }
`,Py=cn.div`
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
`,My=cn.div`
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
`,Ay=cn.span`
  position: absolute;
  top: 24px;
  left: 28px;
  font-size: 64px;
  color: #d4af37;
  font-family: serif;
  line-height: 1;
`,Ry=cn.span`
  position: absolute;
  bottom: 20px;
  right: 28px;
  font-size: 64px;
  color: #d4af37;
  font-family: serif;
  line-height: 1;
`,zy=cn.p`
  font-family: "Cormorant Garamond", serif;
  font-size: 1.18rem;
  line-height: 1.8;
  color: #555;
  margin-bottom: 36px;
`,Dy=cn.h4`
  font-weight: 600;
  font-size: 1.05rem;
  margin-bottom: 6px;
`,$y=cn.p`
  font-size: 0.9rem;
  color: #999;
`,Ly=()=>d.jsxs(d.Fragment,{children:[d.jsx(yy,{}),d.jsx(my,{}),d.jsx(gy,{}),d.jsx(wy,{}),d.jsx(vy,{})]}),Oy=pn`
  from {
    opacity: 0;
    transform: translateY(40px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`,Iy=cn.section`
  padding: 120px 20px;
`,Ny=cn.div`
  max-width: 1200px;
  margin: 0 auto;
`,Fy=cn.h2`
  font-size: 36px;
  color: #1f2a24;
  text-align: center;
  margin-bottom: 80px;
`,Vy=cn.p`
  max-width: 700px;
  margin: 0 auto 60px;
  text-align: center;
  color: #5f6f66;
  line-height: 1.8;
`,By=cn.section`
  height: 95vh;
  background: ${({$bgImage:e})=>`url(${e})`} center / cover no-repeat;
  position: relative;
  margin: 0 20px;
  border-radius: 20px;
  overflow: hidden;
`,Uy=cn.div`
  position: absolute;
  inset: 0;
  background: rgba(0, 0, 0, 0.45);
`,Wy=cn.div`
  position: relative;
  // z-index: 2;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  animation: ${Oy} 1s ease;
`,Yy=cn.h1`
  color: white;
  font-size: 52px;
  font-weight: 500;
  text-align: center;

  @media (max-width: 768px) {
    font-size: 34px;
  }
`,Hy=cn.span`
  color: #9bb7a5;
  letter-spacing: 0.25em;
  text-transform: uppercase;
  margin-bottom: 16px;
`,qy=cn.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 36px;

  @media (max-width: 900px) {
    grid-template-columns: 1fr;
  }
`,Xy=cn.div`
  position: relative;
  padding: 42px;
  border-radius: 28px;
  cursor: pointer;

  /* 🌫 Glass base */
  background: rgba(255, 255, 255, 0.14);
  backdrop-filter: blur(18px);
  -webkit-backdrop-filter: blur(18px);

  /* ✨ Glass border */
  border: 1px solid rgba(255, 255, 255, 0.28);

  /* 🧊 Depth */
  box-shadow:
    0 10px 30px rgba(0, 0, 0, 0.12),
    inset 0 1px 1px rgba(255, 255, 255, 0.35);

  transition:
    transform 0.35s ease,
    box-shadow 0.35s ease,
    background 0.35s ease;

  /* ✨ Hover lift */
  &:hover {
    transform: translateY(-8px);
    background: rgba(255, 255, 255, 0.18);

    box-shadow:
      0 18px 45px rgba(0, 0, 0, 0.18),
      inset 0 1px 1px rgba(255, 255, 255, 0.45);
  }

  /* 🫳 Pressed */
  &:active {
    transform: translateY(-2px) scale(0.98);
    box-shadow:
      0 8px 20px rgba(0, 0, 0, 0.16),
      inset 0 2px 6px rgba(0, 0, 0, 0.12);
  }
`,Gy=cn.h3`
  font-size: 22px;
  color: #1f2a24;
`,Ky=cn.p`
  margin-top: 14px;
  color: #5f6f66;
  line-height: 1.7;
`,Qy=cn.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 24px;

  @media (max-width: 900px) {
    grid-template-columns: 1fr;
  }
`,Zy=cn.img`
  width: 100%;
  height: auto; /* natural height */
  max-height: 420px; /* keeps size calm like Real Transformations */

  object-fit: contain; /* 🔥 NO CROPPING */
  object-position: center;

  border-radius: 24px;
  display: block;
  background: #eef2ef; /* soft backdrop if image is shorter */
`;cn.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 28px;

  @media (max-width: 900px) {
    grid-template-columns: 1fr;
  }
`,cn.video`
  width: 100%;
  border-radius: 24px;
  max-height: 400px;
  box-shadow: 0 25px 50px rgba(0, 0, 0, 0.15);
`,cn.section`
  padding: 140px 20px;
  text-align: center;
`,cn.button`
  margin-top: 28px;
  padding: 16px 42px;
  border-radius: 999px;
  background: #1f2a24;
  color: #ffffff;
  border: none;
  cursor: pointer;
  transition: 0.3s ease;

  &:hover {
    transform: translateY(-3px);
  }
`;const Jy=pn`
  from {
    opacity: 0;
    transform: translateY(40px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`,ev=cn.div`
  opacity: ${({$visible:e})=>e?1:0};
  animation: ${({$visible:e})=>e&&Jy} 0.8s ease forwards;
`,tv=cn.div`
  display: flex;
  flex-direction: column;
  gap: 28px;

  @media (min-width: 768px) {
    display: none;
  }
`,nv=cn.div`
  display: none;

  @media (min-width: 768px) {
    display: block;
  }
`,rv=cn.div`
  max-width: 720px;
  margin: 0 auto;
  padding: 48px 56px;

  background: rgba(255, 255, 255, 0.6);
  backdrop-filter: blur(14px);
  -webkit-backdrop-filter: blur(14px);

  border-radius: 32px;

  box-shadow:
    0px 32px 64px rgba(15, 60, 40, 0.12),
    inset 0 0 0 1px rgba(255, 255, 255, 0.6);

  display: flex;
  flex-direction: column;
  gap: 22px;

  @media (max-width: 768px) {
    padding: 36px 24px;
  }
`,iv=cn.div`
  display: flex;
  align-items: flex-start;
  gap: 16px;
`,av=cn.span`
  width: 8px;
  height: 8px;
  margin-top: 8px;
  border-radius: 50%;
  background: #9bb7a5;
  flex-shrink: 0;
`,ov=cn.p`
  font-size: 15.5px;
  line-height: 1.7;
  color: #1f2a24;
`,sv=cn.div`
  position: relative;
  height: 520px;
  touch-action: pan-y;

  max-width: 900px;
  margin: 0 auto;

  @media (max-width: 768px) {
    height: 420px;
    max-width: 100%;
  }
`,lv=cn.div`
  position: relative;
  width: 100%;
  height: 100%;
`,uv=cn.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transition: all 0.6s ease;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 22px;
  }

  video {
    will-change: transform, opacity;
    backface-visibility: hidden;
  }

  video {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 22px;
    box-shadow: 0 25px 45px rgba(0, 0, 0, 0.18);
  }

  /* FRONT VIDEO */
  ${({$position:e})=>"front"===e&&"\n      transform: translate(-50%, -50%) scale(1);\n      z-index: 5;\n      opacity: 1;\n    "}

  /* LEFT VIDEO */
  ${({$position:e})=>"back-left"===e&&"\n      transform: translate(-115%, -48%) scale(0.82);\n      z-index: 2;\n      opacity: 0.65;\n    "}

  /* RIGHT VIDEO */
  ${({$position:e})=>"back-right"===e&&"\n      transform: translate(15%, -48%) scale(0.82);\n      z-index: 2;\n      opacity: 0.65;\n    "}

  /* MOBILE */
  @media (max-width: 768px) {
    ${({$position:e})=>"back-left"===e&&"\n        transform: translate(-90%, -48%) scale(0.75);\n        opacity: 0.5;\n      "}

    ${({$position:e})=>"back-right"===e&&"\n        transform: translate(-10%, -48%) scale(0.75);\n        opacity: 0.5;\n      "}
  }
`,cv=cn.button`
  position: absolute;
  top: 50%;
  ${e=>"left"===e.$direction?"left: 5%":"right: 5%"};
  transform: translateY(-50%);
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.9);
  border: none;
  cursor: pointer;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 100;
  transition: all 0.3s ease;
  backdrop-filter: blur(5px);
  -webkit-backdrop-filter: blur(5px);

  &:hover {
    transform: translateY(-50%) scale(1.1);
    background: white;
    box-shadow: 0 6px 20px rgba(0, 0, 0, 0.15);
  }

  &:active {
    transform: translateY(-50%) scale(0.95);
  }

  &::before {
    content: "${e=>"left"===e.$direction?"❮":"❯"}";
    font-size: 20px;
    color: #333;
    font-weight: bold;
  }

  @media (max-width: 768px) {
    width: 40px;
    height: 40px;
    ${e=>"left"===e.$direction?"left: 10px":"right: 10px"};
  }
`;function dv(){return d.jsxs(By,{$bgImage:ci.yoga.hero,children:[d.jsx(Uy,{}),d.jsxs(Wy,{children:[d.jsx(Hy,{children:"YOGA"}),d.jsxs(Yy,{children:["Move with Awareness.",d.jsx("br",{}),"Build Strength with Ease."]})]})]})}const hv=[{slug:"mindful-movement",title:"Mindful Movement",desc:"Yoga practiced with awareness, breath connection, and respect for your body’s limits."},{slug:"strength-stability",title:"Strength & Stability",desc:"Build functional strength and joint stability through safe alignment and gradual progress."},{slug:"posture-pain-care",title:"Posture & Pain Care",desc:"Support posture correction and manage back, neck, and joint discomfort mindfully."},{slug:"breath-mindfulness",title:"Breath & Mindfulness",desc:"Calm the nervous system and improve focus through conscious breath awareness."},{slug:"progressive-practice",title:"Progressive & Safe Practice",desc:"Each session is designed to be sustainable, adaptive, and supportive of long-term wellbeing."}];function pv(){return d.jsx(Iy,{children:d.jsxs(Ny,{children:[d.jsx(Fy,{children:"A Practice Beyond Asanas"}),d.jsx(Vy,{children:"Yoga is a tool for balance, healing, and self-awareness. My sessions are thoughtfully designed to support mobility, strength, posture, breath, and mental clarity — while respecting your body’s limitations and needs."}),d.jsx(tv,{children:hv.map(e=>d.jsxs(Xy,{children:[d.jsx(Gy,{children:e.title}),d.jsx(Ky,{children:e.desc})]},e.slug))}),d.jsx(nv,{children:d.jsx(qy,{children:hv.map(e=>d.jsxs(Xy,{children:[d.jsx(Gy,{children:e.title}),d.jsx(Ky,{children:e.desc})]},e.slug))})})]})})}function fv(){return d.jsx(Iy,{children:d.jsx(Ny,{children:d.jsxs(Qy,{children:[d.jsx(Zy,{src:ci.yoga.gallery[0],alt:"Yoga practice in calm indoor space"}),d.jsx(Zy,{src:ci.yoga.gallery[1],alt:"Woman practicing yoga mindfully"}),d.jsx(Zy,{src:ci.yoga.gallery[2],alt:"Holistic yoga and wellness session"})]})})})}function mv(){const{ref:e,inView:t}=(()=>{const{ref:e,inView:t}=ja({triggerOnce:!0,threshold:.2});return{ref:e,inView:t}})();return d.jsx(Iy,{ref:e,children:d.jsxs(Ny,{children:[d.jsx(Fy,{children:"Real Transformations"}),d.jsx(ev,{$visible:t,children:d.jsxs(qy,{children:[d.jsx(Zy,{src:ci.yoga.transformations[0],alt:"Yoga journey before transformation"}),d.jsx(Zy,{src:ci.yoga.transformations[1],alt:"Yoga practice after transformation"}),d.jsx(Zy,{src:ci.yoga.transformations[2],alt:"Mind body balance through yoga"})]})})]})})}const gv=[{id:"1",src:ci.yoga.videos[0]},{id:"2",src:ci.yoga.videos[1]}];function yv(){const[e,t]=h.useState(0),n=h.useRef(null),r=gv.length,i=()=>t(e=>(e+1)%r),a=t=>(e+t+r)%r;return d.jsx(Iy,{ref:n,children:d.jsxs(Ny,{children:[d.jsx(Fy,{children:"Client Stories"}),d.jsxs(sv,{children:[d.jsxs(lv,{style:{transition:"transform 0.6s cubic-bezier(0.22,1,0.36,1)"},children:[d.jsx(uv,{$position:"back-left",children:d.jsx("video",{src:gv[a(-1)].src,muted:!0,preload:"auto"})}),d.jsx(uv,{$position:"front",children:d.jsx("video",{src:gv[a(0)].src,controls:!0,playsInline:!0,muted:!0,autoPlay:!0,preload:"auto",onEnded:i})}),d.jsx(uv,{$position:"back-right",children:d.jsx("video",{src:gv[a(1)].src,muted:!0,preload:"auto"})})]}),r>1&&d.jsxs(d.Fragment,{children:[d.jsx(cv,{$direction:"left",onClick:()=>t(e=>(e-1+r)%r)}),d.jsx(cv,{$direction:"right",onClick:i})]})]})]})})}const vv=["Hatha & Vinyasa Yoga","Strength & flexibility-focused flows","Therapeutic yoga for pain management","Prenatal & postnatal yoga","Beginners & lifestyle-based yoga"];function xv(){return d.jsx(Iy,{children:d.jsxs(Ny,{children:[d.jsx(Fy,{children:"Types of Yoga I Offer"}),d.jsx(Vy,{children:"Yoga sessions are customised based on your body, goals and health conditions."}),d.jsx(rv,{children:vv.map(e=>d.jsxs(iv,{children:[d.jsx(av,{}),d.jsx(ov,{children:e})]},e))})]})})}const bv=cn.section`
  padding: 120px 24px;
  background: radial-gradient(
    80% 120% at 50% -20%,
    rgba(217, 154, 66, 0.08),
    transparent 60%
  );
`,wv=cn.div`
  max-width: 1100px;
  margin: 0 auto;
`,kv=cn.div`
  text-align: center;
  margin-bottom: 64px;
`,_v=cn.h2`
  font-size: 32px;
  font-weight: 700;
  color: ${({theme:e})=>e.colors.textPrimary};
  margin-bottom: 12px;
`,Sv=cn.p`
  max-width: 640px;
  margin: 0 auto;
  font-size: 16px;
  line-height: 26px;
  color: ${({theme:e})=>e.colors.textMuted};
`,jv=cn.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 32px;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`,Tv=cn.div`
  position: relative;
  border-radius: 28px;
  padding: 32px 28px 36px;

  background: linear-gradient(
    180deg,
    rgba(255, 255, 255, 0.55),
    rgba(255, 255, 255, 0.25)
  );
  backdrop-filter: blur(22px) saturate(140%);
  border: 1px solid rgba(255, 255, 255, 0.6);

  box-shadow:
    0 30px 80px rgba(6, 51, 54, 0.18),
    inset 0 1px 0 rgba(255, 255, 255, 0.7);

  transform: ${({$highlight:e})=>e?"translateY(-12px)":"none"};

  transition: all 0.6s cubic-bezier(0.16, 1, 0.3, 1);

  &:hover {
    transform: ${({$highlight:e})=>e?"translateY(-16px)":"translateY(-6px)"};
  }
`;cn.div`
  position: absolute;
  top: -14px;
  right: 24px;

  background: ${({theme:e})=>e.colors.primaryActive};
  color: white;

  padding: 6px 14px;
  border-radius: 999px;
  font-size: 12px;
  font-weight: 600;
`;const Cv=cn.h3`
  font-size: 22px;
  font-weight: 600;
  color: ${({theme:e})=>e.colors.textPrimary};
  margin-bottom: 12px;
`,Ev=cn.div`
  font-size: 34px;
  font-weight: 700;
  color: ${({theme:e})=>e.colors.textPrimary};
  margin-bottom: 20px;

  span {
    display: block;
    font-size: 14px;
    font-weight: 500;
    color: ${({theme:e})=>e.colors.textMuted};
    margin-top: 4px;
  }
`,Pv=cn.button`
  position: relative;
  width: 100%;
  padding: 14px 18px;
  border-radius: 999px;
  color: black;
  /* Frosted white glass */
  background: linear-gradient(
    180deg,
    rgba(255, 255, 255, 0.7),
    rgba(255, 255, 255, 0.45)
  );
  backdrop-filter: blur(16px) saturate(120%);
  -webkit-backdrop-filter: blur(16px) saturate(120%);

  /* Elegant border */
  border: 1px solid rgba(255, 255, 255, 0.65);

  /* Subtle depth */
  box-shadow:
    0 14px 36px rgba(6, 51, 54, 0.16),
    inset 0 1px 0 rgba(255, 255, 255, 0.75);

  /* Typography */
  font-size: 15px;
  font-weight: 600;
  letter-spacing: 0.2px;
  color: ${({theme:e})=>e.colors.textPrimary};

  cursor: pointer;

  transition:
    transform 0.45s cubic-bezier(0.16, 1, 0.3, 1),
    box-shadow 0.45s cubic-bezier(0.16, 1, 0.3, 1),
    background 0.45s ease;

  /* Soft glass highlight */
  &::after {
    content: "";
    position: absolute;
    inset: 0;
    border-radius: inherit;
    background: radial-gradient(
      120% 80% at 30% 0%,
      rgba(255, 255, 255, 0.55),
      transparent 60%
    );
    opacity: 0.6;
    pointer-events: none;
  }

  &:hover {
    transform: translateY(-2px);
    box-shadow:
      0 20px 48px rgba(6, 51, 54, 0.22),
      inset 0 1px 0 rgba(255, 255, 255, 0.85);
  }

  &:active {
    transform: translateY(0);
    box-shadow: 0 10px 26px rgba(6, 51, 54, 0.18);
  }

  &:focus-visible {
    outline: none;
    box-shadow:
      0 0 0 3px rgba(6, 51, 54, 0.15),
      0 18px 44px rgba(6, 51, 54, 0.22);
  }
`,Mv=cn.ul`
  list-style: none;
  margin-top: 28px;
  padding: 0;
  display: grid;
  gap: 14px;
`,Av=cn.li`
  display: flex;
  align-items: center;
  gap: 10px;

  font-size: 14px;
  color: ${({theme:e})=>e.colors.textSecondary};

  svg {
    color: ${({theme:e})=>e.colors.primaryActive};
  }
`,Rv=cn.div`
  margin-top: 32px;
  display: inline-flex;
  align-items: center;
  gap: 14px;

  padding: 8px 14px;
  border-radius: 999px;

  background: linear-gradient(
    180deg,
    rgba(255, 255, 255, 0.55),
    rgba(255, 255, 255, 0.25)
  );
  backdrop-filter: blur(14px);
  border: 1px solid rgba(255, 255, 255, 0.5);

  box-shadow: 0 14px 40px rgba(6, 51, 54, 0.15);
`,zv=cn.span`
  font-size: 14px;
  font-weight: 600;
  color: ${({theme:e,$active:t})=>t?e.colors.textPrimary:e.colors.textMuted};

  display: inline-flex;
  align-items: center;
  gap: 6px;
`,Dv=cn.button`
  width: 46px;
  height: 26px;
  border-radius: 999px;
  position: relative;

  background: ${({theme:e,$active:t})=>t?e.colors.primaryActive:"rgba(0,0,0,0.2)"};

  border: none;
  cursor: pointer;
  transition: all 0.4s ease;

  &::after {
    content: "";
    position: absolute;
    top: 3px;
    left: ${({$active:e})=>e?"23px":"3px"};

    width: 20px;
    height: 20px;
    border-radius: 50%;

    background: white;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.25);

    transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
  }
`,$v=cn.span`
  font-size: 11px;
  font-weight: 600;
  padding: 2px 8px;
  border-radius: 999px;

  background: ${({theme:e})=>e.colors.primaryActiveLight};
  color: ${({theme:e})=>e.colors.primaryActive};
`,Lv=cn.div`
  font-size: 16px;
  font-weight: 500;
  color: ${({theme:e})=>e.colors.textMuted};
  text-decoration: line-through;
  margin-bottom: 4px;
`,Ov=cn.div`
  display: flex;
  gap: 10px;
  margin-bottom: 18px;
`,Iv=cn.label`
  display: flex;
  align-items: center;
  gap: 10px;
  font-size: 14px;
  cursor: pointer;

  input {
    cursor: pointer;
  }
`,Nv=[{id:"foundation",name:"Group Session Plan",monthly:1500,quarterly:4500,highlight:!1,features:["Hatha, Ashtanga & Vinyasa Flow Yoga","Pranayama, Meditation & Breathwork","Face Yoga (selected days)","Weight loss or weight gain support","Improved flexibility & strength","Daily energy & overall wellness"]},{id:"holistic",name:"Private Session",monthly:6999,quarterly:20997,highlight:!0,features:["One-on-one private sessions with complete personal attention","Hatha, Ashtanga & Vinyasa Flow Yoga (customized for you)","Pranayama, meditation & breathing techniques","Face yoga on selected days","Posture correction & proper movement guidance","Goal-focused training","Therapeutic / medical yoga support","Optional nutrition guidance","Continuous progress tracking"]},{id:"prenatal",name:"Prenatal & Postnatal Care – Personalized One-on-One Support",monthly:8e3,quarterly:24e3,highlight:!1,features:["Trimester-wise yoga practices","Safe posture correction & body alignment","Pranayama & breathwork for relaxation & stamina","Garbhasanskar (mantras, bonding & mindfulness)","Nutritional guidance (optional detailed plans)","Emotional wellness & stress support","Postnatal recovery & core strengthening","Fully personalized sessions","Continuous progress tracking"]},{id:"prenatal-group",name:"Prenatal & Postnatal Group Care",monthly:2800,quarterly:8400,highlight:!1,features:["Trimester-wise safe yoga practices","Gentle posture & body alignment support","Pranayama & breathing techniques for relaxation & stamina","Garbhasanskar (mantras, bonding & mindfulness)","Basic nutritional guidance for pregnancy & recovery","Emotional well-being & stress management","Postnatal recovery & core strengthening","Personal attention within small groups"]}],Fv=[{sessions:12,price:6e3},{sessions:16,price:8e3},{sessions:20,price:1e4}],Vv=[{sessions:12,price:5e3},{sessions:16,price:6500},{sessions:20,price:8e3}];function Bv(){const[e,t]=h.useState("monthly"),[n,r]=h.useState(12),[i,a]=h.useState(12);return d.jsx(bv,{children:d.jsxs(wv,{children:[d.jsxs(kv,{children:[d.jsx(_v,{children:"Choose Your Wellness Path"}),d.jsx(Sv,{children:"Simple, transparent pricing — switch to quarterly and save more."}),d.jsxs(Rv,{children:[d.jsx(zv,{$active:"monthly"===e,children:"Monthly"}),d.jsx(Dv,{$active:"quarterly"===e,onClick:()=>t("monthly"===e?"quarterly":"monthly")}),d.jsxs(zv,{$active:"quarterly"===e,children:["Quarterly",d.jsx($v,{children:"Save 10%"})]})]})]}),d.jsx(jv,{children:Nv.map(t=>{const o=t.monthly,s=3*t.monthly,l=Math.round(.9*s),u="monthly"===e?o:l;return d.jsxs(Tv,{$highlight:t.highlight,children:[d.jsx(Cv,{children:t.name}),"holistic"!==t.id&&"prenatal"!==t.id&&d.jsxs(d.Fragment,{children:[d.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between",marginBottom:"6px"},children:[d.jsxs(Ev,{children:["quarterly"===e&&d.jsxs(Lv,{children:["₹",s.toLocaleString("en-IN")]}),"₹",u.toLocaleString("en-IN")]}),"foundation"===t.id&&d.jsx("div",{style:{fontSize:"14px",color:"#777"},children:"Mon–Fri • Online / Offline"}),"prenatal-group"===t.id&&d.jsx("div",{style:{fontSize:"14px",color:"#777"},children:"Small groups (2–3 mothers)"})]}),d.jsx("span",{style:{fontSize:"13px",color:"#888"},children:"monthly"===e?"per month":"per quarter"})]}),"holistic"===t.id&&(()=>{const t=Fv.find(e=>e.sessions===n),i=t?.price||0,a=3*i,o=Math.round(.9*a),s="monthly"===e?i:o;return d.jsxs(d.Fragment,{children:[d.jsxs(Ev,{children:["quarterly"===e&&d.jsxs(Lv,{children:["₹",a.toLocaleString("en-IN")]}),"₹",s.toLocaleString("en-IN"),d.jsx("span",{children:"monthly"===e?`${n} sessions`:`Total ${3*n} sessions`})]}),d.jsx(Ov,{children:Fv.map(e=>d.jsxs(Iv,{children:[d.jsx("input",{type:"radio",checked:n===e.sessions,onChange:()=>r(e.sessions)}),e.sessions," Sessions"]},e.sessions))})]})})(),"prenatal"===t.id&&(()=>{const t=Vv.find(e=>e.sessions===i),n=t?.price||0,r=3*n,o=Math.round(.9*r),s="monthly"===e?n:o;return d.jsxs(d.Fragment,{children:[d.jsxs(Ev,{children:["quarterly"===e&&d.jsxs(Lv,{children:["₹",r.toLocaleString("en-IN")]}),"₹",s.toLocaleString("en-IN"),d.jsx("span",{children:"monthly"===e?`${i} sessions`:`Total ${3*i} sessions`})]}),d.jsx(Ov,{children:Vv.map(e=>d.jsxs(Iv,{children:[d.jsx("input",{type:"radio",checked:i===e.sessions,onChange:()=>a(e.sessions)}),e.sessions," Sessions"]},e.sessions))})]})})(),d.jsx(Pv,{onClick:()=>(t=>{let r="",a=0;if("holistic"===t.id){const e=Fv.find(e=>e.sessions===n);a=e?.price||0,r=`Hi! I'm interested in the ${t.name}.\nSessions: ${n}\nPrice: ₹${a}`}else if("prenatal"===t.id){const e=Vv.find(e=>e.sessions===i);a=e?.price||0,r=`Hi! I'm interested in the ${t.name}.\nSessions: ${i}\nPrice: ₹${a}`}else{const n=t.monthly,i=3*n,o=Math.round(.9*i);a="monthly"===e?n:o,r=`Hi! I'm interested in the ${t.name}.\nBilling: ${e}\nPrice: ₹${a}`}window.open(Og(r),"_blank")})(t),children:"Begin Your Journey"}),d.jsx(Mv,{children:t.features.map(e=>d.jsxs(Av,{children:[d.jsx(Li,{size:16}),e]},e))})]},t.id)})})]})})}function Uv(){return d.jsxs(d.Fragment,{children:[d.jsx(dv,{}),d.jsx(pv,{}),d.jsx(xv,{}),d.jsx(Bv,{}),d.jsx(fv,{}),d.jsx(mv,{}),d.jsx(yv,{}),d.jsx(ds,{})]})}const Wv=cn.section`
  padding: 120px 20px;
  background: linear-gradient(180deg, #f6fbf8, #eef6f1);
  opacity: 0.9;
  margin: 0 16px 16px 16px;
  border-radius: 24px;
`,Yv=cn.div`
  max-width: 1100px;
  margin: auto;
`,Hv=cn.div`
  max-width: 720px;
  margin-bottom: 60px;
`,qv=cn.h1`
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
`,Xv=cn.p`
  font-size: 18px;
  color: #4f6f63;
  margin-top: 16px;
  line-height: 1.7;
`,Gv=cn.div`
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  gap: 32px;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`,Kv=cn.div`
  background: #ffffff;
  padding: 32px;
  border-radius: 26px;
  box-shadow: 0 18px 48px rgba(0, 0, 0, 0.08);
`,Qv=cn.h3`
  font-size: 20px;
  font-weight: 500;
  color: #183c2f;
  margin-bottom: 12px;
`,Zv=cn.span`
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
`,Jv=cn.p`
  font-size: 16px;
  color: #5a746a;
  line-height: 1.6;
`,ex=cn.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 28px;
  margin-top: 60px;

  @media (max-width: 900px) {
    grid-template-columns: 1fr;
  }
`,tx=cn.div`
  background: #ffffff;
  padding: 28px;
  border-radius: 22px;
  text-align: center;
  box-shadow: 0 14px 40px rgba(0, 0, 0, 0.08);
`,nx=cn.div`
  font-size: 22px;
  font-weight: 600;
  color: #2e6b55;
  margin-bottom: 12px;
`;cn.a`
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
`;const rx=cn.div`
  max-width: 720px;
`,ix=cn.div`
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
`;function ax(){return d.jsx(Wv,{children:d.jsxs(Yv,{children:[d.jsxs(Hv,{children:[d.jsxs(qv,{children:["Ayurveda for ",d.jsx("span",{children:"Natural Balance"})]}),d.jsx(Xv,{children:"Ayurveda helps you understand your body’s unique constitution and lifestyle patterns to restore balance in a gentle and sustainable way."})]}),d.jsx(Hv,{as:"div",style:{marginTop:"100px"},children:d.jsxs(qv,{as:"h2",children:["What This ",d.jsx("span",{children:"Includes"})]})}),d.jsxs(Gv,{children:[d.jsxs(Kv,{children:[d.jsx(Qv,{children:"Ayurvedic Assessment"}),d.jsxs(Jv,{children:["• Prakriti (body constitution) & Vikriti (current imbalance) understanding",d.jsx("br",{}),"• Dosha evaluation: Vata, Pitta & Kapha",d.jsx("br",{}),"• Basic review of digestion, routine & stress patterns"]})]}),d.jsxs(Kv,{children:[d.jsx(Qv,{children:"Dosha-Based Diet & Lifestyle Guidance"}),d.jsxs(Jv,{children:["• Simple food suggestions according to dosha tendencies",d.jsx("br",{}),"• Daily routine (Dinacharya) guidance for better digestion, sleep & energy",d.jsx("br",{}),"• Practical, easy-to-follow habits"]})]}),d.jsxs(Kv,{children:[d.jsx(Qv,{children:"Ayurvedic Therapies"}),d.jsx(Zv,{children:"Coming soon"}),d.jsxs(Jv,{children:["In-person Ayurvedic therapies will be introduced soon, including:",d.jsx("br",{}),"• Abhyanga – full body oil massage for relaxation & circulation",d.jsx("br",{}),"• Potli Abhyanga – herbal bolus therapy for muscle & joint comfort",d.jsx("br",{}),"• Shirodhara – calming therapy to support mental relaxation & sleep",d.jsx("br",{}),"• Panchakarma awareness & guidance (referral where appropriate)"]})]})]}),d.jsx(Hv,{style:{marginTop:"100px"},children:d.jsxs(qv,{as:"h2",children:["Who It’s ",d.jsx("span",{children:"For"})]})}),d.jsxs(Gv,{children:[d.jsx(Kv,{children:d.jsx(Jv,{children:"Digestive discomfort & lifestyle-related issues"})}),d.jsx(Kv,{children:d.jsx(Jv,{children:"Stress, anxiety & disturbed sleep"})}),d.jsx(Kv,{children:d.jsx(Jv,{children:"Hormonal imbalance support (PCOS, menstrual health)"})}),d.jsx(Kv,{children:d.jsx(Jv,{children:"Fatigue, stiffness & general wellbeing"})}),d.jsx(Kv,{children:d.jsx(Jv,{children:"Preventive care & holistic balance"})})]}),d.jsx(Hv,{style:{marginTop:"100px"},children:d.jsxs(qv,{as:"h2",children:["The Consultation ",d.jsx("span",{children:"Approach"})]})}),d.jsxs(ex,{children:[d.jsxs(tx,{children:[d.jsx(nx,{children:"01"}),d.jsx(Jv,{children:"One-on-one personalised consultation"})]}),d.jsxs(tx,{children:[d.jsx(nx,{children:"02"}),d.jsx(Jv,{children:"Clear explanation in simple language"})]}),d.jsxs(tx,{children:[d.jsx(nx,{children:"03"}),d.jsx(Jv,{children:"Gentle, sustainable recommendations"})]})]}),d.jsxs(rx,{style:{marginTop:"100px"},children:[d.jsxs(qv,{as:"h2",children:["Book a ",d.jsx("span",{children:"Discovery Call"})]}),d.jsx(Xv,{children:"Not sure where to begin? Start with a short call to understand what you need."}),d.jsxs(ix,{children:[d.jsx("h3",{children:"Ayurveda Discovery Call"}),d.jsx("p",{style:{color:"#aaa",marginTop:"6px"},children:"20 Minutes • Online via Zoom/WhatsApp"}),d.jsxs("div",{className:"price",children:[d.jsx("span",{children:"₹"}),"300"]}),d.jsxs("ul",{children:[d.jsx("li",{children:"Brief dosha & lifestyle overview"}),d.jsx("li",{children:"Clarity on your main concerns"}),d.jsx("li",{children:"Recommendations on next best steps"})]}),d.jsx(oi,{href:Og(Pg),target:"_blank",rel:"noopener noreferrer",fullWidth:!0,size:"lg",children:"Book My Ayurveda Discovery Call"})]})]}),d.jsx(Hv,{style:{marginTop:"100px"},children:d.jsxs(Xv,{style:{maxWidth:"800px"},children:[d.jsx("strong",{children:"Disclaimer:"})," Ayurvedic consultations and therapies are offered as supportive wellness practices and do not replace medical diagnosis or treatment. Panchakarma procedures are advised or referred only where clinically appropriate."]})})]})})}function ox(){return d.jsx(ax,{})}cn.a`
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
`;const sx=()=>{const{pathname:e}=or();return h.useEffect(()=>{window.scrollTo(0,0)},[e]),null};function lx(){return d.jsxs(d.Fragment,{children:[d.jsx(sx,{}),d.jsxs(_r,{children:[d.jsx(wr,{path:"/",element:d.jsx(qo,{})}),d.jsx(wr,{path:"/about",element:d.jsx(Vs,{})}),d.jsx(wr,{path:"/yoga",element:d.jsx(Uv,{})}),d.jsx(wr,{path:"/ayurveda",element:d.jsx(ox,{})}),d.jsx(wr,{path:"/nutrition",element:d.jsx(Ly,{})}),d.jsx(wr,{path:"/contact",element:d.jsx(ty,{})}),d.jsx(wr,{path:"*",element:d.jsx(br,{to:"/",replace:!0})})]})]})}function ux(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function cx(e,t){e.prototype=Object.create(t.prototype),e.prototype.constructor=e,e.__proto__=t}var dx,hx,px,fx,mx,gx,yx,vx,xx,bx,wx,kx,_x,Sx,jx,Tx,Cx,Ex,Px,Mx,Ax,Rx,zx,Dx,$x,Lx,Ox,Ix,Nx,Fx,Vx,Bx,Ux={autoSleep:120,force3D:"auto",nullTargetWarn:1,units:{lineHeight:""}},Wx={duration:.5,overwrite:!1,delay:0},Yx=1e8,Hx=1e-8,qx=2*Math.PI,Xx=qx/4,Gx=0,Kx=Math.sqrt,Qx=Math.cos,Zx=Math.sin,Jx=function(e){return"string"==typeof e},eb=function(e){return"function"==typeof e},tb=function(e){return"number"==typeof e},nb=function(e){return void 0===e},rb=function(e){return"object"==typeof e},ib=function(e){return!1!==e},ab=function(){return"undefined"!=typeof window},ob=function(e){return eb(e)||Jx(e)},sb="function"==typeof ArrayBuffer&&ArrayBuffer.isView||function(){},lb=Array.isArray,ub=/random\([^)]+\)/g,cb=/,\s*/g,db=/(?:-?\.?\d|\.)+/gi,hb=/[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,pb=/[-+=.]*\d+[.e-]*\d*[a-z%]*/g,fb=/[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,mb=/[+-]=-?[.\d]+/,gb=/[^,'"\[\]\s]+/gi,yb=/^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,vb={},xb={},bb=function(e){return(xb=Kb(e,vb))&&Gk},wb=function(e,t){return console.warn("Invalid property",e,"set to",t,"Missing plugin? gsap.registerPlugin()")},kb=function(e,t){return!t&&console.warn(e)},_b=function(e,t){return e&&(vb[e]=t)&&xb&&(xb[e]=t)||vb},Sb=function(){return 0},jb={suppressEvents:!0,isStart:!0,kill:!1},Tb={suppressEvents:!0,kill:!1},Cb={suppressEvents:!0},Eb={},Pb=[],Mb={},Ab={},Rb={},zb=30,Db=[],$b="",Lb=function(e){var t,n,r=e[0];if(rb(r)||eb(r)||(e=[e]),!(t=(r._gsap||{}).harness)){for(n=Db.length;n--&&!Db[n].targetTest(r););t=Db[n]}for(n=e.length;n--;)e[n]&&(e[n]._gsap||(e[n]._gsap=new uk(e[n],t)))||e.splice(n,1);return e},Ob=function(e){return e._gsap||Lb(Cw(e))[0]._gsap},Ib=function(e,t,n){return(n=e[t])&&eb(n)?e[t]():nb(n)&&e.getAttribute&&e.getAttribute(t)||n},Nb=function(e,t){return(e=e.split(",")).forEach(t)||e},Fb=function(e){return Math.round(1e5*e)/1e5||0},Vb=function(e){return Math.round(1e7*e)/1e7||0},Bb=function(e,t){var n=t.charAt(0),r=parseFloat(t.substr(2));return e=parseFloat(e),"+"===n?e+r:"-"===n?e-r:"*"===n?e*r:e/r},Ub=function(e,t){for(var n=t.length,r=0;e.indexOf(t[r])<0&&++r<n;);return r<n},Wb=function(){var e,t,n=Pb.length,r=Pb.slice(0);for(Mb={},Pb.length=0,e=0;e<n;e++)(t=r[e])&&t._lazy&&(t.render(t._lazy[0],t._lazy[1],!0)._lazy=0)},Yb=function(e){return!!(e._initted||e._startAt||e.add)},Hb=function(e,t,n,r){Pb.length&&!hx&&Wb(),e.render(t,n,!!(hx&&t<0&&Yb(e))),Pb.length&&!hx&&Wb()},qb=function(e){var t=parseFloat(e);return(t||0===t)&&(e+"").match(gb).length<2?t:Jx(e)?e.trim():e},Xb=function(e){return e},Gb=function(e,t){for(var n in t)n in e||(e[n]=t[n]);return e},Kb=function(e,t){for(var n in t)e[n]=t[n];return e},Qb=function e(t,n){for(var r in n)"__proto__"!==r&&"constructor"!==r&&"prototype"!==r&&(t[r]=rb(n[r])?e(t[r]||(t[r]={}),n[r]):n[r]);return t},Zb=function(e,t){var n,r={};for(n in e)n in t||(r[n]=e[n]);return r},Jb=function(e){var t,n=e.parent||fx,r=e.keyframes?(t=lb(e.keyframes),function(e,n){for(var r in n)r in e||"duration"===r&&t||"ease"===r||(e[r]=n[r])}):Gb;if(ib(e.inherit))for(;n;)r(e,n.vars.defaults),n=n.parent||n._dp;return e},ew=function(e,t,n,r,i){var a,o=e[r];if(i)for(a=t[i];o&&o[i]>a;)o=o._prev;return o?(t._next=o._next,o._next=t):(t._next=e[n],e[n]=t),t._next?t._next._prev=t:e[r]=t,t._prev=o,t.parent=t._dp=e,t},tw=function(e,t,n,r){void 0===n&&(n="_first"),void 0===r&&(r="_last");var i=t._prev,a=t._next;i?i._next=a:e[n]===t&&(e[n]=a),a?a._prev=i:e[r]===t&&(e[r]=i),t._next=t._prev=t.parent=null},nw=function(e,t){e.parent&&(!t||e.parent.autoRemoveChildren)&&e.parent.remove&&e.parent.remove(e),e._act=0},rw=function(e,t){if(e&&(!t||t._end>e._dur||t._start<0))for(var n=e;n;)n._dirty=1,n=n.parent;return e},iw=function(e,t,n,r){return e._startAt&&(hx?e._startAt.revert(Tb):e.vars.immediateRender&&!e.vars.autoRevert||e._startAt.render(t,!0,r))},aw=function e(t){return!t||t._ts&&e(t.parent)},ow=function(e){return e._repeat?sw(e._tTime,e=e.duration()+e._rDelay)*e:0},sw=function(e,t){var n=Math.floor(e=Vb(e/t));return e&&n===e?n-1:n},lw=function(e,t){return(e-t._start)*t._ts+(t._ts>=0?0:t._dirty?t.totalDuration():t._tDur)},uw=function(e){return e._end=Vb(e._start+(e._tDur/Math.abs(e._ts||e._rts||Hx)||0))},cw=function(e,t){var n=e._dp;return n&&n.smoothChildTiming&&e._ts&&(e._start=Vb(n._time-(e._ts>0?t/e._ts:((e._dirty?e.totalDuration():e._tDur)-t)/-e._ts)),uw(e),n._dirty||rw(n,e)),e},dw=function(e,t){var n;if((t._time||!t._dur&&t._initted||t._start<e._time&&(t._dur||!t.add))&&(n=lw(e.rawTime(),t),(!t._dur||_w(0,t.totalDuration(),n)-t._tTime>Hx)&&t.render(n,!0)),rw(e,t)._dp&&e._initted&&e._time>=e._dur&&e._ts){if(e._dur<e.duration())for(n=e;n._dp;)n.rawTime()>=0&&n.totalTime(n._tTime),n=n._dp;e._zTime=-1e-8}},hw=function(e,t,n,r){return t.parent&&nw(t),t._start=Vb((tb(n)?n:n||e!==fx?bw(e,n,t):e._time)+t._delay),t._end=Vb(t._start+(t.totalDuration()/Math.abs(t.timeScale())||0)),ew(e,t,"_first","_last",e._sort?"_start":0),gw(t)||(e._recent=t),r||dw(e,t),e._ts<0&&cw(e,e._tTime),e},pw=function(e,t){return(vb.ScrollTrigger||wb("scrollTrigger",t))&&vb.ScrollTrigger.create(t,e)},fw=function(e,t,n,r,i){return yk(e,t,i),e._initted?!n&&e._pt&&!hx&&(e._dur&&!1!==e.vars.lazy||!e._dur&&e.vars.lazy)&&xx!==Qw.frame?(Pb.push(e),e._lazy=[i,r],1):void 0:1},mw=function e(t){var n=t.parent;return n&&n._ts&&n._initted&&!n._lock&&(n.rawTime()<0||e(n))},gw=function(e){var t=e.data;return"isFromStart"===t||"isStart"===t},yw=function(e,t,n,r){var i=e._repeat,a=Vb(t)||0,o=e._tTime/e._tDur;return o&&!r&&(e._time*=a/e._dur),e._dur=a,e._tDur=i?i<0?1e10:Vb(a*(i+1)+e._rDelay*i):a,o>0&&!r&&cw(e,e._tTime=e._tDur*o),e.parent&&uw(e),n||rw(e.parent,e),e},vw=function(e){return e instanceof dk?rw(e):yw(e,e._dur)},xw={_start:0,endTime:Sb,totalDuration:Sb},bw=function e(t,n,r){var i,a,o,s=t.labels,l=t._recent||xw,u=t.duration()>=Yx?l.endTime(!1):t._dur;return Jx(n)&&(isNaN(n)||n in s)?(a=n.charAt(0),o="%"===n.substr(-1),i=n.indexOf("="),"<"===a||">"===a?(i>=0&&(n=n.replace(/=/,"")),("<"===a?l._start:l.endTime(l._repeat>=0))+(parseFloat(n.substr(1))||0)*(o?(i<0?l:r).totalDuration()/100:1)):i<0?(n in s||(s[n]=u),s[n]):(a=parseFloat(n.charAt(i-1)+n.substr(i+1)),o&&r&&(a=a/100*(lb(r)?r[0]:r).totalDuration()),i>1?e(t,n.substr(0,i-1),r)+a:u+a)):null==n?u:+n},ww=function(e,t,n){var r,i,a=tb(t[1]),o=(a?2:1)+(e<2?0:1),s=t[o];if(a&&(s.duration=t[1]),s.parent=n,e){for(r=s,i=n;i&&!("immediateRender"in r);)r=i.vars.defaults||{},i=ib(i.vars.inherit)&&i.parent;s.immediateRender=ib(r.immediateRender),e<2?s.runBackwards=1:s.startAt=t[o-1]}return new kk(t[0],s,t[o+1])},kw=function(e,t){return e||0===e?t(e):t},_w=function(e,t,n){return n<e?e:n>t?t:n},Sw=function(e,t){return Jx(e)&&(t=yb.exec(e))?t[1]:""},jw=[].slice,Tw=function(e,t){return e&&rb(e)&&"length"in e&&(!t&&!e.length||e.length-1 in e&&rb(e[0]))&&!e.nodeType&&e!==mx},Cw=function(e,t,n){return px&&!t&&px.selector?px.selector(e):!Jx(e)||n||!gx&&Zw()?lb(e)?function(e,t,n){return void 0===n&&(n=[]),e.forEach(function(e){var r;return Jx(e)&&!t||Tw(e,1)?(r=n).push.apply(r,Cw(e)):n.push(e)})||n}(e,n):Tw(e)?jw.call(e,0):e?[e]:[]:jw.call((t||yx).querySelectorAll(e),0)},Ew=function(e){return e=Cw(e)[0]||kb("Invalid scope")||{},function(t){var n=e.current||e.nativeElement||e;return Cw(t,n.querySelectorAll?n:n===e?kb("Invalid scope")||yx.createElement("div"):e)}},Pw=function(e){return e.sort(function(){return.5-Math.random()})},Mw=function(e){if(eb(e))return e;var t=rb(e)?e:{each:e},n=ik(t.ease),r=t.from||0,i=parseFloat(t.base)||0,a={},o=r>0&&r<1,s=isNaN(r)||o,l=t.axis,u=r,c=r;return Jx(r)?u=c={center:.5,edges:.5,end:1}[r]||0:!o&&s&&(u=r[0],c=r[1]),function(e,o,d){var h,p,f,m,g,y,v,x,b,w=(d||t).length,k=a[w];if(!k){if(!(b="auto"===t.grid?0:(t.grid||[1,Yx])[1])){for(v=-1e8;v<(v=d[b++].getBoundingClientRect().left)&&b<w;);b<w&&b--}for(k=a[w]=[],h=s?Math.min(b,w)*u-.5:r%b,p=b===Yx?0:s?w*c/b-.5:r/b|0,v=0,x=Yx,y=0;y<w;y++)f=y%b-h,m=p-(y/b|0),k[y]=g=l?Math.abs("y"===l?m:f):Kx(f*f+m*m),g>v&&(v=g),g<x&&(x=g);"random"===r&&Pw(k),k.max=v-x,k.min=x,k.v=w=(parseFloat(t.amount)||parseFloat(t.each)*(b>w?w-1:l?"y"===l?w/b:b:Math.max(b,w/b))||0)*("edges"===r?-1:1),k.b=w<0?i-w:i,k.u=Sw(t.amount||t.each)||0,n=n&&w<0?rk(n):n}return w=(k[e]-k.min)/k.max||0,Vb(k.b+(n?n(w):w)*k.v)+k.u}},Aw=function(e){var t=Math.pow(10,((e+"").split(".")[1]||"").length);return function(n){var r=Vb(Math.round(parseFloat(n)/e)*e*t);return(r-r%1)/t+(tb(n)?0:Sw(n))}},Rw=function(e,t){var n,r,i=lb(e);return!i&&rb(e)&&(n=i=e.radius||Yx,e.values?(e=Cw(e.values),(r=!tb(e[0]))&&(n*=n)):e=Aw(e.increment)),kw(t,i?eb(e)?function(t){return r=e(t),Math.abs(r-t)<=n?r:t}:function(t){for(var i,a,o=parseFloat(r?t.x:t),s=parseFloat(r?t.y:0),l=Yx,u=0,c=e.length;c--;)(i=r?(i=e[c].x-o)*i+(a=e[c].y-s)*a:Math.abs(e[c]-o))<l&&(l=i,u=c);return u=!n||l<=n?e[u]:t,r||u===t||tb(t)?u:u+Sw(t)}:Aw(e))},zw=function(e,t,n,r){return kw(lb(e)?!t:!0===n?!!(n=0):!r,function(){return lb(e)?e[~~(Math.random()*e.length)]:(n=n||1e-5)&&(r=n<1?Math.pow(10,(n+"").length-2):1)&&Math.floor(Math.round((e-n/2+Math.random()*(t-e+.99*n))/n)*n*r)/r})},Dw=function(e,t,n){return kw(n,function(n){return e[~~t(n)]})},$w=function(e){return e.replace(ub,function(e){var t=e.indexOf("[")+1,n=e.substring(t||7,t?e.indexOf("]"):e.length-1).split(cb);return zw(t?n:+n[0],t?0:+n[1],+n[2]||1e-5)})},Lw=function(e,t,n,r,i){var a=t-e,o=r-n;return kw(i,function(t){return n+((t-e)/a*o||0)})},Ow=function(e,t,n){var r,i,a,o=e.labels,s=Yx;for(r in o)(i=o[r]-t)<0==!!n&&i&&s>(i=Math.abs(i))&&(a=r,s=i);return a},Iw=function(e,t,n){var r,i,a,o=e.vars,s=o[t],l=px,u=e._ctx;if(s)return r=o[t+"Params"],i=o.callbackScope||e,n&&Pb.length&&Wb(),u&&(px=u),a=r?s.apply(i,r):s.call(i),px=l,a},Nw=function(e){return nw(e),e.scrollTrigger&&e.scrollTrigger.kill(!!hx),e.progress()<1&&Iw(e,"onInterrupt"),e},Fw=[],Vw=function(e){if(e)if(e=!e.name&&e.default||e,ab()||e.headless){var t=e.name,n=eb(e),r=t&&!n&&e.init?function(){this._props=[]}:e,i={init:Sb,render:Ak,add:mk,kill:zk,modifier:Rk,rawVars:0},a={targetTest:0,get:0,getSetter:Ck,aliases:{},register:0};if(Zw(),e!==r){if(Ab[t])return;Gb(r,Gb(Zb(e,i),a)),Kb(r.prototype,Kb(i,Zb(e,a))),Ab[r.prop=t]=r,e.targetTest&&(Db.push(r),Eb[t]=1),t=("css"===t?"CSS":t.charAt(0).toUpperCase()+t.substr(1))+"Plugin"}_b(t,r),e.register&&e.register(Gk,r,Lk)}else Fw.push(e)},Bw=255,Uw={aqua:[0,Bw,Bw],lime:[0,Bw,0],silver:[192,192,192],black:[0,0,0],maroon:[128,0,0],teal:[0,128,128],blue:[0,0,Bw],navy:[0,0,128],white:[Bw,Bw,Bw],olive:[128,128,0],yellow:[Bw,Bw,0],orange:[Bw,165,0],gray:[128,128,128],purple:[128,0,128],green:[0,128,0],red:[Bw,0,0],pink:[Bw,192,203],cyan:[0,Bw,Bw],transparent:[Bw,Bw,Bw,0]},Ww=function(e,t,n){return(6*(e+=e<0?1:e>1?-1:0)<1?t+(n-t)*e*6:e<.5?n:3*e<2?t+(n-t)*(2/3-e)*6:t)*Bw+.5|0},Yw=function(e,t,n){var r,i,a,o,s,l,u,c,d,h,p=e?tb(e)?[e>>16,e>>8&Bw,e&Bw]:0:Uw.black;if(!p){if(","===e.substr(-1)&&(e=e.substr(0,e.length-1)),Uw[e])p=Uw[e];else if("#"===e.charAt(0)){if(e.length<6&&(r=e.charAt(1),i=e.charAt(2),a=e.charAt(3),e="#"+r+r+i+i+a+a+(5===e.length?e.charAt(4)+e.charAt(4):"")),9===e.length)return[(p=parseInt(e.substr(1,6),16))>>16,p>>8&Bw,p&Bw,parseInt(e.substr(7),16)/255];p=[(e=parseInt(e.substr(1),16))>>16,e>>8&Bw,e&Bw]}else if("hsl"===e.substr(0,3))if(p=h=e.match(db),t){if(~e.indexOf("="))return p=e.match(hb),n&&p.length<4&&(p[3]=1),p}else o=+p[0]%360/360,s=+p[1]/100,r=2*(l=+p[2]/100)-(i=l<=.5?l*(s+1):l+s-l*s),p.length>3&&(p[3]*=1),p[0]=Ww(o+1/3,r,i),p[1]=Ww(o,r,i),p[2]=Ww(o-1/3,r,i);else p=e.match(db)||Uw.transparent;p=p.map(Number)}return t&&!h&&(r=p[0]/Bw,i=p[1]/Bw,a=p[2]/Bw,l=((u=Math.max(r,i,a))+(c=Math.min(r,i,a)))/2,u===c?o=s=0:(d=u-c,s=l>.5?d/(2-u-c):d/(u+c),o=u===r?(i-a)/d+(i<a?6:0):u===i?(a-r)/d+2:(r-i)/d+4,o*=60),p[0]=~~(o+.5),p[1]=~~(100*s+.5),p[2]=~~(100*l+.5)),n&&p.length<4&&(p[3]=1),p},Hw=function(e){var t=[],n=[],r=-1;return e.split(Xw).forEach(function(e){var i=e.match(pb)||[];t.push.apply(t,i),n.push(r+=i.length+1)}),t.c=n,t},qw=function(e,t,n){var r,i,a,o,s="",l=(e+s).match(Xw),u=t?"hsla(":"rgba(",c=0;if(!l)return e;if(l=l.map(function(e){return(e=Yw(e,t,1))&&u+(t?e[0]+","+e[1]+"%,"+e[2]+"%,"+e[3]:e.join(","))+")"}),n&&(a=Hw(e),(r=n.c).join(s)!==a.c.join(s)))for(o=(i=e.replace(Xw,"1").split(pb)).length-1;c<o;c++)s+=i[c]+(~r.indexOf(c)?l.shift()||u+"0,0,0,0)":(a.length?a:l.length?l:n).shift());if(!i)for(o=(i=e.split(Xw)).length-1;c<o;c++)s+=i[c]+l[c];return s+i[o]},Xw=function(){var e,t="(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b";for(e in Uw)t+="|"+e+"\\b";return new RegExp(t+")","gi")}(),Gw=/hsl[a]?\(/,Kw=function(e){var t,n=e.join(" ");if(Xw.lastIndex=0,Xw.test(n))return t=Gw.test(n),e[1]=qw(e[1],t),e[0]=qw(e[0],t,Hw(e[1])),!0},Qw=(Ex=Date.now,Px=500,Mx=33,Ax=Ex(),Rx=Ax,Dx=zx=1e3/240,Lx=function e(t){var n,r,i,a,o=Ex()-Rx,s=!0===t;if((o>Px||o<0)&&(Ax+=o-Mx),((n=(i=(Rx+=o)-Ax)-Dx)>0||s)&&(a=++jx.frame,Tx=i-1e3*jx.time,jx.time=i/=1e3,Dx+=n+(n>=zx?4:zx-n),r=1),s||(kx=_x(e)),r)for(Cx=0;Cx<$x.length;Cx++)$x[Cx](i,Tx,a,t)},jx={time:0,frame:0,tick:function(){Lx(!0)},deltaRatio:function(e){return Tx/(1e3/(e||60))},wake:function(){vx&&(!gx&&ab()&&(mx=gx=window,yx=mx.document||{},vb.gsap=Gk,(mx.gsapVersions||(mx.gsapVersions=[])).push(Gk.version),bb(xb||mx.GreenSockGlobals||!mx.gsap&&mx||{}),Fw.forEach(Vw)),Sx="undefined"!=typeof requestAnimationFrame&&requestAnimationFrame,kx&&jx.sleep(),_x=Sx||function(e){return setTimeout(e,Dx-1e3*jx.time+1|0)},wx=1,Lx(2))},sleep:function(){(Sx?cancelAnimationFrame:clearTimeout)(kx),wx=0,_x=Sb},lagSmoothing:function(e,t){Px=e||1/0,Mx=Math.min(t||33,Px)},fps:function(e){zx=1e3/(e||240),Dx=1e3*jx.time+zx},add:function(e,t,n){var r=t?function(t,n,i,a){e(t,n,i,a),jx.remove(r)}:e;return jx.remove(e),$x[n?"unshift":"push"](r),Zw(),r},remove:function(e,t){~(t=$x.indexOf(e))&&$x.splice(t,1)&&Cx>=t&&Cx--},_listeners:$x=[]}),Zw=function(){return!wx&&Qw.wake()},Jw={},ek=/^[\d.\-M][\d.\-,\s]/,tk=/["']/g,nk=function(e){for(var t,n,r,i={},a=e.substr(1,e.length-3).split(":"),o=a[0],s=1,l=a.length;s<l;s++)n=a[s],t=s!==l-1?n.lastIndexOf(","):n.length,r=n.substr(0,t),i[o]=isNaN(r)?r.replace(tk,"").trim():+r,o=n.substr(t+1).trim();return i},rk=function(e){return function(t){return 1-e(1-t)}},ik=function(e,t){return e&&(eb(e)?e:Jw[e]||function(e){var t,n,r,i,a=(e+"").split("("),o=Jw[a[0]];return o&&a.length>1&&o.config?o.config.apply(null,~e.indexOf("{")?[nk(a[1])]:(t=e,n=t.indexOf("(")+1,r=t.indexOf(")"),i=t.indexOf("(",n),t.substring(n,~i&&i<r?t.indexOf(")",r+1):r)).split(",").map(qb)):Jw._CE&&ek.test(e)?Jw._CE("",e):o}(e))||t},ak=function(e,t,n,r){void 0===n&&(n=function(e){return 1-t(1-e)}),void 0===r&&(r=function(e){return e<.5?t(2*e)/2:1-t(2*(1-e))/2});var i,a={easeIn:t,easeOut:n,easeInOut:r};return Nb(e,function(e){for(var t in Jw[e]=vb[e]=a,Jw[i=e.toLowerCase()]=n,a)Jw[i+("easeIn"===t?".in":"easeOut"===t?".out":".inOut")]=Jw[e+"."+t]=a[t]}),a},ok=function(e){return function(t){return t<.5?(1-e(1-2*t))/2:.5+e(2*(t-.5))/2}},sk=function e(t,n,r){var i=n>=1?n:1,a=(r||(t?.3:.45))/(n<1?n:1),o=a/qx*(Math.asin(1/i)||0),s=function(e){return 1===e?1:i*Math.pow(2,-10*e)*Zx((e-o)*a)+1},l="out"===t?s:"in"===t?function(e){return 1-s(1-e)}:ok(s);return a=qx/a,l.config=function(n,r){return e(t,n,r)},l},lk=function e(t,n){void 0===n&&(n=1.70158);var r=function(e){return e?--e*e*((n+1)*e+n)+1:0},i="out"===t?r:"in"===t?function(e){return 1-r(1-e)}:ok(r);return i.config=function(n){return e(t,n)},i};Nb("Linear,Quad,Cubic,Quart,Quint,Strong",function(e,t){var n=t<5?t+1:t;ak(e+",Power"+(n-1),t?function(e){return Math.pow(e,n)}:function(e){return e},function(e){return 1-Math.pow(1-e,n)},function(e){return e<.5?Math.pow(2*e,n)/2:1-Math.pow(2*(1-e),n)/2})}),Jw.Linear.easeNone=Jw.none=Jw.Linear.easeIn,ak("Elastic",sk("in"),sk("out"),sk()),Ox=7.5625,Fx=2*(Nx=1/(Ix=2.75)),Vx=2.5*Nx,ak("Bounce",function(e){return 1-Bx(1-e)},Bx=function(e){return e<Nx?Ox*e*e:e<Fx?Ox*Math.pow(e-1.5/Ix,2)+.75:e<Vx?Ox*(e-=2.25/Ix)*e+.9375:Ox*Math.pow(e-2.625/Ix,2)+.984375}),ak("Expo",function(e){return Math.pow(2,10*(e-1))*e+e*e*e*e*e*e*(1-e)}),ak("Circ",function(e){return-(Kx(1-e*e)-1)}),ak("Sine",function(e){return 1===e?1:1-Qx(e*Xx)}),ak("Back",lk("in"),lk("out"),lk()),Jw.SteppedEase=Jw.steps=vb.SteppedEase={config:function(e,t){void 0===e&&(e=1);var n=1/e,r=e+(t?0:1),i=t?1:0;return function(e){return((r*_w(0,.99999999,e)|0)+i)*n}}},Wx.ease=Jw["quad.out"],Nb("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt",function(e){return $b+=e+","+e+"Params,"});var uk=function(e,t){this.id=Gx++,e._gsap=this,this.target=e,this.harness=t,this.get=t?t.get:Ib,this.set=t?t.getSetter:Ck},ck=function(){function e(e){this.vars=e,this._delay=+e.delay||0,(this._repeat=e.repeat===1/0?-2:e.repeat||0)&&(this._rDelay=e.repeatDelay||0,this._yoyo=!!e.yoyo||!!e.yoyoEase),this._ts=1,yw(this,+e.duration,1,1),this.data=e.data,px&&(this._ctx=px,px.data.push(this)),wx||Qw.wake()}var t=e.prototype;return t.delay=function(e){return e||0===e?(this.parent&&this.parent.smoothChildTiming&&this.startTime(this._start+e-this._delay),this._delay=e,this):this._delay},t.duration=function(e){return arguments.length?this.totalDuration(this._repeat>0?e+(e+this._rDelay)*this._repeat:e):this.totalDuration()&&this._dur},t.totalDuration=function(e){return arguments.length?(this._dirty=0,yw(this,this._repeat<0?e:(e-this._repeat*this._rDelay)/(this._repeat+1))):this._tDur},t.totalTime=function(e,t){if(Zw(),!arguments.length)return this._tTime;var n=this._dp;if(n&&n.smoothChildTiming&&this._ts){for(cw(this,e),!n._dp||n.parent||dw(n,this);n&&n.parent;)n.parent._time!==n._start+(n._ts>=0?n._tTime/n._ts:(n.totalDuration()-n._tTime)/-n._ts)&&n.totalTime(n._tTime,!0),n=n.parent;!this.parent&&this._dp.autoRemoveChildren&&(this._ts>0&&e<this._tDur||this._ts<0&&e>0||!this._tDur&&!e)&&hw(this._dp,this,this._start-this._delay)}return(this._tTime!==e||!this._dur&&!t||this._initted&&Math.abs(this._zTime)===Hx||!this._initted&&this._dur&&e||!e&&!this._initted&&(this.add||this._ptLookup))&&(this._ts||(this._pTime=e),Hb(this,e,t)),this},t.time=function(e,t){return arguments.length?this.totalTime(Math.min(this.totalDuration(),e+ow(this))%(this._dur+this._rDelay)||(e?this._dur:0),t):this._time},t.totalProgress=function(e,t){return arguments.length?this.totalTime(this.totalDuration()*e,t):this.totalDuration()?Math.min(1,this._tTime/this._tDur):this.rawTime()>=0&&this._initted?1:0},t.progress=function(e,t){return arguments.length?this.totalTime(this.duration()*(!this._yoyo||1&this.iteration()?e:1-e)+ow(this),t):this.duration()?Math.min(1,this._time/this._dur):this.rawTime()>0?1:0},t.iteration=function(e,t){var n=this.duration()+this._rDelay;return arguments.length?this.totalTime(this._time+(e-1)*n,t):this._repeat?sw(this._tTime,n)+1:1},t.timeScale=function(e,t){if(!arguments.length)return-1e-8===this._rts?0:this._rts;if(this._rts===e)return this;var n=this.parent&&this._ts?lw(this.parent._time,this):this._tTime;return this._rts=+e||0,this._ts=this._ps||-1e-8===e?0:this._rts,this.totalTime(_w(-Math.abs(this._delay),this.totalDuration(),n),!1!==t),uw(this),function(e){for(var t=e.parent;t&&t.parent;)t._dirty=1,t.totalDuration(),t=t.parent;return e}(this)},t.paused=function(e){return arguments.length?(this._ps!==e&&(this._ps=e,e?(this._pTime=this._tTime||Math.max(-this._delay,this.rawTime()),this._ts=this._act=0):(Zw(),this._ts=this._rts,this.totalTime(this.parent&&!this.parent.smoothChildTiming?this.rawTime():this._tTime||this._pTime,1===this.progress()&&Math.abs(this._zTime)!==Hx&&(this._tTime-=Hx)))),this):this._ps},t.startTime=function(e){if(arguments.length){this._start=Vb(e);var t=this.parent||this._dp;return t&&(t._sort||!this.parent)&&hw(t,this,this._start-this._delay),this}return this._start},t.endTime=function(e){return this._start+(ib(e)?this.totalDuration():this.duration())/Math.abs(this._ts||1)},t.rawTime=function(e){var t=this.parent||this._dp;return t?e&&(!this._ts||this._repeat&&this._time&&this.totalProgress()<1)?this._tTime%(this._dur+this._rDelay):this._ts?lw(t.rawTime(e),this):this._tTime:this._tTime},t.revert=function(e){void 0===e&&(e=Cb);var t=hx;return hx=e,Yb(this)&&(this.timeline&&this.timeline.revert(e),this.totalTime(-.01,e.suppressEvents)),"nested"!==this.data&&!1!==e.kill&&this.kill(),hx=t,this},t.globalTime=function(e){for(var t=this,n=arguments.length?e:t.rawTime();t;)n=t._start+n/(Math.abs(t._ts)||1),t=t._dp;return!this.parent&&this._sat?this._sat.globalTime(e):n},t.repeat=function(e){return arguments.length?(this._repeat=e===1/0?-2:e,vw(this)):-2===this._repeat?1/0:this._repeat},t.repeatDelay=function(e){if(arguments.length){var t=this._time;return this._rDelay=e,vw(this),t?this.time(t):this}return this._rDelay},t.yoyo=function(e){return arguments.length?(this._yoyo=e,this):this._yoyo},t.seek=function(e,t){return this.totalTime(bw(this,e),ib(t))},t.restart=function(e,t){return this.play().totalTime(e?-this._delay:0,ib(t)),this._dur||(this._zTime=-1e-8),this},t.play=function(e,t){return null!=e&&this.seek(e,t),this.reversed(!1).paused(!1)},t.reverse=function(e,t){return null!=e&&this.seek(e||this.totalDuration(),t),this.reversed(!0).paused(!1)},t.pause=function(e,t){return null!=e&&this.seek(e,t),this.paused(!0)},t.resume=function(){return this.paused(!1)},t.reversed=function(e){return arguments.length?(!!e!==this.reversed()&&this.timeScale(-this._rts||(e?-1e-8:0)),this):this._rts<0},t.invalidate=function(){return this._initted=this._act=0,this._zTime=-1e-8,this},t.isActive=function(){var e,t=this.parent||this._dp,n=this._start;return!(t&&!(this._ts&&this._initted&&t.isActive()&&(e=t.rawTime(!0))>=n&&e<this.endTime(!0)-Hx))},t.eventCallback=function(e,t,n){var r=this.vars;return arguments.length>1?(t?(r[e]=t,n&&(r[e+"Params"]=n),"onUpdate"===e&&(this._onUpdate=t)):delete r[e],this):r[e]},t.then=function(e){var t=this,n=t._prom;return new Promise(function(r){var i=eb(e)?e:Xb,a=function(){var e=t.then;t.then=null,n&&n(),eb(i)&&(i=i(t))&&(i.then||i===t)&&(t.then=e),r(i),t.then=e};t._initted&&1===t.totalProgress()&&t._ts>=0||!t._tTime&&t._ts<0?a():t._prom=a})},t.kill=function(){Nw(this)},e}();Gb(ck.prototype,{_time:0,_start:0,_end:0,_tTime:0,_tDur:0,_dirty:0,_repeat:0,_yoyo:!1,parent:null,_initted:!1,_rDelay:0,_ts:1,_dp:0,ratio:0,_zTime:-1e-8,_prom:0,_ps:!1,_rts:1});var dk=function(e){function t(t,n){var r;return void 0===t&&(t={}),(r=e.call(this,t)||this).labels={},r.smoothChildTiming=!!t.smoothChildTiming,r.autoRemoveChildren=!!t.autoRemoveChildren,r._sort=ib(t.sortChildren),fx&&hw(t.parent||fx,ux(r),n),t.reversed&&r.reverse(),t.paused&&r.paused(!0),t.scrollTrigger&&pw(ux(r),t.scrollTrigger),r}cx(t,e);var n=t.prototype;return n.to=function(e,t,n){return ww(0,arguments,this),this},n.from=function(e,t,n){return ww(1,arguments,this),this},n.fromTo=function(e,t,n,r){return ww(2,arguments,this),this},n.set=function(e,t,n){return t.duration=0,t.parent=this,Jb(t).repeatDelay||(t.repeat=0),t.immediateRender=!!t.immediateRender,new kk(e,t,bw(this,n),1),this},n.call=function(e,t,n){return hw(this,kk.delayedCall(0,e,t),n)},n.staggerTo=function(e,t,n,r,i,a,o){return n.duration=t,n.stagger=n.stagger||r,n.onComplete=a,n.onCompleteParams=o,n.parent=this,new kk(e,n,bw(this,i)),this},n.staggerFrom=function(e,t,n,r,i,a,o){return n.runBackwards=1,Jb(n).immediateRender=ib(n.immediateRender),this.staggerTo(e,t,n,r,i,a,o)},n.staggerFromTo=function(e,t,n,r,i,a,o,s){return r.startAt=n,Jb(r).immediateRender=ib(r.immediateRender),this.staggerTo(e,t,r,i,a,o,s)},n.render=function(e,t,n){var r,i,a,o,s,l,u,c,d,h,p,f,m=this._time,g=this._dirty?this.totalDuration():this._tDur,y=this._dur,v=e<=0?0:Vb(e),x=this._zTime<0!=e<0&&(this._initted||!y);if(this!==fx&&v>g&&e>=0&&(v=g),v!==this._tTime||n||x){if(m!==this._time&&y&&(v+=this._time-m,e+=this._time-m),r=v,d=this._start,l=!(c=this._ts),x&&(y||(m=this._zTime),(e||!t)&&(this._zTime=e)),this._repeat){if(p=this._yoyo,s=y+this._rDelay,this._repeat<-1&&e<0)return this.totalTime(100*s+e,t,n);if(r=Vb(v%s),v===g?(o=this._repeat,r=y):((o=~~(h=Vb(v/s)))&&o===h&&(r=y,o--),r>y&&(r=y)),h=sw(this._tTime,s),!m&&this._tTime&&h!==o&&this._tTime-h*s-this._dur<=0&&(h=o),p&&1&o&&(r=y-r,f=1),o!==h&&!this._lock){var b=p&&1&h,w=b===(p&&1&o);if(o<h&&(b=!b),m=b?0:v%y?y:v,this._lock=1,this.render(m||(f?0:Vb(o*s)),t,!y)._lock=0,this._tTime=v,!t&&this.parent&&Iw(this,"onRepeat"),this.vars.repeatRefresh&&!f&&(this.invalidate()._lock=1,h=o),m&&m!==this._time||l!==!this._ts||this.vars.onRepeat&&!this.parent&&!this._act)return this;if(y=this._dur,g=this._tDur,w&&(this._lock=2,m=b?y:-1e-4,this.render(m,!0),this.vars.repeatRefresh&&!f&&this.invalidate()),this._lock=0,!this._ts&&!l)return this}}if(this._hasPause&&!this._forcing&&this._lock<2&&(u=function(e,t,n){var r;if(n>t)for(r=e._first;r&&r._start<=n;){if("isPause"===r.data&&r._start>t)return r;r=r._next}else for(r=e._last;r&&r._start>=n;){if("isPause"===r.data&&r._start<t)return r;r=r._prev}}(this,Vb(m),Vb(r)),u&&(v-=r-(r=u._start))),this._tTime=v,this._time=r,this._act=!!c,this._initted||(this._onUpdate=this.vars.onUpdate,this._initted=1,this._zTime=e,m=0),!m&&v&&y&&!t&&!h&&(Iw(this,"onStart"),this._tTime!==v))return this;if(r>=m&&e>=0)for(i=this._first;i;){if(a=i._next,(i._act||r>=i._start)&&i._ts&&u!==i){if(i.parent!==this)return this.render(e,t,n);if(i.render(i._ts>0?(r-i._start)*i._ts:(i._dirty?i.totalDuration():i._tDur)+(r-i._start)*i._ts,t,n),r!==this._time||!this._ts&&!l){u=0,a&&(v+=this._zTime=-1e-8);break}}i=a}else{i=this._last;for(var k=e<0?e:r;i;){if(a=i._prev,(i._act||k<=i._end)&&i._ts&&u!==i){if(i.parent!==this)return this.render(e,t,n);if(i.render(i._ts>0?(k-i._start)*i._ts:(i._dirty?i.totalDuration():i._tDur)+(k-i._start)*i._ts,t,n||hx&&Yb(i)),r!==this._time||!this._ts&&!l){u=0,a&&(v+=this._zTime=k?-1e-8:Hx);break}}i=a}}if(u&&!t&&(this.pause(),u.render(r>=m?0:-1e-8)._zTime=r>=m?1:-1,this._ts))return this._start=d,uw(this),this.render(e,t,n);this._onUpdate&&!t&&Iw(this,"onUpdate",!0),(v===g&&this._tTime>=this.totalDuration()||!v&&m)&&(d!==this._start&&Math.abs(c)===Math.abs(this._ts)||this._lock||((e||!y)&&(v===g&&this._ts>0||!v&&this._ts<0)&&nw(this,1),t||e<0&&!m||!v&&!m&&g||(Iw(this,v===g&&e>=0?"onComplete":"onReverseComplete",!0),this._prom&&!(v<g&&this.timeScale()>0)&&this._prom())))}return this},n.add=function(e,t){var n=this;if(tb(t)||(t=bw(this,t,e)),!(e instanceof ck)){if(lb(e))return e.forEach(function(e){return n.add(e,t)}),this;if(Jx(e))return this.addLabel(e,t);if(!eb(e))return this;e=kk.delayedCall(0,e)}return this!==e?hw(this,e,t):this},n.getChildren=function(e,t,n,r){void 0===e&&(e=!0),void 0===t&&(t=!0),void 0===n&&(n=!0),void 0===r&&(r=-1e8);for(var i=[],a=this._first;a;)a._start>=r&&(a instanceof kk?t&&i.push(a):(n&&i.push(a),e&&i.push.apply(i,a.getChildren(!0,t,n)))),a=a._next;return i},n.getById=function(e){for(var t=this.getChildren(1,1,1),n=t.length;n--;)if(t[n].vars.id===e)return t[n]},n.remove=function(e){return Jx(e)?this.removeLabel(e):eb(e)?this.killTweensOf(e):(e.parent===this&&tw(this,e),e===this._recent&&(this._recent=this._last),rw(this))},n.totalTime=function(t,n){return arguments.length?(this._forcing=1,!this._dp&&this._ts&&(this._start=Vb(Qw.time-(this._ts>0?t/this._ts:(this.totalDuration()-t)/-this._ts))),e.prototype.totalTime.call(this,t,n),this._forcing=0,this):this._tTime},n.addLabel=function(e,t){return this.labels[e]=bw(this,t),this},n.removeLabel=function(e){return delete this.labels[e],this},n.addPause=function(e,t,n){var r=kk.delayedCall(0,t||Sb,n);return r.data="isPause",this._hasPause=1,hw(this,r,bw(this,e))},n.removePause=function(e){var t=this._first;for(e=bw(this,e);t;)t._start===e&&"isPause"===t.data&&nw(t),t=t._next},n.killTweensOf=function(e,t,n){for(var r=this.getTweensOf(e,n),i=r.length;i--;)hk!==r[i]&&r[i].kill(e,t);return this},n.getTweensOf=function(e,t){for(var n,r=[],i=Cw(e),a=this._first,o=tb(t);a;)a instanceof kk?Ub(a._targets,i)&&(o?(!hk||a._initted&&a._ts)&&a.globalTime(0)<=t&&a.globalTime(a.totalDuration())>t:!t||a.isActive())&&r.push(a):(n=a.getTweensOf(i,t)).length&&r.push.apply(r,n),a=a._next;return r},n.tweenTo=function(e,t){t=t||{};var n,r=this,i=bw(r,e),a=t,o=a.startAt,s=a.onStart,l=a.onStartParams,u=a.immediateRender,c=kk.to(r,Gb({ease:t.ease||"none",lazy:!1,immediateRender:!1,time:i,overwrite:"auto",duration:t.duration||Math.abs((i-(o&&"time"in o?o.time:r._time))/r.timeScale())||Hx,onStart:function(){if(r.pause(),!n){var e=t.duration||Math.abs((i-(o&&"time"in o?o.time:r._time))/r.timeScale());c._dur!==e&&yw(c,e,0,1).render(c._time,!0,!0),n=1}s&&s.apply(c,l||[])}},t));return u?c.render(0):c},n.tweenFromTo=function(e,t,n){return this.tweenTo(t,Gb({startAt:{time:bw(this,e)}},n))},n.recent=function(){return this._recent},n.nextLabel=function(e){return void 0===e&&(e=this._time),Ow(this,bw(this,e))},n.previousLabel=function(e){return void 0===e&&(e=this._time),Ow(this,bw(this,e),1)},n.currentLabel=function(e){return arguments.length?this.seek(e,!0):this.previousLabel(this._time+Hx)},n.shiftChildren=function(e,t,n){void 0===n&&(n=0);var r,i=this._first,a=this.labels;for(e=Vb(e);i;)i._start>=n&&(i._start+=e,i._end+=e),i=i._next;if(t)for(r in a)a[r]>=n&&(a[r]+=e);return rw(this)},n.invalidate=function(t){var n=this._first;for(this._lock=0;n;)n.invalidate(t),n=n._next;return e.prototype.invalidate.call(this,t)},n.clear=function(e){void 0===e&&(e=!0);for(var t,n=this._first;n;)t=n._next,this.remove(n),n=t;return this._dp&&(this._time=this._tTime=this._pTime=0),e&&(this.labels={}),rw(this)},n.totalDuration=function(e){var t,n,r,i=0,a=this,o=a._last,s=Yx;if(arguments.length)return a.timeScale((a._repeat<0?a.duration():a.totalDuration())/(a.reversed()?-e:e));if(a._dirty){for(r=a.parent;o;)t=o._prev,o._dirty&&o.totalDuration(),(n=o._start)>s&&a._sort&&o._ts&&!a._lock?(a._lock=1,hw(a,o,n-o._delay,1)._lock=0):s=n,n<0&&o._ts&&(i-=n,(!r&&!a._dp||r&&r.smoothChildTiming)&&(a._start+=Vb(n/a._ts),a._time-=n,a._tTime-=n),a.shiftChildren(-n,!1,-1/0),s=0),o._end>i&&o._ts&&(i=o._end),o=t;yw(a,a===fx&&a._time>i?a._time:i,1,1),a._dirty=0}return a._tDur},t.updateRoot=function(e){if(fx._ts&&(Hb(fx,lw(e,fx)),xx=Qw.frame),Qw.frame>=zb){zb+=Ux.autoSleep||120;var t=fx._first;if((!t||!t._ts)&&Ux.autoSleep&&Qw._listeners.length<2){for(;t&&!t._ts;)t=t._next;t||Qw.sleep()}}},t}(ck);Gb(dk.prototype,{_lock:0,_hasPause:0,_forcing:0});var hk,pk,fk=function(e,t,n,r,i,a,o){var s,l,u,c,d,h,p,f,m=new Lk(this._pt,e,t,0,1,Mk,null,i),g=0,y=0;for(m.b=n,m.e=r,n+="",(p=~(r+="").indexOf("random("))&&(r=$w(r)),a&&(a(f=[n,r],e,t),n=f[0],r=f[1]),l=n.match(fb)||[];s=fb.exec(r);)c=s[0],d=r.substring(g,s.index),u?u=(u+1)%5:"rgba("===d.substr(-5)&&(u=1),c!==l[y++]&&(h=parseFloat(l[y-1])||0,m._pt={_next:m._pt,p:d||1===y?d:",",s:h,c:"="===c.charAt(1)?Bb(h,c)-h:parseFloat(c)-h,m:u&&u<4?Math.round:0},g=fb.lastIndex);return m.c=g<r.length?r.substring(g,r.length):"",m.fp=o,(mb.test(r)||p)&&(m.e=0),this._pt=m,m},mk=function(e,t,n,r,i,a,o,s,l,u){eb(r)&&(r=r(i||0,e,a));var c,d=e[t],h="get"!==n?n:eb(d)?l?e[t.indexOf("set")||!eb(e["get"+t.substr(3)])?t:"get"+t.substr(3)](l):e[t]():d,p=eb(d)?l?jk:Sk:_k;if(Jx(r)&&(~r.indexOf("random(")&&(r=$w(r)),"="===r.charAt(1)&&((c=Bb(h,r)+(Sw(h)||0))||0===c)&&(r=c)),!u||h!==r||pk)return isNaN(h*r)||""===r?(!d&&!(t in e)&&wb(t,r),fk.call(this,e,t,h,r,p,s||Ux.stringFilter,l)):(c=new Lk(this._pt,e,t,+h||0,r-(h||0),"boolean"==typeof d?Pk:Ek,0,p),l&&(c.fp=l),o&&c.modifier(o,this,e),this._pt=c)},gk=function(e,t,n,r,i,a){var o,s,l,u;if(Ab[e]&&!1!==(o=new Ab[e]).init(i,o.rawVars?t[e]:function(e,t,n,r,i){if(eb(e)&&(e=xk(e,i,t,n,r)),!rb(e)||e.style&&e.nodeType||lb(e)||sb(e))return Jx(e)?xk(e,i,t,n,r):e;var a,o={};for(a in e)o[a]=xk(e[a],i,t,n,r);return o}(t[e],r,i,a,n),n,r,a)&&(n._pt=s=new Lk(n._pt,i,e,0,1,o.render,o,0,o.priority),n!==bx))for(l=n._ptLookup[n._targets.indexOf(i)],u=o._props.length;u--;)l[o._props[u]]=s;return o},yk=function e(t,n,r){var i,a,o,s,l,u,c,d,h,p,f,m,g,y=t.vars,v=y.ease,x=y.startAt,b=y.immediateRender,w=y.lazy,k=y.onUpdate,_=y.runBackwards,S=y.yoyoEase,j=y.keyframes,T=y.autoRevert,C=t._dur,E=t._startAt,P=t._targets,M=t.parent,A=M&&"nested"===M.data?M.vars.targets:P,R="auto"===t._overwrite&&!dx,z=t.timeline,D=y.easeReverse||S;if(z&&(!j||!v)&&(v="none"),t._ease=ik(v,Wx.ease),t._rEase=D&&(ik(D)||t._ease),t._from=!z&&!!y.runBackwards,t._from&&(t.ratio=1),!z||j&&!y.stagger){if(m=(d=P[0]?Ob(P[0]).harness:0)&&y[d.prop],i=Zb(y,Eb),E&&(E._zTime<0&&E.progress(1),n<0&&_&&b&&!T?E.render(-1,!0):E.revert(_&&C?Tb:jb),E._lazy=0),x){if(nw(t._startAt=kk.set(P,Gb({data:"isStart",overwrite:!1,parent:M,immediateRender:!0,lazy:!E&&ib(w),startAt:null,delay:0,onUpdate:k&&function(){return Iw(t,"onUpdate")},stagger:0},x))),t._startAt._dp=0,t._startAt._sat=t,n<0&&(hx||!b&&!T)&&t._startAt.revert(Tb),b&&C&&n<=0&&r<=0)return void(n&&(t._zTime=n))}else if(_&&C&&!E)if(n&&(b=!1),o=Gb({overwrite:!1,data:"isFromStart",lazy:b&&!E&&ib(w),immediateRender:b,stagger:0,parent:M},i),m&&(o[d.prop]=m),nw(t._startAt=kk.set(P,o)),t._startAt._dp=0,t._startAt._sat=t,n<0&&(hx?t._startAt.revert(Tb):t._startAt.render(-1,!0)),t._zTime=n,b){if(!n)return}else e(t._startAt,Hx,Hx);for(t._pt=t._ptCache=0,w=C&&ib(w)||w&&!C,a=0;a<P.length;a++){if(c=(l=P[a])._gsap||Lb(P)[a]._gsap,t._ptLookup[a]=p={},Mb[c.id]&&Pb.length&&Wb(),f=A===P?a:A.indexOf(l),d&&!1!==(h=new d).init(l,m||i,t,f,A)&&(t._pt=s=new Lk(t._pt,l,h.name,0,1,h.render,h,0,h.priority),h._props.forEach(function(e){p[e]=s}),h.priority&&(u=1)),!d||m)for(o in i)Ab[o]&&(h=gk(o,i,t,f,l,A))?h.priority&&(u=1):p[o]=s=mk.call(t,l,o,"get",i[o],f,A,0,y.stringFilter);t._op&&t._op[a]&&t.kill(l,t._op[a]),R&&t._pt&&(hk=t,fx.killTweensOf(l,p,t.globalTime(n)),g=!t.parent,hk=0),t._pt&&w&&(Mb[c.id]=1)}u&&$k(t),t._onInit&&t._onInit(t)}t._onUpdate=k,t._initted=(!t._op||t._pt)&&!g,j&&n<=0&&z.render(Yx,!0,!0)},vk=function(e,t,n,r){var i,a,o=t.ease||r||"power1.inOut";if(lb(t))a=n[e]||(n[e]=[]),t.forEach(function(e,n){return a.push({t:n/(t.length-1)*100,v:e,e:o})});else for(i in t)a=n[i]||(n[i]=[]),"ease"===i||a.push({t:parseFloat(e),v:t[i],e:o})},xk=function(e,t,n,r,i){return eb(e)?e.call(t,n,r,i):Jx(e)&&~e.indexOf("random(")?$w(e):e},bk=$b+"repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,easeReverse,autoRevert",wk={};Nb(bk+",id,stagger,delay,duration,paused,scrollTrigger",function(e){return wk[e]=1});var kk=function(e){function t(t,n,r,i){var a;"number"==typeof n&&(r.duration=n,n=r,r=null);var o,s,l,u,c,d,h,p,f=(a=e.call(this,i?n:Jb(n))||this).vars,m=f.duration,g=f.delay,y=f.immediateRender,v=f.stagger,x=f.overwrite,b=f.keyframes,w=f.defaults,k=f.scrollTrigger,_=n.parent||fx,S=(lb(t)||sb(t)?tb(t[0]):"length"in n)?[t]:Cw(t);if(a._targets=S.length?Lb(S):kb("GSAP target "+t+" not found. https://gsap.com",!Ux.nullTargetWarn)||[],a._ptLookup=[],a._overwrite=x,b||v||ob(m)||ob(g)){var j=(n=a.vars).easeReverse||n.yoyoEase;if((o=a.timeline=new dk({data:"nested",defaults:w||{},targets:_&&"nested"===_.data?_.vars.targets:S})).kill(),o.parent=o._dp=ux(a),o._start=0,v||ob(m)||ob(g)){if(u=S.length,h=v&&Mw(v),rb(v))for(c in v)~bk.indexOf(c)&&(p||(p={}),p[c]=v[c]);for(s=0;s<u;s++)(l=Zb(n,wk)).stagger=0,j&&(l.easeReverse=j),p&&Kb(l,p),d=S[s],l.duration=+xk(m,ux(a),s,d,S),l.delay=(+xk(g,ux(a),s,d,S)||0)-a._delay,!v&&1===u&&l.delay&&(a._delay=g=l.delay,a._start+=g,l.delay=0),o.to(d,l,h?h(s,d,S):0),o._ease=Jw.none;o.duration()?m=g=0:a.timeline=0}else if(b){Jb(Gb(o.vars.defaults,{ease:"none"})),o._ease=ik(b.ease||n.ease||"none");var T,C,E,P=0;if(lb(b))b.forEach(function(e){return o.to(S,e,">")}),o.duration();else{for(c in l={},b)"ease"===c||"easeEach"===c||vk(c,b[c],l,b.easeEach);for(c in l)for(T=l[c].sort(function(e,t){return e.t-t.t}),P=0,s=0;s<T.length;s++)(E={ease:(C=T[s]).e,duration:(C.t-(s?T[s-1].t:0))/100*m})[c]=C.v,o.to(S,E,P),P+=E.duration;o.duration()<m&&o.to({},{duration:m-o.duration()})}}m||a.duration(m=o.duration())}else a.timeline=0;return!0!==x||dx||(hk=ux(a),fx.killTweensOf(S),hk=0),hw(_,ux(a),r),n.reversed&&a.reverse(),n.paused&&a.paused(!0),(y||!m&&!b&&a._start===Vb(_._time)&&ib(y)&&aw(ux(a))&&"nested"!==_.data)&&(a._tTime=-1e-8,a.render(Math.max(0,-g)||0)),k&&pw(ux(a),k),a}cx(t,e);var n=t.prototype;return n.render=function(e,t,n){var r,i,a,o,s,l,u,c,d=this._time,h=this._tDur,p=this._dur,f=e<0,m=e>h-Hx&&!f?h:e<Hx?0:e;if(p){if(m!==this._tTime||!e||n||!this._initted&&this._tTime||this._startAt&&this._zTime<0!==f||this._lazy){if(r=m,c=this.timeline,this._repeat){if(o=p+this._rDelay,this._repeat<-1&&f)return this.totalTime(100*o+e,t,n);if(r=Vb(m%o),m===h?(a=this._repeat,r=p):(a=~~(s=Vb(m/o)))&&a===s?(r=p,a--):r>p&&(r=p),(l=this._yoyo&&1&a)&&(r=p-r),s=sw(this._tTime,o),r===d&&!n&&this._initted&&a===s)return this._tTime=m,this;a!==s&&this.vars.repeatRefresh&&!l&&!this._lock&&r!==o&&this._initted&&(this._lock=n=1,this.render(Vb(o*a),!0).invalidate()._lock=0)}if(!this._initted){if(fw(this,f?e:r,n,t,m))return this._tTime=0,this;if(!(d===this._time||n&&this.vars.repeatRefresh&&a!==s))return this;if(p!==this._dur)return this.render(e,t,n)}if(this._rEase){var g=r<d;if(g!==this._inv){var y=g?d:p-d;this._inv=g,this._from&&(this.ratio=1-this.ratio),this._invRatio=this.ratio,this._invTime=d,this._invRecip=y?(g?-1:1)/y:0,this._invScale=g?-this.ratio:1-this.ratio,this._invEase=g?this._rEase:this._ease}this.ratio=u=this._invRatio+this._invScale*this._invEase((r-this._invTime)*this._invRecip)}else this.ratio=u=this._ease(r/p);if(this._from&&(this.ratio=u=1-u),this._tTime=m,this._time=r,!this._act&&this._ts&&(this._act=1,this._lazy=0),!d&&m&&!t&&!s&&(Iw(this,"onStart"),this._tTime!==m))return this;for(i=this._pt;i;)i.r(u,i.d),i=i._next;c&&c.render(e<0?e:c._dur*c._ease(r/this._dur),t,n)||this._startAt&&(this._zTime=e),this._onUpdate&&!t&&(f&&iw(this,e,0,n),Iw(this,"onUpdate")),this._repeat&&a!==s&&this.vars.onRepeat&&!t&&this.parent&&Iw(this,"onRepeat"),m!==this._tDur&&m||this._tTime!==m||(f&&!this._onUpdate&&iw(this,e,0,!0),(e||!p)&&(m===this._tDur&&this._ts>0||!m&&this._ts<0)&&nw(this,1),t||f&&!d||!(m||d||l)||(Iw(this,m===h?"onComplete":"onReverseComplete",!0),this._prom&&!(m<h&&this.timeScale()>0)&&this._prom()))}}else!function(e,t,n,r){var i,a,o,s=e.ratio,l=t<0||!t&&(!e._start&&mw(e)&&(e._initted||!gw(e))||(e._ts<0||e._dp._ts<0)&&!gw(e))?0:1,u=e._rDelay,c=0;if(u&&e._repeat&&(c=_w(0,e._tDur,t),a=sw(c,u),e._yoyo&&1&a&&(l=1-l),a!==sw(e._tTime,u)&&(s=1-l,e.vars.repeatRefresh&&e._initted&&e.invalidate())),l!==s||hx||r||e._zTime===Hx||!t&&e._zTime){if(!e._initted&&fw(e,t,r,n,c))return;for(o=e._zTime,e._zTime=t||(n?Hx:0),n||(n=t&&!o),e.ratio=l,e._from&&(l=1-l),e._time=0,e._tTime=c,i=e._pt;i;)i.r(l,i.d),i=i._next;t<0&&iw(e,t,0,!0),e._onUpdate&&!n&&Iw(e,"onUpdate"),c&&e._repeat&&!n&&e.parent&&Iw(e,"onRepeat"),(t>=e._tDur||t<0)&&e.ratio===l&&(l&&nw(e,1),n||hx||(Iw(e,l?"onComplete":"onReverseComplete",!0),e._prom&&e._prom()))}else e._zTime||(e._zTime=t)}(this,e,t,n);return this},n.targets=function(){return this._targets},n.invalidate=function(t){return(!t||!this.vars.runBackwards)&&(this._startAt=0),this._pt=this._op=this._onUpdate=this._lazy=this.ratio=0,this._ptLookup=[],this.timeline&&this.timeline.invalidate(t),e.prototype.invalidate.call(this,t)},n.resetTo=function(e,t,n,r,i){wx||Qw.wake(),this._ts||this.play();var a=Math.min(this._dur,(this._dp._time-this._start)*this._ts);return this._initted||yk(this,a),function(e,t,n,r,i,a,o,s){var l,u,c,d,h=(e._pt&&e._ptCache||(e._ptCache={}))[t];if(!h)for(h=e._ptCache[t]=[],c=e._ptLookup,d=e._targets.length;d--;){if((l=c[d][t])&&l.d&&l.d._pt)for(l=l.d._pt;l&&l.p!==t&&l.fp!==t;)l=l._next;if(!l)return pk=1,e.vars[t]="+=0",yk(e,o),pk=0,s?kb(t+" not eligible for reset. Try splitting into individual properties"):1;h.push(l)}for(d=h.length;d--;)(l=(u=h[d])._pt||u).s=!r&&0!==r||i?l.s+(r||0)+a*l.c:r,l.c=n-l.s,u.e&&(u.e=Fb(n)+Sw(u.e)),u.b&&(u.b=l.s+Sw(u.b))}(this,e,t,n,r,this._ease(a/this._dur),a,i)?this.resetTo(e,t,n,r,1):(cw(this,0),this.parent||ew(this._dp,this,"_first","_last",this._dp._sort?"_start":0),this.render(0))},n.kill=function(e,t){if(void 0===t&&(t="all"),!(e||t&&"all"!==t))return this._lazy=this._pt=0,this.parent?Nw(this):this.scrollTrigger&&this.scrollTrigger.kill(!!hx),this;if(this.timeline){var n=this.timeline.totalDuration();return this.timeline.killTweensOf(e,t,hk&&!0!==hk.vars.overwrite)._first||Nw(this),this.parent&&n!==this.timeline.totalDuration()&&yw(this,this._dur*this.timeline._tDur/n,0,1),this}var r,i,a,o,s,l,u,c=this._targets,d=e?Cw(e):c,h=this._ptLookup,p=this._pt;if((!t||"all"===t)&&function(e,t){for(var n=e.length,r=n===t.length;r&&n--&&e[n]===t[n];);return n<0}(c,d))return"all"===t&&(this._pt=0),Nw(this);for(r=this._op=this._op||[],"all"!==t&&(Jx(t)&&(s={},Nb(t,function(e){return s[e]=1}),t=s),t=function(e,t){var n,r,i,a,o=e[0]?Ob(e[0]).harness:0,s=o&&o.aliases;if(!s)return t;for(r in n=Kb({},t),s)if(r in n)for(i=(a=s[r].split(",")).length;i--;)n[a[i]]=n[r];return n}(c,t)),u=c.length;u--;)if(~d.indexOf(c[u]))for(s in i=h[u],"all"===t?(r[u]=t,o=i,a={}):(a=r[u]=r[u]||{},o=t),o)(l=i&&i[s])&&("kill"in l.d&&!0!==l.d.kill(s)||tw(this,l,"_pt"),delete i[s]),"all"!==a&&(a[s]=1);return this._initted&&!this._pt&&p&&Nw(this),this},t.to=function(e,n){return new t(e,n,arguments[2])},t.from=function(e,t){return ww(1,arguments)},t.delayedCall=function(e,n,r,i){return new t(n,0,{immediateRender:!1,lazy:!1,overwrite:!1,delay:e,onComplete:n,onReverseComplete:n,onCompleteParams:r,onReverseCompleteParams:r,callbackScope:i})},t.fromTo=function(e,t,n){return ww(2,arguments)},t.set=function(e,n){return n.duration=0,n.repeatDelay||(n.repeat=0),new t(e,n)},t.killTweensOf=function(e,t,n){return fx.killTweensOf(e,t,n)},t}(ck);Gb(kk.prototype,{_targets:[],_lazy:0,_startAt:0,_op:0,_onInit:0}),Nb("staggerTo,staggerFrom,staggerFromTo",function(e){kk[e]=function(){var t=new dk,n=jw.call(arguments,0);return n.splice("staggerFromTo"===e?5:4,0,0),t[e].apply(t,n)}});var _k=function(e,t,n){return e[t]=n},Sk=function(e,t,n){return e[t](n)},jk=function(e,t,n,r){return e[t](r.fp,n)},Tk=function(e,t,n){return e.setAttribute(t,n)},Ck=function(e,t){return eb(e[t])?Sk:nb(e[t])&&e.setAttribute?Tk:_k},Ek=function(e,t){return t.set(t.t,t.p,Math.round(1e6*(t.s+t.c*e))/1e6,t)},Pk=function(e,t){return t.set(t.t,t.p,!!(t.s+t.c*e),t)},Mk=function(e,t){var n=t._pt,r="";if(!e&&t.b)r=t.b;else if(1===e&&t.e)r=t.e;else{for(;n;)r=n.p+(n.m?n.m(n.s+n.c*e):Math.round(1e4*(n.s+n.c*e))/1e4)+r,n=n._next;r+=t.c}t.set(t.t,t.p,r,t)},Ak=function(e,t){for(var n=t._pt;n;)n.r(e,n.d),n=n._next},Rk=function(e,t,n,r){for(var i,a=this._pt;a;)i=a._next,a.p===r&&a.modifier(e,t,n),a=i},zk=function(e){for(var t,n,r=this._pt;r;)n=r._next,r.p===e&&!r.op||r.op===e?tw(this,r,"_pt"):r.dep||(t=1),r=n;return!t},Dk=function(e,t,n,r){r.mSet(e,t,r.m.call(r.tween,n,r.mt),r)},$k=function(e){for(var t,n,r,i,a=e._pt;a;){for(t=a._next,n=r;n&&n.pr>a.pr;)n=n._next;(a._prev=n?n._prev:i)?a._prev._next=a:r=a,(a._next=n)?n._prev=a:i=a,a=t}e._pt=r},Lk=function(){function e(e,t,n,r,i,a,o,s,l){this.t=t,this.s=r,this.c=i,this.p=n,this.r=a||Ek,this.d=o||this,this.set=s||_k,this.pr=l||0,this._next=e,e&&(e._prev=this)}return e.prototype.modifier=function(e,t,n){this.mSet=this.mSet||this.set,this.set=Dk,this.m=e,this.mt=n,this.tween=t},e}();Nb($b+"parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger,easeReverse",function(e){return Eb[e]=1}),vb.TweenMax=vb.TweenLite=kk,vb.TimelineLite=vb.TimelineMax=dk,fx=new dk({sortChildren:!1,defaults:Wx,autoRemoveChildren:!0,id:"root",smoothChildTiming:!0}),Ux.stringFilter=Kw;var Ok=[],Ik={},Nk=[],Fk=0,Vk=0,Bk=function(e){return(Ik[e]||Nk).map(function(e){return e()})},Uk=function(){var e=Date.now(),t=[];e-Fk>2&&(Bk("matchMediaInit"),Ok.forEach(function(e){var n,r,i,a,o=e.queries,s=e.conditions;for(r in o)(n=mx.matchMedia(o[r]).matches)&&(i=1),n!==s[r]&&(s[r]=n,a=1);a&&(e.revert(),i&&t.push(e))}),Bk("matchMediaRevert"),t.forEach(function(e){return e.onMatch(e,function(t){return e.add(null,t)})}),Fk=e,Bk("matchMedia"))},Wk=function(){function e(e,t){this.selector=t&&Ew(t),this.data=[],this._r=[],this.isReverted=!1,this.id=Vk++,e&&this.add(e)}var t=e.prototype;return t.add=function(e,t,n){eb(e)&&(n=t,t=e,e=eb);var r=this,i=function(){var e,i=px,a=r.selector;return i&&i!==r&&i.data.push(r),n&&(r.selector=Ew(n)),px=r,e=t.apply(r,arguments),eb(e)&&r._r.push(e),px=i,r.selector=a,r.isReverted=!1,e};return r.last=i,e===eb?i(r,function(e){return r.add(null,e)}):e?r[e]=i:i},t.ignore=function(e){var t=px;px=null,e(this),px=t},t.getTweens=function(){var t=[];return this.data.forEach(function(n){return n instanceof e?t.push.apply(t,n.getTweens()):n instanceof kk&&!(n.parent&&"nested"===n.parent.data)&&t.push(n)}),t},t.clear=function(){this._r.length=this.data.length=0},t.kill=function(e,t){var n=this;if(e?function(){for(var t,r=n.getTweens(),i=n.data.length;i--;)"isFlip"===(t=n.data[i]).data&&(t.revert(),t.getChildren(!0,!0,!1).forEach(function(e){return r.splice(r.indexOf(e),1)}));for(r.map(function(e){return{g:e._dur||e._delay||e._sat&&!e._sat.vars.immediateRender?e.globalTime(0):-1/0,t:e}}).sort(function(e,t){return t.g-e.g||-1/0}).forEach(function(t){return t.t.revert(e)}),i=n.data.length;i--;)(t=n.data[i])instanceof dk?"nested"!==t.data&&(t.scrollTrigger&&t.scrollTrigger.revert(),t.kill()):!(t instanceof kk)&&t.revert&&t.revert(e);n._r.forEach(function(t){return t(e,n)}),n.isReverted=!0}():this.data.forEach(function(e){return e.kill&&e.kill()}),this.clear(),t)for(var r=Ok.length;r--;)Ok[r].id===this.id&&Ok.splice(r,1)},t.revert=function(e){this.kill(e||{})},e}(),Yk=function(){function e(e){this.contexts=[],this.scope=e,px&&px.data.push(this)}var t=e.prototype;return t.add=function(e,t,n){rb(e)||(e={matches:e});var r,i,a,o=new Wk(0,n||this.scope),s=o.conditions={};for(i in px&&!o.selector&&(o.selector=px.selector),this.contexts.push(o),t=o.add("onMatch",t),o.queries=e,e)"all"===i?a=1:(r=mx.matchMedia(e[i]))&&(Ok.indexOf(o)<0&&Ok.push(o),(s[i]=r.matches)&&(a=1),r.addListener?r.addListener(Uk):r.addEventListener("change",Uk));return a&&t(o,function(e){return o.add(null,e)}),this},t.revert=function(e){this.kill(e||{})},t.kill=function(e){this.contexts.forEach(function(t){return t.kill(e,!0)})},e}(),Hk={registerPlugin:function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];t.forEach(function(e){return Vw(e)})},timeline:function(e){return new dk(e)},getTweensOf:function(e,t){return fx.getTweensOf(e,t)},getProperty:function(e,t,n,r){Jx(e)&&(e=Cw(e)[0]);var i=Ob(e||{}).get,a=n?Xb:qb;return"native"===n&&(n=""),e?t?a((Ab[t]&&Ab[t].get||i)(e,t,n,r)):function(t,n,r){return a((Ab[t]&&Ab[t].get||i)(e,t,n,r))}:e},quickSetter:function(e,t,n){if((e=Cw(e)).length>1){var r=e.map(function(e){return Gk.quickSetter(e,t,n)}),i=r.length;return function(e){for(var t=i;t--;)r[t](e)}}e=e[0]||{};var a=Ab[t],o=Ob(e),s=o.harness&&(o.harness.aliases||{})[t]||t,l=a?function(t){var r=new a;bx._pt=0,r.init(e,n?t+n:t,bx,0,[e]),r.render(1,r),bx._pt&&Ak(1,bx)}:o.set(e,s);return a?l:function(t){return l(e,s,n?t+n:t,o,1)}},quickTo:function(e,t,n){var r,i=Gk.to(e,Gb(((r={})[t]="+=0.1",r.paused=!0,r.stagger=0,r),n||{})),a=function(e,n,r){return i.resetTo(t,e,n,r)};return a.tween=i,a},isTweening:function(e){return fx.getTweensOf(e,!0).length>0},defaults:function(e){return e&&e.ease&&(e.ease=ik(e.ease,Wx.ease)),Qb(Wx,e||{})},config:function(e){return Qb(Ux,e||{})},registerEffect:function(e){var t=e.name,n=e.effect,r=e.plugins,i=e.defaults,a=e.extendTimeline;(r||"").split(",").forEach(function(e){return e&&!Ab[e]&&!vb[e]&&kb(t+" effect requires "+e+" plugin.")}),Rb[t]=function(e,t,r){return n(Cw(e),Gb(t||{},i),r)},a&&(dk.prototype[t]=function(e,n,r){return this.add(Rb[t](e,rb(n)?n:(r=n)&&{},this),r)})},registerEase:function(e,t){Jw[e]=ik(t)},parseEase:function(e,t){return arguments.length?ik(e,t):Jw},getById:function(e){return fx.getById(e)},exportRoot:function(e,t){void 0===e&&(e={});var n,r,i=new dk(e);for(i.smoothChildTiming=ib(e.smoothChildTiming),fx.remove(i),i._dp=0,i._time=i._tTime=fx._time,n=fx._first;n;)r=n._next,!t&&!n._dur&&n instanceof kk&&n.vars.onComplete===n._targets[0]||hw(i,n,n._start-n._delay),n=r;return hw(fx,i,0),i},context:function(e,t){return e?new Wk(e,t):px},matchMedia:function(e){return new Yk(e)},matchMediaRefresh:function(){return Ok.forEach(function(e){var t,n,r=e.conditions;for(n in r)r[n]&&(r[n]=!1,t=1);t&&e.revert()})||Uk()},addEventListener:function(e,t){var n=Ik[e]||(Ik[e]=[]);~n.indexOf(t)||n.push(t)},removeEventListener:function(e,t){var n=Ik[e],r=n&&n.indexOf(t);r>=0&&n.splice(r,1)},utils:{wrap:function e(t,n,r){var i=n-t;return lb(t)?Dw(t,e(0,t.length),n):kw(r,function(e){return(i+(e-t)%i)%i+t})},wrapYoyo:function e(t,n,r){var i=n-t,a=2*i;return lb(t)?Dw(t,e(0,t.length-1),n):kw(r,function(e){return t+((e=(a+(e-t)%a)%a||0)>i?a-e:e)})},distribute:Mw,random:zw,snap:Rw,normalize:function(e,t,n){return Lw(e,t,0,1,n)},getUnit:Sw,clamp:function(e,t,n){return kw(n,function(n){return _w(e,t,n)})},splitColor:Yw,toArray:Cw,selector:Ew,mapRange:Lw,pipe:function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return function(e){return t.reduce(function(e,t){return t(e)},e)}},unitize:function(e,t){return function(n){return e(parseFloat(n))+(t||Sw(n))}},interpolate:function e(t,n,r,i){var a=isNaN(t+n)?0:function(e){return(1-e)*t+e*n};if(!a){var o,s,l,u,c,d=Jx(t),h={};if(!0===r&&(i=1)&&(r=null),d)t={p:t},n={p:n};else if(lb(t)&&!lb(n)){for(l=[],u=t.length,c=u-2,s=1;s<u;s++)l.push(e(t[s-1],t[s]));u--,a=function(e){e*=u;var t=Math.min(c,~~e);return l[t](e-t)},r=n}else i||(t=Kb(lb(t)?[]:{},t));if(!l){for(o in n)mk.call(h,t,o,"get",n[o]);a=function(e){return Ak(e,h)||(d?t.p:t)}}}return kw(r,a)},shuffle:Pw},install:bb,effects:Rb,ticker:Qw,updateRoot:dk.updateRoot,plugins:Ab,globalTimeline:fx,core:{PropTween:Lk,globals:_b,Tween:kk,Timeline:dk,Animation:ck,getCache:Ob,_removeLinkedListItem:tw,reverting:function(){return hx},context:function(e){return e&&px&&(px.data.push(e),e._ctx=px),px},suppressOverwrites:function(e){return dx=e}}};Nb("to,from,fromTo,delayedCall,set,killTweensOf",function(e){return Hk[e]=kk[e]}),Qw.add(dk.updateRoot),bx=Hk.to({},{duration:0});var qk=function(e,t){for(var n=e._pt;n&&n.p!==t&&n.op!==t&&n.fp!==t;)n=n._next;return n},Xk=function(e,t){return{name:e,headless:1,rawVars:1,init:function(e,n,r){r._onInit=function(e){var r,i;if(Jx(n)&&(r={},Nb(n,function(e){return r[e]=1}),n=r),t){for(i in r={},n)r[i]=t(n[i]);n=r}!function(e,t){var n,r,i,a=e._targets;for(n in t)for(r=a.length;r--;)(i=e._ptLookup[r][n])&&(i=i.d)&&(i._pt&&(i=qk(i,n)),i&&i.modifier&&i.modifier(t[n],e,a[r],n))}(e,n)}}}},Gk=Hk.registerPlugin({name:"attr",init:function(e,t,n,r,i){var a,o,s;for(a in this.tween=n,t)s=e.getAttribute(a)||"",(o=this.add(e,"setAttribute",(s||0)+"",t[a],r,i,0,0,a)).op=a,o.b=s,this._props.push(a)},render:function(e,t){for(var n=t._pt;n;)hx?n.set(n.t,n.p,n.b,n):n.r(e,n.d),n=n._next}},{name:"endArray",headless:1,init:function(e,t){for(var n=t.length;n--;)this.add(e,n,e[n]||0,t[n],0,0,0,0,0,1)}},Xk("roundProps",Aw),Xk("modifiers"),Xk("snap",Rw))||Hk;kk.version=dk.version=Gk.version="3.15.0",vx=1,ab()&&Zw(),Jw.Power0,Jw.Power1,Jw.Power2,Jw.Power3,Jw.Power4,Jw.Linear,Jw.Quad,Jw.Cubic,Jw.Quart,Jw.Quint,Jw.Strong,Jw.Elastic,Jw.Back,Jw.SteppedEase,Jw.Bounce,Jw.Sine,Jw.Expo,Jw.Circ;var Kk,Qk,Zk,Jk,e_,t_,n_,r_,i_={},a_=180/Math.PI,o_=Math.PI/180,s_=Math.atan2,l_=/([A-Z])/g,u_=/(left|right|width|margin|padding|x)/i,c_=/[\s,\(]\S/,d_={autoAlpha:"opacity,visibility",scale:"scaleX,scaleY",alpha:"opacity"},h_=function(e,t){return t.set(t.t,t.p,Math.round(1e4*(t.s+t.c*e))/1e4+t.u,t)},p_=function(e,t){return t.set(t.t,t.p,1===e?t.e:Math.round(1e4*(t.s+t.c*e))/1e4+t.u,t)},f_=function(e,t){return t.set(t.t,t.p,e?Math.round(1e4*(t.s+t.c*e))/1e4+t.u:t.b,t)},m_=function(e,t){return t.set(t.t,t.p,1===e?t.e:e?Math.round(1e4*(t.s+t.c*e))/1e4+t.u:t.b,t)},g_=function(e,t){var n=t.s+t.c*e;t.set(t.t,t.p,~~(n+(n<0?-.5:.5))+t.u,t)},y_=function(e,t){return t.set(t.t,t.p,e?t.e:t.b,t)},v_=function(e,t){return t.set(t.t,t.p,1!==e?t.b:t.e,t)},x_=function(e,t,n){return e.style[t]=n},b_=function(e,t,n){return e.style.setProperty(t,n)},w_=function(e,t,n){return e._gsap[t]=n},k_=function(e,t,n){return e._gsap.scaleX=e._gsap.scaleY=n},__=function(e,t,n,r,i){var a=e._gsap;a.scaleX=a.scaleY=n,a.renderTransform(i,a)},S_=function(e,t,n,r,i){var a=e._gsap;a[t]=n,a.renderTransform(i,a)},j_="transform",T_=j_+"Origin",C_=function e(t,n){var r=this,i=this.target,a=i.style,o=i._gsap;if(t in i_&&a){if(this.tfm=this.tfm||{},"transform"===t)return d_.transform.split(",").forEach(function(t){return e.call(r,t,n)});if(~(t=d_[t]||t).indexOf(",")?t.split(",").forEach(function(e){return r.tfm[e]=Y_(i,e)}):this.tfm[t]=o.x?o[t]:Y_(i,t),t===T_&&(this.tfm.zOrigin=o.zOrigin),this.props.indexOf(j_)>=0)return;o.svg&&(this.svgo=i.getAttribute("data-svg-origin"),this.props.push(T_,n,"")),t=j_}(a||n)&&this.props.push(t,n,a[t])},E_=function(e){e.translate&&(e.removeProperty("translate"),e.removeProperty("scale"),e.removeProperty("rotate"))},P_=function(){var e,t,n=this.props,r=this.target,i=r.style,a=r._gsap;for(e=0;e<n.length;e+=3)n[e+1]?2===n[e+1]?r[n[e]](n[e+2]):r[n[e]]=n[e+2]:n[e+2]?i[n[e]]=n[e+2]:i.removeProperty("--"===n[e].substr(0,2)?n[e]:n[e].replace(l_,"-$1").toLowerCase());if(this.tfm){for(t in this.tfm)a[t]=this.tfm[t];a.svg&&(a.renderTransform(),r.setAttribute("data-svg-origin",this.svgo||"")),(e=n_())&&e.isStart||i[j_]||(E_(i),a.zOrigin&&i[T_]&&(i[T_]+=" "+a.zOrigin+"px",a.zOrigin=0,a.renderTransform()),a.uncache=1)}},M_=function(e,t){var n={target:e,props:[],revert:P_,save:C_};return e._gsap||Gk.core.getCache(e),t&&e.style&&e.nodeType&&t.split(",").forEach(function(e){return n.save(e)}),n},A_=function(e,t){var n=Qk.createElementNS?Qk.createElementNS((t||"http://www.w3.org/1999/xhtml").replace(/^https/,"http"),e):Qk.createElement(e);return n&&n.style?n:Qk.createElement(e)},R_=function e(t,n,r){var i=getComputedStyle(t);return i[n]||i.getPropertyValue(n.replace(l_,"-$1").toLowerCase())||i.getPropertyValue(n)||!r&&e(t,D_(n)||n,1)||""},z_="O,Moz,ms,Ms,Webkit".split(","),D_=function(e,t,n){var r=(t||e_).style,i=5;if(e in r&&!n)return e;for(e=e.charAt(0).toUpperCase()+e.substr(1);i--&&!(z_[i]+e in r););return i<0?null:(3===i?"ms":i>=0?z_[i]:"")+e},$_=function(){"undefined"!=typeof window&&window.document&&(Kk=window,Qk=Kk.document,Zk=Qk.documentElement,e_=A_("div")||{style:{}},A_("div"),j_=D_(j_),T_=j_+"Origin",e_.style.cssText="border-width:0;line-height:0;position:absolute;padding:0",r_=!!D_("perspective"),n_=Gk.core.reverting,Jk=1)},L_=function(e){var t,n=e.ownerSVGElement,r=A_("svg",n&&n.getAttribute("xmlns")||"http://www.w3.org/2000/svg"),i=e.cloneNode(!0);i.style.display="block",r.appendChild(i),Zk.appendChild(r);try{t=i.getBBox()}catch(GS){}return r.removeChild(i),Zk.removeChild(r),t},O_=function(e,t){for(var n=t.length;n--;)if(e.hasAttribute(t[n]))return e.getAttribute(t[n])},I_=function(e){var t,n;try{t=e.getBBox()}catch(r){t=L_(e),n=1}return t&&(t.width||t.height)||n||(t=L_(e)),!t||t.width||t.x||t.y?t:{x:+O_(e,["x","cx","x1"])||0,y:+O_(e,["y","cy","y1"])||0,width:0,height:0}},N_=function(e){return!(!e.getCTM||e.parentNode&&!e.ownerSVGElement||!I_(e))},F_=function(e,t){if(t){var n,r=e.style;t in i_&&t!==T_&&(t=j_),r.removeProperty?("ms"!==(n=t.substr(0,2))&&"webkit"!==t.substr(0,6)||(t="-"+t),r.removeProperty("--"===n?t:t.replace(l_,"-$1").toLowerCase())):r.removeAttribute(t)}},V_=function(e,t,n,r,i,a){var o=new Lk(e._pt,t,n,0,1,a?v_:y_);return e._pt=o,o.b=r,o.e=i,e._props.push(n),o},B_={deg:1,rad:1,turn:1},U_={grid:1,flex:1},W_=function e(t,n,r,i){var a,o,s,l,u=parseFloat(r)||0,c=(r+"").trim().substr((u+"").length)||"px",d=e_.style,h=u_.test(n),p="svg"===t.tagName.toLowerCase(),f=(p?"client":"offset")+(h?"Width":"Height"),m=100,g="px"===i,y="%"===i;if(i===c||!u||B_[i]||B_[c])return u;if("px"!==c&&!g&&(u=e(t,n,r,"px")),l=t.getCTM&&N_(t),(y||"%"===c)&&(i_[n]||~n.indexOf("adius")))return a=l?t.getBBox()[h?"width":"height"]:t[f],Fb(y?u/a*m:u/100*a);if(d[h?"width":"height"]=m+(g?c:i),o="rem"!==i&&~n.indexOf("adius")||"em"===i&&t.appendChild&&!p?t:t.parentNode,l&&(o=(t.ownerSVGElement||{}).parentNode),o&&o!==Qk&&o.appendChild||(o=Qk.body),(s=o._gsap)&&y&&s.width&&h&&s.time===Qw.time&&!s.uncache)return Fb(u/s.width*m);if(!y||"height"!==n&&"width"!==n)(y||"%"===c)&&!U_[R_(o,"display")]&&(d.position=R_(t,"position")),o===t&&(d.position="static"),o.appendChild(e_),a=e_[f],o.removeChild(e_),d.position="absolute";else{var v=t.style[n];t.style[n]=m+i,a=t[f],v?t.style[n]=v:F_(t,n)}return h&&y&&((s=Ob(o)).time=Qw.time,s.width=o[f]),Fb(g?a*u/m:a&&u?m/a*u:0)},Y_=function(e,t,n,r){var i;return Jk||$_(),t in d_&&"transform"!==t&&~(t=d_[t]).indexOf(",")&&(t=t.split(",")[0]),i_[t]&&"transform"!==t?(i=rS(e,r),i="transformOrigin"!==t?i[t]:i.svg?i.origin:iS(R_(e,T_))+" "+i.zOrigin+"px"):(!(i=e.style[t])||"auto"===i||r||~(i+"").indexOf("calc("))&&(i=K_[t]&&K_[t](e,t,n)||R_(e,t)||Ib(e,t)||("opacity"===t?1:0)),n&&!~(i+"").trim().indexOf(" ")?W_(e,t,i,n)+n:i},H_=function(e,t,n,r){if(!n||"none"===n){var i=D_(t,e,1),a=i&&R_(e,i,1);a&&a!==n?(t=i,n=a):"borderColor"===t&&(n=R_(e,"borderTopColor"))}var o,s,l,u,c,d,h,p,f,m,g,y=new Lk(this._pt,e.style,t,0,1,Mk),v=0,x=0;if(y.b=n,y.e=r,n+="","var(--"===(r+="").substring(0,6)&&(r=R_(e,r.substring(4,r.indexOf(")")))),"auto"===r&&(d=e.style[t],e.style[t]=r,r=R_(e,t)||r,d?e.style[t]=d:F_(e,t)),Kw(o=[n,r]),r=o[1],l=(n=o[0]).match(pb)||[],(r.match(pb)||[]).length){for(;s=pb.exec(r);)h=s[0],f=r.substring(v,s.index),c?c=(c+1)%5:"rgba("!==f.substr(-5)&&"hsla("!==f.substr(-5)||(c=1),h!==(d=l[x++]||"")&&(u=parseFloat(d)||0,g=d.substr((u+"").length),"="===h.charAt(1)&&(h=Bb(u,h)+g),p=parseFloat(h),m=h.substr((p+"").length),v=pb.lastIndex-m.length,m||(m=m||Ux.units[t]||g,v===r.length&&(r+=m,y.e+=m)),g!==m&&(u=W_(e,t,d,m)||0),y._pt={_next:y._pt,p:f||1===x?f:",",s:u,c:p-u,m:c&&c<4||"zIndex"===t?Math.round:0});y.c=v<r.length?r.substring(v,r.length):""}else y.r="display"===t&&"none"===r?v_:y_;return mb.test(r)&&(y.e=0),this._pt=y,y},q_={top:"0%",bottom:"100%",left:"0%",right:"100%",center:"50%"},X_=function(e){var t=e.split(" "),n=t[0],r=t[1]||"50%";return"top"!==n&&"bottom"!==n&&"left"!==r&&"right"!==r||(e=n,n=r,r=e),t[0]=q_[n]||n,t[1]=q_[r]||r,t.join(" ")},G_=function(e,t){if(t.tween&&t.tween._time===t.tween._dur){var n,r,i,a=t.t,o=a.style,s=t.u,l=a._gsap;if("all"===s||!0===s)o.cssText="",r=1;else for(i=(s=s.split(",")).length;--i>-1;)n=s[i],i_[n]&&(r=1,n="transformOrigin"===n?T_:j_),F_(a,n);r&&(F_(a,j_),l&&(l.svg&&a.removeAttribute("transform"),o.scale=o.rotate=o.translate="none",rS(a,1),l.uncache=1,E_(o)))}},K_={clearProps:function(e,t,n,r,i){if("isFromStart"!==i.data){var a=e._pt=new Lk(e._pt,t,n,0,0,G_);return a.u=r,a.pr=-10,a.tween=i,e._props.push(n),1}}},Q_=[1,0,0,1,0,0],Z_={},J_=function(e){return"matrix(1, 0, 0, 1, 0, 0)"===e||"none"===e||!e},eS=function(e){var t=R_(e,j_);return J_(t)?Q_:t.substr(7).match(hb).map(Fb)},tS=function(e,t){var n,r,i,a,o=e._gsap||Ob(e),s=e.style,l=eS(e);return o.svg&&e.getAttribute("transform")?"1,0,0,1,0,0"===(l=[(i=e.transform.baseVal.consolidate().matrix).a,i.b,i.c,i.d,i.e,i.f]).join(",")?Q_:l:(l!==Q_||e.offsetParent||e===Zk||o.svg||(i=s.display,s.display="block",(n=e.parentNode)&&(e.offsetParent||e.getBoundingClientRect().width)||(a=1,r=e.nextElementSibling,Zk.appendChild(e)),l=eS(e),i?s.display=i:F_(e,"display"),a&&(r?n.insertBefore(e,r):n?n.appendChild(e):Zk.removeChild(e))),t&&l.length>6?[l[0],l[1],l[4],l[5],l[12],l[13]]:l)},nS=function(e,t,n,r,i,a){var o,s,l,u=e._gsap,c=i||tS(e,!0),d=u.xOrigin||0,h=u.yOrigin||0,p=u.xOffset||0,f=u.yOffset||0,m=c[0],g=c[1],y=c[2],v=c[3],x=c[4],b=c[5],w=t.split(" "),k=parseFloat(w[0])||0,_=parseFloat(w[1])||0;n?c!==Q_&&(s=m*v-g*y)&&(l=k*(-g/s)+_*(m/s)-(m*b-g*x)/s,k=k*(v/s)+_*(-y/s)+(y*b-v*x)/s,_=l):(k=(o=I_(e)).x+(~w[0].indexOf("%")?k/100*o.width:k),_=o.y+(~(w[1]||w[0]).indexOf("%")?_/100*o.height:_)),r||!1!==r&&u.smooth?(x=k-d,b=_-h,u.xOffset=p+(x*m+b*y)-x,u.yOffset=f+(x*g+b*v)-b):u.xOffset=u.yOffset=0,u.xOrigin=k,u.yOrigin=_,u.smooth=!!r,u.origin=t,u.originIsAbsolute=!!n,e.style[T_]="0px 0px",a&&(V_(a,u,"xOrigin",d,k),V_(a,u,"yOrigin",h,_),V_(a,u,"xOffset",p,u.xOffset),V_(a,u,"yOffset",f,u.yOffset)),e.setAttribute("data-svg-origin",k+" "+_)},rS=function(e,t){var n=e._gsap||new uk(e);if("x"in n&&!t&&!n.uncache)return n;var r,i,a,o,s,l,u,c,d,h,p,f,m,g,y,v,x,b,w,k,_,S,j,T,C,E,P,M,A,R,z,D,$=e.style,L=n.scaleX<0,O="px",I="deg",N=getComputedStyle(e),F=R_(e,T_)||"0";return r=i=a=l=u=c=d=h=p=0,o=s=1,n.svg=!(!e.getCTM||!N_(e)),N.translate&&("none"===N.translate&&"none"===N.scale&&"none"===N.rotate||($[j_]=("none"!==N.translate?"translate3d("+(N.translate+" 0 0").split(" ").slice(0,3).join(", ")+") ":"")+("none"!==N.rotate?"rotate("+N.rotate+") ":"")+("none"!==N.scale?"scale("+N.scale.split(" ").join(",")+") ":"")+("none"!==N[j_]?N[j_]:"")),$.scale=$.rotate=$.translate="none"),g=tS(e,n.svg),n.svg&&(n.uncache?(C=e.getBBox(),F=n.xOrigin-C.x+"px "+(n.yOrigin-C.y)+"px",T=""):T=!t&&e.getAttribute("data-svg-origin"),nS(e,T||F,!!T||n.originIsAbsolute,!1!==n.smooth,g)),f=n.xOrigin||0,m=n.yOrigin||0,g!==Q_&&(b=g[0],w=g[1],k=g[2],_=g[3],r=S=g[4],i=j=g[5],6===g.length?(o=Math.sqrt(b*b+w*w),s=Math.sqrt(_*_+k*k),l=b||w?s_(w,b)*a_:0,(d=k||_?s_(k,_)*a_+l:0)&&(s*=Math.abs(Math.cos(d*o_))),n.svg&&(r-=f-(f*b+m*k),i-=m-(f*w+m*_))):(D=g[6],R=g[7],P=g[8],M=g[9],A=g[10],z=g[11],r=g[12],i=g[13],a=g[14],u=(y=s_(D,A))*a_,y&&(T=S*(v=Math.cos(-y))+P*(x=Math.sin(-y)),C=j*v+M*x,E=D*v+A*x,P=S*-x+P*v,M=j*-x+M*v,A=D*-x+A*v,z=R*-x+z*v,S=T,j=C,D=E),c=(y=s_(-k,A))*a_,y&&(v=Math.cos(-y),z=_*(x=Math.sin(-y))+z*v,b=T=b*v-P*x,w=C=w*v-M*x,k=E=k*v-A*x),l=(y=s_(w,b))*a_,y&&(T=b*(v=Math.cos(y))+w*(x=Math.sin(y)),C=S*v+j*x,w=w*v-b*x,j=j*v-S*x,b=T,S=C),u&&Math.abs(u)+Math.abs(l)>359.9&&(u=l=0,c=180-c),o=Fb(Math.sqrt(b*b+w*w+k*k)),s=Fb(Math.sqrt(j*j+D*D)),y=s_(S,j),d=Math.abs(y)>2e-4?y*a_:0,p=z?1/(z<0?-z:z):0),n.svg&&(T=e.getAttribute("transform"),n.forceCSS=e.setAttribute("transform","")||!J_(R_(e,j_)),T&&e.setAttribute("transform",T))),Math.abs(d)>90&&Math.abs(d)<270&&(L?(o*=-1,d+=l<=0?180:-180,l+=l<=0?180:-180):(s*=-1,d+=d<=0?180:-180)),t=t||n.uncache,n.x=r-((n.xPercent=r&&(!t&&n.xPercent||(Math.round(e.offsetWidth/2)===Math.round(-r)?-50:0)))?e.offsetWidth*n.xPercent/100:0)+O,n.y=i-((n.yPercent=i&&(!t&&n.yPercent||(Math.round(e.offsetHeight/2)===Math.round(-i)?-50:0)))?e.offsetHeight*n.yPercent/100:0)+O,n.z=a+O,n.scaleX=Fb(o),n.scaleY=Fb(s),n.rotation=Fb(l)+I,n.rotationX=Fb(u)+I,n.rotationY=Fb(c)+I,n.skewX=d+I,n.skewY=h+I,n.transformPerspective=p+O,(n.zOrigin=parseFloat(F.split(" ")[2])||!t&&n.zOrigin||0)&&($[T_]=iS(F)),n.xOffset=n.yOffset=0,n.force3D=Ux.force3D,n.renderTransform=n.svg?dS:r_?cS:oS,n.uncache=0,n},iS=function(e){return(e=e.split(" "))[0]+" "+e[1]},aS=function(e,t,n){var r=Sw(t);return Fb(parseFloat(t)+parseFloat(W_(e,"x",n+"px",r)))+r},oS=function(e,t){t.z="0px",t.rotationY=t.rotationX="0deg",t.force3D=0,cS(e,t)},sS="0deg",lS="0px",uS=") ",cS=function(e,t){var n=t||this,r=n.xPercent,i=n.yPercent,a=n.x,o=n.y,s=n.z,l=n.rotation,u=n.rotationY,c=n.rotationX,d=n.skewX,h=n.skewY,p=n.scaleX,f=n.scaleY,m=n.transformPerspective,g=n.force3D,y=n.target,v=n.zOrigin,x="",b="auto"===g&&e&&1!==e||!0===g;if(v&&(c!==sS||u!==sS)){var w,k=parseFloat(u)*o_,_=Math.sin(k),S=Math.cos(k);k=parseFloat(c)*o_,w=Math.cos(k),a=aS(y,a,_*w*-v),o=aS(y,o,-Math.sin(k)*-v),s=aS(y,s,S*w*-v+v)}m!==lS&&(x+="perspective("+m+uS),(r||i)&&(x+="translate("+r+"%, "+i+"%) "),(b||a!==lS||o!==lS||s!==lS)&&(x+=s!==lS||b?"translate3d("+a+", "+o+", "+s+") ":"translate("+a+", "+o+uS),l!==sS&&(x+="rotate("+l+uS),u!==sS&&(x+="rotateY("+u+uS),c!==sS&&(x+="rotateX("+c+uS),d===sS&&h===sS||(x+="skew("+d+", "+h+uS),1===p&&1===f||(x+="scale("+p+", "+f+uS),y.style[j_]=x||"translate(0, 0)"},dS=function(e,t){var n,r,i,a,o,s=t||this,l=s.xPercent,u=s.yPercent,c=s.x,d=s.y,h=s.rotation,p=s.skewX,f=s.skewY,m=s.scaleX,g=s.scaleY,y=s.target,v=s.xOrigin,x=s.yOrigin,b=s.xOffset,w=s.yOffset,k=s.forceCSS,_=parseFloat(c),S=parseFloat(d);h=parseFloat(h),p=parseFloat(p),(f=parseFloat(f))&&(p+=f=parseFloat(f),h+=f),h||p?(h*=o_,p*=o_,n=Math.cos(h)*m,r=Math.sin(h)*m,i=Math.sin(h-p)*-g,a=Math.cos(h-p)*g,p&&(f*=o_,o=Math.tan(p-f),i*=o=Math.sqrt(1+o*o),a*=o,f&&(o=Math.tan(f),n*=o=Math.sqrt(1+o*o),r*=o)),n=Fb(n),r=Fb(r),i=Fb(i),a=Fb(a)):(n=m,a=g,r=i=0),(_&&!~(c+"").indexOf("px")||S&&!~(d+"").indexOf("px"))&&(_=W_(y,"x",c,"px"),S=W_(y,"y",d,"px")),(v||x||b||w)&&(_=Fb(_+v-(v*n+x*i)+b),S=Fb(S+x-(v*r+x*a)+w)),(l||u)&&(o=y.getBBox(),_=Fb(_+l/100*o.width),S=Fb(S+u/100*o.height)),o="matrix("+n+","+r+","+i+","+a+","+_+","+S+")",y.setAttribute("transform",o),k&&(y.style[j_]=o)},hS=function(e,t,n,r,i){var a,o,s=360,l=Jx(i),u=parseFloat(i)*(l&&~i.indexOf("rad")?a_:1)-r,c=r+u+"deg";return l&&("short"===(a=i.split("_")[1])&&(u%=s)!==u%180&&(u+=u<0?s:-360),"cw"===a&&u<0?u=(u+36e9)%s-~~(u/s)*s:"ccw"===a&&u>0&&(u=(u-36e9)%s-~~(u/s)*s)),e._pt=o=new Lk(e._pt,t,n,r,u,p_),o.e=c,o.u="deg",e._props.push(n),o},pS=function(e,t){for(var n in t)e[n]=t[n];return e},fS=function(e,t,n){var r,i,a,o,s,l,u,c=pS({},n._gsap),d=n.style;for(i in c.svg?(a=n.getAttribute("transform"),n.setAttribute("transform",""),d[j_]=t,r=rS(n,1),F_(n,j_),n.setAttribute("transform",a)):(a=getComputedStyle(n)[j_],d[j_]=t,r=rS(n,1),d[j_]=a),i_)(a=c[i])!==(o=r[i])&&"perspective,force3D,transformOrigin,svgOrigin".indexOf(i)<0&&(s=Sw(a)!==(u=Sw(o))?W_(n,i,a,u):parseFloat(a),l=parseFloat(o),e._pt=new Lk(e._pt,r,i,s,l-s,h_),e._pt.u=u||0,e._props.push(i));pS(r,c)};Nb("padding,margin,Width,Radius",function(e,t){var n="Top",r="Right",i="Bottom",a="Left",o=(t<3?[n,r,i,a]:[n+a,n+r,i+r,i+a]).map(function(n){return t<2?e+n:"border"+n+e});K_[t>1?"border"+e:e]=function(e,t,n,r,i){var a,s;if(arguments.length<4)return a=o.map(function(t){return Y_(e,t,n)}),5===(s=a.join(" ")).split(a[0]).length?a[0]:s;a=(r+"").split(" "),s={},o.forEach(function(e,t){return s[e]=a[t]=a[t]||a[(t-1)/2|0]}),e.init(t,s,i)}});var mS,gS,yS,vS={name:"css",register:$_,targetTest:function(e){return e.style&&e.nodeType},init:function(e,t,n,r,i){var a,o,s,l,u,c,d,h,p,f,m,g,y,v,x,b,w,k=this._props,_=e.style,S=n.vars.startAt;for(d in Jk||$_(),this.styles=this.styles||M_(e),b=this.styles.props,this.tween=n,t)if("autoRound"!==d&&(o=t[d],!Ab[d]||!gk(d,t,n,r,e,i)))if(u=typeof o,c=K_[d],"function"===u&&(u=typeof(o=o.call(n,r,e,i))),"string"===u&&~o.indexOf("random(")&&(o=$w(o)),c)c(this,e,d,o,n)&&(x=1);else if("--"===d.substr(0,2))a=(getComputedStyle(e).getPropertyValue(d)+"").trim(),o+="",Xw.lastIndex=0,Xw.test(a)||(h=Sw(a),(p=Sw(o))?h!==p&&(a=W_(e,d,a,p)+p):h&&(o+=h)),this.add(_,"setProperty",a,o,r,i,0,0,d),k.push(d),b.push(d,0,_[d]);else if("undefined"!==u){if(S&&d in S?(a="function"==typeof S[d]?S[d].call(n,r,e,i):S[d],Jx(a)&&~a.indexOf("random(")&&(a=$w(a)),Sw(a+"")||"auto"===a||(a+=Ux.units[d]||Sw(Y_(e,d))||""),"="===(a+"").charAt(1)&&(a=Y_(e,d))):a=Y_(e,d),l=parseFloat(a),(f="string"===u&&"="===o.charAt(1)&&o.substr(0,2))&&(o=o.substr(2)),s=parseFloat(o),d in d_&&("autoAlpha"===d&&(1===l&&"hidden"===Y_(e,"visibility")&&s&&(l=0),b.push("visibility",0,_.visibility),V_(this,_,"visibility",l?"inherit":"hidden",s?"inherit":"hidden",!s)),"scale"!==d&&"transform"!==d&&~(d=d_[d]).indexOf(",")&&(d=d.split(",")[0])),m=d in i_){if(this.styles.save(d),w=o,"string"===u&&"var(--"===o.substring(0,6)){if("calc("===(o=R_(e,o.substring(4,o.indexOf(")")))).substring(0,5)){var j=e.style.perspective;e.style.perspective=o,o=R_(e,"perspective"),j?e.style.perspective=j:F_(e,"perspective")}s=parseFloat(o)}if(g||((y=e._gsap).renderTransform&&!t.parseTransform||rS(e,t.parseTransform),v=!1!==t.smoothOrigin&&y.smooth,(g=this._pt=new Lk(this._pt,_,j_,0,1,y.renderTransform,y,0,-1)).dep=1),"scale"===d)this._pt=new Lk(this._pt,y,"scaleY",y.scaleY,(f?Bb(y.scaleY,f+s):s)-y.scaleY||0,h_),this._pt.u=0,k.push("scaleY",d),d+="X";else{if("transformOrigin"===d){b.push(T_,0,_[T_]),o=X_(o),y.svg?nS(e,o,0,v,0,this):((p=parseFloat(o.split(" ")[2])||0)!==y.zOrigin&&V_(this,y,"zOrigin",y.zOrigin,p),V_(this,_,d,iS(a),iS(o)));continue}if("svgOrigin"===d){nS(e,o,1,v,0,this);continue}if(d in Z_){hS(this,y,d,l,f?Bb(l,f+o):o);continue}if("smoothOrigin"===d){V_(this,y,"smooth",y.smooth,o);continue}if("force3D"===d){y[d]=o;continue}if("transform"===d){fS(this,o,e);continue}}}else d in _||(d=D_(d)||d);if(m||(s||0===s)&&(l||0===l)&&!c_.test(o)&&d in _)s||(s=0),(h=(a+"").substr((l+"").length))!==(p=Sw(o)||(d in Ux.units?Ux.units[d]:h))&&(l=W_(e,d,a,p)),this._pt=new Lk(this._pt,m?y:_,d,l,(f?Bb(l,f+s):s)-l,m||"px"!==p&&"zIndex"!==d||!1===t.autoRound?h_:g_),this._pt.u=p||0,m&&w!==o?(this._pt.b=a,this._pt.e=w,this._pt.r=m_):h!==p&&"%"!==p&&(this._pt.b=a,this._pt.r=f_);else if(d in _)H_.call(this,e,d,a,f?f+o:o);else if(d in e)this.add(e,d,a||e[d],f?f+o:o,r,i);else if("parseTransform"!==d){wb(d,o);continue}m||(d in _?b.push(d,0,_[d]):"function"==typeof e[d]?b.push(d,2,e[d]()):b.push(d,1,a||e[d])),k.push(d)}x&&$k(this)},render:function(e,t){if(t.tween._time||!n_())for(var n=t._pt;n;)n.r(e,n.d),n=n._next;else t.styles.revert()},get:Y_,aliases:d_,getSetter:function(e,t,n){var r=d_[t];return r&&r.indexOf(",")<0&&(t=r),t in i_&&t!==T_&&(e._gsap.x||Y_(e,"x"))?n&&t_===n?"scale"===t?k_:w_:(t_=n||{})&&("scale"===t?__:S_):e.style&&!nb(e.style[t])?x_:~t.indexOf("-")?b_:Ck(e,t)},core:{_removeProperty:F_,_getMatrix:tS}};Gk.utils.checkPrefix=D_,Gk.core.getStyleSaver=M_,yS=Nb((mS="x,y,z,scale,scaleX,scaleY,xPercent,yPercent")+","+(gS="rotation,rotationX,rotationY,skewX,skewY")+",transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective",function(e){i_[e]=1}),Nb(gS,function(e){Ux.units[e]="deg",Z_[e]=1}),d_[yS[13]]=mS+","+gS,Nb("0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY",function(e){var t=e.split(":");d_[t[1]]=yS[t[0]]}),Nb("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective",function(e){Ux.units[e]="px"}),Gk.registerPlugin(vS);var xS=Gk.registerPlugin(vS)||Gk;xS.core.Tween;const bS=cn.footer`
  margin-top: 120px;
  padding: 48px 28px 36px;
  background: linear-gradient(
    to bottom,
    rgba(245, 251, 247, 0.45),
    rgba(238, 244, 241, 0.92)
  );
  border-top: 1px solid rgba(20, 60, 40, 0.06);
`,wS=cn.div`
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
`,kS=cn.div`
  display: flex;
  flex-direction: column;

  @media (max-width: 768px) {
    align-items: center;
  }
`,_S=cn.div`
  font-size: 18px;
  font-weight: 600;
  color: #2a3a32;
`,SS=cn.div`
  font-size: 13px;
  color: #6c7c73;
`,jS=cn.div`
  display: flex;
  justify-content: center;
  gap: 24px;
`,TS=cn.a`
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
`,CS=cn.div`
  display: flex;
  justify-content: flex-end;
  gap: 14px;

  @media (max-width: 768px) {
    justify-content: center;
  }
`,ES=cn.a`
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
`,PS=cn.div`
  padding: 2rem;
  background: white;
  border-radius: 12px;
  max-height: 80vh;
  overflow-y: auto;
`,MS=cn.h2`
  font-size: 1.8rem;
  font-weight: 600;
  color: #2c3e50;
  margin-bottom: 1.5rem;
  text-align: center;
`,AS=cn.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`,RS=cn.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`,zS=cn.h3`
  font-size: 1.2rem;
  font-weight: 600;
  color: #34495e;
  margin-bottom: 0.5rem;
`,DS=cn.p`
  font-size: 1rem;
  line-height: 1.6;
  color: #555;
  margin: 0;
`,$S=()=>d.jsxs(PS,{children:[d.jsx(MS,{children:"Privacy Policy"}),d.jsxs(AS,{children:[d.jsx(RS,{children:d.jsx(DS,{children:"We respect your privacy and are committed to protecting your personal information."})}),d.jsxs(RS,{children:[d.jsx(zS,{children:"Information We Collect"}),d.jsx(DS,{children:"Any details shared through this website (such as name, contact number, email, health-related information for sessions, or inquiries) are used only for communication, service delivery, and appointment purposes."})]}),d.jsxs(RS,{children:[d.jsx(zS,{children:"How We Use Your Information"}),d.jsx(DS,{children:"Your personal information is used solely for:"}),d.jsxs(DS,{children:["• Communication regarding services and appointments",d.jsx("br",{}),"• Service delivery and session coordination",d.jsx("br",{}),"• Responding to your inquiries"]})]}),d.jsxs(RS,{children:[d.jsx(zS,{children:"Data Protection"}),d.jsx(DS,{children:"We do not sell, share, or distribute your personal data to third parties. Your information is kept secure and confidential."})]}),d.jsxs(RS,{children:[d.jsx(zS,{children:"Your Consent"}),d.jsx(DS,{children:"By using this website, you agree to this privacy policy."})]})]})]}),LS=cn.div`
  padding: 2rem;
  background: white;
  border-radius: 12px;
  max-height: 80vh;
  overflow-y: auto;
`,OS=cn.h2`
  font-size: 1.8rem;
  font-weight: 600;
  color: #2c3e50;
  margin-bottom: 1.5rem;
  text-align: center;
`,IS=cn.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`,NS=cn.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`,FS=cn.p`
  font-size: 1rem;
  line-height: 1.6;
  color: #555;
  margin: 0;
`,VS=()=>d.jsxs(LS,{children:[d.jsx(OS,{children:"Terms & Conditions"}),d.jsxs(IS,{children:[d.jsxs(NS,{children:[d.jsx(FS,{children:"• All yoga sessions and wellness services are provided for general health and well-being purposes."}),d.jsx(FS,{children:"• Clients should inform about any medical conditions, injuries, or pregnancy before starting sessions."}),d.jsx(FS,{children:"• Results may vary from person to person."}),d.jsx(FS,{children:"• Payments once made are non-refundable unless stated otherwise."}),d.jsx(FS,{children:"• Session schedules are subject to availability and prior booking."}),d.jsx(FS,{children:"• The instructor is not responsible for injuries caused due to incorrect practice outside guided sessions."})]}),d.jsx(NS,{children:d.jsx(FS,{children:"By booking or using our services, you agree to these terms and conditions."})})]})]});function BS(){const[e,t]=h.useState(!1),[n,r]=h.useState(!1);return d.jsxs(bS,{children:[d.jsxs(wS,{children:[d.jsxs(kS,{children:[d.jsx(_S,{children:"Balance with Shree"}),d.jsx(SS,{children:"Yoga • Nutrition • Ayurveda"})]}),d.jsxs(jS,{children:[d.jsx(TS,{as:"button",onClick:()=>t(!0),children:"Privacy Policy"}),d.jsx(TS,{as:"button",onClick:()=>r(!0),children:"Terms of Service"})]}),d.jsxs(CS,{children:[d.jsx(ES,{href:$g,target:"_blank",rel:"noopener noreferrer","aria-label":"Visit Balance with Shree on Instagram",children:d.jsx(Vi,{size:16})}),d.jsx(ES,{href:Og(),target:"_blank",rel:"noopener noreferrer","aria-label":"Chat with Balance with Shree on WhatsApp",children:d.jsx(Yi,{size:16})}),d.jsx(ES,{href:`mailto:${Mg}`,"aria-label":"Send an email to Balance with Shree",children:d.jsx(Ui,{size:16})})]})]}),d.jsx(Aa,{isOpen:e,onClose:()=>t(!1),children:d.jsx($S,{})}),d.jsx(Aa,{isOpen:n,onClose:()=>r(!1),children:d.jsx(VS,{})})]})}const US=cn.a`
  position: fixed;
  right: 18px;
  bottom: max(18px, env(safe-area-inset-bottom));
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
    right: 16px;
    width: 54px;
    height: 54px;
  }
`,WS=cn.span`
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
`;function YS(){return d.jsxs(US,{href:Og(Tg),target:"_blank",rel:"noopener noreferrer","aria-label":"Chat on WhatsApp",children:[d.jsx(Wi,{size:24,strokeWidth:1.9}),d.jsx(WS,{children:"Chat on WhatsApp"})]})}const HS={entranceDistance:120,leftOpacity:.22,rightOpacity:.18,leftParallaxIntensity:.036,rightParallaxIntensity:.06},qS={entranceDistance:56,opacity:.16,leftParallaxIntensity:.022,rightParallaxIntensity:.03},XS=()=>{const e=h.useRef(null),t=h.useRef(null);return h.useEffect(()=>{if(window.matchMedia("(prefers-reduced-motion: reduce)").matches)return;const n=e.current,r=t.current;if(!n||!r)return;const i=window.innerWidth<768,a=i?qS.entranceDistance:HS.entranceDistance,o=i?qS.opacity:HS.rightOpacity,s=i?qS.opacity:HS.leftOpacity,l=i?qS.rightParallaxIntensity:HS.rightParallaxIntensity,u=i?qS.leftParallaxIntensity:HS.leftParallaxIntensity,c=i?1.1:1.4,d=i?1.6:2.2;xS.set(n,{x:a,opacity:0}),xS.set(r,{x:-a,opacity:0});const h=xS.timeline({delay:.6});h.to(n,{x:0,opacity:o,duration:c,ease:"power3.out"},0).to(r,{x:0,opacity:s,duration:c,ease:"power3.out"},.08);const p=xS.quickTo(n,"y",{duration:d,ease:"power3.out"}),f=xS.quickTo(r,"y",{duration:d,ease:"power3.out"}),m=()=>{p(window.scrollY*l),f(window.scrollY*u)};return m(),window.addEventListener("scroll",m,{passive:!0}),()=>{window.removeEventListener("scroll",m),h.kill()}},[]),d.jsxs("div",{className:"site-wrapper",children:[d.jsx("div",{ref:e,className:"leaf-background leaf-right",children:d.jsx("div",{className:"leaf-inner"})}),d.jsx("div",{ref:t,className:"leaf-background leaf-left",children:d.jsx("div",{className:"leaf-inner"})}),d.jsxs("div",{className:"content",children:[d.jsx(Ei,{}),d.jsx(lx,{}),d.jsx(BS,{}),d.jsx(YS,{})]})]})};C.createRoot(document.getElementById("root")).render(d.jsx(p.StrictMode,{children:d.jsx(mn,{children:d.jsxs(tn,{theme:{colors:{primary:"#1f5f4a",secondary:"#7aa08f",bg:"#E1F1EB",dark:"#1f2a24",muted:"#5f6f66",white:"#ffffff",ivory:"#fbf9f3",textPrimary:"#1f2a24",textSecondary:"#2e6b55",textMuted:"#5f6f66",textWhite:"#ffffff",backgroundSoft:"#f4faf6",backgroundLight:"#ffffff",bgPrimary:"#f5fbf7",bgSecondary:"#edf6f1",borderLight:"rgba(31, 95, 74, 0.12)",primaryActive:"#1f5f4a",primaryActiveLight:"rgba(31, 95, 74, 0.14)",primaryActiveLightest:"rgba(31, 95, 74, 0.08)",warmAccent:"#d9b889"},fonts:{heading:"'Cormorant Garamond', serif",body:"'Inter', sans-serif",accent:"'Playfair Display', serif"},spacing:{xsmall:"4px",small:"8px",base:"12px",medium:"16px",large:"24px",xlarge:"32px",section:"120px"},radius:{small:"4px",medium:"8px",large:"12px",xl:"24px",pill:"999px"},shadows:{card:"0 18px 48px rgba(15, 60, 40, 0.12)",soft:"0 12px 28px rgba(15, 60, 40, 0.08)",button:"0 16px 36px rgba(31, 95, 74, 0.24)"}},children:[d.jsx(fn,{}),d.jsx(Yr,{children:d.jsx(XS,{})})]})})}));
