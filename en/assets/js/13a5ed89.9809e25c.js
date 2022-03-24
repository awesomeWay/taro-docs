"use strict";(self.webpackChunktaro_docs=self.webpackChunktaro_docs||[]).push([[23473],{3905:function(t,e,n){n.d(e,{Zo:function(){return c},kt:function(){return k}});var r=n(67294);function l(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function a(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?a(Object(n),!0).forEach((function(e){l(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function o(t,e){if(null==t)return{};var n,r,l=function(t,e){if(null==t)return{};var n,r,l={},a=Object.keys(t);for(r=0;r<a.length;r++)n=a[r],e.indexOf(n)>=0||(l[n]=t[n]);return l}(t,e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(r=0;r<a.length;r++)n=a[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(l[n]=t[n])}return l}var p=r.createContext({}),u=function(t){var e=r.useContext(p),n=e;return t&&(n="function"==typeof t?t(e):i(i({},e),t)),n},c=function(t){var e=u(t.components);return r.createElement(p.Provider,{value:e},t.children)},s={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},d=r.forwardRef((function(t,e){var n=t.components,l=t.mdxType,a=t.originalType,p=t.parentName,c=o(t,["components","mdxType","originalType","parentName"]),d=u(n),k=l,m=d["".concat(p,".").concat(k)]||d[k]||s[k]||a;return n?r.createElement(m,i(i({ref:e},c),{},{components:n})):r.createElement(m,i({ref:e},c))}));function k(t,e){var n=arguments,l=e&&e.mdxType;if("string"==typeof t||l){var a=n.length,i=new Array(a);i[0]=d;var o={};for(var p in e)hasOwnProperty.call(e,p)&&(o[p]=e[p]);o.originalType=t,o.mdxType="string"==typeof t?t:l,i[1]=o;for(var u=2;u<a;u++)i[u]=n[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},9218:function(t,e,n){n.r(e),n.d(e,{frontMatter:function(){return o},contentTitle:function(){return p},metadata:function(){return u},toc:function(){return c},default:function(){return d}});var r=n(83117),l=n(80102),a=(n(67294),n(3905)),i=["components"],o={title:"Taro.requestPayment(option)",sidebar_label:"requestPayment"},p=void 0,u={unversionedId:"apis/open-api/payment/requestPayment",id:"version-2.x/apis/open-api/payment/requestPayment",title:"Taro.requestPayment(option)",description:"\u53d1\u8d77\u5fae\u4fe1\u652f\u4ed8\u3002\u4e86\u89e3\u66f4\u591a\u4fe1\u606f\uff0c\u8bf7\u67e5\u770b\u5fae\u4fe1\u652f\u4ed8\u63a5\u53e3\u6587\u6863",source:"@site/versioned_docs/version-2.x/apis/open-api/payment/requestPayment.md",sourceDirName:"apis/open-api/payment",slug:"/apis/open-api/payment/requestPayment",permalink:"/taro/en/docs/2.x/apis/open-api/payment/requestPayment",editUrl:"https://github.com/nervjs/taro-docs/edit/docs/versioned_docs/version-2.x/apis/open-api/payment/requestPayment.md",tags:[],version:"2.x",frontMatter:{title:"Taro.requestPayment(option)",sidebar_label:"requestPayment"},sidebar:"version-2.x/API",previous:{title:"reportAnalytics",permalink:"/taro/en/docs/2.x/apis/open-api/data-analysis/reportAnalytics"},next:{title:"faceVerifyForPay",permalink:"/taro/en/docs/2.x/apis/open-api/payment/faceVerifyForPay"}},c=[{value:"\u7c7b\u578b",id:"\u7c7b\u578b",children:[],level:2},{value:"\u53c2\u6570",id:"\u53c2\u6570",children:[{value:"Option",id:"option",children:[],level:3},{value:"signType",id:"signtype",children:[],level:3}],level:2},{value:"\u793a\u4f8b\u4ee3\u7801",id:"\u793a\u4f8b\u4ee3\u7801",children:[],level:2},{value:"API \u652f\u6301\u5ea6",id:"api-\u652f\u6301\u5ea6",children:[],level:2}],s={toc:c};function d(t){var e=t.components,n=(0,l.Z)(t,i);return(0,a.kt)("wrapper",(0,r.Z)({},s,n,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"\u53d1\u8d77\u5fae\u4fe1\u652f\u4ed8\u3002\u4e86\u89e3\u66f4\u591a\u4fe1\u606f\uff0c\u8bf7\u67e5\u770b",(0,a.kt)("a",{parentName:"p",href:"https://pay.weixin.qq.com/wiki/doc/api/wxa/wxa_api.php?chapter=7_3&index=1"},"\u5fae\u4fe1\u652f\u4ed8\u63a5\u53e3\u6587\u6863")),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},(0,a.kt)("a",{parentName:"p",href:"https://developers.weixin.qq.com/miniprogram/dev/api/open-api/payment/wx.requestPayment.html"},"\u53c2\u8003\u6587\u6863"))),(0,a.kt)("h2",{id:"\u7c7b\u578b"},"\u7c7b\u578b"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},"(option: Option) => Promise<CallbackResult>\n")),(0,a.kt)("h2",{id:"\u53c2\u6570"},"\u53c2\u6570"),(0,a.kt)("h3",{id:"option"},"Option"),(0,a.kt)("table",null,(0,a.kt)("thead",null,(0,a.kt)("tr",null,(0,a.kt)("th",null,"\u53c2\u6570"),(0,a.kt)("th",null,"\u7c7b\u578b"),(0,a.kt)("th",{style:{textAlign:"center"}},"\u5fc5\u586b"),(0,a.kt)("th",null,"\u8bf4\u660e"))),(0,a.kt)("tbody",null,(0,a.kt)("tr",null,(0,a.kt)("td",null,"nonceStr"),(0,a.kt)("td",null,(0,a.kt)("code",null,"string")),(0,a.kt)("td",{style:{textAlign:"center"}},"\u662f"),(0,a.kt)("td",null,"\u968f\u673a\u5b57\u7b26\u4e32\uff0c\u957f\u5ea6\u4e3a32\u4e2a\u5b57\u7b26\u4ee5\u4e0b")),(0,a.kt)("tr",null,(0,a.kt)("td",null,"package"),(0,a.kt)("td",null,(0,a.kt)("code",null,"string")),(0,a.kt)("td",{style:{textAlign:"center"}},"\u662f"),(0,a.kt)("td",null,"\u7edf\u4e00\u4e0b\u5355\u63a5\u53e3\u8fd4\u56de\u7684 prepay_id \u53c2\u6570\u503c\uff0c\u63d0\u4ea4\u683c\u5f0f\u5982\uff1aprepay_id=***")),(0,a.kt)("tr",null,(0,a.kt)("td",null,"paySign"),(0,a.kt)("td",null,(0,a.kt)("code",null,"string")),(0,a.kt)("td",{style:{textAlign:"center"}},"\u662f"),(0,a.kt)("td",null,"\u7b7e\u540d\uff0c\u5177\u4f53\u7b7e\u540d\u65b9\u6848\u53c2\u89c1 ",(0,a.kt)("a",{href:"https://pay.weixin.qq.com/wiki/doc/api/wxa/wxa_api.php?chapter=7_7&index=3"},"\u5c0f\u7a0b\u5e8f\u652f\u4ed8\u63a5\u53e3\u6587\u6863"))),(0,a.kt)("tr",null,(0,a.kt)("td",null,"timeStamp"),(0,a.kt)("td",null,(0,a.kt)("code",null,"string")),(0,a.kt)("td",{style:{textAlign:"center"}},"\u662f"),(0,a.kt)("td",null,"\u65f6\u95f4\u6233\uff0c\u4ece 1970 \u5e74 1 \u6708 1 \u65e5 00:00:00 \u81f3\u4eca\u7684\u79d2\u6570\uff0c\u5373\u5f53\u524d\u7684\u65f6\u95f4")),(0,a.kt)("tr",null,(0,a.kt)("td",null,"complete"),(0,a.kt)("td",null,(0,a.kt)("code",null,"(res: CallbackResult) => void")),(0,a.kt)("td",{style:{textAlign:"center"}},"\u5426"),(0,a.kt)("td",null,"\u63a5\u53e3\u8c03\u7528\u7ed3\u675f\u7684\u56de\u8c03\u51fd\u6570\uff08\u8c03\u7528\u6210\u529f\u3001\u5931\u8d25\u90fd\u4f1a\u6267\u884c\uff09")),(0,a.kt)("tr",null,(0,a.kt)("td",null,"fail"),(0,a.kt)("td",null,(0,a.kt)("code",null,"(res: CallbackResult) => void")),(0,a.kt)("td",{style:{textAlign:"center"}},"\u5426"),(0,a.kt)("td",null,"\u63a5\u53e3\u8c03\u7528\u5931\u8d25\u7684\u56de\u8c03\u51fd\u6570")),(0,a.kt)("tr",null,(0,a.kt)("td",null,"signType"),(0,a.kt)("td",null,(0,a.kt)("code",null,'"MD5" | "HMAC-SHA256"')),(0,a.kt)("td",{style:{textAlign:"center"}},"\u5426"),(0,a.kt)("td",null,"\u7b7e\u540d\u7b97\u6cd5")),(0,a.kt)("tr",null,(0,a.kt)("td",null,"success"),(0,a.kt)("td",null,(0,a.kt)("code",null,"(res: CallbackResult) => void")),(0,a.kt)("td",{style:{textAlign:"center"}},"\u5426"),(0,a.kt)("td",null,"\u63a5\u53e3\u8c03\u7528\u6210\u529f\u7684\u56de\u8c03\u51fd\u6570")))),(0,a.kt)("h3",{id:"signtype"},"signType"),(0,a.kt)("table",null,(0,a.kt)("thead",null,(0,a.kt)("tr",null,(0,a.kt)("th",null,"\u53c2\u6570"),(0,a.kt)("th",null,"\u8bf4\u660e"))),(0,a.kt)("tbody",null,(0,a.kt)("tr",null,(0,a.kt)("td",null,"MD5"),(0,a.kt)("td",null,"MD5")),(0,a.kt)("tr",null,(0,a.kt)("td",null,"HMAC-SHA256"),(0,a.kt)("td",null,"HMAC-SHA256")))),(0,a.kt)("h2",{id:"\u793a\u4f8b\u4ee3\u7801"},"\u793a\u4f8b\u4ee3\u7801"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},"Taro.requestPayment({\n  timeStamp: '',\n  nonceStr: '',\n  package: '',\n  signType: 'MD5',\n  paySign: '',\n  success: function (res) { },\n  fail: function (res) { }\n})\n")),(0,a.kt)("h2",{id:"api-\u652f\u6301\u5ea6"},"API \u652f\u6301\u5ea6"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"center"},"API"),(0,a.kt)("th",{parentName:"tr",align:"center"},"\u5fae\u4fe1\u5c0f\u7a0b\u5e8f"),(0,a.kt)("th",{parentName:"tr",align:"center"},"H5"),(0,a.kt)("th",{parentName:"tr",align:"center"},"React Native"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"center"},"Taro.requestPayment"),(0,a.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,a.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,a.kt)("td",{parentName:"tr",align:"center"})))))}d.isMDXComponent=!0}}]);