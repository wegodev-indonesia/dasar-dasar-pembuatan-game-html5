const canvas = document.getElementById("gameCanvas");
const ctx = canvas.getContext("2d");

let player = {
  x: 0,
  y: 0,
  width: 50,
  height: 50,
  color: "green",
};

document.addEventListener("keydown", (event) => {
  if (event.code === "ArrowLeft") {
    player.x -= 10;
  } else if (event.code === "ArrowRight") {
    player.x += 10;
  }
});

function bikinKotak() {
  ctx.fillStyle = player.color;
  ctx.fillRect(player.x, player.y, player.width, player.height);
}

function render() {
  ctx.clearRect(0, 0, canvas.width, canvas.height); // clear canvas
  bikinKotak(); // draw player
  requestAnimationFrame(render); // update animation
}

render();
