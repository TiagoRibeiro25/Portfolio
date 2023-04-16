// imports
const backgroundMusic = new Audio("./sounds/background-music.mp3");
const mainBtnClick = new Audio("./sounds/main-btn.mp3");
const primaryBtnClick = new Audio("./sounds/primary-btn.mp3");
const secondaryBtnClick = new Audio("./sounds/secondary-btn.mp3");

// set volume
backgroundMusic.volume = 0.1;
mainBtnClick.volume = 0.1;
primaryBtnClick.volume = 0.1;
secondaryBtnClick.volume = 0.1;

// functions
export const playBackgroundMusic = () => {
	backgroundMusic.loop = true;
	backgroundMusic.play();
};
export const stopBackgroundMusic = () => backgroundMusic.pause();
export const playMainButtonClickSound = () => mainBtnClick.play();
export const playPrimaryButtonClickSound = () => primaryBtnClick.play();
export const playSecondaryButtonClickSound = () => secondaryBtnClick.play();
