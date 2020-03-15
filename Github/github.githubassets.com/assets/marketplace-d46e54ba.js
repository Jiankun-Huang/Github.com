System.register(["./frameworks.js","./vendor.js"],(function(){"use strict";var e,t,n,a,s,r,o,l,c,i,d,m;return{setters:[function(d){e=d.e,t=d.i,n=d.ao,a=d.c,s=d.q,r=d.g,o=d.r,l=d.X,c=d.a,i=d.d},function(e){d=e.o,m=e.a}],execute:function(){function p(e){const t=a(e,".js-marketplace-listing-form-container");s(t,".js-marketplace-listing-error-container").classList.remove("visible")}function u(e,t){const n=a(e,".js-marketplace-listing-form-container"),r=s(n,".js-marketplace-listing-error-container");r.classList.add("visible"),s(r,".js-marketplace-listing-error").textContent=t}function f(e){const t=e.querySelector(".js-marketplace-listing-save-notice");t&&(t.classList.add("visible"),setTimeout(()=>t.classList.remove("visible"),1500))}function g(e,t){const n=a(e,".js-marketplace-listing-form-container").querySelectorAll(".js-marketplace-listing-bgcolor");for(const a of n)a instanceof HTMLElement&&(a.style.backgroundColor=`#${t}`)}function j(e){const t=document.querySelector(".js-hero-listing-container .js-hero-listing-bgcolor");t instanceof HTMLElement&&(t.style.backgroundColor=`#${e}`)}function k(e,t,n){const r=a(n,".js-listing-characters-remaining-container"),o=s(r,".js-listing-characters-remaining"),c=String(o.getAttribute("data-suffix")),i=t-l(e);o.textContent=`${i} ${c}`,o.classList.toggle("text-red",i<=5)}function L(e){const t=e.item,n=s(t,".js-marketplace-listing-screenshot-resequence-form",HTMLFormElement),a=n.elements.namedItem("marketplace_listing_screenshot[previousScreenshotId]"),l=t.previousElementSibling;l instanceof HTMLElement?a.value=r(l,"data-screenshot-id"):a.value="",o(n)}function h(e){return["FLAT_RATE","PER_UNIT"].includes(e)}function v(e){return"PER_UNIT"===e}function T(e,t){for(const n of e)n.disabled=!t}function y(e){const t=document.querySelectorAll(".js-discounted-pricing");if(t.length>0){const n=e.hasAttribute("data-discounts-enabled"),a=document.querySelectorAll(".js-original-pricing");for(const e of t)e instanceof HTMLElement&&(e.hidden=!n);for(const e of a)e instanceof HTMLElement&&(e.hidden=n)}}async function b(e){const t=e.target,n=parseInt(t.value,10).toFixed(),a=r(t,"data-url"),o=new URL(a,window.location.origin),l=new URLSearchParams(o.search.slice(1));l.set("quantity",n),o.search=l.toString();const c=await i(document,o.toString()),d=s(document,".js-marketplace-order-preview");d.innerHTML="",d.appendChild(c)}e(".js-marketplace-short-description-field",(function(e){const t=e.target,n=a(t,".form-group");t.validity.patternMismatch?n.classList.add("errored"):n.classList.remove("errored")})),d("click",".js-marketplace-error-dismiss",(function(e){p(e.currentTarget)})),d("change",".js-marketplace-listing-light-text",(function(e){!function(e){const t=document.querySelector(".js-hero-listing-name");t&&("true"===e?(t.classList.add("text-white"),t.classList.remove("text-gray-dark")):(t.classList.remove("text-white"),t.classList.add("text-gray-dark")))}(e.target.value)})),d("change",".js-marketplace-listing-logo-background-color",(function(e){const t=e.target;g(a(t,"form",HTMLFormElement),t.value),j(t.value)})),t(".js-marketplace-listing-form",(async function(e,t){let n;p(e);try{n=await t.json()}catch(a){if(!a.response)throw a;return void u(e,a.response.json.error)}if(n.json.path){const e=window.location.pathname,t=n.json.path;if(e!==t)return void(window.location.href=t)}n.json.bgcolor&&(g(e,n.json.bgcolor),j(n.json.bgcolor)),n.json.short_description&&function(e){const t=document.querySelector(".js-hero-listing-description");t&&(t.textContent=e)}(n.json.short_description),f(e)})),t(".js-marketplace-listing-screenshot-update-form",(async function(e,t){try{await t.text()}catch(o){return void function(e){const t=e.querySelector(".js-marketplace-listing-save-error");t&&(t.classList.add("visible"),setTimeout(()=>t.classList.remove("visible"),1500))}(e)}const n=s(e,".js-marketplace-listing-screenshot-caption-field",HTMLInputElement),a=s(e,".js-marketplace-listing-screenshot-caption-present"),r=s(e,".js-marketplace-listing-screenshot-caption-empty");a.textContent=n.value,n.value.trim().length<1?(a.classList.add("d-none"),r.classList.remove("d-none")):(a.classList.remove("d-none"),r.classList.add("d-none")),f(e)})),t(".js-marketplace-listing-screenshot-delete-form",(async function(e,t){p(e);const n=s(e,".js-marketplace-listing-screenshot-delete-button",HTMLButtonElement);n.disabled=!0;try{await t.text()}catch(r){if(r.response){try{u(e,r.response.json.error)}catch(o){throw r}finally{n.disabled=!1}return}throw r}a(e,".js-marketplace-listing-screenshot-container").remove()})),e("textarea.js-listing-characters-remaining-field",(function(e){const t=e.target,n=parseInt(t.getAttribute("data-character-limit")||"",10);k(t.value,n,t)})),e("input.js-listing-characters-remaining-field",(function(e){const t=e.target,n=t.maxLength;k(t.value,n,t)})),d("details-menu-selected",".js-languages-menu",(function(e){const t=e.currentTarget.querySelectorAll('[role="menuitemcheckbox"][aria-checked="true"]');s(document,".js-language-selection").textContent=Array.from(t).map(e=>(e.textContent||"").trim()).sort().join(", ")}),{capture:!0}),m(".js-draggable-screenshots-container",(function(e){n.create(e,{animation:150,draggable:".js-draggable-screenshot",onUpdate:L})})),m(".js-listing-plan-option:checked",{constructor:HTMLInputElement,add(e){const t=e.value,n=a(e,".js-marketplace-edit-plan-editor"),r=c(n,".js-marketplace-plan-price-field-group",HTMLInputElement),o=c(n,".js-marketplace-plan-free-trial-field-group",HTMLInputElement),l=c(n,".js-marketplace-plan-unit-field-group",HTMLInputElement);!function(e){for(const t of document.querySelectorAll(".js-marketplace-plan-edit-unit"))t instanceof HTMLElement&&(t.hidden=!v(e));for(const t of document.querySelectorAll(".js-marketplace-plan-edit-price, .js-marketplace-plan-enable-free-trial"))t instanceof HTMLElement&&(t.hidden=!h(e))}(t),T(r,["FLAT_RATE","PER_UNIT"].includes(t)),T(o,h(t)),T(l,v(t)),s(n,".js-marketplace-plan-unit-name-field",HTMLInputElement).required=v(t)}}),d("click",".js-marketplace-plan-preview-toggle",(function(e){const t=a(e.currentTarget,".js-marketplace-edit-plan-container"),n=s(t,".js-marketplace-plan-editor-toggle"),r=s(t,".js-marketplace-edit-plan-editor"),o=s(t,".js-marketplace-edit-plan-preview");o.classList.contains("d-none")&&(e.currentTarget.classList.add("selected"),n.classList.remove("selected"),o.classList.remove("d-none"),r.classList.add("d-none"),function(e,t){const n=s(t,".js-marketplace-plan-name"),r=s(e,".js-marketplace-plan-name-field",HTMLInputElement).value;n.textContent=r;const o=s(t,".js-marketplace-free-trial-container"),l=s(t,".js-marketplace-no-trial-container"),i=s(t,".js-marketplace-direct-billing-container");s(e,".js-marketplace-free-trial-field",HTMLInputElement).checked?(o.classList.remove("d-none"),i.classList.add("d-none"),l.classList.add("d-none")):(l.classList.remove("d-none"),o.classList.add("d-none"),i.classList.add("d-none"));const d=s(e,".js-listing-plan-option:checked",HTMLInputElement).value,m=t.querySelectorAll(".js-marketplace-plan-unit-name"),p=s(t,".js-marketplace-plan-per-unit-info");if("PER_UNIT"===d){const t=s(e,".js-marketplace-plan-unit-name-field",HTMLInputElement).value;for(const e of m)e.textContent=t,e.classList.remove("d-none");p.classList.remove("d-none")}else{for(const e of m)e.classList.add("d-none");p.classList.add("d-none")}if("FREE"===d||"DIRECT_BILLING"===d){const e=t.querySelectorAll(".js-marketplace-plan-dollars-container");for(const t of e)t.classList.add("d-none")}else{const n=s(t,".js-marketplace-plan-monthly-dollars"),r=s(e,".js-marketplace-plan-monthly-price-field",HTMLInputElement).value;n.textContent=r,a(n,".js-marketplace-plan-dollars-container").classList.remove("d-none");const o=s(t,".js-marketplace-plan-yearly-dollars"),l=s(e,".js-marketplace-plan-yearly-price-field",HTMLInputElement).value;o.textContent=l,a(o,".js-marketplace-plan-dollars-container").classList.remove("d-none")}"DIRECT_BILLING"===d&&(l.classList.add("d-none"),o.classList.add("d-none"),i.classList.remove("d-none"));const u=s(t,".js-marketplace-plan-bullets");u.innerHTML="";const f=c(e,".js-marketplace-plan-bullet-field",HTMLInputElement),g=s(t,".js-marketplace-plan-bullet-template",HTMLTemplateElement);for(const a of f){const e=a.value;if(e.trim().length<1)continue;const t=g.content.cloneNode(!0);if(!(t instanceof DocumentFragment))return;s(t,".js-marketplace-plan-bullet").textContent=e,u.appendChild(t)}const j=s(t,".js-marketplace-plan-description"),k=s(e,".js-marketplace-plan-description-field",HTMLInputElement).value;j.textContent=k;const L=s(t,".js-marketplace-plan-for-account-type"),h=(s(e,".js-plan-for-account-type").textContent||"").toLowerCase();L.textContent=h}(r,o))})),d("click",".js-marketplace-plan-editor-toggle",(function(e){const t=a(e.currentTarget,".js-marketplace-edit-plan-container"),n=s(t,".js-marketplace-plan-preview-toggle"),r=s(t,".js-marketplace-edit-plan-editor"),o=s(t,".js-marketplace-edit-plan-preview");r.classList.contains("d-none")&&(e.currentTarget.classList.add("selected"),n.classList.remove("selected"),o.classList.add("d-none"),r.classList.remove("d-none"))})),d("change",".js-marketplace-plan-dollar-field",(function(e){const t=e.currentTarget;a(t,".js-marketplace-plan-dollar-field-container").classList.toggle("is-errored",!t.checkValidity())})),m(".js-selected-account [data-menu-button]",y),d("details-menu-selected",".js-accounts-menu",e=>{y(e.detail.relatedTarget)},{capture:!0}),m(".js-marketplace-order-quantity",(function(e){e.addEventListener("input",b)})),d("change","input.js-grant-oap-checkbox",(function(e){const t=e.currentTarget,n=s(document,".js-marketplace-complete-order",HTMLButtonElement);n&&(n.disabled=!t.checked)})),d("click",".js-marketplace-complete-order",(function(e){e.preventDefault();const t=e.currentTarget,n=t.form,a=document.querySelector(".js-marketplace-billing-modal");"true"===t.getAttribute("data-show-billing-modal")&&a?a.setAttribute("open","true"):n&&n.submit()}))}}}));
//# sourceMappingURL=marketplace-ce87a043.js.map