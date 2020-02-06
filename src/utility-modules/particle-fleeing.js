import Particle from './particle.js';
import { getHypotenuse } from './utility-functions.js';
import { getMousePositionRelativeTo } from './mouse.js';

export default class ParticleFleeing extends Particle {
	constructor (ctx, gravity, maxVelocity, fps, width, maxRadius) {
		super(ctx, gravity, maxVelocity, fps, width);
		this.maxRadius = maxRadius;
		this.isChangingPosition = {
			x: false,
			y: false,
		};
	}

	updateVelocity (axis, gravity) {
		const mousePos = getMousePositionRelativeTo(this.ctx.canvas);

		const diffX = mousePos.x - this.position.x;
		const diffY = mousePos.y - this.position.y;

		const hypotenuse = getHypotenuse(diffX, diffY);

		if (hypotenuse > this.maxRadius) {
			if (this.isChangingPosition[axis]) {
				if (
					(this.position[axis] > mousePos[axis] && this.velocity[axis] >= 0) ||
					(this.position[axis] < mousePos[axis] && this.velocity[axis] <= 0)
				) {
					this.velocity[axis] = 0;
					this.isChangingPosition.x = false;
					this.isChangingPosition.y = false;
					return;
				}
				this.velocity[axis] -= gravity / this.fps;
			} else {
				if (
					(this.position[axis] > mousePos[axis] && this.velocity[axis] <= 0) ||
					(this.position[axis] < mousePos[axis] && this.velocity[axis] >= 0)
				) {
					this.velocity[axis] = 0;
					return;
				}
				this.velocity[axis] += gravity / this.fps;
			}
		} else {
			if (Math.abs(this.velocity[axis]) < this.maxVelocity)
				this.velocity[axis] -= gravity / this.fps;
		}
	}

	updatePosition () {
		super.updatePosition();
		if (this.position.x < 0) {
			this.position.x = window.innerWidth + this.position.x;
			this.isChangingPosition.x = true;
		} else if (this.position.x > window.innerWidth) {
			this.position.x -= window.innerWidth;
			this.isChangingPosition.x = true;
		}

		if (this.position.y < 0) {
			this.position.y = window.innerHeight + this.position.y;
			this.isChangingPosition.y = true;
		} else if (this.position.y > window.innerHeight) {
			this.position.y -= window.innerHeight;
			this.isChangingPosition.y = true;
		}
	}

	render () {
		this.ctx.strokeStyle = `rgba(150,150,255,${this.getOpacity()})`;
		super.render();
	}
}
