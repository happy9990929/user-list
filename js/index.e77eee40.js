(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["index"],{"0b42":function(t,e,a){var i=a("da84"),s=a("e8b5"),n=a("68ee"),l=a("861d"),c=a("b622"),r=c("species"),o=i.Array;t.exports=function(t){var e;return s(t)&&(e=t.constructor,n(e)&&(e===o||s(e.prototype))?e=void 0:l(e)&&(e=e[r],null===e&&(e=void 0))),void 0===e?o:e}},"159b":function(t,e,a){var i=a("da84"),s=a("fdbc"),n=a("785a"),l=a("17c2"),c=a("9112"),r=function(t){if(t&&t.forEach!==l)try{c(t,"forEach",l)}catch(e){t.forEach=l}};for(var o in s)s[o]&&r(i[o]&&i[o].prototype);r(n)},1799:function(t,e,a){"use strict";var i=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},s=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("nav",{staticClass:"mt-3"},[a("ul",{staticClass:"pagination justify-content-end"},[a("li",{staticClass:"page-item"},[a("a",{staticClass:"page-link",attrs:{href:"#","aria-label":"Previous"}},[a("span",{attrs:{"aria-hidden":"true"}},[t._v("«")])])]),a("li",{staticClass:"page-item"},[a("a",{staticClass:"page-link",attrs:{href:"#"}},[t._v("1")])]),a("li",{staticClass:"page-item"},[a("a",{staticClass:"page-link",attrs:{href:"#"}},[t._v("2")])]),a("li",{staticClass:"page-item"},[a("a",{staticClass:"page-link",attrs:{href:"#"}},[t._v("3")])]),a("li",{staticClass:"page-item"},[a("a",{staticClass:"page-link",attrs:{href:"#","aria-label":"Next"}},[a("span",{attrs:{"aria-hidden":"true"}},[t._v("»")])])])])])}],n={},l=n,c=a("2877"),r=Object(c["a"])(l,i,s,!1,null,null,null);e["a"]=r.exports},"17c2":function(t,e,a){"use strict";var i=a("b727").forEach,s=a("a640"),n=s("forEach");t.exports=n?[].forEach:function(t){return i(this,t,arguments.length>1?arguments[1]:void 0)}},"1e4b":function(t,e,a){"use strict";a.r(e);var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"container"},[a("div",{staticClass:"mt-5"},[a("nav",{staticClass:"mb-4"},[a("ul",{staticClass:"navBtn"},t._l(t.menu,(function(e){return a("li",{key:e.title},[a("router-link",{staticClass:"navLink",class:{active:t.currentMenu===e.title},attrs:{to:"/"},nativeOn:{click:function(a){return t.changeMenu(e.title)}}},[a("span",{staticClass:"me-1",class:e.icon}),t._v(" "+t._s(e.title))])],1)})),0)]),a("div",{staticClass:"card mt-1"},[a("div",{staticClass:"card-body p-4"},[a("form",[a("div",{staticClass:"title mb-3"},[t._v("測驗者列表")]),a("div",{staticClass:"row"},[a("div",{staticClass:"col-12 col-md-4 mb-3"},[a("div",{staticClass:"d-flex align-items-center"},[a("label",{staticClass:"col-4 form-label",attrs:{for:"name"}},[t._v("測驗者姓名：")]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.info.name,expression:"info.name"}],staticClass:"form-control",attrs:{type:"text",id:"name"},domProps:{value:t.info.name},on:{input:function(e){e.target.composing||t.$set(t.info,"name",e.target.value)}}})])]),a("div",{staticClass:"col-12 col-md-4 mb-3"},[a("div",{staticClass:"d-flex align-items-center"},[a("label",{staticClass:"col-4 form-label"},[t._v("完成測驗：")]),a("select",{directives:[{name:"model",rawName:"v-model",value:t.info.complete,expression:"info.complete"}],staticClass:"form-select",on:{change:function(e){var a=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){var e="_value"in t?t._value:t.value;return e}));t.$set(t.info,"complete",e.target.multiple?a:a[0])}}},t._l(t.completeOptions,(function(e){return a("option",{key:e.value,domProps:{value:e.value}},[t._v(t._s(e.label))])})),0)])]),a("div",{staticClass:"col-12 col-md-4 mb-3"},[a("div",{staticClass:"d-flex align-items-center"},[a("label",{staticClass:"col-4 form-label",attrs:{for:"correctRate"}},[t._v("測驗正確率")]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.info.correctRate,expression:"info.correctRate"}],staticClass:"form-control me-3",attrs:{type:"text",id:"correctRate"},domProps:{value:t.info.correctRate},on:{input:function(e){e.target.composing||t.$set(t.info,"correctRate",e.target.value)}}}),a("span",{staticClass:"text-nowrap"},[t._v("% 以上")])])]),a("div",{staticClass:"col-12 col-md-4 mb-3"},[a("div",{staticClass:"d-flex align-items-center"},[a("label",{staticClass:"col-4 form-label",attrs:{for:"email"}},[t._v("測驗者e-mail：")]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.info.email,expression:"info.email"}],staticClass:"form-control",attrs:{type:"text",id:"email"},domProps:{value:t.info.email},on:{input:function(e){e.target.composing||t.$set(t.info,"email",e.target.value)}}})])]),a("div",{staticClass:"col-12 col-md-4 mb-3"},[a("div",{staticClass:"d-flex align-items-center"},[a("label",{staticClass:"col-4 form-label"},[t._v("測驗者身分：")]),a("select",{directives:[{name:"model",rawName:"v-model",value:t.info.trainees,expression:"info.trainees"}],staticClass:"form-select",on:{change:function(e){var a=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){var e="_value"in t?t._value:t.value;return e}));t.$set(t.info,"trainees",e.target.multiple?a:a[0])}}},t._l(t.trainees,(function(e){return a("option",{key:e.value,domProps:{value:e.value}},[t._v(t._s(e.label))])})),0)])]),a("div",{staticClass:"col-12 col-md-4 mb-3"},[a("div",{staticClass:"d-flex align-items-center"},[a("label",{staticClass:"col-4 form-label",attrs:{for:"remark"}},[t._v("備註：")]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.info.remark,expression:"info.remark"}],staticClass:"form-control",attrs:{type:"text",id:"name"},domProps:{value:t.info.remark},on:{input:function(e){e.target.composing||t.$set(t.info,"remark",e.target.value)}}})])])]),a("div",{staticClass:"text-center mt-3"},[a("button",{staticClass:"btn btn-primary me-3",attrs:{type:"button"}},[t._v("查詢")]),a("button",{staticClass:"btn btn-outline-primary",attrs:{type:"button"},on:{click:t.clearForm}},[t._v("清除查詢")])])])])])]),a("div",{staticClass:"card my-5"},[a("div",{staticClass:"card-body p-4"},[t._m(0),a("div",{staticClass:"table-responsive mt-3"},[a("table",{staticClass:"table text-nowrap"},[a("thead",[a("tr",[a("th",[a("div",{staticClass:"form-check"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.allChecked,expression:"allChecked"}],staticClass:"form-check-input",attrs:{type:"checkbox"},domProps:{checked:Array.isArray(t.allChecked)?t._i(t.allChecked,null)>-1:t.allChecked},on:{click:t.checkedAll,change:function(e){var a=t.allChecked,i=e.target,s=!!i.checked;if(Array.isArray(a)){var n=null,l=t._i(a,n);i.checked?l<0&&(t.allChecked=a.concat([n])):l>-1&&(t.allChecked=a.slice(0,l).concat(a.slice(l+1)))}else t.allChecked=s}}})])]),a("th",[t._v("姓名")]),a("th",[t._v("身份")]),a("th",[t._v("E-mail")]),a("th",[t._v("備註")]),a("th",[t._v("操作")])])]),a("tbody",t._l(t.tableInfo,(function(e){return a("tr",{key:e.id},[a("td",[a("input",{directives:[{name:"model",rawName:"v-model",value:t.checkboxList,expression:"checkboxList"}],staticClass:"form-check-input",attrs:{type:"checkbox"},domProps:{value:e.id,checked:Array.isArray(t.checkboxList)?t._i(t.checkboxList,e.id)>-1:t.checkboxList},on:{change:function(a){var i=t.checkboxList,s=a.target,n=!!s.checked;if(Array.isArray(i)){var l=e.id,c=t._i(i,l);s.checked?c<0&&(t.checkboxList=i.concat([l])):c>-1&&(t.checkboxList=i.slice(0,c).concat(i.slice(c+1)))}else t.checkboxList=n}}})]),a("td",[t._v(t._s(e.name))]),a("td",[t._v(t._s(e.isTrainees?"學員":"非學員"))]),a("td",[t._v(t._s(e.email))]),a("td",[t._v(t._s(e.remark))]),a("td",[a("router-link",{staticClass:" btn-detail",attrs:{to:{name:"detail",params:{id:e.id}}}},[t._v("詳細資訊")])],1)])})),0)])]),a("Pagination")],1)])])},s=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("button",{staticClass:"btn btn-border me-3",attrs:{type:"button"}},[t._v("設為學員")]),a("button",{staticClass:"btn btn-border",attrs:{type:"button"}},[t._v("設為非學員")])])}],n=(a("d3b7"),a("159b"),a("1799")),l={components:{Pagination:n["a"]},data:function(){return{menu:[{title:"測驗管理",icon:"icon-pencil"},{title:"測驗者管理",icon:"icon-user"},{title:"資訊管理",icon:"icon-cog"},{title:"意願名單",icon:"icon-open-book"}],currentMenu:"測驗管理",info:{name:"",correctRate:"",email:"",remark:"",complete:"all",trainees:null},completeOptions:[{label:"全部",value:"all"},{label:"Java",value:"java"},{label:"Vue",value:"vue"}],trainees:[{label:"全部",value:null},{label:"學員",value:!0},{label:"非學員",value:!1}],tableInfo:[{id:"1",selectd:!0,name:"周小良",isTrainees:!1,email:"zhouxiaoliang@gmail.com",remark:"–"},{id:"2",selectd:!1,name:"孟小祥",isTrainees:!1,email:"mengxiaoxiang@yahoo.com.tw",remark:"對Java課程有興趣"},{id:"3",selectd:!1,name:"張小昊",isTrainees:!1,email:"zhangxiaohao@gmail.com",remark:"–"},{id:"4",selectd:!1,name:"楊小明",isTrainees:!0,email:"yangxiaomiing@gmail.com",remark:"正在上Java進階課程"},{id:"5",selectd:!1,name:"高小琳",isTrainees:!0,email:"gaoxiaolin@hotmail.com",remark:"正在上Java進階課程"}],checkboxList:[],allChecked:!1}},methods:{clearForm:function(){this.info={name:"",correctRate:"",email:"",remark:"",complete:"all",trainees:null}},checkedAll:function(){var t=this;this.allChecked?this.checkboxList=[]:(this.checkboxList=[],this.tableInfo.forEach((function(e){t.checkboxList.push(e.id)})))},changeMenu:function(t){this.currentMenu=t}}},c=l,r=(a("60c1"),a("2877")),o=Object(r["a"])(c,i,s,!1,null,"70c882fb",null);e["default"]=o.exports},"60c1":function(t,e,a){"use strict";a("986d")},"65f0":function(t,e,a){var i=a("0b42");t.exports=function(t,e){return new(i(t))(0===e?0:e)}},"986d":function(t,e,a){},a640:function(t,e,a){"use strict";var i=a("d039");t.exports=function(t,e){var a=[][t];return!!a&&i((function(){a.call(null,e||function(){return 1},1)}))}},b727:function(t,e,a){var i=a("0366"),s=a("e330"),n=a("44ad"),l=a("7b0b"),c=a("07fa"),r=a("65f0"),o=s([].push),m=function(t){var e=1==t,a=2==t,s=3==t,m=4==t,u=6==t,d=7==t,v=5==t||u;return function(f,p,b,h){for(var C,k,_=l(f),g=n(_),x=i(p,b),y=c(g),w=0,A=h||r,L=e?A(f,y):a||d?A(f,0):void 0;y>w;w++)if((v||w in g)&&(C=g[w],k=x(C,w,_),t))if(e)L[w]=k;else if(k)switch(t){case 3:return!0;case 5:return C;case 6:return w;case 2:o(L,C)}else switch(t){case 4:return!1;case 7:o(L,C)}return u?-1:s||m?m:L}};t.exports={forEach:m(0),map:m(1),filter:m(2),some:m(3),every:m(4),find:m(5),findIndex:m(6),filterReject:m(7)}},e8b5:function(t,e,a){var i=a("c6b6");t.exports=Array.isArray||function(t){return"Array"==i(t)}}}]);
//# sourceMappingURL=index.e77eee40.js.map