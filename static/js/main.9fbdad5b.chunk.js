(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{55:function(e,t,n){e.exports=n(73)},73:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(8),l=n(24),u=n(26),o=n(106),i=n(107),d=n(108),s=Object(u.b)()(function(e){var t,n=e.dispatch;return a.createElement(d.a,{style:{paddingTop:"20px",paddingLeft:"14px",width:"50%"},placeholder:"What went well? What could have gone better?",inputRef:function(e){return t=e},onKeyPress:function(e){"Enter"===e.key&&(console.log(t.value),n({type:"ADD_FEEDBACK",text:t.value}),t.value="")}})}),p=n(105),f=n(109),E=n(110),b=Object(u.b)(function(e){return{feedbacks:e.feedbacks}})(function(e){var t=e.feedbacks;return r.a.createElement(p.a,null,t.map(function(e){return r.a.createElement(f.a,null,r.a.createElement(E.a,{primary:e.text}))}))});var m=function(){return r.a.createElement("div",null,r.a.createElement(o.a,{style:{width:"25%"}},r.a.createElement(i.a,null,r.a.createElement("div",{style:{fontSize:"40px"}},"Retro"))),r.a.createElement(s,null),r.a.createElement(b,null))},v=n(52),h=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"ADD_FEEDBACK":return[].concat(Object(v.a)(e),[{text:t.text}]);default:return e}},w=Object(l.b)({feedbacks:h}),y=Object(l.c)(w);Object(c.render)(r.a.createElement(u.a,{store:y},r.a.createElement(m,null)),document.getElementById("root"))}},[[55,1,2]]]);
//# sourceMappingURL=main.9fbdad5b.chunk.js.map