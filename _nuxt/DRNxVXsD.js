import{d as T,ag as A,B as V,aG as x,H as f,i,w as k,f as z,bx as N,n as s,g as $,V as r,c as o,e as l,ae as b,t as y,F as S,K as U,at as j,I as F,W as D,X as E,af as G}from"./NDVo0GwU.js";const H={slots:{root:"relative isolate rounded-[calc(var(--ui-radius)*3)] overflow-hidden",container:"flex flex-col lg:grid px-6 py-12 sm:px-12 sm:py-24 lg:px-16 lg:py-24 gap-8 sm:gap-16",wrapper:"",title:"text-3xl sm:text-4xl text-pretty tracking-tight font-bold text-(--ui-text-highlighted)",description:"text-base sm:text-lg text-(--ui-text-muted)",links:"mt-8 flex flex-wrap gap-x-6 gap-y-3"},variants:{orientation:{horizontal:{container:"lg:grid-cols-2 lg:items-center",description:"text-pretty"},vertical:{container:"",title:"text-center",description:"text-center text-balance",links:"justify-center"}},reverse:{true:{wrapper:"lg:order-last"}},variant:{solid:{root:"bg-(--ui-bg-inverted) text-(--ui-bg)",title:"text-(--ui-bg)",description:"text-(--ui-text-dimmed)"},outline:{root:"bg-(--ui-bg) ring ring-(--ui-border)",description:"text-(--ui-text-muted)"},soft:{root:"bg-(--ui-bg-elevated)/50",description:"text-(--ui-text-toned)"},subtle:{root:"bg-(--ui-bg-elevated)/50 ring ring-(--ui-border)",description:"text-(--ui-text-toned)"},naked:{description:"text-(--ui-text-muted)"}},title:{true:{description:"mt-6"}}},defaultVariants:{variant:"outline"}},I={key:1,class:"hidden lg:block"},K=G;var h;const L=x({extend:x(H),...((h=K.uiPro)==null?void 0:h.pageCTA)||{}}),O=T({__name:"PageCTA",props:{as:{},class:{},title:{},description:{},orientation:{default:"vertical"},reverse:{type:Boolean,default:!1},variant:{},links:{},ui:{}},setup(C){const e=C,n=A(),a=V(()=>L({variant:e.variant,orientation:e.orientation,reverse:e.reverse,title:!!e.title||!!n.title}));return(t,W)=>{var c;const _=j,w=N;return i(),f(D(E),{as:t.as,"data-orientation":t.orientation,class:s(a.value.root({class:[e.class,(c=e.ui)==null?void 0:c.root]}))},{default:k(()=>{var u;return[z(w,{class:s(a.value.container({class:(u=e.ui)==null?void 0:u.container}))},{default:k(()=>{var d,p,g,m,v;return[$("div",{class:s(a.value.wrapper({class:(d=e.ui)==null?void 0:d.wrapper}))},[t.title||n.title?(i(),o("h2",{key:0,class:s(a.value.title({class:(p=e.ui)==null?void 0:p.title}))},[r(t.$slots,"title",{},()=>[b(y(t.title),1)])],2)):l("",!0),t.description||n.description?(i(),o("div",{key:1,class:s(a.value.description({class:(g=e.ui)==null?void 0:g.description}))},[r(t.$slots,"description",{},()=>[b(y(t.description),1)])],2)):l("",!0),(m=t.links)!=null&&m.length||n.links?(i(),o("div",{key:2,class:s(a.value.links({class:(v=e.ui)==null?void 0:v.links}))},[r(t.$slots,"links",{},()=>[(i(!0),o(S,null,U(t.links,(B,P)=>(i(),f(_,F({key:P,size:"lg",ref_for:!0},B),null,16))),128))])],2)):l("",!0)],2),n.default?r(t.$slots,"default",{key:0}):t.orientation==="horizontal"?(i(),o("div",I)):l("",!0)]}),_:3},8,["class"])]}),_:3},8,["as","data-orientation","class"])}}}),q=Object.assign(O,{__name:"UPageCTA"});export{q as default};
