iconset1 = document.getElementById("iconset1");
iconset2 = document.getElementById("iconset2");
iconset3 = document.getElementById("iconset3");
iconset4 = document.getElementById("iconset4");
let nul = false;
iconset1.addEventListener("click", () => {
    toggledisplay("content1",iconset1,"iconset1",iconset2,iconset3,iconset4,"pn1")
    document.getElementById("imageslide1").classList.toggle("imageslide");
})
iconset2.addEventListener("click", () => {
    toggledisplay("content2",iconset2,"iconset2",iconset1,iconset3,iconset4,"pn2")
    document.getElementById("imageslide2").classList.toggle("imageslide");
})
iconset3.addEventListener("click", () => {
    toggledisplay("content3",iconset3,"iconset3",iconset1,iconset2,iconset4,"pn3")
    document.getElementById("imageslide3").classList.toggle("imageslide");
})
iconset4.addEventListener("click", () => {
    toggledisplay("content4",iconset4,"iconset4",iconset1,iconset3,iconset2,"pn4")
    document.getElementById("emb1").classList.toggle("imageslide");
    iconset4.classList.toggle("unclick");
})
document.getElementById("loader").addEventListener("click",()=>{
    console.log("test")
    document.getElementById("emb1").src = "https://codepen.io/thebabydino/full/PowrPGR"
})



function toggledisplay(content,iconset,iconsetstring,icondel1,icondel2,icondel3,pnnum) {
    if (nul === false) {
        setTimeout(() => {noner(content)}, 500);

        toggler(iconset, iconsetstring)
        unclicker(icondel1, icondel2, icondel3);
        noner(pnnum);
        nul = true;
    } else {
        noner(content)
        setTimeout(() => {

            toggler(iconset,iconsetstring)
            unclicker(icondel1, icondel2, icondel3);
            noner(pnnum);
        }, 1);
        nul = false;
    }
}

function toggler(classset, string) {
    classset.classList.toggle(string);
}

function unclicker(setname1, setname2, setname3) {
    setname1.classList.toggle("unclick");
    setname2.classList.toggle("unclick");
    setname3.classList.toggle("unclick");
}

function noner(name) {
    document.getElementById(name).classList.toggle("none");
}