import { Service } from 'typedi';

export type SessionDataType = {
  expiresIn: string;
  token: string;
};

@Service()
class SessionService {
  private _dbName!: string;
  private _dbVersion!: number;

  public get dbName(): string {
    return this._dbName;
  }

  public set dbName(v: string) {
    this._dbName = v;
  }

  public get dbVersion(): number {
    return this._dbVersion;
  }

  public set dbVersion(v: number) {
    this._dbVersion = v;
  }

  openRequest = indexedDB.open(this.dbName, this.dbVersion);

  createStoreObject() {
    this.openRequest.onupgradeneeded = (e) => {
      const target = e.target as IDBRequest;
      if (target) {
        const db = target.result;
        if (!db.objectStoreNames.contains('sessions')) {
          db.createObjectStore('sessions', { keyPath: 'token' });
        }
      } else {
        console.log(`result is not available!`);
      }
    };
  }

  saveSigninSession(sessionData: SessionDataType) {
    const db = this.openRequest.result;
    const transaction = db.transaction(['sessions'], 'readwrite');
    const sessionsStore = transaction.objectStore('sessions');

    sessionsStore.add(sessionData);

    transaction.oncomplete = () => {
      console.log('Token JWT saved IndexedDB.');
    };
  }

  verifyInfoSession(callback: () => unknown) {
    const db = this.openRequest.result;
    const transaction = db.transaction(['sessions'], 'readonly');
    const sessionsStore = transaction.objectStore('sessions');

    const request = sessionsStore.get('sessionData');

    request.onsuccess = (e) => {
      const target = e.target as IDBRequest;
      if (target) {
        const sessionData = target.result as SessionDataType;
        if (sessionData) {
          const { token, expiresIn } = sessionData;
          const expirationTime = new Date(expiresIn).getTime();

          if (expirationTime > Date.now()) {
            callback();
          } else {
            console.log(`Token was expired!`);
          }
        } else {
          console.log(`Token was not found`);
        }
      }
    };
  }

  removeSession() {
    const db = this.openRequest.result;
    const transaction = db.transaction(['sessions'], 'readwrite');
    const sessionsStore = transaction.objectStore('sessions');

    sessionsStore.delete('sessionData');
  }

  constructor() {
    this.dbName = 'authDatabase';
    this.dbVersion = 1;
  }
}

export default SessionService;
