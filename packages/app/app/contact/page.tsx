import * as React from 'react';
import ContactForm from '@app/components/contact';
import { FormLayoutProvider } from '../core/layout/layout.provider';

interface IContactProps {}

const Contact: React.FunctionComponent<IContactProps> = (props) => {
  return (
    <FormLayoutProvider
      bgConfig={`url('/bg5.jpeg') no-repeat center center / cover fixed`}
    >
      <ContactForm />
    </FormLayoutProvider>
  );
};

export default Contact;
