var express = require('express');
var app = express();

var port = process.env.PORT || 3500;

app.enable('trust proxy');

app.listen(port, function () {
	console.log('Listening on port ' + port);
});

app.get('/', function (req, res) {
	res.json({
		ipaddress: req.ip,
		language: req.headers['accept-language'].split(',')[0],
		software: req.headers['user-agent'].split('(')[1].split(')')[0]
	});
});