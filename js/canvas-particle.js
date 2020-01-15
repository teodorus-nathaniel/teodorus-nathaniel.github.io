{
	function getHypotenuse(x, y) {
		return Math.sqrt(Math.pow(x, 2) + Math.pow(y, 2));
	}

	class Particle {
		constructor(ctx, mousePos, gravity, maxVelocity, fps, width) {
			this.ctx = ctx;
			this.mousePos = mousePos;
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

		getOpacity() {
			const distance = this.getNearestEdgeDistance();
			const maxDistance = 100;
			let opacity = 1;
			if (distance < maxDistance) {
				opacity = distance / maxDistance;
			}
			return opacity;
		}

		getNearestEdgeDistance() {
			const { x, y } = this.position;
			const distanceTop = Math.abs(y);
			const distanceBottom = Math.abs(y - this.ctx.canvas.height);
			const distanceLeft = Math.abs(x);
			const distanceRight = Math.abs(x - this.ctx.canvas.width);

			return Math.min(distanceTop, distanceBottom, distanceLeft, distanceRight);
		}

		getGravity() {
			const diffX = this.mousePos.x - this.position.x;
			const diffY = this.mousePos.y - this.position.y;

			const hypotenuse = getHypotenuse(diffX, diffY);

			const ratio = this.gravity / hypotenuse;

			return {
				x: diffX * ratio,
				y: diffY * ratio,
			};
		}

		updatePosition() {
			this.position.x += this.velocity.x;
			this.position.y += this.velocity.y;
		}

		update() {
			const { x, y } = this.getGravity();

			this.updateVelocity('x', x);
			this.updateVelocity('y', y);

			this.updatePosition();
		}

		render() {
			const { x, y } = this.position;

			this.ctx.beginPath();
			this.ctx.arc(x, y, this.width, 0, 2 * Math.PI);
			this.ctx.stroke();
		}
	}

	class ParticleChasing extends Particle {
		constructor(ctx, mousePos, gravity, maxVelocity, fps, width) {
			super(ctx, mousePos, gravity, maxVelocity, fps, width);
		}

		updateVelocity(axis, gravity) {
			if (
				(this.velocity[axis] > this.maxVelocity && gravity > 0) ||
				(this.velocity[axis] < -this.maxVelocity && gravity < 0)
			)
				return;
			this.velocity[axis] += gravity / this.fps;
		}

		render() {
			const color = `rgba(243,231,233,${this.getOpacity()})`;
			this.ctx.strokeStyle = color;

			super.render();
		}
	}

	class ParticleFleeing extends Particle {
		constructor(ctx, mousePos, gravity, maxVelocity, fps, width, maxRadius) {
			super(ctx, mousePos, gravity, maxVelocity, fps, width);
			this.maxRadius = maxRadius;
			this.isChangingPosition = {
				x: false,
				y: false,
			};
		}

		updateVelocity(axis, gravity) {
			const diffX = this.mousePos.x - this.position.x;
			const diffY = this.mousePos.y - this.position.y;

			const hypotenuse = getHypotenuse(diffX, diffY);

			if (hypotenuse > this.maxRadius) {
				if (this.isChangingPosition[axis]) {
					if (
						(this.position[axis] > this.mousePos[axis] && this.velocity[axis] >= 0) ||
						(this.position[axis] < this.mousePos[axis] && this.velocity[axis] <= 0)
					) {
						this.velocity[axis] = 0;
						this.isChangingPosition.x = false;
						this.isChangingPosition.y = false;
						return;
					}
					this.velocity[axis] -= gravity / FPS;
				} else {
					if (
						(this.position[axis] > this.mousePos[axis] && this.velocity[axis] <= 0) ||
						(this.position[axis] < this.mousePos[axis] && this.velocity[axis] >= 0)
					) {
						this.velocity[axis] = 0;
						return;
					}
					this.velocity[axis] += gravity / FPS;
				}
			} else {
				if (Math.abs(this.velocity[axis]) < this.maxVelocity) this.velocity[axis] -= gravity / FPS;
			}
		}

		updatePosition() {
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

		render() {
			this.ctx.strokeStyle = `rgba(150,150,255,${this.getOpacity()})`;
			super.render();
		}
	}

	const canvas = document.getElementById('canvas-particle');
	canvas.width = window.innerWidth;
	canvas.height = window.innerHeight;

	const ctx = canvas.getContext('2d');
	const GRAVITY = 2;
	const MAX_VELOCITY = 3.5;
	const MAX_RADIUS = 150;
	const FPS = 30;
	const PARTICLES_AMOUNT = 50;

	const mousePos = {
		x: canvas.width / 2,
		y: canvas.height / 2,
	};

	let particles;
	createParticles();

	function createParticles() {
		particles = Array.from({ length: PARTICLES_AMOUNT }).map(
			() =>
				Math.random() > 0.5
					? new ParticleFleeing(ctx, mousePos, GRAVITY, MAX_VELOCITY, FPS, Math.random() * 20, MAX_RADIUS)
					: new ParticleChasing(ctx, mousePos, GRAVITY, MAX_VELOCITY, FPS, Math.random() * 20)
		);
	}

	function updateMouse({ clientX, clientY }) {
		mousePos.x = clientX;
		mousePos.y = clientY - canvas.getBoundingClientRect().top;
	}

	window.addEventListener('mousemove', updateMouse);

	let animationReqId;
	let animationStopped;

	function render() {
		ctx.clearRect(0, 0, canvas.width, canvas.height);
		particles.forEach((particle) => {
			particle.update();
			particle.render();
		});
		animationReqId = window.requestAnimationFrame(render);
	}

	function toggleAnimation(e) {
		if (e.key !== 't') return;
		if (animationStopped) {
			animationReqId = window.requestAnimationFrame(render);
		} else {
			window.cancelAnimationFrame(animationReqId);
		}
		animationStopped = !animationStopped;
	}

	const observer = new IntersectionObserver((entries) =>
		entries.forEach((entry) => {
			if (entry.isIntersecting) {
				animationReqId = window.requestAnimationFrame(render);
				window.addEventListener('click', createParticles);
				window.addEventListener('keypress', toggleAnimation);
				animationStopped = false;
			} else {
				window.cancelAnimationFrame(animationReqId);
				window.removeEventListener('dblclick', createParticles);
				window.removeEventListener('keypress', toggleAnimation);
				animationStopped = true;
			}
		})
	);
	observer.observe(canvas);
}
