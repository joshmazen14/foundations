// Functions.js
var concat_string = function() {
	var arr = [];
	for (i=0; i<arguments.length; i++) {
		arr.push(arguments[i]);
	}
	return arr.join("")
}

var yourFunctionRunner = function() {
	var arr = [];
	for (i=0; i<arguments.length; i++) {
		arr.push(arguments[i]());
	}
	return arr.join("")
}

var makeAdder = function(num) {
	var total = num;
	var newfunc = function(newnum) {
		total += newnum;
		return total;
	}
	return newfunc
}

var once = function(func) {
	var counter = 1;
	var newfunc = function() {
		if (counter > 0) {
			func();
			counter --;
		}
	}
	return newfunc
}

var createObjectWithTwoClosures = function () {
	var object = {};
	var total = 0;
	object.oneIncrementer = function() {
		total += 1;
	}
	object.tensIncrementer = function() {
		total += 10;
	}
	object.getValue = function() {
		return total
	}
	return object
}