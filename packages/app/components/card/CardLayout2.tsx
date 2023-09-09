import * as React from 'react';

interface ICardLayout2Props {}

const CardLayout2: React.FunctionComponent<ICardLayout2Props> = (props) => {
  return (
    <div className="global-item-author is-image global-image">
      <a
        href="/author/breana/"
        className="global-link"
        title="Breana Flatley"
      ></a>
      <img
        src="/bg5.jpeg"
        loading="lazy"
        alt="Breana Flatley"
      />{' '}
    </div>
  );
};

export default CardLayout2;
