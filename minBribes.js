function minimumBribes(q) {
	try {
		const minBribes = q.reduce((acc, number, idx) => {
			let position = idx + 1;
			// if someone has moved forward more than twice, throw an error
			if (position < number - 2) throw new Error("Too chaotic");

			// if they have moved forward, add their number of bribes
			if (number > position) {
				acc += number - position;
			} else if (number > q[idx + 1]) {
				acc += 1;
			}
			return acc;
		}, 0);
		return minBribes;
	} catch (e) {
		return e.message;
	}
}

const result = minimumBribes([1, 2, 5, 3, 7, 8, 6, 4]);
console.log(result);
