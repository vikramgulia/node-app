var express = require('express');
var bodyParser = require('body-parser');
var router = express.Router();

// create application/x-www-form-urlencoded parser
var urlencodedParser = bodyParser.urlencoded({extended: false, type: '*/x-www-form-urlencoded'});

/* GET users listing. */
router.get('/', function (req, res, next) {
    res.render('signin', {title: 'Dish', user: 'none'});
});

// POST /login gets urlencoded bodies
router.post('/login', urlencodedParser, function (req, res) {
    if (!req.body)
        return res.sendStatus(400);
    console.log(req.body.inputEmail + ' || ' + req.body.inputPassword);
    res.render('index', {title: 'Dish', user: req.body.inputEmail});
});

module.exports = router;
