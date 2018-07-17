/**
 * Represents the start point of the server
 */
import Hapi from 'hapi';
import firebase from 'firebase';
import admin from 'firebase-admin';
import App from './src/App';
import firebaseConfig from './src/node-client/';
import serviceAccount from './serviceAccount.json';

const dotenv = require('dotenv');

const config = dotenv.config();

const server = new Hapi.Server({
  host: config.parsed.SERVER_HOST,
  port: config.parsed.SERVER_PORT,
});

const app = new App(server, firebase, admin);
app.run(firebaseConfig, serviceAccount);
