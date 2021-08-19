const db = require('./connection');
const { User,Admin, Time } = require('../models');

const userSeed = [
    {
        userName: 'test1',
        password: 'test1',
        clockIn: '10.30',
        clockOut: '11.30',
        hoursWork: 10,
        role: 'manager',
        rto: 1,
    },
  ];
  
  db.User.deleteMany({})
    .then(() => db.User.collection.insertMany(shiftrackSeed))
    .then((data) => {
      console.log(data.result.n + ' user added!');
      process.exit(0);
    })
    .catch((err) => {
      console.error(err);
      process.exit(1);
    });
  