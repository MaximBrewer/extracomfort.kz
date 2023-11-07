import{q as f,r as g,y,j as n,a as e,F as b,d as h,u as w}from"./app-2d4050fb.js";import{P as $}from"./ProductTizer-80dad16f.js";import{P as S}from"./Paginate-c8230fa4.js";import{S as k}from"./react-select.esm-651f8167.js";const C=({item:a,filter:l,setFilter:r})=>{const[d,u]=g.useState(!1);return n("li",{className:"filter-sidebar__item",children:[e("div",{className:"filter-sidebar__item-title fw-600-16-19 cursor-pointer py-[9px] -mt-[9px] mb-0 px-[21px] -mx-[21px]",onClick:o=>u(s=>!s),children:a.title}),d?e("ul",{className:"checkbox-grid max-h-[24rem] overflow-y-auto p-2",children:a.values.map((o,s)=>e("li",{children:n("label",{htmlFor:`specification-${a.id}-${s}`,className:"checkbox-grid__item",children:[e("div",{className:"checkbox-wrapper center",children:e("input",{type:"checkbox",name:`specification-${a.id}`,id:`specification-${a.id}-${s}`,onChange:t=>{r(m=>{const c={...m};c[a.accounting_id]=c[a.accounting_id]?c[a.accounting_id]:[];const p=c[a.accounting_id].indexOf(o);return p>-1?c[a.accounting_id].splice(p,1):c[a.accounting_id].push(o),c[a.accounting_id].length||delete c[a.accounting_id],c})}})}),e("div",{className:"checkbox-label-wrapper center",children:e("div",{className:"checkbox-label",children:o})})]})},`${a.id}-${s}`))}):""]})},T=a=>{const{specifications:l,ziggy:r,category:d=null,subcategory:u=null,subsubcategory:o=null}=f().props,[s,t]=g.useState({}),m=g.useRef(!1),c=g.useRef(0);g.useEffect(()=>{if(m.current){clearTimeout(c.current);let i={};for(let v in s)i[v]=s[v].join(":::");c.current=setTimeout(()=>{d?y.visit(route("category",o?{...i,category:d.data.slug,subcategory:u.data.slug,subsubcategory:o.data.slug}:u?{...i,category:d.data.slug,subcategory:u.data.slug}:{...i,category:d.data.slug}),{preserveState:!0,preserveScroll:!0}):y.visit(route("catalog",i))},2e3)}m.current=!0},[s]);const p=i=>{clearTimeout(c.current)},[N,x]=g.useState(!1);return g.useEffect(()=>(l.data.map(i=>{i.values.length&&x(!0)}),document.addEventListener("inertia:start",p),()=>{clearTimeout(c.current),document.removeEventListener("inertia:start",p)}),[]),N?n("ul",{className:"filter-sidebar catalogue__filter-sidebar fw-400-16-19",children:[e("li",{className:"filter-sidebar__title center",children:"Фильтр"}),e("ul",{className:"filter-sidebar__inner",children:l.data.map(i=>e(g.Fragment,{children:i.values.length?e(C,{item:i,filter:s,setFilter:t}):""},i.id))})]}):e(b,{})},P=()=>{const{products:a,category:l=null,subcategory:r=null,subsubcategory:d=null,categories:u=null,subcategories:o=null,subsubcategories:s=null}=f().props;return n("div",{className:"catalogue catalogue-section__catalogue",children:[n("div",{className:"catalogue__left",children:[u&&u.data.length?e("ul",{className:"total-found-sidebar catalogue__total-found-sidebar fw-400-16-19",children:u.data.map(t=>e("li",{className:"total-found-sidebar__catalogue-sidebar-item",children:n(h,{href:route("category",{category:t.slug}),className:"catalogue-sidebar-item",children:[e("div",{className:"catalogue-sidebar-item__title fw-600-16-1  text-black",children:t.name}),e("div",{className:"catalogue-sidebar-item__total",children:t.productsCount?`(${t.productsCount})`:""})]})},t.id))}):e(b,{}),o&&o.data.length?e("ul",{className:"total-found-sidebar catalogue__total-found-sidebar fw-400-16-19",children:o.data.map(t=>e("li",{className:"total-found-sidebar__catalogue-sidebar-item",children:n(h,{href:route("category",{category:l.data.slug,subcategory:t.slug}),className:`catalogue-sidebar-item ${r&&r.data.id===t.id?"underline purple":"text-black"}`,children:[e("div",{className:"catalogue-sidebar-item__title fw-600-16-19",children:t.name}),e("div",{className:"catalogue-sidebar-item__total",children:t.productsCount?`(${t.productsCount})`:""})]})},t.id))}):e(b,{}),s&&s.data.length?e("ul",{className:"total-found-sidebar catalogue__total-found-sidebar fw-400-16-19",children:s.data.map(t=>e("li",{className:"total-found-sidebar__catalogue-sidebar-item",children:n(h,{href:route("category",{category:l.data.slug,subcategory:r.data.slug,subsubcategory:t.slug}),className:`catalogue-sidebar-item ${d&&d.data.id===t.id?"underline purple":"text-black"}`,children:[e("div",{className:"catalogue-sidebar-item__title fw-600-16-19",children:t.name}),e("div",{className:"catalogue-sidebar-item__total",children:t.productsCount?`(${t.productsCount})`:""})]})},t.id))}):e(b,{}),l?e(T,{}):""]}),n("div",{className:"catalogue__grid",children:[e("ul",{className:"catalogue__grid-inner",children:a.data.map(t=>e("li",{className:"catalogue__item",children:e($,{item:t})},t.id))}),e(S,{...a.meta})]})]})},E={control:(a,l)=>({...a,borderColor:"rgba(0,0,0,.2) !important",borderRadius:"9999px",minHeight:"40px",boxShadow:"none !important"}),indicatorSeparator:(a,l)=>({...a,display:"none"}),singleValue:(a,l)=>({...a,color:"#414D55",padding:"0 4px"}),menu:(a,l)=>({...a,minWidth:"12rem",left:"auto",right:0})},_=[{value:"title:asc",label:"По названию А-Я"},{value:"title:desc",label:"По названию Я-А"},{value:"min_price:asc",label:"Дешевле"},{value:"min_price:desc",label:"Дороже"}],A=()=>{const{sort:a,order:l}=f().props;return e(k,{options:_,styles:E,isSearchable:!1,placeholder:"Сортировка",value:a&&l?_.find(r=>r.value==`${a}:${l}`):_[0],onChange:r=>y.visit(route("catalog",{sort:r.value.split(":")[0],order:r.value.split(":")[1]})),theme:r=>({...r,colors:{...r.colors,primary25:"#f1f5f8",primary:"#3A9EAA"}})})},I=()=>{const{products:a}=f().props,{numWord:l}=w();return e("div",{className:"total-found-label fw-400-16-19",children:n("span",{children:["Показано ",a.meta.total," ",l(a.meta.total,["товар","товара","товаров"])]})})};export{P as M,A as S,I as T};
