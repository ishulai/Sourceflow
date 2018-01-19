var http = require("http"), cluster = require("cluster");

if(cluster.isMaster) {
	var numworkers = require("os").cpus().length;

	console.log("Master cluster setting up " + numworkers + " workers...");

	for(var i = 0; i < numworkers; i++) {
		cluster.fork();
	}

	cluster.on("online", function(worker) {
		console.log("Worker " + worker.process.pid + " is online");
	});

	cluster.on("exit", function(worker, code, signal) {
		console.log("Worker " + worker.process.pid + " died with code: " + code + ", and signal: " + signal);
		console.log("Starting a new worker");
		cluster.fork();
	});
} else {
	var app = require("./app");

	app.all("/", function(req, res) {
		res.send("process " + process.pid + " says hello!").end();
	});

	var server = app.listen(8000, function() {
		console.log("Process " + process.pid + " is listening to all incoming requests");
	});
}