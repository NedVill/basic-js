const CustomError = require("../extensions/custom-error");

module.exports = function repeater(str, options) {
	let totalArray = [];
	options.repeatTimes === undefined ? options.repeatTimes = 1 : '';
	options.additionRepeatTimes === undefined ? options.additionRepeatTimes = 1 : '';
	options.separator === undefined ? options.separator = '+' : `${options.separator}`;
	options.addition === undefined ? options.addition = '' : `${options.addition}`;
	options.additionSeparator == undefined ? options.additionSeparator = '|' : `${options.additionSeparator}`;

	for (var i = 1; i <= options.repeatTimes; i++) {
		let newArr = [];

		for (var k = 1; k <= options.additionRepeatTimes; k++) {
			newArr.push(`${options.addition}`)
		}
		
		let newStr = newArr.join(options.additionSeparator);
		totalArray.push(`${str}${newStr}`)
	}

	return totalArray.join(options.separator)
};
