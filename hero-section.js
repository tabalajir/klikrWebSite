document.addEventListener("DOMContentLoaded", () => {
  // Animating the Hero Section Text (Find your Favourite Photographer)
  const heroText = document.querySelector('.hero-text');
  if (heroText) {
    heroText.classList.add('animate-hero-text');
  }

  // Button animation effect or scroll action (Optional)
  const heroButton = document.querySelector('.hero-button');
  if (heroButton) {
    heroButton.addEventListener('click', () => {
      // For example: Smooth scroll to the next section (Services or Featured Photographers)
      document.querySelector('.services-section').scrollIntoView({ behavior: 'smooth' });
    });
  }
});