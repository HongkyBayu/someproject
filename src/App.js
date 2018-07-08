/**
 * Represents the initialize configuration of the application
 */
import HapiSwagger from 'hapi-swagger';
import Inert from 'inert';
import Vision from 'vision';
import userRoutes from './controllers/user';

export default class App {
  constructor(server, firebaseClient) {
    this.server = server;
    this.firebaseClient = firebaseClient;
  }

  initializeFirebase(firebaseConfig) {
    this.firebaseClient.initializeApp(firebaseConfig);
  }

  loadControllers() {
    this.server.route(userRoutes);
  }

  async configure() {
    await this.server.register(Inert);
    await this.server.register(Vision);
    await this.server.register({
      plugin: HapiSwagger,
      options: {
        info: {
          title: 'SangkutiApps API',
        },
      },
    });
    this.loadControllers();
  }

  async run(firebaseConfig) {
    this.initializeFirebase(firebaseConfig);
    await this.configure();
    this.server.start();
  }
}
