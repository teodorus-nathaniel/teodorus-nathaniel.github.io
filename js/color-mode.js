const colorSwitch = document.getElementById('color-switch');
let isDarkMode = true;

const darkModeOptions = {
	primaryColor: '#0b080c',
	primaryColorGradient: '#141116',
	primaryColorDarken: '#0c0c0c',
	primaryColorDarkenGradient: '#0c0c11',
	textColor: '#ffffff',
	boxShadowLight: 'rgba(200, 200, 200, .1)',
	boxShadowMed: 'rgba(200, 200, 200, .4)',
	boxShadowHard: 'rgba(200, 200, 200, .7)',
	textBackground: 'radial-gradient(farthest-side at center, rgba(0, 0, 0, 1), rgba(0, 0, 0, .7), rgba(0, 0, 0, .1))',
	textTransparent: 'rgba(255, 255, 255, .7)',
};

const lightModeOptions = {
	primaryColor: '#dfe9f3',
	primaryColorGradient: '#ffffff',
	primaryColorDarken: '#e6e9f0',
	primaryColorDarkenGradient: '#eef1f5',
	textColor: '#323232',
	boxShadowLight: 'rgba(50, 50, 50, .1)',
	boxShadowMed: 'rgba(50, 50, 50, .4)',
	boxShadowHard: 'rgba(50, 50, 50, .7)',
	textBackground:
		'radial-gradient(farthest-side at center, rgba(200, 200, 200, 1), rgba(200, 200, 200, .7) 80%, rgba(200, 200, 200, .1))',
	textTransparent: 'rgba(50, 50, 50, .7)',
};

function changeMode (colorOptions){
	const rootStyle = document.documentElement.style;
	rootStyle.setProperty('--primary-color', colorOptions.primaryColor);
	rootStyle.setProperty('--primary-color-gradient', colorOptions.primaryColorGradient);
	rootStyle.setProperty('--primary-color-darken', colorOptions.primaryColorDarken);
	rootStyle.setProperty('--primary-color-darken-gradient', colorOptions.primaryColorDarkenGradient);
	rootStyle.setProperty('--text-color', colorOptions.textColor);
	rootStyle.setProperty('--box-shadow-light', colorOptions.boxShadowLight);
	rootStyle.setProperty('--box-shadow-med', colorOptions.boxShadowMed);
	rootStyle.setProperty('--box-shadow-hard', colorOptions.boxShadowHard);
	rootStyle.setProperty('--text-background', colorOptions.textBackground);
	rootStyle.setProperty('--text-transparent', colorOptions.textTransparent);
}

colorSwitch.addEventListener('click', () => {
	if (isDarkMode) {
		document.body.classList.add('light-mode');
		colorSwitch.classList.remove('dark');
		colorSwitch.classList.add('light');
		changeMode(lightModeOptions);
	} else {
		document.body.classList.remove('light-mode');
		colorSwitch.classList.remove('light');
		colorSwitch.classList.add('dark');
		changeMode(darkModeOptions);
	}
	isDarkMode = !isDarkMode;
});

colorSwitch.addEventListener('keypress', function (e){
	if (e.key === 'Enter') this.click();
});
