{
	function scroll (y){
		window.scrollTo({
			top: y,
			left: 0,
			behavior: 'smooth',
		});
	}

	document.getElementById('nav-icon').addEventListener('click', function (){
		this.classList.toggle('open');
	});

	const profile = document.getElementById('profile');
	const experiences = document.getElementById('experiences');
	const skills = document.getElementById('skills');
	const about = document.getElementById('about');

	const profileBtn = document.getElementById('profile-btn');
	const experiencesBtn = document.getElementById('experiences-btn');
	const skillsBtn = document.getElementById('skills-btn');
	const aboutBtn = document.getElementById('about-btn');

	profileBtn.addEventListener('click', () => scroll(profile.offsetTop));
	experiencesBtn.addEventListener('click', () => scroll(experiences.offsetTop));
	skillsBtn.addEventListener('click', () => scroll(skills.offsetTop));
	aboutBtn.addEventListener('click', () => scroll(about.offsetTop));

	function keypressListener (e){
		if (e.key === 'Enter') {
			this.click();
		}
	}

	profileBtn.addEventListener('keypress', keypressListener);
	experiencesBtn.addEventListener('keypress', keypressListener);
	skillsBtn.addEventListener('keypress', keypressListener);
	aboutBtn.addEventListener('keypress', keypressListener);

	const homeArrow = document.getElementById('home-arrow-down');
	const profileArrow = document.getElementById('profile-arrow-down');
	const experiencesArrow = document.getElementById('experiences-arrow-down');
	const skillsArrow = document.getElementById('skills-arrow-down');

	homeArrow.addEventListener('click', () => scroll(profile.offsetTop));
	profileArrow.addEventListener('click', () => scroll(experiences.offsetTop));
	experiencesArrow.addEventListener('click', () => scroll(skills.offsetTop));
	skillsArrow.addEventListener('click', () => scroll(about.offsetTop));
}
