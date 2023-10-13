'use client';

import CustomEditor from '@app/app/template/component/CustomEditor';
import { useElementContext } from '@app/app/template/context/element.provider';
import * as React from 'react';

interface IAddingArticleProps {}

const AddingArticle: React.FunctionComponent<IAddingArticleProps> = () => {
  // return <CustomEditor />;
  const { 
    // crudService, 
    addPost 
  } = useElementContext();

  return <CustomEditor 
    addPost={addPost} 
    // crudService={crudService} 
  />;
};

export default AddingArticle;
