var Mammal = function(name) {
	this.name = name;
	this.offspring = [];
}

Mammal.prototype.sayHello = function() {
	return "My name is " + this.name + ", I'm a Mammal"
}

var babyMammal = Object.create(Mammal)

babyMammal.prototype.haveBaby = function() {
	this.name = "Baby " + this.name
	this.offspring.push(this)
	return this
}


var Cat = function(name, color) {
	Mammal.call(this, name)
	this.color = color
}

Cat.prototype.__proto__ = Object.create(Mammal.prototype)

var babyCat = Object.create(Cat);

babyCat.prototype.haveBaby = function(color) {
	this.name = "Baby " + this.name;
	this.offspring.push(this);
	this.color = color;
	return this
}
