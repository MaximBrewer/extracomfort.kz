import{q as g,r as n,y as x,j as s,a,F as h,d as _,u as S}from"./app-2173235e.js";import{P as y}from"./ProductTizer-08d09b61.js";import{P as $}from"./Paginate-a67ca92e.js";import"./index-5940ba48.js";import{S as k}from"./react-select.esm-74a2b1b0.js";const v=({item:e,filter:l,setFilter:r})=>{const[u,d]=n.useState(l[e.accounting_id]&&l[e.accounting_id].length);return s("li",{className:"filter-sidebar__item",children:[a("div",{className:"filter-sidebar__item-title fw-600-16-19 cursor-pointer py-[9px] -mt-[9px] mb-0 px-[21px] -mx-[21px]",onClick:t=>d(o=>!o),children:e.title}),u?a("ul",{className:"checkbox-grid max-h-[24rem] overflow-y-auto p-2",children:e.values.map((t,o)=>a("li",{children:s("label",{htmlFor:`specification-${e.id}-${o}`,className:"checkbox-grid__item",children:[a("div",{className:"checkbox-wrapper center",children:a("input",{type:"checkbox",name:`specification-${e.id}`,id:`specification-${e.id}-${o}`,defaultChecked:l[e.accounting_id]&&l[e.accounting_id].indexOf(t)>-1,onChange:f=>{r(p=>{const i={...p};i[e.accounting_id]=i[e.accounting_id]?i[e.accounting_id]:[];const m=i[e.accounting_id].indexOf(t);return m>-1?i[e.accounting_id].splice(m,1):i[e.accounting_id].push(t),i[e.accounting_id].length||delete i[e.accounting_id],i})}})}),a("div",{className:"checkbox-label-wrapper center",children:a("div",{className:"checkbox-label",children:t})})]})},`${e.id}-${o}`))}):""]})},C=e=>{const{specifications:l,options:r,ziggy:u,category:d=null}=g().props,[t,o]=n.useState(g().props.filter),f=n.useRef(!1),p=n.useRef(0);n.useEffect(()=>{if(f.current){clearTimeout(p.current);let c="?";for(let N in t)c+="&"+N+"="+t[N].join(":::");p.current=setTimeout(()=>{x.visit(d.data.url+c,{preserveScroll:!0,preserveState:!0})},2e3)}f.current=!0},[t]);const i=c=>{clearTimeout(p.current)},[m,w]=n.useState(!1);return n.useEffect(()=>(l.data.map(c=>{c.values.length&&w(!0)}),document.addEventListener("inertia:start",i),()=>{clearTimeout(p.current),document.removeEventListener("inertia:start",i)}),[]),m?s("ul",{className:"filter-sidebar catalogue__filter-sidebar fw-400-16-19",children:[a("li",{className:"filter-sidebar__title center",children:"Фильтр"}),s("ul",{className:"filter-sidebar__inner",children:[l.data.map(c=>a(n.Fragment,{children:c.values.length?a(v,{item:c,filter:t,setFilter:o}):""},c.id)),r.data.map(c=>a(n.Fragment,{children:c.values.length?a(v,{item:c,filter:t,setFilter:o}):""},c.id))]})]}):a(h,{})},O=()=>{const{products:e,category:l=null,categories:r=null,siblings:u=null,parentsiblings:d=null}=g().props;return s("div",{className:"catalogue catalogue-section__catalogue",children:[s("div",{className:"catalogue__left",children:[r&&r.data.length?a("ul",{className:"total-found-sidebar catalogue__total-found-sidebar fw-400-16-19",children:r.data.map(t=>a("li",{className:"total-found-sidebar__catalogue-sidebar-item",children:s(_,{href:t.url,className:"catalogue-sidebar-item",children:[a("div",{className:"catalogue-sidebar-item__title fw-600-16-1  text-black",children:t.name}),a("div",{className:"catalogue-sidebar-item__total",children:t.productsCount?`(${t.productsCount})`:""})]})},t.id))}):a(h,{}),u&&u.data.length?a("ul",{className:"total-found-sidebar catalogue__total-found-sidebar fw-400-16-19",children:u.data.map(t=>a("li",{className:"total-found-sidebar__catalogue-sidebar-item",children:s(_,{href:t.url,className:"catalogue-sidebar-item",children:[a("div",{className:"catalogue-sidebar-item__title fw-600-16-1  text-black",children:t.name}),a("div",{className:"catalogue-sidebar-item__total",children:t.productsCount?`(${t.productsCount})`:""})]})},t.id))}):a(h,{}),d&&d.data.length?a("ul",{className:"total-found-sidebar catalogue__total-found-sidebar fw-400-16-19",children:d.data.map(t=>a("li",{className:"total-found-sidebar__catalogue-sidebar-item",children:s(_,{href:t.url,className:"catalogue-sidebar-item",children:[a("div",{className:"catalogue-sidebar-item__title fw-600-16-1  text-black",children:t.name}),a("div",{className:"catalogue-sidebar-item__total",children:t.productsCount?`(${t.productsCount})`:""})]})},t.id))}):a(h,{}),l?a(C,{}):""]}),s("div",{className:"catalogue__grid",children:[a("ul",{className:"catalogue__grid-inner",children:e.data.map(t=>a("li",{className:"catalogue__item",children:a(y,{item:t})},t.id))}),a($,{...e.meta})]})]})},T={control:(e,l)=>({...e,borderColor:"rgba(0,0,0,.2) !important",borderRadius:"9999px",minHeight:"40px",boxShadow:"none !important"}),indicatorSeparator:(e,l)=>({...e,display:"none"}),singleValue:(e,l)=>({...e,color:"#414D55",padding:"0 4px"}),menu:(e,l)=>({...e,minWidth:"12rem",left:"auto",right:0})},b=[{value:"title:asc",label:"По названию А-Я"},{value:"title:desc",label:"По названию Я-А"},{value:"min_price:asc",label:"Дешевле"},{value:"min_price:desc",label:"Дороже"}],P=()=>{const{sort:e,order:l}=g().props;return a(k,{options:b,styles:T,isSearchable:!1,placeholder:"Сортировка",value:e&&l?b.find(r=>r.value==`${e}:${l}`):b[0],onChange:r=>x.visit(route("catalog",{sort:r.value.split(":")[0],order:r.value.split(":")[1]})),theme:r=>({...r,colors:{...r.colors,primary25:"#f1f5f8",primary:"#3A9EAA"}})})},A=()=>{const{products:e}=g().props,{numWord:l}=S();return a("div",{className:"total-found-label fw-400-16-19",children:s("span",{children:["Показано ",e.meta.total," ",l(e.meta.total,["товар","товара","товаров"])]})})};export{O as M,P as S,A as T};