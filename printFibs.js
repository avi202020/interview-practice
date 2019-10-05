// Object for for memoization
const fibMap = {};

function fib(number) {
	// check the base cases
	if (fibMap[number]) return fibMap[number];
	if (number === 0) return 0;
	if (number === 1) return 1;

	// assign the number to the fibMap object
	fibMap[number] = fib(number - 1) + fib(number - 2);

	// return the value at the index we need
	return fibMap[number];
}

const result = fib(1000);
console.log(result);
