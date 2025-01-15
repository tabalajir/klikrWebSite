let selectedMenu = "Home"; // Track selected menu item

function selectMenu(menuName) {
  selectedMenu = menuName;

  // Update the menu item selection style
  const menuItems = document.querySelectorAll('.menu-item');
  menuItems.forEach(item => {
    if (item.innerText === selectedMenu) {
      item.classList.add('selected');
    } else {
      item.classList.remove('selected');
    }
  });
}
