(this["webpackJsonpreact_dynamic-list-of-todos"]=this["webpackJsonpreact_dynamic-list-of-todos"]||[]).push([[0],{16:function(e,t,c){},17:function(e,t,c){"use strict";c.r(t);var s=c(7),a=c.n(s),n=c(2),l=c(8),i=c(1),d=(c(13),c(14),c(5)),o=c.n(d),r=c(0),j=Object(i.memo)((function(e){var t=e.todos,c=e.toggleModal,s=e.updateTodo,a=e.getUserById,n=e.isModalOpen;return Object(r.jsxs)("table",{className:"table is-narrow is-fullwidth",children:[Object(r.jsx)("thead",{children:Object(r.jsxs)("tr",{children:[Object(r.jsx)("th",{children:"#"}),Object(r.jsx)("th",{children:Object(r.jsx)("span",{className:"icon",children:Object(r.jsx)("i",{className:"fas fa-check"})})}),Object(r.jsx)("th",{children:"Title"}),Object(r.jsx)("th",{children:" "})]})}),Object(r.jsx)("tbody",{children:t.map((function(e){return Object(r.jsxs)("tr",{"data-cy":"todo",className:o()({"has-background-info-light":n,"":!n}),children:[Object(r.jsx)("td",{className:"is-vcentered",children:e.id}),Object(r.jsx)("td",{className:"is-vcentered",children:e.completed&&Object(r.jsx)("span",{className:"icon","data-cy":"iconCompleted",children:Object(r.jsx)("i",{className:"fas fa-check"})})}),Object(r.jsx)("td",{className:"is-vcentered is-expanded",children:Object(r.jsx)("p",{className:o()({"has-text-danger":!e.completed,"has-text-success":e.completed}),children:e.title})}),Object(r.jsx)("td",{className:"has-text-right is-vcentered",children:Object(r.jsx)("button",{"data-cy":"selectButton",className:"button",type:"button",onClick:function(){return function(e,t){c(),s(e),a(t)}(e,e.userId)},children:Object(r.jsx)("span",{className:"icon",children:Object(r.jsx)("i",{className:o()({"far fa-eye":!n,"far fa-eye-slash":n})})})})})]},e.id)}))})]})})),u=function(e){var t=e.updateSearchField,c=e.updateSortField,s=e.searchField,a=e.sortField;return Object(r.jsxs)("form",{className:"field has-addons",children:[Object(r.jsx)("p",{className:"control",children:Object(r.jsx)("span",{className:"select",children:Object(r.jsxs)("select",{"data-cy":"statusSelect",onChange:function(e){return c(e.target.value)},value:a,children:[Object(r.jsx)("option",{value:"all",children:"All"}),Object(r.jsx)("option",{value:"active",children:"Active"}),Object(r.jsx)("option",{value:"completed",children:"Completed"})]})})}),Object(r.jsxs)("p",{className:"control is-expanded has-icons-left has-icons-right",children:[Object(r.jsx)("input",{"data-cy":"searchInput",type:"text",className:"input",placeholder:"Search...",value:s,onChange:function(e){return t(e.target.value)}}),Object(r.jsx)("span",{className:"icon is-left",children:Object(r.jsx)("i",{className:"fas fa-magnifying-glass"})}),Object(r.jsx)("span",{className:"icon is-right",style:{pointerEvents:"all"},children:s&&Object(r.jsx)("button",{"data-cy":"clearSearchButton",type:"button",className:"delete",onClick:function(){return t("")}})})]})]})};function b(e){var t,c="https://mate-academy.github.io/react_dynamic-list-of-todos/api"+e+".json";return(t=300,new Promise((function(e){setTimeout(e,t)}))).then((function(){return fetch(c)})).then((function(e){return e.json()}))}c(16);var h=function(){return Object(r.jsx)("div",{className:"Loader","data-cy":"loader",children:Object(r.jsx)("div",{className:"Loader__content"})})},m=function(e){var t=e.toggleModal,c=e.todo,s=e.user,a=e.isLoadingUser;return Object(r.jsxs)("div",{className:"modal is-active","data-cy":"modal",children:[Object(r.jsx)("div",{className:"modal-background"}),a?Object(r.jsx)(h,{}):Object(r.jsxs)("div",{className:"modal-card",children:[Object(r.jsxs)("header",{className:"modal-card-head",children:[Object(r.jsx)("div",{className:"modal-card-title has-text-weight-medium","data-cy":"modal-header",children:"Todo #".concat(null===c||void 0===c?void 0:c.id)}),Object(r.jsx)("button",{type:"button",className:"delete","data-cy":"modal-close",onClick:t})]}),Object(r.jsxs)("div",{className:"modal-card-body",children:[Object(r.jsx)("p",{className:"block","data-cy":"modal-title",children:null===c||void 0===c?void 0:c.title}),Object(r.jsxs)("p",{className:"block","data-cy":"modal-user",children:[null!==c&&void 0!==c&&c.completed?Object(r.jsx)("strong",{className:"has-text-success",children:"Done"}):Object(r.jsx)("strong",{className:"has-text-danger",children:"Planned"})," by ",Object(r.jsx)("a",{href:"mailto:Sincere@april.biz",children:null===s||void 0===s?void 0:s.name})]})]})]})]})},O="completed",x="active";var f=function(){var e=Object(i.useState)([]),t=Object(n.a)(e,2),c=t[0],s=t[1],a=Object(i.useState)(null),d=Object(n.a)(a,2),o=d[0],f=d[1],p=Object(i.useState)(!1),v=Object(n.a)(p,2),N=v[0],g=v[1],y=Object(i.useState)(!1),S=Object(n.a)(y,2),k=S[0],F=S[1],w=Object(i.useState)(null),C=Object(n.a)(w,2),L=C[0],M=C[1],T=Object(i.useState)(!1),B=Object(n.a)(T,2),I=B[0],_=B[1],U=Object(i.useState)(""),E=Object(n.a)(U,2),A=E[0],J=E[1],P=Object(i.useState)(""),z=Object(n.a)(P,2),D=z[0],q=z[1];Object(i.useEffect)((function(){g(!0),b("/todos").then((function(e){return s(e)})).catch((function(e){console.warn(e)})).finally((function(){return g(!1)}))}),[]);var G=function(){F(!k)},H=function(e,t){var c=t.searchField,s=t.sortField,a=Object(l.a)(e);if(c){var n=c.toLowerCase().trim();a=a.filter((function(e){return e.title.toLowerCase().trim().includes(n)}))}return s&&(a=a.filter((function(e){switch(s){case x:return!e.completed;case O:return e.completed;default:return e}}))),a}(c,{searchField:A,sortField:D});return Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)("div",{className:"section",children:Object(r.jsx)("div",{className:"container",children:Object(r.jsxs)("div",{className:"box",children:[Object(r.jsx)("h1",{className:"title",children:"Todos:"}),Object(r.jsx)("div",{className:"block",children:Object(r.jsx)(u,{updateSearchField:function(e){J(e)},searchField:A,updateSortField:function(e){q(e)},sortField:D})}),Object(r.jsx)("div",{className:"block",children:N?Object(r.jsx)(h,{}):Object(r.jsx)(j,{todos:H,toggleModal:G,isModalOpen:k,updateTodo:function(e){f(e)},getUserById:function(e){_(!0),function(e){return b("/users/".concat(e))}(e).then((function(e){return M(e)})).catch((function(e){console.warn(e)})).finally((function(){return _(!1)}))}})})]})})}),k&&Object(r.jsx)(m,{toggleModal:G,todo:o,user:L,isLoadingUser:I})]})};a.a.render(Object(r.jsx)(f,{}),document.getElementById("root"))}},[[17,1,2]]]);
//# sourceMappingURL=main.68af3468.chunk.js.map