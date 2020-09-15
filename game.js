import {
  draw as drawSnake,
  update as updateSnake,
  reset as resetSnake,
  checkWin,
} from "./snake.js";
import { draw as drawFood, update as updateFood } from "./food.js";
import { SNAKE_SPEED, GAME_BOARD_SIZE } from "./config.js";

const gameBoard = document.querySelector(".game");

gameBoard.style.gridTemplateRows = `repeat(${GAME_BOARD_SIZE},1fr)`;
gameBoard.style.gridTemplateColumns = `repeat(${GAME_BOARD_SIZE},1fr)`;
let lastRenderTime = 0;

//load game every SNAKE_SPEED second
const main = (currentTime) => {
  const secondSinceLastRender = (currentTime - lastRenderTime) / 1000;
  window.requestAnimationFrame(main);
  if (secondSinceLastRender < 1 / SNAKE_SPEED) return;
  lastRenderTime = currentTime;
  if (update())
    if (confirm("You lose")) {
      reset();
    }
  if (checkWin())
    if (confirm("You win")) {
      reset();
    }
  draw();
};

window.requestAnimationFrame(main);
const update = () => {
  const checkLose = updateSnake();
  updateFood();
  return checkLose;
};
const draw = () => {
  gameBoard.innerHTML = "";
  drawSnake(gameBoard);
  drawFood(gameBoard);
};
const reset = () => {
  resetSnake();
};
