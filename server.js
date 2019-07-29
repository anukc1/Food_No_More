var express = require("express");
var passport = require("passport");
var session = require("express-session");
var exphbs = require("express-handlebars");

var db = require("./app/models");

var app = express();
var PORT = process.env.PORT || 5000;

app.use(express.static('app/public'))
app.use(express.urlencoded({ extended: true }));
app.use(express.json());


//set up handlebars
app.set("views", "./app/views");
app.engine("handlebars", exphbs({ defaultLayout: 'main' }));
app.set("view engine", "handlebars");

//for passport
app.use(
	session({
		secret: "anything you want",
		resave: true,
		saveUninitialized: true
	})
); //session secret
app.use(passport.initialize());
app.use(passport.session()); //allows persistent login sessions



//routes
require("./app/routes/auth.js")(app, passport);
require("./app/routes/apiRoutes.js")(app);
require('./app/routes/htmlRoutes.js')(app)
//passport init
require("./app/config/passport/passport.js")(passport, db.User);

db.sequelize.sync().then(function() {
	app.listen(PORT, function() {
		console.log("App listening on http://localhost:" + PORT);
	});
});
