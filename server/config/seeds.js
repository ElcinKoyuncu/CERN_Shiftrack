const db = require('./connection');
const { User,Admin, Time } = require('../models');

db.once('open', async () => {
const userSeed = [
    {
        username: 'test1',
        password: 'test123',
        email:'test1@test1.com',
        clockIn: '',
        clockOut: '',
        hoursWork: 10,
        role: 'manager',
        rto: [],
    },
  ];
await User.deleteMany({})
    await User.insertMany(userSeed);

    const adminSeed = [
      {
        firstName: 'testAdmin1 firstname',
        lastName: 'testAdmin1 lastname',
        username:'testAdmin1',
        password:'testAdmin1',
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
