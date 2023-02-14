// Add a class to the header when the user scrolls down
window.addEventListener("scroll", function () {
  const header = document.querySelector("header");
  header.classList.toggle("sticky", window.scrollY > 0);
});

const heroImage = document.querySelector('.hero-image');
heroImage.innerHTML = '<img src="https://imgur.com/e7SYVZR" alt="Young Ayodele">';

// Smooth scroll to the anchor links
const links = document.querySelectorAll("nav a");

for (const link of links) {
  link.addEventListener("click", clickHandler);
}

function clickHandler(e) {
  e.preventDefault();
  const href = this.getAttribute("href");
  const offsetTop = document.querySelector(href).offsetTop;

  scroll({
    top: offsetTop,
    behavior: "smooth"
  });
}
