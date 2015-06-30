"use strict";

function getInput(prompt) {

	process.stdout.write(prompt);
	process.stdin.resume();

	return new Promise(function(resolve, reject) {
		process.stdin.once("data", function(data) {
			process.stdin.pause();
			resolve(data.toString());
		});
});

}

getInput("Enter your fav color: ").then(function(result) {
	process.stdout.write("Your fav color is " + result);
	return getInput("Enter your name: ");
}).then(function(result) {
	process.stdout.write("Your name is " + result);
	return getInput("Enter your age: ");
}).then(function(result) {
	process.stdout.write("Your age is " + result);
	throw Error("an error occurred...");
}).then(function(result) {
	console.log("ran immediately..." + result);
}, function(result) {
	console.log("error occurred..." + result);
}).then(function() {
	console.log("resolve");
}, function() {
	console.log("reject");
});

/*
process.stdin.once("data", function(data) {

	process.stdout.write("Your name is " + data.toString());
	process.stdin.pause();

	process.stdin.once("data", function(data) {

		process.stdout.write("Your age is " + data.toString());
		process.stdin.pause();

		process.stdin.once("data", function(data) {

			process.stdout.write("Your fav color is " + data.toString());
			process.stdin.pause();

		});

		process.stdout.write("Enter your fav color:");
		process.stdin.resume();

	});

	process.stdout.write("Enter your age:");
	process.stdin.resume();


});

process.stdout.write("Enter your name:");
process.stdin.resume();
*/
