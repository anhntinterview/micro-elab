import * as React from 'react';

export interface ISignUpForm {}

const SignUpForm: React.FunctionComponent<ISignUpForm> = (props) => {
  return (
    <>
      <form action="">
        <h1 className="custom-title global-title">Create Account</h1>
        <input
          data-members-name=""
          type="text"
          placeholder="Your name"
          aria-label="Your name"
        />
        <input
          data-members-email=""
          type="email"
          placeholder="Your email address"
          aria-label="Your email address"
          required
        />
        <button className="global-button button-clone" type="submit">
          Continue
        </button>
        <button
          className="global-button"
          type="submit"
          style={{ display: 'none' }}
          disabled
        >
          Continue
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
          Already have an account?{' '}
          <a href="/signin/">Sign in</a>
        </small>
      </form>
      <div className="alert-success">
        <h2 className="custom-alert-title">Great!</h2>
        <p>
          Please check your inbox and click the link to confirm your signup.
        </p>
        <a href="" className="global-button">
          Back to homepage
        </a>
      </div>
    </>
  );
};

export default SignUpForm;
