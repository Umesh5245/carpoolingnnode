const express = require('express')
const OtpUser = require('../models/OtpUser')
var otpGenerator = require('otp-generator')
var crypto = require('crypto');
var nodemailer = require('nodemailer');
const index=(req,res,next)=>{
    OtpUser.find().then(response=>{
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
const otpPost = function(req, res, next) {

    // Make sure this account doesn't already exist
    OtpUser.findOne({ email: req.param('email') }, function (err, user) {
      if (!user){
      
          // Create and save the user
      // Create and save the user
     ot1=otpGenerator.generate(4, {alphabets: false, upperCase: false, specialChars: false})
          // Create a verification token for this user
          var user1 = new OtpUser({ email:req.param('email'), otp:ot1   });
   
          // Save the verification token
          user1.save(function (err) {
              if (err) { return res.status(500).send({ msag: err.message }); }
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
            to: req.param('email'), 
            subject: 'Account Verification OTP',
             text: 'Hello,\n\n' + 'Please verify your account by this OTP    ' +user1.otp };
            transporter.sendMail(mailOptions, function (err) {
                if (err) { return res.status(500).send({ msdvgg: err.message }); }
                res.json({
                    otp:`${user1.otp}`
            })
            });
              // Send the email
          });
      }
      // Make sure user doesn't already exist
     else {
var      ot1=otpGenerator.generate(4, {alphabets: false, upperCase: false, specialChars: false})

console.log(ot1)
 
        OtpUser.update({email:req.param('email')}, {otp: ot1}) .then(response =>{
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
            to: req.param('email'), 
            subject: 'Account Verification OTP',
             text: 'Hello,\n\n' + 'Please verify your account by this OTP    ' +ot1 };
            transporter.sendMail(mailOptions, function (err) {
                if (err) { return res.status(500).send({ msdvgg: err.message }); }
                res.json({
                    otp:`${ot1}`
            })            });

        })
        .catch(error=>{
            res.json({
                message:`am error occuiredXV`
            })
            
        })
    

     } 
  
    });
  };
  
  const otpconfirm=(req,res,next)=>{
    OtpUser.findOne({ email: req.param('email') ,otp:req.param('otpp')}, function (err, user) {
        console.log(req.param('email') +"        "+req.param('otpp'))
      if (user){
        res.json("verified")
      }
      else{
          res.json("wrong")
      }
    })
    .catch(error=>{
        res.json({
            message:'an eror occored'
        })
    })
}


  module.exports={index,otpPost,otpconfirm}      
