var express = require('express');
var router = express.Router();
var bodyParser = require("body-Parser");
var jsonParser = bodyParser.json();

router.post("/urls", jsonParser, function (req, res) {
    var longUrl = req.body.longUrl;
});

//相当于 返回
module.exports = router;