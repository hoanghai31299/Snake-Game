let direction = { x: 0, y: 0 };
let lastDirection;
window.addEventListener("keydown", (e) => {
  switch (e.key) {
    case "ArrowUp":
      if (direction.y !== 0) {
        return;
      }
      direction = { x: 0, y: -1 };
      break;
    case "ArrowDown":
      if (direction.y !== 0) return;
      direction = { x: 0, y: 1 };
      break;
    case "ArrowRight":
      if (direction.x !== 0) return;
      direction = { x: 1, y: 0 };
      break;
    case "ArrowLeft":
      if (direction.x !== 0) return;
      direction = { x: -1, y: 0 };
      break;
  }
});

const getDirection = () => {
  return direction;
};
const resetDirection = () => {
  direction = { x: 0, y: 0 };
};
export { getDirection, resetDirection };
