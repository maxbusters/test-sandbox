(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerPolicy&&(i.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?i.credentials="include":s.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(s){if(s.ep)return;s.ep=!0;const i=n(s);fetch(s.href,i)}})();function mi(e,t){const n=Object.create(null),r=e.split(",");for(let s=0;s<r.length;s++)n[r[s]]=!0;return t?s=>!!n[s.toLowerCase()]:s=>!!n[s]}const ue={},sn=[],je=()=>{},Ku=()=>!1,qu=/^on[^a-z]/,Xr=e=>qu.test(e),vi=e=>e.startsWith("onUpdate:"),pe=Object.assign,yi=(e,t)=>{const n=e.indexOf(t);n>-1&&e.splice(n,1)},Gu=Object.prototype.hasOwnProperty,te=(e,t)=>Gu.call(e,t),j=Array.isArray,on=e=>Zr(e)==="[object Map]",fc=e=>Zr(e)==="[object Set]",K=e=>typeof e=="function",ge=e=>typeof e=="string",_i=e=>typeof e=="symbol",fe=e=>e!==null&&typeof e=="object",dc=e=>fe(e)&&K(e.then)&&K(e.catch),hc=Object.prototype.toString,Zr=e=>hc.call(e),Yu=e=>Zr(e).slice(8,-1),pc=e=>Zr(e)==="[object Object]",bi=e=>ge(e)&&e!=="NaN"&&e[0]!=="-"&&""+parseInt(e,10)===e,Ir=mi(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),Qr=e=>{const t=Object.create(null);return n=>t[n]||(t[n]=e(n))},Ju=/-(\w)/g,nt=Qr(e=>e.replace(Ju,(t,n)=>n?n.toUpperCase():"")),Xu=/\B([A-Z])/g,yn=Qr(e=>e.replace(Xu,"-$1").toLowerCase()),er=Qr(e=>e.charAt(0).toUpperCase()+e.slice(1)),ys=Qr(e=>e?`on${er(e)}`:""),$n=(e,t)=>!Object.is(e,t),_s=(e,t)=>{for(let n=0;n<e.length;n++)e[n](t)},Nr=(e,t,n)=>{Object.defineProperty(e,t,{configurable:!0,enumerable:!1,value:n})},Zu=e=>{const t=parseFloat(e);return isNaN(t)?e:t},Qu=e=>{const t=ge(e)?Number(e):NaN;return isNaN(t)?e:t};let ho;const Bs=()=>ho||(ho=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function Ei(e){if(j(e)){const t={};for(let n=0;n<e.length;n++){const r=e[n],s=ge(r)?rf(r):Ei(r);if(s)for(const i in s)t[i]=s[i]}return t}else{if(ge(e))return e;if(fe(e))return e}}const ef=/;(?![^(]*\))/g,tf=/:([^]+)/,nf=/\/\*[^]*?\*\//g;function rf(e){const t={};return e.replace(nf,"").split(ef).forEach(n=>{if(n){const r=n.split(tf);r.length>1&&(t[r[0].trim()]=r[1].trim())}}),t}function wi(e){let t="";if(ge(e))t=e;else if(j(e))for(let n=0;n<e.length;n++){const r=wi(e[n]);r&&(t+=r+" ")}else if(fe(e))for(const n in e)e[n]&&(t+=n+" ");return t.trim()}const sf="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",of=mi(sf);function gc(e){return!!e||e===""}const rb=e=>ge(e)?e:e==null?"":j(e)||fe(e)&&(e.toString===hc||!K(e.toString))?JSON.stringify(e,mc,2):String(e),mc=(e,t)=>t&&t.__v_isRef?mc(e,t.value):on(t)?{[`Map(${t.size})`]:[...t.entries()].reduce((n,[r,s])=>(n[`${r} =>`]=s,n),{})}:fc(t)?{[`Set(${t.size})`]:[...t.values()]}:fe(t)&&!j(t)&&!pc(t)?String(t):t;let Re;class vc{constructor(t=!1){this.detached=t,this._active=!0,this.effects=[],this.cleanups=[],this.parent=Re,!t&&Re&&(this.index=(Re.scopes||(Re.scopes=[])).push(this)-1)}get active(){return this._active}run(t){if(this._active){const n=Re;try{return Re=this,t()}finally{Re=n}}}on(){Re=this}off(){Re=this.parent}stop(t){if(this._active){let n,r;for(n=0,r=this.effects.length;n<r;n++)this.effects[n].stop();for(n=0,r=this.cleanups.length;n<r;n++)this.cleanups[n]();if(this.scopes)for(n=0,r=this.scopes.length;n<r;n++)this.scopes[n].stop(!0);if(!this.detached&&this.parent&&!t){const s=this.parent.scopes.pop();s&&s!==this&&(this.parent.scopes[this.index]=s,s.index=this.index)}this.parent=void 0,this._active=!1}}}function af(e){return new vc(e)}function cf(e,t=Re){t&&t.active&&t.effects.push(e)}function lf(){return Re}function uf(e){Re&&Re.cleanups.push(e)}const Ii=e=>{const t=new Set(e);return t.w=0,t.n=0,t},yc=e=>(e.w&Ot)>0,_c=e=>(e.n&Ot)>0,ff=({deps:e})=>{if(e.length)for(let t=0;t<e.length;t++)e[t].w|=Ot},df=e=>{const{deps:t}=e;if(t.length){let n=0;for(let r=0;r<t.length;r++){const s=t[r];yc(s)&&!_c(s)?s.delete(e):t[n++]=s,s.w&=~Ot,s.n&=~Ot}t.length=n}},xr=new WeakMap;let Rn=0,Ot=1;const Hs=30;let Ue;const zt=Symbol(""),js=Symbol("");class Ti{constructor(t,n=null,r){this.fn=t,this.scheduler=n,this.active=!0,this.deps=[],this.parent=void 0,cf(this,r)}run(){if(!this.active)return this.fn();let t=Ue,n=At;for(;t;){if(t===this)return;t=t.parent}try{return this.parent=Ue,Ue=this,At=!0,Ot=1<<++Rn,Rn<=Hs?ff(this):po(this),this.fn()}finally{Rn<=Hs&&df(this),Ot=1<<--Rn,Ue=this.parent,At=n,this.parent=void 0,this.deferStop&&this.stop()}}stop(){Ue===this?this.deferStop=!0:this.active&&(po(this),this.onStop&&this.onStop(),this.active=!1)}}function po(e){const{deps:t}=e;if(t.length){for(let n=0;n<t.length;n++)t[n].delete(e);t.length=0}}let At=!0;const bc=[];function _n(){bc.push(At),At=!1}function bn(){const e=bc.pop();At=e===void 0?!0:e}function Ce(e,t,n){if(At&&Ue){let r=xr.get(e);r||xr.set(e,r=new Map);let s=r.get(n);s||r.set(n,s=Ii()),Ec(s)}}function Ec(e,t){let n=!1;Rn<=Hs?_c(e)||(e.n|=Ot,n=!yc(e)):n=!e.has(Ue),n&&(e.add(Ue),Ue.deps.push(e))}function lt(e,t,n,r,s,i){const o=xr.get(e);if(!o)return;let c=[];if(t==="clear")c=[...o.values()];else if(n==="length"&&j(e)){const a=Number(r);o.forEach((l,u)=>{(u==="length"||u>=a)&&c.push(l)})}else switch(n!==void 0&&c.push(o.get(n)),t){case"add":j(e)?bi(n)&&c.push(o.get("length")):(c.push(o.get(zt)),on(e)&&c.push(o.get(js)));break;case"delete":j(e)||(c.push(o.get(zt)),on(e)&&c.push(o.get(js)));break;case"set":on(e)&&c.push(o.get(zt));break}if(c.length===1)c[0]&&Vs(c[0]);else{const a=[];for(const l of c)l&&a.push(...l);Vs(Ii(a))}}function Vs(e,t){const n=j(e)?e:[...e];for(const r of n)r.computed&&go(r);for(const r of n)r.computed||go(r)}function go(e,t){(e!==Ue||e.allowRecurse)&&(e.scheduler?e.scheduler():e.run())}function hf(e,t){var n;return(n=xr.get(e))==null?void 0:n.get(t)}const pf=mi("__proto__,__v_isRef,__isVue"),wc=new Set(Object.getOwnPropertyNames(Symbol).filter(e=>e!=="arguments"&&e!=="caller").map(e=>Symbol[e]).filter(_i)),gf=Ci(),mf=Ci(!1,!0),vf=Ci(!0),mo=yf();function yf(){const e={};return["includes","indexOf","lastIndexOf"].forEach(t=>{e[t]=function(...n){const r=Z(this);for(let i=0,o=this.length;i<o;i++)Ce(r,"get",i+"");const s=r[t](...n);return s===-1||s===!1?r[t](...n.map(Z)):s}}),["push","pop","shift","unshift","splice"].forEach(t=>{e[t]=function(...n){_n();const r=Z(this)[t].apply(this,n);return bn(),r}}),e}function _f(e){const t=Z(this);return Ce(t,"has",e),t.hasOwnProperty(e)}function Ci(e=!1,t=!1){return function(r,s,i){if(s==="__v_isReactive")return!e;if(s==="__v_isReadonly")return e;if(s==="__v_isShallow")return t;if(s==="__v_raw"&&i===(e?t?xf:Sc:t?Ac:Cc).get(r))return r;const o=j(r);if(!e){if(o&&te(mo,s))return Reflect.get(mo,s,i);if(s==="hasOwnProperty")return _f}const c=Reflect.get(r,s,i);return(_i(s)?wc.has(s):pf(s))||(e||Ce(r,"get",s),t)?c:_e(c)?o&&bi(s)?c:c.value:fe(c)?e?ts(c):Ne(c):c}}const bf=Ic(),Ef=Ic(!0);function Ic(e=!1){return function(n,r,s,i){let o=n[r];if(dn(o)&&_e(o)&&!_e(s))return!1;if(!e&&(!Lr(s)&&!dn(s)&&(o=Z(o),s=Z(s)),!j(n)&&_e(o)&&!_e(s)))return o.value=s,!0;const c=j(n)&&bi(r)?Number(r)<n.length:te(n,r),a=Reflect.set(n,r,s,i);return n===Z(i)&&(c?$n(s,o)&&lt(n,"set",r,s):lt(n,"add",r,s)),a}}function wf(e,t){const n=te(e,t);e[t];const r=Reflect.deleteProperty(e,t);return r&&n&&lt(e,"delete",t,void 0),r}function If(e,t){const n=Reflect.has(e,t);return(!_i(t)||!wc.has(t))&&Ce(e,"has",t),n}function Tf(e){return Ce(e,"iterate",j(e)?"length":zt),Reflect.ownKeys(e)}const Tc={get:gf,set:bf,deleteProperty:wf,has:If,ownKeys:Tf},Cf={get:vf,set(e,t){return!0},deleteProperty(e,t){return!0}},Af=pe({},Tc,{get:mf,set:Ef}),Ai=e=>e,es=e=>Reflect.getPrototypeOf(e);function fr(e,t,n=!1,r=!1){e=e.__v_raw;const s=Z(e),i=Z(t);n||(t!==i&&Ce(s,"get",t),Ce(s,"get",i));const{has:o}=es(s),c=r?Ai:n?Pi:Un;if(o.call(s,t))return c(e.get(t));if(o.call(s,i))return c(e.get(i));e!==s&&e.get(t)}function dr(e,t=!1){const n=this.__v_raw,r=Z(n),s=Z(e);return t||(e!==s&&Ce(r,"has",e),Ce(r,"has",s)),e===s?n.has(e):n.has(e)||n.has(s)}function hr(e,t=!1){return e=e.__v_raw,!t&&Ce(Z(e),"iterate",zt),Reflect.get(e,"size",e)}function vo(e){e=Z(e);const t=Z(this);return es(t).has.call(t,e)||(t.add(e),lt(t,"add",e,e)),this}function yo(e,t){t=Z(t);const n=Z(this),{has:r,get:s}=es(n);let i=r.call(n,e);i||(e=Z(e),i=r.call(n,e));const o=s.call(n,e);return n.set(e,t),i?$n(t,o)&&lt(n,"set",e,t):lt(n,"add",e,t),this}function _o(e){const t=Z(this),{has:n,get:r}=es(t);let s=n.call(t,e);s||(e=Z(e),s=n.call(t,e)),r&&r.call(t,e);const i=t.delete(e);return s&&lt(t,"delete",e,void 0),i}function bo(){const e=Z(this),t=e.size!==0,n=e.clear();return t&&lt(e,"clear",void 0,void 0),n}function pr(e,t){return function(r,s){const i=this,o=i.__v_raw,c=Z(o),a=t?Ai:e?Pi:Un;return!e&&Ce(c,"iterate",zt),o.forEach((l,u)=>r.call(s,a(l),a(u),i))}}function gr(e,t,n){return function(...r){const s=this.__v_raw,i=Z(s),o=on(i),c=e==="entries"||e===Symbol.iterator&&o,a=e==="keys"&&o,l=s[e](...r),u=n?Ai:t?Pi:Un;return!t&&Ce(i,"iterate",a?js:zt),{next(){const{value:f,done:d}=l.next();return d?{value:f,done:d}:{value:c?[u(f[0]),u(f[1])]:u(f),done:d}},[Symbol.iterator](){return this}}}}function gt(e){return function(...t){return e==="delete"?!1:this}}function Sf(){const e={get(i){return fr(this,i)},get size(){return hr(this)},has:dr,add:vo,set:yo,delete:_o,clear:bo,forEach:pr(!1,!1)},t={get(i){return fr(this,i,!1,!0)},get size(){return hr(this)},has:dr,add:vo,set:yo,delete:_o,clear:bo,forEach:pr(!1,!0)},n={get(i){return fr(this,i,!0)},get size(){return hr(this,!0)},has(i){return dr.call(this,i,!0)},add:gt("add"),set:gt("set"),delete:gt("delete"),clear:gt("clear"),forEach:pr(!0,!1)},r={get(i){return fr(this,i,!0,!0)},get size(){return hr(this,!0)},has(i){return dr.call(this,i,!0)},add:gt("add"),set:gt("set"),delete:gt("delete"),clear:gt("clear"),forEach:pr(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(i=>{e[i]=gr(i,!1,!1),n[i]=gr(i,!0,!1),t[i]=gr(i,!1,!0),r[i]=gr(i,!0,!0)}),[e,n,t,r]}const[Rf,Pf,Of,kf]=Sf();function Si(e,t){const n=t?e?kf:Of:e?Pf:Rf;return(r,s,i)=>s==="__v_isReactive"?!e:s==="__v_isReadonly"?e:s==="__v_raw"?r:Reflect.get(te(n,s)&&s in r?n:r,s,i)}const Df={get:Si(!1,!1)},Mf={get:Si(!1,!0)},Nf={get:Si(!0,!1)},Cc=new WeakMap,Ac=new WeakMap,Sc=new WeakMap,xf=new WeakMap;function Lf(e){switch(e){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function Ff(e){return e.__v_skip||!Object.isExtensible(e)?0:Lf(Yu(e))}function Ne(e){return dn(e)?e:Ri(e,!1,Tc,Df,Cc)}function Rc(e){return Ri(e,!1,Af,Mf,Ac)}function ts(e){return Ri(e,!0,Cf,Nf,Sc)}function Ri(e,t,n,r,s){if(!fe(e)||e.__v_raw&&!(t&&e.__v_isReactive))return e;const i=s.get(e);if(i)return i;const o=Ff(e);if(o===0)return e;const c=new Proxy(e,o===2?r:n);return s.set(e,c),c}function an(e){return dn(e)?an(e.__v_raw):!!(e&&e.__v_isReactive)}function dn(e){return!!(e&&e.__v_isReadonly)}function Lr(e){return!!(e&&e.__v_isShallow)}function Pc(e){return an(e)||dn(e)}function Z(e){const t=e&&e.__v_raw;return t?Z(t):e}function Oc(e){return Nr(e,"__v_skip",!0),e}const Un=e=>fe(e)?Ne(e):e,Pi=e=>fe(e)?ts(e):e;function kc(e){At&&Ue&&(e=Z(e),Ec(e.dep||(e.dep=Ii())))}function Dc(e,t){e=Z(e);const n=e.dep;n&&Vs(n)}function _e(e){return!!(e&&e.__v_isRef===!0)}function Oe(e){return Mc(e,!1)}function ct(e){return Mc(e,!0)}function Mc(e,t){return _e(e)?e:new $f(e,t)}class $f{constructor(t,n){this.__v_isShallow=n,this.dep=void 0,this.__v_isRef=!0,this._rawValue=n?t:Z(t),this._value=n?t:Un(t)}get value(){return kc(this),this._value}set value(t){const n=this.__v_isShallow||Lr(t)||dn(t);t=n?t:Z(t),$n(t,this._rawValue)&&(this._rawValue=t,this._value=n?t:Un(t),Dc(this))}}function Be(e){return _e(e)?e.value:e}const Uf={get:(e,t,n)=>Be(Reflect.get(e,t,n)),set:(e,t,n,r)=>{const s=e[t];return _e(s)&&!_e(n)?(s.value=n,!0):Reflect.set(e,t,n,r)}};function Nc(e){return an(e)?e:new Proxy(e,Uf)}function xc(e){const t=j(e)?new Array(e.length):{};for(const n in e)t[n]=Lc(e,n);return t}class Bf{constructor(t,n,r){this._object=t,this._key=n,this._defaultValue=r,this.__v_isRef=!0}get value(){const t=this._object[this._key];return t===void 0?this._defaultValue:t}set value(t){this._object[this._key]=t}get dep(){return hf(Z(this._object),this._key)}}class Hf{constructor(t){this._getter=t,this.__v_isRef=!0,this.__v_isReadonly=!0}get value(){return this._getter()}}function sb(e,t,n){return _e(e)?e:K(e)?new Hf(e):fe(e)&&arguments.length>1?Lc(e,t,n):Oe(e)}function Lc(e,t,n){const r=e[t];return _e(r)?r:new Bf(e,t,n)}class jf{constructor(t,n,r,s){this._setter=n,this.dep=void 0,this.__v_isRef=!0,this.__v_isReadonly=!1,this._dirty=!0,this.effect=new Ti(t,()=>{this._dirty||(this._dirty=!0,Dc(this))}),this.effect.computed=this,this.effect.active=this._cacheable=!s,this.__v_isReadonly=r}get value(){const t=Z(this);return kc(t),(t._dirty||!t._cacheable)&&(t._dirty=!1,t._value=t.effect.run()),t._value}set value(t){this._setter(t)}}function Vf(e,t,n=!1){let r,s;const i=K(e);return i?(r=e,s=je):(r=e.get,s=e.set),new jf(r,s,i||!s,n)}function St(e,t,n,r){let s;try{s=r?e(...r):e()}catch(i){ns(i,t,n)}return s}function Le(e,t,n,r){if(K(e)){const i=St(e,t,n,r);return i&&dc(i)&&i.catch(o=>{ns(o,t,n)}),i}const s=[];for(let i=0;i<e.length;i++)s.push(Le(e[i],t,n,r));return s}function ns(e,t,n,r=!0){const s=t?t.vnode:null;if(t){let i=t.parent;const o=t.proxy,c=n;for(;i;){const l=i.ec;if(l){for(let u=0;u<l.length;u++)if(l[u](e,o,c)===!1)return}i=i.parent}const a=t.appContext.config.errorHandler;if(a){St(a,null,10,[e,o,c]);return}}Wf(e,n,s,r)}function Wf(e,t,n,r=!0){console.error(e)}let Bn=!1,Ws=!1;const Ee=[];let Ze=0;const cn=[];let it=null,Bt=0;const Fc=Promise.resolve();let Oi=null;function ki(e){const t=Oi||Fc;return e?t.then(this?e.bind(this):e):t}function zf(e){let t=Ze+1,n=Ee.length;for(;t<n;){const r=t+n>>>1;Hn(Ee[r])<e?t=r+1:n=r}return t}function Di(e){(!Ee.length||!Ee.includes(e,Bn&&e.allowRecurse?Ze+1:Ze))&&(e.id==null?Ee.push(e):Ee.splice(zf(e.id),0,e),$c())}function $c(){!Bn&&!Ws&&(Ws=!0,Oi=Fc.then(Bc))}function Kf(e){const t=Ee.indexOf(e);t>Ze&&Ee.splice(t,1)}function qf(e){j(e)?cn.push(...e):(!it||!it.includes(e,e.allowRecurse?Bt+1:Bt))&&cn.push(e),$c()}function Eo(e,t=Bn?Ze+1:0){for(;t<Ee.length;t++){const n=Ee[t];n&&n.pre&&(Ee.splice(t,1),t--,n())}}function Uc(e){if(cn.length){const t=[...new Set(cn)];if(cn.length=0,it){it.push(...t);return}for(it=t,it.sort((n,r)=>Hn(n)-Hn(r)),Bt=0;Bt<it.length;Bt++)it[Bt]();it=null,Bt=0}}const Hn=e=>e.id==null?1/0:e.id,Gf=(e,t)=>{const n=Hn(e)-Hn(t);if(n===0){if(e.pre&&!t.pre)return-1;if(t.pre&&!e.pre)return 1}return n};function Bc(e){Ws=!1,Bn=!0,Ee.sort(Gf);const t=je;try{for(Ze=0;Ze<Ee.length;Ze++){const n=Ee[Ze];n&&n.active!==!1&&St(n,null,14)}}finally{Ze=0,Ee.length=0,Uc(),Bn=!1,Oi=null,(Ee.length||cn.length)&&Bc()}}function Yf(e,t,...n){if(e.isUnmounted)return;const r=e.vnode.props||ue;let s=n;const i=t.startsWith("update:"),o=i&&t.slice(7);if(o&&o in r){const u=`${o==="modelValue"?"model":o}Modifiers`,{number:f,trim:d}=r[u]||ue;d&&(s=n.map(m=>ge(m)?m.trim():m)),f&&(s=n.map(Zu))}let c,a=r[c=ys(t)]||r[c=ys(nt(t))];!a&&i&&(a=r[c=ys(yn(t))]),a&&Le(a,e,6,s);const l=r[c+"Once"];if(l){if(!e.emitted)e.emitted={};else if(e.emitted[c])return;e.emitted[c]=!0,Le(l,e,6,s)}}function Hc(e,t,n=!1){const r=t.emitsCache,s=r.get(e);if(s!==void 0)return s;const i=e.emits;let o={},c=!1;if(!K(e)){const a=l=>{const u=Hc(l,t,!0);u&&(c=!0,pe(o,u))};!n&&t.mixins.length&&t.mixins.forEach(a),e.extends&&a(e.extends),e.mixins&&e.mixins.forEach(a)}return!i&&!c?(fe(e)&&r.set(e,null),null):(j(i)?i.forEach(a=>o[a]=null):pe(o,i),fe(e)&&r.set(e,o),o)}function rs(e,t){return!e||!Xr(t)?!1:(t=t.slice(2).replace(/Once$/,""),te(e,t[0].toLowerCase()+t.slice(1))||te(e,yn(t))||te(e,t))}let Pe=null,jc=null;function Fr(e){const t=Pe;return Pe=e,jc=e&&e.type.__scopeId||null,t}function Tr(e,t=Pe,n){if(!t||e._n)return e;const r=(...s)=>{r._d&&No(-1);const i=Fr(t);let o;try{o=e(...s)}finally{Fr(i),r._d&&No(1)}return o};return r._n=!0,r._c=!0,r._d=!0,r}function bs(e){const{type:t,vnode:n,proxy:r,withProxy:s,props:i,propsOptions:[o],slots:c,attrs:a,emit:l,render:u,renderCache:f,data:d,setupState:m,ctx:v,inheritAttrs:b}=e;let O,S;const P=Fr(e);try{if(n.shapeFlag&4){const D=s||r;O=Xe(u.call(D,D,f,i,m,d,v)),S=a}else{const D=t;O=Xe(D.length>1?D(i,{attrs:a,slots:c,emit:l}):D(i,null)),S=t.props?a:Jf(a)}}catch(D){Nn.length=0,ns(D,e,1),O=ne(Ve)}let V=O;if(S&&b!==!1){const D=Object.keys(S),{shapeFlag:Y}=V;D.length&&Y&7&&(o&&D.some(vi)&&(S=Xf(S,o)),V=kt(V,S))}return n.dirs&&(V=kt(V),V.dirs=V.dirs?V.dirs.concat(n.dirs):n.dirs),n.transition&&(V.transition=n.transition),O=V,Fr(P),O}const Jf=e=>{let t;for(const n in e)(n==="class"||n==="style"||Xr(n))&&((t||(t={}))[n]=e[n]);return t},Xf=(e,t)=>{const n={};for(const r in e)(!vi(r)||!(r.slice(9)in t))&&(n[r]=e[r]);return n};function Zf(e,t,n){const{props:r,children:s,component:i}=e,{props:o,children:c,patchFlag:a}=t,l=i.emitsOptions;if(t.dirs||t.transition)return!0;if(n&&a>=0){if(a&1024)return!0;if(a&16)return r?wo(r,o,l):!!o;if(a&8){const u=t.dynamicProps;for(let f=0;f<u.length;f++){const d=u[f];if(o[d]!==r[d]&&!rs(l,d))return!0}}}else return(s||c)&&(!c||!c.$stable)?!0:r===o?!1:r?o?wo(r,o,l):!0:!!o;return!1}function wo(e,t,n){const r=Object.keys(t);if(r.length!==Object.keys(e).length)return!0;for(let s=0;s<r.length;s++){const i=r[s];if(t[i]!==e[i]&&!rs(n,i))return!0}return!1}function Qf({vnode:e,parent:t},n){for(;t&&t.subTree===e;)(e=t.vnode).el=n,t=t.parent}const ed=e=>e.__isSuspense;function td(e,t){t&&t.pendingBranch?j(e)?t.effects.push(...e):t.effects.push(e):qf(e)}function tr(e,t){return Mi(e,null,t)}const mr={};function Qe(e,t,n){return Mi(e,t,n)}function Mi(e,t,{immediate:n,deep:r,flush:s,onTrack:i,onTrigger:o}=ue){var c;const a=lf()===((c=ye)==null?void 0:c.scope)?ye:null;let l,u=!1,f=!1;if(_e(e)?(l=()=>e.value,u=Lr(e)):an(e)?(l=()=>e,r=!0):j(e)?(f=!0,u=e.some(D=>an(D)||Lr(D)),l=()=>e.map(D=>{if(_e(D))return D.value;if(an(D))return Vt(D);if(K(D))return St(D,a,2)})):K(e)?t?l=()=>St(e,a,2):l=()=>{if(!(a&&a.isUnmounted))return d&&d(),Le(e,a,3,[m])}:l=je,t&&r){const D=l;l=()=>Vt(D())}let d,m=D=>{d=P.onStop=()=>{St(D,a,4)}},v;if(zn)if(m=je,t?n&&Le(t,a,3,[l(),f?[]:void 0,m]):l(),s==="sync"){const D=Yd();v=D.__watcherHandles||(D.__watcherHandles=[])}else return je;let b=f?new Array(e.length).fill(mr):mr;const O=()=>{if(P.active)if(t){const D=P.run();(r||u||(f?D.some((Y,U)=>$n(Y,b[U])):$n(D,b)))&&(d&&d(),Le(t,a,3,[D,b===mr?void 0:f&&b[0]===mr?[]:b,m]),b=D)}else P.run()};O.allowRecurse=!!t;let S;s==="sync"?S=O:s==="post"?S=()=>Te(O,a&&a.suspense):(O.pre=!0,a&&(O.id=a.uid),S=()=>Di(O));const P=new Ti(l,S);t?n?O():b=P.run():s==="post"?Te(P.run.bind(P),a&&a.suspense):P.run();const V=()=>{P.stop(),a&&a.scope&&yi(a.scope.effects,P)};return v&&v.push(V),V}function nd(e,t,n){const r=this.proxy,s=ge(e)?e.includes(".")?Vc(r,e):()=>r[e]:e.bind(r,r);let i;K(t)?i=t:(i=t.handler,n=t);const o=ye;hn(this);const c=Mi(s,i.bind(r),n);return o?hn(o):qt(),c}function Vc(e,t){const n=t.split(".");return()=>{let r=e;for(let s=0;s<n.length&&r;s++)r=r[n[s]];return r}}function Vt(e,t){if(!fe(e)||e.__v_skip||(t=t||new Set,t.has(e)))return e;if(t.add(e),_e(e))Vt(e.value,t);else if(j(e))for(let n=0;n<e.length;n++)Vt(e[n],t);else if(fc(e)||on(e))e.forEach(n=>{Vt(n,t)});else if(pc(e))for(const n in e)Vt(e[n],t);return e}function ib(e,t){const n=Pe;if(n===null)return e;const r=ls(n)||n.proxy,s=e.dirs||(e.dirs=[]);for(let i=0;i<t.length;i++){let[o,c,a,l=ue]=t[i];o&&(K(o)&&(o={mounted:o,updated:o}),o.deep&&Vt(c),s.push({dir:o,instance:r,value:c,oldValue:void 0,arg:a,modifiers:l}))}return e}function xt(e,t,n,r){const s=e.dirs,i=t&&t.dirs;for(let o=0;o<s.length;o++){const c=s[o];i&&(c.oldValue=i[o].value);let a=c.dir[r];a&&(_n(),Le(a,n,8,[e.el,c,e,t]),bn())}}function Wc(){const e={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return os(()=>{e.isMounted=!0}),Li(()=>{e.isUnmounting=!0}),e}const De=[Function,Array],zc={mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:De,onEnter:De,onAfterEnter:De,onEnterCancelled:De,onBeforeLeave:De,onLeave:De,onAfterLeave:De,onLeaveCancelled:De,onBeforeAppear:De,onAppear:De,onAfterAppear:De,onAppearCancelled:De},rd={name:"BaseTransition",props:zc,setup(e,{slots:t}){const n=Vi(),r=Wc();let s;return()=>{const i=t.default&&Ni(t.default(),!0);if(!i||!i.length)return;let o=i[0];if(i.length>1){for(const b of i)if(b.type!==Ve){o=b;break}}const c=Z(e),{mode:a}=c;if(r.isLeaving)return Es(o);const l=Io(o);if(!l)return Es(o);const u=jn(l,c,r,n);Vn(l,u);const f=n.subTree,d=f&&Io(f);let m=!1;const{getTransitionKey:v}=l.type;if(v){const b=v();s===void 0?s=b:b!==s&&(s=b,m=!0)}if(d&&d.type!==Ve&&(!Ht(l,d)||m)){const b=jn(d,c,r,n);if(Vn(d,b),a==="out-in")return r.isLeaving=!0,b.afterLeave=()=>{r.isLeaving=!1,n.update.active!==!1&&n.update()},Es(o);a==="in-out"&&l.type!==Ve&&(b.delayLeave=(O,S,P)=>{const V=Kc(r,d);V[String(d.key)]=d,O._leaveCb=()=>{S(),O._leaveCb=void 0,delete u.delayedLeave},u.delayedLeave=P})}return o}}},sd=rd;function Kc(e,t){const{leavingVNodes:n}=e;let r=n.get(t.type);return r||(r=Object.create(null),n.set(t.type,r)),r}function jn(e,t,n,r){const{appear:s,mode:i,persisted:o=!1,onBeforeEnter:c,onEnter:a,onAfterEnter:l,onEnterCancelled:u,onBeforeLeave:f,onLeave:d,onAfterLeave:m,onLeaveCancelled:v,onBeforeAppear:b,onAppear:O,onAfterAppear:S,onAppearCancelled:P}=t,V=String(e.key),D=Kc(n,e),Y=(R,H)=>{R&&Le(R,r,9,H)},U=(R,H)=>{const B=H[1];Y(R,H),j(R)?R.every(Q=>Q.length<=1)&&B():R.length<=1&&B()},q={mode:i,persisted:o,beforeEnter(R){let H=c;if(!n.isMounted)if(s)H=b||c;else return;R._leaveCb&&R._leaveCb(!0);const B=D[V];B&&Ht(e,B)&&B.el._leaveCb&&B.el._leaveCb(),Y(H,[R])},enter(R){let H=a,B=l,Q=u;if(!n.isMounted)if(s)H=O||a,B=S||l,Q=P||u;else return;let M=!1;const X=R._enterCb=he=>{M||(M=!0,he?Y(Q,[R]):Y(B,[R]),q.delayedLeave&&q.delayedLeave(),R._enterCb=void 0)};H?U(H,[R,X]):X()},leave(R,H){const B=String(e.key);if(R._enterCb&&R._enterCb(!0),n.isUnmounting)return H();Y(f,[R]);let Q=!1;const M=R._leaveCb=X=>{Q||(Q=!0,H(),X?Y(v,[R]):Y(m,[R]),R._leaveCb=void 0,D[B]===e&&delete D[B])};D[B]=e,d?U(d,[R,M]):M()},clone(R){return jn(R,t,n,r)}};return q}function Es(e){if(ss(e))return e=kt(e),e.children=null,e}function Io(e){return ss(e)?e.children?e.children[0]:void 0:e}function Vn(e,t){e.shapeFlag&6&&e.component?Vn(e.component.subTree,t):e.shapeFlag&128?(e.ssContent.transition=t.clone(e.ssContent),e.ssFallback.transition=t.clone(e.ssFallback)):e.transition=t}function Ni(e,t=!1,n){let r=[],s=0;for(let i=0;i<e.length;i++){let o=e[i];const c=n==null?o.key:String(n)+String(o.key!=null?o.key:i);o.type===Me?(o.patchFlag&128&&s++,r=r.concat(Ni(o.children,t,c))):(t||o.type!==Ve)&&r.push(c!=null?kt(o,{key:c}):o)}if(s>1)for(let i=0;i<r.length;i++)r[i].patchFlag=-2;return r}function xi(e,t){return K(e)?(()=>pe({name:e.name},t,{setup:e}))():e}const Cr=e=>!!e.type.__asyncLoader,ss=e=>e.type.__isKeepAlive;function id(e,t){qc(e,"a",t)}function od(e,t){qc(e,"da",t)}function qc(e,t,n=ye){const r=e.__wdc||(e.__wdc=()=>{let s=n;for(;s;){if(s.isDeactivated)return;s=s.parent}return e()});if(is(t,r,n),n){let s=n.parent;for(;s&&s.parent;)ss(s.parent.vnode)&&ad(r,t,n,s),s=s.parent}}function ad(e,t,n,r){const s=is(t,e,r,!0);Yc(()=>{yi(r[t],s)},n)}function is(e,t,n=ye,r=!1){if(n){const s=n[e]||(n[e]=[]),i=t.__weh||(t.__weh=(...o)=>{if(n.isUnmounted)return;_n(),hn(n);const c=Le(t,n,e,o);return qt(),bn(),c});return r?s.unshift(i):s.push(i),i}}const ft=e=>(t,n=ye)=>(!zn||e==="sp")&&is(e,(...r)=>t(...r),n),cd=ft("bm"),os=ft("m"),ld=ft("bu"),Gc=ft("u"),Li=ft("bum"),Yc=ft("um"),ud=ft("sp"),fd=ft("rtg"),dd=ft("rtc");function hd(e,t=ye){is("ec",e,t)}const Fi="components",pd="directives";function gd(e,t){return $i(Fi,e,!0,t)||e}const Jc=Symbol.for("v-ndc");function ob(e){return ge(e)?$i(Fi,e,!1)||e:e||Jc}function ab(e){return $i(pd,e)}function $i(e,t,n=!0,r=!1){const s=Pe||ye;if(s){const i=s.type;if(e===Fi){const c=Kd(i,!1);if(c&&(c===t||c===nt(t)||c===er(nt(t))))return i}const o=To(s[e]||i[e],t)||To(s.appContext[e],t);return!o&&r?i:o}}function To(e,t){return e&&(e[t]||e[nt(t)]||e[er(nt(t))])}const zs=e=>e?fl(e)?ls(e)||e.proxy:zs(e.parent):null,Dn=pe(Object.create(null),{$:e=>e,$el:e=>e.vnode.el,$data:e=>e.data,$props:e=>e.props,$attrs:e=>e.attrs,$slots:e=>e.slots,$refs:e=>e.refs,$parent:e=>zs(e.parent),$root:e=>zs(e.root),$emit:e=>e.emit,$options:e=>Ui(e),$forceUpdate:e=>e.f||(e.f=()=>Di(e.update)),$nextTick:e=>e.n||(e.n=ki.bind(e.proxy)),$watch:e=>nd.bind(e)}),ws=(e,t)=>e!==ue&&!e.__isScriptSetup&&te(e,t),md={get({_:e},t){const{ctx:n,setupState:r,data:s,props:i,accessCache:o,type:c,appContext:a}=e;let l;if(t[0]!=="$"){const m=o[t];if(m!==void 0)switch(m){case 1:return r[t];case 2:return s[t];case 4:return n[t];case 3:return i[t]}else{if(ws(r,t))return o[t]=1,r[t];if(s!==ue&&te(s,t))return o[t]=2,s[t];if((l=e.propsOptions[0])&&te(l,t))return o[t]=3,i[t];if(n!==ue&&te(n,t))return o[t]=4,n[t];Ks&&(o[t]=0)}}const u=Dn[t];let f,d;if(u)return t==="$attrs"&&Ce(e,"get",t),u(e);if((f=c.__cssModules)&&(f=f[t]))return f;if(n!==ue&&te(n,t))return o[t]=4,n[t];if(d=a.config.globalProperties,te(d,t))return d[t]},set({_:e},t,n){const{data:r,setupState:s,ctx:i}=e;return ws(s,t)?(s[t]=n,!0):r!==ue&&te(r,t)?(r[t]=n,!0):te(e.props,t)||t[0]==="$"&&t.slice(1)in e?!1:(i[t]=n,!0)},has({_:{data:e,setupState:t,accessCache:n,ctx:r,appContext:s,propsOptions:i}},o){let c;return!!n[o]||e!==ue&&te(e,o)||ws(t,o)||(c=i[0])&&te(c,o)||te(r,o)||te(Dn,o)||te(s.config.globalProperties,o)},defineProperty(e,t,n){return n.get!=null?e._.accessCache[t]=0:te(n,"value")&&this.set(e,t,n.value,null),Reflect.defineProperty(e,t,n)}};function Co(e){return j(e)?e.reduce((t,n)=>(t[n]=null,t),{}):e}let Ks=!0;function vd(e){const t=Ui(e),n=e.proxy,r=e.ctx;Ks=!1,t.beforeCreate&&Ao(t.beforeCreate,e,"bc");const{data:s,computed:i,methods:o,watch:c,provide:a,inject:l,created:u,beforeMount:f,mounted:d,beforeUpdate:m,updated:v,activated:b,deactivated:O,beforeDestroy:S,beforeUnmount:P,destroyed:V,unmounted:D,render:Y,renderTracked:U,renderTriggered:q,errorCaptured:R,serverPrefetch:H,expose:B,inheritAttrs:Q,components:M,directives:X,filters:he}=t;if(l&&yd(l,r,null),o)for(const re in o){const ee=o[re];K(ee)&&(r[re]=ee.bind(n))}if(s){const re=s.call(n,n);fe(re)&&(e.data=Ne(re))}if(Ks=!0,i)for(const re in i){const ee=i[re],Ae=K(ee)?ee.bind(n,n):K(ee.get)?ee.get.bind(n,n):je,qe=!K(ee)&&K(ee.set)?ee.set.bind(n):je,ke=G({get:Ae,set:qe});Object.defineProperty(r,re,{enumerable:!0,configurable:!0,get:()=>ke.value,set:me=>ke.value=me})}if(c)for(const re in c)Xc(c[re],r,n,re);if(a){const re=K(a)?a.call(n):a;Reflect.ownKeys(re).forEach(ee=>{Kt(ee,re[ee])})}u&&Ao(u,e,"c");function de(re,ee){j(ee)?ee.forEach(Ae=>re(Ae.bind(n))):ee&&re(ee.bind(n))}if(de(cd,f),de(os,d),de(ld,m),de(Gc,v),de(id,b),de(od,O),de(hd,R),de(dd,U),de(fd,q),de(Li,P),de(Yc,D),de(ud,H),j(B))if(B.length){const re=e.exposed||(e.exposed={});B.forEach(ee=>{Object.defineProperty(re,ee,{get:()=>n[ee],set:Ae=>n[ee]=Ae})})}else e.exposed||(e.exposed={});Y&&e.render===je&&(e.render=Y),Q!=null&&(e.inheritAttrs=Q),M&&(e.components=M),X&&(e.directives=X)}function yd(e,t,n=je){j(e)&&(e=qs(e));for(const r in e){const s=e[r];let i;fe(s)?"default"in s?i=be(s.from||r,s.default,!0):i=be(s.from||r):i=be(s),_e(i)?Object.defineProperty(t,r,{enumerable:!0,configurable:!0,get:()=>i.value,set:o=>i.value=o}):t[r]=i}}function Ao(e,t,n){Le(j(e)?e.map(r=>r.bind(t.proxy)):e.bind(t.proxy),t,n)}function Xc(e,t,n,r){const s=r.includes(".")?Vc(n,r):()=>n[r];if(ge(e)){const i=t[e];K(i)&&Qe(s,i)}else if(K(e))Qe(s,e.bind(n));else if(fe(e))if(j(e))e.forEach(i=>Xc(i,t,n,r));else{const i=K(e.handler)?e.handler.bind(n):t[e.handler];K(i)&&Qe(s,i,e)}}function Ui(e){const t=e.type,{mixins:n,extends:r}=t,{mixins:s,optionsCache:i,config:{optionMergeStrategies:o}}=e.appContext,c=i.get(t);let a;return c?a=c:!s.length&&!n&&!r?a=t:(a={},s.length&&s.forEach(l=>$r(a,l,o,!0)),$r(a,t,o)),fe(t)&&i.set(t,a),a}function $r(e,t,n,r=!1){const{mixins:s,extends:i}=t;i&&$r(e,i,n,!0),s&&s.forEach(o=>$r(e,o,n,!0));for(const o in t)if(!(r&&o==="expose")){const c=_d[o]||n&&n[o];e[o]=c?c(e[o],t[o]):t[o]}return e}const _d={data:So,props:Ro,emits:Ro,methods:Pn,computed:Pn,beforeCreate:Ie,created:Ie,beforeMount:Ie,mounted:Ie,beforeUpdate:Ie,updated:Ie,beforeDestroy:Ie,beforeUnmount:Ie,destroyed:Ie,unmounted:Ie,activated:Ie,deactivated:Ie,errorCaptured:Ie,serverPrefetch:Ie,components:Pn,directives:Pn,watch:Ed,provide:So,inject:bd};function So(e,t){return t?e?function(){return pe(K(e)?e.call(this,this):e,K(t)?t.call(this,this):t)}:t:e}function bd(e,t){return Pn(qs(e),qs(t))}function qs(e){if(j(e)){const t={};for(let n=0;n<e.length;n++)t[e[n]]=e[n];return t}return e}function Ie(e,t){return e?[...new Set([].concat(e,t))]:t}function Pn(e,t){return e?pe(Object.create(null),e,t):t}function Ro(e,t){return e?j(e)&&j(t)?[...new Set([...e,...t])]:pe(Object.create(null),Co(e),Co(t??{})):t}function Ed(e,t){if(!e)return t;if(!t)return e;const n=pe(Object.create(null),e);for(const r in t)n[r]=Ie(e[r],t[r]);return n}function Zc(){return{app:null,config:{isNativeTag:Ku,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let wd=0;function Id(e,t){return function(r,s=null){K(r)||(r=pe({},r)),s!=null&&!fe(s)&&(s=null);const i=Zc(),o=new Set;let c=!1;const a=i.app={_uid:wd++,_component:r,_props:s,_container:null,_context:i,_instance:null,version:Jd,get config(){return i.config},set config(l){},use(l,...u){return o.has(l)||(l&&K(l.install)?(o.add(l),l.install(a,...u)):K(l)&&(o.add(l),l(a,...u))),a},mixin(l){return i.mixins.includes(l)||i.mixins.push(l),a},component(l,u){return u?(i.components[l]=u,a):i.components[l]},directive(l,u){return u?(i.directives[l]=u,a):i.directives[l]},mount(l,u,f){if(!c){const d=ne(r,s);return d.appContext=i,u&&t?t(d,l):e(d,l,f),c=!0,a._container=l,l.__vue_app__=a,ls(d.component)||d.component.proxy}},unmount(){c&&(e(null,a._container),delete a._container.__vue_app__)},provide(l,u){return i.provides[l]=u,a},runWithContext(l){Ur=a;try{return l()}finally{Ur=null}}};return a}}let Ur=null;function Kt(e,t){if(ye){let n=ye.provides;const r=ye.parent&&ye.parent.provides;r===n&&(n=ye.provides=Object.create(r)),n[e]=t}}function be(e,t,n=!1){const r=ye||Pe;if(r||Ur){const s=r?r.parent==null?r.vnode.appContext&&r.vnode.appContext.provides:r.parent.provides:Ur._context.provides;if(s&&e in s)return s[e];if(arguments.length>1)return n&&K(t)?t.call(r&&r.proxy):t}}function Td(e,t,n,r=!1){const s={},i={};Nr(i,cs,1),e.propsDefaults=Object.create(null),Qc(e,t,s,i);for(const o in e.propsOptions[0])o in s||(s[o]=void 0);n?e.props=r?s:Rc(s):e.type.props?e.props=s:e.props=i,e.attrs=i}function Cd(e,t,n,r){const{props:s,attrs:i,vnode:{patchFlag:o}}=e,c=Z(s),[a]=e.propsOptions;let l=!1;if((r||o>0)&&!(o&16)){if(o&8){const u=e.vnode.dynamicProps;for(let f=0;f<u.length;f++){let d=u[f];if(rs(e.emitsOptions,d))continue;const m=t[d];if(a)if(te(i,d))m!==i[d]&&(i[d]=m,l=!0);else{const v=nt(d);s[v]=Gs(a,c,v,m,e,!1)}else m!==i[d]&&(i[d]=m,l=!0)}}}else{Qc(e,t,s,i)&&(l=!0);let u;for(const f in c)(!t||!te(t,f)&&((u=yn(f))===f||!te(t,u)))&&(a?n&&(n[f]!==void 0||n[u]!==void 0)&&(s[f]=Gs(a,c,f,void 0,e,!0)):delete s[f]);if(i!==c)for(const f in i)(!t||!te(t,f))&&(delete i[f],l=!0)}l&&lt(e,"set","$attrs")}function Qc(e,t,n,r){const[s,i]=e.propsOptions;let o=!1,c;if(t)for(let a in t){if(Ir(a))continue;const l=t[a];let u;s&&te(s,u=nt(a))?!i||!i.includes(u)?n[u]=l:(c||(c={}))[u]=l:rs(e.emitsOptions,a)||(!(a in r)||l!==r[a])&&(r[a]=l,o=!0)}if(i){const a=Z(n),l=c||ue;for(let u=0;u<i.length;u++){const f=i[u];n[f]=Gs(s,a,f,l[f],e,!te(l,f))}}return o}function Gs(e,t,n,r,s,i){const o=e[n];if(o!=null){const c=te(o,"default");if(c&&r===void 0){const a=o.default;if(o.type!==Function&&!o.skipFactory&&K(a)){const{propsDefaults:l}=s;n in l?r=l[n]:(hn(s),r=l[n]=a.call(null,t),qt())}else r=a}o[0]&&(i&&!c?r=!1:o[1]&&(r===""||r===yn(n))&&(r=!0))}return r}function el(e,t,n=!1){const r=t.propsCache,s=r.get(e);if(s)return s;const i=e.props,o={},c=[];let a=!1;if(!K(e)){const u=f=>{a=!0;const[d,m]=el(f,t,!0);pe(o,d),m&&c.push(...m)};!n&&t.mixins.length&&t.mixins.forEach(u),e.extends&&u(e.extends),e.mixins&&e.mixins.forEach(u)}if(!i&&!a)return fe(e)&&r.set(e,sn),sn;if(j(i))for(let u=0;u<i.length;u++){const f=nt(i[u]);Po(f)&&(o[f]=ue)}else if(i)for(const u in i){const f=nt(u);if(Po(f)){const d=i[u],m=o[f]=j(d)||K(d)?{type:d}:pe({},d);if(m){const v=Do(Boolean,m.type),b=Do(String,m.type);m[0]=v>-1,m[1]=b<0||v<b,(v>-1||te(m,"default"))&&c.push(f)}}}const l=[o,c];return fe(e)&&r.set(e,l),l}function Po(e){return e[0]!=="$"}function Oo(e){const t=e&&e.toString().match(/^\s*(function|class) (\w+)/);return t?t[2]:e===null?"null":""}function ko(e,t){return Oo(e)===Oo(t)}function Do(e,t){return j(t)?t.findIndex(n=>ko(n,e)):K(t)&&ko(t,e)?0:-1}const tl=e=>e[0]==="_"||e==="$stable",Bi=e=>j(e)?e.map(Xe):[Xe(e)],Ad=(e,t,n)=>{if(t._n)return t;const r=Tr((...s)=>Bi(t(...s)),n);return r._c=!1,r},nl=(e,t,n)=>{const r=e._ctx;for(const s in e){if(tl(s))continue;const i=e[s];if(K(i))t[s]=Ad(s,i,r);else if(i!=null){const o=Bi(i);t[s]=()=>o}}},rl=(e,t)=>{const n=Bi(t);e.slots.default=()=>n},Sd=(e,t)=>{if(e.vnode.shapeFlag&32){const n=t._;n?(e.slots=Z(t),Nr(t,"_",n)):nl(t,e.slots={})}else e.slots={},t&&rl(e,t);Nr(e.slots,cs,1)},Rd=(e,t,n)=>{const{vnode:r,slots:s}=e;let i=!0,o=ue;if(r.shapeFlag&32){const c=t._;c?n&&c===1?i=!1:(pe(s,t),!n&&c===1&&delete s._):(i=!t.$stable,nl(t,s)),o=t}else t&&(rl(e,t),o={default:1});if(i)for(const c in s)!tl(c)&&!(c in o)&&delete s[c]};function Ys(e,t,n,r,s=!1){if(j(e)){e.forEach((d,m)=>Ys(d,t&&(j(t)?t[m]:t),n,r,s));return}if(Cr(r)&&!s)return;const i=r.shapeFlag&4?ls(r.component)||r.component.proxy:r.el,o=s?null:i,{i:c,r:a}=e,l=t&&t.r,u=c.refs===ue?c.refs={}:c.refs,f=c.setupState;if(l!=null&&l!==a&&(ge(l)?(u[l]=null,te(f,l)&&(f[l]=null)):_e(l)&&(l.value=null)),K(a))St(a,c,12,[o,u]);else{const d=ge(a),m=_e(a);if(d||m){const v=()=>{if(e.f){const b=d?te(f,a)?f[a]:u[a]:a.value;s?j(b)&&yi(b,i):j(b)?b.includes(i)||b.push(i):d?(u[a]=[i],te(f,a)&&(f[a]=u[a])):(a.value=[i],e.k&&(u[e.k]=a.value))}else d?(u[a]=o,te(f,a)&&(f[a]=o)):m&&(a.value=o,e.k&&(u[e.k]=o))};o?(v.id=-1,Te(v,n)):v()}}}const Te=td;function Pd(e){return Od(e)}function Od(e,t){const n=Bs();n.__VUE__=!0;const{insert:r,remove:s,patchProp:i,createElement:o,createText:c,createComment:a,setText:l,setElementText:u,parentNode:f,nextSibling:d,setScopeId:m=je,insertStaticContent:v}=e,b=(h,p,g,y=null,E=null,w=null,k=!1,T=null,C=!!p.dynamicChildren)=>{if(h===p)return;h&&!Ht(h,p)&&(y=_(h),me(h,E,w,!0),h=null),p.patchFlag===-2&&(C=!1,p.dynamicChildren=null);const{type:I,ref:F,shapeFlag:x}=p;switch(I){case as:O(h,p,g,y);break;case Ve:S(h,p,g,y);break;case Is:h==null&&P(p,g,y,k);break;case Me:M(h,p,g,y,E,w,k,T,C);break;default:x&1?Y(h,p,g,y,E,w,k,T,C):x&6?X(h,p,g,y,E,w,k,T,C):(x&64||x&128)&&I.process(h,p,g,y,E,w,k,T,C,A)}F!=null&&E&&Ys(F,h&&h.ref,w,p||h,!p)},O=(h,p,g,y)=>{if(h==null)r(p.el=c(p.children),g,y);else{const E=p.el=h.el;p.children!==h.children&&l(E,p.children)}},S=(h,p,g,y)=>{h==null?r(p.el=a(p.children||""),g,y):p.el=h.el},P=(h,p,g,y)=>{[h.el,h.anchor]=v(h.children,p,g,y,h.el,h.anchor)},V=({el:h,anchor:p},g,y)=>{let E;for(;h&&h!==p;)E=d(h),r(h,g,y),h=E;r(p,g,y)},D=({el:h,anchor:p})=>{let g;for(;h&&h!==p;)g=d(h),s(h),h=g;s(p)},Y=(h,p,g,y,E,w,k,T,C)=>{k=k||p.type==="svg",h==null?U(p,g,y,E,w,k,T,C):H(h,p,E,w,k,T,C)},U=(h,p,g,y,E,w,k,T)=>{let C,I;const{type:F,props:x,shapeFlag:$,transition:z,dirs:J}=h;if(C=h.el=o(h.type,w,x&&x.is,x),$&8?u(C,h.children):$&16&&R(h.children,C,null,y,E,w&&F!=="foreignObject",k,T),J&&xt(h,null,y,"created"),q(C,h,h.scopeId,k,y),x){for(const oe in x)oe!=="value"&&!Ir(oe)&&i(C,oe,null,x[oe],w,h.children,y,E,ae);"value"in x&&i(C,"value",null,x.value),(I=x.onVnodeBeforeMount)&&Je(I,y,h)}J&&xt(h,null,y,"beforeMount");const le=(!E||E&&!E.pendingBranch)&&z&&!z.persisted;le&&z.beforeEnter(C),r(C,p,g),((I=x&&x.onVnodeMounted)||le||J)&&Te(()=>{I&&Je(I,y,h),le&&z.enter(C),J&&xt(h,null,y,"mounted")},E)},q=(h,p,g,y,E)=>{if(g&&m(h,g),y)for(let w=0;w<y.length;w++)m(h,y[w]);if(E){let w=E.subTree;if(p===w){const k=E.vnode;q(h,k,k.scopeId,k.slotScopeIds,E.parent)}}},R=(h,p,g,y,E,w,k,T,C=0)=>{for(let I=C;I<h.length;I++){const F=h[I]=T?bt(h[I]):Xe(h[I]);b(null,F,p,g,y,E,w,k,T)}},H=(h,p,g,y,E,w,k)=>{const T=p.el=h.el;let{patchFlag:C,dynamicChildren:I,dirs:F}=p;C|=h.patchFlag&16;const x=h.props||ue,$=p.props||ue;let z;g&&Lt(g,!1),(z=$.onVnodeBeforeUpdate)&&Je(z,g,p,h),F&&xt(p,h,g,"beforeUpdate"),g&&Lt(g,!0);const J=E&&p.type!=="foreignObject";if(I?B(h.dynamicChildren,I,T,g,y,J,w):k||ee(h,p,T,null,g,y,J,w,!1),C>0){if(C&16)Q(T,p,x,$,g,y,E);else if(C&2&&x.class!==$.class&&i(T,"class",null,$.class,E),C&4&&i(T,"style",x.style,$.style,E),C&8){const le=p.dynamicProps;for(let oe=0;oe<le.length;oe++){const ve=le[oe],$e=x[ve],Zt=$[ve];(Zt!==$e||ve==="value")&&i(T,ve,$e,Zt,E,h.children,g,y,ae)}}C&1&&h.children!==p.children&&u(T,p.children)}else!k&&I==null&&Q(T,p,x,$,g,y,E);((z=$.onVnodeUpdated)||F)&&Te(()=>{z&&Je(z,g,p,h),F&&xt(p,h,g,"updated")},y)},B=(h,p,g,y,E,w,k)=>{for(let T=0;T<p.length;T++){const C=h[T],I=p[T],F=C.el&&(C.type===Me||!Ht(C,I)||C.shapeFlag&70)?f(C.el):g;b(C,I,F,null,y,E,w,k,!0)}},Q=(h,p,g,y,E,w,k)=>{if(g!==y){if(g!==ue)for(const T in g)!Ir(T)&&!(T in y)&&i(h,T,g[T],null,k,p.children,E,w,ae);for(const T in y){if(Ir(T))continue;const C=y[T],I=g[T];C!==I&&T!=="value"&&i(h,T,I,C,k,p.children,E,w,ae)}"value"in y&&i(h,"value",g.value,y.value)}},M=(h,p,g,y,E,w,k,T,C)=>{const I=p.el=h?h.el:c(""),F=p.anchor=h?h.anchor:c("");let{patchFlag:x,dynamicChildren:$,slotScopeIds:z}=p;z&&(T=T?T.concat(z):z),h==null?(r(I,g,y),r(F,g,y),R(p.children,g,F,E,w,k,T,C)):x>0&&x&64&&$&&h.dynamicChildren?(B(h.dynamicChildren,$,g,E,w,k,T),(p.key!=null||E&&p===E.subTree)&&Hi(h,p,!0)):ee(h,p,g,F,E,w,k,T,C)},X=(h,p,g,y,E,w,k,T,C)=>{p.slotScopeIds=T,h==null?p.shapeFlag&512?E.ctx.activate(p,g,y,k,C):he(p,g,y,E,w,k,C):Fe(h,p,C)},he=(h,p,g,y,E,w,k)=>{const T=h.component=Hd(h,y,E);if(ss(h)&&(T.ctx.renderer=A),jd(T),T.asyncDep){if(E&&E.registerDep(T,de),!h.el){const C=T.subTree=ne(Ve);S(null,C,p,g)}return}de(T,h,p,g,E,w,k)},Fe=(h,p,g)=>{const y=p.component=h.component;if(Zf(h,p,g))if(y.asyncDep&&!y.asyncResolved){re(y,p,g);return}else y.next=p,Kf(y.update),y.update();else p.el=h.el,y.vnode=p},de=(h,p,g,y,E,w,k)=>{const T=()=>{if(h.isMounted){let{next:F,bu:x,u:$,parent:z,vnode:J}=h,le=F,oe;Lt(h,!1),F?(F.el=J.el,re(h,F,k)):F=J,x&&_s(x),(oe=F.props&&F.props.onVnodeBeforeUpdate)&&Je(oe,z,F,J),Lt(h,!0);const ve=bs(h),$e=h.subTree;h.subTree=ve,b($e,ve,f($e.el),_($e),h,E,w),F.el=ve.el,le===null&&Qf(h,ve.el),$&&Te($,E),(oe=F.props&&F.props.onVnodeUpdated)&&Te(()=>Je(oe,z,F,J),E)}else{let F;const{el:x,props:$}=p,{bm:z,m:J,parent:le}=h,oe=Cr(p);if(Lt(h,!1),z&&_s(z),!oe&&(F=$&&$.onVnodeBeforeMount)&&Je(F,le,p),Lt(h,!0),x&&se){const ve=()=>{h.subTree=bs(h),se(x,h.subTree,h,E,null)};oe?p.type.__asyncLoader().then(()=>!h.isUnmounted&&ve()):ve()}else{const ve=h.subTree=bs(h);b(null,ve,g,y,h,E,w),p.el=ve.el}if(J&&Te(J,E),!oe&&(F=$&&$.onVnodeMounted)){const ve=p;Te(()=>Je(F,le,ve),E)}(p.shapeFlag&256||le&&Cr(le.vnode)&&le.vnode.shapeFlag&256)&&h.a&&Te(h.a,E),h.isMounted=!0,p=g=y=null}},C=h.effect=new Ti(T,()=>Di(I),h.scope),I=h.update=()=>C.run();I.id=h.uid,Lt(h,!0),I()},re=(h,p,g)=>{p.component=h;const y=h.vnode.props;h.vnode=p,h.next=null,Cd(h,p.props,y,g),Rd(h,p.children,g),_n(),Eo(),bn()},ee=(h,p,g,y,E,w,k,T,C=!1)=>{const I=h&&h.children,F=h?h.shapeFlag:0,x=p.children,{patchFlag:$,shapeFlag:z}=p;if($>0){if($&128){qe(I,x,g,y,E,w,k,T,C);return}else if($&256){Ae(I,x,g,y,E,w,k,T,C);return}}z&8?(F&16&&ae(I,E,w),x!==I&&u(g,x)):F&16?z&16?qe(I,x,g,y,E,w,k,T,C):ae(I,E,w,!0):(F&8&&u(g,""),z&16&&R(x,g,y,E,w,k,T,C))},Ae=(h,p,g,y,E,w,k,T,C)=>{h=h||sn,p=p||sn;const I=h.length,F=p.length,x=Math.min(I,F);let $;for($=0;$<x;$++){const z=p[$]=C?bt(p[$]):Xe(p[$]);b(h[$],z,g,null,E,w,k,T,C)}I>F?ae(h,E,w,!0,!1,x):R(p,g,y,E,w,k,T,C,x)},qe=(h,p,g,y,E,w,k,T,C)=>{let I=0;const F=p.length;let x=h.length-1,$=F-1;for(;I<=x&&I<=$;){const z=h[I],J=p[I]=C?bt(p[I]):Xe(p[I]);if(Ht(z,J))b(z,J,g,null,E,w,k,T,C);else break;I++}for(;I<=x&&I<=$;){const z=h[x],J=p[$]=C?bt(p[$]):Xe(p[$]);if(Ht(z,J))b(z,J,g,null,E,w,k,T,C);else break;x--,$--}if(I>x){if(I<=$){const z=$+1,J=z<F?p[z].el:y;for(;I<=$;)b(null,p[I]=C?bt(p[I]):Xe(p[I]),g,J,E,w,k,T,C),I++}}else if(I>$)for(;I<=x;)me(h[I],E,w,!0),I++;else{const z=I,J=I,le=new Map;for(I=J;I<=$;I++){const Se=p[I]=C?bt(p[I]):Xe(p[I]);Se.key!=null&&le.set(Se.key,I)}let oe,ve=0;const $e=$-J+1;let Zt=!1,lo=0;const In=new Array($e);for(I=0;I<$e;I++)In[I]=0;for(I=z;I<=x;I++){const Se=h[I];if(ve>=$e){me(Se,E,w,!0);continue}let Ye;if(Se.key!=null)Ye=le.get(Se.key);else for(oe=J;oe<=$;oe++)if(In[oe-J]===0&&Ht(Se,p[oe])){Ye=oe;break}Ye===void 0?me(Se,E,w,!0):(In[Ye-J]=I+1,Ye>=lo?lo=Ye:Zt=!0,b(Se,p[Ye],g,null,E,w,k,T,C),ve++)}const uo=Zt?kd(In):sn;for(oe=uo.length-1,I=$e-1;I>=0;I--){const Se=J+I,Ye=p[Se],fo=Se+1<F?p[Se+1].el:y;In[I]===0?b(null,Ye,g,fo,E,w,k,T,C):Zt&&(oe<0||I!==uo[oe]?ke(Ye,g,fo,2):oe--)}}},ke=(h,p,g,y,E=null)=>{const{el:w,type:k,transition:T,children:C,shapeFlag:I}=h;if(I&6){ke(h.component.subTree,p,g,y);return}if(I&128){h.suspense.move(p,g,y);return}if(I&64){k.move(h,p,g,A);return}if(k===Me){r(w,p,g);for(let x=0;x<C.length;x++)ke(C[x],p,g,y);r(h.anchor,p,g);return}if(k===Is){V(h,p,g);return}if(y!==2&&I&1&&T)if(y===0)T.beforeEnter(w),r(w,p,g),Te(()=>T.enter(w),E);else{const{leave:x,delayLeave:$,afterLeave:z}=T,J=()=>r(w,p,g),le=()=>{x(w,()=>{J(),z&&z()})};$?$(w,J,le):le()}else r(w,p,g)},me=(h,p,g,y=!1,E=!1)=>{const{type:w,props:k,ref:T,children:C,dynamicChildren:I,shapeFlag:F,patchFlag:x,dirs:$}=h;if(T!=null&&Ys(T,null,g,h,!0),F&256){p.ctx.deactivate(h);return}const z=F&1&&$,J=!Cr(h);let le;if(J&&(le=k&&k.onVnodeBeforeUnmount)&&Je(le,p,h),F&6)Nt(h.component,g,y);else{if(F&128){h.suspense.unmount(g,y);return}z&&xt(h,null,p,"beforeUnmount"),F&64?h.type.remove(h,p,g,E,A,y):I&&(w!==Me||x>0&&x&64)?ae(I,p,g,!1,!0):(w===Me&&x&384||!E&&F&16)&&ae(C,p,g),y&&Ge(h)}(J&&(le=k&&k.onVnodeUnmounted)||z)&&Te(()=>{le&&Je(le,p,h),z&&xt(h,null,p,"unmounted")},g)},Ge=h=>{const{type:p,el:g,anchor:y,transition:E}=h;if(p===Me){pt(g,y);return}if(p===Is){D(h);return}const w=()=>{s(g),E&&!E.persisted&&E.afterLeave&&E.afterLeave()};if(h.shapeFlag&1&&E&&!E.persisted){const{leave:k,delayLeave:T}=E,C=()=>k(g,w);T?T(h.el,w,C):C()}else w()},pt=(h,p)=>{let g;for(;h!==p;)g=d(h),s(h),h=g;s(p)},Nt=(h,p,g)=>{const{bum:y,scope:E,update:w,subTree:k,um:T}=h;y&&_s(y),E.stop(),w&&(w.active=!1,me(k,h,p,g)),T&&Te(T,p),Te(()=>{h.isUnmounted=!0},p),p&&p.pendingBranch&&!p.isUnmounted&&h.asyncDep&&!h.asyncResolved&&h.suspenseId===p.pendingId&&(p.deps--,p.deps===0&&p.resolve())},ae=(h,p,g,y=!1,E=!1,w=0)=>{for(let k=w;k<h.length;k++)me(h[k],p,g,y,E)},_=h=>h.shapeFlag&6?_(h.component.subTree):h.shapeFlag&128?h.suspense.next():d(h.anchor||h.el),N=(h,p,g)=>{h==null?p._vnode&&me(p._vnode,null,null,!0):b(p._vnode||null,h,p,null,null,null,g),Eo(),Uc(),p._vnode=h},A={p:b,um:me,m:ke,r:Ge,mt:he,mc:R,pc:ee,pbc:B,n:_,o:e};let L,se;return t&&([L,se]=t(A)),{render:N,hydrate:L,createApp:Id(N,L)}}function Lt({effect:e,update:t},n){e.allowRecurse=t.allowRecurse=n}function Hi(e,t,n=!1){const r=e.children,s=t.children;if(j(r)&&j(s))for(let i=0;i<r.length;i++){const o=r[i];let c=s[i];c.shapeFlag&1&&!c.dynamicChildren&&((c.patchFlag<=0||c.patchFlag===32)&&(c=s[i]=bt(s[i]),c.el=o.el),n||Hi(o,c)),c.type===as&&(c.el=o.el)}}function kd(e){const t=e.slice(),n=[0];let r,s,i,o,c;const a=e.length;for(r=0;r<a;r++){const l=e[r];if(l!==0){if(s=n[n.length-1],e[s]<l){t[r]=s,n.push(r);continue}for(i=0,o=n.length-1;i<o;)c=i+o>>1,e[n[c]]<l?i=c+1:o=c;l<e[n[i]]&&(i>0&&(t[r]=n[i-1]),n[i]=r)}}for(i=n.length,o=n[i-1];i-- >0;)n[i]=o,o=t[o];return n}const Dd=e=>e.__isTeleport,Mn=e=>e&&(e.disabled||e.disabled===""),Mo=e=>typeof SVGElement<"u"&&e instanceof SVGElement,Js=(e,t)=>{const n=e&&e.to;return ge(n)?t?t(n):null:n},Md={__isTeleport:!0,process(e,t,n,r,s,i,o,c,a,l){const{mc:u,pc:f,pbc:d,o:{insert:m,querySelector:v,createText:b,createComment:O}}=l,S=Mn(t.props);let{shapeFlag:P,children:V,dynamicChildren:D}=t;if(e==null){const Y=t.el=b(""),U=t.anchor=b("");m(Y,n,r),m(U,n,r);const q=t.target=Js(t.props,v),R=t.targetAnchor=b("");q&&(m(R,q),o=o||Mo(q));const H=(B,Q)=>{P&16&&u(V,B,Q,s,i,o,c,a)};S?H(n,U):q&&H(q,R)}else{t.el=e.el;const Y=t.anchor=e.anchor,U=t.target=e.target,q=t.targetAnchor=e.targetAnchor,R=Mn(e.props),H=R?n:U,B=R?Y:q;if(o=o||Mo(U),D?(d(e.dynamicChildren,D,H,s,i,o,c),Hi(e,t,!0)):a||f(e,t,H,B,s,i,o,c,!1),S)R||vr(t,n,Y,l,1);else if((t.props&&t.props.to)!==(e.props&&e.props.to)){const Q=t.target=Js(t.props,v);Q&&vr(t,Q,null,l,0)}else R&&vr(t,U,q,l,1)}sl(t)},remove(e,t,n,r,{um:s,o:{remove:i}},o){const{shapeFlag:c,children:a,anchor:l,targetAnchor:u,target:f,props:d}=e;if(f&&i(u),(o||!Mn(d))&&(i(l),c&16))for(let m=0;m<a.length;m++){const v=a[m];s(v,t,n,!0,!!v.dynamicChildren)}},move:vr,hydrate:Nd};function vr(e,t,n,{o:{insert:r},m:s},i=2){i===0&&r(e.targetAnchor,t,n);const{el:o,anchor:c,shapeFlag:a,children:l,props:u}=e,f=i===2;if(f&&r(o,t,n),(!f||Mn(u))&&a&16)for(let d=0;d<l.length;d++)s(l[d],t,n,2);f&&r(c,t,n)}function Nd(e,t,n,r,s,i,{o:{nextSibling:o,parentNode:c,querySelector:a}},l){const u=t.target=Js(t.props,a);if(u){const f=u._lpa||u.firstChild;if(t.shapeFlag&16)if(Mn(t.props))t.anchor=l(o(e),t,c(e),n,r,s,i),t.targetAnchor=f;else{t.anchor=o(e);let d=f;for(;d;)if(d=o(d),d&&d.nodeType===8&&d.data==="teleport anchor"){t.targetAnchor=d,u._lpa=t.targetAnchor&&o(t.targetAnchor);break}l(f,t,u,n,r,s,i)}sl(t)}return t.anchor&&o(t.anchor)}const cb=Md;function sl(e){const t=e.ctx;if(t&&t.ut){let n=e.children[0].el;for(;n!==e.targetAnchor;)n.nodeType===1&&n.setAttribute("data-v-owner",t.uid),n=n.nextSibling;t.ut()}}const Me=Symbol.for("v-fgt"),as=Symbol.for("v-txt"),Ve=Symbol.for("v-cmt"),Is=Symbol.for("v-stc"),Nn=[];let He=null;function il(e=!1){Nn.push(He=e?null:[])}function xd(){Nn.pop(),He=Nn[Nn.length-1]||null}let Wn=1;function No(e){Wn+=e}function ol(e){return e.dynamicChildren=Wn>0?He||sn:null,xd(),Wn>0&&He&&He.push(e),e}function lb(e,t,n,r,s,i){return ol(ll(e,t,n,r,s,i,!0))}function al(e,t,n,r,s){return ol(ne(e,t,n,r,s,!0))}function Xs(e){return e?e.__v_isVNode===!0:!1}function Ht(e,t){return e.type===t.type&&e.key===t.key}const cs="__vInternal",cl=({key:e})=>e??null,Ar=({ref:e,ref_key:t,ref_for:n})=>(typeof e=="number"&&(e=""+e),e!=null?ge(e)||_e(e)||K(e)?{i:Pe,r:e,k:t,f:!!n}:e:null);function ll(e,t=null,n=null,r=0,s=null,i=e===Me?0:1,o=!1,c=!1){const a={__v_isVNode:!0,__v_skip:!0,type:e,props:t,key:t&&cl(t),ref:t&&Ar(t),scopeId:jc,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:i,patchFlag:r,dynamicProps:s,dynamicChildren:null,appContext:null,ctx:Pe};return c?(ji(a,n),i&128&&e.normalize(a)):n&&(a.shapeFlag|=ge(n)?8:16),Wn>0&&!o&&He&&(a.patchFlag>0||i&6)&&a.patchFlag!==32&&He.push(a),a}const ne=Ld;function Ld(e,t=null,n=null,r=0,s=null,i=!1){if((!e||e===Jc)&&(e=Ve),Xs(e)){const c=kt(e,t,!0);return n&&ji(c,n),Wn>0&&!i&&He&&(c.shapeFlag&6?He[He.indexOf(e)]=c:He.push(c)),c.patchFlag|=-2,c}if(qd(e)&&(e=e.__vccOpts),t){t=Fd(t);let{class:c,style:a}=t;c&&!ge(c)&&(t.class=wi(c)),fe(a)&&(Pc(a)&&!j(a)&&(a=pe({},a)),t.style=Ei(a))}const o=ge(e)?1:ed(e)?128:Dd(e)?64:fe(e)?4:K(e)?2:0;return ll(e,t,n,r,s,o,i,!0)}function Fd(e){return e?Pc(e)||cs in e?pe({},e):e:null}function kt(e,t,n=!1){const{props:r,ref:s,patchFlag:i,children:o}=e,c=t?ul(r||{},t):r;return{__v_isVNode:!0,__v_skip:!0,type:e.type,props:c,key:c&&cl(c),ref:t&&t.ref?n&&s?j(s)?s.concat(Ar(t)):[s,Ar(t)]:Ar(t):s,scopeId:e.scopeId,slotScopeIds:e.slotScopeIds,children:o,target:e.target,targetAnchor:e.targetAnchor,staticCount:e.staticCount,shapeFlag:e.shapeFlag,patchFlag:t&&e.type!==Me?i===-1?16:i|16:i,dynamicProps:e.dynamicProps,dynamicChildren:e.dynamicChildren,appContext:e.appContext,dirs:e.dirs,transition:e.transition,component:e.component,suspense:e.suspense,ssContent:e.ssContent&&kt(e.ssContent),ssFallback:e.ssFallback&&kt(e.ssFallback),el:e.el,anchor:e.anchor,ctx:e.ctx,ce:e.ce}}function $d(e=" ",t=0){return ne(as,null,e,t)}function ub(e="",t=!1){return t?(il(),al(Ve,null,e)):ne(Ve,null,e)}function Xe(e){return e==null||typeof e=="boolean"?ne(Ve):j(e)?ne(Me,null,e.slice()):typeof e=="object"?bt(e):ne(as,null,String(e))}function bt(e){return e.el===null&&e.patchFlag!==-1||e.memo?e:kt(e)}function ji(e,t){let n=0;const{shapeFlag:r}=e;if(t==null)t=null;else if(j(t))n=16;else if(typeof t=="object")if(r&65){const s=t.default;s&&(s._c&&(s._d=!1),ji(e,s()),s._c&&(s._d=!0));return}else{n=32;const s=t._;!s&&!(cs in t)?t._ctx=Pe:s===3&&Pe&&(Pe.slots._===1?t._=1:(t._=2,e.patchFlag|=1024))}else K(t)?(t={default:t,_ctx:Pe},n=32):(t=String(t),r&64?(n=16,t=[$d(t)]):n=8);e.children=t,e.shapeFlag|=n}function ul(...e){const t={};for(let n=0;n<e.length;n++){const r=e[n];for(const s in r)if(s==="class")t.class!==r.class&&(t.class=wi([t.class,r.class]));else if(s==="style")t.style=Ei([t.style,r.style]);else if(Xr(s)){const i=t[s],o=r[s];o&&i!==o&&!(j(i)&&i.includes(o))&&(t[s]=i?[].concat(i,o):o)}else s!==""&&(t[s]=r[s])}return t}function Je(e,t,n,r=null){Le(e,t,7,[n,r])}const Ud=Zc();let Bd=0;function Hd(e,t,n){const r=e.type,s=(t?t.appContext:e.appContext)||Ud,i={uid:Bd++,vnode:e,type:r,parent:t,appContext:s,root:null,next:null,subTree:null,effect:null,update:null,scope:new vc(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:t?t.provides:Object.create(s.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:el(r,s),emitsOptions:Hc(r,s),emit:null,emitted:null,propsDefaults:ue,inheritAttrs:r.inheritAttrs,ctx:ue,data:ue,props:ue,attrs:ue,slots:ue,refs:ue,setupState:ue,setupContext:null,attrsProxy:null,slotsProxy:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return i.ctx={_:i},i.root=t?t.root:i,i.emit=Yf.bind(null,i),e.ce&&e.ce(i),i}let ye=null;const Vi=()=>ye||Pe;let Wi,Qt,xo="__VUE_INSTANCE_SETTERS__";(Qt=Bs()[xo])||(Qt=Bs()[xo]=[]),Qt.push(e=>ye=e),Wi=e=>{Qt.length>1?Qt.forEach(t=>t(e)):Qt[0](e)};const hn=e=>{Wi(e),e.scope.on()},qt=()=>{ye&&ye.scope.off(),Wi(null)};function fl(e){return e.vnode.shapeFlag&4}let zn=!1;function jd(e,t=!1){zn=t;const{props:n,children:r}=e.vnode,s=fl(e);Td(e,n,s,t),Sd(e,r);const i=s?Vd(e,t):void 0;return zn=!1,i}function Vd(e,t){const n=e.type;e.accessCache=Object.create(null),e.proxy=Oc(new Proxy(e.ctx,md));const{setup:r}=n;if(r){const s=e.setupContext=r.length>1?zd(e):null;hn(e),_n();const i=St(r,e,0,[e.props,s]);if(bn(),qt(),dc(i)){if(i.then(qt,qt),t)return i.then(o=>{Lo(e,o,t)}).catch(o=>{ns(o,e,0)});e.asyncDep=i}else Lo(e,i,t)}else dl(e,t)}function Lo(e,t,n){K(t)?e.type.__ssrInlineRender?e.ssrRender=t:e.render=t:fe(t)&&(e.setupState=Nc(t)),dl(e,n)}let Fo;function dl(e,t,n){const r=e.type;if(!e.render){if(!t&&Fo&&!r.render){const s=r.template||Ui(e).template;if(s){const{isCustomElement:i,compilerOptions:o}=e.appContext.config,{delimiters:c,compilerOptions:a}=r,l=pe(pe({isCustomElement:i,delimiters:c},o),a);r.render=Fo(s,l)}}e.render=r.render||je}hn(e),_n(),vd(e),bn(),qt()}function Wd(e){return e.attrsProxy||(e.attrsProxy=new Proxy(e.attrs,{get(t,n){return Ce(e,"get","$attrs"),t[n]}}))}function zd(e){const t=n=>{e.exposed=n||{}};return{get attrs(){return Wd(e)},slots:e.slots,emit:e.emit,expose:t}}function ls(e){if(e.exposed)return e.exposeProxy||(e.exposeProxy=new Proxy(Nc(Oc(e.exposed)),{get(t,n){if(n in t)return t[n];if(n in Dn)return Dn[n](e)},has(t,n){return n in t||n in Dn}}))}function Kd(e,t=!0){return K(e)?e.displayName||e.name:e.name||t&&e.__name}function qd(e){return K(e)&&"__vccOpts"in e}const G=(e,t)=>Vf(e,t,zn);function us(e,t,n){const r=arguments.length;return r===2?fe(t)&&!j(t)?Xs(t)?ne(e,null,[t]):ne(e,t):ne(e,null,t):(r>3?n=Array.prototype.slice.call(arguments,2):r===3&&Xs(n)&&(n=[n]),ne(e,t,n))}const Gd=Symbol.for("v-scx"),Yd=()=>be(Gd),Jd="3.3.4",Xd="http://www.w3.org/2000/svg",jt=typeof document<"u"?document:null,$o=jt&&jt.createElement("template"),Zd={insert:(e,t,n)=>{t.insertBefore(e,n||null)},remove:e=>{const t=e.parentNode;t&&t.removeChild(e)},createElement:(e,t,n,r)=>{const s=t?jt.createElementNS(Xd,e):jt.createElement(e,n?{is:n}:void 0);return e==="select"&&r&&r.multiple!=null&&s.setAttribute("multiple",r.multiple),s},createText:e=>jt.createTextNode(e),createComment:e=>jt.createComment(e),setText:(e,t)=>{e.nodeValue=t},setElementText:(e,t)=>{e.textContent=t},parentNode:e=>e.parentNode,nextSibling:e=>e.nextSibling,querySelector:e=>jt.querySelector(e),setScopeId(e,t){e.setAttribute(t,"")},insertStaticContent(e,t,n,r,s,i){const o=n?n.previousSibling:t.lastChild;if(s&&(s===i||s.nextSibling))for(;t.insertBefore(s.cloneNode(!0),n),!(s===i||!(s=s.nextSibling)););else{$o.innerHTML=r?`<svg>${e}</svg>`:e;const c=$o.content;if(r){const a=c.firstChild;for(;a.firstChild;)c.appendChild(a.firstChild);c.removeChild(a)}t.insertBefore(c,n)}return[o?o.nextSibling:t.firstChild,n?n.previousSibling:t.lastChild]}};function Qd(e,t,n){const r=e._vtc;r&&(t=(t?[t,...r]:[...r]).join(" ")),t==null?e.removeAttribute("class"):n?e.setAttribute("class",t):e.className=t}function eh(e,t,n){const r=e.style,s=ge(n);if(n&&!s){if(t&&!ge(t))for(const i in t)n[i]==null&&Zs(r,i,"");for(const i in n)Zs(r,i,n[i])}else{const i=r.display;s?t!==n&&(r.cssText=n):t&&e.removeAttribute("style"),"_vod"in e&&(r.display=i)}}const Uo=/\s*!important$/;function Zs(e,t,n){if(j(n))n.forEach(r=>Zs(e,t,r));else if(n==null&&(n=""),t.startsWith("--"))e.setProperty(t,n);else{const r=th(e,t);Uo.test(n)?e.setProperty(yn(r),n.replace(Uo,""),"important"):e[r]=n}}const Bo=["Webkit","Moz","ms"],Ts={};function th(e,t){const n=Ts[t];if(n)return n;let r=nt(t);if(r!=="filter"&&r in e)return Ts[t]=r;r=er(r);for(let s=0;s<Bo.length;s++){const i=Bo[s]+r;if(i in e)return Ts[t]=i}return t}const Ho="http://www.w3.org/1999/xlink";function nh(e,t,n,r,s){if(r&&t.startsWith("xlink:"))n==null?e.removeAttributeNS(Ho,t.slice(6,t.length)):e.setAttributeNS(Ho,t,n);else{const i=of(t);n==null||i&&!gc(n)?e.removeAttribute(t):e.setAttribute(t,i?"":n)}}function rh(e,t,n,r,s,i,o){if(t==="innerHTML"||t==="textContent"){r&&o(r,s,i),e[t]=n??"";return}const c=e.tagName;if(t==="value"&&c!=="PROGRESS"&&!c.includes("-")){e._value=n;const l=c==="OPTION"?e.getAttribute("value"):e.value,u=n??"";l!==u&&(e.value=u),n==null&&e.removeAttribute(t);return}let a=!1;if(n===""||n==null){const l=typeof e[t];l==="boolean"?n=gc(n):n==null&&l==="string"?(n="",a=!0):l==="number"&&(n=0,a=!0)}try{e[t]=n}catch{}a&&e.removeAttribute(t)}function sh(e,t,n,r){e.addEventListener(t,n,r)}function ih(e,t,n,r){e.removeEventListener(t,n,r)}function oh(e,t,n,r,s=null){const i=e._vei||(e._vei={}),o=i[t];if(r&&o)o.value=r;else{const[c,a]=ah(t);if(r){const l=i[t]=uh(r,s);sh(e,c,l,a)}else o&&(ih(e,c,o,a),i[t]=void 0)}}const jo=/(?:Once|Passive|Capture)$/;function ah(e){let t;if(jo.test(e)){t={};let r;for(;r=e.match(jo);)e=e.slice(0,e.length-r[0].length),t[r[0].toLowerCase()]=!0}return[e[2]===":"?e.slice(3):yn(e.slice(2)),t]}let Cs=0;const ch=Promise.resolve(),lh=()=>Cs||(ch.then(()=>Cs=0),Cs=Date.now());function uh(e,t){const n=r=>{if(!r._vts)r._vts=Date.now();else if(r._vts<=n.attached)return;Le(fh(r,n.value),t,5,[r])};return n.value=e,n.attached=lh(),n}function fh(e,t){if(j(t)){const n=e.stopImmediatePropagation;return e.stopImmediatePropagation=()=>{n.call(e),e._stopped=!0},t.map(r=>s=>!s._stopped&&r&&r(s))}else return t}const Vo=/^on[a-z]/,dh=(e,t,n,r,s=!1,i,o,c,a)=>{t==="class"?Qd(e,r,s):t==="style"?eh(e,n,r):Xr(t)?vi(t)||oh(e,t,n,r,o):(t[0]==="."?(t=t.slice(1),!0):t[0]==="^"?(t=t.slice(1),!1):hh(e,t,r,s))?rh(e,t,r,i,o,c,a):(t==="true-value"?e._trueValue=r:t==="false-value"&&(e._falseValue=r),nh(e,t,r,s))};function hh(e,t,n,r){return r?!!(t==="innerHTML"||t==="textContent"||t in e&&Vo.test(t)&&K(n)):t==="spellcheck"||t==="draggable"||t==="translate"||t==="form"||t==="list"&&e.tagName==="INPUT"||t==="type"&&e.tagName==="TEXTAREA"||Vo.test(t)&&ge(n)?!1:t in e}const mt="transition",Tn="animation",hl=(e,{slots:t})=>us(sd,gl(e),t);hl.displayName="Transition";const pl={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String},ph=hl.props=pe({},zc,pl),Ft=(e,t=[])=>{j(e)?e.forEach(n=>n(...t)):e&&e(...t)},Wo=e=>e?j(e)?e.some(t=>t.length>1):e.length>1:!1;function gl(e){const t={};for(const M in e)M in pl||(t[M]=e[M]);if(e.css===!1)return t;const{name:n="v",type:r,duration:s,enterFromClass:i=`${n}-enter-from`,enterActiveClass:o=`${n}-enter-active`,enterToClass:c=`${n}-enter-to`,appearFromClass:a=i,appearActiveClass:l=o,appearToClass:u=c,leaveFromClass:f=`${n}-leave-from`,leaveActiveClass:d=`${n}-leave-active`,leaveToClass:m=`${n}-leave-to`}=e,v=gh(s),b=v&&v[0],O=v&&v[1],{onBeforeEnter:S,onEnter:P,onEnterCancelled:V,onLeave:D,onLeaveCancelled:Y,onBeforeAppear:U=S,onAppear:q=P,onAppearCancelled:R=V}=t,H=(M,X,he)=>{_t(M,X?u:c),_t(M,X?l:o),he&&he()},B=(M,X)=>{M._isLeaving=!1,_t(M,f),_t(M,m),_t(M,d),X&&X()},Q=M=>(X,he)=>{const Fe=M?q:P,de=()=>H(X,M,he);Ft(Fe,[X,de]),zo(()=>{_t(X,M?a:i),st(X,M?u:c),Wo(Fe)||Ko(X,r,b,de)})};return pe(t,{onBeforeEnter(M){Ft(S,[M]),st(M,i),st(M,o)},onBeforeAppear(M){Ft(U,[M]),st(M,a),st(M,l)},onEnter:Q(!1),onAppear:Q(!0),onLeave(M,X){M._isLeaving=!0;const he=()=>B(M,X);st(M,f),vl(),st(M,d),zo(()=>{M._isLeaving&&(_t(M,f),st(M,m),Wo(D)||Ko(M,r,O,he))}),Ft(D,[M,he])},onEnterCancelled(M){H(M,!1),Ft(V,[M])},onAppearCancelled(M){H(M,!0),Ft(R,[M])},onLeaveCancelled(M){B(M),Ft(Y,[M])}})}function gh(e){if(e==null)return null;if(fe(e))return[As(e.enter),As(e.leave)];{const t=As(e);return[t,t]}}function As(e){return Qu(e)}function st(e,t){t.split(/\s+/).forEach(n=>n&&e.classList.add(n)),(e._vtc||(e._vtc=new Set)).add(t)}function _t(e,t){t.split(/\s+/).forEach(r=>r&&e.classList.remove(r));const{_vtc:n}=e;n&&(n.delete(t),n.size||(e._vtc=void 0))}function zo(e){requestAnimationFrame(()=>{requestAnimationFrame(e)})}let mh=0;function Ko(e,t,n,r){const s=e._endId=++mh,i=()=>{s===e._endId&&r()};if(n)return setTimeout(i,n);const{type:o,timeout:c,propCount:a}=ml(e,t);if(!o)return r();const l=o+"end";let u=0;const f=()=>{e.removeEventListener(l,d),i()},d=m=>{m.target===e&&++u>=a&&f()};setTimeout(()=>{u<a&&f()},c+1),e.addEventListener(l,d)}function ml(e,t){const n=window.getComputedStyle(e),r=v=>(n[v]||"").split(", "),s=r(`${mt}Delay`),i=r(`${mt}Duration`),o=qo(s,i),c=r(`${Tn}Delay`),a=r(`${Tn}Duration`),l=qo(c,a);let u=null,f=0,d=0;t===mt?o>0&&(u=mt,f=o,d=i.length):t===Tn?l>0&&(u=Tn,f=l,d=a.length):(f=Math.max(o,l),u=f>0?o>l?mt:Tn:null,d=u?u===mt?i.length:a.length:0);const m=u===mt&&/\b(transform|all)(,|$)/.test(r(`${mt}Property`).toString());return{type:u,timeout:f,propCount:d,hasTransform:m}}function qo(e,t){for(;e.length<t.length;)e=e.concat(e);return Math.max(...t.map((n,r)=>Go(n)+Go(e[r])))}function Go(e){return Number(e.slice(0,-1).replace(",","."))*1e3}function vl(){return document.body.offsetHeight}const yl=new WeakMap,_l=new WeakMap,bl={name:"TransitionGroup",props:pe({},ph,{tag:String,moveClass:String}),setup(e,{slots:t}){const n=Vi(),r=Wc();let s,i;return Gc(()=>{if(!s.length)return;const o=e.moveClass||`${e.name||"v"}-move`;if(!Eh(s[0].el,n.vnode.el,o))return;s.forEach(yh),s.forEach(_h);const c=s.filter(bh);vl(),c.forEach(a=>{const l=a.el,u=l.style;st(l,o),u.transform=u.webkitTransform=u.transitionDuration="";const f=l._moveCb=d=>{d&&d.target!==l||(!d||/transform$/.test(d.propertyName))&&(l.removeEventListener("transitionend",f),l._moveCb=null,_t(l,o))};l.addEventListener("transitionend",f)})}),()=>{const o=Z(e),c=gl(o);let a=o.tag||Me;s=i,i=t.default?Ni(t.default()):[];for(let l=0;l<i.length;l++){const u=i[l];u.key!=null&&Vn(u,jn(u,c,r,n))}if(s)for(let l=0;l<s.length;l++){const u=s[l];Vn(u,jn(u,c,r,n)),yl.set(u,u.el.getBoundingClientRect())}return ne(a,null,i)}}},vh=e=>delete e.mode;bl.props;const fb=bl;function yh(e){const t=e.el;t._moveCb&&t._moveCb(),t._enterCb&&t._enterCb()}function _h(e){_l.set(e,e.el.getBoundingClientRect())}function bh(e){const t=yl.get(e),n=_l.get(e),r=t.left-n.left,s=t.top-n.top;if(r||s){const i=e.el.style;return i.transform=i.webkitTransform=`translate(${r}px,${s}px)`,i.transitionDuration="0s",e}}function Eh(e,t,n){const r=e.cloneNode();e._vtc&&e._vtc.forEach(o=>{o.split(/\s+/).forEach(c=>c&&r.classList.remove(c))}),n.split(/\s+/).forEach(o=>o&&r.classList.add(o)),r.style.display="none";const s=t.nodeType===1?t:t.parentNode;s.appendChild(r);const{hasTransform:i}=ml(r);return s.removeChild(r),i}const wh=["ctrl","shift","alt","meta"],Ih={stop:e=>e.stopPropagation(),prevent:e=>e.preventDefault(),self:e=>e.target!==e.currentTarget,ctrl:e=>!e.ctrlKey,shift:e=>!e.shiftKey,alt:e=>!e.altKey,meta:e=>!e.metaKey,left:e=>"button"in e&&e.button!==0,middle:e=>"button"in e&&e.button!==1,right:e=>"button"in e&&e.button!==2,exact:(e,t)=>wh.some(n=>e[`${n}Key`]&&!t.includes(n))},db=(e,t)=>(n,...r)=>{for(let s=0;s<t.length;s++){const i=Ih[t[s]];if(i&&i(n,t))return}return e(n,...r)},hb={beforeMount(e,{value:t},{transition:n}){e._vod=e.style.display==="none"?"":e.style.display,n&&t?n.beforeEnter(e):Cn(e,t)},mounted(e,{value:t},{transition:n}){n&&t&&n.enter(e)},updated(e,{value:t,oldValue:n},{transition:r}){!t!=!n&&(r?t?(r.beforeEnter(e),Cn(e,!0),r.enter(e)):r.leave(e,()=>{Cn(e,!1)}):Cn(e,t))},beforeUnmount(e,{value:t}){Cn(e,t)}};function Cn(e,t){e.style.display=t?e._vod:"none"}const Th=pe({patchProp:dh},Zd);let Yo;function Ch(){return Yo||(Yo=Pd(Th))}const Ah=(...e)=>{const t=Ch().createApp(...e),{mount:n}=t;return t.mount=r=>{const s=Sh(r);if(!s)return;const i=t._component;!K(i)&&!i.render&&!i.template&&(i.template=s.innerHTML),s.innerHTML="";const o=n(s,!1,s instanceof SVGElement);return s instanceof Element&&(s.removeAttribute("v-cloak"),s.setAttribute("data-v-app","")),o},t};function Sh(e){return ge(e)?document.querySelector(e):e}const Rh=(e,t)=>{const n=e.__vccOpts||e;for(const[r,s]of t)n[r]=s;return n};function dt(e,t){return n=>Object.keys(e).reduce((r,s)=>{const o=typeof e[s]=="object"&&e[s]!=null&&!Array.isArray(e[s])?e[s]:{type:e[s]};return n&&s in n?r[s]={...o,default:n[s]}:r[s]=o,t&&!r[s].source&&(r[s].source=t),r},{})}const zi=dt({class:[String,Array],style:{type:[String,Array,Object],default:null}},"component");function El(e,t,n){const r=t.length-1;if(r<0)return e===void 0?n:e;for(let s=0;s<r;s++){if(e==null)return n;e=e[t[s]]}return e==null||e[t[r]]===void 0?n:e[t[r]]}function Ph(e,t){if(e===t)return!0;if(e instanceof Date&&t instanceof Date&&e.getTime()!==t.getTime()||e!==Object(e)||t!==Object(t))return!1;const n=Object.keys(e);return n.length!==Object.keys(t).length?!1:n.every(r=>Ph(e[r],t[r]))}function Qs(e,t,n){return e==null||!t||typeof t!="string"?n:e[t]!==void 0?e[t]:(t=t.replace(/\[(\w+)\]/g,".$1"),t=t.replace(/^\./,""),El(e,t.split("."),n))}function pb(e,t,n){if(t==null)return e===void 0?n:e;if(e!==Object(e)){if(typeof t!="function")return n;const s=t(e,n);return typeof s>"u"?n:s}if(typeof t=="string")return Qs(e,t,n);if(Array.isArray(t))return El(e,t,n);if(typeof t!="function")return n;const r=t(e,n);return typeof r>"u"?n:r}function wl(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:0;return Array.from({length:e},(n,r)=>t+r)}function yr(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"px";if(!(e==null||e===""))return isNaN(+e)?String(e):isFinite(+e)?`${Number(e)}${t}`:void 0}function Jo(e){return e!==null&&typeof e=="object"&&!Array.isArray(e)}function Xo(e){return e&&"$el"in e?e.$el:e}const gb=Object.freeze({enter:13,tab:9,delete:46,esc:27,space:32,up:38,down:40,left:37,right:39,end:35,home:36,del:46,backspace:8,insert:45,pageup:33,pagedown:34,shift:16});function Ss(e,t){return t.every(n=>e.hasOwnProperty(n))}function Il(e,t,n){const r=Object.create(null),s=Object.create(null);for(const i in e)t.some(o=>o instanceof RegExp?o.test(i):o===i)&&!(n!=null&&n.some(o=>o===i))?r[i]=e[i]:s[i]=e[i];return[r,s]}function mb(e,t){const n={...e};return t.forEach(r=>delete n[r]),n}function vb(e){return Il(e,["class","style","id",/^data-/])}function yb(e){return e==null?[]:Array.isArray(e)?e:[e]}function Oh(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:0,n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:1;return Math.max(t,Math.min(n,e))}function Zo(e,t){let n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:"0";return e+n.repeat(Math.max(0,t-e.length))}function kh(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:1;const n=[];let r=0;for(;r<e.length;)n.push(e.substr(r,t)),r+=t;return n}function _b(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:1e3;if(e<t)return`${e} B`;const n=t===1024?["Ki","Mi","Gi"]:["k","M","G"];let r=-1;for(;Math.abs(e)>=t&&r<n.length-1;)e/=t,++r;return`${e.toFixed(1)} ${n[r]}B`}function xe(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=arguments.length>2?arguments[2]:void 0;const r={};for(const s in e)r[s]=e[s];for(const s in t){const i=e[s],o=t[s];if(Jo(i)&&Jo(o)){r[s]=xe(i,o,n);continue}if(Array.isArray(i)&&Array.isArray(o)&&n){r[s]=n(i,o);continue}r[s]=o}return r}function Dh(e){return e.map(t=>t.type===Me?Dh(t.children):t).flat()}function Gt(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"";if(Gt.cache.has(e))return Gt.cache.get(e);const t=e.replace(/[^a-z]/gi,"-").replace(/\B([A-Z])/g,"-$1").toLowerCase();return Gt.cache.set(e,t),t}Gt.cache=new Map;function Sr(e,t){if(!t||typeof t!="object")return[];if(Array.isArray(t))return t.map(n=>Sr(e,n)).flat(1);if(Array.isArray(t.children))return t.children.map(n=>Sr(e,n)).flat(1);if(t.component){if(Object.getOwnPropertySymbols(t.component.provides).includes(e))return[t.component];if(t.component.subTree)return Sr(e,t.component.subTree).flat(1)}return[]}function bb(e){const t=Ne({}),n=G(e);return tr(()=>{for(const r in n.value)t[r]=n.value[r]},{flush:"sync"}),xc(t)}function Eb(e,t){return e.includes(t)}const Mh=/^on[^a-z]/,wb=e=>Mh.test(e);function Ib(e){return e[2].toLowerCase()+e.slice(3)}const Tb=()=>[Function,Array];function Cb(e,t){return t="on"+er(t),!!(e[t]||e[`${t}Once`]||e[`${t}Capture`]||e[`${t}OnceCapture`]||e[`${t}CaptureOnce`])}function Ab(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];if(Array.isArray(e))for(const s of e)s(...n);else typeof e=="function"&&e(...n)}function Nh(e){const t=["button","[href]",'input:not([type="hidden"])',"select","textarea","[tabindex]"].map(n=>`${n}:not([tabindex="-1"]):not([disabled])`).join(", ");return[...e.querySelectorAll(t)]}function xh(e,t){var s,i,o;const n=Nh(e),r=n.indexOf(document.activeElement);if(!t)(e===document.activeElement||!e.contains(document.activeElement))&&((s=n[0])==null||s.focus());else if(t==="first")(i=n[0])==null||i.focus();else if(t==="last")(o=n.at(-1))==null||o.focus();else{let c,a=r;const l=t==="next"?1:-1;do a+=l,c=n[a];while((!c||c.offsetParent==null)&&a<n.length&&a>=0);c?c.focus():xh(e,t==="next"?"first":"last")}}function Sb(e,t){t=Array.isArray(t)?t.slice(0,-1).map(n=>`'${n}'`).join(", ")+` or '${t.at(-1)}'`:`'${t}'`}const Br=.20689655172413793,Lh=e=>e>Br**3?Math.cbrt(e):e/(3*Br**2)+4/29,Fh=e=>e>Br?e**3:3*Br**2*(e-4/29);function Tl(e){const t=Lh,n=t(e[1]);return[116*n-16,500*(t(e[0]/.95047)-n),200*(n-t(e[2]/1.08883))]}function Cl(e){const t=Fh,n=(e[0]+16)/116;return[t(n+e[1]/500)*.95047,t(n),t(n-e[2]/200)*1.08883]}const $h=[[3.2406,-1.5372,-.4986],[-.9689,1.8758,.0415],[.0557,-.204,1.057]],Uh=e=>e<=.0031308?e*12.92:1.055*e**(1/2.4)-.055,Bh=[[.4124,.3576,.1805],[.2126,.7152,.0722],[.0193,.1192,.9505]],Hh=e=>e<=.04045?e/12.92:((e+.055)/1.055)**2.4;function Al(e){const t=Array(3),n=Uh,r=$h;for(let s=0;s<3;++s)t[s]=Math.round(Oh(n(r[s][0]*e[0]+r[s][1]*e[1]+r[s][2]*e[2]))*255);return{r:t[0],g:t[1],b:t[2]}}function Ki(e){let{r:t,g:n,b:r}=e;const s=[0,0,0],i=Hh,o=Bh;t=i(t/255),n=i(n/255),r=i(r/255);for(let c=0;c<3;++c)s[c]=o[c][0]*t+o[c][1]*n+o[c][2]*r;return s}function Rb(e){return!!e&&/^(#|var\(--|(rgb|hsl)a?\()/.test(e)}const Qo=/^(?<fn>(?:rgb|hsl)a?)\((?<values>.+)\)/,jh={rgb:(e,t,n,r)=>({r:e,g:t,b:n,a:r}),rgba:(e,t,n,r)=>({r:e,g:t,b:n,a:r}),hsl:(e,t,n,r)=>ea({h:e,s:t,l:n,a:r}),hsla:(e,t,n,r)=>ea({h:e,s:t,l:n,a:r}),hsv:(e,t,n,r)=>Kn({h:e,s:t,v:n,a:r}),hsva:(e,t,n,r)=>Kn({h:e,s:t,v:n,a:r})};function Wt(e){if(typeof e=="number")return{r:(e&16711680)>>16,g:(e&65280)>>8,b:e&255};if(typeof e=="string"&&Qo.test(e)){const{groups:t}=e.match(Qo),{fn:n,values:r}=t,s=r.split(/,\s*/).map(i=>i.endsWith("%")&&["hsl","hsla","hsv","hsva"].includes(n)?parseFloat(i)/100:parseFloat(i));return jh[n](...s)}else if(typeof e=="string"){let t=e.startsWith("#")?e.slice(1):e;return[3,4].includes(t.length)?t=t.split("").map(n=>n+n).join(""):[6,8].includes(t.length),Wh(t)}else if(typeof e=="object"){if(Ss(e,["r","g","b"]))return e;if(Ss(e,["h","s","l"]))return Kn(Sl(e));if(Ss(e,["h","s","v"]))return Kn(e)}throw new TypeError(`Invalid color: ${e==null?e:String(e)||e.constructor.name}
Expected #hex, #hexa, rgb(), rgba(), hsl(), hsla(), object or number`)}function Kn(e){const{h:t,s:n,v:r,a:s}=e,i=c=>{const a=(c+t/60)%6;return r-r*n*Math.max(Math.min(a,4-a,1),0)},o=[i(5),i(3),i(1)].map(c=>Math.round(c*255));return{r:o[0],g:o[1],b:o[2],a:s}}function ea(e){return Kn(Sl(e))}function Sl(e){const{h:t,s:n,l:r,a:s}=e,i=r+n*Math.min(r,1-r),o=i===0?0:2-2*r/i;return{h:t,s:o,v:i,a:s}}function _r(e){const t=Math.round(e).toString(16);return("00".substr(0,2-t.length)+t).toUpperCase()}function Vh(e){let{r:t,g:n,b:r,a:s}=e;return`#${[_r(t),_r(n),_r(r),s!==void 0?_r(Math.round(s*255)):""].join("")}`}function Wh(e){e=zh(e);let[t,n,r,s]=kh(e,2).map(i=>parseInt(i,16));return s=s===void 0?s:s/255,{r:t,g:n,b:r,a:s}}function zh(e){return e.startsWith("#")&&(e=e.slice(1)),e=e.replace(/([^0-9a-f])/gi,"F"),(e.length===3||e.length===4)&&(e=e.split("").map(t=>t+t).join("")),e.length!==6&&(e=Zo(Zo(e,6),8,"F")),e}function Kh(e,t){const n=Tl(Ki(e));return n[0]=n[0]+t*10,Al(Cl(n))}function qh(e,t){const n=Tl(Ki(e));return n[0]=n[0]-t*10,Al(Cl(n))}function Gh(e){const t=Wt(e);return Ki(t)[1]}function Rl(e,t){let n;function r(){n=af(),n.run(()=>t.length?t(()=>{n==null||n.stop(),r()}):t())}Qe(e,s=>{s&&!n?r():s||(n==null||n.stop(),n=void 0)},{immediate:!0}),uf(()=>{n==null||n.stop()})}const qn=Symbol.for("vuetify:defaults");function Yh(e){return Oe(e)}function qi(){const e=be(qn);if(!e)throw new Error("[Vuetify] Could not find defaults instance");return e}function Jh(e,t){const n=qi(),r=Oe(e),s=G(()=>{if(Be(t==null?void 0:t.disabled))return n.value;const o=Be(t==null?void 0:t.scoped),c=Be(t==null?void 0:t.reset),a=Be(t==null?void 0:t.root);let l=xe(r.value,{prev:n.value});if(o)return l;if(c||a){const u=Number(c||1/0);for(let f=0;f<=u&&!(!l||!("prev"in l));f++)l=l.prev;return l&&typeof a=="string"&&a in l&&(l=xe(xe(l,{prev:l}),l[a])),l}return l.prev?xe(l.prev,l):l});return Kt(qn,s),s}function Xh(e,t){var n,r;return typeof((n=e.props)==null?void 0:n[t])<"u"||typeof((r=e.props)==null?void 0:r[Gt(t)])<"u"}function Zh(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0,n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:qi();const r=Dt("useDefaults");if(t=t??r.type.name??r.type.__name,!t)throw new Error("[Vuetify] Could not determine component name");const s=G(()=>{var a;return(a=n.value)==null?void 0:a[e._as??t]}),i=new Proxy(e,{get(a,l){var f,d,m,v;const u=Reflect.get(a,l);return l==="class"||l==="style"?[(f=s.value)==null?void 0:f[l],u].filter(b=>b!=null):typeof l=="string"&&!Xh(r.vnode,l)?((d=s.value)==null?void 0:d[l])??((v=(m=n.value)==null?void 0:m.global)==null?void 0:v[l])??u:u}}),o=ct();tr(()=>{if(s.value){const a=Object.entries(s.value).filter(l=>{let[u]=l;return u.startsWith(u[0].toUpperCase())});a.length&&(o.value=Object.fromEntries(a))}});function c(){Rl(o,()=>{var a;Jh(xe(((a=ep(qn))==null?void 0:a.value)??{},o.value))})}return{props:i,provideSubDefaults:c}}function nr(e){if(e._setup=e._setup??e.setup,!e.name)return e;if(e._setup){e.props=dt(e.props??{},e.name)();const t=Object.keys(e.props);e.filterProps=function(r){return Il(r,t,["class","style"])},e.props._as=String,e.setup=function(r,s){const i=qi();if(!i.value)return e._setup(r,s);const{props:o,provideSubDefaults:c}=Zh(r,r._as??e.name,i),a=e._setup(o,s);return c(),a}}return e}function fs(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:!0;return t=>(e?nr:xi)(t)}function Dt(e,t){const n=Vi();if(!n)throw new Error(`[Vuetify] ${e} ${t||"must be called from inside a setup function"}`);return n}function Pb(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"composables";const t=Dt(e).type;return Gt((t==null?void 0:t.aliasName)||(t==null?void 0:t.name))}let Pl=0,Rr=new WeakMap;function Ol(){const e=Dt("getUid");if(Rr.has(e))return Rr.get(e);{const t=Pl++;return Rr.set(e,t),t}}Ol.reset=()=>{Pl=0,Rr=new WeakMap};const We=typeof window<"u",Ob=We&&"IntersectionObserver"in window,Qh=We&&("ontouchstart"in window||window.navigator.maxTouchPoints>0),kb=We&&typeof CSS<"u"&&typeof CSS.supports<"u"&&CSS.supports("selector(:focus-visible)");function ep(e){const{provides:t}=Dt("injectSelf");if(t&&e in t)return t[e]}function Gi(e){const t=Dt("useRender");t.render=e}function tp(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"content";const n=Oe(),r=Oe();if(We){const s=new ResizeObserver(i=>{e==null||e(i,s),i.length&&(t==="content"?r.value=i[0].contentRect:r.value=i[0].target.getBoundingClientRect())});Li(()=>{s.disconnect()}),Qe(n,(i,o)=>{o&&(s.unobserve(Xo(o)),r.value=void 0),i&&s.observe(Xo(i))},{flush:"post"})}return{resizeRef:n,contentRect:ts(r)}}const ei=Symbol.for("vuetify:layout"),np=Symbol.for("vuetify:layout-item"),ta=1e3,rp=dt({overlaps:{type:Array,default:()=>[]},fullHeight:Boolean},"layout");function sp(){const e=be(ei);if(!e)throw new Error("[Vuetify] Could not find injected layout");return{getLayoutItem:e.getLayoutItem,mainRect:e.mainRect,mainStyles:e.mainStyles}}const ip=(e,t,n,r)=>{let s={top:0,left:0,right:0,bottom:0};const i=[{id:"",layer:{...s}}];for(const o of e){const c=t.get(o),a=n.get(o),l=r.get(o);if(!c||!a||!l)continue;const u={...s,[c.value]:parseInt(s[c.value],10)+(l.value?parseInt(a.value,10):0)};i.push({id:o,layer:u}),s=u}return i};function op(e){const t=be(ei,null),n=G(()=>t?t.rootZIndex.value-100:ta),r=Oe([]),s=Ne(new Map),i=Ne(new Map),o=Ne(new Map),c=Ne(new Map),a=Ne(new Map),{resizeRef:l,contentRect:u}=tp(),f=G(()=>{const U=new Map,q=e.overlaps??[];for(const R of q.filter(H=>H.includes(":"))){const[H,B]=R.split(":");if(!r.value.includes(H)||!r.value.includes(B))continue;const Q=s.get(H),M=s.get(B),X=i.get(H),he=i.get(B);!Q||!M||!X||!he||(U.set(B,{position:Q.value,amount:parseInt(X.value,10)}),U.set(H,{position:M.value,amount:-parseInt(he.value,10)}))}return U}),d=G(()=>{const U=[...new Set([...o.values()].map(R=>R.value))].sort((R,H)=>R-H),q=[];for(const R of U){const H=r.value.filter(B=>{var Q;return((Q=o.get(B))==null?void 0:Q.value)===R});q.push(...H)}return ip(q,s,i,c)}),m=G(()=>!Array.from(a.values()).some(U=>U.value)),v=G(()=>d.value[d.value.length-1].layer),b=G(()=>({"--v-layout-left":yr(v.value.left),"--v-layout-right":yr(v.value.right),"--v-layout-top":yr(v.value.top),"--v-layout-bottom":yr(v.value.bottom),...m.value?void 0:{transition:"none"}})),O=G(()=>d.value.slice(1).map((U,q)=>{let{id:R}=U;const{layer:H}=d.value[q],B=i.get(R),Q=s.get(R);return{id:R,...H,size:Number(B.value),position:Q.value}})),S=U=>O.value.find(q=>q.id===U),P=Dt("createLayout"),V=ct(!1);os(()=>{V.value=!0}),Kt(ei,{register:(U,q)=>{let{id:R,order:H,position:B,layoutSize:Q,elementSize:M,active:X,disableTransitions:he,absolute:Fe}=q;o.set(R,H),s.set(R,B),i.set(R,Q),c.set(R,X),he&&a.set(R,he);const re=Sr(np,P==null?void 0:P.vnode).indexOf(U);re>-1?r.value.splice(re,0,R):r.value.push(R);const ee=G(()=>O.value.findIndex(me=>me.id===R)),Ae=G(()=>n.value+d.value.length*2-ee.value*2),qe=G(()=>{const me=B.value==="left"||B.value==="right",Ge=B.value==="right",pt=B.value==="bottom",Nt={[B.value]:0,zIndex:Ae.value,transform:`translate${me?"X":"Y"}(${(X.value?0:-110)*(Ge||pt?-1:1)}%)`,position:Fe.value||n.value!==ta?"absolute":"fixed",...m.value?void 0:{transition:"none"}};if(!V.value)return Nt;const ae=O.value[ee.value];if(!ae)throw new Error(`[Vuetify] Could not find layout item "${R}"`);const _=f.value.get(R);return _&&(ae[_.position]+=_.amount),{...Nt,height:me?`calc(100% - ${ae.top}px - ${ae.bottom}px)`:M.value?`${M.value}px`:void 0,left:Ge?void 0:`${ae.left}px`,right:Ge?`${ae.right}px`:void 0,top:B.value!=="bottom"?`${ae.top}px`:void 0,bottom:B.value!=="top"?`${ae.bottom}px`:void 0,width:me?M.value?`${M.value}px`:void 0:`calc(100% - ${ae.left}px - ${ae.right}px)`}}),ke=G(()=>({zIndex:Ae.value-1}));return{layoutItemStyles:qe,layoutItemScrimStyles:ke,zIndex:Ae}},unregister:U=>{o.delete(U),s.delete(U),i.delete(U),c.delete(U),a.delete(U),r.value=r.value.filter(q=>q!==U)},mainRect:v,mainStyles:b,getLayoutItem:S,items:O,layoutRect:u,rootZIndex:n});const D=G(()=>["v-layout",{"v-layout--full-height":e.fullHeight}]),Y=G(()=>({zIndex:n.value,position:t?"relative":void 0,overflow:t?"hidden":void 0}));return{layoutClasses:D,layoutStyles:Y,getLayoutItem:S,items:O,layoutRect:u,layoutRef:l}}const ap={badge:"Badge",close:"Close",dataIterator:{noResultsText:"No matching records found",loadingText:"Loading items..."},dataTable:{itemsPerPageText:"Rows per page:",ariaLabel:{sortDescending:"Sorted descending.",sortAscending:"Sorted ascending.",sortNone:"Not sorted.",activateNone:"Activate to remove sorting.",activateDescending:"Activate to sort descending.",activateAscending:"Activate to sort ascending."},sortBy:"Sort by"},dataFooter:{itemsPerPageText:"Items per page:",itemsPerPageAll:"All",nextPage:"Next page",prevPage:"Previous page",firstPage:"First page",lastPage:"Last page",pageText:"{0}-{1} of {2}"},dateRangeInput:{divider:"to"},datePicker:{ok:"OK",cancel:"Cancel",range:{title:"Select dates",header:"Enter dates"},title:"Select date",header:"Enter date",input:{placeholder:"Enter date"}},noDataText:"No data available",carousel:{prev:"Previous visual",next:"Next visual",ariaLabel:{delimiter:"Carousel slide {0} of {1}"}},calendar:{moreEvents:"{0} more"},input:{clear:"Clear {0}",prependAction:"{0} prepended action",appendAction:"{0} appended action"},fileInput:{counter:"{0} files",counterSize:"{0} files ({1} in total)"},timePicker:{am:"AM",pm:"PM"},pagination:{ariaLabel:{root:"Pagination Navigation",next:"Next page",previous:"Previous page",page:"Go to page {0}",currentPage:"Page {0}, Current page",first:"First page",last:"Last page"}},rating:{ariaLabel:{item:"Rating {0} of {1}"}},loading:"Loading...",infiniteScroll:{loadMore:"Load more",empty:"No more"}},cp={af:!1,ar:!0,bg:!1,ca:!1,ckb:!1,cs:!1,de:!1,el:!1,en:!1,es:!1,et:!1,fa:!0,fi:!1,fr:!1,hr:!1,hu:!1,he:!0,id:!1,it:!1,ja:!1,ko:!1,lv:!1,lt:!1,nl:!1,no:!1,pl:!1,pt:!1,ro:!1,ru:!1,sk:!1,sl:!1,srCyrl:!1,srLatn:!1,sv:!1,th:!1,tr:!1,az:!1,uk:!1,vi:!1,zhHans:!1,zhHant:!1};function lp(e,t,n){let r=arguments.length>3&&arguments[3]!==void 0?arguments[3]:f=>f,s=arguments.length>4&&arguments[4]!==void 0?arguments[4]:f=>f;const i=Dt("useProxiedModel"),o=Oe(e[t]!==void 0?e[t]:n),c=Gt(t),l=G(c!==t?()=>{var f,d,m,v;return e[t],!!(((f=i.vnode.props)!=null&&f.hasOwnProperty(t)||(d=i.vnode.props)!=null&&d.hasOwnProperty(c))&&((m=i.vnode.props)!=null&&m.hasOwnProperty(`onUpdate:${t}`)||(v=i.vnode.props)!=null&&v.hasOwnProperty(`onUpdate:${c}`)))}:()=>{var f,d;return e[t],!!((f=i.vnode.props)!=null&&f.hasOwnProperty(t)&&((d=i.vnode.props)!=null&&d.hasOwnProperty(`onUpdate:${t}`)))});Rl(()=>!l.value,()=>{Qe(()=>e[t],f=>{o.value=f})});const u=G({get(){const f=e[t];return r(l.value?f:o.value)},set(f){const d=s(f),m=Z(l.value?e[t]:o.value);m===d||r(m)===f||(o.value=d,i==null||i.emit(`update:${t}`,d))}});return Object.defineProperty(u,"externalValue",{get:()=>l.value?e[t]:o.value}),u}const na="$vuetify.",ra=(e,t)=>e.replace(/\{(\d+)\}/g,(n,r)=>String(t[+r])),kl=(e,t,n)=>function(r){for(var s=arguments.length,i=new Array(s>1?s-1:0),o=1;o<s;o++)i[o-1]=arguments[o];if(!r.startsWith(na))return ra(r,i);const c=r.replace(na,""),a=e.value&&n.value[e.value],l=t.value&&n.value[t.value];let u=Qs(a,c,null);return u||(`${r}${e.value}`,u=Qs(l,c,null)),u||(u=r),typeof u!="string"&&(u=r),ra(u,i)};function Dl(e,t){return(n,r)=>new Intl.NumberFormat([e.value,t.value],r).format(n)}function Rs(e,t,n){const r=lp(e,t,e[t]??n.value);return r.value=e[t]??n.value,Qe(n,s=>{e[t]==null&&(r.value=n.value)}),r}function Ml(e){return t=>{const n=Rs(t,"locale",e.current),r=Rs(t,"fallback",e.fallback),s=Rs(t,"messages",e.messages);return{name:"vuetify",current:n,fallback:r,messages:s,t:kl(n,r,s),n:Dl(n,r),provide:Ml({current:n,fallback:r,messages:s})}}}function up(e){const t=ct((e==null?void 0:e.locale)??"en"),n=ct((e==null?void 0:e.fallback)??"en"),r=Oe({en:ap,...e==null?void 0:e.messages});return{name:"vuetify",current:t,fallback:n,messages:r,t:kl(t,n,r),n:Dl(t,n),provide:Ml({current:t,fallback:n,messages:r})}}const Hr=Symbol.for("vuetify:locale");function fp(e){return e.name!=null}function dp(e){const t=e!=null&&e.adapter&&fp(e==null?void 0:e.adapter)?e==null?void 0:e.adapter:up(e),n=hp(t,e);return{...t,...n}}function Db(){const e=be(Hr);if(!e)throw new Error("[Vuetify] Could not find injected locale instance");return e}function hp(e,t){const n=Oe((t==null?void 0:t.rtl)??cp),r=G(()=>n.value[e.current.value]??!1);return{isRtl:r,rtl:n,rtlClasses:G(()=>`v-locale--is-${r.value?"rtl":"ltr"}`)}}function Nl(){const e=be(Hr);if(!e)throw new Error("[Vuetify] Could not find injected rtl instance");return{isRtl:e.isRtl,rtlClasses:e.rtlClasses}}const en=2.4,sa=.2126729,ia=.7151522,oa=.072175,pp=.55,gp=.58,mp=.57,vp=.62,br=.03,aa=1.45,yp=5e-4,_p=1.25,bp=1.25,ca=.078,la=12.82051282051282,Er=.06,ua=.001;function fa(e,t){const n=(e.r/255)**en,r=(e.g/255)**en,s=(e.b/255)**en,i=(t.r/255)**en,o=(t.g/255)**en,c=(t.b/255)**en;let a=n*sa+r*ia+s*oa,l=i*sa+o*ia+c*oa;if(a<=br&&(a+=(br-a)**aa),l<=br&&(l+=(br-l)**aa),Math.abs(l-a)<yp)return 0;let u;if(l>a){const f=(l**pp-a**gp)*_p;u=f<ua?0:f<ca?f-f*la*Er:f-Er}else{const f=(l**vp-a**mp)*bp;u=f>-ua?0:f>-ca?f-f*la*Er:f+Er}return u*100}const jr=Symbol.for("vuetify:theme"),Ep=dt({theme:String},"theme"),An={defaultTheme:"light",variations:{colors:[],lighten:0,darken:0},themes:{light:{dark:!1,colors:{background:"#FFFFFF",surface:"#FFFFFF","surface-variant":"#424242","on-surface-variant":"#EEEEEE",primary:"#6200EE","primary-darken-1":"#3700B3",secondary:"#03DAC6","secondary-darken-1":"#018786",error:"#B00020",info:"#2196F3",success:"#4CAF50",warning:"#FB8C00"},variables:{"border-color":"#000000","border-opacity":.12,"high-emphasis-opacity":.87,"medium-emphasis-opacity":.6,"disabled-opacity":.38,"idle-opacity":.04,"hover-opacity":.04,"focus-opacity":.12,"selected-opacity":.08,"activated-opacity":.12,"pressed-opacity":.12,"dragged-opacity":.08,"theme-kbd":"#212529","theme-on-kbd":"#FFFFFF","theme-code":"#F5F5F5","theme-on-code":"#000000"}},dark:{dark:!0,colors:{background:"#121212",surface:"#212121","surface-variant":"#BDBDBD","on-surface-variant":"#424242",primary:"#BB86FC","primary-darken-1":"#3700B3",secondary:"#03DAC5","secondary-darken-1":"#03DAC5",error:"#CF6679",info:"#2196F3",success:"#4CAF50",warning:"#FB8C00"},variables:{"border-color":"#FFFFFF","border-opacity":.12,"high-emphasis-opacity":1,"medium-emphasis-opacity":.7,"disabled-opacity":.5,"idle-opacity":.1,"hover-opacity":.04,"focus-opacity":.12,"selected-opacity":.08,"activated-opacity":.12,"pressed-opacity":.16,"dragged-opacity":.08,"theme-kbd":"#212529","theme-on-kbd":"#FFFFFF","theme-code":"#343434","theme-on-code":"#CCCCCC"}}}};function wp(){var n,r;let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:An;if(!e)return{...An,isDisabled:!0};const t={};for(const[s,i]of Object.entries(e.themes??{})){const o=i.dark||s==="dark"?(n=An.themes)==null?void 0:n.dark:(r=An.themes)==null?void 0:r.light;t[s]=xe(o,i)}return xe(An,{...e,themes:t})}function Ip(e){const t=wp(e),n=Oe(t.defaultTheme),r=Oe(t.themes),s=G(()=>{const u={};for(const[f,d]of Object.entries(r.value)){const m=u[f]={...d,colors:{...d.colors}};if(t.variations)for(const v of t.variations.colors){const b=m.colors[v];if(b)for(const O of["lighten","darken"]){const S=O==="lighten"?Kh:qh;for(const P of wl(t.variations[O],1))m.colors[`${v}-${O}-${P}`]=Vh(S(Wt(b),P))}}for(const v of Object.keys(m.colors)){if(/^on-[a-z]/.test(v)||m.colors[`on-${v}`])continue;const b=`on-${v}`,O=Wt(m.colors[v]),S=Math.abs(fa(Wt(0),O)),P=Math.abs(fa(Wt(16777215),O));m.colors[b]=P>Math.min(S,50)?"#fff":"#000"}}return u}),i=G(()=>s.value[n.value]),o=G(()=>{const u=[];i.value.dark&&$t(u,":root",["color-scheme: dark"]),$t(u,":root",da(i.value));for(const[v,b]of Object.entries(s.value))$t(u,`.v-theme--${v}`,[`color-scheme: ${b.dark?"dark":"normal"}`,...da(b)]);const f=[],d=[],m=new Set(Object.values(s.value).flatMap(v=>Object.keys(v.colors)));for(const v of m)/^on-[a-z]/.test(v)?$t(d,`.${v}`,[`color: rgb(var(--v-theme-${v})) !important`]):($t(f,`.bg-${v}`,[`--v-theme-overlay-multiplier: var(--v-theme-${v}-overlay-multiplier)`,`background-color: rgb(var(--v-theme-${v})) !important`,`color: rgb(var(--v-theme-on-${v})) !important`]),$t(d,`.text-${v}`,[`color: rgb(var(--v-theme-${v})) !important`]),$t(d,`.border-${v}`,[`--v-border-color: var(--v-theme-${v})`]));return u.push(...f,...d),u.map((v,b)=>b===0?v:`    ${v}`).join("")});function c(){return{style:[{children:o.value,id:"vuetify-theme-stylesheet",nonce:t.cspNonce||!1}]}}function a(u){if(t.isDisabled)return;const f=u._context.provides.usehead;if(f)if(f.push){const d=f.push(c);Qe(o,()=>{d.patch(c)})}else We?(f.addHeadObjs(G(c)),tr(()=>f.updateDOM())):f.addHeadObjs(c());else{let m=function(){if(typeof document<"u"&&!d){const v=document.createElement("style");v.type="text/css",v.id="vuetify-theme-stylesheet",t.cspNonce&&v.setAttribute("nonce",t.cspNonce),d=v,document.head.appendChild(d)}d&&(d.innerHTML=o.value)},d=We?document.getElementById("vuetify-theme-stylesheet"):null;Qe(o,m,{immediate:!0})}}const l=G(()=>t.isDisabled?void 0:`v-theme--${n.value}`);return{install:a,isDisabled:t.isDisabled,name:n,themes:r,current:i,computedThemes:s,themeClasses:l,styles:o,global:{name:n,current:i}}}function Tp(e){Dt("provideTheme");const t=be(jr,null);if(!t)throw new Error("Could not find Vuetify theme injection");const n=G(()=>e.theme??(t==null?void 0:t.name.value)),r=G(()=>t.isDisabled?void 0:`v-theme--${n.value}`),s={...t,name:n,themeClasses:r};return Kt(jr,s),s}function $t(e,t,n){e.push(`${t} {
`,...n.map(r=>`  ${r};
`),`}
`)}function da(e){const t=e.dark?2:1,n=e.dark?1:2,r=[];for(const[s,i]of Object.entries(e.colors)){const o=Wt(i);r.push(`--v-theme-${s}: ${o.r},${o.g},${o.b}`),s.startsWith("on-")||r.push(`--v-theme-${s}-overlay-multiplier: ${Gh(i)>.18?t:n}`)}for(const[s,i]of Object.entries(e.variables)){const o=typeof i=="string"&&i.startsWith("#")?Wt(i):void 0,c=o?`${o.r}, ${o.g}, ${o.b}`:void 0;r.push(`--v-${s}: ${c??i}`)}return r}const Cp=dt({...zi(),...rp({fullHeight:!0}),...Ep()},"VApp"),Ap=fs()({name:"VApp",props:Cp(),setup(e,t){let{slots:n}=t;const r=Tp(e),{layoutClasses:s,layoutStyles:i,getLayoutItem:o,items:c,layoutRef:a}=op(e),{rtlClasses:l}=Nl();return Gi(()=>{var u;return ne("div",{ref:a,class:["v-application",r.themeClasses.value,s.value,l.value,e.class],style:[i.value,e.style]},[ne("div",{class:"v-application__wrap"},[(u=n.default)==null?void 0:u.call(n)])])}),{getLayoutItem:o,items:c,theme:r}}});const xl=dt({tag:{type:String,default:"div"}},"tag"),Sp=dt({fluid:{type:Boolean,default:!1},...zi(),...xl()},"VContainer"),Rp=fs()({name:"VContainer",props:Sp(),setup(e,t){let{slots:n}=t;const{rtlClasses:r}=Nl();return Gi(()=>ne(e.tag,{class:["v-container",{"v-container--fluid":e.fluid},r.value,e.class],style:e.style},n)),{}}}),Mb=["sm","md","lg","xl","xxl"],ti=Symbol.for("vuetify:display"),ha={mobileBreakpoint:"lg",thresholds:{xs:0,sm:600,md:960,lg:1280,xl:1920,xxl:2560}},Pp=function(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:ha;return xe(ha,e)};function pa(e){return We&&!e?window.innerWidth:typeof e=="object"&&e.clientWidth||0}function ga(e){return We&&!e?window.innerHeight:typeof e=="object"&&e.clientHeight||0}function ma(e){const t=We&&!e?window.navigator.userAgent:"ssr";function n(v){return!!t.match(v)}const r=n(/android/i),s=n(/iphone|ipad|ipod/i),i=n(/cordova/i),o=n(/electron/i),c=n(/chrome/i),a=n(/edge/i),l=n(/firefox/i),u=n(/opera/i),f=n(/win/i),d=n(/mac/i),m=n(/linux/i);return{android:r,ios:s,cordova:i,electron:o,chrome:c,edge:a,firefox:l,opera:u,win:f,mac:d,linux:m,touch:Qh,ssr:t==="ssr"}}function Op(e,t){const{thresholds:n,mobileBreakpoint:r}=Pp(e),s=ct(ga(t)),i=ct(ma(t)),o=Ne({}),c=ct(pa(t));function a(){s.value=ga(),c.value=pa()}function l(){a(),i.value=ma()}return tr(()=>{const u=c.value<n.sm,f=c.value<n.md&&!u,d=c.value<n.lg&&!(f||u),m=c.value<n.xl&&!(d||f||u),v=c.value<n.xxl&&!(m||d||f||u),b=c.value>=n.xxl,O=u?"xs":f?"sm":d?"md":m?"lg":v?"xl":"xxl",S=typeof r=="number"?r:n[r],P=c.value<S;o.xs=u,o.sm=f,o.md=d,o.lg=m,o.xl=v,o.xxl=b,o.smAndUp=!u,o.mdAndUp=!(u||f),o.lgAndUp=!(u||f||d),o.xlAndUp=!(u||f||d||m),o.smAndDown=!(d||m||v||b),o.mdAndDown=!(m||v||b),o.lgAndDown=!(v||b),o.xlAndDown=!b,o.name=O,o.height=s.value,o.width=c.value,o.mobile=P,o.mobileBreakpoint=r,o.platform=i.value,o.thresholds=n}),We&&window.addEventListener("resize",a,{passive:!0}),{...xc(o),update:l,ssr:!!t}}function Nb(){const e=be(ti);if(!e)throw new Error("Could not find Vuetify display injection");return e}function kp(){const e=ct(!1);return os(()=>{window.requestAnimationFrame(()=>{e.value=!0})}),{ssrBootStyles:G(()=>e.value?void 0:{transition:"none !important"}),isBooted:ts(e)}}const Dp=dt({scrollable:Boolean,...zi(),...xl({tag:"main"})},"VMain"),Mp=fs()({name:"VMain",props:Dp(),setup(e,t){let{slots:n}=t;const{mainStyles:r}=sp(),{ssrBootStyles:s}=kp();return Gi(()=>ne(e.tag,{class:["v-main",{"v-main--scrollable":e.scrollable},e.class],style:[r.value,s.value,e.style]},{default:()=>{var i,o;return[e.scrollable?ne("div",{class:"v-main__scroller"},[(i=n.default)==null?void 0:i.call(n)]):(o=n.default)==null?void 0:o.call(n)]}})),{}}}),Np={};function xp(e,t){const n=gd("router-view");return il(),al(Ap,null,{default:Tr(()=>[ne(Mp,null,{default:Tr(()=>[ne(Rp,null,{default:Tr(()=>[ne(n)]),_:1})]),_:1})]),_:1})}const Lp=Rh(Np,[["render",xp]]),Fp="modulepreload",$p=function(e){return"/test-sandbox/"+e},va={},Pr=function(t,n,r){if(!n||n.length===0)return t();const s=document.getElementsByTagName("link");return Promise.all(n.map(i=>{if(i=$p(i),i in va)return;va[i]=!0;const o=i.endsWith(".css"),c=o?'[rel="stylesheet"]':"";if(!!r)for(let u=s.length-1;u>=0;u--){const f=s[u];if(f.href===i&&(!o||f.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${i}"]${c}`))return;const l=document.createElement("link");if(l.rel=o?"stylesheet":Fp,o||(l.as="script",l.crossOrigin=""),l.href=i,document.head.appendChild(l),o)return new Promise((u,f)=>{l.addEventListener("load",u),l.addEventListener("error",()=>f(new Error(`Unable to preload CSS for ${i}`)))})})).then(()=>t()).catch(i=>{const o=new Event("vite:preloadError",{cancelable:!0});if(o.payload=i,window.dispatchEvent(o),!o.defaultPrevented)throw i})};async function Up(){(await Pr(()=>import("./webfontloader-523643f5.js").then(t=>t.w),[])).load({google:{families:["Roboto:100,300,400,500,700,900&display=swap"]}})}const Bp={collapse:"mdi-chevron-up",complete:"mdi-check",cancel:"mdi-close-circle",close:"mdi-close",delete:"mdi-close-circle",clear:"mdi-close-circle",success:"mdi-check-circle",info:"mdi-information",warning:"mdi-alert-circle",error:"mdi-close-circle",prev:"mdi-chevron-left",next:"mdi-chevron-right",checkboxOn:"mdi-checkbox-marked",checkboxOff:"mdi-checkbox-blank-outline",checkboxIndeterminate:"mdi-minus-box",delimiter:"mdi-circle",sortAsc:"mdi-arrow-up",sortDesc:"mdi-arrow-down",expand:"mdi-chevron-down",menu:"mdi-menu",subgroup:"mdi-menu-down",dropdown:"mdi-menu-down",radioOn:"mdi-radiobox-marked",radioOff:"mdi-radiobox-blank",edit:"mdi-pencil",ratingEmpty:"mdi-star-outline",ratingFull:"mdi-star",ratingHalf:"mdi-star-half-full",loading:"mdi-cached",first:"mdi-page-first",last:"mdi-page-last",unfold:"mdi-unfold-more-horizontal",file:"mdi-paperclip",plus:"mdi-plus",minus:"mdi-minus",calendar:"mdi-calendar"},Hp={component:e=>us(Fl,{...e,class:"mdi"})},jp=[String,Function,Object,Array],ni=Symbol.for("vuetify:icons"),ds=dt({icon:{type:jp},tag:{type:String,required:!0}},"icon"),ya=fs()({name:"VComponentIcon",props:ds(),setup(e,t){let{slots:n}=t;return()=>{const r=e.icon;return ne(e.tag,null,{default:()=>{var s;return[e.icon?ne(r,null,null):(s=n.default)==null?void 0:s.call(n)]}})}}}),Ll=nr({name:"VSvgIcon",inheritAttrs:!1,props:ds(),setup(e,t){let{attrs:n}=t;return()=>ne(e.tag,ul(n,{style:null}),{default:()=>[ne("svg",{class:"v-icon__svg",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",role:"img","aria-hidden":"true"},[Array.isArray(e.icon)?e.icon.map(r=>Array.isArray(r)?ne("path",{d:r[0],"fill-opacity":r[1]},null):ne("path",{d:r},null)):ne("path",{d:e.icon},null)])]})}});nr({name:"VLigatureIcon",props:ds(),setup(e){return()=>ne(e.tag,null,{default:()=>[e.icon]})}});const Fl=nr({name:"VClassIcon",props:ds(),setup(e){return()=>ne(e.tag,{class:e.icon},null)}}),Vp={svg:{component:Ll},class:{component:Fl}};function Wp(e){return xe({defaultSet:"mdi",sets:{...Vp,mdi:Hp},aliases:{...Bp,vuetify:["M8.2241 14.2009L12 21L22 3H14.4459L8.2241 14.2009Z",["M7.26303 12.4733L7.00113 12L2 3H12.5261C12.5261 3 12.5261 3 12.5261 3L7.26303 12.4733Z",.6]],"vuetify-outline":"svg:M7.26 12.47 12.53 3H2L7.26 12.47ZM14.45 3 8.22 14.2 12 21 22 3H14.45ZM18.6 5 12 16.88 10.51 14.2 15.62 5ZM7.26 8.35 5.4 5H9.13L7.26 8.35Z"}},e)}const xb=e=>{const t=be(ni);if(!t)throw new Error("Missing Vuetify Icons provide!");return{iconData:G(()=>{var a;const r=Be(e);if(!r)return{component:ya};let s=r;if(typeof s=="string"&&(s=s.trim(),s.startsWith("$")&&(s=(a=t.aliases)==null?void 0:a[s.slice(1)])),!s)throw new Error(`Could not find aliased icon "${r}"`);if(Array.isArray(s))return{component:Ll,icon:s};if(typeof s!="string")return{component:ya,icon:s};const i=Object.keys(t.sets).find(l=>typeof s=="string"&&s.startsWith(`${l}:`)),o=i?s.slice(i.length+1):s;return{component:t.sets[i??t.defaultSet].component,icon:o}})}},ri={"001":1,AD:1,AE:6,AF:6,AG:0,AI:1,AL:1,AM:1,AN:1,AR:1,AS:0,AT:1,AU:1,AX:1,AZ:1,BA:1,BD:0,BE:1,BG:1,BH:6,BM:1,BN:1,BR:0,BS:0,BT:0,BW:0,BY:1,BZ:0,CA:0,CH:1,CL:1,CM:1,CN:1,CO:0,CR:1,CY:1,CZ:1,DE:1,DJ:6,DK:1,DM:0,DO:0,DZ:6,EC:1,EE:1,EG:6,ES:1,ET:0,FI:1,FJ:1,FO:1,FR:1,GB:1,"GB-alt-variant":0,GE:1,GF:1,GP:1,GR:1,GT:0,GU:0,HK:0,HN:0,HR:1,HU:1,ID:0,IE:1,IL:0,IN:0,IQ:6,IR:6,IS:1,IT:1,JM:0,JO:6,JP:0,KE:0,KG:1,KH:0,KR:0,KW:6,KZ:1,LA:0,LB:1,LI:1,LK:1,LT:1,LU:1,LV:1,LY:6,MC:1,MD:1,ME:1,MH:0,MK:1,MM:0,MN:1,MO:0,MQ:1,MT:0,MV:5,MX:0,MY:1,MZ:0,NI:0,NL:1,NO:1,NP:0,NZ:1,OM:6,PA:0,PE:0,PH:0,PK:0,PL:1,PR:0,PT:0,PY:0,QA:6,RE:1,RO:1,RS:1,RU:1,SA:0,SD:6,SE:1,SG:0,SI:1,SK:1,SM:1,SV:0,SY:6,TH:0,TJ:1,TM:1,TR:1,TT:0,TW:0,UA:1,UM:0,US:0,UY:1,UZ:1,VA:1,VE:0,VI:0,VN:1,WS:0,XK:1,YE:0,ZA:0,ZW:0};function zp(e,t){const n=[];let r=[];const s=$l(e),i=Ul(e),o=s.getDay()-ri[t.slice(-2).toUpperCase()],c=i.getDay()-ri[t.slice(-2).toUpperCase()];for(let a=0;a<o;a++){const l=new Date(s);l.setDate(l.getDate()-(o-a)),r.push(l)}for(let a=1;a<=i.getDate();a++){const l=new Date(e.getFullYear(),e.getMonth(),a);r.push(l),r.length===7&&(n.push(r),r=[])}for(let a=1;a<7-c;a++){const l=new Date(i);l.setDate(l.getDate()+a),r.push(l)}return n.push(r),n}function $l(e){return new Date(e.getFullYear(),e.getMonth(),1)}function Ul(e){return new Date(e.getFullYear(),e.getMonth()+1,0)}function Kp(e){const t=e.split("-").map(i=>i.padStart(2,"0")).join("-"),n=new Date().getTimezoneOffset()/-60,r=n<0?"-":"+",s=Math.abs(n).toString().padStart(2,"0");return`${t}T00:00:00.000${r}${s}:00`}const qp=/([12]\d{3}-([1-9]|0[1-9]|1[0-2])-([1-9]|0[1-9]|[12]\d|3[01]))/;function Gp(e){if(e==null)return new Date;if(e instanceof Date)return e;if(typeof e=="string"){let t;if(qp.test(e)?t=Date.parse(Kp(e)):t=Date.parse(e),!isNaN(t))return new Date(t)}return null}const _a=new Date(2e3,0,2);function Yp(e){const t=ri[e.slice(-2).toUpperCase()];return wl(7).map(n=>{const r=new Date(_a);return r.setDate(_a.getDate()+t+n),new Intl.DateTimeFormat(e,{weekday:"short"}).format(r)})}function Jp(e,t,n){const r=new Date(e);let s={};switch(t){case"fullDateWithWeekday":s={weekday:"long",day:"numeric",month:"long",year:"numeric"};break;case"normalDateWithWeekday":s={weekday:"short",day:"numeric",month:"short"};break;case"keyboardDate":s={};break;case"monthAndDate":s={month:"long",day:"numeric"};break;case"monthAndYear":s={month:"long",year:"numeric"};break;case"dayOfMonth":s={day:"numeric"};break;default:s={timeZone:"UTC",timeZoneName:"short"}}return new Intl.DateTimeFormat(n,s).format(r)}function Xp(e,t){const n=new Date(e);return n.setDate(n.getDate()+t),n}function Zp(e,t){const n=new Date(e);return n.setMonth(n.getMonth()+t),n}function Qp(e){return e.getFullYear()}function eg(e){return e.getMonth()}function tg(e){return new Date(e.getFullYear(),0,1)}function ng(e){return new Date(e.getFullYear(),11,31)}function rg(e,t){return si(e,t[0])&&ig(e,t[1])}function sg(e){const t=new Date(e);return t instanceof Date&&!isNaN(t.getTime())}function si(e,t){return e.getTime()>t.getTime()}function ig(e,t){return e.getTime()<t.getTime()}function ba(e,t){return e.getTime()===t.getTime()}function og(e,t){return e.getDate()===t.getDate()&&e.getMonth()===t.getMonth()&&e.getFullYear()===t.getFullYear()}function ag(e,t){return e.getMonth()===t.getMonth()&&e.getFullYear()===t.getFullYear()}function cg(e,t,n){const r=new Date(e),s=new Date(t);return n==="month"?r.getMonth()-s.getMonth()+(r.getFullYear()-s.getFullYear())*12:Math.floor((r.getTime()-s.getTime())/(1e3*60*60*24))}function lg(e,t){const n=new Date(e);return n.setFullYear(t),n}class ug{constructor(t){this.locale=t.locale}date(t){return Gp(t)}toJsDate(t){return t}addDays(t,n){return Xp(t,n)}addMonths(t,n){return Zp(t,n)}getWeekArray(t){return zp(t,this.locale)}startOfMonth(t){return $l(t)}endOfMonth(t){return Ul(t)}format(t,n){return Jp(t,n,this.locale)}isEqual(t,n){return ba(t,n)}isValid(t){return sg(t)}isWithinRange(t,n){return rg(t,n)}isAfter(t,n){return si(t,n)}isBefore(t,n){return!si(t,n)&&!ba(t,n)}isSameDay(t,n){return og(t,n)}isSameMonth(t,n){return ag(t,n)}setYear(t,n){return lg(t,n)}getDiff(t,n,r){return cg(t,n,r)}getWeekdays(){return Yp(this.locale)}getYear(t){return Qp(t)}getMonth(t){return eg(t)}startOfYear(t){return tg(t)}endOfYear(t){return ng(t)}}const Ea=Symbol.for("vuetify:date-adapter");function fg(e){return xe({adapter:ug,locale:{af:"af-ZA",bg:"bg-BG",ca:"ca-ES",ckb:"",cs:"",de:"de-DE",el:"el-GR",en:"en-US",et:"et-EE",fa:"fa-IR",fi:"fi-FI",hr:"hr-HR",hu:"hu-HU",he:"he-IL",id:"id-ID",it:"it-IT",ja:"ja-JP",ko:"ko-KR",lv:"lv-LV",lt:"lt-LT",nl:"nl-NL",no:"nn-NO",pl:"pl-PL",pt:"pt-PT",ro:"ro-RO",ru:"ru-RU",sk:"sk-SK",sl:"sl-SI",srCyrl:"sr-SP",srLatn:"sr-SP",sv:"sv-SE",th:"th-TH",tr:"tr-TR",az:"az-AZ",uk:"uk-UA",vi:"vi-VN",zhHans:"zh-CN",zhHant:"zh-TW"}},e)}function Bl(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};const{blueprint:t,...n}=e,r=xe(t,n),{aliases:s={},components:i={},directives:o={}}=r,c=Yh(r.defaults),a=Op(r.display,r.ssr),l=Ip(r.theme),u=Wp(r.icons),f=dp(r.locale),d=fg(r.date);return{install:v=>{for(const b in o)v.directive(b,o[b]);for(const b in i)v.component(b,i[b]);for(const b in s)v.component(b,nr({...s[b],name:b,aliasName:s[b].name}));if(l.install(v),v.provide(qn,c),v.provide(ti,a),v.provide(jr,l),v.provide(ni,u),v.provide(Hr,f),v.provide(Ea,d),We&&r.ssr)if(v.$nuxt)v.$nuxt.hook("app:suspense:resolve",()=>{a.update()});else{const{mount:b}=v;v.mount=function(){const O=b(...arguments);return ki(()=>a.update()),v.mount=b,O}}Ol.reset(),v.mixin({computed:{$vuetify(){return Ne({defaults:tn.call(this,qn),display:tn.call(this,ti),theme:tn.call(this,jr),icons:tn.call(this,ni),locale:tn.call(this,Hr),date:tn.call(this,Ea)})}}})},defaults:c,display:a,theme:l,icons:u,locale:f,date:d}}const dg="3.3.10";Bl.version=dg;function tn(e){var r,s;const t=this.$,n=((r=t.parent)==null?void 0:r.provides)??((s=t.vnode.appContext)==null?void 0:s.provides);if(n&&e in n)return n[e]}const hg=Bl({theme:{themes:{light:{colors:{primary:"#1867C0",secondary:"#5CBBF6"}}}}});/*!
  * vue-router v4.2.4
  * (c) 2023 Eduardo San Martin Morote
  * @license MIT
  */const nn=typeof window<"u";function pg(e){return e.__esModule||e[Symbol.toStringTag]==="Module"}const ie=Object.assign;function Ps(e,t){const n={};for(const r in t){const s=t[r];n[r]=ze(s)?s.map(e):e(s)}return n}const xn=()=>{},ze=Array.isArray,gg=/\/$/,mg=e=>e.replace(gg,"");function Os(e,t,n="/"){let r,s={},i="",o="";const c=t.indexOf("#");let a=t.indexOf("?");return c<a&&c>=0&&(a=-1),a>-1&&(r=t.slice(0,a),i=t.slice(a+1,c>-1?c:t.length),s=e(i)),c>-1&&(r=r||t.slice(0,c),o=t.slice(c,t.length)),r=bg(r??t,n),{fullPath:r+(i&&"?")+i+o,path:r,query:s,hash:o}}function vg(e,t){const n=t.query?e(t.query):"";return t.path+(n&&"?")+n+(t.hash||"")}function wa(e,t){return!t||!e.toLowerCase().startsWith(t.toLowerCase())?e:e.slice(t.length)||"/"}function yg(e,t,n){const r=t.matched.length-1,s=n.matched.length-1;return r>-1&&r===s&&pn(t.matched[r],n.matched[s])&&Hl(t.params,n.params)&&e(t.query)===e(n.query)&&t.hash===n.hash}function pn(e,t){return(e.aliasOf||e)===(t.aliasOf||t)}function Hl(e,t){if(Object.keys(e).length!==Object.keys(t).length)return!1;for(const n in e)if(!_g(e[n],t[n]))return!1;return!0}function _g(e,t){return ze(e)?Ia(e,t):ze(t)?Ia(t,e):e===t}function Ia(e,t){return ze(t)?e.length===t.length&&e.every((n,r)=>n===t[r]):e.length===1&&e[0]===t}function bg(e,t){if(e.startsWith("/"))return e;if(!e)return t;const n=t.split("/"),r=e.split("/"),s=r[r.length-1];(s===".."||s===".")&&r.push("");let i=n.length-1,o,c;for(o=0;o<r.length;o++)if(c=r[o],c!==".")if(c==="..")i>1&&i--;else break;return n.slice(0,i).join("/")+"/"+r.slice(o-(o===r.length?1:0)).join("/")}var Gn;(function(e){e.pop="pop",e.push="push"})(Gn||(Gn={}));var Ln;(function(e){e.back="back",e.forward="forward",e.unknown=""})(Ln||(Ln={}));function Eg(e){if(!e)if(nn){const t=document.querySelector("base");e=t&&t.getAttribute("href")||"/",e=e.replace(/^\w+:\/\/[^\/]+/,"")}else e="/";return e[0]!=="/"&&e[0]!=="#"&&(e="/"+e),mg(e)}const wg=/^[^#]+#/;function Ig(e,t){return e.replace(wg,"#")+t}function Tg(e,t){const n=document.documentElement.getBoundingClientRect(),r=e.getBoundingClientRect();return{behavior:t.behavior,left:r.left-n.left-(t.left||0),top:r.top-n.top-(t.top||0)}}const hs=()=>({left:window.pageXOffset,top:window.pageYOffset});function Cg(e){let t;if("el"in e){const n=e.el,r=typeof n=="string"&&n.startsWith("#"),s=typeof n=="string"?r?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!s)return;t=Tg(s,e)}else t=e;"scrollBehavior"in document.documentElement.style?window.scrollTo(t):window.scrollTo(t.left!=null?t.left:window.pageXOffset,t.top!=null?t.top:window.pageYOffset)}function Ta(e,t){return(history.state?history.state.position-t:-1)+e}const ii=new Map;function Ag(e,t){ii.set(e,t)}function Sg(e){const t=ii.get(e);return ii.delete(e),t}let Rg=()=>location.protocol+"//"+location.host;function jl(e,t){const{pathname:n,search:r,hash:s}=t,i=e.indexOf("#");if(i>-1){let c=s.includes(e.slice(i))?e.slice(i).length:1,a=s.slice(c);return a[0]!=="/"&&(a="/"+a),wa(a,"")}return wa(n,e)+r+s}function Pg(e,t,n,r){let s=[],i=[],o=null;const c=({state:d})=>{const m=jl(e,location),v=n.value,b=t.value;let O=0;if(d){if(n.value=m,t.value=d,o&&o===v){o=null;return}O=b?d.position-b.position:0}else r(m);s.forEach(S=>{S(n.value,v,{delta:O,type:Gn.pop,direction:O?O>0?Ln.forward:Ln.back:Ln.unknown})})};function a(){o=n.value}function l(d){s.push(d);const m=()=>{const v=s.indexOf(d);v>-1&&s.splice(v,1)};return i.push(m),m}function u(){const{history:d}=window;d.state&&d.replaceState(ie({},d.state,{scroll:hs()}),"")}function f(){for(const d of i)d();i=[],window.removeEventListener("popstate",c),window.removeEventListener("beforeunload",u)}return window.addEventListener("popstate",c),window.addEventListener("beforeunload",u,{passive:!0}),{pauseListeners:a,listen:l,destroy:f}}function Ca(e,t,n,r=!1,s=!1){return{back:e,current:t,forward:n,replaced:r,position:window.history.length,scroll:s?hs():null}}function Og(e){const{history:t,location:n}=window,r={value:jl(e,n)},s={value:t.state};s.value||i(r.value,{back:null,current:r.value,forward:null,position:t.length-1,replaced:!0,scroll:null},!0);function i(a,l,u){const f=e.indexOf("#"),d=f>-1?(n.host&&document.querySelector("base")?e:e.slice(f))+a:Rg()+e+a;try{t[u?"replaceState":"pushState"](l,"",d),s.value=l}catch(m){console.error(m),n[u?"replace":"assign"](d)}}function o(a,l){const u=ie({},t.state,Ca(s.value.back,a,s.value.forward,!0),l,{position:s.value.position});i(a,u,!0),r.value=a}function c(a,l){const u=ie({},s.value,t.state,{forward:a,scroll:hs()});i(u.current,u,!0);const f=ie({},Ca(r.value,a,null),{position:u.position+1},l);i(a,f,!1),r.value=a}return{location:r,state:s,push:c,replace:o}}function kg(e){e=Eg(e);const t=Og(e),n=Pg(e,t.state,t.location,t.replace);function r(i,o=!0){o||n.pauseListeners(),history.go(i)}const s=ie({location:"",base:e,go:r,createHref:Ig.bind(null,e)},t,n);return Object.defineProperty(s,"location",{enumerable:!0,get:()=>t.location.value}),Object.defineProperty(s,"state",{enumerable:!0,get:()=>t.state.value}),s}function Dg(e){return typeof e=="string"||e&&typeof e=="object"}function Vl(e){return typeof e=="string"||typeof e=="symbol"}const vt={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0},Wl=Symbol("");var Aa;(function(e){e[e.aborted=4]="aborted",e[e.cancelled=8]="cancelled",e[e.duplicated=16]="duplicated"})(Aa||(Aa={}));function gn(e,t){return ie(new Error,{type:e,[Wl]:!0},t)}function rt(e,t){return e instanceof Error&&Wl in e&&(t==null||!!(e.type&t))}const Sa="[^/]+?",Mg={sensitive:!1,strict:!1,start:!0,end:!0},Ng=/[.+*?^${}()[\]/\\]/g;function xg(e,t){const n=ie({},Mg,t),r=[];let s=n.start?"^":"";const i=[];for(const l of e){const u=l.length?[]:[90];n.strict&&!l.length&&(s+="/");for(let f=0;f<l.length;f++){const d=l[f];let m=40+(n.sensitive?.25:0);if(d.type===0)f||(s+="/"),s+=d.value.replace(Ng,"\\$&"),m+=40;else if(d.type===1){const{value:v,repeatable:b,optional:O,regexp:S}=d;i.push({name:v,repeatable:b,optional:O});const P=S||Sa;if(P!==Sa){m+=10;try{new RegExp(`(${P})`)}catch(D){throw new Error(`Invalid custom RegExp for param "${v}" (${P}): `+D.message)}}let V=b?`((?:${P})(?:/(?:${P}))*)`:`(${P})`;f||(V=O&&l.length<2?`(?:/${V})`:"/"+V),O&&(V+="?"),s+=V,m+=20,O&&(m+=-8),b&&(m+=-20),P===".*"&&(m+=-50)}u.push(m)}r.push(u)}if(n.strict&&n.end){const l=r.length-1;r[l][r[l].length-1]+=.7000000000000001}n.strict||(s+="/?"),n.end?s+="$":n.strict&&(s+="(?:/|$)");const o=new RegExp(s,n.sensitive?"":"i");function c(l){const u=l.match(o),f={};if(!u)return null;for(let d=1;d<u.length;d++){const m=u[d]||"",v=i[d-1];f[v.name]=m&&v.repeatable?m.split("/"):m}return f}function a(l){let u="",f=!1;for(const d of e){(!f||!u.endsWith("/"))&&(u+="/"),f=!1;for(const m of d)if(m.type===0)u+=m.value;else if(m.type===1){const{value:v,repeatable:b,optional:O}=m,S=v in l?l[v]:"";if(ze(S)&&!b)throw new Error(`Provided param "${v}" is an array but it is not repeatable (* or + modifiers)`);const P=ze(S)?S.join("/"):S;if(!P)if(O)d.length<2&&(u.endsWith("/")?u=u.slice(0,-1):f=!0);else throw new Error(`Missing required param "${v}"`);u+=P}}return u||"/"}return{re:o,score:r,keys:i,parse:c,stringify:a}}function Lg(e,t){let n=0;for(;n<e.length&&n<t.length;){const r=t[n]-e[n];if(r)return r;n++}return e.length<t.length?e.length===1&&e[0]===40+40?-1:1:e.length>t.length?t.length===1&&t[0]===40+40?1:-1:0}function Fg(e,t){let n=0;const r=e.score,s=t.score;for(;n<r.length&&n<s.length;){const i=Lg(r[n],s[n]);if(i)return i;n++}if(Math.abs(s.length-r.length)===1){if(Ra(r))return 1;if(Ra(s))return-1}return s.length-r.length}function Ra(e){const t=e[e.length-1];return e.length>0&&t[t.length-1]<0}const $g={type:0,value:""},Ug=/[a-zA-Z0-9_]/;function Bg(e){if(!e)return[[]];if(e==="/")return[[$g]];if(!e.startsWith("/"))throw new Error(`Invalid path "${e}"`);function t(m){throw new Error(`ERR (${n})/"${l}": ${m}`)}let n=0,r=n;const s=[];let i;function o(){i&&s.push(i),i=[]}let c=0,a,l="",u="";function f(){l&&(n===0?i.push({type:0,value:l}):n===1||n===2||n===3?(i.length>1&&(a==="*"||a==="+")&&t(`A repeatable param (${l}) must be alone in its segment. eg: '/:ids+.`),i.push({type:1,value:l,regexp:u,repeatable:a==="*"||a==="+",optional:a==="*"||a==="?"})):t("Invalid state to consume buffer"),l="")}function d(){l+=a}for(;c<e.length;){if(a=e[c++],a==="\\"&&n!==2){r=n,n=4;continue}switch(n){case 0:a==="/"?(l&&f(),o()):a===":"?(f(),n=1):d();break;case 4:d(),n=r;break;case 1:a==="("?n=2:Ug.test(a)?d():(f(),n=0,a!=="*"&&a!=="?"&&a!=="+"&&c--);break;case 2:a===")"?u[u.length-1]=="\\"?u=u.slice(0,-1)+a:n=3:u+=a;break;case 3:f(),n=0,a!=="*"&&a!=="?"&&a!=="+"&&c--,u="";break;default:t("Unknown state");break}}return n===2&&t(`Unfinished custom RegExp for param "${l}"`),f(),o(),s}function Hg(e,t,n){const r=xg(Bg(e.path),n),s=ie(r,{record:e,parent:t,children:[],alias:[]});return t&&!s.record.aliasOf==!t.record.aliasOf&&t.children.push(s),s}function jg(e,t){const n=[],r=new Map;t=ka({strict:!1,end:!0,sensitive:!1},t);function s(u){return r.get(u)}function i(u,f,d){const m=!d,v=Vg(u);v.aliasOf=d&&d.record;const b=ka(t,u),O=[v];if("alias"in u){const V=typeof u.alias=="string"?[u.alias]:u.alias;for(const D of V)O.push(ie({},v,{components:d?d.record.components:v.components,path:D,aliasOf:d?d.record:v}))}let S,P;for(const V of O){const{path:D}=V;if(f&&D[0]!=="/"){const Y=f.record.path,U=Y[Y.length-1]==="/"?"":"/";V.path=f.record.path+(D&&U+D)}if(S=Hg(V,f,b),d?d.alias.push(S):(P=P||S,P!==S&&P.alias.push(S),m&&u.name&&!Oa(S)&&o(u.name)),v.children){const Y=v.children;for(let U=0;U<Y.length;U++)i(Y[U],S,d&&d.children[U])}d=d||S,(S.record.components&&Object.keys(S.record.components).length||S.record.name||S.record.redirect)&&a(S)}return P?()=>{o(P)}:xn}function o(u){if(Vl(u)){const f=r.get(u);f&&(r.delete(u),n.splice(n.indexOf(f),1),f.children.forEach(o),f.alias.forEach(o))}else{const f=n.indexOf(u);f>-1&&(n.splice(f,1),u.record.name&&r.delete(u.record.name),u.children.forEach(o),u.alias.forEach(o))}}function c(){return n}function a(u){let f=0;for(;f<n.length&&Fg(u,n[f])>=0&&(u.record.path!==n[f].record.path||!zl(u,n[f]));)f++;n.splice(f,0,u),u.record.name&&!Oa(u)&&r.set(u.record.name,u)}function l(u,f){let d,m={},v,b;if("name"in u&&u.name){if(d=r.get(u.name),!d)throw gn(1,{location:u});b=d.record.name,m=ie(Pa(f.params,d.keys.filter(P=>!P.optional).map(P=>P.name)),u.params&&Pa(u.params,d.keys.map(P=>P.name))),v=d.stringify(m)}else if("path"in u)v=u.path,d=n.find(P=>P.re.test(v)),d&&(m=d.parse(v),b=d.record.name);else{if(d=f.name?r.get(f.name):n.find(P=>P.re.test(f.path)),!d)throw gn(1,{location:u,currentLocation:f});b=d.record.name,m=ie({},f.params,u.params),v=d.stringify(m)}const O=[];let S=d;for(;S;)O.unshift(S.record),S=S.parent;return{name:b,path:v,params:m,matched:O,meta:zg(O)}}return e.forEach(u=>i(u)),{addRoute:i,resolve:l,removeRoute:o,getRoutes:c,getRecordMatcher:s}}function Pa(e,t){const n={};for(const r of t)r in e&&(n[r]=e[r]);return n}function Vg(e){return{path:e.path,redirect:e.redirect,name:e.name,meta:e.meta||{},aliasOf:void 0,beforeEnter:e.beforeEnter,props:Wg(e),children:e.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in e?e.components||null:e.component&&{default:e.component}}}function Wg(e){const t={},n=e.props||!1;if("component"in e)t.default=n;else for(const r in e.components)t[r]=typeof n=="object"?n[r]:n;return t}function Oa(e){for(;e;){if(e.record.aliasOf)return!0;e=e.parent}return!1}function zg(e){return e.reduce((t,n)=>ie(t,n.meta),{})}function ka(e,t){const n={};for(const r in e)n[r]=r in t?t[r]:e[r];return n}function zl(e,t){return t.children.some(n=>n===e||zl(e,n))}const Kl=/#/g,Kg=/&/g,qg=/\//g,Gg=/=/g,Yg=/\?/g,ql=/\+/g,Jg=/%5B/g,Xg=/%5D/g,Gl=/%5E/g,Zg=/%60/g,Yl=/%7B/g,Qg=/%7C/g,Jl=/%7D/g,em=/%20/g;function Yi(e){return encodeURI(""+e).replace(Qg,"|").replace(Jg,"[").replace(Xg,"]")}function tm(e){return Yi(e).replace(Yl,"{").replace(Jl,"}").replace(Gl,"^")}function oi(e){return Yi(e).replace(ql,"%2B").replace(em,"+").replace(Kl,"%23").replace(Kg,"%26").replace(Zg,"`").replace(Yl,"{").replace(Jl,"}").replace(Gl,"^")}function nm(e){return oi(e).replace(Gg,"%3D")}function rm(e){return Yi(e).replace(Kl,"%23").replace(Yg,"%3F")}function sm(e){return e==null?"":rm(e).replace(qg,"%2F")}function Vr(e){try{return decodeURIComponent(""+e)}catch{}return""+e}function im(e){const t={};if(e===""||e==="?")return t;const r=(e[0]==="?"?e.slice(1):e).split("&");for(let s=0;s<r.length;++s){const i=r[s].replace(ql," "),o=i.indexOf("="),c=Vr(o<0?i:i.slice(0,o)),a=o<0?null:Vr(i.slice(o+1));if(c in t){let l=t[c];ze(l)||(l=t[c]=[l]),l.push(a)}else t[c]=a}return t}function Da(e){let t="";for(let n in e){const r=e[n];if(n=nm(n),r==null){r!==void 0&&(t+=(t.length?"&":"")+n);continue}(ze(r)?r.map(i=>i&&oi(i)):[r&&oi(r)]).forEach(i=>{i!==void 0&&(t+=(t.length?"&":"")+n,i!=null&&(t+="="+i))})}return t}function om(e){const t={};for(const n in e){const r=e[n];r!==void 0&&(t[n]=ze(r)?r.map(s=>s==null?null:""+s):r==null?r:""+r)}return t}const am=Symbol(""),Ma=Symbol(""),Ji=Symbol(""),Xl=Symbol(""),ai=Symbol("");function Sn(){let e=[];function t(r){return e.push(r),()=>{const s=e.indexOf(r);s>-1&&e.splice(s,1)}}function n(){e=[]}return{add:t,list:()=>e.slice(),reset:n}}function Et(e,t,n,r,s){const i=r&&(r.enterCallbacks[s]=r.enterCallbacks[s]||[]);return()=>new Promise((o,c)=>{const a=f=>{f===!1?c(gn(4,{from:n,to:t})):f instanceof Error?c(f):Dg(f)?c(gn(2,{from:t,to:f})):(i&&r.enterCallbacks[s]===i&&typeof f=="function"&&i.push(f),o())},l=e.call(r&&r.instances[s],t,n,a);let u=Promise.resolve(l);e.length<3&&(u=u.then(a)),u.catch(f=>c(f))})}function ks(e,t,n,r){const s=[];for(const i of e)for(const o in i.components){let c=i.components[o];if(!(t!=="beforeRouteEnter"&&!i.instances[o]))if(cm(c)){const l=(c.__vccOpts||c)[t];l&&s.push(Et(l,n,r,i,o))}else{let a=c();s.push(()=>a.then(l=>{if(!l)return Promise.reject(new Error(`Couldn't resolve component "${o}" at "${i.path}"`));const u=pg(l)?l.default:l;i.components[o]=u;const d=(u.__vccOpts||u)[t];return d&&Et(d,n,r,i,o)()}))}}return s}function cm(e){return typeof e=="object"||"displayName"in e||"props"in e||"__vccOpts"in e}function Na(e){const t=be(Ji),n=be(Xl),r=G(()=>t.resolve(Be(e.to))),s=G(()=>{const{matched:a}=r.value,{length:l}=a,u=a[l-1],f=n.matched;if(!u||!f.length)return-1;const d=f.findIndex(pn.bind(null,u));if(d>-1)return d;const m=xa(a[l-2]);return l>1&&xa(u)===m&&f[f.length-1].path!==m?f.findIndex(pn.bind(null,a[l-2])):d}),i=G(()=>s.value>-1&&dm(n.params,r.value.params)),o=G(()=>s.value>-1&&s.value===n.matched.length-1&&Hl(n.params,r.value.params));function c(a={}){return fm(a)?t[Be(e.replace)?"replace":"push"](Be(e.to)).catch(xn):Promise.resolve()}return{route:r,href:G(()=>r.value.href),isActive:i,isExactActive:o,navigate:c}}const lm=xi({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:Na,setup(e,{slots:t}){const n=Ne(Na(e)),{options:r}=be(Ji),s=G(()=>({[La(e.activeClass,r.linkActiveClass,"router-link-active")]:n.isActive,[La(e.exactActiveClass,r.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const i=t.default&&t.default(n);return e.custom?i:us("a",{"aria-current":n.isExactActive?e.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:s.value},i)}}}),um=lm;function fm(e){if(!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)&&!e.defaultPrevented&&!(e.button!==void 0&&e.button!==0)){if(e.currentTarget&&e.currentTarget.getAttribute){const t=e.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(t))return}return e.preventDefault&&e.preventDefault(),!0}}function dm(e,t){for(const n in t){const r=t[n],s=e[n];if(typeof r=="string"){if(r!==s)return!1}else if(!ze(s)||s.length!==r.length||r.some((i,o)=>i!==s[o]))return!1}return!0}function xa(e){return e?e.aliasOf?e.aliasOf.path:e.path:""}const La=(e,t,n)=>e??t??n,hm=xi({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(e,{attrs:t,slots:n}){const r=be(ai),s=G(()=>e.route||r.value),i=be(Ma,0),o=G(()=>{let l=Be(i);const{matched:u}=s.value;let f;for(;(f=u[l])&&!f.components;)l++;return l}),c=G(()=>s.value.matched[o.value]);Kt(Ma,G(()=>o.value+1)),Kt(am,c),Kt(ai,s);const a=Oe();return Qe(()=>[a.value,c.value,e.name],([l,u,f],[d,m,v])=>{u&&(u.instances[f]=l,m&&m!==u&&l&&l===d&&(u.leaveGuards.size||(u.leaveGuards=m.leaveGuards),u.updateGuards.size||(u.updateGuards=m.updateGuards))),l&&u&&(!m||!pn(u,m)||!d)&&(u.enterCallbacks[f]||[]).forEach(b=>b(l))},{flush:"post"}),()=>{const l=s.value,u=e.name,f=c.value,d=f&&f.components[u];if(!d)return Fa(n.default,{Component:d,route:l});const m=f.props[u],v=m?m===!0?l.params:typeof m=="function"?m(l):m:null,O=us(d,ie({},v,t,{onVnodeUnmounted:S=>{S.component.isUnmounted&&(f.instances[u]=null)},ref:a}));return Fa(n.default,{Component:O,route:l})||O}}});function Fa(e,t){if(!e)return null;const n=e(t);return n.length===1?n[0]:n}const pm=hm;function gm(e){const t=jg(e.routes,e),n=e.parseQuery||im,r=e.stringifyQuery||Da,s=e.history,i=Sn(),o=Sn(),c=Sn(),a=ct(vt);let l=vt;nn&&e.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const u=Ps.bind(null,_=>""+_),f=Ps.bind(null,sm),d=Ps.bind(null,Vr);function m(_,N){let A,L;return Vl(_)?(A=t.getRecordMatcher(_),L=N):L=_,t.addRoute(L,A)}function v(_){const N=t.getRecordMatcher(_);N&&t.removeRoute(N)}function b(){return t.getRoutes().map(_=>_.record)}function O(_){return!!t.getRecordMatcher(_)}function S(_,N){if(N=ie({},N||a.value),typeof _=="string"){const g=Os(n,_,N.path),y=t.resolve({path:g.path},N),E=s.createHref(g.fullPath);return ie(g,y,{params:d(y.params),hash:Vr(g.hash),redirectedFrom:void 0,href:E})}let A;if("path"in _)A=ie({},_,{path:Os(n,_.path,N.path).path});else{const g=ie({},_.params);for(const y in g)g[y]==null&&delete g[y];A=ie({},_,{params:f(g)}),N.params=f(N.params)}const L=t.resolve(A,N),se=_.hash||"";L.params=u(d(L.params));const h=vg(r,ie({},_,{hash:tm(se),path:L.path})),p=s.createHref(h);return ie({fullPath:h,hash:se,query:r===Da?om(_.query):_.query||{}},L,{redirectedFrom:void 0,href:p})}function P(_){return typeof _=="string"?Os(n,_,a.value.path):ie({},_)}function V(_,N){if(l!==_)return gn(8,{from:N,to:_})}function D(_){return q(_)}function Y(_){return D(ie(P(_),{replace:!0}))}function U(_){const N=_.matched[_.matched.length-1];if(N&&N.redirect){const{redirect:A}=N;let L=typeof A=="function"?A(_):A;return typeof L=="string"&&(L=L.includes("?")||L.includes("#")?L=P(L):{path:L},L.params={}),ie({query:_.query,hash:_.hash,params:"path"in L?{}:_.params},L)}}function q(_,N){const A=l=S(_),L=a.value,se=_.state,h=_.force,p=_.replace===!0,g=U(A);if(g)return q(ie(P(g),{state:typeof g=="object"?ie({},se,g.state):se,force:h,replace:p}),N||A);const y=A;y.redirectedFrom=N;let E;return!h&&yg(r,L,A)&&(E=gn(16,{to:y,from:L}),ke(L,L,!0,!1)),(E?Promise.resolve(E):B(y,L)).catch(w=>rt(w)?rt(w,2)?w:qe(w):ee(w,y,L)).then(w=>{if(w){if(rt(w,2))return q(ie({replace:p},P(w.to),{state:typeof w.to=="object"?ie({},se,w.to.state):se,force:h}),N||y)}else w=M(y,L,!0,p,se);return Q(y,L,w),w})}function R(_,N){const A=V(_,N);return A?Promise.reject(A):Promise.resolve()}function H(_){const N=pt.values().next().value;return N&&typeof N.runWithContext=="function"?N.runWithContext(_):_()}function B(_,N){let A;const[L,se,h]=mm(_,N);A=ks(L.reverse(),"beforeRouteLeave",_,N);for(const g of L)g.leaveGuards.forEach(y=>{A.push(Et(y,_,N))});const p=R.bind(null,_,N);return A.push(p),ae(A).then(()=>{A=[];for(const g of i.list())A.push(Et(g,_,N));return A.push(p),ae(A)}).then(()=>{A=ks(se,"beforeRouteUpdate",_,N);for(const g of se)g.updateGuards.forEach(y=>{A.push(Et(y,_,N))});return A.push(p),ae(A)}).then(()=>{A=[];for(const g of h)if(g.beforeEnter)if(ze(g.beforeEnter))for(const y of g.beforeEnter)A.push(Et(y,_,N));else A.push(Et(g.beforeEnter,_,N));return A.push(p),ae(A)}).then(()=>(_.matched.forEach(g=>g.enterCallbacks={}),A=ks(h,"beforeRouteEnter",_,N),A.push(p),ae(A))).then(()=>{A=[];for(const g of o.list())A.push(Et(g,_,N));return A.push(p),ae(A)}).catch(g=>rt(g,8)?g:Promise.reject(g))}function Q(_,N,A){c.list().forEach(L=>H(()=>L(_,N,A)))}function M(_,N,A,L,se){const h=V(_,N);if(h)return h;const p=N===vt,g=nn?history.state:{};A&&(L||p?s.replace(_.fullPath,ie({scroll:p&&g&&g.scroll},se)):s.push(_.fullPath,se)),a.value=_,ke(_,N,A,p),qe()}let X;function he(){X||(X=s.listen((_,N,A)=>{if(!Nt.listening)return;const L=S(_),se=U(L);if(se){q(ie(se,{replace:!0}),L).catch(xn);return}l=L;const h=a.value;nn&&Ag(Ta(h.fullPath,A.delta),hs()),B(L,h).catch(p=>rt(p,12)?p:rt(p,2)?(q(p.to,L).then(g=>{rt(g,20)&&!A.delta&&A.type===Gn.pop&&s.go(-1,!1)}).catch(xn),Promise.reject()):(A.delta&&s.go(-A.delta,!1),ee(p,L,h))).then(p=>{p=p||M(L,h,!1),p&&(A.delta&&!rt(p,8)?s.go(-A.delta,!1):A.type===Gn.pop&&rt(p,20)&&s.go(-1,!1)),Q(L,h,p)}).catch(xn)}))}let Fe=Sn(),de=Sn(),re;function ee(_,N,A){qe(_);const L=de.list();return L.length?L.forEach(se=>se(_,N,A)):console.error(_),Promise.reject(_)}function Ae(){return re&&a.value!==vt?Promise.resolve():new Promise((_,N)=>{Fe.add([_,N])})}function qe(_){return re||(re=!_,he(),Fe.list().forEach(([N,A])=>_?A(_):N()),Fe.reset()),_}function ke(_,N,A,L){const{scrollBehavior:se}=e;if(!nn||!se)return Promise.resolve();const h=!A&&Sg(Ta(_.fullPath,0))||(L||!A)&&history.state&&history.state.scroll||null;return ki().then(()=>se(_,N,h)).then(p=>p&&Cg(p)).catch(p=>ee(p,_,N))}const me=_=>s.go(_);let Ge;const pt=new Set,Nt={currentRoute:a,listening:!0,addRoute:m,removeRoute:v,hasRoute:O,getRoutes:b,resolve:S,options:e,push:D,replace:Y,go:me,back:()=>me(-1),forward:()=>me(1),beforeEach:i.add,beforeResolve:o.add,afterEach:c.add,onError:de.add,isReady:Ae,install(_){const N=this;_.component("RouterLink",um),_.component("RouterView",pm),_.config.globalProperties.$router=N,Object.defineProperty(_.config.globalProperties,"$route",{enumerable:!0,get:()=>Be(a)}),nn&&!Ge&&a.value===vt&&(Ge=!0,D(s.location).catch(se=>{}));const A={};for(const se in vt)Object.defineProperty(A,se,{get:()=>a.value[se],enumerable:!0});_.provide(Ji,N),_.provide(Xl,Rc(A)),_.provide(ai,a);const L=_.unmount;pt.add(_),_.unmount=function(){pt.delete(_),pt.size<1&&(l=vt,X&&X(),X=null,a.value=vt,Ge=!1,re=!1),L()}}};function ae(_){return _.reduce((N,A)=>N.then(()=>H(A)),Promise.resolve())}return Nt}function mm(e,t){const n=[],r=[],s=[],i=Math.max(t.matched.length,e.matched.length);for(let o=0;o<i;o++){const c=t.matched[o];c&&(e.matched.find(l=>pn(l,c))?r.push(c):n.push(c));const a=e.matched[o];a&&(t.matched.find(l=>pn(l,a))||s.push(a))}return[n,r,s]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Zl=function(e){const t=[];let n=0;for(let r=0;r<e.length;r++){let s=e.charCodeAt(r);s<128?t[n++]=s:s<2048?(t[n++]=s>>6|192,t[n++]=s&63|128):(s&64512)===55296&&r+1<e.length&&(e.charCodeAt(r+1)&64512)===56320?(s=65536+((s&1023)<<10)+(e.charCodeAt(++r)&1023),t[n++]=s>>18|240,t[n++]=s>>12&63|128,t[n++]=s>>6&63|128,t[n++]=s&63|128):(t[n++]=s>>12|224,t[n++]=s>>6&63|128,t[n++]=s&63|128)}return t},vm=function(e){const t=[];let n=0,r=0;for(;n<e.length;){const s=e[n++];if(s<128)t[r++]=String.fromCharCode(s);else if(s>191&&s<224){const i=e[n++];t[r++]=String.fromCharCode((s&31)<<6|i&63)}else if(s>239&&s<365){const i=e[n++],o=e[n++],c=e[n++],a=((s&7)<<18|(i&63)<<12|(o&63)<<6|c&63)-65536;t[r++]=String.fromCharCode(55296+(a>>10)),t[r++]=String.fromCharCode(56320+(a&1023))}else{const i=e[n++],o=e[n++];t[r++]=String.fromCharCode((s&15)<<12|(i&63)<<6|o&63)}}return t.join("")},Ql={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(e,t){if(!Array.isArray(e))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let s=0;s<e.length;s+=3){const i=e[s],o=s+1<e.length,c=o?e[s+1]:0,a=s+2<e.length,l=a?e[s+2]:0,u=i>>2,f=(i&3)<<4|c>>4;let d=(c&15)<<2|l>>6,m=l&63;a||(m=64,o||(d=64)),r.push(n[u],n[f],n[d],n[m])}return r.join("")},encodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(e):this.encodeByteArray(Zl(e),t)},decodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(e):vm(this.decodeStringToByteArray(e,t))},decodeStringToByteArray(e,t){this.init_();const n=t?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let s=0;s<e.length;){const i=n[e.charAt(s++)],c=s<e.length?n[e.charAt(s)]:0;++s;const l=s<e.length?n[e.charAt(s)]:64;++s;const f=s<e.length?n[e.charAt(s)]:64;if(++s,i==null||c==null||l==null||f==null)throw new ym;const d=i<<2|c>>4;if(r.push(d),l!==64){const m=c<<4&240|l>>2;if(r.push(m),f!==64){const v=l<<6&192|f;r.push(v)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let e=0;e<this.ENCODED_VALS.length;e++)this.byteToCharMap_[e]=this.ENCODED_VALS.charAt(e),this.charToByteMap_[this.byteToCharMap_[e]]=e,this.byteToCharMapWebSafe_[e]=this.ENCODED_VALS_WEBSAFE.charAt(e),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[e]]=e,e>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(e)]=e,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(e)]=e)}}};class ym extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const _m=function(e){const t=Zl(e);return Ql.encodeByteArray(t,!0)},eu=function(e){return _m(e).replace(/\./g,"")},tu=function(e){try{return Ql.decodeString(e,!0)}catch(t){console.error("base64Decode failed: ",t)}return null};/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function bm(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Em=()=>bm().__FIREBASE_DEFAULTS__,wm=()=>{if(typeof process>"u"||typeof{}>"u")return;const e={}.__FIREBASE_DEFAULTS__;if(e)return JSON.parse(e)},Im=()=>{if(typeof document>"u")return;let e;try{e=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const t=e&&tu(e[1]);return t&&JSON.parse(t)},Xi=()=>{try{return Em()||wm()||Im()}catch(e){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${e}`);return}},Tm=e=>{var t,n;return(n=(t=Xi())===null||t===void 0?void 0:t.emulatorHosts)===null||n===void 0?void 0:n[e]},nu=()=>{var e;return(e=Xi())===null||e===void 0?void 0:e.config},ru=e=>{var t;return(t=Xi())===null||t===void 0?void 0:t[`_${e}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cm{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((t,n)=>{this.resolve=t,this.reject=n})}wrapCallback(t){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof t=="function"&&(this.promise.catch(()=>{}),t.length===1?t(n):t(n,r))}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function we(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Am(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(we())}function Sm(){const e=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof e=="object"&&e.id!==void 0}function Rm(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function Pm(){const e=we();return e.indexOf("MSIE ")>=0||e.indexOf("Trident/")>=0}function Om(){try{return typeof indexedDB=="object"}catch{return!1}}function km(){return new Promise((e,t)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(r);s.onsuccess=()=>{s.result.close(),n||self.indexedDB.deleteDatabase(r),e(!0)},s.onupgradeneeded=()=>{n=!1},s.onerror=()=>{var i;t(((i=s.error)===null||i===void 0?void 0:i.message)||"")}}catch(n){t(n)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Dm="FirebaseError";class Mt extends Error{constructor(t,n,r){super(n),this.code=t,this.customData=r,this.name=Dm,Object.setPrototypeOf(this,Mt.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,rr.prototype.create)}}class rr{constructor(t,n,r){this.service=t,this.serviceName=n,this.errors=r}create(t,...n){const r=n[0]||{},s=`${this.service}/${t}`,i=this.errors[t],o=i?Mm(i,r):"Error",c=`${this.serviceName}: ${o} (${s}).`;return new Mt(s,c,r)}}function Mm(e,t){return e.replace(Nm,(n,r)=>{const s=t[r];return s!=null?String(s):`<${r}?>`})}const Nm=/\{\$([^}]+)}/g;function xm(e){for(const t in e)if(Object.prototype.hasOwnProperty.call(e,t))return!1;return!0}function Wr(e,t){if(e===t)return!0;const n=Object.keys(e),r=Object.keys(t);for(const s of n){if(!r.includes(s))return!1;const i=e[s],o=t[s];if($a(i)&&$a(o)){if(!Wr(i,o))return!1}else if(i!==o)return!1}for(const s of r)if(!n.includes(s))return!1;return!0}function $a(e){return e!==null&&typeof e=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function sr(e){const t=[];for(const[n,r]of Object.entries(e))Array.isArray(r)?r.forEach(s=>{t.push(encodeURIComponent(n)+"="+encodeURIComponent(s))}):t.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return t.length?"&"+t.join("&"):""}function On(e){const t={};return e.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[s,i]=r.split("=");t[decodeURIComponent(s)]=decodeURIComponent(i)}}),t}function kn(e){const t=e.indexOf("?");if(!t)return"";const n=e.indexOf("#",t);return e.substring(t,n>0?n:void 0)}function Lm(e,t){const n=new Fm(e,t);return n.subscribe.bind(n)}class Fm{constructor(t,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{t(this)}).catch(r=>{this.error(r)})}next(t){this.forEachObserver(n=>{n.next(t)})}error(t){this.forEachObserver(n=>{n.error(t)}),this.close(t)}complete(){this.forEachObserver(t=>{t.complete()}),this.close()}subscribe(t,n,r){let s;if(t===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");$m(t,["next","error","complete"])?s=t:s={next:t,error:n,complete:r},s.next===void 0&&(s.next=Ds),s.error===void 0&&(s.error=Ds),s.complete===void 0&&(s.complete=Ds);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?s.error(this.finalError):s.complete()}catch{}}),this.observers.push(s),i}unsubscribeOne(t){this.observers===void 0||this.observers[t]===void 0||(delete this.observers[t],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(t){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,t)}sendOne(t,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[t]!==void 0)try{n(this.observers[t])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(t){this.finalized||(this.finalized=!0,t!==void 0&&(this.finalError=t),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function $m(e,t){if(typeof e!="object"||e===null)return!1;for(const n of t)if(n in e&&typeof e[n]=="function")return!0;return!1}function Ds(){}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ht(e){return e&&e._delegate?e._delegate:e}class mn{constructor(t,n,r){this.name=t,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(t){return this.instantiationMode=t,this}setMultipleInstances(t){return this.multipleInstances=t,this}setServiceProps(t){return this.serviceProps=t,this}setInstanceCreatedCallback(t){return this.onInstanceCreated=t,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ut="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Um{constructor(t,n){this.name=t,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(t){const n=this.normalizeInstanceIdentifier(t);if(!this.instancesDeferred.has(n)){const r=new Cm;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:n});s&&r.resolve(s)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(t){var n;const r=this.normalizeInstanceIdentifier(t==null?void 0:t.identifier),s=(n=t==null?void 0:t.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(i){if(s)return null;throw i}else{if(s)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(t){if(t.name!==this.name)throw Error(`Mismatching Component ${t.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=t,!!this.shouldAutoInitialize()){if(Hm(t))try{this.getOrInitializeService({instanceIdentifier:Ut})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(n);try{const i=this.getOrInitializeService({instanceIdentifier:s});r.resolve(i)}catch{}}}}clearInstance(t=Ut){this.instancesDeferred.delete(t),this.instancesOptions.delete(t),this.instances.delete(t)}async delete(){const t=Array.from(this.instances.values());await Promise.all([...t.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...t.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(t=Ut){return this.instances.has(t)}getOptions(t=Ut){return this.instancesOptions.get(t)||{}}initialize(t={}){const{options:n={}}=t,r=this.normalizeInstanceIdentifier(t.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[i,o]of this.instancesDeferred.entries()){const c=this.normalizeInstanceIdentifier(i);r===c&&o.resolve(s)}return s}onInit(t,n){var r;const s=this.normalizeInstanceIdentifier(n),i=(r=this.onInitCallbacks.get(s))!==null&&r!==void 0?r:new Set;i.add(t),this.onInitCallbacks.set(s,i);const o=this.instances.get(s);return o&&t(o,s),()=>{i.delete(t)}}invokeOnInitCallbacks(t,n){const r=this.onInitCallbacks.get(n);if(r)for(const s of r)try{s(t,n)}catch{}}getOrInitializeService({instanceIdentifier:t,options:n={}}){let r=this.instances.get(t);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:Bm(t),options:n}),this.instances.set(t,r),this.instancesOptions.set(t,n),this.invokeOnInitCallbacks(r,t),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,t,r)}catch{}return r||null}normalizeInstanceIdentifier(t=Ut){return this.component?this.component.multipleInstances?t:Ut:t}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function Bm(e){return e===Ut?void 0:e}function Hm(e){return e.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jm{constructor(t){this.name=t,this.providers=new Map}addComponent(t){const n=this.getProvider(t.name);if(n.isComponentSet())throw new Error(`Component ${t.name} has already been registered with ${this.name}`);n.setComponent(t)}addOrOverwriteComponent(t){this.getProvider(t.name).isComponentSet()&&this.providers.delete(t.name),this.addComponent(t)}getProvider(t){if(this.providers.has(t))return this.providers.get(t);const n=new Um(t,this);return this.providers.set(t,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var ce;(function(e){e[e.DEBUG=0]="DEBUG",e[e.VERBOSE=1]="VERBOSE",e[e.INFO=2]="INFO",e[e.WARN=3]="WARN",e[e.ERROR=4]="ERROR",e[e.SILENT=5]="SILENT"})(ce||(ce={}));const Vm={debug:ce.DEBUG,verbose:ce.VERBOSE,info:ce.INFO,warn:ce.WARN,error:ce.ERROR,silent:ce.SILENT},Wm=ce.INFO,zm={[ce.DEBUG]:"log",[ce.VERBOSE]:"log",[ce.INFO]:"info",[ce.WARN]:"warn",[ce.ERROR]:"error"},Km=(e,t,...n)=>{if(t<e.logLevel)return;const r=new Date().toISOString(),s=zm[t];if(s)console[s](`[${r}]  ${e.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${t})`)};class su{constructor(t){this.name=t,this._logLevel=Wm,this._logHandler=Km,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(t){if(!(t in ce))throw new TypeError(`Invalid value "${t}" assigned to \`logLevel\``);this._logLevel=t}setLogLevel(t){this._logLevel=typeof t=="string"?Vm[t]:t}get logHandler(){return this._logHandler}set logHandler(t){if(typeof t!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=t}get userLogHandler(){return this._userLogHandler}set userLogHandler(t){this._userLogHandler=t}debug(...t){this._userLogHandler&&this._userLogHandler(this,ce.DEBUG,...t),this._logHandler(this,ce.DEBUG,...t)}log(...t){this._userLogHandler&&this._userLogHandler(this,ce.VERBOSE,...t),this._logHandler(this,ce.VERBOSE,...t)}info(...t){this._userLogHandler&&this._userLogHandler(this,ce.INFO,...t),this._logHandler(this,ce.INFO,...t)}warn(...t){this._userLogHandler&&this._userLogHandler(this,ce.WARN,...t),this._logHandler(this,ce.WARN,...t)}error(...t){this._userLogHandler&&this._userLogHandler(this,ce.ERROR,...t),this._logHandler(this,ce.ERROR,...t)}}const qm=(e,t)=>t.some(n=>e instanceof n);let Ua,Ba;function Gm(){return Ua||(Ua=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function Ym(){return Ba||(Ba=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const iu=new WeakMap,ci=new WeakMap,ou=new WeakMap,Ms=new WeakMap,Zi=new WeakMap;function Jm(e){const t=new Promise((n,r)=>{const s=()=>{e.removeEventListener("success",i),e.removeEventListener("error",o)},i=()=>{n(Rt(e.result)),s()},o=()=>{r(e.error),s()};e.addEventListener("success",i),e.addEventListener("error",o)});return t.then(n=>{n instanceof IDBCursor&&iu.set(n,e)}).catch(()=>{}),Zi.set(t,e),t}function Xm(e){if(ci.has(e))return;const t=new Promise((n,r)=>{const s=()=>{e.removeEventListener("complete",i),e.removeEventListener("error",o),e.removeEventListener("abort",o)},i=()=>{n(),s()},o=()=>{r(e.error||new DOMException("AbortError","AbortError")),s()};e.addEventListener("complete",i),e.addEventListener("error",o),e.addEventListener("abort",o)});ci.set(e,t)}let li={get(e,t,n){if(e instanceof IDBTransaction){if(t==="done")return ci.get(e);if(t==="objectStoreNames")return e.objectStoreNames||ou.get(e);if(t==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Rt(e[t])},set(e,t,n){return e[t]=n,!0},has(e,t){return e instanceof IDBTransaction&&(t==="done"||t==="store")?!0:t in e}};function Zm(e){li=e(li)}function Qm(e){return e===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(t,...n){const r=e.call(Ns(this),t,...n);return ou.set(r,t.sort?t.sort():[t]),Rt(r)}:Ym().includes(e)?function(...t){return e.apply(Ns(this),t),Rt(iu.get(this))}:function(...t){return Rt(e.apply(Ns(this),t))}}function ev(e){return typeof e=="function"?Qm(e):(e instanceof IDBTransaction&&Xm(e),qm(e,Gm())?new Proxy(e,li):e)}function Rt(e){if(e instanceof IDBRequest)return Jm(e);if(Ms.has(e))return Ms.get(e);const t=ev(e);return t!==e&&(Ms.set(e,t),Zi.set(t,e)),t}const Ns=e=>Zi.get(e);function tv(e,t,{blocked:n,upgrade:r,blocking:s,terminated:i}={}){const o=indexedDB.open(e,t),c=Rt(o);return r&&o.addEventListener("upgradeneeded",a=>{r(Rt(o.result),a.oldVersion,a.newVersion,Rt(o.transaction),a)}),n&&o.addEventListener("blocked",a=>n(a.oldVersion,a.newVersion,a)),c.then(a=>{i&&a.addEventListener("close",()=>i()),s&&a.addEventListener("versionchange",l=>s(l.oldVersion,l.newVersion,l))}).catch(()=>{}),c}const nv=["get","getKey","getAll","getAllKeys","count"],rv=["put","add","delete","clear"],xs=new Map;function Ha(e,t){if(!(e instanceof IDBDatabase&&!(t in e)&&typeof t=="string"))return;if(xs.get(t))return xs.get(t);const n=t.replace(/FromIndex$/,""),r=t!==n,s=rv.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(s||nv.includes(n)))return;const i=async function(o,...c){const a=this.transaction(o,s?"readwrite":"readonly");let l=a.store;return r&&(l=l.index(c.shift())),(await Promise.all([l[n](...c),s&&a.done]))[0]};return xs.set(t,i),i}Zm(e=>({...e,get:(t,n,r)=>Ha(t,n)||e.get(t,n,r),has:(t,n)=>!!Ha(t,n)||e.has(t,n)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sv{constructor(t){this.container=t}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(iv(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function iv(e){const t=e.getComponent();return(t==null?void 0:t.type)==="VERSION"}const ui="@firebase/app",ja="0.9.15";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Jt=new su("@firebase/app"),ov="@firebase/app-compat",av="@firebase/analytics-compat",cv="@firebase/analytics",lv="@firebase/app-check-compat",uv="@firebase/app-check",fv="@firebase/auth",dv="@firebase/auth-compat",hv="@firebase/database",pv="@firebase/database-compat",gv="@firebase/functions",mv="@firebase/functions-compat",vv="@firebase/installations",yv="@firebase/installations-compat",_v="@firebase/messaging",bv="@firebase/messaging-compat",Ev="@firebase/performance",wv="@firebase/performance-compat",Iv="@firebase/remote-config",Tv="@firebase/remote-config-compat",Cv="@firebase/storage",Av="@firebase/storage-compat",Sv="@firebase/firestore",Rv="@firebase/firestore-compat",Pv="firebase",Ov="10.1.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fi="[DEFAULT]",kv={[ui]:"fire-core",[ov]:"fire-core-compat",[cv]:"fire-analytics",[av]:"fire-analytics-compat",[uv]:"fire-app-check",[lv]:"fire-app-check-compat",[fv]:"fire-auth",[dv]:"fire-auth-compat",[hv]:"fire-rtdb",[pv]:"fire-rtdb-compat",[gv]:"fire-fn",[mv]:"fire-fn-compat",[vv]:"fire-iid",[yv]:"fire-iid-compat",[_v]:"fire-fcm",[bv]:"fire-fcm-compat",[Ev]:"fire-perf",[wv]:"fire-perf-compat",[Iv]:"fire-rc",[Tv]:"fire-rc-compat",[Cv]:"fire-gcs",[Av]:"fire-gcs-compat",[Sv]:"fire-fst",[Rv]:"fire-fst-compat","fire-js":"fire-js",[Pv]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zr=new Map,di=new Map;function Dv(e,t){try{e.container.addComponent(t)}catch(n){Jt.debug(`Component ${t.name} failed to register with FirebaseApp ${e.name}`,n)}}function Yn(e){const t=e.name;if(di.has(t))return Jt.debug(`There were multiple attempts to register component ${t}.`),!1;di.set(t,e);for(const n of zr.values())Dv(n,e);return!0}function au(e,t){const n=e.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),e.container.getProvider(t)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Mv={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},Pt=new rr("app","Firebase",Mv);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nv{constructor(t,n,r){this._isDeleted=!1,this._options=Object.assign({},t),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new mn("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(t){this.checkDestroyed(),this._automaticDataCollectionEnabled=t}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(t){this._isDeleted=t}checkDestroyed(){if(this.isDeleted)throw Pt.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ir=Ov;function cu(e,t={}){let n=e;typeof t!="object"&&(t={name:t});const r=Object.assign({name:fi,automaticDataCollectionEnabled:!1},t),s=r.name;if(typeof s!="string"||!s)throw Pt.create("bad-app-name",{appName:String(s)});if(n||(n=nu()),!n)throw Pt.create("no-options");const i=zr.get(s);if(i){if(Wr(n,i.options)&&Wr(r,i.config))return i;throw Pt.create("duplicate-app",{appName:s})}const o=new jm(s);for(const a of di.values())o.addComponent(a);const c=new Nv(n,r,o);return zr.set(s,c),c}function xv(e=fi){const t=zr.get(e);if(!t&&e===fi&&nu())return cu();if(!t)throw Pt.create("no-app",{appName:e});return t}function ln(e,t,n){var r;let s=(r=kv[e])!==null&&r!==void 0?r:e;n&&(s+=`-${n}`);const i=s.match(/\s|\//),o=t.match(/\s|\//);if(i||o){const c=[`Unable to register library "${s}" with version "${t}":`];i&&c.push(`library name "${s}" contains illegal characters (whitespace or "/")`),i&&o&&c.push("and"),o&&c.push(`version name "${t}" contains illegal characters (whitespace or "/")`),Jt.warn(c.join(" "));return}Yn(new mn(`${s}-version`,()=>({library:s,version:t}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Lv="firebase-heartbeat-database",Fv=1,Jn="firebase-heartbeat-store";let Ls=null;function lu(){return Ls||(Ls=tv(Lv,Fv,{upgrade:(e,t)=>{switch(t){case 0:e.createObjectStore(Jn)}}}).catch(e=>{throw Pt.create("idb-open",{originalErrorMessage:e.message})})),Ls}async function $v(e){try{return await(await lu()).transaction(Jn).objectStore(Jn).get(uu(e))}catch(t){if(t instanceof Mt)Jt.warn(t.message);else{const n=Pt.create("idb-get",{originalErrorMessage:t==null?void 0:t.message});Jt.warn(n.message)}}}async function Va(e,t){try{const r=(await lu()).transaction(Jn,"readwrite");await r.objectStore(Jn).put(t,uu(e)),await r.done}catch(n){if(n instanceof Mt)Jt.warn(n.message);else{const r=Pt.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});Jt.warn(r.message)}}}function uu(e){return`${e.name}!${e.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Uv=1024,Bv=30*24*60*60*1e3;class Hv{constructor(t){this.container=t,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new Vv(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){const n=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),r=Wa();if(this._heartbeatsCache===null&&(this._heartbeatsCache=await this._heartbeatsCachePromise),!(this._heartbeatsCache.lastSentHeartbeatDate===r||this._heartbeatsCache.heartbeats.some(s=>s.date===r)))return this._heartbeatsCache.heartbeats.push({date:r,agent:n}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(s=>{const i=new Date(s.date).valueOf();return Date.now()-i<=Bv}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache===null||this._heartbeatsCache.heartbeats.length===0)return"";const t=Wa(),{heartbeatsToSend:n,unsentEntries:r}=jv(this._heartbeatsCache.heartbeats),s=eu(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=t,r.length>0?(this._heartbeatsCache.heartbeats=r,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),s}}function Wa(){return new Date().toISOString().substring(0,10)}function jv(e,t=Uv){const n=[];let r=e.slice();for(const s of e){const i=n.find(o=>o.agent===s.agent);if(i){if(i.dates.push(s.date),za(n)>t){i.dates.pop();break}}else if(n.push({agent:s.agent,dates:[s.date]}),za(n)>t){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class Vv{constructor(t){this.app=t,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Om()?km().then(()=>!0).catch(()=>!1):!1}async read(){return await this._canUseIndexedDBPromise?await $v(this.app)||{heartbeats:[]}:{heartbeats:[]}}async overwrite(t){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return Va(this.app,{lastSentHeartbeatDate:(n=t.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:t.heartbeats})}else return}async add(t){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return Va(this.app,{lastSentHeartbeatDate:(n=t.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:[...s.heartbeats,...t.heartbeats]})}else return}}function za(e){return eu(JSON.stringify({version:2,heartbeats:e})).length}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Wv(e){Yn(new mn("platform-logger",t=>new sv(t),"PRIVATE")),Yn(new mn("heartbeat",t=>new Hv(t),"PRIVATE")),ln(ui,ja,e),ln(ui,ja,"esm2017"),ln("fire-js","")}Wv("");var zv="firebase",Kv="10.1.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ln(zv,Kv,"app");function Qi(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,r=Object.getOwnPropertySymbols(e);s<r.length;s++)t.indexOf(r[s])<0&&Object.prototype.propertyIsEnumerable.call(e,r[s])&&(n[r[s]]=e[r[s]]);return n}function fu(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const qv=fu,du=new rr("auth","Firebase",fu());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Kr=new su("@firebase/auth");function Gv(e,...t){Kr.logLevel<=ce.WARN&&Kr.warn(`Auth (${ir}): ${e}`,...t)}function Or(e,...t){Kr.logLevel<=ce.ERROR&&Kr.error(`Auth (${ir}): ${e}`,...t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ke(e,...t){throw eo(e,...t)}function et(e,...t){return eo(e,...t)}function Yv(e,t,n){const r=Object.assign(Object.assign({},qv()),{[t]:n});return new rr("auth","Firebase",r).create(t,{appName:e.name})}function eo(e,...t){if(typeof e!="string"){const n=t[0],r=[...t.slice(1)];return r[0]&&(r[0].appName=e.name),e._errorFactory.create(n,...r)}return du.create(e,...t)}function W(e,t,...n){if(!e)throw eo(t,...n)}function ot(e){const t="INTERNAL ASSERTION FAILED: "+e;throw Or(t),new Error(t)}function ut(e,t){e||ot(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hi(){var e;return typeof self<"u"&&((e=self.location)===null||e===void 0?void 0:e.href)||""}function Jv(){return Ka()==="http:"||Ka()==="https:"}function Ka(){var e;return typeof self<"u"&&((e=self.location)===null||e===void 0?void 0:e.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Xv(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(Jv()||Sm()||"connection"in navigator)?navigator.onLine:!0}function Zv(){if(typeof navigator>"u")return null;const e=navigator;return e.languages&&e.languages[0]||e.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class or{constructor(t,n){this.shortDelay=t,this.longDelay=n,ut(n>t,"Short delay should be less than long delay!"),this.isMobile=Am()||Rm()}get(){return Xv()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function to(e,t){ut(e.emulator,"Emulator should always be set here");const{url:n}=e.emulator;return t?`${n}${t.startsWith("/")?t.slice(1):t}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hu{static initialize(t,n,r){this.fetchImpl=t,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;ot("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;ot("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;ot("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Qv={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ey=new or(3e4,6e4);function ar(e,t){return e.tenantId&&!t.tenantId?Object.assign(Object.assign({},t),{tenantId:e.tenantId}):t}async function En(e,t,n,r,s={}){return pu(e,s,async()=>{let i={},o={};r&&(t==="GET"?o=r:i={body:JSON.stringify(r)});const c=sr(Object.assign({key:e.config.apiKey},o)).slice(1),a=await e._getAdditionalHeaders();return a["Content-Type"]="application/json",e.languageCode&&(a["X-Firebase-Locale"]=e.languageCode),hu.fetch()(gu(e,e.config.apiHost,n,c),Object.assign({method:t,headers:a,referrerPolicy:"no-referrer"},i))})}async function pu(e,t,n){e._canInitEmulator=!1;const r=Object.assign(Object.assign({},Qv),t);try{const s=new ty(e),i=await Promise.race([n(),s.promise]);s.clearNetworkTimeout();const o=await i.json();if("needConfirmation"in o)throw wr(e,"account-exists-with-different-credential",o);if(i.ok&&!("errorMessage"in o))return o;{const c=i.ok?o.errorMessage:o.error.message,[a,l]=c.split(" : ");if(a==="FEDERATED_USER_ID_ALREADY_LINKED")throw wr(e,"credential-already-in-use",o);if(a==="EMAIL_EXISTS")throw wr(e,"email-already-in-use",o);if(a==="USER_DISABLED")throw wr(e,"user-disabled",o);const u=r[a]||a.toLowerCase().replace(/[_\s]+/g,"-");if(l)throw Yv(e,u,l);Ke(e,u)}}catch(s){if(s instanceof Mt)throw s;Ke(e,"network-request-failed",{message:String(s)})}}async function ps(e,t,n,r,s={}){const i=await En(e,t,n,r,s);return"mfaPendingCredential"in i&&Ke(e,"multi-factor-auth-required",{_serverResponse:i}),i}function gu(e,t,n,r){const s=`${t}${n}?${r}`;return e.config.emulator?to(e.config,s):`${e.config.apiScheme}://${s}`}class ty{constructor(t){this.auth=t,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(et(this.auth,"network-request-failed")),ey.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function wr(e,t,n){const r={appName:e.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const s=et(e,t,r);return s.customData._tokenResponse=n,s}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ny(e,t){return En(e,"POST","/v1/accounts:delete",t)}async function ry(e,t){return En(e,"POST","/v1/accounts:lookup",t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Fn(e){if(e)try{const t=new Date(Number(e));if(!isNaN(t.getTime()))return t.toUTCString()}catch{}}async function sy(e,t=!1){const n=ht(e),r=await n.getIdToken(t),s=no(r);W(s&&s.exp&&s.auth_time&&s.iat,n.auth,"internal-error");const i=typeof s.firebase=="object"?s.firebase:void 0,o=i==null?void 0:i.sign_in_provider;return{claims:s,token:r,authTime:Fn(Fs(s.auth_time)),issuedAtTime:Fn(Fs(s.iat)),expirationTime:Fn(Fs(s.exp)),signInProvider:o||null,signInSecondFactor:(i==null?void 0:i.sign_in_second_factor)||null}}function Fs(e){return Number(e)*1e3}function no(e){const[t,n,r]=e.split(".");if(t===void 0||n===void 0||r===void 0)return Or("JWT malformed, contained fewer than 3 sections"),null;try{const s=tu(n);return s?JSON.parse(s):(Or("Failed to decode base64 JWT payload"),null)}catch(s){return Or("Caught error parsing JWT payload as JSON",s==null?void 0:s.toString()),null}}function iy(e){const t=no(e);return W(t,"internal-error"),W(typeof t.exp<"u","internal-error"),W(typeof t.iat<"u","internal-error"),Number(t.exp)-Number(t.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Xn(e,t,n=!1){if(n)return t;try{return await t}catch(r){throw r instanceof Mt&&oy(r)&&e.auth.currentUser===e&&await e.auth.signOut(),r}}function oy({code:e}){return e==="auth/user-disabled"||e==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ay{constructor(t){this.user=t,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(t){var n;if(t){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const s=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,s)}}schedule(t=!1){if(!this.isRunning)return;const n=this.getInterval(t);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(t){(t==null?void 0:t.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mu{constructor(t,n){this.createdAt=t,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=Fn(this.lastLoginAt),this.creationTime=Fn(this.createdAt)}_copy(t){this.createdAt=t.createdAt,this.lastLoginAt=t.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function qr(e){var t;const n=e.auth,r=await e.getIdToken(),s=await Xn(e,ry(n,{idToken:r}));W(s==null?void 0:s.users.length,n,"internal-error");const i=s.users[0];e._notifyReloadListener(i);const o=!((t=i.providerUserInfo)===null||t===void 0)&&t.length?uy(i.providerUserInfo):[],c=ly(e.providerData,o),a=e.isAnonymous,l=!(e.email&&i.passwordHash)&&!(c!=null&&c.length),u=a?l:!1,f={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:c,metadata:new mu(i.createdAt,i.lastLoginAt),isAnonymous:u};Object.assign(e,f)}async function cy(e){const t=ht(e);await qr(t),await t.auth._persistUserIfCurrent(t),t.auth._notifyListenersIfCurrent(t)}function ly(e,t){return[...e.filter(r=>!t.some(s=>s.providerId===r.providerId)),...t]}function uy(e){return e.map(t=>{var{providerId:n}=t,r=Qi(t,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function fy(e,t){const n=await pu(e,{},async()=>{const r=sr({grant_type:"refresh_token",refresh_token:t}).slice(1),{tokenApiHost:s,apiKey:i}=e.config,o=gu(e,s,"/v1/token",`key=${i}`),c=await e._getAdditionalHeaders();return c["Content-Type"]="application/x-www-form-urlencoded",hu.fetch()(o,{method:"POST",headers:c,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zn{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(t){W(t.idToken,"internal-error"),W(typeof t.idToken<"u","internal-error"),W(typeof t.refreshToken<"u","internal-error");const n="expiresIn"in t&&typeof t.expiresIn<"u"?Number(t.expiresIn):iy(t.idToken);this.updateTokensAndExpiration(t.idToken,t.refreshToken,n)}async getToken(t,n=!1){return W(!this.accessToken||this.refreshToken,t,"user-token-expired"),!n&&this.accessToken&&!this.isExpired?this.accessToken:this.refreshToken?(await this.refresh(t,this.refreshToken),this.accessToken):null}clearRefreshToken(){this.refreshToken=null}async refresh(t,n){const{accessToken:r,refreshToken:s,expiresIn:i}=await fy(t,n);this.updateTokensAndExpiration(r,s,Number(i))}updateTokensAndExpiration(t,n,r){this.refreshToken=n||null,this.accessToken=t||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(t,n){const{refreshToken:r,accessToken:s,expirationTime:i}=n,o=new Zn;return r&&(W(typeof r=="string","internal-error",{appName:t}),o.refreshToken=r),s&&(W(typeof s=="string","internal-error",{appName:t}),o.accessToken=s),i&&(W(typeof i=="number","internal-error",{appName:t}),o.expirationTime=i),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(t){this.accessToken=t.accessToken,this.refreshToken=t.refreshToken,this.expirationTime=t.expirationTime}_clone(){return Object.assign(new Zn,this.toJSON())}_performRefresh(){return ot("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function yt(e,t){W(typeof e=="string"||typeof e>"u","internal-error",{appName:t})}class Yt{constructor(t){var{uid:n,auth:r,stsTokenManager:s}=t,i=Qi(t,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new ay(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=s,this.accessToken=s.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.emailVerified=i.emailVerified||!1,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.tenantId=i.tenantId||null,this.providerData=i.providerData?[...i.providerData]:[],this.metadata=new mu(i.createdAt||void 0,i.lastLoginAt||void 0)}async getIdToken(t){const n=await Xn(this,this.stsTokenManager.getToken(this.auth,t));return W(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(t){return sy(this,t)}reload(){return cy(this)}_assign(t){this!==t&&(W(this.uid===t.uid,this.auth,"internal-error"),this.displayName=t.displayName,this.photoURL=t.photoURL,this.email=t.email,this.emailVerified=t.emailVerified,this.phoneNumber=t.phoneNumber,this.isAnonymous=t.isAnonymous,this.tenantId=t.tenantId,this.providerData=t.providerData.map(n=>Object.assign({},n)),this.metadata._copy(t.metadata),this.stsTokenManager._assign(t.stsTokenManager))}_clone(t){const n=new Yt(Object.assign(Object.assign({},this),{auth:t,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(t){W(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=t,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(t){this.reloadListener?this.reloadListener(t):this.reloadUserInfo=t}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(t,n=!1){let r=!1;t.idToken&&t.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(t),r=!0),n&&await qr(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){const t=await this.getIdToken();return await Xn(this,ny(this.auth,{idToken:t})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(t=>Object.assign({},t)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(t,n){var r,s,i,o,c,a,l,u;const f=(r=n.displayName)!==null&&r!==void 0?r:void 0,d=(s=n.email)!==null&&s!==void 0?s:void 0,m=(i=n.phoneNumber)!==null&&i!==void 0?i:void 0,v=(o=n.photoURL)!==null&&o!==void 0?o:void 0,b=(c=n.tenantId)!==null&&c!==void 0?c:void 0,O=(a=n._redirectEventId)!==null&&a!==void 0?a:void 0,S=(l=n.createdAt)!==null&&l!==void 0?l:void 0,P=(u=n.lastLoginAt)!==null&&u!==void 0?u:void 0,{uid:V,emailVerified:D,isAnonymous:Y,providerData:U,stsTokenManager:q}=n;W(V&&q,t,"internal-error");const R=Zn.fromJSON(this.name,q);W(typeof V=="string",t,"internal-error"),yt(f,t.name),yt(d,t.name),W(typeof D=="boolean",t,"internal-error"),W(typeof Y=="boolean",t,"internal-error"),yt(m,t.name),yt(v,t.name),yt(b,t.name),yt(O,t.name),yt(S,t.name),yt(P,t.name);const H=new Yt({uid:V,auth:t,email:d,emailVerified:D,displayName:f,isAnonymous:Y,photoURL:v,phoneNumber:m,tenantId:b,stsTokenManager:R,createdAt:S,lastLoginAt:P});return U&&Array.isArray(U)&&(H.providerData=U.map(B=>Object.assign({},B))),O&&(H._redirectEventId=O),H}static async _fromIdTokenResponse(t,n,r=!1){const s=new Zn;s.updateFromServerResponse(n);const i=new Yt({uid:n.localId,auth:t,stsTokenManager:s,isAnonymous:r});return await qr(i),i}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qa=new Map;function at(e){ut(e instanceof Function,"Expected a class definition");let t=qa.get(e);return t?(ut(t instanceof e,"Instance stored in cache mismatched with class"),t):(t=new e,qa.set(e,t),t)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vu{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(t,n){this.storage[t]=n}async _get(t){const n=this.storage[t];return n===void 0?null:n}async _remove(t){delete this.storage[t]}_addListener(t,n){}_removeListener(t,n){}}vu.type="NONE";const Ga=vu;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function kr(e,t,n){return`firebase:${e}:${t}:${n}`}class un{constructor(t,n,r){this.persistence=t,this.auth=n,this.userKey=r;const{config:s,name:i}=this.auth;this.fullUserKey=kr(this.userKey,s.apiKey,i),this.fullPersistenceKey=kr("persistence",s.apiKey,i),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(t){return this.persistence._set(this.fullUserKey,t.toJSON())}async getCurrentUser(){const t=await this.persistence._get(this.fullUserKey);return t?Yt._fromJSON(this.auth,t):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(t){if(this.persistence===t)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=t,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(t,n,r="authUser"){if(!n.length)return new un(at(Ga),t,r);const s=(await Promise.all(n.map(async l=>{if(await l._isAvailable())return l}))).filter(l=>l);let i=s[0]||at(Ga);const o=kr(r,t.config.apiKey,t.name);let c=null;for(const l of n)try{const u=await l._get(o);if(u){const f=Yt._fromJSON(t,u);l!==i&&(c=f),i=l;break}}catch{}const a=s.filter(l=>l._shouldAllowMigration);return!i._shouldAllowMigration||!a.length?new un(i,t,r):(i=a[0],c&&await i._set(o,c.toJSON()),await Promise.all(n.map(async l=>{if(l!==i)try{await l._remove(o)}catch{}})),new un(i,t,r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ya(e){const t=e.toLowerCase();if(t.includes("opera/")||t.includes("opr/")||t.includes("opios/"))return"Opera";if(bu(t))return"IEMobile";if(t.includes("msie")||t.includes("trident/"))return"IE";if(t.includes("edge/"))return"Edge";if(yu(t))return"Firefox";if(t.includes("silk/"))return"Silk";if(wu(t))return"Blackberry";if(Iu(t))return"Webos";if(ro(t))return"Safari";if((t.includes("chrome/")||_u(t))&&!t.includes("edge/"))return"Chrome";if(Eu(t))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=e.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function yu(e=we()){return/firefox\//i.test(e)}function ro(e=we()){const t=e.toLowerCase();return t.includes("safari/")&&!t.includes("chrome/")&&!t.includes("crios/")&&!t.includes("android")}function _u(e=we()){return/crios\//i.test(e)}function bu(e=we()){return/iemobile/i.test(e)}function Eu(e=we()){return/android/i.test(e)}function wu(e=we()){return/blackberry/i.test(e)}function Iu(e=we()){return/webos/i.test(e)}function gs(e=we()){return/iphone|ipad|ipod/i.test(e)||/macintosh/i.test(e)&&/mobile/i.test(e)}function dy(e=we()){var t;return gs(e)&&!!(!((t=window.navigator)===null||t===void 0)&&t.standalone)}function hy(){return Pm()&&document.documentMode===10}function Tu(e=we()){return gs(e)||Eu(e)||Iu(e)||wu(e)||/windows phone/i.test(e)||bu(e)}function py(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Cu(e,t=[]){let n;switch(e){case"Browser":n=Ya(we());break;case"Worker":n=`${Ya(we())}-${e}`;break;default:n=e}const r=t.length?t.join(","):"FirebaseCore-web";return`${n}/JsCore/${ir}/${r}`}async function Au(e,t){return En(e,"GET","/v2/recaptchaConfig",ar(e,t))}function Ja(e){return e!==void 0&&e.enterprise!==void 0}class Su{constructor(t){if(this.siteKey="",this.emailPasswordEnabled=!1,t.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=t.recaptchaKey.split("/")[3],this.emailPasswordEnabled=t.recaptchaEnforcementState.some(n=>n.provider==="EMAIL_PASSWORD_PROVIDER"&&n.enforcementState!=="OFF")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gy(){var e,t;return(t=(e=document.getElementsByTagName("head"))===null||e===void 0?void 0:e[0])!==null&&t!==void 0?t:document}function Ru(e){return new Promise((t,n)=>{const r=document.createElement("script");r.setAttribute("src",e),r.onload=t,r.onerror=s=>{const i=et("internal-error");i.customData=s,n(i)},r.type="text/javascript",r.charset="UTF-8",gy().appendChild(r)})}function my(e){return`__${e}${Math.floor(Math.random()*1e6)}`}const vy="https://www.google.com/recaptcha/enterprise.js?render=",yy="recaptcha-enterprise",_y="NO_RECAPTCHA";class Pu{constructor(t){this.type=yy,this.auth=cr(t)}async verify(t="verify",n=!1){async function r(i){if(!n){if(i.tenantId==null&&i._agentRecaptchaConfig!=null)return i._agentRecaptchaConfig.siteKey;if(i.tenantId!=null&&i._tenantRecaptchaConfigs[i.tenantId]!==void 0)return i._tenantRecaptchaConfigs[i.tenantId].siteKey}return new Promise(async(o,c)=>{Au(i,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(a=>{if(a.recaptchaKey===void 0)c(new Error("recaptcha Enterprise site key undefined"));else{const l=new Su(a);return i.tenantId==null?i._agentRecaptchaConfig=l:i._tenantRecaptchaConfigs[i.tenantId]=l,o(l.siteKey)}}).catch(a=>{c(a)})})}function s(i,o,c){const a=window.grecaptcha;Ja(a)?a.enterprise.ready(()=>{a.enterprise.execute(i,{action:t}).then(l=>{o(l)}).catch(()=>{o(_y)})}):c(Error("No reCAPTCHA enterprise script loaded."))}return new Promise((i,o)=>{r(this.auth).then(c=>{if(!n&&Ja(window.grecaptcha))s(c,i,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}Ru(vy+c).then(()=>{s(c,i,o)}).catch(a=>{o(a)})}}).catch(c=>{o(c)})})}}async function Xa(e,t,n,r=!1){const s=new Pu(e);let i;try{i=await s.verify(n)}catch{i=await s.verify(n,!0)}const o=Object.assign({},t);return r?Object.assign(o,{captchaResp:i}):Object.assign(o,{captchaResponse:i}),Object.assign(o,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(o,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),o}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class by{constructor(t){this.auth=t,this.queue=[]}pushCallback(t,n){const r=i=>new Promise((o,c)=>{try{const a=t(i);o(a)}catch(a){c(a)}});r.onAbort=n,this.queue.push(r);const s=this.queue.length-1;return()=>{this.queue[s]=()=>Promise.resolve()}}async runMiddleware(t){if(this.auth.currentUser===t)return;const n=[];try{for(const r of this.queue)await r(t),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const s of n)try{s()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ey{constructor(t,n,r,s){this.app=t,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=s,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Za(this),this.idTokenSubscription=new Za(this),this.beforeStateQueue=new by(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=du,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=t.name,this.clientVersion=s.sdkClientVersion}_initializeWithPersistence(t,n){return n&&(this._popupRedirectResolver=at(n)),this._initializationPromise=this.queue(async()=>{var r,s;if(!this._deleted&&(this.persistenceManager=await un.create(this,t),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((s=this.currentUser)===null||s===void 0?void 0:s.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const t=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!t)){if(this.currentUser&&t&&this.currentUser.uid===t.uid){this._currentUser._assign(t),await this.currentUser.getIdToken();return}await this._updateCurrentUser(t,!0)}}async initializeCurrentUser(t){var n;const r=await this.assertedPersistence.getCurrentUser();let s=r,i=!1;if(t&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,c=s==null?void 0:s._redirectEventId,a=await this.tryRedirectSignIn(t);(!o||o===c)&&(a!=null&&a.user)&&(s=a.user,i=!0)}if(!s)return this.directlySetCurrentUser(null);if(!s._redirectEventId){if(i)try{await this.beforeStateQueue.runMiddleware(s)}catch(o){s=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return s?this.reloadAndSetCurrentUserOrClear(s):this.directlySetCurrentUser(null)}return W(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===s._redirectEventId?this.directlySetCurrentUser(s):this.reloadAndSetCurrentUserOrClear(s)}async tryRedirectSignIn(t){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,t,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(t){try{await qr(t)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(t)}useDeviceLanguage(){this.languageCode=Zv()}async _delete(){this._deleted=!0}async updateCurrentUser(t){const n=t?ht(t):null;return n&&W(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(t,n=!1){if(!this._deleted)return t&&W(this.tenantId===t.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(t),this.queue(async()=>{await this.directlySetCurrentUser(t),this.notifyAuthListeners()})}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(t){return this.queue(async()=>{await this.assertedPersistence.setPersistence(at(t))})}async initializeRecaptchaConfig(){const t=await Au(this,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}),n=new Su(t);this.tenantId==null?this._agentRecaptchaConfig=n:this._tenantRecaptchaConfigs[this.tenantId]=n,n.emailPasswordEnabled&&new Pu(this).verify()}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(t){this._errorFactory=new rr("auth","Firebase",t())}onAuthStateChanged(t,n,r){return this.registerStateListener(this.authStateSubscription,t,n,r)}beforeAuthStateChanged(t,n){return this.beforeStateQueue.pushCallback(t,n)}onIdTokenChanged(t,n,r){return this.registerStateListener(this.idTokenSubscription,t,n,r)}authStateReady(){return new Promise((t,n)=>{if(this.currentUser)t();else{const r=this.onAuthStateChanged(()=>{r(),t()},n)}})}toJSON(){var t;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(t=this._currentUser)===null||t===void 0?void 0:t.toJSON()}}async _setRedirectUser(t,n){const r=await this.getOrInitRedirectPersistenceManager(n);return t===null?r.removeCurrentUser():r.setCurrentUser(t)}async getOrInitRedirectPersistenceManager(t){if(!this.redirectPersistenceManager){const n=t&&at(t)||this._popupRedirectResolver;W(n,this,"argument-error"),this.redirectPersistenceManager=await un.create(this,[at(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(t){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===t?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===t?this.redirectUser:null}async _persistUserIfCurrent(t){if(t===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(t))}_notifyListenersIfCurrent(t){t===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var t,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(t=this.currentUser)===null||t===void 0?void 0:t.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(t,n,r,s){if(this._deleted)return()=>{};const i=typeof n=="function"?n:n.next.bind(n),o=this._isInitialized?Promise.resolve():this._initializationPromise;return W(o,this,"internal-error"),o.then(()=>i(this.currentUser)),typeof n=="function"?t.addObserver(n,r,s):t.addObserver(n)}async directlySetCurrentUser(t){this.currentUser&&this.currentUser!==t&&this._currentUser._stopProactiveRefresh(),t&&this.isProactiveRefreshEnabled&&t._startProactiveRefresh(),this.currentUser=t,t?await this.assertedPersistence.setCurrentUser(t):await this.assertedPersistence.removeCurrentUser()}queue(t){return this.operations=this.operations.then(t,t),this.operations}get assertedPersistence(){return W(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(t){!t||this.frameworks.includes(t)||(this.frameworks.push(t),this.frameworks.sort(),this.clientVersion=Cu(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var t;const n={"X-Client-Version":this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((t=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||t===void 0?void 0:t.getHeartbeatsHeader());r&&(n["X-Firebase-Client"]=r);const s=await this._getAppCheckToken();return s&&(n["X-Firebase-AppCheck"]=s),n}async _getAppCheckToken(){var t;const n=await((t=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||t===void 0?void 0:t.getToken());return n!=null&&n.error&&Gv(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function cr(e){return ht(e)}class Za{constructor(t){this.auth=t,this.observer=null,this.addObserver=Lm(n=>this.observer=n)}get next(){return W(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wy(e,t){const n=au(e,"auth");if(n.isInitialized()){const s=n.getImmediate(),i=n.getOptions();if(Wr(i,t??{}))return s;Ke(s,"already-initialized")}return n.initialize({options:t})}function Iy(e,t){const n=(t==null?void 0:t.persistence)||[],r=(Array.isArray(n)?n:[n]).map(at);t!=null&&t.errorMap&&e._updateErrorMap(t.errorMap),e._initializeWithPersistence(r,t==null?void 0:t.popupRedirectResolver)}function Ty(e,t,n){const r=cr(e);W(r._canInitEmulator,r,"emulator-config-failed"),W(/^https?:\/\//.test(t),r,"invalid-emulator-scheme");const s=!!(n!=null&&n.disableWarnings),i=Ou(t),{host:o,port:c}=Cy(t),a=c===null?"":`:${c}`;r.config.emulator={url:`${i}//${o}${a}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:o,port:c,protocol:i.replace(":",""),options:Object.freeze({disableWarnings:s})}),s||Ay()}function Ou(e){const t=e.indexOf(":");return t<0?"":e.substr(0,t+1)}function Cy(e){const t=Ou(e),n=/(\/\/)?([^?#/]+)/.exec(e.substr(t.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",s=/^(\[[^\]]+\])(:|$)/.exec(r);if(s){const i=s[1];return{host:i,port:Qa(r.substr(i.length+1))}}else{const[i,o]=r.split(":");return{host:i,port:Qa(o)}}}function Qa(e){if(!e)return null;const t=Number(e);return isNaN(t)?null:t}function Ay(){function e(){const t=document.createElement("p"),n=t.style;t.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",t.classList.add("firebase-emulator-warning"),document.body.appendChild(t)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",e):e())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class so{constructor(t,n){this.providerId=t,this.signInMethod=n}toJSON(){return ot("not implemented")}_getIdTokenResponse(t){return ot("not implemented")}_linkToIdToken(t,n){return ot("not implemented")}_getReauthenticationResolver(t){return ot("not implemented")}}async function Sy(e,t){return En(e,"POST","/v1/accounts:update",t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function $s(e,t){return ps(e,"POST","/v1/accounts:signInWithPassword",ar(e,t))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ry(e,t){return ps(e,"POST","/v1/accounts:signInWithEmailLink",ar(e,t))}async function Py(e,t){return ps(e,"POST","/v1/accounts:signInWithEmailLink",ar(e,t))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qn extends so{constructor(t,n,r,s=null){super("password",r),this._email=t,this._password=n,this._tenantId=s}static _fromEmailAndPassword(t,n){return new Qn(t,n,"password")}static _fromEmailAndCode(t,n,r=null){return new Qn(t,n,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(t){const n=typeof t=="string"?JSON.parse(t):t;if(n!=null&&n.email&&(n!=null&&n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(t){var n;switch(this.signInMethod){case"password":const r={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};if(!((n=t._getRecaptchaConfig())===null||n===void 0)&&n.emailPasswordEnabled){const s=await Xa(t,r,"signInWithPassword");return $s(t,s)}else return $s(t,r).catch(async s=>{if(s.code==="auth/missing-recaptcha-token"){console.log("Sign-in with email address and password is protected by reCAPTCHA for this project. Automatically triggering the reCAPTCHA flow and restarting the sign-in flow.");const i=await Xa(t,r,"signInWithPassword");return $s(t,i)}else return Promise.reject(s)});case"emailLink":return Ry(t,{email:this._email,oobCode:this._password});default:Ke(t,"internal-error")}}async _linkToIdToken(t,n){switch(this.signInMethod){case"password":return Sy(t,{idToken:n,returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return Py(t,{idToken:n,email:this._email,oobCode:this._password});default:Ke(t,"internal-error")}}_getReauthenticationResolver(t){return this._getIdTokenResponse(t)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function fn(e,t){return ps(e,"POST","/v1/accounts:signInWithIdp",ar(e,t))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Oy="http://localhost";class Xt extends so{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(t){const n=new Xt(t.providerId,t.signInMethod);return t.idToken||t.accessToken?(t.idToken&&(n.idToken=t.idToken),t.accessToken&&(n.accessToken=t.accessToken),t.nonce&&!t.pendingToken&&(n.nonce=t.nonce),t.pendingToken&&(n.pendingToken=t.pendingToken)):t.oauthToken&&t.oauthTokenSecret?(n.accessToken=t.oauthToken,n.secret=t.oauthTokenSecret):Ke("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(t){const n=typeof t=="string"?JSON.parse(t):t,{providerId:r,signInMethod:s}=n,i=Qi(n,["providerId","signInMethod"]);if(!r||!s)return null;const o=new Xt(r,s);return o.idToken=i.idToken||void 0,o.accessToken=i.accessToken||void 0,o.secret=i.secret,o.nonce=i.nonce,o.pendingToken=i.pendingToken||null,o}_getIdTokenResponse(t){const n=this.buildRequest();return fn(t,n)}_linkToIdToken(t,n){const r=this.buildRequest();return r.idToken=n,fn(t,r)}_getReauthenticationResolver(t){const n=this.buildRequest();return n.autoCreate=!1,fn(t,n)}buildRequest(){const t={requestUri:Oy,returnSecureToken:!0};if(this.pendingToken)t.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),t.postBody=sr(n)}return t}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ky(e){switch(e){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function Dy(e){const t=On(kn(e)).link,n=t?On(kn(t)).deep_link_id:null,r=On(kn(e)).deep_link_id;return(r?On(kn(r)).link:null)||r||n||t||e}class io{constructor(t){var n,r,s,i,o,c;const a=On(kn(t)),l=(n=a.apiKey)!==null&&n!==void 0?n:null,u=(r=a.oobCode)!==null&&r!==void 0?r:null,f=ky((s=a.mode)!==null&&s!==void 0?s:null);W(l&&u&&f,"argument-error"),this.apiKey=l,this.operation=f,this.code=u,this.continueUrl=(i=a.continueUrl)!==null&&i!==void 0?i:null,this.languageCode=(o=a.languageCode)!==null&&o!==void 0?o:null,this.tenantId=(c=a.tenantId)!==null&&c!==void 0?c:null}static parseLink(t){const n=Dy(t);try{return new io(n)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wn{constructor(){this.providerId=wn.PROVIDER_ID}static credential(t,n){return Qn._fromEmailAndPassword(t,n)}static credentialWithLink(t,n){const r=io.parseLink(n);return W(r,"argument-error"),Qn._fromEmailAndCode(t,r.code,r.tenantId)}}wn.PROVIDER_ID="password";wn.EMAIL_PASSWORD_SIGN_IN_METHOD="password";wn.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ku{constructor(t){this.providerId=t,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(t){this.defaultLanguageCode=t}setCustomParameters(t){return this.customParameters=t,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lr extends ku{constructor(){super(...arguments),this.scopes=[]}addScope(t){return this.scopes.includes(t)||this.scopes.push(t),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wt extends lr{constructor(){super("facebook.com")}static credential(t){return Xt._fromParams({providerId:wt.PROVIDER_ID,signInMethod:wt.FACEBOOK_SIGN_IN_METHOD,accessToken:t})}static credentialFromResult(t){return wt.credentialFromTaggedObject(t)}static credentialFromError(t){return wt.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t||!("oauthAccessToken"in t)||!t.oauthAccessToken)return null;try{return wt.credential(t.oauthAccessToken)}catch{return null}}}wt.FACEBOOK_SIGN_IN_METHOD="facebook.com";wt.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class It extends lr{constructor(){super("google.com"),this.addScope("profile")}static credential(t,n){return Xt._fromParams({providerId:It.PROVIDER_ID,signInMethod:It.GOOGLE_SIGN_IN_METHOD,idToken:t,accessToken:n})}static credentialFromResult(t){return It.credentialFromTaggedObject(t)}static credentialFromError(t){return It.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t)return null;const{oauthIdToken:n,oauthAccessToken:r}=t;if(!n&&!r)return null;try{return It.credential(n,r)}catch{return null}}}It.GOOGLE_SIGN_IN_METHOD="google.com";It.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tt extends lr{constructor(){super("github.com")}static credential(t){return Xt._fromParams({providerId:Tt.PROVIDER_ID,signInMethod:Tt.GITHUB_SIGN_IN_METHOD,accessToken:t})}static credentialFromResult(t){return Tt.credentialFromTaggedObject(t)}static credentialFromError(t){return Tt.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t||!("oauthAccessToken"in t)||!t.oauthAccessToken)return null;try{return Tt.credential(t.oauthAccessToken)}catch{return null}}}Tt.GITHUB_SIGN_IN_METHOD="github.com";Tt.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ct extends lr{constructor(){super("twitter.com")}static credential(t,n){return Xt._fromParams({providerId:Ct.PROVIDER_ID,signInMethod:Ct.TWITTER_SIGN_IN_METHOD,oauthToken:t,oauthTokenSecret:n})}static credentialFromResult(t){return Ct.credentialFromTaggedObject(t)}static credentialFromError(t){return Ct.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=t;if(!n||!r)return null;try{return Ct.credential(n,r)}catch{return null}}}Ct.TWITTER_SIGN_IN_METHOD="twitter.com";Ct.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vn{constructor(t){this.user=t.user,this.providerId=t.providerId,this._tokenResponse=t._tokenResponse,this.operationType=t.operationType}static async _fromIdTokenResponse(t,n,r,s=!1){const i=await Yt._fromIdTokenResponse(t,r,s),o=ec(r);return new vn({user:i,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(t,n,r){await t._updateTokensIfNecessary(r,!0);const s=ec(r);return new vn({user:t,providerId:s,_tokenResponse:r,operationType:n})}}function ec(e){return e.providerId?e.providerId:"phoneNumber"in e?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gr extends Mt{constructor(t,n,r,s){var i;super(n.code,n.message),this.operationType=r,this.user=s,Object.setPrototypeOf(this,Gr.prototype),this.customData={appName:t.name,tenantId:(i=t.tenantId)!==null&&i!==void 0?i:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(t,n,r,s){return new Gr(t,n,r,s)}}function Du(e,t,n,r){return(t==="reauthenticate"?n._getReauthenticationResolver(e):n._getIdTokenResponse(e)).catch(i=>{throw i.code==="auth/multi-factor-auth-required"?Gr._fromErrorAndOperation(e,i,t,r):i})}async function My(e,t,n=!1){const r=await Xn(e,t._linkToIdToken(e.auth,await e.getIdToken()),n);return vn._forOperation(e,"link",r)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ny(e,t,n=!1){const{auth:r}=e,s="reauthenticate";try{const i=await Xn(e,Du(r,s,t,e),n);W(i.idToken,r,"internal-error");const o=no(i.idToken);W(o,r,"internal-error");const{sub:c}=o;return W(e.uid===c,r,"user-mismatch"),vn._forOperation(e,s,i)}catch(i){throw(i==null?void 0:i.code)==="auth/user-not-found"&&Ke(r,"user-mismatch"),i}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Mu(e,t,n=!1){const r="signIn",s=await Du(e,r,t),i=await vn._fromIdTokenResponse(e,r,s);return n||await e._updateCurrentUser(i.user),i}async function xy(e,t){return Mu(cr(e),t)}function Ly(e,t,n){return xy(ht(e),wn.credential(t,n))}function Fy(e,t,n,r){return ht(e).onIdTokenChanged(t,n,r)}function $y(e,t,n){return ht(e).beforeAuthStateChanged(t,n)}function Uy(e,t,n,r){return ht(e).onAuthStateChanged(t,n,r)}function By(e){return ht(e).signOut()}const Yr="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nu{constructor(t,n){this.storageRetriever=t,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(Yr,"1"),this.storage.removeItem(Yr),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(t,n){return this.storage.setItem(t,JSON.stringify(n)),Promise.resolve()}_get(t){const n=this.storage.getItem(t);return Promise.resolve(n?JSON.parse(n):null)}_remove(t){return this.storage.removeItem(t),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Hy(){const e=we();return ro(e)||gs(e)}const jy=1e3,Vy=10;class xu extends Nu{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(t,n)=>this.onStorageEvent(t,n),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=Hy()&&py(),this.fallbackToPolling=Tu(),this._shouldAllowMigration=!0}forAllChangedKeys(t){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),s=this.localCache[n];r!==s&&t(n,s,r)}}onStorageEvent(t,n=!1){if(!t.key){this.forAllChangedKeys((o,c,a)=>{this.notifyListeners(o,a)});return}const r=t.key;if(n?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const o=this.storage.getItem(r);if(t.newValue!==o)t.newValue!==null?this.storage.setItem(r,t.newValue):this.storage.removeItem(r);else if(this.localCache[r]===t.newValue&&!n)return}const s=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},i=this.storage.getItem(r);hy()&&i!==t.newValue&&t.newValue!==t.oldValue?setTimeout(s,Vy):s()}notifyListeners(t,n){this.localCache[t]=n;const r=this.listeners[t];if(r)for(const s of Array.from(r))s(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((t,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:t,oldValue:n,newValue:r}),!0)})},jy)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(t,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[t]||(this.listeners[t]=new Set,this.localCache[t]=this.storage.getItem(t)),this.listeners[t].add(n)}_removeListener(t,n){this.listeners[t]&&(this.listeners[t].delete(n),this.listeners[t].size===0&&delete this.listeners[t]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(t,n){await super._set(t,n),this.localCache[t]=JSON.stringify(n)}async _get(t){const n=await super._get(t);return this.localCache[t]=JSON.stringify(n),n}async _remove(t){await super._remove(t),delete this.localCache[t]}}xu.type="LOCAL";const Wy=xu;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lu extends Nu{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(t,n){}_removeListener(t,n){}}Lu.type="SESSION";const Fu=Lu;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zy(e){return Promise.all(e.map(async t=>{try{return{fulfilled:!0,value:await t}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ms{constructor(t){this.eventTarget=t,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(t){const n=this.receivers.find(s=>s.isListeningto(t));if(n)return n;const r=new ms(t);return this.receivers.push(r),r}isListeningto(t){return this.eventTarget===t}async handleEvent(t){const n=t,{eventId:r,eventType:s,data:i}=n.data,o=this.handlersMap[s];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:s});const c=Array.from(o).map(async l=>l(n.origin,i)),a=await zy(c);n.ports[0].postMessage({status:"done",eventId:r,eventType:s,response:a})}_subscribe(t,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[t]||(this.handlersMap[t]=new Set),this.handlersMap[t].add(n)}_unsubscribe(t,n){this.handlersMap[t]&&n&&this.handlersMap[t].delete(n),(!n||this.handlersMap[t].size===0)&&delete this.handlersMap[t],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}ms.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function oo(e="",t=10){let n="";for(let r=0;r<t;r++)n+=Math.floor(Math.random()*10);return e+n}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ky{constructor(t){this.target=t,this.handlers=new Set}removeMessageHandler(t){t.messageChannel&&(t.messageChannel.port1.removeEventListener("message",t.onMessage),t.messageChannel.port1.close()),this.handlers.delete(t)}async _send(t,n,r=50){const s=typeof MessageChannel<"u"?new MessageChannel:null;if(!s)throw new Error("connection_unavailable");let i,o;return new Promise((c,a)=>{const l=oo("",20);s.port1.start();const u=setTimeout(()=>{a(new Error("unsupported_event"))},r);o={messageChannel:s,onMessage(f){const d=f;if(d.data.eventId===l)switch(d.data.status){case"ack":clearTimeout(u),i=setTimeout(()=>{a(new Error("timeout"))},3e3);break;case"done":clearTimeout(i),c(d.data.response);break;default:clearTimeout(u),clearTimeout(i),a(new Error("invalid_response"));break}}},this.handlers.add(o),s.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:t,eventId:l,data:n},[s.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function tt(){return window}function qy(e){tt().location.href=e}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $u(){return typeof tt().WorkerGlobalScope<"u"&&typeof tt().importScripts=="function"}async function Gy(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function Yy(){var e;return((e=navigator==null?void 0:navigator.serviceWorker)===null||e===void 0?void 0:e.controller)||null}function Jy(){return $u()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Uu="firebaseLocalStorageDb",Xy=1,Jr="firebaseLocalStorage",Bu="fbase_key";class ur{constructor(t){this.request=t}toPromise(){return new Promise((t,n)=>{this.request.addEventListener("success",()=>{t(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function vs(e,t){return e.transaction([Jr],t?"readwrite":"readonly").objectStore(Jr)}function Zy(){const e=indexedDB.deleteDatabase(Uu);return new ur(e).toPromise()}function pi(){const e=indexedDB.open(Uu,Xy);return new Promise((t,n)=>{e.addEventListener("error",()=>{n(e.error)}),e.addEventListener("upgradeneeded",()=>{const r=e.result;try{r.createObjectStore(Jr,{keyPath:Bu})}catch(s){n(s)}}),e.addEventListener("success",async()=>{const r=e.result;r.objectStoreNames.contains(Jr)?t(r):(r.close(),await Zy(),t(await pi()))})})}async function tc(e,t,n){const r=vs(e,!0).put({[Bu]:t,value:n});return new ur(r).toPromise()}async function Qy(e,t){const n=vs(e,!1).get(t),r=await new ur(n).toPromise();return r===void 0?null:r.value}function nc(e,t){const n=vs(e,!0).delete(t);return new ur(n).toPromise()}const e_=800,t_=3;class Hu{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await pi(),this.db)}async _withRetries(t){let n=0;for(;;)try{const r=await this._openDb();return await t(r)}catch(r){if(n++>t_)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return $u()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=ms._getInstance(Jy()),this.receiver._subscribe("keyChanged",async(t,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(t,n)=>["keyChanged"])}async initializeSender(){var t,n;if(this.activeServiceWorker=await Gy(),!this.activeServiceWorker)return;this.sender=new Ky(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((t=r[0])===null||t===void 0)&&t.fulfilled&&!((n=r[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(t){if(!(!this.sender||!this.activeServiceWorker||Yy()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:t},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const t=await pi();return await tc(t,Yr,"1"),await nc(t,Yr),!0}catch{}return!1}async _withPendingWrite(t){this.pendingWrites++;try{await t()}finally{this.pendingWrites--}}async _set(t,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>tc(r,t,n)),this.localCache[t]=n,this.notifyServiceWorker(t)))}async _get(t){const n=await this._withRetries(r=>Qy(r,t));return this.localCache[t]=n,n}async _remove(t){return this._withPendingWrite(async()=>(await this._withRetries(n=>nc(n,t)),delete this.localCache[t],this.notifyServiceWorker(t)))}async _poll(){const t=await this._withRetries(s=>{const i=vs(s,!1).getAll();return new ur(i).toPromise()});if(!t)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;for(const{fbase_key:s,value:i}of t)r.add(s),JSON.stringify(this.localCache[s])!==JSON.stringify(i)&&(this.notifyListeners(s,i),n.push(s));for(const s of Object.keys(this.localCache))this.localCache[s]&&!r.has(s)&&(this.notifyListeners(s,null),n.push(s));return n}notifyListeners(t,n){this.localCache[t]=n;const r=this.listeners[t];if(r)for(const s of Array.from(r))s(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),e_)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(t,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[t]||(this.listeners[t]=new Set,this._get(t)),this.listeners[t].add(n)}_removeListener(t,n){this.listeners[t]&&(this.listeners[t].delete(n),this.listeners[t].size===0&&delete this.listeners[t]),Object.keys(this.listeners).length===0&&this.stopPolling()}}Hu.type="LOCAL";const n_=Hu;new or(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function r_(e,t){return t?at(t):(W(e._popupRedirectResolver,e,"argument-error"),e._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ao extends so{constructor(t){super("custom","custom"),this.params=t}_getIdTokenResponse(t){return fn(t,this._buildIdpRequest())}_linkToIdToken(t,n){return fn(t,this._buildIdpRequest(n))}_getReauthenticationResolver(t){return fn(t,this._buildIdpRequest())}_buildIdpRequest(t){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return t&&(n.idToken=t),n}}function s_(e){return Mu(e.auth,new ao(e),e.bypassAuthState)}function i_(e){const{auth:t,user:n}=e;return W(n,t,"internal-error"),Ny(n,new ao(e),e.bypassAuthState)}async function o_(e){const{auth:t,user:n}=e;return W(n,t,"internal-error"),My(n,new ao(e),e.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ju{constructor(t,n,r,s,i=!1){this.auth=t,this.resolver=r,this.user=s,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(t,n)=>{this.pendingPromise={resolve:t,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(t){const{urlResponse:n,sessionId:r,postBody:s,tenantId:i,error:o,type:c}=t;if(o){this.reject(o);return}const a={auth:this.auth,requestUri:n,sessionId:r,tenantId:i||void 0,postBody:s||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(c)(a))}catch(l){this.reject(l)}}onError(t){this.reject(t)}getIdpTask(t){switch(t){case"signInViaPopup":case"signInViaRedirect":return s_;case"linkViaPopup":case"linkViaRedirect":return o_;case"reauthViaPopup":case"reauthViaRedirect":return i_;default:Ke(this.auth,"internal-error")}}resolve(t){ut(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(t),this.unregisterAndCleanUp()}reject(t){ut(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(t),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const a_=new or(2e3,1e4);class rn extends ju{constructor(t,n,r,s,i){super(t,n,s,i),this.provider=r,this.authWindow=null,this.pollId=null,rn.currentPopupAction&&rn.currentPopupAction.cancel(),rn.currentPopupAction=this}async executeNotNull(){const t=await this.execute();return W(t,this.auth,"internal-error"),t}async onExecution(){ut(this.filter.length===1,"Popup operations only handle one event");const t=oo();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],t),this.authWindow.associatedEvent=t,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(et(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var t;return((t=this.authWindow)===null||t===void 0?void 0:t.associatedEvent)||null}cancel(){this.reject(et(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,rn.currentPopupAction=null}pollUserCancellation(){const t=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(et(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(t,a_.get())};t()}}rn.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const c_="pendingRedirect",Dr=new Map;class l_ extends ju{constructor(t,n,r=!1){super(t,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let t=Dr.get(this.auth._key());if(!t){try{const r=await u_(this.resolver,this.auth)?await super.execute():null;t=()=>Promise.resolve(r)}catch(n){t=()=>Promise.reject(n)}Dr.set(this.auth._key(),t)}return this.bypassAuthState||Dr.set(this.auth._key(),()=>Promise.resolve(null)),t()}async onAuthEvent(t){if(t.type==="signInViaRedirect")return super.onAuthEvent(t);if(t.type==="unknown"){this.resolve(null);return}if(t.eventId){const n=await this.auth._redirectUserForId(t.eventId);if(n)return this.user=n,super.onAuthEvent(t);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function u_(e,t){const n=h_(t),r=d_(e);if(!await r._isAvailable())return!1;const s=await r._get(n)==="true";return await r._remove(n),s}function f_(e,t){Dr.set(e._key(),t)}function d_(e){return at(e._redirectPersistence)}function h_(e){return kr(c_,e.config.apiKey,e.name)}async function p_(e,t,n=!1){const r=cr(e),s=r_(r,t),o=await new l_(r,s,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,t)),o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const g_=10*60*1e3;class m_{constructor(t){this.auth=t,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(t){this.consumers.add(t),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,t)&&(this.sendToConsumer(this.queuedRedirectEvent,t),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(t){this.consumers.delete(t)}onEvent(t){if(this.hasEventBeenHandled(t))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(t,r)&&(n=!0,this.sendToConsumer(t,r),this.saveEventToCache(t))}),this.hasHandledPotentialRedirect||!v_(t)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=t,n=!0)),n}sendToConsumer(t,n){var r;if(t.error&&!Vu(t)){const s=((r=t.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(et(this.auth,s))}else n.onAuthEvent(t)}isEventForConsumer(t,n){const r=n.eventId===null||!!t.eventId&&t.eventId===n.eventId;return n.filter.includes(t.type)&&r}hasEventBeenHandled(t){return Date.now()-this.lastProcessedEventTime>=g_&&this.cachedEventUids.clear(),this.cachedEventUids.has(rc(t))}saveEventToCache(t){this.cachedEventUids.add(rc(t)),this.lastProcessedEventTime=Date.now()}}function rc(e){return[e.type,e.eventId,e.sessionId,e.tenantId].filter(t=>t).join("-")}function Vu({type:e,error:t}){return e==="unknown"&&(t==null?void 0:t.code)==="auth/no-auth-event"}function v_(e){switch(e.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Vu(e);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function y_(e,t={}){return En(e,"GET","/v1/projects",t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const __=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,b_=/^https?/;async function E_(e){if(e.config.emulator)return;const{authorizedDomains:t}=await y_(e);for(const n of t)try{if(w_(n))return}catch{}Ke(e,"unauthorized-domain")}function w_(e){const t=hi(),{protocol:n,hostname:r}=new URL(t);if(e.startsWith("chrome-extension://")){const o=new URL(e);return o.hostname===""&&r===""?n==="chrome-extension:"&&e.replace("chrome-extension://","")===t.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!b_.test(n))return!1;if(__.test(e))return r===e;const s=e.replace(/\./g,"\\.");return new RegExp("^(.+\\."+s+"|"+s+")$","i").test(r)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const I_=new or(3e4,6e4);function sc(){const e=tt().___jsl;if(e!=null&&e.H){for(const t of Object.keys(e.H))if(e.H[t].r=e.H[t].r||[],e.H[t].L=e.H[t].L||[],e.H[t].r=[...e.H[t].L],e.CP)for(let n=0;n<e.CP.length;n++)e.CP[n]=null}}function T_(e){return new Promise((t,n)=>{var r,s,i;function o(){sc(),gapi.load("gapi.iframes",{callback:()=>{t(gapi.iframes.getContext())},ontimeout:()=>{sc(),n(et(e,"network-request-failed"))},timeout:I_.get()})}if(!((s=(r=tt().gapi)===null||r===void 0?void 0:r.iframes)===null||s===void 0)&&s.Iframe)t(gapi.iframes.getContext());else if(!((i=tt().gapi)===null||i===void 0)&&i.load)o();else{const c=my("iframefcb");return tt()[c]=()=>{gapi.load?o():n(et(e,"network-request-failed"))},Ru(`https://apis.google.com/js/api.js?onload=${c}`).catch(a=>n(a))}}).catch(t=>{throw Mr=null,t})}let Mr=null;function C_(e){return Mr=Mr||T_(e),Mr}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const A_=new or(5e3,15e3),S_="__/auth/iframe",R_="emulator/auth/iframe",P_={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},O_=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function k_(e){const t=e.config;W(t.authDomain,e,"auth-domain-config-required");const n=t.emulator?to(t,R_):`https://${e.config.authDomain}/${S_}`,r={apiKey:t.apiKey,appName:e.name,v:ir},s=O_.get(e.config.apiHost);s&&(r.eid=s);const i=e._getFrameworks();return i.length&&(r.fw=i.join(",")),`${n}?${sr(r).slice(1)}`}async function D_(e){const t=await C_(e),n=tt().gapi;return W(n,e,"internal-error"),t.open({where:document.body,url:k_(e),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:P_,dontclear:!0},r=>new Promise(async(s,i)=>{await r.restyle({setHideOnLeave:!1});const o=et(e,"network-request-failed"),c=tt().setTimeout(()=>{i(o)},A_.get());function a(){tt().clearTimeout(c),s(r)}r.ping(a).then(a,()=>{i(o)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const M_={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},N_=500,x_=600,L_="_blank",F_="http://localhost";class ic{constructor(t){this.window=t,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function $_(e,t,n,r=N_,s=x_){const i=Math.max((window.screen.availHeight-s)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let c="";const a=Object.assign(Object.assign({},M_),{width:r.toString(),height:s.toString(),top:i,left:o}),l=we().toLowerCase();n&&(c=_u(l)?L_:n),yu(l)&&(t=t||F_,a.scrollbars="yes");const u=Object.entries(a).reduce((d,[m,v])=>`${d}${m}=${v},`,"");if(dy(l)&&c!=="_self")return U_(t||"",c),new ic(null);const f=window.open(t||"",c,u);W(f,e,"popup-blocked");try{f.focus()}catch{}return new ic(f)}function U_(e,t){const n=document.createElement("a");n.href=e,n.target=t;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const B_="__/auth/handler",H_="emulator/auth/handler",j_=encodeURIComponent("fac");async function oc(e,t,n,r,s,i){W(e.config.authDomain,e,"auth-domain-config-required"),W(e.config.apiKey,e,"invalid-api-key");const o={apiKey:e.config.apiKey,appName:e.name,authType:n,redirectUrl:r,v:ir,eventId:s};if(t instanceof ku){t.setDefaultLanguage(e.languageCode),o.providerId=t.providerId||"",xm(t.getCustomParameters())||(o.customParameters=JSON.stringify(t.getCustomParameters()));for(const[u,f]of Object.entries(i||{}))o[u]=f}if(t instanceof lr){const u=t.getScopes().filter(f=>f!=="");u.length>0&&(o.scopes=u.join(","))}e.tenantId&&(o.tid=e.tenantId);const c=o;for(const u of Object.keys(c))c[u]===void 0&&delete c[u];const a=await e._getAppCheckToken(),l=a?`#${j_}=${encodeURIComponent(a)}`:"";return`${V_(e)}?${sr(c).slice(1)}${l}`}function V_({config:e}){return e.emulator?to(e,H_):`https://${e.authDomain}/${B_}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Us="webStorageSupport";class W_{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Fu,this._completeRedirectFn=p_,this._overrideRedirectResult=f_}async _openPopup(t,n,r,s){var i;ut((i=this.eventManagers[t._key()])===null||i===void 0?void 0:i.manager,"_initialize() not called before _openPopup()");const o=await oc(t,n,r,hi(),s);return $_(t,o,oo())}async _openRedirect(t,n,r,s){await this._originValidation(t);const i=await oc(t,n,r,hi(),s);return qy(i),new Promise(()=>{})}_initialize(t){const n=t._key();if(this.eventManagers[n]){const{manager:s,promise:i}=this.eventManagers[n];return s?Promise.resolve(s):(ut(i,"If manager is not set, promise should be"),i)}const r=this.initAndGetManager(t);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(t){const n=await D_(t),r=new m_(t);return n.register("authEvent",s=>(W(s==null?void 0:s.authEvent,t,"invalid-auth-event"),{status:r.onEvent(s.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[t._key()]={manager:r},this.iframes[t._key()]=n,r}_isIframeWebStorageSupported(t,n){this.iframes[t._key()].send(Us,{type:Us},s=>{var i;const o=(i=s==null?void 0:s[0])===null||i===void 0?void 0:i[Us];o!==void 0&&n(!!o),Ke(t,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(t){const n=t._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=E_(t)),this.originValidationPromises[n]}get _shouldInitProactively(){return Tu()||ro()||gs()}}const z_=W_;var ac="@firebase/auth",cc="1.1.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class K_{constructor(t){this.auth=t,this.internalListeners=new Map}getUid(){var t;return this.assertAuthConfigured(),((t=this.auth.currentUser)===null||t===void 0?void 0:t.uid)||null}async getToken(t){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(t)}:null}addAuthTokenListener(t){if(this.assertAuthConfigured(),this.internalListeners.has(t))return;const n=this.auth.onIdTokenChanged(r=>{t((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(t,n),this.updateProactiveRefresh()}removeAuthTokenListener(t){this.assertAuthConfigured();const n=this.internalListeners.get(t);n&&(this.internalListeners.delete(t),n(),this.updateProactiveRefresh())}assertAuthConfigured(){W(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function q_(e){switch(e){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function G_(e){Yn(new mn("auth",(t,{options:n})=>{const r=t.getProvider("app").getImmediate(),s=t.getProvider("heartbeat"),i=t.getProvider("app-check-internal"),{apiKey:o,authDomain:c}=r.options;W(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const a={apiKey:o,authDomain:c,clientPlatform:e,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Cu(e)},l=new Ey(r,s,i,a);return Iy(l,n),l},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((t,n,r)=>{t.getProvider("auth-internal").initialize()})),Yn(new mn("auth-internal",t=>{const n=cr(t.getProvider("auth").getImmediate());return(r=>new K_(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),ln(ac,cc,q_(e)),ln(ac,cc,"esm2017")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Y_=5*60,J_=ru("authIdTokenMaxAge")||Y_;let lc=null;const X_=e=>async t=>{const n=t&&await t.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>J_)return;const s=n==null?void 0:n.token;lc!==s&&(lc=s,await fetch(e,{method:s?"POST":"DELETE",headers:s?{Authorization:`Bearer ${s}`}:{}}))};function Z_(e=xv()){const t=au(e,"auth");if(t.isInitialized())return t.getImmediate();const n=wy(e,{popupRedirectResolver:z_,persistence:[n_,Wy,Fu]}),r=ru("authTokenSyncURL");if(r){const i=X_(r);$y(n,i,()=>i(n.currentUser)),Fy(n,o=>i(o))}const s=Tm("auth");return s&&Ty(n,`http://${s}`),n}G_("Browser");const Q_={apiKey:"AIzaSyAdpc4JEvxEvHaDJ63bFl8E6FJo-RVS_Zo",authDomain:"sandbox-for-testers.firebaseapp.com",projectId:"sandbox-for-testers",storageBucket:"gs://sandbox-for-testers.appspot.com",messagingSenderId:"771218868941",appId:"771218868941"};cu(Q_);const gi=Z_(),Wu=Oe(null);tr(e=>{const t=Uy(gi,n=>{Wu.value=n});e(()=>t())});function eb(){function e(n,r){Ly(gi,n,r).then(s=>{localStorage.setItem("formData",""),localStorage.setItem("blockEdit","false");const i=s.user;console.log("Logged in successfully:",i),co.push("/")}).catch(s=>{console.error("Login error:",s)})}function t(){By(gi).then(()=>{localStorage.setItem("formData",""),localStorage.setItem("blockEdit","false"),console.log("Logged out successfully")}).catch(n=>{console.error("Logout error:",n)})}return{user:Wu,login:e,logout:t}}const uc=eb(),tb=[{path:"/",name:"Home",component:()=>Pr(()=>import("./Home-1e4d9d2d.js"),["assets/Home-1e4d9d2d.js","assets/VTextField-c2a69fef.js","assets/VTextField-8c7be415.css","assets/VAvatar-3b741e8f.js","assets/VAvatar-4583dbf0.css","assets/Home-fb117b5e.css"])},{path:"/login",name:"Login",component:()=>Pr(()=>import("./Login-f46f250e.js"),["assets/Login-f46f250e.js","assets/VCardTitle-6754acbc.js","assets/VTextField-c2a69fef.js","assets/VTextField-8c7be415.css"])},{path:"/accept",name:"Accept",component:()=>Pr(()=>import("./Accept-b5d581ca.js"),["assets/Accept-b5d581ca.js","assets/VCardTitle-6754acbc.js","assets/VTextField-c2a69fef.js","assets/VTextField-8c7be415.css","assets/VAvatar-3b741e8f.js","assets/VAvatar-4583dbf0.css"])}],co=gm({history:kg({}.BASE_URL),routes:tb});co.beforeEach(async(e,t)=>{if(console.log(e.path),!uc.user&&e.path!=="/login")return"/login";if(e.path==="/accept"&&!uc.user)return"/"});function nb(e){Up(),e.use(hg).use(co)}const zu=Ah(Lp);nb(zu);zu.mount("#app");export{Xo as $,Ab as A,Ol as B,Kt as C,uf as D,Tb as E,Me as F,ct as G,be as H,jp as I,Z as J,Li as K,Dt as L,nr as M,kp as N,Sb as O,yr as P,pb as Q,Il as R,kb as S,hl as T,xh as U,We as V,Rl as W,bb as X,Oh as Y,tr as Z,af as _,zi as a,Nb as a0,os as a1,Ne as a2,ts as a3,Nl as a4,cb as a5,mb as a6,tp as a7,wl as a8,$d as a9,Sr as aA,xc as aB,ob as aC,Cb as aD,Jo as aE,gb as aF,fb as aG,kt as aH,xi as aa,il as ab,al as ac,Tr as ad,db as ae,ll as af,ub as ag,Rp as ah,co as ai,Be as aj,lb as ak,rb as al,eb as am,Mb as an,er as ao,us as ap,cd as aq,Ob as ar,Eb as as,nt as at,_e as au,Rb as av,Pb as aw,xb as ax,Dh as ay,as as az,xl as b,ne as c,Ph as d,Ib as e,Ep as f,fs as g,Tp as h,wb as i,Jh as j,Db as k,lp as l,ul as m,G as n,yb as o,dt as p,_b as q,ab as r,Oe as s,sb as t,Gi as u,hb as v,ib as w,Qe as x,vb as y,ki as z};
