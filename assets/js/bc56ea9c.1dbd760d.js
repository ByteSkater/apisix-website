"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[621],{35318:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>m});var r=n(27378);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var p=r.createContext({}),l=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},u=function(e){var t=l(e.components);return r.createElement(p.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},h=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,p=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),h=l(n),m=i,d=h["".concat(p,".").concat(m)]||h[m]||c[m]||o;return n?r.createElement(d,a(a({ref:t},u),{},{components:n})):r.createElement(d,a({ref:t},u))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,a=new Array(o);a[0]=h;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s.mdxType="string"==typeof e?e:i,a[1]=s;for(var l=2;l<o;l++)a[l]=n[l];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}h.displayName="MDXCreateElement"},46972:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>a,default:()=>c,frontMatter:()=>o,metadata:()=>s,toc:()=>l});var r=n(25773),i=(n(27378),n(35318));const o={title:"Biweekly Report (Apr 1 - Apr 14)",keywords:["Apache APISIX","API Gateway","Weekly Report","Contributor"],description:"The Apache APISIX Community Weekly Report hopes to help community members better understand the weekly progress of the Apache APISIX community.",tags:["Community"]},a=void 0,s={permalink:"/blog/2022/04/20/weekly-report-0420",source:"@site/blog/2022/04/20/weekly-report-0420.md",title:"Biweekly Report (Apr 1 - Apr 14)",description:"The Apache APISIX Community Weekly Report hopes to help community members better understand the weekly progress of the Apache APISIX community.",date:"2022-04-20T00:00:00.000Z",formattedDate:"April 20, 2022",tags:[{label:"Community",permalink:"/blog/tags/community"}],readingTime:2.7,truncated:!0,authors:[],prevItem:{title:"The Vulnerability of Leaking Information in Error Response from jwt-auth Plugin\uff08CVE-2022-29266\uff09",permalink:"/blog/2022/04/20/cve-2022-29266"},nextItem:{title:"API Observability with APISIX Plugins",permalink:"/blog/2022/04/17/api-observability"}},p={authorsImageUrls:[]},l=[{value:"Introduction",id:"introduction",children:[],level:2},{value:"Contributor Statistics",id:"contributor-statistics",children:[],level:2},{value:"Good first issue",id:"good-first-issue",children:[{value:"Issue #6803",id:"issue-6803",children:[],level:3},{value:"Issue #6797",id:"issue-6797",children:[],level:3}],level:2},{value:"Highlights of Recent Features",id:"highlights-of-recent-features",children:[],level:2},{value:"Recent Blog Recommendations",id:"recent-blog-recommendations",children:[],level:2}],u={toc:l};function c(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"From April 1st to  April 14th, 36 contributors submitted 75 commits for Apache APISIX. Thank you all for your contributions to Apache APISIX.")),(0,i.kt)("h2",{id:"introduction"},"Introduction"),(0,i.kt)("p",null,"Apache APISIX has grown as a community from the first day of open source and has quickly become the most active open source API gateway project in the world. These achievements cannot be achieved without the joint efforts of our community partners."),(0,i.kt)("p",null,'"If you want to go fast, go alone.If you want to go far, go together." The Apache APISIX Community Weekly Report hopes to help community members better understand the weekly progress of the Apache APISIX community and and facilitate everyone to participate in the Apache APISIX community.'),(0,i.kt)("p",null,"We have also compiled some issues suitable for newcomers to the community to participate in! If you are interested, don't miss it!"),(0,i.kt)("h2",{id:"contributor-statistics"},"Contributor Statistics"),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://static.apiseven.com/202108/1650443415345-e067c6d9-1f39-4152-a7cc-4379fd4f17f3.jpg",alt:"Contributors List"})),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://static.apiseven.com/202108/1650443438975-33d7f4fb-01ca-4877-848e-35b1f6869d2a.png",alt:"New Contributors"})),(0,i.kt)("h2",{id:"good-first-issue"},"Good first issue"),(0,i.kt)("h3",{id:"issue-6803"},"Issue #6803"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Link"),": ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/apache/apisix/issues/6803"},"https://github.com/apache/apisix/issues/6803")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Issue description"),":"),(0,i.kt)("p",null,"When use ",(0,i.kt)("inlineCode",{parentName:"p"},"openid-connect")," plugins with the wrong ",(0,i.kt)("inlineCode",{parentName:"p"},"redirect_uri")," in Apache APISIX, as shown below:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-Bash"},'   "plugins":{\n        "openid-connect":{\n             ...\n            "scope":"openid profile",\n            "bearer_only":false,\n            "introspection_endpoint_auth_method":"client_secret_post",\n            "redirect_uri":"http://127.0.0.1:9080/"\n             ...\n        }\n    },\n')),(0,i.kt)("p",null,'Then, request the "127.0.0.1:9080/", will get 500, and the error log is as follow:'),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://static.apiseven.com/202108/1650443701999-958f2096-d44d-4cd0-99b5-6e8833c361c6.png",alt:"500 Error"})),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-YAML"},'2022/04/07 17:13:50 [error] 31780#3492140: *1959 [lua] openidc.lua:1378: authenticate(): request to the redirect_uri path but there\'s no session state found, client: 127.0.0.1, server: _, request: "GET / HTTP/1.1", host: "127.0.0.1:9080"\n2022/04/07 17:13:50 [error] 31780#3492140: *1959 [lua] openid-connect.lua:304: phase_func(): OIDC authentication failed: request to the redirect_uri path but there\'s no session state found, client: 127.0.0.1, server: _, request: "GET / HTTP/1.1", host: "127.0.0.1:9080"\n')),(0,i.kt)("p",null,"This type of log is very unclear and the user does not know what to expect. Error logging should be improved to improve the experience of using the ",(0,i.kt)("inlineCode",{parentName:"p"},"Openid-connect")," plug-in."),(0,i.kt)("h3",{id:"issue-6797"},"Issue #6797"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Link"),":",(0,i.kt)("a",{parentName:"p",href:"https://github.com/apache/apisix/issues/6797"},"https://github.com/apache/apisix/issues/6797")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Issue description"),":"),(0,i.kt)("p",null,"When using the ",(0,i.kt)("inlineCode",{parentName:"p"},"file-logger")," plugin, it is possible to send the logging to stdout by defining ",(0,i.kt)("inlineCode",{parentName:"p"},"/dev/stdout"),". This in order to use the docker output and relais this in kubernetes to a ELK stack. Though an error is thrown indicating a permission denied for the current user.failed to open file: ",(0,i.kt)("inlineCode",{parentName:"p"},"/dev/stdout"),", error info: ",(0,i.kt)("inlineCode",{parentName:"p"},"/dev/stdout"),": Permission denied while logging request"),(0,i.kt)("h2",{id:"highlights-of-recent-features"},"Highlights of Recent Features"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("a",{parentName:"p",href:"https://github.com/apache/apisix/pull/6670"},"Add the function of hiding header for ",(0,i.kt)("inlineCode",{parentName:"a"},"key-auth")," plugin"),"(Contributor: ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/bin-ya"},"bin-ya"),")")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("a",{parentName:"p",href:"https://github.com/apache/apisix/pull/6751"},"Support ZooKeeper service discovery"),"(Contributor: ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/shuaijinchao"},"shuaijinchao"),")")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("a",{parentName:"p",href:"https://github.com/apache/apisix/pull/6779"},"Feat(",(0,i.kt)("inlineCode",{parentName:"a"},"request-id"),"): add algorithm support nanoid"),"\uff08Contributor: ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/aikin-vip"},"aikin-vip"),")")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("a",{parentName:"p",href:"https://github.com/apache/apisix/pull/6750"},"Feat(",(0,i.kt)("inlineCode",{parentName:"a"},"response-rewrite"),"): support filters"),"(Contributor: ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/kwanhur"},"kwanhur"),")"))),(0,i.kt)("p",null,"The Apache APISIX project website and the Github issue have accumulated a wealth of documentation and experience, so if you encounter problems, you can read the documentation, search the issue with keywords, or participate in the discussion on the issue to put forward your own ideas and practical experience."),(0,i.kt)("h2",{id:"recent-blog-recommendations"},"Recent Blog Recommendations"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://apisix.apache.org/blog/2022/04/12/apisix-summit-asia-2022"},"Apache APISIX Summit ASIA 2022: API Gateway, Service Mesh and Open Source Ecology"))),(0,i.kt)("p",null,"Since Apache APISIX was officially open sourced on June 6, 2019, it has been growing rapidly as a community. In just over two years, the number of global contributors has exceeded 400, and the number is still growing rapidly. During this time, the Apache APISIX community has also successively gained recognition from domestic and foreign developers."),(0,i.kt)("p",null,"The Apache APISIX community will organize the Apache APISIX Summit ASIA 2022 on May 20-21, 2022."),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://apisix-summit.org"},"Click here")," to register for Apache APISIX Summit ASIA 2022."))}c.isMDXComponent=!0}}]);