// NAVBAR
let lastScrollTop = 0;
navbar = document.getElementById('navbar');

window.addEventListener('scroll', function () {
  const scrollTop = window.pageTOffset || this.document.documentElement.scrollTop;

  if (scrollTop > lastScrollTop) {
    navbar.style.top = "-50px";
  } else {
    navbar.style.top = "0";
  }
  lastScrollTop = scrollTop;

});

// TYPED
var typed = new Typed('.typed', {
  strings: ["Bonjour à tous et à toutes, je me présente je m'appelle Dany Aribot.<br> <br>   Récemment diplomé d'un BTS Technico-commercial, j'ai su faire mes preuves dans le domaine commerciale et de la communication. Souhaitant poursuivre mes études, je suis actuellement étudiant à l'école WIS Toulouse dans le cadre d'un Bachelor en Chef de projet Digital. <br><br>       N'hésitez pas de me contacter pour plus d'informations.",],
  typeSpeed: 20,
});

// COMPTEUR LIVE
let compteur = 0;

$(window).scroll(function () {

  const top = $('.counter').offset().top - window.innerHeight;

  if (compteur == 0 && $(window).scrollTop() > top) {
    $('.counter-value').each(function () {
      let $this = $(this),
        countTo = $this.attr('data-count');
      $({
        countNum: $this.text()
      }).animate({
        countNum: countTo
      },
        {
          duration: 10000,
          easing: 'swing',
          step: function () {
            $this.text(Math.floor(this.countNum));
          },
          complete: function () {
            $this.text(this.countNum);
          }
        });
    });
    compteur = 1;
  }
});

//AOS
AOS.init();
