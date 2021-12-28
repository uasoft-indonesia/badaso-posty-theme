"use strict";(self.webpackChunkdoc=self.webpackChunkdoc||[]).push([[461],{3905:function(e,t,r){r.d(t,{Zo:function(){return u},kt:function(){return m}});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=n.createContext({}),c=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},u=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,u=p(e,["components","mdxType","originalType","parentName"]),d=c(r),m=o,f=d["".concat(l,".").concat(m)]||d[m]||s[m]||i;return r?n.createElement(f,a(a({ref:t},u),{},{components:r})):n.createElement(f,a({ref:t},u))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=r.length,a=new Array(i);a[0]=d;var p={};for(var l in t)hasOwnProperty.call(t,l)&&(p[l]=t[l]);p.originalType=e,p.mdxType="string"==typeof e?e:o,a[1]=p;for(var c=2;c<i;c++)a[c]=r[c];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},8526:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return p},contentTitle:function(){return l},metadata:function(){return c},toc:function(){return u},default:function(){return d}});var n=r(7462),o=r(3366),i=(r(7294),r(3905)),a=["components"],p={sidebar_position:2},l="Override View",c={unversionedId:"customization/override-view",id:"customization/override-view",title:"Override View",description:"To override the view, you can follow the following steps:",source:"@site/docs/customization/override-view.md",sourceDirName:"customization",slug:"/customization/override-view",permalink:"/customization/override-view",editUrl:"https://github.com/uasoft-indonesia/badaso-post-theme/edit/main/website/docs/customization/override-view.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Override Controller",permalink:"/customization/override-controller"}},u=[],s={toc:u};function d(e){var t=e.components,r=(0,o.Z)(e,a);return(0,i.kt)("wrapper",(0,n.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"override-view"},"Override View"),(0,i.kt)("p",null,"To override the view, you can follow the following steps:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"You must run the theme setup first by running the ",(0,i.kt)("inlineCode",{parentName:"p"},"php artisan badaso-post-theme:setup")," command.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"A folder named ",(0,i.kt)("inlineCode",{parentName:"p"},"post-theme")," will be created in the ",(0,i.kt)("inlineCode",{parentName:"p"},"resources/js/badaso/theme")," folder.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Inside the ",(0,i.kt)("inlineCode",{parentName:"p"},"post-theme")," folder, there will be a folder named ",(0,i.kt)("inlineCode",{parentName:"p"},"pages"),". Create a .vue file inside the ",(0,i.kt)("inlineCode",{parentName:"p"},"pages")," folder with the same name as the page. For example, if you want to override the ",(0,i.kt)("inlineCode",{parentName:"p"},"home")," page, you can create a ",(0,i.kt)("inlineCode",{parentName:"p"},"home.vue")," file in the ",(0,i.kt)("inlineCode",{parentName:"p"},"pages")," folder.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"You can see the available page that can be overridden in the ",(0,i.kt)("inlineCode",{parentName:"p"},"vendor/badaso/post-theme/src/resources/app/pages/")," file."))))}d.isMDXComponent=!0}}]);