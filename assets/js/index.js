function _classCallCheck(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function _defineProperties(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}function _createClass(t,e,n){return e&&_defineProperties(t.prototype,e),n&&_defineProperties(t,n),Object.defineProperty(t,"prototype",{writable:!1}),t}var Theme=function(){function t(){_classCallCheck(this,t),this.spacer=[],this.server="https://api.npoint.io/",this.data={},this.breakpoint={xxs:320,xs:414,sm:576,md:768,lg:992,xl:1200,xxl:1440,xxxl:1600},this.elements={contentPage:document.querySelector(".content-page"),header:document.querySelector(".header"),footer:document.querySelector(".footer"),navigation:document.querySelector(".header .navigation-menu")}}return _createClass(t,[{key:"baseConfig",value:function(){for(var t,e=1;e<=10;e++)this.spacer.push(t=void 0===t?2:t+t)}},{key:"navigation",value:function(){var t=this.elements,e=t.header;t.navigation.querySelectorAll("ul:first-child a").forEach(function(i){i.addEventListener("click",function(t){var e=i.getAttribute("href"),n=parseInt(i.getAttribute("data-offset-top"))||0,e=document.querySelector(e);e&&(t.preventDefault(),n=e.getBoundingClientRect().top+window.scrollY-n,document.documentElement.velocity({scrollTop:n+"px"},{duration:400}))})}),window.addEventListener("scroll",function(){detectMobile.isMobile||e.classList.toggle("has-background",window.scrollY>e.offsetHeight)})}},{key:"appearanceOnTime",value:function(){var t,e=document.documentElement,n=document.getElementById("mode-toggle");n.addEventListener("change",function(){e.classList.toggle("dark-mode")}),t=18<=(new Date).getHours()||(new Date).getHours()<6,e.classList.toggle("dark-mode",t),n.checked=!t}},{key:"animation",value:function(){var n=this,t=!(0<arguments.length&&void 0!==arguments[0])||arguments[0];this.animation.human=function(){var t=!(0<arguments.length&&void 0!==arguments[0])||arguments[0],e=document.getElementById("boy");t?e.velocity({transform:["translate(0, 0)","translate(10, ".concat(32,")")]},2500).velocity({transform:["translate(10, ".concat(32,")"),"translate(0, 0)"]},4e3,n.animation.human):e.velocity("stop")},this.animation.trees=function(){var t=!(0<arguments.length&&void 0!==arguments[0])||arguments[0],e=document.getElementById("trees");t?e.velocity({transform:["translate(0, 0)","translate(".concat(24,", ").concat(12,")")]},3500).velocity({transform:["translate(".concat(24,", ").concat(12,")"),"translate(0, 0)"]},5e3,n.animation.trees):e.velocity("stop")},this.animation.lightShape=function(){var t=!(0<arguments.length&&void 0!==arguments[0])||arguments[0],e=document.getElementById("light-shape");t?e.velocity({transform:["scale(1)","scale(".concat(1.04,")")]},3500).velocity({transform:["scale(".concat(1.04,")"),"scale(1)"]},5e3,n.animation.lightShape):e.velocity("stop")},this.animation.profile=function(){var t=!(0<arguments.length&&void 0!==arguments[0])||arguments[0],e=document.getElementById("DESIGNERDEVELOPER");t?e.velocity({opacity:.1},{loop:!0}):e.velocity("stop")},this.animation.handShake=function(){function t(){e.animate({transform:"r-2, ".concat(n.cx,", ").concat(n.y2)},500)}var e=Snap.select("#Hand"),n=e.getBBox(),i=!0;t(),setInterval(function(){i=i?(e.animate({transform:"r8, ".concat(n.cx,", ").concat(n.y2)},500),!1):(t(),!0)},500)},this.animation.human(t),this.animation.trees(t),this.animation.lightShape(t),this.animation.profile(t),this.animation.handShake(t)}},{key:"testimonialSwiper",value:function(){new Swiper(".section-testimonials .swiper-container",{mousewheel:!0,keyboard:!0,parallax:!0,grabCursor:!0,loop:!0,speed:600,pagination:{el:".swiper-pagination",clickable:!0}})}},{key:"workSwiper",value:function(){var n=this;window.innerWidth<=this.breakpoint.sm&&!this.listView&&document.querySelectorAll(".section-work .item").forEach(function(t,e){t.style.maxWidth=window.innerWidth-n.spacer[6]-n.spacer[5]+"px"});var t=document.querySelectorAll(".section-work .navigation-tabs ul a"),e=document.querySelectorAll(".section-work .navigation-tabs .switch-view a"),i=document.querySelector('.section-work .navigation-tabs .switch-view a[action="grid"]'),o=document.querySelector('.section-work .navigation-tabs .switch-view a[action="list"]'),a=document.querySelectorAll(".section-work .navigation-tabs li"),c=(document.querySelectorAll(".section-work .slide-button-prev"),document.querySelectorAll(".section-work .slide-button-next"),document.querySelectorAll(".section-work .swiper-container")),r=document.querySelectorAll(".section-work .swiper-container .slide-wrapper"),s=document.querySelectorAll(".section-work .swiper-container .slide-wrapper .item"),l=document.querySelector(".section-work .section-title"),d={slidesPerView:"auto",slidesOffsetBefore:l.getBoundingClientRect().left,slidesOffsetAfter:l.getBoundingClientRect().left,keyboard:!0,parallax:!0,pagination:{},navigation:{nextEl:".slide-button-next",prevEl:".slide-button-prev"},breakpoints:{576:{spaceBetween:32},320:{spaceBetween:16}}},u=new Swiper(".section-work .swiper-container",d);i.addEventListener("click",function(t){t.preventDefault();t=t.currentTarget;e.forEach(function(t,e){return t.classList.remove("active")}),t.classList.add("active"),c.forEach(function(t,e){t.querySelector(".swiper-controls").style.display="block",t.classList.remove("container")}),r.forEach(function(t,e){return t.classList.remove("row")}),s.forEach(function(t,e){return t.classList.remove("col-md-6")}),u=new Swiper(".section-work .swiper-container",d)}),o.addEventListener("click",function(t){t.preventDefault();t=t.currentTarget;e.forEach(function(t,e){return t.classList.remove("active")}),u.forEach(function(t,e){t.destroy()}),t.classList.add("active"),a.forEach(function(t,e){var n;"active"==t.classList[0]&&(n=t.children[0].getAttribute("data-tab-target").substring(1),c.forEach(function(t,e){t.getAttribute("id")!=n&&(t.style.display="none"),t.querySelector(".swiper-controls").style.display="none",t.classList.add("container"),r.forEach(function(t,e){return t.classList.add("row")}),s.forEach(function(t,e){return t.classList.add("col-md-6")})}))})}),t.forEach(function(t,e){t.addEventListener("click",function(t){t.preventDefault();var e=t.currentTarget,n=e.parentNode.parentNode,t=e.parentNode,e=e.getAttribute("data-tab-target"),i=document.querySelector(e),e=document.querySelectorAll(".section-work .swiper-container");a.forEach(function(t,e){return t.classList.remove("active")}),t.classList.add("active"),e.forEach(function(t,e){"none"!==getComputedStyle(t,null).display&&t.velocity({opacity:0},200,function(){t.style.display="none"})}),i.velocity({opacity:1},200,function(){i.style.display="block",n.querySelectorAll("li").forEach(function(t,e){t.classList.contains("active")&&u[e].update()})})})}),trigger(o,"click")}},{key:"photoswipeInit",value:function(t,n,i,o){function a(t,e){return"featured"===(t=t.replace("category-",""))?function(n){var i,o=[];for(i in n)n[i].data.forEach(function(t,e){e=n[i].data[e].featured;"boolean"==typeof e&&e&&o.push(t)});return o}(e):e[t].data}var e,c=document.querySelector(".pswp"),r=document.querySelector(t).querySelectorAll(n);(e=window.location.hash.substring(1)).includes("gid")&&e.includes("pid")&&(e=(t=e.split("&").slice(1,3))[0].substring(4),t=t[1].substring(4),t={arrowEl:!0,bgOpacity:.8,index:parseInt(t.split("-").pop()),galleryUID:e},new PhotoSwipe(c,PhotoSwipeUI_Default,a(e,o),t).init());r.forEach(function(t,e){t.querySelectorAll(i).forEach(function(t,e){t.onclick=function(t){!function(t){t.preventDefault();var i=t.currentTarget,e=i.closest(n).getAttribute("id"),t={arrowEl:!0,bgOpacity:.8,index:parseInt(i.getAttribute("data-img-index")),galleryUID:e,getThumbBoundsFn:function(t){var e=window.pageYOffset||document.documentElement.scrollTop,n=i.getBoundingClientRect();return{x:n.left,y:n.top+e,w:n.width}}};new PhotoSwipe(c,PhotoSwipeUI_Default,a(e,o),t).init()}(t)}})})}},{key:"loading",value:function(){var t,e=0<arguments.length&&void 0!==arguments[0]?arguments[0]:1e3,n=1<arguments.length&&void 0!==arguments[1]?arguments[1]:"Loading...",n='\n\t\t\t<div class="page-loader">\n\t\t\t\t<div class="loader-content"><img class="logo-img" src="'.concat(2<arguments.length&&void 0!==arguments[2]?arguments[2]:"assets/images/logo.svg",'"/>\n\t\t\t\t\t<div class="page-loader-title mt-2">').concat(n,"</div>\n\t\t\t\t</div>\n\t\t\t</div>");document.body.style.overflow="hidden",document.body.style.display="",document.body.style.backgroundColor="",document.body.insertAdjacentHTML("beforeend",n),t=document.body.querySelector(".page-loader"),setTimeout(function(){document.body.style.overflow="",t.classList.add("move2Left","animated")},e)}},{key:"mobileResponsive",value:function(){var t,e=document.querySelector(".section-banner"),n=e.querySelector(".row"),i=e.querySelector(".content-bg"),o=e.querySelector(".content-text"),e=e.querySelector("svg");detectMobile.isMobile?(document.body.classList.add("is-mobile"),document.body.style.paddingBottom=this.elements.header.offsetHeight+"px",this.animation(!1)):this.animation(),window.innerWidth>=this.breakpoint.lg&&(n.style.height=_getHeight(e)+"px"),window.innerWidth>=this.breakpoint.md&&window.innerWidth<this.breakpoint.lg&&(n=parseInt(_getWidth(e)+this.spacer[4]),e.setAttribute("width","".concat(n,"px")),e.setAttribute("viewBox","0 0 ".concat(n," 1093")),e.style.transform="translate(-164px, -".concat(320,"px)"),o.style.marginTop="".concat(this.spacer[5],"px"),i.style.height="".concat(_getHeight(e)-320,"px")),window.innerWidth>=this.breakpoint.sm&&window.innerWidth<this.breakpoint.md&&(t=parseInt(window.innerWidth+this.spacer[5]+480),e.setAttribute("width","".concat(t,"px")),e.setAttribute("height","".concat(800,"px")),e.setAttribute("viewBox","0 0 ".concat(t," ").concat(800)),e.style.transform="translateX(-184px)",o.style.marginTop="".concat(this.spacer[5],"px"),e.style.marginTop="-".concat(this.spacer[7]+this.spacer[5],"px")),window.innerWidth>=this.breakpoint.xxs&&window.innerWidth<this.breakpoint.sm&&(t=parseInt(window.innerWidth+this.spacer[5]+480),e.setAttribute("width","".concat(t,"px")),e.setAttribute("height","".concat(800,"px")),e.setAttribute("viewBox","0 0 ".concat(1200," ",800)),e.style.transform="translateX(-184px)",o.style.marginTop="".concat(this.spacer[5],"px"),e.style.marginTop="-".concat(this.spacer[7]+this.spacer[5],"px"))}},{key:"fetchData",value:function(){var e=this;fetch(this.server+"df2e5675f00bc58b57ca").then(function(t){return t.json()}).then(function(t){e.data=t,e.data.profile=t.profile.sort(function(t,e){return t.index-e.index}),document.getElementById("section-banner-description").textContent=e.data.introduce.description,new Typewriter("#section-banner-title",{loop:!0,delay:75}).pauseFor(1800).typeString(e.data.introduce.title.text_2).pauseFor(100).deleteChars(e.data.introduce.title.text_2.length).typeString(e.data.introduce.title.text_3).pauseFor(1e3).start(),e.data.profile.forEach(function(t,e){var n="";t.activated&&(n="dob"==t.type?'\n\t\t\t\t\t\t\t<li>\n\t\t\t\t\t\t\t\t<div class="title">'.concat(t.label,"</div>\n\t\t\t\t\t\t\t\t<span>").concat(t.value,' &nbsp;</span>\n\t\t\t\t\t\t\t\t<i style="color: var(--fg-main);">\n\t\t\t\t\t\t\t\t\t(age ').concat((new Date).getFullYear()-t.birthYear,")\n\t\t\t\t\t\t\t\t</i>\n\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t"):"email"==t.type?'\n\t\t\t\t\t\t\t<li data-type="email">\n\t\t\t\t\t\t\t\t<div class="title">'.concat(t.label,'</div>\n\t\t\t\t\t\t\t\t<div class="content">\n\t\t\t\t\t\t\t\t\t<a class= href="mailto:').concat(t.value,'">').concat(t.value,'</a>\n\t\t\t\t\t\t\t\t\t<i class="').concat(null!=t.iconClassName?t.iconClassName:"",'" style="color: ').concat(null!=t.textColor?t.textColor:" ",';"></i>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t'):"phone"==t.type?'\n\t\t\t\t\t\t\t<li data-type="phone">\n\t\t\t\t\t\t\t\t<div class="title">'.concat(t.label,'</div>\n\t\t\t\t\t\t\t\t<div class="content">\n\t\t\t\t\t\t\t\t\t<a class= href="mailto:').concat(t.value,'">').concat(t.value,'</a>\n\t\t\t\t\t\t\t\t\t<i class="').concat(null!=t.iconClassName?t.iconClassName:"",'" style="color: ').concat(null!=t.textColor?t.textColor:" ",';"></i>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t'):"social"==t.type?'\n\t\t\t\t\t\t\t<li data-type="social">\n\t\t\t\t\t\t\t\t<div class="title">'.concat(t.label,'</div>\n\t\t\t\t\t\t\t\t<div class="content">\n\t\t\t\t\t\t\t\t\t<a href="').concat(t.href,'">').concat(t.value,'</a>\n\t\t\t\t\t\t\t\t\t<i class="').concat(null!=t.iconClassName?t.iconClassName:"",'" style="color: ').concat(null!=t.textColor?t.textColor:" ",';"></i>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t'):"exp"==t.type?'\n\t\t\t\t\t\t\t<li>\n\t\t\t\t\t\t\t\t<div class="title">'.concat(t.label,"</div>\n\t\t\t\t\t\t\t\t<span>\n\t\t\t\t\t\t\t\t\t").concat((new Date).getFullYear()-1-t.value,'\n\t\t\t\t\t\t\t\t\t&nbsp;yrs+ &nbsp;<i style="color: var(--fg-subtlest);">(').concat(t.value," - Present)</i>\n\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t"):"personality"==t.type?'\n\t\t\t\t\t\t\t<li class="align-items-center"><div class="personality-progress"><div class="label"><span><b>Introvert </b>('.concat(t.value,')</span><span><b>Extrovert</b></span></div><div class="holder"><div class="tracker"></div><span class="emoji">').concat(t.emoji,"</span></div></div></li>\n\t\t\t\t\t\t"):'\n\t\t\t\t\t\t\t<li>\n\t\t\t\t\t\t\t\t<div class="title">'.concat(t.label,"</div>\n\t\t\t\t\t\t\t\t<span>").concat(t.value,"</span>\n\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t"),document.getElementById("section-profile-content").insertAdjacentHTML("beforeend",n))}),e.data.testimonial.forEach(function(t,e){return document.getElementById("section-testimonials-content").insertAdjacentHTML("beforeend",'\n\t\t\t\t\t<div class=swiper-slide>\n\t\t\t\t\t\t<i class="icon-quotes ri-double-quotes-l" style="color: var(--fg-decor);"></i>\n\t\t\t\t\t\t<div class=testimonials-description>'.concat(t.message,"</div>\n\t\t\t\t\t\t<div class=testimonials-author-content>\n\t\t\t\t\t\t\t<div class=testimonials-author-content-left>\n\t\t\t\t\t\t\t\t<img class=testimonials-author-avatar src=").concat(t.avatar," alt=").concat(t.author,">\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class=testimonials-author-content-right>\n\t\t\t\t\t\t\t\t<div class=testimonials-author-name>\n\t\t\t\t\t\t\t\t\t").concat(t.author,'\n\t\t\t\t\t\t\t\t\t<a href="').concat(t.linkedin,'">\n\t\t\t\t\t\t\t\t\t\t<i class=ri-linkedin-box-fill></i>\n\t\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<div class=testimonials-author-role>').concat(t.role,"</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>"))}),new Typewriter("#section-footer-description",{loop:!0,delay:75,cursor:"",deleteSpeed:"fast"}).typeString(e.data.footer.text_1).deleteChars(e.data.footer.text_1.length-3).typeString(e.data.footer.text_2).deleteChars(e.data.footer.text_2.length-3).pauseFor(100).start()}).catch(function(t){return console.error(t)})}},{key:"init",value:function(){this.baseConfig(),this.navigation(),this.loading(),this.fetchData(),this.mobileResponsive()}}]),t}();
//# sourceMappingURL=index.js.map
