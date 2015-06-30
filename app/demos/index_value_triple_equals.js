var x=0;

//if (x == null) { - works in all cases
//if (x === undefined || x === null) { - works in all cases
//if (!x) { - does not work where the value is falsy and not null or undefined
	console.log("x is null or undefined");
} else {
	console.log("x is something else");
}
