(this.webpackJsonprickandmortyapi=this.webpackJsonprickandmortyapi||[]).push([[0],[,,,,,,,,,,,,,function(e,t,c){},,function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){"use strict";c.r(t);var a=c(1),n=c.n(a),r=c(7),s=c.n(r),i=c(2),o=n.a.createContext(null),j=(c(13),c(0));function u(){var e=Object(a.useContext)(o);return Object(j.jsx)("div",{className:" Header",children:Object(j.jsx)("h1",{className:"Header__title",style:{color:e},children:"The Rick & Morty API"})})}var l=c(8),d=c(6);var b=function(e){var t=Object(a.useState)([]),c=Object(i.a)(t,2),n=c[0],r=c[1];return Object(a.useEffect)((function(){fetch(e).then((function(e){return e.json()})).then((function(e){return r(e.results)}))}),[e]),n};c(15);function O(){Object(a.useContext)(o);var e=Object(a.useState)(!1),t=Object(i.a)(e,2),c=t[0],n=t[1],r=Object(a.useContext)(o),s=r.updateMode,u=r.setUpdateMode;return Object(j.jsx)("div",{className:"container__button",children:Object(j.jsx)("button",{className:s+" Header__button",type:"button",onClick:function(){n(!c),u("dark-mode"===s?"light-mode":"dark-mode")},children:c?"Boring Light Mode":"Dark Mode Baby"})})}c(16);function h(e){var t=e.handleSearch,c=e.searchInput,a=e.search;return Object(j.jsx)("div",{className:"container__search",children:Object(j.jsx)("input",{type:"text",onChange:t,ref:c,value:a})})}function m(){var e=Object(a.useState)(""),t=Object(i.a)(e,2),c=t[0],r=t[1],s=Object(a.useReducer)((function(e,t){switch(t.type){case"FAVORITE_CHARACTER":return Object(d.a)(Object(d.a)({},e),{},{allFavorites:[].concat(Object(l.a)(e.allFavorites),[t.payLoad])});default:return e}}),{allFavorites:[]}),o=Object(i.a)(s,2),u=o[0],m=o[1],f=Object(a.useRef)(null);var v=Object(a.useCallback)((function(){r(f.current.value)}),[]),x=b("https://rickandmortyapi.com/api/character/"),p=Object(a.useMemo)((function(){return x.filter((function(e){return e.name.toLowerCase().includes(c.toLowerCase())}))}),[x,c]);return Object(j.jsx)(n.a.Fragment,{children:Object(j.jsxs)("div",{className:"container",children:[Object(j.jsx)(O,{}),Object(j.jsx)(h,{handleSearch:v,searchInput:f,search:c}),Object(j.jsxs)("div",{className:"container__favorite",children:[0===u.allFavorites.length?Object(j.jsx)("i",{children:" Select your favorite character "}):Object(j.jsx)("i",{className:"heart"}),u.allFavorites.map((function(e){return Object(j.jsx)("img",{className:"container__favorite--characters",src:e.image},e.id)}))]}),Object(j.jsx)("div",{className:"container__cards",children:p.map((function(e){return Object(j.jsxs)("div",{onClick:function(){return t=e,void(!1===u.allFavorites.includes(t)&&m({type:"FAVORITE_CHARACTER",payLoad:t}));var t},className:"container__card",children:[Object(j.jsx)("h2",{className:"container__card--name",children:e.name}),Object(j.jsxs)("div",{className:"container__card--subInfo",children:[Object(j.jsxs)("div",{className:"subInfo__wall",children:[Object(j.jsxs)("li",{children:["Gender:",e.gender]}),Object(j.jsxs)("li",{children:["Status: ",e.status]}),Object(j.jsxs)("li",{children:["Specie: ",e.species]})]}),Object(j.jsx)("div",{className:"subInfo__img--container",children:Object(j.jsx)("img",{className:"subInfo__img",src:e.image})})]})]},e.id)}))})]})})}c(17);function f(){var e=Object(a.useState)("light-mode"),t=Object(i.a)(e,2),c=t[0],n=t[1];return Object(j.jsx)(o.Provider,{value:{updateMode:c,setUpdateMode:n},children:Object(j.jsxs)("div",{className:c+" page",children:[Object(j.jsx)(u,{}),Object(j.jsx)(m,{})]})})}var v=function(){return Object(j.jsx)(f,{})};s.a.render(Object(j.jsx)(v,{}),document.getElementById("root"))}],[[18,1,2]]]);
//# sourceMappingURL=main.2690616b.chunk.js.map