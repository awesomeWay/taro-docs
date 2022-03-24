"use strict";(self.webpackChunktaro_docs=self.webpackChunktaro_docs||[]).push([[60837],{3905:function(t,e,l){l.d(e,{Zo:function(){return c},kt:function(){return p}});var n=l(67294);function r(t,e,l){return e in t?Object.defineProperty(t,e,{value:l,enumerable:!0,configurable:!0,writable:!0}):t[e]=l,t}function o(t,e){var l=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),l.push.apply(l,n)}return l}function u(t){for(var e=1;e<arguments.length;e++){var l=null!=arguments[e]?arguments[e]:{};e%2?o(Object(l),!0).forEach((function(e){r(t,e,l[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(l)):o(Object(l)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(l,e))}))}return t}function a(t,e){if(null==t)return{};var l,n,r=function(t,e){if(null==t)return{};var l,n,r={},o=Object.keys(t);for(n=0;n<o.length;n++)l=o[n],e.indexOf(l)>=0||(r[l]=t[l]);return r}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(n=0;n<o.length;n++)l=o[n],e.indexOf(l)>=0||Object.prototype.propertyIsEnumerable.call(t,l)&&(r[l]=t[l])}return r}var i=n.createContext({}),d=function(t){var e=n.useContext(i),l=e;return t&&(l="function"==typeof t?t(e):u(u({},e),t)),l},c=function(t){var e=d(t.components);return n.createElement(i.Provider,{value:e},t.children)},k={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},s=n.forwardRef((function(t,e){var l=t.components,r=t.mdxType,o=t.originalType,i=t.parentName,c=a(t,["components","mdxType","originalType","parentName"]),s=d(l),p=r,b=s["".concat(i,".").concat(p)]||s[p]||k[p]||o;return l?n.createElement(b,u(u({ref:e},c),{},{components:l})):n.createElement(b,u({ref:e},c))}));function p(t,e){var l=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var o=l.length,u=new Array(o);u[0]=s;var a={};for(var i in e)hasOwnProperty.call(e,i)&&(a[i]=e[i]);a.originalType=t,a.mdxType="string"==typeof t?t:r,u[1]=a;for(var d=2;d<o;d++)u[d]=l[d];return n.createElement.apply(null,u)}return n.createElement.apply(null,l)}s.displayName="MDXCreateElement"},9954:function(t,e,l){l.r(e),l.d(e,{frontMatter:function(){return a},contentTitle:function(){return i},metadata:function(){return d},toc:function(){return c},default:function(){return s}});var n=l(83117),r=l(80102),o=(l(67294),l(3905)),u=["components"],a={title:"IntersectionObserver",sidebar_label:"IntersectionObserver"},i=void 0,d={unversionedId:"apis/wxml/IntersectionObserver",id:"apis/wxml/IntersectionObserver",title:"IntersectionObserver",description:"An IntersectionObserver object that infers whether and how likely certain nodes are visible to users.",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/apis/wxml/IntersectionObserver.md",sourceDirName:"apis/wxml",slug:"/apis/wxml/IntersectionObserver",permalink:"/taro/en/docs/next/apis/wxml/IntersectionObserver",editUrl:"https://github.com/nervjs/taro-docs/edit/docs/docs/apis/wxml/IntersectionObserver.md",tags:[],version:"current",frontMatter:{title:"IntersectionObserver",sidebar_label:"IntersectionObserver"},sidebar:"API",previous:{title:"createIntersectionObserver",permalink:"/taro/en/docs/next/apis/wxml/createIntersectionObserver"},next:{title:"MediaQueryObserver",permalink:"/taro/en/docs/next/apis/wxml/MediaQueryObserver"}},c=[{value:"Methods",id:"methods",children:[{value:"disconnect",id:"disconnect",children:[],level:3},{value:"observe",id:"observe",children:[],level:3},{value:"relativeTo",id:"relativeto",children:[],level:3},{value:"relativeToViewport",id:"relativetoviewport",children:[{value:"Sample Code",id:"sample-code",children:[],level:4}],level:3}],level:2},{value:"Parameters",id:"parameters",children:[{value:"ObserveCallback",id:"observecallback",children:[],level:3},{value:"ObserveCallbackResult",id:"observecallbackresult",children:[],level:3},{value:"RelativeRectResult",id:"relativerectresult",children:[],level:3},{value:"IntersectionRectResult",id:"intersectionrectresult",children:[],level:3},{value:"BoundingClientRectResult",id:"boundingclientrectresult",children:[],level:3},{value:"RelativeToMargins",id:"relativetomargins",children:[],level:3},{value:"RelativeToViewportMargins",id:"relativetoviewportmargins",children:[],level:3}],level:2}],k={toc:c};function s(t){var e=t.components,l=(0,r.Z)(t,u);return(0,o.kt)("wrapper",(0,n.Z)({},k,l,{components:e,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"An ",(0,o.kt)("inlineCode",{parentName:"p"},"IntersectionObserver")," object that infers whether and how likely certain nodes are visible to users."),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},(0,o.kt)("a",{parentName:"p",href:"https://developers.weixin.qq.com/miniprogram/en/dev/api/wxml/IntersectionObserver.html"},"Reference"))),(0,o.kt)("h2",{id:"methods"},"Methods"),(0,o.kt)("h3",{id:"disconnect"},"disconnect"),(0,o.kt)("p",null,"Stops listening, and the callback function will no longer be triggered."),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},(0,o.kt)("a",{parentName:"p",href:"https://developers.weixin.qq.com/miniprogram/en/dev/api/wxml/IntersectionObserver.disconnect.html"},"Reference"))),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx"},"() => void\n")),(0,o.kt)("h3",{id:"observe"},"observe"),(0,o.kt)("p",null,"Specifies the target node and starts listening on changes in the intersection status."),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},(0,o.kt)("a",{parentName:"p",href:"https://developers.weixin.qq.com/miniprogram/en/dev/api/wxml/IntersectionObserver.observe.html"},"Reference"))),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx"},"(targetSelector: string, callback: ObserveCallback) => void\n")),(0,o.kt)("table",null,(0,o.kt)("thead",null,(0,o.kt)("tr",null,(0,o.kt)("th",null,"Property"),(0,o.kt)("th",null,"Type"),(0,o.kt)("th",null,"Description"))),(0,o.kt)("tbody",null,(0,o.kt)("tr",null,(0,o.kt)("td",null,"targetSelector"),(0,o.kt)("td",null,(0,o.kt)("code",null,"string")),(0,o.kt)("td",null,"Selector")),(0,o.kt)("tr",null,(0,o.kt)("td",null,"callback"),(0,o.kt)("td",null,(0,o.kt)("code",null,"ObserveCallback")),(0,o.kt)("td",null,"The callback function for listening on intersection status changes.")))),(0,o.kt)("h3",{id:"relativeto"},"relativeTo"),(0,o.kt)("p",null,"Uses a selector to specify a node as one of the reference areas."),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},(0,o.kt)("a",{parentName:"p",href:"https://developers.weixin.qq.com/miniprogram/en/dev/api/wxml/IntersectionObserver.relativeTo.html"},"Reference"))),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx"},"(selector: string, margins?: RelativeToMargins) => IntersectionObserver\n")),(0,o.kt)("table",null,(0,o.kt)("thead",null,(0,o.kt)("tr",null,(0,o.kt)("th",null,"Property"),(0,o.kt)("th",null,"Type"),(0,o.kt)("th",null,"Description"))),(0,o.kt)("tbody",null,(0,o.kt)("tr",null,(0,o.kt)("td",null,"selector"),(0,o.kt)("td",null,(0,o.kt)("code",null,"string")),(0,o.kt)("td",null,"Selector")),(0,o.kt)("tr",null,(0,o.kt)("td",null,"margins"),(0,o.kt)("td",null,(0,o.kt)("code",null,"RelativeToMargins")),(0,o.kt)("td",null,"Expands/Contracts the border of the layout area of the reference node.")))),(0,o.kt)("h3",{id:"relativetoviewport"},"relativeToViewport"),(0,o.kt)("p",null,"Specifies the page display area as one of the reference areas."),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},(0,o.kt)("a",{parentName:"p",href:"https://developers.weixin.qq.com/miniprogram/en/dev/api/wxml/IntersectionObserver.relativeToViewport.html"},"Reference"))),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx"},"(margins?: RelativeToViewportMargins) => IntersectionObserver\n")),(0,o.kt)("table",null,(0,o.kt)("thead",null,(0,o.kt)("tr",null,(0,o.kt)("th",null,"Property"),(0,o.kt)("th",null,"Type"),(0,o.kt)("th",null,"Description"))),(0,o.kt)("tbody",null,(0,o.kt)("tr",null,(0,o.kt)("td",null,"margins"),(0,o.kt)("td",null,(0,o.kt)("code",null,"RelativeToViewportMargins")),(0,o.kt)("td",null,"Expands/Contracts the border of the layout area of the reference node.")))),(0,o.kt)("h4",{id:"sample-code"},"Sample Code"),(0,o.kt)("p",null,"In the code sample below, the callback function is triggered if the target node (specified by the selector .target-class) enters the area 100 px below the display area."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx"},"Taro.createIntersectionObserver().relativeToViewport({bottom: 100}).observe('.target-class', (res) => {\n  res.intersectionRatio // The percentage of the intersection area in the layout area of the target node\n  res.intersectionRect // Intersection area\n  res.intersectionRect.left // Left boundary coordinates of the intersection area\n  res.intersectionRect.top // Upper boundary coordinates of the intersection area\n  res.intersectionRect.width // Width of the intersection area\n  res.intersectionRect.height // Height of the intersection area\n})\n")),(0,o.kt)("h2",{id:"parameters"},"Parameters"),(0,o.kt)("h3",{id:"observecallback"},"ObserveCallback"),(0,o.kt)("p",null,"The callback function for listening on intersection status changes."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx"},"(result: ObserveCallbackResult) => void\n")),(0,o.kt)("table",null,(0,o.kt)("thead",null,(0,o.kt)("tr",null,(0,o.kt)("th",null,"Property"),(0,o.kt)("th",null,"Type"))),(0,o.kt)("tbody",null,(0,o.kt)("tr",null,(0,o.kt)("td",null,"result"),(0,o.kt)("td",null,(0,o.kt)("code",null,"ObserveCallbackResult"))))),(0,o.kt)("h3",{id:"observecallbackresult"},"ObserveCallbackResult"),(0,o.kt)("table",null,(0,o.kt)("thead",null,(0,o.kt)("tr",null,(0,o.kt)("th",null,"Property"),(0,o.kt)("th",null,"Type"),(0,o.kt)("th",null,"Description"))),(0,o.kt)("tbody",null,(0,o.kt)("tr",null,(0,o.kt)("td",null,"boundingClientRect"),(0,o.kt)("td",null,(0,o.kt)("code",null,"BoundingClientRectResult")),(0,o.kt)("td",null,"The target border")),(0,o.kt)("tr",null,(0,o.kt)("td",null,"intersectionRatio"),(0,o.kt)("td",null,(0,o.kt)("code",null,"number")),(0,o.kt)("td",null,"Intersection ratio")),(0,o.kt)("tr",null,(0,o.kt)("td",null,"intersectionRect"),(0,o.kt)("td",null,(0,o.kt)("code",null,"IntersectionRectResult")),(0,o.kt)("td",null,"The border of the intersection area")),(0,o.kt)("tr",null,(0,o.kt)("td",null,"relativeRect"),(0,o.kt)("td",null,(0,o.kt)("code",null,"RelativeRectResult")),(0,o.kt)("td",null,"The border of the reference area")),(0,o.kt)("tr",null,(0,o.kt)("td",null,"time"),(0,o.kt)("td",null,(0,o.kt)("code",null,"number")),(0,o.kt)("td",null,"The timestamp for intersection detection")))),(0,o.kt)("h3",{id:"relativerectresult"},"RelativeRectResult"),(0,o.kt)("p",null,"\u53c2\u7167\u533a\u57df\u7684\u8fb9\u754c"),(0,o.kt)("table",null,(0,o.kt)("thead",null,(0,o.kt)("tr",null,(0,o.kt)("th",null,"Property"),(0,o.kt)("th",null,"Type"),(0,o.kt)("th",null,"Description"))),(0,o.kt)("tbody",null,(0,o.kt)("tr",null,(0,o.kt)("td",null,"bottom"),(0,o.kt)("td",null,(0,o.kt)("code",null,"number")),(0,o.kt)("td",null,"Lower border of the node layout area")),(0,o.kt)("tr",null,(0,o.kt)("td",null,"left"),(0,o.kt)("td",null,(0,o.kt)("code",null,"number")),(0,o.kt)("td",null,"Left border of the node layout area")),(0,o.kt)("tr",null,(0,o.kt)("td",null,"right"),(0,o.kt)("td",null,(0,o.kt)("code",null,"number")),(0,o.kt)("td",null,"Right border of the node layout area")),(0,o.kt)("tr",null,(0,o.kt)("td",null,"top"),(0,o.kt)("td",null,(0,o.kt)("code",null,"number")),(0,o.kt)("td",null,"Upper border of the node layout area")))),(0,o.kt)("h3",{id:"intersectionrectresult"},"IntersectionRectResult"),(0,o.kt)("p",null,"\u76f8\u4ea4\u533a\u57df\u7684\u8fb9\u754c"),(0,o.kt)("table",null,(0,o.kt)("thead",null,(0,o.kt)("tr",null,(0,o.kt)("th",null,"Property"),(0,o.kt)("th",null,"Type"),(0,o.kt)("th",null,"Description"))),(0,o.kt)("tbody",null,(0,o.kt)("tr",null,(0,o.kt)("td",null,"bottom"),(0,o.kt)("td",null,(0,o.kt)("code",null,"number")),(0,o.kt)("td",null,"Lower border")),(0,o.kt)("tr",null,(0,o.kt)("td",null,"left"),(0,o.kt)("td",null,(0,o.kt)("code",null,"number")),(0,o.kt)("td",null,"Left border")),(0,o.kt)("tr",null,(0,o.kt)("td",null,"right"),(0,o.kt)("td",null,(0,o.kt)("code",null,"number")),(0,o.kt)("td",null,"Right border")),(0,o.kt)("tr",null,(0,o.kt)("td",null,"top"),(0,o.kt)("td",null,(0,o.kt)("code",null,"number")),(0,o.kt)("td",null,"Upper border")),(0,o.kt)("tr",null,(0,o.kt)("td",null,"height"),(0,o.kt)("td",null,(0,o.kt)("code",null,"number")),(0,o.kt)("td",null,"Height")),(0,o.kt)("tr",null,(0,o.kt)("td",null,"width"),(0,o.kt)("td",null,(0,o.kt)("code",null,"number")),(0,o.kt)("td",null,"Width")))),(0,o.kt)("h3",{id:"boundingclientrectresult"},"BoundingClientRectResult"),(0,o.kt)("table",null,(0,o.kt)("thead",null,(0,o.kt)("tr",null,(0,o.kt)("th",null,"Property"),(0,o.kt)("th",null,"Type"),(0,o.kt)("th",null,"Description"))),(0,o.kt)("tbody",null,(0,o.kt)("tr",null,(0,o.kt)("td",null,"bottom"),(0,o.kt)("td",null,(0,o.kt)("code",null,"number")),(0,o.kt)("td",null,"Lower border")),(0,o.kt)("tr",null,(0,o.kt)("td",null,"left"),(0,o.kt)("td",null,(0,o.kt)("code",null,"number")),(0,o.kt)("td",null,"Left border")),(0,o.kt)("tr",null,(0,o.kt)("td",null,"right"),(0,o.kt)("td",null,(0,o.kt)("code",null,"number")),(0,o.kt)("td",null,"Right border")),(0,o.kt)("tr",null,(0,o.kt)("td",null,"top"),(0,o.kt)("td",null,(0,o.kt)("code",null,"number")),(0,o.kt)("td",null,"Upper border")),(0,o.kt)("tr",null,(0,o.kt)("td",null,"height"),(0,o.kt)("td",null,(0,o.kt)("code",null,"number")),(0,o.kt)("td",null,"Height")),(0,o.kt)("tr",null,(0,o.kt)("td",null,"width"),(0,o.kt)("td",null,(0,o.kt)("code",null,"number")),(0,o.kt)("td",null,"Width")))),(0,o.kt)("h3",{id:"relativetomargins"},"RelativeToMargins"),(0,o.kt)("p",null,"Expands/Contracts the border of the layout area of the reference node."),(0,o.kt)("table",null,(0,o.kt)("thead",null,(0,o.kt)("tr",null,(0,o.kt)("th",null,"Property"),(0,o.kt)("th",null,"Type"),(0,o.kt)("th",{style:{textAlign:"center"}},"Required"),(0,o.kt)("th",null,"Description"))),(0,o.kt)("tbody",null,(0,o.kt)("tr",null,(0,o.kt)("td",null,"bottom"),(0,o.kt)("td",null,(0,o.kt)("code",null,"number")),(0,o.kt)("td",{style:{textAlign:"center"}},"No"),(0,o.kt)("td",null,"Lower border of the node layout area")),(0,o.kt)("tr",null,(0,o.kt)("td",null,"left"),(0,o.kt)("td",null,(0,o.kt)("code",null,"number")),(0,o.kt)("td",{style:{textAlign:"center"}},"No"),(0,o.kt)("td",null,"Left border of the node layout area")),(0,o.kt)("tr",null,(0,o.kt)("td",null,"right"),(0,o.kt)("td",null,(0,o.kt)("code",null,"number")),(0,o.kt)("td",{style:{textAlign:"center"}},"No"),(0,o.kt)("td",null,"Right border of the node layout area")),(0,o.kt)("tr",null,(0,o.kt)("td",null,"top"),(0,o.kt)("td",null,(0,o.kt)("code",null,"number")),(0,o.kt)("td",{style:{textAlign:"center"}},"No"),(0,o.kt)("td",null,"Upper border of the node layout area")))),(0,o.kt)("h3",{id:"relativetoviewportmargins"},"RelativeToViewportMargins"),(0,o.kt)("p",null,"Expands/Contracts the border of the layout area of the reference node."),(0,o.kt)("table",null,(0,o.kt)("thead",null,(0,o.kt)("tr",null,(0,o.kt)("th",null,"Property"),(0,o.kt)("th",null,"Type"),(0,o.kt)("th",{style:{textAlign:"center"}},"Required"),(0,o.kt)("th",null,"Description"))),(0,o.kt)("tbody",null,(0,o.kt)("tr",null,(0,o.kt)("td",null,"bottom"),(0,o.kt)("td",null,(0,o.kt)("code",null,"number")),(0,o.kt)("td",{style:{textAlign:"center"}},"No"),(0,o.kt)("td",null,"Lower border of the node layout area")),(0,o.kt)("tr",null,(0,o.kt)("td",null,"left"),(0,o.kt)("td",null,(0,o.kt)("code",null,"number")),(0,o.kt)("td",{style:{textAlign:"center"}},"No"),(0,o.kt)("td",null,"Left border of the node layout area")),(0,o.kt)("tr",null,(0,o.kt)("td",null,"right"),(0,o.kt)("td",null,(0,o.kt)("code",null,"number")),(0,o.kt)("td",{style:{textAlign:"center"}},"No"),(0,o.kt)("td",null,"Right border of the node layout area")),(0,o.kt)("tr",null,(0,o.kt)("td",null,"top"),(0,o.kt)("td",null,(0,o.kt)("code",null,"number")),(0,o.kt)("td",{style:{textAlign:"center"}},"No"),(0,o.kt)("td",null,"Upper border of the node layout area")))))}s.isMDXComponent=!0}}]);