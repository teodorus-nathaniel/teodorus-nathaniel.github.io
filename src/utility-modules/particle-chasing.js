import Particle from './particle.js';
import { getColor, getCurrentTextColor } from './color.js';

export default class ParticleChasing extends Particle {
	constructor (ctx, gravity, maxVelocity, fps, width) {
		super(ctx, gravity, maxVelocity, fps, width);
	}

	updateVelocity (axis, gravity) {
		if (
			(this.velocity[axis] > this.maxVelocity && gravity > 0) ||
			(this.velocity[axis] < -this.maxVelocity && gravity < 0)
		)
			return;
		this.velocity[axis] += gravity / this.fps;
	}

	render () {
		this.ctx.strokeStyle = getColor(getCurrentTextColor(), this.getOpacity());

		super.render();
	}
}
