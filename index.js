import{S as $,i as v,a as B}from"./assets/vendor-C61sVsxn.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const l of o.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&a(l)}).observe(document,{childList:!0,subtree:!0});function t(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerPolicy&&(o.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?o.credentials="include":e.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function a(e){if(e.ep)return;e.ep=!0;const o=t(e);fetch(e.href,o)}})();let H=new $(".gallery a",{captionsData:"alt",captionDelay:250});const L=document.querySelector(".loader"),f=document.querySelector(".gallery");function b(i){let r=i.map(({webformatURL:t,largeImageURL:a,tags:e,likes:o,views:l,comments:C,downloads:M})=>`
    <li class="gallery-item">
        <a class="gallery-link" href="${a}">
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
    `).join("");f.insertAdjacentHTML("beforeend",r),H.refresh()}function d(){f&&(f.innerHTML="")}function g(){v.show({titleColor:"white",backgroundColor:"red",message:"Sorry, there are no images matching your search query. Please try again!",messageColor:"white",maxWidth:"322",position:"topRight",iconUrl:"icon/error.svg"})}function u(){v.show({titleColor:"white",backgroundColor:"#FFA000",message:"We're sorry, but you've reached the end of search results.",messageColor:"white",position:"topRight",iconUrl:"icon/notification.svg",close:!1})}function w(){L.style.display="block"}function h(){L.style.display="none"}const c=document.querySelector(".btn-load-more");function q(){c&&(c.style.display="block")}function s(){c&&(c.style.display="none")}async function S(i,r=1){let t=await B("https://pixabay.com/api/",{params:{key:"29412071-9345ed042e2c0766a655100be",q:i,image_type:"photo",orientation:"horizontal",safesearch:!0,page:r,per_page:15}});return{hits:t.data.hits,totalHits:t.data.totalHits}}const x=document.querySelector(".form"),m=x.querySelector("input");m.required=!1;let p="",y=0,n=1;x.addEventListener("submit",F);function F(i){i.preventDefault(),w(),s(),d();const r=m.value.trim();if(r===""){g(),d(),h(),s();return}p=r,n=1,S(p).then(({hits:t,totalHits:a})=>{y=a,t.length===0?(g(),d(),s()):(b(t),k())}).catch(t=>console.log(t)).finally(()=>{h(),m.value=""})}const I=document.querySelector(".btn-load-more");I.addEventListener("click",O);async function O(){try{w(),s(),n+=1;const{hits:i}=await S(p,n);if(i.length===0){u(),s();return}b(i),n*15>=y?u():q();const t=document.querySelector(".gallery-item").getBoundingClientRect().height;window.scrollBy({left:0,top:t*2,behavior:"smooth"})}catch(i){console.log(i),u()}finally{h()}}function k(){n*15<y?q():s()}
//# sourceMappingURL=index.js.map
