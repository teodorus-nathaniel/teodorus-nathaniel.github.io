import initCanvasParticles from './modules/canvas-particle.js';
import initShapes from './modules/shapes-generator.js';
import initProjects from './modules/projects.js';
import initNav from './modules/nav.js';
import initHomeCanvas from './modules/canvas.js';
import initColorSwitch from './modules/color-mode.js';
import initIntersection from './modules/intersection.js';
import initSkills from './modules/skills.js';
import initSlider from './modules/slider.js';

function initAge() {
	const age = Math.floor(
		(new Date() - new Date(2000, 11, 9)) / (3600 * 24 * 365 * 1000)
	);
	document.getElementById('age-label').textContent = age + ' years old';
}

function init() {
	initAge();
	initHomeCanvas();
	initCanvasParticles();
	initShapes();
	initNav();
	initSkills();
	initProjects();
	initColorSwitch();
	initSlider();
	initIntersection();
}

window.addEventListener('DOMContentLoaded', () => init());
