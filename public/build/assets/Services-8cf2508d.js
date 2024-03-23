import{u as y,j as a,L as C,a as e,b as T,H as j,C as B,F as o,d as S}from"./app-e57dc98b.js";import{F as A}from"./FormAppDoctor-54126466.js";import{S as d}from"./index-5e442517.js";import{F as _}from"./FacilityTizer-980bf855.js";import{A as z}from"./AboutTextBlock-44cd3939.js";import{a as m,C as F}from"./ChevronRightIcon-ee77d7c2.js";import"./react-select.esm-07dc0e87.js";function h(i){const{className:r,onClick:s}=i;return e("div",{className:`${r} z-10 left-0 lg:left-24 top-1/2 -translate-y-1/2 bg-purple-900 rounded-full w-10 lg:w-[62px] h-10 lg:h-[62px] flex items-center justify-center text-[#C7C7C7]`,onClick:s,children:e(F,{className:"w-5 lg:w-8 h-5 lg:h-8 shrink-0 relative -top-px"})})}function g(i){const{className:r,onClick:s}=i;return e("div",{className:`${r} z-10 right-0 lg:right-24 top-1/2 -translate-y-1/2 bg-purple-900 rounded-full w-10 lg:w-[62px] h-10 lg:h-[62px] flex  items-center justify-center text-[#C7C7C7]`,onClick:s,children:e(m,{className:"w-5 lg:w-8 h-5 lg:h-8 shrink-0 relative top-px"})})}var I={slidesToShow:3,slidesToScroll:1,prevArrow:e(h,{}),nextArrow:e(g,{}),centerMode:!0,centerPadding:0,responsive:[{breakpoint:992,settings:{slidesToShow:1}}]},L={slidesToShow:4,slidesToScroll:1,prevArrow:e(h,{}),nextArrow:e(g,{}),centerPadding:32,responsive:[{breakpoint:992,settings:{slidesToShow:2}},{breakpoint:576,settings:{slidesToShow:1}}]};const J=i=>{const{pagetitle:r,banners:s,statistics:n,testimonials:v,stattitle:u,statsubtitle:b,aboutImages:c,abouttext1:$,abouttext2:P}=i,{facilities:p,servicesBannerBottom:N,servicesBannerBottomTitle:x,servicesBannerBottomText:f,servicesBannerBottomButtonText:w}=window.appdata,{setModal:k}=y();return a(C,{...i,children:[e(T,{title:r}),s.data.length?a("div",{className:"main-block",children:[e("div",{className:"main-bg",children:e("img",{src:s.data[0].image,alt:""})}),e("div",{className:"container-outer",children:e("div",{className:"main-content flex flex-col justify-center text-center ",children:e("div",{className:"prose-xl text-white mx-auto text-xl",children:j(s.data[0].title??"")})})})]}):"",e("div",{className:"container-outer flex flex-col justify-center h-full py-8",children:e("a",{href:"#",className:"btn-primary fw-700-16-20 py-4 px-6 mt-7 mx-auto",onClick:t=>{t.preventDefault(),k(e(B,{subject:"обратный звонок"}))},children:"Заказать звонок"})}),e("div",{className:"our-services",children:a("div",{className:"container-outer",children:[e("div",{className:"our-services-title",children:e("h2",{children:"Наши услуги"})}),e("div",{className:"grid md:grid-cols-2 lg:grid-cols-4 gap-10",children:p.map((t,l)=>e(_,{item:t},l))})]})}),a("div",{className:"bg-white",children:[e("div",{className:"container-outer"}),a("div",{className:"container-outer pt-16",children:[e("div",{className:"text-[32px] font-semibold mb-4 text-center",children:u}),e("div",{className:"text-zinc-400 text-[28px] mb-10 text-center",children:b}),e("div",{className:"pb-24 grid grid-cols-2 lg:grid-cols-4 gap-12",children:n.data.map((t,l)=>a("div",{className:"flex flex-col",children:[a("div",{className:"flex justify-between items-center mb-5",children:[e("div",{className:"w-24 lg:w-36 h-24 lg:h-36 bg-slate-50 rounded-full flex items-center justify-center shrink-0",children:e("div",{className:"w-12 lg:w-16 h-12 lg:h-16 bg-center bg-contain bg-no-repeat",style:{backgroundImage:`url('${t.icon}')`}})}),l<n.data.length-1?e(m,{className:"w-8 h-8 shrink-0"}):e(o,{})]}),e("div",{className:"text-zinc-900 font-bold text-lg bg-slate-50 p-3 rounded grow",children:t.title})]},l))})]}),e("div",{className:"container-outer",children:e("div",{className:"pb-16",children:e(A,{})})}),a("div",{className:"container-outer",children:[e("div",{className:"text-[32px] font-semibold mb-4 text-center",children:"Отзывы"}),e(d,{...L,className:"testimonial-slider",children:v.data.map((t,l)=>e("div",{className:"px-4",children:a("div",{className:"bg-slate-50 p-4 rounded-lg",children:[e("div",{className:"mb-5 flex flex-col justify-center items-center",children:e("div",{className:"w-12 lg:w-16 h-12 lg:h-16 bg-center bg-cover bg-no-repeat rounded-full",style:{backgroundImage:`url('${t.photo}')`}})}),e("div",{className:"text-center mb-4 text-lg font-bold",children:t.name}),e("div",{className:"text-zinc-900",children:t.text})]})},l))})]}),a("div",{className:"container-outer",children:[e("div",{className:"text-[26px] font-semibold text-center",children:"О компании"}),e("div",{className:"pb-6",children:a(d,{...I,className:"about-slider",children:[c.data.map((t,l)=>e("div",{className:"about-slide-item",children:a("div",{className:"relative",children:[e("img",{src:t.image,alt:"",className:"w-full block"}),e("div",{className:"top-0 left-0 bottom-0 right-0 absolute backdrop-blur"})]})},l)),c.data.length<4?c.data.map((t,l)=>e("div",{className:"about-slide-item",children:a("div",{className:"relative",children:[e("img",{src:t.image,alt:"",className:"w-full block"}),e("div",{className:"top-0 left-0 bottom-0 right-0 absolute backdrop-blur"})]})},l)):e(o,{})]})}),e(z,{})]})]}),e("div",{className:"bottom-banner",style:{backgroundImage:`url(${N})`},children:e("div",{className:"container-outer",children:e("div",{className:"bottom-banner__outer",children:a("div",{className:"bottom-banner__inner",children:[e("div",{className:"bottom-banner__title fw-700-36-50",children:x}),e("div",{className:"bottom-banner__subtitle fw-700-26-35",children:f}),e("div",{className:"my-6 text-center",children:e(S,{href:route("shop"),className:"main-page-link-btn -green",children:w})})]})})})})]})};export{J as default};
