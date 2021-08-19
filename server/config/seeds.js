const db = require('./connection');
const { User,Admin, Time } = require('../models');

db.once('open', async () => {
const userSeed = [
    {
        username: 'test1',
        password:' test1',
        clockIn: '10.30',
        clockOut: '11.30',
        hoursWork: 10,
        role: 'manager',
        rto: 1,
    },
  ];
await User.deleteMany({})
    await User.insertMany(userSeed)

    const adminSeed = [
        {
            firstName: 'test',
            lastName: 'test1',
            email: 'test@test.com',
            password: 'password12345',
            workHours: [{clockIn: "10:00am", clockOut : "06:00pm"}]
            
        },
      ];
    await Admin.deleteMany({})
        await Admin.insertMany(adminSeed)

    process.exit();

    

})
