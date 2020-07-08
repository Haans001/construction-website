const $ = require("jquery");
global.jQuery = $;
require("slick-carousel-browserify");
const counterUp = require("counterup2").default;
require("waypoints/lib/noframework.waypoints");

(function () {
  $(heroSlider).slick({
    dots: true,
    appendDots: $(".slick-dots-container"),
    arrows: true,
    infinite: true,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 8000,
    fade: true,
    cssEase: "ease-in-out",
    prevArrow: $(".slide-prev"),
    nextArrow: $(".slide-next"),
  });

  // About number counting up when scroll

  const numbers = document.querySelectorAll(".about .count-up");

  new Waypoint({
    element: numbers[0],
    handler: function () {
      numbers.forEach((el) => {
        el.classList.add("active");
        counterUp(el);
      });
      this.destroy();
    },
    offset: "bottom-in-view",
  });

  const projectsTextSlider = $(".projects .projects__text .slider");
  const projectsImageSlider = $(".projects .projects__images .slider");

  $(projectsTextSlider).slick({
    dots: false,
    arrows: true,
    infinite: true,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 8000,
    fade: true,
    swipe: false,
    cssEase: "ease-in-out",
    prevArrow: $(".projects__arrow.arrow-prev"),
    nextArrow: $(".projects__arrow.arrow-next"),
  });

  $(projectsImageSlider).slick({
    dots: false,
    arrows: true,
    infinite: true,
    speed: 500,
    autoplay: true,
    swipe: false,
    initialSlide: 0,
    autoplaySpeed: 8000,
    cssEase: "ease-in-out",
    prevArrow: $(".projects__arrow.arrow-prev"),
    nextArrow: $(".projects__arrow.arrow-next"),
  });

  // responsive navbar
  const navbarToggler = document.querySelector(".navbar-toggler");
  const navbarCollaspse = document.getElementById(navbarToggler.getAttribute("data-toggle"));
  const navLinks = document.querySelectorAll(".nav-link");

  navLinks.forEach(function (link) {
    link.addEventListener("click", function () {
      navbarToggler.classList.remove("active");
      navbarCollaspse.classList.remove("active");
      document.querySelector("body").style.overflow = "scroll";
    });
  });

  navbarToggler.addEventListener("click", function (e) {
    navbarCollaspse.classList.toggle("active");
    this.classList.toggle("active");

    if (navbarCollaspse.classList.contains("active")) {
      document.querySelector("body").style.overflow = "hidden";
    } else {
      document.querySelector("body").style.overflow = "scroll";
    }
  });

  // smooth scrolling
  $("a").on("click", function (event) {
    if (this.hash !== "") {
      event.preventDefault();

      var hash = this.hash;

      $("html, body").animate(
        {
          scrollTop: $(hash).offset().top,
        },
        1600,
        function () {
          window.location.hash = hash;
        }
      );
    }
  });

  // animated inputs
  const inputs = document.querySelectorAll('textarea, input[type="text"], input[type="email"]');
  inputs.forEach(input => input.addEventListener('f'))
  console.log(inputs);
})();
