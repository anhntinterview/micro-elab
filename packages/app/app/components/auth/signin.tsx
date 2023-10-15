import { useElementContext } from '@app/app/template/context/element.provider';
import { useRouter } from 'next/navigation';
import * as React from 'react';
import { useForm } from 'react-hook-form';

export interface ISignInForm {}

const SignInForm: React.FunctionComponent<ISignInForm> = (props) => {
  const {
    globalCustomerProps: { loginView, refetchCustomer },
  } = useElementContext();
  const [_, setCurrentView] = loginView;
  const [authError, setAuthError] = React.useState<string | undefined>(
    undefined
  );
  const router = useRouter();

  const handleError = (_e: Error) => {
    setAuthError('Invalid email or password');
  };

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<SignInCredentials>();

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
        Don’t have an account yet? <a href="/signup/">Sign up</a>
      </small>
    </form>
  );
};

export default SignInForm;
