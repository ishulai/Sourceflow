var express = require('express');
var path = require('path');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var stylus = require('stylus');
var nib = require('nib');
var fs = require("fs");
var session = require("express-session");
var passport = require("passport");
var mongoose = require("mongoose");
var flash = require("connect-flash");
var util = require("./config/util.js");
var fontAwesome = require("font-awesome-stylus");

const MongoStore = require('connect-mongo')(session);

var configDB = require("./config/database.js");
mongoose.connect(configDB.url);

var app = express();

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use(session({ 
	store: new MongoStore({ mongooseConnection: mongoose.connection }),
	secret: 'secret',
    resave: true,
    saveUninitialized: true 
}));

app.use(passport.initialize());
app.use(passport.session());
app.use(flash());

require("./config/passport")(passport);

var routes = path.join(__dirname, "routes");

fs.readdirSync(routes).forEach(function(file) {
    var route = path.join(routes, file);
    require(route)(app, util);
});

app.get("*", function(req, res, next) {
	try {
		res.render("index", { title: "Express", email: req.user.id });
	} catch(err) {
		res.render("index", { title: "Express", email: "null" });
	}
});

require("babel-core").transform("code");
/*
function compile(str, path) {
	return stylus(str)
		.set('filename', path)
		.use(nib())
		.use(fontAwesome())
}

app.use(stylus.middleware({
	src: path.join(__dirname, "src", "stylesheets"),
	dest: path.join(__dirname, "src", "scripts"),
	force: true,
	compile: compile
}));*/

module.exports = app;