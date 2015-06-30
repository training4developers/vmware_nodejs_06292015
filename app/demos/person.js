var BaseModel = require("./baseModel");

var PersonModel = BaseModel.extends({
	defaults: {
		firstName: "",
		lastName: "",
		age: 13
	}
});

module.exports = PersonModel;
