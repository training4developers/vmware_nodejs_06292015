var
	util = require("util"),
	EventEmitter = require("events").EventEmitter;

function BaseModel(options) {

	EventEmitter.call(this);

	this.attributes = {};

	if (options) {
		for (var prop in options) {
			this.attributes[prop] = options[prop];

			(function(fieldName) {
				Object.defineProperty(this, fieldName, {
					enumerable: true,
					configurable: true,
					get: function() {
						this.emit("read", "get " + fieldName + "=" + this.attributes[fieldName]);
						return this.attributes[fieldName];
					},
					set: function(value) {
						this.emit("change", "set " + fieldName + "=" + value);
						this.attributes[fieldName] = value;
					}
				});
			}).call(this, prop);
		}
	}

}

util.inherits(BaseModel, EventEmitter);

BaseModel.prototype.get = function(propName) {
	this.emit("read", "get " + propName + "=" + this.attributes[propName]);
	return this.attributes[propName];
};

BaseModel.prototype.set = function(propName, propValue) {
	this.emit("change", "set " + propName + "=" + propValue);
	this.attributes[propName] = propValue;
}

function getExtends(modelToExtend) {

	return function(extendOptions) {

		function ChildModel(options) {
			var createOptions = extendOptions.defaults || {};
			mixin(createOptions, options)
			modelToExtend.call(this, createOptions)
		}

		util.inherits(ChildModel, BaseModel);

		ChildModel.prototype = Object.create(modelToExtend.prototype);
		ChildModel.prototype.constructor = ChildModel;

		ChildModel.extends = getExtends(ChildModel);

		return ChildModel;

	}
}

BaseModel.extends = getExtends(BaseModel);

module.exports = BaseModel;

function mixin(destObj) {
	for (var x=1; x<arguments.length; x++) {
		var o = arguments[x];
		for (var prop in o) {
			if (o.hasOwnProperty(prop)) {
				destObj[prop] = o[prop];
			}
		}
	}
}
