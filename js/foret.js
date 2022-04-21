const text1_options = [
    "Photo d'une jolie foret",
    "Thomas dans la foret",
    "Encore une foret",
    "Thomas prend une photo dans la forert",
    "foret", "balade dans la foret",
    "je me balade dans une foret", "des arbres",
    "des arbres dans la foret", "youhou une foret", "arbuste dans la foret",
  ];
  const text2_options = [
    "69 rue de la foret",
    "Youuuuu une foret ",
    "Avec un passage piéton dans une foret",
    "Et moi aussi je suis dans une foret", "Thomas prend une photo dans une foret", "Pour acheter à mangé dans une foret", "une foret youpi",
    "Pour acheter à boire dans une foret", "Carrefour market dans une foret", "Oui oui il y a une office dans une foret", "lorem impsum avadakedabraaaa boum",
  ];
  const color_options = ["#00245b", "rgb(170,226,255)", "rgb(89,119,162)", "rgb(205,216,223)", "#00245b","rgb(89,119,162)", "rgb(170,226,255)", "rgb(89,119,162)", "rgb(205,216,223)", "#00245b","rgb(89,119,162)"];
  const image_options = [
    "../html/img/foret/foret1.jpg", "../html/img/foret/foret2.jpg", "../html/img/foret/foret3.jpg", "../html/img/foret/foret4.jpg", "../html/img/foret/foret5.jpg", "../html/img/foret/foret6.jpg", "../html/img/foret/foret7.jpg", "../html/img/foret/foret8.jpg", "../html/img/foret/foret9.jpg", "../html/img/foret/foret10.jpg", "../html/img/foret/foret11.jpg",
    "../html/img/foret/foret12.jpg",
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