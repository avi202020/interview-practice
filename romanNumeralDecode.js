// Given a string of roman numerals, decode it into an integer

function decode(numerals) {
	const values = {
		I: 1,
		V: 5,
		X: 10,
		L: 50,
		C: 100,
	};

	// while loop which can check for a pair and increment by 2 when necessary
	// makes it better than a reducer
	let i = 0;
	let value = 0;

	while (i < numerals.length) {
		const numOne = numerals[i];
		const numTwo = numerals[i + 1];
		const valOne = values[numOne];
		const valTwo = values[numTwo];

		if (valTwo > valOne) {
			value += valTwo - valOne;
			i += 2;
		} else {
			value += valOne;
			i += 1;
		}
	}
	return value;
}

const test = decode("CCXLI");
console.log(test);
