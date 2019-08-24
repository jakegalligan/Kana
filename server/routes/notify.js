const router = require('express').Router();
const keys = require('../config/key');


const client = require('twilio')(keys.ACCOUNT_SID, keys.AUTH_TOKEN);


  //send notification to the user when their order is completed
  router.post('/', (req,res) => {
      let phoneNumber = req.body.phoneNumber
      let customerName = req.body.customerName
      
      //if the number is only nine digits add a 1 at the begining
      if (phoneNumber.length <= 10) {
          if (phoneNumber.length == 10) {
              phoneNumber = '1'+phoneNumber
          //if the number is less than nine digits return an error
          } else {
            res.status(400).send('Phone number must have at lease nine digits')
          }
      }
      console.log(phoneNumber)

    //send text message to the user
    client.messages
    .create({
       body: `${customerName} Your order is ready! Remember to bring you driver's license and payment method when picking up your drink` ,
       from: '+19842144330',
       to: `+${phoneNumber}`
     })
    .then(message => console.log(message.sid));
    client.messages
    .create({
       body: `${customerName} Here is my linked in` ,
       from: '+19842144330',
       to: `+${phoneNumber}`
     })
    .then(message => console.log(message.sid));

     res.end();
  })

  module.exports = router;
