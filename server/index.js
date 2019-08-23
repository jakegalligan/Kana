const express = require('express')
const http = require('http');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');
const socket = require('socket.io')

var db = mongoose.connect('mongodb://localhost:27017/bardb', { useNewUrlParser: true });


//instantiate an express server with middleware
const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}))

const menuRoutes = require('./routes/menu');
const orderRoutes = require('./routes/order');
const notifyRoutes = require('./routes/notify')

//when a request is made to /customer route to customerRoutes
app.use('/menu', menuRoutes)
//when a request is made to /adminRoutes route to adminRoutes
app.use('/order', orderRoutes)
//when a request is made to /notfiyRoutes route to notifyRoutes
app.use('/notify', notifyRoutes)

if (process.env.NODE_ENV === 'production') {
    // Express will serve up production assets
    // like our main.js file, or main.css file!
    app.use(express.static('client/build'));
  
    // Express will serve up the index.html file
    // if it doesn't recognize the route
    const path = require('path');
    app.get('*', (req, res) => {
      res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
    });
}


//server setup
const port = process.env.PORT || 8000;
const server = http.createServer(app);
server.listen(port);
console.log('Server listening on:', port);
const io = socket(server);

// io.on('connection', (socket) => {
//     console.log('connection made')
//     socket.on('order', (data) => {
//         io.sockets.emit('new order', data)
//     })
// })


