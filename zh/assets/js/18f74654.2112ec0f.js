"use strict";(self.webpackChunkdoc=self.webpackChunkdoc||[]).push([[88874],{3905:(t,e,n)=>{n.d(e,{Zo:()=>s,kt:()=>u});var a=n(67294);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function i(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function l(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?i(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function p(t,e){if(null==t)return{};var n,a,r=function(t,e){if(null==t)return{};var n,a,r={},i=Object.keys(t);for(a=0;a<i.length;a++)n=i[a],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(a=0;a<i.length;a++)n=i[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var o=a.createContext({}),c=function(t){var e=a.useContext(o),n=e;return t&&(n="function"==typeof t?t(e):l(l({},e),t)),n},s=function(t){var e=c(t.components);return a.createElement(o.Provider,{value:e},t.children)},d={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},m=a.forwardRef((function(t,e){var n=t.components,r=t.mdxType,i=t.originalType,o=t.parentName,s=p(t,["components","mdxType","originalType","parentName"]),m=c(n),u=r,k=m["".concat(o,".").concat(u)]||m[u]||d[u]||i;return n?a.createElement(k,l(l({ref:e},s),{},{components:n})):a.createElement(k,l({ref:e},s))}));function u(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var i=n.length,l=new Array(i);l[0]=m;var p={};for(var o in e)hasOwnProperty.call(e,o)&&(p[o]=e[o]);p.originalType=t,p.mdxType="string"==typeof t?t:r,l[1]=p;for(var c=2;c<i;c++)l[c]=n[c];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},3523:(t,e,n)=>{n.r(e),n.d(e,{contentTitle:()=>l,default:()=>s,frontMatter:()=>i,metadata:()=>p,toc:()=>o});var a=n(87462),r=(n(67294),n(3905));const i={title:"\u8bc1\u4e66"},l=void 0,p={unversionedId:"certificate",id:"certificate",isDocsHomePage:!1,title:"\u8bc1\u4e66",description:"APISIX \u652f\u6301\u901a\u8fc7 TLS \u6269\u5c55 SNI \u5b9e\u73b0\u52a0\u8f7d\u7279\u5b9a\u7684 SSL \u8bc1\u4e66\u4ee5\u5b9e\u73b0\u5bf9 https \u7684\u652f\u6301\u3002",source:"@site/i18n/zh/docusaurus-plugin-content-docs-docs-apisix/current/certificate.md",sourceDirName:".",slug:"/certificate",permalink:"/zh/docs/apisix/next/certificate",editUrl:"https://github.com/apache/apisix/edit/master/docs/zh/latest/certificate.md",tags:[],version:"current",frontMatter:{title:"\u8bc1\u4e66"},sidebar:"docs",previous:{title:"\u81ea\u5b9a\u4e49 Nginx \u914d\u7f6e",permalink:"/zh/docs/apisix/next/customize-nginx-configuration"},next:{title:"\u6279\u5904\u7406\u5668",permalink:"/zh/docs/apisix/next/batch-processor"}},o=[{value:"\u5355\u4e00\u57df\u540d\u6307\u5b9a",id:"\u5355\u4e00\u57df\u540d\u6307\u5b9a",children:[]},{value:"\u6cdb\u57df\u540d",id:"\u6cdb\u57df\u540d",children:[]},{value:"\u591a\u57df\u540d\u7684\u60c5\u51b5",id:"\u591a\u57df\u540d\u7684\u60c5\u51b5",children:[]},{value:"\u5355\u57df\u540d\u591a\u8bc1\u4e66\u7684\u60c5\u51b5",id:"\u5355\u57df\u540d\u591a\u8bc1\u4e66\u7684\u60c5\u51b5",children:[]},{value:"\u8bbe\u7f6e\u591a\u4e2a CA \u8bc1\u4e66",id:"\u8bbe\u7f6e\u591a\u4e2a-ca-\u8bc1\u4e66",children:[]}],c={toc:o};function s(t){let{components:e,...n}=t;return(0,r.kt)("wrapper",(0,a.Z)({},c,n,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"APISIX")," \u652f\u6301\u901a\u8fc7 TLS \u6269\u5c55 SNI \u5b9e\u73b0\u52a0\u8f7d\u7279\u5b9a\u7684 SSL \u8bc1\u4e66\u4ee5\u5b9e\u73b0\u5bf9 https \u7684\u652f\u6301\u3002"),(0,r.kt)("p",null,"SNI\uff08Server Name Indication\uff09\u662f\u7528\u6765\u6539\u5584 SSL \u548c TLS \u7684\u4e00\u9879\u7279\u6027\uff0c\u5b83\u5141\u8bb8\u5ba2\u6237\u7aef\u5728\u670d\u52a1\u5668\u7aef\u5411\u5176\u53d1\u9001\u8bc1\u4e66\u4e4b\u524d\u5411\u670d\u52a1\u5668\u7aef\u53d1\u9001\u8bf7\u6c42\u7684\u57df\u540d\uff0c\u670d\u52a1\u5668\u7aef\u6839\u636e\u5ba2\u6237\u7aef\u8bf7\u6c42\u7684\u57df\u540d\u9009\u62e9\u5408\u9002\u7684 SSL \u8bc1\u4e66\u53d1\u9001\u7ed9\u5ba2\u6237\u7aef\u3002"),(0,r.kt)("h3",{id:"\u5355\u4e00\u57df\u540d\u6307\u5b9a"},"\u5355\u4e00\u57df\u540d\u6307\u5b9a"),(0,r.kt)("p",null,"\u901a\u5e38\u60c5\u51b5\u4e0b\u4e00\u4e2a SSL \u8bc1\u4e66\u53ea\u5305\u542b\u4e00\u4e2a\u9759\u6001\u57df\u540d\uff0c\u914d\u7f6e\u4e00\u4e2a ",(0,r.kt)("inlineCode",{parentName:"p"},"ssl")," \u53c2\u6570\u5bf9\u8c61\uff0c\u5b83\u5305\u62ec ",(0,r.kt)("inlineCode",{parentName:"p"},"cert"),"\u3001",(0,r.kt)("inlineCode",{parentName:"p"},"key"),"\u548c",(0,r.kt)("inlineCode",{parentName:"p"},"sni"),"\u4e09\u4e2a\u5c5e\u6027\uff0c\u8be6\u7ec6\u5982\u4e0b\uff1a"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"cert"),"\uff1aSSL \u5bc6\u94a5\u5bf9\u7684\u516c\u94a5\uff0cpem \u683c\u5f0f"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"key"),"\uff1aSSL \u5bc6\u94a5\u5bf9\u7684\u79c1\u94a5\uff0cpem \u683c\u5f0f"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"snis"),"\uff1aSSL \u8bc1\u4e66\u6240\u6307\u5b9a\u7684\u4e00\u4e2a\u6216\u591a\u4e2a\u57df\u540d\uff0c\u6ce8\u610f\u5728\u8bbe\u7f6e\u8fd9\u4e2a\u53c2\u6570\u4e4b\u524d\uff0c\u4f60\u9700\u8981\u786e\u4fdd\u8fd9\u4e2a\u8bc1\u4e66\u5bf9\u5e94\u7684\u79c1\u94a5\u662f\u6709\u6548\u7684\u3002")),(0,r.kt)("p",null,"\u4e3a\u4e86\u7b80\u5316\u793a\u4f8b\uff0c\u6211\u4eec\u4f1a\u4f7f\u7528\u4e0b\u9762\u7684 Python \u811a\u672c\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},'#!/usr/bin/env python\n# coding: utf-8\n# save this file as ssl.py\nimport sys\n# sudo pip install requests\nimport requests\n\nif len(sys.argv) <= 3:\n    print("bad argument")\n    sys.exit(1)\nwith open(sys.argv[1]) as f:\n    cert = f.read()\nwith open(sys.argv[2]) as f:\n    key = f.read()\nsni = sys.argv[3]\napi_key = "edd1c9f034335f136f87ad84b625c8f1"\nresp = requests.put("http://127.0.0.1:9180/apisix/admin/ssls/1", json={\n    "cert": cert,\n    "key": key,\n    "snis": [sni],\n}, headers={\n    "X-API-KEY": api_key,\n})\nprint(resp.status_code)\nprint(resp.text)\n')),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},'# \u521b\u5efa SSL \u5bf9\u8c61\n./ssl.py t.crt t.key test.com\n\n# \u521b\u5efa Router \u5bf9\u8c61\ncurl http://127.0.0.1:9180/apisix/admin/routes/1 -H \'X-API-KEY: edd1c9f034335f136f87ad84b625c8f1\' -X PUT -i -d \'\n{\n    "uri": "/hello",\n    "hosts": ["test.com"],\n    "methods": ["GET"],\n    "upstream": {\n        "type": "roundrobin",\n        "nodes": {\n            "127.0.0.1:1980": 1\n        }\n    }\n}\'\n\n# \u6d4b\u8bd5\u4e00\u4e0b\n\ncurl --resolve \'test.com:9443:127.0.0.1\' https://test.com:9443/hello  -vvv\n* Added test.com:9443:127.0.0.1 to DNS cache\n* About to connect() to test.com port 9443 (#0)\n*   Trying 127.0.0.1...\n* Connected to test.com (127.0.0.1) port 9443 (#0)\n* Initializing NSS with certpath: sql:/etc/pki/nssdb\n* skipping SSL peer certificate verification\n* SSL connection using TLS_ECDHE_RSA_WITH_AES_256_GCM_SHA384\n* Server certificate:\n*   subject: CN=test.com,O=iresty,L=ZhuHai,ST=GuangDong,C=CN\n*   start date: Jun 24 22:18:05 2019 GMT\n*   expire date: May 31 22:18:05 2119 GMT\n*   common name: test.com\n*   issuer: CN=test.com,O=iresty,L=ZhuHai,ST=GuangDong,C=CN\n> GET /hello HTTP/1.1\n> User-Agent: curl/7.29.0\n> Host: test.com:9443\n> Accept: */*\n')),(0,r.kt)("h3",{id:"\u6cdb\u57df\u540d"},"\u6cdb\u57df\u540d"),(0,r.kt)("p",null,"\u4e00\u4e2a SSL \u8bc1\u4e66\u7684\u57df\u540d\u4e5f\u53ef\u80fd\u5305\u542b\u6cdb\u57df\u540d\uff0c\u5982 ",(0,r.kt)("inlineCode",{parentName:"p"},"*.test.com"),"\uff0c\u5b83\u4ee3\u8868\u6240\u6709\u4ee5 ",(0,r.kt)("inlineCode",{parentName:"p"},"test.com")," \u7ed3\u5c3e\u7684\u57df\u540d\u90fd\u53ef\u4ee5\u4f7f\u7528\u8be5\u8bc1\u4e66\u3002\n\u6bd4\u5982 ",(0,r.kt)("inlineCode",{parentName:"p"},"*.test.com"),"\uff0c\u53ef\u4ee5\u5339\u914d ",(0,r.kt)("inlineCode",{parentName:"p"},"www.test.com"),"\u3001",(0,r.kt)("inlineCode",{parentName:"p"},"mail.test.com"),"\u3002"),(0,r.kt)("p",null,"\u770b\u4e0b\u9762\u8fd9\u4e2a\u4f8b\u5b50\uff0c\u8bf7\u6ce8\u610f\u6211\u4eec\u628a ",(0,r.kt)("inlineCode",{parentName:"p"},"*.test.com")," \u4f5c\u4e3a sni \u4f20\u9012\u8fdb\u6765\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},'./ssl.py t.crt t.key \'*.test.com\'\n\ncurl http://127.0.0.1:9180/apisix/admin/routes/1 -H \'X-API-KEY: edd1c9f034335f136f87ad84b625c8f1\' -X PUT -i -d \'\n{\n    "uri": "/hello",\n    "hosts": ["*.test.com"],\n    "methods": ["GET"],\n    "upstream": {\n        "type": "roundrobin",\n        "nodes": {\n            "127.0.0.1:1980": 1\n        }\n    }\n}\'\n\n# \u6d4b\u8bd5\u4e00\u4e0b\n\ncurl --resolve \'www.test.com:9443:127.0.0.1\' https://www.test.com:9443/hello  -vvv\n* Added test.com:9443:127.0.0.1 to DNS cache\n* About to connect() to test.com port 9443 (#0)\n*   Trying 127.0.0.1...\n* Connected to test.com (127.0.0.1) port 9443 (#0)\n* Initializing NSS with certpath: sql:/etc/pki/nssdb\n* skipping SSL peer certificate verification\n* SSL connection using TLS_ECDHE_RSA_WITH_AES_256_GCM_SHA384\n* Server certificate:\n*   subject: CN=test.com,O=iresty,L=ZhuHai,ST=GuangDong,C=CN\n*   start date: Jun 24 22:18:05 2019 GMT\n*   expire date: May 31 22:18:05 2119 GMT\n*   common name: test.com\n*   issuer: CN=test.com,O=iresty,L=ZhuHai,ST=GuangDong,C=CN\n> GET /hello HTTP/1.1\n> User-Agent: curl/7.29.0\n> Host: test.com:9443\n> Accept: */*\n')),(0,r.kt)("h3",{id:"\u591a\u57df\u540d\u7684\u60c5\u51b5"},"\u591a\u57df\u540d\u7684\u60c5\u51b5"),(0,r.kt)("p",null,"\u5982\u679c\u4e00\u4e2a SSL \u8bc1\u4e66\u5305\u542b\u591a\u4e2a\u72ec\u7acb\u57df\u540d\uff0c\u6bd4\u5982 ",(0,r.kt)("inlineCode",{parentName:"p"},"www.test.com")," \u548c ",(0,r.kt)("inlineCode",{parentName:"p"},"mail.test.com"),"\uff0c\n\u4f60\u53ef\u4ee5\u628a\u5b83\u4eec\u90fd\u653e\u5165 ",(0,r.kt)("inlineCode",{parentName:"p"},"snis")," \u6570\u7ec4\u4e2d\uff0c\u5c31\u50cf\u8fd9\u6837\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "snis": ["www.test.com", "mail.test.com"]\n}\n')),(0,r.kt)("h3",{id:"\u5355\u57df\u540d\u591a\u8bc1\u4e66\u7684\u60c5\u51b5"},"\u5355\u57df\u540d\u591a\u8bc1\u4e66\u7684\u60c5\u51b5"),(0,r.kt)("p",null,"\u5982\u679c\u4f60\u671f\u671b\u4e3a\u4e00\u4e2a\u57df\u540d\u914d\u7f6e\u591a\u5f20\u8bc1\u4e66\uff0c\u4f8b\u5982\u4ee5\u6b64\u6765\u540c\u65f6\u652f\u6301\u4f7f\u7528 ECC \u548c RSA\n\u7684\u5bc6\u94a5\u4ea4\u6362\u7b97\u6cd5\uff0c\u90a3\u4e48\u4f60\u53ef\u4ee5\u5c06\u989d\u5916\u7684\u8bc1\u4e66\u548c\u79c1\u94a5\uff08\u7b2c\u4e00\u5f20\u8bc1\u4e66\u548c\u5176\u79c1\u94a5\u4f9d\u7136\u4f7f\u7528 ",(0,r.kt)("inlineCode",{parentName:"p"},"cert")," \u548c ",(0,r.kt)("inlineCode",{parentName:"p"},"key"),"\uff09\u914d\u7f6e\u5728 ",(0,r.kt)("inlineCode",{parentName:"p"},"certs")," \u548c ",(0,r.kt)("inlineCode",{parentName:"p"},"keys")," \u4e2d\u3002"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"certs"),"\uff1aPEM \u683c\u5f0f\u7684 SSL \u8bc1\u4e66\u5217\u8868"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"keys"),"\uff1aPEM \u683c\u5f0f\u7684 SSL \u8bc1\u4e66\u79c1\u94a5\u5217\u8868")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"APISIX")," \u4f1a\u5c06\u76f8\u540c\u4e0b\u6807\u7684\u8bc1\u4e66\u548c\u79c1\u94a5\u914d\u5bf9\u4f7f\u7528\uff0c\u56e0\u6b64 ",(0,r.kt)("inlineCode",{parentName:"p"},"certs")," \u548c ",(0,r.kt)("inlineCode",{parentName:"p"},"keys")," \u5217\u8868\u7684\u957f\u5ea6\u5fc5\u987b\u4e00\u81f4\u3002"),(0,r.kt)("h3",{id:"\u8bbe\u7f6e\u591a\u4e2a-ca-\u8bc1\u4e66"},"\u8bbe\u7f6e\u591a\u4e2a CA \u8bc1\u4e66"),(0,r.kt)("p",null,"APISIX \u76ee\u524d\u652f\u6301\u5728\u591a\u5904\u8bbe\u7f6e CA \u8bc1\u4e66\uff0c\u6bd4\u5982 ",(0,r.kt)("a",{parentName:"p",href:"https://apisix.apache.org/docs/apisix/architecture-design/deployment-role"},"\u4fdd\u62a4 Admin API")," \u7b49\u3002"),(0,r.kt)("p",null,"\u5728\u8fd9\u4e9b\u5730\u65b9\uff0c\u4f7f\u7528 ",(0,r.kt)("inlineCode",{parentName:"p"},"ssl_trusted_certificate")," \u6216 ",(0,r.kt)("inlineCode",{parentName:"p"},"trusted_ca_cert")," \u6765\u914d\u7f6e CA \u8bc1\u4e66\uff0c\u4f46\u662f\u8fd9\u4e9b\u914d\u7f6e\u6700\u7ec8\u5c06\u8f6c\u5316\u4e3a OpenResty \u7684 ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/openresty/lua-nginx-module#lua_ssl_trusted_certificate"},"lua_ssl_trusted_certificate")," \u6307\u4ee4\u3002"),(0,r.kt)("p",null,"\u5982\u679c\u4f60\u9700\u8981\u5728\u4e0d\u540c\u7684\u5730\u65b9\u6307\u5b9a\u4e0d\u540c\u7684 CA \u8bc1\u4e66\uff0c\u4f60\u53ef\u4ee5\u5c06\u8fd9\u4e9b CA \u8bc1\u4e66\u5236\u4f5c\u6210\u4e00\u4e2a CA bundle \u6587\u4ef6\uff0c\u5728\u9700\u8981\u7528\u5230 CA \u8bc1\u4e66\u7684\u5730\u65b9\u5c06\u914d\u7f6e\u6307\u5411\u8fd9\u4e2a\u6587\u4ef6\u3002\u8fd9\u6837\u53ef\u4ee5\u907f\u514d\u751f\u6210\u7684 ",(0,r.kt)("inlineCode",{parentName:"p"},"lua_ssl_trusted_certificate")," \u5b58\u5728\u591a\u5904\u5e76\u4e14\u4e92\u76f8\u8986\u76d6\u7684\u95ee\u9898\u3002"),(0,r.kt)("p",null,"\u4e0b\u9762\u7528\u4e00\u4e2a\u5b8c\u6574\u7684\u4f8b\u5b50\u6765\u5c55\u793a\u5982\u4f55\u5728 APISIX \u8bbe\u7f6e\u591a\u4e2a CA \u8bc1\u4e66\u3002"),(0,r.kt)("p",null,"\u5047\u8bbe\u8ba9 client \u4e0e APISIX Admin API\uff0cAPISIX \u4e0e ETCD \u4e4b\u95f4\u90fd\u4f7f\u7528 mTLS \u534f\u8bae\u8fdb\u884c\u901a\u4fe1\uff0c\u76ee\u524d\u6709\u4e24\u5f20 CA \u8bc1\u4e66\uff0c\u5206\u522b\u662f ",(0,r.kt)("inlineCode",{parentName:"p"},"foo_ca.crt")," \u548c ",(0,r.kt)("inlineCode",{parentName:"p"},"bar_ca.crt"),"\uff0c\u7528\u8fd9\u4e24\u5f20 CA \u8bc1\u4e66\u5404\u81ea\u7b7e\u53d1 client \u4e0e server \u8bc1\u4e66\u5bf9\uff0c",(0,r.kt)("inlineCode",{parentName:"p"},"foo_ca.crt")," \u53ca\u5176\u7b7e\u53d1\u7684\u8bc1\u4e66\u5bf9\u7528\u4e8e\u4fdd\u62a4 Admin API\uff0c",(0,r.kt)("inlineCode",{parentName:"p"},"bar_ca.crt")," \u53ca\u5176\u7b7e\u53d1\u7684\u8bc1\u4e66\u5bf9\u7528\u4e8e\u4fdd\u62a4 ETCD\u3002"),(0,r.kt)("p",null,"\u4e0b\u8868\u8be6\u7ec6\u5217\u51fa\u8fd9\u4e2a\u793a\u4f8b\u6240\u6d89\u53ca\u5230\u7684\u914d\u7f6e\u53ca\u5176\u4f5c\u7528\uff1a"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"\u914d\u7f6e"),(0,r.kt)("th",{parentName:"tr",align:null},"\u7c7b\u578b"),(0,r.kt)("th",{parentName:"tr",align:null},"\u7528\u9014"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"foo_ca.crt"),(0,r.kt)("td",{parentName:"tr",align:null},"CA \u8bc1\u4e66"),(0,r.kt)("td",{parentName:"tr",align:null},"\u7b7e\u53d1\u5ba2\u6237\u7aef\u4e0e APISIX Admin API \u8fdb\u884c mTLS \u901a\u4fe1\u6240\u9700\u7684\u6b21\u7ea7\u8bc1\u4e66\u3002")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"foo_client.crt"),(0,r.kt)("td",{parentName:"tr",align:null},"\u8bc1\u4e66"),(0,r.kt)("td",{parentName:"tr",align:null},"\u7531 ",(0,r.kt)("inlineCode",{parentName:"td"},"foo_ca.crt")," \u7b7e\u53d1\uff0c\u5ba2\u6237\u7aef\u4f7f\u7528\uff0c\u8bbf\u95ee APISIX Admin API \u65f6\u8bc1\u660e\u81ea\u8eab\u8eab\u4efd\u7684\u8bc1\u4e66\u3002")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"foo_client.key"),(0,r.kt)("td",{parentName:"tr",align:null},"\u5bc6\u94a5\u6587\u4ef6"),(0,r.kt)("td",{parentName:"tr",align:null},"\u7531 ",(0,r.kt)("inlineCode",{parentName:"td"},"foo_ca.crt")," \u7b7e\u53d1\uff0c\u5ba2\u6237\u7aef\u4f7f\u7528\uff0c\u8bbf\u95ee APISIX Admin API \u6240\u9700\u7684\u5bc6\u94a5\u6587\u4ef6\u3002")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"foo_server.crt"),(0,r.kt)("td",{parentName:"tr",align:null},"\u8bc1\u4e66"),(0,r.kt)("td",{parentName:"tr",align:null},"\u7531 ",(0,r.kt)("inlineCode",{parentName:"td"},"foo_ca.crt")," \u7b7e\u53d1\uff0cAPISIX \u4f7f\u7528\uff0c\u5bf9\u5e94 ",(0,r.kt)("inlineCode",{parentName:"td"},"admin_api_mtls.admin_ssl_cert")," \u914d\u7f6e\u9879\u3002")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"foo_server.key"),(0,r.kt)("td",{parentName:"tr",align:null},"\u5bc6\u94a5\u6587\u4ef6"),(0,r.kt)("td",{parentName:"tr",align:null},"\u7531 ",(0,r.kt)("inlineCode",{parentName:"td"},"foo_ca.crt")," \u7b7e\u53d1\uff0cAPISIX \u4f7f\u7528\uff0c\u5bf9\u5e94 ",(0,r.kt)("inlineCode",{parentName:"td"},"admin_api_mtls.admin_ssl_cert_key")," \u914d\u7f6e\u9879\u3002")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"admin.apisix.dev"),(0,r.kt)("td",{parentName:"tr",align:null},"\u57df\u540d"),(0,r.kt)("td",{parentName:"tr",align:null},"\u7b7e\u53d1 ",(0,r.kt)("inlineCode",{parentName:"td"},"foo_server.crt")," \u8bc1\u4e66\u65f6\u4f7f\u7528\u7684 Common Name\uff0c\u5ba2\u6237\u7aef\u901a\u8fc7\u8be5\u57df\u540d\u8bbf\u95ee APISIX Admin API")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"bar_ca.crt"),(0,r.kt)("td",{parentName:"tr",align:null},"CA \u8bc1\u4e66"),(0,r.kt)("td",{parentName:"tr",align:null},"\u7b7e\u53d1 APISIX \u4e0e ETCD \u8fdb\u884c mTLS \u901a\u4fe1\u6240\u9700\u7684\u6b21\u7ea7\u8bc1\u4e66\u3002")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"bar_etcd.crt"),(0,r.kt)("td",{parentName:"tr",align:null},"\u8bc1\u4e66"),(0,r.kt)("td",{parentName:"tr",align:null},"\u7531 ",(0,r.kt)("inlineCode",{parentName:"td"},"bar_ca.crt")," \u7b7e\u53d1\uff0cETCD \u4f7f\u7528\uff0c\u5bf9\u5e94 ETCD \u542f\u52a8\u547d\u4ee4\u4e2d\u7684 ",(0,r.kt)("inlineCode",{parentName:"td"},"--cert-file")," \u9009\u9879\u3002")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"bar_etcd.key"),(0,r.kt)("td",{parentName:"tr",align:null},"\u5bc6\u94a5\u6587\u4ef6"),(0,r.kt)("td",{parentName:"tr",align:null},"\u7531 ",(0,r.kt)("inlineCode",{parentName:"td"},"bar_ca.crt")," \u7b7e\u53d1\uff0cETCD \u4f7f\u7528\uff0c\u5bf9\u5e94 ETCD \u542f\u52a8\u547d\u4ee4\u4e2d\u7684 ",(0,r.kt)("inlineCode",{parentName:"td"},"--key-file")," \u9009\u9879\u3002")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"bar_apisix.crt"),(0,r.kt)("td",{parentName:"tr",align:null},"\u8bc1\u4e66"),(0,r.kt)("td",{parentName:"tr",align:null},"\u7531 ",(0,r.kt)("inlineCode",{parentName:"td"},"bar_ca.crt")," \u7b7e\u53d1\uff0cAPISIX \u4f7f\u7528\uff0c\u5bf9\u5e94 ",(0,r.kt)("inlineCode",{parentName:"td"},"etcd.tls.cert")," \u914d\u7f6e\u9879\u3002")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"bar_apisix.key"),(0,r.kt)("td",{parentName:"tr",align:null},"\u5bc6\u94a5\u6587\u4ef6"),(0,r.kt)("td",{parentName:"tr",align:null},"\u7531 ",(0,r.kt)("inlineCode",{parentName:"td"},"bar_ca.crt")," \u7b7e\u53d1\uff0cAPISIX \u4f7f\u7528\uff0c\u5bf9\u5e94 ",(0,r.kt)("inlineCode",{parentName:"td"},"etcd.tls.key")," \u914d\u7f6e\u9879\u3002")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"etcd.cluster.dev"),(0,r.kt)("td",{parentName:"tr",align:null},"\u57df\u540d"),(0,r.kt)("td",{parentName:"tr",align:null},"\u7b7e\u53d1 ",(0,r.kt)("inlineCode",{parentName:"td"},"bar_etcd.crt")," \u8bc1\u4e66\u65f6\u4f7f\u7528\u7684 Common Name\uff0cAPISIX \u4e0e ETCD \u8fdb\u884c mTLS \u901a\u4fe1\u65f6\uff0c\u4f7f\u7528\u8be5\u57df\u540d\u4f5c\u4e3a SNI\u3002\u5bf9\u5e94 ",(0,r.kt)("inlineCode",{parentName:"td"},"etcd.tls.sni")," \u914d\u7f6e\u9879\u3002")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"apisix.ca-bundle"),(0,r.kt)("td",{parentName:"tr",align:null},"CA bundle"),(0,r.kt)("td",{parentName:"tr",align:null},"\u7531 ",(0,r.kt)("inlineCode",{parentName:"td"},"foo_ca.crt")," \u4e0e ",(0,r.kt)("inlineCode",{parentName:"td"},"bar_ca.crt")," \u5408\u5e76\u800c\u6210\uff0c\u66ff\u4ee3 ",(0,r.kt)("inlineCode",{parentName:"td"},"foo_ca.crt")," \u4e0e ",(0,r.kt)("inlineCode",{parentName:"td"},"bar_ca.crt"),"\u3002")))),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"\u5236\u4f5c CA bundle \u6587\u4ef6")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"cat /path/to/foo_ca.crt /path/to/bar_ca.crt > apisix.ca-bundle\n")),(0,r.kt)("ol",{start:2},(0,r.kt)("li",{parentName:"ol"},"\u542f\u52a8 ETCD \u96c6\u7fa4\uff0c\u5e76\u5f00\u542f\u5ba2\u6237\u7aef\u9a8c\u8bc1")),(0,r.kt)("p",null,"\u5148\u7f16\u5199 ",(0,r.kt)("inlineCode",{parentName:"p"},"goreman")," \u914d\u7f6e\uff0c\u547d\u540d\u4e3a ",(0,r.kt)("inlineCode",{parentName:"p"},"Procfile-single-enable-mtls"),"\uff0c\u5185\u5bb9\u5982\u4e0b\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-text"},"# \u8fd0\u884c `go get github.com/mattn/goreman` \u5b89\u88c5 goreman\uff0c\u7528 goreman \u6267\u884c\u4ee5\u4e0b\u547d\u4ee4\uff1a\netcd1: etcd --name infra1 --listen-client-urls https://127.0.0.1:12379 --advertise-client-urls https://127.0.0.1:12379 --listen-peer-urls http://127.0.0.1:12380 --initial-advertise-peer-urls http://127.0.0.1:12380 --initial-cluster-token etcd-cluster-1 --initial-cluster 'infra1=http://127.0.0.1:12380,infra2=http://127.0.0.1:22380,infra3=http://127.0.0.1:32380' --initial-cluster-state new --cert-file /path/to/bar_etcd.crt --key-file /path/to/bar_etcd.key --client-cert-auth --trusted-ca-file /path/to/apisix.ca-bundle\netcd2: etcd --name infra2 --listen-client-urls https://127.0.0.1:22379 --advertise-client-urls https://127.0.0.1:22379 --listen-peer-urls http://127.0.0.1:22380 --initial-advertise-peer-urls http://127.0.0.1:22380 --initial-cluster-token etcd-cluster-1 --initial-cluster 'infra1=http://127.0.0.1:12380,infra2=http://127.0.0.1:22380,infra3=http://127.0.0.1:32380' --initial-cluster-state new --cert-file /path/to/bar_etcd.crt --key-file /path/to/bar_etcd.key --client-cert-auth --trusted-ca-file /path/to/apisix.ca-bundle\netcd3: etcd --name infra3 --listen-client-urls https://127.0.0.1:32379 --advertise-client-urls https://127.0.0.1:32379 --listen-peer-urls http://127.0.0.1:32380 --initial-advertise-peer-urls http://127.0.0.1:32380 --initial-cluster-token etcd-cluster-1 --initial-cluster 'infra1=http://127.0.0.1:12380,infra2=http://127.0.0.1:22380,infra3=http://127.0.0.1:32380' --initial-cluster-state new --cert-file /path/to/bar_etcd.crt --key-file /path/to/bar_etcd.key --client-cert-auth --trusted-ca-file /path/to/apisix.ca-bundle\n")),(0,r.kt)("p",null,"\u4f7f\u7528 ",(0,r.kt)("inlineCode",{parentName:"p"},"goreman")," \u6765\u542f\u52a8 ETCD \u96c6\u7fa4\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"goreman -f Procfile-single-enable-mtls start > goreman.log 2>&1 &\n")),(0,r.kt)("ol",{start:3},(0,r.kt)("li",{parentName:"ol"},"\u66f4\u65b0 ",(0,r.kt)("inlineCode",{parentName:"li"},"config.yaml"))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},'deployment:\n  admin:\n    admin_key\n      - name: admin\n        key: edd1c9f034335f136f87ad84b625c8f1\n        role: admin\n    admin_listen:\n      ip: 127.0.0.1\n      port: 9180\n    https_admin: true\n    admin_api_mtls:\n      admin_ssl_ca_cert: /path/to/apisix.ca-bundle\n      admin_ssl_cert: /path/to/foo_server.crt\n      admin_ssl_cert_key: /path/to/foo_server.key\n\napisix:\n  ssl:\n    ssl_trusted_certificate: /path/to/apisix.ca-bundle\n\ndeployment:\n  role: traditional\n  role_traditional:\n    config_provider: etcd\n  etcd:\n    host:\n      - "https://127.0.0.1:12379"\n      - "https://127.0.0.1:22379"\n      - "https://127.0.0.1:32379"\n    tls:\n      cert: /path/to/bar_apisix.crt\n      key: /path/to/bar_apisix.key\n      sni: etcd.cluster.dev\n')),(0,r.kt)("ol",{start:4},(0,r.kt)("li",{parentName:"ol"},"\u6d4b\u8bd5 Admin API")),(0,r.kt)("p",null,"\u542f\u52a8 APISIX\uff0c\u5982\u679c APISIX \u542f\u52a8\u6210\u529f\uff0c",(0,r.kt)("inlineCode",{parentName:"p"},"logs/error.log")," \u4e2d\u6ca1\u6709\u5f02\u5e38\u8f93\u51fa\uff0c\u8868\u793a APISIX \u4e0e ETCD \u4e4b\u95f4\u8fdb\u884c mTLS \u901a\u4fe1\u6b63\u5e38\u3002"),(0,r.kt)("p",null,"\u7528 curl \u6a21\u62df\u5ba2\u6237\u7aef\uff0c\u4e0e APISIX Admin API \u8fdb\u884c mTLS \u901a\u4fe1\uff0c\u5e76\u521b\u5efa\u4e00\u6761\u8def\u7531\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},'curl -vvv \\\n    --resolve \'admin.apisix.dev:9180:127.0.0.1\' https://admin.apisix.dev:9180/apisix/admin/routes/1 \\\n    --cert /path/to/foo_client.crt \\\n    --key /path/to/foo_client.key \\\n    --cacert /path/to/apisix.ca-bundle \\\n    -H \'X-API-KEY: edd1c9f034335f136f87ad84b625c8f1\' -X PUT -i -d \'\n{\n    "uri": "/get",\n    "upstream": {\n        "type": "roundrobin",\n        "nodes": {\n            "httpbin.org:80": 1\n        }\n    }\n}\'\n')),(0,r.kt)("p",null,"\u5982\u679c\u8f93\u51fa\u4ee5\u4e0b SSL \u63e1\u624b\u8fc7\u7a0b\uff0c\u8868\u793a curl \u4e0e APISIX Admin API \u4e4b\u95f4 mTLS \u901a\u4fe1\u6210\u529f\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"* TLSv1.3 (OUT), TLS handshake, Client hello (1):\n* TLSv1.3 (IN), TLS handshake, Server hello (2):\n* TLSv1.3 (IN), TLS handshake, Encrypted Extensions (8):\n* TLSv1.3 (IN), TLS handshake, Request CERT (13):\n* TLSv1.3 (IN), TLS handshake, Certificate (11):\n* TLSv1.3 (IN), TLS handshake, CERT verify (15):\n* TLSv1.3 (IN), TLS handshake, Finished (20):\n* TLSv1.3 (OUT), TLS change cipher, Change cipher spec (1):\n* TLSv1.3 (OUT), TLS handshake, Certificate (11):\n* TLSv1.3 (OUT), TLS handshake, CERT verify (15):\n* TLSv1.3 (OUT), TLS handshake, Finished (20):\n* SSL connection using TLSv1.3 / TLS_AES_256_GCM_SHA384\n")),(0,r.kt)("ol",{start:5},(0,r.kt)("li",{parentName:"ol"},"\u9a8c\u8bc1 APISIX \u4ee3\u7406")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"curl http://127.0.0.1:9080/get -i\n\nHTTP/1.1 200 OK\nContent-Type: application/json\nContent-Length: 298\nConnection: keep-alive\nDate: Tue, 26 Jul 2022 16:31:00 GMT\nAccess-Control-Allow-Origin: *\nAccess-Control-Allow-Credentials: true\nServer: APISIX/2.14.1\n\n\u2026\u2026\n")),(0,r.kt)("p",null,"APISIX \u5c06\u8bf7\u6c42\u4ee3\u7406\u5230\u4e86\u4e0a\u6e38 ",(0,r.kt)("inlineCode",{parentName:"p"},"httpbin.org")," \u7684 ",(0,r.kt)("inlineCode",{parentName:"p"},"/get")," \u8def\u5f84\uff0c\u5e76\u8fd4\u56de\u4e86 ",(0,r.kt)("inlineCode",{parentName:"p"},"HTTP/1.1 200 OK"),"\u3002\u6574\u4e2a\u8fc7\u7a0b\u4f7f\u7528 CA bundle \u66ff\u4ee3 CA \u8bc1\u4e66\u662f\u6b63\u5e38\u53ef\u7528\u7684\u3002"))}s.isMDXComponent=!0}}]);