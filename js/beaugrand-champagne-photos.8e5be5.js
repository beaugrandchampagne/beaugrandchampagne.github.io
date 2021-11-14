(function(d){var h=[];d.loadImages=function(a,e){"string"==typeof a&&(a=[a]);for(var f=a.length,g=0,b=0;b<f;b++){var c=document.createElement("img");c.onload=function(){g++;g==f&&d.isFunction(e)&&e()};c.src=a[b];h.push(c)}}})(window.jQuery);
var wl;

var lwi=-1;function thresholdPassed(){var w=$(window).width();var p=false;var cw=0;if(w>=960){cw++;}if(lwi!=cw){p=true;}lwi=cw;return p;}
ldsrcset=function(t){var e,r=document.querySelectorAll(t);for(e=0;e<r.length;e++){var c=r[e].getAttribute("data-srcset");r[e].setAttribute("srcset",c)}},ldsrc=function(t){var e=document.querySelector(t),r=e.getAttribute("data-src");e.setAttribute("src",r)};!function(){if("Promise"in window&&void 0!==window.performance){var e,t,r=document,n=function(){return r.createElement("link")},o=new Set,a=n(),i=a.relList&&a.relList.supports&&a.relList.supports("prefetch"),s=location.href.replace(/#[^#]+$/,"");o.add(s);var c=function(e){var t=location,r="http:",n="https:";if(e&&e.href&&e.origin==t.origin&&[r,n].includes(e.protocol)&&(e.protocol!=r||t.protocol!=n)){var o=e.pathname;if(!(e.hash&&o+e.search==t.pathname+t.search||"?preload=no"==e.search.substr(-11)||".html"!=o.substr(-5)&&".html"!=o.substr(-5)&&"/"!=o.substr(-1)))return!0}},u=function(e){var t=e.replace(/#[^#]+$/,"");if(!o.has(t)){if(i){var a=n();a.rel="prefetch",a.href=t,r.head.appendChild(a)}else{var s=new XMLHttpRequest;s.open("GET",t,s.withCredentials=!0),s.send()}o.add(t)}},p=function(e){return e.target.closest("a")},f=function(t){var r=t.relatedTarget;r&&p(t)==r.closest("a")||e&&(clearTimeout(e),e=void 0)},d={capture:!0,passive:!0};r.addEventListener("touchstart",function(e){t=performance.now();var r=p(e);c(r)&&u(r.href)},d),r.addEventListener("mouseover",function(r){if(!(performance.now()-t<1200)){var n=p(r);c(n)&&(n.addEventListener("mouseout",f,{passive:!0}),e=setTimeout(function(){u(n.href),e=void 0},80))}},d)}}();

$(function(){
r=function(){if(thresholdPassed()){dpi=window.devicePixelRatio;if($(window).width()>=960){var a='data-src';var e=document.querySelector('.js16');if(e.hasAttribute('src')){a='src';}e.setAttribute(a,(dpi>1)?'images/secretpagepic4-960.jpg':'images/secretpagepic4-480.jpg');
var a='data-src';var e=document.querySelector('.js17');if(e.hasAttribute('src')){a='src';}e.setAttribute(a,(dpi>1)?'images/secretpagepic5-960.jpg':'images/secretpagepic5-480.jpg');
var a='data-src';var e=document.querySelector('.js18');if(e.hasAttribute('src')){a='src';}e.setAttribute(a,(dpi>1)?'images/secretpagepic6-960.jpg':'images/secretpagepic6-480.jpg');
var a='data-src';var e=document.querySelector('.js19');if(e.hasAttribute('src')){a='src';}e.setAttribute(a,(dpi>1)?'images/secretpagepic7-960.jpg':'images/secretpagepic7-480.jpg');
var a='data-src';var e=document.querySelector('.js20');if(e.hasAttribute('src')){a='src';}e.setAttribute(a,'images/secretpagepic8-640.jpg');
var a='data-src';var e=document.querySelector('.js21');if(e.hasAttribute('src')){a='src';}e.setAttribute(a,(dpi>1)?'images/secretpagepic9-958.jpg':'images/secretpagepic9-479.jpg');
var a='data-src';var e=document.querySelector('.js22');if(e.hasAttribute('src')){a='src';}e.setAttribute(a,'images/secretpagepic10-640.jpg');
var a='data-src';var e=document.querySelector('.js23');if(e.hasAttribute('src')){a='src';}e.setAttribute(a,(dpi>1)?'images/secretpagepic11-960.jpg':'images/secretpagepic11-480.jpg');
var a='data-src';var e=document.querySelector('.js24');if(e.hasAttribute('src')){a='src';}e.setAttribute(a,'images/secretpagepic12-640.jpg');
var a='data-src';var e=document.querySelector('.js25');if(e.hasAttribute('src')){a='src';}e.setAttribute(a,'images/secretpagepic13-480.jpg');
var a='data-src';var e=document.querySelector('.js26');if(e.hasAttribute('src')){a='src';}e.setAttribute(a,(dpi>1)?'images/secretpagepic14-960.jpg':'images/secretpagepic14-480.jpg');
var a='data-src';var e=document.querySelector('.js27');if(e.hasAttribute('src')){a='src';}e.setAttribute(a,(dpi>1)?'images/secretpagepic15-960-1.jpg':'images/secretpagepic15-480-1.jpg');
var e=document.querySelector('.js13');e.setAttribute('src',(dpi>1)?'images/secretpagepic1-1920.jpg':'images/secretpagepic1-960.jpg');
var e=document.querySelector('.js14');e.setAttribute('src',(dpi>1)?'images/secretpagepic2-958.jpg':'images/secretpagepic2-479.jpg');
var e=document.querySelector('.js15');e.setAttribute('src',(dpi>1)?'images/secretpagepic3-958.jpg':'images/secretpagepic3-479.jpg');}else{var a='data-src';var e=document.querySelector('.js16');if(e.hasAttribute('src')){a='src';}e.setAttribute(a,(dpi>1)?'images/secretpagepic4-320.jpg':'images/secretpagepic4-160.jpg');
var a='data-src';var e=document.querySelector('.js17');if(e.hasAttribute('src')){a='src';}e.setAttribute(a,(dpi>1)?'images/secretpagepic5-320.jpg':'images/secretpagepic5-160.jpg');
var a='data-src';var e=document.querySelector('.js18');if(e.hasAttribute('src')){a='src';}e.setAttribute(a,(dpi>1)?'images/secretpagepic6-320.jpg':'images/secretpagepic6-160.jpg');
var a='data-src';var e=document.querySelector('.js19');if(e.hasAttribute('src')){a='src';}e.setAttribute(a,(dpi>1)?'images/secretpagepic7-320.jpg':'images/secretpagepic7-160.jpg');
var a='data-src';var e=document.querySelector('.js20');if(e.hasAttribute('src')){a='src';}e.setAttribute(a,(dpi>1)?'images/secretpagepic8-426.jpg':'images/secretpagepic8-213.jpg');
var a='data-src';var e=document.querySelector('.js21');if(e.hasAttribute('src')){a='src';}e.setAttribute(a,(dpi>1)?'images/secretpagepic9-320.jpg':'images/secretpagepic9-160.jpg');
var a='data-src';var e=document.querySelector('.js22');if(e.hasAttribute('src')){a='src';}e.setAttribute(a,(dpi>1)?'images/secretpagepic10-426.jpg':'images/secretpagepic10-213.jpg');
var a='data-src';var e=document.querySelector('.js23');if(e.hasAttribute('src')){a='src';}e.setAttribute(a,(dpi>1)?'images/secretpagepic11-320.jpg':'images/secretpagepic11-160.jpg');
var a='data-src';var e=document.querySelector('.js24');if(e.hasAttribute('src')){a='src';}e.setAttribute(a,(dpi>1)?'images/secretpagepic12-426.jpg':'images/secretpagepic12-213.jpg');
var a='data-src';var e=document.querySelector('.js25');if(e.hasAttribute('src')){a='src';}e.setAttribute(a,(dpi>1)?'images/secretpagepic13-320.jpg':'images/secretpagepic13-160.jpg');
var a='data-src';var e=document.querySelector('.js26');if(e.hasAttribute('src')){a='src';}e.setAttribute(a,(dpi>1)?'images/secretpagepic14-320.jpg':'images/secretpagepic14-160.jpg');
var a='data-src';var e=document.querySelector('.js27');if(e.hasAttribute('src')){a='src';}e.setAttribute(a,(dpi>1)?'images/secretpagepic15-320.jpg':'images/secretpagepic15-160.jpg');
var e=document.querySelector('.js13');e.setAttribute('src',(dpi>1)?'images/secretpagepic1-640.jpg':'images/secretpagepic1-320.jpg');
var e=document.querySelector('.js14');e.setAttribute('src',(dpi>1)?'images/secretpagepic2-320.jpg':'images/secretpagepic2-160.jpg');
var e=document.querySelector('.js15');e.setAttribute('src',(dpi>1)?'images/secretpagepic3-320.jpg':'images/secretpagepic3-160.jpg');}}};
if(!window.HTMLPictureElement){$(window).resize(r);r();}
ldsrcset('.js43 source');ldsrcset('.js44 source');ldsrcset('.js45 source');ldsrcset('.js46 source');ldsrcset('.js47 source');ldsrcset('.js48 source');ldsrcset('.js49 source');ldsrcset('.js50 source');ldsrcset('.js51 source');ldsrcset('.js52 source');ldsrcset('.js53 source');ldsrcset('.js54 source');if(location.hash){var o=location.hash.replace('#',''),e=function(){if(document.body.getBoundingClientRect().top>0){var t=document.querySelectorAll('[name="'+o+'"]')[0];t&&t.scrollIntoView(!0),setTimeout(e,100)}};e()}
});