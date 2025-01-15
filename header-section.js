document.addEventListener("DOMContentLoaded", () => {
  // Mobile Menu Toggle (for future mobile responsiveness)
  const mobileMenuButton = document.getElementById('mobile-menu-button');
  const mobileMenu = document.getElementById('mobile-menu');

  if (mobileMenuButton && mobileMenu) {
    mobileMenuButton.addEventListener('click', () => {
      mobileMenu.classList.toggle('show');
    });
  }

  // Add active class to menu items when clicked
  const menuItems = document.querySelectorAll('.menu-item');

  menuItems.forEach((item) => {
    item.addEventListener('click', () => {
      menuItems.forEach((item) => item.classList.remove('active'));
      item.classList.add('active');
    });
  });
});