// const right = document.querySelector("#right");
// const left = document.querySelector("#left");
// const down = document.querySelector("#down");
// const up = document.querySelector("#up");

// right.addEventListener("click", () => {
//   x.innerText = Number(x.innerText) + 1;
// });
// left.addEventListener("click", () => {
//   x.innerText = Number(x.innerText) - 1;
// });
// up.addEventListener("click", () => {
//   y.innerText = Number(y.innerText) + 1;
// });
// down.addEventListener("click", () => {
//   y.innerText = Number(y.innerText) - 1;
// });
// const x = document.querySelector("#x");
// const y = document.querySelector("#y");

// const position = { x: 0, y: 0 };
// x.innerText = position.x;
// y.innerText = position.y;

// const move = (direction) => {
//   switch (direction) {
//     case "up":
//       position.y = position.y + 1;
//       y.innerText = position.y;
//       break;
//     case "right":
//       position.x = position.x + 1;
//       x.innerText = position.x;
//       break;
//     case "left":
//       position.x = position.x - 1;
//       x.innerText = position.x;
//       break;
//     case "down":
//       position.y = position.y - 1;
//       y.innerText = position.y;
//       break;
//     default:
//       console.log("에러");
//   }
// };

// const arrow = ["right", "left", "up", "down"];
// arrow.forEach((v) => {
//   const direction = document.querySelector(`#${v}`);
//   direction.addEventListener("click", () => {
//     move(v);
//   });
// });

// right.addEventListener("click", () => {
//   move("right");
// });
// left.addEventListener("click", () => {
//   move("left");
// });
// up.addEventListener("click", () => {
//   move("up");
// });
// down.addEventListener("click", () => {
//   move("down");
// });

// =============================================================================

// as - assertion[단언];
var x = document.querySelector("#x");
var y = document.querySelector("#y");
var position = { x: 0, y: 0 };
x.innerHTML = String(position.x);
y.innerHTML = String(position.y);
var move = function (direction) {
  switch (direction) {
    case "up":
      position.y = position.y + 1;
      y.innerHTML = String(position.y);
      break;
    case "right":
      position.x = position.x + 1;
      x.innerHTML = String(position.x);
      break;
    case "left":
      position.x = position.x - 1;
      x.innerHTML = String(position.x);
      break;
    case "down":
      position.y = position.y - 1;
      y.innerHTML = String(position.y);
      break;
    default:
      console.log("에러");
  }
};
var arrow = ["right", "left", "up", "down"];
arrow.forEach(function (v) {
  var direction = document.querySelector("#".concat(v));
  direction.addEventListener("click", function () {
    move(v);
  });
});
