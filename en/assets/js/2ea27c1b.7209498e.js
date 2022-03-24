"use strict";(self.webpackChunktaro_docs=self.webpackChunktaro_docs||[]).push([[56011],{3905:function(e,t,a){a.d(t,{Zo:function(){return c},kt:function(){return s}});var n=a(67294);function l(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){l(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function d(e,t){if(null==e)return{};var a,n,l=function(e,t){if(null==e)return{};var a,n,l={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(l[a]=e[a]);return l}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(l[a]=e[a])}return l}var k=n.createContext({}),p=function(e){var t=n.useContext(k),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},c=function(e){var t=p(e.components);return n.createElement(k.Provider,{value:t},e.children)},i={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var a=e.components,l=e.mdxType,r=e.originalType,k=e.parentName,c=d(e,["components","mdxType","originalType","parentName"]),u=p(a),s=l,h=u["".concat(k,".").concat(s)]||u[s]||i[s]||r;return a?n.createElement(h,o(o({ref:t},c),{},{components:a})):n.createElement(h,o({ref:t},c))}));function s(e,t){var a=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var r=a.length,o=new Array(r);o[0]=u;var d={};for(var k in t)hasOwnProperty.call(t,k)&&(d[k]=t[k]);d.originalType=e,d.mdxType="string"==typeof e?e:l,o[1]=d;for(var p=2;p<r;p++)o[p]=a[p];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},76818:function(e,t,a){a.r(t),a.d(t,{frontMatter:function(){return d},contentTitle:function(){return k},metadata:function(){return p},toc:function(){return c},default:function(){return u}});var n=a(83117),l=a(80102),r=(a(67294),a(3905)),o=["components"],d={title:"DownloadTask",sidebar_label:"DownloadTask"},k=void 0,p={unversionedId:"apis/network/download/DownloadTask",id:"apis/network/download/DownloadTask",title:"DownloadTask",description:"Methods",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/apis/network/download/DownloadTask.md",sourceDirName:"apis/network/download",slug:"/apis/network/download/DownloadTask",permalink:"/taro/en/docs/next/apis/network/download/DownloadTask",editUrl:"https://github.com/nervjs/taro-docs/edit/docs/docs/apis/network/download/DownloadTask.md",tags:[],version:"current",frontMatter:{title:"DownloadTask",sidebar_label:"DownloadTask"},sidebar:"API",previous:{title:"downloadFile",permalink:"/taro/en/docs/next/apis/network/download/downloadFile"},next:{title:"uploadFile",permalink:"/taro/en/docs/next/apis/network/upload/uploadFile"}},c=[{value:"Methods",id:"methods",children:[{value:"abort",id:"abort",children:[{value:"API Support",id:"api-support",children:[],level:4}],level:3},{value:"offHeadersReceived",id:"offheadersreceived",children:[{value:"API Support",id:"api-support-1",children:[],level:4}],level:3},{value:"offProgressUpdate",id:"offprogressupdate",children:[{value:"API Support",id:"api-support-2",children:[],level:4}],level:3},{value:"onHeadersReceived",id:"onheadersreceived",children:[{value:"API Support",id:"api-support-3",children:[],level:4}],level:3},{value:"onProgressUpdate",id:"onprogressupdate",children:[{value:"API Support",id:"api-support-4",children:[],level:4}],level:3}],level:2},{value:"Parameters",id:"parameters",children:[{value:"OffHeadersReceivedCallback",id:"offheadersreceivedcallback",children:[],level:3},{value:"OffProgressUpdateCallback",id:"offprogressupdatecallback",children:[],level:3},{value:"OnHeadersReceivedCallback",id:"onheadersreceivedcallback",children:[],level:3},{value:"OnProgressUpdateCallback",id:"onprogressupdatecallback",children:[],level:3},{value:"OnHeadersReceivedCallbackResult",id:"onheadersreceivedcallbackresult",children:[],level:3},{value:"OnProgressUpdateCallbackResult",id:"onprogressupdatecallbackresult",children:[],level:3}],level:2},{value:"API Support",id:"api-support-5",children:[],level:2}],i={toc:c};function u(e){var t=e.components,a=(0,l.Z)(e,o);return(0,r.kt)("wrapper",(0,n.Z)({},i,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"methods"},"Methods"),(0,r.kt)("h3",{id:"abort"},"abort"),(0,r.kt)("p",null,"Aborts download tasks."),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("a",{parentName:"p",href:"https://developers.weixin.qq.com/miniprogram/en/dev/api/network/download/DownloadTask.abort.html"},"Reference"))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},"() => void\n")),(0,r.kt)("h4",{id:"api-support"},"API Support"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"center"},"API"),(0,r.kt)("th",{parentName:"tr",align:"center"},"WeChat Mini-Program"),(0,r.kt)("th",{parentName:"tr",align:"center"},"H5"),(0,r.kt)("th",{parentName:"tr",align:"center"},"React Native"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"DownloadTask.abort"),(0,r.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,r.kt)("td",{parentName:"tr",align:"center"}),(0,r.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f")))),(0,r.kt)("h3",{id:"offheadersreceived"},"offHeadersReceived"),(0,r.kt)("p",null,"Un-listens on the HTTP Response Header event."),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("a",{parentName:"p",href:"https://developers.weixin.qq.com/miniprogram/en/dev/api/network/download/DownloadTask.offHeadersReceived.html"},"Reference"))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},"(callback: OffHeadersReceivedCallback) => void\n")),(0,r.kt)("table",null,(0,r.kt)("thead",null,(0,r.kt)("tr",null,(0,r.kt)("th",null,"Property"),(0,r.kt)("th",null,"Type"),(0,r.kt)("th",null,"Description"))),(0,r.kt)("tbody",null,(0,r.kt)("tr",null,(0,r.kt)("td",null,"callback"),(0,r.kt)("td",null,(0,r.kt)("code",null,"OffHeadersReceivedCallback")),(0,r.kt)("td",null,"The callback function for the HTTP Response Header event.")))),(0,r.kt)("h4",{id:"api-support-1"},"API Support"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"center"},"API"),(0,r.kt)("th",{parentName:"tr",align:"center"},"WeChat Mini-Program"),(0,r.kt)("th",{parentName:"tr",align:"center"},"H5"),(0,r.kt)("th",{parentName:"tr",align:"center"},"React Native"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"DownloadTask.offHeadersReceived"),(0,r.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,r.kt)("td",{parentName:"tr",align:"center"}),(0,r.kt)("td",{parentName:"tr",align:"center"})))),(0,r.kt)("h3",{id:"offprogressupdate"},"offProgressUpdate"),(0,r.kt)("p",null,"Un-listens on download progress change events."),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("a",{parentName:"p",href:"https://developers.weixin.qq.com/miniprogram/en/dev/api/network/download/DownloadTask.offProgressUpdate.html"},"Reference"))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},"(callback: OffProgressUpdateCallback) => void\n")),(0,r.kt)("table",null,(0,r.kt)("thead",null,(0,r.kt)("tr",null,(0,r.kt)("th",null,"Property"),(0,r.kt)("th",null,"Type"),(0,r.kt)("th",null,"Description"))),(0,r.kt)("tbody",null,(0,r.kt)("tr",null,(0,r.kt)("td",null,"callback"),(0,r.kt)("td",null,(0,r.kt)("code",null,"OffProgressUpdateCallback")),(0,r.kt)("td",null,"The callback function for the download progress change event.")))),(0,r.kt)("h4",{id:"api-support-2"},"API Support"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"center"},"API"),(0,r.kt)("th",{parentName:"tr",align:"center"},"WeChat Mini-Program"),(0,r.kt)("th",{parentName:"tr",align:"center"},"H5"),(0,r.kt)("th",{parentName:"tr",align:"center"},"React Native"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"DownloadTask.offProgressUpdate"),(0,r.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,r.kt)("td",{parentName:"tr",align:"center"}),(0,r.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f")))),(0,r.kt)("h3",{id:"onheadersreceived"},"onHeadersReceived"),(0,r.kt)("p",null,"Listens on HTTP Response Header event, which will be earlier than the request completion event."),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("a",{parentName:"p",href:"https://developers.weixin.qq.com/miniprogram/en/dev/api/network/download/DownloadTask.onHeadersReceived.html"},"Reference"))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},"(callback: OnHeadersReceivedCallback) => void\n")),(0,r.kt)("table",null,(0,r.kt)("thead",null,(0,r.kt)("tr",null,(0,r.kt)("th",null,"Property"),(0,r.kt)("th",null,"Type"),(0,r.kt)("th",null,"Description"))),(0,r.kt)("tbody",null,(0,r.kt)("tr",null,(0,r.kt)("td",null,"callback"),(0,r.kt)("td",null,(0,r.kt)("code",null,"OnHeadersReceivedCallback")),(0,r.kt)("td",null,"The callback function for the HTTP Response Header event.")))),(0,r.kt)("h4",{id:"api-support-3"},"API Support"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"center"},"API"),(0,r.kt)("th",{parentName:"tr",align:"center"},"WeChat Mini-Program"),(0,r.kt)("th",{parentName:"tr",align:"center"},"H5"),(0,r.kt)("th",{parentName:"tr",align:"center"},"React Native"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"DownloadTask.onHeadersReceived"),(0,r.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,r.kt)("td",{parentName:"tr",align:"center"}),(0,r.kt)("td",{parentName:"tr",align:"center"})))),(0,r.kt)("h3",{id:"onprogressupdate"},"onProgressUpdate"),(0,r.kt)("p",null,"Listens on the download progress change event."),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("a",{parentName:"p",href:"https://developers.weixin.qq.com/miniprogram/en/dev/api/network/download/DownloadTask.onProgressUpdate.html"},"Reference"))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},"(callback: OnProgressUpdateCallback) => void\n")),(0,r.kt)("table",null,(0,r.kt)("thead",null,(0,r.kt)("tr",null,(0,r.kt)("th",null,"Property"),(0,r.kt)("th",null,"Type"),(0,r.kt)("th",null,"Description"))),(0,r.kt)("tbody",null,(0,r.kt)("tr",null,(0,r.kt)("td",null,"callback"),(0,r.kt)("td",null,(0,r.kt)("code",null,"OnProgressUpdateCallback")),(0,r.kt)("td",null,"The callback function for the download progress change event.")))),(0,r.kt)("h4",{id:"api-support-4"},"API Support"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"center"},"API"),(0,r.kt)("th",{parentName:"tr",align:"center"},"WeChat Mini-Program"),(0,r.kt)("th",{parentName:"tr",align:"center"},"H5"),(0,r.kt)("th",{parentName:"tr",align:"center"},"React Native"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"DownloadTask.onProgressUpdate"),(0,r.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,r.kt)("td",{parentName:"tr",align:"center"}),(0,r.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f")))),(0,r.kt)("h2",{id:"parameters"},"Parameters"),(0,r.kt)("h3",{id:"offheadersreceivedcallback"},"OffHeadersReceivedCallback"),(0,r.kt)("p",null,"The callback function for the HTTP Response Header event."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},"(res: CallbackResult) => void\n")),(0,r.kt)("table",null,(0,r.kt)("thead",null,(0,r.kt)("tr",null,(0,r.kt)("th",null,"Property"),(0,r.kt)("th",null,"Type"))),(0,r.kt)("tbody",null,(0,r.kt)("tr",null,(0,r.kt)("td",null,"res"),(0,r.kt)("td",null,(0,r.kt)("code",null,"CallbackResult"))))),(0,r.kt)("h3",{id:"offprogressupdatecallback"},"OffProgressUpdateCallback"),(0,r.kt)("p",null,"The callback function for the download progress change event."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},"(res: CallbackResult) => void\n")),(0,r.kt)("table",null,(0,r.kt)("thead",null,(0,r.kt)("tr",null,(0,r.kt)("th",null,"Property"),(0,r.kt)("th",null,"Type"))),(0,r.kt)("tbody",null,(0,r.kt)("tr",null,(0,r.kt)("td",null,"res"),(0,r.kt)("td",null,(0,r.kt)("code",null,"CallbackResult"))))),(0,r.kt)("h3",{id:"onheadersreceivedcallback"},"OnHeadersReceivedCallback"),(0,r.kt)("p",null,"The callback function for the HTTP Response Header event."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},"(result: OnHeadersReceivedCallbackResult) => void\n")),(0,r.kt)("table",null,(0,r.kt)("thead",null,(0,r.kt)("tr",null,(0,r.kt)("th",null,"Property"),(0,r.kt)("th",null,"Type"))),(0,r.kt)("tbody",null,(0,r.kt)("tr",null,(0,r.kt)("td",null,"result"),(0,r.kt)("td",null,(0,r.kt)("code",null,"OnHeadersReceivedCallbackResult"))))),(0,r.kt)("h3",{id:"onprogressupdatecallback"},"OnProgressUpdateCallback"),(0,r.kt)("p",null,"The callback function for the download progress change event."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},"(result: OnProgressUpdateCallbackResult) => void\n")),(0,r.kt)("table",null,(0,r.kt)("thead",null,(0,r.kt)("tr",null,(0,r.kt)("th",null,"Property"),(0,r.kt)("th",null,"Type"))),(0,r.kt)("tbody",null,(0,r.kt)("tr",null,(0,r.kt)("td",null,"result"),(0,r.kt)("td",null,(0,r.kt)("code",null,"OnProgressUpdateCallbackResult"))))),(0,r.kt)("h3",{id:"onheadersreceivedcallbackresult"},"OnHeadersReceivedCallbackResult"),(0,r.kt)("table",null,(0,r.kt)("thead",null,(0,r.kt)("tr",null,(0,r.kt)("th",null,"Property"),(0,r.kt)("th",null,"Type"),(0,r.kt)("th",null,"Description"))),(0,r.kt)("tbody",null,(0,r.kt)("tr",null,(0,r.kt)("td",null,"header"),(0,r.kt)("td",null,(0,r.kt)("code",null,"Record<string, any>")),(0,r.kt)("td",null,"HTTP Response Header returned by the developer server")))),(0,r.kt)("h3",{id:"onprogressupdatecallbackresult"},"OnProgressUpdateCallbackResult"),(0,r.kt)("table",null,(0,r.kt)("thead",null,(0,r.kt)("tr",null,(0,r.kt)("th",null,"Property"),(0,r.kt)("th",null,"Type"),(0,r.kt)("th",null,"Description"))),(0,r.kt)("tbody",null,(0,r.kt)("tr",null,(0,r.kt)("td",null,"progress"),(0,r.kt)("td",null,(0,r.kt)("code",null,"number")),(0,r.kt)("td",null,"Download progress percentage")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"totalBytesWritten"),(0,r.kt)("td",null,(0,r.kt)("code",null,"number")),(0,r.kt)("td",null,"The length of downloaded data, in bytes")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"totalBytesExpectedToWrite"),(0,r.kt)("td",null,(0,r.kt)("code",null,"number")),(0,r.kt)("td",null,"The length of data expected to be downloaded, in bytes")))),(0,r.kt)("h2",{id:"api-support-5"},"API Support"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"center"},"API"),(0,r.kt)("th",{parentName:"tr",align:"center"},"WeChat Mini-Program"),(0,r.kt)("th",{parentName:"tr",align:"center"},"H5"),(0,r.kt)("th",{parentName:"tr",align:"center"},"React Native"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"DownloadTask.abort"),(0,r.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,r.kt)("td",{parentName:"tr",align:"center"}),(0,r.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"DownloadTask.offHeadersReceived"),(0,r.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,r.kt)("td",{parentName:"tr",align:"center"}),(0,r.kt)("td",{parentName:"tr",align:"center"})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"DownloadTask.offProgressUpdate"),(0,r.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,r.kt)("td",{parentName:"tr",align:"center"}),(0,r.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"DownloadTask.onHeadersReceived"),(0,r.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,r.kt)("td",{parentName:"tr",align:"center"}),(0,r.kt)("td",{parentName:"tr",align:"center"})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"DownloadTask.onProgressUpdate"),(0,r.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,r.kt)("td",{parentName:"tr",align:"center"}),(0,r.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f")))))}u.isMDXComponent=!0}}]);