(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["index"],{"0b42":function(e,t,a){var i=a("da84"),s=a("e8b5"),n=a("68ee"),l=a("861d"),r=a("b622"),c=r("species"),o=i.Array;e.exports=function(e){var t;return s(e)&&(t=e.constructor,n(t)&&(t===o||s(t.prototype))?t=void 0:l(t)&&(t=t[c],null===t&&(t=void 0))),void 0===t?o:t}},"159b":function(e,t,a){var i=a("da84"),s=a("fdbc"),n=a("785a"),l=a("17c2"),r=a("9112"),c=function(e){if(e&&e.forEach!==l)try{r(e,"forEach",l)}catch(t){e.forEach=l}};for(var o in s)s[o]&&c(i[o]&&i[o].prototype);c(n)},1799:function(e,t,a){"use strict";var i=function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},s=[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("nav",{staticClass:"mt-3"},[a("ul",{staticClass:"pagination justify-content-end"},[a("li",{staticClass:"page-item"},[a("a",{staticClass:"page-link",attrs:{href:"#","aria-label":"Previous"}},[a("span",{attrs:{"aria-hidden":"true"}},[e._v("«")])])]),a("li",{staticClass:"page-item"},[a("a",{staticClass:"page-link",attrs:{href:"#"}},[e._v("1")])]),a("li",{staticClass:"page-item"},[a("a",{staticClass:"page-link",attrs:{href:"#"}},[e._v("2")])]),a("li",{staticClass:"page-item"},[a("a",{staticClass:"page-link",attrs:{href:"#"}},[e._v("3")])]),a("li",{staticClass:"page-item"},[a("a",{staticClass:"page-link",attrs:{href:"#","aria-label":"Next"}},[a("span",{attrs:{"aria-hidden":"true"}},[e._v("»")])])])])])}],n={},l=n,r=a("2877"),c=Object(r["a"])(l,i,s,!1,null,null,null);t["a"]=c.exports},"17c2":function(e,t,a){"use strict";var i=a("b727").forEach,s=a("a640"),n=s("forEach");e.exports=n?[].forEach:function(e){return i(this,e,arguments.length>1?arguments[1]:void 0)}},"1e4b":function(e,t,a){"use strict";a.r(t);var i=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"container"},[a("div",{staticClass:"mt-5"},[a("nav",{staticClass:"mb-4"},[a("ul",{staticClass:"navBtn"},e._l(e.menu,(function(t){return a("li",{key:t},[a("router-link",{staticClass:"navLink",class:{active:e.currentMenu===t},attrs:{to:"/"},nativeOn:{click:function(a){return e.changeMenu(t)}}},[e._v(e._s(t))])],1)})),0)]),a("div",{staticClass:"card mt-1"},[a("div",{staticClass:"card-body p-4"},[a("form",[a("div",{staticClass:"title mb-3"},[e._v("測驗者列表")]),a("div",{staticClass:"row"},[a("div",{staticClass:"col-12 col-md-4 mb-3"},[a("div",{staticClass:"d-flex align-items-center"},[a("label",{staticClass:"col-4 form-label",attrs:{for:"name"}},[e._v("測驗者姓名：")]),a("input",{directives:[{name:"model",rawName:"v-model",value:e.info.name,expression:"info.name"}],staticClass:"form-control",attrs:{type:"text",id:"name"},domProps:{value:e.info.name},on:{input:function(t){t.target.composing||e.$set(e.info,"name",t.target.value)}}})])]),a("div",{staticClass:"col-12 col-md-4 mb-3"},[a("div",{staticClass:"d-flex align-items-center"},[a("label",{staticClass:"col-4 form-label"},[e._v("完成測驗：")]),a("select",{directives:[{name:"model",rawName:"v-model",value:e.info.complete,expression:"info.complete"}],staticClass:"form-select",on:{change:function(t){var a=Array.prototype.filter.call(t.target.options,(function(e){return e.selected})).map((function(e){var t="_value"in e?e._value:e.value;return t}));e.$set(e.info,"complete",t.target.multiple?a:a[0])}}},e._l(e.completeOptions,(function(t){return a("option",{key:t.value,domProps:{value:t.value}},[e._v(e._s(t.label))])})),0)])]),a("div",{staticClass:"col-12 col-md-4 mb-3"},[a("div",{staticClass:"d-flex align-items-center"},[a("label",{staticClass:"col-4 form-label",attrs:{for:"correctRate"}},[e._v("測驗正確率")]),a("input",{directives:[{name:"model",rawName:"v-model",value:e.info.correctRate,expression:"info.correctRate"}],staticClass:"form-control me-3",attrs:{type:"text",id:"correctRate"},domProps:{value:e.info.correctRate},on:{input:function(t){t.target.composing||e.$set(e.info,"correctRate",t.target.value)}}}),a("span",{staticClass:"text-nowrap"},[e._v("% 以上")])])]),a("div",{staticClass:"col-12 col-md-4 mb-3"},[a("div",{staticClass:"d-flex align-items-center"},[a("label",{staticClass:"col-4 form-label",attrs:{for:"email"}},[e._v("測驗者e-mail：")]),a("input",{directives:[{name:"model",rawName:"v-model",value:e.info.email,expression:"info.email"}],staticClass:"form-control",attrs:{type:"text",id:"email"},domProps:{value:e.info.email},on:{input:function(t){t.target.composing||e.$set(e.info,"email",t.target.value)}}})])]),a("div",{staticClass:"col-12 col-md-4 mb-3"},[a("div",{staticClass:"d-flex align-items-center"},[a("label",{staticClass:"col-4 form-label"},[e._v("測驗者身分：")]),a("select",{directives:[{name:"model",rawName:"v-model",value:e.info.trainees,expression:"info.trainees"}],staticClass:"form-select",on:{change:function(t){var a=Array.prototype.filter.call(t.target.options,(function(e){return e.selected})).map((function(e){var t="_value"in e?e._value:e.value;return t}));e.$set(e.info,"trainees",t.target.multiple?a:a[0])}}},e._l(e.trainees,(function(t){return a("option",{key:t.value,domProps:{value:t.value}},[e._v(e._s(t.label))])})),0)])]),a("div",{staticClass:"col-12 col-md-4 mb-3"},[a("div",{staticClass:"d-flex align-items-center"},[a("label",{staticClass:"col-4 form-label",attrs:{for:"remark"}},[e._v("備註：")]),a("input",{directives:[{name:"model",rawName:"v-model",value:e.info.remark,expression:"info.remark"}],staticClass:"form-control",attrs:{type:"text",id:"name"},domProps:{value:e.info.remark},on:{input:function(t){t.target.composing||e.$set(e.info,"remark",t.target.value)}}})])])]),a("div",{staticClass:"text-center mt-3"},[a("button",{staticClass:"btn btn-primary me-3",attrs:{type:"button"}},[e._v("查詢")]),a("button",{staticClass:"btn btn-outline-primary",attrs:{type:"button"},on:{click:e.clearForm}},[e._v("清除查詢")])])])])])]),a("div",{staticClass:"card my-5"},[a("div",{staticClass:"card-body p-4"},[e._m(0),a("div",{staticClass:"table-responsive mt-3"},[a("table",{staticClass:"table text-nowrap"},[a("thead",[a("tr",[a("th",[a("div",{staticClass:"form-check"},[a("input",{directives:[{name:"model",rawName:"v-model",value:e.allChecked,expression:"allChecked"}],staticClass:"form-check-input",attrs:{type:"checkbox"},domProps:{checked:Array.isArray(e.allChecked)?e._i(e.allChecked,null)>-1:e.allChecked},on:{click:e.checkedAll,change:function(t){var a=e.allChecked,i=t.target,s=!!i.checked;if(Array.isArray(a)){var n=null,l=e._i(a,n);i.checked?l<0&&(e.allChecked=a.concat([n])):l>-1&&(e.allChecked=a.slice(0,l).concat(a.slice(l+1)))}else e.allChecked=s}}})])]),a("th",[e._v("姓名")]),a("th",[e._v("身份")]),a("th",[e._v("E-mail")]),a("th",[e._v("備註")]),a("th",[e._v("操作")])])]),a("tbody",e._l(e.tableInfo,(function(t){return a("tr",{key:t.id},[a("td",[a("input",{directives:[{name:"model",rawName:"v-model",value:e.checkboxList,expression:"checkboxList"}],staticClass:"form-check-input",attrs:{type:"checkbox"},domProps:{value:t.id,checked:Array.isArray(e.checkboxList)?e._i(e.checkboxList,t.id)>-1:e.checkboxList},on:{change:function(a){var i=e.checkboxList,s=a.target,n=!!s.checked;if(Array.isArray(i)){var l=t.id,r=e._i(i,l);s.checked?r<0&&(e.checkboxList=i.concat([l])):r>-1&&(e.checkboxList=i.slice(0,r).concat(i.slice(r+1)))}else e.checkboxList=n}}})]),a("td",[e._v(e._s(t.name))]),a("td",[e._v(e._s(t.isTrainees?"學員":"非學員"))]),a("td",[e._v(e._s(t.email))]),a("td",[e._v(e._s(t.remark))]),a("td",[a("router-link",{staticClass:" btn-detail",attrs:{to:{name:"detail",params:{id:t.id}}}},[e._v("詳細資訊")])],1)])})),0)])]),a("Pagination")],1)])])},s=[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("button",{staticClass:"btn btn-primary me-3",attrs:{type:"button"}},[e._v("設為學員")]),a("button",{staticClass:"btn btn-outline-primary",attrs:{type:"button"}},[e._v("設為非學員")])])}],n=(a("d3b7"),a("159b"),a("1799")),l={components:{Pagination:n["a"]},data:function(){return{menu:["測驗管理","測驗者管理","資訊管理","意願名單"],currentMenu:"測驗管理",info:{name:"",correctRate:"",email:"",remark:"",complete:"all",trainees:null},completeOptions:[{label:"全部",value:"all"},{label:"Java",value:"java"},{label:"Vue",value:"vue"}],trainees:[{label:"全部",value:null},{label:"學員",value:!0},{label:"非學員",value:!1}],tableInfo:[{id:"1",selectd:!0,name:"周小良",isTrainees:!1,email:"zhouxiaoliang@gmail.com",remark:"–"},{id:"2",selectd:!1,name:"孟小祥",isTrainees:!1,email:"mengxiaoxiang@yahoo.com.tw",remark:"對Java課程有興趣"},{id:"3",selectd:!1,name:"張小昊",isTrainees:!1,email:"zhangxiaohao@gmail.com",remark:"–"},{id:"4",selectd:!1,name:"楊小明",isTrainees:!0,email:"yangxiaomiing@gmail.com",remark:"正在上Java進階課程"},{id:"5",selectd:!1,name:"高小琳",isTrainees:!0,email:"gaoxiaolin@hotmail.com",remark:"正在上Java進階課程"}],checkboxList:[],allChecked:!1}},methods:{clearForm:function(){this.info={name:"",correctRate:"",email:"",remark:"",complete:"all",trainees:null}},checkedAll:function(){var e=this;this.allChecked?this.checkboxList=[]:(this.checkboxList=[],this.tableInfo.forEach((function(t){e.checkboxList.push(t.id)})))},changeMenu:function(e){this.currentMenu=e}}},r=l,c=(a("661f"),a("2877")),o=Object(c["a"])(r,i,s,!1,null,"eb6de5f8",null);t["default"]=o.exports},"65f0":function(e,t,a){var i=a("0b42");e.exports=function(e,t){return new(i(e))(0===t?0:t)}},"661f":function(e,t,a){"use strict";a("c065")},a640:function(e,t,a){"use strict";var i=a("d039");e.exports=function(e,t){var a=[][e];return!!a&&i((function(){a.call(null,t||function(){return 1},1)}))}},b727:function(e,t,a){var i=a("0366"),s=a("e330"),n=a("44ad"),l=a("7b0b"),r=a("07fa"),c=a("65f0"),o=s([].push),m=function(e){var t=1==e,a=2==e,s=3==e,m=4==e,u=6==e,d=7==e,v=5==e||u;return function(f,p,b,h){for(var C,k,_=l(f),g=n(_),x=i(p,b),y=r(g),w=0,A=h||c,L=t?A(f,y):a||d?A(f,0):void 0;y>w;w++)if((v||w in g)&&(C=g[w],k=x(C,w,_),e))if(t)L[w]=k;else if(k)switch(e){case 3:return!0;case 5:return C;case 6:return w;case 2:o(L,C)}else switch(e){case 4:return!1;case 7:o(L,C)}return u?-1:s||m?m:L}};e.exports={forEach:m(0),map:m(1),filter:m(2),some:m(3),every:m(4),find:m(5),findIndex:m(6),filterReject:m(7)}},c065:function(e,t,a){},e8b5:function(e,t,a){var i=a("c6b6");e.exports=Array.isArray||function(e){return"Array"==i(e)}}}]);
//# sourceMappingURL=index.09a5af9b.js.map