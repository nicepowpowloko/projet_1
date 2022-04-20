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


const text1_options = [
    "Photo d'une jolie voiture",
    "Thomas près d'un mur",
    "Encore une rue",
    "Thomas prend une photo",
    "Boulangerie", "Pour acheter à mangé",
    "Mairie ", "Pour acheter à boire",
    "Rue de Dylan", "Office du tourisme", "Des trucs",
  ];
  const text2_options = [
    "69 rue de rosa",
    "Youuuuu ",
    "Avec un passage piéton",
    "Et moi aussi", "Thomas prend une photo", "Pour acheter à mangé", "Oui la mairie d'Etaples",
    "Pour acheter à boire", "Carrefour market", "Oui oui il y a une office", "lorem impsum avadakedabraaaa",
  ];
  const color_options = ["#00245b", "rgb(170,226,255)", "rgb(89,119,162)", "rgb(205,216,223)", "#00245b","rgb(89,119,162)", "rgb(170,226,255)", "rgb(89,119,162)", "rgb(205,216,223)", "#00245b","rgb(89,119,162)"];
  const image_options = [
    "../html/img/villle/ville1.jpg", "../html/img/villle/ville2.jpg", "../html/img/villle/ville3.jpg", "../html/img/villle/ville4.jpg", "../html/img/villle/ville5.jpg", "../html/img/villle/ville6.jpg", "../html/img/villle/ville7.jpg", "../html/img/villle/ville8.jpg", "../html/img/villle/ville9.jpg", "../html/img/villle/ville10.jpg", "../html/img/villle/ville11.jpg",
  
    
    "../html/img/villle/ville12.jpg",
  ];
  var i = 0;
  const currentOptionText1 = document.getElementById("current-option-text1");
  const currentOptionText2 = document.getElementById("current-option-text2");
  const currentOptionImage = document.getElementById("image");
  const carousel = document.getElementById("carousel-wrapper");
  const mainMenu = document.getElementById("menu");
  const optionPrevious = document.getElementById("previous-option");
  const optionNext = document.getElementById("next-option");
  
  currentOptionText1.innerText = text1_options[i];
  currentOptionText2.innerText = text2_options[i];
  currentOptionImage.style.backgroundImage = "url(" + image_options[i] + ")";
  mainMenu.style.background = color_options[i];
  
  optionNext.onclick = function () {
    i = i + 1;
    i = i % text1_options.length;
    currentOptionText1.dataset.nextText = text1_options[i];
  
    currentOptionText2.dataset.nextText = text2_options[i];
  
    mainMenu.style.background = color_options[i];
    carousel.classList.add("anim-next");
    
    setTimeout(() => {
      currentOptionImage.style.backgroundImage = "url(" + image_options[i] + ")";
    }, 455);
    
    setTimeout(() => {
      currentOptionText1.innerText = text1_options[i];
      currentOptionText2.innerText = text2_options[i];
      carousel.classList.remove("anim-next");
    }, 650);
  };
  
  optionPrevious.onclick = function () {
    if (i === 0) {
      i = text1_options.length;
    }
    i = i - 1;
    currentOptionText1.dataset.previousText = text1_options[i];
  
    currentOptionText2.dataset.previousText = text2_options[i];
  
    mainMenu.style.background = color_options[i];
    carousel.classList.add("anim-previous");
  
    setTimeout(() => {
      currentOptionImage.style.backgroundImage = "url(" + image_options[i] + ")";
    }, 455);
    
    setTimeout(() => {
      currentOptionText1.innerText = text1_options[i];
      currentOptionText2.innerText = text2_options[i];
      carousel.classList.remove("anim-previous");
    }, 650);
  };
  