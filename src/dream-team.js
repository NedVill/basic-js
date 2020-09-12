const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(array) {
	if (!Array.isArray(array)) {
		return false;
	}
	return array.map((item) => {
		return typeof item === 'string' ? item.trim()[0].toUpperCase() : '';
	}).sort().join('');
};
