const data = [
  {
    name: 'Typescript',
    rating: 4.5,
  },
  {
    name: 'React JS',
    rating: 4.5,
  },
  {
    name: 'Next JS',
    rating: 4.5,
  },
  {
    name: 'GraphQL',
    rating: 4.5,
  },
  {
    name: 'Node JS',
    rating: 4.5,
  },
  {
    name: 'Svelte',
    rating: 4.5,
  },
  {
    name: 'Python',
    rating: 4,
  },
  {
    name: 'Laravel',
    rating: 4,
  },
]

const skillContainer = document.getElementById('skill-container')

export default function initSkills() {
  data.forEach((skill) => {
    skillContainer.insertAdjacentHTML(
      'beforeend',
      `                                                       
					<li class="scroll-to-view">
							<span>${skill.name}</span>
					</li>
					`
    )
  })
}
