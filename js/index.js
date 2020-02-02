import initCanvasParticles from './modules/canvas-particle.js';
import initShapes from './modules/shapes-generator.js';
import initProjects from './modules/projects.js';
import initNav from './modules/nav.js';
import initHomeCanvas from './modules/canvas.js';
import initColorSwitch from './modules/color-mode.js';
import initIntersection from './modules/intersection.js';
import initSkills from './modules/skills.js';
import initSlider from './modules/slider.js';

function init (){
	initCanvasParticles();
	initShapes();
	initProjects();
	initNav();
	initHomeCanvas();
	initColorSwitch();
	initIntersection();
	initSkills();
	initSlider();
}

init();
