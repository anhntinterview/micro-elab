import ApiService from '@app/app/core/service/api/api.service';
import { CustomerBodyDataValidation } from '@app/app/template/entity/customer.entity';
import { ROLE_NAME } from '../entity/role.entity';
import { TAG_NAME } from '../entity/tag.entity';
import { validate } from 'class-validator';

class CustomerApiService<ResponseType> extends ApiService<ResponseType> {
  constructor() {
    super();
  }

  async all() {
    this.endpoint = '/customer';
    console.log(this.url());
    return await this.get();
  }

  async addOne() {
    /*
    const validateBodyData = new CustomerBodyDataValidation();
    this.body = { bodyData: "Hello" } as any;
    
    this.body = {
      bodyData: {
        username: 'lethito',
        first_name: 'Lê',
        last_name: 'Lợi',
        phone_number: '+84393547777',
        email: 'leloi@email.com',
        password: '221089abcdE%',
        active: false,
        addresses: [
          {
            address_line1: 'Lam Sơn',
            address_line2: '',
            city: 'Thanh Hóa',
            country: 'Đại Việt',
            phone_number: '000000001',
            postal_code: '00001',
          },
        ],
        roles: [
          {
            name: ROLE_NAME.ADMIN,
          },
        ],
        tags: [
          {
            name: TAG_NAME.CUSTOMER,
          },
        ],
      },
    } as any;
    // @ts-ignore
    for (const key in this.body) {
      if (this.body.hasOwnProperty(key)) {
        // @ts-ignore
        validateBodyData[key] = this.body[key];
      } else {
        console.log(`${key} key is not exist in bodyData`);
      }
    }
    const errors = await validate(validateBodyData);
    if (errors.length > 0) {
      errors.map((err) => {
        console.log(`validate error: `, err);
      });
    }
    */
    await this.post();
  }
}

export default CustomerApiService;
