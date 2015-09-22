var cool = require('cool-ascii-faces');
var express = require('express');
var bodyParser = require('body-parser');
var app = express();

app.set('port', (process.env.PORT || 5000));

app.use(express.static(__dirname + '/public'));

// create application/json parser
var jsonParser = bodyParser.json()

// create application/x-www-form-urlencoded parser
var urlencodedParser = bodyParser.urlencoded({extended: true});
// views is directory for all template files
app.set('views', __dirname + '/views');
app.set('view engine', 'jade');

app.get('/', function (request, response) {
    response.render('index', {title: 'Dish', user: 'Vikram'});
});

app.get('/cool', function (request, response) {
    response.send(cool());
});

app.get('/signin', function (req, res) {
    res.render('signin');
});

// POST /login gets urlencoded bodies
app.post('/login', urlencodedParser, function (req, res) {
    if (!req.body)
        return res.sendStatus(400);
    console.log(req.body);
    res.send('welcome, ' + req.body.inputEmail);
});

app.post('/user', jsonParser, function (req, res) {
    if (!req.body)
        return res.sendStatus(400);
    console.log(req.body);
    res.send('welcome, ' + req.body.request[1].payload.type);
});

app.listen(app.get('port'), function () {
    console.log('Node app is running on port', app.get('port'));
});
