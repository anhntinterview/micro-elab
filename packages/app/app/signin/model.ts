import Container from 'typedi';
import CRUDService from '../core/service/crud/crud.service';
import { LoginBodyDataValidation } from '../template/entity/auth.entity';
import { CustomerBodyDataValidation } from '../template/entity/customer.entity';
import SessionService, {
  SessionDataType,
} from '../core/service/session/session.service';
import { UseMutationResult } from '@tanstack/react-query';

class SignInModel {
  private crudService = Container.get(CRUDService);
  private sessionService = Container.get(SessionService);

  login = ({ enable }: { enable: boolean }) =>
    this.crudService.post<LoginBodyDataValidation, SessionDataType>({
      endpoint: '/auth/login',
      queryKey: ['login'],
      enable,
    });

  register = ({ enable }: { enable: boolean }) =>
    this.crudService.post<CustomerBodyDataValidation, unknown>({
      endpoint: '/customer/c',
      queryKey: ['register'],
      enable,
    });

  authenticate(
    bodyData: LoginBodyDataValidation,
    mutationResult:
      | UseMutationResult<
          SessionDataType,
          unknown,
          LoginBodyDataValidation,
          unknown
        >
      | undefined
  ) {
    console.log(`inside authenticate`);
    mutationResult?.mutate(bodyData);

    if (mutationResult!.data) {
      console.log(`@@ xxx`);
      const data = mutationResult!.data;
      console.log(`@@ data:`);
      this.sessionService.createStoreObject();
      this.sessionService.saveSigninSession(data);
    } else {
      console.log(`response session was not found`);
    }
  }

  constructor() {}
}

export default SignInModel;
