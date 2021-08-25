const db = require('./connection');
const { User,Admin, Time } = require('../models');
const { ObjectId } = require('mongodb');
const bcrypt = require('bcrypt');

db.once('open', async () => {
const userSeed = [
    {
        username: 'Test',
        password: await bcrypt.hash('123456', 10),
        email:'test@test.com',
        clockIn: '10.30',
        clockOut: '11.30',
        hoursWork: 10,
        role: 'employee',
        rto: [],
    },
    {
      username: 'Test2',
      password: await bcrypt.hash('123456789', 10),
      email:'test2@test.com',
      clockIn: '10.30',
      clockOut: '11.30',
      hoursWork: 10,
      role: 'employee',
      rto: [],
  },
  ];
await User.deleteMany({})
    await User.insertMany(userSeed);

    const adminSeed = [
      {
        firstName: 'testAdmin1',
        lastName: 'tester',
        username:'testAdmin1',
        password: await bcrypt.hash('admin12345', 10),
        email:'testAdmin1@testAdmin1.com',
        clockIn: '10.30',
        clockOut: '11.30',
        hoursWork: 10,
        role: 'manager',
        rto: 1,
          
      },
    ];
  await Admin.deleteMany({})
      await Admin.insertMany(adminSeed)
      
  process.exit();

})
