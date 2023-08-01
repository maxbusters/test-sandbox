import{p as V,a as k,b as F,g as C,n as S,ap as X,an as p,ao as ee,u as z,c as n,G as y,s as ae,x as P,aq as te,ar as ne,z as le,w as L,r as se,F as re,m as ie,P as ue,v as oe,I as ce,f as ve,h as de}from"./index-050d2f96.js";import{N as ge,O as me,Z as fe,a5 as ye,M as h,f as Se,i as _e,k as he,c as Ve,o as ke,p as Ce,r as Pe,t as ze,y as Re,x as we}from"./VTextField-c2a69fef.js";const R=["start","end","center"],M=["space-between","space-around","space-evenly"];function w(e,u){return p.reduce((t,l)=>{const i=e+ee(l);return t[i]=u(),t},{})}const be=[...R,"baseline","stretch"],x=e=>be.includes(e),D=w("align",()=>({type:String,default:null,validator:x})),Ie=[...R,...M],G=e=>Ie.includes(e),U=w("justify",()=>({type:String,default:null,validator:G})),je=[...R,...M,"stretch"],W=e=>je.includes(e),q=w("alignContent",()=>({type:String,default:null,validator:W})),O={align:Object.keys(D),justify:Object.keys(U),alignContent:Object.keys(q)},Ne={align:"align",justify:"justify",alignContent:"align-content"};function Te(e,u,t){let l=Ne[e];if(t!=null){if(u){const i=u.replace(e,"");l+=`-${i}`}return l+=`-${t}`,l.toLowerCase()}}const Ae=V({dense:Boolean,noGutters:Boolean,align:{type:String,default:null,validator:x},...D,justify:{type:String,default:null,validator:G},...U,alignContent:{type:String,default:null,validator:W},...q,...k(),...F()},"VRow"),Me=C()({name:"VRow",props:Ae(),setup(e,u){let{slots:t}=u;const l=S(()=>{const i=[];let s;for(s in O)O[s].forEach(r=>{const v=e[r],d=Te(s,r,v);d&&i.push(d)});return i.push({"v-row--no-gutters":e.noGutters,"v-row--dense":e.dense,[`align-${e.align}`]:e.align,[`justify-${e.justify}`]:e.justify,[`align-content-${e.alignContent}`]:e.alignContent}),i});return()=>{var i;return X(e.tag,{class:["v-row",l.value,e.class],style:e.style},(i=t.default)==null?void 0:i.call(t))}}});function Ee(e){return{aspectStyles:S(()=>{const u=Number(e.aspectRatio);return u?{paddingBottom:String(1/u*100)+"%"}:void 0})}}const H=V({aspectRatio:[String,Number],contentClass:String,inline:Boolean,...k(),...ge()},"VResponsive"),$=C()({name:"VResponsive",props:H(),setup(e,u){let{slots:t}=u;const{aspectStyles:l}=Ee(e),{dimensionStyles:i}=me(e);return z(()=>{var s;return n("div",{class:["v-responsive",{"v-responsive--inline":e.inline},e.class],style:[i.value,e.style]},[n("div",{class:"v-responsive__sizer",style:l.value},null),(s=t.additional)==null?void 0:s.call(t),t.default&&n("div",{class:["v-responsive__content",e.contentClass]},[t.default()])])}),{}}}),Be=V({alt:String,cover:Boolean,eager:Boolean,gradient:String,lazySrc:String,options:{type:Object,default:()=>({root:void 0,rootMargin:void 0,threshold:void 0})},sizes:String,src:{type:[String,Object],default:""},srcset:String,...H(),...k(),...fe()},"VImg"),Le=C()({name:"VImg",directives:{intersect:ye},props:Be(),emits:{loadstart:e=>!0,load:e=>!0,error:e=>!0},setup(e,u){let{emit:t,slots:l}=u;const i=y(""),s=ae(),r=y(e.eager?"loading":"idle"),v=y(),d=y(),c=S(()=>e.src&&typeof e.src=="object"?{src:e.src.src,srcset:e.srcset||e.src.srcset,lazySrc:e.lazySrc||e.src.lazySrc,aspect:Number(e.aspectRatio||e.src.aspect||0)}:{src:e.src,srcset:e.srcset,lazySrc:e.lazySrc,aspect:Number(e.aspectRatio||0)}),m=S(()=>c.value.aspect||v.value/d.value||0);P(()=>e.src,()=>{f(r.value!=="idle")}),P(m,(a,o)=>{!a&&o&&s.value&&_(s.value)}),te(()=>f());function f(a){if(!(e.eager&&a)&&!(ne&&!a&&!e.eager)){if(r.value="loading",c.value.lazySrc){const o=new Image;o.src=c.value.lazySrc,_(o,null)}c.value.src&&le(()=>{var o,g;if(t("loadstart",((o=s.value)==null?void 0:o.currentSrc)||c.value.src),(g=s.value)!=null&&g.complete){if(s.value.naturalWidth||I(),r.value==="error")return;m.value||_(s.value,null),b()}else m.value||_(s.value),j()})}}function b(){var a;j(),r.value="loaded",t("load",((a=s.value)==null?void 0:a.currentSrc)||c.value.src)}function I(){var a;r.value="error",t("error",((a=s.value)==null?void 0:a.currentSrc)||c.value.src)}function j(){const a=s.value;a&&(i.value=a.currentSrc||a.src)}let N=-1;function _(a){let o=arguments.length>1&&arguments[1]!==void 0?arguments[1]:100;const g=()=>{clearTimeout(N);const{naturalHeight:E,naturalWidth:B}=a;E||B?(v.value=B,d.value=E):!a.complete&&r.value==="loading"&&o!=null?N=window.setTimeout(g,o):(a.currentSrc.endsWith(".svg")||a.currentSrc.startsWith("data:image/svg+xml"))&&(v.value=1,d.value=1)};g()}const T=S(()=>({"v-img__img--cover":e.cover,"v-img__img--contain":!e.cover})),J=()=>{var g;if(!c.value.src||r.value==="idle")return null;const a=n("img",{class:["v-img__img",T.value],src:c.value.src,srcset:c.value.srcset,alt:e.alt,sizes:e.sizes,ref:s,onLoad:b,onError:I},null),o=(g=l.sources)==null?void 0:g.call(l);return n(h,{transition:e.transition,appear:!0},{default:()=>[L(o?n("picture",{class:"v-img__picture"},[o,a]):a,[[oe,r.value==="loaded"]])]})},K=()=>n(h,{transition:e.transition},{default:()=>[c.value.lazySrc&&r.value!=="loaded"&&n("img",{class:["v-img__img","v-img__img--preload",T.value],src:c.value.lazySrc,alt:e.alt},null)]}),Y=()=>l.placeholder?n(h,{transition:e.transition,appear:!0},{default:()=>[(r.value==="loading"||r.value==="error"&&!l.error)&&n("div",{class:"v-img__placeholder"},[l.placeholder()])]}):null,Z=()=>l.error?n(h,{transition:e.transition,appear:!0},{default:()=>[r.value==="error"&&n("div",{class:"v-img__error"},[l.error()])]}):null,Q=()=>e.gradient?n("div",{class:"v-img__gradient",style:{backgroundImage:`linear-gradient(${e.gradient})`}},null):null,A=y(!1);{const a=P(m,o=>{o&&(requestAnimationFrame(()=>{requestAnimationFrame(()=>{A.value=!0})}),a())})}return z(()=>{const[a]=$.filterProps(e);return L(n($,ie({class:["v-img",{"v-img--booting":!A.value},e.class],style:[{width:ue(e.width==="auto"?v.value:e.width)},e.style]},a,{aspectRatio:m.value,"aria-label":e.alt,role:e.alt?"img":void 0}),{additional:()=>n(re,null,[n(J,null,null),n(K,null,null),n(Q,null,null),n(Y,null,null),n(Z,null,null)]),default:l.default}),[[se("intersect"),{handler:f,options:e.options},null,{once:!0}]])}),{currentSrc:i,image:s,state:r,naturalWidth:v,naturalHeight:d}}}),Oe=V({start:Boolean,end:Boolean,icon:ce,image:String,...k(),...Se(),..._e(),...he(),...F(),...ve(),...Ve({variant:"flat"})},"VAvatar"),xe=C()({name:"VAvatar",props:Oe(),setup(e,u){let{slots:t}=u;const{themeClasses:l}=de(e),{colorClasses:i,colorStyles:s,variantClasses:r}=ke(e),{densityClasses:v}=Ce(e),{roundedClasses:d}=Pe(e),{sizeClasses:c,sizeStyles:m}=ze(e);return z(()=>n(e.tag,{class:["v-avatar",{"v-avatar--start":e.start,"v-avatar--end":e.end},l.value,i.value,v.value,d.value,c.value,r.value,e.class],style:[s.value,m.value,e.style]},{default:()=>{var f;return[e.image?n(Le,{key:"image",src:e.image,alt:"",cover:!0},null):e.icon?n(Re,{key:"icon",icon:e.icon},null):(f=t.default)==null?void 0:f.call(t),we(!1,"v-avatar")]}})),{}}});export{xe as V,Me as a};
