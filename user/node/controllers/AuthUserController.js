
const AuthUser =require('../models/AuthUser')
const express = require('express')
const Token =require('../models/Token')

  /**
* POST /login
* Sign in with email and password
*/
const index=(req,res,next)=>{
    AuthUser.find().then(response=>{
        res.json({
            response
        })
    })
    .catch(error=>{
        res.json({
            message:'an eror occored'
        })
    })
}

 const loginPost=(req, res, next) =>{
   

AuthUser.findOne({ email: req.body.email }, function(err, authuser) {
        if (!authuser) return res.status(401).send({ mfsg: 'The email address ' + req.body.email + ' is not associated with any account. Double-check your email address and try again.'});

        authuser.comparePassword(req.body.password, function (err, isMatch) {
            if (!isMatch) return res.status(401).send({ mssg: 'Invalid email or password' });

            // Make sure the authuser has been verified
            if (!authuser.isVerified) return res.status(401).send({ type: 'not-verified', msdg: 'Your account has not been verified.' }); 

            // Login successful, write token, and send back authuser
            res.send({ token: generateToken(authuser), authuser: authuser.toJSON() });
        });
    });
};


var crypto = require('crypto');
var nodemailer = require('nodemailer');
 
/**
* POST /signup
*/
const signupPost = function(req, res, next) {

  // Make sure this account doesn't already exist
  AuthUser.findOne({ email: req.body.email }, function (err, user) {
    if (!user){
    
        // Create and save the user
        user = new AuthUser({ name: req.body.name, email: req.body.email, password: req.body.password });
        user.save(function (err) {
            if (err) { return res.status(500).send({ msbg: err.message }); }
    
            // Create a verification token for this user
            var token = new Token({ email:user.email,_userId: user._id, token: crypto.randomBytes(16).toString('hex') });
     
            // Save the verification token
            token.save(function (err) {
                if (err) { return res.status(500).send({ msag: err.message }); }
     
                // Send the email
                var transporter = nodemailer.createTransport({
                    service: 'gmail',
                    auth: {
                      address:              'smtp.gmail.com',
                      port:                 587,
                      domain:               'gmail.com',
                  
                      user: 'carpooling.marwadi1@gmail.com',
                      pass: 'marwadi7894',
                      authentication:       'plain'
                    }
                  });
                var mailOptions = { from: 'carpooling.marwadi1@gmail.com', 
                to: user.email, 
                subject: 'Account Verification Token',
                 text: 'Hello,\n\n' + 'Please verify your account by clicking the link: \nhttp:\/\/' + req.headers.host + '\/api/authuser/confirmationPost\/?token=' + token.token + '\n' };
                transporter.sendMail(mailOptions, function (err) {
                    if (err) {
                        console.log(error);
                         return res.status(500).send({ msdvgg: err.message }); }
                    res.status(200).send('A verification email has been sent to ' + user.email + '.');
                });
            });
        });
    }
    // Make sure user doesn't already exist
   else if (user.isVerified==true) 
    {return res.status(400).send({ msdag: 'The email address you have entered is already associated with another account.'+user.name });
}
else if (user.isVerified==false) {
 
    Token.findOne({ email: req.body.email }, function (err, abc) {

var tokenid =abc.token;
var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      address:              'smtp.gmail.com',
      port:                 587,
      domain:               'gmail.com',
  
      user: 'carpooling.marwadi1@gmail.com',
      pass: 'marwadi7894',
      authentication:       'plain'
    }
  });
var mailOptions = { from: 'carpooling.marwadi1@gmail.com', 
to: req.body.email, 
subject: 'Account Verification Token',
 text: 'Hello,\n\n' + 'Please verify your account by clicking the link: \nhttp:\/\/' + req.headers.host + '\/api/authuser/confirmationPost\/?token=' + tokenid + '\n' };
 transporter.sendMail(mailOptions, function (err) {
    if (err) { return res.status(500).send({ mvsg: err.message }); }
    res.status(200).send('A verification email again has been sent to ' + req.body.email + '.');
});
    });
    
} 
  });
};


/**
* POST /confirmation
*/
const confirmationPost = function (req, res, next) {
    var tokeni = req.param('token');

    // Find a matching token
    Token.findOne({ token: tokeni }, function (err, token) {
        if (!token) return res.status(400).send({ type: 'not-verified', msg: 'We were unable to find a valid token. Your token my have expired.' });

        // If we found a token, find a matching user
        AuthUser.findOne({ _id: token._userId, email: token.email }, function (err, user) {
            if (!user) return res.status(400).send({ msg: 'We were unable to find a user for this token.' });
            if (user.isVerified) return res.status(400).send({ type: 'already-verified', msg: 'This user has already been verified.' });

            // Verify and save the user
            user.isVerified = true;
            user.save(function (err) {
                if (err) { return res.status(500).send({ msg: err.message }); }
                res.status(200).send("The account has been verified. Please log in.");
            });
        });
    });
};
module.exports={index,loginPost,signupPost,confirmationPost}      
