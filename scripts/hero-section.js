document.addEventListener("DOMContentLoaded", function () {
  const selectElement = document.querySelector(".utf_chosen_select");

  // Load JSON Data
  fetch("data/services.json")
    .then((response) => response.json())
    .then((data) => {
      populateServicesDropdown(data);
    })
    .catch((error) => console.error("Error loading JSON:", error));

  function populateServicesDropdown(services) {
    services.forEach((service) => {
      const option = document.createElement("option");
      option.value = service.serviceId;
      option.textContent = service.serviceDescription;
      option.dataset.group = service.serviceGroup;
      selectElement.appendChild(option);
    });
  }
});
