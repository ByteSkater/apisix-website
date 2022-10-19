"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[3893],{5318:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>d});var n=a(7378);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function p(e,t){if(null==e)return{};var a,n,i=function(e,t){if(null==e)return{};var a,n,i={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var s=n.createContext({}),l=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},c=function(e){var t=l(e.components);return n.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,i=e.mdxType,r=e.originalType,s=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),m=l(a),d=i,h=m["".concat(s,".").concat(d)]||m[d]||u[d]||r;return a?n.createElement(h,o(o({ref:t},c),{},{components:a})):n.createElement(h,o({ref:t},c))}));function d(e,t){var a=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=a.length,o=new Array(r);o[0]=m;var p={};for(var s in t)hasOwnProperty.call(t,s)&&(p[s]=t[s]);p.originalType=e,p.mdxType="string"==typeof e?e:i,o[1]=p;for(var l=2;l<r;l++)o[l]=a[l];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},6224:(e,t,a)=>{a.r(t),a.d(t,{contentTitle:()=>o,default:()=>c,frontMatter:()=>r,metadata:()=>p,toc:()=>s});var n=a(5773),i=(a(7378),a(5318));const r={id:"contributor-guide",title:"\u8d21\u732e\u6307\u5357",keywords:["API \u7f51\u5173","APISIX","Apache APISIX","APISIX \u8d21\u732e\u8005\u6307\u5357"],description:"Apache APISIX \u8d21\u732e\u8005\u6307\u5357\u3002"},o=void 0,p={unversionedId:"contributor-guide",id:"contributor-guide",isDocsHomePage:!1,title:"\u8d21\u732e\u6307\u5357",description:"Apache APISIX \u8d21\u732e\u8005\u6307\u5357\u3002",source:"@site/i18n/zh/docusaurus-plugin-content-docs/current/contributor-guide.md",sourceDirName:".",slug:"/contributor-guide",permalink:"/zh/docs/general/contributor-guide",editUrl:"https://github.com/apache/apisix-website/edit/master/website/docs/general/contributor-guide.md",tags:[],version:"current",lastUpdatedBy:"Sylvia",lastUpdatedAt:1666142167,formattedLastUpdatedAt:"2022/10/19",frontMatter:{id:"contributor-guide",title:"\u8d21\u732e\u6307\u5357",keywords:["API \u7f51\u5173","APISIX","Apache APISIX","APISIX \u8d21\u732e\u8005\u6307\u5357"],description:"Apache APISIX \u8d21\u732e\u8005\u6307\u5357\u3002"},sidebar:"docs",previous:{title:"\u63d0\u4ea4 Issue",permalink:"/zh/docs/general/submit-issue"},next:{title:"\u535a\u5ba2\u8d21\u732e\u6307\u5357",permalink:"/zh/docs/general/blog"}},s=[{value:"\u6211\u80fd\u8d21\u732e\u4ec0\u4e48\uff1f",id:"\u6211\u80fd\u8d21\u732e\u4ec0\u4e48",children:[]},{value:"\u9009\u62e9\u60f3\u8981\u4fee\u590d\u7684 issue",id:"\u9009\u62e9\u60f3\u8981\u4fee\u590d\u7684-issue",children:[{value:"Good first issues",id:"good-first-issues",children:[]}]},{value:"\u642d\u5efa\u672c\u5730\u5f00\u53d1\u73af\u5883",id:"\u642d\u5efa\u672c\u5730\u5f00\u53d1\u73af\u5883",children:[{value:"Fork \u9879\u76ee\u4ed3\u5e93\u5e76 Clone \u5230\u672c\u5730",id:"fork-\u9879\u76ee\u4ed3\u5e93\u5e76-clone-\u5230\u672c\u5730",children:[]},{value:"\u6dfb\u52a0 <code>upstream</code> \u4ed3\u5e93\u4f5c\u4e3a\u672c\u5730\u7684\u8fdc\u7a0b\u4ed3\u5e93",id:"\u6dfb\u52a0-upstream-\u4ed3\u5e93\u4f5c\u4e3a\u672c\u5730\u7684\u8fdc\u7a0b\u4ed3\u5e93",children:[]},{value:"\u521b\u5efa\u4f60\u7684\u5206\u652f",id:"\u521b\u5efa\u4f60\u7684\u5206\u652f",children:[]},{value:"\u63d0\u4ea4\u4f60\u7684\u6539\u52a8",id:"\u63d0\u4ea4\u4f60\u7684\u6539\u52a8",children:[]},{value:"\u521b\u5efa\u4e00\u4e2a PR",id:"\u521b\u5efa\u4e00\u4e2a-pr",children:[]}]},{value:"\u5efa\u8bae\u64cd\u4f5c\uff1a\u53cc\u91cd\u8ba4\u8bc1 (2FA)",id:"\u5efa\u8bae\u64cd\u4f5c\u53cc\u91cd\u8ba4\u8bc1-2fa",children:[{value:"\u5728 GitHub \u4e0a\u914d\u7f6e 2FA",id:"\u5728-github-\u4e0a\u914d\u7f6e-2fa",children:[]},{value:"\u63d0\u4ea4\u4ee3\u7801",id:"\u63d0\u4ea4\u4ee3\u7801",children:[]}]}],l={toc:s};function c(e){let{components:t,...a}=e;return(0,i.kt)("wrapper",(0,n.Z)({},l,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"\u672c\u6587\u4ecb\u7ecd\u4e86\u5982\u4f55\u4e3a Apache APISIX \u793e\u533a\u505a\u51fa\u8d21\u732e\u3002"),(0,i.kt)("h2",{id:"\u6211\u80fd\u8d21\u732e\u4ec0\u4e48"},"\u6211\u80fd\u8d21\u732e\u4ec0\u4e48\uff1f"),(0,i.kt)("p",null,"\u4f60\u53ef\u4ee5\u901a\u8fc7\u4ee5\u4e0b\u65b9\u5f0f\u4e3a Apache APISIX \u505a\u51fa\u8d21\u732e\uff1a"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"\u4fee\u590d\u6807\u8bb0\u4e3a ",(0,i.kt)("a",{parentName:"p",href:"/docs/general/contributor-guide/#good-first-issues"},(0,i.kt)("inlineCode",{parentName:"a"},"good first issue"))," \u6216\u8005 ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/apache/apisix/issues?q=is%3Aopen+label%3A%22help+wanted%22+sort%3Aupdated-desc"},(0,i.kt)("inlineCode",{parentName:"a"},"help wanted"))," \u7684 issue \u3002")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"\u53c2\u4e0e",(0,i.kt)("a",{parentName:"p",href:"/docs/general/join/"},"\u90ae\u4ef6\u5217\u8868"),"\u4e0a\u7684\u8ba8\u8bba.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"\u56de\u7b54 ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/apache/apisix/issues"},"Issues")," \u548c ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/apache/apisix/discussions"},"Discussions")," \u4e2d\u7684\u95ee\u9898\u3002")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Review \u6b63\u5728\u8fdb\u884c\u7684 ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/apache/apisix/pulls?q=is%3Apr+is%3Aopen+sort%3Aupdated-desc"},"pull requests"),".")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"\u6539\u8fdb APISIX Website\u3002")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"\u6539\u8fdb\u6587\u6863\u6216\u8005\u63d0\u4ea4\u65b0\u7684\u535a\u5ba2\u6587\u7ae0\u3002")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"\u5176\u4ed6\u5f62\u5f0f\u7684\u4ee3\u7801\u6216\u8005\u975e\u4ee3\u7801\u7684\u8d21\u732e\u3002"))),(0,i.kt)("p",null,"\u5982\u679c\u4f60\u6709\u4efb\u4f55\u5173\u4e8e Apache APISIX \u505a\u8d21\u732e\u7684\u60f3\u6cd5\uff0c\u4e5f\u6b22\u8fce\u968f\u65f6\u53d1\u90ae\u4ef6\u5230 ",(0,i.kt)("a",{parentName:"p",href:"mailto:dev@apisix.apache.org"},"dev@apisix.apache.org")," \u8fdb\u884c\u793e\u533a\u8ba8\u8bba\u3002"),(0,i.kt)("h2",{id:"\u9009\u62e9\u60f3\u8981\u4fee\u590d\u7684-issue"},"\u9009\u62e9\u60f3\u8981\u4fee\u590d\u7684 issue"),(0,i.kt)("p",null,"\u4f60\u53ef\u4ee5\u9009\u62e9\u4fee\u590d\u4e00\u4e2a\u6b63\u5728\u8fdb\u884c\u7684 ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/apache/apisix/issues"},"Issues"),"\u3002"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"\u4e00\u65e6\u4f60\u9009\u62e9\u4e86\u4e00\u4e2a issue \u8fdb\u884c\u5de5\u4f5c\u6216",(0,i.kt)("a",{parentName:"p",href:"/docs/general/submit-issue"},"\u521b\u5efa\u65b0\u7684 issue"),"\uff0c\u8bf7\u5728\u8be5 issue \u4e0b\u7559\u8a00\uff0c\u5e76\u8ba9\u4e00\u4e2a ",(0,i.kt)("a",{parentName:"p",href:"/team"},"Committer \u6216\u8005 PMC")," \u5c06\u5b83\u5206\u914d\u7ed9\u4f60\u3002")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"\u8bf7\u68c0\u67e5 issue \u7684\u72b6\u6001\uff0c\u5e76\u63a8\u65ad\u4f60\u662f\u5426\u80fd\u591f\u5b8c\u6210\u8be5 issue\u3002")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"\u8054\u7cfb ",(0,i.kt)("a",{parentName:"p",href:"/team"},"Committer \u6216\u8005 PMC")," \u4e3a\u4f60\u5904\u7406\u7684 issue \u63d0\u4f9b\u53cd\u9988\u548c Review\u3002"))),(0,i.kt)("h3",{id:"good-first-issues"},"Good first issues"),(0,i.kt)("p",null,"\u5e26\u6709 ",(0,i.kt)("inlineCode",{parentName:"p"},"good first issues")," \u6807\u7b7e\u7684 issue \u901a\u5e38\u662f\u5bf9\u65b0\u624b\u53cb\u597d\u4e14\u4e0a\u624b\u8f83\u7b80\u5355\u7684\u7c7b\u578b\uff0c\u4f60\u53ef\u4ee5\u6b64\u4f5c\u4e3a\u7a81\u7834\u53e3\uff0c\u5f00\u59cb\u4f60\u5bf9 APISIX \u7684\u7b2c\u4e00\u4e2a\u8d21\u732e\u3002"),(0,i.kt)("p",null,"\u4f60\u53ef\u4ee5\u6d4f\u89c8 ",(0,i.kt)("a",{parentName:"p",href:"/contribute"},(0,i.kt)("inlineCode",{parentName:"a"},"good first issues"))," \u5217\u8868\uff0c\u5e76\u9009\u62e9\u60f3\u8981\u8d21\u732e\u7684 issue\u3002"),(0,i.kt)("h2",{id:"\u642d\u5efa\u672c\u5730\u5f00\u53d1\u73af\u5883"},"\u642d\u5efa\u672c\u5730\u5f00\u53d1\u73af\u5883"),(0,i.kt)("p",null,"\u8d21\u732e\u4ee3\u7801\u6216\u6587\u6863\u524d\uff0c\u8bf7\u642d\u5efa\u4f60\u7684\u672c\u5730\u5f00\u53d1\u73af\u5883\u3002"),(0,i.kt)("h3",{id:"fork-\u9879\u76ee\u4ed3\u5e93\u5e76-clone-\u5230\u672c\u5730"},"Fork \u9879\u76ee\u4ed3\u5e93\u5e76 Clone \u5230\u672c\u5730"),(0,i.kt)("p",null,"\u9996\u5148\u524d\u5f80 Github \u4e0a\u7684 ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/apache/apisix/"},"APISIX repo")," \u4ed3\u5e93\u3002\u5728\u9875\u9762\u53f3\u4e0a\u89d2\u5904\uff0c\u70b9\u51fb Fork \u6309\u952e\uff0c\u7136\u540e\u5728\u4f60 Fork \u7684\u4ed3\u5e93\u4e2d\u514b\u9686\u5230\u4f60\u7684\u672c\u5730\u73af\u5883\u3002"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"git clone https://github.com/${your-username}/apisix.git\n")),(0,i.kt)("h3",{id:"\u6dfb\u52a0-upstream-\u4ed3\u5e93\u4f5c\u4e3a\u672c\u5730\u7684\u8fdc\u7a0b\u4ed3\u5e93"},"\u6dfb\u52a0 ",(0,i.kt)("inlineCode",{parentName:"h3"},"upstream")," \u4ed3\u5e93\u4f5c\u4e3a\u672c\u5730\u7684\u8fdc\u7a0b\u4ed3\u5e93"),(0,i.kt)("p",null,"\u4f60\u53ef\u4ee5\u901a\u8fc7\u4ee5\u4e0b\u547d\u4ee4\uff0c\u68c0\u67e5\u4e0a\u6e38 repo \u662f\u5426\u5df2\u7ecf\u88ab\u914d\u7f6e\uff0c\u5982\u679c\u8fd4\u56de\u7ed3\u679c\u4e2d\u5b58\u5728\u56db\u6761\u8bb0\u5f55\u5219\u8bf4\u660e\u5df2\u7ecf\u88ab\u914d\u7f6e\u3002"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"git remote -v\n")),(0,i.kt)("p",null,"\u5982\u679c\u8fd4\u56de\u7ed3\u679c\u4e2d\u53ea\u6709\u4e24\u6761\u8bb0\u5f55\uff0c\u4f60\u53ef\u4ee5\u901a\u8fc7\u4ee5\u4e0b\u547d\u4ee4\u914d\u7f6e\uff1a"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"git remote add upstream https://github.com/apache/apisix.git\n")),(0,i.kt)("p",null,"\u5982\u679c\u4f60\u9700\u8981\u4e86\u89e3\u66f4\u591a\u5173\u4e8e Git \u548c GitHub \u6d41\u7a0b\u7684\u4fe1\u606f\uff0c\u8bf7\u53c2\u8003 ",(0,i.kt)("a",{parentName:"p",href:"https://docs.github.com/en/get-started/quickstart/fork-a-repo"},"GitHub \u6587\u6863"),"\u3002"),(0,i.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"\u4f60\u9700\u8981\u8bbe\u7f6e\u4f60\u7684\u59d3\u540d\u548c\u90ae\u4ef6\u5730\u5740\uff0c\u4ee5\u786e\u4fdd\u4f60\u7684 ID \u663e\u793a\u5728\u8d21\u732e\u8005\u540d\u5355\u4e0a\u3002"))),(0,i.kt)("p",null,"\u4f60\u53ef\u4ee5\u4f7f\u7528\u4ee5\u4e0b\u547d\u4ee4\u8fdb\u884c\u8bbe\u7f6e\uff1a"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},'git config --global user.name "full name"\ngit config --global user.email "mail address"\n')),(0,i.kt)("h3",{id:"\u521b\u5efa\u4f60\u7684\u5206\u652f"},"\u521b\u5efa\u4f60\u7684\u5206\u652f"),(0,i.kt)("p",null,"\u4e3a\u4e86\u4fdd\u8bc1\u672c\u5730\u5206\u652f\u4fdd\u6301\u6700\u65b0\uff0c\u4f60\u53ef\u4ee5\u62c9\u53d6\u4e0a\u6e38\u7684\u6700\u65b0\u53d8\u66f4\u5e76\u5e94\u7528\u5230\u672c\u5730\u5206\u652f\uff1a"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"git fetch upstream\ngit checkout master\ngit rebase upstream/master\ngit push origin master\n")),(0,i.kt)("p",null,"\u5982\u679c\u9700\u8981\u4fee\u6539\u4ee3\u7801\uff0c\u4f60\u53ef\u4ee5\u901a\u8fc7\u4ee5\u4e0b\u547d\u4ee4\u5728\u672c\u5730\u521b\u5efa\u4e00\u4e2a\u65b0\u5206\u652f\uff1a"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"git checkout -b issue-no\n")),(0,i.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"\u6bcf\u4e2a PR \u4e2d\u7684\u63d0\u4ea4\u5728\u5408\u5e76\u4e4b\u524d\u90fd\u4f1a\u88ab\u538b\u7f29\u3002\u5982\u679c\u4f60\u4f7f\u7528\u7684\u662f\u8f83\u65e9\u7684\u5206\u652f\uff0c\u53ef\u80fd\u4f1a\u5bfc\u81f4\u63d0\u4ea4\u65e5\u5fd7\u4e0e\u4e0a\u6e38\u4e0d\u540c\u3002"))),(0,i.kt)("h3",{id:"\u63d0\u4ea4\u4f60\u7684\u6539\u52a8"},"\u63d0\u4ea4\u4f60\u7684\u6539\u52a8"),(0,i.kt)("p",null,"\u8d21\u732e\u8005\u5e94\u5728\u6574\u4e2a\u8fc7\u7a0b\u4e2d\u9075\u5b88",(0,i.kt)("a",{parentName:"p",href:"https://www.apache.org/foundation/policies/conduct.html"},"\u4ee3\u7801\u884c\u4e3a\u51c6\u5219"),"\u3002"),(0,i.kt)("p",null,"\u5f53\u4f60\u5b8c\u6210\u4e86\u4fee\u6539\uff0c\u5c31\u53ef\u4ee5\u63d0\u4ea4\u6587\u4ef6\u5e76\u63a8\u9001\u5230\u4f60\u7684\u5206\u53c9\u4e0a\u3002"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"git add modified-file-names\ngit commit -m 'commit message'\ngit push origin issue-no\n")),(0,i.kt)("h3",{id:"\u521b\u5efa\u4e00\u4e2a-pr"},"\u521b\u5efa\u4e00\u4e2a PR"),(0,i.kt)("p",null,"\u5f53\u4f60\u628a\u4fee\u6539\u63a8\u9001\u5230\u4f60\u7684\u5206\u652f\u4e0a\u540e\uff0c\u5c31\u53ef\u4ee5\u521b\u5efa\u4e00\u4e2a PR \u628a\u5b83\u5408\u5e76\u5230\u4e0a\u6e38\u4ed3\u5e93\u4e2d\u3002"),(0,i.kt)("p",null,"\u67e5\u9605 ",(0,i.kt)("a",{parentName:"p",href:"https://docs.github.com/en/get-started/quickstart/github-flow#create-a-pull-request"},"GitHub \u5de5\u4f5c\u6d41\u7a0b")," \u4e86\u89e3\u63d0\u4ea4 PR \u7684\u8be6\u7ec6\u7ec6\u8282\u3002"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"\u521b\u5efa\u4e00\u4e2a\u5230 master \u5206\u652f\u7684 PR\u3002")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"\u8bf7\u786e\u4fdd PR \u6807\u9898\u6709\u5982 ",(0,i.kt)("inlineCode",{parentName:"p"},"fix:"),"\uff0c",(0,i.kt)("inlineCode",{parentName:"p"},"feat:")," \u6216\u8005\u5176\u4ed6",(0,i.kt)("a",{parentName:"p",href:"https://github.com/commitizen/conventional-commit-types/blob/master/index.json"},"\u63d0\u4ea4\u7c7b\u578b"),"\u7684\u524d\u7f00\u3002")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"\u8054\u7cfb\u76f8\u5173\u95ee\u9898\u9886\u57df\u7684 Committer/PMC \u6210\u5458\uff0c\u5f00\u59cb\u8fdb\u5165 Review \u6d41\u7a0b\u3002")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"\u53c2\u4e0e\u8ba8\u8bba\u5e76\u5bf9 reviewer \u7684\u95ee\u9898\u8fdb\u884c\u89e3\u7b54\u3002")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"\u7b49\u5f85\u4f60\u7684 PR \u88ab\u540c\u610f\u5e76\u5408\u5e76\u3002")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"\u795d\u8d3a\u4f60\u6210\u4e3a Apache APISIX \u7684\u5b98\u65b9\u8d21\u732e\u8005!"))),(0,i.kt)("h2",{id:"\u5efa\u8bae\u64cd\u4f5c\u53cc\u91cd\u8ba4\u8bc1-2fa"},"\u5efa\u8bae\u64cd\u4f5c\uff1a\u53cc\u91cd\u8ba4\u8bc1 (2FA)"),(0,i.kt)("p",null,"\u53cc\u91cd\u8ba4\u8bc1\uff08Two-factor authentication\uff0c\u4e0b\u79f0 2FA\uff09\u662f\u6307\u5c06\u5bc6\u7801\u548c\u5bf9\u8c61\uff08\u5982\u4fe1\u7528\u5361\u3001\u77ed\u4fe1\u3001\u4ee4\u724c\u6216\u5982\u6307\u7eb9\u7684\u751f\u7269\u6807\u5fd7\u7269\uff09\u7ed3\u5408\u8d77\u6765\u8bc6\u522b\u7528\u6237\u7684\u8ba4\u8bc1\u65b9\u6cd5\u3002"),(0,i.kt)("p",null,"\u4e3a\u4e86\u4fdd\u8bc1\u8d21\u732e\u8005\u8d26\u6237\u7684\u5b89\u5168\uff0c\u5728 GitHub \u4e0a\u767b\u5f55\u8d21\u732e\u4ee3\u7801\u65f6\uff0c\u4f60\u9700\u8981\u914d\u7f6e ",(0,i.kt)("a",{parentName:"p",href:"https://docs.github.com/en/authentication/securing-your-account-with-two-factor-authentication-2fa/configuring-two-factor-authentication"},"2FA")," \u3002\u66f4\u591a\u7ec6\u8282\u8bf7\u53c2\u8003",(0,i.kt)("a",{parentName:"p",href:"https://docs.github.com/en/authentication/securing-your-account-with-two-factor-authentication-2fa"},"\u7528 2FA \u4fdd\u62a4\u4f60\u7684\u8d26\u6237"),"\u3002"),(0,i.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"\u5982\u679c\u6ca1\u6709\u542f\u7528 2FA\uff0c\u4f60\u6709\u53ef\u80fd\u4f1a\u88ab\u9879\u76ee\u79fb\u9664\uff0c\u5e76\u4e14\u65e0\u6cd5\u8bbf\u95ee Apache APISIX \u7684\u5b58\u50a8\u5e93\u3002"))),(0,i.kt)("h3",{id:"\u5728-github-\u4e0a\u914d\u7f6e-2fa"},"\u5728 GitHub \u4e0a\u914d\u7f6e 2FA"),(0,i.kt)("p",null,"\u4f60\u53ef\u4ee5\u4f7f\u7528\u4e00\u4e2a",(0,i.kt)("a",{parentName:"p",href:"https://docs.github.com/cn/authentication/securing-your-account-with-two-factor-authentication-2fa/configuring-two-factor-authentication#configuring-two-factor-authentication-using-a-totp-mobile-app"},"\u624b\u673a APP")," \u6216\u901a\u8fc7",(0,i.kt)("a",{parentName:"p",href:"https://docs.github.com/cn/authentication/securing-your-account-with-two-factor-authentication-2fa/configuring-two-factor-authentication#configuring-two-factor-authentication-using-text-messages"},"\u77ed\u4fe1"),"\u6765\u914d\u7f6e 2FA\u3002"),(0,i.kt)("p",null,"GitHub \u5efa\u8bae\u4f7f\u7528\u57fa\u4e8e\u65f6\u95f4\u7684\u4e00\u6b21\u6027\u5bc6\u7801\uff08TOTP\uff09\u624b\u673a APP \u6765\u914d\u7f6e 2FA\u3002\u9605\u8bfb",(0,i.kt)("a",{parentName:"p",href:"https://docs.github.com/cn/authentication/securing-your-account-with-two-factor-authentication-2fa/configuring-two-factor-authentication"},"\u914d\u7f6e 2FA"),"\u83b7\u5f97\u66f4\u7ec6\u8282\u7684\u4fe1\u606f\u3002"),(0,i.kt)("h3",{id:"\u63d0\u4ea4\u4ee3\u7801"},"\u63d0\u4ea4\u4ee3\u7801"),(0,i.kt)("p",null,"\u5728\u5f00\u542f\u4e86 2FA \u4e4b\u540e\uff0c",(0,i.kt)("a",{parentName:"p",href:"https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/creating-a-personal-access-token"},"\u521b\u5efa\u4e00\u4e2a\u4e2a\u4eba\u8bbf\u95ee\u4ee4\u724c"),"\u6765\u6267\u884c Git \u64cd\u4f5c\u3002"),(0,i.kt)("p",null,"\u5728\u63a8\u9001\u4ee3\u7801\u65f6\uff0c\u4f60\u53ef\u4ee5\u4f7f\u7528",(0,i.kt)("inlineCode",{parentName:"p"},"\u7528\u6237\u540d+\u4e2a\u4eba\u8bbf\u95ee\u4ee4\u724c"),"\u7ec4\u5408\u6765\u4ee3\u66ff",(0,i.kt)("inlineCode",{parentName:"p"},"\u7528\u6237\u540d+\u5bc6\u7801"),"\u7ec4\u5408\u3002"))}c.isMDXComponent=!0}}]);