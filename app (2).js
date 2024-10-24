$(document).ready(() => {
  $("#hamburger-menu").click(() => {
    $("#hamburger-menu").toggleClass("active");
    $("#nav-menu").toggleClass("active");
  });

  // setting owl carousel

  let navText = [
    "<i class='bx bx-chevron-left'></i>",
    "<i class='bx bx-chevron-right'></i>",
  ];

  $("#hero-carousel").owlCarousel({
    items: 1,
    dots: false,
    loop: true,
    nav: true,
    navText: navText,
    autoplay: true,
    autoplayHoverPause: true,
  });

  $("#top-movies-slide").owlCarousel({
    items: 2,
    dots: false,
    loop: true,
    autoplay: true,
    autoplayHoverPause: true,
    responsive: {
      500: {
        items: 3,
      },
      1280: {
        items: 4,
      },
      1600: {
        items: 6,
      },
    },
  });

  $(".movies-slide").owlCarousel({
    items: 2,
    dots: false,
    nav: true,
    navText: navText,
    margin: 15,
    responsive: {
      500: {
        items: 2,
      },
      1280: {
        items: 4,
      },
      1600: {
        items: 6,
      },
    },
  });
});
const ball = document.querySelector(".toggle-ball");
const items = document.querySelectorAll(
  ".container,.movie-list-title,.nav-menu,.sidebar,.left-menu-icon,.toggle, .nav-menu li,.po,.movie-item-content, .ed,.body, :root, .search .fa-search, .search input::placeholder,.search, po p, .sqi2 h1, .sqi2 h1:hover,.sqi3 h1, .sqi3 h1:hover,#anny"
);

ball.addEventListener("click", () => {
  items.forEach((item) => {
    item.classList.toggle("active");
  });
  ball.classList.toggle("active");
});
function book() {
  window.location.href = "come.html";
}
function books() {
  window.location.href = "cart.html";
}
