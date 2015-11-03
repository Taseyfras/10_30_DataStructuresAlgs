var unique = require('./unique.js').unique;
var second = require('./unique.js').second;
var third = require('./unique.js').third;
var last = require('./unique.js').last;

module.exports.frequency = function(array) {
	var allUniques = [];
	for(var i =0; i < array.length; i++){
		allUniques.push(unique(array[i]));
	} 
	var superArray = allUniques.reduce(function(a, b){
		return a.concat(b);
	});
	var secondDupesplice = [];
	secondDupesplice.push(second(superArray));
	var TheSecond = secondDupesplice.reduce(function(a, b){
		return a.concat(b);
	});	
	var thirdDupesplice = [];
	thirdDupesplice.push(third(TheSecond));
	var TheThird = thirdDupesplice.reduce(function(a, b){
		return a.concat(b);
	});	
	var lastDupesplice = [];
	lastDupesplice.push(last(TheThird));
	var TheLast = lastDupesplice.reduce(function(a, b){
		return a.concat(b);
	});	console.log('The most common letter in your array is ' + TheLast);
};	


