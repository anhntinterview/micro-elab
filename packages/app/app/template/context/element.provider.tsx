'use client';

import CRUDService from '@app/app/core/service/crud/crud.service';
import { DTO } from '@app/app/template/entity';
import { createContext, useContext } from 'react';
import Container from 'typedi';
import {
  exportGlobalCustomerContextProps,
  exportGlobalPostContextProps,
} from './global.context';
import { GlobalElementtPropsType } from './type';
import {
  Post,
  PostBodyDataValidation,
} from '@app/app/template/entity/post.entity';
import {
  Customer,
  CustomerBodyDataValidation,
} from '../entity/customer.entity';

interface ElementProviderProps {
  children?: React.ReactNode;
}

export type ElementContextType = {
  globalPostProps: GlobalElementtPropsType<DTO<Post>, PostBodyDataValidation>;
  globalCustomerProps: GlobalElementtPropsType<
    DTO<Customer>,
    CustomerBodyDataValidation
  >;
};

const ElementContext = createContext<ElementContextType | null>(null);

export const ElementProvider = ({ children }: ElementProviderProps) => {
  const crudService = Container.get(CRUDService);
  const globalPostProps = exportGlobalPostContextProps(crudService);
  const globalCustomerProps = exportGlobalCustomerContextProps(crudService);

  return (
    <ElementContext.Provider
      value={{
        globalPostProps,
        globalCustomerProps,
      }}
    >
      {children}
    </ElementContext.Provider>
  );
};

export const useElementContext = () => {
  const context = useContext(ElementContext);

  if (context === null) {
    throw new Error('usePostContext must be used within a PostProvider');
  }
  return context;
};
