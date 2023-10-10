'use client';

import CRUDService from '@app/app/core/service/crud/crud.service';
import { DTO } from '@app/app/template/entity';
import {
  Post,
  PostBodyDataValidation,
} from '@app/app/template/entity/post.entity';
import { createContext, useContext } from 'react';
import Container from 'typedi';

interface PostProviderProps {
  children?: React.ReactNode;
}
export type PostContextType = {
  list: Array<Post> | undefined;
  isFetched: boolean;
  addPost: (body: PostBodyDataValidation) => void;
};

const PostContext = createContext<PostContextType | null>(null);

export const PostProvider = ({ children }: PostProviderProps) => {
  const crudService = Container.get(CRUDService<DTO<Post>>);
  // GET
  const postQueryKey = ['posts'];
  crudService.endpoint = '/post';
  crudService.queryKey = postQueryKey;
  const { data, isFetched } = crudService.all;
  let list = undefined;
  if (isFetched && data) {
    list = data.list;
  }
  // POST
  const addPostQueryKey = ['add_posts'];
  const addPost = (body: PostBodyDataValidation) => {
    crudService.endpoint = '/post/c'
    crudService.body = JSON.stringify(body);
    crudService.queryKey = addPostQueryKey;
    crudService.add.mutate();
  };
  return (
    <PostContext.Provider value={{ 
      list, 
      isFetched, 
      addPost
     }}>
      {children}
    </PostContext.Provider>
  );
};

export const usePostContext = () => {
  const context = useContext(PostContext);

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
