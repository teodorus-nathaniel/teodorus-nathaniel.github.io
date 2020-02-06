export function getCurrentTextColor (){
	return getComputedStyle(document.documentElement).getPropertyValue(
		'--text-color'
	);
}

export function getColor (baseColor, opacity){
	opacity = Math.round(new Number(opacity * 255)).toString(16);
	if (opacity.length === 1) opacity = '0' + opacity;
	return baseColor + opacity;
}
