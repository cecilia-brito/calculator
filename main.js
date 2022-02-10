// TO-DO refatorar codigo: melhorar nomes de variáveis, constantes e funções,
var added = false;
var multiplied = false;
var divided = false;
var subtracted = false;
var rooting = false;

const DISPLAY = document.querySelector('[data-display-number]')
const DISPLAY_PART_TO_OPERATION = document.querySelector('[data-display-operation]')

const BTN_MULTI = document.querySelector("[data-value= 'X']");
const BTN_ADD = document.querySelector("[data-value= '+']");
const BTN_SUBTRATION = document.querySelector("[data-value='-']");
const BTN_DIV = document.querySelector("[data-value= '/']");
const BTN_PERCENT = document.querySelector("[data-value='%']");
const BTN_ROOTING = document.querySelector("[data-value='√']")

const operations = { 
	calculateAddition: (command) => {
		getValuesOfDisplay();
		if(command.buttonPressed == '+'){
			dataDisplay.result = 0;
			dataDisplay.result += dataDisplay.number
			added = true;
			BTN_ADD.disabled = true;
			BTN_DIV.disabled = true;
			BTN_MULTI.disabled = true;
			BTN_PERCENT.disabled = true;
			BTN_ROOTING.disabled = true;
			BTN_SUBTRATION.disabled = true
		} else if((command.buttonPressed === '=') && (added === true)){
			dataDisplay.number = dataDisplay.result + dataDisplay.number
			dataDisplay.result = dataDisplay.number
			added = false
			addResultInDisplay(command)
			BTN_ADD.disabled = false;
			BTN_DIV.disabled = false;
			BTN_MULTI.disabled = false;
			BTN_PERCENT.disabled = false;
			BTN_ROOTING.disabled = false;
			BTN_SUBTRATION.disabled = false;
		} 
	}, calculateMultiplication: (command) => {
			getValuesOfDisplay();
			if(command.buttonPressed == 'X'){
				dataDisplay.result = 1;
				dataDisplay.result *= dataDisplay.number
				multiplied = true;
				BTN_ADD.disabled = true;
				BTN_DIV.disabled = true;
				BTN_MULTI.disabled = true;
				BTN_PERCENT.disabled = true;
				BTN_ROOTING.disabled = true;
				BTN_SUBTRATION.disabled = true
			} else if(command.buttonPressed == '='  && (multiplied == true)){
				dataDisplay.number = dataDisplay.result * dataDisplay.number
				dataDisplay.result = dataDisplay.number
				multiplied = false;
				addResultInDisplay(command);
				BTN_ADD.disabled = false;
				BTN_DIV.disabled = false;
				BTN_MULTI.disabled = false;
				BTN_PERCENT.disabled = false;
				BTN_ROOTING.disabled = false;
				BTN_SUBTRATION.disabled = false;
			} 
	}, calculateDivision: (command) => {
			getValuesOfDisplay();
			if(command.buttonPressed == '/'){
				dataDisplay.result = 1;
				dataDisplay.result = dataDisplay.number
				divided = true
				BTN_ADD.disabled = true;
				BTN_DIV.disabled = true;
				BTN_MULTI.disabled = true;
				BTN_PERCENT.disabled = true;
				BTN_ROOTING.disabled = true;
				BTN_SUBTRATION.disabled = true
			} else if(command.buttonPressed == '=' && (divided == true)){
				dataDisplay.number = dataDisplay.result / dataDisplay.number
				dataDisplay.result = dataDisplay.number
				divided = false
				BTN_ADD.disabled = false;
				BTN_DIV.disabled = false;
				BTN_MULTI.disabled = false;
				BTN_PERCENT.disabled = false;
				BTN_ROOTING.disabled = false;
				BTN_SUBTRATION.disabled = false;
				addResultInDisplay(command);
			} 
	}, calculteSubtration: (command) => {
			getValuesOfDisplay();
			if(command.buttonPressed == '-'){
				dataDisplay.result = 0 ;
				dataDisplay.result = dataDisplay.number
				subtracted = true
				BTN_ADD.disabled = true;
				BTN_DIV.disabled = true;
				BTN_MULTI.disabled = true;
				BTN_PERCENT.disabled = true;
				BTN_ROOTING.disabled = true;
				BTN_SUBTRATION.disabled = true
			} else if((command.buttonPressed == '=') && (subtracted == true)){
				dataDisplay.number = dataDisplay.result - dataDisplay.number
				dataDisplay.result = dataDisplay.number
				subtracted = false
				BTN_ADD.disabled = false;
				BTN_DIV.disabled = false;
				BTN_MULTI.disabled = false;
				BTN_PERCENT.disabled = false;
				BTN_ROOTING.disabled = false;
				BTN_SUBTRATION.disabled = false;
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
		if(DISPLAY.innerHTML == 0 && DISPLAY.innerHTML.length <= 1 && buttonPressed != '.'  && buttonPressed!= 'CE'){
			DISPLAY.innerHTML = ''
		
			DISPLAY.innerHTML += buttonPressed
		}else if(buttonPressed == 'CE' && DISPLAY.innerHTML != ''){
			let arrayDisplayContent = DISPLAY.innerHTML
			//transforma uma string em uma array de caracteres
			arrayDisplayContent = [...arrayDisplayContent]
			// console.log(arrayDisplay)
			//retira o último elemento de uma array
			arrayDisplayContent.pop()
			// console.log(arrayDisplay.join(''))
			//junta os elementos de uma array e transforma em string, separando os elementos 
			//com o separador definido entre parênteses
			DISPLAY.innerHTML = arrayDisplayContent.join('')
		} else{
			if(DISPLAY.innerHTML.length < 12 && buttonPressed !== 'CE'){
				DISPLAY.innerHTML += buttonPressed
			}
		}
		
	} else if(buttonPressed != undefined && buttonPressed != 'undefined' && buttonPressed != '.'  && buttonPressed!= 'CE'){
		DISPLAY_PART_TO_OPERATION.innerHTML = buttonPressed
		DISPLAY.innerHTML = ''
	}

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