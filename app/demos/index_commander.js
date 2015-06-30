"use strict";

/*
process.argv.forEach(function(arg, index) {
	console.log(arg);
});
*/

var commander = require("commander");

commander
	.option("-s, --size <i>", "Integer value for size.", parseInt, 10)
	.option("-m, --mode <s>", "String value for mode.", "development")
	.parse(process.argv);

console.log(commander.size);
console.log(commander.mode);
