import { SNAKE_MOVES_PER_SECOND, update as updateSnake, draw as drawSnake, getSnakeHead, snakeIntersection } from './snake.js';
import { update as updateFood, draw as drawFood } from './food.js';
import { outsideGrid } from './grid.js';

const gameBoard = document.getElementById('game-board');
let lastRenderTime = 0;
let gameOver = false;

function main(currentTime) {

	if (gameOver) {
		return alert('game over');
	}

	window.requestAnimationFrame(main);

	const secondSinceLastRender = (currentTime - lastRenderTime) / 1000;
	let secondsBetweenEachMove = 1 / SNAKE_MOVES_PER_SECOND;
	// if time since last render is less than the seconds between each move, no need to move the snake
	if (secondSinceLastRender < secondsBetweenEachMove)
		return;

	lastRenderTime = currentTime;

	update();
	draw();
}

window.requestAnimationFrame(main);

function update() {
	updateSnake();
	updateFood();
	checkForDeath();
}

function draw() {
	gameBoard.innerHTML = '';
	drawSnake(gameBoard);
	drawFood(gameBoard);
}


function checkForDeath() {
	gameOver = outsideGrid(getSnakeHead()) || snakeIntersection();
}