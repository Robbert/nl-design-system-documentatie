"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[8783],{3905:function(e,n,t){t.d(n,{Zo:function(){return m},kt:function(){return u}});var i=t(7294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);n&&(i=i.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,i)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,i,a=function(e,n){if(null==e)return{};var t,i,a={},r=Object.keys(e);for(i=0;i<r.length;i++)t=r[i],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)t=r[i],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var l=i.createContext({}),c=function(e){var n=i.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},m=function(e){var n=c(e.components);return i.createElement(l.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return i.createElement(i.Fragment,{},n)}},d=i.forwardRef((function(e,n){var t=e.components,a=e.mdxType,r=e.originalType,l=e.parentName,m=s(e,["components","mdxType","originalType","parentName"]),d=c(t),u=a,g=d["".concat(l,".").concat(u)]||d[u]||p[u]||r;return t?i.createElement(g,o(o({ref:n},m),{},{components:t})):i.createElement(g,o({ref:n},m))}));function u(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var r=t.length,o=new Array(r);o[0]=d;var s={};for(var l in n)hasOwnProperty.call(n,l)&&(s[l]=n[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,o[1]=s;for(var c=2;c<r;c++)o[c]=t[c];return i.createElement.apply(null,o)}return i.createElement.apply(null,t)}d.displayName="MDXCreateElement"},9029:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return s},contentTitle:function(){return l},metadata:function(){return c},toc:function(){return m},default:function(){return d}});var i=t(7462),a=t(3366),r=(t(7294),t(3905)),o=["components"],s={title:"Figma Naming",hide_title:!0,hide_table_of_contents:!0,sidebar_label:"Naming",pagination_label:"Naming",description:"NL Design System File structure in Figma",keywords:["designer","figma"]},l="Naming in Figma",c={unversionedId:"meedoen/als-designer/figma/figma-naming",id:"meedoen/als-designer/figma/figma-naming",title:"Figma Naming",description:"NL Design System File structure in Figma",source:"@site/docs/meedoen/02-als-designer/02-figma/02-figma-naming.md",sourceDirName:"meedoen/02-als-designer/02-figma",slug:"/meedoen/als-designer/figma/figma-naming",permalink:"/documentatie/docs/meedoen/als-designer/figma/figma-naming",editUrl:"https://github.com/nl-design-system/documentatie/tree/main/docs/meedoen/02-als-designer/02-figma/02-figma-naming.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{title:"Figma Naming",hide_title:!0,hide_table_of_contents:!0,sidebar_label:"Naming",pagination_label:"Naming",description:"NL Design System File structure in Figma",keywords:["designer","figma"]},sidebar:"meedoen",previous:{title:"Index",permalink:"/documentatie/docs/meedoen/als-designer/figma/"},next:{title:"File structure",permalink:"/documentatie/docs/meedoen/als-designer/figma/figma-file-structure"}},m=[{value:"Component variants",id:"component-variants",children:[],level:2},{value:"Synonyms",id:"synonyms",children:[{value:"Avoid local components from being published to a library",id:"avoid-local-components-from-being-published-to-a-library",children:[],level:3}],level:2},{value:"Images",id:"images",children:[],level:2}],p={toc:m};function d(e){var n=e.components,t=(0,a.Z)(e,o);return(0,r.kt)("wrapper",(0,i.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"naming-in-figma"},"Naming in Figma"),(0,r.kt)("p",null,"A good approach in any design file is to explicitly name objects directly after their creation. This helps adding meaning to design objects and eases handoff of a design file to another designer or a developer."),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/248921/140958292-85ccee96-2add-4613-9daf-755b11bd433b.png",alt:"Unnamed nested frames and groups"})),(0,r.kt)("p",null,"For instance, if you create a rectangle meant as background and border container for a text input it is good practice to name the rectangle ",(0,r.kt)("inlineCode",{parentName:"p"},"text-input-background")," or similar right after creating the rectangle."),(0,r.kt)("p",null,"Where possible, components, layers, frames, and design tokens borrow (semantic) names from HTML and SVG tags, CSS properties, ARIA roles or BEM naming."),(0,r.kt)("h2",{id:"component-variants"},"Component variants"),(0,r.kt)("p",null,"For convenience and \u2018scanablity\u2019 when working with component variants we suggest using lowercase for boolean values, such as on/off or true/false options and sentence case for interactive and feedback states."),(0,r.kt)("p",null,"Using the same naming as used in the front-end again eases communication and handoff. For instance for a checkbox\u2019 checked state we use 'checked' instead of 'active'."),(0,r.kt)("p",null,"In Figma, variant properties can be sorted by dragging and dropping individual properties."),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/248921/140958477-85782e98-ca0f-451a-b85e-1015ca081046.png",alt:"Component variant panel in Figma"})),(0,r.kt)("p",null,"These references also help quickly setting up an interactive prototype."),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/248921/140958596-9c6db66c-299b-441f-9196-af916dbe9f37.png",alt:"Prototype settings in Figma reflect variant naming"})),(0,r.kt)("h2",{id:"synonyms"},"Synonyms"),(0,r.kt)("p",null,"Synonyms in the description field help searching for components in libraries."),(0,r.kt)("p",null,"In below example searching on either select, dropdown, or menu all return the library\u2019s select component."),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/248921/140958774-31867f4e-87c2-45ae-86bc-288f965b99c7.png",alt:"Synonyms for Select component"})),(0,r.kt)("p",null,"Descriptions can be set on individual component variants as well."),(0,r.kt)("h3",{id:"avoid-local-components-from-being-published-to-a-library"},"Avoid local components from being published to a library"),(0,r.kt)("p",null,"Prefixing a component with an underscore (",(0,r.kt)("inlineCode",{parentName:"p"},"_"),") prevents it from being published to a shared library. This is especially useful to avoid atomic elements, in use by components but with no use as a reusable standalone element, from being added to a shared library."),(0,r.kt)("p",null,"In below example searching on \u2018checkbox\u2019 returns all components with checkbox in their name. However searching on \u2018placeholder\u2019 returns no results."),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/248921/140958964-90e3ddf8-5bd2-4f0b-bcdc-3b32be0958fe.png",alt:"Components which will be published, and components with a prefix not being published"})),(0,r.kt)("h2",{id:"images"},"Images"),(0,r.kt)("p",null,"Design files are a perfect place to define the intention of images. If an image is decorative, and as such would get a blank ",(0,r.kt)("inlineCode",{parentName:"p"},'alt=""')," alternative text attribute this can be added to its description."),(0,r.kt)("p",null,"Likewise, if an image is informative to the user, an appropriate ",(0,r.kt)("inlineCode",{parentName:"p"},"alt")," text can already be added as image name. Using the layer to add this image description results in this text being available in Figma\u2019s Layer and Inspect panels."),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/248921/140959070-29703f9f-6b66-4fe8-947d-52905dc84458.png",alt:"Image with undescriptive name"})),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/248921/140959094-c7b3b87e-f49a-4f23-8893-7e93080f94a9.png",alt:"Image with descriptive name"})))}d.isMDXComponent=!0}}]);