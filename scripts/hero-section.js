document.addEventListener("DOMContentLoaded", function () {
  
  console.log("DOM fully loaded and parsed."); // Debug log
  const selectElement = document.getElementById("listBox");
  const searchButton = document.getElementById("searchButton");

  if (!searchButton) {
    console.error("Search button with ID 'searchButton' not found.");
    return;
  }

  if (!selectElement) {
    console.error("Dropdown element with class 'utf_chosen_select' not found.");
    return;
  }


  // Load JSON Data
  fetch("data/services.json")
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
    selectElement.innerHTML = '<option disabled selected>Select a Service</option>';

    services.forEach((service) => {
      const option = document.createElement("option");
      option.value = service.serviceId;
      option.textContent = service.serviceDescription;
      option.dataset.group = service.serviceGroup;
      selectElement.appendChild(option);
    });

    selectElement.addEventListener("change", function () {
      const selectedOption = selectElement.options[selectElement.selectedIndex];
      alert(`You selected: ${selectedOption.textContent} (ID: ${selectedOption.value})`);
    });
  }
});


// document.addEventListener("DOMContentLoaded", function () {
//   const selectElement = document.querySelector(".utf_chosen_select");

//   // Log the current folder path
//   console.log("Current folder path:", window.location.href);

//   // Load JSON Data
//   fetch("data/services.json")
//     .then((response) => {
//       if (!response.ok) {
//         throw new Error(`HTTP error! status: ${response.status}`);
//       }
//       return response.json();
//     })
//     .then((data) => {
//       populateServicesDropdown(data);
//     })
//     .catch((error) => console.error("Error loading JSON:", error));

//   function populateServicesDropdown(services) {
//     // Clear existing options
//     selectElement.innerHTML = '<option disabled selected>Select a Service</option>';

//     services.forEach((service) => {
//       const option = document.createElement("option");
//       option.value = service.serviceId;
//       option.textContent = service.serviceDescription;
//       option.dataset.group = service.serviceGroup;
//       selectElement.appendChild(option);
//     });

//     // Add an event listener to prompt the selected value
//     selectElement.addEventListener("change", function () {
//       const selectedOption = selectElement.options[selectElement.selectedIndex];
//       const selectedText = selectedOption.textContent;
//       const selectedValue = selectedOption.value;
//       alert(`You selected: ${selectedText} (ID: ${selectedValue})`);
//     });
//   }

//   // Search button functionality
//   const searchButton = document.getElementById("searchButton");
//   searchButton.addEventListener("click", (e) => {
//     e.preventDefault();

//     const query = document.getElementById("searchQuery").value.trim();
//     const location = document.getElementById("searchLocation").value.trim();
//     const category = selectElement.value;

//     if (query && location && category) {
//       const selectedOption = selectElement.options[selectElement.selectedIndex];
//       const categoryDescription = selectedOption.textContent;
//       alert(
//         `Searching for "${query}" in "${location}" under the "${categoryDescription}" category.`
//       );
//     } else {
//       alert("Please fill out all fields before searching.");
//     }
//   });
// });
