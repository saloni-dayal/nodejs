const express = require("express");
const app = express();
const fs = require("fs");
app.use(express.json());

app.get('/',(req,res)=>{
  res.send("Hello world")
})

const resultRoutes = require('./routes/results.js')

app.use('/result', resultRoutes)

const branchCodeRoutes = require('./routes/branchCodes')

app.use('/branchCodes', branchCodeRoutes)

const subjectCodeRoutes = require('./routes/subjectCodes')

app.use('/subjectCodes', subjectCodeRoutes)


app.listen(8080,() =>
{
    console.log("server listening at port 8080")
})