let selectedMenu = "Home";

function selectMenu(menu) {
  document.querySelectorAll(".menu-item").forEach(item => {
    item.classList.remove("selected");
  });
  document.getElementById(`menu-${menu}`).classList.add("selected");
  selectedMenu = menu;
}

// Initially select the Home menu item
document.getElementById("menu-Home").classList.add("selected");
