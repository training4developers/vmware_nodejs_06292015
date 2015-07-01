var
	express = require('express'),
	app = express(),
	http = require('http').Server(app),
	io = require('socket.io')(http)
	path = require("path"),
	util = require("util"),
	fs = require("fs"),
	Promise = require("bluebird"),
	zlib = require("zlib");

	//console.log(util.inspect(zlib, false, 0));

/*
app.get("/", function(req, res){
	res.sendFile(path.join(__dirname, "www", "index.html"));
});
*/

var originalExists = fs.exists;
fs.exists = function(filePath, callBack) {
	originalExists(filePath, function(exists) {
		if (!exists) {
			callBack(new Error("file does not exist"), false);
		}
		callBack(null, true);
	});
};

Promise.promisifyAll(fs);

app.use(function(req, res, next) {

	var filePath = path.join(__dirname, "www", req.path);

	fs.existsAsync(filePath).then(function(result) {
		return fs.readFileAsync(filePath);
	}).then(function(fileData) {

		switch (path.extname(filePath)) {
			case ".html":
				res.set("Content-Type", "text/html");
				break;
			case ".js":
				res.set("Content-Type", "application/javascript");
				break;
			case ".css":
				res.set("Content-Type", "text/css");
				break;
			default:
				res.set("Content-Type", "text/plain");
				break;
		}

		res.status(200).end(fileData.toString());

	}).catch(function(err) {
		res.status(404).end(err.message);
	});

});

//app.use(express.static("www"));

io.on('connection', function(socket){

	console.log('a user connected');
  socket.on('disconnect', function(){
    console.log('user disconnected');
  });

	socket.on('chat message', function(msg){
		io.emit('chat message', msg);
	});

});

http.listen(3000, function(){
  console.log('listening on *:3000');
});
