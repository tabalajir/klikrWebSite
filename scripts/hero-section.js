document.addEventListener("DOMContentLoaded", function () {
  console.log("DOM fully loaded and parsed.");

  const selectElement = document.getElementById("listBox");
  const searchButton = document.getElementById("searchButton");

  if (!selectElement) {
    console.error("Dropdown element with ID 'listBox' not found.");
    return;
  }

  if (!searchButton) {
    console.error("Search button with ID 'searchButton' not found.");
    return;
  }

  // Load JSON Data
  fetch("../data/services.json")
    .then((response) => {
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      return response.json();
    })
    .then((data) => {
      console.log("Successfully loaded JSON data:", data);
      populateServicesDropdown(data);
    })
    .catch((error) => console.error("Error loading JSON:", error));

  function populateServicesDropdown(services) {
    // Clear existing options
    selectElement.innerHTML = '<option>Choose Category</option>';

    // Populate dropdown with services
    services.forEach((service) => {
      const option = document.createElement("option");
      option.value = service.serviceId; // Use serviceId as the value
      option.textContent = service.serviceDescription; // Display serviceDescription
      option.dataset.group = service.serviceGroup; // Add a data attribute for serviceGroup
      selectElement.appendChild(option);
    });

    // Add event listener to handle selection
    selectElement.addEventListener("change", function () {
      const selectedOption = selectElement.options[selectElement.selectedIndex];
      console.log(`Selected: ${selectedOption.textContent}, ID: ${selectedOption.value}`);
    });
  }
});
