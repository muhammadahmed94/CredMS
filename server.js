var express = require("express");
var app = express();
app.use('/',function(req,res){
res.end("test app");
})
// var port = process.env.PORT || 8080;
// var cookieParser = require('cookie-parser');
// var path = require('path');
// var session = require('express-session');


// var morgan = require("morgan");
// var mongoose = require("mongoose");
// var configDB = require('./config/database.js');
// var bodyParser = require('body-parser');
// var passport = require('passport');
// var flash = require('connect-flash');

// var MongoDBStore = require('connect-mongodb-session')(session);

// app.use(express.static(path.join(__dirname, 'public')));


// mongoose.connect(configDB.url);
// require('./config/passport.js')(passport);

// app.use(morgan('dev'));
// app.use(cookieParser());
// app.use(bodyParser.urlencoded({ extended: false }));
// var sessionObj = {
//     secret: "secretString",
//     store:
//         new MongoDBStore({ mongoosseStore: mongoose.connect }

//         )
// };

// // , saveUninitialized: true, resave: false
// app.use(session(sessionObj));

// //auth
// app.use(passport.initialize());
// app.use(passport.session());
// app.use(flash());


// app.set('view engine', 'ejs');




// var routes = require('./app/routes.js')(app, passport);

// app.use('/', function (req, res) {
//     res.send("first express program");
//     console.log("cookies", req.cookies);
//     console.log("session", req.session);
// });
app.listen(port,function(){

});
