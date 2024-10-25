//first server 
//including the express library
const express = require('express');
//anytime you want to use extress you use app
const app = express();
const port = 3000;

app.get('/', (req, res) => {
    res.send('Welcome to Data Respresentation & Querying');
});

//listen to http request coming from the port 
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});

