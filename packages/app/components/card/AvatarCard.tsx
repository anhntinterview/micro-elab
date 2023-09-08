import * as React from 'react';

interface IAvatarCardProps {}

const AvatarCard: React.FunctionComponent<IAvatarCardProps> = (props) => {
  return (
    <div className="item-author global-item-author is-image global-image">
      <a
        href="/author/nichole/"
        className="global-link"
        title="Nichole Becker"
      ></a>
      <img src="/bg2.jpeg" loading="lazy" alt="Nichole Becker" />{' '}
    </div>
  );
};

export default AvatarCard;
