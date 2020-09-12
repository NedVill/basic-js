const CustomError = require("../extensions/custom-error");

const chainMaker = {
	arr: [],
	getLength() {
		return this.arr.length
	},
	addLink(value) {
		this.arr.push(`( ${value} )`)
		return this
	},
	removeLink(position) {
		if (position <= 0 || position > this.arr.length) {
			this.arr = [];
			throw new Error;
		}

		if (isNaN(position) || !Number.isInteger(position)) {
			this.arr = [];
			throw new Error;
		}

		this.arr.splice(position - 1, 1)
		return this
	},
	reverseChain() {
		this.arr.reverse()
		return this
	},
	finishChain() {
		let str = this.arr.join('~~');
		this.arr = [];
		return str;
	}
};

module.exports = chainMaker;
