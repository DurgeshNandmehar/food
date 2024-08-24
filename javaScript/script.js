document.getElementById("hamButton").addEventListener("click", function () {
  document.getElementById("hamButton").classList.toggle("hamMenuClose");
});

// navbar Collaps
let navBar = document.querySelectorAll(".nav-link");
let navCollapse = document.querySelector(".navbar-collapse.collapse");

navBar.forEach(function (a) {
  a.addEventListener("click", function () {
    navCollapse.classList.remove("show");
    document.getElementById("hamButton").classList.toggle("hamMenuClose");
  });
});

const links = document.querySelectorAll(".nav-link");

links.forEach((link) =>
  link.addEventListener("click", function () {
    links.forEach((link) => link.classList.remove("active"));
    this.classList.add("active");
  })
);
