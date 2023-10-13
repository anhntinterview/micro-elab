'use client';

import * as React from 'react';
import { heroStyle2, heroStyle3 } from './inlineStyle';
import CardLayout1 from '../card/CardLayout1';
import Subcribe from '../subcribe';
import { useElementContext } from '../../template/context/element.provider';
import { Post } from '@app/app/template/entity/post.entity';
import { DTO } from '@app/app/template/entity';
import Loading from '../loading';

interface IHeroProps {}

const Hero: React.FunctionComponent<IHeroProps> = ({}) => {
  /*
  const { query } = useElementContext();
  React.useEffect(() => {
    // Khi component được tạo, sử dụng fetchDataQuery để lấy dữ liệu từ API
    query.refetch();
  }, [query]);

  if (query.isLoading) {
    return <div>Loading...</div>;
  }

  if (query.isError) {
    return <div>Error</div>;
  }
  const data = query.data;
  console.log(`data: `,query.isError);
  */
  const { isFetched, data } = useElementContext();
  console.log(`data in hero component:`, data);
  
  return (
    <div className="hero-section">
      <div className="hero-wrap">
        <Subcribe />
        <div className="featured-section">
          <div className="global-padding">
            <div className="featured-subtitle global-subtitle">
              <small className="global-subtitle-title">
                Get started with our <span>best stories</span>
              </small>
              <div className="featured-navigation">
                <button className="featured-btn-previous" aria-label="Previous">
                  <svg
                    role="img"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M8.775 3.225 0 12l8.775 8.775 1.498-1.407-6.421-6.267H24v-2.202H3.852l6.421-6.267-1.498-1.407Z"></path>
                  </svg>
                </button>
                <button className="featured-btn-next" aria-label="Next">
                  <svg
                    role="img"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M15.225 20.775 24 12l-8.775-8.775-1.498 1.407 6.421 6.267H0v2.202h20.148l-6.421 6.267 1.498 1.407Z"></path>
                  </svg>
                </button>
              </div>
            </div>
            <div
              className="featured-wrap flickity-enabled is-draggable"
              tabIndex={0}
            >
              <div className="flickity-viewport" style={heroStyle2}>
                <div className="flickity-slider" style={heroStyle3}>
                  {isFetched ? (
                    data!.list.map((item) => {
                      return <CardLayout1 key={item.id} post={item} />;
                    })
                  ) : (
                    <Loading />
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
