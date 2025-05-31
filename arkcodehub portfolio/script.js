// Scroll animation
const sections = document.querySelectorAll("section");

function revealSections() {
  sections.forEach((sec) => {
    const top = sec.getBoundingClientRect().top;
    const screenHeight = window.innerHeight;
    if (top < screenHeight - 100) {
      sec.classList.add("visible");
    }
  });
}

window.addEventListener("scroll", revealSections);
window.addEventListener("load", revealSections);

// Dark mode toggle logic
const toggle = document.getElementById('darkToggle');
const body = document.body;

// Apply saved theme on load
if (localStorage.getItem('theme') === 'dark') {
  body.classList.add('dark-mode');
  toggle.checked = true;
}

toggle.addEventListener('change', () => {
  if (toggle.checked) {
    body.classList.add('dark-mode');
    localStorage.setItem('theme', 'dark');
  } else {
    body.classList.remove('dark-mode');
    localStorage.setItem('theme', 'light');
  }
});
