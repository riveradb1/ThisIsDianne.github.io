// Make sure the Typed.js library is included before using this code

// Wrap your code in a function to ensure it runs after the DOM is fully loaded
document.addEventListener('DOMContentLoaded', function() {
  var typed = new Typed('.text', {
    strings: [
      '<span style="color: #274e13;">Learner</span>', 
      '<span style="color: #13274e;">Worker</span>', 
      '<span style="color: #4e1327;">Provider</span>'
    ],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true
  });
});
