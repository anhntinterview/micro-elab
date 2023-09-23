import * as React from 'react';
import { FormLayoutProvider } from '../core/layout/layout.provider';
import SignInForm from '@app/app/components/auth/signin';

interface ISignInProps {}

const SignIn: React.FunctionComponent<ISignInProps> = (props) => {
  return (
    <FormLayoutProvider
      bgConfig={`url('/bg1.jpeg') no-repeat center center / cover fixed`}
    >
      <SignInForm />
    </FormLayoutProvider>
  );
};

export default SignIn;
