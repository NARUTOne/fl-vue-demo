(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{273:function(e,t,a){},340:function(e,t,a){"use strict";var o=a(273);a.n(o).a},359:function(e,t,a){"use strict";a.r(t);var o=a(347),s=a(279),l=a(346),r=a(262),n=a(282),i=a(339),d=a(348),c=a(349),v=a(237),u=a(238),m=a(239),_=a(235),h=a(85),p=a(23),f=a(231),b=a(232),w=a(81),y=[{name:"John Brown",age:18,address:"New York No. 1 Lake Park",date:"2016-10-03"},{name:"Jim Green",age:24,address:"London No. 1 Lake Park",date:"2016-10-01"},{name:"Joe Black",age:30,address:"Sydney No. 1 Lake Park",date:"2016-10-02"},{name:"Jon Snow",age:26,address:"Ottawa No. 2 Lake Park",date:"2016-10-04"}],k={name:"IviewPits",components:{Row:b.a,Col:f.a,Icon:p.a,Spin:h.a,FLIcon:w.g,Button:_.a,Dropdown:m.a,DropdownMenu:u.a,DropdownItem:v.a,AutoComplete:c.a,Select:d.a,Option:i.a,Form:n.a,FormItem:r.a,DatePicker:l.a,Demo:w.d,Doc:w.e,DocLine:w.f,iSwitch:s.a,Table:o.a},data:function(){this.$createElement;return{value1:"",data1:[],selectVal:"null",asynSelect:"",asynSelectList:[],formValidate:{date:"",date2:""},statisMode:"",switch1:!1,columns1:[{title:"Name",key:"name",render:function(e,t){return e("span",["FL-"+t.row.name])}},{title:"Age",key:"age",render:function(e,t){return e("span",["FL-"+t.row.age])}},{title:"Address",key:"address"}],tableData:y}},mounted:function(){this.$Message.info("iview-message")},methods:{handleReset:function(){this.$refs.formValidate.resetFields(),this.formValidate.date="",this.formValidate.date2=""},handleAsynSelect:function(){var e=this;setTimeout(function(){e.asynSelectList=[{id:"0",name:"label-0"},{id:"1",name:"label-1"},{id:"2",name:"label-2"},{id:"3",name:"label-3"},{id:"4",name:"label-4"}],e.asynSelect="1"},600)},handleSearch1:function(e){var t=this;e?(this.data1=[""],setTimeout(function(){t.data1=e?[e+"32",e+e,e+e+e]:[]},500)):this.data1=[]},handleSwitchchange:function(e){this.switch1=e}}},D=(a(340),a(0)),S=Object(D.a)(k,function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"iview-pits"},[a("Row",{attrs:{gutter:8}},[a("Col",{attrs:{md:12,xs:24}},[a("Demo",[a("div",{attrs:{slot:"header"},slot:"header"},[e._v("AutoComputed-async")]),e._v(" "),a("div",{attrs:{slot:"body"},slot:"body"},[a("AutoComplete",{staticStyle:{width:"200px"},attrs:{data:e.data1,clearable:"",placeholder:"input here"},on:{"on-search":e.handleSearch1},model:{value:e.value1,callback:function(t){e.value1=t},expression:"value1"}})],1),e._v(" "),a("div",{attrs:{slot:"footer"},slot:"footer"},[a("Doc",[a("DocLine",{attrs:{type:"bug"}},[e._v("异步数据展示，不展开下拉")]),e._v(" "),a("DocLine",[e._v("解决：设置默认值"),a("code",[e._v(e._s('[""]'))])])],1)],1)])],1),e._v(" "),a("Col",{attrs:{md:12,xs:24}},[a("Demo",{attrs:{dark:""}},[a("div",{attrs:{slot:"header"},slot:"header"}),e._v(" "),a("div",{attrs:{slot:"body"},slot:"body"},[a("Select",{style:{width:"300px"},model:{value:e.selectVal,callback:function(t){e.selectVal=t},expression:"selectVal"}},[a("Option",{attrs:{value:"null"}},[e._v("全部")]),e._v(" "),a("Option",{attrs:{value:"1"}},[e._v("1")]),e._v(" "),a("Option",{attrs:{value:"2"}},[e._v("2")])],1),e._v(" "),a("Select",{style:{width:"300px"},model:{value:e.asynSelect,callback:function(t){e.asynSelect=t},expression:"asynSelect"}},e._l(e.asynSelectList,function(t,o){return a("Option",{key:o,attrs:{value:t.id}},[e._v(e._s(t.name))])})),e._v(" "),a("Button",{on:{click:e.handleAsynSelect}},[e._v("异步数据")])],1),e._v(" "),a("div",{attrs:{slot:"footer"},slot:"footer"},[a("Doc",[a("DocLine",{attrs:{type:"bug"}},[e._v("异步数据展示，下拉设置默认初始值，匹配不上")]),e._v(" "),a("DocLine",[a("a",{attrs:{href:"https://github.com/iview/iview/issues/3722"}},[e._v("Asynchronous creation of [Bug Report]select filterable #3722")])])],1)],1)])],1)],1),e._v(" "),a("Row",{attrs:{gutter:8}},[a("Col",{attrs:{md:12,xs:24}},[a("Demo",[a("div",{attrs:{slot:"header"},slot:"header"},[e._v("Form-reset-datePicker")]),e._v(" "),a("div",{attrs:{slot:"body"},slot:"body"},[a("Form",{ref:"formValidate",attrs:{model:e.formValidate}},[a("FormItem",{attrs:{prop:"date"}},[a("DatePicker",{attrs:{type:"date",placeholder:"贷款到日"},model:{value:e.formValidate.date,callback:function(t){e.$set(e.formValidate,"date",t)},expression:"formValidate.date"}})],1),e._v(" "),a("FormItem",{attrs:{prop:"date2"}},[a("DatePicker",{attrs:{editable:!1,type:"daterange",placeholder:"选择日期"},model:{value:e.formValidate.date2,callback:function(t){e.$set(e.formValidate,"date2",t)},expression:"formValidate.date2"}})],1)],1),e._v(" "),a("Button",{on:{click:e.handleReset}},[e._v("重置")])],1),e._v(" "),a("div",{attrs:{slot:"footer"},slot:"footer"},[a("Doc",[a("DocLine",{attrs:{type:"bug"}},[a("code",[e._v("DatePicker")]),e._v("类型为 daterange 无法重置输入的值，可以重置选择的日期")]),e._v(" "),a("DocLine",[e._v("解决：设置"),a("code",[e._v("editable:false")])])],1)],1)])],1),e._v(" "),a("Col",{attrs:{md:12,xs:24}},[a("Demo",[a("div",{attrs:{slot:"header"},slot:"header"},[e._v("Select-if")]),e._v(" "),a("div",{attrs:{slot:"body"},slot:"body"},[e.switch1?a("Select",{staticStyle:{width:"300px"},attrs:{placeholder:"请选择统计方式"},model:{value:e.statisMode,callback:function(t){e.statisMode=t},expression:"statisMode"}},[a("Option",{attrs:{value:"1"}},[e._v("32")]),e._v(" "),a("Option",{attrs:{value:"2"}},[e._v("汇总同评分不区分版本")]),e._v(" "),a("Option",{attrs:{value:"3"}},[e._v("区分评分和版本")])],1):a("Select",{staticStyle:{width:"300px"},attrs:{placeholder:"请选择统计方式"},model:{value:e.statisMode,callback:function(t){e.statisMode=t},expression:"statisMode"}},[a("Option",{attrs:{value:"4"}},[e._v("122")]),e._v(" "),a("Option",{attrs:{value:"5"}},[e._v("汇总本")]),e._v(" "),a("Option",{attrs:{value:"6"}},[e._v("区分版本")])],1),e._v(" "),a("iSwitch",{on:{"on-change":e.handleSwitchchange},model:{value:e.switch1,callback:function(t){e.switch1=t},expression:"switch1"}})],1),e._v(" "),a("div",{attrs:{slot:"footer"},slot:"footer"},[a("Doc",[a("DocLine",{attrs:{type:"bug"}},[a("code",[e._v("v-if")]),e._v("进行选择渲染 "),a("code",[e._v("select")]),e._v(" 在同 "),a("code",[e._v("v-model")]),e._v("下，出现选中文本错乱显示")]),e._v(" "),a("DocLine",[e._v("解决：改为"),a("code",[e._v("v-show")]),e._v(" 或 采用 "),a("code",[e._v("data")]),e._v(" 循环渲染(不同key)")])],1)],1)])],1)],1),e._v(" "),a("Row",{attrs:{gutter:8}},[a("Col",{attrs:{md:12,xs:24}},[a("Demo",[a("div",{attrs:{slot:"header"},slot:"header"},[e._v("Table-render")]),e._v(" "),a("div",{attrs:{slot:"body"},slot:"body"},[a("Table",{attrs:{columns:e.columns1,data:e.tableData}})],1),e._v(" "),a("div",{attrs:{slot:"footer"},slot:"footer"},[a("Doc",[a("DocLine",{attrs:{type:"warn"}},[a("code",[e._v("Table-render")]),e._v("渲染需要采用virtual-dom, 使用了vue中的render函数")])],1)],1)])],1),e._v(" "),a("Col",{attrs:{md:12,xs:24}})],1)],1)},[],!1,null,"7c67b6bd",null);S.options.__file="index.vue";t.default=S.exports}}]);