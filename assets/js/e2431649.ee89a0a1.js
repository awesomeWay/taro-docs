"use strict";(self.webpackChunktaro_docs=self.webpackChunktaro_docs||[]).push([[44975],{3905:function(t,e,n){n.d(e,{Zo:function(){return m},kt:function(){return k}});var a=n(67294);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function l(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function o(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?l(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function p(t,e){if(null==t)return{};var n,a,r=function(t,e){if(null==t)return{};var n,a,r={},l=Object.keys(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var i=a.createContext({}),u=function(t){var e=a.useContext(i),n=e;return t&&(n="function"==typeof t?t(e):o(o({},e),t)),n},m=function(t){var e=u(t.components);return a.createElement(i.Provider,{value:e},t.children)},d={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},c=a.forwardRef((function(t,e){var n=t.components,r=t.mdxType,l=t.originalType,i=t.parentName,m=p(t,["components","mdxType","originalType","parentName"]),c=u(n),k=r,s=c["".concat(i,".").concat(k)]||c[k]||d[k]||l;return n?a.createElement(s,o(o({ref:e},m),{},{components:n})):a.createElement(s,o({ref:e},m))}));function k(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=n.length,o=new Array(l);o[0]=c;var p={};for(var i in e)hasOwnProperty.call(e,i)&&(p[i]=e[i]);p.originalType=t,p.mdxType="string"==typeof t?t:r,o[1]=p;for(var u=2;u<l;u++)o[u]=n[u];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},79348:function(t,e,n){n.r(e),n.d(e,{frontMatter:function(){return p},contentTitle:function(){return i},metadata:function(){return u},toc:function(){return m},default:function(){return c}});var a=n(83117),r=n(80102),l=(n(67294),n(3905)),o=["components"],p={title:"\u6982\u8ff0"},i=void 0,u={unversionedId:"platform-plugin",id:"version-3.x/platform-plugin",title:"\u6982\u8ff0",description:"\u7aef\u5e73\u53f0\u63d2\u4ef6",source:"@site/versioned_docs/version-3.x/platform-plugin.md",sourceDirName:".",slug:"/platform-plugin",permalink:"/taro/docs/platform-plugin",editUrl:"https://github.com/nervjs/taro-docs/edit/docs/versioned_docs/version-3.x/platform-plugin.md",tags:[],version:"3.x",frontMatter:{title:"\u6982\u8ff0"},sidebar:"docs",previous:{title:"Troubleshooting",permalink:"/taro/docs/taroize-troubleshooting"},next:{title:"\u7f16\u5199\u7aef\u5e73\u53f0\u63d2\u4ef6",permalink:"/taro/docs/platform-plugin-how"}},m=[{value:"\u7aef\u5e73\u53f0\u63d2\u4ef6",id:"\u7aef\u5e73\u53f0\u63d2\u4ef6",children:[{value:"Taro \u5185\u7f6e\u7684\u7aef\u5e73\u53f0\u63d2\u4ef6\uff1a",id:"taro-\u5185\u7f6e\u7684\u7aef\u5e73\u53f0\u63d2\u4ef6",children:[],level:3},{value:"\u5176\u5b83\u7aef\u5e73\u53f0\u63d2\u4ef6\uff1a",id:"\u5176\u5b83\u7aef\u5e73\u53f0\u63d2\u4ef6",children:[],level:3},{value:"\u7aef\u5e73\u53f0\u63d2\u4ef6\u4f7f\u7528\u65b9\u6cd5\uff1a",id:"\u7aef\u5e73\u53f0\u63d2\u4ef6\u4f7f\u7528\u65b9\u6cd5",children:[],level:3}],level:2},{value:"\u80cc\u666f",id:"\u80cc\u666f",children:[{value:"\u5f00\u653e\u5f0f\u6846\u67b6",id:"\u5f00\u653e\u5f0f\u6846\u67b6",children:[{value:"\u5f00\u653e\u5f0f\u7f16\u8bd1\u5e73\u53f0\u67b6\u6784\u56fe",id:"\u5f00\u653e\u5f0f\u7f16\u8bd1\u5e73\u53f0\u67b6\u6784\u56fe",children:[],level:4}],level:3},{value:"\u8fd8\u53ef\u4ee5\u505a\u4ec0\u4e48\u6709\u610f\u601d\u7684\u4e8b",id:"\u8fd8\u53ef\u4ee5\u505a\u4ec0\u4e48\u6709\u610f\u601d\u7684\u4e8b",children:[{value:"\u5feb\u901f\u4fee\u590d\u95ee\u9898",id:"\u5feb\u901f\u4fee\u590d\u95ee\u9898",children:[],level:4},{value:"\u5c5e\u6027\u7cbe\u7b80",id:"\u5c5e\u6027\u7cbe\u7b80",children:[],level:4},{value:"\u6b22\u8fce\u5171\u5efa",id:"\u6b22\u8fce\u5171\u5efa",children:[],level:4}],level:3}],level:2}],d={toc:m};function c(t){var e=t.components,n=(0,r.Z)(t,o);return(0,l.kt)("wrapper",(0,a.Z)({},d,n,{components:e,mdxType:"MDXLayout"}),(0,l.kt)("h2",{id:"\u7aef\u5e73\u53f0\u63d2\u4ef6"},"\u7aef\u5e73\u53f0\u63d2\u4ef6"),(0,l.kt)("p",null,"\u81ea ",(0,l.kt)("inlineCode",{parentName:"p"},"v3.1.0")," \u8d77\uff0c\u6211\u4eec\u628a\u5bf9\u6bcf\u4e2a\u5c0f\u7a0b\u5e8f\u5e73\u53f0\u7684\u517c\u5bb9\u903b\u8f91\u62bd\u53d6\u4e86\u51fa\u6765\uff0c\u4ee5 ",(0,l.kt)("a",{parentName:"p",href:"./plugin"},"Taro \u63d2\u4ef6"),"\u7684\u5f62\u5f0f\u6ce8\u5165 Taro \u6846\u67b6\uff0c\u4ece\u800c\u652f\u6301\u5bf9\u5e94\u5e73\u53f0\u7684\u7f16\u8bd1\u3002"),(0,l.kt)("h3",{id:"taro-\u5185\u7f6e\u7684\u7aef\u5e73\u53f0\u63d2\u4ef6"},"Taro \u5185\u7f6e\u7684\u7aef\u5e73\u53f0\u63d2\u4ef6\uff1a"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"left"},"\u63d2\u4ef6"),(0,l.kt)("th",{parentName:"tr",align:"left"},"\u7f16\u8bd1\u5e73\u53f0"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"@tarojs/plugin-platform-weapp"),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u5fae\u4fe1\u5c0f\u7a0b\u5e8f")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"@tarojs/plugin-platform-alipay"),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u652f\u4ed8\u5b9d\u5c0f\u7a0b\u5e8f")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"@tarojs/plugin-platform-swan"),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u767e\u5ea6\u5c0f\u7a0b\u5e8f")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"@tarojs/plugin-platform-tt"),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u5934\u6761\u5c0f\u7a0b\u5e8f")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"@tarojs/plugin-platform-qq"),(0,l.kt)("td",{parentName:"tr",align:"left"},"QQ \u5c0f\u7a0b\u5e8f")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"@tarojs/plugin-platform-jd"),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u4eac\u4e1c\u5c0f\u7a0b\u5e8f")))),(0,l.kt)("h3",{id:"\u5176\u5b83\u7aef\u5e73\u53f0\u63d2\u4ef6"},"\u5176\u5b83\u7aef\u5e73\u53f0\u63d2\u4ef6\uff1a"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"left"},"\u63d2\u4ef6"),(0,l.kt)("th",{parentName:"tr",align:"left"},"\u7f16\u8bd1\u5e73\u53f0"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("a",{parentName:"td",href:"https://github.com/NervJS/taro-plugin-platform-weapp-qy"},"@tarojs/plugin-platform-weapp-qy")),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u4f01\u4e1a\u5fae\u4fe1\u5c0f\u7a0b\u5e8f")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("a",{parentName:"td",href:"https://github.com/NervJS/taro-plugin-platform-alipay-dd"},"@tarojs/plugin-platform-alipay-dd")),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u9489\u9489\u5c0f\u7a0b\u5e8f")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("a",{parentName:"td",href:"https://github.com/NervJS/taro-plugin-platform-alipay-iot"},"@tarojs/plugin-platform-alipay-iot")),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u652f\u4ed8\u5b9d IOT \u5c0f\u7a0b\u5e8f")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("a",{parentName:"td",href:"https://github.com/NervJS/taro-plugin-platform-lark"},"@tarojs/plugin-platform-lark")),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u98de\u4e66\u5c0f\u7a0b\u5e8f")))),(0,l.kt)("h3",{id:"\u7aef\u5e73\u53f0\u63d2\u4ef6\u4f7f\u7528\u65b9\u6cd5"},"\u7aef\u5e73\u53f0\u63d2\u4ef6\u4f7f\u7528\u65b9\u6cd5\uff1a"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"\u914d\u7f6e\u63d2\u4ef6")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"// Taro \u9879\u76ee\u914d\u7f6e\nmodule.exports = {\n  // ...\n  plugins: [\n    '@tarojs/plugin-platform-alipay-iot'\n  ]\n}\n")),(0,l.kt)("ol",{start:2},(0,l.kt)("li",{parentName:"ol"},"\u7f16\u8bd1\u4e3a\u652f\u4ed8\u5b9d IOT \u7aef\u5c0f\u7a0b\u5e8f")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"taro build --type iot\ntaro build --type iot --watch\n")),(0,l.kt)("h2",{id:"\u80cc\u666f"},"\u80cc\u666f"),(0,l.kt)("h3",{id:"\u5f00\u653e\u5f0f\u6846\u67b6"},"\u5f00\u653e\u5f0f\u6846\u67b6"),(0,l.kt)("p",null,"\u8fd1\u5e74\u6765\u4e1a\u754c\u63a8\u51fa\u7684\u5c0f\u7a0b\u5e8f\u5e73\u53f0\u8d8a\u6765\u8d8a\u591a\uff0c\u4f46 Taro \u6838\u5fc3\u7ef4\u62a4\u7684\u5e73\u53f0\u53ea\u6709 6 \u4e2a\uff08\u5fae\u4fe1\u3001\u652f\u4ed8\u5b9d\u3001\u767e\u5ea6\u3001\u5934\u6761\u3001QQ\u3001\u4eac\u4e1c\u5c0f\u7a0b\u5e8f\uff09\uff0c\u56e0\u6b64\u5e38\u5e38\u6709\u540c\u5b66\u63d0\u51fa\u80fd\u4e0d\u80fd\u652f\u6301\u67d0\u67d0\u5e73\u53f0\u7684 Feature Request\u3002"),(0,l.kt)("p",null,"\u57fa\u4e8e\u76ee\u524d\u7684\u67b6\u6784\uff0c\u5bf9\u4e8e\u5355\u4e00\u5e73\u53f0\u7684\u517c\u5bb9\u6027\u4ee3\u7801\u5206\u5e03\u4e8e Taro \u6838\u5fc3\u5e93\u7684\u5404\u4e2a\u89d2\u843d\uff0c\u6d89\u53ca\u7f16\u8bd1\u65f6\u4e0e\u8fd0\u884c\u65f6\u7b49\u90e8\u5206\u3002\u652f\u6301\u4e00\u4e2a\u65b0\u7684\u5e73\u53f0\u9700\u8981\u6539\u52a8\u6240\u6709\u7684\u8fd9\u4e9b\u5730\u65b9\uff0c\u5f00\u53d1\u590d\u6742\u5ea6\u9ad8\uff0c\u540c\u65f6\u793e\u533a\u4e5f\u96be\u4ee5\u53c2\u4e0e\u8d21\u732e\u3002"),(0,l.kt)("p",null,"\u4e3a\u6b64\u6211\u4eec\u840c\u751f\u4e86\u6253\u9020\u4e00\u4e2a",(0,l.kt)("strong",{parentName:"p"},"\u5f00\u653e\u5f0f\u6846\u67b6"),"\u7684\u60f3\u6cd5\u3002\u76ee\u6807\u662f\u53ef\u4ee5\u901a\u8fc7\u63d2\u4ef6\u7684\u5f62\u5f0f\u6269\u5c55 Taro \u7684\u7aef\u5e73\u53f0\u652f\u6301\u80fd\u529b\uff1a"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u63d2\u4ef6\u5f00\u53d1\u8005\u65e0\u9700\u4fee\u6539 Taro \u6838\u5fc3\u5e93\u4ee3\u7801\uff0c\u6309\u7167\u4e00\u5b9a\u7684\u89c4\u5219\u5373\u53ef\u7f16\u5199\u51fa\u4e00\u4e2a\u7aef\u5e73\u53f0\u63d2\u4ef6\u3002"),(0,l.kt)("li",{parentName:"ul"},"\u63d2\u4ef6\u4f7f\u7528\u8005\u53ea\u9700\u5b89\u88c5\u3001\u914d\u7f6e\u7aef\u5e73\u53f0\u63d2\u4ef6\uff0c\u5373\u53ef\u628a\u4ee3\u7801\u7f16\u8bd1\u5230\u6307\u5b9a\u5e73\u53f0\u3002")),(0,l.kt)("p",null,"\u7aef\u5e73\u53f0\u6269\u5c55\u53c8\u53ef\u4ee5\u5206\u4e3a\u6a2a\u5411\u6269\u5c55\u548c\u7eb5\u5411\u6269\u5c55\u4e24\u79cd\u65b9\u5f0f\uff1a"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"\u6a2a\u5411\u6269\u5c55"),(0,l.kt)("p",{parentName:"li"},"\u6269\u5c55\u4e00\u4e2a\u5168\u65b0\u7684\u7f16\u8bd1\u5e73\u53f0\uff0c\u5982\u7f8e\u56e2\u5c0f\u7a0b\u5e8f\u3002")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"\u7eb5\u5411\u6269\u5c55"),(0,l.kt)("p",{parentName:"li"},"\u7ee7\u627f\u73b0\u6709\u7684\u7aef\u5e73\u53f0\u63d2\u4ef6\uff0c\u6269\u5c55\u51fa\u65b0\u7684\u7f16\u8bd1\u5e73\u53f0\uff0c\u5982 QQ \u5c0f\u7a0b\u5e8f\u63d2\u4ef6\u7ee7\u627f\u4e8e\u5fae\u4fe1\u5c0f\u7a0b\u5e8f\u63d2\u4ef6\u3002"))),(0,l.kt)("h4",{id:"\u5f00\u653e\u5f0f\u7f16\u8bd1\u5e73\u53f0\u67b6\u6784\u56fe"},"\u5f00\u653e\u5f0f\u7f16\u8bd1\u5e73\u53f0\u67b6\u6784\u56fe"),(0,l.kt)("p",null,(0,l.kt)("img",{parentName:"p",src:"https://storage.jd.com/cjj-pub-images/platform-plugin-all.png",alt:null})),(0,l.kt)("h3",{id:"\u8fd8\u53ef\u4ee5\u505a\u4ec0\u4e48\u6709\u610f\u601d\u7684\u4e8b"},"\u8fd8\u53ef\u4ee5\u505a\u4ec0\u4e48\u6709\u610f\u601d\u7684\u4e8b"),(0,l.kt)("p",null,"\u9664\u4e86\u6269\u5c55\u65b0\u7684\u7f16\u8bd1\u5e73\u53f0\uff0c\u6211\u4eec\u8fd8\u53ef\u4ee5\u901a\u8fc7\u7ee7\u627f\u4e8e\u73b0\u6709\u7684\u7aef\u5e73\u53f0\u63d2\u4ef6\uff0c\u6765\u7f16\u5199\u81ea\u5b9a\u4e49\u7684\u7aef\u5e73\u53f0\u63d2\u4ef6\uff0c\u4e3a\u5e73\u53f0\u7684\u7f16\u8bd1\u8fc7\u7a0b\u6ce8\u5165\u81ea\u5b9a\u4e49\u903b\u8f91\uff1a"),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"\u4f7f\u7528\u63d2\u4ef6 ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/NervJS/taro-plugin-inject"},"@tarojs/plugin-inject")," \u80fd\u4e3a\u6240\u6709\u5c0f\u7a0b\u5e8f\u5e73\u53f0\u5feb\u901f\u65b0\u589e API\u3001\u7ec4\u4ef6\uff0c\u8c03\u6574\u7ec4\u4ef6\u5c5e\u6027\u7b49")),(0,l.kt)("h4",{id:"\u5feb\u901f\u4fee\u590d\u95ee\u9898"},"\u5feb\u901f\u4fee\u590d\u95ee\u9898"),(0,l.kt)("p",null,"\u7531\u4e8e\u5c0f\u7a0b\u5e8f\u5e73\u53f0\u4f17\u591a\uff0c\u800c\u4e14\u5b83\u4eec\u4e5f\u5728\u4e0d\u65ad\u5730\u8fed\u4ee3\uff0c\u5f80\u5f80\u4f1a\u51fa\u73b0 Taro \u5bf9\u67d0\u4e2a\u5c0f\u7a0b\u5e8f\u65b0\u63a8\u51fa\u7684\u7ec4\u4ef6\u6216 API \u652f\u6301\u4e0d\u53ca\u65f6\u7684\u95ee\u9898\u3002\u8fd9\u65f6\u5f00\u53d1\u8005\u9996\u5148\u9700\u8981\u8054\u7cfb Taro \u56e2\u961f\uff0c\u518d\u7b49\u5f85\u6211\u4eec\u8ddf\u8fdb\u4fee\u590d\u3001\u53d1\u5e03\u65b0\u7248\u672c\u540e\u624d\u80fd\u6b63\u5e38\u4f7f\u7528\uff0c\u5e73\u5747\u9700\u8981\u7b49\u5f85\u4e00\u5468\u6216\u4e24\u5468\u7684\u65f6\u95f4\u624d\u80fd\u5f97\u5230\u89e3\u51b3\u3002"),(0,l.kt)("p",null,"\u800c\u57fa\u4e8e\u5f00\u653e\u5f0f\u7684\u7f16\u8bd1\u5e73\u53f0\u67b6\u6784\uff0c\u5f00\u53d1\u8005\u80fd\u591f\u901a\u8fc7\u7ee7\u627f\u76ee\u6807\u7684\u7aef\u5e73\u53f0\u63d2\u4ef6\uff0c\u8fc5\u901f\u5f00\u53d1\u51fa\u81ea\u5b9a\u4e49\u7aef\u5e73\u53f0\u63d2\u4ef6\uff0c\u5b8c\u6210\u5bf9\u8fd9\u4e9b\u65b0\u7ec4\u4ef6\u6216 API \u7684\u652f\u6301\uff0c\u65e0\u9700\u7b49\u5f85 Taro \u53d1\u5e03\u7248\u672c\u3002"),(0,l.kt)("h4",{id:"\u5c5e\u6027\u7cbe\u7b80"},"\u5c5e\u6027\u7cbe\u7b80"),(0,l.kt)("p",null,"\u56e0\u4e3a\u5c0f\u7a0b\u5e8f\u7ec4\u4ef6\u7684\u5c5e\u6027\u548c\u4e8b\u4ef6\u90fd\u5fc5\u987b\u9759\u6001\u5199\u6b7b\uff0c\u4e0d\u53ef\u4ee5\u52a8\u6001\u6dfb\u52a0\uff0c\u6240\u4ee5 Taro \u4f1a\u628a\u7ec4\u4ef6\u7684\u6240\u6709\u5c5e\u6027\u548c\u4e8b\u4ef6\u5168\u90e8\u5728\u6a21\u677f\u91cc\u63d0\u524d\u8fdb\u884c\u7ed1\u5b9a\u3002"),(0,l.kt)("p",null,"\u4f46\u5b9e\u9645\u9879\u76ee\u4e2d\u5f88\u591a\u60c5\u51b5\u4e0b\u5e76\u4e0d\u4f1a\u4f7f\u7528\u5230\u7ec4\u4ef6\u7684\u6240\u6709\u5c5e\u6027\u548c\u4e8b\u4ef6\uff0c\u5faa\u73af\u8fd9\u4e9b\u5197\u4f59\u7684\u5c5e\u6027\u548c\u4e8b\u4ef6\u7ed1\u5b9a\u4e5f\u4f1a\u5360\u636e\u5f88\u5927\u4e00\u90e8\u5206\u7684\u4f53\u79ef\uff0c\u53e6\u5916\u592a\u591a\u7684\u4e8b\u4ef6\u7ed1\u5b9a\u4e5f\u4f1a\u5728\u4e00\u5b9a\u7a0b\u5ea6\u4e0a\u964d\u4f4e\u5c0f\u7a0b\u5e8f\u7684\u6027\u80fd\u3002"),(0,l.kt)("p",null,"\u4ee5\u4e0b\u662f ",(0,l.kt)("inlineCode",{parentName:"p"},"View")," \u7ec4\u4ef6\u6a21\u677f\u7684\u4f2a\u4ee3\u7801\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-html"},'<template name="tmpl_0_view">\n  <view\n    hover-class="..."\n    hover-stop-propagation="..."\n    hover-start-time="..."\n    hover-stay-time="..."\n    animation="..."\n    onTouchStart="..."\n    onTouchMove="..."\n    onTouchEnd="..."\n    onTouchCancel="..."\n    onLongTap="..."\n    onAnimationStart="..."\n    onAnimationIteration="..."\n    onAnimationEnd="..."\n    onTransitionEnd="..."\n    disable-scroll="..."\n    hidden="..."\n    onAppear="..."\n    onDisappear="..."\n    onFirstAppear="..."\n    style="..."\n    class="..."\n    onTap="..."\n    id="..."\n  >\n    ...\n  </view>\n</template>\n')),(0,l.kt)("p",null,"Taro \u9700\u8981\u628a ",(0,l.kt)("inlineCode",{parentName:"p"},"View")," \u7ec4\u4ef6\u7684\u6240\u6709\u5c5e\u6027\u548c\u4e8b\u4ef6\u63d0\u524d\u8fdb\u884c\u7ed1\u5b9a\uff0c\u624d\u80fd\u6ee1\u8db3\u4e0d\u540c\u5f00\u53d1\u8005\u7684\u4f7f\u7528\u9700\u6c42\u3002\u4f46\u53ef\u80fd\u5bf9\u4e8e\u67d0\u4f4d\u5f00\u53d1\u8005\u6765\u8bf4\uff0c\u6574\u4e2a\u9879\u76ee\u7684 ",(0,l.kt)("inlineCode",{parentName:"p"},"View")," \u7ec4\u4ef6\u90fd\u6ca1\u6709\u4f7f\u7528\u5230 ",(0,l.kt)("inlineCode",{parentName:"p"},"hover-stop-propagation")," \u8fd9\u4e2a\u5c5e\u6027\uff0c\u90a3\u4e48\u5219\u53ef\u4ee5\u8003\u8651\u628a\u5b83\u7cbe\u7b80\u6389\uff0c\u4e0d\u7f16\u8bd1\u5230 ",(0,l.kt)("inlineCode",{parentName:"p"},"View")," \u6a21\u677f\u5f53\u4e2d\u3002"),(0,l.kt)("p",null,"\u5c5e\u6027\u7cbe\u7b80\u7684\u529f\u80fd\u540c\u6837\u53ef\u4ee5\u901a\u8fc7\u5b9e\u73b0\u4e00\u4e2a\u81ea\u5b9a\u4e49\u7aef\u5e73\u53f0\u63d2\u4ef6\u6765\u5b9e\u73b0\u3002\u4f46\u662f\u9700\u8981\u63d0\u9192\u7684\u662f\uff0c\u5bf9\u5c5e\u6027\u7684\u7cbe\u7b80\u53ef\u80fd\u4f1a\u5f15\u8d77\u4e0d\u5fc5\u8981\u7684\u95ee\u9898\u3001\u4f7f\u9879\u76ee\u7684\u7ef4\u62a4\u53d8\u5f97\u56f0\u96be\uff0c\u7279\u522b\u5f53\u9879\u76ee\u53d8\u5927\uff0c\u5f00\u53d1\u8005\u4f17\u591a\u65f6\uff0c\u9700\u8981\u8c28\u614e\u8bbe\u8ba1\u548c\u4f7f\u7528\u3002"),(0,l.kt)("h4",{id:"\u6b22\u8fce\u5171\u5efa"},"\u6b22\u8fce\u5171\u5efa"),(0,l.kt)("p",null,"\u6211\u4eec\u5e0c\u671b\u5728\u5f00\u653e\u5f0f\u67b6\u6784\u63a8\u51fa\u540e\uff0c\u80fd\u6fc0\u8d77\u793e\u533a\u5404\u4f4d\u5f00\u53d1\u8005\u7684\u521b\u9020\u529b\uff0c\u4e00\u8d77\u4e3a Taro \u751f\u6001\u521b\u9020\u65b0\u7684\u7aef\u5e73\u53f0\u652f\u6301\u63d2\u4ef6\uff0c\u6216\u5404\u79cd\u4f18\u79c0\u7684\u81ea\u5b9a\u4e49\u7aef\u5e73\u53f0\u7ec4\u4ef6\uff0c\u671f\u5f85\u60a8\u7684\u53c2\u4e0e\u548c\u8d21\u732e\uff01"))}c.isMDXComponent=!0}}]);