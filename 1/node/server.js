const express = require('express')
const  mongoose = require('mongoose')
const morgan =require('morgan')
const bodyParser =require('body-parser')
const  EmployeeRoute= require('./routes/employee')
mongoose.connect('mongodb+srv://admin:admin@cluster0.mbqk4.mongodb.net/emp?retryWrites=true&w=majority', {useNewUrlParser:true , useUnifiedTopology:true})

const db=mongoose.connection

db.on('error',(err)=>{
    console.log(err)
})

db.once('open',()=>{

console.log('database connection')
})

const app=express()

app.use(morgan('dev'))

app.use(bodyParser.urlencoded({extended:true}))
app.use(bodyParser.json())

const PORT =process.env.PORT || 3000
app.listen(PORT,()=>{
    console.log(`server is running on port ${PORT}`)
})


app.use('/api/employee',EmployeeRoute)