var factorialIterative = function(num) {
	var count = 1;
	for (i=1; i<=num; i++) {
		count *= i;
	}
	return count
}

var factorial = function(num) {
	if (num == 0) {
		return 1
	}
	return factorial(num-1)*num
}

var fib = function(num) {
	if (num == 0) {
		return 1
	}
	else if (num == 1) {
		return 1
	}
	return fib(num-1) + fib(num-2)
}

var type = function(input) {
	var string_array = Object.prototype.toString.call(input)
	var array = string_array.split(" ");
	var target_word = array[1]
	var last = array[1].length - 1;
	return target_word.slice(0, last)
}


var stringify = function(input) {
	if (type(input) == 'Undefined') {
		return 'undefined'
	}
	if (type(input) == 'Null') {
		return 'null'
	}
	if (type(input) == 'Boolean') {
		return input.toString()
	}
	if (type(input) == 'Number') {
		return input.toString()
	}
	if (type(input) == 'String') {
		return '"' + input + '"'
	}
	if (type(input) == 'Function') {
		return input.toString()
	}
	if (type(input) == 'Array') {
		var result = [];
		for (var i in input) {
		    result.push(stringify(input[i]))
		}
		return '[' + result.join(',') + ']'
	}
	if (type(input) == 'Object') {
		var result = [];
		for (var key in input) {
			var val = stringify(input[key])
			result.push('"' + key + '"' + ": " + val)
		}
		return '{' + result.join(',') + '}'
	}
}