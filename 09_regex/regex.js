var findACount = function(string) {
	var aCount = string.match(/[a]/gi)
	if (aCount == null) {
		return 0
	}
	return aCount.length
}

var areaCodeFinder = function(string) {
	var code = string.match(/\d{3}/)
	return parseInt(code[0])
}

var adjustUrlParameter = function(string1, string2) {
	if (string1.match(/\?/) == null) {
		string1 += '?' + string2
	}
	else if (string1.match(/\S+\?(\w+)/)[1] == string2.match(/(\w+)/)[1]) {
		string1 = string1.replace(string1.match(/\S+\?(\S+)/)[1], string2)
	}
	else {
		string1 += '&' + string2
	}
	return string1
}

var stringPlusPlus = function(string) {
	if (string.match(/\S*\d/) == null) {
		return string + '1'
	}
	var numString = string.match(/[a-zA-z]*(\d+)/)[1]
	var l = numString.length;
	var new_numString = (parseInt(numString)+1).toString()
	var zero_string = ""	
	while (new_numString.length + zero_string.length < l) {
		zero_string += '0'
	}
	var final_string = zero_string + new_numString
	string = string.replace(/\d+/, final_string)
	return string
}