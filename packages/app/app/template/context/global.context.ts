import CRUDService from '@app/app/core/service/crud/crud.service';
import { exportGlobalPostContextProps } from '../resource/post.resource';
import { exportGlobalCustomerContextProps } from '../resource/customer.resource';
import { exportGlobalAuthContextProps } from '../resource/auth.resource';
import { ElementContextType } from './type';

export const globalProps = (crudService: CRUDService): ElementContextType => {
  const globalPostProps = exportGlobalPostContextProps(crudService);
  const globalCustomerProps = exportGlobalCustomerContextProps(crudService);
  const globalAuthProps = exportGlobalAuthContextProps(crudService);

  return {
    globalPostProps,
    globalCustomerProps,
    globalAuthProps
  }
}




