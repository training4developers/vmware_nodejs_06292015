"use strict";

process.stdin.once("data", function(data) {

	var response = data.toString();

	console.log("you wrote: " + response);
	process.stdin.pause();

});

console.log("please enter some text: ");
process.stdin.resume();	
