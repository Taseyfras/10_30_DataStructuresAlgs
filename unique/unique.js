/*unique: implement a function called unique.
 It takes an array and returns a copy of the array with all the duplicates removed.*/

module.exports.unique = function(array) {
		for(var i = 0; i < array.length; i++) {
			for (var j = i + 1; j < array.length; j++) {
				if (array[i] === array[j]) {
					array.splice (i, 1);
				} 
			}
		}  return array;
	};

require('./unique.js');
