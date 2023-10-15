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
  isFetched: boolean;
  data?: DTO<Post>;
  addPost: UseMutationResult<any, unknown, PostBodyDataValidation, unknown>;
};

const ElementContext = createContext<ElementContextType | null>(null);

export const ElementProvider = ({ children }: ElementProviderProps) => {
  const crudService = Container.get(CRUDService);
  // GET
  const getPostApiPath = '/post';
  const getPostQueryKey = ['posts'];
  const { isFetched, data } = crudService.all<DTO<Post>>(getPostApiPath,getPostQueryKey);

  // POST
  const postPostApiPath = '/post/c';
  const addPostQueryKey = ['add_posts'];
  const addPost = crudService.add<PostBodyDataValidation>(postPostApiPath, addPostQueryKey);

  return (
    <ElementContext.Provider
      value={{
        isFetched,
        data,
        addPost,
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
