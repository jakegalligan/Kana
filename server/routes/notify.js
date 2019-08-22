const router = require('express').Router();
const accountSid = 'AC5e903f020fd3f2e86fbcd2c13ef52e64';
const authToken = '75b1bf2c8284e1a187275ffe69128724';
const client = require('twilio')(accountSid, authToken);


  //send notification to the user when their order is completed
  router.post('/', (req,res) => {
    client.messages
    .create({
       body: 'test',
       from: '+19842144330',
       to: `+${req.body.phoneNumber}`
     })
    .then(message => console.log(message.sid));
     res.end();
  })

  module.exports = router;
