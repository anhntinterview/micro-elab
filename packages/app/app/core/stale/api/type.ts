import { QueryKey, UseQueryOptions } from '@tanstack/react-query';

export type UseQueryOptionsWrapper<
  // Return type of queryFn
  TQueryFn = unknown,
  // Type thrown in case the queryFn rejects
  E = Error,
  // Query key type
  TQueryKey extends QueryKey = QueryKey
> = Omit<
  UseQueryOptions<TQueryFn, E, TQueryFn, TQueryKey>,
  'queryKey' | 'queryFn' | 'select' | 'refetchInterval'
>;

export interface HTTPResponse {
  status: number;
  statusText: string;
  headers: Record<string, string> & {
    'set-cookie'?: string[];
  };
  config: any;
  request?: any;
}

export type Response<T> = T & {
  response: HTTPResponse;
};

export type ResponsePromise<T = any> = Promise<Response<T>>;

export type TQueryKey<TKey, TListQuery = any, TDetailQuery = string> = {
  all: [TKey];
  lists: () => [...TQueryKey<TKey>['all'], 'list'];
  list: (
    query?: TListQuery
  ) => [
    ...ReturnType<TQueryKey<TKey>['lists']>,
    { query: TListQuery | undefined }
  ];
  details: () => [...TQueryKey<TKey>['all'], 'detail'];
  detail: (
    id: TDetailQuery
  ) => [...ReturnType<TQueryKey<TKey>['details']>, TDetailQuery];
};