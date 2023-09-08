import SignInComponent from '@app/components/auth/signin';
import * as React from 'react';

interface ISignUpProps {}

const SignIn: React.FunctionComponent<ISignUpProps> = (props) => {
  return <SignInComponent />;
};

export default SignIn;
