import { getInputDirection } from "./input.js";

const snakeBody = [{ x: 11, y: 11 }];
let newSegments = 0;

// control how fast the game actually updates (snake speed)
export const SNAKE_MOVES_PER_SECOND = 5;

export function update() {

	addSegmentsToSnakesTail();

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


export function isOnSnake(position, { ignoreHead = false } = {}) {
	// some function returns true if any segment returns true
	return snakeBody.some((segment, currentIndex) => {
		if (ignoreHead && currentIndex === 0)
			return false;
		return equalPositions(segment, position);
	});
}


export function getSnakeHead() {
	return snakeBody[0];
}


// check if the snake's head is touching any other snake body segments
export function snakeIntersection() {
	return isOnSnake(getSnakeHead(), { ignoreHead: true });
}


function equalPositions(pos1, pos2) {
	return pos1.x === pos2.x && pos1.y === pos2.y;
}

function addSegmentsToSnakesTail() {
	for (let i = 0; i < newSegments; i++)
		// duplicate last segment in the snake to the end of the snake, the expansion will be only displayed after moving 
		snakeBody.push({ ...snakeBody[snakeBody.length - 1] });

	newSegments = 0;
}