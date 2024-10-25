//first server 
//including the express library
const express = require('express');
//anytime you want to use extress you use app
const app = express();
//domain
const port = 3000;

//listening for errors
app.use((err, req, res, next) => {
    console.error(err.stack);
    //error on the server status 500 is the message to debug it  
    res.status(500).send('Something went wrong!');
});

//listening for request to come in a get method in a url 
//when theres a get url it executes the arrow function 
//        request and response
app.get('/', (req, res) => {
    res.send('Welcome to Data  & Querying');
});

//a parameter as part of our url
app.get('/hello/:Jenny', (req, res) => {
    const name = req.params.name;
    const sname = req.params.sname
    res.send(`Hello ${name} ${sname}`);
});


//listen to http request coming from the port 
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});

