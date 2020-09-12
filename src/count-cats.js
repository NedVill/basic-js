const CustomError = require("../extensions/custom-error");

module.exports = function countCats(arr) {
	let count = 0,
		pattern = '^^';

	arr.forEach((item) => {
		if (Array.isArray(item)) {
			item.forEach((innerItem) => {
				innerItem === pattern ? count += 1 : '';
			})
		}
		if (typeof item === 'string') {
			item === pattern ? count += 1 : '';
		}
	})

	return count;
};
