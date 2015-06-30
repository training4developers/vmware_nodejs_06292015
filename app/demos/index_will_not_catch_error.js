"use strict";

try {

setImmediate(function() {
	console.log("1. do something at the end of the event loop");
	throw Error("something bad happened!");
});

} catch(err) {
	console.log("error occurred");
	console.log(err);
}

console.log("2. here is some output...");
