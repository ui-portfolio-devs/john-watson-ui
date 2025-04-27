// Navbar Elements
const themeToggle = document.getElementById("themeToggle");
const hamburger = document.getElementById("hamburger");
const navLinks = document.getElementById("navLinks");
const dropdown = document.querySelector(".dropdown");
const searchBox = document.getElementById("searchBox");
const searchIcon = document.getElementById("searchIcon");

// Search Toggle
let searchOpen = false;

searchIcon.addEventListener("click", () => {
  searchBox.classList.toggle("active");
  searchOpen = !searchOpen;

  if (searchOpen) {
    searchIcon.classList.remove("fa-magnifying-glass");
    searchIcon.classList.add("fa-xmark");
  } else {
    searchIcon.classList.remove("fa-xmark");
    searchIcon.classList.add("fa-magnifying-glass");
  }
});

// Theme Toggle
themeToggle.addEventListener("click", () => {
  document.body.classList.toggle("light");

  if (document.body.classList.contains("light")) {
    themeToggle.classList.remove("fa-moon");
    themeToggle.classList.add("fa-sun");
  } else {
    themeToggle.classList.remove("fa-sun");
    themeToggle.classList.add("fa-moon");
  }
});

// Hamburger Toggle
hamburger.addEventListener("click", () => {
  navLinks.classList.toggle("active");
  hamburger.classList.toggle("active");
});

// Dropdown Toggle for Mobile
dropdown.addEventListener("click", (e) => {
  if (window.innerWidth <= 768) {
    e.preventDefault();
    dropdown.classList.toggle("open");
  }
});

// Typing Animation
const typingElement = document.getElementById("typing");
const texts = ["Frontend Developer", "Programmer", "Tech Enthusiast"];
let textIndex = 0;
let charIndex = 0;
let isDeleting = false;
let typingSpeed = 100;

function type() {
  const currentText = texts[textIndex];
  typingElement.textContent = currentText.substring(0, charIndex);

  if (!isDeleting && charIndex < currentText.length) {
    charIndex++;
    typingSpeed = 100;
  } else if (isDeleting && charIndex > 0) {
    charIndex--;
    typingSpeed = 50;
  } else {
    isDeleting = !isDeleting;
    if (!isDeleting) {
      textIndex = (textIndex + 1) % texts.length;
      typingSpeed = 1000;
    } else {
      typingSpeed = 500;
    }
  }

  setTimeout(type, typingSpeed);
}

document.addEventListener("DOMContentLoaded", type);

// Stats Counter Animation
let hasCounted = false;

function animateCounter(id, target, duration) {
  const counter = document.getElementById(id);
  let start = 0;
  const startTime = performance.now();

  function updateCounter(currentTime) {
    const elapsed = currentTime - startTime;
    const progress = Math.min(elapsed / duration, 1);
    counter.textContent = Math.floor(progress * target);

    if (progress < 1) {
      requestAnimationFrame(updateCounter);
    } else {
      counter.textContent = target;
    }
  }

  requestAnimationFrame(updateCounter);
}

window.addEventListener('scroll', () => {
  const statsSection = document.getElementById('stats');
  if (!statsSection) return;
  const sectionTop = statsSection.getBoundingClientRect().top;
  const triggerPoint = window.innerHeight * 0.8;

  if (sectionTop < triggerPoint && !hasCounted) {
    hasCounted = true;
    animateCounter('counter1', 1500, 2000);
    animateCounter('counter2', 2500, 2200);
    animateCounter('counter3', 1280, 1800);
    animateCounter('counter4', 3020, 2500);
  }
});

// Fade-up Animation on Scroll
const faders = document.querySelectorAll('.success-card');

function appearOnScroll(entries, observer) {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('show');
      observer.unobserve(entry.target);
    }
  });
}

const options = {
  threshold: 0.3
};

const observer = new IntersectionObserver(appearOnScroll, options);

faders.forEach(card => {
  card.classList.add('fade-up');
  observer.observe(card);
});
// Update Footer Year Dynamically
document.getElementById("currentYear").textContent = new Date().getFullYear();

// Scroll to Top Functionality
const scrollToTopBtn = document.getElementById("scrollToTop");

window.addEventListener('scroll', () => {
  if (window.scrollY > 300) {
    scrollToTopBtn.style.display = "flex";
  } else {
    scrollToTopBtn.style.display = "none";
  }
});

scrollToTopBtn.addEventListener('click', () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
});
