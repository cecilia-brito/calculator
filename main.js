const BTN_SEVEN = document.querySelector("[data-value='7']");
const BTN_EIGHT = document.querySelector("[data-value='8']");
const BTN_NINE = document.querySelector("[data-value='9']");
const BTN_FOUR = document.querySelector("[data-value='4']");
const BTN_FIVE = document.querySelector("[data-value='5']");
const BTN_SIX = document.querySelector("[data-value= '6']");
const BTN_THREE = document.querySelector("[data-value= '3']");
const BTN_TWO = document.querySelector("[data-value= '2']");
const BTN_ONE = document.querySelector("[data-value= '1']");
const BTN_ZERO = document.querySelector("[data-value= '0']");
const BTN_DOT = document.querySelector("[data-value= '.']");
const BTN_MULTI = document.querySelector("[data-value= 'X']");
const BTN_ADD = document.querySelector("[data-value= '+']");
const BTN_SUBTRATION = document.querySelector("[data-value='-']");
const BTN_DIV = document.querySelector("[data-value= '/']");
const BTN_EQUAL = document.querySelector("[data-value= '=']");

const DISPLAY = document.querySelector("[data-display]");
const DISPLAY_P = document.querySelector("[data-display-number]")
var calc = [];

function addNumberNineInDisplay(){
  DISPLAY_P.innerHTML += BTN_NINE.textContent;
  calc.push(9);
  let lenghtCalc = calc.lenght;
  DISPLAY.dataset.display = calc[lenghtCalc - 1];
}

function addNumberEightInDisplay(){
  DISPLAY_P.innerHTML += BTN_EIGHT.textContent;
  calc.push(8);
  let lenghtCalc = calc.lenght;
  DISPLAY.dataset.display = calc[lenghtCalc - 1];
}

function addNumberSevenInDisplay(){
  DISPLAY_P.innerHTML += BTN_SEVEN.textContent;
  calc.push(7);
  let lenghtCalc = calc.lenght;
  DISPLAY.dataset.display = calc[lenghtCalc - 1];
}


function addNumberSixInDisplay(){
  DISPLAY_P.innerHTML += BTN_SIX.textContent;
  calc.push(6);
  let lenghtCalc = calc.lenght;
  DISPLAY.dataset.display = calc[lenghtCalc - 1];
}

function addNumberFiveInDisplay(){
  DISPLAY_P.innerHTML += BTN_FIVE.textContent;
  calc.push(5);
  let lenghtCalc = calc.lenght;
  DISPLAY.dataset.display = calc[lenghtCalc - 1];
}

function addNumberFourInDisplay(){
  DISPLAY_P.innerHTML += BTN_FOUR.textContent;
  calc.push(4);
  let lenghtCalc = calc.lenght;
  DISPLAY.dataset.display = calc[lenghtCalc - 1];
}

function addNumberThreeInDisplay(){
  DISPLAY_P.innerHTML += BTN_THREE.textContent;
  calc.push(3);
  let lenghtCalc = calc.lenght;
  DISPLAY.dataset.display = calc[lenghtCalc - 1];
}

function addNumberTwoInDisplay(){
  DISPLAY_P.innerHTML += BTN_TWO.textContent;
  calc.push(2);
  let lenghtCalc = calc.lenght;
  DISPLAY.dataset.display = calc[lenghtCalc - 1];
}

function addNumberOneInDisplay(){
  DISPLAY_P.innerHTML += BTN_ONE.textContent;
  calc.push(1);
  let lenghtCalc = calc.lenght;
  DISPLAY.dataset.display = calc[lenghtCalc - 1];
}

function addNumberZeroInDisplay(){
  DISPLAY_P.innerHTML += BTN_ZERO.textContent;
  calc.push(0);
  let lenghtCalc = calc.lenght;
  DISPLAY.dataset.display = calc[lenghtCalc - 1];
}

function addDotInDisplay(){
    DISPLAY_P.innerHTML += BTN_DOT.textContent;
    calc.push('.');
    let lenghtCalc = calc.lenght;
    DISPLAY.dataset.display = calc[lenghtCalc - 1];
}

function addSymbolPlusInDisplay(){
  DISPLAY_P.innerHTML += BTN_ADD.textContent;
  calc.push('+');
  let lenghtCalc = calc.lenght;
  DISPLAY.dataset.display = calc[lenghtCalc - 1];
}

function addSymbolMinusInDisplay(){
  DISPLAY_P.innerHTML += BTN_SUBTRATION.textContent;
  calc.push('-');
  let lenghtCalc = calc.lenght;
  DISPLAY.dataset.display = calc[lenghtCalc - 1];
}

function addSymbolMultiplicatonInDisplay(){
  DISPLAY_P.innerHTML += BTN_MULTI.textContent;
  calc.push('X');
  let lenghtCalc = calc.lenght;
  DISPLAY.dataset.display = calc[lenghtCalc - 1];
}

function addSymbolDivisionInDisplay(){
  DISPLAY_P.innerHTML += BTN_DIV.textContent;
  calc.push('/');
  let lenghtCalc = calc.lenght;
  DISPLAY.dataset.display = calc[lenghtCalc - 1];
}

function calculate(){
  let result = 0;
  let indexSum = [];
  let numberSum = [];
  for(let i = 0; i < calc.length; i++){
    if(calc[i] !== '+'){
     indexSum.push(i); 
    }
  }

  for(let i = 0; i <indexSum.length; i++){
    numberSum.push(parseInt(calc[indexSum[i]]));
  }

  for(let i = 0; i <numberSum.length; i++){
    result += numberSum[i];
  }

  DISPLAY_P.innerHTML = result;
  console.log(result)
}

BTN_NINE.addEventListener('click', addNumberNineInDisplay);
BTN_EIGHT.addEventListener('click', addNumberEightInDisplay);
BTN_SEVEN.addEventListener('click', addNumberSevenInDisplay);
BTN_SIX.addEventListener('click', addNumberSixInDisplay);
BTN_FIVE.addEventListener('click', addNumberFiveInDisplay);
BTN_FOUR.addEventListener('click', addNumberFourInDisplay);
BTN_THREE.addEventListener('click', addNumberThreeInDisplay)
BTN_TWO.addEventListener('click', addNumberTwoInDisplay)
BTN_ONE.addEventListener('click', addNumberOneInDisplay)
BTN_ZERO.addEventListener('click', addNumberZeroInDisplay)
BTN_DOT.addEventListener('click', addDotInDisplay)
BTN_ADD.addEventListener('click', addSymbolPlusInDisplay)
BTN_MULTI.addEventListener('click', addSymbolMultiplicatonInDisplay)
BTN_DIV.addEventListener('click', addSymbolDivisionInDisplay)
BTN_SUBTRATION.addEventListener('click', addSymbolMinusInDisplay)
BTN_EQUAL.addEventListener('click', calculate);