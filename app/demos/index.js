"use strict";

function Person(options) {

	this.attributes = options;

	for (var fieldName in options) {
		console.log("setting up fieldname: " + fieldName);
		(function(fieldName) {
			Object.defineProperty(this, fieldName, {
				enumerable: true,
				configurable: true,
				get: function() {
					console.log("getting " + fieldName);
					return this.attributes[fieldName];
				},
				set: function(value) {
					console.log("setting " + fieldName);
					this.attributes[fieldName] = value;
				}
			});
		}).call(this, fieldName);
	}

	console.dir(this);

}

var p = new Person({
	firstName: "Eric",
	lastName: "Greene"
});

p.firstName = "Bob";

console.log(p.firstName);
