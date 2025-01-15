// register-section.js

document.addEventListener("DOMContentLoaded", () => {
  const steps = document.querySelectorAll(".steps");
  const stepsSection = document.querySelector(".steps-section");

  // Helper to check if an element is in the viewport
  const isInViewport = (element) => {
    const rect = element.getBoundingClientRect();
    return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
  };

  // Animate cards when in viewport
  const animateSteps = () => {
    steps.forEach((step, index) => {
      if (isInViewport(step)) {
        step.classList.add("fadeInUp", `delay-${index + 1}`);
      }
    });
  };

  // Ensure the dotted line connects dynamically
  const adjustDottedLine = () => {
    const line = document.querySelector(".dotted-line");
    const firstStep = steps[0];
    const lastStep = steps[steps.length - 1];

    if (line && firstStep && lastStep) {
      const startX = firstStep.getBoundingClientRect().left + firstStep.offsetWidth / 2;
      const startY = firstStep.getBoundingClientRect().top + firstStep.offsetHeight / 2;

      const endX = lastStep.getBoundingClientRect().left + lastStep.offsetWidth / 2;
      const endY = lastStep.getBoundingClientRect().top + lastStep.offsetHeight / 2;

      line.style.left = `${startX}px`;
      line.style.top = `${startY}px`;
      line.style.width = `${Math.sqrt(Math.pow(endX - startX, 2) + Math.pow(endY - startY, 2))}px`;
      line.style.transform = `rotate(${Math.atan2(endY - startY, endX - startX)}rad)`;
    }
  };

  // Attach scroll and resize events
  window.addEventListener("scroll", animateSteps);
  window.addEventListener("resize", adjustDottedLine);

  // Initial execution
  animateSteps();
  adjustDottedLine();
});
