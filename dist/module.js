define(["react","@grafana/ui","d3","jquery","@grafana/data"],(function(e,t,n,r,a){return function(e){var t={};function n(r){if(t[r])return t[r].exports;var a=t[r]={i:r,l:!1,exports:{}};return e[r].call(a.exports,a,a.exports,n),a.l=!0,a.exports}return n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)n.d(r,a,function(t){return e[t]}.bind(null,a));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="/",n(n.s=12)}([function(t,n){t.exports=e},function(e,n){e.exports=t},function(e,t){e.exports=n},function(e,t){e.exports=r},function(e,t,n){var r,a,i;a=[e],void 0===(i="function"==typeof(r=function(e){"use strict";var t=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e};function n(e){if(Array.isArray(e)){for(var t=0,n=Array(e.length);t<e.length;t++)n[t]=e[t];return n}return Array.from(e)}var r={order:2,precision:2,period:null};function a(e,t){var n=[],r=[];e.forEach((function(e,a){null!==e[1]&&(r.push(e),n.push(t[a]))}));var a=r.reduce((function(e,t){return e+t[1]}),0)/r.length,i=r.reduce((function(e,t){var n=t[1]-a;return e+n*n}),0);return 1-r.reduce((function(e,t,r){var a=n[r],i=t[1]-a[1];return e+i*i}),0)/i}function i(e,t){var n=Math.pow(10,t);return Math.round(e*n)/n}var o={linear:function(e,t){for(var n=[0,0,0,0,0],r=0,o=0;o<e.length;o++)null!==e[o][1]&&(r++,n[0]+=e[o][0],n[1]+=e[o][1],n[2]+=e[o][0]*e[o][0],n[3]+=e[o][0]*e[o][1],n[4]+=e[o][1]*e[o][1]);var l=r*n[2]-n[0]*n[0],c=r*n[3]-n[0]*n[1],s=0===l?0:i(c/l,t.precision),u=i(n[1]/r-s*n[0]/r,t.precision),d=function(e){return[i(e,t.precision),i(s*e+u,t.precision)]},f=e.map((function(e){return d(e[0])}));return{points:f,predict:d,equation:[s,u],r2:i(a(e,f),t.precision),string:0===u?"y = "+s+"x":"y = "+s+"x + "+u}},exponential:function(e,t){for(var n=[0,0,0,0,0,0],r=0;r<e.length;r++)null!==e[r][1]&&(n[0]+=e[r][0],n[1]+=e[r][1],n[2]+=e[r][0]*e[r][0]*e[r][1],n[3]+=e[r][1]*Math.log(e[r][1]),n[4]+=e[r][0]*e[r][1]*Math.log(e[r][1]),n[5]+=e[r][0]*e[r][1]);var o=n[1]*n[2]-n[5]*n[5],l=Math.exp((n[2]*n[3]-n[5]*n[4])/o),c=(n[1]*n[4]-n[5]*n[3])/o,s=i(l,t.precision),u=i(c,t.precision),d=function(e){return[i(e,t.precision),i(s*Math.exp(u*e),t.precision)]},f=e.map((function(e){return d(e[0])}));return{points:f,predict:d,equation:[s,u],string:"y = "+s+"e^("+u+"x)",r2:i(a(e,f),t.precision)}},logarithmic:function(e,t){for(var n=[0,0,0,0],r=e.length,o=0;o<r;o++)null!==e[o][1]&&(n[0]+=Math.log(e[o][0]),n[1]+=e[o][1]*Math.log(e[o][0]),n[2]+=e[o][1],n[3]+=Math.pow(Math.log(e[o][0]),2));var l=i((r*n[1]-n[2]*n[0])/(r*n[3]-n[0]*n[0]),t.precision),c=i((n[2]-l*n[0])/r,t.precision),s=function(e){return[i(e,t.precision),i(i(c+l*Math.log(e),t.precision),t.precision)]},u=e.map((function(e){return s(e[0])}));return{points:u,predict:s,equation:[c,l],string:"y = "+c+" + "+l+" ln(x)",r2:i(a(e,u),t.precision)}},power:function(e,t){for(var n=[0,0,0,0,0],r=e.length,o=0;o<r;o++)null!==e[o][1]&&(n[0]+=Math.log(e[o][0]),n[1]+=Math.log(e[o][1])*Math.log(e[o][0]),n[2]+=Math.log(e[o][1]),n[3]+=Math.pow(Math.log(e[o][0]),2));var l=(r*n[1]-n[0]*n[2])/(r*n[3]-Math.pow(n[0],2)),c=(n[2]-l*n[0])/r,s=i(Math.exp(c),t.precision),u=i(l,t.precision),d=function(e){return[i(e,t.precision),i(i(s*Math.pow(e,u),t.precision),t.precision)]},f=e.map((function(e){return d(e[0])}));return{points:f,predict:d,equation:[s,u],string:"y = "+s+"x^"+u,r2:i(a(e,f),t.precision)}},polynomial:function(e,t){for(var r=[],o=[],l=0,c=0,s=e.length,u=t.order+1,d=0;d<u;d++){for(var f=0;f<s;f++)null!==e[f][1]&&(l+=Math.pow(e[f][0],d)*e[f][1]);r.push(l),l=0;for(var p=[],m=0;m<u;m++){for(var h=0;h<s;h++)null!==e[h][1]&&(c+=Math.pow(e[h][0],d+m));p.push(c),c=0}o.push(p)}o.push(r);for(var g=function(e,t){for(var n=e,r=e.length-1,a=[t],i=0;i<r;i++){for(var o=i,l=i+1;l<r;l++)Math.abs(n[i][l])>Math.abs(n[i][o])&&(o=l);for(var c=i;c<r+1;c++){var s=n[c][i];n[c][i]=n[c][o],n[c][o]=s}for(var u=i+1;u<r;u++)for(var d=r;d>=i;d--)n[d][u]-=n[d][i]*n[i][u]/n[i][i]}for(var f=r-1;f>=0;f--){for(var p=0,m=f+1;m<r;m++)p+=n[m][f]*a[m];a[f]=(n[r][f]-p)/n[f][f]}return a}(o,u).map((function(e){return i(e,t.precision)})),x=function(e){return[i(e,t.precision),i(g.reduce((function(t,n,r){return t+n*Math.pow(e,r)}),0),t.precision)]},A=e.map((function(e){return x(e[0])})),v="y = ",S=g.length-1;S>=0;S--)v+=S>1?g[S]+"x^"+S+" + ":1===S?g[S]+"x + ":g[S];return{string:v,points:A,predict:x,equation:[].concat(n(g)).reverse(),r2:i(a(e,A),t.precision)}}};e.exports=Object.keys(o).reduce((function(e,n){return t({_round:i},e,(c=function(e,a){return o[n](e,t({},r,a))},(l=n)in(a={})?Object.defineProperty(a,l,{value:c,enumerable:!0,configurable:!0,writable:!0}):a[l]=c,a));var a,l,c}),{})})?r.apply(t,a):r)||(e.exports=i)},function(e,t,n){(function(e){var n;n=function(){var e=null,t={};o("monochrome",null,[[0,0],[100,0]]),o("red",[-26,18],[[20,100],[30,92],[40,89],[50,85],[60,78],[70,70],[80,60],[90,55],[100,50]]),o("orange",[18,46],[[20,100],[30,93],[40,88],[50,86],[60,85],[70,70],[100,70]]),o("yellow",[46,62],[[25,100],[40,94],[50,89],[60,86],[70,84],[80,82],[90,80],[100,75]]),o("green",[62,178],[[30,100],[40,90],[50,85],[60,81],[70,74],[80,64],[90,50],[100,40]]),o("blue",[178,257],[[20,100],[30,86],[40,80],[50,74],[60,60],[70,52],[80,44],[90,39],[100,35]]),o("purple",[257,282],[[20,100],[30,87],[40,79],[50,70],[60,65],[70,59],[80,52],[90,45],[100,42]]),o("pink",[282,334],[[20,100],[30,90],[40,86],[60,84],[80,80],[90,75],[100,73]]);var n=[],r=function(o){if(void 0!==(o=o||{}).seed&&null!==o.seed&&o.seed===parseInt(o.seed,10))e=o.seed;else if("string"==typeof o.seed)e=function(e){for(var t=0,n=0;n!==e.length&&!(t>=Number.MAX_SAFE_INTEGER);n++)t+=e.charCodeAt(n);return t}(o.seed);else{if(void 0!==o.seed&&null!==o.seed)throw new TypeError("The seed value must be an integer or string");e=null}var u,d;if(null!==o.count&&void 0!==o.count){for(var f=o.count,p=[],m=0;m<o.count;m++)n.push(!1);for(o.count=null;f>p.length;){var h=r(o);null!==e&&(o.seed=e),p.push(h)}return o.count=f,p}return function(e,t){switch(t.format){case"hsvArray":return e;case"hslArray":return s(e);case"hsl":var n=s(e);return"hsl("+n[0]+", "+n[1]+"%, "+n[2]+"%)";case"hsla":var r=s(e),a=t.alpha||Math.random();return"hsla("+r[0]+", "+r[1]+"%, "+r[2]+"%, "+a+")";case"rgbArray":return l(e);case"rgb":return"rgb("+l(e).join(", ")+")";case"rgba":var i=l(e);return a=t.alpha||Math.random(),"rgba("+i.join(", ")+", "+a+")";default:return function(e){var t=l(e);function n(e){var t=e.toString(16);return 1==t.length?"0"+t:t}return"#"+n(t[0])+n(t[1])+n(t[2])}(e)}}([u=function(e){if(n.length>0){var r=i(d=function(e){if(isNaN(e)){if("string"==typeof e)if(t[e]){var n=t[e];if(n.hueRange)return n.hueRange}else if(e.match(/^#?([0-9A-F]{3}|[0-9A-F]{6})$/i))return a(c(e)[0]).hueRange}else{var r=parseInt(e);if(r<360&&r>0)return a(e).hueRange}return[0,360]}(e.hue)),o=(d[1]-d[0])/n.length,l=parseInt((r-d[0])/o);!0===n[l]?l=(l+2)%n.length:n[l]=!0;var s=(d[0]+l*o)%359,u=(d[0]+(l+1)*o)%359;return(r=i(d=[s,u]))<0&&(r=360+r),r}var d=function(e){if("number"==typeof parseInt(e)){var n=parseInt(e);if(n<360&&n>0)return[n,n]}if("string"==typeof e)if(t[e]){var r=t[e];if(r.hueRange)return r.hueRange}else if(e.match(/^#?([0-9A-F]{3}|[0-9A-F]{6})$/i)){var a=c(e)[0];return[a,a]}return[0,360]}(e.hue);return(r=i(d))<0&&(r=360+r),r}(o),d=function(e,t){if("monochrome"===t.hue)return 0;if("random"===t.luminosity)return i([0,100]);var n=function(e){return a(e).saturationRange}(e),r=n[0],o=n[1];switch(t.luminosity){case"bright":r=55;break;case"dark":r=o-10;break;case"light":o=55}return i([r,o])}(u,o),function(e,t,n){var r=function(e,t){for(var n=a(e).lowerBounds,r=0;r<n.length-1;r++){var i=n[r][0],o=n[r][1],l=n[r+1][0],c=n[r+1][1];if(t>=i&&t<=l){var s=(c-o)/(l-i);return s*t+(o-s*i)}}return 0}(e,t),o=100;switch(n.luminosity){case"dark":o=r+20;break;case"light":r=(o+r)/2;break;case"random":r=0,o=100}return i([r,o])}(u,d,o)],o)};function a(e){for(var n in e>=334&&e<=360&&(e-=360),t){var r=t[n];if(r.hueRange&&e>=r.hueRange[0]&&e<=r.hueRange[1])return t[n]}return"Color not found"}function i(t){if(null===e){var n=Math.random();return n+=.618033988749895,n%=1,Math.floor(t[0]+n*(t[1]+1-t[0]))}var r=t[1]||1,a=t[0]||0,i=(e=(9301*e+49297)%233280)/233280;return Math.floor(a+i*(r-a))}function o(e,n,r){var a=r[0][0],i=r[r.length-1][0],o=r[r.length-1][1],l=r[0][1];t[e]={hueRange:n,lowerBounds:r,saturationRange:[a,i],brightnessRange:[o,l]}}function l(e){var t=e[0];0===t&&(t=1),360===t&&(t=359),t/=360;var n=e[1]/100,r=e[2]/100,a=Math.floor(6*t),i=6*t-a,o=r*(1-n),l=r*(1-i*n),c=r*(1-(1-i)*n),s=256,u=256,d=256;switch(a){case 0:s=r,u=c,d=o;break;case 1:s=l,u=r,d=o;break;case 2:s=o,u=r,d=c;break;case 3:s=o,u=l,d=r;break;case 4:s=c,u=o,d=r;break;case 5:s=r,u=o,d=l}return[Math.floor(255*s),Math.floor(255*u),Math.floor(255*d)]}function c(e){e=3===(e=e.replace(/^#/,"")).length?e.replace(/(.)/g,"$1$1"):e;var t=parseInt(e.substr(0,2),16)/255,n=parseInt(e.substr(2,2),16)/255,r=parseInt(e.substr(4,2),16)/255,a=Math.max(t,n,r),i=a-Math.min(t,n,r),o=a?i/a:0;switch(a){case t:return[(n-r)/i%6*60||0,o,a];case n:return[60*((r-t)/i+2)||0,o,a];case r:return[60*((t-n)/i+4)||0,o,a]}}function s(e){var t=e[0],n=e[1]/100,r=e[2]/100,a=(2-n)*r;return[t,Math.round(n*r/(a<1?a:2-a)*1e4)/100,a/2*100]}return r}(),e&&e.exports&&(t=e.exports=n),t.randomColor=n}).call(this,n(11)(e))},function(e,t){e.exports=a},function(e,t,n){var r=n(8),a=n(9);"string"==typeof(a=a.__esModule?a.default:a)&&(a=[[e.i,a,""]]);var i={insert:"head",singleton:!1},o=(r(a,i),a.locals?a.locals:{});e.exports=o},function(e,t,n){"use strict";var r,a=function(){return void 0===r&&(r=Boolean(window&&document&&document.all&&!window.atob)),r},i=function(){var e={};return function(t){if(void 0===e[t]){var n=document.querySelector(t);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}e[t]=n}return e[t]}}(),o=[];function l(e){for(var t=-1,n=0;n<o.length;n++)if(o[n].identifier===e){t=n;break}return t}function c(e,t){for(var n={},r=[],a=0;a<e.length;a++){var i=e[a],c=t.base?i[0]+t.base:i[0],s=n[c]||0,u="".concat(c," ").concat(s);n[c]=s+1;var d=l(u),f={css:i[1],media:i[2],sourceMap:i[3]};-1!==d?(o[d].references++,o[d].updater(f)):o.push({identifier:u,updater:g(f,t),references:1}),r.push(u)}return r}function s(e){var t=document.createElement("style"),r=e.attributes||{};if(void 0===r.nonce){var a=n.nc;a&&(r.nonce=a)}if(Object.keys(r).forEach((function(e){t.setAttribute(e,r[e])})),"function"==typeof e.insert)e.insert(t);else{var o=i(e.insert||"head");if(!o)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");o.appendChild(t)}return t}var u,d=(u=[],function(e,t){return u[e]=t,u.filter(Boolean).join("\n")});function f(e,t,n,r){var a=n?"":r.media?"@media ".concat(r.media," {").concat(r.css,"}"):r.css;if(e.styleSheet)e.styleSheet.cssText=d(t,a);else{var i=document.createTextNode(a),o=e.childNodes;o[t]&&e.removeChild(o[t]),o.length?e.insertBefore(i,o[t]):e.appendChild(i)}}function p(e,t,n){var r=n.css,a=n.media,i=n.sourceMap;if(a?e.setAttribute("media",a):e.removeAttribute("media"),i&&btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),e.styleSheet)e.styleSheet.cssText=r;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(r))}}var m=null,h=0;function g(e,t){var n,r,a;if(t.singleton){var i=h++;n=m||(m=s(t)),r=f.bind(null,n,i,!1),a=f.bind(null,n,i,!0)}else n=s(t),r=p.bind(null,n,t),a=function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(n)};return r(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap)return;r(e=t)}else a()}}e.exports=function(e,t){(t=t||{}).singleton||"boolean"==typeof t.singleton||(t.singleton=a());var n=c(e=e||[],t);return function(e){if(e=e||[],"[object Array]"===Object.prototype.toString.call(e)){for(var r=0;r<n.length;r++){var a=l(n[r]);o[a].references--}for(var i=c(e,t),s=0;s<n.length;s++){var u=l(n[s]);0===o[u].references&&(o[u].updater(),o.splice(u,1))}n=i}}}},function(e,t,n){(t=n(10)(!0)).push([e.i,".YAxisEditor{margin-bottom:25px}.ScatterFlex{display:flex;flex-wrap:nowrap;padding:1px}.ScatterSize{width:115px}.ScatterSize input{width:55px}.ScatterLineType{width:190px}.ScatterDotColor{padding-top:7px}.ScatterSelect{width:100%}.ScatterExtents{display:flex}.ScatterExtentLimit{padding-right:20px}.ScatterLabel{padding-top:6px;width:90px;color:#9fa7b3;font-size:12px;text-align:center}.ScatterCheckbox{padding-top:6px;padding-left:5px;width:55px;color:#9fa7b3;font-size:12px}.ScatterFlex label{margin-top:5px}.ScatterSetHidden{fill:rgba(119,119,119,0.25)}.ScatterLine{fill:none}.ScatterLineHidden{opacity:0.25;stroke-width:1px}.TitleEditor{display:flex}.TitleText{padding-right:20px}.TitleSize{padding-right:20px;max-width:70px}.TitleColor{padding-top:7px}.TitleLabel{padding-top:8px;color:#777;font-size:smaller}.ScatterLegend input{width:50px}.ScatterLegendText{border:1px solid #fff}.ScatterLegendTextHidden{fill:rgba(119,119,119,0.25)}\n","",{version:3,sources:["ScatterEditor.css"],names:[],mappings:"AAAA,aAAa,kBAAkB,CAAC,aAAa,YAAY,CAAC,gBAAgB,CAAC,WAAW,CAAC,aAAa,WAAW,CAAC,mBAAmB,UAAU,CAAC,iBAAiB,WAAW,CAAC,iBAAiB,eAAe,CAAC,eAAe,UAAU,CAAC,gBAAgB,YAAY,CAAC,oBAAoB,kBAAkB,CAAC,cAAc,eAAe,CAAC,UAAU,CAAC,aAAa,CAAC,cAAc,CAAC,iBAAiB,CAAC,iBAAiB,eAAe,CAAC,gBAAgB,CAAC,UAAU,CAAC,aAAa,CAAC,cAAc,CAAC,mBAAmB,cAAc,CAAC,kBAAkB,2BAA2B,CAAC,aAAa,SAAS,CAAC,mBAAmB,YAAY,CAAC,gBAAgB,CAAC,aAAa,YAAY,CAAC,WAAW,kBAAkB,CAAC,WAAW,kBAAkB,CAAC,cAAc,CAAC,YAAY,eAAe,CAAC,YAAY,eAAe,CAAC,UAAU,CAAC,iBAAiB,CAAC,qBAAqB,UAAU,CAAC,mBAAmB,qBAAqB,CAAC,yBAAyB,2BAA2B",file:"ScatterEditor.css",sourcesContent:[".YAxisEditor{margin-bottom:25px}.ScatterFlex{display:flex;flex-wrap:nowrap;padding:1px}.ScatterSize{width:115px}.ScatterSize input{width:55px}.ScatterLineType{width:190px}.ScatterDotColor{padding-top:7px}.ScatterSelect{width:100%}.ScatterExtents{display:flex}.ScatterExtentLimit{padding-right:20px}.ScatterLabel{padding-top:6px;width:90px;color:#9fa7b3;font-size:12px;text-align:center}.ScatterCheckbox{padding-top:6px;padding-left:5px;width:55px;color:#9fa7b3;font-size:12px}.ScatterFlex label{margin-top:5px}.ScatterSetHidden{fill:rgba(119,119,119,0.25)}.ScatterLine{fill:none}.ScatterLineHidden{opacity:0.25;stroke-width:1px}.TitleEditor{display:flex}.TitleText{padding-right:20px}.TitleSize{padding-right:20px;max-width:70px}.TitleColor{padding-top:7px}.TitleLabel{padding-top:8px;color:#777;font-size:smaller}.ScatterLegend input{width:50px}.ScatterLegendText{border:1px solid #fff}.ScatterLegendTextHidden{fill:rgba(119,119,119,0.25)}\n"]}]),e.exports=t},function(e,t,n){"use strict";e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n=function(e,t){var n=e[1]||"",r=e[3];if(!r)return n;if(t&&"function"==typeof btoa){var a=(o=r,l=btoa(unescape(encodeURIComponent(JSON.stringify(o)))),c="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(l),"/*# ".concat(c," */")),i=r.sources.map((function(e){return"/*# sourceURL=".concat(r.sourceRoot||"").concat(e," */")}));return[n].concat(i).concat([a]).join("\n")}var o,l,c;return[n].join("\n")}(t,e);return t[2]?"@media ".concat(t[2]," {").concat(n,"}"):n})).join("")},t.i=function(e,n,r){"string"==typeof e&&(e=[[null,e,""]]);var a={};if(r)for(var i=0;i<this.length;i++){var o=this[i][0];null!=o&&(a[o]=!0)}for(var l=0;l<e.length;l++){var c=[].concat(e[l]);r&&a[c[0]]||(n&&(c[2]?c[2]="".concat(n," and ").concat(c[2]):c[2]=n),t.push(c))}},t}},function(e,t){e.exports=function(e){return e.webpackPolyfill||(e.deprecate=function(){},e.paths=[],e.children||(e.children=[]),Object.defineProperty(e,"loaded",{enumerable:!0,get:function(){return e.l}}),Object.defineProperty(e,"id",{enumerable:!0,get:function(){return e.i}}),e.webpackPolyfill=1),e}},function(e,t,n){"use strict";n.r(t);var r=n(6),a=function(e,t,n){this.name=e,this.displayName=t,this.values=n},i=function(e,t){this.col=e,this.inverted=t},o=function(e,t,n,r,a,i){this.col=e,this.color=t,this.dotSize=n,this.lineSize=r,this.lineType=a,this.hidden=i},l=function(e,t,n){this.text=e,this.color=t,this.textSize=n},c=function(e,t,n){this.show=e,this.color=t,this.size=n},s=function(e){this.color=e},u=function(e,t){this.show=e,this.size=t},d=function(e,t,n,r){this.top=e,this.right=t,this.bottom=n,this.left=r},f=function(e,t){this.min=e,this.max=t},p=n(0),m=n.n(p),h=n(3),g=n.n(h),x=n(2),A=n(4),v=n.n(A),S=(n(7),n(5));function C(e,t,n,r,a,i){var o=r,l=a.map((function(e){return e.values})),c=a.map((function(e){return e.displayName||e.name})),s=l[e.xAxis.col],u=[0===e.xAxisExtents.min?0:e.xAxisExtents.min||x.min(s),0===e.xAxisExtents.max?0:e.xAxisExtents.max||x.max(s)],f=o.map((function(e){return l[e.col]})),p=f.map((function(e){return x.extent(e)})),h=[0===e.yAxisExtents.min?0:e.yAxisExtents.min||x.min(p.map((function(e){return e[0]}))),0===e.yAxisExtents.max?0:e.yAxisExtents.max||x.max(p.map((function(e){return e[1]})))],A=new d(20,10,20,30),S=function(e,t,n,r,a,i){if(e.legend.show){var o=e.legend.size/2,l=e.fieldSets.filter((function(e){return e.col>=0&&e.col<a.length})),c=x.max(l.map((function(e){return a[e.col].length})));if(l.length>0){var s=20+8.6*o*c;r.right+=s;var u=new Array(0);return l.forEach((function(e,t){var n=e.hidden?"ScatterLegendText ScatterLegendTextHidden":"ScatterLegendText";u.push(m.a.createElement("text",{transform:"translate(20, "+30*o*t+") scale("+o+")",className:n,alignmentBaseline:"hanging",textAnchor:"left",fill:e.color,onClick:function(e){!function(e,t,n,r){var a=g()(e.currentTarget),i=a.parent(),o=g()(".ScatterLegendText",i),l=o.filter(".ScatterLegendTextHidden");e.ctrlKey?(a.toggleClass("ScatterLegendTextHidden"),b(n[t],t,!n[t].hidden,r)):0===l.length||a.hasClass("ScatterLegendTextHidden")?(o.addClass("ScatterLegendTextHidden"),a.toggleClass("ScatterLegendTextHidden"),n.forEach((function(e,n){b(e,n,t!==n,r)}))):(o.removeClass("ScatterLegendTextHidden"),n.forEach((function(e,t){b(e,t,!1,r)})))}(e,t,l,i)}},a[e.col]))})),m.a.createElement("g",{transform:"translate("+(t-s)+", "+r.top+")"},u)}}return null}(e,t,0,A,c,i),C=function(e,t,n,r){var a=e.yAxisTitle;if(a.text){var i=a.textSize,o=8.2*a.text.length;return e.rotateYAxisTitle?(r.left+=14*i,m.a.createElement("g",{transform:"translate(0, "+(n-r.top-r.bottom)/2+") rotate(-90) scale("+i+")"},m.a.createElement("text",{className:"ScatterXTitleRect",alignmentBaseline:"hanging",textAnchor:"middle",width:o,height:14,fill:a.color},a.text))):(r.left+=o*i,m.a.createElement("g",{transform:"translate(0, "+(n-r.top-r.bottom)/2+") scale("+i+")"},m.a.createElement("text",{className:"ScatterXTitleRect",textAnchor:"left",width:o,height:14,fill:a.color},a.text)))}return null}(e,0,n,A),T=function(e,t,n,r){var a=e.xAxisTitle;if(a.text){var i=a.textSize,o=8.2*i*a.text.length;return r.bottom+=14*i,m.a.createElement("g",{transform:"translate("+(t+r.left-r.right)/2+", "+(n-14*i)+") scale("+i+")"},m.a.createElement("text",{className:"ScatterXTitleRect",alignmentBaseline:"hanging",textAnchor:"middle",width:o,height:14,fill:a.color},a.text))}return null}(e,t,n,A),L=e.border.show?m.a.createElement("rect",{transform:"translate("+A.left+", "+A.top+")",width:t-A.left-A.right,height:n-A.top-A.bottom,stroke:e.border.color,"stroke-width":e.border.size,fill:"none"}):null,M=m.a.createElement("defs",null,m.a.createElement("clipPath",{id:"grid"},m.a.createElement("rect",{x:A.left,y:A.top,width:t-A.left-A.right,height:n-A.top-A.bottom}))),B=x.scaleLinear().nice().domain(u).range([e.xAxis.inverted?t-A.right:A.left,e.xAxis.inverted?A.left:t-A.right]),k=x.axisBottom(B).tickSize(A.top+A.bottom-n),z=x.scaleLinear().nice().domain(h).range([n-A.bottom,A.top]),j=x.axisLeft(z).tickSize(A.left+A.right-t);return m.a.createElement("svg",{width:t,height:n},m.a.createElement("g",{className:"ScatterPanel-"+i},S,T,C,m.a.createElement("g",{transform:"translate(0, "+(n-A.bottom)+")",ref:function(t){x.select(t).call(k).selectAll("line").attr("stroke",e.grid.color)}}),m.a.createElement("g",{transform:"translate("+A.left+", 0)",ref:function(t){x.select(t).call(j).selectAll("line").attr("stroke",e.grid.color)}}),M,L,m.a.createElement("g",null,function(e,t,n,r,a,i,o,l){var c=new Array(0);return t.forEach((function(s,u){var d=t[u];if("none"!==d.lineType&&d.lineSize>0){var f="";if("simple"===d.lineType)f="\n        "+n.map((function(e,t){return(0===t?"M":"L")+" "+a(e)+" "+i(r[u][t])})).join(" ")+"\n      ";else if("linear"===d.lineType){var p=n.map((function(e,t){return[e,r[u][t]]})),h=E(x=v.a.linear(p),T=o[0]);h<l[0]&&(T=y(x,h=l[0])),h>l[1]&&(T=y(x,h=l[1]));var g=E(x,L=o[1]);g<l[0]&&(L=y(x,g=l[0])),g>l[1]&&(L=y(x,g=l[1])),f="M "+a(T)+" "+i(h)+" L "+a(L)+" "+i(g)}else if("exponential"===d.lineType){p=n.map((function(e,t){return[e,r[u][t]]}));for(var x=v.a.exponential(p),A=(T=o[0])+((L=o[1])-T)/(M=50),S=new Array(0),C=0;C<M;C++){var b=w(x,B=T+C*A);S.push([B,b])}f="\n        "+S.map((function(e,t){return(0===t?"M":"L")+" "+a(e[0])+" "+i(e[1])})).join(" ")+"\n      "}else if("power"===d.lineType){var T;p=n.map((function(e,t){return[e,r[u][t]]})),x=v.a.power(p);(T=o[0])<0&&(T=0);var L,M;for(A=T+((L=o[1])-T)/(M=100),S=new Array(0),C=0;C<M;C++){var B;b=N(x,B=T+C*A);S.push([B,b])}f="\n        "+S.map((function(e,t){return(0===t?"M":"L")+" "+a(e[0])+" "+i(e[1])})).join(" ")+"\n      "}if(f.length){var k="ScatterLine ScatterLine-"+u;e.legend.size&&d.hidden&&(k+=" ScatterLineHidden"),c.push(m.a.createElement("path",{className:k,d:f,stroke:d.color,strokeWidth:d.lineSize,fill:"none"}))}}})),m.a.createElement("g",{"clip-path":"url(#grid)"},c)}(e,o,s,f,B,z,u,h)),m.a.createElement("g",null,function(e,t,n,r,a,i){return t.map((function(o,l){return n.map((function(n,c){if(o.dotSize>0){var s="ScatterSet-"+l;return e.legend.size&&t[l].hidden&&(s+=" ScatterSetHidden"),m.a.createElement("circle",{key:"circle-["+o+"]["+l+"]",cx:a(n),cy:i(r[l][c]),r:o.dotSize,className:s,fill:o.color})}return null}))}))}(e,o,s,f,B,z))))}function b(e,t,n,r){e.hidden=n;var a=g()(".ScatterPanel-"+r),i=g()(".ScatterSet-"+t,a);n?i.addClass("ScatterSetHidden"):i.removeClass("ScatterSetHidden");var o=g()(".ScatterLine-"+t,a);n?o.addClass("ScatterLineHidden"):o.removeClass("ScatterLineHidden")}function E(e,t){return e.equation[0]*t+e.equation[1]}function y(e,t){return(t-e.equation[1])/e.equation[0]}function w(e,t){return e.equation[0]*Math.exp(e.equation[1]*t)}function N(e,t){return e.equation[0]*Math.pow(t,e.equation[1])}var T=n(1),L=function(e){e.item;var t=e.onChange,n=e.context;if(n.data&&n.data.length>0){var r=n.options.xAxis,a=n.data.flatMap((function(e){return e.fields})).map((function(e,t){var n;return{label:(null===(n=e.config)||void 0===n?void 0:n.displayName)?e.config.displayName:e.name,value:t}}));return m.a.createElement("div",{className:"XAxisEditor"},m.a.createElement("div",{className:"ScatterFlex"},m.a.createElement("div",{className:"ScatterSelect"},m.a.createElement(T.Select,{isLoading:!1,value:r.col,onChange:function(e){r.col=e.value,t(r)},options:a})),m.a.createElement("div",{className:"ScatterFlex"},m.a.createElement("div",{className:"ScatterCheckbox",title:"Draw X axis right to left"},"Inverted"),m.a.createElement(T.Checkbox,{css:"",value:r.inverted,onChange:function(e){r.inverted=e.currentTarget.checked,t(r)}}))))}return m.a.createElement(T.Select,{onChange:function(){},disabled:!0})},M=n(5),B=function(e){var t=e.item,n=e.onChange,r=e.context;if(r.data&&r.data.length>0){var a=r.data.flatMap((function(e){return e.fields})).map((function(e,t){var n;return{label:(null===(n=e.config)||void 0===n?void 0:n.displayName)?e.config.displayName:e.name,value:t}})),i=new Array(0),l=r.options.fieldSets.filter((function(e){return null!=e.col}));l&&l.forEach((function(e,t){var r="none"==l[t].lineType?null:m.a.createElement("div",{className:"ScatterFlex ScatterSize"},m.a.createElement("div",{className:"ScatterLabel"},"Size"),m.a.createElement(T.Input,{css:"",type:"number",label:"Line Size",value:l[t].lineSize,min:1,max:10,title:"Set size of line",onChange:function(e){l[t].lineSize=e.target.valueAsNumber,n(l)}}));i.push(m.a.createElement("div",{className:"YAxisEditor"},m.a.createElement("div",{className:"ScatterFlex"},m.a.createElement("div",{className:"ScatterSelect"},m.a.createElement(T.Select,{isLoading:!1,value:l[t].col,isClearable:l.length>1,onChange:function(e){e?l[t].col=e.value:l.splice(t,1),n(l)},options:a})),m.a.createElement("div",{className:"ScatterDotColor"},m.a.createElement(T.ColorPicker,{color:l[t].color,enableNamedColors:!1,onChange:function(e){l[t].color=e,n(l)}})),m.a.createElement("div",{className:"ScatterFlex ScatterSize"},m.a.createElement("div",{className:"ScatterLabel"},"Size"),m.a.createElement(T.Input,{css:"",type:"number",label:"Dot Size",value:l[t].dotSize,min:1,max:20,title:"Set size of dot",onChange:function(e){l[t].dotSize=e.target.valueAsNumber,n(l)}}))),m.a.createElement("div",{className:"ScatterFlex"},m.a.createElement("div",{className:"ScatterFlex ScatterLineType"},m.a.createElement("div",{className:"ScatterLabel"},"Line"),m.a.createElement(T.Select,{isLoading:!1,value:l[t].lineType,onChange:function(e){l[t].lineType=e.value,n(l)},options:[{label:"None",value:"none"},{label:"Simple",value:"simple"},{label:"Linear",value:"linear"},{label:"Exponential",value:"exponential"},{label:"Power",value:"power"}]})),r),m.a.createElement("hr",null)))}));var c=l.some((function(e){return-1===e.col}))?null:m.a.createElement("div",null,m.a.createElement(T.Button,{variant:"secondary",size:"sm",onClick:function(){l.push(new o(-1,M(),2,0,"none",!1)),n(l)}},m.a.createElement("i",{className:"fa fa-plus"})," Add ",t.name.replace("(s)","")),m.a.createElement("hr",null));return m.a.createElement("div",null,i,c)}return null},k=function(e){var t=e.value,n=e.onChange;return m.a.createElement("div",{className:"ScatterExtents"},m.a.createElement("div",{className:"ScatterExtentLimit"},m.a.createElement(T.Input,{css:"",type:"number",value:t.min,title:"Axis Min (leave blank for auto)",onChange:function(e){t.min=e.target.valueAsNumber,n(t)}})),m.a.createElement("div",{className:"ScatterExtentLimit"},m.a.createElement(T.Input,{css:"",className:"ScatterExtentLimit",type:"number",value:t.max,title:"Axis Max (leave blank for auto)",onChange:function(e){t.max=e.target.valueAsNumber,n(t)}})))},z=function(e){var t=e.value,n=e.onChange;return m.a.createElement("div",{className:"TitleEditor"},m.a.createElement("div",{className:"TitleText"},m.a.createElement(T.Input,{css:"",type:"string",value:t.text,onChange:function(e){t.text=e.target.value,n(t)}})),m.a.createElement("div",{className:"TitleLabel"},"Size"),m.a.createElement("div",{className:"TitleSize"},m.a.createElement(T.Input,{css:"",type:"number",label:"Size",min:0,max:10,value:t.textSize,onChange:function(e){t.textSize=e.target.valueAsNumber,n(t)}})),m.a.createElement("div",{className:"TitleColor"},m.a.createElement(T.ColorPicker,{color:t.color,enableNamedColors:!1,onChange:function(e){t.color=e,n(t)}})))},j=function(e){var t=e.value,n=e.onChange,r=t.show?m.a.createElement("div",{className:"ScatterFlex"},m.a.createElement("div",{className:"ScatterLabel"},"Text Size"),m.a.createElement(T.Input,{css:"",className:"ScatterLegendSize",type:"number",value:t.size,min:1,max:10,title:"Legend Text Size",onChange:function(e){t.size=e.target.valueAsNumber,n(t)}})):null;return m.a.createElement("div",{className:"ScatterLegend ScatterFlex"},m.a.createElement("div",{className:"ScatterFlex"},m.a.createElement("div",{className:"ScatterCheckbox"},"Show"),m.a.createElement(T.Checkbox,{css:"",value:t.show,onChange:function(e){t.show=e.currentTarget.checked,n(t)}})),r)},F=function(e){var t=e.value,n=e.onChange,r=t.show?m.a.createElement("div",{className:"ScatterFlex"},m.a.createElement("div",{className:"ScatterLabel"},"Size"),m.a.createElement(T.Input,{css:"",className:"ScatterLegendSize",type:"number",value:t.size,min:1,max:10,title:"Legend Text Size",onChange:function(e){t.size=e.target.valueAsNumber,n(t)}}),m.a.createElement("div",{className:"ScatterDotColor"},m.a.createElement(T.ColorPicker,{color:t.color,enableNamedColors:!1,onChange:function(e){t.color=e,n(t)}}))):null;return m.a.createElement("div",{className:"ScatterBorder ScatterFlex"},m.a.createElement("div",{className:"ScatterFlex"},m.a.createElement("div",{className:"ScatterCheckbox"},"Show"),m.a.createElement(T.Checkbox,{css:"",value:t.show,onChange:function(e){t.show=e.currentTarget.checked,n(t)}})),r)},Y=function(e){var t=e.value,n=e.onChange;return m.a.createElement("div",{className:"ScatterBorder ScatterFlex"},m.a.createElement("div",{className:"ScatterFlex"},m.a.createElement("div",{className:"ScatterCheckbox"},"Color"),m.a.createElement("div",{className:"ScatterDotColor"},m.a.createElement(T.ColorPicker,{color:t.color,enableNamedColors:!1,onChange:function(e){t.color=e,n(t)}}))))};n.d(t,"plugin",(function(){return q}));var q=new r.PanelPlugin((function(e){var t,n,r=e.options,c=e.data,s=e.width,u=e.height;if((null===(t=c.series)||void 0===t?void 0:t.length)>0){var d=c.series[0],f=null===(n=c.request)||void 0===n?void 0:n.panelId,p=new Array(0);if(d.fields.forEach((function(e){var t;p.push(new a(e.name,(null===(t=e.config)||void 0===t?void 0:t.displayName)||e.name,e.values.toArray().map(Number)))})),p.length<2)return m.a.createElement("div",{style:{overflow:"hidden",height:"100%"}},m.a.createElement("p",null,"To get started, create a table query that returns 2 or more numeric columns"));if(-1!==r.xAxis.col&&0!==r.fieldSets.length||function(e,t){if((-1==e.xAxis.col||e.xAxis.col>=t.length)&&(e.xAxis=new i(0,!1)),0==e.xAxisTitle.text.length&&(e.xAxisTitle=new l(t[0].displayName,"white",2)),e.fieldSets=e.fieldSets.filter((function(n){return n.col>=0&&n.col<t.length&&n.col!==e.xAxis.col})),0===e.fieldSets.length){var n=t.map((function(e,t){return new o(t,S(),3,1,"none",!1)}));e.fieldSets=n.filter((function(t){return t.col!=e.xAxis.col}))}}(r,p),r.xAxis.col>=p.length)return m.a.createElement("div",{style:{overflow:"hidden",height:"100%"}},m.a.createElement("p",null,"X Axis field setting not found in current query"));var h=r.fieldSets.filter((function(e){return null!=e&&(null==e?void 0:e.col)>=0&&(null==e?void 0:e.col)<p.length}));return 0===h.length?m.a.createElement("div",{style:{overflow:"hidden",height:"100%"}},m.a.createElement("p",null,"No Y Axis(s) data found in current query")):C(r,s,u,h,p,f)}return m.a.createElement("div",{style:{overflow:"hidden",height:"100%"}},m.a.createElement("p",null,"No data"),m.a.createElement("p",null,"To get started, create a table query that returns 2 or more numeric columns"))})).setPanelOptions((function(e){return e.addCustomEditor({id:"xAxis",path:"xAxis",name:"X Axis Field",category:["X Axis"],editor:L,defaultValue:new i(-1,!1)}),e.addCustomEditor({id:"xAxisExtents",path:"xAxisExtents",name:"X Axis Extent (Min & Max)",category:["X Axis"],editor:k,defaultValue:new f(NaN,NaN)}),e.addCustomEditor({id:"xAxisTitle",path:"xAxisTitle",name:"X Axis Title",category:["X Axis"],editor:z,defaultValue:new l("","#777",1)}),e.addCustomEditor({id:"fieldSets",path:"fieldSets",name:"Field(s)",category:["Y Axis"],editor:B,defaultValue:[]}),e.addCustomEditor({id:"yAxisExtents",path:"yAxisExtents",name:"Y Axis Extent (Min & Max)",category:["Y Axis"],editor:k,defaultValue:new f(NaN,NaN)}),e.addCustomEditor({id:"yAxisTitle",path:"yAxisTitle",name:"Y Axis Title",category:["Y Axis"],editor:z,defaultValue:new l("","#777",1)}),e.addBooleanSwitch({path:"rotateYAxisTitle",name:"Rotate Y Axis Title",category:["Y Axis"],defaultValue:!1,showIf:function(e){var t;return(null===(t=e.yAxisTitle.text)||void 0===t?void 0:t.length)>0}}),e.addCustomEditor({id:"legend",path:"legend",name:"Legend",category:["Legend"],editor:j,defaultValue:new u(!1,3)}),e.addCustomEditor({id:"grid",path:"grid",name:"Grid",category:["Display"],editor:Y,defaultValue:new s("gray")}),e.addCustomEditor({id:"border",path:"border",name:"Border",category:["Display"],editor:F,defaultValue:new c(!1,"yellow",1)}),e}))}])}));
//# sourceMappingURL=module.js.map