"use strict";(self.webpackChunktaro_docs=self.webpackChunktaro_docs||[]).push([[74389],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return k}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),i=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=i(e.components);return r.createElement(p.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),d=i(n),k=a,y=d["".concat(p,".").concat(k)]||d[k]||s[k]||o;return n?r.createElement(y,l(l({ref:t},u),{},{components:n})):r.createElement(y,l({ref:t},u))}));function k(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,l=new Array(o);l[0]=d;var c={};for(var p in t)hasOwnProperty.call(t,p)&&(c[p]=t[p]);c.originalType=e,c.mdxType="string"==typeof e?e:a,l[1]=c;for(var i=2;i<o;i++)l[i]=n[i];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},3519:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return c},contentTitle:function(){return p},metadata:function(){return i},toc:function(){return u},default:function(){return d}});var r=n(83117),a=n(80102),o=(n(67294),n(3905)),l=["components"],c={title:"Taro.onGyroscopeChange(callback)",sidebar_label:"onGyroscopeChange"},p=void 0,i={unversionedId:"apis/device/gyroscope/onGyroscopeChange",id:"apis/device/gyroscope/onGyroscopeChange",title:"Taro.onGyroscopeChange(callback)",description:"Listens on the gyroscope data change event. The frequency is based on the Taro.startGyroscope() interval parameter. You can use Taro.stopGyroscope() to stop listening.",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/apis/device/gyroscope/onGyroscopeChange.md",sourceDirName:"apis/device/gyroscope",slug:"/apis/device/gyroscope/onGyroscopeChange",permalink:"/taro/en/docs/next/apis/device/gyroscope/onGyroscopeChange",editUrl:"https://github.com/nervjs/taro-docs/edit/docs/docs/apis/device/gyroscope/onGyroscopeChange.md",tags:[],version:"current",frontMatter:{title:"Taro.onGyroscopeChange(callback)",sidebar_label:"onGyroscopeChange"},sidebar:"API",previous:{title:"startGyroscope",permalink:"/taro/en/docs/next/apis/device/gyroscope/startGyroscope"},next:{title:"offGyroscopeChange",permalink:"/taro/en/docs/next/apis/device/gyroscope/offGyroscopeChange"}},u=[{value:"Type",id:"type",children:[],level:2},{value:"Parameters",id:"parameters",children:[{value:"Callback",id:"callback",children:[],level:3},{value:"CallbackResult",id:"callbackresult",children:[],level:3}],level:2},{value:"API Support",id:"api-support",children:[],level:2}],s={toc:u};function d(e){var t=e.components,n=(0,a.Z)(e,l);return(0,o.kt)("wrapper",(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Listens on the gyroscope data change event. The frequency is based on the ",(0,o.kt)("inlineCode",{parentName:"p"},"Taro.startGyroscope()")," interval parameter. You can use ",(0,o.kt)("inlineCode",{parentName:"p"},"Taro.stopGyroscope()")," to stop listening."),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},(0,o.kt)("a",{parentName:"p",href:"https://developers.weixin.qq.com/miniprogram/en/dev/api/device/gyroscope/wx.onGyroscopeChange.html"},"Reference"))),(0,o.kt)("h2",{id:"type"},"Type"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx"},"(callback: Callback) => void\n")),(0,o.kt)("h2",{id:"parameters"},"Parameters"),(0,o.kt)("h3",{id:"callback"},"Callback"),(0,o.kt)("p",null,"The callback function for the gyroscope data change event."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx"},"(result: CallbackResult) => void\n")),(0,o.kt)("table",null,(0,o.kt)("thead",null,(0,o.kt)("tr",null,(0,o.kt)("th",null,"Property"),(0,o.kt)("th",null,"Type"))),(0,o.kt)("tbody",null,(0,o.kt)("tr",null,(0,o.kt)("td",null,"result"),(0,o.kt)("td",null,(0,o.kt)("code",null,"CallbackResult"))))),(0,o.kt)("h3",{id:"callbackresult"},"CallbackResult"),(0,o.kt)("table",null,(0,o.kt)("thead",null,(0,o.kt)("tr",null,(0,o.kt)("th",null,"Property"),(0,o.kt)("th",null,"Type"),(0,o.kt)("th",null,"Description"))),(0,o.kt)("tbody",null,(0,o.kt)("tr",null,(0,o.kt)("td",null,"x"),(0,o.kt)("td",null,(0,o.kt)("code",null,"number")),(0,o.kt)("td",null,"X-axis angular velocity")),(0,o.kt)("tr",null,(0,o.kt)("td",null,"y"),(0,o.kt)("td",null,(0,o.kt)("code",null,"number")),(0,o.kt)("td",null,"Y-axis angular velocity")),(0,o.kt)("tr",null,(0,o.kt)("td",null,"z"),(0,o.kt)("td",null,(0,o.kt)("code",null,"number")),(0,o.kt)("td",null,"Z-axis angular velocity")))),(0,o.kt)("h2",{id:"api-support"},"API Support"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:"center"},"API"),(0,o.kt)("th",{parentName:"tr",align:"center"},"WeChat Mini-Program"),(0,o.kt)("th",{parentName:"tr",align:"center"},"H5"),(0,o.kt)("th",{parentName:"tr",align:"center"},"React Native"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"center"},"Taro.onGyroscopeChange"),(0,o.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,o.kt)("td",{parentName:"tr",align:"center"}),(0,o.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f")))))}d.isMDXComponent=!0}}]);