const projects = [
	{
		name: 'FootbalLeague',
		imgPath: './../img/pwa.png',
		link: 'https://footballeague.herokuapp.com',
	},
	{
		name: 'Othello',
		imgPath: './../img/othello.jpg',
		link: 'https://othelloo.herokuapp.com',
	},
];

const container = document.getElementById('projects-container');

export default function initProjects (){
	projects.forEach(
		(project) =>
			(container.innerHTML += `
				<a href="${project.link}" target="_blank" rel="noreferrer">
					<img class="project-image placeholder scroll-to-view" src="./img/loading.gif" data-src="${project.imgPath}" alt="${project.name}">
					<div class="project-info">
						<span class="title">${project.name}</span>
						<span>Click to visit</span>
					</div>
				</a>
			`)
	);
}
