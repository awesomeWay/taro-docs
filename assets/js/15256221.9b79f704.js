"use strict";(self.webpackChunktaro_docs=self.webpackChunktaro_docs||[]).push([[57286],{3905:function(e,t,n){n.d(t,{Zo:function(){return d},kt:function(){return v}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),p=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},d=function(e){var t=p(e.components);return r.createElement(c.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),u=p(n),v=a,m=u["".concat(c,".").concat(v)]||u[v]||s[v]||o;return n?r.createElement(m,l(l({ref:t},d),{},{components:n})):r.createElement(m,l({ref:t},d))}));function v(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,l=new Array(o);l[0]=u;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:a,l[1]=i;for(var p=2;p<o;p++)l[p]=n[p];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},52817:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return i},contentTitle:function(){return c},metadata:function(){return p},toc:function(){return d},default:function(){return u}});var r=n(83117),a=n(80102),o=(n(67294),n(3905)),l=["components"],i={title:"React DevTools"},c=void 0,p={unversionedId:"react-devtools",id:"version-3.x/react-devtools",title:"React DevTools",description:"Taro v3.3.1 \u5f00\u59cb\u652f\u6301\u3002",source:"@site/versioned_docs/version-3.x/react-devtools.md",sourceDirName:".",slug:"/react-devtools",permalink:"/taro/docs/react-devtools",editUrl:"https://github.com/nervjs/taro-docs/edit/docs/versioned_docs/version-3.x/react-devtools.md",tags:[],version:"3.x",frontMatter:{title:"React DevTools"},sidebar:"docs",previous:{title:"Hooks",permalink:"/taro/docs/hooks"},next:{title:"PReact",permalink:"/taro/docs/preact"}},d=[{value:"\u4f7f\u7528\u65b9\u6cd5",id:"\u4f7f\u7528\u65b9\u6cd5",children:[{value:"1. \u5b89\u88c5",id:"1-\u5b89\u88c5",children:[],level:3},{value:"2. \u914d\u7f6e Taro \u63d2\u4ef6",id:"2-\u914d\u7f6e-taro-\u63d2\u4ef6",children:[],level:3},{value:"3. \u7f16\u8bd1\u9879\u76ee",id:"3-\u7f16\u8bd1\u9879\u76ee",children:[],level:3}],level:2},{value:"\u63d2\u4ef6\u53c2\u6570",id:"\u63d2\u4ef6\u53c2\u6570",children:[{value:"enabled",id:"enabled",children:[],level:3},{value:"port",id:"port",children:[],level:3}],level:2},{value:"\u6ce8\u610f\u4e8b\u9879",id:"\u6ce8\u610f\u4e8b\u9879",children:[],level:2},{value:"\u8be6\u7ec6\u8bbe\u8ba1",id:"\u8be6\u7ec6\u8bbe\u8ba1",children:[],level:2}],s={toc:d};function u(e){var t=e.components,n=(0,a.Z)(e,l);return(0,o.kt)("wrapper",(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"Taro v3.3.1 \u5f00\u59cb\u652f\u6301\u3002"))),(0,o.kt)("p",null,"\u5728\u5f00\u53d1\u5c0f\u7a0b\u5e8f\u65f6\u53ef\u4ee5\u4f7f\u7528 ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/facebook/react/blob/main/packages/react-devtools/README.md"},"React DevTools"),"\u3002"),(0,o.kt)("h2",{id:"\u4f7f\u7528\u65b9\u6cd5"},"\u4f7f\u7528\u65b9\u6cd5"),(0,o.kt)("h3",{id:"1-\u5b89\u88c5"},"1. \u5b89\u88c5"),(0,o.kt)("p",null,"\u5728\u9879\u76ee\u4e2d\u5b89\u88c5 Taro \u63d2\u4ef6 ",(0,o.kt)("inlineCode",{parentName:"p"},"@tarojs/plugin-react-devtools"),"\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"$ yarn add --dev @tarojs/plugin-react-devtools\n")),(0,o.kt)("h3",{id:"2-\u914d\u7f6e-taro-\u63d2\u4ef6"},"2. \u914d\u7f6e Taro \u63d2\u4ef6"),(0,o.kt)("p",null,"\u5728 Taro \u7f16\u8bd1\u914d\u7f6e\u4e2d\u914d\u7f6e\u4f7f\u7528 ",(0,o.kt)("inlineCode",{parentName:"p"},"@tarojs/plugin-react-devtools"),"\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="config/dev.js"',title:'"config/dev.js"'},"config = {\n  plugins: [\n    '@tarojs/plugin-react-devtools'\n  ],\n  // ...\n}\n")),(0,o.kt)("h3",{id:"3-\u7f16\u8bd1\u9879\u76ee"},"3. \u7f16\u8bd1\u9879\u76ee"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"$ taro build --type weapp --watch\n")),(0,o.kt)("h2",{id:"\u63d2\u4ef6\u53c2\u6570"},"\u63d2\u4ef6\u53c2\u6570"),(0,o.kt)("p",null,"\u63d2\u4ef6 ",(0,o.kt)("inlineCode",{parentName:"p"},"@tarojs/plugin-react-devtools")," \u5177\u6709\u4ee5\u4e0b\u53c2\u6570\uff1a"),(0,o.kt)("h3",{id:"enabled"},"enabled"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"boolean")),(0,o.kt)("p",null,"\u9ed8\u8ba4\u503c\uff1a",(0,o.kt)("inlineCode",{parentName:"p"},"true")),(0,o.kt)("p",null,"\u63a7\u5236\u662f\u5426\u8fde\u63a5 ",(0,o.kt)("inlineCode",{parentName:"p"},"react-devtools"),"\uff0c\u5f00\u542f\u540e\u4f1a\u6ce8\u5165 backend \u7684\u4ee3\u7801\u5230\u5f00\u53d1\u8005\u7684\u5e94\u7528\u4e2d\u3002"),(0,o.kt)("h3",{id:"port"},"port"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"number")),(0,o.kt)("p",null,"\u9ed8\u8ba4\u503c\uff1a",(0,o.kt)("inlineCode",{parentName:"p"},"8097")),(0,o.kt)("p",null,"React DevTools \u4f7f\u7528\u7684 Websocket \u7aef\u53e3\u3002"),(0,o.kt)("h2",{id:"\u6ce8\u610f\u4e8b\u9879"},"\u6ce8\u610f\u4e8b\u9879"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"\u5f3a\u5236\u9501\u5b9a\u4e86 ",(0,o.kt)("inlineCode",{parentName:"li"},"react-devtools")," \u7684\u7248\u672c\uff0c\u66f4\u65b0\u7248\u672c\u9700\u8981\u4fee\u6539 ",(0,o.kt)("inlineCode",{parentName:"li"},"@tarojs/plugin-react-devtools")," \u63d2\u4ef6\u7684\u4ee3\u7801\u3002"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/facebook/react/blob/main/packages/react-devtools/OVERVIEW.md#inspecting-hooks"},"\u4e3a\u4e86\u8bc6\u522b custom hooks"),"\uff0cbackend \u4f1a\u5bf9\u90e8\u5206\u7b26\u5408\u6761\u4ef6\u7684\u51fd\u6570\u5f0f\u7ec4\u4ef6\u6267\u884c ",(0,o.kt)("inlineCode",{parentName:"li"},"shallow rendering"),"\uff0c\u5f00\u53d1\u8005\u9700\u8981\u6ce8\u610f\u4ee3\u7801\u662f\u5426\u5b58\u5728\u526f\u4f5c\u7528\u3002")),(0,o.kt)("p",null,"\u53e6\u5916\uff0c\u76ee\u524d\u5bf9 devtools \u529f\u80fd\u7684\u652f\u6301\u4e0d\u591f\u5168\u9762\uff0c\u6709\u4e9b\u529f\u80fd\u9700\u8981\u9488\u5bf9\u5c0f\u7a0b\u5e8f\u73af\u5883\u9b54\u6539 backend \u624d\u80fd\u5b9e\u73b0\uff0c\u6b22\u8fce\u5171\u5efa\uff5e"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"\u652f\u6301\u5143\u7d20\u9ad8\u4eae\u3002"),(0,o.kt)("li",{parentName:"ul"},"\u5728\u5c0f\u7a0b\u5e8f\u7684 ",(0,o.kt)("inlineCode",{parentName:"li"},"storage")," \u4e2d\u8bb0\u5f55 ",(0,o.kt)("inlineCode",{parentName:"li"},"filters")," \u53d8\u5316\u3002")),(0,o.kt)("h2",{id:"\u8be6\u7ec6\u8bbe\u8ba1"},"\u8be6\u7ec6\u8bbe\u8ba1"),(0,o.kt)("p",null,"\u8be6\u7ec6\u8bbe\u8ba1\u8bf7\u770b ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/NervJS/taro-rfcs/blob/master/rfcs/0005-react-devtools.md"},"RFC"),"\u3002"))}u.isMDXComponent=!0}}]);