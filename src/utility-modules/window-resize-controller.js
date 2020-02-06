const componentsToRescale = [];

window.addEventListener('resize', () => {
	componentsToRescale.forEach((component) => {
		component.width = window.innerWidth;
		component.height = window.innerHeight;
	});
});

export default function autoRescaleComponent (component){
	component.width = window.innerWidth;
	component.height = window.innerHeight;
	componentsToRescale.push(component);
}
