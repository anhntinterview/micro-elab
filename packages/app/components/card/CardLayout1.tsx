import * as React from 'react';
import AvatarCard from './AvatarCard';

interface ICardProps {}

const CardLayout1: React.FunctionComponent<ICardProps> = (props) => {
  return (
    <article className="item is-loop is-image">
      <div className="item-image global-image global-image-orientation global-radius">
        <a
          href="/creating-is-a-privilege-but-its-also-a-gift/"
          className="global-link"
          aria-label="Creating is a privilege but it’s also a gift"
        ></a>
        <img
          sizes="(max-width:480px) 300px, (max-width:768px) 600px, 1200px"
          src="/bg8.jpeg"
          loading="lazy"
          alt=""
        />
        <div className="item-authors global-authors">
          <div>
            <AvatarCard />
          </div>
        </div>
      </div>
      <div className="item-content">
        <div className="item-tags global-tags">
          <a href="/tag/lifestyle/">Lifestyle</a>
          <span>
            <a href="/tag/people/">People</a>
            <a href="/tag/review/">Review</a>
          </span>
        </div>
        <h2 className="item-title">
          <a href="/creating-is-a-privilege-but-its-also-a-gift/">
            Creating is a privilege but it’s also a gift
          </a>
        </h2>
        <p className="item-excerpt">
          Nullam vel lectus vel velit pellentesque dignissim nec id magna. Cras
          molestie ornare quam at semper. Proin a ipsum ex. Curabitur eu
          venenatis justo. Nullam felis augue, imperdiet at sodales a,
          sollicitudin nec risus.
        </p>
      </div>
    </article>
  );
};

export default CardLayout1;
