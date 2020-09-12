const CustomError = require("../extensions/custom-error");

module.exports = function getSeason(date) {
	const seasons = [
		'winter',
		'spring',
		'summer',
		'autumn'
	]

	if (!date) {
		return 'Unable to determine the time of year!'
	}

	if (Object.prototype.toString.call(date) !== '[object Date]') {
		throw Error()
	}

	let currentMonth = date.getMonth(),
		currentSeason = null;

	switch (true) {
		case (currentMonth <= 1 || currentMonth == 11):
			currentSeason = seasons[0];
			break;
		case (currentMonth > 1 && currentMonth <= 4):
			currentSeason = seasons[1];
			break;
		case (currentMonth > 4 && currentMonth <= 7):
			currentSeason = seasons[2];
			break;
		case (currentMonth > 7 && currentMonth <= 10):
			currentSeason = seasons[3];
			break;
	}

	return currentSeason;
};
