// function book() {
//     window.location.href = 'slide.html'
// }
document.addEventListener("DOMContentLoaded", function () {
  const logoContainer = document.getElementById("logo-container");
  setTimeout(() => {
    logoContainer.classList.add("show");
  }, 100); // Delay to allow CSS transition to take effect
});

function book() {
  window.location.href = "index (5).html";
}
