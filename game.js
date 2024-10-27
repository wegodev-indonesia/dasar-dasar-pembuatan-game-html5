const canvas = document.getElementById("gameCanvas");
const ctx = canvas.getContext("2d");

let player = {
  x: 0,
  y: 0,
  width: 50,
  height: 50,
  color: "green",
};

let enemy = {
  x: 100,
  y: 0,
  width: 50,
  height: 50,
  color: "red",
};

document.addEventListener("keydown", (event) => {
  if (event.code === "ArrowLeft") {
    player.x -= 10;
  } else if (event.code === "ArrowRight") {
    player.x += 10;
  } else if (event.code === "ArrowDown") {
    player.y += 10;
  } else if (event.code === "ArrowUp") {
    player.y -= 10;
  }
});

function bikinKotak() {
  ctx.fillStyle = player.color;
  ctx.fillRect(player.x, player.y, player.width, player.height);
}

function bikinMusuh() {
  ctx.strokeStyle = enemy.color;
  ctx.strokeRect(enemy.x, enemy.y, enemy.width, enemy.height);
}

// collision detection
function isCollide(a, b) {
  return !(
    a.y + a.height < b.y ||
    a.y > b.y + b.height ||
    a.x + a.width < b.x ||
    a.x > b.x + b.width
  );
}

function createText(text, position, style) {
  ctx.fillStyle = style.color;
  ctx.font = style.size;

  let x = position.x || 0;
  let y = position.y || 0;

  if (position.xCenter) {
    const textWidth = ctx.measureText(text).width;
    x = canvas.width / 2 - textWidth / 2;
  }

  if (position.yCenter) {
    y = canvas.height / 2;
  }

  console.log("x", x);
  console.log("y", y);

  ctx.fillText(text, x, y);
}

function render() {
  ctx.clearRect(0, 0, canvas.width, canvas.height); // clear canvas
  bikinKotak(); // draw player
  bikinMusuh(); // draw musuh

  if (isCollide(player, enemy)) {
    console.log("COLLISION DETECTED");
    console.log("player", player);
    console.log("enemy", enemy);

    createText(
      "Tabrakan",
      { xCenter: true, yCenter: true },
      { size: "20px Arial", color: "Black" }
    );
  }

  requestAnimationFrame(render); // update animation
}

render();
