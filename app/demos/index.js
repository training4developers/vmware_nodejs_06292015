"use strict";

var util = require("util");

var VMWareEmployee = require("./vmwareEmployee");


var emp = new VMWareEmployee({
	firstName: "Tim",
	lastName: "Johnson",
	empId: "1000"
});

emp.on("change", function() {
	console.log(arguments);
})

//emp.set("age", 45);
emp.age = 45;

console.log(util.inspect(emp));


/*
var CarModel = BaseModel.extends({
	defaults: {
		make: "",
		model: "",
		year: 2015
	}
});

var pm = new PersonModel({
		firstName: "Bob",
		lastName: "Smith"
});

var cm = new CarModel({
	make: "Ford",
	model: "Fusion",
	year: 2014
});

cm.on("read", function(e) {
	console.log(e);
});

cm.on("change", function(e) {
	console.log(e);
});
console.log(cm.get("make"));
cm.set("make", "Tesla");
//console.log(util.inspect(cm));


//console.log(util.inspect(pm));
//console.log(util.inspect(Object.getPrototypeOf(pm)));

//console.log(pm.get("firstName"));
*/
