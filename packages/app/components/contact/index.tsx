import * as React from 'react';
import AsideLayout1 from '../layout/AsideLayout1';
import RightMainLayout1 from '../layout/RightMainLayout1';

interface IContactProps {}
export interface IContactForm {}

const ContactForm: React.FunctionComponent<IContactForm> = (props) => {
  return (
    <form>
      <h1 className="custom-title global-title">Contact us</h1>
      <input
        type="text"
        name="name"
        placeholder="Your name"
        aria-label="Your name"
        required
      />
      <input
        type="email"
        name="email"
        placeholder="Your email address"
        aria-label="Your email address"
        required
      />
      <label htmlFor="message">Your message</label>
      <textarea id="message" name="message" required></textarea>
      <button className="global-button" type="submit">
        Send message
      </button>
    </form>
  );
};

const ContactComponent: React.FunctionComponent<IContactProps> = (props) => {
  return (
    <>
      <AsideLayout1 urlImage={`url('/bg5.jpeg')`} />
      <RightMainLayout1 children={<ContactForm />} />
    </>
  );
};

export default ContactComponent;
