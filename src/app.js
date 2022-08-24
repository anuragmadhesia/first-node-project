const path = require("path")
const hbs = require('hbs')
const express = require('express')
const requests = require("requests")
const app = express()
const port = process.env.port || 3000

const staticPath = path.join(__dirname,"../public")
const templatePath = path.join(__dirname,"../templates/views")
const partialsPath = path.join(__dirname,"../templates/partials")

app.set('view engine','hbs')
app.set('views',templatePath)
hbs.registerPartials(partialsPath)
app.use(express.static(staticPath))

app.get('', function (req, res) {
  res.render('index',{
    name:'anurag'
  })
})
app.get('/about', function (req, res) {
  res.render('about',{
    name:req.query.name,
    age:req.query.age
  })
})
app.get('/weather', function (req, res) {
  res.render('weather')
  // if(req.query.city==undefined){
  //   city='Lucknow'
  // }else{
  //   city=req.query.city
  // }
  // requests( `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=aea398a311129990b729d992bccad43c`)
  // .on("data", (chunk) => {
  //     // console.log(chunk);
  //     const objdata = JSON.parse(chunk)
  //     const arrData = [objdata]
  //     console.log(arrData[0].main.temp)
  //     res.render('weather',{
  //       city:city,
  //       temp:(arrData[0].main.temp - 273.15).toFixed(2)
  //     })
  //     // const realTimeData = arrData
  //     //   .map((val) => replaceVal(homeFile, val))
  //     //   .join("");
  //     // res.write(realTimeData);
  //     // console.log(realTimeData);
  //   })
  //   .on("end", (err) => {
  //     if (err) return console.log("connection closed due to errors", err);
  //     // res.end();
  //   })
})
app.get('*', function (req, res) {
  res.render('error')
})
// app.get('/about', function (req, res) {
//   res.send('Hello World')
// })

app.listen(port,()=>{
  console.log(`server running at port no http://127.0.0.1:${port}/`)
})