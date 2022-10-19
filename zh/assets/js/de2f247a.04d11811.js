"use strict";(self.webpackChunkdoc=self.webpackChunkdoc||[]).push([[59122],{3905:(e,t,r)=>{r.d(t,{Zo:()=>d,kt:()=>u});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),p=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},d=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),m=p(r),u=a,g=m["".concat(s,".").concat(u)]||m[u]||c[u]||i;return r?n.createElement(g,o(o({ref:t},d),{},{components:r})):n.createElement(g,o({ref:t},d))}));function u(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,o=new Array(i);o[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var p=2;p<i;p++)o[p]=r[p];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},50763:(e,t,r)=>{r.r(t),r.d(t,{contentTitle:()=>o,default:()=>d,frontMatter:()=>i,metadata:()=>l,toc:()=>s});var n=r(87462),a=(r(67294),r(3905));const i={title:"Getting Started"},o=void 0,l={unversionedId:"getting-started",id:"version-1.4.0/getting-started",isDocsHomePage:!1,title:"Getting Started",description:"apisix-ingress-controller is yet another Ingress controller for Kubernetes using Apache APISIX as the high performance reverse proxy.",source:"@site/docs-apisix-ingress-controller_versioned_docs/version-1.4.0/getting-started.md",sourceDirName:".",slug:"/getting-started",permalink:"/zh/docs/ingress-controller/1.4.0/getting-started",editUrl:null,tags:[],version:"1.4.0",frontMatter:{title:"Getting Started"},sidebar:"version-1.4.0/docs",next:{title:"Ingress APISIX Use Examples",permalink:"/zh/docs/ingress-controller/1.4.0/practices/index"}},s=[{value:"What is apisix-ingress-controller",id:"what-is-apisix-ingress-controller",children:[]},{value:"Features",id:"features",children:[]},{value:"How It Works",id:"how-it-works",children:[]},{value:"Installation on Cloud",id:"installation-on-cloud",children:[]},{value:"Installation on Prem",id:"installation-on-prem",children:[]},{value:"Get Involved to Contribute",id:"get-involved-to-contribute",children:[]},{value:"Compatibility with Apache APISIX",id:"compatibility-with-apache-apisix",children:[]}],p={toc:s};function d(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"what-is-apisix-ingress-controller"},"What is apisix-ingress-controller"),(0,a.kt)("p",null,"apisix-ingress-controller is yet another Ingress controller for Kubernetes using ",(0,a.kt)("a",{parentName:"p",href:"https://apisix.apache.org"},"Apache APISIX")," as the high performance reverse proxy."),(0,a.kt)("p",null,"It's configured by using the declarative configurations like ",(0,a.kt)("a",{parentName:"p",href:"/zh/docs/ingress-controller/1.4.0/concepts/apisix_route"},"ApisixRoute"),", ",(0,a.kt)("a",{parentName:"p",href:"/zh/docs/ingress-controller/1.4.0/concepts/apisix_upstream"},"ApisixUpstream"),", ",(0,a.kt)("a",{parentName:"p",href:"https://kubernetes.io/docs/concepts/services-networking/ingress/"},"Ingress"),".\nAll these resources are watched and converted to corresponding resources in Apache APISIX."),(0,a.kt)("p",null,"Service Discovery are also supported through ",(0,a.kt)("a",{parentName:"p",href:"https://kubernetes.io/docs/concepts/services-networking/service/"},"Kubernetes Service"),",\nand will be reflected to nodes in APISIX Upstream."),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://raw.githubusercontent.com/apache/apisix-ingress-controller/v1.4.0/docs/assets/images/scene.png",alt:"scene"})),(0,a.kt)("h2",{id:"features"},"Features"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Declarative configuration"),(0,a.kt)("li",{parentName:"ul"},"Full dynamic capabilities to delivery configurations."),(0,a.kt)("li",{parentName:"ul"},"Native Kubernetes Ingress (both v1 and v1beta1) support."),(0,a.kt)("li",{parentName:"ul"},"Service Discovery based on Kubernetes Service."),(0,a.kt)("li",{parentName:"ul"},"Out of box support for node health check."),(0,a.kt)("li",{parentName:"ul"},"Support load balancing based on Pod (upstream nodes)."),(0,a.kt)("li",{parentName:"ul"},"Rich plugins support."),(0,a.kt)("li",{parentName:"ul"},"Easy to deploy and use.")),(0,a.kt)("h2",{id:"how-it-works"},"How It Works"),(0,a.kt)("p",null,"See ",(0,a.kt)("a",{parentName:"p",href:"/zh/docs/ingress-controller/1.4.0/design"},"Design")," for more details."),(0,a.kt)("h2",{id:"installation-on-cloud"},"Installation on Cloud"),(0,a.kt)("p",null,"apisix-ingress-controller supports to be installed on some clouds such as AWS, GCP."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://apisix.apache.org/docs/ingress-controller/deployments/azure"},"Install Ingress APISIX on Azure AKS")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://apisix.apache.org/docs/ingress-controller/deployments/aws"},"Install Ingress APISIX on AWS EKS")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://apisix.apache.org/docs/ingress-controller/deployments/ack"},"Install Ingress APISIX on ACK")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://apisix.apache.org/docs/ingress-controller/deployments/gke"},"Install Ingress APISIX on Google Cloud GKE")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://apisix.apache.org/docs/ingress-controller/deployments/minikube"},"Install Ingress APISIX on Minikube")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://apisix.apache.org/docs/ingress-controller/deployments/kubesphere"},"Install Ingress APISIX on KubeSphere")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://apisix.apache.org/docs/ingress-controller/deployments/k3s-rke"},"Install Ingress APISIX on K3S and RKE"))),(0,a.kt)("h2",{id:"installation-on-prem"},"Installation on Prem"),(0,a.kt)("p",null,"If you want to deploy apisix-ingress-controller on Prem, we recommend you to use ",(0,a.kt)("a",{parentName:"p",href:"https://helm.sh/"},"Helm"),". Just a few steps"),(0,a.kt)("h2",{id:"get-involved-to-contribute"},"Get Involved to Contribute"),(0,a.kt)("p",null,"First, your supports and cooperations to make this project better are appreciated.\nBut before you start, please read ",(0,a.kt)("a",{parentName:"p",href:"/zh/docs/ingress-controller/1.4.0/contribute"},"How to Contribute")," and ",(0,a.kt)("a",{parentName:"p",href:"/zh/docs/ingress-controller/1.4.0/development"},"How to Develop"),"."),(0,a.kt)("h2",{id:"compatibility-with-apache-apisix"},"Compatibility with Apache APISIX"),(0,a.kt)("p",null,"The following table describes the compatibility between apisix-ingress-controller and\n",(0,a.kt)("a",{parentName:"p",href:"https://apisix.apache.org"},"Apache APISIX"),"."),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"right"},"apisix-ingress-controller"),(0,a.kt)("th",{parentName:"tr",align:"right"},"Apache APISIX"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"right"},(0,a.kt)("inlineCode",{parentName:"td"},"master")),(0,a.kt)("td",{parentName:"tr",align:"right"},(0,a.kt)("inlineCode",{parentName:"td"},">= 2.7"),", ",(0,a.kt)("inlineCode",{parentName:"td"},"2.11")," is recommended.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"right"},(0,a.kt)("inlineCode",{parentName:"td"},"1.4.0")),(0,a.kt)("td",{parentName:"tr",align:"right"},(0,a.kt)("inlineCode",{parentName:"td"},">= 2.7"),", ",(0,a.kt)("inlineCode",{parentName:"td"},"2.11")," is recommended.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"right"},(0,a.kt)("inlineCode",{parentName:"td"},"1.3.0")),(0,a.kt)("td",{parentName:"tr",align:"right"},(0,a.kt)("inlineCode",{parentName:"td"},">= 2.7"),", ",(0,a.kt)("inlineCode",{parentName:"td"},"2.10")," is recommended.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"right"},(0,a.kt)("inlineCode",{parentName:"td"},"1.2.0")),(0,a.kt)("td",{parentName:"tr",align:"right"},(0,a.kt)("inlineCode",{parentName:"td"},">= 2.7"),", ",(0,a.kt)("inlineCode",{parentName:"td"},"2.8")," is recommended.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"right"},(0,a.kt)("inlineCode",{parentName:"td"},"1.1.0")),(0,a.kt)("td",{parentName:"tr",align:"right"},(0,a.kt)("inlineCode",{parentName:"td"},">= 2.7"),", ",(0,a.kt)("inlineCode",{parentName:"td"},"2.7")," is recommended.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"right"},(0,a.kt)("inlineCode",{parentName:"td"},"1.1.0")),(0,a.kt)("td",{parentName:"tr",align:"right"},(0,a.kt)("inlineCode",{parentName:"td"},">= 2.7"),", ",(0,a.kt)("inlineCode",{parentName:"td"},"2.7")," is recommended.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"right"},(0,a.kt)("inlineCode",{parentName:"td"},"1.0.0")),(0,a.kt)("td",{parentName:"tr",align:"right"},(0,a.kt)("inlineCode",{parentName:"td"},">= 2.7"),", ",(0,a.kt)("inlineCode",{parentName:"td"},"2.7")," is recommended.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"right"},(0,a.kt)("inlineCode",{parentName:"td"},"0.6")),(0,a.kt)("td",{parentName:"tr",align:"right"},(0,a.kt)("inlineCode",{parentName:"td"},">= 2.6"),", ",(0,a.kt)("inlineCode",{parentName:"td"},"2.6")," is recommended.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"right"},(0,a.kt)("inlineCode",{parentName:"td"},"0.5")),(0,a.kt)("td",{parentName:"tr",align:"right"},(0,a.kt)("inlineCode",{parentName:"td"},">= 2.4"),", ",(0,a.kt)("inlineCode",{parentName:"td"},"2.5")," is recommended.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"right"},(0,a.kt)("inlineCode",{parentName:"td"},"0.4")),(0,a.kt)("td",{parentName:"tr",align:"right"},(0,a.kt)("inlineCode",{parentName:"td"},">= 2.4"))))))}d.isMDXComponent=!0}}]);