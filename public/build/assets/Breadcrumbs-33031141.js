import{q as n,a as e,j as u,r as b,d as m}from"./app-c4af702c.js";const i=l=>{const{breadcrumbs:a=[{route:"home",text:"Главная"}],cabinet:o=!1,inbanner:s=!1,lastActive:c=!1}=l,{sitenote:d}=n().props;return e("div",{className:`${d?"mt-4":""} ${o?"catalogue-breadcrumb-wrapper justify-start fw-400-18-22":"catalogue-breadcrumb-wrapper fw-400-18-22 flex-wrap"}`,children:a.map((r,t)=>u(b.Fragment,{children:[e("div",{className:`catalogue-breadcrumb-item ${a.length-1==t&&!c?"active":""} ${s?"text-white":""}`,children:a.length-1>t||c?e(m,{href:route(r.route,r.params),children:r.text}):e("span",{children:r.text})}),a.length-1>t?e("div",{className:"catalogue-breadcrumb-dot-wrapper center",children:e("div",{className:`catalogue-breadcrumb-dot  ${s?"bg-white":""}`})}):""]},t))})};export{i as B};
