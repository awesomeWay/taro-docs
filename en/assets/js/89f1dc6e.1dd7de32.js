"use strict";(self.webpackChunktaro_docs=self.webpackChunktaro_docs||[]).push([[3977],{3905:function(t,e,l){l.d(e,{Zo:function(){return p},kt:function(){return k}});var n=l(67294);function r(t,e,l){return e in t?Object.defineProperty(t,e,{value:l,enumerable:!0,configurable:!0,writable:!0}):t[e]=l,t}function a(t,e){var l=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),l.push.apply(l,n)}return l}function o(t){for(var e=1;e<arguments.length;e++){var l=null!=arguments[e]?arguments[e]:{};e%2?a(Object(l),!0).forEach((function(e){r(t,e,l[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(l)):a(Object(l)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(l,e))}))}return t}function u(t,e){if(null==t)return{};var l,n,r=function(t,e){if(null==t)return{};var l,n,r={},a=Object.keys(t);for(n=0;n<a.length;n++)l=a[n],e.indexOf(l)>=0||(r[l]=t[l]);return r}(t,e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(n=0;n<a.length;n++)l=a[n],e.indexOf(l)>=0||Object.prototype.propertyIsEnumerable.call(t,l)&&(r[l]=t[l])}return r}var c=n.createContext({}),i=function(t){var e=n.useContext(c),l=e;return t&&(l="function"==typeof t?t(e):o(o({},e),t)),l},p=function(t){var e=i(t.components);return n.createElement(c.Provider,{value:e},t.children)},d={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},s=n.forwardRef((function(t,e){var l=t.components,r=t.mdxType,a=t.originalType,c=t.parentName,p=u(t,["components","mdxType","originalType","parentName"]),s=i(l),k=r,h=s["".concat(c,".").concat(k)]||s[k]||d[k]||a;return l?n.createElement(h,o(o({ref:e},p),{},{components:l})):n.createElement(h,o({ref:e},p))}));function k(t,e){var l=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var a=l.length,o=new Array(a);o[0]=s;var u={};for(var c in e)hasOwnProperty.call(e,c)&&(u[c]=e[c]);u.originalType=t,u.mdxType="string"==typeof t?t:r,o[1]=u;for(var i=2;i<a;i++)o[i]=l[i];return n.createElement.apply(null,o)}return n.createElement.apply(null,l)}s.displayName="MDXCreateElement"},49036:function(t,e,l){l.r(e),l.d(e,{frontMatter:function(){return u},contentTitle:function(){return c},metadata:function(){return i},toc:function(){return p},default:function(){return s}});var n=l(83117),r=l(80102),a=(l(67294),l(3905)),o=["components"],u={title:"Taro.getBluetoothAdapterState(option)",sidebar_label:"getBluetoothAdapterState"},c=void 0,i={unversionedId:"apis/device/bluetooth/getBluetoothAdapterState",id:"apis/device/bluetooth/getBluetoothAdapterState",title:"Taro.getBluetoothAdapterState(option)",description:"Gets the status of the local Bluetooth adapter.",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/apis/device/bluetooth/getBluetoothAdapterState.md",sourceDirName:"apis/device/bluetooth",slug:"/apis/device/bluetooth/getBluetoothAdapterState",permalink:"/taro/en/docs/next/apis/device/bluetooth/getBluetoothAdapterState",editUrl:"https://github.com/nervjs/taro-docs/edit/docs/docs/apis/device/bluetooth/getBluetoothAdapterState.md",tags:[],version:"current",frontMatter:{title:"Taro.getBluetoothAdapterState(option)",sidebar_label:"getBluetoothAdapterState"},sidebar:"API",previous:{title:"getBluetoothDevices",permalink:"/taro/en/docs/next/apis/device/bluetooth/getBluetoothDevices"},next:{title:"closeBluetoothAdapter",permalink:"/taro/en/docs/next/apis/device/bluetooth/closeBluetoothAdapter"}},p=[{value:"Type",id:"type",children:[],level:2},{value:"Parameters",id:"parameters",children:[{value:"Option",id:"option",children:[],level:3},{value:"SuccessCallbackResult",id:"successcallbackresult",children:[],level:3}],level:2},{value:"Sample Code",id:"sample-code",children:[],level:2},{value:"API Support",id:"api-support",children:[],level:2}],d={toc:p};function s(t){var e=t.components,l=(0,r.Z)(t,o);return(0,a.kt)("wrapper",(0,n.Z)({},d,l,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Gets the status of the local Bluetooth adapter."),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},(0,a.kt)("a",{parentName:"p",href:"https://developers.weixin.qq.com/miniprogram/en/dev/api/device/bluetooth/wx.getBluetoothAdapterState.html"},"Reference"))),(0,a.kt)("h2",{id:"type"},"Type"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},"(option?: Option) => Promise<SuccessCallbackResult>\n")),(0,a.kt)("h2",{id:"parameters"},"Parameters"),(0,a.kt)("h3",{id:"option"},"Option"),(0,a.kt)("table",null,(0,a.kt)("thead",null,(0,a.kt)("tr",null,(0,a.kt)("th",null,"Property"),(0,a.kt)("th",null,"Type"),(0,a.kt)("th",{style:{textAlign:"center"}},"Required"),(0,a.kt)("th",null,"Description"))),(0,a.kt)("tbody",null,(0,a.kt)("tr",null,(0,a.kt)("td",null,"complete"),(0,a.kt)("td",null,(0,a.kt)("code",null,"(res: any) => void")),(0,a.kt)("td",{style:{textAlign:"center"}},"No"),(0,a.kt)("td",null,"The callback function used when the API call completed (always executed whether the call succeeds or fails)")),(0,a.kt)("tr",null,(0,a.kt)("td",null,"fail"),(0,a.kt)("td",null,(0,a.kt)("code",null,"(res: any) => void")),(0,a.kt)("td",{style:{textAlign:"center"}},"No"),(0,a.kt)("td",null,"The callback function for a failed API call")),(0,a.kt)("tr",null,(0,a.kt)("td",null,"success"),(0,a.kt)("td",null,(0,a.kt)("code",null,"(res: Result) => void")),(0,a.kt)("td",{style:{textAlign:"center"}},"No"),(0,a.kt)("td",null,"The callback function for a successful API call")))),(0,a.kt)("h3",{id:"successcallbackresult"},"SuccessCallbackResult"),(0,a.kt)("table",null,(0,a.kt)("thead",null,(0,a.kt)("tr",null,(0,a.kt)("th",null,"Property"),(0,a.kt)("th",null,"Type"),(0,a.kt)("th",null,"Description"))),(0,a.kt)("tbody",null,(0,a.kt)("tr",null,(0,a.kt)("td",null,"available"),(0,a.kt)("td",null,(0,a.kt)("code",null,"boolean")),(0,a.kt)("td",null,"Indicates whether the Bluetooth adapter is available")),(0,a.kt)("tr",null,(0,a.kt)("td",null,"discovering"),(0,a.kt)("td",null,(0,a.kt)("code",null,"boolean")),(0,a.kt)("td",null,"Indicates whether a device discovery is performed")),(0,a.kt)("tr",null,(0,a.kt)("td",null,"errMsg"),(0,a.kt)("td",null,(0,a.kt)("code",null,"string")),(0,a.kt)("td",null,"success: ok; fail: error message.")))),(0,a.kt)("h2",{id:"sample-code"},"Sample Code"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},"Taro.getBluetoothAdapterState({\n  success: function (res) {\n    console.log(res)\n  }\n})\n")),(0,a.kt)("h2",{id:"api-support"},"API Support"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"center"},"API"),(0,a.kt)("th",{parentName:"tr",align:"center"},"WeChat Mini-Program"),(0,a.kt)("th",{parentName:"tr",align:"center"},"H5"),(0,a.kt)("th",{parentName:"tr",align:"center"},"React Native"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"center"},"Taro.getBluetoothAdapterState"),(0,a.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,a.kt)("td",{parentName:"tr",align:"center"}),(0,a.kt)("td",{parentName:"tr",align:"center"})))))}s.isMDXComponent=!0}}]);