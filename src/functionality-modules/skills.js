const data = [
  {
    name: 'Javascript / HTML / CSS',
    rating: 5,
  },
  {
    name: 'React JS',
    rating: 4.5,
  },
  {
    name: 'Typescript',
    rating: 4.5,
  },
  {
    name: 'Node JS',
    rating: 4,
  },
  {
    name: 'Python',
    rating: 4,
  },
  {
    name: 'Laravel',
    rating: 4,
  },
];

const skillContainer = document.getElementById('skill-container');

export default function initSkills() {
  data.forEach((skill) => {
    let stars = Array.from({ length: skill.rating }).reduce(
      (prev) => prev + '<i class="fa fa-star"></i>',
      ''
    );
    if (skill.rating % 1 !== 0) stars += '<i class="fa fa-star-half"></i>';

    skillContainer.insertAdjacentHTML(
      'beforeend',
      `                                                       
					<li class="scroll-to-view">
							<span>${skill.name}</span>
							<div class="rating-bar">
									${stars}
							</div>
					</li>
					`
    );
  });
}
