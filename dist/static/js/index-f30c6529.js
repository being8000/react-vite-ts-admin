import{j as s,c as j,b as A,r as u,D as $,d as Y,e as W,f as H,g as K,B as x,h as D,Q as P,i as G,u as J,k as Q,l as X,P as Z,T as ee,F as b,I as E,m as O,n as I,o as te,q as re,s as se,v as L,w as ne,x as oe,y as ae,z as ie,A as ce,C as le,E as ue}from"./vendor-683cf3f2.js";import{u as de,a as me,r as he,c as fe,R as pe}from"./@react-router-5cd60085.js";import{a as ge}from"./axios-82c35b0f.js";import{c as xe,a as w}from"./yup-9d5efc3d.js";import{c as B}from"./crypto-js-ce1c4a39.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))i(n);new MutationObserver(n=>{for(const a of n)if(a.type==="childList")for(const o of a.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function r(n){const a={};return n.integrity&&(a.integrity=n.integrity),n.referrerPolicy&&(a.referrerPolicy=n.referrerPolicy),n.crossOrigin==="use-credentials"?a.credentials="include":n.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function i(n){if(n.ep)return;n.ep=!0;const a=r(n);fetch(n.href,a)}})();const ye="modulepreload",we=function(e,t){return new URL(e,t).href},R={},p=function(t,r,i){if(!r||r.length===0)return t();const n=document.getElementsByTagName("link");return Promise.all(r.map(a=>{if(a=we(a,i),a in R)return;R[a]=!0;const o=a.endsWith(".css"),l=o?'[rel="stylesheet"]':"";if(!!i)for(let m=n.length-1;m>=0;m--){const f=n[m];if(f.href===a&&(!o||f.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${a}"]${l}`))return;const d=document.createElement("link");if(d.rel=o?"stylesheet":ye,o||(d.as="script",d.crossOrigin=""),d.href=a,document.head.appendChild(d),o)return new Promise((m,f)=>{d.addEventListener("load",m),d.addEventListener("error",()=>f(new Error(`Unable to preload CSS for ${a}`)))})})).then(()=>t()).catch(a=>{const o=new Event("vite:preloadError",{cancelable:!0});if(o.payload=a,window.dispatchEvent(o),!o.defaultPrevented)throw a})};function ve(){const e=de();return s.jsxs("div",{id:"error-page",children:[s.jsx("h1",{children:"Oops!"}),s.jsx("p",{children:"Sorry, an unexpected error has occurred."}),s.jsx("p",{children:s.jsx("i",{children:e.statusText||e.message})})]})}function Se(e=1){return new Promise(t=>setTimeout(()=>t({data:e}),500))}const je={value:0,status:"idle"},g=j("counter/fetchCount",async e=>(await Se(e)).data),v=A({name:"counter",initialState:je,reducers:{increment:e=>{e.value+=1},decrement:e=>{e.value-=1},incrementByAmount:(e,t)=>{e.value+=t.payload}},extraReducers:e=>{e.addCase(g.pending,t=>{t.status="loading"}).addCase(g.fulfilled,(t,r)=>{t.status="idle",t.value+=r.payload}).addCase(g.rejected,t=>{t.status="failed"})}}),{increment:Ce,decrement:Te,incrementByAmount:N}=v.actions,U=e=>e.counter.value,_e=e=>e.counter.status,Pe=e=>(t,r)=>{U(r())%2===1&&t(N(e))},be=Object.freeze(Object.defineProperty({__proto__:null,counterSlice:v,decrement:Te,default:v,increment:Ce,incrementAsync:g,incrementByAmount:N,incrementIfOdd:Pe,selectCount:U,selectStatus:_e},Symbol.toStringTag,{value:"Module"}));var M=(e=>(e.SendLoginOTP="api/wallet/msg/sms/send",e.Login="api/user/getUserInfo2",e))(M||{}),F=(e=>(e.UserInfo="api/user/getUserInfo",e.Login="api/auth/login",e.Login4="api/user/getUserInfo3",e))(F||{});function Ee(e){const[t,r]=u.useState(!0),i=()=>{r(!0),e.onConfirm()},n=()=>{r(!1),e.onClose()};return s.jsx("div",{children:s.jsxs($,{open:t,onClose:n,"aria-labelledby":"alert-dialog-title","aria-describedby":"alert-dialog-description",children:[s.jsx(Y,{id:"alert-dialog-title",children:e.title||"Title"}),s.jsx(W,{children:s.jsx(H,{id:"alert-dialog-description",children:e.description||"Description"})}),s.jsxs(K,{children:[s.jsx(x,{onClick:n,children:e.cancelButtonText||"NO"}),s.jsx(x,{onClick:i,autoFocus:!0,children:e.confirmButtonText||"YES"})]})]})})}function Oe(e){return new Promise((t,r)=>{const i=document.createElement("div");document.body.appendChild(i);const n=D(i),a=u.createElement(Ee,{...e,onClose:()=>{n.unmount(),i.remove(),r()},onConfirm:()=>{n.unmount(),i.remove(),t(null)}});n.render(a)})}class Ie{instance;hideLoading=!1;downloading=!1;skipNotify=!1;constructor(){const t=ge.create({baseURL:"https://backdoor-api-dev.eponwallet.com",timeout:15e3});t.defaults.withCredentials=!1,t.interceptors.request.use(r=>(this.hideLoading,h.getState().user.token&&(r.headers["X-Token"]=h.getState().user.token),r),r=>Promise.reject(r)),t.interceptors.response.use(r=>{if(this.downloading)return r;const{message:i,isNeedUpdateToken:n,updateToken:a,code:o}=r.data;return"0,200,20000".includes(o+"")?r.data:(o===401||o==4001?Oe({title:"Hint",description:"You have been logged out, you can cancel to remain on the page, or log in again",confirmButtonText:"Re-login",cancelButtonText:"Cancel"}):this.skipNotify||P.error(i,{toastId:r.config.url,autoClose:2e3}),Promise.reject(r))},r=>(P.error("Network Error",{toastId:JSON.stringify(r)}),Promise.reject(r))),this.instance=t}GET(t,r,i){this.hideLoading=i?.hideLoading||!1,this.downloading=i?.downloading||!1;const n=M[t];return this.instance({url:n,params:r,method:"GET",...i})}POST(t,r,i){this.hideLoading=i?.hideLoading||!1,this.downloading=i?.downloading||!1;const n=F[t];return this.instance({url:n,data:r,method:"POST",...i})}}const C=new Ie,y="SYSTEM_ACCOUNT_TOKEN",T=()=>localStorage.getItem(y),Le={token:localStorage.getItem(y),user:null},_=j("user/login",async e=>{try{const r=(await C.POST("Login",e)).data.token;return localStorage.setItem(y,r),r}catch(t){return Promise.reject(t?.message||t)}}),q=j("user/info",async()=>{try{return(await C.POST("UserInfo",{})).data}catch(e){return Promise.reject(e?.message||e)}}),S=A({name:"user",initialState:Le,reducers:{setUserInfo:(e,t)=>{e.user=t.payload},clearUserInfo:e=>{e.user=null,e.token=null,localStorage.removeItem(y)}},extraReducers:e=>{e.addCase(_.fulfilled,(t,r)=>{t.token=r.payload}),e.addCase(q.fulfilled,(t,r)=>{t.user=r.payload})}}),Re=e=>e.user.token,ke=e=>e.user.user,{setUserInfo:Ae,clearUserInfo:z}=S.actions,De=Object.freeze(Object.defineProperty({__proto__:null,clearUserInfo:z,default:S,getToken:T,login:_,selectToken:Re,selectUser:ke,setUserInfo:Ae,userInfo:q,userSlice:S},Symbol.toStringTag,{value:"Module"})),Be=await Object.assign({"./slice/CounterSlice.tsx":be,"./slice/UserSlice.tsx":De}),V={};Object.values(Be).forEach(e=>{const t=e;V[t.default.name]=t.default.reducer});const h=G({reducer:V}),Ne=({formik:e,field:t,label:r})=>({id:t,name:t,label:r,value:e.values[t],onChange:e.handleChange,onBlur:e.handleBlur,error:e.touched[t]&&!!e.errors[t],helperText:e.touched[t]&&e.errors[t]}),k=({formik:e,field:t,label:r})=>({id:t,name:t,label:r,value:e.values[t],onChange:e.handleChange,onBlur:e.handleBlur,error:e.touched[t]&&!!e.errors[t]}),Ue=J,Xe=Q,Me=xe({username:w().required("Username is required"),password:w().required("Password is required"),msgCode:w().required("OTP is required")});function Fe({smsCheck:e}){const[t,r]=u.useState(0),[i,n]=u.useState(!1),a=u.useRef();u.useEffect(()=>(t>0&&(a.current=setTimeout(()=>{r(l=>l-1)},1e3)),()=>{clearInterval(a.current)}),[t]);const o=async()=>{const l=await e();if(l){const c=l;n(!0),C.GET("SendLoginOTP",{...c,password:B.MD5(c.password).toString(),type:10}).then(()=>{r(60)}).finally(()=>{n(!1)})}};return t>0?s.jsxs("span",{children:[t,"s"]}):s.jsx(x,{variant:"text",onClick:o,disabled:i,children:"Send"})}function qe(){const e=me(),t=Ue(),[r,i]=u.useState(!1),n=()=>i(c=>!c),a=c=>{c.preventDefault()},o=X({initialValues:{username:"elon",password:"elon123456",msgCode:"666666"},validationSchema:Me,onSubmit:async c=>{try{await t(_({...c,password:B.MD5(c.password).toString()})),T()&&e("/",{replace:!0})}catch{}}}),l=async()=>{try{const c=await o.setTouched({username:!0,password:!0},!0);return c.username||c.password?!1:o.values}catch{return!1}};return s.jsx("div",{className:" w-screen min-h-screen flex items-center justify-center",children:s.jsx(Z,{className:"p-5",sx:{width:"50ch"},children:s.jsxs("form",{onSubmit:o.handleSubmit,children:[s.jsx(ee,{fullWidth:!0,margin:"dense",variant:"standard",...Ne({formik:o,label:"User Name",field:"username"})}),s.jsxs(b,{sx:{marginY:2},fullWidth:!0,variant:"standard",children:[s.jsx(E,{htmlFor:"password",error:o.touched.password&&!!o.errors.password,children:"Password"}),s.jsx(O,{type:r?"text":"password",margin:"dense",...k({formik:o,label:"Password",field:"password"}),endAdornment:s.jsx(I,{position:"end",children:s.jsx(te,{"aria-label":"toggle password visibility",onClick:n,onMouseDown:a,children:r?s.jsx(re,{}):s.jsx(se,{})})})}),s.jsx(L,{error:!0,id:"outlined-weight-helper-text",children:o.touched.password&&o.errors.password})]}),s.jsxs(b,{sx:{m:0},fullWidth:!0,variant:"standard",children:[s.jsx(E,{htmlFor:"msgCode",error:o.touched.msgCode&&!!o.errors.msgCode,children:"OTP"}),s.jsx(O,{margin:"dense",...k({formik:o,label:"SMS Code",field:"msgCode"}),endAdornment:s.jsx(I,{position:"end",children:s.jsx(Fe,{smsCheck:l})})}),s.jsx(L,{error:!0,id:"outlined-weight-helper-text",children:o.touched.msgCode&&o.errors.msgCode})]}),s.jsx(x,{type:"submit",fullWidth:!0,variant:"outlined",sx:{marginY:4},children:"Login"})]})})})}async function ze(){const e=h.getState().user.user,t=T();return e||t?he("/"):(await h.dispatch(z()),{})}const Ve={path:"/login",element:s.jsx(qe,{}),loader:ze};function $e({children:e}){const t=ne("(prefers-color-scheme: light)"),r=u.useMemo(()=>oe({palette:{mode:t?"dark":"light",primary:{main:ae.A400},secondary:ie}}),[t]);return s.jsx(ce,{theme:r,children:e})}const Ye=fe([{path:"/",async lazy(){const{loader:e,Root:t}=await p(()=>import("./Root-b43dd0f8.js"),["./Root-b43dd0f8.js","./vendor-683cf3f2.js","./crypto-js-ce1c4a39.js","./@react-router-5cd60085.js","./MoreVert-ea1c2599.js","./axios-82c35b0f.js","./yup-9d5efc3d.js"],import.meta.url);return{loader:e,Component:t}},errorElement:s.jsx(ve,{}),children:[{index:!0,async lazy(){const{loader:e,Dashboard:t}=await p(()=>import("./index-1976a9f0.js"),["./index-1976a9f0.js","./vendor-683cf3f2.js","./crypto-js-ce1c4a39.js"],import.meta.url);return{loader:e,Component:t}}},{path:"contacts",async lazy(){const{loader:e,Root:t}=await p(()=>import("./index-045253d8.js"),["./index-045253d8.js","./vendor-683cf3f2.js","./crypto-js-ce1c4a39.js","./@react-router-5cd60085.js","./yup-9d5efc3d.js","./MoreVert-ea1c2599.js"],import.meta.url);return{loader:e,Component:t}}},{path:"counter",async lazy(){const{loader:e,CounterRoute:t}=await p(()=>import("./Counter-011ad000.js"),["./Counter-011ad000.js","./vendor-683cf3f2.js","./crypto-js-ce1c4a39.js","./@react-router-5cd60085.js","./axios-82c35b0f.js","./yup-9d5efc3d.js","..\\css\\Counter-4a7b9d41.css"],import.meta.url);return{loader:e,Component:t}}}]},Ve],{future:{v7_normalizeFormMethod:!0}});function We(){return s.jsx($e,{children:s.jsx(pe,{router:Ye,future:{v7_startTransition:!0}})})}D(document.getElementById("root")).render(s.jsxs(u.StrictMode,{children:[s.jsx(le,{store:h,children:s.jsx(We,{})}),s.jsx(ue,{})]}));export{Xe as a,U as b,z as c,_e as d,Ue as e,Te as f,N as g,g as h,Ce as i,Pe as j,C as k,h as s,q as u};
