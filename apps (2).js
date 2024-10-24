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
let slideIndex = 0;
showSlides();

const moviesArray = [
  {
    movieName: "a night in 2005",
    movieLink: "books.html",
  },
  {
    movieName: "fifty shades of grey",
    movieLink: "fifty.html",
  },
  {
    movieName: "supergirl",
    movieLink: "supergirl.html",
  },
  {
    movieName: "agatha",
    movieLink: "agatha.html",
  },
];

function renderSearchMatch(searchTerm) {
  searchmatch.innerHTML = "";
  moviesArray.forEach((movie) => {
    if (searchTerm !== "") {
      document.getElementById("searchmatch").style.display = "block";
      if (movie.movieName.includes(searchTerm.trim().toLowerCase())) {
        document.getElementById("searchmatch").innerHTML += `<div>
        <a class="search-link" href=${movie.movieLink}>${movie.movieName}</a>
      </div>`;
      }
    } else {
      document.getElementById("searchmatch").style.display = "none";
    }
  });
}

searchinput.addEventListener("input", () => {
  renderSearchMatch(searchinput.value);
});
