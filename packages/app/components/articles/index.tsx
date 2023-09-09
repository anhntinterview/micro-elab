import * as React from 'react';
import CardLayout2 from '../card/CardLayout2';
import CardLayout1 from '../card/CardLayout1';

interface IArticleProps {}

const Articles: React.FunctionComponent<IArticleProps> = (props) => {
  return (
    <div className="loop-section global-padding">
      <div className="loop-subtitle">
        <small className="loop-subtitle-title global-title">
          See what we’ve <br />
          <span>written lately</span>
        </small>
        <div className="global-authors option-1-2-3">
          <div>
            <CardLayout2 />
          </div>
          <small>Meet our author</small>
          <small>Meet our authors</small>
          <small>Meet our top authors</small>
        </div>
      </div>
      <div className="loop-wrap">
        <CardLayout1 />
      </div>
    </div>
  );
};

export default Articles;
