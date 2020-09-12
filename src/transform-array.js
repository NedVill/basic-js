const CustomError = require("../extensions/custom-error");

module.exports = function transform(arr) {

	if (!Array.isArray(arr)) {
		throw new Error;
	}

	let newArr = [],
		arrIdx = arr.slice(0, arr.length),
		empty = '--empty';

	for (var i = 0; i < arrIdx.length; i++) {
			
		switch (arrIdx[i]) {
			
			case '--double-next':
				if (i < arrIdx.length - 1) {
					arrIdx[i] = arrIdx[i + 1];
				} else {
					arrIdx[i] = empty;
				}
				continue;
			break;

			case '--double-prev':
				arrIdx[i] = empty;
				if (i > 0 && arrIdx[i - 1] !== empty) {
					arrIdx[i] = arrIdx[i - 1];
				} else {
					arrIdx[i] = empty;
				}
				continue;
			break;
			
			case '--discard-next':
				arrIdx[i] = empty;
				arrIdx[i + 1] = empty;
				continue;	
			break;
			
			case '--discard-prev': 
				arrIdx[i] = empty;
				arrIdx[i - 1] = empty;
				continue;
				
			break;
		}
	}

	arrIdx.forEach((item) => {
		if (item !== empty) {
			newArr.push(item);
		}
	})

	return newArr;
};
