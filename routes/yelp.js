var yelp = require("yelp").createClient({
    consumer_key: process.env.CONSUMER_KEY.toString(),
    consumer_secret: process.env.CONSUMER_SECRET.toString(),
    token: process.env.TOKEN.toString(),
    token_secret: process.env.TOKEN_SECRET.toString()
});

var express = require('express');
var fs = require('fs');
var router = express.Router();

// See http://www.yelp.com/developers/documentation/v2/search_api
router.get('/search', function (req, res, next) {
    res.setHeader("Content-Type", "application/json");
    yelp.search({term: "foodtrucks", location: "Denver"}, function (error, data) {
        if (error)
            res.send(error);
        if (data)
            res.send(data);
    });
});

// See http://www.yelp.com/developers/documentation/v2/business
router.get('/business', function (req, res, next) {
    res.setHeader("Content-Type", "application/json");
    yelp.business("yelp-san-francisco", function (error, data) {
        if (error)
            res.send(error);
        if (data)
            res.send(data);
    });
});


/*setInterval(function () {
    console.log('second passed');
}, 1000);*/


module.exports = router;