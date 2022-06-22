(()=>{"use strict";var t={876:(t,s,e)=>{e(746),e(7258),e(5778),e(1865);var i=e(5),a=e(77),o=e.n(a),l=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{attrs:{id:"app"}},[e("el-row",{attrs:{gutter:10}},[e("el-col",{attrs:{xs:24,sm:24,md:10}},[e("div",{staticClass:"hard"},[t._v(" 注：我们可帮助您确定智能合约可能是一个骗局，但没有100%的担保。我们会尽最大的努力检测您遇到的骗局。BFF-DIT合约检测为用户提供参考依据，查询合约详情规范以及风险安全等。 ")]),e("div",{staticClass:"contract"},[e("el-input",{attrs:{placeholder:"请输入BSC合约地址"},model:{value:t.input,callback:function(s){t.input=s},expression:"input"}}),e("el-button",{staticClass:"button",on:{click:t.check}},[t.is_send?e("i",{staticClass:"el-icon-loading"}):t._e(),t._v(" 审计 ")]),e("div",{staticClass:"message"},[t._v(" @检测结果仅代表链上数据分析值，不作为任何投资建议或担保 ")])],1),e("div",{staticClass:"dashboard"},[e("el-progress",{staticClass:"main",attrs:{type:"dashboard",percentage:0,color:"var(--cl-color)","stroke-width":20,width:200,"show-text":!0,format:function(){return"风险评估"}}}),e("div",{staticClass:"bottom"},[t._v("风险评估中")])],1),e("div",{staticClass:"community"},[e("div",{staticClass:"title"},[t._v("社区信任")]),e("el-progress",{staticClass:"table",attrs:{"text-inside":!0,"stroke-width":16,percentage:0,color:"#15b886"}}),e("div",{staticClass:"total"},[t._v("(45次投票)")]),e("div",{staticClass:"remark"},[t._v("备注: 合约检测只是单方面检测，某些新貔貅可能未能检测到。需要结合更多维度来分析，比如K线走势，持仓变化，资金流向等等")])],1)]),t.is_init?e("el-col",{attrs:{xs:24,sm:24,md:14}},[e("el-empty",{attrs:{description:"等待检测中"}})],1):e("div",[e("el-col",{attrs:{xs:24,sm:24,md:7}},[e("div",{staticClass:"basics"},[t._v(" 基本信息 "),t._l(t.basic,(function(s,i){return e("div",{key:i,staticClass:"table"},[e("div",{staticClass:"left"},[t._v(t._s(s[0]))]),e("div",{staticClass:"right"},[t._v(t._s(s[1]))])])}))],2),e("div",{staticClass:"basics"},[t._v(" 风险检查 "),t._l(t.risk,(function(s,i){return e("div",{key:i,staticClass:"logic"},[e("div",{staticClass:"left"},["吉"===s[1]?e("i",{staticClass:"el-icon-success",staticStyle:{color:"#36c882","font-size":"18px"}}):"合"===s[1]?e("i",{staticClass:"el-icon-warning",staticStyle:{color:"#fcad10","font-size":"18px"}}):e("i",{staticClass:"el-icon-message-solid",staticStyle:{color:"#fc1010","font-size":"18px"}}),e("div",[t._v(t._s(s[0]))])])])}))],2),e("div",{staticClass:"basics"},[t._v(" 交易&流动性 "),t._l(t.deal,(function(s,i){return e("div",{key:i,staticClass:"table"},[e("div",{staticClass:"left"},[t._v(t._s(s[0]))]),e("div",{staticClass:"right"},[t._v(t._s(s[1]))])])}))],2)]),e("el-col",{attrs:{xs:24,sm:24,md:7}},[e("div",{staticClass:"basics"},[t._v(" 持币信息 "),e("div",{staticClass:"cash"},[e("div",[t._v("持币人数:"+t._s(t.tokenSecurity.holder_count.valueOf()))])]),e("div",{staticClass:"cash"},[e("div",[t._v("Top 10 持币占比")]),e("div",[t._v(" "+t._s(t.totalHolders)+"% ")])]),t._l(t.tokenSecurity.holders,(function(s,i){return e("div",{key:i,staticClass:"table"},[e("div",{staticClass:"left"},[t._v(t._s(i+1)+". "),s.is_locked?e("div",{staticClass:"el-icon-lock",staticStyle:{color:"#fcad10","font-size":"12px",fill:"#fcad10","fill-rule":"inherit"}}):t._e(),s.is_locked?e("div",{staticStyle:{color:"#767f8f"}},[t._v("Lock Contract")]):t._e(),s.is_contract?e("div",{staticClass:"el-icon-document",staticStyle:{"font-size":"12px"}},[t._v(" PancakeV2")]):t._e(),s.is_locked||s.is_contract?t._e():e("div",[t._v(" "+t._s(s.address)+" ")])]),e("div",{staticClass:"right"},[t._v(" "+t._s(s.balance)+"("+t._s(s.percent)+")% ")])])}))],2),e("div",{staticClass:"basics"},[t._v(" 池子检查 "),e("div",{staticClass:"cash"},[e("div",[t._v("LP 持币人数:"+t._s(t.tokenSecurity.lp_holder_count))])]),e("div",{staticClass:"cash"},[e("div",[t._v("LP锁仓占比")]),e("div",[t._v(" "+t._s(t.lp_holders)+"% ")])]),t._l(t.tokenSecurity.lp_holders,(function(s,i){return e("div",{key:i,staticClass:"table"},[e("div",{staticClass:"left"},[t._v(t._s(i+1)+". "),s.is_locked?e("div",{staticClass:"el-icon-lock",staticStyle:{color:"#fcad10","font-size":"12px"}}):t._e(),s.is_locked?e("div",{staticStyle:{color:"#767f8f"}},[t._v("Lock Contract")]):t._e(),s.is_contract?e("div",{staticClass:"el-icon-document",staticStyle:{"font-size":"12px"}},[t._v(" PancakeV2")]):t._e(),s.is_locked||s.is_contract?t._e():e("div",[t._v(" "+t._s(s.address)+" ")])]),e("div",{staticClass:"right"},[t._v(" "+t._s(s.balance)+"("+t._s(s.percent)+")% ")])])}))],2)])],1)],1)],1)},c=[],r=(e(618),e(8977),e(8742),e(1705),["https://api.gopluslabs.io/api/v1/token_security/56?contract_addresses=","https://api.gopluslabs.io/api/v1/approval_security/56?contract_addresses=","https://api.gopluslabs.io/api/v1/nft_security/56?contract_addresses="]);function n(t){return fetch(r[0]+t)}e(220);function d(t){var s=new Array;function e(t,e){void 0===e|null===e||s.push(t[e])}return e([["合约未开源，可能存在漏洞机制","凶"],["合约已开源","吉"]],t.is_open_source),e([["看起来不像代理合约","吉"],["是代理合约，可能存在潜在升级替换风险","凶"]],t.is_proxy),e([["不能增发","吉"],["可增发，存在价格暴跌风险","凶"]],t.is_mintable),e([["不能找回管理员权限","吉"],["可收回管理员权限","凶"]],t.can_take_back_ownership),e([["所有者不能篡改余额","吉"],["可修改余额，导致风险","凶"]],t.owner_change_balance),e([["无隐藏用户","吉"],["有隐藏用户，所有权未被放弃","凶"]],t.hidden_owner),e([["滑点费率不可修改","吉"],["滑点费率可修改，存在风险","凶"]],t.slippage_modifiable),e([["未检测到交易暂停方法","吉"],["随时暂停交易风险，无法出售","合"]],t.transfer_pausable),e([["因权限转让，无法设置黑名单","吉"],["存在黑名单，有被停止交易风险","合"]],t.is_blacklisted),e([["不存在白名单","吉"],["存在白名单，有特权交易","合"]],t.is_whitelisted),e([["无交易冷却机制","吉"],["有交易冷却","合"]],t.trading_cooldown),s.sort((function(t,s){return t[1]<s[1]?-1:t[1]>s[1]?1:void 0})),s}const u={name:"app",computed:{basic:function(){return[["Token 合约地址",this.input],["总量",this.tokenSecurity.total_supply],["流通总量","-"],["精度",""]]},deal:function(){return[["买入费",100*this.tokenSecurity.buy_tax+"%"],["买出费",100*this.tokenSecurity.sell_tax+"%"]]},risk:function(){return d(this.tokenSecurity)}},watch:{tokenSecurity:function(t){this.totalHolders=this.changeDate(t.holders),this.totalHolders=Math.floor(100*this.totalHolders)/100,this.lp_holders=this.changeDate(t.lp_holders),this.lp_holders=100*Math.floor(this.lp_holders)/100}},data:function(){return{input:"",holders:[],totalHolders:0,lp_holders:[],totalLp:0,is_send:!1,is_init:!0,tokenSecurity:{}}},methods:{changeDate:function(t){if(void 0===t)return new Array;var s=0;return t.forEach((function(t,e,i){t.address=t.address.slice(0,2)+"..."+t.address.slice(-4),t.balance=Math.round(100*t.balance)/100,t.percent=Math.round(1e4*t.percent)/100,s+=t.percent})),s},check:function(){var t=this;this.is_send=!0,this.is_init=!0,n(this.input).then((function(s){s.text().then((function(s){t.is_send=!1,t.is_init=!1,t.tokenSecurity=JSON.parse(s).result[t.input.toLocaleLowerCase()],console.log(t.tokenSecurity)}))}))}}},_=u;var v=e(5471),p=(0,v.Z)(_,l,c,!1,null,null,null);const f=p.exports;i["default"].config.productionTip=!1,i["default"].use(o()),new i["default"]({render:function(t){return t(f)}}).$mount("#app")}},s={};function e(i){var a=s[i];if(void 0!==a)return a.exports;var o=s[i]={exports:{}};return t[i](o,o.exports,e),o.exports}e.m=t,(()=>{var t=[];e.O=(s,i,a,o)=>{if(!i){var l=1/0;for(d=0;d<t.length;d++){for(var[i,a,o]=t[d],c=!0,r=0;r<i.length;r++)(!1&o||l>=o)&&Object.keys(e.O).every((t=>e.O[t](i[r])))?i.splice(r--,1):(c=!1,o<l&&(l=o));if(c){t.splice(d--,1);var n=a();void 0!==n&&(s=n)}}return s}o=o||0;for(var d=t.length;d>0&&t[d-1][2]>o;d--)t[d]=t[d-1];t[d]=[i,a,o]}})(),(()=>{e.n=t=>{var s=t&&t.__esModule?()=>t["default"]:()=>t;return e.d(s,{a:s}),s}})(),(()=>{e.d=(t,s)=>{for(var i in s)e.o(s,i)&&!e.o(t,i)&&Object.defineProperty(t,i,{enumerable:!0,get:s[i]})}})(),(()=>{e.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()})(),(()=>{e.o=(t,s)=>Object.prototype.hasOwnProperty.call(t,s)})(),(()=>{e.r=t=>{"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})}})(),(()=>{var t={143:0};e.O.j=s=>0===t[s];var s=(s,i)=>{var a,o,[l,c,r]=i,n=0;if(l.some((s=>0!==t[s]))){for(a in c)e.o(c,a)&&(e.m[a]=c[a]);if(r)var d=r(e)}for(s&&s(i);n<l.length;n++)o=l[n],e.o(t,o)&&t[o]&&t[o][0](),t[o]=0;return e.O(d)},i=self["webpackChunkdefault"]=self["webpackChunkdefault"]||[];i.forEach(s.bind(null,0)),i.push=s.bind(null,i.push.bind(i))})();var i=e.O(void 0,[998],(()=>e(876)));i=e.O(i)})();
//# sourceMappingURL=app.2a8c7c2e.js.map