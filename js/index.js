$ = function(id) {
    return document.getElementById(id);
  }
  
 let show = function(id) {
      $(id).style.display ='block';
  }
 let hide = function(id) {
      $(id).style.display ='none';
  }
  
  let slide = new Array("../html/img/port1.jpg", "../html/img/port2.jpg", "../html/img/port3.jpg", "../html/img/port4.jpg","../html/img/port5.jpg","../html/img/port6.jpg","../html/img/port7.jpg","../html/img/port8.jpg","../html/img/port9.jpg","../html/img/port10.jpg");
 
let numero = 0;

function ChangeSlide(sens) {
    numero = numero + sens;
    if (numero < 0)
        numero = slide.length - 1;
    if (numero > slide.length - 1)
        numero = 0;
    document.getElementById("slide").src = slide[numero];
}
