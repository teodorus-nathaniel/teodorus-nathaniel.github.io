const componentsToRescale = [];

window.addEventListener('resize', () => {
	componentsToRescale.forEach((component) => {
		component.width = document.documentElement.clientWidth;
		component.height = document.documentElement.clientHeight;
	});
});

export default function autoRescaleComponent (component){
	component.width = window.innerWidth;
	component.height = window.innerHeight;
	componentsToRescale.push(component);
}
