var
	express = require('express'),
	app = express(),
	http = require('http').Server(app),
	io = require('socket.io')(http)
	path = require("path"),
	util = require("util"),
	fs = require("fs");

/*
app.use(function(req, res, next) {

	//console.log(util.inspect(req));

	console.log("url: " + req.url);
	console.log("path: " + req.path);
	console.log("query test: " + req.query.test);

	next();

});
*/
app.use(express.static("www"));

/*
app.use(function(req, res){

	// Single file for ALL requests
	//res.sendFile(path.join(__dirname, "www", "index.html"));

  // Similar to express.static
	//res.sendFile(path.join(__dirname, "www",
	//	req.path === "/" ? "index.html" : req.path));

	// Similar to express.static
	/*
	var fileName = 	path.join(__dirname, "www", req.path === "/" ? "index.html" : req.path);
	fs.readFile(fileName, function(err, data) {

		if (err) {
			res.writeHead(404);
			return res.end("Not Found: " + req.path);
		}

		switch(path.extname(fileName)) {
			case ".js":
				res.set("Content-Type", "text/javascript");
				break;
			case ".css":
				res.set("Content-Type", "text/css");
				break;
			case ".html":
				res.set("Content-Type", "text/html");
				break;
		}
		//res.writeHead(200);
		res.status(200).end(data);

	});
	*/

//});

io.on('connection', function(socket){

	console.log(util.inspect(socket,false,0));

	console.log('a user connected');
  socket.on('disconnect', function(){
    console.log('user disconnected');
  });

	socket.on('chat message', function(msg){
		console.dir(arguments);
		socket.emit('chat message', "aaaaa");
		io.emit('chat message', msg);
	});

	socket.on("uploadfile", function(uploadedFile) {

		console.log(util.inspect(uploadedFile));

		fs.writeFile(path.join(__dirname, "uploads", uploadedFile.fileName), uploadedFile.fileData, function(err) {

			if (err) {
				console.log(err);
			}

		});

	});
});

http.listen(3000, function(){
  console.log('listening on *:3000');
});
