const mongoose = require('mongoose');

async function dbLive() {
  try {
    await mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/myDatabase', {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
      useFindAndModify: false,
    });
    console.log('Connected to database');
  } catch (error) {
    console.error('Error connecting to database:', error);
  }
}

module.exports = dbLive;
