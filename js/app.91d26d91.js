(function(e){function t(t){for(var r,u,a=t[0],i=t[1],l=t[2],b=0,d=[];b<a.length;b++)u=a[b],Object.prototype.hasOwnProperty.call(o,u)&&o[u]&&d.push(o[u][0]),o[u]=0;for(r in i)Object.prototype.hasOwnProperty.call(i,r)&&(e[r]=i[r]);s&&s(t);while(d.length)d.shift()();return c.push.apply(c,l||[]),n()}function n(){for(var e,t=0;t<c.length;t++){for(var n=c[t],r=!0,a=1;a<n.length;a++){var i=n[a];0!==o[i]&&(r=!1)}r&&(c.splice(t--,1),e=u(u.s=n[0]))}return e}var r={},o={app:0},c=[];function u(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,u),n.l=!0,n.exports}u.m=e,u.c=r,u.d=function(e,t,n){u.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},u.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},u.t=function(e,t){if(1&t&&(e=u(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(u.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)u.d(n,r,function(t){return e[t]}.bind(null,r));return n},u.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return u.d(t,"a",t),t},u.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},u.p="";var a=window["webpackJsonp"]=window["webpackJsonp"]||[],i=a.push.bind(a);a.push=t,a=a.slice();for(var l=0;l<a.length;l++)t(a[l]);var s=i;c.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},1649:function(e,t,n){},"30b9":function(e,t,n){},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("7a23");function o(e,t){var n=Object(r["t"])("router-view");return Object(r["n"])(),Object(r["c"])("div",null,[Object(r["e"])(n,{class:"router-vue"})])}n("7ba7");const c={};c.render=o;var u=c,a=n("6c02");Object(r["q"])("data-v-6f04d2a9");var i={class:"page-home"},l=Object(r["d"])("h1",null,"KenMil Word Counter",-1);function s(e,t,n,o,c,u){var a=Object(r["t"])("word-counter"),s=Object(r["t"])("page-footer");return Object(r["n"])(),Object(r["c"])("div",i,[l,Object(r["e"])(a),Object(r["e"])(s)])}Object(r["o"])(),Object(r["q"])("data-v-76e47c42");var b={class:"word-counter"},d=Object(r["d"])("h2",null,"Word Counter",-1),f={key:0,class:"word-counter__count-label"},p={key:1,class:"word-counter__count-label --blue"};function O(e,t,n,o,c,u){return Object(r["n"])(),Object(r["c"])("div",b,[d,Object(r["d"])("form",null,[Object(r["z"])(Object(r["d"])("textarea",{class:"word-counter__txtarea","onUpdate:modelValue":t[0]||(t[0]=function(e){return c.msg=e}),placeholder:"Write or paste something here."},null,512),[[r["x"],c.msg]])]),""===this.msg?(Object(r["n"])(),Object(r["c"])("p",f,"Word Count: 0")):(Object(r["n"])(),Object(r["c"])("p",p,"Word Count: "+Object(r["v"])(u.numberCounter),1))])}Object(r["o"])();n("ac1f"),n("1276"),n("498a");var j={name:"WordCounter",data:function(){return{msg:""}},computed:{numberCounter:function(){return this.msg.trim().split(/\s+/).length}}};n("a31d");j.render=O,j.__scopeId="data-v-76e47c42";var v=j;function m(e,t,n,o,c,u){return Object(r["n"])(),Object(r["c"])("div",null," ©2021 KenMil ")}var h={name:"PageFooter",data:function(){return{}}};h.render=m;var g=h,y={name:"Home",components:{WordCounter:v,PageFooter:g}};n("af0b");y.render=s,y.__scopeId="data-v-6f04d2a9";var w=y,_=Object(a["a"])({history:Object(a["b"])(),routes:[{path:"/",name:"Home",component:w}]}),x=_;Object(r["b"])(u).use(x).mount("#app")},"7ba7":function(e,t,n){"use strict";n("9825")},9825:function(e,t,n){},a31d:function(e,t,n){"use strict";n("30b9")},af0b:function(e,t,n){"use strict";n("1649")}});
//# sourceMappingURL=app.91d26d91.js.map