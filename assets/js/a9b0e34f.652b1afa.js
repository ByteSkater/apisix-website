"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[2082],{35318:(e,t,a)=>{a.d(t,{Zo:()=>l,kt:()=>m});var r=a(27378);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},i=Object.keys(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var p=r.createContext({}),c=function(e){var t=r.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},l=function(e){var t=c(e.components);return r.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},h=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,i=e.originalType,p=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),h=c(a),m=n,d=h["".concat(p,".").concat(m)]||h[m]||u[m]||i;return a?r.createElement(d,o(o({ref:t},l),{},{components:a})):r.createElement(d,o({ref:t},l))}));function m(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=a.length,o=new Array(i);o[0]=h;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s.mdxType="string"==typeof e?e:n,o[1]=s;for(var c=2;c<i;c++)o[c]=a[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,a)}h.displayName="MDXCreateElement"},55225:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>o,default:()=>u,frontMatter:()=>i,metadata:()=>s,toc:()=>c});var r=a(25773),n=(a(27378),a(35318));const i={title:"Biweekly Report (Feb 15 - Feb 28)",keywords:["Apache APISIX","API Gateway","Weekly Report","Contributor"],description:"API Gateway The Apache APISIX community has supported mocking, clickhouse plugins, and support for Kubernetes as a service discovery for the last two weeks.",tags:["Community"]},o=void 0,s={permalink:"/blog/2022/03/03/weekly-report-0228",source:"@site/blog/2022/03/03/weekly-report-0228.md",title:"Biweekly Report (Feb 15 - Feb 28)",description:"API Gateway The Apache APISIX community has supported mocking, clickhouse plugins, and support for Kubernetes as a service discovery for the last two weeks.",date:"2022-03-03T00:00:00.000Z",formattedDate:"March 3, 2022",tags:[{label:"Community",permalink:"/blog/tags/community"}],readingTime:2.605,truncated:!0,authors:[],prevItem:{title:"How to Use Gitpod to Develop API Gateway?",permalink:"/blog/2022/03/03/develop-apisix-with-gitpod"},nextItem:{title:"Use GraphQL with API Gateway Apache APISIX",permalink:"/blog/2022/03/02/apisix-integration-graphql"}},p={authorsImageUrls:[]},c=[{value:"Introduction",id:"introduction",children:[],level:2},{value:"Contributor Statistics",id:"contributor-statistics",children:[],level:2},{value:"Good first issue",id:"good-first-issue",children:[{value:"Issue #920",id:"issue-920",children:[],level:3},{value:"Issue #6460",id:"issue-6460",children:[],level:3}],level:2},{value:"Highlights of Recent Features",id:"highlights-of-recent-features",children:[],level:2},{value:"Recent Blog Recommendations",id:"recent-blog-recommendations",children:[],level:2}],l={toc:c};function u(e){let{components:t,...a}=e;return(0,n.kt)("wrapper",(0,r.Z)({},l,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"From 2.15 to 2.28, 43 contributors submitted 101 commits for Apache APISIX. Thank you all for your contributions to Apache APISIX. It is your selfless contribution to make the Apache APISIX project better!")),(0,n.kt)("h2",{id:"introduction"},"Introduction"),(0,n.kt)("p",null,"Apache APISIX has grown as a community from the first day of open source and has quickly become the most active open source API gateway project in the world. These achievements cannot be achieved without the joint efforts of our community partners."),(0,n.kt)("p",null,'"If you want to go fast, go alone.If you want to go far, go together." The Apache APISIX Community Weekly Report hopes to help community members better understand the weekly progress of the Apache APISIX community and and facilitate everyone to participate in the Apache APISIX community.'),(0,n.kt)("p",null,"We have also compiled some issues suitable for newcomers to the community to participate in! If you are interested, don't miss it!"),(0,n.kt)("h2",{id:"contributor-statistics"},"Contributor Statistics"),(0,n.kt)("p",null,(0,n.kt)("img",{parentName:"p",src:"https://static.apiseven.com/202108/1646206544039-67c75831-7452-40be-a635-2cc6bb6d02b3.jpg",alt:"Contributors List"})),(0,n.kt)("p",null,(0,n.kt)("img",{parentName:"p",src:"https://static.apiseven.com/202108/1646206544068-9811972f-18f8-47a3-a028-06f94d07936f.jpg",alt:"New Contributors"})),(0,n.kt)("h2",{id:"good-first-issue"},"Good first issue"),(0,n.kt)("h3",{id:"issue-920"},"Issue #920"),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Link"),": ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/apache/apisix-website/issues/920"},"https://github.com/apache/apisix-website/issues/920")),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Issue description"),":"),(0,n.kt)("p",null,"When submitting a pull request to add a new blog to the website's blog section, usually we need to submit 2 files, one in English and the other in Chinese."),(0,n.kt)("p",null,"As the community grows, blog in both languages are becoming more diverging than before. Thus, writing and submitting blogs in single-language is the trend."),(0,n.kt)("p",null,"But the actual behavior is that: when submitting an English blog, and clicking the language conversion button on the top-right corner, it would jump to the default 404 page. I am wondering if there is any chance to enhance the reading experience on this part."),(0,n.kt)("h3",{id:"issue-6460"},"Issue #6460"),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Link"),": ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/apache/apisix/issues/6460"},"https://github.com/apache/apisix/issues/6460")),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Issue description"),":"),(0,n.kt)("p",null,"Using the ",(0,n.kt)("inlineCode",{parentName:"p"},"authz-keycloak")," plugin when access is not permitted you correctly receive an access denied message in the body of the requested url."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-Json"},'{"error":"access_denied","error_description":"not_authorized"}\n')),(0,n.kt)("p",null,"Is it possible to specify a redirect url to be used when the access is denied so the user see predefined page instead of a message?"),(0,n.kt)("h2",{id:"highlights-of-recent-features"},"Highlights of Recent Features"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("a",{parentName:"p",href:"https://github.com/apache/apisix/pull/6215"},"Push access log to clickhouse DB"),"(Contributor: ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/zhendongcmss"},"zhendongcmss"),")")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("a",{parentName:"p",href:"https://github.com/apache/apisix/pull/4880"},"Add Kubernetes discovery module"),"(Contributor: ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/zhixiongdu027"},"zhixiongdu027"),")")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("a",{parentName:"p",href:"https://github.com/apache/apisix/pull/6392"},"Add config to control return all status at X-APISIX-Upstream-Status"),"\uff08Contributor: ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/liangliang4ward"},"liangliang4ward"),")")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("a",{parentName:"p",href:"https://github.com/apache/apisix/pull/5940"},"Add ",(0,n.kt)("inlineCode",{parentName:"a"},"mocking")," plugin"),"(Contributor: ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/Drery"},"Drery"),")"))),(0,n.kt)("p",null,"The Apache APISIX project website and the Github issue have accumulated a wealth of documentation and experience, so if you encounter problems, you can read the documentation, search the issue with keywords, or participate in the discussion on the issue to put forward your own ideas and practical experience."),(0,n.kt)("h2",{id:"recent-blog-recommendations"},"Recent Blog Recommendations"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("a",{parentName:"p",href:"https://apisix.apache.org/blog/2022/02/21/nacos-api-gateway"},"The practice of Nacos service discovery on API Gateway"),"\uff1a"),(0,n.kt)("p",{parentName:"li"},"This article introduces the basic concepts of Apache APISIX and Nacos and Service Registry, and shows you the practice of Nacos service discovery on API Gateway.")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("a",{parentName:"p",href:"https://apisix.apache.org/blog/2022/02/23/csrf-api-gateway"},"Apache APISIX Enhances API Security by CSRF Plugin"),":"),(0,n.kt)("p",{parentName:"li"},"This article introduces ",(0,n.kt)("inlineCode",{parentName:"p"},"csrf"),", the CSRF security plugin for Apache APISIX, and details how to secure your API information in Apache APISIX with the help of the ",(0,n.kt)("inlineCode",{parentName:"p"},"csrf")," plugin.")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("a",{parentName:"p",href:"https://apisix.apache.org/blog/2022/02/25/consul-api-gateway"},"How to Integrate API Gateway and Consul?"),":"),(0,n.kt)("p",{parentName:"li"},"Apache APISIX supports the Consul KV-based service discovery registry. This article will walk you through the process of implementing service discovery and service registry in Apache APISIX."))))}u.isMDXComponent=!0}}]);