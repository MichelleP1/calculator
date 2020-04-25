let display = document.querySelector('#display');
let upper_display = document.querySelector('#upper_display');
let one = document.querySelector('#one');
let two = document.querySelector('#two');
let three = document.querySelector('#three');
let four = document.querySelector('#four');
let five = document.querySelector('#five');
let six = document.querySelector('#six');
let seven = document.querySelector('#seven');
let eight = document.querySelector('#eight');
let nine = document.querySelector('#nine');
let zero = document.querySelector('#zero');
let addition = document.querySelector('#add');
let subtraction = document.querySelector('#subtract');
let multiplication = document.querySelector('#multiply');
let division = document.querySelector('#divide');
let equals = document.querySelector('#equals');
let clear = document.querySelector('#ac');
let backspace = document.querySelector('#backspace');
let decimal = document.querySelector('#decimal');

let operators = [];
let values = [];
let numberOfValues = 0;
let numberOfOperators = 0;

let firstNumber = 0;
let displayValue = '';

let invalid = false;
let total = 0;

let equalsClicked = false;
let operatorClicked = false;

let upperDisplayValue = '';



function add (firstNumber, secondNumber) {
	return firstNumber + secondNumber;
};

function subtract (firstNumber, secondNumber) {
	return firstNumber - secondNumber;
};

function multiply (firstNumber, secondNumber) {

	return firstNumber * secondNumber;
};

function divide (firstNumber, secondNumber) {
	if (secondNumber === 0) {
		invalid = true;
		return 0;
	}
	return firstNumber / secondNumber;
};

function operate (operator, firstNumber, secondNumber) {
	switch (operator) {
		case '+':
			return add(firstNumber, secondNumber);
		case '-':
			return subtract(firstNumber, secondNumber);
		case '*':
			return multiply(firstNumber, secondNumber);
		case '/':
			return divide(firstNumber, secondNumber);
	}
};

function displayResult(resultValue) {
	display.textContent = resultValue;
};

function upperDisplay(displayValue) {
	upper_display.textContent = displayValue;
}

function numberPressed() {
	displayResult(displayValue);
	equalsClicked = false;
	operatorClicked = false;

	upperDisplay('');
}

function operationCalc() {
	numberOfOperators++;
	values[numberOfValues] = parseFloat(displayValue);
	numberOfValues++;

	displayValue = '';

	if (equalsClicked) {
		values[0] = parseFloat(display.textContent);
		numberOfValues = 1;
	}

	equalsClicked = false;
	operatorClicked = true;
	upperDisplay('');
}

function calculate() {
	firstNumber = values[0];
	values[numberOfValues] = parseFloat(display.textContent);

	if (operators.length == 0) {
		return;
	}

	for (let i = 0; i < operators.length; i++) {
		if (operators[i] == '/' && values[i+1] == 0) {
			displayResult('undefined');

			clearArray(values);
			clearArray(operators);

			numberOfValues = 0;
			numberOfOperators = 0;
			displayValue = '';
			return;
		}
		if (i == 0) {
			upperDisplayValue += firstNumber + ' ';
		}
		upperDisplayValue += operators[i] + ' ' + values[i+1] + ' ';

		total = operate(operators[i], firstNumber, values[i+1]);
		firstNumber = total;
	}

	total = parseFloat(total.toFixed(10));

	displayResult(total);

	upperDisplayValue += '=' + ' ' + total;
	upperDisplay(upperDisplayValue);
	upperDisplayValue = '';

	clearArray(values);
	clearArray(operators);

	equalsClicked = true;

	numberOfValues = 0;
	numberOfOperators = 0;
	displayValue = '';
};

function clearArray(array) {
  while (array.length) {
    array.pop();
  }
}

one.addEventListener('click', e => {
	displayValue += 1;
	numberPressed();
});

two.addEventListener('click', e => {
	displayValue += 2;
	numberPressed();
});

three.addEventListener('click', e => {
	displayValue += 3;
	numberPressed();
});

four.addEventListener('click', e => {
	displayValue += 4;
	numberPressed();
});

five.addEventListener('click', e => {
	displayValue += 5;
	numberPressed();
});

six.addEventListener('click', e => {
	displayValue += 6;
	numberPressed();
});

seven.addEventListener('click', e => {
	displayValue += 7;
	numberPressed();
});

eight.addEventListener('click', e => {
	displayValue += 8;
	numberPressed();
});

nine.addEventListener('click', e => {
	displayValue += 9;
	numberPressed();
});

zero.addEventListener('click', e => {
	displayValue += 0;
	numberPressed();
});

decimal.addEventListener('click', e => {
	if (!displayValue.includes(".")) {
		displayValue += '.';
		numberPressed();
	}
});

addition.addEventListener('click', e => {
	operators[numberOfOperators] = '+';
	operationCalc();
});

subtraction.addEventListener('click', e => {
	operators[numberOfOperators] = '-';
	operationCalc();
});

multiplication.addEventListener('click', e => {
	operators[numberOfOperators] = '*';
	operationCalc();
});

division.addEventListener('click', e => {
	operators[numberOfOperators] = '/';
	operationCalc();
});

equals.addEventListener('click', e => {
	calculate();
});

clear.addEventListener('click', e => {
	clearArray(values);
	clearArray(operators);

	numberOfValues = 0;
	numberOfOperators = 0;

	displayResult('');
	upperDisplay('');
});

backspace.addEventListener('click', e=> {
	if (equalsClicked) {
		displayValue = display.textContent;
	}

	displayValue = displayValue.toString();
	displayValue = displayValue.slice(0, -1);
	displayResult(displayValue);
});

this.addEventListener('keydown', event => {
	if (event.keyCode == 48) {
        displayValue += 0;
		displayResult(displayValue);

		equalsClicked = false;
    }

    if (event.keyCode == 49) {
        displayValue += 1;
		displayResult(displayValue);

		equalsClicked = false;
    }

    if (event.keyCode == 50) {
        displayValue += 2;
		displayResult(displayValue);

		equalsClicked = false;
    }

    if (event.keyCode == 51) {
        displayValue += 3;
		displayResult(displayValue);

		equalsClicked = false;
    }

    if (event.keyCode == 52) {
        displayValue += 4;
		displayResult(displayValue);

		equalsClicked = false;
    }

    if (event.keyCode == 53) {
        displayValue += 5;
		displayResult(displayValue);

		equalsClicked = false;
    }

    if (event.keyCode == 54) {
        displayValue += 6;
		displayResult(displayValue);

		equalsClicked = false;
    }

    if (event.keyCode == 55) {
        displayValue += 7;
		displayResult(displayValue);

		equalsClicked = false;
    }

    if (event.keyCode == 56) {

	    if (event.shiftKey) {
	        operators[numberOfOperators] = '*';
	        operationCalc();
		} else {
	        displayValue += 8;
			displayResult(displayValue);

			equalsClicked = false; 
		}
    }

    if (event.keyCode == 57) {
        displayValue += 9;
		displayResult(displayValue);

		equalsClicked = false;
    }

    if (event.keyCode == 61) {
    	if (event.shiftKey) {
	    	operators[numberOfOperators] = '+';
        	operationCalc();
	    } else {
	    	calculate();
	    }
	}

    if (event.keyCode == 173) {
        operators[numberOfOperators] = '-';
        operationCalc();
    }


    if (event.keyCode == 191) {
       operators[numberOfOperators] = '/';
       operationCalc();
    }

    if (event.keyCode == 13) {
    	calculate();
    	displayResult(total);
    }

    if (event.keyCode == 190) {
    	displayValue += '.';
		displayResult(displayValue);

		equalsClicked = false;
    }

    if (event.keyCode == 8) {
    	if (equalsClicked) {
			displayValue = display.textContent;
		}

		displayValue = displayValue.toString();
		displayValue = displayValue.slice(0, -1);
		displayResult(displayValue);
    }
});

module.exports = {
	add,
	subtract,
	multiply,
    divide,
    operate
};

