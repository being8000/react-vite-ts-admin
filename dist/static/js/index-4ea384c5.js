import{j as e,u as ge,L as Y,b as G,c as P,d as H,e as X,f as Q,D as fe,g as M,h as L,s as j,M as Ke,I as Ve,r as d,B as v,T as je,i as h,k as Z,l as Je,m as Ye,n as N,o as ee,q as te,v as Ge,w as se,x as S,y as be,z as He,A as Xe,C as Qe,E as R,F as Ze,G as et,H as we,J as ve,K as ye,N as Ce,O as w,P as Se,Q as y,S as tt,U as st,V as re,W as Te,X as rt,Y as ke,Z as at,_ as nt,$ as ot,a0 as q,a1 as Ne,a2 as it,a3 as lt,a4 as Me,a5 as ae,a6 as ct,a7 as dt,a8 as ne,a9 as oe,aa as ie,ab as le,ac as ut,ad as ht,ae as ce,af as mt,ag as xt,ah as pt,ai as gt,aj as ft,ak as jt,al as bt}from"./vendor-d51766c1.js";import{u as wt,N as vt,a as Be,O as yt,b as Ct,c as St,F as Tt,d as Oe,r as _e,e as kt,R as Nt}from"./@react-router-b70336fe.js";import{c as Ie,a as f}from"./yup-f5e84f73.js";import{a as Mt}from"./axios-82c35b0f.js";import{d as Pe}from"./crypto-js-13e3271f.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))r(n);new MutationObserver(n=>{for(const i of n)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function a(n){const i={};return n.integrity&&(i.integrity=n.integrity),n.referrerPolicy&&(i.referrerPolicy=n.referrerPolicy),n.crossOrigin==="use-credentials"?i.credentials="include":n.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(n){if(n.ep)return;n.ep=!0;const i=a(n);fetch(n.href,i)}})();function Bt(){const t=wt();return e.jsxs("div",{id:"error-page",children:[e.jsx("h1",{children:"Oops!"}),e.jsx("p",{children:"Sorry, an unexpected error has occurred."}),e.jsx("p",{children:e.jsx("i",{children:t.statusText||t.message})})]})}function Ot(t){return e.jsxs("svg",{width:"30px",height:"30px",viewBox:"0 0 100 100",preserveAspectRatio:"xMidYMid",...t,children:[e.jsx("circle",{cx:"50",cy:"50",r:"32",strokeWidth:"8",stroke:"#e15b64",strokeDasharray:"50.26548245743669 50.26548245743669",fill:"none",strokeLinecap:"round",children:e.jsx("animateTransform",{attributeName:"transform",type:"rotate",dur:"1s",repeatCount:"indefinite",keyTimes:"0;1",values:"0 50 50;360 50 50"})}),e.jsx("circle",{cx:"50",cy:"50",r:"23",strokeWidth:"8",stroke:"#f8b26a",strokeDasharray:"36.12831551628262 36.12831551628262",strokeDashoffset:"36.12831551628262",fill:"none",strokeLinecap:"round",children:e.jsx("animateTransform",{attributeName:"transform",type:"rotate",dur:"1s",repeatCount:"indefinite",keyTimes:"0;1",values:"0 50 50;-360 50 50"})})]})}const _t=[{path:"/",icon:e.jsx(M,{}),title:"Dashboard"},{path:"/counter",icon:e.jsx(M,{}),title:"Counter"},{path:"/contacts",icon:e.jsx(M,{}),title:"Contacts"}];function It(){return ge(),e.jsxs(e.Fragment,{children:[e.jsx(Y,{sx:{},children:_t.map((t,s)=>e.jsx(vt,{to:t.path,className:({isActive:a,isPending:r})=>r?"pending":a?"pointer-events-none":"",children:({isActive:a,isPending:r})=>e.jsx(G,{disablePadding:!0,className:"transition duration-[150ms]",...a&&{sx:n=>({borderRadius:"8px",bgcolor:P(n.palette.primary.main,.8),color:"#fff",transform:"scale(0.95)"})},children:e.jsxs(H,{children:[e.jsx(X,{children:r?e.jsx(Ot,{}):t.icon}),e.jsx(Q,{primary:t.title})]})})},s))}),e.jsx(fe,{}),e.jsx(Y,{children:["All mail","Trash","Spam"].map((t,s)=>e.jsx(G,{disablePadding:!0,children:e.jsxs(H,{children:[e.jsx(X,{children:s%2===0?e.jsx(M,{}):e.jsx(L,{})}),e.jsx(Q,{primary:t})]})},t))})]})}const de=240,Pt=j(Ke,{shouldForwardProp:t=>t!=="open"})(({theme:t,open:s})=>({zIndex:t.zIndex.drawer+1,transition:t.transitions.create(["width","margin"],{easing:t.transitions.easing.sharp,duration:t.transitions.duration.leavingScreen}),...s&&{marginLeft:de,width:`calc(100% - ${de}px)`,transition:t.transitions.create(["width","margin"],{easing:t.transitions.easing.sharp,duration:t.transitions.duration.enteringScreen})}})),Lt=j("div")(({theme:t})=>({position:"relative",borderRadius:t.shape.borderRadius,backgroundColor:P(t.palette.common.white,.15),"&:hover":{backgroundColor:P(t.palette.common.white,.25)},marginRight:t.spacing(2),marginLeft:0,width:"100%",[t.breakpoints.up("sm")]:{marginLeft:t.spacing(3),width:"auto"}})),Dt=j("div")(({theme:t})=>({padding:t.spacing(0,2),height:"100%",position:"absolute",pointerEvents:"none",display:"flex",alignItems:"center",justifyContent:"center"})),At=j(Ve)(({theme:t})=>({color:"inherit","& .MuiInputBase-input":{padding:t.spacing(1,1,1,0),paddingLeft:`calc(1em + ${t.spacing(4)})`,transition:t.transitions.create("width"),width:"100%",[t.breakpoints.up("md")]:{width:"20ch"}}}));function Rt(t){const[s,a]=d.useState(null),[r,n]=d.useState(null),i=!!s,o=!!r,c=_=>{a(_.currentTarget)},l=()=>{n(null)},m=()=>{a(null),l()},C=_=>{n(_.currentTarget)},u="primary-search-account-menu",b=e.jsxs(se,{anchorEl:s,anchorOrigin:{vertical:"top",horizontal:"right"},id:u,keepMounted:!0,transformOrigin:{vertical:"top",horizontal:"right"},open:i,onClose:m,children:[e.jsx(S,{onClick:m,children:"Profile"}),e.jsx(S,{onClick:m,children:"My account"})]}),J="primary-search-account-menu-mobile",We=e.jsxs(se,{anchorEl:r,anchorOrigin:{vertical:"top",horizontal:"right"},id:J,keepMounted:!0,transformOrigin:{vertical:"top",horizontal:"right"},open:o,onClose:l,children:[e.jsxs(S,{children:[e.jsx(h,{size:"large","aria-label":"show 4 new mails",color:"inherit",children:e.jsx(N,{badgeContent:4,color:"error",children:e.jsx(L,{})})}),e.jsx("p",{children:"Messages"})]}),e.jsxs(S,{children:[e.jsx(h,{size:"large","aria-label":"show 17 new notifications",color:"inherit",children:e.jsx(N,{badgeContent:17,color:"error",children:e.jsx(ee,{})})}),e.jsx("p",{children:"Notifications"})]}),e.jsxs(S,{onClick:c,children:[e.jsx(h,{size:"large","aria-label":"account of current user","aria-controls":"primary-search-account-menu","aria-haspopup":"true",color:"inherit",children:e.jsx(te,{})}),e.jsx("p",{children:"Profile"})]})]});return e.jsxs(v,{sx:{flexGrow:1},children:[e.jsx(Pt,{position:"fixed",open:t.open,children:e.jsxs(je,{children:[e.jsx(h,{color:"inherit","aria-label":"open drawer",edge:"start",onClick:t.handleMobileDrawerToggle,sx:{mr:2,display:{sm:"none"}},children:e.jsx(Z,{})}),e.jsx(h,{size:"large",edge:"start",color:"inherit","aria-label":"open drawer",onClick:t.handleDrawerToggle,sx:{mr:2,display:{xs:"none",sm:"block"}},children:e.jsx(Z,{})}),e.jsx(Je,{variant:"h6",noWrap:!0,component:"div",sx:{display:{xs:"none",sm:"block"}},children:"MUI"}),e.jsxs(Lt,{children:[e.jsx(Dt,{children:e.jsx(Ye,{})}),e.jsx(At,{placeholder:"Search…",inputProps:{"aria-label":"search"}})]}),e.jsx(v,{sx:{flexGrow:1}}),e.jsxs(v,{sx:{display:{xs:"none",md:"flex"}},children:[e.jsx(h,{size:"large","aria-label":"show 4 new mails",color:"inherit",children:e.jsx(N,{badgeContent:4,color:"error",children:e.jsx(L,{})})}),e.jsx(h,{size:"large","aria-label":"show 17 new notifications",color:"inherit",children:e.jsx(N,{badgeContent:17,color:"error",children:e.jsx(ee,{})})}),e.jsx(h,{size:"large",edge:"end","aria-label":"account of current user","aria-controls":u,"aria-haspopup":"true",onClick:c,color:"inherit",children:e.jsx(te,{})})]}),e.jsx(v,{sx:{display:{xs:"flex",md:"none"}},children:e.jsx(h,{size:"large","aria-label":"show more","aria-controls":J,"aria-haspopup":"true",onClick:C,color:"inherit",children:e.jsx(Ge,{})})})]})}),We,b]})}const z=240,ue=t=>({width:z,transition:t.transitions.create("width",{easing:t.transitions.easing.sharp,duration:t.transitions.duration.enteringScreen}),overflowX:"hidden"}),he=t=>({transition:t.transitions.create("width",{easing:t.transitions.easing.sharp,duration:t.transitions.duration.leavingScreen}),overflowX:"hidden",width:`calc(${t.spacing(7)} + 1px)`,[t.breakpoints.up("sm")]:{width:`calc(${t.spacing(7)} + 1px)`}}),qt=j("div")(({theme:t})=>({display:"flex",alignItems:"center",justifyContent:"flex-end",padding:t.spacing(0,1),...t.mixins.toolbar})),zt=j(be,{shouldForwardProp:t=>t!=="open"})(({theme:t,open:s})=>({width:z,flexShrink:0,whiteSpace:"nowrap",boxSizing:"border-box",...s&&{...ue(t),"& .MuiDrawer-paper":ue(t)},...!s&&{...he(t),"& .MuiDrawer-paper":he(t)}}));function Et(t){const s=ge(),a=Be(),{window:r}=t,[n,i]=d.useState(!1),[o,c]=d.useState(!1),l=()=>{i(!n),c(!1)},m=()=>{c(!1)},C=()=>{c(!o)},u=e.jsxs("div",{children:[e.jsx(qt,{children:e.jsx(h,{onClick:m,children:s.direction==="rtl"?e.jsx(He,{}):e.jsx(Xe,{})})}),e.jsx(fe,{}),e.jsx(It,{})]}),b=r!==void 0?()=>r().document.body:void 0;return e.jsxs(v,{sx:{display:"flex"},children:[e.jsx(Qe,{}),e.jsx(Rt,{handleDrawerToggle:C,handleMobileDrawerToggle:l,open:o}),e.jsxs(v,{component:"nav",sx:{flexShrink:{sm:0}},"aria-label":"mailbox folders",children:[e.jsx(be,{container:b,variant:"temporary",open:n,onClose:l,ModalProps:{keepMounted:!0},sx:{"& .MuiDrawer-paper":{boxSizing:"border-box",width:z}},children:u}),e.jsx(zt,{variant:"permanent",open:o,sx:{display:{xs:"none",sm:"block"}},children:u})]}),e.jsxs(v,{component:"main",sx:{flexGrow:1,p:3,width:{sm:"100%"},maxWidth:"100vw"},children:[e.jsx(je,{}),e.jsx("div",{id:"detail",className:a.state==="loading"?"loading":"",children:e.jsx(yt,{})})]})]})}async function Le(t){await E(`getContacts:${t}`);let s=await R.getItem("contacts");return s||(s=[]),t&&(s=Ze(s,t,{keys:["first","last"]})),s.sort(et("last","createdAt"))}async function $t(){await E();const s={id:Math.random().toString(36).substring(2,9),createdAt:Date.now()},a=await Le();return a.unshift(s),await De(a),s}async function me(t,s){await E();const a=await R.getItem("contacts"),r=a.find(n=>n.id===t);if(!r)throw new Error("No contact found for",t);return Object.assign(r,s),await De(a),r}function De(t){return R.setItem("contacts",t)}let I={};async function E(t){if(t||(I={}),!I[t])return I[t]=!0,new Promise(s=>{setTimeout(s,Math.random()*800)})}const Ft=Ie({first:f().required("First is required"),last:f().required("Last is required"),favorite:f().required("favorite is required"),twitter:f().required("twitter is required"),avatar:f().required("avatar is required"),notes:f().required("notes is required")});function Ut({open:t,onClose:s,data:a}){const r=we({initialValues:a,validationSchema:Ft,onSubmit:async n=>{if(n.id)await me(n.id,n);else{const i=await $t();n.id=i.id,await me(i.id,n)}s()}});return e.jsx("div",{children:e.jsx(ve,{open:t,onClose:s,children:e.jsxs("form",{onSubmit:r.handleSubmit,children:[e.jsx(ye,{children:"Contacts"}),e.jsxs(Ce,{sx:{},children:[e.jsx(w,{fullWidth:!0,margin:"dense",id:"first",name:"first",label:"First",variant:"standard",value:r.values.first,onChange:r.handleChange,onBlur:r.handleBlur,error:r.touched.first&&!!r.errors.first,helperText:r.touched.first&&r.errors.first}),e.jsx(w,{fullWidth:!0,margin:"dense",id:"last",name:"last",label:"Last",variant:"standard",value:r.values.last,onChange:r.handleChange,onBlur:r.handleBlur,error:r.touched.last&&!!r.errors.last,helperText:r.touched.last&&r.errors.last}),e.jsx(w,{fullWidth:!0,margin:"dense",id:"twitter",name:"twitter",label:"twitter",variant:"standard",value:r.values.twitter,onChange:r.handleChange,onBlur:r.handleBlur,error:r.touched.twitter&&!!r.errors.twitter,helperText:r.touched.twitter&&r.errors.twitter}),e.jsx(w,{fullWidth:!0,margin:"dense",id:"avatar",name:"avatar",label:"avatar",variant:"standard",value:r.values.avatar,onChange:r.handleChange,onBlur:r.handleBlur,error:r.touched.avatar&&!!r.errors.avatar,helperText:r.touched.avatar&&r.errors.avatar}),e.jsx(w,{fullWidth:!0,margin:"dense",id:"notes",name:"notes",label:"notes",variant:"standard",value:r.values.notes,onChange:r.handleChange,onBlur:r.handleBlur,error:r.touched.notes&&!!r.errors.notes,helperText:r.touched.notes&&r.errors.notes})]}),e.jsxs(Se,{children:[e.jsx(y,{onClick:s,children:"Cancel"}),e.jsx(y,{type:"submit",children:"Submit"})]})]})})})}const T=[{name:{firstName:"John",lastName:"Doe"},address:"261 Erdman Ford",city:"East Daphne",state:"Kentucky"},{name:{firstName:"Jane",lastName:"Doe"},address:"769 Dominic Grove",city:"Columbus",state:"Ohio"},{name:{firstName:"Joe",lastName:"Doe"},address:"566 Brakus Inlet",city:"South Linda",state:"West Virginia"},{name:{firstName:"Kevin",lastName:"Vandy"},address:"722 Emie Stream",city:"Lincoln",state:"Nebraska"},{name:{firstName:"Joshua",lastName:"Rolluffs"},address:"32188 Larkin Turnpike",city:"Omaha",state:"Nebraska"}],Wt=()=>{const t=d.useMemo(()=>[{accessorKey:"name.firstName",header:"First Name",size:150},{accessorKey:"name.lastName",header:"Last Name",size:150},{accessorKey:"address",header:"Address",size:200},{accessorKey:"city",header:"City",size:150},{accessorKey:"state",header:"State",size:150},{accessorKey:"state1",header:"State1",size:150},{accessorKey:"state2",header:"State2",size:150},{accessorKey:"state3",header:"State3",size:150},{accessorKey:"state4",header:"State4",size:150}],[]),s=[...T,...T,...T,...T,...T],a=[...s,...s,...s,...s,...s];return e.jsx(tt,{columns:t,data:a})},x=j(st)(({theme:t})=>({[`&.${re.head}`]:{backgroundColor:t.palette.common.black,color:t.palette.common.white},[`&.${re.body}`]:{fontSize:14}})),Kt=j(Te)(({theme:t})=>({"&:nth-of-type(odd)":{backgroundColor:t.palette.action.hover},"&:last-child td, &:last-child th":{border:0}})),Vt=async({request:t})=>{const a=new URL(t.url).searchParams.get("q");return{contacts:await Le(a),q:a}};function Jt(){const[t,s]=d.useState(!1),[a,r]=d.useState({id:"",first:"123123",last:"",favorite:!1,twitter:"",avatar:"",notes:""}),n=Be(),{contacts:i,q:o}=Ct(),c=St(),l=n.location&&new URLSearchParams(n.location.search).has("q");d.useEffect(()=>{const u=document.getElementById("q");u.value=o},[o]);const m=()=>{r({id:"",first:"",last:"",favorite:!1,twitter:"",avatar:"",notes:""}),s(!0)},C=()=>{s(!1)};return e.jsxs(e.Fragment,{children:[t&&e.jsx(Ut,{onClose:C,open:t,data:a}),e.jsxs("div",{id:"sidebar",children:[JSON.stringify(a),e.jsx("h1",{className:"text-[red]",children:"React Router Contacts"}),e.jsxs("div",{className:"flex items-center",children:[e.jsxs(Tt,{id:"search-form",role:"search",children:[e.jsx(w,{id:"q",label:"Outlined",variant:"outlined",className:l?"loading":"","aria-label":"Search contacts",placeholder:"Search",type:"search",size:"small",name:"q",defaultValue:o,onChange:u=>{const b=o==null;c(u.currentTarget.form,{replace:!b})}}),e.jsx("div",{id:"search-spinner","aria-hidden":!0,hidden:!l}),e.jsx("div",{className:"sr-only","aria-live":"polite"})]}),e.jsx(y,{type:"submit",size:"small",variant:"contained",onClick:m,children:"New"})]}),e.jsx(rt,{component:ke,children:e.jsxs(at,{sx:{minWidth:700},"aria-label":"customized table",children:[e.jsx(nt,{children:e.jsxs(Te,{children:[e.jsx(x,{children:"ID"}),e.jsx(x,{align:"right",children:"First"}),e.jsx(x,{align:"right",children:"Last"}),e.jsx(x,{align:"right",children:"Favorite"}),e.jsx(x,{align:"center",className:"sticky right-0 border-",children:"Operate"})]})}),e.jsx(ot,{children:i.map((u,b)=>e.jsxs(Kt,{children:[e.jsx(x,{align:"left",children:u.id}),e.jsx(x,{align:"right",children:u.first}),e.jsx(x,{align:"right",children:u.last}),e.jsx(x,{align:"right",children:u.favorite&&e.jsx("span",{children:"★"})}),e.jsx(x,{align:"center",className:"sticky right-0 border-l-2",children:"Operate"})]},b))})]})})]}),e.jsx(Wt,{})]})}const Yt={path:"/contacts",element:e.jsx(Jt,{}),loader:Vt};var Ae=(t=>(t.SendLoginOTP="api/wallet/msg/sms/send",t.Login="api/user/getUserInfo2",t))(Ae||{}),Re=(t=>(t.UserInfo="api/user/getUserInfo",t.Login="api/auth/login",t.Login4="api/user/getUserInfo3",t))(Re||{});function Gt(t=1){return new Promise(s=>setTimeout(()=>s({data:t}),500))}const Ht={value:0,status:"idle"},k=q("counter/fetchCount",async t=>(await Gt(t)).data),D=Ne({name:"counter",initialState:Ht,reducers:{increment:t=>{t.value+=1},decrement:t=>{t.value-=1},incrementByAmount:(t,s)=>{t.value+=s.payload}},extraReducers:t=>{t.addCase(k.pending,s=>{s.status="loading"}).addCase(k.fulfilled,(s,a)=>{s.status="idle",s.value+=a.payload}).addCase(k.rejected,s=>{s.status="failed"})}}),{increment:qe,decrement:ze,incrementByAmount:$}=D.actions,F=t=>t.counter.value,Ee=t=>t.counter.status,$e=t=>(s,a)=>{F(a())%2===1&&s($(t))},Xt=Object.freeze(Object.defineProperty({__proto__:null,counterSlice:D,decrement:ze,default:D,increment:qe,incrementAsync:k,incrementByAmount:$,incrementIfOdd:$e,selectCount:F,selectStatus:Ee},Symbol.toStringTag,{value:"Module"})),B="SYSTEM_ACCOUNT_TOKEN",U=()=>localStorage.getItem(B),Qt={token:localStorage.getItem(B),user:null},W=q("user/login",async t=>{try{const a=(await O.POST("Login",t)).data.token;return localStorage.setItem(B,a),a}catch(s){return Promise.reject(s?.message||s)}}),K=q("user/info",async()=>{try{return(await O.POST("UserInfo",{})).data}catch(t){return Promise.reject(t?.message||t)}}),A=Ne({name:"user",initialState:Qt,reducers:{setUserInfo:(t,s)=>{t.user=s.payload},clearUserInfo:t=>{t.user=null,t.token=null,localStorage.removeItem(B)}},extraReducers:t=>{t.addCase(W.fulfilled,(s,a)=>{s.token=a.payload}),t.addCase(K.fulfilled,(s,a)=>{s.user=a.payload})}}),Zt=t=>t.user.token,es=t=>t.user.user,{setUserInfo:ts,clearUserInfo:V}=A.actions,ss=Object.freeze(Object.defineProperty({__proto__:null,clearUserInfo:V,default:A,getToken:U,login:W,selectToken:Zt,selectUser:es,setUserInfo:ts,userInfo:K,userSlice:A},Symbol.toStringTag,{value:"Module"})),rs=await Object.assign({"./slice/CounterSlice.tsx":Xt,"./slice/UserSlice.tsx":ss}),Fe={};Object.values(rs).forEach(t=>{const s=t;Fe[s.default.name]=s.default.reducer});const p=it({reducer:Fe});function as(t){const[s,a]=d.useState(!0),r=()=>{a(!0),t.onConfirm()},n=()=>{a(!1),t.onClose()};return e.jsx("div",{children:e.jsxs(ve,{open:s,onClose:n,"aria-labelledby":"alert-dialog-title","aria-describedby":"alert-dialog-description",children:[e.jsx(ye,{id:"alert-dialog-title",children:t.title||"Title"}),e.jsx(Ce,{children:e.jsx(lt,{id:"alert-dialog-description",children:t.description||"Description"})}),e.jsxs(Se,{children:[e.jsx(y,{onClick:n,children:t.cancelButtonText||"NO"}),e.jsx(y,{onClick:r,autoFocus:!0,children:t.confirmButtonText||"YES"})]})]})})}function ns(t){return new Promise((s,a)=>{const r=document.createElement("div");document.body.appendChild(r);const n=Me(r),i=d.createElement(as,{...t,onClose:()=>{n.unmount(),r.remove(),a()},onConfirm:()=>{n.unmount(),r.remove(),s(null)}});n.render(i)})}class os{instance;hideLoading=!1;downloading=!1;skipNotify=!1;constructor(){const s=Mt.create({baseURL:"https://backdoor-api-dev.eponwallet.com",timeout:15e3});s.defaults.withCredentials=!1,s.interceptors.request.use(a=>(this.hideLoading,p.getState().user.token&&(a.headers["X-Token"]=p.getState().user.token),a),a=>Promise.reject(a)),s.interceptors.response.use(a=>{if(this.downloading)return a;const{message:r,isNeedUpdateToken:n,updateToken:i,code:o}=a.data;return"0,200,20000".includes(o+"")?a.data:(o===401||o==4001?ns({title:"Hint",description:"You have been logged out, you can cancel to remain on the page, or log in again",confirmButtonText:"Re-login",cancelButtonText:"Cancel"}):this.skipNotify||ae.error(r,{toastId:a.config.url,autoClose:2e3}),Promise.reject(a))},a=>(ae.error("Network Error",{toastId:JSON.stringify(a)}),Promise.reject(a))),this.instance=s}GET(s,a,r){this.hideLoading=r?.hideLoading||!1,this.downloading=r?.downloading||!1;const n=Ae[s];return this.instance({url:n,params:a,method:"GET",...r})}POST(s,a,r){this.hideLoading=r?.hideLoading||!1,this.downloading=r?.downloading||!1;const n=Re[s];return this.instance({url:n,data:a,method:"POST",...r})}}const is=new os,O=is,ls="_row_l2gvq_1",cs="_value_l2gvq_31",ds="_button_l2gvq_47",us="_textbox_l2gvq_79",hs="_asyncButton_l2gvq_113 _button_l2gvq_47",g={row:ls,value:cs,button:ds,textbox:us,asyncButton:hs},Ue=ct,xe=dt;function ms(){return{}}function xs(){const t=Oe(),s=xe(F),a=xe(Ee),r=Ue(),[n,i]=d.useState("2"),o=Number(n)||0,c=()=>{O.POST("Login",{})},l=()=>{};return e.jsxs("div",{children:[e.jsx("button",{className:"border p-3",onClick:c,children:"fetch data"}),e.jsx("button",{className:"border p-3",onClick:l,children:"usefetch data"}),e.jsx("button",{className:"border p-3",onClick:()=>t("/contacts"),children:"Contacts"}),e.jsx("div",{children:a}),e.jsxs("div",{className:g.row,children:[e.jsx("button",{className:g.button,"aria-label":"Decrement value",onClick:()=>r(ze()),children:"-"}),e.jsx("span",{className:g.value,children:s}),e.jsx("button",{className:g.button,"aria-label":"Increment value",onClick:()=>r(qe()),children:"+"})]}),e.jsxs("div",{className:g.row,children:[e.jsx("input",{className:g.textbox,"aria-label":"Set increment amount",value:n,onChange:m=>i(m.target.value)}),e.jsx("button",{className:g.button,onClick:()=>r($(o)),children:"Add Amount"}),e.jsx("button",{className:g.asyncButton,onClick:()=>r(k(o)),children:"Add Async"}),e.jsx("button",{className:g.button,onClick:()=>r($e(o)),children:"Add If Odd"})]})]})}const ps={path:"/counter",element:e.jsx(xs,{}),loader:ms},gs=({formik:t,field:s,label:a})=>({id:s,name:s,label:a,value:t.values[s],onChange:t.handleChange,onBlur:t.handleBlur,error:t.touched[s]&&!!t.errors[s],helperText:t.touched[s]&&t.errors[s]}),pe=({formik:t,field:s,label:a})=>({id:s,name:s,label:a,value:t.values[s],onChange:t.handleChange,onBlur:t.handleBlur,error:t.touched[s]&&!!t.errors[s]}),fs=Ie({username:f().required("Username is required"),password:f().required("Password is required"),msgCode:f().required("OTP is required")});function js({smsCheck:t}){const[s,a]=d.useState(0),[r,n]=d.useState(!1),i=d.useRef();d.useEffect(()=>(s>0&&(i.current=setTimeout(()=>{a(c=>c-1)},1e3)),()=>{clearInterval(i.current)}),[s]);const o=async()=>{const c=await t();if(c){const l=c;n(!0),O.GET("SendLoginOTP",{...l,password:Pe.MD5(l.password).toString(),type:10}).then(()=>{a(60)}).finally(()=>{n(!1)})}};return s>0?e.jsxs("span",{children:[s,"s"]}):e.jsx(y,{variant:"text",onClick:o,disabled:r,children:"Send"})}function bs(){const t=Oe(),s=Ue(),[a,r]=d.useState(!1),n=()=>r(l=>!l),i=l=>{l.preventDefault()},o=we({initialValues:{username:"elon",password:"elon123456",msgCode:"666666"},validationSchema:fs,onSubmit:async l=>{try{await s(W({...l,password:Pe.MD5(l.password).toString()})),U()&&t("/",{replace:!0})}catch{}}}),c=async()=>{try{const l=await o.setTouched({username:!0,password:!0},!0);return l.username||l.password?!1:o.values}catch{return!1}};return e.jsx("div",{className:" w-screen min-h-screen flex items-center justify-center",children:e.jsx(ke,{className:"p-5",sx:{width:"50ch"},children:e.jsxs("form",{onSubmit:o.handleSubmit,children:[e.jsx(w,{fullWidth:!0,margin:"dense",variant:"standard",...gs({formik:o,label:"User Name",field:"username"})}),e.jsxs(ne,{sx:{marginY:2},fullWidth:!0,variant:"standard",children:[e.jsx(oe,{htmlFor:"password",error:o.touched.password&&!!o.errors.password,children:"Password"}),e.jsx(ie,{type:a?"text":"password",margin:"dense",...pe({formik:o,label:"Password",field:"password"}),endAdornment:e.jsx(le,{position:"end",children:e.jsx(h,{"aria-label":"toggle password visibility",onClick:n,onMouseDown:i,children:a?e.jsx(ut,{}):e.jsx(ht,{})})})}),e.jsx(ce,{error:!0,id:"outlined-weight-helper-text",children:o.touched.password&&o.errors.password})]}),e.jsxs(ne,{sx:{m:0},fullWidth:!0,variant:"standard",children:[e.jsx(oe,{htmlFor:"msgCode",error:o.touched.msgCode&&!!o.errors.msgCode,children:"OTP"}),e.jsx(ie,{margin:"dense",...pe({formik:o,label:"SMS Code",field:"msgCode"}),endAdornment:e.jsx(le,{position:"end",children:e.jsx(js,{smsCheck:c})})}),e.jsx(ce,{error:!0,id:"outlined-weight-helper-text",children:o.touched.msgCode&&o.errors.msgCode})]}),e.jsx(y,{type:"submit",fullWidth:!0,variant:"outlined",sx:{marginY:4},children:"Login"})]})})})}async function ws(){const t=p.getState().user.user,s=U();return t||s?_e("/"):(await p.dispatch(V()),{})}const vs={path:"/login",element:e.jsx(bs,{}),loader:ws};function ys(){return e.jsx("div",{children:"Dashboard"})}const Cs={index:!0,element:e.jsx(ys,{})};function Ss({children:t}){const s=mt("(prefers-color-scheme: light)"),a=d.useMemo(()=>xt({palette:{mode:s?"dark":"light",primary:{main:pt.A400},secondary:gt}}),[s]);return e.jsx(ft,{theme:a,children:t})}async function Ts(){return p.getState().user.user||await p.dispatch(K()),p.getState().user.user?p.getState().user.user:(await p.dispatch(V()),_e("/login"))}const ks=kt([{path:"/",element:e.jsx(Et,{}),errorElement:e.jsx(Bt,{}),loader:Ts,children:[Cs,Yt,ps]},vs],{future:{v7_normalizeFormMethod:!0}});function Ns(){return e.jsx(Ss,{children:e.jsx(Nt,{router:ks,future:{v7_startTransition:!0}})})}Me(document.getElementById("root")).render(e.jsxs(d.StrictMode,{children:[e.jsx(jt,{store:p,children:e.jsx(Ns,{})}),e.jsx(bt,{})]}));