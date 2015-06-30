"use strict";

process.stdin.once("data", function(data) {
	process.stdout.write("you typed: " + data.toString());
	process.stdin.pause();
})

process.stdout.write("enter some data: ");
process.stdin.resume();
