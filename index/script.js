'use strict'
const Name_h2 = document.getElementById("name");
const Iine_h4 = document.getElementById('iineNum');
const Iine_Img = document.getElementById('iineImg');

Name_h2.innerText = Name_h2.innerText.toUpperCase();

function iineCount(){
    if(Iine_h4.innerText == 0){
        Iine_Img.src = "img/iine1.png";
    }
    Iine_h4.innerText = Number(Iine_h4.innerText) + 1;
}
