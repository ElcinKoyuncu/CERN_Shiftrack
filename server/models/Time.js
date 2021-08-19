const mongoose = require('mongoose');

const { Schema } = mongoose;

const timeSchema = new Schema({
    clockIn: {
      type: String,
      required: true,
      trim: true
    },
    clockOut: {
        type: String,
        required: true,
        trim: true
    }

  });
  
  const Time = mongoose.model('Time', timeSchema);
  
  module.exports = Time;