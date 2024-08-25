let iconMenu = document.querySelector(".iconMenu");
let navList = document.querySelector(".NavLi");
let closeIcon = document.querySelector(".closeIcon");

iconMenu.addEventListener("click", () => {
  navList.classList.toggle("hidden");
  iconMenu.style.display = "none";
  closeIcon.src = "/assets/images/icon-menu-close.svg";
  closeIcon.style.display = "block";
});

closeIcon.addEventListener("click", () => {
  navList.classList.toggle("hidden");
  iconMenu.style.display = "block";
  closeIcon.style.display = "none";
});
