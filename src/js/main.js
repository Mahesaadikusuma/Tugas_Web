const toggle = document.querySelector(".toggle");
const navbarNav = document.querySelector(".navbar-nav");

document.querySelector(".toggle").onclick = () => {
  navbarNav.classList.toggle("active");
};

document.addEventListener("click", function (e) {
  if (!toggle.contains(e.target) && !navbarNav.contains(e.target)) {
    navbarNav.classList.remove("active");
  }
});

// console.log(toggle);
