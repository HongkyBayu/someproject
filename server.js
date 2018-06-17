import Hapi from 'hapi';
import App from './src/App';

const dotenv = require('dotenv');

const config = dotenv.config();

const db = require('./src/db/database').db;

const server = new Hapi.Server({
  host: config.parsed.SERVER_HOST,
  port: config.parsed.SERVER_PORT,
});

const app = new App(server);
app.run();
