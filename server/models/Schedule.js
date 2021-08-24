const { Schema, model } = require('mongoose');


const scheduleSchema = new Schema({
  
  employee: {
    type: String,
    required: true,
  },
  location: {
    type: String,
    trim: true,
  },
  date: {
    type: Date,
    required: true,
  },
 
 
});



const RTO = model('Schedule', scheduleSchema);

//Exporting User model
module.exports = Schedule;