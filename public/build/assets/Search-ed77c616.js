import{j as t,L as o,a,b as c}from"./app-29b26c5b.js";import{T as l}from"./Top-8b219fdf.js";import{P as m}from"./Paginate-5615694d.js";import{P as d}from"./ProductTizer-60c8fa3e.js";import"./Breadcrumbs-480a87f7.js";import"./ChevronRightIcon-284e6d08.js";import"./NoPhoto-f30cdcbb.js";const P=r=>{const{products:i,pagetitle:s}=r;return t(o,{...r,children:[a(c,{title:s}),a(l,{}),a("div",{className:"info",children:a("div",{className:"container-outer",children:t("div",{className:"catalogue__grid pb-12",children:[a("ul",{className:"grid grid-cols-2 lg:grid-cols-4 gap-8 mb-12",children:i.data.map(e=>a("li",{className:"catalogue__item",children:a(d,{item:e})},e.id))}),a(m,{...i.meta})]})})})]})};export{P as default};