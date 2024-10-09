document.addEventListener("DOMContentLoaded", function () {
    const form = document.querySelector("form");
    
    form.addEventListener("submit", function (event) {
      const name = document.querySelector("input[name='name']").value;
      const gender = document.querySelector("input[name='gender']").value;
      const email = document.querySelector("input[name='email']").value;
      const password = document.querySelector("input[name='password']").value;
  
      // Simple validation
      if (!name || !gender || !email || !password) {
        alert("Please fill in all fields.");
        event.preventDefault(); // Prevent form submission
      } else {
        // Optional: Add further checks like email format validation
        if (!validateEmail(email)) {
          alert("Please enter a valid email address.");
          event.preventDefault(); // Prevent form submission
        }
      }
    });
  
    function validateEmail(email) {
      // Simple regex for email validation
      const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return regex.test(email);
    }
  });
  