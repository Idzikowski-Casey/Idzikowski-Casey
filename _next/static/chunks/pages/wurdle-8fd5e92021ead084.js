(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[92],{8668:function(e,r,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/wurdle",function(){return t(6530)}])},6530:function(e,r,t){"use strict";t.r(r),t.d(r,{default:function(){return q}});var n,o,u=t(174),c=t(1673),i=t.n(c),a=t(4051),l=t.n(a),s=t(7294),d=t(4068),f=t(7487),_=t.n(f),w=t(155);function p(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function y(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{},n=Object.keys(t);"function"===typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(t).filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})))),n.forEach((function(r){p(e,r,t[r])}))}return e}!function(e){e[e.ACTIVE=0]="ACTIVE",e[e.LOSE=1]="LOSE",e[e.WIN=2]="WIN"}(n||(n={})),function(e){e.WHITE="white",e.GRAY="gray",e.YELLOW="yellow",e.GREEN="green"}(o||(o={}));var v={letter:null,color:o.WHITE},h={grid:new Array(6).fill(new Array(5).fill(v)),current:[0,0],word:"apple",status:n.ACTIVE,used:{}},k=function(e,r){switch(r.type){case"set-word":return y({},e,{word:r.word});case"add-letter":var t=JSON.parse(JSON.stringify(e.grid));t[e.current[0]][e.current[1]]={letter:r.letter,color:o.WHITE},console.log("G",e);var u=e.current[1]+1;return 4==e.current[1]&&(u=4),y({},e,{grid:t,current:[e.current[0],u]});case"remove-letter":var c=JSON.parse(JSON.stringify(e.grid)),i=null!=c[e.current[0]][4].letter?e.current[1]:e.current[1]-1;return i<0&&(i=0),c[e.current[0]][i]={letter:null,color:o.WHITE},y({},e,{grid:c,current:[e.current[0],i]});case"update-status":return y({},e,{status:r.status});case"check-current":var a=JSON.parse(JSON.stringify(e.grid)),l=function(e,r){var t=e.split(""),u=0,c=r.map((function(e,r){return t.includes(e.letter)?t[r]==e.letter?(e.color=o.GREEN,u++):e.color=o.YELLOW:e.color=o.GRAY,e}));if(5==u)return{letters:c,status:n.WIN};return{letters:c,status:n.ACTIVE}}(e.word,a[e.current[0]]),s=l.letters,d=l.status,f=function(e,r){return e.forEach((function(e){r[e.letter]=e.color})),r}(s,e.used);return a[e.current[0]]=s,y({},e,{current:[e.current[0]+1,0],grid:a,status:d,used:f});default:console.error("I don't know what you want FROM ME!")}};var g=[["q","w","e","r","t","y","u","i","o","p"],["a","s","d","f","g","h","j","k","l"],["enter","z","x","c","v","b","n","m","delete"]],O=function(e,r,t){/^[A-Z]$/i.test(e)&&null==t.grid[t.current[0]][t.current[1]].letter&&t.status==n.ACTIVE?r({type:"add-letter",letter:e}):"backspace"===e.toLocaleLowerCase()?r({type:"remove-letter"}):"enter"===e&&null!=t.grid[t.current[0]][t.current[1]].letter&&(5==t.current[0]?(r({type:"check-current"}),r({type:"update-status",status:n.LOSE})):r({type:"check-current"}))},b=(0,u.e2)(_());function m(e){var r=e.label,t=e.onClick,n=e.used;return b("div.key .".concat(n[r]),{onClick:t,style:{animationDelay:"".concat(2.5,"s")}},[e.label])}function E(e){var r=e.state,t=e.dispatch;return b("div.keyboard",[g.map((function(e,n){return b("div.key-row",{key:n},[e.map((function(e,n){var o=e;"delete"==e&&(o=b(w.sCz));return b(m,{key:n,label:o,onClick:function(){var n=e;"delete"==e&&(n="backspace"),O(n,t,r)},used:r.used})}))])}))])}var C=t(1664),I=t(4941);function N(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}var L=(0,u.e2)(_()),T={hasBackdrop:!1,canOutsideClickClose:!0,canEscapeKeyClose:!0};function W(){return L(C.default,{href:"/wurdle",as:"/wurdle"},[L(I.zx,{onClick:function(){return window.location.reload()}},[L("h2",["Play again?"])])])}function x(e){var r=e.isOpen,t=(0,s.useState)(!1),n=t[0],o=t[1];return(0,s.useEffect)((function(){r&&setTimeout((function(){o(r)}),3e3)}),[r]),L(I.Vq,function(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{},n=Object.keys(t);"function"===typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(t).filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})))),n.forEach((function(r){N(e,r,t[r])}))}return e}({isOpen:n},T),[e.children])}function S(e){var r=e.isOpen;return L(x,{isOpen:r},[L("div.dialog-container",[L("h2",{style:{color:"#165A36"}},["You Won!!"]),L(W)])])}function A(e){var r=e.isOpen,t=e.word;return L(x,{isOpen:r},[L("div.dialog-container",[L("h2",{style:{color:"#AC2F33"}},["You Lost! Major Bummer"]),L("h3",["The word was ",L("span",{style:{color:"#215DB0"}},[t])]),L(W)])])}function H(e,r,t,n,o,u,c){try{var i=e[u](c),a=i.value}catch(l){return void t(l)}i.done?r(a):Promise.resolve(a).then(n,o)}var j=(0,u.e2)(_());var P=(0,u.e2)(_());function J(e){var r=e.letter,t=e.order,n=(e.status,r.letter?r.letter.toUpperCase():r.letter),u=r.letter?".has-letter":void 0,c=".".concat(r.color);return P("div.letter-box ".concat(u," ").concat(c),{style:{animationDelay:r.color!=o.WHITE?"".concat(.4*t,"s"):"0s"}},[n])}var R=function(){var e=(0,s.useReducer)(k,h),r=e[0],t=e[1],o=function(e){var n=e.key.toLocaleLowerCase();O(n,t,r)};return(0,s.useEffect)((function(){return window.addEventListener("keyup",o),function(){window.removeEventListener("keyup",o)}}),[r.current]),(0,s.useEffect)((function(){(function(){var e,r=(e=l().mark((function e(){var r,n;return l().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://random-word-api.herokuapp.com/word?length=5");case 2:return r=e.sent,e.next=5,r.json();case 5:n=e.sent,t({type:"set-word",word:n[0]});case 7:case"end":return e.stop()}}),e)})),function(){var r=this,t=arguments;return new Promise((function(n,o){var u=e.apply(r,t);function c(e){H(u,n,o,c,i,"next",e)}function i(e){H(u,n,o,c,i,"throw",e)}c(void 0)}))});return function(){return r.apply(this,arguments)}})()()}),[]),j("div.app-container",[j(d.h),j(S,{isOpen:r.status==n.WIN}),j(A,{isOpen:r.status==n.LOSE,word:r.word}),j("div.letters",{onKeyUp:o},[r.grid.map((function(e,t){return j("div.row",{key:t},[e.map((function(e,t){return j(J,{key:t,letter:e,order:t,status:r.status})}))])}))]),j(E,{state:r,dispatch:t})])},V=(0,u.e2)(i());function q(){return V(R)}},4068:function(e,r,t){"use strict";t.d(r,{h:function(){return w},u:function(){return _}});var n=t(174),o=t(3990),u=t(155),c=t(8193),i=t(7487),a=t.n(i),l=t(1664),s=(0,n.e2)(a());function d(e){return s("button.icon",{onClick:e.onClick},[e.icon])}function f(e){return s(l.default,{href:e.link},[s("button.icon",[e.icon])])}function _(){return s(f,{icon:s(c.V9Z),link:"/Idzikowski-Casey/"})}function w(){return s("div.header",[s(_),s("h1",["Wurdle(clone)"]),s("div",[s(d,{icon:s(u.WWT),onClick:function(){}}),s(d,{icon:s(o.cE9),onClick:function(){}})])])}},1673:function(e){e.exports={container:"Home_container__97eC3",main:"Home_main__OVLM4",footer:"Home_footer__zed0_",title:"Home_title__q0Qg4",description:"Home_description__JhekB",code:"Home_code__2i1pD",grid:"Home_grid__npx0i",card:"Home_card__K7aTN",logo:"Home_logo__FLQOc"}},7487:function(e){e.exports={"letter-box":"wurdle_letter-box__hXNNC",letters:"wurdle_letters__Z_3FT","has-letter":"wurdle_has-letter__hfIce","quick-scale":"wurdle_quick-scale__DGeT0","dialog-container":"wurdle_dialog-container__bihAR",row:"wurdle_row__f_cwd",gray:"wurdle_gray__eIs2U","reveal-gray":"wurdle_reveal-gray__7_Lqq",green:"wurdle_green__eFnlg","reveal-green":"wurdle_reveal-green__0IxCW",white:"wurdle_white__MsOoo",yellow:"wurdle_yellow__yxxIm","reveal-yellow":"wurdle_reveal-yellow__h7gZk","app-container":"wurdle_app-container__AkJ5J",header:"wurdle_header__Cw_Fy",key:"wurdle_key__Itdr2",keyboard:"wurdle_keyboard__LXd9K","key-row":"wurdle_key-row__6BOfQ",icon:"wurdle_icon__gk1ER"}}},function(e){e.O(0,[260,617,609,194,941,774,888,179],(function(){return r=8668,e(e.s=r);var r}));var r=e.O();_N_E=r}]);