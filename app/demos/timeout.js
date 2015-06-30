
var nextTask = setTimeout(function() {
	console.log("next task");
},0);

var i = setImmediate(function() {
	console.log("set immediate ran");
});

var nt = process.nextTick(function() {

	console.log("next tick ran");

});
