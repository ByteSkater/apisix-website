"use strict";(self.webpackChunkdoc=self.webpackChunkdoc||[]).push([[63955],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>c});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=r.createContext({}),p=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=p(e.components);return r.createElement(u.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,u=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),m=p(n),c=a,b=m["".concat(u,".").concat(c)]||m[c]||s[c]||l;return n?r.createElement(b,i(i({ref:t},d),{},{components:n})):r.createElement(b,i({ref:t},d))}));function c(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,i=new Array(l);i[0]=m;var o={};for(var u in t)hasOwnProperty.call(t,u)&&(o[u]=t[u]);o.originalType=e,o.mdxType="string"==typeof e?e:a,i[1]=o;for(var p=2;p<l;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},23746:(e,t,n)=>{n.r(t),n.d(t,{contentTitle:()=>i,default:()=>d,frontMatter:()=>l,metadata:()=>o,toc:()=>u});var r=n(87462),a=(n(67294),n(3905));const l={title:"dubbo-proxy"},i=void 0,o={unversionedId:"plugins/dubbo-proxy",id:"version-2.14/plugins/dubbo-proxy",isDocsHomePage:!1,title:"dubbo-proxy",description:"dubbo-proxy plugin allows you proxy HTTP request to dubbo.",source:"@site/docs-apisix_versioned_docs/version-2.14/plugins/dubbo-proxy.md",sourceDirName:"plugins",slug:"/plugins/dubbo-proxy",permalink:"/docs/apisix/2.14/plugins/dubbo-proxy",editUrl:null,tags:[],version:"2.14",frontMatter:{title:"dubbo-proxy"},sidebar:"version-2.14/docs",previous:{title:"aws-lambda",permalink:"/docs/apisix/2.14/plugins/aws-lambda"},next:{title:"mqtt-proxy",permalink:"/docs/apisix/2.14/plugins/mqtt-proxy"}},u=[{value:"Description",id:"description",children:[]},{value:"Requirement",id:"requirement",children:[]},{value:"Runtime Attributes",id:"runtime-attributes",children:[]},{value:"Static Attributes",id:"static-attributes",children:[]},{value:"How To Enable",id:"how-to-enable",children:[]},{value:"Test Plugin",id:"test-plugin",children:[]},{value:"Disable Plugin",id:"disable-plugin",children:[]}],p={toc:u};function d(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"description"},"Description"),(0,a.kt)("p",null,"dubbo-proxy plugin allows you proxy HTTP request to ",(0,a.kt)("a",{parentName:"p",href:"http://dubbo.apache.org"},(0,a.kt)("strong",{parentName:"a"},"dubbo")),"."),(0,a.kt)("h2",{id:"requirement"},"Requirement"),(0,a.kt)("p",null,"If you are using OpenResty, you need to build it with dubbo support, see ",(0,a.kt)("a",{parentName:"p",href:"/docs/apisix/2.14/how-to-build#step-6-build-openresty-for-apache-apisix"},"how to build")),(0,a.kt)("h2",{id:"runtime-attributes"},"Runtime Attributes"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Name"),(0,a.kt)("th",{parentName:"tr",align:null},"Type"),(0,a.kt)("th",{parentName:"tr",align:null},"Requirement"),(0,a.kt)("th",{parentName:"tr",align:null},"Default"),(0,a.kt)("th",{parentName:"tr",align:null},"Valid"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"service_name"),(0,a.kt)("td",{parentName:"tr",align:null},"string"),(0,a.kt)("td",{parentName:"tr",align:null},"required"),(0,a.kt)("td",{parentName:"tr",align:null}),(0,a.kt)("td",{parentName:"tr",align:null}),(0,a.kt)("td",{parentName:"tr",align:null},"dubbo provider service name")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"service_version"),(0,a.kt)("td",{parentName:"tr",align:null},"string"),(0,a.kt)("td",{parentName:"tr",align:null},"required"),(0,a.kt)("td",{parentName:"tr",align:null}),(0,a.kt)("td",{parentName:"tr",align:null}),(0,a.kt)("td",{parentName:"tr",align:null},"dubbo provider service version")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"method"),(0,a.kt)("td",{parentName:"tr",align:null},"string"),(0,a.kt)("td",{parentName:"tr",align:null},"optional"),(0,a.kt)("td",{parentName:"tr",align:null},"the path of uri"),(0,a.kt)("td",{parentName:"tr",align:null}),(0,a.kt)("td",{parentName:"tr",align:null},"dubbo provider service method")))),(0,a.kt)("h2",{id:"static-attributes"},"Static Attributes"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Name"),(0,a.kt)("th",{parentName:"tr",align:null},"Type"),(0,a.kt)("th",{parentName:"tr",align:null},"Requirement"),(0,a.kt)("th",{parentName:"tr",align:null},"Default"),(0,a.kt)("th",{parentName:"tr",align:null},"Valid"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"upstream_multiplex_count"),(0,a.kt)("td",{parentName:"tr",align:null},"number"),(0,a.kt)("td",{parentName:"tr",align:null},"required"),(0,a.kt)("td",{parentName:"tr",align:null},"32"),(0,a.kt)("td",{parentName:"tr",align:null},">= 1"),(0,a.kt)("td",{parentName:"tr",align:null},"the maximum number of multiplex requests in an upstream connection")))),(0,a.kt)("h2",{id:"how-to-enable"},"How To Enable"),(0,a.kt)("p",null,"First of all, enable the dubbo-proxy plugin in the ",(0,a.kt)("inlineCode",{parentName:"p"},"config.yaml"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"# Add this in config.yaml\nplugins:\n  - ... # plugin you need\n  - dubbo-proxy\n")),(0,a.kt)("p",null,"Then reload APISIX."),(0,a.kt)("p",null,"Here's an example, enable the dubbo-proxy plugin on the specified route:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},'curl http://127.0.0.1:9080/apisix/admin/upstreams/1  -H \'X-API-KEY: edd1c9f034335f136f87ad84b625c8f1\' -X PUT -d \'\n{\n    "nodes": {\n        "127.0.0.1:20880": 1\n    },\n    "type": "roundrobin"\n}\'\n\ncurl http://127.0.0.1:9080/apisix/admin/routes/1  -H \'X-API-KEY: edd1c9f034335f136f87ad84b625c8f1\' -X PUT -d \'\n{\n    "uris": [\n        "/hello"\n    ],\n    "plugins": {\n        "dubbo-proxy": {\n            "service_name": "org.apache.dubbo.sample.tengine.DemoService",\n            "service_version": "0.0.0",\n            "method": "tengineDubbo"\n        }\n    },\n    "upstream_id": 1\n}\'\n')),(0,a.kt)("h2",{id:"test-plugin"},"Test Plugin"),(0,a.kt)("p",null,"You can follow the ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/alibaba/tengine/tree/master/modules/mod_dubbo#quick-start"},"Quick Start")," example in Tengine and use the configuration above to test it.\nThey should provide the same result."),(0,a.kt)("p",null,"The returned data from upstream dubbo service must be a ",(0,a.kt)("inlineCode",{parentName:"p"},"Map<String, String>"),"."),(0,a.kt)("p",null,"If the returned data is"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "status": "200",\n    "header1": "value1",\n    "header2": "valu2",\n    "body": "blahblah"\n}\n')),(0,a.kt)("p",null,"the converted HTTP response will be"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'HTTP/1.1 200 OK # "status" will be the status code\n...\nheader1: value1\nheader2: value2\n...\n\nblahblah # "body" will be the body\n')),(0,a.kt)("h2",{id:"disable-plugin"},"Disable Plugin"),(0,a.kt)("p",null,"When you want to disable the dubbo-proxy plugin on a route/service, it is very simple,\nyou can delete the corresponding json configuration in the plugin configuration,\nno need to restart the service, it will take effect immediately:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},'$ curl http://127.0.0.1:9080/apisix/admin/routes/1  -H \'X-API-KEY: edd1c9f034335f136f87ad84b625c8f1\' -X PUT -d \'\n{\n    "methods": ["GET"],\n    "uris": [\n        "/hello"\n    ],\n    "plugins": {\n    },\n    "upstream_id": 1\n    }\n}\'\n')),(0,a.kt)("p",null,"The dubbo-proxy plugin has been disabled now. It works for other plugins."),(0,a.kt)("p",null,"If you want to disable dubbo-proxy plugin totally,\nyou need to comment out in the ",(0,a.kt)("inlineCode",{parentName:"p"},"config.yaml"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},"plugins:\n  - ... # plugin you need\n  #- dubbo-proxy\n")),(0,a.kt)("p",null,"And then reload APISIX."))}d.isMDXComponent=!0}}]);