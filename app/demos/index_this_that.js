"use strict";

function set(fieldName, fieldValue) {

	var that = this;

	function assignValue(fieldName, fieldValue) {
		that[fieldName] = fieldValue;
	}

	assignValue(fieldName, fieldValue);
}

var o = {
	id: 1,
	set: set
};

o.set("firstName", "Anna");
o.set("lastName", "Doe");
console.log(o);
