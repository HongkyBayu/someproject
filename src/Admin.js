import serviceAccount from '../serviceAccount.json';

export default class Admin {
  constructor(admin) {
    this._admin = admin;
  }

  initializeAdmin() {
    this._admin.initializeApp({
      credential: this._admin.credential.cert(serviceAccount),
    });
  }

  initializeDb() {
    this.initializeAdmin();
    return this._admin.firestore();
  }
}
