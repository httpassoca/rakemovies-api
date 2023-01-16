import { createConnection } from 'typeorm';

class Database {
  public async register(): Promise<void> {
    try {
      await createConnection();
      console.log('Database connected successfully');
    } catch (err) {
      console.log('Database NOT connected successfully', err);
    }
  }
}

export default Database;
