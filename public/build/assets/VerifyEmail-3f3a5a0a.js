import{W as a,j as i,L as d,a as e,b as l,d as u}from"./app-c4af702c.js";import{P as m}from"./PrimaryButton-6418181d.js";function h(t){const{status:n}=t,{post:s,processing:o}=a({});return i(d,{...t,children:[e(l,{title:"Email Verification"}),e("div",{className:"mb-4 text-sm text-gray-600",children:"Thanks for signing up! Before getting started, could you verify your email address by clicking on the link we just emailed to you? If you didn't receive the email, we will gladly send you another."}),n==="verification-link-sent"&&e("div",{className:"mb-4 font-medium text-sm text-green-600",children:"A new verification link has been sent to the email address you provided during registration."}),e("form",{onSubmit:r=>{r.preventDefault(),s(route("verification.send"))},children:i("div",{className:"mt-4 flex items-center justify-between",children:[e(m,{disabled:o,children:"Resend Verification Email"}),e(u,{href:route("logout"),method:"post",as:"button",className:"underline text-sm text-gray-600 hover:text-gray-900 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500",children:"Log Out"})]})})]})}export{h as default};
