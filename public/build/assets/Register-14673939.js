import{r as Y,c as J,g as K,W as Q,j as M,L as $,a as d,b as ee,I as N}from"./app-5bb8e4bf.js";import{B as te}from"./Breadcrumbs-fa3c2377.js";import{C as ne}from"./checked-a7b102b8.js";var Z={exports:{}};function ae(t){return t&&typeof t=="object"&&"default"in t?t.default:t}var R=ae(Y),re=J;function oe(t,a){for(var r=Object.getOwnPropertyNames(a),n=0;n<r.length;n++){var e=r[n],o=Object.getOwnPropertyDescriptor(a,e);o&&o.configurable&&t[e]===void 0&&Object.defineProperty(t,e,o)}return t}function A(){return(A=Object.assign||function(t){for(var a=1;a<arguments.length;a++){var r=arguments[a];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(t[n]=r[n])}return t}).apply(this,arguments)}function se(t,a){t.prototype=Object.create(a.prototype),oe(t.prototype.constructor=t,a)}function ie(t,a){if(t==null)return{};var r,n,e={},o=Object.keys(t);for(n=0;n<o.length;n++)r=o[n],0<=a.indexOf(r)||(e[r]=t[r]);return e}function E(t){if(t===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}var le=function(t,a,r,n,e,o,c,g){if(!t){var s;if(a===void 0)s=new Error("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");else{var l=[r,n,e,o,c,g],p=0;(s=new Error(a.replace(/%s/g,function(){return l[p++]}))).name="Invariant Violation"}throw s.framesToPop=1,s}},q=le;function U(t,a,r){if("selectionStart"in t&&"selectionEnd"in t)t.selectionStart=a,t.selectionEnd=r;else{var n=t.createTextRange();n.collapse(!0),n.moveStart("character",a),n.moveEnd("character",r-a),n.select()}}function ue(t){var a=0,r=0;if("selectionStart"in t&&"selectionEnd"in t)a=t.selectionStart,r=t.selectionEnd;else{var n=document.selection.createRange();n.parentElement()===t&&(a=-n.moveStart("character",-t.value.length),r=-n.moveEnd("character",-t.value.length))}return{start:a,end:r,length:r-a}}var ce={9:"[0-9]",a:"[A-Za-z]","*":"[A-Za-z0-9]"},pe="_";function W(t,a,r){var n="",e="",o=null,c=[];if(a===void 0&&(a=pe),r==null&&(r=ce),!t||typeof t!="string")return{maskChar:a,formatChars:r,mask:null,prefix:null,lastEditablePosition:null,permanents:[]};var g=!1;return t.split("").forEach(function(s){g=!g&&s==="\\"||(g||!r[s]?(c.push(n.length),n.length===c.length-1&&(e+=s)):o=n.length+1,n+=s,!1)}),{maskChar:a,formatChars:r,prefix:e,mask:n,lastEditablePosition:o,permanents:c}}function O(t,a){return t.permanents.indexOf(a)!==-1}function F(t,a,r){var n=t.mask,e=t.formatChars;if(!r)return!1;if(O(t,a))return n[a]===r;var o=e[n[a]];return new RegExp(o).test(r)}function z(t,a){return a.split("").every(function(r,n){return O(t,n)||!F(t,n,r)})}function V(t,a){var r=t.maskChar,n=t.prefix;if(!r){for(;a.length>n.length&&O(t,a.length-1);)a=a.slice(0,a.length-1);return a.length}for(var e=n.length,o=a.length;o>=n.length;o--){var c=a[o];if(!O(t,o)&&F(t,o,c)){e=o+1;break}}return e}function G(t,a){return V(t,a)===t.mask.length}function _(t,a){var r=t.maskChar,n=t.mask,e=t.prefix;if(!r){for((a=T(t,"",a,0)).length<e.length&&(a=e);a.length<n.length&&O(t,a.length);)a+=n[a.length];return a}if(a)return T(t,_(t,""),a,0);for(var o=0;o<n.length;o++)O(t,o)?a+=n[o]:a+=r;return a}function he(t,a,r,n){var e=r+n,o=t.maskChar,c=t.mask,g=t.prefix,s=a.split("");if(o)return s.map(function(p,k){return k<r||e<=k?p:O(t,k)?c[k]:o}).join("");for(var l=e;l<s.length;l++)O(t,l)&&(s[l]="");return r=Math.max(g.length,r),s.splice(r,e-r),a=s.join(""),_(t,a)}function T(t,a,r,n){var e=t.mask,o=t.maskChar,c=t.prefix,g=r.split(""),s=G(t,a);return!o&&n>a.length&&(a+=e.slice(a.length,n)),g.every(function(l){for(;w=l,O(t,f=n)&&w!==e[f];){if(n>=a.length&&(a+=e[n]),p=l,k=n,o&&O(t,k)&&p===o)return!0;if(++n>=e.length)return!1}var p,k,f,w;return!F(t,n,l)&&l!==o||(n<a.length?a=o||s||n<c.length?a.slice(0,n)+l+a.slice(n+1):(a=a.slice(0,n)+l+a.slice(n),_(t,a)):o||(a+=l),++n<e.length)}),a}function fe(t,a,r,n){var e=t.mask,o=t.maskChar,c=r.split(""),g=n;return c.every(function(s){for(;p=s,O(t,l=n)&&p!==e[l];)if(++n>=e.length)return!1;var l,p;return(F(t,n,s)||s===o)&&n++,n<e.length}),n-g}function me(t,a){for(var r=a;0<=r;--r)if(!O(t,r))return r;return null}function P(t,a){for(var r=t.mask,n=a;n<r.length;++n)if(!O(t,n))return n;return null}function B(t){return t||t===0?t+"":""}function de(t,a,r,n,e){var o=t.mask,c=t.prefix,g=t.lastEditablePosition,s=a,l="",p=0,k=0,f=Math.min(e.start,r.start);return r.end>e.start?k=(p=fe(t,n,l=s.slice(e.start,r.end),f))?e.length:0:s.length<n.length&&(k=n.length-s.length),s=n,k&&(k===1&&!e.length&&(f=e.start===r.start?P(t,r.start):me(t,r.start)),s=he(t,s,f,k)),s=T(t,s,l,f),(f+=p)>=o.length?f=o.length:f<c.length&&!p?f=c.length:f>=c.length&&f<g&&p&&(f=P(t,f)),l||(l=null),{value:s=_(t,s),enteredString:l,selection:{start:f,end:f}}}function ge(){var t=new RegExp("windows","i"),a=new RegExp("phone","i"),r=navigator.userAgent;return t.test(r)&&a.test(r)}function b(t){return typeof t=="function"}function ve(){return window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame}function H(){return window.cancelAnimationFrame||window.webkitCancelRequestAnimationFrame||window.webkitCancelAnimationFrame||window.mozCancelAnimationFrame}function X(t){return(H()?ve():function(){return setTimeout(t,1e3/60)})(t)}function j(t){(H()||clearTimeout)(t)}var ke=function(t){function a(n){var e=t.call(this,n)||this;e.focused=!1,e.mounted=!1,e.previousSelection=null,e.selectionDeferId=null,e.saveSelectionLoopDeferId=null,e.saveSelectionLoop=function(){e.previousSelection=e.getSelection(),e.saveSelectionLoopDeferId=X(e.saveSelectionLoop)},e.runSaveSelectionLoop=function(){e.saveSelectionLoopDeferId===null&&e.saveSelectionLoop()},e.stopSaveSelectionLoop=function(){e.saveSelectionLoopDeferId!==null&&(j(e.saveSelectionLoopDeferId),e.saveSelectionLoopDeferId=null,e.previousSelection=null)},e.getInputDOMNode=function(){if(!e.mounted)return null;var i=re.findDOMNode(E(E(e))),u=typeof window<"u"&&i instanceof window.Element;if(i&&!u)return null;if(i.nodeName!=="INPUT"&&(i=i.querySelector("input")),!i)throw new Error("react-input-mask: inputComponent doesn't contain input node");return i},e.getInputValue=function(){var i=e.getInputDOMNode();return i?i.value:null},e.setInputValue=function(i){var u=e.getInputDOMNode();u&&(e.value=i,u.value=i)},e.setCursorToEnd=function(){var i=V(e.maskOptions,e.value),u=P(e.maskOptions,i);u!==null&&e.setCursorPosition(u)},e.setSelection=function(i,u,m){m===void 0&&(m={});var h=e.getInputDOMNode(),v=e.isFocused();h&&v&&(m.deferred||U(h,i,u),e.selectionDeferId!==null&&j(e.selectionDeferId),e.selectionDeferId=X(function(){e.selectionDeferId=null,U(h,i,u)}),e.previousSelection={start:i,end:u,length:Math.abs(u-i)})},e.getSelection=function(){return ue(e.getInputDOMNode())},e.getCursorPosition=function(){return e.getSelection().start},e.setCursorPosition=function(i){e.setSelection(i,i)},e.isFocused=function(){return e.focused},e.getBeforeMaskedValueChangeConfig=function(){var i=e.maskOptions,u=i.mask,m=i.maskChar,h=i.permanents,v=i.formatChars;return{mask:u,maskChar:m,permanents:h,alwaysShowMask:!!e.props.alwaysShowMask,formatChars:v}},e.isInputAutofilled=function(i,u,m,h){var v=e.getInputDOMNode();try{if(v.matches(":-webkit-autofill"))return!0}catch{}return!e.focused||h.end<m.length&&u.end===i.length},e.onChange=function(i){var u=E(E(e)).beforePasteState,m=E(E(e)).previousSelection,h=e.props.beforeMaskedValueChange,v=e.getInputValue(),C=e.value,S=e.getSelection();e.isInputAutofilled(v,S,C,m)&&(C=_(e.maskOptions,""),m={start:0,end:0,length:0}),u&&(m=u.selection,C=u.value,S={start:m.start+v.length,end:m.start+v.length,length:0},v=C.slice(0,m.start)+v+C.slice(m.end),e.beforePasteState=null);var D=de(e.maskOptions,v,S,C,m),L=D.enteredString,I=D.selection,y=D.value;if(b(h)){var x=h({value:y,selection:I},{value:C,selection:m},L,e.getBeforeMaskedValueChangeConfig());y=x.value,I=x.selection}e.setInputValue(y),b(e.props.onChange)&&e.props.onChange(i),e.isWindowsPhoneBrowser?e.setSelection(I.start,I.end,{deferred:!0}):e.setSelection(I.start,I.end)},e.onFocus=function(i){var u=e.props.beforeMaskedValueChange,m=e.maskOptions,h=m.mask,v=m.prefix;if(e.focused=!0,e.mounted=!0,h){if(e.value)V(e.maskOptions,e.value)<e.maskOptions.mask.length&&e.setCursorToEnd();else{var C=_(e.maskOptions,v),S=_(e.maskOptions,C),D=V(e.maskOptions,S),L=P(e.maskOptions,D),I={start:L,end:L};if(b(u)){var y=u({value:S,selection:I},{value:e.value,selection:null},null,e.getBeforeMaskedValueChangeConfig());S=y.value,I=y.selection}var x=S!==e.getInputValue();x&&e.setInputValue(S),x&&b(e.props.onChange)&&e.props.onChange(i),e.setSelection(I.start,I.end)}e.runSaveSelectionLoop()}b(e.props.onFocus)&&e.props.onFocus(i)},e.onBlur=function(i){var u=e.props.beforeMaskedValueChange,m=e.maskOptions.mask;if(e.stopSaveSelectionLoop(),e.focused=!1,m&&!e.props.alwaysShowMask&&z(e.maskOptions,e.value)){var h="";b(u)&&(h=u({value:h,selection:null},{value:e.value,selection:e.previousSelection},null,e.getBeforeMaskedValueChangeConfig()).value);var v=h!==e.getInputValue();v&&e.setInputValue(h),v&&b(e.props.onChange)&&e.props.onChange(i)}b(e.props.onBlur)&&e.props.onBlur(i)},e.onMouseDown=function(i){if(!e.focused&&document.addEventListener){e.mouseDownX=i.clientX,e.mouseDownY=i.clientY,e.mouseDownTime=new Date().getTime();var u=function m(h){if(document.removeEventListener("mouseup",m),e.focused){var v=Math.abs(h.clientX-e.mouseDownX),C=Math.abs(h.clientY-e.mouseDownY),S=Math.max(v,C),D=new Date().getTime()-e.mouseDownTime;(S<=10&&D<=200||S<=5&&D<=300)&&e.setCursorToEnd()}};document.addEventListener("mouseup",u)}b(e.props.onMouseDown)&&e.props.onMouseDown(i)},e.onPaste=function(i){b(e.props.onPaste)&&e.props.onPaste(i),i.defaultPrevented||(e.beforePasteState={value:e.getInputValue(),selection:e.getSelection()},e.setInputValue(""))},e.handleRef=function(i){e.props.children==null&&b(e.props.inputRef)&&e.props.inputRef(i)};var o=n.mask,c=n.maskChar,g=n.formatChars,s=n.alwaysShowMask,l=n.beforeMaskedValueChange,p=n.defaultValue,k=n.value;e.maskOptions=W(o,c,g),p==null&&(p=""),k==null&&(k=p);var f=B(k);if(e.maskOptions.mask&&(s||f)&&(f=_(e.maskOptions,f),b(l))){var w=n.value;n.value==null&&(w=p),f=l({value:f,selection:null},{value:w=B(w),selection:null},null,e.getBeforeMaskedValueChangeConfig()).value}return e.value=f,e}se(a,t);var r=a.prototype;return r.componentDidMount=function(){this.mounted=!0,this.getInputDOMNode()&&(this.isWindowsPhoneBrowser=ge(),this.maskOptions.mask&&this.getInputValue()!==this.value&&this.setInputValue(this.value))},r.componentDidUpdate=function(){var n=this.previousSelection,e=this.props,o=e.beforeMaskedValueChange,c=e.alwaysShowMask,g=e.mask,s=e.maskChar,l=e.formatChars,p=this.maskOptions,k=c||this.isFocused(),f=this.props.value!=null,w=f?B(this.props.value):this.value,i=n?n.start:null;if(this.maskOptions=W(g,s,l),this.maskOptions.mask){!p.mask&&this.isFocused()&&this.runSaveSelectionLoop();var u=this.maskOptions.mask&&this.maskOptions.mask!==p.mask;if(p.mask||f||(w=this.getInputValue()),(u||this.maskOptions.mask&&(w||k))&&(w=_(this.maskOptions,w)),u){var m=V(this.maskOptions,w);(i===null||m<i)&&(i=G(this.maskOptions,w)?m:P(this.maskOptions,m))}!this.maskOptions.mask||!z(this.maskOptions,w)||k||f&&this.props.value||(w="");var h={start:i,end:i};if(b(o)){var v=o({value:w,selection:h},{value:this.value,selection:this.previousSelection},null,this.getBeforeMaskedValueChangeConfig());w=v.value,h=v.selection}this.value=w;var C=this.getInputValue()!==this.value;C?(this.setInputValue(this.value),this.forceUpdate()):u&&this.forceUpdate();var S=!1;h.start!=null&&h.end!=null&&(S=!n||n.start!==h.start||n.end!==h.end),(S||C)&&this.setSelection(h.start,h.end)}else p.mask&&(this.stopSaveSelectionLoop(),this.forceUpdate())},r.componentWillUnmount=function(){this.mounted=!1,this.selectionDeferId!==null&&j(this.selectionDeferId),this.stopSaveSelectionLoop()},r.render=function(){var n,e=this.props,o=(e.mask,e.alwaysShowMask,e.maskChar,e.formatChars,e.inputRef,e.beforeMaskedValueChange,e.children),c=ie(e,["mask","alwaysShowMask","maskChar","formatChars","inputRef","beforeMaskedValueChange","children"]);if(o){b(o)||q(!1);var g=["onChange","onPaste","onMouseDown","onFocus","onBlur","value","disabled","readOnly"],s=A({},c);g.forEach(function(p){return delete s[p]}),n=o(s),g.filter(function(p){return n.props[p]!=null&&n.props[p]!==c[p]}).length&&q(!1)}else n=R.createElement("input",A({ref:this.handleRef},c));var l={onFocus:this.onFocus,onBlur:this.onBlur};return this.maskOptions.mask&&(c.disabled||c.readOnly||(l.onChange=this.onChange,l.onPaste=this.onPaste,l.onMouseDown=this.onMouseDown),c.value!=null&&(l.value=this.value)),n=R.cloneElement(n,l)},a}(R.Component),we=ke;Z.exports=we;var Ce=Z.exports;const Se=K(Ce);function Me(t){const{data:a,setData:r,post:n,processing:e,errors:o,reset:c}=Q({name:"",phone:"",email:"",password:"",password_confirmation:""});Y.useEffect(()=>()=>{c("password","password_confirmation")},[]);const g=s=>{s.preventDefault(),n(route("register"))};return M($,{...t,children:[d(ee,{title:"Регистрация"}),d("div",{className:"catalogue-categories",children:d("div",{className:"container-outer",children:d("div",{className:"catalogue-categories__outer",children:d("div",{className:"catalogue-categories__inner",children:d(te,{...t})})})})}),d("div",{className:"registration-section",children:M("div",{className:"container-outer",children:[d("div",{className:"registration-section__title catalogue-section__title center fw-700-45-55",children:d("p",{children:"Регистрация"})}),M("form",{className:"registration-section__form reg-form fw-400-16-19",onSubmit:g,children:[M("div",{className:"reg-form__row",children:[d("input",{id:"name",type:"text",name:"name",value:a.name,className:"reg__input",autoComplete:"name",onChange:s=>r("name",s.target.value),placeholder:"Имя"}),d(N,{message:o.name})]}),M("div",{className:"reg-form__row",children:[d("div",{style:{width:"50%"},children:d(Se,{alwaysShowMask:!0,mask:"+7 (999) 999-99-99",value:a.phone??"",onChange:s=>{r("phone",s.target.value),setError("phone",null)},placeholder:"",children:s=>d("input",{type:"text",className:"reg__input",...s})})}),M("div",{style:{width:"50%"},children:[d("input",{id:"email",type:"email",name:"email",value:a.email,className:"reg__input",autoComplete:"username",onChange:s=>r("email",s.target.value),placeholder:"E-mail"}),d(N,{message:o.email})]})]}),M("div",{className:"reg-form__row",children:[d("input",{id:"password",type:"password",name:"password",placeholder:"Пароль",value:a.password,className:"reg__input",autoComplete:"new-password",onChange:s=>r("password",s.target.value)}),d(N,{message:o.password})]}),M("div",{className:"reg-form__row",children:[d("input",{id:"password_confirmation",type:"password",placeholder:"Подтвердите пароль",name:"password_confirmation",value:a.password_confirmation,className:"reg__input",autoComplete:"new-password",onChange:s=>r("password_confirmation",s.target.value)}),d(N,{message:o.password_confirmation})]}),M("div",{className:"reg-form__row",children:[M("label",{className:"flex items-center gap-3",children:[M("div",{className:"relative flex items-center justify-center w-5 h-5 rounded-[3px] border border-purple-900",children:[d("input",{id:"accept",type:"checkbox",name:"accept",className:"peer hidden absolute",value:a.accept,onChange:s=>r("accept",s.target.checked)}),d("img",{src:ne,className:"opacity-0 peer-checked:opacity-100 absolute max-w-none"})]}),d("span",{children:"я согласен на обработку и сбор персональных данных"})]}),d(N,{message:o.accept})]}),d("div",{className:"reg-form__btn-wrapper fw-700-16-20",children:d("button",{className:"btn-primary",disabled:e,children:"Зарегистрироваться"})})]}),d("br",{}),d("br",{})]})})]})}export{Me as default};
