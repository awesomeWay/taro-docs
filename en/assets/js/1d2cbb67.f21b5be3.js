"use strict";(self.webpackChunktaro_docs=self.webpackChunktaro_docs||[]).push([[4640],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return k}});var l=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);t&&(l=l.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,l)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,l,r=function(e,t){if(null==e)return{};var n,l,r={},o=Object.keys(e);for(l=0;l<o.length;l++)n=o[l],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(l=0;l<o.length;l++)n=o[l],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var u=l.createContext({}),c=function(e){var t=l.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},p=function(e){var t=c(e.components);return l.createElement(u.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return l.createElement(l.Fragment,{},t)}},s=l.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,u=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),s=c(n),k=r,f=s["".concat(u,".").concat(k)]||s[k]||d[k]||o;return n?l.createElement(f,a(a({ref:t},p),{},{components:n})):l.createElement(f,a({ref:t},p))}));function k(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,a=new Array(o);a[0]=s;var i={};for(var u in t)hasOwnProperty.call(t,u)&&(i[u]=t[u]);i.originalType=e,i.mdxType="string"==typeof e?e:r,a[1]=i;for(var c=2;c<o;c++)a[c]=n[c];return l.createElement.apply(null,a)}return l.createElement.apply(null,n)}s.displayName="MDXCreateElement"},3426:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return i},contentTitle:function(){return u},metadata:function(){return c},toc:function(){return p},default:function(){return s}});var l=n(83117),r=n(80102),o=(n(67294),n(3905)),a=["components"],i={title:"Taro.openDocument(option)",sidebar_label:"openDocument"},u=void 0,c={unversionedId:"apis/files/openDocument",id:"version-3.x/apis/files/openDocument",title:"Taro.openDocument(option)",description:"Opens a file in a new page.",source:"@site/i18n/en/docusaurus-plugin-content-docs/version-3.x/apis/files/openDocument.md",sourceDirName:"apis/files",slug:"/apis/files/openDocument",permalink:"/taro/en/docs/apis/files/openDocument",editUrl:"https://github.com/nervjs/taro-docs/edit/docs/versioned_docs/version-3.x/apis/files/openDocument.md",tags:[],version:"3.x",frontMatter:{title:"Taro.openDocument(option)",sidebar_label:"openDocument"},sidebar:"API",previous:{title:"removeSavedFile",permalink:"/taro/en/docs/apis/files/removeSavedFile"},next:{title:"getSavedFileList",permalink:"/taro/en/docs/apis/files/getSavedFileList"}},p=[{value:"Type",id:"type",children:[],level:2},{value:"Parameters",id:"parameters",children:[{value:"Option",id:"option",children:[],level:3},{value:"fileType",id:"filetype",children:[],level:3}],level:2},{value:"Sample Code",id:"sample-code",children:[],level:2},{value:"API Support",id:"api-support",children:[],level:2}],d={toc:p};function s(e){var t=e.components,n=(0,r.Z)(e,a);return(0,o.kt)("wrapper",(0,l.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Opens a file in a new page."),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},(0,o.kt)("a",{parentName:"p",href:"https://developers.weixin.qq.com/miniprogram/en/dev/api/file/wx.openDocument.html"},"Reference"))),(0,o.kt)("h2",{id:"type"},"Type"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx"},"(option: Option) => Promise<CallbackResult>\n")),(0,o.kt)("h2",{id:"parameters"},"Parameters"),(0,o.kt)("h3",{id:"option"},"Option"),(0,o.kt)("table",null,(0,o.kt)("thead",null,(0,o.kt)("tr",null,(0,o.kt)("th",null,"Property"),(0,o.kt)("th",null,"Type"),(0,o.kt)("th",{style:{textAlign:"center"}},"Required"),(0,o.kt)("th",null,"Description"))),(0,o.kt)("tbody",null,(0,o.kt)("tr",null,(0,o.kt)("td",null,"filePath"),(0,o.kt)("td",null,(0,o.kt)("code",null,"string")),(0,o.kt)("td",{style:{textAlign:"center"}},"Yes"),(0,o.kt)("td",null,"File path, which can be obtained via downloadFile")),(0,o.kt)("tr",null,(0,o.kt)("td",null,"fileType"),(0,o.kt)("td",null,(0,o.kt)("code",null,'"doc" | "docx" | "xls" | "xlsx" | "ppt" | "pptx" | "pdf"')),(0,o.kt)("td",{style:{textAlign:"center"}},"No"),(0,o.kt)("td",null,"File type in which the file is opened")),(0,o.kt)("tr",null,(0,o.kt)("td",null,"complete"),(0,o.kt)("td",null,(0,o.kt)("code",null,"(res: any) => void")),(0,o.kt)("td",{style:{textAlign:"center"}},"No"),(0,o.kt)("td",null,"The callback function used when the API call completed (always executed whether the call succeeds or fails)")),(0,o.kt)("tr",null,(0,o.kt)("td",null,"fail"),(0,o.kt)("td",null,(0,o.kt)("code",null,"(res: any) => void")),(0,o.kt)("td",{style:{textAlign:"center"}},"No"),(0,o.kt)("td",null,"The callback function for a failed API call")),(0,o.kt)("tr",null,(0,o.kt)("td",null,"success"),(0,o.kt)("td",null,(0,o.kt)("code",null,"(res: Result) => void")),(0,o.kt)("td",{style:{textAlign:"center"}},"No"),(0,o.kt)("td",null,"The callback function for a successful API call")))),(0,o.kt)("h3",{id:"filetype"},"fileType"),(0,o.kt)("p",null,"Valid values of object.fileType"),(0,o.kt)("table",null,(0,o.kt)("thead",null,(0,o.kt)("tr",null,(0,o.kt)("th",null,"Property"),(0,o.kt)("th",null,"Description"))),(0,o.kt)("tbody",null,(0,o.kt)("tr",null,(0,o.kt)("td",null,"doc"),(0,o.kt)("td",null,"doc format")),(0,o.kt)("tr",null,(0,o.kt)("td",null,"docx"),(0,o.kt)("td",null,"docx format")),(0,o.kt)("tr",null,(0,o.kt)("td",null,"xls"),(0,o.kt)("td",null,"xls format")),(0,o.kt)("tr",null,(0,o.kt)("td",null,"xlsx"),(0,o.kt)("td",null,"xlsx format")),(0,o.kt)("tr",null,(0,o.kt)("td",null,"ppt"),(0,o.kt)("td",null,"ppt format")),(0,o.kt)("tr",null,(0,o.kt)("td",null,"pptx"),(0,o.kt)("td",null,"pptx format")),(0,o.kt)("tr",null,(0,o.kt)("td",null,"pdf"),(0,o.kt)("td",null,"pdf format")))),(0,o.kt)("h2",{id:"sample-code"},"Sample Code"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx"},"Taro.downloadFile({\n  url: 'https://example.com/somefile.pdf',\n  success: function (res) {\n    var filePath = res.tempFilePath\n    Taro.openDocument({\n      filePath: filePath,\n      success: function (res) {\n        console.log('File opened successfully')\n      }\n    })\n  }\n})\n")),(0,o.kt)("h2",{id:"api-support"},"API Support"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:"center"},"API"),(0,o.kt)("th",{parentName:"tr",align:"center"},"WeChat Mini-Program"),(0,o.kt)("th",{parentName:"tr",align:"center"},"H5"),(0,o.kt)("th",{parentName:"tr",align:"center"},"React Native"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"center"},"Taro.openDocument"),(0,o.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,o.kt)("td",{parentName:"tr",align:"center"}),(0,o.kt)("td",{parentName:"tr",align:"center"})))))}s.isMDXComponent=!0}}]);