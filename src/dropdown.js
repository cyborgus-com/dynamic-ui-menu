const menu = document.querySelector(".menu");

menu.addEventListener("click", (e) => {
  menuAnimation(e.currentTarget);
  openMenu(e.currentTarget);
});

function menuAnimation(el) {
  el.classList.toggle("change");
}

function openMenu(el) {
  // https://www.w3schools.com/howto/howto_js_toggle_hide_show.asp
  const burger = el.querySelector(".container");

  if (!burger) return;
  const isHidden = window.getComputedStyle(burger).display === "none";
  burger.style.display = isHidden ? "block" : "none";
}
