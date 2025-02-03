document.addEventListener('DOMContentLoaded', () => {
  const blogLinks = document.querySelectorAll('.blog-link');

  blogLinks.forEach((link) => {
      link.addEventListener('click', (event) => {
          event.preventDefault();
          alert(`Navigating to: ${link.textContent}`);
      });
  });
});
