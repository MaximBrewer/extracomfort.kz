import{j as t,L as n,a as e,b as m,d as c}from"./app-05604a95.js";import{P as u}from"./Paginate-7f6a64ba.js";import{B as g}from"./Breadcrumbs-65560b2f.js";import"./ChevronRightIcon-f8bc5255.js";const x=i=>{const{pagetitle:d="",posts:l,categories:o,category:s=null}=i;return t(n,{...i,children:[e(m,{title:d}),t("div",{className:"container-outer pb-24",children:[e("div",{className:"catalogue-categories m-0 pt-20 pb-10",children:e("div",{className:"catalogue-categories__outer",children:e("div",{className:"catalogue-categories__inner",children:e(g,{...i})})})}),e("div",{className:"catalogue-section__title refund__title center fw-700-45-55 mb-8",children:"Статьи"}),e("ul",{className:"flex items-center justify-center gap-8 flex-wrap mb-6",children:o.data.map((a,r)=>e("li",{children:e(c,{className:`py-2 px-4 border border-purple-900 rounded-full ${s&&s.data.id===a.id?"bg-purple-900 text-white":"text-purple-900"}`,href:route("articles",{cid:a.id}),children:a.title})},r))}),t("div",{className:"articles-outer pb-12",children:[e("div",{className:"articles-inner grid grid-cols-1 sm:grid-cols-2 2xl:grid-cols-3 gap-8 mb-12",children:l.data.map((a,r)=>t(c,{href:route("post",{post:a.id}),className:"min-h-[20rem] relative rounded px-8 py-6 flex flex-col justify-end bg-zinc-900",children:[e("div",{className:"absolute opacity-30 top-0 left-0 bottom-0 right-0 bg-cover bg-center",style:{backgroundImage:`url(${a.image})`}}),e("div",{className:"relative text-white text-2xl",children:e("div",{className:"",children:a.title})})]},r))}),e(u,{...l.meta})]})]})]})};export{x as default};