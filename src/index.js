import initCanvasParticles from './functionality-modules/canvas-particle.js';
import initShapes from './functionality-modules/shapes-generator.js';
import initProjects from './functionality-modules/projects.js';
import initNav from './functionality-modules/nav.js';
import initHomeCanvas from './functionality-modules/canvas.js';
import initColorSwitch from './functionality-modules/color-mode.js';
import initIntersection from './functionality-modules/intersection.js';
import initSkills from './functionality-modules/skills.js';
import initSlider from './functionality-modules/slider.js';

function initAge (){
	const age = Math.floor(
		(new Date() - new Date(2000, 11, 9)) / (3600 * 24 * 365 * 1000)
	);
	document.getElementById('age-label').textContent = age + ' years old';
}

function init (){
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
