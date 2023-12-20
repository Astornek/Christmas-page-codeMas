const tglBtn = document.querySelector(".tog-btn");
const barLinks = document.querySelector(".navbar-links");

tglBtn.addEventListener("click", () => {
  barLinks.classList.toggle("active");
});

const header = document.querySelector(".head");
const closeBtn = document.querySelector(".close-btn");

closeBtn.addEventListener("click", () => {
  header.classList.add("animate");

  setTimeout(() => {
    header.style.display = "none";
    header.classList.remove("animate");
  }, 1000);

  setTimeout(() => {
    header.style.display = "flex";
    header.classList.add("anie");
  }, 3000);
});
document.querySelector(".shop").onclick = () => {
  document.querySelector(".shop-cart-content").classList.toggle("active");
};
