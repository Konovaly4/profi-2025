(this["webpackJsonpprofi-2025"]=this["webpackJsonpprofi-2025"]||[]).push([[0],Array(26).concat([function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},,,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var c=n(0),a=n(1),s=n.n(a),i=n(17),o=n.n(i),r=n(9),l=(n(26),n(2)),u=n(3),j=n(4),d=n.n(j),p=function(e,t,n,c){return{userAuth:function(){return n(),fetch("".concat(e,"auth/local/register"),{redirect:"follow",method:"POST",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify({username:"".concat(t.username),email:"".concat(t.email),password:"".concat(t.password),userphone:"".concat(t.userphone)})}).then((function(e){return c(),e.ok?e.json():Promise.reject(e)}))},userLogin:function(){return n(),fetch("".concat(e,"auth/local"),{redirect:"follow",method:"POST",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify({identifier:"".concat(t.email),password:"".concat(t.password)})}).then((function(e){return c(),e.ok?e.json():Promise.reject(e)}))},usersGet:function(){return n(),fetch("".concat(e,"users"),{redirect:"follow",method:"GET",headers:{Accept:"application/json","Content-Type":"application/json"}}).then((function(e){return c(),e.ok?e.json():Promise.reject(e)}))},userGet:function(){return n(),fetch("".concat(e,"users/").concat(t.userId),{redirect:"follow",method:"GET",headers:{Accept:"application/json","Content-Type":"application/json"}}).then((function(e){return c(),e.ok?e.json():Promise.reject(e)}))},userUpdate:function(){return n(),fetch("".concat(e,"users/:id"),{redirect:"follow",method:"PUT",headers:{Accept:"application/json","Content-Type":"application/json",Authorization:"Bearer ".concat(t.token)},body:JSON.stringify({username:"".concat(t.username),email:"".concat(t.email),password:"".concat(t.password),userphone:"".concat(t.userphone),permission:"".concat(t.permission)})}).then((function(e){return c(),e.ok?e.json():Promise.reject(e)}))},userDelete:function(){return n(),fetch("".concat(e,"users/:id"),{redirect:"follow",method:"DELETE",headers:{Accept:"application/json","Content-Type":"application/json",Authorization:"Bearer ".concat(t.token)}}).then((function(e){return c(),e.ok?e.json():Promise.reject(e)}))}}},m=(n(27),function(e){return Object(c.jsx)("button",{className:"close-button",onClick:e.onPress})}),b="\u0417\u0430\u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0438\u0440\u043e\u0432\u0430\u0442\u044c\u0441\u044f",h="\u0412\u043e\u0439\u0442\u0438",f="\u0412\u0430\u0448\u0435 \u0438\u043c\u044f",_="\u0412\u0430\u0448 \u0442\u0435\u043b\u0435\u0444\u043e\u043d (+7-999-123-45-67)",O="\u0412\u0430\u0448 email",k="\u0412\u0430\u0448 \u043f\u0430\u0440\u043e\u043b\u044c",x="\u0417\u0430\u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0438\u0440\u043e\u0432\u0430\u0442\u044c\u0441\u044f",g="\u0412\u043e\u0439\u0442\u0438",N="http://localhost:1337/",v="https://profi-2025-api.ew.r.appspot.com/",y="http://www.buymebuyme.xyz/",w=(n(28),function(e){var t=Object(a.useState)(!1),n=Object(l.a)(t,2),s=n[0],i=n[1],o=Object(a.useState)(void 0),r=Object(l.a)(o,2),u=r[0],j=r[1],N=Object(a.useState)(void 0),y=Object(l.a)(N,2),w=y[0],C=y[1],S=Object(a.useState)(void 0),T=Object(l.a)(S,2),P=T[0],A=T[1],E=Object(a.useState)(void 0),D=Object(l.a)(E,2),I=D[0],G=D[1],B={username:u,userphone:w,email:P,password:I},L=e.loaderOn,U=e.loaderOff,q=p(v,B,L,U),J=q.userAuth,z=q.userLogin;Object(a.useEffect)((function(){""!==e.state?i(!0):i(!1)}),[e.state]);return Object(c.jsx)("div",{className:d()("user-popup__wrapper",{"user-popup__wrapper_visible":s}),onClick:function(t){!t.target.closest(".user-popup")&&e.clearRegState()},children:Object(c.jsxs)("form",{className:"user-popup",children:[Object(c.jsx)("h2",{className:"user-popup__title",children:"registration"===e.state?b:h}),"registration"===e.state&&Object(c.jsx)("input",{className:"user-popup__input",type:"text",name:"name",placeholder:f,onChange:function(e){j(e.target.value)}}),"registration"===e.state&&Object(c.jsx)("input",{className:"user-popup__input",type:"text",name:"phone",pattern:"^(\\+7|8)(\\(|\\s|-)?\\d{3}(\\)|\\s|-)?\\s?(\\d(\\s|-)?){6}\\d",placeholder:_,onChange:function(e){C(e.target.value)}}),Object(c.jsx)("input",{className:"user-popup__input",type:"email",name:"email",placeholder:O,onChange:function(e){A(e.target.value)}}),Object(c.jsx)("input",{className:"user-popup__input",type:"text",name:"password",placeholder:k,onChange:function(e){G(e.target.value)}}),Object(c.jsxs)("div",{className:"user-popup__button-wrapper",children:["registration"===e.state&&Object(c.jsx)("button",{className:"user-popup__reg-button",onClick:function(t){t.preventDefault(),J().then((function(t){e.setUser(t)})).catch((function(e){e.json().then((function(e){return console.log(e)}))})),e.clearRegState()},children:x}),Object(c.jsx)("button",{className:"user-popup__reg-button",onClick:"registration"===e.state?e.setLoginState:function(t){t.preventDefault(),z().then((function(t){e.setUser(t)})).catch((function(e){e.json().then((function(e){return console.log(e)}))})),e.clearRegState()},children:g})]}),Object(c.jsx)(m,{onPress:e.clearRegState})]})})}),C=(n(29),n.p+"static/media/logo.507c0c8a.svg"),S=function(e){var t=Object(a.useState)(""),n=Object(l.a)(t,2),s=n[0],i=n[1],o=function(){i("login")};return Object(c.jsx)("header",{className:"header",children:Object(c.jsxs)("div",{className:"header__container",children:[Object(c.jsxs)("a",{className:"header__link",href:"#",children:[Object(c.jsx)("img",{className:"header__img",src:C,alt:"\u041b\u043e\u0433\u043e\u0442\u0438\u043f"}),"\u0413\u0440\u0430\u0436\u0434\u0430\u043d\u0438\u043d \u043f\u043e\u044d\u0442"]}),Object(c.jsxs)("ul",{className:"header__user-navigation",children:[!e.loggedIn&&Object(c.jsx)("li",{className:"header__user-navigation-item",onClick:o,children:Object(c.jsx)("a",{className:"header__login-link",href:"#",children:"\u0412\u0445\u043e\u0434"})}),!e.loggedIn&&Object(c.jsx)("li",{className:"header__user-navigation-item",onClick:function(e){e.preventDefault(),i("registration")},children:Object(c.jsx)("a",{className:"header__signin-link",href:"#",children:"\u0420\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u044f"})}),e.loggedIn&&Object(c.jsx)("p",{className:"header__user-data",children:e.user.username}),e.loggedIn&&Object(c.jsx)("li",{className:"header__user-navigation-item",children:Object(c.jsx)("a",{className:"header__logout-link",onClick:e.logout,"aria-label":"\u0412\u044b\u0445\u043e\u0434"})})]}),e.user.userToken&&Object(c.jsxs)("p",{children:["\u041f\u0440\u0438\u0432\u0435\u0442, ",e.user.userName]}),Object(c.jsx)(w,{state:s,setUserState:i,setLoginState:o,clearRegState:function(){i("")},setUser:e.setUser,loaderOn:e.loaderOn,loaderOff:e.loaderOff})]})})},T=function(e,t,n,c,a,s,i){return{tasksGet:function(){return s(),fetch("".concat(e,"tasks"),{redirect:"follow",method:"GET",headers:{Accept:"application/json","Content-Type":"application/json"}}).then((function(e){return i(),e.ok?e.json():Promise.reject(e)}))},tasksGetByClient:function(){return s(),fetch("".concat(e,"tasks?client_name=").concat(c.username),{redirect:"follow",method:"GET",headers:{Accept:"application/json","Content-Type":"application/json",Authorization:"Bearer ".concat(t)}}).then((function(e){return i(),e.ok?e.json():Promise.reject(e)}))},tasksGetByWorker:function(){return s(),fetch("".concat(e,"tasks?client_name=").concat(a.worker_name),{redirect:"follow",method:"GET",headers:{Accept:"application/json","Content-Type":"application/json",Authorization:"Bearer ".concat(t)}}).then((function(e){return i(),e.ok?e.json():Promise.reject(e)}))},taskCreate:function(){return s(),fetch("".concat(e,"tasks"),{redirect:"follow",method:"POST",headers:{Accept:"application/json","Content-Type":"application/json",Authorization:"Bearer ".concat(t)},body:JSON.stringify({type:"".concat(n.type),subtype:"".concat(n.subtype),description:"".concat(n.description),"a\u0441\u0441epted":!1,completed:!1,rating:"0",feedback:null,client_name:"".concat(c.username),client_phone:"".concat(c.userphone),client_email:"".concat(c.email)})}).then((function(e){return i(),e.ok?e.json():Promise.reject(e)}))},taskUpdate:function(){return s(),fetch("".concat(e,"tasks/").concat(n.id),{redirect:"follow",method:"PUT",headers:{Accept:"application/json","Content-Type":"application/json",Authorization:"Bearer ".concat(t)},body:JSON.stringify({type:"".concat(n.type),subtype:"".concat(n.subtype),description:"".concat(n.description),accepted:"".concat(n.accepted),completed:"".concat(n.completed),rating:"".concat(n.rating),feedback:"".concat(n.feedback)})}).then((function(e){return i(),e.ok?e.json():Promise.reject(e)}))},taskDelete:function(){return s(),fetch("".concat(e,"tasks/").concat(n.id),{redirect:"follow",method:"DELETE",headers:{Accept:"application/json","Content-Type":"application/json",Authorization:"Bearer ".concat(t)}}).then((function(e){return i(),e.ok?e.json():Promise.reject(e)}))}}},P=(n(30),function(e){return Object(c.jsx)("button",{className:"button",onClick:e.onPress,children:e.placeholder})}),A="\u041c\u043e\u0438 \u0437\u0430\u044f\u0432\u043a\u0438",E="\u041d\u0430 \u0433\u043b\u0430\u0432\u043d\u0443\u044e",D="\u0421\u043e\u0437\u0434\u0430\u0442\u044c \u0437\u0430\u044f\u0432\u043a\u0443",I=(n(31),n.p+"static/media/main__bgi.29824270.jpg"),G=function(e){var t=e.user.userName,n=e.user.userPhone,s=e.user.userEmail,i=e.user.userToken,o=T(N,{userName:t,userPhone:n,userEmail:s,userToken:i}),u=(o.tasksGet,o.tasksGetByClient,o.tasksGetByWorker,o.taskCreate,o.taskUpdate,o.taskDelete,Object(a.useState)("main")),j=Object(l.a)(u,2),d=j[0],p=j[1];return Object(c.jsxs)("section",{className:"main",children:[Object(c.jsx)("h1",{className:"main__title",children:"\u0413\u0440\u0430\u0436\u0434\u0430\u043d\u0438\u043d, \u043d\u0430\u0439\u0434\u0438 \u043c\u0430\u0441\u0442\u0435\u0440\u0430!"}),Object(c.jsx)("img",{className:"main__img",src:I,alt:"\u041d\u0430\u0439\u0442\u0438 \u043c\u0430\u0441\u0442\u0435\u0440\u0430"}),Object(c.jsxs)("div",{className:"main__buttons-container",children:[e.loggedIn&&"main"===d&&Object(c.jsx)(r.b,{className:"main__navlink",to:"/my-tasks",onClick:function(){p("tasks")},children:A}),e.loggedIn&&"tasks"===d&&Object(c.jsx)(r.b,{className:"main__navlink",to:"/",onClick:function(){p("main")},children:E}),e.loggedIn&&Object(c.jsx)(P,{placeholder:D,onPress:e.showTaskForm}),!e.loggedIn&&Object(c.jsx)("p",{className:"main__login-note",children:"\u0412\u043e\u0439\u0434\u0438\u0442\u0435 \u0438\u043b\u0438 \u0437\u0430\u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0438\u0440\u0443\u0439\u0442\u0435\u0441\u044c"})]})]})},B=(n(37),function(){return Object(c.jsxs)("section",{className:"about",children:[Object(c.jsx)("h2",{className:"about__title",children:"\u041a\u0430\u043a \u044d\u0442\u043e \u0440\u0430\u0431\u043e\u0442\u0430\u0435\u0442"}),Object(c.jsxs)("ol",{className:"about__info",children:[Object(c.jsxs)("li",{className:"about__item",children:[Object(c.jsx)("h3",{className:"about__item-title",children:"1"}),Object(c.jsx)("p",{className:"about__item-text",children:"\u0417\u0430\u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0438\u0440\u0443\u0439\u0442\u0435\u0441\u044c \u0438 \u043e\u0444\u043e\u0440\u043c\u0438\u0442\u0435 \u0437\u0430\u044f\u0432\u043a\u0443 \u043d\u0430 \u043d\u0443\u0436\u043d\u0443\u044e \u0440\u0430\u0431\u043e\u0442\u0443"})]}),Object(c.jsxs)("li",{className:"about__item",children:[Object(c.jsx)("h3",{className:"about__item-title",children:"2"}),Object(c.jsx)("p",{className:"about__item-text",children:"\u0414\u043e\u0436\u0434\u0438\u0442\u0435\u0441\u044c \u0441\u0432\u044f\u0437\u0438 \u0441 \u043c\u0430\u0441\u0442\u0435\u0440\u043e\u043c"})]}),Object(c.jsxs)("li",{className:"about__item",children:[Object(c.jsx)("h3",{className:"about__item-title",children:"3"}),Object(c.jsx)("p",{className:"about__item-text",children:"\u041e\u0446\u0435\u043d\u0438\u0442\u0435 \u0432\u044b\u043f\u043e\u043b\u043d\u0435\u043d\u043d\u0443\u044e \u043c\u0430\u0441\u0442\u0435\u0440\u043e\u043c \u0440\u0430\u0431\u043e\u0442\u0443"})]})]})]})}),L=(n(38),function(){return Object(c.jsxs)("section",{className:"poem",children:[Object(c.jsx)("h2",{className:"poem__title",children:"\u0421\u0442\u0438\u0445\u0438 \u0434\u043d\u044f"}),Object(c.jsx)("h3",{className:"poem__subtitle",children:"\u0412\u043b\u0430\u0434\u0438\u043c\u0438\u0440 \u041c\u0430\u044f\u043a\u043e\u0432\u0441\u043a\u0438\u0439"}),Object(c.jsx)("blockquote",{className:"poem__quote",children:Object(c.jsx)("span",{className:"poem__quote-quotes",children:Object(c.jsxs)("p",{className:"poem__quote-text",children:["\u0427\u0443\u0432\u0441\u0442\u0432\u0430 \u0432 \u043a\u0443\u043b\u0430\u043a, \u0432\u043e\u043b\u044e \u0432 \u0443\u0437\u0434\u0443!,",Object(c.jsx)("br",{}),"\u0420\u0430\u0431\u043e\u0447\u0438\u0439, \u0440\u0430\u0431\u043e\u0442\u0430\u0439!, \u2014",Object(c.jsx)("br",{}),"\u041d\u0435 \u043e\u0445\u0430\u0439!,",Object(c.jsx)("br",{}),"\u041d\u0435 \u0430\u0445\u0430\u0439!"]})})})]})}),U=(n(39),function(e){return Object(c.jsx)("button",{className:d()("arrow",{arrow_left:"left"===e.direction,arrow_right:"right"===e.direction}),onClick:e.onArrowClick})}),q=(n(40),n.p+"static/media/review-avatar.02c8b300.jpg"),J=function(e){var t=e.data.rating;return Object(c.jsxs)("li",{className:"review__container",children:[Object(c.jsx)("img",{className:"review__image",src:q,ali:"avatar-path"}),Object(c.jsx)("h2",{className:"review__header",children:e.data.description}),Object(c.jsx)("p",{className:"review__text",children:e.data.feedback?e.data.feedback:"\u041f\u043e\u043a\u0430 \u043d\u0435\u0442 \u043e\u0442\u0437\u044b\u0432\u0430, \u043d\u043e \u0441\u043a\u043e\u0440\u043e \u043e\u043d \u0442\u043e\u0447\u043d\u043e \u043f\u043e\u044f\u0432\u0438\u0442\u0441\u044f, \u0432\u043e\u0442 \u0442\u043e\u0433\u0434\u0430 \u043c\u044b \u0438 \u043f\u043e\u043f\u043b\u044f\u0448\u0435\u043c :-)"}),Object(c.jsx)("p",{className:"review__text-writer",children:e.data.client_name}),Object(c.jsxs)("ul",{className:"review__rating-container",children:[Object(c.jsx)("li",{id:"1",className:d()("review__rating-item",{"review__rating-item_active":t>=1})}),Object(c.jsx)("li",{id:"1",className:d()("review__rating-item",{"review__rating-item_active":t>=2})}),Object(c.jsx)("li",{id:"1",className:d()("review__rating-item",{"review__rating-item_active":t>=3})}),Object(c.jsx)("li",{id:"1",className:d()("review__rating-item",{"review__rating-item_active":t>=4})})]})]})},z=(n(41),function(e){var t=Object(a.useState)([]),n=Object(l.a)(t,2),s=n[0],i=n[1],o=Object(a.useState)(0),r=Object(l.a)(o,2),u=r[0],j=r[1],d=e.loaderOn,p=e.loaderOff,m=e.user,b=T(v,e.token,undefined,m,undefined,d,p).tasksGet;Object(a.useEffect)((function(){b().then((function(e){return i(e)})).catch((function(e){return console.log(e)}))}),[]);return Object(c.jsxs)("section",{className:"reviews",children:[Object(c.jsx)("h2",{className:"reviews__title",children:"\u041e\u0442\u0437\u044b\u0432\u044b"}),Object(c.jsxs)("div",{className:"reviews__container",children:[(!s||0===s.length)&&Object(c.jsx)("p",{className:"reviews__note",children:"\u041f\u043e\u043a\u0430 \u043d\u0435\u0442 \u0440\u0435\u0432\u044c\u044e"}),0!==s.length&&0!==u&&Object(c.jsx)(U,{direction:"left",onArrowClick:function(){0!==u&&j(u-1)}}),0!==s.length&&Object(c.jsx)("ul",{className:"reviews__list",children:s.slice(u,u+2).map((function(e,t){return Object(c.jsx)(J,{data:e},t)}))}),0!==s.length&&u!==s.length-2&&Object(c.jsx)(U,{direction:"right",onArrowClick:function(){u!==s.length-2&&j(u+1)}})]})]})}),F=(n(42),function(){return Object(c.jsx)("footer",{className:"footer",children:Object(c.jsx)("p",{className:"footer__title",children:"\u041e\u041e\u041e \u201c\u0413\u0440\u0430\u0436\u0434\u0430\u043d\u0438\u043d \u041f\u043e\u044d\u0442\u201d 2025"})})}),M=(n(43),function(e){var t=e.name,n=e.label,a=e.optionList,s=e.selectOption;return Object(c.jsx)("select",{className:"select",name:t,label:n,onChange:s,children:a.map((function(e,t){return Object(c.jsx)("option",{className:"select__option",value:t,children:e},t)}))})}),R=(n(44),function(e){return Object(c.jsx)("div",{className:d()("alert-popup__wrapper",{"alert-popup__wrapper_visible":e.visibility}),children:Object(c.jsxs)("section",{className:"alert-popup",children:[Object(c.jsx)("p",{className:"alert-popup__title",children:e.title}),Object(c.jsxs)("div",{className:"alert-popup__button-wrapper",children:[Object(c.jsx)("button",{className:"alert-popup__button alert-popup__button_yes-button",onClick:e.onYesClick,children:"\u0414\u0430"}),Object(c.jsx)("button",{className:"alert-popup__button alert-popup__button_no-button",onClick:e.onNoClick,children:"\u041d\u0435\u0442"})]})]})})}),Y="\u0417\u0430\u044f\u0432\u043a\u0430 \u043d\u0430 \u0440\u0435\u043c\u043e\u043d\u0442",W="\u041c\u043d\u0435 \u043d\u0443\u0436\u043d\u043e",H="\u041f\u043e\u0434\u0440\u043e\u0431\u043d\u0435\u0435, \u0447\u0442\u043e \u043d\u0443\u0436\u043d\u043e",K="\u0412 \u043d\u0435\u0441\u043a\u043e\u043b\u044c\u043a\u0438\u0445 \u0441\u043b\u043e\u0432\u0430\u0445, \u0447\u0442\u043e \u0438\u043c\u0435\u043d\u043d\u043e \u043d\u0443\u0436\u043d\u043e",Q="\u041e\u043f\u0438\u0448\u0438\u0442\u0435 \u0440\u0430\u0431\u043e\u0442\u0443",V="\u0412 \u0440\u0430\u0431\u043e\u0442\u0435",X="\u041e\u0436\u0438\u0434\u0430\u0435\u0442 \u043c\u0430\u0441\u0442\u0435\u0440\u0430",Z="\u0412\u044b\u043f\u043e\u043b\u043d\u0435\u043d\u0430",$="\u0423\u0441\u043b\u0443\u0433\u0430",ee="\u041f\u043e\u0434\u043a\u0430\u0442\u0435\u0433\u043e\u0440\u0438\u044f \u0443\u0441\u043b\u0443\u0433\u0438",te="\u0412\u044b \u0434\u0435\u0439\u0441\u0442\u0432\u0438\u0442\u0435\u043b\u044c\u043d\u043e \u0445\u043e\u0442\u0438\u0442\u0435 \u0443\u0434\u0430\u043b\u0438\u0442\u044c \u0437\u0430\u044f\u0432\u043a\u0443?",ne="\u0412\u044b \u0434\u0435\u0439\u0441\u0442\u0432\u0438\u0442\u0435\u043b\u044c\u043d\u043e \u0445\u043e\u0442\u0438\u0442\u0435 \u043e\u0442\u043c\u0435\u043d\u0438\u0442\u044c \u043e\u0444\u043e\u0440\u043c\u043b\u0435\u043d\u0438\u0435 \u0437\u0430\u044f\u0432\u043a\u0438?",ce=["\u042d\u043b\u0435\u043a\u0442\u0440\u0438\u043a\u0430","\u0421\u0430\u043d\u0442\u0435\u0445\u043d\u0438\u043a\u0430","\u041e\u0442\u0434\u0435\u043b\u043e\u0447\u043d\u044b\u0435 \u0440\u0430\u0431\u043e\u0442\u044b","\u041c\u0435\u0431\u0435\u043b\u044c, \u0434\u0432\u0435\u0440\u0438, \u043e\u043a\u043d\u0430","\u041a\u043e\u043c\u043f\u044c\u044e\u0442\u0435\u0440\u043d\u0430\u044f \u043f\u043e\u043c\u043e\u0449\u044c","\u0423\u0431\u043e\u0440\u043a\u0430"],ae=[["\u0423\u0441\u0442\u0430\u043d\u043e\u0432\u043a\u0430 \u0438\u043b\u0438 \u0437\u0430\u043c\u0435\u043d\u0430 \u0440\u043e\u0437\u0435\u0442\u043e\u043a","\u0420\u0435\u043c\u043e\u043d\u0442 \u044d\u043b\u0435\u043a\u0442\u0440\u043e\u043f\u0440\u043e\u0432\u043e\u0434\u043a\u0438","\u0417\u0430\u043c\u0435\u043d\u0430 \u043e\u0431\u043e\u0440\u0443\u0434\u043e\u0432\u0430\u043d\u0438\u044f","\u0420\u0435\u043c\u043e\u043d\u0442 \u044d\u043b\u0435\u043a\u0442\u0440\u043e\u043f\u0440\u0438\u0431\u043e\u0440\u043e\u0432"],["\u0420\u0435\u043c\u043e\u043d\u0442 \u0441\u0430\u043d\u0442\u0435\u0445\u043d\u0438\u0447\u0435\u0441\u043a\u0438\u0445 \u043f\u0440\u0438\u0431\u043e\u0440\u043e\u0432","\u0423\u0441\u0442\u0430\u043d\u043e\u0432\u043a\u0430 \u0438\u043b\u0438 \u0437\u0430\u043c\u0435\u043d\u0430 \u0441\u0430\u043d\u0442\u0435\u0445\u043d\u0438\u0447\u0435\u0441\u043a\u0438\u0445 \u043f\u0440\u0438\u0431\u043e\u0440\u043e\u0432","\u0423\u0441\u0442\u0440\u0430\u043d\u0435\u043d\u0438\u0435 \u0437\u0430\u0441\u043e\u0440\u043e\u0432 \u0438 \u043f\u0440\u043e\u0447\u0438\u0441\u0442\u043a\u0430 \u0444\u0438\u043b\u044c\u0442\u0440\u043e\u0432","\u0420\u0435\u043c\u043e\u043d\u0442 \u0438\u043b\u0438 \u0437\u0430\u043c\u0435\u043d\u0430 \u0442\u0440\u0443\u0431\u043e\u043f\u0440\u043e\u0432\u043e\u0434\u043e\u0432 \u0438 \u0430\u0440\u043c\u0430\u0442\u0443\u0440\u044b","\u0420\u0435\u043c\u043e\u043d\u0442 \u0438\u043b\u0438 \u0437\u0430\u043c\u0435\u043d\u0430 \u043e\u0442\u043e\u043f\u0438\u0442\u0435\u043b\u044c\u043d\u044b\u0445 \u043f\u0440\u0438\u0431\u043e\u0440\u043e\u0432"],["\u041f\u043e\u043a\u043b\u0435\u0439\u043a\u0430 \u043e\u0431\u043e\u0435\u0432","\u041f\u043e\u043a\u0440\u0430\u0441\u043a\u0430 \u0441\u0442\u0435\u043d \u0438 \u043f\u043e\u0442\u043e\u043b\u043a\u0430","\u0423\u043a\u043b\u0430\u0434\u043a\u0430 \u043f\u043b\u0438\u0442\u043a\u0438","\u041a\u043e\u043c\u043f\u043b\u0435\u043a\u0441\u043d\u0430\u044f \u043f\u043e\u0434\u0433\u043e\u0442\u043e\u0432\u043a\u0430 \u0438 \u043e\u0442\u0434\u0435\u043b\u043a\u0430 \u043f\u043e\u043c\u0435\u0449\u0435\u043d\u0438\u0439"],["\u0421\u0431\u043e\u0440\u043a\u0430 \u043c\u0435\u0431\u0435\u043b\u0438","\u0423\u0441\u0442\u0430\u043d\u043e\u0432\u043a\u0430 \u0434\u0432\u0435\u0440\u0435\u0439","\u0423\u0441\u0442\u0430\u043d\u043e\u0432\u043a\u0430 \u043e\u043a\u043e\u043d","\u041e\u0441\u0442\u0435\u043a\u043b\u0435\u043d\u0438\u0435 \u0431\u0430\u043b\u043a\u043e\u043d\u043e\u0432","\u041d\u0430\u0432\u0435\u0448\u0438\u0432\u0430\u043d\u0438\u0435 \u043f\u043e\u043b\u043e\u043a \u0438 \u0444\u0443\u0440\u043d\u0438\u0442\u0443\u0440\u044b"],["\u041f\u043e\u043c\u043e\u0449\u044c \u0432 \u043f\u043e\u043a\u0443\u043f\u043a\u0435 \u043a\u043e\u043c\u043f\u044c\u044e\u0442\u0435\u0440\u0430","\u0423\u0441\u0442\u0430\u043d\u043e\u0432\u043a\u0430 \u0438 \u0443\u0434\u0430\u043b\u0435\u043d\u0438\u0435 \u043f\u0440\u043e\u0433\u0440\u0430\u043c\u043c","\u0420\u0435\u043c\u043e\u043d\u0442 \u0438 \u0437\u0430\u043c\u0435\u043d\u0430 \u043e\u0431\u043e\u0440\u0443\u0434\u043e\u0432\u0430\u043d\u0438\u044f","\u041f\u043e\u0434\u043a\u043b\u044e\u0447\u0435\u043d\u0438\u0435 \u0438 \u043d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0430 \u0438\u043d\u0442\u0435\u0440\u043d\u0435\u0442\u0430"],["\u041a\u043e\u043c\u043f\u043b\u0435\u043a\u0441\u043d\u0430\u044f \u0443\u0431\u043e\u0440\u043a\u0430 \u043f\u043e\u043c\u0435\u0449\u0435\u043d\u0438\u044f","\u041c\u044b\u0442\u044c\u0435 \u043e\u043a\u043e\u043d","\u041f\u0440\u0430\u0447\u0435\u0447\u043d\u0430\u044f"]],se="\u0421\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u044c",ie="\u0423\u0434\u0430\u043b\u0438\u0442\u044c",oe="\u041e\u0442\u043f\u0440\u0430\u0432\u0438\u0442\u044c",re=(n(45),function(e){var t=Object(a.useState)(!1),n=Object(l.a)(t,2),s=n[0],i=n[1],o=Object(a.useState)(0),r=Object(l.a)(o,2),j=r[0],p=r[1],b=Object(a.useState)(0),h=Object(l.a)(b,2),f=h[0],_=h[1],O=Object(a.useState)(0),k=Object(l.a)(O,2),x=k[0],g=k[1],N=e.user,y={type:j,subtype:f,description:x},w=e.loaderOn,C=e.loaderOff,S=Object(u.g)(),P=T(v,e.token,y,N,undefined,w,C).taskCreate,A=function(e){e&&e.preventDefault(),i(!0)};return Object(c.jsx)("div",{className:d()("task-form-wrapper",{"task-form-wrapper_visible":e.visibility}),onClick:function(e){!e.target.closest(".task-form")&&A()},children:Object(c.jsxs)("form",{className:"task-form",children:[Object(c.jsx)("h2",{className:"task-form__title",children:Y}),Object(c.jsxs)("ul",{className:"task-form__list",children:[Object(c.jsxs)("li",{className:"task-form__list-item",children:[Object(c.jsx)("p",{className:"task-form__field-note",children:W}),Object(c.jsx)(M,{name:"work-type",label:$,optionList:ce,selectOption:function(e){p(e.target.value),_(0)}})]}),Object(c.jsxs)("li",{className:"task-form__list-item",children:[Object(c.jsx)("p",{className:"task-form__field-note",children:H}),Object(c.jsx)(M,{name:"work-subtype",label:ee,optionList:ae[j],selectOption:function(e){_(e.target.value)}})]}),Object(c.jsxs)("li",{className:"task-form__list-item",children:[Object(c.jsx)("p",{className:"task-form__field-note",children:K}),Object(c.jsx)("textarea",{name:"description",rows:"4",className:"task-form__field-item",placeholder:Q,onChange:function(e){g(e.target.value)}})]})]}),Object(c.jsx)("p",{className:"task-form__field-note",children:"\u0412\u0430\u0448\u0438 \u0438\u043c\u044f, \u0442\u0435\u043b\u0435\u0444\u043e\u043d \u0438 email \u0431\u0443\u0434\u0443\u0442 \u0443\u043a\u0430\u0437\u0430\u043d\u044b \u0432 \u0437\u0430\u044f\u0432\u043a\u0435"}),Object(c.jsx)("button",{className:"task-form__submit-button",onClick:function(t){t.preventDefault(),P().then((function(e){console.log(e)})).catch((function(e){e.json().then((function(e){return console.log(e)}))})),S.replace("/my-tasks"),e.formClose()},children:oe}),Object(c.jsx)(m,{onPress:A}),Object(c.jsx)(R,{visibility:s,title:ne,onYesClick:function(t){t.preventDefault(),i(!1),e.formClose()},onNoClick:function(e){e.preventDefault(),i(!1)}})]})})}),le="\u041c\u043e\u0438 \u0437\u0430\u044f\u0432\u043a\u0438",ue="\u0423 \u0432\u0430\u0441 \u043f\u043e\u043a\u0430 \u043d\u0435\u0442 \u0437\u0430\u044f\u0432\u043e\u043a",je="\u0420\u0430\u0437\u043c\u0435\u0449\u0435\u043d\u0430",de="\u041f\u0440\u0438\u043d\u044f\u0442\u0430",pe="\u0412\u044b\u043f\u043e\u043b\u043d\u0435\u043d\u0430",me=n.p+"static/media/about_bgi.6cb1ec04.svg",be=(n(46),function(e){var t=e.task.accepted&&e.task.completed?pe:e.task.accepted?de:je,n=ae[e.task.type][e.task.subtype],a=e.task.created_at.slice(0,10);return Object(c.jsxs)("li",{className:"mytasks__item",id:e.number,onClick:e.onTaskShow,children:[Object(c.jsx)("p",{className:"mytasks__item-worktitle",children:"\u0412\u0438\u0434 \u0440\u0430\u0431\u043e\u0442\u044b"}),Object(c.jsx)("h3",{className:"mytasks__name",children:n}),Object(c.jsx)("p",{className:"mytasks__item-title",children:"\u0414\u0430\u0442\u0430 \u0441\u043e\u0437\u0434\u0430\u043d\u0438\u044f"}),Object(c.jsx)("time",{className:"mytasks__date",children:a}),Object(c.jsx)("p",{className:"mytasks__item-title",children:"\u041e\u043f\u0438\u0441\u0430\u043d\u0438\u0435 \u0440\u0430\u0431\u043e\u0442\u044b"}),Object(c.jsx)("time",{className:"mytasks__description",children:e.task.description}),Object(c.jsxs)("div",{className:"mytasks__status-wrapper",children:[Object(c.jsx)("p",{className:"mytasks__status",children:"\u0421\u0442\u0430\u0442\u0443\u0441"}),Object(c.jsx)("p",{className:"mytasks__status mytasks__status_type",children:t})]}),Object(c.jsx)("img",{className:"mytasks__label",src:me,alt:"label"})]})}),he=function(e,t){var n=document.querySelector(".loader__wrapper");return{quoteSearch:function(){return n.classList.add("loader__wrapper_visible"),fetch("".concat(e,"?q=").concat(t,"&onlyLines=50"),{redirect:"follow",method:"GET",headers:{Accept:"application/json","Content-Type":"application/json"}}).then((function(e){return n.classList.remove("loader__wrapper_visible"),e.ok?e.json():Promise.reject(e)})).then((function(e){if(e&&0!==e.length)return 1===e.length?e[0].fields.text:e[Math.round(Math.random()*(e.length-1))].fields.text})).catch((function(e){return console.log(e)}))}}},fe=["\u041f\u043e\u043a\u0430 \u043d\u0435\u0442 \u043e\u0442\u0437\u044b\u0432\u043e\u0432 \u043e \u0440\u0430\u0431\u043e\u0442\u0435",["\u0423\u0436\u0430\u0441\u043d\u043e","\u041a\u043e\u0448\u043c\u0430\u0440\u043d\u043e","\u041f\u043b\u043e\u0445\u043e"],["\u0425\u043e\u0440\u043e\u0448\u043e","\u041f\u0440\u0438\u043b\u0435\u0436\u043d\u043e","\u041d\u0435\u043f\u043b\u043e\u0445\u043e"],["\u0417\u0434\u043e\u0440\u043e\u0432\u043e","\u041e\u0442\u043b\u0438\u0447\u043d\u043e"],["\u041f\u0440\u0435\u043a\u0440\u0430\u0441\u043d\u043e","\u0412\u0435\u043b\u0438\u043a\u043e\u043b\u0435\u043f\u043d\u043e"]],_e=n.p+"static/media/popup-label.3ec26d83.svg",Oe=(n(47),function(e){var t=Object(a.useState)("not-confirmed"),n=Object(l.a)(t,2),s=n[0],i=n[1],o=Object(a.useState)(!1),r=Object(l.a)(o,2),u=r[0],j=r[1],p=Object(a.useState)(""),b=Object(l.a)(p,2),h=b[0],f=b[1],_=Object(a.useState)(0),O=Object(l.a)(_,2),k=O[0],x=O[1],g=Object(a.useState)(""),N=Object(l.a)(g,2),w=N[0],C=N[1],S=e.currentTask.created_at.slice(0,10),P=ae[e.currentTask.type],A=e.currentTask,E=e.loaderOn,D=e.loaderOff,I=T(v,e.token,A,e.user,undefined,E,D),G=I.taskUpdate,B=I.taskDelete,L=he(y,h).quoteSearch;Object(a.useEffect)((function(){x(e.currentTask.rating)}),[e.currentTask]),Object(a.useEffect)((function(){var e=fe[k],t=0==k?fe[0]:e[Math.round(Math.random()*(e.length-1))];f(t)}),[k]),Object(a.useEffect)((function(){0==k&&C(h),L().then((function(e){e&&C(e)}))}),[h]);var U=function(e){e.target.id==k?x(e.target.id-1):x(e.target.id)};return Object(c.jsx)("div",{className:d()("task-card__wrapper",{"task-card__wrapper_visible":e.visibility}),onClick:function(t){t.preventDefault(),!t.target.closest(".task-card")&&e.onClose()},children:Object(c.jsxs)("section",{className:"task-card",children:[Object(c.jsx)("h2",{className:"task-card__title",children:P[e.currentTask.subtype]}),Object(c.jsx)("p",{className:"task-card__create-data",children:S}),Object(c.jsx)("p",{className:"task-card__description",children:e.currentTask.description}),Object(c.jsx)("button",{className:"task-card__confirm-button",onClick:function(){i("not-confirmed"===s?"confirmed":"confirmed"===s?"done":"not-confirmed")},children:"not-confirmed"===s?X:"confirmed"===s?V:Z}),Object(c.jsxs)("ul",{className:"task-card__rating-container",children:[Object(c.jsx)("li",{id:"1",className:d()("task-card__rating-item",{"task-card__rating-item_active":k>=1}),onClick:U}),Object(c.jsx)("li",{id:"2",className:d()("task-card__rating-item",{"task-card__rating-item_active":k>=2}),onClick:U}),Object(c.jsx)("li",{id:"3",className:d()("task-card__rating-item",{"task-card__rating-item_active":k>=3}),onClick:U}),Object(c.jsx)("li",{id:"4",className:d()("task-card__rating-item",{"task-card__rating-item_active":4==k}),onClick:U})]}),Object(c.jsxs)("div",{className:"task-card__button-wrapper",children:[Object(c.jsx)("button",{className:"task-card__button task-card__button_save-button",onClick:function(t){t.preventDefault(),A.feedback=w,A.rating=k,"not-confirmed"===s?(A.accepted=!1,A.completed=!1):"confirmed"===s?(A.accepted=!0,A.completed=!1):"done"===s&&(A.accepted=!0,A.completed=!0),G().then((function(e){return console.log(e)})).catch((function(e){return console.log(e)})),e.onClose()},children:se}),Object(c.jsx)("button",{className:"task-card__button task-card__button_delete-button",onClick:function(){j(!0)},children:ie})]}),Object(c.jsx)(m,{onPress:e.onClose}),Object(c.jsx)(R,{visibility:u,title:te,onYesClick:function(t){t.preventDefault(),B().then((function(e){return console.log(e)})).catch((function(e){return console.log(e)})),j(!1),e.onClose()},onNoClick:function(e){e.preventDefault(),j(!1)}}),Object(c.jsx)("img",{className:"task-card__label",src:_e,alt:"task-card-label"})]})})}),ke=(n(48),function(e){var t=Object(a.useState)([]),n=Object(l.a)(t,2),s=n[0],i=n[1],o=Object(a.useState)(!1),r=Object(l.a)(o,2),u=r[0],j=r[1],d=Object(a.useState)([]),p=Object(l.a)(d,2),m=p[0],b=p[1],h=e.loaderOn,f=e.loaderOff,_=T(v,e.token,undefined,e.user,undefined,h,f).tasksGetByClient;Object(a.useEffect)((function(){!e.token&&!e.user.username&&i([]),_().then((function(e){i(e)}))}),[]);var O=function(e){b(s[e.target.id]),j(!0)};return Object(c.jsxs)("section",{className:"mytasks",children:[Object(c.jsx)("div",{className:"mytasks__container",children:Object(c.jsx)("h2",{className:"mytasks__title",children:le})}),Object(c.jsx)("ul",{className:"mytasks__list",children:0===s.length?Object(c.jsx)("p",{className:"mytasks__empty-note",children:ue}):s.map((function(e,t){return Object(c.jsx)(be,{number:t,onTaskShow:O,task:e},t)}))}),0!==m.length&&Object(c.jsx)(Oe,{visibility:u,currentTask:m,onClose:function(){j(!1)},token:e.token,user:e.user,loaderOn:h,loaderOff:f})]})}),xe=n(19),ge=n(20),Ne=function(e){var t=e.component,n=Object(ge.a)(e,["component"]);return Object(c.jsx)(u.b,{children:function(){return n.loggedIn?Object(c.jsx)(t,Object(xe.a)({},n)):Object(c.jsx)(u.a,{to:"./"})}})};n(49);var ve=function(){var e=Object(a.useState)(!1),t=Object(l.a)(e,2),n=t[0],s=t[1],i=Object(a.useState)({id:void 0,username:void 0,userphone:void 0,email:void 0}),o=Object(l.a)(i,2),r=o[0],j=o[1],p=Object(a.useState)(!1),m=Object(l.a)(p,2),b=m[0],h=m[1],f=Object(a.useState)(!1),_=Object(l.a)(f,2),O=_[0],k=_[1],x=Object(u.g)(),g=JSON.parse(localStorage.getItem("jwt"));Object(a.useEffect)((function(){x.push("/")}),[]);var N=function(){s(!1)},v=function(){k(!0)},y=function(){k(!1)};return Object(c.jsxs)("div",{className:"App",children:[Object(c.jsx)(S,{setUser:function(e){localStorage.setItem("jwt",JSON.stringify(e.jwt)),j({id:e.user.id,username:e.user.username,userphone:e.user.userphone,email:e.user.email}),h(!0)},user:r,loggedIn:b,logout:function(e){localStorage.removeItem("jwt"),j({id:void 0,username:void 0,userphone:void 0,email:void 0}),h(!1)},loaderOn:v,loaderOff:y}),Object(c.jsx)(G,{showTaskForm:function(){s(!0)},hideTaskForm:N,user:r,loggedIn:b}),Object(c.jsxs)(u.d,{children:[Object(c.jsxs)(u.b,{exact:!0,path:"/",children:[Object(c.jsx)(B,{}),Object(c.jsx)(L,{}),Object(c.jsx)(z,{loaderOn:v,loaderOff:y})]}),Object(c.jsx)(Ne,{path:"/my-tasks",loggedIn:b,component:ke,user:r,token:g,loaderOn:v,loaderOff:y})]}),Object(c.jsx)(F,{}),Object(c.jsx)(re,{visibility:n,formClose:N,user:r,token:g,loaderOn:v,loaderOff:y}),Object(c.jsx)("div",{className:d()("loader__wrapper",{loader__wrapper_visible:!0===O}),children:Object(c.jsx)("div",{className:"loader"})})]})},ye=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,51)).then((function(t){var n=t.getCLS,c=t.getFID,a=t.getFCP,s=t.getLCP,i=t.getTTFB;n(e),c(e),a(e),s(e),i(e)}))};o.a.render(Object(c.jsx)(s.a.StrictMode,{children:Object(c.jsx)(r.a,{children:Object(c.jsx)(ve,{})})}),document.getElementById("root")),ye()}]),[[50,1,2]]]);
//# sourceMappingURL=main.2e266c3f.chunk.js.map