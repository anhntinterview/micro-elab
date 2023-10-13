'use client';

import ApiService from '@app/app/core/service/api/api.service';
import CRUDService from '@app/app/core/service/crud/crud.service';
import { DTO } from '@app/app/template/entity';
import {
  Post,
  PostBodyDataValidation,
} from '@app/app/template/entity/post.entity';
import {
  QueryClient,
  UseMutationResult,
  UseQueryResult,
  useMutation,
  useQuery,
} from '@tanstack/react-query';
import { createContext, useContext } from 'react';
import Container from 'typedi';

interface ElementProviderProps {
  children?: React.ReactNode;
}
export type ElementContextType = {
  // query: UseQueryResult<DTO<Post>, unknown>;
  // --
  isFetched: boolean;
  data: DTO<Post>;
  // --
  // addPost: UseMutationResult<any, unknown, void, unknown>,
  addPost: UseMutationResult<any, unknown, PostBodyDataValidation, unknown>;
  // crudService: CRUDService<DTO<Post>, PostBodyDataValidation>;
  // crudService: CRUDService<unknown, unknown>;
};

const ElementContext = createContext<ElementContextType | null>(null);

export const ElementProvider = ({ children }: ElementProviderProps) => {
  const queryClient = new QueryClient();
  // GET
  const getPostService = new ApiService();
  getPostService.endpoint = '/post'
  const getPostQueryKey = ['posts'];
  const { data, isFetched } = useQuery({
    queryKey: getPostQueryKey,
    queryFn: getPostService.get,
  });
  /*
  const getPostService = Container.get(
    CRUDService<DTO<Post>, PostBodyDataValidation>
  );
  const getPostQueryKey = ['posts'];
  getPostService.endpoint = '/post';
  const { data, isFetched } = getPostService.all(getPostQueryKey);
  */
  /*
  const getPostService = Container.get(CRUDService<DTO<Post>, PostBodyDataValidation>);
  const getPostQueryKey = ['posts'];
  getPostService.endpoint = '/post';
  getPostService.queryKey = getPostQueryKey
  const query = getPostService.all;
  */

  // POST
  /*
  const addPostService = Container.get(CRUDService<DTO<Post>, PostBodyDataValidation>);
  const addPostQueryKey = ['add_posts'];
  addPostService.endpoint = '/post/c';
  addPostService.queryKey = addPostQueryKey
  const addPost = addPostService.add;
   */
  const apiService = new ApiService();
  apiService.endpoint = '/post/c';
  const addPostQueryKey = ['add_posts'];
  const addPost = useMutation(apiService.post<PostBodyDataValidation>, {
    onSuccess: (data) => {
      queryClient.setQueryData(addPostQueryKey, data);
      queryClient.invalidateQueries(addPostQueryKey, { exact: true });
    },
  });

  // const addPostQueryKey = ['add_post'];
  // const postMutation = (body: PostBodyDataValidation) =>
  //   useMutation(
  //     () =>
  //       fetch('http://localhost:3000/api/post/c', {
  //         method: 'POST',
  //         body: JSON.stringify(body),
  //       }),
  //     {
  //       onSuccess: (data) => {
  //         queryClient.setQueryData(addPostQueryKey, data);
  //         queryClient.invalidateQueries(addPostQueryKey, { exact: true });
  //       },
  //     }
  //   );
  // const addPost = (body: PostBodyDataValidation) => {
  //   postMutation(body).mutate();
  // };
  // const addPost = (body: PostBodyDataValidation) => {
  //   console.log(`body: `,body);
  //   crudService.endpoint = '/post/c';
  //   crudService.body = JSON.stringify(body);
  //   const { mutate } = crudService.add(addPostQueryKey);
  // };

  return (
    <ElementContext.Provider
      value={{
        // query,
        // --
        isFetched,
        data,
        addPost,
        // crudService,
      }}
    >
      {children}
    </ElementContext.Provider>
  );
};

export const useElementContext = () => {
  const context = useContext(ElementContext);

  if (context === null) {
    throw new Error('usePostContext must be used within a PostProvider');
  }
  return context;
};

// class ResponseFn<T> {
//   dto: DTO<T> = { list: [], count: 0 };
//   queryKeys: Array<string | Record<string, unknown>>;

//   crudService = Container.get(CRUDService<DTO<T>>);

//   constructor(initialQueryKey: Array<string | Record<string, unknown>>) {
//     this.queryKeys = initialQueryKey;
//     this.crudService.endpoint = '/post'
//   }

//   getList() {
//     this.dto = this.crudService.all(this.queryKeys);
//     return this.dto.list;
//   }

//   getCount() {
//     return this.dto.count;
//   }
// }

// export default ResponseFn;
