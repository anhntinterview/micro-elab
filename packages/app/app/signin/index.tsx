import * as React from 'react';
import { FormLayoutProvider } from '../core/layout/layout.provider';
import SignInForm from '@app/app/components/auth/signin';
import SignInModel from './model';
import { UseMutationResult } from '@tanstack/react-query';
import { LoginBodyDataValidation } from '../template/entity/auth.entity';
import { SessionDataType } from '../core/service/session/session.service';

interface ISignInProps {
  loginMutate:
    | UseMutationResult<any, unknown, LoginBodyDataValidation, unknown>
    | undefined;
  authenticate(
    bodyData: LoginBodyDataValidation,
    mutationResult:
      | UseMutationResult<
          SessionDataType,
          unknown,
          LoginBodyDataValidation,
          unknown
        >
      | undefined
  ): void;
}

const SignInFn: React.FunctionComponent<ISignInProps> = ({
  loginMutate,
  authenticate,
}) => {
  return (
    <FormLayoutProvider
      bgConfig={`url('/bg1.jpeg') no-repeat center center / cover fixed`}
    >
      <SignInForm loginMutate={loginMutate} authenticate={authenticate} />
    </FormLayoutProvider>
  );
};

export default SignInFn;
