import{c as W,a as i,h as S,b as ee,i as he,e as P,l as te,r as T,w as h,o as ge,d as Ne,g as U,u as Ee,f as Ie,j as je,k as Ue,m as Ke,n as Xe,p as Ge,q as Te,s as Se,t as Je,v as ke,x as Ye,y as Ce,z as Ze,A as et,B as tt,C as at,D as lt,E as nt,F as ot,G as it,H as se,I as G,J as rt,K as ut,L as N,M as j,N as q,O as p,Q as de,P as fe,R as Y,S as st,T as ct,U as dt,V as ft,W as xe,X as vt,Y as A,Z as mt,_ as ht,$ as gt,a0 as bt}from"./index.46d4645b.js";import{Q as ve,T as ce,u as yt}from"./useLightOrDark.54223f44.js";import{Q as me}from"./QItemLabel.7f3a020e.js";import{Q as $e,a as Z,b as wt}from"./QList.ad0bc7f4.js";var pt=W({name:"QToolbarTitle",props:{shrink:Boolean},setup(e,{slots:d}){const n=i(()=>"q-toolbar__title ellipsis"+(e.shrink===!0?" col-shrink":""));return()=>S("div",{class:n.value},ee(d.default))}}),St=W({name:"QToolbar",props:{inset:Boolean},setup(e,{slots:d}){const n=i(()=>"q-toolbar row no-wrap items-center"+(e.inset===!0?" q-toolbar--inset":""));return()=>S("div",{class:n.value,role:"toolbar"},ee(d.default))}}),kt=W({name:"QHeader",props:{modelValue:{type:Boolean,default:!0},reveal:Boolean,revealOffset:{type:Number,default:250},bordered:Boolean,elevated:Boolean,heightHint:{type:[String,Number],default:50}},emits:["reveal","focusin"],setup(e,{slots:d,emit:n}){const{proxy:{$q:r}}=U(),l=he(te,P);if(l===P)return console.error("QHeader needs to be child of QLayout"),P;const c=T(parseInt(e.heightHint,10)),b=T(!0),_=i(()=>e.reveal===!0||l.view.value.indexOf("H")!==-1||r.platform.is.ios&&l.isContainer.value===!0),w=i(()=>{if(e.modelValue!==!0)return 0;if(_.value===!0)return b.value===!0?c.value:0;const o=c.value-l.scroll.value.position;return o>0?o:0}),g=i(()=>e.modelValue!==!0||_.value===!0&&b.value!==!0),a=i(()=>e.modelValue===!0&&g.value===!0&&e.reveal===!0),z=i(()=>"q-header q-layout__section--marginal "+(_.value===!0?"fixed":"absolute")+"-top"+(e.bordered===!0?" q-header--bordered":"")+(g.value===!0?" q-header--hidden":"")+(e.modelValue!==!0?" q-layout--prevent-focus":"")),k=i(()=>{const o=l.rows.value.top,C={};return o[0]==="l"&&l.left.space===!0&&(C[r.lang.rtl===!0?"right":"left"]=`${l.left.size}px`),o[2]==="r"&&l.right.space===!0&&(C[r.lang.rtl===!0?"left":"right"]=`${l.right.size}px`),C});function f(o,C){l.update("header",o,C)}function v(o,C){o.value!==C&&(o.value=C)}function Q({height:o}){v(c,o),f("size",o)}function x(o){a.value===!0&&v(b,!0),n("focusin",o)}h(()=>e.modelValue,o=>{f("space",o),v(b,!0),l.animate()}),h(w,o=>{f("offset",o)}),h(()=>e.reveal,o=>{o===!1&&v(b,e.modelValue)}),h(b,o=>{l.animate(),n("reveal",o)}),h(l.scroll,o=>{e.reveal===!0&&v(b,o.direction==="up"||o.position<=e.revealOffset||o.position-o.inflectionPoint<100)});const m={};return l.instances.header=m,e.modelValue===!0&&f("size",c.value),f("space",e.modelValue),f("offset",w.value),ge(()=>{l.instances.header===m&&(l.instances.header=void 0,f("size",0),f("offset",0),f("space",!1))}),()=>{const o=Ne(d.default,[]);return e.elevated===!0&&o.push(S("div",{class:"q-layout__shadow absolute-full overflow-hidden no-pointer-events"})),o.push(S(ve,{debounce:0,onResize:Q})),S("header",{class:z.value,style:k.value,onFocusin:x},o)}}});function J(e,d,n){return n<=d?d:Math.min(n,Math.max(d,e))}const qe=150;var xt=W({name:"QDrawer",inheritAttrs:!1,props:{...Ee,...Ie,side:{type:String,default:"left",validator:e=>["left","right"].includes(e)},width:{type:Number,default:300},mini:Boolean,miniToOverlay:Boolean,miniWidth:{type:Number,default:57},noMiniAnimation:Boolean,breakpoint:{type:Number,default:1023},showIfAbove:Boolean,behavior:{type:String,validator:e=>["default","desktop","mobile"].includes(e),default:"default"},bordered:Boolean,elevated:Boolean,overlay:Boolean,persistent:Boolean,noSwipeOpen:Boolean,noSwipeClose:Boolean,noSwipeBackdrop:Boolean},emits:[...je,"onLayout","miniState"],setup(e,{slots:d,emit:n,attrs:r}){const l=U(),{proxy:{$q:c}}=l,b=Ue(e,c),{preventBodyScroll:_}=Ye(),{registerTimeout:w,removeTimeout:g}=Ke(),a=he(te,P);if(a===P)return console.error("QDrawer needs to be child of QLayout"),P;let z,k=null,f;const v=T(e.behavior==="mobile"||e.behavior!=="desktop"&&a.totalWidth.value<=e.breakpoint),Q=i(()=>e.mini===!0&&v.value!==!0),x=i(()=>Q.value===!0?e.miniWidth:e.width),m=T(e.showIfAbove===!0&&v.value===!1?!0:e.modelValue===!0),o=i(()=>e.persistent!==!0&&(v.value===!0||Le.value===!0));function C(t,u){if(D(),t!==!1&&a.animate(),B(0),v.value===!0){const $=a.instances[K.value];$!==void 0&&$.belowBreakpoint===!0&&$.hide(!1),M(1),a.isContainer.value!==!0&&_(!0)}else M(0),t!==!1&&ie(!1);w(()=>{t!==!1&&ie(!0),u!==!0&&n("show",t)},qe)}function s(t,u){E(),t!==!1&&a.animate(),M(0),B(R.value*x.value),re(),u!==!0?w(()=>{n("hide",t)},qe):g()}const{show:y,hide:L}=Xe({showing:m,hideOnRouteChange:o,handleShow:C,handleHide:s}),{addToHistory:D,removeFromHistory:E}=Ge(m,L,o),H={belowBreakpoint:v,hide:L},O=i(()=>e.side==="right"),R=i(()=>(c.lang.rtl===!0?-1:1)*(O.value===!0?1:-1)),be=T(0),F=T(!1),ae=T(!1),ye=T(x.value*R.value),K=i(()=>O.value===!0?"left":"right"),le=i(()=>m.value===!0&&v.value===!1&&e.overlay===!1?e.miniToOverlay===!0?e.miniWidth:x.value:0),ne=i(()=>e.overlay===!0||e.miniToOverlay===!0||a.view.value.indexOf(O.value?"R":"L")!==-1||c.platform.is.ios===!0&&a.isContainer.value===!0),I=i(()=>e.overlay===!1&&m.value===!0&&v.value===!1),Le=i(()=>e.overlay===!0&&m.value===!0&&v.value===!1),ze=i(()=>"fullscreen q-drawer__backdrop"+(m.value===!1&&F.value===!1?" hidden":"")),Be=i(()=>({backgroundColor:`rgba(0,0,0,${be.value*.4})`})),we=i(()=>O.value===!0?a.rows.value.top[2]==="r":a.rows.value.top[0]==="l"),Qe=i(()=>O.value===!0?a.rows.value.bottom[2]==="r":a.rows.value.bottom[0]==="l"),Oe=i(()=>{const t={};return a.header.space===!0&&we.value===!1&&(ne.value===!0?t.top=`${a.header.offset}px`:a.header.space===!0&&(t.top=`${a.header.size}px`)),a.footer.space===!0&&Qe.value===!1&&(ne.value===!0?t.bottom=`${a.footer.offset}px`:a.footer.space===!0&&(t.bottom=`${a.footer.size}px`)),t}),Pe=i(()=>{const t={width:`${x.value}px`,transform:`translateX(${ye.value}px)`};return v.value===!0?t:Object.assign(t,Oe.value)}),Me=i(()=>"q-drawer__content fit "+(a.isContainer.value!==!0?"scroll":"overflow-auto")),Ve=i(()=>`q-drawer q-drawer--${e.side}`+(ae.value===!0?" q-drawer--mini-animate":"")+(e.bordered===!0?" q-drawer--bordered":"")+(b.value===!0?" q-drawer--dark q-dark":"")+(F.value===!0?" no-transition":m.value===!0?"":" q-layout--prevent-focus")+(v.value===!0?" fixed q-drawer--on-top q-drawer--mobile q-drawer--top-padding":` q-drawer--${Q.value===!0?"mini":"standard"}`+(ne.value===!0||I.value!==!0?" fixed":"")+(e.overlay===!0||e.miniToOverlay===!0?" q-drawer--on-top":"")+(we.value===!0?" q-drawer--top-padding":""))),De=i(()=>{const t=c.lang.rtl===!0?e.side:K.value;return[[ce,Fe,void 0,{[t]:!0,mouse:!0}]]}),He=i(()=>{const t=c.lang.rtl===!0?K.value:e.side;return[[ce,pe,void 0,{[t]:!0,mouse:!0}]]}),We=i(()=>{const t=c.lang.rtl===!0?K.value:e.side;return[[ce,pe,void 0,{[t]:!0,mouse:!0,mouseAllDir:!0}]]});function oe(){Ae(v,e.behavior==="mobile"||e.behavior!=="desktop"&&a.totalWidth.value<=e.breakpoint)}h(v,t=>{t===!0?(z=m.value,m.value===!0&&L(!1)):e.overlay===!1&&e.behavior!=="mobile"&&z!==!1&&(m.value===!0?(B(0),M(0),re()):y(!1))}),h(()=>e.side,(t,u)=>{a.instances[u]===H&&(a.instances[u]=void 0,a[u].space=!1,a[u].offset=0),a.instances[t]=H,a[t].size=x.value,a[t].space=I.value,a[t].offset=le.value}),h(a.totalWidth,()=>{(a.isContainer.value===!0||document.qScrollPrevented!==!0)&&oe()}),h(()=>e.behavior+e.breakpoint,oe),h(a.isContainer,t=>{m.value===!0&&_(t!==!0),t===!0&&oe()}),h(a.scrollbarWidth,()=>{B(m.value===!0?0:void 0)}),h(le,t=>{V("offset",t)}),h(I,t=>{n("onLayout",t),V("space",t)}),h(O,()=>{B()}),h(x,t=>{B(),ue(e.miniToOverlay,t)}),h(()=>e.miniToOverlay,t=>{ue(t,x.value)}),h(()=>c.lang.rtl,()=>{B()}),h(()=>e.mini,()=>{e.noMiniAnimation||e.modelValue===!0&&(Re(),a.animate())}),h(Q,t=>{n("miniState",t)});function B(t){t===void 0?Se(()=>{t=m.value===!0?0:x.value,B(R.value*t)}):(a.isContainer.value===!0&&O.value===!0&&(v.value===!0||Math.abs(t)===x.value)&&(t+=R.value*a.scrollbarWidth.value),ye.value=t)}function M(t){be.value=t}function ie(t){const u=t===!0?"remove":a.isContainer.value!==!0?"add":"";u!==""&&document.body.classList[u]("q-body--drawer-toggle")}function Re(){k!==null&&clearTimeout(k),l.proxy&&l.proxy.$el&&l.proxy.$el.classList.add("q-drawer--mini-animate"),ae.value=!0,k=setTimeout(()=>{k=null,ae.value=!1,l&&l.proxy&&l.proxy.$el&&l.proxy.$el.classList.remove("q-drawer--mini-animate")},150)}function Fe(t){if(m.value!==!1)return;const u=x.value,$=J(t.distance.x,0,u);if(t.isFinal===!0){$>=Math.min(75,u)===!0?y():(a.animate(),M(0),B(R.value*u)),F.value=!1;return}B((c.lang.rtl===!0?O.value!==!0:O.value)?Math.max(u-$,0):Math.min(0,$-u)),M(J($/u,0,1)),t.isFirst===!0&&(F.value=!0)}function pe(t){if(m.value!==!0)return;const u=x.value,$=t.direction===e.side,X=(c.lang.rtl===!0?$!==!0:$)?J(t.distance.x,0,u):0;if(t.isFinal===!0){Math.abs(X)<Math.min(75,u)===!0?(a.animate(),M(1),B(0)):L(),F.value=!1;return}B(R.value*X),M(J(1-X/u,0,1)),t.isFirst===!0&&(F.value=!0)}function re(){_(!1),ie(!0)}function V(t,u){a.update(e.side,t,u)}function Ae(t,u){t.value!==u&&(t.value=u)}function ue(t,u){V("size",t===!0?e.miniWidth:u)}return a.instances[e.side]=H,ue(e.miniToOverlay,x.value),V("space",I.value),V("offset",le.value),e.showIfAbove===!0&&e.modelValue!==!0&&m.value===!0&&e["onUpdate:modelValue"]!==void 0&&n("update:modelValue",!0),Te(()=>{n("onLayout",I.value),n("miniState",Q.value),z=e.showIfAbove===!0;const t=()=>{(m.value===!0?C:s)(!1,!0)};if(a.totalWidth.value!==0){Se(t);return}f=h(a.totalWidth,()=>{f(),f=void 0,m.value===!1&&e.showIfAbove===!0&&v.value===!1?y(!1):t()})}),ge(()=>{f!==void 0&&f(),k!==null&&(clearTimeout(k),k=null),m.value===!0&&re(),a.instances[e.side]===H&&(a.instances[e.side]=void 0,V("size",0),V("offset",0),V("space",!1))}),()=>{const t=[];v.value===!0&&(e.noSwipeOpen===!1&&t.push(Je(S("div",{key:"open",class:`q-drawer__opener fixed-${e.side}`,"aria-hidden":"true"}),De.value)),t.push(ke("div",{ref:"backdrop",class:ze.value,style:Be.value,"aria-hidden":"true",onClick:L},void 0,"backdrop",e.noSwipeBackdrop!==!0&&m.value===!0,()=>We.value)));const u=Q.value===!0&&d.mini!==void 0,$=[S("div",{...r,key:""+u,class:[Me.value,r.class]},u===!0?d.mini():ee(d.default))];return e.elevated===!0&&m.value===!0&&$.push(S("div",{class:"q-layout__shadow absolute-full overflow-hidden no-pointer-events"})),t.push(ke("aside",{ref:"content",class:Ve.value,style:Pe.value},$,"contentclose",e.noSwipeClose!==!0&&v.value===!0,()=>He.value)),S("div",{class:"q-drawer-container"},t)}}}),qt=W({name:"QPageContainer",setup(e,{slots:d}){const{proxy:{$q:n}}=U(),r=he(te,P);if(r===P)return console.error("QPageContainer needs to be child of QLayout"),P;Ce(Ze,!0);const l=i(()=>{const c={};return r.header.space===!0&&(c.paddingTop=`${r.header.size}px`),r.right.space===!0&&(c[`padding${n.lang.rtl===!0?"Left":"Right"}`]=`${r.right.size}px`),r.footer.space===!0&&(c.paddingBottom=`${r.footer.size}px`),r.left.space===!0&&(c[`padding${n.lang.rtl===!0?"Right":"Left"}`]=`${r.left.size}px`),c});return()=>S("div",{class:"q-page-container",style:l.value},ee(d.default))}});const{passive:_e}=lt,_t=["both","horizontal","vertical"];var Tt=W({name:"QScrollObserver",props:{axis:{type:String,validator:e=>_t.includes(e),default:"vertical"},debounce:[String,Number],scrollTarget:et},emits:["scroll"],setup(e,{emit:d}){const n={position:{top:0,left:0},direction:"down",directionChanged:!1,delta:{top:0,left:0},inflectionPoint:{top:0,left:0}};let r=null,l,c;h(()=>e.scrollTarget,()=>{w(),_()});function b(){r!==null&&r();const z=Math.max(0,nt(l)),k=ot(l),f={top:z-n.position.top,left:k-n.position.left};if(e.axis==="vertical"&&f.top===0||e.axis==="horizontal"&&f.left===0)return;const v=Math.abs(f.top)>=Math.abs(f.left)?f.top<0?"up":"down":f.left<0?"left":"right";n.position={top:z,left:k},n.directionChanged=n.direction!==v,n.delta=f,n.directionChanged===!0&&(n.direction=v,n.inflectionPoint=n.position),d("scroll",{...n})}function _(){l=at(c,e.scrollTarget),l.addEventListener("scroll",g,_e),g(!0)}function w(){l!==void 0&&(l.removeEventListener("scroll",g,_e),l=void 0)}function g(z){if(z===!0||e.debounce===0||e.debounce==="0")b();else if(r===null){const[k,f]=e.debounce?[setTimeout(b,e.debounce),clearTimeout]:[requestAnimationFrame(b),cancelAnimationFrame];r=()=>{f(k),r=null}}}const{proxy:a}=U();return h(()=>a.$q.lang.rtl,b),Te(()=>{c=a.$el.parentNode,_()}),ge(()=>{r!==null&&r(),w()}),Object.assign(a,{trigger:g,getPosition:()=>n}),tt}}),Ct=W({name:"QLayout",props:{container:Boolean,view:{type:String,default:"hhh lpr fff",validator:e=>/^(h|l)h(h|r) lpr (f|l)f(f|r)$/.test(e.toLowerCase())},onScroll:Function,onScrollHeight:Function,onResize:Function},setup(e,{slots:d,emit:n}){const{proxy:{$q:r}}=U(),l=T(null),c=T(r.screen.height),b=T(e.container===!0?0:r.screen.width),_=T({position:0,direction:"down",inflectionPoint:0}),w=T(0),g=T(it.value===!0?0:se()),a=i(()=>"q-layout q-layout--"+(e.container===!0?"containerized":"standard")),z=i(()=>e.container===!1?{minHeight:r.screen.height+"px"}:null),k=i(()=>g.value!==0?{[r.lang.rtl===!0?"left":"right"]:`${g.value}px`}:null),f=i(()=>g.value!==0?{[r.lang.rtl===!0?"right":"left"]:0,[r.lang.rtl===!0?"left":"right"]:`-${g.value}px`,width:`calc(100% + ${g.value}px)`}:null);function v(s){if(e.container===!0||document.qScrollPrevented!==!0){const y={position:s.position.top,direction:s.direction,directionChanged:s.directionChanged,inflectionPoint:s.inflectionPoint.top,delta:s.delta.top};_.value=y,e.onScroll!==void 0&&n("scroll",y)}}function Q(s){const{height:y,width:L}=s;let D=!1;c.value!==y&&(D=!0,c.value=y,e.onScrollHeight!==void 0&&n("scrollHeight",y),m()),b.value!==L&&(D=!0,b.value=L),D===!0&&e.onResize!==void 0&&n("resize",s)}function x({height:s}){w.value!==s&&(w.value=s,m())}function m(){if(e.container===!0){const s=c.value>w.value?se():0;g.value!==s&&(g.value=s)}}let o=null;const C={instances:{},view:i(()=>e.view),isContainer:i(()=>e.container),rootRef:l,height:c,containerHeight:w,scrollbarWidth:g,totalWidth:i(()=>b.value+g.value),rows:i(()=>{const s=e.view.toLowerCase().split(" ");return{top:s[0].split(""),middle:s[1].split(""),bottom:s[2].split("")}}),header:G({size:0,offset:0,space:!1}),right:G({size:300,offset:0,space:!1}),footer:G({size:0,offset:0,space:!1}),left:G({size:300,offset:0,space:!1}),scroll:_,animate(){o!==null?clearTimeout(o):document.body.classList.add("q-body--layout-animate"),o=setTimeout(()=>{o=null,document.body.classList.remove("q-body--layout-animate")},155)},update(s,y,L){C[s][y]=L}};if(Ce(te,C),se()>0){let L=function(){s=null,y.classList.remove("hide-scrollbar")},D=function(){if(s===null){if(y.scrollHeight>r.screen.height)return;y.classList.add("hide-scrollbar")}else clearTimeout(s);s=setTimeout(L,300)},E=function(H){s!==null&&H==="remove"&&(clearTimeout(s),L()),window[`${H}EventListener`]("resize",D)},s=null;const y=document.body;h(()=>e.container!==!0?"add":"remove",E),e.container!==!0&&E("add"),rt(()=>{E("remove")})}return()=>{const s=ut(d.default,[S(Tt,{onScroll:v}),S(ve,{onResize:Q})]),y=S("div",{class:a.value,style:z.value,ref:e.container===!0?void 0:l,tabindex:-1},s);return e.container===!0?S("div",{class:"q-layout-container overflow-hidden",ref:l},[S(ve,{onResize:x}),S("div",{class:"absolute-full",style:k.value},[S("div",{class:"scroll",style:f.value},[y])])]):y}}});const $t=Object.assign({name:"EssentialLink"},{__name:"NavLink",props:{title:{type:String,required:!0},link:{type:String,default:"#"},icon:{type:String,default:""}},setup(e){const d=e;return(n,r)=>(N(),j($e,{clickable:"",class:"text-white",tag:"a",to:d.link},{default:q(()=>[d.icon?(N(),j(Z,{key:0,avatar:""},{default:q(()=>[p(de,{name:d.icon},null,8,["name"])]),_:1})):fe("",!0),p(Z,null,{default:q(()=>[p(me,null,{default:q(()=>[Y(st(d.title),1)]),_:1})]),_:1})]),_:1},8,["to"]))}}),Lt={class:"absolute-center"},Mt=Object.assign({name:"MainLayout"},{__name:"MainLayout",setup(e){const d=ct(),n=dt(),r=[{title:"Entries",icon:"savings",link:"/"},{title:"Settings",icon:"settings",link:"/settings"}],l=T(!1);function c(){l.value=!l.value}const b=()=>{d.dialog({title:"Confirmacion",message:"Desea salir de la app?",cancel:!0,persistent:!0,html:!0,ok:{label:"Salir",color:"negative",noCaps:!0},cancel:{label:"Cancelar",color:"primary",noCaps:!0}}).onOk(()=>{d.platform.is.electron&&ipcRenderer.send("quit-app")})};return(_,w)=>{const g=ft("router-view");return N(),j(Ct,{view:"hHh lpR lFf"},{default:q(()=>[p(kt,{elevated:A(yt)(!0,!1)},{default:q(()=>[p(St,null,{default:q(()=>[p(xe,{flat:"",dense:"",round:"",icon:"menu","aria-label":"Menu",onClick:c}),p(pt,null,{default:q(()=>[vt("div",Lt,[p(de,{name:"savings"}),Y(" Moneyballs ")])]),_:1}),_.$route.path==="/"?(N(),j(xe,{key:0,onClick:w[0]||(w[0]=a=>A(n).options.sort=!A(n).options.sort),label:A(n).options.sort?"Done":"Sort",color:A(n).options.sort?"green":"purple","no-caps":"",dense:""},null,8,["label","color"])):fe("",!0)]),_:1})]),_:1},8,["elevated"]),p(xt,{modelValue:l.value,"onUpdate:modelValue":w[1]||(w[1]=a=>l.value=a),class:"bg-primary",width:250,breakpoint:767,"show-if-above":"",bordered:""},{default:q(()=>[p(wt,null,{default:q(()=>[p(me,{class:"text-white",header:""},{default:q(()=>[Y(" Navigation ")]),_:1}),(N(),mt(gt,null,ht(r,a=>p($t,bt({key:a.title,ref_for:!0},a),null,16)),64)),A(d).platform.is.electron?(N(),j($e,{key:0,onClick:b,clickable:"",class:"text-white absolute-bottom",tag:"a"},{default:q(()=>[p(Z,{avatar:""},{default:q(()=>[p(de,{name:"power_settings_new"})]),_:1}),p(Z,null,{default:q(()=>[p(me,null,{default:q(()=>[Y(" Quit ")]),_:1})]),_:1})]),_:1})):fe("",!0)]),_:1})]),_:1},8,["modelValue"]),p(qt,null,{default:q(()=>[p(g)]),_:1})]),_:1})}}});export{Mt as default};
