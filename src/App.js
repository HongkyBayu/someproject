export default class App {
  constructor(server) {
    this.server = server;
  }

  run() {
    this.server.start();
  }
}
