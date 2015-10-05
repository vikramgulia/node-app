var yelp = require("yelp").createClient({
    consumer_key: "grCj12VbKzHewKZGg65Elg",
    consumer_secret: "h4WwlC7iyx8Wu05nWGP0zlJ58Wg",
    token: "jFqueSCJpbDiYDcubNYp9Pc5VZjc-jHf",
    token_secret: "lU3He7hQLueyyXlptDcSah3Kaa0"
});

var express = require('express');
var router = express.Router();

// See http://www.yelp.com/developers/documentation/v2/search_api
router.get('/search', function (req, res, next) {
    res.setHeader("Content-Type", "application/json");
    yelp.search({term: "food", location: "Montreal"}, function (error, data) {
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

module.exports = router;