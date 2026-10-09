window.addEventListener("load", () => {
  document.getElementById("loader").classList.add("hide");
});

const menuBtn = document.getElementById("menuBtn");

const navLinks = document.getElementById("navLinks");

menuBtn.addEventListener("click", () => {
  navLinks.classList.toggle("open");

  menuBtn.textContent = navLinks.classList.contains("open") ? "✕" : "☰";
});

document.querySelectorAll(".nav-links a").forEach((link) => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("open");

    menuBtn.textContent = "☰";
  });
});

const sections = document.querySelectorAll("section");

const navItems = document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", () => {
  let current = "";

  sections.forEach((section) => {
    const top = section.offsetTop - 180;

    if (window.scrollY >= top) {
      current = section.id;
    }
  });

  navItems.forEach((link) => {
    link.classList.remove("active");

    if (link.getAttribute("href") === "#" + current) {
      link.classList.add("active");
    }
  });
});

document.getElementById("contactForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const button = this.querySelector("button");

  button.textContent = "Message Sent ✓";

  button.style.background = "#0891b2";

  this.reset();

  setTimeout(() => {
    button.textContent = "Send Message →";

    button.style.background = "";
  }, 3000);
});

document.getElementById("year").textContent = new Date().getFullYear();
