//  Import the express library 
const express = require('express');
// Creating the application object
const app = express();
//  Import my budget data
const budget = require("./models/budget")
// Import method override 
const methodOverride = require('method-override')

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
app.use(methodOverride("_method"));

// app.use((req, res, next) => {
//     console.log('I run for all routes');
//     next();
// });

//////////////////
//  ROUTES
//////////////////

//  Index Route 
app.get('/budget', (req, res) => {
    res.render('index.ejs', {Budget: budget})
})
//  New Route
app.get('/budget/new', (req, res) => {
    res.render('new.ejs', {Budget: budget, title: "new"});
});
//  Post route for the previously created New Route above
app.post('/budget', (req, res) => {
    console.log(req.body)
    budget.push(req.body)
    // console.log(budget)
    res.redirect('/budget')
    console.log(budget)
})
//  Show route
app.get('/budget/:indexOfBudget', (req, res) => {
    res.render('show.ejs', {Budget: budget[req.params.indexOfBudget], title: "show"})
})

app.listen(9000, () => {
    console.log('listening')
})