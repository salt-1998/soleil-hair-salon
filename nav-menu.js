//humbergerMenu
let humburger = () => {
  document.getElementById("nav-f").classList.toggle("nav-fadin");
  document
    .getElementById("humburgerMenu-i")
    .classList.toggle("humburgerMenu-slidex");
  document.getElementById("headerMenu").classList.toggle("header-menu-click");
};

document.getElementById("humburgerMenu").addEventListener("click", () => {
  humburger();
});

/*
function humburger() {
  document.getElementById("nav-f").classList.toggle("nav-fadin");
}
document.getElementById("humburgerMenu").addEventListener("click", function () {
  humburger();
});

let list = document.getElementsByClassName("nav-list");

for (let i = 0; i < list.length; i++) {
  list[i].addEventListener("click", function () {
    hamburger();
  });
}*/
