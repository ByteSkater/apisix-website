"use strict";(self.webpackChunkdoc=self.webpackChunkdoc||[]).push([[37733],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>m});var a=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},c=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,l=e.originalType,s=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),u=p(n),m=i,h=u["".concat(s,".").concat(m)]||u[m]||d[m]||l;return n?a.createElement(h,r(r({ref:t},c),{},{components:n})):a.createElement(h,r({ref:t},c))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var l=n.length,r=new Array(l);r[0]=u;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:i,r[1]=o;for(var p=2;p<l;p++)r[p]=n[p];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},58215:(e,t,n)=>{n.d(t,{Z:()=>i});var a=n(67294);const i=function(e){let{children:t,hidden:n,className:i}=e;return a.createElement("div",{role:"tabpanel",hidden:n,className:i},t)}},55064:(e,t,n)=>{n.d(t,{Z:()=>p});var a=n(67294),i=n(79443);const l=function(){const e=(0,a.useContext)(i.Z);if(null==e)throw new Error('"useUserPreferencesContext" is used outside of "Layout" component.');return e};var r=n(86010);const o="tabItem_vU9c",s="tabItemActive_cw6a";const p=function(e){var t;const{lazy:n,block:i,defaultValue:p,values:c,groupId:d,className:u}=e,m=a.Children.toArray(e.children),h=null!=c?c:m.map((e=>({value:e.props.value,label:e.props.label}))),g=null!=p?p:null==(t=m.find((e=>e.props.default)))?void 0:t.props.value,{tabGroupChoices:k,setTabGroupChoices:N}=l(),[f,v]=(0,a.useState)(g),b=[];if(null!=d){const e=k[d];null!=e&&e!==f&&h.some((t=>t.value===e))&&v(e)}const I=e=>{const t=e.currentTarget,n=b.indexOf(t),a=h[n].value;v(a),null!=d&&(N(d,a),setTimeout((()=>{(function(e){const{top:t,left:n,bottom:a,right:i}=e.getBoundingClientRect(),{innerHeight:l,innerWidth:r}=window;return t>=0&&i<=r&&a<=l&&n>=0})(t)||(t.scrollIntoView({block:"center",behavior:"smooth"}),t.classList.add(s),setTimeout((()=>t.classList.remove(s)),2e3))}),150))},y=e=>{var t;let n=null;switch(e.key){case"ArrowRight":{const t=b.indexOf(e.target)+1;n=b[t]||b[0];break}case"ArrowLeft":{const t=b.indexOf(e.target)-1;n=b[t]||b[b.length-1];break}}null==(t=n)||t.focus()};return a.createElement("div",{className:"tabs-container"},a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.Z)("tabs",{"tabs--block":i},u)},h.map((e=>{let{value:t,label:n}=e;return a.createElement("li",{role:"tab",tabIndex:f===t?0:-1,"aria-selected":f===t,className:(0,r.Z)("tabs__item",o,{"tabs__item--active":f===t}),key:t,ref:e=>b.push(e),onKeyDown:y,onFocus:I,onClick:I},null!=n?n:t)}))),n?(0,a.cloneElement)(m.filter((e=>e.props.value===f))[0],{className:"margin-vert--md"}):a.createElement("div",{className:"margin-vert--md"},m.map(((e,t)=>(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==f})))))}},79443:(e,t,n)=>{n.d(t,{Z:()=>a});const a=(0,n(67294).createContext)(void 0)},65236:(e,t,n)=>{n.r(t),n.d(t,{contentTitle:()=>s,default:()=>u,frontMatter:()=>o,metadata:()=>p,toc:()=>c});var a=n(87462),i=(n(67294),n(3905)),l=n(55064),r=n(58215);const o={id:"building-apisix",title:"Building APISIX from source",keywords:["API gateway","Apache APISIX","Code Contribution","Building APISIX"],description:"Guide for building and running APISIX locally for development."},s=void 0,p={unversionedId:"building-apisix",id:"version-2.15/building-apisix",isDocsHomePage:!1,title:"Building APISIX from source",description:"Guide for building and running APISIX locally for development.",source:"@site/docs-apisix_versioned_docs/version-2.15/building-apisix.md",sourceDirName:".",slug:"/building-apisix",permalink:"/docs/apisix/2.15/building-apisix",editUrl:null,tags:[],version:"2.15",frontMatter:{id:"building-apisix",title:"Building APISIX from source",keywords:["API gateway","Apache APISIX","Code Contribution","Building APISIX"],description:"Guide for building and running APISIX locally for development."},sidebar:"version-2.15/docs",previous:{title:"Control API",permalink:"/docs/apisix/2.15/control-api"},next:{title:"FAQ",permalink:"/docs/apisix/2.15/FAQ"}},c=[{value:"Building APISIX from source",id:"building-apisix-from-source",children:[]},{value:"Installing etcd",id:"installing-etcd",children:[]},{value:"Running and managing APISIX server",id:"running-and-managing-apisix-server",children:[]},{value:"Building runtime for APISIX",id:"building-runtime-for-apisix",children:[]},{value:"Running tests",id:"running-tests",children:[{value:"Troubleshooting",id:"troubleshooting",children:[]}]}],d={toc:c};function u(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"If you are looking to contribute to APISIX or setup a development environment, this guide is for you."),(0,i.kt)("p",null,"If you are looking to install and run APISIX, check out the ",(0,i.kt)("a",{parentName:"p",href:"/docs/apisix/2.15/installation-guide"},"Installation")," docs."),(0,i.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"If you want to build and package APISIX for a specific platform, see ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/api7/apisix-build-tools"},"apisix-build-tools"),"."))),(0,i.kt)("h2",{id:"building-apisix-from-source"},"Building APISIX from source"),(0,i.kt)("p",null,"To start, you have to install some dependencies. APISIX provides a handy script to get these installed:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"curl https://raw.githubusercontent.com/apache/apisix/master/utils/install-dependencies.sh -sL | bash -\n")),(0,i.kt)("p",null,"Then, create a directory and set the environment variable ",(0,i.kt)("inlineCode",{parentName:"p"},"APISIX_VERSION"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"APISIX_VERSION='2.15.0'\nmkdir apisix-${APISIX_VERSION}\n")),(0,i.kt)("p",null,"You can now download the APISIX source code by running the command below:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"wget https://downloads.apache.org/apisix/${APISIX_VERSION}/apache-apisix-${APISIX_VERSION}-src.tgz\n")),(0,i.kt)("p",null,"You can also download the source package from the ",(0,i.kt)("a",{parentName:"p",href:"https://apisix.apache.org/downloads/"},"Downloads page"),". You will also find source packages for APISIX Dashboard and APISIX Ingress Controller."),(0,i.kt)("p",null,"After you have downloaded the package, you can extract the files to the folder created previously:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"tar zxvf apache-apisix-${APISIX_VERSION}-src.tgz -C apisix-${APISIX_VERSION}\n")),(0,i.kt)("p",null,"Now, navigate to the directory, create dependencies, and install APISIX as shown below:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"cd apisix-${APISIX_VERSION}\nmake deps\nmake install\n")),(0,i.kt)("p",null,"This will install the runtime dependent Lua libraries and the ",(0,i.kt)("inlineCode",{parentName:"p"},"apisix")," command."),(0,i.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"If you get an error message like ",(0,i.kt)("inlineCode",{parentName:"p"},"Could not find header file for LDAP/PCRE/openssl")," while running ",(0,i.kt)("inlineCode",{parentName:"p"},"make deps"),", use this solution."),(0,i.kt)("p",{parentName:"div"},(0,i.kt)("inlineCode",{parentName:"p"},"luarocks")," supports custom compile-time dependencies (See: ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/luarocks/luarocks/wiki/Config-file-format"},"Config file format"),"). You can use a third-party tool to install the missing packages and add its installation directory to the ",(0,i.kt)("inlineCode",{parentName:"p"},"luarocks"),"' variables table. This method works on macOS, Ubuntu, CentOS, and other similar operating systems."),(0,i.kt)("p",{parentName:"div"},"The solution below is for macOS but it works similarly for other operating systems:"),(0,i.kt)("ol",{parentName:"div"},(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Install ",(0,i.kt)("inlineCode",{parentName:"p"},"openldap")," by running:"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"brew install openldap\n"))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Locate the installation directory by running:"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"brew --prefix openldap\n"))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Add this path to the project configuration file by any of the two methods shown below:"),(0,i.kt)("ol",{parentName:"li"},(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"You can use the ",(0,i.kt)("inlineCode",{parentName:"p"},"luarocks config")," command to set ",(0,i.kt)("inlineCode",{parentName:"p"},"LDAP_DIR"),":"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"luarocks config variables.LDAP_DIR /opt/homebrew/cellar/openldap/2.6.1\n"))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"You can also change the default configuration file of ",(0,i.kt)("inlineCode",{parentName:"p"},"luarocks"),". Open the file ",(0,i.kt)("inlineCode",{parentName:"p"},"~/.luaorcks/config-5.1.lua")," and add the following:"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-shell"},'variables = { LDAP_DIR = "/opt/homebrew/cellar/openldap/2.6.1", LDAP_INCDIR = "/opt/homebrew/cellar/openldap/2.6.1/include", }\n')),(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"/opt/homebrew/cellar/openldap/")," is default path ",(0,i.kt)("inlineCode",{parentName:"p"},"openldap")," is installed on Apple Silicon macOS machines. For Intel machines, the default path is  ",(0,i.kt)("inlineCode",{parentName:"p"},"/usr/local/opt/openldap/"),"."))))))),(0,i.kt)("p",null,"To uninstall the APISIX runtime, run:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"make uninstall\nmake undeps\n")),(0,i.kt)("div",{className:"admonition admonition-danger alert alert--danger"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"}))),"danger")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"This operation will remove the files completely."))),(0,i.kt)("h2",{id:"installing-etcd"},"Installing etcd"),(0,i.kt)("p",null,"APISIX uses ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/etcd-io/etcd"},"etcd")," to save and synchronize configuration. Before running APISIX, you need to install etcd on your machine. Installation methods based on your operating system are mentioned below."),(0,i.kt)(l.Z,{groupId:"os",defaultValue:"linux",values:[{label:"Linux",value:"linux"},{label:"macOS",value:"mac"}],mdxType:"Tabs"},(0,i.kt)(r.Z,{value:"linux",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"ETCD_VERSION='3.4.18'\nwget https://github.com/etcd-io/etcd/releases/download/v${ETCD_VERSION}/etcd-v${ETCD_VERSION}-linux-amd64.tar.gz\ntar -xvf etcd-v${ETCD_VERSION}-linux-amd64.tar.gz && \\\n  cd etcd-v${ETCD_VERSION}-linux-amd64 && \\\n  sudo cp -a etcd etcdctl /usr/bin/\nnohup etcd >/tmp/etcd.log 2>&1 &\n"))),(0,i.kt)(r.Z,{value:"mac",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"brew install etcd\nbrew services start etcd\n")))),(0,i.kt)("h2",{id:"running-and-managing-apisix-server"},"Running and managing APISIX server"),(0,i.kt)("p",null,"To initialize the configuration file, within the APISIX directory, run:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"apisix init\n")),(0,i.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"You can run ",(0,i.kt)("inlineCode",{parentName:"p"},"apisix help")," to see a list of available commands."))),(0,i.kt)("p",null,"You can then test the created configuration file by running:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"apisix test\n")),(0,i.kt)("p",null,"Finally, you can run the command below to start APISIX:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"apisix start\n")),(0,i.kt)("p",null,"To stop APISIX, you can use either the ",(0,i.kt)("inlineCode",{parentName:"p"},"quit")," or the ",(0,i.kt)("inlineCode",{parentName:"p"},"stop")," subcommand."),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"apisix quit")," will gracefully shutdown APISIX. It will ensure that all received requests are completed before stopping."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"apisix quit\n")),(0,i.kt)("p",null,"Where as, the ",(0,i.kt)("inlineCode",{parentName:"p"},"apisix stop")," command does a force shutdown and discards all pending requests."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"apisix stop\n")),(0,i.kt)("h2",{id:"building-runtime-for-apisix"},"Building runtime for APISIX"),(0,i.kt)("p",null,"Some features of APISIX requires additional Nginx modules to be introduced into OpenResty."),(0,i.kt)("p",null,"To use these features, you need to build a custom distribution of OpenResty (apisix-base). See ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/api7/apisix-build-tools"},"apisix-build-tools")," for setting up your build environment and building it."),(0,i.kt)("h2",{id:"running-tests"},"Running tests"),(0,i.kt)("p",null,"The steps below show how to run the test cases for APISIX:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Install ",(0,i.kt)("a",{parentName:"p",href:"https://metacpan.org/pod/App::cpanminus#INSTALLATION"},"cpanminus"),", the package manager for Perl.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Install the ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/openresty/test-nginx"},"test-nginx")," dependencies with ",(0,i.kt)("inlineCode",{parentName:"p"},"cpanm"),":"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"sudo cpanm --notest Test::Nginx IPC::Run > build.log 2>&1 || (cat build.log && exit 1)\n"))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Clone the test-nginx source code locally:"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"git clone https://github.com/openresty/test-nginx.git\n"))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Append the current directory to Perl's module directory by running:"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"export PERL5LIB=.:$PERL5LIB\n")),(0,i.kt)("p",{parentName:"li"},"You can specify the Nginx binary path by running:"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"TEST_NGINX_BINARY=/usr/local/bin/openresty prove -Itest-nginx/lib -r t\n"))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Run the tests by running:"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"make test\n")))),(0,i.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"Some tests rely on external services and system configuration modification. See ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/apache/apisix/blob/master/ci/linux_openresty_common_runner.sh"},"ci/linux_openresty_common_runner.sh")," for a complete test environment build."))),(0,i.kt)("h3",{id:"troubleshooting"},"Troubleshooting"),(0,i.kt)("p",null,"These are some common troubleshooting steps for running APISIX test cases."),(0,i.kt)("h4",{id:"configuring-nginx-path"},"Configuring Nginx path"),(0,i.kt)("p",null,"For the error ",(0,i.kt)("inlineCode",{parentName:"p"},'Error unknown directive "lua_package_path" in /API_ASPIX/apisix/t/servroot/conf/nginx.conf'),", ensure that OpenResty is set to the default Nginx and export the path as follows:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Linux default installation path:"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"export PATH=/usr/local/openresty/nginx/sbin:$PATH\n"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"macOS default installation path (view homebrew):"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"export PATH=/usr/local/opt/openresty/nginx/sbin:$PATH\n")))),(0,i.kt)("h4",{id:"running-a-specific-test-case"},"Running a specific test case"),(0,i.kt)("p",null,"To run a specific test case, use the command below:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"prove -Itest-nginx/lib -r t/plugin/openid-connect.t\n")),(0,i.kt)("p",null,"See ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/apache/apisix/blob/master/docs/en/latest/internal/testing-framework.md"},"testing framework")," for more details."))}u.isMDXComponent=!0},86010:(e,t,n)=>{function a(e){var t,n,i="";if("string"==typeof e||"number"==typeof e)i+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=a(e[t]))&&(i&&(i+=" "),i+=n);else for(t in e)e[t]&&(i&&(i+=" "),i+=t);return i}n.d(t,{Z:()=>i});const i=function(){for(var e,t,n=0,i="";n<arguments.length;)(e=arguments[n++])&&(t=a(e))&&(i&&(i+=" "),i+=t);return i}}}]);