var
	EventEmitter = require("events").EventEmitter,
	util = require("util");

function Model(attrs) {
	EventEmitter.call(this);
	this.attributes = [];
	for (var attr in attrs) {
		this.addProp(attr, attrs[attr])
	}
}

/*
Model.prototype.set = function(fieldName, fieldValue) {
	this[fieldName] = fieldValue;
	this.emit("change", fieldName, fieldValue);
};

Model.prototype.get = function(fieldName, fieldValue) {
	return this[fieldName];
};
*/

util.inherits(Model, EventEmitter);

Model.prototype.addProp = function(fieldName, fieldValue) {
	Object.defineProperty(this, fieldName, {
		enumerable: true,
		configurable: false,
		get: function() { return this.attributes[fieldName] },
		set: function(value) {
			this.attributes[fieldName] = value;
			this.emit("change", fieldName, value);
		}
	});

	this.attributes[fieldName] = fieldValue;
}

Model.extend = function(options) {

	var newModel;

	if (options.constructor) {

		newModel = options.constructor;

	} else {

		newModel = function(attrs) {

			if (options.defaults) {
				this.attributes = defaults;
			}

			Model.call(this, attrs);

			if (options.initialize) {
				options.initialize();
			}

		};

	}

	delete options.constructor;
	delete options.defaults;
	delete options.initialize;

	util.inherits(newModel, Model);

	for (var prop in options) {
		newModel.prototype[prop] = options[prop];
	}

	return newModel;
};

var Person = Model.extend({
	default: {
		firstName: null,
		lastName: null
	},
	initialize: function() {
		console.log("initializing...");
	},
	getFullName: function() {
		return this.firstName + " " + this.lastName;
	}
});

var p = new Person({
	firstName: "Eric",
	lastName: "Greene"
});

p.on("change", function(fieldName, fieldValue) {
	console.log("change: " + fieldName + " = " + fieldValue);
});

p.firstName = "Amy";
console.log(p.getFullName());
