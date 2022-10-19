"use strict";(self.webpackChunkdoc=self.webpackChunkdoc||[]).push([[29398],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>g});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function s(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?s(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},s=Object.keys(e);for(n=0;n<s.length;n++)r=s[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)r=s[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=n.createContext({}),o=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=o(e.components);return n.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,s=e.originalType,c=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),m=o(r),g=a,h=m["".concat(c,".").concat(g)]||m[g]||p[g]||s;return r?n.createElement(h,i(i({ref:t},u),{},{components:r})):n.createElement(h,i({ref:t},u))}));function g(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var s=r.length,i=new Array(s);i[0]=m;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var o=2;o<s;o++)i[o]=r[o];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},35763:(e,t,r)=>{r.r(t),r.d(t,{contentTitle:()=>i,default:()=>u,frontMatter:()=>s,metadata:()=>l,toc:()=>c});var n=r(87462),a=(r(67294),r(3905));const s={title:"Manage Ingress Certificates With Cert Manager"},i=void 0,l={unversionedId:"tutorials/manage-ingress-certificates-with-cert-manager",id:"tutorials/manage-ingress-certificates-with-cert-manager",isDocsHomePage:!1,title:"Manage Ingress Certificates With Cert Manager",description:"This tutorial will detail how to secure ingress using cert-manager.",source:"@site/docs/apisix-ingress-controller/tutorials/manage-ingress-certificates-with-cert-manager.md",sourceDirName:"tutorials",slug:"/tutorials/manage-ingress-certificates-with-cert-manager",permalink:"/zh/docs/ingress-controller/next/tutorials/manage-ingress-certificates-with-cert-manager",editUrl:"https://github.com/apache/apisix-ingress-controller/edit/master/docs/zh/latest/tutorials/manage-ingress-certificates-with-cert-manager.md",tags:[],version:"current",frontMatter:{title:"Manage Ingress Certificates With Cert Manager"},sidebar:"docs",previous:{title:"Manage Certificates With Cert Manager",permalink:"/zh/docs/ingress-controller/next/tutorials/manage-certificates-with-cert-manager"},next:{title:"Enable authentication and restriction",permalink:"/zh/docs/ingress-controller/next/tutorials/enable-authentication-and-restriction"}},c=[{value:"Prerequisites",id:"prerequisites",children:[]},{value:"Create Issuer",id:"create-issuer",children:[]},{value:"Create Test Certificate",id:"create-test-certificate",children:[]},{value:"Create Test Service",id:"create-test-service",children:[]},{value:"Secure Ingress",id:"secure-ingress",children:[]},{value:"Test",id:"test",children:[]}],o={toc:c};function u(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},o,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"This tutorial will detail how to secure ingress using cert-manager."),(0,a.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Prepare an available Kubernetes cluster in your workstation, we recommend you to use ",(0,a.kt)("a",{parentName:"li",href:"https://kind.sigs.k8s.io/docs/user/quick-start/"},"KIND")," to create a local Kubernetes cluster."),(0,a.kt)("li",{parentName:"ul"},"Install Apache APISIX in Kubernetes by ",(0,a.kt)("a",{parentName:"li",href:"https://github.com/apache/apisix-helm-chart"},"Helm Chart"),"."),(0,a.kt)("li",{parentName:"ul"},"Install ",(0,a.kt)("a",{parentName:"li",href:"https://github.com/apache/apisix-ingress-controller/blob/master/install.md"},"apisix-ingress-controller"),"."),(0,a.kt)("li",{parentName:"ul"},"Install ",(0,a.kt)("a",{parentName:"li",href:"https://cert-manager.io/docs/installation/#default-static-install"},"cert-manager"),".")),(0,a.kt)("p",null,"In this guide, we assume that your APISIX is installed with ",(0,a.kt)("inlineCode",{parentName:"p"},"ssl")," enabled, which is not enabled by default in the Helm Chart. To enable it, you need to set ",(0,a.kt)("inlineCode",{parentName:"p"},"gateway.tls.enabled=true")," during installation."),(0,a.kt)("p",null,"For example, you could install APISIX and APISIX ingress controller by running:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"helm install apisix apisix/apisix --set gateway.type=NodePort --set ingress-controller.enabled=true --set gateway.tls.enabled=true --set ingress-controller.config.apisix.serviceNamespace=default\n")),(0,a.kt)("p",null,"Assume that the SSL port is ",(0,a.kt)("inlineCode",{parentName:"p"},"9443"),"."),(0,a.kt)("h2",{id:"create-issuer"},"Create Issuer"),(0,a.kt)("p",null,"For testing purposes, we will use a simple CA issuer. All required files can be found ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/apache/apisix-ingress-controller/tree/master/docs/en/latest/tutorials/cert-manager"},"here"),"."),(0,a.kt)("p",null,"To create a CA issuer, use the following commands:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl apply -f ./cert-manager/ca.yaml\nkubectl apply -f ./cert-manager/issuer.yaml\n")),(0,a.kt)("p",null,"If the cert-manager is working correctly, we should be able to see the Ready status by running:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl get issuer\n")),(0,a.kt)("p",null,"It should output:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-text"},"NAME        READY   AGE\nca-issuer   True    50s\n")),(0,a.kt)("h2",{id:"create-test-certificate"},"Create Test Certificate"),(0,a.kt)("p",null,"To ensure that cert-manager is working properly, we can create a test ",(0,a.kt)("inlineCode",{parentName:"p"},"Certificate")," resource."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: cert-manager.io/v1\nkind: Certificate\nmetadata:\n  name: demo-cert\nspec:\n  dnsNames:\n    - example.com\n  issuerRef:\n    kind: Issuer\n    name: ca-issuer\n  secretName: example-cert\n  usages:\n    - digital signature\n    - key encipherment\n")),(0,a.kt)("p",null,"Like ",(0,a.kt)("inlineCode",{parentName:"p"},"Issuer"),", we could see its readiness status by running:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl get certificate\n")),(0,a.kt)("p",null,"It should output:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-text"},"NAME        READY   SECRET        AGE\ndemo-cert   True    example.com   50s\n")),(0,a.kt)("p",null,"Check the secrets by running:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl get secret\n")),(0,a.kt)("p",null,"It should output:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-text"},"NAME          TYPE                DATA   AGE\nexample.com   kubernetes.io/tls   3      2m20s\n")),(0,a.kt)("p",null,"This means that our cert-manager is working properly."),(0,a.kt)("h2",{id:"create-test-service"},"Create Test Service"),(0,a.kt)("p",null,"We use ",(0,a.kt)("a",{parentName:"p",href:"https://hub.docker.com/r/kennethreitz/httpbin/"},"kennethreitz/httpbin")," as the service image."),(0,a.kt)("p",null,"Deploy it by running:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl run httpbin --image kennethreitz/httpbin --expose --port 80\n")),(0,a.kt)("h2",{id:"secure-ingress"},"Secure Ingress"),(0,a.kt)("p",null,"The cert-manager supports several ways to ",(0,a.kt)("a",{parentName:"p",href:"https://cert-manager.io/docs/usage/ingress/"},"secure ingress"),". The easiest way is to use annotations."),(0,a.kt)("p",null,"By using annotations, we don't need to manage ",(0,a.kt)("inlineCode",{parentName:"p"},"Certificate")," CRD manually."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: networking.k8s.io/v1\nkind: Ingress\nmetadata:\n  name: httpserver-ingress\n  annotations:\n    # add an annotation indicating the issuer to use.\n    cert-manager.io/issuer: \"ca-issuer\"\nspec:\n  # apisix-ingress-controller is only interested in Ingress\n  # resources with the matched ingressClass name, in our case,\n  # it's apisix.\n  ingressClassName: apisix\n  tls:\n    - hosts:\n        - local.httpbin.org # placing a host in the TLS config will determine what ends up in the cert's subjectAltNames\n      secretName: ingress-cert-manager-tls # cert-manager will store the created certificate in this secret.\n  rules:\n  - host: local.httpbin.org\n    http:\n      paths:\n      - path: /\n        pathType: Prefix\n        backend:\n          service:\n            name: httpbin\n            port:\n              number: 80\n")),(0,a.kt)("p",null,"The annotation ",(0,a.kt)("inlineCode",{parentName:"p"},"cert-manager.io/issuer")," tells cert-manager which issuer should be used. The Issuer must be in the same namespace as the Ingress resource. Please read ",(0,a.kt)("a",{parentName:"p",href:"https://cert-manager.io/docs/usage/ingress/"},"Securing Ingress Resources")," for more details."),(0,a.kt)("p",null,"We should now be able to see the certificate and secret resource created by cert-manager:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl get certificate\nkubectl get secret\n")),(0,a.kt)("p",null,"It should output:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-text"},"NAME                       READY   SECRET                     AGE\ningress-cert-manager-tls   True    ingress-cert-manager-tls   2m\n\nNAME                       TYPE                DATA   AGE\ningress-cert-manager-tls   kubernetes.io/tls   3      3m\n")),(0,a.kt)("h2",{id:"test"},"Test"),(0,a.kt)("p",null,"Run curl command in a APISIX pod to see if the Ingress and TLS configuration works."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl -n <APISIX_NAMESPACE> exec -it <APISIX_POD_NAME> -- curl --resolve 'local.httpbin.org:9443:127.0.0.1' \"https://local.httpbin.org:9443/ip\" -k\n")),(0,a.kt)("p",null,"It should output:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "origin": "127.0.0.1"\n}\n')))}u.isMDXComponent=!0}}]);