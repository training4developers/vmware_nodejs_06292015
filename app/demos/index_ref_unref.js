"use strict";

var events = require("events");

var eventEmitter = new events.EventEmitter();

eventEmitter.on("data", function() {
	console.log("received data");
});

console.log("do something");


var i = setInterval(function() {
	eventEmitter.emit("data", "some data");
}, 1000);

setTimeout(function() {
	console.log("timeout expired...");
	i.unref();
}, 10000);
