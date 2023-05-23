const express = require('express');
const admin = require("firebase-admin");

//body-parser
const bodyParser = require('body-parser');

//ejs
const ejs = require('ejs');

//using express 
const app = express();

//using bodyparser
app.use(bodyParser.json())

app.engine("html", require("ejs").renderFile);
app.use(express.static("static"));

app.get("/signup", function (req, res) {
    res.render("signup.html");
});

//login route
app.get("/login", function (req, res) {
    res.render("login.html");
});

//user profile route
app.get("/profile", function (req, res) {
    res.render("profile.html");
});

firebase.initializeApp(config);
function createAccount(){
    // obtain user email and user password from HTML
    var userEmail = document.getElementById("email_field").value;
    var userPass = document.getElementById("password_field").value;
    firebase.auth().createUserWithEmailAndPassword(userEmail, userPass).catch((error) =>{
        //error code
        var errorCode = error.code

        //error message
        var errorMessage = error.message                
    }).then(() => {
        //redirect the user to profile page
        window.location.assign("/profile");
    });
}

// initialize firebase
firebase.initializeApp(config);

function login() {
    // obtain user email and user password from HTML
    var userEmail = document.getElementById("email_field").value;
    var userPass = document.getElementById("password_field").value;
    firebase.auth().signInWithEmailAndPassword(userEmail, userPass).catch(function(error) {
        //error code
        var errorCode = error.code
        //errod message
        var errorMessage = error.message
        //show error message
        window.alert("Error : " + errorMessage);
    }).then(() => {
        //redirect the user to profile page
        window.location.assign("/profile");
    });
}

firebase.initializeApp(config);
const user = firebase.auth().currentUser;

// send verification email
function sendVerificationEmail() {
    // extracting the user from the firebase
    var user = firebase.auth().currentUser;

    user.sendEmailVerification().then(function() {
        window.alert("Verification link sent to your email. Kinldy check to verify your account")
    }).catch(function(error) {
        // An error happened.
    });
}

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Listening on http://localhost:${PORT}`);
});



