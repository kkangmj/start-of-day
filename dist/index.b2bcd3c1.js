!function(){const e=document.querySelector(".js-clock"),t=e.querySelector("#hour"),n=e.querySelector("#minute");function r(e){return e<10?`0${e}`:e}function o(){const e=new Date,o=e.getMinutes(),u=e.getHours();t.innerText=`${r(u)}`,n.innerText=`${r(o)}`}o(),setInterval(o,1e3)}();
//# sourceMappingURL=index.b2bcd3c1.js.map
