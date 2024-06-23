const GRID_SIZE = 21;

export function randomGridPosition() {
	return { 
		x: Math.floor(Math.random() * GRID_SIZE) + 1,
		y: Math.floor(Math.random() * GRID_SIZE) + 1 
	};
}

// check if position is greater than 21 (grid size) or less than 1 (minimum grid size)
export function outsideGrid(position) {
	return (
		position.x < 1 || position.x > GRID_SIZE || 
		position.y < 1 || position.y > GRID_SIZE
	);
}