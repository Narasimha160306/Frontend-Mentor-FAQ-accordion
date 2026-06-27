const questionBoxes = document.querySelectorAll(".question");

for (const question of questionBoxes) {
  question.addEventListener('click', (event) => {
    const parent = event.currentTarget.closest('.question');
    if (parent.children[1]) {
      parent.children[1].classList.toggle('show');
    }
    const img = parent.querySelector('img');
    if (img) {
      if (img.src.includes("icon-plus.svg")) {
        img.src = "/Frontend-Mentor-FAQ-accordion/assets/images/icon-minus.svg";
      } else {
        img.src = "/Frontend-Mentor-FAQ-accordion/assets/images/icon-plus.svg";
      }
    }
  });
}
