var fs = require('fs')
fs.readFile(process.argv[2], 'utf8', function(error, data) {
	if (error) {
		throw error
	}
	else {
		var numLines = data.split('\n').length-1
		console.log(numLines)
	}
})