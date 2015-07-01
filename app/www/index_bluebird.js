module.exports = function(webServerConfig) {

	function logRequest(method, path, statusCode, statusMessage) {

		var
			fs = require("fs"),
			logData = method + "\t" + path + "\t" + statusCode + "\t" + statusMessage + "\n";

		fs.appendFile("log.txt", logData, "utf-8", function(err) {
			if (err) {
				console.log("error writing to log file");
			}
		});

	}

	var
		https = require("https"),
		fs = require("fs"),
		url = require("url"),
		options = {
			key: fs.readFileSync("bb-key.pem"),
			cert: fs.readFileSync("bb-cert.pem")
		},
		server = https.createServer(options, function(req, res) {

			var
				fs = require("fs"),
				path = require("path"),
				statusCode = 200,
				statusMessage = "OK",
				urlPath = url.parse(req.url).path,
				contentType = "application/json",
				result,
				bluebird = require("bluebird");

				bluebird.promisifyAll(fs);

			switch (req.method) {
				case "GET":

					fs.readFileAsync("." + urlPath, "utf-8").then(function(data) {
						contentType = "text/html";
						result = data;
					}).catch(function() {
						statusCode = 404;
						statusMessage = "File Not Found";
						result = "";
					}).finally(function() {
						res.writeHead(statusCode, statusMessage, { "Content-Type": contentType });
						res.write(result);
						res.end();

						logRequest(req.method, urlPath, statusCode, statusMessage);
					});
					/*
					urlParams = /\/widget\/(\w*)$/.exec(path);
					result = {
						id: urlParams[1],
						name: "Cool Widget",
						color: "red",
						size: "small"
					};
					*/
					break;
				case "POST":
					result = "POST";
					break;
				case "PUT":
					result = "PUT";
					break;
				case "DELETE":
					result = "DELETE";
					break;
			}


		});

	server.listen(webServerConfig.port, function() {
		console.log("web server started on port: " + webServerConfig.port);
	});

};
