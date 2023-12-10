"use strict";(self.webpackChunkclassic=self.webpackChunkclassic||[]).push([[3513],{3905:(e,t,n)=>{n.d(t,{Zo:()=>m,kt:()=>h});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),p=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},m=function(e){var t=p(e.components);return a.createElement(l.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,m=s(e,["components","mdxType","originalType","parentName"]),d=p(n),c=r,h=d["".concat(l,".").concat(c)]||d[c]||u[c]||i;return n?a.createElement(h,o(o({ref:t},m),{},{components:n})):a.createElement(h,o({ref:t},m))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=c;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[d]="string"==typeof e?e:r,o[1]=s;for(var p=2;p<i;p++)o[p]=n[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},2467:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>u,frontMatter:()=>i,metadata:()=>s,toc:()=>p});var a=n(7462),r=(n(7294),n(3905));const i={sidebar_label:"Upgrades Config",title:"Upgrades Configuration",sidebar_position:3.9},o=void 0,s={unversionedId:"BedWars1058/configuration/upgrades",id:"BedWars1058/configuration/upgrades",title:"Upgrades Configuration",description:"The upgrades2.yml file contains the configuration for the Upgrades NPC.",source:"@site/docs/BedWars1058/configuration/upgrades.md",sourceDirName:"BedWars1058/configuration",slug:"/BedWars1058/configuration/upgrades",permalink:"/docs/BedWars1058/configuration/upgrades",draft:!1,editUrl:"https://github.com/andrei1058/docs/edit/main/docs/BedWars1058/configuration/upgrades.md",tags:[],version:"current",lastUpdatedBy:"Tom Keuper",lastUpdatedAt:1679759033,formattedLastUpdatedAt:"Mar 25, 2023",sidebarPosition:3.9,frontMatter:{sidebar_label:"Upgrades Config",title:"Upgrades Configuration",sidebar_position:3.9},sidebar:"bw1058",previous:{title:"Sounds Config",permalink:"/docs/BedWars1058/configuration/sounds-configuration"},next:{title:"Language Config",permalink:"/docs/BedWars1058/configuration/language-configuration"}},l={},p=[{value:"Upgrades Main Menu",id:"upgrades-main-menu",level:3},{value:"Creating a custom menu for your arena group:",id:"creating-a-custom-menu-for-your-arena-group",level:4},{value:"Upgrades Category",id:"upgrades-category",level:3},{value:"Upgrade Element",id:"upgrade-element",level:3},{value:"Base Trap",id:"base-trap",level:3},{value:"Trap Preview Slot",id:"trap-preview-slot",level:3},{value:"Separator Element",id:"separator-element",level:3}],m={toc:p},d="wrapper";function u(e){let{components:t,...n}=e;return(0,r.kt)(d,(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"upgrades2.yml")," file contains the configuration for the Upgrades NPC."),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"For a list of materials, sounds, and potions, check the ",(0,r.kt)("a",{parentName:"p",href:"../resources"},"resources page"))),(0,r.kt)("h3",{id:"upgrades-main-menu"},"Upgrades Main Menu"),(0,r.kt)("p",null,"The default path is ",(0,r.kt)("inlineCode",{parentName:"p"},"default-upgrades-settings"),".\nThis is a list of content to be displayed in the GUI.\n",(0,r.kt)("inlineCode",{parentName:"p"},"default")," stands for ",(0,r.kt)("a",{parentName:"p",href:"../setup/arena-groups"},"arena group"),", so if your ",(0,r.kt)("a",{parentName:"p",href:"../setup/arena-groups"},"arena group")," doesn't have a custom ",(0,r.kt)("inlineCode",{parentName:"p"},"<groupName>-upgrades-settings")," it will use the default one.\nYou can use a category or an element in multiple upgrade menus."),(0,r.kt)("p",null,"When creating custom menus you should create the ",(0,r.kt)("a",{parentName:"p",href:"../configuration/upgrades#upgrade-element"},"elements")," and then add them to the correct ",(0,r.kt)("inlineCode",{parentName:"p"},"menu-content")," for the arena group you wish to change."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"default-upgrades-settings:\n  menu-content:\n  - category-name1,1\n  - upgrade-name1,2 #The integer after comma is the slot where to place the content in the Upgrades GUI.\n  - separator-name1,5,6,7 #Multiple commas to put the element in multiple slots.\n  # The first trap the team buys will have this price. (If the target trap haven't got a fixed price).\n  trap-start-price: 2\n  # Once a team buys a trap the trap-start-price will be incremented with this price. 2+2=4 next 4+2 etc.\n  trap-increment-price: 2\n  # Currency types: emerald, diamond, iron, gold, vault (for money)\n  trap-currency: diamond\n  # trap queue limit\n  trap-queue-limit: 3\n")),(0,r.kt)("h4",{id:"creating-a-custom-menu-for-your-arena-group"},"Creating a custom menu for your arena group:"),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"The following steps are also applicable to ",(0,r.kt)("inlineCode",{parentName:"p"},"category-<name>")," (custom shop categories) and ",(0,r.kt)("inlineCode",{parentName:"p"},"upgrade-<name>")," (custom upgrades). Make sure to follow the correct naming method. When creating arena group specific upgrades make you add them under ",(0,r.kt)("inlineCode",{parentName:"p"},"menu-content")," within the newly created ",(0,r.kt)("inlineCode",{parentName:"p"},"<name>-upgrade-settings")," configuration.")),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"First of all make sure to read the example above. When creating a custom menu you can replace ",(0,r.kt)("inlineCode",{parentName:"li"},"default")," with the name of your ",(0,r.kt)("a",{parentName:"li",href:"../setup/arena-groups"},"arena group")," "),(0,r.kt)("li",{parentName:"ol"},"Create a new line in ",(0,r.kt)("inlineCode",{parentName:"li"},"upgrades.yml")," and write ",(0,r.kt)("inlineCode",{parentName:"li"},"<groupName>-upgrades-settings:")," where ",(0,r.kt)("inlineCode",{parentName:"li"},"<groupName>")," is your ",(0,r.kt)("a",{parentName:"li",href:"../setup/arena-groups"},"arena group")," (example: solo, doubles)."),(0,r.kt)("li",{parentName:"ol"},"Now add elements to your category like wrote above, under ",(0,r.kt)("inlineCode",{parentName:"li"},"menu-content"),". It is best to copy paste the default settings and make changes as needed."),(0,r.kt)("li",{parentName:"ol"},"Finally, you select a slot to put the upgrade button in. This number is behind the ",(0,r.kt)("inlineCode",{parentName:"li"},"menu-content")," item and seperated by ",(0,r.kt)("inlineCode",{parentName:"li"},",")," (comma).")),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"Result:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"solo-upgrades-settings:\n  menu-content:\n  - category-name1,10\n  - category-name2,11\n  - upgrade-name3,12\n  # The first trap the team buys will have this price. (If the target trap haven't got a fixed price).\n  trap-start-price: 2\n  # Once a team buys a trap the trap-start-price will be incremented with this price. 2+2=4 next 4+2 etc.\n  trap-increment-price: 2\n  # Currency types: emerald, diamond, iron, gold, vault (for money)\n  trap-currency: diamond\n  # trap queue limit\n  trap-queue-limit: 3\n")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"upgrades-category"},"Upgrades Category"),(0,r.kt)("p",null,"Category sections are identified with ",(0,r.kt)("inlineCode",{parentName:"p"},"category-<name>"),". Example: ",(0,r.kt)("inlineCode",{parentName:"p"},"category-enchant"),".\nIt requires the following attributes:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"category-example-1:\n  # This is the category item in the menu.\n  display-item:\n    # This is the material type.\n    # Check the links bellow for a list of materials.\n    material: IRON_SWORD\n    # Data is used for version 1.12 or older.\n    # It is a number that usually indicates the item color.\n    data: 0\n    # The amount of stacked items.\n    amount: 1\n    # Set to true/ false to give the enchantment effect.\n    enchanted: false\n  # These are the elements displayed when you open this category.\n  # You can only use upgrade and separator elements.\n  category-content:\n  - upgrade-name1,4 #Add a comma followed by a number to specify the slot where to put the element.\n  - separator-name5,1,2,3 #Add multiple numbers separated by comma to put the element in multiple slots.\n  \n")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"upgrade-element"},"Upgrade Element"),(0,r.kt)("p",null,"Upgrade elements are the most important as they define what an upgrade does.\nUpgrade sections are identified with ",(0,r.kt)("inlineCode",{parentName:"p"},"upgrade-<name>"),". Example: ",(0,r.kt)("inlineCode",{parentName:"p"},"upgrade-enchant-1"),".\nWithin 1 upgrade path you can add multiple tiers, theirs can be added by adding a new element with ",(0,r.kt)("inlineCode",{parentName:"p"},"tier-x")," and replacing ",(0,r.kt)("inlineCode",{parentName:"p"},"x")," with the correct number.\nIt requires the following attributes:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"upgrade-enchant-1:\n  # Even if your upgrade element does not have tiers, or better, it has a single tier\n  # your options go under `tier-1`. For the next tier add a new line called `tier-2`\n  # and so on.\n  tier-1:\n    # Display item is the item that represent this tier\n    # in a menu or in a category.\n    # Each tier has a display item.\n    display-item:\n      # This is the material type.\n      # Check the links bellow for a list of materials.\n      material: IRON_SWORD\n      # Data is used for version 1.12 or older.\n      # It is a number that usually indicates the item color.\n      data: 0\n      # The amount of stacked items.\n      amount: 1\n      # Set to true/ false to give the enchantment effect.\n      enchanted: false\n    # How much does this cost\n    cost: 10\n    # Currency types: emerald, diamond, iron, gold, vault (for money)\n    currency: vault\n    # Receive is the part where you define what this\n    # upgrade does. Paths under this category can't have custom names.\n    # The names used under this define what it does.\n    #You can add the same element name multiple times.\n    receive:\n\n    # Add enchant-item under receive if you want to enchant some items for the entire team.\n    ## Syntax: 'enchant-item:enchant type,amplifier,apply'\n    ## enchant type list: https://hub.spigotmc.org/javadocs/spigot/org/bukkit/enchantments/Enchantment.html\n    ## amplifier is like -> Sharpness 2 where 2 stands for amplifier\n    ## apply is where to apply the enchantment. Types: sword, armor, bow\n    - 'enchant-item: DAMAGE_ALL,1,sword'\n   \n    # Add player-effect in the list if you want to give players potion effects.\n    # Syntax: 'player-effect:effect type,amplifier,time_seconds,apply'\n    ## effect types list: https://hub.spigotmc.org/javadocs/spigot/org/bukkit/potion/PotionEffectType.html\n    ## amplifier is like Haste I -> where 1 stands for amplifier\n    ## time is seconds and tells how long to keep the effect. 0 for infinite, used for base effect.\n    ## apply types: \n    ## team - applied to your teamt\n    ## base - for teammates when they are on base\n    - 'player-effect: FAST_DIGGING,1,0,team'\n\n    # Add generator-edit in the list if you want to upgrade team generators.\n    # Syntax: 'generator-edit:generator type,spawn delay,amount,limit'\n    ## generator types are: iron, gold, emerald\n    ## spawn delay is the delay in seconds between spawning items\n    ## amount is the amount of items spawned at once\n    ## limit tells the generator when to pause spawning items if the are not collected\n    - 'generator-edit: gold,2,2,42'\n\n    ## Add a dragon in the list to define how many dragons will have the team on game end.\n    # Syntax: 'dragon:amount'\n    ## Where amount is the dragons count.\n    - 'dragon: 2'\n")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"base-trap"},"Base Trap"),(0,r.kt)("p",null,"Base traps are triggered when enemies enter your island.\nBase Trap sections are identified with ",(0,r.kt)("inlineCode",{parentName:"p"},"base-trap-")," + name. Example: ",(0,r.kt)("inlineCode",{parentName:"p"},"base-trap-1"),".\nRequired attributes:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"base-trap-1:\n  # Display item is the item that represent this tier\n  # in a menu or in a category.\n  # Each tier has a display item.\n  display-item:\n    # This is the material type.\n    # Check the links bellow for a list of materials.\n    material: IRON_SWORD\n    # Data is used for version 1.12 or older.\n    # It is a number that usually indicates the item color.\n    data: 0\n    # The amount of stacked items.\n    amount: 1\n    # Set to true/ false to give the enchantment effect.\n    enchanted: false\n\n  # Cost is OPTIONAL\n  # Traps without a cost will have the price based on \"trap-increment-price\"\n  cost: 10\n\n  # Currency types: emerald, diamond, iron, gold, vault (for money)\n  # Currency is OPTIONAL\n  currency: vault\n\n  # Use custom messages for this trap.\n  # Message paths will be generated after a server restart in each language file.\n  custom-announce: false\n\n  # Use a custom sound for this trap.\n  # Traps without a sound set will use ENTITY_ENDERMAN_TELEPORT.\n  sound: BLOCK_ANVIL_FALL\n\n  # Receive is the part where you define what this\n  # upgrade does. Paths under this category can't have custom names.\n  # The names used under this define what it does.\n  #You can add the same element name multiple times.\n  receive:\n\n  # Add disenchant-item under receive if you want to disenchant some items for the entering enemy.\n  ## Syntax: 'enchant-item:enchant type,apply'\n  ## enchant type list: https://hub.spigotmc.org/javadocs/spigot/org/bukkit/enchantments/Enchantment.html\n  ## apply is where to apply the enchantment. Types: sword, armor, bow\n  - 'disenchant-item: DAMAGE_ALL,sword'\n   \n  # Add player-effect in the list if you want to give potion effects.\n  # Syntax: 'player-effect:effect type,amplifier,time_seconds'\n  ## effect types list: https://hub.spigotmc.org/javadocs/spigot/org/bukkit/potion/PotionEffectType.html\n  ## amplifier is like Haste I -> where 1 stands for amplifier\n  ## time is seconds and tells how long to keep the effect. 0 for infinite, used for base effect.\n  ## apply types: \n  ## team - applied to your teamt\n  ## base - for teammates when they are on base\n  ## enemy - to enemies when they enter your island range\n  - 'player-effect: SPEED,1,0,team'\n  - 'player-effect: HASTE,1,0,enemy'\n\n  ## Add this to remove potion effects when a enemy enter your island range.\n  # Syntax: 'remove-effect: effect type'\n  ## Effect type is the effect to be removed.\n  - 'remove-effect: INVISIBILITY'\n\n  # Add command under receive if you want to execute a command when bought.\n  # Syntax: command: dispatchType, command string here\n  # Dispatch types: \n  # ONCE_AS_CONSOLE - will run the command a single time as console\n  # FOREACH_MEMBER_AS_CONSOLE - will execute the command foreach player as console\n  # FOREACH_MEMBER_AS_PLAYER - will execute the command foreach player as player\n  # Placeholders:\n          # {buyer} buyer name, {buyer_uuid} for buyer uuid\n          # {team} for team identifier, {team_display} for team display name\n          # {team_color} for team color, {arena} for arena identifier\n          # {arena_display} for arena display name, {arena_world} for worldName\n          # {arena_group} for arena group name.\n          # Placeholders when executing foreach player: \n          # {player} for current player name, {player_uuid} for current player UUID.\n  # DO NOT USE space after comma (,)\n  - 'command: FOREACH_MEMBER_AS_CONSOLE,give {player} diamond 20'\n")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"trap-preview-slot"},"Trap Preview Slot"),(0,r.kt)("p",null,"This is the item shown on trap slots.\nThis will be replaced with trap items when they are active.\nThey are identified by ",(0,r.kt)("inlineCode",{parentName:"p"},"trap-slot-")," + name.\nRequired attributes:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"trap-slot-glass:\n  # This is the material type.\n  # Check the links bellow for a list of materials.\n  material: IRON_SWORD\n  # Data is used for version 1.12 or older.\n  # It is a number that usually indicates the item color.\n  data: 0\n  # The amount of stacked items.\n  amount: 1\n  # Set to true/ false to give the enchantment effect.\n  enchanted: false\n")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"separator-element"},"Separator Element"),(0,r.kt)("p",null,"Separators are simple items added for design purpose.\nThey are identified by ",(0,r.kt)("inlineCode",{parentName:"p"},"separator-")," + name.\nRequired attributes:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"separator-example-1:\n  # on-click will execute a command as player when a player will click on it.\n  # bw upgrades menu can only be used when you are near the upgrades NPC.\n  # placeholders {player} - player name, {team} - team name\n  on-click:\n    player:\n    - 'bw upgradesmenu'\n    console:\n    - 'something'\n  display-item:\n    # This is the material type.\n    # Check the links bellow for a list of materials.\n    material: IRON_SWORD\n    # Data is used for version 1.12 or older.\n    # It is a number that usually indicates the item color.\n    data: 0\n    # The amount of stacked items.\n    amount: 1\n    # Set to true/ false to give the enchantment effect.\n    enchanted: false\n")),(0,r.kt)("hr",null))}u.isMDXComponent=!0}}]);