let progress = document.getElementById("prog");
let prev = document.getElementById("prev");
let next = document.getElementById("next");
let circles = document.querySelectorAll(".circle");

let crrActive = 1;

next.addEventListener("click", () => {
  crrActive++;
  if (crrActive > circles.length) {
    crrActive = circles.length;
  }
  update();
});
prev.addEventListener("click", () => {
  crrActive--;
  if (crrActive < 1) {
    crrActive = 1;
  }
  update();
});
function update() {
  circles.forEach((circle, index) => {
    if (index < crrActive) {
      circle.classList.add("active");
    } else {
      circle.classList.remove("active");
    }
    let actives = document.querySelectorAll(".active");
    progress.style.width =
      ((actives.length - 1) / (circles.length - 1)) * 100 + "%";
    if (crrActive === 1) {
      prev.disabled = true;
    } else if (crrActive === circles.length) {
      next.disabled = true;
    } else {
      prev.disabled = false;
      next.disabled = false;
    }
  });
}
