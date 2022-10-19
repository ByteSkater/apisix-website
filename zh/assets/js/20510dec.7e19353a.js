"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[8138],{5318:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>d});var n=r(7378);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),p=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},u=function(e){var t=p(e.components);return n.createElement(l.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),m=p(r),d=a,f=m["".concat(l,".").concat(d)]||m[d]||s[d]||i;return r?n.createElement(f,c(c({ref:t},u),{},{components:r})):n.createElement(f,c({ref:t},u))}));function d(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,c=new Array(i);c[0]=m;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o.mdxType="string"==typeof e?e:a,c[1]=o;for(var p=2;p<i;p++)c[p]=r[p];return n.createElement.apply(null,c)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},2055:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>c,default:()=>s,frontMatter:()=>i,metadata:()=>o,toc:()=>p});var n=r(5773),a=(r(7378),r(5318));const i={title:"\u4f9d\u6258\u793e\u533a\u8ba9 Apache APISIX \u9ad8\u901f\u53d1\u5c55",date:new Date("2021-08-06T16:10:00.000Z"),keywords:["APISIX","API \u7f51\u5173","\u5f00\u6e90","\u793e\u533a","\u8d21\u732e\u8005"],description:"\u5728\u8fc7\u53bb\u7684\u4e00\u5e74\u91cc\uff0cAPISIX \u5df2\u7ecf\u6210\u4e3a\u5168\u4e16\u754c\u6700\u6d3b\u8dc3\u7684 API \u7f51\u5173\u9879\u76ee\uff0c\u9664\u4e86\u81ea\u8eab\u6280\u672f\u5148\u8fdb\u5916\uff0c\u66f4\u5f97\u610f\u4e8e\u793e\u533a\u7684\u9ad8\u5ea6\u6d3b\u8dc3\u3002\u622a\u6b62\u76ee\u524d\uff0c\u5df2\u7ecf\u6709\u6765\u81ea\u4e16\u754c\u5404\u5730 225 \u4f4d\u8d21\u732e\u8005\u53c2\u4e0e\u8d21\u732e\uff0c\u5e76\u4e14\u8fd8\u5728\u4fdd\u6301\u9ad8\u901f\u589e\u957f\u3002 \u672c\u6b21\u5206\u4eab\u4f1a\u4ecb\u7ecd APISIX \u5728\u8df5\u884c\u201c\u793e\u533a\u91cd\u4e8e\u4ee3\u7801\u201d\u8fc7\u7a0b\u7684\u4e00\u4e9b\u5fc3\u5f97\u3002\u4f5c\u4e3a\u4e00\u4e2a\u7406\u60f3\u4e3b\u4e49\u521b\u4e1a\u8005\uff0c\u53c8\u662f\u5982\u4f55\u4e0e Apache \u6587\u5316\u7ed3\u5408\uff0c\u8ba9\u521b\u4e1a\u516c\u53f8\u4e5f\u80fd\u9ad8\u901f\u53d1\u5c55\u3002"},c=void 0,o={permalink:"/zh/articles/Relying-On-The-Community-To-Get-Apache-APISIX-Up-Speed",source:"@site/articles/Relying-On-The-Community-To-Get-Apache-APISIX-Up-Speed.md",title:"\u4f9d\u6258\u793e\u533a\u8ba9 Apache APISIX \u9ad8\u901f\u53d1\u5c55",description:"\u5728\u8fc7\u53bb\u7684\u4e00\u5e74\u91cc\uff0cAPISIX \u5df2\u7ecf\u6210\u4e3a\u5168\u4e16\u754c\u6700\u6d3b\u8dc3\u7684 API \u7f51\u5173\u9879\u76ee\uff0c\u9664\u4e86\u81ea\u8eab\u6280\u672f\u5148\u8fdb\u5916\uff0c\u66f4\u5f97\u610f\u4e8e\u793e\u533a\u7684\u9ad8\u5ea6\u6d3b\u8dc3\u3002\u622a\u6b62\u76ee\u524d\uff0c\u5df2\u7ecf\u6709\u6765\u81ea\u4e16\u754c\u5404\u5730 225 \u4f4d\u8d21\u732e\u8005\u53c2\u4e0e\u8d21\u732e\uff0c\u5e76\u4e14\u8fd8\u5728\u4fdd\u6301\u9ad8\u901f\u589e\u957f\u3002 \u672c\u6b21\u5206\u4eab\u4f1a\u4ecb\u7ecd APISIX \u5728\u8df5\u884c\u201c\u793e\u533a\u91cd\u4e8e\u4ee3\u7801\u201d\u8fc7\u7a0b\u7684\u4e00\u4e9b\u5fc3\u5f97\u3002\u4f5c\u4e3a\u4e00\u4e2a\u7406\u60f3\u4e3b\u4e49\u521b\u4e1a\u8005\uff0c\u53c8\u662f\u5982\u4f55\u4e0e Apache \u6587\u5316\u7ed3\u5408\uff0c\u8ba9\u521b\u4e1a\u516c\u53f8\u4e5f\u80fd\u9ad8\u901f\u53d1\u5c55\u3002",date:"2021-08-06T16:10:00.000Z",formattedDate:"2021\u5e748\u67086\u65e5",tags:[],readingTime:1.04,truncated:!1,authors:[],prevItem:{title:"Apache APISIX \u7684\u5b75\u5316\u5668\u4e4b\u65c5",permalink:"/zh/articles/Apache-APISIX-Incubator-Journey"},nextItem:{title:"\u4f7f\u7528 ECharts \u5448\u73b0\u793e\u533a\u6d3b\u52a8\u7684\u6e32\u67d3\u56fe",permalink:"/zh/articles/Rendering-Community-Events-Using-ECharts"}},l={authorsImageUrls:[]},p=[{value:"\u5206\u4eab\u4eba\u7b80\u4ecb",id:"\u5206\u4eab\u4eba\u7b80\u4ecb",children:[]},{value:"\u5206\u4eab\u4e3b\u9898\u4ecb\u7ecd",id:"\u5206\u4eab\u4e3b\u9898\u4ecb\u7ecd",children:[]},{value:"PPT \u4e0b\u8f7d",id:"ppt-\u4e0b\u8f7d",children:[]}],u={toc:p};function s(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("iframe",{src:"//player.bilibili.com/player.html?aid=762343193&bvid=BV1Q64y1Y7fF&cid=388411338&page=1",frameborder:"0",scrolling:"no",allowfullscreen:"true",style:{width:"100%",maxHeight:"calc(100vw / 5 * 3)",height:"calc(100vh / 5 * 3)"}}),(0,a.kt)("h2",{id:"\u5206\u4eab\u4eba\u7b80\u4ecb"},"\u5206\u4eab\u4eba\u7b80\u4ecb"),(0,a.kt)("p",null,"\u738b\u9662\u751f\uff0c\u5f00\u6e90\u7231\u597d\u8005 Apache APISIX \u521b\u59cb\u4eba\u548c PMC \u6210\u5458"),(0,a.kt)("h2",{id:"\u5206\u4eab\u4e3b\u9898\u4ecb\u7ecd"},"\u5206\u4eab\u4e3b\u9898\u4ecb\u7ecd"),(0,a.kt)("p",null,"\u5728\u8fc7\u53bb\u7684\u4e00\u5e74\u91cc\uff0cAPISIX \u5df2\u7ecf\u6210\u4e3a\u5168\u4e16\u754c\u6700\u6d3b\u8dc3\u7684 API \u7f51\u5173\u9879\u76ee\uff0c\u9664\u4e86\u81ea\u8eab\u6280\u672f\u5148\u8fdb\u5916\uff0c\u66f4\u5f97\u610f\u4e8e\u793e\u533a\u7684\u9ad8\u5ea6\u6d3b\u8dc3\u3002\u622a\u6b62\u76ee\u524d\uff0c\u5df2\u7ecf\u6709\u6765\u81ea\u4e16\u754c\u5404\u5730 225 \u4f4d\u8d21\u732e\u8005\u53c2\u4e0e\u8d21\u732e\uff0c\u5e76\u4e14\u8fd8\u5728\u4fdd\u6301\u9ad8\u901f\u589e\u957f\u3002 \u672c\u6b21\u5206\u4eab\u4f1a\u4ecb\u7ecd APISIX \u5728\u8df5\u884c\u201c\u793e\u533a\u91cd\u4e8e\u4ee3\u7801\u201d\u8fc7\u7a0b\u7684\u4e00\u4e9b\u5fc3\u5f97\u3002\u4f5c\u4e3a\u4e00\u4e2a\u7406\u60f3\u4e3b\u4e49\u521b\u4e1a\u8005\uff0c\u53c8\u662f\u5982\u4f55\u4e0e Apache \u6587\u5316\u7ed3\u5408\uff0c\u8ba9\u521b\u4e1a\u516c\u53f8\u4e5f\u80fd\u9ad8\u901f\u53d1\u5c55\u3002"),(0,a.kt)("h2",{id:"ppt-\u4e0b\u8f7d"},"PPT \u4e0b\u8f7d"),(0,a.kt)("p",null,"\u5173\u6ce8 Apache APISIX \u516c\u4f17\u53f7\uff0c\u56de\u590d\u201cApacheCon\u201d\u4e0b\u8f7d PPT\u3002"),(0,a.kt)("img",{src:"https://static.apiseven.com/202108/1639468506819-7f829080-19de-4d94-b103-e1d967e0baea.png",alt:"Apache APISIX WeChat",style:{width:"200px"}}))}s.isMDXComponent=!0}}]);