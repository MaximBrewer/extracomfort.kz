import{j as a,d as c,a as e,u as g,L as v,b as N,C as f}from"./app-82c1698d.js";import{S as w}from"./index-597f8b50.js";import{P as _}from"./ProductTizer-635b9966.js";import{H as k}from"./index-5ac60a18.js";import{A as y,a as x}from"./ArrowRightIcon-01042d6c.js";import"./NoPhoto-a2992971.js";const T=({item:r})=>a(c,{href:r.url,className:"our-services-item group",children:[e("div",{className:"our-services-bg bg-cover bg-center bg-no-repeat",style:{backgroundImage:`url('${r.bg}')`}}),a("div",{className:"flex flex-col justify-start items-center gap-4",children:[a("div",{className:"relative our-services-icon",children:[e("div",{className:"absolute top-0 left-0 bottom-0 right-0 bg-contain bg-center bg-no-repeat group-hover:opacity-1",style:{backgroundImage:`url('${r.icon}')`}}),e("div",{className:"absolute top-0 left-0 bottom-0 right-0 bg-contain bg-center bg-no-repeat opacity-1 group-hover:opacity-0",style:{backgroundImage:`url('${r.icondark}')`}})]}),e("div",{className:"our-services-name",children:k(r.name??"")})]})]});function B(r){const{className:s,style:l,onClick:i}=r;return e("div",{className:`${s} slick-arrow-purple similar-products-slick__arrow-left center`,onClick:i,children:e(y,{className:"w-6 h-6 shrink-0"})})}function S(r){const{className:s,style:l,onClick:i}=r;return e("div",{className:`${s} slick-arrow-purple similar-products-slick__arrow-right center`,onClick:i,children:e(x,{className:"w-6 h-6 shrink-0"})})}var A={infinite:!1,slidesToShow:4,slidesToScroll:1,autoplay:!0,autoplaySpeed:1200,prevArrow:e(B,{}),nextArrow:e(S,{}),dots:!0,responsive:[{breakpoint:992,settings:{slidesToShow:3}},{breakpoint:768,settings:{slidesToShow:2}},{breakpoint:460,settings:{slidesToShow:1}}]};const H=r=>{const{pagetitle:s,products:l}=r,{setModal:i}=g(),{categories:n,shopBannerTop:d,shopBannerBottomTitle:m,shopBannerTopText:p,shopBannerTopButtonText:I,shopBannerBottom:u,shopBannerBottomText:h,shopBannerBottomButtonText:b}=window.appdata;return a(v,{...r,children:[e(N,{title:s}),a("div",{className:"main-block",children:[e("div",{className:"main-bg bg-cover bg-no-repeat bg-center",style:{backgroundImage:`url(${d})`}}),e("div",{className:"container-outer",children:e("div",{className:"main-content",children:e("h1",{className:"text-3xl max-w-4xl text-white xl:w-2/3",children:p})})})]}),e("div",{className:"container-outer flex flex-col justify-center h-full py-8",children:e("a",{href:"#",className:"btn-primary fw-700-16-20 py-4 px-6 mt-7 mx-auto",onClick:t=>{t.preventDefault(),i(e(f,{}))},children:"Заказать звонок"})}),e("div",{className:"similar-products",children:e("div",{className:"container-outer",children:e("div",{className:"similar-products__outer pb-0",children:e("div",{className:"similar-products__inner",children:e("div",{className:"grid grid-cols-2 lg:grid-cols-4 gap-6",children:n.map((t,o)=>e(T,{item:t},o))})})})})}),e("div",{className:"similar-products",children:e("div",{className:"container-outer",children:e("div",{className:"similar-products__outer",children:a("div",{className:"similar-products__inner",children:[e("div",{className:"similar-products-title-label similar-products__similar-products-title-label fw-700-45-55",children:"Акционные товары"}),e(w,{...A,className:"similar-products-slick-main",children:l.data.map((t,o)=>e("div",{className:"catalogue-item slick-slide",children:e(_,{item:t})},o))}),e("div",{className:"similar-products__btn-wrapper",children:e("button",{className:"btn-primary similar-products__btn-primary fw-400-18-30",children:"Посмотреть все"})})]})})})}),e("div",{className:"bottom-banner",style:{backgroundImage:`url(${u})`},children:e("div",{className:"container-outer",children:e("div",{className:"bottom-banner__outer",children:a("div",{className:"bottom-banner__inner",children:[e("div",{className:"bottom-banner__title fw-700-36-50",children:m}),e("div",{className:"bottom-banner__subtitle fw-700-26-35",children:h}),e("div",{className:"my-6 text-center",children:e(c,{href:route("services"),className:"main-page-link-btn -purple",children:b})})]})})})})]})};export{H as default};