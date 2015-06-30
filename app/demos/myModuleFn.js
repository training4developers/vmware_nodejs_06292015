function logger(logPrefix) {

	var lp = logPrefix || logger.DEFAULT_PREFIX;

	return {
		getDefaultPrefix: function() {
			return logger.DEFAULT_PREFIX;
		},
		log: function(message) {
			console.log(logPrefix + message);
		}
	};

}

logger.DEFAULT_PREFIX = "App > ";

module.exports = logger;
