const express = require('express');
const http = require('http');
const cors = require('cors');

const port = 3001;

const app= express();

app.use(cors('*'));
app.use(express.json());


app.use(express.urlencoded({ extended: true }));

const ronell = require('./routes/ronell');


app.use('/ronell'  , ronell);


const server  =  http.createServer(app);

server.listen(port,()=>{
    console.log(`server is running on port:${port}`);

})