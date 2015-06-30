var list = [10,20];

list[2] = 30;
list[1000] = 40;
list["this is interesting..."] = "neat right?";
for (var x in list) {
	console.log(x + ": " + list[x]);
}
console.log("length: " + list.length);
