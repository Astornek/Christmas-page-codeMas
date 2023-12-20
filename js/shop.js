// otwieranie koszyka
document.addEventListener("DOMContentLoaded", function () {
  const shopIcon = document.querySelector(".shop");
  const shopBar = document.querySelector(".shop-bar");

  shopIcon.addEventListener("click", function () {
    shopBar.classList.toggle("active");
  });
});
