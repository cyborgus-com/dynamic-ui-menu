const menu = document.querySelector(".menu");

menu.addEventListener("click", (e) => {
  menuAnimation(e.currentTarget);
  openMenu(e.currentTarget);
});

function menuAnimation(el) {
  el.classList.toggle("change");
}

function openMenu(el) {
  el.classList.toggle("menu_visible");
}
