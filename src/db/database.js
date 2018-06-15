/**
 * Represents the connection to the database
 */

import Mongoose from 'mongoose';

const dotenv = require('dotenv');

const config = dotenv.config();

Mongoose.connect(config.parsed.MONGODB_URL);
const db = Mongoose.connection;
db.on('error', console.error.bind(console, 'connection error'));
db.once('open', () => {
  console.log('Connected to Database');
});
exports.db = db;
