{
	class Point {
		constructor() {
			this.x = Math.random() * window.innerWidth;
			this.y = Math.random() * window.innerHeight;
			this.veloX = Math.random() * 0.5 * (Math.random() < 0.5 ? -1 : 1);
			this.veloY = Math.random() * 0.5 * (Math.random() < 0.5 ? -1 : 1);
			this.opacity = 0;
		}

		move() {
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

		fadeOut() {
			this.opacity -= 0.01;
		}

		fadeIn() {
			this.opacity += 0.01;
		}
	}

	function isInRadius(point) {
		const radius = 100;
		return (
			point.x < mousePos.x + radius &&
			point.x > mousePos.x - radius &&
			point.y < mousePos.y + radius &&
			point.y > mousePos.y - radius
		);
	}

	function getDistancePercentage(point) {
		return Math.sqrt(Math.pow(point.x - mousePos.x, 2) + Math.pow(point.y - mousePos.y, 2));
	}

	const mousePos = {
		x: 0,
		y: 0,
	};

	const canvas = document.getElementById('canvas');
	canvas.width = window.innerWidth;
	canvas.height = window.innerHeight;

	window.addEventListener('resize', () => {
		canvas.width = 0;
		canvas.height = 0;
		canvas.width = window.innerWidth;
		canvas.height = window.innerHeight;
	});
	window.addEventListener('mousemove', (e) => {
		const x = e.clientX;
		const y = e.clientY + window.scrollY;

		mousePos.x = x;
		mousePos.y = y;
	});

	const ctx = canvas.getContext('2d');
	let points = [];
	const pointSize = 1.5;
	const pointCount = 75;

	for (let i = 0; i < 50; i++) {
		points.push(new Point());
	}

	let reqId;

	function animate() {
		ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);
		const removedParticles = [];
		points.forEach((point) => {
			ctx.fillStyle = `rgba(230, 230, 230, ${point.opacity})`;
			ctx.beginPath();
			ctx.arc(point.x, point.y, pointSize, 0, Math.PI * 2, true);
			ctx.fill();
			if (isInRadius(point)) {
				ctx.strokeStyle = `rgba(230, 230, 230, ${(100 - getDistancePercentage(point)) / 100})`;
				ctx.moveTo(point.x, point.y);
				ctx.lineTo(mousePos.x, mousePos.y);
				ctx.stroke();
			}

			point.move();
			if (point.opacity < 0) removedParticles.push(point);
		});
		points = points.filter((point) => !removedParticles.includes(point));
		points.push(...Array.from({ length: removedParticles.length }).map(() => new Point()));
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
	observer.observe(canvas);
}
