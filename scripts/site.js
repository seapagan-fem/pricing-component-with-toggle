const toggle = document.getElementById("toggle-price");
const prices = document.querySelectorAll(".price");

const handleToggle = () => {
  prices.forEach((price) => price.classList.toggle("active"));
};

toggle.addEventListener("click", handleToggle);
