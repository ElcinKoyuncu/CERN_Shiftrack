const { Schema, model } = require('mongoose');


const clockInOutSchema = new Schema({
  
  clockIn: {
    type: Date,
    required: true,
   
  },
  clockOut: {
    type: Date,
    
    
  },
 
 
});



const clockInOut = model('Rto', clockInOutSchema);

//Exporting User model
module.exports = clockInOut;