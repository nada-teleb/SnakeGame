import { getInputDirection } from "./input.js";

const snakeBody = [{ x: 11, y: 11 }];
let newSegments = 0;

// control how fast the game actually updates (snake speed)
export const SNAKE_MOVES_PER_SECOND = 5;

export function update() {

	const inputDirection = getInputDirection();

	// update each segment's position to be at the segment ahead of it
	for (let i = snakeBody.length - 2; i >= 0; i--) {
		snakeBody[i + 1] = { ...snakeBody[i] };
	}

	// lastly, update head position
	snakeBody[0].x += inputDirection.x;
	snakeBody[0].y += inputDirection.y;
}

export function draw(gameBoard) {
	snakeBody.forEach(segment => {
		const snakeElement = document.createElement("div");
		snakeElement.style.gridRowStart = segment.y;
		snakeElement.style.gridColumnStart = segment.x;
		snakeElement.classList.add("snake");

		gameBoard.appendChild(snakeElement);
	});
}

export function expandSnake(amount) {
	newSegments += amount;
}


export function isSnakeOnFood(foodPosition) {
	// some function returns true if any segment returns true
	return snakeBody.some( segment => {
		return equalPositions(segment, foodPosition);
	});
}


function equalPositions(pos1, pos2) {
	return pos1.x === pos2.x && pos1.y === pos2.y;
}