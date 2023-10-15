import CRUDService from '@app/app/core/service/crud/crud.service';
import { Post, PostBodyDataValidation } from '../entity/post.entity';
import { DTO } from '../entity';
import {
  Customer,
  CustomerBodyDataValidation,
} from '../entity/customer.entity';
import { GlobalElementtPropsType } from './type';

export const exportGlobalPostContextProps = (
  crudService: CRUDService
): GlobalElementtPropsType<DTO<Post>, PostBodyDataValidation> => {
  // GET
  const getPostApiPath = '/post';
  const getPostQueryKey = ['posts'];
  const query = crudService.all<DTO<Post>>(getPostApiPath, getPostQueryKey);

  // POST
  const postPostApiPath = '/post/c';
  const addPostQueryKey = ['add_post'];
  const addRecord = crudService.add<PostBodyDataValidation>(
    postPostApiPath,
    addPostQueryKey
  );

  return {
    query,
    addRecord,
  };
};

export const exportGlobalCustomerContextProps = (
  crudService: CRUDService
): GlobalElementtPropsType<DTO<Customer>, CustomerBodyDataValidation> => {
  // GET
  const getCustomerApiPath = '/customer';
  const getCustomerQueryKey = ['customers'];
  const query = crudService.all<DTO<Customer>>(
    getCustomerApiPath,
    getCustomerQueryKey
  );

  // POST
  const postCustomerApiPath = '/customer/c';
  const addCustomerQueryKey = ['add_customer'];
  const addRecord = crudService.add<CustomerBodyDataValidation>(
    postCustomerApiPath,
    addCustomerQueryKey
  );

  return {
    query,
    addRecord,
  };
};
