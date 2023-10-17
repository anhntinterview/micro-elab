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
  const getCustomerApiPath = '/customer';
  const getCustomerQueryKey = ['customers'];
  const query = ({ enable }: { enable: boolean }) => crudService.all<DTO<Customer>>(
    getCustomerApiPath,
    getCustomerQueryKey,
    enable
  );

  // POST
  const postCustomerApiPath = '/customer/c';
  const addCustomerQueryKey = ['add_customer'];
  const addRecord = ({ enable }: { enable: boolean }) => crudService.post<CustomerBodyDataValidation>(
    postCustomerApiPath,
    addCustomerQueryKey,
    enable
  );

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
