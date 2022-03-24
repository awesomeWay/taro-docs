"use strict";(self.webpackChunktaro_docs=self.webpackChunktaro_docs||[]).push([[73586],{3905:function(t,e,r){r.d(e,{Zo:function(){return s},kt:function(){return m}});var n=r(67294);function a(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function o(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function i(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?o(Object(r),!0).forEach((function(e){a(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function c(t,e){if(null==t)return{};var r,n,a=function(t,e){if(null==t)return{};var r,n,a={},o=Object.keys(t);for(n=0;n<o.length;n++)r=o[n],e.indexOf(r)>=0||(a[r]=t[r]);return a}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(n=0;n<o.length;n++)r=o[n],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(t,r)&&(a[r]=t[r])}return a}var p=n.createContext({}),u=function(t){var e=n.useContext(p),r=e;return t&&(r="function"==typeof t?t(e):i(i({},e),t)),r},s=function(t){var e=u(t.components);return n.createElement(p.Provider,{value:e},t.children)},l={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},d=n.forwardRef((function(t,e){var r=t.components,a=t.mdxType,o=t.originalType,p=t.parentName,s=c(t,["components","mdxType","originalType","parentName"]),d=u(r),m=a,f=d["".concat(p,".").concat(m)]||d[m]||l[m]||o;return r?n.createElement(f,i(i({ref:e},s),{},{components:r})):n.createElement(f,i({ref:e},s))}));function m(t,e){var r=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var o=r.length,i=new Array(o);i[0]=d;var c={};for(var p in e)hasOwnProperty.call(e,p)&&(c[p]=e[p]);c.originalType=t,c.mdxType="string"==typeof t?t:a,i[1]=c;for(var u=2;u<o;u++)i[u]=r[u];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},39246:function(t,e,r){r.r(e),r.d(e,{frontMatter:function(){return c},contentTitle:function(){return p},metadata:function(){return u},toc:function(){return s},default:function(){return d}});var n=r(83117),a=r(80102),o=(r(67294),r(3905)),i=["components"],c={title:"Taro.startSoterAuthentication(OBJECT)",sidebar_label:"startSoterAuthentication"},p=void 0,u={unversionedId:"apis/open-api/bioauth/startSoterAuthentication",id:"version-1.x/apis/open-api/bioauth/startSoterAuthentication",title:"Taro.startSoterAuthentication(OBJECT)",description:"\u4f7f\u7528\u65b9\u5f0f\u540c wx.startSoterAuthentication\uff0c\u652f\u6301 Promise \u5316\u4f7f\u7528\u3002",source:"@site/versioned_docs/version-1.x/apis/open-api/bioauth/startSoterAuthentication.md",sourceDirName:"apis/open-api/bioauth",slug:"/apis/open-api/bioauth/startSoterAuthentication",permalink:"/taro/docs/1.x/apis/open-api/bioauth/startSoterAuthentication",editUrl:"https://github.com/nervjs/taro-docs/edit/docs/versioned_docs/version-1.x/apis/open-api/bioauth/startSoterAuthentication.md",tags:[],version:"1.x",frontMatter:{title:"Taro.startSoterAuthentication(OBJECT)",sidebar_label:"startSoterAuthentication"},sidebar:"version-1.x/API",previous:{title:"checkIsSupportSoterAuthentication",permalink:"/taro/docs/1.x/apis/open-api/bioauth/checkIsSupportSoterAuthentication"},next:{title:"addCard",permalink:"/taro/docs/1.x/apis/open-api/card/addCard"}},s=[{value:"\u793a\u4f8b\u4ee3\u7801",id:"\u793a\u4f8b\u4ee3\u7801",children:[],level:2},{value:"API\u652f\u6301\u5ea6",id:"api\u652f\u6301\u5ea6",children:[],level:2}],l={toc:s};function d(t){var e=t.components,r=(0,a.Z)(t,i);return(0,o.kt)("wrapper",(0,n.Z)({},l,r,{components:e,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"\u4f7f\u7528\u65b9\u5f0f\u540c ",(0,o.kt)("a",{parentName:"p",href:"https://developers.weixin.qq.com/miniprogram/dev/api/wx.startSoterAuthentication.html"},(0,o.kt)("inlineCode",{parentName:"a"},"wx.startSoterAuthentication")),"\uff0c\u652f\u6301 ",(0,o.kt)("inlineCode",{parentName:"p"},"Promise")," \u5316\u4f7f\u7528\u3002"),(0,o.kt)("h2",{id:"\u793a\u4f8b\u4ee3\u7801"},"\u793a\u4f8b\u4ee3\u7801"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx"},"import Taro from '@tarojs/taro'\n\nTaro.startSoterAuthentication(params).then(...)\n")),(0,o.kt)("h2",{id:"api\u652f\u6301\u5ea6"},"API\u652f\u6301\u5ea6"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:"center"},"API"),(0,o.kt)("th",{parentName:"tr",align:"center"},"\u5fae\u4fe1\u5c0f\u7a0b\u5e8f"),(0,o.kt)("th",{parentName:"tr",align:"center"},"H5"),(0,o.kt)("th",{parentName:"tr",align:"center"},"React Native"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"center"},"Taro.startSoterAuthentication"),(0,o.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,o.kt)("td",{parentName:"tr",align:"center"}),(0,o.kt)("td",{parentName:"tr",align:"center"})))))}d.isMDXComponent=!0}}]);