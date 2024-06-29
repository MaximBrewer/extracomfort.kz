import{u as w,W as k,r as C,j as a,L,a as e,b as F,I as s,X as j,y as p}from"./app-34b2d111.js";import{B as I}from"./Breadcrumbs-5ab7d08b.js";import{N as S}from"./NoPhoto-6f63b8c7.js";const D=h=>{const{cart:o,pagetitle:u,auth:d,lastorder:i}=h,{priceFormat:g,numWord:_}=w(),v=r=>{r&&p.post(route("cart.delete"),{item:r.id},{preserveScroll:!0})},N=r=>{r&&p.post(route("cart.add"),{item:r.id,silent:!0},{preserveScroll:!0})},y=r=>{r&&p.post(route("cart.subtract"),{item:r.id,silent:!0},{preserveScroll:!0})},{data:t,setData:n,post:b,processing:q,errors:c,reset:B}=k({name:d.user&&d.user.name?d.user.name:i?i.name:"",lastname:d.user&&d.user.lastname?d.user.lastname:i?i.lastname:"",phone:d.user&&d.user.phone?d.user.phone:i?i.phone:"",email:d.user&&d.user.email?d.user.email:i?i.email:"",comment:"",delivery_id:1,region:i?i.region:"",city:i?i.city:"",street:i?i.street:"",house:i?i.house:"",appartement:i?i.appartement:"",payment_id:2});C.useEffect(()=>{t.delivery_id==1&&n(r=>({...r,payment_id:2}))},[t.delivery_id]);const f=r=>{r.preventDefault(),b(route("cabinet.orders.store"),{preserveScroll:!0})};return a(L,{...h,children:[e(F,{title:u}),e("div",{className:"catalogue-categories",children:e("div",{className:"container-outer",children:e("div",{className:"catalogue-categories__outer",children:e("div",{className:"catalogue-categories__inner",children:e(I,{...h})})})})}),o.items.length?e("form",{className:"ordering",onSubmit:f,children:e("div",{className:"container-outer",children:e("div",{className:"ordering__outer",children:a("div",{className:"ordering__inner",children:[e("div",{className:"catalogue-section__title ordering__title center fw-700-45-55",children:e("p",{children:"Оформление заказа"})}),e("div",{className:"ordering__main",children:a("div",{className:"ordering-details ordering__ordering-details",children:[a("div",{className:"ordering-contacts ordering-details__ordering-contacts",children:[e("div",{className:"ordering-contacts__title-label fw-600-20-24",children:e("p",{children:"Ваши контакты"})}),a("div",{className:"ordering-contacts-form ordering-details__ordering-contacts-form fw-400-16-19",children:[a("div",{className:"grid grid-cols-2 gap-4 pb-4",children:[a("div",{children:[e("input",{id:"name",type:"text",name:"name",value:t.name??"",className:"ordering__input",onChange:r=>n("name",r.target.value),placeholder:"Имя"}),e(s,{message:c.name})]}),a("div",{children:[e("input",{id:"lastname",type:"text",name:"lastname",value:t.lastname??"",className:"ordering__input",onChange:r=>n("lastname",r.target.value),placeholder:"Фамилия"}),e(s,{message:c.lastname})]}),a("div",{className:"col-span-2",children:[e("input",{id:"phone",type:"text",name:"phone",value:t.phone??"",className:"ordering__input",onChange:r=>n("phone",r.target.value),placeholder:"Телефон"}),e(s,{message:c.phone})]}),a("div",{className:"col-span-2",children:[e("input",{id:"email",type:"text",name:"email",value:t.email??"",className:"ordering__input",onChange:r=>n("email",r.target.value),placeholder:"E-mail"}),e(s,{message:c.email})]}),a("div",{className:"col-span-2",children:[e("textarea",{id:"comment",name:"comment",value:t.comment??"",className:"ordering-contacts-form__textarea fw-400-16-19",onChange:r=>n("comment",r.target.value),placeholder:"Комментарии"}),e(s,{message:c.comment})]})]}),e("div",{className:"ordering-contacts-form__line"}),a("div",{children:[a("div",{className:"ordering-contacts-form__row",children:[a("label",{className:"checkbox-grid__item",htmlFor:"delivery_id-1",children:[e("div",{className:"checkbox-wrapper center",children:e("input",{type:"radio",defaultChecked:!0,name:"delivery_id",id:"delivery_id-1",value:"1",onChange:r=>n(l=>({...l,delivery_id:r.target.checked?1:l.delivery_id}))})}),e("div",{className:"checkbox-label-wrapper center",children:e("div",{className:"checkbox-label",children:"Доставка"})})]}),a("label",{className:"checkbox-grid__item",htmlFor:"delivery_id-2",children:[e("div",{className:"checkbox-wrapper center",children:e("input",{type:"radio",name:"delivery_id",id:"delivery_id-2",value:"2",onChange:r=>n(l=>({...l,delivery_id:r.target.checked?2:l.delivery_id}))})}),e("div",{className:"checkbox-label-wrapper center",children:e("div",{className:"checkbox-label",children:"Самовывоз"})})]})]}),e(s,{message:c.delivery_id})]}),e("div",{className:"ordering-contacts__title-label fw-600-20-24",children:e("p",{children:"Доставка"})}),a("div",{className:"ordering-contacts-form ordering-details__ordering-contacts-form fw-400-16-19",children:[a("div",{className:"grid grid-cols-2 gap-4 pb-4",children:[a("div",{className:"",children:[e("input",{id:"region",type:"text",name:"region",value:t.region??"",className:"ordering__input",onChange:r=>n("region",r.target.value),placeholder:"Область"}),e(s,{message:c.region})]}),a("div",{className:"",children:[e("input",{id:"city",type:"text",name:"city",value:t.city??"",className:"ordering__input",onChange:r=>n("city",r.target.value),placeholder:"Нас. пункт (горд, поселок, ...)"}),e(s,{message:c.city})]}),a("div",{className:"col-span-2",children:[e("input",{id:"street",type:"text",name:"street",value:t.street??"",className:"ordering__input w-full",onChange:r=>n("street",r.target.value),placeholder:"Улица"}),e(s,{message:c.street})]}),a("div",{className:"",children:[e("input",{id:"house",type:"text",name:"house",value:t.house??"",className:"ordering__input",onChange:r=>n("house",r.target.value),placeholder:"№ Дома"}),e(s,{message:c.house})]}),a("div",{className:"",children:[e("input",{id:"appartement",type:"text",name:"appartement",value:t.appartement??"",className:"ordering__input",onChange:r=>n("appartement",r.target.value),placeholder:"№ Квартиры"}),e(s,{message:c.appartement})]})]}),e("div",{className:"ordering-contacts-form__line"})]}),e("div",{className:"ordering-contacts__title-label fw-600-20-24",children:e("p",{children:"Оплата"})}),t.delivery_id?a("div",{action:"",className:"ordering-contacts-form ordering-details__ordering-contacts-form fw-400-16-19",children:[t.delivery_id!==1?a("label",{className:"checkbox-grid__item",htmlFor:"payment_id-1",children:[e("div",{className:"checkbox-wrapper center",children:e("input",{type:"radio",checked:t.payment_id==1,name:"payment_id",id:"payment_id-1",value:"1",onChange:r=>n(l=>({...l,payment_id:r.target.checked?1:l.payment_id}))})}),e("div",{className:"checkbox-label-wrapper center",children:e("div",{className:"radio-label",children:"Наличными"})})]}):"",a("label",{className:"checkbox-grid__item",htmlFor:"payment_id-2",children:[e("div",{className:"checkbox-wrapper center",children:e("input",{type:"radio",checked:t.payment_id==2,name:"payment_id",id:"payment_id-2",value:"2",onChange:r=>n(l=>({...l,payment_id:r.target.checked?2:l.payment_id}))})}),e("div",{className:"checkbox-label-wrapper center",children:e("div",{className:"radio-label",children:"Оплата картой"})})]}),a("label",{className:"checkbox-grid__item",htmlFor:"payment_id-3",children:[e("div",{className:"checkbox-wrapper center",children:e("input",{type:"radio",checked:t.payment_id==3,name:"payment_id",id:"payment_id-3",value:"3",onChange:r=>n(l=>({...l,payment_id:r.target.checked?3:l.payment_id}))})}),e("div",{className:"checkbox-label-wrapper center",children:e("div",{className:"radio-label",children:"Оплата картой онлайн"})})]})]}):""]})]}),e("div",{className:"ordering-cart ordering-details__ordering-cart",children:a("div",{className:"ordering-cart__inner",children:[e("div",{className:"ordering-cart__title-label fw-600-20-24",children:e("p",{children:"Товары в корзине"})}),e("div",{className:"ordering-cart__wrapper",children:o.items.map((r,l)=>a("div",{className:"ordering-cart__product-item",children:[a("div",{className:"ordering-product-desc ordering-cart__ordering-product-desc",children:[e("div",{className:"ordering-product-photo ordering-product-desc__ordering-product-photo center",style:{flex:0},children:e("div",{className:"w-20",children:r.offer.product.images.length?e("div",{className:"pt-[100%] bg-no-repeat bg-center bg-cover",style:{backgroundImage:`url('${r.offer.product.images[0].url}')`}}):e("div",{className:"pt-[100%] relative",children:e(S,{className:"absolute w-full h-auto text-gray-300 top-1/2 -translate-y-1/2"})})})}),a("div",{className:"ordering-product-details xl:max-w-[60%]",children:[e("div",{className:"catalogue__item-title ordering-product-details__catalogue-item-title fw-600-16-19 ",children:r.offer.product.title}),e("div",{className:"ordering-product-details__row",children:e("div",{className:"mb-4",children:r.offer.specifications.map((m,x)=>a("div",{className:"mb-2",children:[a("b",{children:[m.title,": "]}),m.pivot.value]},x))})}),a("div",{className:"ordering-product-details__row",children:[e("div",{className:"catalogue__item-price ordering-product-details__item-price fw-700-18-22 whitespace-nowrap",children:e("p",{children:g(r.price)})}),e("div",{className:"ordering-product-details__total-quantity fw-400-16-19 center",children:a("div",{className:"relative flex items-center max-w-[6rem]",children:[e("button",{onClick:m=>y(r.offer),type:"button",className:"bg-gray-100 hover:bg-gray-200 border border-solid border-gray-300 rounded-s-lg p-2 h-9 focus:ring-gray-100 focus:ring-2 focus:outline-none",children:e("svg",{className:"w-3 h-3 text-gray-900","aria-hidden":"true",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 18 2",children:e("path",{stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"M1 1h16"})})}),e("input",{readOnly:!0,type:"text",value:r.quantity,className:"bg-gray-50 border-solid border-x-0 border-gray-300 h-9 text-center text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block w-full py-1.5 px-1"}),e("button",{onClick:m=>N(r.offer),type:"button",className:"bg-gray-100 hover:bg-gray-200 border border-solid border-gray-300 rounded-e-lg p-2 h-9 focus:ring-gray-100 focus:ring-2 focus:outline-none",children:e("svg",{className:"w-3 h-3 text-gray-900","aria-hidden":"true",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 18 18",children:e("path",{stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"M9 1v16M1 9h16"})})})]})})]})]})]}),e("div",{className:"ordering-cart__close-outline center cursor-pointer",onClick:m=>v(r.offer),children:e(j,{className:"w-4 h-4 shrink-0 opacity-50 text-black"})})]},l))}),a("div",{className:"ordering-total ordering-details__ordering-total",children:[a("div",{className:"ordering-total-items ordering-total__ordering-total",children:[e("p",{children:"Итого:"}),a("span",{className:"fw-600-16-19",children:[" ",o.quantity," ",_(o.quantity,["товар","товара","товаров"])]})]}),a("div",{className:"ordering-total-sum ordering-total__ordering-total-sum",children:[e("p",{children:"На сумму:"}),a("span",{className:"fw-600-16-19",children:[" ",g(o.sum)]})]})]}),e("div",{className:"ordering-btn-wrapper ordering-details__ordering-btn-wrapper fw-700-16-20",children:e("button",{className:"btn-primary",children:"Подтвердить заказ"})})]})})]})})]})})})}):e("div",{className:"text-center py-24 font-medium text-2xl",children:"Товаров в корзине пока нет"})]})};export{D as default};
