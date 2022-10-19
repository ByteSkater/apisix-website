"use strict";(self.webpackChunkdoc=self.webpackChunkdoc||[]).push([[39558],{3905:(n,e,t)=>{t.d(e,{Zo:()=>a,kt:()=>g});var r=t(67294);function i(n,e,t){return e in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}function o(n,e){var t=Object.keys(n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(n);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),t.push.apply(t,r)}return t}function c(n){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?o(Object(t),!0).forEach((function(e){i(n,e,t[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(e){Object.defineProperty(n,e,Object.getOwnPropertyDescriptor(t,e))}))}return n}function l(n,e){if(null==n)return{};var t,r,i=function(n,e){if(null==n)return{};var t,r,i={},o=Object.keys(n);for(r=0;r<o.length;r++)t=o[r],e.indexOf(t)>=0||(i[t]=n[t]);return i}(n,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(n);for(r=0;r<o.length;r++)t=o[r],e.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(n,t)&&(i[t]=n[t])}return i}var u=r.createContext({}),p=function(n){var e=r.useContext(u),t=e;return n&&(t="function"==typeof n?n(e):c(c({},e),n)),t},a=function(n){var e=p(n.components);return r.createElement(u.Provider,{value:e},n.children)},s={inlineCode:"code",wrapper:function(n){var e=n.children;return r.createElement(r.Fragment,{},e)}},d=r.forwardRef((function(n,e){var t=n.components,i=n.mdxType,o=n.originalType,u=n.parentName,a=l(n,["components","mdxType","originalType","parentName"]),d=p(t),g=i,f=d["".concat(u,".").concat(g)]||d[g]||s[g]||o;return t?r.createElement(f,c(c({ref:e},a),{},{components:t})):r.createElement(f,c({ref:e},a))}));function g(n,e){var t=arguments,i=e&&e.mdxType;if("string"==typeof n||i){var o=t.length,c=new Array(o);c[0]=d;var l={};for(var u in e)hasOwnProperty.call(e,u)&&(l[u]=e[u]);l.originalType=n,l.mdxType="string"==typeof n?n:i,c[1]=l;for(var p=2;p<o;p++)c[p]=t[p];return r.createElement.apply(null,c)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},46630:(n,e,t)=>{t.r(e),t.d(e,{contentTitle:()=>c,default:()=>a,frontMatter:()=>o,metadata:()=>l,toc:()=>u});var r=t(87462),i=(t(67294),t(3905));const o={title:"Plugin Config"},c=void 0,l={unversionedId:"architecture-design/plugin-config",id:"version-2.15/architecture-design/plugin-config",isDocsHomePage:!1,title:"Plugin Config",description:"\u5982\u679c\u4f60\u60f3\u8981\u590d\u7528\u4e00\u7ec4\u901a\u7528\u7684\u63d2\u4ef6\u914d\u7f6e\uff0c\u4f60\u53ef\u4ee5\u628a\u5b83\u4eec\u63d0\u53d6\u6210\u4e00\u4e2a Plugin config\uff0c\u5e76\u7ed1\u5b9a\u5230\u5bf9\u5e94\u7684\u8def\u7531\u4e0a\u3002",source:"@site/i18n/zh/docusaurus-plugin-content-docs-docs-apisix/version-2.15/architecture-design/plugin-config.md",sourceDirName:"architecture-design",slug:"/architecture-design/plugin-config",permalink:"/zh/docs/apisix/2.15/architecture-design/plugin-config",editUrl:null,tags:[],version:"2.15",frontMatter:{title:"Plugin Config"},sidebar:"version-2.15/docs",previous:{title:"APISIX",permalink:"/zh/docs/apisix/2.15/architecture-design/apisix"},next:{title:"Debug Mode",permalink:"/zh/docs/apisix/2.15/architecture-design/debug-mode"}},u=[],p={toc:u};function a(n){let{components:e,...t}=n;return(0,i.kt)("wrapper",(0,r.Z)({},p,t,{components:e,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"\u5982\u679c\u4f60\u60f3\u8981\u590d\u7528\u4e00\u7ec4\u901a\u7528\u7684\u63d2\u4ef6\u914d\u7f6e\uff0c\u4f60\u53ef\u4ee5\u628a\u5b83\u4eec\u63d0\u53d6\u6210\u4e00\u4e2a Plugin config\uff0c\u5e76\u7ed1\u5b9a\u5230\u5bf9\u5e94\u7684\u8def\u7531\u4e0a\u3002"),(0,i.kt)("p",null,"\u4e3e\u4e2a\u4f8b\u5b50\uff0c\u4f60\u53ef\u4ee5\u8fd9\u4e48\u505a\uff1a"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},'# \u521b\u5efa Plugin config\n$ curl http://127.0.0.1:9080/apisix/admin/plugin_configs/1 -H \'X-API-KEY: edd1c9f034335f136f87ad84b625c8f1\' -X PUT -i -d \'\n{\n    "desc": "\u543e\u4e43\u63d2\u4ef6\u914d\u7f6e 1",\n    "plugins": {\n        "limit-count": {\n            "count": 2,\n            "time_window": 60,\n            "rejected_code": 503\n        }\n    }\n}\'\n\n# \u7ed1\u5b9a\u5230\u8def\u7531\u4e0a\n$ curl http://127.0.0.1:9080/apisix/admin/routes/1 -H \'X-API-KEY: edd1c9f034335f136f87ad84b625c8f1\' -X PUT -i -d \'\n{\n    "uris": ["/index.html"],\n    "plugin_config_id": 1,\n    "upstream": {\n        "type": "roundrobin",\n        "nodes": {\n            "127.0.0.1:1980": 1\n        }\n    }\n}\'\n')),(0,i.kt)("p",null,"\u5982\u679c\u627e\u4e0d\u5230\u5bf9\u5e94\u7684 Plugin config\uff0c\u8be5\u8def\u7531\u4e0a\u7684\u8bf7\u6c42\u4f1a\u62a5 503 \u9519\u8bef\u3002"),(0,i.kt)("p",null,"\u5982\u679c\u8fd9\u4e2a\u8def\u7531\u5df2\u7ecf\u914d\u7f6e\u4e86 ",(0,i.kt)("inlineCode",{parentName:"p"},"plugins"),"\uff0c\u90a3\u4e48 Plugin config \u91cc\u9762\u7684\u63d2\u4ef6\u914d\u7f6e\u4f1a\u5408\u5e76\u8fdb\u53bb\u3002\n\u76f8\u540c\u7684\u63d2\u4ef6\u4f1a\u8986\u76d6\u6389 ",(0,i.kt)("inlineCode",{parentName:"p"},"plugins")," \u539f\u6709\u7684\u63d2\u4ef6\u3002"),(0,i.kt)("p",null,"\u4e3e\u4e2a\u4f8b\u5b50\uff1a"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'{\n    "desc": "\u543e\u4e43\u63d2\u4ef6\u914d\u7f6e 1",\n    "plugins": {\n        "ip-restriction": {\n            "whitelist": [\n                "127.0.0.0/24",\n                "113.74.26.106"\n            ]\n        },\n        "limit-count": {\n            "count": 2,\n            "time_window": 60,\n            "rejected_code": 503\n        }\n    }\n}\n')),(0,i.kt)("p",null,"\u52a0\u4e0a"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'{\n    "uris": ["/index.html"],\n    "plugin_config_id": 1,\n    "upstream": {\n        "type": "roundrobin",\n        "nodes": {\n            "127.0.0.1:1980": 1\n        }\n    }\n    "plugins": {\n        "proxy-rewrite": {\n            "uri": "/test/add",\n            "scheme": "https",\n            "host": "apisix.iresty.com"\n        },\n        "limit-count": {\n            "count": 20,\n            "time_window": 60,\n            "rejected_code": 503,\n            "key": "remote_addr"\n        }\n    }\n}\n')),(0,i.kt)("p",null,"\u7b49\u4e8e"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'{\n    "uris": ["/index.html"],\n    "upstream": {\n        "type": "roundrobin",\n        "nodes": {\n            "127.0.0.1:1980": 1\n        }\n    }\n    "plugins": {\n        "ip-restriction": {\n            "whitelist": [\n                "127.0.0.0/24",\n                "113.74.26.106"\n            ]\n        },\n        "proxy-rewrite": {\n            "uri": "/test/add",\n            "scheme": "https",\n            "host": "apisix.iresty.com"\n        },\n        "limit-count": {\n            "count": 2,\n            "time_window": 60,\n            "rejected_code": 503\n        }\n    }\n}\n')))}a.isMDXComponent=!0}}]);