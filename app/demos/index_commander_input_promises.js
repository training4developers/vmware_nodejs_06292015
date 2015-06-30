"use strict";

var commander = require("commander-plus");

function doPrompt(question) {

	return new Promise(function(resolve) {

		commander.prompt(question, function(data) {
			process.stdin.pause();
			resolve(data.toString());
		});

	});
}

function doConfirm(question) {

	return new Promise(function(resolve) {

		commander.confirm(question, function(proceed) {
			process.stdin.pause();
			resolve(proceed);
		});

	});
}

function doChoose(question, list) {

	return new Promise(function(resolve) {

		console.log(question)
		commander.choose(list, function(selectedIndex) {
			process.stdin.pause();
			resolve({ item: list[selectedIndex], itemIndex: selectedIndex});
		});

	});
}

function doPassword(question) {

	return new Promise(function(resolve) {

		commander.password(question, "*", function(password) {
			process.stdin.pause();
			resolve(password);
		});

	});
}

doPrompt("Enter your name: ").then(function(result) {
	console.log("Your name is: " + result);
	return doConfirm("Are you sure?");
}).then(function(result) {
	console.log("confirm result: " + result);
	return doChoose("Favorite color?", ["red","blue","yellow","green"]);
}).then(function(result) {
	console.log("result: " + result.item);
	console.log("result index: " + result.itemIndex);
	return doPassword("Enter your password: ");
}).then(function(result) {
	console.log("your password is: " + result);
});
