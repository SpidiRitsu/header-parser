var express = require('express');
var app = express();

var port = process.env.PORT | 3500;

app.listen(port, function () {
	console.log('Listening on port ' + port);
});

app.get('/', function (req, res) {
	console.log(req.headers);
	res.json({
		ipadress: req.ip,
		language: req.headers['accept-language'].split(',')[0],
		software: req.headers['user-agent'].split('(')[1].split(')')[0]
	});
});