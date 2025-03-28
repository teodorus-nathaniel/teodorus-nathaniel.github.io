const projects = [
  {
    name: 'Tanka Watches',
    imgPath: './../img/tanka.png',
    description: 'A platform to learn programming',
    link: 'https://tankawatches.com',
    altLink: 'https://tanka.vercel.app',
  },
  {
    name: 'Kode Kampus',
    imgPath: './../img/kodekampus.png',
    description: 'A platform to learn programming',
    link: 'https://kodekampus.vercel.app',
  },
  {
    name: 'Subsocial StackExchange',
    imgPath: './../img/substrate-stackexchange.png',
    description:
      'StackExchange for Substrate devs made with Subsocial Blockchain Network.<br />2nd place winner of Polkadot NA Hackaton 2022 in Interfaces and Experiences Category',
    link: 'https://substrate-stackexchange.vercel.app',
    linkCode: 'https://github.com/teodorus-nathaniel/substrate-stackexchange',
  },
  {
    name: 'Subsocial StackExchange Reputation Indexer',
    imgPath: './../img/subquery.png',
    description:
      "Indexing service for Subsocial Substrate StackExchange to calculate each wallet's reputation from their on-chain activity.<br />Made with Subquery Network",
    linkCode: 'https://github.com/teodorus-nathaniel/subsocial-subql',
  },
  {
    name: 'Athea',
    imgPath: './../img/athea.png',
    description: 'Frontend Landing Pages for Athea Creative Business',
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
  },
  {
    name: 'UIGram',
    imgPath: './../img/uigram.png',
    description:
      'A web application to create social media community for UI design',
    linkCode: 'https://github.com/teodorus-nathaniel/uigram',
  },
  {
    name: 'UIGram API',
    imgPath: './../img/uigram-api.jpg',
    description: 'API made for UIGram',
    linkCode: 'https://github.com/teodorus-nathaniel/uigram-api',
  },
  {
    name: 'FootbalLeague',
    imgPath: './../img/pwa.png',
    description:
      'Football match information using third-party api with progressive web app (PWA)',
    link: '/projects/footballeague',
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
    link: 'https://play.google.com/store/apps/details?id=edu.bluejack19_1.rhackets',
    linkCode: 'https://github.com/reidoja/RHackets',
  },
]

const container = document.getElementById('projects-container')

export default function initProjects() {
  projects.forEach(
    (project) =>
      (container.innerHTML += `
				<div>
          <img class="project-image-bg placeholder scroll-to-view" src="${
            project.imgPath
          }" alt="">
          <img class="project-image placeholder scroll-to-view" src="./img/placeholder.png" data-src="${
            project.imgPath
          }" alt="${project.name}">
					<div class="project-info">
						<span class="title">${project.name}</span>
						<p>${project.description}</p>
            ${
              project.link
                ? `
              <a target="_blank" rel="noreferrer" class="click-label" href="${
                project.link
              }">Click to visit</a>
              ${
                project.altLink
                  ? `
                <a target="_blank" rel="noreferrer" class="click-label" href="${project.altLink}">Alt Link</a>
              `
                  : ''
              }`
                : ''
            }
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
  )
}
