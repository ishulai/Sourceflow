var passport = require('passport');

module.exports = function(app, util) {
	app.post("/signup", passport.authenticate("signup", {
		successRedirect: "/",
		failureRedirect: "/signup"
	}));
}