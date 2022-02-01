// TO-DO refatorar codigo: melhorar nomes de variáveis, constantes e funções,
var adicionou = false;
var multiplicou = false;
var dividiu = false;
var subtraiu = false;
var rooting = false;

const DISPLAY = document.querySelector('[data-display-number]')
const DISPLAY_PART_TO_OPERATION = document.querySelector('[data-display-operation]')

const operations = { 
	calculateAddition: (command) => {
		getValuesOfDisplay();
		if(command.buttonPressed == '+'){
			dataDisplay.result = 0;
			dataDisplay.result += dataDisplay.number
			adicionou = true;
		} else if((command.buttonPressed === '=') && (adicionou === true)){
			dataDisplay.number = dataDisplay.result + dataDisplay.number
			dataDisplay.result = dataDisplay.number
			adicionou = false
			addResultInDisplay(command)
		} 
	}, calculateMultiplication: (command) => {
			getValuesOfDisplay();
			if(command.buttonPressed == 'X'){
				dataDisplay.result = 1;
				dataDisplay.result *= dataDisplay.number
				multiplicou = true;
			} else if(command.buttonPressed == '='  && (multiplicou == true)){
				dataDisplay.number = dataDisplay.result * dataDisplay.number
				dataDisplay.result = dataDisplay.number
				multiplicou = false;
				addResultInDisplay(command);
			} 
	}, calculateDivision: (command) => {
			getValuesOfDisplay();
			if(command.buttonPressed == '/'){
				dataDisplay.result = 1;
				dataDisplay.result = dataDisplay.number
				dividiu = true
			} else if(command.buttonPressed == '=' && (dividiu == true)){
				dataDisplay.number = dataDisplay.result / dataDisplay.number
				dataDisplay.result = dataDisplay.number
				dividiu = false
				addResultInDisplay(command);
			} 
	}, calculteSubtration: (command) => {
			getValuesOfDisplay();
			if(command.buttonPressed == '-'){
				dataDisplay.result = 0 ;
				dataDisplay.result = dataDisplay.number
				subtraiu = true
			} else if((command.buttonPressed == '=') && (subtraiu == true)){
				dataDisplay.number = dataDisplay.result - dataDisplay.number
				dataDisplay.result = dataDisplay.number
				subtraiu = false
				addResultInDisplay(command)
			} 
		},
		calculateRooting: (command) =>{
			getValuesOfDisplay();
			if(command.buttonPressed == '√'){
				dataDisplay.result = 0 ;
				dataDisplay.result = dataDisplay.number
				dataDisplay.result = dataDisplay.result ** (1/2)
				dataDisplay.number = dataDisplay.result
				addResultInDisplay(command)
			}
		}, 
		calculatePercent: (command) =>{
			getValuesOfDisplay();
			if(command.buttonPressed == '%'){
				dataDisplay.result = 0;
				dataDisplay.result = dataDisplay.number
				dataDisplay.result = dataDisplay.result / 100
				dataDisplay.number = dataDisplay.result
				addResultInDisplay(command)
			}
		}
}

function addValuesInDisplay(buttonPressed){
	if(buttonPressed != '+' && buttonPressed != '-' && buttonPressed != '/' && buttonPressed != 'X' && buttonPressed != undefined && buttonPressed != '=' && buttonPressed != 'undefined' && buttonPressed != '√' && buttonPressed != '%'){
		if(DISPLAY.innerHTML == 0){
			DISPLAY.innerHTML = ''
		
			DISPLAY.innerHTML += buttonPressed
			
		} else if(buttonPressed == 'CE'){
			let arrayDisplay = DISPLAY.innerHTML
			//transforma uma string em uma array de caracteres
			arrayDisplay = [...arrayDisplay]
			console.log(arrayDisplay)
			//retira o último elemento de uma array
			arrayDisplay.pop()
			DISPLAY.innerHTML = arrayDisplay
		} else{
			if(DISPLAY.innerHTML.length < 12){
				DISPLAY.innerHTML += buttonPressed
			}
		}
		
	} else if(buttonPressed != undefined && buttonPressed != 'undefined' && buttonPressed != '.'){
		DISPLAY_PART_TO_OPERATION.innerHTML = buttonPressed
		DISPLAY.innerHTML = ''
	}
	console.log('dataDisplay addValuesInDisplay: ', dataDisplay);
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

		const command = {
			buttonPressed: buttonPressed
		}

		addValuesInDisplay(buttonPressed)

		notifyAll(command)
		return buttonPressed;
	}
	
	return {
		subscribe
	}

}

function getValuesOfDisplay(){
	for(let i = 0; i < DISPLAY.textContent.length; i++){
		dataDisplay.number = parseFloat(DISPLAY.innerHTML);
		// DISPLAY.innerHTML = 0;
	}
	console.log('datedisplay ', dataDisplay.number)
}

function addResultInDisplay(buttonPressed){
	if(buttonPressed.buttonPressed === '=' || buttonPressed.buttonPressed === '√' ||  buttonPressed.buttonPressed ==='%'){
		let ArrayResult = [...dataDisplay.result + '']
		if(ArrayResult.length < 12){
			DISPLAY.innerHTML = parseFloat(dataDisplay.result) 
			dataDisplay.result = '';
		} else{
			DISPLAY.innerHTML = parseFloat(dataDisplay.result).toFixed(6)
		}
	}
}


function factoryMembersOfOperation(){
	
	const membersOfOperation = {
		number: 0,
		result: ''
	}

	return membersOfOperation;
}

var dataDisplay =  factoryMembersOfOperation();
var buttonListenner = factoryButtonListenner();

//observers subscribes
buttonListenner.subscribe(operations.calculateAddition);
buttonListenner.subscribe(operations.calculateMultiplication);
buttonListenner.subscribe(operations.calculateDivision);
buttonListenner.subscribe(operations.calculteSubtration);
buttonListenner.subscribe(operations.calculateRooting);
buttonListenner.subscribe(operations.calculatePercent);