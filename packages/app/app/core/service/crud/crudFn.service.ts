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
import Container from 'typedi';

const queryClient = new QueryClient();
const apiService = Container.get(ApiService);

export const all = (queryKey: Array<string | Record<string, unknown>>) =>
  useQuery({
    queryKey,
    queryFn: () => apiService.get(),
  });

export const add = (queryKey: Array<string | Record<string, unknown>>) =>
  useMutation(() => apiService.post(), {
    onSuccess: (data) => {
      queryClient.setQueryData(queryKey, data);
      queryClient.invalidateQueries(queryKey, { exact: true });
    },
  });
