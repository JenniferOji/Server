//first server 
//including the express library
const express = require('express');
//anytime you want to use extress you use app
const app = express();
//domain
const port = 3000;

//listening for errors
//USE HAS TO BE AT THE TOP OR ELSE THE PROGRAM WONT WORK 
app.use((err, req, res, next) => {
    console.error(err.stack);
    //error on the server status 500 is the message to debug it  
    res.status(500).send('Something went wrong!');
});

//for the post to parse the body of the message 
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));

//listening for request to come in a get method in a url 
//when theres a get url it executes the arrow function 
//        request and response
app.get('/', (req, res) => {
    res.send('Welcome to Data Representation & Querying');
});

//a parameter as part of our url
app.get('/hello/:name/:sname', (req, res) => {
    const name = req.params.name;
    const sname = req.params.sname
    res.send(`Hello ${name} ${sname}`);
});

app.get('/api/movies', (req, res) => {
    const movies = [
        {
            "Title": "Avengers: Infinity War",
            "Year": "2018",
            "imdbID": "tt4154756",
            "Type": "movie",
            "Poster": "https://example.com/poster1.jpg"
        },
        {
            "Title": "Captain America: Civil War",
            "Year": "2016",
            "imdbID": "tt3498820",
            "Type": "movie",
            "Poster": "https://example.com/poster2.jpg"
        },
        {
            "Title": "World War Z",
            "Year": "2013",
            "imdbID": "tt0816711",
            "Type": "movie",
            "Poster": "https://example.com/poster3.jpg"
        }
    ];
    res.json({ movies });
});

//getting the path of the index file 
const path = require('path');
app.get('/index', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

//handling the get request for name 
app.get('/name', (req, res) => {
    const firstname = req.query.firstname;
    const lastname = req.query.lastname;
    res.send(`Hello ${firstname} ${lastname}`);
});

// listening for a post method coming in 
//much better way of sending sensitive data to the server 
app.post('/name', (req, res) => {
    const firstname = req.body.firstname;
    const lastname = req.body.lastname;
    res.send(`Hi ${firstname} ${lastname}`);
});
//listen to http request coming from the port 
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});

