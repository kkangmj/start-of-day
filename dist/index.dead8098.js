!function(){const e=document.querySelector(".js-toDoForm"),t=e.querySelector("input"),n=document.querySelector(".js-toDoList"),o="TODOS";let c=[];function i(e){const t=e.target.parentNode;n.removeChild(t);const o=c.filter((e=>e.id!=t.id));c=o,l()}function l(){localStorage.setItem(o,JSON.stringify(c))}function r(e){const t=document.createElement("li"),o=document.createElement("button"),r=document.createElement("span"),u=c.length+1;o.innerText="❌",o.addEventListener("click",i),r.innerText=e,t.appendChild(r),t.appendChild(o),t.id=u,n.appendChild(t);const d={id:u,text:e};c.push(d),l()}function u(e){e.preventDefault();r(t.value),t.value=""}!function(){const e=localStorage.getItem(o);null!==e&&JSON.parse(e).forEach((e=>r(e.text)))}(),e.addEventListener("submit",u)}();
//# sourceMappingURL=index.dead8098.js.map