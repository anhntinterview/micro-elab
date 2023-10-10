import {
  useQuery,
  useMutation,
  QueryClient,
  UseQueryResult,
  QueryKey,
} from '@tanstack/react-query';
import ApiService from '../api/api.service';
import { areValuesValid } from '../../util';
import { revalidateTime } from '@app/app/template/envVars';
import { Service } from 'typedi';

@Service()
class CRUDService<ResponseType> extends ApiService<ResponseType> {
  private queryClient = new QueryClient();
  queryKey!: QueryKey;

  all = useQuery<ResponseType>({
    queryKey: this.queryKey,
    queryFn: () => this.get(),
    cacheTime: revalidateTime,
    staleTime: 0,
  });

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

  add = useMutation(
    async () => {
      const data = await this.post();
      return data;
    },
    {
      onSuccess: (data) => {
        this.queryClient.setQueryData(this.queryKey, data);
        this.queryClient.invalidateQueries(this.queryKey, { exact: true });
      },
    }
  );

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

  constructor() {
    super();
  }
}

export default CRUDService;
