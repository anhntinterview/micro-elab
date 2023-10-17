import Container, { Service } from 'typedi';
import CRUDService from '@app/app/core/service/crud/crud.service';
import { DTO } from '../entity';
import { GlobalAuthenticatePropsType } from '../context/type';
import { LoginBodyDataValidation } from '../entity/auth.entity';
import { CustomerBodyDataValidation } from '../entity/customer.entity';

export const exportGlobalAuthContextProps = (
  crudService: CRUDService
): GlobalAuthenticatePropsType<LoginBodyDataValidation, CustomerBodyDataValidation> => {
  console.log(`runing in exportGlobalAuthContextProps`);
  // GET
  const loginApiPath = '/auth/login';
  const loginQueryKey = ['login'];
  const login = ({ enable }: { enable: boolean }) => crudService.post<LoginBodyDataValidation>(
    loginApiPath,
    loginQueryKey,
    enable
  );

  // POST
  const registerApiPath = '/customer/c';
  const registerQueryKey = ['register'];
  const register = ({ enable }: { enable: boolean }) =>crudService.post<CustomerBodyDataValidation>(
    registerApiPath,
    registerQueryKey,
    enable
  );

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
