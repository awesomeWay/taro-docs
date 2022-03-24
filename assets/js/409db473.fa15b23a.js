"use strict";(self.webpackChunktaro_docs=self.webpackChunktaro_docs||[]).push([[90013],{3905:function(e,t,r){r.d(t,{Zo:function(){return s},kt:function(){return v}});var o=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,o,n=function(e,t){if(null==e)return{};var r,o,n={},i=Object.keys(e);for(o=0;o<i.length;o++)r=i[o],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)r=i[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var l=o.createContext({}),u=function(e){var t=o.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},s=function(e){var t=u(e.components);return o.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},d=o.forwardRef((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,l=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),d=u(r),v=n,f=d["".concat(l,".").concat(v)]||d[v]||p[v]||i;return r?o.createElement(f,a(a({ref:t},s),{},{components:r})):o.createElement(f,a({ref:t},s))}));function v(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,a=new Array(i);a[0]=d;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:n,a[1]=c;for(var u=2;u<i;u++)a[u]=r[u];return o.createElement.apply(null,a)}return o.createElement.apply(null,r)}d.displayName="MDXCreateElement"},1293:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return c},contentTitle:function(){return l},metadata:function(){return u},toc:function(){return s},default:function(){return d}});var o=r(83117),n=r(80102),i=(r(67294),r(3905)),a=["components"],c={title:"Taro.getBluetoothDevices(OBJECT)",sidebar_label:"getBluetoothDevices"},l=void 0,u={unversionedId:"apis/device/bluetooth/getBluetoothDevices",id:"version-1.x/apis/device/bluetooth/getBluetoothDevices",title:"Taro.getBluetoothDevices(OBJECT)",description:"\u4f7f\u7528\u65b9\u5f0f\u540c wx.getBluetoothDevices\uff0c\u652f\u6301 Promise \u5316\u4f7f\u7528\u3002",source:"@site/versioned_docs/version-1.x/apis/device/bluetooth/getBluetoothDevices.md",sourceDirName:"apis/device/bluetooth",slug:"/apis/device/bluetooth/getBluetoothDevices",permalink:"/taro/docs/1.x/apis/device/bluetooth/getBluetoothDevices",editUrl:"https://github.com/nervjs/taro-docs/edit/docs/versioned_docs/version-1.x/apis/device/bluetooth/getBluetoothDevices.md",tags:[],version:"1.x",frontMatter:{title:"Taro.getBluetoothDevices(OBJECT)",sidebar_label:"getBluetoothDevices"},sidebar:"version-1.x/API",previous:{title:"getBluetoothAdapterState",permalink:"/taro/docs/1.x/apis/device/bluetooth/getBluetoothAdapterState"},next:{title:"getConnectedBluetoothDevices",permalink:"/taro/docs/1.x/apis/device/bluetooth/getConnectedBluetoothDevices"}},s=[{value:"\u793a\u4f8b\u4ee3\u7801",id:"\u793a\u4f8b\u4ee3\u7801",children:[],level:2}],p={toc:s};function d(e){var t=e.components,r=(0,n.Z)(e,a);return(0,i.kt)("wrapper",(0,o.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"\u4f7f\u7528\u65b9\u5f0f\u540c ",(0,i.kt)("a",{parentName:"p",href:"https://developers.weixin.qq.com/miniprogram/dev/api/wx.getBluetoothDevices.html"},(0,i.kt)("inlineCode",{parentName:"a"},"wx.getBluetoothDevices")),"\uff0c\u652f\u6301 ",(0,i.kt)("inlineCode",{parentName:"p"},"Promise")," \u5316\u4f7f\u7528\u3002"),(0,i.kt)("h2",{id:"\u793a\u4f8b\u4ee3\u7801"},"\u793a\u4f8b\u4ee3\u7801"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-jsx"},"import Taro from '@tarojs/taro'\n\nTaro.getBluetoothDevices(params).then(...)\n")))}d.isMDXComponent=!0}}]);