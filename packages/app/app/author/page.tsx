import Intro from '@app/app/components/author/intro';
import * as React from 'react';
import { MasterLayoutProvider } from '../core/layout/layout.provider';

interface IAuthorProps {}

const Author: React.FunctionComponent<IAuthorProps> = (props) => {
  return (
    <MasterLayoutProvider>
      <Intro />
    </MasterLayoutProvider>
  );
};

export default Author;
