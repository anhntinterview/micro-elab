import Container, { Service } from 'typedi';
import CRUDService from '@app/app/core/service/crud/crud.service';
import { DTO } from '../entity';
import { Post, PostBodyDataValidation } from '../entity/post.entity';
import { GlobalElementPropsType } from '../context/type';

// TODO:
// 1. Chuyển toàn bộ thành base CRUD. Nếu không sau này đi từng Resource kiểm tra thì rất mất công
// 2. Tạo property active để kiểm soát khi nào api được call hay không

export const exportGlobalPostContextProps = (
  crudService: CRUDService
): GlobalElementPropsType<DTO<Post>, PostBodyDataValidation> => {
  // GET
  const getPostApiPath = '/post';
  const getPostQueryKey = ['posts'];
  const query = ({ enable }: { enable: boolean }) =>
    crudService.all<DTO<Post>>(getPostApiPath, getPostQueryKey, enable);

  // POST
  const postPostApiPath = '/post/c';
  const addPostQueryKey = ['add_post'];
  const addRecord = ({ enable }: { enable: boolean }) => crudService.post<PostBodyDataValidation>(
    postPostApiPath,
    addPostQueryKey,
    enable
  );

  return {
    query,
    addRecord,
  };
};

/*
@Service()
class PostResource {
  private crudService = Container.get(CRUDService);

  query = this.crudService.all<DTO<Post>>('/post', ['posts']);

  addRecord = this.crudService.post<PostBodyDataValidation>('/post/c', [
    'add_post',
  ]);

  export = (): GlobalElementPropsType<DTO<Post>, PostBodyDataValidation> => ({
    query: this.query,
    addRecord: this.addRecord,
  });
}

export default PostResource;
*/
