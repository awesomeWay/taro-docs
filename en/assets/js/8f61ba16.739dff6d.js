"use strict";(self.webpackChunktaro_docs=self.webpackChunktaro_docs||[]).push([[12790],{3905:function(t,e,n){n.d(e,{Zo:function(){return d},kt:function(){return s}});var l=n(67294);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function a(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);e&&(l=l.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,l)}return n}function o(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?a(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function i(t,e){if(null==t)return{};var n,l,r=function(t,e){if(null==t)return{};var n,l,r={},a=Object.keys(t);for(l=0;l<a.length;l++)n=a[l],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(l=0;l<a.length;l++)n=a[l],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var u=l.createContext({}),c=function(t){var e=l.useContext(u),n=e;return t&&(n="function"==typeof t?t(e):o(o({},e),t)),n},d=function(t){var e=c(t.components);return l.createElement(u.Provider,{value:e},t.children)},k={inlineCode:"code",wrapper:function(t){var e=t.children;return l.createElement(l.Fragment,{},e)}},p=l.forwardRef((function(t,e){var n=t.components,r=t.mdxType,a=t.originalType,u=t.parentName,d=i(t,["components","mdxType","originalType","parentName"]),p=c(n),s=r,m=p["".concat(u,".").concat(s)]||p[s]||k[s]||a;return n?l.createElement(m,o(o({ref:e},d),{},{components:n})):l.createElement(m,o({ref:e},d))}));function s(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var a=n.length,o=new Array(a);o[0]=p;var i={};for(var u in e)hasOwnProperty.call(e,u)&&(i[u]=e[u]);i.originalType=t,i.mdxType="string"==typeof t?t:r,o[1]=i;for(var c=2;c<a;c++)o[c]=n[c];return l.createElement.apply(null,o)}return l.createElement.apply(null,n)}p.displayName="MDXCreateElement"},58215:function(t,e,n){var l=n(67294);e.Z=function(t){var e=t.children,n=t.hidden,r=t.className;return l.createElement("div",{role:"tabpanel",hidden:n,className:r},e)}},9877:function(t,e,n){n.d(e,{Z:function(){return d}});var l=n(83117),r=n(67294),a=n(72389),o=n(24726),i=n(86010),u="tabItem_LplD";function c(t){var e,n,a,c=t.lazy,d=t.block,k=t.defaultValue,p=t.values,s=t.groupId,m=t.className,g=r.Children.map(t.children,(function(t){if((0,r.isValidElement)(t)&&void 0!==t.props.value)return t;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof t.type?t.type:t.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),v=null!=p?p:g.map((function(t){var e=t.props;return{value:e.value,label:e.label,attributes:e.attributes}})),h=(0,o.lx)(v,(function(t,e){return t.value===e.value}));if(h.length>0)throw new Error('Docusaurus error: Duplicate values "'+h.map((function(t){return t.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var b=null===k?k:null!=(e=null!=k?k:null==(n=g.find((function(t){return t.props.default})))?void 0:n.props.value)?e:null==(a=g[0])?void 0:a.props.value;if(null!==b&&!v.some((function(t){return t.value===b})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+b+'" but none of its children has the corresponding value. Available values are: '+v.map((function(t){return t.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var f=(0,o.UB)(),N=f.tabGroupChoices,y=f.setTabGroupChoices,w=(0,r.useState)(b),x=w[0],A=w[1],T=[],P=(0,o.o5)().blockElementScrollPositionUntilNextRender;if(null!=s){var M=N[s];null!=M&&M!==x&&v.some((function(t){return t.value===M}))&&A(M)}var V=function(t){var e=t.currentTarget,n=T.indexOf(e),l=v[n].value;l!==x&&(P(e),A(l),null!=s&&y(s,l))},E=function(t){var e,n=null;switch(t.key){case"ArrowRight":var l=T.indexOf(t.currentTarget)+1;n=T[l]||T[0];break;case"ArrowLeft":var r=T.indexOf(t.currentTarget)-1;n=T[r]||T[T.length-1]}null==(e=n)||e.focus()};return r.createElement("div",{className:"tabs-container"},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.Z)("tabs",{"tabs--block":d},m)},v.map((function(t){var e=t.value,n=t.label,a=t.attributes;return r.createElement("li",(0,l.Z)({role:"tab",tabIndex:x===e?0:-1,"aria-selected":x===e,key:e,ref:function(t){return T.push(t)},onKeyDown:E,onFocus:V,onClick:V},a,{className:(0,i.Z)("tabs__item",u,null==a?void 0:a.className,{"tabs__item--active":x===e})}),null!=n?n:e)}))),c?(0,r.cloneElement)(g.filter((function(t){return t.props.value===x}))[0],{className:"margin-vert--md"}):r.createElement("div",{className:"margin-vert--md"},g.map((function(t,e){return(0,r.cloneElement)(t,{key:e,hidden:t.props.value!==x})}))))}function d(t){var e=(0,a.Z)();return r.createElement(c,(0,l.Z)({key:String(e)},t))}},84168:function(t,e,n){n.r(e),n.d(e,{frontMatter:function(){return c},contentTitle:function(){return d},metadata:function(){return k},toc:function(){return p},default:function(){return m}});var l=n(83117),r=n(80102),a=(n(67294),n(3905)),o=n(9877),i=n(58215),u=["components"],c={title:"MovableView",sidebar_label:"MovableView"},d=void 0,k={unversionedId:"components/viewContainer/movable-view",id:"version-3.x/components/viewContainer/movable-view",title:"MovableView",description:"A movable view container. It can be dragged to move on a page. The movable-view component must be included in the movable-area component. It must be a direct child node. Otherwise, the component cannot move.",source:"@site/i18n/en/docusaurus-plugin-content-docs/version-3.x/components/viewContainer/movable-view.md",sourceDirName:"components/viewContainer",slug:"/components/viewContainer/movable-view",permalink:"/taro/en/docs/components/viewContainer/movable-view",editUrl:"https://github.com/nervjs/taro-docs/edit/docs/versioned_docs/version-3.x/components/viewContainer/movable-view.md",tags:[],version:"3.x",frontMatter:{title:"MovableView",sidebar_label:"MovableView"},sidebar:"components",previous:{title:"MovableArea",permalink:"/taro/en/docs/components/viewContainer/movable-area"},next:{title:"CoverView",permalink:"/taro/en/docs/components/viewContainer/cover-view"}},p=[{value:"Type",id:"type",children:[],level:2},{value:"Examples",id:"examples",children:[],level:2},{value:"MovableViewProps",id:"movableviewprops",children:[{value:"Property Support",id:"property-support",children:[],level:3},{value:"TChangeSource",id:"tchangesource",children:[],level:3},{value:"onChangeEventDeatil",id:"onchangeeventdeatil",children:[],level:3},{value:"onScaleEventDeatil",id:"onscaleeventdeatil",children:[],level:3}],level:2},{value:"API Support",id:"api-support",children:[],level:2}],s={toc:p};function m(t){var e=t.components,n=(0,r.Z)(t,u);return(0,a.kt)("wrapper",(0,l.Z)({},s,n,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"A movable view container. It can be dragged to move on a page. The movable-view component must be included in the movable-area component. It must be a direct child node. Otherwise, the component cannot move."),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},(0,a.kt)("a",{parentName:"p",href:"https://developers.weixin.qq.com/miniprogram/en/dev/component/movable-view.html"},"Reference"))),(0,a.kt)("h2",{id:"type"},"Type"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},"ComponentType<MovableViewProps>\n")),(0,a.kt)("h2",{id:"examples"},"Examples"),(0,a.kt)(o.Z,{defaultValue:"React",values:[{label:"React",value:"React"},{label:"Vue",value:"Vue"}],mdxType:"Tabs"},(0,a.kt)(i.Z,{value:"React",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},"class App extends Components {\n  render () {\n    return (\n      <MovableArea style='height: 200px; width: 200px; background: red;'>\n        <MovableView style='height: 50px; width: 50px; background: blue;' direction='all'>move me</MovableView>\n      </MovableArea>\n    )\n  }\n}\n"))),(0,a.kt)(i.Z,{value:"Vue",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-html"},"  <movable-area style='height: 200px; width: 200px; background: red;'>\n    <movable-view style='height: 50px; width: 50px; background: blue;' direction='all'>move me</movable-view>\n  </movable-area>\n")))),(0,a.kt)("h2",{id:"movableviewprops"},"MovableViewProps"),(0,a.kt)("table",null,(0,a.kt)("thead",null,(0,a.kt)("tr",null,(0,a.kt)("th",null,"Property"),(0,a.kt)("th",null,"Type"),(0,a.kt)("th",{style:{textAlign:"center"}},"Default"),(0,a.kt)("th",{style:{textAlign:"center"}},"Required"),(0,a.kt)("th",null,"Description"))),(0,a.kt)("tbody",null,(0,a.kt)("tr",null,(0,a.kt)("td",null,"direction"),(0,a.kt)("td",null,(0,a.kt)("code",null,'"all" | "vertical" | "horizontal" | "none"')),(0,a.kt)("td",{style:{textAlign:"center"}},(0,a.kt)("code",null,"none")),(0,a.kt)("td",{style:{textAlign:"center"}},"No"),(0,a.kt)("td",null,'The moving direction of movable-view. Its values include "all", "vertical", "horizontal", and "none".')),(0,a.kt)("tr",null,(0,a.kt)("td",null,"inertia"),(0,a.kt)("td",null,(0,a.kt)("code",null,"boolean")),(0,a.kt)("td",{style:{textAlign:"center"}},(0,a.kt)("code",null,"false")),(0,a.kt)("td",{style:{textAlign:"center"}},"No"),(0,a.kt)("td",null,"Specifies whether movable-view has inertia.")),(0,a.kt)("tr",null,(0,a.kt)("td",null,"outOfBounds"),(0,a.kt)("td",null,(0,a.kt)("code",null,"boolean")),(0,a.kt)("td",{style:{textAlign:"center"}},(0,a.kt)("code",null,"false")),(0,a.kt)("td",{style:{textAlign:"center"}},"No"),(0,a.kt)("td",null,"Specifies whether movable-view can move after the view container is out of the movable area.")),(0,a.kt)("tr",null,(0,a.kt)("td",null,"x"),(0,a.kt)("td",null,(0,a.kt)("code",null,"string | number")),(0,a.kt)("td",{style:{textAlign:"center"}}),(0,a.kt)("td",{style:{textAlign:"center"}},"\u5426"),(0,a.kt)("td",null,"Specifies the offset in the x-axis direction. If the value of x is not within the movable range, the component will automatically move to the movable range. A change to the value of x will trigger an animation.")),(0,a.kt)("tr",null,(0,a.kt)("td",null,"y"),(0,a.kt)("td",null,(0,a.kt)("code",null,"string | number")),(0,a.kt)("td",{style:{textAlign:"center"}}),(0,a.kt)("td",{style:{textAlign:"center"}},"No"),(0,a.kt)("td",null,"Specifies the offset in the y-axis direction. If the value of y is not within the movable range, the component will automatically move to the movable range. A change to the value of y will trigger an animation.")),(0,a.kt)("tr",null,(0,a.kt)("td",null,"damping"),(0,a.kt)("td",null,(0,a.kt)("code",null,"number")),(0,a.kt)("td",{style:{textAlign:"center"}},(0,a.kt)("code",null,"20")),(0,a.kt)("td",{style:{textAlign:"center"}},"No"),(0,a.kt)("td",null,"The damping coefficient, which is used to control the animation triggered when the value of x or y changes and the animation that is pulled back when the component exceeds the range. The higher value leads to faster movement.")),(0,a.kt)("tr",null,(0,a.kt)("td",null,"friction"),(0,a.kt)("td",null,(0,a.kt)("code",null,"number")),(0,a.kt)("td",{style:{textAlign:"center"}},(0,a.kt)("code",null,"2")),(0,a.kt)("td",{style:{textAlign:"center"}},"No"),(0,a.kt)("td",null,"The friction coefficient, which is used to control the animation that moves due to inertia. The higher value leads to higher friction and indicates that the movement stops earlier. It must be greater than 0. Otherwise it will be set to the default value.")),(0,a.kt)("tr",null,(0,a.kt)("td",null,"disabled"),(0,a.kt)("td",null,(0,a.kt)("code",null,"boolean")),(0,a.kt)("td",{style:{textAlign:"center"}},(0,a.kt)("code",null,"false")),(0,a.kt)("td",{style:{textAlign:"center"}},"No"),(0,a.kt)("td",null,"Specifies whether to disable the component.")),(0,a.kt)("tr",null,(0,a.kt)("td",null,"scale"),(0,a.kt)("td",null,(0,a.kt)("code",null,"boolean")),(0,a.kt)("td",{style:{textAlign:"center"}},(0,a.kt)("code",null,"false")),(0,a.kt)("td",{style:{textAlign:"center"}},"No"),(0,a.kt)("td",null,"Specifies whether to support two-finger scaling. The effective area for scaling gestures falls within the movable-view by default.")),(0,a.kt)("tr",null,(0,a.kt)("td",null,"scaleMin"),(0,a.kt)("td",null,(0,a.kt)("code",null,"number")),(0,a.kt)("td",{style:{textAlign:"center"}},(0,a.kt)("code",null,"0.5")),(0,a.kt)("td",{style:{textAlign:"center"}},"No"),(0,a.kt)("td",null,"The minimum value of the scaling level.")),(0,a.kt)("tr",null,(0,a.kt)("td",null,"scaleMax"),(0,a.kt)("td",null,(0,a.kt)("code",null,"number")),(0,a.kt)("td",{style:{textAlign:"center"}},(0,a.kt)("code",null,"10")),(0,a.kt)("td",{style:{textAlign:"center"}},"No"),(0,a.kt)("td",null,"The maximum value of the scaling level.")),(0,a.kt)("tr",null,(0,a.kt)("td",null,"scaleValue"),(0,a.kt)("td",null,(0,a.kt)("code",null,"number")),(0,a.kt)("td",{style:{textAlign:"center"}},(0,a.kt)("code",null,"1")),(0,a.kt)("td",{style:{textAlign:"center"}},"No"),(0,a.kt)("td",null,"The scale level. Its values range from 0.5 to 10.")),(0,a.kt)("tr",null,(0,a.kt)("td",null,"animation"),(0,a.kt)("td",null,(0,a.kt)("code",null,"boolean")),(0,a.kt)("td",{style:{textAlign:"center"}},(0,a.kt)("code",null,"true")),(0,a.kt)("td",{style:{textAlign:"center"}},"No"),(0,a.kt)("td",null,"Specifies whether to use animations.")),(0,a.kt)("tr",null,(0,a.kt)("td",null,"onChange"),(0,a.kt)("td",null,(0,a.kt)("code",null,"BaseEventOrigFunction<onChangeEventDeatil>")),(0,a.kt)("td",{style:{textAlign:"center"}}),(0,a.kt)("td",{style:{textAlign:"center"}},"No"),(0,a.kt)("td",null,"An event triggered during dragging.")),(0,a.kt)("tr",null,(0,a.kt)("td",null,"onScale"),(0,a.kt)("td",null,(0,a.kt)("code",null,"BaseEventOrigFunction<onScaleEventDeatil>")),(0,a.kt)("td",{style:{textAlign:"center"}}),(0,a.kt)("td",{style:{textAlign:"center"}},"No"),(0,a.kt)("td",null,"An event triggered during scaling.")),(0,a.kt)("tr",null,(0,a.kt)("td",null,"onHTouchMove"),(0,a.kt)("td",null,(0,a.kt)("code",null,"TouchEventFunction")),(0,a.kt)("td",{style:{textAlign:"center"}}),(0,a.kt)("td",{style:{textAlign:"center"}},"No"),(0,a.kt)("td",null,"An event triggered when the component is first touched by a finger and then moved in the horizontal direction. If this event is caught, it indicates that the touchmove event is also caught.")),(0,a.kt)("tr",null,(0,a.kt)("td",null,"onVTouchMove"),(0,a.kt)("td",null,(0,a.kt)("code",null,"TouchEventFunction")),(0,a.kt)("td",{style:{textAlign:"center"}}),(0,a.kt)("td",{style:{textAlign:"center"}},"No"),(0,a.kt)("td",null,"An event triggered when the component is first touched by a finger and then moved in the vertical direction. If this event is caught, it indicates that the touchmove event is also caught.")),(0,a.kt)("tr",null,(0,a.kt)("td",null,"onDragStart"),(0,a.kt)("td",null," "),(0,a.kt)("td",{style:{textAlign:"center"}}),(0,a.kt)("td",{style:{textAlign:"center"}},"No"),(0,a.kt)("td",null,"Triggered at the start of dragging")),(0,a.kt)("tr",null,(0,a.kt)("td",null,"onDragEnd"),(0,a.kt)("td",null," "),(0,a.kt)("td",{style:{textAlign:"center"}}),(0,a.kt)("td",{style:{textAlign:"center"}},"No"),(0,a.kt)("td",null,"Triggered at the end of dragging")))),(0,a.kt)("h3",{id:"property-support"},"Property Support"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"center"},"Property"),(0,a.kt)("th",{parentName:"tr",align:"center"},"WeChat Mini-Program"),(0,a.kt)("th",{parentName:"tr",align:"center"},"H5"),(0,a.kt)("th",{parentName:"tr",align:"center"},"React Native"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"center"},"MovableViewProps.direction"),(0,a.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,a.kt)("td",{parentName:"tr",align:"center"}),(0,a.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"center"},"MovableViewProps.inertia"),(0,a.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,a.kt)("td",{parentName:"tr",align:"center"}),(0,a.kt)("td",{parentName:"tr",align:"center"})),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"center"},"MovableViewProps.outOfBounds"),(0,a.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,a.kt)("td",{parentName:"tr",align:"center"}),(0,a.kt)("td",{parentName:"tr",align:"center"})),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"center"},"MovableViewProps.x"),(0,a.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,a.kt)("td",{parentName:"tr",align:"center"}),(0,a.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"center"},"MovableViewProps.y"),(0,a.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,a.kt)("td",{parentName:"tr",align:"center"}),(0,a.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"center"},"MovableViewProps.damping"),(0,a.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,a.kt)("td",{parentName:"tr",align:"center"}),(0,a.kt)("td",{parentName:"tr",align:"center"})),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"center"},"MovableViewProps.friction"),(0,a.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,a.kt)("td",{parentName:"tr",align:"center"}),(0,a.kt)("td",{parentName:"tr",align:"center"})),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"center"},"MovableViewProps.disabled"),(0,a.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,a.kt)("td",{parentName:"tr",align:"center"}),(0,a.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"center"},"MovableViewProps.scale"),(0,a.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,a.kt)("td",{parentName:"tr",align:"center"}),(0,a.kt)("td",{parentName:"tr",align:"center"})),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"center"},"MovableViewProps.scaleMin"),(0,a.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,a.kt)("td",{parentName:"tr",align:"center"}),(0,a.kt)("td",{parentName:"tr",align:"center"})),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"center"},"MovableViewProps.scaleMax"),(0,a.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,a.kt)("td",{parentName:"tr",align:"center"}),(0,a.kt)("td",{parentName:"tr",align:"center"})),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"center"},"MovableViewProps.scaleValue"),(0,a.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,a.kt)("td",{parentName:"tr",align:"center"}),(0,a.kt)("td",{parentName:"tr",align:"center"})),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"center"},"MovableViewProps.animation"),(0,a.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,a.kt)("td",{parentName:"tr",align:"center"}),(0,a.kt)("td",{parentName:"tr",align:"center"})),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"center"},"MovableViewProps.onChange"),(0,a.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,a.kt)("td",{parentName:"tr",align:"center"}),(0,a.kt)("td",{parentName:"tr",align:"center"})),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"center"},"MovableViewProps.onScale"),(0,a.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,a.kt)("td",{parentName:"tr",align:"center"}),(0,a.kt)("td",{parentName:"tr",align:"center"})),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"center"},"MovableViewProps.onHTouchMove"),(0,a.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,a.kt)("td",{parentName:"tr",align:"center"}),(0,a.kt)("td",{parentName:"tr",align:"center"})),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"center"},"MovableViewProps.onVTouchMove"),(0,a.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,a.kt)("td",{parentName:"tr",align:"center"}),(0,a.kt)("td",{parentName:"tr",align:"center"})),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"center"},"MovableViewProps.onDragStart"),(0,a.kt)("td",{parentName:"tr",align:"center"}),(0,a.kt)("td",{parentName:"tr",align:"center"}),(0,a.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"center"},"MovableViewProps.onDragEnd"),(0,a.kt)("td",{parentName:"tr",align:"center"}),(0,a.kt)("td",{parentName:"tr",align:"center"}),(0,a.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f")))),(0,a.kt)("h3",{id:"tchangesource"},"TChangeSource"),(0,a.kt)("p",null,"Events triggered during dragging."),(0,a.kt)("table",null,(0,a.kt)("thead",null,(0,a.kt)("tr",null,(0,a.kt)("th",null,"Param"),(0,a.kt)("th",null,"Description"))),(0,a.kt)("tbody",null,(0,a.kt)("tr",null,(0,a.kt)("td",null,"touch"),(0,a.kt)("td",null,"Dragging")),(0,a.kt)("tr",null,(0,a.kt)("td",null,"touch-out-of-bounds"),(0,a.kt)("td",null,"The movable range is exceeded.")),(0,a.kt)("tr",null,(0,a.kt)("td",null,"out-of-bounds"),(0,a.kt)("td",null,"Pullback after the movable range is exceeded.")),(0,a.kt)("tr",null,(0,a.kt)("td",null,"friction"),(0,a.kt)("td",null,"Inertia")),(0,a.kt)("tr",null,(0,a.kt)("td",null),(0,a.kt)("td",null,"setData")))),(0,a.kt)("h3",{id:"onchangeeventdeatil"},"onChangeEventDeatil"),(0,a.kt)("table",null,(0,a.kt)("thead",null,(0,a.kt)("tr",null,(0,a.kt)("th",null,"Param"),(0,a.kt)("th",null,"Type"),(0,a.kt)("th",null,"Description"))),(0,a.kt)("tbody",null,(0,a.kt)("tr",null,(0,a.kt)("td",null,"x"),(0,a.kt)("td",null,(0,a.kt)("code",null,"number")),(0,a.kt)("td",null,"X coordinate")),(0,a.kt)("tr",null,(0,a.kt)("td",null,"y"),(0,a.kt)("td",null,(0,a.kt)("code",null,"number")),(0,a.kt)("td",null,"Y coordinate")),(0,a.kt)("tr",null,(0,a.kt)("td",null,"source"),(0,a.kt)("td",null,(0,a.kt)("code",null,'"" | "touch" | "touch-out-of-bounds" | "out-of-bounds" | "friction"')),(0,a.kt)("td",null,"Trigger events")))),(0,a.kt)("h3",{id:"onscaleeventdeatil"},"onScaleEventDeatil"),(0,a.kt)("table",null,(0,a.kt)("thead",null,(0,a.kt)("tr",null,(0,a.kt)("th",null,"Param"),(0,a.kt)("th",null,"Type"),(0,a.kt)("th",null,"Description"))),(0,a.kt)("tbody",null,(0,a.kt)("tr",null,(0,a.kt)("td",null,"x"),(0,a.kt)("td",null,(0,a.kt)("code",null,"number")),(0,a.kt)("td",null,"X coordinate")),(0,a.kt)("tr",null,(0,a.kt)("td",null,"y"),(0,a.kt)("td",null,(0,a.kt)("code",null,"number")),(0,a.kt)("td",null,"Y coordinate")),(0,a.kt)("tr",null,(0,a.kt)("td",null,"scale"),(0,a.kt)("td",null,(0,a.kt)("code",null,"number")),(0,a.kt)("td",null,"Scaling number")))),(0,a.kt)("h2",{id:"api-support"},"API Support"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"center"},"API"),(0,a.kt)("th",{parentName:"tr",align:"center"},"WeChat Mini-Program"),(0,a.kt)("th",{parentName:"tr",align:"center"},"Baidu Smart-Program"),(0,a.kt)("th",{parentName:"tr",align:"center"},"Alipay Mini-Program"),(0,a.kt)("th",{parentName:"tr",align:"center"},"H5"),(0,a.kt)("th",{parentName:"tr",align:"center"},"React Native"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"center"},"MovableView"),(0,a.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,a.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,a.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,a.kt)("td",{parentName:"tr",align:"center"}),(0,a.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f")))))}m.isMDXComponent=!0}}]);