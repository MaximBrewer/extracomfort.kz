import{r as n,a as e,j as t,u as $,W as V,L as W,b as Z,F as H,c as P,d as K,H as G,I as T,y as I}from"./app-b9a91806.js";import{B as J}from"./Breadcrumbs-5015d457.js";import{S as w}from"./index-80b002bb.js";import{H as q}from"./index-61d026bd.js";import{S as Q,P as E}from"./ProductTizer-47128c9c.js";import{A as U,a as X}from"./ArrowRightIcon-b9df8867.js";import"./NoPhoto-fbbfb7e2.js";const ee="/build/assets/phone-97d7bcfe.svg",ae=o=>{const{pagetitle:l,product:i}=o,{images:m}=i.data,[g,b]=n.useState(null),[x,k]=n.useState(null),_=n.useRef(null),h=n.useRef(null),y={asNavFor:x,dots:!1,arrows:!1,infinite:!0,speed:500,slidesToShow:1,slidesToScroll:1},d={asNavFor:g,dots:!1,arrows:!1,infinite:!0,speed:500,slidesToShow:3,slidesToScroll:1};return n.useEffect(()=>{b(_.current),k(h.current)},[]),e("div",{className:"product-slider-wrapper",children:t("div",{className:"product-slider",children:[e(w,{...y,className:"product-slider",ref:_,children:m.map((u,p)=>e("div",{className:"slick-slide p-4",children:e("div",{className:"w-full h-full bg-no-repeat bg-center bg-contain pt-[100%]",style:{backgroundImage:`url('${u}')`}})},p))}),m.length>1?e(w,{...d,className:"product-slider__nav block",ref:h,children:m.map((u,p)=>e("div",{className:"slick-slide",children:e("div",{className:"product-slider__nav-item mx-auto",children:e("div",{className:"w-full h-full bg-no-repeat bg-center bg-contain pt-[100%]",style:{backgroundImage:`url('${u}')`}})})},p))}):""]})})},te="/build/assets/in-stock-tick-8dfb6a57.svg",ie=o=>{const{sizes:l={}}=o;console.log(l);const{setModal:i}=$();return t("div",{className:"w-[20rem] lg:w-[24rem] xl:w-[40rem] relative bg-white rounded-2xl py-6 px-3",children:[e("svg",{xmlns:"http://www.w3.org/2000/svg",className:"cursor-pointer w-4 lg:w-8 h-4 lg:h-8 absolute right-4 top-4 lg:-right-12 lg:-top-12 text-black opacity-50 lg:text-white",onClick:m=>i(null),viewBox:"0 0 30 30",fill:"none",children:e("path",{d:"M18.3041 15L29.5207 3.78293C29.8293 3.47415 29.9995 3.0622 30 2.62293C30 2.18342 29.8298 1.77098 29.5207 1.46268L28.5378 0.480001C28.2288 0.170489 27.8168 0.000976562 27.3771 0.000976562C26.938 0.000976562 26.5261 0.170489 26.2171 0.480001L15.0005 11.6963L3.78341 0.480001C3.47488 0.170489 3.06268 0.000976562 2.62317 0.000976562C2.18415 0.000976562 1.77195 0.170489 1.46341 0.480001L0.48 1.46268C-0.16 2.10268 -0.16 3.14366 0.48 3.78293L11.6968 15L0.48 26.2166C0.17122 26.5259 0.00121951 26.9378 0.00121951 27.3771C0.00121951 27.8163 0.17122 28.2283 0.48 28.5373L1.46317 29.52C1.77171 29.8293 2.18415 29.999 2.62293 29.999C3.06244 29.999 3.47463 29.8293 3.78317 29.52L15.0002 18.3034L26.2168 29.52C26.5259 29.8293 26.9378 29.999 27.3768 29.999H27.3773C27.8166 29.999 28.2285 29.8293 28.5376 29.52L29.5205 28.5373C29.829 28.2285 29.9993 27.8163 29.9993 27.3771C29.9993 26.9378 29.829 26.5259 29.5205 26.2168L18.3041 15Z",fill:"currentColor"})}),e("div",{className:"overflow-x-auto my-4 w-full",children:l&&l.html?e("div",{className:"prose",children:q(l.html??"")}):""}),e("div",{className:"overflow-x-auto my-4 w-full",children:l&&l.image?e("img",{src:l.image,alt:"",className:"w-full"}):""})]})};function se(o){const{className:l,style:i,onClick:m}=o;return e("div",{className:`${l} slick-arrow-purple similar-products-slick__arrow-left center`,onClick:m,children:e(U,{className:"w-6 h-6 shrink-0"})})}function re(o){const{className:l,style:i,onClick:m}=o;return e("div",{className:`${l} slick-arrow-purple similar-products-slick__arrow-right center`,onClick:m,children:e(X,{className:"w-6 h-6 shrink-0"})})}var M={infinite:!1,slidesToShow:4,slidesToScroll:1,autoplay:!1,autoplaySpeed:1200,prevArrow:e(se,{}),nextArrow:e(re,{}),dots:!1,responsive:[{breakpoint:1620,settings:{slidesToShow:3}},{breakpoint:992,settings:{slidesToShow:2}},{breakpoint:768,settings:{slidesToShow:1}},{breakpoint:460,settings:{slidesToShow:1}}]};const ve=o=>{const{pagetitle:l,product:i,auth:m,cart:g,favorites:b}=o,{priceFormat:x,moment:k,setModal:_}=$(),[h,y]=n.useState(null),[d,u]=n.useState(null),[p,A]=n.useState(i.data.body?0:1),[S,D]=n.useState([]),[f,j]=n.useState({}),B=a=>{a&&I.post(route("cart.add"),{item:a.id},{preserveScroll:!0})},R=()=>{m.user?I.patch(route("cabinet.favorite.toggle"),{item:i.data.id},{preserveScroll:!0}):I.visit(route("login"))},{data:C,setData:L,post:Y,processing:ce,errors:z,reset:le}=V({product_id:i.data.id,name:"",email:"",rate:5,text:""}),O=a=>{a.preventDefault(),Y(route("reviews.store"),{preserveScroll:!0})};return n.useEffect(()=>{if(i.data.offers.length){u(i.data.offers[0]);let a=[];for(let s of i.data.offers)for(let r of s.specifications){let c=a.findIndex(v=>v.id==r.id);c<0&&(c=a.length,a.push({id:r.id,title:r.title,values:[]}));let N=a[c].values.findIndex(v=>v.value==r.pivot.value);N<0&&(N=a[c].values.length,a[c].values.push({value:r.pivot.value,offers:[]})),a[c].values[N].offers.push(r.pivot.offer_id)}D(a)}},[i]),n.useEffect(()=>{let a=null;if(d&&d.prices.length){var s=d.prices.findIndex(r=>r.currency=="тен"||r.currency=="KZT");s>-1&&(a=d.prices[s].value)}y(a)},[d,S]),n.useEffect(()=>{let a=[...i.data.offers];for(let s of S){let r=s.values[f[s.id]]?s.values[f[s.id]].offers.map(c=>1*c):[];a=a.filter(c=>r.indexOf(1*c.id)>-1)}u(a[0]??null)},[f]),t(W,{...o,children:[e(Z,{title:l}),e("div",{className:"catalogue-categories",children:e("div",{className:"container-outer",children:e("div",{className:"catalogue-categories__outer",children:e("div",{className:"catalogue-categories__inner",children:e(J,{...o,lastActive:!0})})})})}),e("div",{className:"product-description",children:e("div",{className:"container-outer",children:e("div",{className:"product-description__outer",children:t("div",{className:"product-description__inner",children:[i.data.images.length?e(ae,{...o}):e("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor",className:"w-full h-auto text-gray-300",children:e("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 001.5-1.5V6a1.5 1.5 0 00-1.5-1.5H3.75A1.5 1.5 0 002.25 6v12a1.5 1.5 0 001.5 1.5zm10.5-11.25h.008v.008h-.008V8.25zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"})}),t("div",{className:"product-description__purchase-details",children:[e("div",{className:"product-title fw-700-35-42",children:e("p",{children:l})}),t("div",{className:"product-description__row-one",children:[d?t("div",{className:"in-stock-label",children:[e("div",{className:"in-stock-label__tick center",children:e("img",{src:te,alt:""})}),d.quantity?e("div",{className:"in-stock-label__txt fw-400-14-17",children:"В наличии"}):e("div",{className:"in-stock-label__txt fw-400-14-17",children:"Под заказ"})]}):"",t("div",{className:"articul fw-400-14-17",children:[e("p",{children:"Артикул: "}),e("span",{className:"articul__code",children:i.data.article})]})]}),e("div",{className:"product-description__card",children:t("div",{className:"product-description__card-inner",children:[e("div",{className:"product-description__card-left",children:S.map((a,s)=>t("div",{children:[e("div",{className:"product-description__card-size-wrapper",children:t("div",{className:"product-description__card-size-label fw-700-14-17 flex gap-2",children:[e("span",{children:a.title}),a.id===1&&i.data.sizes&&(i.data.sizes.image||i.data.sizes.html)?e("a",{href:"#",onClick:r=>{r.preventDefault(),_(e(ie,{sizes:i.data.sizes}))},className:"product-description__card-size-link fw-400-14-17",children:"Подобрать размер"}):""]})}),e("div",{className:"product-description__card-size-flexbox",children:a.values.map((r,c)=>e("div",{onClick:N=>j(v=>{const F={...v};return F[a.id]=c,F}),className:`product-description__product-size-item fw-400-12-14 ${f[a.id]==c?"bg-primary-500 text-white":""}`,children:e("p",{children:r.value})},c))})]},a.id))}),e("div",{className:"product-description__card-right",children:t("div",{className:"btn-secondary product-description__btn-secondary",children:[e("div",{className:"product-description__btn-secondary-phone-icon-wrapper",children:e("img",{src:ee,alt:""})}),e("div",{className:"product-description__btn-secondary-txt-wrapper fw-700-16-20",children:e("p",{children:"Заказать звонок"})})]})})]})}),e("div",{className:"product-description__line"}),t("div",{className:"product-description__row-two",children:[e("div",{className:"catalogue__item-price fw-700-18-22 center mr-4",children:h&&d&&d.quantity?x(h):"Нет предложения"}),t("div",{className:"purchase-btn-group product-description__purchase-btn-group center",children:[d&&d.quantity?e(H,{children:g.items.findIndex(a=>a.offer.id==d.id)<0?e(H,{children:t("div",{className:"btn-purchase product-description__btn-purchase",onClick:()=>B(d),children:[e(P,{className:"w-5 h-5 mr-2"}),e("div",{className:"btn-purchase__txt fw-700-16-20",children:"Купить"})]})}):e(K,{href:route("cart.index"),children:t("div",{className:"btn-purchase product-description__btn-purchase",children:[e(P,{className:"w-5 h-5 mr-2"}),e("div",{className:"btn-purchase__txt fw-700-16-20",children:"Перейти в корзину"})]})})}):"",e("div",{className:"heart-icon-wrapper product-description__heart-icon-wrapper text-primary-500",onClick:()=>{R()},children:e(G,{className:"w-4 h-4",filled:b.indexOf(i.data.id)>-1})})]})]})]})]})})})}),e("div",{className:"product-review-tab-wrapper pb-20",children:t("div",{className:"container-outer",children:[t("div",{className:"product-review-tab-wrapper__tab-line fw-700-20-24",children:[i.data.body?e("button",{className:`tab-item ${p===0?"product-active":""}`,onClick:a=>A(0),children:"Описание"}):"",e("button",{className:`tab-item ${p===1?"product-active":""}`,onClick:a=>A(1),children:"Отзывы"})]}),e("div",{className:"product-review-tab-wrapper__bottom-section",children:e("div",{className:"product-review-tab-wrapper__bottom-section-inner",children:t("ul",{className:"product-review-tab-wrapper__bottom-section-list",children:[e("ul",{className:"product-review-tab-wrapper__bottom-list-item",style:{display:p===0?"":"none"},children:t("li",{className:"product-review-tab-wrapper__bottom-section-item",children:[e("div",{className:"product-review-tab-wrapper__bottom-section-title fw-600-20-24",children:e("p",{children:"Основное"})}),e("div",{className:"product-review-tab-wrapper__bottom-section-desc fw-400-16-19",children:q(i.data.body??"")})]})}),e("div",{className:"product-review-tab-wrapper__bottom-list-item",style:{display:p===1?"":"none"},children:e("ul",{className:"comment-wrapper product-review-tab-wrapper__comment-wrapper",children:i.data.reviews.map((a,s)=>t("li",{className:"comment-wrapper__comment comment",children:[t("div",{className:"comment__left",children:[e("div",{className:"comment__photo",children:e("img",{src:a.avatar,alt:""})}),t("div",{className:"comment__content ",children:[e("div",{className:"comment__fullname fw-500-16-22",children:a.name}),e("div",{className:"comment__txt fw-400-16-19",children:a.text}),e("div",{className:"comment__date fw-500-14-20",children:k(a.created_at).format("DD.MM.YYYY HH:mm")})]})]}),e("div",{className:"comment__right",children:e("div",{className:"catalogue__item-rating",children:e("div",{className:"catalogue__stars",children:[null,null,null,null,null].map((r,c)=>e("div",{className:"catalogue__star-wrapper center",children:e(Q,{className:"w-4 h-4 shrink-0 text-yellow-400"})},c))})})})]},s))})})]})})})]})}),e("form",{className:"contact mb-20",onSubmit:O,children:e("div",{className:"container-outer",children:e("div",{className:"contact__outer",children:t("div",{className:"contact__inner",children:[t("div",{className:"grid grid-cols-2 gap-8 mb-8",children:[t("div",{children:[e("input",{id:"name",type:"text",name:"name",value:C.name,className:"contact__input input",onChange:a=>L("name",a.target.value),placeholder:"Имя"}),e(T,{message:z.name})]}),t("div",{children:[e("input",{id:"email",type:"text",name:"email",value:C.email,className:"contact__input input",onChange:a=>L("email",a.target.value),placeholder:"E-mail"}),e(T,{message:z.email})]})]}),t("div",{className:"contact__row fw-400-16-19",children:[e("textarea",{id:"text",name:"text",value:C.text,className:"feedback-textarea",onChange:a=>L("text",a.target.value),placeholder:"Отзыв"}),e(T,{message:z.text})]}),e("div",{className:"contact__row fw-400-16-19",children:e("button",{className:"btn-primary fw-700-16-20",children:"Отправить"})})]})})})}),i.data.similars.length?e("div",{className:"similar-products bg_aqua",children:e("div",{className:"container-outer",children:e("div",{className:"similar-products__outer",children:t("div",{className:"similar-products__inner",children:[e("div",{className:"similar-products-title-label similar-products__similar-products-title-label fw-700-45-55 color_white",children:e("p",{children:"Похожие товары"})}),e(w,{...M,className:"similar-products-slick",children:i.data.similars.map((a,s)=>e("div",{className:"",children:e("div",{className:"catalogue-item",children:e(E,{item:a})})},s))})]})})})}):"",i.data.relateds.length?e("div",{className:"similar-products bg_aqua",children:e("div",{className:"container-outer",children:e("div",{className:"similar-products__outer",children:t("div",{className:"similar-products__inner",children:[e("div",{className:"similar-products-title-label similar-products__similar-products-title-label fw-700-45-55 color_white",children:e("p",{children:"С этим товаром покупают"})}),e(w,{...M,className:"similar-products-slick",children:i.data.relateds.map((a,s)=>e("div",{className:"",children:e("div",{className:"catalogue-item",children:e(E,{item:a})})},s))})]})})})}):""]})};export{ve as default};
