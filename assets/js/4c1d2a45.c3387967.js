"use strict";(self.webpackChunkworking_group_two_website=self.webpackChunkworking_group_two_website||[]).push([[444],{3905:function(e,t,r){r.d(t,{Zo:function(){return c},kt:function(){return f}});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function u(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=n.createContext({}),s=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},c=function(e){var t=s(e.components);return n.createElement(l.Provider,{value:t},e.children)},g={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,c=u(e,["components","mdxType","originalType","parentName"]),p=s(r),f=o,m=p["".concat(l,".").concat(f)]||p[f]||g[f]||i;return r?n.createElement(m,a(a({ref:t},c),{},{components:r})):n.createElement(m,a({ref:t},c))}));function f(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=r.length,a=new Array(i);a[0]=p;var u={};for(var l in t)hasOwnProperty.call(t,l)&&(u[l]=t[l]);u.originalType=e,u.mdxType="string"==typeof e?e:o,a[1]=u;for(var s=2;s<i;s++)a[s]=r[s];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}p.displayName="MDXCreateElement"},57330:function(e,t,r){r.r(t),r.d(t,{assets:function(){return c},contentTitle:function(){return l},default:function(){return f},frontMatter:function(){return u},metadata:function(){return s},toc:function(){return g}});var n=r(87462),o=r(63366),i=(r(67294),r(3905)),a=["components"],u={slug:"extending-k8s/",title:"Extending Kubernetes for our needs",date:new Date("2020-02-21T00:00:00.000Z"),tags:["infrastructure","kubernetes","networking","AWS"],authors:"holger-ihrig"},l=void 0,s={permalink:"/blog/extending-k8s/",editUrl:"https://github.com/working-group-two/wgtwo.com/edit/main/blog/../blog/2020-02-21-Extending-Kubernetes-Static-IP-Routing.md",source:"@site/../blog/2020-02-21-Extending-Kubernetes-Static-IP-Routing.md",title:"Extending Kubernetes for our needs",description:"We are using Kubernetes as our cluster scheduler and this serves us well. However we have a",date:"2020-02-21T00:00:00.000Z",formattedDate:"February 21, 2020",tags:[{label:"infrastructure",permalink:"/blog/tags/infrastructure"},{label:"kubernetes",permalink:"/blog/tags/kubernetes"},{label:"networking",permalink:"/blog/tags/networking"},{label:"AWS",permalink:"/blog/tags/aws"}],readingTime:11.345,hasTruncateMarker:!0,authors:[{name:"Holger Ihrig",title:"Software Engineer for Session Management & Protocol Termination",url:"https://www.linkedin.com/in/hihrig/",imageURL:"/img/author-photos/hi.jpg",key:"holger-ihrig"}],frontMatter:{slug:"extending-k8s/",title:"Extending Kubernetes for our needs",date:"2020-02-21T00:00:00.000Z",tags:["infrastructure","kubernetes","networking","AWS"],authors:"holger-ihrig"},prevItem:{title:"VoWifi leaking IMSI",permalink:"/blog/vowifi-imsi-leak/"},nextItem:{title:"Towards observability nirvana: infinite metric retention with Thanos",permalink:"/blog/metrics-unlimited-thanos"}},c={authorsImageUrls:[void 0]},g=[],p={toc:g};function f(e){var t=e.components,r=(0,o.Z)(e,a);return(0,i.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"We are using Kubernetes as our cluster scheduler and this serves us well. However we have a\nfew cases where we need to do some additional work."))}f.isMDXComponent=!0}}]);