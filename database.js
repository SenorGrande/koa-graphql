const mongoose = require('mongoose');

const initDB = () => {

  mongoose.connect(
    'mongodb://192.168.1.99:27017/koa-graphql',
    { useNewUrlParser: true }
  );

  mongoose.connection.once('open', () => {
    console.log('connected to database');
  });

}

module.exports = initDB;
