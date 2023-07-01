"use strict";(self.webpackChunkclassic=self.webpackChunkclassic||[]).push([[6677],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>h});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),d=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},p=function(e){var t=d(e.components);return n.createElement(s.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=d(a),c=r,h=u["".concat(s,".").concat(c)]||u[c]||m[c]||o;return a?n.createElement(h,i(i({ref:t},p),{},{components:a})):n.createElement(h,i({ref:t},p))}));function h(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,i=new Array(o);i[0]=c;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[u]="string"==typeof e?e:r,i[1]=l;for(var d=2;d<o;d++)i[d]=a[d];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}c.displayName="MDXCreateElement"},9885:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>m,frontMatter:()=>o,metadata:()=>l,toc:()=>d});var n=a(7462),r=(a(7294),a(3905));const o={sidebar_label:"Creating Arenas",title:"Creating Arenas",sidebar_position:2.2},i=void 0,l={unversionedId:"BedWars1058/setup/creating-arenas",id:"BedWars1058/setup/creating-arenas",title:"Creating Arenas",description:"Video tutorial",source:"@site/docs/BedWars1058/setup/creating-arenas.md",sourceDirName:"BedWars1058/setup",slug:"/BedWars1058/setup/creating-arenas",permalink:"/docs/BedWars1058/setup/creating-arenas",draft:!1,editUrl:"https://github.com/andrei1058/docs/edit/main/docs/BedWars1058/setup/creating-arenas.md",tags:[],version:"current",lastUpdatedBy:"ajgeiss0702",lastUpdatedAt:1642279546,formattedLastUpdatedAt:"Jan 15, 2022",sidebarPosition:2.2,frontMatter:{sidebar_label:"Creating Arenas",title:"Creating Arenas",sidebar_position:2.2},sidebar:"bw1058",previous:{title:"Plugin Installation",permalink:"/docs/BedWars1058/setup/plugin-installation"},next:{title:"Joining arenas",permalink:"/docs/BedWars1058/setup/how-to-join-arenas"}},s={},d=[{value:"Video tutorial",id:"video-tutorial",level:2},{value:"Step by step tutorial",id:"step-by-step-tutorial",level:2},{value:"Important",id:"important",level:2}],p={toc:d},u="wrapper";function m(e){let{components:t,...a}=e;return(0,r.kt)(u,(0,n.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"video-tutorial"},"Video tutorial"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://www.youtube.com/watch?v=pPCa2Se-QSY&t=1s",title:"Tutorial"},(0,r.kt)("img",{parentName:"a",src:"https://img.youtube.com/vi/pPCa2Se-QSY/0.jpg",alt:"Video tutorial"}))),(0,r.kt)("h2",{id:"step-by-step-tutorial"},"Step by step tutorial"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Make sure you have the required permissions in order to use set-up commands. Type ",(0,r.kt)("inlineCode",{parentName:"li"},"op yourname")," in console for that."),(0,r.kt)("li",{parentName:"ol"},"Now you can set the main lobby using ",(0,r.kt)("inlineCode",{parentName:"li"},"bw setLobby"),". Now it will restart the server. Join again and continue this tutorial."),(0,r.kt)("li",{parentName:"ol"},"Now upload a map on your server, join it and let's set it. Start creating a map with ",(0,r.kt)("inlineCode",{parentName:"li"},"bw setupArena <worldName>"),". Type the folder name in order to create an arena. The plugin will show you a gui letting you choose the way you want to do the set-up: ",(0,r.kt)("strong",{parentName:"li"},"assisted")," or ",(0,r.kt)("strong",{parentName:"li"},"advanced"),". The assisted mode is more easier and faster, the advanced mode instead, provides more commands and takes longer to finish. ",(0,r.kt)("strong",{parentName:"li"},"Use assisted and continue reading"),". Multiverse plugin it's ",(0,r.kt)("em",{parentName:"li"},"not required"),"."),(0,r.kt)("li",{parentName:"ol"},"Now set the waiting lobby, the place where players will be teleported when they join the arena. Type: ",(0,r.kt)("inlineCode",{parentName:"li"},"bw setWaitingSpawn"),". It will now search for teams on current map based on colors. If you are satisfied of the found teams, just click on the chat message to auto-create them, else use ",(0,r.kt)("inlineCode",{parentName:"li"},"bw createTeam <name> <color>")," to create them manually. Example: ",(0,r.kt)("inlineCode",{parentName:"li"},"bw createTeam Tutorial Blue")," Your location doesn't matter when you type that command. Type ",(0,r.kt)("inlineCode",{parentName:"li"},"bw createTeam")," to see a list of available colors. Teams are unlimited."),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("em",{parentName:"li"},"(Optional)")," If you want your waiting lobby to be removed when the game stars select it like a WorldGuard region using the following commands: ",(0,r.kt)("inlineCode",{parentName:"li"},"bw waitingPos 1")," in the top right corner and ",(0,r.kt)("inlineCode",{parentName:"li"},"bw waitingPos 2")," in the bottom left corner."),(0,r.kt)("li",{parentName:"ol"},"Now go on each island and type ",(0,r.kt)("inlineCode",{parentName:"li"},"bw setSpawn")," without any team name provided because the plugin will auto-detect it."),(0,r.kt)("li",{parentName:"ol"},"Set the shop NPC for each island using ",(0,r.kt)("inlineCode",{parentName:"li"},"bw setShop")," without any team name provided because the plugin will auto-detect it."),(0,r.kt)("li",{parentName:"ol"},"Set the upgrades NPC for each island using ",(0,r.kt)("inlineCode",{parentName:"li"},"bw setUpgrade")," without any team name provided because the plugin will auto-detect it."),(0,r.kt)("li",{parentName:"ol"},"Now it's time to set iron and gold generators for each team. If you want to set the iron and gold generator at the same location go on each island and type ",(0,r.kt)("inlineCode",{parentName:"li"},"bw addGenerator")," without any others arguments. If you want to set them at different locations, just provide the generator name ",(0,r.kt)("inlineCode",{parentName:"li"},"bw setGenerator iron/ gold"),"."),(0,r.kt)("li",{parentName:"ol"},"Now it's time to set the diamond and emerald generators. Use ",(0,r.kt)("inlineCode",{parentName:"li"},"bw addGenerator diamond")," for creating a new diamond generator and ",(0,r.kt)("inlineCode",{parentName:"li"},"bw addGenerator emerald")," for adding a new emerald generator."),(0,r.kt)("li",{parentName:"ol"},"One more command and it's done! Use ",(0,r.kt)("inlineCode",{parentName:"li"},"bw save")," to save the world and exiti the setup mode."),(0,r.kt)("li",{parentName:"ol"},"If you want to play on your new map enable it using: ",(0,r.kt)("inlineCode",{parentName:"li"},"bw enableArena <mapName>"))),(0,r.kt)("h2",{id:"important"},"Important"),(0,r.kt)("p",null,"Now that you've finished the setup read about ",(0,r.kt)("a",{parentName:"p",href:"../configuration/main-configuration#servertype"},"serverType")," in order to understand the way you can use the plugin on your server."))}m.isMDXComponent=!0}}]);