'use client';

import { createContext, useContext } from 'react';
import { ElementContextType } from './type';
import { globalProps } from './global.context';
import Container from 'typedi';
import CRUDService from '@app/app/core/service/crud/crud.service';

interface ElementProviderProps {
  children?: React.ReactNode;
}

const ElementContext = createContext<ElementContextType | null>(null);

export const ElementProvider = ({ children }: ElementProviderProps) => {
  const crudService = Container.get(CRUDService);
  return (
    <ElementContext.Provider
      value={globalProps(crudService)}
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
