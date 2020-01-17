{
	function componentScrolled (entries){
		entries.forEach((element) => {
			if (element.isIntersecting) {
				element.target.classList.add('is-visible');
			}
		});
	}

	const observer = new IntersectionObserver(componentScrolled);

	const components = document.getElementsByClassName('scroll-to-view');
	Array.from(components).forEach((component) => observer.observe(component));
}
