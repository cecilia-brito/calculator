//TO-DO Adicionar observer para as outras operações
//e refatorar codigo: melhorar nomes de variáveis, constantes e funções,

const operations = { calculateAddition: (command) => {
		getValuesOfDisplay();
		if(command.buttonPressed == '+'){
			dateDisplay.result += parseInt(dateDisplay.number, 10);
			console.log('Result', dateDisplay.result)
		} else if(command.buttonPressed == '='){
			dateDisplay.number = parseInt(dateDisplay.result, 10) + parseInt(dateDisplay.number, 10)
			dateDisplay.result = parseInt(dateDisplay.number, 10)
			console.log('Result', dateDisplay.result)
			console.log('number', dateDisplay.number)
		} 
	}
}

function calculate(command){
	operations.calculateAddition(command);
	addResultInDisplay(command)
}



const DISPLAY = document.querySelector('[data-display-number]')
const DISPLAY_PART_TO_OPERATION = document.querySelector('[data-display-operation]')

function addValuesInDisplay(buttonPressed){
	if(buttonPressed != '+' && buttonPressed != '-' && buttonPressed != '/' && buttonPressed != 'X' && buttonPressed != undefined && buttonPressed != '=' && buttonPressed != 'undefined'){
		DISPLAY.innerHTML += buttonPressed
		
	} else if(buttonPressed != undefined && command.buttonPressed != 'undefined'){
		DISPLAY.innerHTML = ''
		DISPLAY_PART_TO_OPERATION.innerHTML = buttonPressed
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
		const buttonPressed = event.target.dataset.value + '';
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

function addResultInDisplay(buttonPressed){
	if(buttonPressed.buttonPressed == '='){
		DISPLAY.textContent = dateDisplay.result 
		dateDisplay.result = 0;
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
buttonListenner.subscribe(calculate);