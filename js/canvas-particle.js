{
	/*
	stroke / fill?
	#233b28 #363b23
	#014775 #752f01
	*/

	function getHypotenuse (x, y){
		return Math.sqrt(Math.pow(x, 2) + Math.pow(y, 2));
	}

	class Particle {
		constructor (ctx, mousePos, gravity, maxVelocity, fps, width) {
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

		getGravity () {
			const diffX = this.mousePos.x - this.position.x;
			const diffY = this.mousePos.y - this.position.y;

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

	class ParticleChasing extends Particle {
		constructor (ctx, mousePos, gravity, maxVelocity, fps, width) {
			super(ctx, mousePos, gravity, maxVelocity, fps, width);
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
			this.ctx.strokeStyle = '#233b28';
			super.render();
		}
	}

	class ParticleFleeing extends Particle {
		constructor (ctx, mousePos, gravity, maxVelocity, fps, width, maxRadius) {
			super(ctx, mousePos, gravity, maxVelocity, fps, width);
			this.maxRadius = maxRadius;
			this.isChangingPosition = {
				x: false,
				y: false,
			};
		}

		updateVelocity (axis, gravity) {
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
			this.ctx.strokeStyle = '#363b23';
			super.render();
		}
	}

	const canvas = document.getElementById('canvas-particle');
	canvas.width = window.innerWidth;
	canvas.height = window.innerHeight;

	const ctx = canvas.getContext('2d');
	const GRAVITY = 2;
	const MAX_VELOCITY = 4;
	const MAX_RADIUS = 300;
	const FPS = 30;
	const PARTICLES_AMOUNT = 50;

	const mousePos = {
		x: canvas.width / 2,
		y: canvas.height / 2,
	};

	let particles;
	createParticles();

	function createParticles (){
		particles = Array.from({ length: PARTICLES_AMOUNT }).map(
			() =>
				Math.random() > 0.5
					? new ParticleFleeing(ctx, mousePos, GRAVITY, MAX_VELOCITY, FPS, Math.random() * 20, MAX_RADIUS)
					: new ParticleChasing(ctx, mousePos, GRAVITY, MAX_VELOCITY, FPS, Math.random() * 20)
		);
	}

	function updateMouse ({ clientX, clientY }){
		mousePos.x = clientX;
		mousePos.y = clientY - canvas.getBoundingClientRect().top;
	}

	window.addEventListener('mousemove', updateMouse);

	let animationReqId;

	function render (){
		ctx.clearRect(0, 0, canvas.width, canvas.height);
		particles.forEach((particle) => {
			particle.update();
			particle.render();
		});
		animationReqId = window.requestAnimationFrame(render);
	}

	const observer = new IntersectionObserver((entries) =>
		entries.forEach((entry) => {
			if (entry.isIntersecting) {
				animationReqId = window.requestAnimationFrame(render);
				window.addEventListener('click', createParticles);
			} else {
				window.cancelAnimationFrame(animationReqId);
				window.removeEventListener('click', createParticles);
			}
		})
	);
	observer.observe(canvas);
}
