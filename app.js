// app.js
// https://scotch.io/tutorials/use-ejs-to-template-your-node-application

var express = require('express');
var app = express();

var port = 8080;

// set the view engine to ejs
app.set('views', __dirname  + '/' +'views');
app.set('view engine', 'ejs');

// use res.render to load up an ejs view file

// index page
app.get('/', function(req, res) {
    res.render('pages/index');
});

// about page
app.get('/about', function(req, res) {
    var os = require("os");
    res.render('pages/about', {hostname: os.hostname()});
});

// projects page
app.get('/projects', function(req, res) {
    res.render('pages/projects');
});

// resume page
app.get('/resume', function(req, res) {
    res.render('pages/resume');
});

app.get('/reset', function(req, res) {
    res.render('pages/reset');
});

app.get('/contact', function(req, res) {
    res.render('pages/index');
});

app.get('/bitcoin', function(req, res) {
    res.render('pages/bitcoin');
});

app.use('/', express.static(__dirname + '/assets'));

app.listen(port);
console.log("App started, listening on port " + port);
