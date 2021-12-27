"use strict";(self.webpackChunkdoc=self.webpackChunkdoc||[]).push([[852],{3905:function(t,e,n){n.d(e,{Zo:function(){return u},kt:function(){return m}});var r=n(7294);function a(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function o(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?o(Object(n),!0).forEach((function(e){a(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function l(t,e){if(null==t)return{};var n,r,a=function(t,e){if(null==t)return{};var n,r,a={},o=Object.keys(t);for(r=0;r<o.length;r++)n=o[r],e.indexOf(n)>=0||(a[n]=t[n]);return a}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(r=0;r<o.length;r++)n=o[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(a[n]=t[n])}return a}var p=r.createContext({}),s=function(t){var e=r.useContext(p),n=e;return t&&(n="function"==typeof t?t(e):i(i({},e),t)),n},u=function(t){var e=s(t.components);return r.createElement(p.Provider,{value:e},t.children)},c={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},d=r.forwardRef((function(t,e){var n=t.components,a=t.mdxType,o=t.originalType,p=t.parentName,u=l(t,["components","mdxType","originalType","parentName"]),d=s(n),m=a,f=d["".concat(p,".").concat(m)]||d[m]||c[m]||o;return n?r.createElement(f,i(i({ref:e},u),{},{components:n})):r.createElement(f,i({ref:e},u))}));function m(t,e){var n=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var o=n.length,i=new Array(o);i[0]=d;var l={};for(var p in e)hasOwnProperty.call(e,p)&&(l[p]=e[p]);l.originalType=t,l.mdxType="string"==typeof t?t:a,i[1]=l;for(var s=2;s<o;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},4534:function(t,e,n){n.r(e),n.d(e,{frontMatter:function(){return l},contentTitle:function(){return p},metadata:function(){return s},toc:function(){return u},default:function(){return d}});var r=n(7462),a=n(3366),o=(n(7294),n(3905)),i=["components"],l={sidebar_position:1},p="Installation",s={unversionedId:"getting-started/installation",id:"getting-started/installation",title:"Installation",description:"1. Install badaso and badaso-post-module. Setelah itu, Anda dapat memasukkan paket Badaso dengan perintah berikut.",source:"@site/i18n/id/docusaurus-plugin-content-docs/current/getting-started/installation.md",sourceDirName:"getting-started",slug:"/getting-started/installation",permalink:"/id/getting-started/installation",editUrl:"https://github.com/uasoft-indonesia/badaso-post-theme/edit/main/website/docs/getting-started/installation.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Introduction",permalink:"/id/"}},u=[],c={toc:u};function d(t){var e=t.components,n=(0,a.Z)(t,i);return(0,o.kt)("wrapper",(0,r.Z)({},c,n,{components:e,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"installation"},"Installation"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Install ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/uasoft-indonesia/badaso"},"badaso")," and ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/uasoft-indonesia/badaso-post-module"},"badaso-post-module"),". Setelah itu, Anda dapat memasukkan paket Badaso dengan perintah berikut.")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"composer require badaso/post-theme\n")),(0,o.kt)("ol",{start:2},(0,o.kt)("li",{parentName:"ol"},"Jalankan perintah berikut.")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"npm install\n")),(0,o.kt)("ol",{start:3},(0,o.kt)("li",{parentName:"ol"},"Jalankan perintah berikut untuk mengatur ",(0,o.kt)("inlineCode",{parentName:"li"},"badaso-content"),".")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"php artisan badaso-content:setup\n")),(0,o.kt)("ol",{start:4},(0,o.kt)("li",{parentName:"ol"},"Jalankan perintah berikut untuk memigrasi tabel ",(0,o.kt)("inlineCode",{parentName:"li"},"badaso-content"),".")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"php artisan migrate\n")),(0,o.kt)("ol",{start:5},(0,o.kt)("li",{parentName:"ol"},"Jalankan perintah berikut.")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"php artisan badaso-post-theme:setup\n")))}d.isMDXComponent=!0}}]);