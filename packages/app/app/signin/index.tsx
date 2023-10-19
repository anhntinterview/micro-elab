import * as React from 'react';
import { FormLayoutProvider } from '../core/layout/layout.provider';
import SignInForm from '@app/app/components/auth/signin';
import SignInModel from './model';
import { UseMutationResult } from '@tanstack/react-query';
import { LoginBodyDataValidation } from '../template/entity/auth.entity';

interface ISignInProps {
  loginMutate:
    | UseMutationResult<any, unknown, LoginBodyDataValidation, unknown>
    | undefined;
}

const SignInFn: React.FunctionComponent<ISignInProps> = ({ loginMutate }) => {
  return (
    <FormLayoutProvider
      bgConfig={`url('/bg1.jpeg') no-repeat center center / cover fixed`}
    >
      <SignInForm loginMutate={loginMutate} />
    </FormLayoutProvider>
  );
};

export default SignInFn;
