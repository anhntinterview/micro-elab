'use client';

import CustomEditor from '@app/app/template/component/CustomEditor';
import { useElementContext } from '@app/app/template/context/element.provider';
import * as React from 'react';

interface IAddingArticleProps {}

const AddingArticle: React.FunctionComponent<IAddingArticleProps> = () => {
  const {
    globalPostProps: { addRecord },
  } = useElementContext();
  const addRecordMutate = addRecord({enable: true})
  return (
    <CustomEditor
      addRecordMutate={addRecordMutate}
    />
  );
};

export default AddingArticle;
