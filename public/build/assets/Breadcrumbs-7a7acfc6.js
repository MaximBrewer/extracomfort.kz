import{q as n,a,j as u,r as b,d as p}from"./app-77139a2c.js";const m=l=>{const{breadcrumbs:r=[{route:"home",text:"Главная"}],cabinet:o=!1,inbanner:s=!1,lastActive:c=!1}=l,{sitenote:d}=n().props;return a("div",{className:`${d?"mt-4":""} ${o?"catalogue-breadcrumb-wrapper justify-start fw-400-18-22":"catalogue-breadcrumb-wrapper fw-400-18-22 flex-wrap"}`,children:r.map((e,t)=>u(b.Fragment,{children:[a("div",{className:`catalogue-breadcrumb-item ${r.length-1==t&&!c?"active":""} ${s?"text-white":""}`,children:r.length-1>t||c?a(p,{href:e.route?route(e.route,e.params):e.href,children:e.text}):a("span",{children:e.text})}),r.length-1>t?a("div",{className:"catalogue-breadcrumb-dot-wrapper center",children:a("div",{className:`catalogue-breadcrumb-dot  ${s?"bg-white":""}`})}):""]},t))})};export{m as B};