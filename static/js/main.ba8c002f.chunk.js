(this["webpackJsonplad-creator"]=this["webpackJsonplad-creator"]||[]).push([[0],[,,,,function(e,t,n){e.exports={button:"main-dash_button__2lBfQ"}},,,,,,,,function(e,t,n){},function(e,t,n){},,function(e,t,n){},,,function(e,t,n){},function(e,t,n){"use strict";n.r(t);var c=n(1),s=n.n(c),a=n(6),i=n.n(a),l=(n(12),n(3)),o=(n(13),n(0));var r=function(e){var t="card card_box "+e.className;return Object(o.jsx)("div",{className:t,children:e.children})},j=n(23),d=n(24),b=n(25),h=n(26),m=n(4),u=n.n(m),x=n(20),O=n(21),p=n(22),f=(n(15),function(e){return Object(o.jsx)("div",{className:"container-fluid",children:Object(o.jsxs)("div",{className:"row g-5",children:[Object(o.jsxs)("div",{className:"col-md-5 col-lg-4 order-md-last",children:[Object(o.jsx)("h4",{className:"d-flex justify-content-between align-items-center mb-3",children:Object(o.jsx)("span",{className:"text-secondary",children:"Summary"})}),Object(o.jsx)("ul",{className:"list-group mb-3",children:Object(o.jsxs)("li",{className:"list-group-item d-flex justify-content-between lh-sm",children:[Object(o.jsxs)("div",{children:[Object(o.jsx)("h6",{className:"my-0",children:"User's role"}),Object(o.jsx)("small",{className:"text-muted",children:"(not provided)"})]}),Object(o.jsx)("span",{className:"text-muted",children:"(X)"})]})})]}),Object(o.jsx)("div",{className:"col-md-7 col-lg-8",children:Object(o.jsxs)("form",{className:"needs-validation",novalidate:!0,children:[Object(o.jsxs)("div",{class:"form-group row",children:[Object(o.jsx)("h3",{children:"Learning context"}),Object(o.jsx)("panel",{children:"Decsribe the context where the dashoard is meant to be used"}),Object(o.jsx)("hr",{className:"my-1"})]}),Object(o.jsxs)("div",{className:"col-md-8 g-3",children:[Object(o.jsx)("label",{for:"role",className:"form-label",children:"Your role within the learning context"}),Object(o.jsxs)("select",{className:"form-select",id:"role",placeholder:"Your role",required:!0,children:[Object(o.jsx)("option",{value:"teacher",children:"Teacher - who is in charge of the course"}),Object(o.jsx)("option",{value:"tutor",children:"Tutor"}),Object(o.jsx)("option",{value:"learner",children:"Learner"}),Object(o.jsx)("option",{value:"manager",children:"Manager"}),Object(o.jsx)("option",{value:"other",children:"Other"})]}),Object(o.jsx)("div",{className:"invalid-feedback",children:"Please select a valid role."}),Object(o.jsx)("hr",{className:"my-3"})]}),Object(o.jsxs)("div",{className:"col-md-8 mt-2 ",children:[Object(o.jsx)("label",{for:"country",className:"form-label",children:"Type of learning environment"}),Object(o.jsxs)("select",{className:"form-select",id:"country",placeholder:"Your role",required:!0,children:[Object(o.jsx)("option",{value:"teacher",children:"Online class"}),Object(o.jsx)("option",{value:"tutor",children:"Offline class"}),Object(o.jsx)("option",{value:"learner",children:"Hybrid class"}),Object(o.jsx)("option",{value:"manager",children:"MOOC"}),Object(o.jsx)("option",{value:"other",children:"Other"})]}),Object(o.jsx)("div",{className:"invalid-feedback",children:"Please select a valid role."}),Object(o.jsxs)("div",{className:"col-sm-10",children:[Object(o.jsx)("label",{for:"firstName",className:"form-label",children:"Details ?"}),Object(o.jsx)("textarea",{type:"text",className:"form-control",id:"lastName",placeholder:"",value:""})]}),Object(o.jsx)("hr",{className:"my-3"})]}),Object(o.jsxs)("div",{className:"form-check",children:[Object(o.jsx)("input",{type:"checkbox",className:"form-check-input",id:"save-info"}),Object(o.jsx)("label",{className:"form-check-label",for:"save-info",children:"Save this information for next time"})]}),Object(o.jsx)("hr",{className:"my-4"})]})})]})})}),v=function(){return Object(o.jsx)(f,{})},N=function(){return Object(o.jsx)("div",{children:"Second Component"})},y=function(){return Object(o.jsx)("div",{children:"Third Component"})},g=function(){return Object(o.jsx)("div",{children:"Final Component"})};var k=function(e){var t=Object(c.useState)([{key:"firstStep",label:"Use context",isDone:!0,component:v},{key:"secondStep",label:"Triggers and elements of interest",isDone:!1,component:N},{key:"thirdStep",label:"Fine-grained situation analysis",isDone:!1,component:y},{key:"forthStep",label:"Tuning and complementary analysis",isDone:!1,component:g},{key:"finalStep",label:"Final configurations",isDone:!1,component:g}]),n=Object(l.a)(t,2),s=n[0],a=n[1],i=Object(c.useState)(s[0]),r=Object(l.a)(i,2),j=r[0],d=r[1];return Object(o.jsx)("div",{className:"SpecificationWizard",children:Object(o.jsxs)("div",{className:"box",children:[Object(o.jsx)("div",{className:"steps",children:Object(o.jsx)("ul",{className:"nav",children:s.map((function(e,t){return Object(o.jsx)("li",{className:"".concat(j.key===e.key?"active":""," ").concat(e.isDone?"done":""),children:Object(o.jsxs)("div",{children:[t+1,". ",Object(o.jsx)("span",{children:e.label})]})},t)}))})}),Object(o.jsx)("div",{className:"step-component",children:j.component()}),Object(o.jsx)("div",{className:"specification-footer",children:Object(o.jsxs)("div",{className:"btn-component",children:[Object(o.jsxs)("button",{type:"button",className:"btn btn-outline-light",onClick:function(){e.onCloseWizard()},children:[Object(o.jsx)(x.a,{})," \xa0\xa0Close wizard"]}),Object(o.jsxs)("div",{className:"btn-component",children:[Object(o.jsxs)("button",{type:"button",className:"btn btn-outline-light",onClick:function(){var e=s.findIndex((function(e){return e.key===j.key}));0!==e&&(a((function(e){return e.map((function(e){return e.key===j.key&&(e.isDone=!1),e}))})),d(s[e-1]))},disabled:s[0].key===j.key,children:[Object(o.jsx)(O.a,{})," \xa0\xa0Back"]}),Object(o.jsxs)("button",{type:"button",className:"btn btn-outline-light",value:s[s.length-1].key!==j.key?"Next":"Submit",onClick:function(){if(s[s.length-1].key!==j.key){var e=s.findIndex((function(e){return e.key===j.key}));a((function(e){return e.map((function(e){return e.key===j.key&&(e.isDone=!0),e}))})),d(s[e+1])}else alert("You have completed the generation process...")},children:["\xa0\xa0",s[s.length-1].key!==j.key?"Next":"Submit"," ",Object(o.jsx)(p.a,{})]})]})]})})]})})};var S=function(e){var t=Object(c.useState)([{key:"no",label:" ",isActive:!0,component:function(){return Object(o.jsxs)(r,{children:[Object(o.jsxs)("button",{type:"button",className:"".concat(u.a.button,"  btn btn-outline-light btn-lg"),onClick:O,children:[Object(o.jsx)(j.a,{}),"  \xa0\xa0|\xa0\xa0 Craft a new LAD Specification"]}),Object(o.jsxs)("button",{type:"button",className:"".concat(u.a.button,"  btn btn-outline-light btn-lg"),children:[Object(o.jsx)(d.a,{}),"  \xa0\xa0|\xa0\xa0 Open and edit an existing LAD specification"]}),Object(o.jsxs)("button",{type:"button",className:"".concat(u.a.button,"  btn btn-outline-light btn-lg"),children:[Object(o.jsx)(b.a,{}),"  \xa0\xa0|\xa0\xa0 Explorer and manage the current Library"]}),Object(o.jsxs)("button",{type:"button",className:"".concat(u.a.button,"  btn btn-outline-light btn-lg"),children:[Object(o.jsx)(h.a,{}),"  \xa0\xa0|\xa0\xa0 Specify and manage the creation rules"]})]})}},{key:"specification",label:"LAD Specification",isActive:!1,component:function(){return Object(o.jsx)(k,{onCloseWizard:function(){x(s[0])}})}}]),n=Object(l.a)(t,2),s=n[0],a=(n[1],Object(c.useState)(s[0])),i=Object(l.a)(a,2),m=i[0],x=i[1],O=function(){x(s[1]),console.log(m)};return Object(o.jsx)("div",{children:Object(o.jsx)("div",{className:"step-component",children:m.component()})})},D=n.p+"static/media/logo.643c5d7a.png";n(18);var C=function(){return Object(o.jsxs)("div",{className:"App",children:[Object(o.jsxs)("header",{className:"App-header",children:[Object(o.jsxs)("div",{className:"main-head",children:[Object(o.jsx)("img",{src:D,className:"App-logo",alt:"logo"}),Object(o.jsx)("b",{children:" "})]}),Object(o.jsx)("hr",{})]}),Object(o.jsxs)("main",{className:"App-main",children:[Object(o.jsx)(S,{}),Object(o.jsxs)("p",{children:["The ",Object(o.jsx)("em",{children:"LAD Creator"})," tool is a part of the"," ",Object(o.jsx)("a",{href:"http://padlad.github.io/",children:"PadLAD project"})]})]}),Object(o.jsx)("footer",{children:"(c)Madjid SADALLAH"})]})},A=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,27)).then((function(t){var n=t.getCLS,c=t.getFID,s=t.getFCP,a=t.getLCP,i=t.getTTFB;n(e),c(e),s(e),a(e),i(e)}))};i.a.render(Object(o.jsx)(s.a.StrictMode,{children:Object(o.jsx)(C,{})}),document.getElementById("root")),A()}],[[19,1,2]]]);
//# sourceMappingURL=main.ba8c002f.chunk.js.map