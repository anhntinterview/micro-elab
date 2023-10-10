'use client';

import CustomEditor from '@app/app/template/component/CustomEditor';
import { usePostContext } from '@app/app/template/context/post.provider';
import * as React from 'react';

interface IAddingArticleProps {}

const AddingArticle: React.FunctionComponent<IAddingArticleProps> = () => {
  const { addPost } = usePostContext();

  return <CustomEditor addPost={addPost} />;
};

export default AddingArticle;
