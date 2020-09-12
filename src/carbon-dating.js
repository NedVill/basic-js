const CustomError = require("../extensions/custom-error");

const MODERN_ACTIVITY= 15; 
const HALF_LIFE_PERIOD= 5730;

module.exports = function dateSample(sampleActivity) {
	let num = parseFloat(sampleActivity);

	if (typeof sampleActivity != 'string' || isNaN(num)) {
		return false;
	}

	if (num < MODERN_ACTIVITY && num > 0) {
		return Math.ceil(Math.log(MODERN_ACTIVITY / num) / (0.693 / HALF_LIFE_PERIOD));
	}

	return false;
};
