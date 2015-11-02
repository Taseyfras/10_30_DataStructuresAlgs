
module.exports.LetsPush = function(array, item) {
	array[array.length] = item;
};

module.exports.LetsPop = function(array) {
	array.length = array.length -1;
};

module.exports.LetsUnshift = function(array, item) { 
	 for (var i = array.length - 1; i >=0; i--) {
	 	array[i +1] = array[i];
	 }
	 array[0] = item;
};

module.exports.LetsShift = function(array) {
	for (var i = 0; i < array.length - 1; i++) {
		array[i] = array[i +1];
	}
	array.length = array.length -1;
};

require('./pushPopShiftUnshift.js');

