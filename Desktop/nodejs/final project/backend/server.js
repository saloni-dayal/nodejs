const express = require('express')
const app = express()
app.use(express.json())
const cors=require('cors')
app.use(cors())

app.get('/contact', function (req, res) {
  const fs=require("fs")
  const data=JSON.parse(fs.readFileSync("queries.json","utf-8"))
  console.log(data)
  res.send(JSON.stringify(data))
})
app.post('/queries', function (req, res) {
  var data1=req.body
  console.log(data1)
  // obj1=JSON.parse(data1)
  const fs=require("fs")
  const data=JSON.parse(fs.readFileSync("queries.json","utf-8"))
  data.push(data1)
  fs.writeFileSync("queries.json",JSON.stringify(data),"utf-8")

  // res.send('Hello World api')
})
app.listen(8080)