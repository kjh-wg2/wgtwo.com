"use strict";(self.webpackChunkworking_group_two_website=self.webpackChunkworking_group_two_website||[]).push([[7134],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return d}});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),u=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},c=function(e){var t=u(e.components);return r.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},h=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),h=u(n),d=o,m=h["".concat(l,".").concat(d)]||h[d]||p[d]||a;return n?r.createElement(m,s(s({ref:t},c),{},{components:n})):r.createElement(m,s({ref:t},c))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,s=new Array(a);s[0]=h;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:o,s[1]=i;for(var u=2;u<a;u++)s[u]=n[u];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}h.displayName="MDXCreateElement"},98789:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return l},default:function(){return d},frontMatter:function(){return i},metadata:function(){return u},toc:function(){return p}});var r=n(87462),o=n(63366),a=(n(67294),n(3905)),s=["components"],i={slug:"releasing-our-first-grpc-apis",title:"We are releasing our first production-ready gRPC APIs!",date:new Date("2022-03-01T00:00:00.000Z"),tags:["api"],authors:["gunnar-inge","noy"]},l=void 0,u={permalink:"/jp/blog/releasing-our-first-grpc-apis",editUrl:"https://github.com/working-group-two/wgtwo.com/edit/main/blog/../blog/2022-03-01-releasing-our-first-grpc-apis/index.md",source:"@site/../blog/2022-03-01-releasing-our-first-grpc-apis/index.md",title:"We are releasing our first production-ready gRPC APIs!",description:"At wgtwo we have been offering public APIs for a long time using major version zero.",date:"2022-03-01T00:00:00.000Z",formattedDate:"March 1, 2022",tags:[{label:"api",permalink:"/jp/blog/tags/api"}],readingTime:5.865,hasTruncateMarker:!0,authors:[{name:"Gunnar Inge G. Sortland",title:"Tech Lead for Ecosystem",url:"https://www.linkedin.com/in/gunnaringe/",imageURL:"/img/author-photos/gis.jpg",key:"gunnar-inge"},{name:"Noy Shimshoni",title:"Software Engineer for Core Services",url:"https://www.linkedin.com/in/noy-shimshoni-b176bb85/",imageURL:"/img/author-photos/ns.jpg",key:"noy"}],frontMatter:{slug:"releasing-our-first-grpc-apis",title:"We are releasing our first production-ready gRPC APIs!",date:"2022-03-01T00:00:00.000Z",tags:["api"],authors:["gunnar-inge","noy"]},prevItem:{title:"Voxist to join the Working Group Two marketplace",permalink:"/jp/blog/voxist-to-join-marketplace"},nextItem:{title:"How I leveraged the 80/20 principle to rebuild wgtwo.com",permalink:"/jp/blog/new-website"}},c={authorsImageUrls:[void 0,void 0]},p=[{value:"The APIs",id:"the-apis",level:3},{value:"StreamCountryChangeEvents",id:"streamcountrychangeevents",level:4},{value:"Example",id:"example",level:5},{value:"StreamHandsetChangeEvents",id:"streamhandsetchangeevents",level:4},{value:"Example",id:"example-1",level:5},{value:"StreamFirstAttachmentEvents",id:"streamfirstattachmentevents",level:4},{value:"Example",id:"example-2",level:5},{value:"StreamPeriodicCountryEvents",id:"streamperiodiccountryevents",level:4},{value:"Example",id:"example-3",level:5},{value:"SMS APIs",id:"sms-apis",level:4},{value:"Send text SMS from subscriber",id:"send-text-sms-from-subscriber",level:5},{value:"Send text SMS to subscriber",id:"send-text-sms-to-subscriber",level:5},{value:"Send data SMS to subscriber",id:"send-data-sms-to-subscriber",level:5},{value:"Why we chose gRPC",id:"why-we-chose-grpc",level:3},{value:"Our API playground",id:"our-api-playground",level:3}],h={toc:p};function d(e){var t=e.components,i=(0,o.Z)(e,s);return(0,a.kt)("wrapper",(0,r.Z)({},h,i,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"At ",(0,a.kt)("strong",{parentName:"p"},"wgtwo")," we have been offering public APIs for a long time using major version zero."),(0,a.kt)("p",null,"They have been great for playing around with and we have learned a lot about what we actually need. So now its time to step up our game."),(0,a.kt)("p",null,"We are releasing our first production ready gRPC APIs!"),(0,a.kt)("p",null,"Have you ever received a welcome SMS when toggling flight mode off as you were on your way out of a plane starting off your awesome vacation? In this blog post we will describe our approach to supporting that vacation-feeling SMS, and how we transitioned to using gRPC streams to support it and greatly improve the flexibility of our platform."),(0,a.kt)("p",null,(0,a.kt)("img",{src:n(88474).Z,width:"930",height:"864"})),(0,a.kt)("p",null,"As a quick first version, we have implemented a service that listens to location update events happening in our core and decides whether a user has changed country or not according to our records of your previous and new location. If a user did change country, we would fire a simple POST request to a configured endpoint hosted by the operator with this information. This has for most parts been good enough to get the job done, but it creates an explicit dependency between our core and our partner operator service being up and responsive, which makes the solution prone to errors and makes the system less flexible."),(0,a.kt)("p",null,"At ",(0,a.kt)("strong",{parentName:"p"},"wgtwo"),", we are relying heavily on gRPC APIs, and we are now ready to officially release our first gRPC API after playing around with our v0 APIs for a long time."),(0,a.kt)("p",null,"To get notifications of a phone attaching to a network in another country, you may use our ",(0,a.kt)("inlineCode",{parentName:"p"},"StreamCountryChangeEvents")," API."),(0,a.kt)("p",null,"By calling this API, you initiate a server stream where you will receive this type of event for your customers. The API requires that you send an acknowledgement message when you have successfully processed the event; failing to do so will make it resend after a given timeout."),(0,a.kt)("p",null,"You may control load for your clients by setting how many concurrent events should be in-flight, and you may create multiple connections to share load between your servers.  This gives both us and the users of our API greater flexibility in consuming events that happen in the core of our network, and it gives the caller of the API the freedom to react in a way they believe is best for their user base. This is true for all the event-type server streams we offer."),(0,a.kt)("p",null,"All in all, we feel that moving to gRPC, where we give the client flexibility in how these events should be consumed and protect the client from high load, is the right move. This is instead of spending energy on adding resending and failure handling to our previous solution."),(0,a.kt)("h3",{id:"the-apis"},"The APIs"),(0,a.kt)("p",null,"Our first batch of gRPC APIs is listed below."),(0,a.kt)("p",null,"All our event-based APIs have a common metadata field, which contains the subscriber identifier (using Pairwise Pseudonymous Identifier) and the identifier used for acknowledging the messages. For brevity this is not included in the examples below."),(0,a.kt)("h4",{id:"streamcountrychangeevents"},"StreamCountryChangeEvents"),(0,a.kt)("p",null,"This one is explained in the intro section and will let you listen to a stream of events for when the SIM first attaches to a network in another country."),(0,a.kt)("h5",{id:"example"},"Example"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "metadata": { ... },\n  "countryChangeEvent": {\n    "previous": {\n      "code": "NO",\n      "name": "Norway"\n    },\n    "current": {\n      "code": "SE",\n      "name": "Sweden"\n    }\n  }\n}\n')),(0,a.kt)("p",null,"Read the docs: ",(0,a.kt)("a",{parentName:"p",href:"https://v1.docs.wgtwo.com/guide/subscription/v1/how-to-get-country-change-events.html"},"Get country change events")),(0,a.kt)("h4",{id:"streamhandsetchangeevents"},"StreamHandsetChangeEvents"),(0,a.kt)("p",null,"This lets you listen to a stream of events for when a SIM attaches via a new handset. This is typically used for sending you new APN settings as you set up your new phone."),(0,a.kt)("h5",{id:"example-1"},"Example"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "metadata": { ... },\n  "handsetChangeEvent": {\n    "previous": {\n      "imeiSv": {\n        "imei": "86700000000000",\n        "softwareVersion": "64"\n      }\n    },\n    "current": {\n      "imeiSv": {\n        "imei": "86700000000001",\n        "softwareVersion": "65"\n      }\n    },\n    "imsi": {\n      "value": "(...)"\n    }\n  }\n}\n')),(0,a.kt)("p",null,"Read the docs: ",(0,a.kt)("a",{parentName:"p",href:"https://v1.docs.wgtwo.com/guide/subscription/v1/how-to-get-handset-change-events.html"},"Get handset change events")),(0,a.kt)("h4",{id:"streamfirstattachmentevents"},"StreamFirstAttachmentEvents"),(0,a.kt)("p",null,"This lets you listen to a stream of events for when the SIM attaches to the network for the first time. In other words, it gives an operator a simple way to see that a SIM has been taken in use."),(0,a.kt)("h5",{id:"example-2"},"Example"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "metadata": { ... },\n  "firstAttachmentEvent": {\n    "number": {\n      "e164": "+47xxxxxxxx",\n    },\n    "imsi": {\n      "value": "24206000010001"\n    }\n  }\n}\n')),(0,a.kt)("p",null,"Read the docs: ",(0,a.kt)("a",{parentName:"p",href:"https://v1.docs.wgtwo.com/guide/subscription/v1/how-to-get-first-attachment-events.html"},"Get first attachment events\n")),(0,a.kt)("h4",{id:"streamperiodiccountryevents"},"StreamPeriodicCountryEvents"),(0,a.kt)("p",null,"This API has some similarities to the StreamCountryChangeEvents API. It will periodically send events related to the country a SIM card is located in."),(0,a.kt)("p",null,"This may be used if you want a message to be sent out when a user has a longer stay in another country, and you want to ensure the user has the required information about roaming prices."),(0,a.kt)("h5",{id:"example-3"},"Example"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "metadata": { ... },\n  "periodicCountryEvent": {\n    "number": {\n      "e164": "+4799990000"\n    },\n    "imsi": {\n      "value": "242010000000000"\n    },\n    "country": {\n      "code": "SE",\n      "name": "Sweden"\n    }\n  }\n}\n')),(0,a.kt)("p",null,"Read the docs: ",(0,a.kt)("a",{parentName:"p",href:"https://v1.docs.wgtwo.com/guide/subscription/v1/how-to-get-periodic-country-events.html"},"Get periodic country events")),(0,a.kt)("h4",{id:"sms-apis"},"SMS APIs"),(0,a.kt)("p",null,"We have also launched three SMS APIs, which will be covered more in depth in a later post:"),(0,a.kt)("h5",{id:"send-text-sms-from-subscriber"},"Send text SMS from subscriber"),(0,a.kt)("p",null,"This allows you to text messages from a subscriber to any phone number."),(0,a.kt)("h5",{id:"send-text-sms-to-subscriber"},"Send text SMS to subscriber"),(0,a.kt)("p",null,"This allows a service to send regular text messages to a subscriber from either a phone number or an alphanumeric sender ID."),(0,a.kt)("h5",{id:"send-data-sms-to-subscriber"},"Send data SMS to subscriber"),(0,a.kt)("p",null,"This allows a service to send binary messages to a subscriber from either a phone number or an alphanumeric sender ID."),(0,a.kt)("p",null,"This may be used to, for example, send APN settings when your subscribers swap phones."),(0,a.kt)("h3",{id:"why-we-chose-grpc"},"Why we chose gRPC"),(0,a.kt)("p",null,"Using gRPC, our published proto-files are the contract for our APIs. This makes documentation easier, and makes it easy to ensure we don\u2019t break our existing APIs."),(0,a.kt)("p",null,"Many of the APIs listed here are streaming APIs. In our experience gRPC makes implementing streams easy. We do also use protobufs a lot internally, and we have found that it helps us implement changes in a non-breaking way and has also aided us in making communication between services written in different languages work without too much hassle."),(0,a.kt)("h3",{id:"our-api-playground"},"Our API playground"),(0,a.kt)("p",null,"A lot of our APIs are still in v0. The v0 APIs is our playground where we have been testing out what functionality we actually need, and how we can expose that in a way that is easy to use."),(0,a.kt)("p",null,"This includes APIs for receiving SMS, building WebRTC clients, setting up SIP integrations, and more."),(0,a.kt)("p",null,"For production usage, we do recommend that you stick to our released APIs as we may make breaking changes to our v0 APIs without any notice. You are however free to use them for demo purposes, and we would be very happy to receive feedback if there is anything you need to build your next product."),(0,a.kt)("p",null,"If you have any questions, feel free to reach out at ",(0,a.kt)("a",{parentName:"p",href:"mailto:products@wgtwo.com"},"products@wgtwo.com")," and visit our docs website for a deeper dive and more code examples of the various APIs we provide: ",(0,a.kt)("a",{parentName:"p",href:"https://v1.docs.wgtwo.com/"},"https://v1.docs.wgtwo.com/"),"."))}d.isMDXComponent=!0},88474:function(e,t,n){t.Z=n.p+"assets/images/welcome-ddefd40287659347c8f60af234a341a5.png"}}]);