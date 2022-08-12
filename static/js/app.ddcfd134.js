(function(){"use strict";var e={795:function(e,t,n){var r=n(144),o=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("router-view")],1)},u=[],i={data(){return{}},methods:{},mounted(){}},a=i,c=n(1001),s=(0,c.Z)(a,o,u,!1,null,null,null),f=s.exports,l=n(8345);r.ZP.use(l.ZP);const d=[{path:"/",name:"HomePage",component:()=>Promise.all([n.e(575),n.e(247)]).then(n.bind(n,2247)),meta:{requiresAuth:!1}},{path:"/p/:id",name:"CodePage",component:()=>Promise.all([n.e(575),n.e(319)]).then(n.bind(n,9319)),meta:{requiresAuth:!1}},{path:"/404",name:"NotFoundPage",component:()=>n.e(576).then(n.bind(n,4576)),meta:{requiresAuth:!1}},{path:"/500",name:"ErrorPage",component:()=>n.e(58).then(n.bind(n,4058)),meta:{requiresAuth:!1}},{path:"*",redirect:"/404"}],p=new l.ZP({routes:d});p.beforeEach(((e,t,n)=>{e.matched.some((e=>e.meta.requiresAuth)),n()}));var h=p,m=n(9669),g=n.n(m),v=n(7500),b=(n(1588),n(629));const y={getURL(e){let t="";return{NODE_ENV:"production",BASE_URL:"/static/"}.VUE_API_SERVER_URL&&(t={NODE_ENV:"production",BASE_URL:"/static/"}.VUE_API_SERVER_URL.replace(/\/$/,"")),t+e},getHeaders(){return{crossdomain:!0,headers:{"X-Client-ID":"dashboard","X-Requested-With":"XMLHttpRequest","Content-Type":"application/json"}}},get(e){return g().get(this.getURL(e),this.getHeaders())},delete(e){return g()["delete"](this.getURL(e),this.getHeaders())},post(e,t={}){return g().post(this.getURL(e),t,this.getHeaders())},put(e,t={}){return g().put(this.getURL(e),t,this.getHeaders())}};var E=y;const P=e=>E.get(e),_=(e,t)=>E.post(e,t),S=(e,t)=>E.put(e,t),w=e=>E["delete"](e),A=()=>({result:{}}),R={getResult:e=>e.result},T={async get({commit:e},t){const n=await P(t["uri"]);return e("SET_API_RESULT",n.data),n},async post({commit:e},t){const n=await _(t["uri"],t["request"]);return e("SET_API_RESULT",n.data),n},async put({commit:e},t){const n=await S(t["uri"],t["request"]);return e("SET_API_RESULT",n.data),n},async delete({commit:e},t){const n=await w(t["uri"]);return e("SET_API_RESULT",n.data),n}},L={SET_API_RESULT(e,t){e.result=t}};var O={namespaced:!0,state:A,getters:R,actions:T,mutations:L};r.ZP.use(b.ZP);var U=new b.ZP.Store({modules:{api:O}}),k=n(5055),C=n.n(k);r.ZP.use(b.ZP),r.ZP.use(v.ZP,{defaultIconPack:"fas"}),r.ZP.use(C()),r.ZP.config.productionTip=!1,r.ZP.prototype.$http=g(),new r.ZP({store:U,router:h,render:e=>e(f)}).$mount("#app")}},t={};function n(r){var o=t[r];if(void 0!==o)return o.exports;var u=t[r]={exports:{}};return e[r].call(u.exports,u,u.exports,n),u.exports}n.m=e,function(){var e=[];n.O=function(t,r,o,u){if(!r){var i=1/0;for(f=0;f<e.length;f++){r=e[f][0],o=e[f][1],u=e[f][2];for(var a=!0,c=0;c<r.length;c++)(!1&u||i>=u)&&Object.keys(n.O).every((function(e){return n.O[e](r[c])}))?r.splice(c--,1):(a=!1,u<i&&(i=u));if(a){e.splice(f--,1);var s=o();void 0!==s&&(t=s)}}return t}u=u||0;for(var f=e.length;f>0&&e[f-1][2]>u;f--)e[f]=e[f-1];e[f]=[r,o,u]}}(),function(){n.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return n.d(t,{a:t}),t}}(),function(){n.d=function(e,t){for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}}(),function(){n.f={},n.e=function(e){return Promise.all(Object.keys(n.f).reduce((function(t,r){return n.f[r](e,t),t}),[]))}}(),function(){n.u=function(e){return"js/"+e+"."+{58:"5beec5f2",247:"53eb70d0",319:"2515f69c",575:"ca61611b",576:"e72011c1"}[e]+".js"}}(),function(){n.miniCssF=function(e){return"css/"+e+"."+{58:"43da15cb",247:"b3a81241",319:"e0267a15",576:"760a5cef"}[e]+".css"}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){var e={},t="cattle:";n.l=function(r,o,u,i){if(e[r])e[r].push(o);else{var a,c;if(void 0!==u)for(var s=document.getElementsByTagName("script"),f=0;f<s.length;f++){var l=s[f];if(l.getAttribute("src")==r||l.getAttribute("data-webpack")==t+u){a=l;break}}a||(c=!0,a=document.createElement("script"),a.charset="utf-8",a.timeout=120,n.nc&&a.setAttribute("nonce",n.nc),a.setAttribute("data-webpack",t+u),a.src=r),e[r]=[o];var d=function(t,n){a.onerror=a.onload=null,clearTimeout(p);var o=e[r];if(delete e[r],a.parentNode&&a.parentNode.removeChild(a),o&&o.forEach((function(e){return e(n)})),t)return t(n)},p=setTimeout(d.bind(null,void 0,{type:"timeout",target:a}),12e4);a.onerror=d.bind(null,a.onerror),a.onload=d.bind(null,a.onload),c&&document.head.appendChild(a)}}}(),function(){n.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){n.p="/static/"}(),function(){var e=function(e,t,n,r){var o=document.createElement("link");o.rel="stylesheet",o.type="text/css";var u=function(u){if(o.onerror=o.onload=null,"load"===u.type)n();else{var i=u&&("load"===u.type?"missing":u.type),a=u&&u.target&&u.target.href||t,c=new Error("Loading CSS chunk "+e+" failed.\n("+a+")");c.code="CSS_CHUNK_LOAD_FAILED",c.type=i,c.request=a,o.parentNode.removeChild(o),r(c)}};return o.onerror=o.onload=u,o.href=t,document.head.appendChild(o),o},t=function(e,t){for(var n=document.getElementsByTagName("link"),r=0;r<n.length;r++){var o=n[r],u=o.getAttribute("data-href")||o.getAttribute("href");if("stylesheet"===o.rel&&(u===e||u===t))return o}var i=document.getElementsByTagName("style");for(r=0;r<i.length;r++){o=i[r],u=o.getAttribute("data-href");if(u===e||u===t)return o}},r=function(r){return new Promise((function(o,u){var i=n.miniCssF(r),a=n.p+i;if(t(i,a))return o();e(r,a,o,u)}))},o={143:0};n.f.miniCss=function(e,t){var n={58:1,247:1,319:1,576:1};o[e]?t.push(o[e]):0!==o[e]&&n[e]&&t.push(o[e]=r(e).then((function(){o[e]=0}),(function(t){throw delete o[e],t})))}}(),function(){var e={143:0};n.f.j=function(t,r){var o=n.o(e,t)?e[t]:void 0;if(0!==o)if(o)r.push(o[2]);else{var u=new Promise((function(n,r){o=e[t]=[n,r]}));r.push(o[2]=u);var i=n.p+n.u(t),a=new Error,c=function(r){if(n.o(e,t)&&(o=e[t],0!==o&&(e[t]=void 0),o)){var u=r&&("load"===r.type?"missing":r.type),i=r&&r.target&&r.target.src;a.message="Loading chunk "+t+" failed.\n("+u+": "+i+")",a.name="ChunkLoadError",a.type=u,a.request=i,o[1](a)}};n.l(i,c,"chunk-"+t,t)}},n.O.j=function(t){return 0===e[t]};var t=function(t,r){var o,u,i=r[0],a=r[1],c=r[2],s=0;if(i.some((function(t){return 0!==e[t]}))){for(o in a)n.o(a,o)&&(n.m[o]=a[o]);if(c)var f=c(n)}for(t&&t(r);s<i.length;s++)u=i[s],n.o(e,u)&&e[u]&&e[u][0](),e[u]=0;return n.O(f)},r=self["webpackChunkcattle"]=self["webpackChunkcattle"]||[];r.forEach(t.bind(null,0)),r.push=t.bind(null,r.push.bind(r))}();var r=n.O(void 0,[998],(function(){return n(795)}));r=n.O(r)})();
//# sourceMappingURL=app.ddcfd134.js.map
