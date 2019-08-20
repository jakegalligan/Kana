const express = require('express')
const http = require('http');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');

var db = mongoose.connect('mongodb://localhost:27017/bardb', { useNewUrlParser: true });


//instantiate an express server with middleware
const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}))

const menuRoutes = require('./routes/menu');
const adminRoutes = require('./routes/admin');

//when a request is made to /customer route to customerRoutes
app.use('/menu', menuRoutes)
//when a request is made to /adminRoutes route to adminRoutes
app.use('/admin', adminRoutes)

//server setup
const port = 8000;
const server = http.createServer(app);
server.listen(port);
console.log('Server listening on:', port);

