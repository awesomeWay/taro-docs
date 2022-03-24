"use strict";(self.webpackChunktaro_docs=self.webpackChunktaro_docs||[]).push([[56089],{3905:function(e,n,t){t.d(n,{Zo:function(){return d},kt:function(){return g}});var o=t(67294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,o)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,o,a=function(e,n){if(null==e)return{};var t,o,a={},r=Object.keys(e);for(o=0;o<r.length;o++)t=r[o],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)t=r[o],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var s=o.createContext({}),p=function(e){var n=o.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},d=function(e){var n=p(e.components);return o.createElement(s.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return o.createElement(o.Fragment,{},n)}},c=o.forwardRef((function(e,n){var t=e.components,a=e.mdxType,r=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),c=p(t),g=a,m=c["".concat(s,".").concat(g)]||c[g]||u[g]||r;return t?o.createElement(m,i(i({ref:n},d),{},{components:t})):o.createElement(m,i({ref:n},d))}));function g(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var r=t.length,i=new Array(r);i[0]=c;var l={};for(var s in n)hasOwnProperty.call(n,s)&&(l[s]=n[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var p=2;p<r;p++)i[p]=t[p];return o.createElement.apply(null,i)}return o.createElement.apply(null,t)}c.displayName="MDXCreateElement"},79799:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return l},contentTitle:function(){return s},metadata:function(){return p},toc:function(){return d},default:function(){return c}});var o=t(83117),a=t(80102),r=(t(67294),t(3905)),i=["components"],l={title:"Single-step Debugging Configuration"},s=void 0,p={unversionedId:"debug-config",id:"version-3.x/debug-config",title:"Single-step Debugging Configuration",description:"With the cross-platform code single-step debugging capability provided by VSCode, we can greatly improve the speed of application development based on the Taro development framework, and focus on reducing the complexity of configuration for Windows platform as more mature tools are already available for other platforms.",source:"@site/i18n/en/docusaurus-plugin-content-docs/version-3.x/debug-config.md",sourceDirName:".",slug:"/debug-config",permalink:"/taro/en/docs/debug-config",editUrl:"https://github.com/nervjs/taro-docs/edit/docs/versioned_docs/version-3.x/debug-config.md",tags:[],version:"3.x",frontMatter:{title:"Single-step Debugging Configuration"},sidebar:"docs",previous:{title:"Taro Repository Overview",permalink:"/taro/en/docs/codebase-overview"},next:{title:"Implementation Details",permalink:"/taro/en/docs/implement-note"}},d=[{value:"\u4e00\u3001Development Environment Setup",id:"\u4e00development-environment-setup",children:[{value:"1. Install Node.js",id:"1-install-nodejs",children:[],level:4},{value:"2. Install VSCode",id:"2-install-vscode",children:[],level:4},{value:"3. Taro Source Code Download",id:"3-taro-source-code-download",children:[],level:4},{value:"4. Global installation of Node-sass, Lerna and Rollup",id:"4-global-installation-of-node-sass-lerna-and-rollup",children:[],level:4},{value:"5. Source code Dependency Installation",id:"5-source-code-dependency-installation",children:[],level:4}],level:2},{value:"\u4e8c\u3001CLI Debugging",id:"\u4e8ccli-debugging",children:[{value:"1. Configure VSCode Debugging Parameters",id:"1-configure-vscode-debugging-parameters",children:[{value:"taro-build Debugging",id:"taro-build-debugging",children:[],level:5},{value:"taro-init Debugging",id:"taro-init-debugging",children:[],level:5}],level:4},{value:"2. Compiling Subpackages",id:"2-compiling-subpackages",children:[],level:4},{value:"3.Links to unpublished libraries",id:"3links-to-unpublished-libraries",children:[],level:4},{value:"4.Start up debugging",id:"4start-up-debugging",children:[],level:4}],level:2}],u={toc:d};function c(e){var n=e.components,t=(0,a.Z)(e,i);return(0,r.kt)("wrapper",(0,o.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"With the cross-platform code single-step debugging capability provided by ",(0,r.kt)("inlineCode",{parentName:"p"},"VSCode"),", we can greatly improve the speed of application development based on the ",(0,r.kt)("inlineCode",{parentName:"p"},"Taro")," development framework, and focus on reducing the complexity of configuration for Windows platform as more mature tools are already available for other platforms.")),(0,r.kt)("h2",{id:"\u4e00development-environment-setup"},"\u4e00\u3001Development Environment Setup"),(0,r.kt)("p",null,"First, prepare the basic development environment for ",(0,r.kt)("inlineCode",{parentName:"p"},"Taro")," on Windows, as follows (existing development environments can be skipped)."),(0,r.kt)("h4",{id:"1-install-nodejs"},"1. Install Node.js"),(0,r.kt)("p",null,"It is recommended to install ",(0,r.kt)("inlineCode",{parentName:"p"},"10.15")," or above,  download ",(0,r.kt)("a",{parentName:"p",href:"https://nodejs.org/dist/v12.14.0/node-v12.14.0-x64.msi",title:" node.js"},"Node.js")),(0,r.kt)("h4",{id:"2-install-vscode"},"2. Install VSCode"),(0,r.kt)("p",null,"After installing the latest ",(0,r.kt)("inlineCode",{parentName:"p"},"VSCode"),", it is recommended to install the following plugins:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"ESlint")," - Code Specification"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"TSlint")," - syntax checking")),(0,r.kt)("h4",{id:"3-taro-source-code-download"},"3. Taro Source Code Download"),(0,r.kt)("p",null,"Download: ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/NervJS/taro.git",title:"Taro"},"Taro"),", Default is 2.x branch, if you want to debug Taro Next, please switch to ",(0,r.kt)("strong",{parentName:"p"},"next")," branch first."),(0,r.kt)("h4",{id:"4-global-installation-of-node-sass-lerna-and-rollup"},"4. Global installation of Node-sass, Lerna and Rollup"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"npm i -g node-sass --sass_binary_site=https://npm.taobao.org/mirrors/node_sass/\nyarn global add lerna\nyarn global add rollup\n")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"}," It is recommended to install Node-sass in advance to circumvent any possible abnormal errors.")),(0,r.kt)("h4",{id:"5-source-code-dependency-installation"},"5. Source code Dependency Installation"),(0,r.kt)("p",null,"1.Use ",(0,r.kt)("inlineCode",{parentName:"p"},"VSCode")," to open the ",(0,r.kt)("inlineCode",{parentName:"p"},"Taro")," source directory, and execute ",(0,r.kt)("inlineCode",{parentName:"p"},"yarn")," in the root directory to install the dependencies required for the project (the first installation will take a long time, please be patient)"),(0,r.kt)("p",null,"2.After ",(0,r.kt)("inlineCode",{parentName:"p"},"yarn")," finishes executing, run ",(0,r.kt)("inlineCode",{parentName:"p"},"yarn run bootstrap")," to install dependencies for the subpackages"),(0,r.kt)("p",null,"3.Run ",(0,r.kt)("inlineCode",{parentName:"p"},"yarn build")," to compile all modules"),(0,r.kt)("h2",{id:"\u4e8ccli-debugging"},"\u4e8c\u3001CLI Debugging"),(0,r.kt)("h4",{id:"1-configure-vscode-debugging-parameters"},"1. Configure VSCode Debugging Parameters"),(0,r.kt)("p",null,"Open the ",(0,r.kt)("strong",{parentName:"p"},".vscode")," folder in the root of the Taro source code in VSCode and edit ",(0,r.kt)("strong",{parentName:"p"},"launch.json"),"."),(0,r.kt)("p",null,"The launch.json has the following preset configuration."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json",metastring:'title="launch.json"',title:'"launch.json"'},'{\n  // ...\n  "configurations": [\n    //...\n    {\n      "type": "node",\n      "request": "launch",\n      "name": "CLI debug",\n      "program": "${workspaceFolder}/packages/taro-cli/bin/taro",\n      // "cwd": "${project absolute path}",\n      // "args": [\n      //   "build",\n      //   "--type",\n      //   "weapp",\n      //   "--watch"\n      // ],\n      "skipFiles": [\n        "<node_internals>/**"\n      ]\n    }\n  ]\n}\n')),(0,r.kt)("p",null,"Modification steps:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"modify ",(0,r.kt)("strong",{parentName:"li"},"cwd")," option to be the target working directory to be debugged"),(0,r.kt)("li",{parentName:"ol"},"modify args to be the parameter of the command to be debugged")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"The detailed configuration of launch.json can be found in ",(0,r.kt)("a",{parentName:"p",href:"https://code.visualstudio.com/docs/editor/debugging#_launch-configurations"},"VSCode Documentation"))),(0,r.kt)("p",null,"Example\uff1a"),(0,r.kt)("h5",{id:"taro-build-debugging"},"taro-build Debugging"),(0,r.kt)("p",null,"Suppose you need to debug the ",(0,r.kt)("inlineCode",{parentName:"p"},"taro build --weapp --watch")," command for the test project."),(0,r.kt)("p",null,"You can configure launch.json like this."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json",metastring:'title="launch.json"',title:'"launch.json"'},'{\n  // ...\n  "configurations": [\n    //...\n    {\n      // ...\n      "cwd": "/Users/User/Desktop/test",\n      "args": [\n        "build",\n        "--type",\n        "weapp",\n        "--watch"\n      ]\n    }\n  ]\n}\n')),(0,r.kt)("h5",{id:"taro-init-debugging"},"taro-init Debugging"),(0,r.kt)("p",null,"Suppose you need to debug the ",(0,r.kt)("inlineCode",{parentName:"p"},"taro init projectName")," command for the test project."),(0,r.kt)("p",null,"You can configure launch.json like this:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json",metastring:'title="launch.json"',title:'"launch.json"'},'{\n  // ...\n  "configurations": [\n    //...\n    {\n      // ...\n      "cwd": "/Users/User/Desktop",\n      "args": [\n        "init",\n        "projectName"\n      ]\n    }\n  ]\n}\n')),(0,r.kt)("h4",{id:"2-compiling-subpackages"},"2. Compiling Subpackages"),(0,r.kt)("p",null,"When debugging a subpackage, if you want to debug the modified code, go to the root of the corresponding subpackage and turn on watch mode compilation."),(0,r.kt)("p",null,"For example, to debug ",(0,r.kt)("inlineCode",{parentName:"p"},"@tarojs/mini-runner"),", first go to ",(0,r.kt)("inlineCode",{parentName:"p"},"packages/mini-runner/"),", and then run ",(0,r.kt)("inlineCode",{parentName:"p"},"npm run dev")," in this directory (the compile command may vary by subpackage, see the ",(0,r.kt)("strong",{parentName:"p"},"package.json")," of each subpackage for details). This will allow us to debug the code after each change."),(0,r.kt)("h4",{id:"3links-to-unpublished-libraries"},"3.Links to unpublished libraries"),(0,r.kt)("p",null,"If the currently developed subpackage depends on other subpackages, you can link the other subpackages to use them. The ",(0,r.kt)("inlineCode",{parentName:"p"},"yarn run bootstrap")," command introduced in ",(0,r.kt)("a",{parentName:"p",href:"./debug-config#%E5%BC%80%E5%8F%91%E7%8E%AF%E5%A2%83%E6%90%AD%E5%BB%BA"},"Development Environment Setup")," already creates soft connections for all subpackages."),(0,r.kt)("p",null,"If you need to add other subpackages as dependencies for the current subpackage, you can execute ",(0,r.kt)("inlineCode",{parentName:"p"},"lerna add [package] --scope=[target] [--dev]")," in the Taro source root, after which lerna will automatically create the soft chain."),(0,r.kt)("p",null,"example\uff1a  ",(0,r.kt)("inlineCode",{parentName:"p"},"@tarojs/cli")," add ",(0,r.kt)("inlineCode",{parentName:"p"},"@tarojs/webpack-runner")," as devdependencies\uff1a"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"lerna add @tarojs/webpack-runner --scope=@tarojs/cli --dev")),(0,r.kt)("p",null,"Alternatively, if the softlink fails (e.g. ",(0,r.kt)("inlineCode",{parentName:"p"},"yarn add")," is executed in a subpackage), you can use the ",(0,r.kt)("inlineCode",{parentName:"p"},"lerna link")," command to softlink again."),(0,r.kt)("h4",{id:"4start-up-debugging"},"4.Start up debugging"),(0,r.kt)("p",null,"You can start single-step debugging by following the diagram below, please refer to VSCode documentation for detailed debugging operation."),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://storage.jd.com/cjj-pub-images/WX20200602-221337.png",alt:null})),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Currently, subpackages of the Taro project are generally compiled with ",(0,r.kt)("inlineCode",{parentName:"p"},"source-map"),", so it is usually possible to use breakpoints directly in the source code location. If some packages are not compiled with ",(0,r.kt)("inlineCode",{parentName:"p"},"source-map")," enabled, you can enable it manually and submit ",(0,r.kt)("inlineCode",{parentName:"p"},"Pull Requests"),".")))}c.isMDXComponent=!0}}]);