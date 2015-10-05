var express = require('express');
var router = express.Router();

router.get('/', function (request, response, next) {
    response.render('index', {title: 'Dish', user: null});
});

module.exports = router;