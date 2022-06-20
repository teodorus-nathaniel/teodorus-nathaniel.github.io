const projects = [
  {
    name: 'Athea',
    imgPath: './../img/athea.png',
    description: 'Frontend Landing Pages for Athea Creative Business',
    link: 'https://atheavisuals.com',
    altLink: 'https://athea.vercel.app',
    linkCode: 'https://github.com/teodorus-nathaniel/athea',
  },
  {
    name: 'SOM Visualizer',
    imgPath: './../img/som-visualizer.png',
    description: 'Visualization of Self Organizing Map AI using svelte',
    link: '/projects/som-visualizer',
    linkCode: 'https://github.com/teodorus-nathaniel/som-visualizer',
  },
  {
    name: 'BPNN Visualizer',
    imgPath: './../img/bpnn-visualizer.png',
    description:
      'Visualization of Back Propagation Neural Network using PIXI.js and GSAP',
    link: '/projects/bpnn-visualizer',
    linkCode: 'https://github.com/teodorus-nathaniel/bpnn-visualizer',
  },
  {
    name: 'Watuku',
    imgPath: './../img/watuku.PNG',
    description: 'Frontend Webapp for Multi-Level Marketing (MLM) Business',
    link: 'https://www.watuku.net/',
  },
  {
    name: 'UIGram',
    imgPath: './../img/uigram.png',
    description:
      'A web application to create social media community for UI design',
    link: 'https://uigram.herokuapp.com',
    linkCode: 'https://github.com/teodorus-nathaniel/uigram',
  },
  {
    name: 'UIGram API',
    imgPath: './../img/uigram-api.jpg',
    description: 'API made for UIGram',
    link: 'https://uigram-api.herokuapp.com',
    linkCode: 'https://github.com/teodorus-nathaniel/uigram-api',
  },
  {
    name: 'FootbalLeague',
    imgPath: './../img/pwa.png',
    description:
      'Football match information using third-party api with progressive web app (PWA)',
    link: 'https://footballeague.herokuapp.com',
    linkCode: 'https://github.com/teodorus-nathaniel/DicodingSubmission3PWA',
  },
  {
    name: 'Othello',
    imgPath: './../img/othello.jpg',
    description: 'Simple othello game',
    link: '/projects/othello',
    linkCode: 'https://github.com/teodorus-nathaniel/Othello',
  },
  {
    name: 'RHackeTS',
    imgPath: './../img/RHackets.png',
    description: 'A mobile app to keep track of badminton matches',
    link:
      'https://play.google.com/store/apps/details?id=edu.bluejack19_1.rhackets',
    linkCode: 'https://github.com/reidoja/RHackets',
  },
];

const container = document.getElementById('projects-container');

export default function initProjects() {
  projects.forEach(
    (project) =>
      (container.innerHTML += `
				<div>
					<img class="project-image placeholder scroll-to-view" src="./img/placeholder.png" data-src="${
            project.imgPath
          }" alt="${project.name}">
					<div class="project-info">
						<span class="title">${project.name}</span>
						<p>${project.description}</p>
						<a target="_blank" rel="noreferrer" class="click-label" href="${
              project.link
            }">Click to visit</a>
            ${project.altLink ? `
              <a target="_blank" rel="noreferrer" class="click-label" href="${
                project.altLink
              }">Alt Link</a>
            ` : ''}
            ${
              project.linkCode
                ? `<a
                target="_blank"
                rel="noreferrer"
                class="click-label"
                href="${project.linkCode}">
                Click to see code
              </a>`
                : ''
            }
					</div>
				</div>
			`)
  );
}
