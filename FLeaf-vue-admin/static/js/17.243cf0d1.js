(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{231:function(t,e,s){"use strict";var i=s(38);var o={name:"iCol",props:{span:[Number,String],order:[Number,String],offset:[Number,String],push:[Number,String],pull:[Number,String],className:String,xs:[Number,Object],sm:[Number,Object],md:[Number,Object],lg:[Number,Object]},data:()=>({gutter:0}),computed:{classes(){let t=["ivu-col",{[`ivu-col-span-${this.span}`]:this.span,[`ivu-col-order-${this.order}`]:this.order,[`ivu-col-offset-${this.offset}`]:this.offset,[`ivu-col-push-${this.push}`]:this.push,[`ivu-col-pull-${this.pull}`]:this.pull,[`${this.className}`]:!!this.className}];return["xs","sm","md","lg"].forEach(e=>{if("number"==typeof this[e])t.push(`ivu-col-span-${e}-${this[e]}`);else if("object"==typeof this[e]){let s=this[e];Object.keys(s).forEach(i=>{t.push("span"!==i?`ivu-col-${e}-${i}-${s[i]}`:`ivu-col-span-${e}-${s[i]}`)})}}),t},styles(){let t={};return 0!==this.gutter&&(t={paddingLeft:this.gutter/2+"px",paddingRight:this.gutter/2+"px"}),t}},methods:{updateGutter(){const t=Object(i.f)(this,"Row");t&&t.updateGutter(t.gutter)}},mounted(){this.updateGutter()},beforeDestroy(){this.updateGutter()}},a=s(0),n=Object(a.a)(o,function(){var t=this.$createElement;return(this._self._c||t)("div",{class:this.classes,style:this.styles},[this._t("default")],2)},[],!1,null,null,null);n.options.__file="col.vue";var l=n.exports;e.a=l},232:function(t,e,s){"use strict";var i=s(38);var o={name:"Row",props:{type:{validator:t=>Object(i.l)(t,["flex"])},align:{validator:t=>Object(i.l)(t,["top","middle","bottom"])},justify:{validator:t=>Object(i.l)(t,["start","end","center","space-around","space-between"])},gutter:{type:Number,default:0},className:String},computed:{classes(){return[{"ivu-row":!this.type,[`ivu-row-${this.type}`]:!!this.type,[`ivu-row-${this.type}-${this.align}`]:!!this.align,[`ivu-row-${this.type}-${this.justify}`]:!!this.justify,[`${this.className}`]:!!this.className}]},styles(){let t={};return 0!==this.gutter&&(t={marginLeft:this.gutter/-2+"px",marginRight:this.gutter/-2+"px"}),t}},methods:{updateGutter(t){const e=Object(i.e)(this,"iCol"),s=Object(i.d)(e,"iCol",!1);s.length&&s.forEach(e=>{0!==t&&(e.gutter=t)})}},watch:{gutter(t){this.updateGutter(t)}}},a=s(0),n=Object(a.a)(o,function(){var t=this.$createElement;return(this._self._c||t)("div",{class:this.classes,style:this.styles},[this._t("default")],2)},[],!1,null,null,null);n.options.__file="row.vue";var l=n.exports;e.a=l},234:function(t,e,s){"use strict";var i=s(23),o=s(38);var a={name:"Button",components:{Icon:i.a},props:{type:{validator:t=>Object(o.l)(t,["primary","ghost","dashed","text","info","success","warning","error","default"])},shape:{validator:t=>Object(o.l)(t,["circle","circle-outline"])},size:{validator:t=>Object(o.l)(t,["small","large","default"])},loading:Boolean,disabled:Boolean,htmlType:{default:"button",validator:t=>Object(o.l)(t,["button","submit","reset"])},icon:String,long:{type:Boolean,default:!1}},data:()=>({showSlot:!0}),computed:{classes(){return["ivu-btn",{[`ivu-btn-${this.type}`]:!!this.type,"ivu-btn-long":this.long,[`ivu-btn-${this.shape}`]:!!this.shape,[`ivu-btn-${this.size}`]:!!this.size,"ivu-btn-loading":null!=this.loading&&this.loading,"ivu-btn-icon-only":!this.showSlot&&(!!this.icon||this.loading)}]}},methods:{handleClick(t){this.$emit("click",t)}},mounted(){this.showSlot=void 0!==this.$slots.default}},n=s(0),l=Object(n.a)(a,function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("button",{class:t.classes,attrs:{type:t.htmlType,disabled:t.disabled},on:{click:t.handleClick}},[t.loading?s("Icon",{staticClass:"ivu-load-loop",attrs:{type:"load-c"}}):t._e(),t._v(" "),t.icon&&!t.loading?s("Icon",{attrs:{type:t.icon}}):t._e(),t._v(" "),t.showSlot?s("span",{ref:"slot"},[t._t("default")],2):t._e()],1)},[],!1,null,null,null);l.options.__file="button.vue";e.a=l.exports},235:function(t,e,s){"use strict";var i=s(234),o=s(38);var a={name:"ButtonGroup",props:{size:{validator:t=>Object(o.l)(t,["small","large","default"])},shape:{validator:t=>Object(o.l)(t,["circle","circle-outline"])},vertical:{type:Boolean,default:!1}},computed:{classes(){return["ivu-btn-group",{[`ivu-btn-group-${this.size}`]:!!this.size,[`ivu-btn-group-${this.shape}`]:!!this.shape,"ivu-btn-group-vertical":this.vertical}]}}},n=s(0),l=Object(n.a)(a,function(){var t=this.$createElement;return(this._self._c||t)("div",{class:this.classes},[this._t("default")],2)},[],!1,null,null,null);l.options.__file="button-group.vue";var r=l.exports;i.a.Group=r;e.a=i.a},361:function(t,e,s){"use strict";s.r(e);var i=s(235),o=s(231),a=s(232),n=s(81),l=s(240),r={name:"CMessage",components:{Demo:n.d,Doc:n.e,DocLine:n.f,Row:a.a,Col:o.a,PageDemo:l.a,Button:i.a},data:function(){return{filterRepeat:!1}},methods:{info:function(){this.$FLVMessage.info("This is a default info tip")},loading:function(){this.$FLVMessage.loading("This is a loading tip")},success:function(){this.$FLVMessage.success("This is a success tip")},warning:function(){this.$FLVMessage.warning("This is a warning tip")},error:function(){this.$FLVMessage.error("This is an error tip")},close:function(){this.$FLVMessage.info({message:"10S内可关闭message",duration:1e4,closable:!0})},noTime:function(){this.$FLVMessage.info({message:"只能手动关闭message",duration:0,closable:!0})},renderFunc:function(){var t=this.$createElement;this.$FLVMessage.info({render:function(){return t("span",["这是",t("a",["render"]),"自定义渲染"])}})},renderFilterRepeat:function(){var t=!this.filterRepeat;this.filterRepeat=t,this.$FLVMessage.config({filterRepeat:t}),this.$FLVMessage.warning("全局配置过滤重复："+(this.filterRepeat?"是":"否"))}}},c=s(0),u=Object(c.a)(r,function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"components-message"},[s("PageDemo",[s("template",{slot:"page-title"},[t._v("FireLeaf-Vue 🍂 Components")]),t._v(" "),s("template",{slot:"page-quote"},[t._v("\n\t\t\t\t类iview-Message 组件 \n\t\t\t\t"),s("a",{attrs:{href:"https://www.iviewui.com/components/message",target:"_blank"}},[t._v("iview Message")])]),t._v(" "),s("template",{slot:"page-desc"},[s("Row",{attrs:{gutter:8,"class-name":"margin-b-1"}},[s("Col",{attrs:{md:12,xs:24}},[s("Demo",[s("span",{attrs:{slot:"header"},slot:"header"},[t._v("Message-basic")]),t._v(" "),s("div",{attrs:{slot:"body"},slot:"body"},[s("Button",{on:{click:t.info}},[t._v("info")]),t._v(" "),s("Button",{on:{click:t.success}},[t._v("success")]),t._v(" "),s("Button",{on:{click:t.warning}},[t._v("warning")]),t._v(" "),s("Button",{on:{click:t.error}},[t._v("error")]),t._v(" "),s("Button",{on:{click:t.loading}},[t._v("loading")])],1),t._v(" "),s("div",{attrs:{slot:"footer"},slot:"footer"},[s("Doc",[s("DocLine",[s("code",[t._v("Message")]),t._v("基本提示，默认3s关闭")])],1)],1)])],1),t._v(" "),s("Col",{attrs:{md:12,xs:24}},[s("Demo",[s("span",{attrs:{slot:"header"},slot:"header"},[t._v("Message-close")]),t._v(" "),s("div",{attrs:{slot:"body"},slot:"body"},[s("Button",{on:{click:t.close}},[t._v("close")]),t._v(" "),s("Button",{on:{click:t.noTime}},[t._v("noTime")])],1),t._v(" "),s("div",{attrs:{slot:"footer"},slot:"footer"},[s("Doc",[s("DocLine",[s("code",[t._v("Message config：")]),t._v("duration为0 则不关闭")]),t._v(" "),s("DocLine",[s("code",[t._v("Message config：")]),t._v("closable 显示关闭")])],1)],1)])],1)],1),t._v(" "),s("Row",{attrs:{gutter:8,"class-name":"margin-b-1"}},[s("Col",{attrs:{md:12,xs:24}},[s("Demo",[s("span",{attrs:{slot:"header"},slot:"header"},[t._v("Message-confirm")]),t._v(" "),s("div",{attrs:{slot:"body"},slot:"body"},[s("Button",{on:{click:t.renderFunc}},[t._v("render message")])],1),t._v(" "),s("div",{attrs:{slot:"footer"},slot:"footer"},[s("Doc",[s("DocLine",[s("code",[t._v("Message render")]),t._v("自定义描述内容")])],1)],1)])],1),t._v(" "),s("Col",{attrs:{md:12,xs:24}},[s("Demo",[s("span",{attrs:{slot:"header"},slot:"header"},[t._v("Message-filterRepeat")]),t._v(" "),s("div",{attrs:{slot:"body"},slot:"body"},[s("Button",{on:{click:t.renderFilterRepeat}},[t._v("repeat filter")])],1),t._v(" "),s("div",{attrs:{slot:"footer"},slot:"footer"},[s("Doc",[s("DocLine",[s("code",[t._v("Message repeat filter")]),t._v("配置过滤重复")])],1)],1)])],1)],1)],1)],2)],1)},[],!1,null,null,null);u.options.__file="index.vue";e.default=u.exports}}]);