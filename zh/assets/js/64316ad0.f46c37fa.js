"use strict";(self.webpackChunkdoc=self.webpackChunkdoc||[]).push([[16865],{3905:(e,t,n)=>{n.d(t,{Zo:()=>o,kt:()=>s});var a=n(67294);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,a,l=function(e,t){if(null==e)return{};var n,a,l={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var d=a.createContext({}),u=function(e){var t=a.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},o=function(e){var t=u(e.components);return a.createElement(d.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},k=a.forwardRef((function(e,t){var n=e.components,l=e.mdxType,r=e.originalType,d=e.parentName,o=p(e,["components","mdxType","originalType","parentName"]),k=u(n),s=l,c=k["".concat(d,".").concat(s)]||k[s]||m[s]||r;return n?a.createElement(c,i(i({ref:t},o),{},{components:n})):a.createElement(c,i({ref:t},o))}));function s(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var r=n.length,i=new Array(r);i[0]=k;var p={};for(var d in t)hasOwnProperty.call(t,d)&&(p[d]=t[d]);p.originalType=e,p.mdxType="string"==typeof e?e:l,i[1]=p;for(var u=2;u<r;u++)i[u]=n[u];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}k.displayName="MDXCreateElement"},9258:(e,t,n)=>{n.r(t),n.d(t,{contentTitle:()=>i,default:()=>o,frontMatter:()=>r,metadata:()=>p,toc:()=>d});var a=n(87462),l=(n(67294),n(3905));const r={title:"request-id"},i=void 0,p={unversionedId:"plugins/request-id",id:"version-2.15/plugins/request-id",isDocsHomePage:!1,title:"request-id",description:"request-id \u63d2\u4ef6\u901a\u8fc7 APISIX \u4e3a\u6bcf\u4e00\u4e2a\u8bf7\u6c42\u4ee3\u7406\u6dfb\u52a0\u552f\u4e00 ID\uff08UUID\uff09\uff0c\u4ee5\u7528\u4e8e\u8ffd\u8e2a API \u8bf7\u6c42\u3002\u8be5\u63d2\u4ef6\u5728 header_name \u5df2\u7ecf\u5728\u8bf7\u6c42\u4e2d\u5b58\u5728\u65f6\u4e0d\u4f1a\u4e3a\u8bf7\u6c42\u6dfb\u52a0\u65b0\u7684 ID\u3002",source:"@site/i18n/zh/docusaurus-plugin-content-docs-docs-apisix/version-2.15/plugins/request-id.md",sourceDirName:"plugins",slug:"/plugins/request-id",permalink:"/zh/docs/apisix/2.15/plugins/request-id",editUrl:null,tags:[],version:"2.15",frontMatter:{title:"request-id"},sidebar:"version-2.15/docs",previous:{title:"traffic-split",permalink:"/zh/docs/apisix/2.15/plugins/traffic-split"},next:{title:"proxy-control",permalink:"/zh/docs/apisix/2.15/plugins/proxy-control"}},d=[{value:"\u63cf\u8ff0",id:"\u63cf\u8ff0",children:[]},{value:"\u5c5e\u6027",id:"\u5c5e\u6027",children:[]},{value:"\u5982\u4f55\u542f\u7528",id:"\u5982\u4f55\u542f\u7528",children:[]},{value:"\u6d4b\u8bd5\u63d2\u4ef6",id:"\u6d4b\u8bd5\u63d2\u4ef6",children:[{value:"\u4f7f\u7528 snowflake \u7b97\u6cd5\u751f\u6210 ID",id:"\u4f7f\u7528-snowflake-\u7b97\u6cd5\u751f\u6210-id",children:[]}]},{value:"\u7981\u7528\u63d2\u4ef6",id:"\u7981\u7528\u63d2\u4ef6",children:[]}],u={toc:d};function o(e){let{components:t,...n}=e;return(0,l.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h2",{id:"\u63cf\u8ff0"},"\u63cf\u8ff0"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"request-id")," \u63d2\u4ef6\u901a\u8fc7 APISIX \u4e3a\u6bcf\u4e00\u4e2a\u8bf7\u6c42\u4ee3\u7406\u6dfb\u52a0\u552f\u4e00 ID\uff08UUID\uff09\uff0c\u4ee5\u7528\u4e8e\u8ffd\u8e2a API \u8bf7\u6c42\u3002\u8be5\u63d2\u4ef6\u5728 ",(0,l.kt)("inlineCode",{parentName:"p"},"header_name")," \u5df2\u7ecf\u5728\u8bf7\u6c42\u4e2d\u5b58\u5728\u65f6\u4e0d\u4f1a\u4e3a\u8bf7\u6c42\u6dfb\u52a0\u65b0\u7684 ID\u3002"),(0,l.kt)("h2",{id:"\u5c5e\u6027"},"\u5c5e\u6027"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"\u540d\u79f0"),(0,l.kt)("th",{parentName:"tr",align:null},"\u7c7b\u578b"),(0,l.kt)("th",{parentName:"tr",align:null},"\u5fc5\u9009\u9879"),(0,l.kt)("th",{parentName:"tr",align:null},"\u9ed8\u8ba4\u503c"),(0,l.kt)("th",{parentName:"tr",align:null},"\u6709\u6548\u503c"),(0,l.kt)("th",{parentName:"tr",align:null},"\u63cf\u8ff0"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"header_name"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"\u53ef\u9009"),(0,l.kt)("td",{parentName:"tr",align:null},'"X-Request-Id"'),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"Request ID header name")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"include_in_response"),(0,l.kt)("td",{parentName:"tr",align:null},"boolean"),(0,l.kt)("td",{parentName:"tr",align:null},"\u53ef\u9009"),(0,l.kt)("td",{parentName:"tr",align:null},"true"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"\u662f\u5426\u9700\u8981\u5728\u8fd4\u56de\u5934\u4e2d\u5305\u542b\u8be5\u552f\u4e00 ID")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"algorithm"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"\u53ef\u9009"),(0,l.kt)("td",{parentName:"tr",align:null},'"uuid"'),(0,l.kt)("td",{parentName:"tr",align:null},'["uuid", "snowflake", "nanoid"]'),(0,l.kt)("td",{parentName:"tr",align:null},"ID \u751f\u6210\u7b97\u6cd5")))),(0,l.kt)("div",{className:"admonition admonition-warning alert alert--danger"},(0,l.kt)("div",{parentName:"div",className:"admonition-heading"},(0,l.kt)("h5",{parentName:"div"},(0,l.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,l.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,l.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"}))),"warning")),(0,l.kt)("div",{parentName:"div",className:"admonition-content"},(0,l.kt)("p",{parentName:"div"},"\u5f53\u4f7f\u7528 ",(0,l.kt)("inlineCode",{parentName:"p"},"snowflake")," \u7b97\u6cd5\u65f6\uff0c\u8bf7\u786e\u4fdd APISIX \u6709\u6743\u9650\u5199\u5165 etcd\u3002"))),(0,l.kt)("h2",{id:"\u5982\u4f55\u542f\u7528"},"\u5982\u4f55\u542f\u7528"),(0,l.kt)("p",null,"\u521b\u5efa\u4e00\u6761\u8def\u7531\u5e76\u5728\u8be5\u8def\u7531\u4e0a\u542f\u7528 ",(0,l.kt)("inlineCode",{parentName:"p"},"request-id")," \u63d2\u4ef6\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},'curl http://127.0.0.1:9080/apisix/admin/routes/5 -H \'X-API-KEY: edd1c9f034335f136f87ad84b625c8f1\' -X PUT -d \'\n{\n    "uri": "/hello",\n    "plugins": {\n        "request-id": {\n            "include_in_response": true\n        }\n    },\n    "upstream": {\n        "type": "roundrobin",\n        "nodes": {\n            "127.0.0.1:8080": 1\n        }\n    }\n}\'\n')),(0,l.kt)("h2",{id:"\u6d4b\u8bd5\u63d2\u4ef6"},"\u6d4b\u8bd5\u63d2\u4ef6"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"$ curl -i http://127.0.0.1:9080/hello\nHTTP/1.1 200 OK\nX-Request-Id: fe32076a-d0a5-49a6-a361-6c244c1df956\n......\n")),(0,l.kt)("h3",{id:"\u4f7f\u7528-snowflake-\u7b97\u6cd5\u751f\u6210-id"},"\u4f7f\u7528 snowflake \u7b97\u6cd5\u751f\u6210 ID"),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"\u652f\u6301\u4f7f\u7528 snowflake \u7b97\u6cd5\u6765\u751f\u6210 ID\u3002\n\u5728\u51b3\u5b9a\u4f7f\u7528 snowflake \u65f6\uff0c\u8bf7\u4f18\u5148\u9605\u8bfb\u4e00\u4e0b\u6587\u6863\u3002\u56e0\u4e3a\u4e00\u65e6\u542f\u7528\u914d\u7f6e\u4fe1\u606f\u5219\u4e0d\u53ef\u968f\u610f\u8c03\u6574\u914d\u7f6e\u4fe1\u606f\u3002\u5426\u5219\u53ef\u80fd\u4f1a\u5bfc\u81f4\u751f\u6210\u91cd\u590d ID\u3002")),(0,l.kt)("p",null,"snowflake \u7b97\u6cd5\u9ed8\u8ba4\u662f\u4e0d\u542f\u7528\u7684\uff0c\u9700\u8981\u5728 ",(0,l.kt)("inlineCode",{parentName:"p"},"conf/config.yaml")," \u4e2d\u5f00\u542f\u914d\u7f6e\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-yaml"},"plugin_attr:\n  request-id:\n    snowflake:\n      enable: true\n      snowflake_epoc: 1609459200000\n      data_machine_bits: 12\n      sequence_bits: 10\n      data_machine_ttl: 30\n      data_machine_interval: 10\n")),(0,l.kt)("h4",{id:"\u914d\u7f6e\u53c2\u6570"},"\u914d\u7f6e\u53c2\u6570"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"\u540d\u79f0"),(0,l.kt)("th",{parentName:"tr",align:null},"\u7c7b\u578b"),(0,l.kt)("th",{parentName:"tr",align:null},"\u5fc5\u9009\u9879"),(0,l.kt)("th",{parentName:"tr",align:null},"\u9ed8\u8ba4\u503c"),(0,l.kt)("th",{parentName:"tr",align:null},"\u6709\u6548\u503c"),(0,l.kt)("th",{parentName:"tr",align:null},"\u63cf\u8ff0"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"enable"),(0,l.kt)("td",{parentName:"tr",align:null},"boolean"),(0,l.kt)("td",{parentName:"tr",align:null},"\u53ef\u9009"),(0,l.kt)("td",{parentName:"tr",align:null},"false"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"\u5f53\u8bbe\u7f6e\u4e3a true \u65f6\uff0c \u542f\u7528 snowflake \u7b97\u6cd5\u3002")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"snowflake_epoc"),(0,l.kt)("td",{parentName:"tr",align:null},"integer"),(0,l.kt)("td",{parentName:"tr",align:null},"\u53ef\u9009"),(0,l.kt)("td",{parentName:"tr",align:null},"1609459200000"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"\u8d77\u59cb\u65f6\u95f4\u6233\uff08\u5355\u4f4d\uff1a \u6beb\u79d2\uff09")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"data_machine_bits"),(0,l.kt)("td",{parentName:"tr",align:null},"integer"),(0,l.kt)("td",{parentName:"tr",align:null},"\u53ef\u9009"),(0,l.kt)("td",{parentName:"tr",align:null},"12"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"\u6700\u591a\u652f\u6301\u673a\u5668\uff08\u8fdb\u7a0b\uff09\u6570\u91cf ",(0,l.kt)("inlineCode",{parentName:"td"},"1 << data_machine_bits"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"sequence_bits"),(0,l.kt)("td",{parentName:"tr",align:null},"integer"),(0,l.kt)("td",{parentName:"tr",align:null},"\u53ef\u9009"),(0,l.kt)("td",{parentName:"tr",align:null},"10"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"\u6bcf\u4e2a\u8282\u70b9\u6bcf\u6beb\u79d2\u5185\u6700\u591a\u4ea7\u751f ID \u6570\u91cf ",(0,l.kt)("inlineCode",{parentName:"td"},"1 << sequence_bits"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"data_machine_ttl"),(0,l.kt)("td",{parentName:"tr",align:null},"integer"),(0,l.kt)("td",{parentName:"tr",align:null},"\u53ef\u9009"),(0,l.kt)("td",{parentName:"tr",align:null},"30"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"etcd")," \u4e2d ",(0,l.kt)("inlineCode",{parentName:"td"},"data_machine")," \u6ce8\u518c\u6709\u6548\u65f6\u95f4\uff08\u5355\u4f4d\uff1a \u79d2\uff09")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"data_machine_interval"),(0,l.kt)("td",{parentName:"tr",align:null},"integer"),(0,l.kt)("td",{parentName:"tr",align:null},"\u53ef\u9009"),(0,l.kt)("td",{parentName:"tr",align:null},"10"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"etcd")," \u4e2d ",(0,l.kt)("inlineCode",{parentName:"td"},"data_machine")," \u7eed\u7ea6\u95f4\u9694\u65f6\u95f4\uff08\u5355\u4f4d\uff1a \u79d2\uff09")))),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"snowflake_epoc \u9ed8\u8ba4\u8d77\u59cb\u65f6\u95f4\u4e3a ",(0,l.kt)("inlineCode",{parentName:"li"},"2021-01-01T00:00:00Z"),", \u6309\u9ed8\u8ba4\u914d\u7f6e\u53ef\u4ee5\u652f\u6301 ",(0,l.kt)("inlineCode",{parentName:"li"},"69 \u5e74")," \u5927\u7ea6\u53ef\u4ee5\u4f7f\u7528\u5230 ",(0,l.kt)("inlineCode",{parentName:"li"},"2090-09-07 15:47:35Z")),(0,l.kt)("li",{parentName:"ul"},"data_machine_bits \u5bf9\u5e94\u7684\u662f snowflake \u5b9a\u4e49\u4e2d\u7684 WorkerID \u548c DatacenterID \u7684\u96c6\u5408\uff0c\u63d2\u4ef6\u4f1a\u4e3a\u6bcf\u4e00\u4e2a\u8fdb\u7a0b\u5206\u914d\u4e00\u4e2a\u552f\u4e00 ID\uff0c\u6700\u5927\u652f\u6301\u8fdb\u7a0b\u6570\u4e3a ",(0,l.kt)("inlineCode",{parentName:"li"},"pow(2, data_machine_bits)"),"\u3002\u9ed8\u8ba4\u5360 ",(0,l.kt)("inlineCode",{parentName:"li"},"12 bits")," \u6700\u591a\u652f\u6301 ",(0,l.kt)("inlineCode",{parentName:"li"},"4096")," \u4e2a\u8fdb\u7a0b\u3002"),(0,l.kt)("li",{parentName:"ul"},"sequence_bits \u9ed8\u8ba4\u5360 ",(0,l.kt)("inlineCode",{parentName:"li"},"10 bits"),", \u6bcf\u4e2a\u8fdb\u7a0b\u6bcf\u6beb\u79d2\u6700\u591a\u751f\u6210 ",(0,l.kt)("inlineCode",{parentName:"li"},"1024")," \u4e2a ID")),(0,l.kt)("h4",{id:"\u914d\u7f6e\u793a\u4f8b"},"\u914d\u7f6e\u793a\u4f8b"),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"snowflake \u652f\u6301\u7075\u6d3b\u914d\u7f6e\u6765\u6ee1\u8db3\u5404\u5f0f\u5404\u6837\u7684\u9700\u6c42")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"snowflake \u539f\u7248\u914d\u7f6e")),(0,l.kt)("blockquote",null,(0,l.kt)("ul",{parentName:"blockquote"},(0,l.kt)("li",{parentName:"ul"},"\u8d77\u59cb\u65f6\u95f4 2014-10-20T15:00:00.000Z\uff0c \u7cbe\u786e\u5230\u6beb\u79d2\u4e3a\u5355\u4f4d\u3002\u5927\u7ea6\u53ef\u4ee5\u4f7f\u7528 ",(0,l.kt)("inlineCode",{parentName:"li"},"69 \u5e74")),(0,l.kt)("li",{parentName:"ul"},"\u6700\u591a\u652f\u6301 ",(0,l.kt)("inlineCode",{parentName:"li"},"1024")," \u4e2a\u8fdb\u7a0b"),(0,l.kt)("li",{parentName:"ul"},"\u6bcf\u4e2a\u8fdb\u7a0b\u6bcf\u6beb\u79d2\u6700\u591a\u4ea7\u751f ",(0,l.kt)("inlineCode",{parentName:"li"},"4096")," \u4e2a ID"))),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-yaml"},"plugin_attr:\n  request-id:\n    snowflake:\n      enable: true\n      snowflake_epoc: 1413817200000\n      data_machine_bits: 10\n      sequence_bits: 12\n")),(0,l.kt)("h2",{id:"\u7981\u7528\u63d2\u4ef6"},"\u7981\u7528\u63d2\u4ef6"),(0,l.kt)("p",null,"\u5728\u8def\u7531 ",(0,l.kt)("inlineCode",{parentName:"p"},"plugins")," \u914d\u7f6e\u5757\u4e2d\u5220\u9664 `request-id \u914d\u7f6e\uff0creload \u5373\u53ef\u7981\u7528\u8be5\u63d2\u4ef6\uff0c\u65e0\u9700\u91cd\u542f APISIX\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},'curl http://127.0.0.1:9080/apisix/admin/routes/5 -H \'X-API-KEY: edd1c9f034335f136f87ad84b625c8f1\' -X PUT -d \'\n{\n    "uri": "/get",\n    "plugins": {\n    },\n    "upstream": {\n        "type": "roundrobin",\n        "nodes": {\n            "127.0.0.1:8080": 1\n        }\n    }\n}\'\n')))}o.isMDXComponent=!0}}]);