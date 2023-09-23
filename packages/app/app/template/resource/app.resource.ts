import Client, { Config } from '@app/app/core/stale/api/client';
import KeyManager from '@app/app/core/stale/api/keyManager';

class AppResouce {
  public client: Client;

  constructor(config: Config) {
    this.client = new Client(config);
  }

  /**
   * Set a PublishableApiKey that will be sent with each request
   * to define the scope of available resources.
   *
   * @param key - PublishableApiKey identifier
   */
  setPublishableKey(key: string) {
    KeyManager.registerPublishableApiKey(key);
  }
}

export default AppResouce;
