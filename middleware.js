var middleware = {
	 requireAuthentication: function(req, res, next){ //next is how you tell user to move on
		console.log('Private route hit');
		next();

	},
	logger: function(req, res, next){
		console.log(new Date().toString() + ' - s' + req.method + ' ' + req.originalUrl);
		next();
	}
};

module.exports = middleware;