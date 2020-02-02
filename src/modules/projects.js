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
					<div class="project-image" style="background-image: url(${project.imgPath})"></div>
					<div class="project-info">
						<span class="title">${project.name}</span>
						<span>Click to visit</span>
					</div>
				</a>
			`)
	);
}
