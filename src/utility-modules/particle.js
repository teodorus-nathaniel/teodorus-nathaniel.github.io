import { getHypotenuse } from './utility-functions.js';
import { getMousePositionRelativeTo } from './mouse.js';

export default class Particle {
	constructor (ctx, gravity, maxVelocity, fps, width) {
		this.ctx = ctx;
		this.gravity = gravity;
		this.maxVelocity = maxVelocity;
		this.fps = fps;
		this.width = width;

		this.position = {
			x: Math.random() * ctx.canvas.width,
			y: Math.random() * ctx.canvas.height,
		};
		this.velocity = {
			x: 0,
			y: 0,
		};
	}

	getOpacity () {
		const distance = this.getNearestEdgeDistance();
		const maxDistance = 100;
		let opacity = 1;
		if (distance < maxDistance) {
			opacity = distance / maxDistance;
		}
		return opacity;
	}

	getNearestEdgeDistance () {
		const { x, y } = this.position;
		const distanceTop = Math.abs(y);
		const distanceBottom = Math.abs(y - this.ctx.canvas.height);
		const distanceLeft = Math.abs(x);
		const distanceRight = Math.abs(x - this.ctx.canvas.width);

		return Math.min(distanceTop, distanceBottom, distanceLeft, distanceRight);
	}

	getGravity () {
		const mousePos = getMousePositionRelativeTo(this.ctx.canvas);

		const diffX = mousePos.x - this.position.x;
		const diffY = mousePos.y - this.position.y;

		const hypotenuse = getHypotenuse(diffX, diffY);

		const ratio = this.gravity / hypotenuse;

		return {
			x: diffX * ratio,
			y: diffY * ratio,
		};
	}

	updatePosition () {
		this.position.x += this.velocity.x;
		this.position.y += this.velocity.y;
	}

	update () {
		const { x, y } = this.getGravity();

		this.updateVelocity('x', x);
		this.updateVelocity('y', y);

		this.updatePosition();
	}

	render () {
		const { x, y } = this.position;

		this.ctx.beginPath();
		this.ctx.arc(x, y, this.width, 0, 2 * Math.PI);
		this.ctx.stroke();
	}
}
