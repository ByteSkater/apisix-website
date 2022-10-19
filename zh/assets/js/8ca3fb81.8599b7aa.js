"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[6169],{35318:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>m});var r=n(27378);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),c=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(p.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},s=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,p=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),s=c(n),m=a,h=s["".concat(p,".").concat(m)]||s[m]||d[m]||l;return n?r.createElement(h,i(i({ref:t},u),{},{components:n})):r.createElement(h,i({ref:t},u))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,i=new Array(l);i[0]=s;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o.mdxType="string"==typeof e?e:a,i[1]=o;for(var c=2;c<l;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}s.displayName="MDXCreateElement"},27453:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>d,frontMatter:()=>l,metadata:()=>o,toc:()=>c});var r=n(25773),a=(n(27378),n(35318));const l={title:"\u76f4\u64ad\u9884\u544a | \u5f00\u6e90+\u4e91\u539f\u751f\u52a9\u529b\u4f01\u4e1a\u4e0a\u4e91\u4e0e\u884c\u52a8\u843d\u5730",keywords:["Apache APISIX","QingCloud","cloud native","API \u7f51\u5173"],description:"1 \u6708 28 \u65e5\uff0cApache APISIX \u793e\u533a\u5c06\u8054\u5408\u9752\u4e91\u4e3a\u5927\u5bb6\u5e26\u6765\u7ebf\u4e0a\u5206\u4eab\uff0c\u5feb\u6765\u770b\u770b\u6709\u54ea\u4e9b\u7cbe\u5f69\u7684\u8bae\u9898\u5427!",tags:["Community"]},i=void 0,o={permalink:"/zh/blog/2022/01/24/apisix-with-qingcloud-meetup",source:"@site/blog/2022/01/24/apisix-with-qingcloud-meetup.md",title:"\u76f4\u64ad\u9884\u544a | \u5f00\u6e90+\u4e91\u539f\u751f\u52a9\u529b\u4f01\u4e1a\u4e0a\u4e91\u4e0e\u884c\u52a8\u843d\u5730",description:"1 \u6708 28 \u65e5\uff0cApache APISIX \u793e\u533a\u5c06\u8054\u5408\u9752\u4e91\u4e3a\u5927\u5bb6\u5e26\u6765\u7ebf\u4e0a\u5206\u4eab\uff0c\u5feb\u6765\u770b\u770b\u6709\u54ea\u4e9b\u7cbe\u5f69\u7684\u8bae\u9898\u5427!",date:"2022-01-24T00:00:00.000Z",formattedDate:"2022\u5e741\u670824\u65e5",tags:[{label:"Community",permalink:"/zh/blog/tags/community"}],readingTime:1.295,truncated:!0,authors:[],prevItem:{title:"Apache APISIX 2.12.0 \u6b63\u5f0f\u53d1\u5e03",permalink:"/zh/blog/2022/01/25/release-apache-apisix-2.12"},nextItem:{title:"Apache APISIX \u96c6\u6210 HashiCorp Vault\uff0c\u751f\u6001\u7cfb\u7edf\u518d\u6dfb\u4e00\u5458",permalink:"/zh/blog/2022/01/21/apisix-hashicorp-vault-integration"}},p={authorsImageUrls:[]},c=[{value:"\u8bae\u9898 1\uff1aAPI\u7f51\u5173\u4e0a\u4e91\uff0c\u5982\u4f55\u5b9a\u4e49\u4e00\u6b3e\u597d\u7684API\u7f51\u5173",id:"\u8bae\u9898-1api\u7f51\u5173\u4e0a\u4e91\u5982\u4f55\u5b9a\u4e49\u4e00\u6b3e\u597d\u7684api\u7f51\u5173",children:[{value:"\u5206\u4eab\u5609\u5bbe",id:"\u5206\u4eab\u5609\u5bbe",children:[],level:3},{value:"\u8bae\u9898\u8be6\u60c5",id:"\u8bae\u9898\u8be6\u60c5",children:[],level:3}],level:2},{value:"\u8bae\u9898 2\uff1aRun Apache APISIX in hybrid cloud",id:"\u8bae\u9898-2run-apache-apisix-in-hybrid-cloud",children:[{value:"\u5206\u4eab\u5609\u5bbe",id:"\u5206\u4eab\u5609\u5bbe-1",children:[],level:3},{value:"\u8bae\u9898\u8be6\u60c5",id:"\u8bae\u9898\u8be6\u60c5-1",children:[],level:3}],level:2},{value:"\u53c2\u4e0e\u65b9\u5f0f",id:"\u53c2\u4e0e\u65b9\u5f0f",children:[],level:2}],u={toc:c};function d(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"1 \u6708 28 \u65e5\uff0cApache APISIX \u793e\u533a\u5c06\u8054\u5408\u9752\u4e91\u4e3a\u5927\u5bb6\u5e26\u6765\u7ebf\u4e0a\u5206\u4eab\uff0c\u5feb\u6765\u770b\u770b\u6709\u54ea\u4e9b\u7cbe\u5f69\u7684\u8bae\u9898\u5427!")),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://static.apiseven.com/202108/1642747565874-a3e854c3-81ea-460b-aec6-1a23b28912f7.png",alt:"\u6d3b\u52a8\u6d77\u62a5"})),(0,a.kt)("h2",{id:"\u8bae\u9898-1api\u7f51\u5173\u4e0a\u4e91\u5982\u4f55\u5b9a\u4e49\u4e00\u6b3e\u597d\u7684api\u7f51\u5173"},"\u8bae\u9898 1\uff1aAPI\u7f51\u5173\u4e0a\u4e91\uff0c\u5982\u4f55\u5b9a\u4e49\u4e00\u6b3e\u597d\u7684API\u7f51\u5173"),(0,a.kt)("h3",{id:"\u5206\u4eab\u5609\u5bbe"},"\u5206\u4eab\u5609\u5bbe"),(0,a.kt)("p",null,"\u5218\u5e86\uff0c\u9752\u4e91 QingCloud API \u7f51\u5173\u4ea7\u54c1\u7ecf\u7406"),(0,a.kt)("p",null,"\u7fdf\u70bc\uff0c\u9752\u4e91 QingCloud API \u7f51\u5173\u6280\u672f\u67b6\u6784"),(0,a.kt)("h3",{id:"\u8bae\u9898\u8be6\u60c5"},"\u8bae\u9898\u8be6\u60c5"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"\u4e3a\u4ec0\u4e48 API \u7f51\u5173\u4e0a\u4e91\uff0c\u89e3\u51b3\u4e86\u7528\u6237\u54ea\u4e9b\u75db\u70b9"),(0,a.kt)("li",{parentName:"ol"},"\u6211\u4eec\u5982\u4f55\u7406\u89e3\u548c\u5b9a\u4e49\u4e00\u6b3e\u597d\u7684 API \u7f51\u5173\u4ea7\u54c1"),(0,a.kt)("li",{parentName:"ol"},"\u9752\u4e91 QingCloud API \u7f51\u5173\u7684\u91cd\u8981\u4ea7\u54c1\u7279\u6027\u3001\u529f\u80fd\u53ca\u5e94\u7528\u573a\u666f")),(0,a.kt)("h2",{id:"\u8bae\u9898-2run-apache-apisix-in-hybrid-cloud"},"\u8bae\u9898 2\uff1aRun Apache APISIX in hybrid cloud"),(0,a.kt)("h3",{id:"\u5206\u4eab\u5609\u5bbe-1"},"\u5206\u4eab\u5609\u5bbe"),(0,a.kt)("p",null,"\u91d1\u536b\uff0cAPI7 Enginee\uff0cApache APISIX PMC\uff0cApache APISIX Ingress Controller Founder"),(0,a.kt)("h3",{id:"\u8bae\u9898\u8be6\u60c5-1"},"\u8bae\u9898\u8be6\u60c5"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Apache APISIX \u4e0e\u5404\u4e2a\u516c\u6709\u4e91\u7684\u96c6\u6210\uff08\u63d2\u4ef6\u548c\u5b9e\u9645\u5e94\u7528\uff09"),(0,a.kt)("li",{parentName:"ol"},"\u6df7\u5408\u4e91\u4e0b Apache APISIX \u7684\u67b6\u6784\u548c\u5b9e\u8df5"),(0,a.kt)("li",{parentName:"ol"},"Apache APISIX \u5728\u516c\u6709\u4e91\u7684\u5b9e\u8df5")),(0,a.kt)("h2",{id:"\u53c2\u4e0e\u65b9\u5f0f"},"\u53c2\u4e0e\u65b9\u5f0f"),(0,a.kt)("p",null,"\u626b\u7801\u5173\u6ce8\u4e0b\u65b9\u89c6\u9891\u53f7\uff0c\u9884\u7ea6\u672c\u6b21\u76f4\u64ad\u3002"),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://static.apiseven.com/202108/1642745385238-f661f79d-d429-41d0-95b9-ad85d8d08ce0.png",alt:"QR code"})),(0,a.kt)("p",null,"1 \u6708 28 \u65e5\u4e0b\u5348\uff0c\u671f\u5f85\u4e0e\u60a8\u5728\u76f4\u64ad\u95f4\u76f8\u9047\uff01"))}d.isMDXComponent=!0}}]);