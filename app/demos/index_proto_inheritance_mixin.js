
function Person(options) {

	var defaults = {
		firstName: "",
		lastName: "",
		height: 0,
		weight: 0
	};

	mixin(this, defaults, options);

}

Person.prototype.getFullName = function() {
	return this.firstName + " " + this.lastName;
};

function VMWareEmployee(options) {

	var defaults = {
		employeeId: 0
	};

	Person.call(this, options);

	mixin(this, defaults, options);
}

VMWareEmployee.prototype = Object.create(Person.prototype);
VMWareEmployee.prototype.constructor = VMWareEmployee;
VMWareEmployee.prototype.getEmployeeIdString = function() {
	return this.employeeId + " " + this.getFullName();
};

var p = new Person({
	firstName: "Bob",
	lastName: "Smith",
	height: 45
});

var p2 = new VMWareEmployee({
	firstName: "Jane",
	lastName: "Smith",
	employeeId: 2
});

console.log(p.getEmployeeIdString());
console.dir(p);

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
