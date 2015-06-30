var x = 2;
x
x * 2
console.log("Hi Class!")
if (x >4) {
console.log("x is greater than 4");
} else {
console.log("x is not greater than 4");
}
function Person() {}
Person.prototype.getFullName = function() {
return this.firstName + " " + this.lastName;
}
var p = new Person();
p.firstName = "Eric";
p.lastName = "Greene";
p.getFullName();
