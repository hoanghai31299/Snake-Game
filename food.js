import { onSnake, snakeGrowUp } from "./snake.js";
import { GAME_BOARD_SIZE, SEGMENT_EACH_FOOD } from "./config.js";

let food = getRandomPosition();
function getRandomPosition() {
  let newPos;

  //loop check if food on snake body
  while (newPos == null || onSnake(newPos)) {
    let x = Math.floor(Math.random() * GAME_BOARD_SIZE) + 1;
    let y = Math.floor(Math.random() * GAME_BOARD_SIZE) + 1;
    newPos = { x, y };
  }
  return newPos;
}

const update = () => {
  if (onSnake(food)) {
    food = getRandomPosition();
    snakeGrowUp(SEGMENT_EACH_FOOD);
  }
};

const draw = (board) => {
  const foodElement = document.createElement("div");
  foodElement.classList.add("food");
  foodElement.style.gridRowStart = food.y;
  foodElement.style.gridColumnStart = food.x;
  board.appendChild(foodElement);
};

export { draw, update };
