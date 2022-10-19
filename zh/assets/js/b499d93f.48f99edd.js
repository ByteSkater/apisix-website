"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[3319],{35318:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>m});var n=r(27378);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var p=n.createContext({}),c=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=c(e.components);return n.createElement(p.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},g=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),g=c(r),m=a,y=g["".concat(p,".").concat(m)]||g[m]||s[m]||o;return r?n.createElement(y,i(i({ref:t},u),{},{components:r})):n.createElement(y,i({ref:t},u))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=g;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var c=2;c<o;c++)i[c]=r[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}g.displayName="MDXCreateElement"},87284:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>s,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var n=r(25773),a=(r(27378),r(35318));const o={title:"\u653e\u5f03 Spring Cloud Gateway\uff01APISIX \u5728\u300c\u8fd8\u5457\u300d\u7684\u6280\u672f\u5b9e\u8df5",author:"\u738b\u6654\u501e",authorURL:"https://github.com/wang-yeliang",authorImageURL:"https://github.com/wang-yeliang.png",keywords:["Apache APISIX","\u91d1\u878d","Java","API \u7f51\u5173","Spring Cloud"],description:"\u672c\u6587\u5c06\u4ecb\u7ecd\u4f5c\u4e3a\u91d1\u878d\u4f01\u4e1a\u7684\u8fd8\u5457\uff0c\u4e3a\u4f55\u5f03\u7528 Spring Cloud Gateway \u800c\u9009\u62e9 APISIX \u4f5c\u4e3a\u4ed6\u4eec\u7684\u7f51\u5173\u3002",tags:["Case Studies"]},i=void 0,l={permalink:"/zh/blog/2022/09/30/huanbei-in-apache-apisix",source:"@site/blog/2022/09/30/huanbei-in-apache-apisix.md",title:"\u653e\u5f03 Spring Cloud Gateway\uff01APISIX \u5728\u300c\u8fd8\u5457\u300d\u7684\u6280\u672f\u5b9e\u8df5",description:"\u672c\u6587\u5c06\u4ecb\u7ecd\u4f5c\u4e3a\u91d1\u878d\u4f01\u4e1a\u7684\u8fd8\u5457\uff0c\u4e3a\u4f55\u5f03\u7528 Spring Cloud Gateway \u800c\u9009\u62e9 APISIX \u4f5c\u4e3a\u4ed6\u4eec\u7684\u7f51\u5173\u3002",date:"2022-09-30T00:00:00.000Z",formattedDate:"2022\u5e749\u670830\u65e5",tags:[{label:"Case Studies",permalink:"/zh/blog/tags/case-studies"}],readingTime:19.63,truncated:!0,authors:[{name:"\u738b\u6654\u501e",url:"https://github.com/wang-yeliang",imageURL:"https://github.com/wang-yeliang.png"}],prevItem:{title:"\u793e\u533a\u53cc\u5468\u62a5 (10.1 - 10.15)",permalink:"/zh/blog/2022/10/18/weekly-report-0731"},nextItem:{title:"APISIX 3.0.0 \u9884\u89c8\u7248\u73b0\u5df2\u53d1\u5e03\uff01\u5e26\u6765\u4e30\u5bcc\u529f\u80fd\u4e0e\u8fed\u4ee3\u7ec6\u8282",permalink:"/zh/blog/2022/09/28/apache-apisix-3.0.0-beta-release"}},p={authorsImageUrls:[void 0]},c=[],u={toc:c};function s(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"\u672c\u6587\u5c06\u4ecb\u7ecd\u4f5c\u4e3a\u91d1\u878d\u4f01\u4e1a\u7684\u8fd8\u5457\uff0c\u4e3a\u4f55\u5f03\u7528 Spring Cloud Gateway \u800c\u9009\u62e9 APISIX \u4f5c\u4e3a\u4ed6\u4eec\u7684\u7f51\u5173\u3002")))}s.isMDXComponent=!0}}]);