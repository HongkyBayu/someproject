/**
 * Represents the initialize configuration of the application
 */
import HapiSwagger from 'hapi-swagger';
import Inert from 'inert';
import Vision from 'vision';
import userRoutes from './controllers/user';
import businessRoutes from './controllers/business';

export default class App {
  constructor(server, firebaseClient, firebaseAdmin) {
    this.server = server;
    this.firebaseClient = firebaseClient;
    this.firebaseAdmin = firebaseAdmin;
  }

  initializeFirebase(firebaseConfig) {
    this.firebaseClient.initializeApp(firebaseConfig);
  }

  initializeAdmin(serviceAccount) {
    this.firebaseAdmin.initializeApp({
      credential: this.firebaseAdmin.credential.cert(serviceAccount),
    });
  }

  loadControllers() {
    this.server.route(userRoutes);
    this.server.route(businessRoutes);
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

  async run(firebaseConfig, serviceAccount) {
    this.initializeFirebase(firebaseConfig);
    this.initializeAdmin(serviceAccount);
    await this.configure();
    this.server.start();
  }
}
