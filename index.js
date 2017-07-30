var express = require("express");
var app = express();
var path = require("path");
var exphbs = require("express-handlebars");
var bodyparser = require("body-parser");

app.use(bodyparser.urlencoded({ extended: true }));
app.use(bodyparser.json());

app.use(express.static(path.join(__dirname, 'public')));

var hbs = exphbs.create({
    defaultLayout: 'layouts',
    helpers: {},
    partialsDir: ['views/partials/']
});

app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

app.get('/', function(req, res) {
    res.render('home', { layout: 'default', title: 'Home Page' });
});

app.get('/dashboard', function(req, res) {
    res.render('dashboard', { layout: 'default', title: 'Dashboard Page' });
});

app.get('/registrationTemplate', function(req, res) {
    res.render('registrationTemplate', { layout: 'default', title: 'Sign-up Page' });
});

var port = 2000;
app.listen(port, function() {
    console.log("Server started at port " + port);
});