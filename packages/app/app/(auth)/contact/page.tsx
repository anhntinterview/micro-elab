import ContactComponent from '@app/components/contact';
import * as React from 'react';

interface IContactProps {}

const Contact: React.FunctionComponent<IContactProps> = (props) => {
  return <ContactComponent />;
};

export default Contact;
