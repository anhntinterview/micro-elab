import {
  QueryKey,
  UseMutationResult,
  UseQueryResult,
} from '@tanstack/react-query';
import { LoginBodyDataValidation } from '../entity/auth.entity';
import {
  Customer,
  CustomerBodyDataValidation,
} from '../entity/customer.entity';
import { DTO } from '../entity';
import { Post, PostBodyDataValidation } from '../entity/post.entity';

export type CustomerContextType = {
  globalCustomerProps: GlobalElementPropsType<
    DTO<Customer>,
    CustomerBodyDataValidation
  >;
};

export type ElementContextType = {
  globalPostProps: GlobalElementPropsType<DTO<Post>, PostBodyDataValidation>;
  globalCustomerProps: GlobalElementPropsType<
    DTO<Customer>,
    CustomerBodyDataValidation
  >;
  globalAuthProps: GlobalAuthenticatePropsType<LoginBodyDataValidation, CustomerBodyDataValidation>
};

export type GlobalElementPropsType<R, B> = {
  query: ({
    enable,
  }: {
    enable: boolean;
  }) => UseQueryResult<R, unknown>;
  // query: UseQueryResult<R, unknown>;
  addRecord: ({
    enable,
  }: {
    enable: boolean;
  }) => UseMutationResult<any, unknown, B, unknown> | undefined;
  // addRecord: UseMutationResult<any, unknown, B, unknown>;
};

export type GlobalAuthenticatePropsType<L, R> = {
  login: ({
    enable,
  }: {
    enable: boolean;
  }) => UseMutationResult<any, unknown, L, unknown> | undefined;
  register: ({
    enable,
  }: {
    enable: boolean;
  }) => UseMutationResult<any, unknown, R, unknown> | undefined;
};
