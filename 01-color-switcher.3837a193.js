function t(){return`#${Math.floor(16777215*Math.random()).toString(16)}`}function e(t,e){o.disabled=t,n.disabled=e}const o=document.querySelector("button[data-start]"),n=document.querySelector("button[data-stop]");let d=null;n.addEventListener("click",(()=>{e(!1,!0),clearInterval(d)})),o.addEventListener("click",(()=>{e(!0,!1),document.body.style.backgroundColor=t(),d=setInterval((()=>{document.body.style.backgroundColor=t()}),1e3)}));
//# sourceMappingURL=01-color-switcher.3837a193.js.map
