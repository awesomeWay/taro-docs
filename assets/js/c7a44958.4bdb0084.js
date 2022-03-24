"use strict";(self.webpackChunktaro_docs=self.webpackChunktaro_docs||[]).push([[88489],{3905:function(e,n,t){t.d(n,{Zo:function(){return c},kt:function(){return d}});var r=t(67294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function p(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var o=r.createContext({}),s=function(e){var n=r.useContext(o),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},c=function(e){var n=s(e.components);return r.createElement(o.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},m=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,i=e.originalType,o=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),m=s(t),d=a,g=m["".concat(o,".").concat(d)]||m[d]||u[d]||i;return t?r.createElement(g,l(l({ref:n},c),{},{components:t})):r.createElement(g,l({ref:n},c))}));function d(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var i=t.length,l=new Array(i);l[0]=m;var p={};for(var o in n)hasOwnProperty.call(n,o)&&(p[o]=n[o]);p.originalType=e,p.mdxType="string"==typeof e?e:a,l[1]=p;for(var s=2;s<i;s++)l[s]=t[s];return r.createElement.apply(null,l)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},89058:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return p},contentTitle:function(){return o},metadata:function(){return s},toc:function(){return c},default:function(){return m}});var r=t(83117),a=t(80102),i=(t(67294),t(3905)),l=["components"],p={title:"\u5fae\u4fe1\u5c0f\u7a0b\u5e8f\u63d2\u4ef6\u5f00\u53d1"},o=void 0,s={unversionedId:"miniprogram-plugin",id:"version-3.x/miniprogram-plugin",title:"\u5fae\u4fe1\u5c0f\u7a0b\u5e8f\u63d2\u4ef6\u5f00\u53d1",description:"Taro \u652f\u6301\u5f00\u53d1\u5fae\u4fe1\u5c0f\u7a0b\u5e8f\u63d2\u4ef6\uff0c\u672c\u6587\u5c06\u4ecb\u7ecd\u4e3b\u8981\u7528\u6cd5\u3002",source:"@site/versioned_docs/version-3.x/miniprogram-plugin.md",sourceDirName:".",slug:"/miniprogram-plugin",permalink:"/taro/docs/miniprogram-plugin",editUrl:"https://github.com/nervjs/taro-docs/edit/docs/versioned_docs/version-3.x/miniprogram-plugin.md",tags:[],version:"3.x",frontMatter:{title:"\u5fae\u4fe1\u5c0f\u7a0b\u5e8f\u63d2\u4ef6\u5f00\u53d1"},sidebar:"docs",previous:{title:"\u5c0f\u7a0b\u5e8f\u4e91\u5f00\u53d1\u6a21\u677f",permalink:"/taro/docs/wxcloudbase"},next:{title:"\u5fae\u4fe1\u5c0f\u7a0b\u5e8f\u72ec\u7acb\u5206\u5305",permalink:"/taro/docs/independent-subpackage"}},c=[{value:"\u53c2\u8003",id:"\u53c2\u8003",children:[],level:2},{value:"\u5f00\u53d1\u6b65\u9aa4",id:"\u5f00\u53d1\u6b65\u9aa4",children:[{value:"1. \u521b\u5efa\u63d2\u4ef6\u5f00\u53d1\u6a21\u7248",id:"1-\u521b\u5efa\u63d2\u4ef6\u5f00\u53d1\u6a21\u7248",children:[{value:"\u9879\u76ee\u7ed3\u6784",id:"\u9879\u76ee\u7ed3\u6784",children:[],level:4}],level:3},{value:"\u914d\u7f6e appid",id:"\u914d\u7f6e-appid",children:[],level:3},{value:"\u7f16\u8bd1\u9879\u76ee",id:"\u7f16\u8bd1\u9879\u76ee",children:[],level:3},{value:"\u6dfb\u52a0\u5c0f\u7a0b\u5e8f\u9879\u76ee",id:"\u6dfb\u52a0\u5c0f\u7a0b\u5e8f\u9879\u76ee",children:[],level:3}],level:2},{value:"\u4f7f\u7528\u63d2\u4ef6\u9875\u9762",id:"\u4f7f\u7528\u63d2\u4ef6\u9875\u9762",children:[{value:"\u63d2\u4ef6\u9875\u9762\u83b7\u53d6\u5c0f\u7a0b\u5e8f\u6e32\u67d3\u5c42\u5143\u7d20",id:"\u63d2\u4ef6\u9875\u9762\u83b7\u53d6\u5c0f\u7a0b\u5e8f\u6e32\u67d3\u5c42\u5143\u7d20",children:[],level:3},{value:"genericsImplementation",id:"genericsimplementation",children:[],level:3}],level:2},{value:"\u4f7f\u7528\u63d2\u4ef6\u7ec4\u4ef6",id:"\u4f7f\u7528\u63d2\u4ef6\u7ec4\u4ef6",children:[{value:"\u63d2\u4ef6\u7ec4\u4ef6\u63a5\u53d7\u5916\u90e8 props",id:"\u63d2\u4ef6\u7ec4\u4ef6\u63a5\u53d7\u5916\u90e8-props",children:[],level:3},{value:"\u63d2\u4ef6\u7ec4\u4ef6\u4e8b\u4ef6\u4f20\u9012",id:"\u63d2\u4ef6\u7ec4\u4ef6\u4e8b\u4ef6\u4f20\u9012",children:[],level:3},{value:"\u63d2\u4ef6\u7ec4\u4ef6\u83b7\u53d6\u5c0f\u7a0b\u5e8f\u6e32\u67d3\u5c42\u5143\u7d20",id:"\u63d2\u4ef6\u7ec4\u4ef6\u83b7\u53d6\u5c0f\u7a0b\u5e8f\u6e32\u67d3\u5c42\u5143\u7d20",children:[],level:3},{value:"componentGenerics",id:"componentgenerics",children:[],level:3}],level:2},{value:"\u4f7f\u7528\u63d2\u4ef6\u63a5\u53e3",id:"\u4f7f\u7528\u63d2\u4ef6\u63a5\u53e3",children:[],level:2}],u={toc:c};function m(e){var n=e.components,t=(0,a.Z)(e,l);return(0,i.kt)("wrapper",(0,r.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Taro \u652f\u6301\u5f00\u53d1\u5fae\u4fe1\u5c0f\u7a0b\u5e8f\u63d2\u4ef6\uff0c\u672c\u6587\u5c06\u4ecb\u7ecd\u4e3b\u8981\u7528\u6cd5\u3002"),(0,i.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"\u76ee\u524d\u5fae\u4fe1\u5c0f\u7a0b\u5e8f\u4ec5\u652f\u6301\u4f7f\u7528 ",(0,i.kt)("inlineCode",{parentName:"p"},"React")," \u6765\u8fdb\u884c\u5f00\u53d1"))),(0,i.kt)("h2",{id:"\u53c2\u8003"},"\u53c2\u8003"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://developers.weixin.qq.com/miniprogram/dev/framework/plugin/"},"\u5fae\u4fe1\u5c0f\u7a0b\u5e8f\u63d2\u4ef6\u5f00\u53d1\u6982\u8ff0")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/NervJS/taro/tree/next/examples/build-weapp-plugin"},"\u5b8c\u6574\u793a\u4f8b"))),(0,i.kt)("h2",{id:"\u5f00\u53d1\u6b65\u9aa4"},"\u5f00\u53d1\u6b65\u9aa4"),(0,i.kt)("h3",{id:"1-\u521b\u5efa\u63d2\u4ef6\u5f00\u53d1\u6a21\u7248"},"1. \u521b\u5efa\u63d2\u4ef6\u5f00\u53d1\u6a21\u7248"),(0,i.kt)("p",null,"\u5fae\u4fe1\u5c0f\u7a0b\u5e8f\u63d2\u4ef6\u5206\u4e3a",(0,i.kt)("strong",{parentName:"p"},"\u9875\u9762"),"\u3001",(0,i.kt)("strong",{parentName:"p"},"\u7ec4\u4ef6"),"\u3001",(0,i.kt)("strong",{parentName:"p"},"\u63a5\u53e3"),"\u4e09\u79cd\u3002\u5f00\u53d1\u8005\u53ef\u4ee5\u4f7f\u7528 ",(0,i.kt)("inlineCode",{parentName:"p"},"taro init")," \u547d\u4ee4\uff0c\u7136\u540e\u9009\u62e9\u751f\u6210",(0,i.kt)("strong",{parentName:"p"},"\u5fae\u4fe1\u5c0f\u7a0b\u5e8f\u63d2\u4ef6\u6a21\u7248"),"\uff0c\u5373\u53ef\u5728\u5f53\u524d\u76ee\u5f55\u751f\u6210\u5305\u542b\u4e0a\u8ff0\u4e09\u79cd\u63d2\u4ef6\u7c7b\u578b\u7684 Taro \u5fae\u4fe1\u5c0f\u7a0b\u5e8f\u63d2\u4ef6\u9879\u76ee\u3002"),(0,i.kt)("h4",{id:"\u9879\u76ee\u7ed3\u6784"},"\u9879\u76ee\u7ed3\u6784"),(0,i.kt)("p",null,"\u63a8\u8350\u7684\u63d2\u4ef6\u9879\u76ee\u7ed3\u6784\u5982\u4e0b\uff1a"),(0,i.kt)("p",null,"\u6ce8\u610f\uff0c\u6700\u540e\u53d1\u5e03\u7684\u662f plugin \u6587\u4ef6\u5939\u5185\u7684\u5185\u5bb9\uff0c\u63d2\u4ef6\u7684\u6240\u6709\u5185\u5bb9\u53ca\u9664\u4e86 npm \u5305\u4ee5\u5916\u7684\u4f9d\u8d56\u90fd\u5e94\u5199\u5728 plugin \u6587\u4ef6\u5939\u5185\u3002",(0,i.kt)("inlineCode",{parentName:"p"},"src/pages")," \u5185\u7684\u9875\u9762\u53ea\u662f\u7528\u4e8e\u8c03\u8bd5\u63d2\u4ef6\u3002"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"\u251c\u2500\u2500 config                 \u914d\u7f6e\u76ee\u5f55\n\u251c\u2500\u2500 src                    \u6e90\u7801\u76ee\u5f55\n|   \u251c\u2500\u2500 pages              \u8c03\u8bd5\u9875\u9762\u76ee\u5f55\uff0c\u7528\u4e8e\u8c03\u8bd5\u63d2\u4ef6\n|   |   \u2514\u2500\u2500 index          \n|   \u251c\u2500\u2500 plugin             \u63d2\u4ef6\u76ee\u5f55\n|   |   \u251c\u2500\u2500 doc            \u63d2\u4ef6\u6587\u6863\u76ee\u5f55\n|   |   \u251c\u2500\u2500 components     \u7ec4\u4ef6\u63d2\u4ef6\u76ee\u5f55\n|   |   \u251c\u2500\u2500 pages          \u9875\u9762\u63d2\u4ef6\u76ee\u5f55\n|   |   \u251c\u2500\u2500 index.js       \u63a5\u53e3\u63d2\u4ef6\u6587\u4ef6\n|   |   \u2514\u2500\u2500 plugin.json    \u63d2\u4ef6\u914d\u7f6e\u6587\u4ef6\n|   \u251c\u2500\u2500 app.css            \u9879\u76ee\u603b\u901a\u7528\u6837\u5f0f\n|   \u2514\u2500\u2500 app.js             \u9879\u76ee\u5165\u53e3\u6587\u4ef6\n\u2514\u2500\u2500 package.json\n\u2514\u2500\u2500 package.config.json\n")),(0,i.kt)("h3",{id:"\u914d\u7f6e-appid"},"\u914d\u7f6e appid"),(0,i.kt)("p",null,"\u521b\u5efa\u5b8c\u6a21\u7248\u540e\uff0c\u9996\u5148\u9700\u8981\u4fee\u6539 ",(0,i.kt)("inlineCode",{parentName:"p"},"project.config.json")," \u7684 ",(0,i.kt)("strong",{parentName:"p"},"appid")," \u5b57\u6bb5\u548c ",(0,i.kt)("inlineCode",{parentName:"p"},"src/app.config.ts")," \u7684 ",(0,i.kt)("strong",{parentName:"p"},"prodiver")," \u5b57\u6bb5\u4e3a\u540c\u4e00 appid\u3002"),(0,i.kt)("h3",{id:"\u7f16\u8bd1\u9879\u76ee"},"\u7f16\u8bd1\u9879\u76ee"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bin"},"taro build --plugin weapp\ntaro build --plugin weapp --watch\n")),(0,i.kt)("h3",{id:"\u6dfb\u52a0\u5c0f\u7a0b\u5e8f\u9879\u76ee"},"\u6dfb\u52a0\u5c0f\u7a0b\u5e8f\u9879\u76ee"),(0,i.kt)("p",null,"\u5728\u5fae\u4fe1\u5f00\u53d1\u8005\u5de5\u5177\u4e2d\u6dfb\u52a0 Taro \u63d2\u4ef6\u9879\u76ee\u6839\u76ee\u5f55\u3002"),(0,i.kt)("h2",{id:"\u4f7f\u7528\u63d2\u4ef6\u9875\u9762"},"\u4f7f\u7528\u63d2\u4ef6\u9875\u9762"),(0,i.kt)("p",null,"plugin.json \u7684 ",(0,i.kt)("strong",{parentName:"p"},"pages")," \u5b57\u6bb5\u52a0\u5165\u9875\u9762\u63d2\u4ef6\u8def\u5f84\uff1a"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json",metastring:'title="plugin.json"',title:'"plugin.json"'},'{\n  "pages": {\n    "list": "pages/list/list"\n  }\n}\n')),(0,i.kt)("p",null,"\u9875\u9762\u4f7f\u7528\u8def\u5f84\uff1a ",(0,i.kt)("strong",{parentName:"p"},"plugin://","[app.js \u4e2d\u6ce8\u518c\u7684\u63d2\u4ef6\u540d]","/","[plugin.json \u4e2d\u6ce8\u518c\u7684\u9875\u9762\u540d]")," \u8fdb\u884c\u8df3\u8f6c\u3002"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"{1}","{1}":!0},"<Navigator url='plugin://myPlugin/list'>\n  Go to pages/list!\n</Navigator>\n")),(0,i.kt)("h3",{id:"\u63d2\u4ef6\u9875\u9762\u83b7\u53d6\u5c0f\u7a0b\u5e8f\u6e32\u67d3\u5c42\u5143\u7d20"},"\u63d2\u4ef6\u9875\u9762\u83b7\u53d6\u5c0f\u7a0b\u5e8f\u6e32\u67d3\u5c42\u5143\u7d20"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"// \u901a\u8fc7 this.props.$scope \u83b7\u53d6\u5230\u5c0f\u7a0b\u5e8f\u539f\u751f\u914d\u7f6e\u5bf9\u8c61\nconst query = Taro.createSelectorQuery().in(this.props.$scope)\nquery.select('#id').boundingClientRect().exec(res => {\n  console.log(res)\n})\n")),(0,i.kt)("h3",{id:"genericsimplementation"},"genericsImplementation"),(0,i.kt)("p",null,"\u652f\u6301\u4f7f\u7528 ",(0,i.kt)("inlineCode",{parentName:"p"},"genericsImplementation")," \u4f20\u5165\u7ec4\u4ef6\u5230\u63d2\u4ef6\u9875\u9762\uff0c\u8be6\u7ec6\u7528\u6cd5\u8bf7\u770b Demo\u3002"),(0,i.kt)("h2",{id:"\u4f7f\u7528\u63d2\u4ef6\u7ec4\u4ef6"},"\u4f7f\u7528\u63d2\u4ef6\u7ec4\u4ef6"),(0,i.kt)("p",null,"plugin.json \u7684 ",(0,i.kt)("strong",{parentName:"p"},"publicComponents")," \u5b57\u6bb5\u52a0\u5165\u7ec4\u4ef6\u63d2\u4ef6\u8def\u5f84\uff1a"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json",metastring:'title="plugin.json"',title:'"plugin.json"'},'{\n  "publicComponents": {\n    "avatar": "components/avatar/avatar"\n  }\n}\n')),(0,i.kt)("p",null,"\u5728\u9875\u9762\u914d\u7f6e config.usingComponents \u4e2d\u914d\u7f6e\u597d\u63d2\u4ef6\u540d\u548c\u63d2\u4ef6\u8def\u5f84\uff08",(0,i.kt)("strong",{parentName:"p"},"plugin://","[app.js \u4e2d\u6ce8\u518c\u7684\u63d2\u4ef6\u540d]","/","[plugin.json \u4e2d\u6ce8\u518c\u7684\u7ec4\u4ef6\u540d]"),"\uff09\uff1a"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"{4}","{4}":!0},"export default class Index extends Component {\n  config = {\n    usingComponents: {\n      'avatar': 'plugin://myPlugin/avatar'\n    }\n  }\n}\n")),(0,i.kt)("h3",{id:"\u63d2\u4ef6\u7ec4\u4ef6\u63a5\u53d7\u5916\u90e8-props"},"\u63d2\u4ef6\u7ec4\u4ef6\u63a5\u53d7\u5916\u90e8 props"),(0,i.kt)("p",null,"\u5982\u679c\u9700\u8981\u7ed9\u63d2\u4ef6\u4f20\u5165\u53c2\u6570\uff0c\u9700\u8981\u5c06\u53c2\u6570\u7edf\u4e00\u653e\u5728\u7ec4\u4ef6\u7684 ",(0,i.kt)("inlineCode",{parentName:"p"},"props")," \u4e2d\u8fdb\u884c\u4f20\u5165\u3002"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"// \u5e38\u89c4 props \u4f20\u9012\n<Plugin title={this.state.name} desc={this.state.desc} />\n\n// \u5728\u4f7f\u7528\u63d2\u4ef6\u7ec4\u4ef6\u65f6\u9700\u8981\u6539\u9020\u6210\u4ee5\u4e0b\u5f62\u5f0f\uff1a\nconst extraProps = {\n  name: this.state.name,\n  desc: this.state.desc\n}\n<Plugin props={extraProps} />\n")),(0,i.kt)("h3",{id:"\u63d2\u4ef6\u7ec4\u4ef6\u4e8b\u4ef6\u4f20\u9012"},"\u63d2\u4ef6\u7ec4\u4ef6\u4e8b\u4ef6\u4f20\u9012"),(0,i.kt)("p",null,"\u5fae\u4fe1\u5c0f\u7a0b\u5e8f\u7684 props \u652f\u6301\u4f20\u9012\u51fd\u6570\uff0c\u56e0\u6b64\u6211\u4eec\u4e5f\u53ef\u4ee5\u901a\u8fc7\u7ed9\u63d2\u4ef6\u7ec4\u4ef6\u4f20\u5165\u51fd\u6570 props \u8fbe\u5230\u4e8b\u4ef6\u4f20\u9012\u7684\u76ee\u7684\u3002"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"// \u8c03\u7528\u65b9\u4f20\u5165\u4e8b\u4ef6\u56de\u8c03\u51fd\u6570\n<Plugin props={{ onSomeEvent () {} }} />\n\n// \u63d2\u4ef6\u8c03\u7528\u4e8b\u4ef6\u51fd\u6570\nthis.props.onSomeEvent()\n")),(0,i.kt)("h3",{id:"\u63d2\u4ef6\u7ec4\u4ef6\u83b7\u53d6\u5c0f\u7a0b\u5e8f\u6e32\u67d3\u5c42\u5143\u7d20"},"\u63d2\u4ef6\u7ec4\u4ef6\u83b7\u53d6\u5c0f\u7a0b\u5e8f\u6e32\u67d3\u5c42\u5143\u7d20"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"// \u901a\u8fc7 this.props.$scope \u83b7\u53d6\u5230\u5c0f\u7a0b\u5e8f\u539f\u751f\u914d\u7f6e\u5bf9\u8c61\nconst query = Taro.createSelectorQuery().in(this.props.$scope)\nquery.select('#id').boundingClientRect().exec(res => {\n  console.log(res)\n})\n")),(0,i.kt)("h3",{id:"componentgenerics"},"componentGenerics"),(0,i.kt)("p",null,"\u6682\u4e0d\u652f\u6301 ",(0,i.kt)("inlineCode",{parentName:"p"},"componentGenerics"),"\u3002"),(0,i.kt)("h2",{id:"\u4f7f\u7528\u63d2\u4ef6\u63a5\u53e3"},"\u4f7f\u7528\u63d2\u4ef6\u63a5\u53e3"),(0,i.kt)("p",null,"plugin.json \u7684 ",(0,i.kt)("strong",{parentName:"p"},"main")," \u5b57\u6bb5\u52a0\u5165\u63a5\u53e3\u63d2\u4ef6\u8def\u5f84\uff1a"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json",metastring:'title="plugin.json"',title:'"plugin.json"'},'{\n  "main": "index.js"\n}\n')),(0,i.kt)("p",null,"\u9875\u9762\u4e2d\u4f7f\u7528\uff1a"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-jsx"},"const myPluginInterface = Taro.requirePlugin('myPlugin')\n\nexport default class Index extends Component {\n  componentWillMount () {\n    myPluginInterface.sayHello()\n    const answer = myPluginInterface.answer\n    console.log('answer: ', answer)\n  }\n")))}m.isMDXComponent=!0}}]);