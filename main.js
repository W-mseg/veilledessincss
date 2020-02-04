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
    document.getElementById("emb1").classList.add("imageslide");
    document.getElementById("emb2").classList.add("imageslide");
    document.getElementById("emb3").classList.add("imageslide");
    document.getElementById("emb4").classList.add("imageslide");
    document.getElementById("emb5").classList.add("imageslide");


})
document.getElementById("loader").addEventListener("mouseenter",()=>{
    console.log("test")
    document.getElementById("emb2").classList.add("imageslide");
    document.getElementById("emb3").classList.add("imageslide");
    document.getElementById("emb1").classList.toggle("imageslide");
    document.getElementById("emb5").classList.add("imageslide");
    document.getElementById("emb4").classList.add("imageslide");

    document.getElementById("emb1").src = "https://codepen.io/thebabydino/full/PowrPGR"
})
document.getElementById("loader2").addEventListener("mouseenter",()=>{
    document.getElementById("emb1").classList.add("imageslide");
    document.getElementById("emb3").classList.add("imageslide");
    document.getElementById("emb2").classList.toggle("imageslide");
    document.getElementById("emb5").classList.add("imageslide");
    document.getElementById("emb4").classList.add("imageslide");

    document.getElementById("emb2").src = "https://codepen.io/heero/full/wylhv"
})
document.getElementById("loader3").addEventListener("mouseenter",()=>{
    document.getElementById("emb1").classList.add("imageslide");
    document.getElementById("emb2").classList.add("imageslide");
    document.getElementById("emb3").classList.toggle("imageslide");
    document.getElementById("emb5").classList.add("imageslide");
    document.getElementById("emb4").classList.add("imageslide");
    document.getElementById("emb3").src = "https://codepen.io/jlwebart/full/JDHne";
})
document.getElementById("loader4").addEventListener("mouseenter",() =>{
    document.getElementById("emb1").classList.add("imageslide");
    document.getElementById("emb2").classList.add("imageslide");
    document.getElementById("emb3").classList.add("imageslide");
    document.getElementById("emb5").classList.add("imageslide");
    document.getElementById("emb4").classList.toggle("imageslide");
    document.getElementById("emb4").src = "https://codepen.io/finnhvman/full/xXpzVN";
})
document.getElementById("loader5").addEventListener("mouseenter",()=>{
    document.getElementById("emb1").classList.add("imageslide");
    document.getElementById("emb2").classList.add("imageslide");
    document.getElementById("emb3").classList.add("imageslide");
    document.getElementById("emb4").classList.add("imageslide");
    document.getElementById("emb5").classList.toggle("imageslide");
    document.getElementById("emb5").src = "https://cdn.vox-cdn.com/thumbor/ARxCeomEtL6TJRUABLra2qkz-I4=/0x0:575x232/1200x800/filters:focal(242x70:334x162):no_upscale()/cdn.vox-cdn.com/uploads/chorus_image/image/52359021/giphy.0.gif"
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