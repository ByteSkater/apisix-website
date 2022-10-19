"use strict";(self.webpackChunkdoc=self.webpackChunkdoc||[]).push([[79089],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>c});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var u=a.createContext({}),s=function(e){var t=a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=s(e.components);return a.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,u=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),m=s(n),c=r,k=m["".concat(u,".").concat(c)]||m[c]||p[c]||l;return n?a.createElement(k,i(i({ref:t},d),{},{components:n})):a.createElement(k,i({ref:t},d))}));function c(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,i=new Array(l);i[0]=m;var o={};for(var u in t)hasOwnProperty.call(t,u)&&(o[u]=t[u]);o.originalType=e,o.mdxType="string"==typeof e?e:r,i[1]=o;for(var s=2;s<l;s++)i[s]=n[s];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},38736:(e,t,n)=>{n.r(t),n.d(t,{contentTitle:()=>i,default:()=>d,frontMatter:()=>l,metadata:()=>o,toc:()=>u});var a=n(87462),r=(n(67294),n(3905));const l={title:"limit-req",keywords:["APISIX","Plugin","Limit Request","limit-req"],description:"This document contains information about the Apache APISIX limit-req Plugin."},i=void 0,o={unversionedId:"plugins/limit-req",id:"version-2.15/plugins/limit-req",isDocsHomePage:!1,title:"limit-req",description:"This document contains information about the Apache APISIX limit-req Plugin.",source:"@site/docs-apisix_versioned_docs/version-2.15/plugins/limit-req.md",sourceDirName:"plugins",slug:"/plugins/limit-req",permalink:"/docs/apisix/2.15/plugins/limit-req",editUrl:null,tags:[],version:"2.15",frontMatter:{title:"limit-req",keywords:["APISIX","Plugin","Limit Request","limit-req"],description:"This document contains information about the Apache APISIX limit-req Plugin."},sidebar:"version-2.15/docs",previous:{title:"public-api",permalink:"/docs/apisix/2.15/plugins/public-api"},next:{title:"limit-conn",permalink:"/docs/apisix/2.15/plugins/limit-conn"}},u=[{value:"Description",id:"description",children:[]},{value:"Attributes",id:"attributes",children:[]},{value:"Enabling the Plugin",id:"enabling-the-plugin",children:[]},{value:"Example usage",id:"example-usage",children:[]},{value:"Disable Plugin",id:"disable-plugin",children:[]}],s={toc:u};function d(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"description"},"Description"),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"limit-req")," Plugin limits the number of requests to your service using the ",(0,r.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Leaky_bucket"},"leaky bucket")," algorithm."),(0,r.kt)("h2",{id:"attributes"},"Attributes"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Required"),(0,r.kt)("th",{parentName:"tr",align:null},"Default"),(0,r.kt)("th",{parentName:"tr",align:null},"Valid values"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"rate"),(0,r.kt)("td",{parentName:"tr",align:null},"integer"),(0,r.kt)("td",{parentName:"tr",align:null},"True"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"rate > 0"),(0,r.kt)("td",{parentName:"tr",align:null},"Threshold for number of requests per second. Requests exceeding this rate (and below ",(0,r.kt)("inlineCode",{parentName:"td"},"burst"),") will be delayed to match this rate.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"burst"),(0,r.kt)("td",{parentName:"tr",align:null},"integer"),(0,r.kt)("td",{parentName:"tr",align:null},"True"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"burst >= 0"),(0,r.kt)("td",{parentName:"tr",align:null},"Number of additional requests allowed to be delayed per second. If the number of requests exceeds this hard limit, they will get rejected immediately.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"key_type"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"False"),(0,r.kt)("td",{parentName:"tr",align:null},'"var"'),(0,r.kt)("td",{parentName:"tr",align:null},'["var", "var_combination"]'),(0,r.kt)("td",{parentName:"tr",align:null},"Type of user specified key to use.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"key"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"True"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"User specified key to base the request limiting on. If the ",(0,r.kt)("inlineCode",{parentName:"td"},"key_type")," attribute is set to ",(0,r.kt)("inlineCode",{parentName:"td"},"var"),", the key will be treated as a name of variable, like ",(0,r.kt)("inlineCode",{parentName:"td"},"remote_addr")," or ",(0,r.kt)("inlineCode",{parentName:"td"},"consumer_name"),". If the ",(0,r.kt)("inlineCode",{parentName:"td"},"key_type")," is set to ",(0,r.kt)("inlineCode",{parentName:"td"},"var_combination"),", the key will be a combination of variables, like ",(0,r.kt)("inlineCode",{parentName:"td"},"$remote_addr $consumer_name"),". If the value of the key is empty, ",(0,r.kt)("inlineCode",{parentName:"td"},"remote_addr")," will be set as the default key.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"rejected_code"),(0,r.kt)("td",{parentName:"tr",align:null},"integer"),(0,r.kt)("td",{parentName:"tr",align:null},"False"),(0,r.kt)("td",{parentName:"tr",align:null},"503"),(0,r.kt)("td",{parentName:"tr",align:null},"[200,...,599]"),(0,r.kt)("td",{parentName:"tr",align:null},"HTTP status code returned when the requests exceeding the threshold are rejected.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"rejected_msg"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"False"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"non-empty"),(0,r.kt)("td",{parentName:"tr",align:null},"Body of the response returned when the requests exceeding the threshold are rejected.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"nodelay"),(0,r.kt)("td",{parentName:"tr",align:null},"boolean"),(0,r.kt)("td",{parentName:"tr",align:null},"False"),(0,r.kt)("td",{parentName:"tr",align:null},"false"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"If set to ",(0,r.kt)("inlineCode",{parentName:"td"},"true"),", requests within the burst threshold would not be delayed.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"allow_degradation"),(0,r.kt)("td",{parentName:"tr",align:null},"boolean"),(0,r.kt)("td",{parentName:"tr",align:null},"False"),(0,r.kt)("td",{parentName:"tr",align:null},"false"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"When set to ",(0,r.kt)("inlineCode",{parentName:"td"},"true")," enables Plugin degradation when the Plugin is temporarily unavailable and allows requests to continue.")))),(0,r.kt)("h2",{id:"enabling-the-plugin"},"Enabling the Plugin"),(0,r.kt)("p",null,"You can enable the Plugin on a Route as shown below:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'curl http://127.0.0.1:9080/apisix/admin/routes/1 -H \'X-API-KEY: edd1c9f034335f136f87ad84b625c8f1\' -X PUT -d \'\n{\n    "methods": ["GET"],\n    "uri": "/index.html",\n    "plugins": {\n        "limit-req": {\n            "rate": 1,\n            "burst": 2,\n            "rejected_code": 503,\n            "key_type": "var",\n            "key": "remote_addr"\n        }\n    },\n    "upstream": {\n        "type": "roundrobin",\n        "nodes": {\n            "127.0.0.1:9001": 1\n        }\n    }\n}\'\n')),(0,r.kt)("p",null,"You can also configure the ",(0,r.kt)("inlineCode",{parentName:"p"},"key_type")," to ",(0,r.kt)("inlineCode",{parentName:"p"},"var_combination")," as shown:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "methods": ["GET"],\n    "uri": "/index.html",\n    "plugins": {\n        "limit-req": {\n            "rate": 1,\n            "burst": 2,\n            "rejected_code": 503,\n            "key_type": "var_combination",\n            "key": "$consumer_name $remote_addr"\n        }\n    },\n    "upstream": {\n        "type": "roundrobin",\n        "nodes": {\n            "127.0.0.1:9001": 1\n        }\n    }\n}\n')),(0,r.kt)("p",null,"You can also configure the Plugin on specific consumers to limit their requests."),(0,r.kt)("p",null,"First, you can create a Consumer and enable the ",(0,r.kt)("inlineCode",{parentName:"p"},"limit-req")," Plugin on it:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'curl http://127.0.0.1:9080/apisix/admin/consumers -H \'X-API-KEY: edd1c9f034335f136f87ad84b625c8f1\' -X PUT -d \'\n{\n    "username": "consumer_jack",\n    "plugins": {\n        "key-auth": {\n            "key": "auth-jack"\n        },\n        "limit-req": {\n            "rate": 1,\n            "burst": 3,\n            "rejected_code": 403,\n            "key": "consumer_name"\n        }\n    }\n}\'\n')),(0,r.kt)("p",null,"In this example, the ",(0,r.kt)("a",{parentName:"p",href:"/docs/apisix/2.15/plugins/key-auth"},"key-auth")," Plugin is used to authenticate the Consumer."),(0,r.kt)("p",null,"Next, create a Route and enable the ",(0,r.kt)("inlineCode",{parentName:"p"},"key-auth")," Plugin:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'curl http://127.0.0.1:9080/apisix/admin/routes/1 -H \'X-API-KEY: edd1c9f034335f136f87ad84b625c8f1\' -X PUT -d \'\n{\n    "methods": ["GET"],\n    "uri": "/index.html",\n    "plugins": {\n        "key-auth": {\n            "key": "auth-jack"\n        }\n    },\n    "upstream": {\n        "type": "roundrobin",\n        "nodes": {\n            "127.0.0.1:1980": 1\n        }\n    }\n}\'\n')),(0,r.kt)("h2",{id:"example-usage"},"Example usage"),(0,r.kt)("p",null,"Once you have configured the Plugin as shown above, you can test it out. The above configuration limits to 1 request per second. If the number of requests is greater than 1 but less than 3, a delay will be added. And if the number of requests per second exceeds 3, it will be rejected."),(0,r.kt)("p",null,"Now if you send a request:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"curl -i http://127.0.0.1:9080/index.html\n")),(0,r.kt)("p",null,"For authenticated requests:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"curl -i http://127.0.0.1:9080/index.html -H 'apikey: auth-jack'\n")),(0,r.kt)("p",null,"If you exceed the limit, you will receive a response with a 503 code:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-html"},"HTTP/1.1 503 Service Temporarily Unavailable\nContent-Type: text/html\nContent-Length: 194\nConnection: keep-alive\nServer: APISIX web server\n\n<html>\n<head><title>503 Service Temporarily Unavailable</title></head>\n<body>\n<center><h1>503 Service Temporarily Unavailable</h1></center>\n<hr><center>openresty</center>\n</body>\n</html>\n")),(0,r.kt)("p",null,"You can set a custom rejected message by configuring the ",(0,r.kt)("inlineCode",{parentName:"p"},"rejected_msg")," attribute. You will then receive a response like:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'HTTP/1.1 503 Service Temporarily Unavailable\nContent-Type: text/html\nContent-Length: 194\nConnection: keep-alive\nServer: APISIX web server\n\n{"error_msg":"Requests are too frequent, please try again later."}\n')),(0,r.kt)("h2",{id:"disable-plugin"},"Disable Plugin"),(0,r.kt)("p",null,"To disable the ",(0,r.kt)("inlineCode",{parentName:"p"},"limit-req")," Plugin, you can delete the corresponding JSON configuration from the Plugin configuration. APISIX will automatically reload and you do not have to restart for this to take effect."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'curl http://127.0.0.1:9080/apisix/admin/routes/1 -H \'X-API-KEY: edd1c9f034335f136f87ad84b625c8f1\' -X PUT -d \'\n{\n    "methods": ["GET"],\n    "uri": "/index.html",\n    "id": 1,\n    "plugins": {\n    },\n    "upstream": {\n        "type": "roundrobin",\n        "nodes": {\n            "127.0.0.1:1980": 1\n        }\n    }\n}\'\n')),(0,r.kt)("p",null,"Similarly for removing the Plugin from a Consumer:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'curl http://127.0.0.1:9080/apisix/admin/consumers -H \'X-API-KEY: edd1c9f034335f136f87ad84b625c8f1\' -X PUT -d \'\n{\n    "username": "consumer_jack",\n    "plugins": {\n        "key-auth": {\n            "key": "auth-jack"\n        }\n    }\n}\'\n')))}d.isMDXComponent=!0}}]);