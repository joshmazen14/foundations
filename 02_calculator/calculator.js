function createCalculator () {
	var calculator = {};
	calculator.holder = 0
	calculator.value = function() {
		return this.holder;
	}
	calculator.add = function(n) {
		this.holder += n;
	}
	calculator.subtract = function(n) {
		this.holder -= n;
	}
	return calculator
}