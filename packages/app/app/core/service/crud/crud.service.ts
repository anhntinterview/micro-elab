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
import { Service } from 'typedi';

export const isFetchedWithSuccess = <TData, TError = unknown>(
  query: UseQueryResult<TData, TError>
): query is QueryObserverSuccessResult<TData, TError> => {
  return !query.isError && !query.isLoading && query.data !== undefined;
};
@Service()
class CRUDService {
  private queryClient = new QueryClient();

  private static apiServiceInst: ApiService | null = null;

  public static getApiServiceInst(path: string) {
    if (!this.apiServiceInst) {
      this.apiServiceInst = new ApiService();
    }
    this.apiServiceInst.endpoint = path;
    return this.apiServiceInst;
  }

  all = <R>({
    endpoint,
    queryKey,
    enable
  }:{
    endpoint: string,
    queryKey: QueryKey,
    enable: boolean | false
  }) => {
    console.log(`@@ running in CRUD get method`);
    return useQuery<R>({
      queryKey,
      queryFn: () => CRUDService.getApiServiceInst(endpoint).get(),
      enabled: enable,
    });
  };

  post = <B>({
    endpoint,
    queryKey,
    enable
  }:{
    endpoint: string,
    queryKey: QueryKey,
    enable: boolean | false
  }) => {
    if(enable) {
      console.log(`@@ running in CRUD post method`);
      return useMutation<any, unknown, B, unknown>(CRUDService.getApiServiceInst(endpoint).post, {
        onSuccess: (data) => {
          this.queryClient.setQueryData(queryKey, data);
          this.queryClient.invalidateQueries(queryKey, { exact: true });
        }
      });
    } else {
      console.log('Missing enable to execute useMutation.');
    }
    
  };

  /*
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
