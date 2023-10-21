import Container, { Service } from 'typedi';
import CRUDService from '@app/app/core/service/crud/crud.service';
import { DTO } from '../entity';
import {
  Customer,
  CustomerBodyDataValidation,
} from '../entity/customer.entity';
import { GlobalElementPropsType } from '../context/type';

export const exportGlobalCustomerContextProps = (
  crudService: CRUDService
): GlobalElementPropsType<DTO<Customer>, CustomerBodyDataValidation> => {
  // GET
  const query = ({ enable }: { enable: boolean }) => crudService.all<DTO<Customer>>({
    endpoint: '/customer',
    queryKey: ['customers'],
    enable,
  });

  // POST
  const addRecord = ({ enable }: { enable: boolean }) => crudService.post<CustomerBodyDataValidation, unknown>({
    endpoint: '/customer/c',
    queryKey: ['add_customer'],
    enable,
  });

  return {
    query,
    addRecord,
  };
};

// @Service()
// class CustomerResource {
//   private crudService = Container.get(CRUDService);

//   query = this.crudService.all<DTO<Customer>>('/customer', ['customers']);

//   addRecord = this.crudService.post<CustomerBodyDataValidation>('/customer/c', [
//     'add_customer',
//   ]);

//   export = (): GlobalElementPropsType<DTO<Customer>, CustomerBodyDataValidation> => ({
//     query: this.query,
//     addRecord: this.addRecord
//   });
// }

// export default CustomerResource;
