"use strict";(self.webpackChunkdoc=self.webpackChunkdoc||[]).push([[3755],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>u});var r=a(67294);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function n(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function d(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?n(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):n(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,r,o=function(e,t){if(null==e)return{};var a,r,o={},n=Object.keys(e);for(r=0;r<n.length;r++)a=n[r],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(r=0;r<n.length;r++)a=n[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var l=r.createContext({}),s=function(e){var t=r.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):d(d({},t),e)),a},p=function(e){var t=s(e.components);return r.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var a=e.components,o=e.mdxType,n=e.originalType,l=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),m=s(a),u=o,h=m["".concat(l,".").concat(u)]||m[u]||c[u]||n;return a?r.createElement(h,d(d({ref:t},p),{},{components:a})):r.createElement(h,d({ref:t},p))}));function u(e,t){var a=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var n=a.length,d=new Array(n);d[0]=m;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:o,d[1]=i;for(var s=2;s<n;s++)d[s]=a[s];return r.createElement.apply(null,d)}return r.createElement.apply(null,a)}m.displayName="MDXCreateElement"},63625:(e,t,a)=>{a.r(t),a.d(t,{contentTitle:()=>d,default:()=>p,frontMatter:()=>n,metadata:()=>i,toc:()=>l});var r=a(87462),o=(a(67294),a(3905));const n={title:"Data Loader",keywords:["APISIX","APISIX Dashboard","Data Loader","OpenAPI"],description:"This document contains information about the Apache APISIX Dashboard data loader framework."},d=void 0,i={unversionedId:"modules/data_loader",id:"modules/data_loader",isDocsHomePage:!1,title:"Data Loader",description:"This document contains information about the Apache APISIX Dashboard data loader framework.",source:"@site/docs/apisix-dashboard/modules/data_loader.md",sourceDirName:"modules",slug:"/modules/data_loader",permalink:"/zh/docs/dashboard/next/modules/data_loader",editUrl:"https://github.com/apache/apisix-dashboard/edit/master/docs/zh/latest/modules/data_loader.md",tags:[],version:"current",frontMatter:{title:"Data Loader",keywords:["APISIX","APISIX Dashboard","Data Loader","OpenAPI"],description:"This document contains information about the Apache APISIX Dashboard data loader framework."},sidebar:"docs",previous:{title:"FAQ",permalink:"/zh/docs/dashboard/next/FAQ"},next:{title:"OpenAPI 3",permalink:"/zh/docs/dashboard/next/modules/data_loader/openapi3"}},l=[{value:"What is Data Loader",id:"what-is-data-loader",children:[]},{value:"Definition",id:"definition",children:[]},{value:"Supported data loader",id:"supported-data-loader",children:[]},{value:"How to support other data loader",id:"how-to-support-other-data-loader",children:[{value:"Implement data loader conversion logic (back-end)",id:"implement-data-loader-conversion-logic-back-end",children:[]},{value:"Add front UI support for new data loader (front-end)",id:"add-front-ui-support-for-new-data-loader-front-end",children:[]}]}],s={toc:l};function p(e){let{components:t,...a}=e;return(0,o.kt)("wrapper",(0,r.Z)({},s,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"what-is-data-loader"},"What is Data Loader"),(0,o.kt)("p",null,"The data loader is an abstraction of the data import and export functionality under different specification definitions."),(0,o.kt)("p",null,"Based on it, developers can easily implement the ability to export APISIX data entities to generate different data files, and parse the data files and convert them into APISIX data entities for import into APISIX."),(0,o.kt)("h2",{id:"definition"},"Definition"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-go"},"type Loader interface {\n    // Import accepts data and converts it into entity data sets\n    Import(input interface{}) (*DataSets, error)\n\n    // Export accepts entity data sets and converts it into a specific format\n    Export(data DataSets) (interface{}, error)\n}\n")),(0,o.kt)("p",null,"Implement the above functions to complete the data conversion between Raw data format and DataSets data set, APISIX Dashboard will use DataSets data format as the intermediate format for importing and exporting according to it."),(0,o.kt)("p",null,"Developers can look at the code in ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/apache/apisix-dashboard/blob/master/api/internal/handler/data_loader/loader/loader.go"},"api/internal/handler/data_loader/loader/loader.go")," for the definition of the DataSets structure and the Data Loader interface."),(0,o.kt)("h2",{id:"supported-data-loader"},"Supported data loader"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/zh/docs/dashboard/next/modules/data_loader/openapi3"},"OpenAPI 3"),": Currently only data import is supported")),(0,o.kt)("h2",{id:"how-to-support-other-data-loader"},"How to support other data loader"),(0,o.kt)("p",null,"Extending the data loader is simple and requires some development in the backend and frontend."),(0,o.kt)("h3",{id:"implement-data-loader-conversion-logic-back-end"},"Implement data loader conversion logic (back-end)"),(0,o.kt)("p",null,"Create a structure that implements the above interface, which contains two parts."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Import function: complete the parsing and conversion from raw format ",(0,o.kt)("inlineCode",{parentName:"li"},"[]byte")," uploaded by the user to DataSets structure ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/apache/apisix-dashboard/blob/master/api/internal/handler/data_loader/loader/openapi3/import.go"},"api/internal/handler/data_loader/loader/openapi3/import.go")),(0,o.kt)("li",{parentName:"ul"},"Export function: complete the generation of raw format for DataSets structure data inputted from APISIX Dashboard")),(0,o.kt)("p",null,"Adds a new item to the data loader list of the import and export handler."),(0,o.kt)("h3",{id:"add-front-ui-support-for-new-data-loader-front-end"},"Add front UI support for new data loader (front-end)"),(0,o.kt)("p",null,"Adds the previously created data loader to the frontend selector. Refer to ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/apache/apisix-dashboard/blob/master/web/src/pages/Route/components/DataLoader/Import.tsx#L167-L172"},"this")," for more details."),(0,o.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"When you implement a data loader that requires partial input of custom parameters, you can create a form for it to enter data. Refer to ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/apache/apisix-dashboard/blob/master/web/src/pages/Route/components/DataLoader/loader/OpenAPI3.tsx"},"this")," for more details."))))}p.isMDXComponent=!0}}]);