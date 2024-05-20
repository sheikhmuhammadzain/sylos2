const menu = document.getElementById("menu");
document.querySelectorAll(".mobile-nav li").forEach((li) => {
  li.addEventListener("click", () => {
    menu.className = "ri-menu-5-fill";
    document.querySelector(".mobile-nav").className = "mobile-nav";
  });
});
menu.addEventListener("click", () => {
  if (menu.className == "ri-menu-5-fill") {
    menu.className = "ri-close-line";
    document.querySelector(".mobile-nav").className = "mobile-nav active";
  } else {
    menu.className = "ri-menu-5-fill";
    document.querySelector(".mobile-nav").className = "mobile-nav";
  }
});
