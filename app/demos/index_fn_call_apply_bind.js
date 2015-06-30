"use strict";

function myFunc() {

	console.log(this);
	//console.log(arguments);

}

var o = {
	id: 1,
	myFunc: myFunc
};

//myFunc.call(o, 1,2,3);
//myFunc.apply(o, [1,2,3]);
var f = myFunc.bind(o);

//f();

f.call({
	id: 2
});
