!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?t(exports):"function"==typeof define&&define.amd?define(["exports"],t):t((e.indicative=e.indicative||{},e.indicative.is={}))}(this,function(e){"use strict";var t=function(e,t){return Number(e)>Number(t)},r=/^[a-z]+$/i,n=/^[a-z0-9]+$/i;function u(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}function a(e,t){return e(t={exports:{}},t.exports),t.exports}var o=a(function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){if(!("string"==typeof e||e instanceof String))throw new TypeError("This library (validator.js) validates strings only")},e.exports=t.default});u(o);var i=a(function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments[1];for(var r in t)void 0===e[r]&&(e[r]=t[r]);return e},e.exports=t.default});u(i);var f=a(function(e,t){Object.defineProperty(t,"__esModule",{value:!0});var r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e};t.default=function(e,t){(0,u.default)(e);var n=void 0,a=void 0;"object"===(void 0===t?"undefined":r(t))?(n=t.min||0,a=t.max):(n=arguments[1],a=arguments[2]);var o=encodeURI(e).split(/%..|./).length-1;return o>=n&&(void 0===a||o<=a)};var n,u=(n=o)&&n.__esModule?n:{default:n};e.exports=t.default});u(f);var s=a(function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t){(0,r.default)(e),(t=(0,n.default)(t,a)).allow_trailing_dot&&"."===e[e.length-1]&&(e=e.substring(0,e.length-1));for(var u=e.split("."),o=0;o<u.length;o++)if(u[o].length>63)return!1;if(t.require_tld){var i=u.pop();if(!u.length||!/^([a-z\u00a1-\uffff]{2,}|xn[a-z0-9-]{2,})$/i.test(i))return!1;if(/[\s\u2002-\u200B\u202F\u205F\u3000\uFEFF\uDB40\uDC20]/.test(i))return!1}for(var f,s=0;s<u.length;s++){if(f=u[s],t.allow_underscores&&(f=f.replace(/_/g,"")),!/^[a-z\u00a1-\uffff0-9-]+$/i.test(f))return!1;if(/[\uff01-\uff5e]/.test(f))return!1;if("-"===f[0]||"-"===f[f.length-1])return!1}return!0};var r=u(o),n=u(i);function u(e){return e&&e.__esModule?e:{default:e}}var a={require_tld:!0,allow_underscores:!1,allow_trailing_dot:!1};e.exports=t.default});u(s);var c=u(a(function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t){if((0,r.default)(e),(t=(0,n.default)(t,l)).require_display_name||t.allow_display_name){var o=e.match(d);if(o)e=o[1];else if(t.require_display_name)return!1}var i=e.split("@"),f=i.pop(),s=i.join("@"),c=f.toLowerCase();if("gmail.com"===c||"googlemail.com"===c){var h=(s=s.toLowerCase()).split("+")[0];if(!(0,u.default)(h.replace(".",""),{min:6,max:30}))return!1;for(var D=h.split("."),x=0;x<D.length;x++)if(!v.test(D[x]))return!1}if(!(0,u.default)(s,{max:64})||!(0,u.default)(f,{max:254}))return!1;if(!(0,a.default)(f,{require_tld:t.require_tld}))return!1;if('"'===s[0])return s=s.slice(1,s.length-1),t.allow_utf8_local_part?y.test(s):m.test(s);for(var F=t.allow_utf8_local_part?p:g,b=s.split("."),M=0;M<b.length;M++)if(!F.test(b[M]))return!1;return!0};var r=c(o),n=c(i),u=c(f),a=c(s);function c(e){return e&&e.__esModule?e:{default:e}}var l={allow_display_name:!1,require_display_name:!1,allow_utf8_local_part:!0,require_tld:!0},d=/^[a-z\d!#\$%&'\*\+\-\/=\?\^_`{\|}~\.\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+[a-z\d!#\$%&'\*\+\-\/=\?\^_`{\|}~\,\.\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF\s]*<(.+)>$/i,g=/^[a-z\d!#\$%&'\*\+\-\/=\?\^_`{\|}~]+$/i,v=/^[a-z\d]+$/,m=/^([\s\x01-\x08\x0b\x0c\x0e-\x1f\x7f\x21\x23-\x5b\x5d-\x7e]|(\\[\x01-\x09\x0b\x0c\x0d-\x7f]))*$/i,p=/^[a-z\d!#\$%&'\*\+\-\/=\?\^_`{\|}~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+$/i,y=/^([\s\x01-\x08\x0b\x0c\x0e-\x1f\x7f\x21\x23-\x5b\x5d-\x7e\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|(\\[\x01-\x09\x0b\x0c\x0d-\x7f\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))*$/i;e.exports=t.default})),l=function(e){return"string"==typeof e?e.trim().length>0:null!==e&&void 0!==e},d="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},g=function(e){return Number(e)%2==0},v=function(e){return l(e)&&!1!==e&&0!==e},m=/^(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])(?:\.(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])){3}$/,p=function(e){return m.test(e)},y=/^(?:(?:[0-9a-fA-F:]){1,4}(?:(?::(?:[0-9a-fA-F]){1,4}|:)){2,7})+$/,h=function(e){return y.test(e)},D=function(e){return Number(e)>=0},x=/\b\d{3}[-.]?\d{3}[-.]?\d{4}\b/,F=/https?:\/\/(www\.)?([-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-z]{2,63}|localhost)\b([-a-zA-Z0-9@:%_+.~#?&//=]*)/i;var b=function(e){return e instanceof Date},M=36e5,T=6e4,w=2,S=/[T ]/,_=/:/,Y=/^(\d{2})$/,$=[/^([+-]\d{2})$/,/^([+-]\d{3})$/,/^([+-]\d{4})$/],A=/^(\d{4})/,O=[/^([+-]\d{4})/,/^([+-]\d{5})/,/^([+-]\d{6})/],N=/^-(\d{2})$/,H=/^-?(\d{3})$/,z=/^-?(\d{2})-?(\d{2})$/,I=/^-?W(\d{2})$/,E=/^-?W(\d{2})-?(\d{1})$/,C=/^(\d{2}([.,]\d*)?)$/,Z=/^(\d{2}):?(\d{2}([.,]\d*)?)$/,j=/^(\d{2}):?(\d{2}):?(\d{2}([.,]\d*)?)$/,W=/([Z+-].*)$/,G=/^(Z)$/,k=/^([+-])(\d{2})$/,q=/^([+-])(\d{2}):?(\d{2})$/;function P(e,t,r){t=t||0,r=r||0;var n=new Date(0);n.setUTCFullYear(e,0,4);var u=7*t+r+1-(n.getUTCDay()||7);return n.setUTCDate(n.getUTCDate()+u),n}var U=function(e,t){if(b(e))return new Date(e.getTime());if("string"!=typeof e)return new Date(e);var r=(t||{}).additionalDigits;r=null==r?w:Number(r);var n=function(e){var t,r={},n=e.split(S);if(_.test(n[0])?(r.date=null,t=n[0]):(r.date=n[0],t=n[1]),t){var u=W.exec(t);u?(r.time=t.replace(u[1],""),r.timezone=u[1]):r.time=t}return r}(e),u=function(e,t){var r,n=$[t],u=O[t];if(r=A.exec(e)||u.exec(e)){var a=r[1];return{year:parseInt(a,10),restDateString:e.slice(a.length)}}if(r=Y.exec(e)||n.exec(e)){var o=r[1];return{year:100*parseInt(o,10),restDateString:e.slice(o.length)}}return{year:null}}(n.date,r),a=u.year,o=function(e,t){if(null===t)return null;var r,n,u,a;if(0===e.length)return(n=new Date(0)).setUTCFullYear(t),n;if(r=N.exec(e))return n=new Date(0),u=parseInt(r[1],10)-1,n.setUTCFullYear(t,u),n;if(r=H.exec(e)){n=new Date(0);var o=parseInt(r[1],10);return n.setUTCFullYear(t,0,o),n}if(r=z.exec(e)){n=new Date(0),u=parseInt(r[1],10)-1;var i=parseInt(r[2],10);return n.setUTCFullYear(t,u,i),n}if(r=I.exec(e))return a=parseInt(r[1],10)-1,P(t,a);if(r=E.exec(e)){a=parseInt(r[1],10)-1;var f=parseInt(r[2],10)-1;return P(t,a,f)}return null}(u.restDateString,a);if(o){var i,f=o.getTime(),s=0;return n.time&&(s=function(e){var t,r,n;if(t=C.exec(e))return(r=parseFloat(t[1].replace(",",".")))%24*M;if(t=Z.exec(e))return r=parseInt(t[1],10),n=parseFloat(t[2].replace(",",".")),r%24*M+n*T;if(t=j.exec(e)){r=parseInt(t[1],10),n=parseInt(t[2],10);var u=parseFloat(t[3].replace(",","."));return r%24*M+n*T+1e3*u}return null}(n.time)),n.timezone?(c=n.timezone,i=(l=G.exec(c))?0:(l=k.exec(c))?(d=60*parseInt(l[2],10),"+"===l[1]?-d:d):(l=q.exec(c))?(d=60*parseInt(l[2],10)+parseInt(l[3],10),"+"===l[1]?-d:d):0):(i=new Date(f+s).getTimezoneOffset(),i=new Date(f+s+i*T).getTimezoneOffset()),new Date(f+s+i*T)}var c,l,d;return new Date(e)};var X=function(e){var t=U(e);return t.setHours(0,0,0,0),t};var R=function(e){return X(e).getTime()===X(new Date).getTime()};var J=function(e){var t=new Date;return t.setDate(t.getDate()-1),X(e).getTime()===X(t).getTime()};var L=function(e){var t=new Date;return t.setDate(t.getDate()+1),X(e).getTime()===X(t).getTime()};var Q=function(e){return U(e).getTime()<(new Date).getTime()};var B=function(e){return U(e).getTime()>(new Date).getTime()};var K=function(e,t,r){var n=U(e).getTime(),u=U(t).getTime(),a=U(r).getTime();if(u>a)throw new Error("The start of the range cannot be after the end of the range");return n>=u&&n<=a};var V=function(e){var t=U(e),r=t.getFullYear(),n=t.getMonth(),u=new Date(0);return u.setFullYear(r,n+1,0),u.setHours(0,0,0,0),u.getDate()};var ee=function(e,t){var r=U(e),n=Number(t),u=r.getMonth()+n,a=new Date(0);a.setFullYear(r.getFullYear(),u,1),a.setHours(0,0,0,0);var o=V(a);return r.setMonth(u,Math.min(o,r.getDate())),r};var te=function(e,t){var r=U(e),n=Number(t);return r.setDate(r.getDate()+n),r};var re=function(e,t){var r=U(e).getTime(),n=Number(t);return new Date(r+n)},ne=function(e,t,r){var n={years:function(e){return 12*e},quarters:function(e){return 3*e},months:function(e){return e}},u={weeks:function(e){return 7*e},days:function(e){return e}},a={hours:function(e){return 36e5*e},minutes:function(e){return 6e4*e},seconds:function(e){return 1e3*e},milliseconds:function(e){return e}};return e=Number(e),n[t]?ee(new Date,"-"===r?-n[t](e):n[t](e)):u[t]?te(new Date,"-"===r?-u[t](e):u[t](e)):a[t]?re(new Date,"-"===r?-a[t](e):a[t](e)):void 0};var ue=function(e,t){var r=U(e),n=U(t);return r.getTime()>n.getTime()};var ae=function(e,t){var r=U(e),n=U(t);return r.getTime()<n.getTime()};var oe=function(e){var t=U(e),r=new Date(0);return r.setFullYear(t.getFullYear(),0,1),r.setHours(0,0,0,0),r},ie=6e4,fe=864e5;var se=function(e,t){var r=X(e),n=X(t),u=r.getTime()-r.getTimezoneOffset()*ie,a=n.getTime()-n.getTimezoneOffset()*ie;return Math.round((u-a)/fe)};var ce=function(e){var t=U(e);return se(t,oe(t))+1};var le=function(e,t){var r=t&&Number(t.weekStartsOn)||0,n=U(e),u=n.getDay(),a=(u<r?7:0)+u-r;return n.setDate(n.getDate()-a),n.setHours(0,0,0,0),n};var de=function(e){return le(e,{weekStartsOn:1})};var ge=function(e){var t=U(e),r=t.getFullYear(),n=new Date(0);n.setFullYear(r+1,0,4),n.setHours(0,0,0,0);var u=de(n),a=new Date(0);a.setFullYear(r,0,4),a.setHours(0,0,0,0);var o=de(a);return t.getTime()>=u.getTime()?r+1:t.getTime()>=o.getTime()?r:r-1};var ve=function(e){var t=ge(e),r=new Date(0);return r.setFullYear(t,0,4),r.setHours(0,0,0,0),de(r)},me=6048e5;var pe=function(e){var t=U(e),r=de(t).getTime()-ve(t).getTime();return Math.round(r/me)+1};var ye=function(e){if(b(e))return!isNaN(e);throw new TypeError(toString.call(e)+" is not an instance of Date")};var he=["M","MM","Q","D","DD","DDD","DDDD","d","E","W","WW","YY","YYYY","GG","GGGG","H","HH","h","hh","m","mm","s","ss","S","SS","SSS","Z","ZZ","X","x"];var De=function(e){var t=[];for(var r in e)e.hasOwnProperty(r)&&t.push(r);var n=he.concat(t).sort().reverse();return new RegExp("(\\[[^\\[]*\\])|(\\\\)?("+n.join("|")+"|.)","g")};var xe=function(){var e=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],t=["January","February","March","April","May","June","July","August","September","October","November","December"],r=["Su","Mo","Tu","We","Th","Fr","Sa"],n=["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],u=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],a=["AM","PM"],o=["am","pm"],i=["a.m.","p.m."],f={MMM:function(t){return e[t.getMonth()]},MMMM:function(e){return t[e.getMonth()]},dd:function(e){return r[e.getDay()]},ddd:function(e){return n[e.getDay()]},dddd:function(e){return u[e.getDay()]},A:function(e){return e.getHours()/12>=1?a[1]:a[0]},a:function(e){return e.getHours()/12>=1?o[1]:o[0]},aa:function(e){return e.getHours()/12>=1?i[1]:i[0]}};return["M","D","DDD","d","Q","W"].forEach(function(e){f[e+"o"]=function(t,r){return function(e){var t=e%100;if(t>20||t<10)switch(t%10){case 1:return e+"st";case 2:return e+"nd";case 3:return e+"rd"}return e+"th"}(r[e](t))}}),{formatters:f,formattingTokensRegExp:De(f)}},Fe={distanceInWords:function(){var e={lessThanXSeconds:{one:"less than a second",other:"less than {{count}} seconds"},xSeconds:{one:"1 second",other:"{{count}} seconds"},halfAMinute:"half a minute",lessThanXMinutes:{one:"less than a minute",other:"less than {{count}} minutes"},xMinutes:{one:"1 minute",other:"{{count}} minutes"},aboutXHours:{one:"about 1 hour",other:"about {{count}} hours"},xHours:{one:"1 hour",other:"{{count}} hours"},xDays:{one:"1 day",other:"{{count}} days"},aboutXMonths:{one:"about 1 month",other:"about {{count}} months"},xMonths:{one:"1 month",other:"{{count}} months"},aboutXYears:{one:"about 1 year",other:"about {{count}} years"},xYears:{one:"1 year",other:"{{count}} years"},overXYears:{one:"over 1 year",other:"over {{count}} years"},almostXYears:{one:"almost 1 year",other:"almost {{count}} years"}};return{localize:function(t,r,n){var u;return n=n||{},u="string"==typeof e[t]?e[t]:1===r?e[t].one:e[t].other.replace("{{count}}",r),n.addSuffix?n.comparison>0?"in "+u:u+" ago":u}}}(),format:xe()};var be={M:function(e){return e.getMonth()+1},MM:function(e){return Te(e.getMonth()+1,2)},Q:function(e){return Math.ceil((e.getMonth()+1)/3)},D:function(e){return e.getDate()},DD:function(e){return Te(e.getDate(),2)},DDD:function(e){return ce(e)},DDDD:function(e){return Te(ce(e),3)},d:function(e){return e.getDay()},E:function(e){return e.getDay()||7},W:function(e){return pe(e)},WW:function(e){return Te(pe(e),2)},YY:function(e){return Te(e.getFullYear(),4).substr(2)},YYYY:function(e){return Te(e.getFullYear(),4)},GG:function(e){return String(ge(e)).substr(2)},GGGG:function(e){return ge(e)},H:function(e){return e.getHours()},HH:function(e){return Te(e.getHours(),2)},h:function(e){var t=e.getHours();return 0===t?12:t>12?t%12:t},hh:function(e){return Te(be.h(e),2)},m:function(e){return e.getMinutes()},mm:function(e){return Te(e.getMinutes(),2)},s:function(e){return e.getSeconds()},ss:function(e){return Te(e.getSeconds(),2)},S:function(e){return Math.floor(e.getMilliseconds()/100)},SS:function(e){return Te(Math.floor(e.getMilliseconds()/10),2)},SSS:function(e){return Te(e.getMilliseconds(),3)},Z:function(e){return Me(e.getTimezoneOffset(),":")},ZZ:function(e){return Me(e.getTimezoneOffset())},X:function(e){return Math.floor(e.getTime()/1e3)},x:function(e){return e.getTime()}};function Me(e,t){t=t||"";var r=e>0?"-":"+",n=Math.abs(e),u=n%60;return r+Te(Math.floor(n/60),2)+t+Te(u,2)}function Te(e,t){for(var r=Math.abs(e).toString();r.length<t;)r="0"+r;return r}var we=function(e,t,r){var n=t?String(t):"YYYY-MM-DDTHH:mm:ss.SSSZ",u=(r||{}).locale,a=Fe.format.formatters,o=Fe.format.formattingTokensRegExp;u&&u.format&&u.format.formatters&&(a=u.format.formatters,u.format.formattingTokensRegExp&&(o=u.format.formattingTokensRegExp));var i=U(e);return ye(i)?function(e,t,r){var n,u,a,o=e.match(r),i=o.length;for(n=0;n<i;n++)u=t[o[n]]||be[o[n]],o[n]=u||((a=o[n]).match(/\[[\s\S]/)?a.replace(/^\[|]$/g,""):a.replace(/\\/g,""));return function(e){for(var t="",r=0;r<i;r++)o[r]instanceof Function?t+=o[r](e,be):t+=o[r];return t}}(n,a,o)(i):"Invalid Date"};e.above=t,e.affirmative=function(e){return"A"===e||["yes","true","y","ok","okay"].indexOf(e.toLowerCase())>-1},e.alpha=function(e){return r.test(e)},e.alphaNumeric=function(e){return n.test(e)},e.array=function(e){return Array.isArray(e)},e.between=function(e,t,r){return(e=Number(e))>Number(t)&&e<Number(r)},e.boolean=function(e){var t=[!0,!1,0,1];return arguments.length>1&&void 0!==arguments[1]&&!arguments[1]?t.map(function(e){return String(e)}).indexOf(String(e))>-1:t.indexOf(e)>-1},e.creditCard=function(e,t){return c(String(e),t)},e.date=function(e){var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];return e instanceof Date==1||!t&&"Invalid Date"!==new Date(e).toString()},e.email=function(e,t){return c(String(e),t)},e.empty=function(e){return!l(e)||!(e instanceof Date)&&"object"===(void 0===e?"undefined":d(e))&&0===Object.keys(e).length},e.even=g,e.existy=l,e.falsy=function(e){return!v(e)},e.inArray=function(e,t){return"function"==typeof t.indexOf&&t.indexOf(e)>-1},e.intersectAll=function(e,t){return!(!Array.isArray(e)||!Array.isArray(t))&&e.filter(function(e){return t.indexOf(e)>-1}).length===e.length},e.intersectAny=function(e,t){return!(!Array.isArray(e)||!Array.isArray(t))&&e.filter(function(e){return t.indexOf(e)>-1}).length>0},e.ip=function(e){return p(e)||h(e)},e.ipv4=p,e.ipv6=h,e.isFunction=function(e){return"function"==typeof e},e.json=function(e){try{return JSON.parse(e),!0}catch(e){return!1}},e.negative=function(e){return!D(e)},e.isNull=function(e){return null===e},e.isNumber=function(e,t){var r="number"==typeof e&&!isNaN(e);return!0!==e&&!1!==e&&(r||t?r:!isNaN(e))},e.isObject=function(e){return e instanceof Object&&!Array.isArray(e)},e.odd=function(e){return!g(e)},e.phone=function(e){return x.test(e)},e.positive=D,e.regex=function(e,t){if(t instanceof RegExp==0)throw new Error("You must pass regex as the 2nd argument");return t.test(e)},e.same=function(e,t){return e===t},e.sameType=function(e,t){return e===t},e.sorted=function(e){if(!Array.isArray(e))return!1;for(var t=!1,r=0;r<e.length;){var n=e[r++],u=e[r-2];if(u&&u>n){t=!0;break}}return!t},e.isString=function(e){return"string"==typeof e},e.truthy=v,e.under=function(e,r){return!t(e,r)},e.url=function(e){return F.test(e)},e.isDate=function(e,t){var r=e instanceof Date;return r||t?r:"Invalid Date"!==new Date(e).toString()},e.today=R,e.yesterday=J,e.tomorrow=L,e.past=Q,e.future=B,e.inDateRange=K,e.afterOffsetOf=function(e,t,r){var n=ne(t,r,"+");return!!n&&ue(e,n)},e.beforeOffsetOf=function(e,t,r){var n=ne(t,r,"-");return!!n&&ae(e,n)},e.dateFormat=function(e,t){return(Array.isArray(t)?t:[t]).some(function(t){var r=e,n=!1;t.endsWith("ZZ")?(r=e.replace(/(\+|-)\d{4}$/,""),t=t.replace(/ZZ$/,""),n=!0):t.endsWith("Z")&&(r=e.replace(/Z$/,"").replace(/(\+|-)\d{2}:\d{2}$/,""),t=t.replace(/Z$/,""),n=!0);var u=we(r,t);return"Invalid Date"!==u&&u===r&&(!n||r!==e)})},Object.defineProperty(e,"__esModule",{value:!0})});