import{an as b,ao as v,p as _,a as x,b as A,g as B,n as P,ap as $,s as U,a1 as E,ac as m,ad as u,ah as h,ab as d,c as r,a9 as f,af as j,ag as V,ak as F,ai as C,am as O}from"./index-050d2f96.js";import{V as I}from"./VCardTitle-6754acbc.js";import{a3 as T,a2 as i,a4 as g,y as z}from"./VTextField-c2a69fef.js";import{V as D,a as y}from"./VAvatar-3b741e8f.js";const S=(()=>b.reduce((e,s)=>(e[s]={type:[Boolean,String,Number],default:!1},e),{}))(),L=(()=>b.reduce((e,s)=>{const l="offset"+v(s);return e[l]={type:[String,Number],default:null},e},{}))(),w=(()=>b.reduce((e,s)=>{const l="order"+v(s);return e[l]={type:[String,Number],default:null},e},{}))(),N={col:Object.keys(S),offset:Object.keys(L),order:Object.keys(w)};function G(e,s,l){let a=e;if(!(l==null||l===!1)){if(s){const n=s.replace(e,"");a+=`-${n}`}return e==="col"&&(a="v-"+a),e==="col"&&(l===""||l===!0)||(a+=`-${l}`),a.toLowerCase()}}const K=["auto","start","end","center","baseline","stretch"],M=_({cols:{type:[Boolean,String,Number],default:!1},...S,offset:{type:[String,Number],default:null},...L,order:{type:[String,Number],default:null},...w,alignSelf:{type:String,default:null,validator:e=>K.includes(e)},...x(),...A()},"VCol"),J=B()({name:"VCol",props:M(),setup(e,s){let{slots:l}=s;const a=P(()=>{const n=[];let c;for(c in N)N[c].forEach(t=>{const o=e[t],k=G(c,t,o);k&&n.push(k)});const p=n.some(t=>t.startsWith("v-col-"));return n.push({"v-col":!p||!e.cols,[`v-col-${e.cols}`]:e.cols,[`offset-${e.offset}`]:e.offset,[`order-${e.order}`]:e.order,[`align-self-${e.alignSelf}`]:e.alignSelf}),n});return()=>{var n;return $(e.tag,{class:[a.value,e.class],style:e.style},(n=l.default)==null?void 0:n.call(l))}}}),R=["src"],W={key:2,class:"text-center"},Y={__name:"Accept",setup(e){const s=O(),l=U(!1),a={firstName:"",lastName:"",email:"",phone:"",password:"",driveLicenseCategories:[],previewState:""};E(()=>{Object.assign(a,JSON.parse(localStorage.getItem("formData")||"{}")),a.driveLicenseCategories=a.driveLicenseCategories.toString()});function n(){localStorage.setItem("blockEdit","true"),C.go(-1)}function c(){s.logout(),C.push("/login")}return(p,t)=>(d(),m(h,null,{default:u(()=>[r(I,null,{default:u(()=>[f("Accept data")]),_:1}),l.value?V("",!0):(d(),m(T,{key:0},{default:u(()=>[r(i,{modelValue:a.firstName,"onUpdate:modelValue":t[0]||(t[0]=o=>a.firstName=o),label:"First Name",disabled:""},null,8,["modelValue"]),r(i,{modelValue:a.lastName,"onUpdate:modelValue":t[1]||(t[1]=o=>a.lastName=o),label:"Last Name",disabled:""},null,8,["modelValue"]),r(i,{modelValue:a.email,"onUpdate:modelValue":t[2]||(t[2]=o=>a.email=o),label:"Email",disabled:""},null,8,["modelValue"]),r(i,{modelValue:a.phone,"onUpdate:modelValue":t[3]||(t[3]=o=>a.phone=o),label:"Phone Number",disabled:""},null,8,["modelValue"]),r(i,{modelValue:a.password,"onUpdate:modelValue":t[4]||(t[4]=o=>a.password=o),label:"Password",disabled:""},null,8,["modelValue"]),r(i,{modelValue:a.driveLicenseCategories,"onUpdate:modelValue":t[5]||(t[5]=o=>a.driveLicenseCategories=o),label:"Categories",disabled:""},null,8,["modelValue"]),r(y,{class:"my-5"},{default:u(()=>[a.previewState?(d(),m(D,{key:0,size:"100",class:"avatar"},{default:u(()=>[j("img",{src:a.previewState,alt:"Avatar"},null,8,R)]),_:1})):V("",!0)]),_:1}),r(g,{color:"primary",onClick:t[6]||(t[6]=o=>l.value=!0)},{default:u(()=>[f("All correct")]),_:1}),r(g,{color:"green",onClick:t[7]||(t[7]=o=>n())},{default:u(()=>[f("Go back and edit")]),_:1})]),_:1})),l.value?(d(),m(y,{key:1},{default:u(()=>[r(J,{class:"d-flex flex-row justify-center"},{default:u(()=>[r(z,{color:"green",size:"500"},{default:u(()=>[f("mdi-check")]),_:1})]),_:1})]),_:1})):V("",!0),l.value?(d(),F("h2",W,"Success")):V("",!0),l.value?(d(),m(g,{key:3,color:"primary",onClick:c},{default:u(()=>[f("Logout")]),_:1})):V("",!0)]),_:1}))}};export{Y as default};
