document.getElementById("bouticon").addEventListener("click",()=>{
document.getElementById("iconset").classList.toggle("iconset2");
document.getElementById("bouticon").classList.toggle("bouticon2");
document.getElementById("slide1").classList.toggle("slidemast1")
document.getElementById("slide2").classList.toggle("slidemast2")
document.getElementById("slide3").classList.toggle("slidemast3")
document.getElementById("slide1").classList.remove("mastermaster");

})
let prez = false;
document.getElementById("slide1").addEventListener("click",()=>{

    if(prez === false){
        document.getElementById("slide1").classList.toggle("mastermaster1");
        document.getElementById("slide2").classList.toggle("opac");
        document.getElementById("slide3").classList.toggle("opac");
        prez = true;
        console.log("salope")
    }
    else{
        document.getElementById("slide1").classList.toggle("mastermaster1");
        setTimeout(() => {
            document.getElementById("slide2").classList.toggle("opac");
            document.getElementById("slide3").classList.toggle("opac");
        }, 500);
        console.log("pute")

        prez = false;
    }
})

document.getElementById("slide2").addEventListener("click",()=>{

    if(prez === false){
        document.getElementById("slide2").classList.toggle("mastermaster2");
        document.getElementById("slide1").classList.toggle("opac");
        document.getElementById("slide3").classList.toggle("opac");
        prez = true;
    }
    else{
        document.getElementById("slide2").classList.toggle("mastermaster2");
        setTimeout(() => {
            document.getElementById("slide1").classList.toggle("opac");
            document.getElementById("slide3").classList.toggle("opac");
        }, 500);
        prez = false;
    }
})
document.getElementById("slide3").addEventListener("click",()=>{

    if(prez === false){
        document.getElementById("slide3").classList.toggle("mastermaster3");
        document.getElementById("slide1").classList.toggle("opac");
        document.getElementById("slide2").classList.toggle("opac");
        prez = true;
    }
    else{
        document.getElementById("slide3").classList.toggle("mastermaster3");
        setTimeout(() => {
            document.getElementById("slide1").classList.toggle("opac");
            document.getElementById("slide2").classList.toggle("opac");
        }, 500);
        prez = false;
    }
})