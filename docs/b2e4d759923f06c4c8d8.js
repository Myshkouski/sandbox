(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{124:function(t,e,n){"use strict";var r=n(34);n.n(r).a},125:function(t,e,n){(t.exports=n(39)(!1)).push([t.i,"\n.wrapper[data-v-3a4d997e]{position:fixed;top:0;left:0;right:0;width:100%;height:100%;background-color:rgba(0,0,0,.5);z-index:900\n}\n.wrapper.hidden[data-v-3a4d997e]{display:none\n}\n.menu[data-v-3a4d997e]{display:flex;padding:4.5rem;width:100%;min-height:100%;flex-flow:column-reverse;justify-content:center;align-items:center;color:#fff;position:relative\n}",""])},126:function(t,e,n){"use strict";var r=n(35);n.n(r).a},127:function(t,e,n){(t.exports=n(39)(!1)).push([t.i,"\nb,h1,h2,h3,h4,h5,h6,i,input,p,span,textarea{font-family:inherit;font-weight:300\n}\n*{box-sizing:border-box\n}\nbody,html{width:100%;height:100%;margin:0;padding:0\n}\nbody{font-family:Source Sans Pro,sans-serif;font-weight:300\n}\nh1{font-size:200%\n}",""])},128:function(t,e,n){"use strict";var r=n(36);n.n(r).a},129:function(t,e,n){(t.exports=n(39)(!1)).push([t.i,"\n.menu-icon[data-v-f2c44600]{position:absolute;overflow:hidden;width:3rem;height:3rem;left:1.5rem;top:1.5rem;z-index:999;background-image:url(https://cdn4.iconfinder.com/data/icons/wirecons-free-vector-icons/32/menu-alt-512.png);background-size:2rem;background-position:.5rem .5rem;background-repeat:no-repeat\n}",""])},130:function(t,e,n){"use strict";n.r(e);n(57),n(81),n(82);var r=n(21),o=n.n(r),a=(n(42),n(96),n(6)),i=n.n(a),s=(n(66),n(37),n(67),n(68),n(52),n(56),n(1),n(3),n(4),n(0)),u={},c=n(22),p=n.n(c),f=n(78),l=n.n(f),d=n(53),h=function(){return n.e(1).then(n.bind(null,149)).then(function(t){return t.default||t})},m=function(){return Promise.all([n.e(6),n.e(2)]).then(n.bind(null,151)).then(function(t){return t.default||t})},x=function(){return n.e(3).then(n.bind(null,150)).then(function(t){return t.default||t})};s.a.use(d.a),window.history.scrollRestoration="manual";var v=function(t,e,n){var r=!1;return t.matched.length<2?r={x:0,y:0}:t.matched.some(function(t){return t.components.default.options.scrollToTop})&&(r={x:0,y:0}),n&&(r=n),new Promise(function(e){window.$nuxt.$once("triggerScroll",function(){if(t.hash){var n=t.hash;void 0!==window.CSS&&void 0!==window.CSS.escape&&(n="#"+window.CSS.escape(n.substr(1)));try{document.querySelector(n)&&(r={selector:n})}catch(t){console.warn("Failed to save scroll position. Please add CSS.escape() polyfill (https://github.com/mathiasbynens/CSS.escape).")}}e(r)})})};var y=n(79),g=n.n(y).a,b={name:"nuxt-child",functional:!0,props:["keepAlive"],render:function(t,e){var n=e.parent,r=e.data,o=e.props;r.nuxtChild=!0;for(var a=n,i=n.$nuxt.nuxt.transitions,s=n.$nuxt.nuxt.defaultTransition,u=0;n;)n.$vnode&&n.$vnode.data.nuxtChild&&u++,n=n.$parent;r.nuxtChildDepth=u;var c=i[u]||s,p={};w.forEach(function(t){void 0!==c[t]&&(p[t]=c[t])});var f={};_.forEach(function(t){"function"==typeof c[t]&&(f[t]=c[t].bind(a))});var l=f.beforeEnter;f.beforeEnter=function(t){if(window.$nuxt.$nextTick(function(){window.$nuxt.$emit("triggerScroll")}),l)return l.call(a,t)};var d=[t("router-view",r)];return void 0!==o.keepAlive&&(d=[t("keep-alive",d)]),t("transition",{props:p,on:f},d)}},w=["name","mode","appear","css","type","duration","enterClass","leaveClass","appearClass","enterActiveClass","enterActiveClass","leaveActiveClass","appearActiveClass","enterToClass","leaveToClass","appearToClass"],_=["beforeEnter","enter","afterEnter","enterCancelled","beforeLeave","leave","afterLeave","leaveCancelled","beforeAppear","appear","afterAppear","appearCancelled"],C={name:"nuxt-link",functional:!0,render:function(t,e){return t("router-link",e.data,e.children)}},k=n(38)("page:error"),$={props:{error:{default:function(){return k("use default error prop"),{statusCode:404,message:"This page could not be found"}}}},created:function(){k("%d %s",this.error.statusCode,this.error.message)}},R=n(20),E=Object(R.a)($,function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"container"},[e("div",{staticClass:"row"},[e("div",{staticClass:"col-sm status"},[e("div",[e("h3",[this._v(this._s(this.error.statusCode))]),e("p",[this._v(this._s(this.error.message))])])])]),e("div",{staticClass:"row"},[e("div",{staticClass:"col-sm"},[e("div",{staticClass:"homepage-link"},[e("nuxt-link",{attrs:{to:"/"}},[this._v("Go to homepage")])],1)])])])},[],!1,null,null,null);E.options.__file="error.vue";var A=E.exports,T=(n(116),n(117),n(119),n(122),n(123),function(){return{}});function S(t,e){var n=t.options.data||T;!e&&t.options.hasAsyncData||(t.options.hasAsyncData=!0,t.options.data=function(){var r=n.call(this);return this.$ssrContext&&(e=this.$ssrContext.asyncData[t.cid]),p()({},r,e)},t._Ctor&&t._Ctor.options&&(t._Ctor.options.data=t.options.data))}function j(t){return t.options&&t._Ctor===t?t:(t.options?(t._Ctor=t,t.extendOptions=t.options):(t=s.a.extend(t))._Ctor=t,!t.options.name&&t.options.__file&&(t.options.name=t.options.__file),t)}function O(t){var e=arguments.length>1&&void 0!==arguments[1]&&arguments[1];return Array.prototype.concat.apply([],t.matched.map(function(t,n){return Object.keys(t.components).map(function(r){return e&&e.push(n),t.components[r]})}))}function P(t,e){return Array.prototype.concat.apply([],t.matched.map(function(t,n){return Object.keys(t.components).reduce(function(r,o){return t.components[o]?r.push(e(t.components[o],t.instances[o],t,o,n)):delete t.components[o],r},[])}))}function q(t){return Promise.all(P(t,function(){var t=i()(regeneratorRuntime.mark(function t(e,n,r,o){return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if("function"!=typeof e||e.options){t.next=4;break}return t.next=3,e();case 3:e=t.sent;case 4:return t.abrupt("return",r.components[o]=j(e));case 5:case"end":return t.stop()}},t,this)}));return function(e,n,r,o){return t.apply(this,arguments)}}()))}function M(t){return N.apply(this,arguments)}function N(){return(N=i()(regeneratorRuntime.mark(function t(e){return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,q(e);case 2:return t.abrupt("return",p()({},e,{meta:O(e).map(function(t){return t.options.meta||{}})}));case 3:case"end":return t.stop()}},t,this)}))).apply(this,arguments)}function L(t,e){return D.apply(this,arguments)}function D(){return(D=i()(regeneratorRuntime.mark(function t(e,n){return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(n.to?n.to:n.route,e.context||(e.context={isStatic:!0,isDev:!1,isHMR:!1,app:e,payload:n.payload,error:n.error,base:"",env:{}},n.req&&(e.context.req=n.req),n.res&&(e.context.res=n.res),e.context.redirect=function(t,n,r){if(t){e.context._redirected=!0;var a=o()(n);if("number"==typeof t||"undefined"!==a&&"object"!==a||(r=n||{},n=t,a=o()(n),t=302),"object"===a&&(n=e.router.resolve(n).href),!/(^[.]{1,2}\/)|(^\/(?!\/))/.test(n))throw n=Q(n,r),window.location.replace(n),new Error("ERR_REDIRECT");e.context.next({path:n,query:r,status:t})}},e.context.nuxtState=window.__NUXT__),e.context.next=n.next,e.context._redirected=!1,e.context._errored=!1,e.context.isHMR=!!n.isHMR,!n.route){t.next=10;break}return t.next=9,M(n.route);case 9:e.context.route=t.sent;case 10:if(e.context.params=e.context.route.params||{},e.context.query=e.context.route.query||{},!n.from){t.next=16;break}return t.next=15,M(n.from);case 15:e.context.from=t.sent;case 16:case"end":return t.stop()}},t,this)}))).apply(this,arguments)}function U(t,e){var n;return(n=2===t.length?new Promise(function(n){t(e,function(t,r){t&&e.error(t),n(r=r||{})})}):t(e))&&(n instanceof Promise||"function"==typeof n.then)||(n=Promise.resolve(n)),n}function B(t,e){var n=window.location.pathname;return"hash"===e?window.location.hash.replace(/^#\//,""):(t&&0===n.indexOf(t)&&(n=n.slice(t.length)),(n||"/")+window.location.search+window.location.hash)}function H(t,e){return function(t){for(var e=new Array(t.length),n=0;n<t.length;n++)"object"===o()(t[n])&&(e[n]=new RegExp("^(?:"+t[n].pattern+")$"));return function(n,r){for(var o="",a=n||{},i=r||{},s=i.pretty?z:encodeURIComponent,u=0;u<t.length;u++){var c=t[u];if("string"!=typeof c){var p,f=a[c.name];if(null==f){if(c.optional){c.partial&&(o+=c.prefix);continue}throw new TypeError('Expected "'+c.name+'" to be defined')}if(Array.isArray(f)){if(!c.repeat)throw new TypeError('Expected "'+c.name+'" to not repeat, but received `'+JSON.stringify(f)+"`");if(0===f.length){if(c.optional)continue;throw new TypeError('Expected "'+c.name+'" to not be empty')}for(var l=0;l<f.length;l++){if(p=s(f[l]),!e[u].test(p))throw new TypeError('Expected all "'+c.name+'" to match "'+c.pattern+'", but received `'+JSON.stringify(p)+"`");o+=(0===l?c.prefix:c.delimiter)+p}}else{if(p=c.asterisk?encodeURI(f).replace(/[?#]/g,function(t){return"%"+t.charCodeAt(0).toString(16).toUpperCase()}):s(f),!e[u].test(p))throw new TypeError('Expected "'+c.name+'" to match "'+c.pattern+'", but received "'+p+'"');o+=c.prefix+p}}else o+=c}return o}}(function(t,e){var n,r=[],o=0,a=0,i="",s=e&&e.delimiter||"/";for(;null!=(n=J.exec(t));){var u=n[0],c=n[1],p=n.index;if(i+=t.slice(a,p),a=p+u.length,c)i+=c[1];else{var f=t[a],l=n[2],d=n[3],h=n[4],m=n[5],x=n[6],v=n[7];i&&(r.push(i),i="");var y=null!=l&&null!=f&&f!==l,g="+"===x||"*"===x,b="?"===x||"*"===x,w=n[2]||s,_=h||m;r.push({name:d||o++,prefix:l||"",delimiter:w,optional:b,repeat:g,partial:y,asterisk:!!v,pattern:_?F(_):v?".*":"[^"+K(w)+"]+?"})}}a<t.length&&(i+=t.substr(a));i&&r.push(i);return r}(t,e))}function I(t,e){var n={},r=p()({},t,e);for(var o in r)String(t[o])!==String(e[o])&&(n[o]=!0);return n}window._nuxtReadyCbs=[],window.onNuxtReady=function(t){window._nuxtReadyCbs.push(t)};var J=new RegExp(["(\\\\.)","([\\/.])?(?:(?:\\:(\\w+)(?:\\(((?:\\\\.|[^\\\\()])+)\\))?|\\(((?:\\\\.|[^\\\\()])+)\\))([+*?])?|(\\*))"].join("|"),"g");function z(t){return encodeURI(t).replace(/[\/?#]/g,function(t){return"%"+t.charCodeAt(0).toString(16).toUpperCase()})}function K(t){return t.replace(/([.+*?=^!:${}()[\]|\/\\])/g,"\\$1")}function F(t){return t.replace(/([=!:$\/()])/g,"\\$1")}function Q(t,e){var n,r=t.indexOf("://");-1!==r?(n=t.substring(0,r),t=t.substring(r+3)):0===t.indexOf("//")&&(t=t.substring(2));var o,a=t.split("/"),i=(n?n+"://":"//")+a.shift(),s=a.filter(Boolean).join("/");return 2===(a=s.split("#")).length&&(s=a[0],o=a[1]),i+=s?"/"+s:"",e&&"{}"!==JSON.stringify(e)&&(i+=(2===t.split("?").length?"&":"?")+function(t){return Object.keys(t).sort().map(function(e){var n=t[e];return null==n?"":Array.isArray(n)?n.slice().map(function(t){return[e,"=",t].join("")}).join("&"):e+"="+n}).filter(Boolean).join("&")}(e)),i+=o?"#"+o:""}var V={name:"nuxt",props:["nuxtChildKey","keepAlive"],render:function(t){return this.nuxt.err?t("nuxt-error",{props:{error:this.nuxt.err}}):t("nuxt-child",{key:this.routerViewKey,props:this.$props})},beforeCreate:function(){s.a.util.defineReactive(this,"nuxt",this.$root.$options.nuxt)},computed:{routerViewKey:function(){if(void 0!==this.nuxtChildKey||this.$route.matched.length>1)return this.nuxtChildKey||H(this.$route.matched[0].path)(this.$route.params);var t=this.$route.matched[0]&&this.$route.matched[0].components.default;return t&&t.options&&t.options.key?"function"==typeof t.options.key?t.options.key(this.$route):t.options.key:this.$route.path}},components:{NuxtChild:b,NuxtError:A}},X=(n(38)("nuxt:layout-default"),{components:{MenuComponent:n(131).default},data:function(){return{hiddenMenu:!0}},head:function(){return{meta:[{hid:"charset",charset:"utf-8"},{hid:"viewport",name:"viewport",content:"width=device-width,initial-scale=1"}],link:[{rel:"icon",type:"image/png",href:"/img/favicon.png"}]}},methods:{toggleMenu:function(){this.hiddenMenu=!this.hiddenMenu}}}),G=(n(126),n(128),Object(R.a)(X,function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("nuxt"),e("div",{staticClass:"menu"},[e("MenuComponent",{attrs:{hide:this.hiddenMenu}}),e("div",{staticClass:"menu-icon",on:{click:this.toggleMenu}})],1)],1)},[],!1,null,"f2c44600",null));G.options.__file="default.vue";var W={_default:G.exports},Y={head:{meta:[{hid:"yandex-verification",name:"yandex-verification",content:"72f2c5fa362f4ae3"}],link:[],style:[],script:[]},render:function(t,e){var n=t(this.layout||"nuxt"),r=t("div",{domProps:{id:"__layout"},key:this.layoutName},[n]),o=t("transition",{props:{name:"layout",mode:"out-in"}},[r]);return t("div",{domProps:{id:"__nuxt"}},[o])},data:function(){return{layout:null,layoutName:""}},beforeCreate:function(){s.a.util.defineReactive(this,"nuxt",this.$options.nuxt)},created:function(){s.a.prototype.$nuxt=this,"undefined"!=typeof window&&(window.$nuxt=this),this.error=this.nuxt.error},methods:{setLayout:function(t){return t&&W["_"+t]||(t="default"),this.layoutName=t,this.layout=W["_"+t],this.layout},loadLayout:function(t){return t&&W["_"+t]||(t="default"),Promise.resolve(W["_"+t])}},components:{}},Z=n(80),tt=n.n(Z);s.a.use(tt.a);var et=n(77);s.a.use(et.a);var nt=n(38)("nuxt:plugin:metrika");!function(t,e,n){(e[n]=e[n]||[]).push(function(){try{e.yaCounter50233789=new Ya.Metrika2({id:50233789,clickmap:!0,trackLinks:!0,accurateTrackBounce:!0,webvisor:!0})}catch(t){}});var r=t.getElementsByTagName("script")[0],o=t.createElement("script"),a=function(){r.parentNode.insertBefore(o,r)};o.type="text/javascript",o.async=!0,o.src="https://mc.yandex.ru/metrika/tag.js","[object Opera]"==e.opera?t.addEventListener("DOMContentLoaded",a,!1):a(),nt("attached")}(document,window,"yandex_metrika_callbacks2"),s.a.component(g.name,g),s.a.component(b.name,b),s.a.component(C.name,C),s.a.component(V.name,V),s.a.use(l.a,{keyName:"head",attribute:"data-n-head",ssrAttribute:"data-n-head-ssr",tagIDKeyName:"hid"});var rt={name:"page",mode:"out-in",appear:!0,appearClass:"appear",appearActiveClass:"appear-active",appearToClass:"appear-to"};function ot(){return(ot=i()(regeneratorRuntime.mark(function t(e){var n,r,o,a,i;return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,new d.a({mode:"history",base:"",linkActiveClass:"nuxt-link-active",linkExactActiveClass:"nuxt-link-exact-active",scrollBehavior:v,routes:[{path:"/realtime",component:h,name:"realtime"},{path:"/map",component:m,name:"map"},{path:"/",component:x,name:"index"}],fallback:!1});case 2:return n=t.sent,r=p()({router:n,nuxt:{defaultTransition:rt,transitions:[rt],setTransitions:function(t){return Array.isArray(t)||(t=[t]),t=t.map(function(t){return t=t?"string"==typeof t?Object.assign({},rt,{name:t}):Object.assign({},rt,t):rt}),this.$options.nuxt.transitions=t,t},err:null,dateErr:null,error:function(t){t=t||null,r.context._errored=!!t,"string"==typeof t&&(t={statusCode:500,message:t});var n=this.nuxt||this.$options.nuxt;return n.dateErr=Date.now(),n.err=t,e&&(e.nuxt.error=t),t}}},Y),o=e?e.next:function(t){return r.router.push(t)},e?a=n.resolve(e.url).route:(i=B(n.options.base),a=n.resolve(i).route),t.next=8,L(r,{route:a,next:o,error:r.nuxt.error.bind(r),payload:e?e.payload:void 0,req:e?e.req:void 0,res:e?e.res:void 0,beforeRenderFns:e?e.beforeRenderFns:void 0});case 8:(function(t,e){if(!t)throw new Error("inject(key, value) has no key provided");if(!e)throw new Error("inject(key, value) has no value provided");r[t="$"+t]=e;var n="__nuxt_"+t+"_installed__";s.a[n]||(s.a[n]=!0,s.a.use(function(){s.a.prototype.hasOwnProperty(t)||Object.defineProperty(s.a.prototype,t,{get:function(){return this.$root.$options[t]}})}))}),t.next=12;break;case 12:t.next=15;break;case 15:0,t.next=19;break;case 19:t.next=22;break;case 22:return t.abrupt("return",{app:r,router:n});case 23:case"end":return t.stop()}},t,this)}))).apply(this,arguments)}var at,it,st=[],ut=window.__NUXT__||{};Object.assign(s.a.config,{silent:!0,performance:!1});var ct=s.a.config.errorHandler;function pt(t,e,n){var r=function(t){var r=function(t,e){if(!t||!t.options||!t.options[e])return{};var n=t.options[e];if("function"==typeof n){for(var r=arguments.length,o=new Array(r>2?r-2:0),a=2;a<r;a++)o[a-2]=arguments[a];return n.apply(void 0,o)}return n}(t,"transition",e,n)||{};return"string"==typeof r?{name:r}:r};return t.map(function(t){var e=Object.assign({},r(t));if(n&&n.matched.length&&n.matched[0].components.default){var o=r(n.matched[0].components.default);Object.keys(o).filter(function(t){return o[t]&&-1!==t.toLowerCase().indexOf("leave")}).forEach(function(t){e[t]=o[t]})}return e})}function ft(t,e,n){return lt.apply(this,arguments)}function lt(){return(lt=i()(regeneratorRuntime.mark(function t(e,n,r){var o;return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return this._pathChanged=!!at.nuxt.err||n.path!==e.path,this._queryChanged=JSON.stringify(e.query)!==JSON.stringify(n.query),this._diffQuery=this._queryChanged?I(e.query,n.query):[],t.prev=3,t.next=6,q(e);case 6:t.sent,r(),t.next=17;break;case 10:t.prev=10,t.t0=t.catch(3),t.t0=t.t0||{},o=t.t0.statusCode||t.t0.status||t.t0.response&&t.t0.response.status||500,this.error({statusCode:o,message:t.t0.message}),this.$nuxt.$emit("routeChanged",e,n,t.t0),r(!1);case 17:case"end":return t.stop()}},t,this,[[3,10]])}))).apply(this,arguments)}function dt(t,e){return ut.serverRendered&&e&&S(t,e),t._Ctor=t,t}function ht(t,e,n){var r=this,o=[],a=!1;if(void 0!==n&&(o=[],n.middleware&&(o=o.concat(n.middleware)),t.forEach(function(t){t.options.middleware&&(o=o.concat(t.options.middleware))})),o=o.map(function(t){return"function"==typeof t?t:("function"!=typeof u[t]&&(a=!0,r.error({statusCode:500,message:"Unknown middleware "+t})),u[t])}),!a)return function t(e,n){return!e.length||n._redirected||n._errored?Promise.resolve():U(e[0],n).then(function(){return t(e.slice(1),n)})}(o,e)}function mt(t,e,n){return xt.apply(this,arguments)}function xt(){return(xt=i()(regeneratorRuntime.mark(function t(e,n,r){var o,a,i,u,c,p,f,l,d,h,m,x,v,y,g,b,w=this;return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(!1!==this._pathChanged||!1!==this._queryChanged){t.next=2;break}return t.abrupt("return",r());case 2:return st=e===n?[]:O(n,o=[]).map(function(t,e){return H(n.matched[o[e]].path)(n.params)}),a=!1,i=function(t){a||(a=!0,r(t))},t.next=7,L(at,{route:e,from:n,next:i.bind(this)});case 7:if(this._dateLastError=at.nuxt.dateErr,this._hadError=!!at.nuxt.err,(c=O(e,u=[])).length){t.next=25;break}return t.next=14,ht.call(this,c,at.context);case 14:if(!a){t.next=16;break}return t.abrupt("return");case 16:return t.next=18,this.loadLayout("function"==typeof A.layout?A.layout(at.context):A.layout);case 18:return p=t.sent,t.next=21,ht.call(this,c,at.context,p);case 21:if(!a){t.next=23;break}return t.abrupt("return");case 23:return at.context.error({statusCode:404,message:"This page could not be found"}),t.abrupt("return",r());case 25:return c.forEach(function(t){t._Ctor&&t._Ctor.options&&(t.options.asyncData=t._Ctor.options.asyncData,t.options.fetch=t._Ctor.options.fetch)}),this.setTransitions(pt(c,e,n)),t.prev=27,t.next=30,ht.call(this,c,at.context);case 30:if(!a){t.next=32;break}return t.abrupt("return");case 32:if(!at.context._errored){t.next=34;break}return t.abrupt("return",r());case 34:return"function"==typeof(f=c[0].options.layout)&&(f=f(at.context)),t.next=38,this.loadLayout(f);case 38:return f=t.sent,t.next=41,ht.call(this,c,at.context,f);case 41:if(!a){t.next=43;break}return t.abrupt("return");case 43:if(!at.context._errored){t.next=45;break}return t.abrupt("return",r());case 45:l=!0,t.prev=46,d=!0,h=!1,m=void 0,t.prev=50,x=c[Symbol.iterator]();case 52:if(d=(v=x.next()).done){t.next=64;break}if("function"==typeof(y=v.value).options.validate){t.next=56;break}return t.abrupt("continue",61);case 56:return t.next=58,y.options.validate(at.context);case 58:if(l=t.sent){t.next=61;break}return t.abrupt("break",64);case 61:d=!0,t.next=52;break;case 64:t.next=70;break;case 66:t.prev=66,t.t0=t.catch(50),h=!0,m=t.t0;case 70:t.prev=70,t.prev=71,d||null==x.return||x.return();case 73:if(t.prev=73,!h){t.next=76;break}throw m;case 76:return t.finish(73);case 77:return t.finish(70);case 78:t.next=84;break;case 80:return t.prev=80,t.t1=t.catch(46),this.error({statusCode:t.t1.statusCode||"500",message:t.t1.message}),t.abrupt("return",r());case 84:if(l){t.next=87;break}return this.error({statusCode:404,message:"This page could not be found"}),t.abrupt("return",r());case 87:return t.next=89,Promise.all(c.map(function(t,n){if(t._path=H(e.matched[u[n]].path)(e.params),t._dataRefresh=!1,w._pathChanged&&w._queryChanged||t._path!==st[n])t._dataRefresh=!0;else if(!w._pathChanged&&w._queryChanged){var r=t.options.watchQuery;!0===r?t._dataRefresh=!0:Array.isArray(r)&&(t._dataRefresh=r.some(function(t){return w._diffQuery[t]}))}if(!w._hadError&&w._isMounted&&!t._dataRefresh)return Promise.resolve();var o=[],a=t.options.asyncData&&"function"==typeof t.options.asyncData,i=!!t.options.fetch;if(a){var s=U(t.options.asyncData,at.context).then(function(e){S(t,e)});o.push(s)}if(w.$loading.manual=!1===t.options.loading,i){var c=t.options.fetch(at.context);c&&(c instanceof Promise||"function"==typeof c.then)||(c=Promise.resolve(c)),c.then(function(t){}),o.push(c)}return Promise.all(o)}));case 89:a||r(),t.next=111;break;case 92:if(t.prev=92,t.t2=t.catch(27),t.t2){t.next=98;break}t.t2={},t.next=100;break;case 98:if("ERR_REDIRECT"!==t.t2.message){t.next=100;break}return t.abrupt("return",this.$nuxt.$emit("routeChanged",e,n,t.t2));case 100:return st=[],g=t.t2.response&&t.t2.response.status,t.t2.statusCode=t.t2.statusCode||t.t2.status||g||500,_=t.t2,s.a.config.errorHandler&&s.a.config.errorHandler(_),"function"==typeof(b=A.layout)&&(b=b(at.context)),t.next=108,this.loadLayout(b);case 108:this.error(t.t2),this.$nuxt.$emit("routeChanged",e,n,t.t2),r(!1);case 111:case"end":return t.stop()}var _},t,this,[[27,92],[46,80],[50,66,70,78],[71,,73,77]])}))).apply(this,arguments)}function vt(t,e){P(t,function(t,e,n,r){return"object"!==o()(t)||t.options||((t=s.a.extend(t))._Ctor=t,n.components[r]=t),t})}function yt(t){this._hadError&&this._dateLastError===this.$options.nuxt.dateErr&&this.error();var e=this.$options.nuxt.err?A.layout:t.matched[0].components.default.options.layout;"function"==typeof e&&(e=e(at.context)),this.setLayout(e)}function gt(t,e){var n=this;!1===this._pathChanged&&!1===this._queryChanged||s.a.nextTick(function(){var e=[],r=function(t){var e=arguments.length>1&&void 0!==arguments[1]&&arguments[1];return Array.prototype.concat.apply([],t.matched.map(function(t,n){return Object.keys(t.instances).map(function(r){return e&&e.push(n),t.instances[r]})}))}(t,e),o=O(t,e);r.forEach(function(t,e){if(t&&t.constructor._dataRefresh&&o[e]===t.constructor&&"function"==typeof t.constructor.options.data){var n=t.constructor.options.data.call(t);for(var r in n)s.a.set(t.$data,r,n[r])}}),yt.call(n,t)})}function bt(t){window._nuxtReadyCbs.forEach(function(e){"function"==typeof e&&e(t)}),"function"==typeof window._onNuxtLoaded&&window._onNuxtLoaded(t),it.afterEach(function(e,n){s.a.nextTick(function(){return t.$nuxt.$emit("routeChanged",e,n)})})}function wt(){return(wt=i()(regeneratorRuntime.mark(function t(e){var n,r,o;return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return at=e.app,it=e.router,t.next=4,Promise.all((void 0,u=B((a=it).options.base,a.options.mode),P(a.match(u),function(){var t=i()(regeneratorRuntime.mark(function t(e,n,r,o,a){var i;return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if("function"!=typeof e||e.options){t.next=4;break}return t.next=3,e();case 3:e=t.sent;case 4:return i=dt(j(e),ut.data?ut.data[a]:null),r.components[o]=i,t.abrupt("return",i);case 7:case"end":return t.stop()}},t,this)}));return function(e,n,r,o,a){return t.apply(this,arguments)}}())));case 4:if(n=t.sent,r=new s.a(at),o=function(){r.$mount("#__nuxt"),s.a.nextTick(function(){bt(r)})},r.setTransitions=r.$options.nuxt.setTransitions.bind(r),n.length&&(r.setTransitions(pt(n,it.currentRoute)),st=it.currentRoute.matched.map(function(t){return H(t.path)(it.currentRoute.params)})),r.$loading={},ut.error&&r.error(ut.error),it.beforeEach(ft.bind(r)),it.beforeEach(mt.bind(r)),it.afterEach(vt),it.afterEach(gt.bind(r)),!ut.serverRendered){t.next=18;break}return o(),t.abrupt("return");case 18:mt.call(r,it.currentRoute,it.currentRoute,function(t){if(!t)return vt(it.currentRoute,it.currentRoute),yt.call(r,it.currentRoute),void o();it.push(t,function(){return o()},function(t){if(!t)return o();console.error(t)})});case 19:case"end":return t.stop()}var a,u},t,this)}))).apply(this,arguments)}s.a.config.errorHandler=function(t,e,n){var r={statusCode:t.statusCode||t.name||"Whoops!",message:t.message||t.toString()},o=null;if("function"==typeof ct){for(var a=arguments.length,i=new Array(a>3?a-3:0),s=3;s<a;s++)i[s-3]=arguments[s];o=ct.apply(void 0,[t,e,n].concat(i))}return!0===o?o:(e&&e.$root&&e.$root.$nuxt&&e.$root.$nuxt.error&&"render function"!==n&&e.$root.$nuxt.error(r),"function"==typeof ct?o:void console.error(t.message||r.message))},function(t){return ot.apply(this,arguments)}().then(function(t){return wt.apply(this,arguments)}).catch(function(t){console.error("[nuxt] Error while initializing app",t)})},131:function(t,e,n){"use strict";n.r(e);n(1),n(3),n(4);var r={props:{hide:{type:Boolean,default:function(){return!0}}},methods:{clearMarkers:function(){window.localStorage.setItem("leaflet:markers","[]"),this.$router.go()}}},o=(n(124),n(20)),a=Object(o.a)(r,function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"wrapper",class:{hidden:!!this.hide}},[e("div",{staticClass:"menu"},[e("span",{on:{click:this.clearMarkers}},[this._v("Clear markers")])])])},[],!1,null,"3a4d997e",null);a.options.__file="menu.vue";e.default=a.exports},34:function(t,e,n){var r=n(125);"string"==typeof r&&(r=[[t.i,r,""]]),r.locals&&(t.exports=r.locals);(0,n(40).default)("31a57526",r,!0,{sourceMap:!1})},35:function(t,e,n){var r=n(127);"string"==typeof r&&(r=[[t.i,r,""]]),r.locals&&(t.exports=r.locals);(0,n(40).default)("76639847",r,!0,{sourceMap:!1})},36:function(t,e,n){var r=n(129);"string"==typeof r&&(r=[[t.i,r,""]]),r.locals&&(t.exports=r.locals);(0,n(40).default)("7e036498",r,!0,{sourceMap:!1})},86:function(t,e,n){t.exports=n(130)}},[[86,7,4,5]]]);