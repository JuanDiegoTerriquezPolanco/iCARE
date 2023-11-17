//|=====================/SERCH-BAR|=====================|
$(document).ready(function () {
    var submitIcon = $('.searchbar-icon');
    var inputBox = $('.searchbar-input');
    var searchbar = $('.searchbar');
    var isOpen = false;
  
    // Cuando el campo de búsqueda obtiene el enfoque
    inputBox.focus(function () {
      if (isOpen == false) {
        searchbar.addClass('searchbar-open');
        $('.floatBar').css('width', '325px');
        submitIcon.css('display', 'none'); // Oculta el ícono de búsqueda
        isOpen = true;
      }
    });

    // Cuando el campo de búsqueda pierde el enfoque
    inputBox.blur(function () {
    if (isOpen == true) {
      searchbar.removeClass('searchbar-open');
      $('.floatBar').css('width', '50px');
      submitIcon.css('display', 'block'); // Muestra el ícono de búsqueda
      isOpen = false;
    }
  });
  
    // Cuando se hace clic en el ícono de búsqueda
    submitIcon.click(function () {
      if (isOpen == false) {
        searchbar.addClass('searchbar-open');
        $('.floatBar').css('width', '325px');
        inputBox.focus();
        isOpen = true;
      } else {
        searchbar.removeClass('searchbar-open');
        $('.floatBar').css('width', '50px');
        inputBox.focusout();
        isOpen = false;
      }
    });
  
    // Otros manejadores de eventos...
  
    function buttonUp() {
      var inputVal = $('.searchbar-input').val();
      inputVal = $.trim(inputVal).length;
      if (inputVal !== 0) {
        $('.searchbar-icon').css('display', 'none');
      } else {
        $('.searchbar-input').val('');
        $('.searchbar-icon').css('display', 'block');
      }
    }
  });  
//|=====================/SERCH-BAR-MARGIN|=====================|
/*$(window).resize(function(){
var space = $(window).width();
var total = space - 1140;
    if(space <= 1000){
        $('.floatBar').css('right','tota')
    } else {
        $('.floatBar').css('right','200')
    }
  });*/
//|=====================/SCROLL-NAVBAR|=====================|
window.addEventListener("scroll", function(){
    var navBar = document.querySelector(".navbar");
    var carousel = document.querySelector(".carousel");
    navBar.classList.toggle("fixed-top", window.scrollY > 100);
    if (window.scrollY > 100) {
        carousel.style.marginTop="46px";
    }else{
        carousel.style.marginTop="0px";
    }
});
//|=====================/SCROLL-REVEAL|=====================|
//-----------------bloque-1-----------------
window.sr = ScrollReveal();
sr.reveal('.titleReveal', {
    duration: 2000,
    origin: 'top',
    distance: '-100px',
    //reset: true
});
sr.reveal('.imgReveal', {
    delay: 700,
    duration: 2000,
    origin: 'top',
    distance: '-100px',
    //reset: true
});
sr.reveal('.textReveal', {
    delay: 1400,
    duration: 2000,
    origin: 'top',
    distance: '-100px',
    //reset: true
});
//-----------------bloque-2-----------------
sr.reveal('.textBloque2', {
    duration: 2000,
    origin: 'right',
    distance: '-200px',
    //reset: true
});
sr.reveal('.imgBloque2', {
    delay: 700,
    duration: 2000,
    origin: 'left',
    distance: '-200px',
    //reset: true
});
//-----------------bloque-3-----------------
sr.reveal('.textBloque3', {
    duration: 2000,
    origin: 'left',
    distance: '-200px',
    //reset: true
});
sr.reveal('.imgBloque3', {
    delay: 700,
    duration: 2000,
    origin: 'right',
    distance: '-200px',
    //reset: true
});

//-----------------CVC------------------------------------------------------
sr.reveal('.textBloqueCVC', {
    duration: 2000,
    origin: 'left',
    distance: '-200px',
    //reset: true
});
sr.reveal('.imgBloqueCVC', {
    delay: 700,
    duration: 2000,
    origin: 'right',
    distance: '-200px',
    //reset: true
});
//-----------------CVC------------------------------------------------------

//-----------------cards-----------------
sr.reveal('.titleAllCards', {
    duration: 2000,
    //reset: true
});
sr.reveal('.card1', {
    delay: 500,
    duration: 2000,
    origin: 'top',
    distance: '-200px',
    //reset: true
});
sr.reveal('.card2', {
    delay: 1000,
    duration: 2000,
    origin: 'top',
    distance: '-200px',
    //reset: true
});
sr.reveal('.card3', {
    delay: 1500,
    duration: 2000,
    origin: 'top',
    distance: '-200px',
    //reset: true
});
