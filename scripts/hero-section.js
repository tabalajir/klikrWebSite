document.addEventListener("DOMContentLoaded", function () {
  console.log("DOM fully loaded and parsed.");

  // Function to initialize dropdown logic
  function initDropdown() {
    const selectElement = document.getElementById("listBox");
    const searchButton = document.getElementById("searchButton");

    if (!selectElement) {
      console.error("Dropdown element with ID 'listBox' not found. Waiting...");
      return;
    }

    if (!searchButton) {
      console.error("Search button with ID 'searchButton' not found.");
      return;
    }

    console.log("Dropdown found, initializing...");

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
      selectElement.innerHTML = '<option>Choose Category</option>';
      services.forEach((service) => {
        const option = document.createElement("option");
        option.value = service.serviceId;
        option.textContent = service.serviceDescription;
        option.dataset.group = service.serviceGroup;
        selectElement.appendChild(option);
      });

      selectElement.addEventListener("change", function () {
        const selectedOption = selectElement.options[selectElement.selectedIndex];
        console.log(`Selected: ${selectedOption.textContent}, ID: ${selectedOption.value}`);
      });
    }
  }

  // Use MutationObserver to detect when hero-section.html is loaded
  const observer = new MutationObserver(() => {
    if (document.getElementById("listBox")) {
      console.log("Detected hero-section is now in the DOM!");
      observer.disconnect(); // Stop observing
      initDropdown(); // Initialize dropdown now
    }
  });

  observer.observe(document.getElementById("hero"), { childList: true, subtree: true });
});
