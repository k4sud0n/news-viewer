(this["webpackJsonpnews-viewer"]=this["webpackJsonpnews-viewer"]||[]).push([[0],{33:function(e,n,t){},41:function(e,n,t){},42:function(e,n,t){},43:function(e,n,t){e.exports=t(75)},74:function(e,n,t){},75:function(e,n,t){"use strict";t.r(n);var a=t(0),r=t.n(a),c=t(31),l=t.n(c),o=t(9),i=t(6),s=t(32),m=t(8),u=t.n(m),b=t(34),f=t(33),p=t.n(f);function d(){var e=Object(s.a)(["\n  font-size: 1.125rem;\n  cursor: pointer;\n  white-space: pre;\n  text-decoration: none;\n  color: inherit;\n  padding-bottom: 0.25rem;\n\n  &:hover {\n    color: #495057;\n  }\n\n  &.active {\n    font-weight: 600;\n    border-bottom: 2px solid #22b8cf;\n    color: #22b8cf;\n    &:hover {\n      color: #3bc9db;\n    }\n  }\n\n  & + & {\n    margin-left: 1rem;\n  }\n"]);return d=function(){return e},e}var v=u.a.bind(p.a),h=Object(b.a)(o.b)(d()),E=[{name:"all",text:"\uc804\uccb4\ubcf4\uae30"},{name:"business",text:"\ube44\uc988\ub2c8\uc2a4"},{name:"entertainment",text:"\uc5d4\ud130\ud14c\uc778\uba3c\ud2b8"},{name:"health",text:"\uac74\uac15"},{name:"science",text:"\uacfc\ud559"},{name:"sports",text:"\uc2a4\ud3ec\uce20"},{name:"technology",text:"\uae30\uc220"}],g=function(e){e.onSelect,e.category;return r.a.createElement("div",{className:v("categories-block")},E.map((function(e){return r.a.createElement(h,{key:e.name,activeClassName:"active",exact:"all"===e.name,to:"all"===e.name?"/":"/".concat(e.name)},e.text)})))},x=t(19),w=t.n(x),k=t(38),y=t(20),j=t(39),O=t.n(j),N=t(40),S=t.n(N),I=t(41),J=t.n(I),_=u.a.bind(J.a),z=function(e){var n=e.article,t=n.title,a=n.description,c=n.url,l=n.urlToImage;return r.a.createElement("div",{className:_("news-item-block")},l&&r.a.createElement("div",{className:_("thumbnail")},r.a.createElement("a",{href:c,target:"_blank",rel:"noopener noreferrer"},r.a.createElement("img",{src:l,alt:"thumbnail"}))),r.a.createElement("div",{className:_("contents")},r.a.createElement("h2",null,r.a.createElement("a",{href:c,target:"_blank",rel:"noopener noreferrer"},t)),r.a.createElement("p",null,a)))},B=t(42),C=t.n(B),F=u.a.bind(C.a),K=function(e){var n=e.category,t=Object(a.useState)(null),c=Object(y.a)(t,2),l=c[0],o=c[1],i=Object(a.useState)(!1),s=Object(y.a)(i,2),m=s[0],u=s[1];return console.log(n),Object(a.useEffect)((function(){(function(){var e=Object(k.a)(w.a.mark((function e(){var t,a;return w.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return u(!0),e.prev=1,t="all"===n?"":"&category=".concat(n),e.next=5,O.a.get("https://newsapi.org/v2/top-headlines?country=kr".concat(t,"&apiKey=cd17adb8cbaa410a8a79e4dee580e4e2"));case 5:a=e.sent,o(a.data.articles),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(1),console.log(e.t0);case 12:u(!1);case 13:case"end":return e.stop()}}),e,null,[[1,9]])})));return function(){return e.apply(this,arguments)}})()()}),[n]),m?r.a.createElement("div",{className:F("news-list-block")},r.a.createElement(S.a,null)):l?r.a.createElement("div",{className:F("news-list-block")},l.map((function(e){return r.a.createElement(z,{key:e.url,article:e})}))):null},T=function(e){var n=e.match.params.category||"all";return r.a.createElement(r.a.Fragment,null,r.a.createElement(g,null),r.a.createElement(K,{category:n}))},q=function(){return r.a.createElement(i.a,{path:"/:category?",component:T})};t(74);l.a.render(r.a.createElement(o.a,null,r.a.createElement(q,null)),document.getElementById("root"))}},[[43,1,2]]]);
//# sourceMappingURL=main.024ba546.chunk.js.map