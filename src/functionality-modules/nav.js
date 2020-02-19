import autoRescaleComponent from '../utility-modules/window-resize-controller.js';

function scroll(y) {
	window.scrollTo({
		top: y,
		left: 0,
		behavior: 'smooth',
	});
}

const elements = {
	profile: document.getElementById('profile'),
	experiences: document.getElementById('experiences'),
	skills: document.getElementById('skills'),
	projects: document.getElementById('projects'),
	about: document.getElementById('about'),
};

const anchors = {
	gotoProfile: {
		elements: document.getElementsByClassName('goto-profile'),
		target: 1,
	},
	gotoExperiences: {
		elements: document.getElementsByClassName('goto-experiences'),
		target: 2,
	},
	gotoSkills: {
		elements: document.getElementsByClassName('goto-skills'),
		target: 3,
	},
	gotoProjects: {
		elements: document.getElementsByClassName('goto-projects'),
		target: 4,
	},
	gotoAbout: {
		elements: document.getElementsByClassName('goto-about'),
		target: 5,
	},
};

function keypressListener(e) {
	if (e.key === 'Enter') {
		this.click();
	}
}

export default function initNav() {
	const viewport = {
		width: window.innerWidth,
		height: window.innerHeight,
	};
	autoRescaleComponent(viewport);

	// TODO: masih goblok, masukin effect scroll
	Object.values(anchors).forEach(({ elements, target }) => {
		Array.from(elements).forEach((el) => {
			el.addEventListener('click', () => {
				scroll(viewport.height * target);
				console.log(viewport.height);
			});
			el.addEventListener('keypress', keypressListener);
		});
	});

	document.getElementById('nav-icon').addEventListener('click', function() {
		this.classList.toggle('open');
	});
}
