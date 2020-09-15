import { getDirection, resetDirection } from "./direction.js";
import { GAME_BOARD_SIZE } from "./config.js";
let snake = [
  {
    x: Math.round(GAME_BOARD_SIZE / 2),
    y: Math.round(GAME_BOARD_SIZE / 2),
  },
];

const update = () => {
  const direction = getDirection();
  //shifting the snake 1 segment
  for (let i = snake.length - 1; i >= 1; i--) {
    snake[i] = { ...snake[i - 1] };
  }

  //set new position for the head
  snake[0].x += direction.x;
  snake[0].y += direction.y;

  //return the head touch the body
  return onSnake(snake[0], { withHead: true }) || outOfGameBoard(snake[0]);
};
const outOfGameBoard = (pos) => {
  return (
    pos.x <= 0 ||
    pos.x > GAME_BOARD_SIZE ||
    pos.y <= 0 ||
    pos.y > GAME_BOARD_SIZE
  );
};
const checkWin = () => {
  return snake.length >= GAME_BOARD_SIZE * GAME_BOARD_SIZE;
};
const draw = (board) => {
  snake.forEach((segment, index) => {
    const snakeBody = document.createElement("div");
    snakeBody.classList.add("body");
    if (index == 0) snakeBody.classList.add("head");
    snakeBody.style.gridRowStart = segment.y;
    snakeBody.style.gridColumnStart = segment.x;
    board.appendChild(snakeBody);
  });
};
const onSnake = (position, { withHead = false } = {}) => {
  return snake.some((segment, index) => {
    if (withHead && index === 0) {
      return false;
    }
    return segment.x === position.x && segment.y === position.y;
  });
};
const reset = () => {
  resetDirection();
  snake = [
    {
      x: Math.round(GAME_BOARD_SIZE / 2),
      y: Math.round(GAME_BOARD_SIZE / 2),
    },
  ];
};
const snakeGrowUp = (long) => {
  for (let i = 1; i <= long; i++) {
    snake = [...snake, { ...snake[snake.length - 1] }];
  }
};
export { draw, update, onSnake, snakeGrowUp, reset, checkWin };
