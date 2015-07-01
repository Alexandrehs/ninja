var express = require('express');
var app = express();
var router = express.Router();
var port = process.env.PORT || 8080;

app.set('views', __dirname + '/views');
app.set('view engine', 'jade');

app.use(express.static(__dirname + '/public'));

router.get('/', function(req, res){
	res.render('index');
});

router.get('/users', function(req, res){
	res.render('users');
});

app.use('/', router);

app.listen(port);