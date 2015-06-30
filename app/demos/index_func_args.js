function myFunc(param1, param2, param3) {

	for (var prop in arguments) {
		console.log(prop + ": " + arguments[prop]);
	}
}

myFunc("a","b","c","d");
