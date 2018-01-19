var passport = require('passport');

module.exports = function(app, util) {
	app.post("/login", passport.authenticate("login", {
		successRedirect: "/",
		failureRedirect: "/login"
	}));
}