function setPropertiesOnObjLiteral(object) {
	object.x = 7;
	object['y'] = 8;
	object.onePlus = function(n) {
		return n+1
	}
}

function setPropertiesOnArrayObj(arrayObject) {
	arrayObject.hello = function () {
		return 'Hello!'
	}
	arrayObject['full']="stack";
	arrayObject[0]=5;
	arrayObject.twoTimes = function(n) {
		return 2*n
	}
}

function setPropertiesOnFunctionObj(functionObject) {
	functionObject.year = 2015;
	functionObject.divideByTwo = function (n) {
		return n/2;
	}
	functionObject.prototype.helloWorld = function() {
		return "Hello World"
	}
	return "I am a function object, all functions are objects! Function can have their own properties too!"
}