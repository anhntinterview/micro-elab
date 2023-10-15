import { UseMutationResult, UseQueryResult } from '@tanstack/react-query';

export type GlobalElementtPropsType<R, B> = {
  query: UseQueryResult<R>;
  addRecord: UseMutationResult<any, unknown, B, unknown>;
};
