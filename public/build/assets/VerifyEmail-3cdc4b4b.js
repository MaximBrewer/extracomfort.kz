import{W as a,j as s,L as m,a as e,b as c,d}from"./app-05604a95.js";import{P as u}from"./PrimaryButton-39471ee6.js";function g(t){const{status:i}=t,{post:n,processing:r}=a({});return s(m,{...t,children:[e(c,{title:"Подтверждение E-mail"}),e("div",{className:"mb-4 text-sm text-gray-600",children:"Спасибо за регистрацию! Прежде чем начать, не могли бы вы подтвердить свой адрес электронной почты, нажав на кнопку ссылку, которую мы только что отправили вам по электронной почте? Если вы не получили письмо, мы с радостью отправим вам другое."}),i==="verification-link-sent"&&e("div",{className:"mb-4 font-medium text-sm text-green-600",children:"Новая ссылка для подтверждения была отправлена ​​на адрес электронной почты, который вы указали при регистрации."}),e("form",{onSubmit:o=>{o.preventDefault(),n(route("verification.send"))},children:s("div",{className:"mt-4 flex items-center justify-between",children:[e(u,{disabled:r,children:"Выслать повторно письмо для подтверждения"}),e(d,{href:route("logout"),method:"post",as:"button",className:"underline text-sm text-gray-600 hover:text-gray-900 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500",children:"Выйти"})]})})]})}export{g as default};