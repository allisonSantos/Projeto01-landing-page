var SetaEsquerda = window.document.getElementById("seta-esquerda");
var img0 = window.document.getElementById("img-0");
var img1 = window.document.getElementById("img-1");
var SetaDireita = window.document.getElementById("seta-direita");

function moverDireita(){
    img0.style = "display:none";
    img1.style = "display:flex";
    
}

function moverEsquerda(){
    img0.style = "display:flex";
    img1.style = "display:none";
}
