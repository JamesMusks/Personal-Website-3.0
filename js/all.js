!function(e){"use strict";var t=e.module("moviecat",["ngRoute","moviecat.home_page","moviecat.details","moviecat.movielist","moviecat.autoactive"]);t.controller("mainController",["$scope","$location","$route",function(e,t,r){e.query="",e.search=function(){r.updateParams({movieType:"search",page:"1",q:e.query})}}])}(angular),function(e){"use strict";var t=e.module("moviecat.autoactive",[]);t.directive("autoActive",["$location",function(e){return{link:function(t,r,n){t.loca=e,t.$watch("loca.url()",function(e,t){var n=r.children()[0].hash.substr(1);e.startsWith(n)&&(r.parent().children().removeClass("active"),r.addClass("active"))})}}}])}(angular),function(e){"use strict";var t=e.module("moviecat.jsonp",[]);t.service("MyService",["$window",function(e){this.jsonp=function(t,r,n){var i="";for(var o in r)i+=o+"="+r[o]+"&";var a="erqi"+e.Math.random().toString().substr(2);i+="callback="+a,t+="?"+i,e[a]=function(e){n(e)};var l=e.document.createElement("script");l.src=t,e.document.body.appendChild(l)}}])}(angular),function(e){"use strict";var t=e.module("moviecat.details",["ngRoute","moviecat.jsonp"]);t.config(["$routeProvider",function(e){e.when("/details/:id",{templateUrl:"./view/details.html",controller:"detailsController"})}]),t.controller("detailsController",["$scope","$routeParams","MyService",function(e,t,r){r.jsonp("http://api.douban.com/v2/movie/subject/"+t.id,{},function(t){e.data=t,e.$apply()})}])}(angular),function(e){"use strict";var t=e.module("moviecat.home_page",["ngRoute"]);t.config(["$routeProvider",function(e){e.when("/home_page",{templateUrl:"./view/home_page.html"})}])}(angular),function(e){"use strict";var t=e.module("moviecat.movielist",["ngRoute","moviecat.jsonp"]);t.config(["$routeProvider",function(e){e.when("/:movieType/:page?",{templateUrl:"./view/movielist.html",controller:"movielistController"})}]),t.controller("movielistController",["$scope","$http","$routeParams","$route","MyService",function(e,t,r,n,i){e.loading=!0;var o=5;e.page=(r.page||"1")-0;var a=(e.page-1)*o;i.jsonp("http://api.douban.com/v2/movie/"+r.movieType,{count:o,start:a,q:r.q},function(t){e.data=t;var r=Math.ceil(e.data.total/o);e.totalPage=r,e.loading=!1,e.$apply()}),e.getPage=function(t){var r=e.page+t;r>e.totalPage||r<1||(n.updateParams({page:r}))}}])}(angular),function(){function e(e,t){return[].slice.call((t||document).querySelectorAll(e))}if(window.addEventListener){var t=window.StyleFix={link:function(e){try{if("stylesheet"!==e.rel||e.hasAttribute("data-noprefix"))return}catch(e){return}var r,n=e.href||e.getAttribute("data-href"),i=n.replace(/[^\/]+$/,""),o=(/^[a-z]{3,10}:/.exec(i)||[""])[0],a=(/^[a-z]{3,10}:\/\/[^\/]+/.exec(i)||[""])[0],l=/^([^?]*)\??/.exec(n)[1],s=e.parentNode,c=new XMLHttpRequest;c.onreadystatechange=function(){4===c.readyState&&r()},r=function(){var r=c.responseText;if(r&&e.parentNode&&(!c.status||400>c.status||600<c.status)){if(r=t.fix(r,!0,e),i)var r=r.replace(/url\(\s*?((?:"|')?)(.+?)\1\s*?\)/gi,function(e,t,r){return/^([a-z]{3,10}:|#)/i.test(r)?e:/^\/\//.test(r)?'url("'+o+r+'")':/^\//.test(r)?'url("'+a+r+'")':/^\?/.test(r)?'url("'+l+r+'")':'url("'+i+r+'")'}),n=i.replace(/([\\\^\$*+[\]?{}.=!:(|)])/g,"\\$1"),r=r.replace(RegExp("\\b(behavior:\\s*?url\\('?\"?)"+n,"gi"),"$1");n=document.createElement("style"),n.textContent=r,n.media=e.media,n.disabled=e.disabled,n.setAttribute("data-href",e.getAttribute("href")),s.insertBefore(n,e),s.removeChild(e),n.media=e.media}};try{c.open("GET",n),c.send(null)}catch(e){"undefined"!=typeof XDomainRequest&&(c=new XDomainRequest,c.onerror=c.onprogress=function(){},c.onload=r,c.open("GET",n),c.send(null))}e.setAttribute("data-inprogress","")},styleElement:function(e){if(!e.hasAttribute("data-noprefix")){var r=e.disabled;e.textContent=t.fix(e.textContent,!0,e),e.disabled=r}},styleAttribute:function(e){var r=e.getAttribute("style"),r=t.fix(r,!1,e);e.setAttribute("style",r)},process:function(){e('link[rel="stylesheet"]:not([data-inprogress])').forEach(StyleFix.link),e("style").forEach(StyleFix.styleElement),e("[style]").forEach(StyleFix.styleAttribute)},register:function(e,r){(t.fixers=t.fixers||[]).splice(void 0===r?t.fixers.length:r,0,e)},fix:function(e,r,n){for(var i=0;i<t.fixers.length;i++)e=t.fixers[i](e,r,n)||e;return e},camelCase:function(e){return e.replace(/-([a-z])/g,function(e,t){return t.toUpperCase()}).replace("-","")},deCamelCase:function(e){return e.replace(/[A-Z]/g,function(e){return"-"+e.toLowerCase()})}};!function(){setTimeout(function(){e('link[rel="stylesheet"]').forEach(StyleFix.link)},10),document.addEventListener("DOMContentLoaded",StyleFix.process,!1)}()}}(),function(e){function t(e,t,n,i,o){return e=r[e],e.length&&(e=RegExp(t+"("+e.join("|")+")"+n,"gi"),o=o.replace(e,i)),o}if(window.StyleFix&&window.getComputedStyle){var r=window.PrefixFree={prefixCSS:function(e,n,i){var o=r.prefix;if(-1<r.functions.indexOf("linear-gradient")&&(e=e.replace(/(\s|:|,)(repeating-)?linear-gradient\(\s*(-?\d*\.?\d*)deg/gi,function(e,t,r,n){return t+(r||"")+"linear-gradient("+(90-n)+"deg"})),e=t("functions","(\\s|:|,)","\\s*\\(","$1"+o+"$2(",e),e=t("keywords","(\\s|:)","(\\s|;|\\}|$)","$1"+o+"$2$3",e),e=t("properties","(^|\\{|\\s|;)","\\s*:","$1"+o+"$2:",e),r.properties.length){var a=RegExp("\\b("+r.properties.join("|")+")(?!:)","gi");e=t("valueProperties","\\b",":(.+?);",function(e){return e.replace(a,o+"$1")},e)}return n&&(e=t("selectors","","\\b",r.prefixSelector,e),e=t("atrules","@","\\b","@"+o+"$1",e)),e=e.replace(RegExp("-"+o,"g"),"-"),e=e.replace(/-\*-(?=[a-z]+)/gi,r.prefix)},property:function(e){return(0<=r.properties.indexOf(e)?r.prefix:"")+e},value:function(e,n){return e=t("functions","(^|\\s|,)","\\s*\\(","$1"+r.prefix+"$2(",e),e=t("keywords","(^|\\s)","(\\s|$)","$1"+r.prefix+"$2$3",e),0<=r.valueProperties.indexOf(n)&&(e=t("properties","(^|\\s|,)","($|\\s|,)","$1"+r.prefix+"$2$3",e)),e},prefixSelector:function(e){return e.replace(/^:{1,2}/,function(e){return e+r.prefix})},prefixProperty:function(e,t){var n=r.prefix+e;return t?StyleFix.camelCase(n):n}};!function(){var e={},t=[],n=getComputedStyle(document.documentElement,null),i=document.createElement("div").style,o=function(r){if("-"===r.charAt(0)){t.push(r),r=r.split("-");var n=r[1];for(e[n]=++e[n]||1;3<r.length;)r.pop(),n=r.join("-"),StyleFix.camelCase(n)in i&&-1===t.indexOf(n)&&t.push(n)}};if(0<n.length)for(var a=0;a<n.length;a++)o(n[a]);else for(var l in n)o(StyleFix.deCamelCase(l));var s,c,a=0;for(c in e)n=e[c],a<n&&(s=c,a=n);for(r.prefix="-"+s+"-",r.Prefix=StyleFix.camelCase(r.prefix),r.properties=[],a=0;a<t.length;a++)l=t[a],0===l.indexOf(r.prefix)&&(s=l.slice(r.prefix.length),StyleFix.camelCase(s)in i||r.properties.push(s));!("Ms"!=r.Prefix||"transform"in i||"MsTransform"in i)&&"msTransform"in i&&r.properties.push("transform","transform-origin"),r.properties.sort()}(),function(){function e(e,t){return o[t]="",o[t]=e,!!o[t]}var t={"linear-gradient":{property:"backgroundImage",params:"red, teal"},calc:{property:"width",params:"1px + 5%"},element:{property:"backgroundImage",params:"#foo"},"cross-fade":{property:"backgroundImage",params:"url(a.png), url(b.png), 50%"}};t["repeating-linear-gradient"]=t["repeating-radial-gradient"]=t["radial-gradient"]=t["linear-gradient"];var n={initial:"color","zoom-in":"cursor","zoom-out":"cursor",box:"display",flexbox:"display","inline-flexbox":"display",flex:"display","inline-flex":"display",grid:"display","inline-grid":"display","max-content":"width","min-content":"width","fit-content":"width","fill-available":"width"};r.functions=[],r.keywords=[];var i,o=document.createElement("div").style;for(i in t){var a=t[i],l=a.property,a=i+"("+a.params+")";!e(a,l)&&e(r.prefix+a,l)&&r.functions.push(i)}for(var s in n)l=n[s],!e(s,l)&&e(r.prefix+s,l)&&r.keywords.push(s)}(),function(){function t(e){return a.textContent=e+"{}",!!a.sheet.cssRules.length}var n={":read-only":null,":read-write":null,":any-link":null,"::selection":null},i={keyframes:"name",viewport:null,document:'regexp(".")'};r.selectors=[],r.atrules=[];var o,a=e.appendChild(document.createElement("style"));for(o in n){var l=o+(n[o]?"("+n[o]+")":"");!t(l)&&t(r.prefixSelector(l))&&r.selectors.push(o)}for(var s in i)l=s+" "+(i[s]||""),!t("@"+l)&&t("@"+r.prefix+l)&&r.atrules.push(s);e.removeChild(a)}(),r.valueProperties=["transition","transition-property"],e.className+=" "+r.prefix,StyleFix.register(r.prefixCSS)}}(document.documentElement);