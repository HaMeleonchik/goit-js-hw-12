import{S as $,i as v,a as B}from"./assets/vendor-C61sVsxn.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const l of o.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&s(l)}).observe(document,{childList:!0,subtree:!0});function t(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerPolicy&&(o.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?o.credentials="include":e.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function s(e){if(e.ep)return;e.ep=!0;const o=t(e);fetch(e.href,o)}})();let H=new $(".gallery a",{captionsData:"alt",captionDelay:250});const L=document.querySelector(".loader"),f=document.querySelector(".gallery");function b(i){let r=i.map(({webformatURL:t,largeImageURL:s,tags:e,likes:o,views:l,comments:C,downloads:M})=>`
    <li class="gallery-item">
        <a class="gallery-link" href="${s}">
		    <img 
		      class="gallery-image" 
		      src="${t}" 
		      alt="${e}" 
	    	/>
            <div class="gallery-info">
        <div class="info-item">
            <h3 class="title">Likes</h3>
            <p class="text">${o}</p>
        </div>
        <div class="info-item">
            <h3 class="title">Views</h3>
            <p class="text">${l}</p>
        </div>
        <div class="info-item">
            <h3 class="title">Comments</h3>
            <p class="text">${C}</p>
        </div>
        <div class="info-item">
            <h3 class="title">Downloads</h3>
            <p class="text">${M}</p>
        </div>
    </div>
	</a>
    </li>
    `).join("");f.insertAdjacentHTML("beforeend",r),H.refresh()}function u(){f&&(f.innerHTML="")}function y(){v.show({titleColor:"white",backgroundColor:"red",message:"Sorry, there are no images matching your search query. Please try again!",messageColor:"white",maxWidth:"322",position:"topRight",iconUrl:"icon/error.svg"})}function g(){v.show({titleColor:"white",backgroundColor:"#FFA000",message:"We're sorry, but you've reached the end of search results.",messageColor:"white",position:"topRight",iconUrl:"icon/notification.svg",close:!1})}function w(){L.style.display="block"}function c(){L.style.display="none"}const d=document.querySelector(".btn-load-more");function F(){d&&(d.style.display="block")}function a(){d&&(d.style.display="none")}async function q(i,r=1){let t=await B("https://pixabay.com/api/",{params:{key:"29412071-9345ed042e2c0766a655100be",q:i,image_type:"photo",orientation:"horizontal",safesearch:!0,page:r,per_page:100}});return{hits:t.data.hits,totalHits:t.data.totalHits}}const S=document.querySelector(".form"),h=S.querySelector("input");h.required=!1;let m="",p=0,n=1;S.addEventListener("submit",I);function I(i){i.preventDefault(),w(),a(),u();const r=h.value.trim();if(r===""){y(),u(),c(),a();return}m=r,n=1,q(m).then(({hits:t,totalHits:s})=>{p=s,t.length===0?(y(),u(),a()):(b(t),x())}).catch(t=>console.log(t)).finally(()=>{c(),h.value=""})}const O=document.querySelector(".btn-load-more");O.addEventListener("click",k);async function k(){try{w(),a(),n+=1;const{hits:i}=await q(m,n);i.length===0||n*15>=p?(g(),c(),a()):(b(i),x());const t=document.querySelector(".gallery-item").getBoundingClientRect().height;window.scrollBy({left:0,top:t*2,behavior:"smooth"})}catch(i){console.log(i),g()}finally{c()}}function x(){n*15<p?F():a()}
//# sourceMappingURL=index.js.map
