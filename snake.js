const snakeBody = [
	{ x: 10, y: 11 },
	{ x: 11, y: 11 },
	{ x: 12, y: 11 },
	{ x: 13, y: 11 },
	{ x: 14, y: 11 }
];

// control how fast the game actually updates
export const SNAKE_MOVES_PER_SECOND = 2;

export function update() {

	// update each segment's position to be at the segment ahead of it
	for (let i = snakeBody.length - 2; i >= 0; i--) {
		snakeBody[i + 1] = { ...snakeBody[i] };
	}

	// lastly, update head position
	snakeBody[0].x += 1;
	snakeBody[0].y += 0;
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
