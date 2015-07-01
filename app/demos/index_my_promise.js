"use strict";

function MyPromise(promiseFn) {
	this.promiseFn = promiseFn;
}

MyPromise.prototype.then = function(resolveFn, rejectFn) {
	this.promiseFn(resolveFn,rejectFn);

	return new MyPromise(function() {

	});
};

var p = new MyPromise(function(resolve, reject) {
	// Step 2
	process.stdout.write("Enter your name: ");
	process.stdin.resume();

	process.stdin.on("data", function(data) {
		process.stdin.pause();
		// Step 3
		resolve(data.toString());
	});
});

// Step 1
p.then(function(result) {
	// Step 4
	process.stdout.write("Your name is: " + result);
}).then(function(result) {

});
