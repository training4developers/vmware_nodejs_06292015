var
	express = require('express'),
	app = express(),
	http = require('http').Server(app),
	io = require('socket.io')(http)
	path = require("path"),
	util = require("util"),
	fs = require("fs"),
	Promise = require("bluebird"),
	zlib = require("zlib"),
	BufferStream = require("./buffer-stream");

app.use(express.static("www"));

io.on('connection', function(socket){

	console.log('a user connected');
  socket.on('disconnect', function(){
    console.log('user disconnected');
  });

	socket.on('chat message', function(msg){
		io.emit('chat message', msg);
	});

	socket.on("upload", function(fileInfo) {

		var
			filePath = path.join(__dirname, "uploads", fileInfo.fileName),
			gzip = zlib.createGzip(),
			bufferStream = new BufferStream(fileInfo.fileData),
			output = fs.createWriteStream(filePath + ".gz");

		output.on("finish", function() {
			socket.emit("upload result", "success");
		});

		bufferStream.pipe(gzip).pipe(output);

	});

});

http.listen(3000, function(){
  console.log('listening on *:3000');
});
