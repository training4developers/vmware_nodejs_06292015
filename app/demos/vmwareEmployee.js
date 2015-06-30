var Person = require("./person");

var VMWareEmployee = Person.extends({
	defaults: {
		empId: ""
	}
});

module.exports = VMWareEmployee;
