//load node modules
const express = require('express');
const ejs = require('ejs');
const bodyParser = require('body-parser');
const path = require('path');


//initialise express
const app = express();

//use body parser
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//render static files
app.use(express.static('public'));
//set the view engine to EJS
app.set('view engine', 'ejs');
//set PORT environment
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`server is running at port ${PORT}.`);
});

//disable caching
app.set('view cache', false);

// ***GET ROUTES - display pages***
//root route
app.get('/', function(req,res){
    res.render('pages/index',{
        title:"Home"
    });
});
