"use strict";(self.webpackChunktaro_docs=self.webpackChunktaro_docs||[]).push([[60090],{3905:function(e,t,r){r.d(t,{Zo:function(){return u},kt:function(){return s}});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var d=n.createContext({}),p=function(e){var t=n.useContext(d),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=p(e.components);return n.createElement(d.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,l=e.originalType,d=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),m=p(r),s=a,k=m["".concat(d,".").concat(s)]||m[s]||c[s]||l;return r?n.createElement(k,i(i({ref:t},u),{},{components:r})):n.createElement(k,i({ref:t},u))}));function s(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=r.length,i=new Array(l);i[0]=m;var o={};for(var d in t)hasOwnProperty.call(t,d)&&(o[d]=t[d]);o.originalType=e,o.mdxType="string"==typeof e?e:a,i[1]=o;for(var p=2;p<l;p++)i[p]=r[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},72744:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return o},contentTitle:function(){return d},metadata:function(){return p},toc:function(){return u},default:function(){return m}});var n=r(83117),a=r(80102),l=(r(67294),r(3905)),i=["components"],o={title:"MediaQueryObserver",sidebar_label:"MediaQueryObserver"},d=void 0,p={unversionedId:"apis/wxml/MediaQueryObserver",id:"apis/wxml/MediaQueryObserver",title:"MediaQueryObserver",description:"MediaQueryObserver \u5bf9\u8c61\uff0c\u7528\u4e8e\u76d1\u542c\u9875\u9762 media query \u72b6\u6001\u7684\u53d8\u5316\uff0c\u5982\u754c\u9762\u7684\u957f\u5bbd\u662f\u4e0d\u662f\u5728\u67d0\u4e2a\u6307\u5b9a\u7684\u8303\u56f4\u5185\u3002",source:"@site/docs/apis/wxml/MediaQueryObserver.md",sourceDirName:"apis/wxml",slug:"/apis/wxml/MediaQueryObserver",permalink:"/taro/en/docs/next/apis/wxml/MediaQueryObserver",editUrl:"https://github.com/nervjs/taro-docs/edit/docs/docs/apis/wxml/MediaQueryObserver.md",tags:[],version:"current",frontMatter:{title:"MediaQueryObserver",sidebar_label:"MediaQueryObserver"},sidebar:"API",previous:{title:"IntersectionObserver",permalink:"/taro/en/docs/next/apis/wxml/IntersectionObserver"},next:{title:"NodesRef",permalink:"/taro/en/docs/next/apis/wxml/NodesRef"}},u=[{value:"\u65b9\u6cd5",id:"\u65b9\u6cd5",children:[{value:"observe",id:"observe",children:[],level:3},{value:"disconnect",id:"disconnect",children:[],level:3}],level:2},{value:"\u53c2\u6570",id:"\u53c2\u6570",children:[{value:"descriptor",id:"descriptor",children:[],level:3},{value:"observeCallback",id:"observecallback",children:[],level:3}],level:2}],c={toc:u};function m(e){var t=e.components,r=(0,a.Z)(e,i);return(0,l.kt)("wrapper",(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"MediaQueryObserver")," \u5bf9\u8c61\uff0c\u7528\u4e8e\u76d1\u542c\u9875\u9762 media query \u72b6\u6001\u7684\u53d8\u5316\uff0c\u5982\u754c\u9762\u7684\u957f\u5bbd\u662f\u4e0d\u662f\u5728\u67d0\u4e2a\u6307\u5b9a\u7684\u8303\u56f4\u5185\u3002"),(0,l.kt)("h2",{id:"\u65b9\u6cd5"},"\u65b9\u6cd5"),(0,l.kt)("h3",{id:"observe"},"observe"),(0,l.kt)("p",null,"\u5f00\u59cb\u76d1\u542c\u9875\u9762 media query \u53d8\u5316\u60c5\u51b5"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-tsx"},"(descriptor: descriptor, callback: observeCallback) => void\n")),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"\u53c2\u6570"),(0,l.kt)("th",{parentName:"tr",align:null},"\u7c7b\u578b"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"descriptor"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"descriptor"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"callback"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"observeCallback"))))),(0,l.kt)("h3",{id:"disconnect"},"disconnect"),(0,l.kt)("p",null,"\u505c\u6b62\u76d1\u542c\u3002\u56de\u8c03\u51fd\u6570\u5c06\u4e0d\u518d\u89e6\u53d1"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-tsx"},"() => void\n")),(0,l.kt)("h2",{id:"\u53c2\u6570"},"\u53c2\u6570"),(0,l.kt)("h3",{id:"descriptor"},"descriptor"),(0,l.kt)("p",null,"media query \u63cf\u8ff0\u7b26"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"\u53c2\u6570"),(0,l.kt)("th",{parentName:"tr",align:null},"\u7c7b\u578b"),(0,l.kt)("th",{parentName:"tr",align:null},"\u8bf4\u660e"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"minWidth"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"number")),(0,l.kt)("td",{parentName:"tr",align:null},"\u9875\u9762\u6700\u5c0f\u5bbd\u5ea6 (\u5355\u4f4d: px)")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"maxWidth"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"number")),(0,l.kt)("td",{parentName:"tr",align:null},"\u9875\u9762\u6700\u5927\u5bbd\u5ea6 (\u5355\u4f4d: px)")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"width"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"number")),(0,l.kt)("td",{parentName:"tr",align:null},"\u9875\u9762\u5bbd\u5ea6 (\u5355\u4f4d: px)")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"minHeight"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"number")),(0,l.kt)("td",{parentName:"tr",align:null},"\u9875\u9762\u6700\u5c0f\u9ad8\u5ea6 (\u5355\u4f4d: px)")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"maxHeight"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"number")),(0,l.kt)("td",{parentName:"tr",align:null},"\u9875\u9762\u6700\u5927\u9ad8\u5ea6\uff08px \u4e3a\u5355\u4f4d\uff09")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"height"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"number")),(0,l.kt)("td",{parentName:"tr",align:null},"\u9875\u9762\u9ad8\u5ea6\uff08px \u4e3a\u5355\u4f4d\uff09")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"orientation"),(0,l.kt)("td",{parentName:"tr",align:null},'"landscape" or "portrait"'),(0,l.kt)("td",{parentName:"tr",align:null},"\u5c4f\u5e55\u65b9\u5411")))),(0,l.kt)("h3",{id:"observecallback"},"observeCallback"),(0,l.kt)("p",null,"\u76d1\u542c media query \u72b6\u6001\u53d8\u5316\u7684\u56de\u8c03\u51fd\u6570"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-tsx"},"(res: { matches: boolean; }) => void\n")),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"\u53c2\u6570"),(0,l.kt)("th",{parentName:"tr",align:null},"\u7c7b\u578b"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"res"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"{ matches: boolean; }"))))))}m.isMDXComponent=!0}}]);