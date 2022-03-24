"use strict";(self.webpackChunktaro_docs=self.webpackChunktaro_docs||[]).push([[29774],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return k}});var r=n(67294);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,l=function(e,t){if(null==e)return{};var n,r,l={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var s=r.createContext({}),i=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=i(e.components);return r.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,l=e.mdxType,a=e.originalType,s=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),d=i(n),k=l,m=d["".concat(s,".").concat(k)]||d[k]||p[k]||a;return n?r.createElement(m,o(o({ref:t},u),{},{components:n})):r.createElement(m,o({ref:t},u))}));function k(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var a=n.length,o=new Array(a);o[0]=d;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:l,o[1]=c;for(var i=2;i<a;i++)o[i]=n[i];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},15609:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return c},contentTitle:function(){return s},metadata:function(){return i},toc:function(){return u},default:function(){return d}});var r=n(83117),l=n(80102),a=(n(67294),n(3905)),o=["components"],c={title:"Taro.onHCEMessage(callback)",sidebar_label:"onHCEMessage"},s=void 0,i={unversionedId:"apis/device/nfc/onHCEMessage",id:"version-3.x/apis/device/nfc/onHCEMessage",title:"Taro.onHCEMessage(callback)",description:"Listens on the event of receiving NFC device messages.",source:"@site/i18n/en/docusaurus-plugin-content-docs/version-3.x/apis/device/nfc/onHCEMessage.md",sourceDirName:"apis/device/nfc",slug:"/apis/device/nfc/onHCEMessage",permalink:"/taro/en/docs/apis/device/nfc/onHCEMessage",editUrl:"https://github.com/nervjs/taro-docs/edit/docs/versioned_docs/version-3.x/apis/device/nfc/onHCEMessage.md",tags:[],version:"3.x",frontMatter:{title:"Taro.onHCEMessage(callback)",sidebar_label:"onHCEMessage"},sidebar:"API",previous:{title:"sendHCEMessage",permalink:"/taro/en/docs/apis/device/nfc/sendHCEMessage"},next:{title:"offHCEMessage",permalink:"/taro/en/docs/apis/device/nfc/offHCEMessage"}},u=[{value:"Type",id:"type",children:[],level:2},{value:"Parameters",id:"parameters",children:[{value:"Callback",id:"callback",children:[],level:3},{value:"CallbackResult",id:"callbackresult",children:[],level:3},{value:"messageType",id:"messagetype",children:[],level:3}],level:2},{value:"API Support",id:"api-support",children:[],level:2}],p={toc:u};function d(e){var t=e.components,n=(0,l.Z)(e,o);return(0,a.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Listens on the event of receiving NFC device messages."),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},(0,a.kt)("a",{parentName:"p",href:"https://developers.weixin.qq.com/miniprogram/en/dev/api/device/nfc/wx.onHCEMessage.html"},"Reference"))),(0,a.kt)("h2",{id:"type"},"Type"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},"(callback: Callback) => void\n")),(0,a.kt)("h2",{id:"parameters"},"Parameters"),(0,a.kt)("h3",{id:"callback"},"Callback"),(0,a.kt)("p",null,"The callback function for the event of receiving NFC device messages."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},"(result: CallbackResult) => void\n")),(0,a.kt)("table",null,(0,a.kt)("thead",null,(0,a.kt)("tr",null,(0,a.kt)("th",null,"Property"),(0,a.kt)("th",null,"Type"))),(0,a.kt)("tbody",null,(0,a.kt)("tr",null,(0,a.kt)("td",null,"result"),(0,a.kt)("td",null,(0,a.kt)("code",null,"CallbackResult"))))),(0,a.kt)("h3",{id:"callbackresult"},"CallbackResult"),(0,a.kt)("table",null,(0,a.kt)("thead",null,(0,a.kt)("tr",null,(0,a.kt)("th",null,"Property"),(0,a.kt)("th",null,"Type"),(0,a.kt)("th",null,"Description"))),(0,a.kt)("tbody",null,(0,a.kt)("tr",null,(0,a.kt)("td",null,"data"),(0,a.kt)("td",null,(0,a.kt)("code",null,"ArrayBuffer")),(0,a.kt)("td",null,"When",(0,a.kt)("code",null,"messageType=1"),", the app receives a command from the NFC device.")),(0,a.kt)("tr",null,(0,a.kt)("td",null,"messageType"),(0,a.kt)("td",null,(0,a.kt)("code",null,"1 | 2")),(0,a.kt)("td",null,"Message type")),(0,a.kt)("tr",null,(0,a.kt)("td",null,"reason"),(0,a.kt)("td",null,(0,a.kt)("code",null,"number")),(0,a.kt)("td",null,"The reason when",(0,a.kt)("code",null,"messageType=2"),"is returned")))),(0,a.kt)("h3",{id:"messagetype"},"messageType"),(0,a.kt)("p",null,"Valid values of messageType"),(0,a.kt)("table",null,(0,a.kt)("thead",null,(0,a.kt)("tr",null,(0,a.kt)("th",null,"Property"),(0,a.kt)("th",null,"Description"))),(0,a.kt)("tbody",null,(0,a.kt)("tr",null,(0,a.kt)("td",null,"1"),(0,a.kt)("td",null,"HCE APDU Command type. The Mini Program needs to process this command and call the sendHCEMessage API to return the processed command.")),(0,a.kt)("tr",null,(0,a.kt)("td",null,"2"),(0,a.kt)("td",null,"Device departure event type")))),(0,a.kt)("h2",{id:"api-support"},"API Support"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"center"},"API"),(0,a.kt)("th",{parentName:"tr",align:"center"},"WeChat Mini-Program"),(0,a.kt)("th",{parentName:"tr",align:"center"},"H5"),(0,a.kt)("th",{parentName:"tr",align:"center"},"React Native"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"center"},"Taro.onHCEMessage"),(0,a.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,a.kt)("td",{parentName:"tr",align:"center"}),(0,a.kt)("td",{parentName:"tr",align:"center"})))))}d.isMDXComponent=!0}}]);