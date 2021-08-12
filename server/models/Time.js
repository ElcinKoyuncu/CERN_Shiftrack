const mongoose = require('mongoose');

const { Schema } = mongoose;

const timeSchema = new Schema({
    timeIn: {
      type: String,
      required: true,
      trim: true
    },
    timeOut: {
        type: String,
        required: true,
        trim: true
    }

  });
  
  const Time = mongoose.model('Time', timeSchema);
  
  module.exports = Time;