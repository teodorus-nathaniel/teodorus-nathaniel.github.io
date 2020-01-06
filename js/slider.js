{
	const slider = document.getElementById('slider');

	window.addEventListener('scroll', () => {
		slider.style.width = `${(window.scrollY + window.innerHeight) / document.body.offsetHeight * window.innerWidth}px`;
	});
}
