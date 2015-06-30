var x=0, y=0, funcs = [];

for (; x<5;x++) {
	(function(t) {
		//var t = x;
		funcs.push(function() {
			console.log(t);
		});
	})(x);
}

for (; y<5;y++) {
	funcs[y]();
}
