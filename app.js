document.addEventListener("DOMContentLoaded", function() {
  // Simple interaction example: When a lesson box is clicked, alert the lesson
  const lessonBoxes = document.querySelectorAll('.lesson-box');
  lessonBoxes.forEach(box => {
      box.addEventListener('click', function() {
          alert("You clicked on: " + box.textContent);
      });
  });
});