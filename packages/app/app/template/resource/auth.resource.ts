import Container, { Service } from 'typedi';
import CRUDService from '@app/app/core/service/crud/crud.service';
import { DTO } from '../entity';
import { GlobalAuthenticatePropsType } from '../context/type';
import { LoginBodyDataValidation } from '../entity/auth.entity';
import { CustomerBodyDataValidation } from '../entity/customer.entity';

// TODO: OOP Post was duplicate params

export const exportGlobalAuthContextProps = (
  crudService: CRUDService
): GlobalAuthenticatePropsType<
  LoginBodyDataValidation,
  CustomerBodyDataValidation
> => {
  console.log(`runing in exportGlobalAuthContextProps`);
  // GET
  const login = ({ enable }: { enable: boolean }) =>
    crudService.post<LoginBodyDataValidation>({
      endpoint: '/auth/login',
      queryKey: ['login'],
      enable,
    });

  // POST
  const register = ({ enable }: { enable: boolean }) =>
    crudService.post<CustomerBodyDataValidation>({
      endpoint: '/customer/c',
      queryKey: ['register'],
      enable,
    });

  return {
    login,
    register,
  };
};

// @Service()
// class AuthResource {
//   private crudService = Container.get(CRUDService);

//   login = this.crudService.post<LoginBodyDataValidation>('/auth/login', [
//     'login',
//   ]);

//   register = this.crudService.post<CustomerBodyDataValidation>('/customer/c', [
//     'register',
//   ]);

//   export = (): GlobalAuthenticatePropsType<
//     LoginBodyDataValidation,
//     CustomerBodyDataValidation
//   > => ({
//     login: this.login,
//     register: this.register,
//   });
// }

// export default AuthResource;
