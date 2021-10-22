//  Import the express library 
const express = require('express');
// Creating the application object
const app = express();
//  Import my budget data
const budget = require("./models/budget")

//////////////////
//  MIDDLEWARE
//////////////////

// near the top, around other app.use() call
// extended property is a body parser
// Parse Request Bodies if Content-Type Header is: application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: false }));
//  Serve files statically from the public folder
app.use(express.static("public"));
//after app has been defined
//use methodOverride.  We'll be adding a query parameter to our delete form named _method
// app.use(methodOverride("_method"));


//////////////////
//  ROUTES
//////////////////

//  Index Route 
app.get('/budget', (req, res) => {
    res.render('index.ejs', {Budget: budget})
})
//  Show route
app.get('/budget/:indexOfBudget', (req, res) => {
    res.render('show.ejs', {Budget: budget[req.params.indexOfBudget], title: "show"})
})

app.listen(9000, () => {
    console.log('listening')
})