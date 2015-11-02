/*unique: implement a function called unique.
 It takes an array and returns a copy of the array with all the duplicates removed.*/

module.exports.unique = function(string) {
		for(var i = 0; i < string.length; i++) {
			for (var j = i + 1; j < string.length; j++) {
				if (string[i] === string[j]) {
					string.splice (i, 1);
				} 
			}
		}  return string;
	};

require('./unique.js');

module.exports.frequency = function(array) {
	array.forEach()
};