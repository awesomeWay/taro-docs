"use strict";(self.webpackChunktaro_docs=self.webpackChunktaro_docs||[]).push([[41047],{3905:function(e,t,r){r.d(t,{Zo:function(){return s},kt:function(){return d}});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=n.createContext({}),p=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},s=function(e){var t=p(e.components);return n.createElement(c.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),u=p(r),d=a,b=u["".concat(c,".").concat(d)]||u[d]||m[d]||o;return r?n.createElement(b,l(l({ref:t},s),{},{components:r})):n.createElement(b,l({ref:t},s))}));function d(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,l=new Array(o);l[0]=u;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:a,l[1]=i;for(var p=2;p<o;p++)l[p]=r[p];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}u.displayName="MDXCreateElement"},40849:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return i},contentTitle:function(){return c},metadata:function(){return p},toc:function(){return s},default:function(){return u}});var n=r(83117),a=r(80102),o=(r(67294),r(3905)),l=["components"],i={title:"Taro.createIntersectionObserver(component, options)",sidebar_label:"createIntersectionObserver"},c=void 0,p={unversionedId:"apis/wxml/createIntersectionObserver",id:"version-3.x/apis/wxml/createIntersectionObserver",title:"Taro.createIntersectionObserver(component, options)",description:"\u521b\u5efa\u5e76\u8fd4\u56de\u4e00\u4e2a IntersectionObserver \u5bf9\u8c61\u5b9e\u4f8b\u3002\u5728\u81ea\u5b9a\u4e49\u7ec4\u4ef6\u6216\u5305\u542b\u81ea\u5b9a\u4e49\u7ec4\u4ef6\u7684\u9875\u9762\u4e2d\uff0c\u5e94\u4f7f\u7528 this.createIntersectionObserver([options]) \u6765\u4ee3\u66ff\u3002",source:"@site/versioned_docs/version-3.x/apis/wxml/createIntersectionObserver.md",sourceDirName:"apis/wxml",slug:"/apis/wxml/createIntersectionObserver",permalink:"/taro/docs/apis/wxml/createIntersectionObserver",editUrl:"https://github.com/nervjs/taro-docs/edit/docs/versioned_docs/version-3.x/apis/wxml/createIntersectionObserver.md",tags:[],version:"3.x",frontMatter:{title:"Taro.createIntersectionObserver(component, options)",sidebar_label:"createIntersectionObserver"},sidebar:"API",previous:{title:"createSelectorQuery",permalink:"/taro/docs/apis/wxml/createSelectorQuery"},next:{title:"IntersectionObserver",permalink:"/taro/docs/apis/wxml/IntersectionObserver"}},s=[{value:"\u7c7b\u578b",id:"\u7c7b\u578b",children:[],level:2},{value:"\u53c2\u6570",id:"\u53c2\u6570",children:[{value:"Option",id:"option",children:[],level:3}],level:2},{value:"\u793a\u4f8b\u4ee3\u7801",id:"\u793a\u4f8b\u4ee3\u7801",children:[],level:2}],m={toc:s};function u(e){var t=e.components,i=(0,a.Z)(e,l);return(0,o.kt)("wrapper",(0,n.Z)({},m,i,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"\u521b\u5efa\u5e76\u8fd4\u56de\u4e00\u4e2a IntersectionObserver \u5bf9\u8c61\u5b9e\u4f8b\u3002\u5728\u81ea\u5b9a\u4e49\u7ec4\u4ef6\u6216\u5305\u542b\u81ea\u5b9a\u4e49\u7ec4\u4ef6\u7684\u9875\u9762\u4e2d\uff0c\u5e94\u4f7f\u7528 ",(0,o.kt)("inlineCode",{parentName:"p"},"this.createIntersectionObserver([options])")," \u6765\u4ee3\u66ff\u3002"),(0,o.kt)("p",null,"\u652f\u6301\u60c5\u51b5\uff1a",(0,o.kt)("img",{title:"\u5fae\u4fe1\u5c0f\u7a0b\u5e8f",src:r(16710).Z,className:"icon_platform",width:"25px"})," ",(0,o.kt)("img",{title:"H5",src:r(5030).Z,className:"icon_platform icon_platform--not-support",width:"25px"})," ",(0,o.kt)("img",{title:"React Native",src:r(73555).Z,className:"icon_platform icon_platform--not-support",width:"25px"})),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},(0,o.kt)("a",{parentName:"p",href:"https://developers.weixin.qq.com/miniprogram/dev/api/wxml/wx.createSelectorQuery.html"},"\u53c2\u8003\u6587\u6863"))),(0,o.kt)("h2",{id:"\u7c7b\u578b"},"\u7c7b\u578b"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx"},"(component: TaroGeneral.IAnyObject, options?: Option) => IntersectionObserver\n")),(0,o.kt)("h2",{id:"\u53c2\u6570"},"\u53c2\u6570"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"\u53c2\u6570"),(0,o.kt)("th",{parentName:"tr",align:null},"\u7c7b\u578b"),(0,o.kt)("th",{parentName:"tr",align:null},"\u8bf4\u660e"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"component"),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"TaroGeneral.IAnyObject")),(0,o.kt)("td",{parentName:"tr",align:null},"\u81ea\u5b9a\u4e49\u7ec4\u4ef6\u5b9e\u4f8b")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"options"),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"Option")),(0,o.kt)("td",{parentName:"tr",align:null},"\u9009\u9879")))),(0,o.kt)("h3",{id:"option"},"Option"),(0,o.kt)("p",null,"\u9009\u9879"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"\u53c2\u6570"),(0,o.kt)("th",{parentName:"tr",align:null},"\u7c7b\u578b"),(0,o.kt)("th",{parentName:"tr",align:"center"},"\u5fc5\u586b"),(0,o.kt)("th",{parentName:"tr",align:null},"\u8bf4\u660e"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"initialRatio"),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"number")),(0,o.kt)("td",{parentName:"tr",align:"center"},"\u5426"),(0,o.kt)("td",{parentName:"tr",align:null},"\u521d\u59cb\u7684\u76f8\u4ea4\u6bd4\u4f8b\uff0c\u5982\u679c\u8c03\u7528\u65f6\u68c0\u6d4b\u5230\u7684\u76f8\u4ea4\u6bd4\u4f8b\u4e0e\u8fd9\u4e2a\u503c\u4e0d\u76f8\u7b49\u4e14\u8fbe\u5230\u9608\u503c\uff0c\u5219\u4f1a\u89e6\u53d1\u4e00\u6b21\u76d1\u542c\u5668\u7684\u56de\u8c03\u51fd\u6570\u3002")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"observeAll"),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"boolean")),(0,o.kt)("td",{parentName:"tr",align:"center"},"\u5426"),(0,o.kt)("td",{parentName:"tr",align:null},"\u662f\u5426\u540c\u65f6\u89c2\u6d4b\u591a\u4e2a\u76ee\u6807\u8282\u70b9\uff08\u800c\u975e\u4e00\u4e2a\uff09\uff0c\u5982\u679c\u8bbe\u4e3a true \uff0cobserve \u7684 targetSelector \u5c06\u9009\u4e2d\u591a\u4e2a\u8282\u70b9\uff08\u6ce8\u610f\uff1a\u540c\u65f6\u9009\u4e2d\u8fc7\u591a\u8282\u70b9\u5c06\u5f71\u54cd\u6e32\u67d3\u6027\u80fd\uff09")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"thresholds"),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"number[]")),(0,o.kt)("td",{parentName:"tr",align:"center"},"\u5426"),(0,o.kt)("td",{parentName:"tr",align:null},"\u4e00\u4e2a\u6570\u503c\u6570\u7ec4\uff0c\u5305\u542b\u6240\u6709\u9608\u503c\u3002")))),(0,o.kt)("h2",{id:"\u793a\u4f8b\u4ee3\u7801"},"\u793a\u4f8b\u4ee3\u7801"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx"},"const\xa0observer\xa0=\xa0Taro.createIntersectionObserver(this,\xa0{\xa0thresholds:\xa0[0],\xa0observeAll:\xa0true\xa0})\n")))}u.isMDXComponent=!0},5030:function(e,t,r){t.Z=r.p+"assets/images/h5-81f73c447874b6528e84ee395bece16e.png"},73555:function(e,t,r){t.Z=r.p+"assets/images/rn-ecec68ba194e4b5e9fc3e853cc00c569.png"},16710:function(e,t,r){t.Z=r.p+"assets/images/weapp-0e8fbe2d5eb3676de4961b54ee7f5ba4.png"}}]);