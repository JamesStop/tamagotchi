/*----- constants -----*/
const BABY_IMAGE = './assets/baby.webp';
const CHILD_IMAGE = './assets/child.webp';
const TEEN_IMAGE = './assets/teen.webp';
const ADULT_IMAGE = './assets/adult.webp';
const MAX_STAT_VALUE = 100;
const MAX_BABY_AGE = 10;
const MAX_CHILD_AGE = 19;
const MAX_TEEN_AGE = 29;
const HUNGER_INTERVAL = 5000;
const BOREDOM_INTERVAL = 6000;
const AGE_INTERVALL = 60000;
const SLEEPINESS_INTERVAL = 3000;

/*----- app's state (variables) -----*/

let age;
let hunger;
let boredom;
let sleepiness;

/*----- cached element references -----*/

const ageDisplay = document.querySelector('#age');
const hungerDisplay = document.querySelector('#hunger');
const boredomDisplay = document.querySelector('#boredom');
const sleepinessDisplay = document.querySelector('#sleepiness');


const petDisplay = document.querySelector('.pet')


const playArea = document.querySelector('.play-area');

const modalStart = document.querySelector('.modal-welcome');
const playButton = document.querySelector('#start-game');


const petImg = document.createElement('img');

/*----- event listeners -----*/

playArea.addEventListener('click', attendPet);

modalStart.addEventListener('click', hideStartModal);



/*----- functions -----*/
function init() {
    modalStart.classList.add('hide');
    age = 0;
	hunger = 0;
	boredom = 0;
	sleepiness = 0;
    initEgg();
    ageUp();
    hungerUp();
    boredomUp();
    sleepinessUp();
}


function ageUp() {
    setInterval(function() {
    age += 1;
    render();
    renderPet();
    }, AGE_INTERVALL);
}

function hungerUp() {
    setInterval(function () {
		hunger += 1;
		render();
	}, HUNGER_INTERVAL);
}

function boredomUp() {
	setInterval(function () {
		boredom += 1;
		render();
	}, BOREDOM_INTERVAL);
}

function sleepinessUp() {
	setInterval(function () {
		sleepiness += 1;
		render();
	}, SLEEPINESS_INTERVAL);
}




function helpPet(stat) {
	if ([stat] > 0) {
		if ([stat] - 10 < 0) {
			[stat] = 0;
		} else {
			[stat] = [stat] - 10;
		}
	}
}


function attendPet(event) {
    if (event.target.id == 'feed') {
        helpPet('hunger');
	} else if (event.target.id == 'play') {
        helpPet('boredom');
	} else if (event.target.id == 'nap') {
        helpPet('sleepiness');
	}
}


function hideStartModal(event) {
    console.log(event.target.tagName);
    if (event.target == playButton) {
		init();
	}
};



//Make Egg
function initEgg() {
    // create egg div
    const egg = document.createElement('div');
    //give egg class
    egg.setAttribute('class', 'egg');
    //create spots div
    const spots = document.createElement('div');
    //give spots class
    spots.setAttribute('class', 'spots');
    //append spots to div
    egg.appendChild(spots);
    //append egg to pet class
    petDisplay.appendChild(egg);;
}

//Sets all DOM displays
function render() {
    ageDisplay.innerText = age;
    hungerDisplay.innerText = hunger;
    boredomDisplay.innerText = boredom;
    sleepinessDisplay.innerText = sleepiness;
    
}

function renderPet() {
    if (age == 0){

    } else if (age <= MAX_BABY_AGE) {
			//  age 0-9 = baby
			petDisplay.innerHTML = '';
			petImg.setAttribute('src', BABY_IMAGE);
			petDisplay.appendChild(petImg);
		} else if (age <= MAX_CHILD_AGE) {
			petImg.setAttribute('src', CHILD_IMAGE);
		} else if (age <= MAX_TEEN_AGE) {
			petImg.setAttribute('src', TEEN_IMAGE);
		} else {
			petImg.setAttribute('src', ADULT_IMAGE);
		}
   

    //   age 10-19 = child
    //  age 20-29 = teen
    //   age 30-100 = adult



}




//End