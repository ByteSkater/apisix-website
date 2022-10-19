"use strict";(self.webpackChunkdoc=self.webpackChunkdoc||[]).push([[43320],{3905:(e,n,t)=>{t.d(n,{Zo:()=>u,kt:()=>m});var a=t(67294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var d=a.createContext({}),s=function(e){var n=a.useContext(d),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},u=function(e){var n=s(e.components);return a.createElement(d.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},c=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,i=e.originalType,d=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),c=s(t),m=r,g=c["".concat(d,".").concat(m)]||c[m]||p[m]||i;return t?a.createElement(g,l(l({ref:n},u),{},{components:t})):a.createElement(g,l({ref:n},u))}));function m(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var i=t.length,l=new Array(i);l[0]=c;var o={};for(var d in n)hasOwnProperty.call(n,d)&&(o[d]=n[d]);o.originalType=e,o.mdxType="string"==typeof e?e:r,l[1]=o;for(var s=2;s<i;s++)l[s]=t[s];return a.createElement.apply(null,l)}return a.createElement.apply(null,t)}c.displayName="MDXCreateElement"},74995:(e,n,t)=>{t.r(n),t.d(n,{contentTitle:()=>l,default:()=>u,frontMatter:()=>i,metadata:()=>o,toc:()=>d});var a=t(87462),r=(t(67294),t(3905));const i={title:"request-validation",keywords:["APISIX","API Gateway","Request Validation"],description:"This document describes the information about the Apache APISIX request-validation Plugin, you can use it to validate the requests before forwarding them to an Upstream service."},l=void 0,o={unversionedId:"plugins/request-validation",id:"version-3.0.0-beta/plugins/request-validation",isDocsHomePage:!1,title:"request-validation",description:"This document describes the information about the Apache APISIX request-validation Plugin, you can use it to validate the requests before forwarding them to an Upstream service.",source:"@site/docs-apisix_versioned_docs/version-3.0.0-beta/plugins/request-validation.md",sourceDirName:"plugins",slug:"/plugins/request-validation",permalink:"/docs/apisix/plugins/request-validation",editUrl:null,tags:[],version:"3.0.0-beta",frontMatter:{title:"request-validation",keywords:["APISIX","API Gateway","Request Validation"],description:"This document describes the information about the Apache APISIX request-validation Plugin, you can use it to validate the requests before forwarding them to an Upstream service."},sidebar:"version-3.0.0-beta/docs",previous:{title:"proxy-cache",permalink:"/docs/apisix/plugins/proxy-cache"},next:{title:"proxy-mirror",permalink:"/docs/apisix/plugins/proxy-mirror"}},d=[{value:"Description",id:"description",children:[]},{value:"Attributes",id:"attributes",children:[]},{value:"Enabling the Plugin",id:"enabling-the-plugin",children:[{value:"Enum validation",id:"enum-validation",children:[]},{value:"Boolean validation",id:"boolean-validation",children:[]},{value:"Number or Integer validation",id:"number-or-integer-validation",children:[]},{value:"String validation",id:"string-validation",children:[]},{value:"Regular expression validation",id:"regular-expression-validation",children:[]},{value:"Array validation",id:"array-validation",children:[]},{value:"Combined validation",id:"combined-validation",children:[]},{value:"Custom rejection message",id:"custom-rejection-message",children:[]}]},{value:"Example usage",id:"example-usage",children:[]},{value:"Disable Plugin",id:"disable-plugin",children:[]}],s={toc:d};function u(e){let{components:n,...t}=e;return(0,r.kt)("wrapper",(0,a.Z)({},s,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"description"},"Description"),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"request-validation")," Plugin can be used to validate the requests before forwarding them to an Upstream service. This Plugin uses ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/api7/jsonschema"},"JSON Schema")," for validation and can be used to validate the headers and body of the request."),(0,r.kt)("h2",{id:"attributes"},"Attributes"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Required"),(0,r.kt)("th",{parentName:"tr",align:null},"Default"),(0,r.kt)("th",{parentName:"tr",align:null},"Valid values"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"header_schema"),(0,r.kt)("td",{parentName:"tr",align:null},"object"),(0,r.kt)("td",{parentName:"tr",align:null},"False"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"Schema for the request header data.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"body_schema"),(0,r.kt)("td",{parentName:"tr",align:null},"object"),(0,r.kt)("td",{parentName:"tr",align:null},"False"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"Schema for the request body data.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"rejected_code"),(0,r.kt)("td",{parentName:"tr",align:null},"integer"),(0,r.kt)("td",{parentName:"tr",align:null},"False"),(0,r.kt)("td",{parentName:"tr",align:null},"400"),(0,r.kt)("td",{parentName:"tr",align:null},"[200,...,599]"),(0,r.kt)("td",{parentName:"tr",align:null},"Status code to show when the request is rejected.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"rejected_msg"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"False"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"Message to show when the request is rejected.")))),(0,r.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"At least one of ",(0,r.kt)("inlineCode",{parentName:"p"},"header_schema")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"body_schema")," should be filled in."))),(0,r.kt)("h2",{id:"enabling-the-plugin"},"Enabling the Plugin"),(0,r.kt)("p",null,"You can configure the Plugin on a specific Route as shown below:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},'curl http://127.0.0.1:9180/apisix/admin/routes/5 \\\n-H \'X-API-KEY: edd1c9f034335f136f87ad84b625c8f1\' -X PUT -d \'\n{\n    "uri": "/get",\n    "plugins": {\n        "request-validation": {\n            "body_schema": {\n                "type": "object",\n                "required": ["required_payload"],\n                "properties": {\n                    "required_payload": {"type": "string"},\n                    "boolean_payload": {"type": "boolean"}\n                },\n                "rejected_msg": "customize reject message"\n            }\n        }\n    },\n    "upstream": {\n        "type": "roundrobin",\n        "nodes": {\n            "127.0.0.1:8080": 1\n        }\n    }\n}\'\n')),(0,r.kt)("p",null,"The examples below shows how you can configure this Plugin for different validation scenarios:"),(0,r.kt)("h3",{id:"enum-validation"},"Enum validation"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "body_schema": {\n        "type": "object",\n        "required": ["required_payload"],\n        "properties": {\n                "enum_payload": {\n                "type": "string",\n                "enum": ["enum_string_1", "enum_string_2"],\n                "default": "enum_string_1"\n            }\n        }\n    }\n}\n')),(0,r.kt)("h3",{id:"boolean-validation"},"Boolean validation"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "body_schema": {\n        "type": "object",\n        "required": ["bool_payload"],\n        "properties": {\n            "bool_payload": {\n                "type": "boolean",\n                "default": true\n            }\n        }\n    }\n}\n')),(0,r.kt)("h3",{id:"number-or-integer-validation"},"Number or Integer validation"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "body_schema": {\n        "type": "object",\n        "required": ["integer_payload"],\n        "properties": {\n            "integer_payload": {\n                "type": "integer",\n                "minimum": 1,\n                "maximum": 65535\n            }\n        }\n    }\n}\n')),(0,r.kt)("h3",{id:"string-validation"},"String validation"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "body_schema": {\n        "type": "object",\n        "required": ["string_payload"],\n        "properties": {\n            "string_payload": {\n                "type": "string",\n                "minLength": 1,\n                "maxLength": 32\n            }\n        }\n    }\n}\n')),(0,r.kt)("h3",{id:"regular-expression-validation"},"Regular expression validation"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "body_schema": {\n        "type": "object",\n        "required": ["regex_payload"],\n        "properties": {\n            "regex_payload": {\n                "type": "string",\n                "minLength": 1,\n                "maxLength": 32,\n                "pattern": "[[^[a-zA-Z0-9_]+$]]"\n            }\n        }\n    }\n}\n')),(0,r.kt)("h3",{id:"array-validation"},"Array validation"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "body_schema": {\n        "type": "object",\n        "required": ["array_payload"],\n        "properties": {\n            "array_payload": {\n                "type": "array",\n                "minItems": 1,\n                "items": {\n                    "type": "integer",\n                    "minimum": 200,\n                    "maximum": 599\n                },\n                "uniqueItems": true,\n                "default": [200, 302]\n            }\n        }\n    }\n}\n')),(0,r.kt)("h3",{id:"combined-validation"},"Combined validation"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "body_schema": {\n        "type": "object",\n        "required": ["boolean_payload", "array_payload", "regex_payload"],\n        "properties": {\n            "boolean_payload": {\n                "type": "boolean"\n            },\n            "array_payload": {\n                "type": "array",\n                "minItems": 1,\n                "items": {\n                    "type": "integer",\n                    "minimum": 200,\n                    "maximum": 599\n                },\n                "uniqueItems": true,\n                "default": [200, 302]\n            },\n            "regex_payload": {\n                "type": "string",\n                "minLength": 1,\n                "maxLength": 32,\n                "pattern": "[[^[a-zA-Z0-9_]+$]]"\n            }\n        }\n    }\n}\n')),(0,r.kt)("h3",{id:"custom-rejection-message"},"Custom rejection message"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "uri": "/get",\n  "plugins": {\n    "request-validation": {\n      "body_schema": {\n        "type": "object",\n        "required": ["required_payload"],\n        "properties": {\n          "required_payload": {"type": "string"},\n          "boolean_payload": {"type": "boolean"}\n        },\n        "rejected_msg": "customize reject message"\n      }\n    }\n  },\n  "upstream": {\n    "type": "roundrobin",\n    "nodes": {\n      "127.0.0.1:8080": 1\n    }\n  }\n}\n')),(0,r.kt)("h2",{id:"example-usage"},"Example usage"),(0,r.kt)("p",null,"Once you have configured the Plugin, it will only allow requests that are valid based on the configuration to reach the Upstream service. If not, the requests are rejected with a 400 or a custom status code you configured."),(0,r.kt)("p",null,"A valid request for the above configuration could look like this:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},'curl --header "Content-Type: application/json" \\\n  --request POST \\\n  --data \'{"boolean-payload":true,"required_payload":"hello"}\' \\\n  http://127.0.0.1:9080/get\n')),(0,r.kt)("h2",{id:"disable-plugin"},"Disable Plugin"),(0,r.kt)("p",null,"To disable the ",(0,r.kt)("inlineCode",{parentName:"p"},"request-validation")," Plugin, you can delete the corresponding JSON configuration from the Plugin configuration. APISIX will automatically reload and you do not have to restart for this to take effect."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},'curl http://127.0.0.1:9180/apisix/admin/routes/5 \\\n-H \'X-API-KEY: edd1c9f034335f136f87ad84b625c8f1\' -X PUT -d \'\n{\n    "uri": "/get",\n    "plugins": {\n    },\n    "upstream": {\n        "type": "roundrobin",\n        "nodes": {\n            "127.0.0.1:8080": 1\n        }\n    }\n}\'\n')))}u.isMDXComponent=!0}}]);