function t(){return`#${Math.floor(16777215*Math.random()).toString(16)}`}function o(t,o){e.disabled=t,n.disabled=o}const e=document.querySelector("button[data-start]");console.log(e);const n=document.querySelector("button[data-stop]");console.log(n);let l=null;n.addEventListener("click",(()=>{o(!1,!0),clearInterval(l)})),e.addEventListener("click",(()=>{o(!0,!1),document.body.style.backgroundColor=t(),l=setInterval((()=>{document.body.style.backgroundColor=t()}),1e3)}));
//# sourceMappingURL=01-color-switcher.c34a0339.js.map