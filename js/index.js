$ = function(id) {
    return document.getElementById(id);
  }
  
 let show = function(id) {
      $(id).style.display ='block';
  }
 let hide = function(id) {
      $(id).style.display ='none';
  }
  
  let slide = new Array("../img/276968519_631563404585707_3161485913316059396_n.png", "../img/terretrois.gif", "../img/20220411_142755.jpg", "../img/20220411_143015.jpg",
 "../img/20220411_142623.jpg", "../img/20220411_143651.jpg");
let numero = 0;

function ChangeSlide(sens) {
    numero = numero + sens;
    if (numero < 0)
        numero = slide.length - 1;
    if (numero > slide.length - 1)
        numero = 0;
    document.getElementById("slide").src = slide[numero];
}