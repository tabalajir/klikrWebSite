// how-klikr-works.js

document.addEventListener("DOMContentLoaded", function () {
  const featuresArea = document.querySelector(".features-area .row");

  const features = [
    {
      icon: "flaticon-settings",
      title: "Search",
      description: "Use our advanced filters to find photographers that meet your style and budget.",
      link: "#",
    },
    {
      icon: "flaticon-chat",
      title: "Book Instantly",
      description: "Choose a photographer or let our AI suggest the best one for your needs.",
      link: "#",
    },
    {
      icon: "flaticon-like",
      title: "Submit Enquiry",
      description: "Submit an enquiry with specific details to get personalized offers from photographers.",
      link: "#",
    },
    {
      icon: "flaticon-trophy",
      title: "Online Proofing",
      description: "Receive and compare proposals from multiple photographers to find the perfect match.",
      link: "#",
    },
  ];

  features.forEach((feature, index) => {
    const featureCard = document.createElement("div");
    featureCard.className = "col-lg-3 col-md-6";
    featureCard.innerHTML = `
      <div class="single-features mb-30" style="animation-delay: ${0.2 * (index + 1)}s;">
        <div class="features-icon mb-25">
          <i class="${feature.icon}"></i>
        </div>
        <div class="features-content">
          <h3>${feature.title}</h3>
          <p>${feature.description}</p>
          <a href="${feature.link}">Read More</a>
        </div>
      </div>
    `;
    featuresArea.appendChild(featureCard);
  });
});
