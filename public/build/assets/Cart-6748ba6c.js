import{u,W as v,j as r,L as N,a as e,b as y,I as l,X as b,h as f}from"./app-c4af702c.js";import{B as x}from"./Breadcrumbs-33031141.js";import{N as w}from"./NoPhoto-4870c1eb.js";const j=s=>{const{cart:n,pagetitle:o}=s,{priceFormat:m,numWord:h}=u(),g=a=>{a&&f.post(route("cart.delete"),{item:a.id},{preserveScroll:!0})},{data:d,setData:i,post:_,processing:k,errors:c,reset:C}=v({name:"",lastname:"",phone:"",email:"",comment:"",delivery_id:1,region:"",city:"",street:"",house:"",appartement:"",payment_id:1}),p=a=>{a.preventDefault(),_(route("cabinet.orders.store"),{preserveScroll:!0})};return r(N,{...s,children:[e(y,{title:o}),e("div",{className:"catalogue-categories",children:e("div",{className:"container-outer",children:e("div",{className:"catalogue-categories__outer",children:e("div",{className:"catalogue-categories__inner",children:e(x,{...s})})})})}),e("form",{className:"ordering",onSubmit:p,children:e("div",{className:"container-outer",children:e("div",{className:"ordering__outer",children:r("div",{className:"ordering__inner",children:[e("div",{className:"catalogue-section__title ordering__title center fw-700-45-55",children:e("p",{children:"Оформление заказа"})}),e("div",{className:"ordering__main",children:r("div",{className:"ordering-details ordering__ordering-details",children:[r("div",{className:"ordering-contacts ordering-details__ordering-contacts",children:[e("div",{className:"ordering-contacts__title-label fw-600-20-24",children:e("p",{children:"Ваши контакты"})}),r("div",{className:"ordering-contacts-form ordering-details__ordering-contacts-form fw-400-16-19",children:[r("div",{className:"grid grid-cols-2 gap-8 pb-8",children:[r("div",{children:[e("input",{id:"name",type:"text",name:"name",value:d.name,className:"ordering__input",onChange:a=>i("name",a.target.value),placeholder:"Имя"}),e(l,{message:c.name})]}),r("div",{children:[e("input",{id:"lastname",type:"text",name:"lastname",value:d.lastname,className:"ordering__input",onChange:a=>i("lastname",a.target.value),placeholder:"Фамилия"}),e(l,{message:c.lastname})]}),r("div",{children:[e("input",{id:"phone",type:"text",name:"phone",value:d.phone,className:"ordering__input",onChange:a=>i("phone",a.target.value),placeholder:"Телефон"}),e(l,{message:c.phone})]}),r("div",{children:[e("input",{id:"email",type:"text",name:"email",value:d.email,className:"ordering__input",onChange:a=>i("email",a.target.value),placeholder:"E-mail"}),e(l,{message:c.email})]}),r("div",{className:"col-span-2",children:[e("textarea",{id:"comment",name:"comment",value:d.comment,className:"ordering-contacts-form__textarea fw-400-16-19",onChange:a=>i("comment",a.target.value),placeholder:"Комментарии"}),e(l,{message:c.comment})]})]}),e("div",{className:"ordering-contacts-form__line"}),r("div",{children:[r("div",{className:"ordering-contacts-form__row",children:[r("label",{className:"checkbox-grid__item",htmlFor:"delivery_id-1",children:[e("div",{className:"checkbox-wrapper center",children:e("input",{type:"radio",defaultChecked:!0,name:"delivery_id",id:"delivery_id-1",value:"1",onChange:a=>i(t=>({...t,delivery_id:a.target.checked?1:t.delivery_id}))})}),e("div",{className:"checkbox-label-wrapper center",children:e("div",{className:"checkbox-label",children:"Доставка"})})]}),r("label",{className:"checkbox-grid__item",htmlFor:"delivery_id-2",children:[e("div",{className:"checkbox-wrapper center",children:e("input",{type:"radio",name:"delivery_id",id:"delivery_id-2",value:"2",onChange:a=>i(t=>({...t,delivery_id:a.target.checked?2:t.delivery_id}))})}),e("div",{className:"checkbox-label-wrapper center",children:e("div",{className:"checkbox-label",children:"Самовывоз"})})]})]}),e(l,{message:c.delivery_id})]}),e("div",{className:"ordering-contacts__title-label fw-600-20-24",children:e("p",{children:"Доставка"})}),r("div",{className:"ordering-contacts-form ordering-details__ordering-contacts-form fw-400-16-19",children:[r("div",{className:"ordering-contacts-form__row",children:[r("div",{className:"ordering-contacts-form__selectbox",children:[e("input",{id:"region",type:"text",name:"region",value:d.region,className:"ordering__input",onChange:a=>i("region",a.target.value),placeholder:"Область"}),e(l,{message:c.region})]}),r("div",{className:"ordering-contacts-form__selectbox",children:[e("input",{id:"city",type:"text",name:"city",value:d.city,className:"ordering__input",onChange:a=>i("city",a.target.value),placeholder:"Город"}),e(l,{message:c.city})]})]}),e("div",{className:"ordering-contacts-form__row",children:r("div",{className:"ordering-contacts-form__selectbox w-full",children:[e("input",{id:"street",type:"text",name:"street",value:d.street,className:"ordering__input w-full",onChange:a=>i("street",a.target.value),placeholder:"Улица"}),e(l,{message:c.street})]})}),e("div",{className:"ordering-contacts-form__row",children:r("div",{className:"ordering-contacts-form__row-inner",children:[r("div",{className:"ordering-contacts-form__selectbox",children:[e("input",{id:"house",type:"text",name:"house",value:d.house,className:"ordering__input",onChange:a=>i("house",a.target.value),placeholder:"№ Дома"}),e(l,{message:c.house})]}),r("div",{className:"ordering-contacts-form__selectbox",children:[e("input",{id:"appartement",type:"text",name:"appartement",value:d.appartement,className:"ordering__input",onChange:a=>i("appartement",a.target.value),placeholder:"№ Квартиры"}),e(l,{message:c.appartement})]})]})}),e("div",{className:"ordering-contacts-form__line"})]}),e("div",{className:"ordering-contacts__title-label fw-600-20-24",children:e("p",{children:"Оплата"})}),r("div",{action:"",className:"ordering-contacts-form ordering-details__ordering-contacts-form fw-400-16-19",children:[r("label",{className:"checkbox-grid__item",htmlFor:"payment_id-1",children:[e("div",{className:"checkbox-wrapper center",children:e("input",{type:"radio",defaultChecked:!0,name:"payment_id",id:"payment_id-1",value:"1",onChange:a=>i(t=>({...t,delivery_id:a.target.checked?1:t.delivery_id}))})}),e("div",{className:"checkbox-label-wrapper center",children:e("div",{className:"radio-label",children:"Наличными"})})]}),r("label",{className:"checkbox-grid__item",htmlFor:"payment_id-2",children:[e("div",{className:"checkbox-wrapper center",children:e("input",{type:"radio",name:"payment_id",id:"payment_id-2",value:"2",onChange:a=>i(t=>({...t,delivery_id:a.target.checked?2:t.delivery_id}))})}),e("div",{className:"checkbox-label-wrapper center",children:e("div",{className:"radio-label",children:"Оплата картой"})})]}),r("label",{className:"checkbox-grid__item",htmlFor:"payment_id-3",children:[e("div",{className:"checkbox-wrapper center",children:e("input",{type:"radio",name:"payment_id",id:"payment_id-3",value:"3",onChange:a=>i(t=>({...t,delivery_id:a.target.checked?3:t.delivery_id}))})}),e("div",{className:"checkbox-label-wrapper center",children:e("div",{className:"radio-label",children:"Оплата картой онлайн"})})]})]})]})]}),e("div",{className:"ordering-cart ordering-details__ordering-cart",children:r("div",{className:"ordering-cart__inner",children:[e("div",{className:"ordering-cart__title-label fw-600-20-24",children:e("p",{children:"Товары в корзине"})}),e("div",{className:"ordering-cart__wrapper",children:n.items.map(a=>r("div",{className:"ordering-cart__product-item",children:[r("div",{className:"ordering-product-desc ordering-cart__ordering-product-desc",children:[e("div",{className:"ordering-product-photo ordering-product-desc__ordering-product-photo center",style:{flex:0},children:e("div",{className:"w-20",children:a.offer.product.images.length?e("div",{className:"pt-[100%] bg-no-repeat bg-center bg-cover",style:{backgroundImage:`url('${a.offer.product.images[0]}')`}}):e("div",{className:"pt-[100%] relative",children:e(w,{className:"absolute w-full h-auto text-gray-300 top-1/2 -translate-y-1/2"})})})}),r("div",{className:"ordering-product-details xl:max-w-[60%]",children:[e("div",{className:"catalogue__item-title ordering-product-details__catalogue-item-title fw-600-16-19 ",children:a.offer.product.title}),r("div",{className:"ordering-product-details__row",children:[e("div",{className:"catalogue__item-price ordering-product-details__item-price fw-700-18-22",children:e("p",{children:a.price})}),e("div",{className:"ordering-product-details__total-quantity fw-400-16-19 center",children:r("p",{children:["x",a.quantity]})})]})]})]}),e("div",{className:"ordering-cart__close-outline center cursor-pointer",onClick:t=>g(a.offer),children:e(b,{className:"w-4 h-4 shrink-0 opacity-50 text-black"})})]},a.id))}),r("div",{className:"ordering-total ordering-details__ordering-total",children:[r("div",{className:"ordering-total-items ordering-total__ordering-total",children:[e("p",{children:"Итого:"}),r("span",{className:"fw-600-16-19",children:[" ",n.quantity," ",h(n.quantity,["товар","товара","товаров"])]})]}),r("div",{className:"ordering-total-sum ordering-total__ordering-total-sum",children:[e("p",{children:"На сумму:"}),r("span",{className:"fw-600-16-19",children:[" ",m(n.sum)]})]})]}),e("div",{className:"ordering-btn-wrapper ordering-details__ordering-btn-wrapper fw-700-16-20",children:e("button",{className:"btn-primary",children:"Подтвердить заказ"})})]})})]})})]})})})})]})};export{j as default};
