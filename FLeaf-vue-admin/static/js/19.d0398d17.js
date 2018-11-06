(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{237:function(t,e,i){"use strict";var s=i(236),o=i(41);var r={name:"ButtonGroup",props:{size:{validator:t=>Object(o.l)(t,["small","large","default"])},shape:{validator:t=>Object(o.l)(t,["circle","circle-outline"])},vertical:{type:Boolean,default:!1}},computed:{classes(){return["ivu-btn-group",{[`ivu-btn-group-${this.size}`]:!!this.size,[`ivu-btn-group-${this.shape}`]:!!this.shape,"ivu-btn-group-vertical":this.vertical}]}}},n=i(0),a=Object(n.a)(r,function(){var t=this.$createElement;return(this._self._c||t)("div",{class:this.classes},[this._t("default")],2)},[],!1,null,null,null);a.options.__file="button-group.vue";var l=a.exports;s.a.Group=l;e.a=s.a},239:function(t,e,i){"use strict";var s=i(243);e.a=s.a},240:function(t,e,i){"use strict";var s=i(244);e.a=s.a},241:function(t,e,i){"use strict";var s=i(245),o=i(246),r=i(238),n=i(41);var a={name:"Dropdown",directives:{clickOutside:o.directive,TransferDom:r.a},components:{Drop:s.a},props:{trigger:{validator:t=>Object(n.l)(t,["click","hover","custom"]),default:"hover"},placement:{validator:t=>Object(n.l)(t,["top","top-start","top-end","bottom","bottom-start","bottom-end","left","left-start","left-end","right","right-start","right-end"]),default:"bottom"},visible:{type:Boolean,default:!1},transfer:{type:Boolean,default:!1}},computed:{transition(){return["bottom-start","bottom","bottom-end"].indexOf(this.placement)>-1?"slide-up":"fade"},dropdownCls(){return{"ivu-dropdown-transfer":this.transfer}}},data(){return{prefixCls:"ivu-dropdown",currentVisible:this.visible}},watch:{visible(t){this.currentVisible=t},currentVisible(t){t?this.$refs.drop.update():this.$refs.drop.destroy(),this.$emit("on-visible-change",t)}},methods:{handleClick(){return"custom"!==this.trigger&&("click"===this.trigger&&void(this.currentVisible=!this.currentVisible))},handleMouseenter(){return"custom"!==this.trigger&&("hover"===this.trigger&&(this.timeout&&clearTimeout(this.timeout),void(this.timeout=setTimeout(()=>{this.currentVisible=!0},250))))},handleMouseleave(){return"custom"!==this.trigger&&("hover"===this.trigger&&void(this.timeout&&(clearTimeout(this.timeout),this.timeout=setTimeout(()=>{this.currentVisible=!1},150))))},onClickoutside(t){this.handleClose(),this.currentVisible&&this.$emit("on-clickoutside",t)},handleClose(){return"custom"!==this.trigger&&("click"===this.trigger&&void(this.currentVisible=!1))},hasParent(){const t=Object(n.f)(this,"Dropdown");return t||!1}},mounted(){this.$on("on-click",t=>{const e=this.hasParent();e&&e.$emit("on-click",t)}),this.$on("on-hover-click",()=>{const t=this.hasParent();t?(this.$nextTick(()=>{if("custom"===this.trigger)return!1;this.currentVisible=!1}),t.$emit("on-hover-click")):this.$nextTick(()=>{if("custom"===this.trigger)return!1;this.currentVisible=!1})}),this.$on("on-haschild-click",()=>{this.$nextTick(()=>{if("custom"===this.trigger)return!1;this.currentVisible=!0});const t=this.hasParent();t&&t.$emit("on-haschild-click")})}},l=i(0),c=Object(l.a)(a,function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{directives:[{name:"click-outside",rawName:"v-click-outside",value:t.onClickoutside,expression:"onClickoutside"}],class:[t.prefixCls],on:{mouseenter:t.handleMouseenter,mouseleave:t.handleMouseleave}},[i("div",{ref:"reference",class:[t.prefixCls+"-rel"],on:{click:t.handleClick}},[t._t("default")],2),t._v(" "),i("transition",{attrs:{name:"transition-drop"}},[i("Drop",{directives:[{name:"show",rawName:"v-show",value:t.currentVisible,expression:"currentVisible"},{name:"transfer-dom",rawName:"v-transfer-dom"}],ref:"drop",class:t.dropdownCls,attrs:{placement:t.placement,"data-transfer":t.transfer},nativeOn:{mouseenter:function(e){return t.handleMouseenter(e)},mouseleave:function(e){return t.handleMouseleave(e)}}},[t._t("list")],2)],1)],1)},[],!1,null,null,null);c.options.__file="dropdown.vue";var u=c.exports,p=i(244),d=i(243);u.Menu=p.a,u.Item=d.a;e.a=u},243:function(t,e,i){"use strict";var s=i(41);const o="ivu-dropdown-item";var r={name:"DropdownItem",props:{name:{type:[String,Number]},disabled:{type:Boolean,default:!1},selected:{type:Boolean,default:!1},divided:{type:Boolean,default:!1}},computed:{classes(){return[`${o}`,{[`${o}-disabled`]:this.disabled,[`${o}-selected`]:this.selected,[`${o}-divided`]:this.divided}]}},methods:{handleClick(){const t=Object(s.f)(this,"Dropdown"),e=this.$parent&&"Dropdown"===this.$parent.$options.name;this.disabled?this.$nextTick(()=>{t.currentVisible=!0}):e?this.$parent.$emit("on-haschild-click"):t&&"Dropdown"===t.$options.name&&t.$emit("on-hover-click"),t.$emit("on-click",this.name)}}},n=i(0),a=Object(n.a)(r,function(){var t=this.$createElement;return(this._self._c||t)("li",{class:this.classes,on:{click:this.handleClick}},[this._t("default")],2)},[],!1,null,null,null);a.options.__file="dropdown-item.vue";e.a=a.exports},244:function(t,e,i){"use strict";var s={name:"DropdownMenu"},o=i(0),r=Object(o.a)(s,function(){var t=this.$createElement;return(this._self._c||t)("ul",{staticClass:"ivu-dropdown-menu"},[this._t("default")],2)},[],!1,null,null,null);r.options.__file="dropdown-menu.vue";e.a=r.exports},245:function(t,e,i){"use strict";var s=i(4),o=i(41);const r=s.a.prototype.$isServer,n=r?function(){}:i(252);var a={name:"Drop",props:{placement:{type:String,default:"bottom-start"},className:{type:String}},data:()=>({popper:null,width:"",popperStatus:!1}),computed:{styles(){let t={};return this.width&&(t.width=`${this.width}px`),t}},methods:{update(){r||(this.popper?this.$nextTick(()=>{this.popper.update(),this.popperStatus=!0}):this.$nextTick(()=>{this.popper=new n(this.$parent.$refs.reference,this.$el,{placement:this.placement,modifiers:{computeStyle:{gpuAcceleration:!1},preventOverflow:{boundariesElement:"window"}},onCreate:()=>{this.resetTransformOrigin(),this.$nextTick(this.popper.update())},onUpdate:()=>{this.resetTransformOrigin()}})}),"iSelect"===this.$parent.$options.name&&(this.width=parseInt(Object(o.k)(this.$parent.$el,"width"))))},destroy(){this.popper&&setTimeout(()=>{this.popper&&!this.popperStatus&&(this.popper.destroy(),this.popper=null),this.popperStatus=!1},300)},resetTransformOrigin(){if(!this.popper)return;let t=this.popper.popper.getAttribute("x-placement"),e=t.split("-")[0],i=t.split("-")[1];"left"===t||"right"===t||(this.popper.popper.style.transformOrigin="bottom"===e||"top"!==e&&"start"===i?"center top":"center bottom")}},created(){this.$on("on-update-popper",this.update),this.$on("on-destroy-popper",this.destroy)},beforeDestroy(){this.popper&&this.popper.destroy()}},l=i(0),c=Object(l.a)(a,function(){var t=this.$createElement;return(this._self._c||t)("div",{staticClass:"ivu-select-dropdown",class:this.className,style:this.styles},[this._t("default")],2)},[],!1,null,null,null);c.options.__file="dropdown.vue";e.a=c.exports},276:function(t,e,i){},344:function(t,e,i){"use strict";var s=i(276);i.n(s).a},372:function(t,e,i){"use strict";i.r(e);var s=i(239),o=i(240),r=i(241),n=i(24),a=i(237),l=i(234),c=i(233),u=i(82),p=i(242),d={name:"CContextMenu",components:{Row:c.a,Col:l.a,Button:a.a,Icon:n.a,Demo:u.d,Doc:u.e,DocLine:u.f,PageDemo:p.a,VueContextMenu:u.n,Dropdown:r.a,DropdownMenu:o.a,DropdownItem:s.a},data:function(){return{visibel:!1}},methods:{handleShowChange:function(t){console.log(t),this.visibel=t},handleDropClick:function(t){this.$Message.info(t)},handleClick:function(t){this.$Message.info(t)}}},h=(i(344),i(0)),m=Object(h.a)(d,function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"components-contextmenu"},[i("PageDemo",[i("template",{slot:"page-title"},[t._v("FireLeaf-Vue 🍂 Components")]),t._v(" "),i("template",{slot:"page-quote"},[t._v("\n\t\t\t\tvue-context-menu 组件 \n\t\t\t")]),t._v(" "),i("template",{slot:"page-desc"},[i("Row",{attrs:{gutter:8,"class-name":"margin-b-1"}},[i("Col",{attrs:{md:12,xs:24}},[i("Demo",[i("span",{attrs:{slot:"header"},slot:"header"},[t._v("ContextMenu-basic")]),t._v(" "),i("div",{attrs:{slot:"body"},slot:"body"},[i("a",{ref:"contextExam",attrs:{href:"javascript:;"}},[t._v("右键测试")]),t._v(" "),i("VueContextMenu",{staticClass:"right-menu",attrs:{target:t.$refs.contextExam,show:t.visibel},on:{"show-change":t.handleShowChange}},[i("a",{attrs:{href:"javascript:;"},on:{click:function(e){t.handleClick("复制")}}},[t._v("复制")]),t._v(" "),i("a",{attrs:{href:"javascript:;"},on:{click:function(e){t.handleClick("引用")}}},[t._v("引用")]),t._v(" "),i("a",{attrs:{href:"javascript:;"},on:{click:function(e){t.handleClick("删除")}}},[t._v("删除")])])],1),t._v(" "),i("div",{attrs:{slot:"footer"},slot:"footer"},[i("Doc",[i("DocLine",[i("code",[t._v("ContextMenu")]),t._v("基本折叠，默认可以同时展开多个面板，可以设置默认展开第几个。")])],1)],1)])],1),t._v(" "),i("Col",{attrs:{md:12,xs:24}},[i("Demo",[i("span",{attrs:{slot:"header"},slot:"header"},[t._v("iview-Dropdown-click")]),t._v(" "),i("div",{attrs:{slot:"body"},slot:"body"},[i("Dropdown",{staticStyle:{"margin-left":"20px"},attrs:{trigger:"click"},on:{"on-click":t.handleDropClick}},[i("a",{attrs:{href:"javascript:void(0)"}},[t._v("\n                      right click\n                      "),i("Icon",{attrs:{type:"ios-arrow-down"}})],1),t._v(" "),i("DropdownMenu",{attrs:{slot:"list"},slot:"list"},[i("DropdownItem",{attrs:{name:"返回"}},[t._v("返回")]),t._v(" "),i("DropdownItem",{staticStyle:{color:"#ed4014"},attrs:{name:"删除"}},[t._v("删除")])],1)],1)],1),t._v(" "),i("div",{attrs:{slot:"footer"},slot:"footer"},[i("Doc",[i("DocLine",{attrs:{type:"warn"}},[i("code",[t._v("iview3.x 以上支持Dropdown")]),t._v("右键模拟。")])],1)],1)])],1)],1)],1)],2)],1)},[],!1,null,null,null);m.options.__file="index.vue";e.default=m.exports}}]);