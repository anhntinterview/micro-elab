import * as React from 'react';
import { FormLayoutProvider } from '../core/layout/layout.provider';
import SignUpForm from '@app/components/auth/signup';

interface ISignUpProps {}

const SignIn: React.FunctionComponent<ISignUpProps> = (props) => {
  return (
    <FormLayoutProvider
      bgConfig={`url('/bg5.jpeg') no-repeat center center / cover fixed`}
    >
      <SignUpForm />
    </FormLayoutProvider>
  );
};

export default SignIn;
