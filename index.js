// Your code goes here
document.addEventListener("DOMContentLoaded", function() {
    domContentUpdated();
  });

  function domContentUpdated() {
   const javaText = document.getElementById('text');
   javaText.textContent = 'This is really cool!';
  }