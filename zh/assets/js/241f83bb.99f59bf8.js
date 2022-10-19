"use strict";(self.webpackChunkdoc=self.webpackChunkdoc||[]).push([[26514],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>m});var r=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=r.createContext({}),p=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},s=function(e){var t=p(e.components);return r.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,l=e.parentName,s=a(e,["components","mdxType","originalType","parentName"]),d=p(n),m=i,f=d["".concat(l,".").concat(m)]||d[m]||u[m]||o;return n?r.createElement(f,c(c({ref:t},s),{},{components:n})):r.createElement(f,c({ref:t},s))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,c=new Array(o);c[0]=d;var a={};for(var l in t)hasOwnProperty.call(t,l)&&(a[l]=t[l]);a.originalType=e,a.mdxType="string"==typeof e?e:i,c[1]=a;for(var p=2;p<o;p++)c[p]=n[p];return r.createElement.apply(null,c)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},59094:(e,t,n)=>{n.r(t),n.d(t,{contentTitle:()=>c,default:()=>s,frontMatter:()=>o,metadata:()=>a,toc:()=>l});var r=n(87462),i=(n(67294),n(3905));const o={title:"Service"},c=void 0,a={unversionedId:"terminology/service",id:"terminology/service",isDocsHomePage:!1,title:"Service",description:"Service \u662f\u67d0\u7c7b API \u7684\u62bd\u8c61\uff08\u4e5f\u53ef\u4ee5\u7406\u89e3\u4e3a\u4e00\u7ec4 Route \u7684\u62bd\u8c61\uff09\u3002\u5b83\u901a\u5e38\u4e0e\u4e0a\u6e38\u670d\u52a1\u62bd\u8c61\u662f\u4e00\u4e00\u5bf9\u5e94\u7684\uff0cRoute\n\u4e0e Service \u4e4b\u95f4\uff0c\u901a\u5e38\u662f N:1 \u7684\u5173\u7cfb\uff0c\u53c2\u770b\u4e0b\u56fe\u3002",source:"@site/i18n/zh/docusaurus-plugin-content-docs-docs-apisix/current/terminology/service.md",sourceDirName:"terminology",slug:"/terminology/service",permalink:"/zh/docs/apisix/next/terminology/service",editUrl:"https://github.com/apache/apisix/edit/master/docs/zh/latest/terminology/service.md",tags:[],version:"current",frontMatter:{title:"Service"},sidebar:"docs",previous:{title:"Script",permalink:"/zh/docs/apisix/next/terminology/script"},next:{title:"Upstream",permalink:"/zh/docs/apisix/next/terminology/upstream"}},l=[],p={toc:l};function s(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"Service")," \u662f\u67d0\u7c7b API \u7684\u62bd\u8c61\uff08\u4e5f\u53ef\u4ee5\u7406\u89e3\u4e3a\u4e00\u7ec4 Route \u7684\u62bd\u8c61\uff09\u3002\u5b83\u901a\u5e38\u4e0e\u4e0a\u6e38\u670d\u52a1\u62bd\u8c61\u662f\u4e00\u4e00\u5bf9\u5e94\u7684\uff0c",(0,i.kt)("inlineCode",{parentName:"p"},"Route"),"\n\u4e0e ",(0,i.kt)("inlineCode",{parentName:"p"},"Service")," \u4e4b\u95f4\uff0c\u901a\u5e38\u662f N:1 \u7684\u5173\u7cfb\uff0c\u53c2\u770b\u4e0b\u56fe\u3002"),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://raw.githubusercontent.com/apache/apisix/master/docs/assets/images/service-example.png",alt:"\u670d\u52a1\u793a\u4f8b"})),(0,i.kt)("p",null,"\u4e0d\u540c Route \u89c4\u5219\u540c\u65f6\u7ed1\u5b9a\u5230\u4e00\u4e2a Service \u4e0a\uff0c\u8fd9\u4e9b Route \u5c06\u5177\u6709\u76f8\u540c\u7684\u4e0a\u6e38\u548c\u63d2\u4ef6\u914d\u7f6e\uff0c\u51cf\u5c11\u5197\u4f59\u914d\u7f6e\u3002"),(0,i.kt)("p",null,"\u6bd4\u5982\u4e0b\u9762\u7684\u4f8b\u5b50\uff0c\u521b\u5efa\u4e86\u4e00\u4e2a\u542f\u7528\u9650\u6d41\u63d2\u4ef6\u7684 Service\uff0c\u7136\u540e\u628a id \u4e3a ",(0,i.kt)("inlineCode",{parentName:"p"},"100"),"\u3001",(0,i.kt)("inlineCode",{parentName:"p"},"101")," \u7684 Route \u90fd\u7ed1\u5b9a\u5728\u8fd9\u4e2a Service \u4e0a\u3002"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},'# create new Service\n$ curl http://127.0.0.1:9180/apisix/admin/services/200 -H \'X-API-KEY: edd1c9f034335f136f87ad84b625c8f1\' -X PUT -d \'\n{\n    "plugins": {\n        "limit-count": {\n            "count": 2,\n            "time_window": 60,\n            "rejected_code": 503,\n            "key": "remote_addr"\n        }\n    },\n    "upstream": {\n        "type": "roundrobin",\n        "nodes": {\n            "127.0.0.1:1980": 1\n        }\n    }\n}\'\n\n# create new Route and reference the service by id `200`\ncurl http://127.0.0.1:9180/apisix/admin/routes/100 -H \'X-API-KEY: edd1c9f034335f136f87ad84b625c8f1\' -X PUT -d \'\n{\n    "methods": ["GET"],\n    "uri": "/index.html",\n    "service_id": "200"\n}\'\n\ncurl http://127.0.0.1:9180/apisix/admin/routes/101 -H \'X-API-KEY: edd1c9f034335f136f87ad84b625c8f1\' -X PUT -d \'\n{\n    "methods": ["GET"],\n    "uri": "/foo/index.html",\n    "service_id": "200"\n}\'\n')),(0,i.kt)("p",null,"\u5f53\u7136\u6211\u4eec\u4e5f\u53ef\u4ee5\u4e3a Route \u6307\u5b9a\u4e0d\u540c\u7684\u63d2\u4ef6\u53c2\u6570\u6216\u4e0a\u6e38\uff0c\u6bd4\u5982\u4e0b\u9762\u8fd9\u4e2a Route \u8bbe\u7f6e\u4e86\u4e0d\u540c\u7684\u9650\u6d41\u53c2\u6570\uff0c\u5176\u4ed6\u90e8\u5206\uff08\u6bd4\u5982\u4e0a\u6e38\uff09\u5219\u7ee7\u7eed\u4f7f\u7528 Service \u4e2d\u7684\u914d\u7f6e\u53c2\u6570\u3002"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},'curl http://127.0.0.1:9180/apisix/admin/routes/102 -H \'X-API-KEY: edd1c9f034335f136f87ad84b625c8f1\' -X PUT -d \'\n{\n    "uri": "/bar/index.html",\n    "id": "102",\n    "service_id": "200",\n    "plugins": {\n        "limit-count": {\n            "count": 2000,\n            "time_window": 60,\n            "rejected_code": 503,\n            "key": "remote_addr"\n        }\n    }\n}\'\n')),(0,i.kt)("p",null,"\u6ce8\u610f\uff1a\u5f53 Route \u548c Service \u90fd\u5f00\u542f\u540c\u4e00\u4e2a\u63d2\u4ef6\u65f6\uff0cRoute \u4e2d\u7684\u63d2\u4ef6\u53c2\u6570\u4f1a\u4f18\u5148\u4e8e Service \u88ab\u4f7f\u7528\u3002"))}s.isMDXComponent=!0}}]);