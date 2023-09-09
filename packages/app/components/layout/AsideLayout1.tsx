import * as React from 'react';

interface IAsideLayout1Props {
  urlImage: string;
}

const signUpStyle1 = (urlImage: string) => {
  return {
    background: urlImage,
  } as const
}

const AsideLayout1: React.FunctionComponent<IAsideLayout1Props> = (props) => {
  const { urlImage } = props;
  
  return (
    <div
      className="custom-image global-bg-image"
      style={signUpStyle1(urlImage)}
    ></div>
  );
};

export default AsideLayout1;
