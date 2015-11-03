module.exports.unique = function(string) {
	var uniqueArray = string.split('');
		for(var i = 0; i < uniqueArray.length; i++) {
			for (var j = i + 1; j < uniqueArray.length; j++) {
				if (uniqueArray[i] === uniqueArray[j]) {
					uniqueArray.splice (i, 1);
				} 
			}
		}  return uniqueArray;
	};

module.exports.second = function(array) {
	var secondUcall = [];
		for(var i = 0; i < array.length; i++) {
			for (var j = i + 1; j < array.length; j++) {
				if (array[i] === array[j]) {
					secondUcall.push(array.splice (i, 1));
				} 
			}
		}  return secondUcall.reduce(function(a, b){
		return a.concat(b);
		});
	};

module.exports.third = function(array) {
	var thirdUcall = [];
		for(var i = 0; i < array.length; i++) {
			for (var j = i + 1; j < array.length; j++) {
				if (array[i] === array[j]) {
					thirdUcall.push(array.splice (i, 1));
				} 
			}
		}  return thirdUcall.reduce(function(a, b){
		return a.concat(b);
		});
	};

module.exports.last = function(array) {
	var lastUcall = [];
		for(var i = 0; i < array.length; i++) {
			for (var j = i + 1; j < array.length; j++) {
				if (array[i] === array[j]) {
					lastUcall.push(array.splice (i, 1));
				} 
			}
		}  return lastUcall.reduce(function(a, b){
		return a.concat(b);
		});
	};


require('./unique.js');

