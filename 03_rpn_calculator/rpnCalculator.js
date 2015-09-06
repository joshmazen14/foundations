var RPNCalculator = function() {
	this.total = 0;
	this.stack = [];
}

RPNCalculator.prototype.push = function(n) {
	this.stack.push(n);
}

RPNCalculator.prototype.pop = function() {
	this.stack.pop()
}

RPNCalculator.prototype.value = function() {
	return this.total
}

RPNCalculator.prototype.plus = function() {
	if (this.stack.length<2) {
		throw "rpnCalculator is empty"
	}
	else {
	    var l = this.stack.length;
		var first = this.stack[l-1];
		var second = this.stack[l-2];
		this.pop();
		this.pop();
		var sum = first + second;
		this.total = sum;
		this.push(sum);
	}
}

RPNCalculator.prototype.minus = function() {
	if (this.stack.length<2) {
		throw "rpnCalculator is empty"
	}
	else {
	    var l = this.stack.length;
		var first = this.stack[l-1];
		var second = this.stack[l-2];
		this.pop();
		this.pop();
		var diff = second - first;
		this.total = diff;
		this.push(diff)
	}
}

RPNCalculator.prototype.times = function() {
	if (this.stack.length<2) {
		throw "rpnCalculator is empty"
	}
	else {
	    var l = this.stack.length;
		var first = this.stack[l-1];
		var second = this.stack[l-2];
		this.pop();
		this.pop();
		var product = first * second;
		this.total = product
		this.push(product);
	}
}

RPNCalculator.prototype.divide = function() {
	if (this.stack.length < 2) {
		throw "rpnCalculator is empty"
	}
	else {
	    var l = this.stack.length;
		var first = this.stack[l-1];
		var second = this.stack[l-2];
		this.pop();
		this.pop();
		this.total = second/first;
		this.push(this.total);
	}
}