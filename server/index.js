const express = require('express')
const http = require('http');
const mongoose = require('mongoose');
const cors = require('cors')


mongoose.connect('mongodb://localhost/bardb', { useNewUrlParser: true });

//instantiate an express server with middleware
const app = expresss();
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}))

const customerRoutes = require('./routes/customer');
const adminRoutes = require('./routes/admin');

//when a request is made to /customer route to customerRoutes
app.use('/customer', customerRoutes)
//when a request is made to /adminRoutes route to adminRoutes
app.use('/admin', adminRoutes)

//server setup
const port = 8000;
const server = http.createServer(app);
server.listen(port);
console.log('Server listening on:', port);


