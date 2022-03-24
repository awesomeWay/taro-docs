"use strict";(self.webpackChunktaro_docs=self.webpackChunktaro_docs||[]).push([[59419],{3905:function(e,t,l){l.d(t,{Zo:function(){return d},kt:function(){return p}});var n=l(67294);function r(e,t,l){return t in e?Object.defineProperty(e,t,{value:l,enumerable:!0,configurable:!0,writable:!0}):e[t]=l,e}function o(e,t){var l=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),l.push.apply(l,n)}return l}function a(e){for(var t=1;t<arguments.length;t++){var l=null!=arguments[t]?arguments[t]:{};t%2?o(Object(l),!0).forEach((function(t){r(e,t,l[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(l)):o(Object(l)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(l,t))}))}return e}function i(e,t){if(null==e)return{};var l,n,r=function(e,t){if(null==e)return{};var l,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)l=o[n],t.indexOf(l)>=0||(r[l]=e[l]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)l=o[n],t.indexOf(l)>=0||Object.prototype.propertyIsEnumerable.call(e,l)&&(r[l]=e[l])}return r}var c=n.createContext({}),u=function(e){var t=n.useContext(c),l=t;return e&&(l="function"==typeof e?e(t):a(a({},t),e)),l},d=function(e){var t=u(e.components);return n.createElement(c.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},h=n.forwardRef((function(e,t){var l=e.components,r=e.mdxType,o=e.originalType,c=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),h=u(l),p=r,k=h["".concat(c,".").concat(p)]||h[p]||s[p]||o;return l?n.createElement(k,a(a({ref:t},d),{},{components:l})):n.createElement(k,a({ref:t},d))}));function p(e,t){var l=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=l.length,a=new Array(o);a[0]=h;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:r,a[1]=i;for(var u=2;u<o;u++)a[u]=l[u];return n.createElement.apply(null,a)}return n.createElement.apply(null,l)}h.displayName="MDXCreateElement"},17477:function(e,t,l){l.r(t),l.d(t,{frontMatter:function(){return i},contentTitle:function(){return c},metadata:function(){return u},toc:function(){return d},default:function(){return h}});var n=l(83117),r=l(80102),o=(l(67294),l(3905)),a=["components"],i={title:"Taro.getBluetoothDevices(option)",sidebar_label:"getBluetoothDevices"},c=void 0,u={unversionedId:"apis/device/bluetooth/getBluetoothDevices",id:"version-3.x/apis/device/bluetooth/getBluetoothDevices",title:"Taro.getBluetoothDevices(option)",description:"Obtains all Bluetooth devices discovered during the active period of the Bluetooth module, including all devices that are already connected to the mobile.",source:"@site/i18n/en/docusaurus-plugin-content-docs/version-3.x/apis/device/bluetooth/getBluetoothDevices.md",sourceDirName:"apis/device/bluetooth",slug:"/apis/device/bluetooth/getBluetoothDevices",permalink:"/taro/en/docs/apis/device/bluetooth/getBluetoothDevices",editUrl:"https://github.com/nervjs/taro-docs/edit/docs/versioned_docs/version-3.x/apis/device/bluetooth/getBluetoothDevices.md",tags:[],version:"3.x",frontMatter:{title:"Taro.getBluetoothDevices(option)",sidebar_label:"getBluetoothDevices"},sidebar:"API",previous:{title:"getConnectedBluetoothDevices",permalink:"/taro/en/docs/apis/device/bluetooth/getConnectedBluetoothDevices"},next:{title:"getBluetoothAdapterState",permalink:"/taro/en/docs/apis/device/bluetooth/getBluetoothAdapterState"}},d=[{value:"Type",id:"type",children:[],level:2},{value:"Parameters",id:"parameters",children:[{value:"Option",id:"option",children:[],level:3},{value:"SuccessCallbackResult",id:"successcallbackresult",children:[],level:3},{value:"SuccessCallbackResultBlueToothDevice",id:"successcallbackresultbluetoothdevice",children:[],level:3}],level:2},{value:"Sample Code",id:"sample-code",children:[],level:2},{value:"API Support",id:"api-support",children:[],level:2}],s={toc:d};function h(e){var t=e.components,l=(0,r.Z)(e,a);return(0,o.kt)("wrapper",(0,n.Z)({},s,l,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Obtains all Bluetooth devices discovered during the active period of the Bluetooth module, including all devices that are already connected to the mobile."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Notes")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"This API obtains a device list of ",(0,o.kt)("inlineCode",{parentName:"p"},"all Bluetooth devices discovered during the active period of the Bluetooth module"),". If you do not promptly call wx.closeBluetoothAdapter to release system resources after the end of the Bluetooth module process, calling this API will return Bluetooth devices discovered in the previous Bluetooth process. These devices may no longer be near the user, and thus cannot be connected.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"When a Bluetooth device is discovered, the name field returned by the system is generally the device name in the LocalName field in the broadcast package. If a connection is established with the Bluetooth device, the name field returned by the system changes to the GattName obtained from the Bluetooth device. If you need to dynamically change and display the device name, we recommend using the localName field."))),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},(0,o.kt)("a",{parentName:"p",href:"https://developers.weixin.qq.com/miniprogram/en/dev/api/device/bluetooth/wx.getBluetoothDevices.html"},"Reference"))),(0,o.kt)("h2",{id:"type"},"Type"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx"},"(option?: Option) => Promise<SuccessCallbackResult>\n")),(0,o.kt)("h2",{id:"parameters"},"Parameters"),(0,o.kt)("h3",{id:"option"},"Option"),(0,o.kt)("table",null,(0,o.kt)("thead",null,(0,o.kt)("tr",null,(0,o.kt)("th",null,"Property"),(0,o.kt)("th",null,"Type"),(0,o.kt)("th",{style:{textAlign:"center"}},"Required"),(0,o.kt)("th",null,"Description"))),(0,o.kt)("tbody",null,(0,o.kt)("tr",null,(0,o.kt)("td",null,"complete"),(0,o.kt)("td",null,(0,o.kt)("code",null,"(res: any) => void")),(0,o.kt)("td",{style:{textAlign:"center"}},"No"),(0,o.kt)("td",null,"The callback function used when the API call completed (always executed whether the call succeeds or fails)")),(0,o.kt)("tr",null,(0,o.kt)("td",null,"fail"),(0,o.kt)("td",null,(0,o.kt)("code",null,"(res: any) => void")),(0,o.kt)("td",{style:{textAlign:"center"}},"No"),(0,o.kt)("td",null,"The callback function for a failed API call")),(0,o.kt)("tr",null,(0,o.kt)("td",null,"success"),(0,o.kt)("td",null,(0,o.kt)("code",null,"(res: Result) => void")),(0,o.kt)("td",{style:{textAlign:"center"}},"No"),(0,o.kt)("td",null,"The callback function for a successful API call")))),(0,o.kt)("h3",{id:"successcallbackresult"},"SuccessCallbackResult"),(0,o.kt)("table",null,(0,o.kt)("thead",null,(0,o.kt)("tr",null,(0,o.kt)("th",null,"Property"),(0,o.kt)("th",null,"Type"),(0,o.kt)("th",null,"Description"))),(0,o.kt)("tbody",null,(0,o.kt)("tr",null,(0,o.kt)("td",null,"devices"),(0,o.kt)("td",null,(0,o.kt)("code",null,"SuccessCallbackResultBlueToothDevice[]")),(0,o.kt)("td",null,"The list of connected devices corresponding to the UUIDs")),(0,o.kt)("tr",null,(0,o.kt)("td",null,"errMsg"),(0,o.kt)("td",null,(0,o.kt)("code",null,"string")),(0,o.kt)("td",null,"\u6210\u529f\uff1aok\uff0c\u9519\u8bef\uff1a\u8be6\u7ec6\u4fe1\u606f")))),(0,o.kt)("h3",{id:"successcallbackresultbluetoothdevice"},"SuccessCallbackResultBlueToothDevice"),(0,o.kt)("table",null,(0,o.kt)("thead",null,(0,o.kt)("tr",null,(0,o.kt)("th",null,"Property"),(0,o.kt)("th",null,"Type"),(0,o.kt)("th",null,"Description"))),(0,o.kt)("tbody",null,(0,o.kt)("tr",null,(0,o.kt)("td",null,"RSSI"),(0,o.kt)("td",null,(0,o.kt)("code",null,"number")),(0,o.kt)("td",null,"The signal strength of the current Bluetooth device")),(0,o.kt)("tr",null,(0,o.kt)("td",null,"advertisData"),(0,o.kt)("td",null,(0,o.kt)("code",null,"ArrayBuffer")),(0,o.kt)("td",null,"The ManufacturerData field in the broadcast data field of the current Bluetooth device")),(0,o.kt)("tr",null,(0,o.kt)("td",null,"advertisServiceUUIDs"),(0,o.kt)("td",null,(0,o.kt)("code",null,"string[]")),(0,o.kt)("td",null,"The ServiceUUIDs field in the broadcast data field of the current Bluetooth device")),(0,o.kt)("tr",null,(0,o.kt)("td",null,"deviceId"),(0,o.kt)("td",null,(0,o.kt)("code",null,"string")),(0,o.kt)("td",null,"Device ID")),(0,o.kt)("tr",null,(0,o.kt)("td",null,"localName"),(0,o.kt)("td",null,(0,o.kt)("code",null,"string")),(0,o.kt)("td",null,"The LocalName field in the broadcast data field of the current Bluetooth device")),(0,o.kt)("tr",null,(0,o.kt)("td",null,"name"),(0,o.kt)("td",null,(0,o.kt)("code",null,"string")),(0,o.kt)("td",null,"The name of the Bluetooth device. Some devices may not have a name.")),(0,o.kt)("tr",null,(0,o.kt)("td",null,"serviceData"),(0,o.kt)("td",null,(0,o.kt)("code",null,"Record<string, any>")),(0,o.kt)("td",null,"The ServiceData field in the broadcast data field of the current Bluetooth device")))),(0,o.kt)("h2",{id:"sample-code"},"Sample Code"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx"},"// Example of an ArrayBuffer converted to a hexadecimal string\nfunction ab2hex(buffer) {\n  var hexArr = Array.prototype.map.call(\n    new Uint8Array(buffer),\n    function(bit) {\n      return ('00' + bit.toString(16)).slice(-2)\n    }\n  )\n  return hexArr.join('');\n}\nTaro.getBluetoothDevices({\n  success: function (res) {\n    console.log(res)\n    if (res.devices[0]) {\n      console.log(ab2hex(res.devices[0].advertisData))\n    }\n  }\n})\n")),(0,o.kt)("h2",{id:"api-support"},"API Support"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:"center"},"API"),(0,o.kt)("th",{parentName:"tr",align:"center"},"WeChat Mini-Program"),(0,o.kt)("th",{parentName:"tr",align:"center"},"H5"),(0,o.kt)("th",{parentName:"tr",align:"center"},"React Native"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"center"},"Taro.getBluetoothDevices"),(0,o.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,o.kt)("td",{parentName:"tr",align:"center"}),(0,o.kt)("td",{parentName:"tr",align:"center"})))))}h.isMDXComponent=!0}}]);