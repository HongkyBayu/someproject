const dotenv = require('dotenv');

const config = dotenv.config();

const firebaseConfig = {
  apiKey: config.parsed.API_KEY,
  authDomain: config.parsed.AUTH_DOMAIN,
  databaseURL: config.parsed.DATABASE_URL,
  projectId: config.parsed.PROJECT_ID,
  storageBucket: config.parsed.STORAGE_BUCKET,
  messagingSenderId: config.parsed.MESSAGING_SENDER_ID,
};

module.exports = firebaseConfig;
