"use strict";(self.webpackChunktaro_docs=self.webpackChunktaro_docs||[]).push([[15412],{3905:function(t,e,n){n.d(e,{Zo:function(){return p},kt:function(){return k}});var l=n(67294);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function a(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);e&&(l=l.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,l)}return n}function o(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?a(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function i(t,e){if(null==t)return{};var n,l,r=function(t,e){if(null==t)return{};var n,l,r={},a=Object.keys(t);for(l=0;l<a.length;l++)n=a[l],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(l=0;l<a.length;l++)n=a[l],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var u=l.createContext({}),c=function(t){var e=l.useContext(u),n=e;return t&&(n="function"==typeof t?t(e):o(o({},e),t)),n},p=function(t){var e=c(t.components);return l.createElement(u.Provider,{value:e},t.children)},s={inlineCode:"code",wrapper:function(t){var e=t.children;return l.createElement(l.Fragment,{},e)}},d=l.forwardRef((function(t,e){var n=t.components,r=t.mdxType,a=t.originalType,u=t.parentName,p=i(t,["components","mdxType","originalType","parentName"]),d=c(n),k=r,m=d["".concat(u,".").concat(k)]||d[k]||s[k]||a;return n?l.createElement(m,o(o({ref:e},p),{},{components:n})):l.createElement(m,o({ref:e},p))}));function k(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var a=n.length,o=new Array(a);o[0]=d;var i={};for(var u in e)hasOwnProperty.call(e,u)&&(i[u]=e[u]);i.originalType=t,i.mdxType="string"==typeof t?t:r,o[1]=i;for(var c=2;c<a;c++)o[c]=n[c];return l.createElement.apply(null,o)}return l.createElement.apply(null,n)}d.displayName="MDXCreateElement"},65010:function(t,e,n){n.r(e),n.d(e,{frontMatter:function(){return i},contentTitle:function(){return u},metadata:function(){return c},toc:function(){return p},default:function(){return d}});var l=n(83117),r=n(80102),a=(n(67294),n(3905)),o=["components"],i={title:"Taro.getWeRunData(option)",sidebar_label:"getWeRunData"},u=void 0,c={unversionedId:"apis/open-api/werun/getWeRunData",id:"version-2.x/apis/open-api/werun/getWeRunData",title:"Taro.getWeRunData(option)",description:"\u83b7\u53d6\u7528\u6237\u8fc7\u53bb\u4e09\u5341\u5929\u5fae\u4fe1\u8fd0\u52a8\u6b65\u6570\u3002\u9700\u8981\u5148\u8c03\u7528 Taro.login \u63a5\u53e3\u3002\u6b65\u6570\u4fe1\u606f\u4f1a\u5728\u7528\u6237\u4e3b\u52a8\u8fdb\u5165\u5c0f\u7a0b\u5e8f\u65f6\u66f4\u65b0\u3002",source:"@site/versioned_docs/version-2.x/apis/open-api/werun/getWeRunData.md",sourceDirName:"apis/open-api/werun",slug:"/apis/open-api/werun/getWeRunData",permalink:"/taro/docs/2.x/apis/open-api/werun/getWeRunData",editUrl:"https://github.com/nervjs/taro-docs/edit/docs/versioned_docs/version-2.x/apis/open-api/werun/getWeRunData.md",tags:[],version:"2.x",frontMatter:{title:"Taro.getWeRunData(option)",sidebar_label:"getWeRunData"},sidebar:"version-2.x/API",previous:{title:"startFacialRecognitionVerifyAndUploadVideo",permalink:"/taro/docs/2.x/apis/open-api/facial/startFacialRecognitionVerifyAndUploadVideo"},next:{title:"requestSubscribeMessage",permalink:"/taro/docs/2.x/apis/open-api/subscribe-message/requestSubscribeMessage"}},p=[{value:"\u7c7b\u578b",id:"\u7c7b\u578b",children:[],level:2},{value:"\u53c2\u6570",id:"\u53c2\u6570",children:[{value:"Option",id:"option",children:[],level:3},{value:"SuccessCallback",id:"successcallback",children:[],level:3},{value:"SuccessCallbackResult",id:"successcallbackresult",children:[],level:3}],level:2},{value:"\u793a\u4f8b\u4ee3\u7801",id:"\u793a\u4f8b\u4ee3\u7801",children:[],level:2},{value:"API \u652f\u6301\u5ea6",id:"api-\u652f\u6301\u5ea6",children:[],level:2}],s={toc:p};function d(t){var e=t.components,n=(0,r.Z)(t,o);return(0,a.kt)("wrapper",(0,l.Z)({},s,n,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"\u83b7\u53d6\u7528\u6237\u8fc7\u53bb\u4e09\u5341\u5929\u5fae\u4fe1\u8fd0\u52a8\u6b65\u6570\u3002\u9700\u8981\u5148\u8c03\u7528 Taro.login \u63a5\u53e3\u3002\u6b65\u6570\u4fe1\u606f\u4f1a\u5728\u7528\u6237\u4e3b\u52a8\u8fdb\u5165\u5c0f\u7a0b\u5e8f\u65f6\u66f4\u65b0\u3002"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},(0,a.kt)("a",{parentName:"p",href:"https://developers.weixin.qq.com/miniprogram/dev/api/open-api/werun/wx.getWeRunData.html"},"\u53c2\u8003\u6587\u6863"))),(0,a.kt)("h2",{id:"\u7c7b\u578b"},"\u7c7b\u578b"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},"(option?: Option) => Promise<SuccessCallbackResult>\n")),(0,a.kt)("h2",{id:"\u53c2\u6570"},"\u53c2\u6570"),(0,a.kt)("h3",{id:"option"},"Option"),(0,a.kt)("table",null,(0,a.kt)("thead",null,(0,a.kt)("tr",null,(0,a.kt)("th",null,"\u53c2\u6570"),(0,a.kt)("th",null,"\u7c7b\u578b"),(0,a.kt)("th",{style:{textAlign:"center"}},"\u5fc5\u586b"),(0,a.kt)("th",null,"\u8bf4\u660e"))),(0,a.kt)("tbody",null,(0,a.kt)("tr",null,(0,a.kt)("td",null,"complete"),(0,a.kt)("td",null,(0,a.kt)("code",null,"(res: CallbackResult) => void")),(0,a.kt)("td",{style:{textAlign:"center"}},"\u5426"),(0,a.kt)("td",null,"\u63a5\u53e3\u8c03\u7528\u7ed3\u675f\u7684\u56de\u8c03\u51fd\u6570\uff08\u8c03\u7528\u6210\u529f\u3001\u5931\u8d25\u90fd\u4f1a\u6267\u884c\uff09")),(0,a.kt)("tr",null,(0,a.kt)("td",null,"fail"),(0,a.kt)("td",null,(0,a.kt)("code",null,"(res: CallbackResult) => void")),(0,a.kt)("td",{style:{textAlign:"center"}},"\u5426"),(0,a.kt)("td",null,"\u63a5\u53e3\u8c03\u7528\u5931\u8d25\u7684\u56de\u8c03\u51fd\u6570")),(0,a.kt)("tr",null,(0,a.kt)("td",null,"success"),(0,a.kt)("td",null,(0,a.kt)("code",null,"(result: SuccessCallback) => void")),(0,a.kt)("td",{style:{textAlign:"center"}},"\u5426"),(0,a.kt)("td",null,"\u63a5\u53e3\u8c03\u7528\u6210\u529f\u7684\u56de\u8c03\u51fd\u6570")))),(0,a.kt)("h3",{id:"successcallback"},"SuccessCallback"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},"(result: SuccessCallbackResult) => void\n")),(0,a.kt)("table",null,(0,a.kt)("thead",null,(0,a.kt)("tr",null,(0,a.kt)("th",null,"\u53c2\u6570"),(0,a.kt)("th",null,"\u7c7b\u578b"))),(0,a.kt)("tbody",null,(0,a.kt)("tr",null,(0,a.kt)("td",null,"result"),(0,a.kt)("td",null,(0,a.kt)("code",null,"SuccessCallbackResult"))))),(0,a.kt)("h3",{id:"successcallbackresult"},"SuccessCallbackResult"),(0,a.kt)("table",null,(0,a.kt)("thead",null,(0,a.kt)("tr",null,(0,a.kt)("th",null,"\u53c2\u6570"),(0,a.kt)("th",null,"\u7c7b\u578b"),(0,a.kt)("th",null,"\u8bf4\u660e"))),(0,a.kt)("tbody",null,(0,a.kt)("tr",null,(0,a.kt)("td",null,"cloudID"),(0,a.kt)("td",null,(0,a.kt)("code",null,"string")),(0,a.kt)("td",null,"\u654f\u611f\u6570\u636e\u5bf9\u5e94\u7684\u4e91 ID\uff0c\u5f00\u901a\u4e91\u5f00\u53d1\u7684\u5c0f\u7a0b\u5e8f\u624d\u4f1a\u8fd4\u56de\uff0c\u53ef\u901a\u8fc7\u4e91\u8c03\u7528\u76f4\u63a5\u83b7\u53d6\u5f00\u653e\u6570\u636e\uff0c\u8be6\u7ec6\u89c1",(0,a.kt)("a",{href:"https://developers.weixin.qq.com/miniprogram/dev/framework/open-ability/signature.html#method-cloud"},"\u4e91\u8c03\u7528\u76f4\u63a5\u83b7\u53d6\u5f00\u653e\u6570\u636e"))),(0,a.kt)("tr",null,(0,a.kt)("td",null,"encryptedData"),(0,a.kt)("td",null,(0,a.kt)("code",null,"string")),(0,a.kt)("td",null,"\u5305\u62ec\u654f\u611f\u6570\u636e\u5728\u5185\u7684\u5b8c\u6574\u7528\u6237\u4fe1\u606f\u7684\u52a0\u5bc6\u6570\u636e\uff0c\u8be6\u7ec6\u89c1",(0,a.kt)("a",{href:"https://developers.weixin.qq.com/miniprogram/dev/framework/open-ability/signature.html"},"\u52a0\u5bc6\u6570\u636e\u89e3\u5bc6\u7b97\u6cd5"),"\u3002\u89e3\u5bc6\u540e\u5f97\u5230\u7684\u6570\u636e\u7ed3\u6784\u89c1\u540e\u6587")),(0,a.kt)("tr",null,(0,a.kt)("td",null,"iv"),(0,a.kt)("td",null,(0,a.kt)("code",null,"string")),(0,a.kt)("td",null,"\u52a0\u5bc6\u7b97\u6cd5\u7684\u521d\u59cb\u5411\u91cf\uff0c\u8be6\u7ec6\u89c1",(0,a.kt)("a",{href:"https://developers.weixin.qq.com/miniprogram/dev/framework/open-ability/signature.html"},"\u52a0\u5bc6\u6570\u636e\u89e3\u5bc6\u7b97\u6cd5"))),(0,a.kt)("tr",null,(0,a.kt)("td",null,"errMsg"),(0,a.kt)("td",null,(0,a.kt)("code",null,"string")),(0,a.kt)("td",null,"\u8c03\u7528\u7ed3\u679c")))),(0,a.kt)("h2",{id:"\u793a\u4f8b\u4ee3\u7801"},"\u793a\u4f8b\u4ee3\u7801"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},"Taro.getWeRunData({\n  success: function (res) {\n    // \u62ff encryptedData \u5230\u5f00\u53d1\u8005\u540e\u53f0\u89e3\u5bc6\u5f00\u653e\u6570\u636e\n    const encryptedData = res.encryptedData\n    // \u6216\u62ff cloudID \u901a\u8fc7\u4e91\u8c03\u7528\u76f4\u63a5\u83b7\u53d6\u5f00\u653e\u6570\u636e\n    const cloudID = res.cloudID\n  }\n})\n")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"\u5f00\u653e\u6570\u636e JSON \u7ed3\u6784"),"\n\u654f\u611f\u6570\u636e\u6709\u4e24\u79cd\u83b7\u53d6\u65b9\u5f0f\uff0c\u4e00\u662f\u4f7f\u7528 ",(0,a.kt)("a",{parentName:"p",href:"https://developers.weixin.qq.com/miniprogram/dev/framework/open-ability/signature.html#%E5%8A%A0%E5%AF%86%E6%95%B0%E6%8D%AE%E8%A7%A3%E5%AF%86%E7%AE%97%E6%B3%95"},"\u52a0\u5bc6\u6570\u636e\u89e3\u5bc6\u7b97\u6cd5")," \u3002\n\u83b7\u53d6\u5f97\u5230\u7684\u5f00\u653e\u6570\u636e\u4e3a\u4ee5\u4e0b json \u7ed3\u6784\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "stepInfoList": [\n    {\n      "timestamp": 1445866601,\n      "step": 100\n    },\n    {\n      "timestamp": 1445876601,\n      "step": 120\n    }\n  ]\n}\n')),(0,a.kt)("p",null,"stepInfoList \u4e2d\uff0c\u6bcf\u4e00\u9879\u7ed3\u6784\u5982\u4e0b\uff1a"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"\u5c5e\u6027"),(0,a.kt)("th",{parentName:"tr",align:null},"\u7c7b\u578b"),(0,a.kt)("th",{parentName:"tr",align:null},"\u8bf4\u660e"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"timestamp"),(0,a.kt)("td",{parentName:"tr",align:null},"number"),(0,a.kt)("td",{parentName:"tr",align:null},"\u65f6\u95f4\u6233\uff0c\u8868\u793a\u6570\u636e\u5bf9\u5e94\u7684\u65f6\u95f4")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"step"),(0,a.kt)("td",{parentName:"tr",align:null},"number"),(0,a.kt)("td",{parentName:"tr",align:null},"\u5fae\u4fe1\u8fd0\u52a8\u6b65\u6570")))),(0,a.kt)("h2",{id:"api-\u652f\u6301\u5ea6"},"API \u652f\u6301\u5ea6"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"center"},"API"),(0,a.kt)("th",{parentName:"tr",align:"center"},"\u5fae\u4fe1\u5c0f\u7a0b\u5e8f"),(0,a.kt)("th",{parentName:"tr",align:"center"},"H5"),(0,a.kt)("th",{parentName:"tr",align:"center"},"React Native"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"center"},"Taro.getWeRunData"),(0,a.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,a.kt)("td",{parentName:"tr",align:"center"}),(0,a.kt)("td",{parentName:"tr",align:"center"})))))}d.isMDXComponent=!0}}]);