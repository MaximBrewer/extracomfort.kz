import{q as g,W as b,j as a,L as x,a as e,b as N,I as m,d as y}from"./app-05604a95.js";import{I as o}from"./InputLabel-059097cd.js";import{T as c}from"./TextInput-d5b4fca0.js";import{C}from"./CabinetPanel-0a52f363.js";import{C as w}from"./CabinetTop-bc1c48f8.js";import{t as k}from"./transition-9fe01bac.js";import"./Breadcrumbs-65560b2f.js";function D(i){const s=g().props.auth.user,{data:r,setData:l,patch:d,errors:n,processing:u,recentlySuccessful:f}=b({name:s.name,email:s.email}),h=t=>{t.preventDefault(),d(route("profile.update"))},{auth:I,mustVerifyEmail:p,status:v}=i;return a(x,{...i,children:[e(N,{...i}),e("div",{className:"cabinet-page bg-white py-10 md:py-20",children:a("div",{className:"container-outer",children:[e(w,{...i}),a("div",{className:"flex flex-col lg:flex-row items-start gap-7",children:[e(C,{}),e("div",{className:"cabinet-content ",children:e("div",{className:"cabinet-my-data white-block -gray",children:a("form",{onSubmit:h,className:"mt-6 space-y-6",children:[a("div",{children:[e(o,{htmlFor:"name",value:"Имя"}),e(c,{id:"name",className:"mt-1 block w-full",value:r.name,onChange:t=>l("name",t.target.value),required:!0,isFocused:!0,autoComplete:"name"}),e(m,{className:"mt-2",message:n.name})]}),a("div",{children:[e(o,{htmlFor:"email",value:"E-mail"}),e(c,{id:"email",type:"email",className:"mt-1 block w-full",value:r.email,onChange:t=>l("email",t.target.value),required:!0,autoComplete:"username"}),e(m,{className:"mt-2",message:n.email})]}),p&&s.email_verified_at===null&&a("div",{children:[a("p",{className:"text-sm mt-2 text-gray-800",children:["Your email address is unverified.",e(y,{href:route("verification.send"),method:"post",as:"button",className:"underline text-sm text-gray-600 hover:text-gray-900 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500",children:"Click here to re-send the verification email."})]}),v==="verification-link-sent"&&e("div",{className:"mt-2 font-medium text-sm text-green-600",children:"A new verification link has been sent to your email address."})]}),a("div",{className:"flex items-center gap-4",children:[e("button",{className:"form-profile-btn",disabled:u,children:"Сохранить"}),e(k,{show:f,enterFrom:"opacity-0",leaveTo:"opacity-0",className:"transition ease-in-out",children:e("p",{className:"text-sm text-gray-600",children:"Saved."})})]})]})})})]})]})})]})}export{D as default};