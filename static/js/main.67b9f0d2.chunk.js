(this["webpackJsonpanother-weather-app"]=this["webpackJsonpanother-weather-app"]||[]).push([[0],{21:function(e,t,c){},22:function(e,t,c){},43:function(e,t,c){"use strict";c.r(t);var n=c(1),a=c.n(n),r=c(14),s=c.n(r),i=c(3),o=(c(21),c(22),c(0));function l(e){var t=e.inputRef,c=e.setCityKeyword;return Object(o.jsx)("nav",{className:"nav__outter",children:Object(o.jsxs)("div",{className:"nav__inner",children:[Object(o.jsx)("div",{className:"nav__inner-logo",onClick:function(){return null===t||void 0===t?void 0:t.current.focus()},children:Object(o.jsx)("h3",{children:"Clich\xe9 Weather App"})}),Object(o.jsx)(d,{inputRef:t,setCityKeyword:c})]})})}function d(e){var t=e.inputRef,c=e.setCityKeyword;return Object(o.jsxs)("div",{className:"search__box",children:[Object(o.jsx)("input",{ref:t,className:"search__box__input",placeholder:"Search city...",onChange:c}),Object(o.jsx)("i",{className:"fas fa-search"})]})}var u=c(5),j=c.n(u),h=c(15),b=c(16),v=c.n(b);var O=function(){var e=Object(n.useRef)(),t=Object(n.useState)(!1),c=Object(i.a)(t,2),a=c[0],r=c[1],s=Object(n.useState)(""),d=Object(i.a)(s,2),u=d[0],j=d[1],h=function(e){var t=Object(n.useState)(e),c=Object(i.a)(t,2),a=c[0],r=c[1],s=Object(n.useState)(!1),o=Object(i.a)(s,2),l=o[0],d=o[1];return Object(n.useEffect)((function(){if(e||!l){d(!1);var t=setTimeout((function(){return r(e)}),500);return function(){return clearTimeout(t)}}}),[e,l]),a}(u);return Object(n.useEffect)((function(){var t;a&&(null===e||void 0===e||null===(t=e.current)||void 0===t||t.focus())}),[a]),Object(o.jsxs)(o.Fragment,{children:[Object(o.jsx)(l,{inputRef:e,setCityKeyword:function(e){j(e.target.value)}}),Object(o.jsx)(p,{toggleIsSearching:function(){r(!a)}}),Object(o.jsx)(_,{debouncedCity:h})]})};function p(e){var t=e.toggleIsSearching;return Object(o.jsx)("header",{className:"header",children:Object(o.jsxs)("div",{className:"header__content",children:[Object(o.jsxs)("div",{className:"header__content__text",children:[Object(o.jsx)("h2",{children:"The Clich\xe9 Weather App"}),Object(o.jsx)("h3",{children:"Just another useless weather app..."})]}),Object(o.jsx)("button",{className:"header__content__button",onClick:t,children:"Okay Weatherboy!"})]})})}function _(e){var t=e.debouncedCity,c=Object(n.useState)(!1),a=Object(i.a)(c,2),r=a[0],s=function(e,t){var c=Object(n.useState)({}),a=Object(i.a)(c,2),r=a[0],s=a[1],o=Object(n.useCallback)(Object(h.a)(j.a.mark((function c(){var n,a,r;return j.a.wrap((function(c){for(;;)switch(c.prev=c.next){case 0:if(e){c.next=2;break}return c.abrupt("return");case 2:return c.prev=2,t(!1),c.next=6,v.a.get("http://api.openweathermap.org/data/2.5/weather?q=".concat(null!==e&&void 0!==e?e:"tel-aviv","&units=metric&appid=").concat("4682638c4f9c1687e7af83e4d51af29c"));case 6:n=c.sent,a=n.data,s(a),c.next=14;break;case 11:c.prev=11,c.t0=c.catch(2),404===(null===c.t0||void 0===c.t0||null===(r=c.t0.response)||void 0===r?void 0:r.status)&&(t("City ".concat(e," was not found.")),s({}));case 14:case"end":return c.stop()}}),c,null,[[2,11]])}))),[e,t]);return Object(n.useEffect)((function(){o()}),[e,o]),r}(t,a[1]),l=0===Object.keys(s).length;return Object(o.jsx)("div",{className:"weather",children:Object(o.jsxs)("div",{className:"weather__content",children:[Object(o.jsxs)("h3",{className:"weather__header",children:["Showing weather in"," ",(null===s||void 0===s?void 0:s.name)?null===s||void 0===s?void 0:s.name:t||Object(o.jsxs)(o.Fragment,{children:["{city}",Object(o.jsx)("span",{className:"weather__small-text",children:"it's not a bug. it's a featue!"})]})]}),Object(o.jsx)("div",{className:"weather__content__cards",children:r?Object(o.jsx)("p",{className:"not-found",children:r}):!l&&Object(o.jsx)(x,{weatherData:s})})]})})}function x(e){var t,c,n,a,r,s=e.weatherData,i=s.name,l=s.main,d=null===s||void 0===s||null===(t=s.sys)||void 0===t?void 0:t.country;(null===s||void 0===s?void 0:s.weather)&&(c=null===s||void 0===s||null===(a=s.weather[0])||void 0===a?void 0:a.description,n=null===s||void 0===s||null===(r=s.weather[0])||void 0===r?void 0:r.icon);var u=(null===l||void 0===l?void 0:l.temp)>23;return Object(o.jsxs)("div",{className:"weather__card",children:[Object(o.jsxs)("div",{className:"weather__card__city",children:[Object(o.jsx)("h3",{children:i}),Object(o.jsx)("p",{className:u?"sunny-weather":"rainy-weather",children:d})]}),Object(o.jsx)("div",{className:"weather__card__icon",children:Object(o.jsx)("img",{src:"http://openweathermap.org/img/wn/".concat(n,"@2x.png"),alt:"".concat(c," icon")})}),Object(o.jsx)("div",{className:"weather__card__temp",children:Object(o.jsxs)("p",{children:[l&&l.temp.toFixed(0)," \xb0C"]})}),Object(o.jsx)("div",{className:"weather__card__desc",children:Object(o.jsx)("p",{children:c&&c.toUpperCase()})})]})}s.a.render(Object(o.jsx)(a.a.StrictMode,{children:Object(o.jsx)(O,{})}),document.getElementById("root"))}},[[43,1,2]]]);
//# sourceMappingURL=main.67b9f0d2.chunk.js.map