const baselinerToggle=document.querySelector(".logo"),navToggle=document.querySelector(".toggle"),nav=document.querySelector(".page-nav");navToggle.addEventListener("click",(()=>{nav.classList.toggle("page-nav--visible")})),baselinerToggle.addEventListener("click",(()=>{let e=document.querySelector("#overlay-it"),l=document.querySelector("#baseline-overlay");e?(document.body.removeChild(e.parentElement),l&&document.body.removeChild(l)):baseliner=new Baseliner({gridHeight:32})}));
//# sourceMappingURL=index.e55e0f80.js.map
