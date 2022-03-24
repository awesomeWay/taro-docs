"use strict";(self.webpackChunktaro_docs=self.webpackChunktaro_docs||[]).push([[58152],{3905:function(e,r,t){t.d(r,{Zo:function(){return g},kt:function(){return s}});var n=t(67294);function a(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function o(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function i(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?o(Object(t),!0).forEach((function(r){a(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function u(e,r){if(null==e)return{};var t,n,a=function(e,r){if(null==e)return{};var t,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var d=n.createContext({}),c=function(e){var r=n.useContext(d),t=r;return e&&(t="function"==typeof e?e(r):i(i({},r),e)),t},g=function(e){var r=c(e.components);return n.createElement(d.Provider,{value:r},e.children)},p={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},l=n.forwardRef((function(e,r){var t=e.components,a=e.mdxType,o=e.originalType,d=e.parentName,g=u(e,["components","mdxType","originalType","parentName"]),l=c(t),s=a,m=l["".concat(d,".").concat(s)]||l[s]||p[s]||o;return t?n.createElement(m,i(i({ref:r},g),{},{components:t})):n.createElement(m,i({ref:r},g))}));function s(e,r){var t=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var o=t.length,i=new Array(o);i[0]=l;var u={};for(var d in r)hasOwnProperty.call(r,d)&&(u[d]=r[d]);u.originalType=e,u.mdxType="string"==typeof e?e:a,i[1]=u;for(var c=2;c<o;c++)i[c]=t[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,t)}l.displayName="MDXCreateElement"},73181:function(e,r,t){t.r(r),t.d(r,{frontMatter:function(){return u},contentTitle:function(){return d},metadata:function(){return c},toc:function(){return g},default:function(){return l}});var n=t(83117),a=t(80102),o=(t(67294),t(3905)),i=["components"],u={title:"Taro.getBackgroundAudioManager()",sidebar_label:"getBackgroundAudioManager"},d=void 0,c={unversionedId:"apis/media/background-audio/getBackgroundAudioManager",id:"version-2.x/apis/media/background-audio/getBackgroundAudioManager",title:"Taro.getBackgroundAudioManager()",description:"\u83b7\u53d6\u5168\u5c40\u552f\u4e00\u7684\u80cc\u666f\u97f3\u9891\u7ba1\u7406\u5668\u3002",source:"@site/versioned_docs/version-2.x/apis/media/background-audio/getBackgroundAudioManager.md",sourceDirName:"apis/media/background-audio",slug:"/apis/media/background-audio/getBackgroundAudioManager",permalink:"/taro/docs/2.x/apis/media/background-audio/getBackgroundAudioManager",editUrl:"https://github.com/nervjs/taro-docs/edit/docs/versioned_docs/version-2.x/apis/media/background-audio/getBackgroundAudioManager.md",tags:[],version:"2.x",frontMatter:{title:"Taro.getBackgroundAudioManager()",sidebar_label:"getBackgroundAudioManager"},sidebar:"version-2.x/API",previous:{title:"getBackgroundAudioPlayerState",permalink:"/taro/docs/2.x/apis/media/background-audio/getBackgroundAudioPlayerState"},next:{title:"BackgroundAudioManager",permalink:"/taro/docs/2.x/apis/media/background-audio/BackgroundAudioManager"}},g=[{value:"\u7c7b\u578b",id:"\u7c7b\u578b",children:[],level:2},{value:"\u53c2\u6570",id:"\u53c2\u6570",children:[],level:2},{value:"\u793a\u4f8b\u4ee3\u7801",id:"\u793a\u4f8b\u4ee3\u7801",children:[],level:2},{value:"API \u652f\u6301\u5ea6",id:"api-\u652f\u6301\u5ea6",children:[],level:2}],p={toc:g};function l(e){var r=e.components,t=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,n.Z)({},p,t,{components:r,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"\u83b7\u53d6",(0,o.kt)("strong",{parentName:"p"},"\u5168\u5c40\u552f\u4e00"),"\u7684\u80cc\u666f\u97f3\u9891\u7ba1\u7406\u5668\u3002\n\u5c0f\u7a0b\u5e8f\u5207\u5165\u540e\u53f0\uff0c\u5982\u679c\u97f3\u9891\u5904\u4e8e\u64ad\u653e\u72b6\u6001\uff0c\u53ef\u4ee5\u7ee7\u7eed\u64ad\u653e\u3002\u4f46\u662f\u540e\u53f0\u72b6\u6001\u4e0d\u80fd\u901a\u8fc7\u8c03\u7528API\u64cd\u7eb5\u97f3\u9891\u7684\u64ad\u653e\u72b6\u6001\u3002"),(0,o.kt)("p",null,"\u4ece\u5fae\u4fe1\u5ba2\u6237\u7aef6.7.2\u7248\u672c\u5f00\u59cb\uff0c\u82e5\u9700\u8981\u5728\u5c0f\u7a0b\u5e8f\u5207\u540e\u53f0\u540e\u7ee7\u7eed\u64ad\u653e\u97f3\u9891\uff0c\u9700\u8981\u5728 ",(0,o.kt)("a",{parentName:"p",href:"https://developers.weixin.qq.com/miniprogram/dev/reference/configuration/app.html"},"app.json")," \u4e2d\u914d\u7f6e ",(0,o.kt)("inlineCode",{parentName:"p"},"requiredBackgroundModes")," \u5c5e\u6027\u3002\u5f00\u53d1\u7248\u548c\u4f53\u9a8c\u7248\u4e0a\u53ef\u4ee5\u76f4\u63a5\u751f\u6548\uff0c\u6b63\u5f0f\u7248\u8fd8\u9700\u901a\u8fc7\u5ba1\u6838\u3002"),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},(0,o.kt)("a",{parentName:"p",href:"https://developers.weixin.qq.com/miniprogram/dev/api/media/background-audio/wx.getBackgroundAudioManager.html"},"\u53c2\u8003\u6587\u6863"))),(0,o.kt)("h2",{id:"\u7c7b\u578b"},"\u7c7b\u578b"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx"},"() => BackgroundAudioManager\n")),(0,o.kt)("h2",{id:"\u53c2\u6570"},"\u53c2\u6570"),(0,o.kt)("h2",{id:"\u793a\u4f8b\u4ee3\u7801"},"\u793a\u4f8b\u4ee3\u7801"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx"},"const backgroundAudioManager = Taro.getBackgroundAudioManager()\nbackgroundAudioManager.title = '\u6b64\u65f6\u6b64\u523b'\nbackgroundAudioManager.epname = '\u6b64\u65f6\u6b64\u523b'\nbackgroundAudioManager.singer = '\u8bb8\u5dcd'\nbackgroundAudioManager.coverImgUrl = 'https://y.gtimg.cn/music/photo_new/T002R300x300M000003rsKF44GyaSk.jpg?max_age=2592000'\nbackgroundAudioManager.src = 'https://ws.stream.qqmusic.qq.com/M500001VfvsJ21xFqb.mp3?guid=ffffffff82def4af4b12b3cd9337d5e7&uin=346897220&vkey=6292F51E1E384E061FF02C31F716658E5C81F5594D561F2E88B854E81CAAB7806D5E4F103E55D33C16F3FAC506D1AB172DE8600B37E43FAD&fromtag=46' // \u8bbe\u7f6e\u4e86 src \u4e4b\u540e\u4f1a\u81ea\u52a8\u64ad\u653e\n")),(0,o.kt)("h2",{id:"api-\u652f\u6301\u5ea6"},"API \u652f\u6301\u5ea6"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:"center"},"API"),(0,o.kt)("th",{parentName:"tr",align:"center"},"\u5fae\u4fe1\u5c0f\u7a0b\u5e8f"),(0,o.kt)("th",{parentName:"tr",align:"center"},"H5"),(0,o.kt)("th",{parentName:"tr",align:"center"},"React Native"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"center"},"Taro.getBackgroundAudioManager"),(0,o.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,o.kt)("td",{parentName:"tr",align:"center"}),(0,o.kt)("td",{parentName:"tr",align:"center"})))))}l.isMDXComponent=!0}}]);