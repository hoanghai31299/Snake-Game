import { onSnake, snakeGrowUp } from "./snake.js";
import { getGameBoardSize, getSegmentEachFood } from "./config.js";

let food = getRandomPosition();
function getRandomPosition() {
  let newPos;

  //loop check if food on snake body
  while (newPos == null || onSnake(newPos)) {
    let x = Math.floor(Math.random() * getGameBoardSize()) + 1;
    let y = Math.floor(Math.random() * getGameBoardSize()) + 1;
    newPos = { x, y };
  }
  return newPos;
}
let diem = 1;
const score = document.querySelector(".score");
const update = () => {
  if (onSnake(food)) {
    diem++;
    score.innerHTML = diem * 100;
    food = getRandomPosition();
    snakeGrowUp(getSegmentEachFood());
  }
};

const draw = (board) => {
  const foodElement = document.createElement("div");
  foodElement.classList.add("food");
  foodElement.style.gridRowStart = food.y;
  foodElement.style.gridColumnStart = food.x;
  board.appendChild(foodElement);
};
const reset = () => {
  diem = 0;
  score.innerHTML = diem * 100;
};
export { draw, update, reset };
