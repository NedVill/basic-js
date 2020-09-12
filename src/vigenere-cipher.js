class VigenereCipheringMachine {

	messageArray = [];
	keyArray = [];
	encodeArr = [];

	constructor(bool) {
		bool === false ? this.reverse = true : this.reverse = false;
	}

	encrypt(message, key) {
		if (!message || !key) {
			throw new Error;
		}

		if (typeof message !== 'string' && typeof message !== 'string') {
			throw new Error;
		}

		this.init(message, key);
		this.iteration('encrypt');
		return this.finish();
	}

	decrypt(message, key) {
		if (!message || !key) {
			throw new Error;
		}

		if (typeof message !== 'string' && typeof message !== 'string') {
			throw new Error;
		}
		
		this.init(message, key);
		this.iteration('decrypt');
		return this.finish();
	}

	init(message, key) {
		this.messageArray = message.toLowerCase().split('');
		this.keyArray = key.toLowerCase().split('');
	}

	iteration(mode) {
		let step = 0;

		for (let i = 0; i < this.messageArray.length; i++) {

			if (i > this.keyArray.length - 1 && step > this.keyArray.length - 1) {
				step = 0;
			}
			
			if (!this.messageArray[i].match(/[a-z]/)) {
				this.encodeArr.push(this.messageArray[i])
				continue
			}

			if (mode === 'encrypt') {
				let keyNum = (this.messageArray[i].charCodeAt() - 97) + (this.keyArray[step].charCodeAt() - 96);

				keyNum > 26 ? keyNum = keyNum - 26 : '';
				this.encodeArr.push(String.fromCharCode(keyNum + 96).toUpperCase());
			}

			if (mode === 'decrypt') {
				let keyNum = (this.messageArray[i].charCodeAt() - 96) - (this.keyArray[step].charCodeAt() - 96) + 27;
				
				keyNum > 26 ? keyNum = keyNum - 26 : '';
				this.encodeArr.push(String.fromCharCode(keyNum + 96).toUpperCase());
			}

			step++
		}
	}

	finish() {
		let total = this.reverse ? this.encodeArr.reverse().join('') : this.encodeArr.join('');
		this.messageArray = [];
		this.keyArray = [];
		this.encodeArr = [];
		return total;
	}
}

module.exports = VigenereCipheringMachine;