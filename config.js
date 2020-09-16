let SNAKE_SPEED = 7;
let GAME_BOARD_SIZE = 10;
let SEGMENT_EACH_FOOD = 1;

const getSnakeSpeed = () => SNAKE_SPEED;
const getGameBoardSize = () => GAME_BOARD_SIZE;
const getSegmentEachFood = () => SEGMENT_EACH_FOOD;

const setSnakeSpeed = (num) => (SNAKE_SPEED = num);
const setGameBoardSize = (num) => (GAME_BOARD_SIZE = num);
const setSegmentEachFood = (num) => (SEGMENT_EACH_FOOD = num);

export {
  getSnakeSpeed,
  setSnakeSpeed,
  getGameBoardSize,
  getSegmentEachFood,
  setGameBoardSize,
  setSegmentEachFood,
};
