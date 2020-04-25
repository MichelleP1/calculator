const calculator = require ('./script.js');

describe('add', function() {
	it('adds 0 and 0', function() {
		expect(calculator.add(0,0)).toEqual(0);
	});

	it('adds 3 and 2', function() {
		expect(calculator.add(3,2)).toEqual(5);
	});

	it('adds positive numbers', function() {
		expect(calculator.add(22,6)).toEqual(28);
	});

	it('works with negative numbers', function() {
		expect(calculator.add(-12,6)).toEqual(-6);
	});
});

describe('subtract', function() {
	it('subtracts numbers', function() {
		expect(calculator.subtract(10,4)).toEqual(6);
	});
});

describe('multiply', function() {
	it('multiplies two numbers', function() {
		expect(calculator.multiply(2,4)).toEqual(8);
	});
});

describe('divide', function() {
	it('divides two numbers', function() {
		expect(calculator.divide(12,4)).toEqual(3);
	});
});

describe('operate', function() {
	it('adds two numbers', function() {
		expect(calculator.operate('+',12,4)).toEqual(16);
	});
	it('substracts two numbers', function() {
		expect(calculator.operate('-',12,4)).toEqual(8);
	});
	it('multiplies two numbers', function() {
		expect(calculator.operate('*',12,4)).toEqual(48);
	});

	it('divides two numbers', function() {
		expect(calculator.operate('/',12,4)).toEqual(3);
	});
});

