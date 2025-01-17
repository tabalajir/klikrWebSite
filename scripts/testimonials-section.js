document.addEventListener('DOMContentLoaded', () => {
  const testimonials = document.querySelectorAll('.testimonial');
  const prevButton = document.getElementById('prev');
  const nextButton = document.getElementById('next');
  let currentIndex = 0;

  // Function to show the current testimonial
  const showTestimonial = (index) => {
      testimonials.forEach((testimonial, i) => {
          testimonial.classList.remove('active');
          if (i === index) {
              testimonial.classList.add('active');
          }
      });
  };

  // Show the first testimonial initially
  showTestimonial(currentIndex);

  // Event Listener for Previous Button
  prevButton.addEventListener('click', () => {
      currentIndex = (currentIndex - 1 + testimonials.length) % testimonials.length;
      showTestimonial(currentIndex);
  });

  // Event Listener for Next Button
  nextButton.addEventListener('click', () => {
      currentIndex = (currentIndex + 1) % testimonials.length;
      showTestimonial(currentIndex);
  });
});
