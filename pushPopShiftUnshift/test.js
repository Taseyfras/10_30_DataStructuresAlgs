var expect = require('chai').expect;
var LetsPush = require('./pushPopShiftUnshift.js').LetsPush;
var LetsPop = require('./pushPopShiftUnshift.js').LetsPop;
var LetsUnshift = require('./pushPopShiftUnshift.js').LetsUnshift;
var LetsShift = require('./pushPopShiftUnshift.js').LetsShift;
var main = require('./main.js');
var Cheeses = [];

describe ('LetsPush', function(){
	it('pushes an item to an array', function (){
		var Cheeses = [];
		LetsPush(Cheeses, 'Brie');
		expect(Cheeses).to.have.length(1);
	});
}); 
describe ('LetsPop', function(){
	it('removes the last item of an array', function (){
		var Cheeses = ['Brie'];
		LetsPop(Cheeses);
		expect(Cheeses).to.be.empty;
	});
}); 
describe('LetsUnshift', function(){
	it('adds an item to the beginning of an array', function(){
		var Cheeses = ['Brie'];
		LetsUnshift(Cheeses, 'Cheddar');
		expect(Cheeses).to.include('Cheddar', 'Brie');
	});
});
describe('LetsShift', function(){
	it('removes an item from the beginning of an array', function(){
		var Cheeses = ['Cheddar', 'Brie'];
		LetsShift(Cheeses);
		expect(Cheeses).to.have.length(1);
	});
});