"use strict";(self.webpackChunktaro_docs=self.webpackChunktaro_docs||[]).push([[67055],{3905:function(t,e,a){a.d(e,{Zo:function(){return p},kt:function(){return f}});var n=a(67294);function r(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function l(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function i(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?l(Object(a),!0).forEach((function(e){r(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function m(t,e){if(null==t)return{};var a,n,r=function(t,e){if(null==t)return{};var a,n,r={},l=Object.keys(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||(r[a]=t[a]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(r[a]=t[a])}return r}var d=n.createContext({}),o=function(t){var e=n.useContext(d),a=e;return t&&(a="function"==typeof t?t(e):i(i({},e),t)),a},p=function(t){var e=o(t.components);return n.createElement(d.Provider,{value:e},t.children)},k={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},N=n.forwardRef((function(t,e){var a=t.components,r=t.mdxType,l=t.originalType,d=t.parentName,p=m(t,["components","mdxType","originalType","parentName"]),N=o(a),f=r,g=N["".concat(d,".").concat(f)]||N[f]||k[f]||l;return a?n.createElement(g,i(i({ref:e},p),{},{components:a})):n.createElement(g,i({ref:e},p))}));function f(t,e){var a=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=a.length,i=new Array(l);i[0]=N;var m={};for(var d in e)hasOwnProperty.call(e,d)&&(m[d]=e[d]);m.originalType=t,m.mdxType="string"==typeof t?t:r,i[1]=m;for(var o=2;o<l;o++)i[o]=a[o];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}N.displayName="MDXCreateElement"},73616:function(t,e,a){a.r(e),a.d(e,{frontMatter:function(){return m},contentTitle:function(){return d},metadata:function(){return o},toc:function(){return p},default:function(){return N}});var n=a(83117),r=a(80102),l=(a(67294),a(3905)),i=["components"],m={title:"Taro DOM Reference"},d=void 0,o={unversionedId:"taro-dom",id:"version-3.x/taro-dom",title:"Taro DOM Reference",description:"\u5c0f\u7a0b\u5e8f\u73af\u5883\u4e0b\uff0cTaro \u6a21\u62df\u5b9e\u73b0\u7684 DOM\u3001BOM API \u6982\u89c8\u3002",source:"@site/versioned_docs/version-3.x/taro-dom.md",sourceDirName:".",slug:"/taro-dom",permalink:"/taro/en/docs/taro-dom",editUrl:"https://github.com/nervjs/taro-docs/edit/docs/versioned_docs/version-3.x/taro-dom.md",tags:[],version:"3.x",frontMatter:{title:"Taro DOM Reference"},sidebar:"docs",previous:{title:"Implementation Details",permalink:"/taro/en/docs/implement-note"}},p=[{value:"DOM",id:"dom",children:[{value:"TaroEventTarget",id:"taroeventtarget",children:[],level:3},{value:"TaroNode",id:"taronode",children:[{value:"\u53ef\u9009\u5c5e\u6027/\u65b9\u6cd5",id:"\u53ef\u9009\u5c5e\u6027\u65b9\u6cd5",children:[],level:4}],level:3},{value:"TaroText",id:"tarotext",children:[],level:3},{value:"TaroElement",id:"taroelement",children:[{value:"\u53ef\u9009\u5c5e\u6027/\u65b9\u6cd5",id:"\u53ef\u9009\u5c5e\u6027\u65b9\u6cd5-1",children:[],level:4}],level:3},{value:"RootElement",id:"rootelement",children:[],level:3},{value:"FormElement",id:"formelement",children:[],level:3},{value:"SVGElement",id:"svgelement",children:[],level:3}],level:2},{value:"BOM",id:"bom",children:[{value:"window",id:"window",children:[],level:3},{value:"document",id:"document",children:[],level:3},{value:"navigator",id:"navigator",children:[],level:3},{value:"requestAnimationFrame",id:"requestanimationframe",children:[],level:3},{value:"cancelAnimationFrame",id:"cancelanimationframe",children:[],level:3}],level:2}],k={toc:p};function N(t){var e=t.components,a=(0,r.Z)(t,i);return(0,l.kt)("wrapper",(0,n.Z)({},k,a,{components:e,mdxType:"MDXLayout"}),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"\u5c0f\u7a0b\u5e8f"),"\u73af\u5883\u4e0b\uff0cTaro \u6a21\u62df\u5b9e\u73b0\u7684 DOM\u3001BOM API \u6982\u89c8\u3002"),(0,l.kt)("p",null,"\u76f8\u5173\u4ee3\u7801\u4f4d\u4e8e ",(0,l.kt)("inlineCode",{parentName:"p"},"@tarojs/runtime")," \u5305\u4e2d\u3002"),(0,l.kt)("h2",{id:"dom"},"DOM"),(0,l.kt)("h3",{id:"taroeventtarget"},"TaroEventTarget"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"left"},"\u5c5e\u6027\u6216\u65b9\u6cd5"),(0,l.kt)("th",{parentName:"tr",align:"left"},"\u8bf4\u660e"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"addEventListener"),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u7ed1\u5b9a\u4e8b\u4ef6")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"removeEventListener"),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u89e3\u7ed1\u4e8b\u4ef6")))),(0,l.kt)("h3",{id:"taronode"},"TaroNode"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"TaroEventTarget <- TaroNode")),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"left"},"\u5c5e\u6027\u6216\u65b9\u6cd5"),(0,l.kt)("th",{parentName:"tr",align:"left"},"\u8bf4\u660e"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"nodeType"),(0,l.kt)("td",{parentName:"tr",align:"left"})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"nodeName"),(0,l.kt)("td",{parentName:"tr",align:"left"})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"parentNode"),(0,l.kt)("td",{parentName:"tr",align:"left"})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"childNodes"),(0,l.kt)("td",{parentName:"tr",align:"left"})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"nextSibling"),(0,l.kt)("td",{parentName:"tr",align:"left"})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"previousSibling"),(0,l.kt)("td",{parentName:"tr",align:"left"})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"parentElement"),(0,l.kt)("td",{parentName:"tr",align:"left"})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"firstChild"),(0,l.kt)("td",{parentName:"tr",align:"left"})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"lastChild"),(0,l.kt)("td",{parentName:"tr",align:"left"})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"textContent"),(0,l.kt)("td",{parentName:"tr",align:"left"},"setter")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"insertBefore"),(0,l.kt)("td",{parentName:"tr",align:"left"})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"appendChild"),(0,l.kt)("td",{parentName:"tr",align:"left"})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"replaceChild"),(0,l.kt)("td",{parentName:"tr",align:"left"})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"removeChild"),(0,l.kt)("td",{parentName:"tr",align:"left"})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"remove"),(0,l.kt)("td",{parentName:"tr",align:"left"})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"hasChildNodes"),(0,l.kt)("td",{parentName:"tr",align:"left"})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"ownerDocument"),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u53ea\u8bfb\uff0c\u8fd4\u56de\u6a21\u62df\u7684 ",(0,l.kt)("a",{parentName:"td",href:"taro-dom#document"},"document")," \u5bf9\u8c61")))),(0,l.kt)("h4",{id:"\u53ef\u9009\u5c5e\u6027\u65b9\u6cd5"},"\u53ef\u9009\u5c5e\u6027/\u65b9\u6cd5"),(0,l.kt)("p",null,"\u4ee5\u4e0b\u5c5e\u6027/\u65b9\u6cd5\u4e0d\u662f\u6bcf\u4e2a Web \u6846\u67b6\u3001\u6bcf\u4e2a\u5e94\u7528\u90fd\u9700\u8981\u4f7f\u7528\u7684\u3002\u56e0\u6b64 Taro v3.4 \u628a\u8fd9\u7c7b DOM APIs \u505a\u6210\u53ef\u63d2\u62d4\u5f0f\uff0c\u8ba9\u5f00\u53d1\u8005\u53ef\u4ee5\u9009\u62e9\u5728\u6700\u7ec8\u7684\u7f16\u8bd1\u7ed3\u679c\u91cc\u53ea\u5b58\u5728\u54ea\u4e9b DOM APIs\u3002"),(0,l.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,l.kt)("div",{parentName:"div",className:"admonition-heading"},(0,l.kt)("h5",{parentName:"div"},(0,l.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,l.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,l.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,l.kt)("div",{parentName:"div",className:"admonition-content"},(0,l.kt)("p",{parentName:"div"},"\u5982\u679c\u6ca1\u6709\u4f7f\u7528 React \u7684 ",(0,l.kt)("inlineCode",{parentName:"p"},"dangerouslySetInnerHTML")," \u6216 Vue2 \u7684 ",(0,l.kt)("inlineCode",{parentName:"p"},"v-html")," \u53bb\u6e32\u67d3 HTML \u5b57\u7b26\u4e32\uff0c\u53ef\u4ee5\u5173\u95ed\u5bf9 ",(0,l.kt)("inlineCode",{parentName:"p"},"innerHTML")," \u7684\u652f\u6301\uff0c\u53ef\u4ee5\u8282\u7701 ",(0,l.kt)("strong",{parentName:"p"},"9k")," \u7684\u7a7a\u95f4\u3002\n\u4f46 Vue3 \u5fc5\u987b\u5f00\u542f\uff0c\u56e0\u4e3a\u5b83\u4f7f\u7528\u4e86 insertAdjacentHTML\u3002"))),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"left"},"\u5c5e\u6027\u6216\u65b9\u6cd5"),(0,l.kt)("th",{parentName:"tr",align:"left"},"\u9ed8\u8ba4\u72b6\u6001"),(0,l.kt)("th",{parentName:"tr",align:"left"},"\u914d\u7f6e\u9879"),(0,l.kt)("th",{parentName:"tr",align:"left"},"\u8bf4\u660e"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"innerHTML"),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u5f00\u542f"),(0,l.kt)("td",{parentName:"tr",align:"left"},"enableInnerHTML"),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u76ee\u524d\u53ea\u5b9e\u73b0\u4e86 ",(0,l.kt)("inlineCode",{parentName:"td"},"setter"),"(\u4e3b\u8981\u7528\u4e8e\u652f\u6301 React ",(0,l.kt)("inlineCode",{parentName:"td"},"dangerouslySetInnerHTML"),"\u3001Vue ",(0,l.kt)("inlineCode",{parentName:"td"},"v-html"),")",(0,l.kt)("br",null),(0,l.kt)("inlineCode",{parentName:"td"},"getter")," \u53ea\u4f1a\u8fd4\u56de\u7a7a\u5b57\u7b26\u4e32")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"insertAdjacentHTML"),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u5f00\u542f\uff08Vue3\uff09"),(0,l.kt)("td",{parentName:"tr",align:"left"},"enableAdjacentHTML"),(0,l.kt)("td",{parentName:"tr",align:"left"})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"cloneNode"),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u5f00\u542f\uff08Vue3\uff09"),(0,l.kt)("td",{parentName:"tr",align:"left"},"enableCloneNode"),(0,l.kt)("td",{parentName:"tr",align:"left"})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"contains"),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u5173\u95ed"),(0,l.kt)("td",{parentName:"tr",align:"left"},"enableContains"),(0,l.kt)("td",{parentName:"tr",align:"left"})))),(0,l.kt)("h3",{id:"tarotext"},"TaroText"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"TaroEventTarget <- TaroNode <- TaroText")),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"left"},"\u5c5e\u6027\u6216\u65b9\u6cd5"),(0,l.kt)("th",{parentName:"tr",align:"left"},"\u8bf4\u660e"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"textContent"),(0,l.kt)("td",{parentName:"tr",align:"left"})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"nodeValue"),(0,l.kt)("td",{parentName:"tr",align:"left"})))),(0,l.kt)("h3",{id:"taroelement"},"TaroElement"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"TaroEventTarget <- TaroNode <- TaroElement")),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"left"},"\u5c5e\u6027\u6216\u65b9\u6cd5"),(0,l.kt)("th",{parentName:"tr",align:"left"},"\u8bf4\u660e"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"id"),(0,l.kt)("td",{parentName:"tr",align:"left"})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"tagName"),(0,l.kt)("td",{parentName:"tr",align:"left"})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"props"),(0,l.kt)("td",{parentName:"tr",align:"left"})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"style"),(0,l.kt)("td",{parentName:"tr",align:"left"})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"dataset"),(0,l.kt)("td",{parentName:"tr",align:"left"})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"className"),(0,l.kt)("td",{parentName:"tr",align:"left"})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"cssText"),(0,l.kt)("td",{parentName:"tr",align:"left"})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"classList"),(0,l.kt)("td",{parentName:"tr",align:"left"})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"children"),(0,l.kt)("td",{parentName:"tr",align:"left"})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"attributes"),(0,l.kt)("td",{parentName:"tr",align:"left"})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"textContent"),(0,l.kt)("td",{parentName:"tr",align:"left"})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"hasAttribute"),(0,l.kt)("td",{parentName:"tr",align:"left"})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"hasAttributes"),(0,l.kt)("td",{parentName:"tr",align:"left"})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"focus"),(0,l.kt)("td",{parentName:"tr",align:"left"})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"blur"),(0,l.kt)("td",{parentName:"tr",align:"left"})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"setAttribute"),(0,l.kt)("td",{parentName:"tr",align:"left"})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"removeAttribute"),(0,l.kt)("td",{parentName:"tr",align:"left"})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"getAttribute"),(0,l.kt)("td",{parentName:"tr",align:"left"})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"getElementsByTagName"),(0,l.kt)("td",{parentName:"tr",align:"left"})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"getElementsByClassName"),(0,l.kt)("td",{parentName:"tr",align:"left"})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"dispatchEvent"),(0,l.kt)("td",{parentName:"tr",align:"left"})))),(0,l.kt)("h4",{id:"\u53ef\u9009\u5c5e\u6027\u65b9\u6cd5-1"},"\u53ef\u9009\u5c5e\u6027/\u65b9\u6cd5"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"left"},"\u5c5e\u6027\u6216\u65b9\u6cd5"),(0,l.kt)("th",{parentName:"tr",align:"left"},"\u9ed8\u8ba4\u72b6\u6001"),(0,l.kt)("th",{parentName:"tr",align:"left"},"\u914d\u7f6e\u9879"),(0,l.kt)("th",{parentName:"tr",align:"left"},"\u8bf4\u660e"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"content"),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u5f00\u542f\uff08Vue3\uff09"),(0,l.kt)("td",{parentName:"tr",align:"left"},"enableTemplateContent"),(0,l.kt)("td",{parentName:"tr",align:"left"})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"getBoundingClientRect"),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u5173\u95ed"),(0,l.kt)("td",{parentName:"tr",align:"left"},"enableSizeAPIs"),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u53d7\u9650\u4e8e\u5c0f\u7a0b\u5e8f\uff0c\u6b64 API \u662f",(0,l.kt)("strong",{parentName:"td"},"\u5f02\u6b65\u51fd\u6570"))))),(0,l.kt)("h3",{id:"rootelement"},"RootElement"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"TaroEventTarget <- TaroNode <- TaroElement <- RootElement")),(0,l.kt)("p",null,"\u975e Web \u6807\u51c6 API\u3002\u662f\u94fe\u63a5 Taro DOM \u66f4\u65b0\u548c\u5c0f\u7a0b\u5e8f ",(0,l.kt)("inlineCode",{parentName:"p"},"setData")," \u7684\u6838\u5fc3\u5b9e\u73b0\u3002"),(0,l.kt)("p",null,"\u5728\u8fd9\u91cc\u4f1a\u8c03\u7528\u5c0f\u7a0b\u5e8f\u7684 ",(0,l.kt)("inlineCode",{parentName:"p"},"setData")," API\uff0c\u628a Taro DOM \u7684\u5e8f\u5217\u5316\u6570\u636e\u4f20\u9012\u5230\u5c0f\u7a0b\u5e8f\u6e32\u67d3\u5c42\u3002"),(0,l.kt)("h3",{id:"formelement"},"FormElement"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"TaroEventTarget <- TaroNode <- TaroElement <- FormElement")),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"left"},"\u5c5e\u6027\u6216\u65b9\u6cd5"),(0,l.kt)("th",{parentName:"tr",align:"left"},"\u8bf4\u660e"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"value"),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u8fd4\u56de\u6216\u8bbe\u7f6e\u5f53\u524d\u63a7\u4ef6\u7684\u503c")))),(0,l.kt)("h3",{id:"svgelement"},"SVGElement"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"TaroEventTarget <- TaroNode <- TaroElement <- SVGElement")),(0,l.kt)("p",null,"\u53ea\u662f\u5b9e\u73b0\u4e86\u7ee7\u627f\u5173\u7cfb\uff0c\u6ca1\u6709\u5b9e\u73b0\u5c5e\u6027\u4e0e\u65b9\u6cd5\u3002"),(0,l.kt)("h2",{id:"bom"},"BOM"),(0,l.kt)("h3",{id:"window"},"window"),(0,l.kt)("p",null,"Taro \u6a21\u62df\u5b9e\u73b0\u4e86\u57fa\u4e8e\u6d4f\u89c8\u5668\u6807\u51c6 ",(0,l.kt)("inlineCode",{parentName:"p"},"window")," \u5bf9\u8c61\uff0c\u5b83\u4e3b\u8981\u5b9e\u73b0\u4e86\u7528\u4e8e\u652f\u6301 React\u3001Vue \u7b49\u6846\u67b6\u8fd0\u884c\u7684\u5fc5\u5907 API\u3002"),(0,l.kt)("p",null,"\u6b64\u5916\uff0cTaro \u4f1a\u4e3a ",(0,l.kt)("inlineCode",{parentName:"p"},"window")," \u5bf9\u8c61\u8d4b\u503c\u5c0f\u7a0b\u5e8f\u7684 ",(0,l.kt)("inlineCode",{parentName:"p"},"global")," \u5bf9\u8c61\u4e0a\u7684\u5168\u90e8\u5c5e\u6027\u3002"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"left"},"\u5c5e\u6027\u6216\u65b9\u6cd5"),(0,l.kt)("th",{parentName:"tr",align:"left"},"\u8bf4\u660e"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"navigator"),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u6a21\u62df\u7684 ",(0,l.kt)("a",{parentName:"td",href:"taro-dom#navigator"},"navigator")," \u5bf9\u8c61")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"document"),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u6a21\u62df\u7684 ",(0,l.kt)("a",{parentName:"td",href:"taro-dom#document"},"document")," \u5bf9\u8c61")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"requestAnimationFrame"),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u6a21\u62df\u7684 ",(0,l.kt)("a",{parentName:"td",href:"taro-dom#requestanimationframe"},"requestAnimationFrame")," API")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"cancelAnimationFrame"),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u6a21\u62df\u7684 ",(0,l.kt)("a",{parentName:"td",href:"taro-dom#cancelanimationframe"},"cancelAnimationFrame")," API")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"getComputedStyle"),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u53ea\u80fd\u7528\u4e8e\u8fd4\u56de\u5143\u7d20\u7684 ",(0,l.kt)("inlineCode",{parentName:"td"},"style")," \u503c\uff0c\u505a\u4e0d\u5230\u771f\u6b63\u53bb\u8ba1\u7b97 ",(0,l.kt)("inlineCode",{parentName:"td"},"css")," \u540e\u7684\u6837\u5f0f")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"addEventListener"),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u7a7a\u51fd\u6570")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"removeEventListener"),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u7a7a\u51fd\u6570")))),(0,l.kt)("h3",{id:"document"},"document"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"TaroEventTarget <- TaroNode <- TaroElement <- document")),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"left"},"\u5c5e\u6027\u6216\u65b9\u6cd5"),(0,l.kt)("th",{parentName:"tr",align:"left"},"\u8bf4\u660e"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"createElement"),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u8fd4\u56de ",(0,l.kt)("inlineCode",{parentName:"td"},"TaroElement"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"createElementNS"),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u6ca1\u6709\u6b63\u771f\u53bb\u5b9e\u73b0\uff0c\u7b49\u540c\u4e8e ",(0,l.kt)("inlineCode",{parentName:"td"},"document.createElement"),"\uff0c\u8fd4\u56de ",(0,l.kt)("inlineCode",{parentName:"td"},"TaroElement"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"createTextNode"),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u8fd4\u56de ",(0,l.kt)("inlineCode",{parentName:"td"},"TaroText"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"createComment"),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u8fd4\u56de ",(0,l.kt)("inlineCode",{parentName:"td"},"TaroText"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"getElementById"),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u8fd4\u56de ",(0,l.kt)("inlineCode",{parentName:"td"},"TaroElement"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"querySelector"),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u76ee\u524d\u53ea\u80fd\u6839\u636e ",(0,l.kt)("inlineCode",{parentName:"td"},"id")," \u5bfb\u627e\u5143\u7d20\uff0c\u7b49\u540c\u4e8e ",(0,l.kt)("inlineCode",{parentName:"td"},"document.getElementById"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"querySelectorAll"),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u6ca1\u6709\u6b63\u771f\u53bb\u5b9e\u73b0\uff0c\u8fd4\u56de ",(0,l.kt)("inlineCode",{parentName:"td"},"[]"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"defaultView"),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u8fd4\u56de ",(0,l.kt)("a",{parentName:"td",href:"taro-dom#window"},"window"))))),(0,l.kt)("h3",{id:"navigator"},"navigator"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"navigator")," \u4e3a\u4ee5\u4e0b\u5bf9\u8c61\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "appCodeName": "Mozilla",\n  "appName": "Netscape",\n  "appVersion": "5.0 (Macintosh; Intel Mac OS X 10_14_5) AppleWebKit/534.36 (KHTML, like Gecko) NodeJS/v4.1.0 Chrome/76.0.3809.132 Safari/534.36",\n  "cookieEnabled": true,\n  "mimeTypes": [],\n  "onLine": true,\n  "platform": "MacIntel",\n  "plugins": [],\n  "product": "Taro",\n  "productSub": "20030107",\n  "userAgent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_5) AppleWebKit/534.36 (KHTML, like Gecko) NodeJS/v4.1.0 Chrome/76.0.3809.132 Safari/534.36",\n  "vendor": "Joyent",\n  "vendorSub": ""\n}\n')),(0,l.kt)("h3",{id:"requestanimationframe"},"requestAnimationFrame"),(0,l.kt)("p",null,"\u4f18\u5148\u4f7f\u7528\u5c0f\u7a0b\u5e8f\u7684 ",(0,l.kt)("inlineCode",{parentName:"p"},"requestAnimationFrame")," API\uff0c\u5982\u679c\u4e0d\u5b58\u5728\u5219\u8fdb\u884c ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/NervJS/taro/blob/next/packages/taro-runtime/src/bom/raf.ts"},"polyfill"),"\u3002"),(0,l.kt)("h3",{id:"cancelanimationframe"},"cancelAnimationFrame"),(0,l.kt)("p",null,"\u4f18\u5148\u4f7f\u7528\u5c0f\u7a0b\u5e8f\u7684 ",(0,l.kt)("inlineCode",{parentName:"p"},"cancelAnimationFrame")," API\uff0c\u5982\u679c\u4e0d\u5b58\u5728\u5219\u4f7f\u7528 ",(0,l.kt)("inlineCode",{parentName:"p"},"clearTimeout")," \u4ee3\u66ff\u3002"))}N.isMDXComponent=!0}}]);