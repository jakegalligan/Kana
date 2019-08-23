const router = require('express').Router();
const accountSid = 'AC5e903f020fd3f2e86fbcd2c13ef52e64';
const authToken = '75b1bf2c8284e1a187275ffe69128724';
const client = require('twilio')(accountSid, authToken);


  //send notification to the user when their order is completed
  router.post('/', (req,res) => {
      let phoneNumber = req.body.phoneNumber
      
      //if the number is only nine digits add a 1 at the begining
      if (phoneNumber.length <= 10) {
          if (phoneNumber.length == 10) {
              phoneNumber = '1'+phoneNumber
          //if the number is less than nine digits return an error
          } else {
            res.status(400).send('Phone number must have at lease nine digits')
          }
      }

    //send text message to the user
    client.messages
    .create({
       body: 'test',
       from: '+19842144330',
       to: `+${phoneNumber}`
     })
    .then(message => console.log(message.sid));
     res.end();
  })

  module.exports = router;
