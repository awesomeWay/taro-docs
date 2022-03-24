"use strict";(self.webpackChunktaro_docs=self.webpackChunktaro_docs||[]).push([[94949],{3905:function(e,t,r){r.d(t,{Zo:function(){return s},kt:function(){return d}});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=n.createContext({}),p=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},s=function(e){var t=p(e.components);return n.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),m=p(r),d=o,f=m["".concat(l,".").concat(d)]||m[d]||u[d]||a;return r?n.createElement(f,i(i({ref:t},s),{},{components:r})):n.createElement(f,i({ref:t},s))}));function d(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=m;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:o,i[1]=c;for(var p=2;p<a;p++)i[p]=r[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},43700:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return c},contentTitle:function(){return l},metadata:function(){return p},toc:function(){return s},default:function(){return m}});var n=r(83117),o=r(80102),a=(r(67294),r(3905)),i=["components"],c={title:"WeChat Mini Program Convert to Taro"},l=void 0,p={unversionedId:"taroize",id:"taroize",title:"WeChat Mini Program Convert to Taro",description:"Taro can convert native WeChat mini program applications into Taro projects, thus making the project a multi-terminated application.",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/taroize.md",sourceDirName:".",slug:"/taroize",permalink:"/taro/en/docs/next/taroize",editUrl:"https://github.com/nervjs/taro-docs/edit/docs/docs/taroize.md",tags:[],version:"current",frontMatter:{title:"WeChat Mini Program Convert to Taro"},sidebar:"docs",previous:{title:"Native Mini Program Project Using Taro",permalink:"/taro/en/docs/next/taro-in-miniapp"},next:{title:"Convert to React",permalink:"/taro/en/docs/next/convert-to-react"}},s=[{value:"Reverse conversion steps",id:"reverse-conversion-steps",children:[],level:3}],u={toc:s};function m(e){var t=e.components,r=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Taro can convert ",(0,a.kt)("strong",{parentName:"p"},"native WeChat mini program applications into Taro projects"),", thus making the project a multi-terminated application."),(0,a.kt)("p",null,"The converted code is highly readable and can continue to be used for secondary development using ",(0,a.kt)("strong",{parentName:"p"},"React")," (conversion to ",(0,a.kt)("strong",{parentName:"p"},"Vue")," is supported in the future)."),(0,a.kt)("h3",{id:"reverse-conversion-steps"},"Reverse conversion steps"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Install the Taro command line tool.")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"$ npm i -g @tarojs/cli\n")),(0,a.kt)("ol",{start:2},(0,a.kt)("li",{parentName:"ol"},"Run the ",(0,a.kt)("inlineCode",{parentName:"li"},"convert")," command in the root directory of the WeChat mini program project to convert.")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"# The converted code is stored in the `taroConvert` folder in the root directory\n$ taro convert\n")),(0,a.kt)("ol",{start:3},(0,a.kt)("li",{parentName:"ol"},"Go to the ",(0,a.kt)("inlineCode",{parentName:"li"},"taroConvert")," directory and install the dependencies on.")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"$ cd taroConvert\n$ npm install\n")),(0,a.kt)("ol",{start:4},(0,a.kt)("li",{parentName:"ol"},"Run the ",(0,a.kt)("inlineCode",{parentName:"li"},"build")," command to compile the project to any platform.")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"$ taro build --type [platform]\n")))}m.isMDXComponent=!0}}]);