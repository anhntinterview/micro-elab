'use client';

import * as React from 'react';
import ClientCRUDService from '../service/crud/crud.service';

interface ICustomerButtonProps {}

export const CustomerButton: React.FunctionComponent<ICustomerButtonProps> = (
  props
) => {
  const clientCrudService = new ClientCRUDService();
  const handleAdd = () => clientCrudService.add(['customer']);
  return <button onClick={handleAdd}>ADD CUSTOMER</button>;
};

export default function ButtonProviders({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      {children}
    </>
  );
}
