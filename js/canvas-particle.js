{
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

			const hypotenuse = Math.sqrt(Math.pow(diffX, 2) + Math.pow(diffY, 2));
			const ratio = this.gravity / hypotenuse;

			return {
				x: diffX * ratio,
				y: diffY * ratio,
			};
		}

		updateVelocity (axis, gravity) {
			if (
				(this.velocity[axis] > this.maxVelocity && gravity > 0) ||
				(this.velocity[axis] < -this.maxVelocity && gravity < 0)
			)
				return;
			this.velocity[axis] += gravity / this.fps;
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
			this.ctx.fillStyle = '#014775';
			this.ctx.arc(x, y, this.width, 0, 2 * Math.PI);
			this.ctx.fill();
		}
	}

	const canvas = document.getElementById('canvas-particle');
	canvas.width = window.innerWidth;
	canvas.height = window.innerHeight;

	const ctx = canvas.getContext('2d');
	const GRAVITY = 1.5;
	const MAX_VELOCITY = 4;
	const FPS = 30;
	const PARTICLES_AMOUNT = 25;

	const mousePos = {
		x: canvas.width / 2,
		y: canvas.height / 2,
	};

	let particles;
	createParticles();

	function createParticles (){
		particles = Array.from({ length: PARTICLES_AMOUNT }).map(
			() => new Particle(ctx, mousePos, GRAVITY, MAX_VELOCITY, FPS, Math.random() * 20)
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
