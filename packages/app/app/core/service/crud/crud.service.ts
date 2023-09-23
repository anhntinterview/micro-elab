import {
  useQuery,
  useMutation,
  QueryClient,
  UseQueryResult,
} from 'react-query';
import ClientApiService from '../api/api.service';
import { areValuesValid } from '../../util';
import { revalidateTime } from '@app/app/template/envVars';
import { Service } from 'typedi';

@Service()
class CRUDService<ResponseType> extends ClientApiService<ResponseType> {

  all(queryKey: Array<string | Record<string, unknown>>) {
    const query = useQuery<ResponseType>({
      queryKey: queryKey,
      queryFn: () => this.get(),
      cacheTime: revalidateTime,
      staleTime: 0,
    });
    return query;
  }

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

  add(
    queryKey: Array<string | Record<string, unknown>>,
    setCurrentPage: (page: React.ReactNode) => unknown,
    newPage: React.ReactNode
  ) {
    const queryClient = new QueryClient();
    const mutation = useMutation({
      mutationFn: async () => await this.post(),
      onSuccess: (data) => {
        queryClient.setQueryData(queryKey, data);
        queryClient.invalidateQueries(queryKey, { exact: true });
        setCurrentPage(newPage);
      },
    });

    return mutation;
  }

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
