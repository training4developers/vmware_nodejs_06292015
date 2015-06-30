"use strict";

process.stdin.once("data", function(data) {
	process.stdout.write("you typed: " + data.toString());
	process.stdin.pause();
})

console.log("cols: " + process.stdout.columns);
console.log("rows: " + process.stdout.rows);
process.stdout.write("enter some data: ");
process.stdin.resume();

process.on("SIGINT", function() {
	//clearInterval(i);
	i.unref();
	console.log("exiting program...");
});

var i = setInterval(function() {
	console.log("waiting...");
}, 2000);
