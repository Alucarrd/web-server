var express = require('express');

var app = express(); //this is express app
var httpPort = process.env.PORT || 3000;
console.log(httpPort);

var middleware = require('./middleware.js');

//to add middleware at route level, just pass it in as 2nd function
app.use(middleware.logger);


app.get('/aboutus', middleware.requireAuthentication, function(req, res){
	res.send('private about us');
})
//add a route

// app.get('/', function(req, res){ //request object and response object
// 	res.send('Hello express!');
// })

//add aboutus, send back text 'About Us'
app.use(middleware.requireAuthentication);

app.get('/about', function(req, res){
	res.send('About Us');
})




//app.use can pass in middleware


//we need to tell express to expose entire folder
console.log(__dirname);
//express.static takes the folder that you want to expose as the parameter
app.use(express.static(__dirname + "/public"));

//app.listen(3000); //listening on port 3000

app.listen(httpPort, function(){
	console.log("express started at port " + httpPort);
})