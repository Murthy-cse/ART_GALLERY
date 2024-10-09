// JavaScript to enhance the user experience

// A simple example of a welcome alert when the page loads
window.onload = function() {
    alert("Welcome to the Art Gallery!");
  };
  
  // Function to log a user action when they click a navigation link
  const navLinks = document.querySelectorAll("nav a");
  
  navLinks.forEach(link => {
    link.addEventListener("click", () => {
      console.log(`Navigated to ${link.textContent}`);
    });
  });
  
  // Functionality to add smooth scrolling for internal links (if any are added in the future)
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
      document.querySelector(this.getAttribute('href')).scrollIntoView({
        behavior: 'smooth'
      });
    });
  });
  