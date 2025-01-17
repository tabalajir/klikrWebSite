// script.js
document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('enquiryForm');

  form.addEventListener('submit', (event) => {
      event.preventDefault(); // Prevent the form from submitting normally

      const formData = new FormData(form);
      const enquiryData = {};

      formData.forEach((value, key) => {
          enquiryData[key] = value;
      });

      // Simple validation check
      if (!validateForm(enquiryData)) {
          alert('Please fill out all required fields correctly.');
          return;
      }

      console.log('Form submitted:', enquiryData);
      alert('Thank you for your enquiry. We will get back to you soon!');

      // Reset the form after submission
      form.reset();
  });

  function validateForm(data) {
      const requiredFields = ['eventType', 'location', 'date', 'time', 'budget', 'name', 'mobileNo', 'emailId'];

      for (const field of requiredFields) {
          if (!data[field]) {
              return false;
          }
      }

      const mobilePattern = /^[0-9]{10}$/;
      const emailPattern = /^[^@\\s]+@[^@\\s]+\\.[^@\\s]+$/;

      if (!mobilePattern.test(data.mobileNo)) {
          alert('Please enter a valid 10-digit mobile number.');
          return false;
      }

      if (!emailPattern.test(data.emailId)) {
          alert('Please enter a valid email address.');
          return false;
      }

      return true;
  }
});
