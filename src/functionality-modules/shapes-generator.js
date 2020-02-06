const shapesBackground = document.getElementsByClassName('shapes-background');
const SHAPES_COUNT = 5;
const SHAPE_SOURCES = [ './img/circle.svg', './img/rectangle.svg', './img/triangle.svg' ];

function generateShape (src, left, top, rotate){
	const image = new Image();
	image.src = src;
	image.style = `top: ${top}px; left: ${left}px; transform: rotate(${rotate}deg)`;
	return image;
}

function random (start, end){
	return Math.floor(Math.random() * (end - start)) + start;
}

export default function initShapes (){
	Array.from(shapesBackground).forEach((container) => {
		const { width, height } = container.getBoundingClientRect();
		Array.from({ length: SHAPES_COUNT }).forEach(() =>
			container.appendChild(
				generateShape(
					SHAPE_SOURCES[random(0, SHAPE_SOURCES.length)],
					random(0, width),
					random(0, height),
					random(0, 360)
				)
			)
		);
	});
}
