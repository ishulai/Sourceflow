module.exports = function(app, util) {
	app.get("/logout", util.isLoggedIn, function(req, res, next) {
		req.logout();
		res.redirect("login");
	});
}