import { Service } from 'typedi';
import BaseApiService, { API_METHOD } from './base.service';
import { isObjectEmpty } from '@app/app/core/util';

@Service()
class ApiService<ResponseType> extends BaseApiService<ResponseType> {
  constructor() {
    super();
  }

  public get = async () => {
    if (this.body !== undefined) {
      console.log(
        'Body is not empty! Please remove body and instead of param!!'
      );
    } else {
      this.options.method = API_METHOD.GET;
      const rs = await fetch(this.url(), this.options);
      return await rs.json();
    }
  };

  public post = async <B>(body: B) => {
    if (isObjectEmpty(body as Record<string, any>)) {
      console.log('Body is empty');
    } else {
      this.body = JSON.stringify(body);
      this.options.method = API_METHOD.POST;
      this.options.body = this.body;
      console.log(`------ header: `, this.headers);
      console.log(`------ options: `, this.options);
      console.log(`------ body: `, this.body);
      console.log(`------ url: `, this.url());
      const rs = await fetch(this.url(), this.options);
      return await rs.json();
    }
  };

  protected put = async <B>(body: B) => {
    if (isObjectEmpty(body as Record<string, any>)) {
      console.log('Body is empty');
    } else {
      this.body = JSON.stringify(body);
      this.options.method = API_METHOD.PUT;
      const rs = await fetch(this.url(), this.options);
      return rs.json();
    }
  }

  protected patch = async <B>(body: B) => {
    if (isObjectEmpty(body as Record<string, any>)) {
      console.log('Body is empty');
    } else {
      this.body = JSON.stringify(body);
      this.options.method = API_METHOD.PATCH;
      const rs = await fetch(this.url(), this.options);
      return rs.json();
    }
  }

  protected delete = async () => {
    if (!isObjectEmpty(this.body as Record<string, any>)) {
      console.log(
        'Body is not empty! Please remove body and instead of param!!'
      );
    } else {
      this.options.method = API_METHOD.DELETE;
      const rs = await fetch(this.url(), this.options);
      return rs.json();
    }
  }
}

export default ApiService;
