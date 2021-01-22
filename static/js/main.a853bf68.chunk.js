(this.webpackJsonpreact_pizza=this.webpackJsonpreact_pizza||[]).push([[0],{49:function(e,t,c){},69:function(e,t,c){"use strict";c.r(t);var s=c(0),a=c(1),n=c.n(a),i=c(18),r=c.n(i),o=c(11),l=c(6),d=(c(49),c(4)),j=c(15),b=c.n(j);var u=function(e){return Object(s.jsx)("button",{onClick:e.onClick,className:b()("button",e.className,{"button--outline":e.outline}),children:e.children})},h=n.a.memo((function(e){var t=e.activeCategory,c=e.categoryNames,a=e.onClickCategory;return Object(s.jsx)("div",{className:"categories",children:Object(s.jsxs)("ul",{children:[Object(s.jsx)("li",{className:null===t?"active":"",onClick:function(){a(null)},children:"\u0412\u0441\u0435"}),c&&c.map((function(e,c){return Object(s.jsx)("li",{className:t===c?"active":"",onClick:function(){a(c)},children:e},"".concat(e,"_").concat(c))}))]})})})),O=c.p+"static/media/pizza-logo.56ac8703.svg",m=c(25),x="SET_LOADED",p="SET_PIZZAS",_="SET_SORT_BY",v="SET_CATEGORY",f="SET_TOTAL_PRICE",C="SET_TOTAL_COUNT",z="SET_COUNT",g="ADD_PIZZA_TO_CART",k="ON_CLEAR_CART",N="ON_REMOVE_PIZZA",y=function(e){return{type:x,payload:e}},w=function(e){return{type:p,payload:e}},L=function(e){return{type:C,payload:e}},I=function(){return{type:k}};var P=function(){var e=Object(l.b)(),t=Object(l.c)((function(e){return e}));return n.a.useEffect((function(){e(L(t.cartItems.selectedPizzas.reduce((function(e,t){return e+t.count}),0)))}),[e,t.cartItems.selectedPizzas]),Object(s.jsx)("div",{className:"header",children:Object(s.jsxs)("div",{className:"container",children:[Object(s.jsx)(o.b,{to:"/",children:Object(s.jsxs)("div",{className:"header__logo",children:[Object(s.jsx)("img",{width:"38",src:O,alt:"Pizza logo"}),Object(s.jsxs)("div",{children:[Object(s.jsx)("h1",{children:"React Pizza"}),Object(s.jsx)("p",{children:"\u0441\u0430\u043c\u0430\u044f \u0432\u043a\u0443\u0441\u043d\u0430\u044f \u043f\u0438\u0446\u0446\u0430 \u0432\u043e \u0432\u0441\u0435\u043b\u0435\u043d\u043d\u043e\u0439"})]})]})}),Object(s.jsx)("div",{className:"header__cart",children:Object(s.jsx)(o.b,{to:"/cart",children:Object(s.jsxs)(u,{href:"/cart.html",className:"button--cart",children:[Object(s.jsxs)("svg",{width:"18",height:"18",viewBox:"0 0 18 18",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[Object(s.jsx)("path",{d:"M6.33333 16.3333C7.06971 16.3333 7.66667 15.7364 7.66667 15C7.66667 14.2636 7.06971 13.6667 6.33333 13.6667C5.59695 13.6667 5 14.2636 5 15C5 15.7364 5.59695 16.3333 6.33333 16.3333Z",stroke:"white",strokeWidth:"1.8",strokeLinecap:"round",strokeLinejoin:"round"}),Object(s.jsx)("path",{d:"M14.3333 16.3333C15.0697 16.3333 15.6667 15.7364 15.6667 15C15.6667 14.2636 15.0697 13.6667 14.3333 13.6667C13.597 13.6667 13 14.2636 13 15C13 15.7364 13.597 16.3333 14.3333 16.3333Z",stroke:"white",strokeWidth:"1.8",strokeLinecap:"round",strokeLinejoin:"round"}),Object(s.jsx)("path",{d:"M4.78002 4.99999H16.3334L15.2134 10.5933C15.1524 10.9003 14.9854 11.176 14.7417 11.3722C14.4979 11.5684 14.1929 11.6727 13.88 11.6667H6.83335C6.50781 11.6694 6.1925 11.553 5.94689 11.3393C5.70128 11.1256 5.54233 10.8295 5.50002 10.5067L4.48669 2.82666C4.44466 2.50615 4.28764 2.21182 4.04482 1.99844C3.80201 1.78505 3.48994 1.66715 3.16669 1.66666H1.66669",stroke:"white",strokeWidth:"1.8",strokeLinecap:"round",strokeLinejoin:"round"})]}),Object(s.jsx)("div",{className:"button__delimiter"}),Object(s.jsx)("span",{children:t.cartItems.totalCount})]})})})]})})},E=c(38);var S=function(){return Object(s.jsxs)(E.a,{speed:2,width:280,height:460,viewBox:"0 0 280 460",backgroundColor:"#f3f3f3",foregroundColor:"#ecebeb",children:[Object(s.jsx)("circle",{cx:"132",cy:"142",r:"115"}),Object(s.jsx)("rect",{x:"0",y:"273",rx:"6",ry:"6",width:"280",height:"26"}),Object(s.jsx)("rect",{x:"0",y:"310",rx:"6",ry:"6",width:"280",height:"84"}),Object(s.jsx)("rect",{x:"0",y:"418",rx:"6",ry:"6",width:"91",height:"31"}),Object(s.jsx)("rect",{x:"137",y:"408",rx:"25",ry:"25",width:"140",height:"46"})]})};function B(e){var t=e.price;return Object(s.jsxs)("div",{className:"pizza-block",children:[Object(s.jsxs)(o.b,{to:"/product/".concat(e.id),children:[Object(s.jsx)("img",{className:"pizza-block__image",src:e.imageUrl,alt:"Pizza"}),Object(s.jsx)("h4",{className:"pizza-block__title",children:e.name})]}),Object(s.jsxs)("div",{className:"pizza-block__bottom",children:[Object(s.jsxs)("div",{className:"pizza-block__rating",children:[Object(s.jsx)("div",{className:"pizza-block__rating-svg",children:Object(s.jsx)("svg",{width:"20px",height:"20px",children:Object(s.jsx)("path",{d:"M0,0.054V20h21V0.054H0z M15.422,18.129l-5.264-2.768l-5.265,2.768l1.006-5.863L1.64,8.114l5.887-0.855 l2.632-5.334l2.633,5.334l5.885,0.855l-4.258,4.152L15.422,18.129z"})})}),Object(s.jsx)("div",{className:"pizza-block__rating-text",children:e.rating})]}),Object(s.jsxs)("div",{className:"pizza-block__price",children:["\u043e\u0442 ",t," \u0440\u0443\u0431."]})]})]})}B.defaultProps={name:"",imageUrl:"",price:0,types:[],sizes:[]};var M=B,V=c(17),A=n.a.memo((function(e){var t=e.activeSortIndex,c=e.onClickSortBy,a=e.sortItems,i=n.a.useState(!1),r=Object(V.a)(i,2),o=r[0],l=r[1],d=!o,j=n.a.useRef(),b=a[t],u=function(e){(e.path||e.composedPath&&e.composedPath()).includes(j.current)||l(!1)};return n.a.useEffect((function(){document.body.addEventListener("click",u)}),[d]),Object(s.jsxs)("div",{ref:j,className:"sort",children:[Object(s.jsxs)("div",{className:"sort__label",children:[Object(s.jsx)("svg",{className:o?"rotated":"",width:"10",height:"6",viewBox:"0 0 10 6",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:Object(s.jsx)("path",{d:"M10 5C10 5.16927 9.93815 5.31576 9.81445 5.43945C9.69075 5.56315 9.54427 5.625 9.375 5.625H0.625C0.455729 5.625 0.309245 5.56315 0.185547 5.43945C0.061849 5.31576 0 5.16927 0 5C0 4.83073 0.061849 4.68424 0.185547 4.56055L4.56055 0.185547C4.68424 0.061849 4.83073 0 5 0C5.16927 0 5.31576 0.061849 5.43945 0.185547L9.81445 4.56055C9.93815 4.68424 10 4.83073 10 5Z",fill:"#2C2C2C"})}),Object(s.jsx)("b",{children:"\u0421\u043e\u0440\u0442\u0438\u0440\u043e\u0432\u043a\u0430 \u043f\u043e:"}),Object(s.jsx)("span",{onClick:function(){return l(!o)},children:b})]}),o&&Object(s.jsx)("div",{className:"sort__popup",children:Object(s.jsx)("ul",{children:a&&a.map((function(e,a){return Object(s.jsx)("li",{className:t===a?"active":"",onClick:function(){c(a),l(!1)},children:e},"".concat(e,"_").concat(a))}))})})]})})),T=c(2);var Z=function(){var e=Object(l.b)(),t=Object(l.c)((function(e){return e}));return n.a.useEffect((function(){var c,s;e((c=t.category,s=t.activeSortIndex,function(e){e(y(!1)),m.get("http://localhost:3001/pizzas?".concat(null!=c?"category=".concat(c,"&"):"","_sort=").concat(0===s?"rating&_order=desc":1===s?"price&_order=asc":2===s?"price&_order=desc":3===s?"name&_order=asc":4===s?"name&_order=desc":"","\n")).then((function(t){var c=t.data;e(w(c))}))}))}),[e,t.category,t.activeSortIndex]),Object(s.jsxs)("div",{className:"container",children:[Object(s.jsxs)("div",{className:"content__top",children:[Object(s.jsx)(h,{activeCategory:t.category,onClickCategory:function(t){e({type:v,payload:t})},categoryNames:t.categoryNames}),Object(s.jsx)(A,{activeSortIndex:t.activeSortIndex,onClickSortBy:function(t){e({type:_,payload:t})},sortItems:t.sortItems})]}),Object(s.jsx)("h2",{className:"content__title",children:"\u0412\u0441\u0435 \u043f\u0438\u0446\u0446\u044b"}),Object(s.jsx)("div",{className:"content__items",children:t.isLoaded?t.items.map((function(e){return Object(s.jsx)(M,Object(T.a)({},e),e.id)})):Object(s.jsx)(S,{})})]})};var H=function(e){var t=e.id,c=e.count,a=e.imageUrl,n=e.name,i=e.price,r=e.type,o=e.size,l=e.indexItem,d=e.onRemoveSelectedPizza,j=e.onPlusSelectedPizza,b=e.onMinusSelectedPizza,h=i*c;return Object(s.jsxs)("div",{className:"cart__item",children:[Object(s.jsx)("div",{className:"cart__item-img",children:Object(s.jsx)("img",{className:"pizza-block__image",src:a,alt:"Pizza"})}),Object(s.jsxs)("div",{className:"cart__item-info",children:[Object(s.jsx)("h3",{children:n}),Object(s.jsxs)("p",{children:[r," \u0442\u0435\u0441\u0442\u043e, ",o," \u0441\u043c."]})]}),Object(s.jsxs)("div",{className:"cart__item-count",children:[Object(s.jsx)("div",{onClick:function(){b(c,l)},className:"button button--outline button--circle cart__item-count-minus",children:Object(s.jsxs)("svg",{width:"10",height:"10",viewBox:"0 0 10 10",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[Object(s.jsx)("path",{d:"M5.92001 3.84V5.76V8.64C5.92001 9.17016 5.49017 9.6 4.96001 9.6C4.42985 9.6 4.00001 9.17016 4.00001 8.64L4 5.76L4.00001 3.84V0.96C4.00001 0.42984 4.42985 0 4.96001 0C5.49017 0 5.92001 0.42984 5.92001 0.96V3.84Z",fill:"#EB5A1E"}),Object(s.jsx)("path",{d:"M5.75998 5.92001L3.83998 5.92001L0.959977 5.92001C0.429817 5.92001 -2.29533e-05 5.49017 -2.29301e-05 4.96001C-2.2907e-05 4.42985 0.429817 4.00001 0.959977 4.00001L3.83998 4L5.75998 4.00001L8.63998 4.00001C9.17014 4.00001 9.59998 4.42985 9.59998 4.96001C9.59998 5.49017 9.17014 5.92001 8.63998 5.92001L5.75998 5.92001Z",fill:"#EB5A1E"})]})}),Object(s.jsx)("input",{className:"cart__item-input",id:"cart__".concat(t),value:c}),Object(s.jsx)("div",{onClick:function(){j(c,l)},className:"button button--outline button--circle cart__item-count-plus",children:Object(s.jsxs)("svg",{width:"10",height:"10",viewBox:"0 0 10 10",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[Object(s.jsx)("path",{d:"M5.92001 3.84V5.76V8.64C5.92001 9.17016 5.49017 9.6 4.96001 9.6C4.42985 9.6 4.00001 9.17016 4.00001 8.64L4 5.76L4.00001 3.84V0.96C4.00001 0.42984 4.42985 0 4.96001 0C5.49017 0 5.92001 0.42984 5.92001 0.96V3.84Z",fill:"#EB5A1E"}),Object(s.jsx)("path",{d:"M5.75998 5.92001L3.83998 5.92001L0.959977 5.92001C0.429817 5.92001 -2.29533e-05 5.49017 -2.29301e-05 4.96001C-2.2907e-05 4.42985 0.429817 4.00001 0.959977 4.00001L3.83998 4L5.75998 4.00001L8.63998 4.00001C9.17014 4.00001 9.59998 4.42985 9.59998 4.96001C9.59998 5.49017 9.17014 5.92001 8.63998 5.92001L5.75998 5.92001Z",fill:"#EB5A1E"})]})})]}),Object(s.jsxs)("div",{className:"cart__item-price",children:[Object(s.jsx)("b",{id:"cart__".concat(t,"-totalPrice"),children:h}),Object(s.jsx)("b",{children:" \u0440\u0443\u0431."})]}),Object(s.jsx)("div",{className:"cart__item-remove",children:Object(s.jsx)(u,{onClick:function(){d(t)},className:"button--circle",outline:!0,children:Object(s.jsxs)("svg",{width:"10",height:"10",viewBox:"0 0 10 10",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[Object(s.jsx)("path",{d:"M5.92001 3.84V5.76V8.64C5.92001 9.17016 5.49017 9.6 4.96001 9.6C4.42985 9.6 4.00001 9.17016 4.00001 8.64L4 5.76L4.00001 3.84V0.96C4.00001 0.42984 4.42985 0 4.96001 0C5.49017 0 5.92001 0.42984 5.92001 0.96V3.84Z",fill:"#EB5A1E"}),Object(s.jsx)("path",{d:"M5.75998 5.92001L3.83998 5.92001L0.959977 5.92001C0.429817 5.92001 -2.29533e-05 5.49017 -2.29301e-05 4.96001C-2.2907e-05 4.42985 0.429817 4.00001 0.959977 4.00001L3.83998 4L5.75998 4.00001L8.63998 4.00001C9.17014 4.00001 9.59998 4.42985 9.59998 4.96001C9.59998 5.49017 9.17014 5.92001 8.63998 5.92001L5.75998 5.92001Z",fill:"#EB5A1E"})]})})})]})},R=c.p+"static/media/empty-cart.db905d1f.png";var U=function(){var e=Object(l.b)(),t=Object(l.c)((function(e){return e}));n.a.useEffect((function(){var c;e((c=t.cartItems.selectedPizzas.reduce((function(e,t){return e+t.price*t.count}),0),{type:f,payload:c}))}),[e,t.cartItems.selectedPizzas]),n.a.useEffect((function(){e(L(t.cartItems.selectedPizzas.reduce((function(e,t){return e+t.count}),0)))}),[e,t.cartItems.selectedPizzas]);var c=function(e,t){e<=1?e=1:e--,i(e,t)},a=function(e,t){e>=10?e=10:e++,i(e,t)},i=function(t,c){e({type:z,payload:{count:t,indexItem:c}})},r=function(t){return e(function(e){return{type:N,payload:e}}(t))};return Object(s.jsx)("div",{className:"container container--cart",children:t.cartItems.totalCount>0?Object(s.jsxs)("div",{className:"cart",children:[Object(s.jsxs)("div",{className:"cart__top",children:[Object(s.jsxs)("h2",{className:"content__title",children:[Object(s.jsxs)("svg",{width:"18",height:"18",viewBox:"0 0 18 18",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[Object(s.jsx)("path",{d:"M6.33333 16.3333C7.06971 16.3333 7.66667 15.7364 7.66667 15C7.66667 14.2636 7.06971 13.6667 6.33333 13.6667C5.59695 13.6667 5 14.2636 5 15C5 15.7364 5.59695 16.3333 6.33333 16.3333Z",stroke:"white",strokeWidth:"1.8",strokeLinecap:"round",strokeLinejoin:"round"}),Object(s.jsx)("path",{d:"M14.3333 16.3333C15.0697 16.3333 15.6667 15.7364 15.6667 15C15.6667 14.2636 15.0697 13.6667 14.3333 13.6667C13.597 13.6667 13 14.2636 13 15C13 15.7364 13.597 16.3333 14.3333 16.3333Z",stroke:"white",strokeWidth:"1.8",strokeLinecap:"round",strokeLinejoin:"round"}),Object(s.jsx)("path",{d:"M4.78002 4.99999H16.3334L15.2134 10.5933C15.1524 10.9003 14.9854 11.176 14.7417 11.3722C14.4979 11.5684 14.1929 11.6727 13.88 11.6667H6.83335C6.50781 11.6694 6.1925 11.553 5.94689 11.3393C5.70128 11.1256 5.54233 10.8295 5.50002 10.5067L4.48669 2.82666C4.44466 2.50615 4.28764 2.21182 4.04482 1.99844C3.80201 1.78505 3.48994 1.66715 3.16669 1.66666H1.66669",stroke:"white",strokeWidth:"1.8",strokeLinecap:"round",strokeLinejoin:"round"})]}),"\u041a\u043e\u0440\u0437\u0438\u043d\u0430"]}),Object(s.jsxs)("div",{className:"cart__clear",children:[Object(s.jsxs)("svg",{width:"20",height:"20",viewBox:"0 0 20 20",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[Object(s.jsx)("path",{d:"M2.5 5H4.16667H17.5",stroke:"#B6B6B6",strokeWidth:"1.2",strokeLinecap:"round",strokeLinejoin:"round"}),Object(s.jsx)("path",{d:"M6.66663 5.00001V3.33334C6.66663 2.89131 6.84222 2.46739 7.15478 2.15483C7.46734 1.84227 7.89127 1.66667 8.33329 1.66667H11.6666C12.1087 1.66667 12.5326 1.84227 12.8451 2.15483C13.1577 2.46739 13.3333 2.89131 13.3333 3.33334V5.00001M15.8333 5.00001V16.6667C15.8333 17.1087 15.6577 17.5326 15.3451 17.8452C15.0326 18.1577 14.6087 18.3333 14.1666 18.3333H5.83329C5.39127 18.3333 4.96734 18.1577 4.65478 17.8452C4.34222 17.5326 4.16663 17.1087 4.16663 16.6667V5.00001H15.8333Z",stroke:"#B6B6B6",strokeWidth:"1.2",strokeLinecap:"round",strokeLinejoin:"round"}),Object(s.jsx)("path",{d:"M8.33337 9.16667V14.1667",stroke:"#B6B6B6",strokeWidth:"1.2",strokeLinecap:"round",strokeLinejoin:"round"}),Object(s.jsx)("path",{d:"M11.6666 9.16667V14.1667",stroke:"#B6B6B6",strokeWidth:"1.2",strokeLinecap:"round",strokeLinejoin:"round"})]}),Object(s.jsx)("span",{onClick:function(){return e(I())},children:"\u041e\u0447\u0438\u0441\u0442\u0438\u0442\u044c \u043a\u043e\u0440\u0437\u0438\u043d\u0443"})]})]}),Object(s.jsx)("div",{className:"content__items",children:t.cartItems.selectedPizzas.map((function(e,t){return Object(s.jsx)(H,Object(T.a)(Object(T.a)({indexItem:t},e),{},{onRemoveSelectedPizza:r,onPlusSelectedPizza:a,onMinusSelectedPizza:c,onSetCountPizza:i}),t)}))}),Object(s.jsxs)("div",{className:"cart__bottom",children:[Object(s.jsxs)("div",{className:"cart__bottom-details",children:[Object(s.jsxs)("span",{children:["\u0412\u0441\u0435\u0433\u043e \u043f\u0438\u0446\u0446: ",Object(s.jsxs)("b",{children:[t.cartItems.totalCount," \u0448\u0442."]})]}),Object(s.jsxs)("span",{children:["\u0421\u0443\u043c\u043c\u0430 \u0437\u0430\u043a\u0430\u0437\u0430: ",Object(s.jsxs)("b",{children:[t.cartItems.totalPrice," \u0440\u0443\u0431."]})]})]}),Object(s.jsxs)("div",{className:"cart__bottom-buttons",children:[Object(s.jsxs)(o.b,{to:"/",className:"button button--outline button--add go-back-btn",children:[Object(s.jsx)("svg",{width:"8",height:"14",viewBox:"0 0 8 14",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:Object(s.jsx)("path",{d:"M7 13L1 6.93015L6.86175 1",stroke:"#D3D3D3",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})}),Object(s.jsx)("span",{children:"\u0412\u0435\u0440\u043d\u0443\u0442\u044c\u0441\u044f \u043d\u0430\u0437\u0430\u0434"})]}),Object(s.jsx)(u,{onClick:function(){alert("Payment was successful.\nYou ordered: \n".concat(t.cartItems.selectedPizzas.map((function(e){return e.id+"....."+e.count*e.price+"\n"}))," \u043d\u0430 \u0441\u0443\u043c\u043c\u0443 ").concat(t.cartItems.selectedPizzas.reduce((function(e,t){return e+t.count*t.price}),0))),e(I())},className:"pay-btn",children:Object(s.jsx)("span",{children:"\u041e\u043f\u043b\u0430\u0442\u0438\u0442\u044c \u0441\u0435\u0439\u0447\u0430\u0441"})})]})]})]}):Object(s.jsxs)("div",{className:"cart cart--empty",children:[Object(s.jsx)("h2",{children:"\u041a\u043e\u0440\u0437\u0438\u043d\u0430 \u043f\u0443\u0441\u0442\u0430\u044f"}),Object(s.jsxs)("p",{children:["\u0412\u0435\u0440\u043e\u044f\u0442\u043d\u0435\u0439 \u0432\u0441\u0435\u0433\u043e, \u0432\u044b \u043d\u0435 \u0437\u0430\u043a\u0430\u0437\u044b\u0432\u0430\u043b\u0438 \u0435\u0449\u0451 \u043f\u0438\u0446\u0446\u0443.",Object(s.jsx)("br",{}),"\u0414\u043b\u044f \u0442\u043e\u0433\u043e, \u0447\u0442\u043e\u0431\u044b \u0437\u0430\u043a\u0430\u0437\u0430\u0442\u044c \u043f\u0438\u0446\u0446\u0443, \u043f\u0435\u0440\u0435\u0439\u0434\u0438 \u043d\u0430 \u0433\u043b\u0430\u0432\u043d\u0443\u044e \u0441\u0442\u0440\u0430\u043d\u0438\u0446\u0443."]}),Object(s.jsx)("img",{src:R,alt:"Empty cart"}),Object(s.jsx)(o.b,{to:"/",className:"button button--black",children:Object(s.jsx)("span",{children:"\u0412\u0435\u0440\u043d\u0443\u0442\u044c\u0441\u044f \u043d\u0430\u0437\u0430\u0434"})})]})})};var W=function(){var e=document.URL.slice(document.URL.lastIndexOf("/")+1),t=Object(l.b)();n.a.useEffect((function(){var c;t((c=e,function(e){e(y(!1)),m.get("http://localhost:3001/pizzas?id=".concat(c)).then((function(t){var c=t.data;e(w(c))}))}))}),[t,e]);var c=Object(l.c)((function(e){return e.items[0]})),a=n.a.useState(c.types[0]),i=Object(V.a)(a,2),r=i[0],o=i[1],d=n.a.useState(c.sizes[0]),j=Object(V.a)(d,2),h=j[0],O=j[1],x=function(e){t({type:g,payload:e})};return Object(s.jsx)("div",{className:"container",children:Object(s.jsxs)("div",{className:"product-block",children:[Object(s.jsx)("div",{className:"product-block__left",children:Object(s.jsx)("img",{className:"pizza-block__image",src:c.imageUrl,alt:"Pizza"})}),Object(s.jsxs)("div",{className:"product-block__right",children:[Object(s.jsx)("h2",{className:"product-block__title",children:c.name}),Object(s.jsxs)("div",{className:"product-block__rating",children:[Object(s.jsx)("div",{className:"product-block__rating-svg",children:Object(s.jsx)("svg",{width:"20px",height:"20px",children:Object(s.jsx)("path",{d:"M0,0.054V20h21V0.054H0z M15.422,18.129l-5.264-2.768l-5.265,2.768l1.006-5.863L1.64,8.114l5.887-0.855 l2.632-5.334l2.633,5.334l5.885,0.855l-4.258,4.152L15.422,18.129z"})})}),Object(s.jsx)("div",{className:"product-block__rating-text",children:c.rating})]}),Object(s.jsx)("div",{className:"product-block__line"}),Object(s.jsxs)("div",{className:"product-block__price",children:[c.price," \u0440\u0443\u0431."]}),Object(s.jsxs)("div",{className:"product-block__selector",children:[Object(s.jsx)("ul",{children:c.types.map((function(e,t){return Object(s.jsx)("li",{onClick:function(){!function(e){o(c.types[e])}(t)},className:b()({active:r===c.types[t],disabled:!c.types.includes(e)}),children:e},e)}))}),Object(s.jsx)("ul",{children:c.sizes.map((function(e,t){return Object(s.jsxs)("li",{onClick:function(){!function(e){O(c.sizes[e])}(t)},className:b()({active:h===c.sizes[t],disabled:!c.sizes.includes(e)}),children:[e," \u0441\u043c."]},e)}))})]}),Object(s.jsx)("div",{className:"product-block__button",children:Object(s.jsx)(u,{onClick:function(){x({id:c.name+"_"+r+"_"+h,count:1,name:c.name,imageUrl:c.imageUrl,price:c.price,type:r,size:h})},className:"button button--outline button--add",children:Object(s.jsx)("span",{className:"buttonAddSpan",children:"\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c \u0432 \u043a\u043e\u0440\u0437\u0438\u043d\u0443"})})}),Object(s.jsx)("div",{className:"product-block__line"}),Object(s.jsx)("div",{className:"product-block__text",children:"\u043e\u043f\u0438\u0441\u0430\u043d\u0438\u0435"})]})]})})};var D=function(){return Object(s.jsx)("div",{className:"App",children:Object(s.jsxs)("div",{className:"wrapper",children:[Object(s.jsx)(P,{}),Object(s.jsxs)("div",{className:"content",children:[Object(s.jsx)(d.a,{path:"/",component:Z,exact:!0}),Object(s.jsx)(d.a,{path:"/product",component:W}),Object(s.jsx)(d.a,{path:"/cart",component:U,exact:!0})]})]})})},Y=c(13),J=c(21),X={category:null,activeSortIndex:0,items:[],isLoaded:!1,categoryNames:["\u041c\u044f\u0441\u043d\u044b\u0435","\u0412\u0435\u0433\u0435\u0442\u0430\u0440\u0438\u0430\u043d\u0441\u043a\u0438\u0435","\u0413\u0440\u0438\u043b\u044c","\u041e\u0441\u0442\u0440\u044b\u0435","\u0417\u0430\u043a\u0440\u044b\u0442\u044b\u0435"],sortItems:["\u043f\u043e\u043f\u0443\u043b\u044f\u0440\u043d\u043e\u0441\u0442\u0438","\u0446\u0435\u043d\u0435. \u043f\u043e \u0432\u043e\u0437\u0440\u0430\u0441\u0442\u0430\u043d\u0438\u044e","\u0446\u0435\u043d\u0435. \u043f\u043e \u0443\u0431\u044b\u0432\u0430\u043d\u0438\u044e","\u0430\u043b\u0444\u0430\u0432\u0438\u0442\u0443 A-\u042f","\u0430\u043b\u0444\u0430\u0432\u0438\u0442\u0443 \u042f-A"],cartItems:{selectedPizzas:[],totalPrice:0,totalCount:0}},G=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:X,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case x:return Object(T.a)(Object(T.a)({},e),{},{isLoaded:t.payload});case p:return Object(T.a)(Object(T.a)({},e),{},{items:t.payload,isLoaded:!0});case _:return Object(T.a)(Object(T.a)({},e),{},{activeSortIndex:t.payload});case v:return Object(T.a)(Object(T.a)({},e),{},{category:t.payload});case z:return e.cartItems.selectedPizzas[t.payload.indexItem].count=t.payload.count,Object(T.a)(Object(T.a)({},e),{},{cartItems:Object(T.a)(Object(T.a)({},e.cartItems),{},{selectedPizzas:Object(J.a)(e.cartItems.selectedPizzas)})});case f:return Object(T.a)(Object(T.a)({},e),{},{cartItems:Object(T.a)(Object(T.a)({},e.cartItems),{},{totalPrice:t.payload})});case C:return Object(T.a)(Object(T.a)({},e),{},{cartItems:Object(T.a)(Object(T.a)({},e.cartItems),{},{totalCount:t.payload})});case g:return Object(T.a)(Object(T.a)({},e),{},{cartItems:Object(T.a)(Object(T.a)({},e.cartItems),{},{selectedPizzas:e.cartItems.selectedPizzas.some((function(e){return e.id===t.payload.id}))?Object(J.a)(e.cartItems.selectedPizzas):[].concat(Object(J.a)(e.cartItems.selectedPizzas),[t.payload])})});case k:return Object(T.a)(Object(T.a)({},e),{},{cartItems:{selectedPizzas:[],totalPrice:0,totalCount:0}});case N:return Object(T.a)(Object(T.a)({},e),{},{cartItems:Object(T.a)(Object(T.a)({},e.cartItems),{},{selectedPizzas:e.cartItems.selectedPizzas.filter((function(e){return e.id!==t.payload}))})});default:return e}},q=c(39),F=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||Y.c,K=Object(Y.d)(G,F(Object(Y.a)(q.a)));r.a.render(Object(s.jsx)(o.a,{children:Object(s.jsx)(l.a,{store:K,children:Object(s.jsx)(D,{})})}),document.getElementById("root"))}},[[69,1,2]]]);
//# sourceMappingURL=main.a853bf68.chunk.js.map