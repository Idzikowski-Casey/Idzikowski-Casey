(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[92],{8668:function(e,r,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/wurdle",function(){return t(8243)}])},8243:function(e,r,t){"use strict";t.r(r),t.d(r,{default:function(){return x}});var n,o,u=t(174),c=t(1673),l=t.n(c),a=t(7294),i=t(3990),s=t(155),_=t(8193),d=t(7487),f=t.n(d),w=t(1664),y=(0,u.e2)(f());function p(e){return y("button.icon",{onClick:e.onClick},[e.icon])}function v(e){return y(w.default,{href:e.link},[y("button.icon",[e.icon])])}function g(){return y("div.header",[y(v,{icon:y(_.V9Z),link:"/"}),y("h1",["Nook's Wurds"]),y("div",[y(p,{icon:y(s.WWT),onClick:function(){}}),y(p,{icon:y(i.cE9),onClick:function(){}})])])}function k(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function E(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{},n=Object.keys(t);"function"===typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(t).filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})))),n.forEach((function(r){k(e,r,t[r])}))}return e}!function(e){e[e.ACTIVE=0]="ACTIVE",e[e.LOSE=1]="LOSE",e[e.WIN=2]="WIN"}(n||(n={})),function(e){e.WHITE="white",e.GRAY="gray",e.YELLOW="yellow",e.GREEN="green"}(o||(o={}));var h={letter:null,color:o.WHITE},b={grid:new Array(6).fill(new Array(5).fill(h)),current:[0,0],word:"apple",status:n.ACTIVE,used:{}},m=function(e,r){switch(r.type){case"add-letter":var t=JSON.parse(JSON.stringify(e.grid));t[e.current[0]][e.current[1]]={letter:r.letter,color:o.WHITE},console.log("G",e);var u=e.current[1]+1;return 4==e.current[1]&&(u=4),E({},e,{grid:t,current:[e.current[0],u]});case"remove-letter":var c=JSON.parse(JSON.stringify(e.grid)),l=null!=c[e.current[0]][4].letter?e.current[1]:e.current[1]-1;return l<0&&(l=0),c[e.current[0]][l]={letter:null,color:o.WHITE},E({},e,{grid:c,current:[e.current[0],l]});case"update-status":return E({},e,{status:r.status});case"check-current":var a=JSON.parse(JSON.stringify(e.grid)),i=function(e,r){var t=e.split(""),u=0,c=r.map((function(e,r){return t.includes(e.letter)?t[r]==e.letter?(e.color=o.GREEN,u++):e.color=o.YELLOW:e.color=o.GRAY,e}));if(5==u)return{letters:c,status:n.WIN};return{letters:c,status:n.ACTIVE}}(e.word,a[e.current[0]]),s=i.letters,_=i.status,d=function(e,r){return e.forEach((function(e){r[e.letter]=e.color})),r}(s,e.used);return a[e.current[0]]=s,E({},e,{current:[e.current[0]+1,0],grid:a,status:_,used:d});default:console.error("I don't know what you want FROM ME!")}};var O=[["q","w","e","r","t","y","u","i","o","p"],["a","s","d","f","g","h","j","k","l"],["enter","z","x","c","v","b","n","m","delete"]],C=function(e,r,t){/^[A-Z]$/i.test(e)&&null==t.grid[t.current[0]][t.current[1]].letter&&t.status==n.ACTIVE?r({type:"add-letter",letter:e}):"backspace"===e.toLocaleLowerCase()?(console.log("delete letter"),r({type:"remove-letter"})):"enter"===e&&null!=t.grid[t.current[0]][t.current[1]].letter&&(5==t.current[0]?(console.log("game over"),r({type:"update-status",status:n.LOSE})):(console.log("enter has been pressed"),r({type:"check-current"})))},N=(0,u.e2)(f());function I(e){var r=e.label,t=e.onClick,n=e.used;return N("div.key .".concat(n[r]),{onClick:t,style:{animationDelay:"".concat(2.5,"s")}},[e.label])}function L(e){var r=e.state,t=e.dispatch;return N("div.keyboard",[O.map((function(e,n){return N("div.key-row",{key:n},[e.map((function(e,n){var o=e;"delete"==e&&(o=N(s.sCz));return N(I,{key:n,label:o,onClick:function(){var n=e;"delete"==e&&(n="backspace"),C(n,t,r)},used:r.used})}))])}))])}var T=(0,u.e2)(f());var H=(0,u.e2)(f());function W(e){var r=e.letter,t=e.order,n=(e.status,r.letter?r.letter.toUpperCase():r.letter),u=r.letter?".has-letter":void 0,c=".".concat(r.color);return H("div.letter-box ".concat(u," ").concat(c),{style:{animationDelay:r.color!=o.WHITE?"".concat(.5*t,"s"):"0s"}},[n])}var A=function(){var e=(0,a.useReducer)(m,b),r=e[0],t=e[1],n=function(e){var n=e.key.toLocaleLowerCase();C(n,t,r)};return(0,a.useEffect)((function(){return window.addEventListener("keyup",n),function(){window.removeEventListener("keyup",n)}}),[r.current]),T("div.app-container",[T(g),T("div.letters",{onKeyUp:n},[r.grid.map((function(e,t){return T("div.row",[e.map((function(e,t){return T(W,{key:t,letter:e,order:t,status:r.status})}))])}))]),T(L,{state:r,dispatch:t})])},S=(0,u.e2)(l());function x(){return S(A)}},1673:function(e){e.exports={container:"Home_container__97eC3",main:"Home_main__OVLM4",footer:"Home_footer__zed0_",title:"Home_title__q0Qg4",description:"Home_description__JhekB",code:"Home_code__2i1pD",grid:"Home_grid__npx0i",card:"Home_card__K7aTN",logo:"Home_logo__FLQOc"}},7487:function(e){e.exports={"letter-box":"wurdle_letter-box__hXNNC",letters:"wurdle_letters__Z_3FT","has-letter":"wurdle_has-letter__hfIce","quick-scale":"wurdle_quick-scale__DGeT0",row:"wurdle_row__f_cwd",gray:"wurdle_gray__eIs2U","reveal-gray":"wurdle_reveal-gray__7_Lqq",green:"wurdle_green__eFnlg","reveal-green":"wurdle_reveal-green__0IxCW",white:"wurdle_white__MsOoo",yellow:"wurdle_yellow__yxxIm","reveal-yellow":"wurdle_reveal-yellow__h7gZk","app-container":"wurdle_app-container__AkJ5J",header:"wurdle_header__Cw_Fy",key:"wurdle_key__Itdr2",keyboard:"wurdle_keyboard__LXd9K","key-row":"wurdle_key-row__6BOfQ",icon:"wurdle_icon__gk1ER"}}},function(e){e.O(0,[260,609,617,814,774,888,179],(function(){return r=8668,e(e.s=r);var r}));var r=e.O();_N_E=r}]);