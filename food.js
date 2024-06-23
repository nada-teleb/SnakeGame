import { isSnakeOnFood, expandSnake } from "./snake.js";
import { randomGridPosition } from "./grid.js"

let food = getRandomFoodPosition();

// how much the snake grows when eat food
const EXPANSION_RATE = 1;

export function update() {
	// check if snake is on top of the food -> can eat it
	if (isSnakeOnFood(food)) {
		expandSnake(EXPANSION_RATE);
		food = getRandomFoodPosition();
	}
}

export function draw(gameBoard) {
	const foodElement = document.createElement("div");
	foodElement.style.gridRowStart = food.y;
	foodElement.style.gridColumnStart = food.x;
	foodElement.classList.add("food");

	gameBoard.appendChild(foodElement);
}

// get random position for food that's not overlapping with the snake's position
function getRandomFoodPosition() {
	let newFoodPosition;

	while (newFoodPosition == null || isSnakeOnFood(newFoodPosition))
		newFoodPosition = randomGridPosition();

	return newFoodPosition;
}