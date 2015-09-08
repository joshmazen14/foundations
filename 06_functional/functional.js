// 06_Functional 
<<<<<<< HEAD
var doubler = function(num) {
	return 2*num;
}

var forEach = function(array, iteratorFunc) {
	for (var i in array) {
		iteratorFunc(array[i]);
	}
}

var map = function(array, mapFunc) {
	var newarr = [];
	forEach(array, function(item) {
		item = mapFunc(item);
		newarr.push(item)
	});
	return newarr
}

var filter = function(array, filterFunc) {
	var newarr = [];
	forEach(array, function(item) {
		if (filterFunc(item) === true) {
			newarr.push(item)
		}
	})
	return newarr
}

var contains = function(data, num) {
	var counter = 0;
	forEach(data, function(item) {
		if (item == num || data[item] == num) {
			counter += 1
		}
	})
	if (counter > 0) {
		return true
	}
	else {
		return false
	}
}

var countWords = function(string) {
	var total = 0;
	var array = string.split(" ")
	forEach(array, function() {
		total ++;
	})
	return total
}

var reduce = function(array, startingPoint, combiningFunc) {
	var current = startingPoint;
	for (var i=0; i<array.length; i++) {
		current = combiningFunc(current, array[i])
	}
	return current
}

var countWordsInReduce = function(number, string) {
	var array = string.split(" ");
	forEach(array, function() {
		number ++
	})
	return number
}

var sum = function(array) {
	return reduce(array, 0, function(a,b) {
		return a+b
	})
}

var every = function(array, func) {
	var counter = 0
	forEach(array, function(item) {
		if (func(item) == false) {
			counter ++
		}
	})
	if (counter > 0) {
		return false
	}
	else {
		return true
	}
}

var any = function(array, func) {
	var counter = 0
	forEach(array, function(item) {
		if (func(item) == true) {
			counter ++
		}
	})
	if (counter > 0) {
		return true
	}
	else {
		return false
	}
}
=======
>>>>>>> node_projects_branch
