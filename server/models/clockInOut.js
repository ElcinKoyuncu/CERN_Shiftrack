const { Schema, model } = require('mongoose');


const rtoSchema = new Schema({
  
  from: {
    type: Date,
    required: true,
   
  },
  to: {
    type: Date,
    required: true,
    
  },
 
 
});



const Rto = model('Rto', rtoSchema);

//Exporting User model
module.exports = Rto;