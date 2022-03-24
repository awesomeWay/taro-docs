"use strict";(self.webpackChunktaro_docs=self.webpackChunktaro_docs||[]).push([[54468],{3905:function(e,n,t){t.d(n,{Zo:function(){return u},kt:function(){return f}});var r=t(67294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var l=r.createContext({}),p=function(e){var n=r.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},u=function(e){var n=p(e.components);return r.createElement(l.Provider,{value:n},e.children)},s={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),d=p(t),f=o,m=d["".concat(l,".").concat(f)]||d[f]||s[f]||a;return t?r.createElement(m,i(i({ref:n},u),{},{components:t})):r.createElement(m,i({ref:n},u))}));function f(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var a=t.length,i=new Array(a);i[0]=d;var c={};for(var l in n)hasOwnProperty.call(n,l)&&(c[l]=n[l]);c.originalType=e,c.mdxType="string"==typeof e?e:o,i[1]=c;for(var p=2;p<a;p++)i[p]=t[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},57905:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return c},contentTitle:function(){return l},metadata:function(){return p},toc:function(){return u},default:function(){return d}});var r=t(83117),o=t(80102),a=(t(67294),t(3905)),i=["components"],c={title:"CLI \u547d\u4ee4"},l=void 0,p={unversionedId:"cli",id:"cli",title:"CLI \u547d\u4ee4",description:"\u5e38\u7528\u7684 Taro CLI \u547d\u4ee4\u3002",source:"@site/docs/cli.md",sourceDirName:".",slug:"/cli",permalink:"/taro/docs/next/cli",editUrl:"https://github.com/nervjs/taro-docs/edit/docs/docs/cli.md",tags:[],version:"current",frontMatter:{title:"CLI \u547d\u4ee4"},sidebar:"docs",previous:{title:"\u76ee\u5f55\u7ed3\u6784",permalink:"/taro/docs/next/folder"},next:{title:"\u7f16\u8bd1\u914d\u7f6e",permalink:"/taro/docs/next/config"}},u=[{value:"\u67e5\u770b Taro \u6240\u6709\u547d\u4ee4\u53ca\u5e2e\u52a9",id:"\u67e5\u770b-taro-\u6240\u6709\u547d\u4ee4\u53ca\u5e2e\u52a9",children:[],level:3},{value:"\u73af\u5883\u53ca\u4f9d\u8d56\u68c0\u6d4b",id:"\u73af\u5883\u53ca\u4f9d\u8d56\u68c0\u6d4b",children:[],level:3},{value:"Taro Doctor",id:"taro-doctor",children:[],level:3},{value:"\u5feb\u901f\u521b\u5efa\u65b0\u9875\u9762",id:"\u5feb\u901f\u521b\u5efa\u65b0\u9875\u9762",children:[],level:3},{value:"CLI \u914d\u7f6e",id:"cli-\u914d\u7f6e",children:[],level:3}],s={toc:u};function d(e){var n=e.components,t=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,r.Z)({},s,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"\u5e38\u7528\u7684 Taro CLI \u547d\u4ee4\u3002"),(0,a.kt)("h3",{id:"\u67e5\u770b-taro-\u6240\u6709\u547d\u4ee4\u53ca\u5e2e\u52a9"},"\u67e5\u770b Taro \u6240\u6709\u547d\u4ee4\u53ca\u5e2e\u52a9"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"$ taro --help\n")),(0,a.kt)("h3",{id:"\u73af\u5883\u53ca\u4f9d\u8d56\u68c0\u6d4b"},"\u73af\u5883\u53ca\u4f9d\u8d56\u68c0\u6d4b"),(0,a.kt)("p",null,"Taro \u63d0\u4f9b\u4e86\u547d\u4ee4\u6765\u4e00\u952e\u68c0\u6d4b Taro \u73af\u5883\u53ca\u4f9d\u8d56\u7684\u7248\u672c\u7b49\u4fe1\u606f\uff0c\u65b9\u4fbf\u5927\u5bb6\u67e5\u770b\u9879\u76ee\u7684\u73af\u5883\u53ca\u4f9d\u8d56\uff0c\u6392\u67e5\u73af\u5883\u95ee\u9898\u3002\u5728\u63d0 issue \u7684\u65f6\u5019\uff0c\u8bf7\u9644\u4e0a ",(0,a.kt)("inlineCode",{parentName:"p"},"taro info")," \u6253\u5370\u7684\u4fe1\u606f\uff0c\u5e2e\u52a9\u5f00\u53d1\u4eba\u5458\u5feb\u901f\u5b9a\u4f4d\u95ee\u9898\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"$ taro info\n\ud83d\udc7d Taro v3.0.7\n\n\n\n  Taro CLI 3.0.7 environment info:\n    System:\n      OS: macOS High Sierra 10.13.6\n      Shell: 5.3 - /bin/zsh\n    Binaries:\n      Node: 13.14.0 - ~/.nvm/versions/node/v13.14.0/bin/node\n      Yarn: 1.22.4 - ~/.nvm/versions/node/v13.14.0/bin/yarn\n      npm: 6.14.4 - ~/.nvm/versions/node/v13.14.0/bin/npm\n    npmPackages:\n      @tarojs/components: 1.3.27 => 1.3.27\n      @tarojs/router: 1.3.27 => 1.3.27\n      @tarojs/taro: 1.3.27 => 1.3.27\n      @tarojs/taro-h5: 1.3.27 => 1.3.27\n      @tarojs/webpack-runner: 1.3.27 => 1.3.27\n      eslint-config-taro: 1.3.27 => 1.3.27\n      eslint-plugin-taro: 1.3.27 => 1.3.27\n      nerv-devtools: 1.5.5 => 1.5.5\n      nervjs: 1.5.5 => 1.5.5\n\n")),(0,a.kt)("h3",{id:"taro-doctor"},"Taro Doctor"),(0,a.kt)("p",null,"Taro Doctor \u5c31\u50cf\u4e00\u4e2a\u533b\u751f\u4e00\u6837\uff0c\u53ef\u4ee5\u8bca\u65ad\u9879\u76ee\u7684\u4f9d\u8d56\u3001\u8bbe\u7f6e\u3001\u7ed3\u6784\uff0c\u4ee5\u53ca\u4ee3\u7801\u7684\u89c4\u8303\u662f\u5426\u5b58\u5728\u95ee\u9898\uff0c\u5e76\u5c1d\u8bd5\u7ed9\u51fa\u89e3\u51b3\u65b9\u6848\u3002"),(0,a.kt)("p",null,"\u4f46\u548c\u771f\u6b63\u7684\u533b\u751f\u4e0d\u4e00\u6837\uff0cTaro Doctor \u4e0d\u9700\u8981\u6392\u961f\u6302\u53f7\uff0c\u4e5f\u4e0d\u7528\u82b1\u94b1\u3002\u4f60\u53ea\u9700\u8981\u5728\u7ec8\u7aef\u8fd0\u884c\u547d\u4ee4\uff1a",(0,a.kt)("inlineCode",{parentName:"p"},"taro doctor"),"\uff0c\u5c31\u50cf\u56fe\u91cc\u4e00\u6837\uff1a"),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://img10.360buyimg.com/ling/jfs/t1/46613/36/5573/202581/5d357d14E6f0df7e1/fc026be7dc69dcf2.png",alt:"Taro Doctor \u8bca\u65ad\u7ed3\u679c\u56fe"})),(0,a.kt)("h3",{id:"\u5feb\u901f\u521b\u5efa\u65b0\u9875\u9762"},"\u5feb\u901f\u521b\u5efa\u65b0\u9875\u9762"),(0,a.kt)("p",null,"Taro create --name ","[\u9875\u9762\u540d\u79f0]"," \u80fd\u591f\u5728\u5f53\u524d\u9879\u76ee\u7684pages\u76ee\u5f55\u4e0b\u5feb\u901f\u751f\u6210\u65b0\u7684\u9875\u9762\u6587\u4ef6\uff0c\u5e76\u586b\u5145\u57fa\u7840\u4ee3\u7801\uff0c\u662f\u4e00\u4e2a\u63d0\u9ad8\u5f00\u53d1\u6548\u7387\u7684\u5229\u5668\u3002"),(0,a.kt)("h3",{id:"cli-\u914d\u7f6e"},"CLI \u914d\u7f6e"),(0,a.kt)("p",null,"Taro \u4f1a\u5728\u7528\u6237\u6839\u76ee\u5f55\u4e0b\u521b\u5efa .taro \u6587\u4ef6\u5939\uff0c\u5176\u4e2d .taro/index.json \u7528\u4e8e\u5b58\u653e CLI \u76f8\u5173\u914d\u7f6e\u3002"),(0,a.kt)("p",null,"\u5f00\u53d1\u8005\u53ef\u4ee5\u4f7f\u7528 ",(0,a.kt)("inlineCode",{parentName:"p"},"taro config")," \u547d\u4ee4\u5bf9\u914d\u7f6e\u9879\u8fdb\u884c\u4e00\u7cfb\u5217\u64cd\u4f5c\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"# \u67e5\u770b\u7528\u6cd5\n$ taro config --help\n# \u8bbe\u7f6e\u914d\u7f6e\u9879<key>\u7684\u503c\u4e3a<value>\n$ taro config set <key> <value>\n# \u8bfb\u53d6\u914d\u7f6e\u9879<key>\n$ taro config get <key>\n# \u5220\u9664\u914d\u7f6e\u9879<key>\n$ taro config delete <key>\n# \u6253\u5370\u6240\u6709\u914d\u7f6e\u9879\n$ taro config list [--json]\n")))}d.isMDXComponent=!0}}]);