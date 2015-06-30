"use strict";

var i = setInterval(function() {
	console.log("interval ran...");
}, 500)

var t = setTimeout(function() {
	console.log("timeout ran...");
	clearInterval(i);
}, 10000);

clearTimeout(t);
