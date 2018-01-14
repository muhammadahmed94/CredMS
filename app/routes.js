var User = require('./models/user');
var express = require("express");
var routes = express.Router();
module.exports = function (app, passport) {
    app.get('/', function (req, res) {
        res.render('index.ejs');
    });

    app.get('/signup', function (req, res) {
        res.render('signup.ejs', { "message": req.flash("signupMessage") });
    });

    app.post('/signup', passport.authenticate("local-signup", {
        successRedirect: "/",
        failureRedirect: "/signup",
        failureFlash: true
    }));

    app.get('/login', function (req, res) {
        res.render('login.ejs', { message: req.flash("loginMessage") });
    });

    app.post('/login', passport.authenticate("local-login", {
        successRedirect: "/profile",
        failureRedirect: "/login",
        failureFlash: true
    }));

    app.get('/profile', isLoggedIn, function (req, res) {
        res.render('profile.ejs', { user: req.user });
    });

    app.get('/logout', function (req, res) {
        req.logOut();
        res.redirect('/');
    });

    //google auth
    app.get('/auth/google', passport.authenticate('google', { scope: ['profile', 'email'] }));

    app.get('/auth/google/callback',
        passport.authenticate('google', {
            successRedirect: '/profile',
            failureRedirect: '/'
        }));

    // app.post('/signup', function (req, res) {
    //     var newUser = new User();
    //     newUser.local.username = req.body.email;
    //     newUser.local.email = req.body.email || "test@test.com";
    //     newUser.local.password = req.body.password;
    //     console.log(newUser);
    //     newUser.save(function (err) {
    //         if (err) {
    //             console.log(err);
    //         }
    //     });
    //     res.redirect('/');
    // });


    // app.get('/:username/:password', function (req, res) {
    //     var newUser = new User();
    //     newUser.local.username = req.params.username;
    //     newUser.local.password = req.params.password;
    //     newUser.save(function (err) {
    //         console.log(err);
    //     });
    //     res.send("User Name Pass");
    // })
}

function isLoggedIn(req, res, next) {
    if (!!req.isAuthenticated()) {
        return next();
    } else {
        res.redirect('/login');
    }
}