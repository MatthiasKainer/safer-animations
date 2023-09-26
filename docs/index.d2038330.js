!function(){var e,t,i,n,s="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{};/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */let r=window,o=r.ShadowRoot&&(void 0===r.ShadyCSS||r.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,l=Symbol(),a=new WeakMap;class d{constructor(e,t,i){if(this._$cssResult$=!0,i!==l)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=t}get styleSheet(){let e=this.o,t=this.t;if(o&&void 0===e){let i=void 0!==t&&1===t.length;i&&(e=a.get(t)),void 0===e&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),i&&a.set(t,e))}return e}toString(){return this.cssText}}let u=e=>new d("string"==typeof e?e:e+"",void 0,l),h=(e,...t)=>{let i=1===e.length?e[0]:t.reduce((t,i,n)=>t+(e=>{if(!0===e._$cssResult$)return e.cssText;if("number"==typeof e)return e;throw Error("Value passed to 'css' function must be a 'css' function result: "+e+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(i)+e[n+1],e[0]);return new d(i,e,l)},c=(e,t)=>{o?e.adoptedStyleSheets=t.map(e=>e instanceof CSSStyleSheet?e:e.styleSheet):t.forEach(t=>{let i=document.createElement("style"),n=r.litNonce;void 0!==n&&i.setAttribute("nonce",n),i.textContent=t.cssText,e.appendChild(i)})},p=o?e=>e:e=>e instanceof CSSStyleSheet?(e=>{let t="";for(let i of e.cssRules)t+=i.cssText;return u(t)})(e):e,f=window,v=f.trustedTypes,$=v?v.emptyScript:"",y=f.reactiveElementPolyfillSupport,_={toAttribute(e,t){switch(t){case Boolean:e=e?$:null;break;case Object:case Array:e=null==e?e:JSON.stringify(e)}return e},fromAttribute(e,t){let i=e;switch(t){case Boolean:i=null!==e;break;case Number:i=null===e?null:Number(e);break;case Object:case Array:try{i=JSON.parse(e)}catch(e){i=null}}return i}},m=(e,t)=>t!==e&&(t==t||e==e),g={attribute:!0,type:String,converter:_,reflect:!1,hasChanged:m},A="finalized";class b extends HTMLElement{constructor(){super(),this._$Ei=new Map,this.isUpdatePending=!1,this.hasUpdated=!1,this._$El=null,this._$Eu()}static addInitializer(e){var t;this.finalize(),(null!==(t=this.h)&&void 0!==t?t:this.h=[]).push(e)}static get observedAttributes(){this.finalize();let e=[];return this.elementProperties.forEach((t,i)=>{let n=this._$Ep(i,t);void 0!==n&&(this._$Ev.set(n,i),e.push(n))}),e}static createProperty(e,t=g){if(t.state&&(t.attribute=!1),this.finalize(),this.elementProperties.set(e,t),!t.noAccessor&&!this.prototype.hasOwnProperty(e)){let i="symbol"==typeof e?Symbol():"__"+e,n=this.getPropertyDescriptor(e,i,t);void 0!==n&&Object.defineProperty(this.prototype,e,n)}}static getPropertyDescriptor(e,t,i){return{get(){return this[t]},set(n){let s=this[e];this[t]=n,this.requestUpdate(e,s,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)||g}static finalize(){if(this.hasOwnProperty(A))return!1;this[A]=!0;let e=Object.getPrototypeOf(this);if(e.finalize(),void 0!==e.h&&(this.h=[...e.h]),this.elementProperties=new Map(e.elementProperties),this._$Ev=new Map,this.hasOwnProperty("properties")){let e=this.properties,t=[...Object.getOwnPropertyNames(e),...Object.getOwnPropertySymbols(e)];for(let i of t)this.createProperty(i,e[i])}return this.elementStyles=this.finalizeStyles(this.styles),!0}static finalizeStyles(e){let t=[];if(Array.isArray(e)){let i=new Set(e.flat(1/0).reverse());for(let e of i)t.unshift(p(e))}else void 0!==e&&t.push(p(e));return t}static _$Ep(e,t){let i=t.attribute;return!1===i?void 0:"string"==typeof i?i:"string"==typeof e?e.toLowerCase():void 0}_$Eu(){var e;this._$E_=new Promise(e=>this.enableUpdating=e),this._$AL=new Map,this._$Eg(),this.requestUpdate(),null===(e=this.constructor.h)||void 0===e||e.forEach(e=>e(this))}addController(e){var t,i;(null!==(t=this._$ES)&&void 0!==t?t:this._$ES=[]).push(e),void 0!==this.renderRoot&&this.isConnected&&(null===(i=e.hostConnected)||void 0===i||i.call(e))}removeController(e){var t;null===(t=this._$ES)||void 0===t||t.splice(this._$ES.indexOf(e)>>>0,1)}_$Eg(){this.constructor.elementProperties.forEach((e,t)=>{this.hasOwnProperty(t)&&(this._$Ei.set(t,this[t]),delete this[t])})}createRenderRoot(){var e;let t=null!==(e=this.shadowRoot)&&void 0!==e?e:this.attachShadow(this.constructor.shadowRootOptions);return c(t,this.constructor.elementStyles),t}connectedCallback(){var e;void 0===this.renderRoot&&(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),null===(e=this._$ES)||void 0===e||e.forEach(e=>{var t;return null===(t=e.hostConnected)||void 0===t?void 0:t.call(e)})}enableUpdating(e){}disconnectedCallback(){var e;null===(e=this._$ES)||void 0===e||e.forEach(e=>{var t;return null===(t=e.hostDisconnected)||void 0===t?void 0:t.call(e)})}attributeChangedCallback(e,t,i){this._$AK(e,i)}_$EO(e,t,i=g){var n;let s=this.constructor._$Ep(e,i);if(void 0!==s&&!0===i.reflect){let r=(void 0!==(null===(n=i.converter)||void 0===n?void 0:n.toAttribute)?i.converter:_).toAttribute(t,i.type);this._$El=e,null==r?this.removeAttribute(s):this.setAttribute(s,r),this._$El=null}}_$AK(e,t){var i;let n=this.constructor,s=n._$Ev.get(e);if(void 0!==s&&this._$El!==s){let e=n.getPropertyOptions(s),r="function"==typeof e.converter?{fromAttribute:e.converter}:void 0!==(null===(i=e.converter)||void 0===i?void 0:i.fromAttribute)?e.converter:_;this._$El=s,this[s]=r.fromAttribute(t,e.type),this._$El=null}}requestUpdate(e,t,i){let n=!0;void 0!==e&&(((i=i||this.constructor.getPropertyOptions(e)).hasChanged||m)(this[e],t)?(this._$AL.has(e)||this._$AL.set(e,t),!0===i.reflect&&this._$El!==e&&(void 0===this._$EC&&(this._$EC=new Map),this._$EC.set(e,i))):n=!1),!this.isUpdatePending&&n&&(this._$E_=this._$Ej())}async _$Ej(){this.isUpdatePending=!0;try{await this._$E_}catch(e){Promise.reject(e)}let e=this.scheduleUpdate();return null!=e&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var e;if(!this.isUpdatePending)return;this.hasUpdated,this._$Ei&&(this._$Ei.forEach((e,t)=>this[t]=e),this._$Ei=void 0);let t=!1,i=this._$AL;try{(t=this.shouldUpdate(i))?(this.willUpdate(i),null===(e=this._$ES)||void 0===e||e.forEach(e=>{var t;return null===(t=e.hostUpdate)||void 0===t?void 0:t.call(e)}),this.update(i)):this._$Ek()}catch(e){throw t=!1,this._$Ek(),e}t&&this._$AE(i)}willUpdate(e){}_$AE(e){var t;null===(t=this._$ES)||void 0===t||t.forEach(e=>{var t;return null===(t=e.hostUpdated)||void 0===t?void 0:t.call(e)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$Ek(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$E_}shouldUpdate(e){return!0}update(e){void 0!==this._$EC&&(this._$EC.forEach((e,t)=>this._$EO(t,this[t],e)),this._$EC=void 0),this._$Ek()}updated(e){}firstUpdated(e){}}b[A]=!0,b.elementProperties=new Map,b.elementStyles=[],b.shadowRootOptions={mode:"open"},null==y||y({ReactiveElement:b}),(null!==(e=f.reactiveElementVersions)&&void 0!==e?e:f.reactiveElementVersions=[]).push("1.6.3");let E=window,w=E.trustedTypes,S=w?w.createPolicy("lit-html",{createHTML:e=>e}):void 0,x="$lit$",O=`lit$${(Math.random()+"").slice(9)}$`,C="?"+O,P=`<${C}>`,U=document,j=()=>U.createComment(""),R=e=>null===e||"object"!=typeof e&&"function"!=typeof e,T=Array.isArray,k=e=>T(e)||"function"==typeof(null==e?void 0:e[Symbol.iterator]),H="[ 	\n\f\r]",N=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,M=/-->/g,L=/>/g,I=RegExp(`>|${H}(?:([^\\s"'>=/]+)(${H}*=${H}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),D=/'/g,W=/"/g,q=/^(?:script|style|textarea|title)$/i,B=e=>(t,...i)=>({_$litType$:e,strings:t,values:i}),z=B(1),V=(B(2),Symbol.for("lit-noChange")),J=Symbol.for("lit-nothing"),K=new WeakMap,Z=U.createTreeWalker(U,129,null,!1);function G(e,t){if(!Array.isArray(e)||!e.hasOwnProperty("raw"))throw Error("invalid template strings array");return void 0!==S?S.createHTML(t):t}let Y=(e,t)=>{let i=e.length-1,n=[],s,r=2===t?"<svg>":"",o=N;for(let t=0;t<i;t++){let i=e[t],l,a,d=-1,u=0;for(;u<i.length&&(o.lastIndex=u,null!==(a=o.exec(i)));)u=o.lastIndex,o===N?"!--"===a[1]?o=M:void 0!==a[1]?o=L:void 0!==a[2]?(q.test(a[2])&&(s=RegExp("</"+a[2],"g")),o=I):void 0!==a[3]&&(o=I):o===I?">"===a[0]?(o=null!=s?s:N,d=-1):void 0===a[1]?d=-2:(d=o.lastIndex-a[2].length,l=a[1],o=void 0===a[3]?I:'"'===a[3]?W:D):o===W||o===D?o=I:o===M||o===L?o=N:(o=I,s=void 0);let h=o===I&&e[t+1].startsWith("/>")?" ":"";r+=o===N?i+P:d>=0?(n.push(l),i.slice(0,d)+x+i.slice(d)+O+h):i+O+(-2===d?(n.push(void 0),t):h)}return[G(e,r+(e[i]||"<?>")+(2===t?"</svg>":"")),n]};class F{constructor({strings:e,_$litType$:t},i){let n;this.parts=[];let s=0,r=0,o=e.length-1,l=this.parts,[a,d]=Y(e,t);if(this.el=F.createElement(a,i),Z.currentNode=this.el.content,2===t){let e=this.el.content,t=e.firstChild;t.remove(),e.append(...t.childNodes)}for(;null!==(n=Z.nextNode())&&l.length<o;){if(1===n.nodeType){if(n.hasAttributes()){let e=[];for(let t of n.getAttributeNames())if(t.endsWith(x)||t.startsWith(O)){let i=d[r++];if(e.push(t),void 0!==i){let e=n.getAttribute(i.toLowerCase()+x).split(O),t=/([.?@])?(.*)/.exec(i);l.push({type:1,index:s,name:t[2],strings:e,ctor:"."===t[1]?ei:"?"===t[1]?es:"@"===t[1]?er:et})}else l.push({type:6,index:s})}for(let t of e)n.removeAttribute(t)}if(q.test(n.tagName)){let e=n.textContent.split(O),t=e.length-1;if(t>0){n.textContent=w?w.emptyScript:"";for(let i=0;i<t;i++)n.append(e[i],j()),Z.nextNode(),l.push({type:2,index:++s});n.append(e[t],j())}}}else if(8===n.nodeType){if(n.data===C)l.push({type:2,index:s});else{let e=-1;for(;-1!==(e=n.data.indexOf(O,e+1));)l.push({type:7,index:s}),e+=O.length-1}}s++}}static createElement(e,t){let i=U.createElement("template");return i.innerHTML=e,i}}function Q(e,t,i=e,n){var s,r,o;if(t===V)return t;let l=void 0!==n?null===(s=i._$Co)||void 0===s?void 0:s[n]:i._$Cl,a=R(t)?void 0:t._$litDirective$;return(null==l?void 0:l.constructor)!==a&&(null===(r=null==l?void 0:l._$AO)||void 0===r||r.call(l,!1),void 0===a?l=void 0:(l=new a(e))._$AT(e,i,n),void 0!==n?(null!==(o=i._$Co)&&void 0!==o?o:i._$Co=[])[n]=l:i._$Cl=l),void 0!==l&&(t=Q(e,l._$AS(e,t.values),l,n)),t}class X{constructor(e,t){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=t}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){var t;let{el:{content:i},parts:n}=this._$AD,s=(null!==(t=null==e?void 0:e.creationScope)&&void 0!==t?t:U).importNode(i,!0);Z.currentNode=s;let r=Z.nextNode(),o=0,l=0,a=n[0];for(;void 0!==a;){if(o===a.index){let t;2===a.type?t=new ee(r,r.nextSibling,this,e):1===a.type?t=new a.ctor(r,a.name,a.strings,this,e):6===a.type&&(t=new eo(r,this,e)),this._$AV.push(t),a=n[++l]}o!==(null==a?void 0:a.index)&&(r=Z.nextNode(),o++)}return Z.currentNode=U,s}v(e){let t=0;for(let i of this._$AV)void 0!==i&&(void 0!==i.strings?(i._$AI(e,i,t),t+=i.strings.length-2):i._$AI(e[t])),t++}}class ee{constructor(e,t,i,n){var s;this.type=2,this._$AH=J,this._$AN=void 0,this._$AA=e,this._$AB=t,this._$AM=i,this.options=n,this._$Cp=null===(s=null==n?void 0:n.isConnected)||void 0===s||s}get _$AU(){var e,t;return null!==(t=null===(e=this._$AM)||void 0===e?void 0:e._$AU)&&void 0!==t?t:this._$Cp}get parentNode(){let e=this._$AA.parentNode,t=this._$AM;return void 0!==t&&11===(null==e?void 0:e.nodeType)&&(e=t.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,t=this){R(e=Q(this,e,t))?e===J||null==e||""===e?(this._$AH!==J&&this._$AR(),this._$AH=J):e!==this._$AH&&e!==V&&this._(e):void 0!==e._$litType$?this.g(e):void 0!==e.nodeType?this.$(e):k(e)?this.T(e):this._(e)}k(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}$(e){this._$AH!==e&&(this._$AR(),this._$AH=this.k(e))}_(e){this._$AH!==J&&R(this._$AH)?this._$AA.nextSibling.data=e:this.$(U.createTextNode(e)),this._$AH=e}g(e){var t;let{values:i,_$litType$:n}=e,s="number"==typeof n?this._$AC(e):(void 0===n.el&&(n.el=F.createElement(G(n.h,n.h[0]),this.options)),n);if((null===(t=this._$AH)||void 0===t?void 0:t._$AD)===s)this._$AH.v(i);else{let e=new X(s,this),t=e.u(this.options);e.v(i),this.$(t),this._$AH=e}}_$AC(e){let t=K.get(e.strings);return void 0===t&&K.set(e.strings,t=new F(e)),t}T(e){T(this._$AH)||(this._$AH=[],this._$AR());let t=this._$AH,i,n=0;for(let s of e)n===t.length?t.push(i=new ee(this.k(j()),this.k(j()),this,this.options)):i=t[n],i._$AI(s),n++;n<t.length&&(this._$AR(i&&i._$AB.nextSibling,n),t.length=n)}_$AR(e=this._$AA.nextSibling,t){var i;for(null===(i=this._$AP)||void 0===i||i.call(this,!1,!0,t);e&&e!==this._$AB;){let t=e.nextSibling;e.remove(),e=t}}setConnected(e){var t;void 0===this._$AM&&(this._$Cp=e,null===(t=this._$AP)||void 0===t||t.call(this,e))}}class et{constructor(e,t,i,n,s){this.type=1,this._$AH=J,this._$AN=void 0,this.element=e,this.name=t,this._$AM=n,this.options=s,i.length>2||""!==i[0]||""!==i[1]?(this._$AH=Array(i.length-1).fill(new String),this.strings=i):this._$AH=J}get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}_$AI(e,t=this,i,n){let s=this.strings,r=!1;if(void 0===s)(r=!R(e=Q(this,e,t,0))||e!==this._$AH&&e!==V)&&(this._$AH=e);else{let n,o;let l=e;for(e=s[0],n=0;n<s.length-1;n++)(o=Q(this,l[i+n],t,n))===V&&(o=this._$AH[n]),r||(r=!R(o)||o!==this._$AH[n]),o===J?e=J:e!==J&&(e+=(null!=o?o:"")+s[n+1]),this._$AH[n]=o}r&&!n&&this.j(e)}j(e){e===J?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,null!=e?e:"")}}class ei extends et{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===J?void 0:e}}let en=w?w.emptyScript:"";class es extends et{constructor(){super(...arguments),this.type=4}j(e){e&&e!==J?this.element.setAttribute(this.name,en):this.element.removeAttribute(this.name)}}class er extends et{constructor(e,t,i,n,s){super(e,t,i,n,s),this.type=5}_$AI(e,t=this){var i;if((e=null!==(i=Q(this,e,t,0))&&void 0!==i?i:J)===V)return;let n=this._$AH,s=e===J&&n!==J||e.capture!==n.capture||e.once!==n.once||e.passive!==n.passive,r=e!==J&&(n===J||s);s&&this.element.removeEventListener(this.name,this,n),r&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){var t,i;"function"==typeof this._$AH?this._$AH.call(null!==(i=null===(t=this.options)||void 0===t?void 0:t.host)&&void 0!==i?i:this.element,e):this._$AH.handleEvent(e)}}class eo{constructor(e,t,i){this.element=e,this.type=6,this._$AN=void 0,this._$AM=t,this.options=i}get _$AU(){return this._$AM._$AU}_$AI(e){Q(this,e)}}let el=E.litHtmlPolyfillSupport;null==el||el(F,ee),(null!==(t=E.litHtmlVersions)&&void 0!==t?t:E.litHtmlVersions=[]).push("2.8.0");let ea=(e,t,i)=>{var n,s;let r=null!==(n=null==i?void 0:i.renderBefore)&&void 0!==n?n:t,o=r._$litPart$;if(void 0===o){let e=null!==(s=null==i?void 0:i.renderBefore)&&void 0!==s?s:null;r._$litPart$=o=new ee(t.insertBefore(j(),e),e,void 0,null!=i?i:{})}return o._$AI(e),o};class ed extends b{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var e,t;let i=super.createRenderRoot();return null!==(e=(t=this.renderOptions).renderBefore)&&void 0!==e||(t.renderBefore=i.firstChild),i}update(e){let t=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Do=ea(t,this.renderRoot,this.renderOptions)}connectedCallback(){var e;super.connectedCallback(),null===(e=this._$Do)||void 0===e||e.setConnected(!0)}disconnectedCallback(){var e;super.disconnectedCallback(),null===(e=this._$Do)||void 0===e||e.setConnected(!1)}render(){return V}}ed.finalized=!0,ed._$litElement$=!0,null===(i=globalThis.litElementHydrateSupport)||void 0===i||i.call(globalThis,{LitElement:ed});let eu=globalThis.litElementPolyfillSupport;null==eu||eu({LitElement:ed}),(null!==(n=globalThis.litElementVersions)&&void 0!==n?n:globalThis.litElementVersions=[]).push("3.3.3");let eh=e=>"object"==typeof e&&null!==e,ec=(e,t="")=>{let i={},n=(e,t="")=>(// This creates an :is block if there are multiple keys in the 
    //  parent. This query is not robust and can be improved
    t=t.indexOf(",")>-1&&0!==t.indexOf(":is")?`:is(${t})`:t,Object.entries(e).map(([e,s])=>(// we support nest because we don't disallow arbitrary positions for & yet
        //  so it's more accidentaly. Remove it without taking action
        e=e.replace(/\@nest/gi,""),""!==t&&[".",":",">"].some(t=>e.startsWith(t))&&!e.includes("&")&&(e="& "+e),0===// Replace any occurence of & with the parent in the key
        (e=e.replace(/\&/gi,t)).indexOf("@media"))?(i[e]=i[e]||"",i[e]+=s?s.filter(eh).reduce((e,i)=>e+=`${n(i,t)} `,""):null,""):0===e.indexOf("@")?` ${e} { ${s.filter(e=>!eh(e)).join(";")}${s.filter(eh).map(t=>n(t,e)).join(" ")} }`:s?`${e} { ${s.filter(e=>!eh(e)).join(";")} } ${s.filter(eh).map(t=>n(t,e)).join(" ")}`:`${e.trim()};`).join("").trim()),s=n(e,t);return s+Object.entries(i).reduce((e,[t,i])=>e+=i?`${t} { ${i.trimEnd()} }`:`${t};`," ").trimEnd()},ep="STATE_KEY",ef="STATE_VALUE",ev="NODE_AT_GROUP_KEY",e$="NODE_AT_GROUP_VALUE",ey="COMMENT_START",e_=(e,t=1)=>{let i=[],n="";for(let s=0;s<e.length;s++){let r=e[s];if(";"===r)i.push(n.trim()),n="";else if("@"===r&&""===n.trim()){// inside an element, an at-group can create another
//  level of nesting
let{node:n,endIndex:r}=em(e.substr(s),t+1);i.push(n),s+=r}else if("&"===r&&""===n.trim()){// if this is a nested node, parse the element
//  as a nested node
let{node:n,endIndex:r}=em(e.substr(s),t+1);i.push(n),s+=r}else if([".",":",">"].some(e=>r===e)&&""===n.trim()){// if this is a nested class/selector, or a :-selected element, parse
//  as a nested node
let{node:n,endIndex:r}=em(e.substr(s-1),t+1);i.push(n),s+=r}else{if("}"===r)return""!==n.trim()&&i.push(n.trim()),{val:i,endIndex:s-1};n+=r}}return{val:i,endIndex:e.length-1}},em=(e,t=0)=>{let i={},n=ep,s=ep,r="",o=0;for(let a=0;a<e.length;a++){let d=e[a];if("}"===d&&t>0)return{node:i,endIndex:a};if(n===e$||"}"!==d)switch("/"===d&&"*"===e[a+1]&&(// switching to comment state if we have a /* series
//  and continue after the *
s=n,n=ey,a+=2),n){case ey:"*"===d&&"/"===e[a+1]&&(n=s,a+=2,o=a);break;case ep:if(""===r.trim()&&"@"===d.trim())// if a key is starting with an @
//  this is an at-group
n=ev,r+=d.trim();else if("{"===d)// read the body for the key. In typical elements this 
//  can only be one
n=ef,i[r=r.trim()]=i[r]||[];else if(":"===d&&" "===e[a+1]){// this is when we were thinking this was an object when really this is pair - can only happen in @-blocks
// resetting index, we have to read the key again
a=o;let{val:i,endIndex:n}=e_(e.substr(a),t+1);return{node:i,endIndex:a+n}}else r+=d;break;case ef:let{val:u,endIndex:h}=e_(e.substr(a),t+1);a+=h,i[r]=[...i[r],...u],n=ep,r="",o=a;break;case ev:";"===d?(// This is for short-at-keys like '@charset "utf-8";' only
i[r]=void 0,r="",o=a,n=ep):"{"===d?(r=r.trim(),l(em(e.substr(a+1),t+1)),n=e$):r+=d;break;case e$:""===d.trim()||("}"!==d?//  so as long as we don't have an '}' continue
//  to read through the nodes 
l(em(e.substr(a),t+1)):(r="",o=a,n=ep))}// helpers for the current scope - this might look suboptimal 
//  (creating a function in a loop), but it seems it's inlined
//  in all browsers, so no performance impact
function l(e){i[r.trim()]=[...i[r]||[],...Array.isArray(e.node)?e.node:[e.node]],a+=e.endIndex+1}}return{node:i,endIndex:e.length}},eg=(e,...t)=>h`${u(function(e,...t){let i=e[0];for(let n=0;n<t.length;n++)i+=t[n]+e[n+1];return ec(em(i).node)}(e,...t))}`;function eA(e,[t,i]){return t.toLowerCase()!==t?e[t]=Object.assign(Object.assign({},i),{attribute:t.replace(/[A-Z]/g,"-$&").toLowerCase()}):e[t]=i,e}let eb=e=>Object.entries(e||{}).reduce((e,[t,i])=>eA(e,[t,"boolean"==typeof i?{type:Boolean}:Array.isArray(i)?{type:Array}:"object"==typeof i?{type:Object}:{}]),{}),eE=e=>void 0!==e&&void 0!==e.props?(e.props||[]).reduce((e,t)=>(Object.entries(t).forEach(t=>e=eA(e,t)),e),{}):eb(null==e?void 0:e.defaults),ew={};var eS="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:void 0!==s?s:"undefined"!=typeof self?self:{},ex={},eO={},eC={};Object.defineProperty(eC,"t",{value:!0}),eC.shallowClone=void 0,eC.shallowClone=function(e){return"object"!=typeof e||!e||e instanceof Date||e instanceof RegExp?e:Array.isArray(e)?[...e]:Object.assign({},e)};var eP={};function eU(e){if(!e.dispatchEvent||!e.requestUpdate)throw Error("Element missing required functions (dispatchEvent/requestUpdate)");return e}Object.defineProperty(eP,"t",{value:!0}),eP.withWorkflow=eP.withReducer=eP.withState=eP.decorate=eP.asUpdateableLitElement=void 0,eP.asUpdateableLitElement=eU;let ej="__registered_states";function eR(e){if(e[ej])return e;let t=eU(e),i=t.updated;return e[ej]={index:0,count:0,states:[],reducers:[],workflows:[]},t.updated=t=>(e[ej].index=0,i(t)),e}eP.decorate=eR,eP.withState=function(e,t,i={}){let n=eR(e),{index:s,count:r}=n[ej];return s===r?(n[ej].index++,n[ej].count++,n[ej].states.push(t),t):(n[ej].index++,i.updateDefault&&n[ej].states[s].inject(t.get()),n[ej].states[s])},eP.withReducer=function(e,t){let i=eR(e),{index:n,count:s,reducers:r}=i[ej];return n!==s||r[n-1]?i[ej].reducers[n-1]:(i[ej].reducers[n-1]=t,t)},eP.withWorkflow=function(e,t){let i=eR(e),{index:n,count:s,workflows:r}=i[ej];return n!==s||r[n-1]?i[ej].workflows[n-1]:(i[ej].workflows[n-1]=t,t)};var eT=eS&&eS.o||function(e,t,i,n){return new(i||(i=Promise))(function(s,r){function o(e){try{a(n.next(e))}catch(e){r(e)}}function l(e){try{a(n.throw(e))}catch(e){r(e)}}function a(e){var t;e.done?s(e.value):((t=e.value)instanceof i?t:new i(function(e){e(t)})).then(o,l)}a((n=n.apply(e,t||[])).next())})};Object.defineProperty(eO,"t",{value:!0}),eO.useState=void 0,eO.useState=(e,t,i={})=>{let n=(0,eC.shallowClone)(t),s=[()=>eT(void 0,void 0,void 0,function*(){return e.requestUpdate(),yield e.updateComplete})],r=e=>eT(void 0,void 0,void 0,function*(){n!==e&&(n=(0,eC.shallowClone)(e),yield Promise.all(s.map(e=>e(n))))});return(0,eP.withState)(e,new class{set value(e){r(e)}get value(){return n}publish(e){r(e)}set(e){return eT(this,void 0,void 0,function*(){yield r(e)})}subscribe(e){s.push(e)}inject(e){n=e}get(){return n}getState(){return n}},i)};var ek={},eH=eS&&eS.o||function(e,t,i,n){return new(i||(i=Promise))(function(s,r){function o(e){try{a(n.next(e))}catch(e){r(e)}}function l(e){try{a(n.throw(e))}catch(e){r(e)}}function a(e){var t;e.done?s(e.value):((t=e.value)instanceof i?t:new i(function(e){e(t)})).then(o,l)}a((n=n.apply(e,t||[])).next())})};Object.defineProperty(ek,"t",{value:!0}),ek.useReducer=void 0,ek.useReducer=(e,t,i,n={})=>{let{get:s,set:r}=(0,eO.useState)(e,i,n),o=[],l=(i,l)=>eH(void 0,void 0,void 0,function*(){let a=t(s());return a[i]&&(yield r((yield a[i](l))),o.forEach(e=>e(i,s())),n.dispatchEvent&&e.dispatchEvent(new CustomEvent(i,{detail:s()}))),s()});return(0,eP.withReducer)(e,{get:s,subscribe:e=>o.push(e),when:(e,t)=>o.push((i,n)=>i===e&&t(n)),set:l,dispatch:l})};var eN={},eM=eS&&eS.o||function(e,t,i,n){return new(i||(i=Promise))(function(s,r){function o(e){try{a(n.next(e))}catch(e){r(e)}}function l(e){try{a(n.throw(e))}catch(e){r(e)}}function a(e){var t;e.done?s(e.value):((t=e.value)instanceof i?t:new i(function(e){e(t)})).then(o,l)}a((n=n.apply(e,t||[])).next())})};Object.defineProperty(eN,"t",{value:!0}),eN.useWorkflow=void 0,eN.useWorkflow=(e,t)=>{let i=Object.entries(t).reduce((t,[i,{reducer:n,initialState:s}])=>(t[i]=(0,ex.useReducer)(e,n,s),t),{}),n={},s={},r=[],o=e=>(r.push({type:"projections",args:[e]}),i[e]?i[e].get():void 0);return(0,eP.withWorkflow)(e,{addActivity:(e,t)=>eM(void 0,void 0,void 0,function*(){var s,o;for(let l of(r.push({type:"addActivity",args:[e,t]}),yield Promise.all(null!==(o=null===(s=n[e])||void 0===s?void 0:s.map(e=>e(t)))&&void 0!==o?o:[]),Object.values(i)))yield l.dispatch(e,t)}),addSideeffect:(e,t)=>{r.push({type:"addSideeffect",args:[e,t]}),n[e]=[...n[e]||[],t]},projections:o,addCompensation:(e,t)=>{r.push({type:"addCompensation",args:[e,t]}),s[e]=[...s[e]||[],t]},compensate:()=>eM(void 0,void 0,void 0,function*(){for(let[e,t]of(r.push({type:"compensate",args:[]}),Object.entries(s)))for(let n of t)for(let t of Object.values(i))yield t.dispatch(e,n)}),after:(e,t,i)=>{r.push({type:"after",args:[e,t,i]});let n=()=>eM(void 0,void 0,void 0,function*(){r.some(e=>((e,t)=>{if(e.type!==t.type)return!1;for(let i=0;i<t.args.length;i++)if(e.args[i]!==t.args[i])return!1;return!0})(e,t))||(new Date(Date.now())>e?yield i():setTimeout(n,100))});n()},plan:e=>eM(void 0,void 0,void 0,function*(){for(let[i,n]of Object.entries(e))if(t[i]&&JSON.stringify(o(i))===JSON.stringify(t[i].initialState))return yield n();return e[""]?yield e[""]():Promise.resolve(null)}),history:()=>[...r]})},Object.defineProperty(ex,"t",{value:!0}),ex.useWorkflow=ex.useReducer=ex.useState=void 0,Object.defineProperty(ex,"useState",{enumerable:!0,get:function(){return eO.useState}}),Object.defineProperty(ex,"useReducer",{enumerable:!0,get:function(){return ek.useReducer}}),Object.defineProperty(ex,"useWorkflow",{enumerable:!0,get:function(){return eN.useWorkflow}});var eL={},eI={},eD={};function eW(e){if(!e.dispatchEvent||!e.requestUpdate)throw Error("Element missing required functions (dispatchEvent/requestUpdate)");return e}Object.defineProperty(eD,"t",{value:!0}),eD.withEffect=eD.decorate=eD.asUpdateableLitElement=void 0,eD.asUpdateableLitElement=eW;let eq="__registered_effects";function eB(e){if(e[eq])return e;let t=eW(e),i=t.updated;return e[eq]={index:0,count:0,effects:[]},t.updated=t=>(e[eq].index=0,i(t)),e}function ez(e,t,i){let n=(0,eD.withEffect)(e,{on:t,observe:["__initial__dirty"]});n.observe.some((e,t)=>i[t]!==e)&&n.on(),n.observe=i}eD.decorate=eB,eD.withEffect=function(e,t){let i=eB(e),{index:n,count:s}=i[eq];return n===s?(i[eq].index++,i[eq].count++,i[eq].effects.push(t),t):(i[eq].index++,i[eq].effects[n])},Object.defineProperty(eI,"t",{value:!0}),eI.useOnce=eI.useEffect=void 0,eI.useEffect=ez,eI.useOnce=(e,t)=>ez(e,t,[]),Object.defineProperty(eL,"t",{value:!0}),eL.useOnce=eL.useEffect=void 0,Object.defineProperty(eL,"useEffect",{enumerable:!0,get:function(){return eI.useEffect}}),Object.defineProperty(eL,"useOnce",{enumerable:!0,get:function(){return eI.useOnce}}),eL.useEffect;var eV=eL.useOnce;ex.useReducer,ex.useState,ex.useWorkflow;let eJ=(e,t,i,n,s)=>eg`
  :host {
    display: inline-block;
  }
  ::slotted(*) {
    animation: ${e};
    animation-delay: ${i};
    animation-duration: ${t};
    animation-iteration-count: ${n};
    animation-fill-mode: ${s} !important;
  }`;document.querySelector("[data-animation-restart]").addEventListener("click",e=>{let{animationRestart:t}=e.target.dataset;t&&window.postMessage({type:"animation-restart",target:t},window.location.origin)}),((e,t,i)=>{if(ew[e])return ew[e];customElements.define(e,class extends ed{constructor(){super(),this.content=z``,void 0!==i&&void 0!==i.defaults&&Object.entries(i.defaults).forEach(([e,t])=>{this[e]=t})}static get properties(){return eE(i)}static get styles(){return null==i?void 0:i.styles}async performUpdate(){return this.content=await Promise.resolve(t(this)).catch(e=>(console.error(e),z`<slot name="error">${e}</slot>`)),super.performUpdate()}render(){return this.content}});let n=document.createElement(e);return ew[e]=n})("animated-element",e=>{let{animation:t,duration:i,delay:n,repeat:s,name:r,mode:o}=e;return console.log({animation:t,duration:i,delay:n,repeat:s}),t&&(e.shadowRoot.adoptedStyleSheets=[eJ(t,i,n,s,o).styleSheet]),eV(e,()=>{window.addEventListener("message",t=>{t.origin===window.location.origin&&"animation-restart"===t.data.type&&t.data.target===r&&((e.shadowRoot.querySelector("slot")?.assignedElements()[0]?.style).animation="none",e.shadowRoot.querySelector("slot")?.assignedElements()[0]?.offsetHeight,(e.shadowRoot.querySelector("slot")?.assignedElements()[0]?.style).animation=null)})}),z`<slot></slot>`},{defaults:{name:"",animation:void 0,duration:"2s",delay:"0s",repeat:1,mode:"both"}})}();//# sourceMappingURL=index.d2038330.js.map

//# sourceMappingURL=index.d2038330.js.map