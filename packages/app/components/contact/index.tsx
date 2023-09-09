import * as React from 'react';

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

export default ContactForm;
