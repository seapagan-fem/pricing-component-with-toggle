const handleToggle = () => {
  document
    .querySelectorAll(".price")
    .forEach((price) => price.classList.toggle("active"));
};

document.getElementById("toggle-price").addEventListener("click", handleToggle);
