var LetsPush = require('./pushPopShiftUnshift.js').LetsPush;
var LetsPop = require('./pushPopShiftUnshift.js').LetsPop;
var LetsUnshift = require('./pushPopShiftUnshift.js').LetsUnshift;
var LetsShift = require('./pushPopShiftUnshift.js').LetsShift;

var Cheeses = [];

LetsPush(Cheeses, 'Brie');
LetsPush(Cheeses, 'Gouda');
LetsPush(Cheeses, 'Parmesan');
LetsPush(Cheeses, 'Cheddar');
LetsPush(Cheeses, 'Bleu');

console.log(Cheeses);

LetsPop(Cheeses);

console.log(Cheeses);

LetsPop(Cheeses);

console.log(Cheeses);

LetsUnshift(Cheeses, 'Cheddar');

console.log(Cheeses);

LetsShift(Cheeses);

console.log(Cheeses);