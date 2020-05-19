const projects = [
  {
    name: 'FootbalLeague',
    imgPath: './../img/pwa.png',
    description:
      'Football match information using third-party api with progressive web app (PWA)',
    link: 'https://footballeague.herokuapp.com',
    linkCode: 'https://github.com/teodorus-nathaniel/footballeague'
  },
  {
    name: 'Othello',
    imgPath: './../img/othello.jpg',
    description: 'Simple othello game',
    link: 'https://othelloo.herokuapp.com',
    linkCode: 'https://github.com/teodorus-nathaniel/othelo'
  },
  {
    name: 'UIGram',
    imgPath: './../img/uigram.png',
    description:
      'A web application to create social media community for UI design',
    link: 'https://uigram.herokuapp.com',
    linkCode: 'https://github.com/teodorus-nathaniel/uigram'
  },
  {
    name: 'UIGram API',
    imgPath: './../img/uigram-api.jpg',
    description: 'API made for UIGram',
    link: 'https://uigram-api.herokuapp.com',
    linkCode: 'https://github.com/teodorus-nathaniel/uigram-api'
  }
];

const container = document.getElementById('projects-container');

export default function initProjects (){
  projects.forEach(
    (project) =>
      (container.innerHTML += `
				<div>
					<img class="project-image placeholder scroll-to-view" src="./img/placeholder.png" data-src="${project.imgPath}" alt="${project.name}">
					<div class="project-info">
						<span class="title">${project.name}</span>
						<p>${project.description}</p>
						<a target="_blank" rel="noreferrer" class="click-label" href="${project.link}">Click to visit</a>
						<a target="_blank" rel="noreferrer" class="click-label" href="${project.linkCode}">Click to see code</a>
					</div>
				</div>
			`)
  );
}
