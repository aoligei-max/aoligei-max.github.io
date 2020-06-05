"use strict";function _toConsumableArray(e){return _arrayWithoutHoles(e)||_iterableToArray(e)||_unsupportedIterableToArray(e)||_nonIterableSpread()}function _nonIterableSpread(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function _unsupportedIterableToArray(e,t){if(e){if("string"==typeof e)return _arrayLikeToArray(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?_arrayLikeToArray(e,t):void 0}}function _iterableToArray(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}function _arrayWithoutHoles(e){if(Array.isArray(e))return _arrayLikeToArray(e)}function _arrayLikeToArray(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}HTMLElement.prototype.wrap=function(e){this.parentNode.insertBefore(e,this),this.parentNode.removeChild(this),e.appendChild(this)},NexT.utils={wrapImageWithFancyBox:function(){document.querySelectorAll(".post-body :not(a) > img, .post-body > img").forEach(function(e){var t=$(e),r=t.attr("data-src")||t.attr("src"),n=t.wrap('<a class="fancybox fancybox.image" href="'.concat(r,'" itemscope itemtype="http://schema.org/ImageObject" itemprop="url"></a>')).parent("a");t.is(".post-gallery img")?n.attr("data-fancybox","gallery").attr("rel","gallery"):t.is(".group-picture img")?n.attr("data-fancybox","group").attr("rel","group"):n.attr("data-fancybox","default").attr("rel","default");var a=t.attr("title")||t.attr("alt");a&&(n.append('<p class="image-caption">'.concat(a,"</p>")),n.attr("title",a).attr("data-caption",a))}),$.fancybox.defaults.hash=!1,$(".fancybox").fancybox({loop:!0,helpers:{overlay:{locked:!1}}})},registerExtURL:function(){document.querySelectorAll("span.exturl").forEach(function(e){var t=document.createElement("a");t.href=decodeURIComponent(atob(e.dataset.url).split("").map(function(e){return"%"+("00"+e.charCodeAt(0).toString(16)).slice(-2)}).join("")),t.rel="noopener external nofollow noreferrer",t.target="_blank",t.className=e.className,t.title=e.title,t.innerHTML=e.innerHTML,e.parentNode.replaceChild(t,e)})},registerCopyCode:function(){document.querySelectorAll("figure.highlight").forEach(function(e){e.querySelectorAll(".code .line span").forEach(function(t){t.classList.forEach(function(e){t.classList.remove(e),t.classList.add("hljs-".concat(e))})}),e.insertAdjacentHTML("beforeend",'<div class="copy-btn"><i class="fa fa-clipboard fa-fw"></i></div>');var t=e.querySelector(".copy-btn");t.addEventListener("click",function(e){var t=e.currentTarget,r=_toConsumableArray(t.parentNode.querySelectorAll(".code .line")).map(function(e){return e.innerText}).join("\n"),n=document.createElement("textarea");n.style.top=window.scrollY+"px",n.style.position="absolute",n.style.opacity="0",n.readOnly=!0,n.value=r,document.body.append(n);var a=document.getSelection(),o=0<a.rangeCount&&a.getRangeAt(0);n.select(),n.setSelectionRange(0,r.length),n.readOnly=!1;var i=document.execCommand("copy");CONFIG.copycode.show_result&&(t.querySelector("i").className=i?"fa fa-check fa-fw":"fa fa-times fa-fw"),n.blur(),t.blur(),o&&(a.removeAllRanges(),a.addRange(o)),document.body.removeChild(n)}),t.addEventListener("mouseleave",function(e){setTimeout(function(){e.target.querySelector("i").className="fa fa-clipboard fa-fw"},300)})})},wrapTableWithBox:function(){document.querySelectorAll("table").forEach(function(e){var t=document.createElement("div");t.className="table-container",e.wrap(t)})},registerVideoIframe:function(){document.querySelectorAll("iframe").forEach(function(t){if(["www.youtube.com","player.vimeo.com","player.youku.com","player.bilibili.com","www.tudou.com"].some(function(e){return t.src.includes(e)})&&!t.parentNode.matches(".video-container")){var e=document.createElement("div");e.className="video-container",t.wrap(e);var r=Number(t.width),n=Number(t.height);r&&n&&(t.parentNode.style.paddingTop=n/r*100+"%")}})},registerScrollPercent:function(){var a=document.querySelector(".back-to-top"),o=document.querySelector(".reading-progress-bar");window.addEventListener("scroll",function(){if(a||o){var e=document.querySelector(".container").offsetHeight,t=window.innerHeight,r=t<e?e-t:document.body.scrollHeight-t,n=Math.min(100*window.scrollY/r,100);a&&(a.classList.toggle("back-to-top-on",50<window.scrollY),a.querySelector("span").innerText=Math.round(n)+"%"),o&&(o.style.width=n.toFixed(2)+"%")}}),a&&a.addEventListener("click",function(){window.anime({targets:document.scrollingElement,duration:500,easing:"linear",scrollTop:0})})},registerTabsTag:function(){document.querySelectorAll(".tabs ul.nav-tabs .tab").forEach(function(e){e.addEventListener("click",function(e){e.preventDefault();var t=e.currentTarget;if(!t.classList.contains("active")){_toConsumableArray(t.parentNode.children).forEach(function(e){e.classList.remove("active")}),t.classList.add("active");var r=document.getElementById(t.querySelector("a").getAttribute("href").replace("#",""));_toConsumableArray(r.parentNode.children).forEach(function(e){e.classList.remove("active")}),r.classList.add("active"),r.dispatchEvent(new Event("tabs:click",{bubbles:!0}))}})}),window.dispatchEvent(new Event("tabs:register"))},registerCanIUseTag:function(){window.addEventListener("message",function(e){var t=e.data;if("string"==typeof t&&t.includes("ciu_embed")){var r=t.split(":")[1],n=t.split(":")[2];document.querySelector("iframe[data-feature=".concat(r,"]")).style.height=parseInt(n,10)+5+"px"}},!1)},registerActiveMenuItem:function(){document.querySelectorAll(".menu-item").forEach(function(e){var t=e.querySelector("a[href]");if(t){var r=t.pathname===location.pathname||t.pathname===location.pathname.replace("index.html",""),n=!CONFIG.root.startsWith(t.pathname)&&location.pathname.startsWith(t.pathname);e.classList.toggle("menu-item-active",t.hostname===location.hostname&&(r||n))}})},registerLangSelect:function(){var r=document.querySelector(".lang-select");r&&(r.value=CONFIG.page.lang,r.addEventListener("change",function(){var e=r.options[r.selectedIndex];document.querySelector(".lang-select-label span").innerText=e.text;var t=e.dataset.href;window.pjax?window.pjax.loadUrl(t):window.location.href=t}))},registerSidebarTOC:function(){var i=document.querySelectorAll(".post-toc li"),c=_toConsumableArray(i).map(function(e){var t=e.querySelector("a.nav-link");return t.addEventListener("click",function(e){e.preventDefault();var t=document.getElementById(e.currentTarget.getAttribute("href").replace("#","")).getBoundingClientRect().top+window.scrollY;window.anime({targets:document.scrollingElement,duration:500,easing:"linear",scrollTop:t+10})}),document.getElementById(t.getAttribute("href").replace("#",""))}),l=document.querySelector(".post-toc-wrap");!function a(o){o=Math.floor(o+1e4);var t=new IntersectionObserver(function(e,t){var r=document.documentElement.scrollHeight+100;if(o<r)return t.disconnect(),void a(r);var n=function(e){var t=0,r=e[t];if(0<r.boundingClientRect.top)return 0===(t=c.indexOf(r.target))?0:t-1;for(;t<e.length;t++){if(!(e[t].boundingClientRect.top<=0))return c.indexOf(r.target);r=e[t]}return c.indexOf(r.target)}(e);!function(e){if(!e.classList.contains("active-current")){document.querySelectorAll(".post-toc .active").forEach(function(e){e.classList.remove("active","active-current")}),e.classList.add("active","active-current");for(var t=e.parentNode;!t.matches(".post-toc");)t.matches("li")&&t.classList.add("active"),t=t.parentNode;window.anime({targets:l,duration:200,easing:"linear",scrollTop:l.scrollTop-l.offsetHeight/2+e.getBoundingClientRect().top-l.getBoundingClientRect().top})}}(i[n])},{rootMargin:o+"px 0px -100% 0px",threshold:0});c.forEach(function(e){e&&t.observe(e)})}(document.documentElement.scrollHeight)},hasMobileUA:function(){var e=navigator.userAgent;return/iPad|iPhone|Android|Opera Mini|BlackBerry|webOS|UCWEB|Blazer|PSP|IEMobile|Symbian/g.test(e)},isTablet:function(){return window.screen.width<992&&767<window.screen.width&&this.hasMobileUA()},isMobile:function(){return window.screen.width<767&&this.hasMobileUA()},isDesktop:function(){return!this.isTablet()&&!this.isMobile()},supportsPDFs:function(){var e=navigator.userAgent,t=e.includes("irefox")&&18<parseInt(e.split("rv:")[1].split(".")[0],10),r=void 0!==navigator.mimeTypes["application/pdf"],n=/iphone|ipad|ipod/i.test(e.toLowerCase());return t||r&&!n},initSidebarDimension:function(){var e=document.querySelector(".sidebar-nav"),t="none"!==e.style.display?e.offsetHeight:0,r=CONFIG.sidebar.offset||12,n=CONFIG.back2top.enable&&CONFIG.back2top.sidebar?document.querySelector(".back-to-top").offsetHeight:0,a=2*CONFIG.sidebar.padding+t+n;"Pisces"!==CONFIG.scheme&&"Gemini"!==CONFIG.scheme||(a+=2*r-22);var o=document.body.offsetHeight-a+"px";document.querySelector(".site-overview-wrap").style.maxHeight=o,document.querySelector(".post-toc-wrap").style.maxHeight=o},updateSidebarPosition:function(){var e=document.querySelector(".sidebar-nav"),t=document.querySelector(".post-toc");if(t?(e.style.display="",e.classList.add("motion-element"),document.querySelector(".sidebar-nav-toc").click()):(e.style.display="none",e.classList.remove("motion-element"),document.querySelector(".sidebar-nav-overview").click()),NexT.utils.initSidebarDimension(),this.isDesktop()&&"Pisces"!==CONFIG.scheme&&"Gemini"!==CONFIG.scheme){var r=CONFIG.page.sidebar;"boolean"!=typeof r&&(r="always"===CONFIG.sidebar.display||"post"===CONFIG.sidebar.display&&t),r&&window.dispatchEvent(new Event("sidebar:show"))}},getScript:function(e,r,t){if(t)r();else{var n=document.createElement("script");n.onload=n.onreadystatechange=function(e,t){!t&&n.readyState&&!/loaded|complete/.test(n.readyState)||(n.onload=n.onreadystatechange=null,n=void 0,!t&&r&&setTimeout(r,0))},n.src=e,document.head.appendChild(n)}},loadComments:function(e,r){if(CONFIG.comments.lazyload&&e){var t=new IntersectionObserver(function(e,t){e[0].isIntersecting&&(r(),t.disconnect())});return t.observe(e),t}r()}};