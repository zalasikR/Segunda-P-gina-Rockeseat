document.addEventListener("DOMContentLoaded", () => {

  const menuButton = document.querySelector("#primary div:first-child");
  const secondaryNav = document.querySelector("#secondary");
  menuButton.addEventListener("click", () => {
    secondaryNav.classList.toggle("hidden");
  });
  const searchButton = document.querySelector("#primary div:last-child");
  searchButton.addEventListener("click", () => {
    const searchBox = document.createElement("input");
    searchBox.type = "text";
    searchBox.placeholder = "Digite para buscar...";
    searchBox.classList.add("search-box");
    searchButton.appendChild(searchBox);
    searchBox.focus();
    searchBox.addEventListener("blur", () => {
      searchBox.remove();
    });
  });
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
        } else {
          entry.target.classList.remove("visible");
        }
      });
    },
    { threshold: 0.1 }
  );

  document.querySelectorAll(".card, article").forEach((element) => {
    observer.observe(element);
  });
  const carousel = document.querySelector("#weekly .grid");
  let scrollAmount = 0;
  setInterval(() => {
    scrollAmount += carousel.clientWidth;
    if (scrollAmount >= carousel.scrollWidth) scrollAmount = 0;
    carousel.scrollTo({
      left: scrollAmount,
      behavior: "smooth",
    });
  }, 3000);
});
