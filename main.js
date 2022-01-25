//TO-DO Adicionar Observer que consiga somar, depois adicionar observer para as outras operações

const operations = { calculateAddition: () => {
		getValuesOfDisplay();
		// dateDisplay.result += parseInt(dateDisplay.result, 10);
		// dateDisplay.number = dateDisplay.result
		// console.log('Result', result)
	}
}



const DISPLAY = document.querySelector('[data-display-number]')
const DISPLAY_PART_TO_OPERATION = document.querySelector('[data-display-operation]')

function addValuesInDisplay(buttonPressed){
	if(buttonPressed != '+' && buttonPressed != '-' && buttonPressed != '/' && buttonPressed != 'X' && buttonPressed != undefined && buttonPressed != '='){
		DISPLAY.innerHTML += buttonPressed
		
	} else if(buttonPressed != undefined){
		DISPLAY.innerHTML = ''
		DISPLAY_PART_TO_OPERATION.innerHTML = buttonPressed
		addResultInDisplay(buttonPressed)
		dateDisplay.result =  '';
	}
	console.log(dateDisplay);
}

const factoryButtonListenner = () => {
    const calculator = document.querySelector("[data-calculator]")
	const observersSubscribers = {
		observers: []
	}

	function subscribe(functionObserver) {
		observersSubscribers.observers.push(functionObserver)	
	}

	function notifyAll(command){

		console.log(`Notifying ${observersSubscribers.observers.length} observers U.U`);

		for(const functionObserver of observersSubscribers.observers){
			functionObserver(command)
		}
	}

	calculator.addEventListener('click', createButtonListenner);

	function createButtonListenner(event){
		const buttonPressed = event.target.textContent;
		console.log(buttonPressed);
		addValuesInDisplay(buttonPressed)

		const command = {
			buttonPressed: buttonPressed
		}

		notifyAll(command)
		return buttonPressed;
	}
	
	return {
		subscribe
	}

}

function getValuesOfDisplay(){
	for(let i = 0; i < DISPLAY.textContent.length; i++){
		dateDisplay.number = DISPLAY.textContent;
	}
	console.log('datedisplay ', dateDisplay.number)
}

function addResultInDisplay(equalPressed){
	if(equalPressed == '='){
		DISPLAY.innerHTML = dateDisplay.result 
		dateDisplay.number = dateDisplay.result
	}
}


function factoryMembersOfOperation(){
	
	const membersOfOperation = {
		number: '',
		operation: '',
		result: 0
	}

	return membersOfOperation;
}

var dateDisplay =  factoryMembersOfOperation();
var buttonListenner = factoryButtonListenner();
// buttonListenner.subscribe(operations.calculateAddition);