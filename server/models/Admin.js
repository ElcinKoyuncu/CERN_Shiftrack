const { Schema, model } = require('mongoose');
const bcrypt = require('bcrypt');
//const Time = require('./Time');

const adminSchema = new Schema({
  firstName: {
    type: String,
    required: true,
    trim: true
  },
  lastName: {
    type: String,
    required: true,
    trim: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true,
    minlength: 5
  },
  clockIn: {
    type: String,
    required: true
    
  },
  clockOut: {
      type: String,
      required: true
      
  },
  hoursWork: {
    type: String,
    required: true
  
  },
  rto: {
    type: String,
    required: true
  }
});

// set up pre-save middleware to create password
adminSchema.pre('save', async function(next) {
  if (this.isNew || this.isModified('password')) {
    const saltRounds = 10;
    this.password = await bcrypt.hash(this.password, saltRounds);
  }

  next();
});

// compare the incoming password with the hashed password
adminSchema.methods.isCorrectPassword = async function(password) {
  return await bcrypt.compare(password, this.password);
};

const Admin =model('Admin', adminSchema);

//Exporting User model
module.exports = Admin;