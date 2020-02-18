const projects = [
  {
    name: 'FootbalLeague',
    imgPath: './../img/pwa.png',
    description:
      'Football match information using third-party api with progressive web app (PWA)',
    link: 'https://footballeague.herokuapp.com',
  },
  {
    name: 'Othello',
    imgPath: './../img/othello.jpg',
    description: 'Simple othello game',
    link: 'https://othelloo.herokuapp.com',
  },
];

const container = document.getElementById('projects-container');

export default function initProjects (){
  projects.forEach(
    (project) =>
      (container.innerHTML += `
				<a href="${project.link}" target="_blank" rel="noreferrer">
					<img class="project-image placeholder scroll-to-view" src="./img/placeholder.png" data-src="${project.imgPath}" alt="${project.name}">
					<div class="project-info">
						<span class="title">${project.name}</span>
						<p>${project.description}</p>
						<span class="click-label">Click to visit</span>
					</div>
				</a>
			`)
  );
}
