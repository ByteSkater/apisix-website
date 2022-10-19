"use strict";(self.webpackChunkdoc=self.webpackChunkdoc||[]).push([[49353],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>g});var r=n(67294);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t){if(null==e)return{};var n,r,l=function(e,t){if(null==e)return{};var n,r,l={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var p=r.createContext({}),o=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},s=function(e){var t=o(e.components);return r.createElement(p.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,l=e.mdxType,i=e.originalType,p=e.parentName,s=u(e,["components","mdxType","originalType","parentName"]),d=o(n),g=l,m=d["".concat(p,".").concat(g)]||d[g]||c[g]||i;return n?r.createElement(m,a(a({ref:t},s),{},{components:n})):r.createElement(m,a({ref:t},s))}));function g(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var i=n.length,a=new Array(i);a[0]=d;var u={};for(var p in t)hasOwnProperty.call(t,p)&&(u[p]=t[p]);u.originalType=e,u.mdxType="string"==typeof e?e:l,a[1]=u;for(var o=2;o<i;o++)a[o]=n[o];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},60540:(e,t,n)=>{n.r(t),n.d(t,{contentTitle:()=>a,default:()=>s,frontMatter:()=>i,metadata:()=>u,toc:()=>p});var r=n(87462),l=(n(67294),n(3905));const i={title:"ext-plugin-pre-req"},a=void 0,u={unversionedId:"plugins/ext-plugin-pre-req",id:"version-2.13/plugins/ext-plugin-pre-req",isDocsHomePage:!1,title:"ext-plugin-pre-req",description:"The ext-plugin-pre-req runs specific external plugins in the plugin runner, before\nexecuting most of the builtin Lua plugins.",source:"@site/docs-apisix_versioned_docs/version-2.13/plugins/ext-plugin-pre-req.md",sourceDirName:"plugins",slug:"/plugins/ext-plugin-pre-req",permalink:"/docs/apisix/2.13/plugins/ext-plugin-pre-req",editUrl:null,tags:[],version:"2.13",frontMatter:{title:"ext-plugin-pre-req"},sidebar:"version-2.13/docs",previous:{title:"server-info",permalink:"/docs/apisix/2.13/plugins/server-info"},next:{title:"ext-plugin-post-req",permalink:"/docs/apisix/2.13/plugins/ext-plugin-post-req"}},p=[{value:"Description",id:"description",children:[]},{value:"Attributes",id:"attributes",children:[]},{value:"How To Enable",id:"how-to-enable",children:[]},{value:"Test Plugin",id:"test-plugin",children:[]},{value:"Disable Plugin",id:"disable-plugin",children:[]}],o={toc:p};function s(e){let{components:t,...n}=e;return(0,l.kt)("wrapper",(0,r.Z)({},o,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h2",{id:"description"},"Description"),(0,l.kt)("p",null,"The ",(0,l.kt)("inlineCode",{parentName:"p"},"ext-plugin-pre-req")," runs specific external plugins in the plugin runner, before\nexecuting most of the builtin Lua plugins."),(0,l.kt)("p",null,"To know what is the plugin runner, see ",(0,l.kt)("a",{parentName:"p",href:"/docs/apisix/2.13/external-plugin"},"external plugin")," section."),(0,l.kt)("p",null,"The result of external plugins execution will affect the behavior of the current request."),(0,l.kt)("h2",{id:"attributes"},"Attributes"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Name"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Requirement"),(0,l.kt)("th",{parentName:"tr",align:null},"Default"),(0,l.kt)("th",{parentName:"tr",align:null},"Valid"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"conf"),(0,l.kt)("td",{parentName:"tr",align:null},"array"),(0,l.kt)("td",{parentName:"tr",align:null},"optional"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},'[{"name": "ext-plugin-A", "value": "{\\"enable\\":\\"feature\\"}"}]'),(0,l.kt)("td",{parentName:"tr",align:null},"The plugins list which will be executed at the plugin runner with their configuration")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"allow_degradation"),(0,l.kt)("td",{parentName:"tr",align:null},"boolean"),(0,l.kt)("td",{parentName:"tr",align:null},"optional"),(0,l.kt)("td",{parentName:"tr",align:null},"false"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"Whether to enable plugin degradation when the plugin runner is temporarily unavailable. Allow requests to continue when the value is set to true, default false.")))),(0,l.kt)("h2",{id:"how-to-enable"},"How To Enable"),(0,l.kt)("p",null,"Here's an example, enable this plugin on the specified route:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},'curl -i http://127.0.0.1:9080/apisix/admin/routes/1  -H \'X-API-KEY: edd1c9f034335f136f87ad84b625c8f1\' -X PUT -d \'\n{\n    "uri": "/index.html",\n    "plugins": {\n        "ext-plugin-pre-req": {\n            "conf" : [\n                {"name": "ext-plugin-A", "value": "{\\"enable\\":\\"feature\\"}"}\n            ]\n    },\n    "upstream": {\n        "type": "roundrobin",\n        "nodes": {\n            "127.0.0.1:1980": 1\n        }\n    }\n}\'\n')),(0,l.kt)("h2",{id:"test-plugin"},"Test Plugin"),(0,l.kt)("p",null,"Use curl to access:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"curl -i http://127.0.0.1:9080/index.html\n")),(0,l.kt)("p",null,"You will see the configured plugin runner will be hit and plugin ",(0,l.kt)("inlineCode",{parentName:"p"},"ext-plugin-A"),"\nis executed at that side."),(0,l.kt)("h2",{id:"disable-plugin"},"Disable Plugin"),(0,l.kt)("p",null,"When you want to disable this plugin, it is very simple,\nyou can delete the corresponding json configuration in the plugin configuration,\nno need to restart the service, it will take effect immediately:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},'curl http://127.0.0.1:9080/apisix/admin/routes/1  -H \'X-API-KEY: edd1c9f034335f136f87ad84b625c8f1\' -X PUT -d \'\n{\n    "uri": "/index.html",\n    "upstream": {\n        "type": "roundrobin",\n        "nodes": {\n            "127.0.0.1:1980": 1\n        }\n    }\n}\'\n')),(0,l.kt)("p",null,"This plugin has been disabled now. It works for other plugins."))}s.isMDXComponent=!0}}]);