"use strict";(self.webpackChunktaro_docs=self.webpackChunktaro_docs||[]).push([[15574],{3905:function(e,t,r){r.d(t,{Zo:function(){return u},kt:function(){return y}});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=n.createContext({}),p=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=p(e.components);return n.createElement(c.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=p(r),y=a,f=d["".concat(c,".").concat(y)]||d[y]||s[y]||o;return r?n.createElement(f,i(i({ref:t},u),{},{components:r})):n.createElement(f,i({ref:t},u))}));function y(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=d;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var p=2;p<o;p++)i[p]=r[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},99421:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return l},contentTitle:function(){return c},metadata:function(){return p},toc:function(){return u},default:function(){return d}});var n=r(83117),a=r(80102),o=(r(67294),r(3905)),i=["components"],l={title:"Taro.getBatteryInfoSync()",sidebar_label:"getBatteryInfoSync"},c=void 0,p={unversionedId:"apis/device/battery/getBatteryInfoSync",id:"version-3.x/apis/device/battery/getBatteryInfoSync",title:"Taro.getBatteryInfoSync()",description:"The synchronous version of Taro.getBatteryInfo.",source:"@site/i18n/en/docusaurus-plugin-content-docs/version-3.x/apis/device/battery/getBatteryInfoSync.md",sourceDirName:"apis/device/battery",slug:"/apis/device/battery/getBatteryInfoSync",permalink:"/taro/en/docs/apis/device/battery/getBatteryInfoSync",editUrl:"https://github.com/nervjs/taro-docs/edit/docs/versioned_docs/version-3.x/apis/device/battery/getBatteryInfoSync.md",tags:[],version:"3.x",frontMatter:{title:"Taro.getBatteryInfoSync()",sidebar_label:"getBatteryInfoSync"},sidebar:"API",previous:{title:"checkIsOpenAccessibility",permalink:"/taro/en/docs/apis/device/accessibility/checkIsOpenAccessibility"},next:{title:"getBatteryInfo",permalink:"/taro/en/docs/apis/device/battery/getBatteryInfo"}},u=[{value:"Type",id:"type",children:[],level:2},{value:"Parameters",id:"parameters",children:[{value:"Result",id:"result",children:[],level:3}],level:2},{value:"API Support",id:"api-support",children:[],level:2}],s={toc:u};function d(e){var t=e.components,r=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,n.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"The synchronous version of ",(0,o.kt)("inlineCode",{parentName:"p"},"Taro.getBatteryInfo"),"."),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},(0,o.kt)("a",{parentName:"p",href:"https://developers.weixin.qq.com/miniprogram/en/dev/api/device/battery/wx.getBatteryInfoSync.html"},"Reference"))),(0,o.kt)("h2",{id:"type"},"Type"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx"},"() => Result\n")),(0,o.kt)("h2",{id:"parameters"},"Parameters"),(0,o.kt)("h3",{id:"result"},"Result"),(0,o.kt)("table",null,(0,o.kt)("thead",null,(0,o.kt)("tr",null,(0,o.kt)("th",null,"Property"),(0,o.kt)("th",null,"Type"),(0,o.kt)("th",null,"Description"))),(0,o.kt)("tbody",null,(0,o.kt)("tr",null,(0,o.kt)("td",null,"isCharging"),(0,o.kt)("td",null,(0,o.kt)("code",null,"boolean")),(0,o.kt)("td",null,"Indicates whether the device is charging.")),(0,o.kt)("tr",null,(0,o.kt)("td",null,"level"),(0,o.kt)("td",null,(0,o.kt)("code",null,"string")),(0,o.kt)("td",null,"The device's battery level. Range: 1-100.")))),(0,o.kt)("h2",{id:"api-support"},"API Support"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:"center"},"API"),(0,o.kt)("th",{parentName:"tr",align:"center"},"WeChat Mini-Program"),(0,o.kt)("th",{parentName:"tr",align:"center"},"H5"),(0,o.kt)("th",{parentName:"tr",align:"center"},"React Native"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"center"},"Taro.getBatteryInfoSync"),(0,o.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,o.kt)("td",{parentName:"tr",align:"center"}),(0,o.kt)("td",{parentName:"tr",align:"center"})))))}d.isMDXComponent=!0}}]);