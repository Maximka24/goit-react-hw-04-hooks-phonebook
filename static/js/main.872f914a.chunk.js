(this["webpackJsonpgoit-react-hw-04-hooks-phonebook"]=this["webpackJsonpgoit-react-hw-04-hooks-phonebook"]||[]).push([[0],{11:function(e,t,n){e.exports={Section:"Section_Section__M3czb"}},17:function(e,t,n){},2:function(e,t,n){e.exports={Container:"Contacts_Container__1a9G-",Title:"Contacts_Title__2I_GW",List:"Contacts_List__1XJ-h",ElemList:"Contacts_ElemList__2wsc5",Btn:"Contacts_Btn__1td_c",Label:"Contacts_Label__3WG_z"}},27:function(e,t,n){"use strict";n.r(t);var a=n(1),c=n.n(a),r=n(9),o=n.n(r),s=(n(17),n(12)),i=n(3),l=n(10),u=n.n(l),b=n(11),j=n.n(b),m=n(0),d=function(e){var t=e.children;return Object(m.jsx)("div",{className:j.a.Section,children:t})},h=n(7),f=n.n(h);function O(e){var t=e.submitForm,n=Object(a.useState)(""),c=Object(i.a)(n,2),r=c[0],o=c[1],s=Object(a.useState)(""),l=Object(i.a)(s,2),u=l[0],b=l[1],j=function(e){var t=e.currentTarget.value;switch(e.target.name){case"name":o(t);break;case"number":b(t);break;default:return}},d=function(){o(""),b("")};return Object(m.jsxs)("form",{className:f.a.ContainerForm,onSubmit:function(e){e.preventDefault(),console.log(r),console.log(u),t({name:r,number:u}),d()},children:[Object(m.jsx)("h2",{className:f.a.Title,children:"Phonebook"}),Object(m.jsxs)("label",{children:["Name",Object(m.jsx)("input",{type:"text",name:"name",value:r,onChange:j,pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"\u0418\u043c\u044f \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0442\u043e\u043b\u044c\u043a\u043e \u0438\u0437 \u0431\u0443\u043a\u0432, \u0430\u043f\u043e\u0441\u0442\u0440\u043e\u0444\u0430, \u0442\u0438\u0440\u0435 \u0438 \u043f\u0440\u043e\u0431\u0435\u043b\u043e\u0432. \u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440 Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan \u0438 \u0442. \u043f.",required:!0})]}),Object(m.jsxs)("label",{children:["Number",Object(m.jsx)("input",{type:"tel",name:"number",value:u,onChange:j,pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"\u041d\u043e\u043c\u0435\u0440 \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0430 \u0434\u043e\u043b\u0436\u0435\u043d \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0446\u0438\u0444\u0440 \u0438 \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0434\u0435\u0440\u0436\u0430\u0442\u044c \u043f\u0440\u043e\u0431\u0435\u043b\u044b, \u0442\u0438\u0440\u0435, \u043a\u0440\u0443\u0433\u043b\u044b\u0435 \u0441\u043a\u043e\u0431\u043a\u0438 \u0438 \u043c\u043e\u0436\u0435\u0442 \u043d\u0430\u0447\u0438\u043d\u0430\u0442\u044c\u0441\u044f \u0441 +",required:!0})]}),Object(m.jsx)("button",{className:f.a.Btn,type:"submit",children:"Add contact"})]})}var C=n(2),_=n.n(C),x=function(e){var t=e.mainListContact,n=e.contactsList,a=e.onDeleteContact,c=e.filterContacts,r=e.onChangeFilter;return Object(m.jsxs)("div",{className:_.a.Container,children:[Object(m.jsx)("h2",{className:_.a.Title,children:"Contacts"}),0===t.length?Object(m.jsx)("p",{children:"Sorry! No contacts..."}):Object(m.jsxs)("ul",{className:_.a.List,children:[Object(m.jsxs)("label",{className:_.a.Label,children:["Find contacts by name:",Object(m.jsx)("input",{type:"text",name:"name",value:c,onChange:r,pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"\u0418\u043c\u044f \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0442\u043e\u043b\u044c\u043a\u043e \u0438\u0437 \u0431\u0443\u043a\u0432, \u0430\u043f\u043e\u0441\u0442\u0440\u043e\u0444\u0430, \u0442\u0438\u0440\u0435 \u0438 \u043f\u0440\u043e\u0431\u0435\u043b\u043e\u0432. \u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440 Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan \u0438 \u0442. \u043f.",required:!0})]}),n.map((function(e){var t=e.id,n=e.name,c=e.number;return Object(m.jsxs)("li",{className:_.a.ElemList,children:[Object(m.jsxs)("p",{children:[n,": ",c]}),Object(m.jsx)("button",{className:_.a.Btn,onClick:function(){return a(t)},children:"Delete contact"})]},t)}))]})]})};function p(){var e=Object(a.useState)([]),t=Object(i.a)(e,2),n=t[0],c=t[1],r=Object(a.useState)(""),o=Object(i.a)(r,2),l=o[0],b=o[1];Object(a.useEffect)((function(){var e=localStorage.getItem("contacts"),t=JSON.parse(e);t&&c(t)}),[]),Object(a.useEffect)((function(){localStorage.setItem("contacts",JSON.stringify(n))}),[n]);var j=l.toLowerCase(),h=n.filter((function(e){return e.name.toLowerCase().includes(j)}));return Object(m.jsxs)(d,{children:[Object(m.jsx)(O,{submitForm:function(e){var t=e.name,a=e.number;if(n.map((function(e){return e.name.toLowerCase()})).includes(t.toLowerCase()))alert("".concat(t," is already in contacts"));else{var r={id:u.a.generate(),name:t,number:a};c((function(e){return[r].concat(Object(s.a)(e))}))}}}),Object(m.jsx)(x,{mainListContact:n,onChangeFilter:function(e){b(e.currentTarget.value)},filterContacts:l,contactsList:h,onDeleteContact:function(e){c((function(t){return t.filter((function(t){return t.id!==e}))}))}})]})}o.a.render(Object(m.jsx)(c.a.StrictMode,{children:Object(m.jsx)(p,{})}),document.getElementById("root"))},7:function(e,t,n){e.exports={ContainerForm:"Phonebook_ContainerForm__1e2xr",Title:"Phonebook_Title__378rG",Btn:"Phonebook_Btn__1D7tH"}}},[[27,1,2]]]);
//# sourceMappingURL=main.872f914a.chunk.js.map