// Toggle dark/light mode
const toggleBtn = document.getElementById('toggle-theme');
toggleBtn.addEventListener('click', () => {
  document.body.classList.toggle('dark');
});

// Typing animation for header
const typingElement = document.getElementById('typing');
const texts = ["Hi, I'm Your Name!", "Web Developer.", "UI/UX Enthusiast.", "Let's build something great!"];
let textIndex = 0;
let charIndex = 0;
let isDeleting = false;

function type() {
  const current = texts[textIndex];
  if (isDeleting) {
    typingElement.textContent = current.substring(0, charIndex--);
    if (charIndex < 0) {
      isDeleting = false;
      textIndex = (textIndex + 1) % texts.length;
      setTimeout(type, 500);
    } else {
      setTimeout(type, 40);
    }
  } else {
    typingElement.textContent = current.substring(0, charIndex++);
    if (charIndex > current.length) {
      isDeleting = true;
      setTimeout(type, 1200);
    } else {
      setTimeout(type, 80);
    }
  }
}
document.addEventListener('DOMContentLoaded', type);

// Smooth scroll for nav links
const navLinks = document.querySelectorAll('nav a');
navLinks.forEach(link => {
  link.addEventListener('click', function(e) {
    const targetId = this.getAttribute('href').slice(1);
    const targetSection = document.getElementById(targetId);
    if (targetSection) {
      e.preventDefault();
      targetSection.scrollIntoView({ behavior: 'smooth' });
    }
  });
});
