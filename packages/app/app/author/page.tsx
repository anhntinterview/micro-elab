import Intro from '@app/components/author/intro';
import * as React from 'react';

interface IAuthorProps {}

const Author: React.FunctionComponent<IAuthorProps> = (props) => {
  return (
    <>
      <Intro />
    </>
  );
};

export default Author;
