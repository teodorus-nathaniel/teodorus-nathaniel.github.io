function updateMouse ({ clientX, clientY }){
	mousePos.x = clientX;
	mousePos.y = clientY;
}

const mousePos = {
	x: 0,
	y: 0,
};

window.addEventListener('mousemove', updateMouse);

export function getMousePosition (){
	return mousePos;
}

export function getMousePositionRelativeTo (object){
	const { x, y } = mousePos;
	return {
		x,
		y: y - object.getBoundingClientRect().top,
	};
}
