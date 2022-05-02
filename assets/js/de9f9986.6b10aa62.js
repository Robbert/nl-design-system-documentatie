"use strict";(self.webpackChunk_nl_design_system_documentatie=self.webpackChunk_nl_design_system_documentatie||[]).push([[2111],{3905:function(e,t,n){n.r(t),n.d(t,{MDXContext:function(){return c},MDXProvider:function(){return d},mdx:function(){return g},useMDXComponents:function(){return s},withMDXComponents:function(){return m}});var o=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(){return a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},a.apply(this,arguments)}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function u(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=o.createContext({}),m=function(e){return function(t){var n=s(t.components);return o.createElement(e,a({},t,{components:n}))}},s=function(e){var t=o.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):u(u({},t),e)),n},d=function(e){var t=s(e.components);return o.createElement(c.Provider,{value:t},e.children)},f={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},p=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,i=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),m=s(n),d=r,p=m["".concat(i,".").concat(d)]||m[d]||f[d]||a;return n?o.createElement(p,u(u({ref:t},c),{},{components:n})):o.createElement(p,u({ref:t},c))}));function g(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=p;var u={};for(var l in t)hasOwnProperty.call(t,l)&&(u[l]=t[l]);u.originalType=e,u.mdxType="string"==typeof e?e:r,i[1]=u;for(var c=2;c<a;c++)i[c]=n[c];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}p.displayName="MDXCreateElement"},4513:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return u},contentTitle:function(){return l},metadata:function(){return c},toc:function(){return m},default:function(){return d}});var o=n(7462),r=n(3366),a=(n(7294),n(3905)),i=["components"],u={title:"Auto layout",hide_title:!0,hide_table_of_contents:!0,sidebar_label:"Auto layout",pagination_label:"Auto layout",description:"Auto layout in Figma",keywords:["designer","figma","layout","auto layout"]},l="Auto layout in Figma",c={unversionedId:"meedoen/als-designer/figma/figma-autolayout",id:"meedoen/als-designer/figma/figma-autolayout",title:"Auto layout",description:"Auto layout in Figma",source:"@site/docs/meedoen/03-als-designer/04-figma/08-figma-autolayout.md",sourceDirName:"meedoen/03-als-designer/04-figma",slug:"/meedoen/als-designer/figma/figma-autolayout",permalink:"/docs/meedoen/als-designer/figma/figma-autolayout",editUrl:"https://github.com/nl-design-system/documentatie/tree/main/docs/meedoen/03-als-designer/04-figma/08-figma-autolayout.md",tags:[],version:"current",sidebarPosition:8,frontMatter:{title:"Auto layout",hide_title:!0,hide_table_of_contents:!0,sidebar_label:"Auto layout",pagination_label:"Auto layout",description:"Auto layout in Figma",keywords:["designer","figma","layout","auto layout"]},sidebar:"meedoen",previous:{title:"Versiebeheer",permalink:"/docs/meedoen/als-designer/figma/figma-version-history"},next:{title:"Zero-frames",permalink:"/docs/meedoen/als-designer/figma/figma-zero-frames"}},m=[],s={toc:m};function d(e){var t=e.components,n=(0,r.Z)(e,i);return(0,a.mdx)("wrapper",(0,o.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,a.mdx)("h1",{id:"auto-layout-in-figma"},"Auto layout in Figma"),(0,a.mdx)("p",null,"Auto layout stelt je in staat om automatisch objecten op te maken en te verdelen binnen een frame. Deze zijn \xe9\xe9n-directioneel; dat wil zeggen dat objecten ofwel verticaal ofwel horizontaal worden opgemaakt. Om auto layout toe te passen in zowel verticale als horizontale richting, kunnen frames genest worden."),(0,a.mdx)("p",null,"Auto layout kan worden gebruikt op template- of paginaniveau, of voor micro-layout van componenten. Het kan worden vergeleken met CSS Flexbox."),(0,a.mdx)("p",null,"Auto layout frames schalen automatisch mee op basis van hun inhoud of de afmetingen van objecten erin."),(0,a.mdx)("p",null,"Auto layout kan gebruikt worden om padding aan objecten toe te voegen, marges tussen objecten en boven-, rechter-, onder-, linker- en midden uitlijning en ruimteverdeling van elementen binnen objecten."),(0,a.mdx)("p",null,(0,a.mdx)("a",{parentName:"p",href:"https://www.figma.com/blog/announcing-auto-layout/"},"Op de Figma site staat meer informatie over Auto layout"),"."))}d.isMDXComponent=!0}}]);