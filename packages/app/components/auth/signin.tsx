import * as React from 'react';
import AsideLayout1 from '../layout/AsideLayout1';
import RightMainLayout1 from '../layout/RightMainLayout1';

interface ISignInProps {}
export interface ISignInForm {}

const SignInForm: React.FunctionComponent<ISignInForm> = (props) => {
  return (
    <form data-members-form="signin">
      <h1 className="custom-title global-title">Welcome back!</h1>
      <input
        data-members-email=""
        type="email"
        placeholder="Your email address"
        aria-label="Your email address"
        required
      />
      <button className="global-button button-clone" type="submit">
        Send login link
      </button>
      <button
        className="global-button"
        type="submit"
        style={{ display: 'none' }}
        disabled
      >
        Send login link
      </button>
      <div>
        <small className="alert-loading global-alert">
          Processing your application
        </small>
        <small className="alert-error global-alert">
          There was an error sending the email
        </small>
      </div>
      <small className="global-question">
        Don’t have an account yet?{' '}
        <a href="/signup/">Sign up</a>
      </small>
    </form>
  );
};

const SignInComponent: React.FunctionComponent<ISignInProps> = (props) => {
  return (
    <>
      <AsideLayout1
        urlImage={`url('/bg1.jpeg')`}
      />
      <RightMainLayout1 children={<SignInForm />} />
    </>
  );
};

export default SignInComponent;
