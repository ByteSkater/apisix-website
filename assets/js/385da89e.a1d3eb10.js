"use strict";(self.webpackChunkdoc=self.webpackChunkdoc||[]).push([[25191],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),c=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=c(e.components);return a.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,s=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),u=c(n),m=r,h=u["".concat(s,".").concat(m)]||u[m]||d[m]||l;return n?a.createElement(h,i(i({ref:t},p),{},{components:n})):a.createElement(h,i({ref:t},p))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,i=new Array(l);i[0]=u;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:r,i[1]=o;for(var c=2;c<l;c++)i[c]=n[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},31865:(e,t,n)=>{n.r(t),n.d(t,{contentTitle:()=>i,default:()=>p,frontMatter:()=>l,metadata:()=>o,toc:()=>s});var a=n(87462),r=(n(67294),n(3905));const l={title:"FAQ"},i=void 0,o={unversionedId:"FAQ",id:"FAQ",isDocsHomePage:!1,title:"FAQ",description:"The Charts will install ETCD 3.4.14 by default. If you want to install Apache APISIX only, please set etcd.enabled=false and set etcd.host={http://your_etcd_address:2379}.",source:"@site/docs/apisix-helm-chart/FAQ.md",sourceDirName:".",slug:"/FAQ",permalink:"/docs/helm-chart/FAQ",editUrl:"https://github.com/apache/apisix-helm-chart/edit/master/docs/en/latest/FAQ.md",tags:[],version:"current",frontMatter:{title:"FAQ"},sidebar:"docs",previous:{title:"Apache APISIX Ingress Controller Helm Chart",permalink:"/docs/helm-chart/apisix-ingress-controller"}},s=[{value:"How to install APISIX only?",id:"how-to-install-apisix-only",children:[]},{value:"Why get 403 when I access Apache APISIX admin api?",id:"why-get-403-when-i-access-apache-apisix-admin-api",children:[]}],c={toc:s};function p(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h3",{id:"how-to-install-apisix-only"},"How to install APISIX only?"),(0,r.kt)("p",null,"The Charts will install ETCD ",(0,r.kt)("inlineCode",{parentName:"p"},"3.4.14")," by default. If you want to install Apache APISIX only, please set ",(0,r.kt)("inlineCode",{parentName:"p"},"etcd.enabled=false")," and set ",(0,r.kt)("inlineCode",{parentName:"p"},"etcd.host={http://your_etcd_address:2379}"),"."),(0,r.kt)("p",null,"Please use the FQDN or the IP address of the ETCD cluster."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"# if etcd export by kubernetes service need spell fully qualified name\nhelm install apisix apisix/apisix \\\n    --set etcd.enabled=false \\\n    --set etcd.host={http://etcd_node_1:2379\\,http://etcd_node_2:2379}\n")),(0,r.kt)("h3",{id:"why-get-403-when-i-access-apache-apisix-admin-api"},"Why get 403 when I access Apache APISIX admin api?"),(0,r.kt)("p",null,"We can define ",(0,r.kt)("inlineCode",{parentName:"p"},"admin.allow.ipList")," in CIDR."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},'helm install apisix apisix/apisix \\\n    --set admin.allow.ipList="10.22.100.12/8" \\\n    --set admin.allow.ipList="172.0.0.0/24"\n')),(0,r.kt)("p",null,"If you want to allow all IPs for a quick test, just set ",(0,r.kt)("inlineCode",{parentName:"p"},'admin.allow.ipList=""')),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},'helm install apisix apisix/apisix \\\n    --set admin.allow.ipList=""\n')))}p.isMDXComponent=!0}}]);