import Client from "./client";

export default class BaseResource {
  public client: Client;

  constructor(client: Client) {
    this.client = client;
  }
}
