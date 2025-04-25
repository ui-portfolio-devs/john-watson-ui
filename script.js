const themeToggle = document.getElementById("themeToggle");
const hamburger = document.getElementById("hamburger");
const navLinks = document.getElementById("navLinks");
const dropdown = document.querySelector(".dropdown");

const searchBox = document.getElementById("searchBox");
const searchIcon = document.getElementById("searchIcon");

let searchOpen = false;

searchIcon.addEventListener("click", () => {
  searchBox.classList.toggle("active");
  searchOpen = !searchOpen;

  if (searchOpen) {
    searchIcon.classList.remove("fa-magnifying-glass");
    searchIcon.classList.add("fa-xmark"); // close icon
  } else {
    searchIcon.classList.remove("fa-xmark");
    searchIcon.classList.add("fa-magnifying-glass");
  }
});

// Theme toggle
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

// Hamburger toggle
hamburger.addEventListener("click", () => {
  navLinks.classList.toggle("active");
  hamburger.classList.toggle("active");
});

// Dropdown for mobile
dropdown.addEventListener("click", () => {
  if (window.innerWidth <= 768) {
    dropdown.classList.toggle("open");
  }
});
