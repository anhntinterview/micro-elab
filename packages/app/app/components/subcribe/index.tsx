import * as React from 'react';
import { heroStyle1 } from './inlineStyle';

interface ISubcribeProps {}

const Subcribe: React.FunctionComponent<ISubcribeProps> = (props) => {
  return (
    <div className="hero-content global-padding">
      <h1 className="hero-title hero-title-large">
        <span>My name is Robert</span>. I am a <span>Software Engineer</span>. Let's share the <span>tips, opportunities</span> and <span>grow</span> together!
      </h1>
      <div className="subscribe-section">
        <div className="subscribe-wrap">
          <form data-members-form="subscribe" className="subscribe-form">
            <input
              data-members-email=""
              type="email"
              placeholder="Your email address"
              aria-label="Your email address"
            />
            <button className="global-button button-clone" type="submit">
              Subscribe
            </button>
            <button
              className="global-button"
              type="submit"
              style={heroStyle1}
              disabled
            >
              Subscribe
            </button>
          </form>
          <div className="subscribe-form-caption">
            Get the email newsletter and unlock access to members-only content
            and updates
          </div>
          <div className="subscribe-alert">
            <small className="alert-loading global-alert">
              Processing your application
            </small>
            <small className="alert-success global-alert">
              Please check your inbox and click the link to confirm your
              subscription.
            </small>
            <small className="alert-error global-alert">
              There was an error sending the email
            </small>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Subcribe;
