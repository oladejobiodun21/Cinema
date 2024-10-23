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

// Function to show slides
function showSlides() {
  let i;
  let slides = document.getElementsByClassName("slide");
  let dots = document.getElementsByClassName("dot");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {
    slideIndex = 1;
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
  setTimeout(showSlides, 3000); // Change image every 3 seconds
}

// Function to change slides manually
function plusSlides(n) {
  showSlides((slideIndex += n));
}
const arrows = document.querySelectorAll(".arrow");
const movieLists = document.querySelectorAll(".movie-list");

arrows.forEach((arrow, i) => {
  const itemNumber = movieLists[i].querySelectorAll("img").length;
  let clickCounter = 0;
  arrow.addEventListener("click", () => {
    const ratio = Math.floor(window.innerWidth / 270);
    clickCounter++;
    if (itemNumber - (4 + clickCounter) + (4 - ratio) >= 0) {
      movieLists[i].style.transform = `translateX(${
        movieLists[i].computedStyleMap().get("transform")[0].x.value - 300
      }px)`;
    } else {
      movieLists[i].style.transform = "translateX(0)";
      clickCounter = 0;
    }
  });

  console.log(Math.floor(window.innerWidth / 270));
});

//TOGGLE

const ball = document.querySelector(".toggle-ball");
const items = document.querySelectorAll(
  ".container,.movie-list-title,.navbar-container,.sidebar,.left-menu-icon,.toggle, .menu-list-item,.po, .ed,.body, .sqi h1, .search .fa-search, .search input::placeholder,.search, .sqi h1:hover, .sqi2 h1, .sqi2 h1:hover,.sqi3 h1, .sqi3 h1:hover"
);

ball.addEventListener("click", () => {
  items.forEach((item) => {
    item.classList.toggle("active");
  });
  ball.classList.toggle("active");
});
function book() {
  window.location.href = "cart.html";
}
function books() {
  window.location.href = "slide.html";
}
