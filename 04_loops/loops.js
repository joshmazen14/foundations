function repeat(str, num) {
	var a = "";
	for (i=1; i<=num; i++) {
		a += str;
	}
	return a;
}

function sum(arr) {
	var s = 0;
	for (i=0; i<arr.length; i++) {
		s+= arr[i];
	}
	return s
}

function gridGenerator(num) {
	var grid = "";
	for(i=1; i<=num; i++) {
		for (j=1; j<=num; j++) {
			if ((i+j)%2===0) {
				grid += "#"
			}
			else {
				grid += " "
			}
		}
		grid += "\n"
	}
	return grid
}

function largestTriplet(num) {
	for (k=num; k>0; k--) {
		for (i=0; i<k; i++) {
			for (j=0; j<k; j++) {
				if (Math.pow(i,2)+Math.pow(j,2)==Math.pow(k,2)) {
					return [i,j,k]
				}
			}
		}
	}
}

function join(arr, del) {
	var str = "";
	if (del!=undefined) {
		for (i=0; i<arr.length-1; i++) {
			arr[i]+=del
		}
	}
	for (i=0; i<arr.length; i++) {
		str += arr[i];
	}
	return str
}

function sort_obj(object) {
  var sortedObject = {};
  var keys = Object.keys(object);
  keys.sort();
  for (var i = 0; i < keys.length; i++) {
    key = keys[i];
    value = object[key];
    sortedObject[key] = value;
  }
  return sortedObject;
}

function paramify(obj) {
	var str = ""
	var counter = Object.keys(obj).length-1;
	var newobj = sort_obj(obj);
	for (var key in newobj) {
		if (obj.hasOwnProperty(key)) {
			str += key + "=" + newobj[key]}
		if (counter > 0) {
			str += "&";
			counter --
		}
	}
	return str
}