import{W as p,r as u,j as s,L as g,a as e,b as _,I as o}from"./app-e831e7c7.js";import"./TextInput-6b436ff3.js";import{B as h}from"./Breadcrumbs-2eefd6fb.js";function N(n){const{data:r,setData:t,post:l,processing:c,errors:i,reset:m}=p({name:"",email:"",password:"",password_confirmation:""});u.useEffect(()=>()=>{m("password","password_confirmation")},[]);const d=a=>{a.preventDefault(),l(route("register"))};return s(g,{...n,children:[e(_,{title:"Register"}),e("div",{className:"catalogue-categories",children:e("div",{className:"container-outer",children:e("div",{className:"catalogue-categories__outer",children:e("div",{className:"catalogue-categories__inner",children:e(h,{...n})})})})}),e("div",{className:"registration-section",children:s("div",{className:"container-outer",children:[e("div",{className:"registration-section__title catalogue-section__title center fw-700-45-55",children:e("p",{children:"Регистрация"})}),e("div",{className:"registration-section__subtitle reg-subtitle fw-400-16-19",children:e("p",{children:"Идейные соображения высшего порядка, а также реализация намеченных плановых заданий играет важную роль в формировании систем массового участия."})}),s("form",{className:"registration-section__form reg-form fw-400-16-19",onSubmit:d,children:[s("div",{className:"reg-form__row",children:[s("div",{style:{width:"50%"},children:[e("input",{id:"name",name:"name",value:r.name,className:"reg__input",autoComplete:"name",isFocused:!0,onChange:a=>t("name",a.target.value),placeholder:"Имя"}),e(o,{message:i.name})]}),s("div",{style:{width:"50%"},children:[e("input",{id:"email",type:"text",name:"email",value:r.email,className:"reg__input",autoComplete:"username",onChange:a=>t("email",a.target.value),placeholder:"E-mail"}),e(o,{message:i.email})]})]}),s("div",{className:"reg-form__col",children:[e("input",{id:"password",type:"password",name:"password",placeholder:"Пароль",value:r.password,className:"reg__input",autoComplete:"new-password",onChange:a=>t("password",a.target.value)}),e(o,{message:i.password})]}),s("div",{className:"reg-form__col",children:[e("input",{id:"password_confirmation",type:"password",placeholder:"Подтвердите пароль",name:"password_confirmation",value:r.password_confirmation,className:"reg__input",autoComplete:"new-password",onChange:a=>t("password_confirmation",a.target.value)}),e(o,{message:i.password_confirmation})]}),e("div",{className:"reg-form__btn-wrapper fw-700-16-20",children:e("button",{className:"btn-primary",disabled:c,children:"Зарегистрироваться"})})]}),e("br",{}),e("br",{})]})})]})}export{N as default};