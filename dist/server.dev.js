"use strict";

var _require = require("http"),
    createServer = _require.createServer;

var _require2 = require("url"),
    parse = _require2.parse;

var next = require("next");

var port = process.env.PORT || 3000;
var dev = process.env.NODE_ENV !== 'production';
var app = next({
  dev: dev
});
var handle = app.getRequestHandler();
app.prepare().then(function () {
  createServer(function (req, res) {
    var parsedUrl = parse(req.url, true);
    handle(req, res, parsedUrl);
  }).listen(port, function (err) {
    if (err) throw err;
    console.log("> Ready on http://localhost:".concat(port));
  });
});