(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-08c6c2d1"],{"5fda":function(t,e,i){"use strict";i.d(e,"a",(function(){return T}));var n,o=i("2b0e"),a=i("2f79"),s=i("c637"),c=i("0056"),r=i("a723"),l=i("9b76"),u=i("906c"),h=i("7b1e"),b=i("58f2"),f=i("3a58"),p=i("d82f"),d=i("cf75"),m=i("8c18"),w=i("f29e"),O=i("ce2a");function v(t,e){var i=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),i.push.apply(i,n)}return i}function j(t){for(var e=1;e<arguments.length;e++){var i=null!=arguments[e]?arguments[e]:{};e%2?v(Object(i),!0).forEach((function(e){y(t,e,i[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(i)):v(Object(i)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(i,e))}))}return t}function y(t,e,i){return e in t?Object.defineProperty(t,e,{value:i,enumerable:!0,configurable:!0,writable:!0}):t[e]=i,t}var D=Object(b["a"])("show",{type:r["i"],defaultValue:!1}),k=D.mixin,g=D.props,S=D.prop,_=D.event,C=function(t){return""===t||Object(h["b"])(t)?0:(t=Object(f["c"])(t,0),t>0?t:0)},P=function(t){return""===t||!0===t||!(Object(f["c"])(t,0)<1)&&!!t},$=Object(d["d"])(Object(p["m"])(j(j({},g),{},{dismissLabel:Object(d["c"])(r["u"],"Close"),dismissible:Object(d["c"])(r["g"],!1),fade:Object(d["c"])(r["g"],!1),variant:Object(d["c"])(r["u"],"info")})),s["a"]),T=o["default"].extend({name:s["a"],mixins:[k,m["a"]],props:$,data:function(){return{countDown:0,localShow:P(this[S])}},watch:(n={},y(n,S,(function(t){this.countDown=C(t),this.localShow=P(t)})),y(n,"countDown",(function(t){var e=this;this.clearCountDownInterval();var i=this[S];Object(h["i"])(i)&&(this.$emit(c["n"],t),i!==t&&this.$emit(_,t),t>0?(this.localShow=!0,this.$_countDownTimeout=setTimeout((function(){e.countDown--}),1e3)):this.$nextTick((function(){Object(u["B"])((function(){e.localShow=!1}))})))})),y(n,"localShow",(function(t){var e=this[S];t||!this.dismissible&&!Object(h["i"])(e)||this.$emit(c["m"]),Object(h["i"])(e)||e===t||this.$emit(_,t)})),n),created:function(){this.$_filterTimer=null;var t=this[S];this.countDown=C(t),this.localShow=P(t)},beforeDestroy:function(){this.clearCountDownInterval()},methods:{dismiss:function(){this.clearCountDownInterval(),this.countDown=0,this.localShow=!1},clearCountDownInterval:function(){clearTimeout(this.$_countDownTimeout),this.$_countDownTimeout=null}},render:function(t){var e=t();if(this.localShow){var i=this.dismissible,n=this.variant,o=t();i&&(o=t(w["a"],{attrs:{"aria-label":this.dismissLabel},on:{click:this.dismiss}},[this.normalizeSlot(l["k"])])),e=t("div",{staticClass:"alert",class:y({"alert-dismissible":i},"alert-".concat(n),n),attrs:{role:"alert","aria-live":"polite","aria-atomic":!0},key:this[a["a"]]},[o,this.normalizeSlot()])}return t(O["a"],{props:{noFade:!this.fade}},[e])}})},"9e8b":function(t,e,i){"use strict";i.r(e);var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"p-4"},[i("h4",{staticClass:"mb-2"},[t._v(" Layout Blank ")]),i("b-alert",{attrs:{show:"",variant:"primary"}},[i("div",{staticClass:"alert-body"},[i("p",[i("strong",[t._v("Info: ")]),i("span",[t._v("This layout is used in Authentication & Miscellaneous page. Please check the ")]),i("b-link",{staticClass:"alert-link",attrs:{href:"#thisisdocslink",target:"blank"}},[t._v("Layout Blank documentation ")]),i("span",[t._v(" for more details.")])],1)])])],1)},o=[],a=i("5fda"),s=i("aa59"),c={components:{BAlert:a["a"],BLink:s["a"]}},r=c,l=i("2877"),u=Object(l["a"])(r,n,o,!1,null,null,null);e["default"]=u.exports}}]);
//# sourceMappingURL=chunk-08c6c2d1.db54005a.js.map