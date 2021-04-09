const Chat =require('../models/Email')
const url = require('url');
const http = require('http');

const index=(req,res,next)=>{
console.log("ds")

var nodemailer = require('nodemailer');

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

var mailOptions = {
  from: 'carpooling.marwadi1@gmail.com',
  to: 'umeshagarwal8451@gmail.com',
  subject: 'Sending Email using Node.js',
  text: 'That was easy!'
};
var abc="hello"

transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
    res.json(abc)
  }
});
}

const send=(req,res,next)=>{
  console.log("ds")
  
  var nodemailer = require('nodemailer');

  const queryObject = url.parse(req.url,true).query;
  console.log(queryObject);  
  var geo = req.param('tem');
  res.json(geo+'sdsdhello');

  var transporter = nodemailer.createTransport({

    service: 'gmail',
    auth: {
      address:'smtp.gmail.com',
      port:587,
      domain:'gmail.com',
  
      user: 'carpooling.marwadi1@gmail.com',
      pass: 'marwadi7894',
      authentication:'plain'
    }
  });
  
  var mailOptions = {
    from: 'carpooling.marwadi1@gmail.com',
    to: req.body.to,
    subject: req.body.subject,
    text: req.body.text
  };

  transporter.sendMail(mailOptions, function(error, info){
    if (error) {
      console.log(error);
      res.json({message:error});
      res.json({message:to});

    } else {
      console.log('Email sent: ' + info.response);
      res.json({message:"email sent"})

    }
  });
  }
module.exports={index,send}      
