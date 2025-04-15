const scroll = new LocomotiveScroll({
    el: document.querySelector('body'),
    smooth: true
  });

  const navItems = [
  { name: "Projects", href: "#projects" },
  { name: "Experience", href: "#experience" },
  { name: "Skills", href: "#skills" },
  { name: "Contact", href: "#contact" },
  { name: "Resume", href: "arjun_resumei.pdf", target: "_blank" }
];

const toggle = document.getElementById('nav-toggle');
const navbar = document.getElementById('navbar');

toggle.addEventListener('click', () => {
  console.log("clicked");
  navbar.classList.toggle('active');
});

document.querySelectorAll('#navbar a').forEach(link => {
  link.addEventListener('click', () => {
    navbar.classList.remove('active');
  });
});

const roles = [
  "Data Scientist",
  "NLP Enthusiast",
  "Deep Learning Developer"
];

let index = 0;
let charIndex = 0;
let currentRole = "";
let isDeleting = false;
const typeSpeed = 100;
const eraseSpeed = 60;
const delayBetween = 1500;
const element = document.getElementById("typewriter");

function type() {
  if (index >= roles.length) index = 0;
  currentRole = roles[index];

  if (!isDeleting) {
    element.textContent = currentRole.substring(0, charIndex++);
    if (charIndex > currentRole.length) {
      isDeleting = true;
      setTimeout(type, delayBetween);
      return;
    }
  } else {
    element.textContent = currentRole.substring(0, charIndex--);
    if (charIndex === 0) {
      isDeleting = false;
      index++;
    }
  }
  setTimeout(type, isDeleting ? eraseSpeed : typeSpeed);
}

type();


const toggleBtn = document.getElementById('theme-toggle');
  const body = document.body;

  // Load saved theme preference
  const currentTheme = localStorage.getItem('theme');
  if (currentTheme === 'light') {
    body.classList.add('light');
    toggleBtn.textContent = "🌙";
  }

  toggleBtn.addEventListener('click', () => {
    body.classList.toggle('light');
    if (body.classList.contains('light')) {
      toggleBtn.textContent = "🌙";
      localStorage.setItem('theme', 'light');
    } else {
      toggleBtn.textContent = "☀️";
      localStorage.setItem('theme', 'dark');
    }
  });