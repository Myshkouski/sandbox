webpackJsonp([1],{BO1k:function(e,t,n){e.exports={default:n("fxRn"),__esModule:!0}},CJli:function(e,t,n){n("pRCB");var s=n("FeBl").Object;e.exports=function(e,t){return s.defineProperties(e,t)}},HSQo:function(e,t,n){e.exports={default:n("CJli"),__esModule:!0}},PE7l:function(e,t,n){"use strict";var s=n("Xxa5"),r=n.n(s),o=n("exGp"),i=n.n(o),c=n("mvHQ"),a=n.n(c),u=n("HSQo"),h=n.n(u),l=n("pFYg"),p=n.n(l),d=n("BO1k"),f=n.n(d),v=n("woOf"),_=n.n(v),y={},w=n("Fy0/")("ws"),m={once:1};function g(e){this._ws=null,this._eventListeners={},this._counters={open:0,close:0},this.options=e||{};try{this.connect(e)}catch(t){this.reconnect(e)}}g.prototype.counters=function(){return _()({},this._counters)},g.prototype.connect=function(e){var t=this;e=e||{};var n="ws";for(var s in e.secure&&(n+="s"),this._ws=new WebSocket(n+"://"+e.host||window.location.host,e.protocols||[]),this._ws.addEventListener("open",function(){++t._counters.open,w("websocket opened for the %d time",t._counters.open)},m),this._ws.addEventListener("close",function(){++t._counters.close,w("websocket closed for the %d time",t._counters.close)},m),e.reconnect&&(w('add "close" event listener for reconecting with options: %j',e.reconnect),this._ws.addEventListener("close",function(){t._ws&&(t._ws=null,t.reconnect(t.options))},m)),this._eventListeners){var r=this._eventListeners[s],o=!0,i=!1,c=void 0;try{for(var a,u=f()(r);!(o=(a=u.next()).done);o=!0){var h=a.value;w('add previously defined "%s" event listener',s),this._ws.addEventListener.apply(this._ws,[s].concat(h))}}catch(e){i=!0,c=e}finally{try{!o&&u.return&&u.return()}finally{if(i)throw c}}}return this},g.prototype.reconnect=function(e){var t=this;return"number"==typeof e?e:"object"===(void 0===e?"undefined":p()(e))&&e.interval&&e.interval,setTimeout(function(){try{t.connect(t.options)}catch(n){t.reconnect(e)}},2e3),this};var L=["binaryType","bufferedAmount","extensions","onclose","onerror","onmessage","onopen","protocol","readyState","url"].reduce(function(e,t){return e[t]={get:function(){return this._ws[t]},set:function(e){this._ws[t]=e}},e},{}),E=["send","close","dispatchEvent"].reduce(function(e,t){return L[t]={value:function(){return this._ws[t].apply(this._ws,arguments)}},L},{});h()(g.prototype,L),h()(g.prototype,E),h()(g.prototype,{addEventListener:{value:function(e,t,n){if(this._eventListeners[e]||(this._eventListeners[e]=[]),this._eventListeners[e].push(Array.prototype.slice.call(arguments,1)),this._ws){if(n&&n.once){var s=this;this._ws.addEventListener(e,function(){var n=s._eventListeners[e].findIndex(function(e){return e[0]===t});~n&&s._eventListeners[e].splice(n,1)},m)}this._ws.addEventListener.apply(this._ws,arguments)}return this}},removeEventListener:{value:function(e,t){if(this._eventListeners[e]){var n=this._eventListeners[e].findIndex(function(e){return e[0]===t});~n&&this._eventListeners[e].splice(n,1),this._eventListeners[e].length||delete this._eventListeners[e]}return this._ws&&this._ws.addEventListener.apply(this._ws,arguments),this}}}),t.a={data:function(){return{ws:null,messageHistory:[],historyLength:20}},watch:{historyLength:function(e){this.messageHistory=this.messageHistory.slice(-e)}},methods:{enter:function(e){return this.send("+",e)},leave:function(e){return this.send("-",e)},message:function(e,t){return this.send("!",e,t)},send:function(e,t,n){var s=[e+"/"+t,n].filter(function(e){return!!e});return this.ws.send(a()(s)),this.messageHistory.push({type:0,data:s}),this}},head:function(){return{meta:[{charset:"utf-8"},{name:"viewport",content:"width=device-width, initial-scale=1"}]}},mounted:function(){var e=i()(r.a.mark(function e(){var t,n,s=this;return r.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:t=window.location.hostname+":8080",n=new g({host:t,protocols:["json"],reconnect:1e3}),this.ws=n,_()(y,{host:t,ws:n}),n.addEventListener("error",function(e){console.error("ws error",e)}),n.addEventListener("message",function(e){var t=e.data;try{t=JSON.parse(t),s.messageHistory.push({type:1,data:t}),s.messageHistory.length>s.historyLength&&(s.messageHistory=s.messageHistory.slice(-s.historyLength))}catch(e){console.error(e)}}),n.addEventListener("open",function(){n.counters().open>1&&s.message("reconnect",!0)}),n.addEventListener("open",function(){s.enter("hello").message("hello"),s.enter("tick"),setTimeout(function(){s.leave("tick")},2200)},{once:!0});case 10:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()}},TZ6X:function(e,t,n){"use strict";var s=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("div",[n("span",[e._v("History")]),n("span",[e._v(e._s(" "))]),n("input",{directives:[{name:"model",rawName:"v-model",value:e.historyLength,expression:"historyLength"}],attrs:{type:"number"},domProps:{value:e.historyLength},on:{input:function(t){t.target.composing||(e.historyLength=t.target.value)}}})]),e._l(e.messageHistory,function(t){return n("div",[t.type?n("span",{staticStyle:{color:"#0f0"}},[e._v(e._s("▾"))]):n("span",{staticStyle:{color:"#00f"}},[e._v(e._s("▴"))]),n("span",[e._v(e._s(t.transport))]),n("span",[e._v(e._s(t.data))])])})],2)};s._withStripped=!0;var r={render:s,staticRenderFns:[]};t.a=r},fxRn:function(e,t,n){n("+tPU"),n("zQR9"),e.exports=n("g8Ux")},g8Ux:function(e,t,n){var s=n("77Pl"),r=n("3fs2");e.exports=n("FeBl").getIterator=function(e){var t=r(e);if("function"!=typeof t)throw TypeError(e+" is not iterable!");return s(t.call(e))}},"hR/e":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var s=n("PE7l"),r=n("TZ6X"),o=n("VU/8")(s.a,r.a,!1,null,null,null);o.options.__file="src/docs/pages/realtime.vue",t.default=o.exports},pRCB:function(e,t,n){var s=n("kM2E");s(s.S+s.F*!n("+E39"),"Object",{defineProperties:n("qio6")})}});