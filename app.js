// Define variables for DOM elements
const navLinks = document.querySelectorAll('nav ul li a');
const welcomeSection = document.getElementById('welcome-section');

// Add event listener to nav links to scroll to sections
navLinks.forEach((link) => {
  link.addEventListener('click', (e) => {
    e.preventDefault();
    const targetSection = document.querySelector(link.getAttribute('href'));
    window.scrollTo({
      top: targetSection.offsetTop,
      behavior: 'smooth'
    });
  });
});

// Change opacity of welcome section on scroll
window.addEventListener('scroll', () => {
  const opacity = 1 - window.pageYOffset / welcomeSection.offsetHeight;
  welcomeSection.style.opacity = opacity;
});
