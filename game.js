import {
  draw as drawSnake,
  update as updateSnake,
  reset as resetSnake,
  checkWin,
} from "./snake.js";
import {
  draw as drawFood,
  update as updateFood,
  reset as resetScore,
} from "./food.js";
import {
  getSnakeSpeed,
  getGameBoardSize,
  setSegmentEachFood,
  setGameBoardSize,
  setSnakeSpeed,
} from "./config.js";
let GAME_BOARD_SIZE = getGameBoardSize();
let SNAKE_SPEED = getSnakeSpeed();

const gameBoard = document.querySelector(".game");
const btnMode = document.querySelector(".mode");
const container = document.querySelector(".container");
btnMode.addEventListener("click", () => {
  container.classList.toggle("invert");
});
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
  resetScore();
};
