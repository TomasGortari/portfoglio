import{d as H,ag as N,ao as G,ap as W,B as D,H as f,w as b,I as $,W as r,i as n,f as I,c as h,e as _,n as v,K as A,F as T,aa as C,af as E,V as y,ak as q,al as L,au as B,ae as M,t as P,a7 as J,a8 as Q,r as R,o as X,bi as Y,G as U,be as Z,bf as ii,bg as ai,aG as K}from"./NDVo0GwU.js";import{_ as ei,a as ti,b as si,c as oi,d as ri}from"./ZuQgXewl.js";import"./Bey7cz5F.js";const ni={slots:{root:"flex items-center gap-2",list:"relative flex p-1 group",indicator:"absolute transition-[translate,width] duration-200",trigger:["group relative inline-flex items-center shrink-0 min-w-0 data-[state=inactive]:text-(--ui-text-muted) hover:data-[state=inactive]:not-disabled:text-(--ui-text) font-medium rounded-[calc(var(--ui-radius)*1.5)] disabled:cursor-not-allowed disabled:opacity-75 focus:outline-hidden","transition-colors"],content:"focus:outline-none w-full",leadingIcon:"shrink-0",leadingAvatar:"shrink-0",leadingAvatarSize:"",label:"truncate"},variants:{color:{primary:"",secondary:"",success:"",info:"",warning:"",error:"",neutral:""},variant:{pill:{list:"bg-(--ui-bg-elevated) rounded-[calc(var(--ui-radius)*2)]",trigger:"flex-1 w-full",indicator:"rounded-[calc(var(--ui-radius)*1.5)] shadow-xs"},link:{list:"border-(--ui-border)",indicator:"rounded-full"}},orientation:{horizontal:{root:"flex-col",list:"w-full",indicator:"left-0 w-(--reka-tabs-indicator-size) translate-x-(--reka-tabs-indicator-position)",trigger:"justify-center"},vertical:{list:"flex-col",indicator:"top-0 h-(--reka-tabs-indicator-size) translate-y-(--reka-tabs-indicator-position)"}},size:{xs:{trigger:"px-2 py-1 text-xs gap-1",leadingIcon:"size-4",leadingAvatarSize:"3xs"},sm:{trigger:"px-2.5 py-1.5 text-xs gap-1.5",leadingIcon:"size-4",leadingAvatarSize:"3xs"},md:{trigger:"px-3 py-1.5 text-sm gap-1.5",leadingIcon:"size-5",leadingAvatarSize:"2xs"},lg:{trigger:"px-3 py-2 text-sm gap-2",leadingIcon:"size-5",leadingAvatarSize:"2xs"},xl:{trigger:"px-3 py-2 text-base gap-2",leadingIcon:"size-6",leadingAvatarSize:"xs"}}},compoundVariants:[{orientation:"horizontal",variant:"pill",class:{indicator:"inset-y-1"}},{orientation:"horizontal",variant:"link",class:{list:"border-b -mb-px",indicator:"-bottom-px h-px"}},{orientation:"vertical",variant:"pill",class:{indicator:"inset-x-1",list:"items-center"}},{orientation:"vertical",variant:"link",class:{list:"border-s -ms-px",indicator:"-start-px w-px"}},{color:"primary",variant:"pill",class:{indicator:"bg-(--ui-primary)",trigger:"data-[state=active]:text-(--ui-bg) focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-(--ui-primary)"}},{color:"secondary",variant:"pill",class:{indicator:"bg-(--ui-secondary)",trigger:"data-[state=active]:text-(--ui-bg) focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-(--ui-secondary)"}},{color:"success",variant:"pill",class:{indicator:"bg-(--ui-success)",trigger:"data-[state=active]:text-(--ui-bg) focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-(--ui-success)"}},{color:"info",variant:"pill",class:{indicator:"bg-(--ui-info)",trigger:"data-[state=active]:text-(--ui-bg) focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-(--ui-info)"}},{color:"warning",variant:"pill",class:{indicator:"bg-(--ui-warning)",trigger:"data-[state=active]:text-(--ui-bg) focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-(--ui-warning)"}},{color:"error",variant:"pill",class:{indicator:"bg-(--ui-error)",trigger:"data-[state=active]:text-(--ui-bg) focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-(--ui-error)"}},{color:"neutral",variant:"pill",class:{indicator:"bg-(--ui-bg-inverted)",trigger:"data-[state=active]:text-(--ui-bg) focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-(--ui-border-inverted)"}},{color:"primary",variant:"link",class:{indicator:"bg-(--ui-primary)",trigger:"data-[state=active]:text-(--ui-primary) focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-(--ui-primary)"}},{color:"secondary",variant:"link",class:{indicator:"bg-(--ui-secondary)",trigger:"data-[state=active]:text-(--ui-secondary) focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-(--ui-secondary)"}},{color:"success",variant:"link",class:{indicator:"bg-(--ui-success)",trigger:"data-[state=active]:text-(--ui-success) focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-(--ui-success)"}},{color:"info",variant:"link",class:{indicator:"bg-(--ui-info)",trigger:"data-[state=active]:text-(--ui-info) focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-(--ui-info)"}},{color:"warning",variant:"link",class:{indicator:"bg-(--ui-warning)",trigger:"data-[state=active]:text-(--ui-warning) focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-(--ui-warning)"}},{color:"error",variant:"link",class:{indicator:"bg-(--ui-error)",trigger:"data-[state=active]:text-(--ui-error) focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-(--ui-error)"}},{color:"neutral",variant:"link",class:{indicator:"bg-(--ui-bg-inverted)",trigger:"data-[state=active]:text-(--ui-text-highlighted) focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-(--ui-border-inverted)"}}],defaultVariants:{color:"primary",variant:"pill",size:"md"}},li=E;var O;const ci=C({extend:C(ni),...((O=li.ui)==null?void 0:O.tabs)||{}}),ui=H({__name:"Tabs",props:{as:{},items:{},color:{},variant:{},size:{},orientation:{default:"horizontal"},content:{type:Boolean,default:!0},labelKey:{default:"label"},class:{},ui:{},defaultValue:{default:"0"},modelValue:{},activationMode:{},unmountOnHide:{type:Boolean,default:!0}},emits:["update:modelValue"],setup(p,{emit:l}){const i=p,c=l,m=N(),x=G(W(i,"as","modelValue","defaultValue","orientation","activationMode","unmountOnHide"),c),o=D(()=>ci({color:i.color,variant:i.variant,size:i.size,orientation:i.orientation}));return(u,t)=>{var a;return n(),f(r(si),$(r(x),{class:o.value.root({class:[i.class,(a=i.ui)==null?void 0:a.root]})}),{default:b(()=>{var g;return[I(r(ti),{class:v(o.value.list({class:(g=i.ui)==null?void 0:g.list}))},{default:b(()=>{var s;return[I(r(ei),{class:v(o.value.indicator({class:(s=i.ui)==null?void 0:s.indicator}))},null,8,["class"]),(n(!0),h(T,null,A(u.items,(e,d)=>{var k;return n(),f(r(oi),{key:d,value:e.value||String(d),disabled:e.disabled,class:v(o.value.trigger({class:(k=i.ui)==null?void 0:k.trigger}))},{default:b(()=>{var z;return[y(u.$slots,"leading",{item:e,index:d},()=>{var w,V,S;return[e.icon?(n(),f(q,{key:0,name:e.icon,class:v(o.value.leadingIcon({class:(w=i.ui)==null?void 0:w.leadingIcon}))},null,8,["name","class"])):e.avatar?(n(),f(L,$({key:1,size:((V=i.ui)==null?void 0:V.leadingAvatarSize)||o.value.leadingAvatarSize(),ref_for:!0},e.avatar,{class:o.value.leadingAvatar({class:(S=i.ui)==null?void 0:S.leadingAvatar})}),null,16,["size","class"])):_("",!0)]}),r(B)(e,i.labelKey)||m.default?(n(),h("span",{key:0,class:v(o.value.label({class:(z=i.ui)==null?void 0:z.label}))},[y(u.$slots,"default",{item:e,index:d},()=>[M(P(r(B)(e,i.labelKey)),1)])],2)):_("",!0),y(u.$slots,"trailing",{item:e,index:d})]}),_:2},1032,["value","disabled","class"])}),128))]}),_:3},8,["class"]),u.content?(n(!0),h(T,{key:0},A(u.items,(s,e)=>{var d;return n(),f(r(ri),{key:e,value:s.value||String(e),class:v(o.value.content({class:(d=i.ui)==null?void 0:d.content}))},{default:b(()=>[y(u.$slots,s.slot||"content",{item:s,index:e},()=>[M(P(s.content),1)])]),_:2},1032,["value","class"])}),128)):_("",!0)]}),_:3},16,["class"])}}}),di=Object.assign(ui,{__name:"UTabs"}),gi={slots:{root:"my-5"}},vi=E;var j,F;const fi=K({extend:K(gi),...((F=(j=vi.uiPro)==null?void 0:j.prose)==null?void 0:F.tabs)||{}}),bi=H({__name:"Tabs",props:J({defaultValue:{default:"0"},sync:{},hash:{},class:{}},{modelValue:{},modelModifiers:{}}),emits:["update:modelValue"],setup(p){const l=p,i=N(),c=Q(p,"modelValue"),m=R(1),x=D(()=>{var t,a;return m.value,((a=(t=i.default)==null?void 0:t.call(i))==null?void 0:a.flatMap(o).filter(Boolean))||[]});function o(t,a){var g,s,e;return typeof t.type=="symbol"?(g=t.children)==null?void 0:g.map(o):{index:a,label:((s=t.props)==null?void 0:s.label)||`${a}`,icon:(e=t.props)==null?void 0:e.icon,component:t}}X(()=>{if(l.sync){const t=`tabs-${l.sync}`,a=Y(t,()=>localStorage.getItem(t));U(a,()=>{a.value&&(c.value=a.value)},{immediate:!0}),U(c,()=>{c.value&&(a.value=c.value,localStorage.setItem(t,c.value))})}});async function u(){if(l.hash){const t=l.hash.startsWith("#")?l.hash:`#${l.hash}`;setTimeout(()=>{var a;(a=document.querySelector(t))==null||a.scrollIntoView()},200)}}return Z(()=>m.value++),(t,a)=>{const g=di;return n(),f(g,{modelValue:c.value,"onUpdate:modelValue":[a[0]||(a[0]=s=>c.value=s),u],color:"primary",variant:"link",items:x.value,class:v(l.class),"unmount-on-hide":!1,ui:r(ai)(r(fi)())},{content:b(({item:s})=>[(n(),f(ii(s.component)))]),_:1},8,["modelValue","items","class","ui"])}}}),xi=Object.assign(bi,{__name:"ProseTabs"});export{xi as default};
