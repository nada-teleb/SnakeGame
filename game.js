import { SNAKE_MOVES_PER_SECOND, update as updateSnake, draw as drawSnake } from './snake.js';

const gameBoard = document.getElementById('game-board');
let lastRenderTime = 0;

function main(currentTime) {
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
}

function draw() {
	gameBoard.innerHTML = '';
	drawSnake(gameBoard);
}