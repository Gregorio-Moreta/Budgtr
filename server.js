//  Import the express library 
const express = require('express');
// Creating the application object
const app = express();
//  Import my budget data
const budget = require("./models/budget")

//////////////////
//  MIDDLEWARE
//////////////////

//  Serve files statically from the public folder
app.use(express.static("public"))

//////////////////
//  ROUTES
//////////////////

//  Index Route 
app.get('/budget', (req, res) => {
    res.render('index.ejs', budget)
})


app.listen(9000, () => {
    console.log('listening')
})