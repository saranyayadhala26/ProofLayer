
// ProofLayer - JavaScript

console.log("Welcome to ProofLayer!");

// Check that the page has loaded
document.addEventListener("DOMContentLoaded", function () {
  console.log("ProofLayer website loaded successfully.");

  // Select all navigation links
  const navLinks = document.querySelectorAll(".navbar nav a");

  // Log the selected navigation links
  console.log("Navigation links found:", navLinks.length);
});
