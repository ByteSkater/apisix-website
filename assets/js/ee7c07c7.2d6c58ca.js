"use strict";(self.webpackChunkdoc=self.webpackChunkdoc||[]).push([[63235],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>g});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=a.createContext({}),u=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},s=function(e){var t=u(e.components);return a.createElement(p.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,p=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),d=u(n),g=r,m=d["".concat(p,".").concat(g)]||d[g]||c[g]||i;return n?a.createElement(m,l(l({ref:t},s),{},{components:n})):a.createElement(m,l({ref:t},s))}));function g(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,l=new Array(i);l[0]=d;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o.mdxType="string"==typeof e?e:r,l[1]=o;for(var u=2;u<i;u++)l[u]=n[u];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},28694:(e,t,n)=>{n.r(t),n.d(t,{contentTitle:()=>l,default:()=>s,frontMatter:()=>i,metadata:()=>o,toc:()=>p});var a=n(87462),r=(n(67294),n(3905));const i={title:"splunk-hec-logging"},l=void 0,o={unversionedId:"plugins/splunk-hec-logging",id:"version-2.13/plugins/splunk-hec-logging",isDocsHomePage:!1,title:"splunk-hec-logging",description:"The splunk-hec-logging plugin is used to forward the request log of Apache APISIX to Splunk HTTP Event Collector (HEC) for analysis and storage. After the plugin is enabled, Apache APISIX will obtain request context information in Log Phase serialize it into Splunk Event Data format and submit it to the batch queue. When the maximum processing capacity of each batch of the batch processing queue or the maximum time to refresh the buffer is triggered, the data in the queue will be submitted to Splunk HEC.",source:"@site/docs-apisix_versioned_docs/version-2.13/plugins/splunk-hec-logging.md",sourceDirName:"plugins",slug:"/plugins/splunk-hec-logging",permalink:"/docs/apisix/2.13/plugins/splunk-hec-logging",editUrl:null,tags:[],version:"2.13",frontMatter:{title:"splunk-hec-logging"},sidebar:"version-2.13/docs",previous:{title:"google-cloud-logging",permalink:"/docs/apisix/2.13/plugins/google-cloud-logging"},next:{title:"file-logger",permalink:"/docs/apisix/2.13/plugins/file-logger"}},p=[{value:"Description",id:"description",children:[]},{value:"Attributes",id:"attributes",children:[]},{value:"How To Enable",id:"how-to-enable",children:[{value:"Full configuration",id:"full-configuration",children:[]},{value:"Minimize configuration",id:"minimize-configuration",children:[]}]},{value:"Test Plugin",id:"test-plugin",children:[]},{value:"Disable Plugin",id:"disable-plugin",children:[]}],u={toc:p};function s(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"description"},"Description"),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"splunk-hec-logging")," plugin is used to forward the request log of ",(0,r.kt)("inlineCode",{parentName:"p"},"Apache APISIX")," to ",(0,r.kt)("inlineCode",{parentName:"p"},"Splunk HTTP Event Collector (HEC)")," for analysis and storage. After the plugin is enabled, ",(0,r.kt)("inlineCode",{parentName:"p"},"Apache APISIX")," will obtain request context information in ",(0,r.kt)("inlineCode",{parentName:"p"},"Log Phase")," serialize it into ",(0,r.kt)("a",{parentName:"p",href:"https://docs.splunk.com/Documentation/Splunk/latest/Data/FormateventsforHTTPEventCollector#Event_metadata"},"Splunk Event Data format")," and submit it to the batch queue. When the maximum processing capacity of each batch of the batch processing queue or the maximum time to refresh the buffer is triggered, the data in the queue will be submitted to ",(0,r.kt)("inlineCode",{parentName:"p"},"Splunk HEC"),"."),(0,r.kt)("p",null,"For more info on Batch-Processor in Apache APISIX please refer to:\n",(0,r.kt)("a",{parentName:"p",href:"/docs/apisix/2.13/batch-processor"},"Batch-Processor")),(0,r.kt)("h2",{id:"attributes"},"Attributes"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Requirement"),(0,r.kt)("th",{parentName:"tr",align:null},"Default"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"endpoint"),(0,r.kt)("td",{parentName:"tr",align:null},"required"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"Splunk HEC endpoint configuration info")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"endpoint.uri"),(0,r.kt)("td",{parentName:"tr",align:null},"required"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"Splunk HEC event collector API")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"endpoint.token"),(0,r.kt)("td",{parentName:"tr",align:null},"required"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"Splunk HEC authentication token")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"endpoint.channel"),(0,r.kt)("td",{parentName:"tr",align:null},"optional"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"Splunk HEC send data channel identifier, refer to: ",(0,r.kt)("a",{parentName:"td",href:"https://docs.splunk.com/Documentation/Splunk/8.2.3/Data/AboutHECIDXAck"},"About HTTP Event Collector Indexer Acknowledgment"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"endpoint.timeout"),(0,r.kt)("td",{parentName:"tr",align:null},"optional"),(0,r.kt)("td",{parentName:"tr",align:null},"10"),(0,r.kt)("td",{parentName:"tr",align:null},"Splunk HEC send data timeout, time unit: (seconds)")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"ssl_verify"),(0,r.kt)("td",{parentName:"tr",align:null},"optional"),(0,r.kt)("td",{parentName:"tr",align:null},"true"),(0,r.kt)("td",{parentName:"tr",align:null},"enable ",(0,r.kt)("inlineCode",{parentName:"td"},"SSL")," verification, option as per ",(0,r.kt)("a",{parentName:"td",href:"https://github.com/openresty/lua-nginx-module#tcpsocksslhandshake"},"OpenResty docs"))))),(0,r.kt)("p",null,"The plugin supports the use of batch processors to aggregate and process entries(logs/data) in a batch. This avoids frequent data submissions by the plugin, which by default the batch processor submits data every ",(0,r.kt)("inlineCode",{parentName:"p"},"5")," seconds or when the data in the queue reaches ",(0,r.kt)("inlineCode",{parentName:"p"},"1000"),". For information or custom batch processor parameter settings, see ",(0,r.kt)("a",{parentName:"p",href:"/docs/apisix/2.13/batch-processor#configuration"},"Batch-Processor")," configuration section."),(0,r.kt)("h2",{id:"how-to-enable"},"How To Enable"),(0,r.kt)("p",null,"The following is an example of how to enable the ",(0,r.kt)("inlineCode",{parentName:"p"},"splunk-hec-logging")," for a specific route."),(0,r.kt)("h3",{id:"full-configuration"},"Full configuration"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},'curl http://127.0.0.1:9080/apisix/admin/routes/1 -H \'X-API-KEY: edd1c9f034335f136f87ad84b625c8f1\' -X PUT -d \'\n{\n    "plugins":{\n        "splunk-hec-logging":{\n            "endpoint":{\n                "uri":"http://127.0.0.1:8088/services/collector",\n                "token":"BD274822-96AA-4DA6-90EC-18940FB2414C",\n                "channel":"FE0ECFAD-13D5-401B-847D-77833BD77131",\n                "timeout":60\n            },\n            "buffer_duration":60,\n            "max_retry_count":0,\n            "retry_delay":1,\n            "inactive_timeout":2,\n            "batch_max_size":10\n        }\n    },\n    "upstream":{\n        "type":"roundrobin",\n        "nodes":{\n            "127.0.0.1:1980":1\n        }\n    },\n    "uri":"/splunk.do"\n}\'\n')),(0,r.kt)("h3",{id:"minimize-configuration"},"Minimize configuration"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},'curl http://127.0.0.1:9080/apisix/admin/routes/1 -H \'X-API-KEY: edd1c9f034335f136f87ad84b625c8f1\' -X PUT -d \'\n{\n    "plugins":{\n        "splunk-hec-logging":{\n            "endpoint":{\n                "uri":"http://127.0.0.1:8088/services/collector",\n                "token":"BD274822-96AA-4DA6-90EC-18940FB2414C"\n            }\n        }\n    },\n    "upstream":{\n        "type":"roundrobin",\n        "nodes":{\n            "127.0.0.1:1980":1\n        }\n    },\n    "uri":"/splunk.do"\n}\'\n')),(0,r.kt)("h2",{id:"test-plugin"},"Test Plugin"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Send request to route configured with the ",(0,r.kt)("inlineCode",{parentName:"li"},"splunk-hec-logging")," plugin")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"$ curl -i http://127.0.0.1:9080/splunk.do?q=hello\nHTTP/1.1 200 OK\n...\nhello, world\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Login to Splunk Dashboard to search and view")),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://raw.githubusercontent.com/apache/apisix/release/2.13/docs/assets/images/plugin/splunk-hec-admin-en.png",alt:"splunk hec search view"})),(0,r.kt)("h2",{id:"disable-plugin"},"Disable Plugin"),(0,r.kt)("p",null,"Disabling the ",(0,r.kt)("inlineCode",{parentName:"p"},"splunk-hec-logging")," plugin is very simple, just remove the ",(0,r.kt)("inlineCode",{parentName:"p"},"JSON")," configuration corresponding to ",(0,r.kt)("inlineCode",{parentName:"p"},"splunk-hec-logging"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},'$ curl http://127.0.0.1:9080/apisix/admin/routes/1 -H \'X-API-KEY: edd1c9f034335f136f87ad84b625c8f1\' -X PUT -d \'\n{\n    "uri": "/hello",\n    "plugins": {},\n    "upstream": {\n        "type": "roundrobin",\n        "nodes": {\n            "127.0.0.1:1980": 1\n        }\n    }\n}\'\n')))}s.isMDXComponent=!0}}]);