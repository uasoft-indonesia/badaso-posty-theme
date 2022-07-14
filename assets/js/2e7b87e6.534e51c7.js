"use strict";(self.webpackChunkdoc=self.webpackChunkdoc||[]).push([[972],{3905:function(e,n,t){t.d(n,{Zo:function(){return p},kt:function(){return m}});var r=t(7294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var c=r.createContext({}),s=function(e){var n=r.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},p=function(e){var n=s(e.components);return r.createElement(c.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=s(t),m=o,g=d["".concat(c,".").concat(m)]||d[m]||u[m]||a;return t?r.createElement(g,i(i({ref:n},p),{},{components:t})):r.createElement(g,i({ref:n},p))}));function m(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var a=t.length,i=new Array(a);i[0]=d;var l={};for(var c in n)hasOwnProperty.call(n,c)&&(l[c]=n[c]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var s=2;s<a;s++)i[s]=t[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},8888:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return l},contentTitle:function(){return c},metadata:function(){return s},toc:function(){return p},default:function(){return d}});var r=t(7462),o=t(3366),a=(t(7294),t(3905)),i=["components"],l={sidebar_position:3},c="Google Analytics Configuration Alternative",s={unversionedId:"customization/manual-configure-google-analytics",id:"customization/manual-configure-google-analytics",title:"Google Analytics Configuration Alternative",description:"This configuration alternative is used when hit google analytics is not running on badaso post theme",source:"@site/docs/customization/manual-configure-google-analytics.md",sourceDirName:"customization",slug:"/customization/manual-configure-google-analytics",permalink:"/customization/manual-configure-google-analytics",editUrl:"https://github.com/uasoft-indonesia/badaso-posty-theme/edit/main/website/docs/customization/manual-configure-google-analytics.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"Override View",permalink:"/customization/override-view"}},p=[],u={toc:p};function d(e){var n=e.components,t=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,r.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"google-analytics-configuration-alternative"},"Google Analytics Configuration Alternative"),(0,a.kt)("p",null,"This configuration alternative is used when hit google analytics is not running on badaso post theme"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"In ",(0,a.kt)("inlineCode",{parentName:"li"},".env")," add new configuration on ",(0,a.kt)("inlineCode",{parentName:"li"},"MIX_ANALYTICS_TRACKING_ID")," key"),(0,a.kt)("li",{parentName:"ol"},"In ",(0,a.kt)("inlineCode",{parentName:"li"},"resources/views")," create a folder named ",(0,a.kt)("inlineCode",{parentName:"li"},"partials")),(0,a.kt)("li",{parentName:"ol"},"In the ",(0,a.kt)("inlineCode",{parentName:"li"},"resources/views/partials")," folder create a blade file with the name ",(0,a.kt)("inlineCode",{parentName:"li"},"google-analytics.blade.php")," with the following contents:")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"@php\n$measurement_id = env('MIX_ANALYTICS_TRACKING_ID', null);\n// output : UA-2155XXXXX-X\n@endphp\n\n\x3c!-- Global site tag (gtag.js) - Google Analytics --\x3e\n<script async src=\"{{ \"https://www.googletagmanager.com/gtag/js?id={$measurement_id}\" }}\"><\/script>\n<script>\n    window.dataLayer = window.dataLayer || [];\n\n    function gtag() {\n        dataLayer.push(arguments);\n    }\n    gtag('js', new Date());\n    gtag('config', '{{ $measurement_id }}');\n<\/script>\n\n<script>\n    // record location analytics\n    let href = window.location.href\n    setInterval(() => {\n        let listenHref = window.location.href\n        if (listenHref != href) {\n            let page_title = document.title\n            let {\n                href: page_location,\n                pathname: page_path\n            } = window.location\n            let configurationSet = {\n                page_title,\n                page_location,\n                page_path,\n            }\n\n            gtag('config', '{{ $measurement_id }}', configurationSet);\n\n            href = listenHref\n        }\n    }, 1000);\n<\/script>\n\n")),(0,a.kt)("ol",{start:4},(0,a.kt)("li",{parentName:"ol"},"In ",(0,a.kt)("inlineCode",{parentName:"li"},"resources/views")," create a folder named ",(0,a.kt)("inlineCode",{parentName:"li"},"vendor/post-theme")),(0,a.kt)("li",{parentName:"ol"},"Copy the ",(0,a.kt)("inlineCode",{parentName:"li"},"vendor/badaso/post-theme/src/resources/views/app.blade.php")," file to the ",(0,a.kt)("inlineCode",{parentName:"li"},"resources/views/vendor/post-theme")," folder"),(0,a.kt)("li",{parentName:"ol"},"Calling ",(0,a.kt)("inlineCode",{parentName:"li"},"resources/views/partials/google-analytics.blade.php")," in ",(0,a.kt)("inlineCode",{parentName:"li"},"resources/views/vendor/post-theme/app.blade.php"))),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"<!DOCTYPE html>\n<html lang=\"en\">\n\n<head>\n  ...\n\n  \x3c!-- Google Analytics --\x3e\n  @include('partials.google-analytics')\n  \x3c!-- End Google Analytics --\x3e\n\n  ...\n\n</head>\n...\n</html>\n")))}d.isMDXComponent=!0}}]);