
var person = {
	firstName: "Eric",
	lastName: "Greene"
};

var usCitizen = {
	ssn: "111111111"
};

var frenchDescent = {
	likeCroissants: true
};

mixin(person, usCitizen, frenchDescent);
console.dir(person);

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
