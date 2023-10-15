import {
  useQuery,
  useMutation,
  QueryClient,
  UseQueryResult,
  QueryKey,
  QueryClientProvider,
  QueryObserverSuccessResult,
} from '@tanstack/react-query';
import ApiService from '../api/api.service';
import { areValuesValid } from '../../util';
import { revalidateTime } from '@app/app/template/envVars';
import Container, { Service } from 'typedi';

export const isFetchedWithSuccess = <TData, TError = unknown>(
  query: UseQueryResult<TData, TError>
): query is QueryObserverSuccessResult<TData, TError> => {
  return !query.isError && !query.isLoading && query.data !== undefined;
};
@Service()
class CRUDService {
  
  private static apiServiceInst: ApiService | null = null;

  public static getApiServiceInst(path: string) {
    if (!this.apiServiceInst) {
      this.apiServiceInst = new ApiService();
    }
    this.apiServiceInst.endpoint = path;
    return this.apiServiceInst;
  }
  private queryClient = new QueryClient();

  all = <R>(
    endpoint: string,
    queryKey: Array<string | Record<string, unknown>>
  ) => {
    return useQuery<R>({
      queryKey,
      queryFn: () => CRUDService.getApiServiceInst(endpoint).get(),
    });
  };

  add = <B>(
    endpoint: string,
    queryKey: Array<string | Record<string, unknown>>
  ) => {
    return useMutation<any, unknown, B, unknown>(CRUDService.getApiServiceInst(endpoint).post, {
      onSuccess: (data) => {
        this.queryClient.setQueryData(queryKey, data);
        this.queryClient.invalidateQueries(queryKey, { exact: true });
      },
    });
  };

  /*
  private _queryKey: QueryKey = [''];

  public get queryKey(): QueryKey {
    return this._queryKey;
  }

  public set queryKey(v: QueryKey) {
    this._queryKey = v;
  }
  
  all = useQuery<ResponseType>({
    queryKey: this.queryKey,
    queryFn: this.get,
  });
  */

  
  // all<T>() {
  //   const query = useQuery<T>({
  //     queryKey: this.queryKey,
  //     queryFn: () => this.get(),
  //     cacheTime: revalidateTime,
  //     staleTime: 0, // data always stale and always re-fetch if server update value
  //   });
  //   return query;
  // };

  /*
  fetchOne(
    queryKey: Array<string | Record<string, unknown>>,
    constraintIds: Record<string, unknown>
  ) {
    const query = useQuery<ResponseType>({
      queryKey: queryKey,
      enabled: areValuesValid(constraintIds),
      queryFn: () => this.get(),
      cacheTime: 10 * 1000,
      staleTime: 0,
      onSuccess: (data: ResponseType) => data,
    });
    return query;
  }
  */
  /*
  add = useMutation<any, unknown, B, unknown>(this.post, {
    onSuccess: (data) => {
      this.queryClient.setQueryData(this.queryKey, data);
      this.queryClient.invalidateQueries(this.queryKey, { exact: true });
    },
  });
  */
  

  /*
  addMany(queryKey: Array<string | Record<string, unknown>>) {
    const queryClient = new QueryClient();
    const mutation = useMutation({
      mutationFn: async () => await this.post(),
      onSuccess: (data) => {
        queryClient.setQueryData(queryKey, data); // updadte value via query key
        queryClient.invalidateQueries(queryKey, { exact: true });
      },
    });
    return mutation;
  }

  update(queryKey: Array<string | Record<string, unknown>>) {
    const queryClient = new QueryClient();
    const mutation = useMutation({
      mutationFn: async () => await this.put(),
      onSuccess: (data) => {
        queryClient.setQueryData(queryKey, data);
        queryClient.invalidateQueries(queryKey, { exact: true });
      },
    });
    return mutation;
  }

  remove(queryKey: Array<string | Record<string, unknown>>) {
    const queryClient = new QueryClient();
    const mutation = useMutation({
      mutationFn: async () => await this.delete(),
      onSuccess: (data) => {
        queryClient.setQueryData(queryKey, data);
        queryClient.invalidateQueries(queryKey); // remove cache data related after delete
      },
    });
    return mutation;
  }
  */
  constructor() {}
}

export default CRUDService;
