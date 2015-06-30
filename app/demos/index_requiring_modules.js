"use strict";

var util = require("util");

var myModuleFn = require("./myModuleFn");
var myModuleFn2 = require("./myModuleFn");

var appLogger = myModuleFn("MyApp > ");
appLogger.log("This is cool!");
myModuleFn.DEFAULT_PREFIX = "Something Else!";
console.log(appLogger.getDefaultPrefix());

var teapotLogger = myModuleFn2("Teapot > ");
teapotLogger.log("I'm a little teapot...");
console.log(teapotLogger.getDefaultPrefix());

console.log(myModuleFn === myModuleFn2);

//console.log(util.inspect(myModule, 0));
