const mario = document.getElementById("mario");
const obstacle = document.getElementById("obstacle");

document.addEventListener("keydown", function (event) {
  if (event.code === "Space" || event.key === "ArrowUp") {
    jump();
  }
});

function jump() {
  if (!mario.classList.contains("jump")) {
    mario.classList.add("jump");
    setTimeout(function () {
      mario.classList.remove("jump");
    }, 500);
  }
}

// Simple collision detection
setInterval(() => {
  const marioTop = parseInt(window.getComputedStyle(mario).getPropertyValue("top"));
  const obstacleLeft = parseInt(window.getComputedStyle(obstacle).getPropertyValue("left"));

  if (obstacleLeft < 100 && obstacleLeft > 0 && marioTop >= 250) {
    alert("Game Over! Refresh to play again.");
  }
}, 10);
