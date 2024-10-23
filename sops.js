const customSelect = document.querySelector(".custom-select"),
  customBtn = customSelect.querySelector(".custom-btn"),
  customOptions = customSelect.querySelectorAll(".custom-option"),
  btnText = customSelect.querySelector(".btn-text");

customBtn.addEventListener("click", () => {
  customSelect.classList.toggle("active");
});

customOptions.forEach((option) => {
  option.addEventListener("click", () => {
    btnText.textContent = option.querySelector(".option-text").textContent;
    customSelect.classList.remove("active");
  });
});
