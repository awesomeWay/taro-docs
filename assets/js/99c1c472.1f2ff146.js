"use strict";(self.webpackChunktaro_docs=self.webpackChunktaro_docs||[]).push([[31648],{3905:function(t,e,n){n.d(e,{Zo:function(){return c},kt:function(){return m}});var a=n(67294);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function l(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?l(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function o(t,e){if(null==t)return{};var n,a,r=function(t,e){if(null==t)return{};var n,a,r={},l=Object.keys(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var p=a.createContext({}),s=function(t){var e=a.useContext(p),n=e;return t&&(n="function"==typeof t?t(e):i(i({},e),t)),n},c=function(t){var e=s(t.components);return a.createElement(p.Provider,{value:e},t.children)},u={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},d=a.forwardRef((function(t,e){var n=t.components,r=t.mdxType,l=t.originalType,p=t.parentName,c=o(t,["components","mdxType","originalType","parentName"]),d=s(n),m=r,k=d["".concat(p,".").concat(m)]||d[m]||u[m]||l;return n?a.createElement(k,i(i({ref:e},c),{},{components:n})):a.createElement(k,i({ref:e},c))}));function m(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=n.length,i=new Array(l);i[0]=d;var o={};for(var p in e)hasOwnProperty.call(e,p)&&(o[p]=e[p]);o.originalType=t,o.mdxType="string"==typeof t?t:r,i[1]=o;for(var s=2;s<l;s++)i[s]=n[s];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},28671:function(t,e,n){n.r(e),n.d(e,{frontMatter:function(){return o},contentTitle:function(){return p},metadata:function(){return s},toc:function(){return c},default:function(){return d}});var a=n(83117),r=n(80102),l=(n(67294),n(3905)),i=["components"],o={title:"Taro.createVKSession(version)",sidebar_label:"createVKSession"},p=void 0,s={unversionedId:"apis/ai/visionkit/createVKSession",id:"apis/ai/visionkit/createVKSession",title:"Taro.createVKSession(version)",description:"\u521b\u5efa vision kit \u4f1a\u8bdd\u5bf9\u8c61",source:"@site/docs/apis/ai/visionkit/createVKSession.md",sourceDirName:"apis/ai/visionkit",slug:"/apis/ai/visionkit/createVKSession",permalink:"/taro/docs/next/apis/ai/visionkit/createVKSession",editUrl:"https://github.com/nervjs/taro-docs/edit/docs/docs/apis/ai/visionkit/createVKSession.md",tags:[],version:"current",frontMatter:{title:"Taro.createVKSession(version)",sidebar_label:"createVKSession"},sidebar:"API",previous:{title:"isVKSupport",permalink:"/taro/docs/next/apis/ai/visionkit/isVKSupport"},next:{title:"VKAnchor",permalink:"/taro/docs/next/apis/ai/visionkit/VKAnchor"}},c=[{value:"\u7c7b\u578b",id:"\u7c7b\u578b",children:[],level:2},{value:"\u53c2\u6570",id:"\u53c2\u6570",children:[{value:"Version",id:"version",children:[],level:3},{value:"Track",id:"track",children:[],level:3},{value:"Plane",id:"plane",children:[],level:3},{value:"PlaneMode",id:"planemode",children:[],level:3}],level:2}],u={toc:c};function d(t){var e=t.components,o=(0,r.Z)(t,i);return(0,l.kt)("wrapper",(0,a.Z)({},u,o,{components:e,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"\u521b\u5efa vision kit \u4f1a\u8bdd\u5bf9\u8c61"),(0,l.kt)("p",null,"\u652f\u6301\u60c5\u51b5\uff1a",(0,l.kt)("img",{title:"\u5fae\u4fe1\u5c0f\u7a0b\u5e8f",src:n(16710).Z,className:"icon_platform",width:"25px"})," ",(0,l.kt)("img",{title:"H5",src:n(5030).Z,className:"icon_platform icon_platform--not-support",width:"25px"})," ",(0,l.kt)("img",{title:"React Native",src:n(73555).Z,className:"icon_platform icon_platform--not-support",width:"25px"})),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},(0,l.kt)("a",{parentName:"p",href:"https://developers.weixin.qq.com/miniprogram/dev/api/ai/visionkit/wx.createVKSession.html"},"\u53c2\u8003\u6587\u6863"))),(0,l.kt)("h2",{id:"\u7c7b\u578b"},"\u7c7b\u578b"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-tsx"},"(version: keyof Version) => VKSession\n")),(0,l.kt)("h2",{id:"\u53c2\u6570"},"\u53c2\u6570"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"\u53c2\u6570"),(0,l.kt)("th",{parentName:"tr",align:null},"\u7c7b\u578b"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"version"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"keyof Version"))))),(0,l.kt)("h3",{id:"version"},"Version"),(0,l.kt)("p",null,"vision kit \u7248\u672c"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"\u53c2\u6570"),(0,l.kt)("th",{parentName:"tr",align:null},"\u8bf4\u660e"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"v1"),(0,l.kt)("td",{parentName:"tr",align:null},"\u65e7\u7248\u672c")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"v2"),(0,l.kt)("td",{parentName:"tr",align:null},"v2 \u7248\u672c\uff0c\u76ee\u524d\u53ea\u6709 iOS \u57fa\u7840\u5e93 2.22.0 \u4ee5\u4e0a\u652f\u6301")))),(0,l.kt)("h3",{id:"track"},"Track"),(0,l.kt)("p",null,"\u8ddf\u8e2a\u914d\u7f6e"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"\u53c2\u6570"),(0,l.kt)("th",{parentName:"tr",align:null},"\u7c7b\u578b"),(0,l.kt)("th",{parentName:"tr",align:null},"\u8bf4\u660e"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"plane"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"Plane")),(0,l.kt)("td",{parentName:"tr",align:null},"\u5e73\u9762\u8ddf\u8e2a\u914d\u7f6e")))),(0,l.kt)("h3",{id:"plane"},"Plane"),(0,l.kt)("p",null,"\u5e73\u9762\u8ddf\u8e2a\u914d\u7f6e"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"\u53c2\u6570"),(0,l.kt)("th",{parentName:"tr",align:null},"\u7c7b\u578b"),(0,l.kt)("th",{parentName:"tr",align:null},"\u8bf4\u660e"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"mode"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"keyof PlaneMode")),(0,l.kt)("td",{parentName:"tr",align:null},"\u5e73\u9762\u8ddf\u8e2a\u914d\u7f6e\u6a21\u5f0f")))),(0,l.kt)("h3",{id:"planemode"},"PlaneMode"),(0,l.kt)("p",null,"\u5e73\u9762\u8ddf\u8e2a\u914d\u7f6e\u6a21\u5f0f\u5408\u6cd5\u503c"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"\u53c2\u6570"),(0,l.kt)("th",{parentName:"tr",align:null},"\u8bf4\u660e"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"1"),(0,l.kt)("td",{parentName:"tr",align:null},"\u68c0\u6d4b\u6a2a\u5411\u5e73\u9762")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"2"),(0,l.kt)("td",{parentName:"tr",align:null},"\u68c0\u6d4b\u7eb5\u5411\u5e73\u9762\uff0c\u53ea\u6709 v2 \u7248\u672c\u652f\u6301")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"3"),(0,l.kt)("td",{parentName:"tr",align:null},"\u68c0\u6d4b\u6a2a\u5411\u548c\u7eb5\u5411\u5e73\u9762\uff0c\u53ea\u6709 v2 \u7248\u672c\u652f\u6301")))))}d.isMDXComponent=!0},5030:function(t,e,n){e.Z=n.p+"assets/images/h5-81f73c447874b6528e84ee395bece16e.png"},73555:function(t,e,n){e.Z=n.p+"assets/images/rn-ecec68ba194e4b5e9fc3e853cc00c569.png"},16710:function(t,e,n){e.Z=n.p+"assets/images/weapp-0e8fbe2d5eb3676de4961b54ee7f5ba4.png"}}]);