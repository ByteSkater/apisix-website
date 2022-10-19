"use strict";(self.webpackChunkdoc=self.webpackChunkdoc||[]).push([[38431],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>k});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),u=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=u(e.components);return r.createElement(p.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},s=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,p=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),s=u(n),k=a,m=s["".concat(p,".").concat(k)]||s[k]||d[k]||l;return n?r.createElement(m,i(i({ref:t},c),{},{components:n})):r.createElement(m,i({ref:t},c))}));function k(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,i=new Array(l);i[0]=s;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o.mdxType="string"==typeof e?e:a,i[1]=o;for(var u=2;u<l;u++)i[u]=n[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}s.displayName="MDXCreateElement"},41877:(e,t,n)=>{n.r(t),n.d(t,{contentTitle:()=>i,default:()=>c,frontMatter:()=>l,metadata:()=>o,toc:()=>p});var r=n(87462),a=(n(67294),n(3905));const l={title:"uri-blocker",keywords:["APISIX","API Gateway","URI Blocker"],description:"\u672c\u6587\u4ecb\u7ecd\u4e86 Apache APISIX uri-blocker \u63d2\u4ef6\u7684\u57fa\u672c\u4fe1\u606f\u53ca\u4f7f\u7528\u65b9\u6cd5\u3002"},i=void 0,o={unversionedId:"plugins/uri-blocker",id:"version-3.0.0-beta/plugins/uri-blocker",isDocsHomePage:!1,title:"uri-blocker",description:"\u672c\u6587\u4ecb\u7ecd\u4e86 Apache APISIX uri-blocker \u63d2\u4ef6\u7684\u57fa\u672c\u4fe1\u606f\u53ca\u4f7f\u7528\u65b9\u6cd5\u3002",source:"@site/i18n/zh/docusaurus-plugin-content-docs-docs-apisix/version-3.0.0-beta/plugins/uri-blocker.md",sourceDirName:"plugins",slug:"/plugins/uri-blocker",permalink:"/zh/docs/apisix/plugins/uri-blocker",editUrl:null,tags:[],version:"3.0.0-beta",frontMatter:{title:"uri-blocker",keywords:["APISIX","API Gateway","URI Blocker"],description:"\u672c\u6587\u4ecb\u7ecd\u4e86 Apache APISIX uri-blocker \u63d2\u4ef6\u7684\u57fa\u672c\u4fe1\u606f\u53ca\u4f7f\u7528\u65b9\u6cd5\u3002"},sidebar:"version-3.0.0-beta/docs",previous:{title:"cors",permalink:"/zh/docs/apisix/plugins/cors"},next:{title:"ip-restriction",permalink:"/zh/docs/apisix/plugins/ip-restriction"}},p=[{value:"\u63cf\u8ff0",id:"\u63cf\u8ff0",children:[]},{value:"\u5c5e\u6027",id:"\u5c5e\u6027",children:[]},{value:"\u542f\u7528\u63d2\u4ef6",id:"\u542f\u7528\u63d2\u4ef6",children:[]},{value:"\u6d4b\u8bd5\u63d2\u4ef6",id:"\u6d4b\u8bd5\u63d2\u4ef6",children:[]},{value:"\u7981\u7528\u63d2\u4ef6",id:"\u7981\u7528\u63d2\u4ef6",children:[]}],u={toc:p};function c(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"\u63cf\u8ff0"},"\u63cf\u8ff0"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"uri-blocker")," \u63d2\u4ef6\u901a\u8fc7\u6307\u5b9a\u4e00\u7cfb\u5217 ",(0,a.kt)("inlineCode",{parentName:"p"},"block_rules")," \u6765\u62e6\u622a\u7528\u6237\u8bf7\u6c42\u3002"),(0,a.kt)("h2",{id:"\u5c5e\u6027"},"\u5c5e\u6027"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"\u540d\u79f0"),(0,a.kt)("th",{parentName:"tr",align:null},"\u7c7b\u578b"),(0,a.kt)("th",{parentName:"tr",align:null},"\u5fc5\u9009\u9879"),(0,a.kt)("th",{parentName:"tr",align:null},"\u9ed8\u8ba4\u503c"),(0,a.kt)("th",{parentName:"tr",align:null},"\u6709\u6548\u503c"),(0,a.kt)("th",{parentName:"tr",align:null},"\u63cf\u8ff0"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"block_rules"),(0,a.kt)("td",{parentName:"tr",align:null},"array","[string]"),(0,a.kt)("td",{parentName:"tr",align:null},"\u662f"),(0,a.kt)("td",{parentName:"tr",align:null}),(0,a.kt)("td",{parentName:"tr",align:null}),(0,a.kt)("td",{parentName:"tr",align:null},"\u6b63\u5219\u8fc7\u6ee4\u6570\u7ec4\u3002\u5b83\u4eec\u90fd\u662f\u6b63\u5219\u89c4\u5219\uff0c\u5982\u679c\u5f53\u524d\u8bf7\u6c42 URI \u547d\u4e2d\u5176\u4e2d\u4efb\u4f55\u4e00\u4e2a\uff0c\u5219\u5c06\u54cd\u5e94\u4ee3\u7801\u8bbe\u7f6e\u4e3a ",(0,a.kt)("inlineCode",{parentName:"td"},"rejected_code")," \u4ee5\u9000\u51fa\u5f53\u524d\u7528\u6237\u8bf7\u6c42\u3002\u4f8b\u5982\uff1a",(0,a.kt)("inlineCode",{parentName:"td"},'["root.exe", "root.m+"]'),"\u3002")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"rejected_code"),(0,a.kt)("td",{parentName:"tr",align:null},"integer"),(0,a.kt)("td",{parentName:"tr",align:null},"\u5426"),(0,a.kt)("td",{parentName:"tr",align:null},"403"),(0,a.kt)("td",{parentName:"tr",align:null},"[200, ...]"),(0,a.kt)("td",{parentName:"tr",align:null},"\u5f53\u8bf7\u6c42 URI \u547d\u4e2d ",(0,a.kt)("inlineCode",{parentName:"td"},"block_rules")," \u4e2d\u7684\u4efb\u4f55\u4e00\u4e2a\u65f6\uff0c\u5c06\u8fd4\u56de\u7684 HTTP \u72b6\u6001\u4ee3\u7801\u3002")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"rejected_msg"),(0,a.kt)("td",{parentName:"tr",align:null},"string"),(0,a.kt)("td",{parentName:"tr",align:null},"\u5426"),(0,a.kt)("td",{parentName:"tr",align:null}),(0,a.kt)("td",{parentName:"tr",align:null},"\u975e\u7a7a"),(0,a.kt)("td",{parentName:"tr",align:null},"\u5f53\u8bf7\u6c42 URI \u547d\u4e2d ",(0,a.kt)("inlineCode",{parentName:"td"},"block_rules")," \u4e2d\u7684\u4efb\u4f55\u4e00\u4e2a\u65f6\uff0c\u5c06\u8fd4\u56de\u7684 HTTP \u54cd\u5e94\u4f53\u3002")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"case_insensitive"),(0,a.kt)("td",{parentName:"tr",align:null},"boolean"),(0,a.kt)("td",{parentName:"tr",align:null},"\u5426"),(0,a.kt)("td",{parentName:"tr",align:null},"false"),(0,a.kt)("td",{parentName:"tr",align:null}),(0,a.kt)("td",{parentName:"tr",align:null},"\u662f\u5426\u5ffd\u7565\u5927\u5c0f\u5199\u3002\u5f53\u8bbe\u7f6e\u4e3a ",(0,a.kt)("inlineCode",{parentName:"td"},"true")," \u65f6\uff0c\u5728\u5339\u914d\u8bf7\u6c42 URI \u65f6\u5c06\u5ffd\u7565\u5927\u5c0f\u5199\u3002")))),(0,a.kt)("h2",{id:"\u542f\u7528\u63d2\u4ef6"},"\u542f\u7528\u63d2\u4ef6"),(0,a.kt)("p",null,"\u4ee5\u4e0b\u793a\u4f8b\u5c55\u793a\u4e86\u5982\u4f55\u5728\u6307\u5b9a\u7684\u8def\u7531\u4e0a\u542f\u7528 ",(0,a.kt)("inlineCode",{parentName:"p"},"uri-blocker")," \u63d2\u4ef6\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},'curl -i http://127.0.0.1:9180/apisix/admin/routes/1 -H \'X-API-KEY: edd1c9f034335f136f87ad84b625c8f1\' -X PUT -d \'\n{\n    "uri": "/*",\n    "plugins": {\n        "uri-blocker": {\n            "block_rules": ["root.exe", "root.m+"]\n        }\n    },\n    "upstream": {\n        "type": "roundrobin",\n        "nodes": {\n            "127.0.0.1:1980": 1\n        }\n    }\n}\'\n')),(0,a.kt)("h2",{id:"\u6d4b\u8bd5\u63d2\u4ef6"},"\u6d4b\u8bd5\u63d2\u4ef6"),(0,a.kt)("p",null,"\u542f\u7528\u5e76\u914d\u7f6e\u63d2\u4ef6\u540e\uff0c\u4f7f\u7528 ",(0,a.kt)("inlineCode",{parentName:"p"},"curl")," \u547d\u4ee4\u5c1d\u8bd5\u8bbf\u95ee ",(0,a.kt)("inlineCode",{parentName:"p"},"block_rules")," \u4e2d\u6307\u5b9a\u6587\u4ef6\u7684 URI\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"curl -i http://127.0.0.1:9080/root.exe?a=a\n")),(0,a.kt)("p",null,"\u5982\u679c\u53d1\u73b0\u8fd4\u56de\u4e86\u5e26\u6709 ",(0,a.kt)("inlineCode",{parentName:"p"},"403")," \u72b6\u6001\u7801\u7684 HTTP \u54cd\u5e94\u5934\uff0c\u5219\u4ee3\u8868\u63d2\u4ef6\u751f\u6548\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"HTTP/1.1 403 Forbidden\nDate: Wed, 17 Jun 2020 13:55:41 GMT\nContent-Type: text/html; charset=utf-8\nContent-Length: 150\nConnection: keep-alive\nServer: APISIX web server\n...\n")),(0,a.kt)("p",null,"\u901a\u8fc7\u8bbe\u7f6e\u5c5e\u6027 ",(0,a.kt)("inlineCode",{parentName:"p"},"rejected_msg")," \u7684\u503c\u4e3a ",(0,a.kt)("inlineCode",{parentName:"p"},"access is not allowed"),"\uff0c\u5c06\u4f1a\u6536\u5230\u5305\u542b\u5982\u4e0b\u4fe1\u606f\u7684\u54cd\u5e94\u4f53\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},'...\n{"error_msg":"access is not allowed"}\n...\n')),(0,a.kt)("h2",{id:"\u7981\u7528\u63d2\u4ef6"},"\u7981\u7528\u63d2\u4ef6"),(0,a.kt)("p",null,"\u5f53\u4f60\u9700\u8981\u7981\u7528 ",(0,a.kt)("inlineCode",{parentName:"p"},"uri-blocker")," \u63d2\u4ef6\u65f6\uff0c\u53ef\u4ee5\u901a\u8fc7\u4ee5\u4e0b\u547d\u4ee4\u5220\u9664\u76f8\u5e94\u7684 JSON \u914d\u7f6e\uff0cAPISIX \u5c06\u4f1a\u81ea\u52a8\u91cd\u65b0\u52a0\u8f7d\u76f8\u5173\u914d\u7f6e\uff0c\u65e0\u9700\u91cd\u542f\u670d\u52a1\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},'curl http://127.0.0.1:9180/apisix/admin/routes/1 -H \'X-API-KEY: edd1c9f034335f136f87ad84b625c8f1\' -X PUT -d \'\n{\n    "uri": "/*",\n    "upstream": {\n        "type": "roundrobin",\n        "nodes": {\n            "127.0.0.1:1980": 1\n        }\n    }\n}\'\n')))}c.isMDXComponent=!0}}]);