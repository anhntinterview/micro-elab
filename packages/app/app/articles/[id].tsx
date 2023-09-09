import * as React from 'react';
import { MasterLayoutProvider } from '../core/layout/layout.provider';

interface IArticleProps {}

const Article: React.FunctionComponent<IArticleProps> = (props) => {
  return (
    <MasterLayoutProvider>
      <Article />
    </MasterLayoutProvider>
  );
};

export default Article;
