import Hapi from 'hapi';
import firebase from 'firebase';
import App from './src/App';
import firebaseConfig from './src/node-client/';

const dotenv = require('dotenv');

const config = dotenv.config();

const server = new Hapi.Server({
  host: config.parsed.SERVER_HOST,
  port: config.parsed.SERVER_PORT,
});

const app = new App(server, firebase);
app.run(firebaseConfig);
