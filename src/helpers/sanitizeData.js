export const displayPrice = (num) => {
	let currentNum = Array.isArray(num) ? num[0] : num;

	currentNum = typeof(currentNum) === 'number' ? currentNum.toString(10) : currentNum;

	switch (true) {
		case currentNum.endsWith('000000000'):
			return currentNum.replace(/000000000$/, 'B');
		case currentNum.endsWith('000000'):
			return currentNum.replace(/000000$/, 'M');
		case currentNum.endsWith('000'):
			return currentNum.replace(/000$/, 'K');
		default:
			return Number(currentNum).toFixed(2);
	}
}