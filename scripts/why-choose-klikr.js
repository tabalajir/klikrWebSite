document.addEventListener('DOMContentLoaded', () => {
  const features = document.querySelectorAll('.feature');

  features.forEach((feature) => {
      feature.addEventListener('mouseenter', () => {
          feature.style.backgroundColor = '#f0f8ff'; // Light blue on hover
      });

      feature.addEventListener('mouseleave', () => {
          feature.style.backgroundColor = '#fff'; // Revert to white
      });
  });
});
