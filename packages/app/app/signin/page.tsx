'use client';
// import * as React from 'react';
// import SignInModel from './model';
// import { BaseComponent } from '../template/component/base.component';
// import SignInFn from '.';

// interface ISignInProps {
//   model: SignInModel;
// }

// class SignInPage extends BaseComponent({
//   model: new SignInModel(),
// })<ISignInProps> {
//   baseElement = () => {
//     const loginMutate = this.props.model.login({enable: true})
//     return <SignInFn loginMutate={loginMutate} />;
//   }
// }

// export default SignInPage;

// --- FUNCTION COMPONENT

import * as React from 'react';
import { FormLayoutProvider } from '../core/layout/layout.provider';
import SignInForm from '@app/app/components/auth/signin';
import { useElementContext } from '../template/context/element.provider';

interface ISignInProps {}

const SignIn: React.FunctionComponent<ISignInProps> = (props) => {
  const {
    globalAuthProps: { login },
  } = useElementContext();
  const loginMutate = login({enable: true})
  return (
    <FormLayoutProvider
      bgConfig={`url('/bg1.jpeg') no-repeat center center / cover fixed`}
    >
      <SignInForm loginMutate={loginMutate}/>
    </FormLayoutProvider>
  );
};

export default SignIn;
