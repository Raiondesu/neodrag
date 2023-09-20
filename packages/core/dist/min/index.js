var t={dragStart:!0},e=(e,l={})=>{let c,u,{bounds:f,axis:g="both",gpuAcceleration:h=!0,legacyTranslate:p=!0,transform:m,applyUserSelectHack:y=!0,disabled:w=!1,ignoreMultitouch:b=!1,recomputeBounds:v=t,grid:x,position:E,cancel:A,handle:S,touchAction:C="none",defaultClass:N="neodrag",defaultClassDragging:D="neodrag-dragging",defaultClassDragged:M="neodrag-dragged",defaultPosition:B={x:0,y:0},onDragStart:$,onDrag:R,onDragEnd:H}=l,L=!1,P=0,T=0,X=0,Y=0,q=0,k=0,{x:U,y:W}=E?{x:E?.x??0,y:E?.y??0}:B;V(U,W);let j,z,F,G,I,J="",K=!!E;v={...t,...v};const O=document.body.style,Q=e.classList;function V(t=P,n=T){if(!m){if(p){let r=`${+t}px, ${+n}px`;return s(e,"transform",h?`translate3d(${r}, 0)`:`translate(${r})`)}return s(e,"translate",`${+t}px ${+n}px ${h?"1px":""}`)}const o=m({offsetX:t,offsetY:n,rootNode:e});r(o)&&s(e,"transform",o)}const Z=(t,n)=>{const r={offsetX:P,offsetY:T,rootNode:e,currentNode:I};e.dispatchEvent(new CustomEvent(t,{detail:r})),n?.(r)};const _=addEventListener;_("pointerdown",et,!1),_("pointerup",nt,!1),_("touchend",nt,!1),_("pointermove",rt,!1),s(e,"touch-action",C);const tt=()=>{let t=e.offsetWidth/z.width;return isNaN(t)&&(t=1),t};function et(t){if(w)return;if(2===t.button)return;if(b&&!t.isPrimary)return;if(v.dragStart&&(j=a(f,e)),r(S)&&r(A)&&S===A)throw new Error("`handle` selector can't be same as `cancel` selector");if(Q.add(N),F=function(t,e){if(!t)return[e];if(d(t))return[t];if(Array.isArray(t))return t;const n=e.querySelectorAll(t);if(null===n)throw new Error("Selector passed for `handle` option should be child of the element on which the action is applied");return Array.from(n.values())}(S,e),G=function(t,e){if(!t)return[];if(d(t))return[t];if(Array.isArray(t))return t;const n=e.querySelectorAll(t);if(null===n)throw new Error("Selector passed for `cancel` option should be child of the element on which the action is applied");return Array.from(n.values())}(A,e),c=/(both|x)/.test(g),u=/(both|y)/.test(g),i(G,F))throw new Error("Element being dragged can't be a child of the element on which `cancel` is applied");const n=t.composedPath()[0];if(!F.some((t=>t.contains(n)||t.shadowRoot?.contains(n)))||i(G,[n]))return;I=1===F.length?e:F.find((t=>t.contains(n))),L=!0,z=e.getBoundingClientRect(),y&&(J=O.userSelect,O.userSelect="none"),Z("neodrag:start",$);const{clientX:o,clientY:s}=t,l=tt();c&&(X=o-U/l),u&&(Y=s-W/l),j&&(q=o-z.left,k=s-z.top)}function nt(){L&&(v.dragEnd&&(j=a(f,e)),Q.remove(D),Q.add(M),y&&(O.userSelect=J),Z("neodrag:end",H),c&&(X=P),u&&(Y=T),L=!1)}function rt(t){if(!L)return;v.drag&&(j=a(f,e)),Q.add(D),t.preventDefault(),z=e.getBoundingClientRect();let r=t.clientX,i=t.clientY;const s=tt();if(j){const t={left:j.left+q,top:j.top+k,right:j.right+q-z.width,bottom:j.bottom+k-z.height};r=n(r,t.left,t.right),i=n(i,t.top,t.bottom)}if(Array.isArray(x)){let[t,e]=x;if(isNaN(+t)||t<0)throw new Error("1st argument of `grid` must be a valid positive number");if(isNaN(+e)||e<0)throw new Error("2nd argument of `grid` must be a valid positive number");let n=r-X,a=i-Y;[n,a]=o([t/s,e/s],n,a),r=X+n,i=Y+a}c&&(P=Math.round((r-X)*s)),u&&(T=Math.round((i-Y)*s)),U=P,W=T,Z("neodrag",R),V()}return{destroy:()=>{const t=removeEventListener;t("pointerdown",et,!1),t("pointerup",nt,!1),t("pointermove",rt,!1)},update:e=>{g=e.axis||"both",w=e.disabled??!1,b=e.ignoreMultitouch??!1,S=e.handle,f=e.bounds,v=e.recomputeBounds??t,A=e.cancel,y=e.applyUserSelectHack??!0,x=e.grid,h=e.gpuAcceleration??!0,p=e.legacyTranslate??!0,m=e.transform;const n=Q.contains(M);Q.remove(N,M),N=e.defaultClass??"neodrag",D=e.defaultClassDragging??"neodrag-dragging",M=e.defaultClassDragged??"neodrag-dragged",Q.add(N),n&&Q.add(M),K&&(U=P=e.position?.x??P,W=T=e.position?.y??T,V())}}},n=(t,e,n)=>Math.min(Math.max(t,e),n),r=t=>"string"==typeof t,o=([t,e],n,r)=>{const o=(t,e)=>0===e?0:Math.ceil(t/e)*e;return[o(n,t),o(r,e)]};var i=(t,e)=>t.some((t=>e.some((e=>t.contains(e)))));function a(t,e){if(void 0===t)return;if(d(t))return t.getBoundingClientRect();if("object"==typeof t){const{top:e=0,left:n=0,right:r=0,bottom:o=0}=t;return{top:e,right:window.innerWidth-r,bottom:window.innerHeight-o,left:n}}if("parent"===t)return e.parentNode.getBoundingClientRect();const n=document.querySelector(t);if(null===n)throw new Error("The selector provided for bound doesn't exists in the document.");return n.getBoundingClientRect()}var s=(t,e,n)=>t.style.setProperty(e,n),d=t=>t instanceof HTMLElement;export{e as draggable};