import{S as $,i as m,a as B}from"./assets/vendor-C61sVsxn.js";(function(){const i=document.createElement("link").relList;if(i&&i.supports&&i.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const a of o.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&s(a)}).observe(document,{childList:!0,subtree:!0});function t(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerPolicy&&(o.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?o.credentials="include":e.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function s(e){if(e.ep)return;e.ep=!0;const o=t(e);fetch(e.href,o)}})();let H=new $(".gallery a",{captionsData:"alt",captionDelay:250});const y=document.querySelector(".loader"),u=document.querySelector(".gallery");function g(r){let i=r.map(({webformatURL:t,largeImageURL:s,tags:e,likes:o,views:a,comments:C,downloads:M})=>`
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
            <p class="text">${a}</p>
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
    `).join("");u.insertAdjacentHTML("beforeend",i),H.refresh()}function d(){u&&(u.innerHTML="")}function h(){m.show({titleColor:"white",backgroundColor:"red",message:"Sorry, there are no images matching your search query. Please try again!",messageColor:"white",maxWidth:"322",position:"topRight",iconUrl:"icon/error.svg"})}function p(){m.show({titleColor:"white",backgroundColor:"#FFA000",message:"We're sorry, but you've reached the end of search results.",messageColor:"white",position:"topRight",iconUrl:"icon/notification.svg",close:!1})}function v(){y.style.display="block"}function c(){y.style.display="none"}const L=document.querySelector(".btn-load-more");function b(){L.style.display="block"}function l(){L.style.display="none"}async function w(r,i=1){let t=await B("https://pixabay.com/api/",{params:{key:"29412071-9345ed042e2c0766a655100be",q:r,image_type:"photo",orientation:"horizontal",safesearch:!0,page:i,per_page:15}});return{hits:t.data.hits,totalHits:t.data.totalHits}}const q=document.querySelector(".form"),f=q.querySelector("input");f.required=!1;let S="",x=0,n=1;q.addEventListener("submit",F);function F(r){r.preventDefault(),v(),l(),d();const i=f.value.trim();if(i===""){h(),d(),c(),l();return}S=i,n=1,w(i).then(({hits:t,totalHits:s})=>{x=s,t.length===0?(h(),d(),l()):(g(t),b())}).catch(t=>console.log(t)).finally(()=>{c(),f.value=""})}const O=document.querySelector(".btn-load-more");O.addEventListener("click",P);async function P(){try{v(),l(),n+=1;const{hits:r}=await w(S,n);r.length===0||n*15>=x?(p(),c()):(g(r),b());const t=document.querySelector(".gallery-item").getBoundingClientRect().height;window.scrollBy({left:0,top:t*2,behavior:"smooth"})}catch(r){console.log(r),p()}finally{c()}}
//# sourceMappingURL=index.js.map
