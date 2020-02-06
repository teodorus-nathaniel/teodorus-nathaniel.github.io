export default class Point {
	constructor () {
		this.x = Math.random() * window.innerWidth;
		this.y = Math.random() * window.innerHeight;
		this.veloX = Math.random() * 0.5 * (Math.random() < 0.5 ? -1 : 1);
		this.veloY = Math.random() * 0.5 * (Math.random() < 0.5 ? -1 : 1);
		this.opacity = 0;
	}

	move () {
		const boundary = 50;
		this.x += this.veloX;
		this.y += this.veloY;
		if (
			(this.x < boundary && this.veloX < 0) ||
			(this.x > window.innerWidth - boundary && this.veloX > 0) ||
			(this.y < boundary && this.veloY < 0) ||
			(this.y > window.innerHeight - boundary && this.veloY > 0)
		) {
			this.fadeOut();
		} else if (this.opacity < 1) {
			this.fadeIn();
		}
	}

	fadeOut () {
		this.opacity -= 0.01;
	}

	fadeIn () {
		this.opacity += 0.01;
	}
}
