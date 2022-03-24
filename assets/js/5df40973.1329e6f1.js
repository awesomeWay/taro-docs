"use strict";(self.webpackChunktaro_docs=self.webpackChunktaro_docs||[]).push([[2717],{3905:function(t,e,n){n.d(e,{Zo:function(){return m},kt:function(){return k}});var a=n(67294);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function l(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?l(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function o(t,e){if(null==t)return{};var n,a,r=function(t,e){if(null==t)return{};var n,a,r={},l=Object.keys(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var d=a.createContext({}),p=function(t){var e=a.useContext(d),n=e;return t&&(n="function"==typeof t?t(e):i(i({},e),t)),n},m=function(t){var e=p(t.components);return a.createElement(d.Provider,{value:e},t.children)},u={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},c=a.forwardRef((function(t,e){var n=t.components,r=t.mdxType,l=t.originalType,d=t.parentName,m=o(t,["components","mdxType","originalType","parentName"]),c=p(n),k=r,N=c["".concat(d,".").concat(k)]||c[k]||u[k]||l;return n?a.createElement(N,i(i({ref:e},m),{},{components:n})):a.createElement(N,i({ref:e},m))}));function k(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=n.length,i=new Array(l);i[0]=c;var o={};for(var d in e)hasOwnProperty.call(e,d)&&(o[d]=e[d]);o.originalType=t,o.mdxType="string"==typeof t?t:r,i[1]=o;for(var p=2;p<l;p++)i[p]=n[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},58215:function(t,e,n){var a=n(67294);e.Z=function(t){var e=t.children,n=t.hidden,r=t.className;return a.createElement("div",{role:"tabpanel",hidden:n,className:r},e)}},9877:function(t,e,n){n.d(e,{Z:function(){return m}});var a=n(83117),r=n(67294),l=n(72389),i=n(24726),o=n(86010),d="tabItem_LplD";function p(t){var e,n,l,p=t.lazy,m=t.block,u=t.defaultValue,c=t.values,k=t.groupId,N=t.className,s=r.Children.map(t.children,(function(t){if((0,r.isValidElement)(t)&&void 0!==t.props.value)return t;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof t.type?t.type:t.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),g=null!=c?c:s.map((function(t){var e=t.props;return{value:e.value,label:e.label,attributes:e.attributes}})),b=(0,i.lx)(g,(function(t,e){return t.value===e.value}));if(b.length>0)throw new Error('Docusaurus error: Duplicate values "'+b.map((function(t){return t.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var f=null===u?u:null!=(e=null!=u?u:null==(n=s.find((function(t){return t.props.default})))?void 0:n.props.value)?e:null==(l=s[0])?void 0:l.props.value;if(null!==f&&!g.some((function(t){return t.value===f})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+f+'" but none of its children has the corresponding value. Available values are: '+g.map((function(t){return t.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var v=(0,i.UB)(),h=v.tabGroupChoices,y=v.setTabGroupChoices,C=(0,r.useState)(f),E=C[0],A=C[1],D=[],w=(0,i.o5)().blockElementScrollPositionUntilNextRender;if(null!=k){var P=h[k];null!=P&&P!==E&&g.some((function(t){return t.value===P}))&&A(P)}var T=function(t){var e=t.currentTarget,n=D.indexOf(e),a=g[n].value;a!==E&&(w(e),A(a),null!=k&&y(k,a))},x=function(t){var e,n=null;switch(t.key){case"ArrowRight":var a=D.indexOf(t.currentTarget)+1;n=D[a]||D[0];break;case"ArrowLeft":var r=D.indexOf(t.currentTarget)-1;n=D[r]||D[D.length-1]}null==(e=n)||e.focus()};return r.createElement("div",{className:"tabs-container"},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":m},N)},g.map((function(t){var e=t.value,n=t.label,l=t.attributes;return r.createElement("li",(0,a.Z)({role:"tab",tabIndex:E===e?0:-1,"aria-selected":E===e,key:e,ref:function(t){return D.push(t)},onKeyDown:x,onFocus:T,onClick:T},l,{className:(0,o.Z)("tabs__item",d,null==l?void 0:l.className,{"tabs__item--active":E===e})}),null!=n?n:e)}))),p?(0,r.cloneElement)(s.filter((function(t){return t.props.value===E}))[0],{className:"margin-vert--md"}):r.createElement("div",{className:"margin-vert--md"},s.map((function(t,e){return(0,r.cloneElement)(t,{key:e,hidden:t.props.value!==E})}))))}function m(t){var e=(0,l.Z)();return r.createElement(p,(0,a.Z)({key:String(e)},t))}},34223:function(t,e,n){n.r(e),n.d(e,{frontMatter:function(){return p},contentTitle:function(){return m},metadata:function(){return u},toc:function(){return c},default:function(){return N}});var a=n(83117),r=n(80102),l=(n(67294),n(3905)),i=n(9877),o=n(58215),d=["components"],p={title:"Audio",sidebar_label:"Audio"},m=void 0,u={unversionedId:"components/media/audio",id:"components/media/audio",title:"Audio",description:"\u97f3\u9891\u30021.6.0\u7248\u672c\u5f00\u59cb\uff0c\u8be5\u7ec4\u4ef6\u4e0d\u518d\u7ef4\u62a4\u3002\u5efa\u8bae\u4f7f\u7528\u80fd\u529b\u66f4\u5f3a\u7684 Taro.createInnerAudioContext \u63a5\u53e3",source:"@site/docs/components/media/audio.md",sourceDirName:"components/media",slug:"/components/media/audio",permalink:"/taro/docs/next/components/media/audio",editUrl:"https://github.com/nervjs/taro-docs/edit/docs/docs/components/media/audio.md",tags:[],version:"current",frontMatter:{title:"Audio",sidebar_label:"Audio"},sidebar:"components",previous:{title:"Navigator",permalink:"/taro/docs/next/components/navig/navigator"},next:{title:"Image",permalink:"/taro/docs/next/components/media/image"}},c=[{value:"\u7c7b\u578b",id:"\u7c7b\u578b",children:[],level:2},{value:"\u793a\u4f8b\u4ee3\u7801",id:"\u793a\u4f8b\u4ee3\u7801",children:[],level:2},{value:"AudioProps",id:"audioprops",children:[{value:"API \u652f\u6301\u5ea6",id:"api-\u652f\u6301\u5ea6",children:[],level:3},{value:"onErrorEventDetail",id:"onerroreventdetail",children:[],level:3},{value:"onTimeUpdateEventDetail",id:"ontimeupdateeventdetail",children:[],level:3},{value:"MediaError",id:"mediaerror",children:[{value:"Code",id:"code",children:[],level:4}],level:3}],level:2}],k={toc:c};function N(t){var e=t.components,p=(0,r.Z)(t,d);return(0,l.kt)("wrapper",(0,a.Z)({},k,p,{components:e,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"\u97f3\u9891\u30021.6.0\u7248\u672c\u5f00\u59cb\uff0c\u8be5\u7ec4\u4ef6\u4e0d\u518d\u7ef4\u62a4\u3002\u5efa\u8bae\u4f7f\u7528\u80fd\u529b\u66f4\u5f3a\u7684 Taro.createInnerAudioContext \u63a5\u53e3"),(0,l.kt)("p",null,"\u652f\u6301\u60c5\u51b5\uff1a",(0,l.kt)("img",{title:"\u5fae\u4fe1\u5c0f\u7a0b\u5e8f",src:n(16710).Z,className:"icon_platform",width:"25px"})," ",(0,l.kt)("img",{title:"\u767e\u5ea6\u5c0f\u7a0b\u5e8f",src:n(94882).Z,className:"icon_platform",width:"25px"})," ",(0,l.kt)("img",{title:"H5",src:n(5030).Z,className:"icon_platform",width:"25px"})," ",(0,l.kt)("img",{title:"React Native",src:n(73555).Z,className:"icon_platform icon_platform--not-support",width:"25px"})),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},(0,l.kt)("a",{parentName:"p",href:"https://developers.weixin.qq.com/miniprogram/dev/component/audio.html"},"\u53c2\u8003\u6587\u6863"))),(0,l.kt)("h2",{id:"\u7c7b\u578b"},"\u7c7b\u578b"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-tsx"},"ComponentType<AudioProps>\n")),(0,l.kt)("h2",{id:"\u793a\u4f8b\u4ee3\u7801"},"\u793a\u4f8b\u4ee3\u7801"),(0,l.kt)(i.Z,{defaultValue:"React",values:[{label:"React",value:"React"},{label:"Vue",value:"Vue"}],mdxType:"Tabs"},(0,l.kt)(o.Z,{value:"React",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-tsx"},"export default class PageView extends Component {\n  constructor() {\n    super(...arguments)\n  }\n\n  render() {\n    return (\n      <View className='components-page'>\n        <Audio\n          src='https://ws.stream.qqmusic.qq.com/M500001VfvsJ21xFqb.mp3?guid=ffffffff82def4af4b12b3cd9337d5e7&uin=346897220&vkey=6292F51E1E384E06DCBDC9AB7C49FD713D632D313AC4858BACB8DDD29067D3C601481D36E62053BF8DFEAF74C0A5CCFADD6471160CAF3E6A&fromtag=46'\n          controls={true}\n          autoplay={false}\n          loop={false}\n          muted={true}\n          initialTime='30'\n          id='video'\n        />\n      </View>\n    )\n  }\n}\n"))),(0,l.kt)(o.Z,{value:"Vue",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-html"},'<template>\n  <view class="components-page">\n    <audio\n      id="video"\n      src="https://ws.stream.qqmusic.qq.com/M500001VfvsJ21xFqb.mp3?guid=ffffffff82def4af4b12b3cd9337d5e7&uin=346897220&vkey=6292F51E1E384E06DCBDC9AB7C49FD713D632D313AC4858BACB8DDD29067D3C601481D36E62053BF8DFEAF74C0A5CCFADD6471160CAF3E6A&fromtag=46"\n      :controls="true"\n      :autoplay="false"\n      :loop="false"\n      :muted="true"\n    />\n  </view>\n</template>\n')))),(0,l.kt)("h2",{id:"audioprops"},"AudioProps"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"\u53c2\u6570"),(0,l.kt)("th",{parentName:"tr",align:null},"\u7c7b\u578b"),(0,l.kt)("th",{parentName:"tr",align:"center"},"\u9ed8\u8ba4\u503c"),(0,l.kt)("th",{parentName:"tr",align:"center"},"\u5fc5\u586b"),(0,l.kt)("th",{parentName:"tr",align:null},"\u8bf4\u660e"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"id"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"string")),(0,l.kt)("td",{parentName:"tr",align:"center"}),(0,l.kt)("td",{parentName:"tr",align:"center"},"\u5426"),(0,l.kt)("td",{parentName:"tr",align:null},"audio \u7ec4\u4ef6\u7684\u552f\u4e00\u6807\u8bc6\u7b26")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"src"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"string")),(0,l.kt)("td",{parentName:"tr",align:"center"}),(0,l.kt)("td",{parentName:"tr",align:"center"},"\u5426"),(0,l.kt)("td",{parentName:"tr",align:null},"\u8981\u64ad\u653e\u97f3\u9891\u7684\u8d44\u6e90\u5730\u5740")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"loop"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"boolean")),(0,l.kt)("td",{parentName:"tr",align:"center"},(0,l.kt)("inlineCode",{parentName:"td"},"false")),(0,l.kt)("td",{parentName:"tr",align:"center"},"\u5426"),(0,l.kt)("td",{parentName:"tr",align:null},"\u662f\u5426\u5faa\u73af\u64ad\u653e")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"muted"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"boolean")),(0,l.kt)("td",{parentName:"tr",align:"center"},(0,l.kt)("inlineCode",{parentName:"td"},"false")),(0,l.kt)("td",{parentName:"tr",align:"center"},"\u5426"),(0,l.kt)("td",{parentName:"tr",align:null},"\u662f\u5426\u9759\u97f3\u64ad\u653e",(0,l.kt)("br",null),(0,l.kt)("strong",{parentName:"td"},"\u4e0d\u63a8\u8350\u4f7f\u7528"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"controls"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"boolean")),(0,l.kt)("td",{parentName:"tr",align:"center"},(0,l.kt)("inlineCode",{parentName:"td"},"false")),(0,l.kt)("td",{parentName:"tr",align:"center"},"\u5426"),(0,l.kt)("td",{parentName:"tr",align:null},"\u662f\u5426\u663e\u793a\u9ed8\u8ba4\u63a7\u4ef6")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"poster"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"string")),(0,l.kt)("td",{parentName:"tr",align:"center"}),(0,l.kt)("td",{parentName:"tr",align:"center"},"\u5426"),(0,l.kt)("td",{parentName:"tr",align:null},"\u9ed8\u8ba4\u63a7\u4ef6\u4e0a\u7684\u97f3\u9891\u5c01\u9762\u7684\u56fe\u7247\u8d44\u6e90\u5730\u5740\uff0c\u5982\u679c controls \u5c5e\u6027\u503c\u4e3a false \u5219\u8bbe\u7f6e poster \u65e0\u6548")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"name"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"string")),(0,l.kt)("td",{parentName:"tr",align:"center"},(0,l.kt)("inlineCode",{parentName:"td"},'"\u672a\u77e5\u97f3\u9891"')),(0,l.kt)("td",{parentName:"tr",align:"center"},"\u5426"),(0,l.kt)("td",{parentName:"tr",align:null},"\u9ed8\u8ba4\u63a7\u4ef6\u4e0a\u7684\u97f3\u9891\u540d\u5b57\uff0c\u5982\u679c controls \u5c5e\u6027\u503c\u4e3a false \u5219\u8bbe\u7f6e name \u65e0\u6548")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"author"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"string")),(0,l.kt)("td",{parentName:"tr",align:"center"},(0,l.kt)("inlineCode",{parentName:"td"},'"\u672a\u77e5\u4f5c\u8005"')),(0,l.kt)("td",{parentName:"tr",align:"center"},"\u5426"),(0,l.kt)("td",{parentName:"tr",align:null},"\u9ed8\u8ba4\u63a7\u4ef6\u4e0a\u7684\u4f5c\u8005\u540d\u5b57\uff0c\u5982\u679c controls \u5c5e\u6027\u503c\u4e3a false \u5219\u8bbe\u7f6e author \u65e0\u6548")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"onError"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"CommonEventFunction<onErrorEventDetail>")),(0,l.kt)("td",{parentName:"tr",align:"center"}),(0,l.kt)("td",{parentName:"tr",align:"center"},"\u5426"),(0,l.kt)("td",{parentName:"tr",align:null},"\u5f53\u53d1\u751f\u9519\u8bef\u65f6\u89e6\u53d1 error \u4e8b\u4ef6\uff0cdetail = {errMsg: MediaError.code}")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"onPlay"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"CommonEventFunction")),(0,l.kt)("td",{parentName:"tr",align:"center"}),(0,l.kt)("td",{parentName:"tr",align:"center"},"\u5426"),(0,l.kt)("td",{parentName:"tr",align:null},"\u5f53\u5f00\u59cb/\u7ee7\u7eed\u64ad\u653e\u65f6\u89e6\u53d1play\u4e8b\u4ef6")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"onPause"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"CommonEventFunction")),(0,l.kt)("td",{parentName:"tr",align:"center"}),(0,l.kt)("td",{parentName:"tr",align:"center"},"\u5426"),(0,l.kt)("td",{parentName:"tr",align:null},"\u5f53\u6682\u505c\u64ad\u653e\u65f6\u89e6\u53d1 pause \u4e8b\u4ef6")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"onTimeUpdate"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"CommonEventFunction<onTimeUpdateEventDetail>")),(0,l.kt)("td",{parentName:"tr",align:"center"}),(0,l.kt)("td",{parentName:"tr",align:"center"},"\u5426"),(0,l.kt)("td",{parentName:"tr",align:null},"\u5f53\u64ad\u653e\u8fdb\u5ea6\u6539\u53d8\u65f6\u89e6\u53d1 timeupdate \u4e8b\u4ef6\uff0cdetail = {currentTime, duration}")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"onEnded"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"CommonEventFunction")),(0,l.kt)("td",{parentName:"tr",align:"center"}),(0,l.kt)("td",{parentName:"tr",align:"center"},"\u5426"),(0,l.kt)("td",{parentName:"tr",align:null},"\u5f53\u64ad\u653e\u5230\u672b\u5c3e\u65f6\u89e6\u53d1 ended \u4e8b\u4ef6")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"nativeProps"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"Record<string, unknown>")),(0,l.kt)("td",{parentName:"tr",align:"center"}),(0,l.kt)("td",{parentName:"tr",align:"center"},"\u5426"),(0,l.kt)("td",{parentName:"tr",align:null},"\u7528\u4e8e\u900f\u4f20 ",(0,l.kt)("inlineCode",{parentName:"td"},"WebComponents")," \u4e0a\u7684\u5c5e\u6027\u5230\u5185\u90e8 H5 \u6807\u7b7e\u4e0a")))),(0,l.kt)("h3",{id:"api-\u652f\u6301\u5ea6"},"API \u652f\u6301\u5ea6"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"center"},"API"),(0,l.kt)("th",{parentName:"tr",align:"center"},"\u5fae\u4fe1\u5c0f\u7a0b\u5e8f"),(0,l.kt)("th",{parentName:"tr",align:"center"},"\u767e\u5ea6\u5c0f\u7a0b\u5e8f"),(0,l.kt)("th",{parentName:"tr",align:"center"},"H5"),(0,l.kt)("th",{parentName:"tr",align:"center"},"React Native"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"center"},"AudioProps.id"),(0,l.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,l.kt)("td",{parentName:"tr",align:"center"}),(0,l.kt)("td",{parentName:"tr",align:"center"}),(0,l.kt)("td",{parentName:"tr",align:"center"})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"center"},"AudioProps.src"),(0,l.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,l.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,l.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,l.kt)("td",{parentName:"tr",align:"center"})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"center"},"AudioProps.loop"),(0,l.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,l.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,l.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,l.kt)("td",{parentName:"tr",align:"center"})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"center"},"AudioProps.muted"),(0,l.kt)("td",{parentName:"tr",align:"center"}),(0,l.kt)("td",{parentName:"tr",align:"center"}),(0,l.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,l.kt)("td",{parentName:"tr",align:"center"})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"center"},"AudioProps.controls"),(0,l.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,l.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,l.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,l.kt)("td",{parentName:"tr",align:"center"})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"center"},"AudioProps.poster"),(0,l.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,l.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,l.kt)("td",{parentName:"tr",align:"center"}),(0,l.kt)("td",{parentName:"tr",align:"center"})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"center"},"AudioProps.name"),(0,l.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,l.kt)("td",{parentName:"tr",align:"center"}),(0,l.kt)("td",{parentName:"tr",align:"center"}),(0,l.kt)("td",{parentName:"tr",align:"center"})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"center"},"AudioProps.author"),(0,l.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,l.kt)("td",{parentName:"tr",align:"center"}),(0,l.kt)("td",{parentName:"tr",align:"center"}),(0,l.kt)("td",{parentName:"tr",align:"center"})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"center"},"AudioProps.onError"),(0,l.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,l.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,l.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,l.kt)("td",{parentName:"tr",align:"center"})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"center"},"AudioProps.onPlay"),(0,l.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,l.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,l.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,l.kt)("td",{parentName:"tr",align:"center"})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"center"},"AudioProps.onPause"),(0,l.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,l.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,l.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,l.kt)("td",{parentName:"tr",align:"center"})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"center"},"AudioProps.onTimeUpdate"),(0,l.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,l.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,l.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,l.kt)("td",{parentName:"tr",align:"center"})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"center"},"AudioProps.onEnded"),(0,l.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,l.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,l.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,l.kt)("td",{parentName:"tr",align:"center"})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"center"},"AudioProps.nativeProps"),(0,l.kt)("td",{parentName:"tr",align:"center"}),(0,l.kt)("td",{parentName:"tr",align:"center"}),(0,l.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,l.kt)("td",{parentName:"tr",align:"center"})))),(0,l.kt)("h3",{id:"onerroreventdetail"},"onErrorEventDetail"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"\u53c2\u6570"),(0,l.kt)("th",{parentName:"tr",align:null},"\u7c7b\u578b"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"errMsg"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"keyof Code"))))),(0,l.kt)("h3",{id:"ontimeupdateeventdetail"},"onTimeUpdateEventDetail"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"\u53c2\u6570"),(0,l.kt)("th",{parentName:"tr",align:null},"\u7c7b\u578b"),(0,l.kt)("th",{parentName:"tr",align:null},"\u8bf4\u660e"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"currentTime"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"number")),(0,l.kt)("td",{parentName:"tr",align:null},"\u5f53\u524d\u65f6\u95f4")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"duration"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"number")),(0,l.kt)("td",{parentName:"tr",align:null},"\u6301\u7eed\u65f6\u95f4")))),(0,l.kt)("h3",{id:"mediaerror"},"MediaError"),(0,l.kt)("h4",{id:"code"},"Code"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"\u53c2\u6570"),(0,l.kt)("th",{parentName:"tr",align:null},"\u8bf4\u660e"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"1"),(0,l.kt)("td",{parentName:"tr",align:null},"\u83b7\u53d6\u8d44\u6e90\u88ab\u7528\u6237\u7981\u6b62")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"2"),(0,l.kt)("td",{parentName:"tr",align:null},"\u7f51\u7edc\u9519\u8bef")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"3"),(0,l.kt)("td",{parentName:"tr",align:null},"\u89e3\u7801\u9519\u8bef")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"4"),(0,l.kt)("td",{parentName:"tr",align:null},"\u4e0d\u5408\u9002\u8d44\u6e90")))))}N.isMDXComponent=!0},5030:function(t,e,n){e.Z=n.p+"assets/images/h5-81f73c447874b6528e84ee395bece16e.png"},73555:function(t,e,n){e.Z=n.p+"assets/images/rn-ecec68ba194e4b5e9fc3e853cc00c569.png"},94882:function(t,e,n){e.Z=n.p+"assets/images/swan-566f56d360909d0457073b67b8f48958.png"},16710:function(t,e,n){e.Z=n.p+"assets/images/weapp-0e8fbe2d5eb3676de4961b54ee7f5ba4.png"}}]);