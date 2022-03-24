"use strict";(self.webpackChunktaro_docs=self.webpackChunktaro_docs||[]).push([[16739],{3905:function(t,e,r){r.d(e,{Zo:function(){return p},kt:function(){return m}});var n=r(67294);function o(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function a(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function u(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?a(Object(r),!0).forEach((function(e){o(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function c(t,e){if(null==t)return{};var r,n,o=function(t,e){if(null==t)return{};var r,n,o={},a=Object.keys(t);for(n=0;n<a.length;n++)r=a[n],e.indexOf(r)>=0||(o[r]=t[r]);return o}(t,e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(n=0;n<a.length;n++)r=a[n],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(t,r)&&(o[r]=t[r])}return o}var i=n.createContext({}),l=function(t){var e=n.useContext(i),r=e;return t&&(r="function"==typeof t?t(e):u(u({},e),t)),r},p=function(t){var e=l(t.components);return n.createElement(i.Provider,{value:e},t.children)},f={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},s=n.forwardRef((function(t,e){var r=t.components,o=t.mdxType,a=t.originalType,i=t.parentName,p=c(t,["components","mdxType","originalType","parentName"]),s=l(r),m=o,b=s["".concat(i,".").concat(m)]||s[m]||f[m]||a;return r?n.createElement(b,u(u({ref:e},p),{},{components:r})):n.createElement(b,u({ref:e},p))}));function m(t,e){var r=arguments,o=e&&e.mdxType;if("string"==typeof t||o){var a=r.length,u=new Array(a);u[0]=s;var c={};for(var i in e)hasOwnProperty.call(e,i)&&(c[i]=e[i]);c.originalType=t,c.mdxType="string"==typeof t?t:o,u[1]=c;for(var l=2;l<a;l++)u[l]=r[l];return n.createElement.apply(null,u)}return n.createElement.apply(null,r)}s.displayName="MDXCreateElement"},33723:function(t,e,r){r.r(e),r.d(e,{frontMatter:function(){return c},contentTitle:function(){return i},metadata:function(){return l},assets:function(){return p},toc:function(){return f},default:function(){return m}});var n=r(83117),o=r(80102),a=(r(67294),r(3905)),u=["components"],c={slug:"2019-06-13-taro-1-3",title:"Taro 1.3 \u9707\u64bc\u5347\u7ea7\uff1a\u5168\u9762\u652f\u6301 JSX \u8bed\u6cd5\u548c HOOKS",author:"yuche",author_url:"https://github.com/yuche",author_image_url:"https://avatars1.githubusercontent.com/u/7202516?s=460&u=972eaf45558703424c613988fe3184f34b8f9c9d&v=4"},i=void 0,l={permalink:"/taro/en/blog/2019-06-13-taro-1-3",editUrl:"https://github.com/nervjs/taro-docs/edit/blog/blog/2019-06-13-taro-1-3.md",source:"@site/blog/2019-06-13-taro-1-3.md",title:"Taro 1.3 \u9707\u64bc\u5347\u7ea7\uff1a\u5168\u9762\u652f\u6301 JSX \u8bed\u6cd5\u548c HOOKS",description:"\u5728 Taro 1.2 \u53d1\u5e03\u4e4b\u540e\uff0cTaro \u5728\u4e1a\u754c\u6536\u83b7\u4e86\u5de8\u5927\u7684\u8d5e\u8a89\u548c\u5173\u6ce8\uff1aGitHub \u4e0a Star \u6570\u91cf\u8d85\u8fc7 19000 \u7c92\uff0cNPM \u4e0b\u8f7d\u91cf\u4e5f\u7a33\u5c45\u540c\u7c7b\u5f00\u53d1\u6846\u67b6\u4e4b\u9996\uff0c\u540c\u65f6 Taro \u56e2\u961f\u4e5f\u548c\u817e\u8baf\u3001\u767e\u5ea6\u3001\u534e\u4e3a\u7b49\u6570\u5341\u5bb6\u4e1a\u754c\u5de8\u5934\u7684\u7814\u53d1\u56e2\u961f\u5c55\u5f00\u4e86\u6df1\u5165\u548c\u6709\u6548\u7684\u5408\u4f5c\u3002",date:"2019-06-13T00:00:00.000Z",formattedDate:"June 13, 2019",tags:[],readingTime:13.51,truncated:!0,authors:[{name:"yuche",url:"https://github.com/yuche",imageURL:"https://avatars1.githubusercontent.com/u/7202516?s=460&u=972eaf45558703424c613988fe3184f34b8f9c9d&v=4"}],frontMatter:{slug:"2019-06-13-taro-1-3",title:"Taro 1.3 \u9707\u64bc\u5347\u7ea7\uff1a\u5168\u9762\u652f\u6301 JSX \u8bed\u6cd5\u548c HOOKS",author:"yuche",author_url:"https://github.com/yuche",author_image_url:"https://avatars1.githubusercontent.com/u/7202516?s=460&u=972eaf45558703424c613988fe3184f34b8f9c9d&v=4"},prevItem:{title:"Taro \u300c\u7269\u6599\u5e02\u573a\u300d\u53ca\u300c\u4ea4\u6d41\u793e\u533a\u300d \u60ca\u559c\u4e0a\u7ebf",permalink:"/taro/en/blog/2019-06-21-taro-ext-club"},nextItem:{title:"\u5c0f\u7a0b\u5e8f\u6846\u67b6\u5168\u9762\u6d4b\u8bc4",permalink:"/taro/en/blog/2019-03-12-mini-program-framework-full-review"}},p={authorsImageUrls:[void 0]},f=[],s={toc:f};function m(t){var e=t.components,r=(0,o.Z)(t,u);return(0,a.kt)("wrapper",(0,n.Z)({},s,r,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"\u5728 Taro 1.2 \u53d1\u5e03\u4e4b\u540e\uff0cTaro \u5728\u4e1a\u754c\u6536\u83b7\u4e86\u5de8\u5927\u7684\u8d5e\u8a89\u548c\u5173\u6ce8\uff1aGitHub \u4e0a Star \u6570\u91cf\u8d85\u8fc7 19000 \u7c92\uff0cNPM \u4e0b\u8f7d\u91cf\u4e5f\u7a33\u5c45\u540c\u7c7b\u5f00\u53d1\u6846\u67b6\u4e4b\u9996\uff0c\u540c\u65f6 Taro \u56e2\u961f\u4e5f\u548c\u817e\u8baf\u3001\u767e\u5ea6\u3001\u534e\u4e3a\u7b49\u6570\u5341\u5bb6\u4e1a\u754c\u5de8\u5934\u7684\u7814\u53d1\u56e2\u961f\u5c55\u5f00\u4e86\u6df1\u5165\u548c\u6709\u6548\u7684\u5408\u4f5c\u3002"),(0,a.kt)("p",null,"Taro 1.3 \u662f\u6211\u4eec\u915d\u917f\u6700\u4e45\u7684\u7248\u672c\uff1a\u7ecf\u5386\u4e86\u6a2a\u8de8 6 \u4e2a\u6708\u7684\u5f00\u53d1\u65f6\u95f4\uff0c\u8fd1 2000 \u6b21\u7684\u4ee3\u7801\u63d0\u4ea4\uff0c\u8fd1\u767e\u4f4d\u5f00\u53d1\u8005\u7684\u5171\u540c\u53c2\u4e0e\u3002\u6211\u4eec\u7ec8\u4e8e\u5728\u4eca\u5929\u9a84\u50b2\u5730\u53d1\u5e03\u4e86 Taro 1.3\u3002"),(0,a.kt)("p",null,"Taro 1.3 \u7684\u7279\u6027\u5305\u62ec\u4f46\u4e0d\u9650\u4e8e\uff1a"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u652f\u6301\u5feb\u5e94\u7528\u548c QQ \u5c0f\u7a0b\u5e8f\u7684\u5f00\u53d1"),(0,a.kt)("li",{parentName:"ul"},"\u5168\u9762\u652f\u6301 JSX \u8bed\u6cd5\u548c React Hooks"),(0,a.kt)("li",{parentName:"ul"},"\u5927\u5e45\u63d0\u9ad8 H5 \u6027\u80fd\u548c\u53ef\u7528\u6027"),(0,a.kt)("li",{parentName:"ul"},"Taro Doctor")))}m.isMDXComponent=!0}}]);