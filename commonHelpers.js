import{S as v}from"./assets/vendor-7752c8a4.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))d(o);new MutationObserver(o=>{for(const n of o)if(n.type==="childList")for(const p of n.addedNodes)p.tagName==="LINK"&&p.rel==="modulepreload"&&d(p)}).observe(document,{childList:!0,subtree:!0});function c(o){const n={};return o.integrity&&(n.integrity=o.integrity),o.referrerPolicy&&(n.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?n.credentials="include":o.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function d(o){if(o.ep)return;o.ep=!0;const n=c(o);fetch(o.href,n)}})();function L(){const u=document.querySelector("body"),s=document.querySelectorAll(".popupw-link"),c=document.querySelectorAll(".lock-padding"),d=document.querySelectorAll(".popupw");let o=!0,n=null;const p=800;if(s.length>0)for(let e=0;e<s.length;e++){const t=s[e];t.style.pointerEvents="auto",t.addEventListener("click",function(r){r.preventDefault();const f=t.getAttribute("data-popup"),i=t.getAttribute("data-video-src"),l=t.getAttribute("data-video-type"),w=document.getElementById(f);y(w,i,l)})}if(d.length>0)for(let e=0;e<d.length;e++){const t=d[e];setTimeout(function(){t.style.visibility="visible"},1500)}const m=document.querySelectorAll("[data-close]");if(m.length>0)for(let e=0;e<m.length;e++){const t=m[e];t.addEventListener("click",function(r){a(t.closest(".popupw")),r.preventDefault()})}function y(e,t=null,r="youtube"){if(e&&o){const f=document.querySelector(".popupw.open");if(n=e.querySelector("[data-popup-youtube-place]"),f?a(f,!1):g(),r&&t!==null){if(n.classList.add("video-active"),r==="video"){let i=document.createElement("video");i.className="videoframe",i.src=t,i.autoplay=!0,i.muted=!1,i.controls=!0,i.volume=.7,i.height=400,i.width=700,n.appendChild(i),i.paused&&i.play(),i.addEventListener("canplay",l=>{setTimeout(function(){n.classList.add("on-play")},1e3)}),console.log("video-added")}if(r=="youtube"){let i=`${t}?rel=0&showinfo=0&autoplay=1`,l=document.createElement("iframe");l.className="videoframe",l.width="560",l.height="315",l.setAttribute("allowfullscreen",""),l.setAttribute("allow","autoplay; encrypted-media"),l.setAttribute("src",i),n&&n.appendChild(l)}}e.classList.add("open"),e.addEventListener("click",function(i){i.target.closest(".popupw__content")||a(i.target.closest(".popupw"))})}}function a(e,t=!0){e&&o&&e.classList.contains("open")&&(e.classList.remove("open"),t&&h(),n&&(n.classList.remove("video-active","on-play"),n.innerHTML="",n=null))}function g(){let e=window.innerWidth-u.offsetWidth;if(c.length>0)for(let t=0;t<c.length;t++){const r=c[t];r.style.paddingRight=e+"px"}u.style.paddingRight=e+"px",u.classList.add("lock","popupw-show"),o=!1,setTimeout(function(){o=!0},p)}function h(){setTimeout(function(){if(c.length>0)for(let e=0;e<c.length;e++){const t=c[e];t.style.paddingRight=0}u.style.paddingRight=0,u.classList.remove("lock","popupw-show")},p),o=!1,setTimeout(function(){o=!0},p)}document.addEventListener("keydown",function(e){if(e.which===27){const t=document.querySelector(".popupw.open");a(t)}})}window.addEventListener("load",L);new v(".swiper",{speed:1e3,slidesPerView:1,spaceBetween:20,mousewheel:{invert:!1,sensitivity:1},pagination:{el:".slider-1 .swiper-pagination",clickable:!0,renderBullet:function(u,s){return'<li class="'+s+'"></li>'}},autoplay:{delay:4e3},navigation:{nextEl:".slider-1 .swiper-button-next",prevEl:".slider-1 .swiper-button-prev"},breakpoints:{768:{slidesPerView:2,spaceBetween:30},1158:{slidesPerView:3,spaceBetween:40}}});
//# sourceMappingURL=commonHelpers.js.map
