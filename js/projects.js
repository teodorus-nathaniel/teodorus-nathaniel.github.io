const projects = [
	{
		name: 'FootbalLeague',
		imgPath: './../img/pwa.png',
		link: 'https://footballeague.herokuapp.com',
	},
	{
		name: 'Othello',
		imgPath: './../img/othello.png',
		link: 'https://othelloo.herokuapp.com',
	},
];

console.log('object');
const container = document.getElementById('projects-container');
projects.forEach(
	(project) =>
		(container.innerHTML += `
      <a href="${project.link}" target="_blank">
        <div class="project-image" style="background-image: url(${project.imgPath})"></div>
        <div class="project-info">
          <span class="title">${project.name}</span>
          <span>Click to visit</span>
        </div>
      </a>
    `)
);
