import ParticleChasing from './../utility-modules/particle-chasing.js';
import ParticleFleeing from './../utility-modules/particle-fleeing.js';

const canvas = document.getElementById('canvas-particle');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const ctx = canvas.getContext('2d');
const GRAVITY = 2;
const MAX_VELOCITY = 3.5;
const MAX_RADIUS = 150;
const FPS = 30;
const PARTICLES_AMOUNT = 30;
let isPaused = false;

let particles;

let animationReqId;
let animationStopped;

function createParticles (){
	particles = Array.from({ length: PARTICLES_AMOUNT }).map(
		() =>
			Math.random() > 0.5
				? new ParticleFleeing(
						ctx,
						GRAVITY,
						MAX_VELOCITY,
						FPS,
						Math.random() * 20,
						MAX_RADIUS
					)
				: new ParticleChasing(
						ctx,
						GRAVITY,
						MAX_VELOCITY,
						FPS,
						Math.random() * 20
					)
	);
}

function render (){
	ctx.clearRect(0, 0, canvas.width, canvas.height);
	particles.forEach((particle) => {
		particle.update();
		particle.render();
	});
	animationReqId = window.requestAnimationFrame(render);
}

function toggleAnimation (e){
	if (e.key !== 't') return;
	if (animationStopped) {
		animationReqId = window.requestAnimationFrame(render);
	} else {
		window.cancelAnimationFrame(animationReqId);
	}
	animationStopped = !animationStopped;
	isPaused = !isPaused;
}

const observer = new IntersectionObserver((entries) =>
	entries.forEach((entry) => {
		if (entry.isIntersecting) {
			window.addEventListener('click', createParticles);
			window.addEventListener('keypress', toggleAnimation);

			if (isPaused) return;
			animationReqId = window.requestAnimationFrame(render);
			animationStopped = false;
		} else {
			window.cancelAnimationFrame(animationReqId);
			window.removeEventListener('dblclick', createParticles);
			window.removeEventListener('keypress', toggleAnimation);
			animationStopped = true;
		}
	})
);

export default function initCanvasParticles (){
	createParticles();
	observer.observe(canvas);
}
