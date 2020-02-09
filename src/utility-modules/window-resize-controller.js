const componentsToRescale = [];

window.addEventListener('resize', () => {
	componentsToRescale.forEach((component) => {
		console.log({ h: window.innerHeight, w: window.innerWidth });
		component.width = document.documentElement.clientWidth;
		component.height = document.documentElement.clientHeight;
	});
});

export default function autoRescaleComponent (component){
	console.log('object');
	component.width = window.innerWidth;
	component.height = window.innerHeight;
	componentsToRescale.push(component);
}
