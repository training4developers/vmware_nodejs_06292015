var santa = {
	firstName: "Santa",
	lastName: "Clause",
	age: 1000,
	hasABeard: true,
	colorOfCoat: "red",
	sleigh: {
		color: "red",
		drivesOnSnow: true,
		drivesOnAir: true
	},
	animals: [ {
							name: "Donner",
							species: "reindeer",
							isNoseRed: false
						 },
						 {
							name: "Rudolph",
							species: "reindeer",
							isNoseRed: true
						} ],
	driveTheSleigh: function() {

	}
};

santa.driveTheSleigh();

santa.driveTheSleigh = 2;
