import Point from '../utility-modules/point.js';
import { getMousePositionRelativeTo } from '../utility-modules/mouse.js';
import { getCurrentTextColor, getColor } from '../utility-modules/color.js';
import autoRescaleComponent from '../utility-modules/window-resize-controller.js';

function isInRadius (ctx, point){
	const { x, y } = getMousePositionRelativeTo(ctx.canvas);

	const radius = 100;
	return (
		point.x < x + radius &&
		point.x > x - radius &&
		point.y < y + radius &&
		point.y > y - radius
	);
}

function getDistancePercentage (ctx, point){
	const { x, y } = getMousePositionRelativeTo(ctx.canvas);
	return Math.sqrt(Math.pow(point.x - x, 2) + Math.pow(point.y - y, 2));
}

const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

const pointSize = 1.5;
const pointCount = 50;

let points = Array.from({ length: pointCount }).map(() => new Point());

let reqId;

function animate (){
	ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);
	const removedParticles = [];
	points.forEach((point) => {
		ctx.fillStyle = getColor(getCurrentTextColor(), point.opacity);
		ctx.beginPath();
		ctx.arc(point.x, point.y, pointSize, 0, Math.PI * 2, true);
		ctx.fill();
		if (isInRadius(ctx, point)) {
			ctx.strokeStyle = getColor(
				getCurrentTextColor(),
				Math.abs(100 - getDistancePercentage(ctx, point)) / 100
			);
			ctx.moveTo(point.x, point.y);

			const { x, y } = getMousePositionRelativeTo(ctx.canvas);
			ctx.lineTo(x, y);
			ctx.stroke();
		}

		point.move();
		if (point.opacity < 0) removedParticles.push(point);
	});

	points = points.filter((point) => !removedParticles.includes(point));
	points.push(
		...Array.from({ length: removedParticles.length }).map(() => new Point())
	);

	reqId = window.requestAnimationFrame(animate);
}

const observer = new IntersectionObserver((entries) => {
	entries.forEach((entry) => {
		if (entry.isIntersecting) {
			reqId = window.requestAnimationFrame(animate);
		} else {
			window.cancelAnimationFrame(reqId);
		}
	});
});

export default function initHomeCanvas (){
	observer.observe(canvas);
	autoRescaleComponent(ctx.canvas);
}
