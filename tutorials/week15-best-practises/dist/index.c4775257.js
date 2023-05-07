const baselinerToggle = document.querySelector(".logo");
const navToggle = document.querySelector(".toggle");
const nav = document.querySelector(".page-nav");
navToggle.addEventListener("click", ()=>{
    nav.classList.toggle("page-nav--visible");
});
// https://keyes.ie/things/baseliner/  
// This tool creates a bunch of divs, which can cause vertical overflow.
// I had to add some jank to remove those elems. TODO refactor for brevity/clarity
baselinerToggle.addEventListener("click", ()=>{
    let baselinerElem = document.querySelector("#overlay-it");
    let baselinerOverlay = document.querySelector("#baseline-overlay");
    if (baselinerElem) {
        document.body.removeChild(baselinerElem.parentElement);
        if (baselinerOverlay) document.body.removeChild(baselinerOverlay);
    } else baseliner = new Baseliner({
        gridHeight: 32
    });
});

//# sourceMappingURL=index.c4775257.js.map
