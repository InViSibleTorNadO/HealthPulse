// Smooth scroll for internal nav links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  });
});

// Back to top button
const backToTopBtn = document.getElementById("backToTop");
window.onscroll = function() {
  backToTopBtn.style.display = (window.scrollY > 300) ? "block" : "none";
};

backToTopBtn.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

// Dark mode toggle (optional enhancement)
const toggleBtn = document.getElementById("themeToggle");

if (toggleBtn) {
  toggleBtn.addEventListener("click", () => {
    document.body.classList.toggle("dark-theme");

    // Update button text
    toggleBtn.innerText = document.body.classList.contains("dark-theme") ? "Light Mode" : "Dark Mode";

    // Save the theme preference in localStorage
    if (document.body.classList.contains("dark-theme")) {
      localStorage.setItem("theme", "dark");
    } else {
      localStorage.setItem("theme", "light");
    }
  });
}

// Apply saved theme preference from localStorage on page load
window.onload = () => {
  if (localStorage.getItem("theme") === "dark") {
    document.body.classList.add("dark-theme");
    toggleBtn.innerText = "Light Mode"; // Change button text to "Light Mode"
  } else {
    document.body.classList.remove("dark-theme");
    toggleBtn.innerText = "Dark Mode"; // Set default button text to "Dark Mode"
  }
};