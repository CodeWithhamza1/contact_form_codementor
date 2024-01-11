
  
  // Wrap your existing code in a function to ensure the DOM is fully loaded
document.addEventListener("DOMContentLoaded", function () {
    // Create a GSAP timeline
    var tl = gsap.timeline();
  
    // Set initial properties (opacity: 0) for the form container
    tl.set("#formContainer", { opacity: 0 });
  
    // Add a fade-in animation to the form container
    tl.to("#formContainer", { opacity: 1, duration: 1, ease: "power2.out" });
  
    // Your existing code here...
  
    function submitForm(event) {
      event.preventDefault(); // Prevent the default form submission
  
      // ... (your existing form submission logic) ...
  
      // Redirect to the second page with the query string
      window.location.href = 'second_page.html' + queryString;
    }
  });
  

  function submitForm(event) {
    event.preventDefault(); // Prevent the default form submission
  
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var issue = document.getElementById('issue').value;
    var comment = document.getElementById('comment').value;
  
    // Construct the query string with form data
    var queryString = '?name=' + encodeURIComponent(name) +
                      '&email=' + encodeURIComponent(email) +
                      '&issue=' + encodeURIComponent(issue) +
                      '&comment=' + encodeURIComponent(comment);
  
    // Redirect to the second page with the query string
    window.location.href = 'second_page.html' + queryString;
  }