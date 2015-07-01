var
	express = require('express'),
	app = express(),
	http = require('http').Server(app),
	io = require('socket.io')(http)
	path = require("path"),
	util = require("util"),
	fs = require("fs"),
	Promise = require("bluebird");

/*
app.get("/", function(req, res){
	res.sendFile(path.join(__dirname, "www", "index.html"));
});
*/

var originalExists = fs.exists;

fs.exists = function(filePath, callBack) {

	originalExists(filePath, function(exists) {
		var err = null;
		callBack(err, exists);
	});

};


Promise.promisifyAll(fs);

app.use(function(req, res, next) {

	console.log("url: " + req.url);
	console.log("path: " + req.path);

	var filePath = path.join(__dirname, "www", req.path);
	console.log("file path: " + filePath);

	fs.existsAsync(filePath).then(function(result) {
		console.log("output: " + result);
	}).catch(function(e) {
    console.log(util.inspect(e));
	});

	if (fs.exists(filePath, function(exists) {
		if (exists) {
			console.log("file exists");
			fs.readFile(filePath, function(err, data) {
				//console.log(data.toString());
				if (err) {
					console.log(err);
					res.status(404).end();
				}
				res.status(200).end(data.toString());
				next();
			});

		}

	}));


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
