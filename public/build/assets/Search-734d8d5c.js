import{j as t,L as o,a,b as c}from"./app-2961dca6.js";import{T as l}from"./Top-ab5dd664.js";import{P as m}from"./Paginate-b414e0d6.js";import{P as d}from"./ProductTizer-3bd92c18.js";import"./Breadcrumbs-99d05a8d.js";import"./ChevronRightIcon-7aad0a7a.js";import"./NoPhoto-e6e5a357.js";const P=r=>{const{products:i,pagetitle:s}=r;return t(o,{...r,children:[a(c,{title:s}),a(l,{}),a("div",{className:"info",children:a("div",{className:"container-outer",children:t("div",{className:"catalogue__grid pb-12",children:[a("ul",{className:"grid grid-cols-2 lg:grid-cols-4 gap-8 mb-12",children:i.data.map(e=>a("li",{className:"catalogue__item",children:a(d,{item:e})},e.id))}),a(m,{...i.meta})]})})})]})};export{P as default};