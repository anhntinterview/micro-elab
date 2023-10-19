import Container from 'typedi';
import CRUDService from '../core/service/crud/crud.service';
import { LoginBodyDataValidation } from '../template/entity/auth.entity';
import { CustomerBodyDataValidation } from '../template/entity/customer.entity';

class SignInModel {
  private crudService = Container.get(CRUDService);

  login = ({ enable }: { enable: boolean }) =>
    this.crudService.post<LoginBodyDataValidation>({
      endpoint: '/auth/login',
      queryKey: ['login'],
      enable,
    });

  register = ({ enable }: { enable: boolean }) =>
    this.crudService.post<CustomerBodyDataValidation>({
      endpoint: '/customer/c',
      queryKey: ['register'],
      enable,
    });

  constructor() {}
}

export default SignInModel;
