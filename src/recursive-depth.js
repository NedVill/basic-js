const CustomError = require("../extensions/custom-error");

module.exports = class DepthCalculator {
	count = 1;
	calculateDepth(arr, depth = 1) {
		if (depth > this.count) {
			this.count += 1;
		}
		for (var i = 0; i < arr.length; i++) {
			if (typeof arr[i] === 'object') {
				let currentDepth = depth;
				this.calculateDepth(arr[i], currentDepth += 1);
			}
		}
		if (depth == 1) {
			let num = this.count;
			this.count = 1;
			return num;
		} 
		return
	}
};


