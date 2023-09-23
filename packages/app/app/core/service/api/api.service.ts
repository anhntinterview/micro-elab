import BaseClientApiService, { API_METHOD } from './base.service';
import { isObjectEmpty } from '@app/app/core/util';

class ClientApiService<ResponseType> extends BaseClientApiService<ResponseType> {
  constructor() {
    super();
  }

  protected async get() {
    if (!isObjectEmpty(this.body)) {
      console.log(
        'Body is not empty! Please remove body and instead of param!!'
      );
    } else {
      this.options.method = API_METHOD.GET;
      const rs = await fetch(this.url(), this.options);
      return rs.json()
    }
  }

  protected async post() {
    if (isObjectEmpty(this.body)) {
      console.log('Body is empty');
    } else {
      this.options.method = API_METHOD.POST;
      const rs = await fetch(this.url(), this.options);
      return rs.json()
    }
  }

  protected async put() {
    if (isObjectEmpty(this.body)) {
      console.log('Body is empty');
    } else {
      this.options.method = API_METHOD.PUT;
      const rs = await fetch(this.url(), this.options);
      return rs.json()
    }
  }

  protected async patch() {
    if (isObjectEmpty(this.body)) {
      console.log('Body is empty');
    } else {
      this.options.method = API_METHOD.PATCH;
      const rs = await fetch(this.url(), this.options);
      return rs.json()
    }
  }

  protected async delete() {
    if (!isObjectEmpty(this.body)) {
      console.log(
        'Body is not empty! Please remove body and instead of param!!'
      );
    } else {
      this.options.method = API_METHOD.DELETE;
      const rs = await fetch(this.url(), this.options);
      return rs.json()
    }
  }
}

export default ClientApiService;
