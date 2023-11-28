import{u as T,j as t,L as B,a as e,b as S,C as _,F as d,d as j}from"./app-7dcbe17c.js";import{F as A}from"./FormAppDoctor-c0b32511.js";import{S as c}from"./index-6ca32980.js";import{B as z}from"./Breadcrumbs-b41b156b.js";import{F}from"./FacilityTizer-5cc82606.js";import{H as I}from"./index-61dce367.js";import{A as L}from"./AboutTextBlock-025d66ec.js";import{a as m,C as $}from"./ChevronRightIcon-c47f17d1.js";import"./react-select.esm-825c6741.js";function h(s){const{className:i,onClick:r}=s;return e("div",{className:`${i} z-10 left-0 lg:left-24 top-1/2 -translate-y-1/2 bg-purple-900 rounded-full w-10 lg:w-[62px] h-10 lg:h-[62px] flex items-center justify-center text-[#C7C7C7]`,onClick:r,children:e($,{className:"w-5 lg:w-8 h-5 lg:h-8 shrink-0 relative -top-px"})})}function u(s){const{className:i,onClick:r}=s;return e("div",{className:`${i} z-10 right-0 lg:right-24 top-1/2 -translate-y-1/2 bg-purple-900 rounded-full w-10 lg:w-[62px] h-10 lg:h-[62px] flex  items-center justify-center text-[#C7C7C7]`,onClick:r,children:e(m,{className:"w-5 lg:w-8 h-5 lg:h-8 shrink-0 relative top-px"})})}var P={slidesToShow:3,slidesToScroll:1,prevArrow:e(h,{}),nextArrow:e(u,{}),centerMode:!0,centerPadding:0,responsive:[{breakpoint:992,settings:{slidesToShow:1}}]},M={slidesToShow:4,slidesToScroll:1,prevArrow:e(h,{}),nextArrow:e(u,{}),centerPadding:32,responsive:[{breakpoint:992,settings:{slidesToShow:2}}]};const V=s=>{const{pagetitle:i,banners:r,statistics:o,testimonials:v,stattitle:g,statsubtitle:p,aboutImages:n,abouttext1:D,abouttext2:H}=s,{facilities:b,servicesBannerBottom:N,servicesBannerBottomTitle:f,servicesBannerBottomText:x,servicesBannerBottomButtonText:w}=window.appdata,{setModal:k}=T();var y={infinite:!0,slidesToShow:1,slidesToScroll:1,autoplay:!1,autoplaySpeed:1200,arrows:!1,prevArrow:'<div className="slick-arrow-purple main-slick__arrow-left center"><ion-icon name="arrow-back-outline"></ion-icon></div>',nextArrow:'<div className="slick-arrow-purple main-slick__arrow-right center"><ion-icon name="arrow-forward-outline"></ion-icon></div>',dots:!0};return t(B,{...s,children:[e(S,{title:i}),t("div",{className:"main-block relative",children:[e("div",{className:"absolute top-0 w-full flex justify-center text-white pt-6",children:e(z,{...s,inbanner:!0})}),e(c,{...y,className:"main-slider w-full",children:r.data.map((a,l)=>t("div",{className:"main-slider-item",children:[e("div",{className:"main-bg brightness-50",children:e("img",{src:a.image,alt:a.title})}),t("div",{className:"container-outer flex flex-col justify-between h-full py-8",children:[t("div",{className:"main-content flex flex-col justify-center items-center text-center w-full",children:[e("div",{className:"text-3xl max-w-4xl mx-auto text-center text-white",children:I(a.title??"")}),e("a",{href:"#",className:"btn-primary fw-700-16-20 py-4 px-6 mt-7 mx-auto",onClick:C=>{C.preventDefault(),k(e(_,{}))},children:"Заказать звонок"})]}),e("div",{})]})]},l))})]}),e("div",{className:"our-services",children:t("div",{className:"container-outer",children:[e("div",{className:"our-services-title",children:e("h2",{children:"Наши услуги"})}),e("div",{className:"grid md:grid-cols-2 lg:grid-cols-4 gap-10",children:b.map((a,l)=>e(F,{item:a},l))})]})}),t("div",{className:"bg-white",children:[e("div",{className:"container-outer"}),t("div",{className:"container-outer pt-16",children:[e("div",{className:"text-[32px] font-semibold mb-4 text-center",children:g}),e("div",{className:"text-zinc-400 text-[28px] mb-10 text-center",children:p}),e("div",{className:"pb-24 grid grid-cols-2 lg:grid-cols-4 gap-12",children:o.data.map((a,l)=>t("div",{className:"flex flex-col",children:[t("div",{className:"flex justify-between items-center mb-5",children:[e("div",{className:"w-24 lg:w-36 h-24 lg:h-36 bg-slate-50 rounded-full flex items-center justify-center shrink-0",children:e("div",{className:"w-12 lg:w-16 h-12 lg:h-16 bg-center bg-contain bg-no-repeat",style:{backgroundImage:`url('${a.icon}')`}})}),l<o.data.length-1?e(m,{className:"w-8 h-8 shrink-0"}):e(d,{})]}),e("div",{className:"text-zinc-900 font-bold text-lg bg-slate-50 p-3 rounded grow",children:a.title})]},l))})]}),e("div",{className:"container-outer",children:e("div",{className:"pb-16",children:e(A,{})})}),t("div",{className:"container-outer",children:[e("div",{className:"text-[32px] font-semibold mb-4 text-center",children:"Отзывы"}),e(c,{...M,className:"testimonial-slider",children:v.data.map((a,l)=>e("div",{className:"px-4",children:t("div",{className:"bg-slate-50 p-4 rounded-lg",children:[e("div",{className:"mb-5 flex flex-col justify-center items-center",children:e("div",{className:"w-12 lg:w-16 h-12 lg:h-16 bg-center bg-cover bg-no-repeat rounded-full",style:{backgroundImage:`url('${a.photo}')`}})}),e("div",{className:"text-center mb-4 text-lg font-bold",children:a.name}),e("div",{className:"text-zinc-900",children:a.text})]})},l))})]}),t("div",{className:"container-outer",children:[e("div",{className:"text-[26px] font-semibold text-center",children:"О компании"}),e("div",{className:"pb-6",children:t(c,{...P,className:"about-slider",children:[n.data.map((a,l)=>e("div",{className:"about-slide-item",children:t("div",{className:"relative",children:[e("img",{src:a.image,alt:"",className:"w-full block"}),e("div",{className:"top-0 left-0 bottom-0 right-0 absolute backdrop-blur"})]})},l)),n.data.length<4?n.data.map((a,l)=>e("div",{className:"about-slide-item",children:t("div",{className:"relative",children:[e("img",{src:a.image,alt:"",className:"w-full block"}),e("div",{className:"top-0 left-0 bottom-0 right-0 absolute backdrop-blur"})]})},l)):e(d,{})]})}),e(L,{})]})]}),e("div",{className:"bottom-banner",style:{backgroundImage:`url(${N})`},children:e("div",{className:"container-outer",children:e("div",{className:"bottom-banner__outer",children:t("div",{className:"bottom-banner__inner",children:[e("div",{className:"bottom-banner__title fw-700-36-50",children:f}),e("div",{className:"bottom-banner__subtitle fw-700-26-35",children:x}),e("div",{className:"my-6 text-center",children:e(j,{href:route("shop"),className:"main-page-link-btn -green",children:w})})]})})})})]})};export{V as default};