"use strict";(self.webpackChunktaro_docs=self.webpackChunktaro_docs||[]).push([[5238],{79874:function(t,e,r){r.d(e,{Zo:function(){return m},kt:function(){return d}});var a=r(93106);function n(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function l(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,a)}return r}function i(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?l(Object(r),!0).forEach((function(e){n(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function p(t,e){if(null==t)return{};var r,a,n=function(t,e){if(null==t)return{};var r,a,n={},l=Object.keys(t);for(a=0;a<l.length;a++)r=l[a],e.indexOf(r)>=0||(n[r]=t[r]);return n}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(a=0;a<l.length;a++)r=l[a],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(t,r)&&(n[r]=t[r])}return n}var o=a.createContext({}),c=function(t){var e=a.useContext(o),r=e;return t&&(r="function"==typeof t?t(e):i(i({},e),t)),r},m=function(t){var e=c(t.components);return a.createElement(o.Provider,{value:e},t.children)},s={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},k=a.forwardRef((function(t,e){var r=t.components,n=t.mdxType,l=t.originalType,o=t.parentName,m=p(t,["components","mdxType","originalType","parentName"]),k=c(r),d=n,f=k["".concat(o,".").concat(d)]||k[d]||s[d]||l;return r?a.createElement(f,i(i({ref:e},m),{},{components:r})):a.createElement(f,i({ref:e},m))}));function d(t,e){var r=arguments,n=e&&e.mdxType;if("string"==typeof t||n){var l=r.length,i=new Array(l);i[0]=k;var p={};for(var o in e)hasOwnProperty.call(e,o)&&(p[o]=e[o]);p.originalType=t,p.mdxType="string"==typeof t?t:n,i[1]=p;for(var c=2;c<l;c++)i[c]=r[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,r)}k.displayName="MDXCreateElement"},31748:function(t,e,r){r.r(e),r.d(e,{assets:function(){return c},contentTitle:function(){return p},default:function(){return k},frontMatter:function(){return i},metadata:function(){return o},toc:function(){return m}});r(93106);var a=r(79874);function n(){return n=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var r=arguments[e];for(var a in r)Object.prototype.hasOwnProperty.call(r,a)&&(t[a]=r[a])}return t},n.apply(this,arguments)}function l(t,e){if(null==t)return{};var r,a,n=function(t,e){if(null==t)return{};var r,a,n={},l=Object.keys(t);for(a=0;a<l.length;a++)r=l[a],e.indexOf(r)>=0||(n[r]=t[r]);return n}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(a=0;a<l.length;a++)r=l[a],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(t,r)&&(n[r]=t[r])}return n}const i={title:"Performance",sidebar_label:"Performance"},p=void 0,o={unversionedId:"apis/base/performance/Performance",id:"apis/base/performance/Performance",title:"Performance",description:"Performance \u5bf9\u8c61\uff0c\u7528\u4e8e\u83b7\u53d6\u6027\u80fd\u6570\u636e\u53ca\u521b\u5efa\u6027\u80fd\u76d1\u542c\u5668",source:"@site/docs/apis/base/performance/Performance.md",sourceDirName:"apis/base/performance",slug:"/apis/base/performance/",permalink:"/taro-docs/en/docs/next/apis/base/performance/",draft:!1,editUrl:"https://github.com/nervjs/taro-docs/edit/master/docs/apis/base/performance/Performance.md",tags:[],version:"current",frontMatter:{title:"Performance",sidebar_label:"Performance"},sidebar:"API",previous:{title:"EntryList",permalink:"/taro-docs/en/docs/next/apis/base/performance/EntryList"},next:{title:"PerformanceEntry",permalink:"/taro-docs/en/docs/next/apis/base/performance/PerformanceEntry"}},c={},m=[{value:"\u65b9\u6cd5",id:"\u65b9\u6cd5",level:2},{value:"createObserver",id:"createobserver",level:3},{value:"getEntries",id:"getentries",level:3},{value:"getEntriesByName",id:"getentriesbyname",level:3},{value:"getEntriesByType",id:"getentriesbytype",level:3},{value:"setBufferSize",id:"setbuffersize",level:3},{value:"API \u652f\u6301\u5ea6",id:"api-\u652f\u6301\u5ea6",level:2}],s={toc:m};function k(t){var{components:e}=t,i=l(t,["components"]);return(0,a.kt)("wrapper",n({},s,i,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Performance \u5bf9\u8c61\uff0c\u7528\u4e8e\u83b7\u53d6\u6027\u80fd\u6570\u636e\u53ca\u521b\u5efa\u6027\u80fd\u76d1\u542c\u5668"),(0,a.kt)("p",null,"\u652f\u6301\u60c5\u51b5\uff1a",(0,a.kt)("img",{title:"\u5fae\u4fe1\u5c0f\u7a0b\u5e8f",src:r(88421).Z,className:"icon_platform",width:"25px"})," ",(0,a.kt)("img",{title:"\u6296\u97f3\u5c0f\u7a0b\u5e8f",src:r(75629).Z,className:"icon_platform",width:"25px"})," ",(0,a.kt)("img",{title:"H5",src:r(80068).Z,className:"icon_platform icon_platform--not-support",width:"25px"})," ",(0,a.kt)("img",{title:"React Native",src:r(96636).Z,className:"icon_platform icon_platform--not-support",width:"25px"})," ",(0,a.kt)("img",{title:"Harmony",src:r(10532).Z,className:"icon_platform icon_platform--not-support",width:"25px"})),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},(0,a.kt)("a",n({parentName:"p"},{href:"https://developers.weixin.qq.com/miniprogram/dev/api/base/performance/Performance.html"}),"\u53c2\u8003\u6587\u6863"))),(0,a.kt)("h2",n({},{id:"\u65b9\u6cd5"}),"\u65b9\u6cd5"),(0,a.kt)("h3",n({},{id:"createobserver"}),"createObserver"),(0,a.kt)("p",null,"\u521b\u5efa\u5168\u5c40\u6027\u80fd\u4e8b\u4ef6\u76d1\u542c\u5668"),(0,a.kt)("p",null,"\u652f\u6301\u60c5\u51b5\uff1a",(0,a.kt)("img",{title:"\u5fae\u4fe1\u5c0f\u7a0b\u5e8f",src:r(88421).Z,className:"icon_platform",width:"25px"})," ",(0,a.kt)("img",{title:"H5",src:r(80068).Z,className:"icon_platform icon_platform--not-support",width:"25px"})," ",(0,a.kt)("img",{title:"React Native",src:r(96636).Z,className:"icon_platform icon_platform--not-support",width:"25px"})," ",(0,a.kt)("img",{title:"Harmony",src:r(10532).Z,className:"icon_platform icon_platform--not-support",width:"25px"})),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},(0,a.kt)("a",n({parentName:"p"},{href:"https://developers.weixin.qq.com/miniprogram/dev/api/base/performance/Performance.createObserver.html"}),"\u53c2\u8003\u6587\u6863"))),(0,a.kt)("pre",null,(0,a.kt)("code",n({parentName:"pre"},{className:"language-tsx"}),"(callback: Function) => PerformanceObserver\n")),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",n({parentName:"tr"},{align:null}),"\u53c2\u6570"),(0,a.kt)("th",n({parentName:"tr"},{align:null}),"\u7c7b\u578b"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",n({parentName:"tr"},{align:null}),"callback"),(0,a.kt)("td",n({parentName:"tr"},{align:null}),(0,a.kt)("inlineCode",{parentName:"td"},"Function"))))),(0,a.kt)("h3",n({},{id:"getentries"}),"getEntries"),(0,a.kt)("p",null,"\u8be5\u65b9\u6cd5\u8fd4\u56de\u5f53\u524d\u7f13\u51b2\u533a\u4e2d\u7684\u6240\u6709\u6027\u80fd\u6570\u636e"),(0,a.kt)("p",null,"\u652f\u6301\u60c5\u51b5\uff1a",(0,a.kt)("img",{title:"\u5fae\u4fe1\u5c0f\u7a0b\u5e8f",src:r(88421).Z,className:"icon_platform",width:"25px"})," ",(0,a.kt)("img",{title:"\u6296\u97f3\u5c0f\u7a0b\u5e8f",src:r(75629).Z,className:"icon_platform",width:"25px"})," ",(0,a.kt)("img",{title:"H5",src:r(80068).Z,className:"icon_platform icon_platform--not-support",width:"25px"})," ",(0,a.kt)("img",{title:"React Native",src:r(96636).Z,className:"icon_platform icon_platform--not-support",width:"25px"})," ",(0,a.kt)("img",{title:"Harmony",src:r(10532).Z,className:"icon_platform icon_platform--not-support",width:"25px"})),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},(0,a.kt)("a",n({parentName:"p"},{href:"https://developers.weixin.qq.com/miniprogram/dev/api/base/performance/Performance.getEntries.html"}),"\u53c2\u8003\u6587\u6863"))),(0,a.kt)("pre",null,(0,a.kt)("code",n({parentName:"pre"},{className:"language-tsx"}),"() => PerformanceEntry[]\n")),(0,a.kt)("h3",n({},{id:"getentriesbyname"}),"getEntriesByName"),(0,a.kt)("p",null,"\u83b7\u53d6\u5f53\u524d\u7f13\u51b2\u533a\u4e2d\u6240\u6709\u540d\u79f0\u4e3a ","[name]"," \u4e14\u7c7b\u578b\u4e3a ","[entryType]"," \u7684\u6027\u80fd\u6570\u636e"),(0,a.kt)("p",null,"\u652f\u6301\u60c5\u51b5\uff1a",(0,a.kt)("img",{title:"\u5fae\u4fe1\u5c0f\u7a0b\u5e8f",src:r(88421).Z,className:"icon_platform",width:"25px"})," ",(0,a.kt)("img",{title:"\u6296\u97f3\u5c0f\u7a0b\u5e8f",src:r(75629).Z,className:"icon_platform",width:"25px"})," ",(0,a.kt)("img",{title:"H5",src:r(80068).Z,className:"icon_platform icon_platform--not-support",width:"25px"})," ",(0,a.kt)("img",{title:"React Native",src:r(96636).Z,className:"icon_platform icon_platform--not-support",width:"25px"})," ",(0,a.kt)("img",{title:"Harmony",src:r(10532).Z,className:"icon_platform icon_platform--not-support",width:"25px"})),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},(0,a.kt)("a",n({parentName:"p"},{href:"https://developers.weixin.qq.com/miniprogram/dev/api/base/performance/Performance.getEntriesByName.html"}),"\u53c2\u8003\u6587\u6863"))),(0,a.kt)("pre",null,(0,a.kt)("code",n({parentName:"pre"},{className:"language-tsx"}),"(name: string, entryType: string) => PerformanceEntry[]\n")),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",n({parentName:"tr"},{align:null}),"\u53c2\u6570"),(0,a.kt)("th",n({parentName:"tr"},{align:null}),"\u7c7b\u578b"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",n({parentName:"tr"},{align:null}),"name"),(0,a.kt)("td",n({parentName:"tr"},{align:null}),(0,a.kt)("inlineCode",{parentName:"td"},"string"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",n({parentName:"tr"},{align:null}),"entryType"),(0,a.kt)("td",n({parentName:"tr"},{align:null}),(0,a.kt)("inlineCode",{parentName:"td"},"string"))))),(0,a.kt)("h3",n({},{id:"getentriesbytype"}),"getEntriesByType"),(0,a.kt)("p",null,"\u83b7\u53d6\u5f53\u524d\u7f13\u51b2\u533a\u4e2d\u6240\u6709\u7c7b\u578b\u4e3a ","[entryType]"," \u7684\u6027\u80fd\u6570\u636e"),(0,a.kt)("p",null,"\u652f\u6301\u60c5\u51b5\uff1a",(0,a.kt)("img",{title:"\u5fae\u4fe1\u5c0f\u7a0b\u5e8f",src:r(88421).Z,className:"icon_platform",width:"25px"})," ",(0,a.kt)("img",{title:"\u6296\u97f3\u5c0f\u7a0b\u5e8f",src:r(75629).Z,className:"icon_platform",width:"25px"})," ",(0,a.kt)("img",{title:"H5",src:r(80068).Z,className:"icon_platform icon_platform--not-support",width:"25px"})," ",(0,a.kt)("img",{title:"React Native",src:r(96636).Z,className:"icon_platform icon_platform--not-support",width:"25px"})," ",(0,a.kt)("img",{title:"Harmony",src:r(10532).Z,className:"icon_platform icon_platform--not-support",width:"25px"})),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},(0,a.kt)("a",n({parentName:"p"},{href:"https://developers.weixin.qq.com/miniprogram/dev/api/base/performance/Performance.getEntriesByType.html"}),"\u53c2\u8003\u6587\u6863"))),(0,a.kt)("pre",null,(0,a.kt)("code",n({parentName:"pre"},{className:"language-tsx"}),"(entryType: string) => PerformanceEntry[]\n")),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",n({parentName:"tr"},{align:null}),"\u53c2\u6570"),(0,a.kt)("th",n({parentName:"tr"},{align:null}),"\u7c7b\u578b"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",n({parentName:"tr"},{align:null}),"entryType"),(0,a.kt)("td",n({parentName:"tr"},{align:null}),(0,a.kt)("inlineCode",{parentName:"td"},"string"))))),(0,a.kt)("h3",n({},{id:"setbuffersize"}),"setBufferSize"),(0,a.kt)("p",null,"\u8bbe\u7f6e\u7f13\u51b2\u533a\u5927\u5c0f\uff0c\u9ed8\u8ba4\u7f13\u51b2 30 \u6761\u6027\u80fd\u6570\u636e"),(0,a.kt)("p",null,"\u652f\u6301\u60c5\u51b5\uff1a",(0,a.kt)("img",{title:"\u5fae\u4fe1\u5c0f\u7a0b\u5e8f",src:r(88421).Z,className:"icon_platform",width:"25px"})," ",(0,a.kt)("img",{title:"H5",src:r(80068).Z,className:"icon_platform icon_platform--not-support",width:"25px"})," ",(0,a.kt)("img",{title:"React Native",src:r(96636).Z,className:"icon_platform icon_platform--not-support",width:"25px"})," ",(0,a.kt)("img",{title:"Harmony",src:r(10532).Z,className:"icon_platform icon_platform--not-support",width:"25px"})),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},(0,a.kt)("a",n({parentName:"p"},{href:"https://developers.weixin.qq.com/miniprogram/dev/api/base/performance/Performance.setBufferSize.html"}),"\u53c2\u8003\u6587\u6863"))),(0,a.kt)("pre",null,(0,a.kt)("code",n({parentName:"pre"},{className:"language-tsx"}),"(size: number) => void\n")),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",n({parentName:"tr"},{align:null}),"\u53c2\u6570"),(0,a.kt)("th",n({parentName:"tr"},{align:null}),"\u7c7b\u578b"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",n({parentName:"tr"},{align:null}),"size"),(0,a.kt)("td",n({parentName:"tr"},{align:null}),(0,a.kt)("inlineCode",{parentName:"td"},"number"))))),(0,a.kt)("h2",n({},{id:"api-\u652f\u6301\u5ea6"}),"API \u652f\u6301\u5ea6"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",n({parentName:"tr"},{align:"center"}),"API"),(0,a.kt)("th",n({parentName:"tr"},{align:"center"}),"\u5fae\u4fe1\u5c0f\u7a0b\u5e8f"),(0,a.kt)("th",n({parentName:"tr"},{align:"center"}),"\u6296\u97f3\u5c0f\u7a0b\u5e8f"),(0,a.kt)("th",n({parentName:"tr"},{align:"center"}),"H5"),(0,a.kt)("th",n({parentName:"tr"},{align:"center"}),"React Native"),(0,a.kt)("th",n({parentName:"tr"},{align:"center"}),"Harmony"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",n({parentName:"tr"},{align:"center"}),"Performance"),(0,a.kt)("td",n({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,a.kt)("td",n({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,a.kt)("td",n({parentName:"tr"},{align:"center"})),(0,a.kt)("td",n({parentName:"tr"},{align:"center"})),(0,a.kt)("td",n({parentName:"tr"},{align:"center"}))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",n({parentName:"tr"},{align:"center"}),"Performance.createObserver"),(0,a.kt)("td",n({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,a.kt)("td",n({parentName:"tr"},{align:"center"})),(0,a.kt)("td",n({parentName:"tr"},{align:"center"})),(0,a.kt)("td",n({parentName:"tr"},{align:"center"})),(0,a.kt)("td",n({parentName:"tr"},{align:"center"}))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",n({parentName:"tr"},{align:"center"}),"Performance.getEntries"),(0,a.kt)("td",n({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,a.kt)("td",n({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,a.kt)("td",n({parentName:"tr"},{align:"center"})),(0,a.kt)("td",n({parentName:"tr"},{align:"center"})),(0,a.kt)("td",n({parentName:"tr"},{align:"center"}))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",n({parentName:"tr"},{align:"center"}),"Performance.getEntriesByName"),(0,a.kt)("td",n({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,a.kt)("td",n({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,a.kt)("td",n({parentName:"tr"},{align:"center"})),(0,a.kt)("td",n({parentName:"tr"},{align:"center"})),(0,a.kt)("td",n({parentName:"tr"},{align:"center"}))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",n({parentName:"tr"},{align:"center"}),"Performance.getEntriesByType"),(0,a.kt)("td",n({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,a.kt)("td",n({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,a.kt)("td",n({parentName:"tr"},{align:"center"})),(0,a.kt)("td",n({parentName:"tr"},{align:"center"})),(0,a.kt)("td",n({parentName:"tr"},{align:"center"}))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",n({parentName:"tr"},{align:"center"}),"Performance.setBufferSize"),(0,a.kt)("td",n({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,a.kt)("td",n({parentName:"tr"},{align:"center"})),(0,a.kt)("td",n({parentName:"tr"},{align:"center"})),(0,a.kt)("td",n({parentName:"tr"},{align:"center"})),(0,a.kt)("td",n({parentName:"tr"},{align:"center"}))))))}k.isMDXComponent=!0},80068:function(t,e,r){e.Z=r.p+"assets/images/h5-81f73c447874b6528e84ee395bece16e.png"},10532:function(t,e,r){e.Z=r.p+"assets/images/harmony-736bf88652a8ed1b8d792107239a9004.png"},96636:function(t,e,r){e.Z=r.p+"assets/images/rn-ecec68ba194e4b5e9fc3e853cc00c569.png"},75629:function(t,e,r){e.Z=r.p+"assets/images/tt-f4ec120e570f924e7ef763dcaf7fc69d.png"},88421:function(t,e,r){e.Z=r.p+"assets/images/weapp-0e8fbe2d5eb3676de4961b54ee7f5ba4.png"}}]);